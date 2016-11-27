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

//  Id pregunta: 239 Año de creación de pregunta: 2016
 questions[0]= "1)  Respecto de las relaciones que constitucionalmente se regulan entre los miembros del Gobierno y las Cortes Generales:";
 choices[0]= new Array();
 choices[0][0] = "La comparecencia de los miembros del Gobierno ante las C&aacute;maras y sus Comisiones puede extenderse tambi&eacute;n a los funcionarios de sus Departamentos.";
 choices[0][1] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo solicitasen las propias C&aacute;maras o sus Comisiones.";
 choices[0][2] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo deciden los miembros del Gobierno.";
 choices[0][3] = "Los funcionarios no comparecer&aacute;n en ning&uacute;n caso.";
 answers[0] = choices[0][0];
 units[0] = "1";
 comments[0] = "Id Pregunta: 239. CONSTITUCION1978";


//  Id pregunta: 101 Año de creación de pregunta: 2016
 questions[1]= "2)  El Teorema de Brewer o Principio CAP recoge las siguientes garant&iacute;as:";
 choices[1]= new Array();
 choices[1][0] = "Consistencia (Consistency), Disponibilidad (Availability) y Persistencia (Persistence)";
 choices[1][1] = "Consistencia (Consistency), Disponibilidad (Availability) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[1][2] = "Consistencia (Consistency), Atomicidad (Atomicity) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[1][3] = "Confidencialidad (Confidentiality), Autenticidad (Authentication) y Protecci&oacute;n (Protection)";
 answers[1] = choices[1][1];
 units[1] = "73";
 comments[1] = "Id Pregunta: 101. ";


//  Id pregunta: 743 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Qu&eacute; dos figuras son novedad de la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n ?";
 choices[2]= new Array();
 choices[2][0] = "Las Sociedades de Responsabilidad Limitada de formaci&oacute;n sucesiva y el Emprendedor de responsabilidad limitada";
 choices[2][1] = "Sociedad Limitada de Formaci&oacute;n Sucesiva y Emprendedor de responsabilidad limitada";
 choices[2][2] = "Sociedad de Responsabilidad Limitada y Emprendedor de responsabilidad Limitada";
 choices[2][3] = "Sociedad de Formaci&oacute;n sucesiva y emprendedor de responsabilidad limitada";
 answers[2] = choices[2][1];
 units[2] = "18, 20";
 comments[2] = "Id Pregunta: 743. Direcci&oacute;n p&uacute;blica";


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


//  Id pregunta: 418 Año de creación de pregunta: 2016
 questions[5]= "6)  Respetar&aacute;n la igualdad entre mujeres y hombres evitando cualquier forma de discriminaci&oacute;n, los medios de comunicaci&oacute;n de titularidad:";
 choices[5]= new Array();
 choices[5][0] = "P&uacute;blica.";
 choices[5][1] = "Privada.";
 choices[5][2] = "A y B son correctas.";
 choices[5][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[5] = choices[5][2];
 units[5] = "14";
 comments[5] = "Id Pregunta: 418. POLITICAS DE IGUALDAD";


//  Id pregunta: 233 Año de creación de pregunta: 2016
 questions[6]= "7)  Seg&uacute;n el Art&iacute;culo 75 de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras pueden delegar en las Comisiones Legislativas Permanentes:";
 choices[6]= new Array();
 choices[6][0] = "La aprobaci&oacute;n de proyectos o proposiciones de ley.";
 choices[6][1] = "La convalidaci&oacute;n de decretos-leyes.";
 choices[6][2] = "La aprobaci&oacute;n de proyectos de leyes de bases.";
 choices[6][3] = "La aprobaci&oacute;n de proyectos de leyes org&aacute;nicas.";
 answers[6] = choices[6][2];
 units[6] = "1";
 comments[6] = "Id Pregunta: 233. CONSTITUCION1978";


//  Id pregunta: 627 Año de creación de pregunta: 2016
 questions[7]= "8)  Seg&uacute;n el Real Decreto 3/2010 sobre el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; organismo es el encargado de actuar ante cualquier agresi&oacute;n recibida en los sistemas de informaci&oacute;n de las Administraciones P&uacute;blicas?";
 choices[7]= new Array();
 choices[7][0] = "El CCN-CERT (Centro Criptol&oacute;gico Nacional&ndash;Computer Emergency Reaction Team).";
 choices[7][1] = "El GDT (Grupo de Delitos Telem&aacute;ticos).";
 choices[7][2] = "La BIT (Brigada de Investigaci&oacute;n Tecnol&oacute;gica).";
 choices[7][3] = "El CCN-STIC (Centro Criptol&oacute;gico Nacional-Seguridad de las Tecnolog&iacute;as de Informaci&oacute;n y Comunicaciones).";
 answers[7] = choices[7][0];
 units[7] = "46";
 comments[7] = "Id Pregunta: 627. Junta de Extremadura A1 2015";


//  Id pregunta: 130 Año de creación de pregunta: 2016
 questions[8]= "9)  Dentro del Pacto Fiscal Europeo de 2012, cu&aacute;l de estos no corresponde a uno de los principales puntos contenidos:";
 choices[8]= new Array();
 choices[8][0] = "La obligaci&oacute;n de mantener el d&eacute;ficit p&uacute;blico por debajo del 3% del PIB.";
 choices[8][1] = "La obligaci&oacute;n de los pa&iacute;ses con una deuda p&uacute;blica superior al 60% del PIB a caer dentro de este l&iacute;mite en 20 a&ntilde;os, a una tasa igual a la vig&eacute;sima parte de la franquicia de cada anualidad.";
 choices[8][2] = "El compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional.";
 choices[8][3] = "El compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,5 % de la PIB y, en aquellos pa&iacute;ses en los que la deuda es inferior al 50 % del PIB, 2%.";
 answers[8] = choices[8][3];
 units[8] = "12";
 comments[8] = "Id Pregunta: 130. Leyes modelo econ&oacute;mico";


//  Id pregunta: 66 Año de creación de pregunta: 2016
 questions[9]= "10)  Para los siguientes tipos de copias de seguridad, indique cu&aacute;l de las siguientes secuencias los ordena de mayor a menor tiempo de restauraci&oacute;n:";
 choices[9]= new Array();
 choices[9][0] = "Incremental, diferencial, completa";
 choices[9][1] = "Completa, incremental, diferencial";
 choices[9][2] = "Completa, diferencial, incremental";
 choices[9][3] = "No hay diferencia en el tiempo de restauraci&oacute;n, encontr&aacute;ndose la diferencia en el espacio de almacenamiento consumido.";
 answers[9] = choices[9][0];
 units[9] = "53";
 comments[9] = "Id Pregunta: 66. AGE A1 2015. Pregunta anulada en el examen real. La opci&oacute;n A dec&iacute;a &quot;Diferencial, incremental, completa&quot;, por lo que ninguna respuesta pod&iacute;a considerarse correcta";


//  Id pregunta: 77 Año de creación de pregunta: 2016
 questions[10]= "11)  Respecto al uso de servicios de firma de documentos electr&oacute;nicos mediante certificados electr&oacute;nicos centralizados, mediante el sistema Cl@ve, indique cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[10]= new Array();
 choices[10][0] = "Para poder acceder al servicio, el usuario deber&aacute; solicitar previa y expresamente la emisi&oacute;n de los certificados electr&oacute;nicos centralizados correspondientes.";
 choices[10][1] = "Los certificados electr&oacute;nicos centralizados ser&aacute;n emitidos con las mismas garant&iacute;as de identificaci&oacute;n del DNI electr&oacute;nico del ciudadano.";
 choices[10][2] = "El acceso al servicio requiere en todo caso que el usuario se haya registrado en Cl@ve y haya activado su Cl@ve permanente.";
 choices[10][3] = "En el momento de la identificaci&oacute;n, se requerir&aacute; la utilizaci&oacute;n de una verificaci&oacute;n de seguridad adicional mediante un c&oacute;digo de un solo uso y validez limitada en el tiempo que se enviar&aacute; al tel&eacute;fono m&oacute;vil del usuario registrado.";
 answers[10] = choices[10][2];
 units[10] = "47";
 comments[10] = "Id Pregunta: 77. AGE A1 2015";


//  Id pregunta: 644 Año de creación de pregunta: 2016
 questions[11]= "12)  El Estatuto B&aacute;sico del empleado p&uacute;blico determina como clases de personal los siguientes:";
 choices[11]= new Array();
 choices[11][0] = "Funcionarios de carrera, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 choices[11][1] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal.";
 choices[11][2] = "Funcionarios e interinos.";
 choices[11][3] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 answers[11] = choices[11][3];
 units[11] = "20";
 comments[11] = "Id Pregunta: 644. Junta de Extremadura A1 2015";


//  Id pregunta: 600 Año de creación de pregunta: 2016
 questions[12]= "13)  Los est&aacute;ndares de la norma IEEE 802.11 se ubican en las capas del modelo OSI:";
 choices[12]= new Array();
 choices[12][0] = "La capa de transmisi&oacute;n y la capa de presentaci&oacute;n.";
 choices[12][1] = "La capa de aplicaci&oacute;n y la capa de gesti&oacute;n.";
 choices[12][2] = "La capa f&iacute;sica y la cada de enlace de datos.";
 choices[12][3] = "La capa de red y la capa de tr&aacute;fico.";
 answers[12] = choices[12][2];
 units[12] = "108";
 comments[12] = "Id Pregunta: 600. Junta de Extremadura A1 2015";


//  Id pregunta: 615 Año de creación de pregunta: 2016
 questions[13]= "14)  El establecimiento de una conexi&oacute;n mediante el protocolo TCP, b&aacute;sicamente se realiza de la siguiente manera:";
 choices[13]= new Array();
 choices[13][0] = "Emisor: env&iacute;a SYN. Receptor: env&iacute;a SYN+ACK. Emisor: env&iacute;a ACK.";
 choices[13][1] = "Emisor: env&iacute;a ACK. Receptor: env&iacute;a ACK+SYN. Emisor: env&iacute;a SYN.";
 choices[13][2] = "Emisor: env&iacute;a SYN. Receptor: env&iacute;a ACK.";
 choices[13][3] = "Emisor: env&iacute;a ACK. Receptor: env&iacute;a SYN.";
 answers[13] = choices[13][0];
 units[13] = "109";
 comments[13] = "Id Pregunta: 615. Junta de Extremadura A1 2015";


//  Id pregunta: 522 Año de creación de pregunta: 2016
 questions[14]= "15)  A los efectos previstos en esta Ley, tendr&aacute;n capacidad de obrar ante las Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[14]= new Array();
 choices[14][0] = "las personas f&iacute;sicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 choices[14][1] = "los menores de edad para el ejercicio y defensa de aquellos de sus derechos e intereses cuya actuaci&oacute;n no est&eacute; permitida por el ordenamiento jur&iacute;dico sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[14][2] = "cuando la Ley as&iacute; lo declare expresamente, los grupos de afectados, las uniones y entidades sin personalidad jur&iacute;dica y los patrimonios independientes o aut&oacute;nomos";
 choices[14][3] = "las personas jur&iacute;dicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 answers[14] = choices[14][1];
 units[14] = "7";
 comments[14] = "Id Pregunta: 522. LEY 39/2015";


//  Id pregunta: 441 Año de creación de pregunta: 2016
 questions[15]= "16)  Se&ntilde;ale la respuesta falsa respecto a Habilit@, Registro de Funcionarios Habilitados:";
 choices[15]= new Array();
 choices[15][0] = "El art&iacute;culo 12.3 de la Ley 39/2015recoge que la Administraci&oacute;n General del Estado, las Comunidades Aut&oacute;nomas y las Entidades Locales mantendr&aacute;n actualizado un registro, u otro sistema equivalente, donde constar&aacute;n los funcionarios habilitados para la identificaci&oacute;n o firma.";
 choices[15][1] = "La Orden HAP/8/2014, de 7 de enero, regula el Registro de funcionarios habilitados para la identificaci&oacute;n y autenticaci&oacute;n de ciudadanos en el &aacute;mbito de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos vinculados o dependientes.";
 choices[15][2] = "En el caso en que el ciudadano no disponga de medios de autenticaci&oacute;n y firma para relacionarse de manera electr&oacute;nica con las Administraciones, la Ley 39/2015 prev&eacute; que, siempre que el ciudadano se identifique y deje constancia de su consentimiento expreso, un funcionario podr&aacute; actuar en su nombre, utilizando el sistema de firma del que disponga para ello.";
 choices[15][3] = "Tambi&eacute;n se establece en la misma Ley 39/2015 que las Administraciones P&uacute;blicas podr&aacute;n realizar copias aut&eacute;nticas de los documentos p&uacute;blicos administrativos o privados mediante funcionario habilitado.";
 answers[15] = choices[15][1];
 units[15] = "43";
 comments[15] = "Id Pregunta: 441. SERVICIOS COMUNES";


//  Id pregunta: 605 Año de creación de pregunta: 2016
 questions[16]= "17)  En ITIL v3, entre los procesos de la &ldquo;Fase del Ciclo de Vida: Dise&ntilde;o del Servicio&rdquo;, est&aacute;n:";
 choices[16]= new Array();
 choices[16][0] = "Gesti&oacute;n del Cat&aacute;logo de Servicios y Gesti&oacute;n de la Cartera de Servicios.";
 choices[16][1] = "Gesti&oacute;n de la Cartera de Servicio y Gesti&oacute;n de la Seguridad de la Informaci&oacute;n.";
 choices[16][2] = "Gesti&oacute;n de la Disponibilidad y Gesti&oacute;n de la Capacidad.";
 choices[16][3] = "Gesti&oacute;n de Suministradores y Gesti&oacute;n de Eventos.";
 answers[16] = choices[16][2];
 units[16] = "101";
 comments[16] = "Id Pregunta: 605. Junta de Extremadura A1 2015";


//  Id pregunta: 718 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Qui&eacute;n es el responsable de transladar la metodolog&iacute;a lean al software?";
 choices[17]= new Array();
 choices[17][0] = "Eric Ries";
 choices[17][1] = "Steve Blank";
 choices[17][2] = "Tom Poppendieck";
 choices[17][3] = "Alexander Osterwalder";
 answers[17] = choices[17][2];
 units[17] = "34";
 comments[17] = "Id Pregunta: 718. Metodologias Lean";


//  Id pregunta: 566 Año de creación de pregunta: 2016
 questions[18]= "19)  Cuando decimos que la inversi&oacute;n extranjera en Espa&ntilde;a tiene un car&aacute;cter proc&iacute;clico, nos referimos a que:";
 choices[18]= new Array();
 choices[18][0] = "Aumenta cuando la econom&iacute;a est&aacute; en crecimiento, y se reduce cuando el pa&iacute;s entra en recesi&oacute;n";
 choices[18][1] = "Se reduce cuando la econom&iacute;a est&aacute; en crecimiento, y aumenta cuando el pa&iacute;s entra en recesi&oacute;n";
 choices[18][2] = "Aumenta cuando el pa&iacute;s entra en recesi&oacute;n, y aumenta cuando la econom&iacute;a est&aacute; en crecimiento";
 choices[18][3] = "Se reduce cuando el pa&iacute;s entra en recesi&oacute;n, y se reduce cuando la econom&iacute;a est&aacute; en crecimiento";
 answers[18] = choices[18][0];
 units[18] = "12";
 comments[18] = "Id Pregunta: 566. Modelo econ&oacute;mico";


//  Id pregunta: 195 Año de creación de pregunta: 2016
 questions[19]= "20)  La potestad reglamentaria constitucionalmente corresponde:";
 choices[19]= new Array();
 choices[19][0] = "Al Gobierno.";
 choices[19][1] = "A las Cortes Generales.";
 choices[19][2] = "Al Poder Judicial.";
 choices[19][3] = "Al Congreso de los Diputados.";
 answers[19] = choices[19][0];
 units[19] = "1";
 comments[19] = "Id Pregunta: 195. CONSTITUCION1978";


//  Id pregunta: 287 Año de creación de pregunta: 2016
 questions[20]= "21)  Se&ntilde;ale cu&aacute;l no es un principio del Plan de acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[20]= new Array();
 choices[20][0] = "Versi&oacute;n digital prioritaria.";
 choices[20][1] = "Principio de &laquo;solo una vez&raquo;.";
 choices[20][2] = "Inclusi&oacute;n y accesibilidad.";
 choices[20][3] = "Apertura y transparencia.";
 answers[20] = choices[20][0];
 units[20] = "5";
 comments[20] = "Id Pregunta: 287. UNION EUROPEA";


//  Id pregunta: 294 Año de creación de pregunta: 2016
 questions[21]= "22)  Indique a qui&eacute;n corresponde la funci&oacute;n de promover el inter&eacute;s general de la Uni&oacute;n Europea y tomar las iniciativas adecuadas con este fin:";
 choices[21]= new Array();
 choices[21][0] = "Al Consejo Europeo.";
 choices[21][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[21][2] = "A la Comisi&oacute;n Europea.";
 choices[21][3] = "Al Parlamento Europeo.";
 answers[21] = choices[21][2];
 units[21] = "5";
 comments[21] = "Id Pregunta: 294. UNION EUROPEA";


//  Id pregunta: 450 Año de creación de pregunta: 2016
 questions[22]= "23)  Los Presupuestos Generales son expresi&oacute;n...";
 choices[22]= new Array();
 choices[22][0] = "Cifrada";
 choices[22][1] = "Conjunta";
 choices[22][2] = "Sistem&aacute;tica";
 choices[22][3] = "Todas son correctas";
 answers[22] = choices[22][3];
 units[22] = "10";
 comments[22] = "Id Pregunta: 450. PRESUPUESTOS GENERALES";


//  Id pregunta: 292 Año de creación de pregunta: 2016
 questions[23]= "24)  Indique la afirmaci&oacute;n correcta relativa al Parlamento Europeo:";
 choices[23]= new Array();
 choices[23][0] = "Se reunir&aacute; con previa convocatoria el segundo martes de marzo.";
 choices[23][1] = "Se reunir&aacute; sin necesidad de previa convocatoria el segundo martes de marzo.";
 choices[23][2] = "Se reunir&aacute; la segunda semana de enero con previa convocatoria.";
 choices[23][3] = "Se reunir&aacute; la tercera semana de enero sin previa convocatoria.";
 answers[23] = choices[23][1];
 units[23] = "5";
 comments[23] = "Id Pregunta: 292. UNION EUROPEA";


//  Id pregunta: 811 Año de creación de pregunta: 2016
 questions[24]= "25)  En las Comunidades Aut&oacute;nomas uniprovinciales en las que no exista Subdelegado la suplencia corresponder&aacute; a:";
 choices[24]= new Array();
 choices[24][0] = "el Secretario General";
 choices[24][1] = "el Subdirector General";
 choices[24][2] = "el Secretario de Estado";
 choices[24][3] = "ninguna es correcta";
 answers[24] = choices[24][0];
 units[24] = "4, 7, 8, 9";
 comments[24] = "Id Pregunta: 811. Ley 40/2015";


//  Id pregunta: 521 Año de creación de pregunta: 2016
 questions[25]= "26)  El sector p&uacute;blico institucional se integra por:";
 choices[25]= new Array();
 choices[25][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho privado vinculados o independientes de las Administraciones P&uacute;blicas";
 choices[25][1] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[25][2] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o independientes de las Administraciones P&uacute;blicas";
 choices[25][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[25] = choices[25][1];
 units[25] = "7";
 comments[25] = "Id Pregunta: 521. LEY 39/2015";


//  Id pregunta: 397 Año de creación de pregunta: 2016
 questions[26]= "27)  Un comportamiento realizado con el prop&oacute;sito o el efecto de intimidar, degradar, ofender o atentar contra la dignidad de una persona en raz&oacute;n de su sexo, se denomina:";
 choices[26]= new Array();
 choices[26][0] = "Acoso sexual.";
 choices[26][1] = "Acoso por raz&oacute;n de sexo.";
 choices[26][2] = "Acoso laboral.";
 choices[26][3] = "Acoso mental.";
 answers[26] = choices[26][1];
 units[26] = "14";
 comments[26] = "Id Pregunta: 397. POLITICAS DE IGUALDAD";


//  Id pregunta: 745 Año de creación de pregunta: 2016
 questions[27]= "28)  Cu&aacute;l de los siguientes NO es uno de los programas del marco general para la mejora de la calidad en la Administraci&oacute;n General del Estado:";
 choices[27]= new Array();
 choices[27][0] = "Programa de an&aacute;lisis de la demanda y de evaluaci&oacute;n de la satisfacci&oacute;n de los usuarios de los servicios.";
 choices[27][1] = "Programa de cartas de servicios";
 choices[27][2] = "Programa para la mejora continua de las organizaciones.";
 choices[27][3] = "Programa de evaluaci&oacute;n de la calidad de las organizaciones.";
 answers[27] = choices[27][2];
 units[27] = "18, 20";
 comments[27] = "Id Pregunta: 745. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 442 Año de creación de pregunta: 2016
 questions[28]= "29)  Sobre la gu&iacute;a de Comunicaci&oacute;n Digital de la AGE, se&ntilde;ale la respuesta falsa:";
 choices[28]= new Array();
 choices[28][0] = "La Gu&iacute;a de Comunicaci&oacute;n Digital para la AGE ofrece un marco de criterios, recomendaciones y buenas pr&aacute;cticas a considerar al crear, generar contenidos o evolucionar sitios web, sedes electr&oacute;nicas o tambi&eacute;n blogs, cuentas o perfiles de redes sociales.";
 choices[28][1] = "Recoge aspectos como la imagen Institucional: uso de los logotipos del Gobierno de Espa&ntilde;a, elementos distintivos de imagen en las redes sociales o la imagen promocional de la administraci&oacute;n electr&oacute;nica.";
 choices[28][2] = "Se divide en tres partes, con fasc&iacute;culos que pueden ser utilizados independientemente seg&uacute;n las necesidades de cada responsable del sitio web.";
 choices[28][3] = "La &laquo;Gu&iacute;a de Comunicaci&oacute;n Digital para la Administraci&oacute;n General del Estado&raquo; que se aprueba mediante la presente Resoluci&oacute;n se aplicar&aacute; al a&ntilde;o siguiente al de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 answers[28] = choices[28][3];
 units[28] = "43";
 comments[28] = "Id Pregunta: 442. SERVICIOS COMUNES";


//  Id pregunta: 55 Año de creación de pregunta: 2016
 questions[29]= "30)  WS-Security contiene especificaciones sobre:";
 choices[29]= new Array();
 choices[29][0] = "La publicaci&oacute;n, localizaci&oacute;n y enlazado de los Servicios Web.";
 choices[29][1] = "La forma de conseguir integridad y seguridad en los mensajes SOAP.";
 choices[29][2] = "Las pol&iacute;ticas en materia de seguridad aplicables a un sistema de informaci&oacute;n.";
 choices[29][3] = "El env&iacute;o de datagramas sin establecimiento previo de una conexi&oacute;n.";
 answers[29] = choices[29][1];
 units[29] = "119";
 comments[29] = "Id Pregunta: 55. AGE A1 2015";


//  Id pregunta: 700 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Cu&aacute;l de los siguientes NO es un repositorio de c&oacute;digo?";
 choices[30]= new Array();
 choices[30][0] = "CVS";
 choices[30][1] = "SVN";
 choices[30][2] = "Team Foundation Server";
 choices[30][3] = "Apache Tomcat";
 answers[30] = choices[30][3];
 units[30] = "92";
 comments[30] = "Id Pregunta: 700. INTEGRACION CONTINUA";


//  Id pregunta: 667 Año de creación de pregunta: 2016
 questions[31]= "32)  Se&ntilde;ale la opci&oacute;n falsa respecto a la instrucci&oacute;n del procedimiento definida en la Ley 39/2015:";
 choices[31]= new Array();
 choices[31][0] = "Los interesados podr&aacute;n, en cualquier momento del procedimiento anterior al tr&aacute;mite de audiencia, aducir alegaciones y aportar documentos u otros elementos de juicio.";
 choices[31][1] = "El instructor del procedimiento s&oacute;lo podr&aacute; rechazar las pruebas propuestas por los interesados cuando sean manifiestamente improcedentes o innecesarias, mediante resoluci&oacute;n motivada.";
 choices[31][2] = "Salvo disposici&oacute;n expresa en contrario, los informes ser&aacute;n preceptivos y vinculantes.";
 choices[31][3] = "Se podr&aacute; prescindir del tr&aacute;mite de audiencia cuando no figuren en el procedimiento ni sean tenidos en cuenta en la resoluci&oacute;n otros hechos ni otras alegaciones y pruebas que las aducidas por el interesado.";
 answers[31] = choices[31][2];
 units[31] = "7";
 comments[31] = "Id Pregunta: 667. Cap&iacute;tulo IV, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 737 Año de creación de pregunta: 2016
 questions[32]= "33)  En el Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE, las administraciones p&uacute;blicas y las instituciones p&uacute;blicas de la Uni&oacute;n Europea deben ser abiertas, eficaces e integradoras en el a&ntilde;o:";
 choices[32]= new Array();
 choices[32][0] = "2025";
 choices[32][1] = "2023";
 choices[32][2] = "2030";
 choices[32][3] = "2020";
 answers[32] = choices[32][3];
 units[32] = "28";
 comments[32] = "Id Pregunta: 737. Estrategia TIC";


//  Id pregunta: 472 Año de creación de pregunta: 2016
 questions[33]= "34)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la modalidad de auditor&iacute;a cuyo objeto consiste en la verificaci&oacute;n selectiva de la adecuaci&oacute;n a la legalidad de la gesti&oacute;n presupuestaria, de contrataci&oacute;n, personal, ingresos y gesti&oacute;n de subvenciones, as&iacute; como de cualquier otro aspecto de la actividad econ&oacute;mico financiero de las entidades auditadas se denomina:";
 choices[33]= new Array();
 choices[33][0] = "Auditor&iacute;a de sistemas y procedimientos de gesti&oacute;n econ&oacute;mica y financiera.";
 choices[33][1] = "Auditor&iacute;a operativa.";
 choices[33][2] = "Auditor&iacute;a de cumplimiento.";
 choices[33][3] = "Auditor&iacute;a de econom&iacute;a, eficacia y eficiencia.";
 answers[33] = choices[33][2];
 units[33] = "10";
 comments[33] = "Id Pregunta: 472. PRESUPUESTOS GENERALES";


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


//  Id pregunta: 824 Año de creación de pregunta: 2016
 questions[35]= "36)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[35]= new Array();
 choices[35][0] = "Los &oacute;rganos de las diferentes Administraciones P&uacute;blicas podr&aacute;n delegar el ejercicio de las competencias que tengan atribuidas en otros &oacute;rganos de la misma Administraci&oacute;n, aun cuando no sean jer&aacute;rquicamente dependientes, o en los Organismos p&uacute;blicos o Entidades de Derecho P&uacute;blico vinculados o dependientes de aqu&eacute;llas.";
 choices[35][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado, la delegaci&oacute;n de competencias deber&aacute; ser aprobada previamente por el &oacute;rgano ministerial de quien dependa el &oacute;rgano delegante y en el caso de los Organismos p&uacute;blicos o Entidades vinculados o dependientes, por el &oacute;rgano m&aacute;ximo de direcci&oacute;n, de acuerdo con sus normas de creaci&oacute;n. Cuando se trate de &oacute;rganos no relacionados jer&aacute;rquicamente ser&aacute; necesaria la aprobaci&oacute;n previa del superior com&uacute;n si ambos pertenecen al mismo Ministerio, o del &oacute;rgano superior de quien dependa el &oacute;rgano delegado, si el delegante y el delegado pertenecen a diferentes Ministerios.";
 choices[35][2] = "Asimismo, los &oacute;rganos de la Administraci&oacute;n General del Estado podr&aacute;n delegar el ejercicio de sus competencias propias en sus Organismos p&uacute;blicos y Entidades vinculados o dependientes, cuando resulte conveniente para alcanzar los fines que tengan asignados y mejorar la eficacia de su gesti&oacute;n. La delegaci&oacute;n deber&aacute; ser previamente aprobada por los &oacute;rganos de los que dependan el &oacute;rgano delegante y el &oacute;rgano delegado, o aceptada por este &uacute;ltimo cuando sea el &oacute;rgano m&aacute;ximo de direcci&oacute;n del Organismo p&uacute;blico o Entidad vinculado o dependiente.";
 choices[35][3] = "Todas son correctas.";
 answers[35] = choices[35][3];
 units[35] = "4, 7, 8, 9";
 comments[35] = "Id Pregunta: 824. Ley 40/2015";


//  Id pregunta: 722 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Cu&aacute;l es la principal desventaja de sprints m&aacute;s largos?";
 choices[36]= new Array();
 choices[36][0] = "Permite reaccionar al equipo mejor ante imprevistos";
 choices[36][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[36][2] = "Se reduce el n&uacute;mero de reuniones de sprint";
 choices[36][3] = "Se puede desarrollar algo diferente a lo requerido y obtener el feedback del cliente m&aacute;s tarde.";
 answers[36] = choices[36][3];
 units[36] = "34, 84";
 comments[36] = "Id Pregunta: 722. Metodologias &aacute;giles";


//  Id pregunta: 155 Año de creación de pregunta: 2016
 questions[37]= "38)  A efectos del c&oacute;mputo de plazo fijado en d&iacute;as h&aacute;biles, y en lo que se refiere al cumplimiento de plazos por los interesados, la presentaci&oacute;n de documentos en un registro electr&oacute;nico un d&iacute;a inh&aacute;bil:";
 choices[37]= new Array();
 choices[37][0] = "se entender&aacute; realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil.";
 choices[37][1] = "se entender&aacute;, en todo caso, realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior";
 choices[37][2] = "se entender&aacute; realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil";
 choices[37][3] = "se entender&aacute;, en todo caso, realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente";
 answers[37] = choices[37][2];
 units[37] = "7";
 comments[37] = "Id Pregunta: 155. Ley 39/2015, Art&iacute;culo 31";


//  Id pregunta: 616 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;A qui&eacute;n est&aacute; destinado principalmente las Pautas de Accesibilidad al Contenido en la Web (WCAG)?";
 choices[38]= new Array();
 choices[38][0] = "A desarrolladores de navegadores web y reproductores multimedia.";
 choices[38][1] = "A desarrolladores de herramientas de autor, como herramientas de creaci&oacute;n de p&aacute;ginas web o de creaci&oacute;n de archivos multimedia.";
 choices[38][2] = "A desarrolladores de herramientas de evaluaci&oacute;n de la accesibilidad web.";
 choices[38][3] = "Todas las respuestas son correctas.";
 answers[38] = choices[38][2];
 units[38] = "42";
 comments[38] = "Id Pregunta: 616. Junta de Extremadura A1 2015";


//  Id pregunta: 326 Año de creación de pregunta: 2016
 questions[39]= "40)  La Mesa del Parlamento estar&aacute; compuesta por:";
 choices[39]= new Array();
 choices[39][0] = "El Presidente, doce Vicepresidentes y los Cuestores.";
 choices[39][1] = "El Presidente, diez Vicepresidentes y los Cuestores.";
 choices[39][2] = "El Presidente, dos Vicepresidentes y los Cuestores.";
 choices[39][3] = "El Presidente, catorce Vicepresidentes y los Cuestores.";
 answers[39] = choices[39][3];
 units[39] = "5";
 comments[39] = "Id Pregunta: 326. UNION EUROPEA";


//  Id pregunta: 69 Año de creación de pregunta: 2016
 questions[40]= "41)  Los contratos que celebren los poderes adjudicadores se perfeccionan con su:";
 choices[40]= new Array();
 choices[40][0] = "Ejecuci&oacute;n";
 choices[40][1] = "Adjudicaci&oacute;n";
 choices[40][2] = "Licitaci&oacute;n";
 choices[40][3] = "Formalizaci&oacute;n";
 answers[40] = choices[40][3];
 units[40] = "37";
 comments[40] = "Id Pregunta: 69. AGE A1 2015";


//  Id pregunta: 21 Año de creación de pregunta: 2016
 questions[41]= "42)  En ITIL v3, &iquest;cu&aacute;l de los siguientes procesos forma parte del Dise&ntilde;o del Servicio?";
 choices[41]= new Array();
 choices[41][0] = "Gesti&oacute;n de la disponibilidad";
 choices[41][1] = "Gesti&oacute;n de la demanda";
 choices[41][2] = "Gesti&oacute;n de entregas";
 choices[41][3] = "Gesti&oacute;n de la configuraci&oacute;n";
 answers[41] = choices[41][0];
 units[41] = "101";
 comments[41] = "Id Pregunta: 21. AGE A1 2015";


//  Id pregunta: 261 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Qui&eacute;n representa al Consejo General del Poder Judicial?";
 choices[42]= new Array();
 choices[42][0] = "La Comisi&oacute;n Permanente.";
 choices[42][1] = "El Presidente.";
 choices[42][2] = "El Pleno.";
 choices[42][3] = "El Vicepresidente.";
 answers[42] = choices[42][3];
 units[42] = "1";
 comments[42] = "Id Pregunta: 261. CONSTITUCION1978";


//  Id pregunta: 802 Año de creación de pregunta: 2016
 questions[43]= "44)  Las Delegaciones del Gobierno est&aacute;n adscritas org&aacute;nicamente a:";
 choices[43]= new Array();
 choices[43][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[43][1] = "el Consejo de Gobierno de la Comunidad Aut&oacute;noma";
 choices[43][2] = "el Ministerio del Interior";
 choices[43][3] = "la Administraci&oacute;n General del Estado";
 answers[43] = choices[43][0];
 units[43] = "4, 7, 8, 9";
 comments[43] = "Id Pregunta: 802. Ley 40/2015";


//  Id pregunta: 698 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Qu&eacute; es SonarQube?";
 choices[44]= new Array();
 choices[44][0] = "Una m&eacute;trica de calidad orientada a estandarizar la evaluaci&oacute;n cualitativa del c&oacute;digo fuente.";
 choices[44][1] = "Una plataforma Open Source de inspecci&oacute;n continua de la calidad del c&oacute;digo.";
 choices[44][2] = "Una herramienta propietaria para la integraci&oacute;n continua, integrada en Apache Jenkins.";
 choices[44][3] = "Una herramienta multiplataforma para la evaluaci&oacute;n de la calidad en el c&oacute;digo desarrollada en VisualBasic 6.";
 answers[44] = choices[44][2];
 units[44] = "92";
 comments[44] = "Id Pregunta: 698. INTEGRACION CONTINUA";


//  Id pregunta: 637 Año de creación de pregunta: 2016
 questions[45]= "46)  En el sistema operativo Unix/Linux, el comando id:";
 choices[45]= new Array();
 choices[45][0] = "Muestra el n&uacute;mero de identificaci&oacute;n y el grupo al que pertenece el usuario.";
 choices[45][1] = "El comando id no existe.";
 choices[45][2] = "Muestra el n&uacute;mero de procesos lanzados por el usuario.";
 choices[45][3] = "Muestra las hebras y las identificaciones de los archivos abiertos por el usuario.";
 answers[45] = choices[45][0];
 units[45] = "57";
 comments[45] = "Id Pregunta: 637. Junta de Extremadura A1 2015";


//  Id pregunta: 573 Año de creación de pregunta: 2016
 questions[46]= "47)  Si queremos dise&ntilde;ar un enlace de 10 Gbps. &iquest;qu&eacute; medio de transmisi&oacute;n nos permite alcanzar la m&aacute;xima longitud del enlace?";
 choices[46]= new Array();
 choices[46][0] = "Cableado de cobre de categor&iacute;a 7.";
 choices[46][1] = "Fibra &oacute;ptica monomodo tipo OS2.";
 choices[46][2] = "Fibra &oacute;ptica multimodo tipo OM3.";
 choices[46][3] = "Fibra &oacute;ptica multimodo tipo OM4.";
 answers[46] = choices[46][1];
 units[46] = "106";
 comments[46] = "Id Pregunta: 573. Tema 106. TAI 2016.";


//  Id pregunta: 244 Año de creación de pregunta: 2016
 questions[47]= "48)  La Constituci&oacute;n Espa&ntilde;ola, en el art&iacute;culo 9 del T&iacute;tulo Preliminar, garantiza el principio de:";
 choices[47]= new Array();
 choices[47][0] = "Retroactividad de las disposiciones sancionadoras no favorables de derechos individuales.";
 choices[47][1] = "Publicidad de las normas.";
 choices[47][2] = "Defensa jur&iacute;dica ante los tribunales.";
 choices[47][3] = "Coordinaci&oacute;n normativa.";
 answers[47] = choices[47][2];
 units[47] = "1";
 comments[47] = "Id Pregunta: 244. CONSTITUCION1978";


//  Id pregunta: 288 Año de creación de pregunta: 2016
 questions[48]= "49)  Cu&aacute;l no es uno de los pilares que cimientan el Plan de Acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[48]= new Array();
 choices[48][0] = "Configuraci&oacute;n de un marco que habilite la movilidad transfronteriza mediante los servicios p&uacute;blicos digitales;";
 choices[48][1] = "Facilitar la interacci&oacute;n digital con ciudadanos y empresas mediante AA.PP. abiertas y flexibles que impliquen a los actores interesados en el dise&ntilde;o de pol&iacute;ticas y servicios de una forma colaborativa;";
 choices[48][2] = "Sociedad digital integradora, donde los ciudadanos tengan las cualificaciones adecuadas para aprovechar las oportunidades ofrecidas por Internet.";
 choices[48][3] = "Puesta a disposici&oacute;n de habilitadores y facilitadores claves, servicios y activos reutilizables.";
 answers[48] = choices[48][2];
 units[48] = "5";
 comments[48] = "Id Pregunta: 288. UNION EUROPEA";


//  Id pregunta: 379 Año de creación de pregunta: 2016
 questions[49]= "50)  Seg&uacute;n recoge la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, &iquest;con qu&eacute; frecuencia debe elaborar el Gobierno un informe sobre el conjunto de actuaciones en relaci&oacute;n con le efectividad del principio de igualdad entre mujeres y hombres?";
 choices[49]= new Array();
 choices[49][0] = "Anual.";
 choices[49][1] = "Semestral.";
 choices[49][2] = "Seg&uacute;n se determine reglamentariamente.";
 choices[49][3] = "Bienal.";
 answers[49] = choices[49][2];
 units[49] = "14";
 comments[49] = "Id Pregunta: 379. POLITICAS DE IGUALDAD";


//  Id pregunta: 388 Año de creación de pregunta: 2016
 questions[50]= "51)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[50]= new Array();
 choices[50][0] = "Indirecta.";
 choices[50][1] = "Directa.";
 choices[50][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[50][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[50] = choices[50][1];
 units[50] = "14";
 comments[50] = "Id Pregunta: 388. POLITICAS DE IGUALDAD";


//  Id pregunta: 564 Año de creación de pregunta: 2016
 questions[51]= "52)  La &quot;Poblaci&oacute;n Activa&quot; que tiene en cuenta la Encuesta de Poblaci&oacute;n Activa (EPA), incluye:";
 choices[51]= new Array();
 choices[51][0] = "Los ocupados y los parados activos";
 choices[51][1] = "S&oacute;lo los ocupados";
 choices[51][2] = "Los ocupados y los inactivos";
 choices[51][3] = "Los que han trabajado en los &uacute;ltimos 6 meses";
 answers[51] = choices[51][0];
 units[51] = "12";
 comments[51] = "Id Pregunta: 564. Modelo econ&oacute;mico";


//  Id pregunta: 704 Año de creación de pregunta: 2016
 questions[52]= "53)  Se&ntilde;ale la afirmaci&oacute;n verdadera con respecto a la entrada en vigor de la Ley 19/2013 de Transparencia, Acceso a la Informaci&oacute;n P&uacute;blica y Buen Gobierno:";
 choices[52]= new Array();
 choices[52][0] = "Todas las disposiciones entraron en vigor al d&iacute;a siguiente de su publicaci&oacute;n en el BOE";
 choices[52][1] = "La entrada en vigor de todas sus disposiciones fue al a&ntilde;o de su publicaci&oacute;n en el BOE";
 choices[52][2] = "Los &oacute;rganos de las Comunidades Aut&oacute;nomas y Entidades Locales dispusieron de un plazo m&aacute;ximo de dos a&ntilde;os tras publicaci&oacute;n en BOE para adaptarse a las obligaciones contenidas en esta Ley.";
 choices[52][3] = "Algunas disposiciones de la ley entraron en vigor a los 3 a&ntilde;os de su publicaci&oacute;n en el BOE";
 answers[52] = choices[52][2];
 units[52] = "22";
 comments[52] = "Id Pregunta: 704. Ley de transparencia";


//  Id pregunta: 748 Año de creación de pregunta: 2016
 questions[53]= "54)  Son rasgos fundamentales del sistema burocr&aacute;tico:";
 choices[53]= new Array();
 choices[53][0] = "La racionalidad en la divisi&oacute;n del trabajo";
 choices[53][1] = "La eficiencia en el uso de los recursos p&uacute;blicos";
 choices[53][2] = "La competencia t&eacute;cnica y la meritocracia";
 choices[53][3] = "a) y c) son rasgos fundamentales del sistema burocr&aacute;tico";
 answers[53] = choices[53][3];
 units[53] = "18, 20";
 comments[53] = "Id Pregunta: 748. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 171 Año de creación de pregunta: 2016
 questions[54]= "55)  Se&ntilde;ale la respuesta FALSA. Entre los objetivos de ISA2 se encuentra:";
 choices[54]= new Array();
 choices[54][0] = "desarrollar, mantener y promover un enfoque hol&iacute;stico hacia la interoperabilidad en la Uni&oacute;n para eliminar la fragmentaci&oacute;n en el panorama de la interoperabilidad en la Uni&oacute;n";
 choices[54][1] = "facilitar la reutilizaci&oacute;n de las soluciones de interoperabilidad por parte de las administraciones p&uacute;blicas europeas.";
 choices[54][2] = "identificar, crear y explotar soluciones de interoperabilidad que faciliten la ejecuci&oacute;n de las pol&iacute;ticas y actividades de la Uni&oacute;n";
 choices[54][3] = "eliminar la interacci&oacute;n electr&oacute;nica transfronteriza tanto entre las administraciones p&uacute;blicas europeas fomentando una cultura de ciberseguridad europea";
 answers[54] = choices[54][3];
 units[54] = "19";
 comments[54] = "Id Pregunta: 171. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Diciembre/Noticia-2015-12-09-Publicada-la-Decision-ISA2-continuidad-al-esfuerzo-asegurar-interoperabilidad-entre-AAPP-europeas.html#.WCnm1WrhDIU";


//  Id pregunta: 0 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Cu&aacute;l de los siguientes NO es un objetivo del Plan de Transformaci&oacute;n Digital de la AGE?";
 choices[55]= new Array();
 choices[55][0] = "Consolidar el tejido productivo nacional apoyando el efectivo despliegue de la Sociedad de la Informaci&oacute;n.";
 choices[55][1] = "Conseguir una mayor eficiencia en los servicios TIC comunes de la Administraci&oacute;n.";
 choices[55][2] = "Implantar una gesti&oacute;n corporativa inteligente de la informaci&oacute;n y los datos.";
 choices[55][3] = "Adoptar una estrategia corporativa de seguridad y usabilidad.";
 answers[55] = choices[55][0];
 units[55] = "26";
 comments[55] = "Id Pregunta: 0. AGE A1 2015";


//  Id pregunta: 664 Año de creación de pregunta: 2016
 questions[56]= "57)  De acuerdo a la Ley 39/2015, el formato del expediente administrativo ser&aacute;:";
 choices[56]= new Array();
 choices[56][0] = "Siempre en formato electr&oacute;nico.";
 choices[56][1] = "Siempre en formato papel.";
 choices[56][2] = "Las personas f&iacute;sicas podr&aacute;n elegir en todo momento el formato del expediente administrativo.";
 choices[56][3] = "La ley no regula el formato del expediente.";
 answers[56] = choices[56][0];
 units[56] = "7";
 comments[56] = "Id Pregunta: 664. Art&iacute;culo 70 de la Ley 39/2015";


//  Id pregunta: 174 Año de creación de pregunta: 2016
 questions[57]= "58)  De conformidad con la Constituci&oacute;n Espa&ntilde;ola, &iquest; cu&aacute;l de los siguientes derechos y libertades es susceptible de tutela a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional?";
 choices[57]= new Array();
 choices[57][0] = "El derecho a la propiedad privada.";
 choices[57][1] = "El derecho de asociaci&oacute;n.";
 choices[57][2] = "El derecho de fundaci&oacute;n.";
 choices[57][3] = "El derecho de negociaci&oacute;n colectiva.";
 answers[57] = choices[57][1];
 units[57] = "1";
 comments[57] = "Id Pregunta: 174. CONSTITUCION1978";


//  Id pregunta: 319 Año de creación de pregunta: 2016
 questions[58]= "59)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[58]= new Array();
 choices[58][0] = "El Presidente de la Comisi&oacute;n, con la aprobaci&oacute;n de la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[58][1] = "La Comisi&oacute;n por mayor&iacute;a de dos tercios de sus miembros puede exigir la dimisi&oacute;n de un Comisario.";
 choices[58][2] = "El Presidente, sin necesidad de contar con la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[58][3] = "&Uacute;nicamente el Presidente del Consejo puede exigir la dimisi&oacute;n de un Comisario.";
 answers[58] = choices[58][0];
 units[58] = "5";
 comments[58] = "Id Pregunta: 319. UNION EUROPEA";


//  Id pregunta: 786 Año de creación de pregunta: 2016
 questions[59]= "60)  Sin perjuicio de lo previsto en la Ley 3/2015, de 30 de marzo, reguladora del ejercicio del alto cargo de la Administraci&oacute;n General del Estado, los titulares de los &oacute;rganos superiores y directivos son nombrados, atendiendo a criterios de competencia profesional y experiencia, en la forma establecida en esta Ley, siendo de aplicaci&oacute;n al desempe&ntilde;o de sus funciones:";
 choices[59]= new Array();
 choices[59][0] = "la responsabilidad profesional, personal y directa por la gesti&oacute;n desarrollada";
 choices[59][1] = "la sujeci&oacute;n al control y evaluaci&oacute;n de la gesti&oacute;n por el &oacute;rgano superior o directivo competente, sin perjuicio del control establecido por la Ley General Presupuestaria";
 choices[59][2] = "a y b son correctas";
 choices[59][3] = "a y b son incorrectas";
 answers[59] = choices[59][2];
 units[59] = "4, 7, 8, 9";
 comments[59] = "Id Pregunta: 786. Ley 40/2015";


//  Id pregunta: 544 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Cu&aacute;l es el &oacute;rgano superior de gobernanza TIC en la Administraci&oacute;n General del Estado?";
 choices[60]= new Array();
 choices[60][0] = "El Comit&eacute; de Direcci&oacute;n TIC";
 choices[60][1] = "El Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[60][2] = "La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[60][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[60] = choices[60][3];
 units[60] = "26";
 comments[60] = "Id Pregunta: 544. Gobernanza TIC";


//  Id pregunta: 448 Año de creación de pregunta: 2016
 questions[61]= "62)  La partida presupuestaria es equivalente a...";
 choices[61]= new Array();
 choices[61][0] = "El sujeto que realiza el gasto";
 choices[61][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[61][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[61][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[61] = choices[61][3];
 units[61] = "10";
 comments[61] = "Id Pregunta: 448. PRESUPUESTOS GENERALES";


//  Id pregunta: 251 Año de creación de pregunta: 2016
 questions[62]= "63)  La Justicia, en Espa&ntilde;a, emana del/de la:";
 choices[62]= new Array();
 choices[62][0] = "Rey.";
 choices[62][1] = "&Oacute;rgano jurisdiccional que act&uacute;a en cada caso.";
 choices[62][2] = "Constituci&oacute;n.";
 choices[62][3] = "Pueblo.";
 answers[62] = choices[62][2];
 units[62] = "1";
 comments[62] = "Id Pregunta: 251. CONSTITUCION1978";


//  Id pregunta: 394 Año de creación de pregunta: 2016
 questions[63]= "64)  La situaci&oacute;n en que una disposici&oacute;n, criterio o pr&aacute;ctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, se denomina:";
 choices[63]= new Array();
 choices[63][0] = "Discriminaci&oacute;n indirecta.";
 choices[63][1] = "Discriminaci&oacute;n directa.";
 choices[63][2] = "Discriminaci&oacute;n por raz&oacute;n de sexo.";
 choices[63][3] = "Discriminaci&oacute;n abusiva.";
 answers[63] = choices[63][0];
 units[63] = "14";
 comments[63] = "Id Pregunta: 394. POLITICAS DE IGUALDAD";


//  Id pregunta: 295 Año de creación de pregunta: 2016
 questions[64]= "65)  La sede del Tribunal de Cuentas Europeo se encuentra en:";
 choices[64]= new Array();
 choices[64][0] = "Estrasburgo.";
 choices[64][1] = "Bruselas.";
 choices[64][2] = "Luxemburgo.";
 choices[64][3] = "Holanda.";
 answers[64] = choices[64][2];
 units[64] = "5";
 comments[64] = "Id Pregunta: 295. UNION EUROPEA";


//  Id pregunta: 529 Año de creación de pregunta: 2016
 questions[65]= "66)  Se presumir&aacute; la representaci&oacute;n para:";
 choices[65]= new Array();
 choices[65][0] = "formular solicitudes";
 choices[65][1] = "los actos y gestiones de mero tr&aacute;mite";
 choices[65][2] = "presentar declaraciones responsables o comunicaciones";
 choices[65][3] = "interponer recursos, desistir de acciones y renunciar a derechos en nombre de otra persona";
 answers[65] = choices[65][1];
 units[65] = "7";
 comments[65] = "Id Pregunta: 529. LEY 39/2015";


//  Id pregunta: 358 Año de creación de pregunta: 2016
 questions[66]= "67)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones no es correcta:";
 choices[66]= new Array();
 choices[66][0] = "a)La Uni&oacute;n Europea no es a&uacute;n una estructura acabada, sino m&aacute;s bien un sistema de gestaci&oacute;n cuya apariencia definitiva a&uacute;n no puede preverse.";
 choices[66][1] = "b) La Uni&oacute;n Europea no es un proceso de integraci&oacute;n sino una Organizaci&oacute;n Internacional sui generis.";
 choices[66][2] = "c) Todas las respuestas son correctas.";
 choices[66][3] = "d)La Uni&oacute;n Europea s&oacute;lo tiene en com&uacute;n con las organizaciones tradicionales de derecho internacional que tambi&eacute;n han sido creadas mediante un tratado internacional.";
 answers[66] = choices[66][1];
 units[66] = "5";
 comments[66] = "Id Pregunta: 358. UNION EUROPEA";


//  Id pregunta: 306 Año de creación de pregunta: 2016
 questions[67]= "68)  Componen la Comisi&oacute;n Europea:";
 choices[67]= new Array();
 choices[67][0] = "Un Comisario por cada Estado miembro.";
 choices[67][1] = "Uno o dos Comisarios por cada Estado miembro, dependiendo de las caracter&iacute;sticas del Estado.";
 choices[67][2] = "Dos Comisarios por cada Estado miembro.";
 choices[67][3] = "Los Ministros de Asuntos Exteriores de cada Estado miembro.";
 answers[67] = choices[67][0];
 units[67] = "5";
 comments[67] = "Id Pregunta: 306. UNION EUROPEA";


//  Id pregunta: 500 Año de creación de pregunta: 2016
 questions[68]= "69)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el programa plurianual de la Seguridad Social se elaborar&aacute; por:";
 choices[68]= new Array();
 choices[68][0] = "El presidente de las Cortes Generales.";
 choices[68][1] = "El Presidente del Gobierno.";
 choices[68][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[68][3] = "El Ministro de Trabajo y Asuntos Sociales.";
 answers[68] = choices[68][3];
 units[68] = "10";
 comments[68] = "Id Pregunta: 500. PRESUPUESTOS GENERALES";


//  Id pregunta: 641 Año de creación de pregunta: 2016
 questions[69]= "70)  La estructura de un Directorio Activo se basa en los siguientes conceptos:";
 choices[69]= new Array();
 choices[69][0] = "Directorios, Unidades f&iacute;sicas y Usuarios.";
 choices[69][1] = "Dominio, Unidad Organizativa, Grupos y Objetos.";
 choices[69][2] = "Unidades f&iacute;sicas, Unidades l&oacute;gicas y Directorios.";
 choices[69][3] = "Ficheros, Directorios, Particiones y Unidades.";
 answers[69] = choices[69][1];
 units[69] = "58";
 comments[69] = "Id Pregunta: 641. Junta de Extremadura A1 2015";


//  Id pregunta: 328 Año de creación de pregunta: 2016
 questions[70]= "71)  El principal &oacute;rgano decisorio de la Comunidad Europea es:";
 choices[70]= new Array();
 choices[70][0] = "El Presidente del Consejo Europeo.";
 choices[70][1] = "La Comisi&oacute;n.";
 choices[70][2] = "El Consejo.";
 choices[70][3] = "El Parlamento Europeo.";
 answers[70] = choices[70][2];
 units[70] = "5";
 comments[70] = "Id Pregunta: 328. UNION EUROPEA";


//  Id pregunta: 317 Año de creación de pregunta: 2016
 questions[71]= "72)  Habr&aacute; qu&oacute;rum en el Parlamento Europeo, cuando se encuentre reunida en el sal&oacute;n de sesiones:";
 choices[71]= new Array();
 choices[71][0] = "La cuarta parte de los Diputados que integran el Parlamento.";
 choices[71][1] = "La quinta parte de los Diputados que integran el Parlamento.";
 choices[71][2] = "La mitad de los Diputados que integran el Parlamento.";
 choices[71][3] = "La tercera parte de los Diputados que integran el Parlamento.";
 answers[71] = choices[71][3];
 units[71] = "5";
 comments[71] = "Id Pregunta: 317. UNION EUROPEA";


//  Id pregunta: 413 Año de creación de pregunta: 2016
 questions[72]= "73)  Gozar&aacute;n de los derecho derivados del principio de igualdad de trato y de la prohibici&oacute;n de discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[72]= new Array();
 choices[72][0] = "La mujeres.";
 choices[72][1] = "Lo hombres.";
 choices[72][2] = "Todas las personas.";
 choices[72][3] = "Las mujeres y ni&ntilde;os menores de 16 a&ntilde;os.";
 answers[72] = choices[72][2];
 units[72] = "14";
 comments[72] = "Id Pregunta: 413. POLITICAS DE IGUALDAD";


//  Id pregunta: 685 Año de creación de pregunta: 2016
 questions[73]= "74)  Se&ntilde;ale el plazo en que deben ser auditados los prestadores cualificados de servicios de confianza";
 choices[73]= new Array();
 choices[73][0] = "Al menos cada 12 meses";
 choices[73][1] = "El Reglamento no trata la supervisi&oacute;n de los prestadores cualificados de servicios de confianza, dejando tal cuesti&oacute;n a la regulaci&oacute;n nacional de cada Estado miembro";
 choices[73][2] = "Al menos cada 18 meses";
 choices[73][3] = "Al menos cada 24 meses";
 answers[73] = choices[73][3];
 units[73] = "77";
 comments[73] = "Id Pregunta: 685. Art&iacute;culo 20 del Reglamento 910/2014";


//  Id pregunta: 631 Año de creación de pregunta: 2016
 questions[74]= "75)  La segmentaci&oacute;n es un esquema de asignaci&oacute;n de memoria que:";
 choices[74]= new Array();
 choices[74][0] = "Divide la memoria f&iacute;sica disponible en un n&uacute;mero fijo de particiones cuyo tama&ntilde;o tambi&eacute;n es fijo.";
 choices[74][1] = "Divide la memoria f&iacute;sica disponible en particiones cuyo n&uacute;mero y tama&ntilde;o var&iacute;a para adaptarse a las exigencias los procesos.";
 choices[74][2] = "Divide el espacio de direcciones de cada proceso en bloques que puedan ser situados en &aacute;reas de memoria no contiguas.";
 choices[74][3] = "Divide la memoria en dos particiones: una para el sistema operativo y otra para el proceso que se encuentra en ejecuci&oacute;n.";
 answers[74] = choices[74][2];
 units[74] = "50";
 comments[74] = "Id Pregunta: 631. Junta de Extremadura A1 2015";


