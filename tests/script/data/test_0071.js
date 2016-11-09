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

//  Id pregunta: 68 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas atiende &uacute;nicamente al criterio de mayor peso y mayor puntuaci&oacute;n, resolviendo los empates con el siguiente de mayor peso?:";
 choices[0]= new Array();
 choices[0][0] = "Concordancia";
 choices[0][1] = "M&eacute;todo lexicogr&aacute;fico";
 choices[0][2] = "Ponderaci&oacute;n lineal";
 choices[0][3] = "Ninguno de los anteriores";
 answers[0] = choices[0][1];
 units[0] = "34";
 comments[0] = "Id Pregunta: 68. NULL";


//  Id pregunta: 106 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  Con el 20% del esfuerzo se resuelven el 80% de los problemas de una organizaci&oacute;n, y con el restante 80% del esfuerzo se resuelven el restante 20 % de los problemas  seg&uacute;n la:";
 choices[1]= new Array();
 choices[1][0] = "Ley de Parkinson";
 choices[1][1] = "Ley de Fink";
 choices[1][2] = "Ley de Murphy";
 choices[1][3] = "Ley de Pareto";
 answers[1] = choices[1][3];
 units[1] = "25";
 comments[1] = "Id Pregunta: 106. ";


//  Id pregunta: 223 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  En la planificaci&oacute;n f&iacute;sica de un centro de proceso de datos es esencial tener en cuenta el aspecto siguiente:";
 choices[2]= new Array();
 choices[2][0] = "Debe asegurarse el suministro de energ&iacute;a el&eacute;ctrica haciendo un contrato con m&aacute;s de un suministrador o instalando generadores";
 choices[2][1] = "Debe estar situado junto a una v&iacute;a r&aacute;pida de comunicaci&oacute;n";
 choices[2][2] = "El edificio no debe tener m&aacute;s de cuatro plantas";
 choices[2][3] = "En la azotea deben instalarse paneles solares";
 answers[2] = choices[2][0];
 units[2] = "26";
 comments[2] = "Id Pregunta: 223. ";


//  Id pregunta: 319 AÃ±o de creación de pregunta: 2009-01-01
 questions[3]= "4)  La LOPD se aplicar&aacute; sin especialidad indicada a:";
 choices[3]= new Array();
 choices[3][0] = "Los ficheros que mantengan las personas f&iacute;sicas con fines exclusivamente dom&eacute;sticos o personales";
 choices[3][1] = "A todos aquellos datos de car&aacute;cter personal registrados en cualquier soporte que los haga susceptibles de tratamiento y cualquier modalidad de uso posterior de los mismos";
 choices[3][2] = "Los ficheros regulados por la legislaci&oacute;n electoral o sobre estad&iacute;stica p&uacute;blica";
 choices[3][3] = "Los ficheros derivados de los Registros Civiles";
 answers[3] = choices[3][1];
 units[3] = "29";
 comments[3] = "Id Pregunta: 319. ";


//  Id pregunta: 399 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Quienes se dediquen a la prestaci&oacute;n de servicios de informaci&oacute;n sobre solvencia patrimonial y el cr&eacute;dito:";
 choices[4]= new Array();
 choices[4][0] = "Podr&aacute;n tratar datos de car&aacute;cter personal relativos al cumplimiento o inclumplimiento de obligaciones dinerarias facilitados por el acreedor o por quien act&uacute;e por su cuenta o inter&eacute;s";
 choices[4][1] = "S&oacute;lo podr&aacute;n tratar datos de car&aacute;cter personal obtenidos de los registros y las fuentes accesibles al p&uacute;blico";
 choices[4][2] = "S&oacute;lo podr&aacute;n tratar datos de car&aacute;cter personal procedentes de informaciones facilitadas por el interesado o con su consentimiento";
 choices[4][3] = "No podr&aacute;n registrar o ceder datos de car&aacute;cter personal que sean determinantes para enjuiciar la solvencia econ&oacute;mica de los interesados";
 answers[4] = choices[4][0];
 units[4] = "29";
 comments[4] = "Id Pregunta: 399. ";


//  Id pregunta: 451 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Se&ntilde;alar la respuesta correcta si hablamos de eficacia y eficiencia:";
 choices[5]= new Array();
 choices[5][0] = "La eficacia de un sistema es la medida de la correcta utilizaci&oacute;n de equipos, instalaciones y personal que participan en &eacute;l";
 choices[5][1] = "La eficiencia de un sistema es la medida de la correcta utilizaci&oacute;n de equipos, instalaciones y personal que participa en &eacute;l";
 choices[5][2] = "La eficiencia es la medida del cumplimiento de los objetivos del organismo y de los requisitos de los usuarios";
 choices[5][3] = "La eficacia &oacute;ptima se logra cuando se alcanzan los objetivos de los usuarios con los m&iacute;nimos recursos posibles";
 answers[5] = choices[5][1];
 units[5] = "38";
 comments[5] = "Id Pregunta: 451. ";


//  Id pregunta: 564 AÃ±o de creación de pregunta: 2006-01-01
 questions[6]= "7)  En las organizaciones basadas en la informaci&oacute;n, los informes";
 choices[6]= new Array();
 choices[6][0] = "No ser&aacute;n necesarios dado que el control vendr&aacute; implicito en los propios sistemas";
 choices[6][1] = "Los mandos intermedios tendr&aacute;n la oportunidad de realizar informes m&aacute;s fiables";
 choices[6][2] = "Los mandos intermedios podr&aacute;n proporcionar datos m&aacute;s fiables  y exactos";
 choices[6][3] = "permitir&aacute;n avanzar en los aspectos de creatividad, motivaci&oacute;n y calidad.";
 answers[6] = choices[6][3];
 units[6] = "22";
 comments[6] = "Id Pregunta: 564. ";


//  Id pregunta: 694 AÃ±o de creación de pregunta: 2004-01-01
 questions[7]= "8)  Seg&uacute;n la directiva comunitaria 1999/93/CE de firma electr&oacute;nica, las autoridades de certificaci&oacute;n s&oacute;lo pueden ser:";
 choices[7]= new Array();
 choices[7][0] = "Entidades p&uacute;blicas";
 choices[7][1] = "Personas f&iacute;sicas";
 choices[7][2] = "Personas jur&iacute;dicas";
 choices[7][3] = "Entidades p&uacute;blicas, personas f&iacute;sicas o personas jur&iacute;dicas, dependiendo de la legislaci&oacute;n del pa&iacute;s";
 answers[7] = choices[7][3];
 units[7] = "30";
 comments[7] = "Id Pregunta: 694. Similar a examen TIC SS A 2003";


//  Id pregunta: 912 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Qu&eacute; arquitectura paralela se caracteriza por ejecutar una instruccion sobre varios datos de manera simult&aacute;nea?:";
 choices[8]= new Array();
 choices[8][0] = "SIMD";
 choices[8][1] = "MIMD";
 choices[8][2] = "SISD";
 choices[8][3] = "MISD";
 answers[8] = choices[8][0];
 units[8] = "45";
 comments[8] = "Id Pregunta: 912. ";


//  Id pregunta: 1005 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  El componente central de los sistemas operativos sencillos de proceso por lotes (batch) es el:";
 choices[9]= new Array();
 choices[9][0] = "Monitor";
 choices[9][1] = "Compilador";
 choices[9][2] = "Int&eacute;rprete";
 choices[9][3] = "Proceso en serie";
 answers[9] = choices[9][0];
 units[9] = "52";
 comments[9] = "Id Pregunta: 1005. ";


//  Id pregunta: 1096 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  En el subsistema de E/S, &iquest;qu&eacute; diferencia a una 'operaci&oacute;n de entrada/salida' de una 'transferencia elemental'?:";
 choices[10]= new Array();
 choices[10][0] = "La primera transfiere uno o varios bloques de datos y la segunda s&oacute;lo mueve un dato o una palabra de control";
 choices[10][1] = "La primera no comprueba el estado del perif&eacute;rico y la segunda s&iacute; lo hace";
 choices[10][2] = "La primera se realiza por hardware y la segunda por software";
 choices[10][3] = "La primera sincroniza la UCP y el controlador del perif&eacute;rico mediante se&ntilde;ales el&eacute;ctricas, y la segunda no lo hace";
 answers[10] = choices[10][0];
 units[10] = "52";
 comments[10] = "Id Pregunta: 1096. ";


//  Id pregunta: 1418 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Una memoria EEPROM:";
 choices[11]= new Array();
 choices[11][0] = "Podemos programarla una &uacute;nica vez, s&oacute;lo cuando est&aacute; nueva";
 choices[11][1] = "Podemos reprogramarla tras borrarla el&eacute;ctricamente";
 choices[11][2] = "Podemos reprogramarla, tras borrarla con rayos UV";
 choices[11][3] = "Ninguna de las anteriores es correcta";
 answers[11] = choices[11][1];
 units[11] = "47";
 comments[11] = "Id Pregunta: 1418. ";


//  Id pregunta: 1422 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Una relaci&oacute;n est&aacute; en primera forma normal si:";
 choices[12]= new Array();
 choices[12][0] = "La clave &uacute;nica permite la dependencia funcional";
 choices[12][1] = "No contiene claves dependientes de otra extranjera";
 choices[12][2] = "La clave extranjera est&aacute; normalizada";
 choices[12][3] = "No contiene grupos repetitivos";
 answers[12] = choices[12][3];
 units[12] = "58";
 comments[12] = "Id Pregunta: 1422. ";


//  Id pregunta: 1620 AÃ±o de creación de pregunta: 2003-01-01
 questions[13]= "14)  Que caracter&iacute;stica de Java no es completamente cierta";
 choices[13]= new Array();
 choices[13][0] = "Es independiente del SO";
 choices[13][1] = "Es independiente de la plataforma";
 choices[13][2] = "Es independiente del HW";
 choices[13][3] = "Write once run everywhere ";
 answers[13] = choices[13][3];
 units[13] = "60";
 comments[13] = "Id Pregunta: 1620. El c&oacute;digo puede requerir alguna personalizaci&oacute;n para entorno en que se ejecute.";


//  Id pregunta: 1784 AÃ±o de creación de pregunta: 2006-01-01
 questions[14]= "15)  Indique aquel conjunto de programas que no guardan relaci&oacute;n en cuanto a su funcionalidad";
 choices[14]= new Array();
 choices[14][0] = "Gnumeric, kspread";
 choices[14][1] = "Firefox, Epiphany";
 choices[14][2] = "Thunderbird, Konqueror";
 choices[14][3] = "Dia, kivio";
 answers[14] = choices[14][2];
 units[14] = "61,62";
 comments[14] = "Id Pregunta: 1784. ";


//  Id pregunta: 1895 AÃ±o de creación de pregunta: 2006-01-01
 questions[15]= "16)  La t&eacute;cnica de ocultar un mensaje secreto dentro de un mensaje ordinario y extraerlo en destino se llama";
 choices[15]= new Array();
 choices[15][0] = "algoritmo de clave secreta";
 choices[15][1] = "bytecode";
 choices[15][2] = "esteganograf&iacute;a";
 choices[15][3] = "spyware";
 answers[15] = choices[15][2];
 units[15] = "74";
 comments[15] = "Id Pregunta: 1895. NULL";


//  Id pregunta: 1916 AÃ±o de creación de pregunta: 2006-01-01
 questions[16]= "17)  Seg&uacute;n la recomendaci&oacute;n X.509 v.3";
 choices[16]= new Array();
 choices[16][0] = "Un usuario puede tener a lo sumo un certificado de atributos por cada certificado de clave p&uacute;blica";
 choices[16][1] = "Los certificados de atributos deben ser generados por Autoridades de Certificaci&oacute;n";
 choices[16][2] = "Para su validez, los certificados de atributos deben estar siempre acompa&ntilde;ados de un certificado de clave p&uacute;blica";
 choices[16][3] = "Los certificados de atributos contienen id&eacute;nticos campos que subcampos tiene el campo de extensiones de los certificados de clave p&uacute;blica";
 answers[16] = choices[16][2];
 units[16] = "73";
 comments[16] = "Id Pregunta: 1916. ";


//  Id pregunta: 2064 AÃ±o de creación de pregunta: 2004-01-01
 questions[17]= "18)  &iquest;Cual es la complejidad ciclom&aacute;tica de un grafo de flujo con 5 nodos y 7 aristas?";
 choices[17]= new Array();
 choices[17][0] = "3";
 choices[17][1] = "4";
 choices[17][2] = "5";
 choices[17][3] = "6";
 answers[17] = choices[17][1];
 units[17] = "88";
 comments[17] = "Id Pregunta: 2064. SS-A 2004. Complejidad McCabe = aristas - nodos + 2";


//  Id pregunta: 2115 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  &iquest;Bajo qu&eacute; normas de la serie ISO-9000 puede certificarse una empresa?:";
 choices[18]= new Array();
 choices[18][0] = "9001, 9002 y 9003";
 choices[18][1] = "S&oacute;lo 9001";
 choices[18][2] = "9000, 9001, 9002, 9003 y 9004";
 choices[18][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[18] = choices[18][1];
 units[18] = "92";
 comments[18] = "Id Pregunta: 2115. NULL";


//  Id pregunta: 2436 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  La versi&oacute;n 3 de la metodolog&iacute;a M&eacute;trica:";
 choices[19]= new Array();
 choices[19][0] = "Cubre tanto desarrollos estructurados como desarrollos orientados a objetos ";
 choices[19][1] = "Cubre exclusivamente desarrollos estructurados";
 choices[19][2] = "Cubre exclusivamente desarrollos orientados a objetos";
 choices[19][3] = "Cubre exclusivamente desarrollos orientados a entornos microinform&aacute;ticos";
 answers[19] = choices[19][0];
 units[19] = "86";
 comments[19] = "Id Pregunta: 2436. NULL";


//  Id pregunta: 2460 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Los modelos de ciclo de vida que incluyen prototipos software desechables, se realizan por la necesidad de ...";
 choices[20]= new Array();
 choices[20][0] = "Acortar el tiempo de implementaci&oacute;n facilitando la reutilizaci&oacute;n de software";
 choices[20][1] = "Mejorar la comprensi&oacute;n de los requisitos del sistema a dise&ntilde;ar";
 choices[20][2] = "Facilitar el mantenimiento del sistema";
 choices[20][3] = "La utilizaci&oacute;n de sistemas CASE que facilitan el desarrollo del prototipo";
 answers[20] = choices[20][1];
 units[20] = "76";
 comments[20] = "Id Pregunta: 2460. ";


//  Id pregunta: 2516 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Utilizando la funcionalidad como criterio principal, las herramientas CASE pueden agruparse en: Herramientas de planificaci&oacute;n de sistemas, Herramientas de an&aacute;lisis y dise&ntilde;o, Herramientas de programaci&oacute;n, Herramientas de integraci&oacute;n y prueba, y Herramientas:";
 choices[21]= new Array();
 choices[21][0] = "Herramientas de mantenimiento";
 choices[21][1] = "Herramientas de gesti&oacute;n de prototipos";
 choices[21][2] = "Herramientas de integraci&oacute;n y prueba";
 choices[21][3] = "Herramientas de programaci&oacute;n";
 answers[21] = choices[21][0];
 units[21] = "86";
 comments[21] = "Id Pregunta: 2516. NULL";


//  Id pregunta: 2539 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Los algoritmos de comprensi&oacute;n LZW son del tipo:";
 choices[22]= new Array();
 choices[22][0] = "Basados en diccionario";
 choices[22][1] = "RLE";
 choices[22][2] = "HUFFMAN";
 choices[22][3] = "JPEG";
 answers[22] = choices[22][0];
 units[22] = "93";
 comments[22] = "Id Pregunta: 2539. NULL";


//  Id pregunta: 2572 AÃ±o de creación de pregunta: 2004-01-01
 questions[23]= "24)  Los factores de calidad desde el punto de vista de la explotaci&oacute;n, seg&uacute;n McCall son los siguientes:";
 choices[23]= new Array();
 choices[23][0] = "Usabilidad, Eficiencia y Fiabilidad";
 choices[23][1] = "Mantenibilidad, Verificabilidad y Flexibilidad";
 choices[23][2] = "Usabilidad, Seguridad, Eficiencia, Correccion y Fiabilidad";
 choices[23][3] = "Usabilidad, Mantenibilidad, Flexibilidad y Correcci&oacute;n";
 answers[23] = choices[23][2];
 units[23] = "87,88,92";
 comments[23] = "Id Pregunta: 2572. ";


//  Id pregunta: 2655 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  Los objetivos a conseguir en cuanto a cohesi&oacute;n y acoplamiento en el Dise&ntilde;o Estructurado son:";
 choices[24]= new Array();
 choices[24][0] = "M&aacute;xima Cohesi&oacute;n y m&iacute;nimo acoplamiento";
 choices[24][1] = "M&iacute;nima cohesi&oacute;n y m&aacute;ximo acoplamiento";
 choices[24][2] = "M&aacute;xima cohesi&oacute;n y m&aacute;ximo acoplamiento";
 choices[24][3] = "M&iacute;nima Cohesi&oacute;n y m&iacute;nimo acoplamiento";
 answers[24] = choices[24][0];
 units[24] = "84";
 comments[24] = "Id Pregunta: 2655. Preparatic XVII";


//  Id pregunta: 2667 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  En este nivel se extraen los s&iacute;mbolos elementales, morfemas, y se analiza su sucesi&oacute;n para comprobar su adecuaci&oacute;n a la gram&aacute;tica del lenguaje, la cual supone una determinada relaci&oacute;n entre ellos:";
 choices[25]= new Array();
 choices[25][0] = "Nivel fon&eacute;tico distintivo.";
 choices[25][1] = "Nivel pros&oacute;dico.";
 choices[25][2] = "Nivel l&eacute;xico-sint&aacute;ctico.";
 choices[25][3] = "Nivel ac&uacute;stico.";
 answers[25] = choices[25][2];
 units[25] = "94";
 comments[25] = "Id Pregunta: 2667. ";


//  Id pregunta: 2714 AÃ±o de creación de pregunta: 2004-01-01
 questions[26]= "27)  &iquest;C&oacute;mo se puede mantener la sesi&oacute;n en CGIs?";
 choices[26]= new Array();
 choices[26][0] = "Mediante campos ocultos en los formularios";
 choices[26][1] = "Mediantes cookies";
 choices[26][2] = "Mediante formularios o cookies indistintamente";
 choices[26][3] = "Ninguna de las anteriores";
 answers[26] = choices[26][2];
 units[26] = "114";
 comments[26] = "Id Pregunta: 2714. ";


//  Id pregunta: 2737 AÃ±o de creación de pregunta: 2006-01-01
 questions[27]= "28)  &iquest;Cuando decimos que una entidad est&aacute; en 3FN?";
 choices[27]= new Array();
 choices[27][0] = "Si est&aacute; en 2FN y cada atributo que no pertenezca a la clave tiene una dependencia funcional completa de la clave.";
 choices[27][1] = "Si est&aacute; en 2FN y no contiene grupos repetitivos.";
 choices[27][2] = "Si est&aacute; en 2FN y no contiene atributos multivaluados.";
 choices[27][3] = "Si est&aacute; en 2FN y cada atributo que no pertenezca a la clave no depende transitivamente de dicha clave.";
 answers[27] = choices[27][3];
 units[27] = "58";
 comments[27] = "Id Pregunta: 2737. ";


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


//  Id pregunta: 3051 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  &iquest;Qu&eacute; objetos intervienen en el nivel de aplicaci&oacute;n de la arquitectura internet de 3 capas?:";
 choices[29]= new Array();
 choices[29][0] = "P&aacute;ginas HTML";
 choices[29][1] = "Objetos de negocio";
 choices[29][2] = "Componentes de base de datos";
 choices[29][3] = "Todas intervienen";
 answers[29] = choices[29][1];
 units[29] = "113";
 comments[29] = "Id Pregunta: 3051. ";


//  Id pregunta: 3218 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  El est&aacute;ndar IEEE que suministra una descripci&oacute;n de los procedimientos del protocolo a nivel de enlace en una red de &aacute;rea local para la transferencia de datos y su control entre cualquier pareja de puntos de acceso al servicio es:";
 choices[30]= new Array();
 choices[30][0] = "802.1";
 choices[30][1] = "802.2";
 choices[30][2] = "802.10";
 choices[30][3] = "802.12";
 answers[30] = choices[30][1];
 units[30] = "100";
 comments[30] = "Id Pregunta: 3218. NULL";


//  Id pregunta: 3271 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  &iquest;En qu&eacute; tipo de aplicaci&oacute;n no ser&iacute;a adecuada la instalaci&oacute;n de una conexi&oacute;n Frame Relay?:";
 choices[31]= new Array();
 choices[31][0] = "Correo electr&oacute;nico";
 choices[31][1] = "Conexi&oacute;n de redes de area local";
 choices[31][2] = "Video";
 choices[31][3] = "Todas las anteriores son posibles aplicaciones de una red Frame Relay de alta velocidad";
 answers[31] = choices[31][2];
 units[31] = "109";
 comments[31] = "Id Pregunta: 3271. ";


//  Id pregunta: 3312 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  &iquest;Qu&eacute; tama&ntilde;o de celdas se utiliza en ATM?:";
 choices[32]= new Array();
 choices[32][0] = "Un m&aacute;ximo de 64 bytes";
 choices[32][1] = "El tama&ntilde;o m&aacute;ximo depende del contrato con el proveedor del servicio, siendo m&uacute;ltiplo de 64 bytes";
 choices[32][2] = "1024 bits";
 choices[32][3] = "424 bits";
 answers[32] = choices[32][3];
 units[32] = "109";
 comments[32] = "Id Pregunta: 3312. ";


//  Id pregunta: 4097 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  Con que tecnolog&iacute;a no se puede implementar una arquitectura SOA";
 choices[33]= new Array();
 choices[33][0] = "J2EE";
 choices[33][1] = ".Net";
 choices[33][2] = "Software Libre";
 choices[33][3] = "Se puede con todas las anteriores";
 answers[33] = choices[33][3];
 units[33] = "116";
 comments[33] = "Id Pregunta: 4097. ";


//  Id pregunta: 4130 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  Los elementos XML de tipo y atributo deben tener una identidad &uacute;nica en el &aacute;mbito del";
 choices[34]= new Array();
 choices[34][0] = "servidor o sitio";
 choices[34][1] = "espacio de nombres ";
 choices[34][2] = "nombre de dominio";
 choices[34][3] = "nombre de dominio completamente cualificado (FQDM)";
 answers[34] = choices[34][1];
 units[34] = "69";
 comments[34] = "Id Pregunta: 4130. NULL";


//  Id pregunta: 4325 AÃ±o de creación de pregunta: 2007-01-01
 questions[35]= "36)  Entre las capacidades que deben ser consideradas por el Administrador de una base de datos para evaluar la seguridad e integridad de los datos de un SGBD, no se encuentra...";
 choices[35]= new Array();
 choices[35][0] = "Control de concurrencia";
 choices[35][1] = "Control de herencia.";
 choices[35][2] = "Control de acceso.";
 choices[35][3] = "Las facilidades de cifrado.";
 answers[35] = choices[35][1];
 units[35] = "26,57";
 comments[35] = "Id Pregunta: 4325. ";


//  Id pregunta: 4511 AÃ±o de creación de pregunta: 2007-01-01
 questions[36]= "37)  Una de las siguientes afirmaciones no es cierta respecto a Ia ISO (Organization International de Normalization).";
 choices[36]= new Array();
 choices[36][0] = "Es una red de los institutos de normas nacionales de mas de cien pa&iacute;ses,";
 choices[36][1] = "Es una organizaci&oacute;n no gubernamental.";
 choices[36][2] = "Todos sus miembros son parte de Ia estructura gubernamental de sus pa&iacute;ses, o son conferidos por mandato por su gobierno.";
 choices[36][3] = "La Secretaria Central esta en Ginebra, Suiza.";
 answers[36] = choices[36][2];
 units[36] = "42";
 comments[36] = "Id Pregunta: 4511. ";


//  Id pregunta: 4806 AÃ±o de creación de pregunta: 2007-01-01
 questions[37]= "38)  El est&aacute;ndar del IEEE (Institute of Electrical and Electronics Engineers) que funciona bajo el est&aacute;ndar 802.11 y seaplica a la intercomunicaci&oacute;n entre puntos de acceso de distintos fabricantes, permitiendo el roaming o itineranciade clientes es el:";
 choices[37]= new Array();
 choices[37][0] = "802.11e";
 choices[37][1] = "802.11f";
 choices[37][2] = "802.11h";
 choices[37][3] = "802.11i";
 answers[37] = choices[37][1];
 units[37] = "107";
 comments[37] = "Id Pregunta: 4806. NULL";


//  Id pregunta: 4929 AÃ±o de creación de pregunta: 2003-01-01
 questions[38]= "39)  &Aacute;lvaro est&aacute; iniciando las tareas de planificaci&oacute;n de un nuevo proyecto software, y ha efectuado unos c&aacute;lculos previos de &ldquo;puntos de funci&oacute;n&rdquo;. La t&eacute;cnica de Puntos de Funci&oacute;n es una t&eacute;cnica indirecta para determinar:";
 choices[38]= new Array();
 choices[38][0] = "La calidad de una aplicaci&oacute;n software y la tasa de errores prevista.";
 choices[38][1] = "La dimensi&oacute;n de un proyecto inform&aacute;tico y su probable coste.";
 choices[38][2] = "La usabilidad de un interfaz y la previsi&oacute;n de errores de usuario.";
 choices[38][3] = "La seguridad de una aplicaci&oacute;n y su riesgo de intrusi&oacute;n.";
 answers[38] = choices[38][1];
 units[38] = "87";
 comments[38] = "Id Pregunta: 4929. Examen TIC B 2007";


//  Id pregunta: 4944 AÃ±o de creación de pregunta: 2003-01-01
 questions[39]= "40)  &iquest;En cu&aacute;l de los siguientes procesos de M&eacute;trica v.3 se obtiene como producto de alguna de sus tareas los Procedimientos de Migraci&oacute;n y Carga Inicial de Datos?:";
 choices[39]= new Array();
 choices[39][0] = "An&aacute;lisis del Sistema de Informaci&oacute;n.";
 choices[39][1] = "Dise&ntilde;o del Sistema de Informaci&oacute;n.";
 choices[39][2] = "Construcci&oacute;n del Sistema de Informaci&oacute;n.";
 choices[39][3] = "Implantaci&oacute;n y Aceptaci&oacute;n del Sistema de Informaci&oacute;n.";
 answers[39] = choices[39][2];
 units[39] = "86";
 comments[39] = "Id Pregunta: 4944. Examen TIC B 2007";


//  Id pregunta: 4967 AÃ±o de creación de pregunta: 2003-01-01
 questions[40]= "41)  El principio de Frank-Condon, de especial importancia en las comunicaciones &oacute;pticas basadas en l&aacute;ser de semiconductor, establece que:";
 choices[40]= new Array();
 choices[40][0] = "La atenuaci&oacute;n de la se&ntilde;al disminuye con el cuadrado de la longitud de onda.";
 choices[40][1] = "S&oacute;lo son posibles transiciones con emisi&oacute;n de fotones cuando no hay cambio en la cantidad de movimiento delelectr&oacute;n.";
 choices[40][2] = "El ruido nodal es m&aacute;ximo en la fibra monomodo.";
 choices[40][3] = "El ruido nodal es m&iacute;nimo en la fibra monomodo.";
 answers[40] = choices[40][1];
 units[40] = "99";
 comments[40] = "Id Pregunta: 4967. Examen TIC B 2007";


//  Id pregunta: 4976 AÃ±o de creación de pregunta: 2003-01-01
 questions[41]= "42)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares no ha sido elaborado por W3C (World Wide Web Consortium)?";
 choices[41]= new Array();
 choices[41][0] = "XML (Extensible Markup Language).";
 choices[41][1] = "SOAP (Simple Object Access Protocol).";
 choices[41][2] = "WAI (Web Accessibility Initiative).";
 choices[41][3] = "SSL (Secure Sockets Layer).";
 answers[41] = choices[41][3];
 units[41] = "39";
 comments[41] = "Id Pregunta: 4976. Examen TIC B 2007";


//  Id pregunta: 4994 AÃ±o de creación de pregunta: 2003-01-01
 questions[42]= "43)  &iquest;A qu&eacute; proceso principal de la metodolog&iacute;a M&eacute;trica versi&oacute;n 3 pertenece el proceso &quot;Implantaci&oacute;n y aceptaci&oacute;n de sistemas (IAS)&quot;?";
 choices[42]= new Array();
 choices[42][0] = "Desarrollo de sistemas de informaci&oacute;n";
 choices[42][1] = "Planificaci&oacute;n de sistemas de informaci&oacute;n";
 choices[42][2] = "An&aacute;lisis de sistema de informaci&oacute;n";
 choices[42][3] = "Mantenimiento de sistemas de informaci&oacute;n";
 answers[42] = choices[42][0];
 units[42] = "86";
 comments[42] = "Id Pregunta: 4994. Examen TIC A 2007";


//  Id pregunta: 4997 AÃ±o de creación de pregunta: 2003-01-01
 questions[43]= "44)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[43]= new Array();
 choices[43][0] = "El sistema de autenticaci&oacute;n &quot;Kerberos&quot;, utiliza exclusivamente mecanismos de criptograf&iacute;a asim&eacute;trica";
 choices[43][1] = "Para la autenticaci&oacute;n &quot;Kerberos&quot; utiliza mecanismos basados en criptograf&iacute;a sim&eacute;trica y en criptograf&iacute;aasim&eacute;trica";
 choices[43][2] = "Para la autenticaci&oacute;n &quot;Kerberos&quot; utiliza exclusivamente mecanismos basados en critograf&iacute;a sim&eacute;trica";
 choices[43][3] = "Para la autenticaci&oacute;n &quot;Kerberos&quot; utiliza mecanismos de identificaci&oacute;n/password y de criptograf&iacute;a sim&eacute;trica";
 answers[43] = choices[43][3];
 units[43] = "73";
 comments[43] = "Id Pregunta: 4997. Examen TIC A 2007";


//  Id pregunta: 5024 AÃ±o de creación de pregunta: 2003-01-01
 questions[44]= "45)  Cual de los siguientes no es un m&eacute;todo de ordenaci&oacute;n de alternativas disponible en el sistema SSD-AAPP v.3.0";
 choices[44]= new Array();
 choices[44][0] = "Ponderaci&oacute;n Lineal";
 choices[44][1] = "Permutaci&oacute;n";
 choices[44][2] = "Prometh&eacute;e";
 choices[44][3] = "Distancia al Ideal (TOPSIS)";
 answers[44] = choices[44][1];
 units[44] = "34";
 comments[44] = "Id Pregunta: 5024. Examen TIC A 2007";


//  Id pregunta: 5031 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  La Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, establece que:";
 choices[45]= new Array();
 choices[45][0] = "El Gobierno crear&aacute; una entidad p&uacute;blica para la gesti&oacute;n del Fondo nacional del servicio universal";
 choices[45][1] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia se encargar&aacute; de la gesti&oacute;n del Fondo nacional del servicio universal";
 choices[45][2] = "El Gobierno, mediante Decreto, establecer&aacute; el procedimiento por el que las operadoras gestionar&aacute;n elFondo nacional del servicio universal";
 choices[45][3] = "La Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n se encargar&aacute; de lagesti&oacute;n del Fondo nacional del servicio universal";
 answers[45] = choices[45][1];
 units[45] = "110";
 comments[45] = "Id Pregunta: 5031. Examen TIC A 2007";


//  Id pregunta: 5086 AÃ±o de creación de pregunta: 2001-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l de los siguientes algoritmos se basa en el problema de factorizaci&oacute;n entera?";
 choices[46]= new Array();
 choices[46][0] = "el algoritmo RIPEMD-160";
 choices[46][1] = "los algoritmos RSA y RW";
 choices[46][2] = "los algoritmos DHE y DSAE";
 choices[46][3] = "el algoritmo Rijndael";
 answers[46] = choices[46][1];
 units[46] = "72";
 comments[46] = "Id Pregunta: 5086. ";


//  Id pregunta: 5257 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  Se&ntilde;ale la falsa:";
 choices[47]= new Array();
 choices[47][0] = "GQM, Goal, Question, Metric, es un m&eacute;todo de desarrollo de m&eacute;tricas";
 choices[47][1] = "El n&uacute;mero de l&iacute;neas de c&oacute;digo se emplea como m&eacute;trica de estimaci&oacute;n de proyectos.";
 choices[47][2] = "Cocomo es un modelo de estimaci&oacute;n algor&iacute;tmico propuesto por Boehm que fundamenta su estimaci&oacute;n en el n&uacute;mero de puntos de funci&oacute;n.";
 choices[47][3] = "Cocomo se aplica en tres modelos: b&aacute;sico, intermedio y avanzado. Estos modelos se dividen a su vez en tres modos: org&aacute;nico, semiacoplado y empotrado.";
 answers[47] = choices[47][2];
 units[47] = "88";
 comments[47] = "Id Pregunta: 5257. NULL";


//  Id pregunta: 5518 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  Respecto a la concepci&oacute;n de un sistema operativo como gestor de recursos, un sistema operativo de prop&oacute;sito espec&iacute;fico de control en tiempo real no precisa gestionar:";
 choices[48]= new Array();
 choices[48][0] = "trabajos o procesos";
 choices[48][1] = "memoria principal";
 choices[48][2] = "almacenamiento secundario";
 choices[48][3] = "dispositivos de entrada/salida";
 answers[48] = choices[48][2];
 units[48] = "52";
 comments[48] = "Id Pregunta: 5518. ";


//  Id pregunta: 5600 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  Se&ntilde;ale la respuesta falsa sobre las redes neuronales";
 choices[49]= new Array();
 choices[49][0] = "Las redes de neuronas son un modelo de representaci&oacute;n del conocimiento de forma simb&oacute;lica";
 choices[49][1] = "Las neuronas se unen entre s&iacute; para formar una red. La fuerza de la uni&oacute;n se valora mediante un peso";
 choices[49][2] = "Para un funcionamiento correcto de la red es necesaria una fase previa de entrenamiento";
 choices[49][3] = "Un algoritmo muy utilizado para entrenar las redes es la retropropagaci&oacute;n";
 answers[49] = choices[49][0];
 units[49] = "64";
 comments[49] = "Id Pregunta: 5600. ";


//  Id pregunta: 6113 AÃ±o de creación de pregunta: 2010-01-01
 questions[50]= "51)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones sobre &quot;grid computing&quot; es FALSA:";
 choices[50]= new Array();
 choices[50][0] = "La escalabilidad parametrizable es una caracter&iacute;stica muy importante de esta arquitectura.";
 choices[50][1] = "Son sistemas homog&eacute;neos.";
 choices[50][2] = "Los nodos no tienen que estar dedicados.";
 choices[50][3] = "Se puede conseguir cerca de un 100 % de utilizaci&oacute;n de la CPU.";
 answers[50] = choices[50][1];
 units[50] = "45";
 comments[50] = "Id Pregunta: 6113. TIC A 2009";


//  Id pregunta: 6145 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)  Con respecto a la desagregaci&oacute;n del bucle de abonado:";
 choices[51]= new Array();
 choices[51][0] = "Existe una oferta de acceso al bucle de abonado (OBA) que obliga al operador establecido (&lsquo;incumbent&rsquo;) a abrir su red a los operadores alternativos";
 choices[51][1] = "La OBA exige que el operador establecido (&lsquo;incumbent&rsquo;) abra su red a los operadores alternativos para todos los servicios sin excepciones, si bien &eacute;stos deber&aacute;n abonar una cuota mensual por cada servicio desagregado";
 choices[51][2] = "Las respuestas a) y b) son correctas";
 choices[51][3] = "Las respuestas a) y b) son falsas";
 answers[51] = choices[51][0];
 units[51] = "107";
 comments[51] = "Id Pregunta: 6145. NULL";


//  Id pregunta: 6205 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  En Java, &iquest;Qu&eacute; es JSON?";
 choices[52]= new Array();
 choices[52][0] = "Un formato ligero para el intercambio de datos";
 choices[52][1] = "Tecnolog&iacute;a con la finalidad principal de facilitar la integraci&oacute;n en la misma p&aacute;gina Web de aplicaciones y servicios a priori independientes";
 choices[52][2] = "Servicios interactivos en red dando al usuario el control de los datos";
 choices[52][3] = "Componentes modulares de interfaz de usuario gestionados y visualizados en un portal web";
 answers[52] = choices[52][0];
 units[52] = "116";
 comments[52] = "Id Pregunta: 6205. TICB-2009, bloque desarrollo";


//  Id pregunta: 6458 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  Una infraestructura de clave p&uacute;blica (PKI) es ";
 choices[53]= new Array();
 choices[53][0] = "Un algoritmo de clave p&uacute;blica, cuya firma digital hace uso de funciones hash de 64 bits";
 choices[53][1] = "El conjunto de certificado de autenticaci&oacute;n y certificado de firma reconocida";
 choices[53][2] = "Una tercera parte de confianza que se encarga de la firma digital de los certificados de usuarios de entorno de clave p&uacute;blica";
 choices[53][3] = "Un conjunto de protocolos, servicios y est&aacute;ndares que soportan aplicaciones basadas en criptograf&iacute;a de clave p&uacute;blica";
 answers[53] = choices[53][3];
 units[53] = "74";
 comments[53] = "Id Pregunta: 6458. Castilla La Mancha 2009";


//  Id pregunta: 6468 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  Seg&uacute;n M&eacute;trica V3 las pruebas de seguridad, rendimiento y operaci&oacute;n se encuentran englobadas dentro del conjunto de pruebas de:";
 choices[54]= new Array();
 choices[54][0] = "Aceptaci&oacute;n";
 choices[54][1] = "Regresi&oacute;n";
 choices[54][2] = "Integraci&oacute;n";
 choices[54][3] = "Implantaci&oacute;n";
 answers[54] = choices[54][3];
 units[54] = "86";
 comments[54] = "Id Pregunta: 6468. Castilla La Mancha 2009";


//  Id pregunta: 6524 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  &iquest;Cu&aacute;les son los objetivos de la gesti&oacute;n de Servicios TI?";
 choices[55]= new Array();
 choices[55][0] = "Alinear las necesidades de las tecnolog&iacute;as de la informaci&oacute;n a las del negocio, y los clientes, tanto actuales como futuras";
 choices[55][1] = "Mejorar la calidad de los servicios de las tecnolog&iacute;as de la informaci&oacute;n";
 choices[55][2] = "Reducci&oacute;n del coste de los servicios de las tecnolog&iacute;as de la informaci&oacute;n prestados, a largo plazo";
 choices[55][3] = "Todas las respuestas anteriores son correctas";
 answers[55] = choices[55][3];
 units[55] = "98";
 comments[55] = "Id Pregunta: 6524. NULL";


//  Id pregunta: 7348 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  &iquest;Cu&aacute;l de los siguientes gestores de contenidos est&aacute; escrito en PHP?";
 choices[56]= new Array();
 choices[56][0] = "Typo3";
 choices[56][1] = "Liferay";
 choices[56][2] = "Alfresco";
 choices[56][3] = "Plone";
 answers[56] = choices[56][0];
 units[56] = "95";
 comments[56] = "Id Pregunta: 7348. NULL";


//  Id pregunta: 7817 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)   En JDBC, &iquest;qu&eacute; tipo de driver no permite trabajar con applets?";
 choices[57]= new Array();
 choices[57][0] = " Driver Tipo 1.";
 choices[57][1] = " Driver Tipo 2.";
 choices[57][2] = " Driver Tipo 3.";
 choices[57][3] = " Driver Tipo 4.";
 answers[57] = choices[57][0];
 units[57] = "NULL";
 comments[57] = "Id Pregunta: 7817. Map 2005";


//  Id pregunta: 7853 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)   Se desea contratar el servicio Frame Relay con un operador de comunicaciones, para una conexi&oacute;n entre dos puntos. En este caso se deber&aacute; tener en cuenta que el CIR para los Circuitos Virtuales Permanentes (CVP) contratados deber&aacute; cumplir lo siguiente:";
 choices[58]= new Array();
 choices[58][0] = " El CIR es mayor que la velocidad de acceso.";
 choices[58][1] = " El CIR es menor o igual que la velocidad de acceso.";
 choices[58][2] = " El CIR es igual en los dos sentidos del CVP.";
 choices[58][3] = " El CIR es distinto en los dos sentidos del CVP.";
 answers[58] = choices[58][1];
 units[58] = "NULL";
 comments[58] = "Id Pregunta: 7853. Map 2005";


//  Id pregunta: 8157 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)   Indique la respuesta INCORRECTA:";
 choices[59]= new Array();
 choices[59][0] = " Las herramientas PILAR soportan el an&aacute;lisis y la gesti&oacute;n de riesgos de un sistema de informaci&oacute;n siguiendo la metodolog&iacute;a Magerit.";
 choices[59][1] = " El acr&oacute;nimo PILAR significa: Procedimiento Integral L&oacute;gico para el An&aacute;lisis de Riesgos.";
 choices[59][2] = " Las herramientas PILAR disponen de una biblioteca est&aacute;ndar de prop&oacute;sito general.";
 choices[59][3] = " Las herramientas PILAR son capaces de realizar calificaciones de seguridad respecto a ISO/IEC 27002:2005 -C&oacute;digo de buenas pr&aacute;cticas para la Gesti&oacute;n de la Seguridad de la Informaci&oacute;n-.";
 answers[59] = choices[59][1];
 units[59] = "NULL";
 comments[59] = "Id Pregunta: 8157. Map 2008";


//  Id pregunta: 8353 AÃ±o de creación de pregunta: 2011-01-01
 questions[60]= "61)  Indique cu&aacute;l de las siguientes definiciones se corresponde con Biztalk:";
 choices[60]= new Array();
 choices[60][0] = "Es un servidor que permite gestionar procesos de negocio por medio de adaptadores dise&ntilde;ados al efecto, capacit&aacute;ndolo para operar diferentes tipos de software.";
 choices[60][1] = "Es una libreria de .NET que permite la comunicaci&oacute;n por IRC facilitando la implementaci&oacute;n de chats.";
 choices[60][2] = "Es un servidor web de .NET especialmente adaptado para tecnolog&iacute;as m&oacute;viles";
 choices[60][3] = "Es un componente que pertenece al CLR de .NET y que facilita la ejecuci&oacute;n de la aplicaci&oacute;n.";
 answers[60] = choices[60][0];
 units[60] = "59,115";
 comments[60] = "Id Pregunta: 8353. Examen TIC A2 2010";


//  Id pregunta: 8413 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de los siguientes lenguajes NO es un lenguaje que sigue el modelo de orientaci&oacute;n a objetos basados en clases? ";
 choices[61]= new Array();
 choices[61][0] = "JavaScript.";
 choices[61][1] = "Java.";
 choices[61][2] = "C++.";
 choices[61][3] = "Eiffel.";
 answers[61] = choices[61][0];
 units[61] = "82, 84";
 comments[61] = "Id Pregunta: 8413. Examen TIC A2 2010";


//  Id pregunta: 8524 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  &iquest;Cu&aacute;nto overhead o sobrecarga genera cada paquete MPLS?";
 choices[62]= new Array();
 choices[62][0] = "4 bits.";
 choices[62][1] = "5 bits.";
 choices[62][2] = "32 bits.";
 choices[62][3] = "258 bits.";
 answers[62] = choices[62][2];
 units[62] = "100";
 comments[62] = "Id Pregunta: 8524. Examen TIC A2 2010 interna";


//  Id pregunta: 8796 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  &iquest;Cu&aacute;ndo decimos que dos grafos son isomorfos?";
 choices[63]= new Array();
 choices[63][0] = "Cuando cada par de v&eacute;rtices adyacentes se corresponde con un par de v&eacute;rtices adyacentes del otro.";
 choices[63][1] = "Cuando est&aacute;n formados por los v&eacute;rtices de los 5 s&oacute;lidos regulares: el tetraedro, el cubo, el octaedro, el dodecaedro y el icosaedro";
 choices[63][2] = "Cuando el primero contiene todos los v&eacute;rtices del segundo";
 choices[63][3] = "Cuando los v&eacute;rtices que los forman est&aacute;n conectados";
 answers[63] = choices[63][0];
 units[63] = "-";
 comments[63] = "Id Pregunta: 8796. Examen UPM A2 2011";


//  Id pregunta: 9036 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  Seg&uacute;n el  RD 1671/2009, &iquest;cu&aacute;ndo se pueden destruir documentos en soporte papel?";
 choices[64]= new Array();
 choices[64][0] = "Siempre";
 choices[64][1] = "Nunca";
 choices[64][2] = "Cuando no se trate de documentos  con valor hist&oacute;rico, art&iacute;sticos o con car&aacute;cter relevante";
 choices[64][3] = "Cuando ya exista una copia en formato papel ";
 answers[64] = choices[64][2];
 units[64] = "43";
 comments[64] = "Id Pregunta: 9036. NULL";


//  Id pregunta: 9062 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes es una infracci&oacute;n muy grave seg&uacute;n la normativa de protecci&oacute;n de datos de car&aacute;cter personal?";
 choices[65]= new Array();
 choices[65][0] = "La vulneraci&oacute;n del deber de guardar secreto acerca del tratamiento de los datos de car&aacute;cter personal";
 choices[65][1] = "No atender, u obstaculizar de forma sistem&aacute;tica el ejercicio de los derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n u oposici&oacute;n";
 choices[65][2] = "No cesar en el tratamiento il&iacute;cito de datos de car&aacute;cter personal cuando existiese un previo requerimiento del Director de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos para ello";
 choices[65][3] = "No solicitar la inscripci&oacute;n del fichero de datos de car&aacute;cter personal en el Registro General de Protecci&oacute;n de Datos";
 answers[65] = choices[65][2];
 units[65] = "29";
 comments[65] = "Id Pregunta: 9062. NULL";


//  Id pregunta: 9295 AÃ±o de creación de pregunta: 2013-01-01
 questions[66]= "67)  &iquest;En qu&eacute; se diferencia el Plan de Continuidad de Negocio y el Plan de Recuperaci&oacute;n ante Desastres?";
 choices[66]= new Array();
 choices[66][0] = "No existe ninguna diferencia, son t&eacute;rminos equivalentes.";
 choices[66][1] = "El Plan de Continuidad de Negocio se centra en la parte reactiva de las TIC mientras que el de Recuperaci&oacute;n ante Desastres afecta a todos los departamentos de la organizaci&oacute;n.";
 choices[66][2] = "El Plan de Recuperaci&oacute;n ante Desastres se centra en la parte reactiva y es un subconjunto del Plan de Continuidad de Negocio. ";
 choices[66][3] = "Ninguna de las anteriores.";
 answers[66] = choices[66][2];
 units[66] = "32";
 comments[66] = "Id Pregunta: 9295. ";


//  Id pregunta: 9485 AÃ±o de creación de pregunta: 2013-01-01
 questions[67]= "68)  Seg&uacute;n Metricav3, &iquest;qu&eacute; participante se encarga de definir los requisitos de sistema?";
 choices[67]= new Array();
 choices[67][0] = "Jefe de proyecto";
 choices[67][1] = "Consultor";
 choices[67][2] = "Analista";
 choices[67][3] = "Programador";
 answers[67] = choices[67][2];
 units[67] = "78";
 comments[67] = "Id Pregunta: 9485. ";


//  Id pregunta: 9541 AÃ±o de creación de pregunta: 2013-01-01
 questions[68]= "69)  El &quot;Servicio Central de Gesti&oacute;n de Facturaci&oacute;n&quot; de la Administraci&oacute;n General del Estado, es descrito en:";
 choices[68]= new Array();
 choices[68][0] = "Ley 30/2007 de Contratos del Sector P&uacute;blico.";
 choices[68][1] = "ORDEN PRE/2971/2007, sobre l a expedici&oacute;n de facturas por medios electr&oacute;nicos cuando el destinatario de las mismas sea la Administraci&oacute;n General del Estado.";
 choices[68][2] = "Ley 56/2007 de Medidas de Impulso de la Sociedad de la Informaci&oacute;n.";
 choices[68][3] = "Orden PRE/2794/2011, por el que se determina el marco de ejercicio de las competencias estatales en materia de factura electr&oacute;nica.";
 answers[68] = choices[68][3];
 units[68] = "30";
 comments[68] = "Id Pregunta: 9541. Examen TIC A1 2011	";


//  Id pregunta: 9687 AÃ±o de creación de pregunta: 2014-01-01
 questions[69]= "70)  En Georeferenciaci&oacute;n, las funciones que deben ser desempe&ntilde;adas por los metadatos son:";
 choices[69]= new Array();
 choices[69][0] = "Descubrimiento, exploraci&oacute;n y acceso.";
 choices[69][1] = "Localizaci&oacute;n inicial, exploraci&oacute;n y carga de los datos.";
 choices[69][2] = "Localizaci&oacute;n inicial, exploraci&oacute;n, carga de los datos e interpretaci&oacute;n.";
 choices[69][3] = "Descubrimiento, exploraci&oacute;n y explotaci&oacute;n.";
 answers[69] = choices[69][3];
 units[69] = "67";
 comments[69] = "Id Pregunta: 9687. NULL";


//  Id pregunta: 9755 AÃ±o de creación de pregunta: 2014-01-01
 questions[70]= "71)  En M&eacute;trica v3, la actividad &quot;Establecimiento de requisitos de implantaci&oacute;n&quot; se lleva a cabo en:";
 choices[70]= new Array();
 choices[70][0] = "ASI";
 choices[70][1] = "DSI";
 choices[70][2] = "IAS";
 choices[70][3] = "ASI y DSI";
 answers[70] = choices[70][1];
 units[70] = "86";
 comments[70] = "Id Pregunta: 9755. Actividad DSI.11. El resto de actividades referentes a implantaci&oacute;n se llevan a cabo en IAS";


//  Id pregunta: 9770 AÃ±o de creación de pregunta: 2014-01-01
 questions[71]= "72)  Seg&uacute;n la Ley 37/2007 de Reutilizaci&oacute;n de Informaci&oacute;n del Sector P&uacute;blico, son infracciones graves:";
 choices[71]= new Array();
 choices[71][0] = "La reutilizaci&oacute;n de la informaci&oacute;n para una finalidad distinta a la que se concedi&oacute;.";
 choices[71][1] = "La falta de menci&oacute;n de la fecha de la &uacute;ltima actualizaci&oacute;n de la informaci&oacute;n.";
 choices[71][2] = "La desnaturalizaci&oacute;n del sentido de la informaci&oacute;n para cuya reutilizaci&oacute;n se haya concedido una licencia.";
 choices[71][3] = "La ausencia de cita de la fuente.";
 answers[71] = choices[71][0];
 units[71] = "22";
 comments[71] = "Id Pregunta: 9770. ";


//  Id pregunta: 9774 AÃ±o de creación de pregunta: 2014-01-01
 questions[72]= "73)  TinyOS, cuyo dise&ntilde;o est&aacute; orientado a sistemas embebidos inal&aacute;mbricos de baja potencia, est&aacute; escrito en el lenguaje:";
 choices[72]= new Array();
 choices[72][0] = "Java ";
 choices[72][1] = "Python ";
 choices[72][2] = ".Net";
 choices[72][3] = "nesC ";
 answers[72] = choices[72][3];
 units[72] = "52";
 comments[72] = "Id Pregunta: 9774. Examen TIC A2 2013";


//  Id pregunta: 9982 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  Una p&aacute;gina ASP mezcla en el mismo archivo secuencias de comandos con c&oacute;digo HTML est&aacute;ndar con las secuencias de comandos asp mediante los delimitadores:";
 choices[73]= new Array();
 choices[73][0] = "&lt;% y %&gt;";
 choices[73][1] = "&lt;SCRIPT LANGUAGE=ASPScript&gt;&lt;/SCRIPT&gt;";
 choices[73][2] = "&lt;!-- --&gt;";
 choices[73][3] = "Los comandos ASP no se mezclan en el mismo archivo que el c&oacute;digo HTML, sino que se importan desde otro archivo";
 answers[73] = choices[73][0];
 units[73] = "59.115";
 comments[73] = "Id Pregunta: 9982. TIC A2, UPM, Examen 2010";


//  Id pregunta: 10069 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  Analizando los problemas con la calidad de servicio en VoIP, &iquest;qu&eacute; se entiende por jitter?";
 choices[74]= new Array();
 choices[74][0] = "Una reflexi&oacute;n retardada de la se&ntilde;al ac&uacute;stica original.";
 choices[74][1] = "El tiempo que tarda un paquete en llegar desde la fuente al destino.";
 choices[74][2] = "Variaci&oacute;n en el tiempo de llegada de los paquetes, causada por congesti&oacute;n de red, perdida de sincronizaci&oacute;n o por las diferentes rutas seguidas.";
 choices[74][3] = "Cantidad de informaci&oacute;n o de datos que se puede enviar a trav&eacute;s de una conexi&oacute;n de red en un per&iacute;odo de tiempo dado.";
 answers[74] = choices[74][2];
 units[74] = "109";
 comments[74] = "Id Pregunta: 10069. TIC A2, libre, Examen 2013";


//  Id pregunta: 10099 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  Se&ntilde;ala la afirmaci&oacute;n correcta sobre el an&aacute;lisis estructurado";
 choices[75]= new Array();
 choices[75][0] = "El modelo ambiental se compone del modelo esencial y el modelo de comportamiento.";
 choices[75][1] = "El modelo esencial se compone del modelo ambiental y el modelo de comportamiento.";
 choices[75][2] = "El modelo de compotamiento se compone del modelo ambiental y el modelo esencial.";
 choices[75][3] = "El modelo ambiental se compone del modelo estructural y el modelo esencial.";
 answers[75] = choices[75][1];
 units[75] = "81";
 comments[75] = "Id Pregunta: 10099. NULL";


//  Id pregunta: 10161 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta en relaci&oacute;n con el c&aacute;lculo relacional?";
 choices[76]= new Array();
 choices[76][0] = "Lenguaje formal de consulta / acceso a un modelo relacional basado en la teor&iacute;a de conjuntos";
 choices[76][1] = "Lenguaje te&oacute;rico y de car&aacute;cter procedural que define un conjunto de operaciones aplicables sobre un modelo relacional";
 choices[76][2] = "Formalismo para expresar operaciones de consulta / acceso a un modelo relacional basado en la l&oacute;gica de predicados";
 choices[76][3] = "Ninguna de las anteriores";
 answers[76] = choices[76][2];
 units[76] = "58";
 comments[76] = "Id Pregunta: 10161. ";


//  Id pregunta: 10269 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  En el contexto de la protecci&oacute;n de datos de car&aacute;cter personal, la figura del responsable de seguridad";
 choices[77]= new Array();
 choices[77][0] = "Es obligatorio que exista s&oacute;lo si se trata de ficheros de nivel alto, no suponiendo su existencia exoneraci&oacute;n de las responsabilidades que corresponden al responsable del fichero";
 choices[77][1] = "Es obligatorio que exista s&oacute;lo si se trata de ficheros de nivel alto, en cuyo caso las obligaciones del responsable del fichero pasan al responsable de seguridad";
 choices[77][2] = "Es obligatorio que exista s&oacute;lo si se trata de ficheros de nivel medio o alto, no suponiendo su existencia exoneraci&oacute;n de las responsabilidades que corresponden al responsable del fichero";
 choices[77][3] = "Es obligatorio que exista s&oacute;lo si se trata de ficheros de nivel medio o alto, en cuyo caso las obligaciones del responsable del fichero pasan al responsable de seguridad";
 answers[77] = choices[77][2];
 units[77] = "29";
 comments[77] = "Id Pregunta: 10269. Art&iacute;culo 95 del RD 1720/2007";


//  Id pregunta: 10349 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  En relaci&oacute;n con el mecanismo de protecci&oacute;n de derechos de autor por huella digital, &iquest;c&oacute;mo se consigue que los datos del usuario que ha adquirido los derechos de uso del objeto no sean conocidos por el vendedor?";
 choices[78]= new Array();
 choices[78][0] = "Mediante el uso de https para asegurar la privacidad de la comunicaci&oacute;n";
 choices[78][1] = "Mediante el uso de un sistema de huella digital asim&eacute;trica, que emplea criptograf&iacute;a asim&eacute;trica";
 choices[78][2] = "Mediante el uso de un sistema de huella digital an&oacute;nima, utilizando un tercero de confianza que conoce tanto la identidad del comprador como del vendedor";
 choices[78][3] = "No es posible, el vendedor debe conocer los datos del comprador para poder transmitirle los derechos de uso del objeto";
 answers[78] = choices[78][2];
 units[78] = "37";
 comments[78] = "Id Pregunta: 10349. La huella digital es un mecanismo para defender los derechos de autor y combatir la copia no autorizada de contenidos que consiste en introducir una serie de bits imperceptibles sobre un producto de soporte electr&oacute;nico (CD-ROM, DVD.) de forma que se pueda";


//  Id pregunta: 10523 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  A cu&aacute;l de los siguientes organismos corresponde la gesti&oacute;n del registro de los nombres y direcciones de dominio de internet bajo el c&oacute;digo de pa&iacute;s correspondiente a Espa&ntilde;a (.es):";
 choices[79]= new Array();
 choices[79][0] = "El Gobierno";
 choices[79][1] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[79][2] = "Red.es";
 choices[79][3] = "El Consejo Asesor de las Telecomunicaciones y de la Sociedad de la Informaci&oacute;n";
 answers[79] = choices[79][2];
 units[79] = "110";
 comments[79] = "Id Pregunta: 10523. ";


//  Id pregunta: 10529 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  Ordene los siguientes dispositivos seg&uacute;n velocidad de transferencia, de menor a mayor:";
 choices[80]= new Array();
 choices[80][0] = "FireWire 800 &lt; USB 2.0 &lt; USB 3.0 &lt; Thunderbolt &lt; Thunderbolt 2.0";
 choices[80][1] = "USB 2.0 &lt; FireWire 800 &lt; USB 3.0 &lt; Thunderbolt &lt; Thunderbolt 2.0";
 choices[80][2] = "FireWire 800 &lt; USB 2.0 &lt; Thunderbolt &lt; USB 3.0 &lt; Thunderbolt 2.0";
 choices[80][3] = "USB 2.0 &lt; FireWire 800 &lt; Thunderbolt &lt; USB 3.0 &lt; Thunderbolt 2.0";
 answers[80] = choices[80][1];
 units[80] = "46";
 comments[80] = "Id Pregunta: 10529. NULL";


//  Id pregunta: 10536 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  &iquest;Qu&eacute; es la tecnolog&iacute;a TRIM que emplean los discos duros de estado s&oacute;lido?";
 choices[81]= new Array();
 choices[81][0] = "Permite al disco SSD optimizar el almacenamiento de la informaci&oacute;n, de forma que todos los datos est&eacute;n contiguos, mejorando as&iacute; el rendimiento";
 choices[81][1] = "Permite al sistema operativo comunicarle al disco SSD qu&eacute; celdas no est&aacute;n en uso";
 choices[81][2] = "Permite que el disco SSD entre en hibernaci&oacute;n cuando no se usa, mejorando as&iacute; su vida &uacute;til";
 choices[81][3] = "Permite reducir el ruido y calor generado por el disco SSD, as&iacute; como su consumo energ&eacute;tico";
 answers[81] = choices[81][1];
 units[81] = "48";
 comments[81] = "Id Pregunta: 10536. NULL";


//  Id pregunta: 10723 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  Seg&uacute;n la NTI de Protocolos de intermediaci&oacute;n de datos, dentro del Rol de la Plataforma de intermediaci&oacute;n del Ministerio de Hacienda y Administraciones P&uacute;blicas no se contempla:";
 choices[82]= new Array();
 choices[82][0] = "Gestionar los Cesionarios y Requirentes seg&uacute;n las condiciones establecidas por cada Cedente.";
 choices[82][1] = "Almacenar la informaci&oacute;n personal de cualquier transacci&oacute;n de intercambio de datos.";
 choices[82][2] = "Asegurar la confidencialidad e integridad de la informaci&oacute;n intercambiada a trav&eacute;s de los mecanismos correspondientes.";
 choices[82][3] = "Mantener un portal web informativo con toda la documentaci&oacute;n relativa a la Plataforma.";
 answers[82] = choices[82][1];
 units[82] = "43";
 comments[82] = "Id Pregunta: 10723. ";


//  Id pregunta: 10752 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  &iquest;Cu&aacute;l es el objetivo global de la Estrategia de Ciberseguridad Nacional?";
 choices[83]= new Array();
 choices[83][0] = "Lograr que Espa&ntilde;a haga un uso seguro de los Sistemas de Informaci&oacute;n y Telecomunicaciones, fortaleciendo las capacidades de prevenci&oacute;n, defensa, detecci&oacute;n, y respuesta a los ciberataques.";
 choices[83][1] = "Garantizar que los Sistemas de Informaci&oacute;n y Telecomunicaciones que utilizan las Administraciones P&uacute;blicas poseen el adecuado nivel de ciberseguridad y resiliencia.";
 choices[83][2] = "Potenciar las capacidades de prevenci&oacute;n, detecci&oacute;n, reacci&oacute;n, an&aacute;lisis, recuperaci&oacute;n, respuesta, investigaci&oacute;n y coordinaci&oacute;n frente a las actividades del terrorismo y la delincuencia en el ciberespacio.";
 choices[83][3] = "Alcanzar y mantener los conocimientos, habilidades, experiencia y capacidades tecnol&oacute;gicas que necesita Espa&ntilde;a para sustentar todos los objetivos de ciberseguridad.";
 answers[83] = choices[83][0];
 units[83] = "43";
 comments[83] = "Id Pregunta: 10752. ";


//  Id pregunta: 10875 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  Se&ntilde;ale de los siguientes cu&aacute;l NO es un cliente Subversion para control de versiones:";
 choices[84]= new Array();
 choices[84][0] = "TortoiseCVS";
 choices[84][1] = "Subversive";
 choices[84][2] = "Sventon";
 choices[84][3] = "Subclipse";
 answers[84] = choices[84][0];
 units[84] = "0";
 comments[84] = "Id Pregunta: 10875. Examen GSI 2014";


//  Id pregunta: 10901 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  En el contexto de la web sem&aacute;ntica, se&ntilde;ale la definici&oacute;n correcta de ontolog&iacute;a:";
 choices[85]= new Array();
 choices[85][0] = "Es una especificaci&oacute;n expl&iacute;cita de una conceptualizaci&oacute;n.";
 choices[85][1] = "Es un sistema de clasificaci&oacute;n abierto y/o colaborativo basado en etiquetas.";
 choices[85][2] = "Es un conjunto de nombres en el cual todos los nombres son &uacute;nicos.";
 choices[85][3] = "Es un sistema de clasificaci&oacute;n que permite agrupar un conjunto de elementos dentro de unas categor&iacute;as predefinidas que pueden estar contenidas unas en otras, o relacionadas de cualquier otra manera.";
 answers[85] = choices[85][0];
 units[85] = "0";
 comments[85] = "Id Pregunta: 10901. Examen GSI 2014";


//  Id pregunta: 11150 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l de lo siguientes sistemas de firma electr&oacute;nica utilizan las Administraciones P&uacute;blicas para la actuaci&oacute;n administrativa automatizada, con objeto de su identificaci&oacute;n electr&oacute;nica y para la autenticaci&oacute;n de los documentos electr&oacute;nicos que produzcan?";
 choices[86]= new Array();
 choices[86][0] = "Sello electr&oacute;nico";
 choices[86][1] = "C&oacute;digo seguro de verificaci&oacute;n";
 choices[86][2] = "Todos los anteriores";
 choices[86][3] = "Ninguno de los anteriores";
 answers[86] = choices[86][2];
 units[86] = "73";
 comments[86] = "Id Pregunta: 11150. ";


//  Id pregunta: 11184 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares Wifi incluye WPA2?";
 choices[87]= new Array();
 choices[87][0] = "802.e";
 choices[87][1] = "802.f";
 choices[87][2] = "802.h";
 choices[87][3] = "802.i";
 answers[87] = choices[87][3];
 units[87] = "107";
 comments[87] = "Id Pregunta: 11184. ";


//  Id pregunta: 11258 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  En relaci&oacute;n con los efectos jur&iacute;dicos de las firmas electr&oacute;nicas, indique la respuesta correcta:";
 choices[88]= new Array();
 choices[88][0] = "No se denegar&aacute;n efectos jur&iacute;dicos ni admisibilidad como prueba en procedimientos judiciales a una firma electr&oacute;nica por el mero hecho de ser una firma electr&oacute;nica o porque no cumpla los requisitos de la firma electr&oacute;nica cualificada.";
 choices[88][1] = "Una firma electr&oacute;nica cualificada tendr&aacute; un efecto jur&iacute;dico equivalente al de una firma manuscrita.";
 choices[88][2] = "Una firma electr&oacute;nica b&aacute;sica, como usuario y contrase&ntilde;a, puede ser prueba en juicio.";
 choices[88][3] = "Todas son verdaderas.";
 answers[88] = choices[88][3];
 units[88] = "73";
 comments[88] = "Id Pregunta: 11258. ";


//  Id pregunta: 11361 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;les son los beneficios de la Biblioteca Definitiva de Medios (DML)?:  1. Protecci&oacute;n l&oacute;gica del software y control de licencias; 2. Control del despliegue de las versiones autorizadas; 3. Protecci&oacute;n f&iacute;sica del software";
 choices[89]= new Array();
 choices[89][0] = "Solo 1 y 2";
 choices[89][1] = "Solo 2 y 3";
 choices[89][2] = "Todos";
 choices[89][3] = "Ninguno";
 answers[89] = choices[89][2];
 units[89] = "98";
 comments[89] = "Id Pregunta: 11361. ";


//  Id pregunta: 11377 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de los siguientes atributos debe entregar un servicio de TI a los clientes?";
 choices[90]= new Array();
 choices[90][0] = "Capacidades";
 choices[90][1] = "Coste";
 choices[90][2] = "Riesgo";
 choices[90][3] = "Valor";
 answers[90] = choices[90][3];
 units[90] = "98";
 comments[90] = "Id Pregunta: 11377. ";


//  Id pregunta: 11391 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; proceso es primordialmente responsable de empaquetar, construir, probar y desplegar servicios?";
 choices[91]= new Array();
 choices[91][0] = "Planificaci&oacute;n y soporte a la transici&oacute;n";
 choices[91][1] = "Gesti&oacute;n de versiones y despliegues";
 choices[91][2] = "Gesti&oacute;n de configuraci&oacute;n y activos del servicio";
 choices[91][3] = "Gesti&oacute;n del cat&aacute;logo de servicios";
 answers[91] = choices[91][1];
 units[91] = "98";
 comments[91] = "Id Pregunta: 11391. ";


//  Id pregunta: 11429 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Seg&uacute;n la Ley 9/2014, la aprobaci&oacute;n de los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n:";
 choices[92]= new Array();
 choices[92][0] = "Corresponde al Gobierno, mediante Real Decreto.";
 choices[92][1] = "Corresponde a la CNMC, mediante Resoluci&oacute;n.";
 choices[92][2] = "Corresponde al MINETUR, mediante Real Decreto.";
 choices[92][3] = "Corresponde al Gobierno, mediante Resoluci&oacute;n.";
 answers[92] = choices[92][0];
 units[92] = "110";
 comments[92] = "Id Pregunta: 11429. ";


//  Id pregunta: 11443 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Identifique la respuesta incorrecta sobre derechos del usuario final de la LGT (9/2014):";
 choices[93]= new Array();
 choices[93][0] = "Tiene derecho a celebrar contratos con operadores.";
 choices[93][1] = "Tiene derecho al cambio de operador, con conservaci&oacute;n de los n&uacute;meros.";
 choices[93][2] = "Tiene derecho a una factura en papel, clara y detallada.";
 choices[93][3] = "Tiene derecho a acceder a los servicios de emergencia.";
 answers[93] = choices[93][2];
 units[93] = "110";
 comments[93] = "Id Pregunta: 11443. ";


//  Id pregunta: 11539 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Seg&uacute;n la metodolog&iacute;a m&eacute;trica v3, &iquest;Cu&aacute;l de las siguientes funciones NO le correspondel al Jefe de Proyecto?";
 choices[94]= new Array();
 choices[94][0] = "Seleccionar la estrategia de desarrollo (modelo de ciclo de vida) y determinar los procesos, actividades y tareas que integran el proyecto (mapa de actividades).";
 choices[94][1] = "Ofrecer una opini&oacute;n experta relativa a los requisitos del negocio, t&eacute;cnicos y de usuario que han de tenerse en cuenta en el desarrollo del sistema de informaci&oacute;n.";
 choices[94][2] = "Estimar el esfuerzo necesario para llevar a cabo el proyecto.";
 choices[94][3] = "Le corresponden todas las funciones anteriores.";
 answers[94] = choices[94][1];
 units[94] = "86";
 comments[94] = "Id Pregunta: 11539. La B, son funciones propias del perfil consultor.";


//  Id pregunta: 11542 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  La duraci&oacute;n del camino m&aacute;s corto que hay desde el suceso inicial de un proyecto hasta el suceso &quot;n&quot; que se est&aacute; considerando es:";
 choices[95]= new Array();
 choices[95][0] = "EARLY del suceso &quot;n&quot;";
 choices[95][1] = "LAST del suceso &quot;n&quot;";
 choices[95][2] = "Tiempo de inicio del suceso &quot;n&quot;";
 choices[95][3] = "Ninguna de las anteriores";
 answers[95] = choices[95][3];
 units[95] = "89";
 comments[95] = "Id Pregunta: 11542. Conceptos PERT";


//  Id pregunta: 11635 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  De los siguientes, se&ntilde;ale el peor acoplamiento entre m&oacute;dulos:";
 choices[96]= new Array();
 choices[96][0] = "De contenido";
 choices[96][1] = "Externo";
 choices[96][2] = "De control";
 choices[96][3] = "Normal";
 answers[96] = choices[96][0];
 units[96] = "84";
 comments[96] = "Id Pregunta: 11635. ";


//  Id pregunta: 11637 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Seg&uacute;n M&eacute;trica v3, se&ntilde;ale qui&eacute;n no se encuentra entre los participantes de la actividad de Ejecuci&oacute;n de las pruebas de integraci&oacute;n:";
 choices[97]= new Array();
 choices[97][0] = "Equipo de seguridad";
 choices[97][1] = "Equipo de arquitectura";
 choices[97][2] = "Equipo de proyecto";
 choices[97][3] = "T&eacute;cnicos de comunicaciones";
 answers[97] = choices[97][0];
 units[97] = "86";
 comments[97] = "Id Pregunta: 11637. ";


//  Id pregunta: 11695 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Los mensajes intercambiados entre Bridges en STP se denominan:";
 choices[98]= new Array();
 choices[98][0] = "PDUs";
 choices[98][1] = "PDIs";
 choices[98][2] = "BPDU";
 choices[98][3] = "SPDU";
 answers[98] = choices[98][2];
 units[98] = "102";
 comments[98] = "Id Pregunta: 11695. NULL";


//  Id pregunta: 11705 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Qu&eacute; direcci&oacute;n multicast utiliza RIPng";
 choices[99]= new Array();
 choices[99][0] = "FF02::9";
 choices[99][1] = "FF02::1";
 choices[99][2] = "FF02:A";
 choices[99][3] = "FF02::6";
 answers[99] = choices[99][0];
 units[99] = "102";
 comments[99] = "Id Pregunta: 11705. NULL";


