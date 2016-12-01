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

//  Id pregunta: 803 Año de creación de pregunta: 2016
 questions[0]= "1)  La organizaci&oacute;n en Departamentos ministeriales no obsta a la existencia de:";
 choices[0]= new Array();
 choices[0][0] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[0][1] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 choices[0][2] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[0][3] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 answers[0] = choices[0][3];
 units[0] = "4, 7, 8, 9";
 comments[0] = "Id Pregunta: 803. Ley 40/2015";
 preguntaids[0] = 803


//  Id pregunta: 157 Año de creación de pregunta: 2016
 questions[1]= "2)  Seg&uacute;n la ley 39/2015, los actos administrativos ser&aacute;n objeto de publicaci&oacute;n cuando (se&ntilde;ala la incorrecta):";
 choices[1]= new Array();
 choices[1][0] = "la Administraci&oacute;n estime que la notificaci&oacute;n efectuada a un solo interesado es insuficiente para garantizar la notificaci&oacute;n a todos, no siendo necesaria la notificaci&oacute;n individualizada en este caso";
 choices[1][1] = "se trate de actos integrantes de un procedimiento selectivo o de concurrencia competitiva de cualquier tipo";
 choices[1][2] = "el acto tenga por destinatario a una pluralidad indeterminada de personas";
 choices[1][3] = "as&iacute; lo establezcan las normas reguladoras de cada procedimiento o lo aconsejen razones de inter&eacute;s p&uacute;blico apreciadas por el &oacute;rgano competente";
 answers[1] = choices[1][0];
 units[1] = "7";
 comments[1] = "Id Pregunta: 157. Ley 39/2015, Art&iacute;culo 45";
 preguntaids[1] = 157


//  Id pregunta: 499 Año de creación de pregunta: 2016
 questions[2]= "3)  Las Obligaciones de la Hacienda P&uacute;blica Estatal se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[2]= new Array();
 choices[2][0] = "T&iacute;tulo II, Cap&iacute;tulo I, Secci&oacute;n 1.";
 choices[2][1] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[2][2] = "T&iacute;tulo I, Cap&iacute;tulo I, Secci&oacute;n 4.";
 choices[2][3] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[2] = choices[2][3];
 units[2] = "10";
 comments[2] = "Id Pregunta: 499. PRESUPUESTOS GENERALES";
 preguntaids[2] = 499


//  Id pregunta: 820 Año de creación de pregunta: 2016
 questions[3]= "4)  Respecto a los servicios territoriales es correcto:";
 choices[3]= new Array();
 choices[3][0] = "la organizaci&oacute;n de los servicios territoriales no integrados en las Delegaciones del Gobierno se establecer&aacute; mediante Real Decreto";
 choices[3][1] = "los servicios territoriales no integrados depender&aacute;n del Delegado del Gobierno, o en su caso Subdelegado del Gobierno, a trav&eacute;s de la Secretar&iacute;a General";
 choices[3][2] = "los servicios territoriales integrados depender&aacute;n del &oacute;rgano central competente sobre el sector de actividad en el que aqu&eacute;llos operen";
 choices[3][3] = "ninguna es correcta";
 answers[3] = choices[3][0];
 units[3] = "4, 7, 8, 9";
 comments[3] = "Id Pregunta: 820. Ley 40/2015";
 preguntaids[3] = 820


//  Id pregunta: 501 Año de creación de pregunta: 2016
 questions[4]= "5)  A tenor de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la cuant&iacute;a global de los anticipos de caja fija no podr&aacute; superar para cada ministerio y organismo aut&oacute;nomo:";
 choices[4]= new Array();
 choices[4][0] = "El 7% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[4][1] = "El 5% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[4][2] = "El 6% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[4][3] = "El 8% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 answers[4] = choices[4][0];
 units[4] = "10";
 comments[4] = "Id Pregunta: 501. PRESUPUESTOS GENERALES";
 preguntaids[4] = 501


//  Id pregunta: 538 Año de creación de pregunta: 2016
 questions[5]= "6)  En el registro electr&oacute;nico general de apoderamientos, deber&aacute;n inscribirse, al menos, los de car&aacute;cter general otorgados por quien ostente la condici&oacute;n de interesado en un procedimiento administrativo a favor de representante:";
 choices[5]= new Array();
 choices[5][0] = "apud acta";
 choices[5][1] = "presencialmente";
 choices[5][2] = "electr&oacute;nicamente";
 choices[5][3] = "todas son correctas";
 answers[5] = choices[5][3];
 units[5] = "7";
 comments[5] = "Id Pregunta: 538. LEY 39/2015";
 preguntaids[5] = 538


//  Id pregunta: 791 Año de creación de pregunta: 2016
 questions[6]= "7)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Delegados del Gobierno en las Comunidades Aut&oacute;nomas tendr&aacute;n rango de:";
 choices[6]= new Array();
 choices[6][0] = "Subsecretario";
 choices[6][1] = "Subdirector general";
 choices[6][2] = "Secretario de Estado";
 choices[6][3] = "ninguna es correcta";
 answers[6] = choices[6][0];
 units[6] = "4, 7, 8, 9";
 comments[6] = "Id Pregunta: 791. Ley 40/2015";
 preguntaids[6] = 791


//  Id pregunta: 498 Año de creación de pregunta: 2016
 questions[7]= "8)  A los efectos de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , forman parte del sector p&uacute;blico estatal:";
 choices[7]= new Array();
 choices[7][0] = "Las respuestas a) y b) son correctas.";
 choices[7][1] = "Los organismos aut&oacute;nomos dependientes de la Administraci&oacute;n General del Estado.";
 choices[7][2] = "Las entidades p&uacute;blicas empresariales, dependientes de la Administraci&oacute;n General del Estado, o de cualesquiera otros organismos p&uacute;blicos vinculados o dependientes de ella.";
 choices[7][3] = "Las respuestas a) y b) no son correctas.";
 answers[7] = choices[7][0];
 units[7] = "10";
 comments[7] = "Id Pregunta: 498. PRESUPUESTOS GENERALES";
 preguntaids[7] = 498


//  Id pregunta: 786 Año de creación de pregunta: 2016
 questions[8]= "9)  Salvo las excepciones previstas por esta Ley, la organizaci&oacute;n de la Administraci&oacute;n General del Estado responde a los principios de:";
 choices[8]= new Array();
 choices[8][0] = "divisi&oacute;n funcional en Departamentos ministeriales y de gesti&oacute;n territorial integrada en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[8][1] = "gesti&oacute;n territorial integrada en Departamentos ministeriales y de divisi&oacute;n funcional en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[8][2] = "divisi&oacute;n funcional en Delegaciones del Gobierno y de gesti&oacute;n territorial integrada en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 choices[8][3] = "gesti&oacute;n territorial integrada en Delegaciones del Gobierno y de divisi&oacute;n funcional en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 answers[8] = choices[8][0];
 units[8] = "4, 7, 8, 9";
 comments[8] = "Id Pregunta: 786. Ley 40/2015";
 preguntaids[8] = 786


//  Id pregunta: 490 Año de creación de pregunta: 2016
 questions[9]= "10)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, autorizar las transferencias entre distintas secciones presupuestarias como consecuencia de reorganizaciones administrativas, es una competencia de:";
 choices[9]= new Array();
 choices[9][0] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[9][1] = "El Gobierno.";
 choices[9][2] = "El Presidente del Gobierno.";
 choices[9][3] = "El Consejo de Ministros.";
 answers[9] = choices[9][1];
 units[9] = "10";
 comments[9] = "Id Pregunta: 490. PRESUPUESTOS GENERALES";
 preguntaids[9] = 490


//  Id pregunta: 777 Año de creación de pregunta: 2016
 questions[10]= "11)  Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos:";
 choices[10]= new Array();
 choices[10][0] = "las unidades administrativas a las que se les atribuyan funciones que no tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo";
 choices[10][1] = "las unidades administrativas a las que se les atribuyan funciones que no tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo";
 choices[10][2] = "las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo";
 choices[10][3] = "las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo";
 answers[10] = choices[10][3];
 units[10] = "4, 7, 8, 9";
 comments[10] = "Id Pregunta: 777. Ley 40/2015";
 preguntaids[10] = 777


//  Id pregunta: 822 Año de creación de pregunta: 2016
 questions[11]= "12)  En las Comunidades Aut&oacute;nomas, en caso de ausencia, vacante o enfermedad del titular de la Delegaci&oacute;n del Gobierno, ser&aacute; suplido por:";
 choices[11]= new Array();
 choices[11][0] = "el Subdelegado del Gobierno que el Delegado designe y, en su defecto, al de la provincia en que tenga su sede";
 choices[11][1] = "el Subdelegado del Gobierno de la provincia en que tenga su sede y, en su defecto, al que el Delegado designe";
 choices[11][2] = "el Subdirector General que el Delegado designe";
 choices[11][3] = "el Secretario de Estado";
 answers[11] = choices[11][0];
 units[11] = "4, 7, 8, 9";
 comments[11] = "Id Pregunta: 822. Ley 40/2015";
 preguntaids[11] = 822


//  Id pregunta: 815 Año de creación de pregunta: 2016
 questions[12]= "13)  Existir&aacute; un Subdelegado del Gobierno, que estar&aacute; bajo la inmediata dependencia del Delegado del Gobierno:";
 choices[12]= new Array();
 choices[12][0] = "en cada Comunidad Aut&oacute;noma";
 choices[12][1] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas pluriprovinciales";
 choices[12][2] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas uniprovinciales";
 choices[12][3] = "en cada una de las localidades de las Comunidades Aut&oacute;nomas";
 answers[12] = choices[12][1];
 units[12] = "4, 7, 8, 9";
 comments[12] = "Id Pregunta: 815. Ley 40/2015";
 preguntaids[12] = 815


//  Id pregunta: 790 Año de creación de pregunta: 2016
 questions[13]= "14)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado son &oacute;rganos directivos:";
 choices[13]= new Array();
 choices[13][0] = "los Delegados del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[13][1] = "los Subdelegados del Gobierno en las provincias";
 choices[13][2] = "los Subdelegados del Gobierno en las entidades locales";
 choices[13][3] = "a y b son correctas";
 answers[13] = choices[13][3];
 units[13] = "4, 7, 8, 9";
 comments[13] = "Id Pregunta: 790. Ley 40/2015";
 preguntaids[13] = 790


//  Id pregunta: 453 Año de creación de pregunta: 2016
 questions[14]= "15)  En los Presupuestos, &iquest;qu&eacute; es lo que se prev&eacute; liquidar?";
 choices[14]= new Array();
 choices[14][0] = "Los cr&eacute;ditos";
 choices[14][1] = "Las partidas presupuestarias";
 choices[14][2] = "Los derechos";
 choices[14][3] = "Las obligaciones";
 answers[14] = choices[14][2];
 units[14] = "10";
 comments[14] = "Id Pregunta: 453. PRESUPUESTOS GENERALES";
 preguntaids[14] = 453


//  Id pregunta: 448 Año de creación de pregunta: 2016
 questions[15]= "16)  Dentro de la l&oacute;gica presupuestaria, los ingresos tienen car&aacute;cter...";
 choices[15]= new Array();
 choices[15][0] = "Ejecutivo";
 choices[15][1] = "Limitativo";
 choices[15][2] = "Estimativo";
 choices[15][3] = "Progresivo";
 answers[15] = choices[15][2];
 units[15] = "10";
 comments[15] = "Id Pregunta: 448. PRESUPUESTOS GENERALES";
 preguntaids[15] = 448


//  Id pregunta: 774 Año de creación de pregunta: 2016
 questions[16]= "17)  Las Administraciones P&uacute;blicas act&uacute;an para el cumplimiento de sus fines con:";
 choices[16]= new Array();
 choices[16][0] = "personalidad jur&iacute;dica propia";
 choices[16][1] = "personalidad jur&iacute;dica &uacute;nica";
 choices[16][2] = "personalidad jur&iacute;dica plena";
 choices[16][3] = "personalidad jur&iacute;dica f&iacute;sica";
 answers[16] = choices[16][1];
 units[16] = "4, 7, 8, 9";
 comments[16] = "Id Pregunta: 774. Ley 40/2015";
 preguntaids[16] = 774


//  Id pregunta: 454 Año de creación de pregunta: 2016
 questions[17]= "18)  En t&eacute;rminos familiares, podemos decir que desembocan en gastos...";
 choices[17]= new Array();
 choices[17][0] = "Los cr&eacute;ditos";
 choices[17][1] = "Las partidas presupuestarias";
 choices[17][2] = "Los derechos";
 choices[17][3] = "Las obligaciones";
 answers[17] = choices[17][3];
 units[17] = "10";
 comments[17] = "Id Pregunta: 454. PRESUPUESTOS GENERALES";
 preguntaids[17] = 454


//  Id pregunta: 524 Año de creación de pregunta: 2016
 questions[18]= "19)  A los efectos previstos en esta Ley, tendr&aacute;n capacidad de obrar ante las Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[18]= new Array();
 choices[18][0] = "las personas f&iacute;sicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 choices[18][1] = "los menores de edad para el ejercicio y defensa de aquellos de sus derechos e intereses cuya actuaci&oacute;n no est&eacute; permitida por el ordenamiento jur&iacute;dico sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[18][2] = "cuando la Ley as&iacute; lo declare expresamente, los grupos de afectados, las uniones y entidades sin personalidad jur&iacute;dica y los patrimonios independientes o aut&oacute;nomos";
 choices[18][3] = "las personas jur&iacute;dicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 answers[18] = choices[18][1];
 units[18] = "7";
 comments[18] = "Id Pregunta: 524. LEY 39/2015";
 preguntaids[18] = 524


//  Id pregunta: 823 Año de creación de pregunta: 2016
 questions[19]= "20)  En las Comunidades Aut&oacute;nomas uniprovinciales en las que no exista Subdelegado la suplencia corresponder&aacute; a:";
 choices[19]= new Array();
 choices[19][0] = "el Secretario General";
 choices[19][1] = "el Subdirector General";
 choices[19][2] = "el Secretario de Estado";
 choices[19][3] = "ninguna es correcta";
 answers[19] = choices[19][0];
 units[19] = "4, 7, 8, 9";
 comments[19] = "Id Pregunta: 823. Ley 40/2015";
 preguntaids[19] = 823


//  Id pregunta: 779 Año de creación de pregunta: 2016
 questions[20]= "21)  La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de (se&ntilde;ala la incorrecta):";
 choices[20]= new Array();
 choices[20][0] = "denominaci&oacute;n y establecimiento de sus recursos humanos necesarios";
 choices[20][1] = "determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia jer&aacute;rquica";
 choices[20][2] = "delimitaci&oacute;n de sus funciones y competencias";
 choices[20][3] = "dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento";
 answers[20] = choices[20][0];
 units[20] = "4, 7, 8, 9";
 comments[20] = "Id Pregunta: 779. Ley 40/2015";
 preguntaids[20] = 779


//  Id pregunta: 541 Año de creación de pregunta: 2016
 questions[21]= "22)  Los asientos que se realicen en los registros electr&oacute;nicos generales y particulares de apoderamientos deber&aacute;n contener, al menos: (se&ntilde;ala la incorrecta)";
 choices[21]= new Array();
 choices[21][0] = "nombre y apellidos o la denominaci&oacute;n o raz&oacute;n social, documento nacional de identidad, n&uacute;mero de identificaci&oacute;n fiscal o documento equivalente del poderdante y del apoderado";
 choices[21][1] = "causas de anulaci&oacute;n del apoderamiento";
 choices[21][2] = "per&iacute;odo de tiempo por el cual se otorga el poder";
 choices[21][3] = "tipo de poder seg&uacute;n las facultades que otorgue";
 answers[21] = choices[21][1];
 units[21] = "7";
 comments[21] = "Id Pregunta: 541. LEY 39/2015";
 preguntaids[21] = 541


//  Id pregunta: 782 Año de creación de pregunta: 2016
 questions[22]= "23)  Sin perjuicio de la responsabilidad disciplinaria en que se pueda incurrir, el incumplimiento de las instrucciones u &oacute;rdenes de servicio:";
 choices[22]= new Array();
 choices[22][0] = "no afecta por s&iacute; solo a la validez de los actos dictados por los &oacute;rganos administrativos";
 choices[22][1] = "supone la invalidez de los actos dictados por los &oacute;rganos administrativos";
 choices[22][2] = "supone la nulidad de los actos dictados por los &oacute;rganos administrativos";
 choices[22][3] = "supone la anulabilidad de los actos dictados por los &oacute;rganos administrativos";
 answers[22] = choices[22][0];
 units[22] = "4, 7, 8, 9";
 comments[22] = "Id Pregunta: 782. Ley 40/2015";
 preguntaids[22] = 782


//  Id pregunta: 465 Año de creación de pregunta: 2016
 questions[23]= "24)  Seg&uacute;n el art&iacute;culo 26 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la programaci&oacute;n presupuestaria se regir&aacute; por los principios de:";
 choices[23]= new Array();
 choices[23][0] = "Estabilidad presupuestaria, sostenibilidad financiera, eficacia, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[23][1] = "Estabilidad presupuestaria, sostenibilidad financiera, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[23][2] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, responsabilidad y lealtad institucional.";
 choices[23][3] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 answers[23] = choices[23][3];
 units[23] = "10";
 comments[23] = "Id Pregunta: 465. PRESUPUESTOS GENERALES";
 preguntaids[23] = 465


//  Id pregunta: 159 Año de creación de pregunta: 2016
 questions[24]= "25)  Seg&uacute;n la ley 39/2015, los actos administrativos, a menos que su naturaleza exija otra forma m&aacute;s adecuada de expresi&oacute;n y constancia, se producir&aacute;n: ";
 choices[24]= new Array();
 choices[24][0] = "verbalmente";
 choices[24][1] = "por escrito a trav&eacute;s de medios electr&oacute;nicos o no electr&oacute;nicos";
 choices[24][2] = "por escrito a trav&eacute;s de medios electr&oacute;nicos";
 choices[24][3] = "por escrito a trav&eacute;s de medios no electr&oacute;nicos";
 answers[24] = choices[24][2];
 units[24] = "7";
 comments[24] = "Id Pregunta: 159. Ley 39/2015, Art&iacute;culo 36";
 preguntaids[24] = 159


//  Id pregunta: 847 Año de creación de pregunta: 2016
 questions[25]= "26)  Se&ntilde;ale la respuesta falsa:";
 choices[25]= new Array();
 choices[25][0] = "Cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, especificando las condiciones, protocolos y criterios funcionales o t&eacute;cnicos necesarios para acceder a dichos datos con las m&aacute;ximas garant&iacute;as de seguridad, integridad y disponibilidad.";
 choices[25][1] = "La disponibilidad de tales datos estar&aacute; limitada estrictamente a aquellos que son requeridos a los interesados por las restantes Administraciones para la tramitaci&oacute;n y resoluci&oacute;n de los procedimientos y actuaciones de su competencia, de acuerdo con la normativa reguladora de los mismos.";
 choices[25][2] = "De conformidad con lo dispuesto en la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal y su normativa de desarrollo, cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, siendo preceptiva la firma del convenio correspondiente.";
 choices[25][3] = "La Administraci&oacute;n General del Estado, las Administraciones Auton&oacute;micas y las Entidades Locales, adoptar&aacute;n las medidas necesarias e incorporar&aacute;n en sus respectivos &aacute;mbitos las tecnolog&iacute;as precisas para posibilitar la interconexi&oacute;n de sus redes";
 answers[25] = choices[25][2];
 units[25] = "4, 7, 8, 9";
 comments[25] = "Id Pregunta: 847. Ley 40/2015";
 preguntaids[25] = 847


//  Id pregunta: 771 Año de creación de pregunta: 2016
 questions[26]= "27)  Las Administraciones P&uacute;blicas deber&aacute;n respetar en su actuaci&oacute;n y relaciones los siguientes principios:";
 choices[26]= new Array();
 choices[26][0] = "simplicidad, claridad y proximidad a los ciudadanos";
 choices[26][1] = "participaci&oacute;n, objetividad y transparencia de la actuaci&oacute;n administrativa";
 choices[26][2] = "responsabilidad por la gesti&oacute;n p&uacute;blica";
 choices[26][3] = "todas son correctas";
 answers[26] = choices[26][3];
 units[26] = "4, 7, 8, 9";
 comments[26] = "Id Pregunta: 771. Ley 40/2015";
 preguntaids[26] = 771


//  Id pregunta: 812 Año de creación de pregunta: 2016
 questions[27]= "28)  Existir&aacute; una Delegaci&oacute;n del Gobierno en:";
 choices[27]= new Array();
 choices[27][0] = "la capital del pa&iacute;s";
 choices[27][1] = "cada una de las Comunidades Aut&oacute;nomas";
 choices[27][2] = "cada una de las provincias";
 choices[27][3] = "cada una de las embajadas espa&ntilde;olas";
 answers[27] = choices[27][1];
 units[27] = "4, 7, 8, 9";
 comments[27] = "Id Pregunta: 812. Ley 40/2015";
 preguntaids[27] = 812


//  Id pregunta: 764 Año de creación de pregunta: 2016
 questions[28]= "29)  La Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico, establece y regula (se&ntilde;ala la incorrecta):";
 choices[28]= new Array();
 choices[28][0] = "las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[28][1] = "los principios del sistema de responsabilidad de las Administraciones P&uacute;blicas y de la potestad sancionadora";
 choices[28][2] = "el procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas";
 choices[28][3] = "la organizaci&oacute;n y funcionamiento de la Administraci&oacute;n General del Estado y de su sector p&uacute;blico institucional para el desarrollo de sus actividades";
 answers[28] = choices[28][2];
 units[28] = "4, 7, 8, 9";
 comments[28] = "Id Pregunta: 764. Ley 40/2015";
 preguntaids[28] = 764


//  Id pregunta: 484 Año de creación de pregunta: 2016
 questions[29]= "30)  De acuerdo con el art&iacute;culo 67 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, si las variaciones afectasen al volumen de endeudamiento a corto y largo plazo, ser&aacute; competencia del Consejo de Ministros cuando su importe exceda de la cuant&iacute;a de:";
 choices[29]= new Array();
 choices[29][0] = "12.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[29][1] = "13.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[29][2] = "11.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[29][3] = "10.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 answers[29] = choices[29][0];
 units[29] = "10";
 comments[29] = "Id Pregunta: 484. PRESUPUESTOS GENERALES";
 preguntaids[29] = 484


//  Id pregunta: 518 Año de creación de pregunta: 2016
 questions[30]= "31)  Las Universidades p&uacute;blicas:";
 choices[30]= new Array();
 choices[30][0] = "se regir&aacute;n &uacute;nicamente por su normativa espec&iacute;fica";
 choices[30][1] = "se regir&aacute;n por su normativa espec&iacute;fica y supletoriamente por las previsiones de esta Ley";
 choices[30][2] = "se regir&aacute;n por las previsiones de esta Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[30][3] = "se regir&aacute;n &uacute;nicamente por las previsiones de esta Ley";
 answers[30] = choices[30][1];
 units[30] = "7";
 comments[30] = "Id Pregunta: 518. LEY 39/2015";
 preguntaids[30] = 518


//  Id pregunta: 532 Año de creación de pregunta: 2016
 questions[31]= "32)  La representaci&oacute;n podr&aacute; acreditarse:";
 choices[31]= new Array();
 choices[31][0] = "mediante cualquier t&iacute;tulo jur&iacute;dico";
 choices[31][1] = "mediante resoluci&oacute;n judicial especial";
 choices[31][2] = "&uacute;nicamente mediante poder notarial";
 choices[31][3] = "mediante cualquier medio v&aacute;lido en Derecho que deje constancia fidedigna de su existencia";
 answers[31] = choices[31][3];
 units[31] = "7";
 comments[31] = "Id Pregunta: 532. LEY 39/2015";
 preguntaids[31] = 532


//  Id pregunta: 669 Año de creación de pregunta: 2016
 questions[32]= "33)  Se&ntilde;ale la opci&oacute;n falsa respecto a la instrucci&oacute;n del procedimiento definida en la Ley 39/2015:";
 choices[32]= new Array();
 choices[32][0] = "Los interesados podr&aacute;n, en cualquier momento del procedimiento anterior al tr&aacute;mite de audiencia, aducir alegaciones y aportar documentos u otros elementos de juicio.";
 choices[32][1] = "El instructor del procedimiento s&oacute;lo podr&aacute; rechazar las pruebas propuestas por los interesados cuando sean manifiestamente improcedentes o innecesarias, mediante resoluci&oacute;n motivada.";
 choices[32][2] = "Salvo disposici&oacute;n expresa en contrario, los informes ser&aacute;n preceptivos y vinculantes.";
 choices[32][3] = "Se podr&aacute; prescindir del tr&aacute;mite de audiencia cuando no figuren en el procedimiento ni sean tenidos en cuenta en la resoluci&oacute;n otros hechos ni otras alegaciones y pruebas que las aducidas por el interesado.";
 answers[32] = choices[32][2];
 units[32] = "7";
 comments[32] = "Id Pregunta: 669. Cap&iacute;tulo IV, T&iacute;tulo IV de la Ley 39/2015";
 preguntaids[32] = 669


//  Id pregunta: 504 Año de creación de pregunta: 2016
 questions[33]= "34)  La Ley Org&aacute;nica 2/2012 destaca una serie de principios generales entre los que no se encuentra:";
 choices[33]= new Array();
 choices[33][0] = "Principio de transparencia.";
 choices[33][1] = "Principio de cooperaci&oacute;n.";
 choices[33][2] = "Principio de eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos.";
 choices[33][3] = "Principio de lealtad institucional.";
 answers[33] = choices[33][1];
 units[33] = "10";
 comments[33] = "Id Pregunta: 504. PRESUPUESTOS GENERALES";
 preguntaids[33] = 504


//  Id pregunta: 522 Año de creación de pregunta: 2016
 questions[34]= "35)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se denomina:";
 choices[34]= new Array();
 choices[34][0] = "De los interesados en el procedimiento";
 choices[34][1] = "De la actividad de las Administraciones P&uacute;blicas";
 choices[34][2] = "Disposiciones generales";
 choices[34][3] = "De los actos administrativos";
 answers[34] = choices[34][2];
 units[34] = "7";
 comments[34] = "Id Pregunta: 522. LEY 39/2015";
 preguntaids[34] = 522


//  Id pregunta: 505 Año de creación de pregunta: 2016
 questions[35]= "36)  Respecto a la Ley Org&aacute;nica 2/2012 se&ntilde;ale la respuesta falsa:";
 choices[35]= new Array();
 choices[35][0] = "La elaboraci&oacute;n, aprobaci&oacute;n y ejecuci&oacute;n de los Presupuestos y dem&aacute;s actuaciones que afecten a los gastos o ingresos de las Administraciones P&uacute;blicas y dem&aacute;s entidades que forman parte del sector p&uacute;blico se someter&aacute; al principio de estabilidad presupuestaria.";
 choices[35][1] = "Ninguna Administraci&oacute;n P&uacute;blica podr&aacute; incurrir en d&eacute;ficit estructural, definido como d&eacute;ficit ajustado del ciclo, neto de medidas excepcionales y temporales.";
 choices[35][2] = "Excepcionalmente, el Estado y las Comunidades Aut&oacute;nomas podr&aacute;n incurrir en d&eacute;ficit estructural en caso de cat&aacute;strofes naturales, recesi&oacute;n econ&oacute;mica grave o situaciones de emergencia extraordinaria que escapen al control de las Administraciones P&uacute;blicas y perjudiquen considerablemente su situaci&oacute;n financiera o su sostenibilidad econ&oacute;mica o social.";
 choices[35][3] = "Las Corporaciones Locales deber&aacute;n mantener una posici&oacute;n de equilibrio presupuestario.";
 answers[35] = choices[35][3];
 units[35] = "10";
 comments[35] = "Id Pregunta: 505. PRESUPUESTOS GENERALES";
 preguntaids[35] = 505


//  Id pregunta: 511 Año de creación de pregunta: 2016
 questions[36]= "37)  A tenor de lo dispuesto en el art&iacute;culo 14 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, el pago de los intereses y el capital de la deuda p&uacute;blica de las Administraciones P&uacute;blicas gozar&aacute; de prioridad:";
 choices[36]= new Array();
 choices[36][0] = "Sobre otros gastos siempre que no superen el 80% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[36][1] = "Sobre otros gastos siempre que no superen el 70% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[36][2] = "Absoluta frente a cualquier otro gasto.";
 choices[36][3] = "Sobre otros gastos siempre que no superen el 60% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea";
 answers[36] = choices[36][2];
 units[36] = "10";
 comments[36] = "Id Pregunta: 511. PRESUPUESTOS GENERALES";
 preguntaids[36] = 511


//  Id pregunta: 26 Año de creación de pregunta: 2016
 questions[37]= "38)  Usted, como directivo TIC de la AGE, decide crear un portal web, con una direcci&oacute;n electr&oacute;nica nueva, con el objetivo de informar al ciudadano sobre determinados aspectos relacionados con su unidad. &iquest;Cu&aacute;l de los siguientes tipos de certificado utilizar&iacute;a para identificar a los servidores de su portal informativo?";
 choices[37]= new Array();
 choices[37][0] = "Sello electr&oacute;nico";
 choices[37][1] = "Sede electr&oacute;nica";
 choices[37][2] = "Servidor seguro (SSL/TLS)";
 choices[37][3] = "Empleado p&uacute;blico";
 answers[37] = choices[37][2];
 units[37] = "7";
 comments[37] = "Id Pregunta: 26. AGE A1 2015";
 preguntaids[37] = 26


//  Id pregunta: 142 Año de creación de pregunta: 2016
 questions[38]= "39)  El plazo para la interposici&oacute;n del recurso de alzada ser&aacute;:";
 choices[38]= new Array();
 choices[38][0] = "De un mes si el acto fuera presunto";
 choices[38][1] = "De un mes si el acto fuera expreso";
 choices[38][2] = "De un mes en cualquier caso";
 choices[38][3] = "No existe un plazo m&aacute;ximo para la interposici&oacute;n de un recurso de alzada";
 answers[38] = choices[38][1];
 units[38] = "8";
 comments[38] = "Id Pregunta: 142. Ley 39/2015, Art&iacute;culo 122";
 preguntaids[38] = 142


//  Id pregunta: 667 Año de creación de pregunta: 2016
 questions[39]= "40)  Seg&uacute;n la Ley 39/2015, un expediente administrativo contendr&aacute;:";
 choices[39]= new Array();
 choices[39][0] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios,la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento, y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[39][1] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios y un &iacute;ndice numerado de todos los documentos.";
 choices[39][2] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[39][3] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos, la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento  y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 answers[39] = choices[39][2];
 units[39] = "7";
 comments[39] = "Id Pregunta: 667. Art&iacute;culo 70 de la Ley 39/2015";
 preguntaids[39] = 667


//  Id pregunta: 848 Año de creación de pregunta: 2016
 questions[40]= "41)  Se&ntilde;ale la respuesta correcta:";
 choices[40]= new Array();
 choices[40][0] = "La sede electr&oacute;nica es aquella direcci&oacute;n electr&oacute;nica, disponible para los ciudadanos a trav&eacute;s de redes de telecomunicaciones, cuya titularidad corresponde a una Administraci&oacute;n P&uacute;blica, o bien a una o varios organismos p&uacute;blicos o entidades de Derecho P&uacute;blico en el ejercicio de sus competencias.";
 choices[40][1] = "Se entiende por portal de internet el punto de acceso electr&oacute;nico cuya titularidad corresponda a una Administraci&oacute;n P&uacute;blica, organismo p&uacute;blico o entidad de Derecho P&uacute;blico que permite el acceso a trav&eacute;s de internet a la informaci&oacute;n publicada y, en su caso, a la sede electr&oacute;nica correspondiente.";
 choices[40][2] = "A y B son correctas.";
 choices[40][3] = "A y B son falsas.";
 answers[40] = choices[40][2];
 units[40] = "4, 7, 8, 9";
 comments[40] = "Id Pregunta: 848. Ley 40/2015";
 preguntaids[40] = 848


//  Id pregunta: 528 Año de creación de pregunta: 2016
 questions[41]= "42)  Los menores incapacitados, cuando la extensi&oacute;n de la incapacitaci&oacute;n afecte al ejercicio y defensa de los derechos o intereses de que se trate:";
 choices[41]= new Array();
 choices[41][0] = "tienen capacidad de obrar limitada";
 choices[41][1] = "pueden actuar sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[41][2] = "no tienen capacidad de obrar";
 choices[41][3] = "ninguna es correcta";
 answers[41] = choices[41][2];
 units[41] = "7";
 comments[41] = "Id Pregunta: 528. LEY 39/2015";
 preguntaids[41] = 528


//  Id pregunta: 783 Año de creación de pregunta: 2016
 questions[42]= "43)  La Administraci&oacute;n consultiva podr&aacute; articularse:";
 choices[42]= new Array();
 choices[42][0] = "mediante &oacute;rganos espec&iacute;ficos dotados de autonom&iacute;a org&aacute;nica y funcional con respecto a la Administraci&oacute;n activa";
 choices[42][1] = "a trav&eacute;s de los servicios de la Administraci&oacute;n activa que prestan asistencia jur&iacute;dica";
 choices[42][2] = "a y b son correctas";
 choices[42][3] = "a y b son incorrectas";
 answers[42] = choices[42][2];
 units[42] = "4, 7, 8, 9";
 comments[42] = "Id Pregunta: 783. Ley 40/2015";
 preguntaids[42] = 783


//  Id pregunta: 27 Año de creación de pregunta: 2016
 questions[43]= "44)  La Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, NO estableci&oacute; como derecho de los ciudadanos, el derecho:";
 choices[43]= new Array();
 choices[43][0] = "A la igualdad en el acceso electr&oacute;nico a los servicios de las Administraciones P&uacute;blicas.";
 choices[43][1] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que tengan la condici&oacute;n de interesado.";
 choices[43][2] = "A la calidad de los servicios p&uacute;blicos prestados por medios electr&oacute;nicos.";
 choices[43][3] = "A la preferencia en la tramitaci&oacute;n de los procedimientos presentados electr&oacute;nicamente.";
 answers[43] = choices[43][3];
 units[43] = "7";
 comments[43] = "Id Pregunta: 27. AGE A1 2015";
 preguntaids[43] = 27


//  Id pregunta: 668 Año de creación de pregunta: 2016
 questions[44]= "45)  Seg&uacute;n el art&iacute;culo 73 de la Ley 39/2015, el plazo para el el cumplimiento de tr&aacute;mites que deban ser cumplimentados por el interesado, es por defecto:";
 choices[44]= new Array();
 choices[44][0] = "10 d&iacute;as.";
 choices[44][1] = "15 d&iacute;as.";
 choices[44][2] = "1 mes.";
 choices[44][3] = "No se establece ning&uacute;n plazo por defecto.";
 answers[44] = choices[44][0];
 units[44] = "7";
 comments[44] = "Id Pregunta: 668. Art&iacute;culo 73 de la Ley 39/2015";
 preguntaids[44] = 668


//  Id pregunta: 826 Año de creación de pregunta: 2016
 questions[45]= "46)  Podr&aacute;n ordenarle que se abstengan de toda intervenci&oacute;n en el expediente al funcionario que se encuentre en causa de abstenci&oacute;n...";
 choices[45]= new Array();
 choices[45][0] = "Los &oacute;rganos jer&aacute;rquicamente superiores";
 choices[45][1] = "S&oacute;lo los &oacute;rganos inmediatamente superiores jer&aacute;rquicos";
 choices[45][2] = "Los interesados en el procedimiento";
 choices[45][3] = "Las alternativas b) y c) son correctas";
 answers[45] = choices[45][1];
 units[45] = "4, 7, 8, 9";
 comments[45] = "Id Pregunta: 826. Ley 40/2015";
 preguntaids[45] = 826


//  Id pregunta: 789 Año de creación de pregunta: 2016
 questions[46]= "47)  En la organizaci&oacute;n central no son &oacute;rganos directivos:";
 choices[46]= new Array();
 choices[46][0] = "los Subsecretarios y Secretarios generales";
 choices[46][1] = "los Secretarios generales t&eacute;cnicos y Directores generales";
 choices[46][2] = "los Secretarios de Estado";
 choices[46][3] = "los Subdirectores generales";
 answers[46] = choices[46][2];
 units[46] = "4, 7, 8, 9";
 comments[46] = "Id Pregunta: 789. Ley 40/2015";
 preguntaids[46] = 789


//  Id pregunta: 512 Año de creación de pregunta: 2016
 questions[47]= "48)  La presente Ley tiene por objeto regular: (se&ntilde;ala la incorrecta)";
 choices[47]= new Array();
 choices[47][0] = "Los requisitos de validez y eficacia de los actos administrativos";
 choices[47][1] = "El procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas, incluyendo el sancionador y el de reclamaci&oacute;n de responsabilidad de las Administraciones P&uacute;blicas";
 choices[47][2] = "Las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[47][3] = "Los principios a los que se ha de ajustar el ejercicio de la iniciativa legislativa y la potestad reglamentaria";
 answers[47] = choices[47][2];
 units[47] = "7";
 comments[47] = "Id Pregunta: 512. LEY 39/2015";
 preguntaids[47] = 512


//  Id pregunta: 521 Año de creación de pregunta: 2016
 questions[48]= "49)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas tiene:";
 choices[48]= new Array();
 choices[48][0] = "un art&iacute;culo";
 choices[48][1] = "dos art&iacute;culos";
 choices[48][2] = "tres art&iacute;culos";
 choices[48][3] = "cuatro art&iacute;culos";
 answers[48] = choices[48][1];
 units[48] = "7";
 comments[48] = "Id Pregunta: 521. LEY 39/2015";
 preguntaids[48] = 521


//  Id pregunta: 837 Año de creación de pregunta: 2016
 questions[49]= "50)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[49]= new Array();
 choices[49][0] = "Los &oacute;rganos competentes podr&aacute;n avocar para s&iacute; el conocimiento de uno o varios asuntos cuya resoluci&oacute;n corresponda ordinariamente o por delegaci&oacute;n a sus &oacute;rganos administrativos dependientes, cuando circunstancias de &iacute;ndole t&eacute;cnica, econ&oacute;mica, social, jur&iacute;dica o territorial lo hagan conveniente.";
 choices[49][1] = "En los supuestos de delegaci&oacute;n de competencias en &oacute;rganos no dependientes jer&aacute;rquicamente, el conocimiento de un asunto podr&aacute; ser avocado &uacute;nicamente por el &oacute;rgano delegante.";
 choices[49][2] = "En todo caso, la avocaci&oacute;n se realizar&aacute; mediante acuerdo motivado que deber&aacute; ser notificado a los interesados en el procedimiento, si los hubiere, con posterioridad a la resoluci&oacute;n final que se dicte.";
 choices[49][3] = "Contra el acuerdo de avocaci&oacute;n no cabr&aacute; recurso, aunque podr&aacute; impugnarse en el que, en su caso, se interponga contra la resoluci&oacute;n del procedimiento.";
 answers[49] = choices[49][2];
 units[49] = "4, 7, 8, 9";
 comments[49] = "Id Pregunta: 837. Ley 40/2015";
 preguntaids[49] = 837


//  Id pregunta: 158 Año de creación de pregunta: 2016
 questions[50]= "51)  Seg&uacute;n la ley 39/2015, cuando la notificaci&oacute;n por medios electr&oacute;nicos sea de car&aacute;cter obligatorio, o haya sido expresamente elegida por el interesado:";
 choices[50]= new Array();
 choices[50][0] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[50][1] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[50][2] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[50][3] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 answers[50] = choices[50][1];
 units[50] = "7";
 comments[50] = "Id Pregunta: 158. Ley 39/2015, Art&iacute;culo 43";
 preguntaids[50] = 158


//  Id pregunta: 827 Año de creación de pregunta: 2016
 questions[51]= "52)  La actuaci&oacute;n de autoridades y personal al servicio de las Administraciones P&uacute;blicas en los que concurran motivos de abstenci&oacute;n ...";
 choices[51]= new Array();
 choices[51][0] = "No implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido pero dar&aacute; lugar a la responsabilidad que proceda";
 choices[51][1] = "Dar&aacute; lugar a la responsabilidad que proceda pero no implicar&aacute; en ning&uacute;n caso la invalidez de los actos en que hayan intervenido";
 choices[51][2] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido";
 choices[51][3] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido dando lugar a la responsabilidad que proceda";
 answers[51] = choices[51][1];
 units[51] = "4, 7, 8, 9";
 comments[51] = "Id Pregunta: 827. Ley 40/2015";
 preguntaids[51] = 827


//  Id pregunta: 833 Año de creación de pregunta: 2016
 questions[52]= "53)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Marque la respuesta correcta.";
 choices[52]= new Array();
 choices[52][0] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo.";
 choices[52][1] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo.";
 choices[52][2] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter potestativo.";
 choices[52][3] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter oneroso.";
 answers[52] = choices[52][0];
 units[52] = "4, 7, 8, 9";
 comments[52] = "Id Pregunta: 833. Ley 40/2015";
 preguntaids[52] = 833


//  Id pregunta: 502 Año de creación de pregunta: 2016
 questions[53]= "54)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el programa plurianual de la Seguridad Social se elaborar&aacute; por:";
 choices[53]= new Array();
 choices[53][0] = "El presidente de las Cortes Generales.";
 choices[53][1] = "El Presidente del Gobierno.";
 choices[53][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[53][3] = "El Ministro de Trabajo y Asuntos Sociales.";
 answers[53] = choices[53][3];
 units[53] = "10";
 comments[53] = "Id Pregunta: 502. PRESUPUESTOS GENERALES";
 preguntaids[53] = 502


//  Id pregunta: 141 Año de creación de pregunta: 2016
 questions[54]= "55)  El recurso de alzada puede interponerse:";
 choices[54]= new Array();
 choices[54][0] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna en todo caso";
 choices[54][1] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna o ante el competente para resolverlo";
 choices[54][2] = "Ante el &oacute;rgano competente para resolverlo en todo caso";
 choices[54][3] = "Ante el Defensor del Pueblo";
 answers[54] = choices[54][1];
 units[54] = "8";
 comments[54] = "Id Pregunta: 141. Ley 39/2015, Art&iacute;culo 121";
 preguntaids[54] = 141


//  Id pregunta: 665 Año de creación de pregunta: 2016
 questions[55]= "56)  Seg&uacute;n la Ley 39/2015, la iniciaci&oacute;n de un procedimiento administrativo puede realizarse:";
 choices[55]= new Array();
 choices[55][0] = "De oficio.";
 choices[55][1] = "A solicitud del interesado.";
 choices[55][2] = "De oficio o a solicitud del interesado.";
 choices[55][3] = "Por la Administraci&oacute;n P&uacute;blica responsable.";
 answers[55] = choices[55][2];
 units[55] = "7";
 comments[55] = "Id Pregunta: 665. Art&iacute;culo 54 de la Ley 39/2015";
 preguntaids[55] = 665


//  Id pregunta: 150 Año de creación de pregunta: 2016
 questions[56]= "57)  Seg&uacute;n la ley 39/2015, el medio elegido por la persona para comunicarse con las Administraciones P&uacute;blicas:";
 choices[56]= new Array();
 choices[56][0] = "&uacute;nicamente podr&aacute; ser modificado cuando de no hacerlo se corra riesgo de no alcanzarse las pretensiones del interesado ";
 choices[56][1] = "no podr&aacute; ser modificado con posterioridad al tr&aacute;mite de audiencia";
 choices[56][2] = "podr&aacute; ser modificado en cualquier momento por la persona";
 choices[56][3] = "no podr&aacute; ser modificado de manera unilateral por el interesado";
 answers[56] = choices[56][2];
 units[56] = "7";
 comments[56] = "Id Pregunta: 150. Ley 39/2015, Art&iacute;culo 14";
 preguntaids[56] = 150


//  Id pregunta: 539 Año de creación de pregunta: 2016
 questions[57]= "58)  Respecto a los registros electr&oacute;nicos de apoderamientos no es correcto:";
 choices[57]= new Array();
 choices[57][0] = "en el &aacute;mbito estatal, este registro ser&aacute; el Registro Electr&oacute;nico de Apoderamientos de la Administraci&oacute;n General del Estado";
 choices[57][1] = "en ellos no constar&aacute; el bastanteo realizado del poder";
 choices[57][2] = "los registros generales de apoderamientos no impedir&aacute;n la existencia de registros particulares en cada Organismo";
 choices[57][3] = "cada Organismo podr&aacute; disponer de su propio registro electr&oacute;nico de apoderamientos";
 answers[57] = choices[57][1];
 units[57] = "7";
 comments[57] = "Id Pregunta: 539. LEY 39/2015";
 preguntaids[57] = 539


//  Id pregunta: 843 Año de creación de pregunta: 2016
 questions[58]= "59)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[58]= new Array();
 choices[58][0] = "De cada sesi&oacute;n que celebre el &oacute;rgano colegiado se levantar&aacute; acta por el Secretario, que especificar&aacute; necesariamente los asistentes, el orden del d&iacute;a de la reuni&oacute;n, las circunstancias del lugar y tiempo en que se ha celebrado, los puntos principales de las deliberaciones, as&iacute; como el contenido de los acuerdos adoptados.";
 choices[58][1] = "Podr&aacute;n grabarse las sesiones que celebre el &oacute;rgano colegiado. El fichero resultante de la grabaci&oacute;n, junto con la certificaci&oacute;n expedida por el Secretario de la autenticidad e integridad del mismo, y cuantos documentos en soporte electr&oacute;nico se utilizasen como documentos de la sesi&oacute;n, podr&aacute;n acompa&ntilde;ar al acta de las sesiones, sin necesidad de hacer constar en ella los puntos principales de las deliberaciones.";
 choices[58][2] = "El acta de cada sesi&oacute;n podr&aacute; aprobarse en la misma reuni&oacute;n o en una reuni&oacute;n posterior. El Secretario elaborar&aacute; el acta con el visto bueno del Presidente y lo remitir&aacute; a trav&eacute;s de medios electr&oacute;nicos, a los miembros del &oacute;rgano colegiado, quienes podr&aacute;n manifestar por los mismos medios su conformidad o reparos al texto, a efectos de su aprobaci&oacute;n, consider&aacute;ndose, en caso afirmativo, aprobada en la misma reuni&oacute;n.";
 choices[58][3] = "Cuando se hubiese optado por la grabaci&oacute;n de las sesiones celebradas o por la utilizaci&oacute;n de documentos en soporte electr&oacute;nico, deber&aacute;n conservarse de forma que se garantice la integridad y autenticidad de los ficheros electr&oacute;nicos correspondientes y el acceso a los mismos por parte de los miembros del &oacute;rgano colegiado.";
 answers[58] = choices[58][2];
 units[58] = "4, 7, 8, 9";
 comments[58] = "Id Pregunta: 843. Ley 40/2015";
 preguntaids[58] = 843


//  Id pregunta: 818 Año de creación de pregunta: 2016
 questions[59]= "60)  Los Directores Insulares de la Administraci&oacute;n General del Estado (se&ntilde;ala la incorrecta):";
 choices[59]= new Array();
 choices[59][0] = "ser&aacute;n nombrados por el Delegado del Gobierno mediante el procedimiento de concurso-oposici&oacute;n";
 choices[59][1] = "ser&aacute;n nombrados entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades Locales, pertenecientes a Cuerpos o Escalas clasificados como Subgrupo A1";
 choices[59][2] = "dependen jer&aacute;rquicamente del Delegado del Gobierno en la Comunidad Aut&oacute;noma o del Subdelegado del Gobierno en la provincia, cuando este cargo exista";
 choices[59][3] = "ejercen, en su &aacute;mbito territorial, las competencias atribuidas por esta Ley a los Subdelegados del Gobierno en las provincias";
 answers[59] = choices[59][0];
 units[59] = "4, 7, 8, 9";
 comments[59] = "Id Pregunta: 818. Ley 40/2015";
 preguntaids[59] = 818


//  Id pregunta: 149 Año de creación de pregunta: 2016
 questions[60]= "61)  Seg&uacute;n establece la Ley 39/2015, las Administraciones P&uacute;blicas har&aacute;n p&uacute;blico un Plan Normativo que:";
 choices[60]= new Array();
 choices[60][0] = "Contendr&aacute; las iniciativas legales y reglamentarias que hayan sido aprobadas en el a&ntilde;o en curso y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[60][1] = "Contendr&aacute; exclusivamente las iniciativas legales que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[60][2] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[60][3] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Bolet&iacute;n Oficial de la Administraci&oacute;n P&uacute;blica correspondiente";
 answers[60] = choices[60][2];
 units[60] = "7";
 comments[60] = "Id Pregunta: 149. Ley 39/2015, Art&iacute;culo 132";
 preguntaids[60] = 149


//  Id pregunta: 766 Año de creación de pregunta: 2016
 questions[61]= "62)  El sector p&uacute;blico institucional se integra por:";
 choices[61]= new Array();
 choices[61][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[61][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[61][2] = "las Universidades p&uacute;blicas";
 choices[61][3] = "todas son correctas";
 answers[61] = choices[61][3];
 units[61] = "4, 7, 8, 9";
 comments[61] = "Id Pregunta: 766. Ley 40/2015";
 preguntaids[61] = 766


//  Id pregunta: 481 Año de creación de pregunta: 2016
 questions[62]= "63)  Conforme a Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el Presupuesto del Estado, los cr&eacute;ditos destinados a atenciones protocolarias y representativas se especificar&aacute;n:";
 choices[62]= new Array();
 choices[62][0] = "A nivel de art&iacute;culo.";
 choices[62][1] = "A nivel de cap&iacute;tulo.";
 choices[62][2] = "Al nivel que corresponda conforme a su concreta clasificaci&oacute;n econ&oacute;mica.";
 choices[62][3] = "A nivel de concepto.";
 answers[62] = choices[62][2];
 units[62] = "10";
 comments[62] = "Id Pregunta: 481. PRESUPUESTOS GENERALES";
 preguntaids[62] = 481


//  Id pregunta: 470 Año de creación de pregunta: 2016
 questions[63]= "64)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, elaborar la documentaci&oacute;n estad&iacute;stico-contable de car&aacute;cter oficial del Sistema de la Seguridad Social es una competencia de:";
 choices[63]= new Array();
 choices[63][0] = "El Ministerio de Hacienda.";
 choices[63][1] = "El Ministerio de Econom&iacute;a.";
 choices[63][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[63][3] = "Ninguna de las respuestas es correcta.";
 answers[63] = choices[63][2];
 units[63] = "10";
 comments[63] = "Id Pregunta: 470. PRESUPUESTOS GENERALES";
 preguntaids[63] = 470


//  Id pregunta: 805 Año de creación de pregunta: 2016
 questions[64]= "65)  Los Secretarios generales t&eacute;cnicos tienen a todos los efectos la categor&iacute;a de:";
 choices[64]= new Array();
 choices[64][0] = "Director General";
 choices[64][1] = "Secretario general";
 choices[64][2] = "Subdirector general";
 choices[64][3] = "Subsecretario";
 answers[64] = choices[64][0];
 units[64] = "4, 7, 8, 9";
 comments[64] = "Id Pregunta: 805. Ley 40/2015";
 preguntaids[64] = 805


