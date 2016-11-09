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

//  Id pregunta: 105 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  Andrea Zerilli realiz&oacute; estudios sobre:";
 choices[0]= new Array();
 choices[0][0] = "Teor&iacute;a de redes";
 choices[0][1] = "Investigaci&oacute;n operativa y teletr&aacute;fico";
 choices[0][2] = "Metodolog&iacute;a de desarrollo";
 choices[0][3] = "Organizaci&oacute;n de empresas";
 answers[0] = choices[0][3];
 units[0] = "22";
 comments[0] = "Id Pregunta: 105. NULL";


//  Id pregunta: 107 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  CRM son las siglas de:";
 choices[1]= new Array();
 choices[1][0] = "Cost Recalculating Method: m&eacute;todo de c&aacute;lculo de optimizaci&oacute;n de costes";
 choices[1][1] = "Call Routing for Mobile phones: sistema de enrutamiento de llamadas en telefon&iacute;a m&oacute;vil";
 choices[1][2] = "Customer Relationship Management: gesti&oacute;n de relaci&oacute;n con los clientes";
 choices[1][3] = "Customer Relationship Method: m&eacute;todo para relaci&oacute;n con los clientes";
 answers[1] = choices[1][2];
 units[1] = "65";
 comments[1] = "Id Pregunta: 107. ";


//  Id pregunta: 205 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  Para el an&aacute;lisis de la gesti&oacute;n de riesgos:";
 choices[2]= new Array();
 choices[2][0] = "usaremos el proyecto MABER de la administraci&oacute;n";
 choices[2][1] = "seguiremos las recomendaciones de la herramienta NEDAES";
 choices[2][2] = "utilizaremos las bases sentadas por ESTROFA";
 choices[2][3] = "Ninguna de las anteriores";
 answers[2] = choices[2][3];
 units[2] = "33";
 comments[2] = "Id Pregunta: 205. ";


//  Id pregunta: 235 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  En relaci&oacute;n con la gu&iacute;a de portabilidad X/Open XPG4, el perfil XPG4 Base:";
 choices[3]= new Array();
 choices[3][0] = "No existe";
 choices[3][1] = "Supone la base de un servidor de base de datos";
 choices[3][2] = "Es equivalente al XPG3 y la base para el resto de los perfiles";
 choices[3][3] = "Para obtenerlo, es necesario certificar el componente XPG4 BSFT";
 answers[3] = choices[3][2];
 units[3] = "40";
 comments[3] = "Id Pregunta: 235. XPG";


//  Id pregunta: 329 AÃ±o de creación de pregunta: 2009-01-01
 questions[4]= "5)  Las medidas de seguridad b&aacute;sicas para datos automatizados de car&aacute;cter personal:";
 choices[4]= new Array();
 choices[4][0] = "Requieren la existencia de registros de los accesos a los ficheros o tablas que contienen la informaci&oacute;n.";
 choices[4][1] = "La responsabilidad de los registros de acceso est&aacute; bajo control del Responsable de seguridad y existen mecanismos de control para verificar que el registro est&aacute; activo y que no haya saltos temporales.";
 choices[4][2] = "No se utilizan cuentas gen&eacute;ricas para entrar al sistema.";
 choices[4][3] = "Utiliza t&eacute;cnicas de encriptaci&oacute;n en las comunicaciones de datos";
 answers[4] = choices[4][2];
 units[4] = "29";
 comments[4] = "Id Pregunta: 329. NULL";


//  Id pregunta: 375 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Los par&aacute;metros de seguridad de la informaci&oacute;n pueden resumirse en:";
 choices[5]= new Array();
 choices[5][0] = "Disponibilidad, integridad, confidencialidad";
 choices[5][1] = "Integridad, autenticaci&oacute;n, confidencialidad";
 choices[5][2] = "Disponibilidad, confidencialidad, autenticaci&oacute;n";
 choices[5][3] = "Autenticaci&oacute;n, disponibilidad, integridad";
 answers[5] = choices[5][0];
 units[5] = "31,32,33";
 comments[5] = "Id Pregunta: 375. ";


//  Id pregunta: 420 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Se entiende por integridad de la informaci&oacute;n:";
 choices[6]= new Array();
 choices[6][0] = "La informaci&oacute;n utilizada ser&aacute; la &uacute;ltima, exacta, autorizada y completa";
 choices[6][1] = "Que cada persona acceder&aacute; &uacute;nicamente a la que le corresponda";
 choices[6][2] = "El sistema estar&aacute; operativo en todo momento";
 choices[6][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;c&rsquo; son correctas";
 answers[6] = choices[6][0];
 units[6] = "33";
 comments[6] = "Id Pregunta: 420. ";


//  Id pregunta: 465 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Un activo es, de acuerdo a MAGERIT:";
 choices[7]= new Array();
 choices[7][0] = "Da&ntilde;o producido a una organizaci&oacute;n por un posible incidente";
 choices[7][1] = "Resultado de una agresi&oacute;n";
 choices[7][2] = "Evento que desencadena un incidente";
 choices[7][3] = "Ninguno de los anteriores";
 answers[7] = choices[7][3];
 units[7] = "31, 32, 33";
 comments[7] = "Id Pregunta: 465. ";


//  Id pregunta: 621 AÃ±o de creación de pregunta: 2006-01-01
 questions[8]= "9)  Los criterios comunes (criterios de evaluaci&oacute;n unificados para la seguridad de los productos IT) se corresponden con la norma:";
 choices[8]= new Array();
 choices[8][0] = "ISO 15408";
 choices[8][1] = "ANSI 14508";
 choices[8][2] = "CEN 15408";
 choices[8][3] = "IEEE 14508";
 answers[8] = choices[8][0];
 units[8] = "33";
 comments[8] = "Id Pregunta: 621. ";


//  Id pregunta: 1113 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  En la Unidad Central de Proceso (CPU):";
 choices[9]= new Array();
 choices[9][0] = "La unidad Aritm&eacute;tico-L&oacute;gica se compone de uno o varios operadores, un banco de registros y un dispositivo secuenciador";
 choices[9][1] = "La Unidad de Control tiene como misi&oacute;n la supervisi&oacute;n y ordenaci&oacute;n de todo el sistema de elementos que componen la CPU y su relaci&oacute;n con la memoria interna";
 choices[9][2] = "En el esquema dise&ntilde;ado por Charles Babbage en su modelo de ordenador, se considera a la Memoria Central como un elemento externo a la CPU";
 choices[9][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[9] = choices[9][1];
 units[9] = "47";
 comments[9] = "Id Pregunta: 1113. NULL";


//  Id pregunta: 1334 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Se puede decir que una base de datos es:";
 choices[10]= new Array();
 choices[10][0] = "Un elemento f&iacute;sico (hardware)";
 choices[10][1] = "Un dispositivo de almacenamiento";
 choices[10][2] = "Un conjunto de datos interrelacionados";
 choices[10][3] = "Una colecci&oacute;n de ficheros independientes entre s&iacute;";
 answers[10] = choices[10][2];
 units[10] = "57";
 comments[10] = "Id Pregunta: 1334. ";


//  Id pregunta: 1372 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Sobre el uso que hacen XML y HTML de etiquetas y atributos:";
 choices[11]= new Array();
 choices[11][0] = "HTML y XML especifican lo que significa cada etiqueta y atributo";
 choices[11][1] = "XML usa las etiquetas s&oacute;lo para delimitar segmentos de datos y deja la interpretaci&oacute;n de los datos a la aplicaci&oacute;n que los lee";
 choices[11][2] = "Ninguna de las respuestas anteriores es correcta";
 choices[11][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son correctas";
 answers[11] = choices[11][1];
 units[11] = "69";
 comments[11] = "Id Pregunta: 1372. NULL";


//  Id pregunta: 1415 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Una de las siguientes caracter&iacute;sticas no es com&uacute;n a los discos WORM y WMRA:";
 choices[12]= new Array();
 choices[12][0] = "Poseen una gran capacidad de almacenamiento";
 choices[12][1] = "Son de f&aacute;cil manipulaci&oacute;n y transportabilidad";
 choices[12][2] = "Permiten escribir y borrar datos al igual que un disco magn&eacute;tico";
 choices[12][3] = "Son insensibles frente a las radiaciones electromagn&eacute;ticas";
 answers[12] = choices[12][2];
 units[12] = "48";
 comments[12] = "Id Pregunta: 1415. ";


//  Id pregunta: 1604 AÃ±o de creación de pregunta: 2003-01-01
 questions[13]= "14)  Entre los algoritmos que puede utilizar SSL se encuentran:";
 choices[13]= new Array();
 choices[13][0] = "TripleDES, RC4 y SHA-1";
 choices[13][1] = "DES, RC2 y MD5";
 choices[13][2] = "Adem&aacute;s de los anteriores puede usar SKIPJACK y RSA";
 choices[13][3] = "Puede usar todos los anteriores e incluso no usar algoritmo de encriptaci&oacute;n, pero s&iacute; de autenticaci&oacute;n con SHA-1 o MD5 ";
 answers[13] = choices[13][3];
 units[13] = "72";
 comments[13] = "Id Pregunta: 1604. ";


//  Id pregunta: 1631 AÃ±o de creación de pregunta: 2003-01-01
 questions[14]= "15)  Un debugger (depurador) de programas :";
 choices[14]= new Array();
 choices[14][0] = "Ensambla los distintos m&oacute;dulos de SW";
 choices[14][1] = "Ayuda a los programadores a localizar errores de programaci&oacute;n";
 choices[14][2] = "Escanea los archivos ejecutables para detectar virus";
 choices[14][3] = "Permite crear un CPU virtual donde ejercer las pruebas de Sw minimizando la penalizaci&oacute;n de rendimientos en la instalaci&oacute;n principal";
 answers[14] = choices[14][1];
 units[14] = "59";
 comments[14] = "Id Pregunta: 1631. ";


//  Id pregunta: 1642 AÃ±o de creación de pregunta: 2004-01-01
 questions[15]= "16)  &iquest;Cu&aacute;l de estas acciones se permite ejecutar en Java a un applet no firmado descargado de Internet?";
 choices[15]= new Array();
 choices[15][0] = "Leer ficheros locales";
 choices[15][1] = "Cargar librer&iacute;as nativas";
 choices[15][2] = "Conectarse a la m&aacute;quina desde la que se descarg&oacute;";
 choices[15][3] = "Llamar a m&eacute;todos privados de otoas applets de la misma p&aacute;gina";
 answers[15] = choices[15][2];
 units[15] = "60";
 comments[15] = "Id Pregunta: 1642. NULL";


//  Id pregunta: 1693 AÃ±o de creación de pregunta: 2006-01-01
 questions[16]= "17)  Para definir un sistema SIMD se podr&iacute;a decir que &hellip;:";
 choices[16]= new Array();
 choices[16][0] = "Una instrucci&oacute;n no puede actuar sobre alguno de los elementos de procesamiento.";
 choices[16][1] = "Una instrucci&oacute;n act&uacute;a sobre un elemento de procesamiento.";
 choices[16][2] = "Una instrucci&oacute;n act&uacute;a sobre uno o varios elementos de procesamiento.";
 choices[16][3] = "Ninguna de las anteriores.";
 answers[16] = choices[16][2];
 units[16] = "45";
 comments[16] = "Id Pregunta: 1693. ";


//  Id pregunta: 1725 AÃ±o de creación de pregunta: 2006-01-01
 questions[17]= "18)  Respecto a la pol&iacute;tica de planificaci&oacute;n de procesos de turno rotatorio o &quot;Round Robin&quot;, es FALSO afirmar que";
 choices[17]= new Array();
 choices[17][0] = "Penaliza a los procesos cortos";
 choices[17][1] = "La penalizaci&oacute;n a los procesos intensivos en E/S puede resolverse con una cola prioritaria para los procesos que salieron de ejecuci&oacute;n por E/S";
 choices[17][2] = "Cada proceso recibe una fracci&oacute;n de tiempo antes de ser expulsado";
 choices[17][3] = "La selecci&oacute;n del siguiente proceso se realiza seg&uacute;n la pol&iacute;tica FCFS (First come, First served)";
 answers[17] = choices[17][0];
 units[17] = "52";
 comments[17] = "Id Pregunta: 1725. ";


//  Id pregunta: 1909 AÃ±o de creación de pregunta: 2006-01-01
 questions[18]= "19)  Acerca de los sistemas MPP puede afirmarse:";
 choices[18]= new Array();
 choices[18][0] = "Constituyen una categor&iacute;a de los sistemas MISD donde se incluyen los arrays sist&oacute;licos.";
 choices[18][1] = "Constituyen una categor&iacute;a de los sistemas MIMD con una &uacute;nica memoria compartida.";
 choices[18][2] = "A su vez se dividen en sistemas de gesti&oacute;n UMA y sistemas de gesti&oacute;n NUMA.";
 choices[18][3] = "Categor&iacute;a de los sistemas MIMD con memoria distribuida.";
 answers[18] = choices[18][3];
 units[18] = "45";
 comments[18] = "Id Pregunta: 1909. ";


//  Id pregunta: 1946 AÃ±o de creación de pregunta: 2006-01-01
 questions[19]= "20)  Sean en una comunicaci&oacute;n: m=mensaje a transmitir; y=h(m) el c&oacute;digo hash del mensaje m calculado en origen; m&rsquo;=mensaje recibido; y&rsquo;=h(m&acute;) el c&oacute;digo hash del mensaje m&acute; recibido, calculado en destino. Se&ntilde;alar cual de las siguientes afirmaciones es cierta:";
 choices[19]= new Array();
 choices[19][0] = "Si y = y&acute; entonces se puede afirmar que la integridad de m est&aacute; garantizada en m&acute;";
 choices[19][1] = "Si y != y&acute; entonces se puede afirmar que la clave privada ha sido alterada";
 choices[19][2] = "Si m = m&acute; entonces se puede afirmar que la confidencialidad de y est&aacute; garantizada en y&acute;";
 choices[19][3] = "Si y = y&acute; entonces se puede afirmar que la confidencialidad de m est&aacute; garantizada en m&acute;";
 answers[19] = choices[19][0];
 units[19] = "72";
 comments[19] = "Id Pregunta: 1946. ";


//  Id pregunta: 2155 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  &iquest;Cu&aacute;l de los siguientes no es un objetivo del plan de contingencias?";
 choices[20]= new Array();
 choices[20][0] = "Minimizar las interrupciones en la operaci&oacute;n normal";
 choices[20][1] = "Limitar la extensi&oacute;n de las interrupciones y de los da&ntilde;os que produzcan";
 choices[20][2] = "Analizar da&ntilde;os y estimar costes";
 choices[20][3] = "Posibilitar la vuelta al servicio r&aacute;pida y sencilla";
 answers[20] = choices[20][2];
 units[20] = "86";
 comments[20] = "Id Pregunta: 2155. NULL";


//  Id pregunta: 2242 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Cuando en la etapa de mantenimiento de un sistema se realizan modificaciones para mejorar las funcionalidades del sistema o ampliar las mismas, se trata de un mantenimiento:";
 choices[21]= new Array();
 choices[21][0] = "Correctivo";
 choices[21][1] = "Perfectivo";
 choices[21][2] = "Evolutivo";
 choices[21][3] = "Adaptativo";
 answers[21] = choices[21][2];
 units[21] = "86";
 comments[21] = "Id Pregunta: 2242. NULL";


//  Id pregunta: 2347 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  En relaci&oacute;n con la t&eacute;cnica del prototipado, &iquest;qu&eacute; es falso?:";
 choices[22]= new Array();
 choices[22][0] = "Se facilita la comunicaci&oacute;n con el usuario";
 choices[22][1] = "Permite que el proceso de aprendizaje sea m&aacute;s r&aacute;pido";
 choices[22][2] = "Facilita el trabajo con especificaciones incompletas";
 choices[22][3] = "Aumenta los costes de implementaci&oacute;n";
 answers[22] = choices[22][3];
 units[22] = "85";
 comments[22] = "Id Pregunta: 2347. ";


//  Id pregunta: 2531 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  En sistemas de recuperaci&oacute;n de la informaci&oacute;n, al cociente entre el n&uacute;mero de referencias correctas obtenidas y el n&uacute;mero total de documentos recuperados, se denomina:";
 choices[23]= new Array();
 choices[23][0] = "&Iacute;ndice de retorno";
 choices[23][1] = "&Iacute;ndice de exactitud";
 choices[23][2] = "&Iacute;ndice de precisi&oacute;n";
 choices[23][3] = "&Iacute;ndice de localizaci&oacute;n";
 answers[23] = choices[23][2];
 units[23] = "96";
 comments[23] = "Id Pregunta: 2531. NULL";


//  Id pregunta: 2626 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  &iquest;En el Modelo Entidad Relaci&oacute;n, qu&eacute; es el tipo de correspondencia?";
 choices[24]= new Array();
 choices[24][0] = "Es el n&uacute;mero de entidades que participan en una asociaci&oacute;n.";
 choices[24][1] = "Representa el tipo de entidades que participan en una asociaci&oacute;n";
 choices[24][2] = "Es el n&uacute;mero m&iacute;nimo y m&aacute;ximo de ocurrencias de una entidad que pueden estar asociadas con una ocurrencia de otra u otras entidades participantes en la asociaci&oacute;n.";
 choices[24][3] = "Es el n&uacute;mero m&aacute;ximo de ocurrencias de cada entidad conectada que pueden intervenir en una ocurrencia de la asociaci&oacute;n.";
 answers[24] = choices[24][3];
 units[24] = "80";
 comments[24] = "Id Pregunta: 2626. ";


//  Id pregunta: 2630 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  &iquest;Qu&eacute; contendr&aacute; el diagrama de contexto en un DFD?";
 choices[25]= new Array();
 choices[25][0] = "Entidades Extermas, Procesos, Flujos de Datos";
 choices[25][1] = "Almacenes de Datos, Prodesos, Entidades Extrenas.";
 choices[25][2] = "Entidades Externas, Un solo Proceso, Flujos de Datos.";
 choices[25][3] = "Entidades Extermas, Procesos, Flujos de Datos, Almacenes de Datos";
 answers[25] = choices[25][2];
 units[25] = "81";
 comments[25] = "Id Pregunta: 2630. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 2762 AÃ±o de creación de pregunta: 2006-01-01
 questions[26]= "27)  La base para el an&aacute;lisis de un sistema de tiempo real pasa por:";
 choices[26]= new Array();
 choices[26][0] = "La teor&iacute;a de los sistemas lineales.";
 choices[26][1] = "La especificaci&oacute;n de las pruebas de caja blanca.";
 choices[26][2] = "La sincronizaci&oacute;n.";
 choices[26][3] = "Ninguna de las anteriores.";
 answers[26] = choices[26][0];
 units[26] = "83";
 comments[26] = "Id Pregunta: 2762. NULL";


//  Id pregunta: 2867 AÃ±o de creación de pregunta: 2006-01-01
 questions[27]= "28)  &iquest;Qu&eacute; t&eacute;cnica de recuperaci&oacute;n asigna importancia relativa a los t&eacute;rminos de la consulta, grados de indexaci&oacute;n a los t&eacute;rminos de cada documento, y puede modificar el rigor de los operadores &quot;&quot;0&quot;&quot; e &quot;&quot;Y&quot;&quot;, mediante los valores de una variable?";
 choices[27]= new Array();
 choices[27][0] = "Norma-Gamma";
 choices[27][1] = "L&oacute;gica Borrosa";
 choices[27][2] = "&Iacute;ndices invertidos";
 choices[27][3] = "Recuperaci&oacute;n autom&aacute;tica vectorial";
 answers[27] = choices[27][0];
 units[27] = "96";
 comments[27] = "Id Pregunta: 2867. NULL";


//  Id pregunta: 2887 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  El sistema EURODAC de TESTA II intercambia informaci&oacute;n entre las Administraciones P&uacute;blicas europeas referentes a:";
 choices[28]= new Array();
 choices[28][0] = "inmigraci&oacute;n";
 choices[28][1] = "accidentes de tr&aacute;fico";
 choices[28][2] = "ofertas de empleo";
 choices[28][3] = "fondos estructurales";
 answers[28] = choices[28][0];
 units[28] = "103";
 comments[28] = "Id Pregunta: 2887. ";


//  Id pregunta: 3004 AÃ±o de creación de pregunta: 2004-01-01
 questions[29]= "30)  Una de las caracter&iacute;sticas b&aacute;sicas de ATM (Modelo de transferencia as&iacute;ncrono) es:";
 choices[29]= new Array();
 choices[29][0] = "Utiliza un formato de celda de longitud fija";
 choices[29][1] = "El tama&ntilde;o de la celda se negocia en el nivel de enlace";
 choices[29][2] = "El tama&ntilde;o de la celda se negocia a trav&eacute;s de red";
 choices[29][3] = "El tama&ntilde;o de la celda se negocia a trav&eacute;s de transorte";
 answers[29] = choices[29][0];
 units[29] = "109";
 comments[29] = "Id Pregunta: 3004. ";


//  Id pregunta: 3149 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto al modelo OSI de ISO?";
 choices[30]= new Array();
 choices[30][0] = "El modelo no especifica relaci&oacute;n de ning&uacute;n tipo ni con lenguajes de programaci&oacute;n ni con sistemas operativos";
 choices[30][1] = "El modelo no contempla aspectos relativos a los interfaces de la aplicaci&oacute;n ni a los usuarios";
 choices[30][2] = "El modelo describe el comportamiento externo y la estructura interna de los sistemas ";
 choices[30][3] = "Todas las respuestas anteriores son falsas";
 answers[30] = choices[30][2];
 units[30] = "100";
 comments[30] = "Id Pregunta: 3149. NULL";


//  Id pregunta: 3202 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  El acr&oacute;nimo FCAPS en gesti&oacute;n de redes se refiere a:";
 choices[31]= new Array();
 choices[31][0] = "Failure, Configuration, Accountability, Performance, Security, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, configuraci&oacute;n, contabilidad, rendimiento y seguridad";
 choices[31][1] = "Failure, Configuration, Accountability, Performance, Software, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, configuraci&oacute;n, contabilidad, rendimiento y software de red";
 choices[31][2] = "Failure, Compatibility, Accountability, Performance, Security, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, compatibilidad, contabilidad, rendimiento y seguridad";
 choices[31][3] = "Failure, Configuration, Adaptability, Performance, Security, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, configuraci&oacute;n, adaptabilidad, rendimiento y seguridad";
 answers[31] = choices[31][0];
 units[31] = "104";
 comments[31] = "Id Pregunta: 3202. ";


//  Id pregunta: 3209 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  El concepto y primer desarrollo del servicio WWW se debe a:";
 choices[32]= new Array();
 choices[32][0] = "Vinton Cerf";
 choices[32][1] = "Leonard Kleinrock";
 choices[32][2] = "Robert Kahn";
 choices[32][3] = "Tim Berners-Lee";
 answers[32] = choices[32][3];
 units[32] = "112";
 comments[32] = "Id Pregunta: 3209. ";


//  Id pregunta: 3247 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  &iquest;Cu&aacute;l es la velocidad del canal D en un acceso b&aacute;sico RDSI en Europa?:";
 choices[33]= new Array();
 choices[33][0] = "8 Kbps";
 choices[33][1] = "16 Kbps";
 choices[33][2] = "32 Kbps";
 choices[33][3] = "64 Kbps";
 answers[33] = choices[33][1];
 units[33] = "103";
 comments[33] = "Id Pregunta: 3247. ";


//  Id pregunta: 3364 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  Dentro de la familia de protocolos TCP/IP, el protocolo RARP se emplea para:";
 choices[34]= new Array();
 choices[34][0] = "Establecer un protocolo de rearranque remoto que activa el demonio BOOTP";
 choices[34][1] = "Obtener la direcci&oacute;n Ethernet (48 bits) a partir de la direcci&oacute;n IP (32 bits)";
 choices[34][2] = "Obtener la direcci&oacute;n IP (32 bits) a partir de la direcci&oacute;n Ethernet (48 bits)";
 choices[34][3] = "Manejar la tabla de direcciones IP en el socket 250 de UDP";
 answers[34] = choices[34][2];
 units[34] = "100";
 comments[34] = "Id Pregunta: 3364. NULL";


//  Id pregunta: 3440 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  El protocolo ARP es:";
 choices[35]= new Array();
 choices[35][0] = "Automatic Resolution Protocol, Protocolo de resoluci&oacute;n autom&aacute;tica";
 choices[35][1] = "Adress Reservation Protocol, protocolo de reserva de direcciones";
 choices[35][2] = "Address Resolution Protocol, protocolo de resoluci&oacute;n de direcciones";
 choices[35][3] = "Automatic Response Protocol, protocolo de respuesta autom&aacute;tica";
 answers[35] = choices[35][2];
 units[35] = "102";
 comments[35] = "Id Pregunta: 3440. ";


//  Id pregunta: 3448 AÃ±o de creación de pregunta: 2002-01-01
 questions[36]= "37)  El protocolo del stack TCP/IP que define el acceso interactivo a un ordenador remoto es:";
 choices[36]= new Array();
 choices[36][0] = "FTP";
 choices[36][1] = "WAIS";
 choices[36][2] = "Telnet";
 choices[36][3] = "Mail";
 answers[36] = choices[36][2];
 units[36] = "100";
 comments[36] = "Id Pregunta: 3448. NULL";


//  Id pregunta: 3546 AÃ±o de creación de pregunta: 2002-01-01
 questions[37]= "38)  En notaci&oacute;n Kendall A/B/X/Y/Z: ";
 choices[37]= new Array();
 choices[37][0] = "X especifica el n&uacute;mero de servidores.";
 choices[37][1] = "Y especifica la capacidad del sistema.";
 choices[37][2] = "Ninguna de las anteriores es v&aacute;lida.";
 choices[37][3] = "Las respuestas 'a' y 'b' son ciertas.";
 answers[37] = choices[37][3];
 units[37] = "";
 comments[37] = "Id Pregunta: 3546. Kendall T&ordm; Colas";


//  Id pregunta: 3668 AÃ±o de creación de pregunta: 2002-01-01
 questions[38]= "39)  Una centralita telef&oacute;nica digital privada para RDSI, o un &ldquo;bridge&rdquo; &oacute; &ldquo;router&rdquo; de red de &aacute;rea local con puerto RDSI es un dispositivo:";
 choices[38]= new Array();
 choices[38][0] = "ET1";
 choices[38][1] = "ET2";
 choices[38][2] = "TR2";
 choices[38][3] = "AT";
 answers[38] = choices[38][2];
 units[38] = "103";
 comments[38] = "Id Pregunta: 3668. ";


//  Id pregunta: 3934 AÃ±o de creación de pregunta: 2003-01-01
 questions[39]= "40)  &iquest;En que nivel del modelo OSI se realiza el cifrado?";
 choices[39]= new Array();
 choices[39][0] = "1";
 choices[39][1] = "5";
 choices[39][2] = "7";
 choices[39][3] = "6";
 answers[39] = choices[39][3];
 units[39] = "72";
 comments[39] = "Id Pregunta: 3934. NULL";


//  Id pregunta: 3961 AÃ±o de creación de pregunta: 2003-01-01
 questions[40]= "41)  Mediante qu&eacute; tecnolog&iacute;a se puede conectar un PC a sus perif&eacute;ricos de forma inal&aacute;mbrica";
 choices[40]= new Array();
 choices[40][0] = "IMODE";
 choices[40][1] = "OFDM";
 choices[40][2] = "BLUETOOTH";
 choices[40][3] = " WIFI";
 answers[40] = choices[40][2];
 units[40] = "100";
 comments[40] = "Id Pregunta: 3961. ";


//  Id pregunta: 3973 AÃ±o de creación de pregunta: 2003-01-01
 questions[41]= "42)  Velocidades de RDSI de banda ancha en Europa";
 choices[41]= new Array();
 choices[41][0] = "1,5  2,6  155  622 Mbps";
 choices[41][1] = "2    51 155  722 Mbps";
 choices[41][2] = "2    34 155  622 Mbps";
 choices[41][3] = "2   34   155  722 Mbps";
 answers[41] = choices[41][2];
 units[41] = "103";
 comments[41] = "Id Pregunta: 3973. ";


//  Id pregunta: 3982 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  Se&ntilde;ale la respuesta falsa:";
 choices[42]= new Array();
 choices[42][0] = "ICMP es un protocolo de nivel 3.";
 choices[42][1] = "TCP es orientado a conexi&oacute;n y no confirmado.";
 choices[42][2] = "UDP es no orientado a conexi&oacute;n";
 choices[42][3] = "La cabecera de IPv4 tiene un campo de offset de 1.5 bytes.";
 answers[42] = choices[42][1];
 units[42] = "100";
 comments[42] = "Id Pregunta: 3982. ";


//  Id pregunta: 4044 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l es el l&iacute;mite m&aacute;ximo de la multa que se puede imponer por la comisi&oacute;n de una infracci&oacute;n leve seg&uacute;n la Ley 32/2003 de Telecomunicaciones?";
 choices[43]= new Array();
 choices[43][0] = "50.000 euros";
 choices[43][1] = "30.000 euros";
 choices[43][2] = "500.000 euros";
 choices[43][3] = "60.000 euros";
 answers[43] = choices[43][0];
 units[43] = "110";
 comments[43] = "Id Pregunta: 4044. ";


//  Id pregunta: 4089 AÃ±o de creación de pregunta: 2006-01-01
 questions[44]= "45)  Cuando hablamos de tecnolog&iacute;a .NET, los interfaces de servicios";
 choices[44]= new Array();
 choices[44][0] = "Se denominan tambi&eacute;n fachadas empresariales";
 choices[44][1] = "permiten exponer el acceso a los datos como un servicio";
 choices[44][2] = "Interaccionan directamente con el usuario";
 choices[44][3] = "Ninguna de las anteriores es correcta";
 answers[44] = choices[44][0];
 units[44] = "115";
 comments[44] = "Id Pregunta: 4089. ";


//  Id pregunta: 4238 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  La Agencia de Protecci&oacute;n de Datos se adscribe al Ministerio de";
 choices[45]= new Array();
 choices[45][0] = " Administraciones P&uacute;blicas";
 choices[45][1] = " Industria, Turismo y Comercio";
 choices[45][2] = " Justicia";
 choices[45][3] = "Ninguna es correcta";
 answers[45] = choices[45][3];
 units[45] = "29";
 comments[45] = "Id Pregunta: 4238. ";


//  Id pregunta: 4267 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  Indique cu&aacute;l de los siguientes algoritmos criptogr&aacute;ficos se basa en el logaritmo discreto el&iacute;ptico";
 choices[46]= new Array();
 choices[46][0] = "RSA";
 choices[46][1] = "RW";
 choices[46][2] = "Diffie-Hellman";
 choices[46][3] = "DSAE";
 answers[46] = choices[46][3];
 units[46] = "73";
 comments[46] = "Id Pregunta: 4267. ";


//  Id pregunta: 4376 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  En el an&aacute;lisis de sistemas, el m&eacute;todo de Abbott:";
 choices[47]= new Array();
 choices[47][0] = "Consiste en descomponer el problema utilizando los primeros niveles del refinamiento.";
 choices[47][1] = "Construye una estructura similar a la de los datos de entrada-salida.";
 choices[47][2] = "Identifica un flujo global desde los elementos de entrada a los de salida.";
 choices[47][3] = "Sistematiza la forma de reconocer las abstracciones.";
 answers[47] = choices[47][3];
 units[47] = "80";
 comments[47] = "Id Pregunta: 4376. ";


//  Id pregunta: 4652 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  Los identificadores VPI/VCI tienen significado";
 choices[48]= new Array();
 choices[48][0] = "global para toda la red";
 choices[48][1] = "para cada conexi&oacute;n";
 choices[48][2] = "para cada enlace";
 choices[48][3] = "solo entre el terminal y el switch ATM";
 answers[48] = choices[48][2];
 units[48] = "";
 comments[48] = "Id Pregunta: 4652. ";


//  Id pregunta: 4946 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  De los siguientes tipos de pruebas relacionados a continuaci&oacute;n, indique, seg&uacute;n M&eacute;trica v.3, aquel tipo de pruebas que cronol&oacute;gicamente se realiza en &uacute;ltimo lugar:";
 choices[49]= new Array();
 choices[49][0] = "Pruebas de integraci&oacute;n.";
 choices[49][1] = "Pruebas unitarias.";
 choices[49][2] = "Pruebas de implantaci&oacute;n.";
 choices[49][3] = "Pruebas de aceptaci&oacute;n.";
 answers[49] = choices[49][3];
 units[49] = "86";
 comments[49] = "Id Pregunta: 4946. Examen TIC B 2007";


//  Id pregunta: 4995 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes NO es uno de los principios incluidos en el Manifiesto de Desarrollo &Aacute;gil de Software (Manifesto for Agile Software Development)?:";
 choices[50]= new Array();
 choices[50][0] = "Aceptamos requisitos cambiantes s&oacute;lo en las primeras etapas del desarrollo.";
 choices[50][1] = "Los procesos &aacute;giles promueven el desarrollo sostenido.";
 choices[50][2] = "Entregamos software frecuentemente, con una periodicidad desde un par de semanas a un par de meses,con preferencia por los periodos m&aacute;s cortos posibles.";
 choices[50][3] = "Los responsables de negocio y los desarrolladores deben trabajar juntos diariamente a lo largo del proyecto.";
 answers[50] = choices[50][0];
 units[50] = "76";
 comments[50] = "Id Pregunta: 4995. Examen TIC A 2007";


//  Id pregunta: 5013 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l de los siguientes elementos NO interviene en el c&aacute;lculo de los puntos de funci&oacute;n?:";
 choices[51]= new Array();
 choices[51][0] = "Entradas";
 choices[51][1] = "Salidas";
 choices[51][2] = "Consultas";
 choices[51][3] = "Usuarios";
 answers[51] = choices[51][3];
 units[51] = "89";
 comments[51] = "Id Pregunta: 5013. Examen TIC A 2007, preparatic XVII";


//  Id pregunta: 5067 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  &iquest;En cu&aacute;l de las siguientes zonas del chip del DNIe se almacenan los datos biom&eacute;tricos?:";
 choices[52]= new Array();
 choices[52][0] = "Zona p&uacute;blica";
 choices[52][1] = "Zona privada";
 choices[52][2] = "Zona de seguridad";
 choices[52][3] = "Zona compartida";
 answers[52] = choices[52][2];
 units[52] = "30";
 comments[52] = "Id Pregunta: 5067. Examen TIC A 2007";


//  Id pregunta: 5514 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  Indique c&oacute;mo podr&iacute;a interconectar dos ordenadores personales seg&uacute;n la tecnolog&iacute;a ethernet:";
 choices[53]= new Array();
 choices[53][0] = "Mediante un cable cruzado";
 choices[53][1] = "Mediante un cable sin cruzar o cable plano";
 choices[53][2] = "Mediante un dado de interconexi&oacute;n";
 choices[53][3] = "Mediante cualquiera de las tres opciones indicadas ";
 answers[53] = choices[53][0];
 units[53] = "99";
 comments[53] = "Id Pregunta: 5514. ";


//  Id pregunta: 5630 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  Una soluci&oacute;n basada en Grid Computing ser&iacute;a adecuada para:";
 choices[54]= new Array();
 choices[54][0] = "Obtener rendimientos de pico";
 choices[54][1] = "Aplicaciones multiproceso";
 choices[54][2] = "Entornos de trabajo con productividad sostenida";
 choices[54][3] = "Ninguna de las anteriores";
 answers[54] = choices[54][2];
 units[54] = "45";
 comments[54] = "Id Pregunta: 5630. ";


//  Id pregunta: 5660 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  Seg&uacute;n el RD 1720/2007, &iquest;en que casos se necesita la autorizaci&oacute;n del responsable del fichero para la ejecucion de los procedimientos de recuperaci&oacute;n de los datos?";
 choices[55]= new Array();
 choices[55][0] = "nivel b&aacute;sico";
 choices[55][1] = "nivel medio";
 choices[55][2] = "nivel alto";
 choices[55][3] = "En ningun caso";
 answers[55] = choices[55][1];
 units[55] = "29";
 comments[55] = "Id Pregunta: 5660. ";


//  Id pregunta: 5689 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  &iquest;Es capaz el DNI electr&oacute;nico de identificar biom&eacute;tricamente al ciudadano?";
 choices[56]= new Array();
 choices[56][0] = "S&iacute;, a trav&eacute;s del iris ocular";
 choices[56][1] = "S&iacute;, a trav&eacute;s de la firma manuscrita";
 choices[56][2] = "No, no dispone de esa capacidad";
 choices[56][3] = "S&iacute;, a trav&eacute;s de la huella dactilar";
 answers[56] = choices[56][3];
 units[56] = "74";
 comments[56] = "Id Pregunta: 5689. NULL";


//  Id pregunta: 5721 AÃ±o de creación de pregunta: 2009-01-01
 questions[57]= "58)  El XSLT transforma:";
 choices[57]= new Array();
 choices[57][0] = "S&oacute;lo de XML a XML";
 choices[57][1] = "De XML a otro documento";
 choices[57][2] = "S&oacute;lo de XML a HTML";
 choices[57][3] = "De un documento a XML";
 answers[57] = choices[57][1];
 units[57] = "69";
 comments[57] = "Id Pregunta: 5721. MAP 2008 A1";


//  Id pregunta: 5770 AÃ±o de creación de pregunta: 2009-01-01
 questions[58]= "59)  El Titulo III de la LOPD se refiere a los &ldquo;derechos de las personas&rdquo;, sin embargo en el TITULO II se recoge otro derecho relacionado con los Principios de la Protecci&oacute;n de datos que es:";
 choices[58]= new Array();
 choices[58][0] = "Oposici&oacute;n";
 choices[58][1] = "Cancelaci&oacute;n";
 choices[58][2] = "Revisi&oacute;n";
 choices[58][3] = "Informaci&oacute;n";
 answers[58] = choices[58][3];
 units[58] = "29";
 comments[58] = "Id Pregunta: 5770. ";


//  Id pregunta: 5910 AÃ±o de creación de pregunta: 2009-01-01
 questions[59]= "60)  &iquest;Qu&eacute; NO garantiza el Servicio Universal contemplado por la Ley 9/2014, General de Telecomunicaciones?";
 choices[59]= new Array();
 choices[59][0] = "El ciudadano podr&aacute; elegir, para la prestaci&oacute;n de este servicio, a cualquiera de los operadores registrados a nivel nacional";
 choices[59][1] = "Todos los usuarios finales podr&aacute;n obtener una conexi&oacute;n a la red telef&oacute;nica p&uacute;blica desde una ubicaci&oacute;n fija y acceder a la prestaci&oacute;n del servicio telef&oacute;nico disponible al p&uacute;blico";
 choices[59][2] = "Que se ponga a disposici&oacute;n de los abonados al servicio telef&oacute;nico disponible al p&uacute;blico una gu&iacute;a general de n&uacute;meros de abonados, ya sea impresa o electr&oacute;nica";
 choices[59][3] = "Que exista una oferta suficiente de tel&eacute;fonos p&uacute;blicos de pago, en todo el territorio nacional, que satisfaga razonablemente las necesidades de los usuarios finales.";
 answers[59] = choices[59][0];
 units[59] = "110";
 comments[59] = "Id Pregunta: 5910. MAP 2008 A1";


//  Id pregunta: 5946 AÃ±o de creación de pregunta: 2009-01-01
 questions[60]= "61)  &iquest;qu&eacute; est&aacute;ndar define usuabilidad como &ldquo;La efectividad, eficiencia y satisfacci&oacute;n con la que un producto permite alcanzar objetivos espec&iacute;ficos a usuarios espec&iacute;ficos en un contexto de uso espec&iacute;fico&rdquo;?";
 choices[60]= new Array();
 choices[60][0] = "ISO/IEC 9241-5";
 choices[60][1] = "ISO/IEC 9241-11";
 choices[60][2] = "ISO/IEC 9243-5";
 choices[60][3] = "ISO/IEC 9243-11";
 answers[60] = choices[60][1];
 units[60] = "39";
 comments[60] = "Id Pregunta: 5946. ";


//  Id pregunta: 6120 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  &iquest;Puede la Agencia de Protecci&oacute;n de Datos, en el ejercicio de sus competencias, inspeccionar un fichero de titularidad p&uacute;blica de un Ministerio, examinando adem&aacute;s el equipo o equipos f&iacute;sicos en el que se halle el fichero?";
 choices[61]= new Array();
 choices[61][0] = "No, porque carece de competencias sobre ficheros de titularidad p&uacute;blica, y s&oacute;lo puede inspeccionar los de titularidad privada.";
 choices[61][1] = "No, porque los Ministerios son autoridades p&uacute;blicas y solo pueden ser inspeccionados por la Inspecci&oacute;n General de Servicios del Ministerio de la Presidencia. ";
 choices[61][2] = "S&iacute;, puede hacer la inspecci&oacute;n, pero s&oacute;lo si lo solicita el Ministerio correspondiente, no siendo admisible una inspecci&oacute;n de oficio.";
 choices[61][3] = "S&iacute;, puede hacer la inspecci&oacute;n conforme a sus competencias.";
 answers[61] = choices[61][3];
 units[61] = "29";
 comments[61] = "Id Pregunta: 6120. TIC A 2009";


//  Id pregunta: 6185 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  Indique, cual de entre los siguientes elementos de un sistema de correo X.400 se corresponde con un servidor de correo:";
 choices[62]= new Array();
 choices[62][0] = "UA.";
 choices[62][1] = "MTA.";
 choices[62][2] = "GW.";
 choices[62][3] = "MS.";
 answers[62] = choices[62][1];
 units[62] = "106";
 comments[62] = "Id Pregunta: 6185. ";


//  Id pregunta: 6241 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  De acuerdo a la terminolog&iacute;a adoptada por el IEEE, la transformaci&oacute;n de una forma de representaci&oacute;n del sistema en otra distinta, pero del mismo nivel de abstracci&oacute;n, sin modificar el comportamiento externo del sistema, es la definici&oacute;n de:";
 choices[63]= new Array();
 choices[63][0] = "Ingenier&iacute;a hacia delante.";
 choices[63][1] = "Reestructuraci&oacute;n.";
 choices[63][2] = "Reingenier&iacute;a.";
 choices[63][3] = "Ingenier&iacute;a inversa.";
 answers[63] = choices[63][1];
 units[63] = "91";
 comments[63] = "Id Pregunta: 6241. TIC B-2009, bloque desarrollo";


//  Id pregunta: 6256 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  Seg&uacute;n la metodolog&iacute;a M&eacute;trica v3, la especificaci&oacute;n de los requisitos de implantaci&oacute;n se realiza en:";
 choices[64]= new Array();
 choices[64][0] = "An&aacute;lisis de Sistema de Informaci&oacute;n";
 choices[64][1] = "Dise&ntilde;o de Sistema de Informaci&oacute;n";
 choices[64][2] = "Construcci&oacute;n del Sistema de Informaci&oacute;n";
 choices[64][3] = "Implantaci&oacute;n y Aceptaci&oacute;n del Sistema de Informaci&oacute;n";
 answers[64] = choices[64][1];
 units[64] = "86";
 comments[64] = "Id Pregunta: 6256. TICB-2009, bloque desarrollo";


//  Id pregunta: 6330 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes acciones no se puede considerar del modo de operar del Data Mining?";
 choices[65]= new Array();
 choices[65][0] = "Adivinar futuros comportamientos.";
 choices[65][1] = "Crear modelos.";
 choices[65][2] = "Analizar relaciones.";
 choices[65][3] = "Detectar desviaciones.";
 answers[65] = choices[65][0];
 units[65] = "68";
 comments[65] = "Id Pregunta: 6330. ";


//  Id pregunta: 6547 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  Qu&eacute; pol&iacute;tica de control aplica cuando la infraestructura usa un modelo no discrecional?";
 choices[66]= new Array();
 choices[66][0] = "Basado en reglas";
 choices[66][1] = "Basado en roles";
 choices[66][2] = "Basado en identidades";
 choices[66][3] = "MAC";
 answers[66] = choices[66][1];
 units[66] = "111";
 comments[66] = "Id Pregunta: 6547. NULL";


//  Id pregunta: 7158 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  Entre las funciones de un sistema operativo se encuentra la gesti&oacute;n de procesos. Seleccione cual de las siguientes afirmaciones es correcta:";
 choices[67]= new Array();
 choices[67][0] = "Cualquier proceso puede causar la terminaci&oacute;n de otro proceso realizando una llamada al sistema";
 choices[67][1] = "Si un proceso se encuentra en estado &quot;Terminado&quot; (o Finalizado) significa que se ha ejecutado en su totalidad";
 choices[67][2] = "Se dice que un proceso se encuentra en estado &quot;Zombi&quot; cuando est&aacute; esperando a que otro proceso termine de ejecutarse";
 choices[67][3] = "Cuando un nuevo usuario entra en el sistema se crea un nuevo proceso que quedar&aacute; en estado &quot;listo&quot; (preparado para se ejecutado)";
 answers[67] = choices[67][3];
 units[67] = "52";
 comments[67] = "Id Pregunta: 7158. Examen TIC B 2009";


//  Id pregunta: 7304 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  El est&aacute;ndar AURORA de reconocimiento del habla distribuido es un est&aacute;ndar de:";
 choices[68]= new Array();
 choices[68][0] = "ETSI";
 choices[68][1] = "IEEE";
 choices[68][2] = "NIST";
 choices[68][3] = "ANSI";
 answers[68] = choices[68][0];
 units[68] = "94";
 comments[68] = "Id Pregunta: 7304. NULL";


//  Id pregunta: 7895 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)   Seg&uacute;n la norma espa&ntilde;ola UNE 66-904, que recoge los costes totales de calidad, el &laquo;coste resultante de un bien o servicio que no cumple los requisitos de calidad, y cuyo fallo se pone de manifiesto antes de su entrega&raquo;, es un:";
 choices[69]= new Array();
 choices[69][0] = "Costes de prevenci&oacute;n";
 choices[69][1] = "Coste de fallos internos";
 choices[69][2] = "Coste de evaluaci&oacute;n";
 choices[69][3] = "Coste de fallos externos";
 answers[69] = choices[69][2];
 units[69] = "NULL";
 comments[69] = "Id Pregunta: 7895. Map 2006";


//  Id pregunta: 7962 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)   En el establecimiento de una comunicaci&oacute;n mediante SSL (Secure Sockets Layer), &iquest;cu&aacute;l es el protocolo que especifica la forma de encapsular los datos que se van a intercambiar?";
 choices[70]= new Array();
 choices[70][0] = " SSL Handshake.";
 choices[70][1] = " SSL Record.";
 choices[70][2] = " Cipher Secure Layer.";
 choices[70][3] = " Secure Stocker Layer.";
 answers[70] = choices[70][1];
 units[70] = "NULL";
 comments[70] = "Id Pregunta: 7962. Map 2006";


//  Id pregunta: 7964 AÃ±o de creación de pregunta: 2010-01-01
 questions[71]= "72)   De acuerdo con el modelo de arquitectura de seguridad de OSI, definido en la norma ISO/IEC 7498, indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[71]= new Array();
 choices[71][0] = " Un mecanismo de seguridad puede ser suministrado por varios servicios de seguridad.";
 choices[71][1] = " Cada servicio de seguridad debe ser suministrado por el mecanismo correspondiente.";
 choices[71][2] = " Todos los mecanismos de seguridad que se definen en el modelo se basan en algoritmos criptogr&aacute;ficos.";
 choices[71][3] = " Un mismo servicio de seguridad puede ser suministrado por varios mecanismos de seguridad.";
 answers[71] = choices[71][3];
 units[71] = "NULL";
 comments[71] = "Id Pregunta: 7964. Map 2007";


//  Id pregunta: 7973 AÃ±o de creación de pregunta: 2010-01-01
 questions[72]= "73)   El Consejo Superior de Administraci&oacute;n Electr&oacute;nica es un &oacute;rgano colegiado adscrito al Ministerio de:";
 choices[72]= new Array();
 choices[72][0] = " Industria, Turismo y Comercio.";
 choices[72][1] = " Asuntos Exteriores.";
 choices[72][2] = " Administraciones P&uacute;blicas.";
 choices[72][3] = " Interior.";
 answers[72] = choices[72][2];
 units[72] = "NULL";
 comments[72] = "Id Pregunta: 7973. Map 2007";


//  Id pregunta: 8017 AÃ±o de creación de pregunta: 2010-01-01
 questions[73]= "74)   Seg&uacute;n el est&aacute;ndar ISO 7816 sobre contactos del chip en las tarjetas inteligentes, &iquest;cu&aacute;l de los siguientes contactos se utiliza para la se&ntilde;al de reloj?";
 choices[73]= new Array();
 choices[73][0] = " C2.";
 choices[73][1] = " C3.";
 choices[73][2] = " C5.";
 choices[73][3] = " C6.";
 answers[73] = choices[73][1];
 units[73] = "NULL";
 comments[73] = "Id Pregunta: 8017. Map 2007";


//  Id pregunta: 8182 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  El diagrama de despliegue se utiliza en M&eacute;trica versi&oacute;n 3 en:";
 choices[74]= new Array();
 choices[74][0] = "El dise&ntilde;o de la arquitectura de m&oacute;dulos del sistema.";
 choices[74][1] = "El dise&ntilde;o f&iacute;sico de datos";
 choices[74][2] = "La generaci&oacute;n de especificaciones de construcci&oacute;n.";
 choices[74][3] = "El dise&ntilde;o del modelo de sistemas de informaci&oacute;n.";
 answers[74] = choices[74][2];
 units[74] = "86";
 comments[74] = "Id Pregunta: 8182. Examen TIC A1 2010";


//  Id pregunta: 8296 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  &iquest;Cu&aacute;ntas direcciones IP ser&aacute;n asignadas en la subred 134.141.0.0/24, sin considerar las direcciones de subred y de broadcast? ";
 choices[75]= new Array();
 choices[75][0] = "256";
 choices[75][1] = "254";
 choices[75][2] = "30";
 choices[75][3] = "64";
 answers[75] = choices[75][1];
 units[75] = "100";
 comments[75] = "Id Pregunta: 8296. Examen TIC A2 2010";


//  Id pregunta: 9041 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  Sistema de Grid Computing";
 choices[76]= new Array();
 choices[76][0] = "Globus Toolkit";
 choices[76][1] = "Nimbus";
 choices[76][2] = "Eucaliptus";
 choices[76][3] = "Gluster";
 answers[76] = choices[76][0];
 units[76] = "45";
 comments[76] = "Id Pregunta: 9041. ";


//  Id pregunta: 9045 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  Se&ntilde;ale la afirmaci&oacute;n incorrecta sobre M&eacute;trica";
 choices[77]= new Array();
 choices[77][0] = "Sirve tanto para desarrollo estructurado como para desarrollo orientado a objetos";
 choices[77][1] = "Est&aacute; prohibido su uso fuera de la administraci&oacute;n";
 choices[77][2] = "Los cuatro interfaces son aseguramiento de la calidad, seguridad, Gesti&oacute;n de Configuraci&oacute;n y Gesti&oacute;n de Proyectos ";
 choices[77][3] = "La &uacute;ltima versi&oacute;n es la tercera";
 answers[77] = choices[77][1];
 units[77] = "86";
 comments[77] = "Id Pregunta: 9045. NULL";


//  Id pregunta: 9248 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  &iquest;En qu&eacute; se diferencia la API de Windows y Unix en cuanto a filosof&iacute;a?";
 choices[78]= new Array();
 choices[78][0] = "En Unix las funciones de sistema operativo son simples, con pocos par&aacute;metros.";
 choices[78][1] = "Win32 ofrece interfaces muy extensas con muchos par&aacute;metros.";
 choices[78][2] = "En Unix suele haber pocas formas de realizar una operaci&oacute;n, mientras en Win32 hay a menudo 3 o 4 formas de realizar lo mismo.";
 choices[78][3] = "Todas son correctas.";
 answers[78] = choices[78][3];
 units[78] = "56";
 comments[78] = "Id Pregunta: 9248. ";


//  Id pregunta: 9418 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  El uso de la t&eacute;cnica de la media para combinar estimaciones software individuales es caracter&iacute;stico de los m&eacute;todos";
 choices[79]= new Array();
 choices[79][0] = "Con base hist&oacute;rica";
 choices[79][1] = "Con base estad&iacute;stica";
 choices[79][2] = "Compuestos";
 choices[79][3] = "Lineales";
 answers[79] = choices[79][0];
 units[79] = "89";
 comments[79] = "Id Pregunta: 9418. NULL";


//  Id pregunta: 9507 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  En el patr&oacute;n MVC, &iquest;d&oacute;nde situar&iacute;amos un contenedor EJB?";
 choices[80]= new Array();
 choices[80][0] = "En el modelo";
 choices[80][1] = "En la vista";
 choices[80][2] = "En el controlador";
 choices[80][3] = "En todos los anteriores";
 answers[80] = choices[80][0];
 units[80] = "116";
 comments[80] = "Id Pregunta: 9507. NULL";


//  Id pregunta: 9528 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  &iquest;Qu&eacute; factor afecta a la calidad de servicio en internet?";
 choices[81]= new Array();
 choices[81][0] = "Ancho de banda";
 choices[81][1] = "Jitter o variaci&oacute;n de retardo";
 choices[81][2] = "Eco";
 choices[81][3] = "Todas las respuestas anteriores son correctas";
 answers[81] = choices[81][3];
 units[81] = "117";
 comments[81] = "Id Pregunta: 9528. NULL";


//  Id pregunta: 9676 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  Son servicios de una IDE:";
 choices[82]= new Array();
 choices[82][0] = "Servicios de mapas en Web (WMS), servicios de elementos en Web (WFS), servicios de coberturas en Web (WCS), servicios de conversi&oacute;n de coordenadas, servicios de cat&aacute;logos de datos.";
 choices[82][1] = "Servicios de nomenclator (gazetteer), descripci&oacute;n de estilo de capas (SLD).";
 choices[82][2] = "Servicios de metadatos, establecimiento de est&aacute;ndares, identificaci&oacute;n de marcos, establecimiento de acuerdos entre organismos para la producci&oacute;n de informaci&oacute;n espacial de inter&eacute;s conjunto.";
 choices[82][3] = "a, b y c son correctas.";
 answers[82] = choices[82][3];
 units[82] = "67";
 comments[82] = "Id Pregunta: 9676. NULL";


//  Id pregunta: 9713 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Se&ntilde;ale la respuesta INCORRECTA respecto a las funciones criptogr&aacute;ficas hash o resumen.";
 choices[83]= new Array();
 choices[83][0] = "MD5 genera un hash de 128 bits.";
 choices[83][1] = "SHA-1 genera un hash de 160 bits.";
 choices[83][2] = "Se conoce por SHA-2 a un conjunto de funciones de la familia SHA que generan hashes de longitud 224, 256, 384 y 512 bits.";
 choices[83][3] = "La longitud m&iacute;nima del hash soportada en SHA-3 es 256 bits.";
 answers[83] = choices[83][3];
 units[83] = "72";
 comments[83] = "Id Pregunta: 9713. Examen TIC-A1 2013";


//  Id pregunta: 9883 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  El protocolo SET (Secure Electronic Transaction)";
 choices[84]= new Array();
 choices[84][0] = "Fue desarrollado en 1990 mediante acuerdo bilateral entre Visa e IBM.";
 choices[84][1] = "impide que el vendedor acceda a la informaci&oacute;n de pago.";
 choices[84][2] = "permite que el banco acceda a los datos del pedido para tramitar el pago.";
 choices[84][3] = "no abarca ni liquidaciones de pagos ni anulaciones.";
 answers[84] = choices[84][1];
 units[84] = "70";
 comments[84] = "Id Pregunta: 9883. TIC A1, Examen 2013";


//  Id pregunta: 10006 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  En el &aacute;mbito del Real Decreto 772/1999, de 7 de mayo, en la redacci&oacute;n dada por el Real Decreto 209/2003, de 21 de febrero, por el que se regulan los registros y las notificaciones telem&aacute;ticas, as&iacute; como la utilizaci&oacute;n de medios telem&aacute;ticos para la sustituci&oacute;n de la aportaci&oacute;n de certificados por los ciudadanos, NO es una funci&oacute;n propia de los registros telem&aacute;ticos";
 choices[85]= new Array();
 choices[85][0] = "la recepci&oacute;n de solicitudes, escritos y comunicaciones.";
 choices[85][1] = "la remisi&oacute;n de las solicitudes, escritos y comunicaciones recibidas.";
 choices[85][2] = "la expedici&oacute;n de copias selladas o compulsadas de los documentos que, en su caso, se transmitan junto con la solicitud, escrito o comunicaci&oacute;n.";
 choices[85][3] = "la anotaci&oacute;n de los correspondientes asientos de entrada y salida.";
 answers[85] = choices[85][2];
 units[85] = "43";
 comments[85] = "Id Pregunta: 10006. ";


//  Id pregunta: 10084 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  De acuerdo al marco de desarrollo PUDS, &iquest;cu&aacute;l de los siguientes NO es un flujo de trabajo de soporte?";
 choices[86]= new Array();
 choices[86][0] = "Gesti&oacute;n de la configuraci&oacute;n";
 choices[86][1] = "Gesti&oacute;n";
 choices[86][2] = "Entorno de desarrollo";
 choices[86][3] = "Pruebas";
 answers[86] = choices[86][3];
 units[86] = "76";
 comments[86] = "Id Pregunta: 10084. NULL";


//  Id pregunta: 10274 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre comunicaci&oacute;n entre agentes inteligentes  mediante sistema de pizarra es cierta?";
 choices[87]= new Array();
 choices[87][0] = "Los agentes reciben se&ntilde;ales de la pizarra cuando &eacute;sta se actualiza";
 choices[87][1] = "Cuando un agente puede contribuir a la soluci&oacute;n del problema lo 'escribe' inmediatamente en la pizarra";
 choices[87][2] = "Ambas son ciertas";
 choices[87][3] = "Ninguna es cierta";
 answers[87] = choices[87][3];
 units[87] = "63";
 comments[87] = "Id Pregunta: 10274. NULL";


//  Id pregunta: 10278 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  Se&ntilde;ale el m&eacute;todo de inferencia no aplicable a marcos";
 choices[88]= new Array();
 choices[88][0] = "Deducci&oacute;n de valores de slots";
 choices[88][1] = "Actualizaci&oacute;n de valores de slots";
 choices[88][2] = "Equiparaci&oacute;n";
 choices[88][3] = "Emparejamiento";
 answers[88] = choices[88][3];
 units[88] = "64";
 comments[88] = "Id Pregunta: 10278. NULL";


//  Id pregunta: 10790 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  El algoritmo de Peterson corresponde a:";
 choices[89]= new Array();
 choices[89][0] = "Un algoritmo de ordenaci&oacute;n de listas.";
 choices[89][1] = "Un m&eacute;todo de ordenaci&oacute;n en un sistema distribuido.";
 choices[89][2] = "Una pol&iacute;tica de sustituci&oacute;n de p&aacute;ginas al producirse un fallo de p&aacute;gina.";
 choices[89][3] = "Una soluci&oacute;n al problema de la exclusi&oacute;n mutua.";
 answers[89] = choices[89][3];
 units[89] = "52";
 comments[89] = "Id Pregunta: 10790. Examen GSI 2014";


//  Id pregunta: 10794 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Se quiere incluir una base de datos local en una aplicaci&oacute;n para m&oacute;viles Android. &iquest;Cu&aacute;l de las siguientes ser&iacute;a la m&aacute;s adecuada?";
 choices[90]= new Array();
 choices[90][0] = "SQLite.";
 choices[90][1] = "Oracle Pocket.";
 choices[90][2] = "SQL Server compact.";
 choices[90][3] = "MySQL micro edition.";
 answers[90] = choices[90][0];
 units[90] = "57";
 comments[90] = "Id Pregunta: 10794. Examen GSI 2014";


//  Id pregunta: 11177 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Qu&eacute; tipo de tr&aacute;fico proporciona el nivel de servicio A del est&aacute;ndar 802.17 Resilient Packet Ring?";
 choices[91]= new Array();
 choices[91][0] = "Tr&aacute;fico con requisitos latencia y jitter predecible";
 choices[91][1] = "Tr&aacute;fico con requisitos de baja latencia y bajo jitter";
 choices[91][2] = "Tr&aacute;fico con requisitos de baja latencia y alto jitter";
 choices[91][3] = "Tr&aacute;fico de servicios Best Effort";
 answers[91] = choices[91][1];
 units[91] = "101";
 comments[91] = "Id Pregunta: 11177. ";


//  Id pregunta: 11207 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;C&oacute;mo se denomina el plan de la Agenda Digital Espa&ntilde;ola referente al objetivo de Despliegue de redes r&aacute;pidas y ultrarr&aacute;pidas?";
 choices[92]= new Array();
 choices[92][0] = "Plan de Impulso del acceso r&aacute;pido y ultrarr&aacute;pido a Internet";
 choices[92][1] = "Plan de Telecomunicaciones Ultrarr&aacute;pidas";
 choices[92][2] = "Plan de Despliegue de infraestructuras de Red Espa&ntilde;ola";
 choices[92][3] = "Ninguna de las anteriores";
 answers[92] = choices[92][1];
 units[92] = "30";
 comments[92] = "Id Pregunta: 11207. ";


//  Id pregunta: 11328 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  En cuanto a la normativa sobre reutilizaci&oacute;n de la informaci&oacute;n, indique cu&aacute;l de las siguientes opciones no es constitutiva de una infracci&oacute;n grave";
 choices[93]= new Array();
 choices[93][0] = "La reutilizaci&oacute;n de documentaci&oacute;n sin haber obtenido la correspondiente licencia en los casos en que &eacute;sta sea requerida;";
 choices[93][1] = "La reutilizaci&oacute;n de la informaci&oacute;n para una finalidad distinta a la que se concedi&oacute;;";
 choices[93][2] = "La alteraci&oacute;n grave del contenido de la informaci&oacute;n para cuya reutilizaci&oacute;n se haya concedido una licencia;";
 choices[93][3] = "La desnaturalizaci&oacute;n del sentido de la informaci&oacute;n para cuya reutilizaci&oacute;n se haya concedido una licencia;";
 answers[93] = choices[93][3];
 units[93] = "44";
 comments[93] = "Id Pregunta: 11328. ";


//  Id pregunta: 11380 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; etapa del ciclo de vida del servicio asegura que los m&eacute;todos de medici&oacute;n proporcionar&aacute;n las m&eacute;tricas necesarias para los servicios nuevos o modificados?";
 choices[94]= new Array();
 choices[94][0] = "Dise&ntilde;o del servicio";
 choices[94][1] = "Operaci&oacute;n del servicio";
 choices[94][2] = "Estrategia del servicio";
 choices[94][3] = "Entrega del servicio";
 answers[94] = choices[94][0];
 units[94] = "98";
 comments[94] = "Id Pregunta: 11380. ";


//  Id pregunta: 11428 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Seg&uacute;n la Ley 9/2014, mediante Real Decreto se regular&aacute;n derechos:";
 choices[95]= new Array();
 choices[95][0] = "Continuidad servicio.";
 choices[95][1] = "Continuidad servicio y obtener compensaci&oacute;n autom&aacute;tica sin interrupci&oacute;n.";
 choices[95][2] = "Continuidad servicio y obtener compensaci&oacute;n proporcional al tiempo de interrupci&oacute;n.";
 choices[95][3] = "Continuidad servicio, sin compensaci&oacute;n.";
 answers[95] = choices[95][1];
 units[95] = "110";
 comments[95] = "Id Pregunta: 11428. ";


//  Id pregunta: 11456 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Sobre los plazos relacionados con las decisiones sobre los otorgamientos de derechos de uso en la Ley 9/2014, General de Telecomunicaciones, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?:";
 choices[96]= new Array();
 choices[96][0] = "El plazo m&aacute;ximo entre la recepci&oacute;n de la solicitud y la adopci&oacute;n y publicaci&oacute;n de decisiones es de 6 semanas.";
 choices[96][1] = "El plazo m&aacute;ximo entre la petici&oacute;n y la decisi&oacute;n sin hacerla p&uacute;blica  es de 3 semanas.";
 choices[96][2] = "El plazo m&aacute;ximo entre la recepci&oacute;n de solicitud y la adopci&oacute;n, comunicaci&oacute;n y publicaci&oacute;n de decisiones es de 3 semanas, salvo cuando se apliquen procedimientos de selecci&oacute;n comparativa o competitiva.";
 choices[96][3] = "Ninguna de las anteriores es correcta.";
 answers[96] = choices[96][2];
 units[96] = "110";
 comments[96] = "Id Pregunta: 11456. ";


//  Id pregunta: 11622 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Hive:";
 choices[97]= new Array();
 choices[97][0] = "Impone una jerarqu&iacute;a a los archivos en cl&uacute;ster y permite sincronizar el trabajo entre las distintas entidades.";
 choices[97][1] = "Permite administrar grandes conjuntos de datos que se encuentran en cl&uacute;ster utilizando un lenguaje similar a SQL";
 choices[97][2] = "Permite gestionar los flujos de trabajo y la sincronizaci&oacute;n al trabajar con datos en cl&uacute;ster.";
 choices[97][3] = "Ofrece una interfaz gr&aacute;fica que permite disponer, administrar y supervisar un conjunto de nodos de trabajo Hadoop.";
 answers[97] = choices[97][1];
 units[97] = "68";
 comments[97] = "Id Pregunta: 11622. ";


//  Id pregunta: 11737 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Qu&eacute; es una topolog&iacute;a  de red Ad-Hoc?";
 choices[98]= new Array();
 choices[98][0] = "Aquella en la que todos los elementos de una red se comunican con el resto de igual a igual";
 choices[98][1] = "Aquella en la que todos los elementos de una red se comunican a trav&eacute;s de un elemento com&uacute;n llamado control de accesos.";
 choices[98][2] = "Aquella en la que todos los elementos de una red se comunican siguiendo unas prioridades.";
 choices[98][3] = "Aquella que a nivel l&oacute;gico integra redes localizadas en diferentes redes externas.";
 answers[98] = choices[98][0];
 units[98] = "107";
 comments[98] = "Id Pregunta: 11737. ";


//  Id pregunta: 11753 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Cu&aacute;l de los siguientes sistemas no permite una lectura del texto de una p&aacute;gina web?";
 choices[99]= new Array();
 choices[99][0] = "ReadMe";
 choices[99][1] = "ReadSpeaker";
 choices[99][2] = "JAWS";
 choices[99][3] = "WebAnywhere";
 answers[99] = choices[99][0];
 units[99] = "39";
 comments[99] = "Id Pregunta: 11753. ";


