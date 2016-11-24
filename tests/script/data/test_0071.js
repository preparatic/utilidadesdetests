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

//  Id pregunta: 10331 Año de creación de pregunta: 2016
 questions[0]= "1)  Tras el tratado de Niza, &iquest;cu&aacute;ntos eurodiputados son elegidos en el Estado espa&ntilde;ol?:";
 choices[0]= new Array();
 choices[0][0] = "90";
 choices[0][1] = "50";
 choices[0][2] = "64";
 choices[0][3] = "60";
 answers[0] = choices[0][1];
 units[0] = "5";
 comments[0] = "Id Pregunta: 10331. UNION EUROPEA";


//  Id pregunta: 10356 Año de creación de pregunta: 2016
 questions[1]= "2)  Se&ntilde;ale la respuesta correcta respecto a las directivas comunitarias:";
 choices[1]= new Array();
 choices[1][0] = "No se aplican directamente en los Estados.";
 choices[1][1] = "No son vinculantes.";
 choices[1][2] = "Habitualmente se dictan sobre materias que son competencias exclusivas de la Uni&oacute;n Europea.";
 choices[1][3] = "Tienen alcance general.";
 answers[1] = choices[1][0];
 units[1] = "5";
 comments[1] = "Id Pregunta: 10356. UNION EUROPEA";


//  Id pregunta: 10605 Año de creación de pregunta: 2016
 questions[2]= "3)  En ITIL v3, entre los procesos de la &ldquo;Fase del Ciclo de Vida: Dise&ntilde;o del Servicio&rdquo;, est&aacute;n:";
 choices[2]= new Array();
 choices[2][0] = "Gesti&oacute;n del Cat&aacute;logo de Servicios y Gesti&oacute;n de la Cartera de Servicios.";
 choices[2][1] = "Gesti&oacute;n de la Cartera de Servicio y Gesti&oacute;n de la Seguridad de la Informaci&oacute;n.";
 choices[2][2] = "Gesti&oacute;n de la Disponibilidad y Gesti&oacute;n de la Capacidad.";
 choices[2][3] = "Gesti&oacute;n de Suministradores y Gesti&oacute;n de Eventos.";
 answers[2] = choices[2][2];
 units[2] = "101";
 comments[2] = "Id Pregunta: 10605. Junta de Extremadura A1 2015";


//  Id pregunta: 10601 Año de creación de pregunta: 2016
 questions[3]= "4)  Los criptosistemas pueden clasificarse en:";
 choices[3]= new Array();
 choices[3][0] = "Concretos, Estables e Inestables.";
 choices[3][1] = "Sim&eacute;tricos, Paralelos y Referenciales.";
 choices[3][2] = "Asim&eacute;tricos, Referenciales y Concretos.";
 choices[3][3] = "Sim&eacute;tricos, Asim&eacute;tricos e H&iacute;bridos.";
 answers[3] = choices[3][3];
 units[3] = "76";
 comments[3] = "Id Pregunta: 10601. Junta de Extremadura A1 2015";


//  Id pregunta: 10459 Año de creación de pregunta: 2016
 questions[4]= "5)  Seg&uacute;n el art&iacute;culo 41 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, las operaciones financieras que se distinguen son:";
 choices[4]= new Array();
 choices[4][0] = "Enajenaci&oacute;n de inversiones reales y transferencias de capital.";
 choices[4][1] = "Pasivos financieros y transferencias de capital.";
 choices[4][2] = "Activos financieros y pasivos financieros.";
 choices[4][3] = "Activos financieros y enajenaci&oacute;n de inversiones reales.";
 answers[4] = choices[4][2];
 units[4] = "10";
 comments[4] = "Id Pregunta: 10459. PRESUPUESTOS GENERALES";


//  Id pregunta: 10106 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;En qu&eacute; consiste el paradigma MapReduce?";
 choices[5]= new Array();
 choices[5][0] = "Map toma un conjunto de datos y lo convierte en otro conjunto donde los elementos individuales son separados en tuplas (pares clave/valor)";
 choices[5][1] = "Reduce obtiene la salida de map como datos de entrada y combina tuplas en un conjunto m&aacute;s peque&ntilde;o de las mismas";
 choices[5][2] = "A) y B) son verdaderas";
 choices[5][3] = "A) es la definici&oacute;n del procedimiento intermedio Shuffle";
 answers[5] = choices[5][2];
 units[5] = "73";
 comments[5] = "Id Pregunta: 10106. ";


//  Id pregunta: 10539 Año de creación de pregunta: 2016
 questions[6]= "7)  Los asientos que se realicen en los registros electr&oacute;nicos generales y particulares de apoderamientos deber&aacute;n contener, al menos: (se&ntilde;ala la incorrecta)";
 choices[6]= new Array();
 choices[6][0] = "nombre y apellidos o la denominaci&oacute;n o raz&oacute;n social, documento nacional de identidad, n&uacute;mero de identificaci&oacute;n fiscal o documento equivalente del poderdante y del apoderado";
 choices[6][1] = "causas de anulaci&oacute;n del apoderamiento";
 choices[6][2] = "per&iacute;odo de tiempo por el cual se otorga el poder";
 choices[6][3] = "tipo de poder seg&uacute;n las facultades que otorgue";
 answers[6] = choices[6][1];
 units[6] = "7";
 comments[6] = "Id Pregunta: 10539. LEY 39/2015";


//  Id pregunta: 10294 Año de creación de pregunta: 2016
 questions[7]= "8)  Indique a qui&eacute;n corresponde la funci&oacute;n de promover el inter&eacute;s general de la Uni&oacute;n Europea y tomar las iniciativas adecuadas con este fin:";
 choices[7]= new Array();
 choices[7][0] = "Al Consejo Europeo.";
 choices[7][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[7][2] = "A la Comisi&oacute;n Europea.";
 choices[7][3] = "Al Parlamento Europeo.";
 answers[7] = choices[7][2];
 units[7] = "5";
 comments[7] = "Id Pregunta: 10294. UNION EUROPEA";


//  Id pregunta: 10645 Año de creación de pregunta: 2016
 questions[8]= "9)  Seg&uacute;n la ley de igualdad entre mujeres y hombres y contra la violencia de g&eacute;nero en Extremadura: &iquest;qu&eacute; &oacute;rgano tiene como fin esencial promover las condiciones para que la igualdad entre los sexos sea real y efectiva dentro del &aacute;mbito de competencias de la Junta de Extremadura?";
 choices[8]= new Array();
 choices[8][0] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sociales.";
 choices[8][1] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sanitarias.";
 choices[8][2] = "El Organismo P&uacute;blico de la Mujer.";
 choices[8][3] = "El Instituto de la Mujer de Extremadura.";
 answers[8] = choices[8][3];
 units[8] = "14";
 comments[8] = "Id Pregunta: 10645. Junta de Extremadura A1 2015";


//  Id pregunta: 10659 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;De qu&eacute; modelo de programaci&oacute;n es una implementaci&oacute;n Hadoop?";
 choices[9]= new Array();
 choices[9][0] = "Orientaci&oacute;n a objetos";
 choices[9][1] = "MapReduce";
 choices[9][2] = "Pipeline filtering";
 choices[9][3] = "Programaci&oacute;n funcional";
 answers[9] = choices[9][1];
 units[9] = "73";
 comments[9] = "Id Pregunta: 10659. ";


//  Id pregunta: 10055 Año de creación de pregunta: 2016
 questions[10]= "11)  WS-Security contiene especificaciones sobre:";
 choices[10]= new Array();
 choices[10][0] = "La publicaci&oacute;n, localizaci&oacute;n y enlazado de los Servicios Web.";
 choices[10][1] = "La forma de conseguir integridad y seguridad en los mensajes SOAP.";
 choices[10][2] = "Las pol&iacute;ticas en materia de seguridad aplicables a un sistema de informaci&oacute;n.";
 choices[10][3] = "El env&iacute;o de datagramas sin establecimiento previo de una conexi&oacute;n.";
 answers[10] = choices[10][1];
 units[10] = "119";
 comments[10] = "Id Pregunta: 10055. AGE A1 2015";


//  Id pregunta: 10503 Año de creación de pregunta: 2016
 questions[11]= "12)  Respecto a la Ley Org&aacute;nica 2/2012 se&ntilde;ale la respuesta falsa:";
 choices[11]= new Array();
 choices[11][0] = "La elaboraci&oacute;n, aprobaci&oacute;n y ejecuci&oacute;n de los Presupuestos y dem&aacute;s actuaciones que afecten a los gastos o ingresos de las Administraciones P&uacute;blicas y dem&aacute;s entidades que forman parte del sector p&uacute;blico se someter&aacute; al principio de estabilidad presupuestaria.";
 choices[11][1] = "Ninguna Administraci&oacute;n P&uacute;blica podr&aacute; incurrir en d&eacute;ficit estructural, definido como d&eacute;ficit ajustado del ciclo, neto de medidas excepcionales y temporales.";
 choices[11][2] = "Excepcionalmente, el Estado y las Comunidades Aut&oacute;nomas podr&aacute;n incurrir en d&eacute;ficit estructural en caso de cat&aacute;strofes naturales, recesi&oacute;n econ&oacute;mica grave o situaciones de emergencia extraordinaria que escapen al control de las Administraciones P&uacute;blicas y perjudiquen considerablemente su situaci&oacute;n financiera o su sostenibilidad econ&oacute;mica o social.";
 choices[11][3] = "Las Corporaciones Locales deber&aacute;n mantener una posici&oacute;n de equilibrio presupuestario.";
 answers[11] = choices[11][3];
 units[11] = "10";
 comments[11] = "Id Pregunta: 10503. PRESUPUESTOS GENERALES";


//  Id pregunta: 10057 Año de creación de pregunta: 2016
 questions[12]= "13)  Con respecto a ITIL se&ntilde;ale qu&eacute; afirmaci&oacute;n es cierta:";
 choices[12]= new Array();
 choices[12][0] = "Constituye una metodolog&iacute;a exhaustiva de pasos a seguir en el dise&ntilde;o de servicios TI.";
 choices[12][1] = "Da instrucciones de trabajo concretas, asignado tareas a personas.";
 choices[12][2] = "Los organismos tecnol&oacute;gicamente m&aacute;s punteros de la Administraci&oacute;n General del Estado se encuentran certificados en ITIL.";
 choices[12][3] = "Constituye un conjunto de mejores pr&aacute;cticas para la gesti&oacute;n de servicios TI.";
 answers[12] = choices[12][3];
 units[12] = "101";
 comments[12] = "Id Pregunta: 10057. AGE A1 2015";


//  Id pregunta: 10130 Año de creación de pregunta: 2016
 questions[13]= "14)  Dentro del Pacto Fiscal Europeo de 2012, cu&aacute;l de estos no corresponde a uno de los principales puntos contenidos:";
 choices[13]= new Array();
 choices[13][0] = "La obligaci&oacute;n de mantener el d&eacute;ficit p&uacute;blico por debajo del 3% del PIB.";
 choices[13][1] = "La obligaci&oacute;n de los pa&iacute;ses con una deuda p&uacute;blica superior al 60% del PIB a caer dentro de este l&iacute;mite en 20 a&ntilde;os, a una tasa igual a la vig&eacute;sima parte de la franquicia de cada anualidad.";
 choices[13][2] = "El compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional.";
 choices[13][3] = "El compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,5 % de la PIB y, en aquellos pa&iacute;ses en los que la deuda es inferior al 50 % del PIB, 2%.";
 answers[13] = choices[13][3];
 units[13] = "12";
 comments[13] = "Id Pregunta: 10130. Leyes modelo econ&oacute;mico";


//  Id pregunta: 10537 Año de creación de pregunta: 2016
 questions[14]= "15)  Respecto a los registros electr&oacute;nicos de apoderamientos no es correcto:";
 choices[14]= new Array();
 choices[14][0] = "en el &aacute;mbito estatal, este registro ser&aacute; el Registro Electr&oacute;nico de Apoderamientos de la Administraci&oacute;n General del Estado";
 choices[14][1] = "en ellos no constar&aacute; el bastanteo realizado del poder";
 choices[14][2] = "los registros generales de apoderamientos no impedir&aacute;n la existencia de registros particulares en cada Organismo";
 choices[14][3] = "cada Organismo podr&aacute; disponer de su propio registro electr&oacute;nico de apoderamientos";
 answers[14] = choices[14][1];
 units[14] = "7";
 comments[14] = "Id Pregunta: 10537. LEY 39/2015";


//  Id pregunta: 10420 Año de creación de pregunta: 2016
 questions[15]= "16)  La Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, recoge que deber&aacute;n elaborar y aplicar un plan de igualdad, aquellas empresas con m&aacute;s de:";
 choices[15]= new Array();
 choices[15][0] = "150 trabajadores/as.";
 choices[15][1] = "200 trabajadores/as.";
 choices[15][2] = "250 trabajadores/as.";
 choices[15][3] = "300 trabajadores/as.";
 answers[15] = choices[15][2];
 units[15] = "14";
 comments[15] = "Id Pregunta: 10420. POLITICAS DE IGUALDAD";


//  Id pregunta: 10075 Año de creación de pregunta: 2016
 questions[16]= "17)  Las transferencias internacionales de datos de car&aacute;cter personal:";
 choices[16]= new Array();
 choices[16][0] = "Se regulan en los art&iacute;culos 33 y 34 de la Ley Org&aacute;nica 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal y en el T&iacute;tulo VI del Real Decreto 1720/2007 por el que se aprueba el Reglamento de desarrollo de la Ley Org&aacute;nica 15/1999.";
 choices[16][1] = "Una transferencia internacional de datos, es un tratamiento de datos que supone una transmisi&oacute;n de los mismos fuera del territorio de la Uni&oacute;n Europea (UE).";
 choices[16][2] = "La Decisi&oacute;n de la Comisi&oacute;n 2000/520/CE, con arreglo a la Directiva 95/46/CE, permite actualmente realizar transferencias de datos a Estados Unidos si se cumplen los principios del acuerdo de Puerto Seguro.";
 choices[16][3] = "Precisan, en todo caso, la autorizaci&oacute;n previa de la Direcci&oacute;n de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[16] = choices[16][0];
 units[16] = "35";
 comments[16] = "Id Pregunta: 10075. AGE A1 2015";


//  Id pregunta: 10520 Año de creación de pregunta: 2016
 questions[17]= "18)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se denomina:";
 choices[17]= new Array();
 choices[17][0] = "De los interesados en el procedimiento";
 choices[17][1] = "De la actividad de las Administraciones P&uacute;blicas";
 choices[17][2] = "Disposiciones generales";
 choices[17][3] = "De los actos administrativos";
 answers[17] = choices[17][2];
 units[17] = "7";
 comments[17] = "Id Pregunta: 10520. LEY 39/2015";


//  Id pregunta: 10013 Año de creación de pregunta: 2016
 questions[18]= "19)  JNDI se usa para el acceso a:";
 choices[18]= new Array();
 choices[18][0] = "Datos de ficheros";
 choices[18][1] = "Sistemas gestores de bases de datos";
 choices[18][2] = "Directorios de nombres";
 choices[18][3] = "Colas de mensajer&iacute;a";
 answers[18] = choices[18][2];
 units[18] = "64";
 comments[18] = "Id Pregunta: 10013. AGE A1 2015";


//  Id pregunta: 10346 Año de creación de pregunta: 2016
 questions[19]= "20)  La duraci&oacute;n del mandato de un diputado del Parlamento Europeo es de:";
 choices[19]= new Array();
 choices[19][0] = "25 diputados lo son con car&aacute;cter vitalicio y el resto se renueva cada cinco a&ntilde;os.";
 choices[19][1] = "Cuatro a&ntilde;os, como un diputado espa&ntilde;ol.";
 choices[19][2] = "Cinco a&ntilde;os.";
 choices[19][3] = "Ninguna es correcta.";
 answers[19] = choices[19][2];
 units[19] = "5";
 comments[19] = "Id Pregunta: 10346. UNION EUROPEA";


//  Id pregunta: 10172 Año de creación de pregunta: 2016
 questions[20]= "21)  La Constituci&oacute;n Espa&ntilde;ola reconoce el derecho de reuni&oacute;n:";
 choices[20]= new Array();
 choices[20][0] = "Pac&iacute;fica y sin armas pero con necesidad de autorizaci&oacute;n previa.";
 choices[20][1] = "En lugares de tr&aacute;nsito p&uacute;blico previa autorizaci&oacute;n de la autoridad.";
 choices[20][2] = "En los casos de reuniones en lugares de tr&aacute;nsito p&uacute;blico y manifestaciones se dar&aacute; comunicaci&oacute;n previa a la autoridad.";
 choices[20][3] = "No es preciso realizar ninguna actuaci&oacute;n.";
 answers[20] = choices[20][2];
 units[20] = "1";
 comments[20] = "Id Pregunta: 10172. CONSTITUCION1978";


//  Id pregunta: 10492 Año de creación de pregunta: 2016
 questions[21]= "22)  El R&eacute;gimen Jur&iacute;dico de la Deuda del Estado se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[21]= new Array();
 choices[21][0] = "T&iacute;tulo V, Cap&iacute;tulo II, Secci&oacute;n 4.";
 choices[21][1] = "T&iacute;tulo V, Cap&iacute;tulo I, Secci&oacute;n 2.";
 choices[21][2] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[21][3] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[21] = choices[21][2];
 units[21] = "10";
 comments[21] = "Id Pregunta: 10492. PRESUPUESTOS GENERALES";


//  Id pregunta: 10258 Año de creación de pregunta: 2016
 questions[22]= "23)  El Art&iacute;culo 137 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Estado se organiza territorialmente en:";
 choices[22]= new Array();
 choices[22][0] = "Municipios, provincias y CCAA.";
 choices[22][1] = "En 17 CCAA m&aacute;s Ceuta y Melilla.";
 choices[22][2] = "En CCAA, 50 provincias y municipios.";
 choices[22][3] = "En municipios, en provincias, entidades locales menores y CCAA.";
 answers[22] = choices[22][2];
 units[22] = "1";
 comments[22] = "Id Pregunta: 10258. CONSTITUCION1978";


//  Id pregunta: 10423 Año de creación de pregunta: 2016
 questions[23]= "24)  Para contribuir a un reparto m&aacute;s equilibrado de las responsabilidades familiares se reconoce a los padres:";
 choices[23]= new Array();
 choices[23][0] = "El derecho a un permiso.";
 choices[23][1] = "Una prestaci&oacute;n por paternidad.";
 choices[23][2] = "Ambas son correctas.";
 choices[23][3] = "18 d&iacute;as de permiso.";
 answers[23] = choices[23][2];
 units[23] = "14";
 comments[23] = "Id Pregunta: 10423. POLITICAS DE IGUALDAD";


//  Id pregunta: 10561 Año de creación de pregunta: 2016
 questions[24]= "25)  El plan nacional de ciudades inteligentes...";
 choices[24]= new Array();
 choices[24][0] = "Es una apuesta liderada por la Federaci&oacute;n Espa&ntilde;ola de Municipios y Provincias";
 choices[24][1] = "Es una apuesta del ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[24][2] = "Es una apuesta liderada por una gran asociaci&oacute;n de empresas tecnol&oacute;gicas nacionales";
 choices[24][3] = "No existe";
 answers[24] = choices[24][1];
 units[24] = "19";
 comments[24] = "Id Pregunta: 10561. Ciudades Inteligentes";


//  Id pregunta: 10445 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;Cu&aacute;l de los siguientes datos NO es obligatorio que figure en la realizaci&oacute;n de una inscripci&oacute;n en el Registro electr&oacute;nico de Apoderamientos?";
 choices[25]= new Array();
 choices[25][0] = "Nombre y apellidos, denominaci&oacute;n o raz&oacute;n social y NIF del poderante.";
 choices[25][1] = "Per&iacute;odo de vigencia de los tr&aacute;mites objeto de apoderamiento.";
 choices[25][2] = "Fecha de otorgamiento.";
 choices[25][3] = "N&uacute;mero de referencia del alta y fecha de alta en el Registro.";
 answers[25] = choices[25][1];
 units[25] = "43";
 comments[25] = "Id Pregunta: 10445. SERVICIOS COMUNES";


//  Id pregunta: 10574 Año de creación de pregunta: 2016
 questions[26]= "27)  Son herramientas espec&iacute;ficas de control de versiones de software:";
 choices[26]= new Array();
 choices[26][0] = "Mercurial, Git y Apache Subversion.";
 choices[26][1] = "Gimp, Mercurial y Git.";
 choices[26][2] = "RedMine, Planner y OpenProj.";
 choices[26][3] = "Cassandra, Git y REDIS.";
 answers[26] = choices[26][0];
 units[26] = "92";
 comments[26] = "Id Pregunta: 10574. Tema 92. TAI 2016.";


//  Id pregunta: 10174 Año de creación de pregunta: 2016
 questions[27]= "28)  De conformidad con la Constituci&oacute;n Espa&ntilde;ola, &iquest; cu&aacute;l de los siguientes derechos y libertades es susceptible de tutela a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional?";
 choices[27]= new Array();
 choices[27][0] = "El derecho a la propiedad privada.";
 choices[27][1] = "El derecho de asociaci&oacute;n.";
 choices[27][2] = "El derecho de fundaci&oacute;n.";
 choices[27][3] = "El derecho de negociaci&oacute;n colectiva.";
 answers[27] = choices[27][1];
 units[27] = "1";
 comments[27] = "Id Pregunta: 10174. CONSTITUCION1978";


//  Id pregunta: 10209 Año de creación de pregunta: 2016
 questions[28]= "29)  Corresponde aprobar el proyecto de Ley de Presupuestos Generales del Estado a:";
 choices[28]= new Array();
 choices[28][0] = "El Ministerio de Econom&iacute;a y Hacienda.";
 choices[28][1] = "El Congreso de los Diputados.";
 choices[28][2] = "Las Cortes Generales.";
 choices[28][3] = "El Consejo de Ministros";
 answers[28] = choices[28][3];
 units[28] = "1";
 comments[28] = "Id Pregunta: 10209. CONSTITUCION1978";


//  Id pregunta: 10297 Año de creación de pregunta: 2016
 questions[29]= "30)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n a la Presidencia del Consejo:";
 choices[29]= new Array();
 choices[29][0] = "Es rotatoria y tiene una duraci&oacute;n de un a&ntilde;o.";
 choices[29][1] = "Es rotatoria y tiene una duraci&oacute;n de seis meses.";
 choices[29][2] = "Se nombra por el Parlamento para un per&iacute;odo de cinco a&ntilde;os.";
 choices[29][3] = "La ostenta el presidente de la Comisi&oacute;n.";
 answers[29] = choices[29][1];
 units[29] = "5";
 comments[29] = "Id Pregunta: 10297. UNION EUROPEA";


//  Id pregunta: 10072 Año de creación de pregunta: 2016
 questions[30]= "31)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[30]= new Array();
 choices[30][0] = "OASIS ha definido una notaci&oacute;n gr&aacute;fica est&aacute;ndar para WS-BPEL.";
 choices[30][1] = "BPEL4People es una extensi&oacute;n sobre WS-BPEL realizada para dar cobertura a escenarios que involucran interacci&oacute;n de personas con procesos de negocio.";
 choices[30][2] = "WS-BPEL es un lenguaje dise&ntilde;ado para el control distribuido de la invocaci&oacute;n de diferentes servicios Web que modelan un proceso de negocio.";
 choices[30][3] = "XPDL es una especificaci&oacute;n de lenguaje de definici&oacute;n de procesos creada por OASIS.";
 answers[30] = choices[30][1];
 units[30] = "86";
 comments[30] = "Id Pregunta: 10072. AGE A1 2015";


//  Id pregunta: 10406 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola garantiza la no discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[31]= new Array();
 choices[31][0] = "Art&iacute;culo 9.1 CE.";
 choices[31][1] = "Art&iacute;culo 53 CE.";
 choices[31][2] = "Art&iacute;culo 14 CE.";
 choices[31][3] = "Art&iacute;culo 16 CE.";
 answers[31] = choices[31][2];
 units[31] = "14";
 comments[31] = "Id Pregunta: 10406. POLITICAS DE IGUALDAD";


//  Id pregunta: 10608 Año de creación de pregunta: 2016
 questions[32]= "33)  Una de las condiciones que un &aacute;rbol debe cumplir para ser &aacute;rbol b, siendo n el orden del &aacute;rbol, es:";
 choices[32]= new Array();
 choices[32][0] = "Cada p&aacute;gina contiene como m&aacute;ximo 2n + 1 elementos.";
 choices[32][1] = "Cada p&aacute;gina, excepto la ra&iacute;z, contiene al menos n elementos.";
 choices[32][2] = "Cada p&aacute;gina o es una hoja o tiene m descendientes, siendo m el n&uacute;mero de elementos o claves que tiene.";
 choices[32][3] = "Las hojas no tienen por qu&eacute; estar al mismo nivel.";
 answers[32] = choices[32][1];
 units[32] = "56";
 comments[32] = "Id Pregunta: 10608. Junta de Extremadura A1 2015";


//  Id pregunta: 10132 Año de creación de pregunta: 2016
 questions[33]= "34)  Cu&aacute;l de las siguientes leyes no est&aacute; incluida en la reforma tributaria llevada a cabo en el a&ntilde;o 2014:";
 choices[33]= new Array();
 choices[33][0] = "Ley 26/2014, del Impuesto sobre la Renta de las Personas F&iacute;sicas";
 choices[33][1] = "Ley 27/2014, del Impuesto sobre Sociedades";
 choices[33][2] = "Ley 28/2014, de Impuestos Especiales";
 choices[33][3] = "Ley 29/2014, del Impuesto de Valor A&ntilde;adido";
 answers[33] = choices[33][3];
 units[33] = "12";
 comments[33] = "Id Pregunta: 10132. Leyes modelo econ&oacute;mico";


//  Id pregunta: 10188 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Puede el Estado transferir o delegar a las Comunidades Aut&oacute;nomas facultadas que son de su titularidad?";
 choices[34]= new Array();
 choices[34][0] = "No, en ning&uacute;n caso.";
 choices[34][1] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con cualquier tipo de facultades.";
 choices[34][2] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, sin que el Estado se pueda reservar ninguna forma de control.";
 choices[34][3] = ", mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, previendo en cada caso la correspondiente transferencia de medios financieros, as&iacute; como las formas de control que se reserve el Estado.";
 answers[34] = choices[34][3];
 units[34] = "1";
 comments[34] = "Id Pregunta: 10188. CONSTITUCION1978";


//  Id pregunta: 10081 Año de creación de pregunta: 2016
 questions[35]= "36)  El lenguaje SPARK es un subconjunto de:";
 choices[35]= new Array();
 choices[35][0] = "Java";
 choices[35][1] = "Fortran";
 choices[35][2] = "Ruby";
 choices[35][3] = "Ada";
 answers[35] = choices[35][3];
 units[35] = "73";
 comments[35] = "Id Pregunta: 10081. AGE A1 2015";


//  Id pregunta: 10122 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos NO forma parte de la estructura org&aacute;nica del Consejo de Transparencia y Buen Gobierno seg&uacute;n su Estatuto?";
 choices[36]= new Array();
 choices[36][0] = "El Presidente del Consejo de Transparencia y Buen Gobierno";
 choices[36][1] = "La Direcci&oacute;n General de Transparencia y Buen Gobierno";
 choices[36][2] = "La Comisi&oacute;n de Transparencia y Buen Gobierno";
 choices[36][3] = "La Subdirecci&oacute;n General de Reclamaciones";
 answers[36] = choices[36][1];
 units[36] = "22";
 comments[36] = "Id Pregunta: 10122. ";


//  Id pregunta: 10043 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;Cu&aacute;l de los siguientes principios NO est&aacute; recogido en el Manifiesto por el Desarrollo &Aacute;gil del Software?";
 choices[37]= new Array();
 choices[37][0] = "La simplicidad, o el arte de maximizar la cantidad de trabajo no realizado, es esencial.";
 choices[37][1] = "Aceptamos que los requisitos cambien, incluso en etapas tard&iacute;as del desarrollo. Los procesos &aacute;giles aprovechan el cambio para proporcionar ventaja competitiva al cliente.";
 choices[37][2] = "Las mejores arquitecturas, requisitos y dise&ntilde;os emergen por la aplicaci&oacute;n de unos procesos bien organizados.";
 choices[37][3] = "El software funcionando es la medida principal del progreso.";
 answers[37] = choices[37][2];
 units[37] = "34";
 comments[37] = "Id Pregunta: 10043. AGE A1 2015";


//  Id pregunta: 10457 Año de creación de pregunta: 2016
 questions[38]= "39)  Seg&uacute;n el art&iacute;culo 44.3 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los cr&eacute;ditos para la acci&oacute;n protectora en su modalidad no contributiva y universal se especificar&aacute;n:";
 choices[38]= new Array();
 choices[38][0] = "A nivel de secci&oacute;n de programa.";
 choices[38][1] = "A nivel de grupo de programa.";
 choices[38][2] = "Ninguna de las respuestas es correcta.";
 choices[38][3] = "A nivel de programa.";
 answers[38] = choices[38][3];
 units[38] = "10";
 comments[38] = "Id Pregunta: 10457. PRESUPUESTOS GENERALES";


//  Id pregunta: 10291 Año de creación de pregunta: 2016
 questions[39]= "40)  La duraci&oacute;n del mandato de los miembros del Tribunal de Cuentas de la Uni&oacute;n Europea es de:";
 choices[39]= new Array();
 choices[39][0] = "Tres a&ntilde;os.";
 choices[39][1] = "Dos a&ntilde;os y medio.";
 choices[39][2] = "Cinco a&ntilde;os.";
 choices[39][3] = "Seis a&ntilde;os.";
 answers[39] = choices[39][3];
 units[39] = "5";
 comments[39] = "Id Pregunta: 10291. UNION EUROPEA";


//  Id pregunta: 10283 Año de creación de pregunta: 2016
 questions[40]= "41)  Se&ntilde;ale cu&aacute;l no es una de las prioridades de la Estrategia Europa 2020:";
 choices[40]= new Array();
 choices[40][0] = "Crecimiento inteligente.";
 choices[40][1] = "Crecimiento inclusivo.";
 choices[40][2] = "Crecimiento sostenible.";
 choices[40][3] = "Crecimiento integrador.";
 answers[40] = choices[40][1];
 units[40] = "5";
 comments[40] = "Id Pregunta: 10283. UNION EUROPEA";


//  Id pregunta: 10514 Año de creación de pregunta: 2016
 questions[41]= "42)  El sector p&uacute;blico institucional se integra por:";
 choices[41]= new Array();
 choices[41][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[41][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[41][2] = "las Universidades p&uacute;blicas";
 choices[41][3] = "todas son correctas";
 answers[41] = choices[41][3];
 units[41] = "7";
 comments[41] = "Id Pregunta: 10514. LEY 39/2015";


//  Id pregunta: 10108 Año de creación de pregunta: 2016
 questions[42]= "43)  Son proyectos de Apache relacionados con Big Data:";
 choices[42]= new Array();
 choices[42][0] = "Hadoop";
 choices[42][1] = "Spark";
 choices[42][2] = "A) y B)";
 choices[42][3] = "Niguno de los anteriores";
 answers[42] = choices[42][2];
 units[42] = "73";
 comments[42] = "Id Pregunta: 10108. ";


//  Id pregunta: 10018 Año de creación de pregunta: 2016
 questions[43]= "44)  Indique en qu&eacute; capa del modelo OSI se establece la encriptaci&oacute;n:";
 choices[43]= new Array();
 choices[43][0] = "Aplicaci&oacute;n";
 choices[43][1] = "Sesi&oacute;n";
 choices[43][2] = "Presentaci&oacute;n";
 choices[43][3] = "Transporte";
 answers[43] = choices[43][2];
 units[43] = "105";
 comments[43] = "Id Pregunta: 10018. AGE A1 2015";


//  Id pregunta: 10623 Año de creación de pregunta: 2016
 questions[44]= "45)  En PHP 5.0, &iquest;cu&aacute;l es la regla para formar los nombres de las variables?";
 choices[44]= new Array();
 choices[44][0] = "Una variable debe comenzar con el signo $ seguido del nombre de la variable.";
 choices[44][1] = "Una variable debe comenzar con el signo &amp; seguido del nombre de la variable.";
 choices[44][2] = "Una variable debe comenzar por un car&aacute;cter num&eacute;rico.";
 choices[44][3] = "No hay regla para la formaci&oacute;n de los nombres de las variables.";
 answers[44] = choices[44][0];
 units[44] = "65";
 comments[44] = "Id Pregunta: 10623. Junta de Extremadura A1 2015";


//  Id pregunta: 10568 Año de creación de pregunta: 2016
 questions[45]= "46)  El sector Turismo en Espa&ntilde;a, representa:";
 choices[45]= new Array();
 choices[45][0] = "Alrededor de un 26% del PIB";
 choices[45][1] = "Alrededor de un 11% del PIB";
 choices[45][2] = "Alrededor de un 34% del PIB";
 choices[45][3] = "Alrededor de un 7% del PIB";
 answers[45] = choices[45][1];
 units[45] = "12";
 comments[45] = "Id Pregunta: 10568. Modelo econ&oacute;mico";


//  Id pregunta: 10372 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[46]= new Array();
 choices[46][0] = "El Parlamento y el Consejo.";
 choices[46][1] = "El Parlamento y la Comisi&oacute;n.";
 choices[46][2] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[46][3] = "La Comisi&oacute;n y el Consejo.";
 answers[46] = choices[46][2];
 units[46] = "5";
 comments[46] = "Id Pregunta: 10372. UNION EUROPEA";


//  Id pregunta: 10621 Año de creación de pregunta: 2016
 questions[47]= "48)  Seg&uacute;n el paradigma de Orientaci&oacute;n a Objetos, la herencia posibilita que:";
 choices[47]= new Array();
 choices[47][0] = "Cualquier cambio en los datos y operaciones contenidas dentro de una superclase es heredado inmediatamente por todas las subclases que se derivan de la superclase.";
 choices[47][1] = "Cualquier cambio en las operaciones y datos de la superclase no se refleja en todas las subclases.";
 choices[47][2] = "Cualquier cambio en una de las subclases que se heredan de la superclase se refleja en sus clases hermanas.";
 choices[47][3] = "En el paradigma de Orientaci&oacute;n a Objetos no existe la herencia.";
 answers[47] = choices[47][0];
 units[47] = "89";
 comments[47] = "Id Pregunta: 10621. Junta de Extremadura A1 2015";


//  Id pregunta: 10204 Año de creación de pregunta: 2016
 questions[48]= "49)  Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada reciben el t&iacute;tulo de:";
 choices[48]= new Array();
 choices[48][0] = "Decretos Legislativos.";
 choices[48][1] = "Decretos-leyes.";
 choices[48][2] = "Leyes de bases.";
 choices[48][3] = "Reales Decretos del Consejo de Ministros.";
 answers[48] = choices[48][0];
 units[48] = "1";
 comments[48] = "Id Pregunta: 10204. CONSTITUCION1978";


//  Id pregunta: 10065 Año de creación de pregunta: 2016
 questions[49]= "50)  Respecto a las arquitecturas de almacenamiento SAN Fibre Channel, indique la respuesta incorrecta:";
 choices[49]= new Array();
 choices[49][0] = "Cada equipo de la red se identifica de forma un&iacute;voca mediante una direcci&oacute;n de 64 bits.";
 choices[49][1] = "El SNS asigna los FCID y permite traducir de FCID a WWN.";
 choices[49][2] = "Los switches FC intercambian informaci&oacute;n de enrutado de tramas mediante un protocolo del tipo EGP adaptado a las redes FC.";
 choices[49][3] = "La se&ntilde;alizaci&oacute;n del canal de fibra puede funcionar sobre pares de cobre.";
 answers[49] = choices[49][2];
 units[49] = "53";
 comments[49] = "Id Pregunta: 10065. AGE A1 2015";


//  Id pregunta: 10504 Año de creación de pregunta: 2016
 questions[50]= "51)  Sobre el per&iacute;odo medio de pagos, se&ntilde;ale la respuesta falsa:";
 choices[50]= new Array();
 choices[50][0] = "Se entiende que existe sostenibilidad de la deuda comercial, cuando el periodo medio de pago a los proveedores no supere el plazo m&aacute;ximo previsto en la normativa sobre morosidad.";
 choices[50][1] = "Este control informatizado y sistematizado de las facturas favorecer&aacute; un seguimiento riguroso de la morosidad a trav&eacute;s de un indicador, el periodo medio de pagos, que visualizar&aacute; el volumen de deuda comercial de las Administraciones P&uacute;blicas.";
 choices[50][2] = "Para el c&aacute;lculo econ&oacute;mico del per&iacute;odo medio de pago a proveedores, se tendr&aacute;n en cuenta las facturas expedidas desde el 1 de enero de 2015 que consten en el registro contable de facturas o sistema equivalente y las certificaciones mensuales de obra aprobadas a partir de la misma fecha.";
 choices[50][3] = "El per&iacute;odo medio de pagos se calcular&aacute; mediante la siguiente f&oacute;rmula: Periodo medio de pago global a proveedores = &Sigma; (periodo medio de pago de cada entidad x importe operaciones de la entidad)/ &Sigma; importe operaciones de las entidades";
 answers[50] = choices[50][2];
 units[50] = "10";
 comments[50] = "Id Pregunta: 10504. PRESUPUESTOS GENERALES";


//  Id pregunta: 10092 Año de creación de pregunta: 2016
 questions[51]= "52)  Seg&uacute;n AENOR, la certificaci&oacute;n es:";
 choices[51]= new Array();
 choices[51][0] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 choices[51][1] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple con los requisitos legales para salir al mercado.";
 choices[51][2] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio es beneficioso para los consumidores.";
 choices[51][3] = "La acci&oacute;n llevada a cabo por una entidad dependiente de la Administraci&oacute;n p&uacute;blica mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 answers[51] = choices[51][0];
 units[51] = "48";
 comments[51] = "Id Pregunta: 10092. AGE A1 2015";


//  Id pregunta: 10678 Año de creación de pregunta: 2016
 questions[52]= "53)  De acuerdo a la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia, se define dependencia como:";
 choices[52]= new Array();
 choices[52][0] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[52][1] = "El estado de car&aacute;cter permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[52][2] = "El estado de car&aacute;cter temporal en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[52][3] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad, la discapacidad o la baja laboral, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 answers[52] = choices[52][1];
 units[52] = "14";
 comments[52] = "Id Pregunta: 10678. Dependencia";


//  Id pregunta: 10497 Año de creación de pregunta: 2016
 questions[53]= "54)  Las Obligaciones de la Hacienda P&uacute;blica Estatal se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[53]= new Array();
 choices[53][0] = "T&iacute;tulo II, Cap&iacute;tulo I, Secci&oacute;n 1.";
 choices[53][1] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[53][2] = "T&iacute;tulo I, Cap&iacute;tulo I, Secci&oacute;n 4.";
 choices[53][3] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[53] = choices[53][3];
 units[53] = "10";
 comments[53] = "Id Pregunta: 10497. PRESUPUESTOS GENERALES";


//  Id pregunta: 10107 Año de creación de pregunta: 2016
 questions[54]= "55)  Son bases de datos NoSQL orientadas a objetos:";
 choices[54]= new Array();
 choices[54][0] = "GemStone";
 choices[54][1] = "Zope Object DB";
 choices[54][2] = "Las dos anteriores";
 choices[54][3] = "Solo B)";
 answers[54] = choices[54][2];
 units[54] = "73";
 comments[54] = "Id Pregunta: 10107. ";


//  Id pregunta: 10483 Año de creación de pregunta: 2016
 questions[55]= "56)  La Ley 47/2003, de 26 de noviembre, General Presupuestaria se encuentra formada por:";
 choices[55]= new Array();
 choices[55][0] = "180 art&iacute;culos.";
 choices[55][1] = "182 art&iacute;culos.";
 choices[55][2] = "185 art&iacute;culos.";
 choices[55][3] = "190 art&iacute;culos.";
 answers[55] = choices[55][1];
 units[55] = "10";
 comments[55] = "Id Pregunta: 10483. PRESUPUESTOS GENERALES";


//  Id pregunta: 10522 Año de creación de pregunta: 2016
 questions[56]= "57)  A los efectos previstos en esta Ley, tendr&aacute;n capacidad de obrar ante las Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[56]= new Array();
 choices[56][0] = "las personas f&iacute;sicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 choices[56][1] = "los menores de edad para el ejercicio y defensa de aquellos de sus derechos e intereses cuya actuaci&oacute;n no est&eacute; permitida por el ordenamiento jur&iacute;dico sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[56][2] = "cuando la Ley as&iacute; lo declare expresamente, los grupos de afectados, las uniones y entidades sin personalidad jur&iacute;dica y los patrimonios independientes o aut&oacute;nomos";
 choices[56][3] = "las personas jur&iacute;dicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 answers[56] = choices[56][1];
 units[56] = "7";
 comments[56] = "Id Pregunta: 10522. LEY 39/2015";


//  Id pregunta: 10046 Año de creación de pregunta: 2016
 questions[57]= "58)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[57]= new Array();
 choices[57][0] = "En un sistema de cifrado de clave asim&eacute;trica la seguridad radica en la transmisi&oacute;n de la clave, mediante canal seguro, entre el emisor y el receptor del mensaje.";
 choices[57][1] = "Las huellas digitales devueltas por una misma funci&oacute;n hash tienen id&eacute;ntica longitud.";
 choices[57][2] = "Para ofrecer un nivel de seguridad equivalente, los sistemas de clave p&uacute;blica requieren menores longitudes de clave que los sistemas sim&eacute;tricos.";
 choices[57][3] = "Se denomina criptograma al procedimiento empleado para cifrar un mensaje.";
 answers[57] = choices[57][1];
 units[57] = "76";
 comments[57] = "Id Pregunta: 10046. AGE A1 2015";


//  Id pregunta: 10330 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Cu&aacute;les son las funciones de la Conferencia para Asuntos Relacionados con las Comunidades Europeas?:";
 choices[58]= new Array();
 choices[58][0] = "Garantizar el cumplimiento en las Conferencias Sectoriales de los procedimientos y f&oacute;rmulas de participaci&oacute;n de las Comunidades Aut&oacute;nomas.";
 choices[58][1] = "El tratamiento y resoluci&oacute;n con arreglo al principio de cooperaci&oacute;n de aquellas cuestiones de alcance general o contenido institucional relacionadas con las Comunidades Europeas.";
 choices[58][2] = "Todas son correctas.";
 choices[58][3] = "Informaci&oacute;n a las Comunidades Aut&oacute;nomas y la discusi&oacute;n en com&uacute;n sobre el desarrollo del proceso de constituci&oacute;n europea.";
 answers[58] = choices[58][2];
 units[58] = "5";
 comments[58] = "Id Pregunta: 10330. UNION EUROPEA";


//  Id pregunta: 10056 Año de creación de pregunta: 2016
 questions[59]= "60)  En cuanto al Plan de Sistemas de Informaci&oacute;n:";
 choices[59]= new Array();
 choices[59][0] = "Sirve como punto de partida del Plan Estrat&eacute;gico de la Organizaci&oacute;n.";
 choices[59][1] = "No es abordado detalladamente dentro de la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3.";
 choices[59][2] = "Fija el plan de proyectos a desarrollar, detallando los m&aacute;s inmediatos.";
 choices[59][3] = "Es un documento r&iacute;gido que debe ser actualizado s&oacute;lo ante discontinuidades de los productos tecnol&oacute;gicos sobre los que se sustenta.";
 answers[59] = choices[59][2];
 units[59] = "83";
 comments[59] = "Id Pregunta: 10056. AGE A1 2015";


//  Id pregunta: 10145 Año de creación de pregunta: 2016
 questions[60]= "61)  Puede interponerse un recurso extraordinario de revisi&oacute;n:";
 choices[60]= new Array();
 choices[60][0] = "Ante actos firmes en la v&iacute;a administrativa cuando al dictarlos se hubiera incurrido en error de hecho, que resulte de los propios documentos incorporados al expediente";
 choices[60][1] = "Ante actos firmes en la v&iacute;a administrativa cuando en la resoluci&oacute;n hayan influido esencialmente documentos o testimonios declarados falsos por sentencia judicial firme, anterior o posterior a aquella resoluci&oacute;n";
 choices[60][2] = "Ante actos firmes en la v&iacute;a administrativa cuando la resoluci&oacute;n se hubiese dictado como consecuencia de prevaricaci&oacute;n, cohecho, violencia, maquinaci&oacute;n fraudulenta u otra conducta punible y se haya declarado as&iacute; en virtud de sentencia judicial firme";
 choices[60][3] = "Todas las anteriores son ciertas";
 answers[60] = choices[60][3];
 units[60] = "8";
 comments[60] = "Id Pregunta: 10145. Ley 39/2015, Art&iacute;culo 125";


//  Id pregunta: 10175 Año de creación de pregunta: 2016
 questions[61]= "62)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola en su Art&iacute;culo 159, los miembros del Tribunal Constitucional ser&aacute;n designados por un per&iacute;odo de:";
 choices[61]= new Array();
 choices[61][0] = "seis a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[61][1] = "nueve a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[61][2] = "ocho a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 choices[61][3] = "cuatro a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 answers[61] = choices[61][1];
 units[61] = "1";
 comments[61] = "Id Pregunta: 10175. CONSTITUCION1978";


//  Id pregunta: 10323 Año de creación de pregunta: 2016
 questions[62]= "63)  Los Jueces y Abogados Generales del Tribunal de Justicia de la Uni&oacute;n Europea son nombrados para un per&iacute;odo de:";
 choices[62]= new Array();
 choices[62][0] = "Tres a&ntilde;os.";
 choices[62][1] = "Cuatro a&ntilde;os.";
 choices[62][2] = "Cinco a&ntilde;os.";
 choices[62][3] = "Seis a&ntilde;os.";
 answers[62] = choices[62][3];
 units[62] = "5";
 comments[62] = "Id Pregunta: 10323. UNION EUROPEA";


//  Id pregunta: 10394 Año de creación de pregunta: 2016
 questions[63]= "64)  La situaci&oacute;n en que una disposici&oacute;n, criterio o pr&aacute;ctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, se denomina:";
 choices[63]= new Array();
 choices[63][0] = "Discriminaci&oacute;n indirecta.";
 choices[63][1] = "Discriminaci&oacute;n directa.";
 choices[63][2] = "Discriminaci&oacute;n por raz&oacute;n de sexo.";
 choices[63][3] = "Discriminaci&oacute;n abusiva.";
 answers[63] = choices[63][0];
 units[63] = "14";
 comments[63] = "Id Pregunta: 10394. POLITICAS DE IGUALDAD";


//  Id pregunta: 10003 Año de creación de pregunta: 2016
 questions[64]= "65)  En el lenguaje de modelado UML :";
 choices[64]= new Array();
 choices[64][0] = "Los diagramas de secuencia y colaboraci&oacute;n son usados para modelar el comportamiento del sistema, pudiendo usarse para modelar un caso de uso, una clase, o un m&eacute;todo complicado.";
 choices[64][1] = "Los diagramas de actividad son usados para modelar la configuraci&oacute;n de los elementos de procesado en tiempo de ejecuci&oacute;n.";
 choices[64][2] = "Los diagramas de componentes son usados para modelar la estructura del software, incluyendo las dependencias entre los componentes de software.";
 choices[64][3] = "Los diagramas de implementaci&oacute;n son usados para modelar interacciones entre objetos de dise&ntilde;o en el sistema.";
 answers[64] = choices[64][2];
 units[64] = "89";
 comments[64] = "Id Pregunta: 10003. AGE A1 2015";


//  Id pregunta: 10431 Año de creación de pregunta: 2016
 questions[65]= "66)  En el supuesto de que una empresa haga publicidad enga&ntilde;osa de sus acciones de responsabilidad en materia de igualdad, podr&aacute;n ejercer la acci&oacute;n de cesaci&oacute;n cuando se considere:";
 choices[65]= new Array();
 choices[65][0] = "El Instituto de la Mujer.";
 choices[65][1] = "&Oacute;rganos equivalentes al anterior pertenecientes a las CCAA.";
 choices[65][2] = "Ambas son correctas.";
 choices[65][3] = "A y B son incorrectas.";
 answers[65] = choices[65][2];
 units[65] = "14";
 comments[65] = "Id Pregunta: 10431. POLITICAS DE IGUALDAD";


//  Id pregunta: 10338 Año de creación de pregunta: 2016
 questions[66]= "67)  En el Consejo de Europa cada Estado miembro tiene una delegaci&oacute;n nacional en Bruselas conocida como &oacute;rgano de apoyo, denominado:";
 choices[66]= new Array();
 choices[66][0] = "CO.PER.";
 choices[66][1] = "COMPER.";
 choices[66][2] = "CO.RE.PER.";
 choices[66][3] = "CO.PE.RRE.";
 answers[66] = choices[66][2];
 units[66] = "5";
 comments[66] = "Id Pregunta: 10338. UNION EUROPEA";


//  Id pregunta: 10077 Año de creación de pregunta: 2016
 questions[67]= "68)  Respecto al uso de servicios de firma de documentos electr&oacute;nicos mediante certificados electr&oacute;nicos centralizados, mediante el sistema Cl@ve, indique cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[67]= new Array();
 choices[67][0] = "Para poder acceder al servicio, el usuario deber&aacute; solicitar previa y expresamente la emisi&oacute;n de los certificados electr&oacute;nicos centralizados correspondientes.";
 choices[67][1] = "Los certificados electr&oacute;nicos centralizados ser&aacute;n emitidos con las mismas garant&iacute;as de identificaci&oacute;n del DNI electr&oacute;nico del ciudadano.";
 choices[67][2] = "El acceso al servicio requiere en todo caso que el usuario se haya registrado en Cl@ve y haya activado su Cl@ve permanente.";
 choices[67][3] = "En el momento de la identificaci&oacute;n, se requerir&aacute; la utilizaci&oacute;n de una verificaci&oacute;n de seguridad adicional mediante un c&oacute;digo de un solo uso y validez limitada en el tiempo que se enviar&aacute; al tel&eacute;fono m&oacute;vil del usuario registrado.";
 answers[67] = choices[67][2];
 units[67] = "47";
 comments[67] = "Id Pregunta: 10077. AGE A1 2015";


//  Id pregunta: 10513 Año de creación de pregunta: 2016
 questions[68]= "69)  La presente Ley se aplica al sector p&uacute;blico, que comprende (se&ntilde;ala la incorrecta):";
 choices[68]= new Array();
 choices[68][0] = "la Administraci&oacute;n General del Estado y las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[68][1] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[68][2] = "el sector p&uacute;blico institucional";
 choices[68][3] = "el sector privado corporativo";
 answers[68] = choices[68][3];
 units[68] = "7";
 comments[68] = "Id Pregunta: 10513. LEY 39/2015";


//  Id pregunta: 10498 Año de creación de pregunta: 2016
 questions[69]= "70)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la Deuda P&uacute;blica podr&aacute; estar representada en:";
 choices[69]= new Array();
 choices[69][0] = "En t&iacute;tulos-valores.";
 choices[69][1] = "Las respuestas a) y b) son correctas.";
 choices[69][2] = "Las respuestas a) y b) no son correctas.";
 choices[69][3] = "En cuenta.";
 answers[69] = choices[69][1];
 units[69] = "10";
 comments[69] = "Id Pregunta: 10498. PRESUPUESTOS GENERALES";


//  Id pregunta: 10171 Año de creación de pregunta: 2016
 questions[70]= "71)  Se&ntilde;ale la respuesta FALSA. Entre los objetivos de ISA2 se encuentra:";
 choices[70]= new Array();
 choices[70][0] = "desarrollar, mantener y promover un enfoque hol&iacute;stico hacia la interoperabilidad en la Uni&oacute;n para eliminar la fragmentaci&oacute;n en el panorama de la interoperabilidad en la Uni&oacute;n";
 choices[70][1] = "facilitar la reutilizaci&oacute;n de las soluciones de interoperabilidad por parte de las administraciones p&uacute;blicas europeas.";
 choices[70][2] = "identificar, crear y explotar soluciones de interoperabilidad que faciliten la ejecuci&oacute;n de las pol&iacute;ticas y actividades de la Uni&oacute;n";
 choices[70][3] = "eliminar la interacci&oacute;n electr&oacute;nica transfronteriza tanto entre las administraciones p&uacute;blicas europeas fomentando una cultura de ciberseguridad europea";
 answers[70] = choices[70][3];
 units[70] = "19";
 comments[70] = "Id Pregunta: 10171. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Diciembre/Noticia-2015-12-09-Publicada-la-Decision-ISA2-continuidad-al-esfuerzo-asegurar-interoperabilidad-entre-AAPP-europeas.html#.WCnm1WrhDIU";


//  Id pregunta: 10361 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Qu&eacute; instituci&oacute;n encarna por excelencia los intereses comunitarios?:";
 choices[71]= new Array();
 choices[71][0] = "El Consejo Europeo.";
 choices[71][1] = "El Parlamento Europeo.";
 choices[71][2] = "El Consejo.";
 choices[71][3] = "La Comisi&oacute;n.";
 answers[71] = choices[71][3];
 units[71] = "5";
 comments[71] = "Id Pregunta: 10361. UNION EUROPEA";


//  Id pregunta: 10254 Año de creación de pregunta: 2016
 questions[72]= "73)  El Art&iacute;culo 16 de la Constituci&oacute;n Espa&ntilde;ola garantiza:";
 choices[72]= new Array();
 choices[72][0] = "La libertad ideol&oacute;gica, religiosa y de culto.";
 choices[72][1] = "La libertad sexual y religiosa.";
 choices[72][2] = "La obligaci&oacute;n del derecho al voto en las elecciones.";
 choices[72][3] = "La ausencia de libertad cat&oacute;lica.";
 answers[72] = choices[72][3];
 units[72] = "1";
 comments[72] = "Id Pregunta: 10254. CONSTITUCION1978";


//  Id pregunta: 10408 Año de creación de pregunta: 2016
 questions[73]= "74)  La igualdad efectiva entre mujeres y hombres est&aacute; regulada en:";
 choices[73]= new Array();
 choices[73][0] = "Ley Org&aacute;nica 7/2003, de 22 de marzo.";
 choices[73][1] = "Ley Org&aacute;nica 3/2003, de 22 de marzo.";
 choices[73][2] = "Ley 13/2007, de 26 de noviembre.";
 choices[73][3] = "Ley 3/2007, de 26 de noviembre.";
 answers[73] = choices[73][1];
 units[73] = "14";
 comments[73] = "Id Pregunta: 10408. POLITICAS DE IGUALDAD";


//  Id pregunta: 10644 Año de creación de pregunta: 2016
 questions[74]= "75)  El Estatuto B&aacute;sico del empleado p&uacute;blico determina como clases de personal los siguientes:";
 choices[74]= new Array();
 choices[74][0] = "Funcionarios de carrera, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 choices[74][1] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal.";
 choices[74][2] = "Funcionarios e interinos.";
 choices[74][3] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 answers[74] = choices[74][3];
 units[74] = "20";
 comments[74] = "Id Pregunta: 10644. Junta de Extremadura A1 2015";


