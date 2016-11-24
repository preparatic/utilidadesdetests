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

//  Id pregunta: 10325 Año de creación de pregunta: 2016
 questions[0]= "1)  Indique el n&uacute;mero m&iacute;nimo de Diputados necesario para constituir un Grupo Pol&iacute;tico en el Parlamento Europeo:";
 choices[0]= new Array();
 choices[0][0] = "Veinticinco.";
 choices[0][1] = "Veintiuno.";
 choices[0][2] = "Dieciocho.";
 choices[0][3] = "Diecinueve.";
 answers[0] = choices[0][0];
 units[0] = "5";
 comments[0] = "Id Pregunta: 10325. UNION EUROPEA";


//  Id pregunta: 10088 Año de creación de pregunta: 2016
 questions[1]= "2)  Seg&uacute;n la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3, &iquest;qu&eacute; tipo de diagrama tiene como objetivo principal la representaci&oacute;n de los aspectos est&aacute;ticos del sistema utilizando diversos mecanismos de abstracci&oacute;n?";
 choices[1]= new Array();
 choices[1][0] = "Diagrama de clases";
 choices[1][1] = "Diagrama de componentes";
 choices[1][2] = "Diagrama de estructura";
 choices[1][3] = "Diagrama de paquetes";
 answers[1] = choices[1][0];
 units[1] = "91";
 comments[1] = "Id Pregunta: 10088. AGE A1 2015";


//  Id pregunta: 10499 Año de creación de pregunta: 2016
 questions[2]= "3)  A tenor de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la cuant&iacute;a global de los anticipos de caja fija no podr&aacute; superar para cada ministerio y organismo aut&oacute;nomo:";
 choices[2]= new Array();
 choices[2][0] = "El 7% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[2][1] = "El 5% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[2][2] = "El 6% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[2][3] = "El 8% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 answers[2] = choices[2][0];
 units[2] = "10";
 comments[2] = "Id Pregunta: 10499. PRESUPUESTOS GENERALES";


//  Id pregunta: 10164 Año de creación de pregunta: 2016
 questions[3]= "4)  En el contexto del Mercado &Uacute;nico Digital, &iquest;qu&eacute; significa la eliminaci&oacute;n del geobloqueo?";
 choices[3]= new Array();
 choices[3][0] = "Introducir medidas destinadas a mejorar la transparencia en materia de precios y la vigilancia regulatoria del mercado transfronterizo de paqueter&iacute;a";
 choices[3][1] = "Eliminar la denegaci&oacute;n de acceso a sitios internet basados en otro pa&iacute;s de la UE o que se cobren precios distintos en funci&oacute;n de la localizaci&oacute;n de un cliente";
 choices[3][2] = "Promover medidas para permitir a los vendedores de bienes f&iacute;sicos beneficiarse del registro y pago electr&oacute;nicos &uacute;nicos y de la introducci&oacute;n de un umbral com&uacute;n del IVA que ayude a las nuevas empresas innovadoras a trabajar en l&iacute;nea";
 choices[3][3] = "Presentar una iniciativa europea sobre computaci&oacute;n en nube, incluidos los servicios de certificaci&oacute;n de la nube";
 answers[3] = choices[3][1];
 units[3] = "19";
 comments[3] = "Id Pregunta: 10164. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/ A: &quot;mejora de la paqueter&iacute;a transfronteriza&quot;; C: &quot;Reducci&oacute;n de la burocracia relacionada con el IVA&quot;; D: &quot;Construir una econom&iacute;a de los datos&quot;";


//  Id pregunta: 10157 Año de creación de pregunta: 2016
 questions[4]= "5)  Seg&uacute;n la ley 39/2015, los actos administrativos ser&aacute;n objeto de publicaci&oacute;n cuando (se&ntilde;ala la incorrecta):";
 choices[4]= new Array();
 choices[4][0] = "la Administraci&oacute;n estime que la notificaci&oacute;n efectuada a un solo interesado es insuficiente para garantizar la notificaci&oacute;n a todos, no siendo necesaria la notificaci&oacute;n individualizada en este caso";
 choices[4][1] = "se trate de actos integrantes de un procedimiento selectivo o de concurrencia competitiva de cualquier tipo";
 choices[4][2] = "el acto tenga por destinatario a una pluralidad indeterminada de personas";
 choices[4][3] = "as&iacute; lo establezcan las normas reguladoras de cada procedimiento o lo aconsejen razones de inter&eacute;s p&uacute;blico apreciadas por el &oacute;rgano competente";
 answers[4] = choices[4][0];
 units[4] = "7";
 comments[4] = "Id Pregunta: 10157. Ley 39/2015, Art&iacute;culo 45";


//  Id pregunta: 10064 Año de creación de pregunta: 2016
 questions[5]= "6)  De entre los siguientes sistemas operativos para dispositivos m&oacute;viles, indique cu&aacute;l est&aacute; afectado por la vulnerabilidad Stagefright:";
 choices[5]= new Array();
 choices[5][0] = "Windows Phone";
 choices[5][1] = "Blackberry";
 choices[5][2] = "iOS";
 choices[5][3] = "Android";
 answers[5] = choices[5][3];
 units[5] = "59";
 comments[5] = "Id Pregunta: 10064. AGE A1 2015";


//  Id pregunta: 10678 Año de creación de pregunta: 2016
 questions[6]= "7)  De acuerdo a la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia, se define dependencia como:";
 choices[6]= new Array();
 choices[6][0] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[6][1] = "El estado de car&aacute;cter permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[6][2] = "El estado de car&aacute;cter temporal en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[6][3] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad, la discapacidad o la baja laboral, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 answers[6] = choices[6][1];
 units[6] = "14";
 comments[6] = "Id Pregunta: 10678. Dependencia";


//  Id pregunta: 10474 Año de creación de pregunta: 2016
 questions[7]= "8)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los interventores delegados ser&aacute;n designados entre funcionarios de los Cuerpos:";
 choices[7]= new Array();
 choices[7][0] = "Cuerpo Superior de Interventores y Auditores del Estado.";
 choices[7][1] = "Todas las respuestas son correctas.";
 choices[7][2] = "Cuerpo Militar de Intervenci&oacute;n de la Defensa.";
 choices[7][3] = "Cuerpo Superior de Intervenci&oacute;n y Contabilidad de Administraci&oacute;n de la Seguridad Social.";
 answers[7] = choices[7][1];
 units[7] = "10";
 comments[7] = "Id Pregunta: 10474. PRESUPUESTOS GENERALES";


//  Id pregunta: 10512 Año de creación de pregunta: 2016
 questions[8]= "9)  Podr&aacute;n establecerse especialidades del procedimiento referidas a los &oacute;rganos competentes, plazos propios del concreto procedimiento por raz&oacute;n de la materia, formas de iniciaci&oacute;n y terminaci&oacute;n, publicaci&oacute;n e informes a recabar:";
 choices[8]= new Array();
 choices[8][0] = "solo mediante ley";
 choices[8][1] = "reglamentariamente";
 choices[8][2] = "mediante ley o reglamentariamente";
 choices[8][3] = "ninguna es correcta";
 answers[8] = choices[8][1];
 units[8] = "7";
 comments[8] = "Id Pregunta: 10512. LEY 39/2015";


//  Id pregunta: 10244 Año de creación de pregunta: 2016
 questions[9]= "10)  La Constituci&oacute;n Espa&ntilde;ola, en el art&iacute;culo 9 del T&iacute;tulo Preliminar, garantiza el principio de:";
 choices[9]= new Array();
 choices[9][0] = "Retroactividad de las disposiciones sancionadoras no favorables de derechos individuales.";
 choices[9][1] = "Publicidad de las normas.";
 choices[9][2] = "Defensa jur&iacute;dica ante los tribunales.";
 choices[9][3] = "Coordinaci&oacute;n normativa.";
 answers[9] = choices[9][2];
 units[9] = "1";
 comments[9] = "Id Pregunta: 10244. CONSTITUCION1978";


//  Id pregunta: 10524 Año de creación de pregunta: 2016
 questions[10]= "11)  Las asociaciones y organizaciones representativas de intereses econ&oacute;micos y sociales:";
 choices[10]= new Array();
 choices[10][0] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos en los t&eacute;rminos que reglamentariamente se establezca";
 choices[10][1] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos";
 choices[10][2] = "no ser&aacute;n titulares de intereses leg&iacute;timos colectivos";
 choices[10][3] = "ser&aacute;n titulares de intereses leg&iacute;timos colectivos en los t&eacute;rminos que la Ley reconozca";
 answers[10] = choices[10][3];
 units[10] = "7";
 comments[10] = "Id Pregunta: 10524. LEY 39/2015";


//  Id pregunta: 10559 Año de creación de pregunta: 2016
 questions[11]= "12)  Uno de los objetivos de la Agenda Digital para Espa&ntilde;a es desarrollar la econom&iacute;a digital, &iquest;qu&eacute; actuaciones se deben desarrollar para lograr esto?";
 choices[11]= new Array();
 choices[11][0] = "Impulsar la producci&oacute;n y distribuci&oacute;n a trav&eacute;s de Internet de contenidos digitales";
 choices[11][1] = "Favorecer la internacionalizaci&oacute;n de las empresas tecnol&oacute;gicas";
 choices[11][2] = "Incentivar el uso transformador de las TIC en nuestras empresas";
 choices[11][3] = "Todos los anteriores";
 answers[11] = choices[11][3];
 units[11] = "19";
 comments[11] = "Id Pregunta: 10559. Agenda Digital";


//  Id pregunta: 10095 Año de creación de pregunta: 2016
 questions[12]= "13)  Bajo el paradigma de la Programaci&oacute;n Orientada a Objetos, indique cu&aacute;l de las siguientes proposiciones es falsa:";
 choices[12]= new Array();
 choices[12][0] = "Los objetos se generan a partir de la instanciaci&oacute;n de una clase.";
 choices[12][1] = "El polimorfismo es la propiedad por la que es posible enviar mensajes sint&aacute;cticamente iguales a objetos de tipos distintos.";
 choices[12][2] = "Una clase abstracta puede ser extendida mediante el mecanismo de herencia.";
 choices[12][3] = "La implementaci&oacute;n de una interfaz no se considera polimorfismo.";
 answers[12] = choices[12][3];
 units[12] = "89";
 comments[12] = "Id Pregunta: 10095. AGE A1 2015";


//  Id pregunta: 10275 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Cu&aacute;l NO es una funci&oacute;n de la oficina de transparencia y acceso a la informaci&oacute;n?";
 choices[13]= new Array();
 choices[13][0] = "Actuar como unidad de informaci&oacute;n del Ministerio de la Presidencia, en los t&eacute;rminos previstos en el art&iacute;culo 21 de la Ley 19/2013, de 9 de diciembre.";
 choices[13][1] = "La atenci&oacute;n a los ciudadanos sobre el modo de acceso a los servicios y procedimientos en materias propias del departamento.";
 choices[13][2] = "Actuar como observatorio de la transparencia, acceso a la informaci&oacute;n y buen Gobierno.";
 choices[13][3] = "La tramitaci&oacute;n de las quejas y sugerencias que pudieran derivarse del funcionamiento de los servicios de competencia del departamento.";
 answers[13] = choices[13][2];
 units[13] = "22";
 comments[13] = "Id Pregunta: 10275. LEY DE TRANSPARENCIA";


//  Id pregunta: 10387 Año de creación de pregunta: 2016
 questions[14]= "15)  El art&iacute;culo 37 de la Ley Org&aacute;nica 3/2007, para la igualdad efectiva de mujeres y hombres, indica que la Corporaci&oacute;n RTVE, en el ejercicio de su funci&oacute;n, perseguir&aacute; en su programaci&oacute;n:";
 choices[14]= new Array();
 choices[14][0] = "Mostrar anuncios para la igualdad de forma habitual.";
 choices[14][1] = "Ofrecer trabajo a mujeres v&iacute;ctimas de violencia de g&eacute;nero.";
 choices[14][2] = "Promover la incorporaci&oacute;n de mujeres a puestos visibles ante las c&aacute;maras.";
 choices[14][3] = "Reflejar adecuadamente la presencia de las mujeres en los diversos &aacute;mbitos de la vida social.";
 answers[14] = choices[14][3];
 units[14] = "14";
 comments[14] = "Id Pregunta: 10387. POLITICAS DE IGUALDAD";


//  Id pregunta: 10052 Año de creación de pregunta: 2016
 questions[15]= "16)  Las normas ISO que cubren los procesos de especificaci&oacute;n de requisitos de calidad del software y evaluaci&oacute;n de la calidad del software corresponden a la serie:";
 choices[15]= new Array();
 choices[15][0] = "ISO/IEC 25000";
 choices[15][1] = "ISO/IEC 27000";
 choices[15][2] = "ISO 9000";
 choices[15][3] = "ISO 9001";
 answers[15] = choices[15][0];
 units[15] = "93";
 comments[15] = "Id Pregunta: 10052. AGE A1 2015";


//  Id pregunta: 10544 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Cu&aacute;l es el &oacute;rgano superior de gobernanza TIC en la Administraci&oacute;n General del Estado?";
 choices[16]= new Array();
 choices[16][0] = "El Comit&eacute; de Direcci&oacute;n TIC";
 choices[16][1] = "El Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[16][2] = "La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[16][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[16] = choices[16][3];
 units[16] = "26";
 comments[16] = "Id Pregunta: 10544. Gobernanza TIC";


//  Id pregunta: 10109 Año de creación de pregunta: 2016
 questions[17]= "18)  Big Data:";
 choices[17]= new Array();
 choices[17][0] = "Solo aplica a datos generados m&aacute;quina a m&aacute;quina (M2M)";
 choices[17][1] = "No puede emplearse para tratar datos no estructurados";
 choices[17][2] = "Suele utilizar tecnolog&iacute;as relacionales a la hora de analizar los datos";
 choices[17][3] = "Ninguna de las anteriores";
 answers[17] = choices[17][3];
 units[17] = "73";
 comments[17] = "Id Pregunta: 10109. ";


//  Id pregunta: 10198 Año de creación de pregunta: 2016
 questions[18]= "19)  La Constituci&oacute;n Espa&ntilde;ola de 1978, estructura las Cortes Generales en:";
 choices[18]= new Array();
 choices[18][0] = "Dos c&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[18][1] = "Consejo de Ministros y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[18][2] = "Gobierno de la Naci&oacute;n y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[18][3] = "Dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Baja) y Senado (C&aacute;mara Alta).";
 answers[18] = choices[18][3];
 units[18] = "1";
 comments[18] = "Id Pregunta: 10198. CONSTITUCION1978";


//  Id pregunta: 10004 Año de creación de pregunta: 2016
 questions[19]= "20)  Un wireframe es:";
 choices[19]= new Array();
 choices[19][0] = "Un marco de referencia para el dise&ntilde;o y despliegue de redes WiFi.";
 choices[19][1] = "Un marco de referencia para el dise&ntilde;o y despliegue de redes WiMAX.";
 choices[19][2] = "Un modelo que permite evaluar el impacto de las nuevas tecnolog&iacute;as en la mejora de la calidad de vida durante la puesta en marcha de una ciudad inteligente (smart city).";
 choices[19][3] = "Una interfaz visual que representa la estructura visual de un sitio web y la relaci&oacute;n entre sus p&aacute;ginas.";
 answers[19] = choices[19][3];
 units[19] = "62";
 comments[19] = "Id Pregunta: 10004. AGE A1 2015";


//  Id pregunta: 10570 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;Cu&aacute;l de los siguientes datos es err&oacute;neo en 2016?";
 choices[20]= new Array();
 choices[20][0] = "El PIB se encuentra cerca de un bill&oacute;n";
 choices[20][1] = "La Deuda P&uacute;blica est&aacute; alrededor del 100% del PIB";
 choices[20][2] = "El D&eacute;ficit P&uacute;blico est&aacute; en torno al 2% del PIB";
 choices[20][3] = "La tasa de desempleo ronda el 20%";
 answers[20] = choices[20][2];
 units[20] = "12";
 comments[20] = "Id Pregunta: 10570. Modelo econ&oacute;mico";


//  Id pregunta: 10011 Año de creación de pregunta: 2016
 questions[21]= "22)  Nada m&aacute;s arrancar el servidor de aplicaciones, usted intenta acceder a su aplicaci&oacute;n y se produce un error de memoria. En ese momento, sospecha que el error se produce porque est&aacute; utilizando unas librer&iacute;as de terceros de gran tama&ntilde;o. &iquest;Qu&eacute; tipo de error deber&iacute;a estar d&aacute;ndose para corroborar su hip&oacute;tesis?";
 choices[21]= new Array();
 choices[21][0] = "java.lang.OutOfMemoryError: Java heap space";
 choices[21][1] = "java.lang.OutOfMemoryError: PermGen space";
 choices[21][2] = "java.lang.OutOfMemoryError: Requested array size exceeds VM limit";
 choices[21][3] = "java.lang.OutOfMemoryError: request &lt;size&gt; bytes for &lt;reason&gt;. Out of swap space";
 answers[21] = choices[21][1];
 units[21] = "64";
 comments[21] = "Id Pregunta: 10011. AGE A1 2015";


//  Id pregunta: 10364 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;En qu&eacute; fecha entr&oacute; en vigor el Tratado de Amsterdam?:";
 choices[22]= new Array();
 choices[22][0] = "El 1 de junio de 1999.";
 choices[22][1] = "El 1 de mayo de 1999.";
 choices[22][2] = "El 1 de abril de 1999.";
 choices[22][3] = "El 1 de marzo de 1999.";
 answers[22] = choices[22][1];
 units[22] = "5";
 comments[22] = "Id Pregunta: 10364. UNION EUROPEA";


//  Id pregunta: 10352 Año de creación de pregunta: 2016
 questions[23]= "24)  La Comisi&oacute;n est&aacute; compuesta por:";
 choices[23]= new Array();
 choices[23][0] = "27 miembros, nacionales de los Estados comunitarios.";
 choices[23][1] = "20 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 choices[23][2] = "25 miembros, nacionales de los Estados comunitarios.";
 choices[23][3] = "d)22 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 answers[23] = choices[23][0];
 units[23] = "5";
 comments[23] = "Id Pregunta: 10352. UNION EUROPEA";


//  Id pregunta: 10145 Año de creación de pregunta: 2016
 questions[24]= "25)  Puede interponerse un recurso extraordinario de revisi&oacute;n:";
 choices[24]= new Array();
 choices[24][0] = "Ante actos firmes en la v&iacute;a administrativa cuando al dictarlos se hubiera incurrido en error de hecho, que resulte de los propios documentos incorporados al expediente";
 choices[24][1] = "Ante actos firmes en la v&iacute;a administrativa cuando en la resoluci&oacute;n hayan influido esencialmente documentos o testimonios declarados falsos por sentencia judicial firme, anterior o posterior a aquella resoluci&oacute;n";
 choices[24][2] = "Ante actos firmes en la v&iacute;a administrativa cuando la resoluci&oacute;n se hubiese dictado como consecuencia de prevaricaci&oacute;n, cohecho, violencia, maquinaci&oacute;n fraudulenta u otra conducta punible y se haya declarado as&iacute; en virtud de sentencia judicial firme";
 choices[24][3] = "Todas las anteriores son ciertas";
 answers[24] = choices[24][3];
 units[24] = "8";
 comments[24] = "Id Pregunta: 10145. Ley 39/2015, Art&iacute;culo 125";


//  Id pregunta: 10329 Año de creación de pregunta: 2016
 questions[25]= "26)  Si el Consejo en alg&uacute;n acuerdo necesita de mayor&iacute;a cualificada se produce:";
 choices[25]= new Array();
 choices[25][0] = "Acuerdos cualificados.";
 choices[25][1] = "Acuerdos ponderados.";
 choices[25][2] = "Valoraci&oacute;n de los votos.";
 choices[25][3] = "Ponderaci&oacute;n de los votos.";
 answers[25] = choices[25][3];
 units[25] = "5";
 comments[25] = "Id Pregunta: 10329. UNION EUROPEA";


//  Id pregunta: 10476 Año de creación de pregunta: 2016
 questions[26]= "27)  Conforme a la Ley General Presupuestaria, la aprobaci&oacute;n de las normas reguladoras de los anticipos de caja fija mediante las que se indiquen los gastos que pueden ser satisfechos por dicho sistema y los cr&eacute;ditos compete:";
 choices[26]= new Array();
 choices[26][0] = "Al Gobierno.";
 choices[26][1] = "Al Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[26][2] = "A los Ministros y Presidentes o Directores de los Organismos aut&oacute;nomos en relaci&oacute;n con sus respectivos &aacute;mbitos.";
 choices[26][3] = "A los Ministros en relaci&oacute;n con sus respectivos Departamentos, incluyendo los Organismos aut&oacute;nomos que tengan adscritos.";
 answers[26] = choices[26][2];
 units[26] = "10";
 comments[26] = "Id Pregunta: 10476. PRESUPUESTOS GENERALES";


//  Id pregunta: 10410 Año de creación de pregunta: 2016
 questions[27]= "28)  La Administraci&oacute;n General del Estado, utilizar&aacute; entre otros instrumentos b&aacute;sicos para la consecuci&oacute;n del principio de igualdad:";
 choices[27]= new Array();
 choices[27][0] = "Un plan estrat&eacute;gico de igualdad de oportunidades.";
 choices[27][1] = "Un objetivo espec&iacute;fico de igualdad.";
 choices[27][2] = "Un programa de igualdad.";
 choices[27][3] = "Un estatuto de igualdad.";
 answers[27] = choices[27][0];
 units[27] = "14";
 comments[27] = "Id Pregunta: 10410. POLITICAS DE IGUALDAD";


//  Id pregunta: 10437 Año de creación de pregunta: 2016
 questions[28]= "29)  Los Portales de EE.LL. y CC.AA. ofrecen una herramienta de gesti&oacute;n de identidades de los empleados p&uacute;blicos de las entidades locales o auton&oacute;micas. Se&ntilde;ale la respuesta incorrecta.";
 choices[28]= new Array();
 choices[28][0] = "Los empleados p&uacute;blicos de las EE.LL. o CC.AA. tienen que solicitar el alta en alguna unidad local o auton&oacute;mica.";
 choices[28][1] = "Proporcionan tambi&eacute;n informaci&oacute;n del cargo y rol asociados.";
 choices[28][2] = "Cualquier organismo p&uacute;blico puede solicitar la inclusi&oacute;n en la plataforma de nuevas aplicaciones dirigidas a las EE.LL. o CC.AA.: &eacute;stas podr&aacute;n acceder desde un punto centralizado al nuevo servicio.";
 choices[28][3] = "Los portales est&aacute;n integrados y sincronizados con el Directorio Com&uacute;n de Unidades Org&aacute;nicas y Oficinas &#8208; DIR3, permitiendo que la gesti&oacute;n de usuarios y roles no se vea afectada por cambios en el directorio.";
 answers[28] = choices[28][0];
 units[28] = "43";
 comments[28] = "Id Pregunta: 10437. SERVICIOS COMUNES";


//  Id pregunta: 10094 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es propia de Apache Hadoop?";
 choices[29]= new Array();
 choices[29][0] = "Es un framework de software libre.";
 choices[29][1] = "Es una base de datos NoSQL.";
 choices[29][2] = "Est&aacute; basado en MapReduce.";
 choices[29][3] = "Puede emplearse en sistemas de datos masivos (Big Data).";
 answers[29] = choices[29][1];
 units[29] = "73";
 comments[29] = "Id Pregunta: 10094. AGE A1 2015";


//  Id pregunta: 10659 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;De qu&eacute; modelo de programaci&oacute;n es una implementaci&oacute;n Hadoop?";
 choices[30]= new Array();
 choices[30][0] = "Orientaci&oacute;n a objetos";
 choices[30][1] = "MapReduce";
 choices[30][2] = "Pipeline filtering";
 choices[30][3] = "Programaci&oacute;n funcional";
 answers[30] = choices[30][1];
 units[30] = "73";
 comments[30] = "Id Pregunta: 10659. ";


//  Id pregunta: 10395 Año de creación de pregunta: 2016
 questions[31]= "32)  Una persona que en atenci&oacute;n a su sexo es tratada de manera menos favorable que otra en situaci&oacute;n comparable, est&aacute; sufriendo:";
 choices[31]= new Array();
 choices[31][0] = "Discriminaci&oacute;n indirecta.";
 choices[31][1] = "Discriminaci&oacute;n directa.";
 choices[31][2] = "Discriminaci&oacute;n por maternidad.";
 choices[31][3] = "Discriminaci&oacute;n abusiva.";
 answers[31] = choices[31][1];
 units[31] = "14";
 comments[31] = "Id Pregunta: 10395. POLITICAS DE IGUALDAD";


//  Id pregunta: 10179 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Qu&eacute; tipo de ley aprueba los estatutos de autonom&iacute;a?";
 choices[32]= new Array();
 choices[32][0] = "Una ley orginaria.";
 choices[32][1] = "Una ley org&aacute;nica.";
 choices[32][2] = "Una ley de bases.";
 choices[32][3] = "Una ley de transferencia.";
 answers[32] = choices[32][1];
 units[32] = "1";
 comments[32] = "Id Pregunta: 10179. CONSTITUCION1978";


//  Id pregunta: 10312 Año de creación de pregunta: 2016
 questions[33]= "34)  Los acuerdos de la Comisi&oacute;n Europea se adoptan:";
 choices[33]= new Array();
 choices[33][0] = "Por unanimidad.";
 choices[33][1] = "Por mayor&iacute;a cualificada.";
 choices[33][2] = "Por mayor&iacute;a de las dos terceras partes de sus miembros.";
 choices[33][3] = "Por mayor&iacute;a del n&uacute;mero de miembros.";
 answers[33] = choices[33][3];
 units[33] = "5";
 comments[33] = "Id Pregunta: 10312. UNION EUROPEA";


//  Id pregunta: 10674 Año de creación de pregunta: 2016
 questions[34]= "35)  En referencia a la implantaci&oacute;n de la interoperabilidad de la receta electr&oacute;nica:";
 choices[34]= new Array();
 choices[34][0] = "Permite los ciudadanos retiren sus medicamentos en las farmacias de fuera de la Comunidad Aut&oacute;noma en la que hayan sido recetados.";
 choices[34][1] = "Favorece la seguridad del paciente, al incorporar sistemas online de ayuda a la prescripci&oacute;n, que ayudan a la detecci&oacute;n de interaciones medicamentosas o duplicidades terap&eacute;uticas.";
 choices[34][2] = "Facilita al m&eacute;dico el seguimiento de la adherencia al tratamiento por parte del paciente.";
 choices[34][3] = "Todas las anteriores son correctas.";
 answers[34] = choices[34][3];
 units[34] = "47";
 comments[34] = "Id Pregunta: 10674. Receta electr&oacute;nica";


//  Id pregunta: 10296 Año de creación de pregunta: 2016
 questions[35]= "36)  Indique a qui&eacute;n corresponde la funci&oacute;n de adoptar las iniciativas de la programaci&oacute;n anual y plurianual de la Uni&oacute;n Europea con el fin de alcanzar acuerdos interinstitucionales:";
 choices[35]= new Array();
 choices[35][0] = "Al Consejo Europeo.";
 choices[35][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[35][2] = "A la Comisi&oacute;n Europea.";
 choices[35][3] = "Al Parlamento Europeo.";
 answers[35] = choices[35][2];
 units[35] = "5";
 comments[35] = "Id Pregunta: 10296. UNION EUROPEA";


//  Id pregunta: 10250 Año de creación de pregunta: 2016
 questions[36]= "37)  La Constituci&oacute;n Espa&ntilde;ola propugna como valores superiores de su ordenamiento jur&iacute;dico:";
 choices[36]= new Array();
 choices[36][0] = "La Libertad, la Democracia, la Igualdad y la Justicia.";
 choices[36][1] = "La Libertad, la Justicia, la Seguridad y promover el bien de cuantos la integran.";
 choices[36][2] = "La Soberan&iacute;a, el Sufragio Universal, la Unidad de la Naci&oacute;n espa&ntilde;ola y el derecho a la autonom&iacute;a de las nacionalidades y regiones que la integran.";
 choices[36][3] = "La Justicia, el Pluralismo Pol&iacute;tico, la Igualdad, y la Libertad.";
 answers[36] = choices[36][2];
 units[36] = "1";
 comments[36] = "Id Pregunta: 10250. CONSTITUCION1978";


//  Id pregunta: 10149 Año de creación de pregunta: 2016
 questions[37]= "38)  Seg&uacute;n establece la Ley 39/2015, las Administraciones P&uacute;blicas har&aacute;n p&uacute;blico un Plan Normativo que:";
 choices[37]= new Array();
 choices[37][0] = "Contendr&aacute; las iniciativas legales y reglamentarias que hayan sido aprobadas en el a&ntilde;o en curso y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[37][1] = "Contendr&aacute; exclusivamente las iniciativas legales que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[37][2] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[37][3] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Bolet&iacute;n Oficial de la Administraci&oacute;n P&uacute;blica correspondiente";
 answers[37] = choices[37][2];
 units[37] = "7";
 comments[37] = "Id Pregunta: 10149. Ley 39/2015, Art&iacute;culo 132";


//  Id pregunta: 10371 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;En qu&eacute; a&ntilde;o se adhiri&oacute; Espa&ntilde;a a la Comunidad Europea?:";
 choices[38]= new Array();
 choices[38][0] = "En 1988.";
 choices[38][1] = "En 1981.";
 choices[38][2] = "En 1982.";
 choices[38][3] = "En 1986.";
 answers[38] = choices[38][3];
 units[38] = "5";
 comments[38] = "Id Pregunta: 10371. UNION EUROPEA";


//  Id pregunta: 10263 Año de creación de pregunta: 2016
 questions[39]= "40)  Los Vocales integrantes del &oacute;rgano de gobierno del Poder Judicial:";
 choices[39]= new Array();
 choices[39][0] = "Ser&aacute;n nombrados por el Presidente del Tribunal Supremo y del Consejo del Poder Judicial, por un periodo de cinco a&ntilde;os.";
 choices[39][1] = "Ser&aacute;n nombrados por el Congreso de los Diputados y por el Senado por un periodo de cinco a&ntilde;os.";
 choices[39][2] = "Ser&aacute;n nombrados por el Rey por un periodo de cinco a&ntilde;os.";
 choices[39][3] = "er&aacute;n nombrados por el Rey por un periodo de tres a&ntilde;os.";
 answers[39] = choices[39][1];
 units[39] = "1";
 comments[39] = "Id Pregunta: 10263. CONSTITUCION1978";


//  Id pregunta: 10038 Año de creación de pregunta: 2016
 questions[40]= "41)  LAMP es el acr&oacute;nimo usado para describir un sistema de infraestructura de internet aplicable a la pila:";
 choices[40]= new Array();
 choices[40][0] = "Linux, Ant, MySQL/MariaDB y PJava";
 choices[40][1] = "Linux, Apache, Microsoft SQLServer y Perl, PHP, o Python";
 choices[40][2] = "Linux, Ant, MongoDB y Perl, PHP, o Python";
 choices[40][3] = "Linux, Apache, MySQL/MariaDB y Perl, PHP, o Python";
 answers[40] = choices[40][3];
 units[40] = "62";
 comments[40] = "Id Pregunta: 10038. AGE A1 2015";


//  Id pregunta: 10261 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Qui&eacute;n representa al Consejo General del Poder Judicial?";
 choices[41]= new Array();
 choices[41][0] = "La Comisi&oacute;n Permanente.";
 choices[41][1] = "El Presidente.";
 choices[41][2] = "El Pleno.";
 choices[41][3] = "El Vicepresidente.";
 answers[41] = choices[41][3];
 units[41] = "1";
 comments[41] = "Id Pregunta: 10261. CONSTITUCION1978";


//  Id pregunta: 10623 Año de creación de pregunta: 2016
 questions[42]= "43)  En PHP 5.0, &iquest;cu&aacute;l es la regla para formar los nombres de las variables?";
 choices[42]= new Array();
 choices[42][0] = "Una variable debe comenzar con el signo $ seguido del nombre de la variable.";
 choices[42][1] = "Una variable debe comenzar con el signo &amp; seguido del nombre de la variable.";
 choices[42][2] = "Una variable debe comenzar por un car&aacute;cter num&eacute;rico.";
 choices[42][3] = "No hay regla para la formaci&oacute;n de los nombres de las variables.";
 answers[42] = choices[42][0];
 units[42] = "65";
 comments[42] = "Id Pregunta: 10623. Junta de Extremadura A1 2015";


//  Id pregunta: 10068 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes opciones se refiere al conjunto de metodolog&iacute;as, procesos, arquitecturas y tecnolog&iacute;as que permiten reunir, depurar y transformar datos de los sistemas transaccionales e informaci&oacute;n desestructurada en informaci&oacute;n estructurada, para su explotaci&oacute;n directa o para su an&aacute;lisis y conversi&oacute;n en conocimiento, dando as&iacute; soporte a la toma de decisiones sobre el negocio?";
 choices[43]= new Array();
 choices[43][0] = "Data Mining (miner&iacute;a de datos)";
 choices[43][1] = "Business Intelligence (inteligencia de negocio)";
 choices[43][2] = "Data Warehouse (almac&eacute;n de datos)";
 choices[43][3] = "An&aacute;lisis OLTP (procesamiento en l&iacute;nea transaccional)";
 answers[43] = choices[43][1];
 units[43] = "72";
 comments[43] = "Id Pregunta: 10068. AGE A1 2015";


//  Id pregunta: 10234 Año de creación de pregunta: 2016
 questions[44]= "45)  De conformidad con el Art&iacute;culo 97 de la Constituci&oacute;n Espa&ntilde;ola, corresponde dirigir la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado:";
 choices[44]= new Array();
 choices[44][0] = "Al Jefe del Estado, por corresponderle el mando supremo de las Fuerzas Armadas.";
 choices[44][1] = "A las Cortes Generales, como representaci&oacute;n del pueblo espa&ntilde;ol.";
 choices[44][2] = "Al Congreso de los Diputados.";
 choices[44][3] = "Al Gobierno.";
 answers[44] = choices[44][0];
 units[44] = "1";
 comments[44] = "Id Pregunta: 10234. CONSTITUCION1978";


//  Id pregunta: 10390 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre hombres y mujeres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[45]= new Array();
 choices[45][0] = "El Consejo Nacional de la Mujer.";
 choices[45][1] = "El Consejo de la Mujer.";
 choices[45][2] = "El Instituto de la Mujer.";
 choices[45][3] = "El Consejo de Participaci&oacute;n de la Mujer.";
 answers[45] = choices[45][3];
 units[45] = "14";
 comments[45] = "Id Pregunta: 10390. POLITICAS DE IGUALDAD";


//  Id pregunta: 10652 Año de creación de pregunta: 2016
 questions[46]= "47)  Dentro del proceso de MapReduce &iquest;Que es el shuffle?";
 choices[46]= new Array();
 choices[46][0] = "Es un proceso de adaptaci&oacute;n de los datos antes de entrar en la etapa de Map";
 choices[46][1] = "Es un aplicativo dentro del ecosistema Hadoop que sirve para distribuir datos en el HDFS";
 choices[46][2] = "Es el proceso por el que los datos llegan de los mappers a los reducers";
 choices[46][3] = "Es un algoritmo de mineria de datos usado en Big Data";
 answers[46] = choices[46][2];
 units[46] = "73";
 comments[46] = "Id Pregunta: 10652. ";


//  Id pregunta: 10484 Año de creación de pregunta: 2016
 questions[47]= "48)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, dirigir la contabilidad de las entidades que integran el sistema de la Seguridad Social y gestionar la contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una funci&oacute;n de:";
 choices[47]= new Array();
 choices[47][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[47][1] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[47][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[47][3] = "La Intervenci&oacute;n General de la Defensa.";
 answers[47] = choices[47][2];
 units[47] = "10";
 comments[47] = "Id Pregunta: 10484. PRESUPUESTOS GENERALES";


//  Id pregunta: 10131 Año de creación de pregunta: 2016
 questions[48]= "49)  En qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola se incluy&oacute; la reforma conocida como la 'regla de oro presupuestaria' en el a&ntilde;o 2011:";
 choices[48]= new Array();
 choices[48][0] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[48][1] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda privada.";
 choices[48][2] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[48][3] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los gastos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 answers[48] = choices[48][0];
 units[48] = "12";
 comments[48] = "Id Pregunta: 10131. Leyes modelo econ&oacute;mico";


//  Id pregunta: 10547 Año de creación de pregunta: 2016
 questions[49]= "50)  La gobernanza TIC incluye, entre otros, los siguientes aspectos:";
 choices[49]= new Array();
 choices[49][0] = "Integrar la estrategia TIC con la de negocio";
 choices[49][1] = "Adoptar e implantar un marco de control de las TIC";
 choices[49][2] = "Proporcionar las estructuras organizativas encargadas de implantar la estrategia TIC";
 choices[49][3] = "Todas las anteriores";
 answers[49] = choices[49][3];
 units[49] = "26";
 comments[49] = "Id Pregunta: 10547. Gobernanza TIC";


//  Id pregunta: 10538 Año de creación de pregunta: 2016
 questions[50]= "51)  Ser&aacute;/n interoperable/s con los registros electr&oacute;nicos generales y particulares de apoderamientos:";
 choices[50]= new Array();
 choices[50][0] = "los registros mercantiles";
 choices[50][1] = "los registros de la propiedad";
 choices[50][2] = "los protocolos notariales";
 choices[50][3] = "todas son correctas";
 answers[50] = choices[50][3];
 units[50] = "7";
 comments[50] = "Id Pregunta: 10538. LEY 39/2015";


//  Id pregunta: 10057 Año de creación de pregunta: 2016
 questions[51]= "52)  Con respecto a ITIL se&ntilde;ale qu&eacute; afirmaci&oacute;n es cierta:";
 choices[51]= new Array();
 choices[51][0] = "Constituye una metodolog&iacute;a exhaustiva de pasos a seguir en el dise&ntilde;o de servicios TI.";
 choices[51][1] = "Da instrucciones de trabajo concretas, asignado tareas a personas.";
 choices[51][2] = "Los organismos tecnol&oacute;gicamente m&aacute;s punteros de la Administraci&oacute;n General del Estado se encuentran certificados en ITIL.";
 choices[51][3] = "Constituye un conjunto de mejores pr&aacute;cticas para la gesti&oacute;n de servicios TI.";
 answers[51] = choices[51][3];
 units[51] = "101";
 comments[51] = "Id Pregunta: 10057. AGE A1 2015";


//  Id pregunta: 10143 Año de creación de pregunta: 2016
 questions[52]= "53)  Contra la resoluci&oacute;n de un recurso de alzada:";
 choices[52]= new Array();
 choices[52][0] = "No cabe interponer ning&uacute;n tipo de recurso";
 choices[52][1] = "Puede interponerse el recurso de reposici&oacute;n como paso previo a la impugnaci&oacute;n ante el orden jurisdiccional contencioso-administrativo";
 choices[52][2] = "Puede interponerse el recurso extraordinario de revisi&oacute;n, en los casos establecidos en el art&iacute;culo 125.1.";
 choices[52][3] = "Puede interponerse un nuevo recurso de alzada si el acto no fuera expreso";
 answers[52] = choices[52][2];
 units[52] = "8";
 comments[52] = "Id Pregunta: 10143. Ley 39/2015, Art&iacute;culo 122";


//  Id pregunta: 10211 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;A cu&aacute;ntos miembros del Tribunal Constitucional corresponde proponer al Gobierno?";
 choices[53]= new Array();
 choices[53][0] = "Cuatro.";
 choices[53][1] = "Ninguno.";
 choices[53][2] = "Dos.";
 choices[53][3] = "Seis.";
 answers[53] = choices[53][2];
 units[53] = "1";
 comments[53] = "Id Pregunta: 10211. CONSTITUCION1978";


//  Id pregunta: 10297 Año de creación de pregunta: 2016
 questions[54]= "55)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n a la Presidencia del Consejo:";
 choices[54]= new Array();
 choices[54][0] = "Es rotatoria y tiene una duraci&oacute;n de un a&ntilde;o.";
 choices[54][1] = "Es rotatoria y tiene una duraci&oacute;n de seis meses.";
 choices[54][2] = "Se nombra por el Parlamento para un per&iacute;odo de cinco a&ntilde;os.";
 choices[54][3] = "La ostenta el presidente de la Comisi&oacute;n.";
 answers[54] = choices[54][1];
 units[54] = "5";
 comments[54] = "Id Pregunta: 10297. UNION EUROPEA";


//  Id pregunta: 10009 Año de creación de pregunta: 2016
 questions[55]= "56)  Con respecto a los entornos de integraci&oacute;n continua, indique cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[55]= new Array();
 choices[55][0] = "Jenkins no dispone de la funcionalidad de extenderse mediante plugins.";
 choices[55][1] = "SonarQube utiliza herramientas de an&aacute;lisis est&aacute;tico de c&oacute;digo que permiten obtener m&eacute;tricas para mejorar la calidad del c&oacute;digo.";
 choices[55][2] = "El fichero POM empleado en Maven no siempre es un fichero XML.";
 choices[55][3] = "Jenkins es un software de integraci&oacute;n continua bajo licencia Oracle.";
 answers[55] = choices[55][1];
 units[55] = "95";
 comments[55] = "Id Pregunta: 10009. AGE A1 2015";


//  Id pregunta: 10348 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;En qu&eacute; fecha naci&oacute; la Uni&oacute;n Europea?:";
 choices[56]= new Array();
 choices[56][0] = "El 1 de noviembre de 1994.";
 choices[56][1] = "El 1 de noviembre de 1992.";
 choices[56][2] = "El 1 de noviembre de 1995.";
 choices[56][3] = "El 1 de noviembre de 1993.";
 answers[56] = choices[56][3];
 units[56] = "5";
 comments[56] = "Id Pregunta: 10348. UNION EUROPEA";


//  Id pregunta: 10167 Año de creación de pregunta: 2016
 questions[57]= "58)  Una de las preocupaciones de la Agenda Digital Europea es la &ldquo;exclusi&oacute;n digital&rdquo;. Para combatirla, se incluyen medidas como...";
 choices[57]= new Array();
 choices[57][0] = "incrementar la eficiencia energ&eacute;tica y reducir la energ&iacute;a que se usa en los hogares";
 choices[57][1] = "incrementar el ratio de participaci&oacute;n de personas con discapacidad en actividades p&uacute;blicas, sociales y econ&oacute;micas a trav&eacute;s de proyectos de inclusi&oacute;n.";
 choices[57][2] = "implementar un sistema de firma electr&oacute;nica seguro que funcione en cualquiera de los Estados Miembros";
 choices[57][3] = "apoyar las pol&iacute;ticas del sector audiovisual en pos de las personas con discapacidad";
 answers[57] = choices[57][1];
 units[57] = "19";
 comments[57] = "Id Pregunta: 10167. https://ec.europa.eu/digital-single-market/en/digital-inclusion-better-eu-society";


//  Id pregunta: 10055 Año de creación de pregunta: 2016
 questions[58]= "59)  WS-Security contiene especificaciones sobre:";
 choices[58]= new Array();
 choices[58][0] = "La publicaci&oacute;n, localizaci&oacute;n y enlazado de los Servicios Web.";
 choices[58][1] = "La forma de conseguir integridad y seguridad en los mensajes SOAP.";
 choices[58][2] = "Las pol&iacute;ticas en materia de seguridad aplicables a un sistema de informaci&oacute;n.";
 choices[58][3] = "El env&iacute;o de datagramas sin establecimiento previo de una conexi&oacute;n.";
 answers[58] = choices[58][1];
 units[58] = "119";
 comments[58] = "Id Pregunta: 10055. AGE A1 2015";


//  Id pregunta: 10399 Año de creación de pregunta: 2016
 questions[59]= "60)  Las medidas espec&iacute;ficas que adoptar&aacute;n los Poderes P&uacute;blicos a favor de las mujeres para corregir situaciones patentes de desigualdad de hecho con respecto a los hombres, se denominan:";
 choices[59]= new Array();
 choices[59][0] = "Acciones de discriminaci&oacute;n.";
 choices[59][1] = "Acciones positivas.";
 choices[59][2] = "Acciones negativas.";
 choices[59][3] = "Acciones neutras.";
 answers[59] = choices[59][1];
 units[59] = "14";
 comments[59] = "Id Pregunta: 10399. POLITICAS DE IGUALDAD";


//  Id pregunta: 10679 Año de creación de pregunta: 2016
 questions[60]= "61)  De acuerdo a la Ley 27/2011, de 1 de agosto, sobre actualizaci&oacute;n, adecuaci&oacute;n y modernizaci&oacute;n del sistema de Seguridad Social, la edad exigida de jubilaci&oacute;n:";
 choices[60]= new Array();
 choices[60][0] = "A partir del a&ntilde;o 2020, ser&aacute; de 67 a&ntilde;os para quellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un perido cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[60][1] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para quellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un perido cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[60][2] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para todas las personas con independencia del periodo cotizado.";
 choices[60][3] = "Aumenta progresivamente desde los 65 a los 67 a&ntilde;os desde el a&ntilde;o 2013 al 2027, si bien se mantiene en los 65 a&ntilde;os para personas con un periodo cotizado igual o mayor a 35 a&ntilde;os.";
 answers[60] = choices[60][1];
 units[60] = "14";
 comments[60] = "Id Pregunta: 10679. Pensiones";


//  Id pregunta: 10347 Año de creación de pregunta: 2016
 questions[61]= "62)  La Comisi&oacute;n Europea est&aacute; integrada por:";
 choices[61]= new Array();
 choices[61][0] = "18 miembros.";
 choices[61][1] = "Ninguna es correcta.";
 choices[61][2] = "22 miembros.";
 choices[61][3] = "21 miembros.";
 answers[61] = choices[61][1];
 units[61] = "5";
 comments[61] = "Id Pregunta: 10347. UNION EUROPEA";


//  Id pregunta: 10299 Año de creación de pregunta: 2016
 questions[62]= "63)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[62]= new Array();
 choices[62][0] = "Quince miembros.";
 choices[62][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[62][2] = "Los miembros que determine el Consejo.";
 choices[62][3] = "Un Presidente y quince miembros.";
 answers[62] = choices[62][1];
 units[62] = "5";
 comments[62] = "Id Pregunta: 10299. UNION EUROPEA";


//  Id pregunta: 10076 Año de creación de pregunta: 2016
 questions[63]= "64)  El proceso de auditor&iacute;a de sistemas de informaci&oacute;n se considera como un proceso:";
 choices[63]= new Array();
 choices[63][0] = "Estrat&eacute;gico";
 choices[63][1] = "Operativo";
 choices[63][2] = "T&aacute;ctico";
 choices[63][3] = "Tecnol&oacute;gico";
 answers[63] = choices[63][0];
 units[63] = "36";
 comments[63] = "Id Pregunta: 10076. AGE A1 2015";


//  Id pregunta: 10071 Año de creación de pregunta: 2016
 questions[64]= "65)  Seg&uacute;n el Modelo de Referencia Workflow definido por WfMC, &iquest;cu&aacute;l de las siguientes funciones corresponde al Servicio de Representaci&oacute;n del Workflow?";
 choices[64]= new Array();
 choices[64][0] = "Interpretar la descripci&oacute;n de procesos y controlar las diferentes instancias de los procesos, secuenciar las actividades, adicionar elementos a la lista de trabajo de los usuarios, e invocar las aplicaciones necesarias.";
 choices[64][1] = "Especificar el formato de intercambio com&uacute;n para soportar la transferencia de definiciones de procesos entre productos diferentes, utilizando un lenguaje de definici&oacute;n de procesos.";
 choices[64][2] = "Definir los mecanismos requeridos por los desarrolladores de productos workflow para implementar la comunicaci&oacute;n de un motor workflow con otros.";
 choices[64][3] = "Monitorizar informaci&oacute;n relevante del workflow, fundamentalmente con fines de auditor&iacute;a y estad&iacute;sticos.";
 answers[64] = choices[64][0];
 units[64] = "86";
 comments[64] = "Id Pregunta: 10071. AGE A1 2015";


//  Id pregunta: 10319 Año de creación de pregunta: 2016
 questions[65]= "66)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[65]= new Array();
 choices[65][0] = "El Presidente de la Comisi&oacute;n, con la aprobaci&oacute;n de la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[65][1] = "La Comisi&oacute;n por mayor&iacute;a de dos tercios de sus miembros puede exigir la dimisi&oacute;n de un Comisario.";
 choices[65][2] = "El Presidente, sin necesidad de contar con la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[65][3] = "&Uacute;nicamente el Presidente del Consejo puede exigir la dimisi&oacute;n de un Comisario.";
 answers[65] = choices[65][0];
 units[65] = "5";
 comments[65] = "Id Pregunta: 10319. UNION EUROPEA";


//  Id pregunta: 10576 Año de creación de pregunta: 2016
 questions[66]= "67)  Se&ntilde;ale, de entre los siguientes, cu&aacute;l es un gestor de base de datos relacional:";
 choices[66]= new Array();
 choices[66][0] = "PostgreSQL";
 choices[66][1] = "Datawarehouse";
 choices[66][2] = "Snowflake";
 choices[66][3] = "CouchDB";
 answers[66] = choices[66][0];
 units[66] = "61";
 comments[66] = "Id Pregunta: 10576. Tema 61. TAI 2016.";


//  Id pregunta: 10236 Año de creación de pregunta: 2016
 questions[67]= "68)  El T&iacute;tulo Preliminar de la Constituci&oacute;n Espa&ntilde;ola de 1978 engloba una serie de preceptos entre los que se encuentra el relativo a:";
 choices[67]= new Array();
 choices[67][0] = "La regulaci&oacute;n sobre la adquisici&oacute;n de la nacionalidad espa&ntilde;ola.";
 choices[67][1] = "La naturaleza, funcionamiento y estructura de los partidos pol&iacute;ticos.";
 choices[67][2] = "La entrada en vigor de la propia Constituci&oacute;n.";
 choices[67][3] = "El reconocimiento de los derechos hist&oacute;ricos de los territorios forales.";
 answers[67] = choices[67][3];
 units[67] = "1";
 comments[67] = "Id Pregunta: 10236. CONSTITUCION1978";


//  Id pregunta: 10162 Año de creación de pregunta: 2016
 questions[68]= "69)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones";
 choices[68]= new Array();
 choices[68][0] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[68][1] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro de las setenta y dos horas contadas a partir de las 8:00 horas del d&iacute;a laborable siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[68][2] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 00:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 choices[68][3] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 24 horas contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 answers[68] = choices[68][0];
 units[68] = "19";
 comments[68] = "Id Pregunta: 10162. La respuesta B es la antigua redacci&oacute;n";


//  Id pregunta: 10558 Año de creación de pregunta: 2016
 questions[69]= "70)  &iquest;Cu&aacute;ndo ha sido aprobada la Agenda Digital para Espa&ntilde;a?";
 choices[69]= new Array();
 choices[69][0] = "En 2015";
 choices[69][1] = "En 2013";
 choices[69][2] = "En 2016";
 choices[69][3] = "En 2007";
 answers[69] = choices[69][1];
 units[69] = "19";
 comments[69] = "Id Pregunta: 10558. Agenda Digital";


//  Id pregunta: 10192 Año de creación de pregunta: 2016
 questions[70]= "71)  Seg&uacute;n la Constituci&oacute;n, las poblaciones de Ceuta y Melilla estar&aacute;n representadas por:";
 choices[70]= new Array();
 choices[70][0] = "Un diputado y un senador, cada una de ellas";
 choices[70][1] = "Dos diputados y un senador, cada una de ellas.";
 choices[70][2] = "Un diputado y dos senadores, cada una de ellas";
 choices[70][3] = "dos diputados y dos senadores, cada una de ellas.";
 answers[70] = choices[70][2];
 units[70] = "1";
 comments[70] = "Id Pregunta: 10192. CONSTITUCION1978";


//  Id pregunta: 10646 Año de creación de pregunta: 2016
 questions[71]= "72)  En Itil v3 se diferencia entre la Gesti&oacute;n de la Cartera de Servicios y la Gesti&oacute;n del Cat&aacute;logo de Servicios ya que:";
 choices[71]= new Array();
 choices[71][0] = "La Cartera de Servicios contiene informaci&oacute;n sobre cada servicio y su estado.";
 choices[71][1] = "La Cartera de Servicios es un subconjunto del Cat&aacute;logo de Servicios.";
 choices[71][2] = "La Cartera de Servicios divide los servicios en componentes y contiene pol&iacute;ticas, directrices y responsabilidades , as&iacute; como precios, acuerdos de nivel de servicio y condiciones de entrega.";
 choices[71][3] = "Todas las respuestas son correctas.";
 answers[71] = choices[71][0];
 units[71] = "101";
 comments[71] = "Id Pregunta: 10646. Junta de Extremadura A1 2015";


//  Id pregunta: 10288 Año de creación de pregunta: 2016
 questions[72]= "73)  Cu&aacute;l no es uno de los pilares que cimientan el Plan de Acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[72]= new Array();
 choices[72][0] = "Configuraci&oacute;n de un marco que habilite la movilidad transfronteriza mediante los servicios p&uacute;blicos digitales;";
 choices[72][1] = "Facilitar la interacci&oacute;n digital con ciudadanos y empresas mediante AA.PP. abiertas y flexibles que impliquen a los actores interesados en el dise&ntilde;o de pol&iacute;ticas y servicios de una forma colaborativa;";
 choices[72][2] = "Sociedad digital integradora, donde los ciudadanos tengan las cualificaciones adecuadas para aprovechar las oportunidades ofrecidas por Internet.";
 choices[72][3] = "Puesta a disposici&oacute;n de habilitadores y facilitadores claves, servicios y activos reutilizables.";
 answers[72] = choices[72][2];
 units[72] = "5";
 comments[72] = "Id Pregunta: 10288. UNION EUROPEA";


//  Id pregunta: 10247 Año de creación de pregunta: 2016
 questions[73]= "74)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la Regencia se ejercer&aacute;:";
 choices[73]= new Array();
 choices[73][0] = "Por mandato constitucional y siempre en nombre del Rey.";
 choices[73][1] = "Por Orden Ministerial.";
 choices[73][2] = "Por mandato constitucional y siempre en nombre del pueblo espa&ntilde;ol.";
 choices[73][3] = "Por mandato de las Cortes Generales y siempre en nombre del pueblo espa&ntilde;ol.";
 answers[73] = choices[73][0];
 units[73] = "1";
 comments[73] = "Id Pregunta: 10247. CONSTITUCION1978";


//  Id pregunta: 10238 Año de creación de pregunta: 2016
 questions[74]= "75)  En caso de dimisi&oacute;n del Presidente del Gobierno:";
 choices[74]= new Array();
 choices[74][0] = "El Gobierno cesa a continuaci&oacute;n.";
 choices[74][1] = "El Rey podr&aacute; proponer, a trav&eacute;s del Presidente del Congreso, un nuevo candidato a la Presidencia del Gobierno.";
 choices[74][2] = "El Pleno del Congreso, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 choices[74][3] = "El Pleno del Congreso y del Senado, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 answers[74] = choices[74][1];
 units[74] = "1";
 comments[74] = "Id Pregunta: 10238. CONSTITUCION1978";


