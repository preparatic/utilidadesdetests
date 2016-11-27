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

//  Id pregunta: 28 Año de creación de pregunta: 2016
 questions[0]= "1)  En UNIX, la llamada &ldquo;FORK&rdquo;:";
 choices[0]= new Array();
 choices[0][0] = "Controla el tiempo de ejecuci&oacute;n de un proceso.";
 choices[0][1] = "Env&iacute;a una se&ntilde;al al proceso especificado.";
 choices[0][2] = "Crea una copia del proceso que hace la llamada.";
 choices[0][3] = "Elimina el mapa de memoria del proceso que hace la llamada.";
 answers[0] = choices[0][2];
 units[0] = "57";
 comments[0] = "Id Pregunta: 28. AGE A1 2015";


//  Id pregunta: 453 Año de creación de pregunta: 2016
 questions[1]= "2)  En las Administraciones P&uacute;blicas...";
 choices[1]= new Array();
 choices[1][0] = "Existe un Presupuesto ordinario &uacute;nicamente";
 choices[1][1] = "Existen s&oacute;lo un presupuesto ordinario y un presupuesto extraordinario";
 choices[1][2] = "Existe un &uacute;nico presupuesto ordinario y uno o varios presupuestos extraordinarios";
 choices[1][3] = "Existen varios presupuestos que indistintamente pueden ser considerados ordinarios o extraordinarios";
 answers[1] = choices[1][0];
 units[1] = "10";
 comments[1] = "Id Pregunta: 453. PRESUPUESTOS GENERALES";


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


//  Id pregunta: 736 Año de creación de pregunta: 2016
 questions[3]= "4)  Las iniciativas que se lancen al amparo del Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE se ce&ntilde;ir&aacute;n a:";
 choices[3]= new Array();
 choices[3][0] = "6 principios.";
 choices[3][1] = "7 principios.";
 choices[3][2] = "5 principios.";
 choices[3][3] = "6 directrices.";
 answers[3] = choices[3][1];
 units[3] = "28";
 comments[3] = "Id Pregunta: 736. Estrategia TIC";


//  Id pregunta: 307 Año de creación de pregunta: 2016
 questions[4]= "5)  Las elecciones al Parlamento Europeo tienen lugar cada:";
 choices[4]= new Array();
 choices[4][0] = "Seis a&ntilde;os.";
 choices[4][1] = "Cinco a&ntilde;os.";
 choices[4][2] = "Cuatro a&ntilde;os.";
 choices[4][3] = "Ocho a&ntilde;os.";
 answers[4] = choices[4][1];
 units[4] = "5";
 comments[4] = "Id Pregunta: 307. UNION EUROPEA";


//  Id pregunta: 527 Año de creación de pregunta: 2016
 questions[5]= "6)  Los interesados con capacidad de obrar podr&aacute;n actuar por medio de representante:";
 choices[5]= new Array();
 choices[5][0] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 choices[5][1] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[5][2] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[5][3] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 answers[5] = choices[5][2];
 units[5] = "7";
 comments[5] = "Id Pregunta: 527. LEY 39/2015";


//  Id pregunta: 82 Año de creación de pregunta: 2016
 questions[6]= "7)  La titularidad de los derechos de explotaci&oacute;n de un programa de ordenador por una persona jur&iacute;dica expirar&aacute;:";
 choices[6]= new Array();
 choices[6][0] = "A los setenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[6][1] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita, o al de su creaci&oacute;n si no se hubiera divulgado.";
 choices[6][2] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[6][3] = "A los setenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita o al de su creaci&oacute;n si no se hubiera divulgado.";
 answers[6] = choices[6][3];
 units[6] = "41";
 comments[6] = "Id Pregunta: 82. AGE A1 2015";


//  Id pregunta: 569 Año de creación de pregunta: 2016
 questions[7]= "8)  El sector Servicios NO incluye:";
 choices[7]= new Array();
 choices[7][0] = "El Comercio";
 choices[7][1] = "Los Transportes";
 choices[7][2] = "La Energ&iacute;a";
 choices[7][3] = "Las Comunicaciones";
 answers[7] = choices[7][2];
 units[7] = "12";
 comments[7] = "Id Pregunta: 569. Modelo econ&oacute;mico";


//  Id pregunta: 595 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Qui&eacute;n elabora y ejecuta los Planes de Acci&oacute;n Sectoriales?";
 choices[8]= new Array();
 choices[8][0] = "La CETIC";
 choices[8][1] = "Los Ministerios";
 choices[8][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[8][3] = "Ninguno de los anteriores";
 answers[8] = choices[8][1];
 units[8] = "19";
 comments[8] = "Id Pregunta: 595. Estrategia TIC";


//  Id pregunta: 398 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Qu&eacute; art&iacute;culo de la Ley Org&aacute;nica 3/2007 para la igualdad efectiva de mujeres y hombres, regula las acciones positivas?";
 choices[9]= new Array();
 choices[9][0] = "Art. 13, L.O.3/2007.";
 choices[9][1] = "Art. 14, L.O.3/2007.";
 choices[9][2] = "Art. 11, L.O.3/2007.";
 choices[9][3] = "Ninguna es correcta.";
 answers[9] = choices[9][2];
 units[9] = "14";
 comments[9] = "Id Pregunta: 398. POLITICAS DE IGUALDAD";


//  Id pregunta: 214 Año de creación de pregunta: 2016
 questions[10]= "11)  Seg&uacute;n el T&iacute;tulo II de la Constituci&oacute;n Espa&ntilde;ola relativo a la Corona:";
 choices[10]= new Array();
 choices[10][0] = "La Regencia se ejercer&aacute; por mandato constitucional y siempre en nombre del Rey.";
 choices[10][1] = "Las abdicaciones y renuncias en el orden sucesorio se resolver&aacute;n por ley ordinaria.";
 choices[10][2] = "El Pr&iacute;ncipe heredero podr&aacute; asumir la Regencia durante su minor&iacute;a de edad.";
 choices[10][3] = "La Regencia podr&aacute; ejercerse por nacionales de cualquier Estado.";
 answers[10] = choices[10][0];
 units[10] = "1";
 comments[10] = "Id Pregunta: 214. CONSTITUCION1978";


//  Id pregunta: 319 Año de creación de pregunta: 2016
 questions[11]= "12)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[11]= new Array();
 choices[11][0] = "El Presidente de la Comisi&oacute;n, con la aprobaci&oacute;n de la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[11][1] = "La Comisi&oacute;n por mayor&iacute;a de dos tercios de sus miembros puede exigir la dimisi&oacute;n de un Comisario.";
 choices[11][2] = "El Presidente, sin necesidad de contar con la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[11][3] = "&Uacute;nicamente el Presidente del Consejo puede exigir la dimisi&oacute;n de un Comisario.";
 answers[11] = choices[11][0];
 units[11] = "5";
 comments[11] = "Id Pregunta: 319. UNION EUROPEA";


//  Id pregunta: 728 Año de creación de pregunta: 2016
 questions[12]= "13)  Indica la respuesta correcta";
 choices[12]= new Array();
 choices[12][0] = "Scrum no implica baja documentaci&oacute;n, de hecho hay estudios que estiman que es totalmente compatible con CMMI-3";
 choices[12][1] = "Scrum es una metodolog&iacute;a poco organizada";
 choices[12][2] = "Scrum no suele incluir a testers en el SCRUM TEAM";
 choices[12][3] = "En Scrum, sufre la calidad del producto o servicio al no pasar procesos de calidad reglados";
 answers[12] = choices[12][0];
 units[12] = "34, 84";
 comments[12] = "Id Pregunta: 728. Metodologias &aacute;giles";


//  Id pregunta: 754 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Cu&aacute;l de los siguientes no es un eje del Plan de Servicios P&uacute;blicos Digitales que forma parte de la Agenda Digital para Espa&ntilde;a?";
 choices[13]= new Array();
 choices[13][0] = "Programa de Educaci&oacute;n Digital";
 choices[13][1] = "Programa de Salud y Bienestar Social";
 choices[13][2] = "Programa de Administraci&oacute;n de Justicia Digital";
 choices[13][3] = "Programa de capacitaci&oacute;n de profesionales TIC";
 answers[13] = choices[13][3];
 units[13] = "19";
 comments[13] = "Id Pregunta: 754. Agenda Digital para Espa&ntilde;a";


//  Id pregunta: 620 Año de creación de pregunta: 2016
 questions[14]= "15)  En el entorno de la Arquitectura del Software, un patr&oacute;n :";
 choices[14]= new Array();
 choices[14][0] = "Es una soluci&oacute;n a un problema en un contexto particular.";
 choices[14][1] = "Es recurrente y ense&ntilde;a permitiendo entender c&oacute;mo adaptarlo a la variante particular del problema donde se quiere aplicar.";
 choices[14][2] = "Tiene un nombre para referirse al patr&oacute;n.";
 choices[14][3] = "Todas las respuestas son correctas.";
 answers[14] = choices[14][3];
 units[14] = "50";
 comments[14] = "Id Pregunta: 620. Junta de Extremadura A1 2015";


//  Id pregunta: 384 Año de creación de pregunta: 2016
 questions[15]= "16)  De conformidad con lo establecido en la Org&aacute;nica 3/2007 para la igualdad efectiva entre mujeres y hombres, los &oacute;rganos de contrataci&oacute;n podr&aacute;n establecer en los pliegos de cl&aacute;usulas administrativas particulares la preferencia, en igualdad de condiciones jur&iacute;dicas y econ&oacute;micas, en la adjudicaci&oacute;n de los contratos de las proposiciones presentadas por aquellas empresas que:";
 choices[15]= new Array();
 choices[15][0] = "Sean dirigidas por mujeres";
 choices[15][1] = "Cuenten con un colectivo paritario de trabajadores y trabajadoras";
 choices[15][2] = "Incluyan en su proposici&oacute;n para ejecutar el contrato medidas para promover la igualdad efectiva entre mujeres y hombres";
 choices[15][3] = "Fomenten el acceso de las mujeres a puestos directivos.";
 answers[15] = choices[15][2];
 units[15] = "14";
 comments[15] = "Id Pregunta: 384. POLITICAS DE IGUALDAD";


//  Id pregunta: 364 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;En qu&eacute; fecha entr&oacute; en vigor el Tratado de Amsterdam?:";
 choices[16]= new Array();
 choices[16][0] = "El 1 de junio de 1999.";
 choices[16][1] = "El 1 de mayo de 1999.";
 choices[16][2] = "El 1 de abril de 1999.";
 choices[16][3] = "El 1 de marzo de 1999.";
 answers[16] = choices[16][1];
 units[16] = "5";
 comments[16] = "Id Pregunta: 364. UNION EUROPEA";


//  Id pregunta: 640 Año de creación de pregunta: 2016
 questions[17]= "18)  Los sistemas de archivos gestionados por Windows 2008 Server son:";
 choices[17]= new Array();
 choices[17][0] = "Fat y Ntfs.";
 choices[17][1] = "Extfat y Fat.";
 choices[17][2] = "Fat y Nfst.";
 choices[17][3] = "ext2fs y Ntfs.";
 answers[17] = choices[17][0];
 units[17] = "58";
 comments[17] = "Id Pregunta: 640. Junta de Extremadura A1 2015";


//  Id pregunta: 716 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;C&uacute;al es un objetivo de las metodolog&iacute;as lean?";
 choices[18]= new Array();
 choices[18][0] = "Maximizar el valor para los clientes";
 choices[18][1] = "Reducir los costes y aumentar la calidad del producto o del servicio";
 choices[18][2] = " Entregar productos de manera m&aacute;s r&aacute;pida";
 choices[18][3] = "Todos los anteriores son objetivos de la metodolog&iacute;a lean";
 answers[18] = choices[18][3];
 units[18] = "34";
 comments[18] = "Id Pregunta: 716. Metodologias Lean";


//  Id pregunta: 597 Año de creación de pregunta: 2016
 questions[19]= "20)  La pol&iacute;tica de seguridad de alto nivel de la Organizaci&oacute;n:";
 choices[19]= new Array();
 choices[19][0] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, sin entrar en detalles acerca del COMO.";
 choices[19][1] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer y COMO se debe implementar.";
 choices[19][2] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 choices[19][3] = "Debe describir QUE se intenta proteger, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 answers[19] = choices[19][0];
 units[19] = "45";
 comments[19] = "Id Pregunta: 597. Junta de Extremadura A1 2015";


//  Id pregunta: 182 Año de creación de pregunta: 2016
 questions[20]= "21)  De acuerdo con el T&iacute;tulo II de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; tutor del Rey menor:";
 choices[20]= new Array();
 choices[20][0] = "El que hubiere designado el familiar m&aacute;s cercano al Rey difunto.";
 choices[20][1] = "El que hubiere designado el Rey difunto en su testamento.";
 choices[20][2] = "El que hubieren designado las Cortes Generales.";
 choices[20][3] = "El que hubiere designado el Senado por mayor&iacute;a absoluta.";
 answers[20] = choices[20][1];
 units[20] = "1";
 comments[20] = "Id Pregunta: 182. CONSTITUCION1978";


//  Id pregunta: 712 Año de creación de pregunta: 2016
 questions[21]= "22)  Seg&uacute;n la Ley 19/2013 de transparencia, las unidades de informaci&oacute;n en el &aacute;mbito de la AGE (se&ntilde;ale la falsa):";
 choices[21]= new Array();
 choices[21][0] = "Son unidades especializadas que se encargan de recibir y dar tramitaci&oacute;n a las solicitudes de acceso a la informaci&oacute;n.";
 choices[21][1] = "Son unidades especializadas que aseguran la disponibilidad en la respectiva p&aacute;gina web o sede electr&oacute;nica de la informaci&oacute;n cuyo acceso se solicita con m&aacute;s frecuencia.";
 choices[21][2] = "La Oficina de Transparencia y Acceso a la Informaci&oacute;n P&uacute;blica es la unidad de informaci&oacute;n del Ministerio de la Presidencia.";
 choices[21][3] = "Son unidades especializadas en elaborar legislaci&oacute;n en el &aacute;mbito de la transparencia p&uacute;blica.";
 answers[21] = choices[21][3];
 units[21] = "22";
 comments[21] = "Id Pregunta: 712. Ley de transparencia";


//  Id pregunta: 462 Año de creación de pregunta: 2016
 questions[22]= "23)  De acuerdo con lo establecido en la Ley General Presupuestaria, durante el ejercicio presupuestario no es posible modificar la cuant&iacute;a y/o finalidad de los cr&eacute;ditos contenidos en los presupuestos de gastos mediante:";
 choices[22]= new Array();
 choices[22][0] = "Transferencias de cr&eacute;dito.";
 choices[22][1] = "Incorporaciones de cr&eacute;dito.";
 choices[22][2] = "Imputaciones de cr&eacute;dito.";
 choices[22][3] = "Ampliaciones de cr&eacute;dito.";
 answers[22] = choices[22][2];
 units[22] = "10";
 comments[22] = "Id Pregunta: 462. PRESUPUESTOS GENERALES";


//  Id pregunta: 346 Año de creación de pregunta: 2016
 questions[23]= "24)  La duraci&oacute;n del mandato de un diputado del Parlamento Europeo es de:";
 choices[23]= new Array();
 choices[23][0] = "25 diputados lo son con car&aacute;cter vitalicio y el resto se renueva cada cinco a&ntilde;os.";
 choices[23][1] = "Cuatro a&ntilde;os, como un diputado espa&ntilde;ol.";
 choices[23][2] = "Cinco a&ntilde;os.";
 choices[23][3] = "Ninguna es correcta.";
 answers[23] = choices[23][2];
 units[23] = "5";
 comments[23] = "Id Pregunta: 346. UNION EUROPEA";


//  Id pregunta: 601 Año de creación de pregunta: 2016
 questions[24]= "25)  Los criptosistemas pueden clasificarse en:";
 choices[24]= new Array();
 choices[24][0] = "Concretos, Estables e Inestables.";
 choices[24][1] = "Sim&eacute;tricos, Paralelos y Referenciales.";
 choices[24][2] = "Asim&eacute;tricos, Referenciales y Concretos.";
 choices[24][3] = "Sim&eacute;tricos, Asim&eacute;tricos e H&iacute;bridos.";
 answers[24] = choices[24][3];
 units[24] = "76";
 comments[24] = "Id Pregunta: 601. Junta de Extremadura A1 2015";


//  Id pregunta: 791 Año de creación de pregunta: 2016
 questions[25]= "26)  En la Administraci&oacute;n General del Estado en el exterior son &oacute;rganos directivos:";
 choices[25]= new Array();
 choices[25][0] = "los Ministros y los Secretarios de Estado";
 choices[25][1] = "los Subsecretarios y Secretarios generales";
 choices[25][2] = "los embajadores y representantes permanentes ante Organizaciones internacionales";
 choices[25][3] = "los Directores generales";
 answers[25] = choices[25][2];
 units[25] = "4, 7, 8, 9";
 comments[25] = "Id Pregunta: 791. Ley 40/2015";


//  Id pregunta: 744 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Cu&aacute;l de los siguientes NO es uno de los principios de la Ley de Garant&iacute;a de la Unidad de Mercado?";
 choices[26]= new Array();
 choices[26][0] = "No discriminaci&oacute;n";
 choices[26][1] = "Cooperaci&oacute;n";
 choices[26][2] = "Colaboraci&oacute;n";
 choices[26][3] = "Todos los anteriores son principios de la Ley de Garant&iacute;a de la Unidad de Mercado";
 answers[26] = choices[26][2];
 units[26] = "18, 20";
 comments[26] = "Id Pregunta: 744. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 283 Año de creación de pregunta: 2016
 questions[27]= "28)  Se&ntilde;ale cu&aacute;l no es una de las prioridades de la Estrategia Europa 2020:";
 choices[27]= new Array();
 choices[27][0] = "Crecimiento inteligente.";
 choices[27][1] = "Crecimiento inclusivo.";
 choices[27][2] = "Crecimiento sostenible.";
 choices[27][3] = "Crecimiento integrador.";
 answers[27] = choices[27][1];
 units[27] = "5";
 comments[27] = "Id Pregunta: 283. UNION EUROPEA";


//  Id pregunta: 851 Año de creación de pregunta: 2016
 questions[28]= "29)  Si disponemos de 8 discos SAS de 1TB netos configurados en RAID1, &iquest;de qu&eacute; capacidad neta se dispone en RAID1 en el sistema de almacenamiento?";
 choices[28]= new Array();
 choices[28][0] = "6 TB.";
 choices[28][1] = "8 TB.";
 choices[28][2] = "7 TB.";
 choices[28][3] = "4 TB.";
 answers[28] = choices[28][3];
 units[28] = "53";
 comments[28] = "Id Pregunta: 851. Xunta de Galicia 2015";


//  Id pregunta: 771 Año de creación de pregunta: 2016
 questions[29]= "30)  La actuaci&oacute;n de la Administraci&oacute;n P&uacute;blica respectiva se desarrolla para alcanzar los objetivos que establecen las leyes y el resto del ordenamiento jur&iacute;dico, bajo la direcci&oacute;n de (se&ntilde;ala la incorrecta):";
 choices[29]= new Array();
 choices[29][0] = "el Gobierno de la Naci&oacute;n";
 choices[29][1] = "los &oacute;rganos de gobierno de las Comunidades Aut&oacute;nomas";
 choices[29][2] = "los &oacute;rganos de gobierno de las Entidades Locales";
 choices[29][3] = "los &oacute;rganos de gobierno de las Universidades p&uacute;blicas";
 answers[29] = choices[29][3];
 units[29] = "4, 7, 8, 9";
 comments[29] = "Id Pregunta: 771. Ley 40/2015";


//  Id pregunta: 89 Año de creación de pregunta: 2016
 questions[30]= "31)  En un contrato cuyo presupuesto es de 100.000 euros sin IVA y se adjudica por 80.000, IVA excluido, la garant&iacute;a definitiva ser&aacute; de:";
 choices[30]= new Array();
 choices[30][0] = "2.400 euros";
 choices[30][1] = "4.000 euros";
 choices[30][2] = "3.200 euros";
 choices[30][3] = "1.600 euros";
 answers[30] = choices[30][1];
 units[30] = "37";
 comments[30] = "Id Pregunta: 89. AGE A1 2015";


//  Id pregunta: 432 Año de creación de pregunta: 2016
 questions[31]= "32)  Las sociedades obligadas a presentar cuenta de p&eacute;rdidas y ganancias no abreviada, procurar&aacute;n incluir en su Consejo de Administraci&oacute;n un n&uacute;mero de mujeres que permita alcanzar la presencia equilibrada de mujeres y hombres en un plazo:";
 choices[31]= new Array();
 choices[31][0] = "De ocho a&ntilde;os.";
 choices[31][1] = "El d&iacute;a despu&eacute;s de la publicaci&oacute;n en el BOE de la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombre.";
 choices[31][2] = "Ambas son correctas.";
 choices[31][3] = "No existe un l&iacute;mite.";
 answers[31] = choices[31][0];
 units[31] = "14";
 comments[31] = "Id Pregunta: 432. POLITICAS DE IGUALDAD";


//  Id pregunta: 613 Año de creación de pregunta: 2016
 questions[32]= "33)  El Modelo de Referencia de Interconexi&oacute;n de Sistemas Abiertos (OSI) consta de siete niveles. Se&ntilde;ala cu&aacute;l de los principios que se aplicaron para llevar a cabo esta divisi&oacute;n es falso:";
 choices[32]= new Array();
 choices[32][0] = "No se deben crear demasiados niveles de manera que la tarea de describir e integrar &eacute;stos fuera m&aacute;s dif&iacute;cil de lo necesario.";
 choices[32][1] = "Aunque se requiera un nivel de abstracci&oacute;n diferente en el manejo de los datos, debe usarse un nivel ya existente.";
 choices[32][2] = "Cada nivel debe realizar unas funciones bien definidas.";
 choices[32][3] = "Crear para cada nivel interfases con el nivel superior e inferior &uacute;nicamente.";
 answers[32] = choices[32][1];
 units[32] = "48";
 comments[32] = "Id Pregunta: 613. Junta de Extremadura A1 2015";


//  Id pregunta: 157 Año de creación de pregunta: 2016
 questions[33]= "34)  Seg&uacute;n la ley 39/2015, los actos administrativos ser&aacute;n objeto de publicaci&oacute;n cuando (se&ntilde;ala la incorrecta):";
 choices[33]= new Array();
 choices[33][0] = "la Administraci&oacute;n estime que la notificaci&oacute;n efectuada a un solo interesado es insuficiente para garantizar la notificaci&oacute;n a todos, no siendo necesaria la notificaci&oacute;n individualizada en este caso";
 choices[33][1] = "se trate de actos integrantes de un procedimiento selectivo o de concurrencia competitiva de cualquier tipo";
 choices[33][2] = "el acto tenga por destinatario a una pluralidad indeterminada de personas";
 choices[33][3] = "as&iacute; lo establezcan las normas reguladoras de cada procedimiento o lo aconsejen razones de inter&eacute;s p&uacute;blico apreciadas por el &oacute;rgano competente";
 answers[33] = choices[33][0];
 units[33] = "7";
 comments[33] = "Id Pregunta: 157. Ley 39/2015, Art&iacute;culo 45";


//  Id pregunta: 416 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Qu&eacute; art&iacute;culo de la LO 3/2007, regula la igualdad en el &aacute;mbito de la educaci&oacute;n superior:";
 choices[34]= new Array();
 choices[34][0] = "Art. 25 LO, 3/2007.";
 choices[34][1] = "Art. 23 LO, 3/2007.";
 choices[34][2] = "Art. 14 LO, 3/2007.";
 choices[34][3] = "Ninguna es correcta, es el art. 13.";
 answers[34] = choices[34][0];
 units[34] = "14";
 comments[34] = "Id Pregunta: 416. POLITICAS DE IGUALDAD";


//  Id pregunta: 104 Año de creación de pregunta: 2016
 questions[35]= "36)  Son bases de datos NoSQL:";
 choices[35]= new Array();
 choices[35][0] = "MongoDB y Maria DB";
 choices[35][1] = "HBase y Dynamo";
 choices[35][2] = "MariaDB, Cassandra y BigTable";
 choices[35][3] = "La A) y la C)";
 answers[35] = choices[35][1];
 units[35] = "73";
 comments[35] = "Id Pregunta: 104. ";


//  Id pregunta: 565 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Qu&eacute; limites marca el &quot;pacto fiscal europeo&quot; de 2012 para sus Estados Miembros?";
 choices[36]= new Array();
 choices[36][0] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 40% del PIB";
 choices[36][1] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 choices[36][2] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 50% del PIB";
 choices[36][3] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 answers[36] = choices[36][3];
 units[36] = "12";
 comments[36] = "Id Pregunta: 565. Modelo econ&oacute;mico";


//  Id pregunta: 493 Año de creación de pregunta: 2016
 questions[37]= "38)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, inspeccionar la actividad de las oficinas de contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una competencia de:";
 choices[37]= new Array();
 choices[37][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[37][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[37][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[37][3] = "La Intervenci&oacute;n General de la Seguridad Social.";
 answers[37] = choices[37][2];
 units[37] = "10";
 comments[37] = "Id Pregunta: 493. PRESUPUESTOS GENERALES";


//  Id pregunta: 321 Año de creación de pregunta: 2016
 questions[38]= "39)  Indique el n&uacute;mero de Diputados del Parlamento Europeo que actualmente le corresponden a Espa&ntilde;a:";
 choices[38]= new Array();
 choices[38][0] = "Cincuenta y cuatro.";
 choices[38][1] = "Cincuenta.";
 choices[38][2] = "Cincuenta y cinco.";
 choices[38][3] = "Cincuenta y dos.";
 answers[38] = choices[38][1];
 units[38] = "5";
 comments[38] = "Id Pregunta: 321. UNION EUROPEA";


//  Id pregunta: 270 Año de creación de pregunta: 2016
 questions[39]= "40)  La tutela de los derechos fundamentales y libertades p&uacute;blicas reconocidos en la secci&oacute;n primera del cap&iacute;tulo II del T&iacute;tulo I de la Constituci&oacute;n espa&ntilde;ola podr&aacute; recabarse por cualquier ciudadano:";
 choices[39]= new Array();
 choices[39][0] = "S&oacute;lo ante el Tribunal Constitucional de acuerdo con lo previsto en el Art&iacute;culo 161.1.a), referente al recurso de Inconstitucionalidad.";
 choices[39][1] = "S&oacute;lo ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad.";
 choices[39][2] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, ante el Tribunal Constitucional a trav&eacute;s del recurso de inconstitucionalidad.";
 choices[39][3] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional.";
 answers[39] = choices[39][0];
 units[39] = "1";
 comments[39] = "Id Pregunta: 270. CONSTITUCION1978";


//  Id pregunta: 208 Año de creación de pregunta: 2016
 questions[40]= "41)  La direcci&oacute;n de la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado corresponde a:";
 choices[40]= new Array();
 choices[40][0] = "El Rey.";
 choices[40][1] = "El Jefe del Estado.";
 choices[40][2] = "El Gobierno.";
 choices[40][3] = "El Presidente del Gobierno.";
 answers[40] = choices[40][2];
 units[40] = "1";
 comments[40] = "Id Pregunta: 208. CONSTITUCION1978";


//  Id pregunta: 204 Año de creación de pregunta: 2016
 questions[41]= "42)  Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada reciben el t&iacute;tulo de:";
 choices[41]= new Array();
 choices[41][0] = "Decretos Legislativos.";
 choices[41][1] = "Decretos-leyes.";
 choices[41][2] = "Leyes de bases.";
 choices[41][3] = "Reales Decretos del Consejo de Ministros.";
 answers[41] = choices[41][0];
 units[41] = "1";
 comments[41] = "Id Pregunta: 204. CONSTITUCION1978";


//  Id pregunta: 681 Año de creación de pregunta: 2016
 questions[42]= "43)  El Factor de Sostenibilidad, de acuerdo a la Ley 23/2013, de 23 de diciembre, reguladora del Factor de Sostenibilidad y del &Iacute;ndice de Revalorizaci&oacute;n del Sistema de Pensiones de la Seguridad Social:";
 choices[42]= new Array();
 choices[42][0] = "Es un valor que se calcula para cada periodo de 3 a&ntilde;os, comenzando en el a&ntilde;o 2016.";
 choices[42][1] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la evoluci&oacute;n del PIB y otros datos macroecon&oacute;micos.";
 choices[42][2] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la esperanza de vida de los pensionistas.";
 choices[42][3] = "Se aplicar&aacute; para determinar la cuant&iacute;a de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a partir del 1 de Enero del a&ntilde;o 2018.";
 answers[42] = choices[42][2];
 units[42] = "14";
 comments[42] = "Id Pregunta: 681. Pensiones";


//  Id pregunta: 762 Año de creación de pregunta: 2016
 questions[43]= "44)  La Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico, establece y regula (se&ntilde;ala la incorrecta):";
 choices[43]= new Array();
 choices[43][0] = "las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[43][1] = "los principios del sistema de responsabilidad de las Administraciones P&uacute;blicas y de la potestad sancionadora";
 choices[43][2] = "el procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas";
 choices[43][3] = "la organizaci&oacute;n y funcionamiento de la Administraci&oacute;n General del Estado y de su sector p&uacute;blico institucional para el desarrollo de sus actividades";
 answers[43] = choices[43][2];
 units[43] = "4, 7, 8, 9";
 comments[43] = "Id Pregunta: 762. Ley 40/2015";


//  Id pregunta: 520 Año de creación de pregunta: 2016
 questions[44]= "45)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se denomina:";
 choices[44]= new Array();
 choices[44][0] = "De los interesados en el procedimiento";
 choices[44][1] = "De la actividad de las Administraciones P&uacute;blicas";
 choices[44][2] = "Disposiciones generales";
 choices[44][3] = "De los actos administrativos";
 answers[44] = choices[44][2];
 units[44] = "7";
 comments[44] = "Id Pregunta: 520. LEY 39/2015";


//  Id pregunta: 483 Año de creación de pregunta: 2016
 questions[45]= "46)  La Ley 47/2003, de 26 de noviembre, General Presupuestaria se encuentra formada por:";
 choices[45]= new Array();
 choices[45][0] = "180 art&iacute;culos.";
 choices[45][1] = "182 art&iacute;culos.";
 choices[45][2] = "185 art&iacute;culos.";
 choices[45][3] = "190 art&iacute;culos.";
 answers[45] = choices[45][1];
 units[45] = "10";
 comments[45] = "Id Pregunta: 483. PRESUPUESTOS GENERALES";


//  Id pregunta: 517 Año de creación de pregunta: 2016
 questions[46]= "47)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas: (se&ntilde;ala la incorrecta)";
 choices[46]= new Array();
 choices[46][0] = "la Administraci&oacute;n General del Estado";
 choices[46][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[46][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[46][3] = "los organismos p&uacute;blicos y entidades de derecho privado que integran el sector p&uacute;blico institucional";
 answers[46] = choices[46][3];
 units[46] = "7";
 comments[46] = "Id Pregunta: 517. LEY 39/2015";


//  Id pregunta: 23 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;Cu&aacute;l de los siguientes lenguajes propone el W3C para consultar datos en formato RDF?";
 choices[47]= new Array();
 choices[47][0] = "SPARQL";
 choices[47][1] = "UnQL";
 choices[47][2] = "XQUERY";
 choices[47][3] = "RQL";
 answers[47] = choices[47][0];
 units[47] = "74";
 comments[47] = "Id Pregunta: 23. AGE A1 2015";


//  Id pregunta: 116 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Cu&aacute;l de las siguientes es una pol&iacute;tica pasiva de empleo?";
 choices[48]= new Array();
 choices[48][0] = "La organizaci&oacute;n de cursos de formaci&oacute;n gratuitos para desempleados";
 choices[48][1] = "La intermediaci&oacute;n en el mercado laboral, es decir, recoger las ofertas de trabajo y cruzarlas con las demandas.";
 choices[48][2] = "Adecuar los planes de estudio a la realidad laboral";
 choices[48][3] = "El pago de subsidios a parados";
 answers[48] = choices[48][3];
 units[48] = "15";
 comments[48] = "Id Pregunta: 116. ";


//  Id pregunta: 519 Año de creación de pregunta: 2016
 questions[49]= "50)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas tiene:";
 choices[49]= new Array();
 choices[49][0] = "un art&iacute;culo";
 choices[49][1] = "dos art&iacute;culos";
 choices[49][2] = "tres art&iacute;culos";
 choices[49][3] = "cuatro art&iacute;culos";
 answers[49] = choices[49][1];
 units[49] = "7";
 comments[49] = "Id Pregunta: 519. LEY 39/2015";


//  Id pregunta: 799 Año de creación de pregunta: 2016
 questions[50]= "51)  Respecto a las unidades administrativas:";
 choices[50]= new Array();
 choices[50][0] = "pueden existir unidades administrativas complejas, que agrupen dos o m&aacute;s unidades mayores";
 choices[50][1] = "los jefes de las unidades administrativas son responsables del correcto funcionamiento de la unidad y de la adecuada ejecuci&oacute;n de las tareas asignadas a la misma";
 choices[50][2] = "las unidades administrativas se establecen mediante las relaciones de puestos de trabajo, que se aprobar&aacute;n de acuerdo con su regulaci&oacute;n espec&iacute;fica, y no se integran en ning&uacute;n &oacute;rgano determinado";
 choices[50][3] = "ninguna es correcta";
 answers[50] = choices[50][1];
 units[50] = "4, 7, 8, 9";
 comments[50] = "Id Pregunta: 799. Ley 40/2015";


//  Id pregunta: 141 Año de creación de pregunta: 2016
 questions[51]= "52)  El recurso de alzada puede interponerse:";
 choices[51]= new Array();
 choices[51][0] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna en todo caso";
 choices[51][1] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna o ante el competente para resolverlo";
 choices[51][2] = "Ante el &oacute;rgano competente para resolverlo en todo caso";
 choices[51][3] = "Ante el Defensor del Pueblo";
 answers[51] = choices[51][1];
 units[51] = "8";
 comments[51] = "Id Pregunta: 141. Ley 39/2015, Art&iacute;culo 121";


//  Id pregunta: 90 Año de creación de pregunta: 2016
 questions[52]= "53)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad (ENS) en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, el an&aacute;lisis y gesti&oacute;n de riesgos es una parte esencial del proceso de seguridad, debiendo mantenerse permanentemente actualizado. Para ello, el propio ENS establece que se debe realizar un an&aacute;lisis de riesgos formal para los sistemas de:";
 choices[52]= new Array();
 choices[52][0] = "Categor&iacute;a b&aacute;sica";
 choices[52][1] = "Categor&iacute;a media";
 choices[52][2] = "Categor&iacute;a alta";
 choices[52][3] = "Categor&iacute;a media y alta";
 answers[52] = choices[52][2];
 units[52] = "46";
 comments[52] = "Id Pregunta: 90. AGE A1 2015";


//  Id pregunta: 756 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;Cu&aacute;l de los siguientes no es uno de los pilares en que se basa la Agenda Digital Europea?";
 choices[53]= new Array();
 choices[53][0] = "Promover un acceso a internet r&aacute;pido y ultrarr&aacute;pido para todos";
 choices[53][1] = "Implantar el mercado general europeo";
 choices[53][2] = "Fomentar la alfabetizaci&oacute;n, la capacitaci&oacute;n y la inclusi&oacute;n digitales";
 choices[53][3] = "Consolidar la confianza y la seguridad en l&iacute;nea";
 answers[53] = choices[53][1];
 units[53] = "19";
 comments[53] = "Id Pregunta: 756. Agenda Digital Europea";


//  Id pregunta: 30 Año de creación de pregunta: 2016
 questions[54]= "55)  El sistema operativo OS X El Capit&aacute;n incluye un conjunto de servicios de red para compartir archivos entre Mac y PC, &iquest;cu&aacute;l es el protocolo por defecto que emplea OS X El Capit&aacute;n?";
 choices[54]= new Array();
 choices[54][0] = "SMB3";
 choices[54][1] = "AFP";
 choices[54][2] = "NFS";
 choices[54][3] = "FTP";
 answers[54] = choices[54][0];
 units[54] = "59";
 comments[54] = "Id Pregunta: 30. AGE A1 2015";


//  Id pregunta: 92 Año de creación de pregunta: 2016
 questions[55]= "56)  Seg&uacute;n AENOR, la certificaci&oacute;n es:";
 choices[55]= new Array();
 choices[55][0] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 choices[55][1] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple con los requisitos legales para salir al mercado.";
 choices[55][2] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio es beneficioso para los consumidores.";
 choices[55][3] = "La acci&oacute;n llevada a cabo por una entidad dependiente de la Administraci&oacute;n p&uacute;blica mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 answers[55] = choices[55][0];
 units[55] = "48";
 comments[55] = "Id Pregunta: 92. AGE A1 2015";


//  Id pregunta: 178 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Qu&eacute; es lo que caracteriza un decreto-ley?";
 choices[56]= new Array();
 choices[56][0] = "No puede afectar al ordenamiento de las instituciones b&aacute;sicas del Estado.";
 choices[56][1] = "Es dictado por las Cortes Generales en casos de urgente necesidad.";
 choices[56][2] = "Es dictado por el Presidente del Gobierno en casos de extraordinaria y urgente necesidad.";
 choices[56][3] = "Es dictado por el Gobierno por encargo de las Cortes Generales.";
 answers[56] = choices[56][0];
 units[56] = "1";
 comments[56] = "Id Pregunta: 178. CONSTITUCION1978";


//  Id pregunta: 467 Año de creación de pregunta: 2016
 questions[57]= "58)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Econom&iacute;a y Competitividad podr&aacute; autorizar a la Secretar&iacute;a General del Tesoro y Pol&iacute;tica Financiera a realizar operaciones pasivas de pr&eacute;stamo a un plazo no superior a:";
 choices[57]= new Array();
 choices[57][0] = "Tres meses.";
 choices[57][1] = "Nueve meses.";
 choices[57][2] = "Cuatro meses.";
 choices[57][3] = "Seis meses.";
 answers[57] = choices[57][0];
 units[57] = "10";
 comments[57] = "Id Pregunta: 467. PRESUPUESTOS GENERALES";


//  Id pregunta: 288 Año de creación de pregunta: 2016
 questions[58]= "59)  Cu&aacute;l no es uno de los pilares que cimientan el Plan de Acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[58]= new Array();
 choices[58][0] = "Configuraci&oacute;n de un marco que habilite la movilidad transfronteriza mediante los servicios p&uacute;blicos digitales;";
 choices[58][1] = "Facilitar la interacci&oacute;n digital con ciudadanos y empresas mediante AA.PP. abiertas y flexibles que impliquen a los actores interesados en el dise&ntilde;o de pol&iacute;ticas y servicios de una forma colaborativa;";
 choices[58][2] = "Sociedad digital integradora, donde los ciudadanos tengan las cualificaciones adecuadas para aprovechar las oportunidades ofrecidas por Internet.";
 choices[58][3] = "Puesta a disposici&oacute;n de habilitadores y facilitadores claves, servicios y activos reutilizables.";
 answers[58] = choices[58][2];
 units[58] = "5";
 comments[58] = "Id Pregunta: 288. UNION EUROPEA";


//  Id pregunta: 268 Año de creación de pregunta: 2016
 questions[59]= "60)  Las Disposiciones Adicionales en la Constituci&oacute;n Espa&ntilde;ola son:";
 choices[59]= new Array();
 choices[59][0] = "Cuatro.";
 choices[59][1] = "Una.";
 choices[59][2] = "Cinco.";
 choices[59][3] = "Nueve.";
 answers[59] = choices[59][2];
 units[59] = "1";
 comments[59] = "Id Pregunta: 268. CONSTITUCION1978";


//  Id pregunta: 75 Año de creación de pregunta: 2016
 questions[60]= "61)  Las transferencias internacionales de datos de car&aacute;cter personal:";
 choices[60]= new Array();
 choices[60][0] = "Se regulan en los art&iacute;culos 33 y 34 de la Ley Org&aacute;nica 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal y en el T&iacute;tulo VI del Real Decreto 1720/2007 por el que se aprueba el Reglamento de desarrollo de la Ley Org&aacute;nica 15/1999.";
 choices[60][1] = "Una transferencia internacional de datos, es un tratamiento de datos que supone una transmisi&oacute;n de los mismos fuera del territorio de la Uni&oacute;n Europea (UE).";
 choices[60][2] = "La Decisi&oacute;n de la Comisi&oacute;n 2000/520/CE, con arreglo a la Directiva 95/46/CE, permite actualmente realizar transferencias de datos a Estados Unidos si se cumplen los principios del acuerdo de Puerto Seguro.";
 choices[60][3] = "Precisan, en todo caso, la autorizaci&oacute;n previa de la Direcci&oacute;n de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[60] = choices[60][0];
 units[60] = "35";
 comments[60] = "Id Pregunta: 75. AGE A1 2015";


//  Id pregunta: 693 Año de creación de pregunta: 2016
 questions[61]= "62)  Se&ntilde;ale de las siguientes la que NO corresponde a una herramienta de integraci&oacute;n continua:";
 choices[61]= new Array();
 choices[61][0] = "Jenkins";
 choices[61][1] = "Hudson";
 choices[61][2] = "SonarQube";
 choices[61][3] = "Todas lo son";
 answers[61] = choices[61][3];
 units[61] = "92";
 comments[61] = "Id Pregunta: 693. INTEGRACION CONTINUA";


//  Id pregunta: 413 Año de creación de pregunta: 2016
 questions[62]= "63)  Gozar&aacute;n de los derecho derivados del principio de igualdad de trato y de la prohibici&oacute;n de discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[62]= new Array();
 choices[62][0] = "La mujeres.";
 choices[62][1] = "Lo hombres.";
 choices[62][2] = "Todas las personas.";
 choices[62][3] = "Las mujeres y ni&ntilde;os menores de 16 a&ntilde;os.";
 answers[62] = choices[62][2];
 units[62] = "14";
 comments[62] = "Id Pregunta: 413. POLITICAS DE IGUALDAD";


//  Id pregunta: 634 Año de creación de pregunta: 2016
 questions[63]= "64)  En un modelo entidad/relaci&oacute;n, un tipo de interrelaci&oacute;n se caracteriza por:";
 choices[63]= new Array();
 choices[63][0] = "El nombre y el tipo de correspondencia.";
 choices[63][1] = "El nombre, el grado y el tipo de correspondencia.";
 choices[63][2] = "El nombre, el nivel y el tipo de correspondencia.";
 choices[63][3] = "El nombre y el grado.";
 answers[63] = choices[63][1];
 units[63] = "85";
 comments[63] = "Id Pregunta: 634. Junta de Extremadura A1 2015";


//  Id pregunta: 402 Año de creación de pregunta: 2016
 questions[64]= "65)  El principio de igualdad de trato y oportunidades entre mujeres y hombres tiene car&aacute;cter:";
 choices[64]= new Array();
 choices[64][0] = "Parcial.";
 choices[64][1] = "Sectorial.";
 choices[64][2] = "Tranversal.";
 choices[64][3] = "Vertical.";
 answers[64] = choices[64][2];
 units[64] = "14";
 comments[64] = "Id Pregunta: 402. POLITICAS DE IGUALDAD";


//  Id pregunta: 477 Año de creación de pregunta: 2016
 questions[65]= "66)  Se&ntilde;ale, de acuerdo con la Ley General Presupuestaria, cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[65]= new Array();
 choices[65][0] = "La Ley General Presupuestaria permite realizar trasferencias de cr&eacute;dito desde el Cap&iacute;tulo 6 de los Presupuestos generales del Estado al Cap&iacute;tulo 2.";
 choices[65][1] = "Es competencia del Consejo de Ministros la autorizaci&oacute;n de generaciones de cr&eacute;dito.";
 choices[65][2] = "Los cr&eacute;ditos extraordinarios por necesidades surgidas en operaciones financieras se financian con Deuda P&uacute;blica o con baja en otros cr&eacute;ditos de la misma naturaleza.";
 choices[65][3] = "Excepcionalmente tendr&aacute;n la condici&oacute;n de ampliables los cr&eacute;ditos destinados al pago de los salarios de los empleados p&uacute;blicos.";
 answers[65] = choices[65][2];
 units[65] = "10";
 comments[65] = "Id Pregunta: 477. PRESUPUESTOS GENERALES";


//  Id pregunta: 254 Año de creación de pregunta: 2016
 questions[66]= "67)  El Art&iacute;culo 16 de la Constituci&oacute;n Espa&ntilde;ola garantiza:";
 choices[66]= new Array();
 choices[66][0] = "La libertad ideol&oacute;gica, religiosa y de culto.";
 choices[66][1] = "La libertad sexual y religiosa.";
 choices[66][2] = "La obligaci&oacute;n del derecho al voto en las elecciones.";
 choices[66][3] = "La ausencia de libertad cat&oacute;lica.";
 answers[66] = choices[66][3];
 units[66] = "1";
 comments[66] = "Id Pregunta: 254. CONSTITUCION1978";


//  Id pregunta: 315 Año de creación de pregunta: 2016
 questions[67]= "68)  El Colegio de Comisarios se re&uacute;ne:";
 choices[67]= new Array();
 choices[67][0] = "Una vez por semana.";
 choices[67][1] = "Una vez al mes.";
 choices[67][2] = "Dos veces en semana.";
 choices[67][3] = "Cuando lo acuerde el Presidente de la Comisi&oacute;n, y adem&aacute;s una vez al mes.";
 answers[67] = choices[67][0];
 units[67] = "5";
 comments[67] = "Id Pregunta: 315. UNION EUROPEA";


//  Id pregunta: 709 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Qu&eacute; ley regula el ejercicio del alto cargo de la Administraci&oacute;n General del Estado con objeto de garantizar, entre otros, que realice su actividad en m&aacute;ximas condiciones de transparencia?";
 choices[68]= new Array();
 choices[68][0] = "Ley 3/2015";
 choices[68][1] = "Ley 6/2007";
 choices[68][2] = "Ley 5/1984";
 choices[68][3] = "Ley 5/2006";
 answers[68] = choices[68][0];
 units[68] = "22";
 comments[68] = "Id Pregunta: 709. &Eacute;tica P&uacute;blica y Transparencia";


//  Id pregunta: 422 Año de creación de pregunta: 2016
 questions[69]= "70)  Los distintivos para reconocer a aquellas empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato, lo crear&aacute;:";
 choices[69]= new Array();
 choices[69][0] = "El Ministerio de Igualdad.";
 choices[69][1] = "El Ministerio de Empleo y Seguridad Social.";
 choices[69][2] = "Ambas son correctas.";
 choices[69][3] = "La Consejer&iacute;a de Igualdad de cada CCAA.";
 answers[69] = choices[69][1];
 units[69] = "14";
 comments[69] = "Id Pregunta: 422. POLITICAS DE IGUALDAD";


//  Id pregunta: 745 Año de creación de pregunta: 2016
 questions[70]= "71)  Cu&aacute;l de los siguientes NO es uno de los programas del marco general para la mejora de la calidad en la Administraci&oacute;n General del Estado:";
 choices[70]= new Array();
 choices[70][0] = "Programa de an&aacute;lisis de la demanda y de evaluaci&oacute;n de la satisfacci&oacute;n de los usuarios de los servicios.";
 choices[70][1] = "Programa de cartas de servicios";
 choices[70][2] = "Programa para la mejora continua de las organizaciones.";
 choices[70][3] = "Programa de evaluaci&oacute;n de la calidad de las organizaciones.";
 answers[70] = choices[70][2];
 units[70] = "18, 20";
 comments[70] = "Id Pregunta: 745. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 848 Año de creación de pregunta: 2016
 questions[71]= "72)  El RPO (Recovery Point Objective) de una organizaci&oacute;n son 2 horas. &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?: ";
 choices[71]= new Array();
 choices[71][0] = "No m&aacute;s de 2 horas de datos de producci&oacute;n se pueden perder en caso de desastre";
 choices[71][1] = "No m&aacute;s de 4 horas de datos de producci&oacute;n se pueden perder en caso de desastre";
 choices[71][2] = "El tiempo para recuperar los sistemas en producci&oacute;n de nuevo no puede ser m&aacute;s de 2 horas.";
 choices[71][3] = "El tiempo para recuperar los sistemas en producci&oacute;n de nuevo no puede ser m&aacute;s de 4 horas.";
 answers[71] = choices[71][0];
 units[71] = "45";
 comments[71] = "Id Pregunta: 848. Xunta de Galicia 2015";


//  Id pregunta: 682 Año de creación de pregunta: 2016
 questions[72]= "73)  Indique cu&aacute;l es la Directiva europea que queda derogada por el Reglamento (UE) 910/2014";
 choices[72]= new Array();
 choices[72][0] = "Directiva 95/46/CE";
 choices[72][1] = "Directiva 1999/93/CE";
 choices[72][2] = "Directiva 2000/31/CE";
 choices[72][3] = "Directiva 2003/98/CE";
 answers[72] = choices[72][1];
 units[72] = "77";
 comments[72] = "Id Pregunta: 682. Art&iacute;culo 50 del Reglamento 910/2014";


//  Id pregunta: 460 Año de creación de pregunta: 2016
 questions[73]= "74)  De conformidad con el art&iacute;culo 11 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los derechos de naturaleza p&uacute;blica de la Hacienda P&uacute;blica estatal se adquieren y nacen de conformidad con lo establecido en:";
 choices[73]= new Array();
 choices[73][0] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[73][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la AGE.";
 choices[73][2] = "La normativa reguladora de cada derecho.";
 choices[73][3] = "Ley 50/1997, del Gobierno.";
 answers[73] = choices[73][2];
 units[73] = "10";
 comments[73] = "Id Pregunta: 460. PRESUPUESTOS GENERALES";


//  Id pregunta: 812 Año de creación de pregunta: 2016
 questions[74]= "75)  Las Delegaciones del Gobierno est&aacute;n adscritas org&aacute;nicamente a:";
 choices[74]= new Array();
 choices[74][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[74][1] = "el Consejo de Gobierno de la Comunidad Aut&oacute;noma";
 choices[74][2] = "el Ministerio del Interior";
 choices[74][3] = "la Administraci&oacute;n General del Estado";
 answers[74] = choices[74][0];
 units[74] = "4, 7, 8, 9";
 comments[74] = "Id Pregunta: 812. Ley 40/2015";


