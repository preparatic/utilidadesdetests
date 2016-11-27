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

//  Id pregunta: 710 Año de creación de pregunta: 2016
 questions[0]= "1)  Si un ciudadano solicita informaci&oacute;n a la Administraci&oacute;n y son de aplicaci&oacute;n los l&iacute;mites de derecho de acceso previstos en el art&iacute;culo 14 de la Ley 19/2013 pero &eacute;stos no afectan a la totalidad de la informaci&oacute;n:";
 choices[0]= new Array();
 choices[0][0] = "Nunca se conceder&aacute; el acceso parcial a la informaci&oacute;n.";
 choices[0][1] = "Se ofrecer&aacute; acceso parcial sin indicar al solicitante que parte de la informaci&oacute;n ha sido omitida.";
 choices[0][2] = "Siempre se conder&aacute; acceso parcial a la informaci&oacute;n a la que no le afecte la limitaci&oacute;n prevista en el art&iacute;culo 14.";
 choices[0][3] = "Se conceder&aacute; el acceso parcial previa omisi&oacute;n de la informaci&oacute;n afectada por el l&iacute;mite de acceso, salvo que de ello resulte una informaci&oacute;n distorsionada o que carezca de sentido.";
 answers[0] = choices[0][3];
 units[0] = "22";
 comments[0] = "Id Pregunta: 710. Ley de transparencia";


//  Id pregunta: 784 Año de creación de pregunta: 2016
 questions[1]= "2)  Los estatutos de los Organismos p&uacute;blicos determinar&aacute;n sus respectivos:";
 choices[1]= new Array();
 choices[1][0] = "&oacute;rganos superiores";
 choices[1][1] = "&oacute;rganos directivos";
 choices[1][2] = "&oacute;rganos superiores y directivos";
 choices[1][3] = "ninguna es correcta";
 answers[1] = choices[1][1];
 units[1] = "4, 7, 8, 9";
 comments[1] = "Id Pregunta: 784. Ley 40/2015";


//  Id pregunta: 372 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[2]= new Array();
 choices[2][0] = "El Parlamento y el Consejo.";
 choices[2][1] = "El Parlamento y la Comisi&oacute;n.";
 choices[2][2] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[2][3] = "La Comisi&oacute;n y el Consejo.";
 answers[2] = choices[2][2];
 units[2] = "5";
 comments[2] = "Id Pregunta: 372. UNION EUROPEA";


//  Id pregunta: 778 Año de creación de pregunta: 2016
 questions[3]= "4)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado son &oacute;rganos directivos:";
 choices[3]= new Array();
 choices[3][0] = "los Delegados del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[3][1] = "los Subdelegados del Gobierno en las provincias";
 choices[3][2] = "los Subdelegados del Gobierno en las entidades locales";
 choices[3][3] = "a y b son correctas";
 answers[3] = choices[3][3];
 units[3] = "4, 7, 8, 9";
 comments[3] = "Id Pregunta: 778. Ley 40/2015";


//  Id pregunta: 672 Año de creación de pregunta: 2016
 questions[4]= "5)  En cuanto a la Historia Cl&iacute;nica Digital del Sistema Nacional de Salud, se&ntilde;ale cual de las siguientes afirmaciones es Incorrecta:";
 choices[4]= new Array();
 choices[4][0] = "Se ha implementado por mandato legal, tanto por la Ley 16/2003 de cohesi&oacute;n y calidad del Sistema Nacional de Salud, como por la Ley 41/2002 de Autonom&iacute;a del Paciente.";
 choices[4][1] = "Permite que los profesionales sanitarios puedan acceder a los datos de salud del paciente, cuando este se encuentre desplazado fuera de su Comunidad Aut&oacute;noma de origen y requiera asistencia sanitaria.";
 choices[4][2] = "De acuerdo a su dise&ntilde;o funcional, permite acceder a la totalidad de los contenidos existentes en la Historia Cl&iacute;nica Electr&oacute;nica de las Comunidades Aut&oacute;nomas.";
 choices[4][3] = "Gracias a ella, de acuerdo al informe CORA de Febrero de 2016, ya son 25,5 millones de ciudadanos los que disponen de informes cl&iacute;nicos en el Sstema Nacional de Salud.";
 answers[4] = choices[4][2];
 units[4] = "47";
 comments[4] = "Id Pregunta: 672. Historia Cl&iacute;nica Digital";


//  Id pregunta: 660 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Qu&eacute; herramienta dentro del ecosistema Hadoop sirve para trasladar datos masivos entre Hadoop y sistemas de tratamiento estructurados?";
 choices[5]= new Array();
 choices[5][0] = "Avro";
 choices[5][1] = "Sqoop";
 choices[5][2] = "UIMA";
 choices[5][3] = "Jaql";
 answers[5] = choices[5][1];
 units[5] = "73";
 comments[5] = "Id Pregunta: 660. ";


//  Id pregunta: 556 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Qu&eacute; es el geo-bloqueo, contra el que pretende ser soluci&oacute;n la estrategia para el Mercado &Uacute;nico Digital en Europa?";
 choices[6]= new Array();
 choices[6][0] = "Es la discriminaci&oacute;n en la b&uacute;squeda de un empleo seg&uacute;n el pa&iacute;s de origen del trabajador";
 choices[6][1] = "Es la imposibilidad de pasar la aduana para paquetes comprados en tiendas online de ciertos pa&iacute;ses";
 choices[6][2] = "Es la pr&aacute;ctica por la cual los vendedores online deniegan a los consumidores el acceso a su p&aacute;gina web en funci&oacute;n de su localizaci&oacute;n o le ofrecen precios distintos";
 choices[6][3] = "Es la pr&aacute;ctica comercial por la que varias tiendas online ofrecen el mismo producto a precios pre-acordados entre ellas, limitando la competencia";
 answers[6] = choices[6][2];
 units[6] = "17";
 comments[6] = "Id Pregunta: 556. Mercado &Uacute;nico Digital";


//  Id pregunta: 195 Año de creación de pregunta: 2016
 questions[7]= "8)  La potestad reglamentaria constitucionalmente corresponde:";
 choices[7]= new Array();
 choices[7][0] = "Al Gobierno.";
 choices[7][1] = "A las Cortes Generales.";
 choices[7][2] = "Al Poder Judicial.";
 choices[7][3] = "Al Congreso de los Diputados.";
 answers[7] = choices[7][0];
 units[7] = "1";
 comments[7] = "Id Pregunta: 195. CONSTITUCION1978";


//  Id pregunta: 593 Año de creación de pregunta: 2016
 questions[8]= "9)  A nivel departamental, &iquest;qui&eacute;n es el responsable de la coordinaci&oacute;n interna para llevar a cabo la transformaci&oacute;n digital?";
 choices[8]= new Array();
 choices[8][0] = "Las CMADs (Comisi&oacute;n Ministerial de Administraci&oacute;n Digital)";
 choices[8][1] = "La CETIC";
 choices[8][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[8][3] = "El MHFP";
 answers[8] = choices[8][0];
 units[8] = "19";
 comments[8] = "Id Pregunta: 593. Estrategia TIC";


//  Id pregunta: 433 Año de creación de pregunta: 2016
 questions[9]= "10)  El &oacute;rgano colegiado responsable de la coordinaci&oacute;n de las pol&iacute;ticas y medidas adoptadas por los departamentos ministeriales con la finalidad de garantizar el derecho a la igualdad entre mujeres y hombres, se denomina:";
 choices[9]= new Array();
 choices[9][0] = "Unidad de igualdad.";
 choices[9][1] = "Comisi&oacute;n Interministerial de Igualdad entre mujeres y hombres.";
 choices[9][2] = "Ninguna de las anteriores.";
 choices[9][3] = "A y B son correctas.";
 answers[9] = choices[9][1];
 units[9] = "14";
 comments[9] = "Id Pregunta: 433. POLITICAS DE IGUALDAD";


//  Id pregunta: 426 Año de creación de pregunta: 2016
 questions[10]= "11)  La aprobaci&oacute;n de convocatorias de pruebas selectivas para el acceso al empleo p&uacute;blico deber&aacute; acompa&ntilde;arse de:";
 choices[10]= new Array();
 choices[10][0] = "Un plan de igualdad.";
 choices[10][1] = "Un informe de impacto de g&eacute;nero.";
 choices[10][2] = "Un programa de igualdad.";
 choices[10][3] = "Todas son correctas.";
 answers[10] = choices[10][1];
 units[10] = "14";
 comments[10] = "Id Pregunta: 426. POLITICAS DE IGUALDAD";


//  Id pregunta: 172 Año de creación de pregunta: 2016
 questions[11]= "12)  La Constituci&oacute;n Espa&ntilde;ola reconoce el derecho de reuni&oacute;n:";
 choices[11]= new Array();
 choices[11][0] = "Pac&iacute;fica y sin armas pero con necesidad de autorizaci&oacute;n previa.";
 choices[11][1] = "En lugares de tr&aacute;nsito p&uacute;blico previa autorizaci&oacute;n de la autoridad.";
 choices[11][2] = "En los casos de reuniones en lugares de tr&aacute;nsito p&uacute;blico y manifestaciones se dar&aacute; comunicaci&oacute;n previa a la autoridad.";
 choices[11][3] = "No es preciso realizar ninguna actuaci&oacute;n.";
 answers[11] = choices[11][2];
 units[11] = "1";
 comments[11] = "Id Pregunta: 172. CONSTITUCION1978";


//  Id pregunta: 308 Año de creación de pregunta: 2016
 questions[12]= "13)  El Tribunal de Justicia se cre&oacute; en:";
 choices[12]= new Array();
 choices[12][0] = "El Tratado de la CECA.";
 choices[12][1] = "El Tratado de Niza.";
 choices[12][2] = "El Tratado de &Aacute;msterdam.";
 choices[12][3] = "El Tratado de Lisboa.";
 answers[12] = choices[12][0];
 units[12] = "5";
 comments[12] = "Id Pregunta: 308. UNION EUROPEA";


//  Id pregunta: 596 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Qui&eacute;n supervisa la elaboraci&oacute;n y ejecutaci&oacute;n de los Planes de Acci&oacute;n Sectoriales?";
 choices[13]= new Array();
 choices[13][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[13][1] = "Las CMADs";
 choices[13][2] = "Ambas son correctas.";
 choices[13][3] = "Ninguna es correcta";
 answers[13] = choices[13][2];
 units[13] = "19";
 comments[13] = "Id Pregunta: 596. Estrategia TIC";


//  Id pregunta: 151 Año de creación de pregunta: 2016
 questions[14]= "15)  Seg&uacute;n la ley 39/2015, est&aacute;n obligados a relacionarse a trav&eacute;s de medios electr&oacute;nicos con las Administraciones P&uacute;blicas para la realizaci&oacute;n de cualquier tr&aacute;mite de un procedimiento administrativo: (se&ntilde;ala la respuesta incorrecta)";
 choices[14]= new Array();
 choices[14][0] = "las personas jur&iacute;dicas ";
 choices[14][1] = "las entidades con personalidad jur&iacute;dica";
 choices[14][2] = "los empleados de las Administraciones P&uacute;blicas para los tr&aacute;mites y actuaciones que realicen con ellas por raz&oacute;n de su condici&oacute;n de empleado p&uacute;blico";
 choices[14][3] = "quienes representen a un interesado que est&eacute; obligado legalmente a relacionarse electr&oacute;nicamente con la Administraci&oacute;n";
 answers[14] = choices[14][1];
 units[14] = "7";
 comments[14] = "Id Pregunta: 151. Ley 39/2015, Art&iacute;culo 14";


//  Id pregunta: 252 Año de creación de pregunta: 2016
 questions[15]= "16)  La Constituci&oacute;n garantiza el principio de irretroactividad:";
 choices[15]= new Array();
 choices[15][0] = "De las disposiciones favorables.";
 choices[15][1] = "De las disposiciones sancionadoras no favorables.";
 choices[15][2] = "De las disposiciones no restrictivas de derechos individuales.";
 choices[15][3] = "Las respuestas b) y c) son correctas.";
 answers[15] = choices[15][3];
 units[15] = "1";
 comments[15] = "Id Pregunta: 252. CONSTITUCION1978";


//  Id pregunta: 334 Año de creación de pregunta: 2016
 questions[16]= "17)  En el &aacute;mbito de la Uni&oacute;n Europea, las recomendaciones son:";
 choices[16]= new Array();
 choices[16][0] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[16][1] = "Ninguna de las respuestas es correcta.";
 choices[16][2] = "Sugerencias de los Estados miembros a las Instituciones comunitarias para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[16][3] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materia econ&oacute;mica, exclusivamente.";
 answers[16] = choices[16][0];
 units[16] = "5";
 comments[16] = "Id Pregunta: 334. UNION EUROPEA";


//  Id pregunta: 419 Año de creación de pregunta: 2016
 questions[17]= "18)  Promover&aacute;n el conocimiento y la difusi&oacute;n del principio de igualdad entre mujeres y hombres, los medios de comunicaci&oacute;n de titularidad:";
 choices[17]= new Array();
 choices[17][0] = "P&uacute;blica.";
 choices[17][1] = "Privada.";
 choices[17][2] = "Ambas son correctas.";
 choices[17][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[17] = choices[17][0];
 units[17] = "14";
 comments[17] = "Id Pregunta: 419. POLITICAS DE IGUALDAD";


//  Id pregunta: 757 Año de creación de pregunta: 2016
 questions[18]= "19)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[18]= new Array();
 choices[18][0] = "la Administraci&oacute;n General del Estado";
 choices[18][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[18][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[18][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico o privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[18] = choices[18][3];
 units[18] = "4, 7, 8, 9";
 comments[18] = "Id Pregunta: 757. Ley 40/2015";


//  Id pregunta: 659 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;De qu&eacute; modelo de programaci&oacute;n es una implementaci&oacute;n Hadoop?";
 choices[19]= new Array();
 choices[19][0] = "Orientaci&oacute;n a objetos";
 choices[19][1] = "MapReduce";
 choices[19][2] = "Pipeline filtering";
 choices[19][3] = "Programaci&oacute;n funcional";
 answers[19] = choices[19][1];
 units[19] = "73";
 comments[19] = "Id Pregunta: 659. ";


//  Id pregunta: 391 Año de creación de pregunta: 2016
 questions[20]= "21)  El T&iacute;tulo II de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombres se denomina:";
 choices[20]= new Array();
 choices[20][0] = "El principio de igualdad y la tutela contra la discriminaci&oacute;n.";
 choices[20][1] = "Objeto y &aacute;mbito de la Ley.";
 choices[20][2] = "Pol&iacute;ticas p&uacute;blicas para la igualdad.";
 choices[20][3] = "El derecho al trabajo en igualdad de oportunidades.";
 answers[20] = choices[20][2];
 units[20] = "14";
 comments[20] = "Id Pregunta: 391. POLITICAS DE IGUALDAD";


//  Id pregunta: 397 Año de creación de pregunta: 2016
 questions[21]= "22)  Un comportamiento realizado con el prop&oacute;sito o el efecto de intimidar, degradar, ofender o atentar contra la dignidad de una persona en raz&oacute;n de su sexo, se denomina:";
 choices[21]= new Array();
 choices[21][0] = "Acoso sexual.";
 choices[21][1] = "Acoso por raz&oacute;n de sexo.";
 choices[21][2] = "Acoso laboral.";
 choices[21][3] = "Acoso mental.";
 answers[21] = choices[21][1];
 units[21] = "14";
 comments[21] = "Id Pregunta: 397. POLITICAS DE IGUALDAD";


//  Id pregunta: 136 Año de creación de pregunta: 2016
 questions[22]= "23)  La Ley 15/2014, de racionalizaci&oacute;n del Sector P&uacute;blico y otras medidas de reforma administrativa, no incluye:";
 choices[22]= new Array();
 choices[22][0] = "Modificaci&oacute;n de la Ley General Presupuestaria para permitir de manera m&aacute;s eficaz el control de las cuentas corrientes en las que se sit&uacute;an fondos de Tesoro P&uacute;blico.";
 choices[22][1] = "Permiso para la reordenaci&oacute;n de organismos p&uacute;blicos con el fin de mejorar su eficiencia y reducir el gasto p&uacute;blico.";
 choices[22][2] = "Modificaci&oacute;n normativa para hacer uso de certificados electr&oacute;nicos &uacute;nicos para grupos o colectivos de personas f&iacute;sicas.";
 choices[22][3] = "Implantaci&oacute;n del BOE como Tabl&oacute;n Edictal &Uacute;nico para la realizaci&oacute;n de notificaciones administrativas.";
 answers[22] = choices[22][2];
 units[22] = "12";
 comments[22] = "Id Pregunta: 136. Leyes modelo econ&oacute;mico";


//  Id pregunta: 326 Año de creación de pregunta: 2016
 questions[23]= "24)  La Mesa del Parlamento estar&aacute; compuesta por:";
 choices[23]= new Array();
 choices[23][0] = "El Presidente, doce Vicepresidentes y los Cuestores.";
 choices[23][1] = "El Presidente, diez Vicepresidentes y los Cuestores.";
 choices[23][2] = "El Presidente, dos Vicepresidentes y los Cuestores.";
 choices[23][3] = "El Presidente, catorce Vicepresidentes y los Cuestores.";
 answers[23] = choices[23][3];
 units[23] = "5";
 comments[23] = "Id Pregunta: 326. UNION EUROPEA";


//  Id pregunta: 752 Año de creación de pregunta: 2016
 questions[24]= "25)  La Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico, establece y regula (se&ntilde;ala la incorrecta):";
 choices[24]= new Array();
 choices[24][0] = "las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[24][1] = "los principios del sistema de responsabilidad de las Administraciones P&uacute;blicas y de la potestad sancionadora";
 choices[24][2] = "el procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas";
 choices[24][3] = "la organizaci&oacute;n y funcionamiento de la Administraci&oacute;n General del Estado y de su sector p&uacute;blico institucional para el desarrollo de sus actividades";
 answers[24] = choices[24][2];
 units[24] = "4, 7, 8, 9";
 comments[24] = "Id Pregunta: 752. Ley 40/2015";


//  Id pregunta: 830 Año de creación de pregunta: 2016
 questions[25]= "26)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Indique la respuesta correcta.";
 choices[25]= new Array();
 choices[25][0] = "Para la v&aacute;lida constituci&oacute;n del &oacute;rgano, a efectos de la celebraci&oacute;n de sesiones, deliberaciones y toma de acuerdos, se requerir&aacute; la asistencia, presencial o a distancia, del Presidente y Secretario o en su caso, de quienes les suplan, y la de la mitad de sus miembros.";
 choices[25][1] = "Cuando se trate de los &oacute;rganos colegiados a que se refiere el art&iacute;culo 15.2, el Presidente podr&aacute; considerar v&aacute;lidamente constituido el &oacute;rgano, a efectos de celebraci&oacute;n de sesi&oacute;n, si asisten los representantes de las Administraciones P&uacute;blicas y de las organizaciones representativas de intereses sociales miembros del &oacute;rgano a los que se haya atribuido la condici&oacute;n de portavoces.";
 choices[25][2] = "Cuando estuvieran reunidos, de manera presencial o a distancia, el Secretario y todos los miembros del &oacute;rgano colegiado, o en su caso las personas que les suplan, &eacute;stos podr&aacute;n constituirse v&aacute;lidamente como &oacute;rgano colegiado para la celebraci&oacute;n de sesiones, deliberaciones y adopci&oacute;n de acuerdos sin necesidad de convocatoria previa cuando as&iacute; lo decida el Presidente.";
 choices[25][3] = "Todas son correctas.";
 answers[25] = choices[25][1];
 units[25] = "4, 7, 8, 9";
 comments[25] = "Id Pregunta: 830. Ley 40/2015";


//  Id pregunta: 118 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;C&oacute;mo se concretan anualmente los objetivos de la Estrategia Espa&ntilde;ola de Activaci&oacute;n para el Empleo?";
 choices[26]= new Array();
 choices[26][0] = "Mediante &Oacute;rdenes Ministeriales del Ministerio de Empleo y Seguridad Social";
 choices[26][1] = "Mediante Reales Decretos del Consejo de Ministros";
 choices[26][2] = "Mediante los Planes Anuales de Pol&iacute;tica de Empleo";
 choices[26][3] = "Mediante dictamen del Consejo General del Sistema Nacional de Empleo";
 answers[26] = choices[26][2];
 units[26] = "15";
 comments[26] = "Id Pregunta: 118. ";


//  Id pregunta: 367 Año de creación de pregunta: 2016
 questions[27]= "28)  Es una funci&oacute;n del Presidente del Parlamento Europeo:";
 choices[27]= new Array();
 choices[27][0] = "Presentar la moci&oacute;n de censura.";
 choices[27][1] = "Presidir las sesiones del Parlamento.";
 choices[27][2] = "Organizar la Secretar&iacute;a General.";
 choices[27][3] = "Preparar las actividades de las Comisiones.";
 answers[27] = choices[27][1];
 units[27] = "5";
 comments[27] = "Id Pregunta: 367. UNION EUROPEA";


//  Id pregunta: 608 Año de creación de pregunta: 2016
 questions[28]= "29)  Una de las condiciones que un &aacute;rbol debe cumplir para ser &aacute;rbol b, siendo n el orden del &aacute;rbol, es:";
 choices[28]= new Array();
 choices[28][0] = "Cada p&aacute;gina contiene como m&aacute;ximo 2n + 1 elementos.";
 choices[28][1] = "Cada p&aacute;gina, excepto la ra&iacute;z, contiene al menos n elementos.";
 choices[28][2] = "Cada p&aacute;gina o es una hoja o tiene m descendientes, siendo m el n&uacute;mero de elementos o claves que tiene.";
 choices[28][3] = "Las hojas no tienen por qu&eacute; estar al mismo nivel.";
 answers[28] = choices[28][1];
 units[28] = "56";
 comments[28] = "Id Pregunta: 608. Junta de Extremadura A1 2015";


//  Id pregunta: 244 Año de creación de pregunta: 2016
 questions[29]= "30)  La Constituci&oacute;n Espa&ntilde;ola, en el art&iacute;culo 9 del T&iacute;tulo Preliminar, garantiza el principio de:";
 choices[29]= new Array();
 choices[29][0] = "Retroactividad de las disposiciones sancionadoras no favorables de derechos individuales.";
 choices[29][1] = "Publicidad de las normas.";
 choices[29][2] = "Defensa jur&iacute;dica ante los tribunales.";
 choices[29][3] = "Coordinaci&oacute;n normativa.";
 answers[29] = choices[29][2];
 units[29] = "1";
 comments[29] = "Id Pregunta: 244. CONSTITUCION1978";


//  Id pregunta: 772 Año de creación de pregunta: 2016
 questions[30]= "31)  La Administraci&oacute;n General del Estado act&uacute;a y se organiza de acuerdo con los principios establecidos en el art&iacute;culo 3, as&iacute; como los de:";
 choices[30]= new Array();
 choices[30][0] = "desconcentraci&oacute;n funcional y descentralizaci&oacute;n funcional y territorial";
 choices[30][1] = "descentralizaci&oacute;n territorial y desconcentraci&oacute;n funcional y territorial";
 choices[30][2] = "descentralizaci&oacute;n funcional y desconcentraci&oacute;n funcional y territorial";
 choices[30][3] = "desconcentraci&oacute;n territorial y descentralizaci&oacute;n funcional y territorial";
 answers[30] = choices[30][2];
 units[30] = "4, 7, 8, 9";
 comments[30] = "Id Pregunta: 772. Ley 40/2015";


//  Id pregunta: 796 Año de creación de pregunta: 2016
 questions[31]= "32)  A los Directores generales les corresponde (se&ntilde;ala la incorrecta):";
 choices[31]= new Array();
 choices[31][0] = "proponer los proyectos de su Direcci&oacute;n general para alcanzar los objetivos establecidos por el Ministro, dirigir su ejecuci&oacute;n y controlar su adecuado cumplimiento";
 choices[31][1] = "solicitar del Ministerio de Hacienda y Administraciones P&uacute;blicas la afectaci&oacute;n o el arrendamiento de los inmuebles necesarios para el cumplimiento de los fines de los servicios a cargo del Departamento";
 choices[31][2] = "ejercer las competencias atribuidas a la Direcci&oacute;n general y las que le sean desconcentradas o delegadas";
 choices[31][3] = "impulsar y supervisar las actividades que forman parte de la gesti&oacute;n ordinaria del &oacute;rgano directivo y velar por el buen funcionamiento de los &oacute;rganos y unidades dependientes y del personal integrado en los mismos";
 answers[31] = choices[31][1];
 units[31] = "4, 7, 8, 9";
 comments[31] = "Id Pregunta: 796. Ley 40/2015";


//  Id pregunta: 141 Año de creación de pregunta: 2016
 questions[32]= "33)  El recurso de alzada puede interponerse:";
 choices[32]= new Array();
 choices[32][0] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna en todo caso";
 choices[32][1] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna o ante el competente para resolverlo";
 choices[32][2] = "Ante el &oacute;rgano competente para resolverlo en todo caso";
 choices[32][3] = "Ante el Defensor del Pueblo";
 answers[32] = choices[32][1];
 units[32] = "8";
 comments[32] = "Id Pregunta: 141. Ley 39/2015, Art&iacute;culo 121";


//  Id pregunta: 537 Año de creación de pregunta: 2016
 questions[33]= "34)  Respecto a los registros electr&oacute;nicos de apoderamientos no es correcto:";
 choices[33]= new Array();
 choices[33][0] = "en el &aacute;mbito estatal, este registro ser&aacute; el Registro Electr&oacute;nico de Apoderamientos de la Administraci&oacute;n General del Estado";
 choices[33][1] = "en ellos no constar&aacute; el bastanteo realizado del poder";
 choices[33][2] = "los registros generales de apoderamientos no impedir&aacute;n la existencia de registros particulares en cada Organismo";
 choices[33][3] = "cada Organismo podr&aacute; disponer de su propio registro electr&oacute;nico de apoderamientos";
 answers[33] = choices[33][1];
 units[33] = "7";
 comments[33] = "Id Pregunta: 537. LEY 39/2015";


//  Id pregunta: 494 Año de creación de pregunta: 2016
 questions[34]= "35)  Seg&uacute;n la Ley General Presupuestaria, con car&aacute;cter excepcional podr&aacute;n generar cr&eacute;dito en el Presupuesto del ejercicio los ingresos realizados:";
 choices[34]= new Array();
 choices[34][0] = "Por reembolso de pr&eacute;stamos.";
 choices[34][1] = "Por la venta de bienes.";
 choices[34][2] = "En el &uacute;ltimo trimestre del ejercicio anterior.";
 choices[34][3] = "Por prestaci&oacute;n de servicios.";
 answers[34] = choices[34][2];
 units[34] = "10";
 comments[34] = "Id Pregunta: 494. PRESUPUESTOS GENERALES";


//  Id pregunta: 273 Año de creación de pregunta: 2016
 questions[35]= "36)  Se&ntilde;ale la opci&oacute;n correcta";
 choices[35]= new Array();
 choices[35][0] = "Jenkins un servidor de integraci&oacute;n continua comercial.";
 choices[35][1] = "Extiende su funcionalidad a trav&eacute;s de plugins.";
 choices[35][2] = "Solamente soporta herramientas de control de versiones como CVS, Gity Clearcase.";
 choices[35][3] = "No posee un historial de cambios realizados por build o versi&oacute;n.";
 answers[35] = choices[35][1];
 units[35] = "92";
 comments[35] = "Id Pregunta: 273. INTEGRACION CONTINUA";


//  Id pregunta: 278 Año de creación de pregunta: 2016
 questions[36]= "37)  Respecto al Consejo de Transparencia y Buen Gobierno:";
 choices[36]= new Array();
 choices[36][0] = "Su estatuto entra en vigor el 10 de diciembre de 2014.";
 choices[36][1] = "Estatuto se estructura en cinco cap&iacute;tulos.";
 choices[36][2] = "El Consejo de Ministros aprobar&aacute;, en el plazo de tres meses desde la publicaci&oacute;n de la Ley 19/2013 en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, un Real Decreto por el que se apruebe el Estatuto org&aacute;nico del Consejo de Transparencia y Buen Gobierno.";
 choices[36][3] = "Su estatuto se regula por el Real Decreto 919/2014, de 31 de octubre.";
 answers[36] = choices[36][1];
 units[36] = "22";
 comments[36] = "Id Pregunta: 278. LEY DE TRANSPARENCIA";


//  Id pregunta: 249 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[37]= new Array();
 choices[37][0] = "Art&iacute;culo 16.2.";
 choices[37][1] = "Art&iacute;culo 17.1.";
 choices[37][2] = "Art&iacute;culo 18.1.";
 choices[37][3] = "Art&iacute;culo 18.2.";
 answers[37] = choices[37][0];
 units[37] = "1";
 comments[37] = "Id Pregunta: 249. CONSTITUCION1978";


//  Id pregunta: 227 Año de creación de pregunta: 2016
 questions[38]= "39)  En relaci&oacute;n con el Defensor del Pueblo, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[38]= new Array();
 choices[38][0] = "Es el supremo &oacute;rgano consultivo del Gobierno.";
 choices[38][1] = "Puede supervisar la actividad de la Administraci&oacute;n del Estado, pero no la de las Comunidades Aut&oacute;nomas.";
 choices[38][2] = "Puede anular resoluciones e imponer sanciones, siempre que no impliquen privaci&oacute;n de libertad.";
 choices[38][3] = "Tiene como misi&oacute;n la defensa de todos los derechos comprendidos en el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola, y no s&oacute;lo los susceptibles de recurso de amparo.";
 answers[38] = choices[38][3];
 units[38] = "1";
 comments[38] = "Id Pregunta: 227. CONSTITUCION1978";


//  Id pregunta: 705 Año de creación de pregunta: 2016
 questions[39]= "40)  La &Eacute;tica P&uacute;blica se puede definir como:";
 choices[39]= new Array();
 choices[39][0] = "El conjunto de normas que adoptan de manera voluntaria los trabajadores p&uacute;blicos con objeto de satisfacer las necesidades de los ciudadanos.";
 choices[39][1] = "El conjunto de comportamientos inadecuados por parte de empleados p&uacute;blicos y pol&iacute;ticos.";
 choices[39][2] = "El conjunto de normas que rigen la conducta de las personas que trabajan en las Administraciones P&uacute;blicas.";
 choices[39][3] = "El compromiso que adquieren los ciudadanos al relacionarse con las Administraciones P&uacute;blicas.";
 answers[39] = choices[39][2];
 units[39] = "22";
 comments[39] = "Id Pregunta: 705. &Eacute;tica p&uacute;blica";


//  Id pregunta: 534 Año de creación de pregunta: 2016
 questions[40]= "41)  Las Administraciones P&uacute;blicas podr&aacute;n habilitar:";
 choices[40]= new Array();
 choices[40][0] = "con car&aacute;cter general a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[40][1] = "con car&aacute;cter general o espec&iacute;fico a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[40][2] = "con car&aacute;cter general o espec&iacute;fico a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[40][3] = "con car&aacute;cter general a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 answers[40] = choices[40][2];
 units[40] = "7";
 comments[40] = "Id Pregunta: 534. LEY 39/2015";


//  Id pregunta: 484 Año de creación de pregunta: 2016
 questions[41]= "42)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, dirigir la contabilidad de las entidades que integran el sistema de la Seguridad Social y gestionar la contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una funci&oacute;n de:";
 choices[41]= new Array();
 choices[41][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[41][1] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[41][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[41][3] = "La Intervenci&oacute;n General de la Defensa.";
 answers[41] = choices[41][2];
 units[41] = "10";
 comments[41] = "Id Pregunta: 484. PRESUPUESTOS GENERALES";


//  Id pregunta: 46 Año de creación de pregunta: 2016
 questions[42]= "43)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[42]= new Array();
 choices[42][0] = "En un sistema de cifrado de clave asim&eacute;trica la seguridad radica en la transmisi&oacute;n de la clave, mediante canal seguro, entre el emisor y el receptor del mensaje.";
 choices[42][1] = "Las huellas digitales devueltas por una misma funci&oacute;n hash tienen id&eacute;ntica longitud.";
 choices[42][2] = "Para ofrecer un nivel de seguridad equivalente, los sistemas de clave p&uacute;blica requieren menores longitudes de clave que los sistemas sim&eacute;tricos.";
 choices[42][3] = "Se denomina criptograma al procedimiento empleado para cifrar un mensaje.";
 answers[42] = choices[42][1];
 units[42] = "76";
 comments[42] = "Id Pregunta: 46. AGE A1 2015";


//  Id pregunta: 162 Año de creación de pregunta: 2016
 questions[43]= "44)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones";
 choices[43]= new Array();
 choices[43][0] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[43][1] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro de las setenta y dos horas contadas a partir de las 8:00 horas del d&iacute;a laborable siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[43][2] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 00:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 choices[43][3] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 24 horas contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 answers[43] = choices[43][0];
 units[43] = "19";
 comments[43] = "Id Pregunta: 162. La respuesta B es la antigua redacci&oacute;n";


//  Id pregunta: 637 Año de creación de pregunta: 2016
 questions[44]= "45)  En el sistema operativo Unix/Linux, el comando id:";
 choices[44]= new Array();
 choices[44][0] = "Muestra el n&uacute;mero de identificaci&oacute;n y el grupo al que pertenece el usuario.";
 choices[44][1] = "El comando id no existe.";
 choices[44][2] = "Muestra el n&uacute;mero de procesos lanzados por el usuario.";
 choices[44][3] = "Muestra las hebras y las identificaciones de los archivos abiertos por el usuario.";
 answers[44] = choices[44][0];
 units[44] = "57";
 comments[44] = "Id Pregunta: 637. Junta de Extremadura A1 2015";


//  Id pregunta: 783 Año de creación de pregunta: 2016
 questions[45]= "46)  Todos los &oacute;rganos de la Administraci&oacute;n General del Estado que no sean &oacute;rgano superior o directivo se encuentran bajo la dependencia o direcci&oacute;n de:";
 choices[45]= new Array();
 choices[45][0] = "un &oacute;rgano superior";
 choices[45][1] = "un &oacute;rgano directivo";
 choices[45][2] = "un &oacute;rgano superior o directivo";
 choices[45][3] = "ninguna es correcta";
 answers[45] = choices[45][2];
 units[45] = "4, 7, 8, 9";
 comments[45] = "Id Pregunta: 783. Ley 40/2015";


//  Id pregunta: 306 Año de creación de pregunta: 2016
 questions[46]= "47)  Componen la Comisi&oacute;n Europea:";
 choices[46]= new Array();
 choices[46][0] = "Un Comisario por cada Estado miembro.";
 choices[46][1] = "Uno o dos Comisarios por cada Estado miembro, dependiendo de las caracter&iacute;sticas del Estado.";
 choices[46][2] = "Dos Comisarios por cada Estado miembro.";
 choices[46][3] = "Los Ministros de Asuntos Exteriores de cada Estado miembro.";
 answers[46] = choices[46][0];
 units[46] = "5";
 comments[46] = "Id Pregunta: 306. UNION EUROPEA";


//  Id pregunta: 333 Año de creación de pregunta: 2016
 questions[47]= "48)  Est&aacute;n legitimados para interponer el recurso de carencia del art. 175 TCE:";
 choices[47]= new Array();
 choices[47][0] = "Las instituciones comunitarias.";
 choices[47][1] = "Los Estados miembros y las instituciones comunitarias.";
 choices[47][2] = "Los Estados miembros.";
 choices[47][3] = "Los nacionales de los Estados miembros.";
 answers[47] = choices[47][1];
 units[47] = "5";
 comments[47] = "Id Pregunta: 333. UNION EUROPEA";


//  Id pregunta: 725 Año de creación de pregunta: 2016
 questions[48]= "49)  Sobre el Scrum Team, cual es la afirmaci&oacute;n falsa";
 choices[48]= new Array();
 choices[48][0] = "Cada miembro del equipo tiene que tener un rol especifico y no puede asumir tareas que no est&eacute;n dentro de su &aacute;rea de especializaci&oacute;n.";
 choices[48][1] = "Los miembros del equipo deben tener un perfil en &lsquo;T&rsquo;";
 choices[48][2] = "Cada miembro del equipo tiene que tener un conocimiento m&aacute;s amplio de un &aacute;rea";
 choices[48][3] = "Cada miembro del equipo puede asumir cualquier tipo de tarea.";
 answers[48] = choices[48][0];
 units[48] = "34, 84";
 comments[48] = "Id Pregunta: 725. Metodologias &aacute;giles";


//  Id pregunta: 815 Año de creación de pregunta: 2016
 questions[49]= "50)  La actuaci&oacute;n de autoridades y personal al servicio de las Administraciones P&uacute;blicas en los que concurran motivos de abstenci&oacute;n ...";
 choices[49]= new Array();
 choices[49][0] = "No implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido pero dar&aacute; lugar a la responsabilidad que proceda";
 choices[49][1] = "Dar&aacute; lugar a la responsabilidad que proceda pero no implicar&aacute; en ning&uacute;n caso la invalidez de los actos en que hayan intervenido";
 choices[49][2] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido";
 choices[49][3] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido dando lugar a la responsabilidad que proceda";
 answers[49] = choices[49][1];
 units[49] = "4, 7, 8, 9";
 comments[49] = "Id Pregunta: 815. Ley 40/2015";


//  Id pregunta: 327 Año de creación de pregunta: 2016
 questions[50]= "51)  La idea de una Europa unida tiene sus antecedentes en el siglo:";
 choices[50]= new Array();
 choices[50][0] = "X.";
 choices[50][1] = "XIX.";
 choices[50][2] = "XV.";
 choices[50][3] = "XIII.";
 answers[50] = choices[50][1];
 units[50] = "5";
 comments[50] = "Id Pregunta: 327. UNION EUROPEA";


//  Id pregunta: 790 Año de creación de pregunta: 2016
 questions[51]= "52)  La Administraci&oacute;n General del Estado se organiza:";
 choices[51]= new Array();
 choices[51][0] = "en Ministerios";
 choices[51][1] = "en Presidencia del Gobierno y en Ministerios";
 choices[51][2] = "en Presidencia del Gobierno, en Ministerios y en Secretar&iacute;as Generales";
 choices[51][3] = "en Presidencia del Gobierno, en Ministerios, en Secretar&iacute;as Generales y en el Servicio Exterior";
 answers[51] = choices[51][1];
 units[51] = "4, 7, 8, 9";
 comments[51] = "Id Pregunta: 790. Ley 40/2015";


//  Id pregunta: 184 Año de creación de pregunta: 2016
 questions[52]= "53)  El T&iacute;tulo IV de la Constituci&oacute;n Espa&ntilde;ola de 1978 dispone que el Gobierno:";
 choices[52]= new Array();
 choices[52][0] = "Se compone del Presidente, los Vicepresidentes y los Secretarios de Estado.";
 choices[52][1] = "Ejerce la funci&oacute;n ejecutiva y la legislativa de acuerdo con la Constituci&oacute;n y las leyes.";
 choices[52][2] = "Cesa tras la celebraci&oacute;n de elecciones generales, en los casos de p&eacute;rdida de confianza parlamentaria, o por dimisi&oacute;n o fallecimiento de su Presidente.";
 choices[52][3] = "El presidente y los dem&aacute;s miembros del Gobierno son nombrados por el Rey a propuesta del Presidente del Congreso.";
 answers[52] = choices[52][2];
 units[52] = "1";
 comments[52] = "Id Pregunta: 184. CONSTITUCION1978";


//  Id pregunta: 759 Año de creación de pregunta: 2016
 questions[53]= "54)  Las Administraciones P&uacute;blicas deber&aacute;n respetar en su actuaci&oacute;n y relaciones los siguientes principios:";
 choices[53]= new Array();
 choices[53][0] = "simplicidad, claridad y proximidad a los ciudadanos";
 choices[53][1] = "participaci&oacute;n, objetividad y transparencia de la actuaci&oacute;n administrativa";
 choices[53][2] = "responsabilidad por la gesti&oacute;n p&uacute;blica";
 choices[53][3] = "todas son correctas";
 answers[53] = choices[53][3];
 units[53] = "4, 7, 8, 9";
 comments[53] = "Id Pregunta: 759. Ley 40/2015";


//  Id pregunta: 297 Año de creación de pregunta: 2016
 questions[54]= "55)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n a la Presidencia del Consejo:";
 choices[54]= new Array();
 choices[54][0] = "Es rotatoria y tiene una duraci&oacute;n de un a&ntilde;o.";
 choices[54][1] = "Es rotatoria y tiene una duraci&oacute;n de seis meses.";
 choices[54][2] = "Se nombra por el Parlamento para un per&iacute;odo de cinco a&ntilde;os.";
 choices[54][3] = "La ostenta el presidente de la Comisi&oacute;n.";
 answers[54] = choices[54][1];
 units[54] = "5";
 comments[54] = "Id Pregunta: 297. UNION EUROPEA";


//  Id pregunta: 679 Año de creación de pregunta: 2016
 questions[55]= "56)  De acuerdo a la Ley 27/2011, de 1 de agosto, sobre actualizaci&oacute;n, adecuaci&oacute;n y modernizaci&oacute;n del sistema de Seguridad Social, la edad exigida de jubilaci&oacute;n:";
 choices[55]= new Array();
 choices[55][0] = "A partir del a&ntilde;o 2020, ser&aacute; de 67 a&ntilde;os para quellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un perido cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[55][1] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para quellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un perido cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[55][2] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para todas las personas con independencia del periodo cotizado.";
 choices[55][3] = "Aumenta progresivamente desde los 65 a los 67 a&ntilde;os desde el a&ntilde;o 2013 al 2027, si bien se mantiene en los 65 a&ntilde;os para personas con un periodo cotizado igual o mayor a 35 a&ntilde;os.";
 answers[55] = choices[55][1];
 units[55] = "14";
 comments[55] = "Id Pregunta: 679. Pensiones";


//  Id pregunta: 212 Año de creación de pregunta: 2016
 questions[56]= "57)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con la regulaci&oacute;n constitucional de la composici&oacute;n del Senado:";
 choices[56]= new Array();
 choices[56][0] = "La poblaci&oacute;n de Melilla elegir&aacute; dos Senadores.";
 choices[56][1] = "En cada provincia se elegir&aacute;n tres senadores.";
 choices[56][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas elegir&aacute;n un senador cuando su poblaci&oacute;n supere el mill&oacute;n de habitantes.";
 choices[56][3] = "El Senado se compone de 350 senadores.";
 answers[56] = choices[56][0];
 units[56] = "1";
 comments[56] = "Id Pregunta: 212. CONSTITUCION1978";


//  Id pregunta: 256 Año de creación de pregunta: 2016
 questions[57]= "58)  El Art&iacute;culo 21 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que:";
 choices[57]= new Array();
 choices[57][0] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y con armas.";
 choices[57][1] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica siempre dentro del derecho de manifestaci&oacute;n previa autorizaci&oacute;n.";
 choices[57][2] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y sin armas.";
 choices[57][3] = "No se reconoce expl&iacute;citamente tal derecho de reuni&oacute;n.";
 answers[57] = choices[57][0];
 units[57] = "1";
 comments[57] = "Id Pregunta: 256. CONSTITUCION1978";


//  Id pregunta: 827 Año de creación de pregunta: 2016
 questions[58]= "59)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La formalizaci&oacute;n de las encomiendas de gesti&oacute;n se ajustar&aacute; a las siguientes reglas:";
 choices[58]= new Array();
 choices[58][0] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos administrativos o Entidades de Derecho P&uacute;blico pertenecientes a la misma Administraci&oacute;n deber&aacute; formalizarse en los t&eacute;rminos que establezca su normativa propia y, en su defecto, por acuerdo expreso de los &oacute;rganos o Entidades de Derecho P&uacute;blico intervinientes. En todo caso, el instrumento de formalizaci&oacute;n de la encomienda de gesti&oacute;n y su resoluci&oacute;n deber&aacute; ser publicada, para su eficacia, en el Bolet&iacute;n Oficial del Estado, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante.";
 choices[58][1] = "Cada Administraci&oacute;n podr&aacute; regular los requisitos necesarios para la validez de tales acuerdos que incluir&aacute;n, al menos, expresa menci&oacute;n de la actividad o actividades a las que afecten, el plazo de vigencia y la naturaleza y alcance de la gesti&oacute;n encomendada.";
 choices[58][2] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos y Entidades de Derecho P&uacute;blico de distintas Administraciones se formalizar&aacute; mediante firma del correspondiente convenio entre ellas, que deber&aacute; ser publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante, salvo en el supuesto de la gesti&oacute;n ordinaria de los servicios de las Comunidades Aut&oacute;nomas por las Diputaciones Provinciales o en su caso Cabildos o Consejos insulares, que se regir&aacute; por la legislaci&oacute;n de R&eacute;gimen Local.";
 choices[58][3] = "Todas son correctas.";
 answers[58] = choices[58][3];
 units[58] = "4, 7, 8, 9";
 comments[58] = "Id Pregunta: 827. Ley 40/2015";


//  Id pregunta: 260 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se recoge el principio de unidad jurisdiccional?:";
 choices[59]= new Array();
 choices[59][0] = "117.5";
 choices[59][1] = "117.1";
 choices[59][2] = "116";
 choices[59][3] = "15";
 answers[59] = choices[59][0];
 units[59] = "1";
 comments[59] = "Id Pregunta: 260. CONSTITUCION1978";


//  Id pregunta: 163 Año de creación de pregunta: 2016
 questions[60]= "61)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, constituye una infracci&oacute;n grave:";
 choices[60]= new Array();
 choices[60][0] = "No conservaci&oacute;n reiterada o sistem&aacute;tica de los datos a los que se refiere el art&iacute;culo 3";
 choices[60][1] = "No conservaci&oacute;n en ning&uacute;n momento de los datos a los que se refiere el art&iacute;culo 3.";
 choices[60][2] = "El incumplimiento de la llevanza del libro-registro";
 choices[60][3] = "La conservaci&oacute;n de los datos por un per&iacute;odo superior al establecido en el art&iacute;culo 5.";
 answers[60] = choices[60][0];
 units[60] = "19";
 comments[60] = "Id Pregunta: 163. B y C: son &quot;Muy grave&quot;; D: para que fuera verdadera deber&iacute;a ser &quot;inferior&quot;";


//  Id pregunta: 711 Año de creación de pregunta: 2016
 questions[61]= "62)  En relaci&oacute;n al Portal de Transparencia de la AGE:";
 choices[61]= new Array();
 choices[61][0] = "La informaci&oacute;n m&aacute;s relevante para el ciudadano y de frecuente acceso estar&aacute; disponible en el Portal de Transparencia, no pudiendo accederse a informaci&oacute;n que no se encuentre ya publicada.";
 choices[61][1] = "El ejercicio del Derecho de Acceso abre con la administraci&oacute;n un procedimiento administrativo que exige la identificaci&oacute;n del solicitante.";
 choices[61][2] = "En el Portal de Transparencia de la AGE s&oacute;lo se puede acceder a informaci&oacute;n de tipo institucional.";
 choices[61][3] = "El CTBG es el responsable del Portal de Transparencia.";
 answers[61] = choices[61][1];
 units[61] = "22";
 comments[61] = "Id Pregunta: 711. Portal de Transparencia";


//  Id pregunta: 602 Año de creación de pregunta: 2016
 questions[62]= "63)  Como todo criptosistema de clave p&uacute;blica, el protocolo del criptosistema RSA:";
 choices[62]= new Array();
 choices[62][0] = "Tiene dos partes: Cifrado de Mensajes, Descifrado de Mensajes.";
 choices[62][1] = "Se basa en la dificultad que supone resolver el &lt;Problema de la Factorizaci&oacute;n Externa&gt;.";
 choices[62][2] = "Tiene tres partes: Generaci&oacute;n de claves, Cifrado de mensajes, Descifrado de mensajes.";
 choices[62][3] = "Se basa en la dificultad que supone resolver el &lt;Problema de Socrates- Arquimedes&gt;.";
 answers[62] = choices[62][2];
 units[62] = "76";
 comments[62] = "Id Pregunta: 602. Junta de Extremadura A1 2015";


//  Id pregunta: 728 Año de creación de pregunta: 2016
 questions[63]= "64)  Indica la respuesta correcta";
 choices[63]= new Array();
 choices[63][0] = "Scrum no implica baja documentaci&oacute;n, de hecho hay estudios que estiman que es totalmente compatible con CMMI-3";
 choices[63][1] = "Scrum es una metodolog&iacute;a poco organizada";
 choices[63][2] = "Scrum no suele incluir a testers en el SCRUM TEAM";
 choices[63][3] = "En Scrum, sufre la calidad del producto o servicio al no pasar procesos de calidad reglados";
 answers[63] = choices[63][0];
 units[63] = "34, 84";
 comments[63] = "Id Pregunta: 728. Metodologias &aacute;giles";


//  Id pregunta: 532 Año de creación de pregunta: 2016
 questions[64]= "65)  Deber&aacute; incorporar al expediente administrativo acreditaci&oacute;n de la condici&oacute;n de representante y de los poderes que tiene reconocidos en dicho momento:";
 choices[64]= new Array();
 choices[64][0] = "el &oacute;rgano competente para la iniciaci&oacute;n del procedimiento";
 choices[64][1] = "el &oacute;rgano competente para la instrucci&oacute;n del procedimiento";
 choices[64][2] = "el &oacute;rgano competente para la tramitaci&oacute;n del procedimiento";
 choices[64][3] = "el &oacute;rgano competente para la terminaci&oacute;n del procedimiento";
 answers[64] = choices[64][2];
 units[64] = "7";
 comments[64] = "Id Pregunta: 532. LEY 39/2015";


//  Id pregunta: 461 Año de creación de pregunta: 2016
 questions[65]= "66)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, a qui&eacute;n le corresponde aprobar y comprometer los gastos propios de los servicios a su cargo:";
 choices[65]= new Array();
 choices[65][0] = "A los ministros.";
 choices[65][1] = "Las respuestas a) y b) son correctas.";
 choices[65][2] = "Las respuestas a) y b) no son correctas.";
 choices[65][3] = "A los titulares de los &oacute;rganos del Estado.";
 answers[65] = choices[65][1];
 units[65] = "10";
 comments[65] = "Id Pregunta: 461. PRESUPUESTOS GENERALES";


//  Id pregunta: 402 Año de creación de pregunta: 2016
 questions[66]= "67)  El principio de igualdad de trato y oportunidades entre mujeres y hombres tiene car&aacute;cter:";
 choices[66]= new Array();
 choices[66][0] = "Parcial.";
 choices[66][1] = "Sectorial.";
 choices[66][2] = "Tranversal.";
 choices[66][3] = "Vertical.";
 answers[66] = choices[66][2];
 units[66] = "14";
 comments[66] = "Id Pregunta: 402. POLITICAS DE IGUALDAD";


//  Id pregunta: 145 Año de creación de pregunta: 2016
 questions[67]= "68)  Puede interponerse un recurso extraordinario de revisi&oacute;n:";
 choices[67]= new Array();
 choices[67][0] = "Ante actos firmes en la v&iacute;a administrativa cuando al dictarlos se hubiera incurrido en error de hecho, que resulte de los propios documentos incorporados al expediente";
 choices[67][1] = "Ante actos firmes en la v&iacute;a administrativa cuando en la resoluci&oacute;n hayan influido esencialmente documentos o testimonios declarados falsos por sentencia judicial firme, anterior o posterior a aquella resoluci&oacute;n";
 choices[67][2] = "Ante actos firmes en la v&iacute;a administrativa cuando la resoluci&oacute;n se hubiese dictado como consecuencia de prevaricaci&oacute;n, cohecho, violencia, maquinaci&oacute;n fraudulenta u otra conducta punible y se haya declarado as&iacute; en virtud de sentencia judicial firme";
 choices[67][3] = "Todas las anteriores son ciertas";
 answers[67] = choices[67][3];
 units[67] = "8";
 comments[67] = "Id Pregunta: 145. Ley 39/2015, Art&iacute;culo 125";


//  Id pregunta: 2 Año de creación de pregunta: 2016
 questions[68]= "69)  La estrategia de comunicaci&oacute;n de un nuevo proyecto estrat&eacute;gico TIC NO debe:";
 choices[68]= new Array();
 choices[68][0] = "Posponerse a la puesta en producci&oacute;n del proyecto sin incidencias significativas.";
 choices[68][1] = "Presentar prototipos que muestren la evoluci&oacute;n del desarrollo ya realizado.";
 choices[68][2] = "Dise&ntilde;ar una campa&ntilde;a de difusi&oacute;n y promoci&oacute;n del proyecto.";
 choices[68][3] = "Asegurar la implicaci&oacute;n de representantes de todas las unidades afectadas.";
 answers[68] = choices[68][0];
 units[68] = "31";
 comments[68] = "Id Pregunta: 2. AGE A1 2015";


//  Id pregunta: 498 Año de creación de pregunta: 2016
 questions[69]= "70)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la Deuda P&uacute;blica podr&aacute; estar representada en:";
 choices[69]= new Array();
 choices[69][0] = "En t&iacute;tulos-valores.";
 choices[69][1] = "Las respuestas a) y b) son correctas.";
 choices[69][2] = "Las respuestas a) y b) no son correctas.";
 choices[69][3] = "En cuenta.";
 answers[69] = choices[69][1];
 units[69] = "10";
 comments[69] = "Id Pregunta: 498. PRESUPUESTOS GENERALES";


//  Id pregunta: 130 Año de creación de pregunta: 2016
 questions[70]= "71)  Dentro del Pacto Fiscal Europeo de 2012, cu&aacute;l de estos no corresponde a uno de los principales puntos contenidos:";
 choices[70]= new Array();
 choices[70][0] = "La obligaci&oacute;n de mantener el d&eacute;ficit p&uacute;blico por debajo del 3% del PIB.";
 choices[70][1] = "La obligaci&oacute;n de los pa&iacute;ses con una deuda p&uacute;blica superior al 60% del PIB a caer dentro de este l&iacute;mite en 20 a&ntilde;os, a una tasa igual a la vig&eacute;sima parte de la franquicia de cada anualidad.";
 choices[70][2] = "El compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional.";
 choices[70][3] = "El compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,5 % de la PIB y, en aquellos pa&iacute;ses en los que la deuda es inferior al 50 % del PIB, 2%.";
 answers[70] = choices[70][3];
 units[70] = "12";
 comments[70] = "Id Pregunta: 130. Leyes modelo econ&oacute;mico";


//  Id pregunta: 154 Año de creación de pregunta: 2016
 questions[71]= "72)  Los t&eacute;rminos y plazos establecidos en la ley 39/2015 u otras leyes obligan a:";
 choices[71]= new Array();
 choices[71][0] = "las autoridades al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[71][1] = "el personal al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[71][2] = "los interesados en la tramitaci&oacute;n de los asuntos";
 choices[71][3] = "todas son correctas";
 answers[71] = choices[71][3];
 units[71] = "7";
 comments[71] = "Id Pregunta: 154. Ley 39/2015, Art&iacute;culo 29";


//  Id pregunta: 557 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Qu&eacute; ministerios han liderado la elaboraci&oacute;n de la Agenda Digital para Espa&ntilde;a?";
 choices[72]= new Array();
 choices[72][0] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica ";
 choices[72][1] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Econom&iacute;a, Industria y Competitividad";
 choices[72][2] = "El Ministerio de Econom&iacute;a, Industria y Competitividad y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[72][3] = "Ninguno de ellos, puesto que ha venido elaborada desde los organismos de la UE";
 answers[72] = choices[72][0];
 units[72] = "19";
 comments[72] = "Id Pregunta: 557. Agenda Digital";


//  Id pregunta: 361 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Qu&eacute; instituci&oacute;n encarna por excelencia los intereses comunitarios?:";
 choices[73]= new Array();
 choices[73][0] = "El Consejo Europeo.";
 choices[73][1] = "El Parlamento Europeo.";
 choices[73][2] = "El Consejo.";
 choices[73][3] = "La Comisi&oacute;n.";
 answers[73] = choices[73][3];
 units[73] = "5";
 comments[73] = "Id Pregunta: 361. UNION EUROPEA";


//  Id pregunta: 580 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;A qui&eacute;n corresponde la declaraci&oacute;n de medios y servicios compartidos?";
 choices[74]= new Array();
 choices[74][0] = "A la CETIC";
 choices[74][1] = "A la Secretar&iacute;a General de Administraci&oacute;n Digital, a propuesta de la CETIC";
 choices[74][2] = "A la CETIC y a la Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[74][3] = "A la CETIC, a propuesta de la Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[74] = choices[74][3];
 units[74] = "19";
 comments[74] = "Id Pregunta: 580. Estrategia TIC";


