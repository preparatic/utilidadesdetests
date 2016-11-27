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

//  Id pregunta: 20 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;les de los siguientes son objetivos importantes que persigue la pol&iacute;tica comunitaria en materia de normalizaci&oacute;n?:";
 choices[0]= new Array();
 choices[0][0] = "Crear un entorno competitivo y defender y proteger la inversi&oacute;n de los usuarios en las tecnolog&iacute;as de la informaci&oacute;n";
 choices[0][1] = "Crear un entorno de trabajo uniforme y normalizado en todas las administraciones europeas y conseguir la plena movilidad de funcionarios a trav&eacute;s de las distintas instituciones de toda la UE";
 choices[0][2] = "Suprimir las barreras de comercio en el sector de tecnolog&iacute;as de informaci&oacute;n en el mercado &uacute;nico con vistas a proteger la industria europea de la materia";
 choices[0][3] = "Las respuestas a) y b) en conjunto";
 answers[0] = choices[0][3];
 units[0] = "40";
 comments[0] = "Id Pregunta: 20. ";


//  Id pregunta: 43 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Cu&aacute;l de los siguientes componentes, incluido en la guia de portabilidad XPG4 est&aacute; tambi&eacute;n en la XPG3?:";
 choices[1]= new Array();
 choices[1][0] = "Servicio de directorio X.500";
 choices[1][1] = "X Window System Application Interface";
 choices[1][2] = "Gateway X.400";
 choices[1][3] = "Servidor NFS";
 answers[1] = choices[1][1];
 units[1] = "40";
 comments[1] = "Id Pregunta: 43. ";


//  Id pregunta: 150 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  El modelo de Nolan de cuatro etapas si lo representamos gr&aacute;ficamente tiene forma de:";
 choices[2]= new Array();
 choices[2][0] = "s";
 choices[2][1] = "n";
 choices[2][2] = "u";
 choices[2][3] = "z";
 answers[2] = choices[2][0];
 units[2] = "22";
 comments[2] = "Id Pregunta: 150. Nolan";


//  Id pregunta: 167 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  El T&iacute;tulo VI de la LOPD trata sobre:";
 choices[3]= new Array();
 choices[3][0] = "Principios de la protecci&oacute;n de datos";
 choices[3][1] = "Derechos de las personas";
 choices[3][2] = "Movimiento internacional de datos";
 choices[3][3] = "Agencia de Protecci&oacute;n de Datos";
 answers[3] = choices[3][3];
 units[3] = "29";
 comments[3] = "Id Pregunta: 167. ";


//  Id pregunta: 194 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  El An&aacute;lisis Coste-Beneficio es una t&eacute;cnica empleada en el estudio de viabilidad de un nuevo sistema de informaci&oacute;n. &iquest;Cu&aacute;l de las siguientes no es una utilidad del An&aacute;lisis Coste-Beneficio?";
 choices[4]= new Array();
 choices[4][0] = "Valorar la necesidad y oportunidad de acometer la realizaci&oacute;n del proyecto.";
 choices[4][1] = "Calcular el punto de amortizaci&oacute;n del proyecto.";
 choices[4][2] = "Seleccionar la alternativa m&aacute;s beneficiosa.";
 choices[4][3] = "Estimar adecuadamente los recursos econ&oacute;micos necesarios.";
 answers[4] = choices[4][1];
 units[4] = "27";
 comments[4] = "Id Pregunta: 194. Examen TIC MAP B 2004";


//  Id pregunta: 203 AÃ±o de creación de pregunta: 2004-01-01
 questions[5]= "6)  Organismos de normalizaci&oacute;n europeos son";
 choices[5]= new Array();
 choices[5][0] = "CEN";
 choices[5][1] = "OSI";
 choices[5][2] = "IEEE";
 choices[5][3] = "Ninguna de las anteriores";
 answers[5] = choices[5][0];
 units[5] = "42";
 comments[5] = "Id Pregunta: 203. ";


//  Id pregunta: 228 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  En las estrategias de negociaci&oacute;n:";
 choices[6]= new Array();
 choices[6][0] = "La estrategia de ganar-ganar es la que por lo general deja m&aacute;s satisfechos a las 2 partes";
 choices[6][1] = "La estrategia de perder-perder suele llevar a un equilibrio inestable que provoca que tarde o temprano tenga que volverse a retomar la negociaci&oacute;n";
 choices[6][2] = "Las 2 respuestas anteriores son correctas";
 choices[6][3] = "Ninguna de las respuestas anteriores son correctas";
 answers[6] = choices[6][2];
 units[6] = "28";
 comments[6] = "Id Pregunta: 228. negociaci&oacute;n";


//  Id pregunta: 388 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  No es un elemento de MAGERIT:";
 choices[7]= new Array();
 choices[7][0] = "Amenaza";
 choices[7][1] = "Activo";
 choices[7][2] = "Riesgo";
 choices[7][3] = "Salvaguarda";
 answers[7] = choices[7][2];
 units[7] = "33";
 comments[7] = "Id Pregunta: 388. ";


//  Id pregunta: 436 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Seg&uacute;n la Ley 1/1996 de Propiedad Intelectual, s&oacute;lo una de las siguientes definiciones es correcta:";
 choices[8]= new Array();
 choices[8][0] = "Obra en colaboraci&oacute;n: aquella resultado de la colaboraci&oacute;n de varios autores, correspondiendo el derecho a todos ellos en la proporci&oacute;n que determinen";
 choices[8][1] = "Obra compuesta: aquella obra nueva que incorpore una obra existente con la colaboraci&oacute;n del autor de &eacute;sta &uacute;ltima";
 choices[8][2] = "Las 2 anteriores son definiciones correctas";
 choices[8][3] = "Las 2 primeras son definiciones incorrectas";
 answers[8] = choices[8][0];
 units[8] = "36";
 comments[8] = "Id Pregunta: 436. ";


//  Id pregunta: 438 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Seg&uacute;n la Ley Org&aacute;nica 15/99 de Protecci&oacute;n de Datos de car&aacute;cter personal, el derecho de acceso s&oacute;lo podr&aacute; ser ejercitado a intervalos no inferiores a:";
 choices[9]= new Array();
 choices[9][0] = "12 meses";
 choices[9][1] = "6 meses";
 choices[9][2] = "6 meses, salvo que el interesado acredite un inter&eacute;s leg&iacute;timo al efecto, en cuyo caso podr&aacute; ejercitarlo antes";
 choices[9][3] = "12 meses, salvo que el interesado acredite un inter&eacute;s leg&iacute;timo al efecto, en cuyo caso podr&aacute; ejercitarlo antes";
 answers[9] = choices[9][3];
 units[9] = "29";
 comments[9] = "Id Pregunta: 438. ";


//  Id pregunta: 452 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Se&ntilde;ale c&uacute;al no es una funci&oacute;n atribuida al Director de la Agencia de Protecci&oacute;n de Datos:";
 choices[10]= new Array();
 choices[10][0] = "Resuelve los expedientes disciplinarios cuando la infracci&oacute;n es cometida por los responsables de los ficheros p&uacute;blicos";
 choices[10][1] = "Requerir a los responsables de ficheros de titularidad privada a que subsanen deficiencias de los c&oacute;digos tipo";
 choices[10][2] = "Resolver sobre la validez de las notificaciones de inscripci&oacute;n en el Registro General de Protecci&oacute;n de Datos";
 choices[10][3] = "Adoptar medidas cautelares respecto de los tratamientos de datos personales cuando lo estima necesario";
 answers[10] = choices[10][0];
 units[10] = "29";
 comments[10] = "Id Pregunta: 452. ";


//  Id pregunta: 469 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Una amenaza es, de acuerdo a MAGERIT:";
 choices[11]= new Array();
 choices[11][0] = "Da&ntilde;o producido a una organizaci&oacute;n por un posible incidente";
 choices[11][1] = "Resultado de una agresi&oacute;n";
 choices[11][2] = "Evento que puede desencadenar un incidente en la organizaci&oacute;n, produciendo da&ntilde;os materiales o p&eacute;rdidas inmateriales";
 choices[11][3] = "Posibilidad de ocurrencia de un incidente";
 answers[11] = choices[11][2];
 units[11] = "31, 32, 33";
 comments[11] = "Id Pregunta: 469. ";


//  Id pregunta: 472 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Una ley de protecci&oacute;n de datos deber&aacute; responder a las siguientes cuestiones, excepto una, &iquest;cu&aacute;l?:";
 choices[12]= new Array();
 choices[12][0] = "&iquest;Qu&eacute; datos pueden ser recogidos?";
 choices[12][1] = "&iquest;C&oacute;mo pueden ser recogidos?";
 choices[12][2] = "&iquest;Cuando pueden ser recogidos?";
 choices[12][3] = "&iquest;Con qu&eacute; fin pueden ser recogidos?";
 answers[12] = choices[12][2];
 units[12] = "29";
 comments[12] = "Id Pregunta: 472. ";


//  Id pregunta: 480 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;De qu&eacute; depende el canon de compensacion equitativa por copia privada establecido con la orden PRE/1743/2008 de 18 de junio?";
 choices[13]= new Array();
 choices[13][0] = "Del tipo de equipo (anal&oacute;gico o digital)";
 choices[13][1] = "Del destino del soporte";
 choices[13][2] = "De la categoria del equipo";
 choices[13][3] = "Todas son ciertas";
 answers[13] = choices[13][3];
 units[13] = "36,37";
 comments[13] = "Id Pregunta: 480. ";


//  Id pregunta: 516 AÃ±o de creación de pregunta: 2003-01-01
 questions[14]= "15)  Seg&uacute;n la Metodolog&iacute;a de An&aacute;lisis y Gesti&oacute;n de Riesgos del Consejo Superior de Inform&aacute;tica (MAGERIT) indicar a qu&eacute; concepto corresponde la siguiente definici&oacute;n &quot;Potencialidad o posibilidad de ocurrencia de materializaci&oacute;n de una amenaza sobre un activo&quot;:";
 choices[14]= new Array();
 choices[14][0] = "Salvaguarda";
 choices[14][1] = "Riesgo";
 choices[14][2] = "Impacto";
 choices[14][3] = "Vulnerabilidad";
 answers[14] = choices[14][3];
 units[14] = "31, 32, 33";
 comments[14] = "Id Pregunta: 516. ";


//  Id pregunta: 561 AÃ±o de creación de pregunta: 2006-01-01
 questions[15]= "16)  Los modelos de optimizaci&oacute;n tratan de problemas";
 choices[15]= new Array();
 choices[15][0] = "bien comprendidos con sus caracter&iacute;sticas  cualitativas bien determinadas";
 choices[15][1] = "Debe definirse un objetivo impl&iacute;cto &uacute;nico";
 choices[15][2] = "Puede existir un procedimiento (algoritmo) viable de c&aacute;lculo, para encontrar el valor &oacute;ptimo de la funci&oacute;n objetivo";
 choices[15][3] = "En general, nunca es posibleencontrar el verdadero &oacute;ptimo global optando por encontrar una soluci&oacute;n sub&oacute;ptima que determine los valores de s&oacute;lounas pocas variables de decisi&oacute;n, al tiempo que trata a las dem&aacute;s como restricciones fijas.";
 answers[15] = choices[15][3];
 units[15] = "21";
 comments[15] = "Id Pregunta: 561. ";


//  Id pregunta: 564 AÃ±o de creación de pregunta: 2006-01-01
 questions[16]= "17)  En las organizaciones basadas en la informaci&oacute;n, los informes";
 choices[16]= new Array();
 choices[16][0] = "No ser&aacute;n necesarios dado que el control vendr&aacute; implicito en los propios sistemas";
 choices[16][1] = "Los mandos intermedios tendr&aacute;n la oportunidad de realizar informes m&aacute;s fiables";
 choices[16][2] = "Los mandos intermedios podr&aacute;n proporcionar datos m&aacute;s fiables  y exactos";
 choices[16][3] = "permitir&aacute;n avanzar en los aspectos de creatividad, motivaci&oacute;n y calidad.";
 answers[16] = choices[16][3];
 units[16] = "22";
 comments[16] = "Id Pregunta: 564. ";


//  Id pregunta: 581 AÃ±o de creación de pregunta: 2006-01-01
 questions[17]= "18)  Dentro del an&aacute;lisis de un sistema de informaci&oacute;n automatizado, de una aplicaci&oacute;n o de un proceso no serealiza b&aacute;sicamente, dentro de un esquema de modelo conceptual de datos, la siguiente tarea:";
 choices[17]= new Array();
 choices[17][0] = "Estudio del sistema de informaci&oacute;n preexistente";
 choices[17][1] = "Descripci&oacute;n procedural de cada unidad de tratamiento (programa).";
 choices[17][2] = "Dise&ntilde;o racional y normalizado del nuevo sistema de informaci&oacute;n";
 choices[17][3] = "Descripci&oacute;n generalizada de cada proceso.";
 answers[17] = choices[17][1];
 units[17] = "26";
 comments[17] = "Id Pregunta: 581. ";


//  Id pregunta: 624 AÃ±o de creación de pregunta: 2006-01-01
 questions[18]= "19)  El m&eacute;todo en el que con criterios el decisor estima una matriz (nxn) A=(a,), donde a es la medida subjetiva de la importancia relativa del criterio i frente al j en una escala normalizada de 1 (igual de importante) a 9 (absolutamente m&aacute;s importante) es:";
 choices[18]= new Array();
 choices[18][0] = "m&eacute;todo Delphi";
 choices[18][1] = "m&eacute;todo de las utilidades relativas";
 choices[18][2] = "m&eacute;todo de la entrop&iacute;a";
 choices[18][3] = "AHP (Analytic Hierarchy Process)";
 answers[18] = choices[18][3];
 units[18] = "34";
 comments[18] = "Id Pregunta: 624. ";


//  Id pregunta: 635 AÃ±o de creación de pregunta: 2006-01-01
 questions[19]= "20)  Los aspectos b&aacute;sicos a considerar en toda inversi&oacute;n son:";
 choices[19]= new Array();
 choices[19][0] = "La inversi&oacute;n incial y el plazo de la inversi&oacute;n.";
 choices[19][1] = "La inversi&oacute;n inicial, el plazo de la inversi&oacute;n, y el plazo de amortizaci&oacute;n.";
 choices[19][2] = "La inversi&oacute;n inicial, los flujos de caja y los momentos en que tienen lugar, y el plazo de la inversi&oacute;n.";
 choices[19][3] = "Los gastos financieros de la inversi&oacute;n, los flujos de caja, y el punto de amortizaci&oacute;n.";
 answers[19] = choices[19][2];
 units[19] = "38";
 comments[19] = "Id Pregunta: 635. ";


//  Id pregunta: 649 AÃ±o de creación de pregunta: 2006-01-01
 questions[20]= "21)  Cu&aacute;l de las siguientes afirmaciones sobre normalizaci&oacute;n europea es incorrecta:";
 choices[20]= new Array();
 choices[20][0] = "El Instituto Europeo de Normas de Telecomunicaci&oacute;n (ETSI) elabora Especificaciones t&eacute;cnicas (TS), Informes t&eacute;cnicos (TR), Normas ETSI (ES) y Normas Europeas (EN).";
 choices[20][1] = "Los &Oacute;rganismos Nacionales de Normalizaci&oacute;n tienen la obligaci&oacute;n de adoptar &iacute;ntegramente las Normas Europeas (EN) elaboradas por CEN/CENELEC o ETSI.";
 choices[20][2] = "Las normas europeas (EN) elaboradas por CEN/CENELEC o ETSI son de obligado cumplimiento por los Estados Miembros.";
 choices[20][3] = "CEN/CENELEC elaboran de Normas Europeas (EN) y Normas Experimentales Europeas (ENVs).";
 answers[20] = choices[20][2];
 units[20] = "42";
 comments[20] = "Id Pregunta: 649. ";


//  Id pregunta: 2904 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Como medidas de tipo f&iacute;sico, en seguridad inform&aacute;tica, podemos hablar de:";
 choices[21]= new Array();
 choices[21][0] = "Seguridad de datos y de software";
 choices[21][1] = "Seguridad organizativo-administrativa y de software";
 choices[21][2] = "Seguridad de hardware y de datos";
 choices[21][3] = "Adecuaci&oacute;n de locales y seguridad de accesos";
 answers[21] = choices[21][3];
 units[21] = "33";
 comments[21] = "Id Pregunta: 2904. ";


//  Id pregunta: 4280 AÃ±o de creación de pregunta: 2007-01-01
 questions[22]= "23)  Un sistema ERP (Enterprise Resource Planning) b&aacute;sicamente act&uacute;a sobre:";
 choices[22]= new Array();
 choices[22][0] = "La capa de datos (SGBD).";
 choices[22][1] = "La capa de l&oacute;gica de negocio.";
 choices[22][2] = "La capa de presentaci&oacute;n.";
 choices[22][3] = "La capa de comunicaci&oacute;n";
 answers[22] = choices[22][1];
 units[22] = "65";
 comments[22] = "Id Pregunta: 4280. ";


//  Id pregunta: 4415 AÃ±o de creación de pregunta: 2007-01-01
 questions[23]= "24)  En el m&eacute;todo TOPSIS de decisi&oacute;n entre alternativas...";
 choices[23]= new Array();
 choices[23][0] = "La alternativa seleccionada debe ser aqu&eacute;lla que est&eacute; lo m&aacute;s cerca posible de la soluci&oacute;n ideal positiva y lo m&aacute;s lejos posible de la soluci&oacute;n ideal negativa.";
 choices[23][1] = "La idea es comparar cada permutaci&oacute;n posible de alternativas con la informaci&oacute;n ordinal de evaluaciones que aporta para cada criterio la matriz de decisi&oacute;n.";
 choices[23][2] = "En cada comparaci&oacute;n se asocia: &iacute;ndice de concordancia (mide argumentos a favor de la alternativa) e &iacute;ndice de discordancia (mide argumentos en contra).";
 choices[23][3] = "Se ignora la cuant&iacute;a de la diferencia entre alternativas para cada criterio, s&oacute;lo se&ntilde;ala si existe o no, y considera la importancia del criterio para el decisor.";
 answers[23] = choices[23][0];
 units[23] = "34";
 comments[23] = "Id Pregunta: 4415. ";


//  Id pregunta: 4506 AÃ±o de creación de pregunta: 2007-01-01
 questions[24]= "25)  &iquest;Cual de los siguientes seria el encuadre org&aacute;nico preferible de la auditoria inform&aacute;tica interna?";
 choices[24]= new Array();
 choices[24][0] = "Se adscribir&iacute;a al Departamento de Sistemas de Informaci&oacute;n, ya que el personal especializado necesario solo esta disponible en ese Departamento";
 choices[24][1] = "Depender&iacute;a org&aacute;nicamente del Departamento de SI y funcionalmente del Departamento Financiero, por su labor auxiliar en la auditoria financiera de la organizaci&oacute;n";
 choices[24][2] = "No deber&iacute;a existir, ya que al ser interna seria imposible que fuera independiente con respecto a los auditados";
 choices[24][3] = "Se encuadrar&iacute;a dentro del staff, es decir, dentro de los &oacute;rganos de apoyo a la direcci&oacute;n existentes en Ia estructura organizativa, con el fin de garantizar la independencia necesaria";
 answers[24] = choices[24][3];
 units[24] = "31";
 comments[24] = "Id Pregunta: 4506. ";


//  Id pregunta: 4551 AÃ±o de creación de pregunta: 2007-01-01
 questions[25]= "26)  El RD Legislativo 3/2011 de Contratos del Sector P&uacute;blico establece que la adquisicion de programas de ordenador a medida:";
 choices[25]= new Array();
 choices[25][0] = "se considera contrato de obra .";
 choices[25][1] = "se considera contrato de servicios.";
 choices[25][2] = "se considera contrato de suministro.";
 choices[25][3] = "se considera contrato de consultoria y asistencia.";
 answers[25] = choices[25][1];
 units[25] = "41";
 comments[25] = "Id Pregunta: 4551. ";


//  Id pregunta: 4556 AÃ±o de creación de pregunta: 2007-01-01
 questions[26]= "27)  Seg&uacute;n la Norma UNE 71502:2004, Ia facultad de un control para lograr los objetivos de seguridad para Ia que fue dise&ntilde;ado se denomina";
 choices[26]= new Array();
 choices[26][0] = "eficacia de un control";
 choices[26][1] = "eficiencia de un control";
 choices[26][2] = "idoneidad de un control";
 choices[26][3] = "finalidad de un control";
 answers[26] = choices[26][0];
 units[26] = "";
 comments[26] = "Id Pregunta: 4556. ";


//  Id pregunta: 4561 AÃ±o de creación de pregunta: 2007-01-01
 questions[27]= "28)  En cual de las fases de la planificaci&oacute;n de una auditoria inform&aacute;tica pueden surgir ciertos problemas por coincidir las fechas de trabajo del personal de Ia empresa auditora con otros clientes?";
 choices[27]= new Array();
 choices[27][0] = "fase de planificaci&oacute;n estrat&eacute;gica";
 choices[27][1] = "fase de planificaci&oacute;n administrativa";
 choices[27][2] = "fase de planificaci&oacute;n t&eacute;cnica";
 choices[27][3] = "fase de planificaci&oacute;n operativa";
 answers[27] = choices[27][1];
 units[27] = "31";
 comments[27] = "Id Pregunta: 4561. ";


//  Id pregunta: 4780 AÃ±o de creación de pregunta: 2007-01-01
 questions[28]= "29)  La Ley de Impulso de la Sociedad de la Informaci&oacute;n introduce novedades en materia de";
 choices[28]= new Array();
 choices[28][0] = "Seguridad. Los prestadores de servicios deber&aacute;n informar a sus clientes sobre medidas de seguridad que apliquen en sus servicios";
 choices[28][1] = "Accesibilidad. Se establece que las p&aacute;ginas web de las AAPP alcancen el nivel medio de accesibilidad";
 choices[28][2] = "Ampliaci&oacute;n de los nombres de dominio. Deber&aacute;n poder asignarse nombres de dominio .es que contengan el car&aacute;cter &quot;&ntilde;&quot;";
 choices[28][3] = "Todas las anteriores son ciertas";
 answers[28] = choices[28][3];
 units[28] = "30";
 comments[28] = "Id Pregunta: 4780. Ley 56/2007";


//  Id pregunta: 4867 AÃ±o de creación de pregunta: 2007-01-01
 questions[29]= "30)  El marco legislativo espa&ntilde;ol de la Propiedad Intelectual e Industrial configurado mediante el Real DecretoLegislativo 1/1996, de 12 de abril, por el que se aprueba el Texto Refundido de la Ley de Propiedad Intelectual, enlo referente al software, establece sobre la creaci&oacute;n de programas de ordenador por trabajadores asalariados en elejercicio de sus funciones en la empresa que";
 choices[29]= new Array();
 choices[29][0] = "No son titulares de los derechos de explotaci&oacute;n del programa, ni del c&oacute;digo fuente, ni del objeto, salvo pactoen contrario con la empresa";
 choices[29][1] = "Son titulares siempre de los derechos de explotaci&oacute;n del c&oacute;digo fuente del programa, no as&iacute; del c&oacute;digoobjeto, que necesariamente se habr&aacute; probado y validado en los sistemas inform&aacute;ticos de la empresa";
 choices[29][2] = "Siempre son titulares tanto del c&oacute;digo fuente como del objeto, as&iacute; como de toda la documentaci&oacute;npreparatoria que hayan generado durante su trabajo de creaci&oacute;n; el empresario tendr&aacute; derecho en todo casoa disponer de una copia de todo el software para su explotaci&oacute;n comercial";
 choices[29][3] = "El &uacute;nico y exclusivo titular de los derechos de explotaci&oacute;n del programa de ordenador creado es elempresario, en toda circunstancia legal";
 answers[29] = choices[29][0];
 units[29] = "36";
 comments[29] = "Id Pregunta: 4867. ";


//  Id pregunta: 4890 AÃ±o de creación de pregunta: 2007-01-01
 questions[30]= "31)  La adquisici&oacute;n de una licencia mediante la que se cede el derecho de uso de un programa de ordenador, seg&uacute;n el RD Legislativo 3/2011, tiene categor&iacute;a de:";
 choices[30]= new Array();
 choices[30][0] = "Contrato de suministros";
 choices[30][1] = "Contrato de consultor&iacute;a y asistencia";
 choices[30][2] = "Contrato de servicios";
 choices[30][3] = "Contrato de arrendamiento";
 answers[30] = choices[30][0];
 units[30] = "41";
 comments[30] = "Id Pregunta: 4890. ";


//  Id pregunta: 4892 AÃ±o de creación de pregunta: 2007-01-01
 questions[31]= "32)  El plazo de ejecuci&oacute;n de un contrato para el desarrollo de un sistema, figurar&aacute; en:";
 choices[31]= new Array();
 choices[31][0] = "El pliego de prescripciones t&eacute;cnicas.";
 choices[31][1] = "El pliego de cl&aacute;usulas adminsitrativas particulares.";
 choices[31][2] = "Las cl&aacute;usulas especiales de contrataci&oacute;n.";
 choices[31][3] = "Los criterios de adjudicaci&oacute;n del contrato.";
 answers[31] = choices[31][1];
 units[31] = "41";
 comments[31] = "Id Pregunta: 4892. ";


//  Id pregunta: 4894 AÃ±o de creación de pregunta: 2007-01-01
 questions[32]= "33)  &iquest;Qui&eacute;n es el &oacute;rgano de contrataci&oacute;n en la adquisici&oacute;n de equipos y sistemas para el tratamiento de la informaci&oacute;n declarados de adquisici&oacute;n centralizada, una vez establecido el acuerdo marco?";
 choices[32]= new Array();
 choices[32][0] = "El Ministerio de Hacienda";
 choices[32][1] = "Las Juntas de Contrataci&oacute;n";
 choices[32][2] = "La Direcci&oacute;n General de Racionalizaci&oacute;n y Contrataci&oacute;n Centralizada.";
 choices[32][3] = "El Ministerio de Administraciones P&uacute;blicas.";
 answers[32] = choices[32][2];
 units[32] = "41";
 comments[32] = "Id Pregunta: 4894. La Junta de Contrataci&oacute;n Centralizada (JCC) es el &oacute;rgano de contrataci&oacute;n en la adopci&oacute;n de tipos del AM. La JCC ha desconcentrado en la DG Racionalizaci&oacute;n y Contrataci&oacute;n Centralizada la adjudicaci&oacute;n de AM posterior a la adopci&oacute;n de tipos.";


//  Id pregunta: 4939 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  El est&aacute;ndar que refiere la usabilidad como la capacidad de un software de ser comprendido, aprendido, usadoy ser atractivo para el usuario, en condiciones espec&iacute;ficas de uso es:";
 choices[33]= new Array();
 choices[33][0] = "RFC 2865";
 choices[33][1] = "ISO/IEC 9126";
 choices[33][2] = "ISO/IEC 9241";
 choices[33][3] = "RFC 2866";
 answers[33] = choices[33][1];
 units[33] = "39";
 comments[33] = "Id Pregunta: 4939. Examen TIC B 2007";


//  Id pregunta: 5116 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  En la estimaci&oacute;n del retorno de la inversi&oacute;n, al calcular el Beneficio Neto Anual:";
 choices[34]= new Array();
 choices[34][0] = "Se deben ignorar los beneficios intangibles pues no se pueden traducir en un importe.";
 choices[34][1] = "Se deben tener en cuenta los gastos operacionales anuales.";
 choices[34][2] = "Se debe tener en cuenta el gasto inciail del desarrollo del sistema.";
 choices[34][3] = "Se debe tener en cuenta el total de la inversi&oacute;n realizada.";
 answers[34] = choices[34][1];
 units[34] = "38";
 comments[34] = "Id Pregunta: 5116. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5553 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  La clara identificaci&oacute;n de cualquier cambio de idioma que se pueda producir en el texto de un documento, ser&iacute;a un ejemplo de punto de verificaci&oacute;n de accesibilidad de prioridad: ";
 choices[35]= new Array();
 choices[35][0] = "1";
 choices[35][1] = "2";
 choices[35][2] = "3";
 choices[35][3] = "4";
 answers[35] = choices[35][0];
 units[35] = "39";
 comments[35] = "Id Pregunta: 5553. ";


//  Id pregunta: 5595 AÃ±o de creación de pregunta: 2003-01-01
 questions[36]= "37)  Los sistemas din&aacute;micos de contrataci&oacute;n incluidos en la ley 30/2007...";
 choices[36]= new Array();
 choices[36][0] = "Son solo para contratos de obras";
 choices[36][1] = "Se desarrollar&aacute; el sistema y la adjudicaci&oacute;n por medios telem&aacute;ticos, inform&aacute;ticos y electr&oacute;nicos, exclusivamente";
 choices[36][2] = "La duraci&oacute;n de un sistema de contrataci&oacute;n din&aacute;mico no podr&aacute; exceder, en t&eacute;rminos generales, los 2 a&ntilde;os";
 choices[36][3] = "Se podr&aacute; cargar a las empresas un 0.5% del montante total del contrato, en concepto de participaci&oacute;n";
 answers[36] = choices[36][1];
 units[36] = "41";
 comments[36] = "Id Pregunta: 5595. ";


//  Id pregunta: 5816 AÃ±o de creación de pregunta: 2009-01-01
 questions[37]= "38)  &iquest;Qu&eacute; NO es cierto de la subasta electr&oacute;nica, seg&uacute;n se desarrolla en RD Legislativo 3/2011 de Contratos del Sector P&uacute;blico (art&iacute;culo 148)?";
 choices[37]= new Array();
 choices[37][0] = "Se basar&aacute; en variaciones referidas al precio o a valores de los elementos de la oferta que sean cuantificables y susceptibles de ser expresados en cifras o pocentajes";
 choices[37][1] = "Los &oacute;rganos de contrataci&oacute;n deber&aacute;n indicarlo en el anuncio de licitaci&oacute;n";
 choices[37][2] = "La subasta se iniciar&aacute; el primer d&iacute;a h&aacute;bil siguiente a la finalizaci&oacute;n del plazo de recepci&oacute;n de las ofertas";
 choices[37][3] = "Se deber&aacute; indicar la f&oacute;rmula matem&aacute;tica que se utilizar&aacute; para la reclasificaci&oacute;n autom&aacute;tica de las ofertas";
 answers[37] = choices[37][2];
 units[37] = "41";
 comments[37] = "Id Pregunta: 5816. Entre la fecha de env&iacute;o de las invitaciones y el comienzo de la subasta electr&oacute;nica habr&aacute;n de transcurrir, al menos, dos d&iacute;as h&aacute;biles.";


//  Id pregunta: 5909 AÃ±o de creación de pregunta: 2009-01-01
 questions[38]= "39)  &iquest;Qu&eacute; tipo de miembros NO existen en el Instituto Europeo de Normas de Telecomunicaci&oacute;n (ETSI)?";
 choices[38]= new Array();
 choices[38][0] = "Miembros Plenos";
 choices[38][1] = "Miembros Coordinadores";
 choices[38][2] = "Miembros Asociados";
 choices[38][3] = "Miembros Consejeros";
 answers[38] = choices[38][1];
 units[38] = "42";
 comments[38] = "Id Pregunta: 5909. MAP 2008 A1";


//  Id pregunta: 5979 AÃ±o de creación de pregunta: 2010-01-01
 questions[39]= "40)  El Organismo de Normalizaci&oacute;n:";
 choices[39]= new Array();
 choices[39][0] = "CEN (Comit&eacute; Europeo de Normalizaci&oacute;n) desarrolla normas que deben adoptarse &iacute;ntegramente por los OrganismosNacionales de Normalizaci&oacute;n pertenecientes al CEN como normas nacionales.";
 choices[39][1] = "ISO (International Organization for Standardization) tiene la competencia exclusiva de la normalizaci&oacute;n internacional en elcampo de las Tecnolog&iacute;as de la Informaci&oacute;n.";
 choices[39][2] = "ISO desarrolla normas que, en la etapa previa a su publicaci&oacute;n como est&aacute;ndar internacional, reciben el nombre deISO/PIS (Preview Draft International Standard).";
 choices[39][3] = "CEN desarrolla en el campo de las Tecnolog&iacute;as de la Informaci&oacute;n Acuerdos de Trabajo (CWA) que tienen la categor&iacute;a deNormas Europeas (EN).";
 answers[39] = choices[39][0];
 units[39] = "42";
 comments[39] = "Id Pregunta: 5979. TIC A 2009";


//  Id pregunta: 6054 AÃ±o de creación de pregunta: 2010-01-01
 questions[40]= "41)  El CCITT ha pasado a denominarse:";
 choices[40]= new Array();
 choices[40][0] = "UIT-T o ITU-T.";
 choices[40][1] = "CEPT.";
 choices[40][2] = "IEEE.";
 choices[40][3] = "ETSI.";
 answers[40] = choices[40][0];
 units[40] = "42";
 comments[40] = "Id Pregunta: 6054. TIC A 2009";


//  Id pregunta: 6079 AÃ±o de creación de pregunta: 2010-01-01
 questions[41]= "42)  &iquest;Cu&aacute;l de las siguientes NO es una salida del proceso de Selecci&oacute;n de Vendedores dentro de la Gesti&oacute;n de las Adquisiciones del Proyecto?";
 choices[41]= new Array();
 choices[41][0] = "Contrato.";
 choices[41][1] = "Plan de gesti&oacute;n del contrato.";
 choices[41][2] = "Disponibilidad de recursos.";
 choices[41][3] = "Lista de vendedores calificados.";
 answers[41] = choices[41][3];
 units[41] = "27";
 comments[41] = "Id Pregunta: 6079. ";


//  Id pregunta: 6101 AÃ±o de creación de pregunta: 2010-01-01
 questions[42]= "43)  Por raz&oacute;n de su cuant&iacute;a, &iquest;en qu&eacute; contratos de objeto inform&aacute;tico se precisa autorizaci&oacute;n del Consejo de Ministros para poder celebrar el contrato?";
 choices[42]= new Array();
 choices[42][0] = "Cuando su cuant&iacute;a es igual o superior a 10 millones de euros.";
 choices[42][1] = "Cuando su cuant&iacute;a es igual o superior a 12 millones de euros.";
 choices[42][2] = "Cuando su cuant&iacute;a es igual o superior a 15 millones de euros.";
 choices[42][3] = "No se precisa autorizaci&oacute;n del Consejo de Ministros por motivos de cuant&iacute;a en los contratos de objeto inform&aacute;tico.";
 answers[42] = choices[42][1];
 units[42] = "41";
 comments[42] = "Id Pregunta: 6101. TIC A 2009";


//  Id pregunta: 6151 AÃ±o de creación de pregunta: 2010-01-01
 questions[43]= "44)  Con respecto al control de la calidad, &iquest;cu&aacute;ndo se considera que un resultado es acptable?";
 choices[43]= new Array();
 choices[43][0] = "Si se encuentra dentro de los l&iacute;mites de control.";
 choices[43][1] = "Si se encuentra dentro del rango especificado por la tolerancia.";
 choices[43][2] = "Si se encuentra dentro de los l&iacute;mites de control o dentro del rango especificado por la tolerancia.";
 choices[43][3] = "Si se encuentra dentro de los l&iacute;mites de control y dentro del rango especificado por la tolerancia.";
 answers[43] = choices[43][1];
 units[43] = "28";
 comments[43] = "Id Pregunta: 6151. ";


//  Id pregunta: 6365 AÃ±o de creación de pregunta: 2010-01-01
 questions[44]= "45)  El Esquema Nacional de Seguridad establece que las l&iacute;neas de defensa han de estar constituidas por medidas de distinto tipo, &iquest;Cu&aacute;l de las siguientes no es una de ellos?";
 choices[44]= new Array();
 choices[44][0] = "Organizativa";
 choices[44][1] = "Sem&aacute;ntica";
 choices[44][2] = "L&oacute;gica";
 choices[44][3] = "F&iacute;sica";
 answers[44] = choices[44][1];
 units[44] = "43";
 comments[44] = "Id Pregunta: 6365. Art&iacute;culo 8 ENS";


//  Id pregunta: 6378 AÃ±o de creación de pregunta: 2010-01-01
 questions[45]= "46)  El Esquema Nacional de Interoperabilidad establece que las Administraciones p&uacute;blicas utilizar&aacute;n preferentemente la Red de comunicaciones de las Administraciones p&uacute;blicas espa&ntilde;olas para comunicarse entre s&iacute;. La red que prestar&aacute; este servicio recibe el nombre de:";
 choices[45]= new Array();
 choices[45][0] = "InterAdmon";
 choices[45][1] = "TESTA";
 choices[45][2] = "SARA";
 choices[45][3] = "El Esquema Nacional de Interoperabilidad no establece el uso de una red determinada.";
 answers[45] = choices[45][2];
 units[45] = "43";
 comments[45] = "Id Pregunta: 6378. Art&iacute;culo 13 ENI";


//  Id pregunta: 6408 AÃ±o de creación de pregunta: 2010-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l de los siguientes no ser&aacute; considerada una infracci&oacute;n de los derechos de autor, de acuerdo a la Ley de Propiedad Intelectual?";
 choices[46]= new Array();
 choices[46][0] = "Poner en circulaci&oacute;n una o m&aacute;s copias de un programa de ordenador conociendo o pudiendo presumir su naturaleza ileg&iacute;tima, sin autorizaci&oacute;n del titular de los derechos.";
 choices[46][1] = "Tener con fines comerciales una o m&aacute;s copias de un programa de ordenador, conociendo o pudiendo presumir su naturaleza ileg&iacute;tima, , sin autorizaci&oacute;n del titular de los derechos.";
 choices[46][2] = "Poner en circulaci&oacute;n o tener con fines comerciales cualquier instrumento que tenga, entre otros usos, facilitar la supresi&oacute;n o neutralizaci&oacute;n no autorizadas de cualquier dispositivo t&eacute;cnico utilizado para proteger un programa de ordenador, sin autorizaci&oacute;n del titular de los derechos.";
 choices[46][3] = "Todas las anteriores son consideradas infracciones, seg&uacute;n la Ley de Propiedad Intelectual.";
 answers[46] = choices[46][2];
 units[46] = "36";
 comments[46] = "Id Pregunta: 6408. Art&iacute;culo 102 RDL 1/1996";


//  Id pregunta: 6603 AÃ±o de creación de pregunta: 2010-01-01
 questions[47]= "48)  Indicar cual de las siguientes opciones NO es un contrato de suministro:";
 choices[47]= new Array();
 choices[47][0] = "La compra de un ERP";
 choices[47][1] = "El mantenimiento de las licencias del SGBD";
 choices[47][2] = "El mantenimiento de la aplicaci&oacute;n que usa el SGBD";
 choices[47][3] = "El alquiler del sistema de telecomunicaciones";
 answers[47] = choices[47][2];
 units[47] = "41";
 comments[47] = "Id Pregunta: 6603. ";


//  Id pregunta: 7142 AÃ±o de creación de pregunta: 2010-01-01
 questions[48]= "49)  Las siglas CAAT en relaci&oacute;n con los Sistemas de Informaci&oacute;n significan";
 choices[48]= new Array();
 choices[48][0] = "Computed-Assisted Audit Techniques";
 choices[48][1] = "Campaign Against Automotive Trenes";
 choices[48][2] = "Centro para la Administraci&oacute;n de Alternativas Tecnol&oacute;gicas";
 choices[48][3] = "Computer-Assisted Advanced Tools";
 answers[48] = choices[48][0];
 units[48] = "31";
 comments[48] = "Id Pregunta: 7142. Examen TIC B 2009";


//  Id pregunta: 8248 AÃ±o de creación de pregunta: 2011-01-01
 questions[49]= "50)  Indique la afirmaci&oacute;n FALSA. De acuerdo a la ley 30/2007, el sistema de determinaci&oacute;n del precio de los contratos para el desarrollo de programas inform&aacute;ticos:";
 choices[49]= new Array();
 choices[49][0] = "Puede ser a tanto alzado.";
 choices[49][1] = "Puede resultar de la aplicaci&oacute;n de honorarios por tarifas.";
 choices[49][2] = "Se debe establecer en el Pliego de Prescripciones T&eacute;cnicas.";
 choices[49][3] = "Puede resultar de la combinaci&oacute;n de varias modalidades de c&aacute;lculo.";
 answers[49] = choices[49][2];
 units[49] = "36,37";
 comments[49] = "Id Pregunta: 8248. Examen TIC A1 2010";


//  Id pregunta: 8266 AÃ±o de creación de pregunta: 2011-01-01
 questions[50]= "51)  La tasa de rendimiento contable o rentabilidad media de una inversi&oacute;n es igual a:";
 choices[50]= new Array();
 choices[50][0] = "El cociente entre el beneficio medio anual y la inversi&oacute;n media anual.";
 choices[50][1] = "El cociente entre el flujo de caja medio anual y la inversi&oacute;n media anual.";
 choices[50][2] = "El valor actualizado de la diferencia entre los cobros y los pagos derivados de la inversi&oacute;n.";
 choices[50][3] = "El cociente entre el sumatorio de los flujos de caja y el desembolso inicial.";
 answers[50] = choices[50][0];
 units[50] = "38";
 comments[50] = "Id Pregunta: 8266. Examen TIC A1 2010";


//  Id pregunta: 8400 AÃ±o de creación de pregunta: 2011-01-01
 questions[51]= "52)  Respeto a los c&oacute;mputos de plazos, la ley 11/2007, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, dispone que:";
 choices[51]= new Array();
 choices[51][0] = "Se consideran h&aacute;biles los 365 d&iacute;as del a&ntilde;o, debiendo estar operativos los registros 365x24.";
 choices[51][1] = "Cada sede electr&oacute;nica en la que est&eacute; disponible un registro electr&oacute;nico determinar&aacute;, atendiendo al &aacute;mbito territorial en el que ejerece sus competencias el titular de aquella, los d&iacute;as que se considerar&aacute;n inh&aacute;biles";
 choices[51][2] = "Ser&aacute;n h&aacute;biles todos los d&iacute;as, con excepci&oacute;n de las fiestas de la Constituci&oacute;n, Navidad, y A&ntilde;o nuevo. ";
 choices[51][3] = "Ser&aacute;n h&aacute;biles todos los d&iacute;as, excepto aquellos en que en el Registro se hagan labores de mantenimiento inform&aacute;tico que impidan su servicio ";
 answers[51] = choices[51][1];
 units[51] = "43";
 comments[51] = "Id Pregunta: 8400. Examen TIC A2 2010";


//  Id pregunta: 8422 AÃ±o de creación de pregunta: 2011-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes principios b&aacute;sicos no aparece en el Esquema Nacional de Seguridad, Real Decreto 3/2010 del 8 de enero?";
 choices[52]= new Array();
 choices[52][0] = "Seguridad transversal";
 choices[52][1] = "Gesti&oacute;n de riesgos";
 choices[52][2] = "L&iacute;neas de defensa";
 choices[52][3] = "Funci&oacute;n diferenciada";
 answers[52] = choices[52][0];
 units[52] = "43";
 comments[52] = "Id Pregunta: 8422. NULL";


//  Id pregunta: 8425 AÃ±o de creación de pregunta: 2011-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l de los siguientes principios b&aacute;sicos no aparece en el Esquema Nacional de Interoperabilidad, Real Decreto 4/2010 del 8 de enero?";
 choices[53]= new Array();
 choices[53][0] = "La interoperabilidad como cualidad integral";
 choices[53][1] = "La reutilizaci&oacute;n y la transferencia tecnol&oacute;gica";
 choices[53][2] = "El car&aacute;cter multidimensional de la interoperabilidad";
 choices[53][3] = "El enfoque de soluciones multilaterales";
 answers[53] = choices[53][1];
 units[53] = "43";
 comments[53] = "Id Pregunta: 8425. ";


//  Id pregunta: 8438 AÃ±o de creación de pregunta: 2011-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de los siguientes elementos no es obligatorio incluir en la disposici&oacute;n de creaci&oacute;n de un registro electr&oacute;nico seg&uacute;n el RD 1671/2009?";
 choices[54]= new Array();
 choices[54][0] = "&Oacute;rgano o unidad responsable de la gesti&oacute;n.";
 choices[54][1] = "Fecha y hora oficial y referencia al calendario de d&iacute;as inh&aacute;biles que sea aplicable.";
 choices[54][2] = "Medios de presentaci&oacute;n de documentaci&oacute;n complementaria a una comunicaci&oacute;n, escrito o solicitud previamente presentada en el registro electr&oacute;nico.";
 choices[54][3] = "Buzones de correo electr&oacute;nico corporativo y/o fax asignado a los empleados p&uacute;blicos o a las distintas unidades y &oacute;rganos.";
 answers[54] = choices[54][3];
 units[54] = "43";
 comments[54] = "Id Pregunta: 8438. ";


//  Id pregunta: 8732 AÃ±o de creación de pregunta: 2011-01-01
 questions[55]= "56)  Los ciudadanos podr&aacute;n utilizar el siguiente sistema de firma electr&oacute;nica para relacionarse con las Administraciones P&uacute;blicas:";
 choices[55]= new Array();
 choices[55][0] = "Siempre se exigir&aacute; firma electr&oacute;nica reconocida, como garant&iacute;a jur&iacute;dica.";
 choices[55][1] = "&Uacute;nicamente el ser&aacute; v&aacute;lido el DNI electr&oacute;nico, una vez extendido a toda la poblaci&oacute;n";
 choices[55][2] = "Firma electr&oacute;nica avanzada.";
 choices[55][3] = "Est&aacute; pendiente de desarrollo reglamentario el uso efectivo de la firma electr&oacute;nica en esos casos.";
 answers[55] = choices[55][2];
 units[55] = "43";
 comments[55] = "Id Pregunta: 8732. Examen TIC A2 2010 interna";


//  Id pregunta: 8740 AÃ±o de creación de pregunta: 2011-01-01
 questions[56]= "57)  De acuerdo con la definici&oacute;n establecida en el Real Decreto 1720/2007, la persona f&iacute;sica o jur&iacute;dica, de naturaleza p&uacute;blica o privada, u &oacute;rgano administrativo, que s&oacute;lo o conjuntamente con otros decida sobre la finalidad, contenido y uso del tratamiento, aunque NO lo realizase materialmente es:";
 choices[56]= new Array();
 choices[56][0] = "El encargado del fichero o del tratamiento.";
 choices[56][1] = "El responsable del fichero o del tratamiento.";
 choices[56][2] = "El destinatario o cesionario del fichero o del tratamiento";
 choices[56][3] = "El propietario del fichero o del tratamiento.";
 answers[56] = choices[56][1];
 units[56] = "29";
 comments[56] = "Id Pregunta: 8740. Examen TIC A2 2010 interna";


//  Id pregunta: 8839 AÃ±o de creación de pregunta: 2011-01-01
 questions[57]= "58)  De acuerdo con la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los Servicios P&uacute;blicos, son derechos de los ciudadanos en relaci&oacute;n con la utilizaci&oacute;n de los medios electr&oacute;nicos en la actividad administrativa:";
 choices[57]= new Array();
 choices[57][0] = "Que los servicios p&uacute;blicos se presten por medios electr&oacute;nicos, aunque sea con menor calidad que los medios presenciales ";
 choices[57][1] = "Que las personas jur&iacute;dicas puedan utilizar en todo caso los sistemas de firma electr&oacute;nica del Documento Nacional de Identidad para cualquier tr&aacute;mite electr&oacute;nico con cualquier Administraci&oacute;n P&uacute;blica, pero no as&iacute; las personas f&iacute;sicas.";
 choices[57][2] = "Que las personas f&iacute;sicas puedan utilizar en todo caso los sistemas de firma electr&oacute;nica del Documento Nacional de Identidad para cualquier tr&aacute;mite electr&oacute;nico con cualquier Administraci&oacute;n P&uacute;blica, excluy&eacute;ndose otros sistemas de firma";
 choices[57][3] = "Que puedan elegir, entre aquellos que en cada momento se encuentren disponibles, el canal a trav&eacute;s del cual relacionarse por medios electr&oacute;nicos con las Administraciones P&uacute;blicas";
 answers[57] = choices[57][3];
 units[57] = "43";
 comments[57] = "Id Pregunta: 8839. Examen UC3M 2010";


//  Id pregunta: 8848 AÃ±o de creación de pregunta: 2011-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de las siguientes organizaciones de estandarizaci&oacute;n NO es internacional?";
 choices[58]= new Array();
 choices[58][0] = "IEEE";
 choices[58][1] = "ISO";
 choices[58][2] = "IEC";
 choices[58][3] = "ANSI";
 answers[58] = choices[58][3];
 units[58] = "42";
 comments[58] = "Id Pregunta: 8848. Examen UC3M 2010";


//  Id pregunta: 8937 AÃ±o de creación de pregunta: 2011-01-01
 questions[59]= "60)  La publicaci&oacute;n en las sedes judiciales electr&oacute;nicas de informaciones, servicios y transacciones respetar&aacute;:";
 choices[59]= new Array();
 choices[59][0] = "S&oacute;lo los est&aacute;ndares abiertos";
 choices[59][1] = "Aquellos est&aacute;ndares que sean de uso generalizado por los ciudadanos";
 choices[59][2] = "Los est&aacute;ndares que decida la autoridad competente";
 choices[59][3] = "Todos los anteriores";
 answers[59] = choices[59][1];
 units[59] = "43";
 comments[59] = "Id Pregunta: 8937. ";


//  Id pregunta: 8976 AÃ±o de creación de pregunta: 2011-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de los siguientes no es un derecho reconocido a los ciudadanos por la ley 11/2007?";
 choices[60]= new Array();
 choices[60][0] = "A la igualdad en el acceso electr&oacute;nico a los servicios de las Administraciones P&uacute;blicas.";
 choices[60][1] = "A la utilizaci&oacute;n de otros sistemas de firma electr&oacute;nica admitidos en el &aacute;mbito de las Administraciones P&uacute;blicas";
 choices[60][2] = "A la calidad de los servicios p&uacute;blicos prestados por medios electr&oacute;nicos";
 choices[60][3] = "Todos los anteriores son derechos reconocidos a los ciudadanos por la ley 11/2007";
 answers[60] = choices[60][3];
 units[60] = "43";
 comments[60] = "Id Pregunta: 8976. ";


//  Id pregunta: 9002 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  Seg&uacute;n la LOPD &iquest;cu&aacute;l de los siguientes no es un criterio conforme al cu&aacute;l se grad&uacute;e  la cuant&iacute;a de las sanciones?";
 choices[61]= new Array();
 choices[61][0] = "El grado de intencionalidad.";
 choices[61][1] = "El volumen de negocio o actividad del infractor.";
 choices[61][2] = "La vinculaci&oacute;n de la actividad del infractor con la realizaci&oacute;n de tratamientos de datos de car&aacute;cter personal.";
 choices[61][3] = "La acreditaci&oacute;n de que con anterioridad a los hechos constitutivos de infracci&oacute;n la entidad imputada no ten&iacute;a implantados procedimientos adecuados de actuaci&oacute;n en la recogida y tratamiento de los datos de car&aacute;cter personal.";
 answers[61] = choices[61][3];
 units[61] = "29";
 comments[61] = "Id Pregunta: 9002. ";


//  Id pregunta: 9003 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  Seg&uacute;n la LOPD, el &oacute;rgano sancionador establecer&aacute; la cuant&iacute;a de la sanci&oacute;n aplicando la escala relativa a la clase de infracciones que preceda inmediatamente en gravedad a aquella en que se integra la considerada en el caso de que se trate, en los siguientes supuestos:";
 choices[62]= new Array();
 choices[62][0] = "Cuando pueda apreciarse que la conducta del afectado ha podido inducir a la comisi&oacute;n de la infracci&oacute;n.";
 choices[62][1] = "Cuando se haya producido un proceso de fusi&oacute;n por absorci&oacute;n y la infracci&oacute;n fuese anterior a dicho proceso, no siendo imputable a la entidad absorbente.";
 choices[62][2] = "Cuando el infractor haya reconocido espont&aacute;neamente su culpabilidad.";
 choices[62][3] = "Todos los anteriores";
 answers[62] = choices[62][3];
 units[62] = "29";
 comments[62] = "Id Pregunta: 9003. ";


//  Id pregunta: 9005 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  NO es una infracci&oacute;n leve seg&uacute;n la LOPD:";
 choices[63]= new Array();
 choices[63][0] = "Incumplir el deber de secreto establecido en el art&iacute;culo 10 de esta Ley, salvo que constituya infracci&oacute;n grave.";
 choices[63][1] = "No solicitar la inscripci&oacute;n del fichero de datos de car&aacute;cter personal en el Registro General de Protecci&oacute;n de Datos.";
 choices[63][2] = "La transmisi&oacute;n de los datos a un encargado del tratamiento sin dar cumplimiento a los deberes formales establecidos en el art&iacute;culo 12 de esta Ley.";
 choices[63][3] = "No remitir a la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos las notificaciones previstas en esta Ley o en sus disposiciones de desarrollo.";
 answers[63] = choices[63][0];
 units[63] = "29";
 comments[63] = "Id Pregunta: 9005. ";


//  Id pregunta: 9283 AÃ±o de creación de pregunta: 2013-01-01
 questions[64]= "65)  &iquest;Cu&aacute;l de las siguientes NO es una prerrogativa de la Administraci&oacute;n seg&uacute;n el Texto Refundido de la Ley de Contratos del Sector P&uacute;blico?";
 choices[64]= new Array();
 choices[64][0] = "Disminuir la cuant&iacute;a econ&oacute;mica del contrato por razones de d&eacute;ficit excesivo.";
 choices[64][1] = "Acordar la resoluci&oacute;n del contrato y determinar los efectos de &eacute;sta. ";
 choices[64][2] = "Modificar los contratos por razones de inter&eacute;s p&uacute;blico. ";
 choices[64][3] = "Interpretar los contratos.";
 answers[64] = choices[64][0];
 units[64] = "41";
 comments[64] = "Id Pregunta: 9283. Art. 210 RD Legislativo 3/2011";


//  Id pregunta: 9289 AÃ±o de creación de pregunta: 2013-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l es la norma de creaci&oacute;n de AENOR?";
 choices[65]= new Array();
 choices[65][0] = "El RD 2200/1995.";
 choices[65][1] = "El RD 757/1986.";
 choices[65][2] = "La Ley 5/1985.";
 choices[65][3] = "Ninguna, pues no es un organismo p&uacute;blico. ";
 answers[65] = choices[65][3];
 units[65] = "42";
 comments[65] = "Id Pregunta: 9289. ";


//  Id pregunta: 9301 AÃ±o de creación de pregunta: 2013-01-01
 questions[66]= "67)  Entre las tareas del auditor no se incluye:";
 choices[66]= new Array();
 choices[66][0] = "Comprender y evaluar la metodolog&iacute;a seguida en el proceso de desarrollo";
 choices[66][1] = "Identificar las fases de la metodolog&iacute;a de desarrollo";
 choices[66][2] = "Revisar el cumplimiento de est&aacute;ndares y normas de control interno";
 choices[66][3] = "Desarrollar e implantar los cambios necesarios para el cumplimiento con est&aacute;ndares y normas";
 answers[66] = choices[66][3];
 units[66] = "33";
 comments[66] = "Id Pregunta: 9301. ";


//  Id pregunta: 9542 AÃ±o de creación de pregunta: 2013-01-01
 questions[67]= "68)  Las comunicaciones comerciales no solicitadas realizadas a trav&eacute;s de correo electr&oacute;nico o medios de comunicaci&oacute;n electr&oacute;nica equivalentes:";
 choices[67]= new Array();
 choices[67][0] = "Deben incluir al comienzo del mensaje la palabra &laquo;publicidad&raquo;.";
 choices[67][1] = "Deben indicar la persona f&iacute;sica o jur&iacute;dica en nombre de la cual se realizan.";
 choices[67][2] = "Deben incluir claramente las condiciones comerciales o promocionales.";
 choices[67][3] = "Est&aacute;n prohibidas.";
 answers[67] = choices[67][3];
 units[67] = "30";
 comments[67] = "Id Pregunta: 9542. Examen TIC A1 2011 (Ley 34/2002, art&iacute;culo 21)";


//  Id pregunta: 9578 AÃ±o de creación de pregunta: 2013-01-01
 questions[68]= "69)  El Comit&eacute; de Estrategia TIC:";
 choices[68]= new Array();
 choices[68][0] = "Es el &oacute;rgano existente en los departamentos ministeriales, en el &aacute;mbito de la Administraci&oacute;n General del Estado, competente en materia de administraci&oacute;n electr&oacute;nica.";
 choices[68][1] = "Es el &oacute;rgano t&eacute;cnico adscrito a la Comisi&oacute;n Europea que canaliza la colaboraci&oacute;n entre la Administraci&oacute;n General del Estado y el resto de pa&iacute;ses de la Uni&oacute;n Europea en materia de administraci&oacute;n electr&oacute;nica.";
 choices[68][2] = "Es el &oacute;rgano colegiado encargado de la definici&oacute;n y supervisi&oacute;n de la aplicaci&oacute;n de la Estrategia TIC de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos.";
 choices[68][3] = "Es el &oacute;rgano t&eacute;cnico adscrito a la Comisi&oacute;n Europea encargado de unificar los criterios en materia de tratamiento y protecci&oacute;n de datos de car&aacute;cter personal en el &aacute;mbito de la Uni&oacute;n Europea";
 answers[68] = choices[68][2];
 units[68] = "43";
 comments[68] = "Id Pregunta: 9578. Examen TIC A1 2011, adaptado a RD 806/2014.";


//  Id pregunta: 9586 AÃ±o de creación de pregunta: 2013-01-01
 questions[69]= "70)  Seg&uacute;n la norma t&eacute;cnica de interoperabilidad de pol&iacute;tica de firma electr&oacute;nica y de certificados de la administraci&oacute;n del Esquema Nacional de Interoperabilidad:";
 choices[69]= new Array();
 choices[69][0] = "Los formatos para la firma electr&oacute;nica de contenidos ser&aacute;n XAdES, CAdES y PAdES.";
 choices[69][1] = "El perfil m&iacute;nimo de formato que se utilizar&aacute; para la generaci&oacute;n de firmas de contenido en el marco de una pol&iacute;tica ser&aacute; &ndash;A.";
 choices[69][2] = "Los documentos electr&oacute;nicos a los que se aplique firma basada en certificados de cara a su intercambio no se ajustar&aacute;n a las especificaciones de formato y estructura establecidas en la NTI de Documento electr&oacute;nico.";
 choices[69][3] = "El perfil m&iacute;nimo de formato que se utilizar&aacute; para la generaci&oacute;n de firmas de contenido en el marco de una pol&iacute;tica ser&aacute; &ndash;C.";
 answers[69] = choices[69][0];
 units[69] = "43";
 comments[69] = "Id Pregunta: 9586. Examen TIC A1 2011";


//  Id pregunta: 9808 AÃ±o de creación de pregunta: 2014-01-01
 questions[70]= "71)  Se&ntilde;alar el nombre de la aplicaci&oacute;n de generaci&oacute;n de copia aut&eacute;ntica en papel de documentos con firma electr&oacute;nica y de justificantes de firma electr&oacute;nica, que el Ministerio de Hacienda y AAPP ofrece en modelo federado:";
 choices[70]= new Array();
 choices[70][0] = "STORK";
 choices[70][1] = "eDocument";
 choices[70][2] = "eSign";
 choices[70][3] = "eVisor";
 answers[70] = choices[70][3];
 units[70] = "44";
 comments[70] = "Id Pregunta: 9808. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9893 AÃ±o de creación de pregunta: 2010-01-01
 questions[71]= "72)  En el entorno de las Tecnolog&iacute;as de la Informaci&oacute;n, la Comisi&oacute;n Soto sirvi&oacute; para";
 choices[71]= new Array();
 choices[71][0] = "impulsar la creaci&oacute;n del Consejo Superior de Inform&aacute;tica";
 choices[71][1] = "impulsar el modelo de crecimiento aut&oacute;nomo de cada departamento ministerial en materia de Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[71][2] = "Revisar, en base a la Ley 11/2007, los modelos de organizaci&oacute;n de las Tecnolog&iacute;as de la Informaci&oacute;n creados anteriormente.";
 choices[71][3] = "impulsar el desarrollo de la Sociedad de la Informaci&oacute;n.";
 answers[71] = choices[71][3];
 units[71] = "43";
 comments[71] = "Id Pregunta: 9893. TIC A1, Examen 2013";


//  Id pregunta: 9939 AÃ±o de creación de pregunta: 2014-01-01
 questions[72]= "73)  De acuerdo con el programa IDABC, entre los principios que define el Marco Europeo de Interoperabilidad NO se encuentra:";
 choices[72]= new Array();
 choices[72][0] = "el multiling&uuml;ismo.";
 choices[72][1] = "la accesibilidad.";
 choices[72][2] = "el procedimiento compartido.";
 choices[72][3] = "la subsidiaridad.";
 answers[72] = choices[72][2];
 units[72] = "40";
 comments[72] = "Id Pregunta: 9939. TIC A1, Examen 2013";


//  Id pregunta: 10153 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  Cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[73]= new Array();
 choices[73][0] = "Los funcionarios habilitados podr&aacute;n recibir notificaciones postales";
 choices[73][1] = "Los funcionarios habilitados podr&aacute;n recibir notificaciones por comparecencia electr&oacute;nica en la sede";
 choices[73][2] = "Los funcionarios habilitados podr&aacute;n recibir notificaciones en la direcci&oacute;n electr&oacute;nica habilitada del ciudadano";
 choices[73][3] = "Los funcionarios habilitados no podr&aacute;n recibir ning&uacute;n tipo de notificaciones que requieran la identificaci&oacute;n y autenticaci&oacute;n del ciudadano";
 answers[73] = choices[73][1];
 units[73] = "43";
 comments[73] = "Id Pregunta: 10153. ";


//  Id pregunta: 10260 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  Si se deniega al interesado el ejercicio de su derecho de cancelaci&oacute;n de datos de car&aacute;cter personal, &eacute;ste puede:";
 choices[74]= new Array();
 choices[74][0] = "Ponerlo en conocimiento de la Agencia de Protecci&oacute;n de Datos y, si no est&aacute; de acuerdo con su resoluci&oacute;n, presentar recurso de alzada";
 choices[74][1] = "Ponerlo en conocimiento de la Agencia de Protecci&oacute;n de Datos y, si no est&aacute; de acuerdo con su resoluci&oacute;n, presentar recurso contencioso-administrativo";
 choices[74][2] = "Ponerlo en conocimiento de la Agencia de Protecci&oacute;n de Datos cuyos actos no son recurribles ni en v&iacute;a administrativa ni judicial";
 choices[74][3] = "Todas son incorrectas";
 answers[74] = choices[74][1];
 units[74] = "29";
 comments[74] = "Id Pregunta: 10260. Art&iacute;culo 18.2 y 18.4 de la Ley 15/1999";


//  Id pregunta: 10271 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  La Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos";
 choices[75]= new Array();
 choices[75][0] = "Est&aacute; sometida a control por parte de la IGAE y del Tribunal de Cuentas";
 choices[75][1] = "Est&aacute; sujeta a la LOFAGE en todos sus preceptos";
 choices[75][2] = "Frente a sus resoluciones puede presentarse recurso de alzada";
 choices[75][3] = "Sus competencias son exclusivas, no pudiendo crearse &oacute;rganos similares en las Comunidades Aut&oacute;nomas";
 answers[75] = choices[75][0];
 units[75] = "29";
 comments[75] = "Id Pregunta: 10271. Art&iacute;culos 2 y 33 del RD 428/1993";


//  Id pregunta: 10370 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  Al margen de consideraciones ajenas al departamento de TI (pol&iacute;ticas, organizativas, presupuestarias, etc.), la principal causa de fracaso de los proyectos de desarrollo de software es debido a:";
 choices[76]= new Array();
 choices[76][0] = "La mala gesti&oacute;n de los requisitos en la determinaci&oacute;n del alcance en la fase inicial del proyecto y en la gesti&oacute;n de los cambios del alcance una vez est&aacute; el proyecto en ejecuci&oacute;n";
 choices[76][1] = "La falta de buenos desarrolladores en las tecnolog&iacute;as modernas";
 choices[76][2] = "Es dif&iacute;cil realizar una estimaci&oacute;n del esfuerzo del proyecto porque las m&eacute;tricas estaban enfocadas a l&iacute;neas de c&oacute;digo en lenguajes estructurados pero en la actualidad es imposible realizar estimaciones an&aacute;logas con lenguajes modernos (no tiene sentido medir l&iacute;neas de c&oacute;digo en Java)";
 choices[76][3] = "Se abusa de la subcontrataci&oacute;n del software y se realiza mala gesti&oacute;n de proyectos por dicha causa.";
 answers[76] = choices[76][0];
 units[76] = "28";
 comments[76] = "Id Pregunta: 10370. ";


//  Id pregunta: 10572 AÃ±o de creación de pregunta: 2015-01-01
 questions[77]= "78)  El servicio de verificaci&oacute;n y consulta de datos no tiene por objetivo:";
 choices[77]= new Array();
 choices[77][0] = "Dar respuesta al art&iacute;culo 6 de la Ley 11/2007, por el que se reconoce el derecho a no aportar los datos y documentos que ya obren en poder de la Administraci&oacute;n.";
 choices[77][1] = "Simplificar la tramitaci&oacute;n de los procedimientos administrativos.";
 choices[77][2] = "Facilitar al ciudadano la aportaci&oacute;n de los documentos en papel que acrediten su identidad en los procedimientos administrativos.";
 choices[77][3] = "Dar cumplimiento a los derechos recogidos en la Ley 30/1992, de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y Procedimiento Administrativo Com&uacute;n.";
 answers[77] = choices[77][2];
 units[77] = "44";
 comments[77] = "Id Pregunta: 10572. ";


//  Id pregunta: 10590 AÃ±o de creación de pregunta: 2015-01-01
 questions[78]= "79)  La Decisi&oacute;n 922/2009/CE del Parlamento Europeo y del Consejo:";
 choices[78]= new Array();
 choices[78][0] = "Tiene como prioridad un crecimiento inteligente.";
 choices[78][1] = "Es la base legal del programa ISA.";
 choices[78][2] = "Desarrolla el Esquema Europeo de Seguridad.";
 choices[78][3] = "";
 answers[78] = choices[78][1];
 units[78] = "30";
 comments[78] = "Id Pregunta: 10590. ";


//  Id pregunta: 10595 AÃ±o de creación de pregunta: 2015-01-01
 questions[79]= "80)  La revisi&oacute;n de la solvencia t&eacute;cnica del empresario para la conservaci&oacute;n de la clasificaci&oacute;n debe realizarse:";
 choices[79]= new Array();
 choices[79][0] = "Anualmente";
 choices[79][1] = "Cada tres a&ntilde;os";
 choices[79][2] = "No es necesario revisarla mientras se mantengan las condiciones y circunstancias en que se bas&oacute; la concesi&oacute;n de la clasificaci&oacute;n.";
 choices[79][3] = "S&oacute;lo se revisa a petici&oacute;n de los interesados.";
 answers[79] = choices[79][0];
 units[79] = "41";
 comments[79] = "Id Pregunta: 10595. ";


//  Id pregunta: 10693 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  La Ley 39/2015 es de aplicaci&oacute;n obligatoria:";
 choices[80]= new Array();
 choices[80][0] = "Para la Administraci&oacute;n General del Estado.";
 choices[80][1] = "Para las Comunidades Aut&oacute;nomas y Administraci&oacute;n Local.";
 choices[80][2] = "Para el Sector P&uacute;blico Institucional.";
 choices[80][3] = "Todas las anteriores.";
 answers[80] = choices[80][3];
 units[80] = "30";
 comments[80] = "Id Pregunta: 10693. ";


//  Id pregunta: 10726 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  &iquest;Qu&eacute; versi&oacute;n del protocolo SCSP (Sustituci&oacute;n de Certificados en Soporte Papel) se considera como utilizaci&oacute;n de forma general en la NTI de Protocolos de Intermediaci&oacute;n?";
 choices[81]= new Array();
 choices[81][0] = "1.0";
 choices[81][1] = "2.0";
 choices[81][2] = "3.0";
 choices[81][3] = "4.0";
 answers[81] = choices[81][2];
 units[81] = "43";
 comments[81] = "Id Pregunta: 10726. ";


//  Id pregunta: 10743 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  &iquest;Qui&eacute;n Preside el Pleno de la Comisi&oacute;n de Estrategia TIC?";
 choices[82]= new Array();
 choices[82][0] = "El Presidente del Gobierno.";
 choices[82][1] = "El Ministro de Hacienda y Administraciones P&uacute;blicas.";
 choices[82][2] = "El Director de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones.";
 choices[82][3] = "Aquel componente de la misma elegido en mayor&iacute;a por el pleno con un mandato de 2 a&ntilde;os.";
 answers[82] = choices[82][1];
 units[82] = "24";
 comments[82] = "Id Pregunta: 10743. ";


//  Id pregunta: 10754 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  &iquest;Qui&eacute;n dirige a los tres componentes de la Estructura de Ciberseguridad Nacional (el Consejo de Seguridad Nacional; el Comit&eacute; Especializado de Ciberseguridad; el Comit&eacute; Especializado de Situaci&oacute;n?";
 choices[83]= new Array();
 choices[83][0] = "El Presidente del Gobierno.";
 choices[83][1] = "El Ministro de Hacienda y Administraciones P&uacute;blicas.";
 choices[83][2] = "El Ministro de Defensa.";
 choices[83][3] = "El CIO de la AGE.";
 answers[83] = choices[83][0];
 units[83] = "43";
 comments[83] = "Id Pregunta: 10754. ";


//  Id pregunta: 10755 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  &iquest;Cu&aacute;l de los siguientes no se incluye en la Estructura Org&aacute;nica definida en la Estrategia de Ciberseguridad Nacional?";
 choices[84]= new Array();
 choices[84][0] = "El Consejo de Seguridad Nacional.";
 choices[84][1] = "El Comit&eacute; Especializado de Ciberseguridad.";
 choices[84][2] = "El Comit&eacute; Especializado de Situaci&oacute;n.";
 choices[84][3] = "El Consejo Ejecutivo de Ciberseguridad.";
 answers[84] = choices[84][3];
 units[84] = "43";
 comments[84] = "Id Pregunta: 10755. ";


//  Id pregunta: 10770 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  &iquest;Cu&aacute;l de los siguientes no es un objetivo estrat&eacute;gico del Plan de Transformaci&oacute;n Digital?";
 choices[85]= new Array();
 choices[85][0] = "Incremento de la productividad y eficacia en el funcionamiento interno de la Administraci&oacute;n";
 choices[85][1] = "El canal digital ha de ser el medio preferido por ciudadanos y empresas para relacionarse con la Administraci&oacute;n";
 choices[85][2] = "Mayor eficiencia en la prestaci&oacute;n de los servicios TIC en el seno de la Administraci&oacute;n";
 choices[85][3] = "Estrategia corporativa de interoperabilidad";
 answers[85] = choices[85][3];
 units[85] = "24";
 comments[85] = "Id Pregunta: 10770. ";


//  Id pregunta: 10778 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  Seg&uacute;n se establece en la Ley 15/1999, en su art&iacute;culo 31 acerca del censo promocional, indique cu&aacute;l es el plazo de vigencia del uso de cada lista del censo promocional tal que concluido dicho plazo la lista perder&aacute; su car&aacute;cter de fuente de acceso p&uacute;blico:";
 choices[86]= new Array();
 choices[86][0] = "6 meses.";
 choices[86][1] = "1 a&ntilde;o.";
 choices[86][2] = "2 a&ntilde;os.";
 choices[86][3] = "5 a&ntilde;os.";
 answers[86] = choices[86][1];
 units[86] = "29";
 comments[86] = "Id Pregunta: 10778. Examen GSI 2014";


//  Id pregunta: 10783 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  Seg&uacute;n el art&iacute;culo 40 de la Ley 11/2007, de acceso electr&oacute;nico de los ciudadanos a los Servicios P&uacute;blicos, sobre el Comit&eacute; Sectorial de administraci&oacute;n electr&oacute;nica, &iquest;cu&aacute;l de las siguientes opciones es una funci&oacute;n de dicho &oacute;rgano?";
 choices[87]= new Array();
 choices[87][0] = "Desarrollar la normativa en materia de administraci&oacute;n electr&oacute;nica a nivel nacional.";
 choices[87][1] = "Asegurar la compatibilidad e interoperabilidad de los sistemas y aplicaciones empleados por las Administraciones P&uacute;blicas.";
 choices[87][2] = "Elaborar un informe anual sobre el nivel de avance de la administraci&oacute;n electr&oacute;nica a nivel nacional, auton&oacute;mico y municipal.";
 choices[87][3] = "Estimular el crecimiento en el empleo de la administraci&oacute;n electr&oacute;nica por parte de ciudadanos y empresas.";
 answers[87] = choices[87][1];
 units[87] = "43";
 comments[87] = "Id Pregunta: 10783. Examen GSI 2014";


//  Id pregunta: 10996 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  En el caso de un fichero de datos relativo a la comisi&oacute;n de infracciones administrativas o penales, indique los niveles de seguridad que deber&aacute;n implantarse:";
 choices[88]= new Array();
 choices[88][0] = "S&oacute;lo las medidas de seguridad de nivel b&aacute;sico.";
 choices[88][1] = "Adem&aacute;s de las medidas de seguridad de nivel b&aacute;sico, las medidas de nivel medio y alto.";
 choices[88][2] = "Adem&aacute;s de las medidas de seguridad de nivel b&aacute;sico, las medidas de nivel medio.";
 choices[88][3] = "Adem&aacute;s de las medidas de seguridad de nivel b&aacute;sico, las medidas de nivel alto.";
 answers[88] = choices[88][2];
 units[88] = "29";
 comments[88] = "Id Pregunta: 10996. TIC A1 AGE 2014";


//  Id pregunta: 11002 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  De las siguientes opciones, se&ntilde;ale cu&aacute;l es la que incluye extensiones que son todas admitidas de acuerdo con lo establecido en la Norma T&eacute;cnica de Interoperabilidad de Cat&aacute;logo de est&aacute;ndares:";
 choices[89]= new Array();
 choices[89][0] = ".xls, .xlsx, .doc, .docx";
 choices[89][1] = ".rar, .zip, .gz";
 choices[89][2] = ".jpg, .gif, .png, .tiff";
 choices[89][3] = ".mp3, .ogg, .mp4";
 answers[89] = choices[89][3];
 units[89] = "43";
 comments[89] = "Id Pregunta: 11002. TIC A1 AGE 2014";


//  Id pregunta: 11015 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l de los siguientes no est&aacute; incluido dentro de la primera Declaraci&oacute;n de Servicios Compartidos realizada por la Comisi&oacute;n de Estrategia TIC en Septiembre de 2015?";
 choices[90]= new Array();
 choices[90][0] = "Servicio unificado de radiocomunicaciones";
 choices[90][1] = "Servicio de alojamiento de infraestructuras TIC";
 choices[90][2] = "Servicio de gesti&oacute;n de notificaciones";
 choices[90][3] = "Servicio de gesti&oacute;n de n&oacute;mina";
 answers[90] = choices[90][0];
 units[90] = "30";
 comments[90] = "Id Pregunta: 11015. El servicio incluido es el unificado de telecomunicaciones";


//  Id pregunta: 11017 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Cu&aacute;ntos anexos incluye el RD 3/2010 (ENS)?";
 choices[91]= new Array();
 choices[91][0] = "Ninguno";
 choices[91][1] = "1";
 choices[91][2] = "2";
 choices[91][3] = "5";
 answers[91] = choices[91][3];
 units[91] = "30";
 comments[91] = "Id Pregunta: 11017. ";


//  Id pregunta: 11021 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de las siguientes afirmaciones acerca de las WCAG 2.0 NO es cierta?";
 choices[92]= new Array();
 choices[92][0] = "Est&aacute;n organizadas en 4 principios";
 choices[92][1] = "Dentro de cada principio se encuentran las pautas de accesibilidad";
 choices[92][2] = "Cada pauta contiene una serie de criterios de conformidad";
 choices[92][3] = "Se definen niveles de prioridad para los diferentes criterios";
 answers[92] = choices[92][3];
 units[92] = "39";
 comments[92] = "Id Pregunta: 11021. En las WCAG 2.0 se habla de niveles de conformidad y no de niveles de prioridad";


//  Id pregunta: 11206 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Seg&uacute;n la Agenda digital Europea, &iquest;cu&aacute;l es el objetivo de las redes ultrarr&aacute;pidas debe alcanzarse en el conjunto de la uni&oacute;n europea en 2020?";
 choices[93]= new Array();
 choices[93][0] = "0.5";
 choices[93][1] = "0.8";
 choices[93][2] = "0.9";
 choices[93][3] = "1";
 answers[93] = choices[93][0];
 units[93] = "30";
 comments[93] = "Id Pregunta: 11206. ";


//  Id pregunta: 11210 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de los siguientes planes se refiere al objetivo de Econom&iacute;a Digital e Internacionalizaci&oacute;n de la Agenda Digital Espa&ntilde;ola?";
 choices[94]= new Array();
 choices[94][0] = "Plan TIC en PYMEs y Comercio Electr&oacute;nico";
 choices[94][1] = "Plan de Impulso de Econom&iacute;a Digital y Contenidos Digitales";
 choices[94][2] = "Plan de Internacionalizaci&oacute;n de Empresas Tecnol&oacute;gicas";
 choices[94][3] = "Todos los anteriores";
 answers[94] = choices[94][3];
 units[94] = "30";
 comments[94] = "Id Pregunta: 11210. ";


//  Id pregunta: 11240 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Las pr&oacute;rrogas de los contratos.";
 choices[95]= new Array();
 choices[95][0] = "Se puede incluir en todos los contratos";
 choices[95][1] = "Todos los contratos son prorrogables una vez finalizados.";
 choices[95][2] = "Su duraci&oacute;n no puede ser superior al periodo de licitaci&oacute;n.";
 choices[95][3] = "La pr&oacute;rroga se acordar&aacute; por el &oacute;rgano de contrataci&oacute;n y ser&aacute; confirmada posteriormente por el licitador.";
 answers[95] = choices[95][2];
 units[95] = "41";
 comments[95] = "Id Pregunta: 11240. ";


//  Id pregunta: 11329 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  En relaci&oacute;n con la plataforma Cl@ve, indique la opci&oacute;n falsa";
 choices[96]= new Array();
 choices[96][0] = "Se desarrolla al hilo de una medida del informe CORA";
 choices[96][1] = "Est&aacute; bajo la titularidad de la DTIC";
 choices[96][2] = "La orden que lo aprueba (MINHAP/1838/2014) se publica seg&uacute;n lo establecido en el art&iacute;culo 11 del RD 1671/2009";
 choices[96][3] = "Plataforma com&uacute;n del sector p&uacute;blico estatal para identificar, autenticar y firmar electr&oacute;nicamente, mediante el uso de claves concertadas";
 answers[96] = choices[96][2];
 units[96] = "43";
 comments[96] = "Id Pregunta: 11329. ";


//  Id pregunta: 11589 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Seg&uacute;n el Real Decreto Legislativo 3/2011, para una tramitaci&oacute;n de emergencia el plazo de inicio de la ejecuci&oacute;n no podr&aacute; ser superior a:";
 choices[97]= new Array();
 choices[97][0] = "10 d&iacute;as h&aacute;biles";
 choices[97][1] = "15 d&iacute;as h&aacute;biles";
 choices[97][2] = "15 d&iacute;as naturales";
 choices[97][3] = "1 mes";
 answers[97] = choices[97][3];
 units[97] = "41";
 comments[97] = "Id Pregunta: 11589. ";


//  Id pregunta: 11747 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Cu&aacute;l de los siguientes responsables no forma parte de la Comisi&oacute;n de Transparencia y Buen Gobierno?:";
 choices[98]= new Array();
 choices[98][0] = "representante del Tribunal de Cuentas";
 choices[98][1] = "representante de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos";
 choices[98][2] = "representante de la Agencia Estatal de la Administraci&oacute;n del Estado";
 choices[98][3] = "representante de la Autoridad Independiente de Responsabilidad Fiscal";
 answers[98] = choices[98][2];
 units[98] = "41";
 comments[98] = "Id Pregunta: 11747. ";


//  Id pregunta: 11786 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Seg&uacute;n la ley 19/2013 de transparencia:";
 choices[99]= new Array();
 choices[99][0] = "El Presidente del Consejo de Transparencia y Buen Gobierno ser&aacute; nombrado por un per&iacute;odo renovable de cinco a&ntilde;os mediante Real Decreto.";
 choices[99][1] = "El Consejo de Transparencia y Buen Gobierno deber&aacute; elevar anualmente al Congreso de los Diputados una memoria sobre el desarrollo de sus actividades.";
 choices[99][2] = "La condici&oacute;n de miembro de la Comisi&oacute;n del Consejo de Transparencia y Buen Gobierno no exigir&aacute; dedicaci&oacute;n exclusiva ni dar&aacute; derecho a remuneraci&oacute;n.";
 choices[99][3] = "El incumplimiento reiterado de la obligaci&oacute;n de resolver en plazo tendr&aacute; la consideraci&oacute;n de infracci&oacute;n leve a los efectos de la aplicaci&oacute;n a sus responsables del r&eacute;gimen disciplinario previsto en la correspondiente normativa reguladora.";
 answers[99] = choices[99][2];
 units[99] = "19";
 comments[99] = "Id Pregunta: 11786. ";


