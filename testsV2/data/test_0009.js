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

//  Id pregunta: 146 Año de creación de pregunta: 2016
 questions[0]= "1)  La declaraci&oacute;n de lesividad de los actos anulables:";
 choices[0]= new Array();
 choices[0][0] = "No podr&aacute; adoptarse una vez transcurridos cuatro a&ntilde;os desde que se dict&oacute; el acto administrativo";
 choices[0][1] = "No es necesaria para impugnar ante el orden jurisdiccional contencioso-administrativo los actos favorables para los interesados";
 choices[0][2] = "Se adoptar&aacute; en todo caso por el Consejo de Estado";
 choices[0][3] = "Si el acto proviniera de las entidades que integran la Administraci&oacute;n Local, la declaraci&oacute;n de lesividad se adoptar&aacute; por la Comunidad Aut&oacute;noma a la que pertenece dicha entidad";
 answers[0] = choices[0][0];
 units[0] = "8";
 comments[0] = "Id Pregunta: 146. Ley 39/2015, Art&iacute;culo 107";


//  Id pregunta: 727 Año de creación de pregunta: 2016
 questions[1]= "2)  Sobre el Scrum Team, cual es la afirmaci&oacute;n falsa";
 choices[1]= new Array();
 choices[1][0] = "Cada miembro del equipo tiene que tener un rol especifico y no puede asumir tareas que no est&eacute;n dentro de su &aacute;rea de especializaci&oacute;n.";
 choices[1][1] = "Los miembros del equipo deben tener un perfil en &lsquo;T&rsquo;";
 choices[1][2] = "Cada miembro del equipo tiene que tener un conocimiento m&aacute;s amplio de un &aacute;rea";
 choices[1][3] = "Cada miembro del equipo puede asumir cualquier tipo de tarea.";
 answers[1] = choices[1][0];
 units[1] = "34, 84";
 comments[1] = "Id Pregunta: 727. Metodologias &aacute;giles";


//  Id pregunta: 455 Año de creación de pregunta: 2016
 questions[2]= "3)  En las Administraciones P&uacute;blicas...";
 choices[2]= new Array();
 choices[2][0] = "Existe un Presupuesto ordinario &uacute;nicamente";
 choices[2][1] = "Existen s&oacute;lo un presupuesto ordinario y un presupuesto extraordinario";
 choices[2][2] = "Existe un &uacute;nico presupuesto ordinario y uno o varios presupuestos extraordinarios";
 choices[2][3] = "Existen varios presupuestos que indistintamente pueden ser considerados ordinarios o extraordinarios";
 answers[2] = choices[2][0];
 units[2] = "10";
 comments[2] = "Id Pregunta: 455. PRESUPUESTOS GENERALES";


//  Id pregunta: 821 Año de creación de pregunta: 2016
 questions[3]= "4)  Los Delegados del Gobierno (se&ntilde;ala la incorrecta):";
 choices[3]= new Array();
 choices[3][0] = "representan al Gobierno de la Naci&oacute;n en el territorio de la respectiva Comunidad Aut&oacute;noma";
 choices[3][1] = "dirigir&aacute;n y supervisar&aacute;n la Administraci&oacute;n General del Estado en el territorio de las respectivas Comunidades Aut&oacute;nomas";
 choices[3][2] = "son &oacute;rganos directivos con rango de Director general";
 choices[3][3] = "ser&aacute;n nombrados y separados por Real Decreto del Consejo de Ministros, a propuesta del Presidente del Gobierno";
 answers[3] = choices[3][2];
 units[3] = "4, 7, 8, 9";
 comments[3] = "Id Pregunta: 821. Ley 40/2015";


//  Id pregunta: 594 Año de creación de pregunta: 2016
 questions[4]= "5)  Seg&uacute;n el Plan de Transformaci&oacute;n Digital de la AGE, &iquest;con qu&eacute; frecuencia de realizar&aacute;n nuevas declaraciones de servicios compartidos?";
 choices[4]= new Array();
 choices[4][0] = "Anualmente";
 choices[4][1] = "Bienalmente";
 choices[4][2] = "Cada cuatro a&ntilde;os";
 choices[4][3] = "No se define ninguna periodicidad";
 answers[4] = choices[4][1];
 units[4] = "19";
 comments[4] = "Id Pregunta: 594. Estrategia TIC. Se indica en la l&iacute;nea de acci&oacute;n 6";


//  Id pregunta: 825 Año de creación de pregunta: 2016
 questions[5]= "6)  Debe abstenerse el funcionario que tiene relaci&oacute;n de servicio con interesado en el asunto o le ha prestado servicios profesionales en los ...";
 choices[5]= new Array();
 choices[5][0] = "Tres &uacute;ltimos a&ntilde;os";
 choices[5][1] = "Cinco &uacute;ltimos a&ntilde;os";
 choices[5][2] = "Cuatro &uacute;ltimos a&ntilde;os";
 choices[5][3] = "Dos &uacute;ltimos a&ntilde;os";
 answers[5] = choices[5][1];
 units[5] = "4, 7, 8, 9";
 comments[5] = "Id Pregunta: 825. Ley 40/2015";


//  Id pregunta: 708 Año de creación de pregunta: 2016
 questions[6]= "7)  El Portal de Transparencia de la Administraci&oacute;n General del Estado depende del:";
 choices[6]= new Array();
 choices[6][0] = "Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[6][1] = "Ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[6][2] = "Ministerio de la Presidencia";
 choices[6][3] = "Ministerio de Fomento";
 answers[6] = choices[6][2];
 units[6] = "22";
 comments[6] = "Id Pregunta: 708. Portal de Transparencia";


//  Id pregunta: 739 Año de creación de pregunta: 2016
 questions[7]= "8)  En el Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE, las administraciones p&uacute;blicas y las instituciones p&uacute;blicas de la Uni&oacute;n Europea deben ser abiertas, eficaces e integradoras en el a&ntilde;o:";
 choices[7]= new Array();
 choices[7][0] = "2025";
 choices[7][1] = "2023";
 choices[7][2] = "2030";
 choices[7][3] = "2020";
 answers[7] = choices[7][3];
 units[7] = "28";
 comments[7] = "Id Pregunta: 739. Estrategia TIC";


//  Id pregunta: 132 Año de creación de pregunta: 2016
 questions[8]= "9)  Cu&aacute;l de las siguientes leyes no est&aacute; incluida en la reforma tributaria llevada a cabo en el a&ntilde;o 2014:";
 choices[8]= new Array();
 choices[8][0] = "Ley 26/2014, del Impuesto sobre la Renta de las Personas F&iacute;sicas";
 choices[8][1] = "Ley 27/2014, del Impuesto sobre Sociedades";
 choices[8][2] = "Ley 28/2014, de Impuestos Especiales";
 choices[8][3] = "Ley 29/2014, del Impuesto de Valor A&ntilde;adido";
 answers[8] = choices[8][3];
 units[8] = "12";
 comments[8] = "Id Pregunta: 132. Leyes modelo econ&oacute;mico";


//  Id pregunta: 530 Año de creación de pregunta: 2016
 questions[9]= "10)  Podr&aacute;n actuar en representaci&oacute;n de otras ante las Administraciones P&uacute;blicas:";
 choices[9]= new Array();
 choices[9][0] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[9][1] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[9][2] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 choices[9][3] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 answers[9] = choices[9][3];
 units[9] = "7";
 comments[9] = "Id Pregunta: 530. LEY 39/2015";


//  Id pregunta: 854 Año de creación de pregunta: 2016
 questions[10]= "11)  Si disponemos de 6 discos SAS de 1TB netos configurados en RAID5, &iquest;de qu&eacute; capacidad neta se dispone en RAID5 en el sistema de almacenamiento?";
 choices[10]= new Array();
 choices[10][0] = "6 TB.";
 choices[10][1] = "5 TB.";
 choices[10][2] = "7 TB.";
 choices[10][3] = "3 TB.";
 answers[10] = choices[10][1];
 units[10] = "53";
 comments[10] = "Id Pregunta: 854. Xunta de Galicia 2015";


//  Id pregunta: 55 Año de creación de pregunta: 2016
 questions[11]= "12)  WS-Security contiene especificaciones sobre:";
 choices[11]= new Array();
 choices[11][0] = "La publicaci&oacute;n, localizaci&oacute;n y enlazado de los Servicios Web.";
 choices[11][1] = "La forma de conseguir integridad y seguridad en los mensajes SOAP.";
 choices[11][2] = "Las pol&iacute;ticas en materia de seguridad aplicables a un sistema de informaci&oacute;n.";
 choices[11][3] = "El env&iacute;o de datagramas sin establecimiento previo de una conexi&oacute;n.";
 answers[11] = choices[11][1];
 units[11] = "119";
 comments[11] = "Id Pregunta: 55. AGE A1 2015";


//  Id pregunta: 524 Año de creación de pregunta: 2016
 questions[12]= "13)  A los efectos previstos en esta Ley, tendr&aacute;n capacidad de obrar ante las Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[12]= new Array();
 choices[12][0] = "las personas f&iacute;sicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 choices[12][1] = "los menores de edad para el ejercicio y defensa de aquellos de sus derechos e intereses cuya actuaci&oacute;n no est&eacute; permitida por el ordenamiento jur&iacute;dico sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[12][2] = "cuando la Ley as&iacute; lo declare expresamente, los grupos de afectados, las uniones y entidades sin personalidad jur&iacute;dica y los patrimonios independientes o aut&oacute;nomos";
 choices[12][3] = "las personas jur&iacute;dicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 answers[12] = choices[12][1];
 units[12] = "7";
 comments[12] = "Id Pregunta: 524. LEY 39/2015";


//  Id pregunta: 684 Año de creación de pregunta: 2016
 questions[13]= "14)  Indique cu&aacute;l es la Directiva europea que queda derogada por el Reglamento (UE) 910/2014";
 choices[13]= new Array();
 choices[13][0] = "Directiva 95/46/CE";
 choices[13][1] = "Directiva 1999/93/CE";
 choices[13][2] = "Directiva 2000/31/CE";
 choices[13][3] = "Directiva 2003/98/CE";
 answers[13] = choices[13][1];
 units[13] = "77";
 comments[13] = "Id Pregunta: 684. Art&iacute;culo 50 del Reglamento 910/2014";


//  Id pregunta: 412 Año de creación de pregunta: 2016
 questions[14]= "15)  &Aacute;mbito de aplicaci&oacute;n de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombre:";
 choices[14]= new Array();
 choices[14][0] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Europeo.";
 choices[14][1] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Espa&ntilde;ol.";
 choices[14][2] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Internacional.";
 choices[14][3] = "Ninguna de ellas se ajusta al &aacute;mbito de aplicaci&oacute;n.";
 answers[14] = choices[14][1];
 units[14] = "14";
 comments[14] = "Id Pregunta: 412. POLITICAS DE IGUALDAD";


//  Id pregunta: 508 Año de creación de pregunta: 2016
 questions[15]= "16)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, responde a la reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, (en adelante CE) e incorpora tres nuevos principios con respecto a la derogada Ley Org&aacute;nica 5/2001, de 13 de diciembre, complementaria a la Ley General de Estabilidad Presupuestaria ,Cu&aacute;les son?";
 choices[15]= new Array();
 choices[15][0] = "Estabilidad presupuestaria, plurianualidad, y responsabilidad.";
 choices[15][1] = "Sostenibilidad financiera, responsabilidad y transparencia.";
 choices[15][2] = "Plurianualidad, lealtad institucional y eficiencia en la asignaci&oacute;n de los recursos p&uacute;blicos";
 choices[15][3] = "Responsabilidad, sostenibilidad financiera y lealtad institucional.";
 answers[15] = choices[15][3];
 units[15] = "10";
 comments[15] = "Id Pregunta: 508. PRESUPUESTOS GENERALES";


//  Id pregunta: 198 Año de creación de pregunta: 2016
 questions[16]= "17)  La Constituci&oacute;n Espa&ntilde;ola de 1978, estructura las Cortes Generales en:";
 choices[16]= new Array();
 choices[16][0] = "Dos c&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[16][1] = "Consejo de Ministros y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[16][2] = "Gobierno de la Naci&oacute;n y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[16][3] = "Dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Baja) y Senado (C&aacute;mara Alta).";
 answers[16] = choices[16][3];
 units[16] = "1";
 comments[16] = "Id Pregunta: 198. CONSTITUCION1978";


//  Id pregunta: 500 Año de creación de pregunta: 2016
 questions[17]= "18)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la Deuda P&uacute;blica podr&aacute; estar representada en:";
 choices[17]= new Array();
 choices[17][0] = "En t&iacute;tulos-valores.";
 choices[17][1] = "Las respuestas a) y b) son correctas.";
 choices[17][2] = "Las respuestas a) y b) no son correctas.";
 choices[17][3] = "En cuenta.";
 answers[17] = choices[17][1];
 units[17] = "10";
 comments[17] = "Id Pregunta: 500. PRESUPUESTOS GENERALES";


//  Id pregunta: 713 Año de creación de pregunta: 2016
 questions[18]= "19)  En relaci&oacute;n al Portal de Transparencia de la AGE:";
 choices[18]= new Array();
 choices[18][0] = "La informaci&oacute;n m&aacute;s relevante para el ciudadano y de frecuente acceso estar&aacute; disponible en el Portal de Transparencia, no pudiendo accederse a informaci&oacute;n que no se encuentre ya publicada.";
 choices[18][1] = "El ejercicio del Derecho de Acceso abre con la administraci&oacute;n un procedimiento administrativo que exige la identificaci&oacute;n del solicitante.";
 choices[18][2] = "En el Portal de Transparencia de la AGE s&oacute;lo se puede acceder a informaci&oacute;n de tipo institucional.";
 choices[18][3] = "El CTBG es el responsable del Portal de Transparencia.";
 answers[18] = choices[18][1];
 units[18] = "22";
 comments[18] = "Id Pregunta: 713. Portal de Transparencia";


//  Id pregunta: 831 Año de creación de pregunta: 2016
 questions[19]= "20)  Si el recusado niega la causa de recusaci&oacute;n, el superior resolver&aacute; en el plazo de ...";
 choices[19]= new Array();
 choices[19][0] = "Un d&iacute;a";
 choices[19][1] = "Dos d&iacute;as";
 choices[19][2] = "Tres d&iacute;as";
 choices[19][3] = "Cuatro d&iacute;as";
 answers[19] = choices[19][3];
 units[19] = "4, 7, 8, 9";
 comments[19] = "Id Pregunta: 831. Ley 40/2015";


//  Id pregunta: 69 Año de creación de pregunta: 2016
 questions[20]= "21)  Los contratos que celebren los poderes adjudicadores se perfeccionan con su:";
 choices[20]= new Array();
 choices[20][0] = "Ejecuci&oacute;n";
 choices[20][1] = "Adjudicaci&oacute;n";
 choices[20][2] = "Licitaci&oacute;n";
 choices[20][3] = "Formalizaci&oacute;n";
 answers[20] = choices[20][3];
 units[20] = "37";
 comments[20] = "Id Pregunta: 69. AGE A1 2015";


//  Id pregunta: 20 Año de creación de pregunta: 2016
 questions[21]= "22)  Con respecto al &aacute;mbito objetivo de aplicaci&oacute;n de la Ley 37/2007, de 16 de noviembre, sobre reutilizaci&oacute;n de la informaci&oacute;n del sector p&uacute;blico:";
 choices[21]= new Array();
 choices[21][0] = "Abarca el intercambio de documentos entre Administraciones y organismos del sector p&uacute;blico en el ejercicio de las funciones p&uacute;blicas que tengan atribuidas.";
 choices[21][1] = "Ser&aacute; aplicable incluso sobre los documentos que obran en las Administraciones y organismos del sector p&uacute;blico para finalidades ajenas a sus funciones de servicio p&uacute;blico.";
 choices[21][2] = "No afecta a la existencia de derechos de propiedad intelectual de las Administraciones y organismos del sector p&uacute;blico ni a su posesi&oacute;n por &eacute;stos.";
 choices[21][3] = "Fija la prevalencia del derecho fundamental a la protecci&oacute;n de datos de car&aacute;cter personal, a&uacute;n cuando se apliquen medidas de disociaci&oacute;n de datos.";
 answers[21] = choices[21][2];
 units[21] = "27";
 comments[21] = "Id Pregunta: 20. AGE A1 2015";


//  Id pregunta: 388 Año de creación de pregunta: 2016
 questions[22]= "23)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[22]= new Array();
 choices[22][0] = "Indirecta.";
 choices[22][1] = "Directa.";
 choices[22][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[22][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[22] = choices[22][1];
 units[22] = "14";
 comments[22] = "Id Pregunta: 388. POLITICAS DE IGUALDAD";


//  Id pregunta: 2 Año de creación de pregunta: 2016
 questions[23]= "24)  La estrategia de comunicaci&oacute;n de un nuevo proyecto estrat&eacute;gico TIC NO debe:";
 choices[23]= new Array();
 choices[23][0] = "Posponerse a la puesta en producci&oacute;n del proyecto sin incidencias significativas.";
 choices[23][1] = "Presentar prototipos que muestren la evoluci&oacute;n del desarrollo ya realizado.";
 choices[23][2] = "Dise&ntilde;ar una campa&ntilde;a de difusi&oacute;n y promoci&oacute;n del proyecto.";
 choices[23][3] = "Asegurar la implicaci&oacute;n de representantes de todas las unidades afectadas.";
 answers[23] = choices[23][0];
 units[23] = "31";
 comments[23] = "Id Pregunta: 2. AGE A1 2015";


//  Id pregunta: 232 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos, de conformidad con la Constituci&oacute;n Espa&ntilde;ola, no tiene legitimidad para interponer el recurso de inconstitucionalidad?";
 choices[24]= new Array();
 choices[24][0] = "El Presidente del Senado.";
 choices[24][1] = "El Defensor del Pueblo.";
 choices[24][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[24][3] = "El Presidente del Gobierno.";
 answers[24] = choices[24][2];
 units[24] = "1";
 comments[24] = "Id Pregunta: 232. CONSTITUCION1978";


//  Id pregunta: 1 Año de creación de pregunta: 2016
 questions[25]= "26)  Los medios y servicios compartidos, establecidos en el Real Decreto 806/2014 dentro del modelo de gobernanza en el &aacute;mbito de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones de la Administraci&oacute;n General del Estado, son tales que:";
 choices[25]= new Array();
 choices[25][0] = "Su declaraci&oacute;n presupone que el servicio se encuentra en producci&oacute;n, listo para la adhesi&oacute;n de las diferentes unidades departamentales.";
 choices[25][1] = "Dado su car&aacute;cter obligatorio y sustitutivo, no se permite acordar excepciones por razones econ&oacute;micas, t&eacute;cnicas o de oportunidad sobrevenidas.";
 choices[25][2] = "Su declaraci&oacute;n establece la habilitaci&oacute;n para el desarrollo de las medidas t&eacute;cnicas, organizativas, presupuestarias y normativas.";
 choices[25][3] = "Su provisi&oacute;n se realiza directa y exclusivamente por medio de la Direcci&oacute;n General de Administraci&oacute;n Digital";
 answers[25] = choices[25][2];
 units[25] = "26";
 comments[25] = "Id Pregunta: 1. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 304 Año de creación de pregunta: 2016
 questions[26]= "27)  El mandato de la Comisi&oacute;n se establece por un per&iacute;odo de:";
 choices[26]= new Array();
 choices[26][0] = "Cinco a&ntilde;os.";
 choices[26][1] = "Seis a&ntilde;os.";
 choices[26][2] = "Cuatro a&ntilde;os.";
 choices[26][3] = "Tres a&ntilde;os.";
 answers[26] = choices[26][0];
 units[26] = "5";
 comments[26] = "Id Pregunta: 304. UNION EUROPEA";


//  Id pregunta: 425 Año de creación de pregunta: 2016
 questions[27]= "28)  Todos los tribunales y &oacute;rganos de selecci&oacute;n del personal de la Administraci&oacute;n General del Estado y los organismos p&uacute;blicos vinculados o dependientes de ella responder&aacute;n al principio:";
 choices[27]= new Array();
 choices[27][0] = "Presencia equilibrada.";
 choices[27][1] = "Presencia paritaria.";
 choices[27][2] = "Presencia consensuada.";
 choices[27][3] = "presencia horizontal.";
 answers[27] = choices[27][0];
 units[27] = "14";
 comments[27] = "Id Pregunta: 425. POLITICAS DE IGUALDAD";


//  Id pregunta: 788 Año de creación de pregunta: 2016
 questions[28]= "29)  En la organizaci&oacute;n central son &oacute;rganos superiores:";
 choices[28]= new Array();
 choices[28][0] = "los Subsecretarios y los Secretarios generales";
 choices[28][1] = "los Ministros y los Secretarios generales t&eacute;cnicos";
 choices[28][2] = "los Secretarios de Estado y los Directores generales";
 choices[28][3] = "los Ministros y los Secretarios de Estado";
 answers[28] = choices[28][3];
 units[28] = "4, 7, 8, 9";
 comments[28] = "Id Pregunta: 788. Ley 40/2015";


//  Id pregunta: 664 Año de creación de pregunta: 2016
 questions[29]= "30)  De acuerdo a la Ley 39/2015, los interesados en un procedimiento administrativo, tienen los siguientes derechos:";
 choices[29]= new Array();
 choices[29][0] = "Conocer el estado de la tramitaci&oacute;n de cualquier procedimiento.";
 choices[29][1] = "Identificar a las autoridades y al personal al servicio de las Administraciones P&uacute;blicas bajo cuya responsabilidad se tramiten los procedimientos.";
 choices[29][2] = "No presentar documentos originales, en ning&uacute;n caso.";
 choices[29][3] = "No presentar datos y documentos no exigidos por las normas aplicables al procedimiento de que se trate, que ya se encuentren en poder del Sector P&uacute;blico o que hayan sido elaborado por &eacute;ste.";
 answers[29] = choices[29][1];
 units[29] = "7";
 comments[29] = "Id Pregunta: 664. Art&iacute;culo 53 de la Ley 39/2015";


//  Id pregunta: 104 Año de creación de pregunta: 2016
 questions[30]= "31)  Son bases de datos NoSQL:";
 choices[30]= new Array();
 choices[30][0] = "MongoDB y Maria DB";
 choices[30][1] = "HBase y Dynamo";
 choices[30][2] = "MariaDB, Cassandra y BigTable";
 choices[30][3] = "La A) y la C)";
 answers[30] = choices[30][1];
 units[30] = "73";
 comments[30] = "Id Pregunta: 104. ";


//  Id pregunta: 171 Año de creación de pregunta: 2016
 questions[31]= "32)  Se&ntilde;ale la respuesta FALSA. Entre los objetivos de ISA2 se encuentra:";
 choices[31]= new Array();
 choices[31][0] = "desarrollar, mantener y promover un enfoque hol&iacute;stico hacia la interoperabilidad en la Uni&oacute;n para eliminar la fragmentaci&oacute;n en el panorama de la interoperabilidad en la Uni&oacute;n";
 choices[31][1] = "facilitar la reutilizaci&oacute;n de las soluciones de interoperabilidad por parte de las administraciones p&uacute;blicas europeas.";
 choices[31][2] = "identificar, crear y explotar soluciones de interoperabilidad que faciliten la ejecuci&oacute;n de las pol&iacute;ticas y actividades de la Uni&oacute;n";
 choices[31][3] = "eliminar la interacci&oacute;n electr&oacute;nica transfronteriza tanto entre las administraciones p&uacute;blicas europeas fomentando una cultura de ciberseguridad europea";
 answers[31] = choices[31][3];
 units[31] = "19";
 comments[31] = "Id Pregunta: 171. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Diciembre/Noticia-2015-12-09-Publicada-la-Decision-ISA2-continuidad-al-esfuerzo-asegurar-interoperabilidad-entre-AAPP-europeas.html#.WCnm1WrhDIU";


//  Id pregunta: 130 Año de creación de pregunta: 2016
 questions[32]= "33)  Dentro del Pacto Fiscal Europeo de 2012, cu&aacute;l de estos no corresponde a uno de los principales puntos contenidos:";
 choices[32]= new Array();
 choices[32][0] = "La obligaci&oacute;n de mantener el d&eacute;ficit p&uacute;blico por debajo del 3% del PIB.";
 choices[32][1] = "La obligaci&oacute;n de los pa&iacute;ses con una deuda p&uacute;blica superior al 60% del PIB a caer dentro de este l&iacute;mite en 20 a&ntilde;os, a una tasa igual a la vig&eacute;sima parte de la franquicia de cada anualidad.";
 choices[32][2] = "El compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional.";
 choices[32][3] = "El compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,5 % de la PIB y, en aquellos pa&iacute;ses en los que la deuda es inferior al 50 % del PIB, 2%.";
 answers[32] = choices[32][3];
 units[32] = "12";
 comments[32] = "Id Pregunta: 130. Leyes modelo econ&oacute;mico";


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


//  Id pregunta: 392 Año de creación de pregunta: 2016
 questions[34]= "35)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[34]= new Array();
 choices[34][0] = "Indirecta.";
 choices[34][1] = "Directa.";
 choices[34][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[34][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[34] = choices[34][1];
 units[34] = "14";
 comments[34] = "Id Pregunta: 392. POLITICAS DE IGUALDAD";


//  Id pregunta: 369 Año de creación de pregunta: 2016
 questions[35]= "36)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[35]= new Array();
 choices[35][0] = "Son actos individuales no normativos.";
 choices[35][1] = "Poseen alcance general.";
 choices[35][2] = "Son actos normativos.";
 choices[35][3] = "No son obligatorias.";
 answers[35] = choices[35][0];
 units[35] = "5";
 comments[35] = "Id Pregunta: 369. UNION EUROPEA";


//  Id pregunta: 552 Año de creación de pregunta: 2016
 questions[36]= "37)  Entre las funciones a desarrollar por la Comisi&oacute;n Sectorial de la administraci&oacute;n electr&oacute;nica NO se encuentra:";
 choices[36]= new Array();
 choices[36][0] = "Asegurar la compatibilidad e interoperabilidad de los sistemas y aplicaciones empleados por las Administraciones P&uacute;blicas.";
 choices[36][1] = "Impulsar el desarrollo de la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a.";
 choices[36][2] = "Asegurar la cooperaci&oacute;n entre las Administraciones P&uacute;blicas para proporcionar informaci&oacute;n administrativa clara, actualizada e inequ&iacute;voca.";
 choices[36][3] = "El seguimiento de la ejecuci&oacute;n del Plan de Transformaci&oacute;n Digital";
 answers[36] = choices[36][3];
 units[36] = "26";
 comments[36] = "Id Pregunta: 552. Gobernanza TIC";


//  Id pregunta: 183 Año de creación de pregunta: 2016
 questions[37]= "38)  Seg&uacute;n el Art&iacute;culo 113 de la Constituci&oacute;n Espa&ntilde;ola, la moci&oacute;n de censura deber&aacute; ser propuesta:";
 choices[37]= new Array();
 choices[37][0] = "al menos por 50 Diputados.";
 choices[37][1] = "al menos por la d&eacute;cima parte de los Diputados.";
 choices[37][2] = "por la Mesa del Congreso de los Diputados.";
 choices[37][3] = "al menos por dos grupos pol&iacute;ticos del Congreso de los Diputados.";
 answers[37] = choices[37][1];
 units[37] = "1";
 comments[37] = "Id Pregunta: 183. CONSTITUCION1978";


//  Id pregunta: 580 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Qui&eacute;n elabor&oacute; y aprob&oacute; la Estrategia TIC?.";
 choices[38]= new Array();
 choices[38][0] = "Fue elaborada y aprobada por la CETIC";
 choices[38][1] = "Fue elaborada por la CETIC y aprobada por el gobierno";
 choices[38][2] = "Fue elaborada por el gobierno y aprobada por la CETIC";
 choices[38][3] = "Fue elaborada por la CETIC y aprobada por el MAFP (Ministerio de Administraciones y Funci&oacute;n P&uacute;blica)";
 answers[38] = choices[38][1];
 units[38] = "19";
 comments[38] = "Id Pregunta: 580. Estrategia TIC";


//  Id pregunta: 257 Año de creación de pregunta: 2016
 questions[39]= "40)  El Art&iacute;culo 98 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Gobierno Espa&ntilde;ol se compone de:";
 choices[39]= new Array();
 choices[39][0] = "El Presidente y su gabinete.";
 choices[39][1] = "El Presidente y sus Ministros.";
 choices[39][2] = "El Rey y el Presidente.";
 choices[39][3] = "El Presidente, de los Vicepresidentes en su caso, de los Ministros y dem&aacute;s miembros que establezca la ley.";
 answers[39] = choices[39][2];
 units[39] = "1";
 comments[39] = "Id Pregunta: 257. CONSTITUCION1978";


//  Id pregunta: 427 Año de creación de pregunta: 2016
 questions[40]= "41)  En las bases de los concursos para la provisi&oacute;n de puestos de trabajo se computar&aacute;, a los efectos de valoraci&oacute;n del trabajo desarrollado y de los correspondientes m&eacute;ritos, el tiempo que las personas candidatas hayan permanecido:";
 choices[40]= new Array();
 choices[40][0] = "En r&eacute;gimen de excedencias, reducciones de jornada, permiso de maternidad o permiso de paternidad.";
 choices[40][1] = "En el extranjero.";
 choices[40][2] = "Ninguna es correcta.";
 choices[40][3] = "Ambas son correctas.";
 answers[40] = choices[40][0];
 units[40] = "14";
 comments[40] = "Id Pregunta: 427. POLITICAS DE IGUALDAD";


//  Id pregunta: 29 Año de creación de pregunta: 2016
 questions[41]= "42)  De acuerdo con el art&iacute;culo 62 de la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, se&ntilde;ale la respuesta correcta:";
 choices[41]= new Array();
 choices[41][0] = "El uso del dominio p&uacute;blico radioel&eacute;ctrico s&oacute;lo puede ser de dos tipos: especial o privativo.";
 choices[41][1] = "El uso com&uacute;n del dominio p&uacute;blico radioel&eacute;ctrico precisa de t&iacute;tulo habilitante.";
 choices[41][2] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico es el que se realiza mediante la explotaci&oacute;n en exclusiva, o por un n&uacute;mero limitado de usuarios, de determinadas frecuencias en un mismo &aacute;mbito f&iacute;sico de aplicaci&oacute;n.";
 choices[41][3] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico es el que se lleve a cabo de las bandas de frecuencias habilitadas para su explotaci&oacute;n de forma compartida, sin limitaci&oacute;n de n&uacute;mero de operadores o usuarios y con las condiciones t&eacute;cnicas y para los servicios que se establezcan en cada caso.";
 answers[41] = choices[41][2];
 units[41] = "121";
 comments[41] = "Id Pregunta: 29. AGE A1 2015";


//  Id pregunta: 509 Año de creación de pregunta: 2016
 questions[42]= "43)  De acuerdo con el art&iacute;culo 32 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, en el supuesto de que la liquidaci&oacute;n presupuestaria del Estado se sit&uacute;e en super&aacute;vit, &eacute;ste debe destinarse a:";
 choices[42]= new Array();
 choices[42][0] = "Reducir el gasto p&uacute;blico.";
 choices[42][1] = "Reducir el d&eacute;ficit presupuestario.";
 choices[42][2] = "Reducir el endeudamiento neto.";
 choices[42][3] = "Al Fondo de Contingencia.";
 answers[42] = choices[42][2];
 units[42] = "10";
 comments[42] = "Id Pregunta: 509. PRESUPUESTOS GENERALES";


//  Id pregunta: 233 Año de creación de pregunta: 2016
 questions[43]= "44)  Seg&uacute;n el Art&iacute;culo 75 de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras pueden delegar en las Comisiones Legislativas Permanentes:";
 choices[43]= new Array();
 choices[43][0] = "La aprobaci&oacute;n de proyectos o proposiciones de ley.";
 choices[43][1] = "La convalidaci&oacute;n de decretos-leyes.";
 choices[43][2] = "La aprobaci&oacute;n de proyectos de leyes de bases.";
 choices[43][3] = "La aprobaci&oacute;n de proyectos de leyes org&aacute;nicas.";
 answers[43] = choices[43][2];
 units[43] = "1";
 comments[43] = "Id Pregunta: 233. CONSTITUCION1978";


//  Id pregunta: 203 Año de creación de pregunta: 2016
 questions[44]= "45)  Se&ntilde;ale la afirmaci&oacute;n correcta. La tramitaci&oacute;n de las proposiciones de ley se regular&aacute; por:";
 choices[44]= new Array();
 choices[44][0] = "Ley Org&aacute;nica.";
 choices[44][1] = "Lo dispuesto en la normativa comunitaria.";
 choices[44][2] = "Los Reglamentos de las C&aacute;maras.";
 choices[44][3] = "El Reglamento del Congreso de los Diputados, exclusivamente.";
 answers[44] = choices[44][2];
 units[44] = "1";
 comments[44] = "Id Pregunta: 203. CONSTITUCION1978";


//  Id pregunta: 191 Año de creación de pregunta: 2016
 questions[45]= "46)  El Rey podr&aacute; presidir las sesiones del Consejo de Ministros:";
 choices[45]= new Array();
 choices[45][0] = "Cuando el Rey, por razones de inter&eacute;s general, as&iacute; lo decida.";
 choices[45][1] = "A petici&oacute;n del Pleno del Consejo de Ministros.";
 choices[45][2] = "A petici&oacute;n del Presidente del Gobierno.";
 choices[45][3] = "No est&aacute; prevista constitucionalmente la presidencia del Consejo de Ministros por parte del Rey.";
 answers[45] = choices[45][2];
 units[45] = "1";
 comments[45] = "Id Pregunta: 191. CONSTITUCION1978";


//  Id pregunta: 138 Año de creación de pregunta: 2016
 questions[46]= "47)  La ley que obliga a todas las Administraciones a presentar equilibrio estructural en sus cuentas p&uacute;blicas y establece un l&iacute;mite de deuda como garant&iacute;a de sostenibilidad presupuestaria, es:";
 choices[46]= new Array();
 choices[46][0] = "La Ley Org&aacute;nica 2/2011";
 choices[46][1] = "La Ley Org&aacute;nica 2/2012";
 choices[46][2] = "La Ley Org&aacute;nica 3/2012";
 choices[46][3] = "La Ley Org&aacute;nica 2/2002";
 answers[46] = choices[46][1];
 units[46] = "12";
 comments[46] = "Id Pregunta: 138. Leyes modelo econ&oacute;mico";


//  Id pregunta: 847 Año de creación de pregunta: 2016
 questions[47]= "48)  Se&ntilde;ale la respuesta falsa:";
 choices[47]= new Array();
 choices[47][0] = "Cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, especificando las condiciones, protocolos y criterios funcionales o t&eacute;cnicos necesarios para acceder a dichos datos con las m&aacute;ximas garant&iacute;as de seguridad, integridad y disponibilidad.";
 choices[47][1] = "La disponibilidad de tales datos estar&aacute; limitada estrictamente a aquellos que son requeridos a los interesados por las restantes Administraciones para la tramitaci&oacute;n y resoluci&oacute;n de los procedimientos y actuaciones de su competencia, de acuerdo con la normativa reguladora de los mismos.";
 choices[47][2] = "De conformidad con lo dispuesto en la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal y su normativa de desarrollo, cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, siendo preceptiva la firma del convenio correspondiente.";
 choices[47][3] = "La Administraci&oacute;n General del Estado, las Administraciones Auton&oacute;micas y las Entidades Locales, adoptar&aacute;n las medidas necesarias e incorporar&aacute;n en sus respectivos &aacute;mbitos las tecnolog&iacute;as precisas para posibilitar la interconexi&oacute;n de sus redes";
 answers[47] = choices[47][2];
 units[47] = "4, 7, 8, 9";
 comments[47] = "Id Pregunta: 847. Ley 40/2015";


//  Id pregunta: 235 Año de creación de pregunta: 2016
 questions[48]= "49)  El Art&iacute;culo 108 de la Constituci&oacute;n Espa&ntilde;ola establece que el Gobierno responde solidariamente de su gesti&oacute;n pol&iacute;tica ante:";
 choices[48]= new Array();
 choices[48][0] = "El Jefe del Estado.";
 choices[48][1] = "El Tribunal Constitucional.";
 choices[48][2] = "El Congreso de los Diputados.";
 choices[48][3] = "Las Cortes Generales.";
 answers[48] = choices[48][0];
 units[48] = "1";
 comments[48] = "Id Pregunta: 235. CONSTITUCION1978";


//  Id pregunta: 676 Año de creación de pregunta: 2016
 questions[49]= "50)  En referencia a la implantaci&oacute;n de la interoperabilidad de la receta electr&oacute;nica:";
 choices[49]= new Array();
 choices[49][0] = "Permite los ciudadanos retiren sus medicamentos en las farmacias de fuera de la Comunidad Aut&oacute;noma en la que hayan sido recetados.";
 choices[49][1] = "Favorece la seguridad del paciente, al incorporar sistemas online de ayuda a la prescripci&oacute;n, que ayudan a la detecci&oacute;n de interaciones medicamentosas o duplicidades terap&eacute;uticas.";
 choices[49][2] = "Facilita al m&eacute;dico el seguimiento de la adherencia al tratamiento por parte del paciente.";
 choices[49][3] = "Todas las anteriores son correctas.";
 answers[49] = choices[49][3];
 units[49] = "47";
 comments[49] = "Id Pregunta: 676. Receta electr&oacute;nica";


//  Id pregunta: 74 Año de creación de pregunta: 2016
 questions[50]= "51)  Se&ntilde;ale la opci&oacute;n incorrecta respecto a SMTP:";
 choices[50]= new Array();
 choices[50][0] = "SMTP es capaz de transportar correo a trav&eacute;s de m&uacute;ltiples redes: entre nodos conectados por TCP en Internet, entre nodos conectados en una Intranet TCP/IP aislados por un cortafuegos, o entre nodos en un entorno LAN o WAN que est&eacute;n usando un protocolo de nivel de transporte distinto a TCP.";
 choices[50][1] = "Usando SMTP, un proceso puede transferir correo a otro proceso en la misma red o a otra red mediante un proceso gateway accesible en las dos redes.";
 choices[50][2] = "En SMTP un mensaje de correo puede pasar por una serie de nodos gateway intermedios en su camino desde el emisor al receptor &uacute;ltimo, sirvi&eacute;ndose de mecanismos para decidir el siguiente salto como el sistema de resoluci&oacute;n de nombres de dominio de Internet.";
 choices[50][3] = "En SMTP la transferencia de mensaje ocurre siempre en una conexi&oacute;n &uacute;nica entre el emisor SMTP y el receptor final SMTP.";
 answers[50] = choices[50][3];
 units[50] = "106";
 comments[50] = "Id Pregunta: 74. AGE A1 2015";


//  Id pregunta: 414 Año de creación de pregunta: 2016
 questions[51]= "52)  Los proyectos de disposiciones de car&aacute;cter general y los planes de especial relevancia econ&oacute;mica, que sometan a la aprobaci&oacute;n del Consejo de Ministros, incorporar&aacute;n:";
 choices[51]= new Array();
 choices[51][0] = "Un informe de impacto de g&eacute;nero.";
 choices[51][1] = "Un programa de igualdad de oportunidades.";
 choices[51][2] = "Un plan de Igualdad de Oportunidades.";
 choices[51][3] = "Un Decreto de Igualdad de Oportunidades.";
 answers[51] = choices[51][0];
 units[51] = "14";
 comments[51] = "Id Pregunta: 414. POLITICAS DE IGUALDAD";


//  Id pregunta: 94 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es propia de Apache Hadoop?";
 choices[52]= new Array();
 choices[52][0] = "Es un framework de software libre.";
 choices[52][1] = "Es una base de datos NoSQL.";
 choices[52][2] = "Est&aacute; basado en MapReduce.";
 choices[52][3] = "Puede emplearse en sistemas de datos masivos (Big Data).";
 answers[52] = choices[52][1];
 units[52] = "73";
 comments[52] = "Id Pregunta: 94. AGE A1 2015";


//  Id pregunta: 593 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;Qui&eacute;n se encarga de revisar la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[53]= new Array();
 choices[53][0] = "La CETIC";
 choices[53][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[53][2] = "La DTIC";
 choices[53][3] = "El MHFP";
 answers[53] = choices[53][0];
 units[53] = "19";
 comments[53] = "Id Pregunta: 593. Estrategia TIC";


//  Id pregunta: 813 Año de creación de pregunta: 2016
 questions[54]= "55)  Las Delegaciones del Gobierno tendr&aacute;n su sede en:";
 choices[54]= new Array();
 choices[54][0] = "la localidad elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[54][1] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[54][2] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[54][3] = "la localidad donde elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 answers[54] = choices[54][2];
 units[54] = "4, 7, 8, 9";
 comments[54] = "Id Pregunta: 813. Ley 40/2015";


//  Id pregunta: 16 Año de creación de pregunta: 2016
 questions[55]= "56)  De acuerdo con la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos de comunicaciones electr&oacute;nicas y de redes p&uacute;blicas de comunicaci&oacute;n:";
 choices[55]= new Array();
 choices[55][0] = "Deben conservarse los datos que revelen el contenido de la comunicaci&oacute;n en virtud de lo establecido en la citada Ley.";
 choices[55][1] = "La obligaci&oacute;n de conservaci&oacute;n de datos cesa a los tres a&ntilde;os desde la fecha en que se haya producido la comunicaci&oacute;n.";
 choices[55][2] = "Los datos conservados de conformidad con lo dispuesto en la citada Ley pueden ser cedidos para los fines que en la misma se determinan previa autorizaci&oacute;n administrativa.";
 choices[55][3] = "Son sujetos obligados los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones.";
 answers[55] = choices[55][3];
 units[55] = "19";
 comments[55] = "Id Pregunta: 16. AGE A1 2015";


//  Id pregunta: 432 Año de creación de pregunta: 2016
 questions[56]= "57)  Las sociedades obligadas a presentar cuenta de p&eacute;rdidas y ganancias no abreviada, procurar&aacute;n incluir en su Consejo de Administraci&oacute;n un n&uacute;mero de mujeres que permita alcanzar la presencia equilibrada de mujeres y hombres en un plazo:";
 choices[56]= new Array();
 choices[56][0] = "De ocho a&ntilde;os.";
 choices[56][1] = "El d&iacute;a despu&eacute;s de la publicaci&oacute;n en el BOE de la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombre.";
 choices[56][2] = "Ambas son correctas.";
 choices[56][3] = "No existe un l&iacute;mite.";
 answers[56] = choices[56][0];
 units[56] = "14";
 comments[56] = "Id Pregunta: 432. POLITICAS DE IGUALDAD";


//  Id pregunta: 437 Año de creación de pregunta: 2016
 questions[57]= "58)  Los Portales de EE.LL. y CC.AA. ofrecen una herramienta de gesti&oacute;n de identidades de los empleados p&uacute;blicos de las entidades locales o auton&oacute;micas. Se&ntilde;ale la respuesta incorrecta.";
 choices[57]= new Array();
 choices[57][0] = "Los empleados p&uacute;blicos de las EE.LL. o CC.AA. tienen que solicitar el alta en alguna unidad local o auton&oacute;mica.";
 choices[57][1] = "Proporcionan tambi&eacute;n informaci&oacute;n del cargo y rol asociados.";
 choices[57][2] = "Cualquier organismo p&uacute;blico puede solicitar la inclusi&oacute;n en la plataforma de nuevas aplicaciones dirigidas a las EE.LL. o CC.AA.: &eacute;stas podr&aacute;n acceder desde un punto centralizado al nuevo servicio.";
 choices[57][3] = "Los portales est&aacute;n integrados y sincronizados con el Directorio Com&uacute;n de Unidades Org&aacute;nicas y Oficinas &#8208; DIR3, permitiendo que la gesti&oacute;n de usuarios y roles no se vea afectada por cambios en el directorio.";
 answers[57] = choices[57][0];
 units[57] = "43";
 comments[57] = "Id Pregunta: 437. SERVICIOS COMUNES";


//  Id pregunta: 633 Año de creación de pregunta: 2016
 questions[58]= "59)  La segmentaci&oacute;n es un esquema de asignaci&oacute;n de memoria que:";
 choices[58]= new Array();
 choices[58][0] = "Divide la memoria f&iacute;sica disponible en un n&uacute;mero fijo de particiones cuyo tama&ntilde;o tambi&eacute;n es fijo.";
 choices[58][1] = "Divide la memoria f&iacute;sica disponible en particiones cuyo n&uacute;mero y tama&ntilde;o var&iacute;a para adaptarse a las exigencias los procesos.";
 choices[58][2] = "Divide el espacio de direcciones de cada proceso en bloques que puedan ser situados en &aacute;reas de memoria no contiguas.";
 choices[58][3] = "Divide la memoria en dos particiones: una para el sistema operativo y otra para el proceso que se encuentra en ejecuci&oacute;n.";
 answers[58] = choices[58][2];
 units[58] = "50";
 comments[58] = "Id Pregunta: 633. Junta de Extremadura A1 2015";


//  Id pregunta: 210 Año de creación de pregunta: 2016
 questions[59]= "60)  De acuerdo con la Constituci&oacute;n espa&ntilde;ola, la declaraci&oacute;n del estado de excepci&oacute;n corresponde a:";
 choices[59]= new Array();
 choices[59][0] = "El rey, a propuesta del Gobierno.";
 choices[59][1] = "El Gobierno, mediante Decreto acordado en Consejo de Ministros, previa autorizaci&oacute;n del Congreso de los Diputados.";
 choices[59][2] = "El Congreso de los Diputados, a propuesta del Consejo de Ministros.";
 choices[59][3] = "Las Cortes Generales, por mayor&iacute;a de los miembros de cada C&aacute;mara.";
 answers[59] = choices[59][1];
 units[59] = "1";
 comments[59] = "Id Pregunta: 210. CONSTITUCION1978";


//  Id pregunta: 511 Año de creación de pregunta: 2016
 questions[60]= "61)  A tenor de lo dispuesto en el art&iacute;culo 14 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, el pago de los intereses y el capital de la deuda p&uacute;blica de las Administraciones P&uacute;blicas gozar&aacute; de prioridad:";
 choices[60]= new Array();
 choices[60][0] = "Sobre otros gastos siempre que no superen el 80% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[60][1] = "Sobre otros gastos siempre que no superen el 70% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[60][2] = "Absoluta frente a cualquier otro gasto.";
 choices[60][3] = "Sobre otros gastos siempre que no superen el 60% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea";
 answers[60] = choices[60][2];
 units[60] = "10";
 comments[60] = "Id Pregunta: 511. PRESUPUESTOS GENERALES";


//  Id pregunta: 131 Año de creación de pregunta: 2016
 questions[61]= "62)  En qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola se incluy&oacute; la reforma conocida como la 'regla de oro presupuestaria' en el a&ntilde;o 2011:";
 choices[61]= new Array();
 choices[61][0] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[61][1] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda privada.";
 choices[61][2] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[61][3] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los gastos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 answers[61] = choices[61][0];
 units[61] = "12";
 comments[61] = "Id Pregunta: 131. Leyes modelo econ&oacute;mico";


//  Id pregunta: 101 Año de creación de pregunta: 2016
 questions[62]= "63)  El Teorema de Brewer o Principio CAP recoge las siguientes garant&iacute;as:";
 choices[62]= new Array();
 choices[62][0] = "Consistencia (Consistency), Disponibilidad (Availability) y Persistencia (Persistence)";
 choices[62][1] = "Consistencia (Consistency), Disponibilidad (Availability) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[62][2] = "Consistencia (Consistency), Atomicidad (Atomicity) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[62][3] = "Confidencialidad (Confidentiality), Autenticidad (Authentication) y Protecci&oacute;n (Protection)";
 answers[62] = choices[62][1];
 units[62] = "73";
 comments[62] = "Id Pregunta: 101. ";


//  Id pregunta: 519 Año de creación de pregunta: 2016
 questions[63]= "64)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas: (se&ntilde;ala la incorrecta)";
 choices[63]= new Array();
 choices[63][0] = "la Administraci&oacute;n General del Estado";
 choices[63][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[63][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[63][3] = "los organismos p&uacute;blicos y entidades de derecho privado que integran el sector p&uacute;blico institucional";
 answers[63] = choices[63][3];
 units[63] = "7";
 comments[63] = "Id Pregunta: 519. LEY 39/2015";


//  Id pregunta: 177 Año de creación de pregunta: 2016
 questions[64]= "65)  El art&iacute;culo 152 de la Constituci&oacute;n espa&ntilde;ola se refiere a la organizaci&oacute;n instituicional b&aacute;sica de cada Comunidad Aut&oacute;noma, la cual se basar&aacute; en:";
 choices[64]= new Array();
 choices[64][0] = "Una Conseller&iacute;a legislativa, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[64][1] = "Una Asamble legislativa, un Presidente, un Delegado de Gobierno y un Comit&eacute; Superior del Poder Judicial.";
 choices[64][2] = "Una Asamble legislativa, un Consejo de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[64][3] = "Un Consejo legislativo, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Supremo.";
 answers[64] = choices[64][2];
 units[64] = "1";
 comments[64] = "Id Pregunta: 177. CONSTITUCION1978";


//  Id pregunta: 625 Año de creación de pregunta: 2016
 questions[65]= "66)  En PHP 5.0, &iquest;cu&aacute;l es la regla para formar los nombres de las variables?";
 choices[65]= new Array();
 choices[65][0] = "Una variable debe comenzar con el signo $ seguido del nombre de la variable.";
 choices[65][1] = "Una variable debe comenzar con el signo &amp; seguido del nombre de la variable.";
 choices[65][2] = "Una variable debe comenzar por un car&aacute;cter num&eacute;rico.";
 choices[65][3] = "No hay regla para la formaci&oacute;n de los nombres de las variables.";
 answers[65] = choices[65][0];
 units[65] = "65";
 comments[65] = "Id Pregunta: 625. Junta de Extremadura A1 2015";


//  Id pregunta: 387 Año de creación de pregunta: 2016
 questions[66]= "67)  El art&iacute;culo 37 de la Ley Org&aacute;nica 3/2007, para la igualdad efectiva de mujeres y hombres, indica que la Corporaci&oacute;n RTVE, en el ejercicio de su funci&oacute;n, perseguir&aacute; en su programaci&oacute;n:";
 choices[66]= new Array();
 choices[66][0] = "Mostrar anuncios para la igualdad de forma habitual.";
 choices[66][1] = "Ofrecer trabajo a mujeres v&iacute;ctimas de violencia de g&eacute;nero.";
 choices[66][2] = "Promover la incorporaci&oacute;n de mujeres a puestos visibles ante las c&aacute;maras.";
 choices[66][3] = "Reflejar adecuadamente la presencia de las mujeres en los diversos &aacute;mbitos de la vida social.";
 answers[66] = choices[66][3];
 units[66] = "14";
 comments[66] = "Id Pregunta: 387. POLITICAS DE IGUALDAD";


//  Id pregunta: 378 Año de creación de pregunta: 2016
 questions[67]= "68)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[67]= new Array();
 choices[67][0] = "Quince miembros.";
 choices[67][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[67][2] = "Los miembros que determine el Consejo.";
 choices[67][3] = "Un Presidente y quince miembros.";
 answers[67] = choices[67][1];
 units[67] = "14";
 comments[67] = "Id Pregunta: 378. UNION EUROPEA";


//  Id pregunta: 349 Año de creación de pregunta: 2016
 questions[68]= "69)  El Tratado de Par&iacute;s que crea la Comunidad Europea del Carb&oacute;n y del Acero entr&oacute; en vigor:";
 choices[68]= new Array();
 choices[68][0] = "El 23 de julio de 1952.";
 choices[68][1] = "El 18 de abril de 1951.";
 choices[68][2] = "El 16 de abril de 1948.";
 choices[68][3] = "d)Ninguna de las respuestas son correctas.";
 answers[68] = choices[68][0];
 units[68] = "5";
 comments[68] = "Id Pregunta: 349. UNION EUROPEA";


//  Id pregunta: 810 Año de creación de pregunta: 2016
 questions[69]= "70)  Ostentan la representaci&oacute;n ordinaria del Ministerio:";
 choices[69]= new Array();
 choices[69][0] = "los Secretarios de Estado";
 choices[69][1] = "los Ministros";
 choices[69][2] = "los Subsecretarios";
 choices[69][3] = "los Secretarios generales";
 answers[69] = choices[69][2];
 units[69] = "4, 7, 8, 9";
 comments[69] = "Id Pregunta: 810. Ley 40/2015";


//  Id pregunta: 35 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Qu&eacute; es Java Web Start?";
 choices[70]= new Array();
 choices[70][0] = "Un motor para la ejecuci&oacute;n de Java Serlvets y JavaServer Pages.";
 choices[70][1] = "Una interfaz de programaci&oacute;n para entornos de ventanas en Java.";
 choices[70][2] = "Una tecnolog&iacute;a de compiladores empleada por Java.";
 choices[70][3] = "Una tecnolog&iacute;a que permite descargar y ejecutar aplicaciones Java.";
 answers[70] = choices[70][3];
 units[70] = "64";
 comments[70] = "Id Pregunta: 35. AGE A1 2015";


//  Id pregunta: 28 Año de creación de pregunta: 2016
 questions[71]= "72)  En UNIX, la llamada &ldquo;FORK&rdquo;:";
 choices[71]= new Array();
 choices[71][0] = "Controla el tiempo de ejecuci&oacute;n de un proceso.";
 choices[71][1] = "Env&iacute;a una se&ntilde;al al proceso especificado.";
 choices[71][2] = "Crea una copia del proceso que hace la llamada.";
 choices[71][3] = "Elimina el mapa de memoria del proceso que hace la llamada.";
 answers[71] = choices[71][2];
 units[71] = "57";
 comments[71] = "Id Pregunta: 28. AGE A1 2015";


//  Id pregunta: 202 Año de creación de pregunta: 2016
 questions[72]= "73)  Se&ntilde;ale c&oacute;mo se re&uacute;nen los miembros del Gobierno:";
 choices[72]= new Array();
 choices[72][0] = "En Consejo de Ministros y en Comisiones Delegadas del Gobierno.";
 choices[72][1] = "En Consejo de Ministros y en Consejo de Vicepresidentes.";
 choices[72][2] = "En Consejo de Ministros y en Comisiones Delegadas de las Cortes Generales.";
 choices[72][3] = "En Comisiones Delegadas del Gobierno y Consejo de Estado.";
 answers[72] = choices[72][0];
 units[72] = "1";
 comments[72] = "Id Pregunta: 202. CONSTITUCION1978";


//  Id pregunta: 444 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes definiciones NO es uno de los roles de la Plataforma de Intermediaci&oacute;n, seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Protocolos de intermediaci&oacute;n de datos?:";
 choices[73]= new Array();
 choices[73][0] = "Mantendr&aacute; un portal web informativo con toda la documentaci&oacute;n relativa a la Plataforma.";
 choices[73][1] = "Almacenar&aacute; informaci&oacute;n personal de ciudadano derivada de la transacci&oacute;n de intercambio de datos, asegurando para ello la confidencialidad e integridad de la misma a trav&eacute;s de los mecanismos correspondientes.";
 choices[73][2] = "Mantendr&aacute; un centro de atenci&oacute;n a usuarios e integradores que canalice todas las incidencias relativas al sistema.";
 choices[73][3] = "Las consultas a los servicios de verificaci&oacute;n de datos, se pueden realizar de forma automatizada desde una aplicaci&oacute;n de gesti&oacute;n de un tr&aacute;mite, adaptadas para invocar los Webservice proporcionados por el servicio.";
 answers[73] = choices[73][1];
 units[73] = "43";
 comments[73] = "Id Pregunta: 444. SERVICIOS COMUNES";


//  Id pregunta: 62 Año de creación de pregunta: 2016
 questions[74]= "75)  El art&iacute;culo 102 del Real Decreto 1720/2007, por el que se determina la conservaci&oacute;n de una copia de respaldo de los datos y de los procedimientos de recuperaci&oacute;n de los mismos en un lugar diferente de aquel en que se encuentren los equipos inform&aacute;ticos que los tratan, &iquest;a qu&eacute; nivel o niveles de medidas de seguridad es aplicable?";
 choices[74]= new Array();
 choices[74][0] = "B&aacute;sico";
 choices[74][1] = "Medio";
 choices[74][2] = "Alto";
 choices[74][3] = "A los niveles medio y alto";
 answers[74] = choices[74][2];
 units[74] = "35";
 comments[74] = "Id Pregunta: 62. AGE A1 2015";


