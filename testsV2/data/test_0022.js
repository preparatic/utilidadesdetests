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

//  Id pregunta: 118 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;C&oacute;mo se concretan anualmente los objetivos de la Estrategia Espa&ntilde;ola de Activaci&oacute;n para el Empleo?";
 choices[0]= new Array();
 choices[0][0] = "Mediante &Oacute;rdenes Ministeriales del Ministerio de Empleo y Seguridad Social";
 choices[0][1] = "Mediante Reales Decretos del Consejo de Ministros";
 choices[0][2] = "Mediante los Planes Anuales de Pol&iacute;tica de Empleo";
 choices[0][3] = "Mediante dictamen del Consejo General del Sistema Nacional de Empleo";
 answers[0] = choices[0][2];
 units[0] = "15";
 comments[0] = "Id Pregunta: 118. ";


//  Id pregunta: 774 Año de creación de pregunta: 2016
 questions[1]= "2)  Las Administraciones P&uacute;blicas act&uacute;an para el cumplimiento de sus fines con:";
 choices[1]= new Array();
 choices[1][0] = "personalidad jur&iacute;dica propia";
 choices[1][1] = "personalidad jur&iacute;dica &uacute;nica";
 choices[1][2] = "personalidad jur&iacute;dica plena";
 choices[1][3] = "personalidad jur&iacute;dica f&iacute;sica";
 answers[1] = choices[1][1];
 units[1] = "4, 7, 8, 9";
 comments[1] = "Id Pregunta: 774. Ley 40/2015";


//  Id pregunta: 6 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Cu&aacute;l de los siguientes procesos de M&Eacute;TRICA Versi&oacute;n 3 no est&aacute; dentro del &aacute;mbito de la norma ISO 12207 de procesos de ciclo de vida del software?";
 choices[2]= new Array();
 choices[2][0] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[2][1] = "Desarrollo de Sistemas de Informaci&oacute;n";
 choices[2][2] = "Construcci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[2][3] = "Ninguno de los anteriores, ya que los tres est&aacute;n cubiertos por la norma ISO 12207";
 answers[2] = choices[2][0];
 units[2] = "91";
 comments[2] = "Id Pregunta: 6. AGE A1 2015";


//  Id pregunta: 324 Año de creación de pregunta: 2016
 questions[3]= "4)  El Presidente del Tribunal de Justicia de la Uni&oacute;n Europea es nombrado para un per&iacute;odo de:";
 choices[3]= new Array();
 choices[3][0] = "Tres a&ntilde;os.";
 choices[3][1] = "Cuatro a&ntilde;os.";
 choices[3][2] = "Cinco a&ntilde;os.";
 choices[3][3] = "Seis a&ntilde;os.";
 answers[3] = choices[3][0];
 units[3] = "5";
 comments[3] = "Id Pregunta: 324. UNION EUROPEA";


//  Id pregunta: 597 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Qui&eacute;n elabora y ejecuta los Planes de Acci&oacute;n Sectoriales?";
 choices[4]= new Array();
 choices[4][0] = "La CETIC";
 choices[4][1] = "Los Ministerios";
 choices[4][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[4][3] = "Ninguno de los anteriores";
 answers[4] = choices[4][1];
 units[4] = "19";
 comments[4] = "Id Pregunta: 597. Estrategia TIC";


//  Id pregunta: 504 Año de creación de pregunta: 2016
 questions[5]= "6)  La Ley Org&aacute;nica 2/2012 destaca una serie de principios generales entre los que no se encuentra:";
 choices[5]= new Array();
 choices[5][0] = "Principio de transparencia.";
 choices[5][1] = "Principio de cooperaci&oacute;n.";
 choices[5][2] = "Principio de eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos.";
 choices[5][3] = "Principio de lealtad institucional.";
 answers[5] = choices[5][1];
 units[5] = "10";
 comments[5] = "Id Pregunta: 504. PRESUPUESTOS GENERALES";


//  Id pregunta: 545 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Qu&eacute; est&aacute;ndar ISO define un marco de trabajo para la gobernanza TIC?";
 choices[6]= new Array();
 choices[6][0] = "ISO/IEC 31000";
 choices[6][1] = "ISO/IEC 14000";
 choices[6][2] = "ISO/IEC 38500";
 choices[6][3] = "ISO/IEC 18000";
 answers[6] = choices[6][2];
 units[6] = "26";
 comments[6] = "Id Pregunta: 545. Gobernanza TIC";


//  Id pregunta: 698 Año de creación de pregunta: 2016
 questions[7]= "8)  Se&ntilde;ale el que corresponde a un principio de integraci&oacute;n continua:";
 choices[7]= new Array();
 choices[7][0] = "Migraci&oacute;n manual y controlada a cada entorno de desarrollo";
 choices[7][1] = "Mantener un repositorio de c&oacute;digo.";
 choices[7][2] = "Reutilizaci&oacute;n de interfaces de usuario.";
 choices[7][3] = "Todos corresponden a principios de integraci&oacute;n continua.";
 answers[7] = choices[7][1];
 units[7] = "92";
 comments[7] = "Id Pregunta: 698. INTEGRACION CONTINUA";


//  Id pregunta: 624 Año de creación de pregunta: 2016
 questions[8]= "9)  Qu&eacute; nombre reciben las unidades de almacenamieto de las que est&aacute; compuesta un documento XML?";
 choices[8]= new Array();
 choices[8][0] = "Entradas (entities).";
 choices[8][1] = "Atributos (attribs).";
 choices[8][2] = "M&oacute;dulos (modules).";
 choices[8][3] = "Objetos (objects).";
 answers[8] = choices[8][0];
 units[8] = "74";
 comments[8] = "Id Pregunta: 624. Junta de Extremadura A1 2015";


//  Id pregunta: 620 Año de creación de pregunta: 2016
 questions[9]= "10)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[9]= new Array();
 choices[9][0] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de tareas que se comportan de acuerdo a los requisitos del sistema.";
 choices[9][1] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de procesos externos que se comportan de acuerdo a los requisitos del sistema.";
 choices[9][2] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de objetos sem&aacute;nticos que interaccionan y se comportan de acuerdo a los requisitos del sistema.";
 choices[9][3] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela la soluci&oacute;n del problema identificando y especificando un conjunto de usuarios que son los que necesitan los requisitos del sistema.";
 answers[9] = choices[9][2];
 units[9] = "85";
 comments[9] = "Id Pregunta: 620. Junta de Extremadura A1 2015";


//  Id pregunta: 450 Año de creación de pregunta: 2016
 questions[10]= "11)  La partida presupuestaria es equivalente a...";
 choices[10]= new Array();
 choices[10][0] = "El sujeto que realiza el gasto";
 choices[10][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[10][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[10][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[10] = choices[10][3];
 units[10] = "10";
 comments[10] = "Id Pregunta: 450. PRESUPUESTOS GENERALES";


//  Id pregunta: 773 Año de creación de pregunta: 2016
 questions[11]= "12)  La actuaci&oacute;n de la Administraci&oacute;n P&uacute;blica respectiva se desarrolla para alcanzar los objetivos que establecen las leyes y el resto del ordenamiento jur&iacute;dico, bajo la direcci&oacute;n de (se&ntilde;ala la incorrecta):";
 choices[11]= new Array();
 choices[11][0] = "el Gobierno de la Naci&oacute;n";
 choices[11][1] = "los &oacute;rganos de gobierno de las Comunidades Aut&oacute;nomas";
 choices[11][2] = "los &oacute;rganos de gobierno de las Entidades Locales";
 choices[11][3] = "los &oacute;rganos de gobierno de las Universidades p&uacute;blicas";
 answers[11] = choices[11][3];
 units[11] = "4, 7, 8, 9";
 comments[11] = "Id Pregunta: 773. Ley 40/2015";


//  Id pregunta: 275 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Cu&aacute;l NO es una funci&oacute;n de la oficina de transparencia y acceso a la informaci&oacute;n?";
 choices[12]= new Array();
 choices[12][0] = "Actuar como unidad de informaci&oacute;n del Ministerio de la Presidencia, en los t&eacute;rminos previstos en el art&iacute;culo 21 de la Ley 19/2013, de 9 de diciembre.";
 choices[12][1] = "La atenci&oacute;n a los ciudadanos sobre el modo de acceso a los servicios y procedimientos en materias propias del departamento.";
 choices[12][2] = "Actuar como observatorio de la transparencia, acceso a la informaci&oacute;n y buen Gobierno.";
 choices[12][3] = "La tramitaci&oacute;n de las quejas y sugerencias que pudieran derivarse del funcionamiento de los servicios de competencia del departamento.";
 answers[12] = choices[12][2];
 units[12] = "22";
 comments[12] = "Id Pregunta: 275. LEY DE TRANSPARENCIA";


//  Id pregunta: 277 Año de creación de pregunta: 2016
 questions[13]= "14)  Sobre el Consejo de Transparencia y Buen Gobierno:";
 choices[13]= new Array();
 choices[13][0] = "Tiene por finalidad promover la transparencia de la actividad p&uacute;blica, velar por el cumplimiento de las obligaciones de publicidad, salvaguardar el ejercicio de derecho de acceso a la informaci&oacute;n p&uacute;blica y garantizar la observancia de las disposiciones de buen gobierno.";
 choices[13][1] = "Estar&aacute; compuesto por los siguientes &oacute;rganos: la Comisi&oacute;n de Transparencia y Buen Gobierno y el Presidente del Consejo de Transparencia y Buen Gobierno que lo ser&aacute; tambi&eacute;n de su Comisi&oacute;n.";
 choices[13][2] = "Se rige, entre otras, por Ley 33/2003, de 3 de noviembre, del Patrimonio de las Administraciones P&uacute;blicas, y, en lo no previsto en ella, por el Derecho p&uacute;blico en sus adquisiciones patrimoniales.";
 choices[13][3] = "Entre sus funciones se encuentra evaluar el grado de aplicaci&oacute;n de esta Ley. Para ello, elaborar&aacute; anualmente una memoria en la que se incluir&aacute; informaci&oacute;n sobre el cumplimiento de las obligaciones previstas y que ser&aacute; presentada ante las Cortes Generales.";
 answers[13] = choices[13][2];
 units[13] = "22";
 comments[13] = "Id Pregunta: 277. LEY DE TRANSPARENCIA";


//  Id pregunta: 441 Año de creación de pregunta: 2016
 questions[14]= "15)  Se&ntilde;ale la respuesta falsa respecto a Habilit@, Registro de Funcionarios Habilitados:";
 choices[14]= new Array();
 choices[14][0] = "El art&iacute;culo 12.3 de la Ley 39/2015recoge que la Administraci&oacute;n General del Estado, las Comunidades Aut&oacute;nomas y las Entidades Locales mantendr&aacute;n actualizado un registro, u otro sistema equivalente, donde constar&aacute;n los funcionarios habilitados para la identificaci&oacute;n o firma.";
 choices[14][1] = "La Orden HAP/8/2014, de 7 de enero, regula el Registro de funcionarios habilitados para la identificaci&oacute;n y autenticaci&oacute;n de ciudadanos en el &aacute;mbito de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos vinculados o dependientes.";
 choices[14][2] = "En el caso en que el ciudadano no disponga de medios de autenticaci&oacute;n y firma para relacionarse de manera electr&oacute;nica con las Administraciones, la Ley 39/2015 prev&eacute; que, siempre que el ciudadano se identifique y deje constancia de su consentimiento expreso, un funcionario podr&aacute; actuar en su nombre, utilizando el sistema de firma del que disponga para ello.";
 choices[14][3] = "Tambi&eacute;n se establece en la misma Ley 39/2015 que las Administraciones P&uacute;blicas podr&aacute;n realizar copias aut&eacute;nticas de los documentos p&uacute;blicos administrativos o privados mediante funcionario habilitado.";
 answers[14] = choices[14][1];
 units[14] = "43";
 comments[14] = "Id Pregunta: 441. SERVICIOS COMUNES";


//  Id pregunta: 815 Año de creación de pregunta: 2016
 questions[15]= "16)  Existir&aacute; un Subdelegado del Gobierno, que estar&aacute; bajo la inmediata dependencia del Delegado del Gobierno:";
 choices[15]= new Array();
 choices[15][0] = "en cada Comunidad Aut&oacute;noma";
 choices[15][1] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas pluriprovinciales";
 choices[15][2] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas uniprovinciales";
 choices[15][3] = "en cada una de las localidades de las Comunidades Aut&oacute;nomas";
 answers[15] = choices[15][1];
 units[15] = "4, 7, 8, 9";
 comments[15] = "Id Pregunta: 815. Ley 40/2015";


//  Id pregunta: 775 Año de creación de pregunta: 2016
 questions[16]= "17)  Las Administraciones P&uacute;blicas que, en el ejercicio de sus respectivas competencias, establezcan medidas que limiten el ejercicio de derechos individuales o colectivos o exijan el cumplimiento de requisitos para el desarrollo de una actividad, deber&aacute;n (se&ntilde;ala la incorrecta):";
 choices[16]= new Array();
 choices[16][0] = "aplicar el principio de proporcionalidad y elegir la medida menos restrictiva";
 choices[16][1] = "motivar su necesidad para la protecci&oacute;n del inter&eacute;s p&uacute;blico";
 choices[16][2] = "justificar su adecuaci&oacute;n para lograr los fines que se persiguen, evitando en la medida de lo posible que se produzcan diferencias de trato discriminatorias";
 choices[16][3] = "evaluar peri&oacute;dicamente los efectos y resultados obtenidos";
 answers[16] = choices[16][2];
 units[16] = "4, 7, 8, 9";
 comments[16] = "Id Pregunta: 775. Ley 40/2015";


//  Id pregunta: 304 Año de creación de pregunta: 2016
 questions[17]= "18)  El mandato de la Comisi&oacute;n se establece por un per&iacute;odo de:";
 choices[17]= new Array();
 choices[17][0] = "Cinco a&ntilde;os.";
 choices[17][1] = "Seis a&ntilde;os.";
 choices[17][2] = "Cuatro a&ntilde;os.";
 choices[17][3] = "Tres a&ntilde;os.";
 answers[17] = choices[17][0];
 units[17] = "5";
 comments[17] = "Id Pregunta: 304. UNION EUROPEA";


//  Id pregunta: 548 Año de creación de pregunta: 2016
 questions[18]= "19)  El principio definido en el est&aacute;ndar ISO/IEC 38500 para la Gobernanza TIC que establece la necesidad de cumplir los requerimientos regulatorios y legales es el principio de:";
 choices[18]= new Array();
 choices[18][0] = "Conformidad";
 choices[18][1] = "Responsabilidad";
 choices[18][2] = "Adquisici&oacute;n";
 choices[18][3] = "Desempe&ntilde;o";
 answers[18] = choices[18][0];
 units[18] = "26";
 comments[18] = "Id Pregunta: 548. Gobernanza TIC";


//  Id pregunta: 443 Año de creación de pregunta: 2016
 questions[19]= "20)  Respecto a las comunicaciones y notificaciones electr&oacute;nicas:";
 choices[19]= new Array();
 choices[19][0] = "El servicio SIM se utiliza para el env&iacute;o de notificaciones electr&oacute;nicas.";
 choices[19][1] = "El Servicio compartido la gesti&oacute;n de notificaciones Notific@, ser&aacute; de uso obligatorio para la AGE y sus OOPP en 2017.";
 choices[19][2] = "La plataforma Notific@, recibe desde los organismos emisores, las comunicaciones y adem&aacute;s de aportar otros valores a&ntilde;adidos, las pone a disposici&oacute;n de los destinatarios en la Carpeta Ciudadana.";
 choices[19][3] = "El servicio SIM, que se ha integrado en el Servicio compartido de gesti&oacute;n de notificaciones, proporciona a los ciudadanos y empresas un buz&oacute;n seguro.";
 answers[19] = choices[19][1];
 units[19] = "43";
 comments[19] = "Id Pregunta: 443. SERVICIOS COMUNES";


//  Id pregunta: 658 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;Qu&eacute; aplicativo se suele usar como herramienta administrativa para el control de los nodos dentro del ecosistema BidData?";
 choices[20]= new Array();
 choices[20][0] = "Cassandra";
 choices[20][1] = "Riak";
 choices[20][2] = "Avro";
 choices[20][3] = "Zookeeper";
 answers[20] = choices[20][3];
 units[20] = "73";
 comments[20] = "Id Pregunta: 658. ";


//  Id pregunta: 207 Año de creación de pregunta: 2016
 questions[21]= "22)  La representaci&oacute;n ordinaria del Estado en las Comunidades Aut&oacute;nomas corresponde a:";
 choices[21]= new Array();
 choices[21][0] = "El Delegado del Gobierno.";
 choices[21][1] = "El Subdelegado del Gobierno.";
 choices[21][2] = "El Presidente de la Comunidad Aut&oacute;noma.";
 choices[21][3] = "El Gobernador Civil.";
 answers[21] = choices[21][2];
 units[21] = "1";
 comments[21] = "Id Pregunta: 207. CONSTITUCION1978";


//  Id pregunta: 694 Año de creación de pregunta: 2016
 questions[22]= "23)  Se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[22]= new Array();
 choices[22][0] = "El Reglamento (UE) 910/2014 no prev&eacute; la emisi&oacute;n de certificados de firma electr&oacute;nica a favor de personas jur&iacute;dicas o entidades sin personalidad jur&iacute;dica";
 choices[22][1] = "Con la aprobaci&oacute;n del Reglamento (UE) 910/2014 queda derogada la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica";
 choices[22][2] = "El Reglamento (UE) 910/2014 desplaza desde el 1 de julio de 2016 los preceptos de la Ley 59/2003 que se opongan a su contenido";
 choices[22][3] = "A partir del 1 de julio de 2016 dejar&aacute;n de emitirse certificados de firma electr&oacute;nica de personas jur&iacute;dicas y entidades sin personalidad jur&iacute;dica, pudiendo en su lugar expedirse certificados de sello electr&oacute;nico o certificados de firma de persona f&iacute;sica representante";
 answers[22] = choices[22][1];
 units[22] = "77";
 comments[22] = "Id Pregunta: 694. http://www.minetad.gob.es/telecomunicaciones/es-ES/Servicios/FirmaElectronica/Documents/nota-web-certifs-pers-juridica.pdf";


//  Id pregunta: 255 Año de creación de pregunta: 2016
 questions[23]= "24)  La soberan&iacute;a nacional reside en:";
 choices[23]= new Array();
 choices[23][0] = "el Parlamento nacional.";
 choices[23][1] = "el Parlamento auton&oacute;mico o Asamblea.";
 choices[23][2] = "el pueblo espa&ntilde;ol.";
 choices[23][3] = "el Congreso y el Senado.";
 answers[23] = choices[23][3];
 units[23] = "1";
 comments[23] = "Id Pregunta: 255. CONSTITUCION1978";


//  Id pregunta: 56 Año de creación de pregunta: 2016
 questions[24]= "25)  En cuanto al Plan de Sistemas de Informaci&oacute;n:";
 choices[24]= new Array();
 choices[24][0] = "Sirve como punto de partida del Plan Estrat&eacute;gico de la Organizaci&oacute;n.";
 choices[24][1] = "No es abordado detalladamente dentro de la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3.";
 choices[24][2] = "Fija el plan de proyectos a desarrollar, detallando los m&aacute;s inmediatos.";
 choices[24][3] = "Es un documento r&iacute;gido que debe ser actualizado s&oacute;lo ante discontinuidades de los productos tecnol&oacute;gicos sobre los que se sustenta.";
 answers[24] = choices[24][2];
 units[24] = "83";
 comments[24] = "Id Pregunta: 56. AGE A1 2015";


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


//  Id pregunta: 60 Año de creación de pregunta: 2016
 questions[26]= "27)  El modelo de capacidad de procesos establecido por COBIT v5:";
 choices[26]= new Array();
 choices[26][0] = "No modifica esencialmente el modelo planteado por COBIT v4.1.";
 choices[26][1] = "Define 5 niveles de procesos (proceso incompleto, ejecutado, gestionado, predecible, optimizado).";
 choices[26][2] = "El nivel 1 (proceso ejecutado) s&oacute;lo se alcanza si el proceso alcanza su prop&oacute;sito.";
 choices[26][3] = "Un proceso es optimizado si se ejecuta dentro de los l&iacute;mites definidos para alcanzar sus resultados de proceso.";
 answers[26] = choices[26][2];
 units[26] = "101";
 comments[26] = "Id Pregunta: 60. AGE A1 2015";


//  Id pregunta: 814 Año de creación de pregunta: 2016
 questions[27]= "28)  Las Delegaciones del Gobierno est&aacute;n adscritas org&aacute;nicamente a:";
 choices[27]= new Array();
 choices[27][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[27][1] = "el Consejo de Gobierno de la Comunidad Aut&oacute;noma";
 choices[27][2] = "el Ministerio del Interior";
 choices[27][3] = "la Administraci&oacute;n General del Estado";
 answers[27] = choices[27][0];
 units[27] = "4, 7, 8, 9";
 comments[27] = "Id Pregunta: 814. Ley 40/2015";


//  Id pregunta: 66 Año de creación de pregunta: 2016
 questions[28]= "29)  Para los siguientes tipos de copias de seguridad, indique cu&aacute;l de las siguientes secuencias los ordena de mayor a menor tiempo de restauraci&oacute;n:";
 choices[28]= new Array();
 choices[28][0] = "Incremental, diferencial, completa";
 choices[28][1] = "Completa, incremental, diferencial";
 choices[28][2] = "Completa, diferencial, incremental";
 choices[28][3] = "No hay diferencia en el tiempo de restauraci&oacute;n, encontr&aacute;ndose la diferencia en el espacio de almacenamiento consumido.";
 answers[28] = choices[28][0];
 units[28] = "53";
 comments[28] = "Id Pregunta: 66. AGE A1 2015. Pregunta anulada en el examen real. La opci&oacute;n A dec&iacute;a &quot;Diferencial, incremental, completa&quot;, por lo que ninguna respuesta pod&iacute;a considerarse correcta";


//  Id pregunta: 378 Año de creación de pregunta: 2016
 questions[29]= "30)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[29]= new Array();
 choices[29][0] = "Quince miembros.";
 choices[29][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[29][2] = "Los miembros que determine el Consejo.";
 choices[29][3] = "Un Presidente y quince miembros.";
 answers[29] = choices[29][1];
 units[29] = "14";
 comments[29] = "Id Pregunta: 378. UNION EUROPEA";


//  Id pregunta: 705 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Cu&aacute;l de los siguientes NO es un principio t&eacute;cnico de los mencionados en la Ley 19/2013 al que debe atenerse la informaci&oacute;n publicada en el Portal de Transparencia de la Administraci&oacute;n General del Estado?";
 choices[30]= new Array();
 choices[30][0] = "Compatibilidad";
 choices[30][1] = "Interoperabilidad";
 choices[30][2] = "Reutilizaci&oacute;n";
 choices[30][3] = "Accesibilidad";
 answers[30] = choices[30][0];
 units[30] = "22";
 comments[30] = "Id Pregunta: 705. Ley de transparencia";


//  Id pregunta: 652 Año de creación de pregunta: 2016
 questions[31]= "32)  Indica cu&aacute;l de las siguientes caracter&iacute;sticas del protocolo IP versi&oacute;n 6 es incorrecta.";
 choices[31]= new Array();
 choices[31][0] = "El tama&ntilde;o de la direcci&oacute;n IP es de 128 bits.";
 choices[31][1] = "Aumento de la flexibilidad en el direccionamiento.";
 choices[31][2] = "Define una cabecera de extensi&oacute;n que proporciona autenticaci&oacute;n.";
 choices[31][3] = "La cabecera IP versi&oacute;n 6 obligatoria es de tama&ntilde;o variable.";
 answers[31] = choices[31][3];
 units[31] = "109";
 comments[31] = "Id Pregunta: 652. Junta de Extremadura A1 2015";


//  Id pregunta: 213 Año de creación de pregunta: 2016
 questions[32]= "33)  Seg&uacute;n el Art&iacute;culo 59 de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; v&aacute;lida la Regencia nombrada por las Cortes Generales que se componga del siguiente n&uacute;mero de personas:";
 choices[32]= new Array();
 choices[32][0] = "Cinco.";
 choices[32][1] = "Dos.";
 choices[32][2] = "Cuatro.";
 choices[32][3] = "Siete.";
 answers[32] = choices[32][0];
 units[32] = "1";
 comments[32] = "Id Pregunta: 213. CONSTITUCION1978";


//  Id pregunta: 543 Año de creación de pregunta: 2016
 questions[33]= "34)  Se&ntilde;ala la correcta:";
 choices[33]= new Array();
 choices[33][0] = "la falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n impedir&aacute; que se tenga por realizado el acto de que se trate";
 choices[33][1] = "el documento electr&oacute;nico que acredite el resultado de la consulta al registro electr&oacute;nico de apoderamientos correspondiente tendr&aacute; la condici&oacute;n de acreditaci&oacute;n a estos efectos";
 choices[33][2] = "los registros electr&oacute;nicos generales y particulares de apoderamientos pertenecientes a todas y cada una de las Administraciones, ser&aacute;n preferiblemente interoperables entre s&iacute;";
 choices[33][3] = "el interesado no podr&aacute; comparecer por s&iacute; mismo en un procedimiento en el que haya designado representante";
 answers[33] = choices[33][1];
 units[33] = "7";
 comments[33] = "Id Pregunta: 543. LEY 39/2015";


//  Id pregunta: 237 Año de creación de pregunta: 2016
 questions[34]= "35)  Seg&uacute;n la regulaci&oacute;n constitucional del derecho de asociaci&oacute;n:";
 choices[34]= new Array();
 choices[34][0] = "Las asociaciones que se constituyan deben inscribirse en un registro a los efectos de publicidad.";
 choices[34][1] = "Las asociaciones pueden ser suspendidas en virtud de resoluci&oacute;n administrativa motivada.";
 choices[34][2] = "Este derecho aparece regulado en el T&iacute;tulo Preliminar de la Constituci&oacute;n.";
 choices[34][3] = "Este derecho aparece regulado en la Secci&oacute;n 2&ordf; del Cap&iacute;tulo 2&ordm; del T&iacute;tulo I de la Constituci&oacute;n.";
 answers[34] = choices[34][2];
 units[34] = "1";
 comments[34] = "Id Pregunta: 237. CONSTITUCION1978";


//  Id pregunta: 424 Año de creación de pregunta: 2016
 questions[35]= "36)  Entre otros criterios de actuaci&oacute;n de las administraciones p&uacute;blicas para la consecuci&oacute;n del principio de igualdad, se encuentra:";
 choices[35]= new Array();
 choices[35][0] = "Evaluar peri&oacute;dicamente la efectividad del principio de igualdad.";
 choices[35][1] = "Penalizar a las empresas que no cumplan con los planes de igualdad.";
 choices[35][2] = "Ninguna es correcta.";
 choices[35][3] = "A y B son correctas.";
 answers[35] = choices[35][0];
 units[35] = "14";
 comments[35] = "Id Pregunta: 424. POLITICAS DE IGUALDAD";


//  Id pregunta: 290 Año de creación de pregunta: 2016
 questions[36]= "37)  El Parlamento Europeo celebrar&aacute;:";
 choices[36]= new Array();
 choices[36][0] = "Cada a&ntilde;o un per&iacute;odo de sesiones.";
 choices[36][1] = "Los per&iacute;odos de sesiones se dividen de febrero a junio y de septiembre a diciembre.";
 choices[36][2] = "Cada a&ntilde;o tres per&iacute;odos de sesiones.";
 choices[36][3] = "Las sesiones del Parlamento no se dividen en per&iacute;odos de sesiones.";
 answers[36] = choices[36][0];
 units[36] = "5";
 comments[36] = "Id Pregunta: 290. UNION EUROPEA";


//  Id pregunta: 223 Año de creación de pregunta: 2016
 questions[37]= "38)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, durante el periodo de su mandato los Diputados y Senadores gozar&aacute;n asimismo de inmunidad y s&oacute;lo podr&aacute;n ser detenidos en caso de flagrante delito. No podr&aacute;n ser inculpados ni procesados sin la previa autorizaci&oacute;n:";
 choices[37]= new Array();
 choices[37][0] = "De la C&aacute;mara respectiva.";
 choices[37][1] = "Del Rey.";
 choices[37][2] = "Del Tribunal Constitucional.";
 choices[37][3] = "Del Tribunal Supremo.";
 answers[37] = choices[37][0];
 units[37] = "1";
 comments[37] = "Id Pregunta: 223. CONSTITUCION1978";


//  Id pregunta: 472 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Qui&eacute;n remitir&aacute; a las Cortes Generales un informe trimestral acerca de la utilizaci&oacute;n del Fondo regulado en el Fondo de Contingencia de ejecuci&oacute;n presupuestaria seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria?";
 choices[38]= new Array();
 choices[38][0] = "El Ministro de Econom&iacute;a.";
 choices[38][1] = "El Gobierno.";
 choices[38][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[38][3] = "El Presidente del Gobierno.";
 answers[38] = choices[38][1];
 units[38] = "10";
 comments[38] = "Id Pregunta: 472. PRESUPUESTOS GENERALES";


//  Id pregunta: 854 Año de creación de pregunta: 2016
 questions[39]= "40)  Si disponemos de 6 discos SAS de 1TB netos configurados en RAID5, &iquest;de qu&eacute; capacidad neta se dispone en RAID5 en el sistema de almacenamiento?";
 choices[39]= new Array();
 choices[39][0] = "6 TB.";
 choices[39][1] = "5 TB.";
 choices[39][2] = "7 TB.";
 choices[39][3] = "3 TB.";
 answers[39] = choices[39][1];
 units[39] = "53";
 comments[39] = "Id Pregunta: 854. Xunta de Galicia 2015";


//  Id pregunta: 411 Año de creación de pregunta: 2016
 questions[40]= "41)  Es objeto de la Ley de Igualdad efectiva de mujeres y hombres:";
 choices[40]= new Array();
 choices[40][0] = "Elaborar medidas de acci&oacute;n positiva.";
 choices[40][1] = "Hacer efectivo el derecho de igualdad de trato y de oportunidades entre mujeres y hombre.";
 choices[40][2] = "Ninguna es correcta.";
 choices[40][3] = "A y B son correctas.";
 answers[40] = choices[40][1];
 units[40] = "14";
 comments[40] = "Id Pregunta: 411. POLITICAS DE IGUALDAD";


//  Id pregunta: 517 Año de creación de pregunta: 2016
 questions[41]= "42)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[41]= new Array();
 choices[41][0] = "quedar&aacute;n sujetas a lo dispuesto en todas las normas de esta Ley";
 choices[41][1] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[41][2] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo cuando ejerzan potestades administrativas";
 choices[41][3] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley";
 answers[41] = choices[41][1];
 units[41] = "7";
 comments[41] = "Id Pregunta: 517. LEY 39/2015";


//  Id pregunta: 12 Año de creación de pregunta: 2016
 questions[42]= "43)  Indique cu&aacute;l de las siguientes proposiciones es cierta:";
 choices[42]= new Array();
 choices[42][0] = "AngularJS es un framework de JavaScript de c&oacute;digo abierto que sigue el patr&oacute;n de dise&ntilde;o MVC.";
 choices[42][1] = "PrimeFaces y RichFaces son librer&iacute;as que extienden el framework .NET de Microsoft.";
 choices[42][2] = "PrimeFaces es una extensi&oacute;n de AngularJS que permite la integraci&oacute;n de componentes RichFaces.";
 choices[42][3] = "El framework Spring es compatible con el uso delORM Hibernate, pero es incompatible con el uso de Java Server Faces en la capa de presentaci&oacute;n.";
 answers[42] = choices[42][0];
 units[42] = "62";
 comments[42] = "Id Pregunta: 12. AGE A1 2015";


//  Id pregunta: 197 Año de creación de pregunta: 2016
 questions[43]= "44)  Los reglamentos aprobados en el ejercicio de la potestad reglamentaria no pueden:";
 choices[43]= new Array();
 choices[43][0] = "Establecer tributos.";
 choices[43][1] = "Desarrollar lo establecido en una Ley.";
 choices[43][2] = "Modificar los plazos para presentar recursos administrativos.";
 choices[43][3] = "Crear un &oacute;rgano colegiado interministerial.";
 answers[43] = choices[43][0];
 units[43] = "1";
 comments[43] = "Id Pregunta: 197. CONSTITUCION1978";


//  Id pregunta: 805 Año de creación de pregunta: 2016
 questions[44]= "45)  Los Secretarios generales t&eacute;cnicos tienen a todos los efectos la categor&iacute;a de:";
 choices[44]= new Array();
 choices[44][0] = "Director General";
 choices[44][1] = "Secretario general";
 choices[44][2] = "Subdirector general";
 choices[44][3] = "Subsecretario";
 answers[44] = choices[44][0];
 units[44] = "4, 7, 8, 9";
 comments[44] = "Id Pregunta: 805. Ley 40/2015";


//  Id pregunta: 323 Año de creación de pregunta: 2016
 questions[45]= "46)  Los Jueces y Abogados Generales del Tribunal de Justicia de la Uni&oacute;n Europea son nombrados para un per&iacute;odo de:";
 choices[45]= new Array();
 choices[45][0] = "Tres a&ntilde;os.";
 choices[45][1] = "Cuatro a&ntilde;os.";
 choices[45][2] = "Cinco a&ntilde;os.";
 choices[45][3] = "Seis a&ntilde;os.";
 answers[45] = choices[45][3];
 units[45] = "5";
 comments[45] = "Id Pregunta: 323. UNION EUROPEA";


//  Id pregunta: 610 Año de creación de pregunta: 2016
 questions[46]= "47)  Una de las condiciones que un &aacute;rbol debe cumplir para ser &aacute;rbol b, siendo n el orden del &aacute;rbol, es:";
 choices[46]= new Array();
 choices[46][0] = "Cada p&aacute;gina contiene como m&aacute;ximo 2n + 1 elementos.";
 choices[46][1] = "Cada p&aacute;gina, excepto la ra&iacute;z, contiene al menos n elementos.";
 choices[46][2] = "Cada p&aacute;gina o es una hoja o tiene m descendientes, siendo m el n&uacute;mero de elementos o claves que tiene.";
 choices[46][3] = "Las hojas no tienen por qu&eacute; estar al mismo nivel.";
 answers[46] = choices[46][1];
 units[46] = "56";
 comments[46] = "Id Pregunta: 610. Junta de Extremadura A1 2015";


//  Id pregunta: 365 Año de creación de pregunta: 2016
 questions[47]= "48)  Las decisiones de la Comisi&oacute;n se adoptar&aacute;n por:";
 choices[47]= new Array();
 choices[47][0] = "Unanimidad y mayor&iacute;a simple.";
 choices[47][1] = "Unanimidad.";
 choices[47][2] = "Mayor&iacute;a cualificada.";
 choices[47][3] = "Mayor&iacute;a simple.";
 answers[47] = choices[47][3];
 units[47] = "5";
 comments[47] = "Id Pregunta: 365. UNION EUROPEA";


//  Id pregunta: 449 Año de creación de pregunta: 2016
 questions[48]= "49)  Dentro de la l&oacute;gica presupuestaria, los gastos tienen car&aacute;cter...";
 choices[48]= new Array();
 choices[48][0] = "Ejecutivo";
 choices[48][1] = "Limitativo";
 choices[48][2] = "Estimativo";
 choices[48][3] = "Progresivo";
 answers[48] = choices[48][1];
 units[48] = "10";
 comments[48] = "Id Pregunta: 449. PRESUPUESTOS GENERALES";


//  Id pregunta: 333 Año de creación de pregunta: 2016
 questions[49]= "50)  Est&aacute;n legitimados para interponer el recurso de carencia del art. 175 TCE:";
 choices[49]= new Array();
 choices[49][0] = "Las instituciones comunitarias.";
 choices[49][1] = "Los Estados miembros y las instituciones comunitarias.";
 choices[49][2] = "Los Estados miembros.";
 choices[49][3] = "Los nacionales de los Estados miembros.";
 answers[49] = choices[49][1];
 units[49] = "5";
 comments[49] = "Id Pregunta: 333. UNION EUROPEA";


//  Id pregunta: 457 Año de creación de pregunta: 2016
 questions[50]= "51)  La clasificaci&oacute;n econ&oacute;mica del gasto nos dice...";
 choices[50]= new Array();
 choices[50][0] = "En qu&eacute; nos gastamos el dinero";
 choices[50][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[50][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[50][3] = "Qui&eacute;n se gasta el dinero.";
 answers[50] = choices[50][0];
 units[50] = "10";
 comments[50] = "Id Pregunta: 457. PRESUPUESTOS GENERALES";


//  Id pregunta: 204 Año de creación de pregunta: 2016
 questions[51]= "52)  Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada reciben el t&iacute;tulo de:";
 choices[51]= new Array();
 choices[51][0] = "Decretos Legislativos.";
 choices[51][1] = "Decretos-leyes.";
 choices[51][2] = "Leyes de bases.";
 choices[51][3] = "Reales Decretos del Consejo de Ministros.";
 answers[51] = choices[51][0];
 units[51] = "1";
 comments[51] = "Id Pregunta: 204. CONSTITUCION1978";


//  Id pregunta: 94 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es propia de Apache Hadoop?";
 choices[52]= new Array();
 choices[52][0] = "Es un framework de software libre.";
 choices[52][1] = "Es una base de datos NoSQL.";
 choices[52][2] = "Est&aacute; basado en MapReduce.";
 choices[52][3] = "Puede emplearse en sistemas de datos masivos (Big Data).";
 answers[52] = choices[52][1];
 units[52] = "73";
 comments[52] = "Id Pregunta: 94. AGE A1 2015";


//  Id pregunta: 74 Año de creación de pregunta: 2016
 questions[53]= "54)  Se&ntilde;ale la opci&oacute;n incorrecta respecto a SMTP:";
 choices[53]= new Array();
 choices[53][0] = "SMTP es capaz de transportar correo a trav&eacute;s de m&uacute;ltiples redes: entre nodos conectados por TCP en Internet, entre nodos conectados en una Intranet TCP/IP aislados por un cortafuegos, o entre nodos en un entorno LAN o WAN que est&eacute;n usando un protocolo de nivel de transporte distinto a TCP.";
 choices[53][1] = "Usando SMTP, un proceso puede transferir correo a otro proceso en la misma red o a otra red mediante un proceso gateway accesible en las dos redes.";
 choices[53][2] = "En SMTP un mensaje de correo puede pasar por una serie de nodos gateway intermedios en su camino desde el emisor al receptor &uacute;ltimo, sirvi&eacute;ndose de mecanismos para decidir el siguiente salto como el sistema de resoluci&oacute;n de nombres de dominio de Internet.";
 choices[53][3] = "En SMTP la transferencia de mensaje ocurre siempre en una conexi&oacute;n &uacute;nica entre el emisor SMTP y el receptor final SMTP.";
 answers[53] = choices[53][3];
 units[53] = "106";
 comments[53] = "Id Pregunta: 74. AGE A1 2015";


//  Id pregunta: 99 Año de creación de pregunta: 2016
 questions[54]= "55)  En cuanto a la imputaci&oacute;n de costes de los servicios compartidos en la Administraci&oacute;n General del Estado, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[54]= new Array();
 choices[54][0] = "Seg&uacute;n establece el Real Decreto 806/2014 el coste, caso de ocasionarse, ser&aacute; asumido &iacute;ntegramente por la Direcci&oacute;n de Tecnolog&iacute;as de las Informaci&oacute;n y Comunicaciones.";
 choices[54][1] = "Se sufragar&aacute;n con cargo a los presupuestos de Presidencia del Gobierno dado el car&aacute;cter horizontal del servicio compartido.";
 choices[54][2] = "La declaraci&oacute;n de todo servicio compartido deber&aacute; indicar si existe compensaci&oacute;n econ&oacute;mica al proveedor.";
 choices[54][3] = "No existir&aacute;, dado que su gratuidad y libertad de acceso es consustancial a la idea de servicio compartido.";
 answers[54] = choices[54][2];
 units[54] = "26";
 comments[54] = "Id Pregunta: 99. AGE A1 2015: actualmente la Secretar&iacute;a General de Administraci&oacute;n Digital asume las funciones de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 262 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes no es una jurisdicci&oacute;n especial?:";
 choices[55]= new Array();
 choices[55][0] = "Constitucional.";
 choices[55][1] = "Penal.";
 choices[55][2] = "Militar.";
 choices[55][3] = "Tribunales consuetudinarios.";
 answers[55] = choices[55][0];
 units[55] = "1";
 comments[55] = "Id Pregunta: 262. CONSTITUCION1978";


//  Id pregunta: 200 Año de creación de pregunta: 2016
 questions[56]= "57)  Se&ntilde;ale la afirmaci&oacute;n correcta. Corresponde al Rey:";
 choices[56]= new Array();
 choices[56][0] = "Nombrar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[56][1] = "Nombrar y separar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[56][2] = "Nombrar y separar a los miembros del Gobierno previa consulta al Presidente del Gobierno.";
 choices[56][3] = "Nombrar y separar a los miembros del Gobierno, a propuesta de su Presidente.";
 answers[56] = choices[56][3];
 units[56] = "1";
 comments[56] = "Id Pregunta: 200. CONSTITUCION1978";


//  Id pregunta: 171 Año de creación de pregunta: 2016
 questions[57]= "58)  Se&ntilde;ale la respuesta FALSA. Entre los objetivos de ISA2 se encuentra:";
 choices[57]= new Array();
 choices[57][0] = "desarrollar, mantener y promover un enfoque hol&iacute;stico hacia la interoperabilidad en la Uni&oacute;n para eliminar la fragmentaci&oacute;n en el panorama de la interoperabilidad en la Uni&oacute;n";
 choices[57][1] = "facilitar la reutilizaci&oacute;n de las soluciones de interoperabilidad por parte de las administraciones p&uacute;blicas europeas.";
 choices[57][2] = "identificar, crear y explotar soluciones de interoperabilidad que faciliten la ejecuci&oacute;n de las pol&iacute;ticas y actividades de la Uni&oacute;n";
 choices[57][3] = "eliminar la interacci&oacute;n electr&oacute;nica transfronteriza tanto entre las administraciones p&uacute;blicas europeas fomentando una cultura de ciberseguridad europea";
 answers[57] = choices[57][3];
 units[57] = "19";
 comments[57] = "Id Pregunta: 171. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Diciembre/Noticia-2015-12-09-Publicada-la-Decision-ISA2-continuidad-al-esfuerzo-asegurar-interoperabilidad-entre-AAPP-europeas.html#.WCnm1WrhDIU";


//  Id pregunta: 613 Año de creación de pregunta: 2016
 questions[58]= "59)  Una de las caracter&iacute;sticas de seguridad en SQL Server 2008 es el cifrado transparente de datos. Se&ntilde;ala la afirmaci&oacute;n correcta:";
 choices[58]= new Array();
 choices[58][0] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de registro.";
 choices[58][1] = "SQL Server ofrece la capacidad de buscar dentro de los datos cifrados.";
 choices[58][2] = "Para trabajar con datos cifrados utilizando esta caracter&iacute;stica hay que introducir cambios en las aplicaciones.";
 choices[58][3] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de datos.";
 answers[58] = choices[58][1];
 units[58] = "63";
 comments[58] = "Id Pregunta: 613. Junta de Extremadura A1 2015";


//  Id pregunta: 573 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Cu&aacute;l de los siguientes hechos NO se produce durante la d&eacute;cada de los 70-80?";
 choices[59]= new Array();
 choices[59][0] = "Incorporaci&oacute;n de la mujer al mercado laboral";
 choices[59][1] = "Entrada en la Uni&oacute;n Europea";
 choices[59][2] = "Pactos de la Moncloa";
 choices[59][3] = "Ingreso en la ONU";
 answers[59] = choices[59][3];
 units[59] = "12";
 comments[59] = "Id Pregunta: 573. Modelo econ&oacute;mico";


//  Id pregunta: 360 Año de creación de pregunta: 2016
 questions[60]= "61)  El Parlamento Europeo est&aacute; compuesto actualmente por:";
 choices[60]= new Array();
 choices[60][0] = "786 Diputados como m&aacute;ximo.";
 choices[60][1] = "600 Diputados como m&aacute;ximo.";
 choices[60][2] = "650 Diputados como m&aacute;ximo.";
 choices[60][3] = "732 Diputados como m&aacute;ximo.";
 answers[60] = choices[60][0];
 units[60] = "5";
 comments[60] = "Id Pregunta: 360. UNION EUROPEA";


//  Id pregunta: 68 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Cu&aacute;l de las siguientes opciones se refiere al conjunto de metodolog&iacute;as, procesos, arquitecturas y tecnolog&iacute;as que permiten reunir, depurar y transformar datos de los sistemas transaccionales e informaci&oacute;n desestructurada en informaci&oacute;n estructurada, para su explotaci&oacute;n directa o para su an&aacute;lisis y conversi&oacute;n en conocimiento, dando as&iacute; soporte a la toma de decisiones sobre el negocio?";
 choices[61]= new Array();
 choices[61][0] = "Data Mining (miner&iacute;a de datos)";
 choices[61][1] = "Business Intelligence (inteligencia de negocio)";
 choices[61][2] = "Data Warehouse (almac&eacute;n de datos)";
 choices[61][3] = "An&aacute;lisis OLTP (procesamiento en l&iacute;nea transaccional)";
 answers[61] = choices[61][1];
 units[61] = "72";
 comments[61] = "Id Pregunta: 68. AGE A1 2015";


//  Id pregunta: 649 Año de creación de pregunta: 2016
 questions[62]= "63)  En Itil V3, entre los factores que hay que tener en cuenta en la evaluaci&oacute;n de herramientas de Gesti&oacute;n del Servicio se encuentran:";
 choices[62]= new Array();
 choices[62][0] = "Estructura, tratamiento, integraci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[62][1] = "structura, salvaguarda, integraci&oacute;n de datos, flexibilidad de implementaci&oacute;n, uso y comunicaci&oacute;n de datos.";
 choices[62][2] = "Estructura, tratamiento, inspecci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[62][3] = "Responsabilidad, tratamiento, inspecci&oacute;n de datos y soporte a la monitorizaci&oacute;n de los niveles de servicio.";
 answers[62] = choices[62][0];
 units[62] = "101";
 comments[62] = "Id Pregunta: 649. Junta de Extremadura A1 2015";


//  Id pregunta: 120 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Cu&aacute;l es el Real Decreto por el que se aprueba el Estatuto del Consejo de Transparencia y Buen Gobierno?";
 choices[63]= new Array();
 choices[63][0] = "Real Decreto 806/2014, de 19 de septiembre";
 choices[63][1] = "Real Decreto 951/2015, de 23 de octubre";
 choices[63][2] = "Real Decreto 1065/2015, de 27 de noviembre";
 choices[63][3] = "Real Decreto 919/2014, de 31 de octubre";
 answers[63] = choices[63][3];
 units[63] = "22";
 comments[63] = "Id Pregunta: 120. ";


//  Id pregunta: 835 Año de creación de pregunta: 2016
 questions[64]= "65)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[64]= new Array();
 choices[64][0] = "La competencia es irrenunciable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[64][1] = "La competencia es imprescriptible y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[64][2] = "La competencia es inviolable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[64][3] = "Todas son correctas.";
 answers[64] = choices[64][0];
 units[64] = "4, 7, 8, 9";
 comments[64] = "Id Pregunta: 835. Ley 40/2015";


//  Id pregunta: 723 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;C&uacute;al es la principal ventaja de sprints m&aacute;s cortos en Scrum?";
 choices[65]= new Array();
 choices[65][0] = "Permite reaccionar al equipo mejor ante imprevistos";
 choices[65][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[65][2] = "Es m&aacute;s f&aacute;cil cumplir los objetivos marcados al final de cada sprint";
 choices[65][3] = "Ninguna de las anteriores";
 answers[65] = choices[65][1];
 units[65] = "34, 84";
 comments[65] = "Id Pregunta: 723. Metodologias &aacute;giles";


//  Id pregunta: 179 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Qu&eacute; tipo de ley aprueba los estatutos de autonom&iacute;a?";
 choices[66]= new Array();
 choices[66][0] = "Una ley orginaria.";
 choices[66][1] = "Una ley org&aacute;nica.";
 choices[66][2] = "Una ley de bases.";
 choices[66][3] = "Una ley de transferencia.";
 answers[66] = choices[66][1];
 units[66] = "1";
 comments[66] = "Id Pregunta: 179. CONSTITUCION1978";


//  Id pregunta: 159 Año de creación de pregunta: 2016
 questions[67]= "68)  Seg&uacute;n la ley 39/2015, los actos administrativos, a menos que su naturaleza exija otra forma m&aacute;s adecuada de expresi&oacute;n y constancia, se producir&aacute;n: ";
 choices[67]= new Array();
 choices[67][0] = "verbalmente";
 choices[67][1] = "por escrito a trav&eacute;s de medios electr&oacute;nicos o no electr&oacute;nicos";
 choices[67][2] = "por escrito a trav&eacute;s de medios electr&oacute;nicos";
 choices[67][3] = "por escrito a trav&eacute;s de medios no electr&oacute;nicos";
 answers[67] = choices[67][2];
 units[67] = "7";
 comments[67] = "Id Pregunta: 159. Ley 39/2015, Art&iacute;culo 36";


//  Id pregunta: 529 Año de creación de pregunta: 2016
 questions[68]= "69)  Los interesados con capacidad de obrar podr&aacute;n actuar por medio de representante:";
 choices[68]= new Array();
 choices[68][0] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 choices[68][1] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[68][2] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[68][3] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 answers[68] = choices[68][2];
 units[68] = "7";
 comments[68] = "Id Pregunta: 529. LEY 39/2015";


//  Id pregunta: 374 Año de creación de pregunta: 2016
 questions[69]= "70)  Las instituciones de la Uni&oacute;n Europea son:";
 choices[69]= new Array();
 choices[69][0] = "El Consejo, la Comisi&oacute;n, el Parlamento y el Tribunal de Justicia.";
 choices[69][1] = "El Consejo, el Parlamento y el Tribunal de Justicia.";
 choices[69][2] = "El Consejo, el Parlamento y la Comisi&oacute;n.";
 choices[69][3] = "El Consejo, la Comisi&oacute;n, el Parlamento Europeo, el Tribunal de Justicia y el Tribunal de Cuentas.";
 answers[69] = choices[69][3];
 units[69] = "5";
 comments[69] = "Id Pregunta: 374. UNION EUROPEA";


//  Id pregunta: 30 Año de creación de pregunta: 2016
 questions[70]= "71)  El sistema operativo OS X El Capit&aacute;n incluye un conjunto de servicios de red para compartir archivos entre Mac y PC, &iquest;cu&aacute;l es el protocolo por defecto que emplea OS X El Capit&aacute;n?";
 choices[70]= new Array();
 choices[70][0] = "SMB3";
 choices[70][1] = "AFP";
 choices[70][2] = "NFS";
 choices[70][3] = "FTP";
 answers[70] = choices[70][0];
 units[70] = "59";
 comments[70] = "Id Pregunta: 30. AGE A1 2015";


//  Id pregunta: 17 Año de creación de pregunta: 2016
 questions[71]= "72)  De acuerdo con el Reglamento por el que se desarrolla parcialmente la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, aprobado por Real Decreto 1671/2009, de 6 de noviembre, se&ntilde;ale la respuesta correcta:";
 choices[71]= new Array();
 choices[71][0] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de emisi&oacute;n.";
 choices[71][1] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 12 meses desde la fecha de emisi&oacute;n.";
 choices[71][2] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de notificaci&oacute;n.";
 choices[71][3] = "Los documentos electr&oacute;nicos deben conservarse por el per&iacute;odo m&iacute;nimo que determine cada &oacute;rgano administrativo de acuerdo con el procedimiento administrativo de que se trate.";
 answers[71] = choices[71][3];
 units[71] = "44";
 comments[71] = "Id Pregunta: 17. AGE A1 2015";


//  Id pregunta: 319 Año de creación de pregunta: 2016
 questions[72]= "73)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[72]= new Array();
 choices[72][0] = "El Presidente de la Comisi&oacute;n, con la aprobaci&oacute;n de la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[72][1] = "La Comisi&oacute;n por mayor&iacute;a de dos tercios de sus miembros puede exigir la dimisi&oacute;n de un Comisario.";
 choices[72][2] = "El Presidente, sin necesidad de contar con la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[72][3] = "&Uacute;nicamente el Presidente del Consejo puede exigir la dimisi&oacute;n de un Comisario.";
 answers[72] = choices[72][0];
 units[72] = "5";
 comments[72] = "Id Pregunta: 319. UNION EUROPEA";


//  Id pregunta: 339 Año de creación de pregunta: 2016
 questions[73]= "74)  La presidencia del Consejo se ejerce de forma rotatoria cada:";
 choices[73]= new Array();
 choices[73][0] = "4 meses seg&uacute;n un orden fijado por unanimidad del Consejo.";
 choices[73][1] = "6 meses seg&uacute;n un orden fijado por unanimidad del Consejo.";
 choices[73][2] = "4 meses seg&uacute;n un orden fijado por mayor&iacute;a cualificada del Consejo.";
 choices[73][3] = "6 meses seg&uacute;n un orden fijado por mayor&iacute;a cualificada del Consejo.";
 answers[73] = choices[73][1];
 units[73] = "5";
 comments[73] = "Id Pregunta: 339. UNION EUROPEA";


//  Id pregunta: 820 Año de creación de pregunta: 2016
 questions[74]= "75)  Respecto a los servicios territoriales es correcto:";
 choices[74]= new Array();
 choices[74][0] = "la organizaci&oacute;n de los servicios territoriales no integrados en las Delegaciones del Gobierno se establecer&aacute; mediante Real Decreto";
 choices[74][1] = "los servicios territoriales no integrados depender&aacute;n del Delegado del Gobierno, o en su caso Subdelegado del Gobierno, a trav&eacute;s de la Secretar&iacute;a General";
 choices[74][2] = "los servicios territoriales integrados depender&aacute;n del &oacute;rgano central competente sobre el sector de actividad en el que aqu&eacute;llos operen";
 choices[74][3] = "ninguna es correcta";
 answers[74] = choices[74][0];
 units[74] = "4, 7, 8, 9";
 comments[74] = "Id Pregunta: 820. Ley 40/2015";


