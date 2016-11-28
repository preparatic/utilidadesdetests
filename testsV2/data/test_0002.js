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

//  Id pregunta: 538 Año de creación de pregunta: 2016
 questions[0]= "1)  En el registro electr&oacute;nico general de apoderamientos, deber&aacute;n inscribirse, al menos, los de car&aacute;cter general otorgados por quien ostente la condici&oacute;n de interesado en un procedimiento administrativo a favor de representante:";
 choices[0]= new Array();
 choices[0][0] = "apud acta";
 choices[0][1] = "presencialmente";
 choices[0][2] = "electr&oacute;nicamente";
 choices[0][3] = "todas son correctas";
 answers[0] = choices[0][3];
 units[0] = "7";
 comments[0] = "Id Pregunta: 538. LEY 39/2015";


//  Id pregunta: 212 Año de creación de pregunta: 2016
 questions[1]= "2)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con la regulaci&oacute;n constitucional de la composici&oacute;n del Senado:";
 choices[1]= new Array();
 choices[1][0] = "La poblaci&oacute;n de Melilla elegir&aacute; dos Senadores.";
 choices[1][1] = "En cada provincia se elegir&aacute;n tres senadores.";
 choices[1][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas elegir&aacute;n un senador cuando su poblaci&oacute;n supere el mill&oacute;n de habitantes.";
 choices[1][3] = "El Senado se compone de 350 senadores.";
 answers[1] = choices[1][0];
 units[1] = "1";
 comments[1] = "Id Pregunta: 212. CONSTITUCION1978";


//  Id pregunta: 827 Año de creación de pregunta: 2016
 questions[2]= "3)  La actuaci&oacute;n de autoridades y personal al servicio de las Administraciones P&uacute;blicas en los que concurran motivos de abstenci&oacute;n ...";
 choices[2]= new Array();
 choices[2][0] = "No implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido pero dar&aacute; lugar a la responsabilidad que proceda";
 choices[2][1] = "Dar&aacute; lugar a la responsabilidad que proceda pero no implicar&aacute; en ning&uacute;n caso la invalidez de los actos en que hayan intervenido";
 choices[2][2] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido";
 choices[2][3] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido dando lugar a la responsabilidad que proceda";
 answers[2] = choices[2][1];
 units[2] = "4, 7, 8, 9";
 comments[2] = "Id Pregunta: 827. Ley 40/2015";


//  Id pregunta: 166 Año de creación de pregunta: 2016
 questions[3]= "4)  El indicador de la Comisi&oacute;n Europea &ldquo;DESI&rdquo; (Digital Economy &amp; Society Index) tiene entre sus dimensiones:";
 choices[3]= new Array();
 choices[3][0] = "Interoperabilidad";
 choices[3][1] = "Integridad";
 choices[3][2] = "Capital humano";
 choices[3][3] = "Trazabilidad";
 answers[3] = choices[3][2];
 units[3] = "19";
 comments[3] = "Id Pregunta: 166. https://ec.europa.eu/digital-single-market/en/desi Conectividad, Capital humano, Uso de internet, Integraci&oacute;n de tecnolog&iacute;a digital, Servicios p&uacute;blicos digitales";


//  Id pregunta: 52 Año de creación de pregunta: 2016
 questions[4]= "5)  Las normas ISO que cubren los procesos de especificaci&oacute;n de requisitos de calidad del software y evaluaci&oacute;n de la calidad del software corresponden a la serie:";
 choices[4]= new Array();
 choices[4][0] = "ISO/IEC 25000";
 choices[4][1] = "ISO/IEC 27000";
 choices[4][2] = "ISO 9000";
 choices[4][3] = "ISO 9001";
 answers[4] = choices[4][0];
 units[4] = "93";
 comments[4] = "Id Pregunta: 52. AGE A1 2015";


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


//  Id pregunta: 34 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Cu&aacute;les de los siguientes mecanismos no existe espec&iacute;ficamente como cach&eacute; de c&oacute;digo PHP?";
 choices[6]= new Array();
 choices[6][0] = "Memcached";
 choices[6][1] = "OpCache";
 choices[6][2] = "WinCache Extension for PHP";
 choices[6][3] = "Alternative PHP Cache";
 answers[6] = choices[6][0];
 units[6] = "65";
 comments[6] = "Id Pregunta: 34. AGE A1 2015";


//  Id pregunta: 639 Año de creación de pregunta: 2016
 questions[7]= "8)  En el sistema operativo Unix/Linux, el comando id:";
 choices[7]= new Array();
 choices[7][0] = "Muestra el n&uacute;mero de identificaci&oacute;n y el grupo al que pertenece el usuario.";
 choices[7][1] = "El comando id no existe.";
 choices[7][2] = "Muestra el n&uacute;mero de procesos lanzados por el usuario.";
 choices[7][3] = "Muestra las hebras y las identificaciones de los archivos abiertos por el usuario.";
 answers[7] = choices[7][0];
 units[7] = "57";
 comments[7] = "Id Pregunta: 639. Junta de Extremadura A1 2015";


//  Id pregunta: 548 Año de creación de pregunta: 2016
 questions[8]= "9)  El principio definido en el est&aacute;ndar ISO/IEC 38500 para la Gobernanza TIC que establece la necesidad de cumplir los requerimientos regulatorios y legales es el principio de:";
 choices[8]= new Array();
 choices[8][0] = "Conformidad";
 choices[8][1] = "Responsabilidad";
 choices[8][2] = "Adquisici&oacute;n";
 choices[8][3] = "Desempe&ntilde;o";
 answers[8] = choices[8][0];
 units[8] = "26";
 comments[8] = "Id Pregunta: 548. Gobernanza TIC";


//  Id pregunta: 165 Año de creación de pregunta: 2016
 questions[9]= "10)  Como parte del Plan de acci&oacute;n sobre administraci&oacute;n electr&oacute;nica para 2010-2020, la Comisi&oacute;n:";
 choices[9]= new Array();
 choices[9][0] = "Tratar&aacute; de interconectar los registros mercantiles en toda la UE.";
 choices[9][1] = "Se adoptar&aacute;n nuevas normas en materia de telecomunicaciones";
 choices[9][2] = "Se revisar&aacute; la Directiva de servicios de comunicaci&oacute;n audiovisual existente para adaptarse a la evoluci&oacute;n tecnol&oacute;gica";
 choices[9][3] = "Se actualizar&aacute;n las normas de comercio electr&oacute;nico";
 answers[9] = choices[9][0];
 units[9] = "19";
 comments[9] = "Id Pregunta: 165. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/";


//  Id pregunta: 818 Año de creación de pregunta: 2016
 questions[10]= "11)  Los Directores Insulares de la Administraci&oacute;n General del Estado (se&ntilde;ala la incorrecta):";
 choices[10]= new Array();
 choices[10][0] = "ser&aacute;n nombrados por el Delegado del Gobierno mediante el procedimiento de concurso-oposici&oacute;n";
 choices[10][1] = "ser&aacute;n nombrados entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades Locales, pertenecientes a Cuerpos o Escalas clasificados como Subgrupo A1";
 choices[10][2] = "dependen jer&aacute;rquicamente del Delegado del Gobierno en la Comunidad Aut&oacute;noma o del Subdelegado del Gobierno en la provincia, cuando este cargo exista";
 choices[10][3] = "ejercen, en su &aacute;mbito territorial, las competencias atribuidas por esta Ley a los Subdelegados del Gobierno en las provincias";
 answers[10] = choices[10][0];
 units[10] = "4, 7, 8, 9";
 comments[10] = "Id Pregunta: 818. Ley 40/2015";


//  Id pregunta: 267 Año de creación de pregunta: 2016
 questions[11]= "12)  El T&iacute;tulo Primero de la Constituci&oacute;n Espa&ntilde;ola est&aacute; dedicado a:";
 choices[11]= new Array();
 choices[11][0] = "Los Derechos y Deberes fundamentales.";
 choices[11][1] = "La Corona.";
 choices[11][2] = "El Poder Judicial.";
 choices[11][3] = "Las Cortes Generales.";
 answers[11] = choices[11][2];
 units[11] = "1";
 comments[11] = "Id Pregunta: 267. CONSTITUCION1978";


//  Id pregunta: 178 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Qu&eacute; es lo que caracteriza un decreto-ley?";
 choices[12]= new Array();
 choices[12][0] = "No puede afectar al ordenamiento de las instituciones b&aacute;sicas del Estado.";
 choices[12][1] = "Es dictado por las Cortes Generales en casos de urgente necesidad.";
 choices[12][2] = "Es dictado por el Presidente del Gobierno en casos de extraordinaria y urgente necesidad.";
 choices[12][3] = "Es dictado por el Gobierno por encargo de las Cortes Generales.";
 answers[12] = choices[12][0];
 units[12] = "1";
 comments[12] = "Id Pregunta: 178. CONSTITUCION1978";


//  Id pregunta: 70 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Qui&eacute;n determina las condiciones t&eacute;cnicas normalizadas del Punto General de Entrada de Factura Electr&oacute;nica?";
 choices[13]= new Array();
 choices[13][0] = "La Secretar&iacute;a de Estado de Administraciones P&uacute;blicas conjuntamente con la Secretar&iacute;a de Estado de Presupuestos y Gastos";
 choices[13][1] = "La Secretar&iacute;a de Estado de Hacienda conjuntamente con la Comisi&oacute;n Ministerial de Administraci&oacute; Digital";
 choices[13][2] = "La Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 choices[13][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[13] = choices[13][0];
 units[13] = "75";
 comments[13] = "Id Pregunta: 70. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 793 Año de creación de pregunta: 2016
 questions[14]= "15)  En la Administraci&oacute;n General del Estado en el exterior son &oacute;rganos directivos:";
 choices[14]= new Array();
 choices[14][0] = "los Ministros y los Secretarios de Estado";
 choices[14][1] = "los Subsecretarios y Secretarios generales";
 choices[14][2] = "los embajadores y representantes permanentes ante Organizaciones internacionales";
 choices[14][3] = "los Directores generales";
 answers[14] = choices[14][2];
 units[14] = "4, 7, 8, 9";
 comments[14] = "Id Pregunta: 793. Ley 40/2015";


//  Id pregunta: 343 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Cu&aacute;l es el n&uacute;mero m&iacute;nimo de parlamentarios de cinco Estados miembros para constituir un grupo pol&iacute;tico?:";
 choices[15]= new Array();
 choices[15][0] = "23";
 choices[15][1] = "20";
 choices[15][2] = "14";
 choices[15][3] = "18";
 answers[15] = choices[15][1];
 units[15] = "5";
 comments[15] = "Id Pregunta: 343. UNION EUROPEA";


//  Id pregunta: 402 Año de creación de pregunta: 2016
 questions[16]= "17)  El principio de igualdad de trato y oportunidades entre mujeres y hombres tiene car&aacute;cter:";
 choices[16]= new Array();
 choices[16][0] = "Parcial.";
 choices[16][1] = "Sectorial.";
 choices[16][2] = "Tranversal.";
 choices[16][3] = "Vertical.";
 answers[16] = choices[16][2];
 units[16] = "14";
 comments[16] = "Id Pregunta: 402. POLITICAS DE IGUALDAD";


//  Id pregunta: 51 Año de creación de pregunta: 2016
 questions[17]= "18)  De acuerdo con el Real Decreto 1720/2007 indique qu&eacute; medida ha de ser aplicada obligatoriamente a los ficheros de los que sean responsables las Administraciones tributarias en el ejercicio de sus potestades tributarias:";
 choices[17]= new Array();
 choices[17][0] = "Cifrado de las comunicaciones";
 choices[17][1] = "Al menos, una auditor&iacute;a bienal (cada 2 a&ntilde;os)";
 choices[17][2] = "Registro de los accesos";
 choices[17][3] = "No queda regulado en dicho Real Decreto al depender de la criticidad del fichero.";
 answers[17] = choices[17][1];
 units[17] = "35";
 comments[17] = "Id Pregunta: 51. AGE A1 2015. Pregunta anulada en el examen real, ya que la opci&oacute;n B dec&iacute;a &quot;bianual&quot; en lugar de &quot;bienal&quot;";


//  Id pregunta: 822 Año de creación de pregunta: 2016
 questions[18]= "19)  En las Comunidades Aut&oacute;nomas, en caso de ausencia, vacante o enfermedad del titular de la Delegaci&oacute;n del Gobierno, ser&aacute; suplido por:";
 choices[18]= new Array();
 choices[18][0] = "el Subdelegado del Gobierno que el Delegado designe y, en su defecto, al de la provincia en que tenga su sede";
 choices[18][1] = "el Subdelegado del Gobierno de la provincia en que tenga su sede y, en su defecto, al que el Delegado designe";
 choices[18][2] = "el Subdirector General que el Delegado designe";
 choices[18][3] = "el Secretario de Estado";
 answers[18] = choices[18][0];
 units[18] = "4, 7, 8, 9";
 comments[18] = "Id Pregunta: 822. Ley 40/2015";


//  Id pregunta: 521 Año de creación de pregunta: 2016
 questions[19]= "20)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas tiene:";
 choices[19]= new Array();
 choices[19][0] = "un art&iacute;culo";
 choices[19][1] = "dos art&iacute;culos";
 choices[19][2] = "tres art&iacute;culos";
 choices[19][3] = "cuatro art&iacute;culos";
 answers[19] = choices[19][1];
 units[19] = "7";
 comments[19] = "Id Pregunta: 521. LEY 39/2015";


//  Id pregunta: 113 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;Cu&aacute;l de las siguientes instituciones NO proporciona estad&iacute;sticas oficiales propias sobre el mercado de trabajo en Espa&ntilde;a?";
 choices[20]= new Array();
 choices[20][0] = "La Seguridad Social";
 choices[20][1] = "El Instituto Nacional de Estad&iacute;stica";
 choices[20][2] = "El Servicio de Empleo P&uacute;blico Estatal";
 choices[20][3] = "El Banco de Espa&ntilde;a";
 answers[20] = choices[20][3];
 units[20] = "15";
 comments[20] = "Id Pregunta: 113. ";


//  Id pregunta: 112 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Qu&eacute; dos magnitudes relaciona la Ley de Okun?";
 choices[21]= new Array();
 choices[21][0] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de inflaci&oacute;n";
 choices[21][1] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la variaci&oacute;n del desempleo";
 choices[21][2] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de actividad";
 choices[21][3] = "El valor absoluto del PIB (Producto Interior Bruto) con la tasa de actividad";
 answers[21] = choices[21][1];
 units[21] = "15";
 comments[21] = "Id Pregunta: 112. ";


//  Id pregunta: 160 Año de creación de pregunta: 2016
 questions[22]= "23)  El mercado &uacute;nico digital se basa en tres pilares. Se&ntilde;ale cu&aacute;l NO es uno de los tres pilares.";
 choices[22]= new Array();
 choices[22][0] = "Mejorar el acceso de consumidores y empresas a los bienes y servicios digitales en toda Europa.";
 choices[22][1] = "Promover la actualizaci&oacute;n de las normas de accesibilidad hacia WCAG 3.0 por una sociedad m&aacute;s incluyente.";
 choices[22][2] = "Creaci&oacute;n de las condiciones adecuadas y la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan florecer";
 choices[22][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[22] = choices[22][1];
 units[22] = "19";
 comments[22] = "Id Pregunta: 160. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Mayo/Noticia-2015-05-07-estrategia-mercado-unico-digital-europeo.html#.WCjr0mrhDIU";


//  Id pregunta: 28 Año de creación de pregunta: 2016
 questions[23]= "24)  En UNIX, la llamada &ldquo;FORK&rdquo;:";
 choices[23]= new Array();
 choices[23][0] = "Controla el tiempo de ejecuci&oacute;n de un proceso.";
 choices[23][1] = "Env&iacute;a una se&ntilde;al al proceso especificado.";
 choices[23][2] = "Crea una copia del proceso que hace la llamada.";
 choices[23][3] = "Elimina el mapa de memoria del proceso que hace la llamada.";
 answers[23] = choices[23][2];
 units[23] = "57";
 comments[23] = "Id Pregunta: 28. AGE A1 2015";


//  Id pregunta: 762 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes es uno de los pilares en los que se fundamenta la Estrategia del Mercado &Uacute;nico Digital?";
 choices[24]= new Array();
 choices[24][0] = "Mejorar el acceso de los consumidores y empresas a los bienes y servicios digitales en Europa";
 choices[24][1] = "Aplicar est&aacute;ndares de calidad a los servicios digitales en Europa";
 choices[24][2] = "Apertura al exterior";
 choices[24][3] = "I+D+i como forma de mejorar los servicios digitales de las empresas europeas";
 answers[24] = choices[24][0];
 units[24] = "17";
 comments[24] = "Id Pregunta: 762. Mercado &Uacute;nico Digital";


//  Id pregunta: 516 Año de creación de pregunta: 2016
 questions[25]= "26)  El sector p&uacute;blico institucional se integra por:";
 choices[25]= new Array();
 choices[25][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[25][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[25][2] = "las Universidades p&uacute;blicas";
 choices[25][3] = "todas son correctas";
 answers[25] = choices[25][3];
 units[25] = "7";
 comments[25] = "Id Pregunta: 516. LEY 39/2015";


//  Id pregunta: 844 Año de creación de pregunta: 2016
 questions[26]= "27)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Los &oacute;rganos colegiados de la Administraci&oacute;n General del Estado y de sus Organismos p&uacute;blicos, por su composici&oacute;n, se clasifican en:";
 choices[26]= new Array();
 choices[26][0] = "&Oacute;rganos colegiados interministeriales, si sus miembros proceden de diferentes Ministerios.";
 choices[26][1] = "&Oacute;rganos colegiados ministeriales, si sus componentes proceden de los &oacute;rganos del mismo Ministerio.";
 choices[26][2] = "A y B son correctas.";
 choices[26][3] = "A y B son incorrectas.";
 answers[26] = choices[26][2];
 units[26] = "4, 7, 8, 9";
 comments[26] = "Id Pregunta: 844. Ley 40/2015";


//  Id pregunta: 772 Año de creación de pregunta: 2016
 questions[27]= "28)  Las Administraciones P&uacute;blicas:";
 choices[27]= new Array();
 choices[27][0] = "se relacionar&aacute;n entre s&iacute; y con sus &oacute;rganos, organismos p&uacute;blicos y entidades vinculados o dependientes a trav&eacute;s de medios no electr&oacute;nicos, que aseguren la interoperabilidad y seguridad de los sistemas y soluciones adoptadas por cada una de ellas";
 choices[27][1] = "garantizar&aacute;n la protecci&oacute;n de los datos de car&aacute;cter personal";
 choices[27][2] = "facilitar&aacute;n preferentemente la prestaci&oacute;n disociada de servicios a los interesados";
 choices[27][3] = "todas son correctas";
 answers[27] = choices[27][1];
 units[27] = "4, 7, 8, 9";
 comments[27] = "Id Pregunta: 772. Ley 40/2015";


//  Id pregunta: 665 Año de creación de pregunta: 2016
 questions[28]= "29)  Seg&uacute;n la Ley 39/2015, la iniciaci&oacute;n de un procedimiento administrativo puede realizarse:";
 choices[28]= new Array();
 choices[28][0] = "De oficio.";
 choices[28][1] = "A solicitud del interesado.";
 choices[28][2] = "De oficio o a solicitud del interesado.";
 choices[28][3] = "Por la Administraci&oacute;n P&uacute;blica responsable.";
 answers[28] = choices[28][2];
 units[28] = "7";
 comments[28] = "Id Pregunta: 665. Art&iacute;culo 54 de la Ley 39/2015";


//  Id pregunta: 588 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Cu&aacute;l es el per&iacute;odo temporal del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[29]= new Array();
 choices[29][0] = "Comprende del a&ntilde;o 2015 al 2017";
 choices[29][1] = "Comprende del a&ntilde;o 2015 al 2020";
 choices[29][2] = "Comprende del a&ntilde;o 2016 al 2018";
 choices[29][3] = "Ninguna de las anteriores";
 answers[29] = choices[29][1];
 units[29] = "19";
 comments[29] = "Id Pregunta: 588. Estrategia TIC";


//  Id pregunta: 741 Año de creación de pregunta: 2016
 questions[30]= "31)  En relaci&oacute;n al principio rector Orientaci&oacute;n al usuario del servicio del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[30]= new Array();
 choices[30][0] = "Es necesario redefinir los servicios empezando por el lado del usuario, ya sea un ciudadano o un empleado p&uacute;blico, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y seguridad.";
 choices[30][1] = "Es necesario redefinir los servicios empezando por el lado del ciudadano, ya sea un funcionario o una persona f&iacute;sica, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y transparencia.";
 choices[30][2] = "Se requiere modernizar los servicios p&uacute;blicos empezando por el lado del ciudadano, ya sea un funcionario o una persona f&iacute;sica, con una vocaci&oacute;n de transparencia, usabilidad, simplicidad y accesibilidad.";
 choices[30][3] = "Es necesario redefinir los servicios empezando por el lado del usuario, ya sea un ciudadano o un empleado p&uacute;blico, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y transparencia.";
 answers[30] = choices[30][0];
 units[30] = "28";
 comments[30] = "Id Pregunta: 741. Estrategia TIC";


//  Id pregunta: 316 Año de creación de pregunta: 2016
 questions[31]= "32)  El Consejo de la Uni&oacute;n Europea de reunir&aacute; por:";
 choices[31]= new Array();
 choices[31][0] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de dos de sus miembros o de la Comisi&oacute;n.";
 choices[31][1] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n.";
 choices[31][2] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de tres de sus miembros o de la Comisi&oacute;n.";
 choices[31][3] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n o el Parlamento.";
 answers[31] = choices[31][1];
 units[31] = "5";
 comments[31] = "Id Pregunta: 316. UNION EUROPEA";


//  Id pregunta: 315 Año de creación de pregunta: 2016
 questions[32]= "33)  El Colegio de Comisarios se re&uacute;ne:";
 choices[32]= new Array();
 choices[32][0] = "Una vez por semana.";
 choices[32][1] = "Una vez al mes.";
 choices[32][2] = "Dos veces en semana.";
 choices[32][3] = "Cuando lo acuerde el Presidente de la Comisi&oacute;n, y adem&aacute;s una vez al mes.";
 answers[32] = choices[32][0];
 units[32] = "5";
 comments[32] = "Id Pregunta: 315. UNION EUROPEA";


//  Id pregunta: 456 Año de creación de pregunta: 2016
 questions[33]= "34)  El Presupuesto por programas sirve para saber...";
 choices[33]= new Array();
 choices[33][0] = "En qu&eacute; nos gastamos el dinero";
 choices[33][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[33][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[33][3] = "Qui&eacute;n se gasta el dinero";
 answers[33] = choices[33][2];
 units[33] = "10";
 comments[33] = "Id Pregunta: 456. PRESUPUESTOS GENERALES";


//  Id pregunta: 651 Año de creación de pregunta: 2016
 questions[34]= "35)  Los objetivos que persegu&iacute;a Codd con el modelo relacional, se pueden resumir en:";
 choices[34]= new Array();
 choices[34][0] = "Independencia f&iacute;sica, independencia l&oacute;gica, flexibilidad, uniformidad y sencillez.";
 choices[34][1] = "Independencia f&iacute;sica, independencia l&oacute;gica y uniformidad.";
 choices[34][2] = "Independencia f&iacute;sica, flexibilidad, uniformidad y sencillez.";
 choices[34][3] = "Independencia f&iacute;sica, independencia l&oacute;gica, independencia conceptual, flexibilidad, uniformidad y sencillez.";
 answers[34] = choices[34][0];
 units[34] = "60";
 comments[34] = "Id Pregunta: 651. Junta de Extremadura A1 2015";


//  Id pregunta: 71 Año de creación de pregunta: 2016
 questions[35]= "36)  Seg&uacute;n el Modelo de Referencia Workflow definido por WfMC, &iquest;cu&aacute;l de las siguientes funciones corresponde al Servicio de Representaci&oacute;n del Workflow?";
 choices[35]= new Array();
 choices[35][0] = "Interpretar la descripci&oacute;n de procesos y controlar las diferentes instancias de los procesos, secuenciar las actividades, adicionar elementos a la lista de trabajo de los usuarios, e invocar las aplicaciones necesarias.";
 choices[35][1] = "Especificar el formato de intercambio com&uacute;n para soportar la transferencia de definiciones de procesos entre productos diferentes, utilizando un lenguaje de definici&oacute;n de procesos.";
 choices[35][2] = "Definir los mecanismos requeridos por los desarrolladores de productos workflow para implementar la comunicaci&oacute;n de un motor workflow con otros.";
 choices[35][3] = "Monitorizar informaci&oacute;n relevante del workflow, fundamentalmente con fines de auditor&iacute;a y estad&iacute;sticos.";
 answers[35] = choices[35][0];
 units[35] = "86";
 comments[35] = "Id Pregunta: 71. AGE A1 2015";


//  Id pregunta: 401 Año de creación de pregunta: 2016
 questions[36]= "37)  Entre los criterios generales de actuaci&oacute;n los Poderes P&uacute;blicos, tienen:";
 choices[36]= new Array();
 choices[36][0] = "La implantaci&oacute;n de un lenguaje no sexista en el &aacute;mbito administrativo, y en la totalidad de las relaciones sociales, culturales y art&iacute;sticas.";
 choices[36][1] = "La participaci&oacute;n equilibrada de mujeres y hombres en las candidaturas electorales y toma de decisiones.";
 choices[36][2] = "Ambas son correctas.";
 choices[36][3] = "A y B son incorrectas.";
 answers[36] = choices[36][2];
 units[36] = "14";
 comments[36] = "Id Pregunta: 401. POLITICAS DE IGUALDAD";


//  Id pregunta: 571 Año de creación de pregunta: 2016
 questions[37]= "38)  El sector Servicios NO incluye:";
 choices[37]= new Array();
 choices[37][0] = "El Comercio";
 choices[37][1] = "Los Transportes";
 choices[37][2] = "La Energ&iacute;a";
 choices[37][3] = "Las Comunicaciones";
 answers[37] = choices[37][2];
 units[37] = "12";
 comments[37] = "Id Pregunta: 571. Modelo econ&oacute;mico";


//  Id pregunta: 261 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Qui&eacute;n representa al Consejo General del Poder Judicial?";
 choices[38]= new Array();
 choices[38][0] = "La Comisi&oacute;n Permanente.";
 choices[38][1] = "El Presidente.";
 choices[38][2] = "El Pleno.";
 choices[38][3] = "El Vicepresidente.";
 answers[38] = choices[38][3];
 units[38] = "1";
 comments[38] = "Id Pregunta: 261. CONSTITUCION1978";


//  Id pregunta: 666 Año de creación de pregunta: 2016
 questions[39]= "40)  De acuerdo a la Ley 39/2015, el formato del expediente administrativo ser&aacute;:";
 choices[39]= new Array();
 choices[39][0] = "Siempre en formato electr&oacute;nico.";
 choices[39][1] = "Siempre en formato papel.";
 choices[39][2] = "Las personas f&iacute;sicas podr&aacute;n elegir en todo momento el formato del expediente administrativo.";
 choices[39][3] = "La ley no regula el formato del expediente.";
 answers[39] = choices[39][0];
 units[39] = "7";
 comments[39] = "Id Pregunta: 666. Art&iacute;culo 70 de la Ley 39/2015";


//  Id pregunta: 748 Año de creación de pregunta: 2016
 questions[40]= "41)  Respecto a los contratos de colaboraci&oacute;n entre el sector p&uacute;blico y el sector privado, NO se incluyen entre las prestaciones que pueden ser objeto de estos contratos:";
 choices[40]= new Array();
 choices[40][0] = "La construcci&oacute;n, instalaci&oacute;n o transformaci&oacute;n de obras, equipos, sistemas, y productos o bienes complejos, as&iacute; como su mantenimiento, actualizaci&oacute;n o renovaci&oacute;n, su explotaci&oacute;n o su gesti&oacute;n.";
 choices[40][1] = "La gesti&oacute;n integral del mantenimiento de instalaciones para la investigaci&oacute;n.";
 choices[40][2] = "La fabricaci&oacute;n de bienes y la prestaci&oacute;n de servicios que incorporen tecnolog&iacute;a espec&iacute;ficamente desarrollada con el prop&oacute;sito de aportar soluciones m&aacute;s avanzadas y econ&oacute;micamente m&aacute;s ventajosas que las existentes en el mercado.";
 choices[40][3] = "Todas las anteriores pueden ser objeto de ese tipo de contratos.";
 answers[40] = choices[40][1];
 units[40] = "18, 20";
 comments[40] = "Id Pregunta: 748. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 497 Año de creación de pregunta: 2016
 questions[41]= "42)  Seg&uacute;n el art&iacute;culo 13.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el aplazamiento y fraccionamiento de las cantidades adeudadas a la Hacienda P&uacute;blica estatal por las comunidades aut&oacute;nomas y las corporaciones locales se regir&aacute; por:";
 choices[41]= new Array();
 choices[41][0] = "La Ley General Tributaria.";
 choices[41][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General del Estado.";
 choices[41][2] = "La legislaci&oacute;n espec&iacute;fica, la cual tendr&aacute; en cuenta la necesaria reciprocidad entre administraciones.";
 choices[41][3] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 answers[41] = choices[41][2];
 units[41] = "10";
 comments[41] = "Id Pregunta: 497. PRESUPUESTOS GENERALES";


//  Id pregunta: 168 Año de creación de pregunta: 2016
 questions[42]= "43)  En relaci&oacute;n la conectividad desde dispositivos m&oacute;viles en Europa";
 choices[42]= new Array();
 choices[42][0] = "A partir de 15 de Julio de 2017 los operadores solo podr&aacute;n cobrar un extra adicional m&aacute;ximo 1 &euro; /min en llamadas de voz, en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[42][1] = "No existe regulaci&oacute;n sobre el roaming en la UE, sino sobre la portabilidad, que ser&aacute; prohibida a partir del 15 de Julio de 2017.";
 choices[42][2] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[42][3] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de portabilidad al viajar a otro pa&iacute;s de la UE.";
 answers[42] = choices[42][2];
 units[42] = "19";
 comments[42] = "Id Pregunta: 168. https://ec.europa.eu/digital-single-market/en/roaming";


//  Id pregunta: 640 Año de creación de pregunta: 2016
 questions[43]= "44)  Indique cu&aacute;l de las siguientes afirmaciones es la correcta:";
 choices[43]= new Array();
 choices[43][0] = "Linux dispone de los tres principales protocolos de red para sistemas UNIX: Novel, TCP/IP y UUCP.";
 choices[43][1] = "Linux dispone &uacute;nicamente del protocolo TCP/IP.";
 choices[43][2] = "Linux dispone de todos los protocolos de red existentes.";
 choices[43][3] = "Linux dispone de los dos principales protocolos de red para sistemas UNIX: TCP/IP y UUCP.";
 answers[43] = choices[43][3];
 units[43] = "57";
 comments[43] = "Id Pregunta: 640. Junta de Extremadura A1 2015";


//  Id pregunta: 635 Año de creación de pregunta: 2016
 questions[44]= "45)  Respecto a la b&uacute;squeda en un &aacute;rbol binario, el peor de los casos para el algoritmo T, &ldquo;b&uacute;squeda e inserci&oacute;n en un &aacute;rbol&rdquo;, se da cuando las claves se han introducido en el &aacute;rbol de forma:";
 choices[44]= new Array();
 choices[44][0] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[44][1] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 choices[44][2] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[44][3] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 answers[44] = choices[44][3];
 units[44] = "56";
 comments[44] = "Id Pregunta: 635. Junta de Extremadura A1 2015";


//  Id pregunta: 187 Año de creación de pregunta: 2016
 questions[45]= "46)  El Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola establece un plazo de 30 d&iacute;as, para que los Decretos-Leyes sean sometidos a debate y votaci&oacute;n de la totalidad del Congreso de los Diputados, durante el cual:";
 choices[45]= new Array();
 choices[45][0] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento de urgencia.";
 choices[45][1] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento com&uacute;n.";
 choices[45][2] = "Durante dicho plazo, no pueden ser tramitados ni como proyectos de ley ni como propociones de ley.";
 choices[45][3] = "Durante dicho plazo, s&oacute;lo el Senado puede tramitar los Decretos-Leyes como proyectos de ley por el procedimiento de urgencia.";
 answers[45] = choices[45][0];
 units[45] = "1";
 comments[45] = "Id Pregunta: 187. CONSTITUCION1978";


//  Id pregunta: 843 Año de creación de pregunta: 2016
 questions[46]= "47)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[46]= new Array();
 choices[46][0] = "De cada sesi&oacute;n que celebre el &oacute;rgano colegiado se levantar&aacute; acta por el Secretario, que especificar&aacute; necesariamente los asistentes, el orden del d&iacute;a de la reuni&oacute;n, las circunstancias del lugar y tiempo en que se ha celebrado, los puntos principales de las deliberaciones, as&iacute; como el contenido de los acuerdos adoptados.";
 choices[46][1] = "Podr&aacute;n grabarse las sesiones que celebre el &oacute;rgano colegiado. El fichero resultante de la grabaci&oacute;n, junto con la certificaci&oacute;n expedida por el Secretario de la autenticidad e integridad del mismo, y cuantos documentos en soporte electr&oacute;nico se utilizasen como documentos de la sesi&oacute;n, podr&aacute;n acompa&ntilde;ar al acta de las sesiones, sin necesidad de hacer constar en ella los puntos principales de las deliberaciones.";
 choices[46][2] = "El acta de cada sesi&oacute;n podr&aacute; aprobarse en la misma reuni&oacute;n o en una reuni&oacute;n posterior. El Secretario elaborar&aacute; el acta con el visto bueno del Presidente y lo remitir&aacute; a trav&eacute;s de medios electr&oacute;nicos, a los miembros del &oacute;rgano colegiado, quienes podr&aacute;n manifestar por los mismos medios su conformidad o reparos al texto, a efectos de su aprobaci&oacute;n, consider&aacute;ndose, en caso afirmativo, aprobada en la misma reuni&oacute;n.";
 choices[46][3] = "Cuando se hubiese optado por la grabaci&oacute;n de las sesiones celebradas o por la utilizaci&oacute;n de documentos en soporte electr&oacute;nico, deber&aacute;n conservarse de forma que se garantice la integridad y autenticidad de los ficheros electr&oacute;nicos correspondientes y el acceso a los mismos por parte de los miembros del &oacute;rgano colegiado.";
 answers[46] = choices[46][2];
 units[46] = "4, 7, 8, 9";
 comments[46] = "Id Pregunta: 843. Ley 40/2015";


//  Id pregunta: 451 Año de creación de pregunta: 2016
 questions[47]= "48)  El cr&eacute;dito presupuestario es...";
 choices[47]= new Array();
 choices[47][0] = "El sujeto que realiza el gasto";
 choices[47][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[47][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[47][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[47] = choices[47][2];
 units[47] = "10";
 comments[47] = "Id Pregunta: 451. PRESUPUESTOS GENERALES";


//  Id pregunta: 359 Año de creación de pregunta: 2016
 questions[48]= "49)  Los Reglamentos no se caracterizan por:";
 choices[48]= new Array();
 choices[48][0] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 choices[48][1] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[48][2] = "Ser obligatorios.";
 choices[48][3] = "No poseer alcance general.";
 answers[48] = choices[48][3];
 units[48] = "5";
 comments[48] = "Id Pregunta: 359. UNION EUROPEA";


//  Id pregunta: 65 Año de creación de pregunta: 2016
 questions[49]= "50)  Respecto a las arquitecturas de almacenamiento SAN Fibre Channel, indique la respuesta incorrecta:";
 choices[49]= new Array();
 choices[49][0] = "Cada equipo de la red se identifica de forma un&iacute;voca mediante una direcci&oacute;n de 64 bits.";
 choices[49][1] = "El SNS asigna los FCID y permite traducir de FCID a WWN.";
 choices[49][2] = "Los switches FC intercambian informaci&oacute;n de enrutado de tramas mediante un protocolo del tipo EGP adaptado a las redes FC.";
 choices[49][3] = "La se&ntilde;alizaci&oacute;n del canal de fibra puede funcionar sobre pares de cobre.";
 answers[49] = choices[49][2];
 units[49] = "53";
 comments[49] = "Id Pregunta: 65. AGE A1 2015";


//  Id pregunta: 136 Año de creación de pregunta: 2016
 questions[50]= "51)  La Ley 15/2014, de racionalizaci&oacute;n del Sector P&uacute;blico y otras medidas de reforma administrativa, no incluye:";
 choices[50]= new Array();
 choices[50][0] = "Modificaci&oacute;n de la Ley General Presupuestaria para permitir de manera m&aacute;s eficaz el control de las cuentas corrientes en las que se sit&uacute;an fondos de Tesoro P&uacute;blico.";
 choices[50][1] = "Permiso para la reordenaci&oacute;n de organismos p&uacute;blicos con el fin de mejorar su eficiencia y reducir el gasto p&uacute;blico.";
 choices[50][2] = "Modificaci&oacute;n normativa para hacer uso de certificados electr&oacute;nicos &uacute;nicos para grupos o colectivos de personas f&iacute;sicas.";
 choices[50][3] = "Implantaci&oacute;n del BOE como Tabl&oacute;n Edictal &Uacute;nico para la realizaci&oacute;n de notificaciones administrativas.";
 answers[50] = choices[50][2];
 units[50] = "12";
 comments[50] = "Id Pregunta: 136. Leyes modelo econ&oacute;mico";


//  Id pregunta: 142 Año de creación de pregunta: 2016
 questions[51]= "52)  El plazo para la interposici&oacute;n del recurso de alzada ser&aacute;:";
 choices[51]= new Array();
 choices[51][0] = "De un mes si el acto fuera presunto";
 choices[51][1] = "De un mes si el acto fuera expreso";
 choices[51][2] = "De un mes en cualquier caso";
 choices[51][3] = "No existe un plazo m&aacute;ximo para la interposici&oacute;n de un recurso de alzada";
 answers[51] = choices[51][1];
 units[51] = "8";
 comments[51] = "Id Pregunta: 142. Ley 39/2015, Art&iacute;culo 122";


//  Id pregunta: 89 Año de creación de pregunta: 2016
 questions[52]= "53)  En un contrato cuyo presupuesto es de 100.000 euros sin IVA y se adjudica por 80.000, IVA excluido, la garant&iacute;a definitiva ser&aacute; de:";
 choices[52]= new Array();
 choices[52][0] = "2.400 euros";
 choices[52][1] = "4.000 euros";
 choices[52][2] = "3.200 euros";
 choices[52][3] = "1.600 euros";
 answers[52] = choices[52][1];
 units[52] = "37";
 comments[52] = "Id Pregunta: 89. AGE A1 2015";


//  Id pregunta: 336 Año de creación de pregunta: 2016
 questions[53]= "54)  El Tribunal de Justicia Europeo funcion&oacute; como instancia &uacute;nica hasta:";
 choices[53]= new Array();
 choices[53][0] = "Diciembre de 1987.";
 choices[53][1] = "Septiembre de 1989.";
 choices[53][2] = "Octubre de 1990.";
 choices[53][3] = "Noviembre de 1980.";
 answers[53] = choices[53][1];
 units[53] = "5";
 comments[53] = "Id Pregunta: 336. UNION EUROPEA";


//  Id pregunta: 630 Año de creación de pregunta: 2016
 questions[54]= "55)  Seg&uacute;n el Real Decreto 4/2010, de 8 de enero, por el que se regula el Esquema Nacional de Interoperabilidad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; es la interoperabilidad?";
 choices[54]= new Array();
 choices[54][0] = "Es la capacidad de los sistemas de informaci&oacute;n y de los procedimientos a los que &eacute;stos dan soporte, de compartir datos y posibilitar el intercambio de informaci&oacute;n y conocimiento entre ellos.";
 choices[54][1] = "Es la obligaci&oacute;n de conectividad ente sistemas operativos de las Administraciones P&uacute;blicas.";
 choices[54][2] = "Es la capacidad de intercambio de datos entre las Comunidades Aut&oacute;nomas y la Administraci&oacute;n Central.";
 choices[54][3] = "Es la posibilidad de acceso a los datos que poseen todas las Administraciones sobre cualquiera de los usuarios de los sistemas de informaci&oacute;n.";
 answers[54] = choices[54][0];
 units[54] = "45";
 comments[54] = "Id Pregunta: 630. Junta de Extremadura A1 2015";


//  Id pregunta: 278 Año de creación de pregunta: 2016
 questions[55]= "56)  Respecto al Consejo de Transparencia y Buen Gobierno:";
 choices[55]= new Array();
 choices[55][0] = "Su estatuto entra en vigor el 10 de diciembre de 2014.";
 choices[55][1] = "Estatuto se estructura en cinco cap&iacute;tulos.";
 choices[55][2] = "El Consejo de Ministros aprobar&aacute;, en el plazo de tres meses desde la publicaci&oacute;n de la Ley 19/2013 en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, un Real Decreto por el que se apruebe el Estatuto org&aacute;nico del Consejo de Transparencia y Buen Gobierno.";
 choices[55][3] = "Su estatuto se regula por el Real Decreto 919/2014, de 31 de octubre.";
 answers[55] = choices[55][1];
 units[55] = "22";
 comments[55] = "Id Pregunta: 278. LEY DE TRANSPARENCIA";


//  Id pregunta: 149 Año de creación de pregunta: 2016
 questions[56]= "57)  Seg&uacute;n establece la Ley 39/2015, las Administraciones P&uacute;blicas har&aacute;n p&uacute;blico un Plan Normativo que:";
 choices[56]= new Array();
 choices[56][0] = "Contendr&aacute; las iniciativas legales y reglamentarias que hayan sido aprobadas en el a&ntilde;o en curso y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[56][1] = "Contendr&aacute; exclusivamente las iniciativas legales que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[56][2] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[56][3] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Bolet&iacute;n Oficial de la Administraci&oacute;n P&uacute;blica correspondiente";
 answers[56] = choices[56][2];
 units[56] = "7";
 comments[56] = "Id Pregunta: 149. Ley 39/2015, Art&iacute;culo 132";


//  Id pregunta: 602 Año de creación de pregunta: 2016
 questions[57]= "58)  Los est&aacute;ndares de la norma IEEE 802.11 se ubican en las capas del modelo OSI:";
 choices[57]= new Array();
 choices[57][0] = "La capa de transmisi&oacute;n y la capa de presentaci&oacute;n.";
 choices[57][1] = "La capa de aplicaci&oacute;n y la capa de gesti&oacute;n.";
 choices[57][2] = "La capa f&iacute;sica y la cada de enlace de datos.";
 choices[57][3] = "La capa de red y la capa de tr&aacute;fico.";
 answers[57] = choices[57][2];
 units[57] = "108";
 comments[57] = "Id Pregunta: 602. Junta de Extremadura A1 2015";


//  Id pregunta: 612 Año de creación de pregunta: 2016
 questions[58]= "59)  En el lenguaje de manipulaci&oacute;n de datos, &iquest;cu&aacute;l de las siguientes cl&aacute;usulas va asociada a la cl&aacute;usula HAVING?";
 choices[58]= new Array();
 choices[58][0] = "GROUP BY.";
 choices[58][1] = "COUNT.";
 choices[58][2] = "WHERE.";
 choices[58][3] = "DISTINCT.";
 answers[58] = choices[58][0];
 units[58] = "60";
 comments[58] = "Id Pregunta: 612. Junta de Extremadura A1 2015";


//  Id pregunta: 421 Año de creación de pregunta: 2016
 questions[59]= "60)  Las empresas deber&aacute;n promover condiciones de trabajo, arbitrar procedimientos espec&iacute;ficos y dar cauces a las denuncias o reclamaciones, para evitar:";
 choices[59]= new Array();
 choices[59][0] = "El acoso sexual.";
 choices[59][1] = "El acoso por raz&oacute;n del sexo.";
 choices[59][2] = "Ambas son correctas.";
 choices[59][3] = "A y B son incorrectas.";
 answers[59] = choices[59][2];
 units[59] = "14";
 comments[59] = "Id Pregunta: 421. POLITICAS DE IGUALDAD";


//  Id pregunta: 308 Año de creación de pregunta: 2016
 questions[60]= "61)  El Tribunal de Justicia se cre&oacute; en:";
 choices[60]= new Array();
 choices[60][0] = "El Tratado de la CECA.";
 choices[60][1] = "El Tratado de Niza.";
 choices[60][2] = "El Tratado de &Aacute;msterdam.";
 choices[60][3] = "El Tratado de Lisboa.";
 answers[60] = choices[60][0];
 units[60] = "5";
 comments[60] = "Id Pregunta: 308. UNION EUROPEA";


//  Id pregunta: 689 Año de creación de pregunta: 2016
 questions[61]= "62)  Indique cu&aacute;l de los siguientes no es uno de los requisitos que debe cumplir una firma electr&oacute;nica avanzada seg&uacute;n el Reglamento (UE) 910/2014";
 choices[61]= new Array();
 choices[61][0] = "Estar vinculada al firmante de manera &uacute;nica";
 choices[61][1] = "Haber sido creada utilizando un dispositivo avanzado de creacio&#769;n de firmas electro&#769;nicas";
 choices[61][2] = "Haber sido creada utilizando datos de creaci&oacute;n de firma que el firmante puede utilizar, con un alto nivel de confianza, bajo su exclusivo control";
 choices[61][3] = "Estar vinculada con los datos firmados, de modo tal que cualquier modificacio&#769;n ulterior de los mismos sea detectable";
 answers[61] = choices[61][1];
 units[61] = "77";
 comments[61] = "Id Pregunta: 689. Art&iacute;culo 26 del Reglamento 910/2014";


//  Id pregunta: 652 Año de creación de pregunta: 2016
 questions[62]= "63)  Indica cu&aacute;l de las siguientes caracter&iacute;sticas del protocolo IP versi&oacute;n 6 es incorrecta.";
 choices[62]= new Array();
 choices[62][0] = "El tama&ntilde;o de la direcci&oacute;n IP es de 128 bits.";
 choices[62][1] = "Aumento de la flexibilidad en el direccionamiento.";
 choices[62][2] = "Define una cabecera de extensi&oacute;n que proporciona autenticaci&oacute;n.";
 choices[62][3] = "La cabecera IP versi&oacute;n 6 obligatoria es de tama&ntilde;o variable.";
 answers[62] = choices[62][3];
 units[62] = "109";
 comments[62] = "Id Pregunta: 652. Junta de Extremadura A1 2015";


//  Id pregunta: 593 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Qui&eacute;n se encarga de revisar la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[63]= new Array();
 choices[63][0] = "La CETIC";
 choices[63][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[63][2] = "La DTIC";
 choices[63][3] = "El MHFP";
 answers[63] = choices[63][0];
 units[63] = "19";
 comments[63] = "Id Pregunta: 593. Estrategia TIC";


//  Id pregunta: 329 Año de creación de pregunta: 2016
 questions[64]= "65)  Si el Consejo en alg&uacute;n acuerdo necesita de mayor&iacute;a cualificada se produce:";
 choices[64]= new Array();
 choices[64][0] = "Acuerdos cualificados.";
 choices[64][1] = "Acuerdos ponderados.";
 choices[64][2] = "Valoraci&oacute;n de los votos.";
 choices[64][3] = "Ponderaci&oacute;n de los votos.";
 answers[64] = choices[64][3];
 units[64] = "5";
 comments[64] = "Id Pregunta: 329. UNION EUROPEA";


//  Id pregunta: 109 Año de creación de pregunta: 2016
 questions[65]= "66)  Big Data:";
 choices[65]= new Array();
 choices[65][0] = "Solo aplica a datos generados m&aacute;quina a m&aacute;quina (M2M)";
 choices[65][1] = "No puede emplearse para tratar datos no estructurados";
 choices[65][2] = "Suele utilizar tecnolog&iacute;as relacionales a la hora de analizar los datos";
 choices[65][3] = "Ninguna de las anteriores";
 answers[65] = choices[65][3];
 units[65] = "73";
 comments[65] = "Id Pregunta: 109. ";


//  Id pregunta: 472 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Qui&eacute;n remitir&aacute; a las Cortes Generales un informe trimestral acerca de la utilizaci&oacute;n del Fondo regulado en el Fondo de Contingencia de ejecuci&oacute;n presupuestaria seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria?";
 choices[66]= new Array();
 choices[66][0] = "El Ministro de Econom&iacute;a.";
 choices[66][1] = "El Gobierno.";
 choices[66][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[66][3] = "El Presidente del Gobierno.";
 answers[66] = choices[66][1];
 units[66] = "10";
 comments[66] = "Id Pregunta: 472. PRESUPUESTOS GENERALES";


//  Id pregunta: 45 Año de creación de pregunta: 2016
 questions[67]= "68)  46. &iquest;Cu&aacute;l de las siguientes NO es una de las APIs incorporadas a HTML5?";
 choices[67]= new Array();
 choices[67][0] = "HTML Drag and Drop, para arrastrar un objeto a otra localizaci&oacute;n.";
 choices[67][1] = "HTML Advanced Search, para parametrizar y modificar el comportamiento de los buscadores.";
 choices[67][2] = "HTML Local Storage, para almacenar datos en el navegador.";
 choices[67][3] = "HTML SSE, para actualizar una p&aacute;gina web autom&aacute;ticamente sin preguntar al servidor.";
 answers[67] = choices[67][1];
 units[67] = "74";
 comments[67] = "Id Pregunta: 45. AGE A1 2015";


//  Id pregunta: 114 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Qu&eacute; es la Garant&iacute;a Juvenil?";
 choices[68]= new Array();
 choices[68][0] = "Una iniciativa europea que pretende facilitar el acceso de los j&oacute;venes al mercado de trabajo ofreci&eacute;ndoles una oferta de empleo, de educaci&oacute;n o formaci&oacute;n tras haber finalizado sus estudios o quedar desempleados";
 choices[68][1] = "Un Plan que permite la concesi&oacute;n de subvenciones a j&oacute;venes para facilitar el alquiler de su vivienda habitual.";
 choices[68][2] = "Un Plan que concede cr&eacute;ditos en condiciones ventajosas a j&oacute;venes emprendedores";
 choices[68][3] = "Una inciativa europea que facilita a los j&oacute;venes el acceso a las nuevas tecnolog&iacute;as";
 answers[68] = choices[68][0];
 units[68] = "15";
 comments[68] = "Id Pregunta: 114. ";


//  Id pregunta: 224 Año de creación de pregunta: 2016
 questions[69]= "70)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[69]= new Array();
 choices[69][0] = "Art&iacute;culo 16.2.";
 choices[69][1] = "Art&iacute;culo 17.1.";
 choices[69][2] = "Art&iacute;culo 18.1.";
 choices[69][3] = "Art&iacute;culo 18.2.";
 answers[69] = choices[69][2];
 units[69] = "1";
 comments[69] = "Id Pregunta: 224. CONSTITUCION1978";


//  Id pregunta: 203 Año de creación de pregunta: 2016
 questions[70]= "71)  Se&ntilde;ale la afirmaci&oacute;n correcta. La tramitaci&oacute;n de las proposiciones de ley se regular&aacute; por:";
 choices[70]= new Array();
 choices[70][0] = "Ley Org&aacute;nica.";
 choices[70][1] = "Lo dispuesto en la normativa comunitaria.";
 choices[70][2] = "Los Reglamentos de las C&aacute;maras.";
 choices[70][3] = "El Reglamento del Congreso de los Diputados, exclusivamente.";
 answers[70] = choices[70][2];
 units[70] = "1";
 comments[70] = "Id Pregunta: 203. CONSTITUCION1978";


//  Id pregunta: 181 Año de creación de pregunta: 2016
 questions[71]= "72)  El Presidente del Tribunal Constitucional, seg&uacute;n lo establecido en el Art&iacute;culo 160 de la Constituci&oacute;n Espa&ntilde;ola ser&aacute; nombrado entre sus miembros por:";
 choices[71]= new Array();
 choices[71][0] = "l Consejo General del Poder Judicial";
 choices[71][1] = "El pleno de Tribunal Constitucional";
 choices[71][2] = "El Presidente del Gobierno, a propuesta del pleno del Tribunal Constitucional.";
 choices[71][3] = "Por el Rey, a propuesta del mismo Tribunal en pleno.";
 answers[71] = choices[71][3];
 units[71] = "1";
 comments[71] = "Id Pregunta: 181. CONSTITUCION1978";


//  Id pregunta: 641 Año de creación de pregunta: 2016
 questions[72]= "73)  En cuanto al proceso de autenticaci&oacute;n en Linux, indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[72]= new Array();
 choices[72][0] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema DEC.";
 choices[72][1] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema MD6.";
 choices[72][2] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DES y MD5.";
 choices[72][3] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DEC y MD6.";
 answers[72] = choices[72][2];
 units[72] = "57";
 comments[72] = "Id Pregunta: 641. Junta de Extremadura A1 2015";


//  Id pregunta: 349 Año de creación de pregunta: 2016
 questions[73]= "74)  El Tratado de Par&iacute;s que crea la Comunidad Europea del Carb&oacute;n y del Acero entr&oacute; en vigor:";
 choices[73]= new Array();
 choices[73][0] = "El 23 de julio de 1952.";
 choices[73][1] = "El 18 de abril de 1951.";
 choices[73][2] = "El 16 de abril de 1948.";
 choices[73][3] = "d)Ninguna de las respuestas son correctas.";
 answers[73] = choices[73][0];
 units[73] = "5";
 comments[73] = "Id Pregunta: 349. UNION EUROPEA";


//  Id pregunta: 486 Año de creación de pregunta: 2016
 questions[74]= "75)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, dirigir la contabilidad de las entidades que integran el sistema de la Seguridad Social y gestionar la contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una funci&oacute;n de:";
 choices[74]= new Array();
 choices[74][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[74][1] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[74][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[74][3] = "La Intervenci&oacute;n General de la Defensa.";
 answers[74] = choices[74][2];
 units[74] = "10";
 comments[74] = "Id Pregunta: 486. PRESUPUESTOS GENERALES";


