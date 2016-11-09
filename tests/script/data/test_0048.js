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

//  Id pregunta: 48 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes no es un control de entrada de datos en una Revisi&oacute;n de Controles de Aplicaci&oacute;n en una auditor&iacute;a inform&aacute;tica?:";
 choices[0]= new Array();
 choices[0][0] = "Controles por lote y balanceo";
 choices[0][1] = "Validaci&oacute;n y edici&oacute;n de datos";
 choices[0][2] = "Balanceo y conciliaci&oacute;n";
 choices[0][3] = "Autorizaci&oacute;n de ingreso";
 answers[0] = choices[0][2];
 units[0] = "31,32,33";
 comments[0] = "Id Pregunta: 48. ";


//  Id pregunta: 74 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas se basa en un recuento de en cuantos criterios ha sido la mejor?:";
 choices[1]= new Array();
 choices[1][0] = "M&eacute;todo promethee";
 choices[1][1] = "Utilidad multiatributo";
 choices[1][2] = "Permutaci&oacute;n";
 choices[1][3] = "Ninguno de los anteriores";
 answers[1] = choices[1][3];
 units[1] = "34";
 comments[1] = "Id Pregunta: 74. Tema 36 de 2005";


//  Id pregunta: 150 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  El modelo de Nolan de cuatro etapas si lo representamos gr&aacute;ficamente tiene forma de:";
 choices[2]= new Array();
 choices[2][0] = "s";
 choices[2][1] = "n";
 choices[2][2] = "u";
 choices[2][3] = "z";
 answers[2] = choices[2][0];
 units[2] = "22";
 comments[2] = "Id Pregunta: 150. Nolan";


//  Id pregunta: 296 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  La determinaci&oacute;n del nivel aceptable de seguridad corresponde a una pol&iacute;tica de:";
 choices[3]= new Array();
 choices[3][0] = "Aceptar el riesgo";
 choices[3][1] = "Evitar el riesgo";
 choices[3][2] = "Traspasar el riesgo";
 choices[3][3] = "Ninguna de las anteriores";
 answers[3] = choices[3][1];
 units[3] = "33";
 comments[3] = "Id Pregunta: 296. ";


//  Id pregunta: 368 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Los est&aacute;ndares en la industria y la tecnolog&iacute;a deben ser producidos:";
 choices[4]= new Array();
 choices[4][0] = "Siempre, en todos los casos, para evitar monopolios";
 choices[4][1] = "Cuando la tecnolog&iacute;a est&eacute; madura pero a&uacute;n no hay inversiones en implementaciones propietarias, para beneficiar tanto a usuarios como a la industria";
 choices[4][2] = "Antes de que madure la tecnolog&iacute;a, para contribuir a una madurez consensuada";
 choices[4][3] = "Nunca, ya que pone en desventaja a aquellos que comenzaron a investigar en dicha tecnolog&iacute;a";
 answers[4] = choices[4][1];
 units[4] = "42";
 comments[4] = "Id Pregunta: 368. ";


//  Id pregunta: 423 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Seg&uacute;n el Consejo Superior de Administraci&oacute;n Electr&oacute;nica, &iquest;cu&aacute;les son las principales fuentes de normas de sistemas abiertos que se deben aplicar?:";
 choices[5]= new Array();
 choices[5][0] = "ISO, POSIX y est&aacute;ndares de facto";
 choices[5][1] = "ISO, X/OPEN (gu&iacute;as XPG) y est&aacute;ndares de facto";
 choices[5][2] = "ISO, X/OPEN (gu&iacute;as XPG) y EPHOS";
 choices[5][3] = "ISO, POSIX y X/OPEN (gu&iacute;as XPG)";
 answers[5] = choices[5][2];
 units[5] = "40";
 comments[5] = "Id Pregunta: 423. ";


//  Id pregunta: 557 AÃ±o de creación de pregunta: 2004-01-01
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes no es una tarea t&iacute;pica de la auditor&iacute;a inform&aacute;tica?";
 choices[6]= new Array();
 choices[6][0] = "Reorganizaci&oacute;n de los recursos humanos del Departamento de Sistemas de Informaci&oacute;n";
 choices[6][1] = "Revisi&oacute;n de aplicaciones";
 choices[6][2] = "Revisi&oacute;n de instalaciones inform&aacute;ticas";
 choices[6][3] = "Revisi&oacute;n de sistemas bajo desarrollo";
 answers[6] = choices[6][0];
 units[6] = "31, 32, 33";
 comments[6] = "Id Pregunta: 557. MAP-B 2004";


//  Id pregunta: 725 AÃ±o de creación de pregunta: 2004-01-01
 questions[7]= "8)  Seg&uacute;n su comportamiento durante la ejecuci&oacute;n de un programa, las estructuras de datos se pueden clasificar en:";
 choices[7]= new Array();
 choices[7][0] = "Est&aacute;ticas y din&aacute;micas";
 choices[7][1] = "De clase y de objeto";
 choices[7][2] = "De iteraci&oacute;n, de recursi&oacute;n y de bifurcaci&oacute;n";
 choices[7][3] = "De flujo de control y de flujo de datos";
 answers[7] = choices[7][0];
 units[7] = "57";
 comments[7] = "Id Pregunta: 725. Examen TIC MAP B 2004";


//  Id pregunta: 776 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  En telecomunicaciones, EFT son las siglas de:";
 choices[8]= new Array();
 choices[8][0] = "Enhanced Fiber Transmission, Transmisi&oacute;n mejorada por fibra &oacute;ptica";
 choices[8][1] = "Electronic Funds Transfer, Transferencia electr&oacute;nica de fondos";
 choices[8][2] = "Enhanced File Transfer, Transmisi&oacute;n mejorada de ficheros";
 choices[8][3] = "Electronic Forms Transfer, Transferencia electr&oacute;nica de formularios";
 answers[8] = choices[8][1];
 units[8] = "70";
 comments[8] = "Id Pregunta: 776. NULL";


//  Id pregunta: 854 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes opciones no es una estructura de representaci&oacute;n del conocimiento?:";
 choices[9]= new Array();
 choices[9][0] = "Redes sem&aacute;nticas";
 choices[9][1] = "Diagramas";
 choices[9][2] = "Marcos";
 choices[9][3] = "Guiones";
 answers[9] = choices[9][1];
 units[9] = "63";
 comments[9] = "Id Pregunta: 854. ";


//  Id pregunta: 1212 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  La clave p&uacute;blica forma parte de un:";
 choices[10]= new Array();
 choices[10][0] = "Sistema criptogr&aacute;fico sim&eacute;trico";
 choices[10][1] = "Sistema criptogr&aacute;fico anal&oacute;gico";
 choices[10][2] = "Sistema criptogr&aacute;fico asim&eacute;trico";
 choices[10][3] = "Sistema criptogr&aacute;fico propietario de la Administraci&oacute;n P&uacute;blica";
 answers[10] = choices[10][2];
 units[10] = "72";
 comments[10] = "Id Pregunta: 1212. ";


//  Id pregunta: 1344 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Se&ntilde;ale el modelo de miner&iacute;a de datos que comprueba la validez de las hip&oacute;tesis establecidas por el usuario.";
 choices[11]= new Array();
 choices[11][0] = "Modelo de descubrimiento.";
 choices[11][1] = "Modelo de verificaci&oacute;n.";
 choices[11][2] = "Modelo predictivo.";
 choices[11][3] = "Modelo de resumen.";
 answers[11] = choices[11][1];
 units[11] = "68";
 comments[11] = "Id Pregunta: 1344. ";


//  Id pregunta: 1473 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Para el tratamiento de im&aacute;genes informatizadas se usan algoritmos construidos mediante:";
 choices[12]= new Array();
 choices[12][0] = "Ecuaciones de Cauchy";
 choices[12][1] = "Series de McLaurin";
 choices[12][2] = "Integrales de Riemann Stiltges";
 choices[12][3] = "Transformadas de Fourier";
 answers[12] = choices[12][3];
 units[12] = "93";
 comments[12] = "Id Pregunta: 1473. NULL";


//  Id pregunta: 1566 AÃ±o de creación de pregunta: 2003-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l no es una caracter&iacute;stica de la Huella Digital?";
 choices[13]= new Array();
 choices[13][0] = "Dos mensajes iguales producen la misma huella digital";
 choices[13][1] = "Conocido un mensaje M1 y su resumen R, ser&aacute; computacionalmente imposible encontrar otro mensaje M2 cuyo resumen sea tambi&eacute;n R";
 choices[13][2] = " Dos mensajes parecidos producen huellas digitales diferentes";
 choices[13][3] = " La funci&oacute;n hash es reversible";
 answers[13] = choices[13][3];
 units[13] = "73";
 comments[13] = "Id Pregunta: 1566. ";


//  Id pregunta: 1576 AÃ±o de creación de pregunta: 2003-01-01
 questions[14]= "15)  &iquest;Qu&eacute; es un &lsquo;trigger&rsquo;?";
 choices[14]= new Array();
 choices[14][0] = "Es un procedimiento asociado a una acci&oacute;n (inserci&oacute;n, borrado o modificaci&oacute;n) y a una tabla que se ejecuta cada vez que se intenta realizar una determinada operaci&oacute;n sobre dicha tabla.";
 choices[14][1] = "Es un puntero interno al SGBD que apunta a las filas de las tablas sobre la que est&aacute; definido y sirve para acelerar el acceso a los datos de la base.";
 choices[14][2] = "Es un archivo privado del SGBD en el que se apuntan todas las operaciones que se realizan sobre la base de datos.";
 choices[14][3] = "Es un tipo de distribuci&oacute;n de las filas de una tabla que permite hacer accesos en paralelo a los datos de dicha tabla.";
 answers[14] = choices[14][0];
 units[14] = "58";
 comments[14] = "Id Pregunta: 1576. ";


//  Id pregunta: 1680 AÃ±o de creación de pregunta: 2004-01-01
 questions[15]= "16)  &iquest;Qu&eacute; es un JNI?";
 choices[15]= new Array();
 choices[15][0] = "Es una interfaz que permite el acceso a bases de datos desde programas java";
 choices[15][1] = "Es una interfaz de programaci&oacute;n para gestionar entornos de ventanas en java";
 choices[15][2] = "Es una interfaz de programaci&oacute;n que facilita el acceso, generaci&oacute;n y desarrollo de componentes o programas para acceder a ficheros XML";
 choices[15][3] = "Es una interfaz est&aacute;ndar de programaci&oacute;n para llamar a m&eacute;todos nativos escritos en otros lenguajes, desde un programa java";
 answers[15] = choices[15][3];
 units[15] = "60";
 comments[15] = "Id Pregunta: 1680. NULL";


//  Id pregunta: 1682 AÃ±o de creación de pregunta: 2004-01-01
 questions[16]= "17)  Respecto al software gratuito y al software libre podemos decir que";
 choices[16]= new Array();
 choices[16][0] = "El software gratuito siempre es libre";
 choices[16][1] = "El software libre siempre es gratuito";
 choices[16][2] = "El software libre y el software gratuito son dos terminos equivalentes";
 choices[16][3] = "Ninguna de las afirmaciones anteriores es correcta";
 answers[16] = choices[16][3];
 units[16] = "61";
 comments[16] = "Id Pregunta: 1682. ";


//  Id pregunta: 1688 AÃ±o de creación de pregunta: 2004-01-01
 questions[17]= "18)  &iquest;Qu&eacute; es FALSO respecto al NRC?";
 choices[17]= new Array();
 choices[17][0] = "Es un elemento utilizado en la pasarela de pago PISTA";
 choices[17][1] = "Sus siglas significan: N&uacute;mero de Referencia Completo";
 choices[17][2] = "Se compone del n&uacute;mero de justificante m&aacute;s unos caracteres de control";
 choices[17][3] = "Para obtener los caracteres de control se aplica la funci&oacute;n MAC del algoritmo DES a los datos de la operaci&oacute;n, mediante la clave privada de la entidad";
 answers[17] = choices[17][0];
 units[17] = "70";
 comments[17] = "Id Pregunta: 1688. NULL";


//  Id pregunta: 2048 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  En la planificaci&oacute;n estrat&eacute;gica de sistemas de informaci&oacute;n, las decisiones principales que es preciso tomar son:";
 choices[18]= new Array();
 choices[18][0] = "Establecer los objetivos y metas principales";
 choices[18][1] = "Formular programas y proyectos parqa conseguir los objetivos";
 choices[18][2] = "Definir presupuesto y &aacute;mbito de actuaci&oacute;n para llevar a cabo lo anterior";
 choices[18][3] = "Todas las anteriores respuestas son correctas";
 answers[18] = choices[18][3];
 units[18] = "77";
 comments[18] = "Id Pregunta: 2048. ";


//  Id pregunta: 2138 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  &iquest;Cu&aacute;l de las siguientes expresiones est&aacute; de acuerdo con los actuales criterios de calidad del software de gesti&oacute;n?:";
 choices[19]= new Array();
 choices[19][0] = "La funci&oacute;n 'calidad' debe ser desempe&ntilde;ada por un equipo independiente de especialistas";
 choices[19][1] = "El coste de la calidad debe ser equilibrado con el coste de la 'no-calidad'";
 choices[19][2] = "La funci&oacute;n 'calidad' debe garantizar la producci&oacute;n de 'software cero-defectos'";
 choices[19][3] = "Todas las anteriores respuestas son correctas";
 answers[19] = choices[19][1];
 units[19] = "88";
 comments[19] = "Id Pregunta: 2138. NULL";


//  Id pregunta: 2260 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  DRM es:";
 choices[20]= new Array();
 choices[20][0] = "un sistema de modulaci&oacute;n digital basado en secuencias aleatorias";
 choices[20][1] = "un conjunto de directivas para la investigaci&oacute;n de tecnolog&iacute;as m&oacute;viles";
 choices[20][2] = "un programa de formaci&oacute;n especializado en las relaciones entre directivos";
 choices[20][3] = "una tecnolog&iacute;a para la gesti&oacute;n de los derechos de los contenidos digitales ";
 answers[20] = choices[20][3];
 units[20] = "37";
 comments[20] = "Id Pregunta: 2260. ";


//  Id pregunta: 2337 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  En los Diagramas de Estructura de Datos se representa la visi&oacute;n de los datos que tienen las aplicaciones inform&aacute;ticas y que se denomina:";
 choices[21]= new Array();
 choices[21][0] = "Esquema Conceptual";
 choices[21][1] = "Esquema Externo";
 choices[21][2] = "Esquema Interno";
 choices[21][3] = "Esquema Funcional";
 answers[21] = choices[21][1];
 units[21] = "58,80,81";
 comments[21] = "Id Pregunta: 2337. ";


//  Id pregunta: 2363 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Entre los elementos de un diagrama de flujo de datos tenemos:";
 choices[22]= new Array();
 choices[22][0] = "Entidad externa, proceso, almac&eacute;n de datos y diagrama general";
 choices[22][1] = "Entidad externa, almac&eacute;n de datos y flujo de datos";
 choices[22][2] = "Entidad externa, almac&eacute;n de datos, proceso y flujo de datos";
 choices[22][3] = "Almac&eacute;n de datos, proceso, flujo de datos y diagrama general";
 answers[22] = choices[22][2];
 units[22] = "81";
 comments[22] = "Id Pregunta: 2363. ";


//  Id pregunta: 2494 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Se&ntilde;ale la respuesta falsa a la siguiente afirmaci&oacute;n: &quot;En un diagrama de casos de uso se tienen los siguientes componentes&quot;:";
 choices[23]= new Array();
 choices[23][0] = "Caso de uso.";
 choices[23][1] = "Carpetas.";
 choices[23][2] = "Actor.";
 choices[23][3] = "Relaci&oacute;n.";
 answers[23] = choices[23][1];
 units[23] = "82,84";
 comments[23] = "Id Pregunta: 2494. ";


//  Id pregunta: 2554 AÃ±o de creación de pregunta: 2004-01-01
 questions[24]= "25)  Se&ntilde;ale la afirmaci&oacute;n correcta entre las siguientes:";
 choices[24]= new Array();
 choices[24][0] = "M&aacute;s del 30% de los grandes proyectos inform&aacute;ticos alcanzan resultados satisfactorios";
 choices[24][1] = "Est&aacute;ndares como CMM, CMMI, SPICE y otros, son f&aacute;ciles de aplicar en la mayor&iacute;a de los proyectos inform&aacute;ticos";
 choices[24][2] = "Expertos de la OCDE vienen advirtiendo sobre las amenazas que para la implantaci&oacute;n de la administraci&oacute;n electronica suponen los reiterados fracasos de las administraciones en los grandes proyectos inform&aacute;ticos que vienen abordando.";
 choices[24][3] = "Los m&eacute;todos de programaci&oacute;n &aacute;giles han demostrado sobradamente su eficiencia para proyectos no triviales.";
 answers[24] = choices[24][2];
 units[24] = "87,88,92";
 comments[24] = "Id Pregunta: 2554. Pregunta Junta Andalucia - A";


//  Id pregunta: 2562 AÃ±o de creación de pregunta: 2004-01-01
 questions[25]= "26)  &iquest;Qu&eacute; significa que una Organizaci&oacute;n esta en el Nivel 2 del CMM?";
 choices[25]= new Array();
 choices[25][0] = "En este nivel se logran establecer las pol&iacute;ticas para adminsitrar un proyecto de software y los procedimientos para lograrlo, esto se realiza en base a la experiencia obtenida en proyectos similares.";
 choices[25][1] = "En este nivel, el proceso est&aacute;ndar para el desarrollo y mantenimiento de software se documenta, tanto desde el punto de vista t&eacute;cnico como administrativo. Se explotan efectivamente pr&aacute;cticas de ingenier&iacute;a de software para estandarizar los procesos.";
 choices[25][2] = "Todas son correctas";
 choices[25][3] = "En este nivel la empresa carece de buenas pr&aacute;cticas de ingenier&iacute;a de software, ni existe una planeaci&oacute;n efectiva. Los proyectos generalmente abandonan los planes realizados en etapas de crisis.";
 answers[25] = choices[25][0];
 units[25] = "87,88,92";
 comments[25] = "Id Pregunta: 2562. ";


//  Id pregunta: 2685 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  La entrada de documentos al sistema de reconocimiento &oacute;ptico de caracteres se produce sobre soporte:";
 choices[26]= new Array();
 choices[26][0] = "Papel";
 choices[26][1] = "Fax";
 choices[26][2] = "Correo electr&oacute;nico.";
 choices[26][3] = "Todos los anteriores.";
 answers[26] = choices[26][3];
 units[26] = "94";
 comments[26] = "Id Pregunta: 2685. ";


//  Id pregunta: 2736 AÃ±o de creación de pregunta: 2006-01-01
 questions[27]= "28)  Cuando hablamos del concepto de Almac&eacute;n de Datos en An&aacute;lisis Estructurado. Cual de las siguientes afirmaciones es falsa.";
 choices[27]= new Array();
 choices[27][0] = "Pueden  ser permanentes o temporales";
 choices[27][1] = "No crean informaci&oacute;n";
 choices[27][2] = "Son  accesibles desde entidades externas.";
 choices[27][3] = "Son accesibles s&oacute;lo desde los procesos";
 answers[27] = choices[27][2];
 units[27] = "79,81";
 comments[27] = "Id Pregunta: 2736. ";


//  Id pregunta: 2746 AÃ±o de creación de pregunta: 2006-01-01
 questions[28]= "29)  &iquest;Cu&aacute;l de los siguientes es un m&eacute;todo de an&aacute;lisis orientado al flujo de datos?";
 choices[28]= new Array();
 choices[28][0] = "El Diagrama de Flujo de Datos (DFD)";
 choices[28][1] = "El Modelo Entidad/Relaci&oacute;n (E/R) de Peter Chen";
 choices[28][2] = "La Historia de la Vida de las Entidades (HVE)";
 choices[28][3] = "El Diagrama de Estructura de Datos (DED)";
 answers[28] = choices[28][0];
 units[28] = "81";
 comments[28] = "Id Pregunta: 2746. ";


//  Id pregunta: 2815 AÃ±o de creación de pregunta: 2006-01-01
 questions[29]= "30)  Cual de las siguientes no es una forma de autoevaluaci&oacute;n seg&uacute;n el EFQM";
 choices[29]= new Array();
 choices[29][0] = "Simulaci&oacute;n de presentaci&oacute;n al Premio";
 choices[29][1] = "Por formularios";
 choices[29][2] = "Por cuestionarios de autoevaluaci&oacute;n";
 choices[29][3] = "Todas son correctas";
 answers[29] = choices[29][3];
 units[29] = "88";
 comments[29] = "Id Pregunta: 2815. NULL";


//  Id pregunta: 3106 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  Una de las caracter&iacute;sticas fundamentales de los sistemas de recuperaci&oacute;n de informaci&oacute;n es:";
 choices[30]= new Array();
 choices[30][0] = "Trabaja con informaci&oacute;n estructurada de tipo imagen";
 choices[30][1] = "Maneja grandes vol&uacute;menes de informaci&oacute;n no estructurada, combinando norm&aacute;lmente texto e im&aacute;genes";
 choices[30][2] = "Trabaja con informaci&oacute;n estructurada y vol&uacute;menes de informaci&oacute;n medio/bajos";
 choices[30][3] = "Su objeto es la recuperaci&oacute;n de ficheros y bases de datos";
 answers[30] = choices[30][1];
 units[30] = "21";
 comments[30] = "Id Pregunta: 3106. ";


//  Id pregunta: 3137 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  &iquest;Cu&aacute;l de las respuestas siguientes no se aplica a los servicios de red orientados a conexi&oacute;n?:";
 choices[31]= new Array();
 choices[31][0] = "Requiere que todas las conexiones sean expl&iacute;citamente establecidas y terminadas";
 choices[31][1] = "Requiere que a cada paquete se le a&ntilde;ada toda la direcci&oacute;n de encaminamiento antes de transmitirlo";
 choices[31][2] = "Predetermina el path desde la fuente al destino antes de transmitir los datos";
 choices[31][3] = "Reserva los recursos de red antes de transmitir los datos";
 answers[31] = choices[31][1];
 units[31] = "101";
 comments[31] = "Id Pregunta: 3137. ";


//  Id pregunta: 3384 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  El middleware puede definirse como un m&oacute;dulo intermedio que act&uacute;a como conductor entre dos m&oacute;dulos de software.  A este respecto, tambi&eacute;n se puede afirmar que:";
 choices[32]= new Array();
 choices[32][0] = "En una aplicaci&oacute;n cliente/servidor, el middleware permite independizar los procesos cliente y servidor";
 choices[32][1] = "La utilizaci&oacute;n del middleware en lugar de utilizar drectamente las APIs del sistema operativo, hace que en  muchas ocasiones se pierda 'potencia'";
 choices[32][2] = "En t&eacute;minos de programaci&oacute;n orientada a objetos, el middleware identifica diferentes objetos y conoce las propiedades que tienen asociadas, por lo que puede responder a peticiones referentes a los mismos";
 choices[32][3] = "Todas las respuestas anteriores son correctas";
 answers[32] = choices[32][3];
 units[32] = "113";
 comments[32] = "Id Pregunta: 3384. *: Middleware";


//  Id pregunta: 3398 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  El n&uacute;mero m&aacute;ximo que se puede conectar al bus pasivo de usuario en una instalaci&oacute;n b&aacute;sica RDSI es de:";
 choices[33]= new Array();
 choices[33][0] = "2";
 choices[33][1] = "4";
 choices[33][2] = "8";
 choices[33][3] = "16";
 answers[33] = choices[33][2];
 units[33] = "103";
 comments[33] = "Id Pregunta: 3398. ";


//  Id pregunta: 3430 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  Indicar la afirmaci&oacute;n incorrecta:";
 choices[34]= new Array();
 choices[34][0] = "Un Gateway (pasarelas&iacute;ncrono no permite a los usuarios de ordenadores personales acceder a grandes ordenadores (mainframes)";
 choices[34][1] = "Un Gateway SNA permite la conexi&oacute;n a grandes ordenadores con arquitectura de comunicaciones SNA (System Network Arquitecture)";
 choices[34][2] = "Un Gateway PAD X.25 permite a los usuarios de ordenadores personales acceder a grandes ordenadores (mainframes)";
 choices[34][3] = "Los Gateways est&aacute;n pensados para facilitar el acceso entre sistemas o entornos que soportan diferentes protocolos y operan en los niveles m&aacute;s altos del modelo de referencia OSI (Interconexi&oacute;n de Sistemas Abiertos)";
 answers[34] = choices[34][0];
 units[34] = "102";
 comments[34] = "Id Pregunta: 3430. ";


//  Id pregunta: 3453 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  El protocolo HDLC&hellip;:";
 choices[35]= new Array();
 choices[35][0] = "Es un protocolo de nivel f&iacute;sico";
 choices[35][1] = "Es un protocolo a nivel de enlace";
 choices[35][2] = "Es un protocolo a nive de red";
 choices[35][3] = "Es un protocolo a nivel de transporte";
 answers[35] = choices[35][1];
 units[35] = "100";
 comments[35] = "Id Pregunta: 3453. NULL";


//  Id pregunta: 3555 AÃ±o de creación de pregunta: 2002-01-01
 questions[36]= "37)  En sistemas de informaci&oacute;n y comunicaciones, SOAP es acr&oacute;nimo de:";
 choices[36]= new Array();
 choices[36][0] = "Services Oriented Architecture Protocol";
 choices[36][1] = "Simple Object Access Protocol";
 choices[36][2] = "Ninguna de las anteriores es v&aacute;lida";
 choices[36][3] = "Las respuestas 'a' y 'b' son ciertas";
 answers[36] = choices[36][1];
 units[36] = "69";
 comments[36] = "Id Pregunta: 3555. NULL";


//  Id pregunta: 3725 AÃ±o de creación de pregunta: 2002-01-01
 questions[37]= "38)  Los mensajes de respuesta HTTP de c&oacute;digo 5xx se corresponden con:";
 choices[37]= new Array();
 choices[37][0] = "error en el cliente";
 choices[37][1] = "redirecci&oacute;n por cambio de ubicaci&oacute;n del objeto pedido";
 choices[37][2] = "error en el servidor";
 choices[37][3] = "petici&oacute;n con &eacute;xito";
 answers[37] = choices[37][2];
 units[37] = "112";
 comments[37] = "Id Pregunta: 3725. ";


//  Id pregunta: 3894 AÃ±o de creación de pregunta: 2003-01-01
 questions[38]= "39)  En un servicio primario RDSI se pueden constituir los siguientes canales:";
 choices[38]= new Array();
 choices[38][0] = "30 canales de voz o datos tipo B de 64 Kbps cada uno y un canal de se&ntilde;alizaci&oacute;n tipo D a 64 Kbps.";
 choices[38][1] = "30 canales de voz o datos tipo B de 64 Kbps cada uno y 2 canales de se&ntilde;alizaci&oacute;n tipo D a 16 Kbps.";
 choices[38][2] = " 32 canales de voz o datos tipo B de 64 Kbps cada uno y un canal de se&ntilde;alizaci&oacute;n tipo D a 64 Kbps.";
 choices[38][3] = "32 canales de voz o datos tipo B de 64 Kbps cada uno y 2 canales de se&ntilde;alizaci&oacute;n tipo D a 16 Kbps.";
 answers[38] = choices[38][0];
 units[38] = "103";
 comments[38] = "Id Pregunta: 3894. Junta Andaluc&iacute;a";


//  Id pregunta: 4027 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  &iquest;Qu&eacute; modulaci&oacute;n se usa en GSM?";
 choices[39]= new Array();
 choices[39][0] = "QPSK";
 choices[39][1] = "BPSK";
 choices[39][2] = "QAM";
 choices[39][3] = "GMSK";
 answers[39] = choices[39][3];
 units[39] = "108";
 comments[39] = "Id Pregunta: 4027. ";


//  Id pregunta: 4063 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  Se&ntilde;ale la respuesta correcta en relaci&oacute;n a las extensiones MIME";
 choices[40]= new Array();
 choices[40][0] = "MIME es acr&oacute;nimo de MultiProtocol Internet Mail Extension";
 choices[40][1] = "permite enviar contenido multimedia a trav&eacute;s de HTTP";
 choices[40][2] = "el est&aacute;ndar de seguridad S-MIME permite el env&iacute;o seguro de mensajes y transacciones";
 choices[40][3] = "fue creado por Ia Asociaci&oacute;n de Amigos de Internet (IFA)";
 answers[40] = choices[40][2];
 units[40] = "112";
 comments[40] = "Id Pregunta: 4063. ";


//  Id pregunta: 4115 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  Se&ntilde;ale la afirmaci&oacute;n incorrecta:";
 choices[41]= new Array();
 choices[41][0] = "Un &ldquo;Webcrawler&rdquo; es motor de b&uacute;squeda de nuevo contenido en Internet";
 choices[41][1] = "Un robot &ldquo;Spider&rdquo; navega por la red de una p&aacute;gina a otra recogiendo informaci&oacute;n de los sitios que visita, esta informaci&oacute;n es almacenada en la base de datos del motor de b&uacute;squeda.";
 choices[41][2] = "Los robots &ldquo;Wanderers&rdquo; o vagabundos miden el tama&ntilde;o de la red en n&ordm; de servidores.";
 choices[41][3] = "Todas las respuestas son ciertas";
 answers[41] = choices[41][3];
 units[41] = "112";
 comments[41] = "Id Pregunta: 4115. ";


//  Id pregunta: 4204 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  El MTBF asociado a la disponibilidad de un sistema formado por dos equipos id&eacute;nticos que deben funcionar simult&aacute;neamente en todo momento";
 choices[42]= new Array();
 choices[42][0] = "Es mayor que el de cualquiera de ellos individualmente";
 choices[42][1] = "Es menor que el de cualquiera de ellos individualmente";
 choices[42][2] = "Es igual al de cualquiera de ellos individualmente";
 choices[42][3] = "No puede ser conocido a priori";
 answers[42] = choices[42][1];
 units[42] = "104";
 comments[42] = "Id Pregunta: 4204. ";


//  Id pregunta: 4301 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  Un diagrama de transici&oacute;n de estados, utilizando como t&eacute;cnica en M&eacute;trica Versi&oacute;n 3:";
 choices[43]= new Array();
 choices[43][0] = "Puede tener varios estados iniciales y varios estados finales.";
 choices[43][1] = "S&oacute;lo puede tener un estado inicial y un estado final";
 choices[43][2] = "Puede tener varios estados iniciales y s&oacute;lo un estado final.";
 choices[43][3] = "S&oacute;lo puede tener un estado inicial y puede tener varios estados finales.";
 answers[43] = choices[43][3];
 units[43] = "86";
 comments[43] = "Id Pregunta: 4301. NULL";


//  Id pregunta: 4372 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  Una caracter&iacute;stica distintiva del modelo de ciclo de vida en espiral respecto a los modelos cl&aacute;sicos de ciclo de vida es la inclusi&oacute;n en el primero de actividades de:";
 choices[44]= new Array();
 choices[44][0] = "Codificaci&oacute;n.";
 choices[44][1] = "Mantenimiento";
 choices[44][2] = "An&aacute;lisis de riesgo.";
 choices[44][3] = "Dise&ntilde;o.";
 answers[44] = choices[44][2];
 units[44] = "76";
 comments[44] = "Id Pregunta: 4372. ";


//  Id pregunta: 4431 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  &iquest;C&oacute;mo se denomina en telefon&iacute;a IP el elemento encargado de registrar los dispositivos que realizan llamadas usando la red IP?";
 choices[45]= new Array();
 choices[45][0] = "Gateway.";
 choices[45][1] = "Terminal.";
 choices[45][2] = "IVR";
 choices[45][3] = "Gatekeeper.";
 answers[45] = choices[45][3];
 units[45] = "109";
 comments[45] = "Id Pregunta: 4431. ";


//  Id pregunta: 4460 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  Si modificamos un programa protegido por licencia GPL el resultado debemos protegerlo con una licencia";
 choices[46]= new Array();
 choices[46][0] = "EULA";
 choices[46][1] = "BSD";
 choices[46][2] = "GPL";
 choices[46][3] = "No podemos ponerlo licencia alguna";
 answers[46] = choices[46][2];
 units[46] = "36";
 comments[46] = "Id Pregunta: 4460. ";


//  Id pregunta: 4495 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  &iquest;Que nivel del modelo CMMi se caracteriza porque el proceso del software de las actividades de gesti&oacute;n e ingenier&iacute;a esta documentado, estandarizado e integrado?";
 choices[47]= new Array();
 choices[47][0] = "Nivel 2 (Gestionado)";
 choices[47][1] = "Nivel 3 (Definido)";
 choices[47][2] = "Nivel 4 (Gestionado Cuantitativamente)";
 choices[47][3] = "Nivel 5 (Optimizado)";
 answers[47] = choices[47][1];
 units[47] = "87";
 comments[47] = "Id Pregunta: 4495. NULL";


//  Id pregunta: 4602 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  Dentro de la ingenier&iacute;a del software orientada a objetos, &iquest;Como se denomina la relaci&oacute;n entre un componente y su interfaz?";
 choices[48]= new Array();
 choices[48][0] = "agregaci&oacute;n";
 choices[48][1] = "realizaci&oacute;n";
 choices[48][2] = "polimorfismo";
 choices[48][3] = "presentaci&oacute;n";
 answers[48] = choices[48][1];
 units[48] = "82";
 comments[48] = "Id Pregunta: 4602. ";


//  Id pregunta: 4611 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  Seg&uacute;n la Norma UNE-ISO/IEC 17799:2000 cual de los siguientes aspectos NO esta incluido en el control de accesos";
 choices[49]= new Array();
 choices[49][0] = "seguridad de los servicios de red";
 choices[49][1] = "sincronizaci&oacute;n de relojes";
 choices[49][2] = "responsabilidades del usuario";
 choices[49][3] = "control de acceso a la librer&iacute;a de programa as fuente";
 answers[49] = choices[49][3];
 units[49] = "33";
 comments[49] = "Id Pregunta: 4611. ISO 17799 actualmente es ISO 27002";


//  Id pregunta: 4744 AÃ±o de creación de pregunta: 2007-01-01
 questions[50]= "51)  El estudio de las consecuencias que tendr&iacute;a una parada de X tiempo sobre la organizaci&oacute;n se contempla en la metodolog&iacute;a MAGERIT en:";
 choices[50]= new Array();
 choices[50][0] = "An&aacute;lisis de riesgos";
 choices[50][1] = "An&aacute;lisis de impacto";
 choices[50][2] = "Disponibilidad";
 choices[50][3] = "Es una metodolog&iacute;a de desarrollo, en ning&uacute;n caso trata an&aacute;lisis del riesgo";
 answers[50] = choices[50][1];
 units[50] = "32";
 comments[50] = "Id Pregunta: 4744. Examen 2006 JCYL";


//  Id pregunta: 4752 AÃ±o de creación de pregunta: 2007-01-01
 questions[51]= "52)  La interfaz entre la RNC de la UTRAN y el SGSN es:";
 choices[51]= new Array();
 choices[51][0] = "Iu";
 choices[51][1] = "Iub";
 choices[51][2] = " Gi";
 choices[51][3] = " Gb";
 answers[51] = choices[51][0];
 units[51] = "108";
 comments[51] = "Id Pregunta: 4752. ";


//  Id pregunta: 4799 AÃ±o de creación de pregunta: 2007-01-01
 questions[52]= "53)  &iquest;Qu&eacute; tipo de documento NO es publicado por el Instituto Europeo de Normas de Telecomunicaciones (ETSI)?";
 choices[52]= new Array();
 choices[52][0] = "Gu&iacute;a ETSI";
 choices[52][1] = "Norma ETSI";
 choices[52][2] = "Recomendaci&oacute;n ETSI";
 choices[52][3] = "Especificaci&oacute;n t&eacute;cnica ETSI";
 answers[52] = choices[52][2];
 units[52] = "42";
 comments[52] = "Id Pregunta: 4799. ";


//  Id pregunta: 4812 AÃ±o de creación de pregunta: 2007-01-01
 questions[53]= "54)  &iquest;En cu&aacute;l de los siguientes aspectos NO resulta de aplicaci&oacute;n la Directiva 2000/31/CE, de 8 de junio de 2000,relativa a determinados aspectos jur&iacute;dicos de los servicios de la sociedad de la informaci&oacute;n, en particular elcomercio electr&oacute;nico en el mercado interior?";
 choices[53]= new Array();
 choices[53][0] = "Las actividades de juegos de azar que impliquen apuestas de valor monetario, incluidas loter&iacute;as y apuestas";
 choices[53][1] = "Las comunicaciones comerciales";
 choices[53][2] = "Los acuerdos extrajudiciales para la prestaci&oacute;n de servicios";
 choices[53][3] = "Los contratos por v&iacute;a electr&oacute;nica";
 answers[53] = choices[53][0];
 units[53] = "30";
 comments[53] = "Id Pregunta: 4812. Directiva 2000/31/CE, art&iacute;culo 1.5.d)";


//  Id pregunta: 4840 AÃ±o de creación de pregunta: 2007-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n a la firma digital es cierta?";
 choices[54]= new Array();
 choices[54][0] = "Ofrece plenas garant&iacute;as de la integridad, confidencialidad y no repudio del documento firmado";
 choices[54][1] = "Se puede conseguir mediante protocolos de cifrado de clave secreta";
 choices[54][2] = "El DSS (Digital Signature Standard) est&aacute; adoptado como una norma por ISO/IEC (International StandardsOrganization / International Electrotechnical Commission)";
 choices[54][3] = "La firma ciega (Blind signature) se obtiene firmando directamente el correspondiente mensaje, en vez delresumen de &eacute;ste";
 answers[54] = choices[54][1];
 units[54] = "74";
 comments[54] = "Id Pregunta: 4840. ";


//  Id pregunta: 4864 AÃ±o de creación de pregunta: 2007-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n a las VLAN (Virtual Local Area Networks) es cierta?";
 choices[55]= new Array();
 choices[55][0] = "Las VLAN reducen el n&uacute;mero de dominios de difusi&oacute;n de la red";
 choices[55][1] = "La segmentaci&oacute;n de redes en VLAN aumenta el tr&aacute;fico en la red, ya que ha de a&ntilde;adirse informaci&oacute;n desubred complementaria en cada paquete";
 choices[55][2] = "La definici&oacute;n de una misma VLAN puede abarcar uno o m&aacute;s switches (conmutadores)";
 choices[55][3] = "Las VLAN aumentan el tama&ntilde;o de los dominios de difusi&oacute;n de la red";
 answers[55] = choices[55][2];
 units[55] = "102";
 comments[55] = "Id Pregunta: 4864. ";


//  Id pregunta: 4914 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  Entre los objetos utilizados por ADO.NET, no se encuentra:";
 choices[56]= new Array();
 choices[56][0] = "DataSet.";
 choices[56][1] = "DataReader.";
 choices[56][2] = "DataRequest.";
 choices[56][3] = "DataAdapter.";
 answers[56] = choices[56][2];
 units[56] = "115";
 comments[56] = "Id Pregunta: 4914. Examen TIC B 2007";


//  Id pregunta: 5178 AÃ±o de creación de pregunta: 2003-01-01
 questions[57]= "58)  La t&eacute;cnica PIECES define las categor&iacute;as que deben estudiar conjuntamente el analista y el usuario. &iquest;Cu&aacute;l no es un conjunto valido de categor&iacute;as seg&uacute;n PIECES?";
 choices[57]= new Array();
 choices[57][0] = "Rendimiento, Econom&iacute;a y Control";
 choices[57][1] = "Control, Eficiencia y Servicios";
 choices[57][2] = "Informaci&oacute;n, Eficiencia y Servicios";
 choices[57][3] = "Informaci&oacute;n, Precio y Rendimiento";
 answers[57] = choices[57][3];
 units[57] = "78";
 comments[57] = "Id Pregunta: 5178. ";


//  Id pregunta: 5272 AÃ±o de creación de pregunta: 2003-01-01
 questions[58]= "59)  El DNIe recoge los siguientes datos biom&eacute;tricos";
 choices[58]= new Array();
 choices[58][0] = "Huellas dactilares";
 choices[58][1] = "Iris del ojo";
 choices[58][2] = "Patr&oacute;n facial";
 choices[58][3] = "Ninguna de las anteriores";
 answers[58] = choices[58][3];
 units[58] = "74";
 comments[58] = "Id Pregunta: 5272. no recoge huella dactilar completa, s&oacute;lo las minucias";


//  Id pregunta: 5643 AÃ±o de creación de pregunta: 2003-01-01
 questions[59]= "60)  Se&ntilde;ale cu&aacute;l de las siguientes opciones relativas a la tecnolog&iacute;a de web services es verdadera:";
 choices[59]= new Array();
 choices[59][0] = "UDDI se utiliza como lenguaje de definici&oacute;n de servicios web";
 choices[59][1] = "SOAP deriva de XML-RPC";
 choices[59][2] = "WSDL permita la localizaci&oacute;n y publicaci&oacute;n de servicios web";
 choices[59][3] = "Ninguna de las anteriores";
 answers[59] = choices[59][1];
 units[59] = "51";
 comments[59] = "Id Pregunta: 5643. NULL";


//  Id pregunta: 5666 AÃ±o de creación de pregunta: 2003-01-01
 questions[60]= "61)  La cl&aacute;usula 1 del Manual Europeo para las Compras P&uacute;blicas de Sistemas Abiertos (EPHOS 2) establece que:";
 choices[60]= new Array();
 choices[60][0] = "El cableado ser&aacute; conforme a EIA/TIA 568";
 choices[60][1] = "El cableado deber&aacute; estar de acuerdo con los requerimientos del Nivel F&iacute;sico especificado en IS 8802-3.";
 choices[60][2] = "El cableado ser&aacute; conforme a ISO/IEC DIS 11801";
 choices[60][3] = "El cableado deber&aacute; estar de acuerdo con los requerimientos del Nivel F&iacute;sico especificado en EN 50081-1";
 answers[60] = choices[60][2];
 units[60] = "99";
 comments[60] = "Id Pregunta: 5666. ";


//  Id pregunta: 5725 AÃ±o de creación de pregunta: 2009-01-01
 questions[61]= "62)  Los SGBD soportan 3 tipos de lenguajes: Lenguaje de Consulta de Datos, Lenguaje de Definici&oacute;n de Datos y Lenguaje de Manipulaci&oacute;n de Datos. Concretamente, el est&aacute;ndar SQL ISO 9075:1987 contempla en su definici&oacute;n:";
 choices[61]= new Array();
 choices[61][0] = "Lenguaje de Consulta de datos.";
 choices[61][1] = "Lenguaje de Consulta y de Manipulaci&oacute;n de datos.";
 choices[61][2] = "Lenguaje de Consulta y de Definici&oacute;n de datos.";
 choices[61][3] = "Lenguaje de Consulta, de Manipulaci&oacute;n y de Definici&oacute;n de datos.";
 answers[61] = choices[61][3];
 units[61] = "58";
 comments[61] = "Id Pregunta: 5725. MAP 2008 A2";


//  Id pregunta: 5727 AÃ±o de creación de pregunta: 2009-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de los siguientes m&eacute;todos NO sirve para seleccionar la p&aacute;gina a descargar tras un fallo de p&aacute;gina?";
 choices[62]= new Array();
 choices[62][0] = "FIFO";
 choices[62][1] = "Aleatoria";
 choices[62][2] = "SJF";
 choices[62][3] = "NRU";
 answers[62] = choices[62][2];
 units[62] = "52";
 comments[62] = "Id Pregunta: 5727. ";


//  Id pregunta: 5773 AÃ±o de creación de pregunta: 2009-01-01
 questions[63]= "64)  De acuerdo con la LOPD, se&ntilde;ale el tipo de fichero que se incluye en el alcance de la Ley";
 choices[63]= new Array();
 choices[63][0] = "Ficheros realizados o mantenidos por personas f&iacute;sicas en el ejercicio de actividades exclusivamente personales o dom&eacute;sticas.";
 choices[63][1] = "Ficheros sometidos a la normativa sobre protecci&oacute;n de materias clasificadas";
 choices[63][2] = "Ficheros establecidos para la investigaci&oacute;n del terrorismo y de formas graves de delincuencia organizada. No obstante el responsable del fichero comunicar&aacute; previamente la existencia del mismo, sus caracter&iacute;sticas generales y su finalidad a la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 choices[63][3] = "Ficheros de titularidad p&uacute;blica, con la publicaci&oacute;n de la disposici&oacute;n de regulaci&oacute;n correspondiente";
 answers[63] = choices[63][3];
 units[63] = "29";
 comments[63] = "Id Pregunta: 5773. MAP 2008 A2";


//  Id pregunta: 5784 AÃ±o de creación de pregunta: 2009-01-01
 questions[64]= "65)  En el framework .NET, &iquest;qu&eacute; c&oacute;digo se genera como salida del compilador just in time?";
 choices[64]= new Array();
 choices[64][0] = "Bytecode";
 choices[64][1] = "IL (intemediate language)";
 choices[64][2] = "C&oacute;digo m&aacute;quina";
 choices[64][3] = "C&oacute;digo ensamblador";
 answers[64] = choices[64][2];
 units[64] = "59";
 comments[64] = "Id Pregunta: 5784. MAP 2008 A2";


//  Id pregunta: 6103 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  Indique cual de las siguientes es una caracter&iacute;stica de un servidor &quot;blade&quot;.";
 choices[65]= new Array();
 choices[65][0] = "No contienen fuente de alimentaci&oacute;n propia.";
 choices[65][1] = "Tiene prestaciones m&aacute;s bajas que un servidor tradicional.";
 choices[65][2] = "Solo se puede utilizar en entornos virtualizados.";
 choices[65][3] = "No tiene memoria propia.";
 answers[65] = choices[65][0];
 units[65] = "49";
 comments[65] = "Id Pregunta: 6103. TIC A 2009";


//  Id pregunta: 6179 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  Una ventaja del procesado de documentos XML usando SAX (frente a DOM) es:";
 choices[66]= new Array();
 choices[66][0] = "Es posible la modificaci&oacute;n de los datos en memoria.";
 choices[66][1] = "Procesa el documento completo.";
 choices[66][2] = "En el procesado de documentos grandes consume menos memoria.";
 choices[66][3] = "Todas las anteriores son ventajas de SAX frente a DOM.";
 answers[66] = choices[66][2];
 units[66] = "69";
 comments[66] = "Id Pregunta: 6179. NULL";


//  Id pregunta: 6198 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l es el framework para aplicaciones desarrolladas con Spring, asociado con el control y la gesti&oacute;n de la seguridad?";
 choices[67]= new Array();
 choices[67][0] = "Spring Security";
 choices[67][1] = "JSF";
 choices[67][2] = "Struts";
 choices[67][3] = "Jbuilder";
 answers[67] = choices[67][0];
 units[67] = "60, 116";
 comments[67] = "Id Pregunta: 6198. TIC-B 2009 bloque desarrollo";


//  Id pregunta: 6415 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  De los siguientes, &iquest;Cu&aacute;l no es un estandar del W3C?";
 choices[68]= new Array();
 choices[68][0] = "DOM";
 choices[68][1] = "P3P";
 choices[68][2] = "PVG";
 choices[68][3] = "HTML";
 answers[68] = choices[68][2];
 units[68] = "39";
 comments[68] = "Id Pregunta: 6415. NULL";


//  Id pregunta: 6479 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  El dispositivo que permite la interconexi&oacute;n de redes LAN y que trabaja en el nivel 2 del modelo OSI se denomina";
 choices[69]= new Array();
 choices[69][0] = "Repetidor";
 choices[69][1] = "Puente (bridge)";
 choices[69][2] = "Pasarela (gateway)";
 choices[69][3] = "Encaminador (router)";
 answers[69] = choices[69][1];
 units[69] = "102";
 comments[69] = "Id Pregunta: 6479. Castilla La Mancha 2009";


//  Id pregunta: 6574 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa?";
 choices[70]= new Array();
 choices[70][0] = "ICMP trabaja en la capa de enlace";
 choices[70][1] = "ICMP informa a los hosts, routers y otros dispositivos de problemas en la red";
 choices[70][2] = "ICMP es el principal componente de la utilidad ping";
 choices[70][3] = "Todas las respuestas anteriores son correctas";
 answers[70] = choices[70][0];
 units[70] = "100";
 comments[70] = "Id Pregunta: 6574. NULL";


//  Id pregunta: 6605 AÃ±o de creación de pregunta: 2010-01-01
 questions[71]= "72)  Uno de los creadores originales del An&aacute;lisis Estructurado es";
 choices[71]= new Array();
 choices[71][0] = "Edward Yourdon";
 choices[71][1] = "Tom De Marco";
 choices[71][2] = "Tim Berners Lee";
 choices[71][3] = "James Rumbaugh";
 answers[71] = choices[71][1];
 units[71] = "81";
 comments[71] = "Id Pregunta: 6605. NULL";


//  Id pregunta: 7176 AÃ±o de creación de pregunta: 2010-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l es el est&aacute;ndar de la tarjeta f&iacute;sica del DNI electr&oacute;nico?";
 choices[72]= new Array();
 choices[72][0] = "ISO-7816-1";
 choices[72][1] = "PCKS#11";
 choices[72][2] = "ISO-17789";
 choices[72][3] = "ISO-7815-1";
 answers[72] = choices[72][0];
 units[72] = "74";
 comments[72] = "Id Pregunta: 7176. Examen TIC B 2009. Cumple est&aacute;ndar 7816-1. Soporta est&aacute;ndar PKCS#11";


//  Id pregunta: 7270 AÃ±o de creación de pregunta: 2010-01-01
 questions[73]= "74)  Los cortafuegos de filtrado de paquetes:";
 choices[73]= new Array();
 choices[73][0] = "Funcionan a nivel de red";
 choices[73][1] = "Funcionan a a nivel de aplicaci&oacute;n";
 choices[73][2] = "Funcionan a nivel de enlace";
 choices[73][3] = "Funcionan a nivel de sesi&oacute;n";
 answers[73] = choices[73][0];
 units[73] = "111";
 comments[73] = "Id Pregunta: 7270. Examen TIC B 2009";


//  Id pregunta: 8503 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  En IPv4 la cabecera IP tiene un campo denominado TTL (Time To Live) que indica el n&uacute;mero m&aacute;ximo de encaminadores que un paquete puede atravesar, &iquest;Cu&aacute;l es &eacute;l rango de valores que puede tomar este campo? ";
 choices[74]= new Array();
 choices[74][0] = "0-15";
 choices[74][1] = "0-255";
 choices[74][2] = "0-5";
 choices[74][3] = "0-127";
 answers[74] = choices[74][1];
 units[74] = "100";
 comments[74] = "Id Pregunta: 8503. Examen TIC A2 2010";


//  Id pregunta: 8535 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  &iquest;Qu&eacute; tecnolog&iacute;a de acceso permite un tipo de servicio tanto sim&eacute;trico como asim&eacute;trico?";
 choices[75]= new Array();
 choices[75][0] = "SHDSL";
 choices[75][1] = "HDSL";
 choices[75][2] = "ADSL2";
 choices[75][3] = "VDSL";
 answers[75] = choices[75][3];
 units[75] = "107";
 comments[75] = "Id Pregunta: 8535. Examen TIC A2 2010 interna";


//  Id pregunta: 8622 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  Se&ntilde;ale la respuesta correcta respecto a las cintas Ultrium LTO:";
 choices[76]= new Array();
 choices[76][0] = "Tienen un formato propietario";
 choices[76][1] = "Los lectores son compatibles con las cintas AIT de Sony.";
 choices[76][2] = "En su versi&oacute;n LTO 5. alcanza capacidades sin compresi&oacute;n de hasta 1,4 TB.";
 choices[76][3] = "No permiten ning&uacute;n tipo de cifrado.";
 answers[76] = choices[76][2];
 units[76] = "48";
 comments[76] = "Id Pregunta: 8622. Examen TIC A2 2010 interna";


//  Id pregunta: 8626 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  Un cable consistente en un n&uacute;cleo de vidrio con un alto Indice refracci&oacute;n, rodeada de una capa o revestimiento de material similar, pero con &iacute;ndice de refracci&oacute;n ligeramente menor, y, todo ello, envuelto en una cubierta do protecci&oacute;n totalmente opaca que le proporciona consistencia, es un cable:";
 choices[77]= new Array();
 choices[77][0] = "De par trenzado tipo BS/UTP (Braided ana screened unshielded twisteo pair).";
 choices[77][1] = "Coaxial de tipo thick";
 choices[77][2] = "De par trenzado tipo S/STP (Screened and shielded twisted pair)";
 choices[77][3] = "De fibra &oacute;ptica";
 answers[77] = choices[77][3];
 units[77] = "99";
 comments[77] = "Id Pregunta: 8626. Examen TIC A2 2010 interna";


//  Id pregunta: 8633 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  &iquest;A qu&eacute; perfil pertenece el Responsable de Calidad seg&uacute;n M&eacute;trica v3?";
 choices[78]= new Array();
 choices[78][0] = "Perfil Jefe de Proyecto.";
 choices[78][1] = "Perfil Consultor.";
 choices[78][2] = "Perfil Analista.";
 choices[78][3] = "Perfil Programador.";
 answers[78] = choices[78][0];
 units[78] = "86";
 comments[78] = "Id Pregunta: 8633. Examen TIC A2 2010 interna";


//  Id pregunta: 8660 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  La se&ntilde;ales de banda Ku, &iquest;en que rango de frecuencias trabajan?";
 choices[79]= new Array();
 choices[79][0] = "1-8 MHz";
 choices[79][1] = "4-8 GHz";
 choices[79][2] = "12-18 GHz";
 choices[79][3] = "4-8 MHz";
 answers[79] = choices[79][2];
 units[79] = "108";
 comments[79] = "Id Pregunta: 8660. Examen UPM A2 2011";


//  Id pregunta: 8738 AÃ±o de creación de pregunta: 2011-01-01
 questions[80]= "81)  La Ley Org&aacute;nica 15/1999 de Protecci&oacute;n do Datos de Car&aacute;cter Personal (LOPD) ser&aacute; de aplicaci&oacute;n a:";
 choices[80]= new Array();
 choices[80][0] = "&Uacute;nicamente los datos almacenados electr&oacute;nicamente, susceptibles de tratamiento y a toda modalidad de uso posterior de estos datos por lo sectores p&uacute;blico y privado.";
 choices[80][1] = "Los datos de car&aacute;cter personal registrados en soporte f&iacute;sico, que los haga susceptibles de tratamiento, y a toda modalidad de uso posterior de estos datos por el sector p&uacute;blico, de forma obligatoria, y por el sector privado, como recomendaci&oacute;n.";
 choices[80][2] = "Los datos de car&aacute;cter personal registrados en soporte f&iacute;sico, que los haga susceptibles de tratamiento, almacenados tanto en el sector p&uacute;blico como el privado, quedando excluidos los posibles usos posteriores de tales datos";
 choices[80][3] = "Los datos de car&aacute;cter personal registrados en soporte f&iacute;sico, que los haga susceptibles do tratamiento y a toda modalidad de uso posterior de estos datos por los sectores p&uacute;blico y privado";
 answers[80] = choices[80][3];
 units[80] = "29";
 comments[80] = "Id Pregunta: 8738. Examen TIC A2 2010 interna";


//  Id pregunta: 8830 AÃ±o de creación de pregunta: 2011-01-01
 questions[81]= "82)  &iquest;Qu&eacute; debe incluir el gobierno de las TIC?:";
 choices[81]= new Array();
 choices[81][0] = " Alineaci&oacute;n entre la estrategia de la organizaci&oacute;n y las TIC ";
 choices[81][1] = " Gesti&oacute;n del riesgo";
 choices[81][2] = " Gesti&oacute;n de los recursos TIC y la utilizaci&oacute;n &oacute;ptima de los mismos";
 choices[81][3] = " Todas las respuestas son correctas.";
 answers[81] = choices[81][3];
 units[81] = "98";
 comments[81] = "Id Pregunta: 8830. Examen UC3M 2010";


//  Id pregunta: 8911 AÃ±o de creación de pregunta: 2011-01-01
 questions[82]= "83)  &iquest;C&oacute;mo se expresan habitualmente las direcciones MAC?:";
 choices[82]= new Array();
 choices[82][0] = "En notaci&oacute;n decimal.";
 choices[82][1] = "En notaci&oacute;n hexadecimal.";
 choices[82][2] = "En notaci&oacute;n octal.";
 choices[82][3] = "En notaci&oacute;n binaria";
 answers[82] = choices[82][1];
 units[82] = "101";
 comments[82] = "Id Pregunta: 8911. Operador Ayto. Madrid 2010";


//  Id pregunta: 8951 AÃ±o de creación de pregunta: 2011-01-01
 questions[83]= "84)  &iquest;Qu&eacute; situaci&oacute;n se da si la direcci&oacute;n virtual y su correspondiente f&iacute;sica coincide?";
 choices[83]= new Array();
 choices[83][0] = "El sistema carece de memoria virtual";
 choices[83][1] = "El sistema no es multiprogramado";
 choices[83][2] = "El espacio l&oacute;gico y el f&iacute;sico del proceso es el mismo";
 choices[83][3] = "Todas las anteriores son falsas";
 answers[83] = choices[83][2];
 units[83] = "53,54";
 comments[83] = "Id Pregunta: 8951. ";


//  Id pregunta: 9041 AÃ±o de creación de pregunta: 2011-01-01
 questions[84]= "85)  Sistema de Grid Computing";
 choices[84]= new Array();
 choices[84][0] = "Globus Toolkit";
 choices[84][1] = "Nimbus";
 choices[84][2] = "Eucaliptus";
 choices[84][3] = "Gluster";
 answers[84] = choices[84][0];
 units[84] = "45";
 comments[84] = "Id Pregunta: 9041. ";


//  Id pregunta: 9152 AÃ±o de creación de pregunta: 2013-01-01
 questions[85]= "86)  Respecto a los LMS, indique la respuesta FALSA: ";
 choices[85]= new Array();
 choices[85][0] = "Permite el an&aacute;lisis de los resultados de la formaci&oacute;n";
 choices[85][1] = "Incluye funciones de gesti&oacute;n de procesos de creaci&oacute;n de contenido";
 choices[85][2] = "Permite el intercambio de datos entre profesores y alumnos";
 choices[85][3] = "Est&aacute; dedicado a la difusi&oacute;n de los contenidos docentes";
 answers[85] = choices[85][1];
 units[85] = "66";
 comments[85] = "Id Pregunta: 9152. ";


//  Id pregunta: 9455 AÃ±o de creación de pregunta: 2013-01-01
 questions[86]= "87)  Seg&uacute;n Codd, una entidad en la que todos los atributos tienen dependencia funcional completa de la clave est&aacute;, al menos, en:";
 choices[86]= new Array();
 choices[86][0] = "Primera Forma Normal.";
 choices[86][1] = "Segunda Forma Normal.";
 choices[86][2] = "Tercera Forma Normal.";
 choices[86][3] = "Forma Normal de Boyce-Codd.";
 answers[86] = choices[86][1];
 units[86] = "58";
 comments[86] = "Id Pregunta: 9455. NULL";


//  Id pregunta: 9491 AÃ±o de creación de pregunta: 2013-01-01
 questions[87]= "88)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[87]= new Array();
 choices[87][0] = "El diagrama de casos de uso es un modelo conceptual de procesos, el diagrama de clases es un modelo conceptual de datos y el diagrama de transici&oacute;n de estados es un modelo conceptual din&aacute;mico";
 choices[87][1] = "El diagrama de casos de uso es un modelo conceptual de procesos, el diagrama de clases es un modelo conceptual de datos y el diagrama de transici&oacute;n de estados es un modelo conceptual de datos";
 choices[87][2] = "El diagrama de casos de uso es un modelo conceptual de datos, el modelo entidad/relaci&oacute;n es un modelo conceptual de datos y el diagrama de transici&oacute;n de estados es un modelo conceptual din&aacute;mico";
 choices[87][3] = "El diagrama de flujo de datos es un modelo conceptual de datos, el modelo entidad/relaci&oacute;n es un modelo conceptual de datos y el diagrama de transici&oacute;n de estados es un modelo conceptual din&aacute;mico";
 answers[87] = choices[87][0];
 units[87] = "78";
 comments[87] = "Id Pregunta: 9491. ";


//  Id pregunta: 9513 AÃ±o de creación de pregunta: 2013-01-01
 questions[88]= "89)  Indique la afirmaci&oacute;n falsa en relaci&oacute;n a los servlets de Java:";
 choices[88]= new Array();
 choices[88][0] = "Se alojan en un contenedor web";
 choices[88][1] = "Es un elemento de la capa de presentaci&oacute;n";
 choices[88][2] = "Se pueden invocar desde una URL";
 choices[88][3] = "S&oacute;lo generan contenido est&aacute;tico";
 answers[88] = choices[88][3];
 units[88] = "116";
 comments[88] = "Id Pregunta: 9513. NULL";


//  Id pregunta: 9542 AÃ±o de creación de pregunta: 2013-01-01
 questions[89]= "90)  Las comunicaciones comerciales no solicitadas realizadas a trav&eacute;s de correo electr&oacute;nico o medios de comunicaci&oacute;n electr&oacute;nica equivalentes:";
 choices[89]= new Array();
 choices[89][0] = "Deben incluir al comienzo del mensaje la palabra &laquo;publicidad&raquo;.";
 choices[89][1] = "Deben indicar la persona f&iacute;sica o jur&iacute;dica en nombre de la cual se realizan.";
 choices[89][2] = "Deben incluir claramente las condiciones comerciales o promocionales.";
 choices[89][3] = "Est&aacute;n prohibidas.";
 answers[89] = choices[89][3];
 units[89] = "30";
 comments[89] = "Id Pregunta: 9542. Examen TIC A1 2011 (Ley 34/2002, art&iacute;culo 21)";


//  Id pregunta: 9907 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  De las siguientes cuatro opciones, tres son tareas incluidas en la actividad &quot;GPI 2&quot; del interfaz de Gesti&oacute;n de Proyectos de M&eacute;trica v3, indique cu&aacute;l es la INCORRECTA:";
 choices[90]= new Array();
 choices[90][0] = "Selecci&oacute;n de la Estrategia de Desarrollo.";
 choices[90][1] = "Establecimiento del Calendario de Hitos y Entregas.";
 choices[90][2] = "Planificaci&oacute;n Detallada de Actividades y Recursos Necesarios.";
 choices[90][3] = "C&aacute;lculo del Esfuerzo.";
 answers[90] = choices[90][3];
 units[90] = "86";
 comments[90] = "Id Pregunta: 9907. TIC A2, Examen 2013";


//  Id pregunta: 10036 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  &iquest;Qu&eacute; protocolo utiliza la orden &quot;traceroute&quot; para obtener la ruta que se sigue desde nuestro equipo hasta otro en Internet?";
 choices[91]= new Array();
 choices[91][0] = "Ping ";
 choices[91][1] = "ICMP";
 choices[91][2] = "PPP";
 choices[91][3] = "RSVP";
 answers[91] = choices[91][1];
 units[91] = "100";
 comments[91] = "Id Pregunta: 10036. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10050 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  Indique la respuesta FALSA, respecto al protocolo IPSEC :";
 choices[92]= new Array();
 choices[92][0] = "El protocolo IPSEC AH garantiza integridad y autenticaci&oacute;n, pero no confidencialidad.";
 choices[92][1] = "El protocolo IPSEC ESP utiliza el n&uacute;mero de protocolo 50 en la cabecera IP.";
 choices[92][2] = "IPSEC utiliza IKE como protocolo de intercambio de claves.";
 choices[92][3] = "IPSEC ESP es incompatible con el modo transporte, s&oacute;lo se puede utilizar en modo t&uacute;nel.";
 answers[92] = choices[92][3];
 units[92] = "111";
 comments[92] = "Id Pregunta: 10050. TIC A2, promoci&oacute;n interna y libre, examen 2013";


//  Id pregunta: 10102 AÃ±o de creación de pregunta: 2014-01-01
 questions[93]= "94)  En el diagrama SADT, &iquest;qu&eacute; interconexi&oacute;n NO existe?";
 choices[93]= new Array();
 choices[93][0] = "salida-mecanismo";
 choices[93][1] = "salida-realimentaci&oacute;n";
 choices[93][2] = "control-relaimentaci&oacute;n";
 choices[93][3] = "entrada-realimentaci&oacute;n";
 answers[93] = choices[93][1];
 units[93] = "81";
 comments[93] = "Id Pregunta: 10102. NULL";


//  Id pregunta: 10309 AÃ±o de creación de pregunta: 2014-01-01
 questions[94]= "95)  Una sentencia JCL comienza con:";
 choices[94]= new Array();
 choices[94][0] = "//";
 choices[94][1] = "*+";
 choices[94][2] = "#&gt;";
 choices[94][3] = "$&gt;";
 answers[94] = choices[94][0];
 units[94] = "55";
 comments[94] = "Id Pregunta: 10309. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10482 AÃ±o de creación de pregunta: 2014-01-01
 questions[95]= "96)  El m&eacute;todo SLIM de estimaci&oacute;n de esfuerzo, usa la curva de:";
 choices[95]= new Array();
 choices[95][0] = "F de Snedecor";
 choices[95][1] = "Parkingson";
 choices[95][2] = "Norden-Rayleigh";
 choices[95][3] = "Pareto";
 answers[95] = choices[95][2];
 units[95] = "89";
 comments[95] = "Id Pregunta: 10482. NULL";


//  Id pregunta: 10656 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Seg&uacute;n la Ley 9/2014, cu&aacute;ndo finaliza el per&iacute;odo por el que se otorgan los derechos de uso privativo del dominio p&uacute;blico radioel&eacute;ctrico sin limitaci&oacute;n de n&uacute;mero?";
 choices[96]= new Array();
 choices[96][0] = "El 31 de diciembre del a&ntilde;o natural en que cumplan su quinto a&ntilde;o de vigencia.";
 choices[96][1] = "A los 20 a&ntilde;os desde el otorgamiento.";
 choices[96][2] = "El 31 de noviembre del a&ntilde;o natural en que cumplan su quinto a&ntilde;o de vigencia.";
 choices[96][3] = "A los cinco a&ntilde;os desde el otorgamiento.";
 answers[96] = choices[96][0];
 units[96] = "110";
 comments[96] = "Id Pregunta: 10656. ";


//  Id pregunta: 10685 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Seg&uacute;n la Ley 39/2015, para cual de estas actuaciones no es necesar&iacute;a la firma electr&oacute;nica.";
 choices[97]= new Array();
 choices[97][0] = "Iniciar un procedimiento.";
 choices[97][1] = "Interponer un recurso.";
 choices[97][2] = "Desistir de acciones.";
 choices[97][3] = "Renunciar a derechos.";
 answers[97] = choices[97][0];
 units[97] = "30";
 comments[97] = "Id Pregunta: 10685. ";


//  Id pregunta: 11246 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  En un contrato tramitado por urgencia por su necesidad inaplazable o cuya adjudicaci&oacute;n se deba acelerar por inter&eacute;s p&uacute;blico:";
 choices[98]= new Array();
 choices[98][0] = "El plazo de inicio de la ejecuci&oacute;n no puede superar los 15 d&iacute;as h&aacute;biles.";
 choices[98][1] = "El plazo de inicio de la ejecuci&oacute;n no puede superar los 10 d&iacute;as h&aacute;biles.";
 choices[98][2] = "El plazo de inicio de la ejecuci&oacute;n no puede superar los 15 d&iacute;as naturales.";
 choices[98][3] = "El plazo de inicio de la ejecuci&oacute;n no puede superar los 10 d&iacute;as naturales.";
 answers[98] = choices[98][0];
 units[98] = "41";
 comments[98] = "Id Pregunta: 11246. ";


//  Id pregunta: 11647 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Indique cu&aacute;l no es un habilitador de CoBIT";
 choices[99]= new Array();
 choices[99][0] = "Procesos";
 choices[99][1] = "Gobierno";
 choices[99][2] = "Informaci&oacute;n";
 choices[99][3] = "Estructuras organizacionales";
 answers[99] = choices[99][1];
 units[99] = "98";
 comments[99] = "Id Pregunta: 11647. ";


