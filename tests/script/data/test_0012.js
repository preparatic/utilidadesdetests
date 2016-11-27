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

//  Id pregunta: 543 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Qu&eacute; est&aacute;ndar ISO define un marco de trabajo para la gobernanza TIC?";
 choices[0]= new Array();
 choices[0][0] = "ISO/IEC 31000";
 choices[0][1] = "ISO/IEC 14000";
 choices[0][2] = "ISO/IEC 38500";
 choices[0][3] = "ISO/IEC 18000";
 answers[0] = choices[0][2];
 units[0] = "26";
 comments[0] = "Id Pregunta: 543. Gobernanza TIC";


//  Id pregunta: 276 Año de creación de pregunta: 2016
 questions[1]= "2)  Se&ntilde;ale la respuesta falsa";
 choices[1]= new Array();
 choices[1][0] = "El Portal de la Transparencia del Gobierno de Espa&ntilde;a es una subsede de la sede electr&oacute;nica central del Ministerio de la Presidencia.";
 choices[1][1] = "La titularidad de esta subsede corresponde a la Oficina de la Transparencia y Acceso a la Informaci&oacute;n (OTAI), dependiente de la Oficina para la Ejecuci&oacute;n de la Reforma de la Administraci&oacute;n P&uacute;blica (OPERA).";
 choices[1][2] = "La gesti&oacute;n de la plataforma tecnol&oacute;gica es competencia de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones (DTIC), en virtud del Acuerdo de Colaboraci&oacute;n firmado por el Ministerio de la Presidencia y el Ministerio de Hacienda y Administraciones P&uacute;blicas, para el desarrollo del Portal de la Transparencia.";
 choices[1][3] = "La DTIC ser&aacute; responsable de la integridad y disponibilidad de la informaci&oacute;n, que se provea al Portal de la Transparencia a trav&eacute;s de enlaces o v&iacute;nculos a otras p&aacute;ginas o sedes electr&oacute;nicas cuya responsabilidad corresponda a distinto &oacute;rgano o Administraci&oacute;n P&uacute;blica.";
 answers[1] = choices[1][3];
 units[1] = "22";
 comments[1] = "Id Pregunta: 276. LEY DE TRANSPARENCIA";


//  Id pregunta: 203 Año de creación de pregunta: 2016
 questions[2]= "3)  Se&ntilde;ale la afirmaci&oacute;n correcta. La tramitaci&oacute;n de las proposiciones de ley se regular&aacute; por:";
 choices[2]= new Array();
 choices[2][0] = "Ley Org&aacute;nica.";
 choices[2][1] = "Lo dispuesto en la normativa comunitaria.";
 choices[2][2] = "Los Reglamentos de las C&aacute;maras.";
 choices[2][3] = "El Reglamento del Congreso de los Diputados, exclusivamente.";
 answers[2] = choices[2][2];
 units[2] = "1";
 comments[2] = "Id Pregunta: 203. CONSTITUCION1978";


//  Id pregunta: 448 Año de creación de pregunta: 2016
 questions[3]= "4)  La partida presupuestaria es equivalente a...";
 choices[3]= new Array();
 choices[3][0] = "El sujeto que realiza el gasto";
 choices[3][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[3][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[3][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[3] = choices[3][3];
 units[3] = "10";
 comments[3] = "Id Pregunta: 448. PRESUPUESTOS GENERALES";


//  Id pregunta: 312 Año de creación de pregunta: 2016
 questions[4]= "5)  Los acuerdos de la Comisi&oacute;n Europea se adoptan:";
 choices[4]= new Array();
 choices[4][0] = "Por unanimidad.";
 choices[4][1] = "Por mayor&iacute;a cualificada.";
 choices[4][2] = "Por mayor&iacute;a de las dos terceras partes de sus miembros.";
 choices[4][3] = "Por mayor&iacute;a del n&uacute;mero de miembros.";
 answers[4] = choices[4][3];
 units[4] = "5";
 comments[4] = "Id Pregunta: 312. UNION EUROPEA";


//  Id pregunta: 159 Año de creación de pregunta: 2016
 questions[5]= "6)  Seg&uacute;n la ley 39/2015, los actos administrativos, a menos que su naturaleza exija otra forma m&aacute;s adecuada de expresi&oacute;n y constancia, se producir&aacute;n: ";
 choices[5]= new Array();
 choices[5][0] = "verbalmente";
 choices[5][1] = "por escrito a trav&eacute;s de medios electr&oacute;nicos o no electr&oacute;nicos";
 choices[5][2] = "por escrito a trav&eacute;s de medios electr&oacute;nicos";
 choices[5][3] = "por escrito a trav&eacute;s de medios no electr&oacute;nicos";
 answers[5] = choices[5][2];
 units[5] = "7";
 comments[5] = "Id Pregunta: 159. Ley 39/2015, Art&iacute;culo 36";


//  Id pregunta: 25 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Mediante qu&eacute; tipo de objetos se implementa el acceso a los recursos gestionados con la tecnolog&iacute;a JMX?";
 choices[6]= new Array();
 choices[6][0] = "SessionBean";
 choices[6][1] = "JavaBean";
 choices[6][2] = "MBeans";
 choices[6][3] = "MessageDrivenBean";
 answers[6] = choices[6][2];
 units[6] = "64";
 comments[6] = "Id Pregunta: 25. AGE A1 2015";


//  Id pregunta: 648 Año de creación de pregunta: 2016
 questions[7]= "8)  Los IDS, (Sistemas de Detecci&oacute;n de Intrusos), pueden clasificarse:";
 choices[7]= new Array();
 choices[7][0] = "Solamente en funci&oacute;n de los sistemas que monitorizan.";
 choices[7][1] = "En funci&oacute;n de los sistemas que monitorizan y en funci&oacute;n de c&oacute;mo operan los Sistemas de Detecci&oacute;n de Intrusos.";
 choices[7][2] = "Solamente en funci&oacute;n de c&oacute;mo operan los Sistemas de Detecci&oacute;n de Intrusos.";
 choices[7][3] = "Estos sistemas es imposible clasificarlos.";
 answers[7] = choices[7][1];
 units[7] = "119";
 comments[7] = "Id Pregunta: 648. Junta de Extremadura A1 2015";


//  Id pregunta: 189 Año de creación de pregunta: 2016
 questions[8]= "9)  De conformidad a lo establecido en la Constituci&oacute;n Espa&ntilde;ola, las Cortes pueden delegar en el Gobierno la potestad de dictar normas con rango de Ley. Cuando se trata de que el Gobierno elabore y apruebe textos articulados esta delegaci&oacute;n tiene que otorgarse mediante:";
 choices[8]= new Array();
 choices[8][0] = "Ley Org&aacute;nica.";
 choices[8][1] = "Ley de Bases.";
 choices[8][2] = "Ley ordinaria.";
 choices[8][3] = "Mandato.";
 answers[8] = choices[8][1];
 units[8] = "1";
 comments[8] = "Id Pregunta: 189. CONSTITUCION1978";


//  Id pregunta: 732 Año de creación de pregunta: 2016
 questions[9]= "10)  Indique la opci&oacute;n correcta en relaci&oacute;n con la VISI&Oacute;N de la Estrategia TIC";
 choices[9]= new Array();
 choices[9][0] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser electr&oacute;nica.";
 choices[9][1] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser digital.";
 choices[9][2] = "Para el a&ntilde;o 2020 ya no existir&aacute; ning&uacute;n procedimiento en soporte papel.";
 choices[9][3] = "En el a&ntilde;o 2020 los funcionarios realizar&aacute;n todas sus tareas con ordenador.";
 answers[9] = choices[9][1];
 units[9] = "28";
 comments[9] = "Id Pregunta: 732. Estrategia TIC";


//  Id pregunta: 379 Año de creación de pregunta: 2016
 questions[10]= "11)  Seg&uacute;n recoge la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, &iquest;con qu&eacute; frecuencia debe elaborar el Gobierno un informe sobre el conjunto de actuaciones en relaci&oacute;n con le efectividad del principio de igualdad entre mujeres y hombres?";
 choices[10]= new Array();
 choices[10][0] = "Anual.";
 choices[10][1] = "Semestral.";
 choices[10][2] = "Seg&uacute;n se determine reglamentariamente.";
 choices[10][3] = "Bienal.";
 answers[10] = choices[10][2];
 units[10] = "14";
 comments[10] = "Id Pregunta: 379. POLITICAS DE IGUALDAD";


//  Id pregunta: 560 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Cu&aacute;l de los siguientes no es un obst&aacute;culo identificado por la Comisi&oacute;n para el desarrollo de la Agenda Digital europea?";
 choices[11]= new Array();
 choices[11][0] = "El incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes";
 choices[11][1] = "La falta de inversi&oacute;n en campa&ntilde;as de comunicaci&oacute;n en los pa&iacute;ses miembros";
 choices[11][2] = "Las carencias en la alfabetizaci&oacute;n y la capacitaci&oacute;n digitales";
 choices[11][3] = "La ausencia de inversi&oacute;n en las redes";
 answers[11] = choices[11][1];
 units[11] = "19";
 comments[11] = "Id Pregunta: 560. Agenda Digital";


//  Id pregunta: 531 Año de creación de pregunta: 2016
 questions[12]= "13)  Se entender&aacute; acreditada la representaci&oacute;n realizada:";
 choices[12]= new Array();
 choices[12][0] = "mediante apoderamiento apud acta efectuado por comparecencia personal";
 choices[12][1] = "mediante apoderamiento apud acta efectuado por comparecencia electr&oacute;nica en la correspondiente sede electr&oacute;nica";
 choices[12][2] = "a trav&eacute;s de la acreditaci&oacute;n de su inscripci&oacute;n en el registro electr&oacute;nico de apoderamientos de la Administraci&oacute;n P&uacute;blica competente";
 choices[12][3] = "todas son correctas";
 answers[12] = choices[12][3];
 units[12] = "7";
 comments[12] = "Id Pregunta: 531. LEY 39/2015";


//  Id pregunta: 477 Año de creación de pregunta: 2016
 questions[13]= "14)  Se&ntilde;ale, de acuerdo con la Ley General Presupuestaria, cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[13]= new Array();
 choices[13][0] = "La Ley General Presupuestaria permite realizar trasferencias de cr&eacute;dito desde el Cap&iacute;tulo 6 de los Presupuestos generales del Estado al Cap&iacute;tulo 2.";
 choices[13][1] = "Es competencia del Consejo de Ministros la autorizaci&oacute;n de generaciones de cr&eacute;dito.";
 choices[13][2] = "Los cr&eacute;ditos extraordinarios por necesidades surgidas en operaciones financieras se financian con Deuda P&uacute;blica o con baja en otros cr&eacute;ditos de la misma naturaleza.";
 choices[13][3] = "Excepcionalmente tendr&aacute;n la condici&oacute;n de ampliables los cr&eacute;ditos destinados al pago de los salarios de los empleados p&uacute;blicos.";
 answers[13] = choices[13][2];
 units[13] = "10";
 comments[13] = "Id Pregunta: 477. PRESUPUESTOS GENERALES";


//  Id pregunta: 611 Año de creación de pregunta: 2016
 questions[14]= "15)  Una de las caracter&iacute;sticas de seguridad en SQL Server 2008 es el cifrado transparente de datos. Se&ntilde;ala la afirmaci&oacute;n correcta:";
 choices[14]= new Array();
 choices[14][0] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de registro.";
 choices[14][1] = "SQL Server ofrece la capacidad de buscar dentro de los datos cifrados.";
 choices[14][2] = "Para trabajar con datos cifrados utilizando esta caracter&iacute;stica hay que introducir cambios en las aplicaciones.";
 choices[14][3] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de datos.";
 answers[14] = choices[14][1];
 units[14] = "63";
 comments[14] = "Id Pregunta: 611. Junta de Extremadura A1 2015";


//  Id pregunta: 523 Año de creación de pregunta: 2016
 questions[15]= "16)  Se consideran interesados en el procedimiento administrativo:";
 choices[15]= new Array();
 choices[15][0] = "quienes lo promuevan como titulares de derechos o intereses leg&iacute;timos individuales o colectivos";
 choices[15][1] = "los que, habiendo iniciado el procedimiento, tengan derechos que puedan resultar afectados por la decisi&oacute;n que en el mismo se adopte";
 choices[15][2] = "aquellos cuyos intereses leg&iacute;timos, individuales o colectivos, puedan resultar afectados por la resoluci&oacute;n y se personen en el procedimiento durante el tr&aacute;mite de audiencia";
 choices[15][3] = "todas son correctas";
 answers[15] = choices[15][0];
 units[15] = "7";
 comments[15] = "Id Pregunta: 523. LEY 39/2015";


//  Id pregunta: 219 Año de creación de pregunta: 2016
 questions[16]= "17)  Seg&uacute;n establece el Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola, los Decretos-Leyes son normas con rango de Ley que aprueba el Gobierno:";
 choices[16]= new Array();
 choices[16][0] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad y una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[16][1] = "Sin mediar delegaci&oacute;n de las Cortes, aunque deben ser inmediatamente sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[16][2] = "En casos de extraordinaria y urgente necesidad sin mediar delegaci&oacute;n de las Cortes, aunque una vez aprobados deben ser tramitados como proyectos de ley por el procedimiento de urgencia.";
 choices[16][3] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad, y que una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 answers[16] = choices[16][1];
 units[16] = "1";
 comments[16] = "Id Pregunta: 219. CONSTITUCION1978";


//  Id pregunta: 9 Año de creación de pregunta: 2016
 questions[17]= "18)  Con respecto a los entornos de integraci&oacute;n continua, indique cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[17]= new Array();
 choices[17][0] = "Jenkins no dispone de la funcionalidad de extenderse mediante plugins.";
 choices[17][1] = "SonarQube utiliza herramientas de an&aacute;lisis est&aacute;tico de c&oacute;digo que permiten obtener m&eacute;tricas para mejorar la calidad del c&oacute;digo.";
 choices[17][2] = "El fichero POM empleado en Maven no siempre es un fichero XML.";
 choices[17][3] = "Jenkins es un software de integraci&oacute;n continua bajo licencia Oracle.";
 answers[17] = choices[17][1];
 units[17] = "95";
 comments[17] = "Id Pregunta: 9. AGE A1 2015";


//  Id pregunta: 734 Año de creación de pregunta: 2016
 questions[18]= "19)  En el Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP el principio de transparencia:";
 choices[18]= new Array();
 choices[18][0] = "El seguimiento de la actividad de los funcionarios aumenta la eficacia de los servicios p&uacute;blicos.";
 choices[18][1] = "La transparencia facilita al ciudadano el acceso a los servicios p&uacute;blicos.";
 choices[18][2] = "Una continua monitorizaci&oacute;n de la actividad, junto a la evaluaci&oacute;n y difusi&oacute;n de resultados incrementa la satisfacci&oacute;n de los ciudadanos.";
 choices[18][3] = "El seguimiento y control de la actividad pol&iacute;tica disminuye las actividades ligadas a la corrupci&oacute;n.";
 answers[18] = choices[18][2];
 units[18] = "28";
 comments[18] = "Id Pregunta: 734. Estrategia TIC";


//  Id pregunta: 265 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Qui&eacute;n debe refrendar el nombramiento del Presidente del Consejo General del Poder Judicial?:";
 choices[19]= new Array();
 choices[19][0] = "El Presidente del Senado";
 choices[19][1] = "No es un acto Real, por tanto no conlleva refrendo";
 choices[19][2] = "El Presidente del Gobierno";
 choices[19][3] = "El Presidente de las Cortes Generales";
 answers[19] = choices[19][2];
 units[19] = "1";
 comments[19] = "Id Pregunta: 265. CONSTITUCION1978";


//  Id pregunta: 763 Año de creación de pregunta: 2016
 questions[20]= "21)  Las Administraciones P&uacute;blicas que, en el ejercicio de sus respectivas competencias, establezcan medidas que limiten el ejercicio de derechos individuales o colectivos o exijan el cumplimiento de requisitos para el desarrollo de una actividad, deber&aacute;n (se&ntilde;ala la incorrecta):";
 choices[20]= new Array();
 choices[20][0] = "aplicar el principio de proporcionalidad y elegir la medida menos restrictiva";
 choices[20][1] = "motivar su necesidad para la protecci&oacute;n del inter&eacute;s p&uacute;blico";
 choices[20][2] = "justificar su adecuaci&oacute;n para lograr los fines que se persiguen, evitando en la medida de lo posible que se produzcan diferencias de trato discriminatorias";
 choices[20][3] = "evaluar peri&oacute;dicamente los efectos y resultados obtenidos";
 answers[20] = choices[20][2];
 units[20] = "4, 7, 8, 9";
 comments[20] = "Id Pregunta: 763. Ley 40/2015";


//  Id pregunta: 46 Año de creación de pregunta: 2016
 questions[21]= "22)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[21]= new Array();
 choices[21][0] = "En un sistema de cifrado de clave asim&eacute;trica la seguridad radica en la transmisi&oacute;n de la clave, mediante canal seguro, entre el emisor y el receptor del mensaje.";
 choices[21][1] = "Las huellas digitales devueltas por una misma funci&oacute;n hash tienen id&eacute;ntica longitud.";
 choices[21][2] = "Para ofrecer un nivel de seguridad equivalente, los sistemas de clave p&uacute;blica requieren menores longitudes de clave que los sistemas sim&eacute;tricos.";
 choices[21][3] = "Se denomina criptograma al procedimiento empleado para cifrar un mensaje.";
 answers[21] = choices[21][1];
 units[21] = "76";
 comments[21] = "Id Pregunta: 46. AGE A1 2015";


//  Id pregunta: 324 Año de creación de pregunta: 2016
 questions[22]= "23)  El Presidente del Tribunal de Justicia de la Uni&oacute;n Europea es nombrado para un per&iacute;odo de:";
 choices[22]= new Array();
 choices[22][0] = "Tres a&ntilde;os.";
 choices[22][1] = "Cuatro a&ntilde;os.";
 choices[22][2] = "Cinco a&ntilde;os.";
 choices[22][3] = "Seis a&ntilde;os.";
 answers[22] = choices[22][0];
 units[22] = "5";
 comments[22] = "Id Pregunta: 324. UNION EUROPEA";


//  Id pregunta: 359 Año de creación de pregunta: 2016
 questions[23]= "24)  Los Reglamentos no se caracterizan por:";
 choices[23]= new Array();
 choices[23][0] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 choices[23][1] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[23][2] = "Ser obligatorios.";
 choices[23][3] = "No poseer alcance general.";
 answers[23] = choices[23][3];
 units[23] = "5";
 comments[23] = "Id Pregunta: 359. UNION EUROPEA";


//  Id pregunta: 239 Año de creación de pregunta: 2016
 questions[24]= "25)  Respecto de las relaciones que constitucionalmente se regulan entre los miembros del Gobierno y las Cortes Generales:";
 choices[24]= new Array();
 choices[24][0] = "La comparecencia de los miembros del Gobierno ante las C&aacute;maras y sus Comisiones puede extenderse tambi&eacute;n a los funcionarios de sus Departamentos.";
 choices[24][1] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo solicitasen las propias C&aacute;maras o sus Comisiones.";
 choices[24][2] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo deciden los miembros del Gobierno.";
 choices[24][3] = "Los funcionarios no comparecer&aacute;n en ning&uacute;n caso.";
 answers[24] = choices[24][0];
 units[24] = "1";
 comments[24] = "Id Pregunta: 239. CONSTITUCION1978";


//  Id pregunta: 522 Año de creación de pregunta: 2016
 questions[25]= "26)  A los efectos previstos en esta Ley, tendr&aacute;n capacidad de obrar ante las Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[25]= new Array();
 choices[25][0] = "las personas f&iacute;sicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 choices[25][1] = "los menores de edad para el ejercicio y defensa de aquellos de sus derechos e intereses cuya actuaci&oacute;n no est&eacute; permitida por el ordenamiento jur&iacute;dico sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[25][2] = "cuando la Ley as&iacute; lo declare expresamente, los grupos de afectados, las uniones y entidades sin personalidad jur&iacute;dica y los patrimonios independientes o aut&oacute;nomos";
 choices[25][3] = "las personas jur&iacute;dicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 answers[25] = choices[25][1];
 units[25] = "7";
 comments[25] = "Id Pregunta: 522. LEY 39/2015";


//  Id pregunta: 118 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;C&oacute;mo se concretan anualmente los objetivos de la Estrategia Espa&ntilde;ola de Activaci&oacute;n para el Empleo?";
 choices[26]= new Array();
 choices[26][0] = "Mediante &Oacute;rdenes Ministeriales del Ministerio de Empleo y Seguridad Social";
 choices[26][1] = "Mediante Reales Decretos del Consejo de Ministros";
 choices[26][2] = "Mediante los Planes Anuales de Pol&iacute;tica de Empleo";
 choices[26][3] = "Mediante dictamen del Consejo General del Sistema Nacional de Empleo";
 answers[26] = choices[26][2];
 units[26] = "15";
 comments[26] = "Id Pregunta: 118. ";


//  Id pregunta: 381 Año de creación de pregunta: 2016
 questions[27]= "28)  La ley Org&aacute;nica 3/2007 para la igualdad efectiva entre hombres y mujeres en el &aacute;mbito de la Sociedad de la Informaci&oacute;n, obliga al Gobierno:";
 choices[27]= new Array();
 choices[27][0] = "A promover los contenidos creados por mujeres en el &aacute;mbito de la Sociedad de la Informaci&oacute;n";
 choices[27][1] = "A proteger los contenidos creados por mujeres n el &aacute;mbito de la Sociedad de la Informaci&oacute;n con medidas especiales de propiedad intelectual.";
 choices[27][2] = "A dise&ntilde;ar webs con contenido espec&iacute;fico femenino.";
 choices[27][3] = "A incorporar, en las convocatorias de empleo p&uacute;blico, igual n&uacute;mero de funcionarios que de funcionarias.";
 answers[27] = choices[27][0];
 units[27] = "14";
 comments[27] = "Id Pregunta: 381. POLITICAS DE IGUALDAD";


//  Id pregunta: 40 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Cu&aacute;l de los siguientes NO es un gestor de contenidos?";
 choices[28]= new Array();
 choices[28][0] = "Drupal";
 choices[28][1] = "Cassandra";
 choices[28][2] = "Wordpress";
 choices[28][3] = "OpenCMS";
 answers[28] = choices[28][1];
 units[28] = "99";
 comments[28] = "Id Pregunta: 40. AGE A1 2015";


//  Id pregunta: 275 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Cu&aacute;l NO es una funci&oacute;n de la oficina de transparencia y acceso a la informaci&oacute;n?";
 choices[29]= new Array();
 choices[29][0] = "Actuar como unidad de informaci&oacute;n del Ministerio de la Presidencia, en los t&eacute;rminos previstos en el art&iacute;culo 21 de la Ley 19/2013, de 9 de diciembre.";
 choices[29][1] = "La atenci&oacute;n a los ciudadanos sobre el modo de acceso a los servicios y procedimientos en materias propias del departamento.";
 choices[29][2] = "Actuar como observatorio de la transparencia, acceso a la informaci&oacute;n y buen Gobierno.";
 choices[29][3] = "La tramitaci&oacute;n de las quejas y sugerencias que pudieran derivarse del funcionamiento de los servicios de competencia del departamento.";
 answers[29] = choices[29][2];
 units[29] = "22";
 comments[29] = "Id Pregunta: 275. LEY DE TRANSPARENCIA";


//  Id pregunta: 220 Año de creación de pregunta: 2016
 questions[30]= "31)  Seg&uacute;n el Art&iacute;culo 68 de la Constituci&oacute;n, el Congreso se compone de:";
 choices[30]= new Array();
 choices[30][0] = "Un m&iacute;nimo de 300 Diputados.";
 choices[30][1] = "Un m&aacute;ximo de 350 Diputados.";
 choices[30][2] = "Un m&iacute;nimo de 400 Diputados.";
 choices[30][3] = "Un m&aacute;ximo de 300 Diputados.";
 answers[30] = choices[30][0];
 units[30] = "1";
 comments[30] = "Id Pregunta: 220. CONSTITUCION1978";


//  Id pregunta: 752 Año de creación de pregunta: 2016
 questions[31]= "32)  La Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico, establece y regula (se&ntilde;ala la incorrecta):";
 choices[31]= new Array();
 choices[31][0] = "las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[31][1] = "los principios del sistema de responsabilidad de las Administraciones P&uacute;blicas y de la potestad sancionadora";
 choices[31][2] = "el procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas";
 choices[31][3] = "la organizaci&oacute;n y funcionamiento de la Administraci&oacute;n General del Estado y de su sector p&uacute;blico institucional para el desarrollo de sus actividades";
 answers[31] = choices[31][2];
 units[31] = "4, 7, 8, 9";
 comments[31] = "Id Pregunta: 752. Ley 40/2015";


//  Id pregunta: 641 Año de creación de pregunta: 2016
 questions[32]= "33)  La estructura de un Directorio Activo se basa en los siguientes conceptos:";
 choices[32]= new Array();
 choices[32][0] = "Directorios, Unidades f&iacute;sicas y Usuarios.";
 choices[32][1] = "Dominio, Unidad Organizativa, Grupos y Objetos.";
 choices[32][2] = "Unidades f&iacute;sicas, Unidades l&oacute;gicas y Directorios.";
 choices[32][3] = "Ficheros, Directorios, Particiones y Unidades.";
 answers[32] = choices[32][1];
 units[32] = "58";
 comments[32] = "Id Pregunta: 641. Junta de Extremadura A1 2015";


//  Id pregunta: 75 Año de creación de pregunta: 2016
 questions[33]= "34)  Las transferencias internacionales de datos de car&aacute;cter personal:";
 choices[33]= new Array();
 choices[33][0] = "Se regulan en los art&iacute;culos 33 y 34 de la Ley Org&aacute;nica 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal y en el T&iacute;tulo VI del Real Decreto 1720/2007 por el que se aprueba el Reglamento de desarrollo de la Ley Org&aacute;nica 15/1999.";
 choices[33][1] = "Una transferencia internacional de datos, es un tratamiento de datos que supone una transmisi&oacute;n de los mismos fuera del territorio de la Uni&oacute;n Europea (UE).";
 choices[33][2] = "La Decisi&oacute;n de la Comisi&oacute;n 2000/520/CE, con arreglo a la Directiva 95/46/CE, permite actualmente realizar transferencias de datos a Estados Unidos si se cumplen los principios del acuerdo de Puerto Seguro.";
 choices[33][3] = "Precisan, en todo caso, la autorizaci&oacute;n previa de la Direcci&oacute;n de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[33] = choices[33][0];
 units[33] = "35";
 comments[33] = "Id Pregunta: 75. AGE A1 2015";


//  Id pregunta: 399 Año de creación de pregunta: 2016
 questions[34]= "35)  Las medidas espec&iacute;ficas que adoptar&aacute;n los Poderes P&uacute;blicos a favor de las mujeres para corregir situaciones patentes de desigualdad de hecho con respecto a los hombres, se denominan:";
 choices[34]= new Array();
 choices[34][0] = "Acciones de discriminaci&oacute;n.";
 choices[34][1] = "Acciones positivas.";
 choices[34][2] = "Acciones negativas.";
 choices[34][3] = "Acciones neutras.";
 answers[34] = choices[34][1];
 units[34] = "14";
 comments[34] = "Id Pregunta: 399. POLITICAS DE IGUALDAD";


//  Id pregunta: 280 Año de creación de pregunta: 2016
 questions[35]= "36)  El pacto fiscal europeo de 2012 incluye:";
 choices[35]= new Array();
 choices[35][0] = "Un conjunto de reglas, llamadas &quot;reglas de oro&quot;, que son vinculantes en la UE para el principio de equilibrio presupuestario.";
 choices[35][1] = "Un compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,6% de la PIB.";
 choices[35][2] = "Un compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional, lo cual no necesita ser verificado por el Tribunal de Justicia de la Uni&oacute;n Europea.";
 choices[35][3] = "La obligaci&oacute;n de mantener siempre el d&eacute;ficit p&uacute;blico por debajo del 2.8 % del PIB.";
 answers[35] = choices[35][0];
 units[35] = "5";
 comments[35] = "Id Pregunta: 280. UNION EUROPEA";


//  Id pregunta: 589 Año de creación de pregunta: 2016
 questions[36]= "37)  Son servicios declarados compartidos:";
 choices[36]= new Array();
 choices[36][0] = "Servicio unificado de telecomunicaciones y servicio de seguridad gestionada";
 choices[36][1] = "Servicio multicanal de atenci&oacute;n al ciudadano";
 choices[36][2] = "Servicio com&uacute;n de generaci&oacute;n y validaci&oacute;n de firmas electr&oacute;nicas";
 choices[36][3] = "Todos los anteriores";
 answers[36] = choices[36][3];
 units[36] = "19";
 comments[36] = "Id Pregunta: 589. Estrategia TIC";


//  Id pregunta: 821 Año de creación de pregunta: 2016
 questions[37]= "38)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Marque la respuesta correcta.";
 choices[37]= new Array();
 choices[37][0] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo.";
 choices[37][1] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo.";
 choices[37][2] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter potestativo.";
 choices[37][3] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter oneroso.";
 answers[37] = choices[37][0];
 units[37] = "4, 7, 8, 9";
 comments[37] = "Id Pregunta: 821. Ley 40/2015";


//  Id pregunta: 608 Año de creación de pregunta: 2016
 questions[38]= "39)  Una de las condiciones que un &aacute;rbol debe cumplir para ser &aacute;rbol b, siendo n el orden del &aacute;rbol, es:";
 choices[38]= new Array();
 choices[38][0] = "Cada p&aacute;gina contiene como m&aacute;ximo 2n + 1 elementos.";
 choices[38][1] = "Cada p&aacute;gina, excepto la ra&iacute;z, contiene al menos n elementos.";
 choices[38][2] = "Cada p&aacute;gina o es una hoja o tiene m descendientes, siendo m el n&uacute;mero de elementos o claves que tiene.";
 choices[38][3] = "Las hojas no tienen por qu&eacute; estar al mismo nivel.";
 answers[38] = choices[38][1];
 units[38] = "56";
 comments[38] = "Id Pregunta: 608. Junta de Extremadura A1 2015";


//  Id pregunta: 88 Año de creación de pregunta: 2016
 questions[39]= "40)  Seg&uacute;n la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3, &iquest;qu&eacute; tipo de diagrama tiene como objetivo principal la representaci&oacute;n de los aspectos est&aacute;ticos del sistema utilizando diversos mecanismos de abstracci&oacute;n?";
 choices[39]= new Array();
 choices[39][0] = "Diagrama de clases";
 choices[39][1] = "Diagrama de componentes";
 choices[39][2] = "Diagrama de estructura";
 choices[39][3] = "Diagrama de paquetes";
 answers[39] = choices[39][0];
 units[39] = "91";
 comments[39] = "Id Pregunta: 88. AGE A1 2015";


//  Id pregunta: 158 Año de creación de pregunta: 2016
 questions[40]= "41)  Seg&uacute;n la ley 39/2015, cuando la notificaci&oacute;n por medios electr&oacute;nicos sea de car&aacute;cter obligatorio, o haya sido expresamente elegida por el interesado:";
 choices[40]= new Array();
 choices[40][0] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[40][1] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[40][2] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[40][3] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 answers[40] = choices[40][1];
 units[40] = "7";
 comments[40] = "Id Pregunta: 158. Ley 39/2015, Art&iacute;culo 43";


//  Id pregunta: 485 Año de creación de pregunta: 2016
 questions[41]= "42)  Se&ntilde;ale la respuesta incorrecta respecto de la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[41]= new Array();
 choices[41][0] = "El principio de dotaci&oacute;n presupuestaria implica que los Presupuestos Generales del Estado de cada ejercicio contendr&aacute;n los cr&eacute;ditos necesarios para atender a las transferencias de medios econ&oacute;micos que deban realizarse a las comunidades aut&oacute;nomas por aplicaci&oacute;n del sistema de financiaci&oacute;n vigente en cada momento.";
 choices[41][1] = "Los cr&eacute;ditos para hacer efectivas las liquidaciones definitivas de ejercicios anteriores tendr&aacute;n el car&aacute;cter de ampliables.";
 choices[41][2] = "El reintegro de ayudas y la responsabilidad financiera derivados de la gesti&oacute;n de los fondos procedentes de la Uni&oacute;n Europea se someter&aacute; a lo previsto en la Ley General de Subvenciones y en la normativa comunitaria.";
 choices[41][3] = "Los anticipos para ejecuci&oacute;n de acciones y programas financiados o cofinanciados por fondos europeos que estuvieran pendientes de cancelar al finalizar el ejercicio, no podr&aacute;n cancelarse en el ejercicio siguiente.";
 answers[41] = choices[41][3];
 units[41] = "10";
 comments[41] = "Id Pregunta: 485. PRESUPUESTOS GENERALES";


//  Id pregunta: 692 Año de creación de pregunta: 2016
 questions[42]= "43)  Se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[42]= new Array();
 choices[42][0] = "El Reglamento (UE) 910/2014 no prev&eacute; la emisi&oacute;n de certificados de firma electr&oacute;nica a favor de personas jur&iacute;dicas o entidades sin personalidad jur&iacute;dica";
 choices[42][1] = "Con la aprobaci&oacute;n del Reglamento (UE) 910/2014 queda derogada la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica";
 choices[42][2] = "El Reglamento (UE) 910/2014 desplaza desde el 1 de julio de 2016 los preceptos de la Ley 59/2003 que se opongan a su contenido";
 choices[42][3] = "A partir del 1 de julio de 2016 dejar&aacute;n de emitirse certificados de firma electr&oacute;nica de personas jur&iacute;dicas y entidades sin personalidad jur&iacute;dica, pudiendo en su lugar expedirse certificados de sello electr&oacute;nico o certificados de firma de persona f&iacute;sica representante";
 answers[42] = choices[42][1];
 units[42] = "77";
 comments[42] = "Id Pregunta: 692. http://www.minetad.gob.es/telecomunicaciones/es-ES/Servicios/FirmaElectronica/Documents/nota-web-certifs-pers-juridica.pdf";


//  Id pregunta: 134 Año de creación de pregunta: 2016
 questions[43]= "44)  La Ley 2/2015, de desindexaci&oacute;n de la econom&iacute;a espa&ntilde;ola, parte de un compromiso del Gobierno en el marco:";
 choices[43]= new Array();
 choices[43][0] = "Del Programa Nacional de Reformas 2015 y 2016.";
 choices[43][1] = "Del Plan de Transformaci&oacute;n Digital 2015-2020.";
 choices[43][2] = "Del Programa Nacional de Reformas 2013 y 2014.";
 choices[43][3] = "Del Pacto Fiscal Europeo de 2012.";
 answers[43] = choices[43][2];
 units[43] = "12";
 comments[43] = "Id Pregunta: 134. Leyes modelo econ&oacute;mico";


//  Id pregunta: 293 Año de creación de pregunta: 2016
 questions[44]= "45)  Las sesiones plenarias mensuales, a las que asisten todos los diputados, se celebran en:";
 choices[44]= new Array();
 choices[44][0] = "Estrasburgo.";
 choices[44][1] = "Bruselas.";
 choices[44][2] = "Luxemburgo.";
 choices[44][3] = "Holanda.";
 answers[44] = choices[44][0];
 units[44] = "5";
 comments[44] = "Id Pregunta: 293. UNION EUROPEA";


//  Id pregunta: 301 Año de creación de pregunta: 2016
 questions[45]= "46)  El Presidente del Tribunal de Cuentas es elegido por:";
 choices[45]= new Array();
 choices[45][0] = "Los propios miembros del Tribunal.";
 choices[45][1] = "El Consejo de Europa.";
 choices[45][2] = "El Consejo Europeo.";
 choices[45][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[45] = choices[45][0];
 units[45] = "5";
 comments[45] = "Id Pregunta: 301. UNION EUROPEA";


//  Id pregunta: 54 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;A qu&eacute; tipo de ataque nos referimos cuando se suplanta la identidad de una direcci&oacute;n IP origen?";
 choices[46]= new Array();
 choices[46][0] = "DoS";
 choices[46][1] = "Phishing";
 choices[46][2] = "Sniffing";
 choices[46][3] = "Spoofing";
 answers[46] = choices[46][3];
 units[46] = "119";
 comments[46] = "Id Pregunta: 54. AGE A1 2015";


//  Id pregunta: 349 Año de creación de pregunta: 2016
 questions[47]= "48)  El Tratado de Par&iacute;s que crea la Comunidad Europea del Carb&oacute;n y del Acero entr&oacute; en vigor:";
 choices[47]= new Array();
 choices[47][0] = "El 23 de julio de 1952.";
 choices[47][1] = "El 18 de abril de 1951.";
 choices[47][2] = "El 16 de abril de 1948.";
 choices[47][3] = "d)Ninguna de las respuestas son correctas.";
 answers[47] = choices[47][0];
 units[47] = "5";
 comments[47] = "Id Pregunta: 349. UNION EUROPEA";


//  Id pregunta: 406 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola garantiza la no discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[48]= new Array();
 choices[48][0] = "Art&iacute;culo 9.1 CE.";
 choices[48][1] = "Art&iacute;culo 53 CE.";
 choices[48][2] = "Art&iacute;culo 14 CE.";
 choices[48][3] = "Art&iacute;culo 16 CE.";
 answers[48] = choices[48][2];
 units[48] = "14";
 comments[48] = "Id Pregunta: 406. POLITICAS DE IGUALDAD";


//  Id pregunta: 586 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;Cu&aacute;l es el per&iacute;odo temporal del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[49]= new Array();
 choices[49][0] = "Comprende del a&ntilde;o 2015 al 2017";
 choices[49][1] = "Comprende del a&ntilde;o 2015 al 2020";
 choices[49][2] = "Comprende del a&ntilde;o 2016 al 2018";
 choices[49][3] = "Ninguna de las anteriores";
 answers[49] = choices[49][1];
 units[49] = "19";
 comments[49] = "Id Pregunta: 586. Estrategia TIC";


//  Id pregunta: 727 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;C&uacute;al es el nombre de la reuni&oacute;n de SCRUM, donde se revisan los product backlog &iacute;tems?:";
 choices[50]= new Array();
 choices[50][0] = "Backlog refinement";
 choices[50][1] = "Backlog refinement";
 choices[50][2] = "A y b son correctas";
 choices[50][3] = "Ninguna de las anteriores";
 answers[50] = choices[50][2];
 units[50] = "34, 84";
 comments[50] = "Id Pregunta: 727. Metodologias &aacute;giles";


//  Id pregunta: 110 Año de creación de pregunta: 2016
 questions[51]= "52)  La Poblaci&oacute;n Activa incluye a:";
 choices[51]= new Array();
 choices[51][0] = "S&oacute;lo a aquellas personas que son empleados por cuenta ajena";
 choices[51][1] = "S&oacute;lo a aquellas personas que son empleadas por cuenta propia o ajena";
 choices[51][2] = "Aquellas personas que tienen empleo y a los desempleados que buscan un empleo de forma activa";
 choices[51][3] = "Todo aquel que desea trabajar";
 answers[51] = choices[51][2];
 units[51] = "15";
 comments[51] = "Id Pregunta: 110. ";


//  Id pregunta: 421 Año de creación de pregunta: 2016
 questions[52]= "53)  Las empresas deber&aacute;n promover condiciones de trabajo, arbitrar procedimientos espec&iacute;ficos y dar cauces a las denuncias o reclamaciones, para evitar:";
 choices[52]= new Array();
 choices[52][0] = "El acoso sexual.";
 choices[52][1] = "El acoso por raz&oacute;n del sexo.";
 choices[52][2] = "Ambas son correctas.";
 choices[52][3] = "A y B son incorrectas.";
 answers[52] = choices[52][2];
 units[52] = "14";
 comments[52] = "Id Pregunta: 421. POLITICAS DE IGUALDAD";


//  Id pregunta: 549 Año de creación de pregunta: 2016
 questions[53]= "54)  El presidente del pleno de la Comisi&oacute;n de Estrategia TIC es :";
 choices[53]= new Array();
 choices[53][0] = "El Ministro de Energ&iacute;a, Turismo y Agenda Digital";
 choices[53][1] = "El Ministro de Hacienda y Administraciones P&uacute;blicas";
 choices[53][2] = "El Presidente del Gobierno";
 choices[53][3] = "El Secretario General de Administraci&oacute;n Digital";
 answers[53] = choices[53][1];
 units[53] = "26";
 comments[53] = "Id Pregunta: 549. Gobernanza TIC";


//  Id pregunta: 542 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;Cu&aacute;l es el &oacute;rgano de la Comisi&oacute;n Europea encargado de la gobernanza TIC cuya misi&oacute;n es garantizar que la Comisi&oacute;n haga un uso eficaz de las tecnolog&iacute;as de la informaci&oacute;n y la comunicaci&oacute;n para el logro de sus objetivos organizativos y pol&iacute;ticos?";
 choices[54]= new Array();
 choices[54][0] = "La Direcci&oacute;n General de Inform&aacute;tica (DIGIT)";
 choices[54][1] = "Oficina del Organismo de Reguladores Europeos de las Comunicaciones Electr&oacute;nicas (ORECE)";
 choices[54][2] = "Agencia de Seguridad de las Redes y de la Informaci&oacute;n de la Uni&oacute;n Europea (ENISA)";
 choices[54][3] = "Instituto Europeo de Innovaci&oacute;n y Tecnolog&iacute;a (EIT)";
 answers[54] = choices[54][0];
 units[54] = "26";
 comments[54] = "Id Pregunta: 542. Gobernanza TIC";


//  Id pregunta: 784 Año de creación de pregunta: 2016
 questions[55]= "56)  Los estatutos de los Organismos p&uacute;blicos determinar&aacute;n sus respectivos:";
 choices[55]= new Array();
 choices[55][0] = "&oacute;rganos superiores";
 choices[55][1] = "&oacute;rganos directivos";
 choices[55][2] = "&oacute;rganos superiores y directivos";
 choices[55][3] = "ninguna es correcta";
 answers[55] = choices[55][1];
 units[55] = "4, 7, 8, 9";
 comments[55] = "Id Pregunta: 784. Ley 40/2015";


//  Id pregunta: 371 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;En qu&eacute; a&ntilde;o se adhiri&oacute; Espa&ntilde;a a la Comunidad Europea?:";
 choices[56]= new Array();
 choices[56][0] = "En 1988.";
 choices[56][1] = "En 1981.";
 choices[56][2] = "En 1982.";
 choices[56][3] = "En 1986.";
 answers[56] = choices[56][3];
 units[56] = "5";
 comments[56] = "Id Pregunta: 371. UNION EUROPEA";


//  Id pregunta: 604 Año de creación de pregunta: 2016
 questions[57]= "58)  ITIL v3, define:";
 choices[57]= new Array();
 choices[57][0] = "Un proceso es un conjunto estructurado de actividades dise&ntilde;ado para cumplir un objetivo concreto.";
 choices[57][1] = "Un proceso es un conjunto de actividades no estructuradas para cumplir un objetivo concreto.";
 choices[57][2] = "Un proceso es toda actividad encaminada a cumplir con un est&aacute;ndar definido por las normas ISO.";
 choices[57][3] = "Un proceso es un conjunto de actividades de documentaci&oacute;n y seguridad dise&ntilde;ados mediante diagramas de flujo de informaci&oacute;n.";
 answers[57] = choices[57][0];
 units[57] = "101";
 comments[57] = "Id Pregunta: 604. Junta de Extremadura A1 2015";


//  Id pregunta: 736 Año de creación de pregunta: 2016
 questions[58]= "59)  Las iniciativas que se lancen al amparo del Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE se ce&ntilde;ir&aacute;n a:";
 choices[58]= new Array();
 choices[58][0] = "6 principios.";
 choices[58][1] = "7 principios.";
 choices[58][2] = "5 principios.";
 choices[58][3] = "6 directrices.";
 answers[58] = choices[58][1];
 units[58] = "28";
 comments[58] = "Id Pregunta: 736. Estrategia TIC";


//  Id pregunta: 33 Año de creación de pregunta: 2016
 questions[59]= "60)  Respecto al desarrollo empleando tecnolog&iacute;a Microsoft, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[59]= new Array();
 choices[59][0] = "WINAPI (Windows API) permite un acceso a alto nivel del sistema, directamente usable en cualquier lenguaje y entorno de programaci&oacute;n.";
 choices[59][1] = "El framework .NET se compone de una biblioteca de clases denominada FCL (Framework Class Library) y del entorno com&uacute;n de ejecuci&oacute;n CLR (Common Language Runtime).";
 choices[59][2] = "En .NET el resultado de la compilaci&oacute;n de las aplicaciones es un m&oacute;dulo ensamblado en formato de fichero PE32 o PE32+ (Windows portable executable) directamente ejecutable sobre el hardware.";
 choices[59][3] = "Los compiladores para CLR producen c&oacute;digo FL (Final Language) denominado c&oacute;digo administrado.";
 answers[59] = choices[59][1];
 units[59] = "63";
 comments[59] = "Id Pregunta: 33. AGE A1 2015";


//  Id pregunta: 295 Año de creación de pregunta: 2016
 questions[60]= "61)  La sede del Tribunal de Cuentas Europeo se encuentra en:";
 choices[60]= new Array();
 choices[60][0] = "Estrasburgo.";
 choices[60][1] = "Bruselas.";
 choices[60][2] = "Luxemburgo.";
 choices[60][3] = "Holanda.";
 answers[60] = choices[60][2];
 units[60] = "5";
 comments[60] = "Id Pregunta: 295. UNION EUROPEA";


//  Id pregunta: 365 Año de creación de pregunta: 2016
 questions[61]= "62)  Las decisiones de la Comisi&oacute;n se adoptar&aacute;n por:";
 choices[61]= new Array();
 choices[61][0] = "Unanimidad y mayor&iacute;a simple.";
 choices[61][1] = "Unanimidad.";
 choices[61][2] = "Mayor&iacute;a cualificada.";
 choices[61][3] = "Mayor&iacute;a simple.";
 answers[61] = choices[61][3];
 units[61] = "5";
 comments[61] = "Id Pregunta: 365. UNION EUROPEA";


//  Id pregunta: 632 Año de creación de pregunta: 2016
 questions[62]= "63)  El sistema operativo que se dise&ntilde;a pensando en los tipos de datos y recursos que va a manejar: ficheros, procesos, memoria, hardware, etc., y en las propiedades y servicios que &eacute;stos pueden prestar, se construye siguiendo un modelo:";
 choices[62]= new Array();
 choices[62][0] = "Monol&iacute;tico.";
 choices[62][1] = "Estratificado.";
 choices[62][2] = "Cliente/servidor.";
 choices[62][3] = "Orientado a objetos.";
 answers[62] = choices[62][3];
 units[62] = "56";
 comments[62] = "Id Pregunta: 632. Junta de Extremadura A1 2015";


//  Id pregunta: 128 Año de creación de pregunta: 2016
 questions[63]= "64)  El Presidente del Consejo de Transparencia y Buen Gobierno ser&aacute; nombrado ";
 choices[63]= new Array();
 choices[63][0] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Parlamento";
 choices[63][1] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Presidente del Gobierno";
 choices[63][2] = "Por un per&iacute;odo no renovable de cinco a&ntilde;os mediante Real Decreto, a propuesta del titular del Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[63][3] = "Por un per&iacute;odo no renovable de seis a&ntilde;os mediante Real Decreto, a propuesta del Consejo de Ministros.";
 answers[63] = choices[63][2];
 units[63] = "22";
 comments[63] = "Id Pregunta: 128. ";


//  Id pregunta: 242 Año de creación de pregunta: 2016
 questions[64]= "65)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, es competencia del Rey:";
 choices[64]= new Array();
 choices[64][0] = "Refrendar los actos del Presidente de Gobierno.";
 choices[64][1] = "Previa autorizaci&oacute;n del Presidente de Gobierno, declarar la guerra y hacer la paz.";
 choices[64][2] = "El Alto Patronazgo de las Reales Academias.";
 choices[64][3] = "Sancionar y publicar las leyes.";
 answers[64] = choices[64][2];
 units[64] = "1";
 comments[64] = "Id Pregunta: 242. CONSTITUCION1978";


//  Id pregunta: 747 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Cu&aacute;les de los siguientes principios de inspiraci&oacute;n en la funci&oacute;n gerencial NO incorpora la Ley 40/2015?";
 choices[65]= new Array();
 choices[65][0] = "Buena fe, confianza leg&iacute;tima y lealtad institucional.";
 choices[65][1] = "Calidad de los servicios p&uacute;blicos";
 choices[65][2] = "Responsabilidad por la gesti&oacute;n p&uacute;blica.";
 choices[65][3] = "Servicio efectivo a los ciudadanos";
 answers[65] = choices[65][1];
 units[65] = "18, 20";
 comments[65] = "Id Pregunta: 747. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 484 Año de creación de pregunta: 2016
 questions[66]= "67)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, dirigir la contabilidad de las entidades que integran el sistema de la Seguridad Social y gestionar la contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una funci&oacute;n de:";
 choices[66]= new Array();
 choices[66][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[66][1] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[66][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[66][3] = "La Intervenci&oacute;n General de la Defensa.";
 answers[66] = choices[66][2];
 units[66] = "10";
 comments[66] = "Id Pregunta: 484. PRESUPUESTOS GENERALES";


//  Id pregunta: 812 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Cu&aacute;l de los siguientes no ser&iacute;a un motivo de abstenci&oacute;n conforme el art. 23 de la Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[67]= new Array();
 choices[67][0] = "Ser el personal respecto del que la abstenci&oacute;n se plantea sobrino del interesado en el procedimiento";
 choices[67][1] = "Ser el personal respecto del que la abstenci&oacute;n se plantea vecino del interesado en el procedimiento";
 choices[67][2] = "Ser el personal respecto del que la abstenci&oacute;n se plantea cu&ntilde;ado del interesado en el procedimiento";
 choices[67][3] = "Ser el personal respecto del que la abstenci&oacute;n se plantea nieto del interesado en el procedimiento";
 answers[67] = choices[67][2];
 units[67] = "4, 7, 8, 9";
 comments[67] = "Id Pregunta: 812. Ley 40/2015";


//  Id pregunta: 391 Año de creación de pregunta: 2016
 questions[68]= "69)  El T&iacute;tulo II de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombres se denomina:";
 choices[68]= new Array();
 choices[68][0] = "El principio de igualdad y la tutela contra la discriminaci&oacute;n.";
 choices[68][1] = "Objeto y &aacute;mbito de la Ley.";
 choices[68][2] = "Pol&iacute;ticas p&uacute;blicas para la igualdad.";
 choices[68][3] = "El derecho al trabajo en igualdad de oportunidades.";
 answers[68] = choices[68][2];
 units[68] = "14";
 comments[68] = "Id Pregunta: 391. POLITICAS DE IGUALDAD";


//  Id pregunta: 47 Año de creación de pregunta: 2016
 questions[69]= "70)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es propia de OCSP?";
 choices[69]= new Array();
 choices[69][0] = "Es un m&eacute;todo de validaci&oacute;n del estado de un certificado electr&oacute;nico que emplea suplementariamente la descarga y consulta de CRLs.";
 choices[69][1] = "Permite la consulta off-line del estado de revocaci&oacute;n de un certificado proporcionado por una autoridad de certificaci&oacute;n.";
 choices[69][2] = "No permite implementar mecanismos de tarificaci&oacute;n.";
 choices[69][3] = "Permite verificar el estado de los certificados mediante la consulta a una autoridad de validaci&oacute;n.";
 answers[69] = choices[69][3];
 units[69] = "78";
 comments[69] = "Id Pregunta: 47. AGE A1 2015";


//  Id pregunta: 578 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Qui&eacute;n elabor&oacute; y aprob&oacute; la Estrategia TIC?.";
 choices[70]= new Array();
 choices[70][0] = "Fue elaborada y aprobada por la CETIC";
 choices[70][1] = "Fue elaborada por la CETIC y aprobada por el gobierno";
 choices[70][2] = "Fue elaborada por el gobierno y aprobada por la CETIC";
 choices[70][3] = "Fue elaborada por la CETIC y aprobada por el MAFP (Ministerio de Administraciones y Funci&oacute;n P&uacute;blica)";
 answers[70] = choices[70][1];
 units[70] = "19";
 comments[70] = "Id Pregunta: 578. Estrategia TIC";


//  Id pregunta: 725 Año de creación de pregunta: 2016
 questions[71]= "72)  Sobre el Scrum Team, cual es la afirmaci&oacute;n falsa";
 choices[71]= new Array();
 choices[71][0] = "Cada miembro del equipo tiene que tener un rol especifico y no puede asumir tareas que no est&eacute;n dentro de su &aacute;rea de especializaci&oacute;n.";
 choices[71][1] = "Los miembros del equipo deben tener un perfil en &lsquo;T&rsquo;";
 choices[71][2] = "Cada miembro del equipo tiene que tener un conocimiento m&aacute;s amplio de un &aacute;rea";
 choices[71][3] = "Cada miembro del equipo puede asumir cualquier tipo de tarea.";
 answers[71] = choices[71][0];
 units[71] = "34, 84";
 comments[71] = "Id Pregunta: 725. Metodologias &aacute;giles";


//  Id pregunta: 37 Año de creación de pregunta: 2016
 questions[72]= "73)  Seg&uacute;n el proyecto GNU, &iquest;cu&aacute;l de las siguientes NO puede ser considerada una libertad esencial del software libre?";
 choices[72]= new Array();
 choices[72][0] = "La libertad de ejecutar el programa como se desee, con cualquier prop&oacute;sito.";
 choices[72][1] = "La libertad de estudiar c&oacute;mo funciona el programa, y modificarlo para que tenga la funcionalidad deseada.";
 choices[72][2] = "La libertad de redistribuir copias para ayudar al pr&oacute;jimo.";
 choices[72][3] = "La libertad de distribuir a terceros versiones modificadas siempre que no tengan uso comercial.";
 answers[72] = choices[72][3];
 units[72] = "66";
 comments[72] = "Id Pregunta: 37. AGE A1 2015";


//  Id pregunta: 789 Año de creación de pregunta: 2016
 questions[73]= "74)  Respecto a las unidades administrativas:";
 choices[73]= new Array();
 choices[73][0] = "pueden existir unidades administrativas complejas, que agrupen dos o m&aacute;s unidades mayores";
 choices[73][1] = "los jefes de las unidades administrativas son responsables del correcto funcionamiento de la unidad y de la adecuada ejecuci&oacute;n de las tareas asignadas a la misma";
 choices[73][2] = "las unidades administrativas se establecen mediante las relaciones de puestos de trabajo, que se aprobar&aacute;n de acuerdo con su regulaci&oacute;n espec&iacute;fica, y no se integran en ning&uacute;n &oacute;rgano determinado";
 choices[73][3] = "ninguna es correcta";
 answers[73] = choices[73][1];
 units[73] = "4, 7, 8, 9";
 comments[73] = "Id Pregunta: 789. Ley 40/2015";


//  Id pregunta: 182 Año de creación de pregunta: 2016
 questions[74]= "75)  De acuerdo con el T&iacute;tulo II de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; tutor del Rey menor:";
 choices[74]= new Array();
 choices[74][0] = "El que hubiere designado el familiar m&aacute;s cercano al Rey difunto.";
 choices[74][1] = "El que hubiere designado el Rey difunto en su testamento.";
 choices[74][2] = "El que hubieren designado las Cortes Generales.";
 choices[74][3] = "El que hubiere designado el Senado por mayor&iacute;a absoluta.";
 answers[74] = choices[74][1];
 units[74] = "1";
 comments[74] = "Id Pregunta: 182. CONSTITUCION1978";


