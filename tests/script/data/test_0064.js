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

//  Id pregunta: 31 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto a la auditor&iacute;a?:";
 choices[0]= new Array();
 choices[0][0] = "Independientemente del tipo de auditor&iacute;a inform&aacute;tica que pretenda realizarse, la finalidad &uacute;ltima es emitir un juicio acerca del estado de los sistemas";
 choices[0][1] = "Del fin de la auditor&iacute;a habr&aacute;n de obtenerse los medios y las acciones de investigaci&oacute;n que se estimen necesarios para su consecuci&oacute;n";
 choices[0][2] = "La auditor&iacute;a siempre recomendar&aacute; la toma de acciones correctivas, independientemente del examen de situaci&oacute;n realizado";
 choices[0][3] = "Cuando la tarea del auditor sea muy compleja, se llevar&aacute; a cabo una divisi&oacute;n de funciones de forma arborescente";
 answers[0] = choices[0][2];
 units[0] = "31,32,33";
 comments[0] = "Id Pregunta: 31. ";


//  Id pregunta: 252 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  Entre las organizaciones cuya misi&oacute;n es alertar frente a las diferentes vulnerabilidades que presenten los productos de tecnolog&iacute;as de la informaci&oacute;n, se encuentra:";
 choices[1]= new Array();
 choices[1][0] = "CNN-CERT";
 choices[1][1] = "SANS";
 choices[1][2] = "W3C";
 choices[1][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son correctas";
 answers[1] = choices[1][3];
 units[1] = "42";
 comments[1] = "Id Pregunta: 252. ";


//  Id pregunta: 394 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  Para la determinaci&oacute;n del rendimiento de un sistema inform&aacute;tico:";
 choices[2]= new Array();
 choices[2][0] = "El tiempo de presencia es el que transcurre desde el instante en que un programa entra en el sistema hasta que la respuesta empieza a aparecer en el terminal";
 choices[2][1] = "El solapamiento (overlap) es el porcentaje de tiempo de CPU en que la CPU atiende al sistema operativo y a las funciones de supervisi&oacute;n y no a las funciones de usuario";
 choices[2][2] = "La capacidad de un recurso es el porcentaje de tiempo durante el cual est&aacute; a disposici&oacute;n de los usuarios";
 choices[2][3] = "La disponibilidad se puede cuantificar por medio de los valores del MTBF (tiempo medio entre fallos) y del MTTR (tiempo medio de reparaciones)";
 answers[2] = choices[2][3];
 units[2] = "35";
 comments[2] = "Id Pregunta: 394. NULL";


//  Id pregunta: 945 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  Bill Inmon, padre del Data Warehousing, define &eacute;ste como:";
 choices[3]= new Array();
 choices[3][0] = "Una colecci&oacute;n de datos orientada a materias, integrada, no vol&aacute;til y variante en el tiempo, destinada a ayudar a la toma de decisiones de gesti&oacute;n.";
 choices[3][1] = "Un sistema autom&aacute;tico de ayuda a la decisi&oacute;n que implanta la teor&iacute;a de la decisi&oacute;n multicriterio discreta.";
 choices[3][2] = "Una secuencia convergente de refinamientos sobre un conjunto diverso de soluciones a un problema de gesti&oacute;n.";
 choices[3][3] = "Ninguna de las afirmaciones anteriores es correcta.";
 answers[3] = choices[3][0];
 units[3] = "68";
 comments[3] = "Id Pregunta: 945. ";


//  Id pregunta: 1152 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  En una operaci&oacute;n de grabaci&oacute;n sobre una cinta magn&eacute;tica:";
 choices[4]= new Array();
 choices[4][0] = "Se escribe un car&aacute;cter";
 choices[4][1] = "Se escribe un bloque";
 choices[4][2] = "Se lee un dato";
 choices[4][3] = "Se escribe un registro l&oacute;gico";
 answers[4] = choices[4][1];
 units[4] = "48";
 comments[4] = "Id Pregunta: 1152. ";


//  Id pregunta: 1234 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  La multiprogramaci&oacute;n y el tiempo compartido, en los sistemas operativos, ocasionan:";
 choices[5]= new Array();
 choices[5][0] = "Que haya que crear mecanismos de seguridad como cortafuegos y sistemas de alimentaci&oacute;n ininterrumpida";
 choices[5][1] = "Que haya que crear mecanismos de protecci&oacute;n de injerencias entre diversos trabajos simult&aacute;neos, y entre diversos usuarios que quieran acceder a archivos o recursos como la impresora o los discos";
 choices[5][2] = "Que haya que comprobar al apagar el ordenador si a&uacute;n no han cerrado su sesi&oacute;n todos los usuarios";
 choices[5][3] = "Que haya que crear sistemas de protecci&oacute;n del monitor para evitar ataques no autorizados";
 answers[5] = choices[5][1];
 units[5] = "52";
 comments[5] = "Id Pregunta: 1234. ";


//  Id pregunta: 1323 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  RSA es: ";
 choices[6]= new Array();
 choices[6][0] = "Un algoritmo criptogr&aacute;fico";
 choices[6][1] = "Un mecanismo de intercambio de claves";
 choices[6][2] = "Una infraestructura de clave p&uacute;blica (PKI))";
 choices[6][3] = "Una funcion resumen";
 answers[6] = choices[6][0];
 units[6] = "72";
 comments[6] = "Id Pregunta: 1323. ";


//  Id pregunta: 1340 AÃ±o de creación de pregunta: 2009-01-01
 questions[7]= "8)  Se&ntilde;alar cu&aacute;l de las siguientes no es una operaci&oacute;n anal&iacute;tica b&aacute;sica en un sistema OLAP:";
 choices[7]= new Array();
 choices[7][0] = "Actualizaci&oacute;n.";
 choices[7][1] = "Agregaci&oacute;n.";
 choices[7][2] = "Dril-down.";
 choices[7][3] = "Slice-Dice.";
 answers[7] = choices[7][0];
 units[7] = "68";
 comments[7] = "Id Pregunta: 1340. ";


//  Id pregunta: 1424 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Una relaci&oacute;n se dice que est&aacute; en tercera forma normal (3FN) de Boyce y Codd si:";
 choices[8]= new Array();
 choices[8][0] = "Est&aacute; en primera forma normal y adem&aacute;s cualquiera de sus atributos no primarios tienen una dependencia plena con cada una de las claves";
 choices[8][1] = "No contiene dependendencias multievaluadas";
 choices[8][2] = "Ninguno de sus atributos no primarios tiene dependencias transitivas respecto de las claves";
 choices[8][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[8] = choices[8][3];
 units[8] = "58";
 comments[8] = "Id Pregunta: 1424. ";


//  Id pregunta: 1566 AÃ±o de creación de pregunta: 2003-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l no es una caracter&iacute;stica de la Huella Digital?";
 choices[9]= new Array();
 choices[9][0] = "Dos mensajes iguales producen la misma huella digital";
 choices[9][1] = "Conocido un mensaje M1 y su resumen R, ser&aacute; computacionalmente imposible encontrar otro mensaje M2 cuyo resumen sea tambi&eacute;n R";
 choices[9][2] = " Dos mensajes parecidos producen huellas digitales diferentes";
 choices[9][3] = " La funci&oacute;n hash es reversible";
 answers[9] = choices[9][3];
 units[9] = "73";
 comments[9] = "Id Pregunta: 1566. ";


//  Id pregunta: 1629 AÃ±o de creación de pregunta: 2003-01-01
 questions[10]= "11)  Sobre el entorno WINE de Linux se puede decir que:";
 choices[10]= new Array();
 choices[10][0] = "Es un emulador de Windows";
 choices[10][1] = "Es una implementaci&oacute;n de c&oacute;digo fuente abierto de la API de Windows que funciona sobre una plataforma X11";
 choices[10][2] = "Permite ejecutar todas las aplicaciones de Windows 32 sobre Linux";
 choices[10][3] = "Es un sistema de gesti&oacute;n de ventanas para Linux con la apariencia de Windows";
 answers[10] = choices[10][1];
 units[10] = "62";
 comments[10] = "Id Pregunta: 1629. ";


//  Id pregunta: 1750 AÃ±o de creación de pregunta: 2006-01-01
 questions[11]= "12)  qu&eacute; es JDBC";
 choices[11]= new Array();
 choices[11][0] = "un modelo de objetos ActiveX";
 choices[11][1] = "Una interfaz a nivel de llamadas (CLI) dise&ntilde;ada para programas escritos en C";
 choices[11][2] = "Un controlador de planificaci&oacute;n de procesos en monitores transaccionales (Job Database Control).";
 choices[11][3] = "Una interfaz de programaci&oacute;n de aplicaciones (API) Java para ejecutar sentencias SQL.";
 answers[11] = choices[11][3];
 units[11] = "58";
 comments[11] = "Id Pregunta: 1750. ";


//  Id pregunta: 1883 AÃ±o de creación de pregunta: 2006-01-01
 questions[12]= "13)  De acuerdo a la ley 34/2002, se&ntilde;ale la falsa:";
 choices[12]= new Array();
 choices[12][0] = "Por la comisi&oacute;n de infracciones muy graves, multa de 150.001 hasta 600.000 euros. ";
 choices[12][1] = "Por la comisi&oacute;n de infracciones graves, multa de 30.001 hasta 150.000 euros";
 choices[12][2] = "Por la comisi&oacute;n de infracciones leves, multa de hasta 30.000 euros.";
 choices[12][3] = "La primera es falsa";
 answers[12] = choices[12][3];
 units[12] = "30";
 comments[12] = "Id Pregunta: 1883. Ley 34/2002, art&iacute;culo 39";


//  Id pregunta: 1888 AÃ±o de creación de pregunta: 2006-01-01
 questions[13]= "14)  Se&ntilde;ale la afirmaci&oacute;n verdadera:";
 choices[13]= new Array();
 choices[13][0] = "Una copia de seguridad diaria incluye todos los archivos seleccionados que se hayan modificado, desactivando el atributo de modificado";
 choices[13][1] = "Una copia de seguridad intermedia incluye todos los archivos pero no los marca individualmente como copiados (es decir, no desactiva el atributo de modificado)";
 choices[13][2] = "Una copia de seguridad diferencial s&oacute;lo copia los archivos creados o modificados desde la &uacute;ltima copia de seguridad normal o incremental";
 choices[13][3] = "Ninguna de las anteriores";
 answers[13] = choices[13][1];
 units[13] = "97";
 comments[13] = "Id Pregunta: 1888. NULL";


//  Id pregunta: 1949 AÃ±o de creación de pregunta: 2006-01-01
 questions[14]= "15)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones sobre el paquete javax.microedition.lcdui de J2ME es cierta";
 choices[14]= new Array();
 choices[14][0] = "Es un subconjunto del paquete Swing de J2SE";
 choices[14][1] = "Define las aplicaciones MIDP y su comportamiento con respecto al entorno de ejecuci&oacute;n";
 choices[14][2] = "Proporciona clases asociadas a la gesti&oacute;n del ciclo de vida de las MIDLETS";
 choices[14][3] = "Proporciona clases para el desarrollo de elementos gr&aacute;ficos de la API MIDP para entornos m&oacute;viles";
 answers[14] = choices[14][3];
 units[14] = "60";
 comments[14] = "Id Pregunta: 1949. NULL";


//  Id pregunta: 2146 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  &iquest;Cu&aacute;l de los siguientes es un objetivo de la Historia de la Vida de las Entidades (HVE) dentro del an&aacute;lisis estructurado?:";
 choices[15]= new Array();
 choices[15][0] = "Obtener un registro de la secuencia de los cambios de las entidades con el tiempo";
 choices[15][1] = "Establecer los estados posibles de las entidades para que tengan lugar transacciones externas, as&iacute; como los cambios de estado de las entidades originadas por dichas transacciones";
 choices[15][2] = "Los dos anteriores son objetivos de la HVE";
 choices[15][3] = "Todas las anteriores respuestas son falsas";
 answers[15] = choices[15][2];
 units[15] = "81";
 comments[15] = "Id Pregunta: 2146. ";


//  Id pregunta: 2364 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Entre los factores de calidad del software que McCall identific&oacute; para la fase de explotaci&oacute;n podemos destacar:";
 choices[16]= new Array();
 choices[16][0] = "Fiabilidad, correcci&oacute;n, integridad, eficiencia y usabilidad";
 choices[16][1] = "Fiabilidad, flexibilidad y portabilidad";
 choices[16][2] = "Mantenibilidad, seguridad, flexibilidad y eficiencia";
 choices[16][3] = "Todos los anteriores";
 answers[16] = choices[16][0];
 units[16] = "87.88";
 comments[16] = "Id Pregunta: 2364. NULL";


//  Id pregunta: 2445 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Las metodolog&iacute;as:";
 choices[17]= new Array();
 choices[17][0] = "Definen el conjunto de elementos del mundo real que intervienen en el sistema y son modelizables";
 choices[17][1] = "Emplean formalismos gr&aacute;ficos para derivar los procedimientos y recursos";
 choices[17][2] = "Emplean t&eacute;cnicas de auditor&iacute;a como fuente de integraci&oacute;n de prototipos";
 choices[17][3] = "Existen dos enfoques: en los m&eacute;todos aqu&eacute;llos que se orientan hacia los datos y aquellos que se orientan hacia los tratamientos";
 answers[17] = choices[17][3];
 units[17] = "79";
 comments[17] = "Id Pregunta: 2445. ";


//  Id pregunta: 2456 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Los diagramas de flujos de datos son una de las t&eacute;cnicas utilizadas en la metodolog&iacute;a METRICA cuyo objetivo es construir un modelo l&oacute;gico del sistema que facilite la comprensi&oacute;n del mismo. Indique la respuesta que incluye los elementos utilizados en esa t&eacute;cnica:";
 choices[18]= new Array();
 choices[18][0] = "Atributos, relaciones y entidades";
 choices[18][1] = "Entidades externas al sistema, procesos y almacenes de datos";
 choices[18][2] = "Entradas, funciones de transformaci&oacute;n y salidas";
 choices[18][3] = "Niveles, diagramas y objetos";
 answers[18] = choices[18][1];
 units[18] = "86";
 comments[18] = "Id Pregunta: 2456. NULL";


//  Id pregunta: 2680 AÃ±o de creación de pregunta: 2003-01-01
 questions[19]= "20)  Indique la afirmaci&oacute;n falsa para un Sistema de Gesti&oacute;n de Contenidos:";
 choices[19]= new Array();
 choices[19][0] = "A lo largo de todo el proceso resulta vital contar con el apoyo de la Direcci&oacute;n.";
 choices[19][1] = "Nunca existe una parte p&uacute;blica, de posible acceso mediante registro.";
 choices[19][2] = "Alg&uacute;n grupo de trabajo t&eacute;cnicos se deber&iacute;a orientar hacia la elaboraci&oacute;n de herramientas que faciliten la migraci&oacute;n de contenidos desde el sistema antiguo hacia el sistema nuevo.";
 choices[19][3] = "El dise&ntilde;o de un buen sistema de categorizaci&oacute;n de contenidos resulta una actividad central en la creaci&oacute;n de un SGC.";
 answers[19] = choices[19][1];
 units[19] = "95";
 comments[19] = "Id Pregunta: 2680. NULL";


//  Id pregunta: 2718 AÃ±o de creación de pregunta: 2006-01-01
 questions[20]= "21)  En el modelo de ciclo de vida en espiral:";
 choices[20]= new Array();
 choices[20][0] = "La dimensi&oacute;n radial indica los costes y la angular el progreso";
 choices[20][1] = "La dimensi&oacute;n angular indica los costes y la radial el progreso";
 choices[20][2] = "La dimensi&oacute;n lineal indica los costes y la angular el progreso";
 choices[20][3] = "La dimensi&oacute;n radial indica los costes y la angular el riesgo";
 answers[20] = choices[20][0];
 units[20] = "76";
 comments[20] = "Id Pregunta: 2718. ";


//  Id pregunta: 2872 AÃ±o de creación de pregunta: 2006-01-01
 questions[21]= "22)  Indique cu&aacute;l de las siguientes alternativas corresponde a los procesos principales de que consta la metodolog&iacute;a METRICA  ver. 3";
 choices[21]= new Array();
 choices[21][0] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n, Desarrollo de Sistemas de Informaci&oacute;n y Mantenimiento de Sistemas de Informaci&oacute;n";
 choices[21][1] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n, Estudio de viabilidad de  Sistemas de Informaci&oacute;n, Desarrollo  de Sistemas de Informaci&oacute;n e Implantaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[21][2] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n, An&aacute;lisis de Sistemas de Informaci&oacute;n, Construcci&oacute;n e Implantaci&oacute;n de  Sistemas de Informaci&oacute;n y Mantenimiento de Sistemas de Informaci&oacute;n";
 choices[21][3] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n, Desarrollo de Sistemas de Informaci&oacute;n e Implantaci&oacute;n de Sistemas de Informaci&oacute;n";
 answers[21] = choices[21][0];
 units[21] = "86";
 comments[21] = "Id Pregunta: 2872. NULL";


//  Id pregunta: 2957 AÃ±o de creación de pregunta: 2004-01-01
 questions[22]= "23)  Dada la direcci&oacute;n IP 00001010.00000001.10000001.10000001 con m&aacute;scara de subred 11111111.11111111.11111111.11000000. Indique cu&aacute;l es, en binario, la direcci&oacute;n IP resultante de aplicar la operaci&oacute;n l&oacute;gica correspondiente entre ambas para calcular la subred ";
 choices[22]= new Array();
 choices[22][0] = "00001010.00000001.10000001.10000000";
 choices[22][1] = "00001010.00000001.10000001.00000000";
 choices[22][2] = "00001010.00000001.00000000.00000001";
 choices[22][3] = "00001010.00000001.10000001.11000000";
 answers[22] = choices[22][0];
 units[22] = "100";
 comments[22] = "Id Pregunta: 2957. Examen TIC MAP B 2004";


//  Id pregunta: 3281 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  &iquest;Qu&eacute; es el jitter?";
 choices[23]= new Array();
 choices[23][0] = "un dispositivo similar al router pero con mayor inteligencia a la hora de enrutar los paquetes";
 choices[23][1] = "la variabilidad del retardo en la transmisi&oacute;n de informaci&oacute;n por una red";
 choices[23][2] = "un envoltorio software a modo de cortafuegos que se instala sobre protocolos conocidos como TCP o FTP";
 choices[23][3] = "un hacker que se dedica a desenmascarar en la red a otros hackers";
 answers[23] = choices[23][1];
 units[23] = "109";
 comments[23] = "Id Pregunta: 3281. ";


//  Id pregunta: 3368 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Dentro de los medios f&iacute;sicos de transmisi&oacute;n de informaci&oacute;n, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?:";
 choices[24]= new Array();
 choices[24][0] = "Con rayo laser se pueden obtener anchos de banda del orden de 1 Ghz";
 choices[24][1] = "La conducci&oacute;n en fibra &oacute;ptica se realiza cuando el &iacute;ndicede refracci&oacute;n del vidrio del n&uacute;cleo es ligeramente inferir al de la cubierta";
 choices[24][2] = "Una guiaonda es similar a un coaxial en cuanto a banda de frecuencias en que se utiliza";
 choices[24][3] = "Los radioenlaces de microondas pueden asimilarse a un cable coxial f&iacute;sico";
 answers[24] = choices[24][2];
 units[24] = "99";
 comments[24] = "Id Pregunta: 3368. ";


//  Id pregunta: 3397 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  El nivel f&iacute;sico incorpora un mecanismo de deteccion de canal libre que se denomina dentro de la especificaci&oacute;n 802.11:";
 choices[25]= new Array();
 choices[25][0] = "Carrier Detection";
 choices[25][1] = "Clear Channel Assessment";
 choices[25][2] = "Channel Check";
 choices[25][3] = "Carrier Assesment";
 answers[25] = choices[25][1];
 units[25] = "107";
 comments[25] = "Id Pregunta: 3397. NULL";


//  Id pregunta: 3472 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  El servivio TMA, implantado por Telef&oacute;nica a principios de los a&ntilde;os 80, se basaba en tecnolog&iacute;a:";
 choices[26]= new Array();
 choices[26][0] = "TACS";
 choices[26][1] = "AMPS";
 choices[26][2] = "ETACS";
 choices[26][3] = "NMT";
 answers[26] = choices[26][3];
 units[26] = "108";
 comments[26] = "Id Pregunta: 3472. ";


//  Id pregunta: 3561 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  En UMTS un terminal puede comunicarse simult&aacute;neamente a trav&eacute;s de dos celdas diferentes. Esto:";
 choices[27]= new Array();
 choices[27][0] = "Es cierto tambi&eacute;n en GSM";
 choices[27][1] = "Es cierto tambi&eacute;n en GPRS";
 choices[27][2] = "Es cierto s&oacute;lo en UMTS";
 choices[27][3] = "Ninguna de las anteriores";
 answers[27] = choices[27][2];
 units[27] = "108";
 comments[27] = "Id Pregunta: 3561. Handover soft/softer";


//  Id pregunta: 3727 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Los m&eacute;todos de control de acceso al medio de transmisi&oacute;n en las redes de &aacute;rea local describen las reglas que gobiernan cu&aacute;ndo los dispositivos est&aacute;n autorizados a transmitir, evit&aacute;ndose as&iacute; las colisiones.  Estos m&eacute;todos son:";
 choices[28]= new Array();
 choices[28][0] = "CSMA/CD y CSMA/CA";
 choices[28][1] = "Selecci&oacute;n o encuesta (&ldquo;polling&rdquo;), contienda o contenci&oacute;n y reserva o paso de testigo (&ldquo;token passing&rdquo;)";
 choices[28][2] = "Ethernet, IEEE 802.3 y IEEE 802.5";
 choices[28][3] = "Bus, &aacute;rbol y anillo";
 answers[28] = choices[28][1];
 units[28] = "101";
 comments[28] = "Id Pregunta: 3727. ";


//  Id pregunta: 3775 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  Por B.E.R. entendemos:";
 choices[29]= new Array();
 choices[29][0] = "Basic Encoding Rules, reglas de codificaci&oacute;n b&aacute;sicas usadas en la definici&oacute;n de datos mediante ASN.1";
 choices[29][1] = "Binary Error Rate, tasa de error binaria que define la adecuaci&oacute;n de los canales de transmisi&oacute;n";
 choices[29][2] = "Las 2 respuestas anteriores son correctas";
 choices[29][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[29] = choices[29][2];
 units[29] = "101";
 comments[29] = "Id Pregunta: 3775. ";


//  Id pregunta: 3894 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  En un servicio primario RDSI se pueden constituir los siguientes canales:";
 choices[30]= new Array();
 choices[30][0] = "30 canales de voz o datos tipo B de 64 Kbps cada uno y un canal de se&ntilde;alizaci&oacute;n tipo D a 64 Kbps.";
 choices[30][1] = "30 canales de voz o datos tipo B de 64 Kbps cada uno y 2 canales de se&ntilde;alizaci&oacute;n tipo D a 16 Kbps.";
 choices[30][2] = " 32 canales de voz o datos tipo B de 64 Kbps cada uno y un canal de se&ntilde;alizaci&oacute;n tipo D a 64 Kbps.";
 choices[30][3] = "32 canales de voz o datos tipo B de 64 Kbps cada uno y 2 canales de se&ntilde;alizaci&oacute;n tipo D a 16 Kbps.";
 answers[30] = choices[30][0];
 units[30] = "103";
 comments[30] = "Id Pregunta: 3894. Junta Andaluc&iacute;a";


//  Id pregunta: 3935 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  &iquest;Qu&eacute; es cierto, en los diagramas de clases?";
 choices[31]= new Array();
 choices[31][0] = "Los atributos se representan debajo  en la caja de representaci&oacute;n de la clase ";
 choices[31][1] = "Las interfaces se representan mediante carpetas";
 choices[31][2] = "Los atributos se representan en medio  en la caja de representaci&oacute;n de la clase";
 choices[31][3] = "Los atributos se representan  en la zona superior de representaci&oacute;n de la clase";
 answers[31] = choices[31][0];
 units[31] = "82";
 comments[31] = "Id Pregunta: 3935. ";


//  Id pregunta: 3987 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  Se&ntilde;ale la afirmaci&oacute;n verdadera acerca de la Multiplexaci&oacute;n CWDM:";
 choices[32]= new Array();
 choices[32][0] = "El plan de longitudes de onda define 18, pero s&oacute;lo son &uacute;tiles 16.";
 choices[32][1] = "La separaci&oacute;n entre longitudes de onda es de 50 nm y la m&aacute;xima distancia alcanza los 100 km si se emplean todos los canales.";
 choices[32][2] = "Las conexiones simult&aacute;neas que pueden transmitirse en una fibra &oacute;ptica tienen que cumplir el mismo protocolo a fin de impedir la interferencia entre canales.";
 choices[32][3] = "Puede transportar ATM, pero es incompatible con Gigabit Ethernet";
 answers[32] = choices[32][0];
 units[32] = "101";
 comments[32] = "Id Pregunta: 3987. ";


//  Id pregunta: 3997 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  Con respecto al est&aacute;ndar DOCSIS 1.1 (Data over Cable Service Interface Specification), se&ntilde;ale qu&eacute; afirmaci&oacute;n no es correcta:";
 choices[33]= new Array();
 choices[33][0] = "Especifica mecanismos para garantizar la QoS de flujo de datos en tiempo real como la voz.";
 choices[33][1] = "La voz y los datos viajan por canales diferentes, pero permitiendo un tratamiento uniforme en la red HFC.";
 choices[33][2] = "En la versi&oacute;n europea de DOCSIS 1.1 se establece un m&aacute;ximo de 160 km entre el CMTS (Cable Modem Termination System).";
 choices[33][3] = "En DOCSIS 1.1 est&aacute; prevista la definici&oacute;n para el soporte de ATM.";
 answers[33] = choices[33][1];
 units[33] = "105";
 comments[33] = "Id Pregunta: 3997. ";


//  Id pregunta: 4051 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  Si tenemos un web server en la DMZ &iquest;Qu&eacute; puerto t&iacute;picamente debemos abrir en el firewall?";
 choices[34]= new Array();
 choices[34][0] = "El primer puerto libre del firewall";
 choices[34][1] = "El puerto 80";
 choices[34][2] = "El primer puerto libre desde el 80";
 choices[34][3] = "No es necesario abrir puerto alguno";
 answers[34] = choices[34][1];
 units[34] = "111";
 comments[34] = "Id Pregunta: 4051. NULL";


//  Id pregunta: 4345 AÃ±o de creación de pregunta: 2007-01-01
 questions[35]= "36)  Mayte ha tecleado desde la l&iacute;nea de comandos del shell de su sistema operativo &ldquo;nslookup www.map.es [enter]&rdquo;. Este comando le dar&aacute; como respuesta en su pantalla:";
 choices[35]= new Array();
 choices[35][0] = "La direcci&oacute;n Ethernet del ordenador de Mayte.";
 choices[35][1] = "El tiempo que tarda un paquete de datos desde la m&aacute;quina de Mayte hasta el servidor del MAP.";
 choices[35][2] = "La direcci&oacute;n IP del MAP.";
 choices[35][3] = "La lista de directorios y archivos del directorio ra&iacute;z del MAP";
 answers[35] = choices[35][2];
 units[35] = "100";
 comments[35] = "Id Pregunta: 4345. ";


//  Id pregunta: 4498 AÃ±o de creación de pregunta: 2007-01-01
 questions[36]= "37)  Se dice que una entidad se encuentra en segunda forma normal (2FN);";
 choices[36]= new Array();
 choices[36][0] = "Si no tiene grupos repetitivos, independientemente de que los atributos no primarios tengan o no dependencia funcional completa con cada una de las claves y no con partes de estas.";
 choices[36][1] = "Si tiene grupos repetitivos, independientemente de que los atributos no primarios tengan o no dependencia funcional completa con cada una de las claves y no con partes de estas.";
 choices[36][2] = "Si tiene grupos repetitivos y cualquiera de sus atributos no primarios tienen una dependencia funcional completa con cada una de las claves y no con partes de estas.";
 choices[36][3] = "Si no tiene grupos repetitivos y cualquiera de sus atributos no primarios tienen una dependencia funcional completa con cada una de las claves y no con partes de estas.";
 answers[36] = choices[36][3];
 units[36] = "58";
 comments[36] = "Id Pregunta: 4498. ";


//  Id pregunta: 4666 AÃ±o de creación de pregunta: 2007-01-01
 questions[37]= "38)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares no est&aacute; relacionado con procesos de negocio?";
 choices[37]= new Array();
 choices[37][0] = "BPMN";
 choices[37][1] = "BPEL";
 choices[37][2] = "XPDL";
 choices[37][3] = "WSDL";
 answers[37] = choices[37][3];
 units[37] = "51";
 comments[37] = "Id Pregunta: 4666. NULL";


//  Id pregunta: 4853 AÃ±o de creación de pregunta: 2007-01-01
 questions[38]= "39)  &iquest;Cu&aacute;l de las siguientes respuestas NO corresponde al modelo de compresi&oacute;n de im&aacute;genes JPEG (JointPhotographic Experts Group)?";
 choices[38]= new Array();
 choices[38][0] = "B&aacute;sico/secuencial";
 choices[38][1] = "Jer&aacute;rquico";
 choices[38][2] = "Progresivo";
 choices[38][3] = "Conjugado modificado";
 answers[38] = choices[38][3];
 units[38] = "114";
 comments[38] = "Id Pregunta: 4853. ";


//  Id pregunta: 5018 AÃ±o de creación de pregunta: 2003-01-01
 questions[39]= "40)  El grupo de trabajo IEEE 802.1ab se encarga:";
 choices[39]= new Array();
 choices[39][0] = "De especificar el algoritmo de intercambio de BPDUs a nivel 2 en una red Ethernet";
 choices[39][1] = "Del estudio de los protocolos para el descubrimiento de la topolog&iacute;a f&iacute;sica de una red Ethernet";
 choices[39][2] = "Del estudio de los protocolos PVST y PVGST (m&uacute;ltiples instancias de Spanning Tree)";
 choices[39][3] = "De la especificaci&oacute;n 1000Base-T";
 answers[39] = choices[39][1];
 units[39] = "101";
 comments[39] = "Id Pregunta: 5018. Examen TIC A 2007";


//  Id pregunta: 5417 AÃ±o de creación de pregunta: 2003-01-01
 questions[40]= "41)  &Eacute;tica del Auditor. Cuatro afirmaciones.- El Auditor sirve con diligencia, lealtad y honradez los intereses de empleados, accionistas, clientes y p&uacute;blico en general. No participar&aacute; en ninguna actividad ilegal o impropia- Garantiza la confidencialidad de la informaci&oacute;n obtenida en el ejercicio de sus funciones. No la usar&aacute; en beneficio propio, ni dejar&aacute; que llegue a terceros.- Evita actividades que pongan en entredicho su independencia.- Fomenta la formaci&oacute;n de los directivos de la empresa, sus clientes, incluso del p&uacute;blico en general, para que sepan de que va la Auditor&iacute;a y los Sistemas de Informaci&oacute;n";
 choices[40]= new Array();
 choices[40][0] = "Las tres primeras afirmaciones son correctas, la cuarta no";
 choices[40][1] = "Todas son correctas";
 choices[40][2] = "La cuarta es correcta, las otras tres son afirmaciones obvias";
 choices[40][3] = "Son correctas, pero de ellas no se desprende nada pr&aacute;ctico";
 answers[40] = choices[40][1];
 units[40] = "31";
 comments[40] = "Id Pregunta: 5417. Castilla y Le&oacute;n";


//  Id pregunta: 5585 AÃ±o de creación de pregunta: 2003-01-01
 questions[41]= "42)  &iquest;En qu&eacute; tipos de contratos p&uacute;blicos es exigible la Clasificaci&oacute;n del empresario, seg&uacute;n el RD Legislativo 3/2011 de contratos del sector p&uacute;blico?";
 choices[41]= new Array();
 choices[41][0] = "En contratos de concesi&oacute;n de obras publicas &uacute;nicamente";
 choices[41][1] = "En los nuevos contratos de colaboraci&oacute;n entre el sector p&uacute;blico y privado, siempre que la cuant&iacute;a del mismo sea superior a 100.000 euros";
 choices[41][2] = "En los contratos de obras de importe igual o superior a 500.000 &euro;. Para los contratos de servicios no ser&aacute; exigible la clasificaci&oacute;n del empresario.";
 choices[41][3] = "La figura de la Clasificaci&oacute;n se ha suprimido en la nueva Ley";
 answers[41] = choices[41][2];
 units[41] = "41";
 comments[41] = "Id Pregunta: 5585. Art. 65.1.b) del RD Legislativo 3/2011, modificado por la Ley 25/2013 que elimina la clasificaci&oacute;n en contratos de servicios.";


//  Id pregunta: 5835 AÃ±o de creación de pregunta: 2009-01-01
 questions[42]= "43)  Las caracter&iacute;sticas del m&eacute;todo Delphi son";
 choices[42]= new Array();
 choices[42][0] = "Confidencialidad, integridad del grupo y disponibilidad";
 choices[42][1] = "Anonimato, realimentaci&oacute;n controlada y respuesta del grupo de forma estad&iacute;stica";
 choices[42][2] = "Criticidad, autenticaci&oacute;n del grupo y consistencia";
 choices[42][3] = "Convergencia, coherencia del grupo y salvaguarda";
 answers[42] = choices[42][1];
 units[42] = "34";
 comments[42] = "Id Pregunta: 5835. MAP 2008 A1";


//  Id pregunta: 6112 AÃ±o de creación de pregunta: 2010-01-01
 questions[43]= "44)  Un diagrama de transici&oacute;n de estados:";
 choices[43]= new Array();
 choices[43][0] = "Describe el comportamiento din&aacute;mico del sistema de informaci&oacute;n mostrando c&oacute;mo interact&uacute;an los objetos entre s&iacute;.";
 choices[43][1] = "Es un tipo de diagrama de interacci&oacute;n cuyo objetivo es describir el comportamiento din&aacute;mico del sistema de informaci&oacute;n haciendo &eacute;nfasis en la secuencia de los mensajes intercambiados por los objetos.";
 choices[43][2] = "Consiste en la descomposici&oacute;n sucesiva de los procesos, desde un nivel general, hasta llegar al nivel de detalle necesario para reflejar toda la sem&aacute;ntica que debe soportar el sistema en estudio.";
 choices[43][3] = "Representa los estados que puede tomar un componente o un sistema y muestra los eventos que implican el cambio de un estado a otro.";
 answers[43] = choices[43][3];
 units[43] = "82";
 comments[43] = "Id Pregunta: 6112. TIC A 2009";


//  Id pregunta: 6182 AÃ±o de creación de pregunta: 2010-01-01
 questions[44]= "45)  Entre las funciones de BPEL no se encuentra:";
 choices[44]= new Array();
 choices[44][0] = "Definir una interpretaci&oacute;n gr&aacute;fica de procesos.";
 choices[44][1] = "Definir procesos de negocio.";
 choices[44][2] = "Construir sobre servicios Web operaciones que participan en procedimientos empresariales.";
 choices[44][3] = "Orquestar servicios Web.";
 answers[44] = choices[44][0];
 units[44] = "71";
 comments[44] = "Id Pregunta: 6182. ";


//  Id pregunta: 6196 AÃ±o de creación de pregunta: 2010-01-01
 questions[45]= "46)  Respecto a los certificados de sede electr&oacute;nica y sello electr&oacute;nico";
 choices[45]= new Array();
 choices[45][0] = "El certificado de sede electr&oacute;nica permite la firma de documentos";
 choices[45][1] = "El certificado de sede electr&oacute;nica no permite la firma de documentos";
 choices[45][2] = "El certificado de sello electr&oacute;nico no permite el establecimiento de comunicaciones seguras";
 choices[45][3] = "El certificado de sello electr&oacute;nico permite la identificaci&oacute;n de una sede electr&oacute;nica";
 answers[45] = choices[45][1];
 units[45] = "43";
 comments[45] = "Id Pregunta: 6196. Articulos 18 y 19. El sello electronico SI permite establecer comunicaciones electronicas";


//  Id pregunta: 6268 AÃ±o de creación de pregunta: 2010-01-01
 questions[46]= "47)  El &ldquo;Plan&rdquo; cuyo objetivo es conseguir la continuidad en las funciones estrat&eacute;gicas de una organizaci&oacute;n desempe&ntilde;adas en sus instalaciones corporativas se denomina:";
 choices[46]= new Array();
 choices[46][0] = "Plan de continuidad de operaciones.";
 choices[46][1] = "Plan de continuidad de negocio.";
 choices[46][2] = "Plan de contingencia.";
 choices[46][3] = "Plan de emergencia.";
 answers[46] = choices[46][0];
 units[46] = "32";
 comments[46] = "Id Pregunta: 6268. ";


//  Id pregunta: 6276 AÃ±o de creación de pregunta: 2010-01-01
 questions[47]= "48)  &iquest;Cu&aacute;les son las fases por ciclo del modelo de ciclo de vida en espiral?";
 choices[47]= new Array();
 choices[47][0] = "Evaluaci&oacute;n, Planificaci&oacute;n, An&aacute;lisis de riesgos e Ingenier&iacute;a";
 choices[47][1] = "Planificaci&oacute;n, Ingenier&iacute;a, An&aacute;lisis de riesgos y Evaluaci&oacute;n";
 choices[47][2] = "Planificaci&oacute;n, An&aacute;lisis de riesgos, Ingenier&iacute;a y Evaluaci&oacute;n";
 choices[47][3] = "Ingenier&iacute;a, Planificaci&oacute;n, An&aacute;lisis de riesgos y Evaluaci&oacute;n";
 answers[47] = choices[47][2];
 units[47] = "76";
 comments[47] = "Id Pregunta: 6276. ";


//  Id pregunta: 6368 AÃ±o de creación de pregunta: 2010-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de los siguientes sistemas NO tiene la consideraci&oacute;n de entorno inseguro, de acuerdo con el Esquema Nacional de Seguridad?";
 choices[48]= new Array();
 choices[48][0] = "Equipos port&aacute;tiles";
 choices[48][1] = "Comunicaciones sobre redes inal&aacute;mbricas, incluso cuando la comunicaci&oacute;n se realice con cifrado fuerte";
 choices[48][2] = "Asistentes personales (PDA)";
 choices[48][3] = "Dispositivos perif&eacute;ricos";
 answers[48] = choices[48][1];
 units[48] = "43";
 comments[48] = "Id Pregunta: 6368. Art&iacute;culo 21 ENS";


//  Id pregunta: 6533 AÃ±o de creación de pregunta: 2010-01-01
 questions[49]= "50)  Los desajustes en los cumplimientos de las expectativas y especificaciones de los servicios determinan";
 choices[49]= new Array();
 choices[49][0] = "El grado de satisfacci&oacute;n de los usuarios";
 choices[49][1] = "Percepci&oacute;n del servicio y expectativas previas de los usuarios";
 choices[49][2] = "A y B son correctas";
 choices[49][3] = "A y B son incorrectas";
 answers[49] = choices[49][2];
 units[49] = "92";
 comments[49] = "Id Pregunta: 6533. NULL";


//  Id pregunta: 7343 AÃ±o de creación de pregunta: 2010-01-01
 questions[50]= "51)  Se&ntilde;ale la afirmaci&oacute;n INCORRECTA con respecto a las funciones hash:";
 choices[50]= new Array();
 choices[50][0] = "El algoritmo SHA-1 produce una salida resumen de 160 bits";
 choices[50][1] = "Las funciones hash son usadas, principalmente, para resolver el problema de la confidencialidad de los mensajes";
 choices[50][2] = "Resistencia a la preimagen significa que dada cualquier imagen y, es computacionalmente imposible encontrar un mensaje x tal que h(x)=y";
 choices[50][3] = "Resistencia a colisi&oacute;n significa que es computacionalmente imposible encontrar dos diferentes mensajes x, x&rsquo; tal que h(x)=h(x&rsquo;)";
 answers[50] = choices[50][1];
 units[50] = "72";
 comments[50] = "Id Pregunta: 7343. NULL";


//  Id pregunta: 7831 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)   &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta para el protocolo TCP/IP?";
 choices[51]= new Array();
 choices[51][0] = " IP no proporciona control de errores para datos, ni sumas de comprobaci&oacute;n de cabeceras.";
 choices[51][1] = " Si se pierde o da&ntilde;a alg&uacute;n datagrama durante la transmisi&oacute;n, TCP lo detecta y lo vuelve a retransmitir.";
 choices[51][2] = " UDP garantiza la entrega de los datagramas y evita las duplicaciones.";
 choices[51][3] = " ICMP garantiza la entrega fiable de un paquete IP.";
 answers[51] = choices[51][1];
 units[51] = "NULL";
 comments[51] = "Id Pregunta: 7831. Map 2005";


//  Id pregunta: 7832 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)   Identifique el rango de frecuencias que se utiliza en el canal ascendente o de retorno en una red HFC (Hybrid Fiber Coaxial):";
 choices[52]= new Array();
 choices[52][0] = " De 50 a 550 MHz.";
 choices[52][1] = " De 5 a 50 MHz.";
 choices[52][2] = " De 550 a 860 MHz.";
 choices[52][3] = " De 5 a 860 MHz.";
 answers[52] = choices[52][1];
 units[52] = "NULL";
 comments[52] = "Id Pregunta: 7832. Map 2005";


//  Id pregunta: 8106 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)   La tecnolog&iacute;a conocida como de Acceso M&uacute;ltiple por Divisi&oacute;n en c&oacute;digo de banda ancha (WCDMA), &iquest;a qu&eacute; est&aacute;ndar corresponde?";
 choices[53]= new Array();
 choices[53][0] = " GPRS.";
 choices[53][1] = " UMTS.";
 choices[53][2] = " GSM.";
 choices[53][3] = " DECT.";
 answers[53] = choices[53][1];
 units[53] = "NULL";
 comments[53] = "Id Pregunta: 8106. Map 2008";


//  Id pregunta: 8118 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)   &iquest;Cu&aacute;l de los siguientes criptosistemas se corresponde con un criptosistema asim&eacute;trico o de clave p&uacute;blica?";
 choices[54]= new Array();
 choices[54][0] = " IDEA (International Data Encryption Standard).";
 choices[54][1] = " Algoritmo de intercambio de claves de Diffie-Hellman.";
 choices[54][2] = " AES (Advanced Encryption Standard).";
 choices[54][3] = " RC-5.";
 answers[54] = choices[54][1];
 units[54] = "NULL";
 comments[54] = "Id Pregunta: 8118. Map 2008";


//  Id pregunta: 8187 AÃ±o de creación de pregunta: 2011-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l es el sistema de referencia geod&eacute;sico establecido por el RD 1071/2007, en el que se debe compilar toda la informaci&oacute;n geogr&aacute;fica y cartograf&iacute;a oficial espa&ntilde;ola a partir del 01 de Enero de 2015?:";
 choices[55]= new Array();
 choices[55][0] = "Exclusivamente el sistema ETRS89.";
 choices[55][1] = "Los sistemas ED50 y ETRS89.";
 choices[55][2] = "Los sistemas ETRS89 y REGCAN95.";
 choices[55][3] = "El sistema ETRS-C&oacute;nica Conforme de Lambert.";
 answers[55] = choices[55][2];
 units[55] = "67";
 comments[55] = "Id Pregunta: 8187. Examen TIC A1 2010";


//  Id pregunta: 8254 AÃ±o de creación de pregunta: 2011-01-01
 questions[56]= "57)  Seleccione la respuesta correcta acerca de los sistemas de representaci&oacute;n del conocimiento:";
 choices[56]= new Array();
 choices[56][0] = "La representaci&oacute;n del conocimiento mediante ternas Objeto, Atributo, Valor, no tiene mecanismos inferenciales.";
 choices[56][1] = "Las redes sem&aacute;nticas no tienen capacidad de representar acciones.";
 choices[56][2] = "La representaci&oacute;n en marcos admite el concepto de herencia, pero las redes sem&aacute;nticas no.";
 choices[56][3] = "En los sistemas de razonamiento mon&oacute;tono el conocimiento no var&iacute;a durante el proceso de razonamiento.";
 answers[56] = choices[56][0];
 units[56] = "64";
 comments[56] = "Id Pregunta: 8254. Examen TIC A1 2010";


//  Id pregunta: 8437 AÃ±o de creación de pregunta: 2011-01-01
 questions[57]= "58)  Seg&uacute;n el RD 1671/2009, &iquest;Cu&aacute;l de las siguientes afirmaciones referentes a la identificaci&oacute;n y autenticaci&oacute;n en el acceso de los ciudadanos a la AGE y sus OOAA dependientes, no es verdadera?";
 choices[57]= new Array();
 choices[57][0] = "Las personas f&iacute;sicas podr&aacute;n utilizar para relacionarse electr&oacute;nicamente con la Administraci&oacute;n General del Estado y los organismos p&uacute;blicos vinculados o dependientes, los sistemas de firma electr&oacute;nica incorporados al Documento Nacional de Identidad.";
 choices[57][1] = "Las personas jur&iacute;dicas y entidades sin personalidad jur&iacute;dica podr&aacute;n utilizar sistemas de firma electr&oacute;nica de persona jur&iacute;dica o de entidades sin personalidad jur&iacute;dica para todos aquellos procedimientos y actuaciones de la Administraci&oacute;n General del Estado para los que se admitan.";
 choices[57][2] = "En caso de no admisi&oacute;n, la sede electr&oacute;nica correspondiente no deber&aacute; facilitar sistemas alternativos que permitan a las personas jur&iacute;dicas y a las entidades sin personalidad jur&iacute;dica el ejercicio de su derecho a relacionarse electr&oacute;nicamente con la Administraci&oacute;n General del Estado.";
 choices[57][3] = "La admisi&oacute;n de otros sistemas de firma deber&aacute;n aprobarse mediante orden ministerial, o resoluci&oacute;n del titular en el caso de los organismos p&uacute;blicos, previo informe del Consejo Superior de Administraci&oacute;n Electr&oacute;nica.";
 answers[57] = choices[57][2];
 units[57] = "43";
 comments[57] = "Id Pregunta: 8437. ";


//  Id pregunta: 8655 AÃ±o de creación de pregunta: 2011-01-01
 questions[58]= "59)  &iquest;En qu&eacute; recomendaci&oacute;n del ITU-T se especifican las caracter&iacute;sticas de las fibras &oacute;pticas monomodo &quot;non-zero dispersion-shifted&quot; (NZDSF) habitualmente utilizadas en DWDM?:";
 choices[58]= new Array();
 choices[58][0] = "G.653";
 choices[58][1] = "G.654";
 choices[58][2] = "G.655";
 choices[58][3] = "G.656";
 answers[58] = choices[58][2];
 units[58] = "99";
 comments[58] = "Id Pregunta: 8655. Examen UPM A2 2011";


//  Id pregunta: 8852 AÃ±o de creación de pregunta: 2011-01-01
 questions[59]= "60)  Entre los tipos de componentes que pueden desarrollarse en aplicaciones basadas en J2EE 1.4 tenemos:";
 choices[59]= new Array();
 choices[59][0] = "P&aacute;ginas Asp y DLL";
 choices[59][1] = "Applet, Servlets, EJBs";
 choices[59][2] = "Javascript y p&aacute;ginas JSP";
 choices[59][3] = "Componentes COM";
 answers[59] = choices[59][1];
 units[59] = "116";
 comments[59] = "Id Pregunta: 8852. Analista Ayto. Madrid 2010";


//  Id pregunta: 9003 AÃ±o de creación de pregunta: 2011-01-01
 questions[60]= "61)  Seg&uacute;n la LOPD, el &oacute;rgano sancionador establecer&aacute; la cuant&iacute;a de la sanci&oacute;n aplicando la escala relativa a la clase de infracciones que preceda inmediatamente en gravedad a aquella en que se integra la considerada en el caso de que se trate, en los siguientes supuestos:";
 choices[60]= new Array();
 choices[60][0] = "Cuando pueda apreciarse que la conducta del afectado ha podido inducir a la comisi&oacute;n de la infracci&oacute;n.";
 choices[60][1] = "Cuando se haya producido un proceso de fusi&oacute;n por absorci&oacute;n y la infracci&oacute;n fuese anterior a dicho proceso, no siendo imputable a la entidad absorbente.";
 choices[60][2] = "Cuando el infractor haya reconocido espont&aacute;neamente su culpabilidad.";
 choices[60][3] = "Todos los anteriores";
 answers[60] = choices[60][3];
 units[60] = "29";
 comments[60] = "Id Pregunta: 9003. ";


//  Id pregunta: 9207 AÃ±o de creación de pregunta: 2013-01-01
 questions[61]= "62)  &iquest;Desde el punto de vista de la cantidad de la velocidad de acceso cu&aacute;l es la diferencia entre cintas y discos?";
 choices[61]= new Array();
 choices[61][0] = "La cinta est&aacute; orientada a almacenamiento de grandes cantidades de datos en los que el tiempo de acceso es cr&iacute;tico.";
 choices[61][1] = "Los discos son adecuados para el almacenamiento de datos con acceso &ldquo;on-line&rdquo;.";
 choices[61][2] = "Las cintas pr&aacute;cticamente ya no se utilizan.";
 choices[61][3] = "Los discos representan el soporte auxiliar de la informaci&oacute;n";
 answers[61] = choices[61][1];
 units[61] = "48";
 comments[61] = "Id Pregunta: 9207. ";


//  Id pregunta: 9255 AÃ±o de creación de pregunta: 2013-01-01
 questions[62]= "63)  &iquest;Qu&eacute; es BitLocker?";
 choices[62]= new Array();
 choices[62][0] = "Una funcionalidad de Windows que permite el cifrado de discos duros completos.";
 choices[62][1] = "Se proporciona desde Windows Vista.";
 choices[62][2] = "Con Windows 7 incorpora la funcionalidad de BiLocker-ToGo para dispositivos USB.";
 choices[62][3] = "Todas son correctas";
 answers[62] = choices[62][3];
 units[62] = "56";
 comments[62] = "Id Pregunta: 9255. ";


//  Id pregunta: 9329 AÃ±o de creación de pregunta: 2013-01-01
 questions[63]= "64)  El cable bs/ utp";
 choices[63]= new Array();
 choices[63][0] = "Es un cable de pantalla global de aluminio y una trenza de cobre recubriendola";
 choices[63][1] = "";
 choices[63][2] = "Presenta apantallamiento";
 choices[63][3] = "No presenta apantallamiento global";
 answers[63] = choices[63][0];
 units[63] = "99";
 comments[63] = "Id Pregunta: 9329. NULL";


//  Id pregunta: 9356 AÃ±o de creación de pregunta: 2013-01-01
 questions[64]= "65)  &iquest;Cu&aacute;ntos terminales pueden ser usados simult&aacute;neamente en una RDSI con acceso b&aacute;sico?:";
 choices[64]= new Array();
 choices[64][0] = "S&oacute;lo 1 canal B puede estar ocupado en un momento determinado, pero puede encolar lo que entre por el otro.";
 choices[64][1] = "3, ya que cada canal s&oacute;lo puede ser utilizado por un terminal a la vez, y con la compresi&oacute;n adecuada todos los canales permiten una comunicaci&oacute;n vocal.";
 choices[64][2] = "1 por cada canal B mientras que el canal D puede ser compartido por varios terminales en modo paquete.";
 choices[64][3] = "Los 8 terminales que puede soportar el acceso b&aacute;sico.";
 answers[64] = choices[64][2];
 units[64] = "103";
 comments[64] = "Id Pregunta: 9356. Pruebas selectivas Ingeniero de Telecomunicaci&oacute;n Ayto de Madrid 2010";


//  Id pregunta: 9438 AÃ±o de creación de pregunta: 2013-01-01
 questions[65]= "66)  En un DFD los niveles de los diagramas que recogen la descomposici&oacute;n en niveles, desde el m&aacute;s general al m&aacute;s espec&iacute;fico, se denominan:";
 choices[65]= new Array();
 choices[65][0] = "Diagrama de sistema, subsistemas, funciones, subfunciones, procesos y subprocesos.";
 choices[65][1] = "Diagrama de contexto, sistemas, subsistemas, funciones y subfunciones.";
 choices[65][2] = "Diagrama de contexto, sistemas, funciones y subfunciones.";
 choices[65][3] = "Diagrama de contexto, subsistemas, funciones, subfunciones y procesos.";
 answers[65] = choices[65][3];
 units[65] = "81";
 comments[65] = "Id Pregunta: 9438. Examen AGE TIC A1 2011";


//  Id pregunta: 9466 AÃ±o de creación de pregunta: 2013-01-01
 questions[66]= "67)  Respecto al direccionamiento de los mensajes en X.400 indique, de las siguientes afirmaciones, la falsa:";
 choices[66]= new Array();
 choices[66][0] = "El campo P hace referencia al dominio concreto al que pertenece el usuario dentro de la organizaci&oacute;n";
 choices[66][1] = "En el campo C de la direcci&oacute;n de correo se almacena el c&oacute;digo ISO para el nombre del pa&iacute;s al que pertenece una direcci&oacute;n de correo";
 choices[66][2] = "El campo CN indica el nombre com&uacute;n que puede, a su vez, dividirse en los subcampos S (apellido) y N (nombre)";
 choices[66][3] = "La omisi&oacute;n del campo ADMD indica el valor &quot;blank&quot;, por lo que no se trata de un campo obligatorio";
 answers[66] = choices[66][2];
 units[66] = "106";
 comments[66] = "Id Pregunta: 9466. ";


//  Id pregunta: 9606 AÃ±o de creación de pregunta: 2014-01-01
 questions[67]= "68)   En el Modelo de Referencia ANSI  de las Facilidades de usuario (MRFU), las FU se encargan de:";
 choices[67]= new Array();
 choices[67][0] = " Aislar al usuario de detalles concretos sobre las herramientas de gesti&oacute;n de datos (HGD)";
 choices[67][1] = " Transformar una demanda de usuario en una petici&oacute;n funcional para las HGD";
 choices[67][2] = "Trasformar la salida de las HGD en un formato de presentaci&oacute;n para el usuario";
 choices[67][3] = "Todas las anteriores";
 answers[67] = choices[67][3];
 units[67] = "57";
 comments[67] = "Id Pregunta: 9606. ";


//  Id pregunta: 9729 AÃ±o de creación de pregunta: 2014-01-01
 questions[68]= "69)  Se&ntilde;ale cu&aacute;l de los siguientes NO es un framework JAVA";
 choices[68]= new Array();
 choices[68][0] = "Bird.";
 choices[68][1] = "Hibernate.";
 choices[68][2] = "Maverick.";
 choices[68][3] = "Spring.";
 answers[68] = choices[68][0];
 units[68] = "61";
 comments[68] = "Id Pregunta: 9729. Examen TIC-A1 2013";


//  Id pregunta: 9744 AÃ±o de creación de pregunta: 2014-01-01
 questions[69]= "70)  &iquest;Qu&eacute; significan las siglas MVC en el contexto de ASP.NET?";
 choices[69]= new Array();
 choices[69][0] = "Model View Controller.";
 choices[69][1] = "Multiple Views Canvas.";
 choices[69][2] = "Mobile Video Compatible.";
 choices[69][3] = "Mobile View Connector.";
 answers[69] = choices[69][0];
 units[69] = "113";
 comments[69] = "Id Pregunta: 9744. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9799 AÃ±o de creación de pregunta: 2014-01-01
 questions[70]= "71)  En la Ley 59/2003, de firma electr&oacute;nica, se indica que la prestaci&oacute;n de servicios de certificaci&oacute;n:";
 choices[70]= new Array();
 choices[70][0] = "Est&aacute; sujeta a autorizaci&oacute;n previa por parte del Ministro de Hacienda. ";
 choices[70][1] = "Est&aacute; sujeta a autorizaci&oacute;n previa por parte del Consejo de Ministros. ";
 choices[70][2] = "No est&aacute; sujeta a autorizaci&oacute;n previa.";
 choices[70][3] = "Es una competencia auton&oacute;mica.";
 answers[70] = choices[70][2];
 units[70] = "30";
 comments[70] = "Id Pregunta: 9799. Examen TIC-A2 2013-Libre (Ley 59/2003, art&iacute;culo 5)";


//  Id pregunta: 9882 AÃ±o de creación de pregunta: 2014-01-01
 questions[71]= "72)  De acuerdo con el RDL 1/1996 de 12 de abril, por el que se aprueba el Texto Refundido de la Ley de Propiedad Intelectual, el plazo de duraci&oacute;n de los derechos de explotaci&oacute;n de un programa de ordenador por una persona jur&iacute;dica ser&aacute; de";
 choices[71]= new Array();
 choices[71][0] = "30 a&ntilde;os a partir de la divulgaci&oacute;n y 70 desde la fecha de su creaci&oacute;n.";
 choices[71][1] = "70 a&ntilde;os computados a partir del 1 de enero del a&ntilde;o siguiente al de la divulgaci&oacute;n.";
 choices[71][2] = "50 a&ntilde;os computados a partir de su creaci&oacute;n.";
 choices[71][3] = "70 a&ntilde;os computados a partir de la fecha de divulgaci&oacute;n.";
 answers[71] = choices[71][1];
 units[71] = "36";
 comments[71] = "Id Pregunta: 9882. TIC A1, Examen 2013";


//  Id pregunta: 9893 AÃ±o de creación de pregunta: 2010-01-01
 questions[72]= "73)  En el entorno de las Tecnolog&iacute;as de la Informaci&oacute;n, la Comisi&oacute;n Soto sirvi&oacute; para";
 choices[72]= new Array();
 choices[72][0] = "impulsar la creaci&oacute;n del Consejo Superior de Inform&aacute;tica";
 choices[72][1] = "impulsar el modelo de crecimiento aut&oacute;nomo de cada departamento ministerial en materia de Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[72][2] = "Revisar, en base a la Ley 11/2007, los modelos de organizaci&oacute;n de las Tecnolog&iacute;as de la Informaci&oacute;n creados anteriormente.";
 choices[72][3] = "impulsar el desarrollo de la Sociedad de la Informaci&oacute;n.";
 answers[72] = choices[72][3];
 units[72] = "43";
 comments[72] = "Id Pregunta: 9893. TIC A1, Examen 2013";


//  Id pregunta: 9948 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  En M&eacute;trica v3, para la tarea &quot;GPI 1.1, identificaci&oacute;n de elementos a desarrollar&quot;, el producto de salida espec&iacute;fico en orientaci&oacute;n a objeto es:";
 choices[73]= new Array();
 choices[73][0] = "Cat&aacute;logo de clases. ";
 choices[73][1] = "Cat&aacute;logo de entidades";
 choices[73][2] = "Cat&aacute;logo de miembros. ";
 choices[73][3] = "Cat&aacute;logo de interfaces.";
 answers[73] = choices[73][0];
 units[73] = "86";
 comments[73] = "Id Pregunta: 9948. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 9969 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  De las siguientes afirmaciones sobre XPDL seleccione la INCORRECTA:";
 choices[74]= new Array();
 choices[74][0] = "Permite escribir especificaciones de procesos Workflow de manera estandarizada";
 choices[74][1] = "Permite una representaci&oacute;n gr&aacute;fica de los procesos incluyendo coordenadas X e Y para cada nodo implementado.";
 choices[74][2] = "Proporciona una notaci&oacute;n gr&aacute;fica para facilitar la comunicaci&oacute;n humana entre usuarios";
 choices[74][3] = "Es un lenguaje de definici&oacute;n de Workflow creado por OASIS";
 answers[74] = choices[74][3];
 units[74] = "71";
 comments[74] = "Id Pregunta: 9969. Examen Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n, Servicio sanitario Extremadura, 2014";


//  Id pregunta: 10096 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  En el an&aacute;lisis de requisitos, el dominio de la informaci&oacute;n debe analizarse desde 3 puntos de vista. &iquest;Cu&aacute;l NO es uno de ellos?";
 choices[75]= new Array();
 choices[75][0] = "Flujo de la informaci&oacute;n";
 choices[75][1] = "Contenido de la informaci&oacute;n";
 choices[75][2] = "Modelo de la informaci&oacute;n";
 choices[75][3] = "Estructura de la informaci&oacute;n";
 answers[75] = choices[75][2];
 units[75] = "78";
 comments[75] = "Id Pregunta: 10096. NULL";


//  Id pregunta: 10176 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  El uso del paradigma de OO se caracteriza por&hellip;.";
 choices[76]= new Array();
 choices[76][0] = "&hellip; el bajo acoplamiento y fuerte cohesi&oacute;n interna de los m&oacute;dulos (clases)";
 choices[76][1] = "&hellip; el alto acoplamiento y d&eacute;bil cohesi&oacute;n interna de los m&oacute;dulos (clases)";
 choices[76][2] = "La Reusabilidad no se encuentra entre sus objetivos";
 choices[76][3] = "La mayor dificultad de la programaci&oacute;n OO reduce la mantenibilidad y modificabilidad de los programas";
 answers[76] = choices[76][0];
 units[76] = "82";
 comments[76] = "Id Pregunta: 10176. ";


//  Id pregunta: 10227 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  Cual de los siguientes m&eacute;todos son m&eacute;todosde la clase Thread:";
 choices[77]= new Array();
 choices[77][0] = "sleep(long msec);";
 choices[77][1] = "start();";
 choices[77][2] = "wait();";
 choices[77][3] = "A y B son correctas.";
 answers[77] = choices[77][3];
 units[77] = "60";
 comments[77] = "Id Pregunta: 10227. start() es un m&eacute;todo de Thread. Se cambia la opci&oacute;n D, notifyAll, por la actual.";


//  Id pregunta: 10442 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  &iquest;Cu&aacute;l de las siguientes aplicaciones, incluida en KOffice, se emplea para generaci&oacute;n de informes? ";
 choices[78]= new Array();
 choices[78][0] = "Kexi.";
 choices[78][1] = "Kivio.";
 choices[78][2] = "Konqueror.";
 choices[78][3] = "Kugar.";
 answers[78] = choices[78][3];
 units[78] = "54";
 comments[78] = "Id Pregunta: 10442. Examen TIC A1 2013";


//  Id pregunta: 10444 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas sobre las redes GPRS es FALSA?";
 choices[79]= new Array();
 choices[79][0] = "Puede alcanzar velocidades de hasta 236 kbps de descarga. ";
 choices[79][1] = "Son redes orientadas a conexi&oacute;n.";
 choices[79][2] = "Pueden ofrecer servicios de mensajer&iacute;a instant&aacute;nea.";
 choices[79][3] = "Ofrecen servicios de transmisi&oacute;n digital de datos.";
 answers[79] = choices[79][1];
 units[79] = "108";
 comments[79] = "Id Pregunta: 10444. Examen TIC A1 2013";


//  Id pregunta: 10467 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  &iquest;Cu&aacute;l es el DOCTYPE que se usa en HTML5?";
 choices[80]= new Array();
 choices[80][0] = "&lt;!DOCTYPE html&gt;";
 choices[80][1] = "&lt;!DOCTYPE html5&gt;";
 choices[80][2] = "&lt;!DOCTYPE&gt; y &lt;!DOCTYPE html5&gt;";
 choices[80][3] = "&lt;!DOCTYPE html&gt; y &lt;!DOCTYPE html5&gt;";
 answers[80] = choices[80][0];
 units[80] = "69";
 comments[80] = "Id Pregunta: 10467. NULL";


//  Id pregunta: 10479 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  Si quiero cambiar el PIN del DNI electr&oacute;nico:";
 choices[81]= new Array();
 choices[81][0] = "S&oacute;lo puedo hacerlo desde mi casa pero necesito un lector de huella dactilar";
 choices[81][1] = "Puedo hacerlo desde los dispositivos autorizados por la Direcci&oacute;n General de la Polic&iacute;a";
 choices[81][2] = "Puedo hacerlo s&oacute;lo usando mi navegador web";
 choices[81][3] = "S&oacute;lo puedo hacerlo si tengo el PUK";
 answers[81] = choices[81][1];
 units[81] = "74";
 comments[81] = "Id Pregunta: 10479. NULL";


//  Id pregunta: 10619 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  Se&ntilde;ale cu&aacute;l de estas aplicaciones puede implementarse con el entorno .NET:";
 choices[82]= new Array();
 choices[82][0] = "Aplicaci&oacute;n de escritorio escrita en C++.";
 choices[82][1] = "Sitio web din&aacute;mico.";
 choices[82][2] = "Una plataforma de e-learning.";
 choices[82][3] = "Todas las anteriores.";
 answers[82] = choices[82][3];
 units[82] = "59";
 comments[82] = "Id Pregunta: 10619. ";


//  Id pregunta: 10623 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  Indique qu&eacute; soluci&oacute;n tiene una mayor rapidez de repuesta para consultas multitabla:";
 choices[83]= new Array();
 choices[83][0] = "OLAP";
 choices[83][1] = "OLTP";
 choices[83][2] = "ETL";
 choices[83][3] = "OLTA";
 answers[83] = choices[83][0];
 units[83] = "68";
 comments[83] = "Id Pregunta: 10623. ";


//  Id pregunta: 10640 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  Indique cu&aacute;l de &eacute;stas no es una herramienta BPM:";
 choices[84]= new Array();
 choices[84][0] = "Intalio";
 choices[84][1] = "Scrum";
 choices[84][2] = "Tibco";
 choices[84][3] = "Adonis";
 answers[84] = choices[84][1];
 units[84] = "79";
 comments[84] = "Id Pregunta: 10640. ";


//  Id pregunta: 10738 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  &iquest;Cu&aacute;l es el RD sobre organizaci&oacute;n e instrumentos operativos de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones en la Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos conocido como Gobernanza TIC?";
 choices[85]= new Array();
 choices[85][0] = "RD 37/2013";
 choices[85][1] = "RD 802/2014";
 choices[85][2] = "RD 806/2014";
 choices[85][3] = "RD 802/2015";
 answers[85] = choices[85][2];
 units[85] = "24";
 comments[85] = "Id Pregunta: 10738. ";


//  Id pregunta: 10838 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  Empleando el algoritmo m&aacute;s simple de la burbuja (Bubble Sort), en caso de querer ordenar un array de 10 elementos, &iquest;cu&aacute;ntas pasadas ser&iacute;a necesario realizar?";
 choices[86]= new Array();
 choices[86][0] = "10";
 choices[86][1] = "5";
 choices[86][2] = "11";
 choices[86][3] = "9";
 answers[86] = choices[86][3];
 units[86] = "0";
 comments[86] = "Id Pregunta: 10838. Examen GSI 2014";


//  Id pregunta: 10859 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  El ciclo de Deming es una estrategia de mejora continua de la calidad en la administraci&oacute;n de una organizaci&oacute;n, los 4 pasos de la estrategia son:";
 choices[87]= new Array();
 choices[87][0] = "Plan, Do, Construct, Approval (Planificar, Hacer, Construir, Aprobar).";
 choices[87][1] = "Plan, Do, Check, Act (Planificar, Hacer, Verificar, Actuar).";
 choices[87][2] = "Plan, Develop, Control, Anticipate (Planificar, Desarrollar, Controlar, Tener previsto).";
 choices[87][3] = "Plan, Deduct, Control, Approval (Planificar, Deducir, Controlar, Aprobar).";
 answers[87] = choices[87][1];
 units[87] = "88";
 comments[87] = "Id Pregunta: 10859. Examen GSI 2014";


//  Id pregunta: 10911 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Se&ntilde;alar de las siguientes tecnolog&iacute;as de comunicaciones m&oacute;viles cu&aacute;l utiliza W-CDMA:";
 choices[88]= new Array();
 choices[88][0] = "GSM";
 choices[88][1] = "EDGE";
 choices[88][2] = "UMTS";
 choices[88][3] = "LTE";
 answers[88] = choices[88][2];
 units[88] = "108";
 comments[88] = "Id Pregunta: 10911. Examen GSI 2014";


//  Id pregunta: 11050 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l es un algoritmo de criptograf&iacute;a sim&eacute;trica de flujo?";
 choices[89]= new Array();
 choices[89][0] = "DES";
 choices[89][1] = "Blowfish";
 choices[89][2] = "SNOW";
 choices[89][3] = "IDEA";
 answers[89] = choices[89][2];
 units[89] = "72";
 comments[89] = "Id Pregunta: 11050. El resto son algoritmos de bloque";


//  Id pregunta: 11088 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Sal (salt) en criptograf&iacute;a&hellip;";
 choices[90]= new Array();
 choices[90][0] = "Es un algoritmo de cifrado de bloques";
 choices[90][1] = "Comprende bits aleatorios que se usan como una de las entradas en una funci&oacute;n derivadora de claves.";
 choices[90][2] = "Las sales hacen mucho m&aacute;s lentos los ataques de diccionario y los ataques de fuerza bruta";
 choices[90][3] = "B y C son correctas";
 answers[90] = choices[90][3];
 units[90] = "72";
 comments[90] = "Id Pregunta: 11088. ";


//  Id pregunta: 11126 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  De acuerdo con la Taxonom&iacute;a de Flynn, como se denominan los sistemas de arquitectura serie de Von Neummann?";
 choices[91]= new Array();
 choices[91][0] = "SISD";
 choices[91][1] = "SIMD";
 choices[91][2] = "MISD";
 choices[91][3] = "MIMD";
 answers[91] = choices[91][0];
 units[91] = "45";
 comments[91] = "Id Pregunta: 11126. ";


//  Id pregunta: 11211 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;C&oacute;mo se denomina el plan espa&ntilde;ol que hace referencia al objetivo de Inclusi&oacute;n y alfabetizaci&oacute;n digital y profesionales TIC de la Agenda Digital Espa&ntilde;ola?";
 choices[92]= new Array();
 choices[92][0] = "Plan de Inclusi&oacute;n Digital y Empleabilidad";
 choices[92][1] = "Plan de Alfabetizaci&oacute;n Digital";
 choices[92][2] = "Plan de Alfabetizaci&oacute;n Digital y Empleabilidad";
 choices[92][3] = "Plan Integral de Inclusi&oacute;n Digital";
 answers[92] = choices[92][0];
 units[92] = "30";
 comments[92] = "Id Pregunta: 11211. ";


//  Id pregunta: 11347 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Cu&aacute;l es el significado de las sigla RIP";
 choices[93]= new Array();
 choices[93][0] = "Routing Improved Protocol";
 choices[93][1] = "Routing Inner Protocol";
 choices[93][2] = "Routing Information Protocol";
 choices[93][3] = "Ninguna de las anteriores";
 answers[93] = choices[93][2];
 units[93] = "100";
 comments[93] = "Id Pregunta: 11347. ";


//  Id pregunta: 11515 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  En el est&aacute;ndar XADES de firma electr&oacute;nica, el perfil que incluye un TimeStamp a las referencias de las CRLs, es:";
 choices[94]= new Array();
 choices[94][0] = "XADES-X";
 choices[94][1] = "XADES-T";
 choices[94][2] = "XADES-XL";
 choices[94][3] = "XADES-C";
 answers[94] = choices[94][0];
 units[94] = "72";
 comments[94] = "Id Pregunta: 11515. NULL";


//  Id pregunta: 11518 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Qu&eacute; afirmaci&oacute;n respecto al protocolo SSL NO es cierta?";
 choices[95]= new Array();
 choices[95][0] = "Responde por Secure Socket Layer.";
 choices[95][1] = "Es un est&aacute;ndar de facto propuesto por Netscape, ampliamente disponible en servidores y navegadores web.";
 choices[95][2] = "En su funcionamiento se establece primeramente una clave de sesi&oacute;n para conseguir el cifrado del canal. (confidencialidad)";
 choices[95][3] = "Es un protocolo cliente-servidor que requiere la autenticaci&oacute;n de ambas partes.";
 answers[95] = choices[95][3];
 units[95] = "111";
 comments[95] = "Id Pregunta: 11518. NULL";


//  Id pregunta: 11546 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Seg&uacute;n M&eacute;trica v3, &iquest;Cu&aacute;l de las siguientes actividades de aseguramiento de la calidad NO se lleva a cabo durante el Mantenimiento del Sistema de Informaci&oacute;n?";
 choices[96]= new Array();
 choices[96][0] = "Aseguramiento de la calidad NO afecta al proceso MSI";
 choices[96][1] = "La revisi&oacute;n del plan de pruebas de regresi&oacute;n.";
 choices[96][2] = "La revisi&oacute;n de la realizaci&oacute;n de las pruebas de regresi&oacute;n.";
 choices[96][3] = "La revisi&oacute;n del Plan de Mantenimiento del Sistema.";
 answers[96] = choices[96][3];
 units[96] = "86";
 comments[96] = "Id Pregunta: 11546. NULL";


//  Id pregunta: 11712 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l de los siguientes protocolos utiliza caracter&iacute;sticas tanto de los protocolos de vector distancia como de los de estado de enlace?";
 choices[97]= new Array();
 choices[97][0] = "OSPF";
 choices[97][1] = "RIP";
 choices[97][2] = "RIPv2";
 choices[97][3] = "EIGRP";
 answers[97] = choices[97][3];
 units[97] = "102";
 comments[97] = "Id Pregunta: 11712. NULL";


//  Id pregunta: 11727 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Qu&eacute; afirmaci&oacute;n describe una caracter&iacute;stica de IPsec?";
 choices[98]= new Array();
 choices[98][0] = "IPsec puede proteger el tr&aacute;fico en las capas 1 a 3.";
 choices[98][1] = "IPsec funciona independiente del protocolo de capa 2";
 choices[98][2] = "El cifrado puede causar problemas con el enrutamiento.";
 choices[98][3] = "Se trata de una suite propietaria";
 answers[98] = choices[98][1];
 units[98] = "111";
 comments[98] = "Id Pregunta: 11727. NULL";


//  Id pregunta: 11763 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Por qui&eacute;n est&aacute; presidida la Comisi&oacute;n Estrat&eacute;gica TIC?";
 choices[99]= new Array();
 choices[99][0] = "Ministro de Industria, Energ&iacute;a y Turismo";
 choices[99][1] = "Ministro de Fomento";
 choices[99][2] = "Ministro de Econom&iacute;a";
 choices[99][3] = "Ministro de Hacienda";
 answers[99] = choices[99][3];
 units[99] = "43";
 comments[99] = "Id Pregunta: 11763. ";


