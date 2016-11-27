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

//  Id pregunta: 787 Año de creación de pregunta: 2016
 questions[0]= "1)  En la organizaci&oacute;n central no son &oacute;rganos directivos:";
 choices[0]= new Array();
 choices[0][0] = "los Subsecretarios y Secretarios generales";
 choices[0][1] = "los Secretarios generales t&eacute;cnicos y Directores generales";
 choices[0][2] = "los Secretarios de Estado";
 choices[0][3] = "los Subdirectores generales";
 answers[0] = choices[0][2];
 units[0] = "4, 7, 8, 9";
 comments[0] = "Id Pregunta: 787. Ley 40/2015";


//  Id pregunta: 480 Año de creación de pregunta: 2016
 questions[1]= "2)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el &aacute;mbito del Ministerio de Defensa y de la Seguridad Social, el control se ejercer&aacute; a trav&eacute;s de:";
 choices[1]= new Array();
 choices[1][0] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[1][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[1][2] = "Las respuestas a) b) no son correctas.";
 choices[1][3] = "Las respuestas a) y b) son correctas.";
 answers[1] = choices[1][3];
 units[1] = "10";
 comments[1] = "Id Pregunta: 480. PRESUPUESTOS GENERALES";


//  Id pregunta: 628 Año de creación de pregunta: 2016
 questions[2]= "3)  Seg&uacute;n el Real Decreto 4/2010, de 8 de enero, por el que se regula el Esquema Nacional de Interoperabilidad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; es la interoperabilidad?";
 choices[2]= new Array();
 choices[2][0] = "Es la capacidad de los sistemas de informaci&oacute;n y de los procedimientos a los que &eacute;stos dan soporte, de compartir datos y posibilitar el intercambio de informaci&oacute;n y conocimiento entre ellos.";
 choices[2][1] = "Es la obligaci&oacute;n de conectividad ente sistemas operativos de las Administraciones P&uacute;blicas.";
 choices[2][2] = "Es la capacidad de intercambio de datos entre las Comunidades Aut&oacute;nomas y la Administraci&oacute;n Central.";
 choices[2][3] = "Es la posibilidad de acceso a los datos que poseen todas las Administraciones sobre cualquiera de los usuarios de los sistemas de informaci&oacute;n.";
 answers[2] = choices[2][0];
 units[2] = "45";
 comments[2] = "Id Pregunta: 628. Junta de Extremadura A1 2015";


//  Id pregunta: 486 Año de creación de pregunta: 2016
 questions[3]= "4)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la prescripci&oacute;n de los derechos de la Hacienda P&uacute;blica estatal, se interrumpir&aacute; conforme a lo establecido en:";
 choices[3]= new Array();
 choices[3][0] = "La Ley General Tributaria.";
 choices[3][1] = "La Ley Presupuestaria.";
 choices[3][2] = "La Ley de Hacienda P&uacute;blica.";
 choices[3][3] = "Ninguna de las respuestas es correcta.";
 answers[3] = choices[3][0];
 units[3] = "10";
 comments[3] = "Id Pregunta: 486. PRESUPUESTOS GENERALES";


//  Id pregunta: 778 Año de creación de pregunta: 2016
 questions[4]= "5)  Los &oacute;rganos administrativos podr&aacute;n dirigir las actividades de sus &oacute;rganos jer&aacute;rquicamente dependientes mediante:";
 choices[4]= new Array();
 choices[4][0] = "circulares";
 choices[4][1] = "reglamentos internos";
 choices[4][2] = "instrucciones y &oacute;rdenes de servicio";
 choices[4][3] = "disposiciones de car&aacute;cter general";
 answers[4] = choices[4][2];
 units[4] = "4, 7, 8, 9";
 comments[4] = "Id Pregunta: 778. Ley 40/2015";


//  Id pregunta: 567 Año de creación de pregunta: 2016
 questions[5]= "6)  El sector que tiene un mayor peso en el PIB espa&ntilde;ol es el:";
 choices[5]= new Array();
 choices[5][0] = "Primario, que incluye la agricultura y la pesca";
 choices[5][1] = "Secundario, compuesto por los sectores industrial, de la energ&iacute;a y de la construcci&oacute;n";
 choices[5][2] = "Minero, junto con las exportaciones de comercio";
 choices[5][3] = "Servicios";
 answers[5] = choices[5][3];
 units[5] = "12";
 comments[5] = "Id Pregunta: 567. Modelo econ&oacute;mico";


//  Id pregunta: 207 Año de creación de pregunta: 2016
 questions[6]= "7)  La representaci&oacute;n ordinaria del Estado en las Comunidades Aut&oacute;nomas corresponde a:";
 choices[6]= new Array();
 choices[6][0] = "El Delegado del Gobierno.";
 choices[6][1] = "El Subdelegado del Gobierno.";
 choices[6][2] = "El Presidente de la Comunidad Aut&oacute;noma.";
 choices[6][3] = "El Gobernador Civil.";
 answers[6] = choices[6][2];
 units[6] = "1";
 comments[6] = "Id Pregunta: 207. CONSTITUCION1978";


//  Id pregunta: 282 Año de creación de pregunta: 2016
 questions[7]= "8)  Sobre el Plan Juncker:";
 choices[7]= new Array();
 choices[7][0] = "El denominado plan Juncker es un fondo de inversiones con el que el Ejecutivo comunitario pretende movilizar hasta 215.000 millones para inversiones.";
 choices[7][1] = "Su objetivo es reactivar la inversi&oacute;n y el crecimiento en Europa.";
 choices[7][2] = "El dinero proceder&aacute; de los presupuestos europeos.";
 choices[7][3] = "Banco Europeo de Inversiones aportar&aacute; 15000 millones de euros.";
 answers[7] = choices[7][1];
 units[7] = "5";
 comments[7] = "Id Pregunta: 282. UNION EUROPEA";


//  Id pregunta: 797 Año de creación de pregunta: 2016
 questions[8]= "9)  Los elementos organizativos b&aacute;sicos de las estructuras org&aacute;nicas son:";
 choices[8]= new Array();
 choices[8][0] = "los &oacute;rganos administrativos";
 choices[8][1] = "las entidades dependientes";
 choices[8][2] = "las unidades administrativas";
 choices[8][3] = "los servicios comunes";
 answers[8] = choices[8][2];
 units[8] = "4, 7, 8, 9";
 comments[8] = "Id Pregunta: 797. Ley 40/2015";


//  Id pregunta: 594 Año de creación de pregunta: 2016
 questions[9]= "10)  Son excepciones singulares en la utilizaci&oacute;n de los medios y servicios compartidos:";
 choices[9]= new Array();
 choices[9][0] = "Seguridad Social y AEAT";
 choices[9][1] = "IGAE (Servicios Inform&aacute;tica Presupuestaria)";
 choices[9][2] = "Medios y servicios espec&iacute;ficos que afecten a defensa, consulta pol&iacute;tica, situaciones de crisis y seguridad del Estado y los que manejen informaci&oacute;n clasificada";
 choices[9][3] = "Todos los anteriores";
 answers[9] = choices[9][3];
 units[9] = "19";
 comments[9] = "Id Pregunta: 594. Estrategia TIC";


//  Id pregunta: 658 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;Qu&eacute; tecnolog&iacute;a de tratamiento de datos no guarda relaci&oacute;n con BigData?";
 choices[10]= new Array();
 choices[10][0] = "NoSQL";
 choices[10][1] = "Sistemas de baja latencia";
 choices[10][2] = "MapReduce";
 choices[10][3] = "Business Intelligence";
 answers[10] = choices[10][1];
 units[10] = "73";
 comments[10] = "Id Pregunta: 658. ";


//  Id pregunta: 466 Año de creación de pregunta: 2016
 questions[11]= "12)  A tenor del art&iacute;culo 34 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el ejercicio presupuestario coincidir&aacute;:";
 choices[11]= new Array();
 choices[11][0] = "Con el a&ntilde;o anterior.";
 choices[11][1] = "Con los tres a&ntilde;os anteriores.";
 choices[11][2] = "Con el a&ntilde;o natural.";
 choices[11][3] = "Con los dos a&ntilde;os anteriores.";
 answers[11] = choices[11][2];
 units[11] = "10";
 comments[11] = "Id Pregunta: 466. PRESUPUESTOS GENERALES";


//  Id pregunta: 662 Año de creación de pregunta: 2016
 questions[12]= "13)  De acuerdo a la Ley 39/2015, los interesados en un procedimiento administrativo, tienen los siguientes derechos:";
 choices[12]= new Array();
 choices[12][0] = "Conocer el estado de la tramitaci&oacute;n de cualquier procedimiento.";
 choices[12][1] = "Identificar a las autoridades y al personal al servicio de las Administraciones P&uacute;blicas bajo cuya responsabilidad se tramiten los procedimientos.";
 choices[12][2] = "No presentar documentos originales, en ning&uacute;n caso.";
 choices[12][3] = "No presentar datos y documentos no exigidos por las normas aplicables al procedimiento de que se trate, que ya se encuentren en poder del Sector P&uacute;blico o que hayan sido elaborado por &eacute;ste.";
 answers[12] = choices[12][1];
 units[12] = "7";
 comments[12] = "Id Pregunta: 662. Art&iacute;culo 53 de la Ley 39/2015";


//  Id pregunta: 315 Año de creación de pregunta: 2016
 questions[13]= "14)  El Colegio de Comisarios se re&uacute;ne:";
 choices[13]= new Array();
 choices[13][0] = "Una vez por semana.";
 choices[13][1] = "Una vez al mes.";
 choices[13][2] = "Dos veces en semana.";
 choices[13][3] = "Cuando lo acuerde el Presidente de la Comisi&oacute;n, y adem&aacute;s una vez al mes.";
 answers[13] = choices[13][0];
 units[13] = "5";
 comments[13] = "Id Pregunta: 315. UNION EUROPEA";


//  Id pregunta: 92 Año de creación de pregunta: 2016
 questions[14]= "15)  Seg&uacute;n AENOR, la certificaci&oacute;n es:";
 choices[14]= new Array();
 choices[14][0] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 choices[14][1] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple con los requisitos legales para salir al mercado.";
 choices[14][2] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio es beneficioso para los consumidores.";
 choices[14][3] = "La acci&oacute;n llevada a cabo por una entidad dependiente de la Administraci&oacute;n p&uacute;blica mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 answers[14] = choices[14][0];
 units[14] = "48";
 comments[14] = "Id Pregunta: 92. AGE A1 2015";


//  Id pregunta: 33 Año de creación de pregunta: 2016
 questions[15]= "16)  Respecto al desarrollo empleando tecnolog&iacute;a Microsoft, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[15]= new Array();
 choices[15][0] = "WINAPI (Windows API) permite un acceso a alto nivel del sistema, directamente usable en cualquier lenguaje y entorno de programaci&oacute;n.";
 choices[15][1] = "El framework .NET se compone de una biblioteca de clases denominada FCL (Framework Class Library) y del entorno com&uacute;n de ejecuci&oacute;n CLR (Common Language Runtime).";
 choices[15][2] = "En .NET el resultado de la compilaci&oacute;n de las aplicaciones es un m&oacute;dulo ensamblado en formato de fichero PE32 o PE32+ (Windows portable executable) directamente ejecutable sobre el hardware.";
 choices[15][3] = "Los compiladores para CLR producen c&oacute;digo FL (Final Language) denominado c&oacute;digo administrado.";
 answers[15] = choices[15][1];
 units[15] = "63";
 comments[15] = "Id Pregunta: 33. AGE A1 2015";


//  Id pregunta: 641 Año de creación de pregunta: 2016
 questions[16]= "17)  La estructura de un Directorio Activo se basa en los siguientes conceptos:";
 choices[16]= new Array();
 choices[16][0] = "Directorios, Unidades f&iacute;sicas y Usuarios.";
 choices[16][1] = "Dominio, Unidad Organizativa, Grupos y Objetos.";
 choices[16][2] = "Unidades f&iacute;sicas, Unidades l&oacute;gicas y Directorios.";
 choices[16][3] = "Ficheros, Directorios, Particiones y Unidades.";
 answers[16] = choices[16][1];
 units[16] = "58";
 comments[16] = "Id Pregunta: 641. Junta de Extremadura A1 2015";


//  Id pregunta: 45 Año de creación de pregunta: 2016
 questions[17]= "18)  46. &iquest;Cu&aacute;l de las siguientes NO es una de las APIs incorporadas a HTML5?";
 choices[17]= new Array();
 choices[17][0] = "HTML Drag and Drop, para arrastrar un objeto a otra localizaci&oacute;n.";
 choices[17][1] = "HTML Advanced Search, para parametrizar y modificar el comportamiento de los buscadores.";
 choices[17][2] = "HTML Local Storage, para almacenar datos en el navegador.";
 choices[17][3] = "HTML SSE, para actualizar una p&aacute;gina web autom&aacute;ticamente sin preguntar al servidor.";
 answers[17] = choices[17][1];
 units[17] = "74";
 comments[17] = "Id Pregunta: 45. AGE A1 2015";


//  Id pregunta: 293 Año de creación de pregunta: 2016
 questions[18]= "19)  Las sesiones plenarias mensuales, a las que asisten todos los diputados, se celebran en:";
 choices[18]= new Array();
 choices[18][0] = "Estrasburgo.";
 choices[18][1] = "Bruselas.";
 choices[18][2] = "Luxemburgo.";
 choices[18][3] = "Holanda.";
 answers[18] = choices[18][0];
 units[18] = "5";
 comments[18] = "Id Pregunta: 293. UNION EUROPEA";


//  Id pregunta: 479 Año de creación de pregunta: 2016
 questions[19]= "20)  Conforme a Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el Presupuesto del Estado, los cr&eacute;ditos destinados a atenciones protocolarias y representativas se especificar&aacute;n:";
 choices[19]= new Array();
 choices[19][0] = "A nivel de art&iacute;culo.";
 choices[19][1] = "A nivel de cap&iacute;tulo.";
 choices[19][2] = "Al nivel que corresponda conforme a su concreta clasificaci&oacute;n econ&oacute;mica.";
 choices[19][3] = "A nivel de concepto.";
 answers[19] = choices[19][2];
 units[19] = "10";
 comments[19] = "Id Pregunta: 479. PRESUPUESTOS GENERALES";


//  Id pregunta: 511 Año de creación de pregunta: 2016
 questions[20]= "21)  Cuando resulte eficaz, proporcionado y necesario para la consecuci&oacute;n de los fines propios del procedimiento, y de manera motivada, podr&aacute;n incluirse tr&aacute;mites adicionales o distintos a los contemplados en esta Ley:";
 choices[20]= new Array();
 choices[20][0] = "solo mediante ley";
 choices[20][1] = "reglamentariamente";
 choices[20][2] = "mediante ley o reglamentariamente";
 choices[20][3] = "ninguna es correcta";
 answers[20] = choices[20][0];
 units[20] = "7";
 comments[20] = "Id Pregunta: 511. LEY 39/2015";


//  Id pregunta: 101 Año de creación de pregunta: 2016
 questions[21]= "22)  El Teorema de Brewer o Principio CAP recoge las siguientes garant&iacute;as:";
 choices[21]= new Array();
 choices[21][0] = "Consistencia (Consistency), Disponibilidad (Availability) y Persistencia (Persistence)";
 choices[21][1] = "Consistencia (Consistency), Disponibilidad (Availability) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[21][2] = "Consistencia (Consistency), Atomicidad (Atomicity) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[21][3] = "Confidencialidad (Confidentiality), Autenticidad (Authentication) y Protecci&oacute;n (Protection)";
 answers[21] = choices[21][1];
 units[21] = "73";
 comments[21] = "Id Pregunta: 101. ";


//  Id pregunta: 477 Año de creación de pregunta: 2016
 questions[22]= "23)  Se&ntilde;ale, de acuerdo con la Ley General Presupuestaria, cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[22]= new Array();
 choices[22][0] = "La Ley General Presupuestaria permite realizar trasferencias de cr&eacute;dito desde el Cap&iacute;tulo 6 de los Presupuestos generales del Estado al Cap&iacute;tulo 2.";
 choices[22][1] = "Es competencia del Consejo de Ministros la autorizaci&oacute;n de generaciones de cr&eacute;dito.";
 choices[22][2] = "Los cr&eacute;ditos extraordinarios por necesidades surgidas en operaciones financieras se financian con Deuda P&uacute;blica o con baja en otros cr&eacute;ditos de la misma naturaleza.";
 choices[22][3] = "Excepcionalmente tendr&aacute;n la condici&oacute;n de ampliables los cr&eacute;ditos destinados al pago de los salarios de los empleados p&uacute;blicos.";
 answers[22] = choices[22][2];
 units[22] = "10";
 comments[22] = "Id Pregunta: 477. PRESUPUESTOS GENERALES";


//  Id pregunta: 558 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Cu&aacute;ndo ha sido aprobada la Agenda Digital para Espa&ntilde;a?";
 choices[23]= new Array();
 choices[23][0] = "En 2015";
 choices[23][1] = "En 2013";
 choices[23][2] = "En 2016";
 choices[23][3] = "En 2007";
 answers[23] = choices[23][1];
 units[23] = "19";
 comments[23] = "Id Pregunta: 558. Agenda Digital";


//  Id pregunta: 137 Año de creación de pregunta: 2016
 questions[24]= "25)  La creaci&oacute;n de la Autoridad Independiente de Responsabilidad Fiscal, dentro de la Ley Org&aacute;nica 6/2013, tiene por objeto:";
 choices[24]= new Array();
 choices[24][0] = "Garantizar el cumplimiento efectivo por las Administraciones P&uacute;blicas del principio de estabilidad presupuestaria previsto en el art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola.";
 choices[24][1] = "La evaluaci&oacute;n continua del ciclo presupuestario, del endeudamiento p&uacute;blico, y el an&aacute;lisis de las previsiones econ&oacute;micas.";
 choices[24][2] = "Ejercer sus funciones con autonom&iacute;a e independencia funcional respecto de las Administraciones P&uacute;blicas.";
 choices[24][3] = "Todos las anteriores son ciertas.";
 answers[24] = choices[24][3];
 units[24] = "12";
 comments[24] = "Id Pregunta: 137. Leyes modelo econ&oacute;mico";


//  Id pregunta: 447 Año de creación de pregunta: 2016
 questions[25]= "26)  Dentro de la l&oacute;gica presupuestaria, los gastos tienen car&aacute;cter...";
 choices[25]= new Array();
 choices[25][0] = "Ejecutivo";
 choices[25][1] = "Limitativo";
 choices[25][2] = "Estimativo";
 choices[25][3] = "Progresivo";
 answers[25] = choices[25][1];
 units[25] = "10";
 comments[25] = "Id Pregunta: 447. PRESUPUESTOS GENERALES";


//  Id pregunta: 777 Año de creación de pregunta: 2016
 questions[26]= "27)  La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de (se&ntilde;ala la incorrecta):";
 choices[26]= new Array();
 choices[26][0] = "denominaci&oacute;n y establecimiento de sus recursos humanos necesarios";
 choices[26][1] = "determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia jer&aacute;rquica";
 choices[26][2] = "delimitaci&oacute;n de sus funciones y competencias";
 choices[26][3] = "dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento";
 answers[26] = choices[26][0];
 units[26] = "4, 7, 8, 9";
 comments[26] = "Id Pregunta: 777. Ley 40/2015";


//  Id pregunta: 804 Año de creación de pregunta: 2016
 questions[27]= "28)  Los nombramientos de los Secretarios generales t&eacute;cnicos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades locales, pertenecientes al:";
 choices[27]= new Array();
 choices[27][0] = "Subgrupo A1";
 choices[27][1] = "Subgrupo A2";
 choices[27][2] = "Subgrupo B";
 choices[27][3] = "Subgrupo C1";
 answers[27] = choices[27][0];
 units[27] = "4, 7, 8, 9";
 comments[27] = "Id Pregunta: 804. Ley 40/2015";


//  Id pregunta: 233 Año de creación de pregunta: 2016
 questions[28]= "29)  Seg&uacute;n el Art&iacute;culo 75 de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras pueden delegar en las Comisiones Legislativas Permanentes:";
 choices[28]= new Array();
 choices[28][0] = "La aprobaci&oacute;n de proyectos o proposiciones de ley.";
 choices[28][1] = "La convalidaci&oacute;n de decretos-leyes.";
 choices[28][2] = "La aprobaci&oacute;n de proyectos de leyes de bases.";
 choices[28][3] = "La aprobaci&oacute;n de proyectos de leyes org&aacute;nicas.";
 answers[28] = choices[28][2];
 units[28] = "1";
 comments[28] = "Id Pregunta: 233. CONSTITUCION1978";


//  Id pregunta: 699 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Qu&eacute; es la integraci&oacute;n continua?";
 choices[29]= new Array();
 choices[29][0] = "Una pr&aacute;ctica recogida en la metodolog&iacute;a M&eacute;trica V3.";
 choices[29][1] = "Un modelo inform&aacute;tico que consiste en hacer integraciones autom&aacute;ticas de un proyecto lo m&aacute;s a menudo posible para as&iacute; poder detectar fallos cuanto antes.";
 choices[29][2] = "Una metodolog&iacute;a &aacute;gil inspirada en XP y FDD encaminada a realizar un desarrollo hol&iacute;stico en todo el proceso de desarrollo de un sistema de informaci&oacute;n.";
 choices[29][3] = "Ninguna de las anteriores.";
 answers[29] = choices[29][1];
 units[29] = "92";
 comments[29] = "Id Pregunta: 699. INTEGRACION CONTINUA";


//  Id pregunta: 729 Año de creación de pregunta: 2016
 questions[30]= "31)  Indique cual de los siguientes no forma parte del vocabulario de scrum";
 choices[30]= new Array();
 choices[30][0] = "Burn-up chart";
 choices[30][1] = "Arquitectural Skype";
 choices[30][2] = "Burn-down chart";
 choices[30][3] = "Definition of done";
 answers[30] = choices[30][1];
 units[30] = "34, 84";
 comments[30] = "Id Pregunta: 729. Metodologias &aacute;giles";


//  Id pregunta: 538 Año de creación de pregunta: 2016
 questions[31]= "32)  Ser&aacute;/n interoperable/s con los registros electr&oacute;nicos generales y particulares de apoderamientos:";
 choices[31]= new Array();
 choices[31][0] = "los registros mercantiles";
 choices[31][1] = "los registros de la propiedad";
 choices[31][2] = "los protocolos notariales";
 choices[31][3] = "todas son correctas";
 answers[31] = choices[31][3];
 units[31] = "7";
 comments[31] = "Id Pregunta: 538. LEY 39/2015";


//  Id pregunta: 416 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Qu&eacute; art&iacute;culo de la LO 3/2007, regula la igualdad en el &aacute;mbito de la educaci&oacute;n superior:";
 choices[32]= new Array();
 choices[32][0] = "Art. 25 LO, 3/2007.";
 choices[32][1] = "Art. 23 LO, 3/2007.";
 choices[32][2] = "Art. 14 LO, 3/2007.";
 choices[32][3] = "Ninguna es correcta, es el art. 13.";
 answers[32] = choices[32][0];
 units[32] = "14";
 comments[32] = "Id Pregunta: 416. POLITICAS DE IGUALDAD";


//  Id pregunta: 773 Año de creación de pregunta: 2016
 questions[33]= "34)  Las Administraciones P&uacute;blicas que, en el ejercicio de sus respectivas competencias, establezcan medidas que limiten el ejercicio de derechos individuales o colectivos o exijan el cumplimiento de requisitos para el desarrollo de una actividad, deber&aacute;n (se&ntilde;ala la incorrecta):";
 choices[33]= new Array();
 choices[33][0] = "aplicar el principio de proporcionalidad y elegir la medida menos restrictiva";
 choices[33][1] = "motivar su necesidad para la protecci&oacute;n del inter&eacute;s p&uacute;blico";
 choices[33][2] = "justificar su adecuaci&oacute;n para lograr los fines que se persiguen, evitando en la medida de lo posible que se produzcan diferencias de trato discriminatorias";
 choices[33][3] = "evaluar peri&oacute;dicamente los efectos y resultados obtenidos";
 answers[33] = choices[33][2];
 units[33] = "4, 7, 8, 9";
 comments[33] = "Id Pregunta: 773. Ley 40/2015";


//  Id pregunta: 771 Año de creación de pregunta: 2016
 questions[34]= "35)  La actuaci&oacute;n de la Administraci&oacute;n P&uacute;blica respectiva se desarrolla para alcanzar los objetivos que establecen las leyes y el resto del ordenamiento jur&iacute;dico, bajo la direcci&oacute;n de (se&ntilde;ala la incorrecta):";
 choices[34]= new Array();
 choices[34][0] = "el Gobierno de la Naci&oacute;n";
 choices[34][1] = "los &oacute;rganos de gobierno de las Comunidades Aut&oacute;nomas";
 choices[34][2] = "los &oacute;rganos de gobierno de las Entidades Locales";
 choices[34][3] = "los &oacute;rganos de gobierno de las Universidades p&uacute;blicas";
 answers[34] = choices[34][3];
 units[34] = "4, 7, 8, 9";
 comments[34] = "Id Pregunta: 771. Ley 40/2015";


//  Id pregunta: 571 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Cu&aacute;l de los siguientes hechos NO se produce durante la d&eacute;cada de los 70-80?";
 choices[35]= new Array();
 choices[35][0] = "Incorporaci&oacute;n de la mujer al mercado laboral";
 choices[35][1] = "Entrada en la Uni&oacute;n Europea";
 choices[35][2] = "Pactos de la Moncloa";
 choices[35][3] = "Ingreso en la ONU";
 answers[35] = choices[35][3];
 units[35] = "12";
 comments[35] = "Id Pregunta: 571. Modelo econ&oacute;mico";


//  Id pregunta: 753 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Qui&eacute;n realiza el seguimiento peri&oacute;dico del cumplimiento de los objetivos de la Agenda Digital para Espa&ntilde;a?";
 choices[36]= new Array();
 choices[36][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital (SGAD)";
 choices[36][1] = "La Asociaci&oacute;n Espa&ntilde;ola de Normalizaci&oacute;n y Certificaci&oacute;n (AENOR)";
 choices[36][2] = "El Observatorio Nacional de Telecomunicaciones y Sociedad de la Informaci&oacute;n (ONTSI)";
 choices[36][3] = "El Observatorio de Administraci&oacute;n Electr&oacute;nica (OBSAE)";
 answers[36] = choices[36][2];
 units[36] = "19";
 comments[36] = "Id Pregunta: 753. Agenda Digital para Espa&ntilde;a";


//  Id pregunta: 320 Año de creación de pregunta: 2016
 questions[37]= "38)  Indique a qui&eacute;n corresponde la funci&oacute;n de velar por que se apliquen los Tratados y las medidas adoptadas por las Instituciones en virtud de &eacute;stos:";
 choices[37]= new Array();
 choices[37][0] = "Al Consejo Europeo.";
 choices[37][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[37][2] = "A la Comisi&oacute;n Europea.";
 choices[37][3] = "Al Parlamento Europeo.";
 answers[37] = choices[37][2];
 units[37] = "5";
 comments[37] = "Id Pregunta: 320. UNION EUROPEA";


//  Id pregunta: 555 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Qui&eacute;nes son los beneficiarios de la estrategia para el Mercado &Uacute;nico Digital en la UE?";
 choices[38]= new Array();
 choices[38][0] = "Consumidores";
 choices[38][1] = "PYMES y Start-ups";
 choices[38][2] = "La Industria";
 choices[38][3] = "Todos los anteriores";
 answers[38] = choices[38][3];
 units[38] = "17";
 comments[38] = "Id Pregunta: 555. Mercado &Uacute;nico Digital";


//  Id pregunta: 465 Año de creación de pregunta: 2016
 questions[39]= "40)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales deber&aacute; de contener:";
 choices[39]= new Array();
 choices[39][0] = "Las respuestas a) y b) son correctas.";
 choices[39][1] = "Las respuestas a) y b) no son correctas.";
 choices[39][2] = "Contenido coherente con los planes sectoriales.";
 choices[39][3] = "Programas de actuaci&oacute;n de existentes en el &aacute;mbito de cada departamento.";
 answers[39] = choices[39][0];
 units[39] = "10";
 comments[39] = "Id Pregunta: 465. PRESUPUESTOS GENERALES";


//  Id pregunta: 239 Año de creación de pregunta: 2016
 questions[40]= "41)  Respecto de las relaciones que constitucionalmente se regulan entre los miembros del Gobierno y las Cortes Generales:";
 choices[40]= new Array();
 choices[40][0] = "La comparecencia de los miembros del Gobierno ante las C&aacute;maras y sus Comisiones puede extenderse tambi&eacute;n a los funcionarios de sus Departamentos.";
 choices[40][1] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo solicitasen las propias C&aacute;maras o sus Comisiones.";
 choices[40][2] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo deciden los miembros del Gobierno.";
 choices[40][3] = "Los funcionarios no comparecer&aacute;n en ning&uacute;n caso.";
 answers[40] = choices[40][0];
 units[40] = "1";
 comments[40] = "Id Pregunta: 239. CONSTITUCION1978";


//  Id pregunta: 326 Año de creación de pregunta: 2016
 questions[41]= "42)  La Mesa del Parlamento estar&aacute; compuesta por:";
 choices[41]= new Array();
 choices[41][0] = "El Presidente, doce Vicepresidentes y los Cuestores.";
 choices[41][1] = "El Presidente, diez Vicepresidentes y los Cuestores.";
 choices[41][2] = "El Presidente, dos Vicepresidentes y los Cuestores.";
 choices[41][3] = "El Presidente, catorce Vicepresidentes y los Cuestores.";
 answers[41] = choices[41][3];
 units[41] = "5";
 comments[41] = "Id Pregunta: 326. UNION EUROPEA";


//  Id pregunta: 810 Año de creación de pregunta: 2016
 questions[42]= "43)  Existir&aacute; una Delegaci&oacute;n del Gobierno en:";
 choices[42]= new Array();
 choices[42][0] = "la capital del pa&iacute;s";
 choices[42][1] = "cada una de las Comunidades Aut&oacute;nomas";
 choices[42][2] = "cada una de las provincias";
 choices[42][3] = "cada una de las embajadas espa&ntilde;olas";
 answers[42] = choices[42][1];
 units[42] = "4, 7, 8, 9";
 comments[42] = "Id Pregunta: 810. Ley 40/2015";


//  Id pregunta: 14 Año de creación de pregunta: 2016
 questions[43]= "44)  Se&ntilde;ale la respuesta correcta:";
 choices[43]= new Array();
 choices[43][0] = "La norma ISO 9004 est&aacute; compuesta por las normas ISO 9000:2005, ISO 9002:2008 e ISO 9004:2009.";
 choices[43][1] = "La norma ISO 9004:2009 se refiere a la gesti&oacute;n para el &eacute;xito sostenido de una organizaci&oacute;n, con un enfoque de gesti&oacute;n de la calidad.";
 choices[43][2] = "La norma ISO 9004:2009 se refiere a los principios y vocabulario de los sistemas de gesti&oacute;n de calidad.";
 choices[43][3] = "La norma ISO 9002:2008 se refiere a los requisitos de los sistemas de gesti&oacute;n de calidad.";
 answers[43] = choices[43][1];
 units[43] = "98";
 comments[43] = "Id Pregunta: 14. AGE A1 2015";


//  Id pregunta: 695 Año de creación de pregunta: 2016
 questions[44]= "45)  De las siguientes cu&aacute;l est&aacute; relacionada con la noci&oacute;n de integraci&oacute;n continua:";
 choices[44]= new Array();
 choices[44][0] = "Programaci&oacute;n estructurada.";
 choices[44][1] = "Metodolog&iacute;a M&eacute;trica Versi&oacute;n 4.";
 choices[44][2] = "Programaci&oacute;n extrema.";
 choices[44][3] = "Programaci&oacute;n Espuria.";
 answers[44] = choices[44][2];
 units[44] = "92";
 comments[44] = "Id Pregunta: 695. INTEGRACION CONTINUA";


//  Id pregunta: 852 Año de creación de pregunta: 2016
 questions[45]= "46)  Si disponemos de 6 discos SAS de 1TB netos configurados en RAID5, &iquest;de qu&eacute; capacidad neta se dispone en RAID5 en el sistema de almacenamiento?";
 choices[45]= new Array();
 choices[45][0] = "6 TB.";
 choices[45][1] = "5 TB.";
 choices[45][2] = "7 TB.";
 choices[45][3] = "3 TB.";
 answers[45] = choices[45][1];
 units[45] = "53";
 comments[45] = "Id Pregunta: 852. Xunta de Galicia 2015";


//  Id pregunta: 785 Año de creación de pregunta: 2016
 questions[46]= "47)  La Administraci&oacute;n General del Estado comprende (se&ntilde;ala la incorrecta):";
 choices[46]= new Array();
 choices[46][0] = "la Organizaci&oacute;n Central, que integra los Ministerios y los servicios comunes";
 choices[46][1] = "la Organizaci&oacute;n Territorial";
 choices[46][2] = "la Organizaci&oacute;n sectorial";
 choices[46][3] = "la Administraci&oacute;n General del Estado en el exterior";
 answers[46] = choices[46][2];
 units[46] = "4, 7, 8, 9";
 comments[46] = "Id Pregunta: 785. Ley 40/2015";


//  Id pregunta: 448 Año de creación de pregunta: 2016
 questions[47]= "48)  La partida presupuestaria es equivalente a...";
 choices[47]= new Array();
 choices[47][0] = "El sujeto que realiza el gasto";
 choices[47][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[47][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[47][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[47] = choices[47][3];
 units[47] = "10";
 comments[47] = "Id Pregunta: 448. PRESUPUESTOS GENERALES";


//  Id pregunta: 541 Año de creación de pregunta: 2016
 questions[48]= "49)  Se&ntilde;ala la correcta:";
 choices[48]= new Array();
 choices[48][0] = "la falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n impedir&aacute; que se tenga por realizado el acto de que se trate";
 choices[48][1] = "el documento electr&oacute;nico que acredite el resultado de la consulta al registro electr&oacute;nico de apoderamientos correspondiente tendr&aacute; la condici&oacute;n de acreditaci&oacute;n a estos efectos";
 choices[48][2] = "los registros electr&oacute;nicos generales y particulares de apoderamientos pertenecientes a todas y cada una de las Administraciones, ser&aacute;n preferiblemente interoperables entre s&iacute;";
 choices[48][3] = "el interesado no podr&aacute; comparecer por s&iacute; mismo en un procedimiento en el que haya designado representante";
 answers[48] = choices[48][1];
 units[48] = "7";
 comments[48] = "Id Pregunta: 541. LEY 39/2015";


//  Id pregunta: 49 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;Qu&eacute; facilita un ORM?";
 choices[49]= new Array();
 choices[49][0] = "Conversi&oacute;n de objetos a tablas relacionales";
 choices[49][1] = "Conversi&oacute;n de objetos a documentos";
 choices[49][2] = "Conversi&oacute;n de tipos de driver JDBC";
 choices[49][3] = "Conversi&oacute;n de ADO.NET a OLE DB";
 answers[49] = choices[49][0];
 units[49] = "62";
 comments[49] = "Id Pregunta: 49. AGE A1 2015";


//  Id pregunta: 469 Año de creación de pregunta: 2016
 questions[50]= "51)  Conforme a la Ley General Presupuestaria, la clasificaci&oacute;n econ&oacute;mica agrupar&aacute; los cr&eacute;ditos por cap&iacute;tulos separando las operaciones corrientes, las de capital, las financieras y el Fondo de Contingencia de ejecuci&oacute;n presupuestaria. En los cr&eacute;ditos para operaciones de capital se incluir&aacute;n:";
 choices[50]= new Array();
 choices[50][0] = "Las inversiones financieras y las transferencias de capital.";
 choices[50][1] = "Las inversiones reales y financieras.";
 choices[50][2] = "Las transferencias de capital y las transferencias corrientes.";
 choices[50][3] = "Las transferencias de capital y las inversiones reales.";
 answers[50] = choices[50][3];
 units[50] = "10";
 comments[50] = "Id Pregunta: 469. PRESUPUESTOS GENERALES";


//  Id pregunta: 124 Año de creación de pregunta: 2016
 questions[51]= "52)  Se&ntilde;ale la VERDADERA con respecto a las las reclamaciones ante el Consejo de Transparencia y Buen Gobierno:";
 choices[51]= new Array();
 choices[51][0] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de tres meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[51][1] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de seis meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[51][2] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[51][3] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; estimada";
 answers[51] = choices[51][0];
 units[51] = "22";
 comments[51] = "Id Pregunta: 124. ";


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


//  Id pregunta: 684 Año de creación de pregunta: 2016
 questions[53]= "54)  Indique los niveles de seguridad que contempla el Reglamento (UE) 910/2014 para los sistemas de identificaci&oacute;n electr&oacute;nica";
 choices[53]= new Array();
 choices[53][0] = "B&aacute;sico, medio y alto";
 choices[53][1] = "D&eacute;bil y fuerte";
 choices[53][2] = "Bajo, medio y alto";
 choices[53][3] = "Bajo, sustancial y alto";
 answers[53] = choices[53][3];
 units[53] = "77";
 comments[53] = "Id Pregunta: 684. Art&iacute;culo 8 del Reglamento 910/2014";


//  Id pregunta: 780 Año de creación de pregunta: 2016
 questions[54]= "55)  Sin perjuicio de la responsabilidad disciplinaria en que se pueda incurrir, el incumplimiento de las instrucciones u &oacute;rdenes de servicio:";
 choices[54]= new Array();
 choices[54][0] = "no afecta por s&iacute; solo a la validez de los actos dictados por los &oacute;rganos administrativos";
 choices[54][1] = "supone la invalidez de los actos dictados por los &oacute;rganos administrativos";
 choices[54][2] = "supone la nulidad de los actos dictados por los &oacute;rganos administrativos";
 choices[54][3] = "supone la anulabilidad de los actos dictados por los &oacute;rganos administrativos";
 answers[54] = choices[54][0];
 units[54] = "4, 7, 8, 9";
 comments[54] = "Id Pregunta: 780. Ley 40/2015";


//  Id pregunta: 456 Año de creación de pregunta: 2016
 questions[55]= "56)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los escenarios presupuestarios plurianuales contendr&aacute;n la distribuci&oacute;n org&aacute;nica de los recursos disponibles y se desarrollar&aacute;n en programas plurianuales, referidos a:";
 choices[55]= new Array();
 choices[55][0] = "a) Los cuatro ejercicios siguientes.";
 choices[55][1] = "b) El ejercicio siguiente.";
 choices[55][2] = "c) Los dos ejercicios siguientes.";
 choices[55][3] = "d) Los tres ejercicios siguientes.";
 answers[55] = choices[55][3];
 units[55] = "10";
 comments[55] = "Id Pregunta: 456. PRESUPUESTOS GENERALES";


//  Id pregunta: 245 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[56]= new Array();
 choices[56][0] = "De los derechos y deberes fundamentales.";
 choices[56][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[56][2] = "Derechos y libertades.";
 choices[56][3] = "De la Corona.";
 answers[56] = choices[56][1];
 units[56] = "1";
 comments[56] = "Id Pregunta: 245. CONSTITUCION1978";


//  Id pregunta: 622 Año de creación de pregunta: 2016
 questions[57]= "58)  Qu&eacute; nombre reciben las unidades de almacenamieto de las que est&aacute; compuesta un documento XML?";
 choices[57]= new Array();
 choices[57][0] = "Entradas (entities).";
 choices[57][1] = "Atributos (attribs).";
 choices[57][2] = "M&oacute;dulos (modules).";
 choices[57][3] = "Objetos (objects).";
 answers[57] = choices[57][0];
 units[57] = "74";
 comments[57] = "Id Pregunta: 622. Junta de Extremadura A1 2015";


//  Id pregunta: 648 Año de creación de pregunta: 2016
 questions[58]= "59)  Los IDS, (Sistemas de Detecci&oacute;n de Intrusos), pueden clasificarse:";
 choices[58]= new Array();
 choices[58][0] = "Solamente en funci&oacute;n de los sistemas que monitorizan.";
 choices[58][1] = "En funci&oacute;n de los sistemas que monitorizan y en funci&oacute;n de c&oacute;mo operan los Sistemas de Detecci&oacute;n de Intrusos.";
 choices[58][2] = "Solamente en funci&oacute;n de c&oacute;mo operan los Sistemas de Detecci&oacute;n de Intrusos.";
 choices[58][3] = "Estos sistemas es imposible clasificarlos.";
 answers[58] = choices[58][1];
 units[58] = "119";
 comments[58] = "Id Pregunta: 648. Junta de Extremadura A1 2015";


//  Id pregunta: 231 Año de creación de pregunta: 2016
 questions[59]= "60)  La convocatoria a refer&eacute;ndum en los casos previstos en la Constituci&oacute;n corresponde a:";
 choices[59]= new Array();
 choices[59][0] = "El Presidente del Congreso de los Diputados.";
 choices[59][1] = "El Presidente del Gobierno.";
 choices[59][2] = "El Rey.";
 choices[59][3] = "El Consejo de Ministros.";
 answers[59] = choices[59][0];
 units[59] = "1";
 comments[59] = "Id Pregunta: 231. CONSTITUCION1978";


//  Id pregunta: 822 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Cu&aacute;l de los siguientes no ser&iacute;a un motivo de abstenci&oacute;n conforme el art. 23 de la Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[60]= new Array();
 choices[60][0] = "Ser el personal respecto del que la abstenci&oacute;n se plantea sobrino del interesado en el procedimiento";
 choices[60][1] = "Ser el personal respecto del que la abstenci&oacute;n se plantea vecino del interesado en el procedimiento";
 choices[60][2] = "Ser el personal respecto del que la abstenci&oacute;n se plantea cu&ntilde;ado del interesado en el procedimiento";
 choices[60][3] = "Ser el personal respecto del que la abstenci&oacute;n se plantea nieto del interesado en el procedimiento";
 answers[60] = choices[60][2];
 units[60] = "4, 7, 8, 9";
 comments[60] = "Id Pregunta: 822. Ley 40/2015";


//  Id pregunta: 706 Año de creación de pregunta: 2016
 questions[61]= "62)  El Portal de Transparencia de la Administraci&oacute;n General del Estado depende del:";
 choices[61]= new Array();
 choices[61][0] = "Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[61][1] = "Ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[61][2] = "Ministerio de la Presidencia";
 choices[61][3] = "Ministerio de Fomento";
 answers[61] = choices[61][2];
 units[61] = "22";
 comments[61] = "Id Pregunta: 706. Portal de Transparencia";


//  Id pregunta: 6 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;Cu&aacute;l de los siguientes procesos de M&Eacute;TRICA Versi&oacute;n 3 no est&aacute; dentro del &aacute;mbito de la norma ISO 12207 de procesos de ciclo de vida del software?";
 choices[62]= new Array();
 choices[62][0] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[62][1] = "Desarrollo de Sistemas de Informaci&oacute;n";
 choices[62][2] = "Construcci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[62][3] = "Ninguno de los anteriores, ya que los tres est&aacute;n cubiertos por la norma ISO 12207";
 answers[62] = choices[62][0];
 units[62] = "91";
 comments[62] = "Id Pregunta: 6. AGE A1 2015";


//  Id pregunta: 640 Año de creación de pregunta: 2016
 questions[63]= "64)  Los sistemas de archivos gestionados por Windows 2008 Server son:";
 choices[63]= new Array();
 choices[63][0] = "Fat y Ntfs.";
 choices[63][1] = "Extfat y Fat.";
 choices[63][2] = "Fat y Nfst.";
 choices[63][3] = "ext2fs y Ntfs.";
 answers[63] = choices[63][0];
 units[63] = "58";
 comments[63] = "Id Pregunta: 640. Junta de Extremadura A1 2015";


//  Id pregunta: 564 Año de creación de pregunta: 2016
 questions[64]= "65)  La &quot;Poblaci&oacute;n Activa&quot; que tiene en cuenta la Encuesta de Poblaci&oacute;n Activa (EPA), incluye:";
 choices[64]= new Array();
 choices[64][0] = "Los ocupados y los parados activos";
 choices[64][1] = "S&oacute;lo los ocupados";
 choices[64][2] = "Los ocupados y los inactivos";
 choices[64][3] = "Los que han trabajado en los &uacute;ltimos 6 meses";
 answers[64] = choices[64][0];
 units[64] = "12";
 comments[64] = "Id Pregunta: 564. Modelo econ&oacute;mico";


//  Id pregunta: 159 Año de creación de pregunta: 2016
 questions[65]= "66)  Seg&uacute;n la ley 39/2015, los actos administrativos, a menos que su naturaleza exija otra forma m&aacute;s adecuada de expresi&oacute;n y constancia, se producir&aacute;n: ";
 choices[65]= new Array();
 choices[65][0] = "verbalmente";
 choices[65][1] = "por escrito a trav&eacute;s de medios electr&oacute;nicos o no electr&oacute;nicos";
 choices[65][2] = "por escrito a trav&eacute;s de medios electr&oacute;nicos";
 choices[65][3] = "por escrito a trav&eacute;s de medios no electr&oacute;nicos";
 answers[65] = choices[65][2];
 units[65] = "7";
 comments[65] = "Id Pregunta: 159. Ley 39/2015, Art&iacute;culo 36";


//  Id pregunta: 518 Año de creación de pregunta: 2016
 questions[66]= "67)  Las Corporaciones de Derecho P&uacute;blico se regir&aacute;n por:";
 choices[66]= new Array();
 choices[66][0] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[66][1] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica";
 choices[66][2] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[66][3] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica";
 answers[66] = choices[66][0];
 units[66] = "7";
 comments[66] = "Id Pregunta: 518. LEY 39/2015";


//  Id pregunta: 214 Año de creación de pregunta: 2016
 questions[67]= "68)  Seg&uacute;n el T&iacute;tulo II de la Constituci&oacute;n Espa&ntilde;ola relativo a la Corona:";
 choices[67]= new Array();
 choices[67][0] = "La Regencia se ejercer&aacute; por mandato constitucional y siempre en nombre del Rey.";
 choices[67][1] = "Las abdicaciones y renuncias en el orden sucesorio se resolver&aacute;n por ley ordinaria.";
 choices[67][2] = "El Pr&iacute;ncipe heredero podr&aacute; asumir la Regencia durante su minor&iacute;a de edad.";
 choices[67][3] = "La Regencia podr&aacute; ejercerse por nacionales de cualquier Estado.";
 answers[67] = choices[67][0];
 units[67] = "1";
 comments[67] = "Id Pregunta: 214. CONSTITUCION1978";


//  Id pregunta: 786 Año de creación de pregunta: 2016
 questions[68]= "69)  En la organizaci&oacute;n central son &oacute;rganos superiores:";
 choices[68]= new Array();
 choices[68][0] = "los Subsecretarios y los Secretarios generales";
 choices[68][1] = "los Ministros y los Secretarios generales t&eacute;cnicos";
 choices[68][2] = "los Secretarios de Estado y los Directores generales";
 choices[68][3] = "los Ministros y los Secretarios de Estado";
 answers[68] = choices[68][3];
 units[68] = "4, 7, 8, 9";
 comments[68] = "Id Pregunta: 786. Ley 40/2015";


//  Id pregunta: 598 Año de creación de pregunta: 2016
 questions[69]= "70)  Entre la documentaci&oacute;n de la Seguridad de la Organizaci&oacute;n nos podremos encontrar:";
 choices[69]= new Array();
 choices[69][0] = "La Pol&iacute;tica de Seguridad Corporativa ser&aacute; elaborada por el Responsable de Seguridad Corporativa y aprobada por el Comit&eacute; de Seguridad Corporativa y por la Alta Direcci&oacute;n.";
 choices[69][1] = "La Pol&iacute;tica de Seguridad de las TIC que debe estar alineada en todo momento con el Mantenimiento de los Sistemas de Informaci&oacute;n.";
 choices[69][2] = "El Documento de Seguridad que ha de estar presente en toda documentaci&oacute;n de la seguridad de la informaci&oacute;n.";
 choices[69][3] = "Todas las respuestas anteriores son correctas.";
 answers[69] = choices[69][0];
 units[69] = "45";
 comments[69] = "Id Pregunta: 598. Junta de Extremadura A1 2015";


//  Id pregunta: 651 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Qu&eacute; propiedades ofrecen las conexiones VPN que usan protocolos como PPTP, L2TP/IPsec y SSTP?";
 choices[70]= new Array();
 choices[70][0] = "Encapsulaci&oacute;n y autenticaci&oacute;n.";
 choices[70][1] = "Encapsulaci&oacute;n y cifrado de datos.";
 choices[70][2] = "Autenticaci&oacute;n y cifrado de datos.";
 choices[70][3] = "Encapsulaci&oacute;n, autenticaci&oacute;n y cifrado de datos.";
 answers[70] = choices[70][3];
 units[70] = "120";
 comments[70] = "Id Pregunta: 651. Junta de Extremadura A1 2015";


//  Id pregunta: 735 Año de creación de pregunta: 2016
 questions[71]= "72)  Son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[71]= new Array();
 choices[71][0] = "Tranparencia, innovaci&oacute;n, Unidad y visi&oacute;n integral y Orientaci&oacute;n al usuario del servicio";
 choices[71][1] = "Tranparencia, Colaboraci&oacute;n y alianzas, Orientaci&oacute;n al usuario del servicio y Reutilizaci&oacute;n";
 choices[71][2] = "Reutilizaci&oacute;n, Seguridad, Orientaci&oacute;n al usuario del servicio y Transparencia";
 choices[71][3] = "Ninguna de las anteriores";
 answers[71] = choices[71][0];
 units[71] = "28";
 comments[71] = "Id Pregunta: 735. Estrategia TIC";


//  Id pregunta: 440 Año de creación de pregunta: 2016
 questions[72]= "73)  Respecto al Sistema de Informaci&oacute;n Administrativa, se&ntilde;ale la respuesta falsa:";
 choices[72]= new Array();
 choices[72][0] = "Contiene la relaci&oacute;n de procedimientos y servicios de la AGE, y de todas las administraciones participantes.";
 choices[72][1] = "Cumple para la AGE el requisito establecido en el art&iacute;culo 9 del Esquema Nacional de Interoperabilidad, que obliga a las Administraciones p&uacute;blicas a mantener actualizado un Inventario de Informaci&oacute;n Administrativa.";
 choices[72][2] = "SIA est&aacute; dise&ntilde;ado para permitir la administraci&oacute;n distribuida y la actualizaci&oacute;n corresponsable por todas las Administraciones participantes, mediante una aplicaci&oacute;n web.";
 choices[72][3] = "Los usuarios son gestionados por una red de responsables de cada Departamento.";
 answers[72] = choices[72][2];
 units[72] = "43";
 comments[72] = "Id Pregunta: 440. SERVICIOS COMUNES";


//  Id pregunta: 223 Año de creación de pregunta: 2016
 questions[73]= "74)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, durante el periodo de su mandato los Diputados y Senadores gozar&aacute;n asimismo de inmunidad y s&oacute;lo podr&aacute;n ser detenidos en caso de flagrante delito. No podr&aacute;n ser inculpados ni procesados sin la previa autorizaci&oacute;n:";
 choices[73]= new Array();
 choices[73][0] = "De la C&aacute;mara respectiva.";
 choices[73][1] = "Del Rey.";
 choices[73][2] = "Del Tribunal Constitucional.";
 choices[73][3] = "Del Tribunal Supremo.";
 answers[73] = choices[73][0];
 units[73] = "1";
 comments[73] = "Id Pregunta: 223. CONSTITUCION1978";


//  Id pregunta: 367 Año de creación de pregunta: 2016
 questions[74]= "75)  Es una funci&oacute;n del Presidente del Parlamento Europeo:";
 choices[74]= new Array();
 choices[74][0] = "Presentar la moci&oacute;n de censura.";
 choices[74][1] = "Presidir las sesiones del Parlamento.";
 choices[74][2] = "Organizar la Secretar&iacute;a General.";
 choices[74][3] = "Preparar las actividades de las Comisiones.";
 answers[74] = choices[74][1];
 units[74] = "5";
 comments[74] = "Id Pregunta: 367. UNION EUROPEA";


