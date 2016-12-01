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

//  Id pregunta: 743 Año de creación de pregunta: 2016
 questions[0]= "1)  Dos de los principios del Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE son:";
 choices[0]= new Array();
 choices[0][0] = "Transparencia e innovaci&oacute;n";
 choices[0][1] = "Seguridad y reutilizaci&oacute;n";
 choices[0][2] = "Reutilizaci&oacute;n y buz&oacute;n de quejas y sugerencias";
 choices[0][3] = "Principio de solo una vez y transfronterizo de forma predeterminada";
 answers[0] = choices[0][3];
 units[0] = "28";
 comments[0] = "Id Pregunta: 743. Estrategia TIC";
 preguntaids[0] = 743


//  Id pregunta: 849 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;Cu&aacute;l de los siguientes es un sistema de firma para la actuaci&oacute;n administrativa automatizada?";
 choices[1]= new Array();
 choices[1][0] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico reconocido o cualificado que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[1][1] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico avanzado o reconocido que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[1][2] = "C&oacute;digo seguro de verificaci&oacute;n vinculado a la Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de Derecho P&uacute;blico, en los t&eacute;rminos y condiciones establecidos, permiti&eacute;ndose en todo caso la comprobaci&oacute;n de la integridad del documento mediante el acceso al portal correspondiente.";
 choices[1][3] = "Firma electr&oacute;nica del titular del &oacute;rgano o empleado p&uacute;blico.";
 answers[1] = choices[1][0];
 units[1] = "4, 7, 8, 9";
 comments[1] = "Id Pregunta: 849. Ley 40/2015";
 preguntaids[1] = 849


//  Id pregunta: 530 Año de creación de pregunta: 2016
 questions[2]= "3)  Podr&aacute;n actuar en representaci&oacute;n de otras ante las Administraciones P&uacute;blicas:";
 choices[2]= new Array();
 choices[2][0] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[2][1] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[2][2] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 choices[2][3] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 answers[2] = choices[2][3];
 units[2] = "7";
 comments[2] = "Id Pregunta: 530. LEY 39/2015";
 preguntaids[2] = 530


//  Id pregunta: 337 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;De cu&aacute;ntos diputados se compone el Parlamento Europeo?:";
 choices[3]= new Array();
 choices[3][0] = "732";
 choices[3][1] = "626";
 choices[3][2] = "786";
 choices[3][3] = "360";
 answers[3] = choices[3][2];
 units[3] = "5";
 comments[3] = "Id Pregunta: 337. UNION EUROPEA";
 preguntaids[3] = 337


//  Id pregunta: 42 Año de creación de pregunta: 2016
 questions[4]= "5)  En relaci&oacute;n con BPEL, &iquest;cu&aacute;l de las siguientes afirmaciones es incorrecta?";
 choices[4]= new Array();
 choices[4][0] = "Es un lenguaje basado en XML para la definici&oacute;n y ejecuci&oacute;n de procesos de negocio utilizando Servicios Web.";
 choices[4][1] = "Es un lenguaje de orquestaci&oacute;n estandarizado por OASIS.";
 choices[4][2] = "BPEL proporciona manejadores (handlers) que permiten tratar situaciones excepcionales o inesperadas.";
 choices[4][3] = "En BPEL se utiliza WS-CDL en lugar de WSDL.";
 answers[4] = choices[4][3];
 units[4] = "86";
 comments[4] = "Id Pregunta: 42. AGE A1 2015";
 preguntaids[4] = 42


//  Id pregunta: 523 Año de creación de pregunta: 2016
 questions[5]= "6)  El sector p&uacute;blico institucional se integra por:";
 choices[5]= new Array();
 choices[5][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho privado vinculados o independientes de las Administraciones P&uacute;blicas";
 choices[5][1] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[5][2] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o independientes de las Administraciones P&uacute;blicas";
 choices[5][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[5] = choices[5][1];
 units[5] = "7";
 comments[5] = "Id Pregunta: 523. LEY 39/2015";
 preguntaids[5] = 523


//  Id pregunta: 864 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Qu&eacute; son las t&eacute;cnicas SEO? ";
 choices[6]= new Array();
 choices[6][0] = "SEO es el acr&oacute;nimo de search engine optimization.";
 choices[6][1] = "Las t&eacute;cnicas SEO Onsite son en s&iacute; las que llevaremos a cabo dentro de nuestro sitio, tales como optimizaciones de c&oacute;digo, optimizaci&oacute;n de procesos del servidor, llamadas a la base de datos y sobre todo optimizaci&oacute;n de contenido. ";
 choices[6][2] = "Las t&eacute;cnicas de SEO Offsite se refieren a todos los enlaces que no est&aacute;n en nuestro sitio web. Se trata del n&uacute;mero de veces que est&aacute; enlazado el sitio web, desde d&oacute;nde y con qu&eacute; t&eacute;rminos.";
 choices[6][3] = "Todas las anteriores son verdaderas.";
 answers[6] = choices[6][3];
 units[6] = "125";
 comments[6] = "Id Pregunta: 864. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[6] = 864


//  Id pregunta: 107 Año de creación de pregunta: 2016
 questions[7]= "8)  Son bases de datos NoSQL orientadas a objetos:";
 choices[7]= new Array();
 choices[7][0] = "GemStone";
 choices[7][1] = "Zope Object DB";
 choices[7][2] = "Las dos anteriores";
 choices[7][3] = "Solo B)";
 answers[7] = choices[7][2];
 units[7] = "73";
 comments[7] = "Id Pregunta: 107. ";
 preguntaids[7] = 107


//  Id pregunta: 64 Año de creación de pregunta: 2016
 questions[8]= "9)  De entre los siguientes sistemas operativos para dispositivos m&oacute;viles, indique cu&aacute;l est&aacute; afectado por la vulnerabilidad Stagefright:";
 choices[8]= new Array();
 choices[8][0] = "Windows Phone";
 choices[8][1] = "Blackberry";
 choices[8][2] = "iOS";
 choices[8][3] = "Android";
 answers[8] = choices[8][3];
 units[8] = "59";
 comments[8] = "Id Pregunta: 64. AGE A1 2015";
 preguntaids[8] = 64


//  Id pregunta: 419 Año de creación de pregunta: 2016
 questions[9]= "10)  Promover&aacute;n el conocimiento y la difusi&oacute;n del principio de igualdad entre mujeres y hombres, los medios de comunicaci&oacute;n de titularidad:";
 choices[9]= new Array();
 choices[9][0] = "P&uacute;blica.";
 choices[9][1] = "Privada.";
 choices[9][2] = "Ambas son correctas.";
 choices[9][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[9] = choices[9][0];
 units[9] = "14";
 comments[9] = "Id Pregunta: 419. POLITICAS DE IGUALDAD";
 preguntaids[9] = 419


//  Id pregunta: 322 Año de creación de pregunta: 2016
 questions[10]= "11)  El Tribunal de Justicia est&aacute; formado por:";
 choices[10]= new Array();
 choices[10][0] = "Un Juez de cada Estado miembro.";
 choices[10][1] = "Por dos Jueces de cada Estado miembro.";
 choices[10][2] = "Por veinte Jueces.";
 choices[10][3] = "Por ocho Jueces.";
 answers[10] = choices[10][0];
 units[10] = "5";
 comments[10] = "Id Pregunta: 322. UNION EUROPEA";
 preguntaids[10] = 322


//  Id pregunta: 505 Año de creación de pregunta: 2016
 questions[11]= "12)  Respecto a la Ley Org&aacute;nica 2/2012 se&ntilde;ale la respuesta falsa:";
 choices[11]= new Array();
 choices[11][0] = "La elaboraci&oacute;n, aprobaci&oacute;n y ejecuci&oacute;n de los Presupuestos y dem&aacute;s actuaciones que afecten a los gastos o ingresos de las Administraciones P&uacute;blicas y dem&aacute;s entidades que forman parte del sector p&uacute;blico se someter&aacute; al principio de estabilidad presupuestaria.";
 choices[11][1] = "Ninguna Administraci&oacute;n P&uacute;blica podr&aacute; incurrir en d&eacute;ficit estructural, definido como d&eacute;ficit ajustado del ciclo, neto de medidas excepcionales y temporales.";
 choices[11][2] = "Excepcionalmente, el Estado y las Comunidades Aut&oacute;nomas podr&aacute;n incurrir en d&eacute;ficit estructural en caso de cat&aacute;strofes naturales, recesi&oacute;n econ&oacute;mica grave o situaciones de emergencia extraordinaria que escapen al control de las Administraciones P&uacute;blicas y perjudiquen considerablemente su situaci&oacute;n financiera o su sostenibilidad econ&oacute;mica o social.";
 choices[11][3] = "Las Corporaciones Locales deber&aacute;n mantener una posici&oacute;n de equilibrio presupuestario.";
 answers[11] = choices[11][3];
 units[11] = "10";
 comments[11] = "Id Pregunta: 505. PRESUPUESTOS GENERALES";
 preguntaids[11] = 505


//  Id pregunta: 482 Año de creación de pregunta: 2016
 questions[12]= "13)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el &aacute;mbito del Ministerio de Defensa y de la Seguridad Social, el control se ejercer&aacute; a trav&eacute;s de:";
 choices[12]= new Array();
 choices[12][0] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[12][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[12][2] = "Las respuestas a) b) no son correctas.";
 choices[12][3] = "Las respuestas a) y b) son correctas.";
 answers[12] = choices[12][3];
 units[12] = "10";
 comments[12] = "Id Pregunta: 482. PRESUPUESTOS GENERALES";
 preguntaids[12] = 482


//  Id pregunta: 819 Año de creación de pregunta: 2016
 questions[13]= "14)  Los servicios territoriales de la Administraci&oacute;n General del Estado en la Comunidad Aut&oacute;noma se organizar&aacute;n atendiendo al mejor cumplimiento de sus fines, en:";
 choices[13]= new Array();
 choices[13][0] = "servicios integrados en las Delegaciones del Gobierno";
 choices[13][1] = "servicios no integrados en las Delegaciones del Gobierno";
 choices[13][2] = "servicios integrados y no integrados en las Delegaciones del Gobierno";
 choices[13][3] = "ninguna es correcta";
 answers[13] = choices[13][2];
 units[13] = "4, 7, 8, 9";
 comments[13] = "Id Pregunta: 819. Ley 40/2015";
 preguntaids[13] = 819


//  Id pregunta: 609 Año de creación de pregunta: 2016
 questions[14]= "15)  Seg&uacute;n Magerit v3, en el desarrollo de sistemas de informaci&oacute;n:";
 choices[14]= new Array();
 choices[14][0] = "La seguridad debe estar embebida en el sistema desde su primera concepci&oacute;n.";
 choices[14][1] = "La seguridad comenzar&aacute; a considerarse formalmente cuando finalice el proceso de implantaci&oacute;n de sistemas de informaci&oacute;n.";
 choices[14][2] = "La seguridad del sistema de informaci&oacute;n es m&aacute;s econ&oacute;mica implantarla una vez puesto en producci&oacute;n el sistema de informaci&oacute;n que tenerla en consideraci&oacute;n durante el desarrollo del sistema.";
 choices[14][3] = "La seguridad s&oacute;lo ralentiza el proceso de desarrollo de sistemas de informaci&oacute;n por lo que s&oacute;lo se debe considerar en aquellos sistemas que usen datos econ&oacute;micos.";
 answers[14] = choices[14][0];
 units[14] = "45";
 comments[14] = "Id Pregunta: 609. Junta de Extremadura A1 2015";
 preguntaids[14] = 609


//  Id pregunta: 742 Año de creación de pregunta: 2016
 questions[15]= "16)  Uno de los objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[15]= new Array();
 choices[15][0] = "Proveer de manera compartida servicios comunes";
 choices[15][1] = "El canal digital ha de ser el medio preferido por ciudadanos y empresas para relacionarse con la Administraci&oacute;n.";
 choices[15][2] = "Orientaci&oacute;n al usuario del servicio.";
 choices[15][3] = "Transparencia";
 answers[15] = choices[15][1];
 units[15] = "28";
 comments[15] = "Id Pregunta: 742. Estrategia TIC";
 preguntaids[15] = 742


//  Id pregunta: 178 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Qu&eacute; es lo que caracteriza un decreto-ley?";
 choices[16]= new Array();
 choices[16][0] = "No puede afectar al ordenamiento de las instituciones b&aacute;sicas del Estado.";
 choices[16][1] = "Es dictado por las Cortes Generales en casos de urgente necesidad.";
 choices[16][2] = "Es dictado por el Presidente del Gobierno en casos de extraordinaria y urgente necesidad.";
 choices[16][3] = "Es dictado por el Gobierno por encargo de las Cortes Generales.";
 answers[16] = choices[16][0];
 units[16] = "1";
 comments[16] = "Id Pregunta: 178. CONSTITUCION1978";
 preguntaids[16] = 178


//  Id pregunta: 846 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Qu&eacute; t&eacute;cnica de cooperaci&oacute;n se regula por primera vez con la Ley 40/2015?";
 choices[17]= new Array();
 choices[17][0] = "Conferencia de Presidentes.";
 choices[17][1] = "Convenios de colaboraci&oacute;n.";
 choices[17][2] = "Comisiones Bilaterales de Cooperaci&oacute;n.";
 choices[17][3] = "Conferencias Sectoriales.";
 answers[17] = choices[17][0];
 units[17] = "4, 7, 8, 9";
 comments[17] = "Id Pregunta: 846. Ley 40/2015";
 preguntaids[17] = 846


//  Id pregunta: 749 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Cu&aacute;les de los siguientes principios de inspiraci&oacute;n en la funci&oacute;n gerencial NO incorpora la Ley 40/2015?";
 choices[18]= new Array();
 choices[18][0] = "Buena fe, confianza leg&iacute;tima y lealtad institucional.";
 choices[18][1] = "Calidad de los servicios p&uacute;blicos";
 choices[18][2] = "Responsabilidad por la gesti&oacute;n p&uacute;blica.";
 choices[18][3] = "Servicio efectivo a los ciudadanos";
 answers[18] = choices[18][1];
 units[18] = "18";
 comments[18] = "Id Pregunta: 749. Direcci&oacute;n p&uacute;blica";
 preguntaids[18] = 749


//  Id pregunta: 156 Año de creación de pregunta: 2016
 questions[19]= "20)  Seg&uacute;n la ley 39/2015, toda notificaci&oacute;n deber&aacute; (se&ntilde;ala la respuesta incorrecta):";
 choices[19]= new Array();
 choices[19][0] = "contener el texto &iacute;ntegro de la resoluci&oacute;n";
 choices[19][1] = "expresar los recursos que procedan, &uacute;nicamente en v&iacute;a administrativa";
 choices[19][2] = "indicar si pone fin o no a la v&iacute;a administrativa";
 choices[19][3] = "indicar el &oacute;rgano ante el que hubieran de presentarse los recursos que procedan y el plazo para interponerlos";
 answers[19] = choices[19][1];
 units[19] = "7";
 comments[19] = "Id Pregunta: 156. Ley 39/2015, Art&iacute;culo 40";
 preguntaids[19] = 156


//  Id pregunta: 383 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre mujeres y hombres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[20]= new Array();
 choices[20][0] = "El Consejo Nacional de la Mujer";
 choices[20][1] = "El Consejo de la Mujer";
 choices[20][2] = "El Instituto de la Mujer";
 choices[20][3] = "El Consejo de Participaci&oacute;n de la Mujer";
 answers[20] = choices[20][3];
 units[20] = "14";
 comments[20] = "Id Pregunta: 383. POLITICAS DE IGUALDAD";
 preguntaids[20] = 383


//  Id pregunta: 375 Año de creación de pregunta: 2016
 questions[21]= "22)  Las relaciones entre el Derecho Comunitario y el Derecho nacional se caracterizan por:";
 choices[21]= new Array();
 choices[21][0] = "Complementariedad, por tratarse de un ordenamiento para los Estados miembros.";
 choices[21][1] = "Primac&iacute;a del Derecho Comunitario, puesto que se impone a los Estados miembros.";
 choices[21][2] = "Autonom&iacute;a del Derecho Comunitario frente al nacional.";
 choices[21][3] = "Todas las respuestas son correctas.";
 answers[21] = choices[21][3];
 units[21] = "5";
 comments[21] = "Id Pregunta: 375. UNION EUROPEA";
 preguntaids[21] = 375


//  Id pregunta: 333 Año de creación de pregunta: 2016
 questions[22]= "23)  Est&aacute;n legitimados para interponer el recurso de carencia del art. 175 TCE:";
 choices[22]= new Array();
 choices[22][0] = "Las instituciones comunitarias.";
 choices[22][1] = "Los Estados miembros y las instituciones comunitarias.";
 choices[22][2] = "Los Estados miembros.";
 choices[22][3] = "Los nacionales de los Estados miembros.";
 answers[22] = choices[22][1];
 units[22] = "5";
 comments[22] = "Id Pregunta: 333. UNION EUROPEA";
 preguntaids[22] = 333


//  Id pregunta: 309 Año de creación de pregunta: 2016
 questions[23]= "24)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a los Cuestores:";
 choices[23]= new Array();
 choices[23][0] = "Son miembros de la Mesa del Parlamento Europeo con voz pero sin voto.";
 choices[23][1] = "No son miembros de la Mesa del Parlamento Europeo.";
 choices[23][2] = "Son miembros de la Mesa del Parlamento Europeo con voz y voto.";
 choices[23][3] = "Los Cuestores forman parte de la Mesa del Parlamento Europeo en un n&uacute;mero igual a tres.";
 answers[23] = choices[23][0];
 units[23] = "5";
 comments[23] = "Id Pregunta: 309. UNION EUROPEA";
 preguntaids[23] = 309


//  Id pregunta: 862 Año de creación de pregunta: 2016
 questions[24]= "25)  Sobre las URL de los sitios web p&uacute;blicos, se&ntilde;ale cu&aacute;l NO es verdadera:";
 choices[24]= new Array();
 choices[24][0] = "Se recomienda utilizar la URL con dominio &lt;.gob.es&gt; en todos los niveles de la Administraci&oacute;n General del Estado, para todos los sitios web.";
 choices[24][1] = "Si se trata de organismos muy conocidos por los ciudadanos y siempre que no coincida con la denominaci&oacute;n del portal, se puede utilizar la denominaci&oacute;n actual con .gob.es";
 choices[24][2] = "Para una mayor normalizaci&oacute;n siempre se podr&iacute;a redireccionar autom&aacute;ticamente desde una URL a otra, para lo cual habr&aacute; que registrar los dos dominios: organismo.gob.es y sede.organismo.gob.es.";
 choices[24][3] = "Se recomienda utilizar sede.aaaa.gob.es, donde aaaa se sustituir&aacute; por el nombre del Ministerio al que pertenece el organismo.";
 answers[24] = choices[24][3];
 units[24] = "125";
 comments[24] = "Id Pregunta: 862. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[24] = 862


//  Id pregunta: 356 Año de creación de pregunta: 2016
 questions[25]= "26)  Se&ntilde;ale la respuesta correcta respecto a las directivas comunitarias:";
 choices[25]= new Array();
 choices[25][0] = "No se aplican directamente en los Estados.";
 choices[25][1] = "No son vinculantes.";
 choices[25][2] = "Habitualmente se dictan sobre materias que son competencias exclusivas de la Uni&oacute;n Europea.";
 choices[25][3] = "Tienen alcance general.";
 answers[25] = choices[25][0];
 units[25] = "5";
 comments[25] = "Id Pregunta: 356. UNION EUROPEA";
 preguntaids[25] = 356


//  Id pregunta: 387 Año de creación de pregunta: 2016
 questions[26]= "27)  El art&iacute;culo 37 de la Ley Org&aacute;nica 3/2007, para la igualdad efectiva de mujeres y hombres, indica que la Corporaci&oacute;n RTVE, en el ejercicio de su funci&oacute;n, perseguir&aacute; en su programaci&oacute;n:";
 choices[26]= new Array();
 choices[26][0] = "Mostrar anuncios para la igualdad de forma habitual.";
 choices[26][1] = "Ofrecer trabajo a mujeres v&iacute;ctimas de violencia de g&eacute;nero.";
 choices[26][2] = "Promover la incorporaci&oacute;n de mujeres a puestos visibles ante las c&aacute;maras.";
 choices[26][3] = "Reflejar adecuadamente la presencia de las mujeres en los diversos &aacute;mbitos de la vida social.";
 answers[26] = choices[26][3];
 units[26] = "14";
 comments[26] = "Id Pregunta: 387. POLITICAS DE IGUALDAD";
 preguntaids[26] = 387


//  Id pregunta: 327 Año de creación de pregunta: 2016
 questions[27]= "28)  La idea de una Europa unida tiene sus antecedentes en el siglo:";
 choices[27]= new Array();
 choices[27][0] = "X.";
 choices[27][1] = "XIX.";
 choices[27][2] = "XV.";
 choices[27][3] = "XIII.";
 answers[27] = choices[27][1];
 units[27] = "5";
 comments[27] = "Id Pregunta: 327. UNION EUROPEA";
 preguntaids[27] = 327


//  Id pregunta: 509 Año de creación de pregunta: 2016
 questions[28]= "29)  De acuerdo con el art&iacute;culo 32 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, en el supuesto de que la liquidaci&oacute;n presupuestaria del Estado se sit&uacute;e en super&aacute;vit, &eacute;ste debe destinarse a:";
 choices[28]= new Array();
 choices[28][0] = "Reducir el gasto p&uacute;blico.";
 choices[28][1] = "Reducir el d&eacute;ficit presupuestario.";
 choices[28][2] = "Reducir el endeudamiento neto.";
 choices[28][3] = "Al Fondo de Contingencia.";
 answers[28] = choices[28][2];
 units[28] = "10";
 comments[28] = "Id Pregunta: 509. PRESUPUESTOS GENERALES";
 preguntaids[28] = 509


//  Id pregunta: 863 Año de creación de pregunta: 2016
 questions[29]= "30)  Se recomienda que todas aquellas campa&ntilde;as de los ministerios que cuenten con su propia p&aacute;gina web, cuenten adem&aacute;s con un subdominio o URL secundaria en la estructura general de la p&aacute;gina web del Ministerio. Indique la opci&oacute;n correcta.";
 choices[29]= new Array();
 choices[29][0] = "Se podr&aacute; utilizar de forma opcional descripciones sem&aacute;nticas en el nombramiento y titulaci&oacute;n de los subdominios.";
 choices[29][1] = "RUN implementa una soluci&oacute;n sencilla de generaci&oacute;n de URL cortas  para una mejora en la eficiencia de la remisi&oacute;n de direcciones web mediante email, sms, twitter etc";
 choices[29][2] = "El nombre del subdominio o URL secundaria debe ser distinto al que se utilice como URL independiente.";
 choices[29][3] = "Con los subdominios o URL secundarias los robots de los buscadores requerir&aacute;n m&aacute;s tiempo en interpretar su dependencia contextual con el Ministerio u &Oacute;rgano de la Administraci&oacute;n.";
 answers[29] = choices[29][1];
 units[29] = "125";
 comments[29] = "Id Pregunta: 863. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[29] = 863


//  Id pregunta: 618 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;A qui&eacute;n est&aacute; destinado principalmente las Pautas de Accesibilidad al Contenido en la Web (WCAG)?";
 choices[30]= new Array();
 choices[30][0] = "A desarrolladores de navegadores web y reproductores multimedia.";
 choices[30][1] = "A desarrolladores de herramientas de autor, como herramientas de creaci&oacute;n de p&aacute;ginas web o de creaci&oacute;n de archivos multimedia.";
 choices[30][2] = "A desarrolladores de herramientas de evaluaci&oacute;n de la accesibilidad web.";
 choices[30][3] = "Todas las respuestas son correctas.";
 answers[30] = choices[30][2];
 units[30] = "42";
 comments[30] = "Id Pregunta: 618. Junta de Extremadura A1 2015";
 preguntaids[30] = 618


//  Id pregunta: 589 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Qui&eacute;n y cu&aacute;ndo presenta el informe de seguimiento sobre el grado de avance de la implementaci&oacute;n de la Estrategia TIC?";
 choices[31]= new Array();
 choices[31][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, anualmente";
 choices[31][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, bienalmente";
 choices[31][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, bienalmente";
 choices[31][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, sin periodicidad definida";
 answers[31] = choices[31][0];
 units[31] = "19";
 comments[31] = "Id Pregunta: 589. Estrategia TIC";
 preguntaids[31] = 589


//  Id pregunta: 522 Año de creación de pregunta: 2016
 questions[32]= "33)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se denomina:";
 choices[32]= new Array();
 choices[32][0] = "De los interesados en el procedimiento";
 choices[32][1] = "De la actividad de las Administraciones P&uacute;blicas";
 choices[32][2] = "Disposiciones generales";
 choices[32][3] = "De los actos administrativos";
 answers[32] = choices[32][2];
 units[32] = "7";
 comments[32] = "Id Pregunta: 522. LEY 39/2015";
 preguntaids[32] = 522


//  Id pregunta: 637 Año de creación de pregunta: 2016
 questions[33]= "34)  En el modelo relacional existen diversas clasificaciones de las relaciones. Indica qu&eacute; tipos de relaciones se consideran relaciones persistentes:";
 choices[33]= new Array();
 choices[33][0] = "Relaciones base y vistas.";
 choices[33][1] = "Relaciones base, vistas y el resultado de una consulta.";
 choices[33][2] = "Relaciones base, vistas y relaciones temporales.";
 choices[33][3] = "Relaciones base, vistas e instant&aacute;neas.";
 answers[33] = choices[33][3];
 units[33] = "60";
 comments[33] = "Id Pregunta: 637. Junta de Extremadura A1 2015";
 preguntaids[33] = 637


//  Id pregunta: 368 Año de creación de pregunta: 2016
 questions[34]= "35)  Los Reglamentos comunitarios equivalen a lo que en un ordenamiento interno es:";
 choices[34]= new Array();
 choices[34][0] = "Un Reglamento.";
 choices[34][1] = "Un Decreto.";
 choices[34][2] = "Una Ley.";
 choices[34][3] = "Un Real-Decreto.";
 answers[34] = choices[34][2];
 units[34] = "5";
 comments[34] = "Id Pregunta: 368. UNION EUROPEA";
 preguntaids[34] = 368


//  Id pregunta: 461 Año de creación de pregunta: 2016
 questions[35]= "36)  Seg&uacute;n el art&iacute;culo 41 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, las operaciones financieras que se distinguen son:";
 choices[35]= new Array();
 choices[35][0] = "Enajenaci&oacute;n de inversiones reales y transferencias de capital.";
 choices[35][1] = "Pasivos financieros y transferencias de capital.";
 choices[35][2] = "Activos financieros y pasivos financieros.";
 choices[35][3] = "Activos financieros y enajenaci&oacute;n de inversiones reales.";
 answers[35] = choices[35][2];
 units[35] = "10";
 comments[35] = "Id Pregunta: 461. PRESUPUESTOS GENERALES";
 preguntaids[35] = 461


//  Id pregunta: 665 Año de creación de pregunta: 2016
 questions[36]= "37)  Seg&uacute;n la Ley 39/2015, la iniciaci&oacute;n de un procedimiento administrativo puede realizarse:";
 choices[36]= new Array();
 choices[36][0] = "De oficio.";
 choices[36][1] = "A solicitud del interesado.";
 choices[36][2] = "De oficio o a solicitud del interesado.";
 choices[36][3] = "Por la Administraci&oacute;n P&uacute;blica responsable.";
 answers[36] = choices[36][2];
 units[36] = "7";
 comments[36] = "Id Pregunta: 665. Art&iacute;culo 54 de la Ley 39/2015";
 preguntaids[36] = 665


//  Id pregunta: 467 Año de creación de pregunta: 2016
 questions[37]= "38)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales deber&aacute; de contener:";
 choices[37]= new Array();
 choices[37][0] = "Las respuestas a) y b) son correctas.";
 choices[37][1] = "Las respuestas a) y b) no son correctas.";
 choices[37][2] = "Contenido coherente con los planes sectoriales.";
 choices[37][3] = "Programas de actuaci&oacute;n de existentes en el &aacute;mbito de cada departamento.";
 answers[37] = choices[37][0];
 units[37] = "10";
 comments[37] = "Id Pregunta: 467. PRESUPUESTOS GENERALES";
 preguntaids[37] = 467


//  Id pregunta: 590 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Cu&aacute;ntos servicios se declararon compartidos en la primera declaraci&oacute;n?";
 choices[38]= new Array();
 choices[38][0] = "14";
 choices[38][1] = "11";
 choices[38][2] = "12";
 choices[38][3] = "15";
 answers[38] = choices[38][0];
 units[38] = "19";
 comments[38] = "Id Pregunta: 590. Estrategia TIC";
 preguntaids[38] = 590


//  Id pregunta: 316 Año de creación de pregunta: 2016
 questions[39]= "40)  El Consejo de la Uni&oacute;n Europea de reunir&aacute; por:";
 choices[39]= new Array();
 choices[39][0] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de dos de sus miembros o de la Comisi&oacute;n.";
 choices[39][1] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n.";
 choices[39][2] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de tres de sus miembros o de la Comisi&oacute;n.";
 choices[39][3] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n o el Parlamento.";
 answers[39] = choices[39][1];
 units[39] = "5";
 comments[39] = "Id Pregunta: 316. UNION EUROPEA";
 preguntaids[39] = 316


//  Id pregunta: 604 Año de creación de pregunta: 2016
 questions[40]= "41)  Como todo criptosistema de clave p&uacute;blica, el protocolo del criptosistema RSA:";
 choices[40]= new Array();
 choices[40][0] = "Tiene dos partes: Cifrado de Mensajes, Descifrado de Mensajes.";
 choices[40][1] = "Se basa en la dificultad que supone resolver el &lt;Problema de la Factorizaci&oacute;n Externa&gt;.";
 choices[40][2] = "Tiene tres partes: Generaci&oacute;n de claves, Cifrado de mensajes, Descifrado de mensajes.";
 choices[40][3] = "Se basa en la dificultad que supone resolver el &lt;Problema de Socrates- Arquimedes&gt;.";
 answers[40] = choices[40][2];
 units[40] = "76";
 comments[40] = "Id Pregunta: 604. Junta de Extremadura A1 2015";
 preguntaids[40] = 604


//  Id pregunta: 654 Año de creación de pregunta: 2016
 questions[41]= "42)  Dentro del proceso de MapReduce &iquest;Que es el shuffle?";
 choices[41]= new Array();
 choices[41][0] = "Es un proceso de adaptaci&oacute;n de los datos antes de entrar en la etapa de Map";
 choices[41][1] = "Es un aplicativo dentro del ecosistema Hadoop que sirve para distribuir datos en el HDFS";
 choices[41][2] = "Es el proceso por el que los datos llegan de los mappers a los reducers";
 choices[41][3] = "Es un algoritmo de mineria de datos usado en Big Data";
 answers[41] = choices[41][2];
 units[41] = "73";
 comments[41] = "Id Pregunta: 654. ";
 preguntaids[41] = 654


//  Id pregunta: 466 Año de creación de pregunta: 2016
 questions[42]= "43)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, &iquest;existe la posibilidad de comprometer gastos para ejercicios futuros?";
 choices[42]= new Array();
 choices[42][0] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio futuro y 50% para los dem&aacute;s.";
 choices[42][1] = "No, los cr&eacute;ditos presupuestarios se agotan con el fin del ejercicio presupuestario.";
 choices[42][2] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio posterior; 60% para el segundo y 50% para tercero y cuarto.";
 choices[42][3] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 60% para el primer ejercicio futuro; 50% para el segundo y tercero y 40% para el cuarto.";
 answers[42] = choices[42][2];
 units[42] = "10";
 comments[42] = "Id Pregunta: 466. PRESUPUESTOS GENERALES";
 preguntaids[42] = 466


//  Id pregunta: 841 Año de creación de pregunta: 2016
 questions[43]= "44)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[43]= new Array();
 choices[43][0] = "El &oacute;rgano administrativo que se estime incompetente para la resoluci&oacute;n de un asunto remitir&aacute; directamente las actuaciones al &oacute;rgano superior, debiendo notificar esta circunstancia a los interesados.";
 choices[43][1] = "Los interesados que sean parte en el procedimiento podr&aacute;n dirigirse al &oacute;rgano que se encuentre conociendo de un asunto para que decline su competencia y remita las actuaciones al &oacute;rgano competente.";
 choices[43][2] = "Asimismo, podr&aacute;n dirigirse al &oacute;rgano que estimen competente para que requiera de inhibici&oacute;n al que est&eacute; conociendo del asunto.";
 choices[43][3] = "Los conflictos de atribuciones s&oacute;lo podr&aacute;n suscitarse entre &oacute;rganos de una misma Administraci&oacute;n no relacionados jer&aacute;rquicamente, y respecto a asuntos sobre los que no haya finalizado el procedimiento administrativo.";
 answers[43] = choices[43][0];
 units[43] = "4, 7, 8, 9";
 comments[43] = "Id Pregunta: 841. Ley 40/2015";
 preguntaids[43] = 841


//  Id pregunta: 275 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Cu&aacute;l NO es una funci&oacute;n de la oficina de transparencia y acceso a la informaci&oacute;n?";
 choices[44]= new Array();
 choices[44][0] = "Actuar como unidad de informaci&oacute;n del Ministerio de la Presidencia, en los t&eacute;rminos previstos en el art&iacute;culo 21 de la Ley 19/2013, de 9 de diciembre.";
 choices[44][1] = "La atenci&oacute;n a los ciudadanos sobre el modo de acceso a los servicios y procedimientos en materias propias del departamento.";
 choices[44][2] = "Actuar como observatorio de la transparencia, acceso a la informaci&oacute;n y buen Gobierno.";
 choices[44][3] = "La tramitaci&oacute;n de las quejas y sugerencias que pudieran derivarse del funcionamiento de los servicios de competencia del departamento.";
 answers[44] = choices[44][2];
 units[44] = "22";
 comments[44] = "Id Pregunta: 275. LEY DE TRANSPARENCIA";
 preguntaids[44] = 275


//  Id pregunta: 100 Año de creación de pregunta: 2016
 questions[45]= "46)  Entre los tipos de Bases de Datos NoSQL no se encuentran:";
 choices[45]= new Array();
 choices[45][0] = "Bases de datos orientadas a filas";
 choices[45][1] = "Bases de datos orientadas a documentos";
 choices[45][2] = "Bases de datos de clave/valor";
 choices[45][3] = "Bases de datos orientadas a objetos";
 answers[45] = choices[45][0];
 units[45] = "73";
 comments[45] = "Id Pregunta: 100. ";
 preguntaids[45] = 100


//  Id pregunta: 195 Año de creación de pregunta: 2016
 questions[46]= "47)  La potestad reglamentaria constitucionalmente corresponde:";
 choices[46]= new Array();
 choices[46][0] = "Al Gobierno.";
 choices[46][1] = "A las Cortes Generales.";
 choices[46][2] = "Al Poder Judicial.";
 choices[46][3] = "Al Congreso de los Diputados.";
 answers[46] = choices[46][0];
 units[46] = "1";
 comments[46] = "Id Pregunta: 195. CONSTITUCION1978";
 preguntaids[46] = 195


//  Id pregunta: 79 Año de creación de pregunta: 2016
 questions[47]= "48)  La Ley 25/2013, de 27 de diciembre, de impulso de la factura electr&oacute;nica y creaci&oacute;n del Registro Contable de Facturas en el Sector P&uacute;blico, prev&eacute; que anualmente se realice una auditor&iacute;a de sistemas para verificar que los correspondientes registros contables de facturas cumplen con las condiciones de funcionamiento previstas en la normativa aplicable. En el &aacute;mbito de la Administraci&oacute;n General del Estado dicha auditor&iacute;a se realizar&aacute; por:";
 choices[47]= new Array();
 choices[47][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[47][1] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado";
 choices[47][2] = "Las Inspecciones Generales de los Servicios";
 choices[47][3] = "La Agencia Estatal de la Administraci&oacute;n Tributaria";
 answers[47] = choices[47][1];
 units[47] = "75";
 comments[47] = "Id Pregunta: 79. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";
 preguntaids[47] = 79


//  Id pregunta: 836 Año de creación de pregunta: 2016
 questions[48]= "49)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[48]= new Array();
 choices[48][0] = "Los &oacute;rganos de las diferentes Administraciones P&uacute;blicas podr&aacute;n delegar el ejercicio de las competencias que tengan atribuidas en otros &oacute;rganos de la misma Administraci&oacute;n, aun cuando no sean jer&aacute;rquicamente dependientes, o en los Organismos p&uacute;blicos o Entidades de Derecho P&uacute;blico vinculados o dependientes de aqu&eacute;llas.";
 choices[48][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado, la delegaci&oacute;n de competencias deber&aacute; ser aprobada previamente por el &oacute;rgano ministerial de quien dependa el &oacute;rgano delegante y en el caso de los Organismos p&uacute;blicos o Entidades vinculados o dependientes, por el &oacute;rgano m&aacute;ximo de direcci&oacute;n, de acuerdo con sus normas de creaci&oacute;n. Cuando se trate de &oacute;rganos no relacionados jer&aacute;rquicamente ser&aacute; necesaria la aprobaci&oacute;n previa del superior com&uacute;n si ambos pertenecen al mismo Ministerio, o del &oacute;rgano superior de quien dependa el &oacute;rgano delegado, si el delegante y el delegado pertenecen a diferentes Ministerios.";
 choices[48][2] = "Asimismo, los &oacute;rganos de la Administraci&oacute;n General del Estado podr&aacute;n delegar el ejercicio de sus competencias propias en sus Organismos p&uacute;blicos y Entidades vinculados o dependientes, cuando resulte conveniente para alcanzar los fines que tengan asignados y mejorar la eficacia de su gesti&oacute;n. La delegaci&oacute;n deber&aacute; ser previamente aprobada por los &oacute;rganos de los que dependan el &oacute;rgano delegante y el &oacute;rgano delegado, o aceptada por este &uacute;ltimo cuando sea el &oacute;rgano m&aacute;ximo de direcci&oacute;n del Organismo p&uacute;blico o Entidad vinculado o dependiente.";
 choices[48][3] = "Todas son correctas.";
 answers[48] = choices[48][3];
 units[48] = "4, 7, 8, 9";
 comments[48] = "Id Pregunta: 836. Ley 40/2015";
 preguntaids[48] = 836


//  Id pregunta: 393 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[49]= new Array();
 choices[49][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[49][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[49][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[49][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[49] = choices[49][0];
 units[49] = "14";
 comments[49] = "Id Pregunta: 393. POLITICAS DE IGUALDAD";
 preguntaids[49] = 393


//  Id pregunta: 760 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes no es una iniciativa propuesta por la Estrategia Europa 2020?";
 choices[50]= new Array();
 choices[50][0] = "Agenda digital para Europa";
 choices[50][1] = "Agenda de nuevas cualificaciones y empleos";
 choices[50][2] = "Juventud en movimiento";
 choices[50][3] = "Agenda Web 2.0";
 answers[50] = choices[50][3];
 units[50] = "19";
 comments[50] = "Id Pregunta: 760. Europa 2020";
 preguntaids[50] = 760


//  Id pregunta: 170 Año de creación de pregunta: 2016
 questions[51]= "52)  En el contexto del mercado &uacute;nico digital, &iquest;qu&eacute; medidas se han tomado para el impulso de la confianza en el tratamiento de los datos personales en el contexto de los servicios digitales en el a&ntilde;o 2016?";
 choices[51]= new Array();
 choices[51][0] = "Se ha establecido una colaboraci&oacute;n p&uacute;blico-privada en materia de ciberseguridad.";
 choices[51][1] = "Se han introducido medidas para impulsar las destrezas digitales de la poblaci&oacute;n, que la Comisi&oacute;n incorporar&aacute; en futuras iniciativas sobre destrezas y formaci&oacute;n.";
 choices[51][2] = "Se ha aprobado el Reglamento (UE) 2016/769 relativo a la protecci&oacute;n de las personas f&iacute;sicas en lo que respecta al tratamiento de datos personales y a la libre circulaci&oacute;n de estos datos y por el que se deroga la Directiva 95/46/CE";
 choices[51][3] = "Se han introducido medidas para garantizar la libertad de los medios de comunicaci&oacute;n y la promoci&oacute;n de la diversidad cultural";
 answers[51] = choices[51][2];
 units[51] = "19";
 comments[51] = "Id Pregunta: 170. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Mayo/Noticia-2016-05-09-Nuevo-Reglamento-LOPD.html#.WCnlfmrhDIU";
 preguntaids[51] = 170


//  Id pregunta: 241 Año de creación de pregunta: 2016
 questions[52]= "53)  A trav&eacute;s de la moci&oacute;n de censura se exige la responsabilidad pol&iacute;tica del Gobierno:";
 choices[52]= new Array();
 choices[52][0] = "A propuesta de la d&eacute;cima parte de los Diputados y los Senadores representados en las c&aacute;maras, en la que incluir&aacute;n un candidato a Presidente del Gobierno.";
 choices[52][1] = "Mediante su adopci&oacute;n por mayor&iacute;a absoluta de las Cortes Generales.";
 choices[52][2] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a presidente del Gobierno. No podr&aacute; ser votada hasta que transcurran cinco d&iacute;as desde su presentaci&oacute;n y se adoptar&aacute; por mayor&iacute;a absoluta del Congreso de los Diputados.";
 choices[52][3] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a Presidente del Gobierno. Su adopci&oacute;n requiere mayor&iacute;a absoluta en una primera votaci&oacute;n y mayor&iacute;a simple en una segunda votaci&oacute;n.";
 answers[52] = choices[52][0];
 units[52] = "1";
 comments[52] = "Id Pregunta: 241. CONSTITUCION1978";
 preguntaids[52] = 241


//  Id pregunta: 559 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;Qu&eacute; ministerios han liderado la elaboraci&oacute;n de la Agenda Digital para Espa&ntilde;a?";
 choices[53]= new Array();
 choices[53][0] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica ";
 choices[53][1] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Econom&iacute;a, Industria y Competitividad";
 choices[53][2] = "El Ministerio de Econom&iacute;a, Industria y Competitividad y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[53][3] = "Ninguno de ellos, puesto que ha venido elaborada desde los organismos de la UE";
 answers[53] = choices[53][0];
 units[53] = "19";
 comments[53] = "Id Pregunta: 559. Agenda Digital";
 preguntaids[53] = 559


//  Id pregunta: 708 Año de creación de pregunta: 2016
 questions[54]= "55)  El Portal de Transparencia de la Administraci&oacute;n General del Estado depende del:";
 choices[54]= new Array();
 choices[54][0] = "Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[54][1] = "Ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[54][2] = "Ministerio de la Presidencia";
 choices[54][3] = "Ministerio de Fomento";
 answers[54] = choices[54][2];
 units[54] = "22";
 comments[54] = "Id Pregunta: 708. Portal de Transparencia";
 preguntaids[54] = 708


//  Id pregunta: 597 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Qui&eacute;n elabora y ejecuta los Planes de Acci&oacute;n Sectoriales?";
 choices[55]= new Array();
 choices[55][0] = "La CETIC";
 choices[55][1] = "Los Ministerios";
 choices[55][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[55][3] = "Ninguno de los anteriores";
 answers[55] = choices[55][1];
 units[55] = "19";
 comments[55] = "Id Pregunta: 597. Estrategia TIC";
 preguntaids[55] = 597


//  Id pregunta: 332 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Cu&aacute;ndo son de aplicaci&oacute;n los tratados internacionales?:";
 choices[56]= new Array();
 choices[56][0] = "Al d&iacute;a siguiente de su ratificaci&oacute;n por el Congreso de los Diputados.";
 choices[56][1] = "Al d&iacute;a siguiente de su firma por los Ministros plenipotenciarios.";
 choices[56][2] = "El mismo d&iacute;a de la firma por los Ministros plenipotenciarios.";
 choices[56][3] = "No ser&aacute;n de aplicaci&oacute;n directa hasta que formen parte del ordenamiento mediante su publicaci&oacute;n en el BOE.";
 answers[56] = choices[56][3];
 units[56] = "5";
 comments[56] = "Id Pregunta: 332. UNION EUROPEA";
 preguntaids[56] = 332


//  Id pregunta: 213 Año de creación de pregunta: 2016
 questions[57]= "58)  Seg&uacute;n el Art&iacute;culo 59 de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; v&aacute;lida la Regencia nombrada por las Cortes Generales que se componga del siguiente n&uacute;mero de personas:";
 choices[57]= new Array();
 choices[57][0] = "Cinco.";
 choices[57][1] = "Dos.";
 choices[57][2] = "Cuatro.";
 choices[57][3] = "Siete.";
 answers[57] = choices[57][0];
 units[57] = "1";
 comments[57] = "Id Pregunta: 213. CONSTITUCION1978";
 preguntaids[57] = 213


//  Id pregunta: 206 Año de creación de pregunta: 2016
 questions[58]= "59)  La alteraci&oacute;n de los l&iacute;mites de una provincia debe ser aprobada por:";
 choices[58]= new Array();
 choices[58][0] = "El Gobierno.";
 choices[58][1] = "La Asamblea de la Comunidad Aut&oacute;noma a la que pertenezca la provincia.";
 choices[58][2] = "Las Cortes Generales, mediante ley org&aacute;nica.";
 choices[58][3] = "Una Comisi&oacute;n formada por los senadores designados en esa provincia.";
 answers[58] = choices[58][2];
 units[58] = "1";
 comments[58] = "Id Pregunta: 206. CONSTITUCION1978";
 preguntaids[58] = 206


//  Id pregunta: 492 Año de creación de pregunta: 2016
 questions[59]= "60)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la obligaci&oacute;n de pagar los intereses de la Deuda del Estado y la de devolver los capitales llamados a reembolso, contados respectivamente a partir del vencimiento de los intereses y del d&iacute;a del llamamiento a reembolso prescribir&aacute;:";
 choices[59]= new Array();
 choices[59][0] = "A los cinco a&ntilde;os.";
 choices[59][1] = "A los dos a&ntilde;os.";
 choices[59][2] = "A los tres a&ntilde;os.";
 choices[59][3] = "A los cuatro a&ntilde;os.";
 answers[59] = choices[59][0];
 units[59] = "10";
 comments[59] = "Id Pregunta: 492. PRESUPUESTOS GENERALES";
 preguntaids[59] = 492


//  Id pregunta: 704 Año de creación de pregunta: 2016
 questions[60]= "61)  En el modelo de integraci&oacute;n continua se recomienda:";
 choices[60]= new Array();
 choices[60][0] = "Mantener un repositorio de c&oacute;digo.";
 choices[60][1] = "Realizar una migraci&oacute;n manual y controlada a cada entorno de desarrollo.";
 choices[60][2] = "Realizar las construcciones de versiones agrupando m&uacute;ltiples commits para optimizar el tiempo de proceso.";
 choices[60][3] = "Realizar las pruebas en el entorno de producci&oacute;n para obtener resultados reales.";
 answers[60] = choices[60][1];
 units[60] = "92";
 comments[60] = "Id Pregunta: 704. INTEGRACION CONTINUA";
 preguntaids[60] = 704


//  Id pregunta: 538 Año de creación de pregunta: 2016
 questions[61]= "62)  En el registro electr&oacute;nico general de apoderamientos, deber&aacute;n inscribirse, al menos, los de car&aacute;cter general otorgados por quien ostente la condici&oacute;n de interesado en un procedimiento administrativo a favor de representante:";
 choices[61]= new Array();
 choices[61][0] = "apud acta";
 choices[61][1] = "presencialmente";
 choices[61][2] = "electr&oacute;nicamente";
 choices[61][3] = "todas son correctas";
 answers[61] = choices[61][3];
 units[61] = "7";
 comments[61] = "Id Pregunta: 538. LEY 39/2015";
 preguntaids[61] = 538


//  Id pregunta: 692 Año de creación de pregunta: 2016
 questions[62]= "63)  El Reglamento (UE) 910/2014 entra en vigor:";
 choices[62]= new Array();
 choices[62][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[62][1] = "A los 20 d&iacute;as de su publicaci&oacute;n en el Diario Oficial de la Uni&oacute;n Europea (DOUE)";
 choices[62][2] = "A partir del 1 de enero de 2015";
 choices[62][3] = "A partir del 1 de julio de 2016";
 answers[62] = choices[62][1];
 units[62] = "77";
 comments[62] = "Id Pregunta: 692. Art&iacute;culo 52 del Reglamento 910/2014";
 preguntaids[62] = 692


//  Id pregunta: 305 Año de creación de pregunta: 2016
 questions[63]= "64)  Indique en donde tiene su sede de la Comisi&oacute;n Europea:";
 choices[63]= new Array();
 choices[63][0] = "Estrasburgo.";
 choices[63][1] = "Bruselas.";
 choices[63][2] = "Luxemburgo.";
 choices[63][3] = "Par&iacute;s.";
 answers[63] = choices[63][1];
 units[63] = "5";
 comments[63] = "Id Pregunta: 305. UNION EUROPEA";
 preguntaids[63] = 305


//  Id pregunta: 439 Año de creación de pregunta: 2016
 questions[64]= "65)  Sobre el Sistema de Interconexi&oacute;n de Registros (SIR):";
 choices[64]= new Array();
 choices[64][0] = "Es la infraestructura b&aacute;sica que permite el intercambio de asientos electr&oacute;nicos de registro entre los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[64][1] = "Permite eliminar el tr&aacute;nsito de papel entre administraciones, aumentando la eficiencia y eliminando los costes de manipulaci&oacute;n y remisi&oacute;n del papel, gracias a la generaci&oacute;n de copias aut&eacute;nticas electr&oacute;nicas de la documentaci&oacute;n presentada en los asientos de registro.";
 choices[64][2] = "No es necesario que la aplicaci&oacute;n de registro est&eacute; certificada con la norma SICRES 3.0.";
 choices[64][3] = "La integraci&oacute;n en SIR se realiza mediante aplicaciones de registro comunes como GEISER y ORVE o bien, siempre que se justifique, mediante aplicaciones previamente certificadas por la Comisi&oacute;n de Estrategia TIC.";
 answers[64] = choices[64][1];
 units[64] = "43";
 comments[64] = "Id Pregunta: 439. SERVICIOS COMUNES";
 preguntaids[64] = 439


//  Id pregunta: 8 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes NO es una funci&oacute;n de la Secretar&iacute;a General de Administraci&oacute;n Digital?";
 choices[65]= new Array();
 choices[65][0] = "Establecer los mecanismos que aseguren un adecuado mantenimiento del censo de activos TIC.";
 choices[65][1] = "El estudio y la implementaci&oacute;n de modelos para incentivar la compartici&oacute;n y reutilizaci&oacute;n de las infraestructuras y aplicaciones sectoriales, y promover el desarrollo de aplicaciones bajo dicho modelo.";
 choices[65][2] = "La supervisi&oacute;n y coordinaci&oacute;n del registro de convenios del sector p&uacute;blico estatal, de acuerdo con la informaci&oacute;n que deber&aacute;n suministrar los diferentes departamentos ministeriales y dem&aacute;s organismos p&uacute;blicos suscriptores de los mismos.";
 choices[65][3] = "El desarrollo, impulso e implantaci&oacute;n de sistemas tecnol&oacute;gicos de apoyo para la gesti&oacute;n de recursos humanos, incluidos los sistemas del Registro Central de Personal.";
 answers[65] = choices[65][2];
 units[65] = "26";
 comments[65] = "Id Pregunta: 8. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";
 preguntaids[65] = 8


//  Id pregunta: 398 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Qu&eacute; art&iacute;culo de la Ley Org&aacute;nica 3/2007 para la igualdad efectiva de mujeres y hombres, regula las acciones positivas?";
 choices[66]= new Array();
 choices[66][0] = "Art. 13, L.O.3/2007.";
 choices[66][1] = "Art. 14, L.O.3/2007.";
 choices[66][2] = "Art. 11, L.O.3/2007.";
 choices[66][3] = "Ninguna es correcta.";
 answers[66] = choices[66][2];
 units[66] = "14";
 comments[66] = "Id Pregunta: 398. POLITICAS DE IGUALDAD";
 preguntaids[66] = 398


//  Id pregunta: 543 Año de creación de pregunta: 2016
 questions[67]= "68)  Se&ntilde;ala la correcta:";
 choices[67]= new Array();
 choices[67][0] = "la falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n impedir&aacute; que se tenga por realizado el acto de que se trate";
 choices[67][1] = "el documento electr&oacute;nico que acredite el resultado de la consulta al registro electr&oacute;nico de apoderamientos correspondiente tendr&aacute; la condici&oacute;n de acreditaci&oacute;n a estos efectos";
 choices[67][2] = "los registros electr&oacute;nicos generales y particulares de apoderamientos pertenecientes a todas y cada una de las Administraciones, ser&aacute;n preferiblemente interoperables entre s&iacute;";
 choices[67][3] = "el interesado no podr&aacute; comparecer por s&iacute; mismo en un procedimiento en el que haya designado representante";
 answers[67] = choices[67][1];
 units[67] = "7";
 comments[67] = "Id Pregunta: 543. LEY 39/2015";
 preguntaids[67] = 543


//  Id pregunta: 155 Año de creación de pregunta: 2016
 questions[68]= "69)  A efectos del c&oacute;mputo de plazo fijado en d&iacute;as h&aacute;biles, y en lo que se refiere al cumplimiento de plazos por los interesados, la presentaci&oacute;n de documentos en un registro electr&oacute;nico un d&iacute;a inh&aacute;bil:";
 choices[68]= new Array();
 choices[68][0] = "se entender&aacute; realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil.";
 choices[68][1] = "se entender&aacute;, en todo caso, realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior";
 choices[68][2] = "se entender&aacute; realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil";
 choices[68][3] = "se entender&aacute;, en todo caso, realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente";
 answers[68] = choices[68][2];
 units[68] = "7";
 comments[68] = "Id Pregunta: 155. Ley 39/2015, Art&iacute;culo 31";
 preguntaids[68] = 155


//  Id pregunta: 823 Año de creación de pregunta: 2016
 questions[69]= "70)  En las Comunidades Aut&oacute;nomas uniprovinciales en las que no exista Subdelegado la suplencia corresponder&aacute; a:";
 choices[69]= new Array();
 choices[69][0] = "el Secretario General";
 choices[69][1] = "el Subdirector General";
 choices[69][2] = "el Secretario de Estado";
 choices[69][3] = "ninguna es correcta";
 answers[69] = choices[69][0];
 units[69] = "4, 7, 8, 9";
 comments[69] = "Id Pregunta: 823. Ley 40/2015";
 preguntaids[69] = 823


//  Id pregunta: 677 Año de creación de pregunta: 2016
 questions[70]= "71)  En referencia al proyecto ANDES, para la comunicaci&oacute;n telem&aacute;tica de Nacimientos desde Centros Sanitarios a Registros Civiles, indique cual de las siguientes afirmaciones es falsa:";
 choices[70]= new Array();
 choices[70][0] = "Tiene sustento legal de acuerdo a la Ley 19/2015, de 13 de julio, de medidas de reforma administrativa en el &aacute;mbito de la Administraci&oacute;n de Justicia y del Registro Civil.";
 choices[70][1] = "Se inicia a partir de su propuesta en CORA (Comisi&oacute;n para la Reforma de las Administraciones P&uacute;blicas).";
 choices[70][2] = "Reutiliza el servicio horizontal ACCEDA en modo cloud, lo cual ha facilitado la pronta puesta en marcha de la soluci&oacute;n.";
 choices[70][3] = "La utilizaci&oacute;n de ANDES por parte de los hospitales es completamente transparente, sin necesidad de realizar pasos previos para su despliegue.";
 answers[70] = choices[70][3];
 units[70] = "47";
 comments[70] = "Id Pregunta: 677. Inscripci&oacute;n autom&aacute;tica nacimientos";
 preguntaids[70] = 677


//  Id pregunta: 148 Año de creación de pregunta: 2016
 questions[71]= "72)  La publicaci&oacute;n del &laquo;Bolet&iacute;n Oficial del Estado&raquo; en la sede electr&oacute;nica del Organismo competente:";
 choices[71]= new Array();
 choices[71][0] = "Tiene car&aacute;cter supletorio respecto a la versi&oacute;n en formato papel";
 choices[71][1] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, aunque no se podr&aacute; derivar de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[71][2] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[71][3] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se habr&aacute;n de determinar necesariamente por Ley, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 answers[71] = choices[71][2];
 units[71] = "7";
 comments[71] = "Id Pregunta: 148. Ley 39/2015, Art&iacute;culo 131";
 preguntaids[71] = 148


//  Id pregunta: 284 Año de creación de pregunta: 2016
 questions[72]= "73)  Se&ntilde;ale la respuesta falsa:";
 choices[72]= new Array();
 choices[72][0] = "El mercado interior europeo que tiene una repercusi&oacute;n positiva en el crecimiento de la econom&iacute;a y del empleo.";
 choices[72][1] = "En mayo de 2015 la Comisi&oacute;n Europea anunci&oacute; la Estrategia para el Mercado &Uacute;nico Digital, destinada a responder a los retos de la econom&iacute;a digital.";
 choices[72][2] = "La Comisi&oacute;n propone una nueva estrategia de comercio e inversi&oacute;n para la Uni&oacute;n Europea, con el t&iacute;tulo &laquo;Comercio para todos: Hacia una pol&iacute;tica de comercio e inversi&oacute;n m&aacute;s sostenible&raquo;.";
 choices[72][3] = "En septiembre de 2015 se ha publicado el plan de acci&oacute;n para la creaci&oacute;n de la Uni&oacute;n de los Mercados de Capitales.";
 answers[72] = choices[72][2];
 units[72] = "5";
 comments[72] = "Id Pregunta: 284. UNION EUROPEA";
 preguntaids[72] = 284


//  Id pregunta: 528 Año de creación de pregunta: 2016
 questions[73]= "74)  Los menores incapacitados, cuando la extensi&oacute;n de la incapacitaci&oacute;n afecte al ejercicio y defensa de los derechos o intereses de que se trate:";
 choices[73]= new Array();
 choices[73][0] = "tienen capacidad de obrar limitada";
 choices[73][1] = "pueden actuar sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[73][2] = "no tienen capacidad de obrar";
 choices[73][3] = "ninguna es correcta";
 answers[73] = choices[73][2];
 units[73] = "7";
 comments[73] = "Id Pregunta: 528. LEY 39/2015";
 preguntaids[73] = 528


//  Id pregunta: 16 Año de creación de pregunta: 2016
 questions[74]= "75)  De acuerdo con la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos de comunicaciones electr&oacute;nicas y de redes p&uacute;blicas de comunicaci&oacute;n:";
 choices[74]= new Array();
 choices[74][0] = "Deben conservarse los datos que revelen el contenido de la comunicaci&oacute;n en virtud de lo establecido en la citada Ley.";
 choices[74][1] = "La obligaci&oacute;n de conservaci&oacute;n de datos cesa a los tres a&ntilde;os desde la fecha en que se haya producido la comunicaci&oacute;n.";
 choices[74][2] = "Los datos conservados de conformidad con lo dispuesto en la citada Ley pueden ser cedidos para los fines que en la misma se determinan previa autorizaci&oacute;n administrativa.";
 choices[74][3] = "Son sujetos obligados los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones.";
 answers[74] = choices[74][3];
 units[74] = "19";
 comments[74] = "Id Pregunta: 16. AGE A1 2015";
 preguntaids[74] = 16


