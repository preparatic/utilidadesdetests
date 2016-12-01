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

//  Id pregunta: 640 Año de creación de pregunta: 2016
 questions[0]= "1)  Indique cu&aacute;l de las siguientes afirmaciones es la correcta:";
 choices[0]= new Array();
 choices[0][0] = "Linux dispone de los tres principales protocolos de red para sistemas UNIX: Novel, TCP/IP y UUCP.";
 choices[0][1] = "Linux dispone &uacute;nicamente del protocolo TCP/IP.";
 choices[0][2] = "Linux dispone de todos los protocolos de red existentes.";
 choices[0][3] = "Linux dispone de los dos principales protocolos de red para sistemas UNIX: TCP/IP y UUCP.";
 answers[0] = choices[0][3];
 units[0] = "57";
 comments[0] = "Id Pregunta: 640. Junta de Extremadura A1 2015";
 preguntaids[0] = 640


//  Id pregunta: 751 Año de creación de pregunta: 2016
 questions[1]= "2)  En los or&iacute;genes te&oacute;ricos del t&eacute;rmino gobernanza se encuentra:";
 choices[1]= new Array();
 choices[1][0] = "Peters";
 choices[1][1] = "Hollingsworth";
 choices[1][2] = "Manuel Castells";
 choices[1][3] = "Gaebler";
 answers[1] = choices[1][1];
 units[1] = "20";
 comments[1] = "Id Pregunta: 751. Direcci&oacute;n p&uacute;blica";
 preguntaids[1] = 751


//  Id pregunta: 153 Año de creación de pregunta: 2016
 questions[2]= "3)  Se entiende por documentos p&uacute;blicos administrativos";
 choices[2]= new Array();
 choices[2][0] = "los v&aacute;lidamente emitidos por los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[2][1] = "los remitidos por personas f&iacute;sicas o jur&iacute;dicas a los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[2][2] = "a y b son correctas";
 choices[2][3] = "a y b son incorrectas";
 answers[2] = choices[2][0];
 units[2] = "7";
 comments[2] = "Id Pregunta: 153. Ley 39/2015, Art&iacute;culo 26";
 preguntaids[2] = 153


//  Id pregunta: 330 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Cu&aacute;les son las funciones de la Conferencia para Asuntos Relacionados con las Comunidades Europeas?:";
 choices[3]= new Array();
 choices[3][0] = "Garantizar el cumplimiento en las Conferencias Sectoriales de los procedimientos y f&oacute;rmulas de participaci&oacute;n de las Comunidades Aut&oacute;nomas.";
 choices[3][1] = "El tratamiento y resoluci&oacute;n con arreglo al principio de cooperaci&oacute;n de aquellas cuestiones de alcance general o contenido institucional relacionadas con las Comunidades Europeas.";
 choices[3][2] = "Todas son correctas.";
 choices[3][3] = "Informaci&oacute;n a las Comunidades Aut&oacute;nomas y la discusi&oacute;n en com&uacute;n sobre el desarrollo del proceso de constituci&oacute;n europea.";
 answers[3] = choices[3][2];
 units[3] = "5";
 comments[3] = "Id Pregunta: 330. UNION EUROPEA";
 preguntaids[3] = 330


//  Id pregunta: 466 Año de creación de pregunta: 2016
 questions[4]= "5)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, &iquest;existe la posibilidad de comprometer gastos para ejercicios futuros?";
 choices[4]= new Array();
 choices[4][0] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio futuro y 50% para los dem&aacute;s.";
 choices[4][1] = "No, los cr&eacute;ditos presupuestarios se agotan con el fin del ejercicio presupuestario.";
 choices[4][2] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio posterior; 60% para el segundo y 50% para tercero y cuarto.";
 choices[4][3] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 60% para el primer ejercicio futuro; 50% para el segundo y tercero y 40% para el cuarto.";
 answers[4] = choices[4][2];
 units[4] = "10";
 comments[4] = "Id Pregunta: 466. PRESUPUESTOS GENERALES";
 preguntaids[4] = 466


//  Id pregunta: 105 Año de creación de pregunta: 2016
 questions[5]= "6)  Entre las caracter&iacute;sticas de Big Data se encuentra:";
 choices[5]= new Array();
 choices[5][0] = "Gran volumen de informaci&oacute;n";
 choices[5][1] = "Gran variedad de datos";
 choices[5][2] = "Se analizan datos a gran velocidad";
 choices[5][3] = "Todas las anteriores son verdaderas";
 answers[5] = choices[5][3];
 units[5] = "73";
 comments[5] = "Id Pregunta: 105. ";
 preguntaids[5] = 105


//  Id pregunta: 273 Año de creación de pregunta: 2016
 questions[6]= "7)  Se&ntilde;ale la opci&oacute;n correcta";
 choices[6]= new Array();
 choices[6][0] = "Jenkins un servidor de integraci&oacute;n continua comercial.";
 choices[6][1] = "Extiende su funcionalidad a trav&eacute;s de plugins.";
 choices[6][2] = "Solamente soporta herramientas de control de versiones como CVS, Gity Clearcase.";
 choices[6][3] = "No posee un historial de cambios realizados por build o versi&oacute;n.";
 answers[6] = choices[6][1];
 units[6] = "92";
 comments[6] = "Id Pregunta: 273. INTEGRACION CONTINUA";
 preguntaids[6] = 273


//  Id pregunta: 139 Año de creación de pregunta: 2016
 questions[7]= "8)  Las siglas de SAREB, entidad privada creada por Real Decreto para ayudar al saneamiento del sector financiero espa&ntilde;ol, hacen referencia a:";
 choices[7]= new Array();
 choices[7][0] = "Sociedad de Gesti&oacute;n de Activos Procedentes de la Reestructuraci&oacute;n Bancaria.";
 choices[7][1] = "Static &amp; Active process for REsolution Bank.";
 choices[7][2] = "Sociedad de Ayudas Principales para la Resoluci&oacute;n Bancaria.";
 choices[7][3] = "Super Active REsponse for Banks";
 answers[7] = choices[7][0];
 units[7] = "12";
 comments[7] = "Id Pregunta: 139. Leyes modelo econ&oacute;mico";
 preguntaids[7] = 139


//  Id pregunta: 611 Año de creación de pregunta: 2016
 questions[8]= "9)  Dentro de las t&eacute;cnicas de clasificaci&oacute;n de datos tenemos los m&eacute;todos de clasificaci&oacute;n interna. &iquest;A qu&eacute; tipo de algoritmo de ordenaci&oacute;n o clasificaci&oacute;n pertenece el m&eacute;todo de la burbuja?";
 choices[8]= new Array();
 choices[8][0] = "Clasificaci&oacute;n por inserci&oacute;n.";
 choices[8][1] = "Clasificaci&oacute;n por cuenta.";
 choices[8][2] = "Clasificaci&oacute;n por selecci&oacute;n.";
 choices[8][3] = "Clasificaci&oacute;n por intercambio.";
 answers[8] = choices[8][3];
 units[8] = "56";
 comments[8] = "Id Pregunta: 611. Junta de Extremadura A1 2015";
 preguntaids[8] = 611


//  Id pregunta: 311 Año de creación de pregunta: 2016
 questions[9]= "10)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[9]= new Array();
 choices[9][0] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los tres quintos del n&uacute;mero de Estados miembros.";
 choices[9][1] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a las tres cuartas partes del n&uacute;mero de Estados miembros.";
 choices[9][2] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los dos tercios del n&uacute;mero de Estados miembros.";
 choices[9][3] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a un nacional por cada Estado miembro.";
 answers[9] = choices[9][2];
 units[9] = "5";
 comments[9] = "Id Pregunta: 311. UNION EUROPEA";
 preguntaids[9] = 311


//  Id pregunta: 418 Año de creación de pregunta: 2016
 questions[10]= "11)  Respetar&aacute;n la igualdad entre mujeres y hombres evitando cualquier forma de discriminaci&oacute;n, los medios de comunicaci&oacute;n de titularidad:";
 choices[10]= new Array();
 choices[10][0] = "P&uacute;blica.";
 choices[10][1] = "Privada.";
 choices[10][2] = "A y B son correctas.";
 choices[10][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[10] = choices[10][2];
 units[10] = "14";
 comments[10] = "Id Pregunta: 418. POLITICAS DE IGUALDAD";
 preguntaids[10] = 418


//  Id pregunta: 832 Año de creación de pregunta: 2016
 questions[11]= "12)  Contra las resoluciones en materia de abstenci&oacute;n y recusaci&oacute;n...";
 choices[11]= new Array();
 choices[11][0] = "Cabr&aacute; recurso de alzada";
 choices[11][1] = "Cabr&aacute; el nuevo protesto";
 choices[11][2] = "Cabr&aacute; recurso de reposici&oacute;n";
 choices[11][3] = "No cabr&aacute; recurso alguno";
 answers[11] = choices[11][3];
 units[11] = "4, 7, 8, 9";
 comments[11] = "Id Pregunta: 832. Ley 40/2015";
 preguntaids[11] = 832


//  Id pregunta: 762 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Cu&aacute;l de los siguientes es uno de los pilares en los que se fundamenta la Estrategia del Mercado &Uacute;nico Digital?";
 choices[12]= new Array();
 choices[12][0] = "Mejorar el acceso de los consumidores y empresas a los bienes y servicios digitales en Europa";
 choices[12][1] = "Aplicar est&aacute;ndares de calidad a los servicios digitales en Europa";
 choices[12][2] = "Apertura al exterior";
 choices[12][3] = "I+D+i como forma de mejorar los servicios digitales de las empresas europeas";
 answers[12] = choices[12][0];
 units[12] = "17";
 comments[12] = "Id Pregunta: 762. Mercado &Uacute;nico Digital";
 preguntaids[12] = 762


//  Id pregunta: 513 Año de creación de pregunta: 2016
 questions[13]= "14)  Cuando resulte eficaz, proporcionado y necesario para la consecuci&oacute;n de los fines propios del procedimiento, y de manera motivada, podr&aacute;n incluirse tr&aacute;mites adicionales o distintos a los contemplados en esta Ley:";
 choices[13]= new Array();
 choices[13][0] = "solo mediante ley";
 choices[13][1] = "reglamentariamente";
 choices[13][2] = "mediante ley o reglamentariamente";
 choices[13][3] = "ninguna es correcta";
 answers[13] = choices[13][0];
 units[13] = "7";
 comments[13] = "Id Pregunta: 513. LEY 39/2015";
 preguntaids[13] = 513


//  Id pregunta: 473 Año de creación de pregunta: 2016
 questions[14]= "15)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la agrupaci&oacute;n de los cr&eacute;ditos en cap&iacute;tulos, art&iacute;culos, conceptos y subconceptos corresponde a la clasificaci&oacute;n:";
 choices[14]= new Array();
 choices[14][0] = "Org&aacute;nica.";
 choices[14][1] = "Contable.";
 choices[14][2] = "Econ&oacute;mica.";
 choices[14][3] = "Por programas.";
 answers[14] = choices[14][2];
 units[14] = "10";
 comments[14] = "Id Pregunta: 473. PRESUPUESTOS GENERALES";
 preguntaids[14] = 473


//  Id pregunta: 138 Año de creación de pregunta: 2016
 questions[15]= "16)  La ley que obliga a todas las Administraciones a presentar equilibrio estructural en sus cuentas p&uacute;blicas y establece un l&iacute;mite de deuda como garant&iacute;a de sostenibilidad presupuestaria, es:";
 choices[15]= new Array();
 choices[15][0] = "La Ley Org&aacute;nica 2/2011";
 choices[15][1] = "La Ley Org&aacute;nica 2/2012";
 choices[15][2] = "La Ley Org&aacute;nica 3/2012";
 choices[15][3] = "La Ley Org&aacute;nica 2/2002";
 answers[15] = choices[15][1];
 units[15] = "12";
 comments[15] = "Id Pregunta: 138. Leyes modelo econ&oacute;mico";
 preguntaids[15] = 138


//  Id pregunta: 737 Año de creación de pregunta: 2016
 questions[16]= "17)  Son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[16]= new Array();
 choices[16][0] = "Tranparencia, Innovaci&oacute;n, Unidad y visi&oacute;n integral y Orientaci&oacute;n al usuario del servicio";
 choices[16][1] = "Tranparencia, Colaboraci&oacute;n y alianzas, Orientaci&oacute;n al usuario del servicio y Reutilizaci&oacute;n";
 choices[16][2] = "Reutilizaci&oacute;n, Seguridad, Orientaci&oacute;n al usuario del servicio y Transparencia";
 choices[16][3] = "Ninguna de las anteriores";
 answers[16] = choices[16][0];
 units[16] = "28";
 comments[16] = "Id Pregunta: 737. Estrategia TIC";
 preguntaids[16] = 737


//  Id pregunta: 591 Año de creación de pregunta: 2016
 questions[17]= "18)  Son servicios declarados compartidos:";
 choices[17]= new Array();
 choices[17][0] = "Servicio unificado de telecomunicaciones y servicio de seguridad gestionada";
 choices[17][1] = "Servicio multicanal de atenci&oacute;n al ciudadano";
 choices[17][2] = "Servicio com&uacute;n de generaci&oacute;n y validaci&oacute;n de firmas electr&oacute;nicas";
 choices[17][3] = "Todos los anteriores";
 answers[17] = choices[17][3];
 units[17] = "19";
 comments[17] = "Id Pregunta: 591. Estrategia TIC";
 preguntaids[17] = 591


//  Id pregunta: 586 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Con qu&eacute; frecuencia se revisa la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE, para su alineamiento con las pol&iacute;ticas p&uacute;blicas del gobierno?";
 choices[18]= new Array();
 choices[18][0] = "Bienalmente";
 choices[18][1] = "Anualmente";
 choices[18][2] = "Semestralmente";
 choices[18][3] = "Cada cuatro a&ntilde;os";
 answers[18] = choices[18][1];
 units[18] = "19";
 comments[18] = "Id Pregunta: 586. Estrategia TIC";
 preguntaids[18] = 586


//  Id pregunta: 525 Año de creación de pregunta: 2016
 questions[19]= "20)  Se consideran interesados en el procedimiento administrativo:";
 choices[19]= new Array();
 choices[19][0] = "quienes lo promuevan como titulares de derechos o intereses leg&iacute;timos individuales o colectivos";
 choices[19][1] = "los que, habiendo iniciado el procedimiento, tengan derechos que puedan resultar afectados por la decisi&oacute;n que en el mismo se adopte";
 choices[19][2] = "aquellos cuyos intereses leg&iacute;timos, individuales o colectivos, puedan resultar afectados por la resoluci&oacute;n y se personen en el procedimiento durante el tr&aacute;mite de audiencia";
 choices[19][3] = "todas son correctas";
 answers[19] = choices[19][0];
 units[19] = "7";
 comments[19] = "Id Pregunta: 525. LEY 39/2015";
 preguntaids[19] = 525


//  Id pregunta: 623 Año de creación de pregunta: 2016
 questions[20]= "21)  Seg&uacute;n el paradigma de Orientaci&oacute;n a Objetos, la herencia posibilita que:";
 choices[20]= new Array();
 choices[20][0] = "Cualquier cambio en los datos y operaciones contenidas dentro de una superclase es heredado inmediatamente por todas las subclases que se derivan de la superclase.";
 choices[20][1] = "Cualquier cambio en las operaciones y datos de la superclase no se refleja en todas las subclases.";
 choices[20][2] = "Cualquier cambio en una de las subclases que se heredan de la superclase se refleja en sus clases hermanas.";
 choices[20][3] = "En el paradigma de Orientaci&oacute;n a Objetos no existe la herencia.";
 answers[20] = choices[20][0];
 units[20] = "89";
 comments[20] = "Id Pregunta: 623. Junta de Extremadura A1 2015";
 preguntaids[20] = 623


//  Id pregunta: 732 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es especifican de Kanban?:";
 choices[21]= new Array();
 choices[21][0] = "Se definen iteraciones";
 choices[21][1] = "Se limitan las tareas que se pueden realizar por fase";
 choices[21][2] = "Los miembros del equipo no tienen un rol especifico";
 choices[21][3] = "Todas las anteriores son caracter&iacute;sticas de la metodolog&iacute;a Kanban.";
 answers[21] = choices[21][1];
 units[21] = "34, 84";
 comments[21] = "Id Pregunta: 732. Metodologias &aacute;giles";
 preguntaids[21] = 732


//  Id pregunta: 211 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;A cu&aacute;ntos miembros del Tribunal Constitucional corresponde proponer al Gobierno?";
 choices[22]= new Array();
 choices[22][0] = "Cuatro.";
 choices[22][1] = "Ninguno.";
 choices[22][2] = "Dos.";
 choices[22][3] = "Seis.";
 answers[22] = choices[22][2];
 units[22] = "1";
 comments[22] = "Id Pregunta: 211. CONSTITUCION1978";
 preguntaids[22] = 211


//  Id pregunta: 202 Año de creación de pregunta: 2016
 questions[23]= "24)  Se&ntilde;ale c&oacute;mo se re&uacute;nen los miembros del Gobierno:";
 choices[23]= new Array();
 choices[23][0] = "En Consejo de Ministros y en Comisiones Delegadas del Gobierno.";
 choices[23][1] = "En Consejo de Ministros y en Consejo de Vicepresidentes.";
 choices[23][2] = "En Consejo de Ministros y en Comisiones Delegadas de las Cortes Generales.";
 choices[23][3] = "En Comisiones Delegadas del Gobierno y Consejo de Estado.";
 answers[23] = choices[23][0];
 units[23] = "1";
 comments[23] = "Id Pregunta: 202. CONSTITUCION1978";
 preguntaids[23] = 202


//  Id pregunta: 20 Año de creación de pregunta: 2016
 questions[24]= "25)  Con respecto al &aacute;mbito objetivo de aplicaci&oacute;n de la Ley 37/2007, de 16 de noviembre, sobre reutilizaci&oacute;n de la informaci&oacute;n del sector p&uacute;blico:";
 choices[24]= new Array();
 choices[24][0] = "Abarca el intercambio de documentos entre Administraciones y organismos del sector p&uacute;blico en el ejercicio de las funciones p&uacute;blicas que tengan atribuidas.";
 choices[24][1] = "Ser&aacute; aplicable incluso sobre los documentos que obran en las Administraciones y organismos del sector p&uacute;blico para finalidades ajenas a sus funciones de servicio p&uacute;blico.";
 choices[24][2] = "No afecta a la existencia de derechos de propiedad intelectual de las Administraciones y organismos del sector p&uacute;blico ni a su posesi&oacute;n por &eacute;stos.";
 choices[24][3] = "Fija la prevalencia del derecho fundamental a la protecci&oacute;n de datos de car&aacute;cter personal, a&uacute;n cuando se apliquen medidas de disociaci&oacute;n de datos.";
 answers[24] = choices[24][2];
 units[24] = "27";
 comments[24] = "Id Pregunta: 20. AGE A1 2015";
 preguntaids[24] = 20


//  Id pregunta: 477 Año de creación de pregunta: 2016
 questions[25]= "26)  De conformidad con el art&iacute;culo 29.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales se remitir&aacute;n:";
 choices[25]= new Array();
 choices[25][0] = "Anualmente.";
 choices[25][1] = "Ninguna de las respuestas es correcta.";
 choices[25][2] = "Trimestralmente.";
 choices[25][3] = "Semestralmente.";
 answers[25] = choices[25][0];
 units[25] = "10";
 comments[25] = "Id Pregunta: 477. PRESUPUESTOS GENERALES";
 preguntaids[25] = 477


//  Id pregunta: 378 Año de creación de pregunta: 2016
 questions[26]= "27)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[26]= new Array();
 choices[26][0] = "Quince miembros.";
 choices[26][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[26][2] = "Los miembros que determine el Consejo.";
 choices[26][3] = "Un Presidente y quince miembros.";
 answers[26] = choices[26][1];
 units[26] = "14";
 comments[26] = "Id Pregunta: 378. UNION EUROPEA";
 preguntaids[26] = 378


//  Id pregunta: 682 Año de creación de pregunta: 2016
 questions[27]= "28)  Seg&uacute;n el Real Decreto Ley 5/2013, de 15 de marzo, de medidas para favorecer la continuidad de la vida laboral de los trabajadores de mayor edad y promover el envejecimiento activo:";
 choices[27]= new Array();
 choices[27][0] = "La cuant&iacute;a de la pensi&oacute;n de jubilaci&oacute;n compatible con el trabajo ser&aacute; equivalente al 50 por 100 del importe resultante en el reconocimiento inicial, una vez aplicado, si procede, el l&iacute;mite m&aacute;ximo de pensi&oacute;n p&uacute;blica, o del que se est&eacute; percibiendo, en el momento de inicio de la compatibilidad con el trabajo, excluido, en todo caso, el complemento por m&iacute;nimos, cualquiera que sea la jornada laboral o la actividad que realice el pensionista.";
 choices[27][1] = "El trabajo compatible debe realizarse a tiempo parcial.";
 choices[27][2] = "Finalizada la relaci&oacute;n laboral por cuenta ajena o producido el cese en la actividad por cuenta propia, se restablecer&aacute; el percibo &iacute;ntegro de la pensi&oacute;n de jubilaci&oacute;n transcurridos 12 meses de la finalizaci&oacute;n de la relaci&oacute;n laboral.";
 choices[27][3] = "El acceso a la pensi&oacute;n podr&aacute; tener lugar hasta 5 a&ntilde;os antes de la edad que en cada caso resulte de aplicaci&oacute;n.";
 answers[27] = choices[27][0];
 units[27] = "14";
 comments[27] = "Id Pregunta: 682. Pensiones";
 preguntaids[27] = 682


//  Id pregunta: 167 Año de creación de pregunta: 2016
 questions[28]= "29)  Una de las preocupaciones de la Agenda Digital Europea es la &ldquo;exclusi&oacute;n digital&rdquo;. Para combatirla, se incluyen medidas como...";
 choices[28]= new Array();
 choices[28][0] = "incrementar la eficiencia energ&eacute;tica y reducir la energ&iacute;a que se usa en los hogares";
 choices[28][1] = "incrementar el ratio de participaci&oacute;n de personas con discapacidad en actividades p&uacute;blicas, sociales y econ&oacute;micas a trav&eacute;s de proyectos de inclusi&oacute;n.";
 choices[28][2] = "implementar un sistema de firma electr&oacute;nica seguro que funcione en cualquiera de los Estados Miembros";
 choices[28][3] = "apoyar las pol&iacute;ticas del sector audiovisual en pos de las personas con discapacidad";
 answers[28] = choices[28][1];
 units[28] = "19";
 comments[28] = "Id Pregunta: 167. https://ec.europa.eu/digital-single-market/en/digital-inclusion-better-eu-society";
 preguntaids[28] = 167


//  Id pregunta: 522 Año de creación de pregunta: 2016
 questions[29]= "30)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se denomina:";
 choices[29]= new Array();
 choices[29][0] = "De los interesados en el procedimiento";
 choices[29][1] = "De la actividad de las Administraciones P&uacute;blicas";
 choices[29][2] = "Disposiciones generales";
 choices[29][3] = "De los actos administrativos";
 answers[29] = choices[29][2];
 units[29] = "7";
 comments[29] = "Id Pregunta: 522. LEY 39/2015";
 preguntaids[29] = 522


//  Id pregunta: 491 Año de creación de pregunta: 2016
 questions[30]= "31)  A tenor del art&iacute;culo 47.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el n&uacute;mero de ejercicios a que pueden aplicarse los gastos no ser&aacute; superior a:";
 choices[30]= new Array();
 choices[30][0] = "Dos.";
 choices[30][1] = "Cuatro.";
 choices[30][2] = "Cinco.";
 choices[30][3] = "Tres.";
 answers[30] = choices[30][1];
 units[30] = "10";
 comments[30] = "Id Pregunta: 491. PRESUPUESTOS GENERALES";
 preguntaids[30] = 491


//  Id pregunta: 290 Año de creación de pregunta: 2016
 questions[31]= "32)  El Parlamento Europeo celebrar&aacute;:";
 choices[31]= new Array();
 choices[31][0] = "Cada a&ntilde;o un per&iacute;odo de sesiones.";
 choices[31][1] = "Los per&iacute;odos de sesiones se dividen de febrero a junio y de septiembre a diciembre.";
 choices[31][2] = "Cada a&ntilde;o tres per&iacute;odos de sesiones.";
 choices[31][3] = "Las sesiones del Parlamento no se dividen en per&iacute;odos de sesiones.";
 answers[31] = choices[31][0];
 units[31] = "5";
 comments[31] = "Id Pregunta: 290. UNION EUROPEA";
 preguntaids[31] = 290


//  Id pregunta: 668 Año de creación de pregunta: 2016
 questions[32]= "33)  Seg&uacute;n el art&iacute;culo 73 de la Ley 39/2015, el plazo para el el cumplimiento de tr&aacute;mites que deban ser cumplimentados por el interesado, es por defecto:";
 choices[32]= new Array();
 choices[32][0] = "10 d&iacute;as.";
 choices[32][1] = "15 d&iacute;as.";
 choices[32][2] = "1 mes.";
 choices[32][3] = "No se establece ning&uacute;n plazo por defecto.";
 answers[32] = choices[32][0];
 units[32] = "7";
 comments[32] = "Id Pregunta: 668. Art&iacute;culo 73 de la Ley 39/2015";
 preguntaids[32] = 668


//  Id pregunta: 827 Año de creación de pregunta: 2016
 questions[33]= "34)  La actuaci&oacute;n de autoridades y personal al servicio de las Administraciones P&uacute;blicas en los que concurran motivos de abstenci&oacute;n ...";
 choices[33]= new Array();
 choices[33][0] = "No implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido pero dar&aacute; lugar a la responsabilidad que proceda";
 choices[33][1] = "Dar&aacute; lugar a la responsabilidad que proceda pero no implicar&aacute; en ning&uacute;n caso la invalidez de los actos en que hayan intervenido";
 choices[33][2] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido";
 choices[33][3] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido dando lugar a la responsabilidad que proceda";
 answers[33] = choices[33][1];
 units[33] = "4, 7, 8, 9";
 comments[33] = "Id Pregunta: 827. Ley 40/2015";
 preguntaids[33] = 827


//  Id pregunta: 820 Año de creación de pregunta: 2016
 questions[34]= "35)  Respecto a los servicios territoriales es correcto:";
 choices[34]= new Array();
 choices[34][0] = "la organizaci&oacute;n de los servicios territoriales no integrados en las Delegaciones del Gobierno se establecer&aacute; mediante Real Decreto";
 choices[34][1] = "los servicios territoriales no integrados depender&aacute;n del Delegado del Gobierno, o en su caso Subdelegado del Gobierno, a trav&eacute;s de la Secretar&iacute;a General";
 choices[34][2] = "los servicios territoriales integrados depender&aacute;n del &oacute;rgano central competente sobre el sector de actividad en el que aqu&eacute;llos operen";
 choices[34][3] = "ninguna es correcta";
 answers[34] = choices[34][0];
 units[34] = "4, 7, 8, 9";
 comments[34] = "Id Pregunta: 820. Ley 40/2015";
 preguntaids[34] = 820


//  Id pregunta: 530 Año de creación de pregunta: 2016
 questions[35]= "36)  Podr&aacute;n actuar en representaci&oacute;n de otras ante las Administraciones P&uacute;blicas:";
 choices[35]= new Array();
 choices[35][0] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[35][1] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[35][2] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 choices[35][3] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 answers[35] = choices[35][3];
 units[35] = "7";
 comments[35] = "Id Pregunta: 530. LEY 39/2015";
 preguntaids[35] = 530


//  Id pregunta: 677 Año de creación de pregunta: 2016
 questions[36]= "37)  En referencia al proyecto ANDES, para la comunicaci&oacute;n telem&aacute;tica de Nacimientos desde Centros Sanitarios a Registros Civiles, indique cual de las siguientes afirmaciones es falsa:";
 choices[36]= new Array();
 choices[36][0] = "Tiene sustento legal de acuerdo a la Ley 19/2015, de 13 de julio, de medidas de reforma administrativa en el &aacute;mbito de la Administraci&oacute;n de Justicia y del Registro Civil.";
 choices[36][1] = "Se inicia a partir de su propuesta en CORA (Comisi&oacute;n para la Reforma de las Administraciones P&uacute;blicas).";
 choices[36][2] = "Reutiliza el servicio horizontal ACCEDA en modo cloud, lo cual ha facilitado la pronta puesta en marcha de la soluci&oacute;n.";
 choices[36][3] = "La utilizaci&oacute;n de ANDES por parte de los hospitales es completamente transparente, sin necesidad de realizar pasos previos para su despliegue.";
 answers[36] = choices[36][3];
 units[36] = "47";
 comments[36] = "Id Pregunta: 677. Inscripci&oacute;n autom&aacute;tica nacimientos";
 preguntaids[36] = 677


//  Id pregunta: 47 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es propia de OCSP?";
 choices[37]= new Array();
 choices[37][0] = "Es un m&eacute;todo de validaci&oacute;n del estado de un certificado electr&oacute;nico que emplea suplementariamente la descarga y consulta de CRLs.";
 choices[37][1] = "Permite la consulta off-line del estado de revocaci&oacute;n de un certificado proporcionado por una autoridad de certificaci&oacute;n.";
 choices[37][2] = "No permite implementar mecanismos de tarificaci&oacute;n.";
 choices[37][3] = "Permite verificar el estado de los certificados mediante la consulta a una autoridad de validaci&oacute;n.";
 answers[37] = choices[37][3];
 units[37] = "78";
 comments[37] = "Id Pregunta: 47. AGE A1 2015";
 preguntaids[37] = 47


//  Id pregunta: 288 Año de creación de pregunta: 2016
 questions[38]= "39)  Cu&aacute;l no es uno de los pilares que cimientan el Plan de Acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[38]= new Array();
 choices[38][0] = "Configuraci&oacute;n de un marco que habilite la movilidad transfronteriza mediante los servicios p&uacute;blicos digitales;";
 choices[38][1] = "Facilitar la interacci&oacute;n digital con ciudadanos y empresas mediante AA.PP. abiertas y flexibles que impliquen a los actores interesados en el dise&ntilde;o de pol&iacute;ticas y servicios de una forma colaborativa;";
 choices[38][2] = "Sociedad digital integradora, donde los ciudadanos tengan las cualificaciones adecuadas para aprovechar las oportunidades ofrecidas por Internet.";
 choices[38][3] = "Puesta a disposici&oacute;n de habilitadores y facilitadores claves, servicios y activos reutilizables.";
 answers[38] = choices[38][2];
 units[38] = "5";
 comments[38] = "Id Pregunta: 288. UNION EUROPEA";
 preguntaids[38] = 288


//  Id pregunta: 302 Año de creación de pregunta: 2016
 questions[39]= "40)  El Presidente del Tribunal de Cuentas es elegido para un per&iacute;odo de:";
 choices[39]= new Array();
 choices[39][0] = "Cinco a&ntilde;os.";
 choices[39][1] = "Cuatro a&ntilde;os.";
 choices[39][2] = "Tres a&ntilde;os.";
 choices[39][3] = "Seis meses.";
 answers[39] = choices[39][2];
 units[39] = "5";
 comments[39] = "Id Pregunta: 302. UNION EUROPEA";
 preguntaids[39] = 302


//  Id pregunta: 752 Año de creación de pregunta: 2016
 questions[40]= "41)  Es falso que:";
 choices[40]= new Array();
 choices[40][0] = "Son rasgos del modelo burocr&aacute;tico el pleno sometimiento al ordenamiento jur&iacute;dico y la impersonalidad en las relaciones.";
 choices[40][1] = "La Nueva Gesti&oacute;n P&uacute;blica ha sido el paradigma de reforma administrativa prevaleciente hasta principios de los 90, que tuvo gran influencia en los pa&iacute;ses angloamericanos y n&oacute;rdicos.";
 choices[40][2] = "Es un rasgo de la Nueva Gesti&oacute;n P&uacute;blica la terciarizaci&oacute;n de las actividades auxiliares o de apoyo, que pasan a ser licitadas competitivamente en el mercado.";
 choices[40][3] = "Una de las desventajas del modelo de la gobernanza es las redes pueden obstaculizar los cambios e innovaciones pol&iacute;ticos al dar un peso excesivo a los diversos intereses implicados.";
 answers[40] = choices[40][1];
 units[40] = "20";
 comments[40] = "Id Pregunta: 752. Direcci&oacute;n p&uacute;blica";
 preguntaids[40] = 752


//  Id pregunta: 193 Año de creación de pregunta: 2016
 questions[41]= "42)  El defensor del pueblo ser&aacute; elegido por las Cortes Generales para un per&iacute;odo de:";
 choices[41]= new Array();
 choices[41][0] = "3 a&ntilde;os.";
 choices[41][1] = "5 a&ntilde;os.";
 choices[41][2] = "4 a&ntilde;os.";
 choices[41][3] = "6 a&ntilde;os.";
 answers[41] = choices[41][1];
 units[41] = "1";
 comments[41] = "Id Pregunta: 193. CONSTITUCION1978";
 preguntaids[41] = 193


//  Id pregunta: 13 Año de creación de pregunta: 2016
 questions[42]= "43)  JNDI se usa para el acceso a:";
 choices[42]= new Array();
 choices[42][0] = "Datos de ficheros";
 choices[42][1] = "Sistemas gestores de bases de datos";
 choices[42][2] = "Directorios de nombres";
 choices[42][3] = "Colas de mensajer&iacute;a";
 answers[42] = choices[42][2];
 units[42] = "64";
 comments[42] = "Id Pregunta: 13. AGE A1 2015";
 preguntaids[42] = 13


//  Id pregunta: 93 Año de creación de pregunta: 2016
 questions[43]= "44)  Entre las tecnolog&iacute;as o herramientas utilizadas para trabajar en sistemas de Big Data NO se encuentra:";
 choices[43]= new Array();
 choices[43][0] = "Almacenamiento orientado a columnas";
 choices[43][1] = "Framework MapReduce";
 choices[43][2] = "OLTP";
 choices[43][3] = "Bases de datos clave-valor";
 answers[43] = choices[43][2];
 units[43] = "73";
 comments[43] = "Id Pregunta: 93. AGE A1 2015";
 preguntaids[43] = 93


//  Id pregunta: 333 Año de creación de pregunta: 2016
 questions[44]= "45)  Est&aacute;n legitimados para interponer el recurso de carencia del art. 175 TCE:";
 choices[44]= new Array();
 choices[44][0] = "Las instituciones comunitarias.";
 choices[44][1] = "Los Estados miembros y las instituciones comunitarias.";
 choices[44][2] = "Los Estados miembros.";
 choices[44][3] = "Los nacionales de los Estados miembros.";
 answers[44] = choices[44][1];
 units[44] = "5";
 comments[44] = "Id Pregunta: 333. UNION EUROPEA";
 preguntaids[44] = 333


//  Id pregunta: 704 Año de creación de pregunta: 2016
 questions[45]= "46)  En el modelo de integraci&oacute;n continua se recomienda:";
 choices[45]= new Array();
 choices[45][0] = "Mantener un repositorio de c&oacute;digo.";
 choices[45][1] = "Realizar una migraci&oacute;n manual y controlada a cada entorno de desarrollo.";
 choices[45][2] = "Realizar las construcciones de versiones agrupando m&uacute;ltiples commits para optimizar el tiempo de proceso.";
 choices[45][3] = "Realizar las pruebas en el entorno de producci&oacute;n para obtener resultados reales.";
 answers[45] = choices[45][1];
 units[45] = "92";
 comments[45] = "Id Pregunta: 704. INTEGRACION CONTINUA";
 preguntaids[45] = 704


//  Id pregunta: 374 Año de creación de pregunta: 2016
 questions[46]= "47)  Las instituciones de la Uni&oacute;n Europea son:";
 choices[46]= new Array();
 choices[46][0] = "El Consejo, la Comisi&oacute;n, el Parlamento y el Tribunal de Justicia.";
 choices[46][1] = "El Consejo, el Parlamento y el Tribunal de Justicia.";
 choices[46][2] = "El Consejo, el Parlamento y la Comisi&oacute;n.";
 choices[46][3] = "El Consejo, la Comisi&oacute;n, el Parlamento Europeo, el Tribunal de Justicia y el Tribunal de Cuentas.";
 answers[46] = choices[46][3];
 units[46] = "5";
 comments[46] = "Id Pregunta: 374. UNION EUROPEA";
 preguntaids[46] = 374


//  Id pregunta: 753 Año de creación de pregunta: 2016
 questions[47]= "48)  En el contexto de la Ley 20/2013, de garant&iacute;a de la unidad de mercado, se considerar&aacute; que concurren los principios de necesidad y proporcionalidad para la exigencia de una autorizaci&oacute;n:";
 choices[47]= new Array();
 choices[47][0] = "Respecto a los operadores econ&oacute;micos, cuando est&eacute; justificado por razones de orden p&uacute;blico aunque &eacute;stas puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n.";
 choices[47][1] = "Respecto a las instalaciones o infraestructuras f&iacute;sicas necesarias para el ejercicio de actividades econ&oacute;micas, cuando sean susceptibles de generar da&ntilde;os sobre el medio ambiente y el entorno urbano, la seguridad o la salud p&uacute;blica y el patrimonio hist&oacute;rico-art&iacute;stico, y estas razones no puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n";
 choices[47][2] = "b) y d) son verdaderas";
 choices[47][3] = "Cuando as&iacute; se disponga reglamentariamente";
 answers[47] = choices[47][1];
 units[47] = "23";
 comments[47] = "Id Pregunta: 753. Direcci&oacute;n p&uacute;blica";
 preguntaids[47] = 753


//  Id pregunta: 800 Año de creación de pregunta: 2016
 questions[48]= "49)  Las unidades administrativas comprenden puestos de trabajo o dotaciones de plantilla:";
 choices[48]= new Array();
 choices[48][0] = "vinculados funcionalmente por raz&oacute;n de sus cometidos y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[48][1] = "vinculados org&aacute;nicamente por raz&oacute;n de sus cometidos y funcionalmente por una jefatura com&uacute;n";
 choices[48][2] = "vinculados funcionalmente por raz&oacute;n de su territorio y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[48][3] = "vinculados org&aacute;nicamente por raz&oacute;n de su territorio y funcionalmente por una jefatura com&uacute;n";
 answers[48] = choices[48][0];
 units[48] = "4, 7, 8, 9";
 comments[48] = "Id Pregunta: 800. Ley 40/2015";
 preguntaids[48] = 800


//  Id pregunta: 713 Año de creación de pregunta: 2016
 questions[49]= "50)  En relaci&oacute;n al Portal de Transparencia de la AGE:";
 choices[49]= new Array();
 choices[49][0] = "La informaci&oacute;n m&aacute;s relevante para el ciudadano y de frecuente acceso estar&aacute; disponible en el Portal de Transparencia, no pudiendo accederse a informaci&oacute;n que no se encuentre ya publicada.";
 choices[49][1] = "El ejercicio del Derecho de Acceso abre con la administraci&oacute;n un procedimiento administrativo que exige la identificaci&oacute;n del solicitante.";
 choices[49][2] = "En el Portal de Transparencia de la AGE s&oacute;lo se puede acceder a informaci&oacute;n de tipo institucional.";
 choices[49][3] = "El CTBG es el responsable del Portal de Transparencia.";
 answers[49] = choices[49][1];
 units[49] = "22";
 comments[49] = "Id Pregunta: 713. Portal de Transparencia";
 preguntaids[49] = 713


//  Id pregunta: 698 Año de creación de pregunta: 2016
 questions[50]= "51)  Se&ntilde;ale el que corresponde a un principio de integraci&oacute;n continua:";
 choices[50]= new Array();
 choices[50][0] = "Migraci&oacute;n manual y controlada a cada entorno de desarrollo";
 choices[50][1] = "Mantener un repositorio de c&oacute;digo.";
 choices[50][2] = "Reutilizaci&oacute;n de interfaces de usuario.";
 choices[50][3] = "Todos corresponden a principios de integraci&oacute;n continua.";
 answers[50] = choices[50][1];
 units[50] = "92";
 comments[50] = "Id Pregunta: 698. INTEGRACION CONTINUA";
 preguntaids[50] = 698


//  Id pregunta: 572 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Cu&aacute;l de los siguientes datos es err&oacute;neo en 2016?";
 choices[51]= new Array();
 choices[51][0] = "El PIB se encuentra cerca de un bill&oacute;n";
 choices[51][1] = "La Deuda P&uacute;blica est&aacute; alrededor del 100% del PIB";
 choices[51][2] = "El D&eacute;ficit P&uacute;blico est&aacute; en torno al 2% del PIB";
 choices[51][3] = "La tasa de desempleo ronda el 20%";
 answers[51] = choices[51][2];
 units[51] = "12";
 comments[51] = "Id Pregunta: 572. Modelo econ&oacute;mico";
 preguntaids[51] = 572


//  Id pregunta: 799 Año de creación de pregunta: 2016
 questions[52]= "53)  Los elementos organizativos b&aacute;sicos de las estructuras org&aacute;nicas son:";
 choices[52]= new Array();
 choices[52][0] = "los &oacute;rganos administrativos";
 choices[52][1] = "las entidades dependientes";
 choices[52][2] = "las unidades administrativas";
 choices[52][3] = "los servicios comunes";
 answers[52] = choices[52][2];
 units[52] = "4, 7, 8, 9";
 comments[52] = "Id Pregunta: 799. Ley 40/2015";
 preguntaids[52] = 799


//  Id pregunta: 162 Año de creación de pregunta: 2016
 questions[53]= "54)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones";
 choices[53]= new Array();
 choices[53][0] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[53][1] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro de las setenta y dos horas contadas a partir de las 8:00 horas del d&iacute;a laborable siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[53][2] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 00:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 choices[53][3] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 24 horas contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 answers[53] = choices[53][0];
 units[53] = "19";
 comments[53] = "Id Pregunta: 162. La respuesta B es la antigua redacci&oacute;n";
 preguntaids[53] = 162


//  Id pregunta: 756 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;Cu&aacute;l de los siguientes no es un eje del Plan de Servicios P&uacute;blicos Digitales que forma parte de la Agenda Digital para Espa&ntilde;a?";
 choices[54]= new Array();
 choices[54][0] = "Programa de Educaci&oacute;n Digital";
 choices[54][1] = "Programa de Salud y Bienestar Social";
 choices[54][2] = "Programa de Administraci&oacute;n de Justicia Digital";
 choices[54][3] = "Programa de capacitaci&oacute;n de profesionales TIC";
 answers[54] = choices[54][3];
 units[54] = "19";
 comments[54] = "Id Pregunta: 756. Agenda Digital para Espa&ntilde;a";
 preguntaids[54] = 756


//  Id pregunta: 35 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Qu&eacute; es Java Web Start?";
 choices[55]= new Array();
 choices[55][0] = "Un motor para la ejecuci&oacute;n de Java Serlvets y JavaServer Pages.";
 choices[55][1] = "Una interfaz de programaci&oacute;n para entornos de ventanas en Java.";
 choices[55][2] = "Una tecnolog&iacute;a de compiladores empleada por Java.";
 choices[55][3] = "Una tecnolog&iacute;a que permite descargar y ejecutar aplicaciones Java.";
 answers[55] = choices[55][3];
 units[55] = "64";
 comments[55] = "Id Pregunta: 35. AGE A1 2015";
 preguntaids[55] = 35


//  Id pregunta: 851 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Qu&eacute; m&eacute;todo de replicaci&oacute;n remota entre sistemas de almacenamiento se ve m&aacute;s afectada por la latencia en el caso de largas distancias?";
 choices[56]= new Array();
 choices[56][0] = "As&iacute;ncrona.";
 choices[56][1] = "Log-shipping.";
 choices[56][2] = "Disk buffering.";
 choices[56][3] = "S&iacute;ncrona.";
 answers[56] = choices[56][3];
 units[56] = "53";
 comments[56] = "Id Pregunta: 851. Xunta de Galicia 2015";
 preguntaids[56] = 851


//  Id pregunta: 369 Año de creación de pregunta: 2016
 questions[57]= "58)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[57]= new Array();
 choices[57][0] = "Son actos individuales no normativos.";
 choices[57][1] = "Poseen alcance general.";
 choices[57][2] = "Son actos normativos.";
 choices[57][3] = "No son obligatorias.";
 answers[57] = choices[57][0];
 units[57] = "5";
 comments[57] = "Id Pregunta: 369. UNION EUROPEA";
 preguntaids[57] = 369


//  Id pregunta: 505 Año de creación de pregunta: 2016
 questions[58]= "59)  Respecto a la Ley Org&aacute;nica 2/2012 se&ntilde;ale la respuesta falsa:";
 choices[58]= new Array();
 choices[58][0] = "La elaboraci&oacute;n, aprobaci&oacute;n y ejecuci&oacute;n de los Presupuestos y dem&aacute;s actuaciones que afecten a los gastos o ingresos de las Administraciones P&uacute;blicas y dem&aacute;s entidades que forman parte del sector p&uacute;blico se someter&aacute; al principio de estabilidad presupuestaria.";
 choices[58][1] = "Ninguna Administraci&oacute;n P&uacute;blica podr&aacute; incurrir en d&eacute;ficit estructural, definido como d&eacute;ficit ajustado del ciclo, neto de medidas excepcionales y temporales.";
 choices[58][2] = "Excepcionalmente, el Estado y las Comunidades Aut&oacute;nomas podr&aacute;n incurrir en d&eacute;ficit estructural en caso de cat&aacute;strofes naturales, recesi&oacute;n econ&oacute;mica grave o situaciones de emergencia extraordinaria que escapen al control de las Administraciones P&uacute;blicas y perjudiquen considerablemente su situaci&oacute;n financiera o su sostenibilidad econ&oacute;mica o social.";
 choices[58][3] = "Las Corporaciones Locales deber&aacute;n mantener una posici&oacute;n de equilibrio presupuestario.";
 answers[58] = choices[58][3];
 units[58] = "10";
 comments[58] = "Id Pregunta: 505. PRESUPUESTOS GENERALES";
 preguntaids[58] = 505


//  Id pregunta: 229 Año de creación de pregunta: 2016
 questions[59]= "60)  De acuerdo con lo previsto en la Constituci&oacute;n Espa&ntilde;ola, el Gobierno y la administraci&oacute;n aut&oacute;noma de las provincias estar&aacute;n encomendados:";
 choices[59]= new Array();
 choices[59][0] = "A Diputaciones u otras Corporaciones de car&aacute;cter representativo.";
 choices[59][1] = "A los Subdelegados del Gobierno y a los Directores Insulares.";
 choices[59][2] = "A las Diputaciones y a las Mancomunidades de Municipios.";
 choices[59][3] = "A las Diputaciones y a las Comarcas.";
 answers[59] = choices[59][3];
 units[59] = "1";
 comments[59] = "Id Pregunta: 229. CONSTITUCION1978";
 preguntaids[59] = 229


//  Id pregunta: 474 Año de creación de pregunta: 2016
 questions[60]= "61)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la modalidad de auditor&iacute;a cuyo objeto consiste en la verificaci&oacute;n selectiva de la adecuaci&oacute;n a la legalidad de la gesti&oacute;n presupuestaria, de contrataci&oacute;n, personal, ingresos y gesti&oacute;n de subvenciones, as&iacute; como de cualquier otro aspecto de la actividad econ&oacute;mico financiero de las entidades auditadas se denomina:";
 choices[60]= new Array();
 choices[60][0] = "Auditor&iacute;a de sistemas y procedimientos de gesti&oacute;n econ&oacute;mica y financiera.";
 choices[60][1] = "Auditor&iacute;a operativa.";
 choices[60][2] = "Auditor&iacute;a de cumplimiento.";
 choices[60][3] = "Auditor&iacute;a de econom&iacute;a, eficacia y eficiencia.";
 answers[60] = choices[60][2];
 units[60] = "10";
 comments[60] = "Id Pregunta: 474. PRESUPUESTOS GENERALES";
 preguntaids[60] = 474


//  Id pregunta: 685 Año de creación de pregunta: 2016
 questions[61]= "62)  Se&ntilde;ale el &aacute;mbito de aplicaci&oacute;n del Reglamento (UE) 910/2014";
 choices[61]= new Array();
 choices[61][0] = "A los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros y a los prestadores de servicios de confianza establecidos en la Uni&oacute;n";
 choices[61][1] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros";
 choices[61][2] = "A los prestadores de servicios de certificaci&oacute;n de la Uni&oacute;n cuyos Gobiernos acepten formalmente el Reglamento";
 choices[61][3] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica de los Estados miembros, independientemente de que hayan sido notificados";
 answers[61] = choices[61][0];
 units[61] = "77";
 comments[61] = "Id Pregunta: 685. Art&iacute;culo 2 del Reglamento 910/2014";
 preguntaids[61] = 685


//  Id pregunta: 337 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;De cu&aacute;ntos diputados se compone el Parlamento Europeo?:";
 choices[62]= new Array();
 choices[62][0] = "732";
 choices[62][1] = "626";
 choices[62][2] = "786";
 choices[62][3] = "360";
 answers[62] = choices[62][2];
 units[62] = "5";
 comments[62] = "Id Pregunta: 337. UNION EUROPEA";
 preguntaids[62] = 337


//  Id pregunta: 146 Año de creación de pregunta: 2016
 questions[63]= "64)  La declaraci&oacute;n de lesividad de los actos anulables:";
 choices[63]= new Array();
 choices[63][0] = "No podr&aacute; adoptarse una vez transcurridos cuatro a&ntilde;os desde que se dict&oacute; el acto administrativo";
 choices[63][1] = "No es necesaria para impugnar ante el orden jurisdiccional contencioso-administrativo los actos favorables para los interesados";
 choices[63][2] = "Se adoptar&aacute; en todo caso por el Consejo de Estado";
 choices[63][3] = "Si el acto proviniera de las entidades que integran la Administraci&oacute;n Local, la declaraci&oacute;n de lesividad se adoptar&aacute; por la Comunidad Aut&oacute;noma a la que pertenece dicha entidad";
 answers[63] = choices[63][0];
 units[63] = "8";
 comments[63] = "Id Pregunta: 146. Ley 39/2015, Art&iacute;culo 107";
 preguntaids[63] = 146


//  Id pregunta: 81 Año de creación de pregunta: 2016
 questions[64]= "65)  El lenguaje SPARK es un subconjunto de:";
 choices[64]= new Array();
 choices[64][0] = "Java";
 choices[64][1] = "Fortran";
 choices[64][2] = "Ruby";
 choices[64][3] = "Ada";
 answers[64] = choices[64][3];
 units[64] = "73";
 comments[64] = "Id Pregunta: 81. AGE A1 2015";
 preguntaids[64] = 81


//  Id pregunta: 353 Año de creación de pregunta: 2016
 questions[65]= "66)  El buen funcionamiento de la Uni&oacute;n Europea recae, entre otras instituciones, en:";
 choices[65]= new Array();
 choices[65][0] = "El Parlamento Europeo.";
 choices[65][1] = "Todas las respuestas son correctas.";
 choices[65][2] = "La Comisi&oacute;n Europea.";
 choices[65][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[65] = choices[65][1];
 units[65] = "5";
 comments[65] = "Id Pregunta: 353. UNION EUROPEA";
 preguntaids[65] = 353


//  Id pregunta: 40 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Cu&aacute;l de los siguientes NO es un gestor de contenidos?";
 choices[66]= new Array();
 choices[66][0] = "Drupal";
 choices[66][1] = "Cassandra";
 choices[66][2] = "Wordpress";
 choices[66][3] = "OpenCMS";
 answers[66] = choices[66][1];
 units[66] = "99";
 comments[66] = "Id Pregunta: 40. AGE A1 2015";
 preguntaids[66] = 40


//  Id pregunta: 811 Año de creación de pregunta: 2016
 questions[67]= "68)  Los Subdirectores generales:";
 choices[67]= new Array();
 choices[67][0] = "son los responsables inmediatos, bajo la supervisi&oacute;n del Secretario general o del titular del &oacute;rgano del que dependan, de la ejecuci&oacute;n de aquellos proyectos, objetivos o actividades que les sean asignados, as&iacute; como de la gesti&oacute;n ordinaria de los asuntos de la competencia de la Subdirecci&oacute;n General";
 choices[67][1] = "ser&aacute;n nombrados, respetando los principios de igualdad, m&eacute;rito y capacidad, y cesados por el Ministro, Secretario de Estado o Subsecretario del que dependan";
 choices[67][2] = "sus nombramientos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, o de otras Administraciones, cuando as&iacute; lo prevean las normas de aplicaci&oacute;n, pertenecientes al Subgrupo A2";
 choices[67][3] = "todas son correctas";
 answers[67] = choices[67][1];
 units[67] = "4, 7, 8, 9";
 comments[67] = "Id Pregunta: 811. Ley 40/2015";
 preguntaids[67] = 811


//  Id pregunta: 226 Año de creación de pregunta: 2016
 questions[68]= "69)  Extinguidas todas las l&iacute;neas llamadas en Derecho para la sucesi&oacute;n en el trono:";
 choices[68]= new Array();
 choices[68][0] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n en la forma que m&aacute;s convenga a los intereses de Espa&ntilde;a.";
 choices[68][1] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n atendiendo exclusivamente a los imperativos geneal&oacute;gicos conocidos.";
 choices[68][2] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n de conformidad con los usos y costumbres existentes.";
 choices[68][3] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n conforme a lo que decidan dos grupos parlamentarios o una quinta parte de los Diputados.";
 answers[68] = choices[68][0];
 units[68] = "1";
 comments[68] = "Id Pregunta: 226. CONSTITUCION1978";
 preguntaids[68] = 226


//  Id pregunta: 555 Año de creación de pregunta: 2016
 questions[69]= "70)  &iquest;Cu&aacute;l de las siguientes iniciativas busca la mejora del acceso de los consumidores y las empresas a los bienes y servicios digitales, como parte de la estrategia para el Mercado &Uacute;nico Digital de la UE?";
 choices[69]= new Array();
 choices[69][0] = "Una paqueter&iacute;a m&aacute;s eficiente y asequible";
 choices[69][1] = "Revisar el marco de comunicaci&oacute;n audiovisual con el fin de adecuarlo al siglo XXI";
 choices[69][2] = "Reforzar la confianza y la seguridad en los servicios digitales, en particular en relaci&oacute;n con el tratamiento de datos personales";
 choices[69][3] = "Todas lo son";
 answers[69] = choices[69][0];
 units[69] = "17";
 comments[69] = "Id Pregunta: 555. Mercado &Uacute;nico Digital";
 preguntaids[69] = 555


//  Id pregunta: 299 Año de creación de pregunta: 2016
 questions[70]= "71)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[70]= new Array();
 choices[70][0] = "Quince miembros.";
 choices[70][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[70][2] = "Los miembros que determine el Consejo.";
 choices[70][3] = "Un Presidente y quince miembros.";
 answers[70] = choices[70][1];
 units[70] = "5";
 comments[70] = "Id Pregunta: 299. UNION EUROPEA";
 preguntaids[70] = 299


//  Id pregunta: 717 Año de creación de pregunta: 2016
 questions[71]= "72)  Respecto a SonarQube, se&ntilde;ale la FALSA:";
 choices[71]= new Array();
 choices[71][0] = "Sirve para evaluar aspectos como la complejidad ciclom&aacute;tica del c&oacute;digo.";
 choices[71][1] = "Anteriormente se denominaba Sonar.";
 choices[71][2] = "Permite disponer de una matriz de dependencia entre objetos.";
 choices[71][3] = "Integra herramientas de medici&oacute;n de la calidad de c&oacute;digo como CPD, findbugs, PMD, checkstyle.";
 answers[71] = choices[71][2];
 units[71] = "92";
 comments[71] = "Id Pregunta: 717. INTEGRACION CONTINUA";
 preguntaids[71] = 717


//  Id pregunta: 614 Año de creación de pregunta: 2016
 questions[72]= "73)  Dentro del &aacute;lgebra relacional, se&ntilde;ala cu&aacute;l de los siguientes operadores es derivado:";
 choices[72]= new Array();
 choices[72][0] = "Intersecci&oacute;n.";
 choices[72][1] = "Uni&oacute;n.";
 choices[72][2] = "Restricci&oacute;n.";
 choices[72][3] = "Diferencia.";
 answers[72] = choices[72][0];
 units[72] = "60";
 comments[72] = "Id Pregunta: 614. Junta de Extremadura A1 2015";
 preguntaids[72] = 614


//  Id pregunta: 750 Año de creación de pregunta: 2016
 questions[73]= "74)  Son rasgos fundamentales del sistema burocr&aacute;tico:";
 choices[73]= new Array();
 choices[73][0] = "La racionalidad en la divisi&oacute;n del trabajo";
 choices[73][1] = "La eficiencia en el uso de los recursos p&uacute;blicos";
 choices[73][2] = "La competencia t&eacute;cnica y la meritocracia";
 choices[73][3] = "a) y c) son rasgos fundamentales del sistema burocr&aacute;tico";
 answers[73] = choices[73][3];
 units[73] = "20";
 comments[73] = "Id Pregunta: 750. Direcci&oacute;n p&uacute;blica";
 preguntaids[73] = 750


//  Id pregunta: 326 Año de creación de pregunta: 2016
 questions[74]= "75)  La Mesa del Parlamento estar&aacute; compuesta por:";
 choices[74]= new Array();
 choices[74][0] = "El Presidente, doce Vicepresidentes y los Cuestores.";
 choices[74][1] = "El Presidente, diez Vicepresidentes y los Cuestores.";
 choices[74][2] = "El Presidente, dos Vicepresidentes y los Cuestores.";
 choices[74][3] = "El Presidente, catorce Vicepresidentes y los Cuestores.";
 answers[74] = choices[74][3];
 units[74] = "5";
 comments[74] = "Id Pregunta: 326. UNION EUROPEA";
 preguntaids[74] = 326


