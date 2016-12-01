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

//  Id pregunta: 816 Año de creación de pregunta: 2016
 questions[0]= "1)  Podr&aacute;n crearse por Real Decreto Subdelegaciones del Gobierno en las Comunidades Aut&oacute;nomas uniprovinciales, cuando lo justifiquen circunstancias como:";
 choices[0]= new Array();
 choices[0][0] = "la poblaci&oacute;n del territorio";
 choices[0][1] = "el volumen de gesti&oacute;n";
 choices[0][2] = "sus singularidades geogr&aacute;ficas, sociales o econ&oacute;micas";
 choices[0][3] = "todas son correctas";
 answers[0] = choices[0][3];
 units[0] = "4, 7, 8, 9";
 comments[0] = "Id Pregunta: 816. Ley 40/2015";
 preguntaids[0] = 816


//  Id pregunta: 848 Año de creación de pregunta: 2016
 questions[1]= "2)  Se&ntilde;ale la respuesta correcta:";
 choices[1]= new Array();
 choices[1][0] = "La sede electr&oacute;nica es aquella direcci&oacute;n electr&oacute;nica, disponible para los ciudadanos a trav&eacute;s de redes de telecomunicaciones, cuya titularidad corresponde a una Administraci&oacute;n P&uacute;blica, o bien a una o varios organismos p&uacute;blicos o entidades de Derecho P&uacute;blico en el ejercicio de sus competencias.";
 choices[1][1] = "Se entiende por portal de internet el punto de acceso electr&oacute;nico cuya titularidad corresponda a una Administraci&oacute;n P&uacute;blica, organismo p&uacute;blico o entidad de Derecho P&uacute;blico que permite el acceso a trav&eacute;s de internet a la informaci&oacute;n publicada y, en su caso, a la sede electr&oacute;nica correspondiente.";
 choices[1][2] = "A y B son correctas.";
 choices[1][3] = "A y B son falsas.";
 answers[1] = choices[1][2];
 units[1] = "4, 7, 8, 9";
 comments[1] = "Id Pregunta: 848. Ley 40/2015";
 preguntaids[1] = 848


//  Id pregunta: 768 Año de creación de pregunta: 2016
 questions[2]= "3)  Las Universidades p&uacute;blicas se regir&aacute;n por:";
 choices[2]= new Array();
 choices[2][0] = "las previsiones de la presente Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[2][1] = "su normativa espec&iacute;fica y supletoriamente por las previsiones de la presente Ley";
 choices[2][2] = "exclusivamente por su normativa espec&iacute;fica";
 choices[2][3] = "exclusivamente por las previsiones de la presente Ley";
 answers[2] = choices[2][1];
 units[2] = "4, 7, 8, 9";
 comments[2] = "Id Pregunta: 768. Ley 40/2015";
 preguntaids[2] = 768


//  Id pregunta: 80 Año de creación de pregunta: 2016
 questions[3]= "4)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, se&ntilde;ale la respuesta correcta respecto a la auditor&iacute;a de seguridad:";
 choices[3]= new Array();
 choices[3][0] = "Se realizar&aacute;, al menos, cada dieciocho meses para los sistemas de todas las categor&iacute;as, y con car&aacute;cter extraordinario, siempre que se produzcan modificaciones sustanciales en el sistema de informaci&oacute;n, que puedan repercutir en las medidas de seguridad requeridas.";
 choices[3][1] = "El equipo auditor, en el dise&ntilde;o de sus pruebas y revisiones, debe limitarse a la revisi&oacute;n de documentos facilitados por los responsables de la informaci&oacute;n, del servicio y de seguridad.";
 choices[3][2] = "Cuando existan razones que lo justifiquen, dentro de las tareas de la auditoria de seguridad podr&aacute;n incluirse adem&aacute;s la ejecuci&oacute;n de trabajos de consultor&iacute;a.";
 choices[3][3] = "El informe de auditor&iacute;a deber&aacute; dictaminar sobre la adecuaci&oacute;n de las medidas exigidas por el Esquema Nacional de Seguridad, identificar sus deficiencias y proponer las medidas correctoras o complementarias necesarias.";
 answers[3] = choices[3][3];
 units[3] = "46";
 comments[3] = "Id Pregunta: 80. AGE A1 2015";
 preguntaids[3] = 80


//  Id pregunta: 96 Año de creación de pregunta: 2016
 questions[4]= "5)  Indique cu&aacute;l de las siguientes soluciones tecnol&oacute;gicas NO se utiliza para virtualizaci&oacute;n:";
 choices[4]= new Array();
 choices[4][0] = "VMware ESX";
 choices[4][1] = "XenServer";
 choices[4][2] = "Alfresco";
 choices[4][3] = "Microsoft Hyper-V";
 answers[4] = choices[4][2];
 units[4] = "54";
 comments[4] = "Id Pregunta: 96. AGE A1 2015";
 preguntaids[4] = 96


//  Id pregunta: 864 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Qu&eacute; son las t&eacute;cnicas SEO? ";
 choices[5]= new Array();
 choices[5][0] = "SEO es el acr&oacute;nimo de search engine optimization.";
 choices[5][1] = "Las t&eacute;cnicas SEO Onsite son en s&iacute; las que llevaremos a cabo dentro de nuestro sitio, tales como optimizaciones de c&oacute;digo, optimizaci&oacute;n de procesos del servidor, llamadas a la base de datos y sobre todo optimizaci&oacute;n de contenido. ";
 choices[5][2] = "Las t&eacute;cnicas de SEO Offsite se refieren a todos los enlaces que no est&aacute;n en nuestro sitio web. Se trata del n&uacute;mero de veces que est&aacute; enlazado el sitio web, desde d&oacute;nde y con qu&eacute; t&eacute;rminos.";
 choices[5][3] = "Todas las anteriores son verdaderas.";
 answers[5] = choices[5][3];
 units[5] = "125";
 comments[5] = "Id Pregunta: 864. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[5] = 864


//  Id pregunta: 611 Año de creación de pregunta: 2016
 questions[6]= "7)  Dentro de las t&eacute;cnicas de clasificaci&oacute;n de datos tenemos los m&eacute;todos de clasificaci&oacute;n interna. &iquest;A qu&eacute; tipo de algoritmo de ordenaci&oacute;n o clasificaci&oacute;n pertenece el m&eacute;todo de la burbuja?";
 choices[6]= new Array();
 choices[6][0] = "Clasificaci&oacute;n por inserci&oacute;n.";
 choices[6][1] = "Clasificaci&oacute;n por cuenta.";
 choices[6][2] = "Clasificaci&oacute;n por selecci&oacute;n.";
 choices[6][3] = "Clasificaci&oacute;n por intercambio.";
 answers[6] = choices[6][3];
 units[6] = "56";
 comments[6] = "Id Pregunta: 611. Junta de Extremadura A1 2015";
 preguntaids[6] = 611


//  Id pregunta: 656 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Qu&eacute; significa la tolerancia a partici&oacute;n dentro del teorema CAP?";
 choices[7]= new Array();
 choices[7][0] = "El sistema podr&aacute; seguir procesando una petici&oacute;n aunque se pierda la conectividad con algun nodo";
 choices[7][1] = "Las modificaciones se aplican a todos los nodos en su conjunto en el mismo momento";
 choices[7][2] = "Cualquier peticion recibida en un nodo debe tener respuesta";
 choices[7][3] = "El teorema CAP no habla de tolerancia a particiones";
 answers[7] = choices[7][0];
 units[7] = "73";
 comments[7] = "Id Pregunta: 656. ";
 preguntaids[7] = 656


//  Id pregunta: 738 Año de creación de pregunta: 2016
 questions[8]= "9)  Las iniciativas que se lancen al amparo del Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE se basar&aacute;n en:";
 choices[8]= new Array();
 choices[8][0] = "6 principios.";
 choices[8][1] = "7 principios.";
 choices[8][2] = "5 principios.";
 choices[8][3] = "6 directrices.";
 answers[8] = choices[8][2];
 units[8] = "28";
 comments[8] = "Id Pregunta: 738. Estrategia TIC";
 preguntaids[8] = 738


//  Id pregunta: 531 Año de creación de pregunta: 2016
 questions[9]= "10)  Se presumir&aacute; la representaci&oacute;n para:";
 choices[9]= new Array();
 choices[9][0] = "formular solicitudes";
 choices[9][1] = "los actos y gestiones de mero tr&aacute;mite";
 choices[9][2] = "presentar declaraciones responsables o comunicaciones";
 choices[9][3] = "interponer recursos, desistir de acciones y renunciar a derechos en nombre de otra persona";
 answers[9] = choices[9][1];
 units[9] = "7";
 comments[9] = "Id Pregunta: 531. LEY 39/2015";
 preguntaids[9] = 531


//  Id pregunta: 672 Año de creación de pregunta: 2016
 questions[10]= "11)  Respecto a la ejecuci&oacute;n de la resoluci&oacute;n de un procedimiento administrativo, se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[10]= new Array();
 choices[10][0] = "Las Administraciones P&uacute;blicas no iniciar&aacute;n la ejecuci&oacute;n hasta que se haya dictado resoluci&oacute;n.";
 choices[10][1] = "De una resoluci&oacute;n administrativa nunca puede derivarse una multa.";
 choices[10][2] = "La ejecuci&oacute;n forzosa de una resoluci&oacute;n puede afectar al patrimonio.";
 choices[10][3] = "Contra algunas resoluciones es posible interponer recursos por v&iacute;a administrativa.";
 answers[10] = choices[10][1];
 units[10] = "7";
 comments[10] = "Id Pregunta: 672. Cap&iacute;tulo VII, T&iacute;tulo IV de la Ley 39/2015";
 preguntaids[10] = 672


//  Id pregunta: 593 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Qui&eacute;n se encarga de revisar la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[11]= new Array();
 choices[11][0] = "La CETIC";
 choices[11][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[11][2] = "La DTIC";
 choices[11][3] = "El MHFP";
 answers[11] = choices[11][0];
 units[11] = "19";
 comments[11] = "Id Pregunta: 593. Estrategia TIC";
 preguntaids[11] = 593


//  Id pregunta: 520 Año de creación de pregunta: 2016
 questions[12]= "13)  Las Corporaciones de Derecho P&uacute;blico se regir&aacute;n por:";
 choices[12]= new Array();
 choices[12][0] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[12][1] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica";
 choices[12][2] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[12][3] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica";
 answers[12] = choices[12][0];
 units[12] = "7";
 comments[12] = "Id Pregunta: 520. LEY 39/2015";
 preguntaids[12] = 520


//  Id pregunta: 604 Año de creación de pregunta: 2016
 questions[13]= "14)  Como todo criptosistema de clave p&uacute;blica, el protocolo del criptosistema RSA:";
 choices[13]= new Array();
 choices[13][0] = "Tiene dos partes: Cifrado de Mensajes, Descifrado de Mensajes.";
 choices[13][1] = "Se basa en la dificultad que supone resolver el &lt;Problema de la Factorizaci&oacute;n Externa&gt;.";
 choices[13][2] = "Tiene tres partes: Generaci&oacute;n de claves, Cifrado de mensajes, Descifrado de mensajes.";
 choices[13][3] = "Se basa en la dificultad que supone resolver el &lt;Problema de Socrates- Arquimedes&gt;.";
 answers[13] = choices[13][2];
 units[13] = "76";
 comments[13] = "Id Pregunta: 604. Junta de Extremadura A1 2015";
 preguntaids[13] = 604


//  Id pregunta: 177 Año de creación de pregunta: 2016
 questions[14]= "15)  El art&iacute;culo 152 de la Constituci&oacute;n espa&ntilde;ola se refiere a la organizaci&oacute;n instituicional b&aacute;sica de cada Comunidad Aut&oacute;noma, la cual se basar&aacute; en:";
 choices[14]= new Array();
 choices[14][0] = "Una Conseller&iacute;a legislativa, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[14][1] = "Una Asamble legislativa, un Presidente, un Delegado de Gobierno y un Comit&eacute; Superior del Poder Judicial.";
 choices[14][2] = "Una Asamble legislativa, un Consejo de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[14][3] = "Un Consejo legislativo, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Supremo.";
 answers[14] = choices[14][2];
 units[14] = "1";
 comments[14] = "Id Pregunta: 177. CONSTITUCION1978";
 preguntaids[14] = 177


//  Id pregunta: 814 Año de creación de pregunta: 2016
 questions[15]= "16)  Las Delegaciones del Gobierno est&aacute;n adscritas org&aacute;nicamente a:";
 choices[15]= new Array();
 choices[15][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[15][1] = "el Consejo de Gobierno de la Comunidad Aut&oacute;noma";
 choices[15][2] = "el Ministerio del Interior";
 choices[15][3] = "la Administraci&oacute;n General del Estado";
 answers[15] = choices[15][0];
 units[15] = "4, 7, 8, 9";
 comments[15] = "Id Pregunta: 814. Ley 40/2015";
 preguntaids[15] = 814


//  Id pregunta: 448 Año de creación de pregunta: 2016
 questions[16]= "17)  Dentro de la l&oacute;gica presupuestaria, los ingresos tienen car&aacute;cter...";
 choices[16]= new Array();
 choices[16][0] = "Ejecutivo";
 choices[16][1] = "Limitativo";
 choices[16][2] = "Estimativo";
 choices[16][3] = "Progresivo";
 answers[16] = choices[16][2];
 units[16] = "10";
 comments[16] = "Id Pregunta: 448. PRESUPUESTOS GENERALES";
 preguntaids[16] = 448


//  Id pregunta: 351 Año de creación de pregunta: 2016
 questions[17]= "18)  La sede del Parlamento Europeo se encuentra en:";
 choices[17]= new Array();
 choices[17][0] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas.";
 choices[17][1] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas y la Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[17][2] = "La Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[17][3] = "Celebra todas sus sesiones en Bruselas.";
 answers[17] = choices[17][1];
 units[17] = "5";
 comments[17] = "Id Pregunta: 351. UNION EUROPEA";
 preguntaids[17] = 351


//  Id pregunta: 497 Año de creación de pregunta: 2016
 questions[18]= "19)  Seg&uacute;n el art&iacute;culo 13.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el aplazamiento y fraccionamiento de las cantidades adeudadas a la Hacienda P&uacute;blica estatal por las comunidades aut&oacute;nomas y las corporaciones locales se regir&aacute; por:";
 choices[18]= new Array();
 choices[18][0] = "La Ley General Tributaria.";
 choices[18][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General del Estado.";
 choices[18][2] = "La legislaci&oacute;n espec&iacute;fica, la cual tendr&aacute; en cuenta la necesaria reciprocidad entre administraciones.";
 choices[18][3] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 answers[18] = choices[18][2];
 units[18] = "10";
 comments[18] = "Id Pregunta: 497. PRESUPUESTOS GENERALES";
 preguntaids[18] = 497


//  Id pregunta: 849 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Cu&aacute;l de los siguientes es un sistema de firma para la actuaci&oacute;n administrativa automatizada?";
 choices[19]= new Array();
 choices[19][0] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico reconocido o cualificado que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[19][1] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico avanzado o reconocido que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[19][2] = "C&oacute;digo seguro de verificaci&oacute;n vinculado a la Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de Derecho P&uacute;blico, en los t&eacute;rminos y condiciones establecidos, permiti&eacute;ndose en todo caso la comprobaci&oacute;n de la integridad del documento mediante el acceso al portal correspondiente.";
 choices[19][3] = "Firma electr&oacute;nica del titular del &oacute;rgano o empleado p&uacute;blico.";
 answers[19] = choices[19][0];
 units[19] = "4, 7, 8, 9";
 comments[19] = "Id Pregunta: 849. Ley 40/2015";
 preguntaids[19] = 849


//  Id pregunta: 127 Año de creación de pregunta: 2016
 questions[20]= "21)  Seg&uacute;n la ley 19/2013, la Reclamaci&oacute;n ante el Consejo de Transparencia y Buen Gobierno:";
 choices[20]= new Array();
 choices[20][0] = "Tiene car&aacute;cter facultativo.";
 choices[20][1] = "Tiene car&aacute;cter potestativo. ";
 choices[20][2] = "Se puede realizar de forma paralela a su impugnaci&oacute;n en v&iacute;a contencioso-administrativa.";
 choices[20][3] = "Se realiza si la impugnaci&oacute;n en v&iacute;a contencioso-administrativa es rechazada.";
 answers[20] = choices[20][1];
 units[20] = "22";
 comments[20] = "Id Pregunta: 127. ";
 preguntaids[20] = 127


//  Id pregunta: 15 Año de creación de pregunta: 2016
 questions[21]= "22)  Si una aplicaci&oacute;n web desplegada en una JVM utiliza un servlet para generar p&aacute;ginas web de forma din&aacute;mica, dicho servlet no implementa la interfaz SingleThreadModel, y en un momento determinado se encuentra recibiendo m&uacute;ltiples peticiones de clientes de forma concurrente, &iquest;cu&aacute;ntos objetos de dicha clase estar&aacute;n cargados en la memoria de la JVM?";
 choices[21]= new Array();
 choices[21][0] = "0";
 choices[21][1] = "1";
 choices[21][2] = "Tantos como peticiones concurrentes tenga.";
 choices[21][3] = "Tantos como le permita la memoria de la JVM.";
 answers[21] = choices[21][1];
 units[21] = "64";
 comments[21] = "Id Pregunta: 15. AGE A1 2015";
 preguntaids[21] = 15


//  Id pregunta: 546 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Cu&aacute;l es el &oacute;rgano superior de gobernanza TIC en la Administraci&oacute;n General del Estado?";
 choices[22]= new Array();
 choices[22][0] = "El Comit&eacute; de Direcci&oacute;n TIC";
 choices[22][1] = "El Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[22][2] = "La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[22][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[22] = choices[22][3];
 units[22] = "26";
 comments[22] = "Id Pregunta: 546. Gobernanza TIC";
 preguntaids[22] = 546


//  Id pregunta: 587 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Qu&eacute; &oacute;rgano es el responsable de la implantaci&oacute;n de los medios y servicios compartidos?";
 choices[23]= new Array();
 choices[23][0] = "La CETIC";
 choices[23][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[23][2] = "La DTIC";
 choices[23][3] = "Ninguno de los anteriores";
 answers[23] = choices[23][1];
 units[23] = "19";
 comments[23] = "Id Pregunta: 587. Estrategia TIC";
 preguntaids[23] = 587


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
 preguntaids[24] = 77


//  Id pregunta: 829 Año de creación de pregunta: 2016
 questions[25]= "26)  La recusaci&oacute;n se plantea...";
 choices[25]= new Array();
 choices[25][0] = "Antes de iniciado el procedimiento";
 choices[25][1] = "Una vez iniciado el procedimiento";
 choices[25][2] = "Cuando el instructor dicta propuesta de resoluci&oacute;n";
 choices[25][3] = "En cualquier momento del procedimiento";
 answers[25] = choices[25][0];
 units[25] = "4, 7, 8, 9";
 comments[25] = "Id Pregunta: 829. Ley 40/2015";
 preguntaids[25] = 829


//  Id pregunta: 790 Año de creación de pregunta: 2016
 questions[26]= "27)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado son &oacute;rganos directivos:";
 choices[26]= new Array();
 choices[26][0] = "los Delegados del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[26][1] = "los Subdelegados del Gobierno en las provincias";
 choices[26][2] = "los Subdelegados del Gobierno en las entidades locales";
 choices[26][3] = "a y b son correctas";
 answers[26] = choices[26][3];
 units[26] = "4, 7, 8, 9";
 comments[26] = "Id Pregunta: 790. Ley 40/2015";
 preguntaids[26] = 790


//  Id pregunta: 753 Año de creación de pregunta: 2016
 questions[27]= "28)  En el contexto de la Ley 20/2013, de garant&iacute;a de la unidad de mercado, se considerar&aacute; que concurren los principios de necesidad y proporcionalidad para la exigencia de una autorizaci&oacute;n:";
 choices[27]= new Array();
 choices[27][0] = "Respecto a los operadores econ&oacute;micos, cuando est&eacute; justificado por razones de orden p&uacute;blico aunque &eacute;stas puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n.";
 choices[27][1] = "Respecto a las instalaciones o infraestructuras f&iacute;sicas necesarias para el ejercicio de actividades econ&oacute;micas, cuando sean susceptibles de generar da&ntilde;os sobre el medio ambiente y el entorno urbano, la seguridad o la salud p&uacute;blica y el patrimonio hist&oacute;rico-art&iacute;stico, y estas razones no puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n";
 choices[27][2] = "b) y d) son verdaderas";
 choices[27][3] = "Cuando as&iacute; se disponga reglamentariamente";
 answers[27] = choices[27][1];
 units[27] = "23";
 comments[27] = "Id Pregunta: 753. Direcci&oacute;n p&uacute;blica";
 preguntaids[27] = 753


//  Id pregunta: 774 Año de creación de pregunta: 2016
 questions[28]= "29)  Las Administraciones P&uacute;blicas act&uacute;an para el cumplimiento de sus fines con:";
 choices[28]= new Array();
 choices[28][0] = "personalidad jur&iacute;dica propia";
 choices[28][1] = "personalidad jur&iacute;dica &uacute;nica";
 choices[28][2] = "personalidad jur&iacute;dica plena";
 choices[28][3] = "personalidad jur&iacute;dica f&iacute;sica";
 answers[28] = choices[28][1];
 units[28] = "4, 7, 8, 9";
 comments[28] = "Id Pregunta: 774. Ley 40/2015";
 preguntaids[28] = 774


//  Id pregunta: 0 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Cu&aacute;l de los siguientes NO es un objetivo del Plan de Transformaci&oacute;n Digital de la AGE?";
 choices[29]= new Array();
 choices[29][0] = "Consolidar el tejido productivo nacional apoyando el efectivo despliegue de la Sociedad de la Informaci&oacute;n.";
 choices[29][1] = "Conseguir una mayor eficiencia en los servicios TIC comunes de la Administraci&oacute;n.";
 choices[29][2] = "Implantar una gesti&oacute;n corporativa inteligente de la informaci&oacute;n y los datos.";
 choices[29][3] = "Adoptar una estrategia corporativa de seguridad y usabilidad.";
 answers[29] = choices[29][0];
 units[29] = "26";
 comments[29] = "Id Pregunta: 0. AGE A1 2015";
 preguntaids[29] = 0


//  Id pregunta: 432 Año de creación de pregunta: 2016
 questions[30]= "31)  Las sociedades obligadas a presentar cuenta de p&eacute;rdidas y ganancias no abreviada, procurar&aacute;n incluir en su Consejo de Administraci&oacute;n un n&uacute;mero de mujeres que permita alcanzar la presencia equilibrada de mujeres y hombres en un plazo:";
 choices[30]= new Array();
 choices[30][0] = "De ocho a&ntilde;os.";
 choices[30][1] = "El d&iacute;a despu&eacute;s de la publicaci&oacute;n en el BOE de la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombre.";
 choices[30][2] = "Ambas son correctas.";
 choices[30][3] = "No existe un l&iacute;mite.";
 answers[30] = choices[30][0];
 units[30] = "14";
 comments[30] = "Id Pregunta: 432. POLITICAS DE IGUALDAD";
 preguntaids[30] = 432


//  Id pregunta: 76 Año de creación de pregunta: 2016
 questions[31]= "32)  El proceso de auditor&iacute;a de sistemas de informaci&oacute;n se considera como un proceso:";
 choices[31]= new Array();
 choices[31][0] = "Estrat&eacute;gico";
 choices[31][1] = "Operativo";
 choices[31][2] = "T&aacute;ctico";
 choices[31][3] = "Tecnol&oacute;gico";
 answers[31] = choices[31][0];
 units[31] = "36";
 comments[31] = "Id Pregunta: 76. AGE A1 2015";
 preguntaids[31] = 76


//  Id pregunta: 188 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Puede el Estado transferir o delegar a las Comunidades Aut&oacute;nomas facultadas que son de su titularidad?";
 choices[32]= new Array();
 choices[32][0] = "No, en ning&uacute;n caso.";
 choices[32][1] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con cualquier tipo de facultades.";
 choices[32][2] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, sin que el Estado se pueda reservar ninguna forma de control.";
 choices[32][3] = ", mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, previendo en cada caso la correspondiente transferencia de medios financieros, as&iacute; como las formas de control que se reserve el Estado.";
 answers[32] = choices[32][3];
 units[32] = "1";
 comments[32] = "Id Pregunta: 188. CONSTITUCION1978";
 preguntaids[32] = 188


//  Id pregunta: 529 Año de creación de pregunta: 2016
 questions[33]= "34)  Los interesados con capacidad de obrar podr&aacute;n actuar por medio de representante:";
 choices[33]= new Array();
 choices[33][0] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 choices[33][1] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[33][2] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[33][3] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 answers[33] = choices[33][2];
 units[33] = "7";
 comments[33] = "Id Pregunta: 529. LEY 39/2015";
 preguntaids[33] = 529


//  Id pregunta: 302 Año de creación de pregunta: 2016
 questions[34]= "35)  El Presidente del Tribunal de Cuentas es elegido para un per&iacute;odo de:";
 choices[34]= new Array();
 choices[34][0] = "Cinco a&ntilde;os.";
 choices[34][1] = "Cuatro a&ntilde;os.";
 choices[34][2] = "Tres a&ntilde;os.";
 choices[34][3] = "Seis meses.";
 answers[34] = choices[34][2];
 units[34] = "5";
 comments[34] = "Id Pregunta: 302. UNION EUROPEA";
 preguntaids[34] = 302


//  Id pregunta: 612 Año de creación de pregunta: 2016
 questions[35]= "36)  En el lenguaje de manipulaci&oacute;n de datos, &iquest;cu&aacute;l de las siguientes cl&aacute;usulas va asociada a la cl&aacute;usula HAVING?";
 choices[35]= new Array();
 choices[35][0] = "GROUP BY.";
 choices[35][1] = "COUNT.";
 choices[35][2] = "WHERE.";
 choices[35][3] = "DISTINCT.";
 answers[35] = choices[35][0];
 units[35] = "60";
 comments[35] = "Id Pregunta: 612. Junta de Extremadura A1 2015";
 preguntaids[35] = 612


//  Id pregunta: 498 Año de creación de pregunta: 2016
 questions[36]= "37)  A los efectos de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , forman parte del sector p&uacute;blico estatal:";
 choices[36]= new Array();
 choices[36][0] = "Las respuestas a) y b) son correctas.";
 choices[36][1] = "Los organismos aut&oacute;nomos dependientes de la Administraci&oacute;n General del Estado.";
 choices[36][2] = "Las entidades p&uacute;blicas empresariales, dependientes de la Administraci&oacute;n General del Estado, o de cualesquiera otros organismos p&uacute;blicos vinculados o dependientes de ella.";
 choices[36][3] = "Las respuestas a) y b) no son correctas.";
 answers[36] = choices[36][0];
 units[36] = "10";
 comments[36] = "Id Pregunta: 498. PRESUPUESTOS GENERALES";
 preguntaids[36] = 498


//  Id pregunta: 550 Año de creación de pregunta: 2016
 questions[37]= "38)  El &aacute;mbito de aplicaci&oacute;n del RD 806/2014 de Gobernanza TIC es:";
 choices[37]= new Array();
 choices[37][0] = "La Administraci&oacute;n General del Estado";
 choices[37][1] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos";
 choices[37][2] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos y las Comunidades Aut&oacute;nomas";
 choices[37][3] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos, las Comunidades Aut&oacute;nomas y las Entidades Locales";
 answers[37] = choices[37][1];
 units[37] = "26";
 comments[37] = "Id Pregunta: 550. Gobernanza TIC";
 preguntaids[37] = 550


//  Id pregunta: 383 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre mujeres y hombres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[38]= new Array();
 choices[38][0] = "El Consejo Nacional de la Mujer";
 choices[38][1] = "El Consejo de la Mujer";
 choices[38][2] = "El Instituto de la Mujer";
 choices[38][3] = "El Consejo de Participaci&oacute;n de la Mujer";
 answers[38] = choices[38][3];
 units[38] = "14";
 comments[38] = "Id Pregunta: 383. POLITICAS DE IGUALDAD";
 preguntaids[38] = 383


//  Id pregunta: 758 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Cu&aacute;l de los siguientes no es uno de los pilares en que se basa la Agenda Digital Europea?";
 choices[39]= new Array();
 choices[39][0] = "Promover un acceso a internet r&aacute;pido y ultrarr&aacute;pido para todos";
 choices[39][1] = "Implantar el mercado general europeo";
 choices[39][2] = "Fomentar la alfabetizaci&oacute;n, la capacitaci&oacute;n y la inclusi&oacute;n digitales";
 choices[39][3] = "Consolidar la confianza y la seguridad en l&iacute;nea";
 answers[39] = choices[39][1];
 units[39] = "19";
 comments[39] = "Id Pregunta: 758. Agenda Digital Europea";
 preguntaids[39] = 758


//  Id pregunta: 500 Año de creación de pregunta: 2016
 questions[40]= "41)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la Deuda P&uacute;blica podr&aacute; estar representada en:";
 choices[40]= new Array();
 choices[40][0] = "En t&iacute;tulos-valores.";
 choices[40][1] = "Las respuestas a) y b) son correctas.";
 choices[40][2] = "Las respuestas a) y b) no son correctas.";
 choices[40][3] = "En cuenta.";
 answers[40] = choices[40][1];
 units[40] = "10";
 comments[40] = "Id Pregunta: 500. PRESUPUESTOS GENERALES";
 preguntaids[40] = 500


//  Id pregunta: 345 Año de creación de pregunta: 2016
 questions[41]= "42)  El procedimiento de dictamen simple o dictamen consultivo significa que:";
 choices[41]= new Array();
 choices[41][0] = "El Consejo debe obtener la aprobaci&oacute;n del Parlamento Europeo para que se tomen determinadas decisiones de primera importancia.";
 choices[41][1] = "Por el que se da poder al Parlamento Europeo para una mayor posibilidad de influir sobre el proceso legislativo mediante una &quot;doble lectura&quot; de las propuestas legislativas de la Comisi&oacute;n.";
 choices[41][2] = "Por el que se da poder al Parlamento Europeo para aprobar disposiciones conjuntamente con el Consejo.";
 choices[41][3] = "El Consejo consulte al Parlamento Europeo y tome sus puntos de vista en consideraci&oacute;n.";
 answers[41] = choices[41][3];
 units[41] = "5";
 comments[41] = "Id Pregunta: 345. UNION EUROPEA";
 preguntaids[41] = 345


//  Id pregunta: 741 Año de creación de pregunta: 2016
 questions[42]= "43)  En relaci&oacute;n al principio rector Orientaci&oacute;n al usuario del servicio del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[42]= new Array();
 choices[42][0] = "Es necesario redefinir los servicios empezando por el lado del usuario, ya sea un ciudadano o un empleado p&uacute;blico, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y seguridad.";
 choices[42][1] = "Es necesario redefinir los servicios empezando por el lado del ciudadano, ya sea un funcionario o una persona f&iacute;sica, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y transparencia.";
 choices[42][2] = "Se requiere modernizar los servicios p&uacute;blicos empezando por el lado del ciudadano, ya sea un funcionario o una persona f&iacute;sica, con una vocaci&oacute;n de transparencia, usabilidad, simplicidad y accesibilidad.";
 choices[42][3] = "Es necesario redefinir los servicios empezando por el lado del usuario, ya sea un ciudadano o un empleado p&uacute;blico, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y transparencia.";
 answers[42] = choices[42][0];
 units[42] = "28";
 comments[42] = "Id Pregunta: 741. Estrategia TIC";
 preguntaids[42] = 741


//  Id pregunta: 556 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Qu&eacute; &oacute;rgano europeo ha establecido las 16 iniciativas para llevar a cabo la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[43]= new Array();
 choices[43][0] = "El BCE";
 choices[43][1] = "El Parlamento";
 choices[43][2] = "El Consejo";
 choices[43][3] = "La Comisi&oacute;n";
 answers[43] = choices[43][3];
 units[43] = "17";
 comments[43] = "Id Pregunta: 556. Mercado &Uacute;nico Digital";
 preguntaids[43] = 556


//  Id pregunta: 705 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Cu&aacute;l de los siguientes NO es un principio t&eacute;cnico de los mencionados en la Ley 19/2013 al que debe atenerse la informaci&oacute;n publicada en el Portal de Transparencia de la Administraci&oacute;n General del Estado?";
 choices[44]= new Array();
 choices[44][0] = "Compatibilidad";
 choices[44][1] = "Interoperabilidad";
 choices[44][2] = "Reutilizaci&oacute;n";
 choices[44][3] = "Accesibilidad";
 answers[44] = choices[44][0];
 units[44] = "22";
 comments[44] = "Id Pregunta: 705. Ley de transparencia";
 preguntaids[44] = 705


//  Id pregunta: 632 Año de creación de pregunta: 2016
 questions[45]= "46)  Seg&uacute;n el Reglamento de Medidas de Seguridad de Ficheros Automatizados con Datos de Car&aacute;cter Personal, los ficheros que contengan datos de ideolog&iacute;a, religi&oacute;n, creencias, origen racial, salud o vida sexual, &iquest;qu&eacute; medidas de seguridad deber&aacute;n adoptar?";
 choices[45]= new Array();
 choices[45][0] = "De nivel b&aacute;sico y nivel medio.";
 choices[45][1] = "De nivel alto.";
 choices[45][2] = "De nivel medio y nivel alto.";
 choices[45][3] = "De nivel b&aacute;sico, nivel medio y nivel alto.";
 answers[45] = choices[45][3];
 units[45] = "35";
 comments[45] = "Id Pregunta: 632. Junta de Extremadura A1 2015";
 preguntaids[45] = 632


//  Id pregunta: 309 Año de creación de pregunta: 2016
 questions[46]= "47)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a los Cuestores:";
 choices[46]= new Array();
 choices[46][0] = "Son miembros de la Mesa del Parlamento Europeo con voz pero sin voto.";
 choices[46][1] = "No son miembros de la Mesa del Parlamento Europeo.";
 choices[46][2] = "Son miembros de la Mesa del Parlamento Europeo con voz y voto.";
 choices[46][3] = "Los Cuestores forman parte de la Mesa del Parlamento Europeo en un n&uacute;mero igual a tres.";
 answers[46] = choices[46][0];
 units[46] = "5";
 comments[46] = "Id Pregunta: 309. UNION EUROPEA";
 preguntaids[46] = 309


//  Id pregunta: 417 Año de creación de pregunta: 2016
 questions[47]= "48)  Las Administraciones P&uacute;blicas en el &aacute;mbito de la educaci&oacute;n superior, promover&aacute;n:";
 choices[47]= new Array();
 choices[47][0] = "Inclusi&oacute;n de ense&ntilde;anzas en materia de igualdad entre mujeres y hombres.";
 choices[47][1] = "La creaci&oacute;n de postgrados espec&iacute;ficos.";
 choices[47][2] = "Ambas son correctas.";
 choices[47][3] = "La A y B son incorrectas.";
 answers[47] = choices[47][2];
 units[47] = "14";
 comments[47] = "Id Pregunta: 417. POLITICAS DE IGUALDAD";
 preguntaids[47] = 417


//  Id pregunta: 745 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Qu&eacute; dos figuras son novedad de la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n ?";
 choices[48]= new Array();
 choices[48][0] = "Las Sociedades de Responsabilidad Limitada de formaci&oacute;n sucesiva y el Emprendedor de responsabilidad limitada";
 choices[48][1] = "Sociedad Limitada de Formaci&oacute;n Sucesiva y Emprendedor de responsabilidad limitada";
 choices[48][2] = "Sociedad de Responsabilidad Limitada y Emprendedor de responsabilidad Limitada";
 choices[48][3] = "Sociedad de Formaci&oacute;n sucesiva y emprendedor de responsabilidad limitada";
 answers[48] = choices[48][1];
 units[48] = "23";
 comments[48] = "Id Pregunta: 745. Direcci&oacute;n p&uacute;blica";
 preguntaids[48] = 745


//  Id pregunta: 6 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;Cu&aacute;l de los siguientes procesos de M&Eacute;TRICA Versi&oacute;n 3 no est&aacute; dentro del &aacute;mbito de la norma ISO 12207 de procesos de ciclo de vida del software?";
 choices[49]= new Array();
 choices[49][0] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[49][1] = "Desarrollo de Sistemas de Informaci&oacute;n";
 choices[49][2] = "Construcci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[49][3] = "Ninguno de los anteriores, ya que los tres est&aacute;n cubiertos por la norma ISO 12207";
 answers[49] = choices[49][0];
 units[49] = "91";
 comments[49] = "Id Pregunta: 6. AGE A1 2015";
 preguntaids[49] = 6


//  Id pregunta: 734 Año de creación de pregunta: 2016
 questions[50]= "51)  Indique la opci&oacute;n correcta en relaci&oacute;n con la VISI&Oacute;N de la Estrategia TIC";
 choices[50]= new Array();
 choices[50][0] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser electr&oacute;nica.";
 choices[50][1] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser digital.";
 choices[50][2] = "Para el a&ntilde;o 2020 ya no existir&aacute; ning&uacute;n procedimiento en soporte papel.";
 choices[50][3] = "En el a&ntilde;o 2020 los funcionarios realizar&aacute;n todas sus tareas con ordenador.";
 answers[50] = choices[50][1];
 units[50] = "28";
 comments[50] = "Id Pregunta: 734. Estrategia TIC";
 preguntaids[50] = 734


//  Id pregunta: 130 Año de creación de pregunta: 2016
 questions[51]= "52)  Dentro del Pacto Fiscal Europeo de 2012, cu&aacute;l de estos no corresponde a uno de los principales puntos contenidos:";
 choices[51]= new Array();
 choices[51][0] = "La obligaci&oacute;n de mantener el d&eacute;ficit p&uacute;blico por debajo del 3% del PIB.";
 choices[51][1] = "La obligaci&oacute;n de los pa&iacute;ses con una deuda p&uacute;blica superior al 60% del PIB a caer dentro de este l&iacute;mite en 20 a&ntilde;os, a una tasa igual a la vig&eacute;sima parte de la franquicia de cada anualidad.";
 choices[51][2] = "El compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional.";
 choices[51][3] = "El compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,5 % de la PIB y, en aquellos pa&iacute;ses en los que la deuda es inferior al 50 % del PIB, 2%.";
 answers[51] = choices[51][3];
 units[51] = "12";
 comments[51] = "Id Pregunta: 130. Leyes modelo econ&oacute;mico";
 preguntaids[51] = 130


//  Id pregunta: 174 Año de creación de pregunta: 2016
 questions[52]= "53)  De conformidad con la Constituci&oacute;n Espa&ntilde;ola, &iquest; cu&aacute;l de los siguientes derechos y libertades es susceptible de tutela a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional?";
 choices[52]= new Array();
 choices[52][0] = "El derecho a la propiedad privada.";
 choices[52][1] = "El derecho de asociaci&oacute;n.";
 choices[52][2] = "El derecho de fundaci&oacute;n.";
 choices[52][3] = "El derecho de negociaci&oacute;n colectiva.";
 answers[52] = choices[52][1];
 units[52] = "1";
 comments[52] = "Id Pregunta: 174. CONSTITUCION1978";
 preguntaids[52] = 174


//  Id pregunta: 736 Año de creación de pregunta: 2016
 questions[53]= "54)  En el Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP el principio de transparencia:";
 choices[53]= new Array();
 choices[53][0] = "El seguimiento de la actividad de los funcionarios aumenta la eficacia de los servicios p&uacute;blicos.";
 choices[53][1] = "La transparencia facilita al ciudadano el acceso a los servicios p&uacute;blicos.";
 choices[53][2] = "Una continua monitorizaci&oacute;n de la actividad, junto a la evaluaci&oacute;n y difusi&oacute;n de resultados incrementa la satisfacci&oacute;n de los ciudadanos.";
 choices[53][3] = "El seguimiento y control de la actividad pol&iacute;tica disminuye las actividades ligadas a la corrupci&oacute;n.";
 answers[53] = choices[53][2];
 units[53] = "28";
 comments[53] = "Id Pregunta: 736. Estrategia TIC";
 preguntaids[53] = 736


//  Id pregunta: 834 Año de creación de pregunta: 2016
 questions[54]= "55)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de los siguientes requisitos:";
 choices[54]= new Array();
 choices[54][0] = "Determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia org&aacute;nica.";
 choices[54][1] = "Delimitaci&oacute;n de su naturaleza, funciones y competencias.";
 choices[54][2] = "Dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento.";
 choices[54][3] = "Todas son correctas.";
 answers[54] = choices[54][3];
 units[54] = "4, 7, 8, 9";
 comments[54] = "Id Pregunta: 834. Ley 40/2015";
 preguntaids[54] = 834


//  Id pregunta: 618 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;A qui&eacute;n est&aacute; destinado principalmente las Pautas de Accesibilidad al Contenido en la Web (WCAG)?";
 choices[55]= new Array();
 choices[55][0] = "A desarrolladores de navegadores web y reproductores multimedia.";
 choices[55][1] = "A desarrolladores de herramientas de autor, como herramientas de creaci&oacute;n de p&aacute;ginas web o de creaci&oacute;n de archivos multimedia.";
 choices[55][2] = "A desarrolladores de herramientas de evaluaci&oacute;n de la accesibilidad web.";
 choices[55][3] = "Todas las respuestas son correctas.";
 answers[55] = choices[55][2];
 units[55] = "42";
 comments[55] = "Id Pregunta: 618. Junta de Extremadura A1 2015";
 preguntaids[55] = 618


//  Id pregunta: 671 Año de creación de pregunta: 2016
 questions[56]= "57)  Un procedimiento administrativo finalizar&aacute;, seg&uacute;n la Ley 39/2015, por:";
 choices[56]= new Array();
 choices[56][0] = "Resoluci&oacute;n.";
 choices[56][1] = "Desistimiento o renuncia.";
 choices[56][2] = "Caducidad.";
 choices[56][3] = "Todas las anteriores.";
 answers[56] = choices[56][3];
 units[56] = "7";
 comments[56] = "Id Pregunta: 671. Art&iacute;culo 84 de la Ley 39/2015";
 preguntaids[56] = 671


//  Id pregunta: 782 Año de creación de pregunta: 2016
 questions[57]= "58)  Sin perjuicio de la responsabilidad disciplinaria en que se pueda incurrir, el incumplimiento de las instrucciones u &oacute;rdenes de servicio:";
 choices[57]= new Array();
 choices[57][0] = "no afecta por s&iacute; solo a la validez de los actos dictados por los &oacute;rganos administrativos";
 choices[57][1] = "supone la invalidez de los actos dictados por los &oacute;rganos administrativos";
 choices[57][2] = "supone la nulidad de los actos dictados por los &oacute;rganos administrativos";
 choices[57][3] = "supone la anulabilidad de los actos dictados por los &oacute;rganos administrativos";
 answers[57] = choices[57][0];
 units[57] = "4, 7, 8, 9";
 comments[57] = "Id Pregunta: 782. Ley 40/2015";
 preguntaids[57] = 782


//  Id pregunta: 401 Año de creación de pregunta: 2016
 questions[58]= "59)  Entre los criterios generales de actuaci&oacute;n los Poderes P&uacute;blicos, tienen:";
 choices[58]= new Array();
 choices[58][0] = "La implantaci&oacute;n de un lenguaje no sexista en el &aacute;mbito administrativo, y en la totalidad de las relaciones sociales, culturales y art&iacute;sticas.";
 choices[58][1] = "La participaci&oacute;n equilibrada de mujeres y hombres en las candidaturas electorales y toma de decisiones.";
 choices[58][2] = "Ambas son correctas.";
 choices[58][3] = "A y B son incorrectas.";
 answers[58] = choices[58][2];
 units[58] = "14";
 comments[58] = "Id Pregunta: 401. POLITICAS DE IGUALDAD";
 preguntaids[58] = 401


//  Id pregunta: 436 Año de creación de pregunta: 2016
 questions[59]= "60)  Respecto a la carpeta ciudadana, se&ntilde;ale la respuesta incorrecta:";
 choices[59]= new Array();
 choices[59][0] = "Se trata de un &aacute;rea personal en la que cualquier ciudadano disponga de toda su informaci&oacute;n custodiada y gestionada por parte de la Administraci&oacute;n General del Estado.";
 choices[59][1] = "Permite comprobar el Estado de los expedientes con distintos organismos.";
 choices[59][2] = "La autenticaci&oacute;n del ciudadano se realiza a trav&eacute;s de certificados digitales.";
 choices[59][3] = "Muestra al ciudadano los Apoderamientos del Registro Electr&oacute;nico de Apoderamientos (REA), tanto para los poderdantes como los apoderados, posibilitando la revocaci&oacute;n y la renuncia respectivamente.";
 answers[59] = choices[59][2];
 units[59] = "43";
 comments[59] = "Id Pregunta: 436. SERVICIOS COMUNES";
 preguntaids[59] = 436


//  Id pregunta: 400 Año de creación de pregunta: 2016
 questions[60]= "61)  Corresponde probar la ausencia de discriminaci&oacute;n en las medidas adoptadas y su proporcionalidad, a:";
 choices[60]= new Array();
 choices[60][0] = "A la persona demandante.";
 choices[60][1] = "A la persona demandada.";
 choices[60][2] = "Al &oacute;rgano judicial.";
 choices[60][3] = "Al &oacute;rgano administrativo.";
 answers[60] = choices[60][1];
 units[60] = "14";
 comments[60] = "Id Pregunta: 400. POLITICAS DE IGUALDAD";
 preguntaids[60] = 400


//  Id pregunta: 46 Año de creación de pregunta: 2016
 questions[61]= "62)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[61]= new Array();
 choices[61][0] = "En un sistema de cifrado de clave asim&eacute;trica la seguridad radica en la transmisi&oacute;n de la clave, mediante canal seguro, entre el emisor y el receptor del mensaje.";
 choices[61][1] = "Las huellas digitales devueltas por una misma funci&oacute;n hash tienen id&eacute;ntica longitud.";
 choices[61][2] = "Para ofrecer un nivel de seguridad equivalente, los sistemas de clave p&uacute;blica requieren menores longitudes de clave que los sistemas sim&eacute;tricos.";
 choices[61][3] = "Se denomina criptograma al procedimiento empleado para cifrar un mensaje.";
 answers[61] = choices[61][1];
 units[61] = "76";
 comments[61] = "Id Pregunta: 46. AGE A1 2015";
 preguntaids[61] = 46


//  Id pregunta: 22 Año de creación de pregunta: 2016
 questions[62]= "63)  La composici&oacute;n inicial del Comit&eacute; Ejecutivo de la Comisi&oacute;n de Estrategia TIC, fijada por la disposici&oacute;n adicional quinta del Real Decreto 806/2014, incluye, entre otros, a:";
 choices[62]= new Array();
 choices[62][0] = "Los responsables de las unidades ministeriales de tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones.";
 choices[62][1] = "La Inspecci&oacute;n General del Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[62][2] = "El titular de la Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 choices[62][3] = "Representantes de las empresas del sector TIC nacional.";
 answers[62] = choices[62][1];
 units[62] = "26";
 comments[62] = "Id Pregunta: 22. AGE A1 2015";
 preguntaids[62] = 22


//  Id pregunta: 347 Año de creación de pregunta: 2016
 questions[63]= "64)  La Comisi&oacute;n Europea est&aacute; integrada por:";
 choices[63]= new Array();
 choices[63][0] = "18 miembros.";
 choices[63][1] = "Ninguna es correcta.";
 choices[63][2] = "22 miembros.";
 choices[63][3] = "21 miembros.";
 answers[63] = choices[63][1];
 units[63] = "5";
 comments[63] = "Id Pregunta: 347. UNION EUROPEA";
 preguntaids[63] = 347


//  Id pregunta: 651 Año de creación de pregunta: 2016
 questions[64]= "65)  Los objetivos que persegu&iacute;a Codd con el modelo relacional, se pueden resumir en:";
 choices[64]= new Array();
 choices[64][0] = "Independencia f&iacute;sica, independencia l&oacute;gica, flexibilidad, uniformidad y sencillez.";
 choices[64][1] = "Independencia f&iacute;sica, independencia l&oacute;gica y uniformidad.";
 choices[64][2] = "Independencia f&iacute;sica, flexibilidad, uniformidad y sencillez.";
 choices[64][3] = "Independencia f&iacute;sica, independencia l&oacute;gica, independencia conceptual, flexibilidad, uniformidad y sencillez.";
 answers[64] = choices[64][0];
 units[64] = "60";
 comments[64] = "Id Pregunta: 651. Junta de Extremadura A1 2015";
 preguntaids[64] = 651


//  Id pregunta: 370 Año de creación de pregunta: 2016
 questions[65]= "66)  Establecer la interpretaci&oacute;n adecuada de los Tratados de la Uni&oacute;n Europea y las normas de derecho derivado es el objeto de:";
 choices[65]= new Array();
 choices[65][0] = "Un recurso de incumplimiento.";
 choices[65][1] = "Recurso de carencia.";
 choices[65][2] = "Cuesti&oacute;n o incidente prejudicial.";
 choices[65][3] = "Ninguna es correcta.";
 answers[65] = choices[65][2];
 units[65] = "5";
 comments[65] = "Id Pregunta: 370. UNION EUROPEA";
 preguntaids[65] = 370


//  Id pregunta: 536 Año de creación de pregunta: 2016
 questions[66]= "67)  Las Administraciones P&uacute;blicas podr&aacute;n habilitar:";
 choices[66]= new Array();
 choices[66][0] = "con car&aacute;cter general a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[66][1] = "con car&aacute;cter general o espec&iacute;fico a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[66][2] = "con car&aacute;cter general o espec&iacute;fico a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[66][3] = "con car&aacute;cter general a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 answers[66] = choices[66][2];
 units[66] = "7";
 comments[66] = "Id Pregunta: 536. LEY 39/2015";
 preguntaids[66] = 536


//  Id pregunta: 354 Año de creación de pregunta: 2016
 questions[67]= "68)  El Tribunal de Justicia Europeo est&aacute; compuesto por:";
 choices[67]= new Array();
 choices[67][0] = "Veinticinco Jueces y nueve Abogados Generales.";
 choices[67][1] = "Veintisiete Jueces y veintisiete Abogados Generales.";
 choices[67][2] = "Veintisiete Jueces y ocho Abogados Generales.";
 choices[67][3] = "Veinticinco Jueces y siete Abogados Generales.";
 answers[67] = choices[67][2];
 units[67] = "5";
 comments[67] = "Id Pregunta: 354. UNION EUROPEA";
 preguntaids[67] = 354


//  Id pregunta: 218 Año de creación de pregunta: 2016
 questions[68]= "69)  Seg&uacute;n el T&iacute;tulo III &quot;De las Cortes Generales&quot; de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras podr&aacute;n:";
 choices[68]= new Array();
 choices[68][0] = "Recibir peticiones individuales y colectivas, siempre por escrito, quedando prohibida la presentaci&oacute;n directa por manifestaciones ciudadanas.";
 choices[68][1] = "Delegar en las Comisiones Legislativas Permanentes la aprobaci&oacute;n de proyectos o proposiciones de ley relativas a cuestiones internacionales.";
 choices[68][2] = "Reunirse en sesi&oacute;n extraordinaria a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 choices[68][3] = "Nombrar conjuntamente Comisiones de Investigaci&oacute;n sobre asuntos de inter&eacute;s p&uacute;blico. Sus conclusiones ser&aacute;n vinculantes para los Tribunales.";
 answers[68] = choices[68][0];
 units[68] = "1";
 comments[68] = "Id Pregunta: 218. CONSTITUCION1978";
 preguntaids[68] = 218


//  Id pregunta: 666 Año de creación de pregunta: 2016
 questions[69]= "70)  De acuerdo a la Ley 39/2015, el formato del expediente administrativo ser&aacute;:";
 choices[69]= new Array();
 choices[69][0] = "Siempre en formato electr&oacute;nico.";
 choices[69][1] = "Siempre en formato papel.";
 choices[69][2] = "Las personas f&iacute;sicas podr&aacute;n elegir en todo momento el formato del expediente administrativo.";
 choices[69][3] = "La ley no regula el formato del expediente.";
 answers[69] = choices[69][0];
 units[69] = "7";
 comments[69] = "Id Pregunta: 666. Art&iacute;culo 70 de la Ley 39/2015";
 preguntaids[69] = 666


//  Id pregunta: 646 Año de creación de pregunta: 2016
 questions[70]= "71)  El Estatuto B&aacute;sico del empleado p&uacute;blico determina como clases de personal los siguientes:";
 choices[70]= new Array();
 choices[70][0] = "Funcionarios de carrera, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 choices[70][1] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal.";
 choices[70][2] = "Funcionarios e interinos.";
 choices[70][3] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 answers[70] = choices[70][3];
 units[70] = "20";
 comments[70] = "Id Pregunta: 646. Junta de Extremadura A1 2015";
 preguntaids[70] = 646


//  Id pregunta: 493 Año de creación de pregunta: 2016
 questions[71]= "72)  Seg&uacute;n Ley 47/2003, de 26 de noviembre, General Presupuestaria, el conjunto de gastos que se considera necesario realizar en el desarrollo de actividades orientadas a la consecuci&oacute;n de determinados objetivos preestablecidos es:";
 choices[71]= new Array();
 choices[71][0] = "Un programa presupuestario.";
 choices[71][1] = "Un concepto presupuestario.";
 choices[71][2] = "Una aplicaci&oacute;n presupuestaria.";
 choices[71][3] = "Un cr&eacute;dito presupuestario.";
 answers[71] = choices[71][0];
 units[71] = "10";
 comments[71] = "Id Pregunta: 493. PRESUPUESTOS GENERALES";
 preguntaids[71] = 493


//  Id pregunta: 701 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Qu&eacute; es la integraci&oacute;n continua?";
 choices[72]= new Array();
 choices[72][0] = "Una pr&aacute;ctica recogida en la metodolog&iacute;a M&eacute;trica V3.";
 choices[72][1] = "Un modelo inform&aacute;tico que consiste en hacer integraciones autom&aacute;ticas de un proyecto lo m&aacute;s a menudo posible para as&iacute; poder detectar fallos cuanto antes.";
 choices[72][2] = "Una metodolog&iacute;a &aacute;gil inspirada en XP y FDD encaminada a realizar un desarrollo hol&iacute;stico en todo el proceso de desarrollo de un sistema de informaci&oacute;n.";
 choices[72][3] = "Ninguna de las anteriores.";
 answers[72] = choices[72][1];
 units[72] = "92";
 comments[72] = "Id Pregunta: 701. INTEGRACION CONTINUA";
 preguntaids[72] = 701


//  Id pregunta: 633 Año de creación de pregunta: 2016
 questions[73]= "74)  La segmentaci&oacute;n es un esquema de asignaci&oacute;n de memoria que:";
 choices[73]= new Array();
 choices[73][0] = "Divide la memoria f&iacute;sica disponible en un n&uacute;mero fijo de particiones cuyo tama&ntilde;o tambi&eacute;n es fijo.";
 choices[73][1] = "Divide la memoria f&iacute;sica disponible en particiones cuyo n&uacute;mero y tama&ntilde;o var&iacute;a para adaptarse a las exigencias los procesos.";
 choices[73][2] = "Divide el espacio de direcciones de cada proceso en bloques que puedan ser situados en &aacute;reas de memoria no contiguas.";
 choices[73][3] = "Divide la memoria en dos particiones: una para el sistema operativo y otra para el proceso que se encuentra en ejecuci&oacute;n.";
 answers[73] = choices[73][2];
 units[73] = "50";
 comments[73] = "Id Pregunta: 633. Junta de Extremadura A1 2015";
 preguntaids[73] = 633


//  Id pregunta: 731 Año de creación de pregunta: 2016
 questions[74]= "75)  Indique cual de los siguientes no forma parte del vocabulario de scrum";
 choices[74]= new Array();
 choices[74][0] = "Burn-up chart";
 choices[74][1] = "Arquitectural Skype";
 choices[74][2] = "Burn-down chart";
 choices[74][3] = "Definition of done";
 answers[74] = choices[74][1];
 units[74] = "34, 84";
 comments[74] = "Id Pregunta: 731. Metodologias &aacute;giles";
 preguntaids[74] = 731


