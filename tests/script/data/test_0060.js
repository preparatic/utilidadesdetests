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

//  Id pregunta: 657 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Qu&eacute; aplicativo no se encuentra dentro del ecosistemas de Haddoop?";
 choices[0]= new Array();
 choices[0][0] = "Yarn";
 choices[0][1] = "Flume";
 choices[0][2] = "Hive";
 choices[0][3] = "BizAgi";
 answers[0] = choices[0][3];
 units[0] = "73";
 comments[0] = "Id Pregunta: 657. ";
 preguntaids[0] = 657


//  Id pregunta: 183 Año de creación de pregunta: 2016
 questions[1]= "2)  Seg&uacute;n el Art&iacute;culo 113 de la Constituci&oacute;n Espa&ntilde;ola, la moci&oacute;n de censura deber&aacute; ser propuesta:";
 choices[1]= new Array();
 choices[1][0] = "al menos por 50 Diputados.";
 choices[1][1] = "al menos por la d&eacute;cima parte de los Diputados.";
 choices[1][2] = "por la Mesa del Congreso de los Diputados.";
 choices[1][3] = "al menos por dos grupos pol&iacute;ticos del Congreso de los Diputados.";
 answers[1] = choices[1][1];
 units[1] = "1";
 comments[1] = "Id Pregunta: 183. CONSTITUCION1978";
 preguntaids[1] = 183


//  Id pregunta: 522 Año de creación de pregunta: 2016
 questions[2]= "3)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se denomina:";
 choices[2]= new Array();
 choices[2][0] = "De los interesados en el procedimiento";
 choices[2][1] = "De la actividad de las Administraciones P&uacute;blicas";
 choices[2][2] = "Disposiciones generales";
 choices[2][3] = "De los actos administrativos";
 answers[2] = choices[2][2];
 units[2] = "7";
 comments[2] = "Id Pregunta: 522. LEY 39/2015";
 preguntaids[2] = 522


//  Id pregunta: 584 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Cu&aacute;ndo tuvo lugar la primera declaraci&oacute;n de servicios compartidos?";
 choices[3]= new Array();
 choices[3][0] = "El 5 de Octubre de 2015";
 choices[3][1] = "El 15 de Octubre de 2015";
 choices[3][2] = "El 15 de Septiembre de 2015";
 choices[3][3] = "El 2 de Octubre de 2015";
 answers[3] = choices[3][2];
 units[3] = "19";
 comments[3] = "Id Pregunta: 584. Estrategia TIC";
 preguntaids[3] = 584


//  Id pregunta: 440 Año de creación de pregunta: 2016
 questions[4]= "5)  Respecto al Sistema de Informaci&oacute;n Administrativa, se&ntilde;ale la respuesta falsa:";
 choices[4]= new Array();
 choices[4][0] = "Contiene la relaci&oacute;n de procedimientos y servicios de la AGE, y de todas las administraciones participantes.";
 choices[4][1] = "Cumple para la AGE el requisito establecido en el art&iacute;culo 9 del Esquema Nacional de Interoperabilidad, que obliga a las Administraciones p&uacute;blicas a mantener actualizado un Inventario de Informaci&oacute;n Administrativa.";
 choices[4][2] = "SIA est&aacute; dise&ntilde;ado para permitir la administraci&oacute;n distribuida y la actualizaci&oacute;n corresponsable por todas las Administraciones participantes, mediante una aplicaci&oacute;n web.";
 choices[4][3] = "Los usuarios son gestionados por una red de responsables de cada Departamento.";
 answers[4] = choices[4][2];
 units[4] = "43";
 comments[4] = "Id Pregunta: 440. SERVICIOS COMUNES";
 preguntaids[4] = 440


//  Id pregunta: 583 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Qu&eacute; car&aacute;cter tiene la utilizaci&oacute;n de los medios y servicios compartidos?.";
 choices[5]= new Array();
 choices[5][0] = "Car&aacute;cter sustitutivo";
 choices[5][1] = "Car&aacute;cter obligatorio";
 choices[5][2] = "Car&aacute;cter obligatorio y sustitutivo, sin excepci&oacute;n alguna";
 choices[5][3] = "Ninguna de las anteriores";
 answers[5] = choices[5][3];
 units[5] = "19";
 comments[5] = "Id Pregunta: 583. Estrategia TIC. Car&aacute;cter obligatorio y sustitutivo, aunque se podr&aacute;n acordar excepciones";
 preguntaids[5] = 583


//  Id pregunta: 152 Año de creación de pregunta: 2016
 questions[6]= "7)  Los documentos electr&oacute;nicos deber&aacute;n conservarse en un formato que permita: (se&ntilde;ala la respuesta incorrecta)";
 choices[6]= new Array();
 choices[6][0] = "garantizar su consulta hasta transcurridos cinco a&ntilde;os desde su emisi&oacute;n";
 choices[6][1] = "garantizar la conservaci&oacute;n del documento";
 choices[6][2] = "garantizar la autenticidad del documento";
 choices[6][3] = "garantizar la integridad del documento";
 answers[6] = choices[6][0];
 units[6] = "7";
 comments[6] = "Id Pregunta: 152. Ley 39/2015, Art&iacute;culo 17";
 preguntaids[6] = 152


//  Id pregunta: 412 Año de creación de pregunta: 2016
 questions[7]= "8)  &Aacute;mbito de aplicaci&oacute;n de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombre:";
 choices[7]= new Array();
 choices[7][0] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Europeo.";
 choices[7][1] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Espa&ntilde;ol.";
 choices[7][2] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Internacional.";
 choices[7][3] = "Ninguna de ellas se ajusta al &aacute;mbito de aplicaci&oacute;n.";
 answers[7] = choices[7][1];
 units[7] = "14";
 comments[7] = "Id Pregunta: 412. POLITICAS DE IGUALDAD";
 preguntaids[7] = 412


//  Id pregunta: 46 Año de creación de pregunta: 2016
 questions[8]= "9)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[8]= new Array();
 choices[8][0] = "En un sistema de cifrado de clave asim&eacute;trica la seguridad radica en la transmisi&oacute;n de la clave, mediante canal seguro, entre el emisor y el receptor del mensaje.";
 choices[8][1] = "Las huellas digitales devueltas por una misma funci&oacute;n hash tienen id&eacute;ntica longitud.";
 choices[8][2] = "Para ofrecer un nivel de seguridad equivalente, los sistemas de clave p&uacute;blica requieren menores longitudes de clave que los sistemas sim&eacute;tricos.";
 choices[8][3] = "Se denomina criptograma al procedimiento empleado para cifrar un mensaje.";
 answers[8] = choices[8][1];
 units[8] = "76";
 comments[8] = "Id Pregunta: 46. AGE A1 2015";
 preguntaids[8] = 46


//  Id pregunta: 15 Año de creación de pregunta: 2016
 questions[9]= "10)  Si una aplicaci&oacute;n web desplegada en una JVM utiliza un servlet para generar p&aacute;ginas web de forma din&aacute;mica, dicho servlet no implementa la interfaz SingleThreadModel, y en un momento determinado se encuentra recibiendo m&uacute;ltiples peticiones de clientes de forma concurrente, &iquest;cu&aacute;ntos objetos de dicha clase estar&aacute;n cargados en la memoria de la JVM?";
 choices[9]= new Array();
 choices[9][0] = "0";
 choices[9][1] = "1";
 choices[9][2] = "Tantos como peticiones concurrentes tenga.";
 choices[9][3] = "Tantos como le permita la memoria de la JVM.";
 answers[9] = choices[9][1];
 units[9] = "64";
 comments[9] = "Id Pregunta: 15. AGE A1 2015";
 preguntaids[9] = 15


//  Id pregunta: 388 Año de creación de pregunta: 2016
 questions[10]= "11)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[10]= new Array();
 choices[10][0] = "Indirecta.";
 choices[10][1] = "Directa.";
 choices[10][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[10][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[10] = choices[10][1];
 units[10] = "14";
 comments[10] = "Id Pregunta: 388. POLITICAS DE IGUALDAD";
 preguntaids[10] = 388


//  Id pregunta: 648 Año de creación de pregunta: 2016
 questions[11]= "12)  En Itil v3 se diferencia entre la Gesti&oacute;n de la Cartera de Servicios y la Gesti&oacute;n del Cat&aacute;logo de Servicios ya que:";
 choices[11]= new Array();
 choices[11][0] = "La Cartera de Servicios contiene informaci&oacute;n sobre cada servicio y su estado.";
 choices[11][1] = "La Cartera de Servicios es un subconjunto del Cat&aacute;logo de Servicios.";
 choices[11][2] = "La Cartera de Servicios divide los servicios en componentes y contiene pol&iacute;ticas, directrices y responsabilidades , as&iacute; como precios, acuerdos de nivel de servicio y condiciones de entrega.";
 choices[11][3] = "Todas las respuestas son correctas.";
 answers[11] = choices[11][0];
 units[11] = "101";
 comments[11] = "Id Pregunta: 648. Junta de Extremadura A1 2015";
 preguntaids[11] = 648


//  Id pregunta: 318 Año de creación de pregunta: 2016
 questions[12]= "13)  El personal de la Comisi&oacute;n se organiza en departamentos, conocidos como:";
 choices[12]= new Array();
 choices[12][0] = "Consejos y Servicios.";
 choices[12][1] = "Servicios permanentes y no permanentes.";
 choices[12][2] = "Direcciones Generales.";
 choices[12][3] = "Direcciones ministeriales.";
 answers[12] = choices[12][2];
 units[12] = "5";
 comments[12] = "Id Pregunta: 318. UNION EUROPEA";
 preguntaids[12] = 318


//  Id pregunta: 475 Año de creación de pregunta: 2016
 questions[13]= "14)  Seg&uacute;n el art&iacute;culo de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , el r&eacute;gimen econ&oacute;mico y financiero del sector p&uacute;blico estatal se regula en:";
 choices[13]= new Array();
 choices[13][0] = "Ley 50/1997, del Gobierno.";
 choices[13][1] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[13][2] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General del Estado.";
 choices[13][3] = "La Ley General de la Hacienda P&uacute;blica.";
 answers[13] = choices[13][1];
 units[13] = "10";
 comments[13] = "Id Pregunta: 475. PRESUPUESTOS GENERALES";
 preguntaids[13] = 475


//  Id pregunta: 759 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Cu&aacute;l de las siguientes no es una prioridad propuesta por la Estrategia Europa 2020?";
 choices[14]= new Array();
 choices[14][0] = "Crecimiento sostenible";
 choices[14][1] = "Crecimiento inteligente";
 choices[14][2] = "Crecimiento digital";
 choices[14][3] = "Crecimiento integrador";
 answers[14] = choices[14][2];
 units[14] = "19";
 comments[14] = "Id Pregunta: 759. Europa 2020";
 preguntaids[14] = 759


//  Id pregunta: 31 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Qu&eacute; es MongoDB?";
 choices[15]= new Array();
 choices[15][0] = "Una herramienta Object Relational Mapping (ORM) para facilitar el desarrollo.";
 choices[15][1] = "Una base de datos de c&oacute;digo abierto de documentos tipo JSON.";
 choices[15][2] = "Un sistema gestor de base de datos relacional.";
 choices[15][3] = "Una base de datos jer&aacute;rquica de relaciones encadenadas.";
 answers[15] = choices[15][1];
 units[15] = "73";
 comments[15] = "Id Pregunta: 31. AGE A1 2015";
 preguntaids[15] = 31


//  Id pregunta: 43 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Cu&aacute;l de los siguientes principios NO est&aacute; recogido en el Manifiesto por el Desarrollo &Aacute;gil del Software?";
 choices[16]= new Array();
 choices[16][0] = "La simplicidad, o el arte de maximizar la cantidad de trabajo no realizado, es esencial.";
 choices[16][1] = "Aceptamos que los requisitos cambien, incluso en etapas tard&iacute;as del desarrollo. Los procesos &aacute;giles aprovechan el cambio para proporcionar ventaja competitiva al cliente.";
 choices[16][2] = "Las mejores arquitecturas, requisitos y dise&ntilde;os emergen por la aplicaci&oacute;n de unos procesos bien organizados.";
 choices[16][3] = "El software funcionando es la medida principal del progreso.";
 answers[16] = choices[16][2];
 units[16] = "34";
 comments[16] = "Id Pregunta: 43. AGE A1 2015";
 preguntaids[16] = 43


//  Id pregunta: 702 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Cu&aacute;l de los siguientes NO es un repositorio de c&oacute;digo?";
 choices[17]= new Array();
 choices[17][0] = "CVS";
 choices[17][1] = "SVN";
 choices[17][2] = "Team Foundation Server";
 choices[17][3] = "Apache Tomcat";
 answers[17] = choices[17][3];
 units[17] = "92";
 comments[17] = "Id Pregunta: 702. INTEGRACION CONTINUA";
 preguntaids[17] = 702


//  Id pregunta: 349 Año de creación de pregunta: 2016
 questions[18]= "19)  El Tratado de Par&iacute;s que crea la Comunidad Europea del Carb&oacute;n y del Acero entr&oacute; en vigor:";
 choices[18]= new Array();
 choices[18][0] = "El 23 de julio de 1952.";
 choices[18][1] = "El 18 de abril de 1951.";
 choices[18][2] = "El 16 de abril de 1948.";
 choices[18][3] = "d)Ninguna de las respuestas son correctas.";
 answers[18] = choices[18][0];
 units[18] = "5";
 comments[18] = "Id Pregunta: 349. UNION EUROPEA";
 preguntaids[18] = 349


//  Id pregunta: 863 Año de creación de pregunta: 2016
 questions[19]= "20)  Se recomienda que todas aquellas campa&ntilde;as de los ministerios que cuenten con su propia p&aacute;gina web, cuenten adem&aacute;s con un subdominio o URL secundaria en la estructura general de la p&aacute;gina web del Ministerio. Indique la opci&oacute;n correcta.";
 choices[19]= new Array();
 choices[19][0] = "Se podr&aacute; utilizar de forma opcional descripciones sem&aacute;nticas en el nombramiento y titulaci&oacute;n de los subdominios.";
 choices[19][1] = "RUN implementa una soluci&oacute;n sencilla de generaci&oacute;n de URL cortas  para una mejora en la eficiencia de la remisi&oacute;n de direcciones web mediante email, sms, twitter etc";
 choices[19][2] = "El nombre del subdominio o URL secundaria debe ser distinto al que se utilice como URL independiente.";
 choices[19][3] = "Con los subdominios o URL secundarias los robots de los buscadores requerir&aacute;n m&aacute;s tiempo en interpretar su dependencia contextual con el Ministerio u &Oacute;rgano de la Administraci&oacute;n.";
 answers[19] = choices[19][1];
 units[19] = "125";
 comments[19] = "Id Pregunta: 863. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[19] = 863


//  Id pregunta: 494 Año de creación de pregunta: 2016
 questions[20]= "21)  El R&eacute;gimen Jur&iacute;dico de la Deuda del Estado se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[20]= new Array();
 choices[20][0] = "T&iacute;tulo V, Cap&iacute;tulo II, Secci&oacute;n 4.";
 choices[20][1] = "T&iacute;tulo V, Cap&iacute;tulo I, Secci&oacute;n 2.";
 choices[20][2] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[20][3] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[20] = choices[20][2];
 units[20] = "10";
 comments[20] = "Id Pregunta: 494. PRESUPUESTOS GENERALES";
 preguntaids[20] = 494


//  Id pregunta: 383 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre mujeres y hombres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[21]= new Array();
 choices[21][0] = "El Consejo Nacional de la Mujer";
 choices[21][1] = "El Consejo de la Mujer";
 choices[21][2] = "El Instituto de la Mujer";
 choices[21][3] = "El Consejo de Participaci&oacute;n de la Mujer";
 answers[21] = choices[21][3];
 units[21] = "14";
 comments[21] = "Id Pregunta: 383. POLITICAS DE IGUALDAD";
 preguntaids[21] = 383


//  Id pregunta: 356 Año de creación de pregunta: 2016
 questions[22]= "23)  Se&ntilde;ale la respuesta correcta respecto a las directivas comunitarias:";
 choices[22]= new Array();
 choices[22][0] = "No se aplican directamente en los Estados.";
 choices[22][1] = "No son vinculantes.";
 choices[22][2] = "Habitualmente se dictan sobre materias que son competencias exclusivas de la Uni&oacute;n Europea.";
 choices[22][3] = "Tienen alcance general.";
 answers[22] = choices[22][0];
 units[22] = "5";
 comments[22] = "Id Pregunta: 356. UNION EUROPEA";
 preguntaids[22] = 356


//  Id pregunta: 541 Año de creación de pregunta: 2016
 questions[23]= "24)  Los asientos que se realicen en los registros electr&oacute;nicos generales y particulares de apoderamientos deber&aacute;n contener, al menos: (se&ntilde;ala la incorrecta)";
 choices[23]= new Array();
 choices[23][0] = "nombre y apellidos o la denominaci&oacute;n o raz&oacute;n social, documento nacional de identidad, n&uacute;mero de identificaci&oacute;n fiscal o documento equivalente del poderdante y del apoderado";
 choices[23][1] = "causas de anulaci&oacute;n del apoderamiento";
 choices[23][2] = "per&iacute;odo de tiempo por el cual se otorga el poder";
 choices[23][3] = "tipo de poder seg&uacute;n las facultades que otorgue";
 answers[23] = choices[23][1];
 units[23] = "7";
 comments[23] = "Id Pregunta: 541. LEY 39/2015";
 preguntaids[23] = 541


//  Id pregunta: 712 Año de creación de pregunta: 2016
 questions[24]= "25)  Si un ciudadano solicita informaci&oacute;n a la Administraci&oacute;n y son de aplicaci&oacute;n los l&iacute;mites de derecho de acceso previstos en el art&iacute;culo 14 de la Ley 19/2013 pero &eacute;stos no afectan a la totalidad de la informaci&oacute;n:";
 choices[24]= new Array();
 choices[24][0] = "Nunca se conceder&aacute; el acceso parcial a la informaci&oacute;n.";
 choices[24][1] = "Se ofrecer&aacute; acceso parcial sin indicar al solicitante que parte de la informaci&oacute;n ha sido omitida.";
 choices[24][2] = "Siempre se conder&aacute; acceso parcial a la informaci&oacute;n a la que no le afecte la limitaci&oacute;n prevista en el art&iacute;culo 14.";
 choices[24][3] = "Se conceder&aacute; el acceso parcial previa omisi&oacute;n de la informaci&oacute;n afectada por el l&iacute;mite de acceso, salvo que de ello resulte una informaci&oacute;n distorsionada o que carezca de sentido.";
 answers[24] = choices[24][3];
 units[24] = "22";
 comments[24] = "Id Pregunta: 712. Ley de transparencia";
 preguntaids[24] = 712


//  Id pregunta: 219 Año de creación de pregunta: 2016
 questions[25]= "26)  Seg&uacute;n establece el Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola, los Decretos-Leyes son normas con rango de Ley que aprueba el Gobierno:";
 choices[25]= new Array();
 choices[25][0] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad y una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[25][1] = "Sin mediar delegaci&oacute;n de las Cortes, aunque deben ser inmediatamente sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[25][2] = "En casos de extraordinaria y urgente necesidad sin mediar delegaci&oacute;n de las Cortes, aunque una vez aprobados deben ser tramitados como proyectos de ley por el procedimiento de urgencia.";
 choices[25][3] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad, y que una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 answers[25] = choices[25][1];
 units[25] = "1";
 comments[25] = "Id Pregunta: 219. CONSTITUCION1978";
 preguntaids[25] = 219


//  Id pregunta: 229 Año de creación de pregunta: 2016
 questions[26]= "27)  De acuerdo con lo previsto en la Constituci&oacute;n Espa&ntilde;ola, el Gobierno y la administraci&oacute;n aut&oacute;noma de las provincias estar&aacute;n encomendados:";
 choices[26]= new Array();
 choices[26][0] = "A Diputaciones u otras Corporaciones de car&aacute;cter representativo.";
 choices[26][1] = "A los Subdelegados del Gobierno y a los Directores Insulares.";
 choices[26][2] = "A las Diputaciones y a las Mancomunidades de Municipios.";
 choices[26][3] = "A las Diputaciones y a las Comarcas.";
 answers[26] = choices[26][3];
 units[26] = "1";
 comments[26] = "Id Pregunta: 229. CONSTITUCION1978";
 preguntaids[26] = 229


//  Id pregunta: 423 Año de creación de pregunta: 2016
 questions[27]= "28)  Para contribuir a un reparto m&aacute;s equilibrado de las responsabilidades familiares se reconoce a los padres:";
 choices[27]= new Array();
 choices[27][0] = "El derecho a un permiso.";
 choices[27][1] = "Una prestaci&oacute;n por paternidad.";
 choices[27][2] = "Ambas son correctas.";
 choices[27][3] = "18 d&iacute;as de permiso.";
 answers[27] = choices[27][2];
 units[27] = "14";
 comments[27] = "Id Pregunta: 423. POLITICAS DE IGUALDAD";
 preguntaids[27] = 423


//  Id pregunta: 754 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Agenda Digital para Espa&ntilde;a?";
 choices[28]= new Array();
 choices[28][0] = "Aumentar los beneficios empresariales mediante las TIC";
 choices[28][1] = "Promover la inclusi&oacute;n digital y la empleabilidad";
 choices[28][2] = "Fomentar el despliegue de redes y servicios";
 choices[28][3] = "Mejorar la administraci&oacute;n electr&oacute;nica";
 answers[28] = choices[28][0];
 units[28] = "19";
 comments[28] = "Id Pregunta: 754. Agenda Digital para Espa&ntilde;a";
 preguntaids[28] = 754


//  Id pregunta: 391 Año de creación de pregunta: 2016
 questions[29]= "30)  El T&iacute;tulo II de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombres se denomina:";
 choices[29]= new Array();
 choices[29][0] = "El principio de igualdad y la tutela contra la discriminaci&oacute;n.";
 choices[29][1] = "Objeto y &aacute;mbito de la Ley.";
 choices[29][2] = "Pol&iacute;ticas p&uacute;blicas para la igualdad.";
 choices[29][3] = "El derecho al trabajo en igualdad de oportunidades.";
 answers[29] = choices[29][2];
 units[29] = "14";
 comments[29] = "Id Pregunta: 391. POLITICAS DE IGUALDAD";
 preguntaids[29] = 391


//  Id pregunta: 509 Año de creación de pregunta: 2016
 questions[30]= "31)  De acuerdo con el art&iacute;culo 32 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, en el supuesto de que la liquidaci&oacute;n presupuestaria del Estado se sit&uacute;e en super&aacute;vit, &eacute;ste debe destinarse a:";
 choices[30]= new Array();
 choices[30][0] = "Reducir el gasto p&uacute;blico.";
 choices[30][1] = "Reducir el d&eacute;ficit presupuestario.";
 choices[30][2] = "Reducir el endeudamiento neto.";
 choices[30][3] = "Al Fondo de Contingencia.";
 answers[30] = choices[30][2];
 units[30] = "10";
 comments[30] = "Id Pregunta: 509. PRESUPUESTOS GENERALES";
 preguntaids[30] = 509


//  Id pregunta: 93 Año de creación de pregunta: 2016
 questions[31]= "32)  Entre las tecnolog&iacute;as o herramientas utilizadas para trabajar en sistemas de Big Data NO se encuentra:";
 choices[31]= new Array();
 choices[31][0] = "Almacenamiento orientado a columnas";
 choices[31][1] = "Framework MapReduce";
 choices[31][2] = "OLTP";
 choices[31][3] = "Bases de datos clave-valor";
 answers[31] = choices[31][2];
 units[31] = "73";
 comments[31] = "Id Pregunta: 93. AGE A1 2015";
 preguntaids[31] = 93


//  Id pregunta: 74 Año de creación de pregunta: 2016
 questions[32]= "33)  Se&ntilde;ale la opci&oacute;n incorrecta respecto a SMTP:";
 choices[32]= new Array();
 choices[32][0] = "SMTP es capaz de transportar correo a trav&eacute;s de m&uacute;ltiples redes: entre nodos conectados por TCP en Internet, entre nodos conectados en una Intranet TCP/IP aislados por un cortafuegos, o entre nodos en un entorno LAN o WAN que est&eacute;n usando un protocolo de nivel de transporte distinto a TCP.";
 choices[32][1] = "Usando SMTP, un proceso puede transferir correo a otro proceso en la misma red o a otra red mediante un proceso gateway accesible en las dos redes.";
 choices[32][2] = "En SMTP un mensaje de correo puede pasar por una serie de nodos gateway intermedios en su camino desde el emisor al receptor &uacute;ltimo, sirvi&eacute;ndose de mecanismos para decidir el siguiente salto como el sistema de resoluci&oacute;n de nombres de dominio de Internet.";
 choices[32][3] = "En SMTP la transferencia de mensaje ocurre siempre en una conexi&oacute;n &uacute;nica entre el emisor SMTP y el receptor final SMTP.";
 answers[32] = choices[32][3];
 units[32] = "106";
 comments[32] = "Id Pregunta: 74. AGE A1 2015";
 preguntaids[32] = 74


//  Id pregunta: 714 Año de creación de pregunta: 2016
 questions[33]= "34)  Seg&uacute;n la Ley 19/2013 de transparencia, las unidades de informaci&oacute;n en el &aacute;mbito de la AGE (se&ntilde;ale la falsa):";
 choices[33]= new Array();
 choices[33][0] = "Son unidades especializadas que se encargan de recibir y dar tramitaci&oacute;n a las solicitudes de acceso a la informaci&oacute;n.";
 choices[33][1] = "Son unidades especializadas que aseguran la disponibilidad en la respectiva p&aacute;gina web o sede electr&oacute;nica de la informaci&oacute;n cuyo acceso se solicita con m&aacute;s frecuencia.";
 choices[33][2] = "La Oficina de Transparencia y Acceso a la Informaci&oacute;n P&uacute;blica es la unidad de informaci&oacute;n del Ministerio de la Presidencia.";
 choices[33][3] = "Son unidades especializadas en elaborar legislaci&oacute;n en el &aacute;mbito de la transparencia p&uacute;blica.";
 answers[33] = choices[33][3];
 units[33] = "22";
 comments[33] = "Id Pregunta: 714. Ley de transparencia";
 preguntaids[33] = 714


//  Id pregunta: 828 Año de creación de pregunta: 2016
 questions[34]= "35)  La recusaci&oacute;n pueden promoverla...";
 choices[34]= new Array();
 choices[34][0] = "Cualquier &oacute;rgano";
 choices[34][1] = "El interesado";
 choices[34][2] = "El interesado y el superior jer&aacute;rquico del &oacute;rgano de que se trate";
 choices[34][3] = "El interesado, el superior jer&aacute;rquico del &oacute;rgano de que se trate y el propio &oacute;rgano";
 answers[34] = choices[34][0];
 units[34] = "4, 7, 8, 9";
 comments[34] = "Id Pregunta: 828. Ley 40/2015";
 preguntaids[34] = 828


//  Id pregunta: 414 Año de creación de pregunta: 2016
 questions[35]= "36)  Los proyectos de disposiciones de car&aacute;cter general y los planes de especial relevancia econ&oacute;mica, que sometan a la aprobaci&oacute;n del Consejo de Ministros, incorporar&aacute;n:";
 choices[35]= new Array();
 choices[35][0] = "Un informe de impacto de g&eacute;nero.";
 choices[35][1] = "Un programa de igualdad de oportunidades.";
 choices[35][2] = "Un plan de Igualdad de Oportunidades.";
 choices[35][3] = "Un Decreto de Igualdad de Oportunidades.";
 answers[35] = choices[35][0];
 units[35] = "14";
 comments[35] = "Id Pregunta: 414. POLITICAS DE IGUALDAD";
 preguntaids[35] = 414


//  Id pregunta: 477 Año de creación de pregunta: 2016
 questions[36]= "37)  De conformidad con el art&iacute;culo 29.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales se remitir&aacute;n:";
 choices[36]= new Array();
 choices[36][0] = "Anualmente.";
 choices[36][1] = "Ninguna de las respuestas es correcta.";
 choices[36][2] = "Trimestralmente.";
 choices[36][3] = "Semestralmente.";
 answers[36] = choices[36][0];
 units[36] = "10";
 comments[36] = "Id Pregunta: 477. PRESUPUESTOS GENERALES";
 preguntaids[36] = 477


//  Id pregunta: 821 Año de creación de pregunta: 2016
 questions[37]= "38)  Los Delegados del Gobierno (se&ntilde;ala la incorrecta):";
 choices[37]= new Array();
 choices[37][0] = "representan al Gobierno de la Naci&oacute;n en el territorio de la respectiva Comunidad Aut&oacute;noma";
 choices[37][1] = "dirigir&aacute;n y supervisar&aacute;n la Administraci&oacute;n General del Estado en el territorio de las respectivas Comunidades Aut&oacute;nomas";
 choices[37][2] = "son &oacute;rganos directivos con rango de Director general";
 choices[37][3] = "ser&aacute;n nombrados y separados por Real Decreto del Consejo de Ministros, a propuesta del Presidente del Gobierno";
 answers[37] = choices[37][2];
 units[37] = "4, 7, 8, 9";
 comments[37] = "Id Pregunta: 821. Ley 40/2015";
 preguntaids[37] = 821


//  Id pregunta: 53 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Cu&aacute;l de los siguientes objetivos est&aacute; fuera del alcance de una reuni&oacute;n diaria de SCRUM (daily scrum)?";
 choices[38]= new Array();
 choices[38][0] = "Exponer las tareas no planificadas que tambi&eacute;n est&aacute;n haciendo los miembros del equipo.";
 choices[38][1] = "Resolver detalladamente los problemas que puedan tener los miembros del equipo.";
 choices[38][2] = "Poner de manifiesto el ritmo de trabajo de cada miembro del equipo.";
 choices[38][3] = "Identificar las tareas que puedan afectar a otros miembros del equipo.";
 answers[38] = choices[38][1];
 units[38] = "84";
 comments[38] = "Id Pregunta: 53. AGE A1 2015";
 preguntaids[38] = 53


//  Id pregunta: 397 Año de creación de pregunta: 2016
 questions[39]= "40)  Un comportamiento realizado con el prop&oacute;sito o el efecto de intimidar, degradar, ofender o atentar contra la dignidad de una persona en raz&oacute;n de su sexo, se denomina:";
 choices[39]= new Array();
 choices[39][0] = "Acoso sexual.";
 choices[39][1] = "Acoso por raz&oacute;n de sexo.";
 choices[39][2] = "Acoso laboral.";
 choices[39][3] = "Acoso mental.";
 answers[39] = choices[39][1];
 units[39] = "14";
 comments[39] = "Id Pregunta: 397. POLITICAS DE IGUALDAD";
 preguntaids[39] = 397


//  Id pregunta: 148 Año de creación de pregunta: 2016
 questions[40]= "41)  La publicaci&oacute;n del &laquo;Bolet&iacute;n Oficial del Estado&raquo; en la sede electr&oacute;nica del Organismo competente:";
 choices[40]= new Array();
 choices[40][0] = "Tiene car&aacute;cter supletorio respecto a la versi&oacute;n en formato papel";
 choices[40][1] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, aunque no se podr&aacute; derivar de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[40][2] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[40][3] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se habr&aacute;n de determinar necesariamente por Ley, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 answers[40] = choices[40][2];
 units[40] = "7";
 comments[40] = "Id Pregunta: 148. Ley 39/2015, Art&iacute;culo 131";
 preguntaids[40] = 148


//  Id pregunta: 675 Año de creación de pregunta: 2016
 questions[41]= "42)  Se&ntilde;ale cual de los siguientes factores no contribuye a la sostenibilidad del sistema de pensiones:";
 choices[41]= new Array();
 choices[41][0] = "El aumento de la esperanza de vida.";
 choices[41][1] = "La mejora del &iacute;ndice de natalidad.";
 choices[41][2] = "La reducci&oacute;n del desempleo.";
 choices[41][3] = "El incremento de la edad de jubilaci&oacute;n.";
 answers[41] = choices[41][0];
 units[41] = "14";
 comments[41] = "Id Pregunta: 675. Estructura social";
 preguntaids[41] = 675


//  Id pregunta: 845 Año de creación de pregunta: 2016
 questions[42]= "43)  Respecto a la reutilizaci&oacute;n de sistemas y aplicaciones de propiedad de la Administraci&oacute;n:";
 choices[42]= new Array();
 choices[42][0] = "Las Administraciones pondr&aacute;n siempre a disposici&oacute;n de cualquiera de ellas que lo solicite las aplicaciones, desarrolladas por sus servicios o que hayan sido objeto de contrataci&oacute;n y de cuyos derechos de propiedad intelectual sean titulares.";
 choices[42][1] = "Las aplicaciones a las que se refiere el apartado anterior podr&aacute;n ser declaradas como de fuentes abiertas, cuando de ello se derive una mayor transparencia en el funcionamiento de la Administraci&oacute;n P&uacute;blica o se fomente con ello la incorporaci&oacute;n de los ciudadanos a la Sociedad de la informaci&oacute;n.";
 choices[42][2] = "Las Administraciones P&uacute;blicas, con car&aacute;cter posterior a la adquisici&oacute;n, desarrollo o al mantenimiento a lo largo de todo el ciclo de vida de una aplicaci&oacute;n, tanto si se realiza con medios propios o por la contrataci&oacute;n de los servicios correspondientes, deber&aacute;n consultar en el directorio general de aplicaciones.";
 choices[42][3] = "En el directorio general de aplicaciones constar&aacute;n las aplicaciones disponibles de la Administraci&oacute;n General del Estado.";
 answers[42] = choices[42][1];
 units[42] = "4, 7, 8, 9";
 comments[42] = "Id Pregunta: 845. Ley 40/2015";
 preguntaids[42] = 845


//  Id pregunta: 760 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes no es una iniciativa propuesta por la Estrategia Europa 2020?";
 choices[43]= new Array();
 choices[43][0] = "Agenda digital para Europa";
 choices[43][1] = "Agenda de nuevas cualificaciones y empleos";
 choices[43][2] = "Juventud en movimiento";
 choices[43][3] = "Agenda Web 2.0";
 answers[43] = choices[43][3];
 units[43] = "19";
 comments[43] = "Id Pregunta: 760. Europa 2020";
 preguntaids[43] = 760


//  Id pregunta: 725 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Cu&aacute;les son las caracter&iacute;sticas del sprint 0 en SCRUM?";
 choices[44]= new Array();
 choices[44][0] = "Se dejan listos los entornos de desarrollo";
 choices[44][1] = "Se trabaja en el product backlog, dejando listos los product backlog &iacute;tems priorizados y estimados";
 choices[44][2] = "Se hace una previsi&oacute;n del reparto de historias de usuario por iteraci&oacute;n";
 choices[44][3] = "Todas las anteriores son correctas";
 answers[44] = choices[44][3];
 units[44] = "34, 84";
 comments[44] = "Id Pregunta: 725. Metodologias &aacute;giles";
 preguntaids[44] = 725


//  Id pregunta: 185 Año de creación de pregunta: 2016
 questions[45]= "46)  Se&ntilde;ale cu&aacute;l de las siguientes funciones NO est&aacute; atribuida constitucionalmente al Rey:";
 choices[45]= new Array();
 choices[45][0] = "El mando supremo de las Fuerzas Armadas.";
 choices[45][1] = "Autorizar indultos generales.";
 choices[45][2] = "Sancionar las leyes.";
 choices[45][3] = "Promulgar las leyes.";
 answers[45] = choices[45][1];
 units[45] = "1";
 comments[45] = "Id Pregunta: 185. CONSTITUCION1978";
 preguntaids[45] = 185


//  Id pregunta: 498 Año de creación de pregunta: 2016
 questions[46]= "47)  A los efectos de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , forman parte del sector p&uacute;blico estatal:";
 choices[46]= new Array();
 choices[46][0] = "Las respuestas a) y b) son correctas.";
 choices[46][1] = "Los organismos aut&oacute;nomos dependientes de la Administraci&oacute;n General del Estado.";
 choices[46][2] = "Las entidades p&uacute;blicas empresariales, dependientes de la Administraci&oacute;n General del Estado, o de cualesquiera otros organismos p&uacute;blicos vinculados o dependientes de ella.";
 choices[46][3] = "Las respuestas a) y b) no son correctas.";
 answers[46] = choices[46][0];
 units[46] = "10";
 comments[46] = "Id Pregunta: 498. PRESUPUESTOS GENERALES";
 preguntaids[46] = 498


//  Id pregunta: 292 Año de creación de pregunta: 2016
 questions[47]= "48)  Indique la afirmaci&oacute;n correcta relativa al Parlamento Europeo:";
 choices[47]= new Array();
 choices[47][0] = "Se reunir&aacute; con previa convocatoria el segundo martes de marzo.";
 choices[47][1] = "Se reunir&aacute; sin necesidad de previa convocatoria el segundo martes de marzo.";
 choices[47][2] = "Se reunir&aacute; la segunda semana de enero con previa convocatoria.";
 choices[47][3] = "Se reunir&aacute; la tercera semana de enero sin previa convocatoria.";
 answers[47] = choices[47][1];
 units[47] = "5";
 comments[47] = "Id Pregunta: 292. UNION EUROPEA";
 preguntaids[47] = 292


//  Id pregunta: 202 Año de creación de pregunta: 2016
 questions[48]= "49)  Se&ntilde;ale c&oacute;mo se re&uacute;nen los miembros del Gobierno:";
 choices[48]= new Array();
 choices[48][0] = "En Consejo de Ministros y en Comisiones Delegadas del Gobierno.";
 choices[48][1] = "En Consejo de Ministros y en Consejo de Vicepresidentes.";
 choices[48][2] = "En Consejo de Ministros y en Comisiones Delegadas de las Cortes Generales.";
 choices[48][3] = "En Comisiones Delegadas del Gobierno y Consejo de Estado.";
 answers[48] = choices[48][0];
 units[48] = "1";
 comments[48] = "Id Pregunta: 202. CONSTITUCION1978";
 preguntaids[48] = 202


//  Id pregunta: 578 Año de creación de pregunta: 2016
 questions[49]= "50)  Se&ntilde;ale, de entre los siguientes, cu&aacute;l es un gestor de base de datos relacional:";
 choices[49]= new Array();
 choices[49][0] = "PostgreSQL";
 choices[49][1] = "Datawarehouse";
 choices[49][2] = "Snowflake";
 choices[49][3] = "CouchDB";
 answers[49] = choices[49][0];
 units[49] = "61";
 comments[49] = "Id Pregunta: 578. Tema 61. TAI 2016.";
 preguntaids[49] = 578


//  Id pregunta: 713 Año de creación de pregunta: 2016
 questions[50]= "51)  En relaci&oacute;n al Portal de Transparencia de la AGE:";
 choices[50]= new Array();
 choices[50][0] = "La informaci&oacute;n m&aacute;s relevante para el ciudadano y de frecuente acceso estar&aacute; disponible en el Portal de Transparencia, no pudiendo accederse a informaci&oacute;n que no se encuentre ya publicada.";
 choices[50][1] = "El ejercicio del Derecho de Acceso abre con la administraci&oacute;n un procedimiento administrativo que exige la identificaci&oacute;n del solicitante.";
 choices[50][2] = "En el Portal de Transparencia de la AGE s&oacute;lo se puede acceder a informaci&oacute;n de tipo institucional.";
 choices[50][3] = "El CTBG es el responsable del Portal de Transparencia.";
 answers[50] = choices[50][1];
 units[50] = "22";
 comments[50] = "Id Pregunta: 713. Portal de Transparencia";
 preguntaids[50] = 713


//  Id pregunta: 465 Año de creación de pregunta: 2016
 questions[51]= "52)  Seg&uacute;n el art&iacute;culo 26 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la programaci&oacute;n presupuestaria se regir&aacute; por los principios de:";
 choices[51]= new Array();
 choices[51][0] = "Estabilidad presupuestaria, sostenibilidad financiera, eficacia, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[51][1] = "Estabilidad presupuestaria, sostenibilidad financiera, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[51][2] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, responsabilidad y lealtad institucional.";
 choices[51][3] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 answers[51] = choices[51][3];
 units[51] = "10";
 comments[51] = "Id Pregunta: 465. PRESUPUESTOS GENERALES";
 preguntaids[51] = 465


//  Id pregunta: 813 Año de creación de pregunta: 2016
 questions[52]= "53)  Las Delegaciones del Gobierno tendr&aacute;n su sede en:";
 choices[52]= new Array();
 choices[52][0] = "la localidad elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[52][1] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[52][2] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[52][3] = "la localidad donde elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 answers[52] = choices[52][2];
 units[52] = "4, 7, 8, 9";
 comments[52] = "Id Pregunta: 813. Ley 40/2015";
 preguntaids[52] = 813


//  Id pregunta: 543 Año de creación de pregunta: 2016
 questions[53]= "54)  Se&ntilde;ala la correcta:";
 choices[53]= new Array();
 choices[53][0] = "la falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n impedir&aacute; que se tenga por realizado el acto de que se trate";
 choices[53][1] = "el documento electr&oacute;nico que acredite el resultado de la consulta al registro electr&oacute;nico de apoderamientos correspondiente tendr&aacute; la condici&oacute;n de acreditaci&oacute;n a estos efectos";
 choices[53][2] = "los registros electr&oacute;nicos generales y particulares de apoderamientos pertenecientes a todas y cada una de las Administraciones, ser&aacute;n preferiblemente interoperables entre s&iacute;";
 choices[53][3] = "el interesado no podr&aacute; comparecer por s&iacute; mismo en un procedimiento en el que haya designado representante";
 answers[53] = choices[53][1];
 units[53] = "7";
 comments[53] = "Id Pregunta: 543. LEY 39/2015";
 preguntaids[53] = 543


//  Id pregunta: 802 Año de creación de pregunta: 2016
 questions[54]= "55)  La Administraci&oacute;n General del Estado se organiza:";
 choices[54]= new Array();
 choices[54][0] = "en Ministerios";
 choices[54][1] = "en Presidencia del Gobierno y en Ministerios";
 choices[54][2] = "en Presidencia del Gobierno, en Ministerios y en Secretar&iacute;as Generales";
 choices[54][3] = "en Presidencia del Gobierno, en Ministerios, en Secretar&iacute;as Generales y en el Servicio Exterior";
 answers[54] = choices[54][1];
 units[54] = "4, 7, 8, 9";
 comments[54] = "Id Pregunta: 802. Ley 40/2015";
 preguntaids[54] = 802


//  Id pregunta: 169 Año de creación de pregunta: 2016
 questions[55]= "56)  En lo que se refiere a comunicaciones m&oacute;viles en Europa,";
 choices[55]= new Array();
 choices[55][0] = "en 2020 se liberar&aacute;n las bandas de frecuencia superior a 10 Ghz para el despliegue de 5G";
 choices[55][1] = "en 2020 se espera desplegar la red 5G a gran escala.";
 choices[55][2] = "en 2020 se espera desplegar la red 4G-plus.";
 choices[55][3] = "en 2020 se liberar&aacute; la banda de frecuencia de 800 Mhz para finalizar el despliegue de 4G";
 answers[55] = choices[55][1];
 units[55] = "19";
 comments[55] = "Id Pregunta: 169. https://ec.europa.eu/digital-single-market/en/5g-europe-action-plan";
 preguntaids[55] = 169


//  Id pregunta: 26 Año de creación de pregunta: 2016
 questions[56]= "57)  Usted, como directivo TIC de la AGE, decide crear un portal web, con una direcci&oacute;n electr&oacute;nica nueva, con el objetivo de informar al ciudadano sobre determinados aspectos relacionados con su unidad. &iquest;Cu&aacute;l de los siguientes tipos de certificado utilizar&iacute;a para identificar a los servidores de su portal informativo?";
 choices[56]= new Array();
 choices[56][0] = "Sello electr&oacute;nico";
 choices[56][1] = "Sede electr&oacute;nica";
 choices[56][2] = "Servidor seguro (SSL/TLS)";
 choices[56][3] = "Empleado p&uacute;blico";
 answers[56] = choices[56][2];
 units[56] = "7";
 comments[56] = "Id Pregunta: 26. AGE A1 2015";
 preguntaids[56] = 26


//  Id pregunta: 768 Año de creación de pregunta: 2016
 questions[57]= "58)  Las Universidades p&uacute;blicas se regir&aacute;n por:";
 choices[57]= new Array();
 choices[57][0] = "las previsiones de la presente Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[57][1] = "su normativa espec&iacute;fica y supletoriamente por las previsiones de la presente Ley";
 choices[57][2] = "exclusivamente por su normativa espec&iacute;fica";
 choices[57][3] = "exclusivamente por las previsiones de la presente Ley";
 answers[57] = choices[57][1];
 units[57] = "4, 7, 8, 9";
 comments[57] = "Id Pregunta: 768. Ley 40/2015";
 preguntaids[57] = 768


//  Id pregunta: 61 Año de creación de pregunta: 2016
 questions[58]= "59)  Indique a partir de qu&eacute; versi&oacute;n del sistema operativo Android se introdujo la posibilidad de que el usuario pudiera gestionar la concesi&oacute;n de permisos para cada aplicaci&oacute;n:";
 choices[58]= new Array();
 choices[58][0] = "Lollipop";
 choices[58][1] = "Jelly Bean";
 choices[58][2] = "Marshmallow";
 choices[58][3] = "KitKat";
 answers[58] = choices[58][2];
 units[58] = "59";
 comments[58] = "Id Pregunta: 61. AGE A1 2015";
 preguntaids[58] = 61


//  Id pregunta: 709 Año de creación de pregunta: 2016
 questions[59]= "60)  En base a la Ley 19/2013 de Transparencia, Acceso a la Informaci&oacute;n P&uacute;blica y Buen Gobierno se&ntilde;ale la afirmaci&oacute;n verdadera:";
 choices[59]= new Array();
 choices[59][0] = "El derecho de acceso a la informaci&oacute;n p&uacute;blica supone, entre otros, que el sujeto obligado a ello publique de forma peri&oacute;dica y actualizada la informaci&oacute;n cuyo conocimiento sea relevante para garantizar la transparencia de su actividad.";
 choices[59][1] = "Las entidades privadas no est&aacute;n sujetas a obligaciones de transparencia seg&uacute;n la Ley 19/2013.";
 choices[59][2] = "Se admitir&aacute;n a tr&aacute;mite, sin excepci&oacute;n, todas las solicitudes de acceso a la informaci&oacute;n por parte de los ciudadanos.";
 choices[59][3] = "El cumplimiento por la Administraci&oacute;n General del Estado de las obligaciones de publicidad activa ser&aacute; objeto de control por parte del CTBG.";
 answers[59] = choices[59][3];
 units[59] = "22";
 comments[59] = "Id Pregunta: 709. Ley de transparencia";
 preguntaids[59] = 709


//  Id pregunta: 321 Año de creación de pregunta: 2016
 questions[60]= "61)  Indique el n&uacute;mero de Diputados del Parlamento Europeo que actualmente le corresponden a Espa&ntilde;a:";
 choices[60]= new Array();
 choices[60][0] = "Cincuenta y cuatro.";
 choices[60][1] = "Cincuenta.";
 choices[60][2] = "Cincuenta y cinco.";
 choices[60][3] = "Cincuenta y dos.";
 answers[60] = choices[60][1];
 units[60] = "5";
 comments[60] = "Id Pregunta: 321. UNION EUROPEA";
 preguntaids[60] = 321


//  Id pregunta: 3 Año de creación de pregunta: 2016
 questions[61]= "62)  En el lenguaje de modelado UML :";
 choices[61]= new Array();
 choices[61][0] = "Los diagramas de secuencia y colaboraci&oacute;n son usados para modelar el comportamiento del sistema, pudiendo usarse para modelar un caso de uso, una clase, o un m&eacute;todo complicado.";
 choices[61][1] = "Los diagramas de actividad son usados para modelar la configuraci&oacute;n de los elementos de procesado en tiempo de ejecuci&oacute;n.";
 choices[61][2] = "Los diagramas de componentes son usados para modelar la estructura del software, incluyendo las dependencias entre los componentes de software.";
 choices[61][3] = "Los diagramas de implementaci&oacute;n son usados para modelar interacciones entre objetos de dise&ntilde;o en el sistema.";
 answers[61] = choices[61][2];
 units[61] = "89";
 comments[61] = "Id Pregunta: 3. AGE A1 2015";
 preguntaids[61] = 3


//  Id pregunta: 540 Año de creación de pregunta: 2016
 questions[62]= "63)  Ser&aacute;/n interoperable/s con los registros electr&oacute;nicos generales y particulares de apoderamientos:";
 choices[62]= new Array();
 choices[62][0] = "los registros mercantiles";
 choices[62][1] = "los registros de la propiedad";
 choices[62][2] = "los protocolos notariales";
 choices[62][3] = "todas son correctas";
 answers[62] = choices[62][3];
 units[62] = "7";
 comments[62] = "Id Pregunta: 540. LEY 39/2015";
 preguntaids[62] = 540


//  Id pregunta: 146 Año de creación de pregunta: 2016
 questions[63]= "64)  La declaraci&oacute;n de lesividad de los actos anulables:";
 choices[63]= new Array();
 choices[63][0] = "No podr&aacute; adoptarse una vez transcurridos cuatro a&ntilde;os desde que se dict&oacute; el acto administrativo";
 choices[63][1] = "No es necesaria para impugnar ante el orden jurisdiccional contencioso-administrativo los actos favorables para los interesados";
 choices[63][2] = "Se adoptar&aacute; en todo caso por el Consejo de Estado";
 choices[63][3] = "Si el acto proviniera de las entidades que integran la Administraci&oacute;n Local, la declaraci&oacute;n de lesividad se adoptar&aacute; por la Comunidad Aut&oacute;noma a la que pertenece dicha entidad";
 answers[63] = choices[63][0];
 units[63] = "8";
 comments[63] = "Id Pregunta: 146. Ley 39/2015, Art&iacute;culo 107";
 preguntaids[63] = 146


//  Id pregunta: 854 Año de creación de pregunta: 2016
 questions[64]= "65)  Si disponemos de 6 discos SAS de 1TB netos configurados en RAID5, &iquest;de qu&eacute; capacidad neta se dispone en RAID5 en el sistema de almacenamiento?";
 choices[64]= new Array();
 choices[64][0] = "6 TB.";
 choices[64][1] = "5 TB.";
 choices[64][2] = "7 TB.";
 choices[64][3] = "3 TB.";
 answers[64] = choices[64][1];
 units[64] = "53";
 comments[64] = "Id Pregunta: 854. Xunta de Galicia 2015";
 preguntaids[64] = 854


//  Id pregunta: 728 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Cu&aacute;l es el n&uacute;mero de personas generalmete recomendados para cada equipo de Scrum?";
 choices[65]= new Array();
 choices[65][0] = "De 1 a  4 ";
 choices[65][1] = "De 3 a  7 ";
 choices[65][2] = "De 5 a  9";
 choices[65][3] = "De 7 a 11";
 answers[65] = choices[65][2];
 units[65] = "34, 84";
 comments[65] = "Id Pregunta: 728. Metodologias &aacute;giles";
 preguntaids[65] = 728


//  Id pregunta: 552 Año de creación de pregunta: 2016
 questions[66]= "67)  Entre las funciones a desarrollar por la Comisi&oacute;n Sectorial de la administraci&oacute;n electr&oacute;nica NO se encuentra:";
 choices[66]= new Array();
 choices[66][0] = "Asegurar la compatibilidad e interoperabilidad de los sistemas y aplicaciones empleados por las Administraciones P&uacute;blicas.";
 choices[66][1] = "Impulsar el desarrollo de la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a.";
 choices[66][2] = "Asegurar la cooperaci&oacute;n entre las Administraciones P&uacute;blicas para proporcionar informaci&oacute;n administrativa clara, actualizada e inequ&iacute;voca.";
 choices[66][3] = "El seguimiento de la ejecuci&oacute;n del Plan de Transformaci&oacute;n Digital";
 answers[66] = choices[66][3];
 units[66] = "26";
 comments[66] = "Id Pregunta: 552. Gobernanza TIC";
 preguntaids[66] = 552


//  Id pregunta: 472 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Qui&eacute;n remitir&aacute; a las Cortes Generales un informe trimestral acerca de la utilizaci&oacute;n del Fondo regulado en el Fondo de Contingencia de ejecuci&oacute;n presupuestaria seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria?";
 choices[67]= new Array();
 choices[67][0] = "El Ministro de Econom&iacute;a.";
 choices[67][1] = "El Gobierno.";
 choices[67][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[67][3] = "El Presidente del Gobierno.";
 answers[67] = choices[67][1];
 units[67] = "10";
 comments[67] = "Id Pregunta: 472. PRESUPUESTOS GENERALES";
 preguntaids[67] = 472


//  Id pregunta: 432 Año de creación de pregunta: 2016
 questions[68]= "69)  Las sociedades obligadas a presentar cuenta de p&eacute;rdidas y ganancias no abreviada, procurar&aacute;n incluir en su Consejo de Administraci&oacute;n un n&uacute;mero de mujeres que permita alcanzar la presencia equilibrada de mujeres y hombres en un plazo:";
 choices[68]= new Array();
 choices[68][0] = "De ocho a&ntilde;os.";
 choices[68][1] = "El d&iacute;a despu&eacute;s de la publicaci&oacute;n en el BOE de la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombre.";
 choices[68][2] = "Ambas son correctas.";
 choices[68][3] = "No existe un l&iacute;mite.";
 answers[68] = choices[68][0];
 units[68] = "14";
 comments[68] = "Id Pregunta: 432. POLITICAS DE IGUALDAD";
 preguntaids[68] = 432


//  Id pregunta: 818 Año de creación de pregunta: 2016
 questions[69]= "70)  Los Directores Insulares de la Administraci&oacute;n General del Estado (se&ntilde;ala la incorrecta):";
 choices[69]= new Array();
 choices[69][0] = "ser&aacute;n nombrados por el Delegado del Gobierno mediante el procedimiento de concurso-oposici&oacute;n";
 choices[69][1] = "ser&aacute;n nombrados entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades Locales, pertenecientes a Cuerpos o Escalas clasificados como Subgrupo A1";
 choices[69][2] = "dependen jer&aacute;rquicamente del Delegado del Gobierno en la Comunidad Aut&oacute;noma o del Subdelegado del Gobierno en la provincia, cuando este cargo exista";
 choices[69][3] = "ejercen, en su &aacute;mbito territorial, las competencias atribuidas por esta Ley a los Subdelegados del Gobierno en las provincias";
 answers[69] = choices[69][0];
 units[69] = "4, 7, 8, 9";
 comments[69] = "Id Pregunta: 818. Ley 40/2015";
 preguntaids[69] = 818


//  Id pregunta: 1 Año de creación de pregunta: 2016
 questions[70]= "71)  Los medios y servicios compartidos, establecidos en el Real Decreto 806/2014 dentro del modelo de gobernanza en el &aacute;mbito de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones de la Administraci&oacute;n General del Estado, son tales que:";
 choices[70]= new Array();
 choices[70][0] = "Su declaraci&oacute;n presupone que el servicio se encuentra en producci&oacute;n, listo para la adhesi&oacute;n de las diferentes unidades departamentales.";
 choices[70][1] = "Dado su car&aacute;cter obligatorio y sustitutivo, no se permite acordar excepciones por razones econ&oacute;micas, t&eacute;cnicas o de oportunidad sobrevenidas.";
 choices[70][2] = "Su declaraci&oacute;n establece la habilitaci&oacute;n para el desarrollo de las medidas t&eacute;cnicas, organizativas, presupuestarias y normativas.";
 choices[70][3] = "Su provisi&oacute;n se realiza directa y exclusivamente por medio de la Direcci&oacute;n General de Administraci&oacute;n Digital";
 answers[70] = choices[70][2];
 units[70] = "26";
 comments[70] = "Id Pregunta: 1. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";
 preguntaids[70] = 1


//  Id pregunta: 453 Año de creación de pregunta: 2016
 questions[71]= "72)  En los Presupuestos, &iquest;qu&eacute; es lo que se prev&eacute; liquidar?";
 choices[71]= new Array();
 choices[71][0] = "Los cr&eacute;ditos";
 choices[71][1] = "Las partidas presupuestarias";
 choices[71][2] = "Los derechos";
 choices[71][3] = "Las obligaciones";
 answers[71] = choices[71][2];
 units[71] = "10";
 comments[71] = "Id Pregunta: 453. PRESUPUESTOS GENERALES";
 preguntaids[71] = 453


//  Id pregunta: 608 Año de creación de pregunta: 2016
 questions[72]= "73)  En ITIL v3, entre las metas del Proceso de la Planificaci&oacute;n y Soporte de la Transici&oacute;n del Servicio, se incluye:";
 choices[72]= new Array();
 choices[72][0] = "Planificar y coordinar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[72][1] = "Identificar, gestionar y limitar riesgos que puedan interrumpir el servicio a partir de la fase de transici&oacute;n del servicio.";
 choices[72][2] = "Planificar, identificar y gestionar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[72][3] = "Todas las respuestas son correctas.";
 answers[72] = choices[72][1];
 units[72] = "101";
 comments[72] = "Id Pregunta: 608. Junta de Extremadura A1 2015";
 preguntaids[72] = 608


//  Id pregunta: 223 Año de creación de pregunta: 2016
 questions[73]= "74)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, durante el periodo de su mandato los Diputados y Senadores gozar&aacute;n asimismo de inmunidad y s&oacute;lo podr&aacute;n ser detenidos en caso de flagrante delito. No podr&aacute;n ser inculpados ni procesados sin la previa autorizaci&oacute;n:";
 choices[73]= new Array();
 choices[73][0] = "De la C&aacute;mara respectiva.";
 choices[73][1] = "Del Rey.";
 choices[73][2] = "Del Tribunal Constitucional.";
 choices[73][3] = "Del Tribunal Supremo.";
 answers[73] = choices[73][0];
 units[73] = "1";
 comments[73] = "Id Pregunta: 223. CONSTITUCION1978";
 preguntaids[73] = 223


//  Id pregunta: 315 Año de creación de pregunta: 2016
 questions[74]= "75)  El Colegio de Comisarios se re&uacute;ne:";
 choices[74]= new Array();
 choices[74][0] = "Una vez por semana.";
 choices[74][1] = "Una vez al mes.";
 choices[74][2] = "Dos veces en semana.";
 choices[74][3] = "Cuando lo acuerde el Presidente de la Comisi&oacute;n, y adem&aacute;s una vez al mes.";
 answers[74] = choices[74][0];
 units[74] = "5";
 comments[74] = "Id Pregunta: 315. UNION EUROPEA";
 preguntaids[74] = 315


