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

//  Id pregunta: 8 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes puntos de verificaci&oacute;n de WAI (en la norma WCAG 1.0) no es de prioridad 1?";
 choices[0]= new Array();
 choices[0][0] = "&quot;Titule cada marco para facilitar la identificaci&oacute;n y navegaci&oacute;n de los mismos&quot;";
 choices[0][1] = "&quot;En las tablas de datos, identifique los encabezamientos de fila y columna&quot;";
 choices[0][2] = "&quot;Asegure que toda la informaci&oacute;n transmitida a trav&eacute;s de los colores tambi&eacute;n est&eacute; disponible sin color, por ejemplo mediante el contexto o por marcadores&quot;";
 choices[0][3] = "&quot;Utilice hojas de estilo para controlar la maquetaci&oacute;n y la presentaci&oacute;n&quot;";
 answers[0] = choices[0][3];
 units[0] = "39";
 comments[0] = "Id Pregunta: 8. ";


//  Id pregunta: 58 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;En qu&eacute; fuentes se encuentran las normas a aplicar sobre sistemas abiertos en la Administraci&oacute;n?:";
 choices[1]= new Array();
 choices[1][0] = "CIABSI y CSI";
 choices[1][1] = "MAP y MJI";
 choices[1][2] = "Normas ISO, X/OPEN y EPHOS";
 choices[1][3] = "ANSI, AENOR, DIN e IRANOR";
 answers[1] = choices[1][2];
 units[1] = "40";
 comments[1] = "Id Pregunta: 58. ";


//  Id pregunta: 71 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas ignora la cuant&iacute;a de la diferencia y s&oacute;lo se&ntilde;ala si existe o no?:";
 choices[2]= new Array();
 choices[2][0] = "M&eacute;todo Promethee";
 choices[2][1] = "Utilidad multiatributo";
 choices[2][2] = "Permutaci&oacute;n";
 choices[2][3] = "Ninguno de los anteriores";
 answers[2] = choices[2][0];
 units[2] = "34";
 comments[2] = "Id Pregunta: 71. ";


//  Id pregunta: 89 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Qui&eacute;nes son miembros del comit&eacute; JTC-1, responsable de la elaboraci&oacute;n de normas de Tratamiento de la Informaci&oacute;n excepto de los servicios p&uacute;blicos de comunicaciones?:";
 choices[3]= new Array();
 choices[3][0] = "Los pa&iacute;ses pertenecientes a la Uni&oacute;n Europea";
 choices[3][1] = "Las instituciones nacionales de normalizaci&oacute;n y la Comisi&oacute;n de la Uni&oacute;n Europea";
 choices[3][2] = "Una representaci&oacute;n del comit&eacute; directivo de la ISO";
 choices[3][3] = "El JTC-1 es una asociaci&oacute;n abierta, no un comit&eacute; de elaboraci&oacute;n de normas";
 answers[3] = choices[3][1];
 units[3] = "42";
 comments[3] = "Id Pregunta: 89. ";


//  Id pregunta: 114 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  De acuerdo con la Ley de Protecci&oacute;n de Datos, mantener los ficheros, locales, programas o equipos que contengan datos de car&aacute;cter personal sin las debidas condiciones de seguridad que por v&iacute;a reglamentaria se determinen, es una infracci&oacute;n:";
 choices[4]= new Array();
 choices[4][0] = "Leve ";
 choices[4][1] = "Grave";
 choices[4][2] = "Muy grave ";
 choices[4][3] = "No es infracci&oacute;n";
 answers[4] = choices[4][1];
 units[4] = "29";
 comments[4] = "Id Pregunta: 114. ";


//  Id pregunta: 125 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  El American National Standard Institute (ANSI):";
 choices[5]= new Array();
 choices[5][0] = "Es el representante en EE.UU. de la ISO";
 choices[5][1] = "Ha desarrollado el est&aacute;ndar FDDI";
 choices[5][2] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son falsas";
 choices[5][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son verdaderas";
 answers[5] = choices[5][0];
 units[5] = "42";
 comments[5] = "Id Pregunta: 125. ";


//  Id pregunta: 163 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  El siguiente punto de verificaci&oacute;n de WAI (en la norma WCAG 1.0): &quot;Hasta que las aplicaciones de usuario permitan controlarlo, evite provocar parpadeo en la pantalla&quot;, &iquest;a qu&eacute; nivel de prioridad pertenece?:";
 choices[6]= new Array();
 choices[6][0] = "1";
 choices[6][1] = "2";
 choices[6][2] = "3";
 choices[6][3] = "no es ning&uacute;n punto de verificaci&oacute;n contemplado en WAI";
 answers[6] = choices[6][0];
 units[6] = "39";
 comments[6] = "Id Pregunta: 163. ";


//  Id pregunta: 165 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  El T&iacute;tulo II de la LOPD trata sobre:";
 choices[7]= new Array();
 choices[7][0] = "Principios de la protecci&oacute;n de datos";
 choices[7][1] = "Derechos de las personas";
 choices[7][2] = "Movimiento internacional de datos";
 choices[7][3] = "Agencia de Protecci&oacute;n de Datos";
 answers[7] = choices[7][0];
 units[7] = "29";
 comments[7] = "Id Pregunta: 165. ";


//  Id pregunta: 192 AÃ±o de creación de pregunta: 2004-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no se corresponde con una soluci&oacute;n ERP (Enterprise Resource Planning)?";
 choices[8]= new Array();
 choices[8][0] = "Alto grado de modularidad";
 choices[8][1] = "Homogeneizaci&oacute;n de Procesos Corporativos";
 choices[8][2] = "Facilidad de implementaci&oacute;n en corto plazo";
 choices[8][3] = "Integraci&oacute;n total de &aacute;reas organizativas";
 answers[8] = choices[8][2];
 units[8] = "21";
 comments[8] = "Id Pregunta: 192. Examen TIC MAP B 2004";


//  Id pregunta: 198 AÃ±o de creación de pregunta: 2004-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes no es una fuente principal para que una Organizaci&oacute;n identifique sus necesidades de seguiridad f&iacute;sica en el &aacute;rea de sistemas de informaci&oacute;n?";
 choices[9]= new Array();
 choices[9][0] = "Los requisitos legales, estatutarios y contractuales a los que est&eacute; obligada la Organizaci&oacute;n";
 choices[9][1] = "Los principios, objetivos y requisitos para el tratamiento de la informaci&oacute;n que la Organizaci&oacute;n ha desarrollado para soportar sus operaciones";
 choices[9][2] = "El nivel de madurez en la gesti&oacute;n de la seguirdad f&iacute;sica, medido de acuerdo con el Computer Maturity Model";
 choices[9][3] = "La valoraci&oacute;n de los riesgos de la Organizaci&oacute;n";
 answers[9] = choices[9][2];
 units[9] = "33";
 comments[9] = "Id Pregunta: 198. Examen TIC MAP B 2004";


//  Id pregunta: 200 AÃ±o de creación de pregunta: 2004-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes no es una fase en un proceso de auditor&iacute;a de la gesti&oacute;n de la seguridad inform&aacute;tica de una instalaci&oacute;n?";
 choices[10]= new Array();
 choices[10][0] = "Evaluaci&oacute;n de la adecuaci&oacute;n de los controles establecidos";
 choices[10][1] = "Realizaci&oacute;n de entrevistas a usuarios";
 choices[10][2] = "Adquisici&oacute;n del conocimiento necesario mediante la identificaci&oacute;n y documentaci&oacute;n del entorno y de la gesti&oacute;n";
 choices[10][3] = "Ejecuci&oacute;n de pruebas sustantivas";
 answers[10] = choices[10][3];
 units[10] = "33";
 comments[10] = "Id Pregunta: 200. Examen TIC MAP B 2004";


//  Id pregunta: 210 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  En la Administraci&oacute;n P&uacute;blica se puede copiar un programa de ordenador para entregarlo a terceros s&oacute;lo:";
 choices[11]= new Array();
 choices[11][0] = "Cuando haya sido desarrollado a medida de las necesidades de la Administraci&oacute;n";
 choices[11][1] = "Cuando se trate de la copia de &quot;back-up&quot;";
 choices[11][2] = "Cuando los derechos de explotaci&oacute;n correspondan a la Administraci&oacute;n";
 choices[11][3] = "Cuando la Administraci&oacute;n haya adquirido una licencia de uso corporativa";
 answers[11] = choices[11][2];
 units[11] = "36";
 comments[11] = "Id Pregunta: 210. ";


//  Id pregunta: 214 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  En la estructuraci&oacute;n vertical de un sistema de informaci&oacute;n:";
 choices[12]= new Array();
 choices[12][0] = "Se dispone de 3 niveles: operacional (procedimientos de rutina, grueso de tratamiento de datos), estrat&eacute;gico (toma de decisiones a corto-medio plazo) y t&aacute;ctico (toma de decisiones a largo plazo)";
 choices[12][1] = "Se dispone de 4 niveles: operacional, funcional, t&aacute;ctico y estrat&eacute;gico";
 choices[12][2] = "Se dispone de 3 niveles: operacional (decisiones que afectan a la rutina de tratamiento de datos), funcional (decisiones que afectan al funcionamiento de los subsistemas que componen el sistema) y estrat&eacute;gico (decisiones que afectan a la estrategia social";
 choices[12][3] = "Ninguna de las anteriores";
 answers[12] = choices[12][3];
 units[12] = "21";
 comments[12] = "Id Pregunta: 214. ";


//  Id pregunta: 252 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Entre las organizaciones cuya misi&oacute;n es alertar frente a las diferentes vulnerabilidades que presenten los productos de tecnolog&iacute;as de la informaci&oacute;n, se encuentra:";
 choices[13]= new Array();
 choices[13][0] = "CNN-CERT";
 choices[13][1] = "SANS";
 choices[13][2] = "W3C";
 choices[13][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son correctas";
 answers[13] = choices[13][3];
 units[13] = "42";
 comments[13] = "Id Pregunta: 252. ";


//  Id pregunta: 256 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Entre los vocales del Consejo Consultivo de la Agencia de Protecci&oacute;n de Datos existir&aacute;:";
 choices[14]= new Array();
 choices[14][0] = "Un diputado nombrado a propuesta del Congreso de los Diputados y un senador nombrado a propuesta del Senado";
 choices[14][1] = "Un vocal nombrado a propuesta del Consejo Superior de Inform&aacute;tica";
 choices[14][2] = "Un magistrado nombrado a propuesta del Consejo General del Poder Judicial";
 choices[14][3] = "Un abogado del Estado";
 answers[14] = choices[14][0];
 units[14] = "29";
 comments[14] = "Id Pregunta: 256. ";


//  Id pregunta: 260 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Hay muchas organizaciones diferentes de normalizaci&oacute;n, pero una de las siguientes no est&aacute; entre ellas. &iquest;Cu&aacute;l?:";
 choices[15]= new Array();
 choices[15][0] = "ISO ";
 choices[15][1] = "ANSI  ";
 choices[15][2] = "CEPT";
 choices[15][3] = "OSI";
 answers[15] = choices[15][3];
 units[15] = "42";
 comments[15] = "Id Pregunta: 260. ";


//  Id pregunta: 264 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Indicar cual de las siguientes no es una funci&oacute;n b&aacute;sica del tratamiento de la informaci&oacute;n:";
 choices[16]= new Array();
 choices[16][0] = "Entrada de datos";
 choices[16][1] = "Almacenamiento de datos";
 choices[16][2] = "Copias de seguridad de datos";
 choices[16][3] = "C&aacute;lculos y transformaciones de datos";
 answers[16] = choices[16][2];
 units[16] = "21";
 comments[16] = "Id Pregunta: 264. ";


//  Id pregunta: 278 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  La Agencia de Protecci&oacute;n de Datos:";
 choices[17]= new Array();
 choices[17][0] = "Es un ente de derecho p&uacute;blico que act&uacute;a con dependencia del Ministerio de Justicia en el ejercicio de sus funciones";
 choices[17][1] = "Es un ente de derecho privado que act&uacute;a en el ejercicio de sus funciones seg&uacute;n lo dispuesto por el Ministerio de Justicia ";
 choices[17][2] = "Es un ente de derecho p&uacute;blico que act&uacute;a con plena independencia de las Administraciones P&uacute;blicas en el ejercicio de sus funciones";
 choices[17][3] = "Ninguna de las anteriores es correcta";
 answers[17] = choices[17][2];
 units[17] = "29";
 comments[17] = "Id Pregunta: 278. ";


//  Id pregunta: 283 AÃ±o de creación de pregunta: 2009-01-01
 questions[18]= "19)  La calidad de los datos a la que hacen referencia las leyes de protecci&oacute;n de datos no incluye uno de los aspectos siguientes:";
 choices[18]= new Array();
 choices[18][0] = "Tipicidad";
 choices[18][1] = "Veracidad";
 choices[18][2] = "Finalidad";
 choices[18][3] = "Pertinencia";
 answers[18] = choices[18][0];
 units[18] = "29";
 comments[18] = "Id Pregunta: 283. ";


//  Id pregunta: 284 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  La caracter&iacute;stica que poseen los sistemas abiertos de permitir la utilizaci&oacute;n del mismo entorno de &quot;software&quot; en diferentes equipos f&iacute;sicos, desde ordenadores personales hasta grandes ordenadores, se denomina:";
 choices[19]= new Array();
 choices[19][0] = "Conectividad";
 choices[19][1] = "Integrabilidad";
 choices[19][2] = "Escalabilidad";
 choices[19][3] = "Interoperabilidad";
 answers[19] = choices[19][2];
 units[19] = "40";
 comments[19] = "Id Pregunta: 284. ";


//  Id pregunta: 301 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  La escalabilidad es:";
 choices[20]= new Array();
 choices[20][0] = "Un caso particular de la portabilidad";
 choices[20][1] = "La capacidad de utilizar el mismo entorno de software en diferentes clases de ordenadores";
 choices[20][2] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son correctas";
 choices[20][3] = "Una propiedad que se da &uacute;nicamente en el mundo Unix";
 answers[20] = choices[20][2];
 units[20] = "40";
 comments[20] = "Id Pregunta: 301. ";


//  Id pregunta: 326 AÃ±o de creación de pregunta: 2004-01-01
 questions[21]= "22)  Cuando utilizamos las siglas SSD-AAPP, nos estamos refiriendo a:";
 choices[21]= new Array();
 choices[21][0] = "Un sistema de informaci&oacute;n dedicado al an&aacute;lisis de redes de comunicaciones.";
 choices[21][1] = "Una aplicaci&oacute;n inform&aacute;tica dise&ntilde;ada para ayudar a la elecci&oacute;n en la contrataci&oacute;n de bienes o servicios inform&aacute;ticos.";
 choices[21][2] = "Una aplicaci&oacute;n inform&aacute;tica dise&ntilde;ada para decidir si debemos contratar un desarrollo a una empresa externa o hacerlo con medios propios.";
 choices[21][3] = "Ninguna de las anteriores";
 answers[21] = choices[21][1];
 units[21] = "34";
 comments[21] = "Id Pregunta: 326. Modificado enunciado (antes SSD-CIABSI) por JCED Preparatic XVII";


//  Id pregunta: 361 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Las t&eacute;cnicas de Gantt y Pert ayudan a:";
 choices[22]= new Array();
 choices[22][0] = "Fijar la duraci&oacute;n de cada etapa";
 choices[22][1] = "Estimar cu&aacute;l ser&aacute; la tarea cr&iacute;tica de un proyecto";
 choices[22][2] = "Estimar la duraci&oacute;n de un proyecto";
 choices[22][3] = "Estimar el costo de cada etapa";
 answers[22] = choices[22][2];
 units[22] = "28";
 comments[22] = "Id Pregunta: 361. ";


//  Id pregunta: 362 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Le han encargado realizar una auditor&iacute;a inform&aacute;tica de un centro de proceso de datos en el que, entre otros, se procesan datos fiscales de todas las empresas espa&ntilde;olas. Indique que recomendar&iacute;a solucionar con m&aacute;s urgencia:";
 choices[23]= new Array();
 choices[23][0] = "Las aplicaciones inform&aacute;ticas est&aacute;n insuficientemente documentadas";
 choices[23][1] = "Los equipos no est&aacute;n alimentados con fuentes de alimenta ininterrumpida (U.P.S.)";
 choices[23][2] = "Las copias de seguridad en cinta se guardan junto con las cintas de datos";
 choices[23][3] = "El equipamiento utilizado no responde a la filosof&iacute;a de 'sistemas abiertos'";
 answers[23] = choices[23][2];
 units[23] = "31,32,33";
 comments[23] = "Id Pregunta: 362. ";


//  Id pregunta: 393 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Para garantizar al usuario el acceso al c&oacute;digo fuente del programa cedido en el caso de desaparici&oacute;n de la empresa titular de los derechos de propiedad intelectual se recurre a:";
 choices[24]= new Array();
 choices[24][0] = "El Convenio de Berna";
 choices[24][1] = "La Ley 16/993";
 choices[24][2] = "La Ley 22/1987";
 choices[24][3] = "El contrato de Escrow";
 answers[24] = choices[24][3];
 units[24] = "36";
 comments[24] = "Id Pregunta: 393. ";


//  Id pregunta: 402 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Respecto a la protecci&oacute;n jur&iacute;dica de los programas de ordenador, se puede asegurar que:";
 choices[25]= new Array();
 choices[25][0] = "La ley 22/87 de la Propiedad Intelectual incorpora al Derecho Espa&ntilde;ol la Directiva 91/250 de la CEE, sobre protecci&oacute;n jur&iacute;dica de los programas de ordenador";
 choices[25][1] = "Las ideas y principios en los que se basa un programa est&aacute;n protegidos mediante los derechos de autor";
 choices[25][2] = "La primera venta de una copia por el titular de los derechos agota el derecho de distribuci&oacute;n de dicha copia";
 choices[25][3] = "Todas las premisas anteriores son falsas";
 answers[25] = choices[25][2];
 units[25] = "36";
 comments[25] = "Id Pregunta: 402. ";


//  Id pregunta: 459 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Si un grupo de personas constituyen una asociaci&oacute;n (por ejemplo de antiguos alumnos, o de padres de alumnos) y recaban informaci&oacute;n de car&aacute;cter personal de sus miembros, almacen&aacute;ndola en un fichero:";
 choices[26]= new Array();
 choices[26][0] = "S&oacute;lo deber&aacute;n registrar el fichero en la Agencia de Protecci&oacute;n de Datos si el contenido de &eacute;stos es lo suficientemente sensible";
 choices[26][1] = "Seg&uacute;n la finalidad para la que se use y seg&uacute;n el tama&ntilde;o de dicho fichero podr&aacute;n estar exentos de de registrar el fichero";
 choices[26][2] = "Tienen que registrar el fichero en la Agencia de Protecci&oacute;n de Datos";
 choices[26][3] = "Deber&iacute;an registrar el fichero, pero dado que la Agencia de Protecci&oacute;n de Datos s&oacute;lo se ocupa en la pr&aacute;ctica de grandes casos de fraude  pueden pasar sin ser sancionados sin ning&uacute;n tipo de problema";
 answers[26] = choices[26][2];
 units[26] = "29";
 comments[26] = "Id Pregunta: 459. ";


//  Id pregunta: 467 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Un ejemplo de infracci&oacute;n grave es:";
 choices[27]= new Array();
 choices[27][0] = "proceder a la recogida de datos de car&aacute;cter personal de los propios afectados sin proporcionarles la informaci&oacute;n que se&ntilde;ala el art&iacute;culo 5 de la presente ley";
 choices[27][1] = "Proceder a la creaci&oacute;n de ficheros de titularidad p&uacute;blica o iniciar la recogida de datos de car&aacute;cter personal para los mismos, sin autorizaci&oacute;n de disposici&oacute;n general, publicada en el Bolet&iacute;n Oficial del Estado o diario oficial correspondiente.";
 choices[27][2] = "la recogida de datos en forma enga&ntilde;osa y fraudulenta";
 choices[27][3] = "No cesar en el tratamiento il&iacute;cito de datos  de car&aacute;cter personal cuando existiese un requerimiento previo del  Director de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos para ello.";
 answers[27] = choices[27][1];
 units[27] = "29";
 comments[27] = "Id Pregunta: 467. NULL";


//  Id pregunta: 484 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  &iquest;Cu&aacute;l de las siguientes afirmaciones referentes a las recomendaciones de la ITU es falsa?:";
 choices[28]= new Array();
 choices[28][0] = "La norma X.200 (ISO 7498) define el modelo de referencia para la interconexi&oacute;n de sistemas abiertos (OSI)";
 choices[28][1] = "La norma X.400 (ISO 10021) define un sistema de gesti&oacute;n de mensajes (MHS)";
 choices[28][2] = "La norma X.500 (ISO 9594) define los servicios de directorio";
 choices[28][3] = "Ninguna de las anteriores";
 answers[28] = choices[28][3];
 units[28] = "42";
 comments[28] = "Id Pregunta: 484. ";


//  Id pregunta: 506 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  La Decisi&oacute;n 87/95 /CEE cubre:";
 choices[29]= new Array();
 choices[29][0] = "Las especificaciones t&eacute;cnicas para equipos terminales conectados a redes p&uacute;blicas de tlecomunicaci&oacute;n";
 choices[29][1] = "Las especificaciones funcionales de los servicios ofrecidos sobre redes p&uacute;blicas de telecomunicaci&oacute;n";
 choices[29][2] = "Las especificaciones de los equipos que formen parte de las redes de telecomunicaci&oacute;n en s&iacute; mismas";
 choices[29][3] = "Ninguna de las repuestas anteriores es cierta";
 answers[29] = choices[29][1];
 units[29] = "40";
 comments[29] = "Id Pregunta: 506. ";


//  Id pregunta: 540 AÃ±o de creación de pregunta: 2004-01-01
 questions[30]= "31)  Respecto a las t&eacute;cnicas de selecci&oacute;n de proyectos alternativos ...";
 choices[30]= new Array();
 choices[30][0] = "3 t&eacute;cnicas usadas de evaluaci&oacute;n de inversiones son las del Pay-back, VAN y TIR";
 choices[30][1] = "El Valor Actual Neto (VAN) compara el desembolso inicial con el valor de los flujos netos de caja originados";
 choices[30][2] = "El pay-back es el periodo de tiempo que tarda en recuperarse el desembolso inicial con los flujos de caja";
 choices[30][3] = "Todas las anteriores afirmaciones son ciertas";
 answers[30] = choices[30][3];
 units[30] = "38";
 comments[30] = "Id Pregunta: 540. ";


//  Id pregunta: 576 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  Una acci&oacute;n b&aacute;sica de planificaci&oacute;n y control es";
 choices[31]= new Array();
 choices[31][0] = "Evaluar los planes alternativos utilizando para ello la experiencia de todos los colaboradores";
 choices[31][1] = "Evaluar de forma pormenorizada la alternativa elegida utilizando la intuici&oacute;n y la propia experiencia";
 choices[31][2] = "Evaluar los planes alternativos utilizando un sistema objetivo que permita, en la medida de lo posible, la neutralidadm&aacute;xima en la evaluaci&oacute;n.";
 choices[31][3] = "Evaluar los planes alternativos utilizando un sistema democr&aacute;tico que permita, en la medida de lo posible, la neutralidadm&aacute;xima en la evaluaci&oacute;n.";
 answers[31] = choices[31][1];
 units[31] = "25";
 comments[31] = "Id Pregunta: 576. ";


//  Id pregunta: 644 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  Cu&aacute;l de las siguientes afirmaciones sobre la Decisi&oacute;n 87/95/CEE es incorrecta:";
 choices[32]= new Array();
 choices[32][0] = "La Decisi&oacute;n 87/95/CEE obliga a la utilizaci&oacute;n de normas europeas e internacionales en las actividades de adquisici&oacute;n de bienes y servicios relativos a la tecnolog&iacute;a de la Informaci&oacute;n, realizadas por el sector p&uacute;blico.";
 choices[32][1] = "La Decisi&oacute;n 87/95/CEE fue transcrita a la legislaci&oacute;n espa&ntilde;ola, tras lo cual entr&oacute; en vigor en Espa&ntilde;a el 8 de febrero de 1988.";
 choices[32][2] = "La Decisi&oacute;n se refiere a normas relativas a redes, a OSI, a juegos de caracteres, a la representaci&oacute;n de la informaci&oacute;n, interoperabilidad, etc.";
 choices[32][3] = "Seg&uacute;n la Decisi&oacute;n las normas europeas y las normas previas europeas (borradores en fase experimental), del CEN/CENELEC y del CEPT, deben tener el mismo nivel que las normas ISO aceptadas por el pa&iacute;s al que pertenece el poder adjudicador";
 answers[32] = choices[32][1];
 units[32] = "40";
 comments[32] = "Id Pregunta: 644. ";


//  Id pregunta: 662 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  &iquest;Cu&aacute;les de los siguientes ficheros de datos personales se rigen por su legislaci&oacute;n espec&iacute;fica y no por la LOPD?:";
 choices[33]= new Array();
 choices[33][0] = "Los derivados del Registro Civil";
 choices[33][1] = "Los ficheros establecidos para la investigaci&oacute;n del terrorismo y de formas graves de la delincuencia organizada";
 choices[33][2] = "Los derivados de im&aacute;genes y sonidos obtenidos mediante la utilizaci&oacute;n de videoc&aacute;maras";
 choices[33][3] = "Los ficheros de las Grandes Compa&ntilde;&iacute;as de Seguros, cuando lo comuniquen previamente a la Agencia de Protecci&oacute;n de Datos";
 answers[33] = choices[33][0];
 units[33] = "29";
 comments[33] = "Id Pregunta: 662. ";


//  Id pregunta: 4400 AÃ±o de creación de pregunta: 2007-01-01
 questions[34]= "35)  La gesti&oacute;n proactiva de un sistema permite";
 choices[34]= new Array();
 choices[34][0] = "Solucionar todas las posibles incidencias.";
 choices[34][1] = "Detectar los problemas con anterioridad a la percepci&oacute;n de los mismos por parte del usuario.";
 choices[34][2] = "Corregir los problemas antes de que estos se produzcan.";
 choices[34][3] = "Mantener a todos los usuarios informados del estado de los sistemas.";
 answers[34] = choices[34][1];
 units[34] = "24";
 comments[34] = "Id Pregunta: 4400. ";


//  Id pregunta: 4446 AÃ±o de creación de pregunta: 2007-01-01
 questions[35]= "36)  Seg&uacute;n la norma 150/17799, el aseguramiento de que los usuarios autorizados tienen  acceso cuando lo requieran a la informaci&oacute;n y sus activos asociados, es el concepto de:";
 choices[35]= new Array();
 choices[35][0] = "Seguridad.";
 choices[35][1] = "Integridad.";
 choices[35][2] = "Disponibilidad.";
 choices[35][3] = "Confidencialidad.";
 answers[35] = choices[35][2];
 units[35] = "33";
 comments[35] = "Id Pregunta: 4446. ";


//  Id pregunta: 4670 AÃ±o de creación de pregunta: 2007-01-01
 questions[36]= "37)  Los ficheros automatizados con datos de car&aacute;cter personal de nivel alto deber&aacute;n contener:";
 choices[36]= new Array();
 choices[36][0] = "Medidas de seguridad de nivel alto";
 choices[36][1] = "Medidas de seguridad de nivel alto y medio";
 choices[36][2] = "Medidas de seguridad de nivel b&aacute;sico, medio y alto";
 choices[36][3] = "Ninguna de las anteriores es correcta";
 answers[36] = choices[36][2];
 units[36] = "29";
 comments[36] = "Id Pregunta: 4670. Examen 2006 JCYL";


//  Id pregunta: 4771 AÃ±o de creación de pregunta: 2007-01-01
 questions[37]= "38)  El IETF (Internet Engineering Task Force) es uno de los organismos estandarizadores m&aacute;s destacados de Internet. Sus documentos oficiales son conocidos como";
 choices[37]= new Array();
 choices[37][0] = "Las series X y V (ejemplo la recomendaci&oacute;n X.25 o V.21bis)";
 choices[37][1] = "ISO (ejemplo ISO-9000)";
 choices[37][2] = "RFC (Request for Comments)";
 choices[37][3] = "Las respuestas A y C son verdaderas";
 answers[37] = choices[37][2];
 units[37] = "42";
 comments[37] = "Id Pregunta: 4771. ";


//  Id pregunta: 4779 AÃ±o de creación de pregunta: 2007-01-01
 questions[38]= "39)  La Ley de Impulso de la Sociedad de la Informaci&oacute;n introduce novedades en materia de";
 choices[38]= new Array();
 choices[38][0] = "Facturaci&oacute;n electr&oacute;nica";
 choices[38][1] = "Firma electr&oacute;nica";
 choices[38][2] = "Derechos de los usuarios en la Sociedad de la Informaci&oacute;n";
 choices[38][3] = "Todas las anteriores son ciertas";
 answers[38] = choices[38][3];
 units[38] = "30";
 comments[38] = "Id Pregunta: 4779. Ley 56/2007";


//  Id pregunta: 4782 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  Seg&uacute;n el Real Decreto 522/2006";
 choices[39]= new Array();
 choices[39][0] = "En procedimientos administrativos de la Administraci&oacute;n General del Estado se suprome la aportaci&oacute;n de fotocopias de documentos de identidad";
 choices[39][1] = "En los procedimientos administrativos de la Administraci&oacute;n General del Estado se suprime la exigencia de aportar el certificado de empadronamiento, como documento probatorio del domicilio y residencia.";
 choices[39][2] = "Se regula la expedici&oacute;n del documento nacional de identidad electr&oacute;nico y sus certificados de firma electr&oacute;nica";
 choices[39][3] = "Ninguna de las anteriores";
 answers[39] = choices[39][0];
 units[39] = "30";
 comments[39] = "Id Pregunta: 4782. ";


//  Id pregunta: 5462 AÃ±o de creación de pregunta: 2003-01-01
 questions[40]= "41)  La gesti&oacute;n de nombres de dominio bajo el c&oacute;digo correspondientes a Espa&ntilde;a &quot;.es&quot; la tiene legalmente encomendada";
 choices[40]= new Array();
 choices[40][0] = "Internic.es";
 choices[40][1] = "Red.es";
 choices[40][2] = "Mityc.es";
 choices[40][3] = "Netsol.es";
 answers[40] = choices[40][1];
 units[40] = "42";
 comments[40] = "Id Pregunta: 5462. Castilla y Le&oacute;n";


//  Id pregunta: 5560 AÃ±o de creación de pregunta: 2003-01-01
 questions[41]= "42)  Respecto a La Ley 23/2006 que modifica el TRLPI (RD 1/1996), se&ntilde;ale la afirmaci&oacute;n incorrecta:";
 choices[41]= new Array();
 choices[41][0] = "Transpone la Directiva 2001/29/CE.";
 choices[41][1] = "Establece medidas sancionadoras de actos de elusi&oacute;n de medidas tecnol&oacute;gicas eficaces para la protecci&oacute;n de obras.";
 choices[41][2] = "Los programas de ordenador se regir&aacute;n por su propia normativa.";
 choices[41][3] = "El can&oacute;n digital se aplicar&aacute; tanto a equipos anal&oacute;gicos como digitales, como reproductores mp3-mp4, discos duros etc.. ";
 answers[41] = choices[41][3];
 units[41] = "37";
 comments[41] = "Id Pregunta: 5560. ";


//  Id pregunta: 5597 AÃ±o de creación de pregunta: 2003-01-01
 questions[42]= "43)  En el RD Legislativo 3/2011 de contratos del sector p&uacute;blico, los contratos de adquisici&oacute;n de programas de ordenador desarrollados a medida son";
 choices[42]= new Array();
 choices[42][0] = "Contratos de servicios";
 choices[42][1] = "Contratos de suministro";
 choices[42][2] = "Contratos de desarrollo l&oacute;gico";
 choices[42][3] = "No se hace referencia expl&iacute;cita a este tipo de contratos en la citada ley";
 answers[42] = choices[42][0];
 units[42] = "41";
 comments[42] = "Id Pregunta: 5597. ";


//  Id pregunta: 5710 AÃ±o de creación de pregunta: 2009-01-01
 questions[43]= "44)  En las iniciales IDABC, la &quot;I&quot; y la &quot;D&quot; corresonden a:";
 choices[43]= new Array();
 choices[43][0] = "Innovative y Delivery";
 choices[43][1] = "Interoperable y Delivery";
 choices[43][2] = "Innovative y Development";
 choices[43][3] = "Interoperable y Development";
 answers[43] = choices[43][1];
 units[43] = "40";
 comments[43] = "Id Pregunta: 5710. ";


//  Id pregunta: 5882 AÃ±o de creación de pregunta: 2009-01-01
 questions[44]= "45)  &iquest;Cu&aacute;ndo deber&aacute;n tener implantadas la totalidad de las medidas de seguridad los ficheros, tanto automatizados como no automatizados, creados con posterioridad a la fecha de entrada en vigor del RD 1720/2007, de 21 de diciembre, por el que se aprueba el Reglamento de Desarrollo de la LOPD?:";
 choices[44]= new Array();
 choices[44][0] = "En el plazo de un a&ntilde;o desde su creaci&oacute;n";
 choices[44][1] = "En el plazo de seis meses desde su creaci&oacute;n";
 choices[44][2] = "En el momento de su creaci&oacute;n";
 choices[44][3] = "Depender&aacute; del tama&ntilde;o del fichero";
 answers[44] = choices[44][2];
 units[44] = "29";
 comments[44] = "Id Pregunta: 5882. MAP 2008 A1";


//  Id pregunta: 5915 AÃ±o de creación de pregunta: 2009-01-01
 questions[45]= "46)  En el modelo de Evoluci&oacute;n de los Sistemas de Informaci&oacute;n de Gibson y Nolan se distinguen cuatro etapas distintas en el crecimiento de todo sistema de informaci&oacute;n en una empresa. &iquest;Cu&aacute;l es el orden cronol&oacute;gico correcto de dichas etapas?";
 choices[45]= new Array();
 choices[45][0] = "Iniciaci&oacute;n, formalizaci&oacute;n, expansi&oacute;n y madurez";
 choices[45][1] = "Iniciaci&oacute;n, expansi&oacute;n, madurez y formalizaci&oacute;n";
 choices[45][2] = "Iniciaci&oacute;n, expansi&oacute;n, formalizaci&oacute;n y madurez";
 choices[45][3] = "Iniciaci&oacute;n, formalizaci&oacute;n, madurez y expansi&oacute;n";
 answers[45] = choices[45][2];
 units[45] = "21";
 comments[45] = "Id Pregunta: 5915. MAP 2008 A1";


//  Id pregunta: 5921 AÃ±o de creación de pregunta: 2009-01-01
 questions[46]= "47)  En relaci&oacute;n a la ITU (International Telecommunication Union), indique cu&aacute;l de los siguientes NO se corresponde con un sector estrat&eacute;gico de la misma:";
 choices[46]= new Array();
 choices[46][0] = "Radiocomunicaciones (ITU-R)";
 choices[46][1] = "Estandarizaci&oacute;n (ITU-T)";
 choices[46][2] = "Seguridad (ITU-S)";
 choices[46][3] = "Desarrollo (ITU-D)";
 answers[46] = choices[46][2];
 units[46] = "42";
 comments[46] = "Id Pregunta: 5921. MAP 2008 A1";


//  Id pregunta: 6065 AÃ±o de creación de pregunta: 2010-01-01
 questions[47]= "48)  NO figura entre los objetivos de las normas y procedimientos de seguridad:";
 choices[47]= new Array();
 choices[47][0] = "La adecuaci&oacute;n a aspectos de accesibilidad, usabilidad y utilizaci&oacute;n de lenguas cooficiales.";
 choices[47][1] = "La confidencialidad, disponibilidad e integridad de la informaci&oacute;n.";
 choices[47][2] = "La necesidad de controles de acceso.";
 choices[47][3] = "La adecuaci&oacute;n a normativa de la Agencia de Protecci&oacute;n de Datos.";
 answers[47] = choices[47][0];
 units[47] = "32";
 comments[47] = "Id Pregunta: 6065. TIC A 2009";


//  Id pregunta: 6149 AÃ±o de creación de pregunta: 2010-01-01
 questions[48]= "49)  &iquest;C&oacute;mo se representan las relaciones &quot;ficticias&quot; en el M&eacute;todo de Diagramaci&oacute;n por Flechas (ADM)?";
 choices[48]= new Array();
 choices[48][0] = "Mediante una l&iacute;nea de puntos";
 choices[48][1] = "En ADM no existe el concepto de relaciones &quot;ficticias&quot;";
 choices[48][2] = "Mediante una flecha convexa";
 choices[48][3] = "Mediante una flecha c&oacute;ncava";
 answers[48] = choices[48][0];
 units[48] = "28";
 comments[48] = "Id Pregunta: 6149. ";


//  Id pregunta: 6196 AÃ±o de creación de pregunta: 2010-01-01
 questions[49]= "50)  Respecto a los certificados de sede electr&oacute;nica y sello electr&oacute;nico";
 choices[49]= new Array();
 choices[49][0] = "El certificado de sede electr&oacute;nica permite la firma de documentos";
 choices[49][1] = "El certificado de sede electr&oacute;nica no permite la firma de documentos";
 choices[49][2] = "El certificado de sello electr&oacute;nico no permite el establecimiento de comunicaciones seguras";
 choices[49][3] = "El certificado de sello electr&oacute;nico permite la identificaci&oacute;n de una sede electr&oacute;nica";
 answers[49] = choices[49][1];
 units[49] = "43";
 comments[49] = "Id Pregunta: 6196. Articulos 18 y 19. El sello electronico SI permite establecer comunicaciones electronicas";


//  Id pregunta: 6372 AÃ±o de creación de pregunta: 2010-01-01
 questions[50]= "51)  En relaci&oacute;n a lo dispuesto en el Esquema Nacional de Seguridad, un sistema de informaci&oacute;n ser&aacute; de categor&iacute;a MEDIA cuando:";
 choices[50]= new Array();
 choices[50][0] = "Las dimensiones de seguridad definidas como cr&iacute;ticas son, en su mayor&iacute;a, de nivel MEDIO.";
 choices[50][1] = "Alguna de sus dimensiones de seguridad alcanza el nivel MEDIO, y ninguna es de nivel inferior.";
 choices[50][2] = "Alguna de sus dimensiones de seguridad alcanza el nivel MEDIO, y ninguna alcanza un nivel superior.";
 choices[50][3] = "Las dimensiones de seguridad son, en su mayor&iacute;a, de nivel MEDIO.";
 answers[50] = choices[50][2];
 units[50] = "43";
 comments[50] = "Id Pregunta: 6372. Anexo I ENS";


//  Id pregunta: 6390 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)  Los ciudadanos podr&aacute;n utilizar para relacionarse con la Administraci&oacute;n General del Estado, los sistemas de firma electr&oacute;nica incorporados al Documento Nacional de Identidad";
 choices[51]= new Array();
 choices[51][0] = "Cuando as&iacute; lo permita el tr&aacute;mite pertinente";
 choices[51][1] = "En todo caso";
 choices[51][2] = "En ning&uacute;n caso";
 choices[51][3] = "Cuando lo autorice el responsable del proceso";
 answers[51] = choices[51][1];
 units[51] = "43";
 comments[51] = "Id Pregunta: 6390. Art&iacute;culo 10 RD 1671/2009";


//  Id pregunta: 6393 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  La creaci&oacute;n de sellos electr&oacute;nicos se realizar&aacute;, seg&uacute;n lo dispuesto en el RD 1671/2009, mediante... ";
 choices[52]= new Array();
 choices[52][0] = "Orden del Ministerio de Presidencia";
 choices[52][1] = "Resoluci&oacute;n del Ministro o titular del organismo p&uacute;blico competente";
 choices[52][2] = "Orden del Ministerio o titular del organismo p&uacute;blico competente";
 choices[52][3] = "Resoluci&oacute;n de la Subsecretar&iacute;a del Ministerio o titular del organismo p&uacute;blico competente";
 answers[52] = choices[52][3];
 units[52] = "43";
 comments[52] = "Id Pregunta: 6393. Art&iacute;culo 19 RD 1671/2009";


//  Id pregunta: 6407 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  &iquest;Puede el cesionario titular de derechos de explotaci&oacute;n realizar o autorizar la realizaci&oacute;n de versiones sucesivas de un programa o programas derivados del mismo, sin permiso del autor?";
 choices[53]= new Array();
 choices[53][0] = "No, salvo pacto en contrario";
 choices[53][1] = "S&iacute;, salvo pacto en contrario";
 choices[53][2] = "S&iacute;, en cualquier caso";
 choices[53][3] = "No, en ning&uacute;n caso";
 answers[53] = choices[53][1];
 units[53] = "36";
 comments[53] = "Id Pregunta: 6407. Art&iacute;culo 100 RDL 1/1996";


//  Id pregunta: 6410 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  De acuerdo a lo dispuesto en la ley sobre reutilizaci&oacute;n de la informaci&oacute;n del sector p&uacute;blico, se considerar&aacute; infracci&oacute;n muy grave:";
 choices[54]= new Array();
 choices[54][0] = "La falta de menci&oacute;n de la fecha de la &uacute;ltima actualizaci&oacute;n de la informaci&oacute;n";
 choices[54][1] = "La ausencia de cita de la fuente";
 choices[54][2] = "La reutilizaci&oacute;n de documentaci&oacute;n sin haber obtenido la correspondiente licencia en los casos en que &eacute;sta sea requerida";
 choices[54][3] = "La desnaturalizaci&oacute;n del sentido de la informaci&oacute;n para cuya reutilizaci&oacute;n se haya concedido una licencia";
 answers[54] = choices[54][3];
 units[54] = "30";
 comments[54] = "Id Pregunta: 6410. Art&iacute;culo 11 Ley 37/2007";


//  Id pregunta: 7315 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  Entre los servicios comunes que se ofrecen en la plataforma de intermediaci&oacute;n de servicios se encuentran:";
 choices[55]= new Array();
 choices[55][0] = "Servicio de validaci&oacute;n de normas y est&aacute;ndares";
 choices[55][1] = "Servicio de autenticaci&oacute;n de informes";
 choices[55][2] = "Servicio de verificaci&oacute;n de Datos de Identidad y Residencia";
 choices[55][3] = "Todas las anteriores son correctas";
 answers[55] = choices[55][2];
 units[55] = "44";
 comments[55] = "Id Pregunta: 7315. NULL";


//  Id pregunta: 8253 AÃ±o de creación de pregunta: 2011-01-01
 questions[56]= "57)  Seg&uacute;n el est&aacute;ndar IEEE 610.12, la l&iacute;nea base:";
 choices[56]= new Array();
 choices[56][0] = "Es la l&iacute;nea que marca en la planificaci&oacute;n en que momento nos encontramos.";
 choices[56][1] = "Es la situaci&oacute;n en que se encuentra en cada momento el desarrollo.";
 choices[56][2] = "Es el momento de salida de la planificaci&oacute;n.";
 choices[56][3] = "Ha sido acordada formalmente.";
 answers[56] = choices[56][3];
 units[56] = "27,28";
 comments[56] = "Id Pregunta: 8253. Examen TIC A1 2010";


//  Id pregunta: 8269 AÃ±o de creación de pregunta: 2011-01-01
 questions[57]= "58)  &iquest;C&uacute;al de las siguientes organizaciones realiza actuaciones para la persecuci&oacute;n legal de la pirater&iacute;a inform&aacute;tica y para evitar la violaci&oacute;n de los derechos de copyright?:";
 choices[57]= new Array();
 choices[57][0] = "BSA ( Business Software Alliance).";
 choices[57][1] = "GSC ( General Software Committee).";
 choices[57][2] = "DRG (Digital Right Group).";
 choices[57][3] = "SSC (Secure Software Commission).";
 answers[57] = choices[57][0];
 units[57] = "37";
 comments[57] = "Id Pregunta: 8269. Examen TIC A1 2010";


//  Id pregunta: 8281 AÃ±o de creación de pregunta: 2011-01-01
 questions[58]= "59)  El Esquema Nacional de Interoperatibilidad (ENI) se&ntilde;ala que las condiciones de licenciamiento de las aplicaciones y documentaci&oacute;n asociada tendr&aacute;n en cuenta que el fin perseguido es el aprovechamiento y la reutilizaci&oacute;n. Para este fin, &iquest;qu&eacute; tipo de licenciamiento indica expresamente el ENI que se procurar&aacute; aplicar?:";
 choices[58]= new Array();
 choices[58][0] = "Licencia IDABC.";
 choices[58][1] = "Licencia de C&oacute;digo Abierto del Consejo Superior de Administraci&oacute;n Electr&oacute;nica.";
 choices[58][2] = "Licencia P&uacute;blica de la Uni&oacute;n Europea.";
 choices[58][3] = "Licencia Shareware.";
 answers[58] = choices[58][2];
 units[58] = "43";
 comments[58] = "Id Pregunta: 8281. Examen TIC A1 2010";


//  Id pregunta: 8287 AÃ±o de creación de pregunta: 2011-01-01
 questions[59]= "60)  &iquest;Cu&aacute;ndo se puede utilizar el Servicio de Verificaci&oacute;n de Datos de Identidad para consultar datos de car&aacute;cter personal?";
 choices[59]= new Array();
 choices[59][0] = "Cuando se cuente con el consentimiento del interesado y los datos sean necesarios para el tr&aacute;mite. ";
 choices[59][1] = "S&oacute;lo se puede utilizar para consultar datos que no sean de car&aacute;cter personal";
 choices[59][2] = "S&oacute;lo en caso de que sean datos de nivel de protecci&oacute;n alto. ";
 choices[59][3] = "Se contemplaba un per&iacute;odo de transici&oacute;n, pero a partir del 1 de enero de 2011, el Servicio de Verificaci&oacute;n de Datos de Identidad ser&aacute; obligatorio en todo caso";
 answers[59] = choices[59][0];
 units[59] = "44";
 comments[59] = "Id Pregunta: 8287. Examen TIC A2 2010";


//  Id pregunta: 8608 AÃ±o de creación de pregunta: 2011-01-01
 questions[60]= "61)  &iquest;En que norma ISO viene reflejada la usabilidad del software?";
 choices[60]= new Array();
 choices[60][0] = "ISO/IEC 9126";
 choices[60][1] = "ISO 8859";
 choices[60][2] = "ISO 14000";
 choices[60][3] = "ISO/IEC 14496";
 answers[60] = choices[60][0];
 units[60] = "39";
 comments[60] = "Id Pregunta: 8608. Examen TIC A2 2010 interna";


//  Id pregunta: 8731 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  Se considera documento electr&oacute;nico de acuerdo a la ley 11/2007 a:";
 choices[61]= new Array();
 choices[61][0] = "La informaci&oacute;n de naturaleza administrativa, &uacute;nicamente en forma electr&oacute;nica, archivada en soporte electr&oacute;nico seg&uacute;n un formato determinado y susceptible de identificaci&oacute;n y tratamiento diferenciado.";
 choices[61][1] = "La informaci&oacute;n de naturaleza administrativa, &uacute;nicamente en forma electr&oacute;nica, archivada en soporte electr&oacute;nico, o impresa en papel, siempre seg&uacute;n un formato determinado y susceptible de identificaci&oacute;n y tratamiento diferenciado.";
 choices[61][2] = "La informaci&oacute;n de cualquier naturaleza en forma electr&oacute;nica, archivada en soporte electr&oacute;nico o en formato papel, siempre que se haya firmado con un certificado electr&oacute;nico reconocido";
 choices[61][3] = "La informaci&oacute;n de cualquier naturaleza en forma electr&oacute;nica, archivada en un soporte electr&oacute;nico seg&uacute;n un formato determinado y susceptible de identificaci&oacute;n y tratamiento diferenciado.";
 answers[61] = choices[61][3];
 units[61] = "43";
 comments[61] = "Id Pregunta: 8731. Examen TIC A2 2010 interna";


//  Id pregunta: 8782 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  Seg&uacute;n la Ley 11/2007, de 22 de junio, de Acceso Electr&oacute;nico de los Ciudadanos a los Servicios P&uacute;blicos, se entiende por documento electr&oacute;nico:";
 choices[62]= new Array();
 choices[62][0] = "El conjunto de datos en forma electr&oacute;nica, consignados junto a otros o asociados con ellos, que pueden ser utilizados como medio de identificaci&oacute;n del firmante.";
 choices[62][1] = "El conjunto de elementos intervinientes en la creaci&oacute;n de una firma electr&oacute;nica.";
 choices[62][2] = "La informaci&oacute;n de cualquier naturaleza en forma electr&oacute;nica, archivada en un soporte electr&oacute;nico seg&uacute;n un formato determinado y susceptible de identificaci&oacute;n y tratamiento diferenciado.";
 choices[62][3] = "El documento firmado electr&oacute;nicamente por un prestador de servicios de certificaci&oacute;n que vincula unos datos de verificaci&oacute;n de firma avanzada y confirma su identidad.";
 answers[62] = choices[62][2];
 units[62] = "43";
 comments[62] = "Id Pregunta: 8782. Examen UPM A2 2011";


//  Id pregunta: 8858 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  En relacion con la Metodolog&iacute;a de An&aacute;lisis y Gesti&oacute;n de Riesgos de los Sistemas de Informaci&oacute;n (MAGERIT). Se&ntilde;ale cual de las opciones siguientes NO es correcta.";
 choices[63]= new Array();
 choices[63][0] = "MAGERIT figura en el inventario de m&eacute;todos de an&aacute;lisis y gesti&oacute;n de riesgos de ENISA (European Network and Information Security Agency)";
 choices[63][1] = "El modelo normativo de MAGERIT se apoya en tres submodelos: an&aacute;lisis, gesti&oacute;n y procesos.";
 choices[63][2] = "Uno de los objetivos de MAGERIT consiste en preparar a la Organizaci&oacute;n para procesos de evaluaci&oacute;n, auditor&iacute;a, certificaci&oacute;n o acreditaci&oacute;n";
 choices[63][3] = "PILAR es una herramienta que implementa la metodolog&iacute;a MAGERIT de an&aacute;lisis y gesti&oacute;n de riesgos";
 answers[63] = choices[63][1];
 units[63] = "32";
 comments[63] = "Id Pregunta: 8858. Analista Ayto. Madrid 2010";


//  Id pregunta: 8882 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  La garant&iacute;a provisional";
 choices[64]= new Array();
 choices[64][0] = "Es potestativa para el &oacute;rgano de contrataci&oacute;n";
 choices[64][1] = "Con car&aacute;cter general se exige a los adjudicatarios de los contratos administrativos.";
 choices[64][2] = "El &oacute;rgano de contrataci&oacute;n podr&aacute; eximir al adjudicatario de la obligaci&oacute;n de constituir la garant&iacute;a&nbsp;provisional";
 choices[64][3] = "Su importe no podr&aacute; ser superior al 5% del presupuesto del contrato";
 answers[64] = choices[64][0];
 units[64] = "41";
 comments[64] = "Id Pregunta: 8882. ";


//  Id pregunta: 9047 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  Cu&aacute;l no es un derecho de las personas seg&uacute;n la LOPD";
 choices[65]= new Array();
 choices[65][0] = "Impugnaci&oacute;n de valoraciones";
 choices[65][1] = "Derecho de acceso";
 choices[65][2] = "Derecho a cobrar dinero por el tratamiento de sus datos";
 choices[65][3] = "Derecho de rectificaci&oacute;n";
 answers[65] = choices[65][2];
 units[65] = "29";
 comments[65] = "Id Pregunta: 9047. ";


//  Id pregunta: 9070 AÃ±o de creación de pregunta: 2013-01-01
 questions[66]= "67)  &iquest;Cu&aacute;ntas gu&iacute;as de accesibilidad del WAI existen actualmente (abril de 2013)?";
 choices[66]= new Array();
 choices[66][0] = "Tres: ATAG, WCAG y UUAG. ";
 choices[66][1] = "Seis: ATAG, WCAG, UAAG, XAG, FCAG y WAI-RIA. ";
 choices[66][2] = "Cuatro: ATAG, WCAG, UAAG y XAG. ";
 choices[66][3] = "Cinco: ATAG, WCAG, UAAG, XAG y WAI-RIA. ";
 answers[66] = choices[66][3];
 units[66] = "39";
 comments[66] = "Id Pregunta: 9070. ";


//  Id pregunta: 9296 AÃ±o de creación de pregunta: 2013-01-01
 questions[67]= "68)  &iquest;Cu&aacute;les son las dimensiones de seguridad seg&uacute;n CobiT?.";
 choices[67]= new Array();
 choices[67][0] = "Confidencialidad, Disponibilidad, Integridad y Autenticidad.";
 choices[67][1] = "Confidencialidad, Integridad y Disponibilidad.";
 choices[67][2] = "Confidencialidad, Integridad, Disponibilidad y Autenticaci&oacute;n.";
 choices[67][3] = "Confidencialidad, Integridad, Disponibilidad e Interoperabilidad.";
 answers[67] = choices[67][1];
 units[67] = "32";
 comments[67] = "Id Pregunta: 9296. ";


//  Id pregunta: 9315 AÃ±o de creación de pregunta: 2013-01-01
 questions[68]= "69)  &iquest;Cu&aacute;l es el &oacute;rgano especializado en el control interno y en la evaluaci&oacute;n de los servicios de cada uno de los Ministerios y de sus organismos p&uacute;blicos dependientes?";
 choices[68]= new Array();
 choices[68][0] = "La IGAE";
 choices[68][1] = "La Inspecci&oacute;n General de los Servicios de cada Ministerio";
 choices[68][2] = "La Inspecci&oacute;n General del Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[68][3] = "La Agencia Estatal de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y de la Calidad de los Servicios";
 answers[68] = choices[68][1];
 units[68] = "31";
 comments[68] = "Id Pregunta: 9315. ";


//  Id pregunta: 9316 AÃ±o de creación de pregunta: 2013-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l es la norma que regula el proceso de auditor&iacute;a?";
 choices[69]= new Array();
 choices[69][0] = "Aquella que se haya aprobado en el &aacute;mbito organizativo en el que se desarrolla la auditor&iacute;a";
 choices[69][1] = "COBIT";
 choices[69][2] = "El mandato para la auditor&iacute;a";
 choices[69][3] = "La pol&iacute;tica de seguridad de la organizaci&oacute;n";
 answers[69] = choices[69][2];
 units[69] = "31";
 comments[69] = "Id Pregunta: 9316. ";


//  Id pregunta: 9318 AÃ±o de creación de pregunta: 2013-01-01
 questions[70]= "71)  Se&ntilde;ale la afirmaci&oacute;n verdadera";
 choices[70]= new Array();
 choices[70][0] = "El modelo organizativo en el que los auditores forman parte de los &oacute;rganos de control de la organizaci&oacute;n permite una mayor independencia";
 choices[70][1] = "El modelo organizativo en el que los auditores se integran dentro de los propios centros inform&aacute;ticos permite una mayor independencia";
 choices[70][2] = "El modelo organizativo en el que los auditores se integran dentro de los propios centros inform&aacute;ticos ofrece una implicaci&oacute;n m&aacute;s directa en las tareas destinadas a mejorar la calidad";
 choices[70][3] = "La a) y la c) son correctas";
 answers[70] = choices[70][3];
 units[70] = "31";
 comments[70] = "Id Pregunta: 9318. ";


//  Id pregunta: 9322 AÃ±o de creación de pregunta: 2013-01-01
 questions[71]= "72)  Se&ntilde;ale la afirmaci&oacute;n verdadera sobre las pruebas de cumplimiento";
 choices[71]= new Array();
 choices[71][0] = "Son aquellas que se aplican para detectar la presencia o ausencia de errores en los procesos o controles, bas&aacute;ndose en muestreos estad&iacute;sticos o buscando espec&iacute;ficamente las operaciones de mayor riesgo";
 choices[71][1] = "Son aquellas orientadas a comprobar que se cumplen determinados procedimientos de control o procesos establecidos";
 choices[71][2] = "Son aquellas dedicadas exclusivamente a probar la existencia de controles";
 choices[71][3] = "Un ejemplo de pruebas de cumplimiento es la observaci&oacute;n de la ejecuci&oacute;n de los procesos";
 answers[71] = choices[71][1];
 units[71] = "31";
 comments[71] = "Id Pregunta: 9322. ";


//  Id pregunta: 9577 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  La publicaci&oacute;n del BOE en su sede electr&oacute;nica:";
 choices[72]= new Array();
 choices[72][0] = "No tiene car&aacute;cter de oficial y aut&eacute;ntica, constituyendo lo publicado una mera manifestaci&oacute;n de servicio p&uacute;blico, ya que lo que tiene valor de oficial y aut&eacute;ntica es su edici&oacute;n impresa";
 choices[72][1] = "Tendr&aacute; car&aacute;cter de oficial y aut&eacute;ntica, al igual que la publicaci&oacute;n del resto de diarios oficiales de las CC.AA, a partir del 1 de enero de 2013.";
 choices[72][2] = "Tiene car&aacute;cter de oficial y aut&eacute;ntica, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil y en las restantes normas aplicables.";
 choices[72][3] = "Tiene car&aacute;cter de oficial y aut&eacute;ntica desde el d&iacute;a 1 de enero de 2011, excepto el contenido de la Secci&oacute;n de Anuncios, que se rige por su normativa espec&iacute;fica.";
 answers[72] = choices[72][2];
 units[72] = "43";
 comments[72] = "Id Pregunta: 9577. Examen TIC A1 2011";


//  Id pregunta: 9642 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de los siguientes no es un principio de la contrataci&oacute;n p&uacute;blica?";
 choices[73]= new Array();
 choices[73][0] = "a) Publicidad y transparencia";
 choices[73][1] = "b) Salvaguarda de la libre competencia";
 choices[73][2] = "c) Selecci&oacute;n de la oferta econ&oacute;micamente m&aacute;s ventajosa";
 choices[73][3] = "d) Restricci&oacute;n en el acceso a las licitaciones";
 answers[73] = choices[73][3];
 units[73] = "41";
 comments[73] = "Id Pregunta: 9642. Hay libertad de acceso a las licitaciones. Art&iacute;culo 1. Objeto y finalidad. La presente Ley tiene por objeto regular la contrataci&oacute;n del sector p&uacute;blico, a fin de garantizar que la misma se ajusta a los principios de libertad de acceso a las licitaciones, .";


//  Id pregunta: 9900 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  De acuerdo con la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de losciudadanos a los Servicios P&uacute;blicos, el principio de neutralidad tecnol&oacute;gica y de adaptabilidad al progreso significa que las Administraciones P&uacute;blicas";
 choices[74]= new Array();
 choices[74][0] = "utilizar&aacute;n est&aacute;ndares abiertos o de uso generalizado por los ciudadanos.";
 choices[74][1] = "utilizar&aacute;n procedimientos electr&oacute;nicos para sus tr&aacute;mites.";
 choices[74][2] = "no admitir&aacute;n el uso de esos medios m&aacute;s que de forma gratuita.";
 choices[74][3] = "utilizar&aacute;n medios que permitan la m&aacute;xima difusi&oacute;n sin coste.";
 answers[74] = choices[74][0];
 units[74] = "43";
 comments[74] = "Id Pregunta: 9900. TIC A1, Examen 2013";


//  Id pregunta: 10149 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  La Ley 34/2002, de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico, en relaci&oacute;n a la imposici&oacute;n de Sanciones indica";
 choices[75]= new Array();
 choices[75][0] = "El &oacute;rgano sancionador establecer&aacute; la cuant&iacute;a de la sanci&oacute;n aplicando la escala relativa a la clase de infracciones que preceda inmediatamente en gravedad a aquella en que se integra la considerada cuando el infractor haya reconocido espont&aacute;neamente su culpabilidad.";
 choices[75][1] = "La cuant&iacute;a de las multas que se impongan se graduar&aacute; atendiendo a La adhesi&oacute;n a un c&oacute;digo de conducta o a un sistema de autorregulaci&oacute;n publicitaria aplicable respecto a la infracci&oacute;n cometida.";
 choices[75][2] = "Las dos anteriores son ciertas";
 choices[75][3] = "Las afirmaciones anteriores son falsas";
 answers[75] = choices[75][2];
 units[75] = "30";
 comments[75] = "Id Pregunta: 10149. ";


//  Id pregunta: 10268 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  Las infracciones leves de la Ley 15/1999:";
 choices[76]= new Array();
 choices[76][0] = "Pueden no acarrear sanci&oacute;n econ&oacute;mica y prescriben al a&ntilde;o";
 choices[76][1] = "Acarrean una sanci&oacute;n econ&oacute;mica m&iacute;nima de 900 euros y prescriben al a&ntilde;o";
 choices[76][2] = "Pueden no acarrear sanci&oacute;n econ&oacute;mica y prescriben a los seis meses";
 choices[76][3] = "Acarrean una sanci&oacute;n econ&oacute;mica m&iacute;nima de 900 euros y prescriben a los seis meses";
 answers[76] = choices[76][1];
 units[76] = "29";
 comments[76] = "Id Pregunta: 10268. Art&iacute;culos 45.1 y 47.1 de la Ley 15/1999";


//  Id pregunta: 10270 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  &iquest;En cu&aacute;l de los siguientes casos no es necesaria autorizaci&oacute;n del director de la AEPD para hacer una transferencia internacional de datos personales?";
 choices[77]= new Array();
 choices[77][0] = "Cuando se refiera a transferencias dinerarias conforme a su legislaci&oacute;n espec&iacute;fica ";
 choices[77][1] = "Cuando la transferencia sea precisa para el reconocimiento, ejercicio o defensa de un derecho en un proceso judicial ";
 choices[77][2] = "Cuando la transferencia se haga a efectos de prestar o solicitar auxilio judicial internacional ";
 choices[77][3] = "En los tres casos anteriores";
 answers[77] = choices[77][3];
 units[77] = "29";
 comments[77] = "Id Pregunta: 10270. Art&iacute;culo 34 de la Ley 15/1999";


//  Id pregunta: 10329 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  Por motivos estrat&eacute;gicos, se acuerda terminar un portal de admnistraci&oacute;n electr&oacute;nica dos meses antes de lo previsto. No hay disponibilidad de m&aacute;s recursos humanos ni de ampliar el horario de trabajo ni de conseguir fondos para contratar personal externo. El Jefe de Proyecto deber&aacute; negociar entonces con el cliente del portal:";
 choices[78]= new Array();
 choices[78][0] = "Una reducci&oacute;n del alcance previsto, eliminando algunas funcionalidades adicionales o no cr&iacute;ticas,  hasta que cuadre en el tiempo previsto.";
 choices[78][1] = "Una demora en el tiempo ya que no se puede acometer sin m&aacute;s recursos la tarea indicada";
 choices[78][2] = "Que el portal se haga usando herramientas de creaci&oacute;n r&aacute;pida de portales electr&oacute;nicos";
 choices[78][3] = "Una disminuci&oacute;n de la calidad, admitiendo una serie de errores motivados por lo acelerado de la entrega";
 answers[78] = choices[78][0];
 units[78] = "27";
 comments[78] = "Id Pregunta: 10329. ";


//  Id pregunta: 10343 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  Seg&uacute;n lo recogido en el Texto Refundido de la Ley de propiedad Intelectual, se&ntilde;ale la respuesta correcta:";
 choices[79]= new Array();
 choices[79][0] = "La reproducci&oacute;n o transformaci&oacute;n de un programa de ordenador requerir&aacute; autorizaci&oacute;n del titular de los derechos de explotaci&oacute;n, en todo caso";
 choices[79][1] = "La reproducci&oacute;n o transformaci&oacute;n de un programa de ordenador no requerir&aacute; autorizaci&oacute;n del titular de los derechos de explotaci&oacute;n, en todo caso";
 choices[79][2] = "La correcci&oacute;n de errores de un programa de ordenador no requerir&aacute; autorizaci&oacute;n del titular de los derechos de explotaci&oacute;n, cuando sea necesario para la utilizaci&oacute;n del programa por parte del usuario seg&uacute;n su finalidad prevista";
 choices[79][3] = "Todas las respuestas anteriores son falsas";
 answers[79] = choices[79][2];
 units[79] = "36";
 comments[79] = "Id Pregunta: 10343. Consultar Art. 100 del Real Decreto Legislativo 1/1996";


//  Id pregunta: 10554 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  Cuando una metodolog&iacute;a de ciclo de vida de desarrollo de sistemas es inadecuada, el riesgo m&aacute;s serio del nuevo sistema ser&aacute;:";
 choices[80]= new Array();
 choices[80][0] = "Se completar&aacute; tarde";
 choices[80][1] = "Superar&aacute; las estimaciones de coste";
 choices[80][2] = "No cumplir&aacute; con las necesidades de negocio y de los usuarios";
 choices[80][3] = "Ser&aacute; incompatible con los sistemas existentes";
 answers[80] = choices[80][2];
 units[80] = "31, 32, 33";
 comments[80] = "Id Pregunta: 10554. Aunque todas las respuestas son riesgos, lo primero y m&aacute;s perjudicial es que el sistema no cumplir&aacute; con las necesidades de los usuarios y del negocio.";


//  Id pregunta: 10566 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  Seg&uacute;n ITIL un instrumento de gesti&oacute;n para el buen gobierno de las Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones en el dominio del soporte y el desempe&ntilde;o es:";
 choices[81]= new Array();
 choices[81][0] = "Plan de Continuidad de Negocio";
 choices[81][1] = "Plan de contingencia";
 choices[81][2] = "Plan de Recuperaci&oacute;n ante Desastres";
 choices[81][3] = "Plan de pruebas";
 answers[81] = choices[81][1];
 units[81] = "31, 32, 33";
 comments[81] = "Id Pregunta: 10566. ";


//  Id pregunta: 10591 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  Son europeos:";
 choices[82]= new Array();
 choices[82][0] = "El cuerpo de reguladores de comunicaciones electr&oacute;nicas BEREC";
 choices[82][1] = "El programa para el impulso de la Sociedad de la Informaci&oacute;n IDESI";
 choices[82][2] = "El sistema inform&aacute;tico JOIN para el intercambio de identidades electr&oacute;nicas";
 choices[82][3] = "La red SARA";
 answers[82] = choices[82][0];
 units[82] = "30";
 comments[82] = "Id Pregunta: 10591. ";


//  Id pregunta: 10596 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  Un plan de emergencia es un plan por el que...";
 choices[83]= new Array();
 choices[83][0] = "&hellip; se realiza una nueva puesta en marcha del negocio tras un incidente.";
 choices[83][1] = "&hellip; disminuye el riesgo de aparici&oacute;n de incidentes menores.";
 choices[83][2] = "&hellip; se fuerza la indisponibilidad de los recursos cr&iacute;ticos de informaci&oacute;n.";
 choices[83][3] = "&hellip; se prepara el entorno de continuidad en condiciones precarias.";
 answers[83] = choices[83][3];
 units[83] = "32";
 comments[83] = "Id Pregunta: 10596. ";


//  Id pregunta: 10686 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  Seg&uacute;n la Ley 39/2015, en relaci&oacute;n a la firma electr&oacute;nica.";
 choices[84]= new Array();
 choices[84][0] = "Es necesaria para acreditar la identidad en toda actuaci&oacute;n de un procedimiento administrativo.";
 choices[84][1] = "Con car&aacute;cter general, para realizar cualquier actuaci&oacute;n prevista en el procedimiento administrativo, ser&aacute; suficiente con que los interesados acrediten previamente su identidad a trav&eacute;s de cualquiera de los medios de identificaci&oacute;n previstos en la Ley.";
 choices[84][2] = "Solo es necesaria para: formular solicitudes, presentar declaraciones responsables o comunicaciones, interponer recursos y  desistir de acciones.";
 choices[84][3] = "Solo es necesaria para: formular solicitudes, presentar declaraciones responsables o comunicaciones e interponer recursos.";
 answers[84] = choices[84][1];
 units[84] = "30";
 comments[84] = "Id Pregunta: 10686. ";


//  Id pregunta: 10688 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  La Comisi&oacute;n para la Reforma de las Administraciones P&uacute;blicas present&oacute; su informe en:";
 choices[85]= new Array();
 choices[85][0] = "Enero de 2013.";
 choices[85][1] = "Junio de 2013.";
 choices[85][2] = "Diciembre de 2013.";
 choices[85][3] = "Enero de 2014.";
 answers[85] = choices[85][1];
 units[85] = "30";
 comments[85] = "Id Pregunta: 10688. ";


//  Id pregunta: 10699 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l de los siguientes no es un metadato obligatorio establecido en la NTI de Documento Electr&oacute;nico?";
 choices[86]= new Array();
 choices[86][0] = "Versi&oacute;n NTI.";
 choices[86][1] = "&Oacute;rgano.";
 choices[86][2] = "Estado de elaboraci&oacute;n.";
 choices[86][3] = "Todos los anteriores son metadatos obligatorios.";
 answers[86] = choices[86][3];
 units[86] = "43";
 comments[86] = "Id Pregunta: 10699. ";


//  Id pregunta: 10776 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  Se&ntilde;ale la respuesta correcta, seg&uacute;n la Ley Org&aacute;nica 15/1999, el Director de la Agencia de Protecci&oacute;n de Datos es nombrado de entre:";
 choices[87]= new Array();
 choices[87][0] = "Los miembros del Consejo Consultivo, mediante Orden Ministerial, y su mandato es de 4 a&ntilde;os.";
 choices[87][1] = "Los miembros del Consejo Consultivo, mediante Real Decreto, y su mandato es de 4 a&ntilde;os.";
 choices[87][2] = "Los miembros del Consejo Asesor del Ministerio de Justicia, mediante Orden Ministerial, y su mandato es de 5 a&ntilde;os.";
 choices[87][3] = "Los miembros del Consejo de Gobierno, mediante Real Decreto, y su mandato es de 5 a&ntilde;os.";
 answers[87] = choices[87][1];
 units[87] = "29";
 comments[87] = "Id Pregunta: 10776. Examen GSI 2014";


//  Id pregunta: 10965 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  En relaci&oacute;n con el modelo de gobernanza en el &aacute;mbito de las TIC de la Administraci&oacute;n General del Estado, y respecto a los medios y servicios de uso compartido es correcto que:";
 choices[88]= new Array();
 choices[88][0] = "Los medios y servicios TIC ser&aacute;n declarados de uso compartido cuando, en raz&oacute;n de su naturaleza o del inter&eacute;s com&uacute;n, respondan a necesidades transversales de los ciudadanos.";
 choices[88][1] = "La utilizaci&oacute;n de los medios y servicios compartidos ser&aacute; de car&aacute;cter obligatorio y sustitutivo respecto a los medios y servicios particulares empleados por las distintas unidades.";
 choices[88][2] = "Las Comisiones Ministeriales de Administraci&oacute;n Digital (CMAD) velar&aacute;n por el uso de los medios y servicios compartidos. En este sentido, cuando las necesidades puedan ser comunes a varias unidades de diferentes Ministerios, se escoger&aacute; la alternativa que permita independizar el servicio entre los Departamentos.";
 choices[88][3] = "Los activos TIC afectos a la prestaci&oacute;n de servicios sectoriales deber&aacute;n migrarse a los medios y servicios compartidos.";
 answers[88] = choices[88][1];
 units[88] = "44";
 comments[88] = "Id Pregunta: 10965. TIC A1 AGE 2014";


//  Id pregunta: 11108 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas no se utiliza para el control de la legalidad del software?";
 choices[89]= new Array();
 choices[89][0] = "Watermarking";
 choices[89][1] = "Huella digital";
 choices[89][2] = "Kerberos";
 choices[89][3] = "Windows Media Right Manager System";
 answers[89] = choices[89][2];
 units[89] = "37";
 comments[89] = "Id Pregunta: 11108. ";


//  Id pregunta: 11111 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l no es un principio general del dise&ntilde;o centrado en el usuario de Nielsen?";
 choices[90]= new Array();
 choices[90][0] = "Medida de la satisfacci&oacute;n del usuario";
 choices[90][1] = "Visibilidad del estado del sistema";
 choices[90][2] = "Dise&ntilde;o minimalista";
 choices[90][3] = "Prevenci&oacute;n y ayuda en la recuperaci&oacute;n de errores";
 answers[90] = choices[90][0];
 units[90] = "39";
 comments[90] = "Id Pregunta: 11111. ";


//  Id pregunta: 11489 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  La transmisi&oacute;n de los derechos morales de autor a favor de los herederos puede realizarse";
 choices[91]= new Array();
 choices[91][0] = "Mediante un contrato de cesi&oacute;n, donaci&oacute;n o compraventa.";
 choices[91][1] = "Incluyendo la transmisi&oacute;n de los derechos en la herencia.";
 choices[91][2] = "De cualquiera de las formas mencionadas en los apartados anteriores.";
 choices[91][3] = "Todas las anteriores son falsas.";
 answers[91] = choices[91][3];
 units[91] = "36";
 comments[91] = "Id Pregunta: 11489. NULL";


//  Id pregunta: 11492 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de los siguientes NO es un agente recogido por la NTI de Protocolo de Intermediaci&oacute;n de Datos?";
 choices[92]= new Array();
 choices[92][0] = "Emisor";
 choices[92][1] = "Remitente";
 choices[92][2] = "Cesionario";
 choices[92][3] = "Cedente";
 answers[92] = choices[92][1];
 units[92] = "43";
 comments[92] = "Id Pregunta: 11492. NULL";


//  Id pregunta: 11495 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Seg&uacute;n la Ley de Contratos del Sector P&uacute;blico (L.C.S.P.), la adquisici&oacute;n de una licencia mediante la que se cede el derecho de uso de un programa de ordenador tiene la categor&iacute;a de:";
 choices[93]= new Array();
 choices[93][0] = "Contrato de Suministros.";
 choices[93][1] = "Contrato de Arrendamiento.";
 choices[93][2] = "Contrato de Servicios.";
 choices[93][3] = "Contrato de &quot;leasing&quot; o de &quot;renting&quot;";
 answers[93] = choices[93][0];
 units[93] = "41";
 comments[93] = "Id Pregunta: 11495. NULL";


//  Id pregunta: 11588 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Los contratos de servicios de los organismos aut&oacute;nomos se encuentran sujetos a regulaci&oacute;n armonizada cuando su importe es igual o superior a:";
 choices[94]= new Array();
 choices[94][0] = "50000";
 choices[94][1] = "134000";
 choices[94][2] = "207000";
 choices[94][3] = "862000";
 answers[94] = choices[94][1];
 units[94] = "41";
 comments[94] = "Id Pregunta: 11588. ";


//  Id pregunta: 11596 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Con respecto a las Comisiones Ministeriales de Administraci&oacute;n Digital, se&ntilde;ale la respuesta correcta:";
 choices[95]= new Array();
 choices[95][0] = "Definen las prioridades de inversi&oacute;n en materias TIC de acuerdo con los objetivos establecidos por el Gobierno.";
 choices[95][1] = "Impulsan la colaboraci&oacute;n y cooperaci&oacute;n con las comunidades aut&oacute;nomas y las entidades locales para la puesta en marcha de servicios interadministrativos integrados y la compartici&oacute;n de infraestructuras t&eacute;cnicas y los servicios comunes que permitan la racionalizaci&oacute;n de los recursos TIC a todos los niveles del Estado.";
 choices[95][2] = "Act&uacute;an como Observatorio de la Administraci&oacute;n Electr&oacute;nica y Transformaci&oacute;n Digital.";
 choices[95][3] = "Impulsan la digitalizaci&oacute;n de los servicios y procedimientos del departamento con el fin de homogeneizarlos, simplificarlos, mejorar su calidad y facilidad de uso, as&iacute; como las prestaciones ofrecidas a los ciudadanos y empresas, optimizando la utilizaci&oacute;n de los recursos TIC disponibles.";
 answers[95] = choices[95][3];
 units[95] = "43";
 comments[95] = "Id Pregunta: 11596. ";


//  Id pregunta: 11598 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  El derecho y obligaci&oacute;n de relacionarse electr&oacute;nicamente con las Administraciones P&uacute;blicas se recoge en la Ley 39/2015 en el: ";
 choices[96]= new Array();
 choices[96][0] = "Art&iacute;culo 4";
 choices[96][1] = "Art&iacute;culo 6";
 choices[96][2] = "Art&iacute;culo 10";
 choices[96][3] = "Art&iacute;culo 14";
 answers[96] = choices[96][3];
 units[96] = "43";
 comments[96] = "Id Pregunta: 11598. ";


//  Id pregunta: 11753 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l de los siguientes sistemas no permite una lectura del texto de una p&aacute;gina web?";
 choices[97]= new Array();
 choices[97][0] = "ReadMe";
 choices[97][1] = "ReadSpeaker";
 choices[97][2] = "JAWS";
 choices[97][3] = "WebAnywhere";
 answers[97] = choices[97][0];
 units[97] = "39";
 comments[97] = "Id Pregunta: 11753. ";


//  Id pregunta: 11771 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Las especificaciones t&eacute;cnicas de un pliego de prescripciones";
 choices[98]= new Array();
 choices[98][0] = "deben permitir descartar ciertas empresas o productos con los que no se han tenido buenas experiencias";
 choices[98][1] = "todas son falsas&nbsp;";
 choices[98][2] = "deben hacer referencia a la fabricaci&oacute;n o procedencia determinada del producto o servicio";
 choices[98][3] = "deben hacer referencia a la marca de mayor calidad del producto o servicio";
 answers[98] = choices[98][1];
 units[98] = "41";
 comments[98] = "Id Pregunta: 11771. ";


//  Id pregunta: 11784 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Seg&uacute;n la ley 19/2013 de transparencia y en lo referente al buen gobierno considera:";
 choices[99]= new Array();
 choices[99][0] = "Infracci&oacute;n disciplinaria muy grave, el acoso laboral.";
 choices[99][1] = "Infracci&oacute;n muy grave en materia de gesti&oacute;n econ&oacute;mico-presupuestaria, el incumplimiento de la obligaci&oacute;n de rendir cuentas regulada en el art&iacute;culo 137 de la Ley 47/2003, General Presupuestaria.";
 choices[99][2] = "Infracci&oacute;n grave, la intervenci&oacute;n en un procedimiento administrativo cuando se d&eacute; alguna de las causas de abstenci&oacute;n legalmente se&ntilde;aladas.";
 choices[99][3] = "Todas son verdaderas.";
 answers[99] = choices[99][3];
 units[99] = "19";
 comments[99] = "Id Pregunta: 11784. ";


