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

//  Id pregunta: 648 Año de creación de pregunta: 2016
 questions[0]= "1)  En Itil v3 se diferencia entre la Gesti&oacute;n de la Cartera de Servicios y la Gesti&oacute;n del Cat&aacute;logo de Servicios ya que:";
 choices[0]= new Array();
 choices[0][0] = "La Cartera de Servicios contiene informaci&oacute;n sobre cada servicio y su estado.";
 choices[0][1] = "La Cartera de Servicios es un subconjunto del Cat&aacute;logo de Servicios.";
 choices[0][2] = "La Cartera de Servicios divide los servicios en componentes y contiene pol&iacute;ticas, directrices y responsabilidades , as&iacute; como precios, acuerdos de nivel de servicio y condiciones de entrega.";
 choices[0][3] = "Todas las respuestas son correctas.";
 answers[0] = choices[0][0];
 units[0] = "101";
 comments[0] = "Id Pregunta: 648. Junta de Extremadura A1 2015";
 preguntaids[0] = 648


//  Id pregunta: 612 Año de creación de pregunta: 2016
 questions[1]= "2)  En el lenguaje de manipulaci&oacute;n de datos, &iquest;cu&aacute;l de las siguientes cl&aacute;usulas va asociada a la cl&aacute;usula HAVING?";
 choices[1]= new Array();
 choices[1][0] = "GROUP BY.";
 choices[1][1] = "COUNT.";
 choices[1][2] = "WHERE.";
 choices[1][3] = "DISTINCT.";
 answers[1] = choices[1][0];
 units[1] = "60";
 comments[1] = "Id Pregunta: 612. Junta de Extremadura A1 2015";
 preguntaids[1] = 612


//  Id pregunta: 176 Año de creación de pregunta: 2016
 questions[2]= "3)  Seg&uacute;n el Art&iacute;culo 115 de la Constituci&oacute;n Espa&ntilde;ola, el Presidente del Gobierno, previa deliberaci&oacute;n del Consejo de Ministros, y bajo su responsabilidad, podr&aacute; proponer la disoluci&oacute;n de:";
 choices[2]= new Array();
 choices[2][0] = "El Congreso, el senado o las Cortes Generales.";
 choices[2][1] = "Solamente el Congreso.";
 choices[2][2] = "El Congreso, pero s&oacute;lo mediante la tramitaci&oacute;n de una moci&oacute;n de censura.";
 choices[2][3] = "El Congreso y el Senado, mediante Refer&eacute;ndum.";
 answers[2] = choices[2][0];
 units[2] = "1";
 comments[2] = "Id Pregunta: 176. CONSTITUCION1978";
 preguntaids[2] = 176


//  Id pregunta: 395 Año de creación de pregunta: 2016
 questions[3]= "4)  Una persona que en atenci&oacute;n a su sexo es tratada de manera menos favorable que otra en situaci&oacute;n comparable, est&aacute; sufriendo:";
 choices[3]= new Array();
 choices[3][0] = "Discriminaci&oacute;n indirecta.";
 choices[3][1] = "Discriminaci&oacute;n directa.";
 choices[3][2] = "Discriminaci&oacute;n por maternidad.";
 choices[3][3] = "Discriminaci&oacute;n abusiva.";
 answers[3] = choices[3][1];
 units[3] = "14";
 comments[3] = "Id Pregunta: 395. POLITICAS DE IGUALDAD";
 preguntaids[3] = 395


//  Id pregunta: 403 Año de creación de pregunta: 2016
 questions[4]= "5)  El plan estrat&eacute;gico de Igualdad de Oportunidades incluir&aacute;:";
 choices[4]= new Array();
 choices[4][0] = "Medidas de igualdad.";
 choices[4][1] = "Objetivos de igualdad.";
 choices[4][2] = "Ambas son correctas.";
 choices[4][3] = "A y B son incorrectas.";
 answers[4] = choices[4][2];
 units[4] = "14";
 comments[4] = "Id Pregunta: 403. POLITICAS DE IGUALDAD";
 preguntaids[4] = 403


//  Id pregunta: 524 Año de creación de pregunta: 2016
 questions[5]= "6)  A los efectos previstos en esta Ley, tendr&aacute;n capacidad de obrar ante las Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[5]= new Array();
 choices[5][0] = "las personas f&iacute;sicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 choices[5][1] = "los menores de edad para el ejercicio y defensa de aquellos de sus derechos e intereses cuya actuaci&oacute;n no est&eacute; permitida por el ordenamiento jur&iacute;dico sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[5][2] = "cuando la Ley as&iacute; lo declare expresamente, los grupos de afectados, las uniones y entidades sin personalidad jur&iacute;dica y los patrimonios independientes o aut&oacute;nomos";
 choices[5][3] = "las personas jur&iacute;dicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 answers[5] = choices[5][1];
 units[5] = "7";
 comments[5] = "Id Pregunta: 524. LEY 39/2015";
 preguntaids[5] = 524


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
 preguntaids[6] = 814


//  Id pregunta: 687 Año de creación de pregunta: 2016
 questions[7]= "8)  Se&ntilde;ale el plazo en que deben ser auditados los prestadores cualificados de servicios de confianza";
 choices[7]= new Array();
 choices[7][0] = "Al menos cada 12 meses";
 choices[7][1] = "El Reglamento no trata la supervisi&oacute;n de los prestadores cualificados de servicios de confianza, dejando tal cuesti&oacute;n a la regulaci&oacute;n nacional de cada Estado miembro";
 choices[7][2] = "Al menos cada 18 meses";
 choices[7][3] = "Al menos cada 24 meses";
 answers[7] = choices[7][3];
 units[7] = "77";
 comments[7] = "Id Pregunta: 687. Art&iacute;culo 20 del Reglamento 910/2014";
 preguntaids[7] = 687


//  Id pregunta: 172 Año de creación de pregunta: 2016
 questions[8]= "9)  La Constituci&oacute;n Espa&ntilde;ola reconoce el derecho de reuni&oacute;n:";
 choices[8]= new Array();
 choices[8][0] = "Pac&iacute;fica y sin armas pero con necesidad de autorizaci&oacute;n previa.";
 choices[8][1] = "En lugares de tr&aacute;nsito p&uacute;blico previa autorizaci&oacute;n de la autoridad.";
 choices[8][2] = "En los casos de reuniones en lugares de tr&aacute;nsito p&uacute;blico y manifestaciones se dar&aacute; comunicaci&oacute;n previa a la autoridad.";
 choices[8][3] = "No es preciso realizar ninguna actuaci&oacute;n.";
 answers[8] = choices[8][2];
 units[8] = "1";
 comments[8] = "Id Pregunta: 172. CONSTITUCION1978";
 preguntaids[8] = 172


//  Id pregunta: 634 Año de creación de pregunta: 2016
 questions[9]= "10)  El sistema operativo que se dise&ntilde;a pensando en los tipos de datos y recursos que va a manejar: ficheros, procesos, memoria, hardware, etc., y en las propiedades y servicios que &eacute;stos pueden prestar, se construye siguiendo un modelo:";
 choices[9]= new Array();
 choices[9][0] = "Monol&iacute;tico.";
 choices[9][1] = "Estratificado.";
 choices[9][2] = "Cliente/servidor.";
 choices[9][3] = "Orientado a objetos.";
 answers[9] = choices[9][3];
 units[9] = "56";
 comments[9] = "Id Pregunta: 634. Junta de Extremadura A1 2015";
 preguntaids[9] = 634


//  Id pregunta: 723 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;C&uacute;al es la principal ventaja de sprints m&aacute;s cortos en Scrum?";
 choices[10]= new Array();
 choices[10][0] = "Permite al equipo reaccionar mejor ante imprevistos";
 choices[10][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[10][2] = "Es m&aacute;s f&aacute;cil cumplir los objetivos marcados al final de cada sprint";
 choices[10][3] = "Ninguna de las anteriores";
 answers[10] = choices[10][1];
 units[10] = "34, 84";
 comments[10] = "Id Pregunta: 723. Metodologias &aacute;giles";
 preguntaids[10] = 723


//  Id pregunta: 333 Año de creación de pregunta: 2016
 questions[11]= "12)  Est&aacute;n legitimados para interponer el recurso de carencia del art. 175 TCE:";
 choices[11]= new Array();
 choices[11][0] = "Las instituciones comunitarias.";
 choices[11][1] = "Los Estados miembros y las instituciones comunitarias.";
 choices[11][2] = "Los Estados miembros.";
 choices[11][3] = "Los nacionales de los Estados miembros.";
 answers[11] = choices[11][1];
 units[11] = "5";
 comments[11] = "Id Pregunta: 333. UNION EUROPEA";
 preguntaids[11] = 333


//  Id pregunta: 827 Año de creación de pregunta: 2016
 questions[12]= "13)  La actuaci&oacute;n de autoridades y personal al servicio de las Administraciones P&uacute;blicas en los que concurran motivos de abstenci&oacute;n ...";
 choices[12]= new Array();
 choices[12][0] = "No implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido pero dar&aacute; lugar a la responsabilidad que proceda";
 choices[12][1] = "Dar&aacute; lugar a la responsabilidad que proceda pero no implicar&aacute; en ning&uacute;n caso la invalidez de los actos en que hayan intervenido";
 choices[12][2] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido";
 choices[12][3] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido dando lugar a la responsabilidad que proceda";
 answers[12] = choices[12][1];
 units[12] = "4, 7, 8, 9";
 comments[12] = "Id Pregunta: 827. Ley 40/2015";
 preguntaids[12] = 827


//  Id pregunta: 770 Año de creación de pregunta: 2016
 questions[13]= "14)  Las Administraciones P&uacute;blicas sirven con objetividad los intereses generales, con sometimiento pleno a la Constituci&oacute;n, a la Ley y al Derecho y act&uacute;an de acuerdo con los principios de:";
 choices[13]= new Array();
 choices[13][0] = "eficacia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[13][1] = "eficiencia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 choices[13][2] = "eficacia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[13][3] = "eficiencia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 answers[13] = choices[13][2];
 units[13] = "4, 7, 8, 9";
 comments[13] = "Id Pregunta: 770. Ley 40/2015";
 preguntaids[13] = 770


//  Id pregunta: 423 Año de creación de pregunta: 2016
 questions[14]= "15)  Para contribuir a un reparto m&aacute;s equilibrado de las responsabilidades familiares se reconoce a los padres:";
 choices[14]= new Array();
 choices[14][0] = "El derecho a un permiso.";
 choices[14][1] = "Una prestaci&oacute;n por paternidad.";
 choices[14][2] = "Ambas son correctas.";
 choices[14][3] = "18 d&iacute;as de permiso.";
 answers[14] = choices[14][2];
 units[14] = "14";
 comments[14] = "Id Pregunta: 423. POLITICAS DE IGUALDAD";
 preguntaids[14] = 423


//  Id pregunta: 762 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Cu&aacute;l de los siguientes es uno de los pilares en los que se fundamenta la Estrategia del Mercado &Uacute;nico Digital?";
 choices[15]= new Array();
 choices[15][0] = "Mejorar el acceso de los consumidores y empresas a los bienes y servicios digitales en Europa";
 choices[15][1] = "Aplicar est&aacute;ndares de calidad a los servicios digitales en Europa";
 choices[15][2] = "Apertura al exterior";
 choices[15][3] = "I+D+i como forma de mejorar los servicios digitales de las empresas europeas";
 answers[15] = choices[15][0];
 units[15] = "17";
 comments[15] = "Id Pregunta: 762. Mercado &Uacute;nico Digital";
 preguntaids[15] = 762


//  Id pregunta: 630 Año de creación de pregunta: 2016
 questions[16]= "17)  Seg&uacute;n el Real Decreto 4/2010, de 8 de enero, por el que se regula el Esquema Nacional de Interoperabilidad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; es la interoperabilidad?";
 choices[16]= new Array();
 choices[16][0] = "Es la capacidad de los sistemas de informaci&oacute;n y de los procedimientos a los que &eacute;stos dan soporte, de compartir datos y posibilitar el intercambio de informaci&oacute;n y conocimiento entre ellos.";
 choices[16][1] = "Es la obligaci&oacute;n de conectividad ente sistemas operativos de las Administraciones P&uacute;blicas.";
 choices[16][2] = "Es la capacidad de intercambio de datos entre las Comunidades Aut&oacute;nomas y la Administraci&oacute;n Central.";
 choices[16][3] = "Es la posibilidad de acceso a los datos que poseen todas las Administraciones sobre cualquiera de los usuarios de los sistemas de informaci&oacute;n.";
 answers[16] = choices[16][0];
 units[16] = "45";
 comments[16] = "Id Pregunta: 630. Junta de Extremadura A1 2015";
 preguntaids[16] = 630


//  Id pregunta: 233 Año de creación de pregunta: 2016
 questions[17]= "18)  Seg&uacute;n el Art&iacute;culo 75 de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras pueden delegar en las Comisiones Legislativas Permanentes:";
 choices[17]= new Array();
 choices[17][0] = "La aprobaci&oacute;n de proyectos o proposiciones de ley.";
 choices[17][1] = "La convalidaci&oacute;n de decretos-leyes.";
 choices[17][2] = "La aprobaci&oacute;n de proyectos de leyes de bases.";
 choices[17][3] = "La aprobaci&oacute;n de proyectos de leyes org&aacute;nicas.";
 answers[17] = choices[17][2];
 units[17] = "1";
 comments[17] = "Id Pregunta: 233. CONSTITUCION1978";
 preguntaids[17] = 233


//  Id pregunta: 536 Año de creación de pregunta: 2016
 questions[18]= "19)  Las Administraciones P&uacute;blicas podr&aacute;n habilitar:";
 choices[18]= new Array();
 choices[18][0] = "con car&aacute;cter general a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[18][1] = "con car&aacute;cter general o espec&iacute;fico a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[18][2] = "con car&aacute;cter general o espec&iacute;fico a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[18][3] = "con car&aacute;cter general a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 answers[18] = choices[18][2];
 units[18] = "7";
 comments[18] = "Id Pregunta: 536. LEY 39/2015";
 preguntaids[18] = 536


//  Id pregunta: 820 Año de creación de pregunta: 2016
 questions[19]= "20)  Respecto a los servicios territoriales es correcto:";
 choices[19]= new Array();
 choices[19][0] = "la organizaci&oacute;n de los servicios territoriales no integrados en las Delegaciones del Gobierno se establecer&aacute; mediante Real Decreto";
 choices[19][1] = "los servicios territoriales no integrados depender&aacute;n del Delegado del Gobierno, o en su caso Subdelegado del Gobierno, a trav&eacute;s de la Secretar&iacute;a General";
 choices[19][2] = "los servicios territoriales integrados depender&aacute;n del &oacute;rgano central competente sobre el sector de actividad en el que aqu&eacute;llos operen";
 choices[19][3] = "ninguna es correcta";
 answers[19] = choices[19][0];
 units[19] = "4, 7, 8, 9";
 comments[19] = "Id Pregunta: 820. Ley 40/2015";
 preguntaids[19] = 820


//  Id pregunta: 113 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;Cu&aacute;l de las siguientes instituciones NO proporciona estad&iacute;sticas oficiales propias sobre el mercado de trabajo en Espa&ntilde;a?";
 choices[20]= new Array();
 choices[20][0] = "La Seguridad Social";
 choices[20][1] = "El Instituto Nacional de Estad&iacute;stica";
 choices[20][2] = "El Servicio de Empleo P&uacute;blico Estatal";
 choices[20][3] = "El Banco de Espa&ntilde;a";
 answers[20] = choices[20][3];
 units[20] = "15";
 comments[20] = "Id Pregunta: 113. ";
 preguntaids[20] = 113


//  Id pregunta: 475 Año de creación de pregunta: 2016
 questions[21]= "22)  Seg&uacute;n el art&iacute;culo de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , el r&eacute;gimen econ&oacute;mico y financiero del sector p&uacute;blico estatal se regula en:";
 choices[21]= new Array();
 choices[21][0] = "Ley 50/1997, del Gobierno.";
 choices[21][1] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[21][2] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General del Estado.";
 choices[21][3] = "La Ley General de la Hacienda P&uacute;blica.";
 answers[21] = choices[21][1];
 units[21] = "10";
 comments[21] = "Id Pregunta: 475. PRESUPUESTOS GENERALES";
 preguntaids[21] = 475


//  Id pregunta: 554 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes no es uno de los pilares de la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[22]= new Array();
 choices[22][0] = "Establecer redes de telecomunicaciones continentales";
 choices[22][1] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa";
 choices[22][2] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar";
 choices[22][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[22] = choices[22][0];
 units[22] = "17";
 comments[22] = "Id Pregunta: 554. Mercado &Uacute;nico Digital";
 preguntaids[22] = 554


//  Id pregunta: 531 Año de creación de pregunta: 2016
 questions[23]= "24)  Se presumir&aacute; la representaci&oacute;n para:";
 choices[23]= new Array();
 choices[23][0] = "formular solicitudes";
 choices[23][1] = "los actos y gestiones de mero tr&aacute;mite";
 choices[23][2] = "presentar declaraciones responsables o comunicaciones";
 choices[23][3] = "interponer recursos, desistir de acciones y renunciar a derechos en nombre de otra persona";
 answers[23] = choices[23][1];
 units[23] = "7";
 comments[23] = "Id Pregunta: 531. LEY 39/2015";
 preguntaids[23] = 531


//  Id pregunta: 487 Año de creación de pregunta: 2016
 questions[24]= "25)  Se&ntilde;ale la respuesta incorrecta respecto de la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[24]= new Array();
 choices[24][0] = "El principio de dotaci&oacute;n presupuestaria implica que los Presupuestos Generales del Estado de cada ejercicio contendr&aacute;n los cr&eacute;ditos necesarios para atender a las transferencias de medios econ&oacute;micos que deban realizarse a las comunidades aut&oacute;nomas por aplicaci&oacute;n del sistema de financiaci&oacute;n vigente en cada momento.";
 choices[24][1] = "Los cr&eacute;ditos para hacer efectivas las liquidaciones definitivas de ejercicios anteriores tendr&aacute;n el car&aacute;cter de ampliables.";
 choices[24][2] = "El reintegro de ayudas y la responsabilidad financiera derivados de la gesti&oacute;n de los fondos procedentes de la Uni&oacute;n Europea se someter&aacute; a lo previsto en la Ley General de Subvenciones y en la normativa comunitaria.";
 choices[24][3] = "Los anticipos para ejecuci&oacute;n de acciones y programas financiados o cofinanciados por fondos europeos que estuvieran pendientes de cancelar al finalizar el ejercicio, no podr&aacute;n cancelarse en el ejercicio siguiente.";
 answers[24] = choices[24][3];
 units[24] = "10";
 comments[24] = "Id Pregunta: 487. PRESUPUESTOS GENERALES";
 preguntaids[24] = 487


//  Id pregunta: 115 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;Qu&eacute; Tratado Europeo introduce un t&iacute;tulo dedicado al empleo en el Tratado de Roma?";
 choices[25]= new Array();
 choices[25][0] = "El Tratado de Lisboa";
 choices[25][1] = "El Tratado de Amsterdam";
 choices[25][2] = "El Tratado de Niza";
 choices[25][3] = "El Acta &Uacute;nica Europea";
 answers[25] = choices[25][1];
 units[25] = "15";
 comments[25] = "Id Pregunta: 115. ";
 preguntaids[25] = 115


//  Id pregunta: 720 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Qui&eacute;n es el responsable de transladar la metodolog&iacute;a lean al software?";
 choices[26]= new Array();
 choices[26][0] = "Eric Ries";
 choices[26][1] = "Steve Blank";
 choices[26][2] = "Tom Poppendieck";
 choices[26][3] = "Alexander Osterwalder";
 answers[26] = choices[26][2];
 units[26] = "34";
 comments[26] = "Id Pregunta: 720. Metodologias Lean";
 preguntaids[26] = 720


//  Id pregunta: 41 Año de creación de pregunta: 2016
 questions[27]= "28)  En cuanto al an&aacute;lisis DAFO:";
 choices[27]= new Array();
 choices[27][0] = "Considera detallada y exclusivamente factores internos.";
 choices[27][1] = "Es una t&eacute;cnica aplicable dentro de la Planificaci&oacute;n de Sistemas de Informaci&oacute;n.";
 choices[27][2] = "Considera detallada y exclusivamente factores externos.";
 choices[27][3] = "Se obtiene como resultado final del proceso de Planificaci&oacute;n Estrat&eacute;gica.";
 answers[27] = choices[27][1];
 units[27] = "83";
 comments[27] = "Id Pregunta: 41. AGE A1 2015";
 preguntaids[27] = 41


//  Id pregunta: 610 Año de creación de pregunta: 2016
 questions[28]= "29)  Una de las condiciones que un &aacute;rbol debe cumplir para ser &aacute;rbol b, siendo n el orden del &aacute;rbol, es:";
 choices[28]= new Array();
 choices[28][0] = "Cada p&aacute;gina contiene como m&aacute;ximo 2n + 1 elementos.";
 choices[28][1] = "Cada p&aacute;gina, excepto la ra&iacute;z, contiene al menos n elementos.";
 choices[28][2] = "Cada p&aacute;gina o es una hoja o tiene m descendientes, siendo m el n&uacute;mero de elementos o claves que tiene.";
 choices[28][3] = "Las hojas no tienen por qu&eacute; estar al mismo nivel.";
 answers[28] = choices[28][1];
 units[28] = "56";
 comments[28] = "Id Pregunta: 610. Junta de Extremadura A1 2015";
 preguntaids[28] = 610


//  Id pregunta: 288 Año de creación de pregunta: 2016
 questions[29]= "30)  Cu&aacute;l no es uno de los pilares que cimientan el Plan de Acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[29]= new Array();
 choices[29][0] = "Configuraci&oacute;n de un marco que habilite la movilidad transfronteriza mediante los servicios p&uacute;blicos digitales;";
 choices[29][1] = "Facilitar la interacci&oacute;n digital con ciudadanos y empresas mediante AA.PP. abiertas y flexibles que impliquen a los actores interesados en el dise&ntilde;o de pol&iacute;ticas y servicios de una forma colaborativa;";
 choices[29][2] = "Sociedad digital integradora, donde los ciudadanos tengan las cualificaciones adecuadas para aprovechar las oportunidades ofrecidas por Internet.";
 choices[29][3] = "Puesta a disposici&oacute;n de habilitadores y facilitadores claves, servicios y activos reutilizables.";
 answers[29] = choices[29][2];
 units[29] = "5";
 comments[29] = "Id Pregunta: 288. UNION EUROPEA";
 preguntaids[29] = 288


//  Id pregunta: 753 Año de creación de pregunta: 2016
 questions[30]= "31)  En el contexto de la Ley 20/2013, de garant&iacute;a de la unidad de mercado, se considerar&aacute; que concurren los principios de necesidad y proporcionalidad para la exigencia de una autorizaci&oacute;n:";
 choices[30]= new Array();
 choices[30][0] = "Respecto a los operadores econ&oacute;micos, cuando est&eacute; justificado por razones de orden p&uacute;blico aunque &eacute;stas puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n.";
 choices[30][1] = "Respecto a las instalaciones o infraestructuras f&iacute;sicas necesarias para el ejercicio de actividades econ&oacute;micas, cuando sean susceptibles de generar da&ntilde;os sobre el medio ambiente y el entorno urbano, la seguridad o la salud p&uacute;blica y el patrimonio hist&oacute;rico-art&iacute;stico, y estas razones no puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n";
 choices[30][2] = "b) y d) son verdaderas";
 choices[30][3] = "Cuando as&iacute; se disponga reglamentariamente";
 answers[30] = choices[30][1];
 units[30] = "23";
 comments[30] = "Id Pregunta: 753. Direcci&oacute;n p&uacute;blica";
 preguntaids[30] = 753


//  Id pregunta: 426 Año de creación de pregunta: 2016
 questions[31]= "32)  La aprobaci&oacute;n de convocatorias de pruebas selectivas para el acceso al empleo p&uacute;blico deber&aacute; acompa&ntilde;arse de:";
 choices[31]= new Array();
 choices[31][0] = "Un plan de igualdad.";
 choices[31][1] = "Un informe de impacto de g&eacute;nero.";
 choices[31][2] = "Un programa de igualdad.";
 choices[31][3] = "Todas son correctas.";
 answers[31] = choices[31][1];
 units[31] = "14";
 comments[31] = "Id Pregunta: 426. POLITICAS DE IGUALDAD";
 preguntaids[31] = 426


//  Id pregunta: 849 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Cu&aacute;l de los siguientes es un sistema de firma para la actuaci&oacute;n administrativa automatizada?";
 choices[32]= new Array();
 choices[32][0] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico reconocido o cualificado que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[32][1] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico avanzado o reconocido que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[32][2] = "C&oacute;digo seguro de verificaci&oacute;n vinculado a la Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de Derecho P&uacute;blico, en los t&eacute;rminos y condiciones establecidos, permiti&eacute;ndose en todo caso la comprobaci&oacute;n de la integridad del documento mediante el acceso al portal correspondiente.";
 choices[32][3] = "Firma electr&oacute;nica del titular del &oacute;rgano o empleado p&uacute;blico.";
 answers[32] = choices[32][0];
 units[32] = "4, 7, 8, 9";
 comments[32] = "Id Pregunta: 849. Ley 40/2015";
 preguntaids[32] = 849


//  Id pregunta: 212 Año de creación de pregunta: 2016
 questions[33]= "34)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con la regulaci&oacute;n constitucional de la composici&oacute;n del Senado:";
 choices[33]= new Array();
 choices[33][0] = "La poblaci&oacute;n de Melilla elegir&aacute; dos Senadores.";
 choices[33][1] = "En cada provincia se elegir&aacute;n tres senadores.";
 choices[33][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas elegir&aacute;n un senador cuando su poblaci&oacute;n supere el mill&oacute;n de habitantes.";
 choices[33][3] = "El Senado se compone de 350 senadores.";
 answers[33] = choices[33][0];
 units[33] = "1";
 comments[33] = "Id Pregunta: 212. CONSTITUCION1978";
 preguntaids[33] = 212


//  Id pregunta: 621 Año de creación de pregunta: 2016
 questions[34]= "35)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[34]= new Array();
 choices[34][0] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: la identificaci&oacute;n de clases sem&aacute;nticas, atributos y servicios; identificaci&oacute;n de las relaciones entre clases; el emplazamiento de las clases, atributos y servicios; la especificaci&oacute;n del comportamiento din&aacute;mico mediante paso de mensajes.";
 choices[34][1] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: a&ntilde;adir las clases interfaz, base y utilidad; refinar las clases sem&aacute;nticas.";
 choices[34][2] = "En el An&aacute;lisis Orientado a Objetos, deben llevarse a cabo las siguientes actividades: toma inicial de requisitos; an&aacute;lisis; dise&ntilde;o; implementaci&oacute;n.";
 choices[34][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[34] = choices[34][1];
 units[34] = "89";
 comments[34] = "Id Pregunta: 621. Junta de Extremadura A1 2015";
 preguntaids[34] = 621


//  Id pregunta: 594 Año de creación de pregunta: 2016
 questions[35]= "36)  Seg&uacute;n el Plan de Transformaci&oacute;n Digital de la AGE, &iquest;con qu&eacute; frecuencia de realizar&aacute;n nuevas declaraciones de servicios compartidos?";
 choices[35]= new Array();
 choices[35][0] = "Anualmente";
 choices[35][1] = "Bienalmente";
 choices[35][2] = "Cada cuatro a&ntilde;os";
 choices[35][3] = "No se define ninguna periodicidad";
 answers[35] = choices[35][1];
 units[35] = "19";
 comments[35] = "Id Pregunta: 594. Estrategia TIC. Se indica en la l&iacute;nea de acci&oacute;n 6";
 preguntaids[35] = 594


//  Id pregunta: 336 Año de creación de pregunta: 2016
 questions[36]= "37)  El Tribunal de Justicia Europeo funcion&oacute; como instancia &uacute;nica hasta:";
 choices[36]= new Array();
 choices[36][0] = "Diciembre de 1987.";
 choices[36][1] = "Septiembre de 1989.";
 choices[36][2] = "Octubre de 1990.";
 choices[36][3] = "Noviembre de 1980.";
 answers[36] = choices[36][1];
 units[36] = "5";
 comments[36] = "Id Pregunta: 336. UNION EUROPEA";
 preguntaids[36] = 336


//  Id pregunta: 310 Año de creación de pregunta: 2016
 questions[37]= "38)  Los actos legislativos de la Uni&oacute;n Europea, podr&aacute;n adoptarse &uacute;nicamente a propuesta de:";
 choices[37]= new Array();
 choices[37][0] = "La Comisi&oacute;n Europea.";
 choices[37][1] = "El Consejo Europeo.";
 choices[37][2] = "El Consejo de Europa.";
 choices[37][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[37] = choices[37][0];
 units[37] = "5";
 comments[37] = "Id Pregunta: 310. UNION EUROPEA";
 preguntaids[37] = 310


//  Id pregunta: 740 Año de creación de pregunta: 2016
 questions[38]= "39)  La estructura de la Estrategia TIC:";
 choices[38]= new Array();
 choices[38][0] = "5 principios rectores, 7 objetivos estrat&eacute;gicos, 9 l&iacute;neas de acci&oacute;n";
 choices[38][1] = "5 principios rectores, 5 objetivos estrat&eacute;gicos, 7 l&iacute;neas de acci&oacute;n";
 choices[38][2] = "5 principios rectores, 5 objetivos estrat&eacute;gicos, 9 l&iacute;neas de acci&oacute;n";
 choices[38][3] = "5 principios rectores, 6 objetivos estrat&eacute;gicos, 8 l&iacute;neas de acci&oacute;n";
 answers[38] = choices[38][2];
 units[38] = "28";
 comments[38] = "Id Pregunta: 740. Estrategia TIC";
 preguntaids[38] = 740


//  Id pregunta: 195 Año de creación de pregunta: 2016
 questions[39]= "40)  La potestad reglamentaria constitucionalmente corresponde:";
 choices[39]= new Array();
 choices[39][0] = "Al Gobierno.";
 choices[39][1] = "A las Cortes Generales.";
 choices[39][2] = "Al Poder Judicial.";
 choices[39][3] = "Al Congreso de los Diputados.";
 answers[39] = choices[39][0];
 units[39] = "1";
 comments[39] = "Id Pregunta: 195. CONSTITUCION1978";
 preguntaids[39] = 195


//  Id pregunta: 278 Año de creación de pregunta: 2016
 questions[40]= "41)  Respecto al Consejo de Transparencia y Buen Gobierno:";
 choices[40]= new Array();
 choices[40][0] = "Su estatuto entra en vigor el 10 de diciembre de 2014.";
 choices[40][1] = "Estatuto se estructura en cinco cap&iacute;tulos.";
 choices[40][2] = "El Consejo de Ministros aprobar&aacute;, en el plazo de tres meses desde la publicaci&oacute;n de la Ley 19/2013 en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, un Real Decreto por el que se apruebe el Estatuto org&aacute;nico del Consejo de Transparencia y Buen Gobierno.";
 choices[40][3] = "Su estatuto se regula por el Real Decreto 919/2014, de 31 de octubre.";
 answers[40] = choices[40][1];
 units[40] = "22";
 comments[40] = "Id Pregunta: 278. LEY DE TRANSPARENCIA";
 preguntaids[40] = 278


//  Id pregunta: 581 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Cu&aacute;les son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[41]= new Array();
 choices[41][0] = "Transparencia e innovaci&oacute;n, orientaci&oacute;n al usuario del servicio y fomentar el uso de est&aacute;ndares";
 choices[41][1] = "Colaboraci&oacute;n y alianzas, unidad y visi&oacute;n integral y orientaci&oacute;n al usuario del servicio";
 choices[41][2] = "Unidad y visi&oacute;n integral, orientaci&oacute;n al usuario del servicio y prestaci&oacute;n de servicios compartidos";
 choices[41][3] = "Colaboraci&oacute;n y alianzas, fomentar el uso de est&aacute;ndares e incrementar la productividad y la eficacia";
 answers[41] = choices[41][1];
 units[41] = "19";
 comments[41] = "Id Pregunta: 581. Estrategia TIC";
 preguntaids[41] = 581


//  Id pregunta: 400 Año de creación de pregunta: 2016
 questions[42]= "43)  Corresponde probar la ausencia de discriminaci&oacute;n en las medidas adoptadas y su proporcionalidad, a:";
 choices[42]= new Array();
 choices[42][0] = "A la persona demandante.";
 choices[42][1] = "A la persona demandada.";
 choices[42][2] = "Al &oacute;rgano judicial.";
 choices[42][3] = "Al &oacute;rgano administrativo.";
 answers[42] = choices[42][1];
 units[42] = "14";
 comments[42] = "Id Pregunta: 400. POLITICAS DE IGUALDAD";
 preguntaids[42] = 400


//  Id pregunta: 715 Año de creación de pregunta: 2016
 questions[43]= "44)  Entre las funcionalidades generales de un servidor de integraci&oacute;n continua NO se encuentra";
 choices[43]= new Array();
 choices[43][0] = "La ejecuci&oacute;n de una serie de test: JUnit, Cactus, Auditoria del c&oacute;digo fuente, test IHM, test funcionales.";
 choices[43][1] = "Permite realiza el despliegue de archivos en el entorno de producci&oacute;n.";
 choices[43][2] = "La notificaci&oacute;n del resultado por medios como correo electr&oacute;nico o RSS.";
 choices[43][3] = "La creaci&oacute;n de un informe de estad&iacute;sticas.";
 answers[43] = choices[43][1];
 units[43] = "92";
 comments[43] = "Id Pregunta: 715. INTEGRACION CONTINUA";
 preguntaids[43] = 715


//  Id pregunta: 473 Año de creación de pregunta: 2016
 questions[44]= "45)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la agrupaci&oacute;n de los cr&eacute;ditos en cap&iacute;tulos, art&iacute;culos, conceptos y subconceptos corresponde a la clasificaci&oacute;n:";
 choices[44]= new Array();
 choices[44][0] = "Org&aacute;nica.";
 choices[44][1] = "Contable.";
 choices[44][2] = "Econ&oacute;mica.";
 choices[44][3] = "Por programas.";
 answers[44] = choices[44][2];
 units[44] = "10";
 comments[44] = "Id Pregunta: 473. PRESUPUESTOS GENERALES";
 preguntaids[44] = 473


//  Id pregunta: 47 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es propia de OCSP?";
 choices[45]= new Array();
 choices[45][0] = "Es un m&eacute;todo de validaci&oacute;n del estado de un certificado electr&oacute;nico que emplea suplementariamente la descarga y consulta de CRLs.";
 choices[45][1] = "Permite la consulta off-line del estado de revocaci&oacute;n de un certificado proporcionado por una autoridad de certificaci&oacute;n.";
 choices[45][2] = "No permite implementar mecanismos de tarificaci&oacute;n.";
 choices[45][3] = "Permite verificar el estado de los certificados mediante la consulta a una autoridad de validaci&oacute;n.";
 answers[45] = choices[45][3];
 units[45] = "78";
 comments[45] = "Id Pregunta: 47. AGE A1 2015";
 preguntaids[45] = 47


//  Id pregunta: 484 Año de creación de pregunta: 2016
 questions[46]= "47)  De acuerdo con el art&iacute;culo 67 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, si las variaciones afectasen al volumen de endeudamiento a corto y largo plazo, ser&aacute; competencia del Consejo de Ministros cuando su importe exceda de la cuant&iacute;a de:";
 choices[46]= new Array();
 choices[46][0] = "12.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[46][1] = "13.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[46][2] = "11.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[46][3] = "10.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 answers[46] = choices[46][0];
 units[46] = "10";
 comments[46] = "Id Pregunta: 484. PRESUPUESTOS GENERALES";
 preguntaids[46] = 484


//  Id pregunta: 669 Año de creación de pregunta: 2016
 questions[47]= "48)  Se&ntilde;ale la opci&oacute;n falsa respecto a la instrucci&oacute;n del procedimiento definida en la Ley 39/2015:";
 choices[47]= new Array();
 choices[47][0] = "Los interesados podr&aacute;n, en cualquier momento del procedimiento anterior al tr&aacute;mite de audiencia, aducir alegaciones y aportar documentos u otros elementos de juicio.";
 choices[47][1] = "El instructor del procedimiento s&oacute;lo podr&aacute; rechazar las pruebas propuestas por los interesados cuando sean manifiestamente improcedentes o innecesarias, mediante resoluci&oacute;n motivada.";
 choices[47][2] = "Salvo disposici&oacute;n expresa en contrario, los informes ser&aacute;n preceptivos y vinculantes.";
 choices[47][3] = "Se podr&aacute; prescindir del tr&aacute;mite de audiencia cuando no figuren en el procedimiento ni sean tenidos en cuenta en la resoluci&oacute;n otros hechos ni otras alegaciones y pruebas que las aducidas por el interesado.";
 answers[47] = choices[47][2];
 units[47] = "7";
 comments[47] = "Id Pregunta: 669. Cap&iacute;tulo IV, T&iacute;tulo IV de la Ley 39/2015";
 preguntaids[47] = 669


//  Id pregunta: 785 Año de creación de pregunta: 2016
 questions[48]= "49)  Las competencias en materia de organizaci&oacute;n administrativa, r&eacute;gimen de personal, procedimientos e inspecci&oacute;n de servicios, no atribuidas espec&iacute;ficamente conforme a una Ley a ning&uacute;n otro &oacute;rgano de la Administraci&oacute;n General del Estado, ni al Gobierno, corresponder&aacute;n a:";
 choices[48]= new Array();
 choices[48][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[48][1] = "el Consejo de Estado";
 choices[48][2] = "el Congreso";
 choices[48][3] = "las Cortes Generales";
 answers[48] = choices[48][0];
 units[48] = "4, 7, 8, 9";
 comments[48] = "Id Pregunta: 785. Ley 40/2015";
 preguntaids[48] = 785


//  Id pregunta: 632 Año de creación de pregunta: 2016
 questions[49]= "50)  Seg&uacute;n el Reglamento de Medidas de Seguridad de Ficheros Automatizados con Datos de Car&aacute;cter Personal, los ficheros que contengan datos de ideolog&iacute;a, religi&oacute;n, creencias, origen racial, salud o vida sexual, &iquest;qu&eacute; medidas de seguridad deber&aacute;n adoptar?";
 choices[49]= new Array();
 choices[49][0] = "De nivel b&aacute;sico y nivel medio.";
 choices[49][1] = "De nivel alto.";
 choices[49][2] = "De nivel medio y nivel alto.";
 choices[49][3] = "De nivel b&aacute;sico, nivel medio y nivel alto.";
 answers[49] = choices[49][3];
 units[49] = "35";
 comments[49] = "Id Pregunta: 632. Junta de Extremadura A1 2015";
 preguntaids[49] = 632


//  Id pregunta: 26 Año de creación de pregunta: 2016
 questions[50]= "51)  Usted, como directivo TIC de la AGE, decide crear un portal web, con una direcci&oacute;n electr&oacute;nica nueva, con el objetivo de informar al ciudadano sobre determinados aspectos relacionados con su unidad. &iquest;Cu&aacute;l de los siguientes tipos de certificado utilizar&iacute;a para identificar a los servidores de su portal informativo?";
 choices[50]= new Array();
 choices[50][0] = "Sello electr&oacute;nico";
 choices[50][1] = "Sede electr&oacute;nica";
 choices[50][2] = "Servidor seguro (SSL/TLS)";
 choices[50][3] = "Empleado p&uacute;blico";
 answers[50] = choices[50][2];
 units[50] = "7";
 comments[50] = "Id Pregunta: 26. AGE A1 2015";
 preguntaids[50] = 26


//  Id pregunta: 29 Año de creación de pregunta: 2016
 questions[51]= "52)  De acuerdo con el art&iacute;culo 62 de la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, se&ntilde;ale la respuesta correcta:";
 choices[51]= new Array();
 choices[51][0] = "El uso del dominio p&uacute;blico radioel&eacute;ctrico s&oacute;lo puede ser de dos tipos: especial o privativo.";
 choices[51][1] = "El uso com&uacute;n del dominio p&uacute;blico radioel&eacute;ctrico precisa de t&iacute;tulo habilitante.";
 choices[51][2] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico es el que se realiza mediante la explotaci&oacute;n en exclusiva, o por un n&uacute;mero limitado de usuarios, de determinadas frecuencias en un mismo &aacute;mbito f&iacute;sico de aplicaci&oacute;n.";
 choices[51][3] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico es el que se lleve a cabo de las bandas de frecuencias habilitadas para su explotaci&oacute;n de forma compartida, sin limitaci&oacute;n de n&uacute;mero de operadores o usuarios y con las condiciones t&eacute;cnicas y para los servicios que se establezcan en cada caso.";
 answers[51] = choices[51][2];
 units[51] = "121";
 comments[51] = "Id Pregunta: 29. AGE A1 2015";
 preguntaids[51] = 29


//  Id pregunta: 598 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Qui&eacute;n supervisa la elaboraci&oacute;n y ejecutaci&oacute;n de los Planes de Acci&oacute;n Sectoriales?";
 choices[52]= new Array();
 choices[52][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[52][1] = "Las CMADs";
 choices[52][2] = "Ambas son correctas.";
 choices[52][3] = "Ninguna es correcta";
 answers[52] = choices[52][2];
 units[52] = "19";
 comments[52] = "Id Pregunta: 598. Estrategia TIC";
 preguntaids[52] = 598


//  Id pregunta: 85 Año de creación de pregunta: 2016
 questions[53]= "54)  Seg&uacute;n MAGERIT 3.0, el informe en el que se recogen los resultados de la identificaci&oacute;n de las amenazas relevantes sobre el sistema a analizar, caracterizadas por las estimaciones de ocurrencia y da&ntilde;o causado, se denomina:";
 choices[53]= new Array();
 choices[53][0] = "Estimaci&oacute;n del riesgo";
 choices[53][1] = "Evaluaci&oacute;n de salvaguardas";
 choices[53][2] = "Declaraci&oacute;n de aplicabilidad";
 choices[53][3] = "Mapa de riesgos";
 answers[53] = choices[53][3];
 units[53] = "45";
 comments[53] = "Id Pregunta: 85. AGE A1 2015";
 preguntaids[53] = 85


//  Id pregunta: 433 Año de creación de pregunta: 2016
 questions[54]= "55)  El &oacute;rgano colegiado responsable de la coordinaci&oacute;n de las pol&iacute;ticas y medidas adoptadas por los departamentos ministeriales con la finalidad de garantizar el derecho a la igualdad entre mujeres y hombres, se denomina:";
 choices[54]= new Array();
 choices[54][0] = "Unidad de igualdad.";
 choices[54][1] = "Comisi&oacute;n Interministerial de Igualdad entre mujeres y hombres.";
 choices[54][2] = "Ninguna de las anteriores.";
 choices[54][3] = "A y B son correctas.";
 answers[54] = choices[54][1];
 units[54] = "14";
 comments[54] = "Id Pregunta: 433. POLITICAS DE IGUALDAD";
 preguntaids[54] = 433


//  Id pregunta: 761 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;En cu&aacute;ntos pilares se fundamenta la Estrategia del Mercado &Uacute;nico Digital?";
 choices[55]= new Array();
 choices[55][0] = "3 pilares";
 choices[55][1] = "4 pilares";
 choices[55][2] = "5 pilares";
 choices[55][3] = "7 pilares";
 answers[55] = choices[55][0];
 units[55] = "17";
 comments[55] = "Id Pregunta: 761. Mercado &Uacute;nico Digital";
 preguntaids[55] = 761


//  Id pregunta: 404 Año de creación de pregunta: 2016
 questions[56]= "57)  La igualdad como principio fundamental en la UE, entra en vigor con:";
 choices[56]= new Array();
 choices[56][0] = "El Tratado de Roma, 1957.";
 choices[56][1] = "El Acta &Uacute;nica Europea.";
 choices[56][2] = "El Tratado de &Aacute;msterdam, 1997.";
 choices[56][3] = "Ninguna es correcta.";
 answers[56] = choices[56][2];
 units[56] = "14";
 comments[56] = "Id Pregunta: 404. POLITICAS DE IGUALDAD";
 preguntaids[56] = 404


//  Id pregunta: 7 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes asociaciones de protocolos y niveles OSI es correcta?";
 choices[57]= new Array();
 choices[57][0] = "Nivel 7 - MPLS.";
 choices[57][1] = "Nivel 3 - RARP.";
 choices[57][2] = "Nivel 2 - HDLC.";
 choices[57][3] = "Nivel 1 &ndash; CSMA/CD.";
 answers[57] = choices[57][2];
 units[57] = "105";
 comments[57] = "Id Pregunta: 7. AGE A1 2015";
 preguntaids[57] = 7


//  Id pregunta: 359 Año de creación de pregunta: 2016
 questions[58]= "59)  Los Reglamentos no se caracterizan por:";
 choices[58]= new Array();
 choices[58][0] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 choices[58][1] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[58][2] = "Ser obligatorios.";
 choices[58][3] = "No poseer alcance general.";
 answers[58] = choices[58][3];
 units[58] = "5";
 comments[58] = "Id Pregunta: 359. UNION EUROPEA";
 preguntaids[58] = 359


//  Id pregunta: 432 Año de creación de pregunta: 2016
 questions[59]= "60)  Las sociedades obligadas a presentar cuenta de p&eacute;rdidas y ganancias no abreviada, procurar&aacute;n incluir en su Consejo de Administraci&oacute;n un n&uacute;mero de mujeres que permita alcanzar la presencia equilibrada de mujeres y hombres en un plazo:";
 choices[59]= new Array();
 choices[59][0] = "De ocho a&ntilde;os.";
 choices[59][1] = "El d&iacute;a despu&eacute;s de la publicaci&oacute;n en el BOE de la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombre.";
 choices[59][2] = "Ambas son correctas.";
 choices[59][3] = "No existe un l&iacute;mite.";
 answers[59] = choices[59][0];
 units[59] = "14";
 comments[59] = "Id Pregunta: 432. POLITICAS DE IGUALDAD";
 preguntaids[59] = 432


//  Id pregunta: 281 Año de creación de pregunta: 2016
 questions[60]= "61)  Se&ntilde;ale la respuesta falsa:";
 choices[60]= new Array();
 choices[60][0] = "El Semestre Europeo es un ciclo de coordinaci&oacute;n de las pol&iacute;ticas econ&oacute;micas y presupuestarias dentro de la UE.";
 choices[60][1] = "Se centra en los primeros seis meses de cada a&ntilde;o, de ah&iacute; que se denomine &quot;Semestre&quot;.";
 choices[60][2] = "Durante el Semestre Europeo los Estados miembros ajustan sus pol&iacute;ticas presupuestarias y econ&oacute;micas a los objetivos y normas acordados a escala de la UE.";
 choices[60][3] = "Incluye reformas estructurales, dedicadas a promover el crecimiento y el empleo de conformidad con la Estrategia de Lisboa.";
 answers[60] = choices[60][3];
 units[60] = "5";
 comments[60] = "Id Pregunta: 281. UNION EUROPEA";
 preguntaids[60] = 281


//  Id pregunta: 658 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Qu&eacute; aplicativo se suele usar como herramienta administrativa para el control de los nodos dentro del ecosistema BidData?";
 choices[61]= new Array();
 choices[61][0] = "Cassandra";
 choices[61][1] = "Riak";
 choices[61][2] = "Avro";
 choices[61][3] = "Zookeeper";
 answers[61] = choices[61][3];
 units[61] = "73";
 comments[61] = "Id Pregunta: 658. ";
 preguntaids[61] = 658


//  Id pregunta: 683 Año de creación de pregunta: 2016
 questions[62]= "63)  El Factor de Sostenibilidad, de acuerdo a la Ley 23/2013, de 23 de diciembre, reguladora del Factor de Sostenibilidad y del &Iacute;ndice de Revalorizaci&oacute;n del Sistema de Pensiones de la Seguridad Social:";
 choices[62]= new Array();
 choices[62][0] = "Es un valor que se calcula para cada periodo de 3 a&ntilde;os, comenzando en el a&ntilde;o 2016.";
 choices[62][1] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la evoluci&oacute;n del PIB y otros datos macroecon&oacute;micos.";
 choices[62][2] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la esperanza de vida de los pensionistas.";
 choices[62][3] = "Se aplicar&aacute; para determinar la cuant&iacute;a de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a partir del 1 de Enero del a&ntilde;o 2018.";
 answers[62] = choices[62][2];
 units[62] = "14";
 comments[62] = "Id Pregunta: 683. Pensiones";
 preguntaids[62] = 683


//  Id pregunta: 112 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Qu&eacute; dos magnitudes relaciona la Ley de Okun?";
 choices[63]= new Array();
 choices[63][0] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de inflaci&oacute;n";
 choices[63][1] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la variaci&oacute;n del desempleo";
 choices[63][2] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de actividad";
 choices[63][3] = "El valor absoluto del PIB (Producto Interior Bruto) con la tasa de actividad";
 answers[63] = choices[63][1];
 units[63] = "15";
 comments[63] = "Id Pregunta: 112. ";
 preguntaids[63] = 112


//  Id pregunta: 795 Año de creación de pregunta: 2016
 questions[64]= "65)  Todos los &oacute;rganos de la Administraci&oacute;n General del Estado que no sean &oacute;rgano superior o directivo se encuentran bajo la dependencia o direcci&oacute;n de:";
 choices[64]= new Array();
 choices[64][0] = "un &oacute;rgano superior";
 choices[64][1] = "un &oacute;rgano directivo";
 choices[64][2] = "un &oacute;rgano superior o directivo";
 choices[64][3] = "ninguna es correcta";
 answers[64] = choices[64][2];
 units[64] = "4, 7, 8, 9";
 comments[64] = "Id Pregunta: 795. Ley 40/2015";
 preguntaids[64] = 795


//  Id pregunta: 109 Año de creación de pregunta: 2016
 questions[65]= "66)  Big Data:";
 choices[65]= new Array();
 choices[65][0] = "Solo aplica a datos generados m&aacute;quina a m&aacute;quina (M2M)";
 choices[65][1] = "No puede emplearse para tratar datos no estructurados";
 choices[65][2] = "Suele utilizar tecnolog&iacute;as relacionales a la hora de analizar los datos";
 choices[65][3] = "Ninguna de las anteriores";
 answers[65] = choices[65][3];
 units[65] = "73";
 comments[65] = "Id Pregunta: 109. ";
 preguntaids[65] = 109


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


//  Id pregunta: 360 Año de creación de pregunta: 2016
 questions[67]= "68)  El Parlamento Europeo est&aacute; compuesto actualmente por:";
 choices[67]= new Array();
 choices[67][0] = "786 Diputados como m&aacute;ximo.";
 choices[67][1] = "600 Diputados como m&aacute;ximo.";
 choices[67][2] = "650 Diputados como m&aacute;ximo.";
 choices[67][3] = "732 Diputados como m&aacute;ximo.";
 answers[67] = choices[67][0];
 units[67] = "5";
 comments[67] = "Id Pregunta: 360. UNION EUROPEA";
 preguntaids[67] = 360


//  Id pregunta: 766 Año de creación de pregunta: 2016
 questions[68]= "69)  El sector p&uacute;blico institucional se integra por:";
 choices[68]= new Array();
 choices[68][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[68][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[68][2] = "las Universidades p&uacute;blicas";
 choices[68][3] = "todas son correctas";
 answers[68] = choices[68][3];
 units[68] = "4, 7, 8, 9";
 comments[68] = "Id Pregunta: 766. Ley 40/2015";
 preguntaids[68] = 766


//  Id pregunta: 64 Año de creación de pregunta: 2016
 questions[69]= "70)  De entre los siguientes sistemas operativos para dispositivos m&oacute;viles, indique cu&aacute;l est&aacute; afectado por la vulnerabilidad Stagefright:";
 choices[69]= new Array();
 choices[69][0] = "Windows Phone";
 choices[69][1] = "Blackberry";
 choices[69][2] = "iOS";
 choices[69][3] = "Android";
 answers[69] = choices[69][3];
 units[69] = "59";
 comments[69] = "Id Pregunta: 64. AGE A1 2015";
 preguntaids[69] = 64


//  Id pregunta: 363 Año de creación de pregunta: 2016
 questions[70]= "71)  Los Reglamentos no se caracterizan por:";
 choices[70]= new Array();
 choices[70][0] = "No poseer alcance general.";
 choices[70][1] = "Ser obligatorios.";
 choices[70][2] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[70][3] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 answers[70] = choices[70][0];
 units[70] = "5";
 comments[70] = "Id Pregunta: 363. UNION EUROPEA";
 preguntaids[70] = 363


//  Id pregunta: 373 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Cu&aacute;ntos Abogados Generales asisten al Tribunal Superior de Justicia?:";
 choices[71]= new Array();
 choices[71][0] = "Nueve.";
 choices[71][1] = "Diez.";
 choices[71][2] = "Siete.";
 choices[71][3] = "Ocho.";
 answers[71] = choices[71][3];
 units[71] = "5";
 comments[71] = "Id Pregunta: 373. UNION EUROPEA";
 preguntaids[71] = 373


//  Id pregunta: 242 Año de creación de pregunta: 2016
 questions[72]= "73)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, es competencia del Rey:";
 choices[72]= new Array();
 choices[72][0] = "Refrendar los actos del Presidente de Gobierno.";
 choices[72][1] = "Previa autorizaci&oacute;n del Presidente de Gobierno, declarar la guerra y hacer la paz.";
 choices[72][2] = "El Alto Patronazgo de las Reales Academias.";
 choices[72][3] = "Sancionar y publicar las leyes.";
 answers[72] = choices[72][2];
 units[72] = "1";
 comments[72] = "Id Pregunta: 242. CONSTITUCION1978";
 preguntaids[72] = 242


//  Id pregunta: 731 Año de creación de pregunta: 2016
 questions[73]= "74)  Indique cual de los siguientes no forma parte del vocabulario de scrum";
 choices[73]= new Array();
 choices[73][0] = "Burn-up chart";
 choices[73][1] = "Arquitectural Skype";
 choices[73][2] = "Burn-down chart";
 choices[73][3] = "Definition of done";
 answers[73] = choices[73][1];
 units[73] = "34, 84";
 comments[73] = "Id Pregunta: 731. Metodologias &aacute;giles";
 preguntaids[73] = 731


//  Id pregunta: 676 Año de creación de pregunta: 2016
 questions[74]= "75)  En referencia a la implantaci&oacute;n de la interoperabilidad de la receta electr&oacute;nica:";
 choices[74]= new Array();
 choices[74][0] = "Permite los ciudadanos retiren sus medicamentos en las farmacias de fuera de la Comunidad Aut&oacute;noma en la que hayan sido recetados.";
 choices[74][1] = "Favorece la seguridad del paciente, al incorporar sistemas online de ayuda a la prescripci&oacute;n, que ayudan a la detecci&oacute;n de interaciones medicamentosas o duplicidades terap&eacute;uticas.";
 choices[74][2] = "Facilita al m&eacute;dico el seguimiento de la adherencia al tratamiento por parte del paciente.";
 choices[74][3] = "Todas las anteriores son correctas.";
 answers[74] = choices[74][3];
 units[74] = "47";
 comments[74] = "Id Pregunta: 676. Receta electr&oacute;nica";
 preguntaids[74] = 676


