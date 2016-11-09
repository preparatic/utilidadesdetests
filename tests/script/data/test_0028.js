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

//  Id pregunta: 154 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  El nivel de adecuaci&oacute;n AA indica:";
 choices[0]= new Array();
 choices[0][0] = "que se satisfacen todos los puntos de verificaci&oacute;n de prioridad 1";
 choices[0][1] = "que se satisfacen todos los puntos de verificaci&oacute;n de prioridad 1 y 2";
 choices[0][2] = "que se satisfacen todos los puntos de verificaci&oacute;n de prioridad 1, 2 y 3";
 choices[0][3] = "que se satisfacen todos los puntos de verificaci&oacute;n de prioridad 1, 2, 3 y 4";
 answers[0] = choices[0][1];
 units[0] = "39";
 comments[0] = "Id Pregunta: 154. ";


//  Id pregunta: 246 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  En una organizaci&oacute;n de tipo dinosaurio:";
 choices[1]= new Array();
 choices[1][0] = "El HW est&aacute; distribuido, y no se descentraliza la capacidad de realizar SW ni las decisiones";
 choices[1][1] = "El HW est&aacute; distribuido y el desarrollo tambi&eacute;n, pero no las decisiones";
 choices[1][2] = "El HW, el desarrollo y las decisiones no se descentralizan";
 choices[1][3] = "El HW no est&aacute; distribuido y se descentraliza la capacidad de realizar SW y las decisiones";
 answers[1] = choices[1][2];
 units[1] = "22";
 comments[1] = "Id Pregunta: 246. ";


//  Id pregunta: 292 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  La decisi&oacute;n sobre si la estructura inform&aacute;tica de una organizaci&oacute;n debe ser centralizada o descentralizada, debe tomarse en la etapa de:";
 choices[2]= new Array();
 choices[2][0] = "Planificaci&oacute;n del sistema";
 choices[2][1] = "Especificaci&oacute;n del sistema";
 choices[2][2] = "Dise&ntilde;o del sistema";
 choices[2][3] = "Codificaci&oacute;n del sistema";
 answers[2] = choices[2][0];
 units[2] = "21";
 comments[2] = "Id Pregunta: 292. ";


//  Id pregunta: 325 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  La planificaci&oacute;n de la capacidad de un sistema debe tener en cuenta los factores:";
 choices[3]= new Array();
 choices[3][0] = "Caracter&iacute;sticas de la carga de trabajo, caracter&iacute;sticas de funcionamiento de los recursos, disponibilidad del sistema y requisitos de servicio del usuario";
 choices[3][1] = "Caracter&iacute;sticas de la carga de trabajo, utilizaci&oacute;n de los recursos, disponibilidad del sistema y horas de trabajo de los usuarios";
 choices[3][2] = "Caracter&iacute;sticas de la carga de trabajo, utilizaci&oacute;n de los recursos, disponibilidad del sistema y requisitos de servicio de los usuarios";
 choices[3][3] = "Caracter&iacute;sticas de la carga de trabajo, utilizaci&oacute;n de los recursos, disponibilidad de los recursos y requisitos de servicio de los usuarios";
 answers[3] = choices[3][2];
 units[3] = "35";
 comments[3] = "Id Pregunta: 325. NULL";


//  Id pregunta: 357 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Las leyes de protecci&oacute;n de datos que pretenden prevenir la invasi&oacute;n de la intimidad del individuo frente al abuso de la informaci&oacute;n computarizada son las conocidas como:";
 choices[4]= new Array();
 choices[4][0] = "Leyes de primera generaci&oacute;n";
 choices[4][1] = "Leyes de segunda generaci&oacute;n";
 choices[4][2] = "Leyes de tercera generaci&oacute;n";
 choices[4][3] = "No se aplica esta clasificaci&oacute;n a este tipo de leyes";
 answers[4] = choices[4][2];
 units[4] = "36";
 comments[4] = "Id Pregunta: 357. ";


//  Id pregunta: 486 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  La ITU-T realiza series de recomendaciones sobre diversos temas, Las recomendaciones sobre multiplexaci&oacute;n digital, estructura de las tramas, interfaces el&eacute;ctricos y funcionales entre dispositivos digitales de transmisi&oacute;n, y jerarqu&iacute;a de frecuencia pertence a:";
 choices[5]= new Array();
 choices[5][0] = "Serie V de la ITU-T";
 choices[5][1] = "Serie G de la ITU-T";
 choices[5][2] = "Serie D de la ITU-T";
 choices[5][3] = "Serie M de la ITU-T";
 answers[5] = choices[5][1];
 units[5] = "42";
 comments[5] = "Id Pregunta: 486. ";


//  Id pregunta: 506 AÃ±o de creación de pregunta: 2003-01-01
 questions[6]= "7)  La Decisi&oacute;n 87/95 /CEE cubre:";
 choices[6]= new Array();
 choices[6][0] = "Las especificaciones t&eacute;cnicas para equipos terminales conectados a redes p&uacute;blicas de tlecomunicaci&oacute;n";
 choices[6][1] = "Las especificaciones funcionales de los servicios ofrecidos sobre redes p&uacute;blicas de telecomunicaci&oacute;n";
 choices[6][2] = "Las especificaciones de los equipos que formen parte de las redes de telecomunicaci&oacute;n en s&iacute; mismas";
 choices[6][3] = "Ninguna de las repuestas anteriores es cierta";
 answers[6] = choices[6][1];
 units[6] = "40";
 comments[6] = "Id Pregunta: 506. ";


//  Id pregunta: 528 AÃ±o de creación de pregunta: 2004-01-01
 questions[7]= "8)  En un proyecto de desarrollo sw, en qu&eacute; fase del ciclo de vida se centrar&aacute; principalmente la revisi&oacute;n de un auditor inform&aacute;tico:";
 choices[7]= new Array();
 choices[7][0] = "Pruebas";
 choices[7][1] = "Estudio de viabilidad";
 choices[7][2] = "Dise&ntilde;o";
 choices[7][3] = "Programaci&oacute;n";
 answers[7] = choices[7][2];
 units[7] = "31, 32, 33";
 comments[7] = "Id Pregunta: 528. Auditor&iacute;a Inform&aacute;tica";


//  Id pregunta: 533 AÃ±o de creación de pregunta: 2003-01-01
 questions[8]= "9)  Los diagrmas de Gantt o de tiempo son una t&eacute;cnica de:";
 choices[8]= new Array();
 choices[8][0] = "Gesti&oacute;n de proyectos";
 choices[8][1] = "Programaci&oacute;n orientada a objetos";
 choices[8][2] = "An&aacute;lisis diferencialde aplicaciones";
 choices[8][3] = "Programaci&oacute;n estructurada";
 answers[8] = choices[8][0];
 units[8] = "28";
 comments[8] = "Id Pregunta: 533. ";


//  Id pregunta: 588 AÃ±o de creación de pregunta: 2006-01-01
 questions[9]= "10)  De acuerdo con David y Olson 'Management lnformation System: Conceptual Foundations, Structure and Development, Mc Graw Hill, 1985' un estudio de viabilidad debe abarcar cinco aspectos. Estos son:";
 choices[9]= new Array();
 choices[9][0] = "T&eacute;cnico, operacional, econ&oacute;mico, planificaci&oacute;n y sociol&oacute;gico.";
 choices[9][1] = "T&eacute;cnico, operacional, econ&oacute;mico, planificaci&oacute;n y pol&iacute;tico.";
 choices[9][2] = "T&eacute;cnico, sociol&oacute;gico, econ&oacute;mico, planificaci&oacute;n y motivacional.";
 choices[9][3] = "T&eacute;cnico, operacional, econ&oacute;mico, planificaci&oacute;n y motivacional.";
 answers[9] = choices[9][3];
 units[9] = "27";
 comments[9] = "Id Pregunta: 588. ";


//  Id pregunta: 657 AÃ±o de creación de pregunta: 2006-01-01
 questions[10]= "11)  El Sistema de Soporte a la Decisi&oacute;n SSD-AAPP es una aplicaci&oacute;n inform&aacute;tica dise&ntilde;ada para:";
 choices[10]= new Array();
 choices[10][0] = "Ayudar a la selecci&oacute;n de la mejor oferta posible de entre las obtenidas en cualquier proceso de contrataci&oacute;n p&uacute;blica relacionada con Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones";
 choices[10][1] = "Ayudar a la selecci&oacute;n de la mejor oferta posible de entre las obtenidas en cualquier proceso de contrataci&oacute;n p&uacute;blica a trav&eacute;s del Cat&aacute;logo de Bienes de Adquisici&oacute;n Centralizada";
 choices[10][2] = "Ayudar a la selecci&oacute;n de la mejor oferta posible de entre las obtenidas en cualquier proceso de contrataci&oacute;n p&uacute;blica";
 choices[10][3] = "Ayudar a la selecci&oacute;n de la mejor oferta posible de entre las obtenidas en un proceso de contrataci&oacute;n p&uacute;blica a trav&eacute;s de un procedimiento negociado por exclusividad";
 answers[10] = choices[10][2];
 units[10] = "34";
 comments[10] = "Id Pregunta: 657. ";


//  Id pregunta: 706 AÃ±o de creación de pregunta: 2004-01-01
 questions[11]= "12)  DTD se emplea para:";
 choices[11]= new Array();
 choices[11][0] = "Crear documentos XML bien formados";
 choices[11][1] = "Formatear documentos XML";
 choices[11][2] = "Transformar documentos HTML en XML";
 choices[11][3] = "Validar documentos XML";
 answers[11] = choices[11][3];
 units[11] = "69";
 comments[11] = "Id Pregunta: 706. Similar a examen TIC SS A 2004";


//  Id pregunta: 807 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  A la tabla virtual que se deriva de una o varias tablas f&iacute;sicas y aparece como una ventana personalizada para el usuario, se la conoce por el nombre de:";
 choices[12]= new Array();
 choices[12][0] = "Subesquema de grupo";
 choices[12][1] = "Vista";
 choices[12][2] = "Apuntador de &iacute;ndices";
 choices[12][3] = "Modelo f&iacute;sico";
 answers[12] = choices[12][1];
 units[12] = "52,53";
 comments[12] = "Id Pregunta: 807. ";


//  Id pregunta: 1092 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  En el sector de los procesadores cient&iacute;ficos:";
 choices[13]= new Array();
 choices[13][0] = "Los modelos de procesadores paralelos utilizan chips convencionales, por lo que resultan siempre m&aacute;s econ&oacute;micos que los superordenadores de gran escala.";
 choices[13][1] = "Se utilizan sistemas operativos propietarios.";
 choices[13][2] = "Se emplea el proceso paralelo masivo (MPP).";
 choices[13][3] = "Los procesadores incorporados de terceras partes proporcionan capacidades de proceso en coma flotante y matricial para entornos de mainframe tradicional.";
 answers[13] = choices[13][3];
 units[13] = "45, 46";
 comments[13] = "Id Pregunta: 1092. ";


//  Id pregunta: 1195 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Indique una caracter&iacute;stica falsa de Java:";
 choices[14]= new Array();
 choices[14][0] = "Es interpretado y portable a distintas plataformas";
 choices[14][1] = "Soporta programaci&oacute;n multihilo (multithreading)";
 choices[14][2] = "Es un entorno seguro porque el sistema runtime incorpora protecci&oacute;n contra virus y alteraciones de c&oacute;digo";
 choices[14][3] = "Todas las anteriores son caracter&iacute;sticas de Java";
 answers[14] = choices[14][3];
 units[14] = "60";
 comments[14] = "Id Pregunta: 1195. JCED - Preparatic XVII";


//  Id pregunta: 1492 AÃ±o de creación de pregunta: 2009-01-01
 questions[15]= "16)  &iquest;Deben los prestadores de servicios de la sociedad de la informaci&oacute;n inscribirse en alg&uacute;n registro?:";
 choices[15]= new Array();
 choices[15][0] = "Es necesaria una autorizaci&oacute;n administrativa";
 choices[15][1] = "S&iacute;, pero a&uacute;n no se ha decidido donde";
 choices[15][2] = "No, pero los datos de su inscripci&oacute;n en el Registro Mercantil en el que, en su caso, se encuentren inscritos o de aquel otro registro p&uacute;blico en el que lo estuvieran para la adquisici&oacute;n de personalidad jur&iacute;dica o a los solos efectos de publicidad forman parte de la informaci&oacute;n general considerada en el art&iacute;culo 10 de la Ley 34/2002.";
 choices[15][3] = "No, pero se debe comunicar al Registro Mercantil el nombre de dominio si es utilizado para publicidad";
 answers[15] = choices[15][2];
 units[15] = "30";
 comments[15] = "Id Pregunta: 1492. Ley 34/2002, art&iacute;culo 9";


//  Id pregunta: 1516 AÃ±o de creación de pregunta: 2003-01-01
 questions[16]= "17)  &iquest;Sobre qu&eacute; versa el est&aacute;ndar PKCS7 de criptograf&iacute;a?";
 choices[16]= new Array();
 choices[16][0] = "Formato de certificado digital";
 choices[16][1] = "Formato de sobre digital";
 choices[16][2] = "Cifrado con clave privada";
 choices[16][3] = "Sintaxis de la clave privada";
 answers[16] = choices[16][1];
 units[16] = "74";
 comments[16] = "Id Pregunta: 1516. NULL";


//  Id pregunta: 1676 AÃ±o de creación de pregunta: 2004-01-01
 questions[17]= "18)  Indique la afirmaci&oacute;n correcta";
 choices[17]= new Array();
 choices[17][0] = "Una relaci&oacute;n est&aacute; en 4&ordf;FN si no incluye dependencias combinacionales";
 choices[17][1] = "Una relaci&oacute;n est&aacute; en 2&ordf;FN si no incluye grupos repetitivos y sus atributos no primarios tienen una dependencia plena respecto a cada una de las claves y no con partes de estas";
 choices[17][2] = "Una relaci&oacute;n est&aacute; en 1&ordf;FN si incluye alg&uacute;n grupo repetitivo";
 choices[17][3] = "Una relaci&oacute;n est&aacute; en 3&ordf;FN si y solo si est&aacute; en 1&ordf;FN pero no en 2&ordf;FN";
 answers[17] = choices[17][1];
 units[17] = "58";
 comments[17] = "Id Pregunta: 1676. ";


//  Id pregunta: 1679 AÃ±o de creación de pregunta: 2004-01-01
 questions[18]= "19)  &iquest;Cu&aacute;l de las siguientes NO es una caracter&iacute;stica de un archivo JAR?";
 choices[18]= new Array();
 choices[18][0] = "Fichero que re&uacute;ne clases, im&aacute;genes, sonidos y otros ficheros necesarios para la ejecuci&oacute;n";
 choices[18][1] = "Es dependiente de la plataforma";
 choices[18][2] = "Empaqueta ficheros y los comprime con el algoritmo LZW";
 choices[18][3] = "JAR es el acr&oacute;nimo de Java ARchive";
 answers[18] = choices[18][1];
 units[18] = "60";
 comments[18] = "Id Pregunta: 1679. JCED - Preparatic XVII";


//  Id pregunta: 1771 AÃ±o de creación de pregunta: 2006-01-01
 questions[19]= "20)  Respecto a JNI";
 choices[19]= new Array();
 choices[19][0] = "Se sigue conservando la portabilidad universal";
 choices[19][1] = "Es la interfaz est&aacute;ndar de programaci&oacute;n para llamar a m&eacute;todos nativos escritos en otros lenguajes como C o C++.";
 choices[19][2] = " permite utilizar clases java desde aplicaciones nativas.";
 choices[19][3] = "B y C son correctas";
 answers[19] = choices[19][3];
 units[19] = "60";
 comments[19] = "Id Pregunta: 1771. NULL";


//  Id pregunta: 1790 AÃ±o de creación de pregunta: 2006-01-01
 questions[20]= "21)  Se&ntilde;ale de qu&eacute; etapa del desarrollo de la inteligencia artifical son propias las t&eacute;cnicas de b&uacute;squeda heur&iacute;stica";
 choices[20]= new Array();
 choices[20][0] = "Difusi&oacute;n actual";
 choices[20][1] = "Etapa de prototipos";
 choices[20][2] = "Sistemas expertos";
 choices[20][3] = "Etapa inicial";
 answers[20] = choices[20][0];
 units[20] = "63";
 comments[20] = "Id Pregunta: 1790. ";


//  Id pregunta: 1803 AÃ±o de creación de pregunta: 2006-01-01
 questions[21]= "22)  &iquest;Qu&eacute; es moodle?";
 choices[21]= new Array();
 choices[21][0] = "Un sistema de gest&oacute;n de la ense&ntilde;anza de Software libre";
 choices[21][1] = "Un sistema de gesti&oacute;n de contenidos gratuito pero no libre";
 choices[21][2] = "Un buscador de Internet";
 choices[21][3] = "Un entorno de escritorio para sistemas Linux bajo tecnolog&iacute;a X Windows";
 answers[21] = choices[21][0];
 units[21] = "66";
 comments[21] = "Id Pregunta: 1803. Moodle tiene licencia GNU GPL.";


//  Id pregunta: 1848 AÃ±o de creación de pregunta: 2006-01-01
 questions[22]= "23)  ESTROFA:";
 choices[22]= new Array();
 choices[22][0] = "Especificaciones para el tratamiento de flujos automatizados";
 choices[22][1] = "Elaboradas por la COAXI hoy Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[22][2] = "Elaboradas con el fin de homogeneizar terminolog&iacute;a y asesorar a los compradores p&uacute;blicos a la hora de la adquisici&oacute;n de productos de Data Warehouse";
 choices[22][3] = "Todos los anteriores";
 answers[22] = choices[22][0];
 units[22] = "71";
 comments[22] = "Id Pregunta: 1848. ";


//  Id pregunta: 1859 AÃ±o de creación de pregunta: 2006-01-01
 questions[23]= "24)  En relaci&oacute;n al protocolo OCSP (Online Certificate Status Protocol): ";
 choices[23]= new Array();
 choices[23][0] = "Se utiliza para conocer el estado de revocaci&oacute;n de un certificado X.509";
 choices[23][1] = "Los mensajes enviados v&iacute;a OCSP se codifican en ASN.1";
 choices[23][2] = "Se define en el RFC 2560";
 choices[23][3] = "Todas las anteriores respuestas son ciertas";
 answers[23] = choices[23][3];
 units[23] = "74";
 comments[23] = "Id Pregunta: 1859. NULL";


//  Id pregunta: 2368 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Entre los siguientes t&eacute;rminos, indicar cu&aacute;l define la reconstrucci&oacute;n de un sistema de una forma nueva, incluyendo la implementaci&oacute;n:";
 choices[24]= new Array();
 choices[24][0] = "Ingenier&iacute;a inversa.";
 choices[24][1] = "Reestructuraci&oacute;n.";
 choices[24][2] = "Reingenier&iacute;a.";
 choices[24][3] = "Ingenier&iacute;a hacia delante.";
 answers[24] = choices[24][2];
 units[24] = "91";
 comments[24] = "Id Pregunta: 2368. ";


//  Id pregunta: 2843 AÃ±o de creación de pregunta: 2006-01-01
 questions[25]= "26)  Un filtro de Prewitt es ";
 choices[25]= new Array();
 choices[25][0] = "un filtro de mediana empleado para realizar realces geom&eacute;tricos";
 choices[25][1] = "un filtro de mediana empleado para realizar realces radiom&eacute;tricos";
 choices[25][2] = "es similar en concepto a un filtro de Tukey";
 choices[25][3] = "un filtro paso alto empleado para realizar realces geom&eacute;tricos";
 answers[25] = choices[25][3];
 units[25] = "93";
 comments[25] = "Id Pregunta: 2843. NULL";


//  Id pregunta: 3063 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  En las transmisiones de se&ntilde;ales el&eacute;ctricas a las perturbaciones producidas en sistemas no lineales y que consisten en la aparici&oacute;n en el receptor de nuevas componentes espectrales de segundo orden se las llama:";
 choices[26]= new Array();
 choices[26][0] = "Distorsi&oacute;n no lineal";
 choices[26][1] = "Distorsi&oacute;n lineal de segundo orden";
 choices[26][2] = "Intermodulaci&oacute;n";
 choices[26][3] = "Paradiafon&iacute;a";
 answers[26] = choices[26][2];
 units[26] = "99";
 comments[26] = "Id Pregunta: 3063. ";


//  Id pregunta: 3620 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  La norma IEEE 802.11a define una velocidad m&aacute;xima de transferencia de:";
 choices[27]= new Array();
 choices[27][0] = "11 Mbps";
 choices[27][1] = "11 MBps";
 choices[27][2] = "54 Mbps";
 choices[27][3] = "54 MBps";
 answers[27] = choices[27][2];
 units[27] = "101,107";
 comments[27] = "Id Pregunta: 3620. ";


//  Id pregunta: 3788 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Respecto a las normas internacionales de conmutaci&oacute;n de paquetes, es cierto que:";
 choices[28]= new Array();
 choices[28][0] = "X.75 especifica la interfaz entre DTE y DCE para terminales en modo paquete ";
 choices[28][1] = "X.29 es similar a X.28 pero para terminales de tecnolog&iacute;a posterior";
 choices[28][2] = "X.28 especifica el interfaz DTE-DCE para terminales de datos arr&iacute;tmicos";
 choices[28][3] = "X.28 especifica los procedimientos de control para circuitos internacionales";
 answers[28] = choices[28][2];
 units[28] = "103";
 comments[28] = "Id Pregunta: 3788. ";


//  Id pregunta: 4023 AÃ±o de creación de pregunta: 2006-01-01
 questions[29]= "30)  &iquest;Cu&aacute;l de los siguientes no es un elemento de la arquitectura GSM?";
 choices[29]= new Array();
 choices[29][0] = "HLR";
 choices[29][1] = "MSC";
 choices[29][2] = "SGSN";
 choices[29][3] = "BTS";
 answers[29] = choices[29][2];
 units[29] = "108";
 comments[29] = "Id Pregunta: 4023. ";


//  Id pregunta: 4341 AÃ±o de creación de pregunta: 2007-01-01
 questions[30]= "31)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares de comunicaciones fue originalmente concebido como el est&aacute;ndar militar MIL-STD-1778?:";
 choices[30]= new Array();
 choices[30][0] = "IEEE 802.3.";
 choices[30][1] = "IEEE 802.11b.";
 choices[30][2] = "CCITT X 25.";
 choices[30][3] = "TCP.";
 answers[30] = choices[30][3];
 units[30] = "99";
 comments[30] = "Id Pregunta: 4341. ";


//  Id pregunta: 4378 AÃ±o de creación de pregunta: 2007-01-01
 questions[31]= "32)  El objetivo principal del an&aacute;lisis de sistemas es:";
 choices[31]= new Array();
 choices[31][0] = "Determinar el mecanismo de funcionamiento de los m&oacute;dulos.";
 choices[31][1] = "Validar con el cliente el cumplimiento de las especificaciones.";
 choices[31][2] = "Establecer claramente las especificaciones del producto.";
 choices[31][3] = "Integrar los distintos componentes del sistema.";
 answers[31] = choices[31][2];
 units[31] = "80";
 comments[31] = "Id Pregunta: 4378. ";


//  Id pregunta: 4476 AÃ±o de creación de pregunta: 2007-01-01
 questions[32]= "33)  Dentro de las m&eacute;tricas de software basadas en el texto del c&oacute;digo, &iquest;cuales son las cuatro cantidades b&aacute;sicas?";
 choices[32]= new Array();
 choices[32][0] = "El numero de tipos de operandos (datos, variables, etc.), el numero de ocurrencias de los mismos, el numero de tipos de operadores (instrucciones, funciones, etc.) y el numero de ocurrencias de los mismos.";
 choices[32][1] = "El control intramodular, el grafo de control, Ia arquitectura de m&oacute;dulos y los diagramas de estructuras.";
 choices[32][2] = "El n&uacute;mero de l&iacute;neas de c&oacute;digo, el n&uacute;mero de sentencias o instrucciones completas, el n&uacute;mero de variables, el n&uacute;mero de operaciones aritm&eacute;ticas.";
 choices[32][3] = "El n&uacute;mero de flujos que terminan en un determinado modulo, el numero de estructuras de datos de las cuales el modulo extrae informaci&oacute;n, el numero de flujos que salen de un determinado modulo y el numero de estructuras de datos que actualiza el modulo.";
 answers[32] = choices[32][0];
 units[32] = "88";
 comments[32] = "Id Pregunta: 4476. NULL";


//  Id pregunta: 4665 AÃ±o de creación de pregunta: 2009-01-01
 questions[33]= "34)  HSDPA (High Speed Download Packet Access) no cumple que:";
 choices[33]= new Array();
 choices[33][0] = "Es compatible en sentido inverso con W-CDMA.";
 choices[33][1] = "Utiliza t&eacute;cnicas de redundancia incremental en la retransmisi&oacute;n de tramas.";
 choices[33][2] = "Emplea Fast Packet Scheduling, con el cual la estaci&oacute;n base decide a qu&eacute; usuarios se les enviar&aacute; datos en el siguiente marco de 2 ms.";
 choices[33][3] = "Su velocidad pico para un usuario es de 1 Mbps.";
 answers[33] = choices[33][3];
 units[33] = "108";
 comments[33] = "Id Pregunta: 4665. ";


//  Id pregunta: 5127 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  &iquest;Qu&eacute; son los servicios web?";
 choices[34]= new Array();
 choices[34][0] = "Son los servicios POST y GET de petici&oacute;n de datos mediante formlarios web bajo el protocolo de aplicaci&oacute;n de HTTP";
 choices[34][1] = "Son los servicios de petici&oacute;n de p&aacute;ginas atendidos por un servidor web";
 choices[34][2] = "Una soluci&oacute;n a los problemas de comunicaci&oacute;n entre aplicaciones en la inform&aacute;tica";
 choices[34][3] = "Son los servicios multimedia ofrecido por los nuevos portales web.";
 answers[34] = choices[34][2];
 units[34] = "113";
 comments[34] = "Id Pregunta: 5127. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5200 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  En el an&aacute;lisis DAFO, la definici&oacute;n &ldquo;Son eventos o circunstancias que se espera que ocurran o pueden inducirse a que ocurran en el mundo exterior y que podr&iacute;an tener un impacto positivo en el futuro de la Organizaci&oacute;n&rdquo; se corresponde con:";
 choices[35]= new Array();
 choices[35][0] = "Debilidades";
 choices[35][1] = "Amenazas";
 choices[35][2] = "Fortalezas";
 choices[35][3] = "Oportunidades";
 answers[35] = choices[35][3];
 units[35] = "77";
 comments[35] = "Id Pregunta: 5200. ";


//  Id pregunta: 5203 AÃ±o de creación de pregunta: 2003-01-01
 questions[36]= "37)  &iquest;Cu&aacute;l de las siguientes no es una caracter&iacute;stica de los Lenguajes Orientados a Objetos?";
 choices[36]= new Array();
 choices[36][0] = "Tipificaci&oacute;n fuerte";
 choices[36][1] = "Paso de mensajes";
 choices[36][2] = "Monotarea";
 choices[36][3] = "Manejo de excepciones";
 answers[36] = choices[36][2];
 units[36] = "82";
 comments[36] = "Id Pregunta: 5203. NULL";


//  Id pregunta: 5266 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  802.13 es el est&aacute;ndar IEEE referente a";
 choices[37]= new Array();
 choices[37][0] = "USB sin hilos";
 choices[37][1] = "WiMax";
 choices[37][2] = "Bluetooth";
 choices[37][3] = "Ninguna de las anteriores";
 answers[37] = choices[37][3];
 units[37] = "101";
 comments[37] = "Id Pregunta: 5266. ";


//  Id pregunta: 5472 AÃ±o de creación de pregunta: 2003-01-01
 questions[38]= "39)  Cual de las siguientes tecnolog&iacute;as no sirve para la implementaci&oacute;n de redes privadas virtuales";
 choices[38]= new Array();
 choices[38][0] = "SSH";
 choices[38][1] = "SLIP";
 choices[38][2] = "IPSEC";
 choices[38][3] = "SSL/TLS";
 answers[38] = choices[38][1];
 units[38] = "102";
 comments[38] = "Id Pregunta: 5472. Castilla y Le&oacute;n";


//  Id pregunta: 5759 AÃ±o de creación de pregunta: 2009-01-01
 questions[39]= "40)  &iquest;Cu&aacute;l de las siguientes no es un sistema operativo de la familia BSD?";
 choices[39]= new Array();
 choices[39][0] = "SecureBSD";
 choices[39][1] = "NetBSD";
 choices[39][2] = "DesktopBSD";
 choices[39][3] = "DragonflyBSD";
 answers[39] = choices[39][0];
 units[39] = "61";
 comments[39] = "Id Pregunta: 5759. ";


//  Id pregunta: 5767 AÃ±o de creación de pregunta: 2009-01-01
 questions[40]= "41)  &iquest;Cu&aacute;l de los siguientes es un m&eacute;todo de ordenaci&oacute;n de alternativas basado en permutaciones?";
 choices[40]= new Array();
 choices[40][0] = "TOPSIS";
 choices[40][1] = "PROMETHEE";
 choices[40][2] = "ELECTRE";
 choices[40][3] = "QUALIFLEX";
 answers[40] = choices[40][3];
 units[40] = "34";
 comments[40] = "Id Pregunta: 5767. ";


//  Id pregunta: 5939 AÃ±o de creación de pregunta: 2009-01-01
 questions[41]= "42)  &iquest;Con cu&aacute;l de las siguientes herramientas podr&iacute;amos emular una CPU PowerPC sobre una CPU f&iacute;sica AMD64?";
 choices[41]= new Array();
 choices[41][0] = "Virtual Box";
 choices[41][1] = "Qemu";
 choices[41][2] = "VMWare ESXi";
 choices[41][3] = "Xen";
 answers[41] = choices[41][1];
 units[41] = "119";
 comments[41] = "Id Pregunta: 5939. ";


//  Id pregunta: 5945 AÃ±o de creación de pregunta: 2009-01-01
 questions[42]= "43)  &iquest;Cu&aacute;l de los siguientes no facilita la ergonom&iacute;a de un sitio Web 2.0?";
 choices[42]= new Array();
 choices[42][0] = "Universos Netvibes";
 choices[42][1] = "gadgets sociales";
 choices[42][2] = "widgets";
 choices[42][3] = "Mashups";
 answers[42] = choices[42][1];
 units[42] = "120";
 comments[42] = "Id Pregunta: 5945. ";


//  Id pregunta: 5962 AÃ±o de creación de pregunta: 2010-01-01
 questions[43]= "44)  &iquest;Qu&eacute; elemento NO forma parte del modelo EFQM de excelencia?";
 choices[43]= new Array();
 choices[43][0] = "Procesos";
 choices[43][1] = "Personas";
 choices[43][2] = "Resultados en los clientes";
 choices[43][3] = "Resultados en los proveedores";
 answers[43] = choices[43][3];
 units[43] = "92";
 comments[43] = "Id Pregunta: 5962. Castilla La Mancha 2009";


//  Id pregunta: 6111 AÃ±o de creación de pregunta: 2010-01-01
 questions[44]= "45)  &iquest;Cu&aacute;les de los siguientes son los perfiles WS-I?:";
 choices[44]= new Array();
 choices[44][0] = "WS-I Basic Profile, WS-I Basic Infrastructure Profile, WS-I Basic Security Profile (BSP), WS-I Reliable Secure Profile.";
 choices[44][1] = "WS-I Basic Profile, WS-I Basic Infrastructure Profile (BIP) y WS-I Reliable Secure Profile.";
 choices[44][2] = "WS-I Basic Infrastructure Profile (BIP), WS-I Basic Security Profile (BSP) y  WS-I Reliable Secure Profile.";
 choices[44][3] = "WS-I Basic Profile, WS-I Basic Security Profile (BSP) y WS-I Reliable Secure Profile.";
 answers[44] = choices[44][3];
 units[44] = "51";
 comments[44] = "Id Pregunta: 6111. NULL";


//  Id pregunta: 6157 AÃ±o de creación de pregunta: 2010-01-01
 questions[45]= "46)  &iquest;Qu&eacute; protocolo de la capa de transporte utiliza TFTP?";
 choices[45]= new Array();
 choices[45][0] = "TCP, al igual que FTP";
 choices[45][1] = "TCP";
 choices[45][2] = "UDP";
 choices[45][3] = "UDP, al igual que FTP.";
 answers[45] = choices[45][2];
 units[45] = "112";
 comments[45] = "Id Pregunta: 6157. ";


//  Id pregunta: 6158 AÃ±o de creación de pregunta: 2010-01-01
 questions[46]= "47)  Indique la afirmaci&oacute;n correcta sobre los diferentes codecs de audio y video en videoconferencia H.323";
 choices[46]= new Array();
 choices[46][0] = "G711 y G722 son codecs de audio mientras que H261 y H263 son codecs  de video";
 choices[46][1] = "G711 y G722 son codecs de video mientras que H261 y H263 son codecs  de audio";
 choices[46][2] = "G711 y H261 son codecs de audio mientras que G722 y H263 son codecs  de video";
 choices[46][3] = "G711 y H261 son codecs de video mientras que G722 y H263 son codecs  de audio";
 answers[46] = choices[46][0];
 units[46] = "117";
 comments[46] = "Id Pregunta: 6158. ";


//  Id pregunta: 6251 AÃ±o de creación de pregunta: 2010-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[47]= new Array();
 choices[47][0] = "Las pruebas de caja blanca se miden por cobertura de segmentos, de ramas, de condici&oacute;n/decisi&oacute;n, de bucles";
 choices[47][1] = "Las pruebas de caja blanca son pruebas de Sistema";
 choices[47][2] = "Las pruebas de caja negra se miden por cobertura de segmentos, de ramas, de condici&oacute;n/decisi&oacute;n, de bucles";
 choices[47][3] = "Las pruebas de caja negra son pruebas de Regresi&oacute;n";
 answers[47] = choices[47][0];
 units[47] = "87";
 comments[47] = "Id Pregunta: 6251. TICB-2009, bloque desarrollo";


//  Id pregunta: 6253 AÃ±o de creación de pregunta: 2010-01-01
 questions[48]= "49)  Un diccionario de datos proporciona un enfoque organizado para representar las caracter&iacute;sticas de cada objeto de datos y elemento de control. Adem&aacute;s:";
 choices[48]= new Array();
 choices[48][0] = "El diccionario de datos se puede tratar como una base de datos";
 choices[48][1] = "El formato de diccionario no var&iacute;a aunque se implemente en distintas herramientas ";
 choices[48][2] = "Los flujos que partes o llegan a los almacenes definen la interfaz entre el sistema y el mundo exterior";
 choices[48][3] = "Los almacenes de datos representan la informaci&oacute;n din&aacute;mica del sistema";
 answers[48] = choices[48][0];
 units[48] = "81";
 comments[48] = "Id Pregunta: 6253. TICB-2009, bloque desarrollo";


//  Id pregunta: 6273 AÃ±o de creación de pregunta: 2010-01-01
 questions[49]= "50)  &iquest;Cu&aacute;l de los siguientes no es modelo de ciclo de vida tradicional basado en prototipos?";
 choices[49]= new Array();
 choices[49][0] = "Modelo de prototipado evolutivo";
 choices[49][1] = "Modelo de desarrollo incremental";
 choices[49][2] = "Modelo de construcci&oacute;n de prototipos";
 choices[49][3] = "Modelo basado en transformaciones";
 answers[49] = choices[49][3];
 units[49] = "76";
 comments[49] = "Id Pregunta: 6273. ";


//  Id pregunta: 6297 AÃ±o de creación de pregunta: 2010-01-01
 questions[50]= "51)  &iquest;Qu&eacute; se entiende por l&iacute;nea base en el control de versiones en el an&aacute;lisis de un sistema de informaci&oacute;n?";
 choices[50]= new Array();
 choices[50][0] = "Punto inicial de partida de un sistema de informaci&oacute;n, en el cual no hay nada desarrollado";
 choices[50][1] = "Especificaci&oacute;n o producto que ha sido revisado formalmente. Sirve de base para un desarrollo posterior";
 choices[50][2] = "Documentaci&oacute;n del sistema de informaci&oacute;n almacenada en un dispositivo de almacenamiento seguro";
 choices[50][3] = "Ninguna de las anteriores es cierta";
 answers[50] = choices[50][1];
 units[50] = "78";
 comments[50] = "Id Pregunta: 6297. ";


//  Id pregunta: 6413 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)  El Watermarking es una t&eacute;cnica para comprobar la legalidad del software, &iquest;De qu&eacute; tipo?";
 choices[51]= new Array();
 choices[51][0] = "An&oacute;nima";
 choices[51][1] = "Esteganogr&aacute;fica";
 choices[51][2] = "Asim&eacute;trica";
 choices[51][3] = "Ninguna de las anteriores";
 answers[51] = choices[51][1];
 units[51] = "37";
 comments[51] = "Id Pregunta: 6413. NULL";


//  Id pregunta: 6577 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  El filtrado de paquetes no proporciona";
 choices[52]= new Array();
 choices[52][0] = "Bajo nivel de seguridad";
 choices[52][1] = "Protecci&oacute;n sobre la capa de red";
 choices[52][2] = "Alto rendimiento y escalabilidad";
 choices[52][3] = "Todas las respuestas anteriores son correctas";
 answers[52] = choices[52][1];
 units[52] = "111";
 comments[52] = "Id Pregunta: 6577. NULL";


//  Id pregunta: 6579 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  El protocolo IP";
 choices[53]= new Array();
 choices[53][0] = "Define el datagrama";
 choices[53][1] = "Define el esquema de direccionamiento";
 choices[53][2] = "Mueve los datos entre la capa de red y de transporte";
 choices[53][3] = "Todas las respuestas anteriores son correctas";
 answers[53] = choices[53][3];
 units[53] = "100";
 comments[53] = "Id Pregunta: 6579. NULL";


//  Id pregunta: 6582 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  &iquest;A qu&eacute; ficheros de los enumerados a continuaci&oacute;n corresponde no aplicar las medidas de nivel medio?";
 choices[54]= new Array();
 choices[54][0] = "A los recabados con fines policiales sin consentimiento de las personas afectadas";
 choices[54][1] = "A los relativos a la comisi&oacute;n de infracciones administrativas y penales";
 choices[54][2] = "A los de las Administraciones tributarias y que se relacionen con el ejercicio de sus potestades tributarias";
 choices[54][3] = "Todos los ficheros mencionados anteriormente deben aplicar medidas de seguridad de nivel medio.";
 answers[54] = choices[54][3];
 units[54] = "29";
 comments[54] = "Id Pregunta: 6582. NULL";


//  Id pregunta: 6616 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  Seg&uacute;n M&eacute;trica el grupo de Aseguramiento de la Calidad participa en el proyecto bajo el perfil de";
 choices[55]= new Array();
 choices[55][0] = "Consultor";
 choices[55][1] = "Analista";
 choices[55][2] = "Calidad";
 choices[55][3] = "Experto";
 answers[55] = choices[55][1];
 units[55] = "86";
 comments[55] = "Id Pregunta: 6616. NULL";


//  Id pregunta: 7291 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  Es un proveedor de SW de conversi&oacute;n texto-voz (TTS):";
 choices[56]= new Array();
 choices[56][0] = "Nuance";
 choices[56][1] = "Loquendo";
 choices[56][2] = "a y b son correctas";
 choices[56][3] = "a y b son incorrectas";
 answers[56] = choices[56][1];
 units[56] = "94";
 comments[56] = "Id Pregunta: 7291. NULL";


//  Id pregunta: 7335 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes organizaciones espa&ntilde;olas no es miembro de ETSI?";
 choices[57]= new Array();
 choices[57][0] = "AENOR";
 choices[57][1] = "TELEFONICA S.A.";
 choices[57][2] = "UNIVERSIDAD AUT&Oacute;NOMA DE MADRID";
 choices[57][3] = "MINISTERIO DE INDUSTRIA, TURISMO y COMERCIO";
 answers[57] = choices[57][0];
 units[57] = "42";
 comments[57] = "Id Pregunta: 7335. http://portal.etsi.org/Portal_IntegrateAppli/QueryResult.asp?Alone=1&amp;SortBy=&amp;SortDirection=&amp;Param=#";


//  Id pregunta: 7932 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)   Seg&uacute;n lo establecido por la Ley 32/2003, de 3 de noviembre, General de Telecomunicaciones, permitir el empleo de enlaces procedentes del exterior del territorio nacional que se faciliten a trav&eacute;s de sat&eacute;lites cuyo uso no haya sido previamente autorizado:";
 choices[58]= new Array();
 choices[58][0] = " Es una infracci&oacute;n muy grave.";
 choices[58][1] = " Es una infracci&oacute;n grave.";
 choices[58][2] = " Es una infracci&oacute;n leve.";
 choices[58][3] = " No es una infracci&oacute;n.";
 answers[58] = choices[58][0];
 units[58] = "NULL";
 comments[58] = "Id Pregunta: 7932. Map 2006";


//  Id pregunta: 8336 AÃ±o de creación de pregunta: 2011-01-01
 questions[59]= "60)  Se&ntilde;ale cu&aacute;l de las siguientes NO es una t&eacute;cnica de la Interfaz de Gesti&oacute;n de proyectos de la metodolog&iacute;a M&eacute;trica v3:";
 choices[59]= new Array();
 choices[59][0] = "Diagrama de Extrapolaci&oacute;n.";
 choices[59][1] = "Staffing Size.";
 choices[59][2] = "Catalogaci&oacute;n.";
 choices[59][3] = "Diagrama de Gantt.";
 answers[59] = choices[59][2];
 units[59] = "86";
 comments[59] = "Id Pregunta: 8336. Examen TIC A2 2010";


//  Id pregunta: 8349 AÃ±o de creación de pregunta: 2011-01-01
 questions[60]= "61)  Dentro de los productos que engloba la plataforma .NET, las funciones de un servidor web las realiza:";
 choices[60]= new Array();
 choices[60][0] = "IIS (Internet Information Services)";
 choices[60][1] = "Apache";
 choices[60][2] = "Joomla";
 choices[60][3] = "Microsoft Web Server";
 answers[60] = choices[60][0];
 units[60] = "115";
 comments[60] = "Id Pregunta: 8349. Examen TIC A2 2010";


//  Id pregunta: 8354 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  A partir de ASP.NET 2.0, &iquest;en qu&eacute; carpeta se guarda el c&oacute;digo compilado para controles, componentes y otro c&oacute;digo que pueda ser referenciado por la aplicaci&oacute;n (los archivos dll)?";
 choices[61]= new Array();
 choices[61][0] = "App_Data.";
 choices[61][1] = "Bin.";
 choices[61][2] = "App_WebReferences";
 choices[61][3] = "Compilation";
 answers[61] = choices[61][1];
 units[61] = "59,115";
 comments[61] = "Id Pregunta: 8354. Examen TIC A2 2010";


//  Id pregunta: 8523 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  &iquest;Qu&eacute; tama&ntilde;o tiene una celda ATM?";
 choices[62]= new Array();
 choices[62][0] = "48 bytes, de los cuales 44 son para transmisi&oacute;n de informaci&oacute;n y, el resto, para uso de campos de control.";
 choices[62][1] = "El campo de direcci&oacute;n o cabecera tiene una longitud de 2 octetos, ampiable hasta 4 y un campo de informaci&oacute;n de entre 1 y 8000 bytes (1600 por defecto).";
 choices[62][2] = "Los doce primeros octetos est&aacute;n presentes en cada celda, como cabecera de control, con un cuerpo de informaci&oacute;n de longitud variable.";
 choices[62][3] = "53 bytes, de los cuales 48 (opcionalmente 44) son para trasiego de informaci&oacute;n y, los restantes, para uso de campos de control (cabecera) con datos de direccionamiento";
 answers[62] = choices[62][3];
 units[62] = "109";
 comments[62] = "Id Pregunta: 8523. Examen TIC A2 2010 interna";


//  Id pregunta: 8544 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  1 &iquest;En qu&eacute; RFC se describe el modelo de seguridad basado en usuario (USM o User-basad Security Model) para la versi&oacute;n 3 de SNMP?";
 choices[63]= new Array();
 choices[63][0] = "RFC 1157.";
 choices[63][1] = "RFC 1441";
 choices[63][2] = "RFC 3414";
 choices[63][3] = "RFC 3854";
 answers[63] = choices[63][2];
 units[63] = "104";
 comments[63] = "Id Pregunta: 8544. Examen TIC A2 2010 interna";


//  Id pregunta: 8670 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  Un acceso RDSI primario consta de";
 choices[64]= new Array();
 choices[64][0] = "Dos canales B y un canal D";
 choices[64][1] = "Dos canales B y ning&uacute;n canal D";
 choices[64][2] = "Treinta canales B y un canal D";
 choices[64][3] = "Treinta canales B y dos canales D";
 answers[64] = choices[64][2];
 units[64] = "103";
 comments[64] = "Id Pregunta: 8670. Examen UPM A2 2011";


//  Id pregunta: 8736 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  La tarjeta DNIe tiene capacidad para la realizaci&oacute;n de firmas electr&oacute;nicas en:";
 choices[65]= new Array();
 choices[65][0] = "Modo raw y modo relleno PKCS#11";
 choices[65][1] = "&Uacute;nicamente en modo raw.";
 choices[65][2] = "&Uacute;nicamente en modo relleno PKCS#11";
 choices[65][3] = "Ninguna de las anteriores.";
 answers[65] = choices[65][0];
 units[65] = "74";
 comments[65] = "Id Pregunta: 8736. Examen TIC A2 2010 interna";


//  Id pregunta: 8757 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  En un esquema de multiprogramaci&oacute;n en memoria real, independientemente de que est&eacute; basado en particiones de tama&ntilde;o fijas o de tama&ntilde;o variable, &iquest;en qu&eacute; consiste el algoritmo del &quot;siguiente ajuste&quot; para elegir el tama&ntilde;o de la partici&oacute;n en la que alojar un programa?";
 choices[66]= new Array();
 choices[66][0] = "Se asigna el primer hueco que sea mayor al tama&ntilde;o deseado";
 choices[66][1] = "Se asigna el primer hueco que sea mayor al tama&ntilde;o deseado, pero dejando un apuntador al lugar en donde se asigno el &uacute;ltimo hueco";
 choices[66][2] = "Se asigna el hueco cuyo tama&ntilde;o exceda en la mayor cantidad al tama&ntilde;o deseado";
 choices[66][3] = "Se asigna el hueco cuyo tama&ntilde;o exceda en la menor cantidad al tama&ntilde;o deseado.";
 answers[66] = choices[66][1];
 units[66] = "52";
 comments[66] = "Id Pregunta: 8757. Examen TIC A2 2010 interna";


//  Id pregunta: 8759 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l de los siguientes NO es un lenguaje orientado a objetos?";
 choices[67]= new Array();
 choices[67][0] = "Java.";
 choices[67][1] = "C.";
 choices[67][2] = "Smalltalk.";
 choices[67][3] = "Ada.";
 answers[67] = choices[67][1];
 units[67] = "82, 84";
 comments[67] = "Id Pregunta: 8759. Examen TIC A2 2010 interna";


//  Id pregunta: 8768 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  Identificar la descripci&oacute;n del comando IP ERR&Oacute;NEO:";
 choices[68]= new Array();
 choices[68][0] = "NETSTAT: es una herramienta de l&iacute;nea de comandos que muestra un listado de las conexiones activas de un ordenador, tanto entrantes como salientes. Permite mostrar las estad&iacute;sticas de protocolos y las conexiones TCP/IP actuales";
 choices[68][1] = "IPCONFIG: Muestra o actualiza la configuraci&oacute;n de red TCP/IP";
 choices[68][2] = "NBTSTAT: Muestra estad&iacute;sticas del protocolo y conexiones TCP/IP actuales utilizando NBT. NBTStat es una herramienta que resulta de utilidad para solucionar problemas con la resoluci&oacute;n de nombres llevada a cabo por NetBIOS.";
 choices[68][3] = "TRACERT Muestra todas las direcciones IP intermedias por las que pasa un paquete entre el equipo remoto y la direcci&oacute;n IP especificada.";
 answers[68] = choices[68][3];
 units[68] = "100";
 comments[68] = "Id Pregunta: 8768. Examen TIC A2 2010 interna";


//  Id pregunta: 8804 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l es el comit&eacute; del W3C encargado de promover y estandarizar la accesibilidad Web?";
 choices[69]= new Array();
 choices[69][0] = "WAI";
 choices[69][1] = "WCAG";
 choices[69][2] = "ATAG";
 choices[69][3] = "UAAG";
 answers[69] = choices[69][0];
 units[69] = "39";
 comments[69] = "Id Pregunta: 8804. Examen UPM A2 2011";


//  Id pregunta: 8855 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  &iquest;Qu&eacute; tipo de driver JDBC conecta a la base de datos directamente usando su protocolo nativo?";
 choices[70]= new Array();
 choices[70][0] = "Type 1 JDBC Driver";
 choices[70][1] = "Type 2 JDBC Driver";
 choices[70][2] = "Type 3 JDBC Driver";
 choices[70][3] = "Type 4 JDBC Driver";
 answers[70] = choices[70][3];
 units[70] = "58, 60";
 comments[70] = "Id Pregunta: 8855. Analista Ayto. Madrid 2010";


//  Id pregunta: 8918 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  Indicar qu&eacute; es cierto acerca de las interrupciones de Entrada/Salida:";
 choices[71]= new Array();
 choices[71][0] = "Cuando se produce una interrupci&oacute;n, el registro contador de programa de la CPU cambia su valor, apuntando a la direcci&oacute;n de comienzo de la rutina de tratamiento de la interrupci&oacute;n.";
 choices[71][1] = "Los controladores DMA, al acceder directamente a la memoria principal, no hacen uso de interrupciones.";
 choices[71][2] = "Las interrupciones son generadas por la CPU para informar a los dispositivos perif&eacute;ricos de diferentes situaciones excepcionales en la ejecuci&oacute;n de los programas.";
 choices[71][3] = "Ninguna de las anteriores es cierta";
 answers[71] = choices[71][0];
 units[71] = "52";
 comments[71] = "Id Pregunta: 8918. Operador Ayto. Madrid 2010";


//  Id pregunta: 9087 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  En relaci&oacute;n a los programas de ordenadro, indicar mediante que ley se protegen.";
 choices[72]= new Array();
 choices[72][0] = "Mediante la Ley 23/2006 por la que se modifica el texto refundido de la Ley de Propiedad Intelectual";
 choices[72][1] = "Mediante la Ley de Propiedad Intelectual";
 choices[72][2] = "Mediante la Directiva de derechos de autor 2001/29";
 choices[72][3] = "Mediante la Ley de Patentes";
 answers[72] = choices[72][1];
 units[72] = "36";
 comments[72] = "Id Pregunta: 9087. ";


//  Id pregunta: 9113 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  &iquest;Cu&aacute;ndo se publicaron las taxonom&iacute;as de Flynn?";
 choices[73]= new Array();
 choices[73][0] = "En 1950";
 choices[73][1] = "Por primera vez en 1966 y por segunda vez en 1970";
 choices[73][2] = "En 1980";
 choices[73][3] = "En la d&eacute;cada de los noventa.";
 answers[73] = choices[73][1];
 units[73] = "45";
 comments[73] = "Id Pregunta: 9113. ";


//  Id pregunta: 9173 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  Respecto a la normativa de facturaci&oacute;n, se&ntilde;ale la respuesta INCORRECTA:";
 choices[74]= new Array();
 choices[74][0] = "El Real Decreto 1619/2012 regula las obligaciones de facturaci&oacute;n desde el 1 de enero de 2014";
 choices[74][1] = "No se exigir&aacute; la obligaci&oacute;n de expedir factura en el caso de determinadas prestaciones de servicios financieros y de seguros, salvo cuando dichas operaciones se entiendan realizadas en el territorio de aplicaci&oacute;n del Impuesto, o en otro Estado miembro de la Uni&oacute;n Europea, y est&eacute;n sujetas y no exentas.";
 choices[74][2] = "Se establece un sistema de facturaci&oacute;n basado en dos tipos de facturas: la factura completa u ordinaria y la factura simplificada, que viene a sustituir a los denominados tiques.";
 choices[74][3] = "Todas son verdaderas";
 answers[74] = choices[74][0];
 units[74] = "70";
 comments[74] = "Id Pregunta: 9173. ";


//  Id pregunta: 9213 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  Dentro de una red FC existen una serie de servicios b&aacute;sicos para su correcto funcionamiento y que son implementadas autom&aacute;ticamente de forma distribuida entre todos los switches que componen la red. Son los siguientes:";
 choices[75]= new Array();
 choices[75][0] = "SNS, RCSN, Login, Servicio de gesti&oacute;n y Servicio de tiempos.";
 choices[75][1] = "Servicio de gesti&oacute;n y servicio de tiempos";
 choices[75][2] = "Login";
 choices[75][3] = "Servidor de nombres que asigna los FCID y permite traducir de WWN a FCID.";
 answers[75] = choices[75][0];
 units[75] = "48";
 comments[75] = "Id Pregunta: 9213. ";


//  Id pregunta: 9236 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  Antes de la serie 2.6 del kernel de linux, &iquest;qu&eacute; versiones del n&uacute;cleo existieron?";
 choices[76]= new Array();
 choices[76][0] = "Versi&oacute;n de producci&oacute;n y de desarrollo.";
 choices[76][1] = "Versi&oacute;n estable hasta el momento y versiones experimentales que se usaban para programar, comprobar y verificar nuevas caracter&iacute;sticas.";
 choices[76][2] = "La versi&oacute;n estable era el resultado final de las versiones de desarrollo o experimentales.";
 choices[76][3] = "Todas son correctas.";
 answers[76] = choices[76][3];
 units[76] = "53";
 comments[76] = "Id Pregunta: 9236. ";


//  Id pregunta: 9301 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  Entre las tareas del auditor no se incluye:";
 choices[77]= new Array();
 choices[77][0] = "Comprender y evaluar la metodolog&iacute;a seguida en el proceso de desarrollo";
 choices[77][1] = "Identificar las fases de la metodolog&iacute;a de desarrollo";
 choices[77][2] = "Revisar el cumplimiento de est&aacute;ndares y normas de control interno";
 choices[77][3] = "Desarrollar e implantar los cambios necesarios para el cumplimiento con est&aacute;ndares y normas";
 answers[77] = choices[77][3];
 units[77] = "33";
 comments[77] = "Id Pregunta: 9301. ";


//  Id pregunta: 9336 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  &iquest;Qu&eacute; conjunto de normas estandarizan los sistemas de cableado en clases?";
 choices[78]= new Array();
 choices[78][0] = "EIA/TIA 586";
 choices[78][1] = "SO/EIS DIS 11108";
 choices[78][2] = "EIA/TIA 568";
 choices[78][3] = "ISO/EIS DIS 11801";
 answers[78] = choices[78][3];
 units[78] = "99";
 comments[78] = "Id Pregunta: 9336. TIC a2 AGE 2011";


//  Id pregunta: 9372 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  En un circuito virtual:";
 choices[79]= new Array();
 choices[79][0] = "El Equipo de Terminaci&oacute;n del Circuito de Datos (ETCD) es un nodo frontera de red, a trav&eacute;s del cual los datos del usuario atraviesan la misma hasta llegar al ETCD remoto.";
 choices[79][1] = "La Central de Conmutaci&oacute;n de Paquetes es la encargada del paso de paquetes al siguiente nodo dentro del circuito virtual establecido.";
 choices[79][2] = "Un Circuito de Datos es la conexi&oacute;n virtual establecida entre los dos ETCD (Equipos de Terminaci&oacute;n del Circuito de Datos) involucrados en una transmisi&oacute;n.";
 choices[79][3] = "Todas son correctas.";
 answers[79] = choices[79][3];
 units[79] = "101";
 comments[79] = "Id Pregunta: 9372. ";


//  Id pregunta: 9521 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  &iquest;Cu&aacute;les de los siguientes no es un framework de desarrollo en Java?";
 choices[80]= new Array();
 choices[80][0] = "Apache Struts";
 choices[80][1] = "Hibernate";
 choices[80][2] = "Tapestry";
 choices[80][3] = "Todos los anteriores son frameworks de desarrollo en Java";
 answers[80] = choices[80][3];
 units[80] = "116";
 comments[80] = "Id Pregunta: 9521. NULL";


//  Id pregunta: 9911 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  &iquest;Cu&aacute;l de los siguientes contradice un principio de las metodolog&iacute;as &aacute;giles de desarrollo software (principios del Manifiesto &Aacute;gil)?";
 choices[81]= new Array();
 choices[81][0] = "Son bienvenidos los requisitos cambiantes, incluso si llegan en las etapas tard&iacute;as del desarrollo.";
 choices[81][1] = "Los responsables de negocio y los desarrolladores trabajan juntos de forma cotidiana durante todo el proyecto.";
 choices[81][2] = "El software, en su fase de dise&ntilde;o, es la medida principal de progreso.";
 choices[81][3] = "La simplicidad, o el arte de maximizar la cantidad de trabajo no realizado, es esencial.";
 answers[81] = choices[81][2];
 units[81] = "79";
 comments[81] = "Id Pregunta: 9911. TIC A2, Examen 2013";


//  Id pregunta: 9944 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  Se&ntilde;ale la respuesta correcta. En la programaci&oacute;n orientada a objetos en Java, s&iacute; una clase hereda de otra clase un m&eacute;todo abstracto:";
 choices[82]= new Array();
 choices[82][0] = "Tiene que implementar ese m&eacute;todo, si no es as&iacute;,la clase que hereda deber&aacute; ser definida abstracta. ";
 choices[82][1] = "Puede usar el m&eacute;todo de la clase de la que ha heredado.";
 choices[82][2] = "Puede usar el m&eacute;todo de la clase de la que ha heredado siempre que est&eacute; declarado como public. ";
 choices[82][3] = "No se puede heredar de una clase que tenga alg&uacute;n m&eacute;todo abstracto. ";
 answers[82] = choices[82][0];
 units[82] = "82, 60";
 comments[82] = "Id Pregunta: 9944. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10080 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  En el contexto de comunicaciones inal&aacute;mbricas, MIMO significa:";
 choices[83]= new Array();
 choices[83][0] = "Multiple Input Multiple Output.";
 choices[83][1] = "Massive Input Massive Output.";
 choices[83][2] = "Multiplexed Input Multiplexed Output.";
 choices[83][3] = "Mapped Input Mapped Output.";
 answers[83] = choices[83][0];
 units[83] = "108";
 comments[83] = "Id Pregunta: 10080. TIC A2, libre, Examen 2013";


//  Id pregunta: 10118 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Seleccionar la correcta:";
 choices[84]= new Array();
 choices[84][0] = "Tanto los router como los switches definen dominios de colisi&oacute;n y difusi&oacute;n";
 choices[84][1] = "Los router definen dominios de colisi&oacute;n pero no de difusi&oacute;n";
 choices[84][2] = "Los router definen dominios de difusi&oacute;n y de colisi&oacute;n";
 choices[84][3] = "Los switches definen dominios de colisi&oacute;n y difusi&oacute;n.";
 answers[84] = choices[84][2];
 units[84] = "102";
 comments[84] = "Id Pregunta: 10118. ";


//  Id pregunta: 10148 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  En relaci&oacute;n a las Comunicaciones comerciales por v&iacute;a electr&oacute;nica reguladas por la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico, Cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[85]= new Array();
 choices[85][0] = "Las comunicaciones comerciales realizadas por v&iacute;a electr&oacute;nica deber&aacute;n ser claramente identificables como tales y la persona f&iacute;sica o jur&iacute;dica en nombre de la cual se realizan tambi&eacute;n deber&aacute; ser claramente identificable.";
 choices[85][1] = "En el caso en el que tengan lugar a trav&eacute;s de correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nica equivalente incluir&aacute;n al comienzo del mensaje la palabra ''publicidad'' o la abreviatura ''publi''";
 choices[85][2] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nica equivalente que previamente no hubieran sido solicitadas o expresamente autorizadas por los destinatarios de las mismas.";
 choices[85][3] = "Lo dispuesto en el apartado anterior no ser&aacute; de aplicaci&oacute;n cuando exista una relaci&oacute;n contractual previa, siempre que el prestador hubiera obtenido de forma l&iacute;cita los datos de contacto del destinatario y los empleara para el env&iacute;o de comunicaciones comerciales referentes a productos o servicios de su propia empresa que sean similares a los que inicialmente fueron objeto de contrataci&oacute;n con el cliente.";
 answers[85] = choices[85][1];
 units[85] = "30";
 comments[85] = "Id Pregunta: 10148. ";


//  Id pregunta: 10168 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  En relaci&oacute;n con los operandos del &aacute;lgebra relacional, se cumple que:";
 choices[86]= new Array();
 choices[86][0] = "La Uni&oacute;n de las relaciones R y S puede aplicarse a&uacute;n cuando R y S no tengan igual grado y/o compatibilidad de dominios";
 choices[86][1] = "El Outer Join incluye en la relaci&oacute;n resultante las tuplas de una o ambas relaciones que en los atributos comunes no tienen valores iguales o correspondientes";
 choices[86][2] = "El grado de la relaci&oacute;n resultante de la Uni&oacute;n Natural o Natural Join entre dos relaciones R y S es igual al grado de R + el grado de S";
 choices[86][3] = "La intersecci&oacute;n es un operador fundamental del &aacute;lgebra relacional";
 answers[86] = choices[86][1];
 units[86] = "58";
 comments[86] = "Id Pregunta: 10168. ";


//  Id pregunta: 10195 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;Cual es la afirmaci&oacute;n falsa respecto a VDSL2 (Very-High-Bit-Rate Digital Subscriber Line 2)?";
 choices[87]= new Array();
 choices[87][0] = "Corresponde a la norma ITU-T G.993.2";
 choices[87][1] = "No permite la modalidad sim&eacute;trica";
 choices[87][2] = "Puede alcanzar velocidades de 100 Mbps a 1 Km de distancia de la central ";
 choices[87][3] = "A distancias mayores de 2 Km la velocidad equivale a un ADSL2";
 answers[87] = choices[87][1];
 units[87] = "107";
 comments[87] = "Id Pregunta: 10195. NULL";


//  Id pregunta: 10230 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  Se&ntilde;ala el m&eacute;todo que es usado para obtener un par&aacute;metro de inicializaci&oacute;n desde ServletContext:";
 choices[88]= new Array();
 choices[88][0] = "Object getInitParameter(int index)";
 choices[88][1] = "Object getInitParameter(String name)";
 choices[88][2] = "String getInitParameter(String name)";
 choices[88][3] = "String getParameter(String name)";
 answers[88] = choices[88][2];
 units[88] = "116";
 comments[88] = "Id Pregunta: 10230. NULL";


//  Id pregunta: 10267 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  &iquest;Es posible denegar temporalmente una transfferencia internacional de datos personales previamente autorizada?";
 choices[89]= new Array();
 choices[89][0] = "Puede hacerlo el Director de la AEPD bajo determinadas circunstancias especificadas en la Ley";
 choices[89][1] = "Puede hacerlo el Consejo Consultivo de la AEPD bajo determinadas circunstancias especificadas en la Ley";
 choices[89][2] = "Puede hacerlo la Secretar&iacute;a de la AEPD bajo determinadas circunstancias especificadas en la Ley";
 choices[89][3] = "Una vez autorizada la transferencia s&oacute;lo es posible denegarla por indicaci&oacute;n espec&iacute;fica de la Comisi&oacute;n Europea";
 answers[89] = choices[89][0];
 units[89] = "29";
 comments[89] = "Id Pregunta: 10267. Art&iacute;culo 70.3 del RD 1720/2007";


//  Id pregunta: 10429 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  La virtualizaci&oacute;n basada en VDI (Virtual Desktop Infrastructure) ";
 choices[90]= new Array();
 choices[90][0] = "permite ratios de consolidaci&oacute;n de 10 a 1 respecto a servidores de terminales. ";
 choices[90][1] = "est&aacute; basado en la soluci&oacute;n XenApp de Citrix.";
 choices[90][2] = "aporta aislamiento y control sobre los puestos de trabajo gestionados.";
 choices[90][3] = "no est&aacute; dise&ntilde;ado para soportar el perfil de Desarrolladores, por el control limitado del entorno.  ";
 answers[90] = choices[90][2];
 units[90] = "119";
 comments[90] = "Id Pregunta: 10429. Examen TIC A1 2013";


//  Id pregunta: 10468 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  &iquest;Cu&aacute;les son los nuevos elementos de HTML5?";
 choices[91]= new Array();
 choices[91][0] = "header y footer.";
 choices[91][1] = "nav.";
 choices[91][2] = "sections y articles.";
 choices[91][3] = "Todas las anteriores.";
 answers[91] = choices[91][3];
 units[91] = "69";
 comments[91] = "Id Pregunta: 10468. NULL";


//  Id pregunta: 10897 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  El tama&ntilde;o de una cabecera MPLS seg&uacute;n la RFC 3032, es de:";
 choices[92]= new Array();
 choices[92][0] = "20 bits.";
 choices[92][1] = "32 bits.";
 choices[92][2] = "48 bits.";
 choices[92][3] = "64 bits.";
 answers[92] = choices[92][1];
 units[92] = "100";
 comments[92] = "Id Pregunta: 10897. Examen GSI 2014";


//  Id pregunta: 11073 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l es la secuencia de eventos CORRECTA para elegir una herramienta tecnol&oacute;gica?";
 choices[93]= new Array();
 choices[93][0] = "Seleccionar; Requerimientos; Criterios de Selecci&oacute;n, Evaluaci&oacute;n";
 choices[93][1] = "Criterios de Selecci&oacute;n; Requerimientos; Evaluaci&oacute;n; Seleccionar";
 choices[93][2] = "Requerimientos; Selecci&oacute;n de Criterios, Seleccionar, Evaluar";
 choices[93][3] = "Requerimientos; Selecci&oacute;n de Criterios; Evaluar; Seleccionar";
 answers[93] = choices[93][3];
 units[93] = "98";
 comments[93] = "Id Pregunta: 11073. ";


//  Id pregunta: 11115 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  El &oacute;rgano competente para la resoluci&oacute;n de un recurso especial en materia de contrataci&oacute;n en la AGE es:";
 choices[94]= new Array();
 choices[94][0] = "El Tribunal Administrativo Central de Recursos Contractuales";
 choices[94][1] = "El Tribunal Contencioso Administrativo";
 choices[94][2] = "El Tribunal de Cuentas";
 choices[94][3] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado";
 answers[94] = choices[94][0];
 units[94] = "41";
 comments[94] = "Id Pregunta: 11115. ";


//  Id pregunta: 11161 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Qu&eacute; roles deben participar en la Tarea de Evaluaci&oacute;n de Alternativas y Selecci&oacute;n, seg&uacute;n la metodolog&iacute;a de M&eacute;trica v3?";
 choices[95]= new Array();
 choices[95][0] = "Jefe de Proyecto";
 choices[95][1] = "Jefe de Proyecto y Comit&eacute; de Direcci&oacute;n";
 choices[95][2] = "Jefe de Proyecto, Comit&eacute; de Direcci&oacute;n y Analistas";
 choices[95][3] = "Jefe de Proyecto, Comit&eacute; de Direcci&oacute;n, Analistas y Usuarios Expertos";
 answers[95] = choices[95][2];
 units[95] = "86";
 comments[95] = "Id Pregunta: 11161. ";


//  Id pregunta: 11208 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l es el porcentaje objetivo de personas que realicen compras online para 2015 seg&uacute;n la Agenda Digital Europea?";
 choices[96]= new Array();
 choices[96][0] = "0.2";
 choices[96][1] = "0.33";
 choices[96][2] = "0.5";
 choices[96][3] = "0.8";
 answers[96] = choices[96][2];
 units[96] = "30";
 comments[96] = "Id Pregunta: 11208. ";


//  Id pregunta: 11376 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l es el prop&oacute;sito del proceso de peticiones de servicio?";
 choices[97]= new Array();
 choices[97][0] = "Tramitar las peticiones de servicio de los usuarios";
 choices[97][1] = "Asegurar que todas las peticiones dentro de una organizaci&oacute;n de TI se satisfagan";
 choices[97][2] = "Asegurar el cumplimiento de una solicitud de cambio";
 choices[97][3] = "Asegurar que los acuerdos de nivel de servicio (SLA) son cumplidos";
 answers[97] = choices[97][0];
 units[97] = "98";
 comments[97] = "Id Pregunta: 11376. ";


//  Id pregunta: 11431 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Seg&uacute;n la Ley 9/2014, &iquest;cu&aacute;l de las siguientes no es una facultad del Gobierno?:";
 choices[98]= new Array();
 choices[98][0] = "La elaboraci&oacute;n de los planes de utilizaci&oacute;n del espectro.";
 choices[98][1] = "La aprobaci&oacute;n de los planes de utilizaci&oacute;n del espectro.";
 choices[98][2] = "La elaboraci&oacute;n de los planes nacionales de numeraci&oacute;n.";
 choices[98][3] = "La aprobaci&oacute;n de los planes nacionales de numeraci&oacute;n.";
 answers[98] = choices[98][2];
 units[98] = "110";
 comments[98] = "Id Pregunta: 11431. ";


//  Id pregunta: 11727 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Qu&eacute; afirmaci&oacute;n describe una caracter&iacute;stica de IPsec?";
 choices[99]= new Array();
 choices[99][0] = "IPsec puede proteger el tr&aacute;fico en las capas 1 a 3.";
 choices[99][1] = "IPsec funciona independiente del protocolo de capa 2";
 choices[99][2] = "El cifrado puede causar problemas con el enrutamiento.";
 choices[99][3] = "Se trata de una suite propietaria";
 answers[99] = choices[99][1];
 units[99] = "111";
 comments[99] = "Id Pregunta: 11727. NULL";


