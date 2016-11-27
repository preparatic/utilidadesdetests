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

//  Id pregunta: 555 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Qui&eacute;nes son los beneficiarios de la estrategia para el Mercado &Uacute;nico Digital en la UE?";
 choices[0]= new Array();
 choices[0][0] = "Consumidores";
 choices[0][1] = "PYMES y Start-ups";
 choices[0][2] = "La Industria";
 choices[0][3] = "Todos los anteriores";
 answers[0] = choices[0][3];
 units[0] = "17";
 comments[0] = "Id Pregunta: 555. Mercado &Uacute;nico Digital";


//  Id pregunta: 541 Año de creación de pregunta: 2016
 questions[1]= "2)  Se&ntilde;ala la correcta:";
 choices[1]= new Array();
 choices[1][0] = "la falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n impedir&aacute; que se tenga por realizado el acto de que se trate";
 choices[1][1] = "el documento electr&oacute;nico que acredite el resultado de la consulta al registro electr&oacute;nico de apoderamientos correspondiente tendr&aacute; la condici&oacute;n de acreditaci&oacute;n a estos efectos";
 choices[1][2] = "los registros electr&oacute;nicos generales y particulares de apoderamientos pertenecientes a todas y cada una de las Administraciones, ser&aacute;n preferiblemente interoperables entre s&iacute;";
 choices[1][3] = "el interesado no podr&aacute; comparecer por s&iacute; mismo en un procedimiento en el que haya designado representante";
 answers[1] = choices[1][1];
 units[1] = "7";
 comments[1] = "Id Pregunta: 541. LEY 39/2015";


//  Id pregunta: 556 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Qu&eacute; es el geo-bloqueo, contra el que pretende ser soluci&oacute;n la estrategia para el Mercado &Uacute;nico Digital en Europa?";
 choices[2]= new Array();
 choices[2][0] = "Es la discriminaci&oacute;n en la b&uacute;squeda de un empleo seg&uacute;n el pa&iacute;s de origen del trabajador";
 choices[2][1] = "Es la imposibilidad de pasar la aduana para paquetes comprados en tiendas online de ciertos pa&iacute;ses";
 choices[2][2] = "Es la pr&aacute;ctica por la cual los vendedores online deniegan a los consumidores el acceso a su p&aacute;gina web en funci&oacute;n de su localizaci&oacute;n o le ofrecen precios distintos";
 choices[2][3] = "Es la pr&aacute;ctica comercial por la que varias tiendas online ofrecen el mismo producto a precios pre-acordados entre ellas, limitando la competencia";
 answers[2] = choices[2][2];
 units[2] = "17";
 comments[2] = "Id Pregunta: 556. Mercado &Uacute;nico Digital";


//  Id pregunta: 720 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;C&uacute;al de las siguientes NO es una metodolog&iacute;a lean?";
 choices[3]= new Array();
 choices[3][0] = "Lean startup";
 choices[3][1] = "Business Model Canvas";
 choices[3][2] = "Dynamic system Development method";
 choices[3][3] = "Lean software development";
 answers[3] = choices[3][2];
 units[3] = "34";
 comments[3] = "Id Pregunta: 720. Metodologias Lean";


//  Id pregunta: 722 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Cu&aacute;l es la principal desventaja de sprints m&aacute;s largos?";
 choices[4]= new Array();
 choices[4][0] = "Permite reaccionar al equipo mejor ante imprevistos";
 choices[4][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[4][2] = "Se reduce el n&uacute;mero de reuniones de sprint";
 choices[4][3] = "Se puede desarrollar algo diferente a lo requerido y obtener el feedback del cliente m&aacute;s tarde.";
 answers[4] = choices[4][3];
 units[4] = "34, 84";
 comments[4] = "Id Pregunta: 722. Metodologias &aacute;giles";


//  Id pregunta: 407 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Qu&eacute; art&iacute;culo de la CE, consagra la obligaci&oacute;n de los poderes p&uacute;blicos para promover las condiciones para la igualdad del individuo:";
 choices[5]= new Array();
 choices[5][0] = "Art&iacute;culo 14 CE.";
 choices[5][1] = "Art&iacute;culo 9.2 CE.";
 choices[5][2] = "Art&iacute;culo 9.1 CE.";
 choices[5][3] = "Art&iacute;culo 13 CE.";
 answers[5] = choices[5][2];
 units[5] = "14";
 comments[5] = "Id Pregunta: 407. POLITICAS DE IGUALDAD";


//  Id pregunta: 518 Año de creación de pregunta: 2016
 questions[6]= "7)  Las Corporaciones de Derecho P&uacute;blico se regir&aacute;n por:";
 choices[6]= new Array();
 choices[6][0] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[6][1] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica";
 choices[6][2] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[6][3] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica";
 answers[6] = choices[6][0];
 units[6] = "7";
 comments[6] = "Id Pregunta: 518. LEY 39/2015";


//  Id pregunta: 230 Año de creación de pregunta: 2016
 questions[7]= "8)  Seg&uacute;n el Art&iacute;culo 22 de la Constituci&oacute;n Espa&ntilde;ola, las asociaciones s&oacute;lo podr&aacute;n ser disueltas o suspendidas en sus actividades:";
 choices[7]= new Array();
 choices[7][0] = "Por Real Decreto.";
 choices[7][1] = "Por Orden del Ministerio del Interior.";
 choices[7][2] = "Por resoluci&oacute;n judicial motivada.";
 choices[7][3] = "Por resoluci&oacute;n del Delegado del Gobierno de la Comunidad Aut&oacute;noma donde tenga establecido su domicilio la asociaci&oacute;n.";
 answers[7] = choices[7][2];
 units[7] = "1";
 comments[7] = "Id Pregunta: 230. CONSTITUCION1978";


//  Id pregunta: 279 Año de creación de pregunta: 2016
 questions[8]= "9)  Se&ntilde;ale la respuesta correcta:";
 choices[8]= new Array();
 choices[8][0] = "Six Pack&quot; se refiere a 6 medidas legislativas adoptadas en el &aacute;mbito de la Uni&oacute;n Europea con la finalidad de reforzar la gobernanza presupuestaria y econ&oacute;mica.";
 choices[8][1] = "El &ldquo;Two-Pack&rdquo; consta de dos reglamentos destinados a aumentar a&uacute;n m&aacute;s la integraci&oacute;n y la convergencia econ&oacute;micas entre los Estados miembros de la zona del euro.";
 choices[8][2] = "Las respuestas A y B son correctas.";
 choices[8][3] = "Las respuestas A y B son falsas.";
 answers[8] = choices[8][2];
 units[8] = "5";
 comments[8] = "Id Pregunta: 279. UNION EUROPEA";


//  Id pregunta: 44 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Cu&aacute;les son las propiedades que debe cumplir una unidad l&oacute;gica de trabajo para ser calificada como transacci&oacute;n?";
 choices[9]= new Array();
 choices[9][0] = "Atomicidad, concurrencia, aislamiento y temporalidad";
 choices[9][1] = "Atomicidad, consistencia, aislamiento y durabilidad";
 choices[9][2] = "Atomicidad, concurrencia, escalabilidad y durabilidad";
 choices[9][3] = "Atomicidad, consistencia, aislamiento y temporalidad";
 answers[9] = choices[9][1];
 units[9] = "60";
 comments[9] = "Id Pregunta: 44. AGE A1 2015";


//  Id pregunta: 66 Año de creación de pregunta: 2016
 questions[10]= "11)  Para los siguientes tipos de copias de seguridad, indique cu&aacute;l de las siguientes secuencias los ordena de mayor a menor tiempo de restauraci&oacute;n:";
 choices[10]= new Array();
 choices[10][0] = "Incremental, diferencial, completa";
 choices[10][1] = "Completa, incremental, diferencial";
 choices[10][2] = "Completa, diferencial, incremental";
 choices[10][3] = "No hay diferencia en el tiempo de restauraci&oacute;n, encontr&aacute;ndose la diferencia en el espacio de almacenamiento consumido.";
 answers[10] = choices[10][0];
 units[10] = "53";
 comments[10] = "Id Pregunta: 66. AGE A1 2015. Pregunta anulada en el examen real. La opci&oacute;n A dec&iacute;a &quot;Diferencial, incremental, completa&quot;, por lo que ninguna respuesta pod&iacute;a considerarse correcta";


//  Id pregunta: 94 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es propia de Apache Hadoop?";
 choices[11]= new Array();
 choices[11][0] = "Es un framework de software libre.";
 choices[11][1] = "Es una base de datos NoSQL.";
 choices[11][2] = "Est&aacute; basado en MapReduce.";
 choices[11][3] = "Puede emplearse en sistemas de datos masivos (Big Data).";
 answers[11] = choices[11][1];
 units[11] = "73";
 comments[11] = "Id Pregunta: 94. AGE A1 2015";


//  Id pregunta: 365 Año de creación de pregunta: 2016
 questions[12]= "13)  Las decisiones de la Comisi&oacute;n se adoptar&aacute;n por:";
 choices[12]= new Array();
 choices[12][0] = "Unanimidad y mayor&iacute;a simple.";
 choices[12][1] = "Unanimidad.";
 choices[12][2] = "Mayor&iacute;a cualificada.";
 choices[12][3] = "Mayor&iacute;a simple.";
 answers[12] = choices[12][3];
 units[12] = "5";
 comments[12] = "Id Pregunta: 365. UNION EUROPEA";


//  Id pregunta: 750 Año de creación de pregunta: 2016
 questions[13]= "14)  Es falso que:";
 choices[13]= new Array();
 choices[13][0] = "Son rasgos del modelo burocr&aacute;tico el pleno sometimiento al ordenamiento jur&iacute;dico y la impersonalidad en las relaciones.";
 choices[13][1] = "La Nueva Gesti&oacute;n P&uacute;blica ha sido el paradigma de reforma administrativa prevaleciente hasta principios de los 90, que tuvo gran influencia en los pa&iacute;ses angloamericanos y n&oacute;rdicos.";
 choices[13][2] = "Es un rasgo de la Nueva Gesti&oacute;n P&uacute;blica la terciarizaci&oacute;n de las actividades auxiliares o de apoyo, que pasan a ser licitadas competitivamente en el mercado.";
 choices[13][3] = "Una de las desventajas del modelo de la gobernanza es las redes pueden obstaculizar los cambios e innovaciones pol&iacute;ticos al dar un peso excesivo a los diversos intereses implicados.";
 answers[13] = choices[13][1];
 units[13] = "18, 20";
 comments[13] = "Id Pregunta: 750. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 596 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Qui&eacute;n supervisa la elaboraci&oacute;n y ejecutaci&oacute;n de los Planes de Acci&oacute;n Sectoriales?";
 choices[14]= new Array();
 choices[14][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[14][1] = "Las CMADs";
 choices[14][2] = "Ambas son correctas.";
 choices[14][3] = "Ninguna es correcta";
 answers[14] = choices[14][2];
 units[14] = "19";
 comments[14] = "Id Pregunta: 596. Estrategia TIC";


//  Id pregunta: 442 Año de creación de pregunta: 2016
 questions[15]= "16)  Sobre la gu&iacute;a de Comunicaci&oacute;n Digital de la AGE, se&ntilde;ale la respuesta falsa:";
 choices[15]= new Array();
 choices[15][0] = "La Gu&iacute;a de Comunicaci&oacute;n Digital para la AGE ofrece un marco de criterios, recomendaciones y buenas pr&aacute;cticas a considerar al crear, generar contenidos o evolucionar sitios web, sedes electr&oacute;nicas o tambi&eacute;n blogs, cuentas o perfiles de redes sociales.";
 choices[15][1] = "Recoge aspectos como la imagen Institucional: uso de los logotipos del Gobierno de Espa&ntilde;a, elementos distintivos de imagen en las redes sociales o la imagen promocional de la administraci&oacute;n electr&oacute;nica.";
 choices[15][2] = "Se divide en tres partes, con fasc&iacute;culos que pueden ser utilizados independientemente seg&uacute;n las necesidades de cada responsable del sitio web.";
 choices[15][3] = "La &laquo;Gu&iacute;a de Comunicaci&oacute;n Digital para la Administraci&oacute;n General del Estado&raquo; que se aprueba mediante la presente Resoluci&oacute;n se aplicar&aacute; al a&ntilde;o siguiente al de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 answers[15] = choices[15][3];
 units[15] = "43";
 comments[15] = "Id Pregunta: 442. SERVICIOS COMUNES";


//  Id pregunta: 104 Año de creación de pregunta: 2016
 questions[16]= "17)  Son bases de datos NoSQL:";
 choices[16]= new Array();
 choices[16][0] = "MongoDB y Maria DB";
 choices[16][1] = "HBase y Dynamo";
 choices[16][2] = "MariaDB, Cassandra y BigTable";
 choices[16][3] = "La A) y la C)";
 answers[16] = choices[16][1];
 units[16] = "73";
 comments[16] = "Id Pregunta: 104. ";


//  Id pregunta: 231 Año de creación de pregunta: 2016
 questions[17]= "18)  La convocatoria a refer&eacute;ndum en los casos previstos en la Constituci&oacute;n corresponde a:";
 choices[17]= new Array();
 choices[17][0] = "El Presidente del Congreso de los Diputados.";
 choices[17][1] = "El Presidente del Gobierno.";
 choices[17][2] = "El Rey.";
 choices[17][3] = "El Consejo de Ministros.";
 answers[17] = choices[17][0];
 units[17] = "1";
 comments[17] = "Id Pregunta: 231. CONSTITUCION1978";


//  Id pregunta: 454 Año de creación de pregunta: 2016
 questions[18]= "19)  El Presupuesto por programas sirve para saber...";
 choices[18]= new Array();
 choices[18][0] = "En qu&eacute; nos gastamos el dinero";
 choices[18][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[18][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[18][3] = "Qui&eacute;n se gasta el dinero";
 answers[18] = choices[18][2];
 units[18] = "10";
 comments[18] = "Id Pregunta: 454. PRESUPUESTOS GENERALES";


//  Id pregunta: 573 Año de creación de pregunta: 2016
 questions[19]= "20)  Si queremos dise&ntilde;ar un enlace de 10 Gbps. &iquest;qu&eacute; medio de transmisi&oacute;n nos permite alcanzar la m&aacute;xima longitud del enlace?";
 choices[19]= new Array();
 choices[19][0] = "Cableado de cobre de categor&iacute;a 7.";
 choices[19][1] = "Fibra &oacute;ptica monomodo tipo OS2.";
 choices[19][2] = "Fibra &oacute;ptica multimodo tipo OM3.";
 choices[19][3] = "Fibra &oacute;ptica multimodo tipo OM4.";
 answers[19] = choices[19][1];
 units[19] = "106";
 comments[19] = "Id Pregunta: 573. Tema 106. TAI 2016.";


//  Id pregunta: 158 Año de creación de pregunta: 2016
 questions[20]= "21)  Seg&uacute;n la ley 39/2015, cuando la notificaci&oacute;n por medios electr&oacute;nicos sea de car&aacute;cter obligatorio, o haya sido expresamente elegida por el interesado:";
 choices[20]= new Array();
 choices[20][0] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[20][1] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[20][2] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[20][3] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 answers[20] = choices[20][1];
 units[20] = "7";
 comments[20] = "Id Pregunta: 158. Ley 39/2015, Art&iacute;culo 43";


//  Id pregunta: 743 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Qu&eacute; dos figuras son novedad de la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n ?";
 choices[21]= new Array();
 choices[21][0] = "Las Sociedades de Responsabilidad Limitada de formaci&oacute;n sucesiva y el Emprendedor de responsabilidad limitada";
 choices[21][1] = "Sociedad Limitada de Formaci&oacute;n Sucesiva y Emprendedor de responsabilidad limitada";
 choices[21][2] = "Sociedad de Responsabilidad Limitada y Emprendedor de responsabilidad Limitada";
 choices[21][3] = "Sociedad de Formaci&oacute;n sucesiva y emprendedor de responsabilidad limitada";
 answers[21] = choices[21][1];
 units[21] = "18, 20";
 comments[21] = "Id Pregunta: 743. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 145 Año de creación de pregunta: 2016
 questions[22]= "23)  Puede interponerse un recurso extraordinario de revisi&oacute;n:";
 choices[22]= new Array();
 choices[22][0] = "Ante actos firmes en la v&iacute;a administrativa cuando al dictarlos se hubiera incurrido en error de hecho, que resulte de los propios documentos incorporados al expediente";
 choices[22][1] = "Ante actos firmes en la v&iacute;a administrativa cuando en la resoluci&oacute;n hayan influido esencialmente documentos o testimonios declarados falsos por sentencia judicial firme, anterior o posterior a aquella resoluci&oacute;n";
 choices[22][2] = "Ante actos firmes en la v&iacute;a administrativa cuando la resoluci&oacute;n se hubiese dictado como consecuencia de prevaricaci&oacute;n, cohecho, violencia, maquinaci&oacute;n fraudulenta u otra conducta punible y se haya declarado as&iacute; en virtud de sentencia judicial firme";
 choices[22][3] = "Todas las anteriores son ciertas";
 answers[22] = choices[22][3];
 units[22] = "8";
 comments[22] = "Id Pregunta: 145. Ley 39/2015, Art&iacute;culo 125";


//  Id pregunta: 412 Año de creación de pregunta: 2016
 questions[23]= "24)  &Aacute;mbito de aplicaci&oacute;n de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombre:";
 choices[23]= new Array();
 choices[23][0] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Europeo.";
 choices[23][1] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Espa&ntilde;ol.";
 choices[23][2] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Internacional.";
 choices[23][3] = "Ninguna de ellas se ajusta al &aacute;mbito de aplicaci&oacute;n.";
 answers[23] = choices[23][1];
 units[23] = "14";
 comments[23] = "Id Pregunta: 412. POLITICAS DE IGUALDAD";


//  Id pregunta: 567 Año de creación de pregunta: 2016
 questions[24]= "25)  El sector que tiene un mayor peso en el PIB espa&ntilde;ol es el:";
 choices[24]= new Array();
 choices[24][0] = "Primario, que incluye la agricultura y la pesca";
 choices[24][1] = "Secundario, compuesto por los sectores industrial, de la energ&iacute;a y de la construcci&oacute;n";
 choices[24][2] = "Minero, junto con las exportaciones de comercio";
 choices[24][3] = "Servicios";
 answers[24] = choices[24][3];
 units[24] = "12";
 comments[24] = "Id Pregunta: 567. Modelo econ&oacute;mico";


//  Id pregunta: 825 Año de creación de pregunta: 2016
 questions[25]= "26)  La actuaci&oacute;n de autoridades y personal al servicio de las Administraciones P&uacute;blicas en los que concurran motivos de abstenci&oacute;n ...";
 choices[25]= new Array();
 choices[25][0] = "No implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido pero dar&aacute; lugar a la responsabilidad que proceda";
 choices[25][1] = "Dar&aacute; lugar a la responsabilidad que proceda pero no implicar&aacute; en ning&uacute;n caso la invalidez de los actos en que hayan intervenido";
 choices[25][2] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido";
 choices[25][3] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido dando lugar a la responsabilidad que proceda";
 answers[25] = choices[25][1];
 units[25] = "4, 7, 8, 9";
 comments[25] = "Id Pregunta: 825. Ley 40/2015";


//  Id pregunta: 426 Año de creación de pregunta: 2016
 questions[26]= "27)  La aprobaci&oacute;n de convocatorias de pruebas selectivas para el acceso al empleo p&uacute;blico deber&aacute; acompa&ntilde;arse de:";
 choices[26]= new Array();
 choices[26][0] = "Un plan de igualdad.";
 choices[26][1] = "Un informe de impacto de g&eacute;nero.";
 choices[26][2] = "Un programa de igualdad.";
 choices[26][3] = "Todas son correctas.";
 answers[26] = choices[26][1];
 units[26] = "14";
 comments[26] = "Id Pregunta: 426. POLITICAS DE IGUALDAD";


//  Id pregunta: 58 Año de creación de pregunta: 2016
 questions[27]= "28)  Se&ntilde;ale cu&aacute;l de los siguientes apartados NO ha sido declarado como servicio compartido en la Administraci&oacute;n General del Estado:";
 choices[27]= new Array();
 choices[27][0] = "Servicio com&uacute;n de gesti&oacute;n econ&oacute;mico-presupuestaria";
 choices[27][1] = "Servicio com&uacute;n de georreferenciaci&oacute;n";
 choices[27][2] = "Servicio de seguridad gestionada";
 choices[27][3] = "Servicio de gesti&oacute;n de notificaciones";
 answers[27] = choices[27][1];
 units[27] = "26";
 comments[27] = "Id Pregunta: 58. AGE A1 2015";


//  Id pregunta: 160 Año de creación de pregunta: 2016
 questions[28]= "29)  El mercado &uacute;nico digital se basa en tres pilares. Se&ntilde;ale cu&aacute;l NO es uno de los tres pilares.";
 choices[28]= new Array();
 choices[28][0] = "Mejorar el acceso de consumidores y empresas a los bienes y servicios digitales en toda Europa.";
 choices[28][1] = "Promover la actualizaci&oacute;n de las normas de accesibilidad hacia WCAG 3.0 por una sociedad m&aacute;s incluyente.";
 choices[28][2] = "Creaci&oacute;n de las condiciones adecuadas y la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan florecer";
 choices[28][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[28] = choices[28][1];
 units[28] = "19";
 comments[28] = "Id Pregunta: 160. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Mayo/Noticia-2015-05-07-estrategia-mercado-unico-digital-europeo.html#.WCjr0mrhDIU";


//  Id pregunta: 448 Año de creación de pregunta: 2016
 questions[29]= "30)  La partida presupuestaria es equivalente a...";
 choices[29]= new Array();
 choices[29][0] = "El sujeto que realiza el gasto";
 choices[29][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[29][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[29][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[29] = choices[29][3];
 units[29] = "10";
 comments[29] = "Id Pregunta: 448. PRESUPUESTOS GENERALES";


//  Id pregunta: 12 Año de creación de pregunta: 2016
 questions[30]= "31)  Indique cu&aacute;l de las siguientes proposiciones es cierta:";
 choices[30]= new Array();
 choices[30][0] = "AngularJS es un framework de JavaScript de c&oacute;digo abierto que sigue el patr&oacute;n de dise&ntilde;o MVC.";
 choices[30][1] = "PrimeFaces y RichFaces son librer&iacute;as que extienden el framework .NET de Microsoft.";
 choices[30][2] = "PrimeFaces es una extensi&oacute;n de AngularJS que permite la integraci&oacute;n de componentes RichFaces.";
 choices[30][3] = "El framework Spring es compatible con el uso delORM Hibernate, pero es incompatible con el uso de Java Server Faces en la capa de presentaci&oacute;n.";
 answers[30] = choices[30][0];
 units[30] = "62";
 comments[30] = "Id Pregunta: 12. AGE A1 2015";


//  Id pregunta: 663 Año de creación de pregunta: 2016
 questions[31]= "32)  Seg&uacute;n la Ley 39/2015, la iniciaci&oacute;n de un procedimiento administrativo puede realizarse:";
 choices[31]= new Array();
 choices[31][0] = "De oficio.";
 choices[31][1] = "A solicitud del interesado.";
 choices[31][2] = "De oficio o a solicitud del interesado.";
 choices[31][3] = "Por la Administraci&oacute;n P&uacute;blica responsable.";
 answers[31] = choices[31][2];
 units[31] = "7";
 comments[31] = "Id Pregunta: 663. Art&iacute;culo 54 de la Ley 39/2015";


//  Id pregunta: 147 Año de creación de pregunta: 2016
 questions[32]= "33)  Seg&uacute;n la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas el ejercicio de la potestad reglamentaria corresponde:";
 choices[32]= new Array();
 choices[32][0] = "Al Gobierno de la naci&oacute;n";
 choices[32][1] = "A las Cortes Generales y al Gobierno por delegaci&oacute;n de estas";
 choices[32][2] = "Al Gobierno de la naci&oacute;n y a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas";
 choices[32][3] = "Al Gobierno de la naci&oacute;n, a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas y a los &oacute;rganos de gobierno locales";
 answers[32] = choices[32][3];
 units[32] = "7";
 comments[32] = "Id Pregunta: 147. Ley 39/2015, Art&iacute;culo 128";


//  Id pregunta: 198 Año de creación de pregunta: 2016
 questions[33]= "34)  La Constituci&oacute;n Espa&ntilde;ola de 1978, estructura las Cortes Generales en:";
 choices[33]= new Array();
 choices[33][0] = "Dos c&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[33][1] = "Consejo de Ministros y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[33][2] = "Gobierno de la Naci&oacute;n y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[33][3] = "Dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Baja) y Senado (C&aacute;mara Alta).";
 answers[33] = choices[33][3];
 units[33] = "1";
 comments[33] = "Id Pregunta: 198. CONSTITUCION1978";


//  Id pregunta: 268 Año de creación de pregunta: 2016
 questions[34]= "35)  Las Disposiciones Adicionales en la Constituci&oacute;n Espa&ntilde;ola son:";
 choices[34]= new Array();
 choices[34][0] = "Cuatro.";
 choices[34][1] = "Una.";
 choices[34][2] = "Cinco.";
 choices[34][3] = "Nueve.";
 answers[34] = choices[34][2];
 units[34] = "1";
 comments[34] = "Id Pregunta: 268. CONSTITUCION1978";


//  Id pregunta: 511 Año de creación de pregunta: 2016
 questions[35]= "36)  Cuando resulte eficaz, proporcionado y necesario para la consecuci&oacute;n de los fines propios del procedimiento, y de manera motivada, podr&aacute;n incluirse tr&aacute;mites adicionales o distintos a los contemplados en esta Ley:";
 choices[35]= new Array();
 choices[35][0] = "solo mediante ley";
 choices[35][1] = "reglamentariamente";
 choices[35][2] = "mediante ley o reglamentariamente";
 choices[35][3] = "ninguna es correcta";
 answers[35] = choices[35][0];
 units[35] = "7";
 comments[35] = "Id Pregunta: 511. LEY 39/2015";


//  Id pregunta: 183 Año de creación de pregunta: 2016
 questions[36]= "37)  Seg&uacute;n el Art&iacute;culo 113 de la Constituci&oacute;n Espa&ntilde;ola, la moci&oacute;n de censura deber&aacute; ser propuesta:";
 choices[36]= new Array();
 choices[36][0] = "al menos por 50 Diputados.";
 choices[36][1] = "al menos por la d&eacute;cima parte de los Diputados.";
 choices[36][2] = "por la Mesa del Congreso de los Diputados.";
 choices[36][3] = "al menos por dos grupos pol&iacute;ticos del Congreso de los Diputados.";
 answers[36] = choices[36][1];
 units[36] = "1";
 comments[36] = "Id Pregunta: 183. CONSTITUCION1978";


//  Id pregunta: 354 Año de creación de pregunta: 2016
 questions[37]= "38)  El Tribunal de Justicia Europeo est&aacute; compuesto por:";
 choices[37]= new Array();
 choices[37][0] = "Veinticinco Jueces y nueve Abogados Generales.";
 choices[37][1] = "Veintisiete Jueces y veintisiete Abogados Generales.";
 choices[37][2] = "Veintisiete Jueces y ocho Abogados Generales.";
 choices[37][3] = "Veinticinco Jueces y siete Abogados Generales.";
 answers[37] = choices[37][2];
 units[37] = "5";
 comments[37] = "Id Pregunta: 354. UNION EUROPEA";


//  Id pregunta: 223 Año de creación de pregunta: 2016
 questions[38]= "39)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, durante el periodo de su mandato los Diputados y Senadores gozar&aacute;n asimismo de inmunidad y s&oacute;lo podr&aacute;n ser detenidos en caso de flagrante delito. No podr&aacute;n ser inculpados ni procesados sin la previa autorizaci&oacute;n:";
 choices[38]= new Array();
 choices[38][0] = "De la C&aacute;mara respectiva.";
 choices[38][1] = "Del Rey.";
 choices[38][2] = "Del Tribunal Constitucional.";
 choices[38][3] = "Del Tribunal Supremo.";
 answers[38] = choices[38][0];
 units[38] = "1";
 comments[38] = "Id Pregunta: 223. CONSTITUCION1978";


//  Id pregunta: 173 Año de creación de pregunta: 2016
 questions[39]= "40)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la cuesti&oacute;n de confianza planteada por el Presidente del Gobierno, se entender&aacute; otorgada cuando vote a su favor la mayor&iacute;a:";
 choices[39]= new Array();
 choices[39][0] = "absoluta de las Cortes Generales.";
 choices[39][1] = "absoluta del Congreso de los Diputados.";
 choices[39][2] = "simple de las Cortes Generales.";
 choices[39][3] = "simple del Congreso de los Diputados.";
 answers[39] = choices[39][3];
 units[39] = "1";
 comments[39] = "Id Pregunta: 173. CONSTITUCION1978";


//  Id pregunta: 737 Año de creación de pregunta: 2016
 questions[40]= "41)  En el Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE, las administraciones p&uacute;blicas y las instituciones p&uacute;blicas de la Uni&oacute;n Europea deben ser abiertas, eficaces e integradoras en el a&ntilde;o:";
 choices[40]= new Array();
 choices[40][0] = "2025";
 choices[40][1] = "2023";
 choices[40][2] = "2030";
 choices[40][3] = "2020";
 answers[40] = choices[40][3];
 units[40] = "28";
 comments[40] = "Id Pregunta: 737. Estrategia TIC";


//  Id pregunta: 803 Año de creación de pregunta: 2016
 questions[41]= "42)  Los Secretarios generales t&eacute;cnicos tienen a todos los efectos la categor&iacute;a de:";
 choices[41]= new Array();
 choices[41][0] = "Director General";
 choices[41][1] = "Secretario general";
 choices[41][2] = "Subdirector general";
 choices[41][3] = "Subsecretario";
 answers[41] = choices[41][0];
 units[41] = "4, 7, 8, 9";
 comments[41] = "Id Pregunta: 803. Ley 40/2015";


//  Id pregunta: 45 Año de creación de pregunta: 2016
 questions[42]= "43)  46. &iquest;Cu&aacute;l de las siguientes NO es una de las APIs incorporadas a HTML5?";
 choices[42]= new Array();
 choices[42][0] = "HTML Drag and Drop, para arrastrar un objeto a otra localizaci&oacute;n.";
 choices[42][1] = "HTML Advanced Search, para parametrizar y modificar el comportamiento de los buscadores.";
 choices[42][2] = "HTML Local Storage, para almacenar datos en el navegador.";
 choices[42][3] = "HTML SSE, para actualizar una p&aacute;gina web autom&aacute;ticamente sin preguntar al servidor.";
 answers[42] = choices[42][1];
 units[42] = "74";
 comments[42] = "Id Pregunta: 45. AGE A1 2015";


//  Id pregunta: 577 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Cu&aacute;ndo fue aprobada la Estrategia TIC?";
 choices[43]= new Array();
 choices[43][0] = "El 2 de Octubre de 2015";
 choices[43][1] = "El 15 de Septiembre de 2015";
 choices[43][2] = "El 1 de Octubre de 2015";
 choices[43][3] = "El 5 de Octubre de 2015";
 answers[43] = choices[43][0];
 units[43] = "19";
 comments[43] = "Id Pregunta: 577. Estrategia TIC";


//  Id pregunta: 248 Año de creación de pregunta: 2016
 questions[44]= "45)  El T&iacute;tulo II de la Constituci&oacute;n finaliza en el Art&iacute;culo:";
 choices[44]= new Array();
 choices[44][0] = "61";
 choices[44][1] = "53";
 choices[44][2] = "65";
 choices[44][3] = "67";
 answers[44] = choices[44][1];
 units[44] = "1";
 comments[44] = "Id Pregunta: 248. CONSTITUCION1978";


//  Id pregunta: 602 Año de creación de pregunta: 2016
 questions[45]= "46)  Como todo criptosistema de clave p&uacute;blica, el protocolo del criptosistema RSA:";
 choices[45]= new Array();
 choices[45][0] = "Tiene dos partes: Cifrado de Mensajes, Descifrado de Mensajes.";
 choices[45][1] = "Se basa en la dificultad que supone resolver el &lt;Problema de la Factorizaci&oacute;n Externa&gt;.";
 choices[45][2] = "Tiene tres partes: Generaci&oacute;n de claves, Cifrado de mensajes, Descifrado de mensajes.";
 choices[45][3] = "Se basa en la dificultad que supone resolver el &lt;Problema de Socrates- Arquimedes&gt;.";
 answers[45] = choices[45][2];
 units[45] = "76";
 comments[45] = "Id Pregunta: 602. Junta de Extremadura A1 2015";


//  Id pregunta: 690 Año de creación de pregunta: 2016
 questions[46]= "47)  El Reglamento (UE) 910/2014 entra en vigor:";
 choices[46]= new Array();
 choices[46][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[46][1] = "A los 20 d&iacute;as de su publicaci&oacute;n en el Diario Oficial de la Uni&oacute;n Europea (DOUE)";
 choices[46][2] = "A partir del 1 de enero de 2015";
 choices[46][3] = "A partir del 1 de julio de 2016";
 answers[46] = choices[46][1];
 units[46] = "77";
 comments[46] = "Id Pregunta: 690. Art&iacute;culo 52 del Reglamento 910/2014";


//  Id pregunta: 229 Año de creación de pregunta: 2016
 questions[47]= "48)  De acuerdo con lo previsto en la Constituci&oacute;n Espa&ntilde;ola, el Gobierno y la administraci&oacute;n aut&oacute;noma de las provincias estar&aacute;n encomendados:";
 choices[47]= new Array();
 choices[47][0] = "A Diputaciones u otras Corporaciones de car&aacute;cter representativo.";
 choices[47][1] = "A los Subdelegados del Gobierno y a los Directores Insulares.";
 choices[47][2] = "A las Diputaciones y a las Mancomunidades de Municipios.";
 choices[47][3] = "A las Diputaciones y a las Comarcas.";
 answers[47] = choices[47][3];
 units[47] = "1";
 comments[47] = "Id Pregunta: 229. CONSTITUCION1978";


//  Id pregunta: 92 Año de creación de pregunta: 2016
 questions[48]= "49)  Seg&uacute;n AENOR, la certificaci&oacute;n es:";
 choices[48]= new Array();
 choices[48][0] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 choices[48][1] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple con los requisitos legales para salir al mercado.";
 choices[48][2] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio es beneficioso para los consumidores.";
 choices[48][3] = "La acci&oacute;n llevada a cabo por una entidad dependiente de la Administraci&oacute;n p&uacute;blica mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 answers[48] = choices[48][0];
 units[48] = "48";
 comments[48] = "Id Pregunta: 92. AGE A1 2015";


//  Id pregunta: 760 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;Cu&aacute;l de los siguientes es uno de los pilares en los que se fundamenta la Estrategia del Mercado &Uacute;nico Digital?";
 choices[49]= new Array();
 choices[49][0] = "Mejorar el acceso de los consumidores y empresas a los bienes y servicios digitales en Europa";
 choices[49][1] = "Aplicar est&aacute;ndares de calidad a los servicios digitales en Europa";
 choices[49][2] = "Apertura al exterior";
 choices[49][3] = "I+D+i como forma de mejorar los servicios digitales de las empresas europeas";
 answers[49] = choices[49][0];
 units[49] = "17";
 comments[49] = "Id Pregunta: 760. Mercado &Uacute;nico Digital";


//  Id pregunta: 449 Año de creación de pregunta: 2016
 questions[50]= "51)  El cr&eacute;dito presupuestario es...";
 choices[50]= new Array();
 choices[50][0] = "El sujeto que realiza el gasto";
 choices[50][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[50][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[50][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[50] = choices[50][2];
 units[50] = "10";
 comments[50] = "Id Pregunta: 449. PRESUPUESTOS GENERALES";


//  Id pregunta: 744 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Cu&aacute;l de los siguientes NO es uno de los principios de la Ley de Garant&iacute;a de la Unidad de Mercado?";
 choices[51]= new Array();
 choices[51][0] = "No discriminaci&oacute;n";
 choices[51][1] = "Cooperaci&oacute;n";
 choices[51][2] = "Colaboraci&oacute;n";
 choices[51][3] = "Todos los anteriores son principios de la Ley de Garant&iacute;a de la Unidad de Mercado";
 answers[51] = choices[51][2];
 units[51] = "18, 20";
 comments[51] = "Id Pregunta: 744. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 811 Año de creación de pregunta: 2016
 questions[52]= "53)  Las Delegaciones del Gobierno tendr&aacute;n su sede en:";
 choices[52]= new Array();
 choices[52][0] = "la localidad elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[52][1] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[52][2] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[52][3] = "la localidad donde elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 answers[52] = choices[52][2];
 units[52] = "4, 7, 8, 9";
 comments[52] = "Id Pregunta: 811. Ley 40/2015";


//  Id pregunta: 630 Año de creación de pregunta: 2016
 questions[53]= "54)  Seg&uacute;n el Reglamento de Medidas de Seguridad de Ficheros Automatizados con Datos de Car&aacute;cter Personal, los ficheros que contengan datos de ideolog&iacute;a, religi&oacute;n, creencias, origen racial, salud o vida sexual, &iquest;qu&eacute; medidas de seguridad deber&aacute;n adoptar?";
 choices[53]= new Array();
 choices[53][0] = "De nivel b&aacute;sico y nivel medio.";
 choices[53][1] = "De nivel alto.";
 choices[53][2] = "De nivel medio y nivel alto.";
 choices[53][3] = "De nivel b&aacute;sico, nivel medio y nivel alto.";
 answers[53] = choices[53][3];
 units[53] = "35";
 comments[53] = "Id Pregunta: 630. Junta de Extremadura A1 2015";


//  Id pregunta: 117 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;Qui&eacute;n integra el Sistema Nacional de Empleo?";
 choices[54]= new Array();
 choices[54][0] = "El Servicio P&uacute;blico de Empleo Estatal y los servicios p&uacute;blicos de empleo de las comunidades aut&oacute;nomas";
 choices[54][1] = "&Uacute;nicamente los servicios p&uacute;blicos de empleo de las comunidades aut&oacute;nomas ";
 choices[54][2] = "&Uacute;nicamente el Servicio P&uacute;blico de Empleo Estatal";
 choices[54][3] = "El Servicio P&uacute;blico de Empleo Estatal m&aacute;s las ETT (Empresas de Trabajo Temporal) que quieran adherirse";
 answers[54] = choices[54][0];
 units[54] = "15";
 comments[54] = "Id Pregunta: 117. ";


//  Id pregunta: 619 Año de creación de pregunta: 2016
 questions[55]= "56)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[55]= new Array();
 choices[55][0] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: la identificaci&oacute;n de clases sem&aacute;nticas, atributos y servicios; identificaci&oacute;n de las relaciones entre clases; el emplazamiento de las clases, atributos y servicios; la especificaci&oacute;n del comportamiento din&aacute;mico mediante paso de mensajes.";
 choices[55][1] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: a&ntilde;adir las clases interfaz, base y utilidad; refinar las clases sem&aacute;nticas.";
 choices[55][2] = "En el An&aacute;lisis Orientado a Objetos, deben llevarse a cabo las siguientes actividades: toma inicial de requisitos; an&aacute;lisis; dise&ntilde;o; implementaci&oacute;n.";
 choices[55][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[55] = choices[55][1];
 units[55] = "89";
 comments[55] = "Id Pregunta: 619. Junta de Extremadura A1 2015";


//  Id pregunta: 116 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Cu&aacute;l de las siguientes es una pol&iacute;tica pasiva de empleo?";
 choices[56]= new Array();
 choices[56][0] = "La organizaci&oacute;n de cursos de formaci&oacute;n gratuitos para desempleados";
 choices[56][1] = "La intermediaci&oacute;n en el mercado laboral, es decir, recoger las ofertas de trabajo y cruzarlas con las demandas.";
 choices[56][2] = "Adecuar los planes de estudio a la realidad laboral";
 choices[56][3] = "El pago de subsidios a parados";
 answers[56] = choices[56][3];
 units[56] = "15";
 comments[56] = "Id Pregunta: 116. ";


//  Id pregunta: 318 Año de creación de pregunta: 2016
 questions[57]= "58)  El personal de la Comisi&oacute;n se organiza en departamentos, conocidos como:";
 choices[57]= new Array();
 choices[57][0] = "Consejos y Servicios.";
 choices[57][1] = "Servicios permanentes y no permanentes.";
 choices[57][2] = "Direcciones Generales.";
 choices[57][3] = "Direcciones ministeriales.";
 answers[57] = choices[57][2];
 units[57] = "5";
 comments[57] = "Id Pregunta: 318. UNION EUROPEA";


//  Id pregunta: 421 Año de creación de pregunta: 2016
 questions[58]= "59)  Las empresas deber&aacute;n promover condiciones de trabajo, arbitrar procedimientos espec&iacute;ficos y dar cauces a las denuncias o reclamaciones, para evitar:";
 choices[58]= new Array();
 choices[58][0] = "El acoso sexual.";
 choices[58][1] = "El acoso por raz&oacute;n del sexo.";
 choices[58][2] = "Ambas son correctas.";
 choices[58][3] = "A y B son incorrectas.";
 answers[58] = choices[58][2];
 units[58] = "14";
 comments[58] = "Id Pregunta: 421. POLITICAS DE IGUALDAD";


//  Id pregunta: 159 Año de creación de pregunta: 2016
 questions[59]= "60)  Seg&uacute;n la ley 39/2015, los actos administrativos, a menos que su naturaleza exija otra forma m&aacute;s adecuada de expresi&oacute;n y constancia, se producir&aacute;n: ";
 choices[59]= new Array();
 choices[59][0] = "verbalmente";
 choices[59][1] = "por escrito a trav&eacute;s de medios electr&oacute;nicos o no electr&oacute;nicos";
 choices[59][2] = "por escrito a trav&eacute;s de medios electr&oacute;nicos";
 choices[59][3] = "por escrito a trav&eacute;s de medios no electr&oacute;nicos";
 answers[59] = choices[59][2];
 units[59] = "7";
 comments[59] = "Id Pregunta: 159. Ley 39/2015, Art&iacute;culo 36";


//  Id pregunta: 387 Año de creación de pregunta: 2016
 questions[60]= "61)  El art&iacute;culo 37 de la Ley Org&aacute;nica 3/2007, para la igualdad efectiva de mujeres y hombres, indica que la Corporaci&oacute;n RTVE, en el ejercicio de su funci&oacute;n, perseguir&aacute; en su programaci&oacute;n:";
 choices[60]= new Array();
 choices[60][0] = "Mostrar anuncios para la igualdad de forma habitual.";
 choices[60][1] = "Ofrecer trabajo a mujeres v&iacute;ctimas de violencia de g&eacute;nero.";
 choices[60][2] = "Promover la incorporaci&oacute;n de mujeres a puestos visibles ante las c&aacute;maras.";
 choices[60][3] = "Reflejar adecuadamente la presencia de las mujeres en los diversos &aacute;mbitos de la vida social.";
 answers[60] = choices[60][3];
 units[60] = "14";
 comments[60] = "Id Pregunta: 387. POLITICAS DE IGUALDAD";


//  Id pregunta: 394 Año de creación de pregunta: 2016
 questions[61]= "62)  La situaci&oacute;n en que una disposici&oacute;n, criterio o pr&aacute;ctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, se denomina:";
 choices[61]= new Array();
 choices[61][0] = "Discriminaci&oacute;n indirecta.";
 choices[61][1] = "Discriminaci&oacute;n directa.";
 choices[61][2] = "Discriminaci&oacute;n por raz&oacute;n de sexo.";
 choices[61][3] = "Discriminaci&oacute;n abusiva.";
 answers[61] = choices[61][0];
 units[61] = "14";
 comments[61] = "Id Pregunta: 394. POLITICAS DE IGUALDAD";


//  Id pregunta: 714 Año de creación de pregunta: 2016
 questions[62]= "63)  Se&ntilde;ale la opci&oacute;n correcta";
 choices[62]= new Array();
 choices[62][0] = "Jenkins un servidor de integraci&oacute;n continua comercial.";
 choices[62][1] = "Extiende su funcionalidad a trav&eacute;s de plugins.";
 choices[62][2] = "Solamente soporta herramientas de control de versiones como CVS, Git y Clearcase.";
 choices[62][3] = "No posee un historial de cambios realizados por build o versi&oacute;n.";
 answers[62] = choices[62][1];
 units[62] = "92";
 comments[62] = "Id Pregunta: 714. INTEGRACION CONTINUA";


//  Id pregunta: 827 Año de creación de pregunta: 2016
 questions[63]= "64)  La recusaci&oacute;n se plantea...";
 choices[63]= new Array();
 choices[63][0] = "Antes de iniciado el procedimiento";
 choices[63][1] = "Una vez iniciado el procedimiento";
 choices[63][2] = "Cuando el instructor dicta propuesta de resoluci&oacute;n";
 choices[63][3] = "En cualquier momento del procedimiento";
 answers[63] = choices[63][0];
 units[63] = "4, 7, 8, 9";
 comments[63] = "Id Pregunta: 827. Ley 40/2015";


//  Id pregunta: 357 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[64]= new Array();
 choices[64][0] = "El Parlamento y el Consejo.";
 choices[64][1] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[64][2] = "El Parlamento y la Comisi&oacute;n.";
 choices[64][3] = "La Comisi&oacute;n y el Consejo.";
 answers[64] = choices[64][1];
 units[64] = "5";
 comments[64] = "Id Pregunta: 357. UNION EUROPEA";


//  Id pregunta: 106 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;En qu&eacute; consiste el paradigma MapReduce?";
 choices[65]= new Array();
 choices[65][0] = "Map toma un conjunto de datos y lo convierte en otro conjunto donde los elementos individuales son separados en tuplas (pares clave/valor)";
 choices[65][1] = "Reduce obtiene la salida de map como datos de entrada y combina tuplas en un conjunto m&aacute;s peque&ntilde;o de las mismas";
 choices[65][2] = "A) y B) son verdaderas";
 choices[65][3] = "A) es la definici&oacute;n del procedimiento intermedio Shuffle";
 answers[65] = choices[65][2];
 units[65] = "73";
 comments[65] = "Id Pregunta: 106. ";


//  Id pregunta: 780 Año de creación de pregunta: 2016
 questions[66]= "67)  Sin perjuicio de la responsabilidad disciplinaria en que se pueda incurrir, el incumplimiento de las instrucciones u &oacute;rdenes de servicio:";
 choices[66]= new Array();
 choices[66][0] = "no afecta por s&iacute; solo a la validez de los actos dictados por los &oacute;rganos administrativos";
 choices[66][1] = "supone la invalidez de los actos dictados por los &oacute;rganos administrativos";
 choices[66][2] = "supone la nulidad de los actos dictados por los &oacute;rganos administrativos";
 choices[66][3] = "supone la anulabilidad de los actos dictados por los &oacute;rganos administrativos";
 answers[66] = choices[66][0];
 units[66] = "4, 7, 8, 9";
 comments[66] = "Id Pregunta: 780. Ley 40/2015";


//  Id pregunta: 271 Año de creación de pregunta: 2016
 questions[67]= "68)  La delegaci&oacute;n legislativa de las Cortes Generales en el Gobierno, cuando se trata de refundir varios textos legales en uno solo, deber&aacute; otorgarse mediante:";
 choices[67]= new Array();
 choices[67][0] = "Ley org&aacute;nica.";
 choices[67][1] = "Ley ordinaria.";
 choices[67][2] = "Ley de bases.";
 choices[67][3] = "Ley marco.";
 answers[67] = choices[67][0];
 units[67] = "1";
 comments[67] = "Id Pregunta: 271. CONSTITUCION1978";


//  Id pregunta: 416 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Qu&eacute; art&iacute;culo de la LO 3/2007, regula la igualdad en el &aacute;mbito de la educaci&oacute;n superior:";
 choices[68]= new Array();
 choices[68][0] = "Art. 25 LO, 3/2007.";
 choices[68][1] = "Art. 23 LO, 3/2007.";
 choices[68][2] = "Art. 14 LO, 3/2007.";
 choices[68][3] = "Ninguna es correcta, es el art. 13.";
 answers[68] = choices[68][0];
 units[68] = "14";
 comments[68] = "Id Pregunta: 416. POLITICAS DE IGUALDAD";


//  Id pregunta: 821 Año de creación de pregunta: 2016
 questions[69]= "70)  En las Comunidades Aut&oacute;nomas uniprovinciales en las que no exista Subdelegado la suplencia corresponder&aacute; a:";
 choices[69]= new Array();
 choices[69][0] = "el Secretario General";
 choices[69][1] = "el Subdirector General";
 choices[69][2] = "el Secretario de Estado";
 choices[69][3] = "ninguna es correcta";
 answers[69] = choices[69][0];
 units[69] = "4, 7, 8, 9";
 comments[69] = "Id Pregunta: 821. Ley 40/2015";


//  Id pregunta: 767 Año de creación de pregunta: 2016
 questions[70]= "71)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[70]= new Array();
 choices[70][0] = "la Administraci&oacute;n General del Estado";
 choices[70][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[70][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[70][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico o privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[70] = choices[70][3];
 units[70] = "4, 7, 8, 9";
 comments[70] = "Id Pregunta: 767. Ley 40/2015";


//  Id pregunta: 109 Año de creación de pregunta: 2016
 questions[71]= "72)  Big Data:";
 choices[71]= new Array();
 choices[71][0] = "Solo aplica a datos generados m&aacute;quina a m&aacute;quina (M2M)";
 choices[71][1] = "No puede emplearse para tratar datos no estructurados";
 choices[71][2] = "Suele utilizar tecnolog&iacute;as relacionales a la hora de analizar los datos";
 choices[71][3] = "Ninguna de las anteriores";
 answers[71] = choices[71][3];
 units[71] = "73";
 comments[71] = "Id Pregunta: 109. ";


//  Id pregunta: 138 Año de creación de pregunta: 2016
 questions[72]= "73)  La ley que obliga a todas las Administraciones a presentar equilibrio estructural en sus cuentas p&uacute;blicas y establece un l&iacute;mite de deuda como garant&iacute;a de sostenibilidad presupuestaria, es:";
 choices[72]= new Array();
 choices[72][0] = "La Ley Org&aacute;nica 2/2011";
 choices[72][1] = "La Ley Org&aacute;nica 2/2012";
 choices[72][2] = "La Ley Org&aacute;nica 3/2012";
 choices[72][3] = "La Ley Org&aacute;nica 2/2002";
 answers[72] = choices[72][1];
 units[72] = "12";
 comments[72] = "Id Pregunta: 138. Leyes modelo econ&oacute;mico";


//  Id pregunta: 342 Año de creación de pregunta: 2016
 questions[73]= "74)  La moci&oacute;n de censura contra la Comisi&oacute;n existe desde:";
 choices[73]= new Array();
 choices[73][0] = "El Tratado de Maastrich.";
 choices[73][1] = "El Tratado de Amsterdam.";
 choices[73][2] = "El Tratado de Par&iacute;s.";
 choices[73][3] = "El Tratado de Roma.";
 answers[73] = choices[73][3];
 units[73] = "5";
 comments[73] = "Id Pregunta: 342. UNION EUROPEA";


//  Id pregunta: 701 Año de creación de pregunta: 2016
 questions[74]= "75)  Se&ntilde;ale la que NO corresponde a una herramienta de automatizaci&oacute;n de pruebas:";
 choices[74]= new Array();
 choices[74][0] = "Selenium";
 choices[74][1] = "JUnit";
 choices[74][2] = "Jenkins";
 choices[74][3] = "JMeter";
 answers[74] = choices[74][2];
 units[74] = "92";
 comments[74] = "Id Pregunta: 701. INTEGRACION CONTINUA";


