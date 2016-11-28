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

//  Id pregunta: 676 Año de creación de pregunta: 2016
 questions[0]= "1)  En referencia a la implantaci&oacute;n de la interoperabilidad de la receta electr&oacute;nica:";
 choices[0]= new Array();
 choices[0][0] = "Permite los ciudadanos retiren sus medicamentos en las farmacias de fuera de la Comunidad Aut&oacute;noma en la que hayan sido recetados.";
 choices[0][1] = "Favorece la seguridad del paciente, al incorporar sistemas online de ayuda a la prescripci&oacute;n, que ayudan a la detecci&oacute;n de interaciones medicamentosas o duplicidades terap&eacute;uticas.";
 choices[0][2] = "Facilita al m&eacute;dico el seguimiento de la adherencia al tratamiento por parte del paciente.";
 choices[0][3] = "Todas las anteriores son correctas.";
 answers[0] = choices[0][3];
 units[0] = "47";
 comments[0] = "Id Pregunta: 676. Receta electr&oacute;nica";


//  Id pregunta: 177 Año de creación de pregunta: 2016
 questions[1]= "2)  El art&iacute;culo 152 de la Constituci&oacute;n espa&ntilde;ola se refiere a la organizaci&oacute;n instituicional b&aacute;sica de cada Comunidad Aut&oacute;noma, la cual se basar&aacute; en:";
 choices[1]= new Array();
 choices[1][0] = "Una Conseller&iacute;a legislativa, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[1][1] = "Una Asamble legislativa, un Presidente, un Delegado de Gobierno y un Comit&eacute; Superior del Poder Judicial.";
 choices[1][2] = "Una Asamble legislativa, un Consejo de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[1][3] = "Un Consejo legislativo, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Supremo.";
 answers[1] = choices[1][2];
 units[1] = "1";
 comments[1] = "Id Pregunta: 177. CONSTITUCION1978";


//  Id pregunta: 232 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos, de conformidad con la Constituci&oacute;n Espa&ntilde;ola, no tiene legitimidad para interponer el recurso de inconstitucionalidad?";
 choices[2]= new Array();
 choices[2][0] = "El Presidente del Senado.";
 choices[2][1] = "El Defensor del Pueblo.";
 choices[2][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[2][3] = "El Presidente del Gobierno.";
 answers[2] = choices[2][2];
 units[2] = "1";
 comments[2] = "Id Pregunta: 232. CONSTITUCION1978";


//  Id pregunta: 529 Año de creación de pregunta: 2016
 questions[3]= "4)  Los interesados con capacidad de obrar podr&aacute;n actuar por medio de representante:";
 choices[3]= new Array();
 choices[3][0] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 choices[3][1] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[3][2] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[3][3] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 answers[3] = choices[3][2];
 units[3] = "7";
 comments[3] = "Id Pregunta: 529. LEY 39/2015";


//  Id pregunta: 148 Año de creación de pregunta: 2016
 questions[4]= "5)  La publicaci&oacute;n del &laquo;Bolet&iacute;n Oficial del Estado&raquo; en la sede electr&oacute;nica del Organismo competente:";
 choices[4]= new Array();
 choices[4][0] = "Tiene car&aacute;cter supletorio respecto a la versi&oacute;n en formato papel";
 choices[4][1] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, aunque no se podr&aacute; derivar de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[4][2] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[4][3] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se habr&aacute;n de determinar necesariamente por Ley, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 answers[4] = choices[4][2];
 units[4] = "7";
 comments[4] = "Id Pregunta: 148. Ley 39/2015, Art&iacute;culo 131";


//  Id pregunta: 30 Año de creación de pregunta: 2016
 questions[5]= "6)  El sistema operativo OS X El Capit&aacute;n incluye un conjunto de servicios de red para compartir archivos entre Mac y PC, &iquest;cu&aacute;l es el protocolo por defecto que emplea OS X El Capit&aacute;n?";
 choices[5]= new Array();
 choices[5][0] = "SMB3";
 choices[5][1] = "AFP";
 choices[5][2] = "NFS";
 choices[5][3] = "FTP";
 answers[5] = choices[5][0];
 units[5] = "59";
 comments[5] = "Id Pregunta: 30. AGE A1 2015";


//  Id pregunta: 576 Año de creación de pregunta: 2016
 questions[6]= "7)  Son herramientas espec&iacute;ficas de control de versiones de software:";
 choices[6]= new Array();
 choices[6][0] = "Mercurial, Git y Apache Subversion.";
 choices[6][1] = "Gimp, Mercurial y Git.";
 choices[6][2] = "RedMine, Planner y OpenProj.";
 choices[6][3] = "Cassandra, Git y REDIS.";
 answers[6] = choices[6][0];
 units[6] = "92";
 comments[6] = "Id Pregunta: 576. Tema 92. TAI 2016.";


//  Id pregunta: 357 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[7]= new Array();
 choices[7][0] = "El Parlamento y el Consejo.";
 choices[7][1] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[7][2] = "El Parlamento y la Comisi&oacute;n.";
 choices[7][3] = "La Comisi&oacute;n y el Consejo.";
 answers[7] = choices[7][1];
 units[7] = "5";
 comments[7] = "Id Pregunta: 357. UNION EUROPEA";


//  Id pregunta: 631 Año de creación de pregunta: 2016
 questions[8]= "9)  Seg&uacute;n la Ley de Protecci&oacute;n de Datos de Car&aacute;cter Personal, no podr&aacute;n realizarse transferencias de datos de car&aacute;cter personal a pa&iacute;ses que no proporcionen un nivel de protecci&oacute;n equiparable al de esta Ley. &iquest;Qui&eacute;n se encarga de evaluar el nivel adecuado de protecci&oacute;n que ofrece el pa&iacute;s de destino de los datos?";
 choices[8]= new Array();
 choices[8][0] = "El Ministerio de Asuntos Exteriores junto con el Ministerio de Justicia.";
 choices[8][1] = "El responsable de la custodia de los datos enviados.";
 choices[8][2] = "La Agencia Europea de Cooperaci&oacute;n.";
 choices[8][3] = "La Agencia de Protecci&oacute;n de Datos.";
 answers[8] = choices[8][3];
 units[8] = "35";
 comments[8] = "Id Pregunta: 631. Junta de Extremadura A1 2015";


//  Id pregunta: 749 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Cu&aacute;les de los siguientes principios de inspiraci&oacute;n en la funci&oacute;n gerencial NO incorpora la Ley 40/2015?";
 choices[9]= new Array();
 choices[9][0] = "Buena fe, confianza leg&iacute;tima y lealtad institucional.";
 choices[9][1] = "Calidad de los servicios p&uacute;blicos";
 choices[9][2] = "Responsabilidad por la gesti&oacute;n p&uacute;blica.";
 choices[9][3] = "Servicio efectivo a los ciudadanos";
 answers[9] = choices[9][1];
 units[9] = "18, 20";
 comments[9] = "Id Pregunta: 749. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 167 Año de creación de pregunta: 2016
 questions[10]= "11)  Una de las preocupaciones de la Agenda Digital Europea es la &ldquo;exclusi&oacute;n digital&rdquo;. Para combatirla, se incluyen medidas como...";
 choices[10]= new Array();
 choices[10][0] = "incrementar la eficiencia energ&eacute;tica y reducir la energ&iacute;a que se usa en los hogares";
 choices[10][1] = "incrementar el ratio de participaci&oacute;n de personas con discapacidad en actividades p&uacute;blicas, sociales y econ&oacute;micas a trav&eacute;s de proyectos de inclusi&oacute;n.";
 choices[10][2] = "implementar un sistema de firma electr&oacute;nica seguro que funcione en cualquiera de los Estados Miembros";
 choices[10][3] = "apoyar las pol&iacute;ticas del sector audiovisual en pos de las personas con discapacidad";
 answers[10] = choices[10][1];
 units[10] = "19";
 comments[10] = "Id Pregunta: 167. https://ec.europa.eu/digital-single-market/en/digital-inclusion-better-eu-society";


//  Id pregunta: 669 Año de creación de pregunta: 2016
 questions[11]= "12)  Se&ntilde;ale la opci&oacute;n falsa respecto a la instrucci&oacute;n del procedimiento definida en la Ley 39/2015:";
 choices[11]= new Array();
 choices[11][0] = "Los interesados podr&aacute;n, en cualquier momento del procedimiento anterior al tr&aacute;mite de audiencia, aducir alegaciones y aportar documentos u otros elementos de juicio.";
 choices[11][1] = "El instructor del procedimiento s&oacute;lo podr&aacute; rechazar las pruebas propuestas por los interesados cuando sean manifiestamente improcedentes o innecesarias, mediante resoluci&oacute;n motivada.";
 choices[11][2] = "Salvo disposici&oacute;n expresa en contrario, los informes ser&aacute;n preceptivos y vinculantes.";
 choices[11][3] = "Se podr&aacute; prescindir del tr&aacute;mite de audiencia cuando no figuren en el procedimiento ni sean tenidos en cuenta en la resoluci&oacute;n otros hechos ni otras alegaciones y pruebas que las aducidas por el interesado.";
 answers[11] = choices[11][2];
 units[11] = "7";
 comments[11] = "Id Pregunta: 669. Cap&iacute;tulo IV, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 629 Año de creación de pregunta: 2016
 questions[12]= "13)  Seg&uacute;n el Real Decreto 3/2010 sobre el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; organismo es el encargado de actuar ante cualquier agresi&oacute;n recibida en los sistemas de informaci&oacute;n de las Administraciones P&uacute;blicas?";
 choices[12]= new Array();
 choices[12][0] = "El CCN-CERT (Centro Criptol&oacute;gico Nacional&ndash;Computer Emergency Reaction Team).";
 choices[12][1] = "El GDT (Grupo de Delitos Telem&aacute;ticos).";
 choices[12][2] = "La BIT (Brigada de Investigaci&oacute;n Tecnol&oacute;gica).";
 choices[12][3] = "El CCN-STIC (Centro Criptol&oacute;gico Nacional-Seguridad de las Tecnolog&iacute;as de Informaci&oacute;n y Comunicaciones).";
 answers[12] = choices[12][0];
 units[12] = "46";
 comments[12] = "Id Pregunta: 629. Junta de Extremadura A1 2015";


//  Id pregunta: 196 Año de creación de pregunta: 2016
 questions[13]= "14)  La competencia de nombrar y cesar a los ministros corresponde, seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola:";
 choices[13]= new Array();
 choices[13][0] = "Al Presidente del Gobierno.";
 choices[13][1] = "A las Cortes Generales";
 choices[13][2] = "A los electores.";
 choices[13][3] = "Al Rey, a propuesta del Presidente del Gobierno.";
 answers[13] = choices[13][3];
 units[13] = "1";
 comments[13] = "Id Pregunta: 196. CONSTITUCION1978";


//  Id pregunta: 409 Año de creación de pregunta: 2016
 questions[14]= "15)  La mayor novedad de la Ley para la igualdad efectiva de mujeres y hombres, radica en:";
 choices[14]= new Array();
 choices[14][0] = "Prevenir las conductas discriminatorias.";
 choices[14][1] = "Proveer pol&iacute;ticas activas para hacer efectivo el principio de igualdad.";
 choices[14][2] = "Todas son correctas.";
 choices[14][3] = "Proveer pol&iacute;ticas pasivas para hacer efectivo el principio de igualdad.";
 answers[14] = choices[14][2];
 units[14] = "14";
 comments[14] = "Id Pregunta: 409. POLITICAS DE IGUALDAD";


//  Id pregunta: 398 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Qu&eacute; art&iacute;culo de la Ley Org&aacute;nica 3/2007 para la igualdad efectiva de mujeres y hombres, regula las acciones positivas?";
 choices[15]= new Array();
 choices[15][0] = "Art. 13, L.O.3/2007.";
 choices[15][1] = "Art. 14, L.O.3/2007.";
 choices[15][2] = "Art. 11, L.O.3/2007.";
 choices[15][3] = "Ninguna es correcta.";
 answers[15] = choices[15][2];
 units[15] = "14";
 comments[15] = "Id Pregunta: 398. POLITICAS DE IGUALDAD";


//  Id pregunta: 379 Año de creación de pregunta: 2016
 questions[16]= "17)  Seg&uacute;n recoge la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, &iquest;con qu&eacute; frecuencia debe elaborar el Gobierno un informe sobre el conjunto de actuaciones en relaci&oacute;n con le efectividad del principio de igualdad entre mujeres y hombres?";
 choices[16]= new Array();
 choices[16][0] = "Anual.";
 choices[16][1] = "Semestral.";
 choices[16][2] = "Seg&uacute;n se determine reglamentariamente.";
 choices[16][3] = "Bienal.";
 answers[16] = choices[16][2];
 units[16] = "14";
 comments[16] = "Id Pregunta: 379. POLITICAS DE IGUALDAD";


//  Id pregunta: 467 Año de creación de pregunta: 2016
 questions[17]= "18)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales deber&aacute; de contener:";
 choices[17]= new Array();
 choices[17][0] = "Las respuestas a) y b) son correctas.";
 choices[17][1] = "Las respuestas a) y b) no son correctas.";
 choices[17][2] = "Contenido coherente con los planes sectoriales.";
 choices[17][3] = "Programas de actuaci&oacute;n de existentes en el &aacute;mbito de cada departamento.";
 answers[17] = choices[17][0];
 units[17] = "10";
 comments[17] = "Id Pregunta: 467. PRESUPUESTOS GENERALES";


//  Id pregunta: 505 Año de creación de pregunta: 2016
 questions[18]= "19)  Respecto a la Ley Org&aacute;nica 2/2012 se&ntilde;ale la respuesta falsa:";
 choices[18]= new Array();
 choices[18][0] = "La elaboraci&oacute;n, aprobaci&oacute;n y ejecuci&oacute;n de los Presupuestos y dem&aacute;s actuaciones que afecten a los gastos o ingresos de las Administraciones P&uacute;blicas y dem&aacute;s entidades que forman parte del sector p&uacute;blico se someter&aacute; al principio de estabilidad presupuestaria.";
 choices[18][1] = "Ninguna Administraci&oacute;n P&uacute;blica podr&aacute; incurrir en d&eacute;ficit estructural, definido como d&eacute;ficit ajustado del ciclo, neto de medidas excepcionales y temporales.";
 choices[18][2] = "Excepcionalmente, el Estado y las Comunidades Aut&oacute;nomas podr&aacute;n incurrir en d&eacute;ficit estructural en caso de cat&aacute;strofes naturales, recesi&oacute;n econ&oacute;mica grave o situaciones de emergencia extraordinaria que escapen al control de las Administraciones P&uacute;blicas y perjudiquen considerablemente su situaci&oacute;n financiera o su sostenibilidad econ&oacute;mica o social.";
 choices[18][3] = "Las Corporaciones Locales deber&aacute;n mantener una posici&oacute;n de equilibrio presupuestario.";
 answers[18] = choices[18][3];
 units[18] = "10";
 comments[18] = "Id Pregunta: 505. PRESUPUESTOS GENERALES";


//  Id pregunta: 600 Año de creación de pregunta: 2016
 questions[19]= "20)  Entre la documentaci&oacute;n de la Seguridad de la Organizaci&oacute;n nos podremos encontrar:";
 choices[19]= new Array();
 choices[19][0] = "La Pol&iacute;tica de Seguridad Corporativa ser&aacute; elaborada por el Responsable de Seguridad Corporativa y aprobada por el Comit&eacute; de Seguridad Corporativa y por la Alta Direcci&oacute;n.";
 choices[19][1] = "La Pol&iacute;tica de Seguridad de las TIC que debe estar alineada en todo momento con el Mantenimiento de los Sistemas de Informaci&oacute;n.";
 choices[19][2] = "El Documento de Seguridad que ha de estar presente en toda documentaci&oacute;n de la seguridad de la informaci&oacute;n.";
 choices[19][3] = "Todas las respuestas anteriores son correctas.";
 answers[19] = choices[19][0];
 units[19] = "45";
 comments[19] = "Id Pregunta: 600. Junta de Extremadura A1 2015";


//  Id pregunta: 758 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;Cu&aacute;l de los siguientes no es uno de los pilares en que se basa la Agenda Digital Europea?";
 choices[20]= new Array();
 choices[20][0] = "Promover un acceso a internet r&aacute;pido y ultrarr&aacute;pido para todos";
 choices[20][1] = "Implantar el mercado general europeo";
 choices[20][2] = "Fomentar la alfabetizaci&oacute;n, la capacitaci&oacute;n y la inclusi&oacute;n digitales";
 choices[20][3] = "Consolidar la confianza y la seguridad en l&iacute;nea";
 answers[20] = choices[20][1];
 units[20] = "19";
 comments[20] = "Id Pregunta: 758. Agenda Digital Europea";


//  Id pregunta: 142 Año de creación de pregunta: 2016
 questions[21]= "22)  El plazo para la interposici&oacute;n del recurso de alzada ser&aacute;:";
 choices[21]= new Array();
 choices[21][0] = "De un mes si el acto fuera presunto";
 choices[21][1] = "De un mes si el acto fuera expreso";
 choices[21][2] = "De un mes en cualquier caso";
 choices[21][3] = "No existe un plazo m&aacute;ximo para la interposici&oacute;n de un recurso de alzada";
 answers[21] = choices[21][1];
 units[21] = "8";
 comments[21] = "Id Pregunta: 142. Ley 39/2015, Art&iacute;culo 122";


//  Id pregunta: 265 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Qui&eacute;n debe refrendar el nombramiento del Presidente del Consejo General del Poder Judicial?:";
 choices[22]= new Array();
 choices[22][0] = "El Presidente del Senado";
 choices[22][1] = "No es un acto Real, por tanto no conlleva refrendo";
 choices[22][2] = "El Presidente del Gobierno";
 choices[22][3] = "El Presidente de las Cortes Generales";
 answers[22] = choices[22][2];
 units[22] = "1";
 comments[22] = "Id Pregunta: 265. CONSTITUCION1978";


//  Id pregunta: 500 Año de creación de pregunta: 2016
 questions[23]= "24)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la Deuda P&uacute;blica podr&aacute; estar representada en:";
 choices[23]= new Array();
 choices[23][0] = "En t&iacute;tulos-valores.";
 choices[23][1] = "Las respuestas a) y b) son correctas.";
 choices[23][2] = "Las respuestas a) y b) no son correctas.";
 choices[23][3] = "En cuenta.";
 answers[23] = choices[23][1];
 units[23] = "10";
 comments[23] = "Id Pregunta: 500. PRESUPUESTOS GENERALES";


//  Id pregunta: 542 Año de creación de pregunta: 2016
 questions[24]= "25)  Respecto a los poderes que se inscriban en los registros electr&oacute;nicos generales y particulares de apoderamientos pueden ser:";
 choices[24]= new Array();
 choices[24][0] = "un poder general para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa y ante cualquier Administraci&oacute;n";
 choices[24][1] = "un poder para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa ante una Administraci&oacute;n u Organismo concreto";
 choices[24][2] = "un poder para que el apoderado pueda actuar en nombre del poderdante &uacute;nicamente para la realizaci&oacute;n de determinados tr&aacute;mites especificados en el poder";
 choices[24][3] = "todas son correctas";
 answers[24] = choices[24][3];
 units[24] = "7";
 comments[24] = "Id Pregunta: 542. LEY 39/2015";


//  Id pregunta: 674 Año de creación de pregunta: 2016
 questions[25]= "26)  En cuanto a la Historia Cl&iacute;nica Digital del Sistema Nacional de Salud, se&ntilde;ale cual de las siguientes afirmaciones es Incorrecta:";
 choices[25]= new Array();
 choices[25][0] = "Se ha implementado por mandato legal, tanto por la Ley 16/2003 de cohesi&oacute;n y calidad del Sistema Nacional de Salud, como por la Ley 41/2002 de Autonom&iacute;a del Paciente.";
 choices[25][1] = "Permite que los profesionales sanitarios puedan acceder a los datos de salud del paciente, cuando este se encuentre desplazado fuera de su Comunidad Aut&oacute;noma de origen y requiera asistencia sanitaria.";
 choices[25][2] = "De acuerdo a su dise&ntilde;o funcional, permite acceder a la totalidad de los contenidos existentes en la Historia Cl&iacute;nica Electr&oacute;nica de las Comunidades Aut&oacute;nomas.";
 choices[25][3] = "Gracias a ella, de acuerdo al informe CORA de Febrero de 2016, ya son 25,5 millones de ciudadanos los que disponen de informes cl&iacute;nicos en el Sstema Nacional de Salud.";
 answers[25] = choices[25][2];
 units[25] = "47";
 comments[25] = "Id Pregunta: 674. Historia Cl&iacute;nica Digital";


//  Id pregunta: 128 Año de creación de pregunta: 2016
 questions[26]= "27)  El Presidente del Consejo de Transparencia y Buen Gobierno ser&aacute; nombrado ";
 choices[26]= new Array();
 choices[26][0] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Parlamento";
 choices[26][1] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Presidente del Gobierno";
 choices[26][2] = "Por un per&iacute;odo no renovable de cinco a&ntilde;os mediante Real Decreto, a propuesta del titular del Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[26][3] = "Por un per&iacute;odo no renovable de seis a&ntilde;os mediante Real Decreto, a propuesta del Consejo de Ministros.";
 answers[26] = choices[26][2];
 units[26] = "22";
 comments[26] = "Id Pregunta: 128. ";


//  Id pregunta: 404 Año de creación de pregunta: 2016
 questions[27]= "28)  La igualdad como principio fundamental en la UE, entra en vigor con:";
 choices[27]= new Array();
 choices[27][0] = "El Tratado de Roma, 1957.";
 choices[27][1] = "El Acta &Uacute;nica Europea.";
 choices[27][2] = "El Tratado de &Aacute;msterdam, 1997.";
 choices[27][3] = "Ninguna es correcta.";
 answers[27] = choices[27][2];
 units[27] = "14";
 comments[27] = "Id Pregunta: 404. POLITICAS DE IGUALDAD";


//  Id pregunta: 561 Año de creación de pregunta: 2016
 questions[28]= "29)  Uno de los objetivos de la Agenda Digital para Espa&ntilde;a es desarrollar la econom&iacute;a digital, &iquest;qu&eacute; actuaciones se deben desarrollar para lograr esto?";
 choices[28]= new Array();
 choices[28][0] = "Impulsar la producci&oacute;n y distribuci&oacute;n a trav&eacute;s de Internet de contenidos digitales";
 choices[28][1] = "Favorecer la internacionalizaci&oacute;n de las empresas tecnol&oacute;gicas";
 choices[28][2] = "Incentivar el uso transformador de las TIC en nuestras empresas";
 choices[28][3] = "Todos los anteriores";
 answers[28] = choices[28][3];
 units[28] = "19";
 comments[28] = "Id Pregunta: 561. Agenda Digital";


//  Id pregunta: 567 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Qu&eacute; limites marca el &quot;pacto fiscal europeo&quot; de 2012 para sus Estados Miembros?";
 choices[29]= new Array();
 choices[29][0] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 40% del PIB";
 choices[29][1] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 choices[29][2] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 50% del PIB";
 choices[29][3] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 answers[29] = choices[29][3];
 units[29] = "12";
 comments[29] = "Id Pregunta: 567. Modelo econ&oacute;mico";


//  Id pregunta: 166 Año de creación de pregunta: 2016
 questions[30]= "31)  El indicador de la Comisi&oacute;n Europea &ldquo;DESI&rdquo; (Digital Economy &amp; Society Index) tiene entre sus dimensiones:";
 choices[30]= new Array();
 choices[30][0] = "Interoperabilidad";
 choices[30][1] = "Integridad";
 choices[30][2] = "Capital humano";
 choices[30][3] = "Trazabilidad";
 answers[30] = choices[30][2];
 units[30] = "19";
 comments[30] = "Id Pregunta: 166. https://ec.europa.eu/digital-single-market/en/desi Conectividad, Capital humano, Uso de internet, Integraci&oacute;n de tecnolog&iacute;a digital, Servicios p&uacute;blicos digitales";


//  Id pregunta: 819 Año de creación de pregunta: 2016
 questions[31]= "32)  Los servicios territoriales de la Administraci&oacute;n General del Estado en la Comunidad Aut&oacute;noma se organizar&aacute;n atendiendo al mejor cumplimiento de sus fines, en:";
 choices[31]= new Array();
 choices[31][0] = "servicios integrados en las Delegaciones del Gobierno";
 choices[31][1] = "servicios no integrados en las Delegaciones del Gobierno";
 choices[31][2] = "servicios integrados y no integrados en las Delegaciones del Gobierno";
 choices[31][3] = "ninguna es correcta";
 answers[31] = choices[31][2];
 units[31] = "4, 7, 8, 9";
 comments[31] = "Id Pregunta: 819. Ley 40/2015";


//  Id pregunta: 355 Año de creación de pregunta: 2016
 questions[32]= "33)  En el marco de la Uni&oacute;n Europea, los dict&aacute;menes:";
 choices[32]= new Array();
 choices[32][0] = "Son vinculantes solamente.";
 choices[32][1] = "No son vinculantes, ya que su contenido no obliga a aqu&eacute;llos a los que van dirigidos.";
 choices[32][2] = "Son preceptivos y vinculantes.";
 choices[32][3] = "Son preceptivos y no vinculantes.";
 answers[32] = choices[32][1];
 units[32] = "5";
 comments[32] = "Id Pregunta: 355. UNION EUROPEA";


//  Id pregunta: 370 Año de creación de pregunta: 2016
 questions[33]= "34)  Establecer la interpretaci&oacute;n adecuada de los Tratados de la Uni&oacute;n Europea y las normas de derecho derivado es el objeto de:";
 choices[33]= new Array();
 choices[33][0] = "Un recurso de incumplimiento.";
 choices[33][1] = "Recurso de carencia.";
 choices[33][2] = "Cuesti&oacute;n o incidente prejudicial.";
 choices[33][3] = "Ninguna es correcta.";
 answers[33] = choices[33][2];
 units[33] = "5";
 comments[33] = "Id Pregunta: 370. UNION EUROPEA";


//  Id pregunta: 242 Año de creación de pregunta: 2016
 questions[34]= "35)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, es competencia del Rey:";
 choices[34]= new Array();
 choices[34][0] = "Refrendar los actos del Presidente de Gobierno.";
 choices[34][1] = "Previa autorizaci&oacute;n del Presidente de Gobierno, declarar la guerra y hacer la paz.";
 choices[34][2] = "El Alto Patronazgo de las Reales Academias.";
 choices[34][3] = "Sancionar y publicar las leyes.";
 answers[34] = choices[34][2];
 units[34] = "1";
 comments[34] = "Id Pregunta: 242. CONSTITUCION1978";


//  Id pregunta: 639 Año de creación de pregunta: 2016
 questions[35]= "36)  En el sistema operativo Unix/Linux, el comando id:";
 choices[35]= new Array();
 choices[35][0] = "Muestra el n&uacute;mero de identificaci&oacute;n y el grupo al que pertenece el usuario.";
 choices[35][1] = "El comando id no existe.";
 choices[35][2] = "Muestra el n&uacute;mero de procesos lanzados por el usuario.";
 choices[35][3] = "Muestra las hebras y las identificaciones de los archivos abiertos por el usuario.";
 answers[35] = choices[35][0];
 units[35] = "57";
 comments[35] = "Id Pregunta: 639. Junta de Extremadura A1 2015";


//  Id pregunta: 633 Año de creación de pregunta: 2016
 questions[36]= "37)  La segmentaci&oacute;n es un esquema de asignaci&oacute;n de memoria que:";
 choices[36]= new Array();
 choices[36][0] = "Divide la memoria f&iacute;sica disponible en un n&uacute;mero fijo de particiones cuyo tama&ntilde;o tambi&eacute;n es fijo.";
 choices[36][1] = "Divide la memoria f&iacute;sica disponible en particiones cuyo n&uacute;mero y tama&ntilde;o var&iacute;a para adaptarse a las exigencias los procesos.";
 choices[36][2] = "Divide el espacio de direcciones de cada proceso en bloques que puedan ser situados en &aacute;reas de memoria no contiguas.";
 choices[36][3] = "Divide la memoria en dos particiones: una para el sistema operativo y otra para el proceso que se encuentra en ejecuci&oacute;n.";
 answers[36] = choices[36][2];
 units[36] = "50";
 comments[36] = "Id Pregunta: 633. Junta de Extremadura A1 2015";


//  Id pregunta: 18 Año de creación de pregunta: 2016
 questions[37]= "38)  Indique en qu&eacute; capa del modelo OSI se establece la encriptaci&oacute;n:";
 choices[37]= new Array();
 choices[37][0] = "Aplicaci&oacute;n";
 choices[37][1] = "Sesi&oacute;n";
 choices[37][2] = "Presentaci&oacute;n";
 choices[37][3] = "Transporte";
 answers[37] = choices[37][2];
 units[37] = "105";
 comments[37] = "Id Pregunta: 18. AGE A1 2015";


//  Id pregunta: 141 Año de creación de pregunta: 2016
 questions[38]= "39)  El recurso de alzada puede interponerse:";
 choices[38]= new Array();
 choices[38][0] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna en todo caso";
 choices[38][1] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna o ante el competente para resolverlo";
 choices[38][2] = "Ante el &oacute;rgano competente para resolverlo en todo caso";
 choices[38][3] = "Ante el Defensor del Pueblo";
 answers[38] = choices[38][1];
 units[38] = "8";
 comments[38] = "Id Pregunta: 141. Ley 39/2015, Art&iacute;culo 121";


//  Id pregunta: 415 Año de creación de pregunta: 2016
 questions[39]= "40)  En los estudios, estad&iacute;sticas, encuestas y recogidas de datos se incluir&aacute; sistem&aacute;ticamente:";
 choices[39]= new Array();
 choices[39][0] = "Un informe de g&eacute;nero.";
 choices[39][1] = "La variable de sexo.";
 choices[39][2] = "La variable de edad.";
 choices[39][3] = "La variable de comportamiento.";
 answers[39] = choices[39][1];
 units[39] = "14";
 comments[39] = "Id Pregunta: 415. POLITICAS DE IGUALDAD";


//  Id pregunta: 418 Año de creación de pregunta: 2016
 questions[40]= "41)  Respetar&aacute;n la igualdad entre mujeres y hombres evitando cualquier forma de discriminaci&oacute;n, los medios de comunicaci&oacute;n de titularidad:";
 choices[40]= new Array();
 choices[40][0] = "P&uacute;blica.";
 choices[40][1] = "Privada.";
 choices[40][2] = "A y B son correctas.";
 choices[40][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[40] = choices[40][2];
 units[40] = "14";
 comments[40] = "Id Pregunta: 418. POLITICAS DE IGUALDAD";


//  Id pregunta: 533 Año de creación de pregunta: 2016
 questions[41]= "42)  Se entender&aacute; acreditada la representaci&oacute;n realizada:";
 choices[41]= new Array();
 choices[41][0] = "mediante apoderamiento apud acta efectuado por comparecencia personal";
 choices[41][1] = "mediante apoderamiento apud acta efectuado por comparecencia electr&oacute;nica en la correspondiente sede electr&oacute;nica";
 choices[41][2] = "a trav&eacute;s de la acreditaci&oacute;n de su inscripci&oacute;n en el registro electr&oacute;nico de apoderamientos de la Administraci&oacute;n P&uacute;blica competente";
 choices[41][3] = "todas son correctas";
 answers[41] = choices[41][3];
 units[41] = "7";
 comments[41] = "Id Pregunta: 533. LEY 39/2015";


//  Id pregunta: 213 Año de creación de pregunta: 2016
 questions[42]= "43)  Seg&uacute;n el Art&iacute;culo 59 de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; v&aacute;lida la Regencia nombrada por las Cortes Generales que se componga del siguiente n&uacute;mero de personas:";
 choices[42]= new Array();
 choices[42][0] = "Cinco.";
 choices[42][1] = "Dos.";
 choices[42][2] = "Cuatro.";
 choices[42][3] = "Siete.";
 answers[42] = choices[42][0];
 units[42] = "1";
 comments[42] = "Id Pregunta: 213. CONSTITUCION1978";


//  Id pregunta: 532 Año de creación de pregunta: 2016
 questions[43]= "44)  La representaci&oacute;n podr&aacute; acreditarse:";
 choices[43]= new Array();
 choices[43][0] = "mediante cualquier t&iacute;tulo jur&iacute;dico";
 choices[43][1] = "mediante resoluci&oacute;n judicial especial";
 choices[43][2] = "&uacute;nicamente mediante poder notarial";
 choices[43][3] = "mediante cualquier medio v&aacute;lido en Derecho que deje constancia fidedigna de su existencia";
 answers[43] = choices[43][3];
 units[43] = "7";
 comments[43] = "Id Pregunta: 532. LEY 39/2015";


//  Id pregunta: 59 Año de creación de pregunta: 2016
 questions[44]= "45)  Con respecto a la norma ISO/IEC 20000 de gesti&oacute;n de servicios TI:";
 choices[44]= new Array();
 choices[44][0] = "Permite certificar a individuos a lo largo de diferentes niveles de conocimiento.";
 choices[44][1] = "Impone el uso exclusivo de ITIL como metodolog&iacute;a a seguir.";
 choices[44][2] = "No permite validar la capacidad de un proveedor de servicios TI de gestionar efectivamente servicios TI.";
 choices[44][3] = "Microsoft Operation Framework (MOF) puede ser usado para conseguir su cumplimiento.";
 answers[44] = choices[44][3];
 units[44] = "101";
 comments[44] = "Id Pregunta: 59. AGE A1 2015";


//  Id pregunta: 682 Año de creación de pregunta: 2016
 questions[45]= "46)  Seg&uacute;n el Real Decreto Ley 5/2013, de 15 de marzo, de medidas para favorecer la continuidad de la vida laboral de los trabajadores de mayor edad y promover el envejecimiento activo:";
 choices[45]= new Array();
 choices[45][0] = "La cuant&iacute;a de la pensi&oacute;n de jubilaci&oacute;n compatible con el trabajo ser&aacute; equivalente al 50 por 100 del importe resultante en el reconocimiento inicial, una vez aplicado, si procede, el l&iacute;mite m&aacute;ximo de pensi&oacute;n p&uacute;blica, o del que se est&eacute; percibiendo, en el momento de inicio de la compatibilidad con el trabajo, excluido, en todo caso, el complemento por m&iacute;nimos, cualquiera que sea la jornada laboral o la actividad que realice el pensionista.";
 choices[45][1] = "El trabajo compatible debe realizarse a tiempo parcial.";
 choices[45][2] = "Finalizada la relaci&oacute;n laboral por cuenta ajena o producido el cese en la actividad por cuenta propia, se restablecer&aacute; el percibo &iacute;ntegro de la pensi&oacute;n de jubilaci&oacute;n transcurridos 12 meses de la finalizaci&oacute;n de la relaci&oacute;n laboral.";
 choices[45][3] = "El acceso a la pensi&oacute;n podr&aacute; tener lugar hasta 5 a&ntilde;os antes de la edad que en cada caso resulte de aplicaci&oacute;n.";
 answers[45] = choices[45][0];
 units[45] = "14";
 comments[45] = "Id Pregunta: 682. Pensiones";


//  Id pregunta: 680 Año de creación de pregunta: 2016
 questions[46]= "47)  De acuerdo a la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia, se define dependencia como:";
 choices[46]= new Array();
 choices[46][0] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[46][1] = "El estado de car&aacute;cter permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[46][2] = "El estado de car&aacute;cter temporal en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[46][3] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad, la discapacidad o la baja laboral, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 answers[46] = choices[46][1];
 units[46] = "14";
 comments[46] = "Id Pregunta: 680. Dependencia";


//  Id pregunta: 133 Año de creación de pregunta: 2016
 questions[47]= "48)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, cu&aacute;l no corresponde a una de las medidas implantadas:";
 choices[47]= new Array();
 choices[47][0] = "Apoyos fiscales y en materia de Seguridad Social a los emprendedores.";
 choices[47][1] = "Medidas de conciliaci&oacute;n familiar especiales para los emprendedores.";
 choices[47][2] = "Modificaci&oacute;n de la ley concursal para facilitar los acuerdos de refinanciaci&oacute;n.";
 choices[47][3] = "Creaci&oacute;n de la figura del Emprendedor de Responsabilidad Limitada.";
 answers[47] = choices[47][1];
 units[47] = "12";
 comments[47] = "Id Pregunta: 133. Leyes modelo econ&oacute;mico";


//  Id pregunta: 724 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Cu&aacute;l es la principal desventaja de sprints m&aacute;s largos?";
 choices[48]= new Array();
 choices[48][0] = "Permite reaccionar al equipo mejor ante imprevistos";
 choices[48][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[48][2] = "Se reduce el n&uacute;mero de reuniones de sprint";
 choices[48][3] = "Se puede desarrollar algo diferente a lo requerido y obtener el feedback del cliente m&aacute;s tarde.";
 answers[48] = choices[48][3];
 units[48] = "34, 84";
 comments[48] = "Id Pregunta: 724. Metodologias &aacute;giles";


//  Id pregunta: 646 Año de creación de pregunta: 2016
 questions[49]= "50)  El Estatuto B&aacute;sico del empleado p&uacute;blico determina como clases de personal los siguientes:";
 choices[49]= new Array();
 choices[49][0] = "Funcionarios de carrera, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 choices[49][1] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal.";
 choices[49][2] = "Funcionarios e interinos.";
 choices[49][3] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 answers[49] = choices[49][3];
 units[49] = "20";
 comments[49] = "Id Pregunta: 646. Junta de Extremadura A1 2015";


//  Id pregunta: 683 Año de creación de pregunta: 2016
 questions[50]= "51)  El Factor de Sostenibilidad, de acuerdo a la Ley 23/2013, de 23 de diciembre, reguladora del Factor de Sostenibilidad y del &Iacute;ndice de Revalorizaci&oacute;n del Sistema de Pensiones de la Seguridad Social:";
 choices[50]= new Array();
 choices[50][0] = "Es un valor que se calcula para cada periodo de 3 a&ntilde;os, comenzando en el a&ntilde;o 2016.";
 choices[50][1] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la evoluci&oacute;n del PIB y otros datos macroecon&oacute;micos.";
 choices[50][2] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la esperanza de vida de los pensionistas.";
 choices[50][3] = "Se aplicar&aacute; para determinar la cuant&iacute;a de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a partir del 1 de Enero del a&ntilde;o 2018.";
 answers[50] = choices[50][2];
 units[50] = "14";
 comments[50] = "Id Pregunta: 683. Pensiones";


//  Id pregunta: 523 Año de creación de pregunta: 2016
 questions[51]= "52)  El sector p&uacute;blico institucional se integra por:";
 choices[51]= new Array();
 choices[51][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho privado vinculados o independientes de las Administraciones P&uacute;blicas";
 choices[51][1] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[51][2] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o independientes de las Administraciones P&uacute;blicas";
 choices[51][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[51] = choices[51][1];
 units[51] = "7";
 comments[51] = "Id Pregunta: 523. LEY 39/2015";


//  Id pregunta: 132 Año de creación de pregunta: 2016
 questions[52]= "53)  Cu&aacute;l de las siguientes leyes no est&aacute; incluida en la reforma tributaria llevada a cabo en el a&ntilde;o 2014:";
 choices[52]= new Array();
 choices[52][0] = "Ley 26/2014, del Impuesto sobre la Renta de las Personas F&iacute;sicas";
 choices[52][1] = "Ley 27/2014, del Impuesto sobre Sociedades";
 choices[52][2] = "Ley 28/2014, de Impuestos Especiales";
 choices[52][3] = "Ley 29/2014, del Impuesto de Valor A&ntilde;adido";
 answers[52] = choices[52][3];
 units[52] = "12";
 comments[52] = "Id Pregunta: 132. Leyes modelo econ&oacute;mico";


//  Id pregunta: 837 Año de creación de pregunta: 2016
 questions[53]= "54)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[53]= new Array();
 choices[53][0] = "Los &oacute;rganos competentes podr&aacute;n avocar para s&iacute; el conocimiento de uno o varios asuntos cuya resoluci&oacute;n corresponda ordinariamente o por delegaci&oacute;n a sus &oacute;rganos administrativos dependientes, cuando circunstancias de &iacute;ndole t&eacute;cnica, econ&oacute;mica, social, jur&iacute;dica o territorial lo hagan conveniente.";
 choices[53][1] = "En los supuestos de delegaci&oacute;n de competencias en &oacute;rganos no dependientes jer&aacute;rquicamente, el conocimiento de un asunto podr&aacute; ser avocado &uacute;nicamente por el &oacute;rgano delegante.";
 choices[53][2] = "En todo caso, la avocaci&oacute;n se realizar&aacute; mediante acuerdo motivado que deber&aacute; ser notificado a los interesados en el procedimiento, si los hubiere, con posterioridad a la resoluci&oacute;n final que se dicte.";
 choices[53][3] = "Contra el acuerdo de avocaci&oacute;n no cabr&aacute; recurso, aunque podr&aacute; impugnarse en el que, en su caso, se interponga contra la resoluci&oacute;n del procedimiento.";
 answers[53] = choices[53][2];
 units[53] = "4, 7, 8, 9";
 comments[53] = "Id Pregunta: 837. Ley 40/2015";


//  Id pregunta: 134 Año de creación de pregunta: 2016
 questions[54]= "55)  La Ley 2/2015, de desindexaci&oacute;n de la econom&iacute;a espa&ntilde;ola, parte de un compromiso del Gobierno en el marco:";
 choices[54]= new Array();
 choices[54][0] = "Del Programa Nacional de Reformas 2015 y 2016.";
 choices[54][1] = "Del Plan de Transformaci&oacute;n Digital 2015-2020.";
 choices[54][2] = "Del Programa Nacional de Reformas 2013 y 2014.";
 choices[54][3] = "Del Pacto Fiscal Europeo de 2012.";
 answers[54] = choices[54][2];
 units[54] = "12";
 comments[54] = "Id Pregunta: 134. Leyes modelo econ&oacute;mico";


//  Id pregunta: 69 Año de creación de pregunta: 2016
 questions[55]= "56)  Los contratos que celebren los poderes adjudicadores se perfeccionan con su:";
 choices[55]= new Array();
 choices[55][0] = "Ejecuci&oacute;n";
 choices[55][1] = "Adjudicaci&oacute;n";
 choices[55][2] = "Licitaci&oacute;n";
 choices[55][3] = "Formalizaci&oacute;n";
 answers[55] = choices[55][3];
 units[55] = "37";
 comments[55] = "Id Pregunta: 69. AGE A1 2015";


//  Id pregunta: 812 Año de creación de pregunta: 2016
 questions[56]= "57)  Existir&aacute; una Delegaci&oacute;n del Gobierno en:";
 choices[56]= new Array();
 choices[56][0] = "la capital del pa&iacute;s";
 choices[56][1] = "cada una de las Comunidades Aut&oacute;nomas";
 choices[56][2] = "cada una de las provincias";
 choices[56][3] = "cada una de las embajadas espa&ntilde;olas";
 answers[56] = choices[56][1];
 units[56] = "4, 7, 8, 9";
 comments[56] = "Id Pregunta: 812. Ley 40/2015";


//  Id pregunta: 569 Año de creación de pregunta: 2016
 questions[57]= "58)  El sector que tiene un mayor peso en el PIB espa&ntilde;ol es el:";
 choices[57]= new Array();
 choices[57][0] = "Primario, que incluye la agricultura y la pesca";
 choices[57][1] = "Secundario, compuesto por los sectores industrial, de la energ&iacute;a y de la construcci&oacute;n";
 choices[57][2] = "Minero, junto con las exportaciones de comercio";
 choices[57][3] = "Servicios";
 answers[57] = choices[57][3];
 units[57] = "12";
 comments[57] = "Id Pregunta: 569. Modelo econ&oacute;mico";


//  Id pregunta: 354 Año de creación de pregunta: 2016
 questions[58]= "59)  El Tribunal de Justicia Europeo est&aacute; compuesto por:";
 choices[58]= new Array();
 choices[58][0] = "Veinticinco Jueces y nueve Abogados Generales.";
 choices[58][1] = "Veintisiete Jueces y veintisiete Abogados Generales.";
 choices[58][2] = "Veintisiete Jueces y ocho Abogados Generales.";
 choices[58][3] = "Veinticinco Jueces y siete Abogados Generales.";
 answers[58] = choices[58][2];
 units[58] = "5";
 comments[58] = "Id Pregunta: 354. UNION EUROPEA";


//  Id pregunta: 219 Año de creación de pregunta: 2016
 questions[59]= "60)  Seg&uacute;n establece el Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola, los Decretos-Leyes son normas con rango de Ley que aprueba el Gobierno:";
 choices[59]= new Array();
 choices[59][0] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad y una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[59][1] = "Sin mediar delegaci&oacute;n de las Cortes, aunque deben ser inmediatamente sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[59][2] = "En casos de extraordinaria y urgente necesidad sin mediar delegaci&oacute;n de las Cortes, aunque una vez aprobados deben ser tramitados como proyectos de ley por el procedimiento de urgencia.";
 choices[59][3] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad, y que una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 answers[59] = choices[59][1];
 units[59] = "1";
 comments[59] = "Id Pregunta: 219. CONSTITUCION1978";


//  Id pregunta: 517 Año de creación de pregunta: 2016
 questions[60]= "61)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[60]= new Array();
 choices[60][0] = "quedar&aacute;n sujetas a lo dispuesto en todas las normas de esta Ley";
 choices[60][1] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[60][2] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo cuando ejerzan potestades administrativas";
 choices[60][3] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley";
 answers[60] = choices[60][1];
 units[60] = "7";
 comments[60] = "Id Pregunta: 517. LEY 39/2015";


//  Id pregunta: 744 Año de creación de pregunta: 2016
 questions[61]= "62)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, se entiende por emprendedor:";
 choices[61]= new Array();
 choices[61][0] = "Aquellas personas f&iacute;sicas que van a desarrollar o est&aacute;n desarrollando una actividad econ&oacute;mica productiva.";
 choices[61][1] = "Aquellas personas independientemente de su condici&oacute;n de persona f&iacute;sica o jur&iacute;dica, que van a desarrollar una actividad econ&oacute;mica productiva.";
 choices[61][2] = "Aquellas personas, independientemente de su condici&oacute;n de persona f&iacute;sica o jur&iacute;dica, que van a desarrollar o est&aacute;n desarrollando una actividad econ&oacute;mica productiva.";
 choices[61][3] = "Ninguna de las anteriores";
 answers[61] = choices[61][2];
 units[61] = "18, 20";
 comments[61] = "Id Pregunta: 744. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 473 Año de creación de pregunta: 2016
 questions[62]= "63)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la agrupaci&oacute;n de los cr&eacute;ditos en cap&iacute;tulos, art&iacute;culos, conceptos y subconceptos corresponde a la clasificaci&oacute;n:";
 choices[62]= new Array();
 choices[62][0] = "Org&aacute;nica.";
 choices[62][1] = "Contable.";
 choices[62][2] = "Econ&oacute;mica.";
 choices[62][3] = "Por programas.";
 answers[62] = choices[62][2];
 units[62] = "10";
 comments[62] = "Id Pregunta: 473. PRESUPUESTOS GENERALES";


//  Id pregunta: 768 Año de creación de pregunta: 2016
 questions[63]= "64)  Las Universidades p&uacute;blicas se regir&aacute;n por:";
 choices[63]= new Array();
 choices[63][0] = "las previsiones de la presente Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[63][1] = "su normativa espec&iacute;fica y supletoriamente por las previsiones de la presente Ley";
 choices[63][2] = "exclusivamente por su normativa espec&iacute;fica";
 choices[63][3] = "exclusivamente por las previsiones de la presente Ley";
 answers[63] = choices[63][1];
 units[63] = "4, 7, 8, 9";
 comments[63] = "Id Pregunta: 768. Ley 40/2015";


//  Id pregunta: 811 Año de creación de pregunta: 2016
 questions[64]= "65)  Los Subdirectores generales:";
 choices[64]= new Array();
 choices[64][0] = "son los responsables inmediatos, bajo la supervisi&oacute;n del Secretario general o del titular del &oacute;rgano del que dependan, de la ejecuci&oacute;n de aquellos proyectos, objetivos o actividades que les sean asignados, as&iacute; como de la gesti&oacute;n ordinaria de los asuntos de la competencia de la Subdirecci&oacute;n General";
 choices[64][1] = "ser&aacute;n nombrados, respetando los principios de igualdad, m&eacute;rito y capacidad, y cesados por el Ministro, Secretario de Estado o Subsecretario del que dependan";
 choices[64][2] = "sus nombramientos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, o de otras Administraciones, cuando as&iacute; lo prevean las normas de aplicaci&oacute;n, pertenecientes al Subgrupo A2";
 choices[64][3] = "todas son correctas";
 answers[64] = choices[64][1];
 units[64] = "4, 7, 8, 9";
 comments[64] = "Id Pregunta: 811. Ley 40/2015";


//  Id pregunta: 452 Año de creación de pregunta: 2016
 questions[65]= "66)  Los Presupuestos Generales son expresi&oacute;n...";
 choices[65]= new Array();
 choices[65][0] = "Cifrada";
 choices[65][1] = "Conjunta";
 choices[65][2] = "Sistem&aacute;tica";
 choices[65][3] = "Todas son correctas";
 answers[65] = choices[65][3];
 units[65] = "10";
 comments[65] = "Id Pregunta: 452. PRESUPUESTOS GENERALES";


//  Id pregunta: 608 Año de creación de pregunta: 2016
 questions[66]= "67)  En ITIL v3, entre las metas del Proceso de la Planificaci&oacute;n y Soporte de la Transici&oacute;n del Servicio, se incluye:";
 choices[66]= new Array();
 choices[66][0] = "Planificar y coordinar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[66][1] = "Identificar, gestionar y limitar riesgos que puedan interrumpir el servicio a partir de la fase de transici&oacute;n del servicio.";
 choices[66][2] = "Planificar, identificar y gestionar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[66][3] = "Todas las respuestas son correctas.";
 answers[66] = choices[66][1];
 units[66] = "101";
 comments[66] = "Id Pregunta: 608. Junta de Extremadura A1 2015";


//  Id pregunta: 271 Año de creación de pregunta: 2016
 questions[67]= "68)  La delegaci&oacute;n legislativa de las Cortes Generales en el Gobierno, cuando se trata de refundir varios textos legales en uno solo, deber&aacute; otorgarse mediante:";
 choices[67]= new Array();
 choices[67][0] = "Ley org&aacute;nica.";
 choices[67][1] = "Ley ordinaria.";
 choices[67][2] = "Ley de bases.";
 choices[67][3] = "Ley marco.";
 answers[67] = choices[67][0];
 units[67] = "1";
 comments[67] = "Id Pregunta: 271. CONSTITUCION1978";


//  Id pregunta: 101 Año de creación de pregunta: 2016
 questions[68]= "69)  El Teorema de Brewer o Principio CAP recoge las siguientes garant&iacute;as:";
 choices[68]= new Array();
 choices[68][0] = "Consistencia (Consistency), Disponibilidad (Availability) y Persistencia (Persistence)";
 choices[68][1] = "Consistencia (Consistency), Disponibilidad (Availability) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[68][2] = "Consistencia (Consistency), Atomicidad (Atomicity) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[68][3] = "Confidencialidad (Confidentiality), Autenticidad (Authentication) y Protecci&oacute;n (Protection)";
 answers[68] = choices[68][1];
 units[68] = "73";
 comments[68] = "Id Pregunta: 101. ";


//  Id pregunta: 110 Año de creación de pregunta: 2016
 questions[69]= "70)  La Poblaci&oacute;n Activa incluye a:";
 choices[69]= new Array();
 choices[69][0] = "S&oacute;lo a aquellas personas que son empleados por cuenta ajena";
 choices[69][1] = "S&oacute;lo a aquellas personas que son empleadas por cuenta propia o ajena";
 choices[69][2] = "Aquellas personas que tienen empleo y a los desempleados que buscan un empleo de forma activa";
 choices[69][3] = "Todo aquel que desea trabajar";
 answers[69] = choices[69][2];
 units[69] = "15";
 comments[69] = "Id Pregunta: 110. ";


//  Id pregunta: 88 Año de creación de pregunta: 2016
 questions[70]= "71)  Seg&uacute;n la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3, &iquest;qu&eacute; tipo de diagrama tiene como objetivo principal la representaci&oacute;n de los aspectos est&aacute;ticos del sistema utilizando diversos mecanismos de abstracci&oacute;n?";
 choices[70]= new Array();
 choices[70][0] = "Diagrama de clases";
 choices[70][1] = "Diagrama de componentes";
 choices[70][2] = "Diagrama de estructura";
 choices[70][3] = "Diagrama de paquetes";
 answers[70] = choices[70][0];
 units[70] = "91";
 comments[70] = "Id Pregunta: 88. AGE A1 2015";


//  Id pregunta: 853 Año de creación de pregunta: 2016
 questions[71]= "72)  Si disponemos de 8 discos SAS de 1TB netos configurados en RAID1, &iquest;de qu&eacute; capacidad neta se dispone en RAID1 en el sistema de almacenamiento?";
 choices[71]= new Array();
 choices[71][0] = "6 TB.";
 choices[71][1] = "8 TB.";
 choices[71][2] = "7 TB.";
 choices[71][3] = "4 TB.";
 answers[71] = choices[71][3];
 units[71] = "53";
 comments[71] = "Id Pregunta: 853. Xunta de Galicia 2015";


//  Id pregunta: 135 Año de creación de pregunta: 2016
 questions[72]= "73)  Dentro de las &uacute;ltimas medidas vigentes de impulso de la actividad econ&oacute;mica, la liberalizaci&oacute;n del comercio implica:";
 choices[72]= new Array();
 choices[72][0] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[72][1] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 choices[72][2] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[72][3] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 answers[72] = choices[72][0];
 units[72] = "12";
 comments[72] = "Id Pregunta: 135. Leyes modelo econ&oacute;mico";


//  Id pregunta: 511 Año de creación de pregunta: 2016
 questions[73]= "74)  A tenor de lo dispuesto en el art&iacute;culo 14 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, el pago de los intereses y el capital de la deuda p&uacute;blica de las Administraciones P&uacute;blicas gozar&aacute; de prioridad:";
 choices[73]= new Array();
 choices[73][0] = "Sobre otros gastos siempre que no superen el 80% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[73][1] = "Sobre otros gastos siempre que no superen el 70% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[73][2] = "Absoluta frente a cualquier otro gasto.";
 choices[73][3] = "Sobre otros gastos siempre que no superen el 60% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea";
 answers[73] = choices[73][2];
 units[73] = "10";
 comments[73] = "Id Pregunta: 511. PRESUPUESTOS GENERALES";


//  Id pregunta: 342 Año de creación de pregunta: 2016
 questions[74]= "75)  La moci&oacute;n de censura contra la Comisi&oacute;n existe desde:";
 choices[74]= new Array();
 choices[74][0] = "El Tratado de Maastrich.";
 choices[74][1] = "El Tratado de Amsterdam.";
 choices[74][2] = "El Tratado de Par&iacute;s.";
 choices[74][3] = "El Tratado de Roma.";
 answers[74] = choices[74][3];
 units[74] = "5";
 comments[74] = "Id Pregunta: 342. UNION EUROPEA";


