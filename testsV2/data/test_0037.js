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

//  Id pregunta: 731 Año de creación de pregunta: 2016
 questions[0]= "1)  Indique cual de los siguientes no forma parte del vocabulario de scrum";
 choices[0]= new Array();
 choices[0][0] = "Burn-up chart";
 choices[0][1] = "Arquitectural Skype";
 choices[0][2] = "Burn-down chart";
 choices[0][3] = "Definition of done";
 answers[0] = choices[0][1];
 units[0] = "34, 84";
 comments[0] = "Id Pregunta: 731. Metodologias &aacute;giles";
 preguntaids[0] = 731


//  Id pregunta: 561 Año de creación de pregunta: 2016
 questions[1]= "2)  Uno de los objetivos de la Agenda Digital para Espa&ntilde;a es desarrollar la econom&iacute;a digital, &iquest;qu&eacute; actuaciones se deben desarrollar para lograr esto?";
 choices[1]= new Array();
 choices[1][0] = "Impulsar la producci&oacute;n y distribuci&oacute;n a trav&eacute;s de Internet de contenidos digitales";
 choices[1][1] = "Favorecer la internacionalizaci&oacute;n de las empresas tecnol&oacute;gicas";
 choices[1][2] = "Incentivar el uso transformador de las TIC en nuestras empresas";
 choices[1][3] = "Todos los anteriores";
 answers[1] = choices[1][3];
 units[1] = "19";
 comments[1] = "Id Pregunta: 561. Agenda Digital";
 preguntaids[1] = 561


//  Id pregunta: 712 Año de creación de pregunta: 2016
 questions[2]= "3)  Si un ciudadano solicita informaci&oacute;n a la Administraci&oacute;n y son de aplicaci&oacute;n los l&iacute;mites de derecho de acceso previstos en el art&iacute;culo 14 de la Ley 19/2013 pero &eacute;stos no afectan a la totalidad de la informaci&oacute;n:";
 choices[2]= new Array();
 choices[2][0] = "Nunca se conceder&aacute; el acceso parcial a la informaci&oacute;n.";
 choices[2][1] = "Se ofrecer&aacute; acceso parcial sin indicar al solicitante que parte de la informaci&oacute;n ha sido omitida.";
 choices[2][2] = "Siempre se conder&aacute; acceso parcial a la informaci&oacute;n a la que no le afecte la limitaci&oacute;n prevista en el art&iacute;culo 14.";
 choices[2][3] = "Se conceder&aacute; el acceso parcial previa omisi&oacute;n de la informaci&oacute;n afectada por el l&iacute;mite de acceso, salvo que de ello resulte una informaci&oacute;n distorsionada o que carezca de sentido.";
 answers[2] = choices[2][3];
 units[2] = "22";
 comments[2] = "Id Pregunta: 712. Ley de transparencia";
 preguntaids[2] = 712


//  Id pregunta: 588 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Cu&aacute;l es el per&iacute;odo temporal del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[3]= new Array();
 choices[3][0] = "Comprende del a&ntilde;o 2015 al 2017";
 choices[3][1] = "Comprende del a&ntilde;o 2015 al 2020";
 choices[3][2] = "Comprende del a&ntilde;o 2016 al 2018";
 choices[3][3] = "Ninguna de las anteriores";
 answers[3] = choices[3][1];
 units[3] = "19";
 comments[3] = "Id Pregunta: 588. Estrategia TIC";
 preguntaids[3] = 588


//  Id pregunta: 294 Año de creación de pregunta: 2016
 questions[4]= "5)  Indique a qui&eacute;n corresponde la funci&oacute;n de promover el inter&eacute;s general de la Uni&oacute;n Europea y tomar las iniciativas adecuadas con este fin:";
 choices[4]= new Array();
 choices[4][0] = "Al Consejo Europeo.";
 choices[4][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[4][2] = "A la Comisi&oacute;n Europea.";
 choices[4][3] = "Al Parlamento Europeo.";
 answers[4] = choices[4][2];
 units[4] = "5";
 comments[4] = "Id Pregunta: 294. UNION EUROPEA";
 preguntaids[4] = 294


//  Id pregunta: 666 Año de creación de pregunta: 2016
 questions[5]= "6)  De acuerdo a la Ley 39/2015, el formato del expediente administrativo ser&aacute;:";
 choices[5]= new Array();
 choices[5][0] = "Siempre en formato electr&oacute;nico.";
 choices[5][1] = "Siempre en formato papel.";
 choices[5][2] = "Las personas f&iacute;sicas podr&aacute;n elegir en todo momento el formato del expediente administrativo.";
 choices[5][3] = "La ley no regula el formato del expediente.";
 answers[5] = choices[5][0];
 units[5] = "7";
 comments[5] = "Id Pregunta: 666. Art&iacute;culo 70 de la Ley 39/2015";
 preguntaids[5] = 666


//  Id pregunta: 487 Año de creación de pregunta: 2016
 questions[6]= "7)  Se&ntilde;ale la respuesta incorrecta respecto de la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[6]= new Array();
 choices[6][0] = "El principio de dotaci&oacute;n presupuestaria implica que los Presupuestos Generales del Estado de cada ejercicio contendr&aacute;n los cr&eacute;ditos necesarios para atender a las transferencias de medios econ&oacute;micos que deban realizarse a las comunidades aut&oacute;nomas por aplicaci&oacute;n del sistema de financiaci&oacute;n vigente en cada momento.";
 choices[6][1] = "Los cr&eacute;ditos para hacer efectivas las liquidaciones definitivas de ejercicios anteriores tendr&aacute;n el car&aacute;cter de ampliables.";
 choices[6][2] = "El reintegro de ayudas y la responsabilidad financiera derivados de la gesti&oacute;n de los fondos procedentes de la Uni&oacute;n Europea se someter&aacute; a lo previsto en la Ley General de Subvenciones y en la normativa comunitaria.";
 choices[6][3] = "Los anticipos para ejecuci&oacute;n de acciones y programas financiados o cofinanciados por fondos europeos que estuvieran pendientes de cancelar al finalizar el ejercicio, no podr&aacute;n cancelarse en el ejercicio siguiente.";
 answers[6] = choices[6][3];
 units[6] = "10";
 comments[6] = "Id Pregunta: 487. PRESUPUESTOS GENERALES";
 preguntaids[6] = 487


//  Id pregunta: 780 Año de creación de pregunta: 2016
 questions[7]= "8)  Los &oacute;rganos administrativos podr&aacute;n dirigir las actividades de sus &oacute;rganos jer&aacute;rquicamente dependientes mediante:";
 choices[7]= new Array();
 choices[7][0] = "circulares";
 choices[7][1] = "reglamentos internos";
 choices[7][2] = "instrucciones y &oacute;rdenes de servicio";
 choices[7][3] = "disposiciones de car&aacute;cter general";
 answers[7] = choices[7][2];
 units[7] = "4, 7, 8, 9";
 comments[7] = "Id Pregunta: 780. Ley 40/2015";
 preguntaids[7] = 780


//  Id pregunta: 690 Año de creación de pregunta: 2016
 questions[8]= "9)  Indique cu&aacute;l de los siguientes no es uno de los requisitos que deben cumplir los servicios cualificados de entrega electro&#769;nica certificada seg&uacute;n el Reglamento (UE) 910/2014";
 choices[8]= new Array();
 choices[8][0] = "Ser prestados por uno o ma&#769;s prestadores cualificados de servicios de confianza";
 choices[8][1] = "Garantizar la identificacio&#769;n del destinatario antes de la entrega de los datos";
 choices[8][2] = "Indicar mediante un sello cualificado de tiempo electro&#769;nico la fecha y hora de envi&#769;o, recepcio&#769;n y eventual modificacio&#769;n de los datos";
 choices[8][3] = "Proteger el envi&#769;o y la recepcio&#769;n de datos por una firma electro&#769;nica cualificada o un sello electro&#769;nico cualificado de un prestador cualificado de servicios de confianza";
 answers[8] = choices[8][1];
 units[8] = "77";
 comments[8] = "Id Pregunta: 690. Art&iacute;culo 44 del Reglamento 910/2014";
 preguntaids[8] = 690


//  Id pregunta: 435 Año de creación de pregunta: 2016
 questions[9]= "10)  Sobre el servicio com&uacute;n Autentica, se&ntilde;ale la respuesta correcta:";
 choices[9]= new Array();
 choices[9][0] = "Autentica ofrece &uacute;nicamente servicios de autenticaci&oacute;n de empleados p&uacute;blicos de las AA.PP. y usuarios relacionados,";
 choices[9][1] = "Su objetivo es constituirse como el servicio com&uacute;n compartido de referencia para los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado, para sus aplicaciones internas.";
 choices[9][2] = "El servicio provee atributos de los usuarios autenticados relacionados con la unidad y el puesto de destino, incluyendo correo electr&oacute;nico y tel&eacute;fono.";
 choices[9][3] = "Ofrece funcionalidad de autorizaci&oacute;n de usuarios, &uacute;nicamente pertenecientes a la Administraci&oacute;n General del Estado.";
 answers[9] = choices[9][2];
 units[9] = "43";
 comments[9] = "Id Pregunta: 435. SERVICIOS COMUNES";
 preguntaids[9] = 435


//  Id pregunta: 820 Año de creación de pregunta: 2016
 questions[10]= "11)  Respecto a los servicios territoriales es correcto:";
 choices[10]= new Array();
 choices[10][0] = "la organizaci&oacute;n de los servicios territoriales no integrados en las Delegaciones del Gobierno se establecer&aacute; mediante Real Decreto";
 choices[10][1] = "los servicios territoriales no integrados depender&aacute;n del Delegado del Gobierno, o en su caso Subdelegado del Gobierno, a trav&eacute;s de la Secretar&iacute;a General";
 choices[10][2] = "los servicios territoriales integrados depender&aacute;n del &oacute;rgano central competente sobre el sector de actividad en el que aqu&eacute;llos operen";
 choices[10][3] = "ninguna es correcta";
 answers[10] = choices[10][0];
 units[10] = "4, 7, 8, 9";
 comments[10] = "Id Pregunta: 820. Ley 40/2015";
 preguntaids[10] = 820


//  Id pregunta: 52 Año de creación de pregunta: 2016
 questions[11]= "12)  Las normas ISO que cubren los procesos de especificaci&oacute;n de requisitos de calidad del software y evaluaci&oacute;n de la calidad del software corresponden a la serie:";
 choices[11]= new Array();
 choices[11][0] = "ISO/IEC 25000";
 choices[11][1] = "ISO/IEC 27000";
 choices[11][2] = "ISO 9000";
 choices[11][3] = "ISO 9001";
 answers[11] = choices[11][0];
 units[11] = "93";
 comments[11] = "Id Pregunta: 52. AGE A1 2015";
 preguntaids[11] = 52


//  Id pregunta: 118 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;C&oacute;mo se concretan anualmente los objetivos de la Estrategia Espa&ntilde;ola de Activaci&oacute;n para el Empleo?";
 choices[12]= new Array();
 choices[12][0] = "Mediante &Oacute;rdenes Ministeriales del Ministerio de Empleo y Seguridad Social";
 choices[12][1] = "Mediante Reales Decretos del Consejo de Ministros";
 choices[12][2] = "Mediante los Planes Anuales de Pol&iacute;tica de Empleo";
 choices[12][3] = "Mediante dictamen del Consejo General del Sistema Nacional de Empleo";
 answers[12] = choices[12][2];
 units[12] = "15";
 comments[12] = "Id Pregunta: 118. ";
 preguntaids[12] = 118


//  Id pregunta: 572 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Cu&aacute;l de los siguientes datos es err&oacute;neo en 2016?";
 choices[13]= new Array();
 choices[13][0] = "El PIB se encuentra cerca de un bill&oacute;n";
 choices[13][1] = "La Deuda P&uacute;blica est&aacute; alrededor del 100% del PIB";
 choices[13][2] = "El D&eacute;ficit P&uacute;blico est&aacute; en torno al 2% del PIB";
 choices[13][3] = "La tasa de desempleo ronda el 20%";
 answers[13] = choices[13][2];
 units[13] = "12";
 comments[13] = "Id Pregunta: 572. Modelo econ&oacute;mico";
 preguntaids[13] = 572


//  Id pregunta: 727 Año de creación de pregunta: 2016
 questions[14]= "15)  Sobre el Scrum Team, cual es la afirmaci&oacute;n falsa";
 choices[14]= new Array();
 choices[14][0] = "Cada miembro del equipo tiene que tener un rol especifico y no puede asumir tareas que no est&eacute;n dentro de su &aacute;rea de especializaci&oacute;n.";
 choices[14][1] = "Los miembros del equipo deben tener un perfil en &lsquo;T&rsquo; (manejo en una serie amplia de &aacute;reas, con conocimientos en profundidad en unas pocas)";
 choices[14][2] = "Cada miembro del equipo tiene que tener un conocimiento m&aacute;s amplio de un &aacute;rea";
 choices[14][3] = "Cada miembro del equipo puede asumir cualquier tipo de tarea";
 answers[14] = choices[14][0];
 units[14] = "34, 84";
 comments[14] = "Id Pregunta: 727. Metodologias &aacute;giles";
 preguntaids[14] = 727


//  Id pregunta: 464 Año de creación de pregunta: 2016
 questions[15]= "16)  De acuerdo con lo establecido en la Ley General Presupuestaria, durante el ejercicio presupuestario no es posible modificar la cuant&iacute;a y/o finalidad de los cr&eacute;ditos contenidos en los presupuestos de gastos mediante:";
 choices[15]= new Array();
 choices[15][0] = "Transferencias de cr&eacute;dito.";
 choices[15][1] = "Incorporaciones de cr&eacute;dito.";
 choices[15][2] = "Imputaciones de cr&eacute;dito.";
 choices[15][3] = "Ampliaciones de cr&eacute;dito.";
 answers[15] = choices[15][2];
 units[15] = "10";
 comments[15] = "Id Pregunta: 464. PRESUPUESTOS GENERALES";
 preguntaids[15] = 464


//  Id pregunta: 552 Año de creación de pregunta: 2016
 questions[16]= "17)  Entre las funciones a desarrollar por la Comisi&oacute;n Sectorial de la administraci&oacute;n electr&oacute;nica NO se encuentra:";
 choices[16]= new Array();
 choices[16][0] = "Asegurar la compatibilidad e interoperabilidad de los sistemas y aplicaciones empleados por las Administraciones P&uacute;blicas.";
 choices[16][1] = "Impulsar el desarrollo de la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a.";
 choices[16][2] = "Asegurar la cooperaci&oacute;n entre las Administraciones P&uacute;blicas para proporcionar informaci&oacute;n administrativa clara, actualizada e inequ&iacute;voca.";
 choices[16][3] = "El seguimiento de la ejecuci&oacute;n del Plan de Transformaci&oacute;n Digital";
 answers[16] = choices[16][3];
 units[16] = "26";
 comments[16] = "Id Pregunta: 552. Gobernanza TIC";
 preguntaids[16] = 552


//  Id pregunta: 793 Año de creación de pregunta: 2016
 questions[17]= "18)  En la Administraci&oacute;n General del Estado en el exterior son &oacute;rganos directivos:";
 choices[17]= new Array();
 choices[17][0] = "los Ministros y los Secretarios de Estado";
 choices[17][1] = "los Subsecretarios y Secretarios generales";
 choices[17][2] = "los embajadores y representantes permanentes ante Organizaciones internacionales";
 choices[17][3] = "los Directores generales";
 answers[17] = choices[17][2];
 units[17] = "4, 7, 8, 9";
 comments[17] = "Id Pregunta: 793. Ley 40/2015";
 preguntaids[17] = 793


//  Id pregunta: 251 Año de creación de pregunta: 2016
 questions[18]= "19)  La Justicia, en Espa&ntilde;a, emana del/de la:";
 choices[18]= new Array();
 choices[18][0] = "Rey.";
 choices[18][1] = "&Oacute;rgano jurisdiccional que act&uacute;a en cada caso.";
 choices[18][2] = "Constituci&oacute;n.";
 choices[18][3] = "Pueblo.";
 answers[18] = choices[18][2];
 units[18] = "1";
 comments[18] = "Id Pregunta: 251. CONSTITUCION1978";
 preguntaids[18] = 251


//  Id pregunta: 148 Año de creación de pregunta: 2016
 questions[19]= "20)  La publicaci&oacute;n del &laquo;Bolet&iacute;n Oficial del Estado&raquo; en la sede electr&oacute;nica del Organismo competente:";
 choices[19]= new Array();
 choices[19][0] = "Tiene car&aacute;cter supletorio respecto a la versi&oacute;n en formato papel";
 choices[19][1] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, aunque no se podr&aacute; derivar de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[19][2] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[19][3] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se habr&aacute;n de determinar necesariamente por Ley, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 answers[19] = choices[19][2];
 units[19] = "7";
 comments[19] = "Id Pregunta: 148. Ley 39/2015, Art&iacute;culo 131";
 preguntaids[19] = 148


//  Id pregunta: 204 Año de creación de pregunta: 2016
 questions[20]= "21)  Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada reciben el t&iacute;tulo de:";
 choices[20]= new Array();
 choices[20][0] = "Decretos Legislativos.";
 choices[20][1] = "Decretos-leyes.";
 choices[20][2] = "Leyes de bases.";
 choices[20][3] = "Reales Decretos del Consejo de Ministros.";
 answers[20] = choices[20][0];
 units[20] = "1";
 comments[20] = "Id Pregunta: 204. CONSTITUCION1978";
 preguntaids[20] = 204


//  Id pregunta: 502 Año de creación de pregunta: 2016
 questions[21]= "22)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el programa plurianual de la Seguridad Social se elaborar&aacute; por:";
 choices[21]= new Array();
 choices[21][0] = "El presidente de las Cortes Generales.";
 choices[21][1] = "El Presidente del Gobierno.";
 choices[21][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[21][3] = "El Ministro de Trabajo y Asuntos Sociales.";
 answers[21] = choices[21][3];
 units[21] = "10";
 comments[21] = "Id Pregunta: 502. PRESUPUESTOS GENERALES";
 preguntaids[21] = 502


//  Id pregunta: 41 Año de creación de pregunta: 2016
 questions[22]= "23)  En cuanto al an&aacute;lisis DAFO:";
 choices[22]= new Array();
 choices[22][0] = "Considera detallada y exclusivamente factores internos.";
 choices[22][1] = "Es una t&eacute;cnica aplicable dentro de la Planificaci&oacute;n de Sistemas de Informaci&oacute;n.";
 choices[22][2] = "Considera detallada y exclusivamente factores externos.";
 choices[22][3] = "Se obtiene como resultado final del proceso de Planificaci&oacute;n Estrat&eacute;gica.";
 answers[22] = choices[22][1];
 units[22] = "83";
 comments[22] = "Id Pregunta: 41. AGE A1 2015";
 preguntaids[22] = 41


//  Id pregunta: 564 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Cu&aacute;l de los siguientes per&iacute;odos puede considerarse de crecimiento econ&oacute;mico en Espa&ntilde;a?";
 choices[23]= new Array();
 choices[23][0] = "Entre 1973 y 1978";
 choices[23][1] = "Entre 1992 y 1996";
 choices[23][2] = "Entre 1978 y 1985";
 choices[23][3] = "Entre 2008 y 2013";
 answers[23] = choices[23][2];
 units[23] = "12";
 comments[23] = "Id Pregunta: 564. Modelo econ&oacute;mico";
 preguntaids[23] = 564


//  Id pregunta: 458 Año de creación de pregunta: 2016
 questions[24]= "25)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los escenarios presupuestarios plurianuales contendr&aacute;n la distribuci&oacute;n org&aacute;nica de los recursos disponibles y se desarrollar&aacute;n en programas plurianuales, referidos a:";
 choices[24]= new Array();
 choices[24][0] = "a) Los cuatro ejercicios siguientes.";
 choices[24][1] = "b) El ejercicio siguiente.";
 choices[24][2] = "c) Los dos ejercicios siguientes.";
 choices[24][3] = "d) Los tres ejercicios siguientes.";
 answers[24] = choices[24][3];
 units[24] = "10";
 comments[24] = "Id Pregunta: 458. PRESUPUESTOS GENERALES";
 preguntaids[24] = 458


//  Id pregunta: 61 Año de creación de pregunta: 2016
 questions[25]= "26)  Indique a partir de qu&eacute; versi&oacute;n del sistema operativo Android se introdujo la posibilidad de que el usuario pudiera gestionar la concesi&oacute;n de permisos para cada aplicaci&oacute;n:";
 choices[25]= new Array();
 choices[25][0] = "Lollipop";
 choices[25][1] = "Jelly Bean";
 choices[25][2] = "Marshmallow";
 choices[25][3] = "KitKat";
 answers[25] = choices[25][2];
 units[25] = "59";
 comments[25] = "Id Pregunta: 61. AGE A1 2015";
 preguntaids[25] = 61


//  Id pregunta: 73 Año de creación de pregunta: 2016
 questions[26]= "27)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Digitalizaci&oacute;n de Documentos, &iquest;cu&aacute;l de los siguientes metadatos no es considerado como metadato complementario?";
 choices[26]= new Array();
 choices[26][0] = "Resoluci&oacute;n, que indica el valor de resoluci&oacute;n en p&iacute;xeles por pulgada empleada en la digitalizaci&oacute;n.";
 choices[26][1] = "Origen, que indica si el contenido del documento fue creado por un ciudadano o por una administraci&oacute;n.";
 choices[26][2] = "Tama&ntilde;o, que indica el valor y unidades del tama&ntilde;o l&oacute;gico del documento digitalizado.";
 choices[26][3] = "Idioma, que indica el idioma del contenido del documento digitalizado.";
 answers[26] = choices[26][1];
 units[26] = "44";
 comments[26] = "Id Pregunta: 73. AGE A1 2015";
 preguntaids[26] = 73


//  Id pregunta: 17 Año de creación de pregunta: 2016
 questions[27]= "28)  De acuerdo con el Reglamento por el que se desarrolla parcialmente la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, aprobado por Real Decreto 1671/2009, de 6 de noviembre, se&ntilde;ale la respuesta correcta:";
 choices[27]= new Array();
 choices[27][0] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de emisi&oacute;n.";
 choices[27][1] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 12 meses desde la fecha de emisi&oacute;n.";
 choices[27][2] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de notificaci&oacute;n.";
 choices[27][3] = "Los documentos electr&oacute;nicos deben conservarse por el per&iacute;odo m&iacute;nimo que determine cada &oacute;rgano administrativo de acuerdo con el procedimiento administrativo de que se trate.";
 answers[27] = choices[27][3];
 units[27] = "44";
 comments[27] = "Id Pregunta: 17. AGE A1 2015";
 preguntaids[27] = 17


//  Id pregunta: 843 Año de creación de pregunta: 2016
 questions[28]= "29)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[28]= new Array();
 choices[28][0] = "De cada sesi&oacute;n que celebre el &oacute;rgano colegiado se levantar&aacute; acta por el Secretario, que especificar&aacute; necesariamente los asistentes, el orden del d&iacute;a de la reuni&oacute;n, las circunstancias del lugar y tiempo en que se ha celebrado, los puntos principales de las deliberaciones, as&iacute; como el contenido de los acuerdos adoptados.";
 choices[28][1] = "Podr&aacute;n grabarse las sesiones que celebre el &oacute;rgano colegiado. El fichero resultante de la grabaci&oacute;n, junto con la certificaci&oacute;n expedida por el Secretario de la autenticidad e integridad del mismo, y cuantos documentos en soporte electr&oacute;nico se utilizasen como documentos de la sesi&oacute;n, podr&aacute;n acompa&ntilde;ar al acta de las sesiones, sin necesidad de hacer constar en ella los puntos principales de las deliberaciones.";
 choices[28][2] = "El acta de cada sesi&oacute;n podr&aacute; aprobarse en la misma reuni&oacute;n o en una reuni&oacute;n posterior. El Secretario elaborar&aacute; el acta con el visto bueno del Presidente y lo remitir&aacute; a trav&eacute;s de medios electr&oacute;nicos, a los miembros del &oacute;rgano colegiado, quienes podr&aacute;n manifestar por los mismos medios su conformidad o reparos al texto, a efectos de su aprobaci&oacute;n, consider&aacute;ndose, en caso afirmativo, aprobada en la misma reuni&oacute;n.";
 choices[28][3] = "Cuando se hubiese optado por la grabaci&oacute;n de las sesiones celebradas o por la utilizaci&oacute;n de documentos en soporte electr&oacute;nico, deber&aacute;n conservarse de forma que se garantice la integridad y autenticidad de los ficheros electr&oacute;nicos correspondientes y el acceso a los mismos por parte de los miembros del &oacute;rgano colegiado.";
 answers[28] = choices[28][2];
 units[28] = "4, 7, 8, 9";
 comments[28] = "Id Pregunta: 843. Ley 40/2015";
 preguntaids[28] = 843


//  Id pregunta: 48 Año de creación de pregunta: 2016
 questions[29]= "30)  El Reglamento (UE) 910/2014 del Parlamento Europeo y del Consejo relativo a la identificaci&oacute;n electr&oacute;nica y los servicios de confianza para las transacciones electr&oacute;nicas en el mercado interior establece:";
 choices[29]= new Array();
 choices[29][0] = "La norma reguladora de los certificados de sede electr&oacute;nica en la Uni&oacute;n Europea.";
 choices[29][1] = "Cinco a&ntilde;os como el periodo m&aacute;ximo de vigencia de los certificados electr&oacute;nicos.";
 choices[29][2] = "La plena prohibici&oacute;n del uso de seud&oacute;nimos en el uso de las transacciones electr&oacute;nicas.";
 choices[29][3] = "La regulaci&oacute;n del certificado de sello electr&oacute;nico y su uso en los servicios p&uacute;blicos.";
 answers[29] = choices[29][3];
 units[29] = "77";
 comments[29] = "Id Pregunta: 48. AGE A1 2015";
 preguntaids[29] = 48


//  Id pregunta: 33 Año de creación de pregunta: 2016
 questions[30]= "31)  Respecto al desarrollo empleando tecnolog&iacute;a Microsoft, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[30]= new Array();
 choices[30][0] = "WINAPI (Windows API) permite un acceso a alto nivel del sistema, directamente usable en cualquier lenguaje y entorno de programaci&oacute;n.";
 choices[30][1] = "El framework .NET se compone de una biblioteca de clases denominada FCL (Framework Class Library) y del entorno com&uacute;n de ejecuci&oacute;n CLR (Common Language Runtime).";
 choices[30][2] = "En .NET el resultado de la compilaci&oacute;n de las aplicaciones es un m&oacute;dulo ensamblado en formato de fichero PE32 o PE32+ (Windows portable executable) directamente ejecutable sobre el hardware.";
 choices[30][3] = "Los compiladores para CLR producen c&oacute;digo FL (Final Language) denominado c&oacute;digo administrado.";
 answers[30] = choices[30][1];
 units[30] = "63";
 comments[30] = "Id Pregunta: 33. AGE A1 2015";
 preguntaids[30] = 33


//  Id pregunta: 848 Año de creación de pregunta: 2016
 questions[31]= "32)  Se&ntilde;ale la respuesta correcta:";
 choices[31]= new Array();
 choices[31][0] = "La sede electr&oacute;nica es aquella direcci&oacute;n electr&oacute;nica, disponible para los ciudadanos a trav&eacute;s de redes de telecomunicaciones, cuya titularidad corresponde a una Administraci&oacute;n P&uacute;blica, o bien a una o varios organismos p&uacute;blicos o entidades de Derecho P&uacute;blico en el ejercicio de sus competencias.";
 choices[31][1] = "Se entiende por portal de internet el punto de acceso electr&oacute;nico cuya titularidad corresponda a una Administraci&oacute;n P&uacute;blica, organismo p&uacute;blico o entidad de Derecho P&uacute;blico que permite el acceso a trav&eacute;s de internet a la informaci&oacute;n publicada y, en su caso, a la sede electr&oacute;nica correspondiente.";
 choices[31][2] = "A y B son correctas.";
 choices[31][3] = "A y B son falsas.";
 answers[31] = choices[31][2];
 units[31] = "4, 7, 8, 9";
 comments[31] = "Id Pregunta: 848. Ley 40/2015";
 preguntaids[31] = 848


//  Id pregunta: 356 Año de creación de pregunta: 2016
 questions[32]= "33)  Se&ntilde;ale la respuesta correcta respecto a las directivas comunitarias:";
 choices[32]= new Array();
 choices[32][0] = "No se aplican directamente en los Estados.";
 choices[32][1] = "No son vinculantes.";
 choices[32][2] = "Habitualmente se dictan sobre materias que son competencias exclusivas de la Uni&oacute;n Europea.";
 choices[32][3] = "Tienen alcance general.";
 answers[32] = choices[32][0];
 units[32] = "5";
 comments[32] = "Id Pregunta: 356. UNION EUROPEA";
 preguntaids[32] = 356


//  Id pregunta: 407 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Qu&eacute; art&iacute;culo de la CE, consagra la obligaci&oacute;n de los poderes p&uacute;blicos para promover las condiciones para la igualdad del individuo:";
 choices[33]= new Array();
 choices[33][0] = "Art&iacute;culo 14 CE.";
 choices[33][1] = "Art&iacute;culo 9.2 CE.";
 choices[33][2] = "Art&iacute;culo 9.1 CE.";
 choices[33][3] = "Art&iacute;culo 13 CE.";
 answers[33] = choices[33][2];
 units[33] = "14";
 comments[33] = "Id Pregunta: 407. POLITICAS DE IGUALDAD";
 preguntaids[33] = 407


//  Id pregunta: 657 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Qu&eacute; aplicativo no se encuentra dentro del ecosistemas de Haddoop?";
 choices[34]= new Array();
 choices[34][0] = "Yarn";
 choices[34][1] = "Flume";
 choices[34][2] = "Hive";
 choices[34][3] = "BizAgi";
 answers[34] = choices[34][3];
 units[34] = "73";
 comments[34] = "Id Pregunta: 657. ";
 preguntaids[34] = 657


//  Id pregunta: 193 Año de creación de pregunta: 2016
 questions[35]= "36)  El defensor del pueblo ser&aacute; elegido por las Cortes Generales para un per&iacute;odo de:";
 choices[35]= new Array();
 choices[35][0] = "3 a&ntilde;os.";
 choices[35][1] = "5 a&ntilde;os.";
 choices[35][2] = "4 a&ntilde;os.";
 choices[35][3] = "6 a&ntilde;os.";
 answers[35] = choices[35][1];
 units[35] = "1";
 comments[35] = "Id Pregunta: 193. CONSTITUCION1978";
 preguntaids[35] = 193


//  Id pregunta: 57 Año de creación de pregunta: 2016
 questions[36]= "37)  Con respecto a ITIL se&ntilde;ale qu&eacute; afirmaci&oacute;n es cierta:";
 choices[36]= new Array();
 choices[36][0] = "Constituye una metodolog&iacute;a exhaustiva de pasos a seguir en el dise&ntilde;o de servicios TI.";
 choices[36][1] = "Da instrucciones de trabajo concretas, asignado tareas a personas.";
 choices[36][2] = "Los organismos tecnol&oacute;gicamente m&aacute;s punteros de la Administraci&oacute;n General del Estado se encuentran certificados en ITIL.";
 choices[36][3] = "Constituye un conjunto de mejores pr&aacute;cticas para la gesti&oacute;n de servicios TI.";
 answers[36] = choices[36][3];
 units[36] = "101";
 comments[36] = "Id Pregunta: 57. AGE A1 2015";
 preguntaids[36] = 57


//  Id pregunta: 50 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas del DNI electr&oacute;nico es exclusiva del DNIe 3.0?";
 choices[37]= new Array();
 choices[37][0] = "Cumple la norma ISO 7816 para tarjetas inteligentes.";
 choices[37][1] = "Emplea la tecnolog&iacute;a inal&aacute;mbrica NFC.";
 choices[37][2] = "Contiene certificados de componente, autenticaci&oacute;n y firma.";
 choices[37][3] = "Sus certificados cumplen la norma X509 v3.";
 answers[37] = choices[37][1];
 units[37] = "78";
 comments[37] = "Id Pregunta: 50. AGE A1 2015";
 preguntaids[37] = 50


//  Id pregunta: 191 Año de creación de pregunta: 2016
 questions[38]= "39)  El Rey podr&aacute; presidir las sesiones del Consejo de Ministros:";
 choices[38]= new Array();
 choices[38][0] = "Cuando el Rey, por razones de inter&eacute;s general, as&iacute; lo decida.";
 choices[38][1] = "A petici&oacute;n del Pleno del Consejo de Ministros.";
 choices[38][2] = "A petici&oacute;n del Presidente del Gobierno.";
 choices[38][3] = "No est&aacute; prevista constitucionalmente la presidencia del Consejo de Ministros por parte del Rey.";
 answers[38] = choices[38][2];
 units[38] = "1";
 comments[38] = "Id Pregunta: 191. CONSTITUCION1978";
 preguntaids[38] = 191


//  Id pregunta: 207 Año de creación de pregunta: 2016
 questions[39]= "40)  La representaci&oacute;n ordinaria del Estado en las Comunidades Aut&oacute;nomas corresponde a:";
 choices[39]= new Array();
 choices[39][0] = "El Delegado del Gobierno.";
 choices[39][1] = "El Subdelegado del Gobierno.";
 choices[39][2] = "El Presidente de la Comunidad Aut&oacute;noma.";
 choices[39][3] = "El Gobernador Civil.";
 answers[39] = choices[39][2];
 units[39] = "1";
 comments[39] = "Id Pregunta: 207. CONSTITUCION1978";
 preguntaids[39] = 207


//  Id pregunta: 354 Año de creación de pregunta: 2016
 questions[40]= "41)  El Tribunal de Justicia Europeo est&aacute; compuesto por:";
 choices[40]= new Array();
 choices[40][0] = "Veinticinco Jueces y nueve Abogados Generales.";
 choices[40][1] = "Veintisiete Jueces y veintisiete Abogados Generales.";
 choices[40][2] = "Veintisiete Jueces y ocho Abogados Generales.";
 choices[40][3] = "Veinticinco Jueces y siete Abogados Generales.";
 answers[40] = choices[40][2];
 units[40] = "5";
 comments[40] = "Id Pregunta: 354. UNION EUROPEA";
 preguntaids[40] = 354


//  Id pregunta: 170 Año de creación de pregunta: 2016
 questions[41]= "42)  En el contexto del mercado &uacute;nico digital, &iquest;qu&eacute; medidas se han tomado para el impulso de la confianza en el tratamiento de los datos personales en el contexto de los servicios digitales en el a&ntilde;o 2016?";
 choices[41]= new Array();
 choices[41][0] = "Se ha establecido una colaboraci&oacute;n p&uacute;blico-privada en materia de ciberseguridad.";
 choices[41][1] = "Se han introducido medidas para impulsar las destrezas digitales de la poblaci&oacute;n, que la Comisi&oacute;n incorporar&aacute; en futuras iniciativas sobre destrezas y formaci&oacute;n.";
 choices[41][2] = "Se ha aprobado el Reglamento (UE) 2016/769 relativo a la protecci&oacute;n de las personas f&iacute;sicas en lo que respecta al tratamiento de datos personales y a la libre circulaci&oacute;n de estos datos y por el que se deroga la Directiva 95/46/CE";
 choices[41][3] = "Se han introducido medidas para garantizar la libertad de los medios de comunicaci&oacute;n y la promoci&oacute;n de la diversidad cultural";
 answers[41] = choices[41][2];
 units[41] = "19";
 comments[41] = "Id Pregunta: 170. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Mayo/Noticia-2016-05-09-Nuevo-Reglamento-LOPD.html#.WCnlfmrhDIU";
 preguntaids[41] = 170


//  Id pregunta: 817 Año de creación de pregunta: 2016
 questions[42]= "43)  Se determinar&aacute;n las islas en las que existir&aacute; un Director Insular de la Administraci&oacute;n General del Estado:";
 choices[42]= new Array();
 choices[42][0] = "por Real Decreto";
 choices[42][1] = "reglamentariamente";
 choices[42][2] = "mediante Ley";
 choices[42][3] = "ninguna es correcta";
 answers[42] = choices[42][1];
 units[42] = "4, 7, 8, 9";
 comments[42] = "Id Pregunta: 817. Ley 40/2015";
 preguntaids[42] = 817


//  Id pregunta: 190 Año de creación de pregunta: 2016
 questions[43]= "44)  La iniciativa legislativa para la reforma de la Constituci&oacute;n Espa&ntilde;ola de 1978:";
 choices[43]= new Array();
 choices[43][0] = "Le corresponde exclusivamente al congreso y al Senado.";
 choices[43][1] = "Puede ser ejercida por el Tribunal Constitucional.";
 choices[43][2] = "Puede ser instada por las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[43][3] = "Le corresponde exclusivamente al Gobierno.";
 answers[43] = choices[43][2];
 units[43] = "1";
 comments[43] = "Id Pregunta: 190. CONSTITUCION1978";
 preguntaids[43] = 190


//  Id pregunta: 79 Año de creación de pregunta: 2016
 questions[44]= "45)  La Ley 25/2013, de 27 de diciembre, de impulso de la factura electr&oacute;nica y creaci&oacute;n del Registro Contable de Facturas en el Sector P&uacute;blico, prev&eacute; que anualmente se realice una auditor&iacute;a de sistemas para verificar que los correspondientes registros contables de facturas cumplen con las condiciones de funcionamiento previstas en la normativa aplicable. En el &aacute;mbito de la Administraci&oacute;n General del Estado dicha auditor&iacute;a se realizar&aacute; por:";
 choices[44]= new Array();
 choices[44][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[44][1] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado";
 choices[44][2] = "Las Inspecciones Generales de los Servicios";
 choices[44][3] = "La Agencia Estatal de la Administraci&oacute;n Tributaria";
 answers[44] = choices[44][1];
 units[44] = "75";
 comments[44] = "Id Pregunta: 79. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";
 preguntaids[44] = 79


//  Id pregunta: 287 Año de creación de pregunta: 2016
 questions[45]= "46)  Se&ntilde;ale cu&aacute;l no es un principio del Plan de acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[45]= new Array();
 choices[45][0] = "Versi&oacute;n digital prioritaria.";
 choices[45][1] = "Principio de &laquo;solo una vez&raquo;.";
 choices[45][2] = "Inclusi&oacute;n y accesibilidad.";
 choices[45][3] = "Apertura y transparencia.";
 answers[45] = choices[45][0];
 units[45] = "5";
 comments[45] = "Id Pregunta: 287. UNION EUROPEA";
 preguntaids[45] = 287


//  Id pregunta: 509 Año de creación de pregunta: 2016
 questions[46]= "47)  De acuerdo con el art&iacute;culo 32 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, en el supuesto de que la liquidaci&oacute;n presupuestaria del Estado se sit&uacute;e en super&aacute;vit, &eacute;ste debe destinarse a:";
 choices[46]= new Array();
 choices[46][0] = "Reducir el gasto p&uacute;blico.";
 choices[46][1] = "Reducir el d&eacute;ficit presupuestario.";
 choices[46][2] = "Reducir el endeudamiento neto.";
 choices[46][3] = "Al Fondo de Contingencia.";
 answers[46] = choices[46][2];
 units[46] = "10";
 comments[46] = "Id Pregunta: 509. PRESUPUESTOS GENERALES";
 preguntaids[46] = 509


//  Id pregunta: 717 Año de creación de pregunta: 2016
 questions[47]= "48)  Respecto a SonarQube, se&ntilde;ale la FALSA:";
 choices[47]= new Array();
 choices[47][0] = "Sirve para evaluar aspectos como la complejidad ciclom&aacute;tica del c&oacute;digo.";
 choices[47][1] = "Anteriormente se denominaba Sonar.";
 choices[47][2] = "Permite disponer de una matriz de dependencia entre objetos.";
 choices[47][3] = "Integra herramientas de medici&oacute;n de la calidad de c&oacute;digo como CPD, findbugs, PMD, checkstyle.";
 answers[47] = choices[47][2];
 units[47] = "92";
 comments[47] = "Id Pregunta: 717. INTEGRACION CONTINUA";
 preguntaids[47] = 717


//  Id pregunta: 281 Año de creación de pregunta: 2016
 questions[48]= "49)  Se&ntilde;ale la respuesta falsa:";
 choices[48]= new Array();
 choices[48][0] = "El Semestre Europeo es un ciclo de coordinaci&oacute;n de las pol&iacute;ticas econ&oacute;micas y presupuestarias dentro de la UE.";
 choices[48][1] = "Se centra en los primeros seis meses de cada a&ntilde;o, de ah&iacute; que se denomine &quot;Semestre&quot;.";
 choices[48][2] = "Durante el Semestre Europeo los Estados miembros ajustan sus pol&iacute;ticas presupuestarias y econ&oacute;micas a los objetivos y normas acordados a escala de la UE.";
 choices[48][3] = "Incluye reformas estructurales, dedicadas a promover el crecimiento y el empleo de conformidad con la Estrategia de Lisboa.";
 answers[48] = choices[48][3];
 units[48] = "5";
 comments[48] = "Id Pregunta: 281. UNION EUROPEA";
 preguntaids[48] = 281


//  Id pregunta: 709 Año de creación de pregunta: 2016
 questions[49]= "50)  En base a la Ley 19/2013 de Transparencia, Acceso a la Informaci&oacute;n P&uacute;blica y Buen Gobierno se&ntilde;ale la afirmaci&oacute;n verdadera:";
 choices[49]= new Array();
 choices[49][0] = "El derecho de acceso a la informaci&oacute;n p&uacute;blica supone, entre otros, que el sujeto obligado a ello publique de forma peri&oacute;dica y actualizada la informaci&oacute;n cuyo conocimiento sea relevante para garantizar la transparencia de su actividad.";
 choices[49][1] = "Las entidades privadas no est&aacute;n sujetas a obligaciones de transparencia seg&uacute;n la Ley 19/2013.";
 choices[49][2] = "Se admitir&aacute;n a tr&aacute;mite, sin excepci&oacute;n, todas las solicitudes de acceso a la informaci&oacute;n por parte de los ciudadanos.";
 choices[49][3] = "El cumplimiento por la Administraci&oacute;n General del Estado de las obligaciones de publicidad activa ser&aacute; objeto de control por parte del CTBG.";
 answers[49] = choices[49][3];
 units[49] = "22";
 comments[49] = "Id Pregunta: 709. Ley de transparencia";
 preguntaids[49] = 709


//  Id pregunta: 648 Año de creación de pregunta: 2016
 questions[50]= "51)  En Itil v3 se diferencia entre la Gesti&oacute;n de la Cartera de Servicios y la Gesti&oacute;n del Cat&aacute;logo de Servicios ya que:";
 choices[50]= new Array();
 choices[50][0] = "La Cartera de Servicios contiene informaci&oacute;n sobre cada servicio y su estado.";
 choices[50][1] = "La Cartera de Servicios es un subconjunto del Cat&aacute;logo de Servicios.";
 choices[50][2] = "La Cartera de Servicios divide los servicios en componentes y contiene pol&iacute;ticas, directrices y responsabilidades , as&iacute; como precios, acuerdos de nivel de servicio y condiciones de entrega.";
 choices[50][3] = "Todas las respuestas son correctas.";
 answers[50] = choices[50][0];
 units[50] = "101";
 comments[50] = "Id Pregunta: 648. Junta de Extremadura A1 2015";
 preguntaids[50] = 648


//  Id pregunta: 309 Año de creación de pregunta: 2016
 questions[51]= "52)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a los Cuestores:";
 choices[51]= new Array();
 choices[51][0] = "Son miembros de la Mesa del Parlamento Europeo con voz pero sin voto.";
 choices[51][1] = "No son miembros de la Mesa del Parlamento Europeo.";
 choices[51][2] = "Son miembros de la Mesa del Parlamento Europeo con voz y voto.";
 choices[51][3] = "Los Cuestores forman parte de la Mesa del Parlamento Europeo en un n&uacute;mero igual a tres.";
 answers[51] = choices[51][0];
 units[51] = "5";
 comments[51] = "Id Pregunta: 309. UNION EUROPEA";
 preguntaids[51] = 309


//  Id pregunta: 723 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;C&uacute;al es la principal ventaja de sprints m&aacute;s cortos en Scrum?";
 choices[52]= new Array();
 choices[52][0] = "Permite al equipo reaccionar mejor ante imprevistos";
 choices[52][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[52][2] = "Es m&aacute;s f&aacute;cil cumplir los objetivos marcados al final de cada sprint";
 choices[52][3] = "Ninguna de las anteriores";
 answers[52] = choices[52][1];
 units[52] = "34, 84";
 comments[52] = "Id Pregunta: 723. Metodologias &aacute;giles";
 preguntaids[52] = 723


//  Id pregunta: 189 Año de creación de pregunta: 2016
 questions[53]= "54)  De conformidad a lo establecido en la Constituci&oacute;n Espa&ntilde;ola, las Cortes pueden delegar en el Gobierno la potestad de dictar normas con rango de Ley. Cuando se trata de que el Gobierno elabore y apruebe textos articulados esta delegaci&oacute;n tiene que otorgarse mediante:";
 choices[53]= new Array();
 choices[53][0] = "Ley Org&aacute;nica.";
 choices[53][1] = "Ley de Bases.";
 choices[53][2] = "Ley ordinaria.";
 choices[53][3] = "Mandato.";
 answers[53] = choices[53][1];
 units[53] = "1";
 comments[53] = "Id Pregunta: 189. CONSTITUCION1978";
 preguntaids[53] = 189


//  Id pregunta: 555 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes iniciativas busca la mejora del acceso de los consumidores y las empresas a los bienes y servicios digitales, como parte de la estrategia para el Mercado &Uacute;nico Digital de la UE?";
 choices[54]= new Array();
 choices[54][0] = "Una paqueter&iacute;a m&aacute;s eficiente y asequible";
 choices[54][1] = "Revisar el marco de comunicaci&oacute;n audiovisual con el fin de adecuarlo al siglo XXI";
 choices[54][2] = "Reforzar la confianza y la seguridad en los servicios digitales, en particular en relaci&oacute;n con el tratamiento de datos personales";
 choices[54][3] = "Todas lo son";
 answers[54] = choices[54][0];
 units[54] = "17";
 comments[54] = "Id Pregunta: 555. Mercado &Uacute;nico Digital";
 preguntaids[54] = 555


//  Id pregunta: 286 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Cu&aacute;l no es un pilar de la Estrategia del Mercado &Uacute;nico Digital?";
 choices[55]= new Array();
 choices[55][0] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa.";
 choices[55][1] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar.";
 choices[55][2] = "Iniciativa europea de libre flujo de datos.";
 choices[55][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital.";
 answers[55] = choices[55][2];
 units[55] = "5";
 comments[55] = "Id Pregunta: 286. UNION EUROPEA";
 preguntaids[55] = 286


//  Id pregunta: 669 Año de creación de pregunta: 2016
 questions[56]= "57)  Se&ntilde;ale la opci&oacute;n falsa respecto a la instrucci&oacute;n del procedimiento definida en la Ley 39/2015:";
 choices[56]= new Array();
 choices[56][0] = "Los interesados podr&aacute;n, en cualquier momento del procedimiento anterior al tr&aacute;mite de audiencia, aducir alegaciones y aportar documentos u otros elementos de juicio.";
 choices[56][1] = "El instructor del procedimiento s&oacute;lo podr&aacute; rechazar las pruebas propuestas por los interesados cuando sean manifiestamente improcedentes o innecesarias, mediante resoluci&oacute;n motivada.";
 choices[56][2] = "Salvo disposici&oacute;n expresa en contrario, los informes ser&aacute;n preceptivos y vinculantes.";
 choices[56][3] = "Se podr&aacute; prescindir del tr&aacute;mite de audiencia cuando no figuren en el procedimiento ni sean tenidos en cuenta en la resoluci&oacute;n otros hechos ni otras alegaciones y pruebas que las aducidas por el interesado.";
 answers[56] = choices[56][2];
 units[56] = "7";
 comments[56] = "Id Pregunta: 669. Cap&iacute;tulo IV, T&iacute;tulo IV de la Ley 39/2015";
 preguntaids[56] = 669


//  Id pregunta: 755 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Qui&eacute;n realiza el seguimiento peri&oacute;dico del cumplimiento de los objetivos de la Agenda Digital para Espa&ntilde;a?";
 choices[57]= new Array();
 choices[57][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital (SGAD)";
 choices[57][1] = "La Asociaci&oacute;n Espa&ntilde;ola de Normalizaci&oacute;n y Certificaci&oacute;n (AENOR)";
 choices[57][2] = "El Observatorio Nacional de Telecomunicaciones y Sociedad de la Informaci&oacute;n (ONTSI)";
 choices[57][3] = "El Observatorio de Administraci&oacute;n Electr&oacute;nica (OBSAE)";
 answers[57] = choices[57][2];
 units[57] = "19";
 comments[57] = "Id Pregunta: 755. Agenda Digital para Espa&ntilde;a";
 preguntaids[57] = 755


//  Id pregunta: 49 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Qu&eacute; facilita un ORM?";
 choices[58]= new Array();
 choices[58][0] = "Conversi&oacute;n de objetos a tablas relacionales";
 choices[58][1] = "Conversi&oacute;n de objetos a documentos";
 choices[58][2] = "Conversi&oacute;n de tipos de driver JDBC";
 choices[58][3] = "Conversi&oacute;n de ADO.NET a OLE DB";
 answers[58] = choices[58][0];
 units[58] = "62";
 comments[58] = "Id Pregunta: 49. AGE A1 2015";
 preguntaids[58] = 49


//  Id pregunta: 846 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Qu&eacute; t&eacute;cnica de cooperaci&oacute;n se regula por primera vez con la Ley 40/2015?";
 choices[59]= new Array();
 choices[59][0] = "Conferencia de Presidentes.";
 choices[59][1] = "Convenios de colaboraci&oacute;n.";
 choices[59][2] = "Comisiones Bilaterales de Cooperaci&oacute;n.";
 choices[59][3] = "Conferencias Sectoriales.";
 answers[59] = choices[59][0];
 units[59] = "4, 7, 8, 9";
 comments[59] = "Id Pregunta: 846. Ley 40/2015";
 preguntaids[59] = 846


//  Id pregunta: 430 Año de creación de pregunta: 2016
 questions[60]= "61)  En el acceso a bienes y servicios, ning&uacute;n contratante podr&aacute; indagar sobre la situaci&oacute;n de embarazo de una mujer demandante del mismo, salvo por razones de:";
 choices[60]= new Array();
 choices[60][0] = "Incompatibilidad del puesto con una baja maternal.";
 choices[60][1] = "Protecci&oacute;n de su salud.";
 choices[60][2] = "Ninguna es correcta.";
 choices[60][3] = "A y B son correctas.";
 answers[60] = choices[60][1];
 units[60] = "14";
 comments[60] = "Id Pregunta: 430. POLITICAS DE IGUALDAD";
 preguntaids[60] = 430


//  Id pregunta: 488 Año de creación de pregunta: 2016
 questions[61]= "62)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la prescripci&oacute;n de los derechos de la Hacienda P&uacute;blica estatal, se interrumpir&aacute; conforme a lo establecido en:";
 choices[61]= new Array();
 choices[61][0] = "La Ley General Tributaria.";
 choices[61][1] = "La Ley Presupuestaria.";
 choices[61][2] = "La Ley de Hacienda P&uacute;blica.";
 choices[61][3] = "Ninguna de las respuestas es correcta.";
 answers[61] = choices[61][0];
 units[61] = "10";
 comments[61] = "Id Pregunta: 488. PRESUPUESTOS GENERALES";
 preguntaids[61] = 488


//  Id pregunta: 130 Año de creación de pregunta: 2016
 questions[62]= "63)  Dentro del Pacto Fiscal Europeo de 2012, cu&aacute;l de estos no corresponde a uno de los principales puntos contenidos:";
 choices[62]= new Array();
 choices[62][0] = "La obligaci&oacute;n de mantener el d&eacute;ficit p&uacute;blico por debajo del 3% del PIB.";
 choices[62][1] = "La obligaci&oacute;n de los pa&iacute;ses con una deuda p&uacute;blica superior al 60% del PIB a caer dentro de este l&iacute;mite en 20 a&ntilde;os, a una tasa igual a la vig&eacute;sima parte de la franquicia de cada anualidad.";
 choices[62][2] = "El compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional.";
 choices[62][3] = "El compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,5 % de la PIB y, en aquellos pa&iacute;ses en los que la deuda es inferior al 50 % del PIB, 2%.";
 answers[62] = choices[62][3];
 units[62] = "12";
 comments[62] = "Id Pregunta: 130. Leyes modelo econ&oacute;mico";
 preguntaids[62] = 130


//  Id pregunta: 121 Año de creación de pregunta: 2016
 questions[63]= "64)  Se&ntilde;ale la respuesta incorrecta respecto al Consejo de Transparencia y Buen Gobierno";
 choices[63]= new Array();
 choices[63][0] = "Las resoluciones del Consejo se publican en el Portal de la Transparencia";
 choices[63][1] = "Las resoluciones del Consejo se publican en la p&aacute;gina web institucional del organismo";
 choices[63][2] = "La memoria anual del Consejo ser&aacute; publicada integramente en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 choices[63][3] = "Un resumen de la memoria anual del Consejo ser&aacute; publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 answers[63] = choices[63][2];
 units[63] = "22";
 comments[63] = "Id Pregunta: 121. ";
 preguntaids[63] = 121


//  Id pregunta: 537 Año de creación de pregunta: 2016
 questions[64]= "65)  Dispondr&aacute;/n de un registro electr&oacute;nico general de apoderamientos:";
 choices[64]= new Array();
 choices[64][0] = "la Administraci&oacute;n General del Estado";
 choices[64][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[64][2] = "las Entidades Locales";
 choices[64][3] = "todas son correctas";
 answers[64] = choices[64][3];
 units[64] = "7";
 comments[64] = "Id Pregunta: 537. LEY 39/2015";
 preguntaids[64] = 537


//  Id pregunta: 864 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Qu&eacute; son las t&eacute;cnicas SEO? ";
 choices[65]= new Array();
 choices[65][0] = "SEO es el acr&oacute;nimo de search engine optimization.";
 choices[65][1] = "Las t&eacute;cnicas SEO Onsite son en s&iacute; las que llevaremos a cabo dentro de nuestro sitio, tales como optimizaciones de c&oacute;digo, optimizaci&oacute;n de procesos del servidor, llamadas a la base de datos y sobre todo optimizaci&oacute;n de contenido. ";
 choices[65][2] = "Las t&eacute;cnicas de SEO Offsite se refieren a todos los enlaces que no est&aacute;n en nuestro sitio web. Se trata del n&uacute;mero de veces que est&aacute; enlazado el sitio web, desde d&oacute;nde y con qu&eacute; t&eacute;rminos.";
 choices[65][3] = "Todas las anteriores son verdaderas.";
 answers[65] = choices[65][3];
 units[65] = "125";
 comments[65] = "Id Pregunta: 864. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[65] = 864


//  Id pregunta: 421 Año de creación de pregunta: 2016
 questions[66]= "67)  Las empresas deber&aacute;n promover condiciones de trabajo, arbitrar procedimientos espec&iacute;ficos y dar cauces a las denuncias o reclamaciones, para evitar:";
 choices[66]= new Array();
 choices[66][0] = "El acoso sexual.";
 choices[66][1] = "El acoso por raz&oacute;n del sexo.";
 choices[66][2] = "Ambas son correctas.";
 choices[66][3] = "A y B son incorrectas.";
 answers[66] = choices[66][2];
 units[66] = "14";
 comments[66] = "Id Pregunta: 421. POLITICAS DE IGUALDAD";
 preguntaids[66] = 421


//  Id pregunta: 729 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;C&uacute;al es el nombre de la reuni&oacute;n de SCRUM, donde se revisan los product backlog &iacute;tems?:";
 choices[67]= new Array();
 choices[67][0] = "Backlog refinement";
 choices[67][1] = "Backlog grooming";
 choices[67][2] = "a y b son correctas";
 choices[67][3] = "Ninguna de las anteriores";
 answers[67] = choices[67][2];
 units[67] = "34, 84";
 comments[67] = "Id Pregunta: 729. Metodologias &aacute;giles";
 preguntaids[67] = 729


//  Id pregunta: 192 Año de creación de pregunta: 2016
 questions[68]= "69)  Seg&uacute;n la Constituci&oacute;n, las poblaciones de Ceuta y Melilla estar&aacute;n representadas por:";
 choices[68]= new Array();
 choices[68][0] = "Un diputado y un senador, cada una de ellas";
 choices[68][1] = "Dos diputados y un senador, cada una de ellas.";
 choices[68][2] = "Un diputado y dos senadores, cada una de ellas";
 choices[68][3] = "dos diputados y dos senadores, cada una de ellas.";
 answers[68] = choices[68][2];
 units[68] = "1";
 comments[68] = "Id Pregunta: 192. CONSTITUCION1978";
 preguntaids[68] = 192


//  Id pregunta: 311 Año de creación de pregunta: 2016
 questions[69]= "70)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[69]= new Array();
 choices[69][0] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los tres quintos del n&uacute;mero de Estados miembros.";
 choices[69][1] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a las tres cuartas partes del n&uacute;mero de Estados miembros.";
 choices[69][2] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los dos tercios del n&uacute;mero de Estados miembros.";
 choices[69][3] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a un nacional por cada Estado miembro.";
 answers[69] = choices[69][2];
 units[69] = "5";
 comments[69] = "Id Pregunta: 311. UNION EUROPEA";
 preguntaids[69] = 311


//  Id pregunta: 58 Año de creación de pregunta: 2016
 questions[70]= "71)  Se&ntilde;ale cu&aacute;l de los siguientes apartados NO ha sido declarado como servicio compartido en la Administraci&oacute;n General del Estado:";
 choices[70]= new Array();
 choices[70][0] = "Servicio com&uacute;n de gesti&oacute;n econ&oacute;mico-presupuestaria";
 choices[70][1] = "Servicio com&uacute;n de georreferenciaci&oacute;n";
 choices[70][2] = "Servicio de seguridad gestionada";
 choices[70][3] = "Servicio de gesti&oacute;n de notificaciones";
 answers[70] = choices[70][1];
 units[70] = "26";
 comments[70] = "Id Pregunta: 58. AGE A1 2015";
 preguntaids[70] = 58


//  Id pregunta: 670 Año de creación de pregunta: 2016
 questions[71]= "72)  La Ley 39/2015 introduce un cap&iacute;tulo relativo a la tramitaci&oacute;n simplificada del procedimiento administrativo com&uacute;n. Respecto a este tr&aacute;mite se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[71]= new Array();
 choices[71][0] = "Se podr&aacute; acordar la tramitaci&oacute;n simplificada por falta de complejidad del procedimiento y por razones de inter&eacute;s p&uacute;blico.";
 choices[71][1] = "Los interesados podr&aacute;n, en cualquier caso, solicitar la tramitaci&oacute;n simplificada del procedimiento.";
 choices[71][2] = "En general, los procedimientos administrativos tramitados de manera simplificada deber&aacute;n ser resueltos en treinta d&iacute;as.";
 choices[71][3] = "Constar&aacute;n &uacute;nicamente de los siguientes tr&aacute;mites: inicio, subsanaci&oacute;n (en su caso), alegaciones y tr&aacute;mite de audiencia.";
 answers[71] = choices[71][3];
 units[71] = "7";
 comments[71] = "Id Pregunta: 670. Cap&iacute;tulo VI, T&iacute;tulo IV de la Ley 39/2015";
 preguntaids[71] = 670


//  Id pregunta: 243 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;En qu&eacute; Art&iacute;culo de la Constituci&oacute;n de 1978 se hace referencia a la regulaci&oacute;n de la instituci&oacute;n del Defensor del Pueblo?";
 choices[72]= new Array();
 choices[72][0] = "Art&iacute;culo 70.";
 choices[72][1] = "Art&iacute;culo 54.";
 choices[72][2] = "Articulo 62.";
 choices[72][3] = "Articulo 55. 5.";
 answers[72] = choices[72][2];
 units[72] = "1";
 comments[72] = "Id Pregunta: 243. CONSTITUCION1978";
 preguntaids[72] = 243


//  Id pregunta: 710 Año de creación de pregunta: 2016
 questions[73]= "74)  Indique la afirmaci&oacute;n falsa:";
 choices[73]= new Array();
 choices[73][0] = "En la publicidad activa la Administraci&oacute;n pone los datos a disposici&oacute;n de la ciudadan&iacute;a, en portales y p&aacute;ginas web, sin esperar a que los ciudadanos los demanden, proactivamente.";
 choices[73][1] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica los ciudadanos acceden a la informaci&oacute;n p&uacute;blica puesta a disposici&oacute;n por la Administraci&oacute;n en portales y p&aacute;ginas web.";
 choices[73][2] = "La publicidad activa y el derecho de acceso fomentan la transparencia en la actividad p&uacute;blica.";
 choices[73][3] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica la Administraci&oacute;n responde a las demandas de informaci&oacute;n por parte de los ciudadanos.";
 answers[73] = choices[73][1];
 units[73] = "22";
 comments[73] = "Id Pregunta: 710. Ley de transparencia";
 preguntaids[73] = 710


//  Id pregunta: 167 Año de creación de pregunta: 2016
 questions[74]= "75)  Una de las preocupaciones de la Agenda Digital Europea es la &ldquo;exclusi&oacute;n digital&rdquo;. Para combatirla, se incluyen medidas como...";
 choices[74]= new Array();
 choices[74][0] = "incrementar la eficiencia energ&eacute;tica y reducir la energ&iacute;a que se usa en los hogares";
 choices[74][1] = "incrementar el ratio de participaci&oacute;n de personas con discapacidad en actividades p&uacute;blicas, sociales y econ&oacute;micas a trav&eacute;s de proyectos de inclusi&oacute;n.";
 choices[74][2] = "implementar un sistema de firma electr&oacute;nica seguro que funcione en cualquiera de los Estados Miembros";
 choices[74][3] = "apoyar las pol&iacute;ticas del sector audiovisual en pos de las personas con discapacidad";
 answers[74] = choices[74][1];
 units[74] = "19";
 comments[74] = "Id Pregunta: 167. https://ec.europa.eu/digital-single-market/en/digital-inclusion-better-eu-society";
 preguntaids[74] = 167


