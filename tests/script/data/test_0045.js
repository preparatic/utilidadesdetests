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

//  Id pregunta: 30 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes afirmaciones acerca de la auditor&iacute;a inform&aacute;tica es falsa?:";
 choices[0]= new Array();
 choices[0][0] = "La finalidad de la auditor&iacute;a inform&aacute;tica es emitir un juicio acerca del estado de los sistemas";
 choices[0][1] = "La auditor&iacute;a inform&aacute;tica llega siempre a una valoraci&oacute;n o diagn&oacute;stico final, positivo o negativo";
 choices[0][2] = "La auditor&iacute;a inform&aacute;tica propone acciones a realizar";
 choices[0][3] = "La auditor&iacute;a inform&aacute;tica analiza tanto la infraestructura f&iacute;sica y l&oacute;gica como la estructura organizativa";
 answers[0] = choices[0][1];
 units[0] = "31,32,33";
 comments[0] = "Id Pregunta: 30. ";


//  Id pregunta: 124 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  El  m&eacute;todo de ordenaci&oacute;n de alternativas que incorpora la posibilidad de valorar el riesgo y la incertidumbre es:";
 choices[1]= new Array();
 choices[1][0] = "El m&eacute;todo Promethee";
 choices[1][1] = "Utilidad multiatributo";
 choices[1][2] = "El m&eacute;todo de permutaci&oacute;n";
 choices[1][3] = "Ninguno de los restantes";
 answers[1] = choices[1][1];
 units[1] = "34";
 comments[1] = "Id Pregunta: 124. NULL";


//  Id pregunta: 153 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  El modelo orientado a los tratamientos:";
 choices[2]= new Array();
 choices[2][0] = "Trata de identificar las funciones a desarrollar por el sistema de informaci&oacute;n";
 choices[2][1] = "Trata de identificar la evoluci&oacute;n de la vida de las entidades";
 choices[2][2] = "Trata de identificar las funciones a desarrollar por el sistema inform&aacute;tico";
 choices[2][3] = "Trata de identificar la evoluci&oacute;n de la vida del sistema";
 answers[2] = choices[2][0];
 units[2] = "21";
 comments[2] = "Id Pregunta: 153. ";


//  Id pregunta: 217 AÃ±o de creación de pregunta: 2007-01-01
 questions[3]= "4)  La metodolog&iacute;a MAGERIT:";
 choices[3]= new Array();
 choices[3][0] = "Se apoya en tres submodelos: submodelo de elementos, submodelo de eventos y submodelo de procesos.";
 choices[3][1] = "Se estructura en tres libros: M&eacute;todo, Cat&aacute;logo de Activos y Gu&iacute;a de T&eacute;cnicas";
 choices[3][2] = "MAGERIT es una metodolog&iacute;a de car&aacute;cter p&uacute;blico, perteneciente al Ministerio de Administraciones P&uacute;blicas. Su utilizaci&oacute;n requiere autorizaci&oacute;n previa del MAP";
 choices[3][3] = "Se estructura en tres libros: M&eacute;todo, Cat&aacute;logo de Elementos y Gu&iacute;a de T&eacute;cnicas";
 answers[3] = choices[3][3];
 units[3] = "33";
 comments[3] = "Id Pregunta: 217. ";


//  Id pregunta: 235 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  En relaci&oacute;n con la gu&iacute;a de portabilidad X/Open XPG4, el perfil XPG4 Base:";
 choices[4]= new Array();
 choices[4][0] = "No existe";
 choices[4][1] = "Supone la base de un servidor de base de datos";
 choices[4][2] = "Es equivalente al XPG3 y la base para el resto de los perfiles";
 choices[4][3] = "Para obtenerlo, es necesario certificar el componente XPG4 BSFT";
 answers[4] = choices[4][2];
 units[4] = "40";
 comments[4] = "Id Pregunta: 235. XPG";


//  Id pregunta: 356 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Las cuatro etapas del modelo inicial de Nolan son:";
 choices[5]= new Array();
 choices[5][0] = "Iniciaci&oacute;n, contagio, control y madurez";
 choices[5][1] = "Iniciaci&oacute;n, expansi&oacute;n, control y madurez";
 choices[5][2] = "Iniciaci&oacute;n, contagio, formalizaci&oacute;n y madurez";
 choices[5][3] = "Iniciaci&oacute;n, expansi&oacute;n, formalizaci&oacute;n y madurez";
 answers[5] = choices[5][3];
 units[5] = "22";
 comments[5] = "Id Pregunta: 356. nolan";


//  Id pregunta: 744 AÃ±o de creación de pregunta: 2004-01-01
 questions[6]= "7)  Las aplicaciones Java son comprobadas:";
 choices[6]= new Array();
 choices[6][0] = "en tiempo de compilaci&oacute;n";
 choices[6][1] = "en tiempo de ejecuci&oacute;n";
 choices[6][2] = "en tiempo de compilaci&oacute;n y en tiempo de ejecuci&oacute;n";
 choices[6][3] = "en tiempo de compilaci&oacute;n siempre y en tiempo de ejecuci&oacute;n s&oacute;lo si se trata de un programa que no requiera ejecuci&oacute;n en tiempo real";
 answers[6] = choices[6][2];
 units[6] = "60";
 comments[6] = "Id Pregunta: 744. Similar a examen TIC SS A 2003";


//  Id pregunta: 751 AÃ±o de creación de pregunta: 2004-01-01
 questions[7]= "8)  El lenguaje Java Script:";
 choices[7]= new Array();
 choices[7][0] = "Permite escribir c&oacute;digo que se compila en el servidor para su ejecuci&oacute;n en el cliente";
 choices[7][1] = "Es interpretado por el navegador cuando se abre un fichero virtual en el que se encuentra c&oacute;digo javascript embebido";
 choices[7][2] = "S&oacute;lo puede ser compilado si el cliente tiene instalada una m&aacute;quina virtual java (JVM)";
 choices[7][3] = "Se ejecuta en la m&aacute;quina cliente una vez que ha sido descargado en forma de applets, ejecutables en cualquier m&aacute;quina";
 answers[7] = choices[7][1];
 units[7] = "61";
 comments[7] = "Id Pregunta: 751. Examen TIC MAP B 2004";


//  Id pregunta: 756 AÃ±o de creación de pregunta: 2004-01-01
 questions[8]= "9)  Respecto a los &quot;web services&quot;, &iquest;cu&aacute;l de las siguientes afirmaciones es falsa?";
 choices[8]= new Array();
 choices[8][0] = "Se describen mediante el lenguaje WSDL";
 choices[8][1] = "Para usarlos han de publicarse siempre en un registro UDDI";
 choices[8][2] = "Pueden interaccionar clientes  y servicios de distintas tecnolog&iacute;as";
 choices[8][3] = "Utilizan el protocolo SOAP";
 answers[8] = choices[8][1];
 units[8] = "51";
 comments[8] = "Id Pregunta: 756. NULL";


//  Id pregunta: 1057 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  El software para la productividad en grupos de trabajo incluye:";
 choices[9]= new Array();
 choices[9][0] = "Gesti&oacute;n de agenda compartida";
 choices[9][1] = "Teleconversaciones m&uacute;ltiples";
 choices[9][2] = "Correo electr&oacute;nico";
 choices[9][3] = "Todas las respuestas anteriores son correctas";
 answers[9] = choices[9][3];
 units[9] = "71";
 comments[9] = "Id Pregunta: 1057. ";


//  Id pregunta: 1099 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  En inteligencia artificial:";
 choices[10]= new Array();
 choices[10][0] = "Los primeros trabajos se centraron en m&eacute;todos de b&uacute;squeda heur&iacute;stica y m&eacute;todos de deducci&oacute;n autom&aacute;tica";
 choices[10][1] = "La rob&oacute;tica no secuencializa las tareas (planificaci&oacute;n) para conseguir pasar de un estado actual a un estado objetivo";
 choices[10][2] = "La representaci&oacute;n del conocimiento pertenece al campo de los Sistemas de Gesti&oacute;n de Bases de Datos, pero no al de la inteligencia artificial";
 choices[10][3] = "Los m&eacute;todos heur&iacute;sticos buscan una formulaci&oacute;n te&oacute;rica para la representaci&oacute;n del conocimiento";
 answers[10] = choices[10][0];
 units[10] = "63";
 comments[10] = "Id Pregunta: 1099. ";


//  Id pregunta: 1496 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Indicar cu&aacute;l de las siguientes afirmaciones no es cierta acerca del lenguaje HTML:";
 choices[11]= new Array();
 choices[11][0] = "Es un lenguaje de programaci&oacute;n";
 choices[11][1] = "Permite referencias a otros documentos o recursos de la red";
 choices[11][2] = "Permite la inclusi&oacute;n de marcas (tags) para controlar los aspectos de la presentaci&oacute;n";
 choices[11][3] = "Para escribir en HTML se necesita al menos un editor ASCII";
 answers[11] = choices[11][0];
 units[11] = "69";
 comments[11] = "Id Pregunta: 1496. NULL";


//  Id pregunta: 1527 AÃ±o de creación de pregunta: 2003-01-01
 questions[12]= "13)  El comando de SQL ' DELETE', &iquest;qu&eacute; hace?";
 choices[12]= new Array();
 choices[12][0] = "Borra una tabla determinada.";
 choices[12][1] = "Borra un &iacute;ndice de una tabla.";
 choices[12][2] = "Borra valores de una tabla.";
 choices[12][3] = "Borra tanto valores de una tabla, la tabla entera como &iacute;ndices de una tabla seg&uacute;n sea la sintaxis de la sentencia SQL.";
 answers[12] = choices[12][2];
 units[12] = "58";
 comments[12] = "Id Pregunta: 1527. ";


//  Id pregunta: 1782 AÃ±o de creación de pregunta: 2006-01-01
 questions[13]= "14)  Se&ntilde;ale la definici&oacute;n m&aacute;s correcta para el producto XEN:";
 choices[13]= new Array();
 choices[13][0] = "Entorno de ejecuci&oacute;n .NET sobre Linux, al estilo de Mono";
 choices[13][1] = "Hoja de c&aacute;lculo para KDE";
 choices[13][2] = "Sistema gestor de redes empresariales extendidas";
 choices[13][3] = "Sistema de virtualizaci&oacute;n de sistemas operativos, de fuente abierta";
 answers[13] = choices[13][3];
 units[13] = "61,62";
 comments[13] = "Id Pregunta: 1782. ";


//  Id pregunta: 1835 AÃ±o de creación de pregunta: 2006-01-01
 questions[14]= "15)  &iquest;Qu&eacute; es un DTD?";
 choices[14]= new Array();
 choices[14][0] = "Define la forma en que los documentos XML deben conectarse entre s&iacute;";
 choices[14][1] = "Descripci&oacute;n del formato en el que se desea que aparezcan las entidades definidas en un documento";
 choices[14][2] = "Definici&oacute;n de la gram&aacute;tica de un documento";
 choices[14][3] = "Permite controlar el formato de los documentos HTML con descripciones particulares";
 answers[14] = choices[14][2];
 units[14] = "69";
 comments[14] = "Id Pregunta: 1835. NULL";


//  Id pregunta: 2072 AÃ±o de creación de pregunta: 2004-01-01
 questions[15]= "16)  &iquest;Cu&aacute;l de estos elementos no forma parte de EFQM?";
 choices[15]= new Array();
 choices[15][0] = "Liderazgo";
 choices[15][1] = "Resultados Empresariales";
 choices[15][2] = "Pol&iacute;ticas y estrategias";
 choices[15][3] = "Valor de las acciones";
 answers[15] = choices[15][3];
 units[15] = "92";
 comments[15] = "Id Pregunta: 2072. NULL";


//  Id pregunta: 2286 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  El modelo de UML que describe las necesidades de los usuarios es el:";
 choices[16]= new Array();
 choices[16][0] = "modelo de casos de uso";
 choices[16][1] = "modelo de despliegue";
 choices[16][2] = "modelo de interacci&oacute;n";
 choices[16][3] = "modelo de realizaci&oacute;n";
 answers[16] = choices[16][0];
 units[16] = "82";
 comments[16] = "Id Pregunta: 2286. ";


//  Id pregunta: 2316 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  En el modelo entidad/relaci&oacute;n:";
 choices[17]= new Array();
 choices[17][0] = "una relaci&oacute;n o interrelaci&oacute;n expresa una correspondencia o asociaci&oacute;n entre 2 &oacute; m&aacute;s entidades";
 choices[17][1] = "una relaci&oacute;n no puede tener atributos, ya que esto s&oacute;lo corresponde a las entidades";
 choices[17][2] = "la cardinalidad se refiere al m&iacute;nimo y m&aacute;ximo n&uacute;mero de entidades que puede haber en el sistema";
 choices[17][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[17] = choices[17][0];
 units[17] = "80";
 comments[17] = "Id Pregunta: 2316. ";


//  Id pregunta: 2574 AÃ±o de creación de pregunta: 2004-01-01
 questions[18]= "19)  En la calidad del Software basandonos en el coste de implantaci&oacute;n, la Teor&iacute;a de la Calidad/Coste dice:";
 choices[18]= new Array();
 choices[18][0] = "El coste de producci&oacute;n aumenta exponencialmente con el aumento de calidad";
 choices[18][1] = "Un producto de calidad es mas barato de producir; el coste disminuye exponencialmente con el aumento de la calidad";
 choices[18][2] = "El coste es constante e independiente de la calidad del producto";
 choices[18][3] = "Ninguna de ellas";
 answers[18] = choices[18][0];
 units[18] = "87,88,92";
 comments[18] = "Id Pregunta: 2574. ";


//  Id pregunta: 2586 AÃ±o de creación de pregunta: 2003-01-01
 questions[19]= "20)  En el contexto de las metodolog&iacute;as estructuradas para el dise&ntilde;o de sistemas de informaci&oacute;n, &iquest;cu&aacute;l de las siguientes afirmaciones es la correcta?:";
 choices[19]= new Array();
 choices[19][0] = "El dise&ntilde;o l&oacute;gico debe preceder y estar separado del dise&ntilde;o f&iacute;sico,";
 choices[19][1] = "El dise&ntilde;o f&iacute;sico debe preceder y estar separado del dise&ntilde;o l&oacute;gico.";
 choices[19][2] = "No existe separaci&oacute;n entre dise&ntilde;o f&iacute;sico y l&oacute;gico: se realiza de forma conjunta.";
 choices[19][3] = "La metodolog&iacute;a solo aborda el dise&ntilde;o l&oacute;gico.";
 answers[19] = choices[19][0];
 units[19] = "86";
 comments[19] = "Id Pregunta: 2586. Junta Andaluc&iacute;a";


//  Id pregunta: 2712 AÃ±o de creación de pregunta: 2003-01-01
 questions[20]= "21)  &iquest;Cu&aacute;l de estos es un tipo de fichero de sonido?";
 choices[20]= new Array();
 choices[20][0] = " TIFF";
 choices[20][1] = "PNG";
 choices[20][2] = " VRML ";
 choices[20][3] = "MIDI";
 answers[20] = choices[20][3];
 units[20] = "94";
 comments[20] = "Id Pregunta: 2712. ";


//  Id pregunta: 2734 AÃ±o de creación de pregunta: 2006-01-01
 questions[21]= "22)  El an&aacute;lisis de requerimientos es:";
 choices[21]= new Array();
 choices[21][0] = "Una actividad intesiva de comunicaci&oacute;n";
 choices[21][1] = "Una actividad intensiva de programaci&oacute;n";
 choices[21][2] = "Una actividad intesiva de especificaci&oacute;n";
 choices[21][3] = "Ninguna de las anteriores";
 answers[21] = choices[21][0];
 units[21] = "78";
 comments[21] = "Id Pregunta: 2734. ";


//  Id pregunta: 3046 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  &iquest;Qu&eacute; considera menos adecuado para proteger una red de posibles virus?:";
 choices[22]= new Array();
 choices[22][0] = "Ordenadores sin disquetera, con todo el software preinstalado";
 choices[22][1] = "Proteger cada estaci&oacute;n de trabajo mediante explorador de signaturas, explorador de sumas de verificaci&oacute;n y un controlador de actividad residente en memoria";
 choices[22][2] = "Prestar atenci&oacute;n a los ordenadores alquilados o que se vayan a reparar fuera de la empresa";
 choices[22][3] = "Utilizar ordenadores de encendido remoto";
 answers[22] = choices[22][3];
 units[22] = "111";
 comments[22] = "Id Pregunta: 3046. NULL";


//  Id pregunta: 3047 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  &iquest;Qu&eacute; diferencia hay entre un servidor de ficheros y un servidor de bases de datos?:";
 choices[23]= new Array();
 choices[23][0] = "El servidor de ficheros devuelve el fichero entero y el de bases de datos s&oacute;lo el dato solicitado";
 choices[23][1] = "El servidor de ficheros es m&aacute;s barato";
 choices[23][2] = "No hay diferencia; es lo mismo";
 choices[23][3] = "Son ciertas &lsquo;a&rsquo; y &lsquo;b&rsquo;";
 answers[23] = choices[23][3];
 units[23] = "113";
 comments[23] = "Id Pregunta: 3047. ";


//  Id pregunta: 3210 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  El control de errores en la serie V de la ITU-T se trata en:";
 choices[24]= new Array();
 choices[24][0] = "V.1-V.8";
 choices[24][1] = "V.50-V.59";
 choices[24][2] = "V.100-V.140";
 choices[24][3] = "V.40-V.44";
 answers[24] = choices[24][3];
 units[24] = "42";
 comments[24] = "Id Pregunta: 3210. ";


//  Id pregunta: 3290 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  &iquest;Qu&eacute; es un puente (bridge) en el mundo de las comunicaciones?:";
 choices[25]= new Array();
 choices[25][0] = "Un equipo que enlaza varias redes a nivel 3 de OSI";
 choices[25][1] = "Un equipo que enlaza varias redes a nivel 4 de OSI";
 choices[25][2] = "Un equipo que enlaza varias redes a nivel 5 de OSI";
 choices[25][3] = "Nada de lo anterior  ";
 answers[25] = choices[25][3];
 units[25] = "102";
 comments[25] = "Id Pregunta: 3290. ";


//  Id pregunta: 3291 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  &iquest;Qu&eacute; estandariza el est&aacute;ndar MIME?:";
 choices[26]= new Array();
 choices[26][0] = "Protocolo de acceso al correo electr&oacute;nico";
 choices[26][1] = "Seguridad en Sistemas de correo electr&oacute;nico";
 choices[26][2] = "Transferencia de documentos multimedia a trav&eacute;s de correo electr&oacute;nico";
 choices[26][3] = "Agenda de direcciones de correo electr&oacute;nico";
 answers[26] = choices[26][2];
 units[26] = "106";
 comments[26] = "Id Pregunta: 3291. ";


//  Id pregunta: 3377 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  El est&aacute;ndar X.25 usa, a nivel de enlace, el protocolo:";
 choices[27]= new Array();
 choices[27][0] = "SDLC";
 choices[27][1] = "LAP-B";
 choices[27][2] = "Ethernet";
 choices[27][3] = "SAP";
 answers[27] = choices[27][1];
 units[27] = "100, 101, 109";
 comments[27] = "Id Pregunta: 3377. ";


//  Id pregunta: 3562 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  En un domicilio particular abonado a un &quot;acceso b&aacute;sico&quot; de RDSI:";
 choices[28]= new Array();
 choices[28][0] = "Siempre puede estar conectado a Internet y a su vez recibir una llamada telef&oacute;nica";
 choices[28][1] = "No puede estar conectado a Internet ya su vez recibir una llamada telef&oacute;nica";
 choices[28][2] = "Puede estar conectado a Internet y a su vez recibir una llamada telef&oacute;nica, solo en el caso de que disponga de un &quot;m&oacute;dem&quot; ADSL";
 choices[28][3] = "Ninguna de las anteriores es correcta";
 answers[28] = choices[28][0];
 units[28] = "103";
 comments[28] = "Id Pregunta: 3562. ";


//  Id pregunta: 3581 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  Entre las limitaciones inherentes a las redes locales, que hacen necesaria la segmentaci&oacute;n y la interconexi&oacute;n, no se encuentra:";
 choices[29]= new Array();
 choices[29][0] = "limitaciones en el n&uacute;mero de hosts";
 choices[29][1] = "limitaciones de tecnolog&iacute;as disponibles y fabricantes";
 choices[29][2] = "limitaciones en el n&uacute;mero y tipo de nodos, as&iacute; como en su acceso";
 choices[29][3] = "limitaciones de la distancia a cubrir";
 answers[29] = choices[29][1];
 units[29] = "102";
 comments[29] = "Id Pregunta: 3581. ";


//  Id pregunta: 3652 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  La topolog&iacute;a m&aacute;s com&uacute;n de dise&ntilde;o de redes SDH es:";
 choices[30]= new Array();
 choices[30][0] = "malla completa o parcial";
 choices[30][1] = "anillo";
 choices[30][2] = "estrella";
 choices[30][3] = "&aacute;rbol";
 answers[30] = choices[30][1];
 units[30] = "101";
 comments[30] = "Id Pregunta: 3652. ";


//  Id pregunta: 3927 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  &iquest;Cu&aacute;l de los siguientes sistemas de cableado es conocido como &quot;cheapernet&quot;?";
 choices[31]= new Array();
 choices[31][0] = "El cable coaxial utilizado en el est&aacute;ndar 10Base5";
 choices[31][1] = "El cable coaxial utilizado en el est&aacute;ndar 10Base2";
 choices[31][2] = "El cable UTP de categor&iacute;a 3";
 choices[31][3] = "El cable STP de 150Ohm";
 answers[31] = choices[31][1];
 units[31] = "99";
 comments[31] = "Id Pregunta: 3927. ";


//  Id pregunta: 3994 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  En relaci&oacute;n a la gesti&oacute;n de red (se&ntilde;ale la falsa):";
 choices[32]= new Array();
 choices[32][0] = "Los modelos de gesti&oacute;n se pueden clasificar seg&uacute;n el grado de descentralizaci&oacute;n, el dominio, el grado de heterogeneidad y la jerarqu&iacute;a organizativa";
 choices[32][1] = "El est&aacute;ndar de OSI es SNMP (Symple Network Management Protocol)";
 choices[32][2] = "CMIP y SNMP utilizan MIB";
 choices[32][3] = "Todas son verdaderas";
 answers[32] = choices[32][1];
 units[32] = "104";
 comments[32] = "Id Pregunta: 3994. ";


//  Id pregunta: 4140 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  Cuando multitud de sistemas atacan un &uacute;nico sistema provocando su caida, estamos ante";
 choices[33]= new Array();
 choices[33][0] = "Un ataque de denegaci&oacute;n de servicio (DoS)";
 choices[33][1] = "Echelon, una red global de espias";
 choices[33][2] = "Un ataque distribuido de denegaci&oacute;n de servicio (DDoS)";
 choices[33][3] = "Un ataque de ingenier&iacute;a social";
 answers[33] = choices[33][2];
 units[33] = "112";
 comments[33] = "Id Pregunta: 4140. ";


//  Id pregunta: 4171 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  &iquest;C&oacute;mo evita SSL un ataque de &quot;hombre en el medio&quot;?";
 choices[34]= new Array();
 choices[34][0] = "Usa certificados para autenticar la clave p&uacute;blica del servidor";
 choices[34][1] = "Usa un valor aleatorio &uacute;nico por conexi&oacute;n en el protocolo de intercambio de credenciales";
 choices[34][2] = "Usa claves de 128 bits";
 choices[34][3] = "Cada mensaje enviado incluye un n&uacute;mero de secuencia";
 answers[34] = choices[34][1];
 units[34] = "70";
 comments[34] = "Id Pregunta: 4171. ";


//  Id pregunta: 4211 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  Indique cu&aacute;l de las siguientes afirmaciones es cierta referida a la arquitectura de desarrollo  .NET";
 choices[35]= new Array();
 choices[35][0] = "Biz Talk Server no resulta adecuado si el proceso implica m&uacute;ltiples documentos y servicios";
 choices[35][1] = "En el dise&ntilde;o de la capa de datos se puede disponer de uno o m&aacute;s or&iacute;genes de datos de tipos diferentes";
 choices[35][2] = "Se facilita el mantenimiento de la aplicaci&oacute;n si los componentes l&oacute;gicos de acceso a datos invocan a otros componentes l&oacute;gicos de acceso a datos";
 choices[35][3] = "Los componentes de interfaz de usuario no pueden restringir los tipos de entrada de datos, ya que esto &uacute;nicamente se permite en la base de datos";
 answers[35] = choices[35][1];
 units[35] = "59,115";
 comments[35] = "Id Pregunta: 4211. ";


//  Id pregunta: 4241 AÃ±o de creación de pregunta: 2007-01-01
 questions[36]= "37)  Cu&aacute;l de las siguientes no es una fase t&iacute;pica de PUDS (Proceso Unificado del Desarrollo del SW)";
 choices[36]= new Array();
 choices[36][0] = "Iniciaci&oacute;n";
 choices[36][1] = "Finalizaci&oacute;n";
 choices[36][2] = "Transici&oacute;n";
 choices[36][3] = "Elaboraci&oacute;n";
 answers[36] = choices[36][1];
 units[36] = "79";
 comments[36] = "Id Pregunta: 4241. ";


//  Id pregunta: 4302 AÃ±o de creación de pregunta: 2007-01-01
 questions[37]= "38)  Una vez obtenido el Diagrama de Flujo de Datos y el Modelo L&oacute;gico Normalizado, se debe comprobar que:";
 choices[37]= new Array();
 choices[37][0] = "Cada almac&eacute;n del Diagrama de Flujo de Datos se corresponde con una y s&oacute;lo una entidad del Modelo L&oacute;gico Normalizado";
 choices[37][1] = "Cada almac&eacute;n del Diagrama de Flujo de Datos se corresponde con una o varias entidades del Modelo L&oacute;gico Normalizado";
 choices[37][2] = "Cada entidad del Modelo L&oacute;gico Normalizado se corresponde con uno o varios almacenes del Diagrama de Flujo de Datos";
 choices[37][3] = "Cada flujo del Diagrama de Flujo de Datos se almacena en una o varias entidades del Modelo L&oacute;gico Normalizado.";
 answers[37] = choices[37][1];
 units[37] = "81";
 comments[37] = "Id Pregunta: 4302. ";


//  Id pregunta: 4353 AÃ±o de creación de pregunta: 2007-01-01
 questions[38]= "39)  La telefon&iacute;a m&oacute;vil celular:";
 choices[38]= new Array();
 choices[38][0] = "Permite el paso din&aacute;mico de un terminal entre las c&eacute;lulas.";
 choices[38][1] = "No permite el cambio de c&eacute;lula durante la conversaci&oacute;n.";
 choices[38][2] = "Establece un tama&ntilde;o de c&eacute;lula mayor en ciudad que en espacios abiertos a fin de soportar la mayor densidad de tr&aacute;fico.";
 choices[38][3] = "S&oacute;lo funciona con tecnolog&iacute;a digital.";
 answers[38] = choices[38][0];
 units[38] = "108";
 comments[38] = "Id Pregunta: 4353. ";


//  Id pregunta: 4424 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  Indique la respuesta correcta en relaci&oacute;n con el Real Decreto 209/2003, de 21 de febrero, por el que se regula los registros y las notificaciones telem&aacute;ticas, as&iacute; como la utilizaci&oacute;n de medios telem&aacute;ticos para la sustituci&oacute;n de la aportaci&oacute;n de certificados por los ciudadanos:";
 choices[39]= new Array();
 choices[39][0] = "Los registros telem&aacute;ticos realizar&aacute;n y anotar&aacute;n salidas de escritos y comunicaciones durante las 24 horas de todos los d&iacute;as del a&ntilde;o.";
 choices[39][1] = "La presentaci&oacute;n obligatoria de solicitudes por medios telem&aacute;ticos requiere que as&iacute; lo disponga el Gobierno mediante Real Decreto.";
 choices[39][2] = "La creaci&oacute;n de registros telem&aacute;ticos se efect&uacute;a mediante orden ministerial, que deber&aacute; ser publicada, en todo caso, en el BOE.";
 choices[39][3] = "Los registros telem&aacute;ticos pueden realizar funciones de expedici&oacute;n de copias selladas o compulsadas de los documentos que se tramiten junto con la solicitud.";
 answers[39] = choices[39][2];
 units[39] = "30";
 comments[39] = "Id Pregunta: 4424. ";


//  Id pregunta: 4546 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  La capa de adaptaci&oacute;n de ATM (AAL o ATM Adaptation Layer) com&uacute;nmente utilizada para la transmisi&oacute;n de datagramas IP sobre redes ATM es:";
 choices[40]= new Array();
 choices[40][0] = "AAL 5.";
 choices[40][1] = "AAL 1.";
 choices[40][2] = "AAL 3/4.";
 choices[40][3] = "AAL 2.";
 answers[40] = choices[40][0];
 units[40] = "109";
 comments[40] = "Id Pregunta: 4546. ";


//  Id pregunta: 4577 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  &iquest;Qu&eacute; actividades de las siguientes se incluyen en el ciclo de vida cl&aacute;sico, tambi&eacute;n Ilamado &quot;modelo en cascada&quot;?";
 choices[41]= new Array();
 choices[41][0] = "an&aacute;lisis del sistema, an&aacute;lisis de riesgo, an&aacute;lisis de requisitos";
 choices[41][1] = "an&aacute;lisis de riesgo, an&aacute;lisis de requisitos y codificaci&oacute;n";
 choices[41][2] = "an&aacute;lisis del sistema, prototipos y codificaci&oacute;n";
 choices[41][3] = "dise&ntilde;o, codificaci&oacute;n y pruebas";
 answers[41] = choices[41][3];
 units[41] = "76";
 comments[41] = "Id Pregunta: 4577. ";


//  Id pregunta: 4700 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  IESG (Internet Engineering Steering Group) se encarga de:";
 choices[42]= new Array();
 choices[42][0] = "Coordinaci&oacute;n entre organizaciones.";
 choices[42][1] = "Asignaci&oacute;n de recursos.";
 choices[42][2] = "La supervisi&oacute;n y aprobaci&oacute;n de normas";
 choices[42][3] = "Especificaci&oacute;n de est&aacute;ndares";
 answers[42] = choices[42][0];
 units[42] = "42";
 comments[42] = "Id Pregunta: 4700. Examen 2006 JCYL";


//  Id pregunta: 4861 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes secuencias de actividades NO se corresponde con una actividad del proceso de elaboraci&oacute;n de un Plan de Sistemas seg&uacute;n la metodolog&iacute;a M&Eacute;TRICA versi&oacute;n 3?";
 choices[43]= new Array();
 choices[43][0] = "Estudio de informaci&oacute;n relevante";
 choices[43][1] = "Definici&oacute;n de un Plan de acci&oacute;n";
 choices[43][2] = "Definici&oacute;n de un Plan de Riesgo";
 choices[43][3] = "Estudio de los sistemas de informaci&oacute;n actuales";
 answers[43] = choices[43][2];
 units[43] = "86";
 comments[43] = "Id Pregunta: 4861. NULL";


//  Id pregunta: 4964 AÃ±o de creación de pregunta: 2003-01-01
 questions[44]= "45)  &iquest;Qu&eacute; tecnolog&iacute;a encaminada a proteger la propiedad intelectual en Internet habilita la gesti&oacute;n de loscontenidos en medios digitales a los usuarios identificados que tienen unos derechos determinados y les permiteusar un contenido codificado especialmente para &eacute;l?:";
 choices[44]= new Array();
 choices[44][0] = "Digital Rights Management (DRM).";
 choices[44][1] = "Marcas de agua.";
 choices[44][2] = "Los patrones.";
 choices[44][3] = "Technical Protection Measures (TPM).";
 answers[44] = choices[44][0];
 units[44] = "37";
 comments[44] = "Id Pregunta: 4964. Examen TIC B 2007";


//  Id pregunta: 5137 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  &iquest;Qu&eacute; es un diagrama de Gantt?";
 choices[45]= new Array();
 choices[45][0] = "Es un diagrama de barras en forma de tabla donde se hace una referencia cruzada entre las tareas y los tiempos de duraci&oacute;n de las mismas.";
 choices[45][1] = "Es un cuadro o tabla formado por dos columnas, en la primera se se&ntilde;alan las actividades y en la segunda se indican las fechas de finalizaci&oacute;n.";
 choices[45][2] = "Partiendo de la descomposici&oacute;n de un proyecto en actividades, estas ocurren entre dos sucesos. Se representa mediante un grafo en donde las actividades se reflejan mediante arcos y los sucesos mediante v&eacute;rtices.";
 choices[45][3] = "Es una matriz de referencias cruzadas entre los miembros del equipo de proyecto y su dedicaci&oacute;n al proyecto.";
 answers[45] = choices[45][0];
 units[45] = "77";
 comments[45] = "Id Pregunta: 5137. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5156 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  En el modelo de referencia TCP/IP:";
 choices[46]= new Array();
 choices[46][0] = "No se definen las capas de sesi&oacute;n ni de aplicaci&oacute;n.";
 choices[46][1] = "No se definen las capas de red ni de sesi&oacute;n.";
 choices[46][2] = "No se definen las capas de presentaci&oacute;n ni de aplicaci&oacute;n.";
 choices[46][3] = "No se definen las capas de sesi&oacute;n ni de presentaci&oacute;n.";
 answers[46] = choices[46][3];
 units[46] = "100";
 comments[46] = "Id Pregunta: 5156. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5159 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l es la capacidad de un enlace E1?";
 choices[47]= new Array();
 choices[47][0] = "2048 Kbps.";
 choices[47][1] = "1544 Kbps";
 choices[47][2] = "8448 Kbps.";
 choices[47][3] = "155 Mbps.";
 answers[47] = choices[47][0];
 units[47] = "103";
 comments[47] = "Id Pregunta: 5159. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5188 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  En la programaci&oacute;n Orientada a Objetos, un Objeto es una entidad que se caracteriza porque tiene:";
 choices[48]= new Array();
 choices[48][0] = "Estado, Comportamiento e Identidad";
 choices[48][1] = "Comportamiento, Identidad y Relaciones";
 choices[48][2] = "Estado, Identidad y Relaciones";
 choices[48][3] = "Todas son falsas";
 answers[48] = choices[48][0];
 units[48] = "82";
 comments[48] = "Id Pregunta: 5188. ";


//  Id pregunta: 5274 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  Un est&aacute;ndar para tarjeta inteligente sin contacto que haya de poder comunicarse con dispositivos a una distancia mayor de 50 cm es ";
 choices[49]= new Array();
 choices[49][0] = "ISO 15693";
 choices[49][1] = "ISO 10536";
 choices[49][2] = "ISO 14443";
 choices[49][3] = "ISO 9001";
 answers[49] = choices[49][0];
 units[49] = "74";
 comments[49] = "Id Pregunta: 5274. NULL";


//  Id pregunta: 5521 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  La fase del procedimiento de digitalizaci&oacute;n en la que se intenta mejorar el aspecto del documento digital utilizando algoritmos matem&aacute;ticos es";
 choices[50]= new Array();
 choices[50][0] = "Adquisici&oacute;n del documento digital o escaneado";
 choices[50][1] = "Procesado del documento digital";
 choices[50][2] = "Almacenamiento y gesti&oacute;n";
 choices[50][3] = "Presentaci&oacute;n del documento digital";
 answers[50] = choices[50][1];
 units[50] = "93";
 comments[50] = "Id Pregunta: 5521. NULL";


//  Id pregunta: 5650 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  Seg&uacute;n el RD 1720/2007, por el que se aprueba el desarrollo de la Ley Organica 15/1999 de protecci&oacute;n de datos de carater personal, ser&aacute; posible el tratamiento o la cesi&oacute;n de los datos de car&aacute;cter personal sin necesidad del consentimiento del interesado cuando";
 choices[51]= new Array();
 choices[51][0] = "En ningun caso. Siempre es necesario consentimiento del interesado.";
 choices[51][1] = "Lo autorice una norma con rango de ley o una norma dederecho comunitario.";
 choices[51][2] = "Los datos objeto de tratamiento o cesion figuran en fuentes accesibles al publico y el responsable del fichero tenga un interes legitimo para su conocimiento.";
 choices[51][3] = "La b) y la c) son correctas.";
 answers[51] = choices[51][3];
 units[51] = "29";
 comments[51] = "Id Pregunta: 5650. ";


//  Id pregunta: 5755 AÃ±o de creación de pregunta: 2009-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de estos diagramas no es un diagrama de UML 2.0?";
 choices[52]= new Array();
 choices[52][0] = "Diagrama global de interacci&oacute;n";
 choices[52][1] = "Diagrama de colaboraci&oacute;n";
 choices[52][2] = "Diagrama de estructura compuesta";
 choices[52][3] = "Diagrama de tiempos";
 answers[52] = choices[52][1];
 units[52] = "82";
 comments[52] = "Id Pregunta: 5755. ";


//  Id pregunta: 5769 AÃ±o de creación de pregunta: 2009-01-01
 questions[53]= "54)  De acuerdo al RD 1720/2007, cuando los ficheros contengan un conjunto de datos de car&aacute;cter personal suficientes que permitan obtener una evaluaci&oacute;n de la personalidad del individuo, deber&aacute;:";
 choices[53]= new Array();
 choices[53][0] = "Adoptarse las medidas de seguridad calificadas de nivel b&aacute;sico";
 choices[53][1] = "Adoptarse las medidas de seguridad calificadas de nivel medio";
 choices[53][2] = "Adoptarse las medidas de seguridad calificadas de nivel alto";
 choices[53][3] = "No adoptarse ninguna medidas de seguridad prevista";
 answers[53] = choices[53][1];
 units[53] = "29";
 comments[53] = "Id Pregunta: 5769. ";


//  Id pregunta: 5779 AÃ±o de creación de pregunta: 2009-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de los siguientes apartados NO es un grupo clave de la biblioteca de clases base en .NET?";
 choices[54]= new Array();
 choices[54][0] = "Windows Presentation Foundation";
 choices[54][1] = "ASP.NET";
 choices[54][2] = "ADO.NET";
 choices[54][3] = "ACY.NET";
 answers[54] = choices[54][3];
 units[54] = "59";
 comments[54] = "Id Pregunta: 5779. MAP 2008 A1";


//  Id pregunta: 5964 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  Seg&uacute;n CMMI, el &aacute;rea de proceso que recopila y armoniza las necesidades de los participantes y las traduce en requisitos del producto se denomina:";
 choices[55]= new Array();
 choices[55][0] = "Verificaci&oacute;n";
 choices[55][1] = "Validaci&oacute;n";
 choices[55][2] = "Gesti&oacute;n de requisitos";
 choices[55][3] = "Desarrollo de requisitos";
 answers[55] = choices[55][3];
 units[55] = "87";
 comments[55] = "Id Pregunta: 5964. Castilla La Mancha 2009";


//  Id pregunta: 6059 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  Los servicios web son:";
 choices[56]= new Array();
 choices[56][0] = "Dependientes de la plataforma en que se encuentran desplegados y dependientes del lenguaje en que han sido desarrollados.";
 choices[56][1] = "Dependientes de la plataforma en que se encuentran desplegados e independientes del lenguaje en que han sido desarrollados.";
 choices[56][2] = "Independientes de la plataforma en que se encuentran desplegados y dependientes del lenguaje en que han sido desarrollados.";
 choices[56][3] = "Independientes de la plataforma en que se encuentran desplegados e independientes del lenguaje en que han sido desarrollados.";
 answers[56] = choices[56][3];
 units[56] = "51,69";
 comments[56] = "Id Pregunta: 6059. TIC A 2009";


//  Id pregunta: 6323 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  Toda sentencia SQL tiene al menos los siguientes elementos:";
 choices[57]= new Array();
 choices[57][0] = "SELECT, FROM";
 choices[57][1] = "SELECT, FROM y WHERE";
 choices[57][2] = "SELECT, FROM, o bien WHERE o bien HAVING";
 choices[57][3] = "SELECT, FROM y ORDER BY";
 answers[57] = choices[57][0];
 units[57] = "58";
 comments[57] = "Id Pregunta: 6323. ";


//  Id pregunta: 6421 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de las siguientes pautas no corresponde al principio de Perceptibilidad de WCAG 2.0?";
 choices[58]= new Array();
 choices[58][0] = "Navegable";
 choices[58][1] = "Alternativas Textuales";
 choices[58][2] = "Adaptable";
 choices[58][3] = "Distinguible";
 answers[58] = choices[58][0];
 units[58] = "39";
 comments[58] = "Id Pregunta: 6421. NULL";


//  Id pregunta: 6488 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes es una herramienta IDS?";
 choices[59]= new Array();
 choices[59][0] = "Nessus";
 choices[59][1] = "Snort";
 choices[59][2] = "Nagios";
 choices[59][3] = "NetSaint";
 answers[59] = choices[59][1];
 units[59] = "111";
 comments[59] = "Id Pregunta: 6488. Castilla La Mancha 2009";


//  Id pregunta: 6518 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  El API de Java para llamar a m&eacute;todos escritos en otros lenguajes es:";
 choices[60]= new Array();
 choices[60][0] = "JDI";
 choices[60][1] = "JCI";
 choices[60][2] = "JTEE";
 choices[60][3] = "JNI";
 answers[60] = choices[60][3];
 units[60] = "60";
 comments[60] = "Id Pregunta: 6518. NULL";


//  Id pregunta: 6527 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  Una actividad propia de la gesti&oacute;n de problemas es";
 choices[61]= new Array();
 choices[61][0] = "La prevenci&oacute;n proactiva de los problemas";
 choices[61][1] = "Generaci&oacute;n de informaci&oacute;n ejecutiva";
 choices[61][2] = "Identificaci&oacute;n de tendencias";
 choices[61][3] = "Todas las respuestas anteriores son correctas";
 answers[61] = choices[61][3];
 units[61] = "98";
 comments[61] = "Id Pregunta: 6527. NULL";


//  Id pregunta: 6550 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l es el m&eacute;todo de autenticaci&oacute;n mejor?";
 choices[62]= new Array();
 choices[62][0] = "Algo que alguien sabe";
 choices[62][1] = "Algo que alguien es";
 choices[62][2] = "Algo que alguien tiene";
 choices[62][3] = "Lo que una persona sabe y es";
 answers[62] = choices[62][3];
 units[62] = "111";
 comments[62] = "Id Pregunta: 6550. NULL";


//  Id pregunta: 6553 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  PKCS#7 se centra en";
 choices[63]= new Array();
 choices[63][0] = "El formato del sobre digital";
 choices[63][1] = "La especificaci&oacute;n de un interfaz de acceso a dispositivos que almacenan informaci&oacute;n";
 choices[63][2] = "Especifica un formato portable para almacenar o transportar las claves privadas de un usuario";
 choices[63][3] = "Todas las respuestas anteriores son correctas";
 answers[63] = choices[63][0];
 units[63] = "74";
 comments[63] = "Id Pregunta: 6553. NULL";


//  Id pregunta: 7144 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  &iquest;Cu&aacute;l de las siguientes respuestas es objeto de protecci&oacute;n de los derechos de autor seg&uacute;n el Texto Refundido de la Ley de Protecci&oacute;n Individual?";
 choices[64]= new Array();
 choices[64][0] = "Las ideas y principios en los que se basan cualquiera de los elementos de un programa de ordenador";
 choices[64][1] = "Las ideas y principios que sirven de fundamento a los interfaces de programa";
 choices[64][2] = "La documentaci&oacute;n t&eacute;cnica y los manuales de uso de un programa";
 choices[64][3] = "Cualesquiera versi&oacute;n sucesiva del programa, incluidas aquellas creadas con el fin de ocasionar efectos nocivos a un sistema inform&aacute;tico";
 answers[64] = choices[64][2];
 units[64] = "36";
 comments[64] = "Id Pregunta: 7144. Examen TIC B 2009";


//  Id pregunta: 7159 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  En relaci&oacute;n a la administraci&oacute;n de procesos de los sistemas operativos, &iquest;en qu&eacute; consiste la planificaci&oacute;n round-robin?";
 choices[65]= new Array();
 choices[65][0] = "En asignar un tiempo de ejecuci&oacute;n a cada proceso";
 choices[65][1] = "En ejecutar primero el proceso m&aacute;s corto";
 choices[65][2] = "En asignar a cada proceso una prioridad y ejecutar el proceso que m&aacute;s prioridad tenga";
 choices[65][3] = "En ejecutar los procesos de forma aleatoria";
 answers[65] = choices[65][0];
 units[65] = "52";
 comments[65] = "Id Pregunta: 7159. Examen TIC B 2009";


//  Id pregunta: 7250 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  La direcci&oacute;n IPv4 172.30.120.135/12 es una direcci&oacute;n de tipo:";
 choices[66]= new Array();
 choices[66][0] = "Direcci&oacute;n de red broadcast";
 choices[66][1] = "Direcci&oacute;n de red privada";
 choices[66][2] = "Direcci&oacute;n de red de enlace local";
 choices[66][3] = "Direcci&oacute;n de red p&uacute;blica";
 answers[66] = choices[66][1];
 units[66] = "100";
 comments[66] = "Id Pregunta: 7250. Examen TIC B 2009";


//  Id pregunta: 8013 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)   Indique cu&aacute;l de las siguientes recomendaciones pertenece a las realizadas por el UIT-T:";
 choices[67]= new Array();
 choices[67][0] = " Serie X &ndash; orientadas a la transmisi&oacute;n de datos en redes anal&oacute;gicas telef&oacute;nicas.";
 choices[67][1] = " Serie V &ndash; orientadas a redes de datos y comunicaciones en sistemas abiertos.";
 choices[67][2] = " Serie D &ndash; orientadas a la transmisi&oacute;n de documentos.";
 choices[67][3] = " Serie I &ndash; red digital de servicios integrados.";
 answers[67] = choices[67][3];
 units[67] = "NULL";
 comments[67] = "Id Pregunta: 8013. Map 2007";


//  Id pregunta: 8246 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  Para garantizar la protecci&oacute;n sanitaria frente a las ondas electromagn&eacute;ticas de telefon&iacute;a m&oacute;vil, los operadores de telefon&iacute;a m&oacute;vil deben:";
 choices[68]= new Array();
 choices[68][0] = "Situar las estaciones base fuera de las ciudades, de tal forma que al estar m&aacute;s alejadas, la potencia que reciban las personas debida a una comunicaci&oacute;n por telefon&iacute;a m&oacute;vil sea menor.";
 choices[68][1] = "Instalar las estaciones base de manera que el diagrama de emisi&oacute;n no incida sobre el propio edificio, terraza o &aacute;tico, si se instalan en una azotea.";
 choices[68][2] = "Fijar la potencia con la que emiten las estaciones base para que sea 1/4 de la SAR (Tasa de absorci&oacute;n espec&iacute;fica) de un tel&eacute;fono m&oacute;vil.";
 choices[68][3] = "Instalar las estaciones base en cualquier sitio, ya que la telefon&iacute;a m&oacute;vil emite ondas ionizantes que no afectan a la salud.";
 answers[68] = choices[68][1];
 units[68] = "108";
 comments[68] = "Id Pregunta: 8246. Examen TIC A1 2010";


//  Id pregunta: 8377 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre iSCSI es FALSA?:";
 choices[69]= new Array();
 choices[69][0] = "Es un est&aacute;ndar de la IETF.";
 choices[69][1] = "Utiliza por defecto los puertos TCP 860 y TCP 3260.";
 choices[69][2] = "Necesita una arquitectura de cableado independiente.";
 choices[69][3] = "Usa CHAP como principal m&eacute;todo de autenticaci&oacute;n.";
 answers[69] = choices[69][2];
 units[69] = "48";
 comments[69] = "Id Pregunta: 8377. Examen TIC A2 2010";


//  Id pregunta: 8415 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l de las siguientes NO es una de las llamadas doce reglas de Codd? ";
 choices[70]= new Array();
 choices[70][0] = "Independencia f&iacute;sica de los datos. ";
 choices[70][1] = "Independencia de distribuci&oacute;n. ";
 choices[70][2] = "Independencia de actualizaci&oacute;n. ";
 choices[70][3] = "Independencia de integridad. ";
 answers[70] = choices[70][2];
 units[70] = "58";
 comments[70] = "Id Pregunta: 8415. Examen TIC A2 2010";


//  Id pregunta: 8532 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  En relaci&oacute;n con la tecnolog&iacute;a ADSL, un multiplexor localizado en la central telef&oacute;nica que concentra el tr&aacute;fico de enlaces ADSL de usuario, se denomina:";
 choices[71]= new Array();
 choices[71][0] = "DSLAM";
 choices[71][1] = "DSLM";
 choices[71][2] = "ADSLM";
 choices[71][3] = "ADSLAM";
 answers[71] = choices[71][0];
 units[71] = "107";
 comments[71] = "Id Pregunta: 8532. Examen TIC A2 2010 interna";


//  Id pregunta: 8590 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l de las siguientes utilidades permite desarrollar en JAVA?";
 choices[72]= new Array();
 choices[72][0] = "JRE";
 choices[72][1] = "M&aacute;quina Virtual de Java";
 choices[72][2] = "JDK";
 choices[72][3] = "AWT";
 answers[72] = choices[72][2];
 units[72] = "116";
 comments[72] = "Id Pregunta: 8590. Examen TIC A2 2010 interna";


//  Id pregunta: 8619 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;Qu&eacute; tipos de mantenimiento contempla M&eacute;trica v3 en su proceso MSI?:";
 choices[73]= new Array();
 choices[73][0] = "Correctivo, evolutivo y adaptativo";
 choices[73][1] = "Correctivo, evolutivo, adaptativo y perfectivo";
 choices[73][2] = "Correctivo y evolutivo";
 choices[73][3] = "Correctivo, evolutivo y perfectivo.";
 answers[73] = choices[73][2];
 units[73] = "86";
 comments[73] = "Id Pregunta: 8619. Examen TIC A2 2010 interna";


//  Id pregunta: 8675 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  En una red MPLS, &iquest;qu&eacute; funci&oacute;n realiza el LSR?";
 choices[74]= new Array();
 choices[74][0] = "Es el elemento que conmuta etiquetas.";
 choices[74][1] = "Es el nombre de un circuito virtual MPLS.";
 choices[74][2] = "Es el elemento que inicia o termina el t&uacute;nel.";
 choices[74][3] = "Es el elemento que conmuta el tr&aacute;fico.";
 answers[74] = choices[74][0];
 units[74] = "100";
 comments[74] = "Id Pregunta: 8675. Examen UPM A2 2011";


//  Id pregunta: 8741 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  En un organismo p&uacute;blico se gestionan datos personales relativos a la comisi&oacute;n de infracciones administrativas, pero, en ning&uacute;n caso, infracciones penales, &iquest;deben cifrar las transmisiones que puedan hacer de esos datos, a trav&eacute;s de redes p&uacute;blicas?";
 choices[75]= new Array();
 choices[75][0] = "NO en todos los casos. Como no se trata de infracciones penales las medidas de seguridad requeridas son las de nivel bajo, siempre que esos datos queden en el &aacute;mbito de la Administraci&oacute;n";
 choices[75][1] = "Si, se trata de datos de infracciones, que requieren por tanto medidas de nivel alto, aunque el cifrado se puede sustituir por cualquier otro mecanismo que garantice que la informaci&oacute;n no sea inteligible ni manipulada por terceros";
 choices[75][2] = "NO se requiere tal cifrado, pues las medidas que requieren ese tipo de datos son las de nivel medio y el mencionado cifrado es una medida de seguridad de nivel alto.";
 choices[75][3] = "Si. El cifrado a trav&eacute;s de redes p&uacute;blicas, a diferencia del realizado a trav&eacute;s de redes inal&aacute;mbricas es una medida de nivel medio, requerida en el caso planteado.";
 answers[75] = choices[75][2];
 units[75] = "29";
 comments[75] = "Id Pregunta: 8741. Examen TIC A2 2010 interna";


//  Id pregunta: 8870 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l de las siguientes asociaciones &ldquo;protocolos OSI - protocolos TCP/IP&rdquo; no es correcta?:";
 choices[76]= new Array();
 choices[76][0] = "X.500-SNMP";
 choices[76][1] = "SMTP-X.400";
 choices[76][2] = "FTAM-FTP";
 choices[76][3] = "SMTP-X.25";
 answers[76] = choices[76][0];
 units[76] = "100";
 comments[76] = "Id Pregunta: 8870. Analista Ayto. Madrid 2010";


//  Id pregunta: 8871 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  El primer paso para establecer conexiones sobre un enlace PPP conlleva:";
 choices[77]= new Array();
 choices[77][0] = "El nodo iniciador env&iacute;a tramas LCP (Link Control Protocol) para configurar el enlace de datos";
 choices[77][1] = "Antes de la activaci&oacute;n del enlace PPP, los routers a lo largo del path negocian las facilidades de autentificaci&oacute;n";
 choices[77][2] = "El nodo iniciador PPP env&iacute;a un mensaje de inicio de sesi&oacute;n a su vecino PPP m&aacute;s cercano";
 choices[77][3] = "El nodo iniciador PPP env&iacute;a un mensaje de inicio de sesi&oacute;n a todos los nodos adyacentes";
 answers[77] = choices[77][0];
 units[77] = "102";
 comments[77] = "Id Pregunta: 8871. Analista Ayto. Madrid 2010";


//  Id pregunta: 8955 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  En el arranque en Linux &iquest;cu&aacute;l de los siguientes procesos se ejecuta en primer lugar?:";
 choices[78]= new Array();
 choices[78][0] = "page daemon";
 choices[78][1] = "swapper";
 choices[78][2] = "init";
 choices[78][3] = "sbin";
 answers[78] = choices[78][1];
 units[78] = "53";
 comments[78] = "Id Pregunta: 8955. ";


//  Id pregunta: 8979 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l de las siguientes no es una tecnolog&iacute;a de virtualizaci&oacute;n?";
 choices[79]= new Array();
 choices[79][0] = "XEN";
 choices[79][1] = "KVM";
 choices[79][2] = "UML";
 choices[79][3] = "Todas lo son";
 answers[79] = choices[79][3];
 units[79] = "119";
 comments[79] = "Id Pregunta: 8979. ";


//  Id pregunta: 8996 AÃ±o de creación de pregunta: 2011-01-01
 questions[80]= "81)  Las estaciones conectadas a una red de &aacute;rea local por medio de tarjetas de red de tipo Ethernet";
 choices[80]= new Array();
 choices[80][0] = "Acceden al medio de transmisi&oacute;n de forma aleatoria, por lo que pueden producirse colisiones.";
 choices[80][1] = "Acceden al medio de transmisi&oacute;n en per&iacute;odos de tiempo predeterminados, por lo que nunca se producen colisiones.";
 choices[80][2] = "Acceden al medio de transmisi&oacute;n en diferentes frecuencias de trabajo, por lo que pueden acceder varias simult&aacute;neamente sin que se produzcan colisiones.";
 choices[80][3] = "Nunca acceden si tras un primer intento se detect&oacute; una colisi&oacute;n.";
 answers[80] = choices[80][0];
 units[80] = "101";
 comments[80] = "Id Pregunta: 8996. Examen UPM A2 2011";


//  Id pregunta: 8998 AÃ±o de creación de pregunta: 2011-01-01
 questions[81]= "82)  En un sistema de segmentaci&oacute;n, los segmentos que necesitan los programas pueden no estar residentes en la memoria principal. Esta situaci&oacute;n se indica haciendo uso del:";
 choices[81]= new Array();
 choices[81][0] = "Bit de segmentaci&oacute;n.";
 choices[81][1] = "Bit de ausencia.";
 choices[81][2] = "Bit de presencia.";
 choices[81][3] = "Bit de petici&oacute;n.";
 answers[81] = choices[81][2];
 units[81] = "45";
 comments[81] = "Id Pregunta: 8998. Examen UPM A2 2011";


//  Id pregunta: 9007 AÃ±o de creación de pregunta: 2011-01-01
 questions[82]= "83)  No ser&aacute; necesario que una ICT incluya inicialmente la red de distribuci&oacute;n para los servicios de:";
 choices[82]= new Array();
 choices[82][0] = "Telecomunicaciones por cable.";
 choices[82][1] = "Radiodifusi&oacute;n.";
 choices[82][2] = "Telefon&iacute;a.";
 choices[82][3] = "Deber&aacute; incluir todas ellas.";
 answers[82] = choices[82][3];
 units[82] = "99";
 comments[82] = "Id Pregunta: 9007. Teleco Ayto. Madrid 2010- Modificaci&oacute;n de la original por MVO al quedar Derogada por RD 346/2011";


//  Id pregunta: 9516 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  &iquest;Cu&aacute;l de las siguientes directivas JSP no existe?";
 choices[83]= new Array();
 choices[83][0] = "page";
 choices[83][1] = "map";
 choices[83][2] = "taglib";
 choices[83][3] = "include";
 answers[83] = choices[83][1];
 units[83] = "116";
 comments[83] = "Id Pregunta: 9516. NULL";


//  Id pregunta: 9544 AÃ±o de creación de pregunta: 2013-01-01
 questions[84]= "85)  Los certificados incorporados al DNI-e:";
 choices[84]= new Array();
 choices[84][0] = "Son dos: de autenticaci&oacute;n y de firma del ciudadano.";
 choices[84][1] = "Los usuarios finales pueden validarlos en la Direcci&oacute;n General de la Polic&iacute;a, que est&aacute; constituida como Autoridad de Validaci&oacute;n.";
 choices[84][2] = "Est&aacute;n basados en la recomendaci&oacute;n X. 509 v.3 sin extensi&oacute;n alguna.";
 choices[84][3] = "Est&aacute;n integrados en un chip certificado en el nivel de seguridad EAL4+ definido en la norma ISO/IEC 15408.";
 answers[84] = choices[84][3];
 units[84] = "30";
 comments[84] = "Id Pregunta: 9544. Examen TIC A1 2011 (Incluyen tambi&eacute;n certificado electr&oacute;nico de la autoridad emisora)";


//  Id pregunta: 9610 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;Qu&eacute; versi&oacute;n de SQL permiti&oacute; por primera vez manipular y publicar datos XML?";
 choices[85]= new Array();
 choices[85][0] = "SQL 2000";
 choices[85][1] = "SQL-2003";
 choices[85][2] = "SQL-2006";
 choices[85][3] = "SQL-2008";
 answers[85] = choices[85][2];
 units[85] = "58";
 comments[85] = "Id Pregunta: 9610. NULL";


//  Id pregunta: 9858 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Si el usuario A desea enviar un documento firmado digitalmente por &eacute;l al usuario B:";
 choices[86]= new Array();
 choices[86][0] = "El usuario A debe enviar el documento acompa&ntilde;ado del documento cifrado con la clave p&uacute;blica de B.";
 choices[86][1] = "El usuario A debe enviar el documento acompa&ntilde;ado del resultado de aplicar la funci&oacute;n hash al documento y &eacute;ste cifrado con la clave p&uacute;blica de B.";
 choices[86][2] = "El usuario A debe enviar el documento acompa&ntilde;ado del resultado de aplicar la funci&oacute;n hash al documento y &eacute;ste cifrado con la clave privada de A.";
 choices[86][3] = "El usuario A debe enviar el documento cifrado con la clave p&uacute;blica de B acompa&ntilde;ado del resultado de aplicar la funci&oacute;n hash al documento y todo cifrado con la clave privada de A.";
 answers[86] = choices[86][2];
 units[86] = "111";
 comments[86] = "Id Pregunta: 9858. Examen TIC del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 9904 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Seg&uacute;n M&eacute;trica v3, los flujos que interconectan actividades en la t&eacute;cnica SADT (Structured Analysis and Design Technique) se pueden clasificar en 4 tipos, se&ntilde;ale cu&aacute;l de los siguientes flujos NO es correcto:";
 choices[87]= new Array();
 choices[87][0] = "Control.";
 choices[87][1] = "Transacci&oacute;n.";
 choices[87][2] = "Mecanismo.";
 choices[87][3] = "Entrada.";
 answers[87] = choices[87][1];
 units[87] = "86";
 comments[87] = "Id Pregunta: 9904. TIC A2, Examen 2013";


//  Id pregunta: 10035 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  &iquest;Cu&aacute;l es la direcci&oacute;n multicast utilizada por el protocolo RIP v2 (Routing Information Protocol), seg&uacute;n RFC 2453, para enviar las actualizaciones de sus tablas?";
 choices[88]= new Array();
 choices[88][0] = "224.0.0.4 ";
 choices[88][1] = "224.0.0.5";
 choices[88][2] = "224.0.0.9 ";
 choices[88][3] = "224.0.0.22";
 answers[88] = choices[88][2];
 units[88] = "100";
 comments[88] = "Id Pregunta: 10035. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10176 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  El uso del paradigma de OO se caracteriza por&hellip;.";
 choices[89]= new Array();
 choices[89][0] = "&hellip; el bajo acoplamiento y fuerte cohesi&oacute;n interna de los m&oacute;dulos (clases)";
 choices[89][1] = "&hellip; el alto acoplamiento y d&eacute;bil cohesi&oacute;n interna de los m&oacute;dulos (clases)";
 choices[89][2] = "La Reusabilidad no se encuentra entre sus objetivos";
 choices[89][3] = "La mayor dificultad de la programaci&oacute;n OO reduce la mantenibilidad y modificabilidad de los programas";
 answers[89] = choices[89][0];
 units[89] = "82";
 comments[89] = "Id Pregunta: 10176. ";


//  Id pregunta: 10261 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  En cuanto al registro de ficheros en el Registro General de Protecci&oacute;n de Datos";
 choices[90]= new Array();
 choices[90][0] = "S&oacute;lo es obligatorio en el caso de ficheros que contengan datos especialmente protegidos para ficheros de titularidad privada y en todo caso para los de titularidad p&uacute;blica";
 choices[90][1] = "S&oacute;lo es obligatorio en el caso de ficheros que contengan datos especialmente protegidos para ficheros de titularidad p&uacute;blica y en todo caso para los de titularidad privada";
 choices[90][2] = "Es obligatorio para todo fichero que contenga datos de car&aacute;cter personal";
 choices[90][3] = "No es obligatorio en ning&uacute;n caso";
 answers[90] = choices[90][2];
 units[90] = "29";
 comments[90] = "Id Pregunta: 10261. Art&iacute;culo 55.1 y 55.2 del RD 1720/2007";


//  Id pregunta: 10430 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  Indique cu&aacute;l de los siguientes es un organismo europeo de normalizaci&oacute;n. ";
 choices[91]= new Array();
 choices[91][0] = "CENELEC";
 choices[91][1] = "IEC";
 choices[91][2] = "ISO";
 choices[91][3] = "IEEE";
 answers[91] = choices[91][0];
 units[91] = "42";
 comments[91] = "Id Pregunta: 10430. Examen TIC A1 2013";


//  Id pregunta: 10485 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  &iquest;Con qu&eacute; &aacute;mbito se relaciona COSO?";
 choices[92]= new Array();
 choices[92][0] = "Con control de la calidad, es similar al EFQM ";
 choices[92][1] = "Con el marco de Seguridad de las Tecnolog&iacute;as de la Informaci&oacute;n, similar a la ISO 27000";
 choices[92][2] = "Con Gobierno Corporativo de las Tecnologias de la Informaci&oacute;n";
 choices[92][3] = "Con el control de los servicios de Tecnolog&iacute;as de la Informaci&oacute;n, similar a ITIL";
 answers[92] = choices[92][2];
 units[92] = "98";
 comments[92] = "Id Pregunta: 10485. NULL";


//  Id pregunta: 10683 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Seg&uacute;n el Art&iacute;culo 14 de la Ley 39/2015. Para las personas f&iacute;sicas, &iquest;qui&eacute;n elige si la relaci&oacute;n se va a establecer a trav&eacute;s de medios electr&oacute;nicos?";
 choices[93]= new Array();
 choices[93][0] = "La Administraci&oacute;n.";
 choices[93][1] = "El ciudadano en todo caso.";
 choices[93][2] = "Habitualmente el ciudadano.";
 choices[93][3] = "Siempre se realiza a trav&eacute;s de medios electr&oacute;nicos.";
 answers[93] = choices[93][2];
 units[93] = "30";
 comments[93] = "Id Pregunta: 10683. ";


//  Id pregunta: 11075 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  El Gestor del Nivel de Servicio tiene la responsabilidad de asegurarse 1que los objetivos del Proceso de Gesti&oacute;n del Nivel de Servicio sean cumplidos. El Gestor del Nivel de Servicio NO es responsable de &hellip;";
 choices[94]= new Array();
 choices[94][0] = "Negociar y cerrar los Acuerdos de Nivel Operacionales. (OLA -Operation Level Agreement)";
 choices[94][1] = "Asegurar que todos los servicios no operacionales sean registrados dentro del Cat&aacute;logo de Servicios";
 choices[94][2] = "Negociar y acordar los Acuerdos de Nivel de Servicio (SLA - Service Level Agreement)";
 choices[94][3] = "Ayudar a la creaci&oacute;n del Cat&aacute;logo de Servicios y a mantenerlo actualizado";
 answers[94] = choices[94][1];
 units[94] = "98";
 comments[94] = "Id Pregunta: 11075. ";


//  Id pregunta: 11103 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Seleccione la opci&oacute;n verdadera respecto al Servicio de Verificaci&oacute;n de Datos de Identidad";
 choices[95]= new Array();
 choices[95][0] = "Permite confirmar o verificar que un determinado conjunto de datos corresponden al n&uacute;mero de identificaci&oacute;n introducido por el usuario.";
 choices[95][1] = "La validaci&oacute;n de dichos datos se realiza contra las Bases de Datos del organismo que los custodia: Direcci&oacute;n General Polic&iacute;a (DGP).";
 choices[95][2] = "Las respuestas a) y b) son falsas";
 choices[95][3] = "Las respuestas a) y b) son verdaderas";
 answers[95] = choices[95][3];
 units[95] = "30";
 comments[95] = "Id Pregunta: 11103. ";


//  Id pregunta: 11170 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l de los siguientes no es un sistema de gesti&oacute;n de contenidos opensource?";
 choices[96]= new Array();
 choices[96][0] = "Drupal";
 choices[96][1] = "Joomla";
 choices[96][2] = "Alfresco";
 choices[96][3] = "Sharepoint";
 answers[96] = choices[96][3];
 units[96] = "95";
 comments[96] = "Id Pregunta: 11170. ";


//  Id pregunta: 11294 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;En qu&eacute; consisten los Sistemas de Gesti&oacute;n de Contenidos Empresariales (ECM)? ";
 choices[97]= new Array();
 choices[97][0] = "En la creaci&oacute;n y gesti&oacute;n de contenidos de un sitio Web";
 choices[97][1] = "En la edici&oacute;n colaborativa de contenidos";
 choices[97][2] = "En la gesti&oacute;n generalista de contenidos desestructurados";
 choices[97][3] = "Todas las anteriores";
 answers[97] = choices[97][3];
 units[97] = "95";
 comments[97] = "Id Pregunta: 11294. ";


//  Id pregunta: 11449 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Seg&uacute;n la Ley 9/2014, las condiciones asociadas a los t&iacute;tulos habilitantes para el uso del dominio p&uacute;blico radioel&eacute;ctrico no incluyen:";
 choices[98]= new Array();
 choices[98][0] = "Proporcionadas.";
 choices[98][1] = "No discriminatorias.";
 choices[98][2] = "Transparentes.";
 choices[98][3] = "Neutrales.";
 answers[98] = choices[98][3];
 units[98] = "110";
 comments[98] = "Id Pregunta: 11449. ";


//  Id pregunta: 11746 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;En qu&eacute; medida las entidades privadas tienen que cumplir la Ley de Transparencia?";
 choices[99]= new Array();
 choices[99][0] = "Las entidades privadas que perciban durante el per&iacute;odo de un a&ntilde;o ayudas o subvenciones p&uacute;blicas en una cuant&iacute;a superior a&nbsp;150.000 euros";
 choices[99][1] = "cuando al menos el&nbsp;40?% del total de sus ingresos anuales tengan car&aacute;cter de ayuda o subvenci&oacute;n p&uacute;blica, siempre que alcancen como m&iacute;nimo la cantidad de&nbsp;5.000 euros.";
 choices[99][2] = "No tienen que cumplir la ley de transparencia";
 choices[99][3] = "las cumplir&aacute;n sin ninguna limitaci&oacute;n";
 answers[99] = choices[99][1];
 units[99] = "41";
 comments[99] = "Id Pregunta: 11746. ";


