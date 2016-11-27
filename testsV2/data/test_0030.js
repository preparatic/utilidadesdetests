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

//  Id pregunta: 511 Año de creación de pregunta: 2016
 questions[0]= "1)  Cuando resulte eficaz, proporcionado y necesario para la consecuci&oacute;n de los fines propios del procedimiento, y de manera motivada, podr&aacute;n incluirse tr&aacute;mites adicionales o distintos a los contemplados en esta Ley:";
 choices[0]= new Array();
 choices[0][0] = "solo mediante ley";
 choices[0][1] = "reglamentariamente";
 choices[0][2] = "mediante ley o reglamentariamente";
 choices[0][3] = "ninguna es correcta";
 answers[0] = choices[0][0];
 units[0] = "7";
 comments[0] = "Id Pregunta: 511. LEY 39/2015";


//  Id pregunta: 452 Año de creación de pregunta: 2016
 questions[1]= "2)  En t&eacute;rminos familiares, podemos decir que desembocan en gastos...";
 choices[1]= new Array();
 choices[1][0] = "Los cr&eacute;ditos";
 choices[1][1] = "Las partidas presupuestarias";
 choices[1][2] = "Los derechos";
 choices[1][3] = "Las obligaciones";
 answers[1] = choices[1][3];
 units[1] = "10";
 comments[1] = "Id Pregunta: 452. PRESUPUESTOS GENERALES";


//  Id pregunta: 93 Año de creación de pregunta: 2016
 questions[2]= "3)  Entre las tecnolog&iacute;as o herramientas utilizadas para trabajar en sistemas de Big Data NO se encuentra:";
 choices[2]= new Array();
 choices[2][0] = "Almacenamiento orientado a columnas";
 choices[2][1] = "Framework MapReduce";
 choices[2][2] = "OLTP";
 choices[2][3] = "Bases de datos clave-valor";
 answers[2] = choices[2][2];
 units[2] = "73";
 comments[2] = "Id Pregunta: 93. AGE A1 2015";


//  Id pregunta: 149 Año de creación de pregunta: 2016
 questions[3]= "4)  Seg&uacute;n establece la Ley 39/2015, las Administraciones P&uacute;blicas har&aacute;n p&uacute;blico un Plan Normativo que:";
 choices[3]= new Array();
 choices[3][0] = "Contendr&aacute; las iniciativas legales y reglamentarias que hayan sido aprobadas en el a&ntilde;o en curso y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[3][1] = "Contendr&aacute; exclusivamente las iniciativas legales que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[3][2] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[3][3] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Bolet&iacute;n Oficial de la Administraci&oacute;n P&uacute;blica correspondiente";
 answers[3] = choices[3][2];
 units[3] = "7";
 comments[3] = "Id Pregunta: 149. Ley 39/2015, Art&iacute;culo 132";


//  Id pregunta: 215 Año de creación de pregunta: 2016
 questions[4]= "5)  Seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola, las asociaciones se inscribir&aacute;n en un registro a efectos de:";
 choices[4]= new Array();
 choices[4][0] = "Publicidad.";
 choices[4][1] = "Constituci&oacute;n.";
 choices[4][2] = "Legalidad.";
 choices[4][3] = "Creaci&oacute;n.";
 answers[4] = choices[4][0];
 units[4] = "1";
 comments[4] = "Id Pregunta: 215. CONSTITUCION1978";


//  Id pregunta: 406 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola garantiza la no discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[5]= new Array();
 choices[5][0] = "Art&iacute;culo 9.1 CE.";
 choices[5][1] = "Art&iacute;culo 53 CE.";
 choices[5][2] = "Art&iacute;culo 14 CE.";
 choices[5][3] = "Art&iacute;culo 16 CE.";
 answers[5] = choices[5][2];
 units[5] = "14";
 comments[5] = "Id Pregunta: 406. POLITICAS DE IGUALDAD";


//  Id pregunta: 816 Año de creación de pregunta: 2016
 questions[6]= "7)  Los Directores Insulares de la Administraci&oacute;n General del Estado (se&ntilde;ala la incorrecta):";
 choices[6]= new Array();
 choices[6][0] = "ser&aacute;n nombrados por el Delegado del Gobierno mediante el procedimiento de concurso-oposici&oacute;n";
 choices[6][1] = "ser&aacute;n nombrados entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades Locales, pertenecientes a Cuerpos o Escalas clasificados como Subgrupo A1";
 choices[6][2] = "dependen jer&aacute;rquicamente del Delegado del Gobierno en la Comunidad Aut&oacute;noma o del Subdelegado del Gobierno en la provincia, cuando este cargo exista";
 choices[6][3] = "ejercen, en su &aacute;mbito territorial, las competencias atribuidas por esta Ley a los Subdelegados del Gobierno en las provincias";
 answers[6] = choices[6][0];
 units[6] = "4, 7, 8, 9";
 comments[6] = "Id Pregunta: 816. Ley 40/2015";


//  Id pregunta: 63 Año de creación de pregunta: 2016
 questions[7]= "8)  El modelo de servicio en la nube en el que el consumidor no tiene control sobre la red, los servidores, sistemas operativos o almacenamiento, pero s&iacute; sobre las aplicaciones desplegadas y sobre los ajustes de configuraci&oacute;n de dichas aplicaciones, se denomina:";
 choices[7]= new Array();
 choices[7][0] = "Infrastructure as a Service (IaaS)";
 choices[7][1] = "Platform as a Service (PaaS)";
 choices[7][2] = "Software as a Service (SaaS)";
 choices[7][3] = "Application as a Service (AaaS)";
 answers[7] = choices[7][1];
 units[7] = "52";
 comments[7] = "Id Pregunta: 63. AGE A1 2015";


//  Id pregunta: 615 Año de creación de pregunta: 2016
 questions[8]= "9)  El establecimiento de una conexi&oacute;n mediante el protocolo TCP, b&aacute;sicamente se realiza de la siguiente manera:";
 choices[8]= new Array();
 choices[8][0] = "Emisor: env&iacute;a SYN. Receptor: env&iacute;a SYN+ACK. Emisor: env&iacute;a ACK.";
 choices[8][1] = "Emisor: env&iacute;a ACK. Receptor: env&iacute;a ACK+SYN. Emisor: env&iacute;a SYN.";
 choices[8][2] = "Emisor: env&iacute;a SYN. Receptor: env&iacute;a ACK.";
 choices[8][3] = "Emisor: env&iacute;a ACK. Receptor: env&iacute;a SYN.";
 answers[8] = choices[8][0];
 units[8] = "109";
 comments[8] = "Id Pregunta: 615. Junta de Extremadura A1 2015";


//  Id pregunta: 836 Año de creación de pregunta: 2016
 questions[9]= "10)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta incorrecta.";
 choices[9]= new Array();
 choices[9][0] = "La realizaci&oacute;n de actividades de car&aacute;cter material o t&eacute;cnico de la competencia de los &oacute;rganos administrativos o de las Entidades de Derecho P&uacute;blico podr&aacute; ser encomendada a otros &oacute;rganos o Entidades de Derecho P&uacute;blico de la misma o de distinta Administraci&oacute;n, siempre que entre sus competencias est&eacute;n esas actividades, por razones de eficacia o cuando no se posean los medios t&eacute;cnicos id&oacute;neos para su desempe&ntilde;o.";
 choices[9][1] = "Las encomiendas de gesti&oacute;n podr&aacute;n tener por objeto prestaciones propias de los contratos regulados en la legislaci&oacute;n de contratos del sector p&uacute;blico. En tal caso, su naturaleza y r&eacute;gimen jur&iacute;dico se ajustar&aacute; a lo previsto en &eacute;sta.";
 choices[9][2] = "La encomienda de gesti&oacute;n no supone cesi&oacute;n de la titularidad de la competencia ni de los elementos sustantivos de su ejercicio, siendo responsabilidad del &oacute;rgano o Entidad encomendante dictar cuantos actos o resoluciones de car&aacute;cter jur&iacute;dico den soporte o en los que se integre la concreta actividad material objeto de encomienda.";
 choices[9][3] = "En todo caso, la Entidad u &oacute;rgano encomendado tendr&aacute; la condici&oacute;n de encargado del tratamiento de los datos de car&aacute;cter personal a los que pudiera tener acceso en ejecuci&oacute;n de la encomienda de gesti&oacute;n, si&eacute;ndole de aplicaci&oacute;n lo dispuesto en la normativa de protecci&oacute;n de datos de car&aacute;cter personal.";
 answers[9] = choices[9][1];
 units[9] = "4, 7, 8, 9";
 comments[9] = "Id Pregunta: 836. Ley 40/2015";


//  Id pregunta: 105 Año de creación de pregunta: 2016
 questions[10]= "11)  Entre las caracter&iacute;sticas de Big Data se encuentra:";
 choices[10]= new Array();
 choices[10][0] = "Gran volumen de informaci&oacute;n";
 choices[10][1] = "Gran variedad de datos";
 choices[10][2] = "Se analizan datos a gran velocidad";
 choices[10][3] = "Todas las anteriores son verdaderas";
 answers[10] = choices[10][3];
 units[10] = "73";
 comments[10] = "Id Pregunta: 105. ";


//  Id pregunta: 664 Año de creación de pregunta: 2016
 questions[11]= "12)  De acuerdo a la Ley 39/2015, el formato del expediente administrativo ser&aacute;:";
 choices[11]= new Array();
 choices[11][0] = "Siempre en formato electr&oacute;nico.";
 choices[11][1] = "Siempre en formato papel.";
 choices[11][2] = "Las personas f&iacute;sicas podr&aacute;n elegir en todo momento el formato del expediente administrativo.";
 choices[11][3] = "La ley no regula el formato del expediente.";
 answers[11] = choices[11][0];
 units[11] = "7";
 comments[11] = "Id Pregunta: 664. Art&iacute;culo 70 de la Ley 39/2015";


//  Id pregunta: 6 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Cu&aacute;l de los siguientes procesos de M&Eacute;TRICA Versi&oacute;n 3 no est&aacute; dentro del &aacute;mbito de la norma ISO 12207 de procesos de ciclo de vida del software?";
 choices[12]= new Array();
 choices[12][0] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[12][1] = "Desarrollo de Sistemas de Informaci&oacute;n";
 choices[12][2] = "Construcci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[12][3] = "Ninguno de los anteriores, ya que los tres est&aacute;n cubiertos por la norma ISO 12207";
 answers[12] = choices[12][0];
 units[12] = "91";
 comments[12] = "Id Pregunta: 6. AGE A1 2015";


//  Id pregunta: 363 Año de creación de pregunta: 2016
 questions[13]= "14)  Los Reglamentos no se caracterizan por:";
 choices[13]= new Array();
 choices[13][0] = "No poseer alcance general.";
 choices[13][1] = "Ser obligatorios.";
 choices[13][2] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[13][3] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 answers[13] = choices[13][0];
 units[13] = "5";
 comments[13] = "Id Pregunta: 363. UNION EUROPEA";


//  Id pregunta: 398 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Qu&eacute; art&iacute;culo de la Ley Org&aacute;nica 3/2007 para la igualdad efectiva de mujeres y hombres, regula las acciones positivas?";
 choices[14]= new Array();
 choices[14][0] = "Art. 13, L.O.3/2007.";
 choices[14][1] = "Art. 14, L.O.3/2007.";
 choices[14][2] = "Art. 11, L.O.3/2007.";
 choices[14][3] = "Ninguna es correcta.";
 answers[14] = choices[14][2];
 units[14] = "14";
 comments[14] = "Id Pregunta: 398. POLITICAS DE IGUALDAD";


//  Id pregunta: 104 Año de creación de pregunta: 2016
 questions[15]= "16)  Son bases de datos NoSQL:";
 choices[15]= new Array();
 choices[15][0] = "MongoDB y Maria DB";
 choices[15][1] = "HBase y Dynamo";
 choices[15][2] = "MariaDB, Cassandra y BigTable";
 choices[15][3] = "La A) y la C)";
 answers[15] = choices[15][1];
 units[15] = "73";
 comments[15] = "Id Pregunta: 104. ";


//  Id pregunta: 719 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;C&uacute;al de los siguientes puntos NO  es uno de los principios de las metodolog&iacute;as lean?";
 choices[16]= new Array();
 choices[16][0] = "Flexibilidad para variar el servicio o producto";
 choices[16][1] = "Eliminar desperdicios";
 choices[16][2] = "Decidir lo m&aacute;s tarde posible";
 choices[16][3] = "Hacer entregas tan r&aacute;pido como sea posible";
 answers[16] = choices[16][0];
 units[16] = "34";
 comments[16] = "Id Pregunta: 719. Metodologias Lean";


//  Id pregunta: 163 Año de creación de pregunta: 2016
 questions[17]= "18)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, constituye una infracci&oacute;n grave:";
 choices[17]= new Array();
 choices[17][0] = "No conservaci&oacute;n reiterada o sistem&aacute;tica de los datos a los que se refiere el art&iacute;culo 3";
 choices[17][1] = "No conservaci&oacute;n en ning&uacute;n momento de los datos a los que se refiere el art&iacute;culo 3.";
 choices[17][2] = "El incumplimiento de la llevanza del libro-registro";
 choices[17][3] = "La conservaci&oacute;n de los datos por un per&iacute;odo superior al establecido en el art&iacute;culo 5.";
 answers[17] = choices[17][0];
 units[17] = "19";
 comments[17] = "Id Pregunta: 163. B y C: son &quot;Muy grave&quot;; D: para que fuera verdadera deber&iacute;a ser &quot;inferior&quot;";


//  Id pregunta: 326 Año de creación de pregunta: 2016
 questions[18]= "19)  La Mesa del Parlamento estar&aacute; compuesta por:";
 choices[18]= new Array();
 choices[18][0] = "El Presidente, doce Vicepresidentes y los Cuestores.";
 choices[18][1] = "El Presidente, diez Vicepresidentes y los Cuestores.";
 choices[18][2] = "El Presidente, dos Vicepresidentes y los Cuestores.";
 choices[18][3] = "El Presidente, catorce Vicepresidentes y los Cuestores.";
 answers[18] = choices[18][3];
 units[18] = "5";
 comments[18] = "Id Pregunta: 326. UNION EUROPEA";


//  Id pregunta: 487 Año de creación de pregunta: 2016
 questions[19]= "20)  Seg&uacute;n el art&iacute;culo 56.6 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Hacienda dar&aacute; cuentas trimestralmente de los cr&eacute;ditos extraordinarias y suplementos de cr&eacute;dito a:";
 choices[19]= new Array();
 choices[19][0] = "Las Cortes Generales.";
 choices[19][1] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[19][2] = "El Gobierno.";
 choices[19][3] = "El Congreso de los Diputados.";
 answers[19] = choices[19][0];
 units[19] = "10";
 comments[19] = "Id Pregunta: 487. PRESUPUESTOS GENERALES";


//  Id pregunta: 768 Año de creación de pregunta: 2016
 questions[20]= "21)  Las Administraciones P&uacute;blicas sirven con objetividad los intereses generales, con sometimiento pleno a la Constituci&oacute;n, a la Ley y al Derecho y act&uacute;an de acuerdo con los principios de:";
 choices[20]= new Array();
 choices[20][0] = "eficacia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[20][1] = "eficiencia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 choices[20][2] = "eficacia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[20][3] = "eficiencia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 answers[20] = choices[20][2];
 units[20] = "4, 7, 8, 9";
 comments[20] = "Id Pregunta: 768. Ley 40/2015";


//  Id pregunta: 825 Año de creación de pregunta: 2016
 questions[21]= "22)  La actuaci&oacute;n de autoridades y personal al servicio de las Administraciones P&uacute;blicas en los que concurran motivos de abstenci&oacute;n ...";
 choices[21]= new Array();
 choices[21][0] = "No implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido pero dar&aacute; lugar a la responsabilidad que proceda";
 choices[21][1] = "Dar&aacute; lugar a la responsabilidad que proceda pero no implicar&aacute; en ning&uacute;n caso la invalidez de los actos en que hayan intervenido";
 choices[21][2] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido";
 choices[21][3] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido dando lugar a la responsabilidad que proceda";
 answers[21] = choices[21][1];
 units[21] = "4, 7, 8, 9";
 comments[21] = "Id Pregunta: 825. Ley 40/2015";


//  Id pregunta: 795 Año de creación de pregunta: 2016
 questions[22]= "23)  Se&ntilde;ale la respuesta correcta:";
 choices[22]= new Array();
 choices[22][0] = "corresponde a los &oacute;rganos superiores establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos directivos su desarrollo y ejecuci&oacute;n";
 choices[22][1] = "corresponde establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos superiores";
 choices[22][2] = "corresponde establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos directivos";
 choices[22][3] = "corresponde a los &oacute;rganos directivos establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos superiores su desarrollo y ejecuci&oacute;n";
 answers[22] = choices[22][0];
 units[22] = "4, 7, 8, 9";
 comments[22] = "Id Pregunta: 795. Ley 40/2015";


//  Id pregunta: 794 Año de creación de pregunta: 2016
 questions[23]= "24)  Los estatutos de los Organismos p&uacute;blicos determinar&aacute;n sus respectivos:";
 choices[23]= new Array();
 choices[23][0] = "&oacute;rganos superiores";
 choices[23][1] = "&oacute;rganos directivos";
 choices[23][2] = "&oacute;rganos superiores y directivos";
 choices[23][3] = "ninguna es correcta";
 answers[23] = choices[23][1];
 units[23] = "4, 7, 8, 9";
 comments[23] = "Id Pregunta: 794. Ley 40/2015";


//  Id pregunta: 43 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes principios NO est&aacute; recogido en el Manifiesto por el Desarrollo &Aacute;gil del Software?";
 choices[24]= new Array();
 choices[24][0] = "La simplicidad, o el arte de maximizar la cantidad de trabajo no realizado, es esencial.";
 choices[24][1] = "Aceptamos que los requisitos cambien, incluso en etapas tard&iacute;as del desarrollo. Los procesos &aacute;giles aprovechan el cambio para proporcionar ventaja competitiva al cliente.";
 choices[24][2] = "Las mejores arquitecturas, requisitos y dise&ntilde;os emergen por la aplicaci&oacute;n de unos procesos bien organizados.";
 choices[24][3] = "El software funcionando es la medida principal del progreso.";
 answers[24] = choices[24][2];
 units[24] = "34";
 comments[24] = "Id Pregunta: 43. AGE A1 2015";


//  Id pregunta: 680 Año de creación de pregunta: 2016
 questions[25]= "26)  Seg&uacute;n el Real Decreto Ley 5/2013, de 15 de marzo, de medidas para favorecer la continuidad de la vida laboral de los trabajadores de mayor edad y promover el envejecimiento activo:";
 choices[25]= new Array();
 choices[25][0] = "La cuant&iacute;a de la pensi&oacute;n de jubilaci&oacute;n compatible con el trabajo ser&aacute; equivalente al 50 por 100 del importe resultante en el reconocimiento inicial, una vez aplicado, si procede, el l&iacute;mite m&aacute;ximo de pensi&oacute;n p&uacute;blica, o del que se est&eacute; percibiendo, en el momento de inicio de la compatibilidad con el trabajo, excluido, en todo caso, el complemento por m&iacute;nimos, cualquiera que sea la jornada laboral o la actividad que realice el pensionista.";
 choices[25][1] = "El trabajo compatible debe realizarse a tiempo parcial.";
 choices[25][2] = "Finalizada la relaci&oacute;n laboral por cuenta ajena o producido el cese en la actividad por cuenta propia, se restablecer&aacute; el percibo &iacute;ntegro de la pensi&oacute;n de jubilaci&oacute;n transcurridos 12 meses de la finalizaci&oacute;n de la relaci&oacute;n laboral.";
 choices[25][3] = "El acceso a la pensi&oacute;n podr&aacute; tener lugar hasta 5 a&ntilde;os antes de la edad que en cada caso resulte de aplicaci&oacute;n.";
 answers[25] = choices[25][0];
 units[25] = "14";
 comments[25] = "Id Pregunta: 680. Pensiones";


//  Id pregunta: 814 Año de creación de pregunta: 2016
 questions[26]= "27)  Podr&aacute;n crearse por Real Decreto Subdelegaciones del Gobierno en las Comunidades Aut&oacute;nomas uniprovinciales, cuando lo justifiquen circunstancias como:";
 choices[26]= new Array();
 choices[26][0] = "la poblaci&oacute;n del territorio";
 choices[26][1] = "el volumen de gesti&oacute;n";
 choices[26][2] = "sus singularidades geogr&aacute;ficas, sociales o econ&oacute;micas";
 choices[26][3] = "todas son correctas";
 answers[26] = choices[26][3];
 units[26] = "4, 7, 8, 9";
 comments[26] = "Id Pregunta: 814. Ley 40/2015";


//  Id pregunta: 445 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;Cu&aacute;l de los siguientes datos NO es obligatorio que figure en la realizaci&oacute;n de una inscripci&oacute;n en el Registro electr&oacute;nico de Apoderamientos?";
 choices[27]= new Array();
 choices[27][0] = "Nombre y apellidos, denominaci&oacute;n o raz&oacute;n social y NIF del poderante.";
 choices[27][1] = "Per&iacute;odo de vigencia de los tr&aacute;mites objeto de apoderamiento.";
 choices[27][2] = "Fecha de otorgamiento.";
 choices[27][3] = "N&uacute;mero de referencia del alta y fecha de alta en el Registro.";
 answers[27] = choices[27][1];
 units[27] = "43";
 comments[27] = "Id Pregunta: 445. SERVICIOS COMUNES";


//  Id pregunta: 415 Año de creación de pregunta: 2016
 questions[28]= "29)  En los estudios, estad&iacute;sticas, encuestas y recogidas de datos se incluir&aacute; sistem&aacute;ticamente:";
 choices[28]= new Array();
 choices[28][0] = "Un informe de g&eacute;nero.";
 choices[28][1] = "La variable de sexo.";
 choices[28][2] = "La variable de edad.";
 choices[28][3] = "La variable de comportamiento.";
 answers[28] = choices[28][1];
 units[28] = "14";
 comments[28] = "Id Pregunta: 415. POLITICAS DE IGUALDAD";


//  Id pregunta: 659 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;De qu&eacute; modelo de programaci&oacute;n es una implementaci&oacute;n Hadoop?";
 choices[29]= new Array();
 choices[29][0] = "Orientaci&oacute;n a objetos";
 choices[29][1] = "MapReduce";
 choices[29][2] = "Pipeline filtering";
 choices[29][3] = "Programaci&oacute;n funcional";
 answers[29] = choices[29][1];
 units[29] = "73";
 comments[29] = "Id Pregunta: 659. ";


//  Id pregunta: 431 Año de creación de pregunta: 2016
 questions[30]= "31)  En el supuesto de que una empresa haga publicidad enga&ntilde;osa de sus acciones de responsabilidad en materia de igualdad, podr&aacute;n ejercer la acci&oacute;n de cesaci&oacute;n cuando se considere:";
 choices[30]= new Array();
 choices[30][0] = "El Instituto de la Mujer.";
 choices[30][1] = "&Oacute;rganos equivalentes al anterior pertenecientes a las CCAA.";
 choices[30][2] = "Ambas son correctas.";
 choices[30][3] = "A y B son incorrectas.";
 answers[30] = choices[30][2];
 units[30] = "14";
 comments[30] = "Id Pregunta: 431. POLITICAS DE IGUALDAD";


//  Id pregunta: 766 Año de creación de pregunta: 2016
 questions[31]= "32)  Las Universidades p&uacute;blicas se regir&aacute;n por:";
 choices[31]= new Array();
 choices[31][0] = "las previsiones de la presente Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[31][1] = "su normativa espec&iacute;fica y supletoriamente por las previsiones de la presente Ley";
 choices[31][2] = "exclusivamente por su normativa espec&iacute;fica";
 choices[31][3] = "exclusivamente por las previsiones de la presente Ley";
 answers[31] = choices[31][1];
 units[31] = "4, 7, 8, 9";
 comments[31] = "Id Pregunta: 766. Ley 40/2015";


//  Id pregunta: 354 Año de creación de pregunta: 2016
 questions[32]= "33)  El Tribunal de Justicia Europeo est&aacute; compuesto por:";
 choices[32]= new Array();
 choices[32][0] = "Veinticinco Jueces y nueve Abogados Generales.";
 choices[32][1] = "Veintisiete Jueces y veintisiete Abogados Generales.";
 choices[32][2] = "Veintisiete Jueces y ocho Abogados Generales.";
 choices[32][3] = "Veinticinco Jueces y siete Abogados Generales.";
 answers[32] = choices[32][2];
 units[32] = "5";
 comments[32] = "Id Pregunta: 354. UNION EUROPEA";


//  Id pregunta: 798 Año de creación de pregunta: 2016
 questions[33]= "34)  Las unidades administrativas comprenden puestos de trabajo o dotaciones de plantilla:";
 choices[33]= new Array();
 choices[33][0] = "vinculados funcionalmente por raz&oacute;n de sus cometidos y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[33][1] = "vinculados org&aacute;nicamente por raz&oacute;n de sus cometidos y funcionalmente por una jefatura com&uacute;n";
 choices[33][2] = "vinculados funcionalmente por raz&oacute;n de su territorio y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[33][3] = "vinculados org&aacute;nicamente por raz&oacute;n de su territorio y funcionalmente por una jefatura com&uacute;n";
 answers[33] = choices[33][0];
 units[33] = "4, 7, 8, 9";
 comments[33] = "Id Pregunta: 798. Ley 40/2015";


//  Id pregunta: 395 Año de creación de pregunta: 2016
 questions[34]= "35)  Una persona que en atenci&oacute;n a su sexo es tratada de manera menos favorable que otra en situaci&oacute;n comparable, est&aacute; sufriendo:";
 choices[34]= new Array();
 choices[34][0] = "Discriminaci&oacute;n indirecta.";
 choices[34][1] = "Discriminaci&oacute;n directa.";
 choices[34][2] = "Discriminaci&oacute;n por maternidad.";
 choices[34][3] = "Discriminaci&oacute;n abusiva.";
 answers[34] = choices[34][1];
 units[34] = "14";
 comments[34] = "Id Pregunta: 395. POLITICAS DE IGUALDAD";


//  Id pregunta: 811 Año de creación de pregunta: 2016
 questions[35]= "36)  Las Delegaciones del Gobierno tendr&aacute;n su sede en:";
 choices[35]= new Array();
 choices[35][0] = "la localidad elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[35][1] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[35][2] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[35][3] = "la localidad donde elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 answers[35] = choices[35][2];
 units[35] = "4, 7, 8, 9";
 comments[35] = "Id Pregunta: 811. Ley 40/2015";


//  Id pregunta: 300 Año de creación de pregunta: 2016
 questions[36]= "37)  La designaci&oacute;n para formar parte del Tribunal de Cuentas la efect&uacute;a:";
 choices[36]= new Array();
 choices[36][0] = "La Comisi&oacute;n.";
 choices[36][1] = "El Consejo de Europa.";
 choices[36][2] = "El Consejo Europeo.";
 choices[36][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[36] = choices[36][3];
 units[36] = "5";
 comments[36] = "Id Pregunta: 300. UNION EUROPEA";


//  Id pregunta: 154 Año de creación de pregunta: 2016
 questions[37]= "38)  Los t&eacute;rminos y plazos establecidos en la ley 39/2015 u otras leyes obligan a:";
 choices[37]= new Array();
 choices[37][0] = "las autoridades al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[37][1] = "el personal al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[37][2] = "los interesados en la tramitaci&oacute;n de los asuntos";
 choices[37][3] = "todas son correctas";
 answers[37] = choices[37][3];
 units[37] = "7";
 comments[37] = "Id Pregunta: 154. Ley 39/2015, Art&iacute;culo 29";


//  Id pregunta: 45 Año de creación de pregunta: 2016
 questions[38]= "39)  46. &iquest;Cu&aacute;l de las siguientes NO es una de las APIs incorporadas a HTML5?";
 choices[38]= new Array();
 choices[38][0] = "HTML Drag and Drop, para arrastrar un objeto a otra localizaci&oacute;n.";
 choices[38][1] = "HTML Advanced Search, para parametrizar y modificar el comportamiento de los buscadores.";
 choices[38][2] = "HTML Local Storage, para almacenar datos en el navegador.";
 choices[38][3] = "HTML SSE, para actualizar una p&aacute;gina web autom&aacute;ticamente sin preguntar al servidor.";
 answers[38] = choices[38][1];
 units[38] = "74";
 comments[38] = "Id Pregunta: 45. AGE A1 2015";


//  Id pregunta: 231 Año de creación de pregunta: 2016
 questions[39]= "40)  La convocatoria a refer&eacute;ndum en los casos previstos en la Constituci&oacute;n corresponde a:";
 choices[39]= new Array();
 choices[39][0] = "El Presidente del Congreso de los Diputados.";
 choices[39][1] = "El Presidente del Gobierno.";
 choices[39][2] = "El Rey.";
 choices[39][3] = "El Consejo de Ministros.";
 answers[39] = choices[39][0];
 units[39] = "1";
 comments[39] = "Id Pregunta: 231. CONSTITUCION1978";


//  Id pregunta: 314 Año de creación de pregunta: 2016
 questions[40]= "41)  Indique a qui&eacute;n corresponde la funci&oacute;n de ejecutar el presupuesto de la Uni&oacute;n Europea:";
 choices[40]= new Array();
 choices[40][0] = "Al Consejo Europeo.";
 choices[40][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[40][2] = "A la Comisi&oacute;n Europea.";
 choices[40][3] = "Al Parlamento Europeo.";
 answers[40] = choices[40][2];
 units[40] = "5";
 comments[40] = "Id Pregunta: 314. UNION EUROPEA";


//  Id pregunta: 112 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Qu&eacute; dos magnitudes relaciona la Ley de Okun?";
 choices[41]= new Array();
 choices[41][0] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de inflaci&oacute;n";
 choices[41][1] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la variaci&oacute;n del desempleo";
 choices[41][2] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de actividad";
 choices[41][3] = "El valor absoluto del PIB (Producto Interior Bruto) con la tasa de actividad";
 answers[41] = choices[41][1];
 units[41] = "15";
 comments[41] = "Id Pregunta: 112. ";


//  Id pregunta: 480 Año de creación de pregunta: 2016
 questions[42]= "43)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el &aacute;mbito del Ministerio de Defensa y de la Seguridad Social, el control se ejercer&aacute; a trav&eacute;s de:";
 choices[42]= new Array();
 choices[42][0] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[42][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[42][2] = "Las respuestas a) b) no son correctas.";
 choices[42][3] = "Las respuestas a) y b) son correctas.";
 answers[42] = choices[42][3];
 units[42] = "10";
 comments[42] = "Id Pregunta: 480. PRESUPUESTOS GENERALES";


//  Id pregunta: 203 Año de creación de pregunta: 2016
 questions[43]= "44)  Se&ntilde;ale la afirmaci&oacute;n correcta. La tramitaci&oacute;n de las proposiciones de ley se regular&aacute; por:";
 choices[43]= new Array();
 choices[43][0] = "Ley Org&aacute;nica.";
 choices[43][1] = "Lo dispuesto en la normativa comunitaria.";
 choices[43][2] = "Los Reglamentos de las C&aacute;maras.";
 choices[43][3] = "El Reglamento del Congreso de los Diputados, exclusivamente.";
 answers[43] = choices[43][2];
 units[43] = "1";
 comments[43] = "Id Pregunta: 203. CONSTITUCION1978";


//  Id pregunta: 191 Año de creación de pregunta: 2016
 questions[44]= "45)  El Rey podr&aacute; presidir las sesiones del Consejo de Ministros:";
 choices[44]= new Array();
 choices[44][0] = "Cuando el Rey, por razones de inter&eacute;s general, as&iacute; lo decida.";
 choices[44][1] = "A petici&oacute;n del Pleno del Consejo de Ministros.";
 choices[44][2] = "A petici&oacute;n del Presidente del Gobierno.";
 choices[44][3] = "No est&aacute; prevista constitucionalmente la presidencia del Consejo de Ministros por parte del Rey.";
 answers[44] = choices[44][2];
 units[44] = "1";
 comments[44] = "Id Pregunta: 191. CONSTITUCION1978";


//  Id pregunta: 178 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Qu&eacute; es lo que caracteriza un decreto-ley?";
 choices[45]= new Array();
 choices[45][0] = "No puede afectar al ordenamiento de las instituciones b&aacute;sicas del Estado.";
 choices[45][1] = "Es dictado por las Cortes Generales en casos de urgente necesidad.";
 choices[45][2] = "Es dictado por el Presidente del Gobierno en casos de extraordinaria y urgente necesidad.";
 choices[45][3] = "Es dictado por el Gobierno por encargo de las Cortes Generales.";
 answers[45] = choices[45][0];
 units[45] = "1";
 comments[45] = "Id Pregunta: 178. CONSTITUCION1978";


//  Id pregunta: 150 Año de creación de pregunta: 2016
 questions[46]= "47)  Seg&uacute;n la ley 39/2015, el medio elegido por la persona para comunicarse con las Administraciones P&uacute;blicas:";
 choices[46]= new Array();
 choices[46][0] = "&uacute;nicamente podr&aacute; ser modificado cuando de no hacerlo se corra riesgo de no alcanzarse las pretensiones del interesado ";
 choices[46][1] = "no podr&aacute; ser modificado con posterioridad al tr&aacute;mite de audiencia";
 choices[46][2] = "podr&aacute; ser modificado en cualquier momento por la persona";
 choices[46][3] = "no podr&aacute; ser modificado de manera unilateral por el interesado";
 answers[46] = choices[46][2];
 units[46] = "7";
 comments[46] = "Id Pregunta: 150. Ley 39/2015, Art&iacute;culo 14";


//  Id pregunta: 82 Año de creación de pregunta: 2016
 questions[47]= "48)  La titularidad de los derechos de explotaci&oacute;n de un programa de ordenador por una persona jur&iacute;dica expirar&aacute;:";
 choices[47]= new Array();
 choices[47][0] = "A los setenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[47][1] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita, o al de su creaci&oacute;n si no se hubiera divulgado.";
 choices[47][2] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[47][3] = "A los setenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita o al de su creaci&oacute;n si no se hubiera divulgado.";
 answers[47] = choices[47][3];
 units[47] = "41";
 comments[47] = "Id Pregunta: 82. AGE A1 2015";


//  Id pregunta: 49 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Qu&eacute; facilita un ORM?";
 choices[48]= new Array();
 choices[48][0] = "Conversi&oacute;n de objetos a tablas relacionales";
 choices[48][1] = "Conversi&oacute;n de objetos a documentos";
 choices[48][2] = "Conversi&oacute;n de tipos de driver JDBC";
 choices[48][3] = "Conversi&oacute;n de ADO.NET a OLE DB";
 answers[48] = choices[48][0];
 units[48] = "62";
 comments[48] = "Id Pregunta: 49. AGE A1 2015";


//  Id pregunta: 797 Año de creación de pregunta: 2016
 questions[49]= "50)  Los elementos organizativos b&aacute;sicos de las estructuras org&aacute;nicas son:";
 choices[49]= new Array();
 choices[49][0] = "los &oacute;rganos administrativos";
 choices[49][1] = "las entidades dependientes";
 choices[49][2] = "las unidades administrativas";
 choices[49][3] = "los servicios comunes";
 answers[49] = choices[49][2];
 units[49] = "4, 7, 8, 9";
 comments[49] = "Id Pregunta: 797. Ley 40/2015";


//  Id pregunta: 125 Año de creación de pregunta: 2016
 questions[50]= "51)  El derecho de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/20013  podr&aacute; ser limitado cuando acceder a la informaci&oacute;n suponga un perjuicio, se&ntilde;ale cual NO est&aacute; contemplado en dicha ley:";
 choices[50]= new Array();
 choices[50][0] = "Los intereses de las administraciones que cuenten con su propio Consejo de Transparencia u &oacute;rgano equivalente.";
 choices[50][1] = "La garant&iacute;a de la confidencialidad o el secreto requerido en procesos de toma de decisi&oacute;n.";
 choices[50][2] = "La protecci&oacute;n del medio ambiente.";
 choices[50][3] = "Los intereses econ&oacute;micos y comerciales.";
 answers[50] = choices[50][0];
 units[50] = "22";
 comments[50] = "Id Pregunta: 125. ";


//  Id pregunta: 459 Año de creación de pregunta: 2016
 questions[51]= "52)  Seg&uacute;n el art&iacute;culo 41 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, las operaciones financieras que se distinguen son:";
 choices[51]= new Array();
 choices[51][0] = "Enajenaci&oacute;n de inversiones reales y transferencias de capital.";
 choices[51][1] = "Pasivos financieros y transferencias de capital.";
 choices[51][2] = "Activos financieros y pasivos financieros.";
 choices[51][3] = "Activos financieros y enajenaci&oacute;n de inversiones reales.";
 answers[51] = choices[51][2];
 units[51] = "10";
 comments[51] = "Id Pregunta: 459. PRESUPUESTOS GENERALES";


//  Id pregunta: 10 Año de creación de pregunta: 2016
 questions[52]= "53)  El servicio mediante el cual se localiza un terminal m&oacute;vil dentro de alguna de las N c&eacute;lulas gestionadas coordinadamente en una zona de cobertura se denomina:";
 choices[52]= new Array();
 choices[52][0] = "Paging";
 choices[52][1] = "Roaming";
 choices[52][2] = "Handover";
 choices[52][3] = "Trunking";
 answers[52] = choices[52][0];
 units[52] = "117";
 comments[52] = "Id Pregunta: 10. AGE A1 2015";


//  Id pregunta: 338 Año de creación de pregunta: 2016
 questions[53]= "54)  En el Consejo de Europa cada Estado miembro tiene una delegaci&oacute;n nacional en Bruselas conocida como &oacute;rgano de apoyo, denominado:";
 choices[53]= new Array();
 choices[53][0] = "CO.PER.";
 choices[53][1] = "COMPER.";
 choices[53][2] = "CO.RE.PER.";
 choices[53][3] = "CO.PE.RRE.";
 answers[53] = choices[53][2];
 units[53] = "5";
 comments[53] = "Id Pregunta: 338. UNION EUROPEA";


//  Id pregunta: 468 Año de creación de pregunta: 2016
 questions[54]= "55)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, elaborar la documentaci&oacute;n estad&iacute;stico-contable de car&aacute;cter oficial del Sistema de la Seguridad Social es una competencia de:";
 choices[54]= new Array();
 choices[54][0] = "El Ministerio de Hacienda.";
 choices[54][1] = "El Ministerio de Econom&iacute;a.";
 choices[54][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[54][3] = "Ninguna de las respuestas es correcta.";
 answers[54] = choices[54][2];
 units[54] = "10";
 comments[54] = "Id Pregunta: 468. PRESUPUESTOS GENERALES";


//  Id pregunta: 124 Año de creación de pregunta: 2016
 questions[55]= "56)  Se&ntilde;ale la VERDADERA con respecto a las las reclamaciones ante el Consejo de Transparencia y Buen Gobierno:";
 choices[55]= new Array();
 choices[55][0] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de tres meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[55][1] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de seis meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[55][2] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[55][3] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; estimada";
 answers[55] = choices[55][0];
 units[55] = "22";
 comments[55] = "Id Pregunta: 124. ";


//  Id pregunta: 649 Año de creación de pregunta: 2016
 questions[56]= "57)  Los objetivos que persegu&iacute;a Codd con el modelo relacional, se pueden resumir en:";
 choices[56]= new Array();
 choices[56][0] = "Independencia f&iacute;sica, independencia l&oacute;gica, flexibilidad, uniformidad y sencillez.";
 choices[56][1] = "Independencia f&iacute;sica, independencia l&oacute;gica y uniformidad.";
 choices[56][2] = "Independencia f&iacute;sica, flexibilidad, uniformidad y sencillez.";
 choices[56][3] = "Independencia f&iacute;sica, independencia l&oacute;gica, independencia conceptual, flexibilidad, uniformidad y sencillez.";
 answers[56] = choices[56][0];
 units[56] = "60";
 comments[56] = "Id Pregunta: 649. Junta de Extremadura A1 2015";


//  Id pregunta: 538 Año de creación de pregunta: 2016
 questions[57]= "58)  Ser&aacute;/n interoperable/s con los registros electr&oacute;nicos generales y particulares de apoderamientos:";
 choices[57]= new Array();
 choices[57][0] = "los registros mercantiles";
 choices[57][1] = "los registros de la propiedad";
 choices[57][2] = "los protocolos notariales";
 choices[57][3] = "todas son correctas";
 answers[57] = choices[57][3];
 units[57] = "7";
 comments[57] = "Id Pregunta: 538. LEY 39/2015";


//  Id pregunta: 266 Año de creación de pregunta: 2016
 questions[58]= "59)  El T&iacute;tulo en el que la Constituci&oacute;n indica cu&aacute;les son las lenguas oficiales del Estado es:";
 choices[58]= new Array();
 choices[58][0] = "El Segundo.";
 choices[58][1] = "El Primero.";
 choices[58][2] = "El Preliminar.";
 choices[58][3] = "El Tercero.";
 answers[58] = choices[58][0];
 units[58] = "1";
 comments[58] = "Id Pregunta: 266. CONSTITUCION1978";


//  Id pregunta: 843 Año de creación de pregunta: 2016
 questions[59]= "60)  Respecto a la reutilizaci&oacute;n de sistemas y aplicaciones de propiedad de la Administraci&oacute;n:";
 choices[59]= new Array();
 choices[59][0] = "Las Administraciones pondr&aacute;n siempre a disposici&oacute;n de cualquiera de ellas que lo solicite las aplicaciones, desarrolladas por sus servicios o que hayan sido objeto de contrataci&oacute;n y de cuyos derechos de propiedad intelectual sean titulares.";
 choices[59][1] = "Las aplicaciones a las que se refiere el apartado anterior podr&aacute;n ser declaradas como de fuentes abiertas, cuando de ello se derive una mayor transparencia en el funcionamiento de la Administraci&oacute;n P&uacute;blica o se fomente con ello la incorporaci&oacute;n de los ciudadanos a la Sociedad de la informaci&oacute;n.";
 choices[59][2] = "Las Administraciones P&uacute;blicas, con car&aacute;cter posterior a la adquisici&oacute;n, desarrollo o al mantenimiento a lo largo de todo el ciclo de vida de una aplicaci&oacute;n, tanto si se realiza con medios propios o por la contrataci&oacute;n de los servicios correspondientes, deber&aacute;n consultar en el directorio general de aplicaciones.";
 choices[59][3] = "En el directorio general de aplicaciones constar&aacute;n las aplicaciones disponibles de la Administraci&oacute;n General del Estado.";
 answers[59] = choices[59][1];
 units[59] = "4, 7, 8, 9";
 comments[59] = "Id Pregunta: 843. Ley 40/2015";


//  Id pregunta: 470 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Qui&eacute;n remitir&aacute; a las Cortes Generales un informe trimestral acerca de la utilizaci&oacute;n del Fondo regulado en el Fondo de Contingencia de ejecuci&oacute;n presupuestaria seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria?";
 choices[60]= new Array();
 choices[60][0] = "El Ministro de Econom&iacute;a.";
 choices[60][1] = "El Gobierno.";
 choices[60][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[60][3] = "El Presidente del Gobierno.";
 answers[60] = choices[60][1];
 units[60] = "10";
 comments[60] = "Id Pregunta: 470. PRESUPUESTOS GENERALES";


//  Id pregunta: 38 Año de creación de pregunta: 2016
 questions[61]= "62)  LAMP es el acr&oacute;nimo usado para describir un sistema de infraestructura de internet aplicable a la pila:";
 choices[61]= new Array();
 choices[61][0] = "Linux, Ant, MySQL/MariaDB y PJava";
 choices[61][1] = "Linux, Apache, Microsoft SQLServer y Perl, PHP, o Python";
 choices[61][2] = "Linux, Ant, MongoDB y Perl, PHP, o Python";
 choices[61][3] = "Linux, Apache, MySQL/MariaDB y Perl, PHP, o Python";
 answers[61] = choices[61][3];
 units[61] = "62";
 comments[61] = "Id Pregunta: 38. AGE A1 2015";


//  Id pregunta: 610 Año de creación de pregunta: 2016
 questions[62]= "63)  En el lenguaje de manipulaci&oacute;n de datos, &iquest;cu&aacute;l de las siguientes cl&aacute;usulas va asociada a la cl&aacute;usula HAVING?";
 choices[62]= new Array();
 choices[62][0] = "GROUP BY.";
 choices[62][1] = "COUNT.";
 choices[62][2] = "WHERE.";
 choices[62][3] = "DISTINCT.";
 answers[62] = choices[62][0];
 units[62] = "60";
 comments[62] = "Id Pregunta: 610. Junta de Extremadura A1 2015";


//  Id pregunta: 341 Año de creación de pregunta: 2016
 questions[63]= "64)  Tras la cuarta ampliaci&oacute;n de la Uni&oacute;n (Austria, Suecia y Finlandia), el n&uacute;mero total de diputados se estableci&oacute; en:";
 choices[63]= new Array();
 choices[63][0] = "623";
 choices[63][1] = "649";
 choices[63][2] = "626";
 choices[63][3] = "565";
 answers[63] = choices[63][2];
 units[63] = "5";
 comments[63] = "Id Pregunta: 341. UNION EUROPEA";


//  Id pregunta: 807 Año de creación de pregunta: 2016
 questions[64]= "65)  Los Directores generales ser&aacute;n nombrados y separados por:";
 choices[64]= new Array();
 choices[64][0] = "Real Decreto del Consejo de Ministros, a propuesta del titular del Departamento o del Presidente del Gobierno";
 choices[64][1] = "Ley de las Cortes Generales, a propuesta del titular del Departamento";
 choices[64][2] = "Ley de las Cortes Generales, a propuesta del titular del Departamento o del Presidente del Gobierno";
 choices[64][3] = "Real Decreto del Consejo de Ministros, a propuesta del titular del Departamento";
 answers[64] = choices[64][0];
 units[64] = "4, 7, 8, 9";
 comments[64] = "Id Pregunta: 807. Ley 40/2015";


//  Id pregunta: 844 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Qu&eacute; t&eacute;cnica de cooperaci&oacute;n se regula por primera vez con la Ley 40/2015?";
 choices[65]= new Array();
 choices[65][0] = "Conferencia de Presidentes.";
 choices[65][1] = "Convenios de colaboraci&oacute;n.";
 choices[65][2] = "Comisiones Bilaterales de Cooperaci&oacute;n.";
 choices[65][3] = "Conferencias Sectoriales.";
 answers[65] = choices[65][0];
 units[65] = "4, 7, 8, 9";
 comments[65] = "Id Pregunta: 844. Ley 40/2015";


//  Id pregunta: 173 Año de creación de pregunta: 2016
 questions[66]= "67)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la cuesti&oacute;n de confianza planteada por el Presidente del Gobierno, se entender&aacute; otorgada cuando vote a su favor la mayor&iacute;a:";
 choices[66]= new Array();
 choices[66][0] = "absoluta de las Cortes Generales.";
 choices[66][1] = "absoluta del Congreso de los Diputados.";
 choices[66][2] = "simple de las Cortes Generales.";
 choices[66][3] = "simple del Congreso de los Diputados.";
 answers[66] = choices[66][3];
 units[66] = "1";
 comments[66] = "Id Pregunta: 173. CONSTITUCION1978";


//  Id pregunta: 453 Año de creación de pregunta: 2016
 questions[67]= "68)  En las Administraciones P&uacute;blicas...";
 choices[67]= new Array();
 choices[67][0] = "Existe un Presupuesto ordinario &uacute;nicamente";
 choices[67][1] = "Existen s&oacute;lo un presupuesto ordinario y un presupuesto extraordinario";
 choices[67][2] = "Existe un &uacute;nico presupuesto ordinario y uno o varios presupuestos extraordinarios";
 choices[67][3] = "Existen varios presupuestos que indistintamente pueden ser considerados ordinarios o extraordinarios";
 answers[67] = choices[67][0];
 units[67] = "10";
 comments[67] = "Id Pregunta: 453. PRESUPUESTOS GENERALES";


//  Id pregunta: 484 Año de creación de pregunta: 2016
 questions[68]= "69)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, dirigir la contabilidad de las entidades que integran el sistema de la Seguridad Social y gestionar la contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una funci&oacute;n de:";
 choices[68]= new Array();
 choices[68][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[68][1] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[68][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[68][3] = "La Intervenci&oacute;n General de la Defensa.";
 answers[68] = choices[68][2];
 units[68] = "10";
 comments[68] = "Id Pregunta: 484. PRESUPUESTOS GENERALES";


//  Id pregunta: 848 Año de creación de pregunta: 2016
 questions[69]= "70)  El RPO (Recovery Point Objective) de una organizaci&oacute;n son 2 horas. &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?: ";
 choices[69]= new Array();
 choices[69][0] = "No m&aacute;s de 2 horas de datos de producci&oacute;n se pueden perder en caso de desastre";
 choices[69][1] = "No m&aacute;s de 4 horas de datos de producci&oacute;n se pueden perder en caso de desastre";
 choices[69][2] = "El tiempo para recuperar los sistemas en producci&oacute;n de nuevo no puede ser m&aacute;s de 2 horas.";
 choices[69][3] = "El tiempo para recuperar los sistemas en producci&oacute;n de nuevo no puede ser m&aacute;s de 4 horas.";
 answers[69] = choices[69][0];
 units[69] = "45";
 comments[69] = "Id Pregunta: 848. Xunta de Galicia 2015";


//  Id pregunta: 392 Año de creación de pregunta: 2016
 questions[70]= "71)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[70]= new Array();
 choices[70][0] = "Indirecta.";
 choices[70][1] = "Directa.";
 choices[70][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[70][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[70] = choices[70][1];
 units[70] = "14";
 comments[70] = "Id Pregunta: 392. POLITICAS DE IGUALDAD";


//  Id pregunta: 521 Año de creación de pregunta: 2016
 questions[71]= "72)  El sector p&uacute;blico institucional se integra por:";
 choices[71]= new Array();
 choices[71][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho privado vinculados o independientes de las Administraciones P&uacute;blicas";
 choices[71][1] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[71][2] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o independientes de las Administraciones P&uacute;blicas";
 choices[71][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[71] = choices[71][1];
 units[71] = "7";
 comments[71] = "Id Pregunta: 521. LEY 39/2015";


//  Id pregunta: 632 Año de creación de pregunta: 2016
 questions[72]= "73)  El sistema operativo que se dise&ntilde;a pensando en los tipos de datos y recursos que va a manejar: ficheros, procesos, memoria, hardware, etc., y en las propiedades y servicios que &eacute;stos pueden prestar, se construye siguiendo un modelo:";
 choices[72]= new Array();
 choices[72][0] = "Monol&iacute;tico.";
 choices[72][1] = "Estratificado.";
 choices[72][2] = "Cliente/servidor.";
 choices[72][3] = "Orientado a objetos.";
 answers[72] = choices[72][3];
 units[72] = "56";
 comments[72] = "Id Pregunta: 632. Junta de Extremadura A1 2015";


//  Id pregunta: 257 Año de creación de pregunta: 2016
 questions[73]= "74)  El Art&iacute;culo 98 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Gobierno Espa&ntilde;ol se compone de:";
 choices[73]= new Array();
 choices[73][0] = "El Presidente y su gabinete.";
 choices[73][1] = "El Presidente y sus Ministros.";
 choices[73][2] = "El Rey y el Presidente.";
 choices[73][3] = "El Presidente, de los Vicepresidentes en su caso, de los Ministros y dem&aacute;s miembros que establezca la ley.";
 answers[73] = choices[73][2];
 units[73] = "1";
 comments[73] = "Id Pregunta: 257. CONSTITUCION1978";


//  Id pregunta: 422 Año de creación de pregunta: 2016
 questions[74]= "75)  Los distintivos para reconocer a aquellas empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato, lo crear&aacute;:";
 choices[74]= new Array();
 choices[74][0] = "El Ministerio de Igualdad.";
 choices[74][1] = "El Ministerio de Empleo y Seguridad Social.";
 choices[74][2] = "Ambas son correctas.";
 choices[74][3] = "La Consejer&iacute;a de Igualdad de cada CCAA.";
 answers[74] = choices[74][1];
 units[74] = "14";
 comments[74] = "Id Pregunta: 422. POLITICAS DE IGUALDAD";


