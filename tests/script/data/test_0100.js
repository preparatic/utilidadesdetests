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

//  Id pregunta: 338 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  La rectificaci&oacute;n o cancelaci&oacute;n de datos de car&aacute;cter personal se har&aacute; efectiva por el responsable del fichero en un periodo de tiempo siguiente al de recepci&oacute;n de la solicitud. Dicho periodo es de:";
 choices[0]= new Array();
 choices[0][0] = "5 d&iacute;as";
 choices[0][1] = "10 d&iacute;as";
 choices[0][2] = "15 d&iacute;as";
 choices[0][3] = "1 mes";
 answers[0] = choices[0][1];
 units[0] = "29";
 comments[0] = "Id Pregunta: 338. ";


//  Id pregunta: 478 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  La capacidad de un sistema es:";
 choices[1]= new Array();
 choices[1][0] = "La cantidad de trabajo &uacute;til por unidad de tiempo";
 choices[1][1] = "La cantidad de trabajo &uacute;til por unidad de tiempo en un entorno de carga determinado";
 choices[1][2] = "La m&aacute;xima cantidad de trabajo &uacute;til que se puede realizar por unidad de tiempo";
 choices[1][3] = "La m&aacute;xima cantidad de trabajo &uacute;til que se puede realizar por unidad de tiempo en un entorno de carga determinado";
 answers[1] = choices[1][3];
 units[1] = "38";
 comments[1] = "Id Pregunta: 478. ";


//  Id pregunta: 589 AÃ±o de creación de pregunta: 2006-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguientes no es una herramienta de control de proyectos?";
 choices[2]= new Array();
 choices[2][0] = "Wrike.";
 choices[2][1] = "Microsoft Project.";
 choices[2][2] = "Openproj.";
 choices[2][3] = "Stradis.";
 answers[2] = choices[2][3];
 units[2] = "27";
 comments[2] = "Id Pregunta: 589. ";


//  Id pregunta: 642 AÃ±o de creación de pregunta: 2006-01-01
 questions[3]= "4)  Cu&aacute;l de las siguientes afirmaciones sobre sistemas abiertos es incorrecta:";
 choices[3]= new Array();
 choices[3][0] = "El modelo b&aacute;sico de referencia para la Interconexi&oacute;n de Sistemas Abiertos de ISO consiste en la arquitectura OSI, que se basa en las especificaciones de IEEE.";
 choices[3][1] = "La instituci&oacute;n p&uacute;blica IEEE genera las normas m&aacute;s avanzados dentro del campo de estandarizaci&oacute;n de redes locales.";
 choices[3][2] = "El programa IDABC tiene como uno de sus fines promover la colaboraci&oacute;n entre las administraciones p&uacute;blicas de los distintos pa&iacute;ses europeos.";
 choices[3][3] = "NIST fija los est&aacute;ndares federales de tratamiento de la informaci&oacute;n que las agencias gubernamentales deben seguir en la contrataci&oacute;n de software y hardware.";
 answers[3] = choices[3][1];
 units[3] = "40";
 comments[3] = "Id Pregunta: 642. ";


//  Id pregunta: 872 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l de los siguientes programas en Linux no es un editor de textos?:";
 choices[4]= new Array();
 choices[4][0] = "vi";
 choices[4][1] = "emacs";
 choices[4][2] = "pine";
 choices[4][3] = "joe";
 answers[4] = choices[4][2];
 units[4] = "53";
 comments[4] = "Id Pregunta: 872. ";


//  Id pregunta: 1194 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Indique la respuesta falsa relativa a la monitorizaci&oacute;n del sistema operativo:";
 choices[5]= new Array();
 choices[5][0] = "Se puede hacer en tiempo real utilizando monitores del sistema";
 choices[5][1] = "Incluye herramientas de seguridad para asignar o denegar permisos de usuario en el sistema";
 choices[5][2] = "Se puede hacer a posteriori, utilizando herramientas que realicen an&aacute;lisis estad&iacute;sticos de los logs del sistema";
 choices[5][3] = "Permite detectar los cuellos de botella del sistema";
 answers[5] = choices[5][1];
 units[5] = "52";
 comments[5] = "Id Pregunta: 1194. ";


//  Id pregunta: 1228 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  La memoria cach&eacute;:";
 choices[6]= new Array();
 choices[6][0] = "Es una memoria auxiliar que se a&ntilde;ade a la memoria principal";
 choices[6][1] = "Es una parte de la memoria principal m&aacute;s r&aacute;pida que el resto";
 choices[6][2] = "No se encarga de realizar la traducci&oacute;n de los identificadores de bloques";
 choices[6][3] = "No disminuye el fallo de p&aacute;ginas";
 answers[6] = choices[6][0];
 units[6] = "47";
 comments[6] = "Id Pregunta: 1228. ";


//  Id pregunta: 1292 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  ODBC:";
 choices[7]= new Array();
 choices[7][0] = "Es un conjunto de drivers que permiten el acceso a datos heterog&eacute;neos";
 choices[7][1] = "Son drivers, exclusivos de Windows, para el acceso a base de datos";
 choices[7][2] = "Es la tecnologia empleada por Microsoft Access para gestionar los datos";
 choices[7][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[7] = choices[7][0];
 units[7] = "58";
 comments[7] = "Id Pregunta: 1292. ";


//  Id pregunta: 1302 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Para saber en Unix los ficheros que cuelgan de un directorio se utiliza el comando:";
 choices[8]= new Array();
 choices[8][0] = "ldir";
 choices[8][1] = "ls";
 choices[8][2] = "pwd";
 choices[8][3] = "ps";
 answers[8] = choices[8][1];
 units[8] = "52,53";
 comments[8] = "Id Pregunta: 1302. ";


//  Id pregunta: 1370 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Si un ordenador tiene un tiempo de acceso a memoria de 60 nanosegundos, una longitud de palabra de 16 bits, memoria ECC y utiliza 24 bits para direccionamiento, se puede decir que la memoria m&aacute;xima que puede direccionar es de:";
 choices[9]= new Array();
 choices[9][0] = "8 Megabytes";
 choices[9][1] = "16 Megabytes";
 choices[9][2] = "32 Megabytes";
 choices[9][3] = "64 Megabytes";
 answers[9] = choices[9][2];
 units[9] = "47";
 comments[9] = "Id Pregunta: 1370. ";


//  Id pregunta: 1483 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Un monitor de 20 pulgadas efectivas y de 1600 x 1200 puntos con 256 tonos de grises produce una resoluci&oacute;n de:";
 choices[10]= new Array();
 choices[10][0] = "300 dpi";
 choices[10][1] = "30 dpi";
 choices[10][2] = "100 dpi";
 choices[10][3] = "50 dpi";
 answers[10] = choices[10][2];
 units[10] = "47";
 comments[10] = "Id Pregunta: 1483. ";


//  Id pregunta: 1700 AÃ±o de creación de pregunta: 2006-01-01
 questions[11]= "12)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no es propia de la memoria principal (RAM) de unordenador?";
 choices[11]= new Array();
 choices[11][0] = "Volatilidad.";
 choices[11][1] = "Estructuraci&oacute;n.";
 choices[11][2] = "Jerarquizaci&oacute;n.";
 choices[11][3] = "Dinamismo.";
 answers[11] = choices[11][2];
 units[11] = "47";
 comments[11] = "Id Pregunta: 1700. ";


//  Id pregunta: 1944 AÃ±o de creación de pregunta: 2006-01-01
 questions[12]= "13)  Cuando se habla de SAX en el &aacute;mbito del lenguaje XML, se hace referencia a:";
 choices[12]= new Array();
 choices[12][0] = "Una API que define un modelo basado en eventos, y que trabaja invocando las respuestas de las interfaces a medida que van apareciendo estos eventos durante el proceso de an&aacute;lisis del documento";
 choices[12][1] = "Una API que proporciona una representaci&oacute;n de los documentos XML en forma de &aacute;rbol, permitiendo el recorrido y manipulaci&oacute;n de los datos";
 choices[12][2] = "Un lenguaje para establecer restricciones en los documentos XML";
 choices[12][3] = "Un mecanismo para invocaci&oacute;n remota de procedimientos (m&eacute;todos) utilizando XML como forma de comunicaci&oacute;n";
 answers[12] = choices[12][0];
 units[12] = "69";
 comments[12] = "Id Pregunta: 1944. NULL";


//  Id pregunta: 2368 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Entre los siguientes t&eacute;rminos, indicar cu&aacute;l define la reconstrucci&oacute;n de un sistema de una forma nueva, incluyendo la implementaci&oacute;n:";
 choices[13]= new Array();
 choices[13][0] = "Ingenier&iacute;a inversa.";
 choices[13][1] = "Reestructuraci&oacute;n.";
 choices[13][2] = "Reingenier&iacute;a.";
 choices[13][3] = "Ingenier&iacute;a hacia delante.";
 answers[13] = choices[13][2];
 units[13] = "91";
 comments[13] = "Id Pregunta: 2368. ";


//  Id pregunta: 2612 AÃ±o de creación de pregunta: 2003-01-01
 questions[14]= "15)  &iquest;Cu&aacute;l de las siguientes no es una metodolog&iacute;a de desarrollo de sistemas de informaci&oacute;n?";
 choices[14]= new Array();
 choices[14][0] = "Merise";
 choices[14][1] = "Method I";
 choices[14][2] = "Eurom&eacute;todo";
 choices[14][3] = "Metrica v3";
 answers[14] = choices[14][2];
 units[14] = "86";
 comments[14] = "Id Pregunta: 2612. ";


//  Id pregunta: 2654 AÃ±o de creación de pregunta: 2003-01-01
 questions[15]= "16)  La t&eacute;cnica de puntos de funci&oacute;n es una t&eacute;cnica para determinar";
 choices[15]= new Array();
 choices[15][0] = "La magnitud de un proyecto inform&aacute;tico y su probable coste";
 choices[15][1] = "La calidad de una aplicaci&oacute;n SW y la tase de errores prevista";
 choices[15][2] = "La amigabilidad de un interfaz y la previsi&oacute;n de errores de usuario ";
 choices[15][3] = "La seguridad de una aplicaci&oacute;n y su riesgo de intrusi&oacute;n";
 answers[15] = choices[15][0];
 units[15] = "89";
 comments[15] = "Id Pregunta: 2654. NULL";


//  Id pregunta: 2669 AÃ±o de creación de pregunta: 2003-01-01
 questions[16]= "17)  En im&aacute;genes multiespectrales el an&aacute;lisis de componentes principales sirve para:";
 choices[16]= new Array();
 choices[16][0] = "Eliminar ruidos.";
 choices[16][1] = "Eliminaci&oacute;n de informaci&oacute;n redundante.";
 choices[16][2] = "Enmascaramiento o reducci&oacute;n de ciertos efectos atmosf&eacute;ricos o topogr&aacute;ficos.";
 choices[16][3] = "Poder superponer im&aacute;genes de cara a su posterior tratamiento.";
 answers[16] = choices[16][1];
 units[16] = "93";
 comments[16] = "Id Pregunta: 2669. NULL";


//  Id pregunta: 2791 AÃ±o de creación de pregunta: 2006-01-01
 questions[17]= "18)  Seg&uacute;n m&eacute;trica v3. En qu&eacute; perfil encajar&iacute;a un responsable de calidad";
 choices[17]= new Array();
 choices[17][0] = "Perfil directivo ";
 choices[17][1] = "Perfil jefe de proyecto";
 choices[17][2] = "M&eacute;trica v3 no define ese tipo de participante";
 choices[17][3] = "Consultor";
 answers[17] = choices[17][1];
 units[17] = "86";
 comments[17] = "Id Pregunta: 2791. NULL";


//  Id pregunta: 2940 AÃ±o de creación de pregunta: 2004-01-01
 questions[18]= "19)  El protocolo que permite llevar peticiones para bloques de dispositivos SCSI sobre una red IP es:";
 choices[18]= new Array();
 choices[18][0] = "uSCSI";
 choices[18][1] = "FCP";
 choices[18][2] = "iSCSI";
 choices[18][3] = "FCIP";
 answers[18] = choices[18][2];
 units[18] = "48,96,97";
 comments[18] = "Id Pregunta: 2940. Similar a examen TIC SS A 2004";


//  Id pregunta: 2946 AÃ±o de creación de pregunta: 2004-01-01
 questions[19]= "20)  &iquest;Cu&aacute;l de los siguientes protocolos de la familia TCP/IP no pertenece al grupo de protocolos de la capa de aplicaci&oacute;n?:";
 choices[19]= new Array();
 choices[19][0] = "DNS: Sistema de nombres de dominio";
 choices[19][1] = "SNMP: Protocolo de gesti&oacute;n simple de red";
 choices[19][2] = "FTP: Protocolo de transferencia de archivos";
 choices[19][3] = "ARP: Protocolo de determinaci&oacute;n de direcciones";
 answers[19] = choices[19][3];
 units[19] = "100";
 comments[19] = "Id Pregunta: 2946. Examen TIC MAP B 2004";


//  Id pregunta: 3008 AÃ±o de creación de pregunta: 2004-01-01
 questions[20]= "21)  &iquest;Es admisible cierto grado de inconsistencia temporal en la informaci&oacute;n dado sistemas como X.500 o LDAP?";
 choices[20]= new Array();
 choices[20][0] = "S&iacute;";
 choices[20][1] = "No";
 choices[20][2] = "S&iacute;, pero s&oacute;lo para LDAP";
 choices[20][3] = "ninguna de las anteriores";
 answers[20] = choices[20][0];
 units[20] = "106";
 comments[20] = "Id Pregunta: 3008. ";


//  Id pregunta: 3219 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  &iquest;Cu&aacute;l de los siguientes conceptos no aporta seguridad a una intranet?:";
 choices[21]= new Array();
 choices[21][0] = "Spoofing";
 choices[21][1] = "Firewalls";
 choices[21][2] = "NAT";
 choices[21][3] = "Proxy";
 answers[21] = choices[21][0];
 units[21] = "113";
 comments[21] = "Id Pregunta: 3219. ";


//  Id pregunta: 3241 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  &iquest;Cu&aacute;l es la distancia m&aacute;xima entre estaciones en el est&aacute;ndar 10Base5?:";
 choices[22]= new Array();
 choices[22][0] = "100 metros";
 choices[22][1] = "185 metros";
 choices[22][2] = "200 metros";
 choices[22][3] = "500 metros";
 answers[22] = choices[22][3];
 units[22] = "97";
 comments[22] = "Id Pregunta: 3241. NULL";


//  Id pregunta: 3260 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  &iquest;Cu&aacute;ntos terminales pueden ser usados simult&aacute;neamente en una RDSI con acceso b&aacute;sico?:";
 choices[23]= new Array();
 choices[23][0] = "S&oacute;lo 1 canal puede estar ocupado en un momento determinado";
 choices[23][1] = "2, ya que puede haber comunicaciones simult&aacute;neas en los canales B de datos";
 choices[23][2] = "1 por cada canal B mientras que el canal D puede ser utilizado por varios terminales en modo paquete";
 choices[23][3] = "3, ya que cada canal solo puede ser utilizado por un terminal a la vez, independientemente de su tipo";
 answers[23] = choices[23][2];
 units[23] = "103";
 comments[23] = "Id Pregunta: 3260. ";


//  Id pregunta: 3447 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  El protocolo de gesti&oacute;n y administraci&oacute;n de redes que ha sido estandarizado por OSI es:";
 choices[24]= new Array();
 choices[24][0] = "SNMP (Simple Network Management Protocol)";
 choices[24][1] = "SMIP (Structure of Management Information Protocol)";
 choices[24][2] = "CMIP (Common Management Information Protocol)";
 choices[24][3] = "RMON (Remote Network Monitoring)";
 answers[24] = choices[24][2];
 units[24] = "104";
 comments[24] = "Id Pregunta: 3447. ";


//  Id pregunta: 3498 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  En el modelo de referencia OSI, el nivel de red interactua directamente con:";
 choices[25]= new Array();
 choices[25][0] = "El nivel de aplicaci&oacute;n y el nivel f&iacute;sico";
 choices[25][1] = "El nivel de transporte, el nivel de enlace, y sus niveles 'iguales' en otros sistemas";
 choices[25][2] = "El nivel de presentaci&oacute;n, el nivel de sesi&oacute;n y el usuario final";
 choices[25][3] = "Todos los niveles altos y los niveles bajos en los otros sistemas";
 answers[25] = choices[25][1];
 units[25] = "100";
 comments[25] = "Id Pregunta: 3498. NULL";


//  Id pregunta: 3680 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Uno de los protocolos m&aacute;s populares usados en las redes Ethernet (y 802.3) es el protocolo 'spanning tree' y es usado por los puentes:";
 choices[26]= new Array();
 choices[26][0] = "Puentes transparentes";
 choices[26][1] = "Puentes 'source routing'";
 choices[26][2] = "Puentes TCP/IP";
 choices[26][3] = "Ninguno de ellos";
 answers[26] = choices[26][0];
 units[26] = "102";
 comments[26] = "Id Pregunta: 3680. ";


//  Id pregunta: 3686 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  La 'velocidad' seg&uacute;n demanda es propia de la t&eacute;cnica:";
 choices[27]= new Array();
 choices[27][0] = "ATM (Asynchronous Transfer Mode)";
 choices[27][1] = "STM (Synchronous Transfer Mode)";
 choices[27][2] = "ATM y STM";
 choices[27][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[27] = choices[27][0];
 units[27] = "109";
 comments[27] = "Id Pregunta: 3686. ";


//  Id pregunta: 3838 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Sobre los algoritmos de encaminamiento utilizados por los &ldquo;routers&rdquo;, indique cual de las siguientes afirmaciones es err&oacute;nea:";
 choices[28]= new Array();
 choices[28][0] = "Mediante los algoritmos de estados de enlaces cada &ldquo;router&rdquo; env&iacute;a su tabla de encaminamiento completa a todos los dem&aacute;s &ldquo;routers&rdquo; en la red al producirse cualquier cambio en la tabla. As&iacute; act&uacute;a el protocolo OSPF";
 choices[28][1] = "Mediante los algoritmos de vector distancia (tambi&eacute;n conocidos como algoritmos Bellman-Ford) cada &ldquo;router&rdquo; env&iacute;a su tabla de encaminado completa s&oacute;lo a los &ldquo;routers&rdquo; vecinos a intervalos regulares.  As&iacute; act&uacute;a el protocolo RIP";
 choices[28][2] = "Mediante los algoritmos de estados de enlaces (tambi&eacute;n conocidos como &ldquo;shortest path first&rdquo;) cada &ldquo;router&rdquo; env&iacute;a determinada informacion relativa al estado de sus enlaces a los demas routers lo que les permite construir una vision tolpologica de la red ";
 choices[28][3] = "Los algoritmos de estados de enlaces son menos propensos a provocar un bucle de encaminamiento, ya que convergen (determinan el encaminamiento &oacute;ptimo) m&aacute;s r&aacute;pidamente";
 answers[28] = choices[28][0];
 units[28] = "101";
 comments[28] = "Id Pregunta: 3838. ";


//  Id pregunta: 3890 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  En el Modelo de referencia para la interconexi&oacute;n de sistemas abiertos (OSI), indicar cu&aacute;l de los siguientes niveles no soporta la funci&oacute;n o servicio de correcci&oacute;n de errores:";
 choices[29]= new Array();
 choices[29][0] = "F&iacute;sico";
 choices[29][1] = "Enlace";
 choices[29][2] = "Red";
 choices[29][3] = "Aplicaci&oacute;n";
 answers[29] = choices[29][0];
 units[29] = "100";
 comments[29] = "Id Pregunta: 3890. NULL";


//  Id pregunta: 3955 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  Indicar la afirmaci&oacute;n falsa";
 choices[30]= new Array();
 choices[30][0] = "Los Servicios Web son m&aacute;s simples que la arquitectura CORBA";
 choices[30][1] = "Es muy dif&iacute;cil hacer interactuar una plataforma en COMcon otra en CORBA";
 choices[30][2] = "No es posible  que un  objeto CORBA  se  comunique  con un  objeto  JavaRMI,";
 choices[30][3] = "CORBA tiene m&uacute;ltiples implementaciones";
 answers[30] = choices[30][2];
 units[30] = "116";
 comments[30] = "Id Pregunta: 3955. Hubo una pregunta sobre CORBA en el ex&aacute;men de SS del 2003, diferente de &eacute;sta";


//  Id pregunta: 4020 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  En relaci&oacute;n a la numeraci&oacute;n del sistema de telefon&iacute;a m&oacute;vil GSM, el n&uacute;mero que identifica a un abonado de una red GSM dentro del plan de numeraci&oacute;n de la red telef&oacute;nica p&uacute;blica conmutada se denomina:";
 choices[31]= new Array();
 choices[31][0] = "MSRN";
 choices[31][1] = "IMEI";
 choices[31][2] = "MSISDN";
 choices[31][3] = "IMSI";
 answers[31] = choices[31][2];
 units[31] = "108";
 comments[31] = "Id Pregunta: 4020. ";


//  Id pregunta: 4077 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  La red externa a la que se conecta el departamento de compras para comunicarse con sus proveedores se llama";
 choices[32]= new Array();
 choices[32][0] = "Intranet";
 choices[32][1] = "inter-intranet";
 choices[32][2] = "extranet abierta";
 choices[32][3] = "extranet";
 answers[32] = choices[32][3];
 units[32] = "113";
 comments[32] = "Id Pregunta: 4077. ";


//  Id pregunta: 4105 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  Internet 2:";
 choices[33]= new Array();
 choices[33][0] = "Es una red telem&aacute;tica superpuesta a la red Internet y que hace las funciones de backup.";
 choices[33][1] = "Es una red de fibra &oacute;ptica cuyo backbone est&aacute; constituido por GigaPop.";
 choices[33][2] = "Prev&eacute; velocidades de hasta 622 Mbps para usuarios particulares.";
 choices[33][3] = "Ninguna respuesta es correcta";
 answers[33] = choices[33][2];
 units[33] = "112";
 comments[33] = "Id Pregunta: 4105. ";


//  Id pregunta: 4197 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  El estandar 802.11k se centra en";
 choices[34]= new Array();
 choices[34][0] = "Calidad de Servicio (QoS) sobre redes WLAN";
 choices[34][1] = "Autenticaci&oacute;n y cifrado para redes WLAN";
 choices[34][2] = "Nueva generaci&oacute;n de WLAN de redes de, al menos, 100 Mbps (en proceso de definici&oacute;n en 2006)";
 choices[34][3] = "Intercambio de informaci&oacute;n de capacidad entre clientes y puntos de acceso en redes WLAN";
 answers[34] = choices[34][3];
 units[34] = "107";
 comments[34] = "Id Pregunta: 4197. NULL";


//  Id pregunta: 4227 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  &iquest;Qu&eacute; tipo de conector corresponde a un cable coaxial grueso (&quot;Thick&quot;)?";
 choices[35]= new Array();
 choices[35][0] = "BNC";
 choices[35][1] = "N-series";
 choices[35][2] = "TNC";
 choices[35][3] = "SMA-series";
 answers[35] = choices[35][1];
 units[35] = "99";
 comments[35] = "Id Pregunta: 4227. ";


//  Id pregunta: 4230 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  Indique la tecnolog&iacute;a de transmisi&oacute;n que utiliza el est&aacute;ndar 802.16a del IEEE:";
 choices[36]= new Array();
 choices[36][0] = "DSSS";
 choices[36][1] = "FHSS";
 choices[36][2] = "OFDM";
 choices[36][3] = "DWDM";
 answers[36] = choices[36][2];
 units[36] = "107";
 comments[36] = "Id Pregunta: 4230. NULL";


//  Id pregunta: 4430 AÃ±o de creación de pregunta: 2007-01-01
 questions[37]= "38)  &iquest;Cu&aacute;l es la banda de frecuencia reservada a voz convencional en la tecnolog&iacute;a ADSL?";
 choices[37]= new Array();
 choices[37][0] = "0-10 KHz";
 choices[37][1] = "0-4 KHz";
 choices[37][2] = "0-56 KHz";
 choices[37][3] = "5-10 KHz";
 answers[37] = choices[37][1];
 units[37] = "107";
 comments[37] = "Id Pregunta: 4430. NULL";


//  Id pregunta: 4521 AÃ±o de creación de pregunta: 2007-01-01
 questions[38]= "39)  En una infraestructura PKI, Ia revocaci&oacute;n de un certificado requiere la presencia del usuario en:";
 choices[38]= new Array();
 choices[38][0] = "El proveedor de servicios de certificaci&oacute;n.";
 choices[38][1] = "En la F&aacute;brica Nacional de Moneda y Timbre.";
 choices[38][2] = "No hace falta, se puede hacer desde Internet.";
 choices[38][3] = "En una oficina de registro.";
 answers[38] = choices[38][3];
 units[38] = "74";
 comments[38] = "Id Pregunta: 4521. NULL";


//  Id pregunta: 4569 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  Para hacer una Ilamada a un procedimiento almacenado trabajando con JDBC podemos utilizar un objeto CallableStatement. Si el procedimiento almacenado devuelve mas de un conjunto de resultados, &iquest;que m&eacute;todo deberemos invocar?:";
 choices[39]= new Array();
 choices[39][0] = "execute";
 choices[39][1] = "executeQuery";
 choices[39][2] = "executeProcedure";
 choices[39][3] = "executeUpdate";
 answers[39] = choices[39][0];
 units[39] = "60";
 comments[39] = "Id Pregunta: 4569. NULL";


//  Id pregunta: 4827 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  El marco COBIT (Control Objectives for Information and related Technology) es una herramienta de gobierno de lasTIC. En su marco de control, que identifica los requisitos de negocio, el proceso de &quot;Gesti&oacute;n de la Calidad&quot; seencuentra definido en el dominio de:";
 choices[40]= new Array();
 choices[40][0] = "Planificaci&oacute;n y organizaci&oacute;n";
 choices[40][1] = "Adquisici&oacute;n e Implementaci&oacute;n";
 choices[40][2] = "Servicio y Soporte";
 choices[40][3] = "Monitorizaci&oacute;n";
 answers[40] = choices[40][0];
 units[40] = "98";
 comments[40] = "Id Pregunta: 4827. NULL";


//  Id pregunta: 5015 AÃ±o de creación de pregunta: 2003-01-01
 questions[41]= "42)  La norma ISO 27002 recoge:";
 choices[41]= new Array();
 choices[41][0] = "Buenas pr&aacute;ticas para la gesti&oacute;n de la seguridad de la informaci&oacute;n";
 choices[41][1] = "La reglamentaci&oacute;n de interconexi&oacute;n segura de redes inal&aacute;mbricas (WIFI)";
 choices[41][2] = "Normativa aplicable para el desarrollo de aplicaciones militares";
 choices[41][3] = "Est&aacute;ndares de desarrollo de aplicaciones de uso dual (civil y militar)";
 answers[41] = choices[41][0];
 units[41] = "32";
 comments[41] = "Id Pregunta: 5015. Examen TIC A 2007";


//  Id pregunta: 5262 AÃ±o de creación de pregunta: 2003-01-01
 questions[42]= "43)  Para obtener el Diagrama Caracter&iacute;stico de un proyecto, el Plan General de Garant&iacute;a de Calidad considera los siguientes atributos:";
 choices[42]= new Array();
 choices[42][0] = "Un total de 8, que se refieren al producto que se va a desarrollar, al entorno de implantaci&oacute;n previsto y al propio proyecto o proceso de desarrollo y que se valoran dentro de un rango de 1 y 5.";
 choices[42][1] = "Un total de 18, que se refieren al producto que se va a desarrollar, al entorno de implantaci&oacute;n previsto y al propio proyecto o proceso de desarrollo y que se valoran dentro de un rango de 1 y 5.";
 choices[42][2] = "Un total de 18, que se refieren al producto que se va a desarrollar, al entorno de implantaci&oacute;n previsto y al propio proyecto o proceso de desarrollo y que se valoran dentro de un rango de 1 y 7.";
 choices[42][3] = "Ninguna de las anteriores";
 answers[42] = choices[42][1];
 units[42] = "88";
 comments[42] = "Id Pregunta: 5262. NULL";


//  Id pregunta: 5279 AÃ±o de creación de pregunta: 2003-01-01
 questions[43]= "44)  La diferencia entre la fibra &oacute;ptica monomodo y multimodo radica, principalmente, en:";
 choices[43]= new Array();
 choices[43][0] = "las frecuencias usadas";
 choices[43][1] = "los adaptadores usados";
 choices[43][2] = "la forma en que la luz entra en la fibra y se refleja dentro del n&uacute;cleo.";
 choices[43][3] = "La fibra multimodo permite por su naturaleza varios modos de instalacion";
 answers[43] = choices[43][2];
 units[43] = "99";
 comments[43] = "Id Pregunta: 5279. ";


//  Id pregunta: 5529 AÃ±o de creación de pregunta: 2003-01-01
 questions[44]= "45)  Indicar cu&aacute;l de las siguientes son t&eacute;cnicas basadas en la comparaci&oacute;n de patrones para el reconocimiento de la voz";
 choices[44]= new Array();
 choices[44][0] = "Programaci&oacute;n din&aacute;mica o DTW (Dynamic Time Warping)";
 choices[44][1] = "Modelos ocultos de Markov o HMM (Hidden Markov Models)";
 choices[44][2] = "Las respuestas a) y b) son verdaderas";
 choices[44][3] = "Ninguna es verdadera";
 answers[44] = choices[44][2];
 units[44] = "94";
 comments[44] = "Id Pregunta: 5529. ";


//  Id pregunta: 5634 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  Se&ntilde;ale cu&aacute;l de las siguientes opciones es correcta:";
 choices[45]= new Array();
 choices[45][0] = "El bus ISA es posterior al bus PCI";
 choices[45][1] = "El bus EISA es anterior al bus ISA";
 choices[45][2] = "El bus PCI es anterior al bus AGP";
 choices[45][3] = "El bus USB es posterior al bus AGP";
 answers[45] = choices[45][2];
 units[45] = "47";
 comments[45] = "Id Pregunta: 5634. ";


//  Id pregunta: 5847 AÃ±o de creación de pregunta: 2009-01-01
 questions[46]= "47)  En la t&eacute;cnica de estimaci&oacute;n de puntos funci&oacute;n, &iquest;cu&aacute;les de los siguientes tipos de procesos elementales se tienen en cuenta?";
 choices[46]= new Array();
 choices[46][0] = "Procesos elementales de datos";
 choices[46][1] = "Procesos elementales de informaci&oacute;n";
 choices[46][2] = "Procesos elementales transaccionales";
 choices[46][3] = "La A y la B son ciertas";
 answers[46] = choices[46][3];
 units[46] = "89";
 comments[46] = "Id Pregunta: 5847. NULL";


//  Id pregunta: 5849 AÃ±o de creación de pregunta: 2009-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l de las siguientes no corresponde a una t&eacute;cnica de estimaci&oacute;n del tama&ntilde;o de un sistema software?";
 choices[47]= new Array();
 choices[47][0] = "Puntos funci&oacute;n de Albrecht";
 choices[47][1] = "Use case points";
 choices[47][2] = "Puntos funci&oacute;n MarkII";
 choices[47][3] = "Puntos funci&oacute;n de Boehm";
 answers[47] = choices[47][3];
 units[47] = "89";
 comments[47] = "Id Pregunta: 5849. NULL";


//  Id pregunta: 6004 AÃ±o de creación de pregunta: 2010-01-01
 questions[48]= "49)  El proceso de kerning en un texto impreso:";
 choices[48]= new Array();
 choices[48][0] = "Es el proceso por el cual se van subdividiendo los elementos que componen una p&aacute;gina en otros menores hasta llegar a los elementos m&iacute;nimos, que son los caracteres.";
 choices[48][1] = "Es el proceso por el cual se elimina el espacio excesivo entre las letras.";
 choices[48][2] = "Es el proceso por el cual se corrige la inclinaci&oacute;n de la p&aacute;gina.";
 choices[48][3] = "Es el proceso que consiste en la divisi&oacute;n de un p&aacute;rrafo de texto en las diferentes l&iacute;neas que lo componen.";
 answers[48] = choices[48][1];
 units[48] = "94";
 comments[48] = "Id Pregunta: 6004. TIC A 2009";


//  Id pregunta: 6173 AÃ±o de creación de pregunta: 2010-01-01
 questions[49]= "50)  Dentro de  una soluci&oacute;n e-learning, donde se encuadrar&iacute;a un sistema LMS:";
 choices[49]= new Array();
 choices[49][0] = "Plataforma de formaci&oacute;n.";
 choices[49][1] = "Contenidos de formaci&oacute;n.";
 choices[49][2] = "Herramientas de comunicaci&oacute;n.";
 choices[49][3] = "Ninguna de las anteriores.";
 answers[49] = choices[49][0];
 units[49] = "66";
 comments[49] = "Id Pregunta: 6173. ";


//  Id pregunta: 6213 AÃ±o de creación de pregunta: 2010-01-01
 questions[50]= "51)  Qu&eacute; diagrama nos permite mostrar la disposici&oacute;n de las particiones f&iacute;sicas del sistema de informaci&oacute;n y la asignaci&oacute;n de los componentes software a estas particiones:";
 choices[50]= new Array();
 choices[50][0] = "Diagrama de Componentes";
 choices[50][1] = "Diagrama de Descomposici&oacute;n";
 choices[50][2] = "Diagrama de Despliegue";
 choices[50][3] = "Diagrama de Estructura";
 answers[50] = choices[50][2];
 units[50] = "82";
 comments[50] = "Id Pregunta: 6213. TICB-2009, bloque desarrollo";


//  Id pregunta: 6649 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)  En el modelo COCOMO 2000 surgido como evoluci&oacute;n de COCOMO II, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[51]= new Array();
 choices[51][0] = "Modelo de composici&oacute;n de la Aplicaci&oacute;n: es una primera aproximaci&oacute;n en las fases iniciales del ciclo de vida";
 choices[51][1] = "Modelo de composici&oacute;n de la Aplicaci&oacute;n: incluye el uso de prototipos";
 choices[51][2] = "Modelo de Dise&ntilde;o Preliminar: es una primera aproximaci&oacute;n en las fases iniciales del ciclo de vida";
 choices[51][3] = "Modelo de Dise&ntilde;o Preliminar: incluye el uso de prototipos";
 answers[51] = choices[51][1];
 units[51] = "89";
 comments[51] = "Id Pregunta: 6649. NULL";


//  Id pregunta: 7143 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  Se&ntilde;ala la opci&oacute;n que NO se encuentra en los objetivos de MAGERIT v2:";
 choices[52]= new Array();
 choices[52][0] = "Concienciar a los responsables de los sistemas de informaci&oacute;n de la existencia de riesgos y de la necesidad de atajarlos a tiempo";
 choices[52][1] = "Ofrecer un m&eacute;todo sistem&aacute;tico para analizar los riesgos siguiendo el Libro Blanco de Buenas Pr&aacute;cticas en Materia de Seguridad para la Administraci&oacute;n Europea";
 choices[52][2] = "Ayudar a descubrir y planificar las medidas oportunas para mantener los riesgos bajo control";
 choices[52][3] = "Apoyar la preparaci&oacute;n a la Organizaci&oacute;n para procesos de evaluaci&oacute;n, auditoria, certificaci&oacute;n o acreditaci&oacute;n";
 answers[52] = choices[52][1];
 units[52] = "33";
 comments[52] = "Id Pregunta: 7143. Examen TIC B 2009";


//  Id pregunta: 7826 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)   Dentro del kernel de Unix, el n&uacute;cleo dependiente:";
 choices[53]= new Array();
 choices[53][0] = " Controla la ejecuci&oacute;n de procesos.";
 choices[53][1] = " Asigna memoria principal a un proceso de ejecuci&oacute;n.";
 choices[53][2] = " Permite el acceso controlado de los procesos a los perif&eacute;ricos.";
 choices[53][3] = " Se encarga de las interrupciones.";
 answers[53] = choices[53][3];
 units[53] = "NULL";
 comments[53] = "Id Pregunta: 7826. Map 2005";


//  Id pregunta: 7839 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)   &iquest;Qu&eacute; tipo de conector corresponde a un cable coaxial grueso (&laquo;Thick&raquo;)?";
 choices[54]= new Array();
 choices[54][0] = " BNC.";
 choices[54][1] = " N-series.";
 choices[54][2] = " TNC.";
 choices[54][3] = " SMA-series.";
 answers[54] = choices[54][1];
 units[54] = "NULL";
 comments[54] = "Id Pregunta: 7839. Map 2005";


//  Id pregunta: 8020 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)   Indicar cu&aacute;l es la afirmaci&oacute;n correcta en UML:";
 choices[55]= new Array();
 choices[55][0] = " El diagrama de secuencia es una t&eacute;cnica que muestra la configuraci&oacute;n de los elementos de procesamiento o nodos del sistema y los componentes software, procesos y objetos que se ejecutan sobre ellos.";
 choices[55][1] = " Un diagrama de componentes muestra la interacci&oacute;n (conjunto de mensajes que se intercambian entre los objetos) ordenada en una secuencia de tiempos.";
 choices[55][2] = " Un diagrama de secuencia muestra un grafo de componentes software conectados por relaciones de dependencia.";
 choices[55][3] = " Un diagrama de colaboraci&oacute;n muestra una interacci&oacute;n organizada sobre los objetos, sus enlaces y sus mensajes.";
 answers[55] = choices[55][3];
 units[55] = "NULL";
 comments[55] = "Id Pregunta: 8020. Map 2007";


//  Id pregunta: 8195 AÃ±o de creación de pregunta: 2011-01-01
 questions[56]= "57)  La normativa vigente sobre Infraestructuras Comunes de Telecomunicaci&oacute;n (ICTs) establece que:";
 choices[56]= new Array();
 choices[56][0] = "Las dimensiones m&iacute;nimas de una ICT incluyen los elementos necesarios para la captaci&oacute;n y adaptaci&oacute;n de las se&ntilde;ales de radiodifusi&oacute;n sonora y televisi&oacute;n terrenales y por sat&eacute;lite.";
 choices[56][1] = "Su &aacute;mbito de aplicaci&oacute;n son todos los inmuebles de nueva construcci&oacute;n a partir de su entrada en vigor. ";
 choices[56][2] = "Finalizados los trabajos de ejecuci&oacute;n del Proyecto T&eacute;cnico, siempre se deber&aacute; presentar un Bolet&iacute;n de Instalaci&oacute;n. ";
 choices[56][3] = "Finalizados los trabajos de ejecuci&oacute;n del Proyecto T&eacute;cnico, siempre se deber&aacute; presentar un Certificado de Fin de Obra. ";
 answers[56] = choices[56][2];
 units[56] = "99";
 comments[56] = "Id Pregunta: 8195. Examen TIC A1 2010";


//  Id pregunta: 8307 AÃ±o de creación de pregunta: 2011-01-01
 questions[57]= "58)  Un documento firmado digitalmente incluye la huella digital:";
 choices[57]= new Array();
 choices[57][0] = "De la clave del firmante, cifrada con su clave p&uacute;blica.";
 choices[57][1] = "De la clave p&uacute;blica del firmante, cifrada con su clave privada.";
 choices[57][2] = "Del documento firmado, cifrada con la clave del firmante.";
 choices[57][3] = "Del documento firmado, cifrada con la clave p&uacute;blica del firmante.";
 answers[57] = choices[57][2];
 units[57] = "111";
 comments[57] = "Id Pregunta: 8307. Examen TIC A2 2010";


//  Id pregunta: 8396 AÃ±o de creación de pregunta: 2011-01-01
 questions[58]= "59)  &iquest;Qu&eacute; tipo de nodo de control se emplea en un diagrama de actividades de UML 2.0 para indicar la sincronizaci&oacute;n de varios flujos concurrentes en uno solo?";
 choices[58]= new Array();
 choices[58][0] = "Divisi&oacute;n (fork node).";
 choices[58][1] = "Bifurcaci&oacute;n (decision node).";
 choices[58][2] = "Fusi&oacute;n (merge node).";
 choices[58][3] = "Union (join node).";
 answers[58] = choices[58][3];
 units[58] = "84";
 comments[58] = "Id Pregunta: 8396. Examen TIC A2 2010";


//  Id pregunta: 8460 AÃ±o de creación de pregunta: 2011-01-01
 questions[59]= "60)  En una SAN, la direcci&oacute;n f&iacute;sica de una HBA se denomina:";
 choices[59]= new Array();
 choices[59][0] = "WWN";
 choices[59][1] = "MAC";
 choices[59][2] = "SPOF";
 choices[59][3] = "IP";
 answers[59] = choices[59][0];
 units[59] = "48";
 comments[59] = "Id Pregunta: 8460. Analista Ayto. Madrid 2010";


//  Id pregunta: 8520 AÃ±o de creación de pregunta: 2011-01-01
 questions[60]= "61)  Tenemos las entidades &quot;opositor&quot; y &quot;oposici&oacute;n&quot; y sabemos que a los opositores se les permite apuntarse a varias oposiciones distintas. Si se quisiera crear el modelo conceptual de base de datos, &iquest;qu&eacute; relaci&oacute;n crear&iacute;a?:";
 choices[60]= new Array();
 choices[60][0] = "Una relaci&oacute;n N:M.";
 choices[60][1] = "Una relaci&oacute;n 1:N.";
 choices[60][2] = "Una relaci&oacute;n 1:1.";
 choices[60][3] = "El modelo conceptual no admite relaciones, s&oacute;lo el modelo relacional lo permite. ";
 answers[60] = choices[60][0];
 units[60] = "57, 58";
 comments[60] = "Id Pregunta: 8520. Examen TIC A2 2010 interna";


//  Id pregunta: 8529 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  En el contexto de la Web 2.0, el conjunto formado por una colecci&oacute;n extensible de p&aacute;ginas web entrelazadas, un sistema hipertextual para almacenar y modificar informaci&oacute;n y una base de datos donde cada p&aacute;gina puede ser f&aacute;cilmente modificada por cualquier usuario que disponga de un navegador web est&aacute;ndar que admita la utilizaci&oacute;n de formularios, corresponde al concepto de:";
 choices[61]= new Array();
 choices[61][0] = "Wiki.";
 choices[61][1] = "Mashup.";
 choices[61][2] = "Blog.";
 choices[61][3] = "Agregador o feeder. ";
 answers[61] = choices[61][0];
 units[61] = "120";
 comments[61] = "Id Pregunta: 8529. Examen TIC A2 2010 interna";


//  Id pregunta: 8536 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  La tecnolog&iacute;a HSDPA presenta una capacidad m&aacute;xima de transferencia de informaci&oacute;n de:";
 choices[62]= new Array();
 choices[62][0] = "10,8 Mbps te&oacute;ricos.";
 choices[62][1] = "14 Mbps";
 choices[62][2] = "2 Mbps";
 choices[62][3] = "384 Kbps";
 answers[62] = choices[62][1];
 units[62] = "108";
 comments[62] = "Id Pregunta: 8536. Examen TIC A2 2010 interna";


//  Id pregunta: 8763 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  En el contexto de los lenguajes de programaci&oacute;n orientados a objetos, cuando un objeto recibe de otro objeto o aplicaci&oacute;n una notificaci&oacute;n, ha recibido un:";
 choices[63]= new Array();
 choices[63][0] = "Evento.";
 choices[63][1] = "Comando.";
 choices[63][2] = "Protocolo.";
 choices[63][3] = "Orden.";
 answers[63] = choices[63][0];
 units[63] = "82, 84";
 comments[63] = "Id Pregunta: 8763. Examen TIC A2 2010 interna";


//  Id pregunta: 8790 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre IPv6 es correcta?";
 choices[64]= new Array();
 choices[64][0] = "Las direcciones no son jer&aacute;rquicas y se asignan aleatoriamente";
 choices[64][1] = "Hay 2.7 billones de direcciones disponibles para asignar";
 choices[64][2] = "Las direcciones broadcast se reemplazan con direcciones multicast";
 choices[64][3] = "Un interfaz de red &uacute;nicamente podr&aacute; ser configurado con una &uacute;nica direcci&oacute;n";
 answers[64] = choices[64][2];
 units[64] = "100";
 comments[64] = "Id Pregunta: 8790. Examen UPM A2 2011";


//  Id pregunta: 8948 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  &iquest;En qu&eacute; caso ser&iacute;a suficiente una autoevaluaci&oacute;n como auditor&iacute;a al sistema de informaci&oacute;n seg&uacute;n el RD 3/2010?";
 choices[65]= new Array();
 choices[65][0] = "En sistemas de informaci&oacute;n de categor&iacute;a b&aacute;sica";
 choices[65][1] = "En sistemas de informaci&oacute;n de categor&iacute;a b&aacute;sica o inferior";
 choices[65][2] = "En sistemas de informaci&oacute;n de categor&iacute;a b&aacute;sica o media";
 choices[65][3] = "Cuando as&iacute; lo decida el responsable de seguridad competente";
 answers[65] = choices[65][1];
 units[65] = "43";
 comments[65] = "Id Pregunta: 8948. ";


//  Id pregunta: 9060 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  Respecto a LMDS:";
 choices[66]= new Array();
 choices[66][0] = "Al ser de frecuencias bajas, no tiene problemas con las zonas de sombra.";
 choices[66][1] = "Son redes de lento despliegue";
 choices[66][2] = "Funciona en la banda de los 28 a 31 Ghz y una difusi&oacute;n m&aacute;xima de 7 km";
 choices[66][3] = "Se la conoce como proveedor de servicios sin cable";
 answers[66] = choices[66][2];
 units[66] = "108";
 comments[66] = "Id Pregunta: 9060. NULL";


//  Id pregunta: 9138 AÃ±o de creación de pregunta: 2013-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l no es una funci&oacute;n l&oacute;gica que suele integrar cualquiera de los chipsets actuales?";
 choices[67]= new Array();
 choices[67][0] = "soporte para el microprocesador";
 choices[67][1] = "Controlador de memoria (MMU, Memory Management Unit)";
 choices[67][2] = "Reloj de Tiempo Real (RTC)";
 choices[67][3] = "Controlador de temperatura.";
 answers[67] = choices[67][3];
 units[67] = "47";
 comments[67] = "Id Pregunta: 9138. ";


//  Id pregunta: 9157 AÃ±o de creación de pregunta: 2013-01-01
 questions[68]= "69)  De acuerdo a AGR010, un sistema CMI (Computer Managed Instruction) con un entorno basado en web, no tiene por qu&eacute; cumplir con:";
 choices[68]= new Array();
 choices[68][0] = "Comunicaci&oacute;n HTTP (HACP Binding)";
 choices[68][1] = "Comunicaci&oacute;n mediante API (API Binding)";
 choices[68][2] = "Definici&oacute;n de la estructura del curso (File Binding)";
 choices[68][3] = "Definici&oacute;n de los tipos de datos del curso (Data Binding) ";
 answers[68] = choices[68][3];
 units[68] = "66";
 comments[68] = "Id Pregunta: 9157. ";


//  Id pregunta: 9260 AÃ±o de creación de pregunta: 2013-01-01
 questions[69]= "70)  La arquitectura de proceso paralelo en la cual cada procesador tiene su propia memoria local y adem&aacute;s puede acceder a las memorias de otros procesadores se conoce como:";
 choices[69]= new Array();
 choices[69][0] = "SMP ";
 choices[69][1] = "Grid ";
 choices[69][2] = "NUMA ";
 choices[69][3] = "Cluster ";
 answers[69] = choices[69][2];
 units[69] = "45";
 comments[69] = "Id Pregunta: 9260. Examen TICA2-2011";


//  Id pregunta: 9341 AÃ±o de creación de pregunta: 2013-01-01
 questions[70]= "71)  &iquest; Cu&aacute;l de los siguientes no es un nivel de madurez de CMMI ?";
 choices[70]= new Array();
 choices[70][0] = "Definido";
 choices[70][1] = "Gestionado";
 choices[70][2] = "Gestionado de forma cuantitativa";
 choices[70][3] = "Repetible";
 answers[70] = choices[70][3];
 units[70] = "87";
 comments[70] = "Id Pregunta: 9341. NULL";


//  Id pregunta: 9434 AÃ±o de creación de pregunta: 2013-01-01
 questions[71]= "72)  El art. 12 de la Ley 9/2014, General de Telecomunicaciones, indica los principios generales aplicables al acceso a las redes y recursos asociados y a su interconexi&oacute;n. Indique cual de las siguientes afirmaciones no es correcta:";
 choices[71]= new Array();
 choices[71][0] = "Los operadores de redes p&uacute;blicas de comunicaciones electr&oacute;nicas tendr&aacute;n el derecho y, cuando se solicite por otros operadores de redes p&uacute;blicas de comunicaciones electr&oacute;nicas, la obligaci&oacute;n de negociar la interconexi&oacute;n mutua con el fin de prestar servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico, con el objeto de garantizar as&iacute; la prestaci&oacute;n de servicios y su interoperabilidad.";
 choices[71][1] = "No existir&aacute;n restricciones que impidan que los operadores negocien entre s&iacute; acuerdos de acceso e interconexi&oacute;n";
 choices[71][2] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia intervendr&aacute; en las relaciones entre operadores, a petici&oacute;n del Consejo de Ministros.";
 choices[71][3] = "Los operadores que obtengan informaci&oacute;n de otros, en el proceso de negociaci&oacute;n de los acuerdos de acceso o de interconexi&oacute;n, destinar&aacute;n la informaci&oacute;n obtenida exclusivamente a los fines para los que fue solicitada.";
 answers[71] = choices[71][2];
 units[71] = "110";
 comments[71] = "Id Pregunta: 9434. Examen Xunta Galicia 2011 TIC A1";


//  Id pregunta: 9479 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  &iquest;Qu&eacute; m&eacute;todos se pueden utilizar para comparar inversiones con diferente duraci&oacute;n?";
 choices[72]= new Array();
 choices[72][0] = "M&eacute;todo de la anualidad equivalente y m&eacute;todo de la cadena de reemplazo";
 choices[72][1] = "M&eacute;todo de la anualidad equivalente y tasa de rendimiento contable";
 choices[72][2] = "M&eacute;todo de la anualidad equivalente y m&eacute;todo de comparaci&oacute;n de costes";
 choices[72][3] = "M&eacute;todo del payback y m&eacute;todo de la cadena de reemplazo";
 answers[72] = choices[72][0];
 units[72] = "38";
 comments[72] = "Id Pregunta: 9479. ";


//  Id pregunta: 9601 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  &iquest;Qu&eacute; componentes se ubican en el n&uacute;cleo dependiente del sistema operativo UNIX?";
 choices[73]= new Array();
 choices[73][0] = "Las interrupciones";
 choices[73][1] = "El scheduler";
 choices[73][2] = "Los drivers de los dispositivos";
 choices[73][3] = "a) y c) son correctas";
 answers[73] = choices[73][3];
 units[73] = "53";
 comments[73] = "Id Pregunta: 9601. ";


//  Id pregunta: 9652 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  Entre las caracter&iacute;sticas del modelo de calidad de la ISO 9126 se encuentran:";
 choices[74]= new Array();
 choices[74][0] = "Funcionalidad";
 choices[74][1] = "Fiabilidad";
 choices[74][2] = "Portabilidad";
 choices[74][3] = "Todas las anteriores";
 answers[74] = choices[74][3];
 units[74] = "87";
 comments[74] = "Id Pregunta: 9652. Son 6, Funcionalidad, Fiabilidad, Usabilidad, Eficiencia, Mantenibilidad, Portabilidad";


//  Id pregunta: 9709 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  La programaci&oacute;n funcional limita el uso de";
 choices[75]= new Array();
 choices[75][0] = "estados mutables.";
 choices[75][1] = "expresiones lambda.";
 choices[75][2] = "procedimientos como par&aacute;metros.";
 choices[75][3] = "lenguajes como Erlang, F# o Scala.";
 answers[75] = choices[75][0];
 units[75] = "60";
 comments[75] = "Id Pregunta: 9709. Examen TIC-A1 2013";


//  Id pregunta: 9757 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  En M&eacute;trica v3, la Especificaci&oacute;n del Plan de pruebas de Regresi&oacute;n se realiza en:";
 choices[76]= new Array();
 choices[76][0] = "ASI";
 choices[76][1] = "DSI";
 choices[76][2] = "CSI";
 choices[76][3] = "MSI";
 answers[76] = choices[76][3];
 units[76] = "86";
 comments[76] = "Id Pregunta: 9757. MSI.3 &quot;Preparaci&oacute;n de la implementaci&oacute;n de la modificaci&oacute;n&quot; incluye una tarea &quot;Especificaci&oacute;n del Plan de Pruebas de Regresi&oacute;n&quot;";


//  Id pregunta: 9797 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  El uso conjunto de los certificados ubicados en el DNI electr&oacute;nico proporcionan las siguientes garant&iacute;as";
 choices[77]= new Array();
 choices[77][0] = "Disponibilidad, autenticidad de origen,confidencialidad y no repudio de origen. ";
 choices[77][1] = "Disponibilidad, integridad, autenticidad de origen. ";
 choices[77][2] = "Integridad, autenticidad de origen y no repudio de origen.";
 choices[77][3] = "Integridad, confidencialidad, autenticid ad de origen y no repudio de destino. ";
 answers[77] = choices[77][2];
 units[77] = "74";
 comments[77] = "Id Pregunta: 9797. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9803 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  &iquest;Cu&aacute;l de las siguientes medidas de seguridad NO pertenece al grupo &quot;Medidas de protecci&oacute;n [mp]&quot; seg&uacute;n el RD 3/2010 (Esquema Nacional de Seguridad)?";
 choices[78]= new Array();
 choices[78][0] = "Detecci&oacute;n de intrusi&oacute;n.";
 choices[78][1] = "Formaci&oacute;n.";
 choices[78][2] = "Desarrollo.";
 choices[78][3] = "Energ&iacute;a el&eacute;ctrica.";
 answers[78] = choices[78][0];
 units[78] = "43";
 comments[78] = "Id Pregunta: 9803. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9864 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  &iquest;A qu&eacute; tipo de ataque pertenece el denominado ping de la muerte?";
 choices[79]= new Array();
 choices[79][0] = "Spoofing.";
 choices[79][1] = "Man in the middle.";
 choices[79][2] = "Denial of Service.";
 choices[79][3] = "Flooding.";
 answers[79] = choices[79][2];
 units[79] = "111";
 comments[79] = "Id Pregunta: 9864. Examen TIC del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 10027 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  Elija la respuesta correcta:";
 choices[80]= new Array();
 choices[80][0] = "La JavaServer Pages Standard Tag Library (JSTL) es una colecci&oacute;n de bibliotecas de etiquetas con utilidades ampliamente utilizadas en el desarrollo de p&aacute;ginas web.";
 choices[80][1] = "Apache Struts es un framework de desarrollo bajo el modelo vista controlador que sirve para crear Aplicaciones web con Smalltalk.";
 choices[80][2] = "El Unified Expression Language (EL) integra los JSP con los servlets.";
 choices[80][3] = "Los Applets y las Java Server Pages (JSPs) son dos m&eacute;todos de creaci&oacute;n de p&aacute;ginas web din&aacute;micas en servidor usando el lenguaje Java.";
 answers[80] = choices[80][0];
 units[80] = "115";
 comments[80] = "Id Pregunta: 10027. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10186 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  Aplicando la t&eacute;cnica del Modelo E/R Extendido se elabora el modelo de datos de la aplicaci&oacute;n que, en la arquitectura de base de datos estandarizada como ANSI/X3/SPARC, se corresponde con el nivel o esquema:";
 choices[81]= new Array();
 choices[81][0] = "Externo";
 choices[81][1] = "L&oacute;gico";
 choices[81][2] = "Interno";
 choices[81][3] = "Conceptual";
 answers[81] = choices[81][3];
 units[81] = "57,80";
 comments[81] = "Id Pregunta: 10186. ";


//  Id pregunta: 10350 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  En relaci&oacute;n con las pautas de accesibilidad WCAG 2.0, indique la respuesta correcta:";
 choices[82]= new Array();
 choices[82][0] = "Para cumplir nivel A, las p&aacute;ginas no pueden contener ning&uacute;n elemento que destelle m&aacute;s de 3 veces por segundo";
 choices[82][1] = "Lo anterior es cierto, pero para nivel AA";
 choices[82][2] = "Lo anterior es cierto, pero para nivel AAA";
 choices[82][3] = "Lo anterior es cierto, pero a&ntilde;adiendo que adem&aacute;s el destello debe estar por debajo del umbral de destello general y de rojo";
 answers[82] = choices[82][2];
 units[82] = "39";
 comments[82] = "Id Pregunta: 10350. Consultar WCAG Pauta 2.3 Convulsiones";


//  Id pregunta: 10432 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Indique cual de las siguientes ediciones no corresponde a Windows Server 2012 ";
 choices[83]= new Array();
 choices[83][0] = "Business";
 choices[83][1] = "Essentials";
 choices[83][2] = "Foundation";
 choices[83][3] = "Standard";
 answers[83] = choices[83][0];
 units[83] = "56";
 comments[83] = "Id Pregunta: 10432. Examen TIC A1 2013";


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


//  Id pregunta: 10441 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  En el &aacute;mbito de COBIT 5, el proceso de Gestionar la Calidad se encuentra encuadrado en el dominio de ";
 choices[85]= new Array();
 choices[85][0] = "Alinear, Planificar y Organizar";
 choices[85][1] = "Monitorizar y Evaluar.";
 choices[85][2] = "Construir, Adquirir e Implementar";
 choices[85][3] = "Monitorizar y Evaluar.";
 answers[85] = choices[85][0];
 units[85] = "98";
 comments[85] = "Id Pregunta: 10441. Examen TIC A1 2013";


//  Id pregunta: 10471 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  En una PKI:";
 choices[86]= new Array();
 choices[86][0] = "Un certificado se a&ntilde;ade a una CRL en cuanto se tiene conocimiento de que hay motivos para su revocaci&oacute;n.";
 choices[86][1] = "Las CRLs incluyen todos los certificados emitidos por una CA.";
 choices[86][2] = "Un certificado revocado es eliminado de una CRL en cuanto se emite un nuevo certificado de las mismas caracter&iacute;sticas para el titular del certificado revocado. ";
 choices[86][3] = "No es obligatorio que una CA emita CRLs si proporciona otro mecanismo de consulta del estado de los certificados.";
 answers[86] = choices[86][3];
 units[86] = "73";
 comments[86] = "Id Pregunta: 10471. ";


//  Id pregunta: 10509 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Si el c&oacute;digo de respuesta de un servidor SMTP, que cumple la RFC 821, es 501, podemos decir que:";
 choices[87]= new Array();
 choices[87][0] = "La operaci&oacute;n se ha realizado con &eacute;xito.";
 choices[87][1] = "Se ha producido un Error Temporal. Es posible que, volver a mandar el comando, con el mismo formato pasado un tiempo, produzca un resultado satisfactorio";
 choices[87][2] = "Se ha producido un Error, debido a que los parametros del comando enviado no tienen la sintaxis correcta.";
 choices[87][3] = "No podemos decir nada";
 answers[87] = choices[87][2];
 units[87] = "106";
 comments[87] = "Id Pregunta: 10509. http://tools.ietf.org/html/rfc821#page-35";


//  Id pregunta: 10578 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  La red SARA:";
 choices[88]= new Array();
 choices[88][0] = "S&oacute;lo interconecta las Administraciones P&uacute;blicas Espa&ntilde;olas.";
 choices[88][1] = "S&oacute;lo interconecta la Administraci&oacute;n General del Estado.";
 choices[88][2] = "S&oacute;lo interconecta las Comunidades Aut&oacute;nomas entre s&iacute;.";
 choices[88][3] = "Interconecta las Administraciones P&uacute;blicas Espa&ntilde;olas e instituciones europeas.";
 answers[88] = choices[88][3];
 units[88] = "44";
 comments[88] = "Id Pregunta: 10578. ";


//  Id pregunta: 10815 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l de las siguientes opciones incluye todas las fases del modelo de ciclo de vida RAD (Rapid Application Development)?";
 choices[89]= new Array();
 choices[89][0] = "Modelado de provisi&oacute;n, Modelado de entidades, Modelado de relaciones, Generaci&oacute;n de aplicaciones y Pruebas de entrega.";
 choices[89][1] = "Modelado de gesti&oacute;n, Modelado de entidades, Modelado de relaciones, Generaci&oacute;n de aplicaciones y Pruebas de entrega.";
 choices[89][2] = "Modelado de gesti&oacute;n, Modelado de datos, Modelado de procesos, Generaci&oacute;n de aplicaciones y Pruebas de entrega.";
 choices[89][3] = "Modelado de gesti&oacute;n, Modelado de datos, Generaci&oacute;n de aplicaciones, Pruebas de desarrollo y Pruebas de entrega.";
 answers[89] = choices[89][2];
 units[89] = "76, 79";
 comments[89] = "Id Pregunta: 10815. Examen GSI 2014";


//  Id pregunta: 10906 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Se&ntilde;ale la respuesta correcta seg&uacute;n lo que dicta el art&iacute;culo 79 de la Ley 9/2014, General de Telecomunicaciones:";
 choices[90]= new Array();
 choices[90][0] = "Por la comisi&oacute;n de infracciones muy graves se impondr&aacute; al infractor multa por importe de hasta 30 millones de euros.";
 choices[90][1] = "Las infracciones muy graves, en funci&oacute;n de sus circunstancias, podr&aacute;n dar lugar a la inhabilitaci&oacute;n hasta de 10 a&ntilde;os del operador para la explotaci&oacute;n de redes o la prestaci&oacute;n de servicios de comunicaciones electr&oacute;nicas.";
 choices[90][2] = "Por la comisi&oacute;n de infracciones graves se impondr&aacute; al infractor multa por importe de hasta 5 millones de euros.";
 choices[90][3] = "Por la comisi&oacute;n de infracciones leves se impondr&aacute; al infractor una multa por importe de hasta 50 mil euros.";
 answers[90] = choices[90][3];
 units[90] = "110";
 comments[90] = "Id Pregunta: 10906. Examen GSI 2014";


//  Id pregunta: 10970 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Respecto a las tarjetas de identificaci&oacute;n con circuitos integrados, la norma ISO/IEC 7816-4:2013 NO especifica:";
 choices[91]= new Array();
 choices[91][0] = "Las dimensiones y tolerancias de la tarjeta de identificaci&oacute;n.";
 choices[91][1] = "M&eacute;todos de acceso a los ficheros e informaci&oacute;n.";
 choices[91][2] = "M&eacute;todos para la securizaci&oacute;n de los mensajes.";
 choices[91][3] = "M&eacute;todos para la recuperaci&oacute;n de informaci&oacute;n.";
 answers[91] = choices[91][0];
 units[91] = "74";
 comments[91] = "Id Pregunta: 10970. TIC A1 AGE 2014";


//  Id pregunta: 11039 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de las siguientes afirmaciones acerca del modelo l&oacute;gico relacional es correcta?";
 choices[92]= new Array();
 choices[92][0] = "Fue creado por Peter Chen";
 choices[92][1] = "Est&aacute; basado en la teor&iacute;a de conjuntos y la l&oacute;gica de predicados";
 choices[92][2] = "Las estructuras de datos son complejas";
 choices[92][3] = "No permite incorporar aspectos sem&aacute;nticos mediante el establecimiento de reglas de integridad";
 answers[92] = choices[92][1];
 units[92] = "58";
 comments[92] = "Id Pregunta: 11039. ";


//  Id pregunta: 11159 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Seleccione la respuesta verdadera:";
 choices[93]= new Array();
 choices[93][0] = "El fan-in de un m&oacute;dulo es usado como una medida de reusabilidad";
 choices[93][1] = "El fan-in de un m&oacute;dulo es usado como una medida de complejidad.";
 choices[93][2] = "Las dos anteriores son verdaderas";
 choices[93][3] = "Todas son falsas";
 answers[93] = choices[93][0];
 units[93] = "84";
 comments[93] = "Id Pregunta: 11159. ";


//  Id pregunta: 11465 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Seg&uacute;n la Ley 9/2014, el usuario tiene derecho:";
 choices[94]= new Array();
 choices[94][0] = "A figurar en las gu&iacute;as de abonados.";
 choices[94][1] = "A no figurar en las gu&iacute;as de abonados.";
 choices[94][2] = "A ambas.";
 choices[94][3] = "A ninguna.";
 answers[94] = choices[94][2];
 units[94] = "110";
 comments[94] = "Id Pregunta: 11465. ";


//  Id pregunta: 11558 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Seg&uacute;n el Modelo Oculto de Markov (HMM), se&ntilde;ale la respuesta CORRECTA:";
 choices[95]= new Array();
 choices[95][0] = "No est&aacute; basada en una m&aacute;quina de estados finito.";
 choices[95][1] = "Las transiciones entre estados constituyen el proceso oculto.";
 choices[95][2] = "Los vectores de par&aacute;metros que se producen en cada estado es el proceso observable.";
 choices[95][3] = "Las respuestas b y c son correctas.";
 answers[95] = choices[95][3];
 units[95] = "94";
 comments[95] = "Id Pregunta: 11558. NULL";


//  Id pregunta: 11648 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  La Gesti&oacute;n de la disponibilidad se encuentra en ITILv2 e ITIL v3, respectivamente en:";
 choices[96]= new Array();
 choices[96][0] = "Entrega del servicio y Dise&ntilde;o del servicio";
 choices[96][1] = "Soporte del servicio y Estrategia del servicio";
 choices[96][2] = "Soporte del servicio y Transici&oacute;n del servicio";
 choices[96][3] = "Entrega del servicio y Estrategia del servicio";
 answers[96] = choices[96][0];
 units[96] = "98";
 comments[96] = "Id Pregunta: 11648. ";


//  Id pregunta: 11674 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Son plataformas para almacenar y compartir fotos:";
 choices[97]= new Array();
 choices[97][0] = "Flickr, Backpackit y Picasa";
 choices[97][1] = "Photobucket, Picasa y ThisLife";
 choices[97][2] = "ThisLife, Drupal y Flickr";
 choices[97][3] = "Photobucket, Backpackit y Feedreader";
 answers[97] = choices[97][1];
 units[97] = "120";
 comments[97] = "Id Pregunta: 11674. ";


//  Id pregunta: 11694 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;cu&aacute;l no es un estado de puerto en el protocolo STP?";
 choices[98]= new Array();
 choices[98][0] = "Listening";
 choices[98][1] = "Learning";
 choices[98][2] = "Forwarding";
 choices[98][3] = "Broadcasting";
 answers[98] = choices[98][3];
 units[98] = "102";
 comments[98] = "Id Pregunta: 11694. NULL";


//  Id pregunta: 11738 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Qu&eacute; es un sistema IDM (Identity Manager)?";
 choices[99]= new Array();
 choices[99][0] = "Es una plataforma que permite gestionar desde un s&oacute;lo punto el ciclo de vida de una identidad";
 choices[99][1] = "Es cualquier sistema de gesti&oacute;n de usuarios.";
 choices[99][2] = "Es una plataforma de gesti&oacute;n de PKI para proporcionar tarjetas de identificaci&oacute;n a los empleados de la organizaci&oacute;n.";
 choices[99][3] = "Es una plataforma que impide la descentralizaci&oacute;n de la administraci&oacute;n de los sistemas de control de acceso basados en roles.";
 answers[99] = choices[99][0];
 units[99] = "118";
 comments[99] = "Id Pregunta: 11738. ";


