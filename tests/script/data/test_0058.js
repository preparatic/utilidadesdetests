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

//  Id pregunta: 325 Año de creación de pregunta: 2016
 questions[0]= "1)  Indique el n&uacute;mero m&iacute;nimo de Diputados necesario para constituir un Grupo Pol&iacute;tico en el Parlamento Europeo:";
 choices[0]= new Array();
 choices[0][0] = "Veinticinco.";
 choices[0][1] = "Veintiuno.";
 choices[0][2] = "Dieciocho.";
 choices[0][3] = "Diecinueve.";
 answers[0] = choices[0][0];
 units[0] = "5";
 comments[0] = "Id Pregunta: 325. UNION EUROPEA";


//  Id pregunta: 68 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes opciones se refiere al conjunto de metodolog&iacute;as, procesos, arquitecturas y tecnolog&iacute;as que permiten reunir, depurar y transformar datos de los sistemas transaccionales e informaci&oacute;n desestructurada en informaci&oacute;n estructurada, para su explotaci&oacute;n directa o para su an&aacute;lisis y conversi&oacute;n en conocimiento, dando as&iacute; soporte a la toma de decisiones sobre el negocio?";
 choices[1]= new Array();
 choices[1][0] = "Data Mining (miner&iacute;a de datos)";
 choices[1][1] = "Business Intelligence (inteligencia de negocio)";
 choices[1][2] = "Data Warehouse (almac&eacute;n de datos)";
 choices[1][3] = "An&aacute;lisis OLTP (procesamiento en l&iacute;nea transaccional)";
 answers[1] = choices[1][1];
 units[1] = "72";
 comments[1] = "Id Pregunta: 68. AGE A1 2015";


//  Id pregunta: 690 Año de creación de pregunta: 2016
 questions[2]= "3)  El Reglamento (UE) 910/2014 entra en vigor:";
 choices[2]= new Array();
 choices[2][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[2][1] = "A los 20 d&iacute;as de su publicaci&oacute;n en el Diario Oficial de la Uni&oacute;n Europea (DOUE)";
 choices[2][2] = "A partir del 1 de enero de 2015";
 choices[2][3] = "A partir del 1 de julio de 2016";
 answers[2] = choices[2][1];
 units[2] = "77";
 comments[2] = "Id Pregunta: 690. Art&iacute;culo 52 del Reglamento 910/2014";


//  Id pregunta: 649 Año de creación de pregunta: 2016
 questions[3]= "4)  Los objetivos que persegu&iacute;a Codd con el modelo relacional, se pueden resumir en:";
 choices[3]= new Array();
 choices[3][0] = "Independencia f&iacute;sica, independencia l&oacute;gica, flexibilidad, uniformidad y sencillez.";
 choices[3][1] = "Independencia f&iacute;sica, independencia l&oacute;gica y uniformidad.";
 choices[3][2] = "Independencia f&iacute;sica, flexibilidad, uniformidad y sencillez.";
 choices[3][3] = "Independencia f&iacute;sica, independencia l&oacute;gica, independencia conceptual, flexibilidad, uniformidad y sencillez.";
 answers[3] = choices[3][0];
 units[3] = "60";
 comments[3] = "Id Pregunta: 649. Junta de Extremadura A1 2015";


//  Id pregunta: 10 Año de creación de pregunta: 2016
 questions[4]= "5)  El servicio mediante el cual se localiza un terminal m&oacute;vil dentro de alguna de las N c&eacute;lulas gestionadas coordinadamente en una zona de cobertura se denomina:";
 choices[4]= new Array();
 choices[4][0] = "Paging";
 choices[4][1] = "Roaming";
 choices[4][2] = "Handover";
 choices[4][3] = "Trunking";
 answers[4] = choices[4][0];
 units[4] = "117";
 comments[4] = "Id Pregunta: 10. AGE A1 2015";


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


//  Id pregunta: 263 Año de creación de pregunta: 2016
 questions[6]= "7)  Los Vocales integrantes del &oacute;rgano de gobierno del Poder Judicial:";
 choices[6]= new Array();
 choices[6][0] = "Ser&aacute;n nombrados por el Presidente del Tribunal Supremo y del Consejo del Poder Judicial, por un periodo de cinco a&ntilde;os.";
 choices[6][1] = "Ser&aacute;n nombrados por el Congreso de los Diputados y por el Senado por un periodo de cinco a&ntilde;os.";
 choices[6][2] = "Ser&aacute;n nombrados por el Rey por un periodo de cinco a&ntilde;os.";
 choices[6][3] = "er&aacute;n nombrados por el Rey por un periodo de tres a&ntilde;os.";
 answers[6] = choices[6][1];
 units[6] = "1";
 comments[6] = "Id Pregunta: 263. CONSTITUCION1978";


//  Id pregunta: 292 Año de creación de pregunta: 2016
 questions[7]= "8)  Indique la afirmaci&oacute;n correcta relativa al Parlamento Europeo:";
 choices[7]= new Array();
 choices[7][0] = "Se reunir&aacute; con previa convocatoria el segundo martes de marzo.";
 choices[7][1] = "Se reunir&aacute; sin necesidad de previa convocatoria el segundo martes de marzo.";
 choices[7][2] = "Se reunir&aacute; la segunda semana de enero con previa convocatoria.";
 choices[7][3] = "Se reunir&aacute; la tercera semana de enero sin previa convocatoria.";
 answers[7] = choices[7][1];
 units[7] = "5";
 comments[7] = "Id Pregunta: 292. UNION EUROPEA";


//  Id pregunta: 143 Año de creación de pregunta: 2016
 questions[8]= "9)  Contra la resoluci&oacute;n de un recurso de alzada:";
 choices[8]= new Array();
 choices[8][0] = "No cabe interponer ning&uacute;n tipo de recurso";
 choices[8][1] = "Puede interponerse el recurso de reposici&oacute;n como paso previo a la impugnaci&oacute;n ante el orden jurisdiccional contencioso-administrativo";
 choices[8][2] = "Puede interponerse el recurso extraordinario de revisi&oacute;n, en los casos establecidos en el art&iacute;culo 125.1.";
 choices[8][3] = "Puede interponerse un nuevo recurso de alzada si el acto no fuera expreso";
 answers[8] = choices[8][2];
 units[8] = "8";
 comments[8] = "Id Pregunta: 143. Ley 39/2015, Art&iacute;culo 122";


//  Id pregunta: 306 Año de creación de pregunta: 2016
 questions[9]= "10)  Componen la Comisi&oacute;n Europea:";
 choices[9]= new Array();
 choices[9][0] = "Un Comisario por cada Estado miembro.";
 choices[9][1] = "Uno o dos Comisarios por cada Estado miembro, dependiendo de las caracter&iacute;sticas del Estado.";
 choices[9][2] = "Dos Comisarios por cada Estado miembro.";
 choices[9][3] = "Los Ministros de Asuntos Exteriores de cada Estado miembro.";
 answers[9] = choices[9][0];
 units[9] = "5";
 comments[9] = "Id Pregunta: 306. UNION EUROPEA";


//  Id pregunta: 549 Año de creación de pregunta: 2016
 questions[10]= "11)  El presidente del pleno de la Comisi&oacute;n de Estrategia TIC es :";
 choices[10]= new Array();
 choices[10][0] = "El Ministro de Energ&iacute;a, Turismo y Agenda Digital";
 choices[10][1] = "El Ministro de Hacienda y Administraciones P&uacute;blicas";
 choices[10][2] = "El Presidente del Gobierno";
 choices[10][3] = "El Secretario General de Administraci&oacute;n Digital";
 answers[10] = choices[10][1];
 units[10] = "26";
 comments[10] = "Id Pregunta: 549. Gobernanza TIC";


//  Id pregunta: 236 Año de creación de pregunta: 2016
 questions[11]= "12)  El T&iacute;tulo Preliminar de la Constituci&oacute;n Espa&ntilde;ola de 1978 engloba una serie de preceptos entre los que se encuentra el relativo a:";
 choices[11]= new Array();
 choices[11][0] = "La regulaci&oacute;n sobre la adquisici&oacute;n de la nacionalidad espa&ntilde;ola.";
 choices[11][1] = "La naturaleza, funcionamiento y estructura de los partidos pol&iacute;ticos.";
 choices[11][2] = "La entrada en vigor de la propia Constituci&oacute;n.";
 choices[11][3] = "El reconocimiento de los derechos hist&oacute;ricos de los territorios forales.";
 answers[11] = choices[11][3];
 units[11] = "1";
 comments[11] = "Id Pregunta: 236. CONSTITUCION1978";


//  Id pregunta: 13 Año de creación de pregunta: 2016
 questions[12]= "13)  JNDI se usa para el acceso a:";
 choices[12]= new Array();
 choices[12][0] = "Datos de ficheros";
 choices[12][1] = "Sistemas gestores de bases de datos";
 choices[12][2] = "Directorios de nombres";
 choices[12][3] = "Colas de mensajer&iacute;a";
 answers[12] = choices[12][2];
 units[12] = "64";
 comments[12] = "Id Pregunta: 13. AGE A1 2015";


//  Id pregunta: 89 Año de creación de pregunta: 2016
 questions[13]= "14)  En un contrato cuyo presupuesto es de 100.000 euros sin IVA y se adjudica por 80.000, IVA excluido, la garant&iacute;a definitiva ser&aacute; de:";
 choices[13]= new Array();
 choices[13][0] = "2.400 euros";
 choices[13][1] = "4.000 euros";
 choices[13][2] = "3.200 euros";
 choices[13][3] = "1.600 euros";
 answers[13] = choices[13][1];
 units[13] = "37";
 comments[13] = "Id Pregunta: 89. AGE A1 2015";


//  Id pregunta: 115 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Qu&eacute; Tratado Europeo introduce un t&iacute;tulo dedicado al empleo en el Tratado de Roma?";
 choices[14]= new Array();
 choices[14][0] = "El Tratado de Lisboa";
 choices[14][1] = "El Tratado de Amsterdam";
 choices[14][2] = "El Tratado de Niza";
 choices[14][3] = "El Acta &Uacute;nica Europea";
 answers[14] = choices[14][1];
 units[14] = "15";
 comments[14] = "Id Pregunta: 115. ";


//  Id pregunta: 705 Año de creación de pregunta: 2016
 questions[15]= "16)  La &Eacute;tica P&uacute;blica se puede definir como:";
 choices[15]= new Array();
 choices[15][0] = "El conjunto de normas que adoptan de manera voluntaria los trabajadores p&uacute;blicos con objeto de satisfacer las necesidades de los ciudadanos.";
 choices[15][1] = "El conjunto de comportamientos inadecuados por parte de empleados p&uacute;blicos y pol&iacute;ticos.";
 choices[15][2] = "El conjunto de normas que rigen la conducta de las personas que trabajan en las Administraciones P&uacute;blicas.";
 choices[15][3] = "El compromiso que adquieren los ciudadanos al relacionarse con las Administraciones P&uacute;blicas.";
 answers[15] = choices[15][2];
 units[15] = "22";
 comments[15] = "Id Pregunta: 705. &Eacute;tica p&uacute;blica";


//  Id pregunta: 211 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;A cu&aacute;ntos miembros del Tribunal Constitucional corresponde proponer al Gobierno?";
 choices[16]= new Array();
 choices[16][0] = "Cuatro.";
 choices[16][1] = "Ninguno.";
 choices[16][2] = "Dos.";
 choices[16][3] = "Seis.";
 answers[16] = choices[16][2];
 units[16] = "1";
 comments[16] = "Id Pregunta: 211. CONSTITUCION1978";


//  Id pregunta: 684 Año de creación de pregunta: 2016
 questions[17]= "18)  Indique los niveles de seguridad que contempla el Reglamento (UE) 910/2014 para los sistemas de identificaci&oacute;n electr&oacute;nica";
 choices[17]= new Array();
 choices[17][0] = "B&aacute;sico, medio y alto";
 choices[17][1] = "D&eacute;bil y fuerte";
 choices[17][2] = "Bajo, medio y alto";
 choices[17][3] = "Bajo, sustancial y alto";
 answers[17] = choices[17][3];
 units[17] = "77";
 comments[17] = "Id Pregunta: 684. Art&iacute;culo 8 del Reglamento 910/2014";


//  Id pregunta: 491 Año de creación de pregunta: 2016
 questions[18]= "19)  Seg&uacute;n Ley 47/2003, de 26 de noviembre, General Presupuestaria, el conjunto de gastos que se considera necesario realizar en el desarrollo de actividades orientadas a la consecuci&oacute;n de determinados objetivos preestablecidos es:";
 choices[18]= new Array();
 choices[18][0] = "Un programa presupuestario.";
 choices[18][1] = "Un concepto presupuestario.";
 choices[18][2] = "Una aplicaci&oacute;n presupuestaria.";
 choices[18][3] = "Un cr&eacute;dito presupuestario.";
 answers[18] = choices[18][0];
 units[18] = "10";
 comments[18] = "Id Pregunta: 491. PRESUPUESTOS GENERALES";


//  Id pregunta: 371 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;En qu&eacute; a&ntilde;o se adhiri&oacute; Espa&ntilde;a a la Comunidad Europea?:";
 choices[19]= new Array();
 choices[19][0] = "En 1988.";
 choices[19][1] = "En 1981.";
 choices[19][2] = "En 1982.";
 choices[19][3] = "En 1986.";
 answers[19] = choices[19][3];
 units[19] = "5";
 comments[19] = "Id Pregunta: 371. UNION EUROPEA";


//  Id pregunta: 212 Año de creación de pregunta: 2016
 questions[20]= "21)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con la regulaci&oacute;n constitucional de la composici&oacute;n del Senado:";
 choices[20]= new Array();
 choices[20][0] = "La poblaci&oacute;n de Melilla elegir&aacute; dos Senadores.";
 choices[20][1] = "En cada provincia se elegir&aacute;n tres senadores.";
 choices[20][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas elegir&aacute;n un senador cuando su poblaci&oacute;n supere el mill&oacute;n de habitantes.";
 choices[20][3] = "El Senado se compone de 350 senadores.";
 answers[20] = choices[20][0];
 units[20] = "1";
 comments[20] = "Id Pregunta: 212. CONSTITUCION1978";


//  Id pregunta: 600 Año de creación de pregunta: 2016
 questions[21]= "22)  Los est&aacute;ndares de la norma IEEE 802.11 se ubican en las capas del modelo OSI:";
 choices[21]= new Array();
 choices[21][0] = "La capa de transmisi&oacute;n y la capa de presentaci&oacute;n.";
 choices[21][1] = "La capa de aplicaci&oacute;n y la capa de gesti&oacute;n.";
 choices[21][2] = "La capa f&iacute;sica y la cada de enlace de datos.";
 choices[21][3] = "La capa de red y la capa de tr&aacute;fico.";
 answers[21] = choices[21][2];
 units[21] = "108";
 comments[21] = "Id Pregunta: 600. Junta de Extremadura A1 2015";


//  Id pregunta: 621 Año de creación de pregunta: 2016
 questions[22]= "23)  Seg&uacute;n el paradigma de Orientaci&oacute;n a Objetos, la herencia posibilita que:";
 choices[22]= new Array();
 choices[22][0] = "Cualquier cambio en los datos y operaciones contenidas dentro de una superclase es heredado inmediatamente por todas las subclases que se derivan de la superclase.";
 choices[22][1] = "Cualquier cambio en las operaciones y datos de la superclase no se refleja en todas las subclases.";
 choices[22][2] = "Cualquier cambio en una de las subclases que se heredan de la superclase se refleja en sus clases hermanas.";
 choices[22][3] = "En el paradigma de Orientaci&oacute;n a Objetos no existe la herencia.";
 answers[22] = choices[22][0];
 units[22] = "89";
 comments[22] = "Id Pregunta: 621. Junta de Extremadura A1 2015";


//  Id pregunta: 730 Año de creación de pregunta: 2016
 questions[23]= "24)  Cu&aacute;l de las siguientes caracter&iacute;sticas es especifican de Kanban:";
 choices[23]= new Array();
 choices[23][0] = "Se definen iteraciones";
 choices[23][1] = "Se limitan las tareas que se pueden realizar por fase";
 choices[23][2] = "Los miembros del equipo no tienen un rol especifico";
 choices[23][3] = "Todas las anteriores son caracter&iacute;sticas de la metodolog&iacute;a Kanban.";
 answers[23] = choices[23][1];
 units[23] = "34, 84";
 comments[23] = "Id Pregunta: 730. Metodologias &aacute;giles";


//  Id pregunta: 426 Año de creación de pregunta: 2016
 questions[24]= "25)  La aprobaci&oacute;n de convocatorias de pruebas selectivas para el acceso al empleo p&uacute;blico deber&aacute; acompa&ntilde;arse de:";
 choices[24]= new Array();
 choices[24][0] = "Un plan de igualdad.";
 choices[24][1] = "Un informe de impacto de g&eacute;nero.";
 choices[24][2] = "Un programa de igualdad.";
 choices[24][3] = "Todas son correctas.";
 answers[24] = choices[24][1];
 units[24] = "14";
 comments[24] = "Id Pregunta: 426. POLITICAS DE IGUALDAD";


//  Id pregunta: 63 Año de creación de pregunta: 2016
 questions[25]= "26)  El modelo de servicio en la nube en el que el consumidor no tiene control sobre la red, los servidores, sistemas operativos o almacenamiento, pero s&iacute; sobre las aplicaciones desplegadas y sobre los ajustes de configuraci&oacute;n de dichas aplicaciones, se denomina:";
 choices[25]= new Array();
 choices[25][0] = "Infrastructure as a Service (IaaS)";
 choices[25][1] = "Platform as a Service (PaaS)";
 choices[25][2] = "Software as a Service (SaaS)";
 choices[25][3] = "Application as a Service (AaaS)";
 answers[25] = choices[25][1];
 units[25] = "52";
 comments[25] = "Id Pregunta: 63. AGE A1 2015";


//  Id pregunta: 114 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Qu&eacute; es la Garant&iacute;a Juvenil?";
 choices[26]= new Array();
 choices[26][0] = "Una iniciativa europea que pretende facilitar el acceso de los j&oacute;venes al mercado de trabajo ofreci&eacute;ndoles una oferta de empleo, de educaci&oacute;n o formaci&oacute;n tras haber finalizado sus estudios o quedar desempleados";
 choices[26][1] = "Un Plan que permite la concesi&oacute;n de subvenciones a j&oacute;venes para facilitar el alquiler de su vivienda habitual.";
 choices[26][2] = "Un Plan que concede cr&eacute;ditos en condiciones ventajosas a j&oacute;venes emprendedores";
 choices[26][3] = "Una inciativa europea que facilita a los j&oacute;venes el acceso a las nuevas tecnolog&iacute;as";
 answers[26] = choices[26][0];
 units[26] = "15";
 comments[26] = "Id Pregunta: 114. ";


//  Id pregunta: 515 Año de creación de pregunta: 2016
 questions[27]= "28)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[27]= new Array();
 choices[27][0] = "quedar&aacute;n sujetas a lo dispuesto en todas las normas de esta Ley";
 choices[27][1] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[27][2] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo cuando ejerzan potestades administrativas";
 choices[27][3] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley";
 answers[27] = choices[27][1];
 units[27] = "7";
 comments[27] = "Id Pregunta: 515. LEY 39/2015";


//  Id pregunta: 33 Año de creación de pregunta: 2016
 questions[28]= "29)  Respecto al desarrollo empleando tecnolog&iacute;a Microsoft, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[28]= new Array();
 choices[28][0] = "WINAPI (Windows API) permite un acceso a alto nivel del sistema, directamente usable en cualquier lenguaje y entorno de programaci&oacute;n.";
 choices[28][1] = "El framework .NET se compone de una biblioteca de clases denominada FCL (Framework Class Library) y del entorno com&uacute;n de ejecuci&oacute;n CLR (Common Language Runtime).";
 choices[28][2] = "En .NET el resultado de la compilaci&oacute;n de las aplicaciones es un m&oacute;dulo ensamblado en formato de fichero PE32 o PE32+ (Windows portable executable) directamente ejecutable sobre el hardware.";
 choices[28][3] = "Los compiladores para CLR producen c&oacute;digo FL (Final Language) denominado c&oacute;digo administrado.";
 answers[28] = choices[28][1];
 units[28] = "63";
 comments[28] = "Id Pregunta: 33. AGE A1 2015";


//  Id pregunta: 499 Año de creación de pregunta: 2016
 questions[29]= "30)  A tenor de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la cuant&iacute;a global de los anticipos de caja fija no podr&aacute; superar para cada ministerio y organismo aut&oacute;nomo:";
 choices[29]= new Array();
 choices[29][0] = "El 7% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[29][1] = "El 5% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[29][2] = "El 6% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[29][3] = "El 8% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 answers[29] = choices[29][0];
 units[29] = "10";
 comments[29] = "Id Pregunta: 499. PRESUPUESTOS GENERALES";


//  Id pregunta: 227 Año de creación de pregunta: 2016
 questions[30]= "31)  En relaci&oacute;n con el Defensor del Pueblo, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[30]= new Array();
 choices[30][0] = "Es el supremo &oacute;rgano consultivo del Gobierno.";
 choices[30][1] = "Puede supervisar la actividad de la Administraci&oacute;n del Estado, pero no la de las Comunidades Aut&oacute;nomas.";
 choices[30][2] = "Puede anular resoluciones e imponer sanciones, siempre que no impliquen privaci&oacute;n de libertad.";
 choices[30][3] = "Tiene como misi&oacute;n la defensa de todos los derechos comprendidos en el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola, y no s&oacute;lo los susceptibles de recurso de amparo.";
 answers[30] = choices[30][3];
 units[30] = "1";
 comments[30] = "Id Pregunta: 227. CONSTITUCION1978";


//  Id pregunta: 392 Año de creación de pregunta: 2016
 questions[31]= "32)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[31]= new Array();
 choices[31][0] = "Indirecta.";
 choices[31][1] = "Directa.";
 choices[31][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[31][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[31] = choices[31][1];
 units[31] = "14";
 comments[31] = "Id Pregunta: 392. POLITICAS DE IGUALDAD";


//  Id pregunta: 180 Año de creación de pregunta: 2016
 questions[32]= "33)  Se&ntilde;ale la afirmaci&oacute;n correcta de acuerdo con la regulaci&oacute;n que contiene el Art&iacute;culo 116 de la Constituci&oacute;n Espa&ntilde;ola de los estados de alarma, excepci&oacute;n y sitio:";
 choices[32]= new Array();
 choices[32][0] = "el estado de sitio ser&aacute; declarado por la mayor&iacute;a absoluta del Congreso de los Diputados, a propuesta exclusiva del Gobierno.";
 choices[32][1] = "El estado de excepci&oacute;n ser&aacute; declarado por el Gobierno mediante Acuerdo de Ministros, previa autorizaci&oacute;n del Senado.";
 choices[32][2] = "El estado de alarma ser&aacute; declarado por la mayor&iacute;a simple del Congreso de los Diputados, a propuesta exclusiva del Gobierno.";
 choices[32][3] = "La declaraci&oacute;n de los estados de alarma, excepci&oacute;n y sitio s&iacute; modificar&aacute;n el principio de responsabilidad del Gobierno y de sus agentes reconocidos en la CE y en las leyes.";
 answers[32] = choices[32][0];
 units[32] = "1";
 comments[32] = "Id Pregunta: 180. CONSTITUCION1978";


//  Id pregunta: 833 Año de creación de pregunta: 2016
 questions[33]= "34)  Respecto a la reutilizaci&oacute;n de sistemas y aplicaciones de propiedad de la Administraci&oacute;n:";
 choices[33]= new Array();
 choices[33][0] = "Las Administraciones pondr&aacute;n siempre a disposici&oacute;n de cualquiera de ellas que lo solicite las aplicaciones, desarrolladas por sus servicios o que hayan sido objeto de contrataci&oacute;n y de cuyos derechos de propiedad intelectual sean titulares.";
 choices[33][1] = "Las aplicaciones a las que se refiere el apartado anterior podr&aacute;n ser declaradas como de fuentes abiertas, cuando de ello se derive una mayor transparencia en el funcionamiento de la Administraci&oacute;n P&uacute;blica o se fomente con ello la incorporaci&oacute;n de los ciudadanos a la Sociedad de la informaci&oacute;n.";
 choices[33][2] = "Las Administraciones P&uacute;blicas, con car&aacute;cter posterior a la adquisici&oacute;n, desarrollo o al mantenimiento a lo largo de todo el ciclo de vida de una aplicaci&oacute;n, tanto si se realiza con medios propios o por la contrataci&oacute;n de los servicios correspondientes, deber&aacute;n consultar en el directorio general de aplicaciones.";
 choices[33][3] = "En el directorio general de aplicaciones constar&aacute;n las aplicaciones disponibles de la Administraci&oacute;n General del Estado.";
 answers[33] = choices[33][1];
 units[33] = "4, 7, 8, 9";
 comments[33] = "Id Pregunta: 833. Ley 40/2015";


//  Id pregunta: 472 Año de creación de pregunta: 2016
 questions[34]= "35)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la modalidad de auditor&iacute;a cuyo objeto consiste en la verificaci&oacute;n selectiva de la adecuaci&oacute;n a la legalidad de la gesti&oacute;n presupuestaria, de contrataci&oacute;n, personal, ingresos y gesti&oacute;n de subvenciones, as&iacute; como de cualquier otro aspecto de la actividad econ&oacute;mico financiero de las entidades auditadas se denomina:";
 choices[34]= new Array();
 choices[34][0] = "Auditor&iacute;a de sistemas y procedimientos de gesti&oacute;n econ&oacute;mica y financiera.";
 choices[34][1] = "Auditor&iacute;a operativa.";
 choices[34][2] = "Auditor&iacute;a de cumplimiento.";
 choices[34][3] = "Auditor&iacute;a de econom&iacute;a, eficacia y eficiencia.";
 answers[34] = choices[34][2];
 units[34] = "10";
 comments[34] = "Id Pregunta: 472. PRESUPUESTOS GENERALES";


//  Id pregunta: 722 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Cu&aacute;l es la principal desventaja de sprints m&aacute;s largos?";
 choices[35]= new Array();
 choices[35][0] = "Permite reaccionar al equipo mejor ante imprevistos";
 choices[35][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[35][2] = "Se reduce el n&uacute;mero de reuniones de sprint";
 choices[35][3] = "Se puede desarrollar algo diferente a lo requerido y obtener el feedback del cliente m&aacute;s tarde.";
 answers[35] = choices[35][3];
 units[35] = "34, 84";
 comments[35] = "Id Pregunta: 722. Metodologias &aacute;giles";


//  Id pregunta: 260 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se recoge el principio de unidad jurisdiccional?:";
 choices[36]= new Array();
 choices[36][0] = "117.5";
 choices[36][1] = "117.1";
 choices[36][2] = "116";
 choices[36][3] = "15";
 answers[36] = choices[36][0];
 units[36] = "1";
 comments[36] = "Id Pregunta: 260. CONSTITUCION1978";


//  Id pregunta: 311 Año de creación de pregunta: 2016
 questions[37]= "38)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[37]= new Array();
 choices[37][0] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los tres quintos del n&uacute;mero de Estados miembros.";
 choices[37][1] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a las tres cuartas partes del n&uacute;mero de Estados miembros.";
 choices[37][2] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los dos tercios del n&uacute;mero de Estados miembros.";
 choices[37][3] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a un nacional por cada Estado miembro.";
 answers[37] = choices[37][2];
 units[37] = "5";
 comments[37] = "Id Pregunta: 311. UNION EUROPEA";


//  Id pregunta: 656 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Qu&eacute; aplicativo se suele usar como herramienta administrativa para el control de los nodos dentro del ecosistema BidData?";
 choices[38]= new Array();
 choices[38][0] = "Cassandra";
 choices[38][1] = "Riak";
 choices[38][2] = "Avro";
 choices[38][3] = "Zookeeper";
 answers[38] = choices[38][3];
 units[38] = "73";
 comments[38] = "Id Pregunta: 656. ";


//  Id pregunta: 727 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;C&uacute;al es el nombre de la reuni&oacute;n de SCRUM, donde se revisan los product backlog &iacute;tems?:";
 choices[39]= new Array();
 choices[39][0] = "Backlog refinement";
 choices[39][1] = "Backlog refinement";
 choices[39][2] = "A y b son correctas";
 choices[39][3] = "Ninguna de las anteriores";
 answers[39] = choices[39][2];
 units[39] = "34, 84";
 comments[39] = "Id Pregunta: 727. Metodologias &aacute;giles";


//  Id pregunta: 479 Año de creación de pregunta: 2016
 questions[40]= "41)  Conforme a Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el Presupuesto del Estado, los cr&eacute;ditos destinados a atenciones protocolarias y representativas se especificar&aacute;n:";
 choices[40]= new Array();
 choices[40][0] = "A nivel de art&iacute;culo.";
 choices[40][1] = "A nivel de cap&iacute;tulo.";
 choices[40][2] = "Al nivel que corresponda conforme a su concreta clasificaci&oacute;n econ&oacute;mica.";
 choices[40][3] = "A nivel de concepto.";
 answers[40] = choices[40][2];
 units[40] = "10";
 comments[40] = "Id Pregunta: 479. PRESUPUESTOS GENERALES";


//  Id pregunta: 258 Año de creación de pregunta: 2016
 questions[41]= "42)  El Art&iacute;culo 137 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Estado se organiza territorialmente en:";
 choices[41]= new Array();
 choices[41][0] = "Municipios, provincias y CCAA.";
 choices[41][1] = "En 17 CCAA m&aacute;s Ceuta y Melilla.";
 choices[41][2] = "En CCAA, 50 provincias y municipios.";
 choices[41][3] = "En municipios, en provincias, entidades locales menores y CCAA.";
 answers[41] = choices[41][2];
 units[41] = "1";
 comments[41] = "Id Pregunta: 258. CONSTITUCION1978";


//  Id pregunta: 790 Año de creación de pregunta: 2016
 questions[42]= "43)  La Administraci&oacute;n General del Estado se organiza:";
 choices[42]= new Array();
 choices[42][0] = "en Ministerios";
 choices[42][1] = "en Presidencia del Gobierno y en Ministerios";
 choices[42][2] = "en Presidencia del Gobierno, en Ministerios y en Secretar&iacute;as Generales";
 choices[42][3] = "en Presidencia del Gobierno, en Ministerios, en Secretar&iacute;as Generales y en el Servicio Exterior";
 answers[42] = choices[42][1];
 units[42] = "4, 7, 8, 9";
 comments[42] = "Id Pregunta: 790. Ley 40/2015";


//  Id pregunta: 389 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[43]= new Array();
 choices[43][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[43][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[43][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[43][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[43] = choices[43][0];
 units[43] = "14";
 comments[43] = "Id Pregunta: 389. POLITICAS DE IGUALDAD";


//  Id pregunta: 810 Año de creación de pregunta: 2016
 questions[44]= "45)  En las Comunidades Aut&oacute;nomas, en caso de ausencia, vacante o enfermedad del titular de la Delegaci&oacute;n del Gobierno, ser&aacute; suplido por:";
 choices[44]= new Array();
 choices[44][0] = "el Subdelegado del Gobierno que el Delegado designe y, en su defecto, al de la provincia en que tenga su sede";
 choices[44][1] = "el Subdelegado del Gobierno de la provincia en que tenga su sede y, en su defecto, al que el Delegado designe";
 choices[44][2] = "el Subdirector General que el Delegado designe";
 choices[44][3] = "el Secretario de Estado";
 answers[44] = choices[44][0];
 units[44] = "4, 7, 8, 9";
 comments[44] = "Id Pregunta: 810. Ley 40/2015";


//  Id pregunta: 128 Año de creación de pregunta: 2016
 questions[45]= "46)  El Presidente del Consejo de Transparencia y Buen Gobierno ser&aacute; nombrado ";
 choices[45]= new Array();
 choices[45][0] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Parlamento";
 choices[45][1] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Presidente del Gobierno";
 choices[45][2] = "Por un per&iacute;odo no renovable de cinco a&ntilde;os mediante Real Decreto, a propuesta del titular del Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[45][3] = "Por un per&iacute;odo no renovable de seis a&ntilde;os mediante Real Decreto, a propuesta del Consejo de Ministros.";
 answers[45] = choices[45][2];
 units[45] = "22";
 comments[45] = "Id Pregunta: 128. ";


//  Id pregunta: 7 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Cu&aacute;l de las siguientes asociaciones de protocolos y niveles OSI es correcta?";
 choices[46]= new Array();
 choices[46][0] = "Nivel 7 - MPLS.";
 choices[46][1] = "Nivel 3 - RARP.";
 choices[46][2] = "Nivel 2 - HDLC.";
 choices[46][3] = "Nivel 1 &ndash; CSMA/CD.";
 answers[46] = choices[46][2];
 units[46] = "105";
 comments[46] = "Id Pregunta: 7. AGE A1 2015";


//  Id pregunta: 584 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;Con qu&eacute; frecuencia se revisa la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE, para su alineamiento con las pol&iacute;ticas p&uacute;blicas del gobierno?";
 choices[47]= new Array();
 choices[47][0] = "Bienalmente";
 choices[47][1] = "Anualmente";
 choices[47][2] = "Semestralmente";
 choices[47][3] = "Cada cuatro a&ntilde;os";
 answers[47] = choices[47][1];
 units[47] = "19";
 comments[47] = "Id Pregunta: 584. Estrategia TIC";


//  Id pregunta: 648 Año de creación de pregunta: 2016
 questions[48]= "49)  Los IDS, (Sistemas de Detecci&oacute;n de Intrusos), pueden clasificarse:";
 choices[48]= new Array();
 choices[48][0] = "Solamente en funci&oacute;n de los sistemas que monitorizan.";
 choices[48][1] = "En funci&oacute;n de los sistemas que monitorizan y en funci&oacute;n de c&oacute;mo operan los Sistemas de Detecci&oacute;n de Intrusos.";
 choices[48][2] = "Solamente en funci&oacute;n de c&oacute;mo operan los Sistemas de Detecci&oacute;n de Intrusos.";
 choices[48][3] = "Estos sistemas es imposible clasificarlos.";
 answers[48] = choices[48][1];
 units[48] = "119";
 comments[48] = "Id Pregunta: 648. Junta de Extremadura A1 2015";


//  Id pregunta: 269 Año de creación de pregunta: 2016
 questions[49]= "50)  El T&iacute;tulo Segundo de la Constituci&oacute;n Espa&ntilde;ola tiene:";
 choices[49]= new Array();
 choices[49][0] = "Diez art&iacute;culos.";
 choices[49][1] = "Nueve art&iacute;culos.";
 choices[49][2] = "Once art&iacute;culos.";
 choices[49][3] = "Ocho art&iacute;culos.";
 answers[49] = choices[49][0];
 units[49] = "1";
 comments[49] = "Id Pregunta: 269. CONSTITUCION1978";


//  Id pregunta: 518 Año de creación de pregunta: 2016
 questions[50]= "51)  Las Corporaciones de Derecho P&uacute;blico se regir&aacute;n por:";
 choices[50]= new Array();
 choices[50][0] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[50][1] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica";
 choices[50][2] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[50][3] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica";
 answers[50] = choices[50][0];
 units[50] = "7";
 comments[50] = "Id Pregunta: 518. LEY 39/2015";


//  Id pregunta: 152 Año de creación de pregunta: 2016
 questions[51]= "52)  Los documentos electr&oacute;nicos deber&aacute;n conservarse en un formato que permita: (se&ntilde;ala la respuesta incorrecta)";
 choices[51]= new Array();
 choices[51][0] = "garantizar su consulta hasta transcurridos cinco a&ntilde;os desde su emisi&oacute;n";
 choices[51][1] = "garantizar la conservaci&oacute;n del documento";
 choices[51][2] = "garantizar la autenticidad del documento";
 choices[51][3] = "garantizar la integridad del documento";
 answers[51] = choices[51][0];
 units[51] = "7";
 comments[51] = "Id Pregunta: 152. Ley 39/2015, Art&iacute;culo 17";


//  Id pregunta: 73 Año de creación de pregunta: 2016
 questions[52]= "53)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Digitalizaci&oacute;n de Documentos, &iquest;cu&aacute;l de los siguientes metadatos no es considerado como metadato complementario?";
 choices[52]= new Array();
 choices[52][0] = "Resoluci&oacute;n, que indica el valor de resoluci&oacute;n en p&iacute;xeles por pulgada empleada en la digitalizaci&oacute;n.";
 choices[52][1] = "Origen, que indica si el contenido del documento fue creado por un ciudadano o por una administraci&oacute;n.";
 choices[52][2] = "Tama&ntilde;o, que indica el valor y unidades del tama&ntilde;o l&oacute;gico del documento digitalizado.";
 choices[52][3] = "Idioma, que indica el idioma del contenido del documento digitalizado.";
 answers[52] = choices[52][1];
 units[52] = "44";
 comments[52] = "Id Pregunta: 73. AGE A1 2015";


//  Id pregunta: 237 Año de creación de pregunta: 2016
 questions[53]= "54)  Seg&uacute;n la regulaci&oacute;n constitucional del derecho de asociaci&oacute;n:";
 choices[53]= new Array();
 choices[53][0] = "Las asociaciones que se constituyan deben inscribirse en un registro a los efectos de publicidad.";
 choices[53][1] = "Las asociaciones pueden ser suspendidas en virtud de resoluci&oacute;n administrativa motivada.";
 choices[53][2] = "Este derecho aparece regulado en el T&iacute;tulo Preliminar de la Constituci&oacute;n.";
 choices[53][3] = "Este derecho aparece regulado en la Secci&oacute;n 2&ordf; del Cap&iacute;tulo 2&ordm; del T&iacute;tulo I de la Constituci&oacute;n.";
 answers[53] = choices[53][2];
 units[53] = "1";
 comments[53] = "Id Pregunta: 237. CONSTITUCION1978";


//  Id pregunta: 119 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;Con qu&eacute; periodicidad se publica la EPA (Encuesta de Poblaci&oacute;n Activa)?";
 choices[54]= new Array();
 choices[54][0] = "Anual";
 choices[54][1] = "Mensual";
 choices[54][2] = "Semestral";
 choices[54][3] = "Trimestral";
 answers[54] = choices[54][3];
 units[54] = "15";
 comments[54] = "Id Pregunta: 119. ";


//  Id pregunta: 731 Año de creación de pregunta: 2016
 questions[55]= "56)  Cu&aacute;l de las siguientes reglas se corresponde a las reglas de la metodolog&iacute;a Kanban:";
 choices[55]= new Array();
 choices[55][0] = "Visualizar el trabajo o el flujo de trabajo. ";
 choices[55][1] = "Determinar el l&iacute;mite de trabajo en curso (Work in progress)";
 choices[55][2] = "Medir el tiempo en completar una tarea (Lead time)";
 choices[55][3] = "Todas las anteriores son reglas correspondientes a la metodolog&iacute;a Kanban.";
 answers[55] = choices[55][3];
 units[55] = "34, 84";
 comments[55] = "Id Pregunta: 731. Metodologias &aacute;giles";


//  Id pregunta: 387 Año de creación de pregunta: 2016
 questions[56]= "57)  El art&iacute;culo 37 de la Ley Org&aacute;nica 3/2007, para la igualdad efectiva de mujeres y hombres, indica que la Corporaci&oacute;n RTVE, en el ejercicio de su funci&oacute;n, perseguir&aacute; en su programaci&oacute;n:";
 choices[56]= new Array();
 choices[56][0] = "Mostrar anuncios para la igualdad de forma habitual.";
 choices[56][1] = "Ofrecer trabajo a mujeres v&iacute;ctimas de violencia de g&eacute;nero.";
 choices[56][2] = "Promover la incorporaci&oacute;n de mujeres a puestos visibles ante las c&aacute;maras.";
 choices[56][3] = "Reflejar adecuadamente la presencia de las mujeres en los diversos &aacute;mbitos de la vida social.";
 answers[56] = choices[56][3];
 units[56] = "14";
 comments[56] = "Id Pregunta: 387. POLITICAS DE IGUALDAD";


//  Id pregunta: 91 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes opciones muestra exclusivamente herramientas directamente relacionadas con la realizaci&oacute;n de pruebas para asegurar la calidad del software?";
 choices[57]= new Array();
 choices[57][0] = "JUnit, Artifactory y SonarQube";
 choices[57][1] = "JUnit, Artifactory y Selenium";
 choices[57][2] = "JUnit, SonarQube y Selenium";
 choices[57][3] = "ArtiFactory, SonarQube y Selenium";
 answers[57] = choices[57][2];
 units[57] = "92";
 comments[57] = "Id Pregunta: 91. AGE A1 2015";


//  Id pregunta: 638 Año de creación de pregunta: 2016
 questions[58]= "59)  Indique cu&aacute;l de las siguientes afirmaciones es la correcta:";
 choices[58]= new Array();
 choices[58][0] = "Linux dispone de los tres principales protocolos de red para sistemas UNIX: Novel, TCP/IP y UUCP.";
 choices[58][1] = "Linux dispone &uacute;nicamente del protocolo TCP/IP.";
 choices[58][2] = "Linux dispone de todos los protocolos de red existentes.";
 choices[58][3] = "Linux dispone de los dos principales protocolos de red para sistemas UNIX: TCP/IP y UUCP.";
 answers[58] = choices[58][3];
 units[58] = "57";
 comments[58] = "Id Pregunta: 638. Junta de Extremadura A1 2015";


//  Id pregunta: 158 Año de creación de pregunta: 2016
 questions[59]= "60)  Seg&uacute;n la ley 39/2015, cuando la notificaci&oacute;n por medios electr&oacute;nicos sea de car&aacute;cter obligatorio, o haya sido expresamente elegida por el interesado:";
 choices[59]= new Array();
 choices[59][0] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[59][1] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[59][2] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[59][3] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 answers[59] = choices[59][1];
 units[59] = "7";
 comments[59] = "Id Pregunta: 158. Ley 39/2015, Art&iacute;culo 43";


//  Id pregunta: 441 Año de creación de pregunta: 2016
 questions[60]= "61)  Se&ntilde;ale la respuesta falsa respecto a Habilit@, Registro de Funcionarios Habilitados:";
 choices[60]= new Array();
 choices[60][0] = "El art&iacute;culo 12.3 de la Ley 39/2015recoge que la Administraci&oacute;n General del Estado, las Comunidades Aut&oacute;nomas y las Entidades Locales mantendr&aacute;n actualizado un registro, u otro sistema equivalente, donde constar&aacute;n los funcionarios habilitados para la identificaci&oacute;n o firma.";
 choices[60][1] = "La Orden HAP/8/2014, de 7 de enero, regula el Registro de funcionarios habilitados para la identificaci&oacute;n y autenticaci&oacute;n de ciudadanos en el &aacute;mbito de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos vinculados o dependientes.";
 choices[60][2] = "En el caso en que el ciudadano no disponga de medios de autenticaci&oacute;n y firma para relacionarse de manera electr&oacute;nica con las Administraciones, la Ley 39/2015 prev&eacute; que, siempre que el ciudadano se identifique y deje constancia de su consentimiento expreso, un funcionario podr&aacute; actuar en su nombre, utilizando el sistema de firma del que disponga para ello.";
 choices[60][3] = "Tambi&eacute;n se establece en la misma Ley 39/2015 que las Administraciones P&uacute;blicas podr&aacute;n realizar copias aut&eacute;nticas de los documentos p&uacute;blicos administrativos o privados mediante funcionario habilitado.";
 answers[60] = choices[60][1];
 units[60] = "43";
 comments[60] = "Id Pregunta: 441. SERVICIOS COMUNES";


//  Id pregunta: 157 Año de creación de pregunta: 2016
 questions[61]= "62)  Seg&uacute;n la ley 39/2015, los actos administrativos ser&aacute;n objeto de publicaci&oacute;n cuando (se&ntilde;ala la incorrecta):";
 choices[61]= new Array();
 choices[61][0] = "la Administraci&oacute;n estime que la notificaci&oacute;n efectuada a un solo interesado es insuficiente para garantizar la notificaci&oacute;n a todos, no siendo necesaria la notificaci&oacute;n individualizada en este caso";
 choices[61][1] = "se trate de actos integrantes de un procedimiento selectivo o de concurrencia competitiva de cualquier tipo";
 choices[61][2] = "el acto tenga por destinatario a una pluralidad indeterminada de personas";
 choices[61][3] = "as&iacute; lo establezcan las normas reguladoras de cada procedimiento o lo aconsejen razones de inter&eacute;s p&uacute;blico apreciadas por el &oacute;rgano competente";
 answers[61] = choices[61][0];
 units[61] = "7";
 comments[61] = "Id Pregunta: 157. Ley 39/2015, Art&iacute;culo 45";


//  Id pregunta: 597 Año de creación de pregunta: 2016
 questions[62]= "63)  La pol&iacute;tica de seguridad de alto nivel de la Organizaci&oacute;n:";
 choices[62]= new Array();
 choices[62][0] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, sin entrar en detalles acerca del COMO.";
 choices[62][1] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer y COMO se debe implementar.";
 choices[62][2] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 choices[62][3] = "Debe describir QUE se intenta proteger, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 answers[62] = choices[62][0];
 units[62] = "45";
 comments[62] = "Id Pregunta: 597. Junta de Extremadura A1 2015";


//  Id pregunta: 522 Año de creación de pregunta: 2016
 questions[63]= "64)  A los efectos previstos en esta Ley, tendr&aacute;n capacidad de obrar ante las Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[63]= new Array();
 choices[63][0] = "las personas f&iacute;sicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 choices[63][1] = "los menores de edad para el ejercicio y defensa de aquellos de sus derechos e intereses cuya actuaci&oacute;n no est&eacute; permitida por el ordenamiento jur&iacute;dico sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[63][2] = "cuando la Ley as&iacute; lo declare expresamente, los grupos de afectados, las uniones y entidades sin personalidad jur&iacute;dica y los patrimonios independientes o aut&oacute;nomos";
 choices[63][3] = "las personas jur&iacute;dicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 answers[63] = choices[63][1];
 units[63] = "7";
 comments[63] = "Id Pregunta: 522. LEY 39/2015";


//  Id pregunta: 541 Año de creación de pregunta: 2016
 questions[64]= "65)  Se&ntilde;ala la correcta:";
 choices[64]= new Array();
 choices[64][0] = "la falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n impedir&aacute; que se tenga por realizado el acto de que se trate";
 choices[64][1] = "el documento electr&oacute;nico que acredite el resultado de la consulta al registro electr&oacute;nico de apoderamientos correspondiente tendr&aacute; la condici&oacute;n de acreditaci&oacute;n a estos efectos";
 choices[64][2] = "los registros electr&oacute;nicos generales y particulares de apoderamientos pertenecientes a todas y cada una de las Administraciones, ser&aacute;n preferiblemente interoperables entre s&iacute;";
 choices[64][3] = "el interesado no podr&aacute; comparecer por s&iacute; mismo en un procedimiento en el que haya designado representante";
 answers[64] = choices[64][1];
 units[64] = "7";
 comments[64] = "Id Pregunta: 541. LEY 39/2015";


//  Id pregunta: 210 Año de creación de pregunta: 2016
 questions[65]= "66)  De acuerdo con la Constituci&oacute;n espa&ntilde;ola, la declaraci&oacute;n del estado de excepci&oacute;n corresponde a:";
 choices[65]= new Array();
 choices[65][0] = "El rey, a propuesta del Gobierno.";
 choices[65][1] = "El Gobierno, mediante Decreto acordado en Consejo de Ministros, previa autorizaci&oacute;n del Congreso de los Diputados.";
 choices[65][2] = "El Congreso de los Diputados, a propuesta del Consejo de Ministros.";
 choices[65][3] = "Las Cortes Generales, por mayor&iacute;a de los miembros de cada C&aacute;mara.";
 answers[65] = choices[65][1];
 units[65] = "1";
 comments[65] = "Id Pregunta: 210. CONSTITUCION1978";


//  Id pregunta: 620 Año de creación de pregunta: 2016
 questions[66]= "67)  En el entorno de la Arquitectura del Software, un patr&oacute;n :";
 choices[66]= new Array();
 choices[66][0] = "Es una soluci&oacute;n a un problema en un contexto particular.";
 choices[66][1] = "Es recurrente y ense&ntilde;a permitiendo entender c&oacute;mo adaptarlo a la variante particular del problema donde se quiere aplicar.";
 choices[66][2] = "Tiene un nombre para referirse al patr&oacute;n.";
 choices[66][3] = "Todas las respuestas son correctas.";
 answers[66] = choices[66][3];
 units[66] = "50";
 comments[66] = "Id Pregunta: 620. Junta de Extremadura A1 2015";


//  Id pregunta: 803 Año de creación de pregunta: 2016
 questions[67]= "68)  Existir&aacute; un Subdelegado del Gobierno, que estar&aacute; bajo la inmediata dependencia del Delegado del Gobierno:";
 choices[67]= new Array();
 choices[67][0] = "en cada Comunidad Aut&oacute;noma";
 choices[67][1] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas pluriprovinciales";
 choices[67][2] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas uniprovinciales";
 choices[67][3] = "en cada una de las localidades de las Comunidades Aut&oacute;nomas";
 answers[67] = choices[67][1];
 units[67] = "4, 7, 8, 9";
 comments[67] = "Id Pregunta: 803. Ley 40/2015";


//  Id pregunta: 156 Año de creación de pregunta: 2016
 questions[68]= "69)  Seg&uacute;n la ley 39/2015, toda notificaci&oacute;n deber&aacute; (se&ntilde;ala la respuesta incorrecta):";
 choices[68]= new Array();
 choices[68][0] = "contener el texto &iacute;ntegro de la resoluci&oacute;n";
 choices[68][1] = "expresar los recursos que procedan, &uacute;nicamente en v&iacute;a administrativa";
 choices[68][2] = "indicar si pone fin o no a la v&iacute;a administrativa";
 choices[68][3] = "indicar el &oacute;rgano ante el que hubieran de presentarse los recursos que procedan y el plazo para interponerlos";
 answers[68] = choices[68][1];
 units[68] = "7";
 comments[68] = "Id Pregunta: 156. Ley 39/2015, Art&iacute;culo 40";


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


//  Id pregunta: 470 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Qui&eacute;n remitir&aacute; a las Cortes Generales un informe trimestral acerca de la utilizaci&oacute;n del Fondo regulado en el Fondo de Contingencia de ejecuci&oacute;n presupuestaria seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria?";
 choices[70]= new Array();
 choices[70][0] = "El Ministro de Econom&iacute;a.";
 choices[70][1] = "El Gobierno.";
 choices[70][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[70][3] = "El Presidente del Gobierno.";
 answers[70] = choices[70][1];
 units[70] = "10";
 comments[70] = "Id Pregunta: 470. PRESUPUESTOS GENERALES";


//  Id pregunta: 442 Año de creación de pregunta: 2016
 questions[71]= "72)  Sobre la gu&iacute;a de Comunicaci&oacute;n Digital de la AGE, se&ntilde;ale la respuesta falsa:";
 choices[71]= new Array();
 choices[71][0] = "La Gu&iacute;a de Comunicaci&oacute;n Digital para la AGE ofrece un marco de criterios, recomendaciones y buenas pr&aacute;cticas a considerar al crear, generar contenidos o evolucionar sitios web, sedes electr&oacute;nicas o tambi&eacute;n blogs, cuentas o perfiles de redes sociales.";
 choices[71][1] = "Recoge aspectos como la imagen Institucional: uso de los logotipos del Gobierno de Espa&ntilde;a, elementos distintivos de imagen en las redes sociales o la imagen promocional de la administraci&oacute;n electr&oacute;nica.";
 choices[71][2] = "Se divide en tres partes, con fasc&iacute;culos que pueden ser utilizados independientemente seg&uacute;n las necesidades de cada responsable del sitio web.";
 choices[71][3] = "La &laquo;Gu&iacute;a de Comunicaci&oacute;n Digital para la Administraci&oacute;n General del Estado&raquo; que se aprueba mediante la presente Resoluci&oacute;n se aplicar&aacute; al a&ntilde;o siguiente al de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 answers[71] = choices[71][3];
 units[71] = "43";
 comments[71] = "Id Pregunta: 442. SERVICIOS COMUNES";


//  Id pregunta: 23 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Cu&aacute;l de los siguientes lenguajes propone el W3C para consultar datos en formato RDF?";
 choices[72]= new Array();
 choices[72][0] = "SPARQL";
 choices[72][1] = "UnQL";
 choices[72][2] = "XQUERY";
 choices[72][3] = "RQL";
 answers[72] = choices[72][0];
 units[72] = "74";
 comments[72] = "Id Pregunta: 23. AGE A1 2015";


//  Id pregunta: 381 Año de creación de pregunta: 2016
 questions[73]= "74)  La ley Org&aacute;nica 3/2007 para la igualdad efectiva entre hombres y mujeres en el &aacute;mbito de la Sociedad de la Informaci&oacute;n, obliga al Gobierno:";
 choices[73]= new Array();
 choices[73][0] = "A promover los contenidos creados por mujeres en el &aacute;mbito de la Sociedad de la Informaci&oacute;n";
 choices[73][1] = "A proteger los contenidos creados por mujeres n el &aacute;mbito de la Sociedad de la Informaci&oacute;n con medidas especiales de propiedad intelectual.";
 choices[73][2] = "A dise&ntilde;ar webs con contenido espec&iacute;fico femenino.";
 choices[73][3] = "A incorporar, en las convocatorias de empleo p&uacute;blico, igual n&uacute;mero de funcionarios que de funcionarias.";
 answers[73] = choices[73][0];
 units[73] = "14";
 comments[73] = "Id Pregunta: 381. POLITICAS DE IGUALDAD";


//  Id pregunta: 686 Año de creación de pregunta: 2016
 questions[74]= "75)  Indique cu&aacute;l de las siguientes afirmaciones no es correcta seg&uacute;n lo establecido en el Reglamento (UE) 910/2014";
 choices[74]= new Array();
 choices[74][0] = "Las firmas electro&#769;nicas cualificadas tendr&aacute;n un efecto juri&#769;dico equivalente al de una firma manuscrita";
 choices[74][1] = "Una firma electro&#769;nica cualificada basada en un certificado cualificado emitido en un Estado miembro sera&#769; reconocida como firma electro&#769;nica cualificada en los dema&#769;s Estados miembros";
 choices[74][2] = "No se denegara&#769;n efectos juri&#769;dicos ni admisibilidad como prueba en procedimientos judiciales a una firma electro&#769;nica por el mero hecho de ser una firma electro&#769;nica";
 choices[74][3] = "Las firmas electr&oacute;nicas cualificadas tendr&aacute;n una validez de 48 meses";
 answers[74] = choices[74][3];
 units[74] = "77";
 comments[74] = "Id Pregunta: 686. Art&iacute;culo 25 del Reglamento 910/2014";


