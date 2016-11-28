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

//  Id pregunta: 560 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Cu&aacute;ndo ha sido aprobada la Agenda Digital para Espa&ntilde;a?";
 choices[0]= new Array();
 choices[0][0] = "En 2015";
 choices[0][1] = "En 2013";
 choices[0][2] = "En 2016";
 choices[0][3] = "En 2007";
 answers[0] = choices[0][1];
 units[0] = "19";
 comments[0] = "Id Pregunta: 560. Agenda Digital";


//  Id pregunta: 766 Año de creación de pregunta: 2016
 questions[1]= "2)  El sector p&uacute;blico institucional se integra por:";
 choices[1]= new Array();
 choices[1][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[1][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[1][2] = "las Universidades p&uacute;blicas";
 choices[1][3] = "todas son correctas";
 answers[1] = choices[1][3];
 units[1] = "4, 7, 8, 9";
 comments[1] = "Id Pregunta: 766. Ley 40/2015";


//  Id pregunta: 114 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Qu&eacute; es la Garant&iacute;a Juvenil?";
 choices[2]= new Array();
 choices[2][0] = "Una iniciativa europea que pretende facilitar el acceso de los j&oacute;venes al mercado de trabajo ofreci&eacute;ndoles una oferta de empleo, de educaci&oacute;n o formaci&oacute;n tras haber finalizado sus estudios o quedar desempleados";
 choices[2][1] = "Un Plan que permite la concesi&oacute;n de subvenciones a j&oacute;venes para facilitar el alquiler de su vivienda habitual.";
 choices[2][2] = "Un Plan que concede cr&eacute;ditos en condiciones ventajosas a j&oacute;venes emprendedores";
 choices[2][3] = "Una inciativa europea que facilita a los j&oacute;venes el acceso a las nuevas tecnolog&iacute;as";
 answers[2] = choices[2][0];
 units[2] = "15";
 comments[2] = "Id Pregunta: 114. ";


//  Id pregunta: 643 Año de creación de pregunta: 2016
 questions[3]= "4)  La estructura de un Directorio Activo se basa en los siguientes conceptos:";
 choices[3]= new Array();
 choices[3][0] = "Directorios, Unidades f&iacute;sicas y Usuarios.";
 choices[3][1] = "Dominio, Unidad Organizativa, Grupos y Objetos.";
 choices[3][2] = "Unidades f&iacute;sicas, Unidades l&oacute;gicas y Directorios.";
 choices[3][3] = "Ficheros, Directorios, Particiones y Unidades.";
 answers[3] = choices[3][1];
 units[3] = "58";
 comments[3] = "Id Pregunta: 643. Junta de Extremadura A1 2015";


//  Id pregunta: 313 Año de creación de pregunta: 2016
 questions[4]= "5)  Indique qui&eacute;n propone al candidato para el cargo de Presidente de la Comisi&oacute;n Europea:";
 choices[4]= new Array();
 choices[4][0] = "El Consejo Europeo.";
 choices[4][1] = "El Consejo de la Uni&oacute;n Europea.";
 choices[4][2] = "Los miembros de la Comisi&oacute;n Europea.";
 choices[4][3] = "El Parlamento Europeo.";
 answers[4] = choices[4][0];
 units[4] = "5";
 comments[4] = "Id Pregunta: 313. UNION EUROPEA";


//  Id pregunta: 618 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;A qui&eacute;n est&aacute; destinado principalmente las Pautas de Accesibilidad al Contenido en la Web (WCAG)?";
 choices[5]= new Array();
 choices[5][0] = "A desarrolladores de navegadores web y reproductores multimedia.";
 choices[5][1] = "A desarrolladores de herramientas de autor, como herramientas de creaci&oacute;n de p&aacute;ginas web o de creaci&oacute;n de archivos multimedia.";
 choices[5][2] = "A desarrolladores de herramientas de evaluaci&oacute;n de la accesibilidad web.";
 choices[5][3] = "Todas las respuestas son correctas.";
 answers[5] = choices[5][2];
 units[5] = "42";
 comments[5] = "Id Pregunta: 618. Junta de Extremadura A1 2015";


//  Id pregunta: 684 Año de creación de pregunta: 2016
 questions[6]= "7)  Indique cu&aacute;l es la Directiva europea que queda derogada por el Reglamento (UE) 910/2014";
 choices[6]= new Array();
 choices[6][0] = "Directiva 95/46/CE";
 choices[6][1] = "Directiva 1999/93/CE";
 choices[6][2] = "Directiva 2000/31/CE";
 choices[6][3] = "Directiva 2003/98/CE";
 answers[6] = choices[6][1];
 units[6] = "77";
 comments[6] = "Id Pregunta: 684. Art&iacute;culo 50 del Reglamento 910/2014";


//  Id pregunta: 666 Año de creación de pregunta: 2016
 questions[7]= "8)  De acuerdo a la Ley 39/2015, el formato del expediente administrativo ser&aacute;:";
 choices[7]= new Array();
 choices[7][0] = "Siempre en formato electr&oacute;nico.";
 choices[7][1] = "Siempre en formato papel.";
 choices[7][2] = "Las personas f&iacute;sicas podr&aacute;n elegir en todo momento el formato del expediente administrativo.";
 choices[7][3] = "La ley no regula el formato del expediente.";
 answers[7] = choices[7][0];
 units[7] = "7";
 comments[7] = "Id Pregunta: 666. Art&iacute;culo 70 de la Ley 39/2015";


//  Id pregunta: 29 Año de creación de pregunta: 2016
 questions[8]= "9)  De acuerdo con el art&iacute;culo 62 de la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, se&ntilde;ale la respuesta correcta:";
 choices[8]= new Array();
 choices[8][0] = "El uso del dominio p&uacute;blico radioel&eacute;ctrico s&oacute;lo puede ser de dos tipos: especial o privativo.";
 choices[8][1] = "El uso com&uacute;n del dominio p&uacute;blico radioel&eacute;ctrico precisa de t&iacute;tulo habilitante.";
 choices[8][2] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico es el que se realiza mediante la explotaci&oacute;n en exclusiva, o por un n&uacute;mero limitado de usuarios, de determinadas frecuencias en un mismo &aacute;mbito f&iacute;sico de aplicaci&oacute;n.";
 choices[8][3] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico es el que se lleve a cabo de las bandas de frecuencias habilitadas para su explotaci&oacute;n de forma compartida, sin limitaci&oacute;n de n&uacute;mero de operadores o usuarios y con las condiciones t&eacute;cnicas y para los servicios que se establezcan en cada caso.";
 answers[8] = choices[8][2];
 units[8] = "121";
 comments[8] = "Id Pregunta: 29. AGE A1 2015";


//  Id pregunta: 0 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Cu&aacute;l de los siguientes NO es un objetivo del Plan de Transformaci&oacute;n Digital de la AGE?";
 choices[9]= new Array();
 choices[9][0] = "Consolidar el tejido productivo nacional apoyando el efectivo despliegue de la Sociedad de la Informaci&oacute;n.";
 choices[9][1] = "Conseguir una mayor eficiencia en los servicios TIC comunes de la Administraci&oacute;n.";
 choices[9][2] = "Implantar una gesti&oacute;n corporativa inteligente de la informaci&oacute;n y los datos.";
 choices[9][3] = "Adoptar una estrategia corporativa de seguridad y usabilidad.";
 answers[9] = choices[9][0];
 units[9] = "26";
 comments[9] = "Id Pregunta: 0. AGE A1 2015";


//  Id pregunta: 256 Año de creación de pregunta: 2016
 questions[10]= "11)  El Art&iacute;culo 21 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que:";
 choices[10]= new Array();
 choices[10][0] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y con armas.";
 choices[10][1] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica siempre dentro del derecho de manifestaci&oacute;n previa autorizaci&oacute;n.";
 choices[10][2] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y sin armas.";
 choices[10][3] = "No se reconoce expl&iacute;citamente tal derecho de reuni&oacute;n.";
 answers[10] = choices[10][0];
 units[10] = "1";
 comments[10] = "Id Pregunta: 256. CONSTITUCION1978";


//  Id pregunta: 626 Año de creación de pregunta: 2016
 questions[11]= "12)  En Java, la sentencia try-catch-throw se utiliza:";
 choices[11]= new Array();
 choices[11][0] = "En sentencias switch para alterar el control de flujo.";
 choices[11][1] = "Para manejar excepciones.";
 choices[11][2] = "Como la sentencia while, para ejecutar bucles.";
 choices[11][3] = "Para devolver el control del programa al final de un m&eacute;todo.";
 answers[11] = choices[11][1];
 units[11] = "64";
 comments[11] = "Id Pregunta: 626. Junta de Extremadura A1 2015";


//  Id pregunta: 443 Año de creación de pregunta: 2016
 questions[12]= "13)  Respecto a las comunicaciones y notificaciones electr&oacute;nicas:";
 choices[12]= new Array();
 choices[12][0] = "El servicio SIM se utiliza para el env&iacute;o de notificaciones electr&oacute;nicas.";
 choices[12][1] = "El Servicio compartido la gesti&oacute;n de notificaciones Notific@, ser&aacute; de uso obligatorio para la AGE y sus OOPP en 2017.";
 choices[12][2] = "La plataforma Notific@, recibe desde los organismos emisores, las comunicaciones y adem&aacute;s de aportar otros valores a&ntilde;adidos, las pone a disposici&oacute;n de los destinatarios en la Carpeta Ciudadana.";
 choices[12][3] = "El servicio SIM, que se ha integrado en el Servicio compartido de gesti&oacute;n de notificaciones, proporciona a los ciudadanos y empresas un buz&oacute;n seguro.";
 answers[12] = choices[12][1];
 units[12] = "43";
 comments[12] = "Id Pregunta: 443. SERVICIOS COMUNES";


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


//  Id pregunta: 574 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares de la serie IEEE 802.11 se conoce como Fast Basic Service Set Transition, el cual est&aacute; enfocado a permitir la conexi&oacute;n continua de clientes en movimiento?";
 choices[14]= new Array();
 choices[14][0] = "IEEE 802.11p";
 choices[14][1] = "IEEE 802.11r";
 choices[14][2] = "IEEE 802.11v";
 choices[14][3] = "IEEE 802.11w";
 answers[14] = choices[14][1];
 units[14] = "112";
 comments[14] = "Id Pregunta: 574. Tema 112. TAI 2016.";


//  Id pregunta: 110 Año de creación de pregunta: 2016
 questions[15]= "16)  La Poblaci&oacute;n Activa incluye a:";
 choices[15]= new Array();
 choices[15][0] = "S&oacute;lo a aquellas personas que son empleados por cuenta ajena";
 choices[15][1] = "S&oacute;lo a aquellas personas que son empleadas por cuenta propia o ajena";
 choices[15][2] = "Aquellas personas que tienen empleo y a los desempleados que buscan un empleo de forma activa";
 choices[15][3] = "Todo aquel que desea trabajar";
 answers[15] = choices[15][2];
 units[15] = "15";
 comments[15] = "Id Pregunta: 110. ";


//  Id pregunta: 380 Año de creación de pregunta: 2016
 questions[16]= "17)  La acreditaci&oacute;n de las situaciones de violencia de g&eacute;nero ejercida sobre las trabajadoras, seg&uacute;n indica la Ley Org&aacute;nica 1/2004 de Medidas de Protecci&oacute;n Integral contra la violencia de g&eacute;nero, se produce mediante:";
 choices[16]= new Array();
 choices[16][0] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima.";
 choices[16][1] = "La correspondiente denuncia presentada en Comisar&iacute;a o Juzgado.";
 choices[16][2] = "La orden de alejamiento a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal que indique la existencia de indicios de violencia de g&eacute;nero.";
 choices[16][3] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal en el que se indique la existencia de indicios de violencia de g&eacute;nero, hasta que se dicte la orden de protecci&oacute;n.";
 answers[16] = choices[16][3];
 units[16] = "14";
 comments[16] = "Id Pregunta: 380. POLITICAS DE IGUALDAD";


//  Id pregunta: 303 Año de creación de pregunta: 2016
 questions[17]= "18)  Indique el n&uacute;mero de miembros con que cuenta la Comisi&oacute;n Europea en la actualidad:";
 choices[17]= new Array();
 choices[17][0] = "Veinticinco.";
 choices[17][1] = "Veintisiete.";
 choices[17][2] = "Veintinueve.";
 choices[17][3] = "Cuarenta y uno.";
 answers[17] = choices[17][1];
 units[17] = "5";
 comments[17] = "Id Pregunta: 303. UNION EUROPEA";


//  Id pregunta: 631 Año de creación de pregunta: 2016
 questions[18]= "19)  Seg&uacute;n la Ley de Protecci&oacute;n de Datos de Car&aacute;cter Personal, no podr&aacute;n realizarse transferencias de datos de car&aacute;cter personal a pa&iacute;ses que no proporcionen un nivel de protecci&oacute;n equiparable al de esta Ley. &iquest;Qui&eacute;n se encarga de evaluar el nivel adecuado de protecci&oacute;n que ofrece el pa&iacute;s de destino de los datos?";
 choices[18]= new Array();
 choices[18][0] = "El Ministerio de Asuntos Exteriores junto con el Ministerio de Justicia.";
 choices[18][1] = "El responsable de la custodia de los datos enviados.";
 choices[18][2] = "La Agencia Europea de Cooperaci&oacute;n.";
 choices[18][3] = "La Agencia de Protecci&oacute;n de Datos.";
 answers[18] = choices[18][3];
 units[18] = "35";
 comments[18] = "Id Pregunta: 631. Junta de Extremadura A1 2015";


//  Id pregunta: 269 Año de creación de pregunta: 2016
 questions[19]= "20)  El T&iacute;tulo Segundo de la Constituci&oacute;n Espa&ntilde;ola tiene:";
 choices[19]= new Array();
 choices[19][0] = "Diez art&iacute;culos.";
 choices[19][1] = "Nueve art&iacute;culos.";
 choices[19][2] = "Once art&iacute;culos.";
 choices[19][3] = "Ocho art&iacute;culos.";
 answers[19] = choices[19][0];
 units[19] = "1";
 comments[19] = "Id Pregunta: 269. CONSTITUCION1978";


//  Id pregunta: 677 Año de creación de pregunta: 2016
 questions[20]= "21)  En referencia al proyecto ANDES, para la comunicaci&oacute;n telem&aacute;tica de Nacimientos desde Centros Sanitarios a Registros Civiles, indique cual de las siguientes afirmaciones es falsa:";
 choices[20]= new Array();
 choices[20][0] = "Tiene sustento legal de acuerdo a la Ley 19/2015, de 13 de julio, de medidas de reforma administrativa en el &aacute;mbito de la Administraci&oacute;n de Justicia y del Registro Civil.";
 choices[20][1] = "Se inicia a partir de su propuesta en CORA (Comisi&oacute;n para la Reforma de las Administraciones P&uacute;blicas).";
 choices[20][2] = "Reutiliza el servicio horizontal ACCEDA en modo cloud, lo cual ha facilitado la pronta puesta en marcha de la soluci&oacute;n.";
 choices[20][3] = "La utilizaci&oacute;n de ANDES por parte de los hospitales es completamente transparente, sin necesidad de realizar pasos previos para su despliegue.";
 answers[20] = choices[20][3];
 units[20] = "47";
 comments[20] = "Id Pregunta: 677. Inscripci&oacute;n autom&aacute;tica nacimientos";


//  Id pregunta: 240 Año de creación de pregunta: 2016
 questions[21]= "22)  Las dos C&aacute;maras que configuran las Cortes Generales:";
 choices[21]= new Array();
 choices[21][0] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a diciembre, y de febrero a julio.";
 choices[21][1] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a noviembre, y de febrero a junio.";
 choices[21][2] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la Diputaci&oacute;n Permanente.";
 choices[21][3] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 answers[21] = choices[21][0];
 units[21] = "1";
 comments[21] = "Id Pregunta: 240. CONSTITUCION1978";


//  Id pregunta: 327 Año de creación de pregunta: 2016
 questions[22]= "23)  La idea de una Europa unida tiene sus antecedentes en el siglo:";
 choices[22]= new Array();
 choices[22][0] = "X.";
 choices[22][1] = "XIX.";
 choices[22][2] = "XV.";
 choices[22][3] = "XIII.";
 answers[22] = choices[22][1];
 units[22] = "5";
 comments[22] = "Id Pregunta: 327. UNION EUROPEA";


//  Id pregunta: 649 Año de creación de pregunta: 2016
 questions[23]= "24)  En Itil V3, entre los factores que hay que tener en cuenta en la evaluaci&oacute;n de herramientas de Gesti&oacute;n del Servicio se encuentran:";
 choices[23]= new Array();
 choices[23][0] = "Estructura, tratamiento, integraci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[23][1] = "structura, salvaguarda, integraci&oacute;n de datos, flexibilidad de implementaci&oacute;n, uso y comunicaci&oacute;n de datos.";
 choices[23][2] = "Estructura, tratamiento, inspecci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[23][3] = "Responsabilidad, tratamiento, inspecci&oacute;n de datos y soporte a la monitorizaci&oacute;n de los niveles de servicio.";
 answers[23] = choices[23][0];
 units[23] = "101";
 comments[23] = "Id Pregunta: 649. Junta de Extremadura A1 2015";


//  Id pregunta: 12 Año de creación de pregunta: 2016
 questions[24]= "25)  Indique cu&aacute;l de las siguientes proposiciones es cierta:";
 choices[24]= new Array();
 choices[24][0] = "AngularJS es un framework de JavaScript de c&oacute;digo abierto que sigue el patr&oacute;n de dise&ntilde;o MVC.";
 choices[24][1] = "PrimeFaces y RichFaces son librer&iacute;as que extienden el framework .NET de Microsoft.";
 choices[24][2] = "PrimeFaces es una extensi&oacute;n de AngularJS que permite la integraci&oacute;n de componentes RichFaces.";
 choices[24][3] = "El framework Spring es compatible con el uso delORM Hibernate, pero es incompatible con el uso de Java Server Faces en la capa de presentaci&oacute;n.";
 answers[24] = choices[24][0];
 units[24] = "62";
 comments[24] = "Id Pregunta: 12. AGE A1 2015";


//  Id pregunta: 466 Año de creación de pregunta: 2016
 questions[25]= "26)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, &iquest;existe la posibilidad de comprometer gastos para ejercicios futuros?";
 choices[25]= new Array();
 choices[25][0] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio futuro y 50% para los dem&aacute;s.";
 choices[25][1] = "No, los cr&eacute;ditos presupuestarios se agotan con el fin del ejercicio presupuestario.";
 choices[25][2] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio posterior; 60% para el segundo y 50% para tercero y cuarto.";
 choices[25][3] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 60% para el primer ejercicio futuro; 50% para el segundo y tercero y 40% para el cuarto.";
 answers[25] = choices[25][2];
 units[25] = "10";
 comments[25] = "Id Pregunta: 466. PRESUPUESTOS GENERALES";


//  Id pregunta: 568 Año de creación de pregunta: 2016
 questions[26]= "27)  Cuando decimos que la inversi&oacute;n extranjera en Espa&ntilde;a tiene un car&aacute;cter proc&iacute;clico, nos referimos a que:";
 choices[26]= new Array();
 choices[26][0] = "Aumenta cuando la econom&iacute;a est&aacute; en crecimiento, y se reduce cuando el pa&iacute;s entra en recesi&oacute;n";
 choices[26][1] = "Se reduce cuando la econom&iacute;a est&aacute; en crecimiento, y aumenta cuando el pa&iacute;s entra en recesi&oacute;n";
 choices[26][2] = "Aumenta cuando el pa&iacute;s entra en recesi&oacute;n, y aumenta cuando la econom&iacute;a est&aacute; en crecimiento";
 choices[26][3] = "Se reduce cuando el pa&iacute;s entra en recesi&oacute;n, y se reduce cuando la econom&iacute;a est&aacute; en crecimiento";
 answers[26] = choices[26][0];
 units[26] = "12";
 comments[26] = "Id Pregunta: 568. Modelo econ&oacute;mico";


//  Id pregunta: 117 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;Qui&eacute;n integra el Sistema Nacional de Empleo?";
 choices[27]= new Array();
 choices[27][0] = "El Servicio P&uacute;blico de Empleo Estatal y los servicios p&uacute;blicos de empleo de las comunidades aut&oacute;nomas";
 choices[27][1] = "&Uacute;nicamente los servicios p&uacute;blicos de empleo de las comunidades aut&oacute;nomas ";
 choices[27][2] = "&Uacute;nicamente el Servicio P&uacute;blico de Empleo Estatal";
 choices[27][3] = "El Servicio P&uacute;blico de Empleo Estatal m&aacute;s las ETT (Empresas de Trabajo Temporal) que quieran adherirse";
 answers[27] = choices[27][0];
 units[27] = "15";
 comments[27] = "Id Pregunta: 117. ";


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


//  Id pregunta: 490 Año de creación de pregunta: 2016
 questions[29]= "30)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, autorizar las transferencias entre distintas secciones presupuestarias como consecuencia de reorganizaciones administrativas, es una competencia de:";
 choices[29]= new Array();
 choices[29][0] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[29][1] = "El Gobierno.";
 choices[29][2] = "El Presidente del Gobierno.";
 choices[29][3] = "El Consejo de Ministros.";
 answers[29] = choices[29][1];
 units[29] = "10";
 comments[29] = "Id Pregunta: 490. PRESUPUESTOS GENERALES";


//  Id pregunta: 709 Año de creación de pregunta: 2016
 questions[30]= "31)  En base a la Ley 19/2013 de Transparencia, Acceso a la Informaci&oacute;n P&uacute;blica y Buen Gobierno se&ntilde;ale la afirmaci&oacute;n verdadera:";
 choices[30]= new Array();
 choices[30][0] = "El derecho de acceso a la informaci&oacute;n p&uacute;blica supone, entre otros, que el sujeto obligado a ello publique de forma peri&oacute;dica y actualizada la informaci&oacute;n cuyo conocimiento sea relevante para garantizar la transparencia de su actividad.";
 choices[30][1] = "Las entidades privadas no est&aacute;n sujetas a obligaciones de transparencia seg&uacute;n la Ley 19/2013.";
 choices[30][2] = "Se admitir&aacute;n a tr&aacute;mite, sin excepci&oacute;n, todas las solicitudes de acceso a la informaci&oacute;n por parte de los ciudadanos.";
 choices[30][3] = "El cumplimiento por la Administraci&oacute;n General del Estado de las obligaciones de publicidad activa ser&aacute; objeto de control por parte del CTBG.";
 answers[30] = choices[30][3];
 units[30] = "22";
 comments[30] = "Id Pregunta: 709. Ley de transparencia";


//  Id pregunta: 414 Año de creación de pregunta: 2016
 questions[31]= "32)  Los proyectos de disposiciones de car&aacute;cter general y los planes de especial relevancia econ&oacute;mica, que sometan a la aprobaci&oacute;n del Consejo de Ministros, incorporar&aacute;n:";
 choices[31]= new Array();
 choices[31][0] = "Un informe de impacto de g&eacute;nero.";
 choices[31][1] = "Un programa de igualdad de oportunidades.";
 choices[31][2] = "Un plan de Igualdad de Oportunidades.";
 choices[31][3] = "Un Decreto de Igualdad de Oportunidades.";
 answers[31] = choices[31][0];
 units[31] = "14";
 comments[31] = "Id Pregunta: 414. POLITICAS DE IGUALDAD";


//  Id pregunta: 351 Año de creación de pregunta: 2016
 questions[32]= "33)  La sede del Parlamento Europeo se encuentra en:";
 choices[32]= new Array();
 choices[32][0] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas.";
 choices[32][1] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas y la Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[32][2] = "La Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[32][3] = "Celebra todas sus sesiones en Bruselas.";
 answers[32] = choices[32][1];
 units[32] = "5";
 comments[32] = "Id Pregunta: 351. UNION EUROPEA";


//  Id pregunta: 795 Año de creación de pregunta: 2016
 questions[33]= "34)  Todos los &oacute;rganos de la Administraci&oacute;n General del Estado que no sean &oacute;rgano superior o directivo se encuentran bajo la dependencia o direcci&oacute;n de:";
 choices[33]= new Array();
 choices[33][0] = "un &oacute;rgano superior";
 choices[33][1] = "un &oacute;rgano directivo";
 choices[33][2] = "un &oacute;rgano superior o directivo";
 choices[33][3] = "ninguna es correcta";
 answers[33] = choices[33][2];
 units[33] = "4, 7, 8, 9";
 comments[33] = "Id Pregunta: 795. Ley 40/2015";


//  Id pregunta: 692 Año de creación de pregunta: 2016
 questions[34]= "35)  El Reglamento (UE) 910/2014 entra en vigor:";
 choices[34]= new Array();
 choices[34][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[34][1] = "A los 20 d&iacute;as de su publicaci&oacute;n en el Diario Oficial de la Uni&oacute;n Europea (DOUE)";
 choices[34][2] = "A partir del 1 de enero de 2015";
 choices[34][3] = "A partir del 1 de julio de 2016";
 answers[34] = choices[34][1];
 units[34] = "77";
 comments[34] = "Id Pregunta: 692. Art&iacute;culo 52 del Reglamento 910/2014";


//  Id pregunta: 540 Año de creación de pregunta: 2016
 questions[35]= "36)  Ser&aacute;/n interoperable/s con los registros electr&oacute;nicos generales y particulares de apoderamientos:";
 choices[35]= new Array();
 choices[35][0] = "los registros mercantiles";
 choices[35][1] = "los registros de la propiedad";
 choices[35][2] = "los protocolos notariales";
 choices[35][3] = "todas son correctas";
 answers[35] = choices[35][3];
 units[35] = "7";
 comments[35] = "Id Pregunta: 540. LEY 39/2015";


//  Id pregunta: 527 Año de creación de pregunta: 2016
 questions[36]= "37)  Cuando la condici&oacute;n de interesado derivase de alguna relaci&oacute;n jur&iacute;dica transmisible el derecho-habiente suceder&aacute; en tal condici&oacute;n:";
 choices[36]= new Array();
 choices[36][0] = "si el procedimiento no ha alcanzado la fase de instrucci&oacute;n";
 choices[36][1] = "si el procedimiento no ha alcanzado el tr&aacute;mite de audiencia";
 choices[36][2] = "si el procedimiento no ha alcanzado el tr&aacute;mite de informaci&oacute;n p&uacute;blica";
 choices[36][3] = "cualquiera que sea el estado del procedimiento";
 answers[36] = choices[36][3];
 units[36] = "7";
 comments[36] = "Id Pregunta: 527. LEY 39/2015";


//  Id pregunta: 33 Año de creación de pregunta: 2016
 questions[37]= "38)  Respecto al desarrollo empleando tecnolog&iacute;a Microsoft, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[37]= new Array();
 choices[37][0] = "WINAPI (Windows API) permite un acceso a alto nivel del sistema, directamente usable en cualquier lenguaje y entorno de programaci&oacute;n.";
 choices[37][1] = "El framework .NET se compone de una biblioteca de clases denominada FCL (Framework Class Library) y del entorno com&uacute;n de ejecuci&oacute;n CLR (Common Language Runtime).";
 choices[37][2] = "En .NET el resultado de la compilaci&oacute;n de las aplicaciones es un m&oacute;dulo ensamblado en formato de fichero PE32 o PE32+ (Windows portable executable) directamente ejecutable sobre el hardware.";
 choices[37][3] = "Los compiladores para CLR producen c&oacute;digo FL (Final Language) denominado c&oacute;digo administrado.";
 answers[37] = choices[37][1];
 units[37] = "63";
 comments[37] = "Id Pregunta: 33. AGE A1 2015";


//  Id pregunta: 458 Año de creación de pregunta: 2016
 questions[38]= "39)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los escenarios presupuestarios plurianuales contendr&aacute;n la distribuci&oacute;n org&aacute;nica de los recursos disponibles y se desarrollar&aacute;n en programas plurianuales, referidos a:";
 choices[38]= new Array();
 choices[38][0] = "a) Los cuatro ejercicios siguientes.";
 choices[38][1] = "b) El ejercicio siguiente.";
 choices[38][2] = "c) Los dos ejercicios siguientes.";
 choices[38][3] = "d) Los tres ejercicios siguientes.";
 answers[38] = choices[38][3];
 units[38] = "10";
 comments[38] = "Id Pregunta: 458. PRESUPUESTOS GENERALES";


//  Id pregunta: 515 Año de creación de pregunta: 2016
 questions[39]= "40)  La presente Ley se aplica al sector p&uacute;blico, que comprende (se&ntilde;ala la incorrecta):";
 choices[39]= new Array();
 choices[39][0] = "la Administraci&oacute;n General del Estado y las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[39][1] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[39][2] = "el sector p&uacute;blico institucional";
 choices[39][3] = "el sector privado corporativo";
 answers[39] = choices[39][3];
 units[39] = "7";
 comments[39] = "Id Pregunta: 515. LEY 39/2015";


//  Id pregunta: 32 Año de creación de pregunta: 2016
 questions[40]= "41)  El art&iacute;culo 16 del Esquema Nacional de Interoperabilidad establece las condiciones de licenciamiento aplicables en el &aacute;mbito de la reutilizaci&oacute;n y transferencia de tecnolog&iacute;a, &iquest;cu&aacute;l de las siguientes licencias recomienda expresamente aplicar, sin perjuicio de otras licencias que garanticen los derechos expuestos en el mencionado art&iacute;culo?";
 choices[40]= new Array();
 choices[40][0] = "ASF-AL (Apache License 2.0)";
 choices[40][1] = "EUPL (European Union Public License)";
 choices[40][2] = "LGPL (Lesser General Public License)";
 choices[40][3] = "MIT(MIT License)";
 answers[40] = choices[40][1];
 units[40] = "43";
 comments[40] = "Id Pregunta: 32. AGE A1 2015";


//  Id pregunta: 471 Año de creación de pregunta: 2016
 questions[41]= "42)  Conforme a la Ley General Presupuestaria, la clasificaci&oacute;n econ&oacute;mica agrupar&aacute; los cr&eacute;ditos por cap&iacute;tulos separando las operaciones corrientes, las de capital, las financieras y el Fondo de Contingencia de ejecuci&oacute;n presupuestaria. En los cr&eacute;ditos para operaciones de capital se incluir&aacute;n:";
 choices[41]= new Array();
 choices[41][0] = "Las inversiones financieras y las transferencias de capital.";
 choices[41][1] = "Las inversiones reales y financieras.";
 choices[41][2] = "Las transferencias de capital y las transferencias corrientes.";
 choices[41][3] = "Las transferencias de capital y las inversiones reales.";
 answers[41] = choices[41][3];
 units[41] = "10";
 comments[41] = "Id Pregunta: 471. PRESUPUESTOS GENERALES";


//  Id pregunta: 41 Año de creación de pregunta: 2016
 questions[42]= "43)  En cuanto al an&aacute;lisis DAFO:";
 choices[42]= new Array();
 choices[42][0] = "Considera detallada y exclusivamente factores internos.";
 choices[42][1] = "Es una t&eacute;cnica aplicable dentro de la Planificaci&oacute;n de Sistemas de Informaci&oacute;n.";
 choices[42][2] = "Considera detallada y exclusivamente factores externos.";
 choices[42][3] = "Se obtiene como resultado final del proceso de Planificaci&oacute;n Estrat&eacute;gica.";
 answers[42] = choices[42][1];
 units[42] = "83";
 comments[42] = "Id Pregunta: 41. AGE A1 2015";


//  Id pregunta: 625 Año de creación de pregunta: 2016
 questions[43]= "44)  En PHP 5.0, &iquest;cu&aacute;l es la regla para formar los nombres de las variables?";
 choices[43]= new Array();
 choices[43][0] = "Una variable debe comenzar con el signo $ seguido del nombre de la variable.";
 choices[43][1] = "Una variable debe comenzar con el signo &amp; seguido del nombre de la variable.";
 choices[43][2] = "Una variable debe comenzar por un car&aacute;cter num&eacute;rico.";
 choices[43][3] = "No hay regla para la formaci&oacute;n de los nombres de las variables.";
 answers[43] = choices[43][0];
 units[43] = "65";
 comments[43] = "Id Pregunta: 625. Junta de Extremadura A1 2015";


//  Id pregunta: 362 Año de creación de pregunta: 2016
 questions[44]= "45)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[44]= new Array();
 choices[44][0] = "Son actos normativos.";
 choices[44][1] = "Poseen alcance general.";
 choices[44][2] = "No son obligatorias.";
 choices[44][3] = "Son actos individuales no normativos.";
 answers[44] = choices[44][3];
 units[44] = "5";
 comments[44] = "Id Pregunta: 362. UNION EUROPEA";


//  Id pregunta: 729 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;C&uacute;al es el nombre de la reuni&oacute;n de SCRUM, donde se revisan los product backlog &iacute;tems?:";
 choices[45]= new Array();
 choices[45][0] = "Backlog refinement";
 choices[45][1] = "Backlog refinement";
 choices[45][2] = "A y b son correctas";
 choices[45][3] = "Ninguna de las anteriores";
 answers[45] = choices[45][2];
 units[45] = "34, 84";
 comments[45] = "Id Pregunta: 729. Metodologias &aacute;giles";


//  Id pregunta: 724 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Cu&aacute;l es la principal desventaja de sprints m&aacute;s largos?";
 choices[46]= new Array();
 choices[46][0] = "Permite reaccionar al equipo mejor ante imprevistos";
 choices[46][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[46][2] = "Se reduce el n&uacute;mero de reuniones de sprint";
 choices[46][3] = "Se puede desarrollar algo diferente a lo requerido y obtener el feedback del cliente m&aacute;s tarde.";
 answers[46] = choices[46][3];
 units[46] = "34, 84";
 comments[46] = "Id Pregunta: 724. Metodologias &aacute;giles";


//  Id pregunta: 599 Año de creación de pregunta: 2016
 questions[47]= "48)  La pol&iacute;tica de seguridad de alto nivel de la Organizaci&oacute;n:";
 choices[47]= new Array();
 choices[47][0] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, sin entrar en detalles acerca del COMO.";
 choices[47][1] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer y COMO se debe implementar.";
 choices[47][2] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 choices[47][3] = "Debe describir QUE se intenta proteger, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 answers[47] = choices[47][0];
 units[47] = "45";
 comments[47] = "Id Pregunta: 599. Junta de Extremadura A1 2015";


//  Id pregunta: 667 Año de creación de pregunta: 2016
 questions[48]= "49)  Seg&uacute;n la Ley 39/2015, un expediente administrativo contendr&aacute;:";
 choices[48]= new Array();
 choices[48][0] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios,la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento, y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[48][1] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios y un &iacute;ndice numerado de todos los documentos.";
 choices[48][2] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[48][3] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos, la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento  y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 answers[48] = choices[48][2];
 units[48] = "7";
 comments[48] = "Id Pregunta: 667. Art&iacute;culo 70 de la Ley 39/2015";


//  Id pregunta: 553 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;Cu&aacute;l es el &oacute;rgano t&eacute;cnico de cooperaci&oacute;n de la Administraci&oacute;n General del Estado, de las Administraciones de las Comunidades Aut&oacute;nomas y de las Entidades Locales en materia de administraci&oacute;n electr&oacute;nica definido en la ley 40/2015 de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[49]= new Array();
 choices[49][0] = "La Conferencia Sectorial de Telecomunicaciones y Sociedad de la Informaci&oacute;n";
 choices[49][1] = "El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica";
 choices[49][2] = "La Comisi&oacute;n Sectorial de administraci&oacute;n electr&oacute;nica";
 choices[49][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[49] = choices[49][2];
 units[49] = "26";
 comments[49] = "Id Pregunta: 553. Gobernanza TIC";


//  Id pregunta: 653 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Qu&eacute; propiedades ofrecen las conexiones VPN que usan protocolos como PPTP, L2TP/IPsec y SSTP?";
 choices[50]= new Array();
 choices[50][0] = "Encapsulaci&oacute;n y autenticaci&oacute;n.";
 choices[50][1] = "Encapsulaci&oacute;n y cifrado de datos.";
 choices[50][2] = "Autenticaci&oacute;n y cifrado de datos.";
 choices[50][3] = "Encapsulaci&oacute;n, autenticaci&oacute;n y cifrado de datos.";
 answers[50] = choices[50][3];
 units[50] = "120";
 comments[50] = "Id Pregunta: 653. Junta de Extremadura A1 2015";


//  Id pregunta: 210 Año de creación de pregunta: 2016
 questions[51]= "52)  De acuerdo con la Constituci&oacute;n espa&ntilde;ola, la declaraci&oacute;n del estado de excepci&oacute;n corresponde a:";
 choices[51]= new Array();
 choices[51][0] = "El rey, a propuesta del Gobierno.";
 choices[51][1] = "El Gobierno, mediante Decreto acordado en Consejo de Ministros, previa autorizaci&oacute;n del Congreso de los Diputados.";
 choices[51][2] = "El Congreso de los Diputados, a propuesta del Consejo de Ministros.";
 choices[51][3] = "Las Cortes Generales, por mayor&iacute;a de los miembros de cada C&aacute;mara.";
 answers[51] = choices[51][1];
 units[51] = "1";
 comments[51] = "Id Pregunta: 210. CONSTITUCION1978";


//  Id pregunta: 218 Año de creación de pregunta: 2016
 questions[52]= "53)  Seg&uacute;n el T&iacute;tulo III &quot;De las Cortes Generales&quot; de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras podr&aacute;n:";
 choices[52]= new Array();
 choices[52][0] = "Recibir peticiones individuales y colectivas, siempre por escrito, quedando prohibida la presentaci&oacute;n directa por manifestaciones ciudadanas.";
 choices[52][1] = "Delegar en las Comisiones Legislativas Permanentes la aprobaci&oacute;n de proyectos o proposiciones de ley relativas a cuestiones internacionales.";
 choices[52][2] = "Reunirse en sesi&oacute;n extraordinaria a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 choices[52][3] = "Nombrar conjuntamente Comisiones de Investigaci&oacute;n sobre asuntos de inter&eacute;s p&uacute;blico. Sus conclusiones ser&aacute;n vinculantes para los Tribunales.";
 answers[52] = choices[52][0];
 units[52] = "1";
 comments[52] = "Id Pregunta: 218. CONSTITUCION1978";


//  Id pregunta: 306 Año de creación de pregunta: 2016
 questions[53]= "54)  Componen la Comisi&oacute;n Europea:";
 choices[53]= new Array();
 choices[53][0] = "Un Comisario por cada Estado miembro.";
 choices[53][1] = "Uno o dos Comisarios por cada Estado miembro, dependiendo de las caracter&iacute;sticas del Estado.";
 choices[53][2] = "Dos Comisarios por cada Estado miembro.";
 choices[53][3] = "Los Ministros de Asuntos Exteriores de cada Estado miembro.";
 answers[53] = choices[53][0];
 units[53] = "5";
 comments[53] = "Id Pregunta: 306. UNION EUROPEA";


//  Id pregunta: 784 Año de creación de pregunta: 2016
 questions[54]= "55)  La Administraci&oacute;n General del Estado act&uacute;a y se organiza de acuerdo con los principios establecidos en el art&iacute;culo 3, as&iacute; como los de:";
 choices[54]= new Array();
 choices[54][0] = "desconcentraci&oacute;n funcional y descentralizaci&oacute;n funcional y territorial";
 choices[54][1] = "descentralizaci&oacute;n territorial y desconcentraci&oacute;n funcional y territorial";
 choices[54][2] = "descentralizaci&oacute;n funcional y desconcentraci&oacute;n funcional y territorial";
 choices[54][3] = "desconcentraci&oacute;n territorial y descentralizaci&oacute;n funcional y territorial";
 answers[54] = choices[54][2];
 units[54] = "4, 7, 8, 9";
 comments[54] = "Id Pregunta: 784. Ley 40/2015";


//  Id pregunta: 565 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Qu&eacute; fen&oacute;meno NO ha puesto de manifiesto la crisis econ&oacute;mica?";
 choices[55]= new Array();
 choices[55][0] = "Tasa de paro estructural alt&iacute;sima";
 choices[55][1] = "Excesiva estabilidad de empleo";
 choices[55][2] = "An&eacute;mico crecimiento de la productividad";
 choices[55][3] = "Existencia de una importante econom&iacute;a sumergida";
 answers[55] = choices[55][1];
 units[55] = "12";
 comments[55] = "Id Pregunta: 565. Modelo econ&oacute;mico";


//  Id pregunta: 845 Año de creación de pregunta: 2016
 questions[56]= "57)  Respecto a la reutilizaci&oacute;n de sistemas y aplicaciones de propiedad de la Administraci&oacute;n:";
 choices[56]= new Array();
 choices[56][0] = "Las Administraciones pondr&aacute;n siempre a disposici&oacute;n de cualquiera de ellas que lo solicite las aplicaciones, desarrolladas por sus servicios o que hayan sido objeto de contrataci&oacute;n y de cuyos derechos de propiedad intelectual sean titulares.";
 choices[56][1] = "Las aplicaciones a las que se refiere el apartado anterior podr&aacute;n ser declaradas como de fuentes abiertas, cuando de ello se derive una mayor transparencia en el funcionamiento de la Administraci&oacute;n P&uacute;blica o se fomente con ello la incorporaci&oacute;n de los ciudadanos a la Sociedad de la informaci&oacute;n.";
 choices[56][2] = "Las Administraciones P&uacute;blicas, con car&aacute;cter posterior a la adquisici&oacute;n, desarrollo o al mantenimiento a lo largo de todo el ciclo de vida de una aplicaci&oacute;n, tanto si se realiza con medios propios o por la contrataci&oacute;n de los servicios correspondientes, deber&aacute;n consultar en el directorio general de aplicaciones.";
 choices[56][3] = "En el directorio general de aplicaciones constar&aacute;n las aplicaciones disponibles de la Administraci&oacute;n General del Estado.";
 answers[56] = choices[56][1];
 units[56] = "4, 7, 8, 9";
 comments[56] = "Id Pregunta: 845. Ley 40/2015";


//  Id pregunta: 803 Año de creación de pregunta: 2016
 questions[57]= "58)  La organizaci&oacute;n en Departamentos ministeriales no obsta a la existencia de:";
 choices[57]= new Array();
 choices[57][0] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[57][1] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 choices[57][2] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[57][3] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 answers[57] = choices[57][3];
 units[57] = "4, 7, 8, 9";
 comments[57] = "Id Pregunta: 803. Ley 40/2015";


//  Id pregunta: 195 Año de creación de pregunta: 2016
 questions[58]= "59)  La potestad reglamentaria constitucionalmente corresponde:";
 choices[58]= new Array();
 choices[58][0] = "Al Gobierno.";
 choices[58][1] = "A las Cortes Generales.";
 choices[58][2] = "Al Poder Judicial.";
 choices[58][3] = "Al Congreso de los Diputados.";
 answers[58] = choices[58][0];
 units[58] = "1";
 comments[58] = "Id Pregunta: 195. CONSTITUCION1978";


//  Id pregunta: 483 Año de creación de pregunta: 2016
 questions[59]= "60)  A tenor del art&iacute;culo 48 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, podr&aacute; ser diferido el vencimiento de la obligaci&oacute;n de pago del precio de compra de bienes inmuebles adquiridos directamente cuyo importe excede de:";
 choices[59]= new Array();
 choices[59][0] = "Cuatro millones de euros.";
 choices[59][1] = "Seis millones de euros.";
 choices[59][2] = "Siete millones de euros.";
 choices[59][3] = "Cinco millones de euros.";
 answers[59] = choices[59][1];
 units[59] = "10";
 comments[59] = "Id Pregunta: 483. PRESUPUESTOS GENERALES";


//  Id pregunta: 529 Año de creación de pregunta: 2016
 questions[60]= "61)  Los interesados con capacidad de obrar podr&aacute;n actuar por medio de representante:";
 choices[60]= new Array();
 choices[60][0] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 choices[60][1] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[60][2] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[60][3] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 answers[60] = choices[60][2];
 units[60] = "7";
 comments[60] = "Id Pregunta: 529. LEY 39/2015";


//  Id pregunta: 691 Año de creación de pregunta: 2016
 questions[61]= "62)  El Reglamento (UE) 910/2014 deroga la Directiva 1999/93/CE con efectos a partir de:";
 choices[61]= new Array();
 choices[61][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[61][1] = "1 de enero de 2015";
 choices[61][2] = "1 de enero de 2016";
 choices[61][3] = "1 de julio de 2016";
 answers[61] = choices[61][3];
 units[61] = "77";
 comments[61] = "Id Pregunta: 691. Art&iacute;culo 50 del Reglamento 910/2014";


//  Id pregunta: 388 Año de creación de pregunta: 2016
 questions[62]= "63)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[62]= new Array();
 choices[62][0] = "Indirecta.";
 choices[62][1] = "Directa.";
 choices[62][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[62][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[62] = choices[62][1];
 units[62] = "14";
 comments[62] = "Id Pregunta: 388. POLITICAS DE IGUALDAD";


//  Id pregunta: 253 Año de creación de pregunta: 2016
 questions[63]= "64)  La Constituci&oacute;n Espa&ntilde;ola establece sobre la inform&aacute;tica que:";
 choices[63]= new Array();
 choices[63][0] = "La Ley potenciar&aacute; el uso de la inform&aacute;tica para garantizar la libertad de residencia y las transacciones electr&oacute;nicas en el marco de la econom&iacute;a de mercado y la planificaci&oacute;n del desarrollo econ&oacute;mico nacional.";
 choices[63][1] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el secreto de las comunicaciones, la informaci&oacute;n veraz y la solidaridad entre todos los ciudadanos.";
 choices[63][2] = "En la Constituci&oacute;n Espa&ntilde;ola de 1978 no se hace referencia expresa a la inform&aacute;tica.";
 choices[63][3] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el honor y la intimidad personal y familiar de los ciudadanos y el pleno ejercicio de sus derechos.";
 answers[63] = choices[63][3];
 units[63] = "1";
 comments[63] = "Id Pregunta: 253. CONSTITUCION1978";


//  Id pregunta: 108 Año de creación de pregunta: 2016
 questions[64]= "65)  Son proyectos de Apache relacionados con Big Data:";
 choices[64]= new Array();
 choices[64][0] = "Hadoop";
 choices[64][1] = "Spark";
 choices[64][2] = "A) y B)";
 choices[64][3] = "Niguno de los anteriores";
 answers[64] = choices[64][2];
 units[64] = "73";
 comments[64] = "Id Pregunta: 108. ";


//  Id pregunta: 292 Año de creación de pregunta: 2016
 questions[65]= "66)  Indique la afirmaci&oacute;n correcta relativa al Parlamento Europeo:";
 choices[65]= new Array();
 choices[65][0] = "Se reunir&aacute; con previa convocatoria el segundo martes de marzo.";
 choices[65][1] = "Se reunir&aacute; sin necesidad de previa convocatoria el segundo martes de marzo.";
 choices[65][2] = "Se reunir&aacute; la segunda semana de enero con previa convocatoria.";
 choices[65][3] = "Se reunir&aacute; la tercera semana de enero sin previa convocatoria.";
 answers[65] = choices[65][1];
 units[65] = "5";
 comments[65] = "Id Pregunta: 292. UNION EUROPEA";


//  Id pregunta: 100 Año de creación de pregunta: 2016
 questions[66]= "67)  Entre los tipos de Bases de Datos NoSQL no se encuentran:";
 choices[66]= new Array();
 choices[66][0] = "Bases de datos orientadas a filas";
 choices[66][1] = "Bases de datos orientadas a documentos";
 choices[66][2] = "Bases de datos de clave/valor";
 choices[66][3] = "Bases de datos orientadas a objetos";
 answers[66] = choices[66][0];
 units[66] = "73";
 comments[66] = "Id Pregunta: 100. ";


//  Id pregunta: 818 Año de creación de pregunta: 2016
 questions[67]= "68)  Los Directores Insulares de la Administraci&oacute;n General del Estado (se&ntilde;ala la incorrecta):";
 choices[67]= new Array();
 choices[67][0] = "ser&aacute;n nombrados por el Delegado del Gobierno mediante el procedimiento de concurso-oposici&oacute;n";
 choices[67][1] = "ser&aacute;n nombrados entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades Locales, pertenecientes a Cuerpos o Escalas clasificados como Subgrupo A1";
 choices[67][2] = "dependen jer&aacute;rquicamente del Delegado del Gobierno en la Comunidad Aut&oacute;noma o del Subdelegado del Gobierno en la provincia, cuando este cargo exista";
 choices[67][3] = "ejercen, en su &aacute;mbito territorial, las competencias atribuidas por esta Ley a los Subdelegados del Gobierno en las provincias";
 answers[67] = choices[67][0];
 units[67] = "4, 7, 8, 9";
 comments[67] = "Id Pregunta: 818. Ley 40/2015";


//  Id pregunta: 186 Año de creación de pregunta: 2016
 questions[68]= "69)  En cuanto a las fuentes del derecho, las normas jur&iacute;dicas contenidas en los tratados internacionales:";
 choices[68]= new Array();
 choices[68][0] = "ser&aacute;n de aplicaci&oacute;n directa en Espa&ntilde;a-";
 choices[68][1] = "ser&aacute;n de aplicaci&oacute;n directa y pasar&aacute;n a formar parte del ordenamiento interno una vez ratificadas por Espa&ntilde;a.";
 choices[68][2] = "no ser&aacute;n de aplicaci&oacute;n directa en Espapa en tanto no hayan pasado a formar parte ddel ordenamiento interno mediante su publicaci&oacute;n oficial en Espa&ntilde;a.";
 choices[68][3] = "ratificados por Espala y publicadas en el BOE, no son fuente de derecho.";
 answers[68] = choices[68][2];
 units[68] = "1";
 comments[68] = "Id Pregunta: 186. CONSTITUCION1978";


//  Id pregunta: 585 Año de creación de pregunta: 2016
 questions[69]= "70)  &iquest;Qu&eacute; establece Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[69]= new Array();
 choices[69][0] = "Los principios rectores";
 choices[69][1] = "Los objetivos estrat&eacute;gicos y las acciones para alcanzarlos";
 choices[69][2] = "Los hitos para su desarrollo gradual";
 choices[69][3] = "Todos los anteriores";
 answers[69] = choices[69][3];
 units[69] = "19";
 comments[69] = "Id Pregunta: 585. Estrategia TIC";


//  Id pregunta: 636 Año de creación de pregunta: 2016
 questions[70]= "71)  En un modelo entidad/relaci&oacute;n, un tipo de interrelaci&oacute;n se caracteriza por:";
 choices[70]= new Array();
 choices[70][0] = "El nombre y el tipo de correspondencia.";
 choices[70][1] = "El nombre, el grado y el tipo de correspondencia.";
 choices[70][2] = "El nombre, el nivel y el tipo de correspondencia.";
 choices[70][3] = "El nombre y el grado.";
 answers[70] = choices[70][1];
 units[70] = "85";
 comments[70] = "Id Pregunta: 636. Junta de Extremadura A1 2015";


//  Id pregunta: 188 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Puede el Estado transferir o delegar a las Comunidades Aut&oacute;nomas facultadas que son de su titularidad?";
 choices[71]= new Array();
 choices[71][0] = "No, en ning&uacute;n caso.";
 choices[71][1] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con cualquier tipo de facultades.";
 choices[71][2] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, sin que el Estado se pueda reservar ninguna forma de control.";
 choices[71][3] = ", mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, previendo en cada caso la correspondiente transferencia de medios financieros, as&iacute; como las formas de control que se reserve el Estado.";
 answers[71] = choices[71][3];
 units[71] = "1";
 comments[71] = "Id Pregunta: 188. CONSTITUCION1978";


//  Id pregunta: 513 Año de creación de pregunta: 2016
 questions[72]= "73)  Cuando resulte eficaz, proporcionado y necesario para la consecuci&oacute;n de los fines propios del procedimiento, y de manera motivada, podr&aacute;n incluirse tr&aacute;mites adicionales o distintos a los contemplados en esta Ley:";
 choices[72]= new Array();
 choices[72][0] = "solo mediante ley";
 choices[72][1] = "reglamentariamente";
 choices[72][2] = "mediante ley o reglamentariamente";
 choices[72][3] = "ninguna es correcta";
 answers[72] = choices[72][0];
 units[72] = "7";
 comments[72] = "Id Pregunta: 513. LEY 39/2015";


//  Id pregunta: 798 Año de creación de pregunta: 2016
 questions[73]= "74)  Sin perjuicio de lo previsto en la Ley 3/2015, de 30 de marzo, reguladora del ejercicio del alto cargo de la Administraci&oacute;n General del Estado, los titulares de los &oacute;rganos superiores y directivos son nombrados, atendiendo a criterios de competencia profesional y experiencia, en la forma establecida en esta Ley, siendo de aplicaci&oacute;n al desempe&ntilde;o de sus funciones:";
 choices[73]= new Array();
 choices[73][0] = "la responsabilidad profesional, personal y directa por la gesti&oacute;n desarrollada";
 choices[73][1] = "la sujeci&oacute;n al control y evaluaci&oacute;n de la gesti&oacute;n por el &oacute;rgano superior o directivo competente, sin perjuicio del control establecido por la Ley General Presupuestaria";
 choices[73][2] = "a y b son correctas";
 choices[73][3] = "a y b son incorrectas";
 answers[73] = choices[73][2];
 units[73] = "4, 7, 8, 9";
 comments[73] = "Id Pregunta: 798. Ley 40/2015";


//  Id pregunta: 379 Año de creación de pregunta: 2016
 questions[74]= "75)  Seg&uacute;n recoge la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, &iquest;con qu&eacute; frecuencia debe elaborar el Gobierno un informe sobre el conjunto de actuaciones en relaci&oacute;n con le efectividad del principio de igualdad entre mujeres y hombres?";
 choices[74]= new Array();
 choices[74][0] = "Anual.";
 choices[74][1] = "Semestral.";
 choices[74][2] = "Seg&uacute;n se determine reglamentariamente.";
 choices[74][3] = "Bienal.";
 answers[74] = choices[74][2];
 units[74] = "14";
 comments[74] = "Id Pregunta: 379. POLITICAS DE IGUALDAD";


