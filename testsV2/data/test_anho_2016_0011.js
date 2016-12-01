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
var preguntaids = new Array();

//  Id pregunta: 667 Año de creación de pregunta: 2016
 questions[0]= "1)  Seg&uacute;n la Ley 39/2015, un expediente administrativo contendr&aacute;:";
 choices[0]= new Array();
 choices[0][0] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios,la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento, y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[0][1] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios y un &iacute;ndice numerado de todos los documentos.";
 choices[0][2] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[0][3] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos, la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento  y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 answers[0] = choices[0][2];
 units[0] = "7";
 comments[0] = "Id Pregunta: 667. Art&iacute;culo 70 de la Ley 39/2015";
 preguntaids[0] = 667


//  Id pregunta: 848 Año de creación de pregunta: 2016
 questions[1]= "2)  Se&ntilde;ale la respuesta correcta:";
 choices[1]= new Array();
 choices[1][0] = "La sede electr&oacute;nica es aquella direcci&oacute;n electr&oacute;nica, disponible para los ciudadanos a trav&eacute;s de redes de telecomunicaciones, cuya titularidad corresponde a una Administraci&oacute;n P&uacute;blica, o bien a una o varios organismos p&uacute;blicos o entidades de Derecho P&uacute;blico en el ejercicio de sus competencias.";
 choices[1][1] = "Se entiende por portal de internet el punto de acceso electr&oacute;nico cuya titularidad corresponda a una Administraci&oacute;n P&uacute;blica, organismo p&uacute;blico o entidad de Derecho P&uacute;blico que permite el acceso a trav&eacute;s de internet a la informaci&oacute;n publicada y, en su caso, a la sede electr&oacute;nica correspondiente.";
 choices[1][2] = "A y B son correctas.";
 choices[1][3] = "A y B son falsas.";
 answers[1] = choices[1][2];
 units[1] = "4, 7, 8, 9";
 comments[1] = "Id Pregunta: 848. Ley 40/2015";
 preguntaids[1] = 848


//  Id pregunta: 528 Año de creación de pregunta: 2016
 questions[2]= "3)  Los menores incapacitados, cuando la extensi&oacute;n de la incapacitaci&oacute;n afecte al ejercicio y defensa de los derechos o intereses de que se trate:";
 choices[2]= new Array();
 choices[2][0] = "tienen capacidad de obrar limitada";
 choices[2][1] = "pueden actuar sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[2][2] = "no tienen capacidad de obrar";
 choices[2][3] = "ninguna es correcta";
 answers[2] = choices[2][2];
 units[2] = "7";
 comments[2] = "Id Pregunta: 528. LEY 39/2015";
 preguntaids[2] = 528


//  Id pregunta: 325 Año de creación de pregunta: 2016
 questions[3]= "4)  Indique el n&uacute;mero m&iacute;nimo de Diputados necesario para constituir un Grupo Pol&iacute;tico en el Parlamento Europeo:";
 choices[3]= new Array();
 choices[3][0] = "Veinticinco.";
 choices[3][1] = "Veintiuno.";
 choices[3][2] = "Dieciocho.";
 choices[3][3] = "Diecinueve.";
 answers[3] = choices[3][0];
 units[3] = "5";
 comments[3] = "Id Pregunta: 325. UNION EUROPEA";
 preguntaids[3] = 325


//  Id pregunta: 329 Año de creación de pregunta: 2016
 questions[4]= "5)  Si el Consejo en alg&uacute;n acuerdo necesita de mayor&iacute;a cualificada se produce:";
 choices[4]= new Array();
 choices[4][0] = "Acuerdos cualificados.";
 choices[4][1] = "Acuerdos ponderados.";
 choices[4][2] = "Valoraci&oacute;n de los votos.";
 choices[4][3] = "Ponderaci&oacute;n de los votos.";
 answers[4] = choices[4][3];
 units[4] = "5";
 comments[4] = "Id Pregunta: 329. UNION EUROPEA";
 preguntaids[4] = 329


//  Id pregunta: 716 Año de creación de pregunta: 2016
 questions[5]= "6)  Se&ntilde;ale la opci&oacute;n correcta";
 choices[5]= new Array();
 choices[5][0] = "Jenkins un servidor de integraci&oacute;n continua comercial.";
 choices[5][1] = "Extiende su funcionalidad a trav&eacute;s de plugins.";
 choices[5][2] = "Solamente soporta herramientas de control de versiones como CVS, Git y Clearcase.";
 choices[5][3] = "No posee un historial de cambios realizados por build o versi&oacute;n.";
 answers[5] = choices[5][1];
 units[5] = "92";
 comments[5] = "Id Pregunta: 716. INTEGRACION CONTINUA";
 preguntaids[5] = 716


//  Id pregunta: 439 Año de creación de pregunta: 2016
 questions[6]= "7)  Sobre el Sistema de Interconexi&oacute;n de Registros (SIR):";
 choices[6]= new Array();
 choices[6][0] = "Es la infraestructura b&aacute;sica que permite el intercambio de asientos electr&oacute;nicos de registro entre los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[6][1] = "Permite eliminar el tr&aacute;nsito de papel entre administraciones, aumentando la eficiencia y eliminando los costes de manipulaci&oacute;n y remisi&oacute;n del papel, gracias a la generaci&oacute;n de copias aut&eacute;nticas electr&oacute;nicas de la documentaci&oacute;n presentada en los asientos de registro.";
 choices[6][2] = "No es necesario que la aplicaci&oacute;n de registro est&eacute; certificada con la norma SICRES 3.0.";
 choices[6][3] = "La integraci&oacute;n en SIR se realiza mediante aplicaciones de registro comunes como GEISER y ORVE o bien, siempre que se justifique, mediante aplicaciones previamente certificadas por la Comisi&oacute;n de Estrategia TIC.";
 answers[6] = choices[6][1];
 units[6] = "43";
 comments[6] = "Id Pregunta: 439. SERVICIOS COMUNES";
 preguntaids[6] = 439


//  Id pregunta: 372 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[7]= new Array();
 choices[7][0] = "El Parlamento y el Consejo.";
 choices[7][1] = "El Parlamento y la Comisi&oacute;n.";
 choices[7][2] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[7][3] = "La Comisi&oacute;n y el Consejo.";
 answers[7] = choices[7][2];
 units[7] = "5";
 comments[7] = "Id Pregunta: 372. UNION EUROPEA";
 preguntaids[7] = 372


//  Id pregunta: 367 Año de creación de pregunta: 2016
 questions[8]= "9)  Es una funci&oacute;n del Presidente del Parlamento Europeo:";
 choices[8]= new Array();
 choices[8][0] = "Presentar la moci&oacute;n de censura.";
 choices[8][1] = "Presidir las sesiones del Parlamento.";
 choices[8][2] = "Organizar la Secretar&iacute;a General.";
 choices[8][3] = "Preparar las actividades de las Comisiones.";
 answers[8] = choices[8][1];
 units[8] = "5";
 comments[8] = "Id Pregunta: 367. UNION EUROPEA";
 preguntaids[8] = 367


//  Id pregunta: 783 Año de creación de pregunta: 2016
 questions[9]= "10)  La Administraci&oacute;n consultiva podr&aacute; articularse:";
 choices[9]= new Array();
 choices[9][0] = "mediante &oacute;rganos espec&iacute;ficos dotados de autonom&iacute;a org&aacute;nica y funcional con respecto a la Administraci&oacute;n activa";
 choices[9][1] = "a trav&eacute;s de los servicios de la Administraci&oacute;n activa que prestan asistencia jur&iacute;dica";
 choices[9][2] = "a y b son correctas";
 choices[9][3] = "a y b son incorrectas";
 answers[9] = choices[9][2];
 units[9] = "4, 7, 8, 9";
 comments[9] = "Id Pregunta: 783. Ley 40/2015";
 preguntaids[9] = 783


//  Id pregunta: 702 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;Cu&aacute;l de los siguientes NO es un repositorio de c&oacute;digo?";
 choices[10]= new Array();
 choices[10][0] = "CVS";
 choices[10][1] = "SVN";
 choices[10][2] = "Team Foundation Server";
 choices[10][3] = "Apache Tomcat";
 answers[10] = choices[10][3];
 units[10] = "92";
 comments[10] = "Id Pregunta: 702. INTEGRACION CONTINUA";
 preguntaids[10] = 702


//  Id pregunta: 106 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;En qu&eacute; consiste el paradigma MapReduce?";
 choices[11]= new Array();
 choices[11][0] = "Map toma un conjunto de datos y lo convierte en otro conjunto donde los elementos individuales son separados en tuplas (pares clave/valor)";
 choices[11][1] = "Reduce obtiene la salida de map como datos de entrada y combina tuplas en un conjunto m&aacute;s peque&ntilde;o de las mismas";
 choices[11][2] = "A) y B) son verdaderas";
 choices[11][3] = "A) es la definici&oacute;n del procedimiento intermedio Shuffle";
 answers[11] = choices[11][2];
 units[11] = "73";
 comments[11] = "Id Pregunta: 106. ";
 preguntaids[11] = 106


//  Id pregunta: 331 Año de creación de pregunta: 2016
 questions[12]= "13)  Tras el tratado de Niza, &iquest;cu&aacute;ntos eurodiputados son elegidos en el Estado espa&ntilde;ol?:";
 choices[12]= new Array();
 choices[12][0] = "90";
 choices[12][1] = "50";
 choices[12][2] = "64";
 choices[12][3] = "60";
 answers[12] = choices[12][1];
 units[12] = "5";
 comments[12] = "Id Pregunta: 331. UNION EUROPEA";
 preguntaids[12] = 331


//  Id pregunta: 27 Año de creación de pregunta: 2016
 questions[13]= "14)  La Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, NO estableci&oacute; como derecho de los ciudadanos, el derecho:";
 choices[13]= new Array();
 choices[13][0] = "A la igualdad en el acceso electr&oacute;nico a los servicios de las Administraciones P&uacute;blicas.";
 choices[13][1] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que tengan la condici&oacute;n de interesado.";
 choices[13][2] = "A la calidad de los servicios p&uacute;blicos prestados por medios electr&oacute;nicos.";
 choices[13][3] = "A la preferencia en la tramitaci&oacute;n de los procedimientos presentados electr&oacute;nicamente.";
 answers[13] = choices[13][3];
 units[13] = "7";
 comments[13] = "Id Pregunta: 27. AGE A1 2015";
 preguntaids[13] = 27


//  Id pregunta: 585 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Qu&eacute; establece Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[14]= new Array();
 choices[14][0] = "Los principios rectores";
 choices[14][1] = "Los objetivos estrat&eacute;gicos y las acciones para alcanzarlos";
 choices[14][2] = "Los hitos para su desarrollo gradual";
 choices[14][3] = "Todos los anteriores";
 answers[14] = choices[14][3];
 units[14] = "19";
 comments[14] = "Id Pregunta: 585. Estrategia TIC";
 preguntaids[14] = 585


//  Id pregunta: 2 Año de creación de pregunta: 2016
 questions[15]= "16)  La estrategia de comunicaci&oacute;n de un nuevo proyecto estrat&eacute;gico TIC NO debe:";
 choices[15]= new Array();
 choices[15][0] = "Posponerse a la puesta en producci&oacute;n del proyecto sin incidencias significativas.";
 choices[15][1] = "Presentar prototipos que muestren la evoluci&oacute;n del desarrollo ya realizado.";
 choices[15][2] = "Dise&ntilde;ar una campa&ntilde;a de difusi&oacute;n y promoci&oacute;n del proyecto.";
 choices[15][3] = "Asegurar la implicaci&oacute;n de representantes de todas las unidades afectadas.";
 answers[15] = choices[15][0];
 units[15] = "31";
 comments[15] = "Id Pregunta: 2. AGE A1 2015";
 preguntaids[15] = 2


//  Id pregunta: 382 Año de creación de pregunta: 2016
 questions[16]= "17)  Seg&uacute;n la ley org&aacute;nica 3/2007, los actos y las cl&aacute;usulas de los negocios jur&iacute;dicos que causen discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[16]= new Array();
 choices[16][0] = "Se considerar&aacute;n nulos y sin efecto.";
 choices[16][1] = "Est&aacute;n sometidos a una tasa fiscal especial (Tasa Tobin)";
 choices[16][2] = "Son impugnables ante los juzgados especiales contra la violencia de g&eacute;nero.";
 choices[16][3] = "Si son actos administrativos, el recurso se debe interponer, en todo caso, ante el Ministerio de Igualdad.";
 answers[16] = choices[16][0];
 units[16] = "14";
 comments[16] = "Id Pregunta: 382. POLITICAS DE IGUALDAD";
 preguntaids[16] = 382


//  Id pregunta: 668 Año de creación de pregunta: 2016
 questions[17]= "18)  Seg&uacute;n el art&iacute;culo 73 de la Ley 39/2015, el plazo para el el cumplimiento de tr&aacute;mites que deban ser cumplimentados por el interesado, es por defecto:";
 choices[17]= new Array();
 choices[17][0] = "10 d&iacute;as.";
 choices[17][1] = "15 d&iacute;as.";
 choices[17][2] = "1 mes.";
 choices[17][3] = "No se establece ning&uacute;n plazo por defecto.";
 answers[17] = choices[17][0];
 units[17] = "7";
 comments[17] = "Id Pregunta: 668. Art&iacute;culo 73 de la Ley 39/2015";
 preguntaids[17] = 668


//  Id pregunta: 30 Año de creación de pregunta: 2016
 questions[18]= "19)  El sistema operativo OS X El Capit&aacute;n incluye un conjunto de servicios de red para compartir archivos entre Mac y PC, &iquest;cu&aacute;l es el protocolo por defecto que emplea OS X El Capit&aacute;n?";
 choices[18]= new Array();
 choices[18][0] = "SMB3";
 choices[18][1] = "AFP";
 choices[18][2] = "NFS";
 choices[18][3] = "FTP";
 answers[18] = choices[18][0];
 units[18] = "59";
 comments[18] = "Id Pregunta: 30. AGE A1 2015";
 preguntaids[18] = 30


//  Id pregunta: 261 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Qui&eacute;n representa al Consejo General del Poder Judicial?";
 choices[19]= new Array();
 choices[19][0] = "La Comisi&oacute;n Permanente.";
 choices[19][1] = "El Presidente.";
 choices[19][2] = "El Pleno.";
 choices[19][3] = "El Vicepresidente.";
 answers[19] = choices[19][3];
 units[19] = "1";
 comments[19] = "Id Pregunta: 261. CONSTITUCION1978";
 preguntaids[19] = 261


//  Id pregunta: 348 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;En qu&eacute; fecha naci&oacute; la Uni&oacute;n Europea?:";
 choices[20]= new Array();
 choices[20][0] = "El 1 de noviembre de 1994.";
 choices[20][1] = "El 1 de noviembre de 1992.";
 choices[20][2] = "El 1 de noviembre de 1995.";
 choices[20][3] = "El 1 de noviembre de 1993.";
 answers[20] = choices[20][3];
 units[20] = "5";
 comments[20] = "Id Pregunta: 348. UNION EUROPEA";
 preguntaids[20] = 348


//  Id pregunta: 861 Año de creación de pregunta: 2016
 questions[21]= "22)  Para la generaci&oacute;n de contenidos de un sitio web p&uacute;blico se necesitan diversos perfiles. Indique cu&aacute;l NO es uno de ellos.";
 choices[21]= new Array();
 choices[21][0] = "Generador de contenidos";
 choices[21][1] = "Publicador de contenidos";
 choices[21][2] = "Administrador de contenidos";
 choices[21][3] = "Aprobador de contenidos";
 answers[21] = choices[21][3];
 units[21] = "125";
 comments[21] = "Id Pregunta: 861. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[21] = 861


//  Id pregunta: 630 Año de creación de pregunta: 2016
 questions[22]= "23)  Seg&uacute;n el Real Decreto 4/2010, de 8 de enero, por el que se regula el Esquema Nacional de Interoperabilidad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; es la interoperabilidad?";
 choices[22]= new Array();
 choices[22][0] = "Es la capacidad de los sistemas de informaci&oacute;n y de los procedimientos a los que &eacute;stos dan soporte, de compartir datos y posibilitar el intercambio de informaci&oacute;n y conocimiento entre ellos.";
 choices[22][1] = "Es la obligaci&oacute;n de conectividad ente sistemas operativos de las Administraciones P&uacute;blicas.";
 choices[22][2] = "Es la capacidad de intercambio de datos entre las Comunidades Aut&oacute;nomas y la Administraci&oacute;n Central.";
 choices[22][3] = "Es la posibilidad de acceso a los datos que poseen todas las Administraciones sobre cualquiera de los usuarios de los sistemas de informaci&oacute;n.";
 answers[22] = choices[22][0];
 units[22] = "45";
 comments[22] = "Id Pregunta: 630. Junta de Extremadura A1 2015";
 preguntaids[22] = 630


//  Id pregunta: 162 Año de creación de pregunta: 2016
 questions[23]= "24)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones";
 choices[23]= new Array();
 choices[23][0] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[23][1] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro de las setenta y dos horas contadas a partir de las 8:00 horas del d&iacute;a laborable siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[23][2] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 00:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 choices[23][3] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 24 horas contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 answers[23] = choices[23][0];
 units[23] = "19";
 comments[23] = "Id Pregunta: 162. La respuesta B es la antigua redacci&oacute;n";
 preguntaids[23] = 162


//  Id pregunta: 826 Año de creación de pregunta: 2016
 questions[24]= "25)  Podr&aacute;n ordenarle que se abstengan de toda intervenci&oacute;n en el expediente al funcionario que se encuentre en causa de abstenci&oacute;n...";
 choices[24]= new Array();
 choices[24][0] = "Los &oacute;rganos jer&aacute;rquicamente superiores";
 choices[24][1] = "S&oacute;lo los &oacute;rganos inmediatamente superiores jer&aacute;rquicos";
 choices[24][2] = "Los interesados en el procedimiento";
 choices[24][3] = "Las alternativas b) y c) son correctas";
 answers[24] = choices[24][1];
 units[24] = "4, 7, 8, 9";
 comments[24] = "Id Pregunta: 826. Ley 40/2015";
 preguntaids[24] = 826


//  Id pregunta: 224 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[25]= new Array();
 choices[25][0] = "Art&iacute;culo 16.2.";
 choices[25][1] = "Art&iacute;culo 17.1.";
 choices[25][2] = "Art&iacute;culo 18.1.";
 choices[25][3] = "Art&iacute;culo 18.2.";
 answers[25] = choices[25][2];
 units[25] = "1";
 comments[25] = "Id Pregunta: 224. CONSTITUCION1978";
 preguntaids[25] = 224


//  Id pregunta: 377 Año de creación de pregunta: 2016
 questions[26]= "27)  Es un elemento caracter&iacute;stico de la naturaleza jur&iacute;dica de la Uni&oacute;n Europea:";
 choices[26]= new Array();
 choices[26][0] = "Tener una estructura institucional.";
 choices[26][1] = "El establecimiento de un Ordenamiento jur&iacute;dico propio.";
 choices[26][2] = "La transferencia de competencias a las instituciones comunitarias.";
 choices[26][3] = "Todas las respuestas son correctas.";
 answers[26] = choices[26][3];
 units[26] = "5";
 comments[26] = "Id Pregunta: 377. UNION EUROPEA";
 preguntaids[26] = 377


//  Id pregunta: 789 Año de creación de pregunta: 2016
 questions[27]= "28)  En la organizaci&oacute;n central no son &oacute;rganos directivos:";
 choices[27]= new Array();
 choices[27][0] = "los Subsecretarios y Secretarios generales";
 choices[27][1] = "los Secretarios generales t&eacute;cnicos y Directores generales";
 choices[27][2] = "los Secretarios de Estado";
 choices[27][3] = "los Subdirectores generales";
 answers[27] = choices[27][2];
 units[27] = "4, 7, 8, 9";
 comments[27] = "Id Pregunta: 789. Ley 40/2015";
 preguntaids[27] = 789


//  Id pregunta: 631 Año de creación de pregunta: 2016
 questions[28]= "29)  Seg&uacute;n la Ley de Protecci&oacute;n de Datos de Car&aacute;cter Personal, no podr&aacute;n realizarse transferencias de datos de car&aacute;cter personal a pa&iacute;ses que no proporcionen un nivel de protecci&oacute;n equiparable al de esta Ley. &iquest;Qui&eacute;n se encarga de evaluar el nivel adecuado de protecci&oacute;n que ofrece el pa&iacute;s de destino de los datos?";
 choices[28]= new Array();
 choices[28][0] = "El Ministerio de Asuntos Exteriores junto con el Ministerio de Justicia.";
 choices[28][1] = "El responsable de la custodia de los datos enviados.";
 choices[28][2] = "La Agencia Europea de Cooperaci&oacute;n.";
 choices[28][3] = "La Agencia de Protecci&oacute;n de Datos.";
 answers[28] = choices[28][3];
 units[28] = "35";
 comments[28] = "Id Pregunta: 631. Junta de Extremadura A1 2015";
 preguntaids[28] = 631


//  Id pregunta: 512 Año de creación de pregunta: 2016
 questions[29]= "30)  La presente Ley tiene por objeto regular: (se&ntilde;ala la incorrecta)";
 choices[29]= new Array();
 choices[29][0] = "Los requisitos de validez y eficacia de los actos administrativos";
 choices[29][1] = "El procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas, incluyendo el sancionador y el de reclamaci&oacute;n de responsabilidad de las Administraciones P&uacute;blicas";
 choices[29][2] = "Las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[29][3] = "Los principios a los que se ha de ajustar el ejercicio de la iniciativa legislativa y la potestad reglamentaria";
 answers[29] = choices[29][2];
 units[29] = "7";
 comments[29] = "Id Pregunta: 512. LEY 39/2015";
 preguntaids[29] = 512


//  Id pregunta: 330 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Cu&aacute;les son las funciones de la Conferencia para Asuntos Relacionados con las Comunidades Europeas?:";
 choices[30]= new Array();
 choices[30][0] = "Garantizar el cumplimiento en las Conferencias Sectoriales de los procedimientos y f&oacute;rmulas de participaci&oacute;n de las Comunidades Aut&oacute;nomas.";
 choices[30][1] = "El tratamiento y resoluci&oacute;n con arreglo al principio de cooperaci&oacute;n de aquellas cuestiones de alcance general o contenido institucional relacionadas con las Comunidades Europeas.";
 choices[30][2] = "Todas son correctas.";
 choices[30][3] = "Informaci&oacute;n a las Comunidades Aut&oacute;nomas y la discusi&oacute;n en com&uacute;n sobre el desarrollo del proceso de constituci&oacute;n europea.";
 answers[30] = choices[30][2];
 units[30] = "5";
 comments[30] = "Id Pregunta: 330. UNION EUROPEA";
 preguntaids[30] = 330


//  Id pregunta: 521 Año de creación de pregunta: 2016
 questions[31]= "32)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas tiene:";
 choices[31]= new Array();
 choices[31][0] = "un art&iacute;culo";
 choices[31][1] = "dos art&iacute;culos";
 choices[31][2] = "tres art&iacute;culos";
 choices[31][3] = "cuatro art&iacute;culos";
 answers[31] = choices[31][1];
 units[31] = "7";
 comments[31] = "Id Pregunta: 521. LEY 39/2015";
 preguntaids[31] = 521


//  Id pregunta: 64 Año de creación de pregunta: 2016
 questions[32]= "33)  De entre los siguientes sistemas operativos para dispositivos m&oacute;viles, indique cu&aacute;l est&aacute; afectado por la vulnerabilidad Stagefright:";
 choices[32]= new Array();
 choices[32][0] = "Windows Phone";
 choices[32][1] = "Blackberry";
 choices[32][2] = "iOS";
 choices[32][3] = "Android";
 answers[32] = choices[32][3];
 units[32] = "59";
 comments[32] = "Id Pregunta: 64. AGE A1 2015";
 preguntaids[32] = 64


//  Id pregunta: 227 Año de creación de pregunta: 2016
 questions[33]= "34)  En relaci&oacute;n con el Defensor del Pueblo, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[33]= new Array();
 choices[33][0] = "Es el supremo &oacute;rgano consultivo del Gobierno.";
 choices[33][1] = "Puede supervisar la actividad de la Administraci&oacute;n del Estado, pero no la de las Comunidades Aut&oacute;nomas.";
 choices[33][2] = "Puede anular resoluciones e imponer sanciones, siempre que no impliquen privaci&oacute;n de libertad.";
 choices[33][3] = "Tiene como misi&oacute;n la defensa de todos los derechos comprendidos en el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola, y no s&oacute;lo los susceptibles de recurso de amparo.";
 answers[33] = choices[33][3];
 units[33] = "1";
 comments[33] = "Id Pregunta: 227. CONSTITUCION1978";
 preguntaids[33] = 227


//  Id pregunta: 10 Año de creación de pregunta: 2016
 questions[34]= "35)  El servicio mediante el cual se localiza un terminal m&oacute;vil dentro de alguna de las N c&eacute;lulas gestionadas coordinadamente en una zona de cobertura se denomina:";
 choices[34]= new Array();
 choices[34][0] = "Paging";
 choices[34][1] = "Roaming";
 choices[34][2] = "Handover";
 choices[34][3] = "Trunking";
 answers[34] = choices[34][0];
 units[34] = "117";
 comments[34] = "Id Pregunta: 10. AGE A1 2015";
 preguntaids[34] = 10


//  Id pregunta: 737 Año de creación de pregunta: 2016
 questions[35]= "36)  Son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[35]= new Array();
 choices[35][0] = "Tranparencia, Innovaci&oacute;n, Unidad y visi&oacute;n integral y Orientaci&oacute;n al usuario del servicio";
 choices[35][1] = "Tranparencia, Colaboraci&oacute;n y alianzas, Orientaci&oacute;n al usuario del servicio y Reutilizaci&oacute;n";
 choices[35][2] = "Reutilizaci&oacute;n, Seguridad, Orientaci&oacute;n al usuario del servicio y Transparencia";
 choices[35][3] = "Ninguna de las anteriores";
 answers[35] = choices[35][0];
 units[35] = "28";
 comments[35] = "Id Pregunta: 737. Estrategia TIC";
 preguntaids[35] = 737


//  Id pregunta: 573 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Cu&aacute;l de los siguientes hechos NO se produce durante la d&eacute;cada de los 70-80?";
 choices[36]= new Array();
 choices[36][0] = "Incorporaci&oacute;n de la mujer al mercado laboral";
 choices[36][1] = "Entrada en la Uni&oacute;n Europea";
 choices[36][2] = "Pactos de la Moncloa";
 choices[36][3] = "Ingreso en la ONU";
 answers[36] = choices[36][3];
 units[36] = "12";
 comments[36] = "Id Pregunta: 573. Modelo econ&oacute;mico";
 preguntaids[36] = 573


//  Id pregunta: 120 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;Cu&aacute;l es el Real Decreto por el que se aprueba el Estatuto del Consejo de Transparencia y Buen Gobierno?";
 choices[37]= new Array();
 choices[37][0] = "Real Decreto 806/2014, de 19 de septiembre";
 choices[37][1] = "Real Decreto 951/2015, de 23 de octubre";
 choices[37][2] = "Real Decreto 1065/2015, de 27 de noviembre";
 choices[37][3] = "Real Decreto 919/2014, de 31 de octubre";
 answers[37] = choices[37][3];
 units[37] = "22";
 comments[37] = "Id Pregunta: 120. ";
 preguntaids[37] = 120


//  Id pregunta: 604 Año de creación de pregunta: 2016
 questions[38]= "39)  Como todo criptosistema de clave p&uacute;blica, el protocolo del criptosistema RSA:";
 choices[38]= new Array();
 choices[38][0] = "Tiene dos partes: Cifrado de Mensajes, Descifrado de Mensajes.";
 choices[38][1] = "Se basa en la dificultad que supone resolver el &lt;Problema de la Factorizaci&oacute;n Externa&gt;.";
 choices[38][2] = "Tiene tres partes: Generaci&oacute;n de claves, Cifrado de mensajes, Descifrado de mensajes.";
 choices[38][3] = "Se basa en la dificultad que supone resolver el &lt;Problema de Socrates- Arquimedes&gt;.";
 answers[38] = choices[38][2];
 units[38] = "76";
 comments[38] = "Id Pregunta: 604. Junta de Extremadura A1 2015";
 preguntaids[38] = 604


//  Id pregunta: 689 Año de creación de pregunta: 2016
 questions[39]= "40)  Indique cu&aacute;l de los siguientes no es uno de los requisitos que debe cumplir una firma electr&oacute;nica avanzada seg&uacute;n el Reglamento (UE) 910/2014";
 choices[39]= new Array();
 choices[39][0] = "Estar vinculada al firmante de manera &uacute;nica";
 choices[39][1] = "Haber sido creada utilizando un dispositivo avanzado de creacio&#769;n de firmas electro&#769;nicas";
 choices[39][2] = "Haber sido creada utilizando datos de creaci&oacute;n de firma que el firmante puede utilizar, con un alto nivel de confianza, bajo su exclusivo control";
 choices[39][3] = "Estar vinculada con los datos firmados, de modo tal que cualquier modificacio&#769;n ulterior de los mismos sea detectable";
 answers[39] = choices[39][1];
 units[39] = "77";
 comments[39] = "Id Pregunta: 689. Art&iacute;culo 26 del Reglamento 910/2014";
 preguntaids[39] = 689


//  Id pregunta: 607 Año de creación de pregunta: 2016
 questions[40]= "41)  En ITIL v3, entre los procesos de la &ldquo;Fase del Ciclo de Vida: Dise&ntilde;o del Servicio&rdquo;, est&aacute;n:";
 choices[40]= new Array();
 choices[40][0] = "Gesti&oacute;n del Cat&aacute;logo de Servicios y Gesti&oacute;n de la Cartera de Servicios.";
 choices[40][1] = "Gesti&oacute;n de la Cartera de Servicio y Gesti&oacute;n de la Seguridad de la Informaci&oacute;n.";
 choices[40][2] = "Gesti&oacute;n de la Disponibilidad y Gesti&oacute;n de la Capacidad.";
 choices[40][3] = "Gesti&oacute;n de Suministradores y Gesti&oacute;n de Eventos.";
 answers[40] = choices[40][2];
 units[40] = "101";
 comments[40] = "Id Pregunta: 607. Junta de Extremadura A1 2015";
 preguntaids[40] = 607


//  Id pregunta: 837 Año de creación de pregunta: 2016
 questions[41]= "42)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[41]= new Array();
 choices[41][0] = "Los &oacute;rganos competentes podr&aacute;n avocar para s&iacute; el conocimiento de uno o varios asuntos cuya resoluci&oacute;n corresponda ordinariamente o por delegaci&oacute;n a sus &oacute;rganos administrativos dependientes, cuando circunstancias de &iacute;ndole t&eacute;cnica, econ&oacute;mica, social, jur&iacute;dica o territorial lo hagan conveniente.";
 choices[41][1] = "En los supuestos de delegaci&oacute;n de competencias en &oacute;rganos no dependientes jer&aacute;rquicamente, el conocimiento de un asunto podr&aacute; ser avocado &uacute;nicamente por el &oacute;rgano delegante.";
 choices[41][2] = "En todo caso, la avocaci&oacute;n se realizar&aacute; mediante acuerdo motivado que deber&aacute; ser notificado a los interesados en el procedimiento, si los hubiere, con posterioridad a la resoluci&oacute;n final que se dicte.";
 choices[41][3] = "Contra el acuerdo de avocaci&oacute;n no cabr&aacute; recurso, aunque podr&aacute; impugnarse en el que, en su caso, se interponga contra la resoluci&oacute;n del procedimiento.";
 answers[41] = choices[41][2];
 units[41] = "4, 7, 8, 9";
 comments[41] = "Id Pregunta: 837. Ley 40/2015";
 preguntaids[41] = 837


//  Id pregunta: 206 Año de creación de pregunta: 2016
 questions[42]= "43)  La alteraci&oacute;n de los l&iacute;mites de una provincia debe ser aprobada por:";
 choices[42]= new Array();
 choices[42][0] = "El Gobierno.";
 choices[42][1] = "La Asamblea de la Comunidad Aut&oacute;noma a la que pertenezca la provincia.";
 choices[42][2] = "Las Cortes Generales, mediante ley org&aacute;nica.";
 choices[42][3] = "Una Comisi&oacute;n formada por los senadores designados en esa provincia.";
 answers[42] = choices[42][2];
 units[42] = "1";
 comments[42] = "Id Pregunta: 206. CONSTITUCION1978";
 preguntaids[42] = 206


//  Id pregunta: 434 Año de creación de pregunta: 2016
 questions[43]= "44)  En cuanto al sistema EGEO, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[43]= new Array();
 choices[43][0] = "Permite la representaci&oacute;n de mapas tem&aacute;ticos, georreferenciados, buscador de recursos georreferenciados con filtros definidos por el usuario, y de magnitud.";
 choices[43][1] = "Utiliza &uacute;nicamente sobre mapas oficiales del Instituto Geogr&aacute;fico Nacional (IGN).";
 choices[43][2] = "Es un servicio com&uacute;n dirigido a &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[43][3] = "Para su manejo, es necesario contar con conocimientos de georreferenciaci&oacute;n.";
 answers[43] = choices[43][0];
 units[43] = "43";
 comments[43] = "Id Pregunta: 434. SERVICIOS COMUNES";
 preguntaids[43] = 434


//  Id pregunta: 612 Año de creación de pregunta: 2016
 questions[44]= "45)  En el lenguaje de manipulaci&oacute;n de datos, &iquest;cu&aacute;l de las siguientes cl&aacute;usulas va asociada a la cl&aacute;usula HAVING?";
 choices[44]= new Array();
 choices[44][0] = "GROUP BY.";
 choices[44][1] = "COUNT.";
 choices[44][2] = "WHERE.";
 choices[44][3] = "DISTINCT.";
 answers[44] = choices[44][0];
 units[44] = "60";
 comments[44] = "Id Pregunta: 612. Junta de Extremadura A1 2015";
 preguntaids[44] = 612


//  Id pregunta: 562 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Cu&aacute;l de los siguientes no es un obst&aacute;culo identificado por la Comisi&oacute;n para el desarrollo de la Agenda Digital europea?";
 choices[45]= new Array();
 choices[45][0] = "El incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes";
 choices[45][1] = "La falta de inversi&oacute;n en campa&ntilde;as de comunicaci&oacute;n en los pa&iacute;ses miembros";
 choices[45][2] = "Las carencias en la alfabetizaci&oacute;n y la capacitaci&oacute;n digitales";
 choices[45][3] = "La ausencia de inversi&oacute;n en las redes";
 answers[45] = choices[45][1];
 units[45] = "19";
 comments[45] = "Id Pregunta: 562. Agenda Digital";
 preguntaids[45] = 562


//  Id pregunta: 161 Año de creación de pregunta: 2016
 questions[46]= "47)  Se&ntilde;alar cu&aacute;l NO es uno de los principios del Plan de Acci&oacute;n de Administraci&oacute;n Electr&oacute;nica 2016-2020";
 choices[46]= new Array();
 choices[46][0] = "Principio de solo una vez";
 choices[46][1] = "Apertura y transparencia";
 choices[46][2] = "Confianza y seguridad";
 choices[46][3] = "Estandarizaci&oacute;n de forma predeterminada";
 answers[46] = choices[46][3];
 units[46] = "19";
 comments[46] = "Id Pregunta: 161. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Junio/Noticia-2016-06-02-Plan-accion-administracion-electronica-2016-2020.html#.WCjvuWrhDIU";
 preguntaids[46] = 161


//  Id pregunta: 234 Año de creación de pregunta: 2016
 questions[47]= "48)  De conformidad con el Art&iacute;culo 97 de la Constituci&oacute;n Espa&ntilde;ola, corresponde dirigir la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado:";
 choices[47]= new Array();
 choices[47][0] = "Al Jefe del Estado, por corresponderle el mando supremo de las Fuerzas Armadas.";
 choices[47][1] = "A las Cortes Generales, como representaci&oacute;n del pueblo espa&ntilde;ol.";
 choices[47][2] = "Al Congreso de los Diputados.";
 choices[47][3] = "Al Gobierno.";
 answers[47] = choices[47][0];
 units[47] = "1";
 comments[47] = "Id Pregunta: 234. CONSTITUCION1978";
 preguntaids[47] = 234


//  Id pregunta: 158 Año de creación de pregunta: 2016
 questions[48]= "49)  Seg&uacute;n la ley 39/2015, cuando la notificaci&oacute;n por medios electr&oacute;nicos sea de car&aacute;cter obligatorio, o haya sido expresamente elegida por el interesado:";
 choices[48]= new Array();
 choices[48][0] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[48][1] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[48][2] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[48][3] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 answers[48] = choices[48][1];
 units[48] = "7";
 comments[48] = "Id Pregunta: 158. Ley 39/2015, Art&iacute;culo 43";
 preguntaids[48] = 158


//  Id pregunta: 385 Año de creación de pregunta: 2016
 questions[49]= "50)  Se&ntilde;ale c&oacute;mo es evaluado el Plan de Igualdad en la Administraci&oacute;n General del Estado, previsto en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la Igualdad efectiva de mujeres y hombres:";
 choices[49]= new Array();
 choices[49][0] = "Anualmente por el Consejo de Ministros";
 choices[49][1] = "Anualmente por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios";
 choices[49][2] = "Al final de cada legislatura por el Gobierno";
 choices[49][3] = "Al final de cada legislatura por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios.";
 answers[49] = choices[49][0];
 units[49] = "14";
 comments[49] = "Id Pregunta: 385. POLITICAS DE IGUALDAD";
 preguntaids[49] = 385


//  Id pregunta: 62 Año de creación de pregunta: 2016
 questions[50]= "51)  El art&iacute;culo 102 del Real Decreto 1720/2007, por el que se determina la conservaci&oacute;n de una copia de respaldo de los datos y de los procedimientos de recuperaci&oacute;n de los mismos en un lugar diferente de aquel en que se encuentren los equipos inform&aacute;ticos que los tratan, &iquest;a qu&eacute; nivel o niveles de medidas de seguridad es aplicable?";
 choices[50]= new Array();
 choices[50][0] = "B&aacute;sico";
 choices[50][1] = "Medio";
 choices[50][2] = "Alto";
 choices[50][3] = "A los niveles medio y alto";
 answers[50] = choices[50][2];
 units[50] = "35";
 comments[50] = "Id Pregunta: 62. AGE A1 2015";
 preguntaids[50] = 62


//  Id pregunta: 613 Año de creación de pregunta: 2016
 questions[51]= "52)  Una de las caracter&iacute;sticas de seguridad en SQL Server 2008 es el cifrado transparente de datos. Se&ntilde;ala la afirmaci&oacute;n correcta:";
 choices[51]= new Array();
 choices[51][0] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de registro.";
 choices[51][1] = "SQL Server ofrece la capacidad de buscar dentro de los datos cifrados.";
 choices[51][2] = "Para trabajar con datos cifrados utilizando esta caracter&iacute;stica hay que introducir cambios en las aplicaciones.";
 choices[51][3] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de datos.";
 answers[51] = choices[51][1];
 units[51] = "63";
 comments[51] = "Id Pregunta: 613. Junta de Extremadura A1 2015";
 preguntaids[51] = 613


//  Id pregunta: 649 Año de creación de pregunta: 2016
 questions[52]= "53)  En Itil V3, entre los factores que hay que tener en cuenta en la evaluaci&oacute;n de herramientas de Gesti&oacute;n del Servicio se encuentran:";
 choices[52]= new Array();
 choices[52][0] = "Estructura, tratamiento, integraci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[52][1] = "structura, salvaguarda, integraci&oacute;n de datos, flexibilidad de implementaci&oacute;n, uso y comunicaci&oacute;n de datos.";
 choices[52][2] = "Estructura, tratamiento, inspecci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[52][3] = "Responsabilidad, tratamiento, inspecci&oacute;n de datos y soporte a la monitorizaci&oacute;n de los niveles de servicio.";
 answers[52] = choices[52][0];
 units[52] = "101";
 comments[52] = "Id Pregunta: 649. Junta de Extremadura A1 2015";
 preguntaids[52] = 649


//  Id pregunta: 584 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;Cu&aacute;ndo tuvo lugar la primera declaraci&oacute;n de servicios compartidos?";
 choices[53]= new Array();
 choices[53][0] = "El 5 de Octubre de 2015";
 choices[53][1] = "El 15 de Octubre de 2015";
 choices[53][2] = "El 15 de Septiembre de 2015";
 choices[53][3] = "El 2 de Octubre de 2015";
 answers[53] = choices[53][2];
 units[53] = "19";
 comments[53] = "Id Pregunta: 584. Estrategia TIC";
 preguntaids[53] = 584


//  Id pregunta: 683 Año de creación de pregunta: 2016
 questions[54]= "55)  El Factor de Sostenibilidad, de acuerdo a la Ley 23/2013, de 23 de diciembre, reguladora del Factor de Sostenibilidad y del &Iacute;ndice de Revalorizaci&oacute;n del Sistema de Pensiones de la Seguridad Social:";
 choices[54]= new Array();
 choices[54][0] = "Es un valor que se calcula para cada periodo de 3 a&ntilde;os, comenzando en el a&ntilde;o 2016.";
 choices[54][1] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la evoluci&oacute;n del PIB y otros datos macroecon&oacute;micos.";
 choices[54][2] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la esperanza de vida de los pensionistas.";
 choices[54][3] = "Se aplicar&aacute; para determinar la cuant&iacute;a de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a partir del 1 de Enero del a&ntilde;o 2018.";
 answers[54] = choices[54][2];
 units[54] = "14";
 comments[54] = "Id Pregunta: 683. Pensiones";
 preguntaids[54] = 683


//  Id pregunta: 442 Año de creación de pregunta: 2016
 questions[55]= "56)  Sobre la gu&iacute;a de Comunicaci&oacute;n Digital de la AGE, se&ntilde;ale la respuesta falsa:";
 choices[55]= new Array();
 choices[55][0] = "La Gu&iacute;a de Comunicaci&oacute;n Digital para la AGE ofrece un marco de criterios, recomendaciones y buenas pr&aacute;cticas a considerar al crear, generar contenidos o evolucionar sitios web, sedes electr&oacute;nicas o tambi&eacute;n blogs, cuentas o perfiles de redes sociales.";
 choices[55][1] = "Recoge aspectos como la imagen Institucional: uso de los logotipos del Gobierno de Espa&ntilde;a, elementos distintivos de imagen en las redes sociales o la imagen promocional de la administraci&oacute;n electr&oacute;nica.";
 choices[55][2] = "Se divide en tres partes, con fasc&iacute;culos que pueden ser utilizados independientemente seg&uacute;n las necesidades de cada responsable del sitio web.";
 choices[55][3] = "La &laquo;Gu&iacute;a de Comunicaci&oacute;n Digital para la Administraci&oacute;n General del Estado&raquo; que se aprueba mediante la presente Resoluci&oacute;n se aplicar&aacute; al a&ntilde;o siguiente al de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 answers[55] = choices[55][3];
 units[55] = "43";
 comments[55] = "Id Pregunta: 442. SERVICIOS COMUNES";
 preguntaids[55] = 442


//  Id pregunta: 96 Año de creación de pregunta: 2016
 questions[56]= "57)  Indique cu&aacute;l de las siguientes soluciones tecnol&oacute;gicas NO se utiliza para virtualizaci&oacute;n:";
 choices[56]= new Array();
 choices[56][0] = "VMware ESX";
 choices[56][1] = "XenServer";
 choices[56][2] = "Alfresco";
 choices[56][3] = "Microsoft Hyper-V";
 answers[56] = choices[56][2];
 units[56] = "54";
 comments[56] = "Id Pregunta: 96. AGE A1 2015";
 preguntaids[56] = 96


//  Id pregunta: 827 Año de creación de pregunta: 2016
 questions[57]= "58)  La actuaci&oacute;n de autoridades y personal al servicio de las Administraciones P&uacute;blicas en los que concurran motivos de abstenci&oacute;n ...";
 choices[57]= new Array();
 choices[57][0] = "No implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido pero dar&aacute; lugar a la responsabilidad que proceda";
 choices[57][1] = "Dar&aacute; lugar a la responsabilidad que proceda pero no implicar&aacute; en ning&uacute;n caso la invalidez de los actos en que hayan intervenido";
 choices[57][2] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido";
 choices[57][3] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido dando lugar a la responsabilidad que proceda";
 answers[57] = choices[57][1];
 units[57] = "4, 7, 8, 9";
 comments[57] = "Id Pregunta: 827. Ley 40/2015";
 preguntaids[57] = 827


//  Id pregunta: 674 Año de creación de pregunta: 2016
 questions[58]= "59)  En cuanto a la Historia Cl&iacute;nica Digital del Sistema Nacional de Salud, se&ntilde;ale cual de las siguientes afirmaciones es Incorrecta:";
 choices[58]= new Array();
 choices[58][0] = "Se ha implementado por mandato legal, tanto por la Ley 16/2003 de cohesi&oacute;n y calidad del Sistema Nacional de Salud, como por la Ley 41/2002 de Autonom&iacute;a del Paciente.";
 choices[58][1] = "Permite que los profesionales sanitarios puedan acceder a los datos de salud del paciente, cuando este se encuentre desplazado fuera de su Comunidad Aut&oacute;noma de origen y requiera asistencia sanitaria.";
 choices[58][2] = "De acuerdo a su dise&ntilde;o funcional, permite acceder a la totalidad de los contenidos existentes en la Historia Cl&iacute;nica Electr&oacute;nica de las Comunidades Aut&oacute;nomas.";
 choices[58][3] = "Gracias a ella, de acuerdo al informe CORA de Febrero de 2016, ya son 25,5 millones de ciudadanos los que disponen de informes cl&iacute;nicos en el Sstema Nacional de Salud.";
 answers[58] = choices[58][2];
 units[58] = "47";
 comments[58] = "Id Pregunta: 674. Historia Cl&iacute;nica Digital";
 preguntaids[58] = 674


//  Id pregunta: 833 Año de creación de pregunta: 2016
 questions[59]= "60)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Marque la respuesta correcta.";
 choices[59]= new Array();
 choices[59][0] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo.";
 choices[59][1] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo.";
 choices[59][2] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter potestativo.";
 choices[59][3] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter oneroso.";
 answers[59] = choices[59][0];
 units[59] = "4, 7, 8, 9";
 comments[59] = "Id Pregunta: 833. Ley 40/2015";
 preguntaids[59] = 833


//  Id pregunta: 502 Año de creación de pregunta: 2016
 questions[60]= "61)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el programa plurianual de la Seguridad Social se elaborar&aacute; por:";
 choices[60]= new Array();
 choices[60][0] = "El presidente de las Cortes Generales.";
 choices[60][1] = "El Presidente del Gobierno.";
 choices[60][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[60][3] = "El Ministro de Trabajo y Asuntos Sociales.";
 answers[60] = choices[60][3];
 units[60] = "10";
 comments[60] = "Id Pregunta: 502. PRESUPUESTOS GENERALES";
 preguntaids[60] = 502


//  Id pregunta: 141 Año de creación de pregunta: 2016
 questions[61]= "62)  El recurso de alzada puede interponerse:";
 choices[61]= new Array();
 choices[61][0] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna en todo caso";
 choices[61][1] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna o ante el competente para resolverlo";
 choices[61][2] = "Ante el &oacute;rgano competente para resolverlo en todo caso";
 choices[61][3] = "Ante el Defensor del Pueblo";
 answers[61] = choices[61][1];
 units[61] = "8";
 comments[61] = "Id Pregunta: 141. Ley 39/2015, Art&iacute;culo 121";
 preguntaids[61] = 141


//  Id pregunta: 276 Año de creación de pregunta: 2016
 questions[62]= "63)  Se&ntilde;ale la respuesta falsa";
 choices[62]= new Array();
 choices[62][0] = "El Portal de la Transparencia del Gobierno de Espa&ntilde;a es una subsede de la sede electr&oacute;nica central del Ministerio de la Presidencia.";
 choices[62][1] = "La titularidad de esta subsede corresponde a la Oficina de la Transparencia y Acceso a la Informaci&oacute;n (OTAI), dependiente de la Oficina para la Ejecuci&oacute;n de la Reforma de la Administraci&oacute;n P&uacute;blica (OPERA).";
 choices[62][2] = "La gesti&oacute;n de la plataforma tecnol&oacute;gica es competencia de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones (DTIC), en virtud del Acuerdo de Colaboraci&oacute;n firmado por el Ministerio de la Presidencia y el Ministerio de Hacienda y Administraciones P&uacute;blicas, para el desarrollo del Portal de la Transparencia.";
 choices[62][3] = "La DTIC ser&aacute; responsable de la integridad y disponibilidad de la informaci&oacute;n, que se provea al Portal de la Transparencia a trav&eacute;s de enlaces o v&iacute;nculos a otras p&aacute;ginas o sedes electr&oacute;nicas cuya responsabilidad corresponda a distinto &oacute;rgano o Administraci&oacute;n P&uacute;blica.";
 answers[62] = choices[62][3];
 units[62] = "22";
 comments[62] = "Id Pregunta: 276. LEY DE TRANSPARENCIA";
 preguntaids[62] = 276


//  Id pregunta: 237 Año de creación de pregunta: 2016
 questions[63]= "64)  Seg&uacute;n la regulaci&oacute;n constitucional del derecho de asociaci&oacute;n:";
 choices[63]= new Array();
 choices[63][0] = "Las asociaciones que se constituyan deben inscribirse en un registro a los efectos de publicidad.";
 choices[63][1] = "Las asociaciones pueden ser suspendidas en virtud de resoluci&oacute;n administrativa motivada.";
 choices[63][2] = "Este derecho aparece regulado en el T&iacute;tulo Preliminar de la Constituci&oacute;n.";
 choices[63][3] = "Este derecho aparece regulado en la Secci&oacute;n 2&ordf; del Cap&iacute;tulo 2&ordm; del T&iacute;tulo I de la Constituci&oacute;n.";
 answers[63] = choices[63][2];
 units[63] = "1";
 comments[63] = "Id Pregunta: 237. CONSTITUCION1978";
 preguntaids[63] = 237


//  Id pregunta: 652 Año de creación de pregunta: 2016
 questions[64]= "65)  Indica cu&aacute;l de las siguientes caracter&iacute;sticas del protocolo IP versi&oacute;n 6 es incorrecta.";
 choices[64]= new Array();
 choices[64][0] = "El tama&ntilde;o de la direcci&oacute;n IP es de 128 bits.";
 choices[64][1] = "Aumento de la flexibilidad en el direccionamiento.";
 choices[64][2] = "Define una cabecera de extensi&oacute;n que proporciona autenticaci&oacute;n.";
 choices[64][3] = "La cabecera IP versi&oacute;n 6 obligatoria es de tama&ntilde;o variable.";
 answers[64] = choices[64][3];
 units[64] = "109";
 comments[64] = "Id Pregunta: 652. Junta de Extremadura A1 2015";
 preguntaids[64] = 652


//  Id pregunta: 248 Año de creación de pregunta: 2016
 questions[65]= "66)  El T&iacute;tulo II de la Constituci&oacute;n finaliza en el Art&iacute;culo:";
 choices[65]= new Array();
 choices[65][0] = "61";
 choices[65][1] = "53";
 choices[65][2] = "65";
 choices[65][3] = "67";
 answers[65] = choices[65][1];
 units[65] = "1";
 comments[65] = "Id Pregunta: 248. CONSTITUCION1978";
 preguntaids[65] = 248


//  Id pregunta: 256 Año de creación de pregunta: 2016
 questions[66]= "67)  El Art&iacute;culo 21 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que:";
 choices[66]= new Array();
 choices[66][0] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y con armas.";
 choices[66][1] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica siempre dentro del derecho de manifestaci&oacute;n previa autorizaci&oacute;n.";
 choices[66][2] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y sin armas.";
 choices[66][3] = "No se reconoce expl&iacute;citamente tal derecho de reuni&oacute;n.";
 answers[66] = choices[66][0];
 units[66] = "1";
 comments[66] = "Id Pregunta: 256. CONSTITUCION1978";
 preguntaids[66] = 256


//  Id pregunta: 665 Año de creación de pregunta: 2016
 questions[67]= "68)  Seg&uacute;n la Ley 39/2015, la iniciaci&oacute;n de un procedimiento administrativo puede realizarse:";
 choices[67]= new Array();
 choices[67][0] = "De oficio.";
 choices[67][1] = "A solicitud del interesado.";
 choices[67][2] = "De oficio o a solicitud del interesado.";
 choices[67][3] = "Por la Administraci&oacute;n P&uacute;blica responsable.";
 answers[67] = choices[67][2];
 units[67] = "7";
 comments[67] = "Id Pregunta: 665. Art&iacute;culo 54 de la Ley 39/2015";
 preguntaids[67] = 665


//  Id pregunta: 553 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Cu&aacute;l es el &oacute;rgano t&eacute;cnico de cooperaci&oacute;n de la Administraci&oacute;n General del Estado, de las Administraciones de las Comunidades Aut&oacute;nomas y de las Entidades Locales en materia de administraci&oacute;n electr&oacute;nica definido en la ley 40/2015 de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[68]= new Array();
 choices[68][0] = "La Conferencia Sectorial de Telecomunicaciones y Sociedad de la Informaci&oacute;n";
 choices[68][1] = "El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica";
 choices[68][2] = "La Comisi&oacute;n Sectorial de administraci&oacute;n electr&oacute;nica";
 choices[68][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[68] = choices[68][2];
 units[68] = "26";
 comments[68] = "Id Pregunta: 553. Gobernanza TIC";
 preguntaids[68] = 553


//  Id pregunta: 111 Año de creación de pregunta: 2016
 questions[69]= "70)  En t&eacute;rminos del mercado laboral, &iquest;Qu&eacute; es la Tasa de Actividad?";
 choices[69]= new Array();
 choices[69][0] = "Ratio entre el total de activos y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[69][1] = "Ratio entre el total de ocupados y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[69][2] = "Ratio entre el total de activos y la poblaci&oacute;n total";
 choices[69][3] = "Ratio entre el total de ocupados y el total de activos";
 answers[69] = choices[69][0];
 units[69] = "15";
 comments[69] = "Id Pregunta: 111. ";
 preguntaids[69] = 111


//  Id pregunta: 166 Año de creación de pregunta: 2016
 questions[70]= "71)  El indicador de la Comisi&oacute;n Europea &ldquo;DESI&rdquo; (Digital Economy &amp; Society Index) tiene entre sus dimensiones:";
 choices[70]= new Array();
 choices[70][0] = "Interoperabilidad";
 choices[70][1] = "Integridad";
 choices[70][2] = "Capital humano";
 choices[70][3] = "Trazabilidad";
 answers[70] = choices[70][2];
 units[70] = "19";
 comments[70] = "Id Pregunta: 166. https://ec.europa.eu/digital-single-market/en/desi Conectividad, Capital humano, Uso de internet, Integraci&oacute;n de tecnolog&iacute;a digital, Servicios p&uacute;blicos digitales";
 preguntaids[70] = 166


//  Id pregunta: 635 Año de creación de pregunta: 2016
 questions[71]= "72)  Respecto a la b&uacute;squeda en un &aacute;rbol binario, el peor de los casos para el algoritmo T, &ldquo;b&uacute;squeda e inserci&oacute;n en un &aacute;rbol&rdquo;, se da cuando las claves se han introducido en el &aacute;rbol de forma:";
 choices[71]= new Array();
 choices[71][0] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[71][1] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 choices[71][2] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[71][3] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 answers[71] = choices[71][3];
 units[71] = "56";
 comments[71] = "Id Pregunta: 635. Junta de Extremadura A1 2015";
 preguntaids[71] = 635


//  Id pregunta: 445 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Cu&aacute;l no es una funcionalidad que incorpora la versi&oacute;n 3.5 de Acceda?";
 choices[72]= new Array();
 choices[72][0] = "Gesti&oacute;n de notificaciones pendientes, notificadas y rehusadas (de forma expresa o vencido el plazo de caducidad).";
 choices[72][1] = "Remisi&oacute;n a Notific@, desde el m&oacute;dulo de gesti&oacute;n de ACCEDA, de las notificaciones que se emitan como parte de la tramitaci&oacute;n de los expedientes.";
 choices[72][2] = "Gesti&oacute;n de notificaciones pendientes, notificadas y rehusadas (de forma expresa o sin haber vencido el plazo de caducidad).";
 choices[72][3] = "Parametrizaci&oacute;n de las opciones de env&iacute;o: canal de notificaci&oacute;n - Sede-e ACCEDA y Carpeta Ciudadana; DEH obligatorio; DEH voluntario / env&iacute;o postal, etc.";
 answers[72] = choices[72][2];
 units[72] = "43";
 comments[72] = "Id Pregunta: 445. SERVICIOS COMUNES";
 preguntaids[72] = 445


//  Id pregunta: 150 Año de creación de pregunta: 2016
 questions[73]= "74)  Seg&uacute;n la ley 39/2015, el medio elegido por la persona para comunicarse con las Administraciones P&uacute;blicas:";
 choices[73]= new Array();
 choices[73][0] = "&uacute;nicamente podr&aacute; ser modificado cuando de no hacerlo se corra riesgo de no alcanzarse las pretensiones del interesado ";
 choices[73][1] = "no podr&aacute; ser modificado con posterioridad al tr&aacute;mite de audiencia";
 choices[73][2] = "podr&aacute; ser modificado en cualquier momento por la persona";
 choices[73][3] = "no podr&aacute; ser modificado de manera unilateral por el interesado";
 answers[73] = choices[73][2];
 units[73] = "7";
 comments[73] = "Id Pregunta: 150. Ley 39/2015, Art&iacute;culo 14";
 preguntaids[73] = 150


//  Id pregunta: 539 Año de creación de pregunta: 2016
 questions[74]= "75)  Respecto a los registros electr&oacute;nicos de apoderamientos no es correcto:";
 choices[74]= new Array();
 choices[74][0] = "en el &aacute;mbito estatal, este registro ser&aacute; el Registro Electr&oacute;nico de Apoderamientos de la Administraci&oacute;n General del Estado";
 choices[74][1] = "en ellos no constar&aacute; el bastanteo realizado del poder";
 choices[74][2] = "los registros generales de apoderamientos no impedir&aacute;n la existencia de registros particulares en cada Organismo";
 choices[74][3] = "cada Organismo podr&aacute; disponer de su propio registro electr&oacute;nico de apoderamientos";
 answers[74] = choices[74][1];
 units[74] = "7";
 comments[74] = "Id Pregunta: 539. LEY 39/2015";
 preguntaids[74] = 539


