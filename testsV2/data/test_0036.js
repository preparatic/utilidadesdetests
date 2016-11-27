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

//  Id pregunta: 419 Año de creación de pregunta: 2016
 questions[0]= "1)  Promover&aacute;n el conocimiento y la difusi&oacute;n del principio de igualdad entre mujeres y hombres, los medios de comunicaci&oacute;n de titularidad:";
 choices[0]= new Array();
 choices[0][0] = "P&uacute;blica.";
 choices[0][1] = "Privada.";
 choices[0][2] = "Ambas son correctas.";
 choices[0][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[0] = choices[0][0];
 units[0] = "14";
 comments[0] = "Id Pregunta: 419. POLITICAS DE IGUALDAD";


//  Id pregunta: 666 Año de creación de pregunta: 2016
 questions[1]= "2)  Seg&uacute;n el art&iacute;culo 73 de la Ley 39/2015, el plazo para el el cumplimiento de tr&aacute;mites que deban ser cumplimentados por el interesado, es por defecto:";
 choices[1]= new Array();
 choices[1][0] = "10 d&iacute;as.";
 choices[1][1] = "15 d&iacute;as.";
 choices[1][2] = "1 mes.";
 choices[1][3] = "No se establece ning&uacute;n plazo por defecto.";
 answers[1] = choices[1][0];
 units[1] = "7";
 comments[1] = "Id Pregunta: 666. Art&iacute;culo 73 de la Ley 39/2015";


//  Id pregunta: 289 Año de creación de pregunta: 2016
 questions[2]= "3)  La duraci&oacute;n del mandato del Defensor del Pueblo Europeo es de:";
 choices[2]= new Array();
 choices[2][0] = "Tres a&ntilde;os.";
 choices[2][1] = "Dos a&ntilde;os y medio.";
 choices[2][2] = "Cinco a&ntilde;os.";
 choices[2][3] = "Seis a&ntilde;os.";
 answers[2] = choices[2][2];
 units[2] = "5";
 comments[2] = "Id Pregunta: 289. UNION EUROPEA";


//  Id pregunta: 34 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Cu&aacute;les de los siguientes mecanismos no existe espec&iacute;ficamente como cach&eacute; de c&oacute;digo PHP?";
 choices[3]= new Array();
 choices[3][0] = "Memcached";
 choices[3][1] = "OpCache";
 choices[3][2] = "WinCache Extension for PHP";
 choices[3][3] = "Alternative PHP Cache";
 answers[3] = choices[3][0];
 units[3] = "65";
 comments[3] = "Id Pregunta: 34. AGE A1 2015";


//  Id pregunta: 115 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Qu&eacute; Tratado Europeo introduce un t&iacute;tulo dedicado al empleo en el Tratado de Roma?";
 choices[4]= new Array();
 choices[4][0] = "El Tratado de Lisboa";
 choices[4][1] = "El Tratado de Amsterdam";
 choices[4][2] = "El Tratado de Niza";
 choices[4][3] = "El Acta &Uacute;nica Europea";
 answers[4] = choices[4][1];
 units[4] = "15";
 comments[4] = "Id Pregunta: 115. ";


//  Id pregunta: 821 Año de creación de pregunta: 2016
 questions[5]= "6)  En las Comunidades Aut&oacute;nomas uniprovinciales en las que no exista Subdelegado la suplencia corresponder&aacute; a:";
 choices[5]= new Array();
 choices[5][0] = "el Secretario General";
 choices[5][1] = "el Subdirector General";
 choices[5][2] = "el Secretario de Estado";
 choices[5][3] = "ninguna es correcta";
 answers[5] = choices[5][0];
 units[5] = "4, 7, 8, 9";
 comments[5] = "Id Pregunta: 821. Ley 40/2015";


//  Id pregunta: 545 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Cu&aacute;l es la nueva denominaci&oacute;n para la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n tras la aprobaci&oacute;n del Real Decreto 424/2016, de 11 de noviembre, por el que se establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales?";
 choices[6]= new Array();
 choices[6][0] = "Subsecretar&iacute;a de Energ&iacute;a, Turismo y Agenda Digital";
 choices[6][1] = "Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[6][2] = "Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[6][3] = "Secretar&iacute;a de Estado de Administraci&oacute;n Digital";
 answers[6] = choices[6][1];
 units[6] = "26";
 comments[6] = "Id Pregunta: 545. Gobernanza TIC";


//  Id pregunta: 703 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Cu&aacute;l de los siguientes NO es un principio t&eacute;cnico de los mencionados en la Ley 19/2013 al que debe atenerse la informaci&oacute;n publicada en el Portal de Transparencia de la Administraci&oacute;n General del Estado?";
 choices[7]= new Array();
 choices[7][0] = "Compatibilidad";
 choices[7][1] = "Interoperabilidad";
 choices[7][2] = "Reutilizaci&oacute;n";
 choices[7][3] = "Accesibilidad";
 answers[7] = choices[7][0];
 units[7] = "22";
 comments[7] = "Id Pregunta: 703. Ley de transparencia";


//  Id pregunta: 662 Año de creación de pregunta: 2016
 questions[8]= "9)  De acuerdo a la Ley 39/2015, los interesados en un procedimiento administrativo, tienen los siguientes derechos:";
 choices[8]= new Array();
 choices[8][0] = "Conocer el estado de la tramitaci&oacute;n de cualquier procedimiento.";
 choices[8][1] = "Identificar a las autoridades y al personal al servicio de las Administraciones P&uacute;blicas bajo cuya responsabilidad se tramiten los procedimientos.";
 choices[8][2] = "No presentar documentos originales, en ning&uacute;n caso.";
 choices[8][3] = "No presentar datos y documentos no exigidos por las normas aplicables al procedimiento de que se trate, que ya se encuentren en poder del Sector P&uacute;blico o que hayan sido elaborado por &eacute;ste.";
 answers[8] = choices[8][1];
 units[8] = "7";
 comments[8] = "Id Pregunta: 662. Art&iacute;culo 53 de la Ley 39/2015";


//  Id pregunta: 93 Año de creación de pregunta: 2016
 questions[9]= "10)  Entre las tecnolog&iacute;as o herramientas utilizadas para trabajar en sistemas de Big Data NO se encuentra:";
 choices[9]= new Array();
 choices[9][0] = "Almacenamiento orientado a columnas";
 choices[9][1] = "Framework MapReduce";
 choices[9][2] = "OLTP";
 choices[9][3] = "Bases de datos clave-valor";
 answers[9] = choices[9][2];
 units[9] = "73";
 comments[9] = "Id Pregunta: 93. AGE A1 2015";


//  Id pregunta: 29 Año de creación de pregunta: 2016
 questions[10]= "11)  De acuerdo con el art&iacute;culo 62 de la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, se&ntilde;ale la respuesta correcta:";
 choices[10]= new Array();
 choices[10][0] = "El uso del dominio p&uacute;blico radioel&eacute;ctrico s&oacute;lo puede ser de dos tipos: especial o privativo.";
 choices[10][1] = "El uso com&uacute;n del dominio p&uacute;blico radioel&eacute;ctrico precisa de t&iacute;tulo habilitante.";
 choices[10][2] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico es el que se realiza mediante la explotaci&oacute;n en exclusiva, o por un n&uacute;mero limitado de usuarios, de determinadas frecuencias en un mismo &aacute;mbito f&iacute;sico de aplicaci&oacute;n.";
 choices[10][3] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico es el que se lleve a cabo de las bandas de frecuencias habilitadas para su explotaci&oacute;n de forma compartida, sin limitaci&oacute;n de n&uacute;mero de operadores o usuarios y con las condiciones t&eacute;cnicas y para los servicios que se establezcan en cada caso.";
 answers[10] = choices[10][2];
 units[10] = "121";
 comments[10] = "Id Pregunta: 29. AGE A1 2015";


//  Id pregunta: 123 Año de creación de pregunta: 2016
 questions[11]= "12)  Seg&uacute;n el  Estatuto del Consejo de Transparencia y Buen Gobierno, &iquest;cu&aacute;l NO es un vocal de la Comisi&oacute;n de Transparencia y Buen Gobierno?";
 choices[11]= new Array();
 choices[11][0] = "Un representante de la Administraci&oacute;n local.";
 choices[11][1] = "Un representante del Tribunal de Cuentas.";
 choices[11][2] = "Un representante del Defensor del Pueblo.";
 choices[11][3] = "Un representante de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[11] = choices[11][0];
 units[11] = "22";
 comments[11] = "Id Pregunta: 123. ";


//  Id pregunta: 755 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Cu&aacute;l de los siguientes no es uno de los planes y actuaciones recogidos en la Agenda Digital para Espa&ntilde;a?";
 choices[12]= new Array();
 choices[12][0] = "Plan Nacional de Ciudades Inteligentes";
 choices[12][1] = "Plan Digital de Protecci&oacute;n del Medioambiente";
 choices[12][2] = "Plan de Impulso de las Tecnolog&iacute;as del Lenguaje";
 choices[12][3] = "Desarrollo e innovaci&oacute;n del sector TIC";
 answers[12] = choices[12][1];
 units[12] = "19";
 comments[12] = "Id Pregunta: 755. Agenda Digital para Espa&ntilde;a";


//  Id pregunta: 721 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;C&uacute;al es la principal ventaja de sprints m&aacute;s cortos en Scrum?";
 choices[13]= new Array();
 choices[13][0] = "Permite reaccionar al equipo mejor ante imprevistos";
 choices[13][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[13][2] = "Es m&aacute;s f&aacute;cil cumplir los objetivos marcados al final de cada sprint";
 choices[13][3] = "Ninguna de las anteriores";
 answers[13] = choices[13][1];
 units[13] = "34, 84";
 comments[13] = "Id Pregunta: 721. Metodologias &aacute;giles";


//  Id pregunta: 789 Año de creación de pregunta: 2016
 questions[14]= "15)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Delegados del Gobierno en las Comunidades Aut&oacute;nomas tendr&aacute;n rango de:";
 choices[14]= new Array();
 choices[14][0] = "Subsecretario";
 choices[14][1] = "Subdirector general";
 choices[14][2] = "Secretario de Estado";
 choices[14][3] = "ninguna es correcta";
 answers[14] = choices[14][0];
 units[14] = "4, 7, 8, 9";
 comments[14] = "Id Pregunta: 789. Ley 40/2015";


//  Id pregunta: 535 Año de creación de pregunta: 2016
 questions[15]= "16)  Dispondr&aacute;/n de un registro electr&oacute;nico general de apoderamientos:";
 choices[15]= new Array();
 choices[15][0] = "la Administraci&oacute;n General del Estado";
 choices[15][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[15][2] = "las Entidades Locales";
 choices[15][3] = "todas son correctas";
 answers[15] = choices[15][3];
 units[15] = "7";
 comments[15] = "Id Pregunta: 535. LEY 39/2015";


//  Id pregunta: 756 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Cu&aacute;l de los siguientes no es uno de los pilares en que se basa la Agenda Digital Europea?";
 choices[16]= new Array();
 choices[16][0] = "Promover un acceso a internet r&aacute;pido y ultrarr&aacute;pido para todos";
 choices[16][1] = "Implantar el mercado general europeo";
 choices[16][2] = "Fomentar la alfabetizaci&oacute;n, la capacitaci&oacute;n y la inclusi&oacute;n digitales";
 choices[16][3] = "Consolidar la confianza y la seguridad en l&iacute;nea";
 answers[16] = choices[16][1];
 units[16] = "19";
 comments[16] = "Id Pregunta: 756. Agenda Digital Europea";


//  Id pregunta: 433 Año de creación de pregunta: 2016
 questions[17]= "18)  El &oacute;rgano colegiado responsable de la coordinaci&oacute;n de las pol&iacute;ticas y medidas adoptadas por los departamentos ministeriales con la finalidad de garantizar el derecho a la igualdad entre mujeres y hombres, se denomina:";
 choices[17]= new Array();
 choices[17][0] = "Unidad de igualdad.";
 choices[17][1] = "Comisi&oacute;n Interministerial de Igualdad entre mujeres y hombres.";
 choices[17][2] = "Ninguna de las anteriores.";
 choices[17][3] = "A y B son correctas.";
 answers[17] = choices[17][1];
 units[17] = "14";
 comments[17] = "Id Pregunta: 433. POLITICAS DE IGUALDAD";


//  Id pregunta: 722 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Cu&aacute;l es la principal desventaja de sprints m&aacute;s largos?";
 choices[18]= new Array();
 choices[18][0] = "Permite reaccionar al equipo mejor ante imprevistos";
 choices[18][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[18][2] = "Se reduce el n&uacute;mero de reuniones de sprint";
 choices[18][3] = "Se puede desarrollar algo diferente a lo requerido y obtener el feedback del cliente m&aacute;s tarde.";
 answers[18] = choices[18][3];
 units[18] = "34, 84";
 comments[18] = "Id Pregunta: 722. Metodologias &aacute;giles";


//  Id pregunta: 710 Año de creación de pregunta: 2016
 questions[19]= "20)  Si un ciudadano solicita informaci&oacute;n a la Administraci&oacute;n y son de aplicaci&oacute;n los l&iacute;mites de derecho de acceso previstos en el art&iacute;culo 14 de la Ley 19/2013 pero &eacute;stos no afectan a la totalidad de la informaci&oacute;n:";
 choices[19]= new Array();
 choices[19][0] = "Nunca se conceder&aacute; el acceso parcial a la informaci&oacute;n.";
 choices[19][1] = "Se ofrecer&aacute; acceso parcial sin indicar al solicitante que parte de la informaci&oacute;n ha sido omitida.";
 choices[19][2] = "Siempre se conder&aacute; acceso parcial a la informaci&oacute;n a la que no le afecte la limitaci&oacute;n prevista en el art&iacute;culo 14.";
 choices[19][3] = "Se conceder&aacute; el acceso parcial previa omisi&oacute;n de la informaci&oacute;n afectada por el l&iacute;mite de acceso, salvo que de ello resulte una informaci&oacute;n distorsionada o que carezca de sentido.";
 answers[19] = choices[19][3];
 units[19] = "22";
 comments[19] = "Id Pregunta: 710. Ley de transparencia";


//  Id pregunta: 578 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;Qui&eacute;n elabor&oacute; y aprob&oacute; la Estrategia TIC?.";
 choices[20]= new Array();
 choices[20][0] = "Fue elaborada y aprobada por la CETIC";
 choices[20][1] = "Fue elaborada por la CETIC y aprobada por el gobierno";
 choices[20][2] = "Fue elaborada por el gobierno y aprobada por la CETIC";
 choices[20][3] = "Fue elaborada por la CETIC y aprobada por el MAFP (Ministerio de Administraciones y Funci&oacute;n P&uacute;blica)";
 answers[20] = choices[20][1];
 units[20] = "19";
 comments[20] = "Id Pregunta: 578. Estrategia TIC";


//  Id pregunta: 664 Año de creación de pregunta: 2016
 questions[21]= "22)  De acuerdo a la Ley 39/2015, el formato del expediente administrativo ser&aacute;:";
 choices[21]= new Array();
 choices[21][0] = "Siempre en formato electr&oacute;nico.";
 choices[21][1] = "Siempre en formato papel.";
 choices[21][2] = "Las personas f&iacute;sicas podr&aacute;n elegir en todo momento el formato del expediente administrativo.";
 choices[21][3] = "La ley no regula el formato del expediente.";
 answers[21] = choices[21][0];
 units[21] = "7";
 comments[21] = "Id Pregunta: 664. Art&iacute;culo 70 de la Ley 39/2015";


//  Id pregunta: 438 Año de creación de pregunta: 2016
 questions[22]= "23)  El Real Decreto 424/2016, de 11 de noviembre establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales. Se&ntilde;ale la respuesta falsa.";
 choices[22]= new Array();
 choices[22][0] = "Dentro del Ministerio de Energ&iacute;a, Turismo y Agenda Digital se encuentra la Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital, de la que depende la Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n.";
 choices[22][1] = "Suprime la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones.";
 choices[22][2] = "La Direcci&oacute;n General de Racionalizaci&oacute;n y Centralizaci&oacute;n de la Contrataci&oacute;n es un &oacute;rgano directivo perteneciente a la Subsecretar&iacute;a de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[22][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, con rango de Direcci&oacute;n general depende de la Secretar&iacute;a de Estado de Funci&oacute;n P&uacute;blica.";
 answers[22] = choices[22][3];
 units[22] = "43";
 comments[22] = "Id Pregunta: 438. SERVICIOS COMUNES";


//  Id pregunta: 488 Año de creación de pregunta: 2016
 questions[23]= "24)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, autorizar las transferencias entre distintas secciones presupuestarias como consecuencia de reorganizaciones administrativas, es una competencia de:";
 choices[23]= new Array();
 choices[23][0] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[23][1] = "El Gobierno.";
 choices[23][2] = "El Presidente del Gobierno.";
 choices[23][3] = "El Consejo de Ministros.";
 answers[23] = choices[23][1];
 units[23] = "10";
 comments[23] = "Id Pregunta: 488. PRESUPUESTOS GENERALES";


//  Id pregunta: 833 Año de creación de pregunta: 2016
 questions[24]= "25)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[24]= new Array();
 choices[24][0] = "La competencia es irrenunciable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[24][1] = "La competencia es imprescriptible y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[24][2] = "La competencia es inviolable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[24][3] = "Todas son correctas.";
 answers[24] = choices[24][0];
 units[24] = "4, 7, 8, 9";
 comments[24] = "Id Pregunta: 833. Ley 40/2015";


//  Id pregunta: 689 Año de creación de pregunta: 2016
 questions[25]= "26)  El Reglamento (UE) 910/2014 deroga la Directiva 1999/93/CE con efectos a partir de:";
 choices[25]= new Array();
 choices[25][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[25][1] = "1 de enero de 2015";
 choices[25][2] = "1 de enero de 2016";
 choices[25][3] = "1 de julio de 2016";
 answers[25] = choices[25][3];
 units[25] = "77";
 comments[25] = "Id Pregunta: 689. Art&iacute;culo 50 del Reglamento 910/2014";


//  Id pregunta: 244 Año de creación de pregunta: 2016
 questions[26]= "27)  La Constituci&oacute;n Espa&ntilde;ola, en el art&iacute;culo 9 del T&iacute;tulo Preliminar, garantiza el principio de:";
 choices[26]= new Array();
 choices[26][0] = "Retroactividad de las disposiciones sancionadoras no favorables de derechos individuales.";
 choices[26][1] = "Publicidad de las normas.";
 choices[26][2] = "Defensa jur&iacute;dica ante los tribunales.";
 choices[26][3] = "Coordinaci&oacute;n normativa.";
 answers[26] = choices[26][2];
 units[26] = "1";
 comments[26] = "Id Pregunta: 244. CONSTITUCION1978";


//  Id pregunta: 306 Año de creación de pregunta: 2016
 questions[27]= "28)  Componen la Comisi&oacute;n Europea:";
 choices[27]= new Array();
 choices[27][0] = "Un Comisario por cada Estado miembro.";
 choices[27][1] = "Uno o dos Comisarios por cada Estado miembro, dependiendo de las caracter&iacute;sticas del Estado.";
 choices[27][2] = "Dos Comisarios por cada Estado miembro.";
 choices[27][3] = "Los Ministros de Asuntos Exteriores de cada Estado miembro.";
 answers[27] = choices[27][0];
 units[27] = "5";
 comments[27] = "Id Pregunta: 306. UNION EUROPEA";


//  Id pregunta: 622 Año de creación de pregunta: 2016
 questions[28]= "29)  Qu&eacute; nombre reciben las unidades de almacenamieto de las que est&aacute; compuesta un documento XML?";
 choices[28]= new Array();
 choices[28][0] = "Entradas (entities).";
 choices[28][1] = "Atributos (attribs).";
 choices[28][2] = "M&oacute;dulos (modules).";
 choices[28][3] = "Objetos (objects).";
 answers[28] = choices[28][0];
 units[28] = "74";
 comments[28] = "Id Pregunta: 622. Junta de Extremadura A1 2015";


//  Id pregunta: 342 Año de creación de pregunta: 2016
 questions[29]= "30)  La moci&oacute;n de censura contra la Comisi&oacute;n existe desde:";
 choices[29]= new Array();
 choices[29][0] = "El Tratado de Maastrich.";
 choices[29][1] = "El Tratado de Amsterdam.";
 choices[29][2] = "El Tratado de Par&iacute;s.";
 choices[29][3] = "El Tratado de Roma.";
 answers[29] = choices[29][3];
 units[29] = "5";
 comments[29] = "Id Pregunta: 342. UNION EUROPEA";


//  Id pregunta: 94 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es propia de Apache Hadoop?";
 choices[30]= new Array();
 choices[30][0] = "Es un framework de software libre.";
 choices[30][1] = "Es una base de datos NoSQL.";
 choices[30][2] = "Est&aacute; basado en MapReduce.";
 choices[30][3] = "Puede emplearse en sistemas de datos masivos (Big Data).";
 answers[30] = choices[30][1];
 units[30] = "73";
 comments[30] = "Id Pregunta: 94. AGE A1 2015";


//  Id pregunta: 238 Año de creación de pregunta: 2016
 questions[31]= "32)  En caso de dimisi&oacute;n del Presidente del Gobierno:";
 choices[31]= new Array();
 choices[31][0] = "El Gobierno cesa a continuaci&oacute;n.";
 choices[31][1] = "El Rey podr&aacute; proponer, a trav&eacute;s del Presidente del Congreso, un nuevo candidato a la Presidencia del Gobierno.";
 choices[31][2] = "El Pleno del Congreso, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 choices[31][3] = "El Pleno del Congreso y del Senado, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 answers[31] = choices[31][1];
 units[31] = "1";
 comments[31] = "Id Pregunta: 238. CONSTITUCION1978";


//  Id pregunta: 320 Año de creación de pregunta: 2016
 questions[32]= "33)  Indique a qui&eacute;n corresponde la funci&oacute;n de velar por que se apliquen los Tratados y las medidas adoptadas por las Instituciones en virtud de &eacute;stos:";
 choices[32]= new Array();
 choices[32][0] = "Al Consejo Europeo.";
 choices[32][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[32][2] = "A la Comisi&oacute;n Europea.";
 choices[32][3] = "Al Parlamento Europeo.";
 answers[32] = choices[32][2];
 units[32] = "5";
 comments[32] = "Id Pregunta: 320. UNION EUROPEA";


//  Id pregunta: 598 Año de creación de pregunta: 2016
 questions[33]= "34)  Entre la documentaci&oacute;n de la Seguridad de la Organizaci&oacute;n nos podremos encontrar:";
 choices[33]= new Array();
 choices[33][0] = "La Pol&iacute;tica de Seguridad Corporativa ser&aacute; elaborada por el Responsable de Seguridad Corporativa y aprobada por el Comit&eacute; de Seguridad Corporativa y por la Alta Direcci&oacute;n.";
 choices[33][1] = "La Pol&iacute;tica de Seguridad de las TIC que debe estar alineada en todo momento con el Mantenimiento de los Sistemas de Informaci&oacute;n.";
 choices[33][2] = "El Documento de Seguridad que ha de estar presente en toda documentaci&oacute;n de la seguridad de la informaci&oacute;n.";
 choices[33][3] = "Todas las respuestas anteriores son correctas.";
 answers[33] = choices[33][0];
 units[33] = "45";
 comments[33] = "Id Pregunta: 598. Junta de Extremadura A1 2015";


//  Id pregunta: 135 Año de creación de pregunta: 2016
 questions[34]= "35)  Dentro de las &uacute;ltimas medidas vigentes de impulso de la actividad econ&oacute;mica, la liberalizaci&oacute;n del comercio implica:";
 choices[34]= new Array();
 choices[34][0] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[34][1] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 choices[34][2] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[34][3] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 answers[34] = choices[34][0];
 units[34] = "12";
 comments[34] = "Id Pregunta: 135. Leyes modelo econ&oacute;mico";


//  Id pregunta: 395 Año de creación de pregunta: 2016
 questions[35]= "36)  Una persona que en atenci&oacute;n a su sexo es tratada de manera menos favorable que otra en situaci&oacute;n comparable, est&aacute; sufriendo:";
 choices[35]= new Array();
 choices[35][0] = "Discriminaci&oacute;n indirecta.";
 choices[35][1] = "Discriminaci&oacute;n directa.";
 choices[35][2] = "Discriminaci&oacute;n por maternidad.";
 choices[35][3] = "Discriminaci&oacute;n abusiva.";
 answers[35] = choices[35][1];
 units[35] = "14";
 comments[35] = "Id Pregunta: 395. POLITICAS DE IGUALDAD";


//  Id pregunta: 431 Año de creación de pregunta: 2016
 questions[36]= "37)  En el supuesto de que una empresa haga publicidad enga&ntilde;osa de sus acciones de responsabilidad en materia de igualdad, podr&aacute;n ejercer la acci&oacute;n de cesaci&oacute;n cuando se considere:";
 choices[36]= new Array();
 choices[36][0] = "El Instituto de la Mujer.";
 choices[36][1] = "&Oacute;rganos equivalentes al anterior pertenecientes a las CCAA.";
 choices[36][2] = "Ambas son correctas.";
 choices[36][3] = "A y B son incorrectas.";
 answers[36] = choices[36][2];
 units[36] = "14";
 comments[36] = "Id Pregunta: 431. POLITICAS DE IGUALDAD";


//  Id pregunta: 392 Año de creación de pregunta: 2016
 questions[37]= "38)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[37]= new Array();
 choices[37][0] = "Indirecta.";
 choices[37][1] = "Directa.";
 choices[37][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[37][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[37] = choices[37][1];
 units[37] = "14";
 comments[37] = "Id Pregunta: 392. POLITICAS DE IGUALDAD";


//  Id pregunta: 577 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Cu&aacute;ndo fue aprobada la Estrategia TIC?";
 choices[38]= new Array();
 choices[38][0] = "El 2 de Octubre de 2015";
 choices[38][1] = "El 15 de Septiembre de 2015";
 choices[38][2] = "El 1 de Octubre de 2015";
 choices[38][3] = "El 5 de Octubre de 2015";
 answers[38] = choices[38][0];
 units[38] = "19";
 comments[38] = "Id Pregunta: 577. Estrategia TIC";


//  Id pregunta: 286 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Cu&aacute;l no es un pilar de la Estrategia del Mercado &Uacute;nico Digital?";
 choices[39]= new Array();
 choices[39][0] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa.";
 choices[39][1] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar.";
 choices[39][2] = "Iniciativa europea de libre flujo de datos.";
 choices[39][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital.";
 answers[39] = choices[39][2];
 units[39] = "5";
 comments[39] = "Id Pregunta: 286. UNION EUROPEA";


//  Id pregunta: 565 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;Qu&eacute; limites marca el &quot;pacto fiscal europeo&quot; de 2012 para sus Estados Miembros?";
 choices[40]= new Array();
 choices[40][0] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 40% del PIB";
 choices[40][1] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 choices[40][2] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 50% del PIB";
 choices[40][3] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 answers[40] = choices[40][3];
 units[40] = "12";
 comments[40] = "Id Pregunta: 565. Modelo econ&oacute;mico";


//  Id pregunta: 435 Año de creación de pregunta: 2016
 questions[41]= "42)  Sobre el servicio com&uacute;n Autentica, se&ntilde;ale la respuesta correcta:";
 choices[41]= new Array();
 choices[41][0] = "Autentica ofrece &uacute;nicamente servicios de autenticaci&oacute;n de empleados p&uacute;blicos de las AA.PP. y usuarios relacionados,";
 choices[41][1] = "Su objetivo es constituirse como el servicio com&uacute;n compartido de referencia para los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado, para sus aplicaciones internas.";
 choices[41][2] = "El servicio provee atributos de los usuarios autenticados relacionados con la unidad y el puesto de destino, incluyendo correo electr&oacute;nico y tel&eacute;fono.";
 choices[41][3] = "Ofrece funcionalidad de autorizaci&oacute;n de usuarios, &uacute;nicamente pertenecientes a la Administraci&oacute;n General del Estado.";
 answers[41] = choices[41][2];
 units[41] = "43";
 comments[41] = "Id Pregunta: 435. SERVICIOS COMUNES";


//  Id pregunta: 5 Año de creación de pregunta: 2016
 questions[42]= "43)  Se&ntilde;ale cu&aacute;l de los siguientes NO es uno de los principios de COBIT v5:";
 choices[42]= new Array();
 choices[42][0] = "Satisfacer las necesidades de las partes interesadas.";
 choices[42][1] = "Cubrir las necesidades del departamento de tecnolog&iacute;as de la informaci&oacute;n.";
 choices[42][2] = "Habilitar un enfoque hol&iacute;stico.";
 choices[42][3] = "Separar el gobierno de la gesti&oacute;n.";
 answers[42] = choices[42][1];
 units[42] = "101";
 comments[42] = "Id Pregunta: 5. AGE A1 2015";


//  Id pregunta: 437 Año de creación de pregunta: 2016
 questions[43]= "44)  Los Portales de EE.LL. y CC.AA. ofrecen una herramienta de gesti&oacute;n de identidades de los empleados p&uacute;blicos de las entidades locales o auton&oacute;micas. Se&ntilde;ale la respuesta incorrecta.";
 choices[43]= new Array();
 choices[43][0] = "Los empleados p&uacute;blicos de las EE.LL. o CC.AA. tienen que solicitar el alta en alguna unidad local o auton&oacute;mica.";
 choices[43][1] = "Proporcionan tambi&eacute;n informaci&oacute;n del cargo y rol asociados.";
 choices[43][2] = "Cualquier organismo p&uacute;blico puede solicitar la inclusi&oacute;n en la plataforma de nuevas aplicaciones dirigidas a las EE.LL. o CC.AA.: &eacute;stas podr&aacute;n acceder desde un punto centralizado al nuevo servicio.";
 choices[43][3] = "Los portales est&aacute;n integrados y sincronizados con el Directorio Com&uacute;n de Unidades Org&aacute;nicas y Oficinas &#8208; DIR3, permitiendo que la gesti&oacute;n de usuarios y roles no se vea afectada por cambios en el directorio.";
 answers[43] = choices[43][0];
 units[43] = "43";
 comments[43] = "Id Pregunta: 437. SERVICIOS COMUNES";


//  Id pregunta: 140 Año de creación de pregunta: 2016
 questions[44]= "45)  No es una causa de inadmisi&oacute;n de un recurso administrativo:";
 choices[44]= new Array();
 choices[44][0] = "Carecer de legitimaci&oacute;n el recurrente";
 choices[44][1] = "Tratarse de un acto no susceptible de recurso";
 choices[44][2] = "La ausencia de calificaci&oacute;n del recurso por parte del recurrente";
 choices[44][3] = "Todas ellas son causas de inadmisi&oacute;n de un recurso administrativo";
 answers[44] = choices[44][2];
 units[44] = "8";
 comments[44] = "Id Pregunta: 140. Ley 39/2015, Art&iacute;culo 116";


//  Id pregunta: 422 Año de creación de pregunta: 2016
 questions[45]= "46)  Los distintivos para reconocer a aquellas empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato, lo crear&aacute;:";
 choices[45]= new Array();
 choices[45][0] = "El Ministerio de Igualdad.";
 choices[45][1] = "El Ministerio de Empleo y Seguridad Social.";
 choices[45][2] = "Ambas son correctas.";
 choices[45][3] = "La Consejer&iacute;a de Igualdad de cada CCAA.";
 answers[45] = choices[45][1];
 units[45] = "14";
 comments[45] = "Id Pregunta: 422. POLITICAS DE IGUALDAD";


//  Id pregunta: 667 Año de creación de pregunta: 2016
 questions[46]= "47)  Se&ntilde;ale la opci&oacute;n falsa respecto a la instrucci&oacute;n del procedimiento definida en la Ley 39/2015:";
 choices[46]= new Array();
 choices[46][0] = "Los interesados podr&aacute;n, en cualquier momento del procedimiento anterior al tr&aacute;mite de audiencia, aducir alegaciones y aportar documentos u otros elementos de juicio.";
 choices[46][1] = "El instructor del procedimiento s&oacute;lo podr&aacute; rechazar las pruebas propuestas por los interesados cuando sean manifiestamente improcedentes o innecesarias, mediante resoluci&oacute;n motivada.";
 choices[46][2] = "Salvo disposici&oacute;n expresa en contrario, los informes ser&aacute;n preceptivos y vinculantes.";
 choices[46][3] = "Se podr&aacute; prescindir del tr&aacute;mite de audiencia cuando no figuren en el procedimiento ni sean tenidos en cuenta en la resoluci&oacute;n otros hechos ni otras alegaciones y pruebas que las aducidas por el interesado.";
 answers[46] = choices[46][2];
 units[46] = "7";
 comments[46] = "Id Pregunta: 667. Cap&iacute;tulo IV, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 231 Año de creación de pregunta: 2016
 questions[47]= "48)  La convocatoria a refer&eacute;ndum en los casos previstos en la Constituci&oacute;n corresponde a:";
 choices[47]= new Array();
 choices[47][0] = "El Presidente del Congreso de los Diputados.";
 choices[47][1] = "El Presidente del Gobierno.";
 choices[47][2] = "El Rey.";
 choices[47][3] = "El Consejo de Ministros.";
 answers[47] = choices[47][0];
 units[47] = "1";
 comments[47] = "Id Pregunta: 231. CONSTITUCION1978";


//  Id pregunta: 701 Año de creación de pregunta: 2016
 questions[48]= "49)  Se&ntilde;ale la que NO corresponde a una herramienta de automatizaci&oacute;n de pruebas:";
 choices[48]= new Array();
 choices[48][0] = "Selenium";
 choices[48][1] = "JUnit";
 choices[48][2] = "Jenkins";
 choices[48][3] = "JMeter";
 answers[48] = choices[48][2];
 units[48] = "92";
 comments[48] = "Id Pregunta: 701. INTEGRACION CONTINUA";


//  Id pregunta: 151 Año de creación de pregunta: 2016
 questions[49]= "50)  Seg&uacute;n la ley 39/2015, est&aacute;n obligados a relacionarse a trav&eacute;s de medios electr&oacute;nicos con las Administraciones P&uacute;blicas para la realizaci&oacute;n de cualquier tr&aacute;mite de un procedimiento administrativo: (se&ntilde;ala la respuesta incorrecta)";
 choices[49]= new Array();
 choices[49][0] = "las personas jur&iacute;dicas ";
 choices[49][1] = "las entidades con personalidad jur&iacute;dica";
 choices[49][2] = "los empleados de las Administraciones P&uacute;blicas para los tr&aacute;mites y actuaciones que realicen con ellas por raz&oacute;n de su condici&oacute;n de empleado p&uacute;blico";
 choices[49][3] = "quienes representen a un interesado que est&eacute; obligado legalmente a relacionarse electr&oacute;nicamente con la Administraci&oacute;n";
 answers[49] = choices[49][1];
 units[49] = "7";
 comments[49] = "Id Pregunta: 151. Ley 39/2015, Art&iacute;culo 14";


//  Id pregunta: 87 Año de creación de pregunta: 2016
 questions[50]= "51)  Respecto a la pol&iacute;tica de normalizaci&oacute;n TIC en la Uni&oacute;n Europea, como se&ntilde;ala el Reglamento 1025/2012 del Parlamento y del Consejo, la identificaci&oacute;n de especificaciones t&eacute;cnicas de las TIC admisibles a efectos de referenciaci&oacute;n:";
 choices[50]= new Array();
 choices[50][0] = "Ha de estar siempre basada en normas de estandarizaci&oacute;n nacionales, europeas o internacionales.";
 choices[50][1] = "No deben ser usadas para permitir la interoperabilidad en la contrataci&oacute;n p&uacute;blica, dado que se podr&iacute;an dar situaciones monopol&iacute;sticas.";
 choices[50][2] = "Ser&aacute; realizada por la Comisi&oacute;n, bien a propuesta de un Estado miembro o por iniciativa propia, sin necesidad de ser una norma nacional, europea o internacional, cumpli&eacute;ndose los dem&aacute;s requisitos establecidos en el reglamento.";
 choices[50][3] = "Requieren para su adopci&oacute;n la unanimidad de todos los Estados miembro.";
 answers[50] = choices[50][2];
 units[50] = "48";
 comments[50] = "Id Pregunta: 87. AGE A1 2015";


//  Id pregunta: 259 Año de creación de pregunta: 2016
 questions[51]= "52)  La iniciativa legislativa corresponde:";
 choices[51]= new Array();
 choices[51][0] = "Al Congreso y al Senado, &uacute;nicamente.";
 choices[51][1] = "Al rey y al Gobierno.";
 choices[51][2] = "Al Congreso, al Senado y al Rey.";
 choices[51][3] = "Al Gobierno, al Congreso y al Senado.";
 answers[51] = choices[51][3];
 units[51] = "1";
 comments[51] = "Id Pregunta: 259. CONSTITUCION1978";


//  Id pregunta: 661 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Qu&eacute; tipos de nodos tiene un cl&uacute;ster Hadoop?";
 choices[52]= new Array();
 choices[52][0] = "Varios namenodes y varios datanodes por cluster";
 choices[52][1] = "varios namenodes y obligatoriamente 1 datanode por cluster";
 choices[52][2] = "1 namenode y varios datanodes por cluster";
 choices[52][3] = "1 namenode y obligatoriamente 1 datanode por cluster";
 answers[52] = choices[52][2];
 units[52] = "73";
 comments[52] = "Id Pregunta: 661. ";


//  Id pregunta: 9 Año de creación de pregunta: 2016
 questions[53]= "54)  Con respecto a los entornos de integraci&oacute;n continua, indique cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[53]= new Array();
 choices[53][0] = "Jenkins no dispone de la funcionalidad de extenderse mediante plugins.";
 choices[53][1] = "SonarQube utiliza herramientas de an&aacute;lisis est&aacute;tico de c&oacute;digo que permiten obtener m&eacute;tricas para mejorar la calidad del c&oacute;digo.";
 choices[53][2] = "El fichero POM empleado en Maven no siempre es un fichero XML.";
 choices[53][3] = "Jenkins es un software de integraci&oacute;n continua bajo licencia Oracle.";
 answers[53] = choices[53][1];
 units[53] = "95";
 comments[53] = "Id Pregunta: 9. AGE A1 2015";


//  Id pregunta: 547 Año de creación de pregunta: 2016
 questions[54]= "55)  La gobernanza TIC incluye, entre otros, los siguientes aspectos:";
 choices[54]= new Array();
 choices[54][0] = "Integrar la estrategia TIC con la de negocio";
 choices[54][1] = "Adoptar e implantar un marco de control de las TIC";
 choices[54][2] = "Proporcionar las estructuras organizativas encargadas de implantar la estrategia TIC";
 choices[54][3] = "Todas las anteriores";
 answers[54] = choices[54][3];
 units[54] = "26";
 comments[54] = "Id Pregunta: 547. Gobernanza TIC";


//  Id pregunta: 571 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Cu&aacute;l de los siguientes hechos NO se produce durante la d&eacute;cada de los 70-80?";
 choices[55]= new Array();
 choices[55][0] = "Incorporaci&oacute;n de la mujer al mercado laboral";
 choices[55][1] = "Entrada en la Uni&oacute;n Europea";
 choices[55][2] = "Pactos de la Moncloa";
 choices[55][3] = "Ingreso en la ONU";
 answers[55] = choices[55][3];
 units[55] = "12";
 comments[55] = "Id Pregunta: 571. Modelo econ&oacute;mico";


//  Id pregunta: 788 Año de creación de pregunta: 2016
 questions[56]= "57)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado son &oacute;rganos directivos:";
 choices[56]= new Array();
 choices[56][0] = "los Delegados del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[56][1] = "los Subdelegados del Gobierno en las provincias";
 choices[56][2] = "los Subdelegados del Gobierno en las entidades locales";
 choices[56][3] = "a y b son correctas";
 answers[56] = choices[56][3];
 units[56] = "4, 7, 8, 9";
 comments[56] = "Id Pregunta: 788. Ley 40/2015";


//  Id pregunta: 400 Año de creación de pregunta: 2016
 questions[57]= "58)  Corresponde probar la ausencia de discriminaci&oacute;n en las medidas adoptadas y su proporcionalidad, a:";
 choices[57]= new Array();
 choices[57][0] = "A la persona demandante.";
 choices[57][1] = "A la persona demandada.";
 choices[57][2] = "Al &oacute;rgano judicial.";
 choices[57][3] = "Al &oacute;rgano administrativo.";
 answers[57] = choices[57][1];
 units[57] = "14";
 comments[57] = "Id Pregunta: 400. POLITICAS DE IGUALDAD";


//  Id pregunta: 481 Año de creación de pregunta: 2016
 questions[58]= "59)  A tenor del art&iacute;culo 48 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, podr&aacute; ser diferido el vencimiento de la obligaci&oacute;n de pago del precio de compra de bienes inmuebles adquiridos directamente cuyo importe excede de:";
 choices[58]= new Array();
 choices[58][0] = "Cuatro millones de euros.";
 choices[58][1] = "Seis millones de euros.";
 choices[58][2] = "Siete millones de euros.";
 choices[58][3] = "Cinco millones de euros.";
 answers[58] = choices[58][1];
 units[58] = "10";
 comments[58] = "Id Pregunta: 481. PRESUPUESTOS GENERALES";


//  Id pregunta: 558 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Cu&aacute;ndo ha sido aprobada la Agenda Digital para Espa&ntilde;a?";
 choices[59]= new Array();
 choices[59][0] = "En 2015";
 choices[59][1] = "En 2013";
 choices[59][2] = "En 2016";
 choices[59][3] = "En 2007";
 answers[59] = choices[59][1];
 units[59] = "19";
 comments[59] = "Id Pregunta: 558. Agenda Digital";


//  Id pregunta: 543 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Qu&eacute; est&aacute;ndar ISO define un marco de trabajo para la gobernanza TIC?";
 choices[60]= new Array();
 choices[60][0] = "ISO/IEC 31000";
 choices[60][1] = "ISO/IEC 14000";
 choices[60][2] = "ISO/IEC 38500";
 choices[60][3] = "ISO/IEC 18000";
 answers[60] = choices[60][2];
 units[60] = "26";
 comments[60] = "Id Pregunta: 543. Gobernanza TIC";


//  Id pregunta: 646 Año de creación de pregunta: 2016
 questions[61]= "62)  En Itil v3 se diferencia entre la Gesti&oacute;n de la Cartera de Servicios y la Gesti&oacute;n del Cat&aacute;logo de Servicios ya que:";
 choices[61]= new Array();
 choices[61][0] = "La Cartera de Servicios contiene informaci&oacute;n sobre cada servicio y su estado.";
 choices[61][1] = "La Cartera de Servicios es un subconjunto del Cat&aacute;logo de Servicios.";
 choices[61][2] = "La Cartera de Servicios divide los servicios en componentes y contiene pol&iacute;ticas, directrices y responsabilidades , as&iacute; como precios, acuerdos de nivel de servicio y condiciones de entrega.";
 choices[61][3] = "Todas las respuestas son correctas.";
 answers[61] = choices[61][0];
 units[61] = "101";
 comments[61] = "Id Pregunta: 646. Junta de Extremadura A1 2015";


//  Id pregunta: 263 Año de creación de pregunta: 2016
 questions[62]= "63)  Los Vocales integrantes del &oacute;rgano de gobierno del Poder Judicial:";
 choices[62]= new Array();
 choices[62][0] = "Ser&aacute;n nombrados por el Presidente del Tribunal Supremo y del Consejo del Poder Judicial, por un periodo de cinco a&ntilde;os.";
 choices[62][1] = "Ser&aacute;n nombrados por el Congreso de los Diputados y por el Senado por un periodo de cinco a&ntilde;os.";
 choices[62][2] = "Ser&aacute;n nombrados por el Rey por un periodo de cinco a&ntilde;os.";
 choices[62][3] = "er&aacute;n nombrados por el Rey por un periodo de tres a&ntilde;os.";
 answers[62] = choices[62][1];
 units[62] = "1";
 comments[62] = "Id Pregunta: 263. CONSTITUCION1978";


//  Id pregunta: 803 Año de creación de pregunta: 2016
 questions[63]= "64)  Los Secretarios generales t&eacute;cnicos tienen a todos los efectos la categor&iacute;a de:";
 choices[63]= new Array();
 choices[63][0] = "Director General";
 choices[63][1] = "Secretario general";
 choices[63][2] = "Subdirector general";
 choices[63][3] = "Subsecretario";
 answers[63] = choices[63][0];
 units[63] = "4, 7, 8, 9";
 comments[63] = "Id Pregunta: 803. Ley 40/2015";


//  Id pregunta: 366 Año de creación de pregunta: 2016
 questions[64]= "65)  Para constituir un Grupo en el Parlamento Europeo es necesario al menos:";
 choices[64]= new Array();
 choices[64][0] = "20 parlamentarios.";
 choices[64][1] = "29 parlamentarios.";
 choices[64][2] = "18 parlamentarios.";
 choices[64][3] = "23 parlamentarios.";
 answers[64] = choices[64][0];
 units[64] = "5";
 comments[64] = "Id Pregunta: 366. UNION EUROPEA";


//  Id pregunta: 159 Año de creación de pregunta: 2016
 questions[65]= "66)  Seg&uacute;n la ley 39/2015, los actos administrativos, a menos que su naturaleza exija otra forma m&aacute;s adecuada de expresi&oacute;n y constancia, se producir&aacute;n: ";
 choices[65]= new Array();
 choices[65][0] = "verbalmente";
 choices[65][1] = "por escrito a trav&eacute;s de medios electr&oacute;nicos o no electr&oacute;nicos";
 choices[65][2] = "por escrito a trav&eacute;s de medios electr&oacute;nicos";
 choices[65][3] = "por escrito a trav&eacute;s de medios no electr&oacute;nicos";
 answers[65] = choices[65][2];
 units[65] = "7";
 comments[65] = "Id Pregunta: 159. Ley 39/2015, Art&iacute;culo 36";


//  Id pregunta: 157 Año de creación de pregunta: 2016
 questions[66]= "67)  Seg&uacute;n la ley 39/2015, los actos administrativos ser&aacute;n objeto de publicaci&oacute;n cuando (se&ntilde;ala la incorrecta):";
 choices[66]= new Array();
 choices[66][0] = "la Administraci&oacute;n estime que la notificaci&oacute;n efectuada a un solo interesado es insuficiente para garantizar la notificaci&oacute;n a todos, no siendo necesaria la notificaci&oacute;n individualizada en este caso";
 choices[66][1] = "se trate de actos integrantes de un procedimiento selectivo o de concurrencia competitiva de cualquier tipo";
 choices[66][2] = "el acto tenga por destinatario a una pluralidad indeterminada de personas";
 choices[66][3] = "as&iacute; lo establezcan las normas reguladoras de cada procedimiento o lo aconsejen razones de inter&eacute;s p&uacute;blico apreciadas por el &oacute;rgano competente";
 answers[66] = choices[66][0];
 units[66] = "7";
 comments[66] = "Id Pregunta: 157. Ley 39/2015, Art&iacute;culo 45";


//  Id pregunta: 845 Año de creación de pregunta: 2016
 questions[67]= "68)  Se&ntilde;ale la respuesta falsa:";
 choices[67]= new Array();
 choices[67][0] = "Cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, especificando las condiciones, protocolos y criterios funcionales o t&eacute;cnicos necesarios para acceder a dichos datos con las m&aacute;ximas garant&iacute;as de seguridad, integridad y disponibilidad.";
 choices[67][1] = "La disponibilidad de tales datos estar&aacute; limitada estrictamente a aquellos que son requeridos a los interesados por las restantes Administraciones para la tramitaci&oacute;n y resoluci&oacute;n de los procedimientos y actuaciones de su competencia, de acuerdo con la normativa reguladora de los mismos.";
 choices[67][2] = "De conformidad con lo dispuesto en la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal y su normativa de desarrollo, cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, siendo preceptiva la firma del convenio correspondiente.";
 choices[67][3] = "La Administraci&oacute;n General del Estado, las Administraciones Auton&oacute;micas y las Entidades Locales, adoptar&aacute;n las medidas necesarias e incorporar&aacute;n en sus respectivos &aacute;mbitos las tecnolog&iacute;as precisas para posibilitar la interconexi&oacute;n de sus redes";
 answers[67] = choices[67][2];
 units[67] = "4, 7, 8, 9";
 comments[67] = "Id Pregunta: 845. Ley 40/2015";


//  Id pregunta: 305 Año de creación de pregunta: 2016
 questions[68]= "69)  Indique en donde tiene su sede de la Comisi&oacute;n Europea:";
 choices[68]= new Array();
 choices[68][0] = "Estrasburgo.";
 choices[68][1] = "Bruselas.";
 choices[68][2] = "Luxemburgo.";
 choices[68][3] = "Par&iacute;s.";
 answers[68] = choices[68][1];
 units[68] = "5";
 comments[68] = "Id Pregunta: 305. UNION EUROPEA";


//  Id pregunta: 807 Año de creación de pregunta: 2016
 questions[69]= "70)  Los Directores generales ser&aacute;n nombrados y separados por:";
 choices[69]= new Array();
 choices[69][0] = "Real Decreto del Consejo de Ministros, a propuesta del titular del Departamento o del Presidente del Gobierno";
 choices[69][1] = "Ley de las Cortes Generales, a propuesta del titular del Departamento";
 choices[69][2] = "Ley de las Cortes Generales, a propuesta del titular del Departamento o del Presidente del Gobierno";
 choices[69][3] = "Real Decreto del Consejo de Ministros, a propuesta del titular del Departamento";
 answers[69] = choices[69][0];
 units[69] = "4, 7, 8, 9";
 comments[69] = "Id Pregunta: 807. Ley 40/2015";


//  Id pregunta: 235 Año de creación de pregunta: 2016
 questions[70]= "71)  El Art&iacute;culo 108 de la Constituci&oacute;n Espa&ntilde;ola establece que el Gobierno responde solidariamente de su gesti&oacute;n pol&iacute;tica ante:";
 choices[70]= new Array();
 choices[70][0] = "El Jefe del Estado.";
 choices[70][1] = "El Tribunal Constitucional.";
 choices[70][2] = "El Congreso de los Diputados.";
 choices[70][3] = "Las Cortes Generales.";
 answers[70] = choices[70][0];
 units[70] = "1";
 comments[70] = "Id Pregunta: 235. CONSTITUCION1978";


//  Id pregunta: 653 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Cual de las siguientes bases de datos no est&aacute; orientada a grafos?";
 choices[71]= new Array();
 choices[71][0] = "Neo4J ";
 choices[71][1] = "OrientDB ";
 choices[71][2] = "InfoGrid ";
 choices[71][3] = "SimpleDB";
 answers[71] = choices[71][3];
 units[71] = "73";
 comments[71] = "Id Pregunta: 653. ";


//  Id pregunta: 356 Año de creación de pregunta: 2016
 questions[72]= "73)  Se&ntilde;ale la respuesta correcta respecto a las directivas comunitarias:";
 choices[72]= new Array();
 choices[72][0] = "No se aplican directamente en los Estados.";
 choices[72][1] = "No son vinculantes.";
 choices[72][2] = "Habitualmente se dictan sobre materias que son competencias exclusivas de la Uni&oacute;n Europea.";
 choices[72][3] = "Tienen alcance general.";
 answers[72] = choices[72][0];
 units[72] = "5";
 comments[72] = "Id Pregunta: 356. UNION EUROPEA";


//  Id pregunta: 154 Año de creación de pregunta: 2016
 questions[73]= "74)  Los t&eacute;rminos y plazos establecidos en la ley 39/2015 u otras leyes obligan a:";
 choices[73]= new Array();
 choices[73][0] = "las autoridades al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[73][1] = "el personal al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[73][2] = "los interesados en la tramitaci&oacute;n de los asuntos";
 choices[73][3] = "todas son correctas";
 answers[73] = choices[73][3];
 units[73] = "7";
 comments[73] = "Id Pregunta: 154. Ley 39/2015, Art&iacute;culo 29";


//  Id pregunta: 45 Año de creación de pregunta: 2016
 questions[74]= "75)  46. &iquest;Cu&aacute;l de las siguientes NO es una de las APIs incorporadas a HTML5?";
 choices[74]= new Array();
 choices[74][0] = "HTML Drag and Drop, para arrastrar un objeto a otra localizaci&oacute;n.";
 choices[74][1] = "HTML Advanced Search, para parametrizar y modificar el comportamiento de los buscadores.";
 choices[74][2] = "HTML Local Storage, para almacenar datos en el navegador.";
 choices[74][3] = "HTML SSE, para actualizar una p&aacute;gina web autom&aacute;ticamente sin preguntar al servidor.";
 answers[74] = choices[74][1];
 units[74] = "74";
 comments[74] = "Id Pregunta: 45. AGE A1 2015";


