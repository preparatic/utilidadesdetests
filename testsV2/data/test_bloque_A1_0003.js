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

//  Id pregunta: 791 Año de creación de pregunta: 2016
 questions[0]= "1)  En la Administraci&oacute;n General del Estado en el exterior son &oacute;rganos directivos:";
 choices[0]= new Array();
 choices[0][0] = "los Ministros y los Secretarios de Estado";
 choices[0][1] = "los Subsecretarios y Secretarios generales";
 choices[0][2] = "los embajadores y representantes permanentes ante Organizaciones internacionales";
 choices[0][3] = "los Directores generales";
 answers[0] = choices[0][2];
 units[0] = "4, 7, 8, 9";
 comments[0] = "Id Pregunta: 791. Ley 40/2015";


//  Id pregunta: 806 Año de creación de pregunta: 2016
 questions[1]= "2)  A los Directores generales les corresponde (se&ntilde;ala la incorrecta):";
 choices[1]= new Array();
 choices[1][0] = "proponer los proyectos de su Direcci&oacute;n general para alcanzar los objetivos establecidos por el Ministro, dirigir su ejecuci&oacute;n y controlar su adecuado cumplimiento";
 choices[1][1] = "solicitar del Ministerio de Hacienda y Administraciones P&uacute;blicas la afectaci&oacute;n o el arrendamiento de los inmuebles necesarios para el cumplimiento de los fines de los servicios a cargo del Departamento";
 choices[1][2] = "ejercer las competencias atribuidas a la Direcci&oacute;n general y las que le sean desconcentradas o delegadas";
 choices[1][3] = "impulsar y supervisar las actividades que forman parte de la gesti&oacute;n ordinaria del &oacute;rgano directivo y velar por el buen funcionamiento de los &oacute;rganos y unidades dependientes y del personal integrado en los mismos";
 answers[1] = choices[1][1];
 units[1] = "4, 7, 8, 9";
 comments[1] = "Id Pregunta: 806. Ley 40/2015";


//  Id pregunta: 288 Año de creación de pregunta: 2016
 questions[2]= "3)  Cu&aacute;l no es uno de los pilares que cimientan el Plan de Acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[2]= new Array();
 choices[2][0] = "Configuraci&oacute;n de un marco que habilite la movilidad transfronteriza mediante los servicios p&uacute;blicos digitales;";
 choices[2][1] = "Facilitar la interacci&oacute;n digital con ciudadanos y empresas mediante AA.PP. abiertas y flexibles que impliquen a los actores interesados en el dise&ntilde;o de pol&iacute;ticas y servicios de una forma colaborativa;";
 choices[2][2] = "Sociedad digital integradora, donde los ciudadanos tengan las cualificaciones adecuadas para aprovechar las oportunidades ofrecidas por Internet.";
 choices[2][3] = "Puesta a disposici&oacute;n de habilitadores y facilitadores claves, servicios y activos reutilizables.";
 answers[2] = choices[2][2];
 units[2] = "5";
 comments[2] = "Id Pregunta: 288. UNION EUROPEA";


//  Id pregunta: 302 Año de creación de pregunta: 2016
 questions[3]= "4)  El Presidente del Tribunal de Cuentas es elegido para un per&iacute;odo de:";
 choices[3]= new Array();
 choices[3][0] = "Cinco a&ntilde;os.";
 choices[3][1] = "Cuatro a&ntilde;os.";
 choices[3][2] = "Tres a&ntilde;os.";
 choices[3][3] = "Seis meses.";
 answers[3] = choices[3][2];
 units[3] = "5";
 comments[3] = "Id Pregunta: 302. UNION EUROPEA";


//  Id pregunta: 321 Año de creación de pregunta: 2016
 questions[4]= "5)  Indique el n&uacute;mero de Diputados del Parlamento Europeo que actualmente le corresponden a Espa&ntilde;a:";
 choices[4]= new Array();
 choices[4][0] = "Cincuenta y cuatro.";
 choices[4][1] = "Cincuenta.";
 choices[4][2] = "Cincuenta y cinco.";
 choices[4][3] = "Cincuenta y dos.";
 answers[4] = choices[4][1];
 units[4] = "5";
 comments[4] = "Id Pregunta: 321. UNION EUROPEA";


//  Id pregunta: 358 Año de creación de pregunta: 2016
 questions[5]= "6)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones no es correcta:";
 choices[5]= new Array();
 choices[5][0] = "a)La Uni&oacute;n Europea no es a&uacute;n una estructura acabada, sino m&aacute;s bien un sistema de gestaci&oacute;n cuya apariencia definitiva a&uacute;n no puede preverse.";
 choices[5][1] = "b) La Uni&oacute;n Europea no es un proceso de integraci&oacute;n sino una Organizaci&oacute;n Internacional sui generis.";
 choices[5][2] = "c) Todas las respuestas son correctas.";
 choices[5][3] = "d)La Uni&oacute;n Europea s&oacute;lo tiene en com&uacute;n con las organizaciones tradicionales de derecho internacional que tambi&eacute;n han sido creadas mediante un tratado internacional.";
 answers[5] = choices[5][1];
 units[5] = "5";
 comments[5] = "Id Pregunta: 358. UNION EUROPEA";


//  Id pregunta: 361 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Qu&eacute; instituci&oacute;n encarna por excelencia los intereses comunitarios?:";
 choices[6]= new Array();
 choices[6][0] = "El Consejo Europeo.";
 choices[6][1] = "El Parlamento Europeo.";
 choices[6][2] = "El Consejo.";
 choices[6][3] = "La Comisi&oacute;n.";
 answers[6] = choices[6][3];
 units[6] = "5";
 comments[6] = "Id Pregunta: 361. UNION EUROPEA";


//  Id pregunta: 762 Año de creación de pregunta: 2016
 questions[7]= "8)  La Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico, establece y regula (se&ntilde;ala la incorrecta):";
 choices[7]= new Array();
 choices[7][0] = "las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[7][1] = "los principios del sistema de responsabilidad de las Administraciones P&uacute;blicas y de la potestad sancionadora";
 choices[7][2] = "el procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas";
 choices[7][3] = "la organizaci&oacute;n y funcionamiento de la Administraci&oacute;n General del Estado y de su sector p&uacute;blico institucional para el desarrollo de sus actividades";
 answers[7] = choices[7][2];
 units[7] = "4, 7, 8, 9";
 comments[7] = "Id Pregunta: 762. Ley 40/2015";


//  Id pregunta: 341 Año de creación de pregunta: 2016
 questions[8]= "9)  Tras la cuarta ampliaci&oacute;n de la Uni&oacute;n (Austria, Suecia y Finlandia), el n&uacute;mero total de diputados se estableci&oacute; en:";
 choices[8]= new Array();
 choices[8][0] = "623";
 choices[8][1] = "649";
 choices[8][2] = "626";
 choices[8][3] = "565";
 answers[8] = choices[8][2];
 units[8] = "5";
 comments[8] = "Id Pregunta: 341. UNION EUROPEA";


//  Id pregunta: 346 Año de creación de pregunta: 2016
 questions[9]= "10)  La duraci&oacute;n del mandato de un diputado del Parlamento Europeo es de:";
 choices[9]= new Array();
 choices[9][0] = "25 diputados lo son con car&aacute;cter vitalicio y el resto se renueva cada cinco a&ntilde;os.";
 choices[9][1] = "Cuatro a&ntilde;os, como un diputado espa&ntilde;ol.";
 choices[9][2] = "Cinco a&ntilde;os.";
 choices[9][3] = "Ninguna es correcta.";
 answers[9] = choices[9][2];
 units[9] = "5";
 comments[9] = "Id Pregunta: 346. UNION EUROPEA";


//  Id pregunta: 359 Año de creación de pregunta: 2016
 questions[10]= "11)  Los Reglamentos no se caracterizan por:";
 choices[10]= new Array();
 choices[10][0] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 choices[10][1] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[10][2] = "Ser obligatorios.";
 choices[10][3] = "No poseer alcance general.";
 answers[10] = choices[10][3];
 units[10] = "5";
 comments[10] = "Id Pregunta: 359. UNION EUROPEA";


//  Id pregunta: 376 Año de creación de pregunta: 2016
 questions[11]= "12)  El Defensor del Pueblo Europeo puede ser consultado por:";
 choices[11]= new Array();
 choices[11][0] = "Personas con residencia en la Uni&oacute;n pero s&oacute;lo personas f&iacute;sicas.";
 choices[11][1] = "Personas con nacionalidad europea.";
 choices[11][2] = "Personas con nacionalidad y pa&iacute;ses asociados.";
 choices[11][3] = "Toda persona f&iacute;sica (ciudadanos) o jur&iacute;dica (instituciones o empresas) que residan en la Uni&oacute;n.";
 answers[11] = choices[11][3];
 units[11] = "5";
 comments[11] = "Id Pregunta: 376. UNION EUROPEA";


//  Id pregunta: 199 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Cu&aacute;l es la composici&oacute;n del Pleno del Tribunal de Cuentas?";
 choices[12]= new Array();
 choices[12][0] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, uno de los cuales ser&aacute; el Presidente y el Fiscal.";
 choices[12][1] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas, m&aacute;s el Presidente.";
 choices[12][2] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas.";
 choices[12][3] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, m&aacute;s el Presidente.";
 answers[12] = choices[12][0];
 units[12] = "1";
 comments[12] = "Id Pregunta: 199. CONSTITUCION1978";


//  Id pregunta: 798 Año de creación de pregunta: 2016
 questions[13]= "14)  Las unidades administrativas comprenden puestos de trabajo o dotaciones de plantilla:";
 choices[13]= new Array();
 choices[13][0] = "vinculados funcionalmente por raz&oacute;n de sus cometidos y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[13][1] = "vinculados org&aacute;nicamente por raz&oacute;n de sus cometidos y funcionalmente por una jefatura com&uacute;n";
 choices[13][2] = "vinculados funcionalmente por raz&oacute;n de su territorio y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[13][3] = "vinculados org&aacute;nicamente por raz&oacute;n de su territorio y funcionalmente por una jefatura com&uacute;n";
 answers[13] = choices[13][0];
 units[13] = "4, 7, 8, 9";
 comments[13] = "Id Pregunta: 798. Ley 40/2015";


//  Id pregunta: 211 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;A cu&aacute;ntos miembros del Tribunal Constitucional corresponde proponer al Gobierno?";
 choices[14]= new Array();
 choices[14][0] = "Cuatro.";
 choices[14][1] = "Ninguno.";
 choices[14][2] = "Dos.";
 choices[14][3] = "Seis.";
 answers[14] = choices[14][2];
 units[14] = "1";
 comments[14] = "Id Pregunta: 211. CONSTITUCION1978";


//  Id pregunta: 348 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;En qu&eacute; fecha naci&oacute; la Uni&oacute;n Europea?:";
 choices[15]= new Array();
 choices[15][0] = "El 1 de noviembre de 1994.";
 choices[15][1] = "El 1 de noviembre de 1992.";
 choices[15][2] = "El 1 de noviembre de 1995.";
 choices[15][3] = "El 1 de noviembre de 1993.";
 answers[15] = choices[15][3];
 units[15] = "5";
 comments[15] = "Id Pregunta: 348. UNION EUROPEA";


//  Id pregunta: 249 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[16]= new Array();
 choices[16][0] = "Art&iacute;culo 16.2.";
 choices[16][1] = "Art&iacute;culo 17.1.";
 choices[16][2] = "Art&iacute;culo 18.1.";
 choices[16][3] = "Art&iacute;culo 18.2.";
 answers[16] = choices[16][0];
 units[16] = "1";
 comments[16] = "Id Pregunta: 249. CONSTITUCION1978";


//  Id pregunta: 312 Año de creación de pregunta: 2016
 questions[17]= "18)  Los acuerdos de la Comisi&oacute;n Europea se adoptan:";
 choices[17]= new Array();
 choices[17][0] = "Por unanimidad.";
 choices[17][1] = "Por mayor&iacute;a cualificada.";
 choices[17][2] = "Por mayor&iacute;a de las dos terceras partes de sus miembros.";
 choices[17][3] = "Por mayor&iacute;a del n&uacute;mero de miembros.";
 answers[17] = choices[17][3];
 units[17] = "5";
 comments[17] = "Id Pregunta: 312. UNION EUROPEA";


//  Id pregunta: 363 Año de creación de pregunta: 2016
 questions[18]= "19)  Los Reglamentos no se caracterizan por:";
 choices[18]= new Array();
 choices[18][0] = "No poseer alcance general.";
 choices[18][1] = "Ser obligatorios.";
 choices[18][2] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[18][3] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 answers[18] = choices[18][0];
 units[18] = "5";
 comments[18] = "Id Pregunta: 363. UNION EUROPEA";


//  Id pregunta: 811 Año de creación de pregunta: 2016
 questions[19]= "20)  Las Delegaciones del Gobierno tendr&aacute;n su sede en:";
 choices[19]= new Array();
 choices[19][0] = "la localidad elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[19][1] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[19][2] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[19][3] = "la localidad donde elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 answers[19] = choices[19][2];
 units[19] = "4, 7, 8, 9";
 comments[19] = "Id Pregunta: 811. Ley 40/2015";


//  Id pregunta: 291 Año de creación de pregunta: 2016
 questions[20]= "21)  La duraci&oacute;n del mandato de los miembros del Tribunal de Cuentas de la Uni&oacute;n Europea es de:";
 choices[20]= new Array();
 choices[20][0] = "Tres a&ntilde;os.";
 choices[20][1] = "Dos a&ntilde;os y medio.";
 choices[20][2] = "Cinco a&ntilde;os.";
 choices[20][3] = "Seis a&ntilde;os.";
 answers[20] = choices[20][3];
 units[20] = "5";
 comments[20] = "Id Pregunta: 291. UNION EUROPEA";


//  Id pregunta: 287 Año de creación de pregunta: 2016
 questions[21]= "22)  Se&ntilde;ale cu&aacute;l no es un principio del Plan de acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[21]= new Array();
 choices[21][0] = "Versi&oacute;n digital prioritaria.";
 choices[21][1] = "Principio de &laquo;solo una vez&raquo;.";
 choices[21][2] = "Inclusi&oacute;n y accesibilidad.";
 choices[21][3] = "Apertura y transparencia.";
 answers[21] = choices[21][0];
 units[21] = "5";
 comments[21] = "Id Pregunta: 287. UNION EUROPEA";


//  Id pregunta: 242 Año de creación de pregunta: 2016
 questions[22]= "23)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, es competencia del Rey:";
 choices[22]= new Array();
 choices[22][0] = "Refrendar los actos del Presidente de Gobierno.";
 choices[22][1] = "Previa autorizaci&oacute;n del Presidente de Gobierno, declarar la guerra y hacer la paz.";
 choices[22][2] = "El Alto Patronazgo de las Reales Academias.";
 choices[22][3] = "Sancionar y publicar las leyes.";
 answers[22] = choices[22][2];
 units[22] = "1";
 comments[22] = "Id Pregunta: 242. CONSTITUCION1978";


//  Id pregunta: 767 Año de creación de pregunta: 2016
 questions[23]= "24)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[23]= new Array();
 choices[23][0] = "la Administraci&oacute;n General del Estado";
 choices[23][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[23][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[23][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico o privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[23] = choices[23][3];
 units[23] = "4, 7, 8, 9";
 comments[23] = "Id Pregunta: 767. Ley 40/2015";


//  Id pregunta: 188 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Puede el Estado transferir o delegar a las Comunidades Aut&oacute;nomas facultadas que son de su titularidad?";
 choices[24]= new Array();
 choices[24][0] = "No, en ning&uacute;n caso.";
 choices[24][1] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con cualquier tipo de facultades.";
 choices[24][2] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, sin que el Estado se pueda reservar ninguna forma de control.";
 choices[24][3] = ", mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, previendo en cada caso la correspondiente transferencia de medios financieros, as&iacute; como las formas de control que se reserve el Estado.";
 answers[24] = choices[24][3];
 units[24] = "1";
 comments[24] = "Id Pregunta: 188. CONSTITUCION1978";


//  Id pregunta: 355 Año de creación de pregunta: 2016
 questions[25]= "26)  En el marco de la Uni&oacute;n Europea, los dict&aacute;menes:";
 choices[25]= new Array();
 choices[25][0] = "Son vinculantes solamente.";
 choices[25][1] = "No son vinculantes, ya que su contenido no obliga a aqu&eacute;llos a los que van dirigidos.";
 choices[25][2] = "Son preceptivos y vinculantes.";
 choices[25][3] = "Son preceptivos y no vinculantes.";
 answers[25] = choices[25][1];
 units[25] = "5";
 comments[25] = "Id Pregunta: 355. UNION EUROPEA";


//  Id pregunta: 184 Año de creación de pregunta: 2016
 questions[26]= "27)  El T&iacute;tulo IV de la Constituci&oacute;n Espa&ntilde;ola de 1978 dispone que el Gobierno:";
 choices[26]= new Array();
 choices[26][0] = "Se compone del Presidente, los Vicepresidentes y los Secretarios de Estado.";
 choices[26][1] = "Ejerce la funci&oacute;n ejecutiva y la legislativa de acuerdo con la Constituci&oacute;n y las leyes.";
 choices[26][2] = "Cesa tras la celebraci&oacute;n de elecciones generales, en los casos de p&eacute;rdida de confianza parlamentaria, o por dimisi&oacute;n o fallecimiento de su Presidente.";
 choices[26][3] = "El presidente y los dem&aacute;s miembros del Gobierno son nombrados por el Rey a propuesta del Presidente del Congreso.";
 answers[26] = choices[26][2];
 units[26] = "1";
 comments[26] = "Id Pregunta: 184. CONSTITUCION1978";


//  Id pregunta: 264 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;Cu&aacute;ntos vocales componen el Consejo General del Poder Judicial?";
 choices[27]= new Array();
 choices[27][0] = "Veinte.";
 choices[27][1] = "Quince.";
 choices[27][2] = "Diez.";
 choices[27][3] = "Doce.";
 answers[27] = choices[27][1];
 units[27] = "1";
 comments[27] = "Id Pregunta: 264. CONSTITUCION1978";


//  Id pregunta: 343 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Cu&aacute;l es el n&uacute;mero m&iacute;nimo de parlamentarios de cinco Estados miembros para constituir un grupo pol&iacute;tico?:";
 choices[28]= new Array();
 choices[28][0] = "23";
 choices[28][1] = "20";
 choices[28][2] = "14";
 choices[28][3] = "18";
 answers[28] = choices[28][1];
 units[28] = "5";
 comments[28] = "Id Pregunta: 343. UNION EUROPEA";


//  Id pregunta: 827 Año de creación de pregunta: 2016
 questions[29]= "30)  La recusaci&oacute;n se plantea...";
 choices[29]= new Array();
 choices[29][0] = "Antes de iniciado el procedimiento";
 choices[29][1] = "Una vez iniciado el procedimiento";
 choices[29][2] = "Cuando el instructor dicta propuesta de resoluci&oacute;n";
 choices[29][3] = "En cualquier momento del procedimiento";
 answers[29] = choices[29][0];
 units[29] = "4, 7, 8, 9";
 comments[29] = "Id Pregunta: 827. Ley 40/2015";


//  Id pregunta: 195 Año de creación de pregunta: 2016
 questions[30]= "31)  La potestad reglamentaria constitucionalmente corresponde:";
 choices[30]= new Array();
 choices[30][0] = "Al Gobierno.";
 choices[30][1] = "A las Cortes Generales.";
 choices[30][2] = "Al Poder Judicial.";
 choices[30][3] = "Al Congreso de los Diputados.";
 answers[30] = choices[30][0];
 units[30] = "1";
 comments[30] = "Id Pregunta: 195. CONSTITUCION1978";


//  Id pregunta: 813 Año de creación de pregunta: 2016
 questions[31]= "32)  Existir&aacute; un Subdelegado del Gobierno, que estar&aacute; bajo la inmediata dependencia del Delegado del Gobierno:";
 choices[31]= new Array();
 choices[31][0] = "en cada Comunidad Aut&oacute;noma";
 choices[31][1] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas pluriprovinciales";
 choices[31][2] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas uniprovinciales";
 choices[31][3] = "en cada una de las localidades de las Comunidades Aut&oacute;nomas";
 answers[31] = choices[31][1];
 units[31] = "4, 7, 8, 9";
 comments[31] = "Id Pregunta: 813. Ley 40/2015";


//  Id pregunta: 812 Año de creación de pregunta: 2016
 questions[32]= "33)  Las Delegaciones del Gobierno est&aacute;n adscritas org&aacute;nicamente a:";
 choices[32]= new Array();
 choices[32][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[32][1] = "el Consejo de Gobierno de la Comunidad Aut&oacute;noma";
 choices[32][2] = "el Ministerio del Interior";
 choices[32][3] = "la Administraci&oacute;n General del Estado";
 answers[32] = choices[32][0];
 units[32] = "4, 7, 8, 9";
 comments[32] = "Id Pregunta: 812. Ley 40/2015";


//  Id pregunta: 352 Año de creación de pregunta: 2016
 questions[33]= "34)  La Comisi&oacute;n est&aacute; compuesta por:";
 choices[33]= new Array();
 choices[33][0] = "27 miembros, nacionales de los Estados comunitarios.";
 choices[33][1] = "20 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 choices[33][2] = "25 miembros, nacionales de los Estados comunitarios.";
 choices[33][3] = "d)22 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 answers[33] = choices[33][0];
 units[33] = "5";
 comments[33] = "Id Pregunta: 352. UNION EUROPEA";


//  Id pregunta: 307 Año de creación de pregunta: 2016
 questions[34]= "35)  Las elecciones al Parlamento Europeo tienen lugar cada:";
 choices[34]= new Array();
 choices[34][0] = "Seis a&ntilde;os.";
 choices[34][1] = "Cinco a&ntilde;os.";
 choices[34][2] = "Cuatro a&ntilde;os.";
 choices[34][3] = "Ocho a&ntilde;os.";
 answers[34] = choices[34][1];
 units[34] = "5";
 comments[34] = "Id Pregunta: 307. UNION EUROPEA";


//  Id pregunta: 229 Año de creación de pregunta: 2016
 questions[35]= "36)  De acuerdo con lo previsto en la Constituci&oacute;n Espa&ntilde;ola, el Gobierno y la administraci&oacute;n aut&oacute;noma de las provincias estar&aacute;n encomendados:";
 choices[35]= new Array();
 choices[35][0] = "A Diputaciones u otras Corporaciones de car&aacute;cter representativo.";
 choices[35][1] = "A los Subdelegados del Gobierno y a los Directores Insulares.";
 choices[35][2] = "A las Diputaciones y a las Mancomunidades de Municipios.";
 choices[35][3] = "A las Diputaciones y a las Comarcas.";
 answers[35] = choices[35][3];
 units[35] = "1";
 comments[35] = "Id Pregunta: 229. CONSTITUCION1978";


//  Id pregunta: 838 Año de creación de pregunta: 2016
 questions[36]= "37)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta correcta.";
 choices[36]= new Array();
 choices[36][0] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos provisionalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[36][1] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos temporalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[36][2] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos eventualmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[36][3] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos circunstancialmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 answers[36] = choices[36][1];
 units[36] = "4, 7, 8, 9";
 comments[36] = "Id Pregunta: 838. Ley 40/2015";


//  Id pregunta: 330 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;Cu&aacute;les son las funciones de la Conferencia para Asuntos Relacionados con las Comunidades Europeas?:";
 choices[37]= new Array();
 choices[37][0] = "Garantizar el cumplimiento en las Conferencias Sectoriales de los procedimientos y f&oacute;rmulas de participaci&oacute;n de las Comunidades Aut&oacute;nomas.";
 choices[37][1] = "El tratamiento y resoluci&oacute;n con arreglo al principio de cooperaci&oacute;n de aquellas cuestiones de alcance general o contenido institucional relacionadas con las Comunidades Europeas.";
 choices[37][2] = "Todas son correctas.";
 choices[37][3] = "Informaci&oacute;n a las Comunidades Aut&oacute;nomas y la discusi&oacute;n en com&uacute;n sobre el desarrollo del proceso de constituci&oacute;n europea.";
 answers[37] = choices[37][2];
 units[37] = "5";
 comments[37] = "Id Pregunta: 330. UNION EUROPEA";


//  Id pregunta: 342 Año de creación de pregunta: 2016
 questions[38]= "39)  La moci&oacute;n de censura contra la Comisi&oacute;n existe desde:";
 choices[38]= new Array();
 choices[38][0] = "El Tratado de Maastrich.";
 choices[38][1] = "El Tratado de Amsterdam.";
 choices[38][2] = "El Tratado de Par&iacute;s.";
 choices[38][3] = "El Tratado de Roma.";
 answers[38] = choices[38][3];
 units[38] = "5";
 comments[38] = "Id Pregunta: 342. UNION EUROPEA";


//  Id pregunta: 770 Año de creación de pregunta: 2016
 questions[39]= "40)  Las Administraciones P&uacute;blicas:";
 choices[39]= new Array();
 choices[39][0] = "se relacionar&aacute;n entre s&iacute; y con sus &oacute;rganos, organismos p&uacute;blicos y entidades vinculados o dependientes a trav&eacute;s de medios no electr&oacute;nicos, que aseguren la interoperabilidad y seguridad de los sistemas y soluciones adoptadas por cada una de ellas";
 choices[39][1] = "garantizar&aacute;n la protecci&oacute;n de los datos de car&aacute;cter personal";
 choices[39][2] = "facilitar&aacute;n preferentemente la prestaci&oacute;n disociada de servicios a los interesados";
 choices[39][3] = "todas son correctas";
 answers[39] = choices[39][1];
 units[39] = "4, 7, 8, 9";
 comments[39] = "Id Pregunta: 770. Ley 40/2015";


//  Id pregunta: 803 Año de creación de pregunta: 2016
 questions[40]= "41)  Los Secretarios generales t&eacute;cnicos tienen a todos los efectos la categor&iacute;a de:";
 choices[40]= new Array();
 choices[40][0] = "Director General";
 choices[40][1] = "Secretario general";
 choices[40][2] = "Subdirector general";
 choices[40][3] = "Subsecretario";
 answers[40] = choices[40][0];
 units[40] = "4, 7, 8, 9";
 comments[40] = "Id Pregunta: 803. Ley 40/2015";


//  Id pregunta: 802 Año de creación de pregunta: 2016
 questions[41]= "42)  Los Secretarios generales t&eacute;cnicos:";
 choices[41]= new Array();
 choices[41][0] = "se encuentran bajo la inmediata dependencia del Subsecretario";
 choices[41][1] = "tendr&aacute;n las competencias sobre servicios comunes que les atribuya el Real Decreto de estructura del Departamento";
 choices[41][2] = "tendr&aacute;n las competencias relativas a producci&oacute;n normativa, asistencia jur&iacute;dica y publicaciones";
 choices[41][3] = "todas son correctas";
 answers[41] = choices[41][3];
 units[41] = "4, 7, 8, 9";
 comments[41] = "Id Pregunta: 802. Ley 40/2015";


//  Id pregunta: 766 Año de creación de pregunta: 2016
 questions[42]= "43)  Las Universidades p&uacute;blicas se regir&aacute;n por:";
 choices[42]= new Array();
 choices[42][0] = "las previsiones de la presente Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[42][1] = "su normativa espec&iacute;fica y supletoriamente por las previsiones de la presente Ley";
 choices[42][2] = "exclusivamente por su normativa espec&iacute;fica";
 choices[42][3] = "exclusivamente por las previsiones de la presente Ley";
 answers[42] = choices[42][1];
 units[42] = "4, 7, 8, 9";
 comments[42] = "Id Pregunta: 766. Ley 40/2015";


//  Id pregunta: 226 Año de creación de pregunta: 2016
 questions[43]= "44)  Extinguidas todas las l&iacute;neas llamadas en Derecho para la sucesi&oacute;n en el trono:";
 choices[43]= new Array();
 choices[43][0] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n en la forma que m&aacute;s convenga a los intereses de Espa&ntilde;a.";
 choices[43][1] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n atendiendo exclusivamente a los imperativos geneal&oacute;gicos conocidos.";
 choices[43][2] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n de conformidad con los usos y costumbres existentes.";
 choices[43][3] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n conforme a lo que decidan dos grupos parlamentarios o una quinta parte de los Diputados.";
 answers[43] = choices[43][0];
 units[43] = "1";
 comments[43] = "Id Pregunta: 226. CONSTITUCION1978";


//  Id pregunta: 825 Año de creación de pregunta: 2016
 questions[44]= "45)  La actuaci&oacute;n de autoridades y personal al servicio de las Administraciones P&uacute;blicas en los que concurran motivos de abstenci&oacute;n ...";
 choices[44]= new Array();
 choices[44][0] = "No implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido pero dar&aacute; lugar a la responsabilidad que proceda";
 choices[44][1] = "Dar&aacute; lugar a la responsabilidad que proceda pero no implicar&aacute; en ning&uacute;n caso la invalidez de los actos en que hayan intervenido";
 choices[44][2] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido";
 choices[44][3] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido dando lugar a la responsabilidad que proceda";
 answers[44] = choices[44][1];
 units[44] = "4, 7, 8, 9";
 comments[44] = "Id Pregunta: 825. Ley 40/2015";


//  Id pregunta: 263 Año de creación de pregunta: 2016
 questions[45]= "46)  Los Vocales integrantes del &oacute;rgano de gobierno del Poder Judicial:";
 choices[45]= new Array();
 choices[45][0] = "Ser&aacute;n nombrados por el Presidente del Tribunal Supremo y del Consejo del Poder Judicial, por un periodo de cinco a&ntilde;os.";
 choices[45][1] = "Ser&aacute;n nombrados por el Congreso de los Diputados y por el Senado por un periodo de cinco a&ntilde;os.";
 choices[45][2] = "Ser&aacute;n nombrados por el Rey por un periodo de cinco a&ntilde;os.";
 choices[45][3] = "er&aacute;n nombrados por el Rey por un periodo de tres a&ntilde;os.";
 answers[45] = choices[45][1];
 units[45] = "1";
 comments[45] = "Id Pregunta: 263. CONSTITUCION1978";


//  Id pregunta: 213 Año de creación de pregunta: 2016
 questions[46]= "47)  Seg&uacute;n el Art&iacute;culo 59 de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; v&aacute;lida la Regencia nombrada por las Cortes Generales que se componga del siguiente n&uacute;mero de personas:";
 choices[46]= new Array();
 choices[46][0] = "Cinco.";
 choices[46][1] = "Dos.";
 choices[46][2] = "Cuatro.";
 choices[46][3] = "Siete.";
 answers[46] = choices[46][0];
 units[46] = "1";
 comments[46] = "Id Pregunta: 213. CONSTITUCION1978";


//  Id pregunta: 283 Año de creación de pregunta: 2016
 questions[47]= "48)  Se&ntilde;ale cu&aacute;l no es una de las prioridades de la Estrategia Europa 2020:";
 choices[47]= new Array();
 choices[47][0] = "Crecimiento inteligente.";
 choices[47][1] = "Crecimiento inclusivo.";
 choices[47][2] = "Crecimiento sostenible.";
 choices[47][3] = "Crecimiento integrador.";
 answers[47] = choices[47][1];
 units[47] = "5";
 comments[47] = "Id Pregunta: 283. UNION EUROPEA";


//  Id pregunta: 332 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Cu&aacute;ndo son de aplicaci&oacute;n los tratados internacionales?:";
 choices[48]= new Array();
 choices[48][0] = "Al d&iacute;a siguiente de su ratificaci&oacute;n por el Congreso de los Diputados.";
 choices[48][1] = "Al d&iacute;a siguiente de su firma por los Ministros plenipotenciarios.";
 choices[48][2] = "El mismo d&iacute;a de la firma por los Ministros plenipotenciarios.";
 choices[48][3] = "No ser&aacute;n de aplicaci&oacute;n directa hasta que formen parte del ordenamiento mediante su publicaci&oacute;n en el BOE.";
 answers[48] = choices[48][3];
 units[48] = "5";
 comments[48] = "Id Pregunta: 332. UNION EUROPEA";


//  Id pregunta: 364 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;En qu&eacute; fecha entr&oacute; en vigor el Tratado de Amsterdam?:";
 choices[49]= new Array();
 choices[49][0] = "El 1 de junio de 1999.";
 choices[49][1] = "El 1 de mayo de 1999.";
 choices[49][2] = "El 1 de abril de 1999.";
 choices[49][3] = "El 1 de marzo de 1999.";
 answers[49] = choices[49][1];
 units[49] = "5";
 comments[49] = "Id Pregunta: 364. UNION EUROPEA";


//  Id pregunta: 215 Año de creación de pregunta: 2016
 questions[50]= "51)  Seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola, las asociaciones se inscribir&aacute;n en un registro a efectos de:";
 choices[50]= new Array();
 choices[50][0] = "Publicidad.";
 choices[50][1] = "Constituci&oacute;n.";
 choices[50][2] = "Legalidad.";
 choices[50][3] = "Creaci&oacute;n.";
 answers[50] = choices[50][0];
 units[50] = "1";
 comments[50] = "Id Pregunta: 215. CONSTITUCION1978";


//  Id pregunta: 294 Año de creación de pregunta: 2016
 questions[51]= "52)  Indique a qui&eacute;n corresponde la funci&oacute;n de promover el inter&eacute;s general de la Uni&oacute;n Europea y tomar las iniciativas adecuadas con este fin:";
 choices[51]= new Array();
 choices[51][0] = "Al Consejo Europeo.";
 choices[51][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[51][2] = "A la Comisi&oacute;n Europea.";
 choices[51][3] = "Al Parlamento Europeo.";
 answers[51] = choices[51][2];
 units[51] = "5";
 comments[51] = "Id Pregunta: 294. UNION EUROPEA";


//  Id pregunta: 209 Año de creación de pregunta: 2016
 questions[52]= "53)  Corresponde aprobar el proyecto de Ley de Presupuestos Generales del Estado a:";
 choices[52]= new Array();
 choices[52][0] = "El Ministerio de Econom&iacute;a y Hacienda.";
 choices[52][1] = "El Congreso de los Diputados.";
 choices[52][2] = "Las Cortes Generales.";
 choices[52][3] = "El Consejo de Ministros";
 answers[52] = choices[52][3];
 units[52] = "1";
 comments[52] = "Id Pregunta: 209. CONSTITUCION1978";


//  Id pregunta: 206 Año de creación de pregunta: 2016
 questions[53]= "54)  La alteraci&oacute;n de los l&iacute;mites de una provincia debe ser aprobada por:";
 choices[53]= new Array();
 choices[53][0] = "El Gobierno.";
 choices[53][1] = "La Asamblea de la Comunidad Aut&oacute;noma a la que pertenezca la provincia.";
 choices[53][2] = "Las Cortes Generales, mediante ley org&aacute;nica.";
 choices[53][3] = "Una Comisi&oacute;n formada por los senadores designados en esa provincia.";
 answers[53] = choices[53][2];
 units[53] = "1";
 comments[53] = "Id Pregunta: 206. CONSTITUCION1978";


//  Id pregunta: 805 Año de creación de pregunta: 2016
 questions[54]= "55)  Son los titulares de los &oacute;rganos directivos encargados de la gesti&oacute;n de una o varias &aacute;reas funcionalmente homog&eacute;neas del Ministerio:";
 choices[54]= new Array();
 choices[54][0] = "los Secretarios generales t&eacute;cnicos";
 choices[54][1] = "los Directores generales";
 choices[54][2] = "los Secretarios generales";
 choices[54][3] = "los Subsecretarios";
 answers[54] = choices[54][1];
 units[54] = "4, 7, 8, 9";
 comments[54] = "Id Pregunta: 805. Ley 40/2015";


//  Id pregunta: 775 Año de creación de pregunta: 2016
 questions[55]= "56)  Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos:";
 choices[55]= new Array();
 choices[55][0] = "las unidades administrativas a las que se les atribuyan funciones que no tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo";
 choices[55][1] = "las unidades administrativas a las que se les atribuyan funciones que no tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo";
 choices[55][2] = "las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo";
 choices[55][3] = "las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo";
 answers[55] = choices[55][3];
 units[55] = "4, 7, 8, 9";
 comments[55] = "Id Pregunta: 775. Ley 40/2015";


//  Id pregunta: 801 Año de creación de pregunta: 2016
 questions[56]= "57)  La organizaci&oacute;n en Departamentos ministeriales no obsta a la existencia de:";
 choices[56]= new Array();
 choices[56][0] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[56][1] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 choices[56][2] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[56][3] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 answers[56] = choices[56][3];
 units[56] = "4, 7, 8, 9";
 comments[56] = "Id Pregunta: 801. Ley 40/2015";


//  Id pregunta: 194 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cu&aacute;ntos miembros componen el Tribunal Constitucional?";
 choices[57]= new Array();
 choices[57][0] = "11";
 choices[57][1] = "12";
 choices[57][2] = "14";
 choices[57][3] = "8";
 answers[57] = choices[57][1];
 units[57] = "1";
 comments[57] = "Id Pregunta: 194. CONSTITUCION1978";


//  Id pregunta: 336 Año de creación de pregunta: 2016
 questions[58]= "59)  El Tribunal de Justicia Europeo funcion&oacute; como instancia &uacute;nica hasta:";
 choices[58]= new Array();
 choices[58][0] = "Diciembre de 1987.";
 choices[58][1] = "Septiembre de 1989.";
 choices[58][2] = "Octubre de 1990.";
 choices[58][3] = "Noviembre de 1980.";
 answers[58] = choices[58][1];
 units[58] = "5";
 comments[58] = "Id Pregunta: 336. UNION EUROPEA";


//  Id pregunta: 185 Año de creación de pregunta: 2016
 questions[59]= "60)  Se&ntilde;ale cu&aacute;l de las siguientes funciones NO est&aacute; atribuida constitucionalmente al Rey:";
 choices[59]= new Array();
 choices[59][0] = "El mando supremo de las Fuerzas Armadas.";
 choices[59][1] = "Autorizar indultos generales.";
 choices[59][2] = "Sancionar las leyes.";
 choices[59][3] = "Promulgar las leyes.";
 answers[59] = choices[59][1];
 units[59] = "1";
 comments[59] = "Id Pregunta: 185. CONSTITUCION1978";


//  Id pregunta: 227 Año de creación de pregunta: 2016
 questions[60]= "61)  En relaci&oacute;n con el Defensor del Pueblo, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[60]= new Array();
 choices[60][0] = "Es el supremo &oacute;rgano consultivo del Gobierno.";
 choices[60][1] = "Puede supervisar la actividad de la Administraci&oacute;n del Estado, pero no la de las Comunidades Aut&oacute;nomas.";
 choices[60][2] = "Puede anular resoluciones e imponer sanciones, siempre que no impliquen privaci&oacute;n de libertad.";
 choices[60][3] = "Tiene como misi&oacute;n la defensa de todos los derechos comprendidos en el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola, y no s&oacute;lo los susceptibles de recurso de amparo.";
 answers[60] = choices[60][3];
 units[60] = "1";
 comments[60] = "Id Pregunta: 227. CONSTITUCION1978";


//  Id pregunta: 774 Año de creación de pregunta: 2016
 questions[61]= "62)  Las Administraciones P&uacute;blicas velar&aacute;n por el cumplimiento de los requisitos previstos en la legislaci&oacute;n que resulte aplicable, para lo cual podr&aacute;n, en el &aacute;mbito de sus respectivas competencias, comprobar, verificar, investigar e inspeccionar los hechos, actos, elementos, actividades, estimaciones y dem&aacute;s circunstancias que fueran necesarias con los l&iacute;mites establecidos en:";
 choices[61]= new Array();
 choices[61][0] = "la legislaci&oacute;n de protecci&oacute;n de datos de car&aacute;cter personal";
 choices[61][1] = "el C&oacute;digo Civil";
 choices[61][2] = "la Constituci&oacute;n Espa&ntilde;ola";
 choices[61][3] = "la ley de procedimiento administrativo com&uacute;n de las Administraciones P&uacute;blicas";
 answers[61] = choices[61][0];
 units[61] = "4, 7, 8, 9";
 comments[61] = "Id Pregunta: 774. Ley 40/2015";


//  Id pregunta: 204 Año de creación de pregunta: 2016
 questions[62]= "63)  Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada reciben el t&iacute;tulo de:";
 choices[62]= new Array();
 choices[62][0] = "Decretos Legislativos.";
 choices[62][1] = "Decretos-leyes.";
 choices[62][2] = "Leyes de bases.";
 choices[62][3] = "Reales Decretos del Consejo de Ministros.";
 answers[62] = choices[62][0];
 units[62] = "1";
 comments[62] = "Id Pregunta: 204. CONSTITUCION1978";


//  Id pregunta: 177 Año de creación de pregunta: 2016
 questions[63]= "64)  El art&iacute;culo 152 de la Constituci&oacute;n espa&ntilde;ola se refiere a la organizaci&oacute;n instituicional b&aacute;sica de cada Comunidad Aut&oacute;noma, la cual se basar&aacute; en:";
 choices[63]= new Array();
 choices[63][0] = "Una Conseller&iacute;a legislativa, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[63][1] = "Una Asamble legislativa, un Presidente, un Delegado de Gobierno y un Comit&eacute; Superior del Poder Judicial.";
 choices[63][2] = "Una Asamble legislativa, un Consejo de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[63][3] = "Un Consejo legislativo, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Supremo.";
 answers[63] = choices[63][2];
 units[63] = "1";
 comments[63] = "Id Pregunta: 177. CONSTITUCION1978";


//  Id pregunta: 365 Año de creación de pregunta: 2016
 questions[64]= "65)  Las decisiones de la Comisi&oacute;n se adoptar&aacute;n por:";
 choices[64]= new Array();
 choices[64][0] = "Unanimidad y mayor&iacute;a simple.";
 choices[64][1] = "Unanimidad.";
 choices[64][2] = "Mayor&iacute;a cualificada.";
 choices[64][3] = "Mayor&iacute;a simple.";
 answers[64] = choices[64][3];
 units[64] = "5";
 comments[64] = "Id Pregunta: 365. UNION EUROPEA";


//  Id pregunta: 338 Año de creación de pregunta: 2016
 questions[65]= "66)  En el Consejo de Europa cada Estado miembro tiene una delegaci&oacute;n nacional en Bruselas conocida como &oacute;rgano de apoyo, denominado:";
 choices[65]= new Array();
 choices[65][0] = "CO.PER.";
 choices[65][1] = "COMPER.";
 choices[65][2] = "CO.RE.PER.";
 choices[65][3] = "CO.PE.RRE.";
 answers[65] = choices[65][2];
 units[65] = "5";
 comments[65] = "Id Pregunta: 338. UNION EUROPEA";


//  Id pregunta: 371 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;En qu&eacute; a&ntilde;o se adhiri&oacute; Espa&ntilde;a a la Comunidad Europea?:";
 choices[66]= new Array();
 choices[66][0] = "En 1988.";
 choices[66][1] = "En 1981.";
 choices[66][2] = "En 1982.";
 choices[66][3] = "En 1986.";
 answers[66] = choices[66][3];
 units[66] = "5";
 comments[66] = "Id Pregunta: 371. UNION EUROPEA";


//  Id pregunta: 179 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Qu&eacute; tipo de ley aprueba los estatutos de autonom&iacute;a?";
 choices[67]= new Array();
 choices[67][0] = "Una ley orginaria.";
 choices[67][1] = "Una ley org&aacute;nica.";
 choices[67][2] = "Una ley de bases.";
 choices[67][3] = "Una ley de transferencia.";
 answers[67] = choices[67][1];
 units[67] = "1";
 comments[67] = "Id Pregunta: 179. CONSTITUCION1978";


//  Id pregunta: 820 Año de creación de pregunta: 2016
 questions[68]= "69)  En las Comunidades Aut&oacute;nomas, en caso de ausencia, vacante o enfermedad del titular de la Delegaci&oacute;n del Gobierno, ser&aacute; suplido por:";
 choices[68]= new Array();
 choices[68][0] = "el Subdelegado del Gobierno que el Delegado designe y, en su defecto, al de la provincia en que tenga su sede";
 choices[68][1] = "el Subdelegado del Gobierno de la provincia en que tenga su sede y, en su defecto, al que el Delegado designe";
 choices[68][2] = "el Subdirector General que el Delegado designe";
 choices[68][3] = "el Secretario de Estado";
 answers[68] = choices[68][0];
 units[68] = "4, 7, 8, 9";
 comments[68] = "Id Pregunta: 820. Ley 40/2015";


//  Id pregunta: 824 Año de creación de pregunta: 2016
 questions[69]= "70)  Podr&aacute;n ordenarle que se abstengan de toda intervenci&oacute;n en el expediente al funcionario que se encuentre en causa de abstenci&oacute;n...";
 choices[69]= new Array();
 choices[69][0] = "Los &oacute;rganos jer&aacute;rquicamente superiores";
 choices[69][1] = "S&oacute;lo los &oacute;rganos inmediatamente superiores jer&aacute;rquicos";
 choices[69][2] = "Los interesados en el procedimiento";
 choices[69][3] = "Las alternativas b) y c) son correctas";
 answers[69] = choices[69][1];
 units[69] = "4, 7, 8, 9";
 comments[69] = "Id Pregunta: 824. Ley 40/2015";


//  Id pregunta: 782 Año de creación de pregunta: 2016
 questions[70]= "71)  La Administraci&oacute;n General del Estado act&uacute;a y se organiza de acuerdo con los principios establecidos en el art&iacute;culo 3, as&iacute; como los de:";
 choices[70]= new Array();
 choices[70][0] = "desconcentraci&oacute;n funcional y descentralizaci&oacute;n funcional y territorial";
 choices[70][1] = "descentralizaci&oacute;n territorial y desconcentraci&oacute;n funcional y territorial";
 choices[70][2] = "descentralizaci&oacute;n funcional y desconcentraci&oacute;n funcional y territorial";
 choices[70][3] = "desconcentraci&oacute;n territorial y descentralizaci&oacute;n funcional y territorial";
 answers[70] = choices[70][2];
 units[70] = "4, 7, 8, 9";
 comments[70] = "Id Pregunta: 782. Ley 40/2015";


//  Id pregunta: 286 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Cu&aacute;l no es un pilar de la Estrategia del Mercado &Uacute;nico Digital?";
 choices[71]= new Array();
 choices[71][0] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa.";
 choices[71][1] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar.";
 choices[71][2] = "Iniciativa europea de libre flujo de datos.";
 choices[71][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital.";
 answers[71] = choices[71][2];
 units[71] = "5";
 comments[71] = "Id Pregunta: 286. UNION EUROPEA";


//  Id pregunta: 831 Año de creación de pregunta: 2016
 questions[72]= "73)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Marque la respuesta correcta.";
 choices[72]= new Array();
 choices[72][0] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo.";
 choices[72][1] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo.";
 choices[72][2] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter potestativo.";
 choices[72][3] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter oneroso.";
 answers[72] = choices[72][0];
 units[72] = "4, 7, 8, 9";
 comments[72] = "Id Pregunta: 831. Ley 40/2015";


//  Id pregunta: 290 Año de creación de pregunta: 2016
 questions[73]= "74)  El Parlamento Europeo celebrar&aacute;:";
 choices[73]= new Array();
 choices[73][0] = "Cada a&ntilde;o un per&iacute;odo de sesiones.";
 choices[73][1] = "Los per&iacute;odos de sesiones se dividen de febrero a junio y de septiembre a diciembre.";
 choices[73][2] = "Cada a&ntilde;o tres per&iacute;odos de sesiones.";
 choices[73][3] = "Las sesiones del Parlamento no se dividen en per&iacute;odos de sesiones.";
 answers[73] = choices[73][0];
 units[73] = "5";
 comments[73] = "Id Pregunta: 290. UNION EUROPEA";


//  Id pregunta: 175 Año de creación de pregunta: 2016
 questions[74]= "75)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola en su Art&iacute;culo 159, los miembros del Tribunal Constitucional ser&aacute;n designados por un per&iacute;odo de:";
 choices[74]= new Array();
 choices[74][0] = "seis a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[74][1] = "nueve a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[74][2] = "ocho a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 choices[74][3] = "cuatro a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 answers[74] = choices[74][1];
 units[74] = "1";
 comments[74] = "Id Pregunta: 175. CONSTITUCION1978";


