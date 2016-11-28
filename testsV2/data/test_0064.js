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

//  Id pregunta: 831 Año de creación de pregunta: 2016
 questions[0]= "1)  Si el recusado niega la causa de recusaci&oacute;n, el superior resolver&aacute; en el plazo de ...";
 choices[0]= new Array();
 choices[0][0] = "Un d&iacute;a";
 choices[0][1] = "Dos d&iacute;as";
 choices[0][2] = "Tres d&iacute;as";
 choices[0][3] = "Cuatro d&iacute;as";
 answers[0] = choices[0][3];
 units[0] = "4, 7, 8, 9";
 comments[0] = "Id Pregunta: 831. Ley 40/2015";


//  Id pregunta: 139 Año de creación de pregunta: 2016
 questions[1]= "2)  Las siglas de SAREB, entidad privada creada por Real Decreto para ayudar al saneamiento del sector financiero espa&ntilde;ol, hacen referencia a:";
 choices[1]= new Array();
 choices[1][0] = "Sociedad de Gesti&oacute;n de Activos Procedentes de la Reestructuraci&oacute;n Bancaria.";
 choices[1][1] = "Static &amp; Active process for REsolution Bank.";
 choices[1][2] = "Sociedad de Ayudas Principales para la Resoluci&oacute;n Bancaria.";
 choices[1][3] = "Super Active REsponse for Banks";
 answers[1] = choices[1][0];
 units[1] = "12";
 comments[1] = "Id Pregunta: 139. Leyes modelo econ&oacute;mico";


//  Id pregunta: 158 Año de creación de pregunta: 2016
 questions[2]= "3)  Seg&uacute;n la ley 39/2015, cuando la notificaci&oacute;n por medios electr&oacute;nicos sea de car&aacute;cter obligatorio, o haya sido expresamente elegida por el interesado:";
 choices[2]= new Array();
 choices[2][0] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[2][1] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[2][2] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[2][3] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 answers[2] = choices[2][1];
 units[2] = "7";
 comments[2] = "Id Pregunta: 158. Ley 39/2015, Art&iacute;culo 43";


//  Id pregunta: 33 Año de creación de pregunta: 2016
 questions[3]= "4)  Respecto al desarrollo empleando tecnolog&iacute;a Microsoft, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[3]= new Array();
 choices[3][0] = "WINAPI (Windows API) permite un acceso a alto nivel del sistema, directamente usable en cualquier lenguaje y entorno de programaci&oacute;n.";
 choices[3][1] = "El framework .NET se compone de una biblioteca de clases denominada FCL (Framework Class Library) y del entorno com&uacute;n de ejecuci&oacute;n CLR (Common Language Runtime).";
 choices[3][2] = "En .NET el resultado de la compilaci&oacute;n de las aplicaciones es un m&oacute;dulo ensamblado en formato de fichero PE32 o PE32+ (Windows portable executable) directamente ejecutable sobre el hardware.";
 choices[3][3] = "Los compiladores para CLR producen c&oacute;digo FL (Final Language) denominado c&oacute;digo administrado.";
 answers[3] = choices[3][1];
 units[3] = "63";
 comments[3] = "Id Pregunta: 33. AGE A1 2015";


//  Id pregunta: 246 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[4]= new Array();
 choices[4][0] = "Dos Cap&iacute;tulos.";
 choices[4][1] = "Tres Cap&iacute;tulos.";
 choices[4][2] = "Un Cap&iacute;tulo.";
 choices[4][3] = "Cuatro Cap&iacute;tulos.";
 answers[4] = choices[4][1];
 units[4] = "1";
 comments[4] = "Id Pregunta: 246. CONSTITUCION1978";


//  Id pregunta: 197 Año de creación de pregunta: 2016
 questions[5]= "6)  Los reglamentos aprobados en el ejercicio de la potestad reglamentaria no pueden:";
 choices[5]= new Array();
 choices[5][0] = "Establecer tributos.";
 choices[5][1] = "Desarrollar lo establecido en una Ley.";
 choices[5][2] = "Modificar los plazos para presentar recursos administrativos.";
 choices[5][3] = "Crear un &oacute;rgano colegiado interministerial.";
 answers[5] = choices[5][0];
 units[5] = "1";
 comments[5] = "Id Pregunta: 197. CONSTITUCION1978";


//  Id pregunta: 76 Año de creación de pregunta: 2016
 questions[6]= "7)  El proceso de auditor&iacute;a de sistemas de informaci&oacute;n se considera como un proceso:";
 choices[6]= new Array();
 choices[6][0] = "Estrat&eacute;gico";
 choices[6][1] = "Operativo";
 choices[6][2] = "T&aacute;ctico";
 choices[6][3] = "Tecnol&oacute;gico";
 answers[6] = choices[6][0];
 units[6] = "36";
 comments[6] = "Id Pregunta: 76. AGE A1 2015";


//  Id pregunta: 696 Año de creación de pregunta: 2016
 questions[7]= "8)  De las siguientes cu&aacute;l NO es una ventaja de la integraci&oacute;n continua:";
 choices[7]= new Array();
 choices[7][0] = "Ejecuci&oacute;n inmediata de las pruebas de aceptaci&oacute;n.";
 choices[7][1] = "Monitorizaci&oacute;n continua de las m&eacute;tricas de calidad del proyecto.";
 choices[7][2] = "Los desarrolladores pueden detectar y solucionar problemas de integraci&oacute;n de forma continua, evitando el caos de &uacute;ltima hora cuando se acercan las fechas de entrega.";
 choices[7][3] = "Disponibilidad constante de una versi&oacute;n para pruebas, demos o lanzamientos anticipados.";
 answers[7] = choices[7][0];
 units[7] = "92";
 comments[7] = "Id Pregunta: 696. INTEGRACION CONTINUA";


//  Id pregunta: 36 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Cu&aacute;l es la interfaz est&aacute;ndar de programaci&oacute;n Java para invocar a m&eacute;todos nativos escritos en otros lenguajes como C o C++?";
 choices[8]= new Array();
 choices[8][0] = "JAXP";
 choices[8][1] = "JNI";
 choices[8][2] = "JNDI";
 choices[8][3] = "JDBC";
 answers[8] = choices[8][1];
 units[8] = "64";
 comments[8] = "Id Pregunta: 36. AGE A1 2015";


//  Id pregunta: 650 Año de creación de pregunta: 2016
 questions[9]= "10)  Los IDS, (Sistemas de Detecci&oacute;n de Intrusos), pueden clasificarse:";
 choices[9]= new Array();
 choices[9][0] = "Solamente en funci&oacute;n de los sistemas que monitorizan.";
 choices[9][1] = "En funci&oacute;n de los sistemas que monitorizan y en funci&oacute;n de c&oacute;mo operan los Sistemas de Detecci&oacute;n de Intrusos.";
 choices[9][2] = "Solamente en funci&oacute;n de c&oacute;mo operan los Sistemas de Detecci&oacute;n de Intrusos.";
 choices[9][3] = "Estos sistemas es imposible clasificarlos.";
 answers[9] = choices[9][1];
 units[9] = "119";
 comments[9] = "Id Pregunta: 650. Junta de Extremadura A1 2015";


//  Id pregunta: 803 Año de creación de pregunta: 2016
 questions[10]= "11)  La organizaci&oacute;n en Departamentos ministeriales no obsta a la existencia de:";
 choices[10]= new Array();
 choices[10][0] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[10][1] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 choices[10][2] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[10][3] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 answers[10] = choices[10][3];
 units[10] = "4, 7, 8, 9";
 comments[10] = "Id Pregunta: 803. Ley 40/2015";


//  Id pregunta: 742 Año de creación de pregunta: 2016
 questions[11]= "12)  Uno de los objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[11]= new Array();
 choices[11][0] = "Proveer de manera compartida servicios comunes";
 choices[11][1] = "El canal digital ha de ser el medio preferido por ciudadanos y empresas para relacionarse con la Administraci&oacute;n.";
 choices[11][2] = "Orientaci&oacute;n al usuario del servicio.";
 choices[11][3] = "Transparencia";
 answers[11] = choices[11][1];
 units[11] = "28";
 comments[11] = "Id Pregunta: 742. Estrategia TIC";


//  Id pregunta: 788 Año de creación de pregunta: 2016
 questions[12]= "13)  En la organizaci&oacute;n central son &oacute;rganos superiores:";
 choices[12]= new Array();
 choices[12][0] = "los Subsecretarios y los Secretarios generales";
 choices[12][1] = "los Ministros y los Secretarios generales t&eacute;cnicos";
 choices[12][2] = "los Secretarios de Estado y los Directores generales";
 choices[12][3] = "los Ministros y los Secretarios de Estado";
 answers[12] = choices[12][3];
 units[12] = "4, 7, 8, 9";
 comments[12] = "Id Pregunta: 788. Ley 40/2015";


//  Id pregunta: 446 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Cu&aacute;l es el servicio com&uacute;n que  permitir&aacute; la tramitaci&oacute;n por medios electr&oacute;nicos de todo el ciclo de vida involucrado en la concesi&oacute;n de ayudas provenientes de los fondos FEDER?";
 choices[13]= new Array();
 choices[13][0] = "IRIA";
 choices[13][1] = "GALATEA";
 choices[13][2] = "BADARAL";
 choices[13][3] = "SOROLLA";
 answers[13] = choices[13][1];
 units[13] = "43";
 comments[13] = "Id Pregunta: 446. SERVICIOS COMUNES";


//  Id pregunta: 90 Año de creación de pregunta: 2016
 questions[14]= "15)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad (ENS) en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, el an&aacute;lisis y gesti&oacute;n de riesgos es una parte esencial del proceso de seguridad, debiendo mantenerse permanentemente actualizado. Para ello, el propio ENS establece que se debe realizar un an&aacute;lisis de riesgos formal para los sistemas de:";
 choices[14]= new Array();
 choices[14][0] = "Categor&iacute;a b&aacute;sica";
 choices[14][1] = "Categor&iacute;a media";
 choices[14][2] = "Categor&iacute;a alta";
 choices[14][3] = "Categor&iacute;a media y alta";
 answers[14] = choices[14][2];
 units[14] = "46";
 comments[14] = "Id Pregunta: 90. AGE A1 2015";


//  Id pregunta: 797 Año de creación de pregunta: 2016
 questions[15]= "16)  Se&ntilde;ale la respuesta correcta:";
 choices[15]= new Array();
 choices[15][0] = "corresponde a los &oacute;rganos superiores establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos directivos su desarrollo y ejecuci&oacute;n";
 choices[15][1] = "corresponde establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos superiores";
 choices[15][2] = "corresponde establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos directivos";
 choices[15][3] = "corresponde a los &oacute;rganos directivos establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos superiores su desarrollo y ejecuci&oacute;n";
 answers[15] = choices[15][0];
 units[15] = "4, 7, 8, 9";
 comments[15] = "Id Pregunta: 797. Ley 40/2015";


//  Id pregunta: 556 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Qu&eacute; &oacute;rgano europeo ha establecido las 16 iniciativas para llevar a cabo la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[16]= new Array();
 choices[16][0] = "El BCE";
 choices[16][1] = "El Parlamento";
 choices[16][2] = "El Consejo";
 choices[16][3] = "La Comisi&oacute;n";
 answers[16] = choices[16][3];
 units[16] = "17";
 comments[16] = "Id Pregunta: 556. Mercado &Uacute;nico Digital";


//  Id pregunta: 673 Año de creación de pregunta: 2016
 questions[17]= "18)  De forma general, las fases de un procedimiento administrativo com&uacute;n son:";
 choices[17]= new Array();
 choices[17][0] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, finalizaci&oacute;n y ejecuci&oacute;n.";
 choices[17][1] = "Iniciaci&oacute;n, desarrollo y resoluci&oacute;n.";
 choices[17][2] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, resoluci&oacute;n y ejecuci&oacute;n.";
 choices[17][3] = "Iniciaci&oacute;n, desarrollo y finalizaci&oacute;n.";
 answers[17] = choices[17][0];
 units[17] = "7";
 comments[17] = "Id Pregunta: 673. T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 342 Año de creación de pregunta: 2016
 questions[18]= "19)  La moci&oacute;n de censura contra la Comisi&oacute;n existe desde:";
 choices[18]= new Array();
 choices[18][0] = "El Tratado de Maastrich.";
 choices[18][1] = "El Tratado de Amsterdam.";
 choices[18][2] = "El Tratado de Par&iacute;s.";
 choices[18][3] = "El Tratado de Roma.";
 answers[18] = choices[18][3];
 units[18] = "5";
 comments[18] = "Id Pregunta: 342. UNION EUROPEA";


//  Id pregunta: 438 Año de creación de pregunta: 2016
 questions[19]= "20)  El Real Decreto 424/2016, de 11 de noviembre establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales. Se&ntilde;ale la respuesta falsa.";
 choices[19]= new Array();
 choices[19][0] = "Dentro del Ministerio de Energ&iacute;a, Turismo y Agenda Digital se encuentra la Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital, de la que depende la Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n.";
 choices[19][1] = "Suprime la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones.";
 choices[19][2] = "La Direcci&oacute;n General de Racionalizaci&oacute;n y Centralizaci&oacute;n de la Contrataci&oacute;n es un &oacute;rgano directivo perteneciente a la Subsecretar&iacute;a de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[19][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, con rango de Direcci&oacute;n general depende de la Secretar&iacute;a de Estado de Funci&oacute;n P&uacute;blica.";
 answers[19] = choices[19][3];
 units[19] = "43";
 comments[19] = "Id Pregunta: 438. SERVICIOS COMUNES";


//  Id pregunta: 629 Año de creación de pregunta: 2016
 questions[20]= "21)  Seg&uacute;n el Real Decreto 3/2010 sobre el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; organismo es el encargado de actuar ante cualquier agresi&oacute;n recibida en los sistemas de informaci&oacute;n de las Administraciones P&uacute;blicas?";
 choices[20]= new Array();
 choices[20][0] = "El CCN-CERT (Centro Criptol&oacute;gico Nacional&ndash;Computer Emergency Reaction Team).";
 choices[20][1] = "El GDT (Grupo de Delitos Telem&aacute;ticos).";
 choices[20][2] = "La BIT (Brigada de Investigaci&oacute;n Tecnol&oacute;gica).";
 choices[20][3] = "El CCN-STIC (Centro Criptol&oacute;gico Nacional-Seguridad de las Tecnolog&iacute;as de Informaci&oacute;n y Comunicaciones).";
 answers[20] = choices[20][0];
 units[20] = "46";
 comments[20] = "Id Pregunta: 629. Junta de Extremadura A1 2015";


//  Id pregunta: 852 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas de backup es la m&aacute;s eficiente a nivel de ocupaci&oacute;n de espacio?";
 choices[21]= new Array();
 choices[21][0] = "Backup full.";
 choices[21][1] = "Backup diferencial.";
 choices[21][2] = "Backup incremental.";
 choices[21][3] = "Backup deduplicado.";
 answers[21] = choices[21][3];
 units[21] = "53";
 comments[21] = "Id Pregunta: 852. Xunta de Galicia 2015";


//  Id pregunta: 96 Año de creación de pregunta: 2016
 questions[22]= "23)  Indique cu&aacute;l de las siguientes soluciones tecnol&oacute;gicas NO se utiliza para virtualizaci&oacute;n:";
 choices[22]= new Array();
 choices[22][0] = "VMware ESX";
 choices[22][1] = "XenServer";
 choices[22][2] = "Alfresco";
 choices[22][3] = "Microsoft Hyper-V";
 answers[22] = choices[22][2];
 units[22] = "54";
 comments[22] = "Id Pregunta: 96. AGE A1 2015";


//  Id pregunta: 321 Año de creación de pregunta: 2016
 questions[23]= "24)  Indique el n&uacute;mero de Diputados del Parlamento Europeo que actualmente le corresponden a Espa&ntilde;a:";
 choices[23]= new Array();
 choices[23][0] = "Cincuenta y cuatro.";
 choices[23][1] = "Cincuenta.";
 choices[23][2] = "Cincuenta y cinco.";
 choices[23][3] = "Cincuenta y dos.";
 answers[23] = choices[23][1];
 units[23] = "5";
 comments[23] = "Id Pregunta: 321. UNION EUROPEA";


//  Id pregunta: 1 Año de creación de pregunta: 2016
 questions[24]= "25)  Los medios y servicios compartidos, establecidos en el Real Decreto 806/2014 dentro del modelo de gobernanza en el &aacute;mbito de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones de la Administraci&oacute;n General del Estado, son tales que:";
 choices[24]= new Array();
 choices[24][0] = "Su declaraci&oacute;n presupone que el servicio se encuentra en producci&oacute;n, listo para la adhesi&oacute;n de las diferentes unidades departamentales.";
 choices[24][1] = "Dado su car&aacute;cter obligatorio y sustitutivo, no se permite acordar excepciones por razones econ&oacute;micas, t&eacute;cnicas o de oportunidad sobrevenidas.";
 choices[24][2] = "Su declaraci&oacute;n establece la habilitaci&oacute;n para el desarrollo de las medidas t&eacute;cnicas, organizativas, presupuestarias y normativas.";
 choices[24][3] = "Su provisi&oacute;n se realiza directa y exclusivamente por medio de la Direcci&oacute;n General de Administraci&oacute;n Digital";
 answers[24] = choices[24][2];
 units[24] = "26";
 comments[24] = "Id Pregunta: 1. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 73 Año de creación de pregunta: 2016
 questions[25]= "26)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Digitalizaci&oacute;n de Documentos, &iquest;cu&aacute;l de los siguientes metadatos no es considerado como metadato complementario?";
 choices[25]= new Array();
 choices[25][0] = "Resoluci&oacute;n, que indica el valor de resoluci&oacute;n en p&iacute;xeles por pulgada empleada en la digitalizaci&oacute;n.";
 choices[25][1] = "Origen, que indica si el contenido del documento fue creado por un ciudadano o por una administraci&oacute;n.";
 choices[25][2] = "Tama&ntilde;o, que indica el valor y unidades del tama&ntilde;o l&oacute;gico del documento digitalizado.";
 choices[25][3] = "Idioma, que indica el idioma del contenido del documento digitalizado.";
 answers[25] = choices[25][1];
 units[25] = "44";
 comments[25] = "Id Pregunta: 73. AGE A1 2015";


//  Id pregunta: 350 Año de creación de pregunta: 2016
 questions[26]= "27)  En la Uni&oacute;n Europea, el Consejo de Ministros se reunir&aacute; peri&oacute;dicamente en Bruselas por convocatoria de:";
 choices[26]= new Array();
 choices[26][0] = "Su Presidente, a iniciativa de &eacute;ste.";
 choices[26][1] = "Uno de sus miembros.";
 choices[26][2] = "La Comisi&oacute;n.";
 choices[26][3] = "Todas las respuestas son correctas.";
 answers[26] = choices[26][3];
 units[26] = "5";
 comments[26] = "Id Pregunta: 350. UNION EUROPEA";


//  Id pregunta: 74 Año de creación de pregunta: 2016
 questions[27]= "28)  Se&ntilde;ale la opci&oacute;n incorrecta respecto a SMTP:";
 choices[27]= new Array();
 choices[27][0] = "SMTP es capaz de transportar correo a trav&eacute;s de m&uacute;ltiples redes: entre nodos conectados por TCP en Internet, entre nodos conectados en una Intranet TCP/IP aislados por un cortafuegos, o entre nodos en un entorno LAN o WAN que est&eacute;n usando un protocolo de nivel de transporte distinto a TCP.";
 choices[27][1] = "Usando SMTP, un proceso puede transferir correo a otro proceso en la misma red o a otra red mediante un proceso gateway accesible en las dos redes.";
 choices[27][2] = "En SMTP un mensaje de correo puede pasar por una serie de nodos gateway intermedios en su camino desde el emisor al receptor &uacute;ltimo, sirvi&eacute;ndose de mecanismos para decidir el siguiente salto como el sistema de resoluci&oacute;n de nombres de dominio de Internet.";
 choices[27][3] = "En SMTP la transferencia de mensaje ocurre siempre en una conexi&oacute;n &uacute;nica entre el emisor SMTP y el receptor final SMTP.";
 answers[27] = choices[27][3];
 units[27] = "106";
 comments[27] = "Id Pregunta: 74. AGE A1 2015";


//  Id pregunta: 666 Año de creación de pregunta: 2016
 questions[28]= "29)  De acuerdo a la Ley 39/2015, el formato del expediente administrativo ser&aacute;:";
 choices[28]= new Array();
 choices[28][0] = "Siempre en formato electr&oacute;nico.";
 choices[28][1] = "Siempre en formato papel.";
 choices[28][2] = "Las personas f&iacute;sicas podr&aacute;n elegir en todo momento el formato del expediente administrativo.";
 choices[28][3] = "La ley no regula el formato del expediente.";
 answers[28] = choices[28][0];
 units[28] = "7";
 comments[28] = "Id Pregunta: 666. Art&iacute;culo 70 de la Ley 39/2015";


//  Id pregunta: 741 Año de creación de pregunta: 2016
 questions[29]= "30)  En relaci&oacute;n al principio rector Orientaci&oacute;n al usuario del servicio del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[29]= new Array();
 choices[29][0] = "Es necesario redefinir los servicios empezando por el lado del usuario, ya sea un ciudadano o un empleado p&uacute;blico, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y seguridad.";
 choices[29][1] = "Es necesario redefinir los servicios empezando por el lado del ciudadano, ya sea un funcionario o una persona f&iacute;sica, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y transparencia.";
 choices[29][2] = "Se requiere modernizar los servicios p&uacute;blicos empezando por el lado del ciudadano, ya sea un funcionario o una persona f&iacute;sica, con una vocaci&oacute;n de transparencia, usabilidad, simplicidad y accesibilidad.";
 choices[29][3] = "Es necesario redefinir los servicios empezando por el lado del usuario, ya sea un ciudadano o un empleado p&uacute;blico, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y transparencia.";
 answers[29] = choices[29][0];
 units[29] = "28";
 comments[29] = "Id Pregunta: 741. Estrategia TIC";


//  Id pregunta: 132 Año de creación de pregunta: 2016
 questions[30]= "31)  Cu&aacute;l de las siguientes leyes no est&aacute; incluida en la reforma tributaria llevada a cabo en el a&ntilde;o 2014:";
 choices[30]= new Array();
 choices[30][0] = "Ley 26/2014, del Impuesto sobre la Renta de las Personas F&iacute;sicas";
 choices[30][1] = "Ley 27/2014, del Impuesto sobre Sociedades";
 choices[30][2] = "Ley 28/2014, de Impuestos Especiales";
 choices[30][3] = "Ley 29/2014, del Impuesto de Valor A&ntilde;adido";
 answers[30] = choices[30][3];
 units[30] = "12";
 comments[30] = "Id Pregunta: 132. Leyes modelo econ&oacute;mico";


//  Id pregunta: 388 Año de creación de pregunta: 2016
 questions[31]= "32)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[31]= new Array();
 choices[31][0] = "Indirecta.";
 choices[31][1] = "Directa.";
 choices[31][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[31][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[31] = choices[31][1];
 units[31] = "14";
 comments[31] = "Id Pregunta: 388. POLITICAS DE IGUALDAD";


//  Id pregunta: 237 Año de creación de pregunta: 2016
 questions[32]= "33)  Seg&uacute;n la regulaci&oacute;n constitucional del derecho de asociaci&oacute;n:";
 choices[32]= new Array();
 choices[32][0] = "Las asociaciones que se constituyan deben inscribirse en un registro a los efectos de publicidad.";
 choices[32][1] = "Las asociaciones pueden ser suspendidas en virtud de resoluci&oacute;n administrativa motivada.";
 choices[32][2] = "Este derecho aparece regulado en el T&iacute;tulo Preliminar de la Constituci&oacute;n.";
 choices[32][3] = "Este derecho aparece regulado en la Secci&oacute;n 2&ordf; del Cap&iacute;tulo 2&ordm; del T&iacute;tulo I de la Constituci&oacute;n.";
 answers[32] = choices[32][2];
 units[32] = "1";
 comments[32] = "Id Pregunta: 237. CONSTITUCION1978";


//  Id pregunta: 431 Año de creación de pregunta: 2016
 questions[33]= "34)  En el supuesto de que una empresa haga publicidad enga&ntilde;osa de sus acciones de responsabilidad en materia de igualdad, podr&aacute;n ejercer la acci&oacute;n de cesaci&oacute;n cuando se considere:";
 choices[33]= new Array();
 choices[33][0] = "El Instituto de la Mujer.";
 choices[33][1] = "&Oacute;rganos equivalentes al anterior pertenecientes a las CCAA.";
 choices[33][2] = "Ambas son correctas.";
 choices[33][3] = "A y B son incorrectas.";
 answers[33] = choices[33][2];
 units[33] = "14";
 comments[33] = "Id Pregunta: 431. POLITICAS DE IGUALDAD";


//  Id pregunta: 95 Año de creación de pregunta: 2016
 questions[34]= "35)  Bajo el paradigma de la Programaci&oacute;n Orientada a Objetos, indique cu&aacute;l de las siguientes proposiciones es falsa:";
 choices[34]= new Array();
 choices[34][0] = "Los objetos se generan a partir de la instanciaci&oacute;n de una clase.";
 choices[34][1] = "El polimorfismo es la propiedad por la que es posible enviar mensajes sint&aacute;cticamente iguales a objetos de tipos distintos.";
 choices[34][2] = "Una clase abstracta puede ser extendida mediante el mecanismo de herencia.";
 choices[34][3] = "La implementaci&oacute;n de una interfaz no se considera polimorfismo.";
 answers[34] = choices[34][3];
 units[34] = "89";
 comments[34] = "Id Pregunta: 95. AGE A1 2015";


//  Id pregunta: 188 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Puede el Estado transferir o delegar a las Comunidades Aut&oacute;nomas facultadas que son de su titularidad?";
 choices[35]= new Array();
 choices[35][0] = "No, en ning&uacute;n caso.";
 choices[35][1] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con cualquier tipo de facultades.";
 choices[35][2] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, sin que el Estado se pueda reservar ninguna forma de control.";
 choices[35][3] = ", mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, previendo en cada caso la correspondiente transferencia de medios financieros, as&iacute; como las formas de control que se reserve el Estado.";
 answers[35] = choices[35][3];
 units[35] = "1";
 comments[35] = "Id Pregunta: 188. CONSTITUCION1978";


//  Id pregunta: 451 Año de creación de pregunta: 2016
 questions[36]= "37)  El cr&eacute;dito presupuestario es...";
 choices[36]= new Array();
 choices[36][0] = "El sujeto que realiza el gasto";
 choices[36][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[36][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[36][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[36] = choices[36][2];
 units[36] = "10";
 comments[36] = "Id Pregunta: 451. PRESUPUESTOS GENERALES";


//  Id pregunta: 497 Año de creación de pregunta: 2016
 questions[37]= "38)  Seg&uacute;n el art&iacute;culo 13.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el aplazamiento y fraccionamiento de las cantidades adeudadas a la Hacienda P&uacute;blica estatal por las comunidades aut&oacute;nomas y las corporaciones locales se regir&aacute; por:";
 choices[37]= new Array();
 choices[37][0] = "La Ley General Tributaria.";
 choices[37][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General del Estado.";
 choices[37][2] = "La legislaci&oacute;n espec&iacute;fica, la cual tendr&aacute; en cuenta la necesaria reciprocidad entre administraciones.";
 choices[37][3] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 answers[37] = choices[37][2];
 units[37] = "10";
 comments[37] = "Id Pregunta: 497. PRESUPUESTOS GENERALES";


//  Id pregunta: 596 Año de creación de pregunta: 2016
 questions[38]= "39)  Son excepciones singulares en la utilizaci&oacute;n de los medios y servicios compartidos:";
 choices[38]= new Array();
 choices[38][0] = "Seguridad Social y AEAT";
 choices[38][1] = "IGAE (Servicios Inform&aacute;tica Presupuestaria)";
 choices[38][2] = "Medios y servicios espec&iacute;ficos que afecten a defensa, consulta pol&iacute;tica, situaciones de crisis y seguridad del Estado y los que manejen informaci&oacute;n clasificada";
 choices[38][3] = "Todos los anteriores";
 answers[38] = choices[38][3];
 units[38] = "19";
 comments[38] = "Id Pregunta: 596. Estrategia TIC";


//  Id pregunta: 545 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Qu&eacute; est&aacute;ndar ISO define un marco de trabajo para la gobernanza TIC?";
 choices[39]= new Array();
 choices[39][0] = "ISO/IEC 31000";
 choices[39][1] = "ISO/IEC 14000";
 choices[39][2] = "ISO/IEC 38500";
 choices[39][3] = "ISO/IEC 18000";
 answers[39] = choices[39][2];
 units[39] = "26";
 comments[39] = "Id Pregunta: 545. Gobernanza TIC";


//  Id pregunta: 239 Año de creación de pregunta: 2016
 questions[40]= "41)  Respecto de las relaciones que constitucionalmente se regulan entre los miembros del Gobierno y las Cortes Generales:";
 choices[40]= new Array();
 choices[40][0] = "La comparecencia de los miembros del Gobierno ante las C&aacute;maras y sus Comisiones puede extenderse tambi&eacute;n a los funcionarios de sus Departamentos.";
 choices[40][1] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo solicitasen las propias C&aacute;maras o sus Comisiones.";
 choices[40][2] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo deciden los miembros del Gobierno.";
 choices[40][3] = "Los funcionarios no comparecer&aacute;n en ning&uacute;n caso.";
 answers[40] = choices[40][0];
 units[40] = "1";
 comments[40] = "Id Pregunta: 239. CONSTITUCION1978";


//  Id pregunta: 389 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[41]= new Array();
 choices[41][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[41][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[41][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[41][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[41] = choices[41][0];
 units[41] = "14";
 comments[41] = "Id Pregunta: 389. POLITICAS DE IGUALDAD";


//  Id pregunta: 718 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;C&uacute;al es un objetivo de las metodolog&iacute;as lean?";
 choices[42]= new Array();
 choices[42][0] = "Maximizar el valor para los clientes";
 choices[42][1] = "Reducir los costes y aumentar la calidad del producto o del servicio";
 choices[42][2] = " Entregar productos de manera m&aacute;s r&aacute;pida";
 choices[42][3] = "Todos los anteriores son objetivos de la metodolog&iacute;a lean";
 answers[42] = choices[42][3];
 units[42] = "34";
 comments[42] = "Id Pregunta: 718. Metodologias Lean";


//  Id pregunta: 593 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Qui&eacute;n se encarga de revisar la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[43]= new Array();
 choices[43][0] = "La CETIC";
 choices[43][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[43][2] = "La DTIC";
 choices[43][3] = "El MHFP";
 answers[43] = choices[43][0];
 units[43] = "19";
 comments[43] = "Id Pregunta: 593. Estrategia TIC";


//  Id pregunta: 775 Año de creación de pregunta: 2016
 questions[44]= "45)  Las Administraciones P&uacute;blicas que, en el ejercicio de sus respectivas competencias, establezcan medidas que limiten el ejercicio de derechos individuales o colectivos o exijan el cumplimiento de requisitos para el desarrollo de una actividad, deber&aacute;n (se&ntilde;ala la incorrecta):";
 choices[44]= new Array();
 choices[44][0] = "aplicar el principio de proporcionalidad y elegir la medida menos restrictiva";
 choices[44][1] = "motivar su necesidad para la protecci&oacute;n del inter&eacute;s p&uacute;blico";
 choices[44][2] = "justificar su adecuaci&oacute;n para lograr los fines que se persiguen, evitando en la medida de lo posible que se produzcan diferencias de trato discriminatorias";
 choices[44][3] = "evaluar peri&oacute;dicamente los efectos y resultados obtenidos";
 answers[44] = choices[44][2];
 units[44] = "4, 7, 8, 9";
 comments[44] = "Id Pregunta: 775. Ley 40/2015";


//  Id pregunta: 179 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Qu&eacute; tipo de ley aprueba los estatutos de autonom&iacute;a?";
 choices[45]= new Array();
 choices[45][0] = "Una ley orginaria.";
 choices[45][1] = "Una ley org&aacute;nica.";
 choices[45][2] = "Una ley de bases.";
 choices[45][3] = "Una ley de transferencia.";
 answers[45] = choices[45][1];
 units[45] = "1";
 comments[45] = "Id Pregunta: 179. CONSTITUCION1978";


//  Id pregunta: 316 Año de creación de pregunta: 2016
 questions[46]= "47)  El Consejo de la Uni&oacute;n Europea de reunir&aacute; por:";
 choices[46]= new Array();
 choices[46][0] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de dos de sus miembros o de la Comisi&oacute;n.";
 choices[46][1] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n.";
 choices[46][2] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de tres de sus miembros o de la Comisi&oacute;n.";
 choices[46][3] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n o el Parlamento.";
 answers[46] = choices[46][1];
 units[46] = "5";
 comments[46] = "Id Pregunta: 316. UNION EUROPEA";


//  Id pregunta: 558 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;Qu&eacute; es el geo-bloqueo, contra el que pretende ser soluci&oacute;n la estrategia para el Mercado &Uacute;nico Digital en Europa?";
 choices[47]= new Array();
 choices[47][0] = "Es la discriminaci&oacute;n en la b&uacute;squeda de un empleo seg&uacute;n el pa&iacute;s de origen del trabajador";
 choices[47][1] = "Es la imposibilidad de pasar la aduana para paquetes comprados en tiendas online de ciertos pa&iacute;ses";
 choices[47][2] = "Es la pr&aacute;ctica por la cual los vendedores online deniegan a los consumidores el acceso a su p&aacute;gina web en funci&oacute;n de su localizaci&oacute;n o le ofrecen precios distintos";
 choices[47][3] = "Es la pr&aacute;ctica comercial por la que varias tiendas online ofrecen el mismo producto a precios pre-acordados entre ellas, limitando la competencia";
 answers[47] = choices[47][2];
 units[47] = "17";
 comments[47] = "Id Pregunta: 558. Mercado &Uacute;nico Digital";


//  Id pregunta: 562 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Cu&aacute;l de los siguientes no es un obst&aacute;culo identificado por la Comisi&oacute;n para el desarrollo de la Agenda Digital europea?";
 choices[48]= new Array();
 choices[48][0] = "El incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes";
 choices[48][1] = "La falta de inversi&oacute;n en campa&ntilde;as de comunicaci&oacute;n en los pa&iacute;ses miembros";
 choices[48][2] = "Las carencias en la alfabetizaci&oacute;n y la capacitaci&oacute;n digitales";
 choices[48][3] = "La ausencia de inversi&oacute;n en las redes";
 answers[48] = choices[48][1];
 units[48] = "19";
 comments[48] = "Id Pregunta: 562. Agenda Digital";


//  Id pregunta: 47 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es propia de OCSP?";
 choices[49]= new Array();
 choices[49][0] = "Es un m&eacute;todo de validaci&oacute;n del estado de un certificado electr&oacute;nico que emplea suplementariamente la descarga y consulta de CRLs.";
 choices[49][1] = "Permite la consulta off-line del estado de revocaci&oacute;n de un certificado proporcionado por una autoridad de certificaci&oacute;n.";
 choices[49][2] = "No permite implementar mecanismos de tarificaci&oacute;n.";
 choices[49][3] = "Permite verificar el estado de los certificados mediante la consulta a una autoridad de validaci&oacute;n.";
 answers[49] = choices[49][3];
 units[49] = "78";
 comments[49] = "Id Pregunta: 47. AGE A1 2015";


//  Id pregunta: 308 Año de creación de pregunta: 2016
 questions[50]= "51)  El Tribunal de Justicia se cre&oacute; en:";
 choices[50]= new Array();
 choices[50][0] = "El Tratado de la CECA.";
 choices[50][1] = "El Tratado de Niza.";
 choices[50][2] = "El Tratado de &Aacute;msterdam.";
 choices[50][3] = "El Tratado de Lisboa.";
 answers[50] = choices[50][0];
 units[50] = "5";
 comments[50] = "Id Pregunta: 308. UNION EUROPEA";


//  Id pregunta: 762 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Cu&aacute;l de los siguientes es uno de los pilares en los que se fundamenta la Estrategia del Mercado &Uacute;nico Digital?";
 choices[51]= new Array();
 choices[51][0] = "Mejorar el acceso de los consumidores y empresas a los bienes y servicios digitales en Europa";
 choices[51][1] = "Aplicar est&aacute;ndares de calidad a los servicios digitales en Europa";
 choices[51][2] = "Apertura al exterior";
 choices[51][3] = "I+D+i como forma de mejorar los servicios digitales de las empresas europeas";
 answers[51] = choices[51][0];
 units[51] = "17";
 comments[51] = "Id Pregunta: 762. Mercado &Uacute;nico Digital";


//  Id pregunta: 735 Año de creación de pregunta: 2016
 questions[52]= "53)  Son l&iacute;neas de acci&oacute;n del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP.";
 choices[52]= new Array();
 choices[52][0] = "Disponer de sistemas de an&aacute;lisis de datos para la toma de decisiones y de funcionarios formados adecuadamente.";
 choices[52][1] = "Que en el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser electr&oacute;nica.";
 choices[52][2] = "Un mejor formaci&oacute;n del funcionariado y una atenci&oacute;n al ciudadano acorde a las nuevas tecnolog&iacute;as.";
 choices[52][3] = "Desarrollar el puesto de trabajo digital y mejorar la satisfacci&oacute;n del usuario en el uso de los servicios p&uacute;blicos digitales.";
 answers[52] = choices[52][3];
 units[52] = "28";
 comments[52] = "Id Pregunta: 735. Estrategia TIC";


//  Id pregunta: 764 Año de creación de pregunta: 2016
 questions[53]= "54)  La Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico, establece y regula (se&ntilde;ala la incorrecta):";
 choices[53]= new Array();
 choices[53][0] = "las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[53][1] = "los principios del sistema de responsabilidad de las Administraciones P&uacute;blicas y de la potestad sancionadora";
 choices[53][2] = "el procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas";
 choices[53][3] = "la organizaci&oacute;n y funcionamiento de la Administraci&oacute;n General del Estado y de su sector p&uacute;blico institucional para el desarrollo de sus actividades";
 answers[53] = choices[53][2];
 units[53] = "4, 7, 8, 9";
 comments[53] = "Id Pregunta: 764. Ley 40/2015";


//  Id pregunta: 50 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas del DNI electr&oacute;nico es exclusiva del DNIe 3.0?";
 choices[54]= new Array();
 choices[54][0] = "Cumple la norma ISO 7816 para tarjetas inteligentes.";
 choices[54][1] = "Emplea la tecnolog&iacute;a inal&aacute;mbrica NFC.";
 choices[54][2] = "Contiene certificados de componente, autenticaci&oacute;n y firma.";
 choices[54][3] = "Sus certificados cumplen la norma X509 v3.";
 answers[54] = choices[54][1];
 units[54] = "78";
 comments[54] = "Id Pregunta: 50. AGE A1 2015";


//  Id pregunta: 318 Año de creación de pregunta: 2016
 questions[55]= "56)  El personal de la Comisi&oacute;n se organiza en departamentos, conocidos como:";
 choices[55]= new Array();
 choices[55][0] = "Consejos y Servicios.";
 choices[55][1] = "Servicios permanentes y no permanentes.";
 choices[55][2] = "Direcciones Generales.";
 choices[55][3] = "Direcciones ministeriales.";
 answers[55] = choices[55][2];
 units[55] = "5";
 comments[55] = "Id Pregunta: 318. UNION EUROPEA";


//  Id pregunta: 667 Año de creación de pregunta: 2016
 questions[56]= "57)  Seg&uacute;n la Ley 39/2015, un expediente administrativo contendr&aacute;:";
 choices[56]= new Array();
 choices[56][0] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios,la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento, y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[56][1] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios y un &iacute;ndice numerado de todos los documentos.";
 choices[56][2] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[56][3] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos, la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento  y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 answers[56] = choices[56][2];
 units[56] = "7";
 comments[56] = "Id Pregunta: 667. Art&iacute;culo 70 de la Ley 39/2015";


//  Id pregunta: 683 Año de creación de pregunta: 2016
 questions[57]= "58)  El Factor de Sostenibilidad, de acuerdo a la Ley 23/2013, de 23 de diciembre, reguladora del Factor de Sostenibilidad y del &Iacute;ndice de Revalorizaci&oacute;n del Sistema de Pensiones de la Seguridad Social:";
 choices[57]= new Array();
 choices[57][0] = "Es un valor que se calcula para cada periodo de 3 a&ntilde;os, comenzando en el a&ntilde;o 2016.";
 choices[57][1] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la evoluci&oacute;n del PIB y otros datos macroecon&oacute;micos.";
 choices[57][2] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la esperanza de vida de los pensionistas.";
 choices[57][3] = "Se aplicar&aacute; para determinar la cuant&iacute;a de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a partir del 1 de Enero del a&ntilde;o 2018.";
 answers[57] = choices[57][2];
 units[57] = "14";
 comments[57] = "Id Pregunta: 683. Pensiones";


//  Id pregunta: 53 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Cu&aacute;l de los siguientes objetivos est&aacute; fuera del alcance de una reuni&oacute;n diaria de SCRUM (daily scrum)?";
 choices[58]= new Array();
 choices[58][0] = "Exponer las tareas no planificadas que tambi&eacute;n est&aacute;n haciendo los miembros del equipo.";
 choices[58][1] = "Resolver detalladamente los problemas que puedan tener los miembros del equipo.";
 choices[58][2] = "Poner de manifiesto el ritmo de trabajo de cada miembro del equipo.";
 choices[58][3] = "Identificar las tareas que puedan afectar a otros miembros del equipo.";
 answers[58] = choices[58][1];
 units[58] = "84";
 comments[58] = "Id Pregunta: 53. AGE A1 2015";


//  Id pregunta: 39 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes respuestas NO es un servicio definido por el Open Geospatial Consortium (OGC)?";
 choices[59]= new Array();
 choices[59][0] = "WMS sirve mapas de forma din&aacute;mica presentando la informaci&oacute;n como im&aacute;genes digitales.";
 choices[59][1] = "WMTS permite la visualizaci&oacute;n de mapas a trav&eacute;s de teselas (tiles) de im&aacute;genes.";
 choices[59][2] = "WRS permite la consulta de colecciones de mapas raster.";
 choices[59][3] = "WFS permite la consulta y descarga de datos vectoriales.";
 answers[59] = choices[59][2];
 units[59] = "71";
 comments[59] = "Id Pregunta: 39. AGE A1 2015";


//  Id pregunta: 45 Año de creación de pregunta: 2016
 questions[60]= "61)  46. &iquest;Cu&aacute;l de las siguientes NO es una de las APIs incorporadas a HTML5?";
 choices[60]= new Array();
 choices[60][0] = "HTML Drag and Drop, para arrastrar un objeto a otra localizaci&oacute;n.";
 choices[60][1] = "HTML Advanced Search, para parametrizar y modificar el comportamiento de los buscadores.";
 choices[60][2] = "HTML Local Storage, para almacenar datos en el navegador.";
 choices[60][3] = "HTML SSE, para actualizar una p&aacute;gina web autom&aacute;ticamente sin preguntar al servidor.";
 answers[60] = choices[60][1];
 units[60] = "74";
 comments[60] = "Id Pregunta: 45. AGE A1 2015";


//  Id pregunta: 616 Año de creación de pregunta: 2016
 questions[61]= "62)  Dada la m&aacute;scara de red 255.255.240.0, &iquest;a qu&eacute; red pertenece la direcci&oacute;n IP 192.228.17.15?";
 choices[61]= new Array();
 choices[61][0] = "192.228.0.0";
 choices[61][1] = "192.228.8.0";
 choices[61][2] = "192.228.16.0";
 choices[61][3] = "192.228.17.0";
 answers[61] = choices[61][2];
 units[61] = "109";
 comments[61] = "Id Pregunta: 616. Junta de Extremadura A1 2015";


//  Id pregunta: 502 Año de creación de pregunta: 2016
 questions[62]= "63)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el programa plurianual de la Seguridad Social se elaborar&aacute; por:";
 choices[62]= new Array();
 choices[62][0] = "El presidente de las Cortes Generales.";
 choices[62][1] = "El Presidente del Gobierno.";
 choices[62][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[62][3] = "El Ministro de Trabajo y Asuntos Sociales.";
 answers[62] = choices[62][3];
 units[62] = "10";
 comments[62] = "Id Pregunta: 502. PRESUPUESTOS GENERALES";


//  Id pregunta: 59 Año de creación de pregunta: 2016
 questions[63]= "64)  Con respecto a la norma ISO/IEC 20000 de gesti&oacute;n de servicios TI:";
 choices[63]= new Array();
 choices[63][0] = "Permite certificar a individuos a lo largo de diferentes niveles de conocimiento.";
 choices[63][1] = "Impone el uso exclusivo de ITIL como metodolog&iacute;a a seguir.";
 choices[63][2] = "No permite validar la capacidad de un proveedor de servicios TI de gestionar efectivamente servicios TI.";
 choices[63][3] = "Microsoft Operation Framework (MOF) puede ser usado para conseguir su cumplimiento.";
 answers[63] = choices[63][3];
 units[63] = "101";
 comments[63] = "Id Pregunta: 59. AGE A1 2015";


//  Id pregunta: 91 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Cu&aacute;l de las siguientes opciones muestra exclusivamente herramientas directamente relacionadas con la realizaci&oacute;n de pruebas para asegurar la calidad del software?";
 choices[64]= new Array();
 choices[64][0] = "JUnit, Artifactory y SonarQube";
 choices[64][1] = "JUnit, Artifactory y Selenium";
 choices[64][2] = "JUnit, SonarQube y Selenium";
 choices[64][3] = "ArtiFactory, SonarQube y Selenium";
 answers[64] = choices[64][2];
 units[64] = "92";
 comments[64] = "Id Pregunta: 91. AGE A1 2015";


//  Id pregunta: 560 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Cu&aacute;ndo ha sido aprobada la Agenda Digital para Espa&ntilde;a?";
 choices[65]= new Array();
 choices[65][0] = "En 2015";
 choices[65][1] = "En 2013";
 choices[65][2] = "En 2016";
 choices[65][3] = "En 2007";
 answers[65] = choices[65][1];
 units[65] = "19";
 comments[65] = "Id Pregunta: 560. Agenda Digital";


//  Id pregunta: 288 Año de creación de pregunta: 2016
 questions[66]= "67)  Cu&aacute;l no es uno de los pilares que cimientan el Plan de Acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[66]= new Array();
 choices[66][0] = "Configuraci&oacute;n de un marco que habilite la movilidad transfronteriza mediante los servicios p&uacute;blicos digitales;";
 choices[66][1] = "Facilitar la interacci&oacute;n digital con ciudadanos y empresas mediante AA.PP. abiertas y flexibles que impliquen a los actores interesados en el dise&ntilde;o de pol&iacute;ticas y servicios de una forma colaborativa;";
 choices[66][2] = "Sociedad digital integradora, donde los ciudadanos tengan las cualificaciones adecuadas para aprovechar las oportunidades ofrecidas por Internet.";
 choices[66][3] = "Puesta a disposici&oacute;n de habilitadores y facilitadores claves, servicios y activos reutilizables.";
 answers[66] = choices[66][2];
 units[66] = "5";
 comments[66] = "Id Pregunta: 288. UNION EUROPEA";


//  Id pregunta: 615 Año de creación de pregunta: 2016
 questions[67]= "68)  El Modelo de Referencia de Interconexi&oacute;n de Sistemas Abiertos (OSI) consta de siete niveles. Se&ntilde;ala cu&aacute;l de los principios que se aplicaron para llevar a cabo esta divisi&oacute;n es falso:";
 choices[67]= new Array();
 choices[67][0] = "No se deben crear demasiados niveles de manera que la tarea de describir e integrar &eacute;stos fuera m&aacute;s dif&iacute;cil de lo necesario.";
 choices[67][1] = "Aunque se requiera un nivel de abstracci&oacute;n diferente en el manejo de los datos, debe usarse un nivel ya existente.";
 choices[67][2] = "Cada nivel debe realizar unas funciones bien definidas.";
 choices[67][3] = "Crear para cada nivel interfases con el nivel superior e inferior &uacute;nicamente.";
 answers[67] = choices[67][1];
 units[67] = "48";
 comments[67] = "Id Pregunta: 615. Junta de Extremadura A1 2015";


//  Id pregunta: 514 Año de creación de pregunta: 2016
 questions[68]= "69)  Podr&aacute;n establecerse especialidades del procedimiento referidas a los &oacute;rganos competentes, plazos propios del concreto procedimiento por raz&oacute;n de la materia, formas de iniciaci&oacute;n y terminaci&oacute;n, publicaci&oacute;n e informes a recabar:";
 choices[68]= new Array();
 choices[68][0] = "solo mediante ley";
 choices[68][1] = "reglamentariamente";
 choices[68][2] = "mediante ley o reglamentariamente";
 choices[68][3] = "ninguna es correcta";
 answers[68] = choices[68][1];
 units[68] = "7";
 comments[68] = "Id Pregunta: 514. LEY 39/2015";


//  Id pregunta: 813 Año de creación de pregunta: 2016
 questions[69]= "70)  Las Delegaciones del Gobierno tendr&aacute;n su sede en:";
 choices[69]= new Array();
 choices[69][0] = "la localidad elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[69][1] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[69][2] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[69][3] = "la localidad donde elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 answers[69] = choices[69][2];
 units[69] = "4, 7, 8, 9";
 comments[69] = "Id Pregunta: 813. Ley 40/2015";


//  Id pregunta: 490 Año de creación de pregunta: 2016
 questions[70]= "71)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, autorizar las transferencias entre distintas secciones presupuestarias como consecuencia de reorganizaciones administrativas, es una competencia de:";
 choices[70]= new Array();
 choices[70][0] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[70][1] = "El Gobierno.";
 choices[70][2] = "El Presidente del Gobierno.";
 choices[70][3] = "El Consejo de Ministros.";
 answers[70] = choices[70][1];
 units[70] = "10";
 comments[70] = "Id Pregunta: 490. PRESUPUESTOS GENERALES";


//  Id pregunta: 701 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Qu&eacute; es la integraci&oacute;n continua?";
 choices[71]= new Array();
 choices[71][0] = "Una pr&aacute;ctica recogida en la metodolog&iacute;a M&eacute;trica V3.";
 choices[71][1] = "Un modelo inform&aacute;tico que consiste en hacer integraciones autom&aacute;ticas de un proyecto lo m&aacute;s a menudo posible para as&iacute; poder detectar fallos cuanto antes.";
 choices[71][2] = "Una metodolog&iacute;a &aacute;gil inspirada en XP y FDD encaminada a realizar un desarrollo hol&iacute;stico en todo el proceso de desarrollo de un sistema de informaci&oacute;n.";
 choices[71][3] = "Ninguna de las anteriores.";
 answers[71] = choices[71][1];
 units[71] = "92";
 comments[71] = "Id Pregunta: 701. INTEGRACION CONTINUA";


//  Id pregunta: 193 Año de creación de pregunta: 2016
 questions[72]= "73)  El defensor del pueblo ser&aacute; elegido por las Cortes Generales para un per&iacute;odo de:";
 choices[72]= new Array();
 choices[72][0] = "3 a&ntilde;os.";
 choices[72][1] = "5 a&ntilde;os.";
 choices[72][2] = "4 a&ntilde;os.";
 choices[72][3] = "6 a&ntilde;os.";
 answers[72] = choices[72][1];
 units[72] = "1";
 comments[72] = "Id Pregunta: 193. CONSTITUCION1978";


//  Id pregunta: 113 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes instituciones NO proporciona estad&iacute;sticas oficiales propias sobre el mercado de trabajo en Espa&ntilde;a?";
 choices[73]= new Array();
 choices[73][0] = "La Seguridad Social";
 choices[73][1] = "El Instituto Nacional de Estad&iacute;stica";
 choices[73][2] = "El Servicio de Empleo P&uacute;blico Estatal";
 choices[73][3] = "El Banco de Espa&ntilde;a";
 answers[73] = choices[73][3];
 units[73] = "15";
 comments[73] = "Id Pregunta: 113. ";


//  Id pregunta: 267 Año de creación de pregunta: 2016
 questions[74]= "75)  El T&iacute;tulo Primero de la Constituci&oacute;n Espa&ntilde;ola est&aacute; dedicado a:";
 choices[74]= new Array();
 choices[74][0] = "Los Derechos y Deberes fundamentales.";
 choices[74][1] = "La Corona.";
 choices[74][2] = "El Poder Judicial.";
 choices[74][3] = "Las Cortes Generales.";
 answers[74] = choices[74][2];
 units[74] = "1";
 comments[74] = "Id Pregunta: 267. CONSTITUCION1978";


