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

//  Id pregunta: 220 Año de creación de pregunta: 2016
 questions[0]= "1)  Seg&uacute;n el Art&iacute;culo 68 de la Constituci&oacute;n, el Congreso se compone de:";
 choices[0]= new Array();
 choices[0][0] = "Un m&iacute;nimo de 300 Diputados.";
 choices[0][1] = "Un m&aacute;ximo de 350 Diputados.";
 choices[0][2] = "Un m&iacute;nimo de 400 Diputados.";
 choices[0][3] = "Un m&aacute;ximo de 300 Diputados.";
 answers[0] = choices[0][0];
 units[0] = "1";
 comments[0] = "Id Pregunta: 220. CONSTITUCION1978";
 preguntaids[0] = 220


//  Id pregunta: 266 Año de creación de pregunta: 2016
 questions[1]= "2)  El T&iacute;tulo en el que la Constituci&oacute;n indica cu&aacute;les son las lenguas oficiales del Estado es:";
 choices[1]= new Array();
 choices[1][0] = "El Segundo.";
 choices[1][1] = "El Primero.";
 choices[1][2] = "El Preliminar.";
 choices[1][3] = "El Tercero.";
 answers[1] = choices[1][0];
 units[1] = "1";
 comments[1] = "Id Pregunta: 266. CONSTITUCION1978";
 preguntaids[1] = 266


//  Id pregunta: 315 Año de creación de pregunta: 2016
 questions[2]= "3)  El Colegio de Comisarios se re&uacute;ne:";
 choices[2]= new Array();
 choices[2][0] = "Una vez por semana.";
 choices[2][1] = "Una vez al mes.";
 choices[2][2] = "Dos veces en semana.";
 choices[2][3] = "Cuando lo acuerde el Presidente de la Comisi&oacute;n, y adem&aacute;s una vez al mes.";
 answers[2] = choices[2][0];
 units[2] = "5";
 comments[2] = "Id Pregunta: 315. UNION EUROPEA";
 preguntaids[2] = 315


//  Id pregunta: 332 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Cu&aacute;ndo son de aplicaci&oacute;n los tratados internacionales?:";
 choices[3]= new Array();
 choices[3][0] = "Al d&iacute;a siguiente de su ratificaci&oacute;n por el Congreso de los Diputados.";
 choices[3][1] = "Al d&iacute;a siguiente de su firma por los Ministros plenipotenciarios.";
 choices[3][2] = "El mismo d&iacute;a de la firma por los Ministros plenipotenciarios.";
 choices[3][3] = "No ser&aacute;n de aplicaci&oacute;n directa hasta que formen parte del ordenamiento mediante su publicaci&oacute;n en el BOE.";
 answers[3] = choices[3][3];
 units[3] = "5";
 comments[3] = "Id Pregunta: 332. UNION EUROPEA";
 preguntaids[3] = 332


//  Id pregunta: 707 Año de creación de pregunta: 2016
 questions[4]= "5)  La &Eacute;tica P&uacute;blica se puede definir como:";
 choices[4]= new Array();
 choices[4][0] = "El conjunto de normas que adoptan de manera voluntaria los trabajadores p&uacute;blicos con objeto de satisfacer las necesidades de los ciudadanos.";
 choices[4][1] = "El conjunto de comportamientos inadecuados por parte de empleados p&uacute;blicos y pol&iacute;ticos.";
 choices[4][2] = "El conjunto de normas que rigen la conducta de las personas que trabajan en las Administraciones P&uacute;blicas.";
 choices[4][3] = "El compromiso que adquieren los ciudadanos al relacionarse con las Administraciones P&uacute;blicas.";
 answers[4] = choices[4][2];
 units[4] = "22";
 comments[4] = "Id Pregunta: 707. &Eacute;tica p&uacute;blica";
 preguntaids[4] = 707


//  Id pregunta: 292 Año de creación de pregunta: 2016
 questions[5]= "6)  Indique la afirmaci&oacute;n correcta relativa al Parlamento Europeo:";
 choices[5]= new Array();
 choices[5][0] = "Se reunir&aacute; con previa convocatoria el segundo martes de marzo.";
 choices[5][1] = "Se reunir&aacute; sin necesidad de previa convocatoria el segundo martes de marzo.";
 choices[5][2] = "Se reunir&aacute; la segunda semana de enero con previa convocatoria.";
 choices[5][3] = "Se reunir&aacute; la tercera semana de enero sin previa convocatoria.";
 answers[5] = choices[5][1];
 units[5] = "5";
 comments[5] = "Id Pregunta: 292. UNION EUROPEA";
 preguntaids[5] = 292


//  Id pregunta: 676 Año de creación de pregunta: 2016
 questions[6]= "7)  En referencia a la implantaci&oacute;n de la interoperabilidad de la receta electr&oacute;nica:";
 choices[6]= new Array();
 choices[6][0] = "Permite los ciudadanos retiren sus medicamentos en las farmacias de fuera de la Comunidad Aut&oacute;noma en la que hayan sido recetados.";
 choices[6][1] = "Favorece la seguridad del paciente, al incorporar sistemas online de ayuda a la prescripci&oacute;n, que ayudan a la detecci&oacute;n de interaciones medicamentosas o duplicidades terap&eacute;uticas.";
 choices[6][2] = "Facilita al m&eacute;dico el seguimiento de la adherencia al tratamiento por parte del paciente.";
 choices[6][3] = "Todas las anteriores son correctas.";
 answers[6] = choices[6][3];
 units[6] = "47";
 comments[6] = "Id Pregunta: 676. Receta electr&oacute;nica";
 preguntaids[6] = 676


//  Id pregunta: 625 Año de creación de pregunta: 2016
 questions[7]= "8)  En PHP 5.0, &iquest;cu&aacute;l es la regla para formar los nombres de las variables?";
 choices[7]= new Array();
 choices[7][0] = "Una variable debe comenzar con el signo $ seguido del nombre de la variable.";
 choices[7][1] = "Una variable debe comenzar con el signo &amp; seguido del nombre de la variable.";
 choices[7][2] = "Una variable debe comenzar por un car&aacute;cter num&eacute;rico.";
 choices[7][3] = "No hay regla para la formaci&oacute;n de los nombres de las variables.";
 answers[7] = choices[7][0];
 units[7] = "65";
 comments[7] = "Id Pregunta: 625. Junta de Extremadura A1 2015";
 preguntaids[7] = 625


//  Id pregunta: 543 Año de creación de pregunta: 2016
 questions[8]= "9)  Se&ntilde;ala la correcta:";
 choices[8]= new Array();
 choices[8][0] = "la falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n impedir&aacute; que se tenga por realizado el acto de que se trate";
 choices[8][1] = "el documento electr&oacute;nico que acredite el resultado de la consulta al registro electr&oacute;nico de apoderamientos correspondiente tendr&aacute; la condici&oacute;n de acreditaci&oacute;n a estos efectos";
 choices[8][2] = "los registros electr&oacute;nicos generales y particulares de apoderamientos pertenecientes a todas y cada una de las Administraciones, ser&aacute;n preferiblemente interoperables entre s&iacute;";
 choices[8][3] = "el interesado no podr&aacute; comparecer por s&iacute; mismo en un procedimiento en el que haya designado representante";
 answers[8] = choices[8][1];
 units[8] = "7";
 comments[8] = "Id Pregunta: 543. LEY 39/2015";
 preguntaids[8] = 543


//  Id pregunta: 622 Año de creación de pregunta: 2016
 questions[9]= "10)  En el entorno de la Arquitectura del Software, un patr&oacute;n :";
 choices[9]= new Array();
 choices[9][0] = "Es una soluci&oacute;n a un problema en un contexto particular.";
 choices[9][1] = "Es recurrente y ense&ntilde;a permitiendo entender c&oacute;mo adaptarlo a la variante particular del problema donde se quiere aplicar.";
 choices[9][2] = "Tiene un nombre para referirse al patr&oacute;n.";
 choices[9][3] = "Todas las respuestas son correctas.";
 answers[9] = choices[9][3];
 units[9] = "50";
 comments[9] = "Id Pregunta: 622. Junta de Extremadura A1 2015";
 preguntaids[9] = 622


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
 preguntaids[10] = 803


//  Id pregunta: 642 Año de creación de pregunta: 2016
 questions[11]= "12)  Los sistemas de archivos gestionados por Windows 2008 Server son:";
 choices[11]= new Array();
 choices[11][0] = "Fat y Ntfs.";
 choices[11][1] = "Extfat y Fat.";
 choices[11][2] = "Fat y Nfst.";
 choices[11][3] = "ext2fs y Ntfs.";
 answers[11] = choices[11][0];
 units[11] = "58";
 comments[11] = "Id Pregunta: 642. Junta de Extremadura A1 2015";
 preguntaids[11] = 642


//  Id pregunta: 353 Año de creación de pregunta: 2016
 questions[12]= "13)  El buen funcionamiento de la Uni&oacute;n Europea recae, entre otras instituciones, en:";
 choices[12]= new Array();
 choices[12][0] = "El Parlamento Europeo.";
 choices[12][1] = "Todas las respuestas son correctas.";
 choices[12][2] = "La Comisi&oacute;n Europea.";
 choices[12][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[12] = choices[12][1];
 units[12] = "5";
 comments[12] = "Id Pregunta: 353. UNION EUROPEA";
 preguntaids[12] = 353


//  Id pregunta: 93 Año de creación de pregunta: 2016
 questions[13]= "14)  Entre las tecnolog&iacute;as o herramientas utilizadas para trabajar en sistemas de Big Data NO se encuentra:";
 choices[13]= new Array();
 choices[13][0] = "Almacenamiento orientado a columnas";
 choices[13][1] = "Framework MapReduce";
 choices[13][2] = "OLTP";
 choices[13][3] = "Bases de datos clave-valor";
 answers[13] = choices[13][2];
 units[13] = "73";
 comments[13] = "Id Pregunta: 93. AGE A1 2015";
 preguntaids[13] = 93


//  Id pregunta: 665 Año de creación de pregunta: 2016
 questions[14]= "15)  Seg&uacute;n la Ley 39/2015, la iniciaci&oacute;n de un procedimiento administrativo puede realizarse:";
 choices[14]= new Array();
 choices[14][0] = "De oficio.";
 choices[14][1] = "A solicitud del interesado.";
 choices[14][2] = "De oficio o a solicitud del interesado.";
 choices[14][3] = "Por la Administraci&oacute;n P&uacute;blica responsable.";
 answers[14] = choices[14][2];
 units[14] = "7";
 comments[14] = "Id Pregunta: 665. Art&iacute;culo 54 de la Ley 39/2015";
 preguntaids[14] = 665


//  Id pregunta: 659 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Qu&eacute; es el machine learning?";
 choices[15]= new Array();
 choices[15][0] = "El uso de los datos para el desarrollo de mecanismos de predicci&oacute;n y aprendizaje";
 choices[15][1] = "l uso de datos para la automatizaci&oacute;n de tareas repetitivas";
 choices[15][2] = "El aprendizaje de mecanismos de monitorizaci&oacute;n y alertas";
 choices[15][3] = "Un paradigma en el desarrollo de mecanismos de control ";
 answers[15] = choices[15][0];
 units[15] = "73";
 comments[15] = "Id Pregunta: 659. ";
 preguntaids[15] = 659


//  Id pregunta: 554 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Cu&aacute;l de los siguientes no es uno de los pilares de la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[16]= new Array();
 choices[16][0] = "Establecer redes de telecomunicaciones continentales";
 choices[16][1] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa";
 choices[16][2] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar";
 choices[16][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[16] = choices[16][0];
 units[16] = "17";
 comments[16] = "Id Pregunta: 554. Mercado &Uacute;nico Digital";
 preguntaids[16] = 554


//  Id pregunta: 755 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Qui&eacute;n realiza el seguimiento peri&oacute;dico del cumplimiento de los objetivos de la Agenda Digital para Espa&ntilde;a?";
 choices[17]= new Array();
 choices[17][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital (SGAD)";
 choices[17][1] = "La Asociaci&oacute;n Espa&ntilde;ola de Normalizaci&oacute;n y Certificaci&oacute;n (AENOR)";
 choices[17][2] = "El Observatorio Nacional de Telecomunicaciones y Sociedad de la Informaci&oacute;n (ONTSI)";
 choices[17][3] = "El Observatorio de Administraci&oacute;n Electr&oacute;nica (OBSAE)";
 answers[17] = choices[17][2];
 units[17] = "19";
 comments[17] = "Id Pregunta: 755. Agenda Digital para Espa&ntilde;a";
 preguntaids[17] = 755


//  Id pregunta: 120 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Cu&aacute;l es el Real Decreto por el que se aprueba el Estatuto del Consejo de Transparencia y Buen Gobierno?";
 choices[18]= new Array();
 choices[18][0] = "Real Decreto 806/2014, de 19 de septiembre";
 choices[18][1] = "Real Decreto 951/2015, de 23 de octubre";
 choices[18][2] = "Real Decreto 1065/2015, de 27 de noviembre";
 choices[18][3] = "Real Decreto 919/2014, de 31 de octubre";
 answers[18] = choices[18][3];
 units[18] = "22";
 comments[18] = "Id Pregunta: 120. ";
 preguntaids[18] = 120


//  Id pregunta: 223 Año de creación de pregunta: 2016
 questions[19]= "20)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, durante el periodo de su mandato los Diputados y Senadores gozar&aacute;n asimismo de inmunidad y s&oacute;lo podr&aacute;n ser detenidos en caso de flagrante delito. No podr&aacute;n ser inculpados ni procesados sin la previa autorizaci&oacute;n:";
 choices[19]= new Array();
 choices[19][0] = "De la C&aacute;mara respectiva.";
 choices[19][1] = "Del Rey.";
 choices[19][2] = "Del Tribunal Constitucional.";
 choices[19][3] = "Del Tribunal Supremo.";
 answers[19] = choices[19][0];
 units[19] = "1";
 comments[19] = "Id Pregunta: 223. CONSTITUCION1978";
 preguntaids[19] = 223


//  Id pregunta: 16 Año de creación de pregunta: 2016
 questions[20]= "21)  De acuerdo con la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos de comunicaciones electr&oacute;nicas y de redes p&uacute;blicas de comunicaci&oacute;n:";
 choices[20]= new Array();
 choices[20][0] = "Deben conservarse los datos que revelen el contenido de la comunicaci&oacute;n en virtud de lo establecido en la citada Ley.";
 choices[20][1] = "La obligaci&oacute;n de conservaci&oacute;n de datos cesa a los tres a&ntilde;os desde la fecha en que se haya producido la comunicaci&oacute;n.";
 choices[20][2] = "Los datos conservados de conformidad con lo dispuesto en la citada Ley pueden ser cedidos para los fines que en la misma se determinan previa autorizaci&oacute;n administrativa.";
 choices[20][3] = "Son sujetos obligados los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones.";
 answers[20] = choices[20][3];
 units[20] = "19";
 comments[20] = "Id Pregunta: 16. AGE A1 2015";
 preguntaids[20] = 16


//  Id pregunta: 58 Año de creación de pregunta: 2016
 questions[21]= "22)  Se&ntilde;ale cu&aacute;l de los siguientes apartados NO ha sido declarado como servicio compartido en la Administraci&oacute;n General del Estado:";
 choices[21]= new Array();
 choices[21][0] = "Servicio com&uacute;n de gesti&oacute;n econ&oacute;mico-presupuestaria";
 choices[21][1] = "Servicio com&uacute;n de georreferenciaci&oacute;n";
 choices[21][2] = "Servicio de seguridad gestionada";
 choices[21][3] = "Servicio de gesti&oacute;n de notificaciones";
 answers[21] = choices[21][1];
 units[21] = "26";
 comments[21] = "Id Pregunta: 58. AGE A1 2015";
 preguntaids[21] = 58


//  Id pregunta: 490 Año de creación de pregunta: 2016
 questions[22]= "23)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, autorizar las transferencias entre distintas secciones presupuestarias como consecuencia de reorganizaciones administrativas, es una competencia de:";
 choices[22]= new Array();
 choices[22][0] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[22][1] = "El Gobierno.";
 choices[22][2] = "El Presidente del Gobierno.";
 choices[22][3] = "El Consejo de Ministros.";
 answers[22] = choices[22][1];
 units[22] = "10";
 comments[22] = "Id Pregunta: 490. PRESUPUESTOS GENERALES";
 preguntaids[22] = 490


//  Id pregunta: 322 Año de creación de pregunta: 2016
 questions[23]= "24)  El Tribunal de Justicia est&aacute; formado por:";
 choices[23]= new Array();
 choices[23][0] = "Un Juez de cada Estado miembro.";
 choices[23][1] = "Por dos Jueces de cada Estado miembro.";
 choices[23][2] = "Por veinte Jueces.";
 choices[23][3] = "Por ocho Jueces.";
 answers[23] = choices[23][0];
 units[23] = "5";
 comments[23] = "Id Pregunta: 322. UNION EUROPEA";
 preguntaids[23] = 322


//  Id pregunta: 720 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Qui&eacute;n es el responsable de transladar la metodolog&iacute;a lean al software?";
 choices[24]= new Array();
 choices[24][0] = "Eric Ries";
 choices[24][1] = "Steve Blank";
 choices[24][2] = "Tom Poppendieck";
 choices[24][3] = "Alexander Osterwalder";
 answers[24] = choices[24][2];
 units[24] = "34";
 comments[24] = "Id Pregunta: 720. Metodologias Lean";
 preguntaids[24] = 720


//  Id pregunta: 214 Año de creación de pregunta: 2016
 questions[25]= "26)  Seg&uacute;n el T&iacute;tulo II de la Constituci&oacute;n Espa&ntilde;ola relativo a la Corona:";
 choices[25]= new Array();
 choices[25][0] = "La Regencia se ejercer&aacute; por mandato constitucional y siempre en nombre del Rey.";
 choices[25][1] = "Las abdicaciones y renuncias en el orden sucesorio se resolver&aacute;n por ley ordinaria.";
 choices[25][2] = "El Pr&iacute;ncipe heredero podr&aacute; asumir la Regencia durante su minor&iacute;a de edad.";
 choices[25][3] = "La Regencia podr&aacute; ejercerse por nacionales de cualquier Estado.";
 answers[25] = choices[25][0];
 units[25] = "1";
 comments[25] = "Id Pregunta: 214. CONSTITUCION1978";
 preguntaids[25] = 214


//  Id pregunta: 567 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Qu&eacute; limites marca el &quot;pacto fiscal europeo&quot; de 2012 para sus Estados Miembros?";
 choices[26]= new Array();
 choices[26][0] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 40% del PIB";
 choices[26][1] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 choices[26][2] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 50% del PIB";
 choices[26][3] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 answers[26] = choices[26][3];
 units[26] = "12";
 comments[26] = "Id Pregunta: 567. Modelo econ&oacute;mico";
 preguntaids[26] = 567


//  Id pregunta: 356 Año de creación de pregunta: 2016
 questions[27]= "28)  Se&ntilde;ale la respuesta correcta respecto a las directivas comunitarias:";
 choices[27]= new Array();
 choices[27][0] = "No se aplican directamente en los Estados.";
 choices[27][1] = "No son vinculantes.";
 choices[27][2] = "Habitualmente se dictan sobre materias que son competencias exclusivas de la Uni&oacute;n Europea.";
 choices[27][3] = "Tienen alcance general.";
 answers[27] = choices[27][0];
 units[27] = "5";
 comments[27] = "Id Pregunta: 356. UNION EUROPEA";
 preguntaids[27] = 356


//  Id pregunta: 133 Año de creación de pregunta: 2016
 questions[28]= "29)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, cu&aacute;l no corresponde a una de las medidas implantadas:";
 choices[28]= new Array();
 choices[28][0] = "Apoyos fiscales y en materia de Seguridad Social a los emprendedores.";
 choices[28][1] = "Medidas de conciliaci&oacute;n familiar especiales para los emprendedores.";
 choices[28][2] = "Modificaci&oacute;n de la ley concursal para facilitar los acuerdos de refinanciaci&oacute;n.";
 choices[28][3] = "Creaci&oacute;n de la figura del Emprendedor de Responsabilidad Limitada.";
 answers[28] = choices[28][1];
 units[28] = "12";
 comments[28] = "Id Pregunta: 133. Leyes modelo econ&oacute;mico";
 preguntaids[28] = 133


//  Id pregunta: 300 Año de creación de pregunta: 2016
 questions[29]= "30)  La designaci&oacute;n para formar parte del Tribunal de Cuentas la efect&uacute;a:";
 choices[29]= new Array();
 choices[29][0] = "La Comisi&oacute;n.";
 choices[29][1] = "El Consejo de Europa.";
 choices[29][2] = "El Consejo Europeo.";
 choices[29][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[29] = choices[29][3];
 units[29] = "5";
 comments[29] = "Id Pregunta: 300. UNION EUROPEA";
 preguntaids[29] = 300


//  Id pregunta: 282 Año de creación de pregunta: 2016
 questions[30]= "31)  Sobre el Plan Juncker:";
 choices[30]= new Array();
 choices[30][0] = "El denominado plan Juncker es un fondo de inversiones con el que el Ejecutivo comunitario pretende movilizar hasta 215.000 millones para inversiones.";
 choices[30][1] = "Su objetivo es reactivar la inversi&oacute;n y el crecimiento en Europa.";
 choices[30][2] = "El dinero proceder&aacute; de los presupuestos europeos.";
 choices[30][3] = "Banco Europeo de Inversiones aportar&aacute; 15000 millones de euros.";
 answers[30] = choices[30][1];
 units[30] = "5";
 comments[30] = "Id Pregunta: 282. UNION EUROPEA";
 preguntaids[30] = 282


//  Id pregunta: 477 Año de creación de pregunta: 2016
 questions[31]= "32)  De conformidad con el art&iacute;culo 29.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales se remitir&aacute;n:";
 choices[31]= new Array();
 choices[31][0] = "Anualmente.";
 choices[31][1] = "Ninguna de las respuestas es correcta.";
 choices[31][2] = "Trimestralmente.";
 choices[31][3] = "Semestralmente.";
 answers[31] = choices[31][0];
 units[31] = "10";
 comments[31] = "Id Pregunta: 477. PRESUPUESTOS GENERALES";
 preguntaids[31] = 477


//  Id pregunta: 848 Año de creación de pregunta: 2016
 questions[32]= "33)  Se&ntilde;ale la respuesta correcta:";
 choices[32]= new Array();
 choices[32][0] = "La sede electr&oacute;nica es aquella direcci&oacute;n electr&oacute;nica, disponible para los ciudadanos a trav&eacute;s de redes de telecomunicaciones, cuya titularidad corresponde a una Administraci&oacute;n P&uacute;blica, o bien a una o varios organismos p&uacute;blicos o entidades de Derecho P&uacute;blico en el ejercicio de sus competencias.";
 choices[32][1] = "Se entiende por portal de internet el punto de acceso electr&oacute;nico cuya titularidad corresponda a una Administraci&oacute;n P&uacute;blica, organismo p&uacute;blico o entidad de Derecho P&uacute;blico que permite el acceso a trav&eacute;s de internet a la informaci&oacute;n publicada y, en su caso, a la sede electr&oacute;nica correspondiente.";
 choices[32][2] = "A y B son correctas.";
 choices[32][3] = "A y B son falsas.";
 answers[32] = choices[32][2];
 units[32] = "4, 7, 8, 9";
 comments[32] = "Id Pregunta: 848. Ley 40/2015";
 preguntaids[32] = 848


//  Id pregunta: 831 Año de creación de pregunta: 2016
 questions[33]= "34)  Si el recusado niega la causa de recusaci&oacute;n, el superior resolver&aacute; en el plazo de ...";
 choices[33]= new Array();
 choices[33][0] = "Un d&iacute;a";
 choices[33][1] = "Dos d&iacute;as";
 choices[33][2] = "Tres d&iacute;as";
 choices[33][3] = "Cuatro d&iacute;as";
 answers[33] = choices[33][3];
 units[33] = "4, 7, 8, 9";
 comments[33] = "Id Pregunta: 831. Ley 40/2015";
 preguntaids[33] = 831


//  Id pregunta: 581 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Cu&aacute;les son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[34]= new Array();
 choices[34][0] = "Transparencia e innovaci&oacute;n, orientaci&oacute;n al usuario del servicio y fomentar el uso de est&aacute;ndares";
 choices[34][1] = "Colaboraci&oacute;n y alianzas, unidad y visi&oacute;n integral y orientaci&oacute;n al usuario del servicio";
 choices[34][2] = "Unidad y visi&oacute;n integral, orientaci&oacute;n al usuario del servicio y prestaci&oacute;n de servicios compartidos";
 choices[34][3] = "Colaboraci&oacute;n y alianzas, fomentar el uso de est&aacute;ndares e incrementar la productividad y la eficacia";
 answers[34] = choices[34][1];
 units[34] = "19";
 comments[34] = "Id Pregunta: 581. Estrategia TIC";
 preguntaids[34] = 581


//  Id pregunta: 255 Año de creación de pregunta: 2016
 questions[35]= "36)  La soberan&iacute;a nacional reside en:";
 choices[35]= new Array();
 choices[35][0] = "el Parlamento nacional.";
 choices[35][1] = "el Parlamento auton&oacute;mico o Asamblea.";
 choices[35][2] = "el pueblo espa&ntilde;ol.";
 choices[35][3] = "el Congreso y el Senado.";
 answers[35] = choices[35][3];
 units[35] = "1";
 comments[35] = "Id Pregunta: 255. CONSTITUCION1978";
 preguntaids[35] = 255


//  Id pregunta: 35 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Qu&eacute; es Java Web Start?";
 choices[36]= new Array();
 choices[36][0] = "Un motor para la ejecuci&oacute;n de Java Serlvets y JavaServer Pages.";
 choices[36][1] = "Una interfaz de programaci&oacute;n para entornos de ventanas en Java.";
 choices[36][2] = "Una tecnolog&iacute;a de compiladores empleada por Java.";
 choices[36][3] = "Una tecnolog&iacute;a que permite descargar y ejecutar aplicaciones Java.";
 answers[36] = choices[36][3];
 units[36] = "64";
 comments[36] = "Id Pregunta: 35. AGE A1 2015";
 preguntaids[36] = 35


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
 preguntaids[37] = 249


//  Id pregunta: 657 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Qu&eacute; aplicativo no se encuentra dentro del ecosistemas de Haddoop?";
 choices[38]= new Array();
 choices[38][0] = "Yarn";
 choices[38][1] = "Flume";
 choices[38][2] = "Hive";
 choices[38][3] = "BizAgi";
 answers[38] = choices[38][3];
 units[38] = "73";
 comments[38] = "Id Pregunta: 657. ";
 preguntaids[38] = 657


//  Id pregunta: 40 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Cu&aacute;l de los siguientes NO es un gestor de contenidos?";
 choices[39]= new Array();
 choices[39][0] = "Drupal";
 choices[39][1] = "Cassandra";
 choices[39][2] = "Wordpress";
 choices[39][3] = "OpenCMS";
 answers[39] = choices[39][1];
 units[39] = "99";
 comments[39] = "Id Pregunta: 40. AGE A1 2015";
 preguntaids[39] = 40


//  Id pregunta: 735 Año de creación de pregunta: 2016
 questions[40]= "41)  Son l&iacute;neas de acci&oacute;n del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP.";
 choices[40]= new Array();
 choices[40][0] = "Disponer de sistemas de an&aacute;lisis de datos para la toma de decisiones y de funcionarios formados adecuadamente.";
 choices[40][1] = "Que en el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser electr&oacute;nica.";
 choices[40][2] = "Un mejor formaci&oacute;n del funcionariado y una atenci&oacute;n al ciudadano acorde a las nuevas tecnolog&iacute;as.";
 choices[40][3] = "Desarrollar el puesto de trabajo digital y mejorar la satisfacci&oacute;n del usuario en el uso de los servicios p&uacute;blicos digitales.";
 answers[40] = choices[40][3];
 units[40] = "28";
 comments[40] = "Id Pregunta: 735. Estrategia TIC";
 preguntaids[40] = 735


//  Id pregunta: 488 Año de creación de pregunta: 2016
 questions[41]= "42)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la prescripci&oacute;n de los derechos de la Hacienda P&uacute;blica estatal, se interrumpir&aacute; conforme a lo establecido en:";
 choices[41]= new Array();
 choices[41][0] = "La Ley General Tributaria.";
 choices[41][1] = "La Ley Presupuestaria.";
 choices[41][2] = "La Ley de Hacienda P&uacute;blica.";
 choices[41][3] = "Ninguna de las respuestas es correcta.";
 answers[41] = choices[41][0];
 units[41] = "10";
 comments[41] = "Id Pregunta: 488. PRESUPUESTOS GENERALES";
 preguntaids[41] = 488


//  Id pregunta: 635 Año de creación de pregunta: 2016
 questions[42]= "43)  Respecto a la b&uacute;squeda en un &aacute;rbol binario, el peor de los casos para el algoritmo T, &ldquo;b&uacute;squeda e inserci&oacute;n en un &aacute;rbol&rdquo;, se da cuando las claves se han introducido en el &aacute;rbol de forma:";
 choices[42]= new Array();
 choices[42][0] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[42][1] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 choices[42][2] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[42][3] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 answers[42] = choices[42][3];
 units[42] = "56";
 comments[42] = "Id Pregunta: 635. Junta de Extremadura A1 2015";
 preguntaids[42] = 635


//  Id pregunta: 77 Año de creación de pregunta: 2016
 questions[43]= "44)  Respecto al uso de servicios de firma de documentos electr&oacute;nicos mediante certificados electr&oacute;nicos centralizados, mediante el sistema Cl@ve, indique cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[43]= new Array();
 choices[43][0] = "Para poder acceder al servicio, el usuario deber&aacute; solicitar previa y expresamente la emisi&oacute;n de los certificados electr&oacute;nicos centralizados correspondientes.";
 choices[43][1] = "Los certificados electr&oacute;nicos centralizados ser&aacute;n emitidos con las mismas garant&iacute;as de identificaci&oacute;n del DNI electr&oacute;nico del ciudadano.";
 choices[43][2] = "El acceso al servicio requiere en todo caso que el usuario se haya registrado en Cl@ve y haya activado su Cl@ve permanente.";
 choices[43][3] = "En el momento de la identificaci&oacute;n, se requerir&aacute; la utilizaci&oacute;n de una verificaci&oacute;n de seguridad adicional mediante un c&oacute;digo de un solo uso y validez limitada en el tiempo que se enviar&aacute; al tel&eacute;fono m&oacute;vil del usuario registrado.";
 answers[43] = choices[43][2];
 units[43] = "47";
 comments[43] = "Id Pregunta: 77. AGE A1 2015";
 preguntaids[43] = 77


//  Id pregunta: 43 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Cu&aacute;l de los siguientes principios NO est&aacute; recogido en el Manifiesto por el Desarrollo &Aacute;gil del Software?";
 choices[44]= new Array();
 choices[44][0] = "La simplicidad, o el arte de maximizar la cantidad de trabajo no realizado, es esencial.";
 choices[44][1] = "Aceptamos que los requisitos cambien, incluso en etapas tard&iacute;as del desarrollo. Los procesos &aacute;giles aprovechan el cambio para proporcionar ventaja competitiva al cliente.";
 choices[44][2] = "Las mejores arquitecturas, requisitos y dise&ntilde;os emergen por la aplicaci&oacute;n de unos procesos bien organizados.";
 choices[44][3] = "El software funcionando es la medida principal del progreso.";
 answers[44] = choices[44][2];
 units[44] = "34";
 comments[44] = "Id Pregunta: 43. AGE A1 2015";
 preguntaids[44] = 43


//  Id pregunta: 155 Año de creación de pregunta: 2016
 questions[45]= "46)  A efectos del c&oacute;mputo de plazo fijado en d&iacute;as h&aacute;biles, y en lo que se refiere al cumplimiento de plazos por los interesados, la presentaci&oacute;n de documentos en un registro electr&oacute;nico un d&iacute;a inh&aacute;bil:";
 choices[45]= new Array();
 choices[45][0] = "se entender&aacute; realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil.";
 choices[45][1] = "se entender&aacute;, en todo caso, realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior";
 choices[45][2] = "se entender&aacute; realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil";
 choices[45][3] = "se entender&aacute;, en todo caso, realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente";
 answers[45] = choices[45][2];
 units[45] = "7";
 comments[45] = "Id Pregunta: 155. Ley 39/2015, Art&iacute;culo 31";
 preguntaids[45] = 155


//  Id pregunta: 583 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Qu&eacute; car&aacute;cter tiene la utilizaci&oacute;n de los medios y servicios compartidos?.";
 choices[46]= new Array();
 choices[46][0] = "Car&aacute;cter sustitutivo";
 choices[46][1] = "Car&aacute;cter obligatorio";
 choices[46][2] = "Car&aacute;cter obligatorio y sustitutivo, sin excepci&oacute;n alguna";
 choices[46][3] = "Ninguna de las anteriores";
 answers[46] = choices[46][3];
 units[46] = "19";
 comments[46] = "Id Pregunta: 583. Estrategia TIC. Car&aacute;cter obligatorio y sustitutivo, aunque se podr&aacute;n acordar excepciones";
 preguntaids[46] = 583


//  Id pregunta: 482 Año de creación de pregunta: 2016
 questions[47]= "48)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el &aacute;mbito del Ministerio de Defensa y de la Seguridad Social, el control se ejercer&aacute; a trav&eacute;s de:";
 choices[47]= new Array();
 choices[47][0] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[47][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[47][2] = "Las respuestas a) b) no son correctas.";
 choices[47][3] = "Las respuestas a) y b) son correctas.";
 answers[47] = choices[47][3];
 units[47] = "10";
 comments[47] = "Id Pregunta: 482. PRESUPUESTOS GENERALES";
 preguntaids[47] = 482


//  Id pregunta: 37 Año de creación de pregunta: 2016
 questions[48]= "49)  Seg&uacute;n el proyecto GNU, &iquest;cu&aacute;l de las siguientes NO puede ser considerada una libertad esencial del software libre?";
 choices[48]= new Array();
 choices[48][0] = "La libertad de ejecutar el programa como se desee, con cualquier prop&oacute;sito.";
 choices[48][1] = "La libertad de estudiar c&oacute;mo funciona el programa, y modificarlo para que tenga la funcionalidad deseada.";
 choices[48][2] = "La libertad de redistribuir copias para ayudar al pr&oacute;jimo.";
 choices[48][3] = "La libertad de distribuir a terceros versiones modificadas siempre que no tengan uso comercial.";
 answers[48] = choices[48][3];
 units[48] = "66";
 comments[48] = "Id Pregunta: 37. AGE A1 2015";
 preguntaids[48] = 37


//  Id pregunta: 442 Año de creación de pregunta: 2016
 questions[49]= "50)  Sobre la gu&iacute;a de Comunicaci&oacute;n Digital de la AGE, se&ntilde;ale la respuesta falsa:";
 choices[49]= new Array();
 choices[49][0] = "La Gu&iacute;a de Comunicaci&oacute;n Digital para la AGE ofrece un marco de criterios, recomendaciones y buenas pr&aacute;cticas a considerar al crear, generar contenidos o evolucionar sitios web, sedes electr&oacute;nicas o tambi&eacute;n blogs, cuentas o perfiles de redes sociales.";
 choices[49][1] = "Recoge aspectos como la imagen Institucional: uso de los logotipos del Gobierno de Espa&ntilde;a, elementos distintivos de imagen en las redes sociales o la imagen promocional de la administraci&oacute;n electr&oacute;nica.";
 choices[49][2] = "Se divide en tres partes, con fasc&iacute;culos que pueden ser utilizados independientemente seg&uacute;n las necesidades de cada responsable del sitio web.";
 choices[49][3] = "La &laquo;Gu&iacute;a de Comunicaci&oacute;n Digital para la Administraci&oacute;n General del Estado&raquo; que se aprueba mediante la presente Resoluci&oacute;n se aplicar&aacute; al a&ntilde;o siguiente al de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 answers[49] = choices[49][3];
 units[49] = "43";
 comments[49] = "Id Pregunta: 442. SERVICIOS COMUNES";
 preguntaids[49] = 442


//  Id pregunta: 845 Año de creación de pregunta: 2016
 questions[50]= "51)  Respecto a la reutilizaci&oacute;n de sistemas y aplicaciones de propiedad de la Administraci&oacute;n:";
 choices[50]= new Array();
 choices[50][0] = "Las Administraciones pondr&aacute;n siempre a disposici&oacute;n de cualquiera de ellas que lo solicite las aplicaciones, desarrolladas por sus servicios o que hayan sido objeto de contrataci&oacute;n y de cuyos derechos de propiedad intelectual sean titulares.";
 choices[50][1] = "Las aplicaciones a las que se refiere el apartado anterior podr&aacute;n ser declaradas como de fuentes abiertas, cuando de ello se derive una mayor transparencia en el funcionamiento de la Administraci&oacute;n P&uacute;blica o se fomente con ello la incorporaci&oacute;n de los ciudadanos a la Sociedad de la informaci&oacute;n.";
 choices[50][2] = "Las Administraciones P&uacute;blicas, con car&aacute;cter posterior a la adquisici&oacute;n, desarrollo o al mantenimiento a lo largo de todo el ciclo de vida de una aplicaci&oacute;n, tanto si se realiza con medios propios o por la contrataci&oacute;n de los servicios correspondientes, deber&aacute;n consultar en el directorio general de aplicaciones.";
 choices[50][3] = "En el directorio general de aplicaciones constar&aacute;n las aplicaciones disponibles de la Administraci&oacute;n General del Estado.";
 answers[50] = choices[50][1];
 units[50] = "4, 7, 8, 9";
 comments[50] = "Id Pregunta: 845. Ley 40/2015";
 preguntaids[50] = 845


//  Id pregunta: 480 Año de creación de pregunta: 2016
 questions[51]= "52)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la funci&oacute;n interventora se ejercer&aacute; en sus modalidades de:";
 choices[51]= new Array();
 choices[51][0] = "Intervenci&oacute;n f&iacute;sica y general.";
 choices[51][1] = "Intervenci&oacute;n formal y material.";
 choices[51][2] = "Intervenci&oacute;n f&iacute;sica y material.";
 choices[51][3] = "Intervenci&oacute;n formal y general.";
 answers[51] = choices[51][1];
 units[51] = "10";
 comments[51] = "Id Pregunta: 480. PRESUPUESTOS GENERALES";
 preguntaids[51] = 480


//  Id pregunta: 639 Año de creación de pregunta: 2016
 questions[52]= "53)  En el sistema operativo Unix/Linux, el comando id:";
 choices[52]= new Array();
 choices[52][0] = "Muestra el n&uacute;mero de identificaci&oacute;n y el grupo al que pertenece el usuario.";
 choices[52][1] = "El comando id no existe.";
 choices[52][2] = "Muestra el n&uacute;mero de procesos lanzados por el usuario.";
 choices[52][3] = "Muestra las hebras y las identificaciones de los archivos abiertos por el usuario.";
 answers[52] = choices[52][0];
 units[52] = "57";
 comments[52] = "Id Pregunta: 639. Junta de Extremadura A1 2015";
 preguntaids[52] = 639


//  Id pregunta: 177 Año de creación de pregunta: 2016
 questions[53]= "54)  El art&iacute;culo 152 de la Constituci&oacute;n espa&ntilde;ola se refiere a la organizaci&oacute;n instituicional b&aacute;sica de cada Comunidad Aut&oacute;noma, la cual se basar&aacute; en:";
 choices[53]= new Array();
 choices[53][0] = "Una Conseller&iacute;a legislativa, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[53][1] = "Una Asamble legislativa, un Presidente, un Delegado de Gobierno y un Comit&eacute; Superior del Poder Judicial.";
 choices[53][2] = "Una Asamble legislativa, un Consejo de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[53][3] = "Un Consejo legislativo, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Supremo.";
 answers[53] = choices[53][2];
 units[53] = "1";
 comments[53] = "Id Pregunta: 177. CONSTITUCION1978";
 preguntaids[53] = 177


//  Id pregunta: 493 Año de creación de pregunta: 2016
 questions[54]= "55)  Seg&uacute;n Ley 47/2003, de 26 de noviembre, General Presupuestaria, el conjunto de gastos que se considera necesario realizar en el desarrollo de actividades orientadas a la consecuci&oacute;n de determinados objetivos preestablecidos es:";
 choices[54]= new Array();
 choices[54][0] = "Un programa presupuestario.";
 choices[54][1] = "Un concepto presupuestario.";
 choices[54][2] = "Una aplicaci&oacute;n presupuestaria.";
 choices[54][3] = "Un cr&eacute;dito presupuestario.";
 answers[54] = choices[54][0];
 units[54] = "10";
 comments[54] = "Id Pregunta: 493. PRESUPUESTOS GENERALES";
 preguntaids[54] = 493


//  Id pregunta: 574 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares de la serie IEEE 802.11 se conoce como Fast Basic Service Set Transition, el cual est&aacute; enfocado a permitir la conexi&oacute;n continua de clientes en movimiento?";
 choices[55]= new Array();
 choices[55][0] = "IEEE 802.11p";
 choices[55][1] = "IEEE 802.11r";
 choices[55][2] = "IEEE 802.11v";
 choices[55][3] = "IEEE 802.11w";
 answers[55] = choices[55][1];
 units[55] = "112";
 comments[55] = "Id Pregunta: 574. Tema 112. TAI 2016.";
 preguntaids[55] = 574


//  Id pregunta: 850 Año de creación de pregunta: 2016
 questions[56]= "57)  El RPO (Recovery Point Objective) de una organizaci&oacute;n son 2 horas. &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?: ";
 choices[56]= new Array();
 choices[56][0] = "No m&aacute;s de 2 horas de datos de producci&oacute;n se pueden perder en caso de desastre";
 choices[56][1] = "No m&aacute;s de 4 horas de datos de producci&oacute;n se pueden perder en caso de desastre";
 choices[56][2] = "El tiempo para recuperar los sistemas en producci&oacute;n de nuevo no puede ser m&aacute;s de 2 horas.";
 choices[56][3] = "El tiempo para recuperar los sistemas en producci&oacute;n de nuevo no puede ser m&aacute;s de 4 horas.";
 answers[56] = choices[56][0];
 units[56] = "45";
 comments[56] = "Id Pregunta: 850. Xunta de Galicia 2015";
 preguntaids[56] = 850


//  Id pregunta: 68 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes opciones se refiere al conjunto de metodolog&iacute;as, procesos, arquitecturas y tecnolog&iacute;as que permiten reunir, depurar y transformar datos de los sistemas transaccionales e informaci&oacute;n desestructurada en informaci&oacute;n estructurada, para su explotaci&oacute;n directa o para su an&aacute;lisis y conversi&oacute;n en conocimiento, dando as&iacute; soporte a la toma de decisiones sobre el negocio?";
 choices[57]= new Array();
 choices[57][0] = "Data Mining (miner&iacute;a de datos)";
 choices[57][1] = "Business Intelligence (inteligencia de negocio)";
 choices[57][2] = "Data Warehouse (almac&eacute;n de datos)";
 choices[57][3] = "An&aacute;lisis OLTP (procesamiento en l&iacute;nea transaccional)";
 answers[57] = choices[57][1];
 units[57] = "72";
 comments[57] = "Id Pregunta: 68. AGE A1 2015";
 preguntaids[57] = 68


//  Id pregunta: 601 Año de creación de pregunta: 2016
 questions[58]= "59)  Algunos de los elementos tecnol&oacute;gicos que intervienen en la seguridad perimetral corporativa son:";
 choices[58]= new Array();
 choices[58][0] = "En la seguridad perimetral corporativa s&oacute;lo intervienen enrutadores y switches. .";
 choices[58][1] = "Switches, servidores y aplicaciones departamentales.";
 choices[58][2] = "Enrutadores , cortafuegos y sistemas VPN.";
 choices[58][3] = "Servidores, tecnolog&iacute;as inal&aacute;mbricas, sistemas de usuarios y aplicaciones departamentales.";
 answers[58] = choices[58][2];
 units[58] = "45";
 comments[58] = "Id Pregunta: 601. Junta de Extremadura A1 2015";
 preguntaids[58] = 601


//  Id pregunta: 201 Año de creación de pregunta: 2016
 questions[59]= "60)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[59]= new Array();
 choices[59][0] = "La aprobaci&oacute;n, modificaci&oacute;n o derogaci&oacute;n de las leyes org&aacute;nicas exigir&aacute; mayor&iacute;a absoluta de las Cortes Generales, en una votaci&oacute;n final sobre el conjunto del proyecto.";
 choices[59][1] = "Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada recibir&aacute;n el t&iacute;tulo de Decretos-leyes.";
 choices[59][2] = "Son leyes org&aacute;nicas las relativas al desarrollo de los derechos fundamentales y de las libertades p&uacute;blicas, las que aprueben los Estatutos de Autonom&iacute;a y el r&eacute;gimen electoral general y las dem&aacute;s previstas en la Constituci&oacute;n.";
 choices[59][3] = "La delegaci&oacute;n legislativa deber&aacute; otorgarse mediante una ley org&aacute;nica cuando su objeto sea la formaci&oacute;n de textos articulados o por una ley ordinaria cuando se trate de refundir varios textos legales en uno.";
 answers[59] = choices[59][2];
 units[59] = "1";
 comments[59] = "Id Pregunta: 201. CONSTITUCION1978";
 preguntaids[59] = 201


//  Id pregunta: 242 Año de creación de pregunta: 2016
 questions[60]= "61)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, es competencia del Rey:";
 choices[60]= new Array();
 choices[60][0] = "Refrendar los actos del Presidente de Gobierno.";
 choices[60][1] = "Previa autorizaci&oacute;n del Presidente de Gobierno, declarar la guerra y hacer la paz.";
 choices[60][2] = "El Alto Patronazgo de las Reales Academias.";
 choices[60][3] = "Sancionar y publicar las leyes.";
 answers[60] = choices[60][2];
 units[60] = "1";
 comments[60] = "Id Pregunta: 242. CONSTITUCION1978";
 preguntaids[60] = 242


//  Id pregunta: 406 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola garantiza la no discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[61]= new Array();
 choices[61][0] = "Art&iacute;culo 9.1 CE.";
 choices[61][1] = "Art&iacute;culo 53 CE.";
 choices[61][2] = "Art&iacute;culo 14 CE.";
 choices[61][3] = "Art&iacute;culo 16 CE.";
 answers[61] = choices[61][2];
 units[61] = "14";
 comments[61] = "Id Pregunta: 406. POLITICAS DE IGUALDAD";
 preguntaids[61] = 406


//  Id pregunta: 123 Año de creación de pregunta: 2016
 questions[62]= "63)  Seg&uacute;n el  Estatuto del Consejo de Transparencia y Buen Gobierno, &iquest;cu&aacute;l NO es un vocal de la Comisi&oacute;n de Transparencia y Buen Gobierno?";
 choices[62]= new Array();
 choices[62][0] = "Un representante de la Administraci&oacute;n local.";
 choices[62][1] = "Un representante del Tribunal de Cuentas.";
 choices[62][2] = "Un representante del Defensor del Pueblo.";
 choices[62][3] = "Un representante de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[62] = choices[62][0];
 units[62] = "22";
 comments[62] = "Id Pregunta: 123. ";
 preguntaids[62] = 123


//  Id pregunta: 787 Año de creación de pregunta: 2016
 questions[63]= "64)  La Administraci&oacute;n General del Estado comprende (se&ntilde;ala la incorrecta):";
 choices[63]= new Array();
 choices[63][0] = "la Organizaci&oacute;n Central, que integra los Ministerios y los servicios comunes";
 choices[63][1] = "la Organizaci&oacute;n Territorial";
 choices[63][2] = "la Organizaci&oacute;n sectorial";
 choices[63][3] = "la Administraci&oacute;n General del Estado en el exterior";
 answers[63] = choices[63][2];
 units[63] = "4, 7, 8, 9";
 comments[63] = "Id Pregunta: 787. Ley 40/2015";
 preguntaids[63] = 787


//  Id pregunta: 54 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;A qu&eacute; tipo de ataque nos referimos cuando se suplanta la identidad de una direcci&oacute;n IP origen?";
 choices[64]= new Array();
 choices[64][0] = "DoS";
 choices[64][1] = "Phishing";
 choices[64][2] = "Sniffing";
 choices[64][3] = "Spoofing";
 answers[64] = choices[64][3];
 units[64] = "119";
 comments[64] = "Id Pregunta: 54. AGE A1 2015";
 preguntaids[64] = 54


//  Id pregunta: 161 Año de creación de pregunta: 2016
 questions[65]= "66)  Se&ntilde;alar cu&aacute;l NO es uno de los principios del Plan de Acci&oacute;n de Administraci&oacute;n Electr&oacute;nica 2016-2020";
 choices[65]= new Array();
 choices[65][0] = "Principio de solo una vez";
 choices[65][1] = "Apertura y transparencia";
 choices[65][2] = "Confianza y seguridad";
 choices[65][3] = "Estandarizaci&oacute;n de forma predeterminada";
 answers[65] = choices[65][3];
 units[65] = "19";
 comments[65] = "Id Pregunta: 161. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Junio/Noticia-2016-06-02-Plan-accion-administracion-electronica-2016-2020.html#.WCjvuWrhDIU";
 preguntaids[65] = 161


//  Id pregunta: 411 Año de creación de pregunta: 2016
 questions[66]= "67)  Es objeto de la Ley de Igualdad efectiva de mujeres y hombres:";
 choices[66]= new Array();
 choices[66][0] = "Elaborar medidas de acci&oacute;n positiva.";
 choices[66][1] = "Hacer efectivo el derecho de igualdad de trato y de oportunidades entre mujeres y hombre.";
 choices[66][2] = "Ninguna es correcta.";
 choices[66][3] = "A y B son correctas.";
 answers[66] = choices[66][1];
 units[66] = "14";
 comments[66] = "Id Pregunta: 411. POLITICAS DE IGUALDAD";
 preguntaids[66] = 411


//  Id pregunta: 783 Año de creación de pregunta: 2016
 questions[67]= "68)  La Administraci&oacute;n consultiva podr&aacute; articularse:";
 choices[67]= new Array();
 choices[67][0] = "mediante &oacute;rganos espec&iacute;ficos dotados de autonom&iacute;a org&aacute;nica y funcional con respecto a la Administraci&oacute;n activa";
 choices[67][1] = "a trav&eacute;s de los servicios de la Administraci&oacute;n activa que prestan asistencia jur&iacute;dica";
 choices[67][2] = "a y b son correctas";
 choices[67][3] = "a y b son incorrectas";
 answers[67] = choices[67][2];
 units[67] = "4, 7, 8, 9";
 comments[67] = "Id Pregunta: 783. Ley 40/2015";
 preguntaids[67] = 783


//  Id pregunta: 207 Año de creación de pregunta: 2016
 questions[68]= "69)  La representaci&oacute;n ordinaria del Estado en las Comunidades Aut&oacute;nomas corresponde a:";
 choices[68]= new Array();
 choices[68][0] = "El Delegado del Gobierno.";
 choices[68][1] = "El Subdelegado del Gobierno.";
 choices[68][2] = "El Presidente de la Comunidad Aut&oacute;noma.";
 choices[68][3] = "El Gobernador Civil.";
 answers[68] = choices[68][2];
 units[68] = "1";
 comments[68] = "Id Pregunta: 207. CONSTITUCION1978";
 preguntaids[68] = 207


//  Id pregunta: 107 Año de creación de pregunta: 2016
 questions[69]= "70)  Son bases de datos NoSQL orientadas a objetos:";
 choices[69]= new Array();
 choices[69][0] = "GemStone";
 choices[69][1] = "Zope Object DB";
 choices[69][2] = "Las dos anteriores";
 choices[69][3] = "Solo B)";
 answers[69] = choices[69][2];
 units[69] = "73";
 comments[69] = "Id Pregunta: 107. ";
 preguntaids[69] = 107


//  Id pregunta: 638 Año de creación de pregunta: 2016
 questions[70]= "71)  El soporte de m&oacute;dulos en Linux tiene tres componentes:";
 choices[70]= new Array();
 choices[70][0] = "Gesti&oacute;n de E/S, Interfaces y Gesti&oacute;n del almacenamiento.";
 choices[70][1] = "Gesti&oacute;n del almacenamiento, Gesti&oacute;n de seguridad y Gesti&oacute;n de integridad.";
 choices[70][2] = "Gesti&oacute;n de m&oacute;dulos, M&oacute;dulo registro de controladores y Mecanismo de resoluci&oacute;n de conflictos.";
 choices[70][3] = "Gesti&oacute;n de memoria, Gesti&oacute;n de discos y Gesti&oacute;n de impresi&oacute;n.";
 answers[70] = choices[70][2];
 units[70] = "57";
 comments[70] = "Id Pregunta: 638. Junta de Extremadura A1 2015";
 preguntaids[70] = 638


//  Id pregunta: 475 Año de creación de pregunta: 2016
 questions[71]= "72)  Seg&uacute;n el art&iacute;culo de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , el r&eacute;gimen econ&oacute;mico y financiero del sector p&uacute;blico estatal se regula en:";
 choices[71]= new Array();
 choices[71][0] = "Ley 50/1997, del Gobierno.";
 choices[71][1] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[71][2] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General del Estado.";
 choices[71][3] = "La Ley General de la Hacienda P&uacute;blica.";
 answers[71] = choices[71][1];
 units[71] = "10";
 comments[71] = "Id Pregunta: 475. PRESUPUESTOS GENERALES";
 preguntaids[71] = 475


//  Id pregunta: 87 Año de creación de pregunta: 2016
 questions[72]= "73)  Respecto a la pol&iacute;tica de normalizaci&oacute;n TIC en la Uni&oacute;n Europea, como se&ntilde;ala el Reglamento 1025/2012 del Parlamento y del Consejo, la identificaci&oacute;n de especificaciones t&eacute;cnicas de las TIC admisibles a efectos de referenciaci&oacute;n:";
 choices[72]= new Array();
 choices[72][0] = "Ha de estar siempre basada en normas de estandarizaci&oacute;n nacionales, europeas o internacionales.";
 choices[72][1] = "No deben ser usadas para permitir la interoperabilidad en la contrataci&oacute;n p&uacute;blica, dado que se podr&iacute;an dar situaciones monopol&iacute;sticas.";
 choices[72][2] = "Ser&aacute; realizada por la Comisi&oacute;n, bien a propuesta de un Estado miembro o por iniciativa propia, sin necesidad de ser una norma nacional, europea o internacional, cumpli&eacute;ndose los dem&aacute;s requisitos establecidos en el reglamento.";
 choices[72][3] = "Requieren para su adopci&oacute;n la unanimidad de todos los Estados miembro.";
 answers[72] = choices[72][2];
 units[72] = "48";
 comments[72] = "Id Pregunta: 87. AGE A1 2015";
 preguntaids[72] = 87


//  Id pregunta: 328 Año de creación de pregunta: 2016
 questions[73]= "74)  El principal &oacute;rgano decisorio de la Comunidad Europea es:";
 choices[73]= new Array();
 choices[73][0] = "El Presidente del Consejo Europeo.";
 choices[73][1] = "La Comisi&oacute;n.";
 choices[73][2] = "El Consejo.";
 choices[73][3] = "El Parlamento Europeo.";
 answers[73] = choices[73][2];
 units[73] = "5";
 comments[73] = "Id Pregunta: 328. UNION EUROPEA";
 preguntaids[73] = 328


//  Id pregunta: 502 Año de creación de pregunta: 2016
 questions[74]= "75)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el programa plurianual de la Seguridad Social se elaborar&aacute; por:";
 choices[74]= new Array();
 choices[74][0] = "El presidente de las Cortes Generales.";
 choices[74][1] = "El Presidente del Gobierno.";
 choices[74][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[74][3] = "El Ministro de Trabajo y Asuntos Sociales.";
 answers[74] = choices[74][3];
 units[74] = "10";
 comments[74] = "Id Pregunta: 502. PRESUPUESTOS GENERALES";
 preguntaids[74] = 502


