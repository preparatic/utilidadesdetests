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

//  Id pregunta: 771 Año de creación de pregunta: 2016
 questions[0]= "1)  La actuaci&oacute;n de la Administraci&oacute;n P&uacute;blica respectiva se desarrolla para alcanzar los objetivos que establecen las leyes y el resto del ordenamiento jur&iacute;dico, bajo la direcci&oacute;n de (se&ntilde;ala la incorrecta):";
 choices[0]= new Array();
 choices[0][0] = "el Gobierno de la Naci&oacute;n";
 choices[0][1] = "los &oacute;rganos de gobierno de las Comunidades Aut&oacute;nomas";
 choices[0][2] = "los &oacute;rganos de gobierno de las Entidades Locales";
 choices[0][3] = "los &oacute;rganos de gobierno de las Universidades p&uacute;blicas";
 answers[0] = choices[0][3];
 units[0] = "4, 7, 8, 9";
 comments[0] = "Id Pregunta: 771. Ley 40/2015";


//  Id pregunta: 213 Año de creación de pregunta: 2016
 questions[1]= "2)  Seg&uacute;n el Art&iacute;culo 59 de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; v&aacute;lida la Regencia nombrada por las Cortes Generales que se componga del siguiente n&uacute;mero de personas:";
 choices[1]= new Array();
 choices[1][0] = "Cinco.";
 choices[1][1] = "Dos.";
 choices[1][2] = "Cuatro.";
 choices[1][3] = "Siete.";
 answers[1] = choices[1][0];
 units[1] = "1";
 comments[1] = "Id Pregunta: 213. CONSTITUCION1978";


//  Id pregunta: 665 Año de creación de pregunta: 2016
 questions[2]= "3)  Seg&uacute;n la Ley 39/2015, un expediente administrativo contendr&aacute;:";
 choices[2]= new Array();
 choices[2][0] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios,la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento, y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[2][1] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios y un &iacute;ndice numerado de todos los documentos.";
 choices[2][2] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[2][3] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos, la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento  y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 answers[2] = choices[2][2];
 units[2] = "7";
 comments[2] = "Id Pregunta: 665. Art&iacute;culo 70 de la Ley 39/2015";


//  Id pregunta: 620 Año de creación de pregunta: 2016
 questions[3]= "4)  En el entorno de la Arquitectura del Software, un patr&oacute;n :";
 choices[3]= new Array();
 choices[3][0] = "Es una soluci&oacute;n a un problema en un contexto particular.";
 choices[3][1] = "Es recurrente y ense&ntilde;a permitiendo entender c&oacute;mo adaptarlo a la variante particular del problema donde se quiere aplicar.";
 choices[3][2] = "Tiene un nombre para referirse al patr&oacute;n.";
 choices[3][3] = "Todas las respuestas son correctas.";
 answers[3] = choices[3][3];
 units[3] = "50";
 comments[3] = "Id Pregunta: 620. Junta de Extremadura A1 2015";


//  Id pregunta: 465 Año de creación de pregunta: 2016
 questions[4]= "5)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales deber&aacute; de contener:";
 choices[4]= new Array();
 choices[4][0] = "Las respuestas a) y b) son correctas.";
 choices[4][1] = "Las respuestas a) y b) no son correctas.";
 choices[4][2] = "Contenido coherente con los planes sectoriales.";
 choices[4][3] = "Programas de actuaci&oacute;n de existentes en el &aacute;mbito de cada departamento.";
 answers[4] = choices[4][0];
 units[4] = "10";
 comments[4] = "Id Pregunta: 465. PRESUPUESTOS GENERALES";


//  Id pregunta: 842 Año de creación de pregunta: 2016
 questions[5]= "6)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Los &oacute;rganos colegiados de la Administraci&oacute;n General del Estado y de sus Organismos p&uacute;blicos, por su composici&oacute;n, se clasifican en:";
 choices[5]= new Array();
 choices[5][0] = "&Oacute;rganos colegiados interministeriales, si sus miembros proceden de diferentes Ministerios.";
 choices[5][1] = "&Oacute;rganos colegiados ministeriales, si sus componentes proceden de los &oacute;rganos del mismo Ministerio.";
 choices[5][2] = "A y B son correctas.";
 choices[5][3] = "A y B son incorrectas.";
 answers[5] = choices[5][2];
 units[5] = "4, 7, 8, 9";
 comments[5] = "Id Pregunta: 842. Ley 40/2015";


//  Id pregunta: 145 Año de creación de pregunta: 2016
 questions[6]= "7)  Puede interponerse un recurso extraordinario de revisi&oacute;n:";
 choices[6]= new Array();
 choices[6][0] = "Ante actos firmes en la v&iacute;a administrativa cuando al dictarlos se hubiera incurrido en error de hecho, que resulte de los propios documentos incorporados al expediente";
 choices[6][1] = "Ante actos firmes en la v&iacute;a administrativa cuando en la resoluci&oacute;n hayan influido esencialmente documentos o testimonios declarados falsos por sentencia judicial firme, anterior o posterior a aquella resoluci&oacute;n";
 choices[6][2] = "Ante actos firmes en la v&iacute;a administrativa cuando la resoluci&oacute;n se hubiese dictado como consecuencia de prevaricaci&oacute;n, cohecho, violencia, maquinaci&oacute;n fraudulenta u otra conducta punible y se haya declarado as&iacute; en virtud de sentencia judicial firme";
 choices[6][3] = "Todas las anteriores son ciertas";
 answers[6] = choices[6][3];
 units[6] = "8";
 comments[6] = "Id Pregunta: 145. Ley 39/2015, Art&iacute;culo 125";


//  Id pregunta: 105 Año de creación de pregunta: 2016
 questions[7]= "8)  Entre las caracter&iacute;sticas de Big Data se encuentra:";
 choices[7]= new Array();
 choices[7][0] = "Gran volumen de informaci&oacute;n";
 choices[7][1] = "Gran variedad de datos";
 choices[7][2] = "Se analizan datos a gran velocidad";
 choices[7][3] = "Todas las anteriores son verdaderas";
 answers[7] = choices[7][3];
 units[7] = "73";
 comments[7] = "Id Pregunta: 105. ";


//  Id pregunta: 694 Año de creación de pregunta: 2016
 questions[8]= "9)  De las siguientes cu&aacute;l NO es una ventaja de la integraci&oacute;n continua:";
 choices[8]= new Array();
 choices[8][0] = "Ejecuci&oacute;n inmediata de las pruebas de aceptaci&oacute;n.";
 choices[8][1] = "Monitorizaci&oacute;n continua de las m&eacute;tricas de calidad del proyecto.";
 choices[8][2] = "Los desarrolladores pueden detectar y solucionar problemas de integraci&oacute;n de forma continua, evitando el caos de &uacute;ltima hora cuando se acercan las fechas de entrega.";
 choices[8][3] = "Disponibilidad constante de una versi&oacute;n para pruebas, demos o lanzamientos anticipados.";
 answers[8] = choices[8][0];
 units[8] = "92";
 comments[8] = "Id Pregunta: 694. INTEGRACION CONTINUA";


//  Id pregunta: 310 Año de creación de pregunta: 2016
 questions[9]= "10)  Los actos legislativos de la Uni&oacute;n Europea, podr&aacute;n adoptarse &uacute;nicamente a propuesta de:";
 choices[9]= new Array();
 choices[9][0] = "La Comisi&oacute;n Europea.";
 choices[9][1] = "El Consejo Europeo.";
 choices[9][2] = "El Consejo de Europa.";
 choices[9][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[9] = choices[9][0];
 units[9] = "5";
 comments[9] = "Id Pregunta: 310. UNION EUROPEA";


//  Id pregunta: 37 Año de creación de pregunta: 2016
 questions[10]= "11)  Seg&uacute;n el proyecto GNU, &iquest;cu&aacute;l de las siguientes NO puede ser considerada una libertad esencial del software libre?";
 choices[10]= new Array();
 choices[10][0] = "La libertad de ejecutar el programa como se desee, con cualquier prop&oacute;sito.";
 choices[10][1] = "La libertad de estudiar c&oacute;mo funciona el programa, y modificarlo para que tenga la funcionalidad deseada.";
 choices[10][2] = "La libertad de redistribuir copias para ayudar al pr&oacute;jimo.";
 choices[10][3] = "La libertad de distribuir a terceros versiones modificadas siempre que no tengan uso comercial.";
 answers[10] = choices[10][3];
 units[10] = "66";
 comments[10] = "Id Pregunta: 37. AGE A1 2015";


//  Id pregunta: 382 Año de creación de pregunta: 2016
 questions[11]= "12)  Seg&uacute;n la ley org&aacute;nica 3/2007, los actos y las cl&aacute;usulas de los negocios jur&iacute;dicos que causen discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[11]= new Array();
 choices[11][0] = "Se considerar&aacute;n nulos y sin efecto.";
 choices[11][1] = "Est&aacute;n sometidos a una tasa fiscal especial (Tasa Tobin)";
 choices[11][2] = "Son impugnables ante los juzgados especiales contra la violencia de g&eacute;nero.";
 choices[11][3] = "Si son actos administrativos, el recurso se debe interponer, en todo caso, ante el Ministerio de Igualdad.";
 answers[11] = choices[11][0];
 units[11] = "14";
 comments[11] = "Id Pregunta: 382. POLITICAS DE IGUALDAD";


//  Id pregunta: 814 Año de creación de pregunta: 2016
 questions[12]= "13)  Podr&aacute;n crearse por Real Decreto Subdelegaciones del Gobierno en las Comunidades Aut&oacute;nomas uniprovinciales, cuando lo justifiquen circunstancias como:";
 choices[12]= new Array();
 choices[12][0] = "la poblaci&oacute;n del territorio";
 choices[12][1] = "el volumen de gesti&oacute;n";
 choices[12][2] = "sus singularidades geogr&aacute;ficas, sociales o econ&oacute;micas";
 choices[12][3] = "todas son correctas";
 answers[12] = choices[12][3];
 units[12] = "4, 7, 8, 9";
 comments[12] = "Id Pregunta: 814. Ley 40/2015";


//  Id pregunta: 51 Año de creación de pregunta: 2016
 questions[13]= "14)  De acuerdo con el Real Decreto 1720/2007 indique qu&eacute; medida ha de ser aplicada obligatoriamente a los ficheros de los que sean responsables las Administraciones tributarias en el ejercicio de sus potestades tributarias:";
 choices[13]= new Array();
 choices[13][0] = "Cifrado de las comunicaciones";
 choices[13][1] = "Al menos, una auditor&iacute;a bienal (cada 2 a&ntilde;os)";
 choices[13][2] = "Registro de los accesos";
 choices[13][3] = "No queda regulado en dicho Real Decreto al depender de la criticidad del fichero.";
 answers[13] = choices[13][1];
 units[13] = "35";
 comments[13] = "Id Pregunta: 51. AGE A1 2015. Pregunta anulada en el examen real, ya que la opci&oacute;n B dec&iacute;a &quot;bianual&quot; en lugar de &quot;bienal&quot;";


//  Id pregunta: 352 Año de creación de pregunta: 2016
 questions[14]= "15)  La Comisi&oacute;n est&aacute; compuesta por:";
 choices[14]= new Array();
 choices[14][0] = "27 miembros, nacionales de los Estados comunitarios.";
 choices[14][1] = "20 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 choices[14][2] = "25 miembros, nacionales de los Estados comunitarios.";
 choices[14][3] = "d)22 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 answers[14] = choices[14][0];
 units[14] = "5";
 comments[14] = "Id Pregunta: 352. UNION EUROPEA";


//  Id pregunta: 762 Año de creación de pregunta: 2016
 questions[15]= "16)  La Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico, establece y regula (se&ntilde;ala la incorrecta):";
 choices[15]= new Array();
 choices[15][0] = "las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[15][1] = "los principios del sistema de responsabilidad de las Administraciones P&uacute;blicas y de la potestad sancionadora";
 choices[15][2] = "el procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas";
 choices[15][3] = "la organizaci&oacute;n y funcionamiento de la Administraci&oacute;n General del Estado y de su sector p&uacute;blico institucional para el desarrollo de sus actividades";
 answers[15] = choices[15][2];
 units[15] = "4, 7, 8, 9";
 comments[15] = "Id Pregunta: 762. Ley 40/2015";


//  Id pregunta: 329 Año de creación de pregunta: 2016
 questions[16]= "17)  Si el Consejo en alg&uacute;n acuerdo necesita de mayor&iacute;a cualificada se produce:";
 choices[16]= new Array();
 choices[16][0] = "Acuerdos cualificados.";
 choices[16][1] = "Acuerdos ponderados.";
 choices[16][2] = "Valoraci&oacute;n de los votos.";
 choices[16][3] = "Ponderaci&oacute;n de los votos.";
 answers[16] = choices[16][3];
 units[16] = "5";
 comments[16] = "Id Pregunta: 329. UNION EUROPEA";


//  Id pregunta: 143 Año de creación de pregunta: 2016
 questions[17]= "18)  Contra la resoluci&oacute;n de un recurso de alzada:";
 choices[17]= new Array();
 choices[17][0] = "No cabe interponer ning&uacute;n tipo de recurso";
 choices[17][1] = "Puede interponerse el recurso de reposici&oacute;n como paso previo a la impugnaci&oacute;n ante el orden jurisdiccional contencioso-administrativo";
 choices[17][2] = "Puede interponerse el recurso extraordinario de revisi&oacute;n, en los casos establecidos en el art&iacute;culo 125.1.";
 choices[17][3] = "Puede interponerse un nuevo recurso de alzada si el acto no fuera expreso";
 answers[17] = choices[17][2];
 units[17] = "8";
 comments[17] = "Id Pregunta: 143. Ley 39/2015, Art&iacute;culo 122";


//  Id pregunta: 834 Año de creación de pregunta: 2016
 questions[18]= "19)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[18]= new Array();
 choices[18][0] = "Los &oacute;rganos de las diferentes Administraciones P&uacute;blicas podr&aacute;n delegar el ejercicio de las competencias que tengan atribuidas en otros &oacute;rganos de la misma Administraci&oacute;n, aun cuando no sean jer&aacute;rquicamente dependientes, o en los Organismos p&uacute;blicos o Entidades de Derecho P&uacute;blico vinculados o dependientes de aqu&eacute;llas.";
 choices[18][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado, la delegaci&oacute;n de competencias deber&aacute; ser aprobada previamente por el &oacute;rgano ministerial de quien dependa el &oacute;rgano delegante y en el caso de los Organismos p&uacute;blicos o Entidades vinculados o dependientes, por el &oacute;rgano m&aacute;ximo de direcci&oacute;n, de acuerdo con sus normas de creaci&oacute;n. Cuando se trate de &oacute;rganos no relacionados jer&aacute;rquicamente ser&aacute; necesaria la aprobaci&oacute;n previa del superior com&uacute;n si ambos pertenecen al mismo Ministerio, o del &oacute;rgano superior de quien dependa el &oacute;rgano delegado, si el delegante y el delegado pertenecen a diferentes Ministerios.";
 choices[18][2] = "Asimismo, los &oacute;rganos de la Administraci&oacute;n General del Estado podr&aacute;n delegar el ejercicio de sus competencias propias en sus Organismos p&uacute;blicos y Entidades vinculados o dependientes, cuando resulte conveniente para alcanzar los fines que tengan asignados y mejorar la eficacia de su gesti&oacute;n. La delegaci&oacute;n deber&aacute; ser previamente aprobada por los &oacute;rganos de los que dependan el &oacute;rgano delegante y el &oacute;rgano delegado, o aceptada por este &uacute;ltimo cuando sea el &oacute;rgano m&aacute;ximo de direcci&oacute;n del Organismo p&uacute;blico o Entidad vinculado o dependiente.";
 choices[18][3] = "Todas son correctas.";
 answers[18] = choices[18][3];
 units[18] = "4, 7, 8, 9";
 comments[18] = "Id Pregunta: 834. Ley 40/2015";


//  Id pregunta: 289 Año de creación de pregunta: 2016
 questions[19]= "20)  La duraci&oacute;n del mandato del Defensor del Pueblo Europeo es de:";
 choices[19]= new Array();
 choices[19][0] = "Tres a&ntilde;os.";
 choices[19][1] = "Dos a&ntilde;os y medio.";
 choices[19][2] = "Cinco a&ntilde;os.";
 choices[19][3] = "Seis a&ntilde;os.";
 answers[19] = choices[19][2];
 units[19] = "5";
 comments[19] = "Id Pregunta: 289. UNION EUROPEA";


//  Id pregunta: 536 Año de creación de pregunta: 2016
 questions[20]= "21)  En el registro electr&oacute;nico general de apoderamientos, deber&aacute;n inscribirse, al menos, los de car&aacute;cter general otorgados por quien ostente la condici&oacute;n de interesado en un procedimiento administrativo a favor de representante:";
 choices[20]= new Array();
 choices[20][0] = "apud acta";
 choices[20][1] = "presencialmente";
 choices[20][2] = "electr&oacute;nicamente";
 choices[20][3] = "todas son correctas";
 answers[20] = choices[20][3];
 units[20] = "7";
 comments[20] = "Id Pregunta: 536. LEY 39/2015";


//  Id pregunta: 466 Año de creación de pregunta: 2016
 questions[21]= "22)  A tenor del art&iacute;culo 34 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el ejercicio presupuestario coincidir&aacute;:";
 choices[21]= new Array();
 choices[21][0] = "Con el a&ntilde;o anterior.";
 choices[21][1] = "Con los tres a&ntilde;os anteriores.";
 choices[21][2] = "Con el a&ntilde;o natural.";
 choices[21][3] = "Con los dos a&ntilde;os anteriores.";
 answers[21] = choices[21][2];
 units[21] = "10";
 comments[21] = "Id Pregunta: 466. PRESUPUESTOS GENERALES";


//  Id pregunta: 82 Año de creación de pregunta: 2016
 questions[22]= "23)  La titularidad de los derechos de explotaci&oacute;n de un programa de ordenador por una persona jur&iacute;dica expirar&aacute;:";
 choices[22]= new Array();
 choices[22][0] = "A los setenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[22][1] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita, o al de su creaci&oacute;n si no se hubiera divulgado.";
 choices[22][2] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[22][3] = "A los setenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita o al de su creaci&oacute;n si no se hubiera divulgado.";
 answers[22] = choices[22][3];
 units[22] = "41";
 comments[22] = "Id Pregunta: 82. AGE A1 2015";


//  Id pregunta: 54 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;A qu&eacute; tipo de ataque nos referimos cuando se suplanta la identidad de una direcci&oacute;n IP origen?";
 choices[23]= new Array();
 choices[23][0] = "DoS";
 choices[23][1] = "Phishing";
 choices[23][2] = "Sniffing";
 choices[23][3] = "Spoofing";
 answers[23] = choices[23][3];
 units[23] = "119";
 comments[23] = "Id Pregunta: 54. AGE A1 2015";


//  Id pregunta: 77 Año de creación de pregunta: 2016
 questions[24]= "25)  Respecto al uso de servicios de firma de documentos electr&oacute;nicos mediante certificados electr&oacute;nicos centralizados, mediante el sistema Cl@ve, indique cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[24]= new Array();
 choices[24][0] = "Para poder acceder al servicio, el usuario deber&aacute; solicitar previa y expresamente la emisi&oacute;n de los certificados electr&oacute;nicos centralizados correspondientes.";
 choices[24][1] = "Los certificados electr&oacute;nicos centralizados ser&aacute;n emitidos con las mismas garant&iacute;as de identificaci&oacute;n del DNI electr&oacute;nico del ciudadano.";
 choices[24][2] = "El acceso al servicio requiere en todo caso que el usuario se haya registrado en Cl@ve y haya activado su Cl@ve permanente.";
 choices[24][3] = "En el momento de la identificaci&oacute;n, se requerir&aacute; la utilizaci&oacute;n de una verificaci&oacute;n de seguridad adicional mediante un c&oacute;digo de un solo uso y validez limitada en el tiempo que se enviar&aacute; al tel&eacute;fono m&oacute;vil del usuario registrado.";
 answers[24] = choices[24][2];
 units[24] = "47";
 comments[24] = "Id Pregunta: 77. AGE A1 2015";


//  Id pregunta: 92 Año de creación de pregunta: 2016
 questions[25]= "26)  Seg&uacute;n AENOR, la certificaci&oacute;n es:";
 choices[25]= new Array();
 choices[25][0] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 choices[25][1] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple con los requisitos legales para salir al mercado.";
 choices[25][2] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio es beneficioso para los consumidores.";
 choices[25][3] = "La acci&oacute;n llevada a cabo por una entidad dependiente de la Administraci&oacute;n p&uacute;blica mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 answers[25] = choices[25][0];
 units[25] = "48";
 comments[25] = "Id Pregunta: 92. AGE A1 2015";


//  Id pregunta: 606 Año de creación de pregunta: 2016
 questions[26]= "27)  En ITIL v3, entre las metas del Proceso de la Planificaci&oacute;n y Soporte de la Transici&oacute;n del Servicio, se incluye:";
 choices[26]= new Array();
 choices[26][0] = "Planificar y coordinar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[26][1] = "Identificar, gestionar y limitar riesgos que puedan interrumpir el servicio a partir de la fase de transici&oacute;n del servicio.";
 choices[26][2] = "Planificar, identificar y gestionar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[26][3] = "Todas las respuestas son correctas.";
 answers[26] = choices[26][1];
 units[26] = "101";
 comments[26] = "Id Pregunta: 606. Junta de Extremadura A1 2015";


//  Id pregunta: 248 Año de creación de pregunta: 2016
 questions[27]= "28)  El T&iacute;tulo II de la Constituci&oacute;n finaliza en el Art&iacute;culo:";
 choices[27]= new Array();
 choices[27][0] = "61";
 choices[27][1] = "53";
 choices[27][2] = "65";
 choices[27][3] = "67";
 answers[27] = choices[27][1];
 units[27] = "1";
 comments[27] = "Id Pregunta: 248. CONSTITUCION1978";


//  Id pregunta: 39 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Cu&aacute;l de las siguientes respuestas NO es un servicio definido por el Open Geospatial Consortium (OGC)?";
 choices[28]= new Array();
 choices[28][0] = "WMS sirve mapas de forma din&aacute;mica presentando la informaci&oacute;n como im&aacute;genes digitales.";
 choices[28][1] = "WMTS permite la visualizaci&oacute;n de mapas a trav&eacute;s de teselas (tiles) de im&aacute;genes.";
 choices[28][2] = "WRS permite la consulta de colecciones de mapas raster.";
 choices[28][3] = "WFS permite la consulta y descarga de datos vectoriales.";
 answers[28] = choices[28][2];
 units[28] = "71";
 comments[28] = "Id Pregunta: 39. AGE A1 2015";


//  Id pregunta: 578 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Qui&eacute;n elabor&oacute; y aprob&oacute; la Estrategia TIC?.";
 choices[29]= new Array();
 choices[29][0] = "Fue elaborada y aprobada por la CETIC";
 choices[29][1] = "Fue elaborada por la CETIC y aprobada por el gobierno";
 choices[29][2] = "Fue elaborada por el gobierno y aprobada por la CETIC";
 choices[29][3] = "Fue elaborada por la CETIC y aprobada por el MAFP (Ministerio de Administraciones y Funci&oacute;n P&uacute;blica)";
 answers[29] = choices[29][1];
 units[29] = "19";
 comments[29] = "Id Pregunta: 578. Estrategia TIC";


//  Id pregunta: 677 Año de creación de pregunta: 2016
 questions[30]= "31)  Las situaciones de dependencia se clasifican en los siguientes grados:";
 choices[30]= new Array();
 choices[30][0] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave";
 choices[30][1] = "Grado I dependencia moderada, grado II dependencia severa, grado III dependencia muy severa";
 choices[30][2] = "Grado I dependencia moderada, grado II dependencia severa, grado III gran dependencia";
 choices[30][3] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave, grado IV gran dependencia";
 answers[30] = choices[30][2];
 units[30] = "14";
 comments[30] = "Id Pregunta: 677. Dependencia";


//  Id pregunta: 375 Año de creación de pregunta: 2016
 questions[31]= "32)  Las relaciones entre el Derecho Comunitario y el Derecho nacional se caracterizan por:";
 choices[31]= new Array();
 choices[31][0] = "Complementariedad, por tratarse de un ordenamiento para los Estados miembros.";
 choices[31][1] = "Primac&iacute;a del Derecho Comunitario, puesto que se impone a los Estados miembros.";
 choices[31][2] = "Autonom&iacute;a del Derecho Comunitario frente al nacional.";
 choices[31][3] = "Todas las respuestas son correctas.";
 answers[31] = choices[31][3];
 units[31] = "5";
 comments[31] = "Id Pregunta: 375. UNION EUROPEA";


//  Id pregunta: 670 Año de creación de pregunta: 2016
 questions[32]= "33)  Respecto a la ejecuci&oacute;n de la resoluci&oacute;n de un procedimiento administrativo, se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[32]= new Array();
 choices[32][0] = "Las Administraciones P&uacute;blicas no iniciar&aacute;n la ejecuci&oacute;n hasta que se haya dictado resoluci&oacute;n.";
 choices[32][1] = "De una resoluci&oacute;n administrativa nunca puede derivarse una multa.";
 choices[32][2] = "La ejecuci&oacute;n forzosa de una resoluci&oacute;n puede afectar al patrimonio.";
 choices[32][3] = "Contra algunas resoluciones es posible interponer recursos por v&iacute;a administrativa.";
 answers[32] = choices[32][1];
 units[32] = "7";
 comments[32] = "Id Pregunta: 670. Cap&iacute;tulo VII, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 162 Año de creación de pregunta: 2016
 questions[33]= "34)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones";
 choices[33]= new Array();
 choices[33][0] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[33][1] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro de las setenta y dos horas contadas a partir de las 8:00 horas del d&iacute;a laborable siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[33][2] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 00:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 choices[33][3] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 24 horas contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 answers[33] = choices[33][0];
 units[33] = "19";
 comments[33] = "Id Pregunta: 162. La respuesta B es la antigua redacci&oacute;n";


//  Id pregunta: 725 Año de creación de pregunta: 2016
 questions[34]= "35)  Sobre el Scrum Team, cual es la afirmaci&oacute;n falsa";
 choices[34]= new Array();
 choices[34][0] = "Cada miembro del equipo tiene que tener un rol especifico y no puede asumir tareas que no est&eacute;n dentro de su &aacute;rea de especializaci&oacute;n.";
 choices[34][1] = "Los miembros del equipo deben tener un perfil en &lsquo;T&rsquo;";
 choices[34][2] = "Cada miembro del equipo tiene que tener un conocimiento m&aacute;s amplio de un &aacute;rea";
 choices[34][3] = "Cada miembro del equipo puede asumir cualquier tipo de tarea.";
 answers[34] = choices[34][0];
 units[34] = "34, 84";
 comments[34] = "Id Pregunta: 725. Metodologias &aacute;giles";


//  Id pregunta: 506 Año de creación de pregunta: 2016
 questions[35]= "36)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, responde a la reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, (en adelante CE) e incorpora tres nuevos principios con respecto a la derogada Ley Org&aacute;nica 5/2001, de 13 de diciembre, complementaria a la Ley General de Estabilidad Presupuestaria ,Cu&aacute;les son?";
 choices[35]= new Array();
 choices[35][0] = "Estabilidad presupuestaria, plurianualidad, y responsabilidad.";
 choices[35][1] = "Sostenibilidad financiera, responsabilidad y transparencia.";
 choices[35][2] = "Plurianualidad, lealtad institucional y eficiencia en la asignaci&oacute;n de los recursos p&uacute;blicos";
 choices[35][3] = "Responsabilidad, sostenibilidad financiera y lealtad institucional.";
 answers[35] = choices[35][3];
 units[35] = "10";
 comments[35] = "Id Pregunta: 506. PRESUPUESTOS GENERALES";


//  Id pregunta: 561 Año de creación de pregunta: 2016
 questions[36]= "37)  El plan nacional de ciudades inteligentes...";
 choices[36]= new Array();
 choices[36][0] = "Es una apuesta liderada por la Federaci&oacute;n Espa&ntilde;ola de Municipios y Provincias";
 choices[36][1] = "Es una apuesta del ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[36][2] = "Es una apuesta liderada por una gran asociaci&oacute;n de empresas tecnol&oacute;gicas nacionales";
 choices[36][3] = "No existe";
 answers[36] = choices[36][1];
 units[36] = "19";
 comments[36] = "Id Pregunta: 561. Ciudades Inteligentes";


//  Id pregunta: 494 Año de creación de pregunta: 2016
 questions[37]= "38)  Seg&uacute;n la Ley General Presupuestaria, con car&aacute;cter excepcional podr&aacute;n generar cr&eacute;dito en el Presupuesto del ejercicio los ingresos realizados:";
 choices[37]= new Array();
 choices[37][0] = "Por reembolso de pr&eacute;stamos.";
 choices[37][1] = "Por la venta de bienes.";
 choices[37][2] = "En el &uacute;ltimo trimestre del ejercicio anterior.";
 choices[37][3] = "Por prestaci&oacute;n de servicios.";
 answers[37] = choices[37][2];
 units[37] = "10";
 comments[37] = "Id Pregunta: 494. PRESUPUESTOS GENERALES";


//  Id pregunta: 309 Año de creación de pregunta: 2016
 questions[38]= "39)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a los Cuestores:";
 choices[38]= new Array();
 choices[38][0] = "Son miembros de la Mesa del Parlamento Europeo con voz pero sin voto.";
 choices[38][1] = "No son miembros de la Mesa del Parlamento Europeo.";
 choices[38][2] = "Son miembros de la Mesa del Parlamento Europeo con voz y voto.";
 choices[38][3] = "Los Cuestores forman parte de la Mesa del Parlamento Europeo en un n&uacute;mero igual a tres.";
 answers[38] = choices[38][0];
 units[38] = "5";
 comments[38] = "Id Pregunta: 309. UNION EUROPEA";


//  Id pregunta: 799 Año de creación de pregunta: 2016
 questions[39]= "40)  Respecto a las unidades administrativas:";
 choices[39]= new Array();
 choices[39][0] = "pueden existir unidades administrativas complejas, que agrupen dos o m&aacute;s unidades mayores";
 choices[39][1] = "los jefes de las unidades administrativas son responsables del correcto funcionamiento de la unidad y de la adecuada ejecuci&oacute;n de las tareas asignadas a la misma";
 choices[39][2] = "las unidades administrativas se establecen mediante las relaciones de puestos de trabajo, que se aprobar&aacute;n de acuerdo con su regulaci&oacute;n espec&iacute;fica, y no se integran en ning&uacute;n &oacute;rgano determinado";
 choices[39][3] = "ninguna es correcta";
 answers[39] = choices[39][1];
 units[39] = "4, 7, 8, 9";
 comments[39] = "Id Pregunta: 799. Ley 40/2015";


//  Id pregunta: 706 Año de creación de pregunta: 2016
 questions[40]= "41)  El Portal de Transparencia de la Administraci&oacute;n General del Estado depende del:";
 choices[40]= new Array();
 choices[40][0] = "Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[40][1] = "Ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[40][2] = "Ministerio de la Presidencia";
 choices[40][3] = "Ministerio de Fomento";
 answers[40] = choices[40][2];
 units[40] = "22";
 comments[40] = "Id Pregunta: 706. Portal de Transparencia";


//  Id pregunta: 93 Año de creación de pregunta: 2016
 questions[41]= "42)  Entre las tecnolog&iacute;as o herramientas utilizadas para trabajar en sistemas de Big Data NO se encuentra:";
 choices[41]= new Array();
 choices[41][0] = "Almacenamiento orientado a columnas";
 choices[41][1] = "Framework MapReduce";
 choices[41][2] = "OLTP";
 choices[41][3] = "Bases de datos clave-valor";
 answers[41] = choices[41][2];
 units[41] = "73";
 comments[41] = "Id Pregunta: 93. AGE A1 2015";


//  Id pregunta: 212 Año de creación de pregunta: 2016
 questions[42]= "43)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con la regulaci&oacute;n constitucional de la composici&oacute;n del Senado:";
 choices[42]= new Array();
 choices[42][0] = "La poblaci&oacute;n de Melilla elegir&aacute; dos Senadores.";
 choices[42][1] = "En cada provincia se elegir&aacute;n tres senadores.";
 choices[42][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas elegir&aacute;n un senador cuando su poblaci&oacute;n supere el mill&oacute;n de habitantes.";
 choices[42][3] = "El Senado se compone de 350 senadores.";
 answers[42] = choices[42][0];
 units[42] = "1";
 comments[42] = "Id Pregunta: 212. CONSTITUCION1978";


//  Id pregunta: 259 Año de creación de pregunta: 2016
 questions[43]= "44)  La iniciativa legislativa corresponde:";
 choices[43]= new Array();
 choices[43][0] = "Al Congreso y al Senado, &uacute;nicamente.";
 choices[43][1] = "Al rey y al Gobierno.";
 choices[43][2] = "Al Congreso, al Senado y al Rey.";
 choices[43][3] = "Al Gobierno, al Congreso y al Senado.";
 answers[43] = choices[43][3];
 units[43] = "1";
 comments[43] = "Id Pregunta: 259. CONSTITUCION1978";


//  Id pregunta: 468 Año de creación de pregunta: 2016
 questions[44]= "45)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, elaborar la documentaci&oacute;n estad&iacute;stico-contable de car&aacute;cter oficial del Sistema de la Seguridad Social es una competencia de:";
 choices[44]= new Array();
 choices[44][0] = "El Ministerio de Hacienda.";
 choices[44][1] = "El Ministerio de Econom&iacute;a.";
 choices[44][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[44][3] = "Ninguna de las respuestas es correcta.";
 answers[44] = choices[44][2];
 units[44] = "10";
 comments[44] = "Id Pregunta: 468. PRESUPUESTOS GENERALES";


//  Id pregunta: 548 Año de creación de pregunta: 2016
 questions[45]= "46)  El &aacute;mbito de aplicaci&oacute;n del RD 806/2014 de Gobernanza TIC es:";
 choices[45]= new Array();
 choices[45][0] = "La Administraci&oacute;n General del Estado";
 choices[45][1] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos";
 choices[45][2] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos y las Comunidades Aut&oacute;nomas";
 choices[45][3] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos, las Comunidades Aut&oacute;nomas y las Entidades Locales";
 answers[45] = choices[45][1];
 units[45] = "26";
 comments[45] = "Id Pregunta: 548. Gobernanza TIC";


//  Id pregunta: 91 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Cu&aacute;l de las siguientes opciones muestra exclusivamente herramientas directamente relacionadas con la realizaci&oacute;n de pruebas para asegurar la calidad del software?";
 choices[46]= new Array();
 choices[46][0] = "JUnit, Artifactory y SonarQube";
 choices[46][1] = "JUnit, Artifactory y Selenium";
 choices[46][2] = "JUnit, SonarQube y Selenium";
 choices[46][3] = "ArtiFactory, SonarQube y Selenium";
 answers[46] = choices[46][2];
 units[46] = "92";
 comments[46] = "Id Pregunta: 91. AGE A1 2015";


//  Id pregunta: 331 Año de creación de pregunta: 2016
 questions[47]= "48)  Tras el tratado de Niza, &iquest;cu&aacute;ntos eurodiputados son elegidos en el Estado espa&ntilde;ol?:";
 choices[47]= new Array();
 choices[47][0] = "90";
 choices[47][1] = "50";
 choices[47][2] = "64";
 choices[47][3] = "60";
 answers[47] = choices[47][1];
 units[47] = "5";
 comments[47] = "Id Pregunta: 331. UNION EUROPEA";


//  Id pregunta: 379 Año de creación de pregunta: 2016
 questions[48]= "49)  Seg&uacute;n recoge la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, &iquest;con qu&eacute; frecuencia debe elaborar el Gobierno un informe sobre el conjunto de actuaciones en relaci&oacute;n con le efectividad del principio de igualdad entre mujeres y hombres?";
 choices[48]= new Array();
 choices[48][0] = "Anual.";
 choices[48][1] = "Semestral.";
 choices[48][2] = "Seg&uacute;n se determine reglamentariamente.";
 choices[48][3] = "Bienal.";
 answers[48] = choices[48][2];
 units[48] = "14";
 comments[48] = "Id Pregunta: 379. POLITICAS DE IGUALDAD";


//  Id pregunta: 514 Año de creación de pregunta: 2016
 questions[49]= "50)  El sector p&uacute;blico institucional se integra por:";
 choices[49]= new Array();
 choices[49][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[49][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[49][2] = "las Universidades p&uacute;blicas";
 choices[49][3] = "todas son correctas";
 answers[49] = choices[49][3];
 units[49] = "7";
 comments[49] = "Id Pregunta: 514. LEY 39/2015";


//  Id pregunta: 339 Año de creación de pregunta: 2016
 questions[50]= "51)  La presidencia del Consejo se ejerce de forma rotatoria cada:";
 choices[50]= new Array();
 choices[50][0] = "4 meses seg&uacute;n un orden fijado por unanimidad del Consejo.";
 choices[50][1] = "6 meses seg&uacute;n un orden fijado por unanimidad del Consejo.";
 choices[50][2] = "4 meses seg&uacute;n un orden fijado por mayor&iacute;a cualificada del Consejo.";
 choices[50][3] = "6 meses seg&uacute;n un orden fijado por mayor&iacute;a cualificada del Consejo.";
 answers[50] = choices[50][1];
 units[50] = "5";
 comments[50] = "Id Pregunta: 339. UNION EUROPEA";


//  Id pregunta: 418 Año de creación de pregunta: 2016
 questions[51]= "52)  Respetar&aacute;n la igualdad entre mujeres y hombres evitando cualquier forma de discriminaci&oacute;n, los medios de comunicaci&oacute;n de titularidad:";
 choices[51]= new Array();
 choices[51][0] = "P&uacute;blica.";
 choices[51][1] = "Privada.";
 choices[51][2] = "A y B son correctas.";
 choices[51][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[51] = choices[51][2];
 units[51] = "14";
 comments[51] = "Id Pregunta: 418. POLITICAS DE IGUALDAD";


//  Id pregunta: 190 Año de creación de pregunta: 2016
 questions[52]= "53)  La iniciativa legislativa para la reforma de la Constituci&oacute;n Espa&ntilde;ola de 1978:";
 choices[52]= new Array();
 choices[52][0] = "Le corresponde exclusivamente al congreso y al Senado.";
 choices[52][1] = "Puede ser ejercida por el Tribunal Constitucional.";
 choices[52][2] = "Puede ser instada por las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[52][3] = "Le corresponde exclusivamente al Gobierno.";
 answers[52] = choices[52][2];
 units[52] = "1";
 comments[52] = "Id Pregunta: 190. CONSTITUCION1978";


//  Id pregunta: 13 Año de creación de pregunta: 2016
 questions[53]= "54)  JNDI se usa para el acceso a:";
 choices[53]= new Array();
 choices[53][0] = "Datos de ficheros";
 choices[53][1] = "Sistemas gestores de bases de datos";
 choices[53][2] = "Directorios de nombres";
 choices[53][3] = "Colas de mensajer&iacute;a";
 answers[53] = choices[53][2];
 units[53] = "64";
 comments[53] = "Id Pregunta: 13. AGE A1 2015";


//  Id pregunta: 459 Año de creación de pregunta: 2016
 questions[54]= "55)  Seg&uacute;n el art&iacute;culo 41 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, las operaciones financieras que se distinguen son:";
 choices[54]= new Array();
 choices[54][0] = "Enajenaci&oacute;n de inversiones reales y transferencias de capital.";
 choices[54][1] = "Pasivos financieros y transferencias de capital.";
 choices[54][2] = "Activos financieros y pasivos financieros.";
 choices[54][3] = "Activos financieros y enajenaci&oacute;n de inversiones reales.";
 answers[54] = choices[54][2];
 units[54] = "10";
 comments[54] = "Id Pregunta: 459. PRESUPUESTOS GENERALES";


//  Id pregunta: 737 Año de creación de pregunta: 2016
 questions[55]= "56)  En el Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE, las administraciones p&uacute;blicas y las instituciones p&uacute;blicas de la Uni&oacute;n Europea deben ser abiertas, eficaces e integradoras en el a&ntilde;o:";
 choices[55]= new Array();
 choices[55][0] = "2025";
 choices[55][1] = "2023";
 choices[55][2] = "2030";
 choices[55][3] = "2020";
 answers[55] = choices[55][3];
 units[55] = "28";
 comments[55] = "Id Pregunta: 737. Estrategia TIC";


//  Id pregunta: 192 Año de creación de pregunta: 2016
 questions[56]= "57)  Seg&uacute;n la Constituci&oacute;n, las poblaciones de Ceuta y Melilla estar&aacute;n representadas por:";
 choices[56]= new Array();
 choices[56][0] = "Un diputado y un senador, cada una de ellas";
 choices[56][1] = "Dos diputados y un senador, cada una de ellas.";
 choices[56][2] = "Un diputado y dos senadores, cada una de ellas";
 choices[56][3] = "dos diputados y dos senadores, cada una de ellas.";
 answers[56] = choices[56][2];
 units[56] = "1";
 comments[56] = "Id Pregunta: 192. CONSTITUCION1978";


//  Id pregunta: 493 Año de creación de pregunta: 2016
 questions[57]= "58)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, inspeccionar la actividad de las oficinas de contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una competencia de:";
 choices[57]= new Array();
 choices[57][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[57][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[57][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[57][3] = "La Intervenci&oacute;n General de la Seguridad Social.";
 answers[57] = choices[57][2];
 units[57] = "10";
 comments[57] = "Id Pregunta: 493. PRESUPUESTOS GENERALES";


//  Id pregunta: 426 Año de creación de pregunta: 2016
 questions[58]= "59)  La aprobaci&oacute;n de convocatorias de pruebas selectivas para el acceso al empleo p&uacute;blico deber&aacute; acompa&ntilde;arse de:";
 choices[58]= new Array();
 choices[58][0] = "Un plan de igualdad.";
 choices[58][1] = "Un informe de impacto de g&eacute;nero.";
 choices[58][2] = "Un programa de igualdad.";
 choices[58][3] = "Todas son correctas.";
 answers[58] = choices[58][1];
 units[58] = "14";
 comments[58] = "Id Pregunta: 426. POLITICAS DE IGUALDAD";


//  Id pregunta: 57 Año de creación de pregunta: 2016
 questions[59]= "60)  Con respecto a ITIL se&ntilde;ale qu&eacute; afirmaci&oacute;n es cierta:";
 choices[59]= new Array();
 choices[59][0] = "Constituye una metodolog&iacute;a exhaustiva de pasos a seguir en el dise&ntilde;o de servicios TI.";
 choices[59][1] = "Da instrucciones de trabajo concretas, asignado tareas a personas.";
 choices[59][2] = "Los organismos tecnol&oacute;gicamente m&aacute;s punteros de la Administraci&oacute;n General del Estado se encuentran certificados en ITIL.";
 choices[59][3] = "Constituye un conjunto de mejores pr&aacute;cticas para la gesti&oacute;n de servicios TI.";
 answers[59] = choices[59][3];
 units[59] = "101";
 comments[59] = "Id Pregunta: 57. AGE A1 2015";


//  Id pregunta: 133 Año de creación de pregunta: 2016
 questions[60]= "61)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, cu&aacute;l no corresponde a una de las medidas implantadas:";
 choices[60]= new Array();
 choices[60][0] = "Apoyos fiscales y en materia de Seguridad Social a los emprendedores.";
 choices[60][1] = "Medidas de conciliaci&oacute;n familiar especiales para los emprendedores.";
 choices[60][2] = "Modificaci&oacute;n de la ley concursal para facilitar los acuerdos de refinanciaci&oacute;n.";
 choices[60][3] = "Creaci&oacute;n de la figura del Emprendedor de Responsabilidad Limitada.";
 answers[60] = choices[60][1];
 units[60] = "12";
 comments[60] = "Id Pregunta: 133. Leyes modelo econ&oacute;mico";


//  Id pregunta: 0 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Cu&aacute;l de los siguientes NO es un objetivo del Plan de Transformaci&oacute;n Digital de la AGE?";
 choices[61]= new Array();
 choices[61][0] = "Consolidar el tejido productivo nacional apoyando el efectivo despliegue de la Sociedad de la Informaci&oacute;n.";
 choices[61][1] = "Conseguir una mayor eficiencia en los servicios TIC comunes de la Administraci&oacute;n.";
 choices[61][2] = "Implantar una gesti&oacute;n corporativa inteligente de la informaci&oacute;n y los datos.";
 choices[61][3] = "Adoptar una estrategia corporativa de seguridad y usabilidad.";
 answers[61] = choices[61][0];
 units[61] = "26";
 comments[61] = "Id Pregunta: 0. AGE A1 2015";


//  Id pregunta: 729 Año de creación de pregunta: 2016
 questions[62]= "63)  Indique cual de los siguientes no forma parte del vocabulario de scrum";
 choices[62]= new Array();
 choices[62][0] = "Burn-up chart";
 choices[62][1] = "Arquitectural Skype";
 choices[62][2] = "Burn-down chart";
 choices[62][3] = "Definition of done";
 answers[62] = choices[62][1];
 units[62] = "34, 84";
 comments[62] = "Id Pregunta: 729. Metodologias &aacute;giles";


//  Id pregunta: 72 Año de creación de pregunta: 2016
 questions[63]= "64)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[63]= new Array();
 choices[63][0] = "OASIS ha definido una notaci&oacute;n gr&aacute;fica est&aacute;ndar para WS-BPEL.";
 choices[63][1] = "BPEL4People es una extensi&oacute;n sobre WS-BPEL realizada para dar cobertura a escenarios que involucran interacci&oacute;n de personas con procesos de negocio.";
 choices[63][2] = "WS-BPEL es un lenguaje dise&ntilde;ado para el control distribuido de la invocaci&oacute;n de diferentes servicios Web que modelan un proceso de negocio.";
 choices[63][3] = "XPDL es una especificaci&oacute;n de lenguaje de definici&oacute;n de procesos creada por OASIS.";
 answers[63] = choices[63][1];
 units[63] = "86";
 comments[63] = "Id Pregunta: 72. AGE A1 2015";


//  Id pregunta: 699 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Qu&eacute; es la integraci&oacute;n continua?";
 choices[64]= new Array();
 choices[64][0] = "Una pr&aacute;ctica recogida en la metodolog&iacute;a M&eacute;trica V3.";
 choices[64][1] = "Un modelo inform&aacute;tico que consiste en hacer integraciones autom&aacute;ticas de un proyecto lo m&aacute;s a menudo posible para as&iacute; poder detectar fallos cuanto antes.";
 choices[64][2] = "Una metodolog&iacute;a &aacute;gil inspirada en XP y FDD encaminada a realizar un desarrollo hol&iacute;stico en todo el proceso de desarrollo de un sistema de informaci&oacute;n.";
 choices[64][3] = "Ninguna de las anteriores.";
 answers[64] = choices[64][1];
 units[64] = "92";
 comments[64] = "Id Pregunta: 699. INTEGRACION CONTINUA";


//  Id pregunta: 214 Año de creación de pregunta: 2016
 questions[65]= "66)  Seg&uacute;n el T&iacute;tulo II de la Constituci&oacute;n Espa&ntilde;ola relativo a la Corona:";
 choices[65]= new Array();
 choices[65][0] = "La Regencia se ejercer&aacute; por mandato constitucional y siempre en nombre del Rey.";
 choices[65][1] = "Las abdicaciones y renuncias en el orden sucesorio se resolver&aacute;n por ley ordinaria.";
 choices[65][2] = "El Pr&iacute;ncipe heredero podr&aacute; asumir la Regencia durante su minor&iacute;a de edad.";
 choices[65][3] = "La Regencia podr&aacute; ejercerse por nacionales de cualquier Estado.";
 answers[65] = choices[65][0];
 units[65] = "1";
 comments[65] = "Id Pregunta: 214. CONSTITUCION1978";


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


//  Id pregunta: 4 Año de creación de pregunta: 2016
 questions[67]= "68)  Un wireframe es:";
 choices[67]= new Array();
 choices[67][0] = "Un marco de referencia para el dise&ntilde;o y despliegue de redes WiFi.";
 choices[67][1] = "Un marco de referencia para el dise&ntilde;o y despliegue de redes WiMAX.";
 choices[67][2] = "Un modelo que permite evaluar el impacto de las nuevas tecnolog&iacute;as en la mejora de la calidad de vida durante la puesta en marcha de una ciudad inteligente (smart city).";
 choices[67][3] = "Una interfaz visual que representa la estructura visual de un sitio web y la relaci&oacute;n entre sus p&aacute;ginas.";
 answers[67] = choices[67][3];
 units[67] = "62";
 comments[67] = "Id Pregunta: 4. AGE A1 2015";


//  Id pregunta: 301 Año de creación de pregunta: 2016
 questions[68]= "69)  El Presidente del Tribunal de Cuentas es elegido por:";
 choices[68]= new Array();
 choices[68][0] = "Los propios miembros del Tribunal.";
 choices[68][1] = "El Consejo de Europa.";
 choices[68][2] = "El Consejo Europeo.";
 choices[68][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[68] = choices[68][0];
 units[68] = "5";
 comments[68] = "Id Pregunta: 301. UNION EUROPEA";


//  Id pregunta: 646 Año de creación de pregunta: 2016
 questions[69]= "70)  En Itil v3 se diferencia entre la Gesti&oacute;n de la Cartera de Servicios y la Gesti&oacute;n del Cat&aacute;logo de Servicios ya que:";
 choices[69]= new Array();
 choices[69][0] = "La Cartera de Servicios contiene informaci&oacute;n sobre cada servicio y su estado.";
 choices[69][1] = "La Cartera de Servicios es un subconjunto del Cat&aacute;logo de Servicios.";
 choices[69][2] = "La Cartera de Servicios divide los servicios en componentes y contiene pol&iacute;ticas, directrices y responsabilidades , as&iacute; como precios, acuerdos de nivel de servicio y condiciones de entrega.";
 choices[69][3] = "Todas las respuestas son correctas.";
 answers[69] = choices[69][0];
 units[69] = "101";
 comments[69] = "Id Pregunta: 646. Junta de Extremadura A1 2015";


//  Id pregunta: 796 Año de creación de pregunta: 2016
 questions[70]= "71)  Sin perjuicio de lo previsto en la Ley 3/2015, de 30 de marzo, reguladora del ejercicio del alto cargo de la Administraci&oacute;n General del Estado, los titulares de los &oacute;rganos superiores y directivos son nombrados, atendiendo a criterios de competencia profesional y experiencia, en la forma establecida en esta Ley, siendo de aplicaci&oacute;n al desempe&ntilde;o de sus funciones:";
 choices[70]= new Array();
 choices[70][0] = "la responsabilidad profesional, personal y directa por la gesti&oacute;n desarrollada";
 choices[70][1] = "la sujeci&oacute;n al control y evaluaci&oacute;n de la gesti&oacute;n por el &oacute;rgano superior o directivo competente, sin perjuicio del control establecido por la Ley General Presupuestaria";
 choices[70][2] = "a y b son correctas";
 choices[70][3] = "a y b son incorrectas";
 answers[70] = choices[70][2];
 units[70] = "4, 7, 8, 9";
 comments[70] = "Id Pregunta: 796. Ley 40/2015";


//  Id pregunta: 284 Año de creación de pregunta: 2016
 questions[71]= "72)  Se&ntilde;ale la respuesta falsa:";
 choices[71]= new Array();
 choices[71][0] = "El mercado interior europeo que tiene una repercusi&oacute;n positiva en el crecimiento de la econom&iacute;a y del empleo.";
 choices[71][1] = "En mayo de 2015 la Comisi&oacute;n Europea anunci&oacute; la Estrategia para el Mercado &Uacute;nico Digital, destinada a responder a los retos de la econom&iacute;a digital.";
 choices[71][2] = "La Comisi&oacute;n propone una nueva estrategia de comercio e inversi&oacute;n para la Uni&oacute;n Europea, con el t&iacute;tulo &laquo;Comercio para todos: Hacia una pol&iacute;tica de comercio e inversi&oacute;n m&aacute;s sostenible&raquo;.";
 choices[71][3] = "En septiembre de 2015 se ha publicado el plan de acci&oacute;n para la creaci&oacute;n de la Uni&oacute;n de los Mercados de Capitales.";
 answers[71] = choices[71][2];
 units[71] = "5";
 comments[71] = "Id Pregunta: 284. UNION EUROPEA";


//  Id pregunta: 607 Año de creación de pregunta: 2016
 questions[72]= "73)  Seg&uacute;n Magerit v3, en el desarrollo de sistemas de informaci&oacute;n:";
 choices[72]= new Array();
 choices[72][0] = "La seguridad debe estar embebida en el sistema desde su primera concepci&oacute;n.";
 choices[72][1] = "La seguridad comenzar&aacute; a considerarse formalmente cuando finalice el proceso de implantaci&oacute;n de sistemas de informaci&oacute;n.";
 choices[72][2] = "La seguridad del sistema de informaci&oacute;n es m&aacute;s econ&oacute;mica implantarla una vez puesto en producci&oacute;n el sistema de informaci&oacute;n que tenerla en consideraci&oacute;n durante el desarrollo del sistema.";
 choices[72][3] = "La seguridad s&oacute;lo ralentiza el proceso de desarrollo de sistemas de informaci&oacute;n por lo que s&oacute;lo se debe considerar en aquellos sistemas que usen datos econ&oacute;micos.";
 answers[72] = choices[72][0];
 units[72] = "45";
 comments[72] = "Id Pregunta: 607. Junta de Extremadura A1 2015";


//  Id pregunta: 461 Año de creación de pregunta: 2016
 questions[73]= "74)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, a qui&eacute;n le corresponde aprobar y comprometer los gastos propios de los servicios a su cargo:";
 choices[73]= new Array();
 choices[73][0] = "A los ministros.";
 choices[73][1] = "Las respuestas a) y b) son correctas.";
 choices[73][2] = "Las respuestas a) y b) no son correctas.";
 choices[73][3] = "A los titulares de los &oacute;rganos del Estado.";
 answers[73] = choices[73][1];
 units[73] = "10";
 comments[73] = "Id Pregunta: 461. PRESUPUESTOS GENERALES";


//  Id pregunta: 142 Año de creación de pregunta: 2016
 questions[74]= "75)  El plazo para la interposici&oacute;n del recurso de alzada ser&aacute;:";
 choices[74]= new Array();
 choices[74][0] = "De un mes si el acto fuera presunto";
 choices[74][1] = "De un mes si el acto fuera expreso";
 choices[74][2] = "De un mes en cualquier caso";
 choices[74][3] = "No existe un plazo m&aacute;ximo para la interposici&oacute;n de un recurso de alzada";
 answers[74] = choices[74][1];
 units[74] = "8";
 comments[74] = "Id Pregunta: 142. Ley 39/2015, Art&iacute;culo 122";


