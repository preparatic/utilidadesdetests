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

//  Id pregunta: 257 Año de creación de pregunta: 2016
 questions[0]= "1)  El Art&iacute;culo 98 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Gobierno Espa&ntilde;ol se compone de:";
 choices[0]= new Array();
 choices[0][0] = "El Presidente y su gabinete.";
 choices[0][1] = "El Presidente y sus Ministros.";
 choices[0][2] = "El Rey y el Presidente.";
 choices[0][3] = "El Presidente, de los Vicepresidentes en su caso, de los Ministros y dem&aacute;s miembros que establezca la ley.";
 answers[0] = choices[0][2];
 units[0] = "1";
 comments[0] = "Id Pregunta: 257. CONSTITUCION1978";
 preguntaids[0] = 257


//  Id pregunta: 270 Año de creación de pregunta: 2016
 questions[1]= "2)  La tutela de los derechos fundamentales y libertades p&uacute;blicas reconocidos en la secci&oacute;n primera del cap&iacute;tulo II del T&iacute;tulo I de la Constituci&oacute;n espa&ntilde;ola podr&aacute; recabarse por cualquier ciudadano:";
 choices[1]= new Array();
 choices[1][0] = "S&oacute;lo ante el Tribunal Constitucional de acuerdo con lo previsto en el Art&iacute;culo 161.1.a), referente al recurso de Inconstitucionalidad.";
 choices[1][1] = "S&oacute;lo ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad.";
 choices[1][2] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, ante el Tribunal Constitucional a trav&eacute;s del recurso de inconstitucionalidad.";
 choices[1][3] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional.";
 answers[1] = choices[1][0];
 units[1] = "1";
 comments[1] = "Id Pregunta: 270. CONSTITUCION1978";
 preguntaids[1] = 270


//  Id pregunta: 26 Año de creación de pregunta: 2016
 questions[2]= "3)  Usted, como directivo TIC de la AGE, decide crear un portal web, con una direcci&oacute;n electr&oacute;nica nueva, con el objetivo de informar al ciudadano sobre determinados aspectos relacionados con su unidad. &iquest;Cu&aacute;l de los siguientes tipos de certificado utilizar&iacute;a para identificar a los servidores de su portal informativo?";
 choices[2]= new Array();
 choices[2][0] = "Sello electr&oacute;nico";
 choices[2][1] = "Sede electr&oacute;nica";
 choices[2][2] = "Servidor seguro (SSL/TLS)";
 choices[2][3] = "Empleado p&uacute;blico";
 answers[2] = choices[2][2];
 units[2] = "7";
 comments[2] = "Id Pregunta: 26. AGE A1 2015";
 preguntaids[2] = 26


//  Id pregunta: 470 Año de creación de pregunta: 2016
 questions[3]= "4)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, elaborar la documentaci&oacute;n estad&iacute;stico-contable de car&aacute;cter oficial del Sistema de la Seguridad Social es una competencia de:";
 choices[3]= new Array();
 choices[3][0] = "El Ministerio de Hacienda.";
 choices[3][1] = "El Ministerio de Econom&iacute;a.";
 choices[3][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[3][3] = "Ninguna de las respuestas es correcta.";
 answers[3] = choices[3][2];
 units[3] = "10";
 comments[3] = "Id Pregunta: 470. PRESUPUESTOS GENERALES";
 preguntaids[3] = 470


//  Id pregunta: 106 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;En qu&eacute; consiste el paradigma MapReduce?";
 choices[4]= new Array();
 choices[4][0] = "Map toma un conjunto de datos y lo convierte en otro conjunto donde los elementos individuales son separados en tuplas (pares clave/valor)";
 choices[4][1] = "Reduce obtiene la salida de map como datos de entrada y combina tuplas en un conjunto m&aacute;s peque&ntilde;o de las mismas";
 choices[4][2] = "A) y B) son verdaderas";
 choices[4][3] = "A) es la definici&oacute;n del procedimiento intermedio Shuffle";
 answers[4] = choices[4][2];
 units[4] = "73";
 comments[4] = "Id Pregunta: 106. ";
 preguntaids[4] = 106


//  Id pregunta: 714 Año de creación de pregunta: 2016
 questions[5]= "6)  Seg&uacute;n la Ley 19/2013 de transparencia, las unidades de informaci&oacute;n en el &aacute;mbito de la AGE (se&ntilde;ale la falsa):";
 choices[5]= new Array();
 choices[5][0] = "Son unidades especializadas que se encargan de recibir y dar tramitaci&oacute;n a las solicitudes de acceso a la informaci&oacute;n.";
 choices[5][1] = "Son unidades especializadas que aseguran la disponibilidad en la respectiva p&aacute;gina web o sede electr&oacute;nica de la informaci&oacute;n cuyo acceso se solicita con m&aacute;s frecuencia.";
 choices[5][2] = "La Oficina de Transparencia y Acceso a la Informaci&oacute;n P&uacute;blica es la unidad de informaci&oacute;n del Ministerio de la Presidencia.";
 choices[5][3] = "Son unidades especializadas en elaborar legislaci&oacute;n en el &aacute;mbito de la transparencia p&uacute;blica.";
 answers[5] = choices[5][3];
 units[5] = "22";
 comments[5] = "Id Pregunta: 714. Ley de transparencia";
 preguntaids[5] = 714


//  Id pregunta: 440 Año de creación de pregunta: 2016
 questions[6]= "7)  Respecto al Sistema de Informaci&oacute;n Administrativa, se&ntilde;ale la respuesta falsa:";
 choices[6]= new Array();
 choices[6][0] = "Contiene la relaci&oacute;n de procedimientos y servicios de la AGE, y de todas las administraciones participantes.";
 choices[6][1] = "Cumple para la AGE el requisito establecido en el art&iacute;culo 9 del Esquema Nacional de Interoperabilidad, que obliga a las Administraciones p&uacute;blicas a mantener actualizado un Inventario de Informaci&oacute;n Administrativa.";
 choices[6][2] = "SIA est&aacute; dise&ntilde;ado para permitir la administraci&oacute;n distribuida y la actualizaci&oacute;n corresponsable por todas las Administraciones participantes, mediante una aplicaci&oacute;n web.";
 choices[6][3] = "Los usuarios son gestionados por una red de responsables de cada Departamento.";
 answers[6] = choices[6][2];
 units[6] = "43";
 comments[6] = "Id Pregunta: 440. SERVICIOS COMUNES";
 preguntaids[6] = 440


//  Id pregunta: 28 Año de creación de pregunta: 2016
 questions[7]= "8)  En UNIX, la llamada &ldquo;FORK&rdquo;:";
 choices[7]= new Array();
 choices[7][0] = "Controla el tiempo de ejecuci&oacute;n de un proceso.";
 choices[7][1] = "Env&iacute;a una se&ntilde;al al proceso especificado.";
 choices[7][2] = "Crea una copia del proceso que hace la llamada.";
 choices[7][3] = "Elimina el mapa de memoria del proceso que hace la llamada.";
 answers[7] = choices[7][2];
 units[7] = "57";
 comments[7] = "Id Pregunta: 28. AGE A1 2015";
 preguntaids[7] = 28


//  Id pregunta: 95 Año de creación de pregunta: 2016
 questions[8]= "9)  Bajo el paradigma de la Programaci&oacute;n Orientada a Objetos, indique cu&aacute;l de las siguientes proposiciones es falsa:";
 choices[8]= new Array();
 choices[8][0] = "Los objetos se generan a partir de la instanciaci&oacute;n de una clase.";
 choices[8][1] = "El polimorfismo es la propiedad por la que es posible enviar mensajes sint&aacute;cticamente iguales a objetos de tipos distintos.";
 choices[8][2] = "Una clase abstracta puede ser extendida mediante el mecanismo de herencia.";
 choices[8][3] = "La implementaci&oacute;n de una interfaz no se considera polimorfismo.";
 answers[8] = choices[8][3];
 units[8] = "89";
 comments[8] = "Id Pregunta: 95. AGE A1 2015";
 preguntaids[8] = 95


//  Id pregunta: 528 Año de creación de pregunta: 2016
 questions[9]= "10)  Los menores incapacitados, cuando la extensi&oacute;n de la incapacitaci&oacute;n afecte al ejercicio y defensa de los derechos o intereses de que se trate:";
 choices[9]= new Array();
 choices[9][0] = "tienen capacidad de obrar limitada";
 choices[9][1] = "pueden actuar sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[9][2] = "no tienen capacidad de obrar";
 choices[9][3] = "ninguna es correcta";
 answers[9] = choices[9][2];
 units[9] = "7";
 comments[9] = "Id Pregunta: 528. LEY 39/2015";
 preguntaids[9] = 528


//  Id pregunta: 335 Año de creación de pregunta: 2016
 questions[10]= "11)  Un diputado del Parlamento Europeo, de nacionalidad espa&ntilde;ola, &iquest;puede ser tambi&eacute;n Diputado en el Congreso espa&ntilde;ol?:";
 choices[10]= new Array();
 choices[10][0] = "Son compatibles, lo que no puede compatibilizar es ser funcionario de cualquiera de las Instituciones Europeas.";
 choices[10][1] = "Son compatibles, lo que no puede compatibilizar es ser miembro del Tribunal de Justicia de Luxemburgo.";
 choices[10][2] = "Son incompatibles ambas actas de diputado.";
 choices[10][3] = "Son perfectamente compatibles ambas actas de diputado.";
 answers[10] = choices[10][2];
 units[10] = "5";
 comments[10] = "Id Pregunta: 335. UNION EUROPEA";
 preguntaids[10] = 335


//  Id pregunta: 206 Año de creación de pregunta: 2016
 questions[11]= "12)  La alteraci&oacute;n de los l&iacute;mites de una provincia debe ser aprobada por:";
 choices[11]= new Array();
 choices[11][0] = "El Gobierno.";
 choices[11][1] = "La Asamblea de la Comunidad Aut&oacute;noma a la que pertenezca la provincia.";
 choices[11][2] = "Las Cortes Generales, mediante ley org&aacute;nica.";
 choices[11][3] = "Una Comisi&oacute;n formada por los senadores designados en esa provincia.";
 answers[11] = choices[11][2];
 units[11] = "1";
 comments[11] = "Id Pregunta: 206. CONSTITUCION1978";
 preguntaids[11] = 206


//  Id pregunta: 30 Año de creación de pregunta: 2016
 questions[12]= "13)  El sistema operativo OS X El Capit&aacute;n incluye un conjunto de servicios de red para compartir archivos entre Mac y PC, &iquest;cu&aacute;l es el protocolo por defecto que emplea OS X El Capit&aacute;n?";
 choices[12]= new Array();
 choices[12][0] = "SMB3";
 choices[12][1] = "AFP";
 choices[12][2] = "NFS";
 choices[12][3] = "FTP";
 answers[12] = choices[12][0];
 units[12] = "59";
 comments[12] = "Id Pregunta: 30. AGE A1 2015";
 preguntaids[12] = 30


//  Id pregunta: 130 Año de creación de pregunta: 2016
 questions[13]= "14)  Dentro del Pacto Fiscal Europeo de 2012, cu&aacute;l de estos no corresponde a uno de los principales puntos contenidos:";
 choices[13]= new Array();
 choices[13][0] = "La obligaci&oacute;n de mantener el d&eacute;ficit p&uacute;blico por debajo del 3% del PIB.";
 choices[13][1] = "La obligaci&oacute;n de los pa&iacute;ses con una deuda p&uacute;blica superior al 60% del PIB a caer dentro de este l&iacute;mite en 20 a&ntilde;os, a una tasa igual a la vig&eacute;sima parte de la franquicia de cada anualidad.";
 choices[13][2] = "El compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional.";
 choices[13][3] = "El compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,5 % de la PIB y, en aquellos pa&iacute;ses en los que la deuda es inferior al 50 % del PIB, 2%.";
 answers[13] = choices[13][3];
 units[13] = "12";
 comments[13] = "Id Pregunta: 130. Leyes modelo econ&oacute;mico";
 preguntaids[13] = 130


//  Id pregunta: 623 Año de creación de pregunta: 2016
 questions[14]= "15)  Seg&uacute;n el paradigma de Orientaci&oacute;n a Objetos, la herencia posibilita que:";
 choices[14]= new Array();
 choices[14][0] = "Cualquier cambio en los datos y operaciones contenidas dentro de una superclase es heredado inmediatamente por todas las subclases que se derivan de la superclase.";
 choices[14][1] = "Cualquier cambio en las operaciones y datos de la superclase no se refleja en todas las subclases.";
 choices[14][2] = "Cualquier cambio en una de las subclases que se heredan de la superclase se refleja en sus clases hermanas.";
 choices[14][3] = "En el paradigma de Orientaci&oacute;n a Objetos no existe la herencia.";
 answers[14] = choices[14][0];
 units[14] = "89";
 comments[14] = "Id Pregunta: 623. Junta de Extremadura A1 2015";
 preguntaids[14] = 623


//  Id pregunta: 505 Año de creación de pregunta: 2016
 questions[15]= "16)  Respecto a la Ley Org&aacute;nica 2/2012 se&ntilde;ale la respuesta falsa:";
 choices[15]= new Array();
 choices[15][0] = "La elaboraci&oacute;n, aprobaci&oacute;n y ejecuci&oacute;n de los Presupuestos y dem&aacute;s actuaciones que afecten a los gastos o ingresos de las Administraciones P&uacute;blicas y dem&aacute;s entidades que forman parte del sector p&uacute;blico se someter&aacute; al principio de estabilidad presupuestaria.";
 choices[15][1] = "Ninguna Administraci&oacute;n P&uacute;blica podr&aacute; incurrir en d&eacute;ficit estructural, definido como d&eacute;ficit ajustado del ciclo, neto de medidas excepcionales y temporales.";
 choices[15][2] = "Excepcionalmente, el Estado y las Comunidades Aut&oacute;nomas podr&aacute;n incurrir en d&eacute;ficit estructural en caso de cat&aacute;strofes naturales, recesi&oacute;n econ&oacute;mica grave o situaciones de emergencia extraordinaria que escapen al control de las Administraciones P&uacute;blicas y perjudiquen considerablemente su situaci&oacute;n financiera o su sostenibilidad econ&oacute;mica o social.";
 choices[15][3] = "Las Corporaciones Locales deber&aacute;n mantener una posici&oacute;n de equilibrio presupuestario.";
 answers[15] = choices[15][3];
 units[15] = "10";
 comments[15] = "Id Pregunta: 505. PRESUPUESTOS GENERALES";
 preguntaids[15] = 505


//  Id pregunta: 741 Año de creación de pregunta: 2016
 questions[16]= "17)  En relaci&oacute;n al principio rector Orientaci&oacute;n al usuario del servicio del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[16]= new Array();
 choices[16][0] = "Es necesario redefinir los servicios empezando por el lado del usuario, ya sea un ciudadano o un empleado p&uacute;blico, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y seguridad.";
 choices[16][1] = "Es necesario redefinir los servicios empezando por el lado del ciudadano, ya sea un funcionario o una persona f&iacute;sica, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y transparencia.";
 choices[16][2] = "Se requiere modernizar los servicios p&uacute;blicos empezando por el lado del ciudadano, ya sea un funcionario o una persona f&iacute;sica, con una vocaci&oacute;n de transparencia, usabilidad, simplicidad y accesibilidad.";
 choices[16][3] = "Es necesario redefinir los servicios empezando por el lado del usuario, ya sea un ciudadano o un empleado p&uacute;blico, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y transparencia.";
 answers[16] = choices[16][0];
 units[16] = "28";
 comments[16] = "Id Pregunta: 741. Estrategia TIC";
 preguntaids[16] = 741


//  Id pregunta: 144 Año de creación de pregunta: 2016
 questions[17]= "18)  Sobre el recurso de reposici&oacute;n:";
 choices[17]= new Array();
 choices[17][0] = "Cabe interponerlo ante los actos administrativos que pongan fin a la v&iacute;a administrativa";
 choices[17][1] = "Es obligatorio interponerlo antes de impugnar un acto administrativo ante el orden jurisdiccional contencioso-administrativo";
 choices[17][2] = "Ha desaparecido en la Ley 39/2015";
 choices[17][3] = "El &oacute;rgano competente para resolverlo es el superior jer&aacute;rquico al que dict&oacute; el acto administrativo a recurrir";
 answers[17] = choices[17][0];
 units[17] = "8";
 comments[17] = "Id Pregunta: 144. Ley 39/2015, Art&iacute;culo 123";
 preguntaids[17] = 144


//  Id pregunta: 40 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Cu&aacute;l de los siguientes NO es un gestor de contenidos?";
 choices[18]= new Array();
 choices[18][0] = "Drupal";
 choices[18][1] = "Cassandra";
 choices[18][2] = "Wordpress";
 choices[18][3] = "OpenCMS";
 answers[18] = choices[18][1];
 units[18] = "99";
 comments[18] = "Id Pregunta: 40. AGE A1 2015";
 preguntaids[18] = 40


//  Id pregunta: 411 Año de creación de pregunta: 2016
 questions[19]= "20)  Es objeto de la Ley de Igualdad efectiva de mujeres y hombres:";
 choices[19]= new Array();
 choices[19][0] = "Elaborar medidas de acci&oacute;n positiva.";
 choices[19][1] = "Hacer efectivo el derecho de igualdad de trato y de oportunidades entre mujeres y hombre.";
 choices[19][2] = "Ninguna es correcta.";
 choices[19][3] = "A y B son correctas.";
 answers[19] = choices[19][1];
 units[19] = "14";
 comments[19] = "Id Pregunta: 411. POLITICAS DE IGUALDAD";
 preguntaids[19] = 411


//  Id pregunta: 542 Año de creación de pregunta: 2016
 questions[20]= "21)  Respecto a los poderes que se inscriban en los registros electr&oacute;nicos generales y particulares de apoderamientos pueden ser:";
 choices[20]= new Array();
 choices[20][0] = "un poder general para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa y ante cualquier Administraci&oacute;n";
 choices[20][1] = "un poder para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa ante una Administraci&oacute;n u Organismo concreto";
 choices[20][2] = "un poder para que el apoderado pueda actuar en nombre del poderdante &uacute;nicamente para la realizaci&oacute;n de determinados tr&aacute;mites especificados en el poder";
 choices[20][3] = "todas son correctas";
 answers[20] = choices[20][3];
 units[20] = "7";
 comments[20] = "Id Pregunta: 542. LEY 39/2015";
 preguntaids[20] = 542


//  Id pregunta: 74 Año de creación de pregunta: 2016
 questions[21]= "22)  Se&ntilde;ale la opci&oacute;n incorrecta respecto a SMTP:";
 choices[21]= new Array();
 choices[21][0] = "SMTP es capaz de transportar correo a trav&eacute;s de m&uacute;ltiples redes: entre nodos conectados por TCP en Internet, entre nodos conectados en una Intranet TCP/IP aislados por un cortafuegos, o entre nodos en un entorno LAN o WAN que est&eacute;n usando un protocolo de nivel de transporte distinto a TCP.";
 choices[21][1] = "Usando SMTP, un proceso puede transferir correo a otro proceso en la misma red o a otra red mediante un proceso gateway accesible en las dos redes.";
 choices[21][2] = "En SMTP un mensaje de correo puede pasar por una serie de nodos gateway intermedios en su camino desde el emisor al receptor &uacute;ltimo, sirvi&eacute;ndose de mecanismos para decidir el siguiente salto como el sistema de resoluci&oacute;n de nombres de dominio de Internet.";
 choices[21][3] = "En SMTP la transferencia de mensaje ocurre siempre en una conexi&oacute;n &uacute;nica entre el emisor SMTP y el receptor final SMTP.";
 answers[21] = choices[21][3];
 units[21] = "106";
 comments[21] = "Id Pregunta: 74. AGE A1 2015";
 preguntaids[21] = 74


//  Id pregunta: 164 Año de creación de pregunta: 2016
 questions[22]= "23)  En el contexto del Mercado &Uacute;nico Digital, &iquest;qu&eacute; significa la eliminaci&oacute;n del geobloqueo?";
 choices[22]= new Array();
 choices[22][0] = "Introducir medidas destinadas a mejorar la transparencia en materia de precios y la vigilancia regulatoria del mercado transfronterizo de paqueter&iacute;a";
 choices[22][1] = "Eliminar la denegaci&oacute;n de acceso a sitios internet basados en otro pa&iacute;s de la UE o que se cobren precios distintos en funci&oacute;n de la localizaci&oacute;n de un cliente";
 choices[22][2] = "Promover medidas para permitir a los vendedores de bienes f&iacute;sicos beneficiarse del registro y pago electr&oacute;nicos &uacute;nicos y de la introducci&oacute;n de un umbral com&uacute;n del IVA que ayude a las nuevas empresas innovadoras a trabajar en l&iacute;nea";
 choices[22][3] = "Presentar una iniciativa europea sobre computaci&oacute;n en nube, incluidos los servicios de certificaci&oacute;n de la nube";
 answers[22] = choices[22][1];
 units[22] = "19";
 comments[22] = "Id Pregunta: 164. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/ A: &quot;mejora de la paqueter&iacute;a transfronteriza&quot;; C: &quot;Reducci&oacute;n de la burocracia relacionada con el IVA&quot;; D: &quot;Construir una econom&iacute;a de los datos&quot;";
 preguntaids[22] = 164


//  Id pregunta: 381 Año de creación de pregunta: 2016
 questions[23]= "24)  La ley Org&aacute;nica 3/2007 para la igualdad efectiva entre hombres y mujeres en el &aacute;mbito de la Sociedad de la Informaci&oacute;n, obliga al Gobierno:";
 choices[23]= new Array();
 choices[23][0] = "A promover los contenidos creados por mujeres en el &aacute;mbito de la Sociedad de la Informaci&oacute;n";
 choices[23][1] = "A proteger los contenidos creados por mujeres n el &aacute;mbito de la Sociedad de la Informaci&oacute;n con medidas especiales de propiedad intelectual.";
 choices[23][2] = "A dise&ntilde;ar webs con contenido espec&iacute;fico femenino.";
 choices[23][3] = "A incorporar, en las convocatorias de empleo p&uacute;blico, igual n&uacute;mero de funcionarios que de funcionarias.";
 answers[23] = choices[23][0];
 units[23] = "14";
 comments[23] = "Id Pregunta: 381. POLITICAS DE IGUALDAD";
 preguntaids[23] = 381


//  Id pregunta: 509 Año de creación de pregunta: 2016
 questions[24]= "25)  De acuerdo con el art&iacute;culo 32 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, en el supuesto de que la liquidaci&oacute;n presupuestaria del Estado se sit&uacute;e en super&aacute;vit, &eacute;ste debe destinarse a:";
 choices[24]= new Array();
 choices[24][0] = "Reducir el gasto p&uacute;blico.";
 choices[24][1] = "Reducir el d&eacute;ficit presupuestario.";
 choices[24][2] = "Reducir el endeudamiento neto.";
 choices[24][3] = "Al Fondo de Contingencia.";
 answers[24] = choices[24][2];
 units[24] = "10";
 comments[24] = "Id Pregunta: 509. PRESUPUESTOS GENERALES";
 preguntaids[24] = 509


//  Id pregunta: 366 Año de creación de pregunta: 2016
 questions[25]= "26)  Para constituir un Grupo en el Parlamento Europeo es necesario al menos:";
 choices[25]= new Array();
 choices[25][0] = "20 parlamentarios.";
 choices[25][1] = "29 parlamentarios.";
 choices[25][2] = "18 parlamentarios.";
 choices[25][3] = "23 parlamentarios.";
 answers[25] = choices[25][0];
 units[25] = "5";
 comments[25] = "Id Pregunta: 366. UNION EUROPEA";
 preguntaids[25] = 366


//  Id pregunta: 517 Año de creación de pregunta: 2016
 questions[26]= "27)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[26]= new Array();
 choices[26][0] = "quedar&aacute;n sujetas a lo dispuesto en todas las normas de esta Ley";
 choices[26][1] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[26][2] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo cuando ejerzan potestades administrativas";
 choices[26][3] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley";
 answers[26] = choices[26][1];
 units[26] = "7";
 comments[26] = "Id Pregunta: 517. LEY 39/2015";
 preguntaids[26] = 517


//  Id pregunta: 268 Año de creación de pregunta: 2016
 questions[27]= "28)  Las Disposiciones Adicionales en la Constituci&oacute;n Espa&ntilde;ola son:";
 choices[27]= new Array();
 choices[27][0] = "Cuatro.";
 choices[27][1] = "Una.";
 choices[27][2] = "Cinco.";
 choices[27][3] = "Nueve.";
 answers[27] = choices[27][2];
 units[27] = "1";
 comments[27] = "Id Pregunta: 268. CONSTITUCION1978";
 preguntaids[27] = 268


//  Id pregunta: 631 Año de creación de pregunta: 2016
 questions[28]= "29)  Seg&uacute;n la Ley de Protecci&oacute;n de Datos de Car&aacute;cter Personal, no podr&aacute;n realizarse transferencias de datos de car&aacute;cter personal a pa&iacute;ses que no proporcionen un nivel de protecci&oacute;n equiparable al de esta Ley. &iquest;Qui&eacute;n se encarga de evaluar el nivel adecuado de protecci&oacute;n que ofrece el pa&iacute;s de destino de los datos?";
 choices[28]= new Array();
 choices[28][0] = "El Ministerio de Asuntos Exteriores junto con el Ministerio de Justicia.";
 choices[28][1] = "El responsable de la custodia de los datos enviados.";
 choices[28][2] = "La Agencia Europea de Cooperaci&oacute;n.";
 choices[28][3] = "La Agencia de Protecci&oacute;n de Datos.";
 answers[28] = choices[28][3];
 units[28] = "35";
 comments[28] = "Id Pregunta: 631. Junta de Extremadura A1 2015";
 preguntaids[28] = 631


//  Id pregunta: 218 Año de creación de pregunta: 2016
 questions[29]= "30)  Seg&uacute;n el T&iacute;tulo III &quot;De las Cortes Generales&quot; de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras podr&aacute;n:";
 choices[29]= new Array();
 choices[29][0] = "Recibir peticiones individuales y colectivas, siempre por escrito, quedando prohibida la presentaci&oacute;n directa por manifestaciones ciudadanas.";
 choices[29][1] = "Delegar en las Comisiones Legislativas Permanentes la aprobaci&oacute;n de proyectos o proposiciones de ley relativas a cuestiones internacionales.";
 choices[29][2] = "Reunirse en sesi&oacute;n extraordinaria a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 choices[29][3] = "Nombrar conjuntamente Comisiones de Investigaci&oacute;n sobre asuntos de inter&eacute;s p&uacute;blico. Sus conclusiones ser&aacute;n vinculantes para los Tribunales.";
 answers[29] = choices[29][0];
 units[29] = "1";
 comments[29] = "Id Pregunta: 218. CONSTITUCION1978";
 preguntaids[29] = 218


//  Id pregunta: 1 Año de creación de pregunta: 2016
 questions[30]= "31)  Los medios y servicios compartidos, establecidos en el Real Decreto 806/2014 dentro del modelo de gobernanza en el &aacute;mbito de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones de la Administraci&oacute;n General del Estado, son tales que:";
 choices[30]= new Array();
 choices[30][0] = "Su declaraci&oacute;n presupone que el servicio se encuentra en producci&oacute;n, listo para la adhesi&oacute;n de las diferentes unidades departamentales.";
 choices[30][1] = "Dado su car&aacute;cter obligatorio y sustitutivo, no se permite acordar excepciones por razones econ&oacute;micas, t&eacute;cnicas o de oportunidad sobrevenidas.";
 choices[30][2] = "Su declaraci&oacute;n establece la habilitaci&oacute;n para el desarrollo de las medidas t&eacute;cnicas, organizativas, presupuestarias y normativas.";
 choices[30][3] = "Su provisi&oacute;n se realiza directa y exclusivamente por medio de la Direcci&oacute;n General de Administraci&oacute;n Digital";
 answers[30] = choices[30][2];
 units[30] = "26";
 comments[30] = "Id Pregunta: 1. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";
 preguntaids[30] = 1


//  Id pregunta: 217 Año de creación de pregunta: 2016
 questions[31]= "32)  Tal y como marca la Constituci&oacute;n Espa&ntilde;ola de 1978, en el caso de los refer&eacute;ndums consultivos:";
 choices[31]= new Array();
 choices[31][0] = "Su propuesta parte del Presidente del Gobierno, ha de ser autorizada por el Congreso de los Diputados.";
 choices[31][1] = "Son propuestos por el Consejo de Ministros, siendo autorizados previamente por el Presidente del Gobierno.";
 choices[31][2] = "Son refrendados por el Rey.";
 choices[31][3] = "Son convocados por el Presidente del Gobierno.";
 answers[31] = choices[31][0];
 units[31] = "1";
 comments[31] = "Id Pregunta: 217. CONSTITUCION1978";
 preguntaids[31] = 217


//  Id pregunta: 805 Año de creación de pregunta: 2016
 questions[32]= "33)  Los Secretarios generales t&eacute;cnicos tienen a todos los efectos la categor&iacute;a de:";
 choices[32]= new Array();
 choices[32][0] = "Director General";
 choices[32][1] = "Secretario general";
 choices[32][2] = "Subdirector general";
 choices[32][3] = "Subsecretario";
 answers[32] = choices[32][0];
 units[32] = "4, 7, 8, 9";
 comments[32] = "Id Pregunta: 805. Ley 40/2015";
 preguntaids[32] = 805


//  Id pregunta: 183 Año de creación de pregunta: 2016
 questions[33]= "34)  Seg&uacute;n el Art&iacute;culo 113 de la Constituci&oacute;n Espa&ntilde;ola, la moci&oacute;n de censura deber&aacute; ser propuesta:";
 choices[33]= new Array();
 choices[33][0] = "al menos por 50 Diputados.";
 choices[33][1] = "al menos por la d&eacute;cima parte de los Diputados.";
 choices[33][2] = "por la Mesa del Congreso de los Diputados.";
 choices[33][3] = "al menos por dos grupos pol&iacute;ticos del Congreso de los Diputados.";
 answers[33] = choices[33][1];
 units[33] = "1";
 comments[33] = "Id Pregunta: 183. CONSTITUCION1978";
 preguntaids[33] = 183


//  Id pregunta: 708 Año de creación de pregunta: 2016
 questions[34]= "35)  El Portal de Transparencia de la Administraci&oacute;n General del Estado depende del:";
 choices[34]= new Array();
 choices[34][0] = "Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[34][1] = "Ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[34][2] = "Ministerio de la Presidencia";
 choices[34][3] = "Ministerio de Fomento";
 answers[34] = choices[34][2];
 units[34] = "22";
 comments[34] = "Id Pregunta: 708. Portal de Transparencia";
 preguntaids[34] = 708


//  Id pregunta: 785 Año de creación de pregunta: 2016
 questions[35]= "36)  Las competencias en materia de organizaci&oacute;n administrativa, r&eacute;gimen de personal, procedimientos e inspecci&oacute;n de servicios, no atribuidas espec&iacute;ficamente conforme a una Ley a ning&uacute;n otro &oacute;rgano de la Administraci&oacute;n General del Estado, ni al Gobierno, corresponder&aacute;n a:";
 choices[35]= new Array();
 choices[35][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[35][1] = "el Consejo de Estado";
 choices[35][2] = "el Congreso";
 choices[35][3] = "las Cortes Generales";
 answers[35] = choices[35][0];
 units[35] = "4, 7, 8, 9";
 comments[35] = "Id Pregunta: 785. Ley 40/2015";
 preguntaids[35] = 785


//  Id pregunta: 720 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Qui&eacute;n es el responsable de transladar la metodolog&iacute;a lean al software?";
 choices[36]= new Array();
 choices[36][0] = "Eric Ries";
 choices[36][1] = "Steve Blank";
 choices[36][2] = "Tom Poppendieck";
 choices[36][3] = "Alexander Osterwalder";
 answers[36] = choices[36][2];
 units[36] = "34";
 comments[36] = "Id Pregunta: 720. Metodologias Lean";
 preguntaids[36] = 720


//  Id pregunta: 288 Año de creación de pregunta: 2016
 questions[37]= "38)  Cu&aacute;l no es uno de los pilares que cimientan el Plan de Acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[37]= new Array();
 choices[37][0] = "Configuraci&oacute;n de un marco que habilite la movilidad transfronteriza mediante los servicios p&uacute;blicos digitales;";
 choices[37][1] = "Facilitar la interacci&oacute;n digital con ciudadanos y empresas mediante AA.PP. abiertas y flexibles que impliquen a los actores interesados en el dise&ntilde;o de pol&iacute;ticas y servicios de una forma colaborativa;";
 choices[37][2] = "Sociedad digital integradora, donde los ciudadanos tengan las cualificaciones adecuadas para aprovechar las oportunidades ofrecidas por Internet.";
 choices[37][3] = "Puesta a disposici&oacute;n de habilitadores y facilitadores claves, servicios y activos reutilizables.";
 answers[37] = choices[37][2];
 units[37] = "5";
 comments[37] = "Id Pregunta: 288. UNION EUROPEA";
 preguntaids[37] = 288


//  Id pregunta: 251 Año de creación de pregunta: 2016
 questions[38]= "39)  La Justicia, en Espa&ntilde;a, emana del/de la:";
 choices[38]= new Array();
 choices[38][0] = "Rey.";
 choices[38][1] = "&Oacute;rgano jurisdiccional que act&uacute;a en cada caso.";
 choices[38][2] = "Constituci&oacute;n.";
 choices[38][3] = "Pueblo.";
 answers[38] = choices[38][2];
 units[38] = "1";
 comments[38] = "Id Pregunta: 251. CONSTITUCION1978";
 preguntaids[38] = 251


//  Id pregunta: 57 Año de creación de pregunta: 2016
 questions[39]= "40)  Con respecto a ITIL se&ntilde;ale qu&eacute; afirmaci&oacute;n es cierta:";
 choices[39]= new Array();
 choices[39][0] = "Constituye una metodolog&iacute;a exhaustiva de pasos a seguir en el dise&ntilde;o de servicios TI.";
 choices[39][1] = "Da instrucciones de trabajo concretas, asignado tareas a personas.";
 choices[39][2] = "Los organismos tecnol&oacute;gicamente m&aacute;s punteros de la Administraci&oacute;n General del Estado se encuentran certificados en ITIL.";
 choices[39][3] = "Constituye un conjunto de mejores pr&aacute;cticas para la gesti&oacute;n de servicios TI.";
 answers[39] = choices[39][3];
 units[39] = "101";
 comments[39] = "Id Pregunta: 57. AGE A1 2015";
 preguntaids[39] = 57


//  Id pregunta: 289 Año de creación de pregunta: 2016
 questions[40]= "41)  La duraci&oacute;n del mandato del Defensor del Pueblo Europeo es de:";
 choices[40]= new Array();
 choices[40][0] = "Tres a&ntilde;os.";
 choices[40][1] = "Dos a&ntilde;os y medio.";
 choices[40][2] = "Cinco a&ntilde;os.";
 choices[40][3] = "Seis a&ntilde;os.";
 answers[40] = choices[40][2];
 units[40] = "5";
 comments[40] = "Id Pregunta: 289. UNION EUROPEA";
 preguntaids[40] = 289


//  Id pregunta: 365 Año de creación de pregunta: 2016
 questions[41]= "42)  Las decisiones de la Comisi&oacute;n se adoptar&aacute;n por:";
 choices[41]= new Array();
 choices[41][0] = "Unanimidad y mayor&iacute;a simple.";
 choices[41][1] = "Unanimidad.";
 choices[41][2] = "Mayor&iacute;a cualificada.";
 choices[41][3] = "Mayor&iacute;a simple.";
 answers[41] = choices[41][3];
 units[41] = "5";
 comments[41] = "Id Pregunta: 365. UNION EUROPEA";
 preguntaids[41] = 365


//  Id pregunta: 800 Año de creación de pregunta: 2016
 questions[42]= "43)  Las unidades administrativas comprenden puestos de trabajo o dotaciones de plantilla:";
 choices[42]= new Array();
 choices[42][0] = "vinculados funcionalmente por raz&oacute;n de sus cometidos y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[42][1] = "vinculados org&aacute;nicamente por raz&oacute;n de sus cometidos y funcionalmente por una jefatura com&uacute;n";
 choices[42][2] = "vinculados funcionalmente por raz&oacute;n de su territorio y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[42][3] = "vinculados org&aacute;nicamente por raz&oacute;n de su territorio y funcionalmente por una jefatura com&uacute;n";
 answers[42] = choices[42][0];
 units[42] = "4, 7, 8, 9";
 comments[42] = "Id Pregunta: 800. Ley 40/2015";
 preguntaids[42] = 800


//  Id pregunta: 451 Año de creación de pregunta: 2016
 questions[43]= "44)  El cr&eacute;dito presupuestario es...";
 choices[43]= new Array();
 choices[43][0] = "El sujeto que realiza el gasto";
 choices[43][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[43][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[43][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[43] = choices[43][2];
 units[43] = "10";
 comments[43] = "Id Pregunta: 451. PRESUPUESTOS GENERALES";
 preguntaids[43] = 451


//  Id pregunta: 137 Año de creación de pregunta: 2016
 questions[44]= "45)  La creaci&oacute;n de la Autoridad Independiente de Responsabilidad Fiscal, dentro de la Ley Org&aacute;nica 6/2013, tiene por objeto:";
 choices[44]= new Array();
 choices[44][0] = "Garantizar el cumplimiento efectivo por las Administraciones P&uacute;blicas del principio de estabilidad presupuestaria previsto en el art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola.";
 choices[44][1] = "La evaluaci&oacute;n continua del ciclo presupuestario, del endeudamiento p&uacute;blico, y el an&aacute;lisis de las previsiones econ&oacute;micas.";
 choices[44][2] = "Ejercer sus funciones con autonom&iacute;a e independencia funcional respecto de las Administraciones P&uacute;blicas.";
 choices[44][3] = "Todos las anteriores son ciertas.";
 answers[44] = choices[44][3];
 units[44] = "12";
 comments[44] = "Id Pregunta: 137. Leyes modelo econ&oacute;mico";
 preguntaids[44] = 137


//  Id pregunta: 184 Año de creación de pregunta: 2016
 questions[45]= "46)  El T&iacute;tulo IV de la Constituci&oacute;n Espa&ntilde;ola de 1978 dispone que el Gobierno:";
 choices[45]= new Array();
 choices[45][0] = "Se compone del Presidente, los Vicepresidentes y los Secretarios de Estado.";
 choices[45][1] = "Ejerce la funci&oacute;n ejecutiva y la legislativa de acuerdo con la Constituci&oacute;n y las leyes.";
 choices[45][2] = "Cesa tras la celebraci&oacute;n de elecciones generales, en los casos de p&eacute;rdida de confianza parlamentaria, o por dimisi&oacute;n o fallecimiento de su Presidente.";
 choices[45][3] = "El presidente y los dem&aacute;s miembros del Gobierno son nombrados por el Rey a propuesta del Presidente del Congreso.";
 answers[45] = choices[45][2];
 units[45] = "1";
 comments[45] = "Id Pregunta: 184. CONSTITUCION1978";
 preguntaids[45] = 184


//  Id pregunta: 115 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Qu&eacute; Tratado Europeo introduce un t&iacute;tulo dedicado al empleo en el Tratado de Roma?";
 choices[46]= new Array();
 choices[46][0] = "El Tratado de Lisboa";
 choices[46][1] = "El Tratado de Amsterdam";
 choices[46][2] = "El Tratado de Niza";
 choices[46][3] = "El Acta &Uacute;nica Europea";
 answers[46] = choices[46][1];
 units[46] = "15";
 comments[46] = "Id Pregunta: 115. ";
 preguntaids[46] = 115


//  Id pregunta: 676 Año de creación de pregunta: 2016
 questions[47]= "48)  En referencia a la implantaci&oacute;n de la interoperabilidad de la receta electr&oacute;nica:";
 choices[47]= new Array();
 choices[47][0] = "Permite los ciudadanos retiren sus medicamentos en las farmacias de fuera de la Comunidad Aut&oacute;noma en la que hayan sido recetados.";
 choices[47][1] = "Favorece la seguridad del paciente, al incorporar sistemas online de ayuda a la prescripci&oacute;n, que ayudan a la detecci&oacute;n de interaciones medicamentosas o duplicidades terap&eacute;uticas.";
 choices[47][2] = "Facilita al m&eacute;dico el seguimiento de la adherencia al tratamiento por parte del paciente.";
 choices[47][3] = "Todas las anteriores son correctas.";
 answers[47] = choices[47][3];
 units[47] = "47";
 comments[47] = "Id Pregunta: 676. Receta electr&oacute;nica";
 preguntaids[47] = 676


//  Id pregunta: 3 Año de creación de pregunta: 2016
 questions[48]= "49)  En el lenguaje de modelado UML :";
 choices[48]= new Array();
 choices[48][0] = "Los diagramas de secuencia y colaboraci&oacute;n son usados para modelar el comportamiento del sistema, pudiendo usarse para modelar un caso de uso, una clase, o un m&eacute;todo complicado.";
 choices[48][1] = "Los diagramas de actividad son usados para modelar la configuraci&oacute;n de los elementos de procesado en tiempo de ejecuci&oacute;n.";
 choices[48][2] = "Los diagramas de componentes son usados para modelar la estructura del software, incluyendo las dependencias entre los componentes de software.";
 choices[48][3] = "Los diagramas de implementaci&oacute;n son usados para modelar interacciones entre objetos de dise&ntilde;o en el sistema.";
 answers[48] = choices[48][2];
 units[48] = "89";
 comments[48] = "Id Pregunta: 3. AGE A1 2015";
 preguntaids[48] = 3


//  Id pregunta: 334 Año de creación de pregunta: 2016
 questions[49]= "50)  En el &aacute;mbito de la Uni&oacute;n Europea, las recomendaciones son:";
 choices[49]= new Array();
 choices[49][0] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[49][1] = "Ninguna de las respuestas es correcta.";
 choices[49][2] = "Sugerencias de los Estados miembros a las Instituciones comunitarias para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[49][3] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materia econ&oacute;mica, exclusivamente.";
 answers[49] = choices[49][0];
 units[49] = "5";
 comments[49] = "Id Pregunta: 334. UNION EUROPEA";
 preguntaids[49] = 334


//  Id pregunta: 100 Año de creación de pregunta: 2016
 questions[50]= "51)  Entre los tipos de Bases de Datos NoSQL no se encuentran:";
 choices[50]= new Array();
 choices[50][0] = "Bases de datos orientadas a filas";
 choices[50][1] = "Bases de datos orientadas a documentos";
 choices[50][2] = "Bases de datos de clave/valor";
 choices[50][3] = "Bases de datos orientadas a objetos";
 answers[50] = choices[50][0];
 units[50] = "73";
 comments[50] = "Id Pregunta: 100. ";
 preguntaids[50] = 100


//  Id pregunta: 127 Año de creación de pregunta: 2016
 questions[51]= "52)  Seg&uacute;n la ley 19/2013, la Reclamaci&oacute;n ante el Consejo de Transparencia y Buen Gobierno:";
 choices[51]= new Array();
 choices[51][0] = "Tiene car&aacute;cter facultativo.";
 choices[51][1] = "Tiene car&aacute;cter potestativo. ";
 choices[51][2] = "Se puede realizar de forma paralela a su impugnaci&oacute;n en v&iacute;a contencioso-administrativa.";
 choices[51][3] = "Se realiza si la impugnaci&oacute;n en v&iacute;a contencioso-administrativa es rechazada.";
 answers[51] = choices[51][1];
 units[51] = "22";
 comments[51] = "Id Pregunta: 127. ";
 preguntaids[51] = 127


//  Id pregunta: 18 Año de creación de pregunta: 2016
 questions[52]= "53)  Indique en qu&eacute; capa del modelo OSI se establece la encriptaci&oacute;n:";
 choices[52]= new Array();
 choices[52][0] = "Aplicaci&oacute;n";
 choices[52][1] = "Sesi&oacute;n";
 choices[52][2] = "Presentaci&oacute;n";
 choices[52][3] = "Transporte";
 answers[52] = choices[52][2];
 units[52] = "105";
 comments[52] = "Id Pregunta: 18. AGE A1 2015";
 preguntaids[52] = 18


//  Id pregunta: 688 Año de creación de pregunta: 2016
 questions[53]= "54)  Indique cu&aacute;l de las siguientes afirmaciones no es correcta seg&uacute;n lo establecido en el Reglamento (UE) 910/2014";
 choices[53]= new Array();
 choices[53][0] = "Las firmas electro&#769;nicas cualificadas tendr&aacute;n un efecto juri&#769;dico equivalente al de una firma manuscrita";
 choices[53][1] = "Una firma electro&#769;nica cualificada basada en un certificado cualificado emitido en un Estado miembro sera&#769; reconocida como firma electro&#769;nica cualificada en los dema&#769;s Estados miembros";
 choices[53][2] = "No se denegara&#769;n efectos juri&#769;dicos ni admisibilidad como prueba en procedimientos judiciales a una firma electro&#769;nica por el mero hecho de ser una firma electro&#769;nica";
 choices[53][3] = "Las firmas electr&oacute;nicas cualificadas tendr&aacute;n una validez de 48 meses";
 answers[53] = choices[53][3];
 units[53] = "77";
 comments[53] = "Id Pregunta: 688. Art&iacute;culo 25 del Reglamento 910/2014";
 preguntaids[53] = 688


//  Id pregunta: 473 Año de creación de pregunta: 2016
 questions[54]= "55)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la agrupaci&oacute;n de los cr&eacute;ditos en cap&iacute;tulos, art&iacute;culos, conceptos y subconceptos corresponde a la clasificaci&oacute;n:";
 choices[54]= new Array();
 choices[54][0] = "Org&aacute;nica.";
 choices[54][1] = "Contable.";
 choices[54][2] = "Econ&oacute;mica.";
 choices[54][3] = "Por programas.";
 answers[54] = choices[54][2];
 units[54] = "10";
 comments[54] = "Id Pregunta: 473. PRESUPUESTOS GENERALES";
 preguntaids[54] = 473


//  Id pregunta: 96 Año de creación de pregunta: 2016
 questions[55]= "56)  Indique cu&aacute;l de las siguientes soluciones tecnol&oacute;gicas NO se utiliza para virtualizaci&oacute;n:";
 choices[55]= new Array();
 choices[55][0] = "VMware ESX";
 choices[55][1] = "XenServer";
 choices[55][2] = "Alfresco";
 choices[55][3] = "Microsoft Hyper-V";
 answers[55] = choices[55][2];
 units[55] = "54";
 comments[55] = "Id Pregunta: 96. AGE A1 2015";
 preguntaids[55] = 96


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
 preguntaids[56] = 149


//  Id pregunta: 444 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes definiciones NO es uno de los roles de la Plataforma de Intermediaci&oacute;n, seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Protocolos de intermediaci&oacute;n de datos?:";
 choices[57]= new Array();
 choices[57][0] = "Mantendr&aacute; un portal web informativo con toda la documentaci&oacute;n relativa a la Plataforma.";
 choices[57][1] = "Almacenar&aacute; informaci&oacute;n personal de ciudadano derivada de la transacci&oacute;n de intercambio de datos, asegurando para ello la confidencialidad e integridad de la misma a trav&eacute;s de los mecanismos correspondientes.";
 choices[57][2] = "Mantendr&aacute; un centro de atenci&oacute;n a usuarios e integradores que canalice todas las incidencias relativas al sistema.";
 choices[57][3] = "Las consultas a los servicios de verificaci&oacute;n de datos, se pueden realizar de forma automatizada desde una aplicaci&oacute;n de gesti&oacute;n de un tr&aacute;mite, adaptadas para invocar los Webservice proporcionados por el servicio.";
 answers[57] = choices[57][1];
 units[57] = "43";
 comments[57] = "Id Pregunta: 444. SERVICIOS COMUNES";
 preguntaids[57] = 444


//  Id pregunta: 20 Año de creación de pregunta: 2016
 questions[58]= "59)  Con respecto al &aacute;mbito objetivo de aplicaci&oacute;n de la Ley 37/2007, de 16 de noviembre, sobre reutilizaci&oacute;n de la informaci&oacute;n del sector p&uacute;blico:";
 choices[58]= new Array();
 choices[58][0] = "Abarca el intercambio de documentos entre Administraciones y organismos del sector p&uacute;blico en el ejercicio de las funciones p&uacute;blicas que tengan atribuidas.";
 choices[58][1] = "Ser&aacute; aplicable incluso sobre los documentos que obran en las Administraciones y organismos del sector p&uacute;blico para finalidades ajenas a sus funciones de servicio p&uacute;blico.";
 choices[58][2] = "No afecta a la existencia de derechos de propiedad intelectual de las Administraciones y organismos del sector p&uacute;blico ni a su posesi&oacute;n por &eacute;stos.";
 choices[58][3] = "Fija la prevalencia del derecho fundamental a la protecci&oacute;n de datos de car&aacute;cter personal, a&uacute;n cuando se apliquen medidas de disociaci&oacute;n de datos.";
 answers[58] = choices[58][2];
 units[58] = "27";
 comments[58] = "Id Pregunta: 20. AGE A1 2015";
 preguntaids[58] = 20


//  Id pregunta: 530 Año de creación de pregunta: 2016
 questions[59]= "60)  Podr&aacute;n actuar en representaci&oacute;n de otras ante las Administraciones P&uacute;blicas:";
 choices[59]= new Array();
 choices[59][0] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[59][1] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[59][2] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 choices[59][3] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 answers[59] = choices[59][3];
 units[59] = "7";
 comments[59] = "Id Pregunta: 530. LEY 39/2015";
 preguntaids[59] = 530


//  Id pregunta: 53 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Cu&aacute;l de los siguientes objetivos est&aacute; fuera del alcance de una reuni&oacute;n diaria de SCRUM (daily scrum)?";
 choices[60]= new Array();
 choices[60][0] = "Exponer las tareas no planificadas que tambi&eacute;n est&aacute;n haciendo los miembros del equipo.";
 choices[60][1] = "Resolver detalladamente los problemas que puedan tener los miembros del equipo.";
 choices[60][2] = "Poner de manifiesto el ritmo de trabajo de cada miembro del equipo.";
 choices[60][3] = "Identificar las tareas que puedan afectar a otros miembros del equipo.";
 answers[60] = choices[60][1];
 units[60] = "84";
 comments[60] = "Id Pregunta: 53. AGE A1 2015";
 preguntaids[60] = 53


//  Id pregunta: 489 Año de creación de pregunta: 2016
 questions[61]= "62)  Seg&uacute;n el art&iacute;culo 56.6 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Hacienda dar&aacute; cuentas trimestralmente de los cr&eacute;ditos extraordinarias y suplementos de cr&eacute;dito a:";
 choices[61]= new Array();
 choices[61][0] = "Las Cortes Generales.";
 choices[61][1] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[61][2] = "El Gobierno.";
 choices[61][3] = "El Congreso de los Diputados.";
 answers[61] = choices[61][0];
 units[61] = "10";
 comments[61] = "Id Pregunta: 489. PRESUPUESTOS GENERALES";
 preguntaids[61] = 489


//  Id pregunta: 320 Año de creación de pregunta: 2016
 questions[62]= "63)  Indique a qui&eacute;n corresponde la funci&oacute;n de velar por que se apliquen los Tratados y las medidas adoptadas por las Instituciones en virtud de &eacute;stos:";
 choices[62]= new Array();
 choices[62][0] = "Al Consejo Europeo.";
 choices[62][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[62][2] = "A la Comisi&oacute;n Europea.";
 choices[62][3] = "Al Parlamento Europeo.";
 answers[62] = choices[62][2];
 units[62] = "5";
 comments[62] = "Id Pregunta: 320. UNION EUROPEA";
 preguntaids[62] = 320


//  Id pregunta: 248 Año de creación de pregunta: 2016
 questions[63]= "64)  El T&iacute;tulo II de la Constituci&oacute;n finaliza en el Art&iacute;culo:";
 choices[63]= new Array();
 choices[63][0] = "61";
 choices[63][1] = "53";
 choices[63][2] = "65";
 choices[63][3] = "67";
 answers[63] = choices[63][1];
 units[63] = "1";
 comments[63] = "Id Pregunta: 248. CONSTITUCION1978";
 preguntaids[63] = 248


//  Id pregunta: 584 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Cu&aacute;ndo tuvo lugar la primera declaraci&oacute;n de servicios compartidos?";
 choices[64]= new Array();
 choices[64][0] = "El 5 de Octubre de 2015";
 choices[64][1] = "El 15 de Octubre de 2015";
 choices[64][2] = "El 15 de Septiembre de 2015";
 choices[64][3] = "El 2 de Octubre de 2015";
 answers[64] = choices[64][2];
 units[64] = "19";
 comments[64] = "Id Pregunta: 584. Estrategia TIC";
 preguntaids[64] = 584


//  Id pregunta: 503 Año de creación de pregunta: 2016
 questions[65]= "66)  De acuerdo con el art&iacute;culo 64 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, qui&eacute;n elaborar&aacute; un presupuesto de explotaci&oacute;n que detallara los recursos y dotaciones anuales correspondientes:";
 choices[65]= new Array();
 choices[65][0] = "Las sociedades mercantiles estatales.";
 choices[65][1] = "Las entidades p&uacute;blicas empresariales.";
 choices[65][2] = "Las respuestas a) y b) son correctas.";
 choices[65][3] = "Las respuestas a) y b) no son correctas.";
 answers[65] = choices[65][2];
 units[65] = "10";
 comments[65] = "Id Pregunta: 503. PRESUPUESTOS GENERALES";
 preguntaids[65] = 503


//  Id pregunta: 703 Año de creación de pregunta: 2016
 questions[66]= "67)  Se&ntilde;ale la que NO corresponde a una herramienta de automatizaci&oacute;n de pruebas:";
 choices[66]= new Array();
 choices[66][0] = "Selenium";
 choices[66][1] = "JUnit";
 choices[66][2] = "Jenkins";
 choices[66][3] = "JMeter";
 answers[66] = choices[66][2];
 units[66] = "92";
 comments[66] = "Id Pregunta: 703. INTEGRACION CONTINUA";
 preguntaids[66] = 703


//  Id pregunta: 232 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos, de conformidad con la Constituci&oacute;n Espa&ntilde;ola, no tiene legitimidad para interponer el recurso de inconstitucionalidad?";
 choices[67]= new Array();
 choices[67][0] = "El Presidente del Senado.";
 choices[67][1] = "El Defensor del Pueblo.";
 choices[67][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[67][3] = "El Presidente del Gobierno.";
 answers[67] = choices[67][2];
 units[67] = "1";
 comments[67] = "Id Pregunta: 232. CONSTITUCION1978";
 preguntaids[67] = 232


//  Id pregunta: 548 Año de creación de pregunta: 2016
 questions[68]= "69)  El principio definido en el est&aacute;ndar ISO/IEC 38500 para la Gobernanza TIC que establece la necesidad de cumplir los requerimientos regulatorios y legales es el principio de:";
 choices[68]= new Array();
 choices[68][0] = "Conformidad";
 choices[68][1] = "Responsabilidad";
 choices[68][2] = "Adquisici&oacute;n";
 choices[68][3] = "Desempe&ntilde;o";
 answers[68] = choices[68][0];
 units[68] = "26";
 comments[68] = "Id Pregunta: 548. Gobernanza TIC";
 preguntaids[68] = 548


//  Id pregunta: 715 Año de creación de pregunta: 2016
 questions[69]= "70)  Entre las funcionalidades generales de un servidor de integraci&oacute;n continua NO se encuentra";
 choices[69]= new Array();
 choices[69][0] = "La ejecuci&oacute;n de una serie de test: JUnit, Cactus, Auditoria del c&oacute;digo fuente, test IHM, test funcionales.";
 choices[69][1] = "Permite realiza el despliegue de archivos en el entorno de producci&oacute;n.";
 choices[69][2] = "La notificaci&oacute;n del resultado por medios como correo electr&oacute;nico o RSS.";
 choices[69][3] = "La creaci&oacute;n de un informe de estad&iacute;sticas.";
 answers[69] = choices[69][1];
 units[69] = "92";
 comments[69] = "Id Pregunta: 715. INTEGRACION CONTINUA";
 preguntaids[69] = 715


//  Id pregunta: 345 Año de creación de pregunta: 2016
 questions[70]= "71)  El procedimiento de dictamen simple o dictamen consultivo significa que:";
 choices[70]= new Array();
 choices[70][0] = "El Consejo debe obtener la aprobaci&oacute;n del Parlamento Europeo para que se tomen determinadas decisiones de primera importancia.";
 choices[70][1] = "Por el que se da poder al Parlamento Europeo para una mayor posibilidad de influir sobre el proceso legislativo mediante una &quot;doble lectura&quot; de las propuestas legislativas de la Comisi&oacute;n.";
 choices[70][2] = "Por el que se da poder al Parlamento Europeo para aprobar disposiciones conjuntamente con el Consejo.";
 choices[70][3] = "El Consejo consulte al Parlamento Europeo y tome sus puntos de vista en consideraci&oacute;n.";
 answers[70] = choices[70][3];
 units[70] = "5";
 comments[70] = "Id Pregunta: 345. UNION EUROPEA";
 preguntaids[70] = 345


//  Id pregunta: 332 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Cu&aacute;ndo son de aplicaci&oacute;n los tratados internacionales?:";
 choices[71]= new Array();
 choices[71][0] = "Al d&iacute;a siguiente de su ratificaci&oacute;n por el Congreso de los Diputados.";
 choices[71][1] = "Al d&iacute;a siguiente de su firma por los Ministros plenipotenciarios.";
 choices[71][2] = "El mismo d&iacute;a de la firma por los Ministros plenipotenciarios.";
 choices[71][3] = "No ser&aacute;n de aplicaci&oacute;n directa hasta que formen parte del ordenamiento mediante su publicaci&oacute;n en el BOE.";
 answers[71] = choices[71][3];
 units[71] = "5";
 comments[71] = "Id Pregunta: 332. UNION EUROPEA";
 preguntaids[71] = 332


//  Id pregunta: 776 Año de creación de pregunta: 2016
 questions[72]= "73)  Las Administraciones P&uacute;blicas velar&aacute;n por el cumplimiento de los requisitos previstos en la legislaci&oacute;n que resulte aplicable, para lo cual podr&aacute;n, en el &aacute;mbito de sus respectivas competencias, comprobar, verificar, investigar e inspeccionar los hechos, actos, elementos, actividades, estimaciones y dem&aacute;s circunstancias que fueran necesarias con los l&iacute;mites establecidos en:";
 choices[72]= new Array();
 choices[72][0] = "la legislaci&oacute;n de protecci&oacute;n de datos de car&aacute;cter personal";
 choices[72][1] = "el C&oacute;digo Civil";
 choices[72][2] = "la Constituci&oacute;n Espa&ntilde;ola";
 choices[72][3] = "la ley de procedimiento administrativo com&uacute;n de las Administraciones P&uacute;blicas";
 answers[72] = choices[72][0];
 units[72] = "4, 7, 8, 9";
 comments[72] = "Id Pregunta: 776. Ley 40/2015";
 preguntaids[72] = 776


//  Id pregunta: 110 Año de creación de pregunta: 2016
 questions[73]= "74)  La Poblaci&oacute;n Activa incluye a:";
 choices[73]= new Array();
 choices[73][0] = "S&oacute;lo a aquellas personas que son empleados por cuenta ajena";
 choices[73][1] = "S&oacute;lo a aquellas personas que son empleadas por cuenta propia o ajena";
 choices[73][2] = "Aquellas personas que tienen empleo y a los desempleados que buscan un empleo de forma activa";
 choices[73][3] = "Todo aquel que desea trabajar";
 answers[73] = choices[73][2];
 units[73] = "15";
 comments[73] = "Id Pregunta: 110. ";
 preguntaids[73] = 110


//  Id pregunta: 795 Año de creación de pregunta: 2016
 questions[74]= "75)  Todos los &oacute;rganos de la Administraci&oacute;n General del Estado que no sean &oacute;rgano superior o directivo se encuentran bajo la dependencia o direcci&oacute;n de:";
 choices[74]= new Array();
 choices[74][0] = "un &oacute;rgano superior";
 choices[74][1] = "un &oacute;rgano directivo";
 choices[74][2] = "un &oacute;rgano superior o directivo";
 choices[74][3] = "ninguna es correcta";
 answers[74] = choices[74][2];
 units[74] = "4, 7, 8, 9";
 comments[74] = "Id Pregunta: 795. Ley 40/2015";
 preguntaids[74] = 795


