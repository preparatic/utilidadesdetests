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

//  Id pregunta: 10 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l es la decisi&oacute;n del Consejo de las Comunidades Europeas que fija la pol&iacute;tica comunitaria sobre las compras p&uacute;blicas en el sector de la tecnolog&iacute;a de la informaci&oacute;n y de las comunicaciones?:";
 choices[0]= new Array();
 choices[0][0] = "Decisi&oacute;n 87-95-CEE";
 choices[0][1] = "Decreto 88-91-CEE";
 choices[0][2] = "Decreto 88-90-CEE";
 choices[0][3] = "Decisi&oacute;n 91-88-CEE";
 answers[0] = choices[0][0];
 units[0] = "40";
 comments[0] = "Id Pregunta: 10. ";


//  Id pregunta: 18 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Cu&aacute;l no es una metodolog&iacute;a para la planificaci&oacute;n de la capacidad de un sistema inform&aacute;tico?:";
 choices[1]= new Array();
 choices[1][0] = "Simulaci&oacute;n";
 choices[1][1] = "La programaci&oacute;n lineal";
 choices[1][2] = "las reglas basadas en la experiencia";
 choices[1][3] = "La teor&iacute;a de colas";
 answers[1] = choices[1][1];
 units[1] = "25";
 comments[1] = "Id Pregunta: 18. planificaci&oacute;n de la capacidad de los sistemas";


//  Id pregunta: 30 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguientes afirmaciones acerca de la auditor&iacute;a inform&aacute;tica es falsa?:";
 choices[2]= new Array();
 choices[2][0] = "La finalidad de la auditor&iacute;a inform&aacute;tica es emitir un juicio acerca del estado de los sistemas";
 choices[2][1] = "La auditor&iacute;a inform&aacute;tica llega siempre a una valoraci&oacute;n o diagn&oacute;stico final, positivo o negativo";
 choices[2][2] = "La auditor&iacute;a inform&aacute;tica propone acciones a realizar";
 choices[2][3] = "La auditor&iacute;a inform&aacute;tica analiza tanto la infraestructura f&iacute;sica y l&oacute;gica como la estructura organizativa";
 answers[2] = choices[2][1];
 units[2] = "31,32,33";
 comments[2] = "Id Pregunta: 30. ";


//  Id pregunta: 40 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguientes respuestas referidas a las auditor&iacute;as de control de calidad es cierta?:";
 choices[3]= new Array();
 choices[3][0] = "Es un procedimiento habitual de control de calidad del software";
 choices[3][1] = "Es un procedimiento extraordinario al que se pueden someter los proyectos que tengan especial magnitud";
 choices[3][2] = "Su objetivo es proceder al refinamiento sucesivo en la definici&oacute;n de las especificaciones finales del proyecto";
 choices[3][3] = "Ninguna de las respuestas anteriores es cierta";
 answers[3] = choices[3][1];
 units[3] = "31,32,33";
 comments[3] = "Id Pregunta: 40. ";


//  Id pregunta: 88 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Qui&eacute;n dijo que uno de los elementos necesarios en una organizaci&oacute;n es la existencia de un fin com&uacute;n?:";
 choices[4]= new Array();
 choices[4][0] = "Richard Nolan";
 choices[4][1] = "Stephen P. Robbins";
 choices[4][2] = "Andrea Zerilli";
 choices[4][3] = "James C. Emery";
 answers[4] = choices[4][2];
 units[4] = "22";
 comments[4] = "Id Pregunta: 88. NULL";


//  Id pregunta: 90 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &ldquo;Aqu&eacute;l equipo de inform&aacute;tica que se adapta perfectamente a las capacidades y condiciones de quienes lo usan, permitiendo su uso de manera eficiente y sin riesgo para la salud ni la seguridad&rdquo; es la definici&oacute;n para:";
 choices[5]= new Array();
 choices[5][0] = "Ordenador adaptable";
 choices[5][1] = "Ordenador, seg&uacute;n la WAI (Web Accesibility Initiative)";
 choices[5][2] = "Ordenador ecol&oacute;gico";
 choices[5][3] = "Ordenador ergon&oacute;mico";
 answers[5] = choices[5][3];
 units[5] = "39";
 comments[5] = "Id Pregunta: 90. ";


//  Id pregunta: 108 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Cuando hablamos de un nuevo tipo de trabajo en las organizaciones basadas en la informaci&oacute;n, nos referimos a:";
 choices[6]= new Array();
 choices[6][0] = "Disminuci&oacute;n de la presi&oacute;n sobre el trabajador y aumento sobre los sistemas de informaci&oacute;n";
 choices[6][1] = "Necesidad de un trabajador m&aacute;s inteligente pues necesita establecer conexiones entre los s&iacute;mbolos y la realidad";
 choices[6][2] = "Aumento de la conexi&oacute;n del trabajador con el mundo exterior lejano a &eacute;l, gracias a las redes internacionales de ordenadores";
 choices[6][3] = "Aumento de la satisfacci&oacute;n del trabajador que observa la capacidad de producci&oacute;n que tiene el simple hecho de pulsar una tecla del ordenador";
 answers[6] = choices[6][1];
 units[6] = "22";
 comments[6] = "Id Pregunta: 108. NULL";


//  Id pregunta: 113 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  De acuerdo con la Ley de Protecci&oacute;n de Datos, el Registro General de Protecci&oacute;n de Datos es un &oacute;rgano integrado en la Agencia de Protecci&oacute;n de Datos y ser&aacute;n objeto de inscripci&oacute;n en &eacute;l:";
 choices[7]= new Array();
 choices[7][0] = "Los ficheros de los que sean titulares las Administraciones P&uacute;blicas";
 choices[7][1] = "Los ficheros de titularidad privada";
 choices[7][2] = "Los datos relativos a los ficheros que sean necesarios para el ejercicio de los derechos de informaci&oacute;n, acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n";
 choices[7][3] = "Todas las afirmaciones son correctas";
 answers[7] = choices[7][3];
 units[7] = "29";
 comments[7] = "Id Pregunta: 113. ";


//  Id pregunta: 116 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  De las siguientes estructuras organizativas de un departamento de sistemas de informaci&oacute;n se&ntilde;ale la que considere m&aacute;s correcta:";
 choices[8]= new Array();
 choices[8][0] = "Establecer una estructura funcional en el departamento de sistemas y una sectorial en el de desarrollo";
 choices[8][1] = "Establecer una estructura sectorial en sistemas y una matricial en desarrollo";
 choices[8][2] = "Establecer una estructura matricial en sistemas y una matricial en desarrollo";
 choices[8][3] = "Establecer una estructura matricial en sistemas y una por proyectos en desarrollo";
 answers[8] = choices[8][0];
 units[8] = "22";
 comments[8] = "Id Pregunta: 116. ";


//  Id pregunta: 128 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  El benchmark es adecuado cuando:";
 choices[9]= new Array();
 choices[9][0] = "Vamos a adquirir aplicaciones a medida";
 choices[9][1] = "Los entornos de las diversas opciones difieren";
 choices[9][2] = "Queremos desarrollar un proyecto innovador";
 choices[9][3] = "Queremos comparar el rendimiento de un sistema respecto al de otros";
 answers[9] = choices[9][3];
 units[9] = "35";
 comments[9] = "Id Pregunta: 128. NULL";


//  Id pregunta: 160 AÃ±o de creación de pregunta: 2009-01-01
 questions[10]= "11)  El Registro General de Protecci&oacute;n de Datos:";
 choices[10]= new Array();
 choices[10][0] = "Inscribe de oficio las autorizaciones de transferencias internacionales de datos";
 choices[10][1] = "Da libre acceso a los ficheros de datos personales";
 choices[10][2] = "Inscribe &uacute;nicamente los ficheros automatizados de las AAPP";
 choices[10][3] = "Es el &Oacute;rgano ante el que se ejerce el derecho de informaci&oacute;n, acceso, rectificaci&oacute;n y cancelaci&oacute;n";
 answers[10] = choices[10][0];
 units[10] = "29";
 comments[10] = "Id Pregunta: 160. ";


//  Id pregunta: 170 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  En auditor&iacute;a inform&aacute;tica, el objeto de una &quot;prueba de cumplimiento&quot; es:";
 choices[11]= new Array();
 choices[11][0] = "Verificar el cumplimiento de la legislaci&oacute;n y la normativa vigente en las operaciones de un sistema de informaci&oacute;n, especialmente en el cap&iacute;tulo de compras y gesti&oacute;n de personal";
 choices[11][1] = "Sustanciar la probabilidad de que los objetivos de control no se alcancen";
 choices[11][2] = "Determinar si los controles se est&aacute;n aplicando de la forma descrita en la documentaci&oacute;n o de la forma descrita por el usuario o directivo";
 choices[11][3] = "Verificar que todos los usuarios se adhieren voluntaria u obligatoriamente a la pol&iacute;tica sobre usos de recursos inform&aacute;ticos implantada por la Direcci&oacute;n";
 answers[11] = choices[11][2];
 units[11] = "31,32,33";
 comments[11] = "Id Pregunta: 170. ";


//  Id pregunta: 174 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  En el &aacute;mbito de la auditor&iacute;a de eficiencia, &eacute;sta es m&aacute;xima&hellip;:";
 choices[12]= new Array();
 choices[12][0] = "Cuando los costes de desarrollo, mantenimiento y operaci&oacute;n del sistema son los m&aacute;s bajos posiles";
 choices[12][1] = "Cuando se cumplen todos los requisitos de los usuarios y los objetivos del organismo";
 choices[12][2] = "Cuando el personal de sistemas de informaci&oacute;n trabaja con la m&aacute;xima diligencia";
 choices[12][3] = "Cuando se alcanzan los objetivos de los usuarios con los m&iacute;nimos recursos posibles";
 answers[12] = choices[12][3];
 units[12] = "31,32,33";
 comments[12] = "Id Pregunta: 174. ";


//  Id pregunta: 179 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  En el contexto de la normalizaci&oacute;n, pruebas de conformidad y certificaciones, determine cu&aacute;l de las siguientes sentencias es falsa:";
 choices[13]= new Array();
 choices[13][0] = "Las pruebas de conformidad tienen que ser realizadas por un laboratorio independiente";
 choices[13][1] = "Certificaci&oacute;n y homologaci&oacute;n son conceptos equivalentes";
 choices[13][2] = "Una norma es una especificaci&oacute;n t&eacute;cnica aprobada por un organismo autorizado de normalizaci&oacute;n y cuyo cumplimiento no es obligatorio";
 choices[13][3] = "Normalizaci&oacute;n es un conjunto de actividades entre las que se incluyen los m&eacute;todos de medida relativos a las normas";
 answers[13] = choices[13][0];
 units[13] = "42";
 comments[13] = "Id Pregunta: 179. ";


//  Id pregunta: 235 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  En relaci&oacute;n con la gu&iacute;a de portabilidad X/Open XPG4, el perfil XPG4 Base:";
 choices[14]= new Array();
 choices[14][0] = "No existe";
 choices[14][1] = "Supone la base de un servidor de base de datos";
 choices[14][2] = "Es equivalente al XPG3 y la base para el resto de los perfiles";
 choices[14][3] = "Para obtenerlo, es necesario certificar el componente XPG4 BSFT";
 answers[14] = choices[14][2];
 units[14] = "40";
 comments[14] = "Id Pregunta: 235. XPG";


//  Id pregunta: 247 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  En una organizaci&oacute;n de tipo gran hermano:";
 choices[15]= new Array();
 choices[15][0] = "El HW est&aacute; distribuido, y no se descentraliza la capacidad de realizar SW ni las decisiones";
 choices[15][1] = "El HW est&aacute; distribuido y el desarrollo tambi&eacute;n, pero no las decisiones";
 choices[15][2] = "El HW no est&aacute; distribuido y se descentraliza la capacidad de realizar SW y las decisiones";
 choices[15][3] = "El HW, el desarrollo y las decisiones se descentralizan";
 answers[15] = choices[15][0];
 units[15] = "22";
 comments[15] = "Id Pregunta: 247. ";


//  Id pregunta: 255 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Entre los problemas que genera el actuar sobre las cosas (acting on) en lugar de actuar con las cosas (acting with) se encuentran:";
 choices[16]= new Array();
 choices[16][0] = "Necesidad de establecer relaciones entre s&iacute;mbolos y realidad";
 choices[16][1] = "Aislamiento emocional e intelectual del trabajador";
 choices[16][2] = "Las 2 anteriores";
 choices[16][3] = "Ninguna de las anteriores";
 answers[16] = choices[16][2];
 units[16] = "24";
 comments[16] = "Id Pregunta: 255. ";


//  Id pregunta: 303 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  La estructura organizacional  por aplicaciones de un &aacute;rea de desarrollo:";
 choices[17]= new Array();
 choices[17][0] = "Se caracteriza por un mejor aprovechamiento de los recursos humanos, al no estar adjudicados a un &uacute;nico proyecto";
 choices[17][1] = "Se caracteriza por que no es necesaria una coordinaci&oacute;n excesiva a alto nivel ya que cada departamento es independiente";
 choices[17][2] = "Es equivalente a una organizaci&oacute;n matricial";
 choices[17][3] = "Ninguna de las anteriores";
 answers[17] = choices[17][1];
 units[17] = "26";
 comments[17] = "Id Pregunta: 303. estructura organizacional";


//  Id pregunta: 332 AÃ±o de creación de pregunta: 2004-01-01
 questions[18]= "19)  En la Teor&iacute;a de Decisi&oacute;n Multicriterio Discreta (DMD), la normalizaci&oacute;n de puntuaciones:";
 choices[18]= new Array();
 choices[18][0] = "Homogeiniza las puntuaciones a una escala com&uacute;n (0,1)";
 choices[18][1] = "Permite la comparaci&oacute;n de criterios no homog&eacute;neos, medidos con unidades distintas y de distinto tipo (cuantitativos y cualitativos)";
 choices[18][2] = "Permite comparar criterio de sentido diferente (m&aacute;ximo, m&iacute;nimo)";
 choices[18][3] = "Todas las respuestas son correctas";
 answers[18] = choices[18][3];
 units[18] = "34";
 comments[18] = "Id Pregunta: 332. ";


//  Id pregunta: 341 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  La red de comunicaci&oacute;n en rueda de una organizaci&oacute;n es:";
 choices[19]= new Array();
 choices[19][0] = "Comunicaci&oacute;n ascendente donde dos subordinados reportan a su jefe sobre un asunto";
 choices[19][1] = "Esquema descendente en jerarqu&iacute;a absoluta";
 choices[19][2] = "Las respuestas &lsquo;a&rsquo;, &lsquo;b&rsquo; y &lsquo;d&rsquo; son falsas";
 choices[19][3] = "Se establece con dos interlocutores en cada caso, interactuando con los m&aacute;s cercanos a uno";
 answers[19] = choices[19][2];
 units[19] = "23";
 comments[19] = "Id Pregunta: 341. ";


//  Id pregunta: 415 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Se define como interoperabilidad la posibilidad de:";
 choices[20]= new Array();
 choices[20][0] = "Manejar un ordenador desde cualquier puesto de trabajo de la red";
 choices[20][1] = "Transmitir datos entre dos ordenadores distintos";
 choices[20][2] = "Compartir procesos y datos entre distintos procesadores";
 choices[20][3] = "Ejecutar la misma aplicaci&oacute;n en plataformas de diferentes fabricantes";
 answers[20] = choices[20][2];
 units[20] = "40";
 comments[20] = "Id Pregunta: 415. ";


//  Id pregunta: 434 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Seg&uacute;n la Ley 1/1996 de Propiedad Intelectual, la obra nueva que incorpore una obra existente sin la colaboraci&oacute;n del autor de esta &uacute;ltima se denomina:";
 choices[21]= new Array();
 choices[21][0] = "Obra colectiva";
 choices[21][1] = "Obra compuesta";
 choices[21][2] = "Obra en semi-colaboraci&oacute;n";
 choices[21][3] = "Obra replicada";
 answers[21] = choices[21][1];
 units[21] = "36";
 comments[21] = "Id Pregunta: 434. ";


//  Id pregunta: 451 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Se&ntilde;alar la respuesta correcta si hablamos de eficacia y eficiencia:";
 choices[22]= new Array();
 choices[22][0] = "La eficacia de un sistema es la medida de la correcta utilizaci&oacute;n de equipos, instalaciones y personal que participan en &eacute;l";
 choices[22][1] = "La eficiencia de un sistema es la medida de la correcta utilizaci&oacute;n de equipos, instalaciones y personal que participa en &eacute;l";
 choices[22][2] = "La eficiencia es la medida del cumplimiento de los objetivos del organismo y de los requisitos de los usuarios";
 choices[22][3] = "La eficacia &oacute;ptima se logra cuando se alcanzan los objetivos de los usuarios con los m&iacute;nimos recursos posibles";
 answers[22] = choices[22][1];
 units[22] = "38";
 comments[22] = "Id Pregunta: 451. ";


//  Id pregunta: 475 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Uno de los proyectos m&aacute;s importantes que lleva a cabo la Administraci&oacute;n es la elaboraci&oacute;n del Esquema Nacional de Evaluaci&oacute;n y Certificaci&oacute;n de la Seguridad de las Tecnolog&iacute;as de la Informaci&oacute;n (ENECSTI). &iquest;Qui&eacute;n es el organismo de certificaci&oacute;n de dicho esquema?";
 choices[23]= new Array();
 choices[23][0] = "La Agencia de Protecci&oacute;n de Datos";
 choices[23][1] = "El TECNIMAP";
 choices[23][2] = "El Centro Criptol&oacute;gico Nacional";
 choices[23][3] = "El Ministerio de Defensa y el de Presidencia a trav&eacute;s del CESID";
 answers[23] = choices[23][2];
 units[23] = "31, 32, 33";
 comments[23] = "Id Pregunta: 475. ";


//  Id pregunta: 486 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  La ITU-T realiza series de recomendaciones sobre diversos temas, Las recomendaciones sobre multiplexaci&oacute;n digital, estructura de las tramas, interfaces el&eacute;ctricos y funcionales entre dispositivos digitales de transmisi&oacute;n, y jerarqu&iacute;a de frecuencia pertence a:";
 choices[24]= new Array();
 choices[24][0] = "Serie V de la ITU-T";
 choices[24][1] = "Serie G de la ITU-T";
 choices[24][2] = "Serie D de la ITU-T";
 choices[24][3] = "Serie M de la ITU-T";
 answers[24] = choices[24][1];
 units[24] = "42";
 comments[24] = "Id Pregunta: 486. ";


//  Id pregunta: 490 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Las normas de V.61 a V.92 de la serie V de la ITU-T tratan de:";
 choices[25]= new Array();
 choices[25][0] = "control de errores de transmisi&oacute;n";
 choices[25][1] = "interfaces y m&oacute;dems para la banda vocal";
 choices[25][2] = "transmisi&oacute;n simult&aacute;nea de datos y otras se&ntilde;ales";
 choices[25][3] = "calidad de transmisi&oacute;n y mantenimiento";
 answers[25] = choices[25][2];
 units[25] = "42";
 comments[25] = "Id Pregunta: 490. ";


//  Id pregunta: 502 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  En la decisi&oacute;n de alternativas para la adquisici&oacute;n de sistemas de tecnolog&iacute;as de la informaci&oacute;n no se usa ";
 choices[26]= new Array();
 choices[26][0] = "Las cadenas de Petri ";
 choices[26][1] = "Ponderaci&oacute;n lineal";
 choices[26][2] = "M&eacute;todo lexicogr&aacute;fico";
 choices[26][3] = "Gr&aacute;ficos R&aacute;dar";
 answers[26] = choices[26][0];
 units[26] = "34";
 comments[26] = "Id Pregunta: 502. Modificada por JCED Preparatic XVII";


//  Id pregunta: 519 AÃ±o de creación de pregunta: 2004-01-01
 questions[27]= "28)  Si se estima en un 20% la probabilidad de un incidente que provoca una p&eacute;rdida de 10.000 euros, se est&aacute; hablando de:";
 choices[27]= new Array();
 choices[27][0] = "Un riesgo";
 choices[27][1] = "Un impacto";
 choices[27][2] = "Ninguna de las anteriores";
 choices[27][3] = "a ) y b)";
 answers[27] = choices[27][3];
 units[27] = "31, 32, 33";
 comments[27] = "Id Pregunta: 519. Auditor&iacute;a Inform&aacute;tica ";


//  Id pregunta: 524 AÃ±o de creación de pregunta: 2004-01-01
 questions[28]= "29)  La implantaci&oacute;n de un sistema de single sign-on (SSO) implica que el riesgo de un acceso no autorizado:";
 choices[28]= new Array();
 choices[28][0] = "Tendr&aacute; un mayor impacto";
 choices[28][1] = "Tendr&aacute; un menor impacto";
 choices[28][2] = "Tendr&aacute; una probabilidad mayor";
 choices[28][3] = "Tendr&aacute; una probabilidad menor";
 answers[28] = choices[28][0];
 units[28] = "31, 32, 33";
 comments[28] = "Id Pregunta: 524. Auditor&iacute;a Inform&aacute;tica";


//  Id pregunta: 536 AÃ±o de creación de pregunta: 2004-01-01
 questions[29]= "30)  &iquest;En qu&eacute; fase del ciclo de vida se decide entre desarrollar o adquirir una aplicaci&oacute;n?";
 choices[29]= new Array();
 choices[29][0] = "An&aacute;lisis";
 choices[29][1] = "Dise&ntilde;o ";
 choices[29][2] = "Estudio de viabilidad";
 choices[29][3] = "Programaci&oacute;n";
 answers[29] = choices[29][2];
 units[29] = "35";
 comments[29] = "Id Pregunta: 536. NULL";


//  Id pregunta: 550 AÃ±o de creación de pregunta: 2004-01-01
 questions[30]= "31)  La Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos se rige, entro otros, por:";
 choices[30]= new Array();
 choices[30][0] = "El T&iacute;tulo VI de la LOPD y el RD 428/1993 por el que se aprueba su Estatuto.";
 choices[30][1] = "El T&iacute;tulo V de la LOPD y el RD 428/1993 por el que se aprueba su Estatuto.";
 choices[30][2] = "El T&iacute;tulo V de la LOPD y el RD 994/1999 por el que se aprueba su Estatuto.";
 choices[30][3] = "La Disposici&oacute;n Adicional Tercera de la LOPD y el RD 428/1993 por el que se aprueba su Estatuto.";
 answers[30] = choices[30][0];
 units[30] = "29";
 comments[30] = "Id Pregunta: 550. ";


//  Id pregunta: 557 AÃ±o de creación de pregunta: 2004-01-01
 questions[31]= "32)  &iquest;Cu&aacute;l de las siguientes no es una tarea t&iacute;pica de la auditor&iacute;a inform&aacute;tica?";
 choices[31]= new Array();
 choices[31][0] = "Reorganizaci&oacute;n de los recursos humanos del Departamento de Sistemas de Informaci&oacute;n";
 choices[31][1] = "Revisi&oacute;n de aplicaciones";
 choices[31][2] = "Revisi&oacute;n de instalaciones inform&aacute;ticas";
 choices[31][3] = "Revisi&oacute;n de sistemas bajo desarrollo";
 answers[31] = choices[31][0];
 units[31] = "31, 32, 33";
 comments[31] = "Id Pregunta: 557. MAP-B 2004";


//  Id pregunta: 615 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  El Plan de Contingencias:";
 choices[32]= new Array();
 choices[32][0] = "implica un an&aacute;lisis de los posibles riesgos";
 choices[32][1] = "debe incluir un Plan de Recuperaci&oacute;n de Desastres";
 choices[32][2] = "las dos primeras son ciertas";
 choices[32][3] = "las dos primeras son falsas";
 answers[32] = choices[32][2];
 units[32] = "32";
 comments[32] = "Id Pregunta: 615. ";


//  Id pregunta: 628 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  Cu&aacute;l de las siguientes alternativas no se puede contratar a trav&eacute;s del cat&aacute;logo central de suministros.";
 choices[33]= new Array();
 choices[33][0] = "Un paquete SW de Bases de Datos.";
 choices[33][1] = "Un Servidor de aplicaciones.";
 choices[33][2] = "Un equipo externo de desarrollo Software.";
 choices[33][3] = "Un servicio de comunicaciones con un operador.";
 answers[33] = choices[33][3];
 units[33] = "35";
 comments[33] = "Id Pregunta: 628. NULL";


//  Id pregunta: 657 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  El Sistema de Soporte a la Decisi&oacute;n SSD-AAPP es una aplicaci&oacute;n inform&aacute;tica dise&ntilde;ada para:";
 choices[34]= new Array();
 choices[34][0] = "Ayudar a la selecci&oacute;n de la mejor oferta posible de entre las obtenidas en cualquier proceso de contrataci&oacute;n p&uacute;blica relacionada con Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones";
 choices[34][1] = "Ayudar a la selecci&oacute;n de la mejor oferta posible de entre las obtenidas en cualquier proceso de contrataci&oacute;n p&uacute;blica a trav&eacute;s del Cat&aacute;logo de Bienes de Adquisici&oacute;n Centralizada";
 choices[34][2] = "Ayudar a la selecci&oacute;n de la mejor oferta posible de entre las obtenidas en cualquier proceso de contrataci&oacute;n p&uacute;blica";
 choices[34][3] = "Ayudar a la selecci&oacute;n de la mejor oferta posible de entre las obtenidas en un proceso de contrataci&oacute;n p&uacute;blica a trav&eacute;s de un procedimiento negociado por exclusividad";
 answers[34] = choices[34][2];
 units[34] = "34";
 comments[34] = "Id Pregunta: 657. ";


//  Id pregunta: 4270 AÃ±o de creación de pregunta: 2007-01-01
 questions[35]= "36)  Indique cu&aacute;l de los siguientes criterios pondera la situaci&oacute;n m&aacute;s optimista con la m&aacute;s pesimista mediante un factor alfa:";
 choices[35]= new Array();
 choices[35][0] = "Criterio de Laplace";
 choices[35][1] = "Criterio de Wald";
 choices[35][2] = "Criterio de Savage";
 choices[35][3] = "Criterio de Hurwicz";
 answers[35] = choices[35][3];
 units[35] = "";
 comments[35] = "Id Pregunta: 4270. ";


//  Id pregunta: 4329 AÃ±o de creación de pregunta: 2007-01-01
 questions[36]= "37)  Un centro alternativo de tratamiento de la informaci&oacute;n:";
 choices[36]= new Array();
 choices[36][0] = "Debe ser identificable desde el exterior, para que sea f&aacute;cilmente localizado en caso de emergencia.";
 choices[36][1] = "Debe tener las mismas restricciones de acceso f&iacute;sico que la instalaci&oacute;n principal.";
 choices[36][2] = "Debe estar ubicado en las proximidades de la instalaci&oacute;n principal, as&iacute; se puede poner en operaci&oacute;n inmediatamente.";
 choices[36][3] = "No necesita disponer del mismo nivel de supervisi&oacute;n ni controles ambientales que la instalaci&oacute;n principal, porque los costes ser&iacute;an prohibitivos.";
 answers[36] = choices[36][1];
 units[36] = "33";
 comments[36] = "Id Pregunta: 4329. ";


//  Id pregunta: 4331 AÃ±o de creación de pregunta: 2007-01-01
 questions[37]= "38)  &iquest;Cu&aacute;l de los siguientes derechos, si es asignado a un operador de ordenador, deber&iacute;a hacer sospechar a un auditor inform&aacute;tico, cuando se realiza una auditor&iacute;a de derechos de acceso?";
 choices[37]= new Array();
 choices[37][0] = "Leer acceso a datos.";
 choices[37][1] = "Borrar acceso a archivos de datos de transacci&oacute;n.";
 choices[37][2] = "Acceso de leer/ejecutar a programas.";
 choices[37][3] = "Actualizar acceso a archivos de lenguaje/script de control de trabajo.";
 answers[37] = choices[37][1];
 units[37] = "31";
 comments[37] = "Id Pregunta: 4331. ";


//  Id pregunta: 4407 AÃ±o de creación de pregunta: 2007-01-01
 questions[38]= "39)  &iquest;En qu&eacute; consiste el CRA (Customer Relationship Analisis?";
 choices[38]= new Array();
 choices[38][0] = "Es un conjunto de herramientas que proveen de soporte t&eacute;cnico al CRM.";
 choices[38][1] = "Es el precursor del CRM.";
 choices[38][2] = "Es el an&aacute;lisis de datos acerca de los clientes y su relaci&oacute;n con la empresa.";
 choices[38][3] = "Integraci&oacute;n del software de an&aacute;lisis de datos con las bases de datos y el inventario de las organizaciones";
 answers[38] = choices[38][2];
 units[38] = "65";
 comments[38] = "Id Pregunta: 4407. ";


//  Id pregunta: 4448 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  Seg&uacute;n la Ley Org&aacute;nica de Protecci&oacute;n de Datos, las medidas de &iacute;ndole t&eacute;cnica y organizativas necesarias que garanticen la seguridad de los datos de car&aacute;cter personal, deben ser adoptadas por:";
 choices[39]= new Array();
 choices[39][0] = "&Uacute;nicamente el encargado del tratamiento.";
 choices[39][1] = "El afectado de com&uacute;n acuerdo con el encargado del tratamiento.";
 choices[39][2] = "El responsable del fichero y, en su caso, el encargado del tratamiento.";
 choices[39][3] = "&Uacute;nicamente el responsable del fichero";
 answers[39] = choices[39][2];
 units[39] = "29";
 comments[39] = "Id Pregunta: 4448. ";


//  Id pregunta: 4622 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  Indique cual de las siguientes es una herramienta de e-learning: ";
 choices[40]= new Array();
 choices[40][0] = "Kerberos";
 choices[40][1] = "WebCT";
 choices[40][2] = "Kagera";
 choices[40][3] = "Tuxedo";
 answers[40] = choices[40][1];
 units[40] = "66";
 comments[40] = "Id Pregunta: 4622. ";


//  Id pregunta: 4786 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  Seg&uacute;n La t&eacute;cnica de estimaci&oacute;n Mark II de Puntos Funci&oacute;n, a cada atributo se le asigna un valor entre:";
 choices[41]= new Array();
 choices[41][0] = "1 y 5.";
 choices[41][1] = "1 y 8.";
 choices[41][2] = "0 y 8.";
 choices[41][3] = "0 y 5.";
 answers[41] = choices[41][3];
 units[41] = "27";
 comments[41] = "Id Pregunta: 4786. Castilla la Mancha B 06";


//  Id pregunta: 4857 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  El marco legislativo espa&ntilde;ol de la Propiedad Intelectual e Industrial configurado mediante el Real DecretoLegislativo 1/1996, de 12 de abril, por el que se aprueba el Texto Refundido de la Ley de Propiedad Intelectual, enlo referente al software, establece que son objeto de protecci&oacute;n:";
 choices[42]= new Array();
 choices[42][0] = "Exclusivamente los programas de ordenador, entendidos como secuencias de instrucciones o indicacionesdestinadas a ser utilizadas en un sistema inform&aacute;tico para realizar una determinada funci&oacute;n o tarea";
 choices[42][1] = "Los programas de ordenador y su documentaci&oacute;n preparatoria, comprendi&eacute;ndose en dicho concepto ladocumentaci&oacute;n t&eacute;cnica y los manuales de uso del programa";
 choices[42][2] = "Los programas de ordenador y todas las definiciones documentadas de sus interfaces que posibilitan el usocolaborativo del software";
 choices[42][3] = "&Uacute;nicamente los algoritmos y conceptos inventivos documentados en los que se basan cualquiera de loselementos de los programas de ordenador";
 answers[42] = choices[42][1];
 units[42] = "36";
 comments[42] = "Id Pregunta: 4857. ";


//  Id pregunta: 5264 AÃ±o de creación de pregunta: 2003-01-01
 questions[43]= "44)  En la LAECSP se hace referencia a una serie de aspectos a reconsiderar a la hora de aplicar medios electr&oacute;nicos en la gesti&oacute;n de procedimientos. Entre dichos aspectos figura:";
 choices[43]= new Array();
 choices[43][0] = "Obligar al uso del DNIe a los ciudadanos";
 choices[43][1] = "Supresi&oacute;n o reducci&oacute;n de la documentaci&oacute;n requerida a los ciudadanos";
 choices[43][2] = "Integrar en los mismos el uso del correo electr&oacute;nico";
 choices[43][3] = "Ninguno de los anteriores";
 answers[43] = choices[43][1];
 units[43] = "43";
 comments[43] = "Id Pregunta: 5264. Art&iacute;culo 34 Ley 1172007";


//  Id pregunta: 5269 AÃ±o de creación de pregunta: 2003-01-01
 questions[44]= "45)  La identificaci&oacute;n inequ&iacute;voca y personalizada de todos aquellos que tienen acceso a un fichero de datos de car&aacute;cter personal es calificada en el RD 1720/2007 como una medida de seguridad de nivel de car&aacute;cter";
 choices[44]= new Array();
 choices[44][0] = "basico";
 choices[44][1] = "medio";
 choices[44][2] = "alto";
 choices[44][3] = "Ninguna de las anteriores";
 answers[44] = choices[44][0];
 units[44] = "29";
 comments[44] = "Id Pregunta: 5269. ";


//  Id pregunta: 5554 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  Los documentos ATAG:";
 choices[45]= new Array();
 choices[45][0] = "Muestran c&oacute;mo hacer que las herramientas de autor sean accesibles para personas con discapacidad.";
 choices[45][1] = "Muestran c&oacute;mo hacer  que los reproductores multimedia sean accesibles a personas con discapacidad.";
 choices[45][2] = "Est&aacute;n pensados para el contenido web.";
 choices[45][3] = "Todas las anteriores son correctas.";
 answers[45] = choices[45][0];
 units[45] = "39";
 comments[45] = "Id Pregunta: 5554. ";


//  Id pregunta: 5585 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  &iquest;En qu&eacute; tipos de contratos p&uacute;blicos es exigible la Clasificaci&oacute;n del empresario, seg&uacute;n el RD Legislativo 3/2011 de contratos del sector p&uacute;blico?";
 choices[46]= new Array();
 choices[46][0] = "En contratos de concesi&oacute;n de obras publicas &uacute;nicamente";
 choices[46][1] = "En los nuevos contratos de colaboraci&oacute;n entre el sector p&uacute;blico y privado, siempre que la cuant&iacute;a del mismo sea superior a 100.000 euros";
 choices[46][2] = "En los contratos de obras de importe igual o superior a 500.000 &euro;. Para los contratos de servicios no ser&aacute; exigible la clasificaci&oacute;n del empresario.";
 choices[46][3] = "La figura de la Clasificaci&oacute;n se ha suprimido en la nueva Ley";
 answers[46] = choices[46][2];
 units[46] = "41";
 comments[46] = "Id Pregunta: 5585. Art. 65.1.b) del RD Legislativo 3/2011, modificado por la Ley 25/2013 que elimina la clasificaci&oacute;n en contratos de servicios.";


//  Id pregunta: 5596 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  Los acuerdos marco, articulados en el RD Legislativo 3/2011 de contratos del sector p&uacute;blico...";
 choices[47]= new Array();
 choices[47][0] = "Permiten a las distintas administraciones p&uacute;blicas llegar a un acuerdo entre s&iacute; sobre puntos de contrataci&oacute;n comunes";
 choices[47][1] = "La duraci&oacute;n del acuerdo marco, podr&aacute;, con caracter general, superar los 4 a&ntilde;os de duraci&oacute;n";
 choices[47][2] = "Permiten a los &oacute;rganos de contrataci&oacute;n llegar a un acuerdo con uno o varios empresarios para fijar las condiciones de los contratos adjudicados en un per&iacute;odo de tiempo determinado";
 choices[47][3] = "Suponen la creaci&oacute;n de la comisi&oacute;n de acuerdos marco, dependiente del ministerio de econom&iacute;a y hacienda";
 answers[47] = choices[47][2];
 units[47] = "41";
 comments[47] = "Id Pregunta: 5596. ";


//  Id pregunta: 5650 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  Seg&uacute;n el RD 1720/2007, por el que se aprueba el desarrollo de la Ley Organica 15/1999 de protecci&oacute;n de datos de carater personal, ser&aacute; posible el tratamiento o la cesi&oacute;n de los datos de car&aacute;cter personal sin necesidad del consentimiento del interesado cuando";
 choices[48]= new Array();
 choices[48][0] = "En ningun caso. Siempre es necesario consentimiento del interesado.";
 choices[48][1] = "Lo autorice una norma con rango de ley o una norma dederecho comunitario.";
 choices[48][2] = "Los datos objeto de tratamiento o cesion figuran en fuentes accesibles al publico y el responsable del fichero tenga un interes legitimo para su conocimiento.";
 choices[48][3] = "La b) y la c) son correctas.";
 answers[48] = choices[48][3];
 units[48] = "29";
 comments[48] = "Id Pregunta: 5650. ";


//  Id pregunta: 5653 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  Seg&uacute;n el RD 1720/2007, a partir de que nivel de seguridad los sistemas de informaci&oacute;n e instalaciones deber&aacute;n someterse a una auditor&iacute;a, al menos cada dos a&ntilde;os";
 choices[49]= new Array();
 choices[49][0] = "nivel b&aacute;sico";
 choices[49][1] = "nivel medio";
 choices[49][2] = "nivel alto";
 choices[49][3] = "En ningun caso";
 answers[49] = choices[49][1];
 units[49] = "29";
 comments[49] = "Id Pregunta: 5653. ";


//  Id pregunta: 5662 AÃ±o de creación de pregunta: 2009-01-01
 questions[50]= "51)  Seg&uacute;n el Real Decreto 1720/2007, que se entiende por &quot;Fichero no automatizado&quot;";
 choices[50]= new Array();
 choices[50][0] = "Todo conjunto organizado de datos de car&aacute;cter personal, que permita el acceso a los datos con arreglo a criterios determinados, cualquiera que fuere la forma o modalidad de su creaci&oacute;n, almacenamiento, organizaci&oacute;n y acceso. ";
 choices[50][1] = "Todo conjunto de datos de car&aacute;cter personal organizado de forma no automatizada y estructurado conforme a criterios espec&iacute;ficos relativos a personas f&iacute;sicas, que permitan acceder sin esfuerzos desproporcionados a sus datos personales, ya sea aqu&eacute;l centralizado, descentralizado o repartido de forma funcional o geogr&aacute;fica";
 choices[50][2] = "Todo conjunto organizado de datos, que permita el acceso a los datos con arreglo a criterios determinados, cualquiera que fuere la forma o modalidad de su creaci&oacute;n, almacenamiento, organizaci&oacute;n y acceso. ";
 choices[50][3] = "No existe tal definici&oacute;n en el nombrado Real Decreto";
 answers[50] = choices[50][1];
 units[50] = "29";
 comments[50] = "Id Pregunta: 5662. ";


//  Id pregunta: 5762 AÃ±o de creación de pregunta: 2001-01-01
 questions[51]= "52)  La Tasa Interna de Retorno (TIR) de una inversi&oacute;n:";
 choices[51]= new Array();
 choices[51][0] = "Seg&uacute;n el criterio del TIR, una inversi&oacute;n ser&aacute; efectuable cuando su rentabilidad esperada sea superior a la rentabilidad exigida";
 choices[51][1] = "Es el valor del tipo de descuento que hace que el Valor Actual Neto (VAN) de una inversi&oacute;n sea igual a cero.";
 choices[51][2] = "El TIR indica la rentabilidad relativa, mientras que el VAN indica la rentabilidad absoluta de la inversi&oacute;n en unidades monetarias";
 choices[51][3] = "Todas las anteriores son ciertas";
 answers[51] = choices[51][3];
 units[51] = "38";
 comments[51] = "Id Pregunta: 5762. NULL";


//  Id pregunta: 5807 AÃ±o de creación de pregunta: 2009-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l no es en general cierto a la hora de tomar una decisi&oacute;n sobre adquirir o desarrollar a medida un software?";
 choices[52]= new Array();
 choices[52][0] = "Si existe un software que satisface los requisitos aunque requiere alguna adaptaci&oacute;n deber&iacute;amos prodecer con cuidado a la hora de adquirirlo, ya que el coste de modificar el software podr&iacute;a superar el coste de desarrollarlo a medida.";
 choices[52][1] = "Si existe un software que satisface los requisitos aunque requiere alguna adaptaci&oacute;n deber&iacute;amos adquirirlo, ya que el coste de modificar el software es siempre inferior al coste de desarrollarlo a medida.";
 choices[52][2] = "Si existe un software que satisface los requisitos deber&iacute;amos adquirirlo, ya que el coste de desarrollar un software equivalente ser&aacute; en general mayor que el la adquisici&oacute;n.";
 choices[52][3] = "Si existe un software que satisface los requisitos deber&iacute;amos tener en cuenta tambi&eacute;n el coste que supone el mantenimiento del mismo para los a&ntilde;os siguientes, ya que en muchos productos comerciales el coste del mantenimiento suele ser un gasto importante.";
 answers[52] = choices[52][1];
 units[52] = "35";
 comments[52] = "Id Pregunta: 5807. NULL";


//  Id pregunta: 5818 AÃ±o de creación de pregunta: 2009-01-01
 questions[53]= "54)  Seg&uacute;n el RD Legislativo 3/2011 de Contratos del Sector p&uacute;blico, en su Disposici&oacute;n Adicional Decimosexta, las aplicaciones que se utilicen para efectuar las comunicaciones, notificaciones,y env&iacute;os documentales entre los licitadores y los &oacute;rganos de contrataci&oacute;n deber&aacute;n poder acreditar:";
 choices[53]= new Array();
 choices[53][0] = "La fecha y hora de su emisi&oacute;n o recepci&oacute;n,la integridad de su contenido, la confidencialidad, y el remitente y destinatario de las mismas";
 choices[53][1] = "La fecha y hora de su emisi&oacute;n o recepci&oacute;n,la integridad de su contenido y el remitente y destinatario de las mismas";
 choices[53][2] = "La fecha y hora de su recepci&oacute;n,la integridad de su contenido y el remitente de las mismas";
 choices[53][3] = "Ninguna de las anteriores es cierta";
 answers[53] = choices[53][1];
 units[53] = "41";
 comments[53] = "Id Pregunta: 5818. ";


//  Id pregunta: 5825 AÃ±o de creación de pregunta: 2009-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes afirmaciones es INCORRECTA para el programa IDABC?";
 choices[54]= new Array();
 choices[54][0] = "Es gestionado por el Comit&eacute; de Servicios Paneuropeos de Administraci&oacute;n Electr&oacute;nica (CSPAE)";
 choices[54][1] = "Se configura como el instrumento clave para llevar a cabo lo previsto en el Plan de Acci&oacute;n eEurope 2005 y sucesivos sobre el desarrollo de servicios paneuropeos";
 choices[54][2] = "Ejecuta lo previsto en la Decisi&oacute;n 2004/387/CE del Consejo UE y PE";
 choices[54][3] = "El proyecto complementario IDABD extiende esta normativa a particulares y empresas";
 answers[54] = choices[54][3];
 units[54] = "40";
 comments[54] = "Id Pregunta: 5825. MAP 2008 A1";


//  Id pregunta: 5954 AÃ±o de creación de pregunta: 2009-01-01
 questions[55]= "56)  Respecto al uso de Lenguas Oficiales, la Ley 11/2007 de AECSP, especifica lo siguiente:";
 choices[55]= new Array();
 choices[55][0] = "Las sedes electr&oacute;nicas cuyo titular sit&uacute;e su domicilio social sobre territorios con r&eacute;gimen de cooficialidad ling&uuml;&iacute;stica posibilitar&aacute;n el acceso a sus contenidos y servicios en las lenguas correspondientes";
 choices[55][1] = "Se podr&aacute; permitir el uso de las lenguas oficiales del Estado en las relaciones por medios electr&oacute;nicos de los ciudadanos con las Administraciones P&uacute;blicas, en los t&eacute;rminos previstos en la Ley 30/1992, de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y del Procedimiento Administrativo Com&uacute;n y en la normativa que en cada caso resulte de aplicaci&oacute;n.";
 choices[55][2] = "Los sistemas y aplicaciones utilizados en la gesti&oacute;n electr&oacute;nica de los procedimientos se adaptar&aacute;n a lo dispuesto en cuanto al uso de lenguas cooficiales en el art&iacute;culo 36 de la Ley 30/1992, de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y el Procedimiento Administrativo Com&uacute;n.";
 choices[55][3] = "Cada Administraci&oacute;n P&uacute;blica afectada determinar&aacute; el calendario para el cumplimiento progresivo de lo previsto en la presente disposici&oacute;n, debiendo garantizar su cumplimiento total a partir del 31 de diciembre de 2009";
 answers[55] = choices[55][2];
 units[55] = "43";
 comments[55] = "Id Pregunta: 5954. Disposici&oacute;n Adicional sexta. ";


//  Id pregunta: 6058 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  Qu&eacute; asociaci&oacute;n entre organismos internacionales y europeos es la correcta?";
 choices[56]= new Array();
 choices[56][0] = "IEC-CENELEC, UIT-ETSI, ISO-CEN.";
 choices[56][1] = "IEC-CEN, ISO-CENELEC, ITU-ETSI.";
 choices[56][2] = "ISO-CEN, IEEE-IEC, ETSI-CENELEC.";
 choices[56][3] = "IEC-CENELEC, IEEE-ETSI, ISO-CEN.";
 answers[56] = choices[56][0];
 units[56] = "42";
 comments[56] = "Id Pregunta: 6058. TIC A 2009";


//  Id pregunta: 6130 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  Cuando puntuamos criterios de diferentes alternativas y nos referimos al umbral de saciedad, entendemos por tal:";
 choices[57]= new Array();
 choices[57][0] = "El valor que debe cumplir la puntuaci&oacute;n de un criterio para ser considerado aceptable. por tanto es el m&iacute;nimo exigido.";
 choices[57][1] = "El valor de un criterio a partir del cual no se obtiene una utilidad adicional, por lo que su exceso no es tenido en cuenta.";
 choices[57][2] = "Un valor ordinal definido por el evaluador conforme a una escala subjetiva.";
 choices[57][3] = "Un m&eacute;todo de limitaci&oacute;n de la asignaci&oacute;n de puntuaciones mediante entrop&iacute;a. Se dice entonces que el criterio est&aacute; saciado.";
 answers[57] = choices[57][1];
 units[57] = "34";
 comments[57] = "Id Pregunta: 6130. TIC A 2009";


//  Id pregunta: 6376 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de las siguientes sentencias corresponde con la definici&oacute;n de Interoperabilidad Sem&aacute;ntica dada por el Esquema Nacional de Interoperabilidad?";
 choices[58]= new Array();
 choices[58][0] = "Es aquella dimensi&oacute;n de la interoperabilidad relativa a la capacidad de las entidades y de los procesos a trav&eacute;s de los cuales llevan a cabo sus actividades para colaborar con el objeto de alcanzar logros mutuamente acordados relativos a los servicios que prestan.";
 choices[58][1] = "Es aquella dimensi&oacute;n de la interoperabilidad relativa a que la informaci&oacute;n intercambiada pueda ser interpretable de forma autom&aacute;tica y reutilizable por aplicaciones que no intervinieron en su creaci&oacute;n.";
 choices[58][2] = "Es aquella dimensi&oacute;n de la interoperabilidad relativa a la relaci&oacute;n entre sistemas y servicios de tecnolog&iacute;as de la informaci&oacute;n, incluyendo aspectos tales como las interfaces, la interconexi&oacute;n, la integraci&oacute;n de datos y servicios, la presentaci&oacute;n de la informaci&oacute;n, la accesibilidad y la seguridad, u otros de naturaleza an&aacute;loga.";
 choices[58][3] = "Es aquella dimensi&oacute;n de la interoperabilidad relativa a la interacci&oacute;n entre elementos que corresponden a diversas oleadas tecnol&oacute;gicas; se manifiesta especialmente en la conservaci&oacute;n de la informaci&oacute;n en soporte electr&oacute;nico.";
 answers[58] = choices[58][1];
 units[58] = "43";
 comments[58] = "Id Pregunta: 6376. Anexo ENI";


//  Id pregunta: 6404 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  Cuando un trabajador asalariado cree un programa de ordenador, en el ejercicio de las funciones que le han sido confiadas o siguiendo las instrucciones de su empresario, &iquest;a qui&eacute;n corresponde la titularidad de los derechos de explotaci&oacute;n?";
 choices[59]= new Array();
 choices[59][0] = "Al empresario, salvo pacto en contrario";
 choices[59][1] = "Al trabajador, en todo caso";
 choices[59][2] = "Al empresario, en todo caso";
 choices[59][3] = "Al trabajador, salvo pacto en contrario";
 answers[59] = choices[59][0];
 units[59] = "36";
 comments[59] = "Id Pregunta: 6404. Art&iacute;culo 97 RDL 1/1996";


//  Id pregunta: 7139 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  La Ley Org&aacute;nica 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal, marca el periodo de prescripci&oacute;n de una infracci&oacute;n grave en:";
 choices[60]= new Array();
 choices[60][0] = "1 a&ntilde;o";
 choices[60][1] = "2 a&ntilde;os";
 choices[60][2] = "6 meses";
 choices[60][3] = "10 meses";
 answers[60] = choices[60][1];
 units[60] = "29";
 comments[60] = "Id Pregunta: 7139. Examen TIC B 2009";


//  Id pregunta: 7144 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de las siguientes respuestas es objeto de protecci&oacute;n de los derechos de autor seg&uacute;n el Texto Refundido de la Ley de Protecci&oacute;n Individual?";
 choices[61]= new Array();
 choices[61][0] = "Las ideas y principios en los que se basan cualquiera de los elementos de un programa de ordenador";
 choices[61][1] = "Las ideas y principios que sirven de fundamento a los interfaces de programa";
 choices[61][2] = "La documentaci&oacute;n t&eacute;cnica y los manuales de uso de un programa";
 choices[61][3] = "Cualesquiera versi&oacute;n sucesiva del programa, incluidas aquellas creadas con el fin de ocasionar efectos nocivos a un sistema inform&aacute;tico";
 answers[61] = choices[61][2];
 units[61] = "36";
 comments[61] = "Id Pregunta: 7144. Examen TIC B 2009";


//  Id pregunta: 7329 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  Se&ntilde;ale la afirmaci&oacute;n VERDADERA con respecto a AENOR:";
 choices[62]= new Array();
 choices[62][0] = "Es una Entidad P&uacute;blica Empresarial";
 choices[62][1] = "No tiene &aacute;nimo de lucro";
 choices[62][2] = "Depende org&aacute;nicamente de la Secretar&iacute;a de Estado de Telecomunicaciones y para la sociedad de la Informaci&oacute;n";
 choices[62][3] = "Est&aacute; reconocida como organismo de normalizaci&oacute;n y para actuar como entidad de certificaci&oacute;n por el Real Decreto 200/1995";
 answers[62] = choices[62][1];
 units[62] = "42";
 comments[62] = "Id Pregunta: 7329. www.aenor.es";


//  Id pregunta: 7333 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  La International Telecommunication Union (ITU)  es el organismo especializado de la Organizaci&oacute;n de las Naciones Unidas encargado de regular las telecomunicaciones a nivel internacional entre las distintas administraciones y empresas operadoras. Se divide en varios sectores, el correspondiente a Telecomunicaciones se denomina:";
 choices[63]= new Array();
 choices[63][0] = "ITU-T";
 choices[63][1] = "ITU-R";
 choices[63][2] = "ITU-D";
 choices[63][3] = "ITU-C";
 answers[63] = choices[63][0];
 units[63] = "42";
 comments[63] = "Id Pregunta: 7333. NULL";


//  Id pregunta: 7357 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  Se&ntilde;ale la CORRECTA:";
 choices[64]= new Array();
 choices[64][0] = "Los m&eacute;todos din&aacute;micos empleados para analizar la rentabilidad de las inversiones incorporan el factor tiempo, encontraposici&oacute;n a los m&eacute;todos est&aacute;ticos, y tienen en cuenta el hecho de que los capitales tienen distinto valor en funci&oacute;ndel momento en que se generan.";
 choices[64][1] = "El VAN y el TIR son m&eacute;todos din&aacute;micos de an&aacute;lisis de rentabilidad";
 choices[64][2] = "Cuando el VAN es positivo la inversi&oacute;n es rentable";
 choices[64][3] = "Todas son CORRECTAS";
 answers[64] = choices[64][3];
 units[64] = "38";
 comments[64] = "Id Pregunta: 7357. NULL";


//  Id pregunta: 8282 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  &iquest;C&oacute;mo se denomina el informe elaborado bajo el impulso de la Comisi&oacute;n Permanente del Consejo Superior de Administraci&oacute;n Electr&oacute;nica para analizar, sobre todo cuantitativamente, el sector TIC en la AGE?:";
 choices[65]= new Array();
 choices[65][0] = "Informe PRINCESA.";
 choices[65][1] = "Informe TECNIMAP.";
 choices[65][2] = "Informe LIRIA.";
 choices[65][3] = "Informe REINA.";
 answers[65] = choices[65][3];
 units[65] = "24, 25";
 comments[65] = "Id Pregunta: 8282. Examen TIC A1 2010";


//  Id pregunta: 8361 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  En el contexto de herramientas de evaluaci&oacute;n de la accesibilidad web, se&ntilde;ale la herramienta INCORRECTA: ";
 choices[66]= new Array();
 choices[66][0] = "WAVE.";
 choices[66][1] = "TrueCrypt.";
 choices[66][2] = "CSS Analyser.";
 choices[66][3] = "TAW.";
 answers[66] = choices[66][1];
 units[66] = "39";
 comments[66] = "Id Pregunta: 8361. Examen TIC A2 2010";


//  Id pregunta: 8405 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  Se&ntilde;ale cu&aacute;l de los siguientes servicios NO se ofrece en la plataforma de validaci&oacute;n y firma electr&oacute;nica @Firma: ";
 choices[67]= new Array();
 choices[67][0] = "Sellado de tiempo (TSA) seg&uacute;n la RFC 3161";
 choices[67][1] = "Validaci&oacute;n, conforme a la RFC 3280, de certificados X.509 de todas las Autoridades de Certificaci&oacute;n reconocidas en el pa&iacute;s por el Ministerio de Industria, Turismo y Comercio ";
 choices[67][2] = "Expedici&oacute;n de certificados de firma electr&oacute;nica del personal al servicio de las Administraciones P&uacute;blicas para el cumplimiento de sus funciones";
 choices[67][3] = "Validaci&oacute;n de firma v&iacute;a servicios web (WS) de un elemento firmado. ";
 answers[67] = choices[67][2];
 units[67] = "44";
 comments[67] = "Id Pregunta: 8405. Examen TIC A2 2010";


//  Id pregunta: 8439 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  &iquest;Bajo cu&aacute;les de las siguientes circunstancias no pueden ser rechazados los documentos electr&oacute;nicos presentados en un registro electr&oacute;nico seg&uacute;n el RD 1671/2009?";
 choices[68]= new Array();
 choices[68][0] = "Que se trate de documentos dirigidos a &oacute;rganos u organismos fuera del &aacute;mbito de la Administraci&oacute;n General del Estado.";
 choices[68][1] = "Que se trate de documentos que de acuerdo con lo establecido en los art&iacute;culos 14 y 32 deban presentarse en registros electr&oacute;nicos espec&iacute;ficos.";
 choices[68][2] = "Que contengan c&oacute;digo malicioso o dispositivo susceptible de afectar a la integridad o seguridad del sistema.";
 choices[68][3] = "En el caso de utilizaci&oacute;n de documentos normalizados.";
 answers[68] = choices[68][3];
 units[68] = "43";
 comments[68] = "Id Pregunta: 8439. ";


//  Id pregunta: 8899 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  Se&ntilde;ale cu&aacute;l de los siguientes no es un m&eacute;todo de ordenaci&oacute;n de alternativas";
 choices[69]= new Array();
 choices[69][0] = "M&eacute;todo de la ponderaci&oacute;n lineal";
 choices[69][1] = "M&eacute;todo de TOPSIS";
 choices[69][2] = "M&eacute;todo Delphi";
 choices[69][3] = "M&eacute;todo Lexicogr&aacute;fico";
 answers[69] = choices[69][2];
 units[69] = "34";
 comments[69] = "Id Pregunta: 8899. ";


//  Id pregunta: 8947 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  Seg&uacute;n el Esquema Nacional de Seguridad, &iquest;cu&aacute;ndo se deben registrar todas las actividades de los usuarios en el sistema?";
 choices[70]= new Array();
 choices[70][0] = "Cuando la categor&iacute;a del sistema sea alta";
 choices[70][1] = "Cuando as&iacute; lo decida el responsable de los servidores";
 choices[70][2] = "Cuando la dimensi&oacute;n de trazabilidad sea de nivel alto";
 choices[70][3] = "En todos los casos anteriores";
 answers[70] = choices[70][2];
 units[70] = "43";
 comments[70] = "Id Pregunta: 8947. ";


//  Id pregunta: 9078 AÃ±o de creación de pregunta: 2013-01-01
 questions[71]= "72)  &quot;Ayuda a la entrada de datos&quot; es una pauta enmarcada en el principio:";
 choices[71]= new Array();
 choices[71][0] = "Perceptible. ";
 choices[71][1] = "Operable. ";
 choices[71][2] = "Comprensible.";
 choices[71][3] = "Robusto.";
 answers[71] = choices[71][2];
 units[71] = "39";
 comments[71] = "Id Pregunta: 9078. ";


//  Id pregunta: 9306 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  &iquest;Qu&eacute; se entiende por control interno?";
 choices[72]= new Array();
 choices[72][0] = "Cualquier actividad autom&aacute;tica empleada para prevenir o corregir errores que puedan afectar al funcionamiento de un sistema";
 choices[72][1] = "Cualquier actividad manual empleada para prevenir o corregir errores que puedan afectar al funcionamiento de un sistema";
 choices[72][2] = "Cualquier actividad manual o autom&aacute;tica empleada para prevenir o corregir errores que puedan afectar al funcionamiento de un sistema";
 choices[72][3] = "Ninguna de las anteriores";
 answers[72] = choices[72][2];
 units[72] = "31";
 comments[72] = "Id Pregunta: 9306. ";


//  Id pregunta: 9377 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  &iquest;Qu&eacute; m&eacute;todo de asignaci&oacute;n de pesos no soporta la herramienta inform&aacute;tica SSD-AAPP?";
 choices[73]= new Array();
 choices[73][0] = "Asignaci&oacute;n directa";
 choices[73][1] = "Entrop&iacute;a";
 choices[73][2] = "SAATY";
 choices[73][3] = "La herramienta SSD-AAPP soporta todos los m&eacute;todos anteriores de asignaci&oacute;n de pesos";
 answers[73] = choices[73][3];
 units[73] = "34";
 comments[73] = "Id Pregunta: 9377. ";


//  Id pregunta: 9593 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  El Real Decreto 1671/2009, por el que se desarrolla parcialmente la Ley 11/2007, establece el contenido m&iacute;nimo de las sedes electr&oacute;nicas. Entre dicho contenido m&iacute;nimo est&aacute;:";
 choices[74]= new Array();
 choices[74][0] = "Medios disponibles para la formulaci&oacute;n de sugerencias y quejas.";
 choices[74][1] = "Identificaci&oacute;n de la direcci&oacute;n electr&oacute;nica del responsable t&eacute;cnico de la sede.";
 choices[74][2] = "&Aacute;mbito de aplicaci&oacute;n de la sede, que no podr&aacute; ser la totalidad del Ministerio u organismo p&uacute;blico.";
 choices[74][3] = "Identificaci&oacute;n de los canales de acceso a los servicios disponibles en la sede, los cuales no podr&aacute;n tratarse, en ning&uacute;n caso, de tel&eacute;fonos y oficinas, sino de canales exclusivamente electr&oacute;nicos. ";
 answers[74] = choices[74][0];
 units[74] = "43";
 comments[74] = "Id Pregunta: 9593. Examen TIC A2 2011 interna";


//  Id pregunta: 9661 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  La Ley 11/2007 tiene en cuenta &quot;Otros sistemas de firma&quot;, que podr&aacute;n ser creados mediante:";
 choices[75]= new Array();
 choices[75][0] = "Real Decreto del Gobierno, previo informe de la CSAE";
 choices[75][1] = "Informe de la CSAE";
 choices[75][2] = "Orden Ministerial o Resoluci&oacute;n, previo informe de la CSAE.";
 choices[75][3] = "No necesita reglamento para su creaci&oacute;n.";
 answers[75] = choices[75][2];
 units[75] = "43";
 comments[75] = "Id Pregunta: 9661. NULL";


//  Id pregunta: 9776 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  Para entornos Unix, indica c&oacute;mo se asigna el sticky bit a un directorio:";
 choices[76]= new Array();
 choices[76][0] = "chmod u+s /directorio/fichero ";
 choices[76][1] = "chmog g+s /directorio ";
 choices[76][2] = "chmod 177 /directorio ";
 choices[76][3] = "chmod +t /directorio ";
 answers[76] = choices[76][3];
 units[76] = "53";
 comments[76] = "Id Pregunta: 9776. Examen TIC A2 2013";


//  Id pregunta: 9880 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  Atendiendo al RD 4/2010 de 8 de enero por el que se regula el Esquema Nacional deInteroperabilidad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, la exigencia de que las Administraciones P&uacute;blicas deban usar est&aacute;ndares abiertos y, en su caso, est&aacute;ndares que sean de uso generalizado por los ciudadanos, es un principio de";
 choices[77]= new Array();
 choices[77][0] = "interoperabilidad t&eacute;cnica.";
 choices[77][1] = "interoperabilidad organizativa.";
 choices[77][2] = "gesti&oacute;n de riesgos.";
 choices[77][3] = "auditor&iacute;a de seguridad.";
 answers[77] = choices[77][0];
 units[77] = "43";
 comments[77] = "Id Pregunta: 9880. TIC A1, Examen 2013";


//  Id pregunta: 10152 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  El registro electr&oacute;nico que permite hacer constar y gestionar las representaciones que los interesados otorguen a terceros, con el fin de que &eacute;stos puedan actuar en su nombre de forma electr&oacute;nica ante la Administraci&oacute;n General del Estado y/o sus organismos p&uacute;blicos vinculados o dependientes:";
 choices[78]= new Array();
 choices[78][0] = "se crea en el RD 1671/2009 (art. 15) ";
 choices[78][1] = "se denomina REA (Registro Electr&oacute;nico de Apoderamiento)";
 choices[78][2] = "est&aacute; regulado por la Orden HAP/1637/2012";
 choices[78][3] = "Todas las anteriores son ciertas";
 answers[78] = choices[78][3];
 units[78] = "43";
 comments[78] = "Id Pregunta: 10152. ";


//  Id pregunta: 10157 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Reutilizaci&oacute;n de recursos de la informaci&oacute;n, cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[79]= new Array();
 choices[79][0] = "Los recursos reutilizables estar&aacute;n identificados mediante referencias &uacute;nicas y un&iacute;vocas, basadas en identificadores de recursos uniformes (URI).";
 choices[79][1] = "Se usar&aacute;n est&aacute;ndares abiertos o de uso generalizado por la ciudadan&iacute;a, ci&ntilde;&eacute;ndose a lo establecido en la NTI de Cat&aacute;logo de Est&aacute;ndares. ";
 choices[79][2] = "Los datos se encontrar&aacute;n agregados para facilitar la reutilizaci&oacute;n.";
 choices[79][3] = "Para facilitar la reutilizaci&oacute;n de vocabularios se utilizar&aacute; el Centro de Interoperabilidad Sem&aacute;ntica";
 answers[79] = choices[79][2];
 units[79] = "43";
 comments[79] = "Id Pregunta: 10157. ";


//  Id pregunta: 10158 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  El servicio que da respuesta a la implementaci&oacute;n de la medida CORA 3.00.002.8, &quot;Concentraci&oacute;n de la gesti&oacute;n, producci&oacute;n, impresi&oacute;n y distribuci&oacute;n de las notificaciones y comunicaciones postales en centros de impresi&oacute;n y ensobrado con dimensi&oacute;n &oacute;ptima&quot; se denomina:";
 choices[80]= new Array();
 choices[80][0] = "SNE";
 choices[80][1] = "NoTe";
 choices[80][2] = "Notific@";
 choices[80][3] = "GESNOTE";
 answers[80] = choices[80][2];
 units[80] = "44";
 comments[80] = "Id Pregunta: 10158. ";


//  Id pregunta: 10214 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  Tres alternativas A, B y C han obtenido respectivamente las puntuaciones directas 300, 450 y 250 respecto de un criterio. Seg&uacute;n el m&eacute;todo de fracci&oacute;n del ideal, &iquest;qu&eacute; puntuaci&oacute;n normalizada corresponde a la alternativa A?";
 choices[81]= new Array();
 choices[81][0] = "0,25 puntos";
 choices[81][1] = "0,75 puntos";
 choices[81][2] = "0,33 puntos";
 choices[81][3] = "0,66 puntos";
 answers[81] = choices[81][0];
 units[81] = "34";
 comments[81] = "Id Pregunta: 10214. Puntuaci&oacute;n normalizada por factor del ideal = (puntuacion - puntuacion_min) / (puntuacion_max - puntuacion_min) = (300 - 250) / (450 - 250) = 0,25";


//  Id pregunta: 10427 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  De acuerdo con la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los Servicios P&uacute;blicos, el principio de simplificaci&oacute;n administrativa al que se ajustar&aacute; la utilizaci&oacute;n de las tecnolog&iacute;as de la informaci&oacute;n, establece ";
 choices[82]= new Array();
 choices[82][0] = "la m&aacute;xima difusi&oacute;n, publicidad y transparencia del procedimiento.";
 choices[82][1] = "el requerimiento a los ciudadanos de s&oacute;lo aquellos datos que sean estrictamente necesarios a la finalidad para la que se soliciten. ";
 choices[82][2] = "la no utilizaci&oacute;n de medios electr&oacute;nicos que puedan implicar restricciones o";
 choices[82][3] = "la reducci&oacute;n de manera sustancial de los t&eacute;rminos y plazos de los procedimientos administrativos. ";
 answers[82] = choices[82][3];
 units[82] = "30";
 comments[82] = "Id Pregunta: 10427. Examen TIC A1 2013";


//  Id pregunta: 10544 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  El quince de febrero de 2013 el Consejo de Ministros aprob&oacute; la Agenda Digital para Espa&ntilde;a como la estrategia del Gobierno para desarrollar la econom&iacute;a y la sociedad digital en Espa&ntilde;a durante el periodo 2013-2015.";
 choices[83]= new Array();
 choices[83][0] = "Esta estrategia se configura como el paraguas de todas las acciones del Gobierno en materia de Telecomunicaciones y de Sociedad de la Informaci&oacute;n. La Agenda se lidera conjuntamente por el Ministerio de Industria, Energ&iacute;a y Turismo y por el Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[83][1] = "Esta estrategia se configura como el paraguas de todas las acciones del Gobierno en materia de Telecomunicaciones y de Sociedad de la Informaci&oacute;n. La Agenda se lidera conjuntamente por el Ministerio de Industria, Energ&iacute;a y Turismo y por la Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 choices[83][2] = "Esta estrategia se configura como el paraguas de todas las acciones del Gobierno en materia de Administraci&oacute;n Electr&oacute;nica. La Agenda se lidera conjuntamente por el Ministerio de Industria, Energ&iacute;a y Turismo y por el Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[83][3] = "Esta estrategia se configura como el paraguas de todas las acciones del Gobierno en materia de Administraci&oacute;n Electr&oacute;nica. La Agenda se lidera conjuntamente por el Ministerio de Industria, Energ&iacute;a y Turismo y por la Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 answers[83] = choices[83][0];
 units[83] = "30";
 comments[83] = "Id Pregunta: 10544. http://www.agendadigital.gob.es/agenda-digital/Paginas/agenda-digital.aspx";


//  Id pregunta: 10580 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  No es objetivo de la Ley 11/2007:";
 choices[84]= new Array();
 choices[84][0] = "Reconocer el derecho de los ciudadanos a relacionarse con las Administraciones P&uacute;blicas por medios electr&oacute;nicos.";
 choices[84][1] = "Garantizar el acceso a todos los servicios electr&oacute;nicos.";
 choices[84][2] = "Aumentar la utilizaci&oacute;n del DNI electr&oacute;nico por los ciudadanos.";
 choices[84][3] = "Impulsar el uso de los servicios electr&oacute;nicos.";
 answers[84] = choices[84][2];
 units[84] = "43";
 comments[84] = "Id Pregunta: 10580. ";


//  Id pregunta: 10672 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  Fecha de publicaci&oacute;n de la Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas.";
 choices[85]= new Array();
 choices[85][0] = "1 de Junio de 2015";
 choices[85][1] = "1 de Julio de 2015";
 choices[85][2] = "2 de Octubre de 2015";
 choices[85][3] = "1 de Noviembre de 2015";
 answers[85] = choices[85][2];
 units[85] = "30";
 comments[85] = "Id Pregunta: 10672. ";


//  Id pregunta: 10716 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  &iquest;Qu&eacute; aspecto no se define en una pol&iacute;tica de firma seg&uacute;n la NTI de firma electr&oacute;nica?";
 choices[86]= new Array();
 choices[86][0] = "Los procesos de creaci&oacute;n de firmas electr&oacute;nicas.";
 choices[86][1] = "Los procesos de modificaci&oacute;n de firmas electr&oacute;nicas.";
 choices[86][2] = "Los procesos de validaci&oacute;n de firmas electr&oacute;nicas.";
 choices[86][3] = "Los procesos de conservaci&oacute;n de firmas electr&oacute;nicas.";
 answers[86] = choices[86][1];
 units[86] = "43";
 comments[86] = "Id Pregunta: 10716. ";


//  Id pregunta: 10721 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  Seg&uacute;n la NTI de Gesti&oacute;n de Pol&iacute;tica de gesti&oacute;n de documentos electr&oacute;nicos. &iquest;Qu&eacute; no es necesario que incluya la pol&iacute;tica de gesti&oacute;n de documentos electr&oacute;nicos?";
 choices[87]= new Array();
 choices[87][0] = "Definici&oacute;n del alcance y &aacute;mbito de aplicaci&oacute;n.";
 choices[87][1] = "Actuaciones de supervisi&oacute;n y auditor&iacute;a de los procesos de gesti&oacute;n de documentos.";
 choices[87][2] = "Los medios tecnol&oacute;gicos necesarios para la gesti&oacute;n de los documentos electr&oacute;nicos.";
 choices[87][3] = "Roles de los actores involucrados.";
 answers[87] = choices[87][2];
 units[87] = "43";
 comments[87] = "Id Pregunta: 10721. ";


//  Id pregunta: 10736 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Reutilizaci&oacute;n de recursos de la informaci&oacute;n, &iquest;qu&eacute; se utilizar&aacute; para facilitar la reutilizaci&oacute;n de vocabularios?";
 choices[88]= new Array();
 choices[88][0] = "El Centro de Interoperabilidad Sem&aacute;ntica de la Administraci&oacute;n";
 choices[88][1] = "El formato SCSP";
 choices[88][2] = "El Intercambio a trav&eacute;s de la Red SARA";
 choices[88][3] = "El Centro de Promoci&oacute;n de la Reutilizaci&oacute;n de la AGE";
 answers[88] = choices[88][0];
 units[88] = "43";
 comments[88] = "Id Pregunta: 10736. ";


//  Id pregunta: 10741 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;Con qu&eacute; frecuencia la comisi&oacute;n de estrateg&iacute;a TIC elevar&aacute; su informe al Consejo de Ministros?";
 choices[89]= new Array();
 choices[89][0] = "Mensual";
 choices[89][1] = "Semestral";
 choices[89][2] = "Anual";
 choices[89][3] = "Cada dos a&ntilde;os";
 answers[89] = choices[89][2];
 units[89] = "24";
 comments[89] = "Id Pregunta: 10741. ";


//  Id pregunta: 10742 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;Con qu&eacute; frecuencia m&iacute;nima se reunir&aacute; el Pleno de la comisi&oacute;n de estrategia TIC?";
 choices[90]= new Array();
 choices[90][0] = "Mensual";
 choices[90][1] = "Semestral";
 choices[90][2] = "Trimestral";
 choices[90][3] = "Anual";
 answers[90] = choices[90][1];
 units[90] = "24";
 comments[90] = "Id Pregunta: 10742. ";


//  Id pregunta: 10990 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  La Agenda Digital para Europa, iniciativa de la estrategia Europa 2020 puesta en marcha por la Comisi&oacute;n Europea:";
 choices[91]= new Array();
 choices[91][0] = "Establece la ZUPE (Zona &Uacute;nica de Prestaciones para Empresas), que supondr&aacute; la interconexi&oacute;n de plataformas de apoyo al Emprendedor, permitiendo la presentaci&oacute;n de tr&aacute;mites de inicio de actividad para todo el territorio europeo.";
 choices[91][1] = "Establece medidas para que, en el a&ntilde;o 2020, el 75% de los hogares europeos est&eacute;n abonados a conexiones de internet por encima de los 100 Mbps.";
 choices[91][2] = "Establece el objetivo de equipar a los europeos con un acceso en l&iacute;nea seguro a sus datos m&eacute;dicos en 2017.";
 choices[91][3] = "Propone que, para 2020, los pa&iacute;ses miembros deber&iacute;an duplicar el gasto p&uacute;blico anual total en investigaci&oacute;n y desarrollo de las TIC.";
 answers[91] = choices[91][3];
 units[91] = "30";
 comments[91] = "Id Pregunta: 10990. TIC A1 AGE 2014";


//  Id pregunta: 11008 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  El proyecto SCSP, del Ministerio de Hacienda y Administraciones P&uacute;blicas:";
 choices[92]= new Array();
 choices[92][0] = "Es un conjunto de especificaciones orientadas al intercambio de datos entre Administraciones P&uacute;blicas con el objetivo de eliminar los certificados administrativos en papel.";
 choices[92][1] = "Es un cat&aacute;logo de interfaces de interoperabilidad para el consumo de datos del Directorio Com&uacute;n de Organismos y Oficinas.";
 choices[92][2] = "Permite la conexi&oacute;n en tiempo real de m&uacute;ltiples salas de videconferencia.";
 choices[92][3] = "Es un diagramador de procedimientos administrativos, para su integraci&oacute;n en las sedes electr&oacute;nicas.";
 answers[92] = choices[92][0];
 units[92] = "44";
 comments[92] = "Id Pregunta: 11008. TIC A1 AGE 2014";


//  Id pregunta: 11020 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l de las siguientes es una es una metodolog&iacute;a de gesti&oacute;n de software que ayuda a definir e implementar procesos para optimizar la inversi&oacute;n en software cumpliendo con la legislaci&oacute;n aplicable?";
 choices[93]= new Array();
 choices[93][0] = "BSA";
 choices[93][1] = "SAM";
 choices[93][2] = "Copyleft";
 choices[93][3] = "Copyright";
 answers[93] = choices[93][1];
 units[93] = "37";
 comments[93] = "Id Pregunta: 11020. SAM (Gesti&oacute;n de Activos de Software)";


//  Id pregunta: 11099 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Seleccione la respuesta verdadera sobre la Agencia de Protecci&oacute;n de Datos";
 choices[94]= new Array();
 choices[94][0] = "Se relaciona con el Gobierno a trav&eacute;s del Ministerio de Interior";
 choices[94][1] = "Est&aacute; adscrita a la Ley General Presupuestaria pero no tiene dotaci&oacute;n presupuestaria propia.";
 choices[94][2] = "El Director de la AEPD es nombrado por un periodo de cuatro a&ntilde;os";
 choices[94][3] = "Est&aacute; sometida &uacute;nicamente al control interno por el Tribunal de Cuentas.";
 answers[94] = choices[94][2];
 units[94] = "29";
 comments[94] = "Id Pregunta: 11099. ";


//  Id pregunta: 11102 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  La NTI de Digitalizaci&oacute;n de Documentos indica que el nivel de resoluci&oacute;n m&iacute;nimo ser&aacute; para blanco y negro de:";
 choices[95]= new Array();
 choices[95][0] = "200 p&iacute;xeles por pulgada";
 choices[95][1] = "125 p&iacute;xeles por pulgada";
 choices[95][2] = "256 p&iacute;xeles por pulgada";
 choices[95][3] = "80 p&iacute;xeles por pulgada";
 answers[95] = choices[95][0];
 units[95] = "30";
 comments[95] = "Id Pregunta: 11102. ";


//  Id pregunta: 11201 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l de los siguientes no es un pilar de la Agenda Digital Europea?";
 choices[96]= new Array();
 choices[96][0] = "Mercado Digital Din&aacute;mico &Uacute;nico";
 choices[96][1] = "Acceso r&aacute;pido y ultrarr&aacute;pido a internet";
 choices[96][2] = "Confianza y Seguridad";
 choices[96][3] = "Servicios P&uacute;blicos Digitales de Calidad";
 answers[96] = choices[96][3];
 units[96] = "30";
 comments[96] = "Id Pregunta: 11201. ";


//  Id pregunta: 11348 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Cu&aacute;l es la forma correcta de crear un sello electr&oacute;nico seg&uacute;n la normativa sobre administraci&oacute;n electr&oacute;nica";
 choices[97]= new Array();
 choices[97][0] = "Resoluci&oacute;n del Ministro publicado en BOE";
 choices[97][1] = "Resoluci&oacute;n del Ministro publicado en sede";
 choices[97][2] = "Resoluci&oacute;n de la sbusecretar&iacute;a publicado en la Sede";
 choices[97][3] = "Resoluci&oacute;n del Consejo de Ministros publicado en BOE";
 answers[97] = choices[97][2];
 units[97] = "43";
 comments[97] = "Id Pregunta: 11348. ";


//  Id pregunta: 11349 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Cu&aacute;les son los casos en los que no es necesario el derecho de informaci&oacute;n en la recogida de datos";
 choices[98]= new Array();
 choices[98][0] = "Datos con fines hist&oacute;ricos, estad&iacute;sticos o cient&iacute;ficos.";
 choices[98][1] = "No existen excepciones al derecho de informaci&oacute;n de recogida de datos.";
 choices[98][2] = "La Administraci&oacute;n en el desempe&ntilde;o de sus funciones y las fuentes accesibles al p&uacute;blico.";
 choices[98][3] = "Datos sobre Sindicaci&oacute;n, Ideolog&iacute;a y Religi&oacute;n.";
 answers[98] = choices[98][0];
 units[98] = "29";
 comments[98] = "Id Pregunta: 11349. ";


//  Id pregunta: 11750 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  En relaci&oacute;n a la Comisi&oacute;n de Transparencia y Buen Gobierno";
 choices[99]= new Array();
 choices[99][0] = "Al menos dos veces al a&ntilde;o convocar&aacute; a los representantes de los organismos que, con funciones similares a las desarrolladas por ella, hayan sido creados por las Comunidades Aut&oacute;nomas en ejercicio de sus competencias.";
 choices[99][1] = "Pertenece al Ministerio de Industria, Energia y Turismo.";
 choices[99][2] = "A esta reuni&oacute;n podr&aacute; ser convocado un representante de la Administraci&oacute;n Local propuesto por la Federaci&oacute;n Espa&ntilde;ola de Municipios y Provincias.";
 choices[99][3] = "No se ha creado a&uacute;n.";
 answers[99] = choices[99][2];
 units[99] = "41";
 comments[99] = "Id Pregunta: 11750. ";


