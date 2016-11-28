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

//  Id pregunta: 268 Año de creación de pregunta: 2016
 questions[0]= "1)  Las Disposiciones Adicionales en la Constituci&oacute;n Espa&ntilde;ola son:";
 choices[0]= new Array();
 choices[0][0] = "Cuatro.";
 choices[0][1] = "Una.";
 choices[0][2] = "Cinco.";
 choices[0][3] = "Nueve.";
 answers[0] = choices[0][2];
 units[0] = "1";
 comments[0] = "Id Pregunta: 268. CONSTITUCION1978";


//  Id pregunta: 199 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;Cu&aacute;l es la composici&oacute;n del Pleno del Tribunal de Cuentas?";
 choices[1]= new Array();
 choices[1][0] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, uno de los cuales ser&aacute; el Presidente y el Fiscal.";
 choices[1][1] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas, m&aacute;s el Presidente.";
 choices[1][2] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas.";
 choices[1][3] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, m&aacute;s el Presidente.";
 answers[1] = choices[1][0];
 units[1] = "1";
 comments[1] = "Id Pregunta: 199. CONSTITUCION1978";


//  Id pregunta: 440 Año de creación de pregunta: 2016
 questions[2]= "3)  Respecto al Sistema de Informaci&oacute;n Administrativa, se&ntilde;ale la respuesta falsa:";
 choices[2]= new Array();
 choices[2][0] = "Contiene la relaci&oacute;n de procedimientos y servicios de la AGE, y de todas las administraciones participantes.";
 choices[2][1] = "Cumple para la AGE el requisito establecido en el art&iacute;culo 9 del Esquema Nacional de Interoperabilidad, que obliga a las Administraciones p&uacute;blicas a mantener actualizado un Inventario de Informaci&oacute;n Administrativa.";
 choices[2][2] = "SIA est&aacute; dise&ntilde;ado para permitir la administraci&oacute;n distribuida y la actualizaci&oacute;n corresponsable por todas las Administraciones participantes, mediante una aplicaci&oacute;n web.";
 choices[2][3] = "Los usuarios son gestionados por una red de responsables de cada Departamento.";
 answers[2] = choices[2][2];
 units[2] = "43";
 comments[2] = "Id Pregunta: 440. SERVICIOS COMUNES";


//  Id pregunta: 194 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Cu&aacute;ntos miembros componen el Tribunal Constitucional?";
 choices[3]= new Array();
 choices[3][0] = "11";
 choices[3][1] = "12";
 choices[3][2] = "14";
 choices[3][3] = "8";
 answers[3] = choices[3][1];
 units[3] = "1";
 comments[3] = "Id Pregunta: 194. CONSTITUCION1978";


//  Id pregunta: 339 Año de creación de pregunta: 2016
 questions[4]= "5)  La presidencia del Consejo se ejerce de forma rotatoria cada:";
 choices[4]= new Array();
 choices[4][0] = "4 meses seg&uacute;n un orden fijado por unanimidad del Consejo.";
 choices[4][1] = "6 meses seg&uacute;n un orden fijado por unanimidad del Consejo.";
 choices[4][2] = "4 meses seg&uacute;n un orden fijado por mayor&iacute;a cualificada del Consejo.";
 choices[4][3] = "6 meses seg&uacute;n un orden fijado por mayor&iacute;a cualificada del Consejo.";
 answers[4] = choices[4][1];
 units[4] = "5";
 comments[4] = "Id Pregunta: 339. UNION EUROPEA";


//  Id pregunta: 829 Año de creación de pregunta: 2016
 questions[5]= "6)  La recusaci&oacute;n se plantea...";
 choices[5]= new Array();
 choices[5][0] = "Antes de iniciado el procedimiento";
 choices[5][1] = "Una vez iniciado el procedimiento";
 choices[5][2] = "Cuando el instructor dicta propuesta de resoluci&oacute;n";
 choices[5][3] = "En cualquier momento del procedimiento";
 answers[5] = choices[5][0];
 units[5] = "4, 7, 8, 9";
 comments[5] = "Id Pregunta: 829. Ley 40/2015";


//  Id pregunta: 814 Año de creación de pregunta: 2016
 questions[6]= "7)  Las Delegaciones del Gobierno est&aacute;n adscritas org&aacute;nicamente a:";
 choices[6]= new Array();
 choices[6][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[6][1] = "el Consejo de Gobierno de la Comunidad Aut&oacute;noma";
 choices[6][2] = "el Ministerio del Interior";
 choices[6][3] = "la Administraci&oacute;n General del Estado";
 answers[6] = choices[6][0];
 units[6] = "4, 7, 8, 9";
 comments[6] = "Id Pregunta: 814. Ley 40/2015";


//  Id pregunta: 307 Año de creación de pregunta: 2016
 questions[7]= "8)  Las elecciones al Parlamento Europeo tienen lugar cada:";
 choices[7]= new Array();
 choices[7][0] = "Seis a&ntilde;os.";
 choices[7][1] = "Cinco a&ntilde;os.";
 choices[7][2] = "Cuatro a&ntilde;os.";
 choices[7][3] = "Ocho a&ntilde;os.";
 answers[7] = choices[7][1];
 units[7] = "5";
 comments[7] = "Id Pregunta: 307. UNION EUROPEA";


//  Id pregunta: 290 Año de creación de pregunta: 2016
 questions[8]= "9)  El Parlamento Europeo celebrar&aacute;:";
 choices[8]= new Array();
 choices[8][0] = "Cada a&ntilde;o un per&iacute;odo de sesiones.";
 choices[8][1] = "Los per&iacute;odos de sesiones se dividen de febrero a junio y de septiembre a diciembre.";
 choices[8][2] = "Cada a&ntilde;o tres per&iacute;odos de sesiones.";
 choices[8][3] = "Las sesiones del Parlamento no se dividen en per&iacute;odos de sesiones.";
 answers[8] = choices[8][0];
 units[8] = "5";
 comments[8] = "Id Pregunta: 290. UNION EUROPEA";


//  Id pregunta: 559 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Qu&eacute; ministerios han liderado la elaboraci&oacute;n de la Agenda Digital para Espa&ntilde;a?";
 choices[9]= new Array();
 choices[9][0] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica ";
 choices[9][1] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Econom&iacute;a, Industria y Competitividad";
 choices[9][2] = "El Ministerio de Econom&iacute;a, Industria y Competitividad y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[9][3] = "Ninguno de ellos, puesto que ha venido elaborada desde los organismos de la UE";
 answers[9] = choices[9][0];
 units[9] = "19";
 comments[9] = "Id Pregunta: 559. Agenda Digital";


//  Id pregunta: 269 Año de creación de pregunta: 2016
 questions[10]= "11)  El T&iacute;tulo Segundo de la Constituci&oacute;n Espa&ntilde;ola tiene:";
 choices[10]= new Array();
 choices[10][0] = "Diez art&iacute;culos.";
 choices[10][1] = "Nueve art&iacute;culos.";
 choices[10][2] = "Once art&iacute;culos.";
 choices[10][3] = "Ocho art&iacute;culos.";
 answers[10] = choices[10][0];
 units[10] = "1";
 comments[10] = "Id Pregunta: 269. CONSTITUCION1978";


//  Id pregunta: 716 Año de creación de pregunta: 2016
 questions[11]= "12)  Se&ntilde;ale la opci&oacute;n correcta";
 choices[11]= new Array();
 choices[11][0] = "Jenkins un servidor de integraci&oacute;n continua comercial.";
 choices[11][1] = "Extiende su funcionalidad a trav&eacute;s de plugins.";
 choices[11][2] = "Solamente soporta herramientas de control de versiones como CVS, Git y Clearcase.";
 choices[11][3] = "No posee un historial de cambios realizados por build o versi&oacute;n.";
 answers[11] = choices[11][1];
 units[11] = "92";
 comments[11] = "Id Pregunta: 716. INTEGRACION CONTINUA";


//  Id pregunta: 544 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Cu&aacute;l es el &oacute;rgano de la Comisi&oacute;n Europea encargado de la gobernanza TIC cuya misi&oacute;n es garantizar que la Comisi&oacute;n haga un uso eficaz de las tecnolog&iacute;as de la informaci&oacute;n y la comunicaci&oacute;n para el logro de sus objetivos organizativos y pol&iacute;ticos?";
 choices[12]= new Array();
 choices[12][0] = "La Direcci&oacute;n General de Inform&aacute;tica (DIGIT)";
 choices[12][1] = "Oficina del Organismo de Reguladores Europeos de las Comunicaciones Electr&oacute;nicas (ORECE)";
 choices[12][2] = "Agencia de Seguridad de las Redes y de la Informaci&oacute;n de la Uni&oacute;n Europea (ENISA)";
 choices[12][3] = "Instituto Europeo de Innovaci&oacute;n y Tecnolog&iacute;a (EIT)";
 answers[12] = choices[12][0];
 units[12] = "26";
 comments[12] = "Id Pregunta: 544. Gobernanza TIC";


//  Id pregunta: 826 Año de creación de pregunta: 2016
 questions[13]= "14)  Podr&aacute;n ordenarle que se abstengan de toda intervenci&oacute;n en el expediente al funcionario que se encuentre en causa de abstenci&oacute;n...";
 choices[13]= new Array();
 choices[13][0] = "Los &oacute;rganos jer&aacute;rquicamente superiores";
 choices[13][1] = "S&oacute;lo los &oacute;rganos inmediatamente superiores jer&aacute;rquicos";
 choices[13][2] = "Los interesados en el procedimiento";
 choices[13][3] = "Las alternativas b) y c) son correctas";
 answers[13] = choices[13][1];
 units[13] = "4, 7, 8, 9";
 comments[13] = "Id Pregunta: 826. Ley 40/2015";


//  Id pregunta: 578 Año de creación de pregunta: 2016
 questions[14]= "15)  Se&ntilde;ale, de entre los siguientes, cu&aacute;l es un gestor de base de datos relacional:";
 choices[14]= new Array();
 choices[14][0] = "PostgreSQL";
 choices[14][1] = "Datawarehouse";
 choices[14][2] = "Snowflake";
 choices[14][3] = "CouchDB";
 answers[14] = choices[14][0];
 units[14] = "61";
 comments[14] = "Id Pregunta: 578. Tema 61. TAI 2016.";


//  Id pregunta: 5 Año de creación de pregunta: 2016
 questions[15]= "16)  Se&ntilde;ale cu&aacute;l de los siguientes NO es uno de los principios de COBIT v5:";
 choices[15]= new Array();
 choices[15][0] = "Satisfacer las necesidades de las partes interesadas.";
 choices[15][1] = "Cubrir las necesidades del departamento de tecnolog&iacute;as de la informaci&oacute;n.";
 choices[15][2] = "Habilitar un enfoque hol&iacute;stico.";
 choices[15][3] = "Separar el gobierno de la gesti&oacute;n.";
 answers[15] = choices[15][1];
 units[15] = "101";
 comments[15] = "Id Pregunta: 5. AGE A1 2015";


//  Id pregunta: 0 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Cu&aacute;l de los siguientes NO es un objetivo del Plan de Transformaci&oacute;n Digital de la AGE?";
 choices[16]= new Array();
 choices[16][0] = "Consolidar el tejido productivo nacional apoyando el efectivo despliegue de la Sociedad de la Informaci&oacute;n.";
 choices[16][1] = "Conseguir una mayor eficiencia en los servicios TIC comunes de la Administraci&oacute;n.";
 choices[16][2] = "Implantar una gesti&oacute;n corporativa inteligente de la informaci&oacute;n y los datos.";
 choices[16][3] = "Adoptar una estrategia corporativa de seguridad y usabilidad.";
 answers[16] = choices[16][0];
 units[16] = "26";
 comments[16] = "Id Pregunta: 0. AGE A1 2015";


//  Id pregunta: 473 Año de creación de pregunta: 2016
 questions[17]= "18)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la agrupaci&oacute;n de los cr&eacute;ditos en cap&iacute;tulos, art&iacute;culos, conceptos y subconceptos corresponde a la clasificaci&oacute;n:";
 choices[17]= new Array();
 choices[17][0] = "Org&aacute;nica.";
 choices[17][1] = "Contable.";
 choices[17][2] = "Econ&oacute;mica.";
 choices[17][3] = "Por programas.";
 answers[17] = choices[17][2];
 units[17] = "10";
 comments[17] = "Id Pregunta: 473. PRESUPUESTOS GENERALES";


//  Id pregunta: 712 Año de creación de pregunta: 2016
 questions[18]= "19)  Si un ciudadano solicita informaci&oacute;n a la Administraci&oacute;n y son de aplicaci&oacute;n los l&iacute;mites de derecho de acceso previstos en el art&iacute;culo 14 de la Ley 19/2013 pero &eacute;stos no afectan a la totalidad de la informaci&oacute;n:";
 choices[18]= new Array();
 choices[18][0] = "Nunca se conceder&aacute; el acceso parcial a la informaci&oacute;n.";
 choices[18][1] = "Se ofrecer&aacute; acceso parcial sin indicar al solicitante que parte de la informaci&oacute;n ha sido omitida.";
 choices[18][2] = "Siempre se conder&aacute; acceso parcial a la informaci&oacute;n a la que no le afecte la limitaci&oacute;n prevista en el art&iacute;culo 14.";
 choices[18][3] = "Se conceder&aacute; el acceso parcial previa omisi&oacute;n de la informaci&oacute;n afectada por el l&iacute;mite de acceso, salvo que de ello resulte una informaci&oacute;n distorsionada o que carezca de sentido.";
 answers[18] = choices[18][3];
 units[18] = "22";
 comments[18] = "Id Pregunta: 712. Ley de transparencia";


//  Id pregunta: 581 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Cu&aacute;les son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[19]= new Array();
 choices[19][0] = "Transparencia e innovaci&oacute;n, orientaci&oacute;n al usuario del servicio y fomentar el uso de est&aacute;ndares";
 choices[19][1] = "Colaboraci&oacute;n y alianzas, unidad y visi&oacute;n integral y orientaci&oacute;n al usuario del servicio";
 choices[19][2] = "Unidad y visi&oacute;n integral, orientaci&oacute;n al usuario del servicio y prestaci&oacute;n de servicios compartidos";
 choices[19][3] = "Colaboraci&oacute;n y alianzas, fomentar el uso de est&aacute;ndares e incrementar la productividad y la eficacia";
 answers[19] = choices[19][1];
 units[19] = "19";
 comments[19] = "Id Pregunta: 581. Estrategia TIC";


//  Id pregunta: 92 Año de creación de pregunta: 2016
 questions[20]= "21)  Seg&uacute;n AENOR, la certificaci&oacute;n es:";
 choices[20]= new Array();
 choices[20][0] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 choices[20][1] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple con los requisitos legales para salir al mercado.";
 choices[20][2] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio es beneficioso para los consumidores.";
 choices[20][3] = "La acci&oacute;n llevada a cabo por una entidad dependiente de la Administraci&oacute;n p&uacute;blica mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 answers[20] = choices[20][0];
 units[20] = "48";
 comments[20] = "Id Pregunta: 92. AGE A1 2015";


//  Id pregunta: 134 Año de creación de pregunta: 2016
 questions[21]= "22)  La Ley 2/2015, de desindexaci&oacute;n de la econom&iacute;a espa&ntilde;ola, parte de un compromiso del Gobierno en el marco:";
 choices[21]= new Array();
 choices[21][0] = "Del Programa Nacional de Reformas 2015 y 2016.";
 choices[21][1] = "Del Plan de Transformaci&oacute;n Digital 2015-2020.";
 choices[21][2] = "Del Programa Nacional de Reformas 2013 y 2014.";
 choices[21][3] = "Del Pacto Fiscal Europeo de 2012.";
 answers[21] = choices[21][2];
 units[21] = "12";
 comments[21] = "Id Pregunta: 134. Leyes modelo econ&oacute;mico";


//  Id pregunta: 598 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Qui&eacute;n supervisa la elaboraci&oacute;n y ejecutaci&oacute;n de los Planes de Acci&oacute;n Sectoriales?";
 choices[22]= new Array();
 choices[22][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[22][1] = "Las CMADs";
 choices[22][2] = "Ambas son correctas.";
 choices[22][3] = "Ninguna es correcta";
 answers[22] = choices[22][2];
 units[22] = "19";
 comments[22] = "Id Pregunta: 598. Estrategia TIC";


//  Id pregunta: 416 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Qu&eacute; art&iacute;culo de la LO 3/2007, regula la igualdad en el &aacute;mbito de la educaci&oacute;n superior:";
 choices[23]= new Array();
 choices[23][0] = "Art. 25 LO, 3/2007.";
 choices[23][1] = "Art. 23 LO, 3/2007.";
 choices[23][2] = "Art. 14 LO, 3/2007.";
 choices[23][3] = "Ninguna es correcta, es el art. 13.";
 answers[23] = choices[23][0];
 units[23] = "14";
 comments[23] = "Id Pregunta: 416. POLITICAS DE IGUALDAD";


//  Id pregunta: 849 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes es un sistema de firma para la actuaci&oacute;n administrativa automatizada?";
 choices[24]= new Array();
 choices[24][0] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico reconocido o cualificado que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[24][1] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico avanzado o reconocido que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[24][2] = "C&oacute;digo seguro de verificaci&oacute;n vinculado a la Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de Derecho P&uacute;blico, en los t&eacute;rminos y condiciones establecidos, permiti&eacute;ndose en todo caso la comprobaci&oacute;n de la integridad del documento mediante el acceso al portal correspondiente.";
 choices[24][3] = "Firma electr&oacute;nica del titular del &oacute;rgano o empleado p&uacute;blico.";
 answers[24] = choices[24][0];
 units[24] = "4, 7, 8, 9";
 comments[24] = "Id Pregunta: 849. Ley 40/2015";


//  Id pregunta: 718 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;C&uacute;al es un objetivo de las metodolog&iacute;as lean?";
 choices[25]= new Array();
 choices[25][0] = "Maximizar el valor para los clientes";
 choices[25][1] = "Reducir los costes y aumentar la calidad del producto o del servicio";
 choices[25][2] = " Entregar productos de manera m&aacute;s r&aacute;pida";
 choices[25][3] = "Todos los anteriores son objetivos de la metodolog&iacute;a lean";
 answers[25] = choices[25][3];
 units[25] = "34";
 comments[25] = "Id Pregunta: 718. Metodologias Lean";


//  Id pregunta: 503 Año de creación de pregunta: 2016
 questions[26]= "27)  De acuerdo con el art&iacute;culo 64 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, qui&eacute;n elaborar&aacute; un presupuesto de explotaci&oacute;n que detallara los recursos y dotaciones anuales correspondientes:";
 choices[26]= new Array();
 choices[26][0] = "Las sociedades mercantiles estatales.";
 choices[26][1] = "Las entidades p&uacute;blicas empresariales.";
 choices[26][2] = "Las respuestas a) y b) son correctas.";
 choices[26][3] = "Las respuestas a) y b) no son correctas.";
 answers[26] = choices[26][2];
 units[26] = "10";
 comments[26] = "Id Pregunta: 503. PRESUPUESTOS GENERALES";


//  Id pregunta: 100 Año de creación de pregunta: 2016
 questions[27]= "28)  Entre los tipos de Bases de Datos NoSQL no se encuentran:";
 choices[27]= new Array();
 choices[27][0] = "Bases de datos orientadas a filas";
 choices[27][1] = "Bases de datos orientadas a documentos";
 choices[27][2] = "Bases de datos de clave/valor";
 choices[27][3] = "Bases de datos orientadas a objetos";
 answers[27] = choices[27][0];
 units[27] = "73";
 comments[27] = "Id Pregunta: 100. ";


//  Id pregunta: 129 Año de creación de pregunta: 2016
 questions[28]= "29)  Seg&uacute;n la ley 19/2013 de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno:";
 choices[28]= new Array();
 choices[28][0] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, pero no sus medios y tiempo previsto para su consecuci&oacute;n";
 choices[28][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Consejo de Transparencia la evaluaci&oacute;n del cumplimiento de los planes y programas publicados";
 choices[28][2] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, medios y tiempo previsto para su consecuci&oacute;n";
 choices[28][3] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Parlamento la evaluaci&oacute;n del cumplimiento de los planes y programas anuales y plurianuales y la elaboraci&oacute;n de un informe anual";
 answers[28] = choices[28][2];
 units[28] = "22";
 comments[28] = "Id Pregunta: 129. ";


//  Id pregunta: 661 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;De qu&eacute; modelo de programaci&oacute;n es una implementaci&oacute;n Hadoop?";
 choices[29]= new Array();
 choices[29][0] = "Orientaci&oacute;n a objetos";
 choices[29][1] = "MapReduce";
 choices[29][2] = "Pipeline filtering";
 choices[29][3] = "Programaci&oacute;n funcional";
 answers[29] = choices[29][1];
 units[29] = "73";
 comments[29] = "Id Pregunta: 661. ";


//  Id pregunta: 444 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Cu&aacute;l de las siguientes definiciones NO es uno de los roles de la Plataforma de Intermediaci&oacute;n, seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Protocolos de intermediaci&oacute;n de datos?:";
 choices[30]= new Array();
 choices[30][0] = "Mantendr&aacute; un portal web informativo con toda la documentaci&oacute;n relativa a la Plataforma.";
 choices[30][1] = "Almacenar&aacute; informaci&oacute;n personal de ciudadano derivada de la transacci&oacute;n de intercambio de datos, asegurando para ello la confidencialidad e integridad de la misma a trav&eacute;s de los mecanismos correspondientes.";
 choices[30][2] = "Mantendr&aacute; un centro de atenci&oacute;n a usuarios e integradores que canalice todas las incidencias relativas al sistema.";
 choices[30][3] = "Las consultas a los servicios de verificaci&oacute;n de datos, se pueden realizar de forma automatizada desde una aplicaci&oacute;n de gesti&oacute;n de un tr&aacute;mite, adaptadas para invocar los Webservice proporcionados por el servicio.";
 answers[30] = choices[30][1];
 units[30] = "43";
 comments[30] = "Id Pregunta: 444. SERVICIOS COMUNES";


//  Id pregunta: 160 Año de creación de pregunta: 2016
 questions[31]= "32)  El mercado &uacute;nico digital se basa en tres pilares. Se&ntilde;ale cu&aacute;l NO es uno de los tres pilares.";
 choices[31]= new Array();
 choices[31][0] = "Mejorar el acceso de consumidores y empresas a los bienes y servicios digitales en toda Europa.";
 choices[31][1] = "Promover la actualizaci&oacute;n de las normas de accesibilidad hacia WCAG 3.0 por una sociedad m&aacute;s incluyente.";
 choices[31][2] = "Creaci&oacute;n de las condiciones adecuadas y la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan florecer";
 choices[31][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[31] = choices[31][1];
 units[31] = "19";
 comments[31] = "Id Pregunta: 160. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Mayo/Noticia-2015-05-07-estrategia-mercado-unico-digital-europeo.html#.WCjr0mrhDIU";


//  Id pregunta: 802 Año de creación de pregunta: 2016
 questions[32]= "33)  La Administraci&oacute;n General del Estado se organiza:";
 choices[32]= new Array();
 choices[32][0] = "en Ministerios";
 choices[32][1] = "en Presidencia del Gobierno y en Ministerios";
 choices[32][2] = "en Presidencia del Gobierno, en Ministerios y en Secretar&iacute;as Generales";
 choices[32][3] = "en Presidencia del Gobierno, en Ministerios, en Secretar&iacute;as Generales y en el Servicio Exterior";
 answers[32] = choices[32][1];
 units[32] = "4, 7, 8, 9";
 comments[32] = "Id Pregunta: 802. Ley 40/2015";


//  Id pregunta: 359 Año de creación de pregunta: 2016
 questions[33]= "34)  Los Reglamentos no se caracterizan por:";
 choices[33]= new Array();
 choices[33][0] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 choices[33][1] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[33][2] = "Ser obligatorios.";
 choices[33][3] = "No poseer alcance general.";
 answers[33] = choices[33][3];
 units[33] = "5";
 comments[33] = "Id Pregunta: 359. UNION EUROPEA";


//  Id pregunta: 256 Año de creación de pregunta: 2016
 questions[34]= "35)  El Art&iacute;culo 21 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que:";
 choices[34]= new Array();
 choices[34][0] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y con armas.";
 choices[34][1] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica siempre dentro del derecho de manifestaci&oacute;n previa autorizaci&oacute;n.";
 choices[34][2] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y sin armas.";
 choices[34][3] = "No se reconoce expl&iacute;citamente tal derecho de reuni&oacute;n.";
 answers[34] = choices[34][0];
 units[34] = "1";
 comments[34] = "Id Pregunta: 256. CONSTITUCION1978";


//  Id pregunta: 423 Año de creación de pregunta: 2016
 questions[35]= "36)  Para contribuir a un reparto m&aacute;s equilibrado de las responsabilidades familiares se reconoce a los padres:";
 choices[35]= new Array();
 choices[35][0] = "El derecho a un permiso.";
 choices[35][1] = "Una prestaci&oacute;n por paternidad.";
 choices[35][2] = "Ambas son correctas.";
 choices[35][3] = "18 d&iacute;as de permiso.";
 answers[35] = choices[35][2];
 units[35] = "14";
 comments[35] = "Id Pregunta: 423. POLITICAS DE IGUALDAD";


//  Id pregunta: 209 Año de creación de pregunta: 2016
 questions[36]= "37)  Corresponde aprobar el proyecto de Ley de Presupuestos Generales del Estado a:";
 choices[36]= new Array();
 choices[36][0] = "El Ministerio de Econom&iacute;a y Hacienda.";
 choices[36][1] = "El Congreso de los Diputados.";
 choices[36][2] = "Las Cortes Generales.";
 choices[36][3] = "El Consejo de Ministros";
 answers[36] = choices[36][3];
 units[36] = "1";
 comments[36] = "Id Pregunta: 209. CONSTITUCION1978";


//  Id pregunta: 42 Año de creación de pregunta: 2016
 questions[37]= "38)  En relaci&oacute;n con BPEL, &iquest;cu&aacute;l de las siguientes afirmaciones es incorrecta?";
 choices[37]= new Array();
 choices[37][0] = "Es un lenguaje basado en XML para la definici&oacute;n y ejecuci&oacute;n de procesos de negocio utilizando Servicios Web.";
 choices[37][1] = "Es un lenguaje de orquestaci&oacute;n estandarizado por OASIS.";
 choices[37][2] = "BPEL proporciona manejadores (handlers) que permiten tratar situaciones excepcionales o inesperadas.";
 choices[37][3] = "En BPEL se utiliza WS-CDL en lugar de WSDL.";
 answers[37] = choices[37][3];
 units[37] = "86";
 comments[37] = "Id Pregunta: 42. AGE A1 2015";


//  Id pregunta: 321 Año de creación de pregunta: 2016
 questions[38]= "39)  Indique el n&uacute;mero de Diputados del Parlamento Europeo que actualmente le corresponden a Espa&ntilde;a:";
 choices[38]= new Array();
 choices[38][0] = "Cincuenta y cuatro.";
 choices[38][1] = "Cincuenta.";
 choices[38][2] = "Cincuenta y cinco.";
 choices[38][3] = "Cincuenta y dos.";
 answers[38] = choices[38][1];
 units[38] = "5";
 comments[38] = "Id Pregunta: 321. UNION EUROPEA";


//  Id pregunta: 112 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Qu&eacute; dos magnitudes relaciona la Ley de Okun?";
 choices[39]= new Array();
 choices[39][0] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de inflaci&oacute;n";
 choices[39][1] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la variaci&oacute;n del desempleo";
 choices[39][2] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de actividad";
 choices[39][3] = "El valor absoluto del PIB (Producto Interior Bruto) con la tasa de actividad";
 answers[39] = choices[39][1];
 units[39] = "15";
 comments[39] = "Id Pregunta: 112. ";


//  Id pregunta: 600 Año de creación de pregunta: 2016
 questions[40]= "41)  Entre la documentaci&oacute;n de la Seguridad de la Organizaci&oacute;n nos podremos encontrar:";
 choices[40]= new Array();
 choices[40][0] = "La Pol&iacute;tica de Seguridad Corporativa ser&aacute; elaborada por el Responsable de Seguridad Corporativa y aprobada por el Comit&eacute; de Seguridad Corporativa y por la Alta Direcci&oacute;n.";
 choices[40][1] = "La Pol&iacute;tica de Seguridad de las TIC que debe estar alineada en todo momento con el Mantenimiento de los Sistemas de Informaci&oacute;n.";
 choices[40][2] = "El Documento de Seguridad que ha de estar presente en toda documentaci&oacute;n de la seguridad de la informaci&oacute;n.";
 choices[40][3] = "Todas las respuestas anteriores son correctas.";
 answers[40] = choices[40][0];
 units[40] = "45";
 comments[40] = "Id Pregunta: 600. Junta de Extremadura A1 2015";


//  Id pregunta: 819 Año de creación de pregunta: 2016
 questions[41]= "42)  Los servicios territoriales de la Administraci&oacute;n General del Estado en la Comunidad Aut&oacute;noma se organizar&aacute;n atendiendo al mejor cumplimiento de sus fines, en:";
 choices[41]= new Array();
 choices[41][0] = "servicios integrados en las Delegaciones del Gobierno";
 choices[41][1] = "servicios no integrados en las Delegaciones del Gobierno";
 choices[41][2] = "servicios integrados y no integrados en las Delegaciones del Gobierno";
 choices[41][3] = "ninguna es correcta";
 answers[41] = choices[41][2];
 units[41] = "4, 7, 8, 9";
 comments[41] = "Id Pregunta: 819. Ley 40/2015";


//  Id pregunta: 545 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Qu&eacute; est&aacute;ndar ISO define un marco de trabajo para la gobernanza TIC?";
 choices[42]= new Array();
 choices[42][0] = "ISO/IEC 31000";
 choices[42][1] = "ISO/IEC 14000";
 choices[42][2] = "ISO/IEC 38500";
 choices[42][3] = "ISO/IEC 18000";
 answers[42] = choices[42][2];
 units[42] = "26";
 comments[42] = "Id Pregunta: 545. Gobernanza TIC";


//  Id pregunta: 317 Año de creación de pregunta: 2016
 questions[43]= "44)  Habr&aacute; qu&oacute;rum en el Parlamento Europeo, cuando se encuentre reunida en el sal&oacute;n de sesiones:";
 choices[43]= new Array();
 choices[43][0] = "La cuarta parte de los Diputados que integran el Parlamento.";
 choices[43][1] = "La quinta parte de los Diputados que integran el Parlamento.";
 choices[43][2] = "La mitad de los Diputados que integran el Parlamento.";
 choices[43][3] = "La tercera parte de los Diputados que integran el Parlamento.";
 answers[43] = choices[43][3];
 units[43] = "5";
 comments[43] = "Id Pregunta: 317. UNION EUROPEA";


//  Id pregunta: 280 Año de creación de pregunta: 2016
 questions[44]= "45)  El pacto fiscal europeo de 2012 incluye:";
 choices[44]= new Array();
 choices[44][0] = "Un conjunto de reglas, llamadas &quot;reglas de oro&quot;, que son vinculantes en la UE para el principio de equilibrio presupuestario.";
 choices[44][1] = "Un compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,6% de la PIB.";
 choices[44][2] = "Un compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional, lo cual no necesita ser verificado por el Tribunal de Justicia de la Uni&oacute;n Europea.";
 choices[44][3] = "La obligaci&oacute;n de mantener siempre el d&eacute;ficit p&uacute;blico por debajo del 2.8 % del PIB.";
 answers[44] = choices[44][0];
 units[44] = "5";
 comments[44] = "Id Pregunta: 280. UNION EUROPEA";


//  Id pregunta: 344 Año de creación de pregunta: 2016
 questions[45]= "46)  Al ingreso de Espa&ntilde;a en la Uni&oacute;n Europea &iquest;cu&aacute;ntos eurodiputados componen el Parlamento?:";
 choices[45]= new Array();
 choices[45][0] = "Pas&oacute; de 518 a 626.";
 choices[45][1] = "Pas&oacute; de 434 a 518.";
 choices[45][2] = "Pas&oacute; de 345 a 512.";
 choices[45][3] = "Pas&oacute; de 435 a 610.";
 answers[45] = choices[45][1];
 units[45] = "5";
 comments[45] = "Id Pregunta: 344. UNION EUROPEA";


//  Id pregunta: 830 Año de creación de pregunta: 2016
 questions[46]= "47)  La recusaci&oacute;n se plantear&aacute;...";
 choices[46]= new Array();
 choices[46][0] = "S&oacute;lo verbalmente";
 choices[46][1] = "S&oacute;lo por escrito";
 choices[46][2] = "Verbalmente o por escrito";
 choices[46][3] = "Verbalmente o por escrito siempre que es exprese la causa o causas en que se funda";
 answers[46] = choices[46][0];
 units[46] = "4, 7, 8, 9";
 comments[46] = "Id Pregunta: 830. Ley 40/2015";


//  Id pregunta: 30 Año de creación de pregunta: 2016
 questions[47]= "48)  El sistema operativo OS X El Capit&aacute;n incluye un conjunto de servicios de red para compartir archivos entre Mac y PC, &iquest;cu&aacute;l es el protocolo por defecto que emplea OS X El Capit&aacute;n?";
 choices[47]= new Array();
 choices[47][0] = "SMB3";
 choices[47][1] = "AFP";
 choices[47][2] = "NFS";
 choices[47][3] = "FTP";
 answers[47] = choices[47][0];
 units[47] = "59";
 comments[47] = "Id Pregunta: 30. AGE A1 2015";


//  Id pregunta: 410 Año de creación de pregunta: 2016
 questions[48]= "49)  La Administraci&oacute;n General del Estado, utilizar&aacute; entre otros instrumentos b&aacute;sicos para la consecuci&oacute;n del principio de igualdad:";
 choices[48]= new Array();
 choices[48][0] = "Un plan estrat&eacute;gico de igualdad de oportunidades.";
 choices[48][1] = "Un objetivo espec&iacute;fico de igualdad.";
 choices[48][2] = "Un programa de igualdad.";
 choices[48][3] = "Un estatuto de igualdad.";
 answers[48] = choices[48][0];
 units[48] = "14";
 comments[48] = "Id Pregunta: 410. POLITICAS DE IGUALDAD";


//  Id pregunta: 127 Año de creación de pregunta: 2016
 questions[49]= "50)  Seg&uacute;n la ley 19/2013, la Reclamaci&oacute;n ante el Consejo de Transparencia y Buen Gobierno:";
 choices[49]= new Array();
 choices[49][0] = "Tiene car&aacute;cter facultativo.";
 choices[49][1] = "Tiene car&aacute;cter potestativo. ";
 choices[49][2] = "Se puede realizar de forma paralela a su impugnaci&oacute;n en v&iacute;a contencioso-administrativa.";
 choices[49][3] = "Se realiza si la impugnaci&oacute;n en v&iacute;a contencioso-administrativa es rechazada.";
 answers[49] = choices[49][1];
 units[49] = "22";
 comments[49] = "Id Pregunta: 127. ";


//  Id pregunta: 441 Año de creación de pregunta: 2016
 questions[50]= "51)  Se&ntilde;ale la respuesta falsa respecto a Habilit@, Registro de Funcionarios Habilitados:";
 choices[50]= new Array();
 choices[50][0] = "El art&iacute;culo 12.3 de la Ley 39/2015recoge que la Administraci&oacute;n General del Estado, las Comunidades Aut&oacute;nomas y las Entidades Locales mantendr&aacute;n actualizado un registro, u otro sistema equivalente, donde constar&aacute;n los funcionarios habilitados para la identificaci&oacute;n o firma.";
 choices[50][1] = "La Orden HAP/8/2014, de 7 de enero, regula el Registro de funcionarios habilitados para la identificaci&oacute;n y autenticaci&oacute;n de ciudadanos en el &aacute;mbito de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos vinculados o dependientes.";
 choices[50][2] = "En el caso en que el ciudadano no disponga de medios de autenticaci&oacute;n y firma para relacionarse de manera electr&oacute;nica con las Administraciones, la Ley 39/2015 prev&eacute; que, siempre que el ciudadano se identifique y deje constancia de su consentimiento expreso, un funcionario podr&aacute; actuar en su nombre, utilizando el sistema de firma del que disponga para ello.";
 choices[50][3] = "Tambi&eacute;n se establece en la misma Ley 39/2015 que las Administraciones P&uacute;blicas podr&aacute;n realizar copias aut&eacute;nticas de los documentos p&uacute;blicos administrativos o privados mediante funcionario habilitado.";
 answers[50] = choices[50][1];
 units[50] = "43";
 comments[50] = "Id Pregunta: 441. SERVICIOS COMUNES";


//  Id pregunta: 62 Año de creación de pregunta: 2016
 questions[51]= "52)  El art&iacute;culo 102 del Real Decreto 1720/2007, por el que se determina la conservaci&oacute;n de una copia de respaldo de los datos y de los procedimientos de recuperaci&oacute;n de los mismos en un lugar diferente de aquel en que se encuentren los equipos inform&aacute;ticos que los tratan, &iquest;a qu&eacute; nivel o niveles de medidas de seguridad es aplicable?";
 choices[51]= new Array();
 choices[51][0] = "B&aacute;sico";
 choices[51][1] = "Medio";
 choices[51][2] = "Alto";
 choices[51][3] = "A los niveles medio y alto";
 answers[51] = choices[51][2];
 units[51] = "35";
 comments[51] = "Id Pregunta: 62. AGE A1 2015";


//  Id pregunta: 22 Año de creación de pregunta: 2016
 questions[52]= "53)  La composici&oacute;n inicial del Comit&eacute; Ejecutivo de la Comisi&oacute;n de Estrategia TIC, fijada por la disposici&oacute;n adicional quinta del Real Decreto 806/2014, incluye, entre otros, a:";
 choices[52]= new Array();
 choices[52][0] = "Los responsables de las unidades ministeriales de tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones.";
 choices[52][1] = "La Inspecci&oacute;n General del Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[52][2] = "El titular de la Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 choices[52][3] = "Representantes de las empresas del sector TIC nacional.";
 answers[52] = choices[52][1];
 units[52] = "26";
 comments[52] = "Id Pregunta: 22. AGE A1 2015";


//  Id pregunta: 646 Año de creación de pregunta: 2016
 questions[53]= "54)  El Estatuto B&aacute;sico del empleado p&uacute;blico determina como clases de personal los siguientes:";
 choices[53]= new Array();
 choices[53][0] = "Funcionarios de carrera, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 choices[53][1] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal.";
 choices[53][2] = "Funcionarios e interinos.";
 choices[53][3] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 answers[53] = choices[53][3];
 units[53] = "20";
 comments[53] = "Id Pregunta: 646. Junta de Extremadura A1 2015";


//  Id pregunta: 427 Año de creación de pregunta: 2016
 questions[54]= "55)  En las bases de los concursos para la provisi&oacute;n de puestos de trabajo se computar&aacute;, a los efectos de valoraci&oacute;n del trabajo desarrollado y de los correspondientes m&eacute;ritos, el tiempo que las personas candidatas hayan permanecido:";
 choices[54]= new Array();
 choices[54][0] = "En r&eacute;gimen de excedencias, reducciones de jornada, permiso de maternidad o permiso de paternidad.";
 choices[54][1] = "En el extranjero.";
 choices[54][2] = "Ninguna es correcta.";
 choices[54][3] = "Ambas son correctas.";
 answers[54] = choices[54][0];
 units[54] = "14";
 comments[54] = "Id Pregunta: 427. POLITICAS DE IGUALDAD";


//  Id pregunta: 1 Año de creación de pregunta: 2016
 questions[55]= "56)  Los medios y servicios compartidos, establecidos en el Real Decreto 806/2014 dentro del modelo de gobernanza en el &aacute;mbito de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones de la Administraci&oacute;n General del Estado, son tales que:";
 choices[55]= new Array();
 choices[55][0] = "Su declaraci&oacute;n presupone que el servicio se encuentra en producci&oacute;n, listo para la adhesi&oacute;n de las diferentes unidades departamentales.";
 choices[55][1] = "Dado su car&aacute;cter obligatorio y sustitutivo, no se permite acordar excepciones por razones econ&oacute;micas, t&eacute;cnicas o de oportunidad sobrevenidas.";
 choices[55][2] = "Su declaraci&oacute;n establece la habilitaci&oacute;n para el desarrollo de las medidas t&eacute;cnicas, organizativas, presupuestarias y normativas.";
 choices[55][3] = "Su provisi&oacute;n se realiza directa y exclusivamente por medio de la Direcci&oacute;n General de Administraci&oacute;n Digital";
 answers[55] = choices[55][2];
 units[55] = "26";
 comments[55] = "Id Pregunta: 1. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 695 Año de creación de pregunta: 2016
 questions[56]= "57)  Se&ntilde;ale de las siguientes la que NO corresponde a una herramienta de integraci&oacute;n continua:";
 choices[56]= new Array();
 choices[56][0] = "Jenkins";
 choices[56][1] = "Hudson";
 choices[56][2] = "SonarQube";
 choices[56][3] = "Todas lo son";
 answers[56] = choices[56][3];
 units[56] = "92";
 comments[56] = "Id Pregunta: 695. INTEGRACION CONTINUA";


//  Id pregunta: 639 Año de creación de pregunta: 2016
 questions[57]= "58)  En el sistema operativo Unix/Linux, el comando id:";
 choices[57]= new Array();
 choices[57][0] = "Muestra el n&uacute;mero de identificaci&oacute;n y el grupo al que pertenece el usuario.";
 choices[57][1] = "El comando id no existe.";
 choices[57][2] = "Muestra el n&uacute;mero de procesos lanzados por el usuario.";
 choices[57][3] = "Muestra las hebras y las identificaciones de los archivos abiertos por el usuario.";
 answers[57] = choices[57][0];
 units[57] = "57";
 comments[57] = "Id Pregunta: 639. Junta de Extremadura A1 2015";


//  Id pregunta: 770 Año de creación de pregunta: 2016
 questions[58]= "59)  Las Administraciones P&uacute;blicas sirven con objetividad los intereses generales, con sometimiento pleno a la Constituci&oacute;n, a la Ley y al Derecho y act&uacute;an de acuerdo con los principios de:";
 choices[58]= new Array();
 choices[58][0] = "eficacia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[58][1] = "eficiencia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 choices[58][2] = "eficacia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[58][3] = "eficiencia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 answers[58] = choices[58][2];
 units[58] = "4, 7, 8, 9";
 comments[58] = "Id Pregunta: 770. Ley 40/2015";


//  Id pregunta: 847 Año de creación de pregunta: 2016
 questions[59]= "60)  Se&ntilde;ale la respuesta falsa:";
 choices[59]= new Array();
 choices[59][0] = "Cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, especificando las condiciones, protocolos y criterios funcionales o t&eacute;cnicos necesarios para acceder a dichos datos con las m&aacute;ximas garant&iacute;as de seguridad, integridad y disponibilidad.";
 choices[59][1] = "La disponibilidad de tales datos estar&aacute; limitada estrictamente a aquellos que son requeridos a los interesados por las restantes Administraciones para la tramitaci&oacute;n y resoluci&oacute;n de los procedimientos y actuaciones de su competencia, de acuerdo con la normativa reguladora de los mismos.";
 choices[59][2] = "De conformidad con lo dispuesto en la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal y su normativa de desarrollo, cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, siendo preceptiva la firma del convenio correspondiente.";
 choices[59][3] = "La Administraci&oacute;n General del Estado, las Administraciones Auton&oacute;micas y las Entidades Locales, adoptar&aacute;n las medidas necesarias e incorporar&aacute;n en sus respectivos &aacute;mbitos las tecnolog&iacute;as precisas para posibilitar la interconexi&oacute;n de sus redes";
 answers[59] = choices[59][2];
 units[59] = "4, 7, 8, 9";
 comments[59] = "Id Pregunta: 847. Ley 40/2015";


//  Id pregunta: 222 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[60]= new Array();
 choices[60][0] = "Dos Cap&iacute;tulos.";
 choices[60][1] = "Tres Cap&iacute;tulos.";
 choices[60][2] = "Un Cap&iacute;tulo.";
 choices[60][3] = "Cuatro Cap&iacute;tulos.";
 answers[60] = choices[60][1];
 units[60] = "1";
 comments[60] = "Id Pregunta: 222. CONSTITUCION1978";


//  Id pregunta: 91 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Cu&aacute;l de las siguientes opciones muestra exclusivamente herramientas directamente relacionadas con la realizaci&oacute;n de pruebas para asegurar la calidad del software?";
 choices[61]= new Array();
 choices[61][0] = "JUnit, Artifactory y SonarQube";
 choices[61][1] = "JUnit, Artifactory y Selenium";
 choices[61][2] = "JUnit, SonarQube y Selenium";
 choices[61][3] = "ArtiFactory, SonarQube y Selenium";
 answers[61] = choices[61][2];
 units[61] = "92";
 comments[61] = "Id Pregunta: 91. AGE A1 2015";


//  Id pregunta: 848 Año de creación de pregunta: 2016
 questions[62]= "63)  Se&ntilde;ale la respuesta correcta:";
 choices[62]= new Array();
 choices[62][0] = "La sede electr&oacute;nica es aquella direcci&oacute;n electr&oacute;nica, disponible para los ciudadanos a trav&eacute;s de redes de telecomunicaciones, cuya titularidad corresponde a una Administraci&oacute;n P&uacute;blica, o bien a una o varios organismos p&uacute;blicos o entidades de Derecho P&uacute;blico en el ejercicio de sus competencias.";
 choices[62][1] = "Se entiende por portal de internet el punto de acceso electr&oacute;nico cuya titularidad corresponda a una Administraci&oacute;n P&uacute;blica, organismo p&uacute;blico o entidad de Derecho P&uacute;blico que permite el acceso a trav&eacute;s de internet a la informaci&oacute;n publicada y, en su caso, a la sede electr&oacute;nica correspondiente.";
 choices[62][2] = "A y B son correctas.";
 choices[62][3] = "A y B son falsas.";
 answers[62] = choices[62][2];
 units[62] = "4, 7, 8, 9";
 comments[62] = "Id Pregunta: 848. Ley 40/2015";


//  Id pregunta: 588 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Cu&aacute;l es el per&iacute;odo temporal del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[63]= new Array();
 choices[63][0] = "Comprende del a&ntilde;o 2015 al 2017";
 choices[63][1] = "Comprende del a&ntilde;o 2015 al 2020";
 choices[63][2] = "Comprende del a&ntilde;o 2016 al 2018";
 choices[63][3] = "Ninguna de las anteriores";
 answers[63] = choices[63][1];
 units[63] = "19";
 comments[63] = "Id Pregunta: 588. Estrategia TIC";


//  Id pregunta: 632 Año de creación de pregunta: 2016
 questions[64]= "65)  Seg&uacute;n el Reglamento de Medidas de Seguridad de Ficheros Automatizados con Datos de Car&aacute;cter Personal, los ficheros que contengan datos de ideolog&iacute;a, religi&oacute;n, creencias, origen racial, salud o vida sexual, &iquest;qu&eacute; medidas de seguridad deber&aacute;n adoptar?";
 choices[64]= new Array();
 choices[64][0] = "De nivel b&aacute;sico y nivel medio.";
 choices[64][1] = "De nivel alto.";
 choices[64][2] = "De nivel medio y nivel alto.";
 choices[64][3] = "De nivel b&aacute;sico, nivel medio y nivel alto.";
 answers[64] = choices[64][3];
 units[64] = "35";
 comments[64] = "Id Pregunta: 632. Junta de Extremadura A1 2015";


//  Id pregunta: 45 Año de creación de pregunta: 2016
 questions[65]= "66)  46. &iquest;Cu&aacute;l de las siguientes NO es una de las APIs incorporadas a HTML5?";
 choices[65]= new Array();
 choices[65][0] = "HTML Drag and Drop, para arrastrar un objeto a otra localizaci&oacute;n.";
 choices[65][1] = "HTML Advanced Search, para parametrizar y modificar el comportamiento de los buscadores.";
 choices[65][2] = "HTML Local Storage, para almacenar datos en el navegador.";
 choices[65][3] = "HTML SSE, para actualizar una p&aacute;gina web autom&aacute;ticamente sin preguntar al servidor.";
 answers[65] = choices[65][1];
 units[65] = "74";
 comments[65] = "Id Pregunta: 45. AGE A1 2015";


//  Id pregunta: 237 Año de creación de pregunta: 2016
 questions[66]= "67)  Seg&uacute;n la regulaci&oacute;n constitucional del derecho de asociaci&oacute;n:";
 choices[66]= new Array();
 choices[66][0] = "Las asociaciones que se constituyan deben inscribirse en un registro a los efectos de publicidad.";
 choices[66][1] = "Las asociaciones pueden ser suspendidas en virtud de resoluci&oacute;n administrativa motivada.";
 choices[66][2] = "Este derecho aparece regulado en el T&iacute;tulo Preliminar de la Constituci&oacute;n.";
 choices[66][3] = "Este derecho aparece regulado en la Secci&oacute;n 2&ordf; del Cap&iacute;tulo 2&ordm; del T&iacute;tulo I de la Constituci&oacute;n.";
 answers[66] = choices[66][2];
 units[66] = "1";
 comments[66] = "Id Pregunta: 237. CONSTITUCION1978";


//  Id pregunta: 751 Año de creación de pregunta: 2016
 questions[67]= "68)  En los or&iacute;genes te&oacute;ricos del t&eacute;rmino gobernanza se encuentra:";
 choices[67]= new Array();
 choices[67][0] = "Peters";
 choices[67][1] = "Hollingsworth";
 choices[67][2] = "Manuel Castells";
 choices[67][3] = "Gaebler";
 answers[67] = choices[67][1];
 units[67] = "18, 20";
 comments[67] = "Id Pregunta: 751. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 369 Año de creación de pregunta: 2016
 questions[68]= "69)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[68]= new Array();
 choices[68][0] = "Son actos individuales no normativos.";
 choices[68][1] = "Poseen alcance general.";
 choices[68][2] = "Son actos normativos.";
 choices[68][3] = "No son obligatorias.";
 answers[68] = choices[68][0];
 units[68] = "5";
 comments[68] = "Id Pregunta: 369. UNION EUROPEA";


//  Id pregunta: 522 Año de creación de pregunta: 2016
 questions[69]= "70)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se denomina:";
 choices[69]= new Array();
 choices[69][0] = "De los interesados en el procedimiento";
 choices[69][1] = "De la actividad de las Administraciones P&uacute;blicas";
 choices[69][2] = "Disposiciones generales";
 choices[69][3] = "De los actos administrativos";
 answers[69] = choices[69][2];
 units[69] = "7";
 comments[69] = "Id Pregunta: 522. LEY 39/2015";


//  Id pregunta: 303 Año de creación de pregunta: 2016
 questions[70]= "71)  Indique el n&uacute;mero de miembros con que cuenta la Comisi&oacute;n Europea en la actualidad:";
 choices[70]= new Array();
 choices[70][0] = "Veinticinco.";
 choices[70][1] = "Veintisiete.";
 choices[70][2] = "Veintinueve.";
 choices[70][3] = "Cuarenta y uno.";
 answers[70] = choices[70][1];
 units[70] = "5";
 comments[70] = "Id Pregunta: 303. UNION EUROPEA";


//  Id pregunta: 101 Año de creación de pregunta: 2016
 questions[71]= "72)  El Teorema de Brewer o Principio CAP recoge las siguientes garant&iacute;as:";
 choices[71]= new Array();
 choices[71][0] = "Consistencia (Consistency), Disponibilidad (Availability) y Persistencia (Persistence)";
 choices[71][1] = "Consistencia (Consistency), Disponibilidad (Availability) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[71][2] = "Consistencia (Consistency), Atomicidad (Atomicity) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[71][3] = "Confidencialidad (Confidentiality), Autenticidad (Authentication) y Protecci&oacute;n (Protection)";
 answers[71] = choices[71][1];
 units[71] = "73";
 comments[71] = "Id Pregunta: 101. ";


//  Id pregunta: 215 Año de creación de pregunta: 2016
 questions[72]= "73)  Seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola, las asociaciones se inscribir&aacute;n en un registro a efectos de:";
 choices[72]= new Array();
 choices[72][0] = "Publicidad.";
 choices[72][1] = "Constituci&oacute;n.";
 choices[72][2] = "Legalidad.";
 choices[72][3] = "Creaci&oacute;n.";
 answers[72] = choices[72][0];
 units[72] = "1";
 comments[72] = "Id Pregunta: 215. CONSTITUCION1978";


//  Id pregunta: 804 Año de creación de pregunta: 2016
 questions[73]= "74)  Los Secretarios generales t&eacute;cnicos:";
 choices[73]= new Array();
 choices[73][0] = "se encuentran bajo la inmediata dependencia del Subsecretario";
 choices[73][1] = "tendr&aacute;n las competencias sobre servicios comunes que les atribuya el Real Decreto de estructura del Departamento";
 choices[73][2] = "tendr&aacute;n las competencias relativas a producci&oacute;n normativa, asistencia jur&iacute;dica y publicaciones";
 choices[73][3] = "todas son correctas";
 answers[73] = choices[73][3];
 units[73] = "4, 7, 8, 9";
 comments[73] = "Id Pregunta: 804. Ley 40/2015";


//  Id pregunta: 319 Año de creación de pregunta: 2016
 questions[74]= "75)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[74]= new Array();
 choices[74][0] = "El Presidente de la Comisi&oacute;n, con la aprobaci&oacute;n de la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[74][1] = "La Comisi&oacute;n por mayor&iacute;a de dos tercios de sus miembros puede exigir la dimisi&oacute;n de un Comisario.";
 choices[74][2] = "El Presidente, sin necesidad de contar con la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[74][3] = "&Uacute;nicamente el Presidente del Consejo puede exigir la dimisi&oacute;n de un Comisario.";
 answers[74] = choices[74][0];
 units[74] = "5";
 comments[74] = "Id Pregunta: 319. UNION EUROPEA";


