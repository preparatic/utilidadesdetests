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

//  Id pregunta: 778 Año de creación de pregunta: 2016
 questions[0]= "1)  Respecto a los &oacute;rganos administrativos (se&ntilde;ala la incorrecta):";
 choices[0]= new Array();
 choices[0][0] = "corresponde a cada Administraci&oacute;n P&uacute;blica delimitar, en su respectivo &aacute;mbito competencial, las unidades administrativas que configuran los &oacute;rganos administrativos propios de las especialidades derivadas de su organizaci&oacute;n";
 choices[0][1] = "en ning&uacute;n caso podr&aacute;n crearse nuevos &oacute;rganos que supongan duplicaci&oacute;n de otros ya existentes";
 choices[0][2] = "la creaci&oacute;n de un nuevo &oacute;rgano s&oacute;lo tendr&aacute; lugar previa comprobaci&oacute;n de que no existe otro en la misma Administraci&oacute;n P&uacute;blica que desarrolle igual funci&oacute;n sobre el mismo territorio y poblaci&oacute;n";
 choices[0][3] = "todas son correctas";
 answers[0] = choices[0][1];
 units[0] = "4, 7, 8, 9";
 comments[0] = "Id Pregunta: 778. Ley 40/2015";


//  Id pregunta: 142 Año de creación de pregunta: 2016
 questions[1]= "2)  El plazo para la interposici&oacute;n del recurso de alzada ser&aacute;:";
 choices[1]= new Array();
 choices[1][0] = "De un mes si el acto fuera presunto";
 choices[1][1] = "De un mes si el acto fuera expreso";
 choices[1][2] = "De un mes en cualquier caso";
 choices[1][3] = "No existe un plazo m&aacute;ximo para la interposici&oacute;n de un recurso de alzada";
 answers[1] = choices[1][1];
 units[1] = "8";
 comments[1] = "Id Pregunta: 142. Ley 39/2015, Art&iacute;culo 122";


//  Id pregunta: 61 Año de creación de pregunta: 2016
 questions[2]= "3)  Indique a partir de qu&eacute; versi&oacute;n del sistema operativo Android se introdujo la posibilidad de que el usuario pudiera gestionar la concesi&oacute;n de permisos para cada aplicaci&oacute;n:";
 choices[2]= new Array();
 choices[2][0] = "Lollipop";
 choices[2][1] = "Jelly Bean";
 choices[2][2] = "Marshmallow";
 choices[2][3] = "KitKat";
 answers[2] = choices[2][2];
 units[2] = "59";
 comments[2] = "Id Pregunta: 61. AGE A1 2015";


//  Id pregunta: 370 Año de creación de pregunta: 2016
 questions[3]= "4)  Establecer la interpretaci&oacute;n adecuada de los Tratados de la Uni&oacute;n Europea y las normas de derecho derivado es el objeto de:";
 choices[3]= new Array();
 choices[3][0] = "Un recurso de incumplimiento.";
 choices[3][1] = "Recurso de carencia.";
 choices[3][2] = "Cuesti&oacute;n o incidente prejudicial.";
 choices[3][3] = "Ninguna es correcta.";
 answers[3] = choices[3][2];
 units[3] = "5";
 comments[3] = "Id Pregunta: 370. UNION EUROPEA";


//  Id pregunta: 322 Año de creación de pregunta: 2016
 questions[4]= "5)  El Tribunal de Justicia est&aacute; formado por:";
 choices[4]= new Array();
 choices[4][0] = "Un Juez de cada Estado miembro.";
 choices[4][1] = "Por dos Jueces de cada Estado miembro.";
 choices[4][2] = "Por veinte Jueces.";
 choices[4][3] = "Por ocho Jueces.";
 answers[4] = choices[4][0];
 units[4] = "5";
 comments[4] = "Id Pregunta: 322. UNION EUROPEA";


//  Id pregunta: 517 Año de creación de pregunta: 2016
 questions[5]= "6)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[5]= new Array();
 choices[5][0] = "quedar&aacute;n sujetas a lo dispuesto en todas las normas de esta Ley";
 choices[5][1] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[5][2] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo cuando ejerzan potestades administrativas";
 choices[5][3] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley";
 answers[5] = choices[5][1];
 units[5] = "7";
 comments[5] = "Id Pregunta: 517. LEY 39/2015";


//  Id pregunta: 854 Año de creación de pregunta: 2016
 questions[6]= "7)  Si disponemos de 6 discos SAS de 1TB netos configurados en RAID5, &iquest;de qu&eacute; capacidad neta se dispone en RAID5 en el sistema de almacenamiento?";
 choices[6]= new Array();
 choices[6][0] = "6 TB.";
 choices[6][1] = "5 TB.";
 choices[6][2] = "7 TB.";
 choices[6][3] = "3 TB.";
 answers[6] = choices[6][1];
 units[6] = "53";
 comments[6] = "Id Pregunta: 854. Xunta de Galicia 2015";


//  Id pregunta: 566 Año de creación de pregunta: 2016
 questions[7]= "8)  La &quot;Poblaci&oacute;n Activa&quot; que tiene en cuenta la Encuesta de Poblaci&oacute;n Activa (EPA), incluye:";
 choices[7]= new Array();
 choices[7][0] = "Los ocupados y los parados activos";
 choices[7][1] = "S&oacute;lo los ocupados";
 choices[7][2] = "Los ocupados y los inactivos";
 choices[7][3] = "Los que han trabajado en los &uacute;ltimos 6 meses";
 answers[7] = choices[7][0];
 units[7] = "12";
 comments[7] = "Id Pregunta: 566. Modelo econ&oacute;mico";


//  Id pregunta: 819 Año de creación de pregunta: 2016
 questions[8]= "9)  Los servicios territoriales de la Administraci&oacute;n General del Estado en la Comunidad Aut&oacute;noma se organizar&aacute;n atendiendo al mejor cumplimiento de sus fines, en:";
 choices[8]= new Array();
 choices[8][0] = "servicios integrados en las Delegaciones del Gobierno";
 choices[8][1] = "servicios no integrados en las Delegaciones del Gobierno";
 choices[8][2] = "servicios integrados y no integrados en las Delegaciones del Gobierno";
 choices[8][3] = "ninguna es correcta";
 answers[8] = choices[8][2];
 units[8] = "4, 7, 8, 9";
 comments[8] = "Id Pregunta: 819. Ley 40/2015";


//  Id pregunta: 765 Año de creación de pregunta: 2016
 questions[9]= "10)  La presente Ley se aplica al sector p&uacute;blico que comprende (se&ntilde;ala la incorrecta):";
 choices[9]= new Array();
 choices[9][0] = "la Administraci&oacute;n General del Estado";
 choices[9][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[9][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[9][3] = "el sector p&uacute;blico y privado institucional";
 answers[9] = choices[9][3];
 units[9] = "4, 7, 8, 9";
 comments[9] = "Id Pregunta: 765. Ley 40/2015";


//  Id pregunta: 472 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;Qui&eacute;n remitir&aacute; a las Cortes Generales un informe trimestral acerca de la utilizaci&oacute;n del Fondo regulado en el Fondo de Contingencia de ejecuci&oacute;n presupuestaria seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria?";
 choices[10]= new Array();
 choices[10][0] = "El Ministro de Econom&iacute;a.";
 choices[10][1] = "El Gobierno.";
 choices[10][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[10][3] = "El Presidente del Gobierno.";
 answers[10] = choices[10][1];
 units[10] = "10";
 comments[10] = "Id Pregunta: 472. PRESUPUESTOS GENERALES";


//  Id pregunta: 692 Año de creación de pregunta: 2016
 questions[11]= "12)  El Reglamento (UE) 910/2014 entra en vigor:";
 choices[11]= new Array();
 choices[11][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[11][1] = "A los 20 d&iacute;as de su publicaci&oacute;n en el Diario Oficial de la Uni&oacute;n Europea (DOUE)";
 choices[11][2] = "A partir del 1 de enero de 2015";
 choices[11][3] = "A partir del 1 de julio de 2016";
 answers[11] = choices[11][1];
 units[11] = "77";
 comments[11] = "Id Pregunta: 692. Art&iacute;culo 52 del Reglamento 910/2014";


//  Id pregunta: 220 Año de creación de pregunta: 2016
 questions[12]= "13)  Seg&uacute;n el Art&iacute;culo 68 de la Constituci&oacute;n, el Congreso se compone de:";
 choices[12]= new Array();
 choices[12][0] = "Un m&iacute;nimo de 300 Diputados.";
 choices[12][1] = "Un m&aacute;ximo de 350 Diputados.";
 choices[12][2] = "Un m&iacute;nimo de 400 Diputados.";
 choices[12][3] = "Un m&aacute;ximo de 300 Diputados.";
 answers[12] = choices[12][0];
 units[12] = "1";
 comments[12] = "Id Pregunta: 220. CONSTITUCION1978";


//  Id pregunta: 735 Año de creación de pregunta: 2016
 questions[13]= "14)  Son l&iacute;neas de acci&oacute;n del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP.";
 choices[13]= new Array();
 choices[13][0] = "Disponer de sistemas de an&aacute;lisis de datos para la toma de decisiones y de funcionarios formados adecuadamente.";
 choices[13][1] = "Que en el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser electr&oacute;nica.";
 choices[13][2] = "Un mejor formaci&oacute;n del funcionariado y una atenci&oacute;n al ciudadano acorde a las nuevas tecnolog&iacute;as.";
 choices[13][3] = "Desarrollar el puesto de trabajo digital y mejorar la satisfacci&oacute;n del usuario en el uso de los servicios p&uacute;blicos digitales.";
 answers[13] = choices[13][3];
 units[13] = "28";
 comments[13] = "Id Pregunta: 735. Estrategia TIC";


//  Id pregunta: 715 Año de creación de pregunta: 2016
 questions[14]= "15)  Entre las funcionalidades generales de un servidor de integraci&oacute;n continua NO se encuentra";
 choices[14]= new Array();
 choices[14][0] = "La ejecuci&oacute;n de una serie de test: JUnit, Cactus, Auditoria del c&oacute;digo fuente, test IHM, test funcionales.";
 choices[14][1] = "Permite realiza el despliegue de archivos en el entorno de producci&oacute;n.";
 choices[14][2] = "La notificaci&oacute;n del resultado por medios como correo electr&oacute;nico o RSS.";
 choices[14][3] = "La creaci&oacute;n de un informe de estad&iacute;sticas.";
 answers[14] = choices[14][1];
 units[14] = "92";
 comments[14] = "Id Pregunta: 715. INTEGRACION CONTINUA";


//  Id pregunta: 481 Año de creación de pregunta: 2016
 questions[15]= "16)  Conforme a Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el Presupuesto del Estado, los cr&eacute;ditos destinados a atenciones protocolarias y representativas se especificar&aacute;n:";
 choices[15]= new Array();
 choices[15][0] = "A nivel de art&iacute;culo.";
 choices[15][1] = "A nivel de cap&iacute;tulo.";
 choices[15][2] = "Al nivel que corresponda conforme a su concreta clasificaci&oacute;n econ&oacute;mica.";
 choices[15][3] = "A nivel de concepto.";
 answers[15] = choices[15][2];
 units[15] = "10";
 comments[15] = "Id Pregunta: 481. PRESUPUESTOS GENERALES";


//  Id pregunta: 382 Año de creación de pregunta: 2016
 questions[16]= "17)  Seg&uacute;n la ley org&aacute;nica 3/2007, los actos y las cl&aacute;usulas de los negocios jur&iacute;dicos que causen discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[16]= new Array();
 choices[16][0] = "Se considerar&aacute;n nulos y sin efecto.";
 choices[16][1] = "Est&aacute;n sometidos a una tasa fiscal especial (Tasa Tobin)";
 choices[16][2] = "Son impugnables ante los juzgados especiales contra la violencia de g&eacute;nero.";
 choices[16][3] = "Si son actos administrativos, el recurso se debe interponer, en todo caso, ante el Ministerio de Igualdad.";
 answers[16] = choices[16][0];
 units[16] = "14";
 comments[16] = "Id Pregunta: 382. POLITICAS DE IGUALDAD";


//  Id pregunta: 820 Año de creación de pregunta: 2016
 questions[17]= "18)  Respecto a los servicios territoriales es correcto:";
 choices[17]= new Array();
 choices[17][0] = "la organizaci&oacute;n de los servicios territoriales no integrados en las Delegaciones del Gobierno se establecer&aacute; mediante Real Decreto";
 choices[17][1] = "los servicios territoriales no integrados depender&aacute;n del Delegado del Gobierno, o en su caso Subdelegado del Gobierno, a trav&eacute;s de la Secretar&iacute;a General";
 choices[17][2] = "los servicios territoriales integrados depender&aacute;n del &oacute;rgano central competente sobre el sector de actividad en el que aqu&eacute;llos operen";
 choices[17][3] = "ninguna es correcta";
 answers[17] = choices[17][0];
 units[17] = "4, 7, 8, 9";
 comments[17] = "Id Pregunta: 820. Ley 40/2015";


//  Id pregunta: 10 Año de creación de pregunta: 2016
 questions[18]= "19)  El servicio mediante el cual se localiza un terminal m&oacute;vil dentro de alguna de las N c&eacute;lulas gestionadas coordinadamente en una zona de cobertura se denomina:";
 choices[18]= new Array();
 choices[18][0] = "Paging";
 choices[18][1] = "Roaming";
 choices[18][2] = "Handover";
 choices[18][3] = "Trunking";
 answers[18] = choices[18][0];
 units[18] = "117";
 comments[18] = "Id Pregunta: 10. AGE A1 2015";


//  Id pregunta: 430 Año de creación de pregunta: 2016
 questions[19]= "20)  En el acceso a bienes y servicios, ning&uacute;n contratante podr&aacute; indagar sobre la situaci&oacute;n de embarazo de una mujer demandante del mismo, salvo por razones de:";
 choices[19]= new Array();
 choices[19][0] = "Incompatibilidad del puesto con una baja maternal.";
 choices[19][1] = "Protecci&oacute;n de su salud.";
 choices[19][2] = "Ninguna es correcta.";
 choices[19][3] = "A y B son correctas.";
 answers[19] = choices[19][1];
 units[19] = "14";
 comments[19] = "Id Pregunta: 430. POLITICAS DE IGUALDAD";


//  Id pregunta: 525 Año de creación de pregunta: 2016
 questions[20]= "21)  Se consideran interesados en el procedimiento administrativo:";
 choices[20]= new Array();
 choices[20][0] = "quienes lo promuevan como titulares de derechos o intereses leg&iacute;timos individuales o colectivos";
 choices[20][1] = "los que, habiendo iniciado el procedimiento, tengan derechos que puedan resultar afectados por la decisi&oacute;n que en el mismo se adopte";
 choices[20][2] = "aquellos cuyos intereses leg&iacute;timos, individuales o colectivos, puedan resultar afectados por la resoluci&oacute;n y se personen en el procedimiento durante el tr&aacute;mite de audiencia";
 choices[20][3] = "todas son correctas";
 answers[20] = choices[20][0];
 units[20] = "7";
 comments[20] = "Id Pregunta: 525. LEY 39/2015";


//  Id pregunta: 630 Año de creación de pregunta: 2016
 questions[21]= "22)  Seg&uacute;n el Real Decreto 4/2010, de 8 de enero, por el que se regula el Esquema Nacional de Interoperabilidad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; es la interoperabilidad?";
 choices[21]= new Array();
 choices[21][0] = "Es la capacidad de los sistemas de informaci&oacute;n y de los procedimientos a los que &eacute;stos dan soporte, de compartir datos y posibilitar el intercambio de informaci&oacute;n y conocimiento entre ellos.";
 choices[21][1] = "Es la obligaci&oacute;n de conectividad ente sistemas operativos de las Administraciones P&uacute;blicas.";
 choices[21][2] = "Es la capacidad de intercambio de datos entre las Comunidades Aut&oacute;nomas y la Administraci&oacute;n Central.";
 choices[21][3] = "Es la posibilidad de acceso a los datos que poseen todas las Administraciones sobre cualquiera de los usuarios de los sistemas de informaci&oacute;n.";
 answers[21] = choices[21][0];
 units[21] = "45";
 comments[21] = "Id Pregunta: 630. Junta de Extremadura A1 2015";


//  Id pregunta: 609 Año de creación de pregunta: 2016
 questions[22]= "23)  Seg&uacute;n Magerit v3, en el desarrollo de sistemas de informaci&oacute;n:";
 choices[22]= new Array();
 choices[22][0] = "La seguridad debe estar embebida en el sistema desde su primera concepci&oacute;n.";
 choices[22][1] = "La seguridad comenzar&aacute; a considerarse formalmente cuando finalice el proceso de implantaci&oacute;n de sistemas de informaci&oacute;n.";
 choices[22][2] = "La seguridad del sistema de informaci&oacute;n es m&aacute;s econ&oacute;mica implantarla una vez puesto en producci&oacute;n el sistema de informaci&oacute;n que tenerla en consideraci&oacute;n durante el desarrollo del sistema.";
 choices[22][3] = "La seguridad s&oacute;lo ralentiza el proceso de desarrollo de sistemas de informaci&oacute;n por lo que s&oacute;lo se debe considerar en aquellos sistemas que usen datos econ&oacute;micos.";
 answers[22] = choices[22][0];
 units[22] = "45";
 comments[22] = "Id Pregunta: 609. Junta de Extremadura A1 2015";


//  Id pregunta: 580 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Qui&eacute;n elabor&oacute; y aprob&oacute; la Estrategia TIC?.";
 choices[23]= new Array();
 choices[23][0] = "Fue elaborada y aprobada por la CETIC";
 choices[23][1] = "Fue elaborada por la CETIC y aprobada por el gobierno";
 choices[23][2] = "Fue elaborada por el gobierno y aprobada por la CETIC";
 choices[23][3] = "Fue elaborada por la CETIC y aprobada por el MAFP (Ministerio de Administraciones y Funci&oacute;n P&uacute;blica)";
 answers[23] = choices[23][1];
 units[23] = "19";
 comments[23] = "Id Pregunta: 580. Estrategia TIC";


//  Id pregunta: 165 Año de creación de pregunta: 2016
 questions[24]= "25)  Como parte del Plan de acci&oacute;n sobre administraci&oacute;n electr&oacute;nica para 2010-2020, la Comisi&oacute;n:";
 choices[24]= new Array();
 choices[24][0] = "Tratar&aacute; de interconectar los registros mercantiles en toda la UE.";
 choices[24][1] = "Se adoptar&aacute;n nuevas normas en materia de telecomunicaciones";
 choices[24][2] = "Se revisar&aacute; la Directiva de servicios de comunicaci&oacute;n audiovisual existente para adaptarse a la evoluci&oacute;n tecnol&oacute;gica";
 choices[24][3] = "Se actualizar&aacute;n las normas de comercio electr&oacute;nico";
 answers[24] = choices[24][0];
 units[24] = "19";
 comments[24] = "Id Pregunta: 165. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/";


//  Id pregunta: 741 Año de creación de pregunta: 2016
 questions[25]= "26)  En relaci&oacute;n al principio rector Orientaci&oacute;n al usuario del servicio del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[25]= new Array();
 choices[25][0] = "Es necesario redefinir los servicios empezando por el lado del usuario, ya sea un ciudadano o un empleado p&uacute;blico, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y seguridad.";
 choices[25][1] = "Es necesario redefinir los servicios empezando por el lado del ciudadano, ya sea un funcionario o una persona f&iacute;sica, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y transparencia.";
 choices[25][2] = "Se requiere modernizar los servicios p&uacute;blicos empezando por el lado del ciudadano, ya sea un funcionario o una persona f&iacute;sica, con una vocaci&oacute;n de transparencia, usabilidad, simplicidad y accesibilidad.";
 choices[25][3] = "Es necesario redefinir los servicios empezando por el lado del usuario, ya sea un ciudadano o un empleado p&uacute;blico, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y transparencia.";
 answers[25] = choices[25][0];
 units[25] = "28";
 comments[25] = "Id Pregunta: 741. Estrategia TIC";


//  Id pregunta: 229 Año de creación de pregunta: 2016
 questions[26]= "27)  De acuerdo con lo previsto en la Constituci&oacute;n Espa&ntilde;ola, el Gobierno y la administraci&oacute;n aut&oacute;noma de las provincias estar&aacute;n encomendados:";
 choices[26]= new Array();
 choices[26][0] = "A Diputaciones u otras Corporaciones de car&aacute;cter representativo.";
 choices[26][1] = "A los Subdelegados del Gobierno y a los Directores Insulares.";
 choices[26][2] = "A las Diputaciones y a las Mancomunidades de Municipios.";
 choices[26][3] = "A las Diputaciones y a las Comarcas.";
 answers[26] = choices[26][3];
 units[26] = "1";
 comments[26] = "Id Pregunta: 229. CONSTITUCION1978";


//  Id pregunta: 777 Año de creación de pregunta: 2016
 questions[27]= "28)  Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos:";
 choices[27]= new Array();
 choices[27][0] = "las unidades administrativas a las que se les atribuyan funciones que no tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo";
 choices[27][1] = "las unidades administrativas a las que se les atribuyan funciones que no tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo";
 choices[27][2] = "las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo";
 choices[27][3] = "las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo";
 answers[27] = choices[27][3];
 units[27] = "4, 7, 8, 9";
 comments[27] = "Id Pregunta: 777. Ley 40/2015";


//  Id pregunta: 636 Año de creación de pregunta: 2016
 questions[28]= "29)  En un modelo entidad/relaci&oacute;n, un tipo de interrelaci&oacute;n se caracteriza por:";
 choices[28]= new Array();
 choices[28][0] = "El nombre y el tipo de correspondencia.";
 choices[28][1] = "El nombre, el grado y el tipo de correspondencia.";
 choices[28][2] = "El nombre, el nivel y el tipo de correspondencia.";
 choices[28][3] = "El nombre y el grado.";
 answers[28] = choices[28][1];
 units[28] = "85";
 comments[28] = "Id Pregunta: 636. Junta de Extremadura A1 2015";


//  Id pregunta: 240 Año de creación de pregunta: 2016
 questions[29]= "30)  Las dos C&aacute;maras que configuran las Cortes Generales:";
 choices[29]= new Array();
 choices[29][0] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a diciembre, y de febrero a julio.";
 choices[29][1] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a noviembre, y de febrero a junio.";
 choices[29][2] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la Diputaci&oacute;n Permanente.";
 choices[29][3] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 answers[29] = choices[29][0];
 units[29] = "1";
 comments[29] = "Id Pregunta: 240. CONSTITUCION1978";


//  Id pregunta: 529 Año de creación de pregunta: 2016
 questions[30]= "31)  Los interesados con capacidad de obrar podr&aacute;n actuar por medio de representante:";
 choices[30]= new Array();
 choices[30][0] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 choices[30][1] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[30][2] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[30][3] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 answers[30] = choices[30][2];
 units[30] = "7";
 comments[30] = "Id Pregunta: 529. LEY 39/2015";


//  Id pregunta: 377 Año de creación de pregunta: 2016
 questions[31]= "32)  Es un elemento caracter&iacute;stico de la naturaleza jur&iacute;dica de la Uni&oacute;n Europea:";
 choices[31]= new Array();
 choices[31][0] = "Tener una estructura institucional.";
 choices[31][1] = "El establecimiento de un Ordenamiento jur&iacute;dico propio.";
 choices[31][2] = "La transferencia de competencias a las instituciones comunitarias.";
 choices[31][3] = "Todas las respuestas son correctas.";
 answers[31] = choices[31][3];
 units[31] = "5";
 comments[31] = "Id Pregunta: 377. UNION EUROPEA";


//  Id pregunta: 689 Año de creación de pregunta: 2016
 questions[32]= "33)  Indique cu&aacute;l de los siguientes no es uno de los requisitos que debe cumplir una firma electr&oacute;nica avanzada seg&uacute;n el Reglamento (UE) 910/2014";
 choices[32]= new Array();
 choices[32][0] = "Estar vinculada al firmante de manera &uacute;nica";
 choices[32][1] = "Haber sido creada utilizando un dispositivo avanzado de creacio&#769;n de firmas electro&#769;nicas";
 choices[32][2] = "Haber sido creada utilizando datos de creaci&oacute;n de firma que el firmante puede utilizar, con un alto nivel de confianza, bajo su exclusivo control";
 choices[32][3] = "Estar vinculada con los datos firmados, de modo tal que cualquier modificacio&#769;n ulterior de los mismos sea detectable";
 answers[32] = choices[32][1];
 units[32] = "77";
 comments[32] = "Id Pregunta: 689. Art&iacute;culo 26 del Reglamento 910/2014";


//  Id pregunta: 31 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Qu&eacute; es MongoDB?";
 choices[33]= new Array();
 choices[33][0] = "Una herramienta Object Relational Mapping (ORM) para facilitar el desarrollo.";
 choices[33][1] = "Una base de datos de c&oacute;digo abierto de documentos tipo JSON.";
 choices[33][2] = "Un sistema gestor de base de datos relacional.";
 choices[33][3] = "Una base de datos jer&aacute;rquica de relaciones encadenadas.";
 answers[33] = choices[33][1];
 units[33] = "73";
 comments[33] = "Id Pregunta: 31. AGE A1 2015";


//  Id pregunta: 594 Año de creación de pregunta: 2016
 questions[34]= "35)  Seg&uacute;n el Plan de Transformaci&oacute;n Digital de la AGE, &iquest;con qu&eacute; frecuencia de realizar&aacute;n nuevas declaraciones de servicios compartidos?";
 choices[34]= new Array();
 choices[34][0] = "Anualmente";
 choices[34][1] = "Bienalmente";
 choices[34][2] = "Cada cuatro a&ntilde;os";
 choices[34][3] = "No se define ninguna periodicidad";
 answers[34] = choices[34][1];
 units[34] = "19";
 comments[34] = "Id Pregunta: 594. Estrategia TIC. Se indica en la l&iacute;nea de acci&oacute;n 6";


//  Id pregunta: 776 Año de creación de pregunta: 2016
 questions[35]= "36)  Las Administraciones P&uacute;blicas velar&aacute;n por el cumplimiento de los requisitos previstos en la legislaci&oacute;n que resulte aplicable, para lo cual podr&aacute;n, en el &aacute;mbito de sus respectivas competencias, comprobar, verificar, investigar e inspeccionar los hechos, actos, elementos, actividades, estimaciones y dem&aacute;s circunstancias que fueran necesarias con los l&iacute;mites establecidos en:";
 choices[35]= new Array();
 choices[35][0] = "la legislaci&oacute;n de protecci&oacute;n de datos de car&aacute;cter personal";
 choices[35][1] = "el C&oacute;digo Civil";
 choices[35][2] = "la Constituci&oacute;n Espa&ntilde;ola";
 choices[35][3] = "la ley de procedimiento administrativo com&uacute;n de las Administraciones P&uacute;blicas";
 answers[35] = choices[35][0];
 units[35] = "4, 7, 8, 9";
 comments[35] = "Id Pregunta: 776. Ley 40/2015";


//  Id pregunta: 412 Año de creación de pregunta: 2016
 questions[36]= "37)  &Aacute;mbito de aplicaci&oacute;n de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombre:";
 choices[36]= new Array();
 choices[36][0] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Europeo.";
 choices[36][1] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Espa&ntilde;ol.";
 choices[36][2] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Internacional.";
 choices[36][3] = "Ninguna de ellas se ajusta al &aacute;mbito de aplicaci&oacute;n.";
 answers[36] = choices[36][1];
 units[36] = "14";
 comments[36] = "Id Pregunta: 412. POLITICAS DE IGUALDAD";


//  Id pregunta: 248 Año de creación de pregunta: 2016
 questions[37]= "38)  El T&iacute;tulo II de la Constituci&oacute;n finaliza en el Art&iacute;culo:";
 choices[37]= new Array();
 choices[37][0] = "61";
 choices[37][1] = "53";
 choices[37][2] = "65";
 choices[37][3] = "67";
 answers[37] = choices[37][1];
 units[37] = "1";
 comments[37] = "Id Pregunta: 248. CONSTITUCION1978";


//  Id pregunta: 96 Año de creación de pregunta: 2016
 questions[38]= "39)  Indique cu&aacute;l de las siguientes soluciones tecnol&oacute;gicas NO se utiliza para virtualizaci&oacute;n:";
 choices[38]= new Array();
 choices[38][0] = "VMware ESX";
 choices[38][1] = "XenServer";
 choices[38][2] = "Alfresco";
 choices[38][3] = "Microsoft Hyper-V";
 answers[38] = choices[38][2];
 units[38] = "54";
 comments[38] = "Id Pregunta: 96. AGE A1 2015";


//  Id pregunta: 161 Año de creación de pregunta: 2016
 questions[39]= "40)  Se&ntilde;alar cu&aacute;l NO es uno de los principios del Plan de Acci&oacute;n de Administraci&oacute;n Electr&oacute;nica 2016-2020";
 choices[39]= new Array();
 choices[39][0] = "Principio de solo una vez";
 choices[39][1] = "Apertura y transparencia";
 choices[39][2] = "Confianza y seguridad";
 choices[39][3] = "Estandarizaci&oacute;n de forma predeterminada";
 answers[39] = choices[39][3];
 units[39] = "19";
 comments[39] = "Id Pregunta: 161. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Junio/Noticia-2016-06-02-Plan-accion-administracion-electronica-2016-2020.html#.WCjvuWrhDIU";


//  Id pregunta: 829 Año de creación de pregunta: 2016
 questions[40]= "41)  La recusaci&oacute;n se plantea...";
 choices[40]= new Array();
 choices[40][0] = "Antes de iniciado el procedimiento";
 choices[40][1] = "Una vez iniciado el procedimiento";
 choices[40][2] = "Cuando el instructor dicta propuesta de resoluci&oacute;n";
 choices[40][3] = "En cualquier momento del procedimiento";
 answers[40] = choices[40][0];
 units[40] = "4, 7, 8, 9";
 comments[40] = "Id Pregunta: 829. Ley 40/2015";


//  Id pregunta: 317 Año de creación de pregunta: 2016
 questions[41]= "42)  Habr&aacute; qu&oacute;rum en el Parlamento Europeo, cuando se encuentre reunida en el sal&oacute;n de sesiones:";
 choices[41]= new Array();
 choices[41][0] = "La cuarta parte de los Diputados que integran el Parlamento.";
 choices[41][1] = "La quinta parte de los Diputados que integran el Parlamento.";
 choices[41][2] = "La mitad de los Diputados que integran el Parlamento.";
 choices[41][3] = "La tercera parte de los Diputados que integran el Parlamento.";
 answers[41] = choices[41][3];
 units[41] = "5";
 comments[41] = "Id Pregunta: 317. UNION EUROPEA";


//  Id pregunta: 731 Año de creación de pregunta: 2016
 questions[42]= "43)  Indique cual de los siguientes no forma parte del vocabulario de scrum";
 choices[42]= new Array();
 choices[42][0] = "Burn-up chart";
 choices[42][1] = "Arquitectural Skype";
 choices[42][2] = "Burn-down chart";
 choices[42][3] = "Definition of done";
 answers[42] = choices[42][1];
 units[42] = "34, 84";
 comments[42] = "Id Pregunta: 731. Metodologias &aacute;giles";


//  Id pregunta: 855 Año de creación de pregunta: 2016
 questions[43]= "44)  Indique cu&aacute;l de las siguientes funciones relativas a una PKI es INCORRECTA:";
 choices[43]= new Array();
 choices[43][0] = "Garantiza mediante el uso de certificados digitales el no repudio, integridad, autenticaci&oacute;n y la publicaci&oacute;n de los datos transmitidos.";
 choices[43][1] = "Los componentes de una PKI para la administraci&oacute;n de los ccertificados son: software, hardware, personas, pol&iacute;ticas, procedimientos.";
 choices[43][2] = "Entre las funciones de una PKI se encuentra la revocaci&oacute;n de claves.";
 choices[43][3] = "Entre las funciones de una PKI se encuentran la generaci&oacute;n, recuperaci&oacute;n y renovaci&oacute;n de claves.";
 answers[43] = choices[43][0];
 units[43] = "76";
 comments[43] = "Id Pregunta: 855. Xunta de Galicia 2015";


//  Id pregunta: 435 Año de creación de pregunta: 2016
 questions[44]= "45)  Sobre el servicio com&uacute;n Autentica, se&ntilde;ale la respuesta correcta:";
 choices[44]= new Array();
 choices[44][0] = "Autentica ofrece &uacute;nicamente servicios de autenticaci&oacute;n de empleados p&uacute;blicos de las AA.PP. y usuarios relacionados,";
 choices[44][1] = "Su objetivo es constituirse como el servicio com&uacute;n compartido de referencia para los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado, para sus aplicaciones internas.";
 choices[44][2] = "El servicio provee atributos de los usuarios autenticados relacionados con la unidad y el puesto de destino, incluyendo correo electr&oacute;nico y tel&eacute;fono.";
 choices[44][3] = "Ofrece funcionalidad de autorizaci&oacute;n de usuarios, &uacute;nicamente pertenecientes a la Administraci&oacute;n General del Estado.";
 answers[44] = choices[44][2];
 units[44] = "43";
 comments[44] = "Id Pregunta: 435. SERVICIOS COMUNES";


//  Id pregunta: 80 Año de creación de pregunta: 2016
 questions[45]= "46)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, se&ntilde;ale la respuesta correcta respecto a la auditor&iacute;a de seguridad:";
 choices[45]= new Array();
 choices[45][0] = "Se realizar&aacute;, al menos, cada dieciocho meses para los sistemas de todas las categor&iacute;as, y con car&aacute;cter extraordinario, siempre que se produzcan modificaciones sustanciales en el sistema de informaci&oacute;n, que puedan repercutir en las medidas de seguridad requeridas.";
 choices[45][1] = "El equipo auditor, en el dise&ntilde;o de sus pruebas y revisiones, debe limitarse a la revisi&oacute;n de documentos facilitados por los responsables de la informaci&oacute;n, del servicio y de seguridad.";
 choices[45][2] = "Cuando existan razones que lo justifiquen, dentro de las tareas de la auditoria de seguridad podr&aacute;n incluirse adem&aacute;s la ejecuci&oacute;n de trabajos de consultor&iacute;a.";
 choices[45][3] = "El informe de auditor&iacute;a deber&aacute; dictaminar sobre la adecuaci&oacute;n de las medidas exigidas por el Esquema Nacional de Seguridad, identificar sus deficiencias y proponer las medidas correctoras o complementarias necesarias.";
 answers[45] = choices[45][3];
 units[45] = "46";
 comments[45] = "Id Pregunta: 80. AGE A1 2015";


//  Id pregunta: 567 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Qu&eacute; limites marca el &quot;pacto fiscal europeo&quot; de 2012 para sus Estados Miembros?";
 choices[46]= new Array();
 choices[46][0] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 40% del PIB";
 choices[46][1] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 choices[46][2] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 50% del PIB";
 choices[46][3] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 answers[46] = choices[46][3];
 units[46] = "12";
 comments[46] = "Id Pregunta: 567. Modelo econ&oacute;mico";


//  Id pregunta: 302 Año de creación de pregunta: 2016
 questions[47]= "48)  El Presidente del Tribunal de Cuentas es elegido para un per&iacute;odo de:";
 choices[47]= new Array();
 choices[47][0] = "Cinco a&ntilde;os.";
 choices[47][1] = "Cuatro a&ntilde;os.";
 choices[47][2] = "Tres a&ntilde;os.";
 choices[47][3] = "Seis meses.";
 answers[47] = choices[47][2];
 units[47] = "5";
 comments[47] = "Id Pregunta: 302. UNION EUROPEA";


//  Id pregunta: 851 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Qu&eacute; m&eacute;todo de replicaci&oacute;n remota entre sistemas de almacenamiento se ve m&aacute;s afectada por la latencia en el caso de largas distancias?";
 choices[48]= new Array();
 choices[48][0] = "As&iacute;ncrona.";
 choices[48][1] = "Log-shipping.";
 choices[48][2] = "Disk buffering.";
 choices[48][3] = "S&iacute;ncrona.";
 answers[48] = choices[48][3];
 units[48] = "53";
 comments[48] = "Id Pregunta: 851. Xunta de Galicia 2015";


//  Id pregunta: 405 Año de creación de pregunta: 2016
 questions[49]= "50)  Se&ntilde;ala las Directivas referidas a la Igualdad de trato de oportunidades entre hombre y mujeres:";
 choices[49]= new Array();
 choices[49][0] = "Directiva 2002/73/CE del Parlamento Europeo y del Consejo.";
 choices[49][1] = "Directiva 2004/113/CE del Consejo.";
 choices[49][2] = "Todas son correctas.";
 choices[49][3] = "Todas son falsas.";
 answers[49] = choices[49][2];
 units[49] = "14";
 comments[49] = "Id Pregunta: 405. POLITICAS DE IGUALDAD";


//  Id pregunta: 648 Año de creación de pregunta: 2016
 questions[50]= "51)  En Itil v3 se diferencia entre la Gesti&oacute;n de la Cartera de Servicios y la Gesti&oacute;n del Cat&aacute;logo de Servicios ya que:";
 choices[50]= new Array();
 choices[50][0] = "La Cartera de Servicios contiene informaci&oacute;n sobre cada servicio y su estado.";
 choices[50][1] = "La Cartera de Servicios es un subconjunto del Cat&aacute;logo de Servicios.";
 choices[50][2] = "La Cartera de Servicios divide los servicios en componentes y contiene pol&iacute;ticas, directrices y responsabilidades , as&iacute; como precios, acuerdos de nivel de servicio y condiciones de entrega.";
 choices[50][3] = "Todas las respuestas son correctas.";
 answers[50] = choices[50][0];
 units[50] = "101";
 comments[50] = "Id Pregunta: 648. Junta de Extremadura A1 2015";


//  Id pregunta: 452 Año de creación de pregunta: 2016
 questions[51]= "52)  Los Presupuestos Generales son expresi&oacute;n...";
 choices[51]= new Array();
 choices[51][0] = "Cifrada";
 choices[51][1] = "Conjunta";
 choices[51][2] = "Sistem&aacute;tica";
 choices[51][3] = "Todas son correctas";
 answers[51] = choices[51][3];
 units[51] = "10";
 comments[51] = "Id Pregunta: 452. PRESUPUESTOS GENERALES";


//  Id pregunta: 299 Año de creación de pregunta: 2016
 questions[52]= "53)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[52]= new Array();
 choices[52][0] = "Quince miembros.";
 choices[52][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[52][2] = "Los miembros que determine el Consejo.";
 choices[52][3] = "Un Presidente y quince miembros.";
 answers[52] = choices[52][1];
 units[52] = "5";
 comments[52] = "Id Pregunta: 299. UNION EUROPEA";


//  Id pregunta: 300 Año de creación de pregunta: 2016
 questions[53]= "54)  La designaci&oacute;n para formar parte del Tribunal de Cuentas la efect&uacute;a:";
 choices[53]= new Array();
 choices[53][0] = "La Comisi&oacute;n.";
 choices[53][1] = "El Consejo de Europa.";
 choices[53][2] = "El Consejo Europeo.";
 choices[53][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[53] = choices[53][3];
 units[53] = "5";
 comments[53] = "Id Pregunta: 300. UNION EUROPEA";


//  Id pregunta: 553 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;Cu&aacute;l es el &oacute;rgano t&eacute;cnico de cooperaci&oacute;n de la Administraci&oacute;n General del Estado, de las Administraciones de las Comunidades Aut&oacute;nomas y de las Entidades Locales en materia de administraci&oacute;n electr&oacute;nica definido en la ley 40/2015 de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[54]= new Array();
 choices[54][0] = "La Conferencia Sectorial de Telecomunicaciones y Sociedad de la Informaci&oacute;n";
 choices[54][1] = "El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica";
 choices[54][2] = "La Comisi&oacute;n Sectorial de administraci&oacute;n electr&oacute;nica";
 choices[54][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[54] = choices[54][2];
 units[54] = "26";
 comments[54] = "Id Pregunta: 553. Gobernanza TIC";


//  Id pregunta: 504 Año de creación de pregunta: 2016
 questions[55]= "56)  La Ley Org&aacute;nica 2/2012 destaca una serie de principios generales entre los que no se encuentra:";
 choices[55]= new Array();
 choices[55][0] = "Principio de transparencia.";
 choices[55][1] = "Principio de cooperaci&oacute;n.";
 choices[55][2] = "Principio de eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos.";
 choices[55][3] = "Principio de lealtad institucional.";
 answers[55] = choices[55][1];
 units[55] = "10";
 comments[55] = "Id Pregunta: 504. PRESUPUESTOS GENERALES";


//  Id pregunta: 118 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;C&oacute;mo se concretan anualmente los objetivos de la Estrategia Espa&ntilde;ola de Activaci&oacute;n para el Empleo?";
 choices[56]= new Array();
 choices[56][0] = "Mediante &Oacute;rdenes Ministeriales del Ministerio de Empleo y Seguridad Social";
 choices[56][1] = "Mediante Reales Decretos del Consejo de Ministros";
 choices[56][2] = "Mediante los Planes Anuales de Pol&iacute;tica de Empleo";
 choices[56][3] = "Mediante dictamen del Consejo General del Sistema Nacional de Empleo";
 answers[56] = choices[56][2];
 units[56] = "15";
 comments[56] = "Id Pregunta: 118. ";


//  Id pregunta: 168 Año de creación de pregunta: 2016
 questions[57]= "58)  En relaci&oacute;n la conectividad desde dispositivos m&oacute;viles en Europa";
 choices[57]= new Array();
 choices[57][0] = "A partir de 15 de Julio de 2017 los operadores solo podr&aacute;n cobrar un extra adicional m&aacute;ximo 1 &euro; /min en llamadas de voz, en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[57][1] = "No existe regulaci&oacute;n sobre el roaming en la UE, sino sobre la portabilidad, que ser&aacute; prohibida a partir del 15 de Julio de 2017.";
 choices[57][2] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[57][3] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de portabilidad al viajar a otro pa&iacute;s de la UE.";
 answers[57] = choices[57][2];
 units[57] = "19";
 comments[57] = "Id Pregunta: 168. https://ec.europa.eu/digital-single-market/en/roaming";


//  Id pregunta: 75 Año de creación de pregunta: 2016
 questions[58]= "59)  Las transferencias internacionales de datos de car&aacute;cter personal:";
 choices[58]= new Array();
 choices[58][0] = "Se regulan en los art&iacute;culos 33 y 34 de la Ley Org&aacute;nica 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal y en el T&iacute;tulo VI del Real Decreto 1720/2007 por el que se aprueba el Reglamento de desarrollo de la Ley Org&aacute;nica 15/1999.";
 choices[58][1] = "Una transferencia internacional de datos, es un tratamiento de datos que supone una transmisi&oacute;n de los mismos fuera del territorio de la Uni&oacute;n Europea (UE).";
 choices[58][2] = "La Decisi&oacute;n de la Comisi&oacute;n 2000/520/CE, con arreglo a la Directiva 95/46/CE, permite actualmente realizar transferencias de datos a Estados Unidos si se cumplen los principios del acuerdo de Puerto Seguro.";
 choices[58][3] = "Precisan, en todo caso, la autorizaci&oacute;n previa de la Direcci&oacute;n de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[58] = choices[58][0];
 units[58] = "35";
 comments[58] = "Id Pregunta: 75. AGE A1 2015";


//  Id pregunta: 850 Año de creación de pregunta: 2016
 questions[59]= "60)  El RPO (Recovery Point Objective) de una organizaci&oacute;n son 2 horas. &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?: ";
 choices[59]= new Array();
 choices[59][0] = "No m&aacute;s de 2 horas de datos de producci&oacute;n se pueden perder en caso de desastre";
 choices[59][1] = "No m&aacute;s de 4 horas de datos de producci&oacute;n se pueden perder en caso de desastre";
 choices[59][2] = "El tiempo para recuperar los sistemas en producci&oacute;n de nuevo no puede ser m&aacute;s de 2 horas.";
 choices[59][3] = "El tiempo para recuperar los sistemas en producci&oacute;n de nuevo no puede ser m&aacute;s de 4 horas.";
 answers[59] = choices[59][0];
 units[59] = "45";
 comments[59] = "Id Pregunta: 850. Xunta de Galicia 2015";


//  Id pregunta: 675 Año de creación de pregunta: 2016
 questions[60]= "61)  Se&ntilde;ale cual de los siguientes factores no contribuye a la sostenibilidad del sistema de pensiones:";
 choices[60]= new Array();
 choices[60][0] = "El aumento de la esperanza de vida.";
 choices[60][1] = "La mejora del &iacute;ndice de natalidad.";
 choices[60][2] = "La reducci&oacute;n del desempleo.";
 choices[60][3] = "El incremento de la edad de jubilaci&oacute;n.";
 answers[60] = choices[60][0];
 units[60] = "14";
 comments[60] = "Id Pregunta: 675. Estructura social";


//  Id pregunta: 576 Año de creación de pregunta: 2016
 questions[61]= "62)  Son herramientas espec&iacute;ficas de control de versiones de software:";
 choices[61]= new Array();
 choices[61][0] = "Mercurial, Git y Apache Subversion.";
 choices[61][1] = "Gimp, Mercurial y Git.";
 choices[61][2] = "RedMine, Planner y OpenProj.";
 choices[61][3] = "Cassandra, Git y REDIS.";
 answers[61] = choices[61][0];
 units[61] = "92";
 comments[61] = "Id Pregunta: 576. Tema 92. TAI 2016.";


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


//  Id pregunta: 297 Año de creación de pregunta: 2016
 questions[63]= "64)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n a la Presidencia del Consejo:";
 choices[63]= new Array();
 choices[63][0] = "Es rotatoria y tiene una duraci&oacute;n de un a&ntilde;o.";
 choices[63][1] = "Es rotatoria y tiene una duraci&oacute;n de seis meses.";
 choices[63][2] = "Se nombra por el Parlamento para un per&iacute;odo de cinco a&ntilde;os.";
 choices[63][3] = "La ostenta el presidente de la Comisi&oacute;n.";
 answers[63] = choices[63][1];
 units[63] = "5";
 comments[63] = "Id Pregunta: 297. UNION EUROPEA";


//  Id pregunta: 569 Año de creación de pregunta: 2016
 questions[64]= "65)  El sector que tiene un mayor peso en el PIB espa&ntilde;ol es el:";
 choices[64]= new Array();
 choices[64][0] = "Primario, que incluye la agricultura y la pesca";
 choices[64][1] = "Secundario, compuesto por los sectores industrial, de la energ&iacute;a y de la construcci&oacute;n";
 choices[64][2] = "Minero, junto con las exportaciones de comercio";
 choices[64][3] = "Servicios";
 answers[64] = choices[64][3];
 units[64] = "12";
 comments[64] = "Id Pregunta: 569. Modelo econ&oacute;mico";


//  Id pregunta: 200 Año de creación de pregunta: 2016
 questions[65]= "66)  Se&ntilde;ale la afirmaci&oacute;n correcta. Corresponde al Rey:";
 choices[65]= new Array();
 choices[65][0] = "Nombrar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[65][1] = "Nombrar y separar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[65][2] = "Nombrar y separar a los miembros del Gobierno previa consulta al Presidente del Gobierno.";
 choices[65][3] = "Nombrar y separar a los miembros del Gobierno, a propuesta de su Presidente.";
 answers[65] = choices[65][3];
 units[65] = "1";
 comments[65] = "Id Pregunta: 200. CONSTITUCION1978";


//  Id pregunta: 811 Año de creación de pregunta: 2016
 questions[66]= "67)  Los Subdirectores generales:";
 choices[66]= new Array();
 choices[66][0] = "son los responsables inmediatos, bajo la supervisi&oacute;n del Secretario general o del titular del &oacute;rgano del que dependan, de la ejecuci&oacute;n de aquellos proyectos, objetivos o actividades que les sean asignados, as&iacute; como de la gesti&oacute;n ordinaria de los asuntos de la competencia de la Subdirecci&oacute;n General";
 choices[66][1] = "ser&aacute;n nombrados, respetando los principios de igualdad, m&eacute;rito y capacidad, y cesados por el Ministro, Secretario de Estado o Subsecretario del que dependan";
 choices[66][2] = "sus nombramientos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, o de otras Administraciones, cuando as&iacute; lo prevean las normas de aplicaci&oacute;n, pertenecientes al Subgrupo A2";
 choices[66][3] = "todas son correctas";
 answers[66] = choices[66][1];
 units[66] = "4, 7, 8, 9";
 comments[66] = "Id Pregunta: 811. Ley 40/2015";


//  Id pregunta: 533 Año de creación de pregunta: 2016
 questions[67]= "68)  Se entender&aacute; acreditada la representaci&oacute;n realizada:";
 choices[67]= new Array();
 choices[67][0] = "mediante apoderamiento apud acta efectuado por comparecencia personal";
 choices[67][1] = "mediante apoderamiento apud acta efectuado por comparecencia electr&oacute;nica en la correspondiente sede electr&oacute;nica";
 choices[67][2] = "a trav&eacute;s de la acreditaci&oacute;n de su inscripci&oacute;n en el registro electr&oacute;nico de apoderamientos de la Administraci&oacute;n P&uacute;blica competente";
 choices[67][3] = "todas son correctas";
 answers[67] = choices[67][3];
 units[67] = "7";
 comments[67] = "Id Pregunta: 533. LEY 39/2015";


//  Id pregunta: 800 Año de creación de pregunta: 2016
 questions[68]= "69)  Las unidades administrativas comprenden puestos de trabajo o dotaciones de plantilla:";
 choices[68]= new Array();
 choices[68][0] = "vinculados funcionalmente por raz&oacute;n de sus cometidos y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[68][1] = "vinculados org&aacute;nicamente por raz&oacute;n de sus cometidos y funcionalmente por una jefatura com&uacute;n";
 choices[68][2] = "vinculados funcionalmente por raz&oacute;n de su territorio y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[68][3] = "vinculados org&aacute;nicamente por raz&oacute;n de su territorio y funcionalmente por una jefatura com&uacute;n";
 answers[68] = choices[68][0];
 units[68] = "4, 7, 8, 9";
 comments[68] = "Id Pregunta: 800. Ley 40/2015";


//  Id pregunta: 237 Año de creación de pregunta: 2016
 questions[69]= "70)  Seg&uacute;n la regulaci&oacute;n constitucional del derecho de asociaci&oacute;n:";
 choices[69]= new Array();
 choices[69][0] = "Las asociaciones que se constituyan deben inscribirse en un registro a los efectos de publicidad.";
 choices[69][1] = "Las asociaciones pueden ser suspendidas en virtud de resoluci&oacute;n administrativa motivada.";
 choices[69][2] = "Este derecho aparece regulado en el T&iacute;tulo Preliminar de la Constituci&oacute;n.";
 choices[69][3] = "Este derecho aparece regulado en la Secci&oacute;n 2&ordf; del Cap&iacute;tulo 2&ordm; del T&iacute;tulo I de la Constituci&oacute;n.";
 answers[69] = choices[69][2];
 units[69] = "1";
 comments[69] = "Id Pregunta: 237. CONSTITUCION1978";


//  Id pregunta: 131 Año de creación de pregunta: 2016
 questions[70]= "71)  En qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola se incluy&oacute; la reforma conocida como la 'regla de oro presupuestaria' en el a&ntilde;o 2011:";
 choices[70]= new Array();
 choices[70][0] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[70][1] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda privada.";
 choices[70][2] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[70][3] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los gastos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 answers[70] = choices[70][0];
 units[70] = "12";
 comments[70] = "Id Pregunta: 131. Leyes modelo econ&oacute;mico";


//  Id pregunta: 756 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Cu&aacute;l de los siguientes no es un eje del Plan de Servicios P&uacute;blicos Digitales que forma parte de la Agenda Digital para Espa&ntilde;a?";
 choices[71]= new Array();
 choices[71][0] = "Programa de Educaci&oacute;n Digital";
 choices[71][1] = "Programa de Salud y Bienestar Social";
 choices[71][2] = "Programa de Administraci&oacute;n de Justicia Digital";
 choices[71][3] = "Programa de capacitaci&oacute;n de profesionales TIC";
 answers[71] = choices[71][3];
 units[71] = "19";
 comments[71] = "Id Pregunta: 756. Agenda Digital para Espa&ntilde;a";


//  Id pregunta: 528 Año de creación de pregunta: 2016
 questions[72]= "73)  Los menores incapacitados, cuando la extensi&oacute;n de la incapacitaci&oacute;n afecte al ejercicio y defensa de los derechos o intereses de que se trate:";
 choices[72]= new Array();
 choices[72][0] = "tienen capacidad de obrar limitada";
 choices[72][1] = "pueden actuar sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[72][2] = "no tienen capacidad de obrar";
 choices[72][3] = "ninguna es correcta";
 answers[72] = choices[72][2];
 units[72] = "7";
 comments[72] = "Id Pregunta: 528. LEY 39/2015";


//  Id pregunta: 171 Año de creación de pregunta: 2016
 questions[73]= "74)  Se&ntilde;ale la respuesta FALSA. Entre los objetivos de ISA2 se encuentra:";
 choices[73]= new Array();
 choices[73][0] = "desarrollar, mantener y promover un enfoque hol&iacute;stico hacia la interoperabilidad en la Uni&oacute;n para eliminar la fragmentaci&oacute;n en el panorama de la interoperabilidad en la Uni&oacute;n";
 choices[73][1] = "facilitar la reutilizaci&oacute;n de las soluciones de interoperabilidad por parte de las administraciones p&uacute;blicas europeas.";
 choices[73][2] = "identificar, crear y explotar soluciones de interoperabilidad que faciliten la ejecuci&oacute;n de las pol&iacute;ticas y actividades de la Uni&oacute;n";
 choices[73][3] = "eliminar la interacci&oacute;n electr&oacute;nica transfronteriza tanto entre las administraciones p&uacute;blicas europeas fomentando una cultura de ciberseguridad europea";
 answers[73] = choices[73][3];
 units[73] = "19";
 comments[73] = "Id Pregunta: 171. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Diciembre/Noticia-2015-12-09-Publicada-la-Decision-ISA2-continuidad-al-esfuerzo-asegurar-interoperabilidad-entre-AAPP-europeas.html#.WCnm1WrhDIU";


//  Id pregunta: 575 Año de creación de pregunta: 2016
 questions[74]= "75)  Si queremos dise&ntilde;ar un enlace de 10 Gbps. &iquest;qu&eacute; medio de transmisi&oacute;n nos permite alcanzar la m&aacute;xima longitud del enlace?";
 choices[74]= new Array();
 choices[74][0] = "Cableado de cobre de categor&iacute;a 7.";
 choices[74][1] = "Fibra &oacute;ptica monomodo tipo OS2.";
 choices[74][2] = "Fibra &oacute;ptica multimodo tipo OM3.";
 choices[74][3] = "Fibra &oacute;ptica multimodo tipo OM4.";
 answers[74] = choices[74][1];
 units[74] = "106";
 comments[74] = "Id Pregunta: 575. Tema 106. TAI 2016.";


