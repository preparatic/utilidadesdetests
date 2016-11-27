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

//  Id pregunta: 28 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de estos m&eacute;todos no persigue directamente la reducci&oacute;n del TCO?:";
 choices[0]= new Array();
 choices[0][0] = "Inventario";
 choices[0][1] = "Estandarizaci&oacute;n";
 choices[0][2] = "Control de la configuraci&oacute;n";
 choices[0][3] = "Centralizaci&oacute;n";
 answers[0] = choices[0][3];
 units[0] = "25";
 comments[0] = "Id Pregunta: 28. ";


//  Id pregunta: 69 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas compara cada permutaci&oacute;n posible de las alternativas, con la informaci&oacute;n que aporta para cada criterio la matriz de decisi&oacute;n?:";
 choices[1]= new Array();
 choices[1][0] = "M&eacute;todo Promethee";
 choices[1][1] = "Utilidad multiatributo";
 choices[1][2] = "Permutaci&oacute;n";
 choices[1][3] = "Ninguno de los anteriores";
 answers[1] = choices[1][3];
 units[1] = "34";
 comments[1] = "Id Pregunta: 69. NULL";


//  Id pregunta: 148 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  El m&eacute;todo Delphi para la toma de decisiones es un procedimiento basado en:";
 choices[2]= new Array();
 choices[2][0] = "Series hist&oacute;ricas conocidas que permiten predecir el comportamiento futuro";
 choices[2][1] = "C&aacute;lculo de probabilidades de ocurrencia de cada suceso sobre el que se quiere tomar la decisi&oacute;n";
 choices[2][2] = "Consultar la opini&oacute;n de expertos";
 choices[2][3] = "S&oacute;lo se aplica para la realizaci&oacute;n de proyectos y permite identificar las actividades que forman el camino cr&iacute;tico";
 answers[2] = choices[2][2];
 units[2] = "23";
 comments[2] = "Id Pregunta: 148. NULL";


//  Id pregunta: 164 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  El sistema de informaci&oacute;n integrado en una organizaci&oacute;n debe tener unos objetivos. &iquest;Cu&aacute;l no ser&iacute;a exactamente uno de ellos?:";
 choices[3]= new Array();
 choices[3][0] = "Suministrar datos a los distintos niveles de la direcci&oacute;n";
 choices[3][1] = "Permitir la realizaci&oacute;n de los objetivos de la organizaci&oacute;n";
 choices[3][2] = "Extraer ventajas competitivas de su entorno";
 choices[3][3] = "Ayudar a determinar los objetivos de la organizaci&oacute;n";
 answers[3] = choices[3][3];
 units[3] = "21";
 comments[3] = "Id Pregunta: 164. ";


//  Id pregunta: 171 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  En auditor&iacute;a inform&aacute;tica, los controles de salida contienen, entre otros, a:";
 choices[4]= new Array();
 choices[4][0] = "Registro y almacenamiento de formularios negociables";
 choices[4][1] = "Autorizaci&oacute;n de la distribuci&oacute;n";
 choices[4][2] = "Balanceo y conciliaci&oacute;n";
 choices[4][3] = "Todas las anteriores";
 answers[4] = choices[4][3];
 units[4] = "31,32,33";
 comments[4] = "Id Pregunta: 171. ";


//  Id pregunta: 175 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  En el &aacute;mbito de la evoluci&oacute;n de la inform&aacute;tica en las organizaciones, se debe a Donovan un modelo que utiliza como variable:";
 choices[5]= new Array();
 choices[5][0] = "El presupuesto empleado en inform&aacute;tica";
 choices[5][1] = "La estructura organizativa";
 choices[5][2] = "El grado de distribuci&oacute;n";
 choices[5][3] = "El nivel de complejidad organizativa";
 answers[5] = choices[5][2];
 units[5] = "22";
 comments[5] = "Id Pregunta: 175. donovan - nolan";


//  Id pregunta: 201 AÃ±o de creación de pregunta: 2004-01-01
 questions[6]= "7)  &iquest;Cu&aacute;l de los siguientes estandares de directorios guarda relaci&oacute;n con la descripci&oacute;n de servicios de usuario?";
 choices[6]= new Array();
 choices[6][0] = "x.500";
 choices[6][1] = "x.501";
 choices[6][2] = "x.509";
 choices[6][3] = "x.511";
 answers[6] = choices[6][3];
 units[6] = "42";
 comments[6] = "Id Pregunta: 201. Examen Julio 2003";


//  Id pregunta: 213 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  En la estructura de un sistema de informaci&oacute;n:";
 choices[7]= new Array();
 choices[7][0] = "En la dimensi&oacute;n vertical las funciones se subdividen en aplicaciones o procedimientos";
 choices[7][1] = "En la dimensi&oacute;n horizontal las funciones se subdividen en aplicaciones o procedimientos";
 choices[7][2] = "La dimensi&oacute;n vertical se subdivide en los niveles operacional, t&aacute;ctico y estrat&eacute;gico";
 choices[7][3] = "Las respuestas &lsquo;b&rsquo; y &lsquo;c&rsquo; son correctas";
 answers[7] = choices[7][3];
 units[7] = "21";
 comments[7] = "Id Pregunta: 213. ";


//  Id pregunta: 218 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  En la metodolog&iacute;a MAGERIT, la actividad &quot;Interpretaci&oacute;n del Riesgo&quot; corresponde a la etapa de:";
 choices[8]= new Array();
 choices[8][0] = "Planificaci&oacute;n";
 choices[8][1] = "An&aacute;lisis de riesgos";
 choices[8][2] = "Gesti&oacute;n de riesgos";
 choices[8][3] = "Selecci&oacute;n de salvaguardas";
 answers[8] = choices[8][2];
 units[8] = "33";
 comments[8] = "Id Pregunta: 218. ";


//  Id pregunta: 219 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  En la metodolog&iacute;a MAGERIT, se define vulnerabilidad como:";
 choices[9]= new Array();
 choices[9][0] = "El da&ntilde;o producido a la organizaci&oacute;n por un posible incidente";
 choices[9][1] = "La posibilidad de que se produzca un impacto dado en la organizaci&oacute;n";
 choices[9][2] = "Cualquier activo del sistema";
 choices[9][3] = "La posibilidad de ocurrencia de materializaci&oacute;n de una amenaza sobre un activo";
 answers[9] = choices[9][3];
 units[9] = "33";
 comments[9] = "Id Pregunta: 219. ";


//  Id pregunta: 227 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  En las alternativas de decisi&oacute;n respecto al equipamiento HW y SW: ";
 choices[10]= new Array();
 choices[10][0] = "En la licencia de red, la cesi&oacute;n de uso del producto se extiende a todos o parte de los usuarios conectados a una red de &aacute;rea local";
 choices[10][1] = "La licencia flotante se refiere a la determinaci&oacute;n de la facturaci&oacute;n en funci&oacute;n del n&uacute;mero de usuarios simult&aacute;neos autorizados al uso del producto";
 choices[10][2] = "Las opciones a) y b) son correctas";
 choices[10][3] = "Las opciones a) y b) no son correctas";
 answers[10] = choices[10][2];
 units[10] = "35";
 comments[10] = "Id Pregunta: 227. NULL";


//  Id pregunta: 263 AÃ±o de creación de pregunta: 2009-01-01
 questions[11]= "12)  Indicar cu&aacute;l de las siguientes afirmaciones es cierta en el &aacute;mbito de la LOPD:";
 choices[11]= new Array();
 choices[11][0] = "La normativa de protecci&oacute;n de datos es aplicable s&oacute;lo a ficheros automatizados que contengan datos personales de personas f&iacute;sicas";
 choices[11][1] = "La normativa de protecci&oacute;n de datos es aplicable tanto a ficheros automatizados como no automatizados que contengan datos de car&aacute;cter personal";
 choices[11][2] = "La normativa de protecci&oacute;n de datos no es aplicable a personas f&iacute;sicas ni jur&iacute;dicas";
 choices[11][3] = "&quot;b&quot; y &quot;c&quot; son ciertas";
 answers[11] = choices[11][1];
 units[11] = "29";
 comments[11] = "Id Pregunta: 263. ";


//  Id pregunta: 266 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Indicar cu&aacute;l de los siguientes no es uno de los objetivos de la Decisi&oacute;n 87/95/CEE:";
 choices[12]= new Array();
 choices[12][0] = "Contribuir a la integraci&oacute;n del mercado interior de la Comunidad en el sector de las tecnolog&iacute;as de la informaci&oacute;n y de las telecomunicaciones";
 choices[12][1] = "Facilitar los intercambios de informaci&oacute;n en toda la Comunidad";
 choices[12][2] = "Garantizar que se tomen en cuenta las necesidades de los usuarios";
 choices[12][3] = "Todos los anteriores son objetivos de la Decisi&oacute;n 87/95/CEE";
 answers[12] = choices[12][3];
 units[12] = "40";
 comments[12] = "Id Pregunta: 266. ";


//  Id pregunta: 269 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Indicar la afirmaci&oacute;n que no corresponde entre los objetivos fundamentales de un DSS orientado a datos:";
 choices[13]= new Array();
 choices[13][0] = "Presentar al usuario una informaci&oacute;n seleccionada para la toma de decisiones";
 choices[13][1] = "Confrontar m&uacute;ltiples criterios de decisi&oacute;n y buscar un modelo en el sistema para predecir las consecuencias de una acci&oacute;n propuesta";
 choices[13][2] = "Facilitar el conocimiento estructural del problema que permite el posterior desarrollo de un modelo formal de decisi&oacute;n";
 choices[13][3] = "Proporcionar un medio f&aacute;cil al usuario para jugar con los datos";
 answers[13] = choices[13][1];
 units[13] = "21";
 comments[13] = "Id Pregunta: 269. ";


//  Id pregunta: 292 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  La decisi&oacute;n sobre si la estructura inform&aacute;tica de una organizaci&oacute;n debe ser centralizada o descentralizada, debe tomarse en la etapa de:";
 choices[14]= new Array();
 choices[14][0] = "Planificaci&oacute;n del sistema";
 choices[14][1] = "Especificaci&oacute;n del sistema";
 choices[14][2] = "Dise&ntilde;o del sistema";
 choices[14][3] = "Codificaci&oacute;n del sistema";
 answers[14] = choices[14][0];
 units[14] = "21";
 comments[14] = "Id Pregunta: 292. ";


//  Id pregunta: 297 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  La directiva 91/250/CEE, modificada por la 93/98/CEE, del Consejo, relativa a la protecci&oacute;n jur&iacute;dica de programas de ordenador:";
 choices[15]= new Array();
 choices[15][0] = "Excluye expl&iacute;citamente aquellos desarrollos sobre plataformas Linux, shareware o software libre";
 choices[15][1] = "Establece que los programas deber&aacute;n protegerse de la misma manera que las obras literarias, con arreglo a lo establecido en el convenio de Berna sobre protecci&oacute;n de obras literarias y art&iacute;sticas";
 choices[15][2] = "Regula aquellos aspectos del comercio electr&oacute;nico relacionados con la materia de propiedad intelectual";
 choices[15][3] = "Crea un nuevo t&iacute;tulo de propiedad industrial &quot;patente comunitaria&quot; para eliminar las distorsiones del mercado interior y permitir que Europa se aproveche al m&aacute;ximo de sus trabajos de investigaci&oacute;n";
 answers[15] = choices[15][1];
 units[15] = "37";
 comments[15] = "Id Pregunta: 297. ";


//  Id pregunta: 309 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  La gu&iacute;a XPG 4 de X/OPEN apareci&oacute; en:";
 choices[16]= new Array();
 choices[16][0] = "1989";
 choices[16][1] = "1990";
 choices[16][2] = "1991";
 choices[16][3] = "1992";
 answers[16] = choices[16][3];
 units[16] = "40";
 comments[16] = "Id Pregunta: 309. XPG";


//  Id pregunta: 355 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Las Comunidades Aut&oacute;nomas pueden crear organismos similares a la Agencia de Protecci&oacute;n de Datos que:";
 choices[17]= new Array();
 choices[17][0] = "Tendr&aacute;n competencias &uacute;nicamente sobre los ficheros de datos de car&aacute;cter personal, creados o gestionados por las CC.AA.";
 choices[17][1] = "Tendr&aacute;n competencias sobre los ficheros de datos de car&aacute;cter personal creados o gestionados por las CCAA y por la Administraci&oacute;n local de su &aacute;mbito territorial";
 choices[17][2] = "S&oacute;lo tendr&aacute;n competencias sobre los ficheros de datos de car&aacute;cter personal creados por la Administraci&oacute;n local de su &aacute;mbito territorial si lo autoriza el Director de la Agencia de Protecci&oacute;n de Datos";
 choices[17][3] = "Las CCAA no pueden crear organismos similares a la Agencia de Protecci&oacute;n de Datos";
 answers[17] = choices[17][1];
 units[17] = "29";
 comments[17] = "Id Pregunta: 355. ";


//  Id pregunta: 360 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Las siglas D.S.S. responden por:";
 choices[18]= new Array();
 choices[18][0] = "Design Software System";
 choices[18][1] = "Development  Software System";
 choices[18][2] = "Decision Support System";
 choices[18][3] = "Development Support System";
 answers[18] = choices[18][2];
 units[18] = "21";
 comments[18] = "Id Pregunta: 360. ";


//  Id pregunta: 376 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Los sistemas de ayuda a la decisi&oacute;n orientados a datos se caracterizan por:";
 choices[19]= new Array();
 choices[19][0] = "Proporcionar un medio f&aacute;cil al usuario para &quot;jugar con los datos&quot;";
 choices[19][1] = "Facilitar el conocimiento estructural del problema que permita el desarrollo de un modelo formal de decisi&oacute;n";
 choices[19][2] = "Presentar al usuario una informaci&oacute;n relacionada para la toma de decisiones";
 choices[19][3] = "Ser m&aacute;s caros que los sistemas de ayuda a la decisi&oacute;n orientados a modelos";
 answers[19] = choices[19][3];
 units[19] = "21";
 comments[19] = "Id Pregunta: 376. ";


//  Id pregunta: 399 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Quienes se dediquen a la prestaci&oacute;n de servicios de informaci&oacute;n sobre solvencia patrimonial y el cr&eacute;dito:";
 choices[20]= new Array();
 choices[20][0] = "Podr&aacute;n tratar datos de car&aacute;cter personal relativos al cumplimiento o inclumplimiento de obligaciones dinerarias facilitados por el acreedor o por quien act&uacute;e por su cuenta o inter&eacute;s";
 choices[20][1] = "S&oacute;lo podr&aacute;n tratar datos de car&aacute;cter personal obtenidos de los registros y las fuentes accesibles al p&uacute;blico";
 choices[20][2] = "S&oacute;lo podr&aacute;n tratar datos de car&aacute;cter personal procedentes de informaciones facilitadas por el interesado o con su consentimiento";
 choices[20][3] = "No podr&aacute;n registrar o ceder datos de car&aacute;cter personal que sean determinantes para enjuiciar la solvencia econ&oacute;mica de los interesados";
 answers[20] = choices[20][0];
 units[20] = "29";
 comments[20] = "Id Pregunta: 399. ";


//  Id pregunta: 408 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Respecto al derecho de acceso, la Ley Org&aacute;nica de Protecci&oacute;n de Datos indica:";
 choices[21]= new Array();
 choices[21][0] = "El interesado tendr&aacute; derecho a solicitar y obtener, previo pago de los gastos incurridos,  informaci&oacute;n de sus datos de car&aacute;cter personal sometidos a tratamiento, el origen de dichos datos, as&iacute; como las comunicaciones realizadas o que se prev&eacute;n hacer";
 choices[21][1] = "La informaci&oacute;n podr&aacute; obtenerse mediante la mera consulta de los datos por medio de su visualizaci&oacute;n, o la indicaci&oacute;n de los datos que son objeto de tratamiento mediante escrito, copia o fotocopia, certificada o no, en forma legible e inteligible";
 choices[21][2] = "El derecho de acceso a que se refiere este art&iacute;culo s&oacute;lo podr&aacute; ser ejercitado a intervalos no inferiores a doce meses, salvo que el interesado acredite un inter&eacute;s leg&iacute;timo al efecto, en cuyo caso podr&aacute;n ejercitarlo cada 6 meses";
 choices[21][3] = "El derecho de acceso s&oacute;lo podr&aacute; ejercerse cuando as&iacute; lo autorice el Director de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos";
 answers[21] = choices[21][1];
 units[21] = "29";
 comments[21] = "Id Pregunta: 408. ";


//  Id pregunta: 413 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Respecto de la Agencia de Protecci&oacute;n de Datos, es falso que:";
 choices[22]= new Array();
 choices[22][0] = "Su consejo consultivo haya contado inicialmente con 9 miembros";
 choices[22][1] = "Que los inspectores de datos tengan la consideraci&oacute;n de autoridad p&uacute;blica en el desempe&ntilde;o de sus funciones";
 choices[22][2] = "Que los c&oacute;digos tipo deban ser inscritos en el Registro General de Protecci&oacute;n de Datos";
 choices[22][3] = "Que sea necesaria la autorizaci&oacute;n del Director de la Agencia para toda transferencia internacional de datos de car&aacute;cter personal mediante tratamientos automatizados";
 answers[22] = choices[22][3];
 units[22] = "29";
 comments[22] = "Id Pregunta: 413. ";


//  Id pregunta: 419 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Se entiende por disponibilidad de la informaci&oacute;n:";
 choices[23]= new Array();
 choices[23][0] = "La informaci&oacute;n utilizada ser&aacute; la &uacute;ltima, exacta, autorizada y completa";
 choices[23][1] = "Que cada persona acceder&aacute; &uacute;nicamente a la que le corresponda";
 choices[23][2] = "El sistema estar&aacute; operativo en todo momento";
 choices[23][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;c&rsquo; son correctas";
 answers[23] = choices[23][2];
 units[23] = "33";
 comments[23] = "Id Pregunta: 419. ";


//  Id pregunta: 424 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Seg&uacute;n el Convenio para la Protecci&oacute;n de las personas con respecto al tratamiento automatizado de los datos de car&aacute;cter personal elaborado por el Consejo de Europa, el principio de finalidad corresponde a:";
 choices[24]= new Array();
 choices[24][0] = "Los datos se obtendr&aacute;n y tratar&aacute;n leal y leg&iacute;timamente";
 choices[24][1] = "Los datos se registrar&aacute;n para objetivos determinados y leg&iacute;timos y no se utilizar&aacute;n de forma incompatible con su finalidad";
 choices[24][2] = "Los datos ser&aacute;n adecuados y no exceder&aacute;n de las finalidades para las que se ha registrado.";
 choices[24][3] = "Se conservar&aacute;n s&oacute;lo el tiempo estrictamente necesario para su finalidad";
 answers[24] = choices[24][1];
 units[24] = "29";
 comments[24] = "Id Pregunta: 424. ";


//  Id pregunta: 498 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  El Director de la Agencia de Protecci&oacute;n de Datos, respecto al movimiento internacional de datos, puede: ";
 choices[25]= new Array();
 choices[25][0] = "Permitir el movimiento de datos a otros pa&iacute;ses sin garant&iacute;a de protecci&oacute;n de datos";
 choices[25][1] = "Permitir el movimiento de datos a otros pa&iacute;ses sin el mismo nivel garant&iacute;a de protecci&oacute;n de datos a discreci&oacute;n";
 choices[25][2] = "Permitir el movimiento de datos a otros pa&iacute;ses sin el mismo nivel garant&iacute;a de protecci&oacute;n de datos";
 choices[25][3] = "No puede permitir el movimiento internacional de datos a pa&iacute;ses con un nivel inferior de garant&iacute;a de protecci&oacute;n de datos.";
 answers[25] = choices[25][2];
 units[25] = "29";
 comments[25] = "Id Pregunta: 498. NULL";


//  Id pregunta: 522 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  Las medidas de seguridad l&oacute;gica para datos de car&aacute;cter personal caracterizadas como de nivel Medio:";
 choices[26]= new Array();
 choices[26][0] = "Requieren la existencia de registros de los accesos a los ficheros o tablas que contienen la informaci&oacute;n.";
 choices[26][1] = "La responsabilidad de los registros de acceso esta bajo control del Responsable de seguridad y existen mecanismos de control para verificar que el registro esta activo y que no haya saltos temporales.";
 choices[26][2] = "No se utilizan cuentas gen&eacute;ricas para entrar al sistema.";
 choices[26][3] = "Utiliza t&eacute;cnicas de encriptaci&oacute;n en las comunicaciones de datos.";
 answers[26] = choices[26][2];
 units[26] = "29";
 comments[26] = "Id Pregunta: 522. Junta Andaluc&iacute;a";


//  Id pregunta: 529 AÃ±o de creación de pregunta: 2004-01-01
 questions[27]= "28)  &iquest;Cual de los siguientes es un control de acceso f&iacute;sico?";
 choices[27]= new Array();
 choices[27][0] = "Etiquetado de soportes en cinta";
 choices[27][1] = "Uso de clave de por teclado para entrar al CPD";
 choices[27][2] = "Contrase&ntilde;as para uso de aplicaciones, renovadas peri&oacute;dicamente";
 choices[27][3] = "Todas";
 answers[27] = choices[27][1];
 units[27] = "31, 32, 33";
 comments[27] = "Id Pregunta: 529. Auditor&iacute;a Inform&aacute;tica";


//  Id pregunta: 537 AÃ±o de creación de pregunta: 2004-01-01
 questions[28]= "29)  El desarrollo de una Pol&iacute;tica de Seguridad de los Sistemas de Informaci&oacute;n es responsabilidad de:";
 choices[28]= new Array();
 choices[28][0] = "Departamento de Inform&aacute;tica";
 choices[28][1] = "Comit&eacute; de Seguridad";
 choices[28][2] = "Administrador de seguridad";
 choices[28][3] = "Alta Direcci&oacute;n";
 answers[28] = choices[28][3];
 units[28] = "26";
 comments[28] = "Id Pregunta: 537. ";


//  Id pregunta: 549 AÃ±o de creación de pregunta: 2004-01-01
 questions[29]= "30)  Las metodolog&iacute;as desarrolladas y utilizadas en la auditoria y el control inform&aacute;ticos se pueden agrupar en las siguientes familias:";
 choices[29]= new Array();
 choices[29][0] = "Internas, externas y mixtas";
 choices[29][1] = "De datos y de aplicaciones";
 choices[29][2] = "Cuantitativas y cualitativas";
 choices[29][3] = "Basadas en modelos, formales y mixtas";
 answers[29] = choices[29][2];
 units[29] = "31, 32, 33";
 comments[29] = "Id Pregunta: 549. ";


//  Id pregunta: 595 AÃ±o de creación de pregunta: 2006-01-01
 questions[30]= "31)  Los ficheros de titularidad p&uacute;blica se encuentran regulados en:";
 choices[30]= new Array();
 choices[30][0] = "En el cap&iacute;tulo I del T&iacute;tulo IV de la LOPD";
 choices[30][1] = "En el cap&iacute;tulo II del T&iacute;tulo IV de la LOPD";
 choices[30][2] = "En el cap&iacute;tulo I del T&iacute;tulo VI de la LOPD";
 choices[30][3] = "En el cap&iacute;tulo II del T&iacute;tulo VI de la LOPD";
 answers[30] = choices[30][0];
 units[30] = "29";
 comments[30] = "Id Pregunta: 595. ";


//  Id pregunta: 605 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  El art. 11 del Estatuto establece la estructura org&aacute;nica de la Agencia enumerando los siguientes &oacute;rganos:";
 choices[31]= new Array();
 choices[31][0] = "El Director de la Agencia de Protecci&oacute;n de Datos,el Consejo Consultivo, el Registro General de Protecci&oacute;n de Datos, la Inspecci&oacute;n de Datos y la Secretar&iacute;a General.";
 choices[31][1] = "El Director de la Agencia de Protecci&oacute;n de Datos,el Comite Consultivo, el Registro General de Protecci&oacute;n de Datos, la Inspecci&oacute;n de Datos y la Subsecretar&iacute;a General.";
 choices[31][2] = "El Director de la Agencia de Protecci&oacute;n de Datos,el Comite Consultivo, el Registro General de Protecci&oacute;n de Datos, la Inspecci&oacute;n de Datos y la Secretar&iacute;a General.";
 choices[31][3] = "El Director de la Agencia de Protecci&oacute;n de Datos,el Consejo Consultivo, el Registro General de Protecci&oacute;n de Datos, la Inspecci&oacute;n de Datos y la Subsecretar&iacute;a General.";
 answers[31] = choices[31][0];
 units[31] = "29";
 comments[31] = "Id Pregunta: 605. ";


//  Id pregunta: 632 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  Cu&aacute;l de las siguientes t&eacute;cnicas no persigue la comprobaci&oacute;n o el control de la legalidad del Software:";
 choices[32]= new Array();
 choices[32][0] = "DRM (Digital Rigths Management).";
 choices[32][1] = "CRM (Copyright Rights Management).";
 choices[32][2] = "Marcas de Agua.";
 choices[32][3] = "TPM (Technical Protection Measures).";
 answers[32] = choices[32][1];
 units[32] = "37";
 comments[32] = "Id Pregunta: 632. ";


//  Id pregunta: 636 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  Respecto a los tipos de m&eacute;todos para analizar la rentabilidad de las inversiones, la respuesta correcta es:";
 choices[33]= new Array();
 choices[33][0] = "Se clasifican en m&eacute;todos tangibles e intangibles.";
 choices[33][1] = "Se clasifican en m&eacute;todos anal&iacute;ticos y cualitativos.";
 choices[33][2] = "Los m&eacute;todos din&aacute;micos tienen en cuenta la inflaci&oacute;n, y los m&eacute;todos est&aacute;ticos no.";
 choices[33][3] = "Los m&eacute;todos din&aacute;micos son los que tienen en cuenta el cambio de valor del dinero con el tiempo.";
 answers[33] = choices[33][3];
 units[33] = "38";
 comments[33] = "Id Pregunta: 636. ";


//  Id pregunta: 4332 AÃ±o de creación de pregunta: 2007-01-01
 questions[34]= "35)  Una entidad estatal emplea a 3.000 personas (250 en el departamento TIC), gestiona un presupuesto de gastos de 1.000 millones de Euros, tiene una base de datos central de 4.000 millones de registros, y registra un volumen de 45 millones de transacciones anuales. Una autoevaluaci&oacute;n de riesgos realizada recientemente ha concluido en la necesidad de establecer una unidad/funci&oacute;n de auditor&iacute;a inform&aacute;tica. La ubicaci&oacute;n org&aacute;nica m&aacute;s adecuada de esta nueva unidad ser&iacute;a:";
 choices[34]= new Array();
 choices[34][0] = "Dentro del Departamento TIC, en dependencia directa del Director de Sistemas de Informaci&oacute;n.";
 choices[34][1] = "Dentro del Departamento TIC, dependiendo del Administrador Corporativo de Seguridad.";
 choices[34][2] = "Dentro de la Unidad de Auditor&iacute;a Interna.";
 choices[34][3] = "Dentro de la Secretar&iacute;a General o unidad de servicios generales.";
 answers[34] = choices[34][2];
 units[34] = "";
 comments[34] = "Id Pregunta: 4332. ";


//  Id pregunta: 4507 AÃ±o de creación de pregunta: 2007-01-01
 questions[35]= "36)  &iquest;Cuanto tiempo duraran los derechos de explotaci&oacute;n de una obra?";
 choices[35]= new Array();
 choices[35][0] = "Hasta la muerte de su autor";
 choices[35][1] = "Setenta anos despu&eacute;s de la fecha de divulgaci&oacute;n";
 choices[35][2] = "Toda la vida de su autor y setenta anos despu&eacute;s de su muerte";
 choices[35][3] = "Los derechos de explotaci&oacute;n de una obra nunca se extinguen";
 answers[35] = choices[35][2];
 units[35] = "36";
 comments[35] = "Id Pregunta: 4507. ";


//  Id pregunta: 4699 AÃ±o de creación de pregunta: 2007-01-01
 questions[36]= "37)  IEFT (Internet Engineering Task Force) se encarga de:";
 choices[36]= new Array();
 choices[36][0] = "Coordinaci&oacute;n entre organizaciones como IEFT, IANA, etc.";
 choices[36][1] = "Asignaci&oacute;n de recursos";
 choices[36][2] = "La supervisi&oacute;n y aprobaci&oacute;n de normas";
 choices[36][3] = "Especificaci&oacute;n de est&aacute;ndares.";
 answers[36] = choices[36][3];
 units[36] = "42";
 comments[36] = "Id Pregunta: 4699. Examen 2006 JCYL";


//  Id pregunta: 5117 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  Las normas internacionales en materia de Seguridad de la informaci&oacute;n las publica:";
 choices[37]= new Array();
 choices[37][0] = "AENOR";
 choices[37][1] = "ISO";
 choices[37][2] = "EIC";
 choices[37][3] = "NIS";
 answers[37] = choices[37][1];
 units[37] = "42";
 comments[37] = "Id Pregunta: 5117. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5654 AÃ±o de creación de pregunta: 2003-01-01
 questions[38]= "39)  Seg&uacute;n el RD 1720/2007, a partir de que nivel de seguridad deber&aacute; conservarse una copia de respaldo de los datos y de los procedimientos de recuperaci&oacute;n, en un lugar diferente de aquel en que se encuentran los equipos inform&aacute;ticas que los tratan:";
 choices[38]= new Array();
 choices[38][0] = "nivel b&aacute;sico";
 choices[38][1] = "nivel medio";
 choices[38][2] = "nivel alto";
 choices[38][3] = "En ningun caso";
 answers[38] = choices[38][2];
 units[38] = "29";
 comments[38] = "Id Pregunta: 5654. ";


//  Id pregunta: 5771 AÃ±o de creación de pregunta: 2009-01-01
 questions[39]= "40)  &iquest;Cu&aacute;l de los siguientes miembros no forma parte el Consejo Consultivo de la A.E.P.D.?";
 choices[39]= new Array();
 choices[39][0] = "Un Diputado, propuesto por el Congreso de los Diputados";
 choices[39][1] = "Un Senador propuesto por el Senado";
 choices[39][2] = "Un miembro de la Real Academia de la Lengua propuesto por la misma";
 choices[39][3] = "Un miembro de la Real Academia de la Historia propuesto por la misma";
 answers[39] = choices[39][2];
 units[39] = "29";
 comments[39] = "Id Pregunta: 5771. ";


//  Id pregunta: 5793 AÃ±o de creación de pregunta: 2009-01-01
 questions[40]= "41)  De acuerdo con la Ley 11/2007 de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, se&ntilde;ale cu&aacute;l de las siguientes definiciones es FALSA:";
 choices[40]= new Array();
 choices[40][0] = "Actuaci&oacute;n administrativa automatizada: Actuaci&oacute;n administrativa producida por un Sistema de informaci&oacute;n adecuadamente programado sin necesidad de intervenci&oacute;n de una persona f&iacute;sica en cada caso singular. Incluye la producci&oacute;n de actos de tr&aacute;mite o resolutorios de procedimientos, as&iacute; como de meros actos de comunicaci&oacute;n.";
 choices[40][1] = "Aplicaci&oacute;n: Programa o conjunto de programas cuyo objeto es la resoluci&oacute;n de un problema mediante el uso de inform&aacute;tica.";
 choices[40][2] = "Aplicaci&oacute;n de fuentes abiertas: Aquella que se distribuye con una licencia que permite la libertad de ejecutarla, de conocer el c&oacute;digo fuente, de modificarla o mejorarla y de redistribuir copias a otros";
 choices[40][3] = "Autenticaci&oacute;n: Capacidad de los sistemas de informaci&oacute;n, y por ende de los procedimientos a los que &eacute;stos dan soporte, de compartir datos y posibilitar el intercambio de informaci&oacute;n y conocimiento entre ellos.";
 answers[40] = choices[40][3];
 units[40] = "43";
 comments[40] = "Id Pregunta: 5793. MAP 2008 A2";


//  Id pregunta: 5832 AÃ±o de creación de pregunta: 2009-01-01
 questions[41]= "42)  BSA es:";
 choices[41]= new Array();
 choices[41][0] = "Una organizaci&oacute;n que mide la accesibilidad de las Web";
 choices[41][1] = "Una organizaci&oacute;n que audita las comunicaciones y el flujo de informaci&oacute;n eficiente";
 choices[41][2] = "Una organizaci&oacute;n que intenta controlar la pirater&iacute;a de software";
 choices[41][3] = "Una organizaci&oacute;n que audita la seguridad de datos de un CPD de respaldo";
 answers[41] = choices[41][2];
 units[41] = "37";
 comments[41] = "Id Pregunta: 5832. MAP 2008 A1";


//  Id pregunta: 5869 AÃ±o de creación de pregunta: 2009-01-01
 questions[42]= "43)  Las p&aacute;ginas de internet de las administraciones p&uacute;blicas o con financiaci&oacute;n p&uacute;blica existentes a la entrada en vigor del RD 1494/2007 por el que se aprueba el Reglamento sobre las condiciones b&aacute;sicas para el acceso de las personas con discapacidad a las tecnolog&iacute;as de la informaci&oacute;n, deben adaptarse a la norma:";
 choices[42]= new Array();
 choices[42][0] = "Tres meses desde la entrada en vigor del RD.";
 choices[42][1] = "Seis meses desde la entrada en vigor del RD.";
 choices[42][2] = "El d&iacute;a de entrada en vigor del RD.";
 choices[42][3] = "Antes del 31 de diciembre de 2008";
 answers[42] = choices[42][1];
 units[42] = "39";
 comments[42] = "Id Pregunta: 5869. MAP 2008 A1";


//  Id pregunta: 6007 AÃ±o de creación de pregunta: 2010-01-01
 questions[43]= "44)  La accesibilidad universal:";
 choices[43]= new Array();
 choices[43][0] = "Es un principio recogido y definido en la legislaci&oacute;n espa&ntilde;ola.";
 choices[43][1] = "Es un t&eacute;rmino utilizado en la documentaci&oacute;n sobre accesibilidad, pero no tiene una definici&oacute;n formal en Espa&ntilde;a.";
 choices[43][2] = "Se trata de un concepto que s&oacute;lo se aplica a las personas del medio rural.";
 choices[43][3] = "Es un concepto equivalente a la definici&oacute;n de usabilidad que se da en la ISO/IEC 9241.";
 answers[43] = choices[43][0];
 units[43] = "39";
 comments[43] = "Id Pregunta: 6007. TIC A 2009";


//  Id pregunta: 6075 AÃ±o de creación de pregunta: 2010-01-01
 questions[44]= "45)  &iquest;Cu&aacute;les son los subsistemas que integran fundamentalmente la direcci&oacute;n de proyectos?";
 choices[44]= new Array();
 choices[44][0] = "Planificaci&oacute;n, organizaci&oacute;n, control, informaci&oacute;n, tecnolog&iacute;a, y cultura de la empresa.";
 choices[44][1] = "Planificaci&oacute;n, Organizaci&oacute;n, Control, Documentaci&oacute;n, Tecnolog&iacute;a y Cultura de la Empresa.";
 choices[44][2] = "Planificaci&oacute;n, gesti&oacute;n, control, informaci&oacute;n, tecnolog&iacute;a y documentaci&oacute;n.";
 choices[44][3] = "Planificaci&oacute;n, organizaci&oacute;n, control, informaci&oacute;n, tecnolog&iacute;a y documentaci&oacute;n.";
 answers[44] = choices[44][0];
 units[44] = "27";
 comments[44] = "Id Pregunta: 6075. ";


//  Id pregunta: 6134 AÃ±o de creación de pregunta: 2010-01-01
 questions[45]= "46)  En relaci&oacute;n con el funcionamiento de un CAU (Centro de Atenci&oacute;n de Usuarios) no es correcto que:";
 choices[45]= new Array();
 choices[45][0] = "Toda llamada que se reciba en el CAU debe quedar registrada como incidencia";
 choices[45][1] = "En el caso que el CAU no pueda resolver la incidencia debe escalarla a un segundo nivel, que se corresponde a otras &aacute;reas del centro TIC";
 choices[45][2] = "Si el segundo nivel no puede resolver la incidencia, escalar&aacute; la incidencia al tercer nivel, compuesto en general por proveedores y empresas de mantenimiento";
 choices[45][3] = "Es responsabilidad de cada uno de los niveles documentar la incidencia, cerrarla y comunicarlo al usuario";
 answers[45] = choices[45][3];
 units[45] = "26";
 comments[45] = "Id Pregunta: 6134. ";


//  Id pregunta: 6150 AÃ±o de creación de pregunta: 2010-01-01
 questions[46]= "47)  &iquest;Cu&aacute;les son algunos modelos de mejora de procesos relacionados con la gesti&oacute;n de la calidad en un proyecto?";
 choices[46]= new Array();
 choices[46][0] = "Malcolm Baldrige, CMM, CMMISM y ASQ.";
 choices[46][1] = "Malcolm Baldrige, AMD y CMMISM.";
 choices[46][2] = "Malcolm Baldrige, CMM, CMMISM y AMD.";
 choices[46][3] = "Malcolm Baldrige, CMM y CMMISM.";
 answers[46] = choices[46][3];
 units[46] = "28";
 comments[46] = "Id Pregunta: 6150. ";


//  Id pregunta: 6388 AÃ±o de creación de pregunta: 2010-01-01
 questions[47]= "48)  En relaci&oacute;n a las sedes electr&oacute;nicas derivadas, o subsedes, se&ntilde;ale la respuesta incorrecta:";
 choices[47]= new Array();
 choices[47][0] = "Las sedes electr&oacute;nicas derivadas, o subsedes, deber&aacute;n resultar accesibles desde la direcci&oacute;n electr&oacute;nica de la sede principal.";
 choices[47][1] = "Las sedes electr&oacute;nicas derivadas, o subsedes podran ser accesibles mediante acceso electr&oacute;nico directo.";
 choices[47][2] = "Su &aacute;mbito de aplicaci&oacute;n comprender&aacute; &oacute;rgano u &oacute;rganos con rango, al menos, de direcci&oacute;n general.";
 choices[47][3] = "Las sedes electr&oacute;nicas derivadas deber&aacute;n cumplir los mismos requisitos que las sedes electr&oacute;nicas principales, salvo en lo relativo a la publicaci&oacute;n de la orden o resoluci&oacute;n por la que se crea, que se realizar&aacute; a trav&eacute;s de la sede de la que dependan.";
 answers[47] = choices[47][2];
 units[47] = "43";
 comments[47] = "Id Pregunta: 6388. Art&iacute;culo 4 RD 1671/2009";


//  Id pregunta: 6413 AÃ±o de creación de pregunta: 2010-01-01
 questions[48]= "49)  El Watermarking es una t&eacute;cnica para comprobar la legalidad del software, &iquest;De qu&eacute; tipo?";
 choices[48]= new Array();
 choices[48][0] = "An&oacute;nima";
 choices[48][1] = "Esteganogr&aacute;fica";
 choices[48][2] = "Asim&eacute;trica";
 choices[48][3] = "Ninguna de las anteriores";
 answers[48] = choices[48][1];
 units[48] = "37";
 comments[48] = "Id Pregunta: 6413. NULL";


//  Id pregunta: 6444 AÃ±o de creación de pregunta: 2010-01-01
 questions[49]= "50)  ETSI NO publica:";
 choices[49]= new Array();
 choices[49][0] = "Normas europeas";
 choices[49][1] = "Normas espa&ntilde;olas";
 choices[49][2] = "Normas armonizadas";
 choices[49][3] = "Publica todas las anteriores";
 answers[49] = choices[49][1];
 units[49] = "42";
 comments[49] = "Id Pregunta: 6444. Similar a Castilla La Mancha 2009";


//  Id pregunta: 6460 AÃ±o de creación de pregunta: 2010-01-01
 questions[50]= "51)  Respecto a los contratos celebrados por v&iacute;a electr&oacute;nica &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[50]= new Array();
 choices[50][0] = "Para que sea v&aacute;lida la celebraci&oacute;n de contratos por v&iacute;a electr&oacute;nica ser&aacute; necesario el previo acuerdo de las partes sobre la utilizaci&oacute;n de medios electr&oacute;nicos";
 choices[50][1] = "Las partes podr&aacute;n pactar que un tercero archive las declaraciones de voluntad que integran los contratos electr&oacute;nicos por un per&iacute;odo inferior a tres a&ntilde;os";
 choices[50][2] = "Siempre que la Ley exija que el contrato o cualquier informaci&oacute;n relacionada con el mismo conste por escrito esta deber&aacute; enviarse por correo ordinario al contratante";
 choices[50][3] = "El soporte electr&oacute;nico en que conste un contrato celebrado por v&iacute;a electr&oacute;nica ser&aacute; admisible en juicio como prueba documental";
 answers[50] = choices[50][3];
 units[50] = "30";
 comments[50] = "Id Pregunta: 6460. Castilla La Mancha 2009 (Ley 34/2002, art&iacute;culo 24)";


//  Id pregunta: 6461 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)  Seg&uacute;n la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los Servicios P&uacute;blicos 'La publicaci&oacute;n de actos y comunicaciones que deban publicarse en tabl&oacute;n de anuncios o edictos':";
 choices[51]= new Array();
 choices[51][0] = "Deber&aacute; ser sustituida por su publicaci&oacute;n en la sede electr&oacute;nica del organismo correspondiente";
 choices[51][1] = "No podr&aacute; ser sustituida por su publicaci&oacute;n en la sede electr&oacute;nica del organismo correspondiente";
 choices[51][2] = "Podr&aacute; ser sustituida o complementada por su publicaci&oacute;n en la sede electr&oacute;nica del organismo correspondiente";
 choices[51][3] = "Deber&aacute; ser complementada con su publicaci&oacute;n en la sede electr&oacute;nica del organismo correspondiente";
 answers[51] = choices[51][2];
 units[51] = "43";
 comments[51] = "Id Pregunta: 6461. Castilla La Mancha 2009";


//  Id pregunta: 7147 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica, &oacute;rgano t&eacute;cnico de cooperaci&oacute;n de la Administraci&oacute;n General del Estado, de las Administraciones de las Comunidades Aut&oacute;nomas y de las entidades que integran la Administraci&oacute;n Local en materia de Administraci&oacute;n Electr&oacute;nica, depende de:";
 choices[52]= new Array();
 choices[52][0] = "La Conferencia Sectorial de Administraci&oacute;n P&uacute;blica";
 choices[52][1] = "El Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[52][2] = "La Direcci&oacute;n General para el Impulso de la Administraci&oacute;n Electr&oacute;nica";
 choices[52][3] = "Del Vicepresidente Tercero del Gobierno y Ministro de Cooperaci&oacute;n Territorial";
 answers[52] = choices[52][0];
 units[52] = "44";
 comments[52] = "Id Pregunta: 7147. Examen TIC B 2009";


//  Id pregunta: 7332 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  El WSC (World Standards Cooperation) est&aacute; formado por";
 choices[53]= new Array();
 choices[53][0] = "ISO/IEC/W3C";
 choices[53][1] = "ISO/CEN";
 choices[53][2] = "CEN/CENELEC/ETSI";
 choices[53][3] = "ISO/IEC/ITU-T";
 answers[53] = choices[53][3];
 units[53] = "42";
 comments[53] = "Id Pregunta: 7332. NULL";


//  Id pregunta: 7771 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)   El Sistema de Soporte a la Decisi&oacute;n SSD-AAPP es una aplicaci&oacute;n inform&aacute;tica dise&ntilde;ada para:";
 choices[54]= new Array();
 choices[54][0] = " Ayudar a la selecci&oacute;n de la mejor oferta posible de entre las obtenidas en cualquier proceso de contrataci&oacute;n p&uacute;blica relacionada con Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones.";
 choices[54][1] = " Ayudar a la selecci&oacute;n de la mejor oferta posible de entre las obtenidas en cualquier proceso de contrataci&oacute;n p&uacute;blica a trav&eacute;s del Cat&aacute;logo de Bienes de Adquisici&oacute;n Centralizada.";
 choices[54][2] = " Ayudar a la selecci&oacute;n de la mejor oferta posible de entre las obtenidas en cualquier proceso de contrataci&oacute;n p&uacute;blica.";
 choices[54][3] = " Ayudar a la selecci&oacute;n de la mejor oferta posible de entre las obtenidas en un proceso de contrataci&oacute;n p&uacute;blica a trav&eacute;s de un procedimiento negociado por exclusividad.";
 answers[54] = choices[54][2];
 units[54] = "44";
 comments[54] = "Id Pregunta: 7771. Map 2005";


//  Id pregunta: 8243 AÃ±o de creación de pregunta: 2011-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes funciones NO corresponde al Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica seg&uacute;n lo recogido en la Ley 11/2007 y modificaciones normativas posteriores?:";
 choices[55]= new Array();
 choices[55][0] = "Asegurar la cooperaci&oacute;n entre las administraciones p&uacute;blicas para proporcionar al ciudadano informaci&oacute;n clara, actualizada e inequivoca.";
 choices[55][1] = "Velar por el cumplimiento de los fines y principios establecidos en la Ley 11/2007";
 choices[55][2] = "Proponer planes programas conjuntos de actuaci&oacute;n para impulsar el desarrollo de la Administraci&oacute;n Electr&oacute;nica en Espa&ntilde;a";
 choices[55][3] = "Aprobar los Cat&aacute;logos de determinaci&oacute;n de tipo referidos a bienes y servicios electr&oacute;nicos.";
 answers[55] = choices[55][3];
 units[55] = "43";
 comments[55] = "Id Pregunta: 8243. Examen TIC A1 2010";


//  Id pregunta: 8370 AÃ±o de creación de pregunta: 2011-01-01
 questions[56]= "57)  La norma UNE 139802:2003 establece requisitos de accesibilidad del software de los ordenadores para !as personas con discapacidad, agrupados en:";
 choices[56]= new Array();
 choices[56][0] = "7 categor&iacute;as: Teclado, dispositivos apuntadores, pantalla, sonido y rnultimedia, notificaci&oacute;n al usuario, informaci&oacute;n de objetos, tiempo.";
 choices[56][1] = "8 categor&iacute;as: Teclado, dispositivos apuntadores, pantalla, sonido y rnultimedia, notificaci&oacute;n al usuario, informaci&oacute;n de objetos, tiempo, documentaci&oacute;n.";
 choices[56][2] = "11 categor&iacute;as: Principios generales, teclado, dispositivos apuntadores, pantalla, sonido, multimedia, notificaci&oacute;n al usuario, informaci&oacute;n de objetos, tiempo, documentaci&oacute;n, otros";
 choices[56][3] = "10 categor&iacute;as: Principios generales, teclado, dispositivos apuntadores, pantalla, sonido y multimedia, notificaci&oacute;n al usuario, informaci&oacute;n de objetos, tiempo, documentaci&oacute;n, otros.";
 answers[56] = choices[56][3];
 units[56] = "39";
 comments[56] = "Id Pregunta: 8370. Examen TIC A2 2010";


//  Id pregunta: 8402 AÃ±o de creación de pregunta: 2011-01-01
 questions[57]= "58)  El directorio de Sedes Electr&oacute;nicas de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos es gestionado por:";
 choices[57]= new Array();
 choices[57][0] = "La Presidencia del Gobierno";
 choices[57][1] = "El Ministerio de la Presidencia.";
 choices[57][2] = "La Red SARA. ";
 choices[57][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[57] = choices[57][1];
 units[57] = "43";
 comments[57] = "Id Pregunta: 8402. Examen TIC A2 2010. Actualizada referencia a CETIC por Disp. Ad. 2&ordf; RD 806/2014.";


//  Id pregunta: 8421 AÃ±o de creación de pregunta: 2011-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de los siguientes responsables no aparece definido en el Esquema Nacional de Seguridad, Real Decreto 3/2010 del 8 de enero?";
 choices[58]= new Array();
 choices[58][0] = "Responsable del fichero";
 choices[58][1] = "Responsable de la informaci&oacute;n";
 choices[58][2] = "Responsable del servicio";
 choices[58][3] = "Responsable de seguridad";
 answers[58] = choices[58][0];
 units[58] = "43";
 comments[58] = "Id Pregunta: 8421. El responsable del fichero es un concepto relacionado con la LOPD.";


//  Id pregunta: 8600 AÃ±o de creación de pregunta: 2011-01-01
 questions[59]= "60)  Con el objetivo de garantizar la calidad en los servicios p&uacute;blicos se ha creado:";
 choices[59]= new Array();
 choices[59][0] = "La Agencia Estatal de Evaluaci&oacute;n de las Pol&iacute;ticas P&uacute;blicas y la Calidad de los Servicios (AEVAL) perteneciente al Ministerio de Presidencia";
 choices[59][1] = "La Direcci&oacute;n General de Aseguramiento de la Calidad e Infraestructuras perteneciente al Ministerio de Industria Turismo y Comercio";
 choices[59][2] = "El Consejo Superior de Aseguramiento de la Calidad e Infraestructuras perteneciente al Ministerio de Presidencia.";
 choices[59][3] = "La Agencia Estatal de Evaluaci&oacute;n de las Pol&iacute;ticas P&uacute;blicas y la Calidad de los Servicios (AEVAL) perteneciente al Ministerio de Pol&iacute;tica Territorial.";
 answers[59] = choices[59][0];
 units[59] = "43";
 comments[59] = "Id Pregunta: 8600. Examen TIC A2 2010 interna";


//  Id pregunta: 8784 AÃ±o de creación de pregunta: 2011-01-01
 questions[60]= "61)  MAGERIT es";
 choices[60]= new Array();
 choices[60][0] = "Una metodolog&iacute;a de An&aacute;lisis y gesti&oacute;n de riesgos de sistemas de informaci&oacute;n.";
 choices[60][1] = "Una metodolog&iacute;a de An&aacute;lisis y gesti&oacute;n de centros de recuperaci&oacute;n de desastres de sistemas de informaci&oacute;n.";
 choices[60][2] = "Una metodolog&iacute;a de An&aacute;lisis y gesti&oacute;n de sistemas de archivo de sistemas de informaci&oacute;n.";
 choices[60][3] = "Una metodolog&iacute;a de An&aacute;lisis y gesti&oacute;n de evaluaci&oacute;n de rendimiento de sistemas de informaci&oacute;n.";
 answers[60] = choices[60][0];
 units[60] = "33";
 comments[60] = "Id Pregunta: 8784. Examen UPM A2 2011";


//  Id pregunta: 8897 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l es la directiva europea vigente relativa al tratamiento de los datos personales?";
 choices[61]= new Array();
 choices[61][0] = "Directiva 95/46/CE";
 choices[61][1] = "Directiva 2006/24/CE";
 choices[61][2] = "Directiva 2002/58/CE";
 choices[61][3] = "Directiva 97/66/CE";
 answers[61] = choices[61][0];
 units[61] = "29";
 comments[61] = "Id Pregunta: 8897. ";


//  Id pregunta: 8941 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  Los certificados de sello electr&oacute;nico contemplados en la ley 18/2011 tendr&aacute;n al menos:";
 choices[62]= new Array();
 choices[62][0] = "N&uacute;mero de identificaci&oacute;n fiscal del suscriptor";
 choices[62][1] = "Actuaciones y documentos en los que podr&aacute;n ser utilizados";
 choices[62][2] = "N&uacute;mero de identificaci&oacute;n judicial";
 choices[62][3] = "Ninguno de los anteriores";
 answers[62] = choices[62][2];
 units[62] = "43";
 comments[62] = "Id Pregunta: 8941. ";


//  Id pregunta: 8946 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l de las siguientes medidas se debe aplicar en un sistema de informaci&oacute;n de categor&iacute;a alta seg&uacute;n el Esquema Nacional de Seguridad?";
 choices[63]= new Array();
 choices[63][0] = "Previsi&oacute;n de la provisi&oacute;n del servicio por medios alternativos en caso de indisponibilidad del servicio contratado";
 choices[63][1] = "Asignar un identificador singular para cada entidad que accede al sistema";
 choices[63][2] = "Cifrado de la  informaci&oacute;n tanto durante su almacenamiento como durante su transmisi&oacute;n";
 choices[63][3] = "Todas las anteriores";
 answers[63] = choices[63][1];
 units[63] = "43";
 comments[63] = "Id Pregunta: 8946. ";


//  Id pregunta: 8948 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  &iquest;En qu&eacute; caso ser&iacute;a suficiente una autoevaluaci&oacute;n como auditor&iacute;a al sistema de informaci&oacute;n seg&uacute;n el RD 3/2010?";
 choices[64]= new Array();
 choices[64][0] = "En sistemas de informaci&oacute;n de categor&iacute;a b&aacute;sica";
 choices[64][1] = "En sistemas de informaci&oacute;n de categor&iacute;a b&aacute;sica o inferior";
 choices[64][2] = "En sistemas de informaci&oacute;n de categor&iacute;a b&aacute;sica o media";
 choices[64][3] = "Cuando as&iacute; lo decida el responsable de seguridad competente";
 answers[64] = choices[64][1];
 units[64] = "43";
 comments[64] = "Id Pregunta: 8948. ";


//  Id pregunta: 9035 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  En qu&eacute; t&iacute;tulo de la ley 11/2007 se habla sobre los registros electr&oacute;nicos";
 choices[65]= new Array();
 choices[65][0] = "T&iacute;tulo I";
 choices[65][1] = "T&iacute;tulo II";
 choices[65][2] = "T&iacute;tulo III";
 choices[65][3] = "T&iacute;tulo IV";
 answers[65] = choices[65][1];
 units[65] = "43";
 comments[65] = "Id Pregunta: 9035. NULL";


//  Id pregunta: 9063 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  De acuedo a la ley 15/1999, la transmisi&oacute;n de los datos a un encargado del tratamiento sin dar cumplimiento a los deberes formales establecidos en el art&iacute;culo 12 de la ley (Acceso a los datos por cuenta de terceros) se considerar&aacute;:";
 choices[66]= new Array();
 choices[66][0] = "Infracci&oacute;n leve";
 choices[66][1] = "Infracci&oacute;n grave";
 choices[66][2] = "Infracci&oacute;n muy grave";
 choices[66][3] = "No se considerar&aacute; infracci&oacute;n";
 answers[66] = choices[66][0];
 units[66] = "29";
 comments[66] = "Id Pregunta: 9063. NULL";


//  Id pregunta: 9292 AÃ±o de creación de pregunta: 2013-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l de los siguientes no es un dominio de control a contemplar en el Plan de Continuidad seg&uacute;n lo establecido por la norma ISO 17799?";
 choices[67]= new Array();
 choices[67][0] = "Clasificaci&oacute;n y control de activos.";
 choices[67][1] = "Est&aacute;ndar de seguridad.";
 choices[67][2] = "Conformidad";
 choices[67][3] = "Desarrollo y mantenimiento de sistemas.";
 answers[67] = choices[67][1];
 units[67] = "32";
 comments[67] = "Id Pregunta: 9292. ";


//  Id pregunta: 9317 AÃ±o de creación de pregunta: 2013-01-01
 questions[68]= "69)  Se&ntilde;ale la falsa";
 choices[68]= new Array();
 choices[68][0] = "La auditor&iacute;a requiere una planificaci&oacute;n a tres niveles: qu&eacute;, cu&aacute;ndo y c&oacute;mo auditar";
 choices[68][1] = "Si el &aacute;rea ya ha sido auditada con anterioridad debe revisarse la documentaci&oacute;n previa";
 choices[68][2] = "Aunque el &aacute;rea ya haya sido auditada con anterioridad es necesario realizar la auditor&iacute;a al completo sin tener en cuenta la documentaci&oacute;n previa pues &eacute;sta puede no ser ya consistente con la situaci&oacute;n actual";
 choices[68][3] = "Una de las ventajas del uso de herramientas de auditor&iacute;a inform&aacute;tica es la disminuci&oacute;n del riesgo propio del proceso de auditor&iacute;a en la recolecci&oacute;n de datos y la mayor independencia";
 answers[68] = choices[68][2];
 units[68] = "31";
 comments[68] = "Id Pregunta: 9317. ";


//  Id pregunta: 9644 AÃ±o de creación de pregunta: 2014-01-01
 questions[69]= "70)  Entre los &oacute;rganos de asistencia, referidos en el RD Legislativo 3/2011, no se encuentra:";
 choices[69]= new Array();
 choices[69][0] = "Jurados de concursos";
 choices[69][1] = "Mesas de contrataci&oacute;n";
 choices[69][2] = "Junta Consultiva de Contrataci&oacute;n Administrativa del Estado";
 choices[69][3] = "Ninguno de los anteriores";
 answers[69] = choices[69][2];
 units[69] = "41";
 comments[69] = "Id Pregunta: 9644. Art. 320, Art. 323 RD Legislativo 3/2011";


//  Id pregunta: 9648 AÃ±o de creación de pregunta: 2014-01-01
 questions[70]= "71)  Una licencia RISP debe reflejar:";
 choices[70]= new Array();
 choices[70][0] = "Finalidad concreta";
 choices[70][1] = "Duraci&oacute;n de la licencia";
 choices[70][2] = "Modalidades financieras";
 choices[70][3] = "Todas las anteriores";
 answers[70] = choices[70][3];
 units[70] = "22";
 comments[70] = "Id Pregunta: 9648. Debe reflejar: finalidad concreta (comercial o no comercial), duraci&oacute;n, obligaciones del beneficiario y del organismo cedente, responsabilidades de uso, modalidades financieras (gratuito, tasa o precio p&uacute;blico)";


//  Id pregunta: 9716 AÃ±o de creación de pregunta: 2014-01-01
 questions[71]= "72)  Dentro del Centro de Transferencia Tecnol&oacute;gica, el Servicio de Oficina Virtual de Registro que permite, entre otros, la remisi&oacute;n de los asientos registrales entre Administraciones P&uacute;blicas, se denomina";
 choices[71]= new Array();
 choices[71][0] = "SIR.";
 choices[71][1] = "ORVE.";
 choices[71][2] = "SICRES 3.0.";
 choices[71][3] = "SVDR.";
 answers[71] = choices[71][1];
 units[71] = "44";
 comments[71] = "Id Pregunta: 9716. Examen TIC-A1 2013";


//  Id pregunta: 9721 AÃ±o de creación de pregunta: 2014-01-01
 questions[72]= "73)  La t&eacute;cnica de protecci&oacute;n de software conocida como marca de agua digital consiste en";
 choices[72]= new Array();
 choices[72][0] = "la inserci&oacute;n de un mensaje en el interior de un objeto digital que contiene informaci&oacute;n sobre el autor o propietario digital de dicho objeto.";
 choices[72][1] = "la generaci&oacute;n de un c&oacute;digo de activaci&oacute;n sin el cual no se puede utilizar una aplicaci&oacute;n.";
 choices[72][2] = "una etiqueta hologr&aacute;fica que ayuda a identificar que el software es original.";
 choices[72][3] = "la gesti&oacute;n de derechos de uso de contenido en formato digital que comprende medidas t&eacute;cnicas y organizativas.";
 answers[72] = choices[72][0];
 units[72] = "37";
 comments[72] = "Id Pregunta: 9721. Examen TIC-A1 2013";


//  Id pregunta: 9749 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  &iquest;En qu&eacute; ley se exige que se establezcan las medidas necesarias para incentivar el acceso a las telecomunicaciones en lengua de signos espa&ntilde;ola?";
 choices[73]= new Array();
 choices[73][0] = "Ley 30/92";
 choices[73][1] = "Ley 27/2007";
 choices[73][2] = "Ley 11/2007";
 choices[73][3] = "Ley 34/2002";
 answers[73] = choices[73][1];
 units[73] = "39";
 comments[73] = "Id Pregunta: 9749. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9758 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  La garant&iacute;a global, seg&uacute;n el RD Legislativo 3/2011:";
 choices[74]= new Array();
 choices[74][0] = "No podr&aacute; superar el 10% del importe de adjudicaci&oacute;n del contrato.";
 choices[74][1] = "Es obligatoria.";
 choices[74][2] = "Se deposita s&oacute;lo una vez y sirve para varias contrataciones.";
 choices[74][3] = "No existe.";
 answers[74] = choices[74][2];
 units[74] = "41";
 comments[74] = "Id Pregunta: 9758. Art. 98 RD Legislativo 3/2011";


//  Id pregunta: 10156 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  Seg&uacute;n la  Norma T&eacute;cnica de Interoperabilidad de Protocolos de intermediaci&oacute;n de datos, cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[75]= new Array();
 choices[75][0] = "En el acceso a la Plataforma de intermediaci&oacute;n de datos del Ministerio de Hacienda y Administraciones P&uacute;blicas se utilizar&aacute; la Red SARA";
 choices[75][1] = "La Plataforma de intermediaci&oacute;n del Ministerio de Hacienda y Administraciones P&uacute;blicas garantizar&aacute; interoperabilidad, disponibilidad, fiabilidad y seguridad";
 choices[75][2] = "La Plataforma de intermediaci&oacute;n del Ministerio de Hacienda y Administraciones P&uacute;blicas almacenar&aacute; el contenido del intercambio para garantizar la trazabilidad";
 choices[75][3] = "El Cedente podr&aacute; auditar la cesi&oacute;n de datos para comprobar el cumplimiento de los requisitos a que pudiera &eacute;sta estar sujeta";
 answers[75] = choices[75][2];
 units[75] = "43";
 comments[75] = "Id Pregunta: 10156. ";


//  Id pregunta: 10160 AÃ±o de creación de pregunta: 2010-01-01
 questions[76]= "77)  Para el pago de precio p&uacute;blico puede hacerse uso de:";
 choices[76]= new Array();
 choices[76][0] = "La Pasarela de Pagos del MINHAP-AEAT";
 choices[76][1] = "El Servicio de Pago Telem&aacute;tico, de Red.es";
 choices[76][2] = "Los dos anteriores";
 choices[76][3] = "Ninguno de los anteriores";
 answers[76] = choices[76][1];
 units[76] = "44";
 comments[76] = "Id Pregunta: 10160. ";


//  Id pregunta: 10207 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  De los siguientes m&eacute;todos est&aacute;ticos de selecci&oacute;n de inversiones, &iquest;cu&aacute;l de los siguientes no tiene en cuenta la inversi&oacute;n promedio?";
 choices[77]= new Array();
 choices[77][0] = "Tasa de rendimiento contable";
 choices[77][1] = "ROI (Return of Investment)";
 choices[77][2] = "Flujo total por unidad monetaria comprometida";
 choices[77][3] = "Ninguno de los anteriores m&eacute;todos";
 answers[77] = choices[77][2];
 units[77] = "38";
 comments[77] = "Id Pregunta: 10207. ";


//  Id pregunta: 10551 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  &iquest; Cu&aacute;l de las siguientes opciones contribuye mejor a un plan de continuidad de negocio eficaz? ";
 choices[78]= new Array();
 choices[78][0] = "La documentaci&oacute;n se distribuye a todas las partes interesadas";
 choices[78][1] = "La planificaci&oacute;n involucra a todos los departamentos de usuarios";
 choices[78][2] = "El plan se ha aprobado por la alta direcci&oacute;n";
 choices[78][3] = "El plan se ha auditado por un auditor externo";
 answers[78] = choices[78][1];
 units[78] = "31, 32, 33";
 comments[78] = "Id Pregunta: 10551. La participaci&oacute;n de los departamentos de usuarios en el Plan de Continuidad de Negocio es crucial para la identificaci&oacute;n de las prioridades de proceso de negocio.";


//  Id pregunta: 10588 AÃ±o de creación de pregunta: 2015-01-01
 questions[79]= "80)  No es un objetivo de Europa 2020:";
 choices[79]= new Array();
 choices[79][0] = "Invertir un 3% en I+D y desarrollar un indicador para su impacto.";
 choices[79][1] = "Reducir el abandono escolar del 20% al 15%.";
 choices[79][2] = "Reducir en 25% el n&uacute;mero de europeos que viven por debajo de umbrales de la pobreza.";
 choices[79][3] = "Reducir las emisiones de gases de efecto invernadero en un 20% desde 1999.";
 answers[79] = choices[79][1];
 units[79] = "30";
 comments[79] = "Id Pregunta: 10588. ";


//  Id pregunta: 10681 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  Seg&uacute;n la Ley 39/2015 se establece como &quot;Derecho de las Personas en sus relaciones con la Administraci&oacute;n&quot; en su Art&iacute;culo 13.";
 choices[80]= new Array();
 choices[80][0] = "Comunicarse con las Administraciones P&uacute;blicas a trav&eacute;s de un Punto de Acceso General electr&oacute;nico de la Administraci&oacute;n.";
 choices[80][1] = "Relacionarse con las Administraciones P&uacute;blicas a trav&eacute;s de medios electr&oacute;nicos utilizando cualquier formato recogido en el ENI.";
 choices[80][2] = "Ambas";
 choices[80][3] = "Ninguna de las anteriores.";
 answers[80] = choices[80][0];
 units[80] = "30";
 comments[80] = "Id Pregunta: 10681. ";


//  Id pregunta: 10689 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  &iquest;Qu&eacute; Ley establece el &quot;Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas.&quot;?";
 choices[81]= new Array();
 choices[81][0] = "Ley 40/2015.";
 choices[81][1] = "Ley 40/2014.";
 choices[81][2] = "Ley 39/2015.";
 choices[81][3] = "Ley 41/2015.";
 answers[81] = choices[81][2];
 units[81] = "30";
 comments[81] = "Id Pregunta: 10689. ";


//  Id pregunta: 10694 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  Seg&uacute;n la Ley 39/2015 son interesados:";
 choices[82]= new Array();
 choices[82][0] = "Quienes lo promuevan como titulares de derechos o intereses leg&iacute;timos individuales o colectivos.";
 choices[82][1] = "Los que, sin haber iniciado el procedimiento, tengan derechos que puedan resultar afectados por la decisi&oacute;n que en el mismo se adopte.";
 choices[82][2] = "Aquellos cuyos intereses leg&iacute;timos, individuales o colectivos, puedan resultar afectados por la resoluci&oacute;n y se personen en el procedimiento en tanto no haya reca&iacute;do resoluci&oacute;n definitiva.";
 choices[82][3] = "Todas las anteriores.";
 answers[82] = choices[82][3];
 units[82] = "30";
 comments[82] = "Id Pregunta: 10694. ";


//  Id pregunta: 10707 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  &iquest;Cu&aacute;l no es un componente del &iacute;ndice del expediente electr&oacute;nico?";
 choices[83]= new Array();
 choices[83][0] = "Fecha de generaci&oacute;n del &iacute;ndice.";
 choices[83][1] = "Descripci&oacute;n de los documentos electr&oacute;nicos.";
 choices[83][2] = "Disposici&oacute;n de los documentos en carpetas.";
 choices[83][3] = "Identificadores de los documentos electr&oacute;nicos.";
 answers[83] = choices[83][1];
 units[83] = "43";
 comments[83] = "Id Pregunta: 10707. ";


//  Id pregunta: 10732 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  &iquest;En qu&eacute; a&ntilde;o se public&oacute; la Norma T&eacute;cnica de Interoperabilidad de Reutilizaci&oacute;n de recursos de la informaci&oacute;n?";
 choices[84]= new Array();
 choices[84][0] = "2010";
 choices[84][1] = "2011";
 choices[84][2] = "2013";
 choices[84][3] = "2015";
 answers[84] = choices[84][2];
 units[84] = "43";
 comments[84] = "Id Pregunta: 10732. ";


//  Id pregunta: 10737 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  Una &quot;Descripci&oacute;n formal de los conceptos y relaciones que pueden existir sobre agentes o una comunidad. Especificaci&oacute;n consensuada que describe un dominio de informaci&oacute;n.&quot; es:";
 choices[85]= new Array();
 choices[85][0] = "Un metadato";
 choices[85][1] = "Una ontolog&iacute;a";
 choices[85][2] = "Una categor&iacute;a";
 choices[85][3] = "Una forma de representaci&oacute;n de datos estructurados (RDFa)";
 answers[85] = choices[85][1];
 units[85] = "24";
 comments[85] = "Id Pregunta: 10737. ";


//  Id pregunta: 10740 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  &iquest;Cual de las siguientes no se corresponde con una funci&oacute;n correspondiente a la Comisi&oacute;n de Estrategia TIC?";
 choices[86]= new Array();
 choices[86][0] = "Definir las prioridades de inversi&oacute;n en materias TIC de acuerdo con los objetivos establecidos por el Gobierno.";
 choices[86][1] = "Actuar como Observatorio de la Administraci&oacute;n Electr&oacute;nica y Transformaci&oacute;n Digital.";
 choices[86][2] = "Impulsar la colaboraci&oacute;n y cooperaci&oacute;n con las comunidades aut&oacute;nomas y las entidades locales para la puesta en marcha de servicios interadministrativos integrados y la compartici&oacute;n de infraestructuras t&eacute;cnicas y los servicios comunes que permitan la racionalizaci&oacute;n de los recursos TIC a todos los niveles del Estado.";
 choices[86][3] = "Elaborar y trasladar a los &oacute;rganos competentes en materia de contrataci&oacute;n, los criterios y directrices para la agregaci&oacute;n y planificaci&oacute;n de la demanda TIC en la Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos para una mayor eficiencia econ&oacute;mica y su configuraci&oacute;n como cliente &uacute;nico frente a proveedores externos.";
 answers[86] = choices[86][3];
 units[86] = "24";
 comments[86] = "Id Pregunta: 10740. ";


//  Id pregunta: 10765 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  &iquest;Qu&eacute; car&aacute;cter tiene el informe t&eacute;cnico de la memoria y los pliegos de prescripciones t&eacute;cnicas para la contrataci&oacute;n de tecnolog&iacute;as de la informaci&oacute;n?";
 choices[87]= new Array();
 choices[87][0] = "Preceptivo";
 choices[87][1] = "Potestativo";
 choices[87][2] = "Informativo";
 choices[87][3] = "Recomendaci&oacute;n";
 answers[87] = choices[87][0];
 units[87] = "24";
 comments[87] = "Id Pregunta: 10765. ";


//  Id pregunta: 10931 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  En materia de protecci&oacute;n de datos, el ejercicio del derecho de cancelaci&oacute;n dar&aacute; lugar:";
 choices[88]= new Array();
 choices[88][0] = "A que se modifiquen los datos que resulten ser falsos o inexactos.";
 choices[88][1] = "A que se modifiquen los datos que resulten ser inadecuados o inexactos.";
 choices[88][2] = "A que se supriman los datos que resulten ser inadecuados o excesivos.";
 choices[88][3] = "A que se supriman los datos que resulten ser inexactos o excesivos.";
 answers[88] = choices[88][2];
 units[88] = "29";
 comments[88] = "Id Pregunta: 10931. TIC A1 AGE 2014";


//  Id pregunta: 10946 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  La Entidad AENOR:";
 choices[89]= new Array();
 choices[89][0] = "Es una entidad p&uacute;blica que elabora normas t&eacute;cnicas espa&ntilde;olas, impulsando la aportaci&oacute;n nacional en la elaboraci&oacute;n de normas europeas e internacionales.";
 choices[89][1] = "Desarrolla actividades de normalizaci&oacute;n y certificaci&oacute;n (N+C) exclusivamente en el &aacute;mbito del sector p&uacute;blico.";
 choices[89][2] = "Es una entidad espa&ntilde;ola, privada, independiente, sin &aacute;nimo de lucro, que certifica productos, servicios y empresas (sistemas).";
 choices[89][3] = "Es la entidad p&uacute;blica internacional responsable de la elaboraci&oacute;n de los est&aacute;ndares ISO/IEC.";
 answers[89] = choices[89][2];
 units[89] = "42";
 comments[89] = "Id Pregunta: 10946. TIC A1 AGE 2014";


//  Id pregunta: 10982 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  En relaci&oacute;n con el Registro Electr&oacute;nico de Apoderamientos (REA), se&ntilde;ale la respuesta correcta:";
 choices[90]= new Array();
 choices[90][0] = "Un departamento ministerial puede adherirse al REA mediante la firma electr&oacute;nica de un acuerdo de adhesi&oacute;n con el Ministerio de Hacienda y Administraciones P&uacute;blicas, de forma simult&aacute;nea con el alta electr&oacute;nica de sus tr&aacute;mites en dicho Registro.";
 choices[90][1] = "Si un departamento ministerial ya est&aacute; adherido al REA y desea incorporar nuevos tr&aacute;mites al mismo, deber&aacute; hacerlo electr&oacute;nicamente en dicho Registro y publicar una Resoluci&oacute;n oficial modificando o ampliando la relaci&oacute;n inicial de tr&aacute;mites.";
 choices[90][2] = "Los departamentos ministeriales u organismos p&uacute;blicos que gestionen un Registro de apoderamientos propio, deber&aacute;n dar de alta &eacute;stos tambi&eacute;n en el REA para garantizar la interoperabilidad de ambos registros";
 choices[90][3] = "El periodo m&aacute;ximo de vigencia de los apoderamientos para los tr&aacute;mites incorporados en el REA no podr&aacute; superar los dos a&ntilde;os.";
 answers[90] = choices[90][1];
 units[90] = "44";
 comments[90] = "Id Pregunta: 10982. TIC A1 AGE 2014";


//  Id pregunta: 10997 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Una de las competencias que debe poseer actualmente un directivo TIC es la de liderazgo. El liderazgo autocr&aacute;tico se caracteriza por:";
 choices[91]= new Array();
 choices[91][0] = "Permitir y formentar la participaci&oacute;n de su equipo en la adopci&oacute;n de decisiones.";
 choices[91][1] = "Limitar su intervenci&oacute;n a comunicar el objetivo final del trabajo que ha de realizar su equipo.";
 choices[91][2] = "Utilizar poco el poder y conceder al equipo un alto grado de independencia en sus tareas.";
 choices[91][3] = "Adoptar decisiones de manera unilateral, limitando o excluyendo a los subordinados.";
 answers[91] = choices[91][3];
 units[91] = "24";
 comments[91] = "Id Pregunta: 10997. TIC A1 AGE 2014";


//  Id pregunta: 11097 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  De acuerdo con el RD 1720/2007 del 11 de Junio, el l&iacute;mite de n&uacute;meros de accesos es una medida de seguridad que debe aplicarse cuando la informaci&oacute;n es de:";
 choices[92]= new Array();
 choices[92][0] = "Nivel b&aacute;sico";
 choices[92][1] = "Nivel medio";
 choices[92][2] = "Nivel alto";
 choices[92][3] = "Nivel muy alto";
 answers[92] = choices[92][1];
 units[92] = "29";
 comments[92] = "Id Pregunta: 11097. ";


//  Id pregunta: 11194 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l de las siguientes iniciativas de la Estrategia Europa 2020 hace referencia al objetivo de crecimiento sostenible?";
 choices[93]= new Array();
 choices[93][0] = "Juventud en movimiento";
 choices[93][1] = "Una Europa que utilice eficazmente los recursos";
 choices[93][2] = "Plataforma Europea contra la pobreza";
 choices[93][3] = "Agenda Clim&aacute;tica para Europa";
 answers[93] = choices[93][1];
 units[93] = "30";
 comments[93] = "Id Pregunta: 11194. ";


//  Id pregunta: 11203 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Agenda Digital Espa&ntilde;ola?";
 choices[94]= new Array();
 choices[94][0] = "Confianza Digital";
 choices[94][1] = "Mejorar la Administraci&oacute;n Electr&oacute;nica";
 choices[94][2] = "Despliegue de redes r&aacute;pidas y ultrarr&aacute;pidas";
 choices[94][3] = "Interoperabilidad y normas";
 answers[94] = choices[94][3];
 units[94] = "30";
 comments[94] = "Id Pregunta: 11203. ";


//  Id pregunta: 11213 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;De qu&eacute; plan de la Agenda Digital Espa&ntilde;ola es fruto la Estrategia de Ciberseguridad?";
 choices[95]= new Array();
 choices[95][0] = "Plan de Desarrollo e Innovaci&oacute;n TIC";
 choices[95][1] = "Plan de Confianza en el &aacute;mbito Digital";
 choices[95][2] = "Plan de Seguridad Integral en las Comunicaciones TIC";
 choices[95][3] = "Plan de Aseguramiento de la Econom&iacute;a Digital y los Contenidos Digitales";
 answers[95] = choices[95][1];
 units[95] = "30";
 comments[95] = "Id Pregunta: 11213. ";


//  Id pregunta: 11245 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  El informe t&eacute;cnico de la DTIC:";
 choices[96]= new Array();
 choices[96][0] = "Se emitir&aacute; en un plazo m&aacute;ximo de 15 d&iacute;as.";
 choices[96][1] = "El informe ser&aacute; preceptivo para convenios, encomiendas de gesti&oacute;n, entre otros.";
 choices[96][2] = "La tramitaci&oacute;n de los informes se har&aacute; procurando el empleo de medios telem&aacute;ticos en todas las fases del procedimiento. Atendiendo especialmente a la confidencialidad e integridad en los contratos sobre defensa y seguridad comprendidos en el &aacute;mbito de la ley 24/2011.";
 choices[96][3] = "Ninguna respuesta es correcta.";
 answers[96] = choices[96][1];
 units[96] = "41";
 comments[96] = "Id Pregunta: 11245. ";


//  Id pregunta: 11501 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Seg&uacute;n el Esquema Nacional de Seguridad, la tarea de elaboraci&oacute;n de un Perfil General del Estado de la Seguridad en las Administraciones p&uacute;blicas es competencia de:";
 choices[97]= new Array();
 choices[97][0] = "Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica";
 choices[97][1] = "Centro Criptol&oacute;gico Nacional";
 choices[97][2] = "INCIBE";
 choices[97][3] = "Consejo de Ministros";
 answers[97] = choices[97][0];
 units[97] = "43";
 comments[97] = "Id Pregunta: 11501. RD 951/2015 que modifica el art&iacute;culo 35 del ENS.";


//  Id pregunta: 11587 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Se&ntilde;ale cu&aacute;l no es uno de los principios del Marco Europeo de Interoperabilidad:";
 choices[98]= new Array();
 choices[98][0] = "Subsidiariedad y proporcionalidad";
 choices[98][1] = "Multiling&uuml;ismo";
 choices[98][2] = "Conservaci&oacute;n de la informaci&oacute;n";
 choices[98][3] = "Eficiencia";
 answers[98] = choices[98][3];
 units[98] = "40";
 comments[98] = "Id Pregunta: 11587. ";


//  Id pregunta: 11595 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Con respecto a la Comisi&oacute;n de Estrategia TIC, se&ntilde;ale la incorrecta:";
 choices[99]= new Array();
 choices[99][0] = "La Comisi&oacute;n de Estrategia TIC se adscribe al Ministerio de Hacienda y Administraciones P&uacute;blicas a trav&eacute;s de la Secretar&iacute;a de Estado de Administraciones P&uacute;blicas.";
 choices[99][1] = "Una de sus funciones es declarar los medios o servicios compartidos.";
 choices[99][2] = "Las reuniones de su Pleno se celebrar&aacute;n, al menos, cuatro veces al a&ntilde;o por convocatoria de su Presidente, bien a iniciativa propia, bien cuando lo soliciten, al menos, la mitad de sus miembros.";
 choices[99][3] = "Podr&aacute;n constituirse los grupos de trabajo que se requieran para el adecuado desarrollo de sus funciones.";
 answers[99] = choices[99][2];
 units[99] = "43";
 comments[99] = "Id Pregunta: 11595. ";


