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

//  Id pregunta: 10498 AÃ±o de creación de pregunta: 2016
 questions[0]= "1)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la Deuda P&uacute;blica podr&aacute; estar representada en:";
 choices[0]= new Array();
 choices[0][0] = "En t&iacute;tulos-valores.";
 choices[0][1] = "Las respuestas a) y b) son correctas.";
 choices[0][2] = "Las respuestas a) y b) no son correctas.";
 choices[0][3] = "En cuenta.";
 answers[0] = choices[0][1];
 units[0] = "10";
 comments[0] = "Id Pregunta: 10498. PRESUPUESTOS GENERALES";


//  Id pregunta: 10213 AÃ±o de creación de pregunta: 2016
 questions[1]= "2)  Seg&uacute;n el Art&iacute;culo 59 de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; v&aacute;lida la Regencia nombrada por las Cortes Generales que se componga del siguiente n&uacute;mero de personas:";
 choices[1]= new Array();
 choices[1][0] = "Cinco.";
 choices[1][1] = "Dos.";
 choices[1][2] = "Cuatro.";
 choices[1][3] = "Siete.";
 answers[1] = choices[1][0];
 units[1] = "1";
 comments[1] = "Id Pregunta: 10213. CONSTITUCION1978";


//  Id pregunta: 10057 AÃ±o de creación de pregunta: 2016
 questions[2]= "3)  Con respecto a ITIL se&ntilde;ale qu&eacute; afirmaci&oacute;n es cierta:";
 choices[2]= new Array();
 choices[2][0] = "Constituye una metodolog&iacute;a exhaustiva de pasos a seguir en el dise&ntilde;o de servicios TI.";
 choices[2][1] = "Da instrucciones de trabajo concretas, asignado tareas a personas.";
 choices[2][2] = "Los organismos tecnol&oacute;gicamente m&aacute;s punteros de la Administraci&oacute;n General del Estado se encuentran certificados en ITIL.";
 choices[2][3] = "Constituye un conjunto de mejores pr&aacute;cticas para la gesti&oacute;n de servicios TI.";
 answers[2] = choices[2][3];
 units[2] = "101";
 comments[2] = "Id Pregunta: 10057. AGE A1 2015";


//  Id pregunta: 10598 AÃ±o de creación de pregunta: 2016
 questions[3]= "4)  Entre la documentaci&oacute;n de la Seguridad de la Organizaci&oacute;n nos podremos encontrar:";
 choices[3]= new Array();
 choices[3][0] = "La Pol&iacute;tica de Seguridad Corporativa ser&aacute; elaborada por el Responsable de Seguridad Corporativa y aprobada por el Comit&eacute; de Seguridad Corporativa y por la Alta Direcci&oacute;n.";
 choices[3][1] = "La Pol&iacute;tica de Seguridad de las TIC que debe estar alineada en todo momento con el Mantenimiento de los Sistemas de Informaci&oacute;n.";
 choices[3][2] = "El Documento de Seguridad que ha de estar presente en toda documentaci&oacute;n de la seguridad de la informaci&oacute;n.";
 choices[3][3] = "Todas las respuestas anteriores son correctas.";
 answers[3] = choices[3][0];
 units[3] = "45";
 comments[3] = "Id Pregunta: 10598. Junta de Extremadura A1 2015";


//  Id pregunta: 10388 AÃ±o de creación de pregunta: 2016
 questions[4]= "5)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[4]= new Array();
 choices[4][0] = "Indirecta.";
 choices[4][1] = "Directa.";
 choices[4][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[4][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[4] = choices[4][1];
 units[4] = "14";
 comments[4] = "Id Pregunta: 10388. POLITICAS DE IGUALDAD";


//  Id pregunta: 10489 AÃ±o de creación de pregunta: 2016
 questions[5]= "6)  A tenor del art&iacute;culo 47.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el n&uacute;mero de ejercicios a que pueden aplicarse los gastos no ser&aacute; superior a:";
 choices[5]= new Array();
 choices[5][0] = "Dos.";
 choices[5][1] = "Cuatro.";
 choices[5][2] = "Cinco.";
 choices[5][3] = "Tres.";
 answers[5] = choices[5][1];
 units[5] = "10";
 comments[5] = "Id Pregunta: 10489. PRESUPUESTOS GENERALES";


//  Id pregunta: 10114 AÃ±o de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Qu&eacute; es la Garant&iacute;a Juvenil?";
 choices[6]= new Array();
 choices[6][0] = "Una iniciativa europea que pretende facilitar el acceso de los j&oacute;venes al mercado de trabajo ofreci&eacute;ndoles una oferta de empleo, de educaci&oacute;n o formaci&oacute;n tras haber finalizado sus estudios o quedar desempleados";
 choices[6][1] = "Un Plan que permite la concesi&oacute;n de subvenciones a j&oacute;venes para facilitar el alquiler de su vivienda habitual.";
 choices[6][2] = "Un Plan que concede cr&eacute;ditos en condiciones ventajosas a j&oacute;venes emprendedores";
 choices[6][3] = "Una inciativa europea que facilita a los j&oacute;venes el acceso a las nuevas tecnolog&iacute;as";
 answers[6] = choices[6][0];
 units[6] = "15";
 comments[6] = "Id Pregunta: 10114. ";


//  Id pregunta: 10635 AÃ±o de creación de pregunta: 2016
 questions[7]= "8)  En el modelo relacional existen diversas clasificaciones de las relaciones. Indica qu&eacute; tipos de relaciones se consideran relaciones persistentes:";
 choices[7]= new Array();
 choices[7][0] = "Relaciones base y vistas.";
 choices[7][1] = "Relaciones base, vistas y el resultado de una consulta.";
 choices[7][2] = "Relaciones base, vistas y relaciones temporales.";
 choices[7][3] = "Relaciones base, vistas e instant&aacute;neas.";
 answers[7] = choices[7][3];
 units[7] = "60";
 comments[7] = "Id Pregunta: 10635. Junta de Extremadura A1 2015";


//  Id pregunta: 10492 AÃ±o de creación de pregunta: 2016
 questions[8]= "9)  El R&eacute;gimen Jur&iacute;dico de la Deuda del Estado se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[8]= new Array();
 choices[8][0] = "T&iacute;tulo V, Cap&iacute;tulo II, Secci&oacute;n 4.";
 choices[8][1] = "T&iacute;tulo V, Cap&iacute;tulo I, Secci&oacute;n 2.";
 choices[8][2] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[8][3] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[8] = choices[8][2];
 units[8] = "10";
 comments[8] = "Id Pregunta: 10492. PRESUPUESTOS GENERALES";


//  Id pregunta: 10487 AÃ±o de creación de pregunta: 2016
 questions[9]= "10)  Seg&uacute;n el art&iacute;culo 56.6 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Hacienda dar&aacute; cuentas trimestralmente de los cr&eacute;ditos extraordinarias y suplementos de cr&eacute;dito a:";
 choices[9]= new Array();
 choices[9][0] = "Las Cortes Generales.";
 choices[9][1] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[9][2] = "El Gobierno.";
 choices[9][3] = "El Congreso de los Diputados.";
 answers[9] = choices[9][0];
 units[9] = "10";
 comments[9] = "Id Pregunta: 10487. PRESUPUESTOS GENERALES";


//  Id pregunta: 10397 AÃ±o de creación de pregunta: 2016
 questions[10]= "11)  Un comportamiento realizado con el prop&oacute;sito o el efecto de intimidar, degradar, ofender o atentar contra la dignidad de una persona en raz&oacute;n de su sexo, se denomina:";
 choices[10]= new Array();
 choices[10][0] = "Acoso sexual.";
 choices[10][1] = "Acoso por raz&oacute;n de sexo.";
 choices[10][2] = "Acoso laboral.";
 choices[10][3] = "Acoso mental.";
 answers[10] = choices[10][1];
 units[10] = "14";
 comments[10] = "Id Pregunta: 10397. POLITICAS DE IGUALDAD";


//  Id pregunta: 10354 AÃ±o de creación de pregunta: 2016
 questions[11]= "12)  El Tribunal de Justicia Europeo est&aacute; compuesto por:";
 choices[11]= new Array();
 choices[11][0] = "Veinticinco Jueces y nueve Abogados Generales.";
 choices[11][1] = "Veintisiete Jueces y veintisiete Abogados Generales.";
 choices[11][2] = "Veintisiete Jueces y ocho Abogados Generales.";
 choices[11][3] = "Veinticinco Jueces y siete Abogados Generales.";
 answers[11] = choices[11][2];
 units[11] = "5";
 comments[11] = "Id Pregunta: 10354. UNION EUROPEA";


//  Id pregunta: 10423 AÃ±o de creación de pregunta: 2016
 questions[12]= "13)  Para contribuir a un reparto m&aacute;s equilibrado de las responsabilidades familiares se reconoce a los padres:";
 choices[12]= new Array();
 choices[12][0] = "El derecho a un permiso.";
 choices[12][1] = "Una prestaci&oacute;n por paternidad.";
 choices[12][2] = "Ambas son correctas.";
 choices[12][3] = "18 d&iacute;as de permiso.";
 answers[12] = choices[12][2];
 units[12] = "14";
 comments[12] = "Id Pregunta: 10423. POLITICAS DE IGUALDAD";


//  Id pregunta: 10069 AÃ±o de creación de pregunta: 2016
 questions[13]= "14)  Los contratos que celebren los poderes adjudicadores se perfeccionan con su:";
 choices[13]= new Array();
 choices[13][0] = "Ejecuci&oacute;n";
 choices[13][1] = "Adjudicaci&oacute;n";
 choices[13][2] = "Licitaci&oacute;n";
 choices[13][3] = "Formalizaci&oacute;n";
 answers[13] = choices[13][3];
 units[13] = "37";
 comments[13] = "Id Pregunta: 10069. AGE A1 2015";


//  Id pregunta: 10056 AÃ±o de creación de pregunta: 2016
 questions[14]= "15)  En cuanto al Plan de Sistemas de Informaci&oacute;n:";
 choices[14]= new Array();
 choices[14][0] = "Sirve como punto de partida del Plan Estrat&eacute;gico de la Organizaci&oacute;n.";
 choices[14][1] = "No es abordado detalladamente dentro de la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3.";
 choices[14][2] = "Fija el plan de proyectos a desarrollar, detallando los m&aacute;s inmediatos.";
 choices[14][3] = "Es un documento r&iacute;gido que debe ser actualizado s&oacute;lo ante discontinuidades de los productos tecnol&oacute;gicos sobre los que se sustenta.";
 answers[14] = choices[14][2];
 units[14] = "83";
 comments[14] = "Id Pregunta: 10056. AGE A1 2015";


//  Id pregunta: 10436 AÃ±o de creación de pregunta: 2016
 questions[15]= "16)  Respecto a la carpeta ciudadana, se&ntilde;ale la respuesta incorrecta:";
 choices[15]= new Array();
 choices[15][0] = "Se trata de un &aacute;rea personal en la que cualquier ciudadano disponga de toda su informaci&oacute;n custodiada y gestionada por parte de la Administraci&oacute;n General del Estado.";
 choices[15][1] = "Permite comprobar el Estado de los expedientes con distintos organismos.";
 choices[15][2] = "La autenticaci&oacute;n del ciudadano se realiza a trav&eacute;s de certificados digitales.";
 choices[15][3] = "Muestra al ciudadano los Apoderamientos del Registro Electr&oacute;nico de Apoderamientos (REA), tanto para los poderdantes como los apoderados, posibilitando la revocaci&oacute;n y la renuncia respectivamente.";
 answers[15] = choices[15][2];
 units[15] = "43";
 comments[15] = "Id Pregunta: 10436. SERVICIOS COMUNES";


//  Id pregunta: 10365 AÃ±o de creación de pregunta: 2016
 questions[16]= "17)  Las decisiones de la Comisi&oacute;n se adoptar&aacute;n por:";
 choices[16]= new Array();
 choices[16][0] = "Unanimidad y mayor&iacute;a simple.";
 choices[16][1] = "Unanimidad.";
 choices[16][2] = "Mayor&iacute;a cualificada.";
 choices[16][3] = "Mayor&iacute;a simple.";
 answers[16] = choices[16][3];
 units[16] = "5";
 comments[16] = "Id Pregunta: 10365. UNION EUROPEA";


//  Id pregunta: 10640 AÃ±o de creación de pregunta: 2016
 questions[17]= "18)  Los sistemas de archivos gestionados por Windows 2008 Server son:";
 choices[17]= new Array();
 choices[17][0] = "Fat y Ntfs.";
 choices[17][1] = "Extfat y Fat.";
 choices[17][2] = "Fat y Nfst.";
 choices[17][3] = "ext2fs y Ntfs.";
 answers[17] = choices[17][0];
 units[17] = "58";
 comments[17] = "Id Pregunta: 10640. Junta de Extremadura A1 2015";


//  Id pregunta: 10611 AÃ±o de creación de pregunta: 2016
 questions[18]= "19)  Una de las caracter&iacute;sticas de seguridad en SQL Server 2008 es el cifrado transparente de datos. Se&ntilde;ala la afirmaci&oacute;n correcta:";
 choices[18]= new Array();
 choices[18][0] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de registro.";
 choices[18][1] = "SQL Server ofrece la capacidad de buscar dentro de los datos cifrados.";
 choices[18][2] = "Para trabajar con datos cifrados utilizando esta caracter&iacute;stica hay que introducir cambios en las aplicaciones.";
 choices[18][3] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de datos.";
 answers[18] = choices[18][1];
 units[18] = "63";
 comments[18] = "Id Pregunta: 10611. Junta de Extremadura A1 2015";


//  Id pregunta: 10472 AÃ±o de creación de pregunta: 2016
 questions[19]= "20)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la modalidad de auditor&iacute;a cuyo objeto consiste en la verificaci&oacute;n selectiva de la adecuaci&oacute;n a la legalidad de la gesti&oacute;n presupuestaria, de contrataci&oacute;n, personal, ingresos y gesti&oacute;n de subvenciones, as&iacute; como de cualquier otro aspecto de la actividad econ&oacute;mico financiero de las entidades auditadas se denomina:";
 choices[19]= new Array();
 choices[19][0] = "Auditor&iacute;a de sistemas y procedimientos de gesti&oacute;n econ&oacute;mica y financiera.";
 choices[19][1] = "Auditor&iacute;a operativa.";
 choices[19][2] = "Auditor&iacute;a de cumplimiento.";
 choices[19][3] = "Auditor&iacute;a de econom&iacute;a, eficacia y eficiencia.";
 answers[19] = choices[19][2];
 units[19] = "10";
 comments[19] = "Id Pregunta: 10472. PRESUPUESTOS GENERALES";


//  Id pregunta: 10536 AÃ±o de creación de pregunta: 2016
 questions[20]= "21)  En el registro electr&oacute;nico general de apoderamientos, deber&aacute;n inscribirse, al menos, los de car&aacute;cter general otorgados por quien ostente la condici&oacute;n de interesado en un procedimiento administrativo a favor de representante:";
 choices[20]= new Array();
 choices[20][0] = "apud acta";
 choices[20][1] = "presencialmente";
 choices[20][2] = "electr&oacute;nicamente";
 choices[20][3] = "todas son correctas";
 answers[20] = choices[20][3];
 units[20] = "7";
 comments[20] = "Id Pregunta: 10536. LEY 39/2015";


//  Id pregunta: 10429 AÃ±o de creación de pregunta: 2016
 questions[21]= "22)  Para la prevenci&oacute;n del acoso sexual y del acoso por raz&oacute;n de sexo, las Administraciones P&uacute;blicas negociar&aacute;n con la representaci&oacute;n legal de las trabajadoras y trabajadores, un protocolo de actuaci&oacute;n que comprender&aacute;:";
 choices[21]= new Array();
 choices[21][0] = "La identificaci&oacute;n de las personas responsables de atender a quienes formulen una queja o denuncia.";
 choices[21][1] = "El tratamiento p&uacute;blico de las denuncias de hechos que pudieran ser constitutivos de acoso sexual o de acoso por raz&oacute;n de sexo.";
 choices[21][2] = "Ambas son correctas.";
 choices[21][3] = "Ambas son incorrectas.";
 answers[21] = choices[21][0];
 units[21] = "14";
 comments[21] = "Id Pregunta: 10429. POLITICAS DE IGUALDAD";


//  Id pregunta: 10322 AÃ±o de creación de pregunta: 2016
 questions[22]= "23)  El Tribunal de Justicia est&aacute; formado por:";
 choices[22]= new Array();
 choices[22][0] = "Un Juez de cada Estado miembro.";
 choices[22][1] = "Por dos Jueces de cada Estado miembro.";
 choices[22][2] = "Por veinte Jueces.";
 choices[22][3] = "Por ocho Jueces.";
 answers[22] = choices[22][0];
 units[22] = "5";
 comments[22] = "Id Pregunta: 10322. UNION EUROPEA";


//  Id pregunta: 10362 AÃ±o de creación de pregunta: 2016
 questions[23]= "24)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[23]= new Array();
 choices[23][0] = "Son actos normativos.";
 choices[23][1] = "Poseen alcance general.";
 choices[23][2] = "No son obligatorias.";
 choices[23][3] = "Son actos individuales no normativos.";
 answers[23] = choices[23][3];
 units[23] = "5";
 comments[23] = "Id Pregunta: 10362. UNION EUROPEA";


//  Id pregunta: 10295 AÃ±o de creación de pregunta: 2016
 questions[24]= "25)  La sede del Tribunal de Cuentas Europeo se encuentra en:";
 choices[24]= new Array();
 choices[24][0] = "Estrasburgo.";
 choices[24][1] = "Bruselas.";
 choices[24][2] = "Luxemburgo.";
 choices[24][3] = "Holanda.";
 answers[24] = choices[24][2];
 units[24] = "5";
 comments[24] = "Id Pregunta: 10295. UNION EUROPEA";


//  Id pregunta: 10253 AÃ±o de creación de pregunta: 2016
 questions[25]= "26)  La Constituci&oacute;n Espa&ntilde;ola establece sobre la inform&aacute;tica que:";
 choices[25]= new Array();
 choices[25][0] = "La Ley potenciar&aacute; el uso de la inform&aacute;tica para garantizar la libertad de residencia y las transacciones electr&oacute;nicas en el marco de la econom&iacute;a de mercado y la planificaci&oacute;n del desarrollo econ&oacute;mico nacional.";
 choices[25][1] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el secreto de las comunicaciones, la informaci&oacute;n veraz y la solidaridad entre todos los ciudadanos.";
 choices[25][2] = "En la Constituci&oacute;n Espa&ntilde;ola de 1978 no se hace referencia expresa a la inform&aacute;tica.";
 choices[25][3] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el honor y la intimidad personal y familiar de los ciudadanos y el pleno ejercicio de sus derechos.";
 answers[25] = choices[25][3];
 units[25] = "1";
 comments[25] = "Id Pregunta: 10253. CONSTITUCION1978";


//  Id pregunta: 10529 AÃ±o de creación de pregunta: 2016
 questions[26]= "27)  Se presumir&aacute; la representaci&oacute;n para:";
 choices[26]= new Array();
 choices[26][0] = "formular solicitudes";
 choices[26][1] = "los actos y gestiones de mero tr&aacute;mite";
 choices[26][2] = "presentar declaraciones responsables o comunicaciones";
 choices[26][3] = "interponer recursos, desistir de acciones y renunciar a derechos en nombre de otra persona";
 answers[26] = choices[26][1];
 units[26] = "7";
 comments[26] = "Id Pregunta: 10529. LEY 39/2015";


//  Id pregunta: 10594 AÃ±o de creación de pregunta: 2016
 questions[27]= "28)  Son excepciones singulares en la utilizaci&oacute;n de los medios y servicios compartidos:";
 choices[27]= new Array();
 choices[27][0] = "Seguridad Social y AEAT";
 choices[27][1] = "IGAE (Servicios Inform&aacute;tica Presupuestaria)";
 choices[27][2] = "Medios y servicios espec&iacute;ficos que afecten a defensa, consulta pol&iacute;tica, situaciones de crisis y seguridad del Estado y los que manejen informaci&oacute;n clasificada";
 choices[27][3] = "Todos los anteriores";
 answers[27] = choices[27][3];
 units[27] = "19";
 comments[27] = "Id Pregunta: 10594. Estrategia TIC";


//  Id pregunta: 10607 AÃ±o de creación de pregunta: 2016
 questions[28]= "29)  Seg&uacute;n Magerit v3, en el desarrollo de sistemas de informaci&oacute;n:";
 choices[28]= new Array();
 choices[28][0] = "La seguridad debe estar embebida en el sistema desde su primera concepci&oacute;n.";
 choices[28][1] = "La seguridad comenzar&aacute; a considerarse formalmente cuando finalice el proceso de implantaci&oacute;n de sistemas de informaci&oacute;n.";
 choices[28][2] = "La seguridad del sistema de informaci&oacute;n es m&aacute;s econ&oacute;mica implantarla una vez puesto en producci&oacute;n el sistema de informaci&oacute;n que tenerla en consideraci&oacute;n durante el desarrollo del sistema.";
 choices[28][3] = "La seguridad s&oacute;lo ralentiza el proceso de desarrollo de sistemas de informaci&oacute;n por lo que s&oacute;lo se debe considerar en aquellos sistemas que usen datos econ&oacute;micos.";
 answers[28] = choices[28][0];
 units[28] = "45";
 comments[28] = "Id Pregunta: 10607. Junta de Extremadura A1 2015";


//  Id pregunta: 10176 AÃ±o de creación de pregunta: 2016
 questions[29]= "30)  Seg&uacute;n el Art&iacute;culo 115 de la Constituci&oacute;n Espa&ntilde;ola, el Presidente del Gobierno, previa deliberaci&oacute;n del Consejo de Ministros, y bajo su responsabilidad, podr&aacute; proponer la disoluci&oacute;n de:";
 choices[29]= new Array();
 choices[29][0] = "El Congreso, el senado o las Cortes Generales.";
 choices[29][1] = "Solamente el Congreso.";
 choices[29][2] = "El Congreso, pero s&oacute;lo mediante la tramitaci&oacute;n de una moci&oacute;n de censura.";
 choices[29][3] = "El Congreso y el Senado, mediante Refer&eacute;ndum.";
 answers[29] = choices[29][0];
 units[29] = "1";
 comments[29] = "Id Pregunta: 10176. CONSTITUCION1978";


//  Id pregunta: 10399 AÃ±o de creación de pregunta: 2016
 questions[30]= "31)  Las medidas espec&iacute;ficas que adoptar&aacute;n los Poderes P&uacute;blicos a favor de las mujeres para corregir situaciones patentes de desigualdad de hecho con respecto a los hombres, se denominan:";
 choices[30]= new Array();
 choices[30][0] = "Acciones de discriminaci&oacute;n.";
 choices[30][1] = "Acciones positivas.";
 choices[30][2] = "Acciones negativas.";
 choices[30][3] = "Acciones neutras.";
 answers[30] = choices[30][1];
 units[30] = "14";
 comments[30] = "Id Pregunta: 10399. POLITICAS DE IGUALDAD";


//  Id pregunta: 10456 AÃ±o de creación de pregunta: 2016
 questions[31]= "32)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los escenarios presupuestarios plurianuales contendr&aacute;n la distribuci&oacute;n org&aacute;nica de los recursos disponibles y se desarrollar&aacute;n en programas plurianuales, referidos a:";
 choices[31]= new Array();
 choices[31][0] = "a) Los cuatro ejercicios siguientes.";
 choices[31][1] = "b) El ejercicio siguiente.";
 choices[31][2] = "c) Los dos ejercicios siguientes.";
 choices[31][3] = "d) Los tres ejercicios siguientes.";
 answers[31] = choices[31][3];
 units[31] = "10";
 comments[31] = "Id Pregunta: 10456. PRESUPUESTOS GENERALES";


//  Id pregunta: 10441 AÃ±o de creación de pregunta: 2016
 questions[32]= "33)  Se&ntilde;ale la respuesta falsa respecto a Habilit@, Registro de Funcionarios Habilitados:";
 choices[32]= new Array();
 choices[32][0] = "El art&iacute;culo 12.3 de la Ley 39/2015recoge que la Administraci&oacute;n General del Estado, las Comunidades Aut&oacute;nomas y las Entidades Locales mantendr&aacute;n actualizado un registro, u otro sistema equivalente, donde constar&aacute;n los funcionarios habilitados para la identificaci&oacute;n o firma.";
 choices[32][1] = "La Orden HAP/8/2014, de 7 de enero, regula el Registro de funcionarios habilitados para la identificaci&oacute;n y autenticaci&oacute;n de ciudadanos en el &aacute;mbito de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos vinculados o dependientes.";
 choices[32][2] = "En el caso en que el ciudadano no disponga de medios de autenticaci&oacute;n y firma para relacionarse de manera electr&oacute;nica con las Administraciones, la Ley 39/2015 prev&eacute; que, siempre que el ciudadano se identifique y deje constancia de su consentimiento expreso, un funcionario podr&aacute; actuar en su nombre, utilizando el sistema de firma del que disponga para ello.";
 choices[32][3] = "Tambi&eacute;n se establece en la misma Ley 39/2015 que las Administraciones P&uacute;blicas podr&aacute;n realizar copias aut&eacute;nticas de los documentos p&uacute;blicos administrativos o privados mediante funcionario habilitado.";
 answers[32] = choices[32][1];
 units[32] = "43";
 comments[32] = "Id Pregunta: 10441. SERVICIOS COMUNES";


//  Id pregunta: 10513 AÃ±o de creación de pregunta: 2016
 questions[33]= "34)  La presente Ley se aplica al sector p&uacute;blico, que comprende (se&ntilde;ala la incorrecta):";
 choices[33]= new Array();
 choices[33][0] = "la Administraci&oacute;n General del Estado y las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[33][1] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[33][2] = "el sector p&uacute;blico institucional";
 choices[33][3] = "el sector privado corporativo";
 answers[33] = choices[33][3];
 units[33] = "7";
 comments[33] = "Id Pregunta: 10513. LEY 39/2015";


//  Id pregunta: 10481 AÃ±o de creación de pregunta: 2016
 questions[34]= "35)  A tenor del art&iacute;culo 48 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, podr&aacute; ser diferido el vencimiento de la obligaci&oacute;n de pago del precio de compra de bienes inmuebles adquiridos directamente cuyo importe excede de:";
 choices[34]= new Array();
 choices[34][0] = "Cuatro millones de euros.";
 choices[34][1] = "Seis millones de euros.";
 choices[34][2] = "Siete millones de euros.";
 choices[34][3] = "Cinco millones de euros.";
 answers[34] = choices[34][1];
 units[34] = "10";
 comments[34] = "Id Pregunta: 10481. PRESUPUESTOS GENERALES";


//  Id pregunta: 10063 AÃ±o de creación de pregunta: 2016
 questions[35]= "36)  El modelo de servicio en la nube en el que el consumidor no tiene control sobre la red, los servidores, sistemas operativos o almacenamiento, pero s&iacute; sobre las aplicaciones desplegadas y sobre los ajustes de configuraci&oacute;n de dichas aplicaciones, se denomina:";
 choices[35]= new Array();
 choices[35][0] = "Infrastructure as a Service (IaaS)";
 choices[35][1] = "Platform as a Service (PaaS)";
 choices[35][2] = "Software as a Service (SaaS)";
 choices[35][3] = "Application as a Service (AaaS)";
 answers[35] = choices[35][1];
 units[35] = "52";
 comments[35] = "Id Pregunta: 10063. AGE A1 2015";


//  Id pregunta: 10283 AÃ±o de creación de pregunta: 2016
 questions[36]= "37)  Se&ntilde;ale cu&aacute;l no es una de las prioridades de la Estrategia Europa 2020:";
 choices[36]= new Array();
 choices[36][0] = "Crecimiento inteligente.";
 choices[36][1] = "Crecimiento inclusivo.";
 choices[36][2] = "Crecimiento sostenible.";
 choices[36][3] = "Crecimiento integrador.";
 answers[36] = choices[36][1];
 units[36] = "5";
 comments[36] = "Id Pregunta: 10283. UNION EUROPEA";


//  Id pregunta: 10137 AÃ±o de creación de pregunta: 2016
 questions[37]= "38)  La creaci&oacute;n de la Autoridad Independiente de Responsabilidad Fiscal, dentro de la Ley Org&aacute;nica 6/2013, tiene por objeto:";
 choices[37]= new Array();
 choices[37][0] = "Garantizar el cumplimiento efectivo por las Administraciones P&uacute;blicas del principio de estabilidad presupuestaria previsto en el art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola.";
 choices[37][1] = "La evaluaci&oacute;n continua del ciclo presupuestario, del endeudamiento p&uacute;blico, y el an&aacute;lisis de las previsiones econ&oacute;micas.";
 choices[37][2] = "Ejercer sus funciones con autonom&iacute;a e independencia funcional respecto de las Administraciones P&uacute;blicas.";
 choices[37][3] = "Todos las anteriores son ciertas.";
 answers[37] = choices[37][3];
 units[37] = "12";
 comments[37] = "Id Pregunta: 10137. Leyes modelo econ&oacute;mico";


//  Id pregunta: 10031 AÃ±o de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Qu&eacute; es MongoDB?";
 choices[38]= new Array();
 choices[38][0] = "Una herramienta Object Relational Mapping (ORM) para facilitar el desarrollo.";
 choices[38][1] = "Una base de datos de c&oacute;digo abierto de documentos tipo JSON.";
 choices[38][2] = "Un sistema gestor de base de datos relacional.";
 choices[38][3] = "Una base de datos jer&aacute;rquica de relaciones encadenadas.";
 answers[38] = choices[38][1];
 units[38] = "73";
 comments[38] = "Id Pregunta: 10031. AGE A1 2015";


//  Id pregunta: 10506 AÃ±o de creación de pregunta: 2016
 questions[39]= "40)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, responde a la reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, (en adelante CE) e incorpora tres nuevos principios con respecto a la derogada Ley Org&aacute;nica 5/2001, de 13 de diciembre, complementaria a la Ley General de Estabilidad Presupuestaria ,Cu&aacute;les son?";
 choices[39]= new Array();
 choices[39][0] = "Estabilidad presupuestaria, plurianualidad, y responsabilidad.";
 choices[39][1] = "Sostenibilidad financiera, responsabilidad y transparencia.";
 choices[39][2] = "Plurianualidad, lealtad institucional y eficiencia en la asignaci&oacute;n de los recursos p&uacute;blicos";
 choices[39][3] = "Responsabilidad, sostenibilidad financiera y lealtad institucional.";
 answers[39] = choices[39][3];
 units[39] = "10";
 comments[39] = "Id Pregunta: 10506. PRESUPUESTOS GENERALES";


//  Id pregunta: 10017 AÃ±o de creación de pregunta: 2016
 questions[40]= "41)  De acuerdo con el Reglamento por el que se desarrolla parcialmente la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, aprobado por Real Decreto 1671/2009, de 6 de noviembre, se&ntilde;ale la respuesta correcta:";
 choices[40]= new Array();
 choices[40][0] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de emisi&oacute;n.";
 choices[40][1] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 12 meses desde la fecha de emisi&oacute;n.";
 choices[40][2] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de notificaci&oacute;n.";
 choices[40][3] = "Los documentos electr&oacute;nicos deben conservarse por el per&iacute;odo m&iacute;nimo que determine cada &oacute;rgano administrativo de acuerdo con el procedimiento administrativo de que se trate.";
 answers[40] = choices[40][3];
 units[40] = "44";
 comments[40] = "Id Pregunta: 10017. AGE A1 2015";


//  Id pregunta: 10532 AÃ±o de creación de pregunta: 2016
 questions[41]= "42)  Deber&aacute; incorporar al expediente administrativo acreditaci&oacute;n de la condici&oacute;n de representante y de los poderes que tiene reconocidos en dicho momento:";
 choices[41]= new Array();
 choices[41][0] = "el &oacute;rgano competente para la iniciaci&oacute;n del procedimiento";
 choices[41][1] = "el &oacute;rgano competente para la instrucci&oacute;n del procedimiento";
 choices[41][2] = "el &oacute;rgano competente para la tramitaci&oacute;n del procedimiento";
 choices[41][3] = "el &oacute;rgano competente para la terminaci&oacute;n del procedimiento";
 answers[41] = choices[41][2];
 units[41] = "7";
 comments[41] = "Id Pregunta: 10532. LEY 39/2015";


//  Id pregunta: 10628 AÃ±o de creación de pregunta: 2016
 questions[42]= "43)  Seg&uacute;n el Real Decreto 4/2010, de 8 de enero, por el que se regula el Esquema Nacional de Interoperabilidad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; es la interoperabilidad?";
 choices[42]= new Array();
 choices[42][0] = "Es la capacidad de los sistemas de informaci&oacute;n y de los procedimientos a los que &eacute;stos dan soporte, de compartir datos y posibilitar el intercambio de informaci&oacute;n y conocimiento entre ellos.";
 choices[42][1] = "Es la obligaci&oacute;n de conectividad ente sistemas operativos de las Administraciones P&uacute;blicas.";
 choices[42][2] = "Es la capacidad de intercambio de datos entre las Comunidades Aut&oacute;nomas y la Administraci&oacute;n Central.";
 choices[42][3] = "Es la posibilidad de acceso a los datos que poseen todas las Administraciones sobre cualquiera de los usuarios de los sistemas de informaci&oacute;n.";
 answers[42] = choices[42][0];
 units[42] = "45";
 comments[42] = "Id Pregunta: 10628. Junta de Extremadura A1 2015";


//  Id pregunta: 10316 AÃ±o de creación de pregunta: 2016
 questions[43]= "44)  El Consejo de la Uni&oacute;n Europea de reunir&aacute; por:";
 choices[43]= new Array();
 choices[43][0] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de dos de sus miembros o de la Comisi&oacute;n.";
 choices[43][1] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n.";
 choices[43][2] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de tres de sus miembros o de la Comisi&oacute;n.";
 choices[43][3] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n o el Parlamento.";
 answers[43] = choices[43][1];
 units[43] = "5";
 comments[43] = "Id Pregunta: 10316. UNION EUROPEA";


//  Id pregunta: 10649 AÃ±o de creación de pregunta: 2016
 questions[44]= "45)  Los objetivos que persegu&iacute;a Codd con el modelo relacional, se pueden resumir en:";
 choices[44]= new Array();
 choices[44][0] = "Independencia f&iacute;sica, independencia l&oacute;gica, flexibilidad, uniformidad y sencillez.";
 choices[44][1] = "Independencia f&iacute;sica, independencia l&oacute;gica y uniformidad.";
 choices[44][2] = "Independencia f&iacute;sica, flexibilidad, uniformidad y sencillez.";
 choices[44][3] = "Independencia f&iacute;sica, independencia l&oacute;gica, independencia conceptual, flexibilidad, uniformidad y sencillez.";
 answers[44] = choices[44][0];
 units[44] = "60";
 comments[44] = "Id Pregunta: 10649. Junta de Extremadura A1 2015";


//  Id pregunta: 10001 AÃ±o de creación de pregunta: 2016
 questions[45]= "46)  Los medios y servicios compartidos, establecidos en el Real Decreto 806/2014 dentro del modelo de gobernanza en el &aacute;mbito de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones de la Administraci&oacute;n General del Estado, son tales que:";
 choices[45]= new Array();
 choices[45][0] = "Su declaraci&oacute;n presupone que el servicio se encuentra en producci&oacute;n, listo para la adhesi&oacute;n de las diferentes unidades departamentales.";
 choices[45][1] = "Dado su car&aacute;cter obligatorio y sustitutivo, no se permite acordar excepciones por razones econ&oacute;micas, t&eacute;cnicas o de oportunidad sobrevenidas.";
 choices[45][2] = "Su declaraci&oacute;n establece la habilitaci&oacute;n para el desarrollo de las medidas t&eacute;cnicas, organizativas, presupuestarias y normativas.";
 choices[45][3] = "Su provisi&oacute;n se realiza directa y exclusivamente por medio de la Direcci&oacute;n General de Administraci&oacute;n Digital";
 answers[45] = choices[45][2];
 units[45] = "26";
 comments[45] = "Id Pregunta: 10001. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 10540 AÃ±o de creación de pregunta: 2016
 questions[46]= "47)  Respecto a los poderes que se inscriban en los registros electr&oacute;nicos generales y particulares de apoderamientos pueden ser:";
 choices[46]= new Array();
 choices[46][0] = "un poder general para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa y ante cualquier Administraci&oacute;n";
 choices[46][1] = "un poder para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa ante una Administraci&oacute;n u Organismo concreto";
 choices[46][2] = "un poder para que el apoderado pueda actuar en nombre del poderdante &uacute;nicamente para la realizaci&oacute;n de determinados tr&aacute;mites especificados en el poder";
 choices[46][3] = "todas son correctas";
 answers[46] = choices[46][3];
 units[46] = "7";
 comments[46] = "Id Pregunta: 10540. LEY 39/2015";


//  Id pregunta: 10475 AÃ±o de creación de pregunta: 2016
 questions[47]= "48)  De conformidad con el art&iacute;culo 29.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales se remitir&aacute;n:";
 choices[47]= new Array();
 choices[47][0] = "Anualmente.";
 choices[47][1] = "Ninguna de las respuestas es correcta.";
 choices[47][2] = "Trimestralmente.";
 choices[47][3] = "Semestralmente.";
 answers[47] = choices[47][0];
 units[47] = "10";
 comments[47] = "Id Pregunta: 10475. PRESUPUESTOS GENERALES";


//  Id pregunta: 10075 AÃ±o de creación de pregunta: 2016
 questions[48]= "49)  Las transferencias internacionales de datos de car&aacute;cter personal:";
 choices[48]= new Array();
 choices[48][0] = "Se regulan en los art&iacute;culos 33 y 34 de la Ley Org&aacute;nica 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal y en el T&iacute;tulo VI del Real Decreto 1720/2007 por el que se aprueba el Reglamento de desarrollo de la Ley Org&aacute;nica 15/1999.";
 choices[48][1] = "Una transferencia internacional de datos, es un tratamiento de datos que supone una transmisi&oacute;n de los mismos fuera del territorio de la Uni&oacute;n Europea (UE).";
 choices[48][2] = "La Decisi&oacute;n de la Comisi&oacute;n 2000/520/CE, con arreglo a la Directiva 95/46/CE, permite actualmente realizar transferencias de datos a Estados Unidos si se cumplen los principios del acuerdo de Puerto Seguro.";
 choices[48][3] = "Precisan, en todo caso, la autorizaci&oacute;n previa de la Direcci&oacute;n de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[48] = choices[48][0];
 units[48] = "35";
 comments[48] = "Id Pregunta: 10075. AGE A1 2015";


//  Id pregunta: 10147 AÃ±o de creación de pregunta: 2016
 questions[49]= "50)  Seg&uacute;n la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas el ejercicio de la potestad reglamentaria corresponde:";
 choices[49]= new Array();
 choices[49][0] = "Al Gobierno de la naci&oacute;n";
 choices[49][1] = "A las Cortes Generales y al Gobierno por delegaci&oacute;n de estas";
 choices[49][2] = "Al Gobierno de la naci&oacute;n y a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas";
 choices[49][3] = "Al Gobierno de la naci&oacute;n, a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas y a los &oacute;rganos de gobierno locales";
 answers[49] = choices[49][3];
 units[49] = "7";
 comments[49] = "Id Pregunta: 10147. Ley 39/2015, Art&iacute;culo 128";


//  Id pregunta: 10558 AÃ±o de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Cu&aacute;ndo ha sido aprobada la Agenda Digital para Espa&ntilde;a?";
 choices[50]= new Array();
 choices[50][0] = "En 2015";
 choices[50][1] = "En 2013";
 choices[50][2] = "En 2016";
 choices[50][3] = "En 2007";
 answers[50] = choices[50][1];
 units[50] = "19";
 comments[50] = "Id Pregunta: 10558. Agenda Digital";


//  Id pregunta: 10673 AÃ±o de creación de pregunta: 2016
 questions[51]= "52)  Se&ntilde;ale cual de los siguientes factores no contribuye a la sostenibilidad del sistema de pensiones:";
 choices[51]= new Array();
 choices[51][0] = "El aumento de la esperanza de vida.";
 choices[51][1] = "La mejora del &iacute;ndice de natalidad.";
 choices[51][2] = "La reducci&oacute;n del desempleo.";
 choices[51][3] = "El incremento de la edad de jubilaci&oacute;n.";
 answers[51] = choices[51][0];
 units[51] = "14";
 comments[51] = "Id Pregunta: 10673. Estructura social";


//  Id pregunta: 10065 AÃ±o de creación de pregunta: 2016
 questions[52]= "53)  Respecto a las arquitecturas de almacenamiento SAN Fibre Channel, indique la respuesta incorrecta:";
 choices[52]= new Array();
 choices[52][0] = "Cada equipo de la red se identifica de forma un&iacute;voca mediante una direcci&oacute;n de 64 bits.";
 choices[52][1] = "El SNS asigna los FCID y permite traducir de FCID a WWN.";
 choices[52][2] = "Los switches FC intercambian informaci&oacute;n de enrutado de tramas mediante un protocolo del tipo EGP adaptado a las redes FC.";
 choices[52][3] = "La se&ntilde;alizaci&oacute;n del canal de fibra puede funcionar sobre pares de cobre.";
 answers[52] = choices[52][2];
 units[52] = "53";
 comments[52] = "Id Pregunta: 10065. AGE A1 2015";


//  Id pregunta: 10496 AÃ±o de creación de pregunta: 2016
 questions[53]= "54)  A los efectos de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , forman parte del sector p&uacute;blico estatal:";
 choices[53]= new Array();
 choices[53][0] = "Las respuestas a) y b) son correctas.";
 choices[53][1] = "Los organismos aut&oacute;nomos dependientes de la Administraci&oacute;n General del Estado.";
 choices[53][2] = "Las entidades p&uacute;blicas empresariales, dependientes de la Administraci&oacute;n General del Estado, o de cualesquiera otros organismos p&uacute;blicos vinculados o dependientes de ella.";
 choices[53][3] = "Las respuestas a) y b) no son correctas.";
 answers[53] = choices[53][0];
 units[53] = "10";
 comments[53] = "Id Pregunta: 10496. PRESUPUESTOS GENERALES";


//  Id pregunta: 10508 AÃ±o de creación de pregunta: 2016
 questions[54]= "55)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, se dict&oacute; en desarrollo de lo indicado en:";
 choices[54]= new Array();
 choices[54][0] = "El art&iacute;culo 131 de la Constituci&oacute;n que establece que el Estado, mediante ley, podr&aacute; planificar la actividad econ&oacute;mica general para atender a las necesidades colectivas, equilibrar y armonizar el desarrollo regional y sectorial y estimular el crecimiento de la renta y de la riqueza y su m&aacute;s justa distribuci&oacute;n.";
 choices[54][1] = "El art&iacute;culo 134.1 de la Constituci&oacute;n que establece que corresponde al Gobierno la elaboraci&oacute;n de los Presupuestos Generales del Estado y a las Cortes Generales, su examen, enmienda y aprobaci&oacute;n.";
 choices[54][2] = "La Disposici&oacute;n Adicional &Uacute;nica de la Reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, de 27 de septiembre de 2011 .";
 choices[54][3] = "El art&iacute;culo 135.2 de la Constituci&oacute;n que establec&iacute;a que los cr&eacute;ditos para satisfacer el pago de intereses y capital de la Deuda P&uacute;blica del Estado se entender&aacute;n siempre incluidos en el estado de gastos de los presupuestos y no podr&aacute;n ser objeto de enmienda o modificaci&oacute;n, mientras se ajusten a las condiciones de la ley de emisi&oacute;n.";
 answers[54] = choices[54][3];
 units[54] = "10";
 comments[54] = "Id Pregunta: 10508. PRESUPUESTOS GENERALES";


//  Id pregunta: 10613 AÃ±o de creación de pregunta: 2016
 questions[55]= "56)  El Modelo de Referencia de Interconexi&oacute;n de Sistemas Abiertos (OSI) consta de siete niveles. Se&ntilde;ala cu&aacute;l de los principios que se aplicaron para llevar a cabo esta divisi&oacute;n es falso:";
 choices[55]= new Array();
 choices[55][0] = "No se deben crear demasiados niveles de manera que la tarea de describir e integrar &eacute;stos fuera m&aacute;s dif&iacute;cil de lo necesario.";
 choices[55][1] = "Aunque se requiera un nivel de abstracci&oacute;n diferente en el manejo de los datos, debe usarse un nivel ya existente.";
 choices[55][2] = "Cada nivel debe realizar unas funciones bien definidas.";
 choices[55][3] = "Crear para cada nivel interfases con el nivel superior e inferior &uacute;nicamente.";
 answers[55] = choices[55][1];
 units[55] = "48";
 comments[55] = "Id Pregunta: 10613. Junta de Extremadura A1 2015";


//  Id pregunta: 10530 AÃ±o de creación de pregunta: 2016
 questions[56]= "57)  La representaci&oacute;n podr&aacute; acreditarse:";
 choices[56]= new Array();
 choices[56][0] = "mediante cualquier t&iacute;tulo jur&iacute;dico";
 choices[56][1] = "mediante resoluci&oacute;n judicial especial";
 choices[56][2] = "&uacute;nicamente mediante poder notarial";
 choices[56][3] = "mediante cualquier medio v&aacute;lido en Derecho que deje constancia fidedigna de su existencia";
 answers[56] = choices[56][3];
 units[56] = "7";
 comments[56] = "Id Pregunta: 10530. LEY 39/2015";


//  Id pregunta: 10174 AÃ±o de creación de pregunta: 2016
 questions[57]= "58)  De conformidad con la Constituci&oacute;n Espa&ntilde;ola, &iquest; cu&aacute;l de los siguientes derechos y libertades es susceptible de tutela a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional?";
 choices[57]= new Array();
 choices[57][0] = "El derecho a la propiedad privada.";
 choices[57][1] = "El derecho de asociaci&oacute;n.";
 choices[57][2] = "El derecho de fundaci&oacute;n.";
 choices[57][3] = "El derecho de negociaci&oacute;n colectiva.";
 answers[57] = choices[57][1];
 units[57] = "1";
 comments[57] = "Id Pregunta: 10174. CONSTITUCION1978";


//  Id pregunta: 10259 AÃ±o de creación de pregunta: 2016
 questions[58]= "59)  La iniciativa legislativa corresponde:";
 choices[58]= new Array();
 choices[58][0] = "Al Congreso y al Senado, &uacute;nicamente.";
 choices[58][1] = "Al rey y al Gobierno.";
 choices[58][2] = "Al Congreso, al Senado y al Rey.";
 choices[58][3] = "Al Gobierno, al Congreso y al Senado.";
 answers[58] = choices[58][3];
 units[58] = "1";
 comments[58] = "Id Pregunta: 10259. CONSTITUCION1978";


//  Id pregunta: 10254 AÃ±o de creación de pregunta: 2016
 questions[59]= "60)  El Art&iacute;culo 16 de la Constituci&oacute;n Espa&ntilde;ola garantiza:";
 choices[59]= new Array();
 choices[59][0] = "La libertad ideol&oacute;gica, religiosa y de culto.";
 choices[59][1] = "La libertad sexual y religiosa.";
 choices[59][2] = "La obligaci&oacute;n del derecho al voto en las elecciones.";
 choices[59][3] = "La ausencia de libertad cat&oacute;lica.";
 answers[59] = choices[59][3];
 units[59] = "1";
 comments[59] = "Id Pregunta: 10254. CONSTITUCION1978";


//  Id pregunta: 10287 AÃ±o de creación de pregunta: 2016
 questions[60]= "61)  Se&ntilde;ale cu&aacute;l no es un principio del Plan de acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[60]= new Array();
 choices[60][0] = "Versi&oacute;n digital prioritaria.";
 choices[60][1] = "Principio de &laquo;solo una vez&raquo;.";
 choices[60][2] = "Inclusi&oacute;n y accesibilidad.";
 choices[60][3] = "Apertura y transparencia.";
 answers[60] = choices[60][0];
 units[60] = "5";
 comments[60] = "Id Pregunta: 10287. UNION EUROPEA";


//  Id pregunta: 10104 AÃ±o de creación de pregunta: 2016
 questions[61]= "62)  Son bases de datos NoSQL:";
 choices[61]= new Array();
 choices[61][0] = "MongoDB y Maria DB";
 choices[61][1] = "HBase y Dynamo";
 choices[61][2] = "MariaDB, Cassandra y BigTable";
 choices[61][3] = "La A) y la C)";
 answers[61] = choices[61][1];
 units[61] = "73";
 comments[61] = "Id Pregunta: 10104. ";


//  Id pregunta: 10060 AÃ±o de creación de pregunta: 2016
 questions[62]= "63)  El modelo de capacidad de procesos establecido por COBIT v5:";
 choices[62]= new Array();
 choices[62][0] = "No modifica esencialmente el modelo planteado por COBIT v4.1.";
 choices[62][1] = "Define 5 niveles de procesos (proceso incompleto, ejecutado, gestionado, predecible, optimizado).";
 choices[62][2] = "El nivel 1 (proceso ejecutado) s&oacute;lo se alcanza si el proceso alcanza su prop&oacute;sito.";
 choices[62][3] = "Un proceso es optimizado si se ejecuta dentro de los l&iacute;mites definidos para alcanzar sus resultados de proceso.";
 answers[62] = choices[62][2];
 units[62] = "101";
 comments[62] = "Id Pregunta: 10060. AGE A1 2015";


//  Id pregunta: 10239 AÃ±o de creación de pregunta: 2016
 questions[63]= "64)  Respecto de las relaciones que constitucionalmente se regulan entre los miembros del Gobierno y las Cortes Generales:";
 choices[63]= new Array();
 choices[63][0] = "La comparecencia de los miembros del Gobierno ante las C&aacute;maras y sus Comisiones puede extenderse tambi&eacute;n a los funcionarios de sus Departamentos.";
 choices[63][1] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo solicitasen las propias C&aacute;maras o sus Comisiones.";
 choices[63][2] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo deciden los miembros del Gobierno.";
 choices[63][3] = "Los funcionarios no comparecer&aacute;n en ning&uacute;n caso.";
 answers[63] = choices[63][0];
 units[63] = "1";
 comments[63] = "Id Pregunta: 10239. CONSTITUCION1978";


//  Id pregunta: 10573 AÃ±o de creación de pregunta: 2016
 questions[64]= "65)  Si queremos dise&ntilde;ar un enlace de 10 Gbps. &iquest;qu&eacute; medio de transmisi&oacute;n nos permite alcanzar la m&aacute;xima longitud del enlace?";
 choices[64]= new Array();
 choices[64][0] = "Cableado de cobre de categor&iacute;a 7.";
 choices[64][1] = "Fibra &oacute;ptica monomodo tipo OS2.";
 choices[64][2] = "Fibra &oacute;ptica multimodo tipo OM3.";
 choices[64][3] = "Fibra &oacute;ptica multimodo tipo OM4.";
 answers[64] = choices[64][1];
 units[64] = "106";
 comments[64] = "Id Pregunta: 10573. Tema 106. TAI 2016.";


//  Id pregunta: 10202 AÃ±o de creación de pregunta: 2016
 questions[65]= "66)  Se&ntilde;ale c&oacute;mo se re&uacute;nen los miembros del Gobierno:";
 choices[65]= new Array();
 choices[65][0] = "En Consejo de Ministros y en Comisiones Delegadas del Gobierno.";
 choices[65][1] = "En Consejo de Ministros y en Consejo de Vicepresidentes.";
 choices[65][2] = "En Consejo de Ministros y en Comisiones Delegadas de las Cortes Generales.";
 choices[65][3] = "En Comisiones Delegadas del Gobierno y Consejo de Estado.";
 answers[65] = choices[65][0];
 units[65] = "1";
 comments[65] = "Id Pregunta: 10202. CONSTITUCION1978";


//  Id pregunta: 10445 AÃ±o de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Cu&aacute;l de los siguientes datos NO es obligatorio que figure en la realizaci&oacute;n de una inscripci&oacute;n en el Registro electr&oacute;nico de Apoderamientos?";
 choices[66]= new Array();
 choices[66][0] = "Nombre y apellidos, denominaci&oacute;n o raz&oacute;n social y NIF del poderante.";
 choices[66][1] = "Per&iacute;odo de vigencia de los tr&aacute;mites objeto de apoderamiento.";
 choices[66][2] = "Fecha de otorgamiento.";
 choices[66][3] = "N&uacute;mero de referencia del alta y fecha de alta en el Registro.";
 answers[66] = choices[66][1];
 units[66] = "43";
 comments[66] = "Id Pregunta: 10445. SERVICIOS COMUNES";


//  Id pregunta: 10273 AÃ±o de creación de pregunta: 2016
 questions[67]= "68)  Se&ntilde;ale la opci&oacute;n correcta";
 choices[67]= new Array();
 choices[67][0] = "Jenkins un servidor de integraci&oacute;n continua comercial.";
 choices[67][1] = "Extiende su funcionalidad a trav&eacute;s de plugins.";
 choices[67][2] = "Solamente soporta herramientas de control de versiones como CVS, Gity Clearcase.";
 choices[67][3] = "No posee un historial de cambios realizados por build o versi&oacute;n.";
 answers[67] = choices[67][1];
 units[67] = "92";
 comments[67] = "Id Pregunta: 10273. INTEGRACION CONTINUA";


//  Id pregunta: 10440 AÃ±o de creación de pregunta: 2016
 questions[68]= "69)  Respecto al Sistema de Informaci&oacute;n Administrativa, se&ntilde;ale la respuesta falsa:";
 choices[68]= new Array();
 choices[68][0] = "Contiene la relaci&oacute;n de procedimientos y servicios de la AGE, y de todas las administraciones participantes.";
 choices[68][1] = "Cumple para la AGE el requisito establecido en el art&iacute;culo 9 del Esquema Nacional de Interoperabilidad, que obliga a las Administraciones p&uacute;blicas a mantener actualizado un Inventario de Informaci&oacute;n Administrativa.";
 choices[68][2] = "SIA est&aacute; dise&ntilde;ado para permitir la administraci&oacute;n distribuida y la actualizaci&oacute;n corresponsable por todas las Administraciones participantes, mediante una aplicaci&oacute;n web.";
 choices[68][3] = "Los usuarios son gestionados por una red de responsables de cada Departamento.";
 answers[68] = choices[68][2];
 units[68] = "43";
 comments[68] = "Id Pregunta: 10440. SERVICIOS COMUNES";


//  Id pregunta: 10217 AÃ±o de creación de pregunta: 2016
 questions[69]= "70)  Tal y como marca la Constituci&oacute;n Espa&ntilde;ola de 1978, en el caso de los refer&eacute;ndums consultivos:";
 choices[69]= new Array();
 choices[69][0] = "Su propuesta parte del Presidente del Gobierno, ha de ser autorizada por el Congreso de los Diputados.";
 choices[69][1] = "Son propuestos por el Consejo de Ministros, siendo autorizados previamente por el Presidente del Gobierno.";
 choices[69][2] = "Son refrendados por el Rey.";
 choices[69][3] = "Son convocados por el Presidente del Gobierno.";
 answers[69] = choices[69][0];
 units[69] = "1";
 comments[69] = "Id Pregunta: 10217. CONSTITUCION1978";


//  Id pregunta: 10347 AÃ±o de creación de pregunta: 2016
 questions[70]= "71)  La Comisi&oacute;n Europea est&aacute; integrada por:";
 choices[70]= new Array();
 choices[70][0] = "18 miembros.";
 choices[70][1] = "Ninguna es correcta.";
 choices[70][2] = "22 miembros.";
 choices[70][3] = "21 miembros.";
 answers[70] = choices[70][1];
 units[70] = "5";
 comments[70] = "Id Pregunta: 10347. UNION EUROPEA";


//  Id pregunta: 10504 AÃ±o de creación de pregunta: 2016
 questions[71]= "72)  Sobre el per&iacute;odo medio de pagos, se&ntilde;ale la respuesta falsa:";
 choices[71]= new Array();
 choices[71][0] = "Se entiende que existe sostenibilidad de la deuda comercial, cuando el periodo medio de pago a los proveedores no supere el plazo m&aacute;ximo previsto en la normativa sobre morosidad.";
 choices[71][1] = "Este control informatizado y sistematizado de las facturas favorecer&aacute; un seguimiento riguroso de la morosidad a trav&eacute;s de un indicador, el periodo medio de pagos, que visualizar&aacute; el volumen de deuda comercial de las Administraciones P&uacute;blicas.";
 choices[71][2] = "Para el c&aacute;lculo econ&oacute;mico del per&iacute;odo medio de pago a proveedores, se tendr&aacute;n en cuenta las facturas expedidas desde el 1 de enero de 2015 que consten en el registro contable de facturas o sistema equivalente y las certificaciones mensuales de obra aprobadas a partir de la misma fecha.";
 choices[71][3] = "El per&iacute;odo medio de pagos se calcular&aacute; mediante la siguiente f&oacute;rmula: Periodo medio de pago global a proveedores = &Sigma; (periodo medio de pago de cada entidad x importe operaciones de la entidad)/ &Sigma; importe operaciones de las entidades";
 answers[71] = choices[71][2];
 units[71] = "10";
 comments[71] = "Id Pregunta: 10504. PRESUPUESTOS GENERALES";


//  Id pregunta: 10454 AÃ±o de creación de pregunta: 2016
 questions[72]= "73)  El Presupuesto por programas sirve para saber...";
 choices[72]= new Array();
 choices[72][0] = "En qu&eacute; nos gastamos el dinero";
 choices[72][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[72][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[72][3] = "Qui&eacute;n se gasta el dinero";
 answers[72] = choices[72][2];
 units[72] = "10";
 comments[72] = "Id Pregunta: 10454. PRESUPUESTOS GENERALES";


//  Id pregunta: 10661 AÃ±o de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Qu&eacute; tipos de nodos tiene un cl&uacute;ster Hadoop?";
 choices[73]= new Array();
 choices[73][0] = "Varios namenodes y varios datanodes por cluster";
 choices[73][1] = "varios namenodes y obligatoriamente 1 datanode por cluster";
 choices[73][2] = "1 namenode y varios datanodes por cluster";
 choices[73][3] = "1 namenode y obligatoriamente 1 datanode por cluster";
 answers[73] = choices[73][2];
 units[73] = "73";
 comments[73] = "Id Pregunta: 10661. ";


//  Id pregunta: 10373 AÃ±o de creación de pregunta: 2016
 questions[74]= "75)  &iquest;Cu&aacute;ntos Abogados Generales asisten al Tribunal Superior de Justicia?:";
 choices[74]= new Array();
 choices[74][0] = "Nueve.";
 choices[74][1] = "Diez.";
 choices[74][2] = "Siete.";
 choices[74][3] = "Ocho.";
 answers[74] = choices[74][3];
 units[74] = "5";
 comments[74] = "Id Pregunta: 10373. UNION EUROPEA";


//  Id pregunta: 10355 AÃ±o de creación de pregunta: 2016
 questions[75]= "76)  En el marco de la Uni&oacute;n Europea, los dict&aacute;menes:";
 choices[75]= new Array();
 choices[75][0] = "Son vinculantes solamente.";
 choices[75][1] = "No son vinculantes, ya que su contenido no obliga a aqu&eacute;llos a los que van dirigidos.";
 choices[75][2] = "Son preceptivos y vinculantes.";
 choices[75][3] = "Son preceptivos y no vinculantes.";
 answers[75] = choices[75][1];
 units[75] = "5";
 comments[75] = "Id Pregunta: 10355. UNION EUROPEA";


//  Id pregunta: 10214 AÃ±o de creación de pregunta: 2016
 questions[76]= "77)  Seg&uacute;n el T&iacute;tulo II de la Constituci&oacute;n Espa&ntilde;ola relativo a la Corona:";
 choices[76]= new Array();
 choices[76][0] = "La Regencia se ejercer&aacute; por mandato constitucional y siempre en nombre del Rey.";
 choices[76][1] = "Las abdicaciones y renuncias en el orden sucesorio se resolver&aacute;n por ley ordinaria.";
 choices[76][2] = "El Pr&iacute;ncipe heredero podr&aacute; asumir la Regencia durante su minor&iacute;a de edad.";
 choices[76][3] = "La Regencia podr&aacute; ejercerse por nacionales de cualquier Estado.";
 answers[76] = choices[76][0];
 units[76] = "1";
 comments[76] = "Id Pregunta: 10214. CONSTITUCION1978";


//  Id pregunta: 10083 AÃ±o de creación de pregunta: 2016
 questions[77]= "78)  Seg&uacute;n WCAG 2.0, &iquest;con qu&eacute; principio est&aacute; relacionada la pauta &ldquo;Hacer que las p&aacute;ginas web aparezcan y operen de forma predecible&rdquo;?";
 choices[77]= new Array();
 choices[77][0] = "Perceptible";
 choices[77][1] = "Operable";
 choices[77][2] = "Comprensible";
 choices[77][3] = "Robusto";
 answers[77] = choices[77][2];
 units[77] = "42";
 comments[77] = "Id Pregunta: 10083. AGE A1 2015";


//  Id pregunta: 10669 AÃ±o de creación de pregunta: 2016
 questions[78]= "79)  Un procedimiento administrativo finalizar&aacute;, seg&uacute;n la Ley 39/2015, por:";
 choices[78]= new Array();
 choices[78][0] = "Resoluci&oacute;n.";
 choices[78][1] = "Desistimiento o renuncia.";
 choices[78][2] = "Caducidad.";
 choices[78][3] = "Todas las anteriores.";
 answers[78] = choices[78][3];
 units[78] = "7";
 comments[78] = "Id Pregunta: 10669. Art&iacute;culo 84 de la Ley 39/2015";


//  Id pregunta: 10482 AÃ±o de creación de pregunta: 2016
 questions[79]= "80)  De acuerdo con el art&iacute;culo 67 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, si las variaciones afectasen al volumen de endeudamiento a corto y largo plazo, ser&aacute; competencia del Consejo de Ministros cuando su importe exceda de la cuant&iacute;a de:";
 choices[79]= new Array();
 choices[79][0] = "12.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[79][1] = "13.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[79][2] = "11.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[79][3] = "10.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 answers[79] = choices[79][0];
 units[79] = "10";
 comments[79] = "Id Pregunta: 10482. PRESUPUESTOS GENERALES";


//  Id pregunta: 10022 AÃ±o de creación de pregunta: 2016
 questions[80]= "81)  La composici&oacute;n inicial del Comit&eacute; Ejecutivo de la Comisi&oacute;n de Estrategia TIC, fijada por la disposici&oacute;n adicional quinta del Real Decreto 806/2014, incluye, entre otros, a:";
 choices[80]= new Array();
 choices[80][0] = "Los responsables de las unidades ministeriales de tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones.";
 choices[80][1] = "La Inspecci&oacute;n General del Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[80][2] = "El titular de la Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 choices[80][3] = "Representantes de las empresas del sector TIC nacional.";
 answers[80] = choices[80][1];
 units[80] = "26";
 comments[80] = "Id Pregunta: 10022. AGE A1 2015";


//  Id pregunta: 10027 AÃ±o de creación de pregunta: 2016
 questions[81]= "82)  La Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, NO estableci&oacute; como derecho de los ciudadanos, el derecho:";
 choices[81]= new Array();
 choices[81][0] = "A la igualdad en el acceso electr&oacute;nico a los servicios de las Administraciones P&uacute;blicas.";
 choices[81][1] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que tengan la condici&oacute;n de interesado.";
 choices[81][2] = "A la calidad de los servicios p&uacute;blicos prestados por medios electr&oacute;nicos.";
 choices[81][3] = "A la preferencia en la tramitaci&oacute;n de los procedimientos presentados electr&oacute;nicamente.";
 answers[81] = choices[81][3];
 units[81] = "7";
 comments[81] = "Id Pregunta: 10027. AGE A1 2015";


//  Id pregunta: 10333 AÃ±o de creación de pregunta: 2016
 questions[82]= "83)  Est&aacute;n legitimados para interponer el recurso de carencia del art. 175 TCE:";
 choices[82]= new Array();
 choices[82][0] = "Las instituciones comunitarias.";
 choices[82][1] = "Los Estados miembros y las instituciones comunitarias.";
 choices[82][2] = "Los Estados miembros.";
 choices[82][3] = "Los nacionales de los Estados miembros.";
 answers[82] = choices[82][1];
 units[82] = "5";
 comments[82] = "Id Pregunta: 10333. UNION EUROPEA";


//  Id pregunta: 10503 AÃ±o de creación de pregunta: 2016
 questions[83]= "84)  Respecto a la Ley Org&aacute;nica 2/2012 se&ntilde;ale la respuesta falsa:";
 choices[83]= new Array();
 choices[83][0] = "La elaboraci&oacute;n, aprobaci&oacute;n y ejecuci&oacute;n de los Presupuestos y dem&aacute;s actuaciones que afecten a los gastos o ingresos de las Administraciones P&uacute;blicas y dem&aacute;s entidades que forman parte del sector p&uacute;blico se someter&aacute; al principio de estabilidad presupuestaria.";
 choices[83][1] = "Ninguna Administraci&oacute;n P&uacute;blica podr&aacute; incurrir en d&eacute;ficit estructural, definido como d&eacute;ficit ajustado del ciclo, neto de medidas excepcionales y temporales.";
 choices[83][2] = "Excepcionalmente, el Estado y las Comunidades Aut&oacute;nomas podr&aacute;n incurrir en d&eacute;ficit estructural en caso de cat&aacute;strofes naturales, recesi&oacute;n econ&oacute;mica grave o situaciones de emergencia extraordinaria que escapen al control de las Administraciones P&uacute;blicas y perjudiquen considerablemente su situaci&oacute;n financiera o su sostenibilidad econ&oacute;mica o social.";
 choices[83][3] = "Las Corporaciones Locales deber&aacute;n mantener una posici&oacute;n de equilibrio presupuestario.";
 answers[83] = choices[83][3];
 units[83] = "10";
 comments[83] = "Id Pregunta: 10503. PRESUPUESTOS GENERALES";


//  Id pregunta: 10055 AÃ±o de creación de pregunta: 2016
 questions[84]= "85)  WS-Security contiene especificaciones sobre:";
 choices[84]= new Array();
 choices[84][0] = "La publicaci&oacute;n, localizaci&oacute;n y enlazado de los Servicios Web.";
 choices[84][1] = "La forma de conseguir integridad y seguridad en los mensajes SOAP.";
 choices[84][2] = "Las pol&iacute;ticas en materia de seguridad aplicables a un sistema de informaci&oacute;n.";
 choices[84][3] = "El env&iacute;o de datagramas sin establecimiento previo de una conexi&oacute;n.";
 answers[84] = choices[84][1];
 units[84] = "119";
 comments[84] = "Id Pregunta: 10055. AGE A1 2015";


//  Id pregunta: 10053 AÃ±o de creación de pregunta: 2016
 questions[85]= "86)  &iquest;Cu&aacute;l de los siguientes objetivos est&aacute; fuera del alcance de una reuni&oacute;n diaria de SCRUM (daily scrum)?";
 choices[85]= new Array();
 choices[85][0] = "Exponer las tareas no planificadas que tambi&eacute;n est&aacute;n haciendo los miembros del equipo.";
 choices[85][1] = "Resolver detalladamente los problemas que puedan tener los miembros del equipo.";
 choices[85][2] = "Poner de manifiesto el ritmo de trabajo de cada miembro del equipo.";
 choices[85][3] = "Identificar las tareas que puedan afectar a otros miembros del equipo.";
 answers[85] = choices[85][1];
 units[85] = "84";
 comments[85] = "Id Pregunta: 10053. AGE A1 2015";


//  Id pregunta: 10604 AÃ±o de creación de pregunta: 2016
 questions[86]= "87)  ITIL v3, define:";
 choices[86]= new Array();
 choices[86][0] = "Un proceso es un conjunto estructurado de actividades dise&ntilde;ado para cumplir un objetivo concreto.";
 choices[86][1] = "Un proceso es un conjunto de actividades no estructuradas para cumplir un objetivo concreto.";
 choices[86][2] = "Un proceso es toda actividad encaminada a cumplir con un est&aacute;ndar definido por las normas ISO.";
 choices[86][3] = "Un proceso es un conjunto de actividades de documentaci&oacute;n y seguridad dise&ntilde;ados mediante diagramas de flujo de informaci&oacute;n.";
 answers[86] = choices[86][0];
 units[86] = "101";
 comments[86] = "Id Pregunta: 10604. Junta de Extremadura A1 2015";


//  Id pregunta: 10438 AÃ±o de creación de pregunta: 2016
 questions[87]= "88)  El Real Decreto 424/2016, de 11 de noviembre establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales. Se&ntilde;ale la respuesta falsa.";
 choices[87]= new Array();
 choices[87][0] = "Dentro del Ministerio de Energ&iacute;a, Turismo y Agenda Digital se encuentra la Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital, de la que depende la Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n.";
 choices[87][1] = "Suprime la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones.";
 choices[87][2] = "La Direcci&oacute;n General de Racionalizaci&oacute;n y Centralizaci&oacute;n de la Contrataci&oacute;n es un &oacute;rgano directivo perteneciente a la Subsecretar&iacute;a de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[87][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, con rango de Direcci&oacute;n general depende de la Secretar&iacute;a de Estado de Funci&oacute;n P&uacute;blica.";
 answers[87] = choices[87][3];
 units[87] = "43";
 comments[87] = "Id Pregunta: 10438. SERVICIOS COMUNES";


//  Id pregunta: 10081 AÃ±o de creación de pregunta: 2016
 questions[88]= "89)  El lenguaje SPARK es un subconjunto de:";
 choices[88]= new Array();
 choices[88][0] = "Java";
 choices[88][1] = "Fortran";
 choices[88][2] = "Ruby";
 choices[88][3] = "Ada";
 answers[88] = choices[88][3];
 units[88] = "73";
 comments[88] = "Id Pregunta: 10081. AGE A1 2015";


//  Id pregunta: 10384 AÃ±o de creación de pregunta: 2016
 questions[89]= "90)  De conformidad con lo establecido en la Org&aacute;nica 3/2007 para la igualdad efectiva entre mujeres y hombres, los &oacute;rganos de contrataci&oacute;n podr&aacute;n establecer en los pliegos de cl&aacute;usulas administrativas particulares la preferencia, en igualdad de condiciones jur&iacute;dicas y econ&oacute;micas, en la adjudicaci&oacute;n de los contratos de las proposiciones presentadas por aquellas empresas que:";
 choices[89]= new Array();
 choices[89][0] = "Sean dirigidas por mujeres";
 choices[89][1] = "Cuenten con un colectivo paritario de trabajadores y trabajadoras";
 choices[89][2] = "Incluyan en su proposici&oacute;n para ejecutar el contrato medidas para promover la igualdad efectiva entre mujeres y hombres";
 choices[89][3] = "Fomenten el acceso de las mujeres a puestos directivos.";
 answers[89] = choices[89][2];
 units[89] = "14";
 comments[89] = "Id Pregunta: 10384. POLITICAS DE IGUALDAD";


//  Id pregunta: 10071 AÃ±o de creación de pregunta: 2016
 questions[90]= "91)  Seg&uacute;n el Modelo de Referencia Workflow definido por WfMC, &iquest;cu&aacute;l de las siguientes funciones corresponde al Servicio de Representaci&oacute;n del Workflow?";
 choices[90]= new Array();
 choices[90][0] = "Interpretar la descripci&oacute;n de procesos y controlar las diferentes instancias de los procesos, secuenciar las actividades, adicionar elementos a la lista de trabajo de los usuarios, e invocar las aplicaciones necesarias.";
 choices[90][1] = "Especificar el formato de intercambio com&uacute;n para soportar la transferencia de definiciones de procesos entre productos diferentes, utilizando un lenguaje de definici&oacute;n de procesos.";
 choices[90][2] = "Definir los mecanismos requeridos por los desarrolladores de productos workflow para implementar la comunicaci&oacute;n de un motor workflow con otros.";
 choices[90][3] = "Monitorizar informaci&oacute;n relevante del workflow, fundamentalmente con fines de auditor&iacute;a y estad&iacute;sticos.";
 answers[90] = choices[90][0];
 units[90] = "86";
 comments[90] = "Id Pregunta: 10071. AGE A1 2015";


//  Id pregunta: 10188 AÃ±o de creación de pregunta: 2016
 questions[91]= "92)  &iquest;Puede el Estado transferir o delegar a las Comunidades Aut&oacute;nomas facultadas que son de su titularidad?";
 choices[91]= new Array();
 choices[91][0] = "No, en ning&uacute;n caso.";
 choices[91][1] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con cualquier tipo de facultades.";
 choices[91][2] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, sin que el Estado se pueda reservar ninguna forma de control.";
 choices[91][3] = ", mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, previendo en cada caso la correspondiente transferencia de medios financieros, as&iacute; como las formas de control que se reserve el Estado.";
 answers[91] = choices[91][3];
 units[91] = "1";
 comments[91] = "Id Pregunta: 10188. CONSTITUCION1978";


//  Id pregunta: 10420 AÃ±o de creación de pregunta: 2016
 questions[92]= "93)  La Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, recoge que deber&aacute;n elaborar y aplicar un plan de igualdad, aquellas empresas con m&aacute;s de:";
 choices[92]= new Array();
 choices[92][0] = "150 trabajadores/as.";
 choices[92][1] = "200 trabajadores/as.";
 choices[92][2] = "250 trabajadores/as.";
 choices[92][3] = "300 trabajadores/as.";
 answers[92] = choices[92][2];
 units[92] = "14";
 comments[92] = "Id Pregunta: 10420. POLITICAS DE IGUALDAD";


//  Id pregunta: 10583 AÃ±o de creación de pregunta: 2016
 questions[93]= "94)  &iquest;Qu&eacute; establece Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[93]= new Array();
 choices[93][0] = "Los principios rectores";
 choices[93][1] = "Los objetivos estrat&eacute;gicos y las acciones para alcanzarlos";
 choices[93][2] = "Los hitos para su desarrollo gradual";
 choices[93][3] = "Todos los anteriores";
 answers[93] = choices[93][3];
 units[93] = "19";
 comments[93] = "Id Pregunta: 10583. Estrategia TIC";


//  Id pregunta: 10266 AÃ±o de creación de pregunta: 2016
 questions[94]= "95)  El T&iacute;tulo en el que la Constituci&oacute;n indica cu&aacute;les son las lenguas oficiales del Estado es:";
 choices[94]= new Array();
 choices[94][0] = "El Segundo.";
 choices[94][1] = "El Primero.";
 choices[94][2] = "El Preliminar.";
 choices[94][3] = "El Tercero.";
 answers[94] = choices[94][0];
 units[94] = "1";
 comments[94] = "Id Pregunta: 10266. CONSTITUCION1978";


//  Id pregunta: 10641 AÃ±o de creación de pregunta: 2016
 questions[95]= "96)  La estructura de un Directorio Activo se basa en los siguientes conceptos:";
 choices[95]= new Array();
 choices[95][0] = "Directorios, Unidades f&iacute;sicas y Usuarios.";
 choices[95][1] = "Dominio, Unidad Organizativa, Grupos y Objetos.";
 choices[95][2] = "Unidades f&iacute;sicas, Unidades l&oacute;gicas y Directorios.";
 choices[95][3] = "Ficheros, Directorios, Particiones y Unidades.";
 answers[95] = choices[95][1];
 units[95] = "58";
 comments[95] = "Id Pregunta: 10641. Junta de Extremadura A1 2015";


//  Id pregunta: 10461 AÃ±o de creación de pregunta: 2016
 questions[96]= "97)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, a qui&eacute;n le corresponde aprobar y comprometer los gastos propios de los servicios a su cargo:";
 choices[96]= new Array();
 choices[96][0] = "A los ministros.";
 choices[96][1] = "Las respuestas a) y b) son correctas.";
 choices[96][2] = "Las respuestas a) y b) no son correctas.";
 choices[96][3] = "A los titulares de los &oacute;rganos del Estado.";
 answers[96] = choices[96][1];
 units[96] = "10";
 comments[96] = "Id Pregunta: 10461. PRESUPUESTOS GENERALES";


//  Id pregunta: 10619 AÃ±o de creación de pregunta: 2016
 questions[97]= "98)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[97]= new Array();
 choices[97][0] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: la identificaci&oacute;n de clases sem&aacute;nticas, atributos y servicios; identificaci&oacute;n de las relaciones entre clases; el emplazamiento de las clases, atributos y servicios; la especificaci&oacute;n del comportamiento din&aacute;mico mediante paso de mensajes.";
 choices[97][1] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: a&ntilde;adir las clases interfaz, base y utilidad; refinar las clases sem&aacute;nticas.";
 choices[97][2] = "En el An&aacute;lisis Orientado a Objetos, deben llevarse a cabo las siguientes actividades: toma inicial de requisitos; an&aacute;lisis; dise&ntilde;o; implementaci&oacute;n.";
 choices[97][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[97] = choices[97][1];
 units[97] = "89";
 comments[97] = "Id Pregunta: 10619. Junta de Extremadura A1 2015";


//  Id pregunta: 10244 AÃ±o de creación de pregunta: 2016
 questions[98]= "99)  La Constituci&oacute;n Espa&ntilde;ola, en el art&iacute;culo 9 del T&iacute;tulo Preliminar, garantiza el principio de:";
 choices[98]= new Array();
 choices[98][0] = "Retroactividad de las disposiciones sancionadoras no favorables de derechos individuales.";
 choices[98][1] = "Publicidad de las normas.";
 choices[98][2] = "Defensa jur&iacute;dica ante los tribunales.";
 choices[98][3] = "Coordinaci&oacute;n normativa.";
 answers[98] = choices[98][2];
 units[98] = "1";
 comments[98] = "Id Pregunta: 10244. CONSTITUCION1978";


//  Id pregunta: 10150 AÃ±o de creación de pregunta: 2016
 questions[99]= "100)  Seg&uacute;n la ley 39/2015, el medio elegido por la persona para comunicarse con las Administraciones P&uacute;blicas:";
 choices[99]= new Array();
 choices[99][0] = "&uacute;nicamente podr&aacute; ser modificado cuando de no hacerlo se corra riesgo de no alcanzarse las pretensiones del interesado ";
 choices[99][1] = "no podr&aacute; ser modificado con posterioridad al tr&aacute;mite de audiencia";
 choices[99][2] = "podr&aacute; ser modificado en cualquier momento por la persona";
 choices[99][3] = "no podr&aacute; ser modificado de manera unilateral por el interesado";
 answers[99] = choices[99][2];
 units[99] = "7";
 comments[99] = "Id Pregunta: 10150. Ley 39/2015, Art&iacute;culo 14";


