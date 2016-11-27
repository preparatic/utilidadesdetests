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

//  Id pregunta: 362 Año de creación de pregunta: 2016
 questions[0]= "1)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[0]= new Array();
 choices[0][0] = "Son actos normativos.";
 choices[0][1] = "Poseen alcance general.";
 choices[0][2] = "No son obligatorias.";
 choices[0][3] = "Son actos individuales no normativos.";
 answers[0] = choices[0][3];
 units[0] = "5";
 comments[0] = "Id Pregunta: 362. UNION EUROPEA";


//  Id pregunta: 173 Año de creación de pregunta: 2016
 questions[1]= "2)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la cuesti&oacute;n de confianza planteada por el Presidente del Gobierno, se entender&aacute; otorgada cuando vote a su favor la mayor&iacute;a:";
 choices[1]= new Array();
 choices[1][0] = "absoluta de las Cortes Generales.";
 choices[1][1] = "absoluta del Congreso de los Diputados.";
 choices[1][2] = "simple de las Cortes Generales.";
 choices[1][3] = "simple del Congreso de los Diputados.";
 answers[1] = choices[1][3];
 units[1] = "1";
 comments[1] = "Id Pregunta: 173. CONSTITUCION1978";


//  Id pregunta: 95 Año de creación de pregunta: 2016
 questions[2]= "3)  Bajo el paradigma de la Programaci&oacute;n Orientada a Objetos, indique cu&aacute;l de las siguientes proposiciones es falsa:";
 choices[2]= new Array();
 choices[2][0] = "Los objetos se generan a partir de la instanciaci&oacute;n de una clase.";
 choices[2][1] = "El polimorfismo es la propiedad por la que es posible enviar mensajes sint&aacute;cticamente iguales a objetos de tipos distintos.";
 choices[2][2] = "Una clase abstracta puede ser extendida mediante el mecanismo de herencia.";
 choices[2][3] = "La implementaci&oacute;n de una interfaz no se considera polimorfismo.";
 answers[2] = choices[2][3];
 units[2] = "89";
 comments[2] = "Id Pregunta: 95. AGE A1 2015";


//  Id pregunta: 143 Año de creación de pregunta: 2016
 questions[3]= "4)  Contra la resoluci&oacute;n de un recurso de alzada:";
 choices[3]= new Array();
 choices[3][0] = "No cabe interponer ning&uacute;n tipo de recurso";
 choices[3][1] = "Puede interponerse el recurso de reposici&oacute;n como paso previo a la impugnaci&oacute;n ante el orden jurisdiccional contencioso-administrativo";
 choices[3][2] = "Puede interponerse el recurso extraordinario de revisi&oacute;n, en los casos establecidos en el art&iacute;culo 125.1.";
 choices[3][3] = "Puede interponerse un nuevo recurso de alzada si el acto no fuera expreso";
 answers[3] = choices[3][2];
 units[3] = "8";
 comments[3] = "Id Pregunta: 143. Ley 39/2015, Art&iacute;culo 122";


//  Id pregunta: 737 Año de creación de pregunta: 2016
 questions[4]= "5)  En el Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE, las administraciones p&uacute;blicas y las instituciones p&uacute;blicas de la Uni&oacute;n Europea deben ser abiertas, eficaces e integradoras en el a&ntilde;o:";
 choices[4]= new Array();
 choices[4][0] = "2025";
 choices[4][1] = "2023";
 choices[4][2] = "2030";
 choices[4][3] = "2020";
 answers[4] = choices[4][3];
 units[4] = "28";
 comments[4] = "Id Pregunta: 737. Estrategia TIC";


//  Id pregunta: 337 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;De cu&aacute;ntos diputados se compone el Parlamento Europeo?:";
 choices[5]= new Array();
 choices[5][0] = "732";
 choices[5][1] = "626";
 choices[5][2] = "786";
 choices[5][3] = "360";
 answers[5] = choices[5][2];
 units[5] = "5";
 comments[5] = "Id Pregunta: 337. UNION EUROPEA";


//  Id pregunta: 188 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Puede el Estado transferir o delegar a las Comunidades Aut&oacute;nomas facultadas que son de su titularidad?";
 choices[6]= new Array();
 choices[6][0] = "No, en ning&uacute;n caso.";
 choices[6][1] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con cualquier tipo de facultades.";
 choices[6][2] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, sin que el Estado se pueda reservar ninguna forma de control.";
 choices[6][3] = ", mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, previendo en cada caso la correspondiente transferencia de medios financieros, as&iacute; como las formas de control que se reserve el Estado.";
 answers[6] = choices[6][3];
 units[6] = "1";
 comments[6] = "Id Pregunta: 188. CONSTITUCION1978";


//  Id pregunta: 394 Año de creación de pregunta: 2016
 questions[7]= "8)  La situaci&oacute;n en que una disposici&oacute;n, criterio o pr&aacute;ctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, se denomina:";
 choices[7]= new Array();
 choices[7][0] = "Discriminaci&oacute;n indirecta.";
 choices[7][1] = "Discriminaci&oacute;n directa.";
 choices[7][2] = "Discriminaci&oacute;n por raz&oacute;n de sexo.";
 choices[7][3] = "Discriminaci&oacute;n abusiva.";
 answers[7] = choices[7][0];
 units[7] = "14";
 comments[7] = "Id Pregunta: 394. POLITICAS DE IGUALDAD";


//  Id pregunta: 476 Año de creación de pregunta: 2016
 questions[8]= "9)  Conforme a la Ley General Presupuestaria, la aprobaci&oacute;n de las normas reguladoras de los anticipos de caja fija mediante las que se indiquen los gastos que pueden ser satisfechos por dicho sistema y los cr&eacute;ditos compete:";
 choices[8]= new Array();
 choices[8][0] = "Al Gobierno.";
 choices[8][1] = "Al Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[8][2] = "A los Ministros y Presidentes o Directores de los Organismos aut&oacute;nomos en relaci&oacute;n con sus respectivos &aacute;mbitos.";
 choices[8][3] = "A los Ministros en relaci&oacute;n con sus respectivos Departamentos, incluyendo los Organismos aut&oacute;nomos que tengan adscritos.";
 answers[8] = choices[8][2];
 units[8] = "10";
 comments[8] = "Id Pregunta: 476. PRESUPUESTOS GENERALES";


//  Id pregunta: 801 Año de creación de pregunta: 2016
 questions[9]= "10)  La organizaci&oacute;n en Departamentos ministeriales no obsta a la existencia de:";
 choices[9]= new Array();
 choices[9][0] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[9][1] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 choices[9][2] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[9][3] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 answers[9] = choices[9][3];
 units[9] = "4, 7, 8, 9";
 comments[9] = "Id Pregunta: 801. Ley 40/2015";


//  Id pregunta: 587 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;Qui&eacute;n y cu&aacute;ndo presenta el informe de seguimiento sobre el grado de avance de la implementaci&oacute;n de la Estrategia TIC?";
 choices[10]= new Array();
 choices[10][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, anualmente";
 choices[10][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, bienalmente";
 choices[10][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, bienalmente";
 choices[10][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, sin periodicidad definida";
 answers[10] = choices[10][0];
 units[10] = "19";
 comments[10] = "Id Pregunta: 587. Estrategia TIC";


//  Id pregunta: 841 Año de creación de pregunta: 2016
 questions[11]= "12)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[11]= new Array();
 choices[11][0] = "De cada sesi&oacute;n que celebre el &oacute;rgano colegiado se levantar&aacute; acta por el Secretario, que especificar&aacute; necesariamente los asistentes, el orden del d&iacute;a de la reuni&oacute;n, las circunstancias del lugar y tiempo en que se ha celebrado, los puntos principales de las deliberaciones, as&iacute; como el contenido de los acuerdos adoptados.";
 choices[11][1] = "Podr&aacute;n grabarse las sesiones que celebre el &oacute;rgano colegiado. El fichero resultante de la grabaci&oacute;n, junto con la certificaci&oacute;n expedida por el Secretario de la autenticidad e integridad del mismo, y cuantos documentos en soporte electr&oacute;nico se utilizasen como documentos de la sesi&oacute;n, podr&aacute;n acompa&ntilde;ar al acta de las sesiones, sin necesidad de hacer constar en ella los puntos principales de las deliberaciones.";
 choices[11][2] = "El acta de cada sesi&oacute;n podr&aacute; aprobarse en la misma reuni&oacute;n o en una reuni&oacute;n posterior. El Secretario elaborar&aacute; el acta con el visto bueno del Presidente y lo remitir&aacute; a trav&eacute;s de medios electr&oacute;nicos, a los miembros del &oacute;rgano colegiado, quienes podr&aacute;n manifestar por los mismos medios su conformidad o reparos al texto, a efectos de su aprobaci&oacute;n, consider&aacute;ndose, en caso afirmativo, aprobada en la misma reuni&oacute;n.";
 choices[11][3] = "Cuando se hubiese optado por la grabaci&oacute;n de las sesiones celebradas o por la utilizaci&oacute;n de documentos en soporte electr&oacute;nico, deber&aacute;n conservarse de forma que se garantice la integridad y autenticidad de los ficheros electr&oacute;nicos correspondientes y el acceso a los mismos por parte de los miembros del &oacute;rgano colegiado.";
 answers[11] = choices[11][2];
 units[11] = "4, 7, 8, 9";
 comments[11] = "Id Pregunta: 841. Ley 40/2015";


//  Id pregunta: 567 Año de creación de pregunta: 2016
 questions[12]= "13)  El sector que tiene un mayor peso en el PIB espa&ntilde;ol es el:";
 choices[12]= new Array();
 choices[12][0] = "Primario, que incluye la agricultura y la pesca";
 choices[12][1] = "Secundario, compuesto por los sectores industrial, de la energ&iacute;a y de la construcci&oacute;n";
 choices[12][2] = "Minero, junto con las exportaciones de comercio";
 choices[12][3] = "Servicios";
 answers[12] = choices[12][3];
 units[12] = "12";
 comments[12] = "Id Pregunta: 567. Modelo econ&oacute;mico";


//  Id pregunta: 688 Año de creación de pregunta: 2016
 questions[13]= "14)  Indique cu&aacute;l de los siguientes no es uno de los requisitos que deben cumplir los servicios cualificados de entrega electro&#769;nica certificada seg&uacute;n el Reglamento (UE) 910/2014";
 choices[13]= new Array();
 choices[13][0] = "Ser prestados por uno o ma&#769;s prestadores cualificados de servicios de confianza";
 choices[13][1] = "Garantizar la identificacio&#769;n del destinatario antes de la entrega de los datos";
 choices[13][2] = "Indicar mediante un sello cualificado de tiempo electro&#769;nico la fecha y hora de envi&#769;o, recepcio&#769;n y eventual modificacio&#769;n de los datos";
 choices[13][3] = "Proteger el envi&#769;o y la recepcio&#769;n de datos por una firma electro&#769;nica cualificada o un sello electro&#769;nico cualificado de un prestador cualificado de servicios de confianza";
 answers[13] = choices[13][1];
 units[13] = "77";
 comments[13] = "Id Pregunta: 688. Art&iacute;culo 44 del Reglamento 910/2014";


//  Id pregunta: 442 Año de creación de pregunta: 2016
 questions[14]= "15)  Sobre la gu&iacute;a de Comunicaci&oacute;n Digital de la AGE, se&ntilde;ale la respuesta falsa:";
 choices[14]= new Array();
 choices[14][0] = "La Gu&iacute;a de Comunicaci&oacute;n Digital para la AGE ofrece un marco de criterios, recomendaciones y buenas pr&aacute;cticas a considerar al crear, generar contenidos o evolucionar sitios web, sedes electr&oacute;nicas o tambi&eacute;n blogs, cuentas o perfiles de redes sociales.";
 choices[14][1] = "Recoge aspectos como la imagen Institucional: uso de los logotipos del Gobierno de Espa&ntilde;a, elementos distintivos de imagen en las redes sociales o la imagen promocional de la administraci&oacute;n electr&oacute;nica.";
 choices[14][2] = "Se divide en tres partes, con fasc&iacute;culos que pueden ser utilizados independientemente seg&uacute;n las necesidades de cada responsable del sitio web.";
 choices[14][3] = "La &laquo;Gu&iacute;a de Comunicaci&oacute;n Digital para la Administraci&oacute;n General del Estado&raquo; que se aprueba mediante la presente Resoluci&oacute;n se aplicar&aacute; al a&ntilde;o siguiente al de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 answers[14] = choices[14][3];
 units[14] = "43";
 comments[14] = "Id Pregunta: 442. SERVICIOS COMUNES";


//  Id pregunta: 212 Año de creación de pregunta: 2016
 questions[15]= "16)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con la regulaci&oacute;n constitucional de la composici&oacute;n del Senado:";
 choices[15]= new Array();
 choices[15][0] = "La poblaci&oacute;n de Melilla elegir&aacute; dos Senadores.";
 choices[15][1] = "En cada provincia se elegir&aacute;n tres senadores.";
 choices[15][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas elegir&aacute;n un senador cuando su poblaci&oacute;n supere el mill&oacute;n de habitantes.";
 choices[15][3] = "El Senado se compone de 350 senadores.";
 answers[15] = choices[15][0];
 units[15] = "1";
 comments[15] = "Id Pregunta: 212. CONSTITUCION1978";


//  Id pregunta: 802 Año de creación de pregunta: 2016
 questions[16]= "17)  Los Secretarios generales t&eacute;cnicos:";
 choices[16]= new Array();
 choices[16][0] = "se encuentran bajo la inmediata dependencia del Subsecretario";
 choices[16][1] = "tendr&aacute;n las competencias sobre servicios comunes que les atribuya el Real Decreto de estructura del Departamento";
 choices[16][2] = "tendr&aacute;n las competencias relativas a producci&oacute;n normativa, asistencia jur&iacute;dica y publicaciones";
 choices[16][3] = "todas son correctas";
 answers[16] = choices[16][3];
 units[16] = "4, 7, 8, 9";
 comments[16] = "Id Pregunta: 802. Ley 40/2015";


//  Id pregunta: 326 Año de creación de pregunta: 2016
 questions[17]= "18)  La Mesa del Parlamento estar&aacute; compuesta por:";
 choices[17]= new Array();
 choices[17][0] = "El Presidente, doce Vicepresidentes y los Cuestores.";
 choices[17][1] = "El Presidente, diez Vicepresidentes y los Cuestores.";
 choices[17][2] = "El Presidente, dos Vicepresidentes y los Cuestores.";
 choices[17][3] = "El Presidente, catorce Vicepresidentes y los Cuestores.";
 answers[17] = choices[17][3];
 units[17] = "5";
 comments[17] = "Id Pregunta: 326. UNION EUROPEA";


//  Id pregunta: 76 Año de creación de pregunta: 2016
 questions[18]= "19)  El proceso de auditor&iacute;a de sistemas de informaci&oacute;n se considera como un proceso:";
 choices[18]= new Array();
 choices[18][0] = "Estrat&eacute;gico";
 choices[18][1] = "Operativo";
 choices[18][2] = "T&aacute;ctico";
 choices[18][3] = "Tecnol&oacute;gico";
 answers[18] = choices[18][0];
 units[18] = "36";
 comments[18] = "Id Pregunta: 76. AGE A1 2015";


//  Id pregunta: 344 Año de creación de pregunta: 2016
 questions[19]= "20)  Al ingreso de Espa&ntilde;a en la Uni&oacute;n Europea &iquest;cu&aacute;ntos eurodiputados componen el Parlamento?:";
 choices[19]= new Array();
 choices[19][0] = "Pas&oacute; de 518 a 626.";
 choices[19][1] = "Pas&oacute; de 434 a 518.";
 choices[19][2] = "Pas&oacute; de 345 a 512.";
 choices[19][3] = "Pas&oacute; de 435 a 610.";
 answers[19] = choices[19][1];
 units[19] = "5";
 comments[19] = "Id Pregunta: 344. UNION EUROPEA";


//  Id pregunta: 645 Año de creación de pregunta: 2016
 questions[20]= "21)  Seg&uacute;n la ley de igualdad entre mujeres y hombres y contra la violencia de g&eacute;nero en Extremadura: &iquest;qu&eacute; &oacute;rgano tiene como fin esencial promover las condiciones para que la igualdad entre los sexos sea real y efectiva dentro del &aacute;mbito de competencias de la Junta de Extremadura?";
 choices[20]= new Array();
 choices[20][0] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sociales.";
 choices[20][1] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sanitarias.";
 choices[20][2] = "El Organismo P&uacute;blico de la Mujer.";
 choices[20][3] = "El Instituto de la Mujer de Extremadura.";
 answers[20] = choices[20][3];
 units[20] = "14";
 comments[20] = "Id Pregunta: 645. Junta de Extremadura A1 2015";


//  Id pregunta: 206 Año de creación de pregunta: 2016
 questions[21]= "22)  La alteraci&oacute;n de los l&iacute;mites de una provincia debe ser aprobada por:";
 choices[21]= new Array();
 choices[21][0] = "El Gobierno.";
 choices[21][1] = "La Asamblea de la Comunidad Aut&oacute;noma a la que pertenezca la provincia.";
 choices[21][2] = "Las Cortes Generales, mediante ley org&aacute;nica.";
 choices[21][3] = "Una Comisi&oacute;n formada por los senadores designados en esa provincia.";
 answers[21] = choices[21][2];
 units[21] = "1";
 comments[21] = "Id Pregunta: 206. CONSTITUCION1978";


//  Id pregunta: 328 Año de creación de pregunta: 2016
 questions[22]= "23)  El principal &oacute;rgano decisorio de la Comunidad Europea es:";
 choices[22]= new Array();
 choices[22][0] = "El Presidente del Consejo Europeo.";
 choices[22][1] = "La Comisi&oacute;n.";
 choices[22][2] = "El Consejo.";
 choices[22][3] = "El Parlamento Europeo.";
 answers[22] = choices[22][2];
 units[22] = "5";
 comments[22] = "Id Pregunta: 328. UNION EUROPEA";


//  Id pregunta: 726 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest; Cu&aacute;l es el n&uacute;mero de personas recomendados para cada team de Scrum?";
 choices[23]= new Array();
 choices[23][0] = "De 1a  4 ";
 choices[23][1] = "De 3 a  7 ";
 choices[23][2] = "De 5 a  9";
 choices[23][3] = "De 7 a 11";
 answers[23] = choices[23][2];
 units[23] = "34, 84";
 comments[23] = "Id Pregunta: 726. Metodologias &aacute;giles";


//  Id pregunta: 725 Año de creación de pregunta: 2016
 questions[24]= "25)  Sobre el Scrum Team, cual es la afirmaci&oacute;n falsa";
 choices[24]= new Array();
 choices[24][0] = "Cada miembro del equipo tiene que tener un rol especifico y no puede asumir tareas que no est&eacute;n dentro de su &aacute;rea de especializaci&oacute;n.";
 choices[24][1] = "Los miembros del equipo deben tener un perfil en &lsquo;T&rsquo;";
 choices[24][2] = "Cada miembro del equipo tiene que tener un conocimiento m&aacute;s amplio de un &aacute;rea";
 choices[24][3] = "Cada miembro del equipo puede asumir cualquier tipo de tarea.";
 answers[24] = choices[24][0];
 units[24] = "34, 84";
 comments[24] = "Id Pregunta: 725. Metodologias &aacute;giles";


//  Id pregunta: 727 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;C&uacute;al es el nombre de la reuni&oacute;n de SCRUM, donde se revisan los product backlog &iacute;tems?:";
 choices[25]= new Array();
 choices[25][0] = "Backlog refinement";
 choices[25][1] = "Backlog refinement";
 choices[25][2] = "A y b son correctas";
 choices[25][3] = "Ninguna de las anteriores";
 answers[25] = choices[25][2];
 units[25] = "34, 84";
 comments[25] = "Id Pregunta: 727. Metodologias &aacute;giles";


//  Id pregunta: 111 Año de creación de pregunta: 2016
 questions[26]= "27)  En t&eacute;rminos del mercado laboral, &iquest;Qu&eacute; es la Tasa de Actividad?";
 choices[26]= new Array();
 choices[26][0] = "Ratio entre el total de activos y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[26][1] = "Ratio entre el total de ocupados y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[26][2] = "Ratio entre el total de activos y la poblaci&oacute;n total";
 choices[26][3] = "Ratio entre el total de ocupados y el total de activos";
 answers[26] = choices[26][0];
 units[26] = "15";
 comments[26] = "Id Pregunta: 111. ";


//  Id pregunta: 80 Año de creación de pregunta: 2016
 questions[27]= "28)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, se&ntilde;ale la respuesta correcta respecto a la auditor&iacute;a de seguridad:";
 choices[27]= new Array();
 choices[27][0] = "Se realizar&aacute;, al menos, cada dieciocho meses para los sistemas de todas las categor&iacute;as, y con car&aacute;cter extraordinario, siempre que se produzcan modificaciones sustanciales en el sistema de informaci&oacute;n, que puedan repercutir en las medidas de seguridad requeridas.";
 choices[27][1] = "El equipo auditor, en el dise&ntilde;o de sus pruebas y revisiones, debe limitarse a la revisi&oacute;n de documentos facilitados por los responsables de la informaci&oacute;n, del servicio y de seguridad.";
 choices[27][2] = "Cuando existan razones que lo justifiquen, dentro de las tareas de la auditoria de seguridad podr&aacute;n incluirse adem&aacute;s la ejecuci&oacute;n de trabajos de consultor&iacute;a.";
 choices[27][3] = "El informe de auditor&iacute;a deber&aacute; dictaminar sobre la adecuaci&oacute;n de las medidas exigidas por el Esquema Nacional de Seguridad, identificar sus deficiencias y proponer las medidas correctoras o complementarias necesarias.";
 answers[27] = choices[27][3];
 units[27] = "46";
 comments[27] = "Id Pregunta: 80. AGE A1 2015";


//  Id pregunta: 832 Año de creación de pregunta: 2016
 questions[28]= "29)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de los siguientes requisitos:";
 choices[28]= new Array();
 choices[28][0] = "Determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia org&aacute;nica.";
 choices[28][1] = "Delimitaci&oacute;n de su naturaleza, funciones y competencias.";
 choices[28][2] = "Dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento.";
 choices[28][3] = "Todas son correctas.";
 answers[28] = choices[28][3];
 units[28] = "4, 7, 8, 9";
 comments[28] = "Id Pregunta: 832. Ley 40/2015";


//  Id pregunta: 719 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;C&uacute;al de los siguientes puntos NO  es uno de los principios de las metodolog&iacute;as lean?";
 choices[29]= new Array();
 choices[29][0] = "Flexibilidad para variar el servicio o producto";
 choices[29][1] = "Eliminar desperdicios";
 choices[29][2] = "Decidir lo m&aacute;s tarde posible";
 choices[29][3] = "Hacer entregas tan r&aacute;pido como sea posible";
 answers[29] = choices[29][0];
 units[29] = "34";
 comments[29] = "Id Pregunta: 719. Metodologias Lean";


//  Id pregunta: 310 Año de creación de pregunta: 2016
 questions[30]= "31)  Los actos legislativos de la Uni&oacute;n Europea, podr&aacute;n adoptarse &uacute;nicamente a propuesta de:";
 choices[30]= new Array();
 choices[30][0] = "La Comisi&oacute;n Europea.";
 choices[30][1] = "El Consejo Europeo.";
 choices[30][2] = "El Consejo de Europa.";
 choices[30][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[30] = choices[30][0];
 units[30] = "5";
 comments[30] = "Id Pregunta: 310. UNION EUROPEA";


//  Id pregunta: 195 Año de creación de pregunta: 2016
 questions[31]= "32)  La potestad reglamentaria constitucionalmente corresponde:";
 choices[31]= new Array();
 choices[31][0] = "Al Gobierno.";
 choices[31][1] = "A las Cortes Generales.";
 choices[31][2] = "Al Poder Judicial.";
 choices[31][3] = "Al Congreso de los Diputados.";
 answers[31] = choices[31][0];
 units[31] = "1";
 comments[31] = "Id Pregunta: 195. CONSTITUCION1978";


//  Id pregunta: 666 Año de creación de pregunta: 2016
 questions[32]= "33)  Seg&uacute;n el art&iacute;culo 73 de la Ley 39/2015, el plazo para el el cumplimiento de tr&aacute;mites que deban ser cumplimentados por el interesado, es por defecto:";
 choices[32]= new Array();
 choices[32][0] = "10 d&iacute;as.";
 choices[32][1] = "15 d&iacute;as.";
 choices[32][2] = "1 mes.";
 choices[32][3] = "No se establece ning&uacute;n plazo por defecto.";
 answers[32] = choices[32][0];
 units[32] = "7";
 comments[32] = "Id Pregunta: 666. Art&iacute;culo 73 de la Ley 39/2015";


//  Id pregunta: 91 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Cu&aacute;l de las siguientes opciones muestra exclusivamente herramientas directamente relacionadas con la realizaci&oacute;n de pruebas para asegurar la calidad del software?";
 choices[33]= new Array();
 choices[33][0] = "JUnit, Artifactory y SonarQube";
 choices[33][1] = "JUnit, Artifactory y Selenium";
 choices[33][2] = "JUnit, SonarQube y Selenium";
 choices[33][3] = "ArtiFactory, SonarQube y Selenium";
 answers[33] = choices[33][2];
 units[33] = "92";
 comments[33] = "Id Pregunta: 91. AGE A1 2015";


//  Id pregunta: 202 Año de creación de pregunta: 2016
 questions[34]= "35)  Se&ntilde;ale c&oacute;mo se re&uacute;nen los miembros del Gobierno:";
 choices[34]= new Array();
 choices[34][0] = "En Consejo de Ministros y en Comisiones Delegadas del Gobierno.";
 choices[34][1] = "En Consejo de Ministros y en Consejo de Vicepresidentes.";
 choices[34][2] = "En Consejo de Ministros y en Comisiones Delegadas de las Cortes Generales.";
 choices[34][3] = "En Comisiones Delegadas del Gobierno y Consejo de Estado.";
 answers[34] = choices[34][0];
 units[34] = "1";
 comments[34] = "Id Pregunta: 202. CONSTITUCION1978";


//  Id pregunta: 406 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola garantiza la no discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[35]= new Array();
 choices[35][0] = "Art&iacute;culo 9.1 CE.";
 choices[35][1] = "Art&iacute;culo 53 CE.";
 choices[35][2] = "Art&iacute;culo 14 CE.";
 choices[35][3] = "Art&iacute;culo 16 CE.";
 answers[35] = choices[35][2];
 units[35] = "14";
 comments[35] = "Id Pregunta: 406. POLITICAS DE IGUALDAD";


//  Id pregunta: 169 Año de creación de pregunta: 2016
 questions[36]= "37)  En lo que se refiere a comunicaciones m&oacute;viles en Europa,";
 choices[36]= new Array();
 choices[36][0] = "en 2020 se liberar&aacute;n las bandas de frecuencia superior a 10 Ghz para el despliegue de 5G";
 choices[36][1] = "en 2020 se espera desplegar la red 5G a gran escala.";
 choices[36][2] = "en 2020 se espera desplegar la red 4G-plus.";
 choices[36][3] = "en 2020 se liberar&aacute; la banda de frecuencia de 800 Mhz para finalizar el despliegue de 4G";
 answers[36] = choices[36][1];
 units[36] = "19";
 comments[36] = "Id Pregunta: 169. https://ec.europa.eu/digital-single-market/en/5g-europe-action-plan";


//  Id pregunta: 814 Año de creación de pregunta: 2016
 questions[37]= "38)  Podr&aacute;n crearse por Real Decreto Subdelegaciones del Gobierno en las Comunidades Aut&oacute;nomas uniprovinciales, cuando lo justifiquen circunstancias como:";
 choices[37]= new Array();
 choices[37][0] = "la poblaci&oacute;n del territorio";
 choices[37][1] = "el volumen de gesti&oacute;n";
 choices[37][2] = "sus singularidades geogr&aacute;ficas, sociales o econ&oacute;micas";
 choices[37][3] = "todas son correctas";
 answers[37] = choices[37][3];
 units[37] = "4, 7, 8, 9";
 comments[37] = "Id Pregunta: 814. Ley 40/2015";


//  Id pregunta: 653 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Cual de las siguientes bases de datos no est&aacute; orientada a grafos?";
 choices[38]= new Array();
 choices[38][0] = "Neo4J ";
 choices[38][1] = "OrientDB ";
 choices[38][2] = "InfoGrid ";
 choices[38][3] = "SimpleDB";
 answers[38] = choices[38][3];
 units[38] = "73";
 comments[38] = "Id Pregunta: 653. ";


//  Id pregunta: 450 Año de creación de pregunta: 2016
 questions[39]= "40)  Los Presupuestos Generales son expresi&oacute;n...";
 choices[39]= new Array();
 choices[39][0] = "Cifrada";
 choices[39][1] = "Conjunta";
 choices[39][2] = "Sistem&aacute;tica";
 choices[39][3] = "Todas son correctas";
 answers[39] = choices[39][3];
 units[39] = "10";
 comments[39] = "Id Pregunta: 450. PRESUPUESTOS GENERALES";


//  Id pregunta: 395 Año de creación de pregunta: 2016
 questions[40]= "41)  Una persona que en atenci&oacute;n a su sexo es tratada de manera menos favorable que otra en situaci&oacute;n comparable, est&aacute; sufriendo:";
 choices[40]= new Array();
 choices[40][0] = "Discriminaci&oacute;n indirecta.";
 choices[40][1] = "Discriminaci&oacute;n directa.";
 choices[40][2] = "Discriminaci&oacute;n por maternidad.";
 choices[40][3] = "Discriminaci&oacute;n abusiva.";
 answers[40] = choices[40][1];
 units[40] = "14";
 comments[40] = "Id Pregunta: 395. POLITICAS DE IGUALDAD";


//  Id pregunta: 373 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Cu&aacute;ntos Abogados Generales asisten al Tribunal Superior de Justicia?:";
 choices[41]= new Array();
 choices[41][0] = "Nueve.";
 choices[41][1] = "Diez.";
 choices[41][2] = "Siete.";
 choices[41][3] = "Ocho.";
 answers[41] = choices[41][3];
 units[41] = "5";
 comments[41] = "Id Pregunta: 373. UNION EUROPEA";


//  Id pregunta: 363 Año de creación de pregunta: 2016
 questions[42]= "43)  Los Reglamentos no se caracterizan por:";
 choices[42]= new Array();
 choices[42][0] = "No poseer alcance general.";
 choices[42][1] = "Ser obligatorios.";
 choices[42][2] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[42][3] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 answers[42] = choices[42][0];
 units[42] = "5";
 comments[42] = "Id Pregunta: 363. UNION EUROPEA";


//  Id pregunta: 799 Año de creación de pregunta: 2016
 questions[43]= "44)  Respecto a las unidades administrativas:";
 choices[43]= new Array();
 choices[43][0] = "pueden existir unidades administrativas complejas, que agrupen dos o m&aacute;s unidades mayores";
 choices[43][1] = "los jefes de las unidades administrativas son responsables del correcto funcionamiento de la unidad y de la adecuada ejecuci&oacute;n de las tareas asignadas a la misma";
 choices[43][2] = "las unidades administrativas se establecen mediante las relaciones de puestos de trabajo, que se aprobar&aacute;n de acuerdo con su regulaci&oacute;n espec&iacute;fica, y no se integran en ning&uacute;n &oacute;rgano determinado";
 choices[43][3] = "ninguna es correcta";
 answers[43] = choices[43][1];
 units[43] = "4, 7, 8, 9";
 comments[43] = "Id Pregunta: 799. Ley 40/2015";


//  Id pregunta: 426 Año de creación de pregunta: 2016
 questions[44]= "45)  La aprobaci&oacute;n de convocatorias de pruebas selectivas para el acceso al empleo p&uacute;blico deber&aacute; acompa&ntilde;arse de:";
 choices[44]= new Array();
 choices[44][0] = "Un plan de igualdad.";
 choices[44][1] = "Un informe de impacto de g&eacute;nero.";
 choices[44][2] = "Un programa de igualdad.";
 choices[44][3] = "Todas son correctas.";
 answers[44] = choices[44][1];
 units[44] = "14";
 comments[44] = "Id Pregunta: 426. POLITICAS DE IGUALDAD";


//  Id pregunta: 85 Año de creación de pregunta: 2016
 questions[45]= "46)  Seg&uacute;n MAGERIT 3.0, el informe en el que se recogen los resultados de la identificaci&oacute;n de las amenazas relevantes sobre el sistema a analizar, caracterizadas por las estimaciones de ocurrencia y da&ntilde;o causado, se denomina:";
 choices[45]= new Array();
 choices[45][0] = "Estimaci&oacute;n del riesgo";
 choices[45][1] = "Evaluaci&oacute;n de salvaguardas";
 choices[45][2] = "Declaraci&oacute;n de aplicabilidad";
 choices[45][3] = "Mapa de riesgos";
 answers[45] = choices[45][3];
 units[45] = "45";
 comments[45] = "Id Pregunta: 85. AGE A1 2015";


//  Id pregunta: 3 Año de creación de pregunta: 2016
 questions[46]= "47)  En el lenguaje de modelado UML :";
 choices[46]= new Array();
 choices[46][0] = "Los diagramas de secuencia y colaboraci&oacute;n son usados para modelar el comportamiento del sistema, pudiendo usarse para modelar un caso de uso, una clase, o un m&eacute;todo complicado.";
 choices[46][1] = "Los diagramas de actividad son usados para modelar la configuraci&oacute;n de los elementos de procesado en tiempo de ejecuci&oacute;n.";
 choices[46][2] = "Los diagramas de componentes son usados para modelar la estructura del software, incluyendo las dependencias entre los componentes de software.";
 choices[46][3] = "Los diagramas de implementaci&oacute;n son usados para modelar interacciones entre objetos de dise&ntilde;o en el sistema.";
 answers[46] = choices[46][2];
 units[46] = "89";
 comments[46] = "Id Pregunta: 3. AGE A1 2015";


//  Id pregunta: 147 Año de creación de pregunta: 2016
 questions[47]= "48)  Seg&uacute;n la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas el ejercicio de la potestad reglamentaria corresponde:";
 choices[47]= new Array();
 choices[47][0] = "Al Gobierno de la naci&oacute;n";
 choices[47][1] = "A las Cortes Generales y al Gobierno por delegaci&oacute;n de estas";
 choices[47][2] = "Al Gobierno de la naci&oacute;n y a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas";
 choices[47][3] = "Al Gobierno de la naci&oacute;n, a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas y a los &oacute;rganos de gobierno locales";
 answers[47] = choices[47][3];
 units[47] = "7";
 comments[47] = "Id Pregunta: 147. Ley 39/2015, Art&iacute;culo 128";


//  Id pregunta: 419 Año de creación de pregunta: 2016
 questions[48]= "49)  Promover&aacute;n el conocimiento y la difusi&oacute;n del principio de igualdad entre mujeres y hombres, los medios de comunicaci&oacute;n de titularidad:";
 choices[48]= new Array();
 choices[48][0] = "P&uacute;blica.";
 choices[48][1] = "Privada.";
 choices[48][2] = "Ambas son correctas.";
 choices[48][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[48] = choices[48][0];
 units[48] = "14";
 comments[48] = "Id Pregunta: 419. POLITICAS DE IGUALDAD";


//  Id pregunta: 493 Año de creación de pregunta: 2016
 questions[49]= "50)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, inspeccionar la actividad de las oficinas de contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una competencia de:";
 choices[49]= new Array();
 choices[49][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[49][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[49][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[49][3] = "La Intervenci&oacute;n General de la Seguridad Social.";
 answers[49] = choices[49][2];
 units[49] = "10";
 comments[49] = "Id Pregunta: 493. PRESUPUESTOS GENERALES";


//  Id pregunta: 484 Año de creación de pregunta: 2016
 questions[50]= "51)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, dirigir la contabilidad de las entidades que integran el sistema de la Seguridad Social y gestionar la contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una funci&oacute;n de:";
 choices[50]= new Array();
 choices[50][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[50][1] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[50][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[50][3] = "La Intervenci&oacute;n General de la Defensa.";
 answers[50] = choices[50][2];
 units[50] = "10";
 comments[50] = "Id Pregunta: 484. PRESUPUESTOS GENERALES";


//  Id pregunta: 258 Año de creación de pregunta: 2016
 questions[51]= "52)  El Art&iacute;culo 137 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Estado se organiza territorialmente en:";
 choices[51]= new Array();
 choices[51][0] = "Municipios, provincias y CCAA.";
 choices[51][1] = "En 17 CCAA m&aacute;s Ceuta y Melilla.";
 choices[51][2] = "En CCAA, 50 provincias y municipios.";
 choices[51][3] = "En municipios, en provincias, entidades locales menores y CCAA.";
 answers[51] = choices[51][2];
 units[51] = "1";
 comments[51] = "Id Pregunta: 258. CONSTITUCION1978";


//  Id pregunta: 149 Año de creación de pregunta: 2016
 questions[52]= "53)  Seg&uacute;n establece la Ley 39/2015, las Administraciones P&uacute;blicas har&aacute;n p&uacute;blico un Plan Normativo que:";
 choices[52]= new Array();
 choices[52][0] = "Contendr&aacute; las iniciativas legales y reglamentarias que hayan sido aprobadas en el a&ntilde;o en curso y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[52][1] = "Contendr&aacute; exclusivamente las iniciativas legales que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[52][2] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[52][3] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Bolet&iacute;n Oficial de la Administraci&oacute;n P&uacute;blica correspondiente";
 answers[52] = choices[52][2];
 units[52] = "7";
 comments[52] = "Id Pregunta: 149. Ley 39/2015, Art&iacute;culo 132";


//  Id pregunta: 840 Año de creación de pregunta: 2016
 questions[53]= "54)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Indique la respuesta correcta.";
 choices[53]= new Array();
 choices[53][0] = "Para la v&aacute;lida constituci&oacute;n del &oacute;rgano, a efectos de la celebraci&oacute;n de sesiones, deliberaciones y toma de acuerdos, se requerir&aacute; la asistencia, presencial o a distancia, del Presidente y Secretario o en su caso, de quienes les suplan, y la de la mitad de sus miembros.";
 choices[53][1] = "Cuando se trate de los &oacute;rganos colegiados a que se refiere el art&iacute;culo 15.2, el Presidente podr&aacute; considerar v&aacute;lidamente constituido el &oacute;rgano, a efectos de celebraci&oacute;n de sesi&oacute;n, si asisten los representantes de las Administraciones P&uacute;blicas y de las organizaciones representativas de intereses sociales miembros del &oacute;rgano a los que se haya atribuido la condici&oacute;n de portavoces.";
 choices[53][2] = "Cuando estuvieran reunidos, de manera presencial o a distancia, el Secretario y todos los miembros del &oacute;rgano colegiado, o en su caso las personas que les suplan, &eacute;stos podr&aacute;n constituirse v&aacute;lidamente como &oacute;rgano colegiado para la celebraci&oacute;n de sesiones, deliberaciones y adopci&oacute;n de acuerdos sin necesidad de convocatoria previa cuando as&iacute; lo decida el Presidente.";
 choices[53][3] = "Todas son correctas.";
 answers[53] = choices[53][1];
 units[53] = "4, 7, 8, 9";
 comments[53] = "Id Pregunta: 840. Ley 40/2015";


//  Id pregunta: 506 Año de creación de pregunta: 2016
 questions[54]= "55)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, responde a la reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, (en adelante CE) e incorpora tres nuevos principios con respecto a la derogada Ley Org&aacute;nica 5/2001, de 13 de diciembre, complementaria a la Ley General de Estabilidad Presupuestaria ,Cu&aacute;les son?";
 choices[54]= new Array();
 choices[54][0] = "Estabilidad presupuestaria, plurianualidad, y responsabilidad.";
 choices[54][1] = "Sostenibilidad financiera, responsabilidad y transparencia.";
 choices[54][2] = "Plurianualidad, lealtad institucional y eficiencia en la asignaci&oacute;n de los recursos p&uacute;blicos";
 choices[54][3] = "Responsabilidad, sostenibilidad financiera y lealtad institucional.";
 answers[54] = choices[54][3];
 units[54] = "10";
 comments[54] = "Id Pregunta: 506. PRESUPUESTOS GENERALES";


//  Id pregunta: 257 Año de creación de pregunta: 2016
 questions[55]= "56)  El Art&iacute;culo 98 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Gobierno Espa&ntilde;ol se compone de:";
 choices[55]= new Array();
 choices[55][0] = "El Presidente y su gabinete.";
 choices[55][1] = "El Presidente y sus Ministros.";
 choices[55][2] = "El Rey y el Presidente.";
 choices[55][3] = "El Presidente, de los Vicepresidentes en su caso, de los Ministros y dem&aacute;s miembros que establezca la ley.";
 answers[55] = choices[55][2];
 units[55] = "1";
 comments[55] = "Id Pregunta: 257. CONSTITUCION1978";


//  Id pregunta: 370 Año de creación de pregunta: 2016
 questions[56]= "57)  Establecer la interpretaci&oacute;n adecuada de los Tratados de la Uni&oacute;n Europea y las normas de derecho derivado es el objeto de:";
 choices[56]= new Array();
 choices[56][0] = "Un recurso de incumplimiento.";
 choices[56][1] = "Recurso de carencia.";
 choices[56][2] = "Cuesti&oacute;n o incidente prejudicial.";
 choices[56][3] = "Ninguna es correcta.";
 answers[56] = choices[56][2];
 units[56] = "5";
 comments[56] = "Id Pregunta: 370. UNION EUROPEA";


//  Id pregunta: 50 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas del DNI electr&oacute;nico es exclusiva del DNIe 3.0?";
 choices[57]= new Array();
 choices[57][0] = "Cumple la norma ISO 7816 para tarjetas inteligentes.";
 choices[57][1] = "Emplea la tecnolog&iacute;a inal&aacute;mbrica NFC.";
 choices[57][2] = "Contiene certificados de componente, autenticaci&oacute;n y firma.";
 choices[57][3] = "Sus certificados cumplen la norma X509 v3.";
 answers[57] = choices[57][1];
 units[57] = "78";
 comments[57] = "Id Pregunta: 50. AGE A1 2015";


//  Id pregunta: 228 Año de creación de pregunta: 2016
 questions[58]= "59)  Indique la respuesta falsa. Seg&uacute;n el Art&iacute;culo 147 de la Constituci&oacute;n espa&ntilde;ola, los Estatutos de Autonom&iacute;a deber&aacute;n contener:";
 choices[58]= new Array();
 choices[58][0] = "La denominaci&oacute;n de la Comunidad que mejor corresponda a su identidad hist&oacute;rica.";
 choices[58][1] = "La delimitaci&oacute;n de su territorio.";
 choices[58][2] = "Las competencias asumidas y aqu&eacute;llas del Estado sobre las que la Comunidad Aut&oacute;noma se reserva el derecho de opci&oacute;n.";
 choices[58][3] = "La denominaci&oacute;n, organizaci&oacute;n y sede de las instituciones aut&oacute;nomas propias.";
 answers[58] = choices[58][2];
 units[58] = "1";
 comments[58] = "Id Pregunta: 228. CONSTITUCION1978";


//  Id pregunta: 731 Año de creación de pregunta: 2016
 questions[59]= "60)  Cu&aacute;l de las siguientes reglas se corresponde a las reglas de la metodolog&iacute;a Kanban:";
 choices[59]= new Array();
 choices[59][0] = "Visualizar el trabajo o el flujo de trabajo. ";
 choices[59][1] = "Determinar el l&iacute;mite de trabajo en curso (Work in progress)";
 choices[59][2] = "Medir el tiempo en completar una tarea (Lead time)";
 choices[59][3] = "Todas las anteriores son reglas correspondientes a la metodolog&iacute;a Kanban.";
 answers[59] = choices[59][3];
 units[59] = "34, 84";
 comments[59] = "Id Pregunta: 731. Metodologias &aacute;giles";


//  Id pregunta: 480 Año de creación de pregunta: 2016
 questions[60]= "61)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el &aacute;mbito del Ministerio de Defensa y de la Seguridad Social, el control se ejercer&aacute; a trav&eacute;s de:";
 choices[60]= new Array();
 choices[60][0] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[60][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[60][2] = "Las respuestas a) b) no son correctas.";
 choices[60][3] = "Las respuestas a) y b) son correctas.";
 answers[60] = choices[60][3];
 units[60] = "10";
 comments[60] = "Id Pregunta: 480. PRESUPUESTOS GENERALES";


//  Id pregunta: 561 Año de creación de pregunta: 2016
 questions[61]= "62)  El plan nacional de ciudades inteligentes...";
 choices[61]= new Array();
 choices[61][0] = "Es una apuesta liderada por la Federaci&oacute;n Espa&ntilde;ola de Municipios y Provincias";
 choices[61][1] = "Es una apuesta del ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[61][2] = "Es una apuesta liderada por una gran asociaci&oacute;n de empresas tecnol&oacute;gicas nacionales";
 choices[61][3] = "No existe";
 answers[61] = choices[61][1];
 units[61] = "19";
 comments[61] = "Id Pregunta: 561. Ciudades Inteligentes";


//  Id pregunta: 79 Año de creación de pregunta: 2016
 questions[62]= "63)  La Ley 25/2013, de 27 de diciembre, de impulso de la factura electr&oacute;nica y creaci&oacute;n del Registro Contable de Facturas en el Sector P&uacute;blico, prev&eacute; que anualmente se realice una auditor&iacute;a de sistemas para verificar que los correspondientes registros contables de facturas cumplen con las condiciones de funcionamiento previstas en la normativa aplicable. En el &aacute;mbito de la Administraci&oacute;n General del Estado dicha auditor&iacute;a se realizar&aacute; por:";
 choices[62]= new Array();
 choices[62][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[62][1] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado";
 choices[62][2] = "Las Inspecciones Generales de los Servicios";
 choices[62][3] = "La Agencia Estatal de la Administraci&oacute;n Tributaria";
 answers[62] = choices[62][1];
 units[62] = "75";
 comments[62] = "Id Pregunta: 79. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 285 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Cu&aacute;l no es un obst&aacute;culo que dificulta la Agenda Digital para Europa?";
 choices[63]= new Array();
 choices[63][0] = "la fragmentaci&oacute;n de los mercados digitales.";
 choices[63][1] = "las diferencias tarifarias de los servicios de la sociedad de la informaci&oacute;n entre los miembros de la UE.";
 choices[63][2] = "la falta de interoperabilidad.";
 choices[63][3] = "el incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes.";
 answers[63] = choices[63][1];
 units[63] = "5";
 comments[63] = "Id Pregunta: 285. UNION EUROPEA";


//  Id pregunta: 715 Año de creación de pregunta: 2016
 questions[64]= "65)  Respecto a SonarQube, se&ntilde;ale la FALSA:";
 choices[64]= new Array();
 choices[64][0] = "Sirve para evaluar aspectos como la complejidad ciclom&aacute;tica del c&oacute;digo.";
 choices[64][1] = "Anteriormente se denominaba Sonar.";
 choices[64][2] = "Permite disponer de una matriz de dependencia entre objetos.";
 choices[64][3] = "Integra herramientas de medici&oacute;n de la calidad de c&oacute;digo como CPD, findbugs, PMD, checkstyle.";
 answers[64] = choices[64][2];
 units[64] = "92";
 comments[64] = "Id Pregunta: 715. INTEGRACION CONTINUA";


//  Id pregunta: 232 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos, de conformidad con la Constituci&oacute;n Espa&ntilde;ola, no tiene legitimidad para interponer el recurso de inconstitucionalidad?";
 choices[65]= new Array();
 choices[65][0] = "El Presidente del Senado.";
 choices[65][1] = "El Defensor del Pueblo.";
 choices[65][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[65][3] = "El Presidente del Gobierno.";
 answers[65] = choices[65][2];
 units[65] = "1";
 comments[65] = "Id Pregunta: 232. CONSTITUCION1978";


//  Id pregunta: 706 Año de creación de pregunta: 2016
 questions[66]= "67)  El Portal de Transparencia de la Administraci&oacute;n General del Estado depende del:";
 choices[66]= new Array();
 choices[66][0] = "Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[66][1] = "Ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[66][2] = "Ministerio de la Presidencia";
 choices[66][3] = "Ministerio de Fomento";
 answers[66] = choices[66][2];
 units[66] = "22";
 comments[66] = "Id Pregunta: 706. Portal de Transparencia";


//  Id pregunta: 421 Año de creación de pregunta: 2016
 questions[67]= "68)  Las empresas deber&aacute;n promover condiciones de trabajo, arbitrar procedimientos espec&iacute;ficos y dar cauces a las denuncias o reclamaciones, para evitar:";
 choices[67]= new Array();
 choices[67][0] = "El acoso sexual.";
 choices[67][1] = "El acoso por raz&oacute;n del sexo.";
 choices[67][2] = "Ambas son correctas.";
 choices[67][3] = "A y B son incorrectas.";
 answers[67] = choices[67][2];
 units[67] = "14";
 comments[67] = "Id Pregunta: 421. POLITICAS DE IGUALDAD";


//  Id pregunta: 697 Año de creación de pregunta: 2016
 questions[68]= "69)  Cu&aacute;l de las siguientes afirmaciones relativas a Apache Jenkins es falsa";
 choices[68]= new Array();
 choices[68][0] = "Est&aacute; desarrollado en Java.";
 choices[68][1] = "Fue un proyecto escindido de Hudson tras una disputa con Oracle.";
 choices[68][2] = "Se considera software libre bajo la licencia EUPL.";
 choices[68][3] = "Todas las afirmaciones son correctas.";
 answers[68] = choices[68][2];
 units[68] = "92";
 comments[68] = "Id Pregunta: 697. INTEGRACION CONTINUA";


//  Id pregunta: 529 Año de creación de pregunta: 2016
 questions[69]= "70)  Se presumir&aacute; la representaci&oacute;n para:";
 choices[69]= new Array();
 choices[69][0] = "formular solicitudes";
 choices[69][1] = "los actos y gestiones de mero tr&aacute;mite";
 choices[69][2] = "presentar declaraciones responsables o comunicaciones";
 choices[69][3] = "interponer recursos, desistir de acciones y renunciar a derechos en nombre de otra persona";
 answers[69] = choices[69][1];
 units[69] = "7";
 comments[69] = "Id Pregunta: 529. LEY 39/2015";


//  Id pregunta: 687 Año de creación de pregunta: 2016
 questions[70]= "71)  Indique cu&aacute;l de los siguientes no es uno de los requisitos que debe cumplir una firma electr&oacute;nica avanzada seg&uacute;n el Reglamento (UE) 910/2014";
 choices[70]= new Array();
 choices[70][0] = "Estar vinculada al firmante de manera &uacute;nica";
 choices[70][1] = "Haber sido creada utilizando un dispositivo avanzado de creacio&#769;n de firmas electro&#769;nicas";
 choices[70][2] = "Haber sido creada utilizando datos de creaci&oacute;n de firma que el firmante puede utilizar, con un alto nivel de confianza, bajo su exclusivo control";
 choices[70][3] = "Estar vinculada con los datos firmados, de modo tal que cualquier modificacio&#769;n ulterior de los mismos sea detectable";
 answers[70] = choices[70][1];
 units[70] = "77";
 comments[70] = "Id Pregunta: 687. Art&iacute;culo 26 del Reglamento 910/2014";


//  Id pregunta: 36 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Cu&aacute;l es la interfaz est&aacute;ndar de programaci&oacute;n Java para invocar a m&eacute;todos nativos escritos en otros lenguajes como C o C++?";
 choices[71]= new Array();
 choices[71][0] = "JAXP";
 choices[71][1] = "JNI";
 choices[71][2] = "JNDI";
 choices[71][3] = "JDBC";
 answers[71] = choices[71][1];
 units[71] = "64";
 comments[71] = "Id Pregunta: 36. AGE A1 2015";


//  Id pregunta: 678 Año de creación de pregunta: 2016
 questions[72]= "73)  De acuerdo a la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia, se define dependencia como:";
 choices[72]= new Array();
 choices[72][0] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[72][1] = "El estado de car&aacute;cter permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[72][2] = "El estado de car&aacute;cter temporal en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[72][3] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad, la discapacidad o la baja laboral, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 answers[72] = choices[72][1];
 units[72] = "14";
 comments[72] = "Id Pregunta: 678. Dependencia";


//  Id pregunta: 552 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Cu&aacute;l de los siguientes no es uno de los pilares de la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[73]= new Array();
 choices[73][0] = "Establecer redes de telecomunicaciones continentales";
 choices[73][1] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa";
 choices[73][2] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar";
 choices[73][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[73] = choices[73][0];
 units[73] = "17";
 comments[73] = "Id Pregunta: 552. Mercado &Uacute;nico Digital";


//  Id pregunta: 311 Año de creación de pregunta: 2016
 questions[74]= "75)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[74]= new Array();
 choices[74][0] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los tres quintos del n&uacute;mero de Estados miembros.";
 choices[74][1] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a las tres cuartas partes del n&uacute;mero de Estados miembros.";
 choices[74][2] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los dos tercios del n&uacute;mero de Estados miembros.";
 choices[74][3] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a un nacional por cada Estado miembro.";
 answers[74] = choices[74][2];
 units[74] = "5";
 comments[74] = "Id Pregunta: 311. UNION EUROPEA";


