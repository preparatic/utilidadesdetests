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

//  Id pregunta: 567 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Qu&eacute; limites marca el &quot;pacto fiscal europeo&quot; de 2012 para sus Estados Miembros?";
 choices[0]= new Array();
 choices[0][0] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 40% del PIB";
 choices[0][1] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 choices[0][2] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 50% del PIB";
 choices[0][3] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 answers[0] = choices[0][3];
 units[0] = "12";
 comments[0] = "Id Pregunta: 567. Modelo econ&oacute;mico";
 preguntaids[0] = 567


//  Id pregunta: 656 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;Qu&eacute; significa la tolerancia a partici&oacute;n dentro del teorema CAP?";
 choices[1]= new Array();
 choices[1][0] = "El sistema podr&aacute; seguir procesando una petici&oacute;n aunque se pierda la conectividad con algun nodo";
 choices[1][1] = "Las modificaciones se aplican a todos los nodos en su conjunto en el mismo momento";
 choices[1][2] = "Cualquier peticion recibida en un nodo debe tener respuesta";
 choices[1][3] = "El teorema CAP no habla de tolerancia a particiones";
 answers[1] = choices[1][0];
 units[1] = "73";
 comments[1] = "Id Pregunta: 656. ";
 preguntaids[1] = 656


//  Id pregunta: 618 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;A qui&eacute;n est&aacute; destinado principalmente las Pautas de Accesibilidad al Contenido en la Web (WCAG)?";
 choices[2]= new Array();
 choices[2][0] = "A desarrolladores de navegadores web y reproductores multimedia.";
 choices[2][1] = "A desarrolladores de herramientas de autor, como herramientas de creaci&oacute;n de p&aacute;ginas web o de creaci&oacute;n de archivos multimedia.";
 choices[2][2] = "A desarrolladores de herramientas de evaluaci&oacute;n de la accesibilidad web.";
 choices[2][3] = "Todas las respuestas son correctas.";
 answers[2] = choices[2][2];
 units[2] = "42";
 comments[2] = "Id Pregunta: 618. Junta de Extremadura A1 2015";
 preguntaids[2] = 618


//  Id pregunta: 312 Año de creación de pregunta: 2016
 questions[3]= "4)  Los acuerdos de la Comisi&oacute;n Europea se adoptan:";
 choices[3]= new Array();
 choices[3][0] = "Por unanimidad.";
 choices[3][1] = "Por mayor&iacute;a cualificada.";
 choices[3][2] = "Por mayor&iacute;a de las dos terceras partes de sus miembros.";
 choices[3][3] = "Por mayor&iacute;a del n&uacute;mero de miembros.";
 answers[3] = choices[3][3];
 units[3] = "5";
 comments[3] = "Id Pregunta: 312. UNION EUROPEA";
 preguntaids[3] = 312


//  Id pregunta: 355 Año de creación de pregunta: 2016
 questions[4]= "5)  En el marco de la Uni&oacute;n Europea, los dict&aacute;menes:";
 choices[4]= new Array();
 choices[4][0] = "Son vinculantes solamente.";
 choices[4][1] = "No son vinculantes, ya que su contenido no obliga a aqu&eacute;llos a los que van dirigidos.";
 choices[4][2] = "Son preceptivos y vinculantes.";
 choices[4][3] = "Son preceptivos y no vinculantes.";
 answers[4] = choices[4][1];
 units[4] = "5";
 comments[4] = "Id Pregunta: 355. UNION EUROPEA";
 preguntaids[4] = 355


//  Id pregunta: 782 Año de creación de pregunta: 2016
 questions[5]= "6)  Sin perjuicio de la responsabilidad disciplinaria en que se pueda incurrir, el incumplimiento de las instrucciones u &oacute;rdenes de servicio:";
 choices[5]= new Array();
 choices[5][0] = "no afecta por s&iacute; solo a la validez de los actos dictados por los &oacute;rganos administrativos";
 choices[5][1] = "supone la invalidez de los actos dictados por los &oacute;rganos administrativos";
 choices[5][2] = "supone la nulidad de los actos dictados por los &oacute;rganos administrativos";
 choices[5][3] = "supone la anulabilidad de los actos dictados por los &oacute;rganos administrativos";
 answers[5] = choices[5][0];
 units[5] = "4, 7, 8, 9";
 comments[5] = "Id Pregunta: 782. Ley 40/2015";
 preguntaids[5] = 782


//  Id pregunta: 697 Año de creación de pregunta: 2016
 questions[6]= "7)  De las siguientes cu&aacute;l est&aacute; relacionada con la noci&oacute;n de integraci&oacute;n continua:";
 choices[6]= new Array();
 choices[6][0] = "Programaci&oacute;n estructurada.";
 choices[6][1] = "Metodolog&iacute;a M&eacute;trica Versi&oacute;n 4.";
 choices[6][2] = "Programaci&oacute;n extrema.";
 choices[6][3] = "Programaci&oacute;n Espuria.";
 answers[6] = choices[6][2];
 units[6] = "92";
 comments[6] = "Id Pregunta: 697. INTEGRACION CONTINUA";
 preguntaids[6] = 697


//  Id pregunta: 634 Año de creación de pregunta: 2016
 questions[7]= "8)  El sistema operativo que se dise&ntilde;a pensando en los tipos de datos y recursos que va a manejar: ficheros, procesos, memoria, hardware, etc., y en las propiedades y servicios que &eacute;stos pueden prestar, se construye siguiendo un modelo:";
 choices[7]= new Array();
 choices[7][0] = "Monol&iacute;tico.";
 choices[7][1] = "Estratificado.";
 choices[7][2] = "Cliente/servidor.";
 choices[7][3] = "Orientado a objetos.";
 answers[7] = choices[7][3];
 units[7] = "56";
 comments[7] = "Id Pregunta: 634. Junta de Extremadura A1 2015";
 preguntaids[7] = 634


//  Id pregunta: 67 Año de creación de pregunta: 2016
 questions[8]= "9)  En Internet, la entidad encargada de la coordinaci&oacute;n de los N&uacute;meros de Sistema Aut&oacute;nomo (Autonomous System Numbers - ASN) usados por varios protocolos de enrutamiento, es:";
 choices[8]= new Array();
 choices[8][0] = "IANA";
 choices[8][1] = "ISOC";
 choices[8][2] = "IETF";
 choices[8][3] = "IAB";
 answers[8] = choices[8][0];
 units[8] = "103";
 comments[8] = "Id Pregunta: 67. AGE A1 2015";
 preguntaids[8] = 67


//  Id pregunta: 546 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Cu&aacute;l es el &oacute;rgano superior de gobernanza TIC en la Administraci&oacute;n General del Estado?";
 choices[9]= new Array();
 choices[9][0] = "El Comit&eacute; de Direcci&oacute;n TIC";
 choices[9][1] = "El Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[9][2] = "La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[9][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[9] = choices[9][3];
 units[9] = "26";
 comments[9] = "Id Pregunta: 546. Gobernanza TIC";
 preguntaids[9] = 546


//  Id pregunta: 133 Año de creación de pregunta: 2016
 questions[10]= "11)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, cu&aacute;l no corresponde a una de las medidas implantadas:";
 choices[10]= new Array();
 choices[10][0] = "Apoyos fiscales y en materia de Seguridad Social a los emprendedores.";
 choices[10][1] = "Medidas de conciliaci&oacute;n familiar especiales para los emprendedores.";
 choices[10][2] = "Modificaci&oacute;n de la ley concursal para facilitar los acuerdos de refinanciaci&oacute;n.";
 choices[10][3] = "Creaci&oacute;n de la figura del Emprendedor de Responsabilidad Limitada.";
 answers[10] = choices[10][1];
 units[10] = "12";
 comments[10] = "Id Pregunta: 133. Leyes modelo econ&oacute;mico";
 preguntaids[10] = 133


//  Id pregunta: 565 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Qu&eacute; fen&oacute;meno NO ha puesto de manifiesto la crisis econ&oacute;mica?";
 choices[11]= new Array();
 choices[11][0] = "Tasa de paro estructural alt&iacute;sima";
 choices[11][1] = "Excesiva estabilidad de empleo";
 choices[11][2] = "An&eacute;mico crecimiento de la productividad";
 choices[11][3] = "Existencia de una importante econom&iacute;a sumergida";
 answers[11] = choices[11][1];
 units[11] = "12";
 comments[11] = "Id Pregunta: 565. Modelo econ&oacute;mico";
 preguntaids[11] = 565


//  Id pregunta: 370 Año de creación de pregunta: 2016
 questions[12]= "13)  Establecer la interpretaci&oacute;n adecuada de los Tratados de la Uni&oacute;n Europea y las normas de derecho derivado es el objeto de:";
 choices[12]= new Array();
 choices[12][0] = "Un recurso de incumplimiento.";
 choices[12][1] = "Recurso de carencia.";
 choices[12][2] = "Cuesti&oacute;n o incidente prejudicial.";
 choices[12][3] = "Ninguna es correcta.";
 answers[12] = choices[12][2];
 units[12] = "5";
 comments[12] = "Id Pregunta: 370. UNION EUROPEA";
 preguntaids[12] = 370


//  Id pregunta: 862 Año de creación de pregunta: 2016
 questions[13]= "14)  Sobre las URL de los sitios web p&uacute;blicos, se&ntilde;ale cu&aacute;l NO es verdadera:";
 choices[13]= new Array();
 choices[13][0] = "Se recomienda utilizar la URL con dominio &lt;.gob.es&gt; en todos los niveles de la Administraci&oacute;n General del Estado, para todos los sitios web.";
 choices[13][1] = "Si se trata de organismos muy conocidos por los ciudadanos y siempre que no coincida con la denominaci&oacute;n del portal, se puede utilizar la denominaci&oacute;n actual con .gob.es";
 choices[13][2] = "Para una mayor normalizaci&oacute;n siempre se podr&iacute;a redireccionar autom&aacute;ticamente desde una URL a otra, para lo cual habr&aacute; que registrar los dos dominios: organismo.gob.es y sede.organismo.gob.es.";
 choices[13][3] = "Se recomienda utilizar sede.aaaa.gob.es, donde aaaa se sustituir&aacute; por el nombre del Ministerio al que pertenece el organismo.";
 answers[13] = choices[13][3];
 units[13] = "125";
 comments[13] = "Id Pregunta: 862. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[13] = 862


//  Id pregunta: 327 Año de creación de pregunta: 2016
 questions[14]= "15)  La idea de una Europa unida tiene sus antecedentes en el siglo:";
 choices[14]= new Array();
 choices[14][0] = "X.";
 choices[14][1] = "XIX.";
 choices[14][2] = "XV.";
 choices[14][3] = "XIII.";
 answers[14] = choices[14][1];
 units[14] = "5";
 comments[14] = "Id Pregunta: 327. UNION EUROPEA";
 preguntaids[14] = 327


//  Id pregunta: 647 Año de creación de pregunta: 2016
 questions[15]= "16)  Seg&uacute;n la ley de igualdad entre mujeres y hombres y contra la violencia de g&eacute;nero en Extremadura: &iquest;qu&eacute; &oacute;rgano tiene como fin esencial promover las condiciones para que la igualdad entre los sexos sea real y efectiva dentro del &aacute;mbito de competencias de la Junta de Extremadura?";
 choices[15]= new Array();
 choices[15][0] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sociales.";
 choices[15][1] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sanitarias.";
 choices[15][2] = "El Organismo P&uacute;blico de la Mujer.";
 choices[15][3] = "El Instituto de la Mujer de Extremadura.";
 answers[15] = choices[15][3];
 units[15] = "14";
 comments[15] = "Id Pregunta: 647. Junta de Extremadura A1 2015";
 preguntaids[15] = 647


//  Id pregunta: 648 Año de creación de pregunta: 2016
 questions[16]= "17)  En Itil v3 se diferencia entre la Gesti&oacute;n de la Cartera de Servicios y la Gesti&oacute;n del Cat&aacute;logo de Servicios ya que:";
 choices[16]= new Array();
 choices[16][0] = "La Cartera de Servicios contiene informaci&oacute;n sobre cada servicio y su estado.";
 choices[16][1] = "La Cartera de Servicios es un subconjunto del Cat&aacute;logo de Servicios.";
 choices[16][2] = "La Cartera de Servicios divide los servicios en componentes y contiene pol&iacute;ticas, directrices y responsabilidades , as&iacute; como precios, acuerdos de nivel de servicio y condiciones de entrega.";
 choices[16][3] = "Todas las respuestas son correctas.";
 answers[16] = choices[16][0];
 units[16] = "101";
 comments[16] = "Id Pregunta: 648. Junta de Extremadura A1 2015";
 preguntaids[16] = 648


//  Id pregunta: 723 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;C&uacute;al es la principal ventaja de sprints m&aacute;s cortos en Scrum?";
 choices[17]= new Array();
 choices[17][0] = "Permite al equipo reaccionar mejor ante imprevistos";
 choices[17][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[17][2] = "Es m&aacute;s f&aacute;cil cumplir los objetivos marcados al final de cada sprint";
 choices[17][3] = "Ninguna de las anteriores";
 answers[17] = choices[17][1];
 units[17] = "34, 84";
 comments[17] = "Id Pregunta: 723. Metodologias &aacute;giles";
 preguntaids[17] = 723


//  Id pregunta: 24 Año de creación de pregunta: 2016
 questions[18]= "19)  De acuerdo con la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, una de las funciones de la Comisi&oacute;n Nacional de los Mercados y la Competencia es:";
 choices[18]= new Array();
 choices[18][0] = "Gestionar en per&iacute;odo voluntario las tasas en materia de telecomunicaciones a que se refiere la presente Ley.";
 choices[18][1] = "Proponer al Gobierno la pol&iacute;tica a seguir para facilitar el desarrollo y la evoluci&oacute;n de las obligaciones de servicio p&uacute;blico.";
 choices[18][2] = "Gestionar el Registro de Operadores.";
 choices[18][3] = "Establecer el procedimiento para cuantificar los beneficios no monetarios obtenidos por los operadores encargados de la prestaci&oacute;n del servicio universal.";
 answers[18] = choices[18][3];
 units[18] = "121";
 comments[18] = "Id Pregunta: 24. AGE A1 2015";
 preguntaids[18] = 24


//  Id pregunta: 366 Año de creación de pregunta: 2016
 questions[19]= "20)  Para constituir un Grupo en el Parlamento Europeo es necesario al menos:";
 choices[19]= new Array();
 choices[19][0] = "20 parlamentarios.";
 choices[19][1] = "29 parlamentarios.";
 choices[19][2] = "18 parlamentarios.";
 choices[19][3] = "23 parlamentarios.";
 answers[19] = choices[19][0];
 units[19] = "5";
 comments[19] = "Id Pregunta: 366. UNION EUROPEA";
 preguntaids[19] = 366


//  Id pregunta: 465 Año de creación de pregunta: 2016
 questions[20]= "21)  Seg&uacute;n el art&iacute;culo 26 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la programaci&oacute;n presupuestaria se regir&aacute; por los principios de:";
 choices[20]= new Array();
 choices[20][0] = "Estabilidad presupuestaria, sostenibilidad financiera, eficacia, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[20][1] = "Estabilidad presupuestaria, sostenibilidad financiera, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[20][2] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, responsabilidad y lealtad institucional.";
 choices[20][3] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 answers[20] = choices[20][3];
 units[20] = "10";
 comments[20] = "Id Pregunta: 465. PRESUPUESTOS GENERALES";
 preguntaids[20] = 465


//  Id pregunta: 159 Año de creación de pregunta: 2016
 questions[21]= "22)  Seg&uacute;n la ley 39/2015, los actos administrativos, a menos que su naturaleza exija otra forma m&aacute;s adecuada de expresi&oacute;n y constancia, se producir&aacute;n: ";
 choices[21]= new Array();
 choices[21][0] = "verbalmente";
 choices[21][1] = "por escrito a trav&eacute;s de medios electr&oacute;nicos o no electr&oacute;nicos";
 choices[21][2] = "por escrito a trav&eacute;s de medios electr&oacute;nicos";
 choices[21][3] = "por escrito a trav&eacute;s de medios no electr&oacute;nicos";
 answers[21] = choices[21][2];
 units[21] = "7";
 comments[21] = "Id Pregunta: 159. Ley 39/2015, Art&iacute;culo 36";
 preguntaids[21] = 159


//  Id pregunta: 677 Año de creación de pregunta: 2016
 questions[22]= "23)  En referencia al proyecto ANDES, para la comunicaci&oacute;n telem&aacute;tica de Nacimientos desde Centros Sanitarios a Registros Civiles, indique cual de las siguientes afirmaciones es falsa:";
 choices[22]= new Array();
 choices[22][0] = "Tiene sustento legal de acuerdo a la Ley 19/2015, de 13 de julio, de medidas de reforma administrativa en el &aacute;mbito de la Administraci&oacute;n de Justicia y del Registro Civil.";
 choices[22][1] = "Se inicia a partir de su propuesta en CORA (Comisi&oacute;n para la Reforma de las Administraciones P&uacute;blicas).";
 choices[22][2] = "Reutiliza el servicio horizontal ACCEDA en modo cloud, lo cual ha facilitado la pronta puesta en marcha de la soluci&oacute;n.";
 choices[22][3] = "La utilizaci&oacute;n de ANDES por parte de los hospitales es completamente transparente, sin necesidad de realizar pasos previos para su despliegue.";
 answers[22] = choices[22][3];
 units[22] = "47";
 comments[22] = "Id Pregunta: 677. Inscripci&oacute;n autom&aacute;tica nacimientos";
 preguntaids[22] = 677


//  Id pregunta: 632 Año de creación de pregunta: 2016
 questions[23]= "24)  Seg&uacute;n el Reglamento de Medidas de Seguridad de Ficheros Automatizados con Datos de Car&aacute;cter Personal, los ficheros que contengan datos de ideolog&iacute;a, religi&oacute;n, creencias, origen racial, salud o vida sexual, &iquest;qu&eacute; medidas de seguridad deber&aacute;n adoptar?";
 choices[23]= new Array();
 choices[23][0] = "De nivel b&aacute;sico y nivel medio.";
 choices[23][1] = "De nivel alto.";
 choices[23][2] = "De nivel medio y nivel alto.";
 choices[23][3] = "De nivel b&aacute;sico, nivel medio y nivel alto.";
 answers[23] = choices[23][3];
 units[23] = "35";
 comments[23] = "Id Pregunta: 632. Junta de Extremadura A1 2015";
 preguntaids[23] = 632


//  Id pregunta: 341 Año de creación de pregunta: 2016
 questions[24]= "25)  Tras la cuarta ampliaci&oacute;n de la Uni&oacute;n (Austria, Suecia y Finlandia), el n&uacute;mero total de diputados se estableci&oacute; en:";
 choices[24]= new Array();
 choices[24][0] = "623";
 choices[24][1] = "649";
 choices[24][2] = "626";
 choices[24][3] = "565";
 answers[24] = choices[24][2];
 units[24] = "5";
 comments[24] = "Id Pregunta: 341. UNION EUROPEA";
 preguntaids[24] = 341


//  Id pregunta: 663 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;Qu&eacute; tipos de nodos tiene un cl&uacute;ster Hadoop?";
 choices[25]= new Array();
 choices[25][0] = "Varios namenodes y varios datanodes por cluster";
 choices[25][1] = "varios namenodes y obligatoriamente 1 datanode por cluster";
 choices[25][2] = "1 namenode y varios datanodes por cluster";
 choices[25][3] = "1 namenode y obligatoriamente 1 datanode por cluster";
 answers[25] = choices[25][2];
 units[25] = "73";
 comments[25] = "Id Pregunta: 663. ";
 preguntaids[25] = 663


//  Id pregunta: 300 Año de creación de pregunta: 2016
 questions[26]= "27)  La designaci&oacute;n para formar parte del Tribunal de Cuentas la efect&uacute;a:";
 choices[26]= new Array();
 choices[26][0] = "La Comisi&oacute;n.";
 choices[26][1] = "El Consejo de Europa.";
 choices[26][2] = "El Consejo Europeo.";
 choices[26][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[26] = choices[26][3];
 units[26] = "5";
 comments[26] = "Id Pregunta: 300. UNION EUROPEA";
 preguntaids[26] = 300


//  Id pregunta: 102 Año de creación de pregunta: 2016
 questions[27]= "28)  Entre las caracter&iacute;sticas de las Bases de Datos NoSQL se encuentran:";
 choices[27]= new Array();
 choices[27][0] = "Pueden manejar enormes cantidades de datos estructurados";
 choices[27][1] = "Existe un control estricto de las transacciones (propiedades ACID - Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[27][2] = "Se basan en sistemas distribuidos";
 choices[27][3] = "Se basan en el modelo de datos relacional";
 answers[27] = choices[27][2];
 units[27] = "73";
 comments[27] = "Id Pregunta: 102. ";
 preguntaids[27] = 102


//  Id pregunta: 847 Año de creación de pregunta: 2016
 questions[28]= "29)  Se&ntilde;ale la respuesta falsa:";
 choices[28]= new Array();
 choices[28][0] = "Cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, especificando las condiciones, protocolos y criterios funcionales o t&eacute;cnicos necesarios para acceder a dichos datos con las m&aacute;ximas garant&iacute;as de seguridad, integridad y disponibilidad.";
 choices[28][1] = "La disponibilidad de tales datos estar&aacute; limitada estrictamente a aquellos que son requeridos a los interesados por las restantes Administraciones para la tramitaci&oacute;n y resoluci&oacute;n de los procedimientos y actuaciones de su competencia, de acuerdo con la normativa reguladora de los mismos.";
 choices[28][2] = "De conformidad con lo dispuesto en la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal y su normativa de desarrollo, cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, siendo preceptiva la firma del convenio correspondiente.";
 choices[28][3] = "La Administraci&oacute;n General del Estado, las Administraciones Auton&oacute;micas y las Entidades Locales, adoptar&aacute;n las medidas necesarias e incorporar&aacute;n en sus respectivos &aacute;mbitos las tecnolog&iacute;as precisas para posibilitar la interconexi&oacute;n de sus redes";
 answers[28] = choices[28][2];
 units[28] = "4, 7, 8, 9";
 comments[28] = "Id Pregunta: 847. Ley 40/2015";
 preguntaids[28] = 847


//  Id pregunta: 339 Año de creación de pregunta: 2016
 questions[29]= "30)  La presidencia del Consejo se ejerce de forma rotatoria cada:";
 choices[29]= new Array();
 choices[29][0] = "4 meses seg&uacute;n un orden fijado por unanimidad del Consejo.";
 choices[29][1] = "6 meses seg&uacute;n un orden fijado por unanimidad del Consejo.";
 choices[29][2] = "4 meses seg&uacute;n un orden fijado por mayor&iacute;a cualificada del Consejo.";
 choices[29][3] = "6 meses seg&uacute;n un orden fijado por mayor&iacute;a cualificada del Consejo.";
 answers[29] = choices[29][1];
 units[29] = "5";
 comments[29] = "Id Pregunta: 339. UNION EUROPEA";
 preguntaids[29] = 339


//  Id pregunta: 428 Año de creación de pregunta: 2016
 questions[30]= "31)  Cuando el periodo de vacaciones coincida con una incapacidad temporal derivada del embarazo, parto o lactancia natural, o con el permiso de maternidad, o con su ampliaci&oacute;n por lactancia, la empleada p&uacute;blica:";
 choices[30]= new Array();
 choices[30][0] = "Perder&aacute; el derecho a vacaciones.";
 choices[30][1] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, siempre que no haya terminado el a&ntilde;o natural que le corresponda.";
 choices[30][2] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, aunque haya terminado el a&ntilde;o natural que le corresponda.";
 choices[30][3] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta dependiendo de la acumulaci&oacute;n de trabajo en al AAPP.";
 answers[30] = choices[30][2];
 units[30] = "14";
 comments[30] = "Id Pregunta: 428. POLITICAS DE IGUALDAD";
 preguntaids[30] = 428


//  Id pregunta: 244 Año de creación de pregunta: 2016
 questions[31]= "32)  La Constituci&oacute;n Espa&ntilde;ola, en el art&iacute;culo 9 del T&iacute;tulo Preliminar, garantiza el principio de:";
 choices[31]= new Array();
 choices[31][0] = "Retroactividad de las disposiciones sancionadoras no favorables de derechos individuales.";
 choices[31][1] = "Publicidad de las normas.";
 choices[31][2] = "Defensa jur&iacute;dica ante los tribunales.";
 choices[31][3] = "Coordinaci&oacute;n normativa.";
 answers[31] = choices[31][2];
 units[31] = "1";
 comments[31] = "Id Pregunta: 244. CONSTITUCION1978";
 preguntaids[31] = 244


//  Id pregunta: 771 Año de creación de pregunta: 2016
 questions[32]= "33)  Las Administraciones P&uacute;blicas deber&aacute;n respetar en su actuaci&oacute;n y relaciones los siguientes principios:";
 choices[32]= new Array();
 choices[32][0] = "simplicidad, claridad y proximidad a los ciudadanos";
 choices[32][1] = "participaci&oacute;n, objetividad y transparencia de la actuaci&oacute;n administrativa";
 choices[32][2] = "responsabilidad por la gesti&oacute;n p&uacute;blica";
 choices[32][3] = "todas son correctas";
 answers[32] = choices[32][3];
 units[32] = "4, 7, 8, 9";
 comments[32] = "Id Pregunta: 771. Ley 40/2015";
 preguntaids[32] = 771


//  Id pregunta: 812 Año de creación de pregunta: 2016
 questions[33]= "34)  Existir&aacute; una Delegaci&oacute;n del Gobierno en:";
 choices[33]= new Array();
 choices[33][0] = "la capital del pa&iacute;s";
 choices[33][1] = "cada una de las Comunidades Aut&oacute;nomas";
 choices[33][2] = "cada una de las provincias";
 choices[33][3] = "cada una de las embajadas espa&ntilde;olas";
 answers[33] = choices[33][1];
 units[33] = "4, 7, 8, 9";
 comments[33] = "Id Pregunta: 812. Ley 40/2015";
 preguntaids[33] = 812


//  Id pregunta: 625 Año de creación de pregunta: 2016
 questions[34]= "35)  En PHP 5.0, &iquest;cu&aacute;l es la regla para formar los nombres de las variables?";
 choices[34]= new Array();
 choices[34][0] = "Una variable debe comenzar con el signo $ seguido del nombre de la variable.";
 choices[34][1] = "Una variable debe comenzar con el signo &amp; seguido del nombre de la variable.";
 choices[34][2] = "Una variable debe comenzar por un car&aacute;cter num&eacute;rico.";
 choices[34][3] = "No hay regla para la formaci&oacute;n de los nombres de las variables.";
 answers[34] = choices[34][0];
 units[34] = "65";
 comments[34] = "Id Pregunta: 625. Junta de Extremadura A1 2015";
 preguntaids[34] = 625


//  Id pregunta: 344 Año de creación de pregunta: 2016
 questions[35]= "36)  Al ingreso de Espa&ntilde;a en la Uni&oacute;n Europea &iquest;cu&aacute;ntos eurodiputados componen el Parlamento?:";
 choices[35]= new Array();
 choices[35][0] = "Pas&oacute; de 518 a 626.";
 choices[35][1] = "Pas&oacute; de 434 a 518.";
 choices[35][2] = "Pas&oacute; de 345 a 512.";
 choices[35][3] = "Pas&oacute; de 435 a 610.";
 answers[35] = choices[35][1];
 units[35] = "5";
 comments[35] = "Id Pregunta: 344. UNION EUROPEA";
 preguntaids[35] = 344


//  Id pregunta: 764 Año de creación de pregunta: 2016
 questions[36]= "37)  La Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico, establece y regula (se&ntilde;ala la incorrecta):";
 choices[36]= new Array();
 choices[36][0] = "las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[36][1] = "los principios del sistema de responsabilidad de las Administraciones P&uacute;blicas y de la potestad sancionadora";
 choices[36][2] = "el procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas";
 choices[36][3] = "la organizaci&oacute;n y funcionamiento de la Administraci&oacute;n General del Estado y de su sector p&uacute;blico institucional para el desarrollo de sus actividades";
 answers[36] = choices[36][2];
 units[36] = "4, 7, 8, 9";
 comments[36] = "Id Pregunta: 764. Ley 40/2015";
 preguntaids[36] = 764


//  Id pregunta: 255 Año de creación de pregunta: 2016
 questions[37]= "38)  La soberan&iacute;a nacional reside en:";
 choices[37]= new Array();
 choices[37][0] = "el Parlamento nacional.";
 choices[37][1] = "el Parlamento auton&oacute;mico o Asamblea.";
 choices[37][2] = "el pueblo espa&ntilde;ol.";
 choices[37][3] = "el Congreso y el Senado.";
 answers[37] = choices[37][3];
 units[37] = "1";
 comments[37] = "Id Pregunta: 255. CONSTITUCION1978";
 preguntaids[37] = 255


//  Id pregunta: 626 Año de creación de pregunta: 2016
 questions[38]= "39)  En Java, la sentencia try-catch-throw se utiliza:";
 choices[38]= new Array();
 choices[38][0] = "En sentencias switch para alterar el control de flujo.";
 choices[38][1] = "Para manejar excepciones.";
 choices[38][2] = "Como la sentencia while, para ejecutar bucles.";
 choices[38][3] = "Para devolver el control del programa al final de un m&eacute;todo.";
 answers[38] = choices[38][1];
 units[38] = "64";
 comments[38] = "Id Pregunta: 626. Junta de Extremadura A1 2015";
 preguntaids[38] = 626


//  Id pregunta: 610 Año de creación de pregunta: 2016
 questions[39]= "40)  Una de las condiciones que un &aacute;rbol debe cumplir para ser &aacute;rbol b, siendo n el orden del &aacute;rbol, es:";
 choices[39]= new Array();
 choices[39][0] = "Cada p&aacute;gina contiene como m&aacute;ximo 2n + 1 elementos.";
 choices[39][1] = "Cada p&aacute;gina, excepto la ra&iacute;z, contiene al menos n elementos.";
 choices[39][2] = "Cada p&aacute;gina o es una hoja o tiene m descendientes, siendo m el n&uacute;mero de elementos o claves que tiene.";
 choices[39][3] = "Las hojas no tienen por qu&eacute; estar al mismo nivel.";
 answers[39] = choices[39][1];
 units[39] = "56";
 comments[39] = "Id Pregunta: 610. Junta de Extremadura A1 2015";
 preguntaids[39] = 610


//  Id pregunta: 254 Año de creación de pregunta: 2016
 questions[40]= "41)  El Art&iacute;culo 16 de la Constituci&oacute;n Espa&ntilde;ola garantiza:";
 choices[40]= new Array();
 choices[40][0] = "La libertad ideol&oacute;gica, religiosa y de culto.";
 choices[40][1] = "La libertad sexual y religiosa.";
 choices[40][2] = "La obligaci&oacute;n del derecho al voto en las elecciones.";
 choices[40][3] = "La ausencia de libertad cat&oacute;lica.";
 answers[40] = choices[40][3];
 units[40] = "1";
 comments[40] = "Id Pregunta: 254. CONSTITUCION1978";
 preguntaids[40] = 254


//  Id pregunta: 484 Año de creación de pregunta: 2016
 questions[41]= "42)  De acuerdo con el art&iacute;culo 67 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, si las variaciones afectasen al volumen de endeudamiento a corto y largo plazo, ser&aacute; competencia del Consejo de Ministros cuando su importe exceda de la cuant&iacute;a de:";
 choices[41]= new Array();
 choices[41][0] = "12.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[41][1] = "13.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[41][2] = "11.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[41][3] = "10.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 answers[41] = choices[41][0];
 units[41] = "10";
 comments[41] = "Id Pregunta: 484. PRESUPUESTOS GENERALES";
 preguntaids[41] = 484


//  Id pregunta: 107 Año de creación de pregunta: 2016
 questions[42]= "43)  Son bases de datos NoSQL orientadas a objetos:";
 choices[42]= new Array();
 choices[42][0] = "GemStone";
 choices[42][1] = "Zope Object DB";
 choices[42][2] = "Las dos anteriores";
 choices[42][3] = "Solo B)";
 answers[42] = choices[42][2];
 units[42] = "73";
 comments[42] = "Id Pregunta: 107. ";
 preguntaids[42] = 107


//  Id pregunta: 518 Año de creación de pregunta: 2016
 questions[43]= "44)  Las Universidades p&uacute;blicas:";
 choices[43]= new Array();
 choices[43][0] = "se regir&aacute;n &uacute;nicamente por su normativa espec&iacute;fica";
 choices[43][1] = "se regir&aacute;n por su normativa espec&iacute;fica y supletoriamente por las previsiones de esta Ley";
 choices[43][2] = "se regir&aacute;n por las previsiones de esta Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[43][3] = "se regir&aacute;n &uacute;nicamente por las previsiones de esta Ley";
 answers[43] = choices[43][1];
 units[43] = "7";
 comments[43] = "Id Pregunta: 518. LEY 39/2015";
 preguntaids[43] = 518


//  Id pregunta: 376 Año de creación de pregunta: 2016
 questions[44]= "45)  El Defensor del Pueblo Europeo puede ser consultado por:";
 choices[44]= new Array();
 choices[44][0] = "Personas con residencia en la Uni&oacute;n pero s&oacute;lo personas f&iacute;sicas.";
 choices[44][1] = "Personas con nacionalidad europea.";
 choices[44][2] = "Personas con nacionalidad y pa&iacute;ses asociados.";
 choices[44][3] = "Toda persona f&iacute;sica (ciudadanos) o jur&iacute;dica (instituciones o empresas) que residan en la Uni&oacute;n.";
 answers[44] = choices[44][3];
 units[44] = "5";
 comments[44] = "Id Pregunta: 376. UNION EUROPEA";
 preguntaids[44] = 376


//  Id pregunta: 532 Año de creación de pregunta: 2016
 questions[45]= "46)  La representaci&oacute;n podr&aacute; acreditarse:";
 choices[45]= new Array();
 choices[45][0] = "mediante cualquier t&iacute;tulo jur&iacute;dico";
 choices[45][1] = "mediante resoluci&oacute;n judicial especial";
 choices[45][2] = "&uacute;nicamente mediante poder notarial";
 choices[45][3] = "mediante cualquier medio v&aacute;lido en Derecho que deje constancia fidedigna de su existencia";
 answers[45] = choices[45][3];
 units[45] = "7";
 comments[45] = "Id Pregunta: 532. LEY 39/2015";
 preguntaids[45] = 532


//  Id pregunta: 669 Año de creación de pregunta: 2016
 questions[46]= "47)  Se&ntilde;ale la opci&oacute;n falsa respecto a la instrucci&oacute;n del procedimiento definida en la Ley 39/2015:";
 choices[46]= new Array();
 choices[46][0] = "Los interesados podr&aacute;n, en cualquier momento del procedimiento anterior al tr&aacute;mite de audiencia, aducir alegaciones y aportar documentos u otros elementos de juicio.";
 choices[46][1] = "El instructor del procedimiento s&oacute;lo podr&aacute; rechazar las pruebas propuestas por los interesados cuando sean manifiestamente improcedentes o innecesarias, mediante resoluci&oacute;n motivada.";
 choices[46][2] = "Salvo disposici&oacute;n expresa en contrario, los informes ser&aacute;n preceptivos y vinculantes.";
 choices[46][3] = "Se podr&aacute; prescindir del tr&aacute;mite de audiencia cuando no figuren en el procedimiento ni sean tenidos en cuenta en la resoluci&oacute;n otros hechos ni otras alegaciones y pruebas que las aducidas por el interesado.";
 answers[46] = choices[46][2];
 units[46] = "7";
 comments[46] = "Id Pregunta: 669. Cap&iacute;tulo IV, T&iacute;tulo IV de la Ley 39/2015";
 preguntaids[46] = 669


//  Id pregunta: 209 Año de creación de pregunta: 2016
 questions[47]= "48)  Corresponde aprobar el proyecto de Ley de Presupuestos Generales del Estado a:";
 choices[47]= new Array();
 choices[47][0] = "El Ministerio de Econom&iacute;a y Hacienda.";
 choices[47][1] = "El Congreso de los Diputados.";
 choices[47][2] = "Las Cortes Generales.";
 choices[47][3] = "El Consejo de Ministros";
 answers[47] = choices[47][3];
 units[47] = "1";
 comments[47] = "Id Pregunta: 209. CONSTITUCION1978";
 preguntaids[47] = 209


//  Id pregunta: 194 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Cu&aacute;ntos miembros componen el Tribunal Constitucional?";
 choices[48]= new Array();
 choices[48][0] = "11";
 choices[48][1] = "12";
 choices[48][2] = "14";
 choices[48][3] = "8";
 answers[48] = choices[48][1];
 units[48] = "1";
 comments[48] = "Id Pregunta: 194. CONSTITUCION1978";
 preguntaids[48] = 194


//  Id pregunta: 504 Año de creación de pregunta: 2016
 questions[49]= "50)  La Ley Org&aacute;nica 2/2012 destaca una serie de principios generales entre los que no se encuentra:";
 choices[49]= new Array();
 choices[49][0] = "Principio de transparencia.";
 choices[49][1] = "Principio de cooperaci&oacute;n.";
 choices[49][2] = "Principio de eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos.";
 choices[49][3] = "Principio de lealtad institucional.";
 answers[49] = choices[49][1];
 units[49] = "10";
 comments[49] = "Id Pregunta: 504. PRESUPUESTOS GENERALES";
 preguntaids[49] = 504


//  Id pregunta: 359 Año de creación de pregunta: 2016
 questions[50]= "51)  Los Reglamentos no se caracterizan por:";
 choices[50]= new Array();
 choices[50][0] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 choices[50][1] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[50][2] = "Ser obligatorios.";
 choices[50][3] = "No poseer alcance general.";
 answers[50] = choices[50][3];
 units[50] = "5";
 comments[50] = "Id Pregunta: 359. UNION EUROPEA";
 preguntaids[50] = 359


//  Id pregunta: 729 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;C&uacute;al es el nombre de la reuni&oacute;n de SCRUM, donde se revisan los product backlog &iacute;tems?:";
 choices[51]= new Array();
 choices[51][0] = "Backlog refinement";
 choices[51][1] = "Backlog grooming";
 choices[51][2] = "a y b son correctas";
 choices[51][3] = "Ninguna de las anteriores";
 answers[51] = choices[51][2];
 units[51] = "34, 84";
 comments[51] = "Id Pregunta: 729. Metodologias &aacute;giles";
 preguntaids[51] = 729


//  Id pregunta: 31 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Qu&eacute; es MongoDB?";
 choices[52]= new Array();
 choices[52][0] = "Una herramienta Object Relational Mapping (ORM) para facilitar el desarrollo.";
 choices[52][1] = "Una base de datos de c&oacute;digo abierto de documentos tipo JSON.";
 choices[52][2] = "Un sistema gestor de base de datos relacional.";
 choices[52][3] = "Una base de datos jer&aacute;rquica de relaciones encadenadas.";
 answers[52] = choices[52][1];
 units[52] = "73";
 comments[52] = "Id Pregunta: 31. AGE A1 2015";
 preguntaids[52] = 31


//  Id pregunta: 169 Año de creación de pregunta: 2016
 questions[53]= "54)  En lo que se refiere a comunicaciones m&oacute;viles en Europa,";
 choices[53]= new Array();
 choices[53][0] = "en 2020 se liberar&aacute;n las bandas de frecuencia superior a 10 Ghz para el despliegue de 5G";
 choices[53][1] = "en 2020 se espera desplegar la red 5G a gran escala.";
 choices[53][2] = "en 2020 se espera desplegar la red 4G-plus.";
 choices[53][3] = "en 2020 se liberar&aacute; la banda de frecuencia de 800 Mhz para finalizar el despliegue de 4G";
 answers[53] = choices[53][1];
 units[53] = "19";
 comments[53] = "Id Pregunta: 169. https://ec.europa.eu/digital-single-market/en/5g-europe-action-plan";
 preguntaids[53] = 169


//  Id pregunta: 695 Año de creación de pregunta: 2016
 questions[54]= "55)  Se&ntilde;ale de las siguientes la que NO corresponde a una herramienta de integraci&oacute;n continua:";
 choices[54]= new Array();
 choices[54][0] = "Jenkins";
 choices[54][1] = "Hudson";
 choices[54][2] = "SonarQube";
 choices[54][3] = "Todas lo son";
 answers[54] = choices[54][3];
 units[54] = "92";
 comments[54] = "Id Pregunta: 695. INTEGRACION CONTINUA";
 preguntaids[54] = 695


//  Id pregunta: 857 Año de creación de pregunta: 2016
 questions[55]= "56)  Sobre el multiling&uuml;ismo en los sitios web p&uacute;blicos, se&ntilde;ale la respuesta falsa:";
 choices[55]= new Array();
 choices[55][0] = "Los responsables de contenidos y responsables t&eacute;cnicos de portales de cualquier organismo de la Administraci&oacute;n General del Estado deben tener en cuenta que Espa&ntilde;a es un pa&iacute;s multiling&uuml;e y que deben velar para que el idioma no constituya una barrera al acceso a los contenidos de las webs p&uacute;blicas.";
 choices[55][1] = "Cada Comunidad Aut&oacute;noma debe encargarse de la traducci&oacute;n de los contenidos de sus p&aacute;ginas web para facilitar y acercar los servicios prestados por la Administraci&oacute;n a los ciudadanos y empresas.";
 choices[55][2] = "Como criterio general, todos los contenidos de los portales ser&aacute;n accesibles, adem&aacute;s de en castellano, lengua espa&ntilde;ola oficial del Estado, en las siguientes lenguas idiomas cooficiales de las respectivas Comunidades Aut&oacute;nomas de Espa&ntilde;a: catal&aacute;n, euskera, gallego y valenciano.";
 choices[55][3] = "Para facilitar la traducci&oacute;n a las lenguas cooficiales y al ingl&eacute;s, se est&aacute; preparando una Plataforma de traducci&oacute;n autom&aacute;tica com&uacute;n de la AGE: PLATA que estar&aacute; disponible con gran calidad al catal&aacute;n, gallego y con necesidad de revisi&oacute;n asistida en el caso del euskera y el ingl&eacute;s.";
 answers[55] = choices[55][1];
 units[55] = "125";
 comments[55] = "Id Pregunta: 857. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[55] = 857


//  Id pregunta: 522 Año de creación de pregunta: 2016
 questions[56]= "57)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se denomina:";
 choices[56]= new Array();
 choices[56][0] = "De los interesados en el procedimiento";
 choices[56][1] = "De la actividad de las Administraciones P&uacute;blicas";
 choices[56][2] = "Disposiciones generales";
 choices[56][3] = "De los actos administrativos";
 answers[56] = choices[56][2];
 units[56] = "7";
 comments[56] = "Id Pregunta: 522. LEY 39/2015";
 preguntaids[56] = 522


//  Id pregunta: 551 Año de creación de pregunta: 2016
 questions[57]= "58)  El presidente del pleno de la Comisi&oacute;n de Estrategia TIC es :";
 choices[57]= new Array();
 choices[57][0] = "El Ministro de Energ&iacute;a, Turismo y Agenda Digital";
 choices[57][1] = "El Ministro de Hacienda y Administraciones P&uacute;blicas";
 choices[57][2] = "El Presidente del Gobierno";
 choices[57][3] = "El Secretario General de Administraci&oacute;n Digital";
 answers[57] = choices[57][1];
 units[57] = "26";
 comments[57] = "Id Pregunta: 551. Gobernanza TIC";
 preguntaids[57] = 551


//  Id pregunta: 505 Año de creación de pregunta: 2016
 questions[58]= "59)  Respecto a la Ley Org&aacute;nica 2/2012 se&ntilde;ale la respuesta falsa:";
 choices[58]= new Array();
 choices[58][0] = "La elaboraci&oacute;n, aprobaci&oacute;n y ejecuci&oacute;n de los Presupuestos y dem&aacute;s actuaciones que afecten a los gastos o ingresos de las Administraciones P&uacute;blicas y dem&aacute;s entidades que forman parte del sector p&uacute;blico se someter&aacute; al principio de estabilidad presupuestaria.";
 choices[58][1] = "Ninguna Administraci&oacute;n P&uacute;blica podr&aacute; incurrir en d&eacute;ficit estructural, definido como d&eacute;ficit ajustado del ciclo, neto de medidas excepcionales y temporales.";
 choices[58][2] = "Excepcionalmente, el Estado y las Comunidades Aut&oacute;nomas podr&aacute;n incurrir en d&eacute;ficit estructural en caso de cat&aacute;strofes naturales, recesi&oacute;n econ&oacute;mica grave o situaciones de emergencia extraordinaria que escapen al control de las Administraciones P&uacute;blicas y perjudiquen considerablemente su situaci&oacute;n financiera o su sostenibilidad econ&oacute;mica o social.";
 choices[58][3] = "Las Corporaciones Locales deber&aacute;n mantener una posici&oacute;n de equilibrio presupuestario.";
 answers[58] = choices[58][3];
 units[58] = "10";
 comments[58] = "Id Pregunta: 505. PRESUPUESTOS GENERALES";
 preguntaids[58] = 505


//  Id pregunta: 346 Año de creación de pregunta: 2016
 questions[59]= "60)  La duraci&oacute;n del mandato de un diputado del Parlamento Europeo es de:";
 choices[59]= new Array();
 choices[59][0] = "25 diputados lo son con car&aacute;cter vitalicio y el resto se renueva cada cinco a&ntilde;os.";
 choices[59][1] = "Cuatro a&ntilde;os, como un diputado espa&ntilde;ol.";
 choices[59][2] = "Cinco a&ntilde;os.";
 choices[59][3] = "Ninguna es correcta.";
 answers[59] = choices[59][2];
 units[59] = "5";
 comments[59] = "Id Pregunta: 346. UNION EUROPEA";
 preguntaids[59] = 346


//  Id pregunta: 609 Año de creación de pregunta: 2016
 questions[60]= "61)  Seg&uacute;n Magerit v3, en el desarrollo de sistemas de informaci&oacute;n:";
 choices[60]= new Array();
 choices[60][0] = "La seguridad debe estar embebida en el sistema desde su primera concepci&oacute;n.";
 choices[60][1] = "La seguridad comenzar&aacute; a considerarse formalmente cuando finalice el proceso de implantaci&oacute;n de sistemas de informaci&oacute;n.";
 choices[60][2] = "La seguridad del sistema de informaci&oacute;n es m&aacute;s econ&oacute;mica implantarla una vez puesto en producci&oacute;n el sistema de informaci&oacute;n que tenerla en consideraci&oacute;n durante el desarrollo del sistema.";
 choices[60][3] = "La seguridad s&oacute;lo ralentiza el proceso de desarrollo de sistemas de informaci&oacute;n por lo que s&oacute;lo se debe considerar en aquellos sistemas que usen datos econ&oacute;micos.";
 answers[60] = choices[60][0];
 units[60] = "45";
 comments[60] = "Id Pregunta: 609. Junta de Extremadura A1 2015";
 preguntaids[60] = 609


//  Id pregunta: 704 Año de creación de pregunta: 2016
 questions[61]= "62)  En el modelo de integraci&oacute;n continua se recomienda:";
 choices[61]= new Array();
 choices[61][0] = "Mantener un repositorio de c&oacute;digo.";
 choices[61][1] = "Realizar una migraci&oacute;n manual y controlada a cada entorno de desarrollo.";
 choices[61][2] = "Realizar las construcciones de versiones agrupando m&uacute;ltiples commits para optimizar el tiempo de proceso.";
 choices[61][3] = "Realizar las pruebas en el entorno de producci&oacute;n para obtener resultados reales.";
 answers[61] = choices[61][1];
 units[61] = "92";
 comments[61] = "Id Pregunta: 704. INTEGRACION CONTINUA";
 preguntaids[61] = 704


//  Id pregunta: 511 Año de creación de pregunta: 2016
 questions[62]= "63)  A tenor de lo dispuesto en el art&iacute;culo 14 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, el pago de los intereses y el capital de la deuda p&uacute;blica de las Administraciones P&uacute;blicas gozar&aacute; de prioridad:";
 choices[62]= new Array();
 choices[62][0] = "Sobre otros gastos siempre que no superen el 80% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[62][1] = "Sobre otros gastos siempre que no superen el 70% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[62][2] = "Absoluta frente a cualquier otro gasto.";
 choices[62][3] = "Sobre otros gastos siempre que no superen el 60% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea";
 answers[62] = choices[62][2];
 units[62] = "10";
 comments[62] = "Id Pregunta: 511. PRESUPUESTOS GENERALES";
 preguntaids[62] = 511


//  Id pregunta: 559 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Qu&eacute; ministerios han liderado la elaboraci&oacute;n de la Agenda Digital para Espa&ntilde;a?";
 choices[63]= new Array();
 choices[63][0] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica ";
 choices[63][1] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Econom&iacute;a, Industria y Competitividad";
 choices[63][2] = "El Ministerio de Econom&iacute;a, Industria y Competitividad y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[63][3] = "Ninguno de ellos, puesto que ha venido elaborada desde los organismos de la UE";
 answers[63] = choices[63][0];
 units[63] = "19";
 comments[63] = "Id Pregunta: 559. Agenda Digital";
 preguntaids[63] = 559


//  Id pregunta: 134 Año de creación de pregunta: 2016
 questions[64]= "65)  La Ley 2/2015, de desindexaci&oacute;n de la econom&iacute;a espa&ntilde;ola, parte de un compromiso del Gobierno en el marco:";
 choices[64]= new Array();
 choices[64][0] = "Del Programa Nacional de Reformas 2015 y 2016.";
 choices[64][1] = "Del Plan de Transformaci&oacute;n Digital 2015-2020.";
 choices[64][2] = "Del Programa Nacional de Reformas 2013 y 2014.";
 choices[64][3] = "Del Pacto Fiscal Europeo de 2012.";
 answers[64] = choices[64][2];
 units[64] = "12";
 comments[64] = "Id Pregunta: 134. Leyes modelo econ&oacute;mico";
 preguntaids[64] = 134


//  Id pregunta: 365 Año de creación de pregunta: 2016
 questions[65]= "66)  Las decisiones de la Comisi&oacute;n se adoptar&aacute;n por:";
 choices[65]= new Array();
 choices[65][0] = "Unanimidad y mayor&iacute;a simple.";
 choices[65][1] = "Unanimidad.";
 choices[65][2] = "Mayor&iacute;a cualificada.";
 choices[65][3] = "Mayor&iacute;a simple.";
 answers[65] = choices[65][3];
 units[65] = "5";
 comments[65] = "Id Pregunta: 365. UNION EUROPEA";
 preguntaids[65] = 365


//  Id pregunta: 762 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Cu&aacute;l de los siguientes es uno de los pilares en los que se fundamenta la Estrategia del Mercado &Uacute;nico Digital?";
 choices[66]= new Array();
 choices[66][0] = "Mejorar el acceso de los consumidores y empresas a los bienes y servicios digitales en Europa";
 choices[66][1] = "Aplicar est&aacute;ndares de calidad a los servicios digitales en Europa";
 choices[66][2] = "Apertura al exterior";
 choices[66][3] = "I+D+i como forma de mejorar los servicios digitales de las empresas europeas";
 answers[66] = choices[66][0];
 units[66] = "17";
 comments[66] = "Id Pregunta: 762. Mercado &Uacute;nico Digital";
 preguntaids[66] = 762


//  Id pregunta: 715 Año de creación de pregunta: 2016
 questions[67]= "68)  Entre las funcionalidades generales de un servidor de integraci&oacute;n continua NO se encuentra";
 choices[67]= new Array();
 choices[67][0] = "La ejecuci&oacute;n de una serie de test: JUnit, Cactus, Auditoria del c&oacute;digo fuente, test IHM, test funcionales.";
 choices[67][1] = "Permite realiza el despliegue de archivos en el entorno de producci&oacute;n.";
 choices[67][2] = "La notificaci&oacute;n del resultado por medios como correo electr&oacute;nico o RSS.";
 choices[67][3] = "La creaci&oacute;n de un informe de estad&iacute;sticas.";
 answers[67] = choices[67][1];
 units[67] = "92";
 comments[67] = "Id Pregunta: 715. INTEGRACION CONTINUA";
 preguntaids[67] = 715


//  Id pregunta: 753 Año de creación de pregunta: 2016
 questions[68]= "69)  En el contexto de la Ley 20/2013, de garant&iacute;a de la unidad de mercado, se considerar&aacute; que concurren los principios de necesidad y proporcionalidad para la exigencia de una autorizaci&oacute;n:";
 choices[68]= new Array();
 choices[68][0] = "Respecto a los operadores econ&oacute;micos, cuando est&eacute; justificado por razones de orden p&uacute;blico aunque &eacute;stas puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n.";
 choices[68][1] = "Respecto a las instalaciones o infraestructuras f&iacute;sicas necesarias para el ejercicio de actividades econ&oacute;micas, cuando sean susceptibles de generar da&ntilde;os sobre el medio ambiente y el entorno urbano, la seguridad o la salud p&uacute;blica y el patrimonio hist&oacute;rico-art&iacute;stico, y estas razones no puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n";
 choices[68][2] = "b) y d) son verdaderas";
 choices[68][3] = "Cuando as&iacute; se disponga reglamentariamente";
 answers[68] = choices[68][1];
 units[68] = "23";
 comments[68] = "Id Pregunta: 753. Direcci&oacute;n p&uacute;blica";
 preguntaids[68] = 753


//  Id pregunta: 253 Año de creación de pregunta: 2016
 questions[69]= "70)  La Constituci&oacute;n Espa&ntilde;ola establece sobre la inform&aacute;tica que:";
 choices[69]= new Array();
 choices[69][0] = "La Ley potenciar&aacute; el uso de la inform&aacute;tica para garantizar la libertad de residencia y las transacciones electr&oacute;nicas en el marco de la econom&iacute;a de mercado y la planificaci&oacute;n del desarrollo econ&oacute;mico nacional.";
 choices[69][1] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el secreto de las comunicaciones, la informaci&oacute;n veraz y la solidaridad entre todos los ciudadanos.";
 choices[69][2] = "En la Constituci&oacute;n Espa&ntilde;ola de 1978 no se hace referencia expresa a la inform&aacute;tica.";
 choices[69][3] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el honor y la intimidad personal y familiar de los ciudadanos y el pleno ejercicio de sus derechos.";
 answers[69] = choices[69][3];
 units[69] = "1";
 comments[69] = "Id Pregunta: 253. CONSTITUCION1978";
 preguntaids[69] = 253


//  Id pregunta: 641 Año de creación de pregunta: 2016
 questions[70]= "71)  En cuanto al proceso de autenticaci&oacute;n en Linux, indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[70]= new Array();
 choices[70][0] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema DEC.";
 choices[70][1] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema MD6.";
 choices[70][2] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DES y MD5.";
 choices[70][3] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DEC y MD6.";
 answers[70] = choices[70][2];
 units[70] = "57";
 comments[70] = "Id Pregunta: 641. Junta de Extremadura A1 2015";
 preguntaids[70] = 641


//  Id pregunta: 26 Año de creación de pregunta: 2016
 questions[71]= "72)  Usted, como directivo TIC de la AGE, decide crear un portal web, con una direcci&oacute;n electr&oacute;nica nueva, con el objetivo de informar al ciudadano sobre determinados aspectos relacionados con su unidad. &iquest;Cu&aacute;l de los siguientes tipos de certificado utilizar&iacute;a para identificar a los servidores de su portal informativo?";
 choices[71]= new Array();
 choices[71][0] = "Sello electr&oacute;nico";
 choices[71][1] = "Sede electr&oacute;nica";
 choices[71][2] = "Servidor seguro (SSL/TLS)";
 choices[71][3] = "Empleado p&uacute;blico";
 answers[71] = choices[71][2];
 units[71] = "7";
 comments[71] = "Id Pregunta: 26. AGE A1 2015";
 preguntaids[71] = 26


//  Id pregunta: 690 Año de creación de pregunta: 2016
 questions[72]= "73)  Indique cu&aacute;l de los siguientes no es uno de los requisitos que deben cumplir los servicios cualificados de entrega electro&#769;nica certificada seg&uacute;n el Reglamento (UE) 910/2014";
 choices[72]= new Array();
 choices[72][0] = "Ser prestados por uno o ma&#769;s prestadores cualificados de servicios de confianza";
 choices[72][1] = "Garantizar la identificacio&#769;n del destinatario antes de la entrega de los datos";
 choices[72][2] = "Indicar mediante un sello cualificado de tiempo electro&#769;nico la fecha y hora de envi&#769;o, recepcio&#769;n y eventual modificacio&#769;n de los datos";
 choices[72][3] = "Proteger el envi&#769;o y la recepcio&#769;n de datos por una firma electro&#769;nica cualificada o un sello electro&#769;nico cualificado de un prestador cualificado de servicios de confianza";
 answers[72] = choices[72][1];
 units[72] = "77";
 comments[72] = "Id Pregunta: 690. Art&iacute;culo 44 del Reglamento 910/2014";
 preguntaids[72] = 690


//  Id pregunta: 338 Año de creación de pregunta: 2016
 questions[73]= "74)  En el Consejo de Europa cada Estado miembro tiene una delegaci&oacute;n nacional en Bruselas conocida como &oacute;rgano de apoyo, denominado:";
 choices[73]= new Array();
 choices[73][0] = "CO.PER.";
 choices[73][1] = "COMPER.";
 choices[73][2] = "CO.RE.PER.";
 choices[73][3] = "CO.PE.RRE.";
 answers[73] = choices[73][2];
 units[73] = "5";
 comments[73] = "Id Pregunta: 338. UNION EUROPEA";
 preguntaids[73] = 338


//  Id pregunta: 142 Año de creación de pregunta: 2016
 questions[74]= "75)  El plazo para la interposici&oacute;n del recurso de alzada ser&aacute;:";
 choices[74]= new Array();
 choices[74][0] = "De un mes si el acto fuera presunto";
 choices[74][1] = "De un mes si el acto fuera expreso";
 choices[74][2] = "De un mes en cualquier caso";
 choices[74][3] = "No existe un plazo m&aacute;ximo para la interposici&oacute;n de un recurso de alzada";
 answers[74] = choices[74][1];
 units[74] = "8";
 comments[74] = "Id Pregunta: 142. Ley 39/2015, Art&iacute;culo 122";
 preguntaids[74] = 142


