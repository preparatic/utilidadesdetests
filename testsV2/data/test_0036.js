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

//  Id pregunta: 285 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Cu&aacute;l no es un obst&aacute;culo que dificulta la Agenda Digital para Europa?";
 choices[0]= new Array();
 choices[0][0] = "la fragmentaci&oacute;n de los mercados digitales.";
 choices[0][1] = "las diferencias tarifarias de los servicios de la sociedad de la informaci&oacute;n entre los miembros de la UE.";
 choices[0][2] = "la falta de interoperabilidad.";
 choices[0][3] = "el incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes.";
 answers[0] = choices[0][1];
 units[0] = "5";
 comments[0] = "Id Pregunta: 285. UNION EUROPEA";
 preguntaids[0] = 285


//  Id pregunta: 132 Año de creación de pregunta: 2016
 questions[1]= "2)  Cu&aacute;l de las siguientes leyes no est&aacute; incluida en la reforma tributaria llevada a cabo en el a&ntilde;o 2014:";
 choices[1]= new Array();
 choices[1][0] = "Ley 26/2014, del Impuesto sobre la Renta de las Personas F&iacute;sicas";
 choices[1][1] = "Ley 27/2014, del Impuesto sobre Sociedades";
 choices[1][2] = "Ley 28/2014, de Impuestos Especiales";
 choices[1][3] = "Ley 29/2014, del Impuesto de Valor A&ntilde;adido";
 answers[1] = choices[1][3];
 units[1] = "12";
 comments[1] = "Id Pregunta: 132. Leyes modelo econ&oacute;mico";
 preguntaids[1] = 132


//  Id pregunta: 141 Año de creación de pregunta: 2016
 questions[2]= "3)  El recurso de alzada puede interponerse:";
 choices[2]= new Array();
 choices[2][0] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna en todo caso";
 choices[2][1] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna o ante el competente para resolverlo";
 choices[2][2] = "Ante el &oacute;rgano competente para resolverlo en todo caso";
 choices[2][3] = "Ante el Defensor del Pueblo";
 answers[2] = choices[2][1];
 units[2] = "8";
 comments[2] = "Id Pregunta: 141. Ley 39/2015, Art&iacute;culo 121";
 preguntaids[2] = 141


//  Id pregunta: 800 Año de creación de pregunta: 2016
 questions[3]= "4)  Las unidades administrativas comprenden puestos de trabajo o dotaciones de plantilla:";
 choices[3]= new Array();
 choices[3][0] = "vinculados funcionalmente por raz&oacute;n de sus cometidos y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[3][1] = "vinculados org&aacute;nicamente por raz&oacute;n de sus cometidos y funcionalmente por una jefatura com&uacute;n";
 choices[3][2] = "vinculados funcionalmente por raz&oacute;n de su territorio y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[3][3] = "vinculados org&aacute;nicamente por raz&oacute;n de su territorio y funcionalmente por una jefatura com&uacute;n";
 answers[3] = choices[3][0];
 units[3] = "4, 7, 8, 9";
 comments[3] = "Id Pregunta: 800. Ley 40/2015";
 preguntaids[3] = 800


//  Id pregunta: 787 Año de creación de pregunta: 2016
 questions[4]= "5)  La Administraci&oacute;n General del Estado comprende (se&ntilde;ala la incorrecta):";
 choices[4]= new Array();
 choices[4][0] = "la Organizaci&oacute;n Central, que integra los Ministerios y los servicios comunes";
 choices[4][1] = "la Organizaci&oacute;n Territorial";
 choices[4][2] = "la Organizaci&oacute;n sectorial";
 choices[4][3] = "la Administraci&oacute;n General del Estado en el exterior";
 answers[4] = choices[4][2];
 units[4] = "4, 7, 8, 9";
 comments[4] = "Id Pregunta: 787. Ley 40/2015";
 preguntaids[4] = 787


//  Id pregunta: 326 Año de creación de pregunta: 2016
 questions[5]= "6)  La Mesa del Parlamento estar&aacute; compuesta por:";
 choices[5]= new Array();
 choices[5][0] = "El Presidente, doce Vicepresidentes y los Cuestores.";
 choices[5][1] = "El Presidente, diez Vicepresidentes y los Cuestores.";
 choices[5][2] = "El Presidente, dos Vicepresidentes y los Cuestores.";
 choices[5][3] = "El Presidente, catorce Vicepresidentes y los Cuestores.";
 answers[5] = choices[5][3];
 units[5] = "5";
 comments[5] = "Id Pregunta: 326. UNION EUROPEA";
 preguntaids[5] = 326


//  Id pregunta: 163 Año de creación de pregunta: 2016
 questions[6]= "7)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, constituye una infracci&oacute;n grave:";
 choices[6]= new Array();
 choices[6][0] = "No conservaci&oacute;n reiterada o sistem&aacute;tica de los datos a los que se refiere el art&iacute;culo 3";
 choices[6][1] = "No conservaci&oacute;n en ning&uacute;n momento de los datos a los que se refiere el art&iacute;culo 3.";
 choices[6][2] = "El incumplimiento de la llevanza del libro-registro";
 choices[6][3] = "La conservaci&oacute;n de los datos por un per&iacute;odo superior al establecido en el art&iacute;culo 5.";
 answers[6] = choices[6][0];
 units[6] = "19";
 comments[6] = "Id Pregunta: 163. B y C: son &quot;Muy grave&quot;; D: para que fuera verdadera deber&iacute;a ser &quot;inferior&quot;";
 preguntaids[6] = 163


//  Id pregunta: 24 Año de creación de pregunta: 2016
 questions[7]= "8)  De acuerdo con la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, una de las funciones de la Comisi&oacute;n Nacional de los Mercados y la Competencia es:";
 choices[7]= new Array();
 choices[7][0] = "Gestionar en per&iacute;odo voluntario las tasas en materia de telecomunicaciones a que se refiere la presente Ley.";
 choices[7][1] = "Proponer al Gobierno la pol&iacute;tica a seguir para facilitar el desarrollo y la evoluci&oacute;n de las obligaciones de servicio p&uacute;blico.";
 choices[7][2] = "Gestionar el Registro de Operadores.";
 choices[7][3] = "Establecer el procedimiento para cuantificar los beneficios no monetarios obtenidos por los operadores encargados de la prestaci&oacute;n del servicio universal.";
 answers[7] = choices[7][3];
 units[7] = "121";
 comments[7] = "Id Pregunta: 24. AGE A1 2015";
 preguntaids[7] = 24


//  Id pregunta: 862 Año de creación de pregunta: 2016
 questions[8]= "9)  Sobre las URL de los sitios web p&uacute;blicos, se&ntilde;ale cu&aacute;l NO es verdadera:";
 choices[8]= new Array();
 choices[8][0] = "Se recomienda utilizar la URL con dominio &lt;.gob.es&gt; en todos los niveles de la Administraci&oacute;n General del Estado, para todos los sitios web.";
 choices[8][1] = "Si se trata de organismos muy conocidos por los ciudadanos y siempre que no coincida con la denominaci&oacute;n del portal, se puede utilizar la denominaci&oacute;n actual con .gob.es";
 choices[8][2] = "Para una mayor normalizaci&oacute;n siempre se podr&iacute;a redireccionar autom&aacute;ticamente desde una URL a otra, para lo cual habr&aacute; que registrar los dos dominios: organismo.gob.es y sede.organismo.gob.es.";
 choices[8][3] = "Se recomienda utilizar sede.aaaa.gob.es, donde aaaa se sustituir&aacute; por el nombre del Ministerio al que pertenece el organismo.";
 answers[8] = choices[8][3];
 units[8] = "125";
 comments[8] = "Id Pregunta: 862. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[8] = 862


//  Id pregunta: 728 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Cu&aacute;l es el n&uacute;mero de personas generalmete recomendados para cada equipo de Scrum?";
 choices[9]= new Array();
 choices[9][0] = "De 1 a  4 ";
 choices[9][1] = "De 3 a  7 ";
 choices[9][2] = "De 5 a  9";
 choices[9][3] = "De 7 a 11";
 answers[9] = choices[9][2];
 units[9] = "34, 84";
 comments[9] = "Id Pregunta: 728. Metodologias &aacute;giles";
 preguntaids[9] = 728


//  Id pregunta: 248 Año de creación de pregunta: 2016
 questions[10]= "11)  El T&iacute;tulo II de la Constituci&oacute;n finaliza en el Art&iacute;culo:";
 choices[10]= new Array();
 choices[10][0] = "61";
 choices[10][1] = "53";
 choices[10][2] = "65";
 choices[10][3] = "67";
 answers[10] = choices[10][1];
 units[10] = "1";
 comments[10] = "Id Pregunta: 248. CONSTITUCION1978";
 preguntaids[10] = 248


//  Id pregunta: 422 Año de creación de pregunta: 2016
 questions[11]= "12)  Los distintivos para reconocer a aquellas empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato, lo crear&aacute;:";
 choices[11]= new Array();
 choices[11][0] = "El Ministerio de Igualdad.";
 choices[11][1] = "El Ministerio de Empleo y Seguridad Social.";
 choices[11][2] = "Ambas son correctas.";
 choices[11][3] = "La Consejer&iacute;a de Igualdad de cada CCAA.";
 answers[11] = choices[11][1];
 units[11] = "14";
 comments[11] = "Id Pregunta: 422. POLITICAS DE IGUALDAD";
 preguntaids[11] = 422


//  Id pregunta: 214 Año de creación de pregunta: 2016
 questions[12]= "13)  Seg&uacute;n el T&iacute;tulo II de la Constituci&oacute;n Espa&ntilde;ola relativo a la Corona:";
 choices[12]= new Array();
 choices[12][0] = "La Regencia se ejercer&aacute; por mandato constitucional y siempre en nombre del Rey.";
 choices[12][1] = "Las abdicaciones y renuncias en el orden sucesorio se resolver&aacute;n por ley ordinaria.";
 choices[12][2] = "El Pr&iacute;ncipe heredero podr&aacute; asumir la Regencia durante su minor&iacute;a de edad.";
 choices[12][3] = "La Regencia podr&aacute; ejercerse por nacionales de cualquier Estado.";
 answers[12] = choices[12][0];
 units[12] = "1";
 comments[12] = "Id Pregunta: 214. CONSTITUCION1978";
 preguntaids[12] = 214


//  Id pregunta: 593 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Qui&eacute;n se encarga de revisar la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[13]= new Array();
 choices[13][0] = "La CETIC";
 choices[13][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[13][2] = "La DTIC";
 choices[13][3] = "El MHFP";
 answers[13] = choices[13][0];
 units[13] = "19";
 comments[13] = "Id Pregunta: 593. Estrategia TIC";
 preguntaids[13] = 593


//  Id pregunta: 98 Año de creación de pregunta: 2016
 questions[14]= "15)  La tecnolog&iacute;a de software que permite ejecutar al mismo tiempo varios sistemas operativos y aplicaciones en el mismo servidor se denomina:";
 choices[14]= new Array();
 choices[14][0] = "Clustering";
 choices[14][1] = "Deduplicaci&oacute;n";
 choices[14][2] = "Virtualizaci&oacute;n";
 choices[14][3] = "Contenerizaci&oacute;n";
 answers[14] = choices[14][2];
 units[14] = "124";
 comments[14] = "Id Pregunta: 98. AGE A1 2015";
 preguntaids[14] = 98


//  Id pregunta: 646 Año de creación de pregunta: 2016
 questions[15]= "16)  El Estatuto B&aacute;sico del empleado p&uacute;blico determina como clases de personal los siguientes:";
 choices[15]= new Array();
 choices[15][0] = "Funcionarios de carrera, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 choices[15][1] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal.";
 choices[15][2] = "Funcionarios e interinos.";
 choices[15][3] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 answers[15] = choices[15][3];
 units[15] = "20";
 comments[15] = "Id Pregunta: 646. Junta de Extremadura A1 2015";
 preguntaids[15] = 646


//  Id pregunta: 403 Año de creación de pregunta: 2016
 questions[16]= "17)  El plan estrat&eacute;gico de Igualdad de Oportunidades incluir&aacute;:";
 choices[16]= new Array();
 choices[16][0] = "Medidas de igualdad.";
 choices[16][1] = "Objetivos de igualdad.";
 choices[16][2] = "Ambas son correctas.";
 choices[16][3] = "A y B son incorrectas.";
 answers[16] = choices[16][2];
 units[16] = "14";
 comments[16] = "Id Pregunta: 403. POLITICAS DE IGUALDAD";
 preguntaids[16] = 403


//  Id pregunta: 749 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Cu&aacute;les de los siguientes principios de inspiraci&oacute;n en la funci&oacute;n gerencial NO incorpora la Ley 40/2015?";
 choices[17]= new Array();
 choices[17][0] = "Buena fe, confianza leg&iacute;tima y lealtad institucional.";
 choices[17][1] = "Calidad de los servicios p&uacute;blicos";
 choices[17][2] = "Responsabilidad por la gesti&oacute;n p&uacute;blica.";
 choices[17][3] = "Servicio efectivo a los ciudadanos";
 answers[17] = choices[17][1];
 units[17] = "18";
 comments[17] = "Id Pregunta: 749. Direcci&oacute;n p&uacute;blica";
 preguntaids[17] = 749


//  Id pregunta: 410 Año de creación de pregunta: 2016
 questions[18]= "19)  La Administraci&oacute;n General del Estado, utilizar&aacute; entre otros instrumentos b&aacute;sicos para la consecuci&oacute;n del principio de igualdad:";
 choices[18]= new Array();
 choices[18][0] = "Un plan estrat&eacute;gico de igualdad de oportunidades.";
 choices[18][1] = "Un objetivo espec&iacute;fico de igualdad.";
 choices[18][2] = "Un programa de igualdad.";
 choices[18][3] = "Un estatuto de igualdad.";
 answers[18] = choices[18][0];
 units[18] = "14";
 comments[18] = "Id Pregunta: 410. POLITICAS DE IGUALDAD";
 preguntaids[18] = 410


//  Id pregunta: 176 Año de creación de pregunta: 2016
 questions[19]= "20)  Seg&uacute;n el Art&iacute;culo 115 de la Constituci&oacute;n Espa&ntilde;ola, el Presidente del Gobierno, previa deliberaci&oacute;n del Consejo de Ministros, y bajo su responsabilidad, podr&aacute; proponer la disoluci&oacute;n de:";
 choices[19]= new Array();
 choices[19][0] = "El Congreso, el senado o las Cortes Generales.";
 choices[19][1] = "Solamente el Congreso.";
 choices[19][2] = "El Congreso, pero s&oacute;lo mediante la tramitaci&oacute;n de una moci&oacute;n de censura.";
 choices[19][3] = "El Congreso y el Senado, mediante Refer&eacute;ndum.";
 answers[19] = choices[19][0];
 units[19] = "1";
 comments[19] = "Id Pregunta: 176. CONSTITUCION1978";
 preguntaids[19] = 176


//  Id pregunta: 503 Año de creación de pregunta: 2016
 questions[20]= "21)  De acuerdo con el art&iacute;culo 64 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, qui&eacute;n elaborar&aacute; un presupuesto de explotaci&oacute;n que detallara los recursos y dotaciones anuales correspondientes:";
 choices[20]= new Array();
 choices[20][0] = "Las sociedades mercantiles estatales.";
 choices[20][1] = "Las entidades p&uacute;blicas empresariales.";
 choices[20][2] = "Las respuestas a) y b) son correctas.";
 choices[20][3] = "Las respuestas a) y b) no son correctas.";
 answers[20] = choices[20][2];
 units[20] = "10";
 comments[20] = "Id Pregunta: 503. PRESUPUESTOS GENERALES";
 preguntaids[20] = 503


//  Id pregunta: 313 Año de creación de pregunta: 2016
 questions[21]= "22)  Indique qui&eacute;n propone al candidato para el cargo de Presidente de la Comisi&oacute;n Europea:";
 choices[21]= new Array();
 choices[21][0] = "El Consejo Europeo.";
 choices[21][1] = "El Consejo de la Uni&oacute;n Europea.";
 choices[21][2] = "Los miembros de la Comisi&oacute;n Europea.";
 choices[21][3] = "El Parlamento Europeo.";
 answers[21] = choices[21][0];
 units[21] = "5";
 comments[21] = "Id Pregunta: 313. UNION EUROPEA";
 preguntaids[21] = 313


//  Id pregunta: 401 Año de creación de pregunta: 2016
 questions[22]= "23)  Entre los criterios generales de actuaci&oacute;n los Poderes P&uacute;blicos, tienen:";
 choices[22]= new Array();
 choices[22][0] = "La implantaci&oacute;n de un lenguaje no sexista en el &aacute;mbito administrativo, y en la totalidad de las relaciones sociales, culturales y art&iacute;sticas.";
 choices[22][1] = "La participaci&oacute;n equilibrada de mujeres y hombres en las candidaturas electorales y toma de decisiones.";
 choices[22][2] = "Ambas son correctas.";
 choices[22][3] = "A y B son incorrectas.";
 answers[22] = choices[22][2];
 units[22] = "14";
 comments[22] = "Id Pregunta: 401. POLITICAS DE IGUALDAD";
 preguntaids[22] = 401


//  Id pregunta: 65 Año de creación de pregunta: 2016
 questions[23]= "24)  Respecto a las arquitecturas de almacenamiento SAN Fibre Channel, indique la respuesta incorrecta:";
 choices[23]= new Array();
 choices[23][0] = "Cada equipo de la red se identifica de forma un&iacute;voca mediante una direcci&oacute;n de 64 bits.";
 choices[23][1] = "El SNS asigna los FCID y permite traducir de FCID a WWN.";
 choices[23][2] = "Los switches FC intercambian informaci&oacute;n de enrutado de tramas mediante un protocolo del tipo EGP adaptado a las redes FC.";
 choices[23][3] = "La se&ntilde;alizaci&oacute;n del canal de fibra puede funcionar sobre pares de cobre.";
 answers[23] = choices[23][2];
 units[23] = "53";
 comments[23] = "Id Pregunta: 65. AGE A1 2015";
 preguntaids[23] = 65


//  Id pregunta: 265 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Qui&eacute;n debe refrendar el nombramiento del Presidente del Consejo General del Poder Judicial?:";
 choices[24]= new Array();
 choices[24][0] = "El Presidente del Senado";
 choices[24][1] = "No es un acto Real, por tanto no conlleva refrendo";
 choices[24][2] = "El Presidente del Gobierno";
 choices[24][3] = "El Presidente de las Cortes Generales";
 answers[24] = choices[24][2];
 units[24] = "1";
 comments[24] = "Id Pregunta: 265. CONSTITUCION1978";
 preguntaids[24] = 265


//  Id pregunta: 854 Año de creación de pregunta: 2016
 questions[25]= "26)  Si disponemos de 6 discos SAS de 1TB netos configurados en RAID5, &iquest;de qu&eacute; capacidad neta se dispone en RAID5 en el sistema de almacenamiento?";
 choices[25]= new Array();
 choices[25][0] = "6 TB.";
 choices[25][1] = "5 TB.";
 choices[25][2] = "7 TB.";
 choices[25][3] = "3 TB.";
 answers[25] = choices[25][1];
 units[25] = "53";
 comments[25] = "Id Pregunta: 854. Xunta de Galicia 2015";
 preguntaids[25] = 854


//  Id pregunta: 400 Año de creación de pregunta: 2016
 questions[26]= "27)  Corresponde probar la ausencia de discriminaci&oacute;n en las medidas adoptadas y su proporcionalidad, a:";
 choices[26]= new Array();
 choices[26][0] = "A la persona demandante.";
 choices[26][1] = "A la persona demandada.";
 choices[26][2] = "Al &oacute;rgano judicial.";
 choices[26][3] = "Al &oacute;rgano administrativo.";
 answers[26] = choices[26][1];
 units[26] = "14";
 comments[26] = "Id Pregunta: 400. POLITICAS DE IGUALDAD";
 preguntaids[26] = 400


//  Id pregunta: 489 Año de creación de pregunta: 2016
 questions[27]= "28)  Seg&uacute;n el art&iacute;culo 56.6 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Hacienda dar&aacute; cuentas trimestralmente de los cr&eacute;ditos extraordinarias y suplementos de cr&eacute;dito a:";
 choices[27]= new Array();
 choices[27][0] = "Las Cortes Generales.";
 choices[27][1] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[27][2] = "El Gobierno.";
 choices[27][3] = "El Congreso de los Diputados.";
 answers[27] = choices[27][0];
 units[27] = "10";
 comments[27] = "Id Pregunta: 489. PRESUPUESTOS GENERALES";
 preguntaids[27] = 489


//  Id pregunta: 688 Año de creación de pregunta: 2016
 questions[28]= "29)  Indique cu&aacute;l de las siguientes afirmaciones no es correcta seg&uacute;n lo establecido en el Reglamento (UE) 910/2014";
 choices[28]= new Array();
 choices[28][0] = "Las firmas electro&#769;nicas cualificadas tendr&aacute;n un efecto juri&#769;dico equivalente al de una firma manuscrita";
 choices[28][1] = "Una firma electro&#769;nica cualificada basada en un certificado cualificado emitido en un Estado miembro sera&#769; reconocida como firma electro&#769;nica cualificada en los dema&#769;s Estados miembros";
 choices[28][2] = "No se denegara&#769;n efectos juri&#769;dicos ni admisibilidad como prueba en procedimientos judiciales a una firma electro&#769;nica por el mero hecho de ser una firma electro&#769;nica";
 choices[28][3] = "Las firmas electr&oacute;nicas cualificadas tendr&aacute;n una validez de 48 meses";
 answers[28] = choices[28][3];
 units[28] = "77";
 comments[28] = "Id Pregunta: 688. Art&iacute;culo 25 del Reglamento 910/2014";
 preguntaids[28] = 688


//  Id pregunta: 295 Año de creación de pregunta: 2016
 questions[29]= "30)  La sede del Tribunal de Cuentas Europeo se encuentra en:";
 choices[29]= new Array();
 choices[29][0] = "Estrasburgo.";
 choices[29][1] = "Bruselas.";
 choices[29][2] = "Luxemburgo.";
 choices[29][3] = "Holanda.";
 answers[29] = choices[29][2];
 units[29] = "5";
 comments[29] = "Id Pregunta: 295. UNION EUROPEA";
 preguntaids[29] = 295


//  Id pregunta: 105 Año de creación de pregunta: 2016
 questions[30]= "31)  Entre las caracter&iacute;sticas de Big Data se encuentra:";
 choices[30]= new Array();
 choices[30][0] = "Gran volumen de informaci&oacute;n";
 choices[30][1] = "Gran variedad de datos";
 choices[30][2] = "Se analizan datos a gran velocidad";
 choices[30][3] = "Todas las anteriores son verdaderas";
 answers[30] = choices[30][3];
 units[30] = "73";
 comments[30] = "Id Pregunta: 105. ";
 preguntaids[30] = 105


//  Id pregunta: 310 Año de creación de pregunta: 2016
 questions[31]= "32)  Los actos legislativos de la Uni&oacute;n Europea, podr&aacute;n adoptarse &uacute;nicamente a propuesta de:";
 choices[31]= new Array();
 choices[31][0] = "La Comisi&oacute;n Europea.";
 choices[31][1] = "El Consejo Europeo.";
 choices[31][2] = "El Consejo de Europa.";
 choices[31][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[31] = choices[31][0];
 units[31] = "5";
 comments[31] = "Id Pregunta: 310. UNION EUROPEA";
 preguntaids[31] = 310


//  Id pregunta: 655 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Cual de las siguientes bases de datos no est&aacute; orientada a grafos?";
 choices[32]= new Array();
 choices[32][0] = "Neo4J ";
 choices[32][1] = "OrientDB ";
 choices[32][2] = "InfoGrid ";
 choices[32][3] = "SimpleDB";
 answers[32] = choices[32][3];
 units[32] = "73";
 comments[32] = "Id Pregunta: 655. ";
 preguntaids[32] = 655


//  Id pregunta: 314 Año de creación de pregunta: 2016
 questions[33]= "34)  Indique a qui&eacute;n corresponde la funci&oacute;n de ejecutar el presupuesto de la Uni&oacute;n Europea:";
 choices[33]= new Array();
 choices[33][0] = "Al Consejo Europeo.";
 choices[33][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[33][2] = "A la Comisi&oacute;n Europea.";
 choices[33][3] = "Al Parlamento Europeo.";
 answers[33] = choices[33][2];
 units[33] = "5";
 comments[33] = "Id Pregunta: 314. UNION EUROPEA";
 preguntaids[33] = 314


//  Id pregunta: 845 Año de creación de pregunta: 2016
 questions[34]= "35)  Respecto a la reutilizaci&oacute;n de sistemas y aplicaciones de propiedad de la Administraci&oacute;n:";
 choices[34]= new Array();
 choices[34][0] = "Las Administraciones pondr&aacute;n siempre a disposici&oacute;n de cualquiera de ellas que lo solicite las aplicaciones, desarrolladas por sus servicios o que hayan sido objeto de contrataci&oacute;n y de cuyos derechos de propiedad intelectual sean titulares.";
 choices[34][1] = "Las aplicaciones a las que se refiere el apartado anterior podr&aacute;n ser declaradas como de fuentes abiertas, cuando de ello se derive una mayor transparencia en el funcionamiento de la Administraci&oacute;n P&uacute;blica o se fomente con ello la incorporaci&oacute;n de los ciudadanos a la Sociedad de la informaci&oacute;n.";
 choices[34][2] = "Las Administraciones P&uacute;blicas, con car&aacute;cter posterior a la adquisici&oacute;n, desarrollo o al mantenimiento a lo largo de todo el ciclo de vida de una aplicaci&oacute;n, tanto si se realiza con medios propios o por la contrataci&oacute;n de los servicios correspondientes, deber&aacute;n consultar en el directorio general de aplicaciones.";
 choices[34][3] = "En el directorio general de aplicaciones constar&aacute;n las aplicaciones disponibles de la Administraci&oacute;n General del Estado.";
 answers[34] = choices[34][1];
 units[34] = "4, 7, 8, 9";
 comments[34] = "Id Pregunta: 845. Ley 40/2015";
 preguntaids[34] = 845


//  Id pregunta: 659 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Qu&eacute; es el machine learning?";
 choices[35]= new Array();
 choices[35][0] = "El uso de los datos para el desarrollo de mecanismos de predicci&oacute;n y aprendizaje";
 choices[35][1] = "l uso de datos para la automatizaci&oacute;n de tareas repetitivas";
 choices[35][2] = "El aprendizaje de mecanismos de monitorizaci&oacute;n y alertas";
 choices[35][3] = "Un paradigma en el desarrollo de mecanismos de control ";
 answers[35] = choices[35][0];
 units[35] = "73";
 comments[35] = "Id Pregunta: 659. ";
 preguntaids[35] = 659


//  Id pregunta: 700 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Qu&eacute; es SonarQube?";
 choices[36]= new Array();
 choices[36][0] = "Una m&eacute;trica de calidad orientada a estandarizar la evaluaci&oacute;n cualitativa del c&oacute;digo fuente.";
 choices[36][1] = "Una plataforma Open Source de inspecci&oacute;n continua de la calidad del c&oacute;digo.";
 choices[36][2] = "Una herramienta propietaria para la integraci&oacute;n continua, integrada en Apache Jenkins.";
 choices[36][3] = "Una herramienta multiplataforma para la evaluaci&oacute;n de la calidad en el c&oacute;digo desarrollada en VisualBasic 6.";
 answers[36] = choices[36][2];
 units[36] = "92";
 comments[36] = "Id Pregunta: 700. INTEGRACION CONTINUA";
 preguntaids[36] = 700


//  Id pregunta: 754 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Agenda Digital para Espa&ntilde;a?";
 choices[37]= new Array();
 choices[37][0] = "Aumentar los beneficios empresariales mediante las TIC";
 choices[37][1] = "Promover la inclusi&oacute;n digital y la empleabilidad";
 choices[37][2] = "Fomentar el despliegue de redes y servicios";
 choices[37][3] = "Mejorar la administraci&oacute;n electr&oacute;nica";
 answers[37] = choices[37][0];
 units[37] = "19";
 comments[37] = "Id Pregunta: 754. Agenda Digital para Espa&ntilde;a";
 preguntaids[37] = 754


//  Id pregunta: 698 Año de creación de pregunta: 2016
 questions[38]= "39)  Se&ntilde;ale el que corresponde a un principio de integraci&oacute;n continua:";
 choices[38]= new Array();
 choices[38][0] = "Migraci&oacute;n manual y controlada a cada entorno de desarrollo";
 choices[38][1] = "Mantener un repositorio de c&oacute;digo.";
 choices[38][2] = "Reutilizaci&oacute;n de interfaces de usuario.";
 choices[38][3] = "Todos corresponden a principios de integraci&oacute;n continua.";
 answers[38] = choices[38][1];
 units[38] = "92";
 comments[38] = "Id Pregunta: 698. INTEGRACION CONTINUA";
 preguntaids[38] = 698


//  Id pregunta: 470 Año de creación de pregunta: 2016
 questions[39]= "40)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, elaborar la documentaci&oacute;n estad&iacute;stico-contable de car&aacute;cter oficial del Sistema de la Seguridad Social es una competencia de:";
 choices[39]= new Array();
 choices[39][0] = "El Ministerio de Hacienda.";
 choices[39][1] = "El Ministerio de Econom&iacute;a.";
 choices[39][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[39][3] = "Ninguna de las respuestas es correcta.";
 answers[39] = choices[39][2];
 units[39] = "10";
 comments[39] = "Id Pregunta: 470. PRESUPUESTOS GENERALES";
 preguntaids[39] = 470


//  Id pregunta: 551 Año de creación de pregunta: 2016
 questions[40]= "41)  El presidente del pleno de la Comisi&oacute;n de Estrategia TIC es :";
 choices[40]= new Array();
 choices[40][0] = "El Ministro de Energ&iacute;a, Turismo y Agenda Digital";
 choices[40][1] = "El Ministro de Hacienda y Administraciones P&uacute;blicas";
 choices[40][2] = "El Presidente del Gobierno";
 choices[40][3] = "El Secretario General de Administraci&oacute;n Digital";
 answers[40] = choices[40][1];
 units[40] = "26";
 comments[40] = "Id Pregunta: 551. Gobernanza TIC";
 preguntaids[40] = 551


//  Id pregunta: 137 Año de creación de pregunta: 2016
 questions[41]= "42)  La creaci&oacute;n de la Autoridad Independiente de Responsabilidad Fiscal, dentro de la Ley Org&aacute;nica 6/2013, tiene por objeto:";
 choices[41]= new Array();
 choices[41][0] = "Garantizar el cumplimiento efectivo por las Administraciones P&uacute;blicas del principio de estabilidad presupuestaria previsto en el art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola.";
 choices[41][1] = "La evaluaci&oacute;n continua del ciclo presupuestario, del endeudamiento p&uacute;blico, y el an&aacute;lisis de las previsiones econ&oacute;micas.";
 choices[41][2] = "Ejercer sus funciones con autonom&iacute;a e independencia funcional respecto de las Administraciones P&uacute;blicas.";
 choices[41][3] = "Todos las anteriores son ciertas.";
 answers[41] = choices[41][3];
 units[41] = "12";
 comments[41] = "Id Pregunta: 137. Leyes modelo econ&oacute;mico";
 preguntaids[41] = 137


//  Id pregunta: 757 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Cu&aacute;l de los siguientes no es uno de los planes y actuaciones recogidos en la Agenda Digital para Espa&ntilde;a?";
 choices[42]= new Array();
 choices[42][0] = "Plan Nacional de Ciudades Inteligentes";
 choices[42][1] = "Plan Digital de Protecci&oacute;n del Medioambiente";
 choices[42][2] = "Plan de Impulso de las Tecnolog&iacute;as del Lenguaje";
 choices[42][3] = "Desarrollo e innovaci&oacute;n del sector TIC";
 answers[42] = choices[42][1];
 units[42] = "19";
 comments[42] = "Id Pregunta: 757. Agenda Digital para Espa&ntilde;a";
 preguntaids[42] = 757


//  Id pregunta: 543 Año de creación de pregunta: 2016
 questions[43]= "44)  Se&ntilde;ala la correcta:";
 choices[43]= new Array();
 choices[43][0] = "la falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n impedir&aacute; que se tenga por realizado el acto de que se trate";
 choices[43][1] = "el documento electr&oacute;nico que acredite el resultado de la consulta al registro electr&oacute;nico de apoderamientos correspondiente tendr&aacute; la condici&oacute;n de acreditaci&oacute;n a estos efectos";
 choices[43][2] = "los registros electr&oacute;nicos generales y particulares de apoderamientos pertenecientes a todas y cada una de las Administraciones, ser&aacute;n preferiblemente interoperables entre s&iacute;";
 choices[43][3] = "el interesado no podr&aacute; comparecer por s&iacute; mismo en un procedimiento en el que haya designado representante";
 answers[43] = choices[43][1];
 units[43] = "7";
 comments[43] = "Id Pregunta: 543. LEY 39/2015";
 preguntaids[43] = 543


//  Id pregunta: 197 Año de creación de pregunta: 2016
 questions[44]= "45)  Los reglamentos aprobados en el ejercicio de la potestad reglamentaria no pueden:";
 choices[44]= new Array();
 choices[44][0] = "Establecer tributos.";
 choices[44][1] = "Desarrollar lo establecido en una Ley.";
 choices[44][2] = "Modificar los plazos para presentar recursos administrativos.";
 choices[44][3] = "Crear un &oacute;rgano colegiado interministerial.";
 answers[44] = choices[44][0];
 units[44] = "1";
 comments[44] = "Id Pregunta: 197. CONSTITUCION1978";
 preguntaids[44] = 197


//  Id pregunta: 23 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Cu&aacute;l de los siguientes lenguajes propone el W3C para consultar datos en formato RDF?";
 choices[45]= new Array();
 choices[45][0] = "SPARQL";
 choices[45][1] = "UnQL";
 choices[45][2] = "XQUERY";
 choices[45][3] = "RQL";
 answers[45] = choices[45][0];
 units[45] = "74";
 comments[45] = "Id Pregunta: 23. AGE A1 2015";
 preguntaids[45] = 23


//  Id pregunta: 253 Año de creación de pregunta: 2016
 questions[46]= "47)  La Constituci&oacute;n Espa&ntilde;ola establece sobre la inform&aacute;tica que:";
 choices[46]= new Array();
 choices[46][0] = "La Ley potenciar&aacute; el uso de la inform&aacute;tica para garantizar la libertad de residencia y las transacciones electr&oacute;nicas en el marco de la econom&iacute;a de mercado y la planificaci&oacute;n del desarrollo econ&oacute;mico nacional.";
 choices[46][1] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el secreto de las comunicaciones, la informaci&oacute;n veraz y la solidaridad entre todos los ciudadanos.";
 choices[46][2] = "En la Constituci&oacute;n Espa&ntilde;ola de 1978 no se hace referencia expresa a la inform&aacute;tica.";
 choices[46][3] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el honor y la intimidad personal y familiar de los ciudadanos y el pleno ejercicio de sus derechos.";
 answers[46] = choices[46][3];
 units[46] = "1";
 comments[46] = "Id Pregunta: 253. CONSTITUCION1978";
 preguntaids[46] = 253


//  Id pregunta: 709 Año de creación de pregunta: 2016
 questions[47]= "48)  En base a la Ley 19/2013 de Transparencia, Acceso a la Informaci&oacute;n P&uacute;blica y Buen Gobierno se&ntilde;ale la afirmaci&oacute;n verdadera:";
 choices[47]= new Array();
 choices[47][0] = "El derecho de acceso a la informaci&oacute;n p&uacute;blica supone, entre otros, que el sujeto obligado a ello publique de forma peri&oacute;dica y actualizada la informaci&oacute;n cuyo conocimiento sea relevante para garantizar la transparencia de su actividad.";
 choices[47][1] = "Las entidades privadas no est&aacute;n sujetas a obligaciones de transparencia seg&uacute;n la Ley 19/2013.";
 choices[47][2] = "Se admitir&aacute;n a tr&aacute;mite, sin excepci&oacute;n, todas las solicitudes de acceso a la informaci&oacute;n por parte de los ciudadanos.";
 choices[47][3] = "El cumplimiento por la Administraci&oacute;n General del Estado de las obligaciones de publicidad activa ser&aacute; objeto de control por parte del CTBG.";
 answers[47] = choices[47][3];
 units[47] = "22";
 comments[47] = "Id Pregunta: 709. Ley de transparencia";
 preguntaids[47] = 709


//  Id pregunta: 90 Año de creación de pregunta: 2016
 questions[48]= "49)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad (ENS) en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, el an&aacute;lisis y gesti&oacute;n de riesgos es una parte esencial del proceso de seguridad, debiendo mantenerse permanentemente actualizado. Para ello, el propio ENS establece que se debe realizar un an&aacute;lisis de riesgos formal para los sistemas de:";
 choices[48]= new Array();
 choices[48][0] = "Categor&iacute;a b&aacute;sica";
 choices[48][1] = "Categor&iacute;a media";
 choices[48][2] = "Categor&iacute;a alta";
 choices[48][3] = "Categor&iacute;a media y alta";
 answers[48] = choices[48][2];
 units[48] = "46";
 comments[48] = "Id Pregunta: 90. AGE A1 2015";
 preguntaids[48] = 90


//  Id pregunta: 537 Año de creación de pregunta: 2016
 questions[49]= "50)  Dispondr&aacute;/n de un registro electr&oacute;nico general de apoderamientos:";
 choices[49]= new Array();
 choices[49][0] = "la Administraci&oacute;n General del Estado";
 choices[49][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[49][2] = "las Entidades Locales";
 choices[49][3] = "todas son correctas";
 answers[49] = choices[49][3];
 units[49] = "7";
 comments[49] = "Id Pregunta: 537. LEY 39/2015";
 preguntaids[49] = 537


//  Id pregunta: 816 Año de creación de pregunta: 2016
 questions[50]= "51)  Podr&aacute;n crearse por Real Decreto Subdelegaciones del Gobierno en las Comunidades Aut&oacute;nomas uniprovinciales, cuando lo justifiquen circunstancias como:";
 choices[50]= new Array();
 choices[50][0] = "la poblaci&oacute;n del territorio";
 choices[50][1] = "el volumen de gesti&oacute;n";
 choices[50][2] = "sus singularidades geogr&aacute;ficas, sociales o econ&oacute;micas";
 choices[50][3] = "todas son correctas";
 answers[50] = choices[50][3];
 units[50] = "4, 7, 8, 9";
 comments[50] = "Id Pregunta: 816. Ley 40/2015";
 preguntaids[50] = 816


//  Id pregunta: 829 Año de creación de pregunta: 2016
 questions[51]= "52)  La recusaci&oacute;n se plantea...";
 choices[51]= new Array();
 choices[51][0] = "Antes de iniciado el procedimiento";
 choices[51][1] = "Una vez iniciado el procedimiento";
 choices[51][2] = "Cuando el instructor dicta propuesta de resoluci&oacute;n";
 choices[51][3] = "En cualquier momento del procedimiento";
 answers[51] = choices[51][0];
 units[51] = "4, 7, 8, 9";
 comments[51] = "Id Pregunta: 829. Ley 40/2015";
 preguntaids[51] = 829


//  Id pregunta: 746 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes NO es uno de los principios de la Ley de Garant&iacute;a de la Unidad de Mercado?";
 choices[52]= new Array();
 choices[52][0] = "No discriminaci&oacute;n";
 choices[52][1] = "Cooperaci&oacute;n";
 choices[52][2] = "Colaboraci&oacute;n";
 choices[52][3] = "Todos los anteriores son principios de la Ley de Garant&iacute;a de la Unidad de Mercado";
 answers[52] = choices[52][2];
 units[52] = "23";
 comments[52] = "Id Pregunta: 746. Direcci&oacute;n p&uacute;blica";
 preguntaids[52] = 746


//  Id pregunta: 115 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;Qu&eacute; Tratado Europeo introduce un t&iacute;tulo dedicado al empleo en el Tratado de Roma?";
 choices[53]= new Array();
 choices[53][0] = "El Tratado de Lisboa";
 choices[53][1] = "El Tratado de Amsterdam";
 choices[53][2] = "El Tratado de Niza";
 choices[53][3] = "El Acta &Uacute;nica Europea";
 answers[53] = choices[53][1];
 units[53] = "15";
 comments[53] = "Id Pregunta: 115. ";
 preguntaids[53] = 115


//  Id pregunta: 701 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;Qu&eacute; es la integraci&oacute;n continua?";
 choices[54]= new Array();
 choices[54][0] = "Una pr&aacute;ctica recogida en la metodolog&iacute;a M&eacute;trica V3.";
 choices[54][1] = "Un modelo inform&aacute;tico que consiste en hacer integraciones autom&aacute;ticas de un proyecto lo m&aacute;s a menudo posible para as&iacute; poder detectar fallos cuanto antes.";
 choices[54][2] = "Una metodolog&iacute;a &aacute;gil inspirada en XP y FDD encaminada a realizar un desarrollo hol&iacute;stico en todo el proceso de desarrollo de un sistema de informaci&oacute;n.";
 choices[54][3] = "Ninguna de las anteriores.";
 answers[54] = choices[54][1];
 units[54] = "92";
 comments[54] = "Id Pregunta: 701. INTEGRACION CONTINUA";
 preguntaids[54] = 701


//  Id pregunta: 609 Año de creación de pregunta: 2016
 questions[55]= "56)  Seg&uacute;n Magerit v3, en el desarrollo de sistemas de informaci&oacute;n:";
 choices[55]= new Array();
 choices[55][0] = "La seguridad debe estar embebida en el sistema desde su primera concepci&oacute;n.";
 choices[55][1] = "La seguridad comenzar&aacute; a considerarse formalmente cuando finalice el proceso de implantaci&oacute;n de sistemas de informaci&oacute;n.";
 choices[55][2] = "La seguridad del sistema de informaci&oacute;n es m&aacute;s econ&oacute;mica implantarla una vez puesto en producci&oacute;n el sistema de informaci&oacute;n que tenerla en consideraci&oacute;n durante el desarrollo del sistema.";
 choices[55][3] = "La seguridad s&oacute;lo ralentiza el proceso de desarrollo de sistemas de informaci&oacute;n por lo que s&oacute;lo se debe considerar en aquellos sistemas que usen datos econ&oacute;micos.";
 answers[55] = choices[55][0];
 units[55] = "45";
 comments[55] = "Id Pregunta: 609. Junta de Extremadura A1 2015";
 preguntaids[55] = 609


//  Id pregunta: 617 Año de creación de pregunta: 2016
 questions[56]= "57)  El establecimiento de una conexi&oacute;n mediante el protocolo TCP, b&aacute;sicamente se realiza de la siguiente manera:";
 choices[56]= new Array();
 choices[56][0] = "Emisor: env&iacute;a SYN. Receptor: env&iacute;a SYN+ACK. Emisor: env&iacute;a ACK.";
 choices[56][1] = "Emisor: env&iacute;a ACK. Receptor: env&iacute;a ACK+SYN. Emisor: env&iacute;a SYN.";
 choices[56][2] = "Emisor: env&iacute;a SYN. Receptor: env&iacute;a ACK.";
 choices[56][3] = "Emisor: env&iacute;a ACK. Receptor: env&iacute;a SYN.";
 answers[56] = choices[56][0];
 units[56] = "109";
 comments[56] = "Id Pregunta: 617. Junta de Extremadura A1 2015";
 preguntaids[56] = 617


//  Id pregunta: 64 Año de creación de pregunta: 2016
 questions[57]= "58)  De entre los siguientes sistemas operativos para dispositivos m&oacute;viles, indique cu&aacute;l est&aacute; afectado por la vulnerabilidad Stagefright:";
 choices[57]= new Array();
 choices[57][0] = "Windows Phone";
 choices[57][1] = "Blackberry";
 choices[57][2] = "iOS";
 choices[57][3] = "Android";
 answers[57] = choices[57][3];
 units[57] = "59";
 comments[57] = "Id Pregunta: 64. AGE A1 2015";
 preguntaids[57] = 64


//  Id pregunta: 557 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Qui&eacute;nes son los beneficiarios de la estrategia para el Mercado &Uacute;nico Digital en la UE?";
 choices[58]= new Array();
 choices[58][0] = "Consumidores";
 choices[58][1] = "PYMES y Start-ups";
 choices[58][2] = "La Industria";
 choices[58][3] = "Todos los anteriores";
 answers[58] = choices[58][3];
 units[58] = "17";
 comments[58] = "Id Pregunta: 557. Mercado &Uacute;nico Digital";
 preguntaids[58] = 557


//  Id pregunta: 151 Año de creación de pregunta: 2016
 questions[59]= "60)  Seg&uacute;n la ley 39/2015, est&aacute;n obligados a relacionarse a trav&eacute;s de medios electr&oacute;nicos con las Administraciones P&uacute;blicas para la realizaci&oacute;n de cualquier tr&aacute;mite de un procedimiento administrativo: (se&ntilde;ala la respuesta incorrecta)";
 choices[59]= new Array();
 choices[59][0] = "las personas jur&iacute;dicas ";
 choices[59][1] = "las entidades con personalidad jur&iacute;dica";
 choices[59][2] = "los empleados de las Administraciones P&uacute;blicas para los tr&aacute;mites y actuaciones que realicen con ellas por raz&oacute;n de su condici&oacute;n de empleado p&uacute;blico";
 choices[59][3] = "quienes representen a un interesado que est&eacute; obligado legalmente a relacionarse electr&oacute;nicamente con la Administraci&oacute;n";
 answers[59] = choices[59][1];
 units[59] = "7";
 comments[59] = "Id Pregunta: 151. Ley 39/2015, Art&iacute;culo 14";
 preguntaids[59] = 151


//  Id pregunta: 644 Año de creación de pregunta: 2016
 questions[60]= "61)  En Itil V3 la Gesti&oacute;n de la Cartera de Servicios pertenece a la fase de ciclo de vida:";
 choices[60]= new Array();
 choices[60][0] = "Dise&ntilde;o del servicio.";
 choices[60][1] = "Transici&oacute;n del servicio.";
 choices[60][2] = "Estrategia del servicio.";
 choices[60][3] = "Operaci&oacute;n del servicio.";
 answers[60] = choices[60][2];
 units[60] = "101";
 comments[60] = "Id Pregunta: 644. Junta de Extremadura A1 2015";
 preguntaids[60] = 644


//  Id pregunta: 568 Año de creación de pregunta: 2016
 questions[61]= "62)  Cuando decimos que la inversi&oacute;n extranjera en Espa&ntilde;a tiene un car&aacute;cter proc&iacute;clico, nos referimos a que:";
 choices[61]= new Array();
 choices[61][0] = "Aumenta cuando la econom&iacute;a est&aacute; en crecimiento, y se reduce cuando el pa&iacute;s entra en recesi&oacute;n";
 choices[61][1] = "Se reduce cuando la econom&iacute;a est&aacute; en crecimiento, y aumenta cuando el pa&iacute;s entra en recesi&oacute;n";
 choices[61][2] = "Aumenta cuando el pa&iacute;s entra en recesi&oacute;n, y aumenta cuando la econom&iacute;a est&aacute; en crecimiento";
 choices[61][3] = "Se reduce cuando el pa&iacute;s entra en recesi&oacute;n, y se reduce cuando la econom&iacute;a est&aacute; en crecimiento";
 answers[61] = choices[61][0];
 units[61] = "12";
 comments[61] = "Id Pregunta: 568. Modelo econ&oacute;mico";
 preguntaids[61] = 568


//  Id pregunta: 812 Año de creación de pregunta: 2016
 questions[62]= "63)  Existir&aacute; una Delegaci&oacute;n del Gobierno en:";
 choices[62]= new Array();
 choices[62][0] = "la capital del pa&iacute;s";
 choices[62][1] = "cada una de las Comunidades Aut&oacute;nomas";
 choices[62][2] = "cada una de las provincias";
 choices[62][3] = "cada una de las embajadas espa&ntilde;olas";
 answers[62] = choices[62][1];
 units[62] = "4, 7, 8, 9";
 comments[62] = "Id Pregunta: 812. Ley 40/2015";
 preguntaids[62] = 812


//  Id pregunta: 329 Año de creación de pregunta: 2016
 questions[63]= "64)  Si el Consejo en alg&uacute;n acuerdo necesita de mayor&iacute;a cualificada se produce:";
 choices[63]= new Array();
 choices[63][0] = "Acuerdos cualificados.";
 choices[63][1] = "Acuerdos ponderados.";
 choices[63][2] = "Valoraci&oacute;n de los votos.";
 choices[63][3] = "Ponderaci&oacute;n de los votos.";
 answers[63] = choices[63][3];
 units[63] = "5";
 comments[63] = "Id Pregunta: 329. UNION EUROPEA";
 preguntaids[63] = 329


//  Id pregunta: 621 Año de creación de pregunta: 2016
 questions[64]= "65)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[64]= new Array();
 choices[64][0] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: la identificaci&oacute;n de clases sem&aacute;nticas, atributos y servicios; identificaci&oacute;n de las relaciones entre clases; el emplazamiento de las clases, atributos y servicios; la especificaci&oacute;n del comportamiento din&aacute;mico mediante paso de mensajes.";
 choices[64][1] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: a&ntilde;adir las clases interfaz, base y utilidad; refinar las clases sem&aacute;nticas.";
 choices[64][2] = "En el An&aacute;lisis Orientado a Objetos, deben llevarse a cabo las siguientes actividades: toma inicial de requisitos; an&aacute;lisis; dise&ntilde;o; implementaci&oacute;n.";
 choices[64][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[64] = choices[64][1];
 units[64] = "89";
 comments[64] = "Id Pregunta: 621. Junta de Extremadura A1 2015";
 preguntaids[64] = 621


//  Id pregunta: 758 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Cu&aacute;l de los siguientes no es uno de los pilares en que se basa la Agenda Digital Europea?";
 choices[65]= new Array();
 choices[65][0] = "Promover un acceso a internet r&aacute;pido y ultrarr&aacute;pido para todos";
 choices[65][1] = "Implantar el mercado general europeo";
 choices[65][2] = "Fomentar la alfabetizaci&oacute;n, la capacitaci&oacute;n y la inclusi&oacute;n digitales";
 choices[65][3] = "Consolidar la confianza y la seguridad en l&iacute;nea";
 answers[65] = choices[65][1];
 units[65] = "19";
 comments[65] = "Id Pregunta: 758. Agenda Digital Europea";
 preguntaids[65] = 758


//  Id pregunta: 777 Año de creación de pregunta: 2016
 questions[66]= "67)  Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos:";
 choices[66]= new Array();
 choices[66][0] = "las unidades administrativas a las que se les atribuyan funciones que no tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo";
 choices[66][1] = "las unidades administrativas a las que se les atribuyan funciones que no tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo";
 choices[66][2] = "las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo";
 choices[66][3] = "las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo";
 answers[66] = choices[66][3];
 units[66] = "4, 7, 8, 9";
 comments[66] = "Id Pregunta: 777. Ley 40/2015";
 preguntaids[66] = 777


//  Id pregunta: 628 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Cu&aacute;l es el &oacute;rgano encargado de las funciones de instrucci&oacute;n de expedientes dentro de la Comisi&oacute;n Nacional de los Mercados y la Competencia en materia de comunicaciones electr&oacute;nicas?";
 choices[67]= new Array();
 choices[67][0] = "La Direcci&oacute;n de Telecomunicaciones y del Sector Audiovisual.";
 choices[67][1] = "La Direcci&oacute;n de la Competencia.";
 choices[67][2] = "La Direcci&oacute;n de la Energ&iacute;a.";
 choices[67][3] = "La Direcci&oacute;n de Transportes y del Sector Postal.";
 answers[67] = choices[67][0];
 units[67] = "121";
 comments[67] = "Id Pregunta: 628. Junta de Extremadura A1 2015";
 preguntaids[67] = 628


//  Id pregunta: 579 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Cu&aacute;ndo fue aprobada la Estrategia TIC?";
 choices[68]= new Array();
 choices[68][0] = "El 2 de Octubre de 2015";
 choices[68][1] = "El 15 de Septiembre de 2015";
 choices[68][2] = "El 1 de Octubre de 2015";
 choices[68][3] = "El 5 de Octubre de 2015";
 answers[68] = choices[68][0];
 units[68] = "19";
 comments[68] = "Id Pregunta: 579. Estrategia TIC";
 preguntaids[68] = 579


//  Id pregunta: 540 Año de creación de pregunta: 2016
 questions[69]= "70)  Ser&aacute;/n interoperable/s con los registros electr&oacute;nicos generales y particulares de apoderamientos:";
 choices[69]= new Array();
 choices[69][0] = "los registros mercantiles";
 choices[69][1] = "los registros de la propiedad";
 choices[69][2] = "los protocolos notariales";
 choices[69][3] = "todas son correctas";
 answers[69] = choices[69][3];
 units[69] = "7";
 comments[69] = "Id Pregunta: 540. LEY 39/2015";
 preguntaids[69] = 540


//  Id pregunta: 335 Año de creación de pregunta: 2016
 questions[70]= "71)  Un diputado del Parlamento Europeo, de nacionalidad espa&ntilde;ola, &iquest;puede ser tambi&eacute;n Diputado en el Congreso espa&ntilde;ol?:";
 choices[70]= new Array();
 choices[70][0] = "Son compatibles, lo que no puede compatibilizar es ser funcionario de cualquiera de las Instituciones Europeas.";
 choices[70][1] = "Son compatibles, lo que no puede compatibilizar es ser miembro del Tribunal de Justicia de Luxemburgo.";
 choices[70][2] = "Son incompatibles ambas actas de diputado.";
 choices[70][3] = "Son perfectamente compatibles ambas actas de diputado.";
 answers[70] = choices[70][2];
 units[70] = "5";
 comments[70] = "Id Pregunta: 335. UNION EUROPEA";
 preguntaids[70] = 335


//  Id pregunta: 278 Año de creación de pregunta: 2016
 questions[71]= "72)  Respecto al Consejo de Transparencia y Buen Gobierno:";
 choices[71]= new Array();
 choices[71][0] = "Su estatuto entra en vigor el 10 de diciembre de 2014.";
 choices[71][1] = "Estatuto se estructura en cinco cap&iacute;tulos.";
 choices[71][2] = "El Consejo de Ministros aprobar&aacute;, en el plazo de tres meses desde la publicaci&oacute;n de la Ley 19/2013 en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, un Real Decreto por el que se apruebe el Estatuto org&aacute;nico del Consejo de Transparencia y Buen Gobierno.";
 choices[71][3] = "Su estatuto se regula por el Real Decreto 919/2014, de 31 de octubre.";
 answers[71] = choices[71][1];
 units[71] = "22";
 comments[71] = "Id Pregunta: 278. LEY DE TRANSPARENCIA";
 preguntaids[71] = 278


//  Id pregunta: 426 Año de creación de pregunta: 2016
 questions[72]= "73)  La aprobaci&oacute;n de convocatorias de pruebas selectivas para el acceso al empleo p&uacute;blico deber&aacute; acompa&ntilde;arse de:";
 choices[72]= new Array();
 choices[72][0] = "Un plan de igualdad.";
 choices[72][1] = "Un informe de impacto de g&eacute;nero.";
 choices[72][2] = "Un programa de igualdad.";
 choices[72][3] = "Todas son correctas.";
 answers[72] = choices[72][1];
 units[72] = "14";
 comments[72] = "Id Pregunta: 426. POLITICAS DE IGUALDAD";
 preguntaids[72] = 426


//  Id pregunta: 80 Año de creación de pregunta: 2016
 questions[73]= "74)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, se&ntilde;ale la respuesta correcta respecto a la auditor&iacute;a de seguridad:";
 choices[73]= new Array();
 choices[73][0] = "Se realizar&aacute;, al menos, cada dieciocho meses para los sistemas de todas las categor&iacute;as, y con car&aacute;cter extraordinario, siempre que se produzcan modificaciones sustanciales en el sistema de informaci&oacute;n, que puedan repercutir en las medidas de seguridad requeridas.";
 choices[73][1] = "El equipo auditor, en el dise&ntilde;o de sus pruebas y revisiones, debe limitarse a la revisi&oacute;n de documentos facilitados por los responsables de la informaci&oacute;n, del servicio y de seguridad.";
 choices[73][2] = "Cuando existan razones que lo justifiquen, dentro de las tareas de la auditoria de seguridad podr&aacute;n incluirse adem&aacute;s la ejecuci&oacute;n de trabajos de consultor&iacute;a.";
 choices[73][3] = "El informe de auditor&iacute;a deber&aacute; dictaminar sobre la adecuaci&oacute;n de las medidas exigidas por el Esquema Nacional de Seguridad, identificar sus deficiencias y proponer las medidas correctoras o complementarias necesarias.";
 answers[73] = choices[73][3];
 units[73] = "46";
 comments[73] = "Id Pregunta: 80. AGE A1 2015";
 preguntaids[73] = 80


//  Id pregunta: 765 Año de creación de pregunta: 2016
 questions[74]= "75)  La presente Ley se aplica al sector p&uacute;blico que comprende (se&ntilde;ala la incorrecta):";
 choices[74]= new Array();
 choices[74][0] = "la Administraci&oacute;n General del Estado";
 choices[74][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[74][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[74][3] = "el sector p&uacute;blico y privado institucional";
 answers[74] = choices[74][3];
 units[74] = "4, 7, 8, 9";
 comments[74] = "Id Pregunta: 765. Ley 40/2015";
 preguntaids[74] = 765


