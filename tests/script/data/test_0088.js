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

//  Id pregunta: 335 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  La posibilidad de que aplicaciones de distintos desarrolladores de software funcionen en m&aacute;quinas de diversos fabricantes, se conoce como:";
 choices[0]= new Array();
 choices[0][0] = "Interoperabilidad";
 choices[0][1] = "Escalabilidad";
 choices[0][2] = "Portabilidad";
 choices[0][3] = "Integrabilidad";
 answers[0] = choices[0][2];
 units[0] = "40";
 comments[0] = "Id Pregunta: 335. ";


//  Id pregunta: 360 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  Las siglas D.S.S. responden por:";
 choices[1]= new Array();
 choices[1][0] = "Design Software System";
 choices[1][1] = "Development  Software System";
 choices[1][2] = "Decision Support System";
 choices[1][3] = "Development Support System";
 answers[1] = choices[1][2];
 units[1] = "21";
 comments[1] = "Id Pregunta: 360. ";


//  Id pregunta: 533 AÃ±o de creación de pregunta: 2003-01-01
 questions[2]= "3)  Los diagrmas de Gantt o de tiempo son una t&eacute;cnica de:";
 choices[2]= new Array();
 choices[2][0] = "Gesti&oacute;n de proyectos";
 choices[2][1] = "Programaci&oacute;n orientada a objetos";
 choices[2][2] = "An&aacute;lisis diferencialde aplicaciones";
 choices[2][3] = "Programaci&oacute;n estructurada";
 answers[2] = choices[2][0];
 units[2] = "28";
 comments[2] = "Id Pregunta: 533. ";


//  Id pregunta: 619 AÃ±o de creación de pregunta: 2006-01-01
 questions[3]= "4)  En la auditor&iacute;a de sistemas EFT son las iniciales de:";
 choices[3]= new Array();
 choices[3][0] = " Electronic Fundation Transfer";
 choices[3][1] = "Electronic Fundation Testing";
 choices[3][2] = "Electronic Funds Transfer";
 choices[3][3] = "Electronic Funds Testing";
 answers[3] = choices[3][2];
 units[3] = "33";
 comments[3] = "Id Pregunta: 619. ";


//  Id pregunta: 684 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  El informe WITSA se refiere a:";
 choices[4]= new Array();
 choices[4][0] = "Gobierno y Administraci&oacute;n electr&oacute;nica";
 choices[4][1] = "Evoluci&oacute;n de la I+D en cada pa&iacute;s";
 choices[4][2] = "Implantaci&oacute;n de las tecnolog&iacute;as de banda ancha inal&aacute;mbricas en cada pa&iacute;s";
 choices[4][3] = "No existe tal informe";
 answers[4] = choices[4][0];
 units[4] = "44";
 comments[4] = "Id Pregunta: 684. ";


//  Id pregunta: 731 AÃ±o de creación de pregunta: 2004-01-01
 questions[5]= "6)  Identifique cu&aacute;l de los siguientes nombres no se corresponde con la denominaci&oacute;n de alguna de las Redes Neuronales de una capa:";
 choices[5]= new Array();
 choices[5][0] = "Perceptron";
 choices[5][1] = "Adaline";
 choices[5][2] = "Art";
 choices[5][3] = "Madaline";
 answers[5] = choices[5][2];
 units[5] = "63,64";
 comments[5] = "Id Pregunta: 731. Examen TIC MAP B 2004";


//  Id pregunta: 792 AÃ±o de creación de pregunta: 2004-01-01
 questions[6]= "7)  En un sistema de memoria virtual, el &quot;bit de suciedad&quot; (dirty bit) se utiliza para:";
 choices[6]= new Array();
 choices[6][0] = "Saber si los datos siguen siendo v&aacute;lidos antes de que la CPU los utilice.";
 choices[6][1] = "Detectar corrupci&oacute;n de datos debida a fallos de hardware o a interferencias electromagn&eacute;ticas.";
 choices[6][2] = "Determinar si los datos se deben escribir en disco antes de ser reemplazados.";
 choices[6][3] = "Saber si los datos ya est&aacute;n disponibles en la memoria cache.";
 answers[6] = choices[6][2];
 units[6] = "47";
 comments[6] = "Id Pregunta: 792. ";


//  Id pregunta: 816 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Asociados a una red sem&aacute;ntica hay 2 procedimientos que permiten proporcionar respuestas navegando por su estructura. Estos procedimientos son:";
 choices[7]= new Array();
 choices[7][0] = "Herencia e inferencia";
 choices[7][1] = "Herencia y emparejamiento";
 choices[7][2] = "Emparejamiento y equiparaci&oacute;n";
 choices[7][3] = "Equiparaci&oacute;n y herencia";
 answers[7] = choices[7][1];
 units[7] = "63";
 comments[7] = "Id Pregunta: 816. ";


//  Id pregunta: 848 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes no es una caracter&iacute;stica de una funci&oacute;n Hash?:";
 choices[8]= new Array();
 choices[8][0] = "Obtiene un resultado unidireccional e irreversible";
 choices[8][1] = "No hace falta una clave pues el texto cifrado depende exclusivamente del texto claro original";
 choices[8][2] = "Se trata de una funci&oacute;n libre de colisiones en sentido estricto";
 choices[8][3] = "La seguridad de la funci&oacute;n Hash radica en su car&aacute;cter bidireccional";
 answers[8] = choices[8][3];
 units[8] = "72";
 comments[8] = "Id Pregunta: 848. ";


//  Id pregunta: 942 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Qu&eacute; se entiende por solapamiento de componentes?:";
 choices[9]= new Array();
 choices[9][0] = "Es el porcentaje de tiempo durante el cual dos o m&aacute;s componentes est&aacute;n siendo utilizados simult&aacute;neamente";
 choices[9][1] = "Es el porcentaje de tiempo durante el cual los distintos dispositivos del sistema est&aacute;n siendo utilizados en tareas del sistema";
 choices[9][2] = "Es la cantidad de tiempo ininterrumpido de la CPU que un sistema de tiempo compartido asigna a los diferentes trabajos";
 choices[9][3] = "Es el n&uacute;mero de programas sacados de memoria por unidad de tiempo a causa de falta de espacio o para reorganizar el mismo";
 answers[9] = choices[9][0];
 units[9] = "52";
 comments[9] = "Id Pregunta: 942. ";


//  Id pregunta: 1291 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  NAS:";
 choices[10]= new Array();
 choices[10][0] = "Es un dispositivo de almacenamiento conectado a red de alta capacidad";
 choices[10][1] = "Es un sistema de emisi&oacute;n de alarmas a trav&eacute;s de redes";
 choices[10][2] = "Es una base de datos orientada a objetos";
 choices[10][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[10] = choices[10][0];
 units[10] = "48";
 comments[10] = "Id Pregunta: 1291. ";


//  Id pregunta: 1378 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Un &quot;service pack&quot; en el entorno del sistema operativo Windows 2000:";
 choices[11]= new Array();
 choices[11][0] = "Es una aplicaci&oacute;n auxiliar que amplia las funcionalidades del sistema operativo";
 choices[11][1] = "Es un componente del servicio de paquetes";
 choices[11][2] = "Es un paquete integrado que incluye el sistema operativo y programas de aplicaci&oacute;n";
 choices[11][3] = "Es un conjunto de correcciones o partes del sistema operativo que corrige fallos o vulnerabilidades de seguridad y tambi&eacute;n puede ampliar las funcionalidades de dicho sistema";
 answers[11] = choices[11][3];
 units[11] = "56";
 comments[11] = "Id Pregunta: 1378. ";


//  Id pregunta: 1469 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Los c&oacute;decs DivX permiten:";
 choices[12]= new Array();
 choices[12][0] = "Escuchar la radio en un PC";
 choices[12][1] = "Ver la TV en un PC";
 choices[12][2] = "Conectar cualquier dispositivo Bluetooth a un PC";
 choices[12][3] = "Ver v&iacute;deos en un PC";
 answers[12] = choices[12][3];
 units[12] = "48";
 comments[12] = "Id Pregunta: 1469. ";


//  Id pregunta: 1555 AÃ±o de creación de pregunta: 2003-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l de las siguientes no es una propiedad que debe cumplir una funci&oacute;n resumen (hash) ?";
 choices[13]= new Array();
 choices[13][0] = "Resistencia a la preimagen";
 choices[13][1] = "Resistencia a la colisi&oacute;n Fuerte";
 choices[13][2] = "Resistencia a la colisi&oacute;n Suave";
 choices[13][3] = "Resistencia a la no colisi&oacute;n";
 answers[13] = choices[13][3];
 units[13] = "72";
 comments[13] = "Id Pregunta: 1555. ";


//  Id pregunta: 1706 AÃ±o de creación de pregunta: 2006-01-01
 questions[14]= "15)  Se dispone &uacute;nicamente de dos discos, con los que se pretende implementar una matriz redundante (RAID) con tolerancia a fallos y con el mejor rendimiento posible tanto en lectura como en escritura, &iquest;qu&eacute; tipo escoger&iacute;a?";
 choices[14]= new Array();
 choices[14][0] = "RAID-0";
 choices[14][1] = "RAID-1";
 choices[14][2] = "RAID-3";
 choices[14][3] = "RAID-0 &oacute; RAID-1";
 answers[14] = choices[14][1];
 units[14] = "48";
 comments[14] = "Id Pregunta: 1706. ";


//  Id pregunta: 1871 AÃ±o de creación de pregunta: 2006-01-01
 questions[15]= "16)  &iquest;Qu&eacute; norma se utiliza para la certificaci&oacute;n de dispositivos seguros de creaci&oacute;n de firma?";
 choices[15]= new Array();
 choices[15][0] = "ISO 17799";
 choices[15][1] = "CWA 14169";
 choices[15][2] = "UNE 71502";
 choices[15][3] = "EIA 568 B2";
 answers[15] = choices[15][1];
 units[15] = "30";
 comments[15] = "Id Pregunta: 1871. Decisi&oacute;n de la Comisi&oacute;n de 14 de julio de 2003, Anexo B";


//  Id pregunta: 2104 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Se desea establecer un sistema de salvaguarda de informaci&oacute;n (back-up) que asegure una p&eacute;rdida potencial m&aacute;xima del trabajo realizado en 24 horas. Con el fin de facilitar el proceso se han propuesto diversas medidas. Indicar aqu&eacute;lla que sea v&aacute;lida:";
 choices[16]= new Array();
 choices[16][0] = "Copiar inmediatamente en cinta todas las modificaciones efectuadas por cualquiera de los usuarios seg&uacute;n &eacute;stas se vayan produciendo";
 choices[16][1] = "Realizar salvaguardas al final de cada d&iacute;a de toda la informaci&oacute;n contenida en los discos mediante alg&uacute;n procedimiento autom&aacute;tico lanzado por el administrador del sistema";
 choices[16][2] = "Obligar a cada usuario a realizar su copia de seguridad una vez terminado el trabajo efectuado  durante el d&iacute;a";
 choices[16][3] = "No se puede efectuar un sistema de salvaguarda basado en cinta para un sistema distribu&iacute;do en el que las estaciones de trabajo no posean cinta magn&eacute;tica";
 answers[16] = choices[16][1];
 units[16] = "96,97";
 comments[16] = "Id Pregunta: 2104. ";


//  Id pregunta: 2292 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  El modo empotrado de aplicar los modelos de COCOMO considera:";
 choices[17]= new Array();
 choices[17][0] = "Proyectos peque&ntilde;os";
 choices[17][1] = "Proyectos de complejidad media";
 choices[17][2] = "Proyectos de complejidad alta";
 choices[17][3] = "Proyectos que deben desarrollarse dentro de un hardware y software estricto y con restricciones operativas";
 answers[17] = choices[17][3];
 units[17] = "89";
 comments[17] = "Id Pregunta: 2292. NULL";


//  Id pregunta: 2508 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Un proceso en un DFD&hellip;:";
 choices[18]= new Array();
 choices[18][0] = "Puede descomponerse en otros procesos";
 choices[18][1] = "Siempre tiene un almac&eacute;n de datos asociado";
 choices[18][2] = "Puede estar aislado";
 choices[18][3] = "Puede equivaler a una entidad externa";
 answers[18] = choices[18][0];
 units[18] = "81";
 comments[18] = "Id Pregunta: 2508. ";


//  Id pregunta: 2543 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Los m&eacute;todos de compresi&oacute;n de im&aacute;genes basados en la codificaci&oacute;n del dominio transformado (transformada de Fourier, coseno discreta, etc):";
 choices[19]= new Array();
 choices[19][0] = "Son m&eacute;todos de compresi&oacute;n sin p&eacute;rdidas";
 choices[19][1] = "Son m&eacute;todos de compresi&oacute;n con p&eacute;rdidas";
 choices[19][2] = "La codificaci&oacute;n del dominio transformado no tiene aplicaci&oacute;n para la compresi&oacute;n de im&aacute;genes";
 choices[19][3] = "Se conocen tambi&eacute;n como codificaci&oacute;n de Huffman";
 answers[19] = choices[19][1];
 units[19] = "93";
 comments[19] = "Id Pregunta: 2543. NULL";


//  Id pregunta: 2809 AÃ±o de creación de pregunta: 2006-01-01
 questions[20]= "21)  Los criterios relacionados con la Reusabilidad son:";
 choices[20]= new Array();
 choices[20][0] = "Generalidad, Modularidad, Autodescriptivo, Independencia entornos HW y SW.";
 choices[20][1] = "Expandibilidad, Generalidad, Autodescriptivo, Modularidad.";
 choices[20][2] = "Generalidad, Modularidad, Autodescriptivo, Simplicidad.";
 choices[20][3] = "Expandibilidad, Generalidad, Autodescriptivo, Instrumentaci&oacute;n.";
 answers[20] = choices[20][0];
 units[20] = "88";
 comments[20] = "Id Pregunta: 2809. NULL";


//  Id pregunta: 2908 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Dentro de  la metodolog&iacute;a MAGERIT V2 la definici&oacute;n: &quot;es el da&ntilde;o sobre el activo derivado de la materializaci&oacute;n de la amenaza&quot;, corresponde a:";
 choices[21]= new Array();
 choices[21][0] = "Amenazas";
 choices[21][1] = "Vulnerabilidad";
 choices[21][2] = "Impacto";
 choices[21][3] = "Riesgo";
 answers[21] = choices[21][2];
 units[21] = "33";
 comments[21] = "Id Pregunta: 2908. ";


//  Id pregunta: 2944 AÃ±o de creación de pregunta: 2004-01-01
 questions[22]= "23)  &iquest;Qu&eacute; no permite IP V6?";
 choices[22]= new Array();
 choices[22][0] = "Autenticaci&oacute;n";
 choices[22][1] = "Garantia de no repudio";
 choices[22][2] = "Cifrado";
 choices[22][3] = "Integridad";
 answers[22] = choices[22][1];
 units[22] = "100";
 comments[22] = "Id Pregunta: 2944. Similar a examen TIC SS A 2003";


//  Id pregunta: 2953 AÃ±o de creación de pregunta: 2004-01-01
 questions[23]= "24)  &iquest;Cu&aacute;l es el m&eacute;todo de acceso del est&aacute;ndar IEEE 802.4?";
 choices[23]= new Array();
 choices[23][0] = "CSMA/CD";
 choices[23][1] = "Token bus";
 choices[23][2] = "Token Ring";
 choices[23][3] = "Aloha ranurado";
 answers[23] = choices[23][1];
 units[23] = "101, 102";
 comments[23] = "Id Pregunta: 2953. Similar a examen TIC SS A 2003";


//  Id pregunta: 3009 AÃ±o de creación de pregunta: 2004-01-01
 questions[24]= "25)  &iquest;A qu&eacute; se corresponden las siglas 802.11i sobre redes inal&aacute;mbricas?";
 choices[24]= new Array();
 choices[24][0] = "A especificaciones de nivel f&iacute;sico ";
 choices[24][1] = "A especificaciones sobre calidad de servicio QoS";
 choices[24][2] = "A especificaciones de Seguridad";
 choices[24][3] = "A especificiaciones de roaming";
 answers[24] = choices[24][2];
 units[24] = "107";
 comments[24] = "Id Pregunta: 3009. NULL";


//  Id pregunta: 3017 AÃ±o de creación de pregunta: 2004-01-01
 questions[25]= "26)  &iquest;A que se corresponden las siglas DECT?";
 choices[25]= new Array();
 choices[25][0] = "Una red de microondas para uso militar";
 choices[25][1] = "Un sistema de telefonos inhal&aacute;brico";
 choices[25][2] = "Un sistema de telefon&iacute;na movil";
 choices[25][3] = "ninguna de las anteriores";
 answers[25] = choices[25][1];
 units[25] = "108";
 comments[25] = "Id Pregunta: 3017. ";


//  Id pregunta: 3066 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  En una arquitectura de tres capas el acceso a  los datos corresponde a la capa de:";
 choices[26]= new Array();
 choices[26][0] = "Presentaci&oacute;n";
 choices[26][1] = "Aplicaci&oacute;n";
 choices[26][2] = "Datos";
 choices[26][3] = "En realidad las tres capas manipulan los datos";
 answers[26] = choices[26][2];
 units[26] = "113";
 comments[26] = "Id Pregunta: 3066. ";


//  Id pregunta: 3078 AÃ±o de creación de pregunta: 2005-01-01
 questions[27]= "28)  La intrusi&oacute;n de un virus inform&aacute;tico del tipo gusano (worm) en un ordenador puede afectar, en primer lugar, por ocupaci&oacute;n de todo el espacio disponible en disco:";
 choices[27]= new Array();
 choices[27][0] = "La dimensi&oacute;n de confidencialidad de la informaci&oacute;n almacenada";
 choices[27][1] = "La dimensi&oacute;n de disponibilidad de la informaci&oacute;n almacenada";
 choices[27][2] = "La dimensi&oacute;n de integridad de la informaci&oacute;n almacenada";
 choices[27][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;c&rsquo; son correctas";
 answers[27] = choices[27][1];
 units[27] = "111";
 comments[27] = "Id Pregunta: 3078. NULL";


//  Id pregunta: 3083 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Los sistemas de multiplexaci&oacute;n por divisi&oacute;n en frecuencia, respecto a los por divisi&oacute;n en el tiempo:";
 choices[28]= new Array();
 choices[28][0] = "Tienen problemas de diafon&iacute;a, por lo que se dejan espacios de guarda";
 choices[28][1] = "Utilizan el ancho de banda completo del canal con una duraci&oacute;n fija";
 choices[28][2] = "No utilizan filtros";
 choices[28][3] = "Utilizan antenas de tipo dipolo";
 answers[28] = choices[28][0];
 units[28] = "108";
 comments[28] = "Id Pregunta: 3083. ";


//  Id pregunta: 3126 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  &iquest;C&oacute;mo se llama el est&aacute;ndar  existente para la integraci&oacute;n de LAN en ATM?:";
 choices[29]= new Array();
 choices[29][0] = "LANE";
 choices[29][1] = "WLAN";
 choices[29][2] = "FDDI";
 choices[29][3] = "ANYLAN";
 answers[29] = choices[29][0];
 units[29] = "109";
 comments[29] = "Id Pregunta: 3126. ";


//  Id pregunta: 3262 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  &iquest;De que trata el est&aacute;ndar IEEE 802.1.q?:";
 choices[30]= new Array();
 choices[30][0] = "De las VLAN (Virtual Local Area Network)";
 choices[30][1] = "De la capa f&iacute;sica de la red Ethernet";
 choices[30][2] = "No existe dicho est&aacute;ndar";
 choices[30][3] = "Del canal D de la RDSI";
 answers[30] = choices[30][0];
 units[30] = "102";
 comments[30] = "Id Pregunta: 3262. ";


//  Id pregunta: 3294 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  &iquest;Qu&eacute; hecho no es correcto en la evoluci&oacute;n del protocolo TCP/IP?:";
 choices[31]= new Array();
 choices[31][0] = "El desarrollador inicial fue ARPANET";
 choices[31][1] = "La publicaci&oacute;n fue por IAB";
 choices[31][2] = "La financiaci&oacute;n corri&oacute; a cargo de DARPA";
 choices[31][3] = "El desarrollador final fue CERN";
 answers[31] = choices[31][3];
 units[31] = "100,112";
 comments[31] = "Id Pregunta: 3294. ";


//  Id pregunta: 3300 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  &iquest;Qu&eacute; nos dice el teorema del muestreo o teorema de Nyquist?:";
 choices[32]= new Array();
 choices[32][0] = "Que la frecuencia de muestreo debe ser mayor o igual que el doble del ancho de banda m&aacute;ximo de la se&ntilde;al para evitar p&eacute;rdidas en la transmisi&oacute;n (recuperar la se&ntilde;al exacta sin distorsi&oacute;n)";
 choices[32][1] = "Que la frecuencia de muestreo debe ser menor o igual que el doble del ancho de banda m&aacute;ximo de la se&ntilde;al para evitar p&eacute;rdidas en la transmisi&oacute;n (recuperar la se&ntilde;al exacta sin distorsi&oacute;n)";
 choices[32][2] = "Que la frecuencia de muestreo debe ser mayor o igual que el triple del ancho de banda m&aacute;ximo de la se&ntilde;al para evitar p&eacute;rdidas en la transmisi&oacute;n (recuperar la se&ntilde;al exacta sin distorsi&oacute;n)";
 choices[32][3] = "Que la frecuencia de muestreo debe ser mayor o igual que el cu&aacute;druple del ancho de banda m&aacute;ximo de la se&ntilde;al para evitar p&eacute;rdidas en la transmisi&oacute;n (recuperar la se&ntilde;al exacta sin distorsi&oacute;n)";
 answers[32] = choices[32][0];
 units[32] = "99";
 comments[32] = "Id Pregunta: 3300. NULL";


//  Id pregunta: 3400 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  El PLCP se incorpora como subnivel de:";
 choices[33]= new Array();
 choices[33][0] = "Nivel 2 de 802.11";
 choices[33][1] = "Nivel 1 de 802.11";
 choices[33][2] = "Nivel 1 de 802.3";
 choices[33][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[33] = choices[33][1];
 units[33] = "101,107";
 comments[33] = "Id Pregunta: 3400. ";


//  Id pregunta: 3467 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  El punto de referencia S del modelo RDSI es:";
 choices[34]= new Array();
 choices[34][0] = "La interfaz para terminales anal&oacute;gicos";
 choices[34][1] = "La interfaz con la l&iacute;nea de transmisi&oacute;n hacia la central p&uacute;blica";
 choices[34][2] = "La interfaz a 4 hilos para equipos RDSI";
 choices[34][3] = "La separaci&oacute;n entre las instalaciones de usuario y los equipos de transmisi&oacute;n, cuando existe TR2";
 answers[34] = choices[34][2];
 units[34] = "103";
 comments[34] = "Id Pregunta: 3467. ";


//  Id pregunta: 3481 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  El topolog&iacute;a denominada FDDI (Fiber Distributed Data Interface) utiliza un m&eacute;todo de acceso al medio:";
 choices[35]= new Array();
 choices[35][0] = "Tipo CSMA/CD: se emite en cualquier momento y se detectan las colisiones";
 choices[35][1] = "Tipo  &lsquo;paso de testigo&rsquo; (Token Passing): es necesario la posesi&oacute;n del testigo para emitir";
 choices[35][2] = "Tipo TDM (multiplexaci&oacute;n por divisi&oacute;n en el tiempo): se asignan diferentes slots de tiempo a cada estaci&oacute;n";
 choices[35][3] = "Tipo FDM: la frecuencia de luz emitida por cada estaci&oacute;n es diferente con lo que no hay colisiones";
 answers[35] = choices[35][1];
 units[35] = "101";
 comments[35] = "Id Pregunta: 3481. ";


//  Id pregunta: 3690 AÃ±o de creación de pregunta: 2002-01-01
 questions[36]= "37)  Se&ntilde;ale la opcion mas adecuada: Las bandas de frecuencia utilizables en un cable coaxial se encuentran:";
 choices[36]= new Array();
 choices[36][0] = "Entre 60 KHz y 3 GHz";
 choices[36][1] = "Sobre los 100 MHz";
 choices[36][2] = "Entre 4 y 11 GHz";
 choices[36][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[36] = choices[36][0];
 units[36] = "99";
 comments[36] = "Id Pregunta: 3690. ";


//  Id pregunta: 3855 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  Dentro de las Frecuencias de sat&eacute;lite de uso comercial  se encuentra la banda Ku(BSS) que tiene como aplicaci&oacute;n:";
 choices[37]= new Array();
 choices[37][0] = "Datos y TV a altas velocidades ";
 choices[37][1] = "Radiodifusi&oacute;n de televisi&oacute;n por sat&eacute;lite.";
 choices[37][2] = "VSAT, video e Internet ";
 choices[37][3] = "Datos, voz y video ";
 answers[37] = choices[37][1];
 units[37] = "108";
 comments[37] = "Id Pregunta: 3855. ";


//  Id pregunta: 3878 AÃ±o de creación de pregunta: 2003-01-01
 questions[38]= "39)  &iquest;C&uacute;al es la longitud por defecto del campo de informaci&oacute;n en una trama Frame-Relay?";
 choices[38]= new Array();
 choices[38][0] = "Es de 1 Byte";
 choices[38][1] = "Es de 1600 Bytes";
 choices[38][2] = "Es de 8.000 Bytes";
 choices[38][3] = "Ninguna de las anteriores es cierta";
 answers[38] = choices[38][1];
 units[38] = "109";
 comments[38] = "Id Pregunta: 3878. ";


//  Id pregunta: 4110 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  IRC es:";
 choices[39]= new Array();
 choices[39][0] = "Internet Random Card, un protocolo para acceder al servicio de videoconferencia a trav&eacute;s de Internet.";
 choices[39][1] = "Internet Requery Chat, un protocolo para acceder al servicio de Chat y que es usado por clientes como XChat.";
 choices[39][2] = "Internet Relay Chat, un protocolo para acceder al servicio de Chat y que es usado por clientes como mIRC.";
 choices[39][3] = "b) y c) son correctas.";
 answers[39] = choices[39][2];
 units[39] = "112";
 comments[39] = "Id Pregunta: 4110. ";


//  Id pregunta: 4236 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  &iquest;Cu&aacute;l es el nombre del paquete open source Java que se utiliza para la generaci&oacute;n de informes?";
 choices[40]= new Array();
 choices[40][0] = "iReport";
 choices[40][1] = "SaintReport";
 choices[40][2] = "JasperReports";
 choices[40][3] = "xStream";
 answers[40] = choices[40][2];
 units[40] = "60.116";
 comments[40] = "Id Pregunta: 4236. NULL";


//  Id pregunta: 4239 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  Seg&uacute;n la Ley General de Telecomunicaciones 9/2014 corresponde el control e inspecci&oacute;n del espectro radioel&eacute;ctrico a";
 choices[41]= new Array();
 choices[41][0] = "Ministerio de Econom&iacute;a y Competitividad";
 choices[41][1] = "Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[41][2] = "CNAF";
 choices[41][3] = "Ninguno de los anteriores";
 answers[41] = choices[41][3];
 units[41] = "110";
 comments[41] = "Id Pregunta: 4239. ";


//  Id pregunta: 4600 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  Respecto al protocolo de seguridad IKE, cual de las siguientes respuestas es falsa:";
 choices[42]= new Array();
 choices[42][0] = "recrea las claves cada cierto tiempo";
 choices[42][1] = "permite utilizar certificados digitales";
 choices[42][2] = "se necesita una asociaci&oacute;n de seguridad IKE Para cada conexi&oacute;n IPSEC.";
 choices[42][3] = "esta basado en Oakley.";
 answers[42] = choices[42][2];
 units[42] = "74";
 comments[42] = "Id Pregunta: 4600. NULL";


//  Id pregunta: 4701 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  &iquest;C&oacute;mo se puede describir el formato de los datos en XML?";
 choices[43]= new Array();
 choices[43][0] = "Usando XSL";
 choices[43][1] = "Usando un DTD";
 choices[43][2] = "Usando un Nodo de Descripci&oacute;n (Description Node)";
 choices[43][3] = "Usando XSLT";
 answers[43] = choices[43][1];
 units[43] = "69";
 comments[43] = "Id Pregunta: 4701. Examen 2006 JCYL";


//  Id pregunta: 4715 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  El hipertexto es:";
 choices[44]= new Array();
 choices[44][0] = "El conjunto de los elementos activos de un documento, que, al seleccionarse, enlazan con otros elementos";
 choices[44][1] = "Un documento HTML.";
 choices[44][2] = "Un documento HTML, XML o SGML.";
 choices[44][3] = "Ninguna de las anteriores";
 answers[44] = choices[44][0];
 units[44] = "112";
 comments[44] = "Id Pregunta: 4715. Examen 2006 JCYL";


//  Id pregunta: 4770 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  Si Alice quiere transmitir un documento cifrado (sin autentcaci&oacute;n) hacia Bob utilizando un algoritmo de clave asim&eacute;trica";
 choices[45]= new Array();
 choices[45][0] = "Debe cifrarlo con la clave p&uacute;blica de Bob";
 choices[45][1] = "Debe cifrarlo con la clave privada de Bob";
 choices[45][2] = "Debe cifrarlo con la clave privada de Alice";
 choices[45][3] = "Debe cifrarlo con la clave p&uacute;blica de Alice";
 answers[45] = choices[45][0];
 units[45] = "74";
 comments[45] = "Id Pregunta: 4770. NULL";


//  Id pregunta: 4774 AÃ±o de creación de pregunta: 2009-01-01
 questions[46]= "47)  Seg&uacute;n la Ley Org&aacute;nica 15/1999 y el RD 1720/2007 ser&aacute; posible la cesi&oacute;n de los datos de car&aacute;cter personal sin contar con el consentimiento del interesado cuando la cesi&oacute;n sea entre Administraciones P&uacute;blicas y concurra uno de los siguientes supuestos:";
 choices[46]= new Array();
 choices[46][0] = "Tenga por objeto el tratamiento de los datos con fines hist&oacute;ricos, estad&iacute;sticos  o cient&iacute;ficos.";
 choices[46][1] = "Los datos de car&aacute;cter personal hayan sido recogidos o elaborados por una Administraci&oacute;n P&uacute;blica con destino a otra.";
 choices[46][2] = "La comunicaci&oacute;n se realice para el ejercicio de competencias id&eacute;nticas o que versen sobre las mismas materias";
 choices[46][3] = "Todas las anteriores son ciertas";
 answers[46] = choices[46][3];
 units[46] = "29";
 comments[46] = "Id Pregunta: 4774. ";


//  Id pregunta: 4904 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones corresponde a una de las caracter&iacute;sticas de los procesadores paralelos (MIMD):";
 choices[47]= new Array();
 choices[47][0] = "Todas las unidades de ejecuci&oacute;n paralela est&aacute;n sincronizadas y todas responden a una sola instrucci&oacute;n que emana de un &uacute;nico contador de programa.";
 choices[47][1] = "Una memoria central contiene los programas y una unidad de control centralizada se encarga de extraer cada instrucci&oacute;n y ejecutarla.";
 choices[47][2] = "Son &uacute;tiles para las operaciones que repiten los mismos c&aacute;lculos en un conjunto de datos (vectores).";
 choices[47][3] = "Se trata de un grupo de procesadores independientes cada uno de ellos con su propio contador de programa y sus propios datos.";
 answers[47] = choices[47][3];
 units[47] = "45";
 comments[47] = "Id Pregunta: 4904. Examen TIC B 2007";


//  Id pregunta: 4926 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  El modelo de ciclo de vida de desarrollo de un sistema de informaci&oacute;n en el que una fase s&oacute;lo se considerafinalizada si su documentaci&oacute;n asociada ha sido completada es el denominado:";
 choices[48]= new Array();
 choices[48][0] = "En cascada.";
 choices[48][1] = "De prototipado.";
 choices[48][2] = "En espiral.";
 choices[48][3] = "Iterativo.";
 answers[48] = choices[48][0];
 units[48] = "76";
 comments[48] = "Id Pregunta: 4926. Examen TIC B 2007";


//  Id pregunta: 4964 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  &iquest;Qu&eacute; tecnolog&iacute;a encaminada a proteger la propiedad intelectual en Internet habilita la gesti&oacute;n de loscontenidos en medios digitales a los usuarios identificados que tienen unos derechos determinados y les permiteusar un contenido codificado especialmente para &eacute;l?:";
 choices[49]= new Array();
 choices[49][0] = "Digital Rights Management (DRM).";
 choices[49][1] = "Marcas de agua.";
 choices[49][2] = "Los patrones.";
 choices[49][3] = "Technical Protection Measures (TPM).";
 answers[49] = choices[49][0];
 units[49] = "37";
 comments[49] = "Id Pregunta: 4964. Examen TIC B 2007";


//  Id pregunta: 5215 AÃ±o de creación de pregunta: 2007-01-01
 questions[50]= "51)  Cu&aacute;l de los siguientes productos no se obtiene en el proceso Dise&ntilde;o del Sistema de Informaci&oacute;n orientado a objetos";
 choices[50]= new Array();
 choices[50][0] = "Dise&ntilde;o de la Interfaz de usuario";
 choices[50][1] = "Modelos de Clases de Dise&ntilde;o";
 choices[50][2] = "Dise&ntilde;o de la Arquitectura Modular e Interfaz de Usuario";
 choices[50][3] = "Especificaciones de Implantaci&oacute;n";
 answers[50] = choices[50][2];
 units[50] = "86";
 comments[50] = "Id Pregunta: 5215. NULL";


//  Id pregunta: 5284 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  Indique cu&aacute;l de las siguientes opciones no se relaciona con un desarrollo JAVA: ";
 choices[51]= new Array();
 choices[51][0] = "Hibernate";
 choices[51][1] = "Biztalk";
 choices[51][2] = "Java Server Faces";
 choices[51][3] = "Spring";
 answers[51] = choices[51][1];
 units[51] = "116";
 comments[51] = "Id Pregunta: 5284. ";


//  Id pregunta: 5875 AÃ±o de creación de pregunta: 2009-01-01
 questions[52]= "53)  En el protocolo Secure Socket Layer (SSL) el subprotocolo de negociaci&oacute;n (handsake) negocia las claves de sesi&oacute;n mediante el esquema de Diffie-Hellman (D-H) o RSA. Indique la respuesta correcta:";
 choices[52]= new Array();
 choices[52][0] = "D-H an&oacute;nimo es susceptible de ataques por hombre interpuesto";
 choices[52][1] = "D-H ef&iacute;mero no requiere certificado del servidor ni del cliente";
 choices[52][2] = "D-H constante no precisa certificado del cliente";
 choices[52][3] = "RSA necesita la generaci&oacute;n de un n&uacute;mero aleatorio por el servidor que es enviado al cliente cifrado con la clave p&uacute;blica de &eacute;ste";
 answers[52] = choices[52][0];
 units[52] = "72";
 comments[52] = "Id Pregunta: 5875. MAP 2008 A1";


//  Id pregunta: 5958 AÃ±o de creación de pregunta: 2009-01-01
 questions[53]= "54)  De entre las siguientes opciones, se&ntilde;ale la que no se corresponde con una metodolog&iacute;a de desarrollo &aacute;gil:";
 choices[53]= new Array();
 choices[53][0] = "Rational Rapid Development (RRD)";
 choices[53][1] = "Scrum";
 choices[53][2] = "Extreme Programming (XP)";
 choices[53][3] = "Open Unified Process (OpenUP)";
 answers[53] = choices[53][0];
 units[53] = "79";
 comments[53] = "Id Pregunta: 5958. ";


//  Id pregunta: 6068 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  En el &aacute;mbito de los algoritmos de aprendizaje";
 choices[54]= new Array();
 choices[54][0] = "Los algoritmos de agrupamiento son m&eacute;todos de aprendizaje supervisado y los de clasificaci&oacute;n son m&eacute;todos de aprendizaje no supervisado";
 choices[54][1] = "Los algoritmos de agrupamiento son m&eacute;todos de aprendizaje no supervisado y los de clasificaci&oacute;n son m&eacute;todos de aprendizaje supervisado";
 choices[54][2] = "Tanto los algoritmos de agrupamiento como de clasificaci&oacute;n son m&eacute;todos aprendizaje supervisado";
 choices[54][3] = "Tanto los algoritmos de agrupamiento como de clasificaci&oacute;n son m&eacute;todos aprendizaje no supervisado";
 answers[54] = choices[54][1];
 units[54] = "63,64";
 comments[54] = "Id Pregunta: 6068. ";


//  Id pregunta: 6078 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  Los procesos de Gesti&oacute;n de las Comunicaciones del Proyecto incluyen lo siguiente:";
 choices[55]= new Array();
 choices[55][0] = "An&aacute;lisis de las Comunicaciones, Dise&ntilde;o de las Comunicaciones, Informar del Rendimiento y Gestionar a los interesados.";
 choices[55][1] = "Planificaci&oacute;n de las Comunicaciones, Distribuci&oacute;n de la Informaci&oacute;n, Informar del Rendimiento y Gestionar a los Interesados.";
 choices[55][2] = "An&aacute;lisis de las Comunicaciones, Dise&ntilde;o de las Comunicaciones y Desarrollo de las Comunicaciones.";
 choices[55][3] = "An&aacute;lisis de las Comunicaciones y Dise&ntilde;o de las Comunicaciones.";
 answers[55] = choices[55][1];
 units[55] = "27";
 comments[55] = "Id Pregunta: 6078. ";


//  Id pregunta: 6109 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  La competencia para la propuesta de planificaci&oacute;n, gesti&oacute;n y administraci&oacute;n del dominio p&uacute;blico radioel&eacute;ctrico, para la comprobaci&oacute;n t&eacute;cnica de emisiones radioel&eacute;ctricas, y para el control y la inspecci&oacute;n de las telecomunicaciones, as&iacute; como la aplicaci&oacute;n del r&eacute;gimen sancionador en la materia, la tiene:";
 choices[56]= new Array();
 choices[56][0] = "El Ministerio de Industria, Energ&iacute;a y Turismo.";
 choices[56][1] = "Comisi&oacute;n Nacional de los Mercados y la Competencia.";
 choices[56][2] = "La Uni&oacute;n Internacional de Telecomunicaciones.";
 choices[56][3] = "Red.es.";
 answers[56] = choices[56][0];
 units[56] = "110";
 comments[56] = "Id Pregunta: 6109. TIC A 2009";


//  Id pregunta: 6128 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  Una red de &aacute;rea de almacenamiento (SAN) es:";
 choices[57]= new Array();
 choices[57][0] = "Una red especial utilizada por algunos proveedores de servicios en internet para ofrecer servicios din&aacute;micos de almacenamiento y mantenimiento de webs corporativas.";
 choices[57][1] = "Una red basada en conexiones de fibra &oacute;ptica (Fibre Channel) que sirve para conectar m&uacute;ltiples dispositivos de almacenamiento en una red m&aacute;s grande ofreciendo una mayor capacidad de almacenamiento, permitiendo la transmisi&oacute;nde datos a alta velocidad.";
 choices[57][2] = "Un bus de datos utilizados en los grandes sistemas departamentales, muy utilizado para comunicar las consultas hacia las bases de datos.";
 choices[57][3] = "Un dispositivo de almacenamiento con direcci&oacute;n IP asignada que se conecta directamente a una LAN.";
 answers[57] = choices[57][1];
 units[57] = "48";
 comments[57] = "Id Pregunta: 6128. TIC A 2009";


//  Id pregunta: 6135 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  Los documentos denominados &quot;Pautas de Accesibilidad al Contenido en la Web&quot; (WCAG por sus siglas en ingl&eacute;s) explican c&oacute;mo hacer que el contenido web sea accesible para personas con discapacidad. Indicar cu&aacute;l de las siguientes afirmaciones es FALSA en relaci&oacute;n con estos documentos:";
 choices[58]= new Array();
 choices[58][0] = "Las pautas WCAG est&aacute;n pensadas principalmente para desarrolladores.";
 choices[58][1] = "Las pautas WCAG 2.0 se organizan en 4 principios b&aacute;sicos: perceptible, operable, comprensible y robusto.";
 choices[58][2] = "La &uacute;ltima versi&oacute;n documentada y reconocida de las pautas WCAG es la 3.0.";
 choices[58][3] = "Una diferencia entre las pautas WCAG 1.0 y las pautas WCAG 2.0 es que estas &uacute;ltimas son aplicables a una gama m&aacute;s amplia de tecnolog&iacute;as de contenido web.";
 answers[58] = choices[58][2];
 units[58] = "39";
 comments[58] = "Id Pregunta: 6135. TIC A 2009";


//  Id pregunta: 6151 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  Con respecto al control de la calidad, &iquest;cu&aacute;ndo se considera que un resultado es acptable?";
 choices[59]= new Array();
 choices[59][0] = "Si se encuentra dentro de los l&iacute;mites de control.";
 choices[59][1] = "Si se encuentra dentro del rango especificado por la tolerancia.";
 choices[59][2] = "Si se encuentra dentro de los l&iacute;mites de control o dentro del rango especificado por la tolerancia.";
 choices[59][3] = "Si se encuentra dentro de los l&iacute;mites de control y dentro del rango especificado por la tolerancia.";
 answers[59] = choices[59][1];
 units[59] = "28";
 comments[59] = "Id Pregunta: 6151. ";


//  Id pregunta: 6218 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  En el modelo de estimaci&oacute;n de costes COCOMO se utiliza de base la siguiente funci&oacute;n: 'E = a(Kl)b * m(X)' &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[60]= new Array();
 choices[60][0] = "a y b son variables con valores indefinidos";
 choices[60][1] = "Kl es la cantidad de l&iacute;neas de c&oacute;digo, en millones";
 choices[60][2] = "m(X) es una variable obtenida en una tabla a partir del n&uacute;mero de trabajadores y del conocimiento de las herramientas a utilizar";
 choices[60][3] = "El resultado se da en unidades salario/mes y horas-hombre";
 answers[60] = choices[60][3];
 units[60] = "89";
 comments[60] = "Id Pregunta: 6218. TICB-2009, bloque desarrollo";


//  Id pregunta: 6436 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  Cuando se pasa a tablas una relaci&oacute;n n:m";
 choices[61]= new Array();
 choices[61][0] = "Se generan restricciones de integridad referencial.";
 choices[61][1] = "No hay que preocuparse por la integridad referencial.";
 choices[61][2] = "hay que modificar las claves ajenas de las entidades participantes en la relaci&oacute;n.";
 choices[61][3] = "No se generan claves ajenas nada m&aacute;s que para los atributos propios de la relaci&oacute;n.";
 answers[61] = choices[61][0];
 units[61] = "80";
 comments[61] = "Id Pregunta: 6436. NULL";


//  Id pregunta: 6438 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  Se&ntilde;ale una de las restricciones del modelo E/R:";
 choices[62]= new Array();
 choices[62][0] = "No se pueden realizar relaciones de unas relaciones con otras.";
 choices[62][1] = "No permite relacionar m&aacute;s de dos entidades.";
 choices[62][2] = "No permite relacines reflexivas.";
 choices[62][3] = "No se pueden representar las propiedades de las entidades.";
 answers[62] = choices[62][0];
 units[62] = "80";
 comments[62] = "Id Pregunta: 6438. NULL";


//  Id pregunta: 6487 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  &iquest;Por qu&eacute; se usan celdas de tama&ntilde;o fijo en ATM?";
 choices[63]= new Array();
 choices[63][0] = "Porque se reduce la sobrecarga de cabeceras de protocolo";
 choices[63][1] = "Porque se reduce el tiempo que una trama de alta prioridad deber&aacute; esperar en cola";
 choices[63][2] = "Porque mejora el enrutamiento";
 choices[63][3] = "Por analog&iacute;a con Ethernet";
 answers[63] = choices[63][1];
 units[63] = "109";
 comments[63] = "Id Pregunta: 6487. Castilla La Mancha 2009";


//  Id pregunta: 6519 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  NO es un framework de desarrollo en Java";
 choices[64]= new Array();
 choices[64][0] = "JavaServer Faces";
 choices[64][1] = "Spring";
 choices[64][2] = "Ruby on Rails";
 choices[64][3] = "Maverick ";
 answers[64] = choices[64][2];
 units[64] = "116";
 comments[64] = "Id Pregunta: 6519. NULL";


//  Id pregunta: 6575 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  Podemos definir ARP poisoning como";
 choices[65]= new Array();
 choices[65][0] = "Alteraci&oacute;n de la tabla ARP para que una direcci&oacute;n IP se corresponda con una MAC distinta a la que ten&iacute;a";
 choices[65][1] = "Con este ataque no se puede redirigir el tr&aacute;fico al ordenador del atacante";
 choices[65][2] = "A y B son correctas";
 choices[65][3] = "A y B son incorrectas";
 answers[65] = choices[65][0];
 units[65] = "100";
 comments[65] = "Id Pregunta: 6575. NULL";


//  Id pregunta: 7180 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  Uno de los modelos utilizados para la estimaci&oacute;n de costes de un proyecto inform&aacute;tico es COCOMO (COnstructive COst MOdel). Se puede afirmar sobre &eacute;l que:";
 choices[66]= new Array();
 choices[66][0] = "La medici&oacute;n que realiza COCOMO por l&iacute;neas de c&oacute;digo es especialmente &uacute;til para la Orientaci&oacute;n a Objetos";
 choices[66][1] = "Incluye tres submodelos: B&aacute;sico, Intermedio y Detallado";
 choices[66][2] = "Cada submodelo se divide en tres modos: Org&aacute;nico, Inorg&aacute;nico y Directo";
 choices[66][3] = "El modo Org&aacute;nico se aplica a un tipo de proyectos complejos, en los que se tiene experiencia y con unos requisitos muy restrictivos";
 answers[66] = choices[66][1];
 units[66] = "89";
 comments[66] = "Id Pregunta: 7180. Examen TIC B 2009";


//  Id pregunta: 7258 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  El dispositivo necesario para modular la se&ntilde;al de acceso a las redes de cable TV se denomina:";
 choices[67]= new Array();
 choices[67][0] = "Cablemodem";
 choices[67][1] = "HBA (Host Bus Adapter)";
 choices[67][2] = "Splitter";
 choices[67][3] = "HDMI (High-Definition Multi-media interface)";
 answers[67] = choices[67][0];
 units[67] = "105";
 comments[67] = "Id Pregunta: 7258. Examen TIC B 2009";


//  Id pregunta: 7787 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)   Considere un sistema operativo Windows con memoria virtual paginada. Indique qu&eacute; aseveraci&oacute;n es cierta:";
 choices[68]= new Array();
 choices[68][0] = " El tama&ntilde;o de la tabla de p&aacute;ginas es directamente proporcional al tama&ntilde;o de la p&aacute;gina.";
 choices[68][1] = " El sistema operativo no puede modificar las tablas de p&aacute;ginas de un proceso.";
 choices[68][2] = " El tama&ntilde;o de la memoria virtual est&aacute; determinado, entre otros, por el tama&ntilde;o de la direcci&oacute;n del procesador.";
 choices[68][3] = " Los fallos de p&aacute;gina son tratados por el hardware.";
 answers[68] = choices[68][2];
 units[68] = "NULL";
 comments[68] = "Id Pregunta: 7787. Map 2005";


//  Id pregunta: 7926 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)   &iquest;Cu&aacute;l de las siguientes afirmaciones NO es cierta?";
 choices[69]= new Array();
 choices[69][0] = " La aplicaci&oacute;n WINE es un emulador que permite ejecutar aplicaciones Windows en un entorno de software libre Linux.";
 choices[69][1] = " El entorno de escritorio KDE no utiliza CORBA como arquitectura de comunicaciones entre procesos.";
 choices[69][2] = " La biblioteca de componentes gr&aacute;ficos GTK+ se basa en las librer&iacute;as Glib, Pango y ATK.";
 choices[69][3] = " La arquitectura actual de componentes de GNOME se denomina Bonobo.";
 answers[69] = choices[69][0];
 units[69] = "NULL";
 comments[69] = "Id Pregunta: 7926. Map 2006";


//  Id pregunta: 8092 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)   &iquest;Cu&aacute;l de las siguientes afirmaciones es INCORRECTA para el programa IDABC?";
 choices[70]= new Array();
 choices[70][0] = " Es gestionado por el Comit&eacute; de Servicios Paneuropeos de Administraci&oacute;n Electr&oacute;nica (CSPAE).";
 choices[70][1] = " Se configura como el instrumento clave para llevar a cabo lo previsto en el Plan de Acci&oacute;n eEurope 2005 y sucesivos sobre el desarrollo de servicios paneuropeos.";
 choices[70][2] = " Ejecuta lo previsto en la Decisi&oacute;n 2004/387/CE del Consejo UE y PE.";
 choices[70][3] = " El proyecto complementario IDABD extiende esta normativa a particulares y empresas.";
 answers[70] = choices[70][3];
 units[70] = "NULL";
 comments[70] = "Id Pregunta: 8092. Map 2008";


//  Id pregunta: 8109 AÃ±o de creación de pregunta: 2010-01-01
 questions[71]= "72)   Un Data Warehouse es:";
 choices[71]= new Array();
 choices[71][0] = " Una colecci&oacute;n de datos invariante en el tiempo y no vol&aacute;til.";
 choices[71][1] = " Una colecci&oacute;n de datos orientado a temas, integrados, fijos en el tiempo y no vol&aacute;tiles.";
 choices[71][2] = " Una colecci&oacute;n de datos cambiantes en el tiempo y vol&aacute;til.";
 choices[71][3] = " Una colecci&oacute;n de datos orientado a temas, integrados, cambiantes en el tiempo y no vol&aacute;tiles.";
 answers[71] = choices[71][3];
 units[71] = "NULL";
 comments[71] = "Id Pregunta: 8109. Map 2008";


//  Id pregunta: 8344 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l de las siguientes estructuras de datos requiere m&aacute;s capacidad de almacenamiento de informaci&oacute;n?";
 choices[72]= new Array();
 choices[72][0] = "&Aacute;rbol Binario.";
 choices[72][1] = "Lista.";
 choices[72][2] = "Lista enlazada.";
 choices[72][3] = "&Aacute;rbol-B.";
 answers[72] = choices[72][3];
 units[72] = "64";
 comments[72] = "Id Pregunta: 8344. Examen TIC A2 2010";


//  Id pregunta: 8518 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  Indicar la respuesta correcta respecto al diagrama de flujo de datos:";
 choices[73]= new Array();
 choices[73][0] = "Un proceso de control puede ser el origen de los datos pero nunca el final de los datos.";
 choices[73][1] = "El flujo de di&aacute;logo se representa por una flecha discontinua que indica la direcci&oacute;n de los datos, y que se etiqueta con un nombre representativo.";
 choices[73][2] = "Un flujo de di&aacute;logo es un flujo entre un proceso y un almac&eacute;n que representa una consulta y una actualizaci&oacute;n.";
 choices[73][3] = "Un proceso de control se encarga de coordinar y sincronizar los accesos a los almacenes de datos.";
 answers[73] = choices[73][2];
 units[73] = "86";
 comments[73] = "Id Pregunta: 8518. Examen TIC A2 2010 interna";


//  Id pregunta: 8739 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  En el &aacute;mbito de la Ley Org&aacute;nica 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal, los denominados derechos &quot;ARCO&quot; corresponden a los derechos de:";
 choices[74]= new Array();
 choices[74][0] = "Acceso, Rectificaci&oacute;n, Cancelaci&oacute;n y Oposici&oacute;n";
 choices[74][1] = "Acceso. Rectificaci&oacute;n, Coordinaci&oacute;n y Oposici&oacute;n";
 choices[74][2] = "Activaci&oacute;n. Rectificaci&oacute;n. Cancelaci&oacute;n y Oposici&oacute;n.";
 choices[74][3] = "Acceso. Repudio. Cancelaci&oacute;n y Oposici&oacute;n.";
 answers[74] = choices[74][0];
 units[74] = "29";
 comments[74] = "Id Pregunta: 8739. Examen TIC A2 2010 interna";


//  Id pregunta: 8801 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  Con relaci&oacute;n a la programaci&oacute;n en java, &iquest;como se denomina el paquete que comprende una serie de clases que permiten crear y organizar ventanas, implementar componentes gr&aacute;ficas de la interfaz, mediante eventos, dibujar textos y gr&aacute;ficos, procesar im&aacute;genes y acceder a cada sistema nativo de ventanas?";
 choices[75]= new Array();
 choices[75][0] = "WT (Window Toolkit)";
 choices[75][1] = "AWT (Abstract Window Toolkit)";
 choices[75][2] = "JWS (Java Window Set)";
 choices[75][3] = "WS (Windows Set)";
 answers[75] = choices[75][1];
 units[75] = "60";
 comments[75] = "Id Pregunta: 8801. Examen UPM A2 2011";


//  Id pregunta: 8840 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)   Los conceptos de switch zoning y LUN masking en una red de almacenamiento FC (Fiber Channel)";
 choices[76]= new Array();
 choices[76][0] = " Permiten restringir la conectividad de red entre clientes FC, y gestionar su m&aacute;scara de red din&aacute;micamente ";
 choices[76][1] = " Son utilizados en la administraci&oacute;n de rob&oacute;ticas LTO para copias de seguridad de los discos virtuales";
 choices[76][2] = " Permiten al administrador restringir la visibilidad entre clientes por puerto o WWN, as&iacute; como el acceso a un disco virtual ";
 choices[76][3] = "Ambos conceptos son incompatibles en una red FC ";
 answers[76] = choices[76][2];
 units[76] = "48";
 comments[76] = "Id Pregunta: 8840. Examen UC3M 2010";


//  Id pregunta: 8910 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  Los sistemas de cifrado sim&eacute;trico se basan en:";
 choices[77]= new Array();
 choices[77][0] = "Cifrar con la clave privada y descifrar con la clave p&uacute;blica, para garantizar la autenticidad del emisor.";
 choices[77][1] = "Cifrar con una sola clave, y no descifrar en el destino, para salvaguardar la integridad.";
 choices[77][2] = "Cifrar y descifrar con la misma clave.";
 choices[77][3] = "Cifrar con la clave p&uacute;blica y descifrar con la privada, para garantizar la confidencialidad";
 answers[77] = choices[77][2];
 units[77] = "72";
 comments[77] = "Id Pregunta: 8910. Operador Ayto. Madrid 2010";


//  Id pregunta: 9160 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  Cu&aacute;l NO es un tipo de compresi&oacute;n utilizado para el almacenamiento de informaci&oacute;n raster:";
 choices[78]= new Array();
 choices[78][0] = "Run Length Encoding (RLE)";
 choices[78][1] = "Quadtrees";
 choices[78][2] = "Tiff";
 choices[78][3] = "Wavelets";
 answers[78] = choices[78][2];
 units[78] = "67";
 comments[78] = "Id Pregunta: 9160. NULL";


//  Id pregunta: 9268 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  &iquest;C&oacute;mo se llama la conexi&oacute;n que recientemente ha lanzado Intel que supera en velocidad a USB 3.0, basada en LightPeak? ";
 choices[79]= new Array();
 choices[79][0] = "Thundercat";
 choices[79][1] = "LightFire";
 choices[79][2] = "Thunderbolt";
 choices[79][3] = "USB 4.0 ";
 answers[79] = choices[79][0];
 units[79] = "47";
 comments[79] = "Id Pregunta: 9268. Examen TICA2-2011";


//  Id pregunta: 9277 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  Indique la frase correcta acerca de las arquitecturas de microprocesadores:";
 choices[80]= new Array();
 choices[80][0] = "La arquitectura CISC es m&aacute;s moderna que la arquitectura RISC y busca ampliar el conjunto de instrucciones de &eacute;sta.";
 choices[80][1] = "La arquitectura RISC dispone de un n&uacute;mero reducido de instrucciones y gran variedad de registros de uso dedicado";
 choices[80][2] = "La arquitectura RISC maneja instrucciones con formato regular y complejos modos de direccionamiento.";
 choices[80][3] = "La arquitectura CISC dispone de instrucciones complejas y dependiendo de ellas maneja diferentes longitudes de palabra.";
 answers[80] = choices[80][3];
 units[80] = "46";
 comments[80] = "Id Pregunta: 9277. Examen TIC-A1 2011";


//  Id pregunta: 9312 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  El conjunto de las reglas generales que desarrollan las pol&iacute;ticas y que son de obligada aplicaci&oacute;n se recogen en";
 choices[81]= new Array();
 choices[81][0] = "Normativas";
 choices[81][1] = "Procedimientos";
 choices[81][2] = "Instrucciones";
 choices[81][3] = "Declaraciones de conformidad";
 answers[81] = choices[81][0];
 units[81] = "31";
 comments[81] = "Id Pregunta: 9312. ";


//  Id pregunta: 9318 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  Se&ntilde;ale la afirmaci&oacute;n verdadera";
 choices[82]= new Array();
 choices[82][0] = "El modelo organizativo en el que los auditores forman parte de los &oacute;rganos de control de la organizaci&oacute;n permite una mayor independencia";
 choices[82][1] = "El modelo organizativo en el que los auditores se integran dentro de los propios centros inform&aacute;ticos permite una mayor independencia";
 choices[82][2] = "El modelo organizativo en el que los auditores se integran dentro de los propios centros inform&aacute;ticos ofrece una implicaci&oacute;n m&aacute;s directa en las tareas destinadas a mejorar la calidad";
 choices[82][3] = "La a) y la c) son correctas";
 answers[82] = choices[82][3];
 units[82] = "31";
 comments[82] = "Id Pregunta: 9318. ";


//  Id pregunta: 9355 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  Indica cual de estas afirmaciones es cierta";
 choices[83]= new Array();
 choices[83][0] = "En RDSI igual que en RTB el descolgado del tel&eacute;fono produce un &quot;corto&quot; de tal forma que la corriente que pasa por el bucle indica a la central que el abonado ha descolgado.";
 choices[83][1] = "En RDSI el terminador de red aun siendo activo en caso de ca&iacute;da de la alimentaci&oacute;n local es capaz de establecer/mantener la conversaci&oacute;n.";
 choices[83][2] = "Los terminales que cuelgan de la RTB (Red Telef&oacute;nica B&aacute;sica) no pueden establecer ning&uacute;n tipo de comunicaci&oacute;n con los que cuelgan de la RDSI (Red Digital de Servicios Integrados).";
 choices[83][3] = "Todas las respuestas son correctas.";
 answers[83] = choices[83][1];
 units[83] = "103";
 comments[83] = "Id Pregunta: 9355. Pruebas selectivas Ingeniero de Telecomunicaci&oacute;n Ayto de Madrid 2010";


//  Id pregunta: 9455 AÃ±o de creación de pregunta: 2013-01-01
 questions[84]= "85)  Seg&uacute;n Codd, una entidad en la que todos los atributos tienen dependencia funcional completa de la clave est&aacute;, al menos, en:";
 choices[84]= new Array();
 choices[84][0] = "Primera Forma Normal.";
 choices[84][1] = "Segunda Forma Normal.";
 choices[84][2] = "Tercera Forma Normal.";
 choices[84][3] = "Forma Normal de Boyce-Codd.";
 answers[84] = choices[84][1];
 units[84] = "58";
 comments[84] = "Id Pregunta: 9455. NULL";


//  Id pregunta: 9543 AÃ±o de creación de pregunta: 2013-01-01
 questions[85]= "86)  En el contexto de la firma electr&oacute;nica y su regulaci&oacute;n en Espa&ntilde;a se&ntilde;ale la afirmaci&oacute;n FALSA.";
 choices[85]= new Array();
 choices[85][0] = "Los funcionarios al servicio de las administraciones p&uacute;blicas espa&ntilde;olas pueden firmar en el ejercicio de su cargo utilizando su DNI electr&oacute;nico.";
 choices[85][1] = "Los c&oacute;digos de verificaci&oacute;n segura (CSV) junto con los sellos de &oacute;rgano sirven para dotar de firma electr&oacute;nica reconocida a la actuaci&oacute;n administrativa automatizada.";
 choices[85][2] = "Un dispositivo seguro de creaci&oacute;n de firma debe garantizar que los datos usados para generar la firma pueden producirse s&oacute;lo una vez.";
 choices[85][3] = "Un certificado electr&oacute;nico reconocido ha de incluir la firma electr&oacute;nica avanzada del prestador de servicios de certificaci&oacute;n que lo expide.";
 answers[85] = choices[85][1];
 units[85] = "30";
 comments[85] = "Id Pregunta: 9543. Examen TIC A1 2011";


//  Id pregunta: 9626 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l de las siguientes aplicaciones, incluida en KOffice, se emplea para generaci&oacute;n de informes?";
 choices[86]= new Array();
 choices[86][0] = "Kexi.";
 choices[86][1] = "Kivio.";
 choices[86][2] = "Konqueror.";
 choices[86][3] = "Kugar.";
 answers[86] = choices[86][3];
 units[86] = "62";
 comments[86] = "Id Pregunta: 9626. Examen TIC A1 2013";


//  Id pregunta: 9650 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  FAN-OUT es una medida de:";
 choices[87]= new Array();
 choices[87][0] = "Complejidad";
 choices[87][1] = "Reutilizaci&oacute;n";
 choices[87][2] = "Mantenibilidad";
 choices[87][3] = "Ninguna de las anteriores.";
 answers[87] = choices[87][0];
 units[87] = "89";
 comments[87] = "Id Pregunta: 9650. N&uacute;mero de clases que utiliza la clase que estamos estudiando.";


//  Id pregunta: 9655 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  El sistema operativo OS X de Apple se llama:";
 choices[88]= new Array();
 choices[88][0] = "Maverick";
 choices[88][1] = "Mavericks";
 choices[88][2] = "Cocoa";
 choices[88][3] = "Kit Kat";
 answers[88] = choices[88][1];
 units[88] = "56";
 comments[88] = "Id Pregunta: 9655. Maverick es el framework de java para desarrollo web";


//  Id pregunta: 9753 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  &iquest;Qu&eacute; es el &quot;Data staging area&quot; en el contexto de los Data Warehouses?";
 choices[89]= new Array();
 choices[89][0] = "Es un almac&eacute;n previo de datos y sus procesos asociados, en el que se extraen los datos de las fuentes, se transforman y se adaptan antes de ser cargados en el almac&eacute;n de datos.";
 choices[89][1] = "Durante la fase de dise&ntilde;o de un almac&eacute;n de datos, es la base de datos no permanente usada para ensayar, demostrar y estudiar el rendimiento de los dise&ntilde;os propuestos.";
 choices[89][2] = "Es el &aacute;rea del almac&eacute;n (conceptual o f&iacute;sicamente separada en otra base de datos) donde se cachean las consultas preparadas, cuando &eacute;stas no pueden ejecutarse en tiempo real.";
 choices[89][3] = "Es una copia id&eacute;ntica de las bases de datos originales, cuando en ellas existe mucha carga y no es posible bloquearlas para asegurar la integridad referencial al copiar los datos.";
 answers[89] = choices[89][0];
 units[89] = "68";
 comments[89] = "Id Pregunta: 9753. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9802 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l es el &aacute;mbito del Registro Electr&oacute;nico Com&uacute;n?";
 choices[90]= new Array();
 choices[90][0] = "Todas las Administraciones P&uacute;blicas.";
 choices[90][1] = "La Administraci&oacute;n General del Estado y la Administraci&oacute;n Auton&oacute;mica. ";
 choices[90][2] = "La Administraci&oacute;n General del Estado y los Organismos P&uacute;blicos adscritos o dependientes de la misma. ";
 choices[90][3] = "La Secretaria de Estado de Administraciones P&uacute;blicas, como responsable de su gesti&oacute;n.";
 answers[90] = choices[90][2];
 units[90] = "44";
 comments[90] = "Id Pregunta: 9802. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9808 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  Se&ntilde;alar el nombre de la aplicaci&oacute;n de generaci&oacute;n de copia aut&eacute;ntica en papel de documentos con firma electr&oacute;nica y de justificantes de firma electr&oacute;nica, que el Ministerio de Hacienda y AAPP ofrece en modelo federado:";
 choices[91]= new Array();
 choices[91][0] = "STORK";
 choices[91][1] = "eDocument";
 choices[91][2] = "eSign";
 choices[91][3] = "eVisor";
 answers[91] = choices[91][3];
 units[91] = "44";
 comments[91] = "Id Pregunta: 9808. Examen TIC-A2 2013-Libre";


//  Id pregunta: 10057 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  El algoritmo SHA-1 (RFC 3174) produce un resumen de salida de:";
 choices[92]= new Array();
 choices[92][0] = "128 bits ";
 choices[92][1] = "160 bits";
 choices[92][2] = "224 bits ";
 choices[92][3] = "256 bits";
 answers[92] = choices[92][1];
 units[92] = "72";
 comments[92] = "Id Pregunta: 10057. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10148 AÃ±o de creación de pregunta: 2014-01-01
 questions[93]= "94)  En relaci&oacute;n a las Comunicaciones comerciales por v&iacute;a electr&oacute;nica reguladas por la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico, Cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[93]= new Array();
 choices[93][0] = "Las comunicaciones comerciales realizadas por v&iacute;a electr&oacute;nica deber&aacute;n ser claramente identificables como tales y la persona f&iacute;sica o jur&iacute;dica en nombre de la cual se realizan tambi&eacute;n deber&aacute; ser claramente identificable.";
 choices[93][1] = "En el caso en el que tengan lugar a trav&eacute;s de correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nica equivalente incluir&aacute;n al comienzo del mensaje la palabra ''publicidad'' o la abreviatura ''publi''";
 choices[93][2] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nica equivalente que previamente no hubieran sido solicitadas o expresamente autorizadas por los destinatarios de las mismas.";
 choices[93][3] = "Lo dispuesto en el apartado anterior no ser&aacute; de aplicaci&oacute;n cuando exista una relaci&oacute;n contractual previa, siempre que el prestador hubiera obtenido de forma l&iacute;cita los datos de contacto del destinatario y los empleara para el env&iacute;o de comunicaciones comerciales referentes a productos o servicios de su propia empresa que sean similares a los que inicialmente fueron objeto de contrataci&oacute;n con el cliente.";
 answers[93] = choices[93][1];
 units[93] = "30";
 comments[93] = "Id Pregunta: 10148. ";


//  Id pregunta: 10162 AÃ±o de creación de pregunta: 2014-01-01
 questions[94]= "95)  Un dominio en un modelo relacional&hellip;";
 choices[94]= new Array();
 choices[94][0] = "Puede definirse por intensi&oacute;n, es decir, especificando tipo de datos y restricciones";
 choices[94][1] = "Es un conjunto nominado, infinito y homog&eacute;neo de valores at&oacute;micos";
 choices[94][2] = "S&oacute;lo puede definirse por extensi&oacute;n o enumeraci&oacute;n de los posibles valores del dominio";
 choices[94][3] = "Todas las anteriores";
 answers[94] = choices[94][0];
 units[94] = "58";
 comments[94] = "Id Pregunta: 10162. ";


//  Id pregunta: 10243 AÃ±o de creación de pregunta: 2014-01-01
 questions[95]= "96)  Dentro del archivo struts-config existe el atributo &lt;exception&gt;, puedes se&ntilde;alar la respuesta correcta que explica la funci&oacute;n del elemento scope:";
 choices[95]= new Array();
 choices[95][0] = "El alcance del Objeto ActionError relativo al m&oacute;dulo o aplicaci&oacute;n web";
 choices[95][1] = "El contexto que se usa para acceder al objeto ActionError para esta Exception";
 choices[95][2] = "Resuelve el nombre del manejador de excepiones de la clase Java";
 choices[95][3] = "Hace referencia a la clase Java registrada para manejar estas excepciones";
 answers[95] = choices[95][1];
 units[95] = "116";
 comments[95] = "Id Pregunta: 10243. NULL";


//  Id pregunta: 10465 AÃ±o de creación de pregunta: 2014-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l no es una nueva caracter&iacute;stica de HTML5?";
 choices[96]= new Array();
 choices[96][0] = "Nuevos elementos sem&aacute;nticos.";
 choices[96][1] = "Fuerte soporte a gr&aacute;ficos con &lt;canvas&gt; y &lt;svg&gt;.";
 choices[96][2] = "Fuerte soporte multimedia.";
 choices[96][3] = "Nuevos elementos para soporte a la accesibilidad web.";
 answers[96] = choices[96][3];
 units[96] = "69";
 comments[96] = "Id Pregunta: 10465. NULL";


//  Id pregunta: 10637 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Qu&eacute; es el fan-out en dise&ntilde;o estructurado?";
 choices[97]= new Array();
 choices[97][0] = "El grado de acoplamiento externo.";
 choices[97][1] = "El n&uacute;mero de subordinados inmediatos de un m&oacute;dulo.";
 choices[97][2] = "El grado de absorci&oacute;n.";
 choices[97][3] = "El n&uacute;mero de superiores inmediatos de un m&oacute;dulo.";
 answers[97] = choices[97][1];
 units[97] = "84";
 comments[97] = "Id Pregunta: 10637. ";


//  Id pregunta: 10965 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  En relaci&oacute;n con el modelo de gobernanza en el &aacute;mbito de las TIC de la Administraci&oacute;n General del Estado, y respecto a los medios y servicios de uso compartido es correcto que:";
 choices[98]= new Array();
 choices[98][0] = "Los medios y servicios TIC ser&aacute;n declarados de uso compartido cuando, en raz&oacute;n de su naturaleza o del inter&eacute;s com&uacute;n, respondan a necesidades transversales de los ciudadanos.";
 choices[98][1] = "La utilizaci&oacute;n de los medios y servicios compartidos ser&aacute; de car&aacute;cter obligatorio y sustitutivo respecto a los medios y servicios particulares empleados por las distintas unidades.";
 choices[98][2] = "Las Comisiones Ministeriales de Administraci&oacute;n Digital (CMAD) velar&aacute;n por el uso de los medios y servicios compartidos. En este sentido, cuando las necesidades puedan ser comunes a varias unidades de diferentes Ministerios, se escoger&aacute; la alternativa que permita independizar el servicio entre los Departamentos.";
 choices[98][3] = "Los activos TIC afectos a la prestaci&oacute;n de servicios sectoriales deber&aacute;n migrarse a los medios y servicios compartidos.";
 answers[98] = choices[98][1];
 units[98] = "44";
 comments[98] = "Id Pregunta: 10965. TIC A1 AGE 2014";


//  Id pregunta: 11598 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  El derecho y obligaci&oacute;n de relacionarse electr&oacute;nicamente con las Administraciones P&uacute;blicas se recoge en la Ley 39/2015 en el: ";
 choices[99]= new Array();
 choices[99][0] = "Art&iacute;culo 4";
 choices[99][1] = "Art&iacute;culo 6";
 choices[99][2] = "Art&iacute;culo 10";
 choices[99][3] = "Art&iacute;culo 14";
 answers[99] = choices[99][3];
 units[99] = "43";
 comments[99] = "Id Pregunta: 11598. ";


