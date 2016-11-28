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

//  Id pregunta: 250 Año de creación de pregunta: 2016
 questions[0]= "1)  La Constituci&oacute;n Espa&ntilde;ola propugna como valores superiores de su ordenamiento jur&iacute;dico:";
 choices[0]= new Array();
 choices[0][0] = "La Libertad, la Democracia, la Igualdad y la Justicia.";
 choices[0][1] = "La Libertad, la Justicia, la Seguridad y promover el bien de cuantos la integran.";
 choices[0][2] = "La Soberan&iacute;a, el Sufragio Universal, la Unidad de la Naci&oacute;n espa&ntilde;ola y el derecho a la autonom&iacute;a de las nacionalidades y regiones que la integran.";
 choices[0][3] = "La Justicia, el Pluralismo Pol&iacute;tico, la Igualdad, y la Libertad.";
 answers[0] = choices[0][2];
 units[0] = "1";
 comments[0] = "Id Pregunta: 250. CONSTITUCION1978";


//  Id pregunta: 691 Año de creación de pregunta: 2016
 questions[1]= "2)  El Reglamento (UE) 910/2014 deroga la Directiva 1999/93/CE con efectos a partir de:";
 choices[1]= new Array();
 choices[1][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[1][1] = "1 de enero de 2015";
 choices[1][2] = "1 de enero de 2016";
 choices[1][3] = "1 de julio de 2016";
 answers[1] = choices[1][3];
 units[1] = "77";
 comments[1] = "Id Pregunta: 691. Art&iacute;culo 50 del Reglamento 910/2014";


//  Id pregunta: 358 Año de creación de pregunta: 2016
 questions[2]= "3)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones no es correcta:";
 choices[2]= new Array();
 choices[2][0] = "a)La Uni&oacute;n Europea no es a&uacute;n una estructura acabada, sino m&aacute;s bien un sistema de gestaci&oacute;n cuya apariencia definitiva a&uacute;n no puede preverse.";
 choices[2][1] = "b) La Uni&oacute;n Europea no es un proceso de integraci&oacute;n sino una Organizaci&oacute;n Internacional sui generis.";
 choices[2][2] = "c) Todas las respuestas son correctas.";
 choices[2][3] = "d)La Uni&oacute;n Europea s&oacute;lo tiene en com&uacute;n con las organizaciones tradicionales de derecho internacional que tambi&eacute;n han sido creadas mediante un tratado internacional.";
 answers[2] = choices[2][1];
 units[2] = "5";
 comments[2] = "Id Pregunta: 358. UNION EUROPEA";


//  Id pregunta: 796 Año de creación de pregunta: 2016
 questions[3]= "4)  Los estatutos de los Organismos p&uacute;blicos determinar&aacute;n sus respectivos:";
 choices[3]= new Array();
 choices[3][0] = "&oacute;rganos superiores";
 choices[3][1] = "&oacute;rganos directivos";
 choices[3][2] = "&oacute;rganos superiores y directivos";
 choices[3][3] = "ninguna es correcta";
 answers[3] = choices[3][1];
 units[3] = "4, 7, 8, 9";
 comments[3] = "Id Pregunta: 796. Ley 40/2015";


//  Id pregunta: 269 Año de creación de pregunta: 2016
 questions[4]= "5)  El T&iacute;tulo Segundo de la Constituci&oacute;n Espa&ntilde;ola tiene:";
 choices[4]= new Array();
 choices[4][0] = "Diez art&iacute;culos.";
 choices[4][1] = "Nueve art&iacute;culos.";
 choices[4][2] = "Once art&iacute;culos.";
 choices[4][3] = "Ocho art&iacute;culos.";
 answers[4] = choices[4][0];
 units[4] = "1";
 comments[4] = "Id Pregunta: 269. CONSTITUCION1978";


//  Id pregunta: 387 Año de creación de pregunta: 2016
 questions[5]= "6)  El art&iacute;culo 37 de la Ley Org&aacute;nica 3/2007, para la igualdad efectiva de mujeres y hombres, indica que la Corporaci&oacute;n RTVE, en el ejercicio de su funci&oacute;n, perseguir&aacute; en su programaci&oacute;n:";
 choices[5]= new Array();
 choices[5][0] = "Mostrar anuncios para la igualdad de forma habitual.";
 choices[5][1] = "Ofrecer trabajo a mujeres v&iacute;ctimas de violencia de g&eacute;nero.";
 choices[5][2] = "Promover la incorporaci&oacute;n de mujeres a puestos visibles ante las c&aacute;maras.";
 choices[5][3] = "Reflejar adecuadamente la presencia de las mujeres en los diversos &aacute;mbitos de la vida social.";
 answers[5] = choices[5][3];
 units[5] = "14";
 comments[5] = "Id Pregunta: 387. POLITICAS DE IGUALDAD";


//  Id pregunta: 723 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;C&uacute;al es la principal ventaja de sprints m&aacute;s cortos en Scrum?";
 choices[6]= new Array();
 choices[6][0] = "Permite reaccionar al equipo mejor ante imprevistos";
 choices[6][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[6][2] = "Es m&aacute;s f&aacute;cil cumplir los objetivos marcados al final de cada sprint";
 choices[6][3] = "Ninguna de las anteriores";
 answers[6] = choices[6][1];
 units[6] = "34, 84";
 comments[6] = "Id Pregunta: 723. Metodologias &aacute;giles";


//  Id pregunta: 562 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Cu&aacute;l de los siguientes no es un obst&aacute;culo identificado por la Comisi&oacute;n para el desarrollo de la Agenda Digital europea?";
 choices[7]= new Array();
 choices[7][0] = "El incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes";
 choices[7][1] = "La falta de inversi&oacute;n en campa&ntilde;as de comunicaci&oacute;n en los pa&iacute;ses miembros";
 choices[7][2] = "Las carencias en la alfabetizaci&oacute;n y la capacitaci&oacute;n digitales";
 choices[7][3] = "La ausencia de inversi&oacute;n en las redes";
 answers[7] = choices[7][1];
 units[7] = "19";
 comments[7] = "Id Pregunta: 562. Agenda Digital";


//  Id pregunta: 828 Año de creación de pregunta: 2016
 questions[8]= "9)  La recusaci&oacute;n pueden promoverla...";
 choices[8]= new Array();
 choices[8][0] = "Cualquier &oacute;rgano";
 choices[8][1] = "El interesado";
 choices[8][2] = "El interesado y el superior jer&aacute;rquico del &oacute;rgano de que se trate";
 choices[8][3] = "El interesado, el superior jer&aacute;rquico del &oacute;rgano de que se trate y el propio &oacute;rgano";
 answers[8] = choices[8][0];
 units[8] = "4, 7, 8, 9";
 comments[8] = "Id Pregunta: 828. Ley 40/2015";


//  Id pregunta: 724 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Cu&aacute;l es la principal desventaja de sprints m&aacute;s largos?";
 choices[9]= new Array();
 choices[9][0] = "Permite reaccionar al equipo mejor ante imprevistos";
 choices[9][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[9][2] = "Se reduce el n&uacute;mero de reuniones de sprint";
 choices[9][3] = "Se puede desarrollar algo diferente a lo requerido y obtener el feedback del cliente m&aacute;s tarde.";
 answers[9] = choices[9][3];
 units[9] = "34, 84";
 comments[9] = "Id Pregunta: 724. Metodologias &aacute;giles";


//  Id pregunta: 542 Año de creación de pregunta: 2016
 questions[10]= "11)  Respecto a los poderes que se inscriban en los registros electr&oacute;nicos generales y particulares de apoderamientos pueden ser:";
 choices[10]= new Array();
 choices[10][0] = "un poder general para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa y ante cualquier Administraci&oacute;n";
 choices[10][1] = "un poder para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa ante una Administraci&oacute;n u Organismo concreto";
 choices[10][2] = "un poder para que el apoderado pueda actuar en nombre del poderdante &uacute;nicamente para la realizaci&oacute;n de determinados tr&aacute;mites especificados en el poder";
 choices[10][3] = "todas son correctas";
 answers[10] = choices[10][3];
 units[10] = "7";
 comments[10] = "Id Pregunta: 542. LEY 39/2015";


//  Id pregunta: 311 Año de creación de pregunta: 2016
 questions[11]= "12)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[11]= new Array();
 choices[11][0] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los tres quintos del n&uacute;mero de Estados miembros.";
 choices[11][1] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a las tres cuartas partes del n&uacute;mero de Estados miembros.";
 choices[11][2] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los dos tercios del n&uacute;mero de Estados miembros.";
 choices[11][3] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a un nacional por cada Estado miembro.";
 answers[11] = choices[11][2];
 units[11] = "5";
 comments[11] = "Id Pregunta: 311. UNION EUROPEA";


//  Id pregunta: 628 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Cu&aacute;l es el &oacute;rgano encargado de las funciones de instrucci&oacute;n de expedientes dentro de la Comisi&oacute;n Nacional de los Mercados y la Competencia en materia de comunicaciones electr&oacute;nicas?";
 choices[12]= new Array();
 choices[12][0] = "La Direcci&oacute;n de Telecomunicaciones y del Sector Audiovisual.";
 choices[12][1] = "La Direcci&oacute;n de la Competencia.";
 choices[12][2] = "La Direcci&oacute;n de la Energ&iacute;a.";
 choices[12][3] = "La Direcci&oacute;n de Transportes y del Sector Postal.";
 answers[12] = choices[12][0];
 units[12] = "121";
 comments[12] = "Id Pregunta: 628. Junta de Extremadura A1 2015";


//  Id pregunta: 429 Año de creación de pregunta: 2016
 questions[13]= "14)  Para la prevenci&oacute;n del acoso sexual y del acoso por raz&oacute;n de sexo, las Administraciones P&uacute;blicas negociar&aacute;n con la representaci&oacute;n legal de las trabajadoras y trabajadores, un protocolo de actuaci&oacute;n que comprender&aacute;:";
 choices[13]= new Array();
 choices[13][0] = "La identificaci&oacute;n de las personas responsables de atender a quienes formulen una queja o denuncia.";
 choices[13][1] = "El tratamiento p&uacute;blico de las denuncias de hechos que pudieran ser constitutivos de acoso sexual o de acoso por raz&oacute;n de sexo.";
 choices[13][2] = "Ambas son correctas.";
 choices[13][3] = "Ambas son incorrectas.";
 answers[13] = choices[13][0];
 units[13] = "14";
 comments[13] = "Id Pregunta: 429. POLITICAS DE IGUALDAD";


//  Id pregunta: 576 Año de creación de pregunta: 2016
 questions[14]= "15)  Son herramientas espec&iacute;ficas de control de versiones de software:";
 choices[14]= new Array();
 choices[14][0] = "Mercurial, Git y Apache Subversion.";
 choices[14][1] = "Gimp, Mercurial y Git.";
 choices[14][2] = "RedMine, Planner y OpenProj.";
 choices[14][3] = "Cassandra, Git y REDIS.";
 answers[14] = choices[14][0];
 units[14] = "92";
 comments[14] = "Id Pregunta: 576. Tema 92. TAI 2016.";


//  Id pregunta: 649 Año de creación de pregunta: 2016
 questions[15]= "16)  En Itil V3, entre los factores que hay que tener en cuenta en la evaluaci&oacute;n de herramientas de Gesti&oacute;n del Servicio se encuentran:";
 choices[15]= new Array();
 choices[15][0] = "Estructura, tratamiento, integraci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[15][1] = "structura, salvaguarda, integraci&oacute;n de datos, flexibilidad de implementaci&oacute;n, uso y comunicaci&oacute;n de datos.";
 choices[15][2] = "Estructura, tratamiento, inspecci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[15][3] = "Responsabilidad, tratamiento, inspecci&oacute;n de datos y soporte a la monitorizaci&oacute;n de los niveles de servicio.";
 answers[15] = choices[15][0];
 units[15] = "101";
 comments[15] = "Id Pregunta: 649. Junta de Extremadura A1 2015";


//  Id pregunta: 731 Año de creación de pregunta: 2016
 questions[16]= "17)  Indique cual de los siguientes no forma parte del vocabulario de scrum";
 choices[16]= new Array();
 choices[16][0] = "Burn-up chart";
 choices[16][1] = "Arquitectural Skype";
 choices[16][2] = "Burn-down chart";
 choices[16][3] = "Definition of done";
 answers[16] = choices[16][1];
 units[16] = "34, 84";
 comments[16] = "Id Pregunta: 731. Metodologias &aacute;giles";


//  Id pregunta: 642 Año de creación de pregunta: 2016
 questions[17]= "18)  Los sistemas de archivos gestionados por Windows 2008 Server son:";
 choices[17]= new Array();
 choices[17][0] = "Fat y Ntfs.";
 choices[17][1] = "Extfat y Fat.";
 choices[17][2] = "Fat y Nfst.";
 choices[17][3] = "ext2fs y Ntfs.";
 answers[17] = choices[17][0];
 units[17] = "58";
 comments[17] = "Id Pregunta: 642. Junta de Extremadura A1 2015";


//  Id pregunta: 660 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Qu&eacute; tecnolog&iacute;a de tratamiento de datos no guarda relaci&oacute;n con BigData?";
 choices[18]= new Array();
 choices[18][0] = "NoSQL";
 choices[18][1] = "Sistemas de baja latencia";
 choices[18][2] = "MapReduce";
 choices[18][3] = "Business Intelligence";
 answers[18] = choices[18][1];
 units[18] = "73";
 comments[18] = "Id Pregunta: 660. ";


//  Id pregunta: 134 Año de creación de pregunta: 2016
 questions[19]= "20)  La Ley 2/2015, de desindexaci&oacute;n de la econom&iacute;a espa&ntilde;ola, parte de un compromiso del Gobierno en el marco:";
 choices[19]= new Array();
 choices[19][0] = "Del Programa Nacional de Reformas 2015 y 2016.";
 choices[19][1] = "Del Plan de Transformaci&oacute;n Digital 2015-2020.";
 choices[19][2] = "Del Programa Nacional de Reformas 2013 y 2014.";
 choices[19][3] = "Del Pacto Fiscal Europeo de 2012.";
 answers[19] = choices[19][2];
 units[19] = "12";
 comments[19] = "Id Pregunta: 134. Leyes modelo econ&oacute;mico";


//  Id pregunta: 773 Año de creación de pregunta: 2016
 questions[20]= "21)  La actuaci&oacute;n de la Administraci&oacute;n P&uacute;blica respectiva se desarrolla para alcanzar los objetivos que establecen las leyes y el resto del ordenamiento jur&iacute;dico, bajo la direcci&oacute;n de (se&ntilde;ala la incorrecta):";
 choices[20]= new Array();
 choices[20][0] = "el Gobierno de la Naci&oacute;n";
 choices[20][1] = "los &oacute;rganos de gobierno de las Comunidades Aut&oacute;nomas";
 choices[20][2] = "los &oacute;rganos de gobierno de las Entidades Locales";
 choices[20][3] = "los &oacute;rganos de gobierno de las Universidades p&uacute;blicas";
 answers[20] = choices[20][3];
 units[20] = "4, 7, 8, 9";
 comments[20] = "Id Pregunta: 773. Ley 40/2015";


//  Id pregunta: 558 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Qu&eacute; es el geo-bloqueo, contra el que pretende ser soluci&oacute;n la estrategia para el Mercado &Uacute;nico Digital en Europa?";
 choices[21]= new Array();
 choices[21][0] = "Es la discriminaci&oacute;n en la b&uacute;squeda de un empleo seg&uacute;n el pa&iacute;s de origen del trabajador";
 choices[21][1] = "Es la imposibilidad de pasar la aduana para paquetes comprados en tiendas online de ciertos pa&iacute;ses";
 choices[21][2] = "Es la pr&aacute;ctica por la cual los vendedores online deniegan a los consumidores el acceso a su p&aacute;gina web en funci&oacute;n de su localizaci&oacute;n o le ofrecen precios distintos";
 choices[21][3] = "Es la pr&aacute;ctica comercial por la que varias tiendas online ofrecen el mismo producto a precios pre-acordados entre ellas, limitando la competencia";
 answers[21] = choices[21][2];
 units[21] = "17";
 comments[21] = "Id Pregunta: 558. Mercado &Uacute;nico Digital";


//  Id pregunta: 842 Año de creación de pregunta: 2016
 questions[22]= "23)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Indique la respuesta correcta.";
 choices[22]= new Array();
 choices[22][0] = "Para la v&aacute;lida constituci&oacute;n del &oacute;rgano, a efectos de la celebraci&oacute;n de sesiones, deliberaciones y toma de acuerdos, se requerir&aacute; la asistencia, presencial o a distancia, del Presidente y Secretario o en su caso, de quienes les suplan, y la de la mitad de sus miembros.";
 choices[22][1] = "Cuando se trate de los &oacute;rganos colegiados a que se refiere el art&iacute;culo 15.2, el Presidente podr&aacute; considerar v&aacute;lidamente constituido el &oacute;rgano, a efectos de celebraci&oacute;n de sesi&oacute;n, si asisten los representantes de las Administraciones P&uacute;blicas y de las organizaciones representativas de intereses sociales miembros del &oacute;rgano a los que se haya atribuido la condici&oacute;n de portavoces.";
 choices[22][2] = "Cuando estuvieran reunidos, de manera presencial o a distancia, el Secretario y todos los miembros del &oacute;rgano colegiado, o en su caso las personas que les suplan, &eacute;stos podr&aacute;n constituirse v&aacute;lidamente como &oacute;rgano colegiado para la celebraci&oacute;n de sesiones, deliberaciones y adopci&oacute;n de acuerdos sin necesidad de convocatoria previa cuando as&iacute; lo decida el Presidente.";
 choices[22][3] = "Todas son correctas.";
 answers[22] = choices[22][1];
 units[22] = "4, 7, 8, 9";
 comments[22] = "Id Pregunta: 842. Ley 40/2015";


//  Id pregunta: 378 Año de creación de pregunta: 2016
 questions[23]= "24)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[23]= new Array();
 choices[23][0] = "Quince miembros.";
 choices[23][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[23][2] = "Los miembros que determine el Consejo.";
 choices[23][3] = "Un Presidente y quince miembros.";
 answers[23] = choices[23][1];
 units[23] = "14";
 comments[23] = "Id Pregunta: 378. UNION EUROPEA";


//  Id pregunta: 706 Año de creación de pregunta: 2016
 questions[24]= "25)  Se&ntilde;ale la afirmaci&oacute;n verdadera con respecto a la entrada en vigor de la Ley 19/2013 de Transparencia, Acceso a la Informaci&oacute;n P&uacute;blica y Buen Gobierno:";
 choices[24]= new Array();
 choices[24][0] = "Todas las disposiciones entraron en vigor al d&iacute;a siguiente de su publicaci&oacute;n en el BOE";
 choices[24][1] = "La entrada en vigor de todas sus disposiciones fue al a&ntilde;o de su publicaci&oacute;n en el BOE";
 choices[24][2] = "Los &oacute;rganos de las Comunidades Aut&oacute;nomas y Entidades Locales dispusieron de un plazo m&aacute;ximo de dos a&ntilde;os tras publicaci&oacute;n en BOE para adaptarse a las obligaciones contenidas en esta Ley.";
 choices[24][3] = "Algunas disposiciones de la ley entraron en vigor a los 3 a&ntilde;os de su publicaci&oacute;n en el BOE";
 answers[24] = choices[24][2];
 units[24] = "22";
 comments[24] = "Id Pregunta: 706. Ley de transparencia";


//  Id pregunta: 634 Año de creación de pregunta: 2016
 questions[25]= "26)  El sistema operativo que se dise&ntilde;a pensando en los tipos de datos y recursos que va a manejar: ficheros, procesos, memoria, hardware, etc., y en las propiedades y servicios que &eacute;stos pueden prestar, se construye siguiendo un modelo:";
 choices[25]= new Array();
 choices[25][0] = "Monol&iacute;tico.";
 choices[25][1] = "Estratificado.";
 choices[25][2] = "Cliente/servidor.";
 choices[25][3] = "Orientado a objetos.";
 answers[25] = choices[25][3];
 units[25] = "56";
 comments[25] = "Id Pregunta: 634. Junta de Extremadura A1 2015";


//  Id pregunta: 321 Año de creación de pregunta: 2016
 questions[26]= "27)  Indique el n&uacute;mero de Diputados del Parlamento Europeo que actualmente le corresponden a Espa&ntilde;a:";
 choices[26]= new Array();
 choices[26][0] = "Cincuenta y cuatro.";
 choices[26][1] = "Cincuenta.";
 choices[26][2] = "Cincuenta y cinco.";
 choices[26][3] = "Cincuenta y dos.";
 answers[26] = choices[26][1];
 units[26] = "5";
 comments[26] = "Id Pregunta: 321. UNION EUROPEA";


//  Id pregunta: 410 Año de creación de pregunta: 2016
 questions[27]= "28)  La Administraci&oacute;n General del Estado, utilizar&aacute; entre otros instrumentos b&aacute;sicos para la consecuci&oacute;n del principio de igualdad:";
 choices[27]= new Array();
 choices[27][0] = "Un plan estrat&eacute;gico de igualdad de oportunidades.";
 choices[27][1] = "Un objetivo espec&iacute;fico de igualdad.";
 choices[27][2] = "Un programa de igualdad.";
 choices[27][3] = "Un estatuto de igualdad.";
 answers[27] = choices[27][0];
 units[27] = "14";
 comments[27] = "Id Pregunta: 410. POLITICAS DE IGUALDAD";


//  Id pregunta: 157 Año de creación de pregunta: 2016
 questions[28]= "29)  Seg&uacute;n la ley 39/2015, los actos administrativos ser&aacute;n objeto de publicaci&oacute;n cuando (se&ntilde;ala la incorrecta):";
 choices[28]= new Array();
 choices[28][0] = "la Administraci&oacute;n estime que la notificaci&oacute;n efectuada a un solo interesado es insuficiente para garantizar la notificaci&oacute;n a todos, no siendo necesaria la notificaci&oacute;n individualizada en este caso";
 choices[28][1] = "se trate de actos integrantes de un procedimiento selectivo o de concurrencia competitiva de cualquier tipo";
 choices[28][2] = "el acto tenga por destinatario a una pluralidad indeterminada de personas";
 choices[28][3] = "as&iacute; lo establezcan las normas reguladoras de cada procedimiento o lo aconsejen razones de inter&eacute;s p&uacute;blico apreciadas por el &oacute;rgano competente";
 answers[28] = choices[28][0];
 units[28] = "7";
 comments[28] = "Id Pregunta: 157. Ley 39/2015, Art&iacute;culo 45";


//  Id pregunta: 615 Año de creación de pregunta: 2016
 questions[29]= "30)  El Modelo de Referencia de Interconexi&oacute;n de Sistemas Abiertos (OSI) consta de siete niveles. Se&ntilde;ala cu&aacute;l de los principios que se aplicaron para llevar a cabo esta divisi&oacute;n es falso:";
 choices[29]= new Array();
 choices[29][0] = "No se deben crear demasiados niveles de manera que la tarea de describir e integrar &eacute;stos fuera m&aacute;s dif&iacute;cil de lo necesario.";
 choices[29][1] = "Aunque se requiera un nivel de abstracci&oacute;n diferente en el manejo de los datos, debe usarse un nivel ya existente.";
 choices[29][2] = "Cada nivel debe realizar unas funciones bien definidas.";
 choices[29][3] = "Crear para cada nivel interfases con el nivel superior e inferior &uacute;nicamente.";
 answers[29] = choices[29][1];
 units[29] = "48";
 comments[29] = "Id Pregunta: 615. Junta de Extremadura A1 2015";


//  Id pregunta: 114 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Qu&eacute; es la Garant&iacute;a Juvenil?";
 choices[30]= new Array();
 choices[30][0] = "Una iniciativa europea que pretende facilitar el acceso de los j&oacute;venes al mercado de trabajo ofreci&eacute;ndoles una oferta de empleo, de educaci&oacute;n o formaci&oacute;n tras haber finalizado sus estudios o quedar desempleados";
 choices[30][1] = "Un Plan que permite la concesi&oacute;n de subvenciones a j&oacute;venes para facilitar el alquiler de su vivienda habitual.";
 choices[30][2] = "Un Plan que concede cr&eacute;ditos en condiciones ventajosas a j&oacute;venes emprendedores";
 choices[30][3] = "Una inciativa europea que facilita a los j&oacute;venes el acceso a las nuevas tecnolog&iacute;as";
 answers[30] = choices[30][0];
 units[30] = "15";
 comments[30] = "Id Pregunta: 114. ";


//  Id pregunta: 636 Año de creación de pregunta: 2016
 questions[31]= "32)  En un modelo entidad/relaci&oacute;n, un tipo de interrelaci&oacute;n se caracteriza por:";
 choices[31]= new Array();
 choices[31][0] = "El nombre y el tipo de correspondencia.";
 choices[31][1] = "El nombre, el grado y el tipo de correspondencia.";
 choices[31][2] = "El nombre, el nivel y el tipo de correspondencia.";
 choices[31][3] = "El nombre y el grado.";
 answers[31] = choices[31][1];
 units[31] = "85";
 comments[31] = "Id Pregunta: 636. Junta de Extremadura A1 2015";


//  Id pregunta: 845 Año de creación de pregunta: 2016
 questions[32]= "33)  Respecto a la reutilizaci&oacute;n de sistemas y aplicaciones de propiedad de la Administraci&oacute;n:";
 choices[32]= new Array();
 choices[32][0] = "Las Administraciones pondr&aacute;n siempre a disposici&oacute;n de cualquiera de ellas que lo solicite las aplicaciones, desarrolladas por sus servicios o que hayan sido objeto de contrataci&oacute;n y de cuyos derechos de propiedad intelectual sean titulares.";
 choices[32][1] = "Las aplicaciones a las que se refiere el apartado anterior podr&aacute;n ser declaradas como de fuentes abiertas, cuando de ello se derive una mayor transparencia en el funcionamiento de la Administraci&oacute;n P&uacute;blica o se fomente con ello la incorporaci&oacute;n de los ciudadanos a la Sociedad de la informaci&oacute;n.";
 choices[32][2] = "Las Administraciones P&uacute;blicas, con car&aacute;cter posterior a la adquisici&oacute;n, desarrollo o al mantenimiento a lo largo de todo el ciclo de vida de una aplicaci&oacute;n, tanto si se realiza con medios propios o por la contrataci&oacute;n de los servicios correspondientes, deber&aacute;n consultar en el directorio general de aplicaciones.";
 choices[32][3] = "En el directorio general de aplicaciones constar&aacute;n las aplicaciones disponibles de la Administraci&oacute;n General del Estado.";
 answers[32] = choices[32][1];
 units[32] = "4, 7, 8, 9";
 comments[32] = "Id Pregunta: 845. Ley 40/2015";


//  Id pregunta: 430 Año de creación de pregunta: 2016
 questions[33]= "34)  En el acceso a bienes y servicios, ning&uacute;n contratante podr&aacute; indagar sobre la situaci&oacute;n de embarazo de una mujer demandante del mismo, salvo por razones de:";
 choices[33]= new Array();
 choices[33][0] = "Incompatibilidad del puesto con una baja maternal.";
 choices[33][1] = "Protecci&oacute;n de su salud.";
 choices[33][2] = "Ninguna es correcta.";
 choices[33][3] = "A y B son correctas.";
 answers[33] = choices[33][1];
 units[33] = "14";
 comments[33] = "Id Pregunta: 430. POLITICAS DE IGUALDAD";


//  Id pregunta: 67 Año de creación de pregunta: 2016
 questions[34]= "35)  En Internet, la entidad encargada de la coordinaci&oacute;n de los N&uacute;meros de Sistema Aut&oacute;nomo (Autonomous System Numbers - ASN) usados por varios protocolos de enrutamiento, es:";
 choices[34]= new Array();
 choices[34][0] = "IANA";
 choices[34][1] = "ISOC";
 choices[34][2] = "IETF";
 choices[34][3] = "IAB";
 answers[34] = choices[34][0];
 units[34] = "103";
 comments[34] = "Id Pregunta: 67. AGE A1 2015";


//  Id pregunta: 603 Año de creación de pregunta: 2016
 questions[35]= "36)  Los criptosistemas pueden clasificarse en:";
 choices[35]= new Array();
 choices[35][0] = "Concretos, Estables e Inestables.";
 choices[35][1] = "Sim&eacute;tricos, Paralelos y Referenciales.";
 choices[35][2] = "Asim&eacute;tricos, Referenciales y Concretos.";
 choices[35][3] = "Sim&eacute;tricos, Asim&eacute;tricos e H&iacute;bridos.";
 answers[35] = choices[35][3];
 units[35] = "76";
 comments[35] = "Id Pregunta: 603. Junta de Extremadura A1 2015";


//  Id pregunta: 647 Año de creación de pregunta: 2016
 questions[36]= "37)  Seg&uacute;n la ley de igualdad entre mujeres y hombres y contra la violencia de g&eacute;nero en Extremadura: &iquest;qu&eacute; &oacute;rgano tiene como fin esencial promover las condiciones para que la igualdad entre los sexos sea real y efectiva dentro del &aacute;mbito de competencias de la Junta de Extremadura?";
 choices[36]= new Array();
 choices[36][0] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sociales.";
 choices[36][1] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sanitarias.";
 choices[36][2] = "El Organismo P&uacute;blico de la Mujer.";
 choices[36][3] = "El Instituto de la Mujer de Extremadura.";
 answers[36] = choices[36][3];
 units[36] = "14";
 comments[36] = "Id Pregunta: 647. Junta de Extremadura A1 2015";


//  Id pregunta: 651 Año de creación de pregunta: 2016
 questions[37]= "38)  Los objetivos que persegu&iacute;a Codd con el modelo relacional, se pueden resumir en:";
 choices[37]= new Array();
 choices[37][0] = "Independencia f&iacute;sica, independencia l&oacute;gica, flexibilidad, uniformidad y sencillez.";
 choices[37][1] = "Independencia f&iacute;sica, independencia l&oacute;gica y uniformidad.";
 choices[37][2] = "Independencia f&iacute;sica, flexibilidad, uniformidad y sencillez.";
 choices[37][3] = "Independencia f&iacute;sica, independencia l&oacute;gica, independencia conceptual, flexibilidad, uniformidad y sencillez.";
 answers[37] = choices[37][0];
 units[37] = "60";
 comments[37] = "Id Pregunta: 651. Junta de Extremadura A1 2015";


//  Id pregunta: 42 Año de creación de pregunta: 2016
 questions[38]= "39)  En relaci&oacute;n con BPEL, &iquest;cu&aacute;l de las siguientes afirmaciones es incorrecta?";
 choices[38]= new Array();
 choices[38][0] = "Es un lenguaje basado en XML para la definici&oacute;n y ejecuci&oacute;n de procesos de negocio utilizando Servicios Web.";
 choices[38][1] = "Es un lenguaje de orquestaci&oacute;n estandarizado por OASIS.";
 choices[38][2] = "BPEL proporciona manejadores (handlers) que permiten tratar situaciones excepcionales o inesperadas.";
 choices[38][3] = "En BPEL se utiliza WS-CDL en lugar de WSDL.";
 answers[38] = choices[38][3];
 units[38] = "86";
 comments[38] = "Id Pregunta: 42. AGE A1 2015";


//  Id pregunta: 374 Año de creación de pregunta: 2016
 questions[39]= "40)  Las instituciones de la Uni&oacute;n Europea son:";
 choices[39]= new Array();
 choices[39][0] = "El Consejo, la Comisi&oacute;n, el Parlamento y el Tribunal de Justicia.";
 choices[39][1] = "El Consejo, el Parlamento y el Tribunal de Justicia.";
 choices[39][2] = "El Consejo, el Parlamento y la Comisi&oacute;n.";
 choices[39][3] = "El Consejo, la Comisi&oacute;n, el Parlamento Europeo, el Tribunal de Justicia y el Tribunal de Cuentas.";
 answers[39] = choices[39][3];
 units[39] = "5";
 comments[39] = "Id Pregunta: 374. UNION EUROPEA";


//  Id pregunta: 124 Año de creación de pregunta: 2016
 questions[40]= "41)  Se&ntilde;ale la VERDADERA con respecto a las las reclamaciones ante el Consejo de Transparencia y Buen Gobierno:";
 choices[40]= new Array();
 choices[40][0] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de tres meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[40][1] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de seis meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[40][2] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[40][3] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; estimada";
 answers[40] = choices[40][0];
 units[40] = "22";
 comments[40] = "Id Pregunta: 124. ";


//  Id pregunta: 192 Año de creación de pregunta: 2016
 questions[41]= "42)  Seg&uacute;n la Constituci&oacute;n, las poblaciones de Ceuta y Melilla estar&aacute;n representadas por:";
 choices[41]= new Array();
 choices[41][0] = "Un diputado y un senador, cada una de ellas";
 choices[41][1] = "Dos diputados y un senador, cada una de ellas.";
 choices[41][2] = "Un diputado y dos senadores, cada una de ellas";
 choices[41][3] = "dos diputados y dos senadores, cada una de ellas.";
 answers[41] = choices[41][2];
 units[41] = "1";
 comments[41] = "Id Pregunta: 192. CONSTITUCION1978";


//  Id pregunta: 824 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Cu&aacute;l de los siguientes no ser&iacute;a un motivo de abstenci&oacute;n conforme el art. 23 de la Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[42]= new Array();
 choices[42][0] = "Ser el personal respecto del que la abstenci&oacute;n se plantea sobrino del interesado en el procedimiento";
 choices[42][1] = "Ser el personal respecto del que la abstenci&oacute;n se plantea vecino del interesado en el procedimiento";
 choices[42][2] = "Ser el personal respecto del que la abstenci&oacute;n se plantea cu&ntilde;ado del interesado en el procedimiento";
 choices[42][3] = "Ser el personal respecto del que la abstenci&oacute;n se plantea nieto del interesado en el procedimiento";
 answers[42] = choices[42][2];
 units[42] = "4, 7, 8, 9";
 comments[42] = "Id Pregunta: 824. Ley 40/2015";


//  Id pregunta: 843 Año de creación de pregunta: 2016
 questions[43]= "44)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[43]= new Array();
 choices[43][0] = "De cada sesi&oacute;n que celebre el &oacute;rgano colegiado se levantar&aacute; acta por el Secretario, que especificar&aacute; necesariamente los asistentes, el orden del d&iacute;a de la reuni&oacute;n, las circunstancias del lugar y tiempo en que se ha celebrado, los puntos principales de las deliberaciones, as&iacute; como el contenido de los acuerdos adoptados.";
 choices[43][1] = "Podr&aacute;n grabarse las sesiones que celebre el &oacute;rgano colegiado. El fichero resultante de la grabaci&oacute;n, junto con la certificaci&oacute;n expedida por el Secretario de la autenticidad e integridad del mismo, y cuantos documentos en soporte electr&oacute;nico se utilizasen como documentos de la sesi&oacute;n, podr&aacute;n acompa&ntilde;ar al acta de las sesiones, sin necesidad de hacer constar en ella los puntos principales de las deliberaciones.";
 choices[43][2] = "El acta de cada sesi&oacute;n podr&aacute; aprobarse en la misma reuni&oacute;n o en una reuni&oacute;n posterior. El Secretario elaborar&aacute; el acta con el visto bueno del Presidente y lo remitir&aacute; a trav&eacute;s de medios electr&oacute;nicos, a los miembros del &oacute;rgano colegiado, quienes podr&aacute;n manifestar por los mismos medios su conformidad o reparos al texto, a efectos de su aprobaci&oacute;n, consider&aacute;ndose, en caso afirmativo, aprobada en la misma reuni&oacute;n.";
 choices[43][3] = "Cuando se hubiese optado por la grabaci&oacute;n de las sesiones celebradas o por la utilizaci&oacute;n de documentos en soporte electr&oacute;nico, deber&aacute;n conservarse de forma que se garantice la integridad y autenticidad de los ficheros electr&oacute;nicos correspondientes y el acceso a los mismos por parte de los miembros del &oacute;rgano colegiado.";
 answers[43] = choices[43][2];
 units[43] = "4, 7, 8, 9";
 comments[43] = "Id Pregunta: 843. Ley 40/2015";


//  Id pregunta: 360 Año de creación de pregunta: 2016
 questions[44]= "45)  El Parlamento Europeo est&aacute; compuesto actualmente por:";
 choices[44]= new Array();
 choices[44][0] = "786 Diputados como m&aacute;ximo.";
 choices[44][1] = "600 Diputados como m&aacute;ximo.";
 choices[44][2] = "650 Diputados como m&aacute;ximo.";
 choices[44][3] = "732 Diputados como m&aacute;ximo.";
 answers[44] = choices[44][0];
 units[44] = "5";
 comments[44] = "Id Pregunta: 360. UNION EUROPEA";


//  Id pregunta: 772 Año de creación de pregunta: 2016
 questions[45]= "46)  Las Administraciones P&uacute;blicas:";
 choices[45]= new Array();
 choices[45][0] = "se relacionar&aacute;n entre s&iacute; y con sus &oacute;rganos, organismos p&uacute;blicos y entidades vinculados o dependientes a trav&eacute;s de medios no electr&oacute;nicos, que aseguren la interoperabilidad y seguridad de los sistemas y soluciones adoptadas por cada una de ellas";
 choices[45][1] = "garantizar&aacute;n la protecci&oacute;n de los datos de car&aacute;cter personal";
 choices[45][2] = "facilitar&aacute;n preferentemente la prestaci&oacute;n disociada de servicios a los interesados";
 choices[45][3] = "todas son correctas";
 answers[45] = choices[45][1];
 units[45] = "4, 7, 8, 9";
 comments[45] = "Id Pregunta: 772. Ley 40/2015";


//  Id pregunta: 312 Año de creación de pregunta: 2016
 questions[46]= "47)  Los acuerdos de la Comisi&oacute;n Europea se adoptan:";
 choices[46]= new Array();
 choices[46][0] = "Por unanimidad.";
 choices[46][1] = "Por mayor&iacute;a cualificada.";
 choices[46][2] = "Por mayor&iacute;a de las dos terceras partes de sus miembros.";
 choices[46][3] = "Por mayor&iacute;a del n&uacute;mero de miembros.";
 answers[46] = choices[46][3];
 units[46] = "5";
 comments[46] = "Id Pregunta: 312. UNION EUROPEA";


//  Id pregunta: 58 Año de creación de pregunta: 2016
 questions[47]= "48)  Se&ntilde;ale cu&aacute;l de los siguientes apartados NO ha sido declarado como servicio compartido en la Administraci&oacute;n General del Estado:";
 choices[47]= new Array();
 choices[47][0] = "Servicio com&uacute;n de gesti&oacute;n econ&oacute;mico-presupuestaria";
 choices[47][1] = "Servicio com&uacute;n de georreferenciaci&oacute;n";
 choices[47][2] = "Servicio de seguridad gestionada";
 choices[47][3] = "Servicio de gesti&oacute;n de notificaciones";
 answers[47] = choices[47][1];
 units[47] = "26";
 comments[47] = "Id Pregunta: 58. AGE A1 2015";


//  Id pregunta: 203 Año de creación de pregunta: 2016
 questions[48]= "49)  Se&ntilde;ale la afirmaci&oacute;n correcta. La tramitaci&oacute;n de las proposiciones de ley se regular&aacute; por:";
 choices[48]= new Array();
 choices[48][0] = "Ley Org&aacute;nica.";
 choices[48][1] = "Lo dispuesto en la normativa comunitaria.";
 choices[48][2] = "Los Reglamentos de las C&aacute;maras.";
 choices[48][3] = "El Reglamento del Congreso de los Diputados, exclusivamente.";
 answers[48] = choices[48][2];
 units[48] = "1";
 comments[48] = "Id Pregunta: 203. CONSTITUCION1978";


//  Id pregunta: 721 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;C&uacute;al de los siguientes puntos NO  es uno de los principios de las metodolog&iacute;as lean?";
 choices[49]= new Array();
 choices[49][0] = "Flexibilidad para variar el servicio o producto";
 choices[49][1] = "Eliminar desperdicios";
 choices[49][2] = "Decidir lo m&aacute;s tarde posible";
 choices[49][3] = "Hacer entregas tan r&aacute;pido como sea posible";
 answers[49] = choices[49][0];
 units[49] = "34";
 comments[49] = "Id Pregunta: 721. Metodologias Lean";


//  Id pregunta: 56 Año de creación de pregunta: 2016
 questions[50]= "51)  En cuanto al Plan de Sistemas de Informaci&oacute;n:";
 choices[50]= new Array();
 choices[50][0] = "Sirve como punto de partida del Plan Estrat&eacute;gico de la Organizaci&oacute;n.";
 choices[50][1] = "No es abordado detalladamente dentro de la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3.";
 choices[50][2] = "Fija el plan de proyectos a desarrollar, detallando los m&aacute;s inmediatos.";
 choices[50][3] = "Es un documento r&iacute;gido que debe ser actualizado s&oacute;lo ante discontinuidades de los productos tecnol&oacute;gicos sobre los que se sustenta.";
 answers[50] = choices[50][2];
 units[50] = "83";
 comments[50] = "Id Pregunta: 56. AGE A1 2015";


//  Id pregunta: 598 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Qui&eacute;n supervisa la elaboraci&oacute;n y ejecutaci&oacute;n de los Planes de Acci&oacute;n Sectoriales?";
 choices[51]= new Array();
 choices[51][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[51][1] = "Las CMADs";
 choices[51][2] = "Ambas son correctas.";
 choices[51][3] = "Ninguna es correcta";
 answers[51] = choices[51][2];
 units[51] = "19";
 comments[51] = "Id Pregunta: 598. Estrategia TIC";


//  Id pregunta: 523 Año de creación de pregunta: 2016
 questions[52]= "53)  El sector p&uacute;blico institucional se integra por:";
 choices[52]= new Array();
 choices[52][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho privado vinculados o independientes de las Administraciones P&uacute;blicas";
 choices[52][1] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[52][2] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o independientes de las Administraciones P&uacute;blicas";
 choices[52][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[52] = choices[52][1];
 units[52] = "7";
 comments[52] = "Id Pregunta: 523. LEY 39/2015";


//  Id pregunta: 110 Año de creación de pregunta: 2016
 questions[53]= "54)  La Poblaci&oacute;n Activa incluye a:";
 choices[53]= new Array();
 choices[53][0] = "S&oacute;lo a aquellas personas que son empleados por cuenta ajena";
 choices[53][1] = "S&oacute;lo a aquellas personas que son empleadas por cuenta propia o ajena";
 choices[53][2] = "Aquellas personas que tienen empleo y a los desempleados que buscan un empleo de forma activa";
 choices[53][3] = "Todo aquel que desea trabajar";
 answers[53] = choices[53][2];
 units[53] = "15";
 comments[53] = "Id Pregunta: 110. ";


//  Id pregunta: 74 Año de creación de pregunta: 2016
 questions[54]= "55)  Se&ntilde;ale la opci&oacute;n incorrecta respecto a SMTP:";
 choices[54]= new Array();
 choices[54][0] = "SMTP es capaz de transportar correo a trav&eacute;s de m&uacute;ltiples redes: entre nodos conectados por TCP en Internet, entre nodos conectados en una Intranet TCP/IP aislados por un cortafuegos, o entre nodos en un entorno LAN o WAN que est&eacute;n usando un protocolo de nivel de transporte distinto a TCP.";
 choices[54][1] = "Usando SMTP, un proceso puede transferir correo a otro proceso en la misma red o a otra red mediante un proceso gateway accesible en las dos redes.";
 choices[54][2] = "En SMTP un mensaje de correo puede pasar por una serie de nodos gateway intermedios en su camino desde el emisor al receptor &uacute;ltimo, sirvi&eacute;ndose de mecanismos para decidir el siguiente salto como el sistema de resoluci&oacute;n de nombres de dominio de Internet.";
 choices[54][3] = "En SMTP la transferencia de mensaje ocurre siempre en una conexi&oacute;n &uacute;nica entre el emisor SMTP y el receptor final SMTP.";
 answers[54] = choices[54][3];
 units[54] = "106";
 comments[54] = "Id Pregunta: 74. AGE A1 2015";


//  Id pregunta: 84 Año de creación de pregunta: 2016
 questions[55]= "56)  En el marco europeo de interoperabilidad de sistemas de informaci&oacute;n, &iquest;qu&eacute; programa de la Uni&oacute;n Europea ha estado en vigor entre 2010 y 2015?";
 choices[55]= new Array();
 choices[55][0] = "Interchange of Data between Administrations (IDA)";
 choices[55][1] = "Interoperability Solutions for European Public Administrations (ISA)";
 choices[55][2] = "Interoperable Delivery of Pan-European eGovernment Services to Public Administrations, Businesses and Citizens (IDABC)";
 choices[55][3] = "Interoperability Electronic European Solution (IEES)";
 answers[55] = choices[55][1];
 units[55] = "43";
 comments[55] = "Id Pregunta: 84. AGE A1 2015";


//  Id pregunta: 813 Año de creación de pregunta: 2016
 questions[56]= "57)  Las Delegaciones del Gobierno tendr&aacute;n su sede en:";
 choices[56]= new Array();
 choices[56][0] = "la localidad elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[56][1] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[56][2] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[56][3] = "la localidad donde elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 answers[56] = choices[56][2];
 units[56] = "4, 7, 8, 9";
 comments[56] = "Id Pregunta: 813. Ley 40/2015";


//  Id pregunta: 764 Año de creación de pregunta: 2016
 questions[57]= "58)  La Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico, establece y regula (se&ntilde;ala la incorrecta):";
 choices[57]= new Array();
 choices[57][0] = "las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[57][1] = "los principios del sistema de responsabilidad de las Administraciones P&uacute;blicas y de la potestad sancionadora";
 choices[57][2] = "el procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas";
 choices[57][3] = "la organizaci&oacute;n y funcionamiento de la Administraci&oacute;n General del Estado y de su sector p&uacute;blico institucional para el desarrollo de sus actividades";
 answers[57] = choices[57][2];
 units[57] = "4, 7, 8, 9";
 comments[57] = "Id Pregunta: 764. Ley 40/2015";


//  Id pregunta: 811 Año de creación de pregunta: 2016
 questions[58]= "59)  Los Subdirectores generales:";
 choices[58]= new Array();
 choices[58][0] = "son los responsables inmediatos, bajo la supervisi&oacute;n del Secretario general o del titular del &oacute;rgano del que dependan, de la ejecuci&oacute;n de aquellos proyectos, objetivos o actividades que les sean asignados, as&iacute; como de la gesti&oacute;n ordinaria de los asuntos de la competencia de la Subdirecci&oacute;n General";
 choices[58][1] = "ser&aacute;n nombrados, respetando los principios de igualdad, m&eacute;rito y capacidad, y cesados por el Ministro, Secretario de Estado o Subsecretario del que dependan";
 choices[58][2] = "sus nombramientos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, o de otras Administraciones, cuando as&iacute; lo prevean las normas de aplicaci&oacute;n, pertenecientes al Subgrupo A2";
 choices[58][3] = "todas son correctas";
 answers[58] = choices[58][1];
 units[58] = "4, 7, 8, 9";
 comments[58] = "Id Pregunta: 811. Ley 40/2015";


//  Id pregunta: 486 Año de creación de pregunta: 2016
 questions[59]= "60)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, dirigir la contabilidad de las entidades que integran el sistema de la Seguridad Social y gestionar la contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una funci&oacute;n de:";
 choices[59]= new Array();
 choices[59][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[59][1] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[59][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[59][3] = "La Intervenci&oacute;n General de la Defensa.";
 answers[59] = choices[59][2];
 units[59] = "10";
 comments[59] = "Id Pregunta: 486. PRESUPUESTOS GENERALES";


//  Id pregunta: 99 Año de creación de pregunta: 2016
 questions[60]= "61)  En cuanto a la imputaci&oacute;n de costes de los servicios compartidos en la Administraci&oacute;n General del Estado, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[60]= new Array();
 choices[60][0] = "Seg&uacute;n establece el Real Decreto 806/2014 el coste, caso de ocasionarse, ser&aacute; asumido &iacute;ntegramente por la Direcci&oacute;n de Tecnolog&iacute;as de las Informaci&oacute;n y Comunicaciones.";
 choices[60][1] = "Se sufragar&aacute;n con cargo a los presupuestos de Presidencia del Gobierno dado el car&aacute;cter horizontal del servicio compartido.";
 choices[60][2] = "La declaraci&oacute;n de todo servicio compartido deber&aacute; indicar si existe compensaci&oacute;n econ&oacute;mica al proveedor.";
 choices[60][3] = "No existir&aacute;, dado que su gratuidad y libertad de acceso es consustancial a la idea de servicio compartido.";
 answers[60] = choices[60][2];
 units[60] = "26";
 comments[60] = "Id Pregunta: 99. AGE A1 2015: actualmente la Secretar&iacute;a General de Administraci&oacute;n Digital asume las funciones de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 208 Año de creación de pregunta: 2016
 questions[61]= "62)  La direcci&oacute;n de la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado corresponde a:";
 choices[61]= new Array();
 choices[61][0] = "El Rey.";
 choices[61][1] = "El Jefe del Estado.";
 choices[61][2] = "El Gobierno.";
 choices[61][3] = "El Presidente del Gobierno.";
 answers[61] = choices[61][2];
 units[61] = "1";
 comments[61] = "Id Pregunta: 208. CONSTITUCION1978";


//  Id pregunta: 118 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;C&oacute;mo se concretan anualmente los objetivos de la Estrategia Espa&ntilde;ola de Activaci&oacute;n para el Empleo?";
 choices[62]= new Array();
 choices[62][0] = "Mediante &Oacute;rdenes Ministeriales del Ministerio de Empleo y Seguridad Social";
 choices[62][1] = "Mediante Reales Decretos del Consejo de Ministros";
 choices[62][2] = "Mediante los Planes Anuales de Pol&iacute;tica de Empleo";
 choices[62][3] = "Mediante dictamen del Consejo General del Sistema Nacional de Empleo";
 answers[62] = choices[62][2];
 units[62] = "15";
 comments[62] = "Id Pregunta: 118. ";


//  Id pregunta: 790 Año de creación de pregunta: 2016
 questions[63]= "64)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado son &oacute;rganos directivos:";
 choices[63]= new Array();
 choices[63][0] = "los Delegados del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[63][1] = "los Subdelegados del Gobierno en las provincias";
 choices[63][2] = "los Subdelegados del Gobierno en las entidades locales";
 choices[63][3] = "a y b son correctas";
 answers[63] = choices[63][3];
 units[63] = "4, 7, 8, 9";
 comments[63] = "Id Pregunta: 790. Ley 40/2015";


//  Id pregunta: 492 Año de creación de pregunta: 2016
 questions[64]= "65)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la obligaci&oacute;n de pagar los intereses de la Deuda del Estado y la de devolver los capitales llamados a reembolso, contados respectivamente a partir del vencimiento de los intereses y del d&iacute;a del llamamiento a reembolso prescribir&aacute;:";
 choices[64]= new Array();
 choices[64][0] = "A los cinco a&ntilde;os.";
 choices[64][1] = "A los dos a&ntilde;os.";
 choices[64][2] = "A los tres a&ntilde;os.";
 choices[64][3] = "A los cuatro a&ntilde;os.";
 answers[64] = choices[64][0];
 units[64] = "10";
 comments[64] = "Id Pregunta: 492. PRESUPUESTOS GENERALES";


//  Id pregunta: 353 Año de creación de pregunta: 2016
 questions[65]= "66)  El buen funcionamiento de la Uni&oacute;n Europea recae, entre otras instituciones, en:";
 choices[65]= new Array();
 choices[65][0] = "El Parlamento Europeo.";
 choices[65][1] = "Todas las respuestas son correctas.";
 choices[65][2] = "La Comisi&oacute;n Europea.";
 choices[65][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[65] = choices[65][1];
 units[65] = "5";
 comments[65] = "Id Pregunta: 353. UNION EUROPEA";


//  Id pregunta: 145 Año de creación de pregunta: 2016
 questions[66]= "67)  Puede interponerse un recurso extraordinario de revisi&oacute;n:";
 choices[66]= new Array();
 choices[66][0] = "Ante actos firmes en la v&iacute;a administrativa cuando al dictarlos se hubiera incurrido en error de hecho, que resulte de los propios documentos incorporados al expediente";
 choices[66][1] = "Ante actos firmes en la v&iacute;a administrativa cuando en la resoluci&oacute;n hayan influido esencialmente documentos o testimonios declarados falsos por sentencia judicial firme, anterior o posterior a aquella resoluci&oacute;n";
 choices[66][2] = "Ante actos firmes en la v&iacute;a administrativa cuando la resoluci&oacute;n se hubiese dictado como consecuencia de prevaricaci&oacute;n, cohecho, violencia, maquinaci&oacute;n fraudulenta u otra conducta punible y se haya declarado as&iacute; en virtud de sentencia judicial firme";
 choices[66][3] = "Todas las anteriores son ciertas";
 answers[66] = choices[66][3];
 units[66] = "8";
 comments[66] = "Id Pregunta: 145. Ley 39/2015, Art&iacute;culo 125";


//  Id pregunta: 557 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Qui&eacute;nes son los beneficiarios de la estrategia para el Mercado &Uacute;nico Digital en la UE?";
 choices[67]= new Array();
 choices[67][0] = "Consumidores";
 choices[67][1] = "PYMES y Start-ups";
 choices[67][2] = "La Industria";
 choices[67][3] = "Todos los anteriores";
 answers[67] = choices[67][3];
 units[67] = "17";
 comments[67] = "Id Pregunta: 557. Mercado &Uacute;nico Digital";


//  Id pregunta: 367 Año de creación de pregunta: 2016
 questions[68]= "69)  Es una funci&oacute;n del Presidente del Parlamento Europeo:";
 choices[68]= new Array();
 choices[68][0] = "Presentar la moci&oacute;n de censura.";
 choices[68][1] = "Presidir las sesiones del Parlamento.";
 choices[68][2] = "Organizar la Secretar&iacute;a General.";
 choices[68][3] = "Preparar las actividades de las Comisiones.";
 answers[68] = choices[68][1];
 units[68] = "5";
 comments[68] = "Id Pregunta: 367. UNION EUROPEA";


//  Id pregunta: 829 Año de creación de pregunta: 2016
 questions[69]= "70)  La recusaci&oacute;n se plantea...";
 choices[69]= new Array();
 choices[69][0] = "Antes de iniciado el procedimiento";
 choices[69][1] = "Una vez iniciado el procedimiento";
 choices[69][2] = "Cuando el instructor dicta propuesta de resoluci&oacute;n";
 choices[69][3] = "En cualquier momento del procedimiento";
 answers[69] = choices[69][0];
 units[69] = "4, 7, 8, 9";
 comments[69] = "Id Pregunta: 829. Ley 40/2015";


//  Id pregunta: 218 Año de creación de pregunta: 2016
 questions[70]= "71)  Seg&uacute;n el T&iacute;tulo III &quot;De las Cortes Generales&quot; de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras podr&aacute;n:";
 choices[70]= new Array();
 choices[70][0] = "Recibir peticiones individuales y colectivas, siempre por escrito, quedando prohibida la presentaci&oacute;n directa por manifestaciones ciudadanas.";
 choices[70][1] = "Delegar en las Comisiones Legislativas Permanentes la aprobaci&oacute;n de proyectos o proposiciones de ley relativas a cuestiones internacionales.";
 choices[70][2] = "Reunirse en sesi&oacute;n extraordinaria a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 choices[70][3] = "Nombrar conjuntamente Comisiones de Investigaci&oacute;n sobre asuntos de inter&eacute;s p&uacute;blico. Sus conclusiones ser&aacute;n vinculantes para los Tribunales.";
 answers[70] = choices[70][0];
 units[70] = "1";
 comments[70] = "Id Pregunta: 218. CONSTITUCION1978";


//  Id pregunta: 431 Año de creación de pregunta: 2016
 questions[71]= "72)  En el supuesto de que una empresa haga publicidad enga&ntilde;osa de sus acciones de responsabilidad en materia de igualdad, podr&aacute;n ejercer la acci&oacute;n de cesaci&oacute;n cuando se considere:";
 choices[71]= new Array();
 choices[71][0] = "El Instituto de la Mujer.";
 choices[71][1] = "&Oacute;rganos equivalentes al anterior pertenecientes a las CCAA.";
 choices[71][2] = "Ambas son correctas.";
 choices[71][3] = "A y B son incorrectas.";
 answers[71] = choices[71][2];
 units[71] = "14";
 comments[71] = "Id Pregunta: 431. POLITICAS DE IGUALDAD";


//  Id pregunta: 259 Año de creación de pregunta: 2016
 questions[72]= "73)  La iniciativa legislativa corresponde:";
 choices[72]= new Array();
 choices[72][0] = "Al Congreso y al Senado, &uacute;nicamente.";
 choices[72][1] = "Al rey y al Gobierno.";
 choices[72][2] = "Al Congreso, al Senado y al Rey.";
 choices[72][3] = "Al Gobierno, al Congreso y al Senado.";
 answers[72] = choices[72][3];
 units[72] = "1";
 comments[72] = "Id Pregunta: 259. CONSTITUCION1978";


//  Id pregunta: 37 Año de creación de pregunta: 2016
 questions[73]= "74)  Seg&uacute;n el proyecto GNU, &iquest;cu&aacute;l de las siguientes NO puede ser considerada una libertad esencial del software libre?";
 choices[73]= new Array();
 choices[73][0] = "La libertad de ejecutar el programa como se desee, con cualquier prop&oacute;sito.";
 choices[73][1] = "La libertad de estudiar c&oacute;mo funciona el programa, y modificarlo para que tenga la funcionalidad deseada.";
 choices[73][2] = "La libertad de redistribuir copias para ayudar al pr&oacute;jimo.";
 choices[73][3] = "La libertad de distribuir a terceros versiones modificadas siempre que no tengan uso comercial.";
 answers[73] = choices[73][3];
 units[73] = "66";
 comments[73] = "Id Pregunta: 37. AGE A1 2015";


//  Id pregunta: 216 Año de creación de pregunta: 2016
 questions[74]= "75)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola de 1978, est&aacute;n legitimados para interponer el recurso de inconstitucionalidad:";
 choices[74]= new Array();
 choices[74][0] = "El Presidente del Gobierno.";
 choices[74][1] = "El Consejo de Ministros.";
 choices[74][2] = "40 Diputados.";
 choices[74][3] = "El Ministerio Fiscal.";
 answers[74] = choices[74][0];
 units[74] = "1";
 comments[74] = "Id Pregunta: 216. CONSTITUCION1978";


