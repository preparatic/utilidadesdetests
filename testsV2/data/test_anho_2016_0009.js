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

//  Id pregunta: 803 Año de creación de pregunta: 2016
 questions[0]= "1)  Los Secretarios generales t&eacute;cnicos tienen a todos los efectos la categor&iacute;a de:";
 choices[0]= new Array();
 choices[0][0] = "Director General";
 choices[0][1] = "Secretario general";
 choices[0][2] = "Subdirector general";
 choices[0][3] = "Subsecretario";
 answers[0] = choices[0][0];
 units[0] = "4, 7, 8, 9";
 comments[0] = "Id Pregunta: 803. Ley 40/2015";


//  Id pregunta: 802 Año de creación de pregunta: 2016
 questions[1]= "2)  Los Secretarios generales t&eacute;cnicos:";
 choices[1]= new Array();
 choices[1][0] = "se encuentran bajo la inmediata dependencia del Subsecretario";
 choices[1][1] = "tendr&aacute;n las competencias sobre servicios comunes que les atribuya el Real Decreto de estructura del Departamento";
 choices[1][2] = "tendr&aacute;n las competencias relativas a producci&oacute;n normativa, asistencia jur&iacute;dica y publicaciones";
 choices[1][3] = "todas son correctas";
 answers[1] = choices[1][3];
 units[1] = "4, 7, 8, 9";
 comments[1] = "Id Pregunta: 802. Ley 40/2015";


//  Id pregunta: 766 Año de creación de pregunta: 2016
 questions[2]= "3)  Las Universidades p&uacute;blicas se regir&aacute;n por:";
 choices[2]= new Array();
 choices[2][0] = "las previsiones de la presente Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[2][1] = "su normativa espec&iacute;fica y supletoriamente por las previsiones de la presente Ley";
 choices[2][2] = "exclusivamente por su normativa espec&iacute;fica";
 choices[2][3] = "exclusivamente por las previsiones de la presente Ley";
 answers[2] = choices[2][1];
 units[2] = "4, 7, 8, 9";
 comments[2] = "Id Pregunta: 766. Ley 40/2015";


//  Id pregunta: 721 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;C&uacute;al es la principal ventaja de sprints m&aacute;s cortos en Scrum?";
 choices[3]= new Array();
 choices[3][0] = "Permite reaccionar al equipo mejor ante imprevistos";
 choices[3][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[3][2] = "Es m&aacute;s f&aacute;cil cumplir los objetivos marcados al final de cada sprint";
 choices[3][3] = "Ninguna de las anteriores";
 answers[3] = choices[3][1];
 units[3] = "34, 84";
 comments[3] = "Id Pregunta: 721. Metodologias &aacute;giles";


//  Id pregunta: 537 Año de creación de pregunta: 2016
 questions[4]= "5)  Respecto a los registros electr&oacute;nicos de apoderamientos no es correcto:";
 choices[4]= new Array();
 choices[4][0] = "en el &aacute;mbito estatal, este registro ser&aacute; el Registro Electr&oacute;nico de Apoderamientos de la Administraci&oacute;n General del Estado";
 choices[4][1] = "en ellos no constar&aacute; el bastanteo realizado del poder";
 choices[4][2] = "los registros generales de apoderamientos no impedir&aacute;n la existencia de registros particulares en cada Organismo";
 choices[4][3] = "cada Organismo podr&aacute; disponer de su propio registro electr&oacute;nico de apoderamientos";
 answers[4] = choices[4][1];
 units[4] = "7";
 comments[4] = "Id Pregunta: 537. LEY 39/2015";


//  Id pregunta: 379 Año de creación de pregunta: 2016
 questions[5]= "6)  Seg&uacute;n recoge la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, &iquest;con qu&eacute; frecuencia debe elaborar el Gobierno un informe sobre el conjunto de actuaciones en relaci&oacute;n con le efectividad del principio de igualdad entre mujeres y hombres?";
 choices[5]= new Array();
 choices[5][0] = "Anual.";
 choices[5][1] = "Semestral.";
 choices[5][2] = "Seg&uacute;n se determine reglamentariamente.";
 choices[5][3] = "Bienal.";
 answers[5] = choices[5][2];
 units[5] = "14";
 comments[5] = "Id Pregunta: 379. POLITICAS DE IGUALDAD";


//  Id pregunta: 226 Año de creación de pregunta: 2016
 questions[6]= "7)  Extinguidas todas las l&iacute;neas llamadas en Derecho para la sucesi&oacute;n en el trono:";
 choices[6]= new Array();
 choices[6][0] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n en la forma que m&aacute;s convenga a los intereses de Espa&ntilde;a.";
 choices[6][1] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n atendiendo exclusivamente a los imperativos geneal&oacute;gicos conocidos.";
 choices[6][2] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n de conformidad con los usos y costumbres existentes.";
 choices[6][3] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n conforme a lo que decidan dos grupos parlamentarios o una quinta parte de los Diputados.";
 answers[6] = choices[6][0];
 units[6] = "1";
 comments[6] = "Id Pregunta: 226. CONSTITUCION1978";


//  Id pregunta: 5 Año de creación de pregunta: 2016
 questions[7]= "8)  Se&ntilde;ale cu&aacute;l de los siguientes NO es uno de los principios de COBIT v5:";
 choices[7]= new Array();
 choices[7][0] = "Satisfacer las necesidades de las partes interesadas.";
 choices[7][1] = "Cubrir las necesidades del departamento de tecnolog&iacute;as de la informaci&oacute;n.";
 choices[7][2] = "Habilitar un enfoque hol&iacute;stico.";
 choices[7][3] = "Separar el gobierno de la gesti&oacute;n.";
 answers[7] = choices[7][1];
 units[7] = "101";
 comments[7] = "Id Pregunta: 5. AGE A1 2015";


//  Id pregunta: 825 Año de creación de pregunta: 2016
 questions[8]= "9)  La actuaci&oacute;n de autoridades y personal al servicio de las Administraciones P&uacute;blicas en los que concurran motivos de abstenci&oacute;n ...";
 choices[8]= new Array();
 choices[8][0] = "No implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido pero dar&aacute; lugar a la responsabilidad que proceda";
 choices[8][1] = "Dar&aacute; lugar a la responsabilidad que proceda pero no implicar&aacute; en ning&uacute;n caso la invalidez de los actos en que hayan intervenido";
 choices[8][2] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido";
 choices[8][3] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido dando lugar a la responsabilidad que proceda";
 answers[8] = choices[8][1];
 units[8] = "4, 7, 8, 9";
 comments[8] = "Id Pregunta: 825. Ley 40/2015";


//  Id pregunta: 263 Año de creación de pregunta: 2016
 questions[9]= "10)  Los Vocales integrantes del &oacute;rgano de gobierno del Poder Judicial:";
 choices[9]= new Array();
 choices[9][0] = "Ser&aacute;n nombrados por el Presidente del Tribunal Supremo y del Consejo del Poder Judicial, por un periodo de cinco a&ntilde;os.";
 choices[9][1] = "Ser&aacute;n nombrados por el Congreso de los Diputados y por el Senado por un periodo de cinco a&ntilde;os.";
 choices[9][2] = "Ser&aacute;n nombrados por el Rey por un periodo de cinco a&ntilde;os.";
 choices[9][3] = "er&aacute;n nombrados por el Rey por un periodo de tres a&ntilde;os.";
 answers[9] = choices[9][1];
 units[9] = "1";
 comments[9] = "Id Pregunta: 263. CONSTITUCION1978";


//  Id pregunta: 725 Año de creación de pregunta: 2016
 questions[10]= "11)  Sobre el Scrum Team, cual es la afirmaci&oacute;n falsa";
 choices[10]= new Array();
 choices[10][0] = "Cada miembro del equipo tiene que tener un rol especifico y no puede asumir tareas que no est&eacute;n dentro de su &aacute;rea de especializaci&oacute;n.";
 choices[10][1] = "Los miembros del equipo deben tener un perfil en &lsquo;T&rsquo;";
 choices[10][2] = "Cada miembro del equipo tiene que tener un conocimiento m&aacute;s amplio de un &aacute;rea";
 choices[10][3] = "Cada miembro del equipo puede asumir cualquier tipo de tarea.";
 answers[10] = choices[10][0];
 units[10] = "34, 84";
 comments[10] = "Id Pregunta: 725. Metodologias &aacute;giles";


//  Id pregunta: 278 Año de creación de pregunta: 2016
 questions[11]= "12)  Respecto al Consejo de Transparencia y Buen Gobierno:";
 choices[11]= new Array();
 choices[11][0] = "Su estatuto entra en vigor el 10 de diciembre de 2014.";
 choices[11][1] = "Estatuto se estructura en cinco cap&iacute;tulos.";
 choices[11][2] = "El Consejo de Ministros aprobar&aacute;, en el plazo de tres meses desde la publicaci&oacute;n de la Ley 19/2013 en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, un Real Decreto por el que se apruebe el Estatuto org&aacute;nico del Consejo de Transparencia y Buen Gobierno.";
 choices[11][3] = "Su estatuto se regula por el Real Decreto 919/2014, de 31 de octubre.";
 answers[11] = choices[11][1];
 units[11] = "22";
 comments[11] = "Id Pregunta: 278. LEY DE TRANSPARENCIA";


//  Id pregunta: 739 Año de creación de pregunta: 2016
 questions[12]= "13)  En relaci&oacute;n al principio rector Orientaci&oacute;n al usuario del servicio del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[12]= new Array();
 choices[12][0] = "Es necesario redefinir los servicios empezando por el lado del usuario, ya sea un ciudadano o un empleado p&uacute;blico, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y seguridad.";
 choices[12][1] = "Es necesario redefinir los servicios empezando por el lado del ciudadano, ya sea un funcionario o una persona f&iacute;sica, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y transparencia.";
 choices[12][2] = "Se requiere modernizar los servicios p&uacute;blicos empezando por el lado del ciudadano, ya sea un funcionario o una persona f&iacute;sica, con una vocaci&oacute;n de transparencia, usabilidad, simplicidad y accesibilidad.";
 choices[12][3] = "Es necesario redefinir los servicios empezando por el lado del usuario, ya sea un ciudadano o un empleado p&uacute;blico, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y transparencia.";
 answers[12] = choices[12][0];
 units[12] = "28";
 comments[12] = "Id Pregunta: 739. Estrategia TIC";


//  Id pregunta: 213 Año de creación de pregunta: 2016
 questions[13]= "14)  Seg&uacute;n el Art&iacute;culo 59 de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; v&aacute;lida la Regencia nombrada por las Cortes Generales que se componga del siguiente n&uacute;mero de personas:";
 choices[13]= new Array();
 choices[13][0] = "Cinco.";
 choices[13][1] = "Dos.";
 choices[13][2] = "Cuatro.";
 choices[13][3] = "Siete.";
 answers[13] = choices[13][0];
 units[13] = "1";
 comments[13] = "Id Pregunta: 213. CONSTITUCION1978";


//  Id pregunta: 524 Año de creación de pregunta: 2016
 questions[14]= "15)  Las asociaciones y organizaciones representativas de intereses econ&oacute;micos y sociales:";
 choices[14]= new Array();
 choices[14][0] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos en los t&eacute;rminos que reglamentariamente se establezca";
 choices[14][1] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos";
 choices[14][2] = "no ser&aacute;n titulares de intereses leg&iacute;timos colectivos";
 choices[14][3] = "ser&aacute;n titulares de intereses leg&iacute;timos colectivos en los t&eacute;rminos que la Ley reconozca";
 answers[14] = choices[14][3];
 units[14] = "7";
 comments[14] = "Id Pregunta: 524. LEY 39/2015";


//  Id pregunta: 283 Año de creación de pregunta: 2016
 questions[15]= "16)  Se&ntilde;ale cu&aacute;l no es una de las prioridades de la Estrategia Europa 2020:";
 choices[15]= new Array();
 choices[15][0] = "Crecimiento inteligente.";
 choices[15][1] = "Crecimiento inclusivo.";
 choices[15][2] = "Crecimiento sostenible.";
 choices[15][3] = "Crecimiento integrador.";
 answers[15] = choices[15][1];
 units[15] = "5";
 comments[15] = "Id Pregunta: 283. UNION EUROPEA";


//  Id pregunta: 332 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Cu&aacute;ndo son de aplicaci&oacute;n los tratados internacionales?:";
 choices[16]= new Array();
 choices[16][0] = "Al d&iacute;a siguiente de su ratificaci&oacute;n por el Congreso de los Diputados.";
 choices[16][1] = "Al d&iacute;a siguiente de su firma por los Ministros plenipotenciarios.";
 choices[16][2] = "El mismo d&iacute;a de la firma por los Ministros plenipotenciarios.";
 choices[16][3] = "No ser&aacute;n de aplicaci&oacute;n directa hasta que formen parte del ordenamiento mediante su publicaci&oacute;n en el BOE.";
 answers[16] = choices[16][3];
 units[16] = "5";
 comments[16] = "Id Pregunta: 332. UNION EUROPEA";


//  Id pregunta: 364 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;En qu&eacute; fecha entr&oacute; en vigor el Tratado de Amsterdam?:";
 choices[17]= new Array();
 choices[17][0] = "El 1 de junio de 1999.";
 choices[17][1] = "El 1 de mayo de 1999.";
 choices[17][2] = "El 1 de abril de 1999.";
 choices[17][3] = "El 1 de marzo de 1999.";
 answers[17] = choices[17][1];
 units[17] = "5";
 comments[17] = "Id Pregunta: 364. UNION EUROPEA";


//  Id pregunta: 81 Año de creación de pregunta: 2016
 questions[18]= "19)  El lenguaje SPARK es un subconjunto de:";
 choices[18]= new Array();
 choices[18][0] = "Java";
 choices[18][1] = "Fortran";
 choices[18][2] = "Ruby";
 choices[18][3] = "Ada";
 answers[18] = choices[18][3];
 units[18] = "73";
 comments[18] = "Id Pregunta: 81. AGE A1 2015";


//  Id pregunta: 215 Año de creación de pregunta: 2016
 questions[19]= "20)  Seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola, las asociaciones se inscribir&aacute;n en un registro a efectos de:";
 choices[19]= new Array();
 choices[19][0] = "Publicidad.";
 choices[19][1] = "Constituci&oacute;n.";
 choices[19][2] = "Legalidad.";
 choices[19][3] = "Creaci&oacute;n.";
 answers[19] = choices[19][0];
 units[19] = "1";
 comments[19] = "Id Pregunta: 215. CONSTITUCION1978";


//  Id pregunta: 41 Año de creación de pregunta: 2016
 questions[20]= "21)  En cuanto al an&aacute;lisis DAFO:";
 choices[20]= new Array();
 choices[20][0] = "Considera detallada y exclusivamente factores internos.";
 choices[20][1] = "Es una t&eacute;cnica aplicable dentro de la Planificaci&oacute;n de Sistemas de Informaci&oacute;n.";
 choices[20][2] = "Considera detallada y exclusivamente factores externos.";
 choices[20][3] = "Se obtiene como resultado final del proceso de Planificaci&oacute;n Estrat&eacute;gica.";
 answers[20] = choices[20][1];
 units[20] = "83";
 comments[20] = "Id Pregunta: 41. AGE A1 2015";


//  Id pregunta: 294 Año de creación de pregunta: 2016
 questions[21]= "22)  Indique a qui&eacute;n corresponde la funci&oacute;n de promover el inter&eacute;s general de la Uni&oacute;n Europea y tomar las iniciativas adecuadas con este fin:";
 choices[21]= new Array();
 choices[21][0] = "Al Consejo Europeo.";
 choices[21][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[21][2] = "A la Comisi&oacute;n Europea.";
 choices[21][3] = "Al Parlamento Europeo.";
 answers[21] = choices[21][2];
 units[21] = "5";
 comments[21] = "Id Pregunta: 294. UNION EUROPEA";


//  Id pregunta: 675 Año de creación de pregunta: 2016
 questions[22]= "23)  En referencia al proyecto ANDES, para la comunicaci&oacute;n telem&aacute;tica de Nacimientos desde Centros Sanitarios a Registros Civiles, indique cual de las siguientes afirmaciones es falsa:";
 choices[22]= new Array();
 choices[22][0] = "Tiene sustento legal de acuerdo a la Ley 19/2015, de 13 de julio, de medidas de reforma administrativa en el &aacute;mbito de la Administraci&oacute;n de Justicia y del Registro Civil.";
 choices[22][1] = "Se inicia a partir de su propuesta en CORA (Comisi&oacute;n para la Reforma de las Administraciones P&uacute;blicas).";
 choices[22][2] = "Reutiliza el servicio horizontal ACCEDA en modo cloud, lo cual ha facilitado la pronta puesta en marcha de la soluci&oacute;n.";
 choices[22][3] = "La utilizaci&oacute;n de ANDES por parte de los hospitales es completamente transparente, sin necesidad de realizar pasos previos para su despliegue.";
 answers[22] = choices[22][3];
 units[22] = "47";
 comments[22] = "Id Pregunta: 675. Inscripci&oacute;n autom&aacute;tica nacimientos";


//  Id pregunta: 209 Año de creación de pregunta: 2016
 questions[23]= "24)  Corresponde aprobar el proyecto de Ley de Presupuestos Generales del Estado a:";
 choices[23]= new Array();
 choices[23][0] = "El Ministerio de Econom&iacute;a y Hacienda.";
 choices[23][1] = "El Congreso de los Diputados.";
 choices[23][2] = "Las Cortes Generales.";
 choices[23][3] = "El Consejo de Ministros";
 answers[23] = choices[23][3];
 units[23] = "1";
 comments[23] = "Id Pregunta: 209. CONSTITUCION1978";


//  Id pregunta: 568 Año de creación de pregunta: 2016
 questions[24]= "25)  El sector Turismo en Espa&ntilde;a, representa:";
 choices[24]= new Array();
 choices[24][0] = "Alrededor de un 26% del PIB";
 choices[24][1] = "Alrededor de un 11% del PIB";
 choices[24][2] = "Alrededor de un 34% del PIB";
 choices[24][3] = "Alrededor de un 7% del PIB";
 answers[24] = choices[24][1];
 units[24] = "12";
 comments[24] = "Id Pregunta: 568. Modelo econ&oacute;mico";


//  Id pregunta: 723 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;Cu&aacute;les son las caracter&iacute;sticas del sprint 0 en SCRUM?";
 choices[25]= new Array();
 choices[25][0] = "Se dejan listos los entornos de desarrollo";
 choices[25][1] = "Se trabaja en el product backlog, dejando listos los product backlog &iacute;tems priorizados y estimados";
 choices[25][2] = "Se hace una previsi&oacute;n del reparto de historias de usuario por iteraci&oacute;n";
 choices[25][3] = "Todas las anteriores son correctas";
 answers[25] = choices[25][3];
 units[25] = "34, 84";
 comments[25] = "Id Pregunta: 723. Metodologias &aacute;giles";


//  Id pregunta: 206 Año de creación de pregunta: 2016
 questions[26]= "27)  La alteraci&oacute;n de los l&iacute;mites de una provincia debe ser aprobada por:";
 choices[26]= new Array();
 choices[26][0] = "El Gobierno.";
 choices[26][1] = "La Asamblea de la Comunidad Aut&oacute;noma a la que pertenezca la provincia.";
 choices[26][2] = "Las Cortes Generales, mediante ley org&aacute;nica.";
 choices[26][3] = "Una Comisi&oacute;n formada por los senadores designados en esa provincia.";
 answers[26] = choices[26][2];
 units[26] = "1";
 comments[26] = "Id Pregunta: 206. CONSTITUCION1978";


//  Id pregunta: 673 Año de creación de pregunta: 2016
 questions[27]= "28)  Se&ntilde;ale cual de los siguientes factores no contribuye a la sostenibilidad del sistema de pensiones:";
 choices[27]= new Array();
 choices[27][0] = "El aumento de la esperanza de vida.";
 choices[27][1] = "La mejora del &iacute;ndice de natalidad.";
 choices[27][2] = "La reducci&oacute;n del desempleo.";
 choices[27][3] = "El incremento de la edad de jubilaci&oacute;n.";
 answers[27] = choices[27][0];
 units[27] = "14";
 comments[27] = "Id Pregunta: 673. Estructura social";


//  Id pregunta: 692 Año de creación de pregunta: 2016
 questions[28]= "29)  Se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[28]= new Array();
 choices[28][0] = "El Reglamento (UE) 910/2014 no prev&eacute; la emisi&oacute;n de certificados de firma electr&oacute;nica a favor de personas jur&iacute;dicas o entidades sin personalidad jur&iacute;dica";
 choices[28][1] = "Con la aprobaci&oacute;n del Reglamento (UE) 910/2014 queda derogada la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica";
 choices[28][2] = "El Reglamento (UE) 910/2014 desplaza desde el 1 de julio de 2016 los preceptos de la Ley 59/2003 que se opongan a su contenido";
 choices[28][3] = "A partir del 1 de julio de 2016 dejar&aacute;n de emitirse certificados de firma electr&oacute;nica de personas jur&iacute;dicas y entidades sin personalidad jur&iacute;dica, pudiendo en su lugar expedirse certificados de sello electr&oacute;nico o certificados de firma de persona f&iacute;sica representante";
 answers[28] = choices[28][1];
 units[28] = "77";
 comments[28] = "Id Pregunta: 692. http://www.minetad.gob.es/telecomunicaciones/es-ES/Servicios/FirmaElectronica/Documents/nota-web-certifs-pers-juridica.pdf";


//  Id pregunta: 663 Año de creación de pregunta: 2016
 questions[29]= "30)  Seg&uacute;n la Ley 39/2015, la iniciaci&oacute;n de un procedimiento administrativo puede realizarse:";
 choices[29]= new Array();
 choices[29][0] = "De oficio.";
 choices[29][1] = "A solicitud del interesado.";
 choices[29][2] = "De oficio o a solicitud del interesado.";
 choices[29][3] = "Por la Administraci&oacute;n P&uacute;blica responsable.";
 answers[29] = choices[29][2];
 units[29] = "7";
 comments[29] = "Id Pregunta: 663. Art&iacute;culo 54 de la Ley 39/2015";


//  Id pregunta: 805 Año de creación de pregunta: 2016
 questions[30]= "31)  Son los titulares de los &oacute;rganos directivos encargados de la gesti&oacute;n de una o varias &aacute;reas funcionalmente homog&eacute;neas del Ministerio:";
 choices[30]= new Array();
 choices[30][0] = "los Secretarios generales t&eacute;cnicos";
 choices[30][1] = "los Directores generales";
 choices[30][2] = "los Secretarios generales";
 choices[30][3] = "los Subsecretarios";
 answers[30] = choices[30][1];
 units[30] = "4, 7, 8, 9";
 comments[30] = "Id Pregunta: 805. Ley 40/2015";


//  Id pregunta: 89 Año de creación de pregunta: 2016
 questions[31]= "32)  En un contrato cuyo presupuesto es de 100.000 euros sin IVA y se adjudica por 80.000, IVA excluido, la garant&iacute;a definitiva ser&aacute; de:";
 choices[31]= new Array();
 choices[31][0] = "2.400 euros";
 choices[31][1] = "4.000 euros";
 choices[31][2] = "3.200 euros";
 choices[31][3] = "1.600 euros";
 answers[31] = choices[31][1];
 units[31] = "37";
 comments[31] = "Id Pregunta: 89. AGE A1 2015";


//  Id pregunta: 50 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas del DNI electr&oacute;nico es exclusiva del DNIe 3.0?";
 choices[32]= new Array();
 choices[32][0] = "Cumple la norma ISO 7816 para tarjetas inteligentes.";
 choices[32][1] = "Emplea la tecnolog&iacute;a inal&aacute;mbrica NFC.";
 choices[32][2] = "Contiene certificados de componente, autenticaci&oacute;n y firma.";
 choices[32][3] = "Sus certificados cumplen la norma X509 v3.";
 answers[32] = choices[32][1];
 units[32] = "78";
 comments[32] = "Id Pregunta: 50. AGE A1 2015";


//  Id pregunta: 71 Año de creación de pregunta: 2016
 questions[33]= "34)  Seg&uacute;n el Modelo de Referencia Workflow definido por WfMC, &iquest;cu&aacute;l de las siguientes funciones corresponde al Servicio de Representaci&oacute;n del Workflow?";
 choices[33]= new Array();
 choices[33][0] = "Interpretar la descripci&oacute;n de procesos y controlar las diferentes instancias de los procesos, secuenciar las actividades, adicionar elementos a la lista de trabajo de los usuarios, e invocar las aplicaciones necesarias.";
 choices[33][1] = "Especificar el formato de intercambio com&uacute;n para soportar la transferencia de definiciones de procesos entre productos diferentes, utilizando un lenguaje de definici&oacute;n de procesos.";
 choices[33][2] = "Definir los mecanismos requeridos por los desarrolladores de productos workflow para implementar la comunicaci&oacute;n de un motor workflow con otros.";
 choices[33][3] = "Monitorizar informaci&oacute;n relevante del workflow, fundamentalmente con fines de auditor&iacute;a y estad&iacute;sticos.";
 answers[33] = choices[33][0];
 units[33] = "86";
 comments[33] = "Id Pregunta: 71. AGE A1 2015";


//  Id pregunta: 166 Año de creación de pregunta: 2016
 questions[34]= "35)  El indicador de la Comisi&oacute;n Europea &ldquo;DESI&rdquo; (Digital Economy &amp; Society Index) tiene entre sus dimensiones:";
 choices[34]= new Array();
 choices[34][0] = "Interoperabilidad";
 choices[34][1] = "Integridad";
 choices[34][2] = "Capital humano";
 choices[34][3] = "Trazabilidad";
 answers[34] = choices[34][2];
 units[34] = "19";
 comments[34] = "Id Pregunta: 166. https://ec.europa.eu/digital-single-market/en/desi Conectividad, Capital humano, Uso de internet, Integraci&oacute;n de tecnolog&iacute;a digital, Servicios p&uacute;blicos digitales";


//  Id pregunta: 775 Año de creación de pregunta: 2016
 questions[35]= "36)  Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos:";
 choices[35]= new Array();
 choices[35][0] = "las unidades administrativas a las que se les atribuyan funciones que no tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo";
 choices[35][1] = "las unidades administrativas a las que se les atribuyan funciones que no tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo";
 choices[35][2] = "las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo";
 choices[35][3] = "las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo";
 answers[35] = choices[35][3];
 units[35] = "4, 7, 8, 9";
 comments[35] = "Id Pregunta: 775. Ley 40/2015";


//  Id pregunta: 516 Año de creación de pregunta: 2016
 questions[36]= "37)  Las Universidades p&uacute;blicas:";
 choices[36]= new Array();
 choices[36][0] = "se regir&aacute;n &uacute;nicamente por su normativa espec&iacute;fica";
 choices[36][1] = "se regir&aacute;n por su normativa espec&iacute;fica y supletoriamente por las previsiones de esta Ley";
 choices[36][2] = "se regir&aacute;n por las previsiones de esta Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[36][3] = "se regir&aacute;n &uacute;nicamente por las previsiones de esta Ley";
 answers[36] = choices[36][1];
 units[36] = "7";
 comments[36] = "Id Pregunta: 516. LEY 39/2015";


//  Id pregunta: 748 Año de creación de pregunta: 2016
 questions[37]= "38)  Son rasgos fundamentales del sistema burocr&aacute;tico:";
 choices[37]= new Array();
 choices[37][0] = "La racionalidad en la divisi&oacute;n del trabajo";
 choices[37][1] = "La eficiencia en el uso de los recursos p&uacute;blicos";
 choices[37][2] = "La competencia t&eacute;cnica y la meritocracia";
 choices[37][3] = "a) y c) son rasgos fundamentales del sistema burocr&aacute;tico";
 answers[37] = choices[37][3];
 units[37] = "18, 20";
 comments[37] = "Id Pregunta: 748. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 801 Año de creación de pregunta: 2016
 questions[38]= "39)  La organizaci&oacute;n en Departamentos ministeriales no obsta a la existencia de:";
 choices[38]= new Array();
 choices[38][0] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[38][1] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 choices[38][2] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[38][3] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 answers[38] = choices[38][3];
 units[38] = "4, 7, 8, 9";
 comments[38] = "Id Pregunta: 801. Ley 40/2015";


//  Id pregunta: 194 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Cu&aacute;ntos miembros componen el Tribunal Constitucional?";
 choices[39]= new Array();
 choices[39][0] = "11";
 choices[39][1] = "12";
 choices[39][2] = "14";
 choices[39][3] = "8";
 answers[39] = choices[39][1];
 units[39] = "1";
 comments[39] = "Id Pregunta: 194. CONSTITUCION1978";


//  Id pregunta: 95 Año de creación de pregunta: 2016
 questions[40]= "41)  Bajo el paradigma de la Programaci&oacute;n Orientada a Objetos, indique cu&aacute;l de las siguientes proposiciones es falsa:";
 choices[40]= new Array();
 choices[40][0] = "Los objetos se generan a partir de la instanciaci&oacute;n de una clase.";
 choices[40][1] = "El polimorfismo es la propiedad por la que es posible enviar mensajes sint&aacute;cticamente iguales a objetos de tipos distintos.";
 choices[40][2] = "Una clase abstracta puede ser extendida mediante el mecanismo de herencia.";
 choices[40][3] = "La implementaci&oacute;n de una interfaz no se considera polimorfismo.";
 answers[40] = choices[40][3];
 units[40] = "89";
 comments[40] = "Id Pregunta: 95. AGE A1 2015";


//  Id pregunta: 390 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre hombres y mujeres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[41]= new Array();
 choices[41][0] = "El Consejo Nacional de la Mujer.";
 choices[41][1] = "El Consejo de la Mujer.";
 choices[41][2] = "El Instituto de la Mujer.";
 choices[41][3] = "El Consejo de Participaci&oacute;n de la Mujer.";
 answers[41] = choices[41][3];
 units[41] = "14";
 comments[41] = "Id Pregunta: 390. POLITICAS DE IGUALDAD";


//  Id pregunta: 79 Año de creación de pregunta: 2016
 questions[42]= "43)  La Ley 25/2013, de 27 de diciembre, de impulso de la factura electr&oacute;nica y creaci&oacute;n del Registro Contable de Facturas en el Sector P&uacute;blico, prev&eacute; que anualmente se realice una auditor&iacute;a de sistemas para verificar que los correspondientes registros contables de facturas cumplen con las condiciones de funcionamiento previstas en la normativa aplicable. En el &aacute;mbito de la Administraci&oacute;n General del Estado dicha auditor&iacute;a se realizar&aacute; por:";
 choices[42]= new Array();
 choices[42][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[42][1] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado";
 choices[42][2] = "Las Inspecciones Generales de los Servicios";
 choices[42][3] = "La Agencia Estatal de la Administraci&oacute;n Tributaria";
 answers[42] = choices[42][1];
 units[42] = "75";
 comments[42] = "Id Pregunta: 79. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 336 Año de creación de pregunta: 2016
 questions[43]= "44)  El Tribunal de Justicia Europeo funcion&oacute; como instancia &uacute;nica hasta:";
 choices[43]= new Array();
 choices[43][0] = "Diciembre de 1987.";
 choices[43][1] = "Septiembre de 1989.";
 choices[43][2] = "Octubre de 1990.";
 choices[43][3] = "Noviembre de 1980.";
 answers[43] = choices[43][1];
 units[43] = "5";
 comments[43] = "Id Pregunta: 336. UNION EUROPEA";


//  Id pregunta: 566 Año de creación de pregunta: 2016
 questions[44]= "45)  Cuando decimos que la inversi&oacute;n extranjera en Espa&ntilde;a tiene un car&aacute;cter proc&iacute;clico, nos referimos a que:";
 choices[44]= new Array();
 choices[44][0] = "Aumenta cuando la econom&iacute;a est&aacute; en crecimiento, y se reduce cuando el pa&iacute;s entra en recesi&oacute;n";
 choices[44][1] = "Se reduce cuando la econom&iacute;a est&aacute; en crecimiento, y aumenta cuando el pa&iacute;s entra en recesi&oacute;n";
 choices[44][2] = "Aumenta cuando el pa&iacute;s entra en recesi&oacute;n, y aumenta cuando la econom&iacute;a est&aacute; en crecimiento";
 choices[44][3] = "Se reduce cuando el pa&iacute;s entra en recesi&oacute;n, y se reduce cuando la econom&iacute;a est&aacute; en crecimiento";
 answers[44] = choices[44][0];
 units[44] = "12";
 comments[44] = "Id Pregunta: 566. Modelo econ&oacute;mico";


//  Id pregunta: 3 Año de creación de pregunta: 2016
 questions[45]= "46)  En el lenguaje de modelado UML :";
 choices[45]= new Array();
 choices[45][0] = "Los diagramas de secuencia y colaboraci&oacute;n son usados para modelar el comportamiento del sistema, pudiendo usarse para modelar un caso de uso, una clase, o un m&eacute;todo complicado.";
 choices[45][1] = "Los diagramas de actividad son usados para modelar la configuraci&oacute;n de los elementos de procesado en tiempo de ejecuci&oacute;n.";
 choices[45][2] = "Los diagramas de componentes son usados para modelar la estructura del software, incluyendo las dependencias entre los componentes de software.";
 choices[45][3] = "Los diagramas de implementaci&oacute;n son usados para modelar interacciones entre objetos de dise&ntilde;o en el sistema.";
 answers[45] = choices[45][2];
 units[45] = "89";
 comments[45] = "Id Pregunta: 3. AGE A1 2015";


//  Id pregunta: 582 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Cu&aacute;ndo tuvo lugar la primera declaraci&oacute;n de servicios compartidos?";
 choices[46]= new Array();
 choices[46][0] = "El 5 de Octubre de 2015";
 choices[46][1] = "El 15 de Octubre de 2015";
 choices[46][2] = "El 15 de Septiembre de 2015";
 choices[46][3] = "El 2 de Octubre de 2015";
 answers[46] = choices[46][2];
 units[46] = "19";
 comments[46] = "Id Pregunta: 582. Estrategia TIC";


//  Id pregunta: 48 Año de creación de pregunta: 2016
 questions[47]= "48)  El Reglamento (UE) 910/2014 del Parlamento Europeo y del Consejo relativo a la identificaci&oacute;n electr&oacute;nica y los servicios de confianza para las transacciones electr&oacute;nicas en el mercado interior establece:";
 choices[47]= new Array();
 choices[47][0] = "La norma reguladora de los certificados de sede electr&oacute;nica en la Uni&oacute;n Europea.";
 choices[47][1] = "Cinco a&ntilde;os como el periodo m&aacute;ximo de vigencia de los certificados electr&oacute;nicos.";
 choices[47][2] = "La plena prohibici&oacute;n del uso de seud&oacute;nimos en el uso de las transacciones electr&oacute;nicas.";
 choices[47][3] = "La regulaci&oacute;n del certificado de sello electr&oacute;nico y su uso en los servicios p&uacute;blicos.";
 answers[47] = choices[47][3];
 units[47] = "77";
 comments[47] = "Id Pregunta: 48. AGE A1 2015";


//  Id pregunta: 115 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Qu&eacute; Tratado Europeo introduce un t&iacute;tulo dedicado al empleo en el Tratado de Roma?";
 choices[48]= new Array();
 choices[48][0] = "El Tratado de Lisboa";
 choices[48][1] = "El Tratado de Amsterdam";
 choices[48][2] = "El Tratado de Niza";
 choices[48][3] = "El Acta &Uacute;nica Europea";
 answers[48] = choices[48][1];
 units[48] = "15";
 comments[48] = "Id Pregunta: 115. ";


//  Id pregunta: 185 Año de creación de pregunta: 2016
 questions[49]= "50)  Se&ntilde;ale cu&aacute;l de las siguientes funciones NO est&aacute; atribuida constitucionalmente al Rey:";
 choices[49]= new Array();
 choices[49][0] = "El mando supremo de las Fuerzas Armadas.";
 choices[49][1] = "Autorizar indultos generales.";
 choices[49][2] = "Sancionar las leyes.";
 choices[49][3] = "Promulgar las leyes.";
 answers[49] = choices[49][1];
 units[49] = "1";
 comments[49] = "Id Pregunta: 185. CONSTITUCION1978";


//  Id pregunta: 493 Año de creación de pregunta: 2016
 questions[50]= "51)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, inspeccionar la actividad de las oficinas de contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una competencia de:";
 choices[50]= new Array();
 choices[50][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[50][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[50][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[50][3] = "La Intervenci&oacute;n General de la Seguridad Social.";
 answers[50] = choices[50][2];
 units[50] = "10";
 comments[50] = "Id Pregunta: 493. PRESUPUESTOS GENERALES";


//  Id pregunta: 227 Año de creación de pregunta: 2016
 questions[51]= "52)  En relaci&oacute;n con el Defensor del Pueblo, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[51]= new Array();
 choices[51][0] = "Es el supremo &oacute;rgano consultivo del Gobierno.";
 choices[51][1] = "Puede supervisar la actividad de la Administraci&oacute;n del Estado, pero no la de las Comunidades Aut&oacute;nomas.";
 choices[51][2] = "Puede anular resoluciones e imponer sanciones, siempre que no impliquen privaci&oacute;n de libertad.";
 choices[51][3] = "Tiene como misi&oacute;n la defensa de todos los derechos comprendidos en el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola, y no s&oacute;lo los susceptibles de recurso de amparo.";
 answers[51] = choices[51][3];
 units[51] = "1";
 comments[51] = "Id Pregunta: 227. CONSTITUCION1978";


//  Id pregunta: 774 Año de creación de pregunta: 2016
 questions[52]= "53)  Las Administraciones P&uacute;blicas velar&aacute;n por el cumplimiento de los requisitos previstos en la legislaci&oacute;n que resulte aplicable, para lo cual podr&aacute;n, en el &aacute;mbito de sus respectivas competencias, comprobar, verificar, investigar e inspeccionar los hechos, actos, elementos, actividades, estimaciones y dem&aacute;s circunstancias que fueran necesarias con los l&iacute;mites establecidos en:";
 choices[52]= new Array();
 choices[52][0] = "la legislaci&oacute;n de protecci&oacute;n de datos de car&aacute;cter personal";
 choices[52][1] = "el C&oacute;digo Civil";
 choices[52][2] = "la Constituci&oacute;n Espa&ntilde;ola";
 choices[52][3] = "la ley de procedimiento administrativo com&uacute;n de las Administraciones P&uacute;blicas";
 answers[52] = choices[52][0];
 units[52] = "4, 7, 8, 9";
 comments[52] = "Id Pregunta: 774. Ley 40/2015";


//  Id pregunta: 678 Año de creación de pregunta: 2016
 questions[53]= "54)  De acuerdo a la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia, se define dependencia como:";
 choices[53]= new Array();
 choices[53][0] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[53][1] = "El estado de car&aacute;cter permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[53][2] = "El estado de car&aacute;cter temporal en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[53][3] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad, la discapacidad o la baja laboral, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 answers[53] = choices[53][1];
 units[53] = "14";
 comments[53] = "Id Pregunta: 678. Dependencia";


//  Id pregunta: 605 Año de creación de pregunta: 2016
 questions[54]= "55)  En ITIL v3, entre los procesos de la &ldquo;Fase del Ciclo de Vida: Dise&ntilde;o del Servicio&rdquo;, est&aacute;n:";
 choices[54]= new Array();
 choices[54][0] = "Gesti&oacute;n del Cat&aacute;logo de Servicios y Gesti&oacute;n de la Cartera de Servicios.";
 choices[54][1] = "Gesti&oacute;n de la Cartera de Servicio y Gesti&oacute;n de la Seguridad de la Informaci&oacute;n.";
 choices[54][2] = "Gesti&oacute;n de la Disponibilidad y Gesti&oacute;n de la Capacidad.";
 choices[54][3] = "Gesti&oacute;n de Suministradores y Gesti&oacute;n de Eventos.";
 answers[54] = choices[54][2];
 units[54] = "101";
 comments[54] = "Id Pregunta: 605. Junta de Extremadura A1 2015";


//  Id pregunta: 732 Año de creación de pregunta: 2016
 questions[55]= "56)  Indique la opci&oacute;n correcta en relaci&oacute;n con la VISI&Oacute;N de la Estrategia TIC";
 choices[55]= new Array();
 choices[55][0] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser electr&oacute;nica.";
 choices[55][1] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser digital.";
 choices[55][2] = "Para el a&ntilde;o 2020 ya no existir&aacute; ning&uacute;n procedimiento en soporte papel.";
 choices[55][3] = "En el a&ntilde;o 2020 los funcionarios realizar&aacute;n todas sus tareas con ordenador.";
 answers[55] = choices[55][1];
 units[55] = "28";
 comments[55] = "Id Pregunta: 732. Estrategia TIC";


//  Id pregunta: 452 Año de creación de pregunta: 2016
 questions[56]= "57)  En t&eacute;rminos familiares, podemos decir que desembocan en gastos...";
 choices[56]= new Array();
 choices[56][0] = "Los cr&eacute;ditos";
 choices[56][1] = "Las partidas presupuestarias";
 choices[56][2] = "Los derechos";
 choices[56][3] = "Las obligaciones";
 answers[56] = choices[56][3];
 units[56] = "10";
 comments[56] = "Id Pregunta: 452. PRESUPUESTOS GENERALES";


//  Id pregunta: 572 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares de la serie IEEE 802.11 se conoce como Fast Basic Service Set Transition, el cual est&aacute; enfocado a permitir la conexi&oacute;n continua de clientes en movimiento?";
 choices[57]= new Array();
 choices[57][0] = "IEEE 802.11p";
 choices[57][1] = "IEEE 802.11r";
 choices[57][2] = "IEEE 802.11v";
 choices[57][3] = "IEEE 802.11w";
 answers[57] = choices[57][1];
 units[57] = "112";
 comments[57] = "Id Pregunta: 572. Tema 112. TAI 2016.";


//  Id pregunta: 423 Año de creación de pregunta: 2016
 questions[58]= "59)  Para contribuir a un reparto m&aacute;s equilibrado de las responsabilidades familiares se reconoce a los padres:";
 choices[58]= new Array();
 choices[58][0] = "El derecho a un permiso.";
 choices[58][1] = "Una prestaci&oacute;n por paternidad.";
 choices[58][2] = "Ambas son correctas.";
 choices[58][3] = "18 d&iacute;as de permiso.";
 answers[58] = choices[58][2];
 units[58] = "14";
 comments[58] = "Id Pregunta: 423. POLITICAS DE IGUALDAD";


//  Id pregunta: 204 Año de creación de pregunta: 2016
 questions[59]= "60)  Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada reciben el t&iacute;tulo de:";
 choices[59]= new Array();
 choices[59][0] = "Decretos Legislativos.";
 choices[59][1] = "Decretos-leyes.";
 choices[59][2] = "Leyes de bases.";
 choices[59][3] = "Reales Decretos del Consejo de Ministros.";
 answers[59] = choices[59][0];
 units[59] = "1";
 comments[59] = "Id Pregunta: 204. CONSTITUCION1978";


//  Id pregunta: 177 Año de creación de pregunta: 2016
 questions[60]= "61)  El art&iacute;culo 152 de la Constituci&oacute;n espa&ntilde;ola se refiere a la organizaci&oacute;n instituicional b&aacute;sica de cada Comunidad Aut&oacute;noma, la cual se basar&aacute; en:";
 choices[60]= new Array();
 choices[60][0] = "Una Conseller&iacute;a legislativa, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[60][1] = "Una Asamble legislativa, un Presidente, un Delegado de Gobierno y un Comit&eacute; Superior del Poder Judicial.";
 choices[60][2] = "Una Asamble legislativa, un Consejo de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[60][3] = "Un Consejo legislativo, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Supremo.";
 answers[60] = choices[60][2];
 units[60] = "1";
 comments[60] = "Id Pregunta: 177. CONSTITUCION1978";


//  Id pregunta: 365 Año de creación de pregunta: 2016
 questions[61]= "62)  Las decisiones de la Comisi&oacute;n se adoptar&aacute;n por:";
 choices[61]= new Array();
 choices[61][0] = "Unanimidad y mayor&iacute;a simple.";
 choices[61][1] = "Unanimidad.";
 choices[61][2] = "Mayor&iacute;a cualificada.";
 choices[61][3] = "Mayor&iacute;a simple.";
 answers[61] = choices[61][3];
 units[61] = "5";
 comments[61] = "Id Pregunta: 365. UNION EUROPEA";


//  Id pregunta: 552 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;Cu&aacute;l de los siguientes no es uno de los pilares de la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[62]= new Array();
 choices[62][0] = "Establecer redes de telecomunicaciones continentales";
 choices[62][1] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa";
 choices[62][2] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar";
 choices[62][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[62] = choices[62][0];
 units[62] = "17";
 comments[62] = "Id Pregunta: 552. Mercado &Uacute;nico Digital";


//  Id pregunta: 338 Año de creación de pregunta: 2016
 questions[63]= "64)  En el Consejo de Europa cada Estado miembro tiene una delegaci&oacute;n nacional en Bruselas conocida como &oacute;rgano de apoyo, denominado:";
 choices[63]= new Array();
 choices[63][0] = "CO.PER.";
 choices[63][1] = "COMPER.";
 choices[63][2] = "CO.RE.PER.";
 choices[63][3] = "CO.PE.RRE.";
 answers[63] = choices[63][2];
 units[63] = "5";
 comments[63] = "Id Pregunta: 338. UNION EUROPEA";


//  Id pregunta: 371 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;En qu&eacute; a&ntilde;o se adhiri&oacute; Espa&ntilde;a a la Comunidad Europea?:";
 choices[64]= new Array();
 choices[64][0] = "En 1988.";
 choices[64][1] = "En 1981.";
 choices[64][2] = "En 1982.";
 choices[64][3] = "En 1986.";
 answers[64] = choices[64][3];
 units[64] = "5";
 comments[64] = "Id Pregunta: 371. UNION EUROPEA";


//  Id pregunta: 141 Año de creación de pregunta: 2016
 questions[65]= "66)  El recurso de alzada puede interponerse:";
 choices[65]= new Array();
 choices[65][0] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna en todo caso";
 choices[65][1] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna o ante el competente para resolverlo";
 choices[65][2] = "Ante el &oacute;rgano competente para resolverlo en todo caso";
 choices[65][3] = "Ante el Defensor del Pueblo";
 answers[65] = choices[65][1];
 units[65] = "8";
 comments[65] = "Id Pregunta: 141. Ley 39/2015, Art&iacute;culo 121";


//  Id pregunta: 600 Año de creación de pregunta: 2016
 questions[66]= "67)  Los est&aacute;ndares de la norma IEEE 802.11 se ubican en las capas del modelo OSI:";
 choices[66]= new Array();
 choices[66][0] = "La capa de transmisi&oacute;n y la capa de presentaci&oacute;n.";
 choices[66][1] = "La capa de aplicaci&oacute;n y la capa de gesti&oacute;n.";
 choices[66][2] = "La capa f&iacute;sica y la cada de enlace de datos.";
 choices[66][3] = "La capa de red y la capa de tr&aacute;fico.";
 answers[66] = choices[66][2];
 units[66] = "108";
 comments[66] = "Id Pregunta: 600. Junta de Extremadura A1 2015";


//  Id pregunta: 615 Año de creación de pregunta: 2016
 questions[67]= "68)  El establecimiento de una conexi&oacute;n mediante el protocolo TCP, b&aacute;sicamente se realiza de la siguiente manera:";
 choices[67]= new Array();
 choices[67][0] = "Emisor: env&iacute;a SYN. Receptor: env&iacute;a SYN+ACK. Emisor: env&iacute;a ACK.";
 choices[67][1] = "Emisor: env&iacute;a ACK. Receptor: env&iacute;a ACK+SYN. Emisor: env&iacute;a SYN.";
 choices[67][2] = "Emisor: env&iacute;a SYN. Receptor: env&iacute;a ACK.";
 choices[67][3] = "Emisor: env&iacute;a ACK. Receptor: env&iacute;a SYN.";
 answers[67] = choices[67][0];
 units[67] = "109";
 comments[67] = "Id Pregunta: 615. Junta de Extremadura A1 2015";


//  Id pregunta: 715 Año de creación de pregunta: 2016
 questions[68]= "69)  Respecto a SonarQube, se&ntilde;ale la FALSA:";
 choices[68]= new Array();
 choices[68][0] = "Sirve para evaluar aspectos como la complejidad ciclom&aacute;tica del c&oacute;digo.";
 choices[68][1] = "Anteriormente se denominaba Sonar.";
 choices[68][2] = "Permite disponer de una matriz de dependencia entre objetos.";
 choices[68][3] = "Integra herramientas de medici&oacute;n de la calidad de c&oacute;digo como CPD, findbugs, PMD, checkstyle.";
 answers[68] = choices[68][2];
 units[68] = "92";
 comments[68] = "Id Pregunta: 715. INTEGRACION CONTINUA";


//  Id pregunta: 667 Año de creación de pregunta: 2016
 questions[69]= "70)  Se&ntilde;ale la opci&oacute;n falsa respecto a la instrucci&oacute;n del procedimiento definida en la Ley 39/2015:";
 choices[69]= new Array();
 choices[69][0] = "Los interesados podr&aacute;n, en cualquier momento del procedimiento anterior al tr&aacute;mite de audiencia, aducir alegaciones y aportar documentos u otros elementos de juicio.";
 choices[69][1] = "El instructor del procedimiento s&oacute;lo podr&aacute; rechazar las pruebas propuestas por los interesados cuando sean manifiestamente improcedentes o innecesarias, mediante resoluci&oacute;n motivada.";
 choices[69][2] = "Salvo disposici&oacute;n expresa en contrario, los informes ser&aacute;n preceptivos y vinculantes.";
 choices[69][3] = "Se podr&aacute; prescindir del tr&aacute;mite de audiencia cuando no figuren en el procedimiento ni sean tenidos en cuenta en la resoluci&oacute;n otros hechos ni otras alegaciones y pruebas que las aducidas por el interesado.";
 answers[69] = choices[69][2];
 units[69] = "7";
 comments[69] = "Id Pregunta: 667. Cap&iacute;tulo IV, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 179 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Qu&eacute; tipo de ley aprueba los estatutos de autonom&iacute;a?";
 choices[70]= new Array();
 choices[70][0] = "Una ley orginaria.";
 choices[70][1] = "Una ley org&aacute;nica.";
 choices[70][2] = "Una ley de bases.";
 choices[70][3] = "Una ley de transferencia.";
 answers[70] = choices[70][1];
 units[70] = "1";
 comments[70] = "Id Pregunta: 179. CONSTITUCION1978";


//  Id pregunta: 482 Año de creación de pregunta: 2016
 questions[71]= "72)  De acuerdo con el art&iacute;culo 67 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, si las variaciones afectasen al volumen de endeudamiento a corto y largo plazo, ser&aacute; competencia del Consejo de Ministros cuando su importe exceda de la cuant&iacute;a de:";
 choices[71]= new Array();
 choices[71][0] = "12.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[71][1] = "13.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[71][2] = "11.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[71][3] = "10.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 answers[71] = choices[71][0];
 units[71] = "10";
 comments[71] = "Id Pregunta: 482. PRESUPUESTOS GENERALES";


//  Id pregunta: 820 Año de creación de pregunta: 2016
 questions[72]= "73)  En las Comunidades Aut&oacute;nomas, en caso de ausencia, vacante o enfermedad del titular de la Delegaci&oacute;n del Gobierno, ser&aacute; suplido por:";
 choices[72]= new Array();
 choices[72][0] = "el Subdelegado del Gobierno que el Delegado designe y, en su defecto, al de la provincia en que tenga su sede";
 choices[72][1] = "el Subdelegado del Gobierno de la provincia en que tenga su sede y, en su defecto, al que el Delegado designe";
 choices[72][2] = "el Subdirector General que el Delegado designe";
 choices[72][3] = "el Secretario de Estado";
 answers[72] = choices[72][0];
 units[72] = "4, 7, 8, 9";
 comments[72] = "Id Pregunta: 820. Ley 40/2015";


//  Id pregunta: 824 Año de creación de pregunta: 2016
 questions[73]= "74)  Podr&aacute;n ordenarle que se abstengan de toda intervenci&oacute;n en el expediente al funcionario que se encuentre en causa de abstenci&oacute;n...";
 choices[73]= new Array();
 choices[73][0] = "Los &oacute;rganos jer&aacute;rquicamente superiores";
 choices[73][1] = "S&oacute;lo los &oacute;rganos inmediatamente superiores jer&aacute;rquicos";
 choices[73][2] = "Los interesados en el procedimiento";
 choices[73][3] = "Las alternativas b) y c) son correctas";
 answers[73] = choices[73][1];
 units[73] = "4, 7, 8, 9";
 comments[73] = "Id Pregunta: 824. Ley 40/2015";


//  Id pregunta: 60 Año de creación de pregunta: 2016
 questions[74]= "75)  El modelo de capacidad de procesos establecido por COBIT v5:";
 choices[74]= new Array();
 choices[74][0] = "No modifica esencialmente el modelo planteado por COBIT v4.1.";
 choices[74][1] = "Define 5 niveles de procesos (proceso incompleto, ejecutado, gestionado, predecible, optimizado).";
 choices[74][2] = "El nivel 1 (proceso ejecutado) s&oacute;lo se alcanza si el proceso alcanza su prop&oacute;sito.";
 choices[74][3] = "Un proceso es optimizado si se ejecuta dentro de los l&iacute;mites definidos para alcanzar sus resultados de proceso.";
 answers[74] = choices[74][2];
 units[74] = "101";
 comments[74] = "Id Pregunta: 60. AGE A1 2015";


