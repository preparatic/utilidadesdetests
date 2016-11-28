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

//  Id pregunta: 821 Año de creación de pregunta: 2016
 questions[0]= "1)  Los Delegados del Gobierno (se&ntilde;ala la incorrecta):";
 choices[0]= new Array();
 choices[0][0] = "representan al Gobierno de la Naci&oacute;n en el territorio de la respectiva Comunidad Aut&oacute;noma";
 choices[0][1] = "dirigir&aacute;n y supervisar&aacute;n la Administraci&oacute;n General del Estado en el territorio de las respectivas Comunidades Aut&oacute;nomas";
 choices[0][2] = "son &oacute;rganos directivos con rango de Director general";
 choices[0][3] = "ser&aacute;n nombrados y separados por Real Decreto del Consejo de Ministros, a propuesta del Presidente del Gobierno";
 answers[0] = choices[0][2];
 units[0] = "4, 7, 8, 9";
 comments[0] = "Id Pregunta: 821. Ley 40/2015";


//  Id pregunta: 809 Año de creación de pregunta: 2016
 questions[1]= "2)  Los Directores generales ser&aacute;n nombrados y separados por:";
 choices[1]= new Array();
 choices[1][0] = "Real Decreto del Consejo de Ministros, a propuesta del titular del Departamento o del Presidente del Gobierno";
 choices[1][1] = "Ley de las Cortes Generales, a propuesta del titular del Departamento";
 choices[1][2] = "Ley de las Cortes Generales, a propuesta del titular del Departamento o del Presidente del Gobierno";
 choices[1][3] = "Real Decreto del Consejo de Ministros, a propuesta del titular del Departamento";
 answers[1] = choices[1][0];
 units[1] = "4, 7, 8, 9";
 comments[1] = "Id Pregunta: 809. Ley 40/2015";


//  Id pregunta: 568 Año de creación de pregunta: 2016
 questions[2]= "3)  Cuando decimos que la inversi&oacute;n extranjera en Espa&ntilde;a tiene un car&aacute;cter proc&iacute;clico, nos referimos a que:";
 choices[2]= new Array();
 choices[2][0] = "Aumenta cuando la econom&iacute;a est&aacute; en crecimiento, y se reduce cuando el pa&iacute;s entra en recesi&oacute;n";
 choices[2][1] = "Se reduce cuando la econom&iacute;a est&aacute; en crecimiento, y aumenta cuando el pa&iacute;s entra en recesi&oacute;n";
 choices[2][2] = "Aumenta cuando el pa&iacute;s entra en recesi&oacute;n, y aumenta cuando la econom&iacute;a est&aacute; en crecimiento";
 choices[2][3] = "Se reduce cuando el pa&iacute;s entra en recesi&oacute;n, y se reduce cuando la econom&iacute;a est&aacute; en crecimiento";
 answers[2] = choices[2][0];
 units[2] = "12";
 comments[2] = "Id Pregunta: 568. Modelo econ&oacute;mico";


//  Id pregunta: 178 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Qu&eacute; es lo que caracteriza un decreto-ley?";
 choices[3]= new Array();
 choices[3][0] = "No puede afectar al ordenamiento de las instituciones b&aacute;sicas del Estado.";
 choices[3][1] = "Es dictado por las Cortes Generales en casos de urgente necesidad.";
 choices[3][2] = "Es dictado por el Presidente del Gobierno en casos de extraordinaria y urgente necesidad.";
 choices[3][3] = "Es dictado por el Gobierno por encargo de las Cortes Generales.";
 answers[3] = choices[3][0];
 units[3] = "1";
 comments[3] = "Id Pregunta: 178. CONSTITUCION1978";


//  Id pregunta: 680 Año de creación de pregunta: 2016
 questions[4]= "5)  De acuerdo a la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia, se define dependencia como:";
 choices[4]= new Array();
 choices[4][0] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[4][1] = "El estado de car&aacute;cter permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[4][2] = "El estado de car&aacute;cter temporal en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[4][3] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad, la discapacidad o la baja laboral, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 answers[4] = choices[4][1];
 units[4] = "14";
 comments[4] = "Id Pregunta: 680. Dependencia";


//  Id pregunta: 292 Año de creación de pregunta: 2016
 questions[5]= "6)  Indique la afirmaci&oacute;n correcta relativa al Parlamento Europeo:";
 choices[5]= new Array();
 choices[5][0] = "Se reunir&aacute; con previa convocatoria el segundo martes de marzo.";
 choices[5][1] = "Se reunir&aacute; sin necesidad de previa convocatoria el segundo martes de marzo.";
 choices[5][2] = "Se reunir&aacute; la segunda semana de enero con previa convocatoria.";
 choices[5][3] = "Se reunir&aacute; la tercera semana de enero sin previa convocatoria.";
 answers[5] = choices[5][1];
 units[5] = "5";
 comments[5] = "Id Pregunta: 292. UNION EUROPEA";


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


//  Id pregunta: 271 Año de creación de pregunta: 2016
 questions[7]= "8)  La delegaci&oacute;n legislativa de las Cortes Generales en el Gobierno, cuando se trata de refundir varios textos legales en uno solo, deber&aacute; otorgarse mediante:";
 choices[7]= new Array();
 choices[7][0] = "Ley org&aacute;nica.";
 choices[7][1] = "Ley ordinaria.";
 choices[7][2] = "Ley de bases.";
 choices[7][3] = "Ley marco.";
 answers[7] = choices[7][0];
 units[7] = "1";
 comments[7] = "Id Pregunta: 271. CONSTITUCION1978";


//  Id pregunta: 423 Año de creación de pregunta: 2016
 questions[8]= "9)  Para contribuir a un reparto m&aacute;s equilibrado de las responsabilidades familiares se reconoce a los padres:";
 choices[8]= new Array();
 choices[8][0] = "El derecho a un permiso.";
 choices[8][1] = "Una prestaci&oacute;n por paternidad.";
 choices[8][2] = "Ambas son correctas.";
 choices[8][3] = "18 d&iacute;as de permiso.";
 answers[8] = choices[8][2];
 units[8] = "14";
 comments[8] = "Id Pregunta: 423. POLITICAS DE IGUALDAD";


//  Id pregunta: 602 Año de creación de pregunta: 2016
 questions[9]= "10)  Los est&aacute;ndares de la norma IEEE 802.11 se ubican en las capas del modelo OSI:";
 choices[9]= new Array();
 choices[9][0] = "La capa de transmisi&oacute;n y la capa de presentaci&oacute;n.";
 choices[9][1] = "La capa de aplicaci&oacute;n y la capa de gesti&oacute;n.";
 choices[9][2] = "La capa f&iacute;sica y la cada de enlace de datos.";
 choices[9][3] = "La capa de red y la capa de tr&aacute;fico.";
 answers[9] = choices[9][2];
 units[9] = "108";
 comments[9] = "Id Pregunta: 602. Junta de Extremadura A1 2015";


//  Id pregunta: 3 Año de creación de pregunta: 2016
 questions[10]= "11)  En el lenguaje de modelado UML :";
 choices[10]= new Array();
 choices[10][0] = "Los diagramas de secuencia y colaboraci&oacute;n son usados para modelar el comportamiento del sistema, pudiendo usarse para modelar un caso de uso, una clase, o un m&eacute;todo complicado.";
 choices[10][1] = "Los diagramas de actividad son usados para modelar la configuraci&oacute;n de los elementos de procesado en tiempo de ejecuci&oacute;n.";
 choices[10][2] = "Los diagramas de componentes son usados para modelar la estructura del software, incluyendo las dependencias entre los componentes de software.";
 choices[10][3] = "Los diagramas de implementaci&oacute;n son usados para modelar interacciones entre objetos de dise&ntilde;o en el sistema.";
 answers[10] = choices[10][2];
 units[10] = "89";
 comments[10] = "Id Pregunta: 3. AGE A1 2015";


//  Id pregunta: 790 Año de creación de pregunta: 2016
 questions[11]= "12)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado son &oacute;rganos directivos:";
 choices[11]= new Array();
 choices[11][0] = "los Delegados del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[11][1] = "los Subdelegados del Gobierno en las provincias";
 choices[11][2] = "los Subdelegados del Gobierno en las entidades locales";
 choices[11][3] = "a y b son correctas";
 answers[11] = choices[11][3];
 units[11] = "4, 7, 8, 9";
 comments[11] = "Id Pregunta: 790. Ley 40/2015";


//  Id pregunta: 102 Año de creación de pregunta: 2016
 questions[12]= "13)  Entre las caracter&iacute;sticas de las Bases de Datos NoSQL se encuentran:";
 choices[12]= new Array();
 choices[12][0] = "Pueden manejar enormes cantidades de datos estructurados";
 choices[12][1] = "Existe un control estricto de las transacciones (propiedades ACID - Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[12][2] = "Se basan en sistemas distribuidos";
 choices[12][3] = "Se basan en el modelo de datos relacional";
 answers[12] = choices[12][2];
 units[12] = "73";
 comments[12] = "Id Pregunta: 102. ";


//  Id pregunta: 307 Año de creación de pregunta: 2016
 questions[13]= "14)  Las elecciones al Parlamento Europeo tienen lugar cada:";
 choices[13]= new Array();
 choices[13][0] = "Seis a&ntilde;os.";
 choices[13][1] = "Cinco a&ntilde;os.";
 choices[13][2] = "Cuatro a&ntilde;os.";
 choices[13][3] = "Ocho a&ntilde;os.";
 answers[13] = choices[13][1];
 units[13] = "5";
 comments[13] = "Id Pregunta: 307. UNION EUROPEA";


//  Id pregunta: 310 Año de creación de pregunta: 2016
 questions[14]= "15)  Los actos legislativos de la Uni&oacute;n Europea, podr&aacute;n adoptarse &uacute;nicamente a propuesta de:";
 choices[14]= new Array();
 choices[14][0] = "La Comisi&oacute;n Europea.";
 choices[14][1] = "El Consejo Europeo.";
 choices[14][2] = "El Consejo de Europa.";
 choices[14][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[14] = choices[14][0];
 units[14] = "5";
 comments[14] = "Id Pregunta: 310. UNION EUROPEA";


//  Id pregunta: 468 Año de creación de pregunta: 2016
 questions[15]= "16)  A tenor del art&iacute;culo 34 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el ejercicio presupuestario coincidir&aacute;:";
 choices[15]= new Array();
 choices[15][0] = "Con el a&ntilde;o anterior.";
 choices[15][1] = "Con los tres a&ntilde;os anteriores.";
 choices[15][2] = "Con el a&ntilde;o natural.";
 choices[15][3] = "Con los dos a&ntilde;os anteriores.";
 answers[15] = choices[15][2];
 units[15] = "10";
 comments[15] = "Id Pregunta: 468. PRESUPUESTOS GENERALES";


//  Id pregunta: 34 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Cu&aacute;les de los siguientes mecanismos no existe espec&iacute;ficamente como cach&eacute; de c&oacute;digo PHP?";
 choices[16]= new Array();
 choices[16][0] = "Memcached";
 choices[16][1] = "OpCache";
 choices[16][2] = "WinCache Extension for PHP";
 choices[16][3] = "Alternative PHP Cache";
 answers[16] = choices[16][0];
 units[16] = "65";
 comments[16] = "Id Pregunta: 34. AGE A1 2015";


//  Id pregunta: 448 Año de creación de pregunta: 2016
 questions[17]= "18)  Dentro de la l&oacute;gica presupuestaria, los ingresos tienen car&aacute;cter...";
 choices[17]= new Array();
 choices[17][0] = "Ejecutivo";
 choices[17][1] = "Limitativo";
 choices[17][2] = "Estimativo";
 choices[17][3] = "Progresivo";
 answers[17] = choices[17][2];
 units[17] = "10";
 comments[17] = "Id Pregunta: 448. PRESUPUESTOS GENERALES";


//  Id pregunta: 657 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Qu&eacute; aplicativo no se encuentra dentro del ecosistemas de Haddoop?";
 choices[18]= new Array();
 choices[18][0] = "Yarn";
 choices[18][1] = "Flume";
 choices[18][2] = "Hive";
 choices[18][3] = "BizAgi";
 answers[18] = choices[18][3];
 units[18] = "73";
 comments[18] = "Id Pregunta: 657. ";


//  Id pregunta: 143 Año de creación de pregunta: 2016
 questions[19]= "20)  Contra la resoluci&oacute;n de un recurso de alzada:";
 choices[19]= new Array();
 choices[19][0] = "No cabe interponer ning&uacute;n tipo de recurso";
 choices[19][1] = "Puede interponerse el recurso de reposici&oacute;n como paso previo a la impugnaci&oacute;n ante el orden jurisdiccional contencioso-administrativo";
 choices[19][2] = "Puede interponerse el recurso extraordinario de revisi&oacute;n, en los casos establecidos en el art&iacute;culo 125.1.";
 choices[19][3] = "Puede interponerse un nuevo recurso de alzada si el acto no fuera expreso";
 answers[19] = choices[19][2];
 units[19] = "8";
 comments[19] = "Id Pregunta: 143. Ley 39/2015, Art&iacute;culo 122";


//  Id pregunta: 775 Año de creación de pregunta: 2016
 questions[20]= "21)  Las Administraciones P&uacute;blicas que, en el ejercicio de sus respectivas competencias, establezcan medidas que limiten el ejercicio de derechos individuales o colectivos o exijan el cumplimiento de requisitos para el desarrollo de una actividad, deber&aacute;n (se&ntilde;ala la incorrecta):";
 choices[20]= new Array();
 choices[20][0] = "aplicar el principio de proporcionalidad y elegir la medida menos restrictiva";
 choices[20][1] = "motivar su necesidad para la protecci&oacute;n del inter&eacute;s p&uacute;blico";
 choices[20][2] = "justificar su adecuaci&oacute;n para lograr los fines que se persiguen, evitando en la medida de lo posible que se produzcan diferencias de trato discriminatorias";
 choices[20][3] = "evaluar peri&oacute;dicamente los efectos y resultados obtenidos";
 answers[20] = choices[20][2];
 units[20] = "4, 7, 8, 9";
 comments[20] = "Id Pregunta: 775. Ley 40/2015";


//  Id pregunta: 410 Año de creación de pregunta: 2016
 questions[21]= "22)  La Administraci&oacute;n General del Estado, utilizar&aacute; entre otros instrumentos b&aacute;sicos para la consecuci&oacute;n del principio de igualdad:";
 choices[21]= new Array();
 choices[21][0] = "Un plan estrat&eacute;gico de igualdad de oportunidades.";
 choices[21][1] = "Un objetivo espec&iacute;fico de igualdad.";
 choices[21][2] = "Un programa de igualdad.";
 choices[21][3] = "Un estatuto de igualdad.";
 answers[21] = choices[21][0];
 units[21] = "14";
 comments[21] = "Id Pregunta: 410. POLITICAS DE IGUALDAD";


//  Id pregunta: 525 Año de creación de pregunta: 2016
 questions[22]= "23)  Se consideran interesados en el procedimiento administrativo:";
 choices[22]= new Array();
 choices[22][0] = "quienes lo promuevan como titulares de derechos o intereses leg&iacute;timos individuales o colectivos";
 choices[22][1] = "los que, habiendo iniciado el procedimiento, tengan derechos que puedan resultar afectados por la decisi&oacute;n que en el mismo se adopte";
 choices[22][2] = "aquellos cuyos intereses leg&iacute;timos, individuales o colectivos, puedan resultar afectados por la resoluci&oacute;n y se personen en el procedimiento durante el tr&aacute;mite de audiencia";
 choices[22][3] = "todas son correctas";
 answers[22] = choices[22][0];
 units[22] = "7";
 comments[22] = "Id Pregunta: 525. LEY 39/2015";


//  Id pregunta: 171 Año de creación de pregunta: 2016
 questions[23]= "24)  Se&ntilde;ale la respuesta FALSA. Entre los objetivos de ISA2 se encuentra:";
 choices[23]= new Array();
 choices[23][0] = "desarrollar, mantener y promover un enfoque hol&iacute;stico hacia la interoperabilidad en la Uni&oacute;n para eliminar la fragmentaci&oacute;n en el panorama de la interoperabilidad en la Uni&oacute;n";
 choices[23][1] = "facilitar la reutilizaci&oacute;n de las soluciones de interoperabilidad por parte de las administraciones p&uacute;blicas europeas.";
 choices[23][2] = "identificar, crear y explotar soluciones de interoperabilidad que faciliten la ejecuci&oacute;n de las pol&iacute;ticas y actividades de la Uni&oacute;n";
 choices[23][3] = "eliminar la interacci&oacute;n electr&oacute;nica transfronteriza tanto entre las administraciones p&uacute;blicas europeas fomentando una cultura de ciberseguridad europea";
 answers[23] = choices[23][3];
 units[23] = "19";
 comments[23] = "Id Pregunta: 171. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Diciembre/Noticia-2015-12-09-Publicada-la-Decision-ISA2-continuidad-al-esfuerzo-asegurar-interoperabilidad-entre-AAPP-europeas.html#.WCnm1WrhDIU";


//  Id pregunta: 485 Año de creación de pregunta: 2016
 questions[24]= "25)  La Ley 47/2003, de 26 de noviembre, General Presupuestaria se encuentra formada por:";
 choices[24]= new Array();
 choices[24][0] = "180 art&iacute;culos.";
 choices[24][1] = "182 art&iacute;culos.";
 choices[24][2] = "185 art&iacute;culos.";
 choices[24][3] = "190 art&iacute;culos.";
 answers[24] = choices[24][1];
 units[24] = "10";
 comments[24] = "Id Pregunta: 485. PRESUPUESTOS GENERALES";


//  Id pregunta: 74 Año de creación de pregunta: 2016
 questions[25]= "26)  Se&ntilde;ale la opci&oacute;n incorrecta respecto a SMTP:";
 choices[25]= new Array();
 choices[25][0] = "SMTP es capaz de transportar correo a trav&eacute;s de m&uacute;ltiples redes: entre nodos conectados por TCP en Internet, entre nodos conectados en una Intranet TCP/IP aislados por un cortafuegos, o entre nodos en un entorno LAN o WAN que est&eacute;n usando un protocolo de nivel de transporte distinto a TCP.";
 choices[25][1] = "Usando SMTP, un proceso puede transferir correo a otro proceso en la misma red o a otra red mediante un proceso gateway accesible en las dos redes.";
 choices[25][2] = "En SMTP un mensaje de correo puede pasar por una serie de nodos gateway intermedios en su camino desde el emisor al receptor &uacute;ltimo, sirvi&eacute;ndose de mecanismos para decidir el siguiente salto como el sistema de resoluci&oacute;n de nombres de dominio de Internet.";
 choices[25][3] = "En SMTP la transferencia de mensaje ocurre siempre en una conexi&oacute;n &uacute;nica entre el emisor SMTP y el receptor final SMTP.";
 answers[25] = choices[25][3];
 units[25] = "106";
 comments[25] = "Id Pregunta: 74. AGE A1 2015";


//  Id pregunta: 631 Año de creación de pregunta: 2016
 questions[26]= "27)  Seg&uacute;n la Ley de Protecci&oacute;n de Datos de Car&aacute;cter Personal, no podr&aacute;n realizarse transferencias de datos de car&aacute;cter personal a pa&iacute;ses que no proporcionen un nivel de protecci&oacute;n equiparable al de esta Ley. &iquest;Qui&eacute;n se encarga de evaluar el nivel adecuado de protecci&oacute;n que ofrece el pa&iacute;s de destino de los datos?";
 choices[26]= new Array();
 choices[26][0] = "El Ministerio de Asuntos Exteriores junto con el Ministerio de Justicia.";
 choices[26][1] = "El responsable de la custodia de los datos enviados.";
 choices[26][2] = "La Agencia Europea de Cooperaci&oacute;n.";
 choices[26][3] = "La Agencia de Protecci&oacute;n de Datos.";
 answers[26] = choices[26][3];
 units[26] = "35";
 comments[26] = "Id Pregunta: 631. Junta de Extremadura A1 2015";


//  Id pregunta: 655 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;Cual de las siguientes bases de datos no est&aacute; orientada a grafos?";
 choices[27]= new Array();
 choices[27][0] = "Neo4J ";
 choices[27][1] = "OrientDB ";
 choices[27][2] = "InfoGrid ";
 choices[27][3] = "SimpleDB";
 answers[27] = choices[27][3];
 units[27] = "73";
 comments[27] = "Id Pregunta: 655. ";


//  Id pregunta: 109 Año de creación de pregunta: 2016
 questions[28]= "29)  Big Data:";
 choices[28]= new Array();
 choices[28][0] = "Solo aplica a datos generados m&aacute;quina a m&aacute;quina (M2M)";
 choices[28][1] = "No puede emplearse para tratar datos no estructurados";
 choices[28][2] = "Suele utilizar tecnolog&iacute;as relacionales a la hora de analizar los datos";
 choices[28][3] = "Ninguna de las anteriores";
 answers[28] = choices[28][3];
 units[28] = "73";
 comments[28] = "Id Pregunta: 109. ";


//  Id pregunta: 352 Año de creación de pregunta: 2016
 questions[29]= "30)  La Comisi&oacute;n est&aacute; compuesta por:";
 choices[29]= new Array();
 choices[29][0] = "27 miembros, nacionales de los Estados comunitarios.";
 choices[29][1] = "20 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 choices[29][2] = "25 miembros, nacionales de los Estados comunitarios.";
 choices[29][3] = "d)22 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 answers[29] = choices[29][0];
 units[29] = "5";
 comments[29] = "Id Pregunta: 352. UNION EUROPEA";


//  Id pregunta: 526 Año de creación de pregunta: 2016
 questions[30]= "31)  Las asociaciones y organizaciones representativas de intereses econ&oacute;micos y sociales:";
 choices[30]= new Array();
 choices[30][0] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos en los t&eacute;rminos que reglamentariamente se establezca";
 choices[30][1] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos";
 choices[30][2] = "no ser&aacute;n titulares de intereses leg&iacute;timos colectivos";
 choices[30][3] = "ser&aacute;n titulares de intereses leg&iacute;timos colectivos en los t&eacute;rminos que la Ley reconozca";
 answers[30] = choices[30][3];
 units[30] = "7";
 comments[30] = "Id Pregunta: 526. LEY 39/2015";


//  Id pregunta: 356 Año de creación de pregunta: 2016
 questions[31]= "32)  Se&ntilde;ale la respuesta correcta respecto a las directivas comunitarias:";
 choices[31]= new Array();
 choices[31][0] = "No se aplican directamente en los Estados.";
 choices[31][1] = "No son vinculantes.";
 choices[31][2] = "Habitualmente se dictan sobre materias que son competencias exclusivas de la Uni&oacute;n Europea.";
 choices[31][3] = "Tienen alcance general.";
 answers[31] = choices[31][0];
 units[31] = "5";
 comments[31] = "Id Pregunta: 356. UNION EUROPEA";


//  Id pregunta: 328 Año de creación de pregunta: 2016
 questions[32]= "33)  El principal &oacute;rgano decisorio de la Comunidad Europea es:";
 choices[32]= new Array();
 choices[32][0] = "El Presidente del Consejo Europeo.";
 choices[32][1] = "La Comisi&oacute;n.";
 choices[32][2] = "El Consejo.";
 choices[32][3] = "El Parlamento Europeo.";
 answers[32] = choices[32][2];
 units[32] = "5";
 comments[32] = "Id Pregunta: 328. UNION EUROPEA";


//  Id pregunta: 406 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola garantiza la no discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[33]= new Array();
 choices[33][0] = "Art&iacute;culo 9.1 CE.";
 choices[33][1] = "Art&iacute;culo 53 CE.";
 choices[33][2] = "Art&iacute;culo 14 CE.";
 choices[33][3] = "Art&iacute;culo 16 CE.";
 answers[33] = choices[33][2];
 units[33] = "14";
 comments[33] = "Id Pregunta: 406. POLITICAS DE IGUALDAD";


//  Id pregunta: 319 Año de creación de pregunta: 2016
 questions[34]= "35)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[34]= new Array();
 choices[34][0] = "El Presidente de la Comisi&oacute;n, con la aprobaci&oacute;n de la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[34][1] = "La Comisi&oacute;n por mayor&iacute;a de dos tercios de sus miembros puede exigir la dimisi&oacute;n de un Comisario.";
 choices[34][2] = "El Presidente, sin necesidad de contar con la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[34][3] = "&Uacute;nicamente el Presidente del Consejo puede exigir la dimisi&oacute;n de un Comisario.";
 answers[34] = choices[34][0];
 units[34] = "5";
 comments[34] = "Id Pregunta: 319. UNION EUROPEA";


//  Id pregunta: 260 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se recoge el principio de unidad jurisdiccional?:";
 choices[35]= new Array();
 choices[35][0] = "117.5";
 choices[35][1] = "117.1";
 choices[35][2] = "116";
 choices[35][3] = "15";
 answers[35] = choices[35][0];
 units[35] = "1";
 comments[35] = "Id Pregunta: 260. CONSTITUCION1978";


//  Id pregunta: 275 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Cu&aacute;l NO es una funci&oacute;n de la oficina de transparencia y acceso a la informaci&oacute;n?";
 choices[36]= new Array();
 choices[36][0] = "Actuar como unidad de informaci&oacute;n del Ministerio de la Presidencia, en los t&eacute;rminos previstos en el art&iacute;culo 21 de la Ley 19/2013, de 9 de diciembre.";
 choices[36][1] = "La atenci&oacute;n a los ciudadanos sobre el modo de acceso a los servicios y procedimientos en materias propias del departamento.";
 choices[36][2] = "Actuar como observatorio de la transparencia, acceso a la informaci&oacute;n y buen Gobierno.";
 choices[36][3] = "La tramitaci&oacute;n de las quejas y sugerencias que pudieran derivarse del funcionamiento de los servicios de competencia del departamento.";
 answers[36] = choices[36][2];
 units[36] = "22";
 comments[36] = "Id Pregunta: 275. LEY DE TRANSPARENCIA";


//  Id pregunta: 147 Año de creación de pregunta: 2016
 questions[37]= "38)  Seg&uacute;n la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas el ejercicio de la potestad reglamentaria corresponde:";
 choices[37]= new Array();
 choices[37][0] = "Al Gobierno de la naci&oacute;n";
 choices[37][1] = "A las Cortes Generales y al Gobierno por delegaci&oacute;n de estas";
 choices[37][2] = "Al Gobierno de la naci&oacute;n y a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas";
 choices[37][3] = "Al Gobierno de la naci&oacute;n, a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas y a los &oacute;rganos de gobierno locales";
 answers[37] = choices[37][3];
 units[37] = "7";
 comments[37] = "Id Pregunta: 147. Ley 39/2015, Art&iacute;culo 128";


//  Id pregunta: 760 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Cu&aacute;l de las siguientes no es una iniciativa propuesta por la Estrategia Europa 2020?";
 choices[38]= new Array();
 choices[38][0] = "Agenda digital para Europa";
 choices[38][1] = "Agenda de nuevas cualificaciones y empleos";
 choices[38][2] = "Juventud en movimiento";
 choices[38][3] = "Agenda Web 2.0";
 answers[38] = choices[38][3];
 units[38] = "19";
 comments[38] = "Id Pregunta: 760. Europa 2020";


//  Id pregunta: 558 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Qu&eacute; es el geo-bloqueo, contra el que pretende ser soluci&oacute;n la estrategia para el Mercado &Uacute;nico Digital en Europa?";
 choices[39]= new Array();
 choices[39][0] = "Es la discriminaci&oacute;n en la b&uacute;squeda de un empleo seg&uacute;n el pa&iacute;s de origen del trabajador";
 choices[39][1] = "Es la imposibilidad de pasar la aduana para paquetes comprados en tiendas online de ciertos pa&iacute;ses";
 choices[39][2] = "Es la pr&aacute;ctica por la cual los vendedores online deniegan a los consumidores el acceso a su p&aacute;gina web en funci&oacute;n de su localizaci&oacute;n o le ofrecen precios distintos";
 choices[39][3] = "Es la pr&aacute;ctica comercial por la que varias tiendas online ofrecen el mismo producto a precios pre-acordados entre ellas, limitando la competencia";
 answers[39] = choices[39][2];
 units[39] = "17";
 comments[39] = "Id Pregunta: 558. Mercado &Uacute;nico Digital";


//  Id pregunta: 15 Año de creación de pregunta: 2016
 questions[40]= "41)  Si una aplicaci&oacute;n web desplegada en una JVM utiliza un servlet para generar p&aacute;ginas web de forma din&aacute;mica, dicho servlet no implementa la interfaz SingleThreadModel, y en un momento determinado se encuentra recibiendo m&uacute;ltiples peticiones de clientes de forma concurrente, &iquest;cu&aacute;ntos objetos de dicha clase estar&aacute;n cargados en la memoria de la JVM?";
 choices[40]= new Array();
 choices[40][0] = "0";
 choices[40][1] = "1";
 choices[40][2] = "Tantos como peticiones concurrentes tenga.";
 choices[40][3] = "Tantos como le permita la memoria de la JVM.";
 answers[40] = choices[40][1];
 units[40] = "64";
 comments[40] = "Id Pregunta: 15. AGE A1 2015";


//  Id pregunta: 567 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Qu&eacute; limites marca el &quot;pacto fiscal europeo&quot; de 2012 para sus Estados Miembros?";
 choices[41]= new Array();
 choices[41][0] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 40% del PIB";
 choices[41][1] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 choices[41][2] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 50% del PIB";
 choices[41][3] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 answers[41] = choices[41][3];
 units[41] = "12";
 comments[41] = "Id Pregunta: 567. Modelo econ&oacute;mico";


//  Id pregunta: 116 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Cu&aacute;l de las siguientes es una pol&iacute;tica pasiva de empleo?";
 choices[42]= new Array();
 choices[42][0] = "La organizaci&oacute;n de cursos de formaci&oacute;n gratuitos para desempleados";
 choices[42][1] = "La intermediaci&oacute;n en el mercado laboral, es decir, recoger las ofertas de trabajo y cruzarlas con las demandas.";
 choices[42][2] = "Adecuar los planes de estudio a la realidad laboral";
 choices[42][3] = "El pago de subsidios a parados";
 answers[42] = choices[42][3];
 units[42] = "15";
 comments[42] = "Id Pregunta: 116. ";


//  Id pregunta: 561 Año de creación de pregunta: 2016
 questions[43]= "44)  Uno de los objetivos de la Agenda Digital para Espa&ntilde;a es desarrollar la econom&iacute;a digital, &iquest;qu&eacute; actuaciones se deben desarrollar para lograr esto?";
 choices[43]= new Array();
 choices[43][0] = "Impulsar la producci&oacute;n y distribuci&oacute;n a trav&eacute;s de Internet de contenidos digitales";
 choices[43][1] = "Favorecer la internacionalizaci&oacute;n de las empresas tecnol&oacute;gicas";
 choices[43][2] = "Incentivar el uso transformador de las TIC en nuestras empresas";
 choices[43][3] = "Todos los anteriores";
 answers[43] = choices[43][3];
 units[43] = "19";
 comments[43] = "Id Pregunta: 561. Agenda Digital";


//  Id pregunta: 163 Año de creación de pregunta: 2016
 questions[44]= "45)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, constituye una infracci&oacute;n grave:";
 choices[44]= new Array();
 choices[44][0] = "No conservaci&oacute;n reiterada o sistem&aacute;tica de los datos a los que se refiere el art&iacute;culo 3";
 choices[44][1] = "No conservaci&oacute;n en ning&uacute;n momento de los datos a los que se refiere el art&iacute;culo 3.";
 choices[44][2] = "El incumplimiento de la llevanza del libro-registro";
 choices[44][3] = "La conservaci&oacute;n de los datos por un per&iacute;odo superior al establecido en el art&iacute;culo 5.";
 answers[44] = choices[44][0];
 units[44] = "19";
 comments[44] = "Id Pregunta: 163. B y C: son &quot;Muy grave&quot;; D: para que fuera verdadera deber&iacute;a ser &quot;inferior&quot;";


//  Id pregunta: 76 Año de creación de pregunta: 2016
 questions[45]= "46)  El proceso de auditor&iacute;a de sistemas de informaci&oacute;n se considera como un proceso:";
 choices[45]= new Array();
 choices[45][0] = "Estrat&eacute;gico";
 choices[45][1] = "Operativo";
 choices[45][2] = "T&aacute;ctico";
 choices[45][3] = "Tecnol&oacute;gico";
 answers[45] = choices[45][0];
 units[45] = "36";
 comments[45] = "Id Pregunta: 76. AGE A1 2015";


//  Id pregunta: 849 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Cu&aacute;l de los siguientes es un sistema de firma para la actuaci&oacute;n administrativa automatizada?";
 choices[46]= new Array();
 choices[46][0] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico reconocido o cualificado que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[46][1] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico avanzado o reconocido que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[46][2] = "C&oacute;digo seguro de verificaci&oacute;n vinculado a la Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de Derecho P&uacute;blico, en los t&eacute;rminos y condiciones establecidos, permiti&eacute;ndose en todo caso la comprobaci&oacute;n de la integridad del documento mediante el acceso al portal correspondiente.";
 choices[46][3] = "Firma electr&oacute;nica del titular del &oacute;rgano o empleado p&uacute;blico.";
 answers[46] = choices[46][0];
 units[46] = "4, 7, 8, 9";
 comments[46] = "Id Pregunta: 849. Ley 40/2015";


//  Id pregunta: 517 Año de creación de pregunta: 2016
 questions[47]= "48)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[47]= new Array();
 choices[47][0] = "quedar&aacute;n sujetas a lo dispuesto en todas las normas de esta Ley";
 choices[47][1] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[47][2] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo cuando ejerzan potestades administrativas";
 choices[47][3] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley";
 answers[47] = choices[47][1];
 units[47] = "7";
 comments[47] = "Id Pregunta: 517. LEY 39/2015";


//  Id pregunta: 632 Año de creación de pregunta: 2016
 questions[48]= "49)  Seg&uacute;n el Reglamento de Medidas de Seguridad de Ficheros Automatizados con Datos de Car&aacute;cter Personal, los ficheros que contengan datos de ideolog&iacute;a, religi&oacute;n, creencias, origen racial, salud o vida sexual, &iquest;qu&eacute; medidas de seguridad deber&aacute;n adoptar?";
 choices[48]= new Array();
 choices[48][0] = "De nivel b&aacute;sico y nivel medio.";
 choices[48][1] = "De nivel alto.";
 choices[48][2] = "De nivel medio y nivel alto.";
 choices[48][3] = "De nivel b&aacute;sico, nivel medio y nivel alto.";
 answers[48] = choices[48][3];
 units[48] = "35";
 comments[48] = "Id Pregunta: 632. Junta de Extremadura A1 2015";


//  Id pregunta: 228 Año de creación de pregunta: 2016
 questions[49]= "50)  Indique la respuesta falsa. Seg&uacute;n el Art&iacute;culo 147 de la Constituci&oacute;n espa&ntilde;ola, los Estatutos de Autonom&iacute;a deber&aacute;n contener:";
 choices[49]= new Array();
 choices[49][0] = "La denominaci&oacute;n de la Comunidad que mejor corresponda a su identidad hist&oacute;rica.";
 choices[49][1] = "La delimitaci&oacute;n de su territorio.";
 choices[49][2] = "Las competencias asumidas y aqu&eacute;llas del Estado sobre las que la Comunidad Aut&oacute;noma se reserva el derecho de opci&oacute;n.";
 choices[49][3] = "La denominaci&oacute;n, organizaci&oacute;n y sede de las instituciones aut&oacute;nomas propias.";
 answers[49] = choices[49][2];
 units[49] = "1";
 comments[49] = "Id Pregunta: 228. CONSTITUCION1978";


//  Id pregunta: 167 Año de creación de pregunta: 2016
 questions[50]= "51)  Una de las preocupaciones de la Agenda Digital Europea es la &ldquo;exclusi&oacute;n digital&rdquo;. Para combatirla, se incluyen medidas como...";
 choices[50]= new Array();
 choices[50][0] = "incrementar la eficiencia energ&eacute;tica y reducir la energ&iacute;a que se usa en los hogares";
 choices[50][1] = "incrementar el ratio de participaci&oacute;n de personas con discapacidad en actividades p&uacute;blicas, sociales y econ&oacute;micas a trav&eacute;s de proyectos de inclusi&oacute;n.";
 choices[50][2] = "implementar un sistema de firma electr&oacute;nica seguro que funcione en cualquiera de los Estados Miembros";
 choices[50][3] = "apoyar las pol&iacute;ticas del sector audiovisual en pos de las personas con discapacidad";
 answers[50] = choices[50][1];
 units[50] = "19";
 comments[50] = "Id Pregunta: 167. https://ec.europa.eu/digital-single-market/en/digital-inclusion-better-eu-society";


//  Id pregunta: 38 Año de creación de pregunta: 2016
 questions[51]= "52)  LAMP es el acr&oacute;nimo usado para describir un sistema de infraestructura de internet aplicable a la pila:";
 choices[51]= new Array();
 choices[51][0] = "Linux, Ant, MySQL/MariaDB y PJava";
 choices[51][1] = "Linux, Apache, Microsoft SQLServer y Perl, PHP, o Python";
 choices[51][2] = "Linux, Ant, MongoDB y Perl, PHP, o Python";
 choices[51][3] = "Linux, Apache, MySQL/MariaDB y Perl, PHP, o Python";
 answers[51] = choices[51][3];
 units[51] = "62";
 comments[51] = "Id Pregunta: 38. AGE A1 2015";


//  Id pregunta: 746 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes NO es uno de los principios de la Ley de Garant&iacute;a de la Unidad de Mercado?";
 choices[52]= new Array();
 choices[52][0] = "No discriminaci&oacute;n";
 choices[52][1] = "Cooperaci&oacute;n";
 choices[52][2] = "Colaboraci&oacute;n";
 choices[52][3] = "Todos los anteriores son principios de la Ley de Garant&iacute;a de la Unidad de Mercado";
 answers[52] = choices[52][2];
 units[52] = "18, 20";
 comments[52] = "Id Pregunta: 746. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 475 Año de creación de pregunta: 2016
 questions[53]= "54)  Seg&uacute;n el art&iacute;culo de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , el r&eacute;gimen econ&oacute;mico y financiero del sector p&uacute;blico estatal se regula en:";
 choices[53]= new Array();
 choices[53][0] = "Ley 50/1997, del Gobierno.";
 choices[53][1] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[53][2] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General del Estado.";
 choices[53][3] = "La Ley General de la Hacienda P&uacute;blica.";
 answers[53] = choices[53][1];
 units[53] = "10";
 comments[53] = "Id Pregunta: 475. PRESUPUESTOS GENERALES";


//  Id pregunta: 439 Año de creación de pregunta: 2016
 questions[54]= "55)  Sobre el Sistema de Interconexi&oacute;n de Registros (SIR):";
 choices[54]= new Array();
 choices[54][0] = "Es la infraestructura b&aacute;sica que permite el intercambio de asientos electr&oacute;nicos de registro entre los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[54][1] = "Permite eliminar el tr&aacute;nsito de papel entre administraciones, aumentando la eficiencia y eliminando los costes de manipulaci&oacute;n y remisi&oacute;n del papel, gracias a la generaci&oacute;n de copias aut&eacute;nticas electr&oacute;nicas de la documentaci&oacute;n presentada en los asientos de registro.";
 choices[54][2] = "No es necesario que la aplicaci&oacute;n de registro est&eacute; certificada con la norma SICRES 3.0.";
 choices[54][3] = "La integraci&oacute;n en SIR se realiza mediante aplicaciones de registro comunes como GEISER y ORVE o bien, siempre que se justifique, mediante aplicaciones previamente certificadas por la Comisi&oacute;n de Estrategia TIC.";
 answers[54] = choices[54][1];
 units[54] = "43";
 comments[54] = "Id Pregunta: 439. SERVICIOS COMUNES";


//  Id pregunta: 380 Año de creación de pregunta: 2016
 questions[55]= "56)  La acreditaci&oacute;n de las situaciones de violencia de g&eacute;nero ejercida sobre las trabajadoras, seg&uacute;n indica la Ley Org&aacute;nica 1/2004 de Medidas de Protecci&oacute;n Integral contra la violencia de g&eacute;nero, se produce mediante:";
 choices[55]= new Array();
 choices[55][0] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima.";
 choices[55][1] = "La correspondiente denuncia presentada en Comisar&iacute;a o Juzgado.";
 choices[55][2] = "La orden de alejamiento a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal que indique la existencia de indicios de violencia de g&eacute;nero.";
 choices[55][3] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal en el que se indique la existencia de indicios de violencia de g&eacute;nero, hasta que se dicte la orden de protecci&oacute;n.";
 answers[55] = choices[55][3];
 units[55] = "14";
 comments[55] = "Id Pregunta: 380. POLITICAS DE IGUALDAD";


//  Id pregunta: 607 Año de creación de pregunta: 2016
 questions[56]= "57)  En ITIL v3, entre los procesos de la &ldquo;Fase del Ciclo de Vida: Dise&ntilde;o del Servicio&rdquo;, est&aacute;n:";
 choices[56]= new Array();
 choices[56][0] = "Gesti&oacute;n del Cat&aacute;logo de Servicios y Gesti&oacute;n de la Cartera de Servicios.";
 choices[56][1] = "Gesti&oacute;n de la Cartera de Servicio y Gesti&oacute;n de la Seguridad de la Informaci&oacute;n.";
 choices[56][2] = "Gesti&oacute;n de la Disponibilidad y Gesti&oacute;n de la Capacidad.";
 choices[56][3] = "Gesti&oacute;n de Suministradores y Gesti&oacute;n de Eventos.";
 answers[56] = choices[56][2];
 units[56] = "101";
 comments[56] = "Id Pregunta: 607. Junta de Extremadura A1 2015";


//  Id pregunta: 670 Año de creación de pregunta: 2016
 questions[57]= "58)  La Ley 39/2015 introduce un cap&iacute;tulo relativo a la tramitaci&oacute;n simplificada del procedimiento administrativo com&uacute;n. Respecto a este tr&aacute;mite se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[57]= new Array();
 choices[57][0] = "Se podr&aacute; acordar la tramitaci&oacute;n simplificada por falta de complejidad del procedimiento y por razones de inter&eacute;s p&uacute;blico.";
 choices[57][1] = "Los interesados podr&aacute;n, en cualquier caso, solicitar la tramitaci&oacute;n simplificada del procedimiento.";
 choices[57][2] = "En general, los procedimientos administrativos tramitados de manera simplificada deber&aacute;n ser resueltos en treinta d&iacute;as.";
 choices[57][3] = "Constar&aacute;n &uacute;nicamente de los siguientes tr&aacute;mites: inicio, subsanaci&oacute;n (en su caso), alegaciones y tr&aacute;mite de audiencia.";
 answers[57] = choices[57][3];
 units[57] = "7";
 comments[57] = "Id Pregunta: 670. Cap&iacute;tulo VI, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 68 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Cu&aacute;l de las siguientes opciones se refiere al conjunto de metodolog&iacute;as, procesos, arquitecturas y tecnolog&iacute;as que permiten reunir, depurar y transformar datos de los sistemas transaccionales e informaci&oacute;n desestructurada en informaci&oacute;n estructurada, para su explotaci&oacute;n directa o para su an&aacute;lisis y conversi&oacute;n en conocimiento, dando as&iacute; soporte a la toma de decisiones sobre el negocio?";
 choices[58]= new Array();
 choices[58][0] = "Data Mining (miner&iacute;a de datos)";
 choices[58][1] = "Business Intelligence (inteligencia de negocio)";
 choices[58][2] = "Data Warehouse (almac&eacute;n de datos)";
 choices[58][3] = "An&aacute;lisis OLTP (procesamiento en l&iacute;nea transaccional)";
 answers[58] = choices[58][1];
 units[58] = "72";
 comments[58] = "Id Pregunta: 68. AGE A1 2015";


//  Id pregunta: 831 Año de creación de pregunta: 2016
 questions[59]= "60)  Si el recusado niega la causa de recusaci&oacute;n, el superior resolver&aacute; en el plazo de ...";
 choices[59]= new Array();
 choices[59][0] = "Un d&iacute;a";
 choices[59][1] = "Dos d&iacute;as";
 choices[59][2] = "Tres d&iacute;as";
 choices[59][3] = "Cuatro d&iacute;as";
 answers[59] = choices[59][3];
 units[59] = "4, 7, 8, 9";
 comments[59] = "Id Pregunta: 831. Ley 40/2015";


//  Id pregunta: 629 Año de creación de pregunta: 2016
 questions[60]= "61)  Seg&uacute;n el Real Decreto 3/2010 sobre el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; organismo es el encargado de actuar ante cualquier agresi&oacute;n recibida en los sistemas de informaci&oacute;n de las Administraciones P&uacute;blicas?";
 choices[60]= new Array();
 choices[60][0] = "El CCN-CERT (Centro Criptol&oacute;gico Nacional&ndash;Computer Emergency Reaction Team).";
 choices[60][1] = "El GDT (Grupo de Delitos Telem&aacute;ticos).";
 choices[60][2] = "La BIT (Brigada de Investigaci&oacute;n Tecnol&oacute;gica).";
 choices[60][3] = "El CCN-STIC (Centro Criptol&oacute;gico Nacional-Seguridad de las Tecnolog&iacute;as de Informaci&oacute;n y Comunicaciones).";
 answers[60] = choices[60][0];
 units[60] = "46";
 comments[60] = "Id Pregunta: 629. Junta de Extremadura A1 2015";


//  Id pregunta: 412 Año de creación de pregunta: 2016
 questions[61]= "62)  &Aacute;mbito de aplicaci&oacute;n de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombre:";
 choices[61]= new Array();
 choices[61][0] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Europeo.";
 choices[61][1] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Espa&ntilde;ol.";
 choices[61][2] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Internacional.";
 choices[61][3] = "Ninguna de ellas se ajusta al &aacute;mbito de aplicaci&oacute;n.";
 answers[61] = choices[61][1];
 units[61] = "14";
 comments[61] = "Id Pregunta: 412. POLITICAS DE IGUALDAD";


//  Id pregunta: 160 Año de creación de pregunta: 2016
 questions[62]= "63)  El mercado &uacute;nico digital se basa en tres pilares. Se&ntilde;ale cu&aacute;l NO es uno de los tres pilares.";
 choices[62]= new Array();
 choices[62][0] = "Mejorar el acceso de consumidores y empresas a los bienes y servicios digitales en toda Europa.";
 choices[62][1] = "Promover la actualizaci&oacute;n de las normas de accesibilidad hacia WCAG 3.0 por una sociedad m&aacute;s incluyente.";
 choices[62][2] = "Creaci&oacute;n de las condiciones adecuadas y la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan florecer";
 choices[62][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[62] = choices[62][1];
 units[62] = "19";
 comments[62] = "Id Pregunta: 160. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Mayo/Noticia-2015-05-07-estrategia-mercado-unico-digital-europeo.html#.WCjr0mrhDIU";


//  Id pregunta: 404 Año de creación de pregunta: 2016
 questions[63]= "64)  La igualdad como principio fundamental en la UE, entra en vigor con:";
 choices[63]= new Array();
 choices[63][0] = "El Tratado de Roma, 1957.";
 choices[63][1] = "El Acta &Uacute;nica Europea.";
 choices[63][2] = "El Tratado de &Aacute;msterdam, 1997.";
 choices[63][3] = "Ninguna es correcta.";
 answers[63] = choices[63][2];
 units[63] = "14";
 comments[63] = "Id Pregunta: 404. POLITICAS DE IGUALDAD";


//  Id pregunta: 27 Año de creación de pregunta: 2016
 questions[64]= "65)  La Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, NO estableci&oacute; como derecho de los ciudadanos, el derecho:";
 choices[64]= new Array();
 choices[64][0] = "A la igualdad en el acceso electr&oacute;nico a los servicios de las Administraciones P&uacute;blicas.";
 choices[64][1] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que tengan la condici&oacute;n de interesado.";
 choices[64][2] = "A la calidad de los servicios p&uacute;blicos prestados por medios electr&oacute;nicos.";
 choices[64][3] = "A la preferencia en la tramitaci&oacute;n de los procedimientos presentados electr&oacute;nicamente.";
 answers[64] = choices[64][3];
 units[64] = "7";
 comments[64] = "Id Pregunta: 27. AGE A1 2015";


//  Id pregunta: 325 Año de creación de pregunta: 2016
 questions[65]= "66)  Indique el n&uacute;mero m&iacute;nimo de Diputados necesario para constituir un Grupo Pol&iacute;tico en el Parlamento Europeo:";
 choices[65]= new Array();
 choices[65][0] = "Veinticinco.";
 choices[65][1] = "Veintiuno.";
 choices[65][2] = "Dieciocho.";
 choices[65][3] = "Diecinueve.";
 answers[65] = choices[65][0];
 units[65] = "5";
 comments[65] = "Id Pregunta: 325. UNION EUROPEA";


//  Id pregunta: 276 Año de creación de pregunta: 2016
 questions[66]= "67)  Se&ntilde;ale la respuesta falsa";
 choices[66]= new Array();
 choices[66][0] = "El Portal de la Transparencia del Gobierno de Espa&ntilde;a es una subsede de la sede electr&oacute;nica central del Ministerio de la Presidencia.";
 choices[66][1] = "La titularidad de esta subsede corresponde a la Oficina de la Transparencia y Acceso a la Informaci&oacute;n (OTAI), dependiente de la Oficina para la Ejecuci&oacute;n de la Reforma de la Administraci&oacute;n P&uacute;blica (OPERA).";
 choices[66][2] = "La gesti&oacute;n de la plataforma tecnol&oacute;gica es competencia de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones (DTIC), en virtud del Acuerdo de Colaboraci&oacute;n firmado por el Ministerio de la Presidencia y el Ministerio de Hacienda y Administraciones P&uacute;blicas, para el desarrollo del Portal de la Transparencia.";
 choices[66][3] = "La DTIC ser&aacute; responsable de la integridad y disponibilidad de la informaci&oacute;n, que se provea al Portal de la Transparencia a trav&eacute;s de enlaces o v&iacute;nculos a otras p&aacute;ginas o sedes electr&oacute;nicas cuya responsabilidad corresponda a distinto &oacute;rgano o Administraci&oacute;n P&uacute;blica.";
 answers[66] = choices[66][3];
 units[66] = "22";
 comments[66] = "Id Pregunta: 276. LEY DE TRANSPARENCIA";


//  Id pregunta: 421 Año de creación de pregunta: 2016
 questions[67]= "68)  Las empresas deber&aacute;n promover condiciones de trabajo, arbitrar procedimientos espec&iacute;ficos y dar cauces a las denuncias o reclamaciones, para evitar:";
 choices[67]= new Array();
 choices[67][0] = "El acoso sexual.";
 choices[67][1] = "El acoso por raz&oacute;n del sexo.";
 choices[67][2] = "Ambas son correctas.";
 choices[67][3] = "A y B son incorrectas.";
 answers[67] = choices[67][2];
 units[67] = "14";
 comments[67] = "Id Pregunta: 421. POLITICAS DE IGUALDAD";


//  Id pregunta: 111 Año de creación de pregunta: 2016
 questions[68]= "69)  En t&eacute;rminos del mercado laboral, &iquest;Qu&eacute; es la Tasa de Actividad?";
 choices[68]= new Array();
 choices[68][0] = "Ratio entre el total de activos y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[68][1] = "Ratio entre el total de ocupados y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[68][2] = "Ratio entre el total de activos y la poblaci&oacute;n total";
 choices[68][3] = "Ratio entre el total de ocupados y el total de activos";
 answers[68] = choices[68][0];
 units[68] = "15";
 comments[68] = "Id Pregunta: 111. ";


//  Id pregunta: 682 Año de creación de pregunta: 2016
 questions[69]= "70)  Seg&uacute;n el Real Decreto Ley 5/2013, de 15 de marzo, de medidas para favorecer la continuidad de la vida laboral de los trabajadores de mayor edad y promover el envejecimiento activo:";
 choices[69]= new Array();
 choices[69][0] = "La cuant&iacute;a de la pensi&oacute;n de jubilaci&oacute;n compatible con el trabajo ser&aacute; equivalente al 50 por 100 del importe resultante en el reconocimiento inicial, una vez aplicado, si procede, el l&iacute;mite m&aacute;ximo de pensi&oacute;n p&uacute;blica, o del que se est&eacute; percibiendo, en el momento de inicio de la compatibilidad con el trabajo, excluido, en todo caso, el complemento por m&iacute;nimos, cualquiera que sea la jornada laboral o la actividad que realice el pensionista.";
 choices[69][1] = "El trabajo compatible debe realizarse a tiempo parcial.";
 choices[69][2] = "Finalizada la relaci&oacute;n laboral por cuenta ajena o producido el cese en la actividad por cuenta propia, se restablecer&aacute; el percibo &iacute;ntegro de la pensi&oacute;n de jubilaci&oacute;n transcurridos 12 meses de la finalizaci&oacute;n de la relaci&oacute;n laboral.";
 choices[69][3] = "El acceso a la pensi&oacute;n podr&aacute; tener lugar hasta 5 a&ntilde;os antes de la edad que en cada caso resulte de aplicaci&oacute;n.";
 answers[69] = choices[69][0];
 units[69] = "14";
 comments[69] = "Id Pregunta: 682. Pensiones";


//  Id pregunta: 765 Año de creación de pregunta: 2016
 questions[70]= "71)  La presente Ley se aplica al sector p&uacute;blico que comprende (se&ntilde;ala la incorrecta):";
 choices[70]= new Array();
 choices[70][0] = "la Administraci&oacute;n General del Estado";
 choices[70][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[70][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[70][3] = "el sector p&uacute;blico y privado institucional";
 answers[70] = choices[70][3];
 units[70] = "4, 7, 8, 9";
 comments[70] = "Id Pregunta: 765. Ley 40/2015";


//  Id pregunta: 733 Año de creación de pregunta: 2016
 questions[71]= "72)  Cu&aacute;l de las siguientes reglas se corresponde a las reglas de la metodolog&iacute;a Kanban:";
 choices[71]= new Array();
 choices[71][0] = "Visualizar el trabajo o el flujo de trabajo. ";
 choices[71][1] = "Determinar el l&iacute;mite de trabajo en curso (Work in progress)";
 choices[71][2] = "Medir el tiempo en completar una tarea (Lead time)";
 choices[71][3] = "Todas las anteriores son reglas correspondientes a la metodolog&iacute;a Kanban.";
 answers[71] = choices[71][3];
 units[71] = "34, 84";
 comments[71] = "Id Pregunta: 733. Metodologias &aacute;giles";


//  Id pregunta: 691 Año de creación de pregunta: 2016
 questions[72]= "73)  El Reglamento (UE) 910/2014 deroga la Directiva 1999/93/CE con efectos a partir de:";
 choices[72]= new Array();
 choices[72][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[72][1] = "1 de enero de 2015";
 choices[72][2] = "1 de enero de 2016";
 choices[72][3] = "1 de julio de 2016";
 answers[72] = choices[72][3];
 units[72] = "77";
 comments[72] = "Id Pregunta: 691. Art&iacute;culo 50 del Reglamento 910/2014";


//  Id pregunta: 323 Año de creación de pregunta: 2016
 questions[73]= "74)  Los Jueces y Abogados Generales del Tribunal de Justicia de la Uni&oacute;n Europea son nombrados para un per&iacute;odo de:";
 choices[73]= new Array();
 choices[73][0] = "Tres a&ntilde;os.";
 choices[73][1] = "Cuatro a&ntilde;os.";
 choices[73][2] = "Cinco a&ntilde;os.";
 choices[73][3] = "Seis a&ntilde;os.";
 answers[73] = choices[73][3];
 units[73] = "5";
 comments[73] = "Id Pregunta: 323. UNION EUROPEA";


//  Id pregunta: 806 Año de creación de pregunta: 2016
 questions[74]= "75)  Los nombramientos de los Secretarios generales t&eacute;cnicos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades locales, pertenecientes al:";
 choices[74]= new Array();
 choices[74][0] = "Subgrupo A1";
 choices[74][1] = "Subgrupo A2";
 choices[74][2] = "Subgrupo B";
 choices[74][3] = "Subgrupo C1";
 answers[74] = choices[74][0];
 units[74] = "4, 7, 8, 9";
 comments[74] = "Id Pregunta: 806. Ley 40/2015";


