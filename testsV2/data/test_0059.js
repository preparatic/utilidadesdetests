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

//  Id pregunta: 562 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes per&iacute;odos puede considerarse de crecimiento econ&oacute;mico en Espa&ntilde;a?";
 choices[0]= new Array();
 choices[0][0] = "Entre 1973 y 1978";
 choices[0][1] = "Entre 1992 y 1996";
 choices[0][2] = "Entre 1978 y 1985";
 choices[0][3] = "Entre 2008 y 2013";
 answers[0] = choices[0][2];
 units[0] = "12";
 comments[0] = "Id Pregunta: 562. Modelo econ&oacute;mico";


//  Id pregunta: 540 Año de creación de pregunta: 2016
 questions[1]= "2)  Respecto a los poderes que se inscriban en los registros electr&oacute;nicos generales y particulares de apoderamientos pueden ser:";
 choices[1]= new Array();
 choices[1][0] = "un poder general para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa y ante cualquier Administraci&oacute;n";
 choices[1][1] = "un poder para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa ante una Administraci&oacute;n u Organismo concreto";
 choices[1][2] = "un poder para que el apoderado pueda actuar en nombre del poderdante &uacute;nicamente para la realizaci&oacute;n de determinados tr&aacute;mites especificados en el poder";
 choices[1][3] = "todas son correctas";
 answers[1] = choices[1][3];
 units[1] = "7";
 comments[1] = "Id Pregunta: 540. LEY 39/2015";


//  Id pregunta: 88 Año de creación de pregunta: 2016
 questions[2]= "3)  Seg&uacute;n la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3, &iquest;qu&eacute; tipo de diagrama tiene como objetivo principal la representaci&oacute;n de los aspectos est&aacute;ticos del sistema utilizando diversos mecanismos de abstracci&oacute;n?";
 choices[2]= new Array();
 choices[2][0] = "Diagrama de clases";
 choices[2][1] = "Diagrama de componentes";
 choices[2][2] = "Diagrama de estructura";
 choices[2][3] = "Diagrama de paquetes";
 answers[2] = choices[2][0];
 units[2] = "91";
 comments[2] = "Id Pregunta: 88. AGE A1 2015";


//  Id pregunta: 712 Año de creación de pregunta: 2016
 questions[3]= "4)  Seg&uacute;n la Ley 19/2013 de transparencia, las unidades de informaci&oacute;n en el &aacute;mbito de la AGE (se&ntilde;ale la falsa):";
 choices[3]= new Array();
 choices[3][0] = "Son unidades especializadas que se encargan de recibir y dar tramitaci&oacute;n a las solicitudes de acceso a la informaci&oacute;n.";
 choices[3][1] = "Son unidades especializadas que aseguran la disponibilidad en la respectiva p&aacute;gina web o sede electr&oacute;nica de la informaci&oacute;n cuyo acceso se solicita con m&aacute;s frecuencia.";
 choices[3][2] = "La Oficina de Transparencia y Acceso a la Informaci&oacute;n P&uacute;blica es la unidad de informaci&oacute;n del Ministerio de la Presidencia.";
 choices[3][3] = "Son unidades especializadas en elaborar legislaci&oacute;n en el &aacute;mbito de la transparencia p&uacute;blica.";
 answers[3] = choices[3][3];
 units[3] = "22";
 comments[3] = "Id Pregunta: 712. Ley de transparencia";


//  Id pregunta: 667 Año de creación de pregunta: 2016
 questions[4]= "5)  Se&ntilde;ale la opci&oacute;n falsa respecto a la instrucci&oacute;n del procedimiento definida en la Ley 39/2015:";
 choices[4]= new Array();
 choices[4][0] = "Los interesados podr&aacute;n, en cualquier momento del procedimiento anterior al tr&aacute;mite de audiencia, aducir alegaciones y aportar documentos u otros elementos de juicio.";
 choices[4][1] = "El instructor del procedimiento s&oacute;lo podr&aacute; rechazar las pruebas propuestas por los interesados cuando sean manifiestamente improcedentes o innecesarias, mediante resoluci&oacute;n motivada.";
 choices[4][2] = "Salvo disposici&oacute;n expresa en contrario, los informes ser&aacute;n preceptivos y vinculantes.";
 choices[4][3] = "Se podr&aacute; prescindir del tr&aacute;mite de audiencia cuando no figuren en el procedimiento ni sean tenidos en cuenta en la resoluci&oacute;n otros hechos ni otras alegaciones y pruebas que las aducidas por el interesado.";
 answers[4] = choices[4][2];
 units[4] = "7";
 comments[4] = "Id Pregunta: 667. Cap&iacute;tulo IV, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 841 Año de creación de pregunta: 2016
 questions[5]= "6)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[5]= new Array();
 choices[5][0] = "De cada sesi&oacute;n que celebre el &oacute;rgano colegiado se levantar&aacute; acta por el Secretario, que especificar&aacute; necesariamente los asistentes, el orden del d&iacute;a de la reuni&oacute;n, las circunstancias del lugar y tiempo en que se ha celebrado, los puntos principales de las deliberaciones, as&iacute; como el contenido de los acuerdos adoptados.";
 choices[5][1] = "Podr&aacute;n grabarse las sesiones que celebre el &oacute;rgano colegiado. El fichero resultante de la grabaci&oacute;n, junto con la certificaci&oacute;n expedida por el Secretario de la autenticidad e integridad del mismo, y cuantos documentos en soporte electr&oacute;nico se utilizasen como documentos de la sesi&oacute;n, podr&aacute;n acompa&ntilde;ar al acta de las sesiones, sin necesidad de hacer constar en ella los puntos principales de las deliberaciones.";
 choices[5][2] = "El acta de cada sesi&oacute;n podr&aacute; aprobarse en la misma reuni&oacute;n o en una reuni&oacute;n posterior. El Secretario elaborar&aacute; el acta con el visto bueno del Presidente y lo remitir&aacute; a trav&eacute;s de medios electr&oacute;nicos, a los miembros del &oacute;rgano colegiado, quienes podr&aacute;n manifestar por los mismos medios su conformidad o reparos al texto, a efectos de su aprobaci&oacute;n, consider&aacute;ndose, en caso afirmativo, aprobada en la misma reuni&oacute;n.";
 choices[5][3] = "Cuando se hubiese optado por la grabaci&oacute;n de las sesiones celebradas o por la utilizaci&oacute;n de documentos en soporte electr&oacute;nico, deber&aacute;n conservarse de forma que se garantice la integridad y autenticidad de los ficheros electr&oacute;nicos correspondientes y el acceso a los mismos por parte de los miembros del &oacute;rgano colegiado.";
 answers[5] = choices[5][2];
 units[5] = "4, 7, 8, 9";
 comments[5] = "Id Pregunta: 841. Ley 40/2015";


//  Id pregunta: 235 Año de creación de pregunta: 2016
 questions[6]= "7)  El Art&iacute;culo 108 de la Constituci&oacute;n Espa&ntilde;ola establece que el Gobierno responde solidariamente de su gesti&oacute;n pol&iacute;tica ante:";
 choices[6]= new Array();
 choices[6][0] = "El Jefe del Estado.";
 choices[6][1] = "El Tribunal Constitucional.";
 choices[6][2] = "El Congreso de los Diputados.";
 choices[6][3] = "Las Cortes Generales.";
 answers[6] = choices[6][0];
 units[6] = "1";
 comments[6] = "Id Pregunta: 235. CONSTITUCION1978";


//  Id pregunta: 696 Año de creación de pregunta: 2016
 questions[7]= "8)  Se&ntilde;ale el que corresponde a un principio de integraci&oacute;n continua:";
 choices[7]= new Array();
 choices[7][0] = "Migraci&oacute;n manual y controlada a cada entorno de desarrollo";
 choices[7][1] = "Mantener un repositorio de c&oacute;digo.";
 choices[7][2] = "Reutilizaci&oacute;n de interfaces de usuario.";
 choices[7][3] = "Todos corresponden a principios de integraci&oacute;n continua.";
 answers[7] = choices[7][1];
 units[7] = "92";
 comments[7] = "Id Pregunta: 696. INTEGRACION CONTINUA";


//  Id pregunta: 114 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Qu&eacute; es la Garant&iacute;a Juvenil?";
 choices[8]= new Array();
 choices[8][0] = "Una iniciativa europea que pretende facilitar el acceso de los j&oacute;venes al mercado de trabajo ofreci&eacute;ndoles una oferta de empleo, de educaci&oacute;n o formaci&oacute;n tras haber finalizado sus estudios o quedar desempleados";
 choices[8][1] = "Un Plan que permite la concesi&oacute;n de subvenciones a j&oacute;venes para facilitar el alquiler de su vivienda habitual.";
 choices[8][2] = "Un Plan que concede cr&eacute;ditos en condiciones ventajosas a j&oacute;venes emprendedores";
 choices[8][3] = "Una inciativa europea que facilita a los j&oacute;venes el acceso a las nuevas tecnolog&iacute;as";
 answers[8] = choices[8][0];
 units[8] = "15";
 comments[8] = "Id Pregunta: 114. ";


//  Id pregunta: 611 Año de creación de pregunta: 2016
 questions[9]= "10)  Una de las caracter&iacute;sticas de seguridad en SQL Server 2008 es el cifrado transparente de datos. Se&ntilde;ala la afirmaci&oacute;n correcta:";
 choices[9]= new Array();
 choices[9][0] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de registro.";
 choices[9][1] = "SQL Server ofrece la capacidad de buscar dentro de los datos cifrados.";
 choices[9][2] = "Para trabajar con datos cifrados utilizando esta caracter&iacute;stica hay que introducir cambios en las aplicaciones.";
 choices[9][3] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de datos.";
 answers[9] = choices[9][1];
 units[9] = "63";
 comments[9] = "Id Pregunta: 611. Junta de Extremadura A1 2015";


//  Id pregunta: 439 Año de creación de pregunta: 2016
 questions[10]= "11)  Sobre el Sistema de Interconexi&oacute;n de Registros (SIR):";
 choices[10]= new Array();
 choices[10][0] = "Es la infraestructura b&aacute;sica que permite el intercambio de asientos electr&oacute;nicos de registro entre los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[10][1] = "Permite eliminar el tr&aacute;nsito de papel entre administraciones, aumentando la eficiencia y eliminando los costes de manipulaci&oacute;n y remisi&oacute;n del papel, gracias a la generaci&oacute;n de copias aut&eacute;nticas electr&oacute;nicas de la documentaci&oacute;n presentada en los asientos de registro.";
 choices[10][2] = "No es necesario que la aplicaci&oacute;n de registro est&eacute; certificada con la norma SICRES 3.0.";
 choices[10][3] = "La integraci&oacute;n en SIR se realiza mediante aplicaciones de registro comunes como GEISER y ORVE o bien, siempre que se justifique, mediante aplicaciones previamente certificadas por la Comisi&oacute;n de Estrategia TIC.";
 answers[10] = choices[10][1];
 units[10] = "43";
 comments[10] = "Id Pregunta: 439. SERVICIOS COMUNES";


//  Id pregunta: 656 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Qu&eacute; aplicativo se suele usar como herramienta administrativa para el control de los nodos dentro del ecosistema BidData?";
 choices[11]= new Array();
 choices[11][0] = "Cassandra";
 choices[11][1] = "Riak";
 choices[11][2] = "Avro";
 choices[11][3] = "Zookeeper";
 answers[11] = choices[11][3];
 units[11] = "73";
 comments[11] = "Id Pregunta: 656. ";


//  Id pregunta: 185 Año de creación de pregunta: 2016
 questions[12]= "13)  Se&ntilde;ale cu&aacute;l de las siguientes funciones NO est&aacute; atribuida constitucionalmente al Rey:";
 choices[12]= new Array();
 choices[12][0] = "El mando supremo de las Fuerzas Armadas.";
 choices[12][1] = "Autorizar indultos generales.";
 choices[12][2] = "Sancionar las leyes.";
 choices[12][3] = "Promulgar las leyes.";
 answers[12] = choices[12][1];
 units[12] = "1";
 comments[12] = "Id Pregunta: 185. CONSTITUCION1978";


//  Id pregunta: 33 Año de creación de pregunta: 2016
 questions[13]= "14)  Respecto al desarrollo empleando tecnolog&iacute;a Microsoft, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[13]= new Array();
 choices[13][0] = "WINAPI (Windows API) permite un acceso a alto nivel del sistema, directamente usable en cualquier lenguaje y entorno de programaci&oacute;n.";
 choices[13][1] = "El framework .NET se compone de una biblioteca de clases denominada FCL (Framework Class Library) y del entorno com&uacute;n de ejecuci&oacute;n CLR (Common Language Runtime).";
 choices[13][2] = "En .NET el resultado de la compilaci&oacute;n de las aplicaciones es un m&oacute;dulo ensamblado en formato de fichero PE32 o PE32+ (Windows portable executable) directamente ejecutable sobre el hardware.";
 choices[13][3] = "Los compiladores para CLR producen c&oacute;digo FL (Final Language) denominado c&oacute;digo administrado.";
 answers[13] = choices[13][1];
 units[13] = "63";
 comments[13] = "Id Pregunta: 33. AGE A1 2015";


//  Id pregunta: 492 Año de creación de pregunta: 2016
 questions[14]= "15)  El R&eacute;gimen Jur&iacute;dico de la Deuda del Estado se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[14]= new Array();
 choices[14][0] = "T&iacute;tulo V, Cap&iacute;tulo II, Secci&oacute;n 4.";
 choices[14][1] = "T&iacute;tulo V, Cap&iacute;tulo I, Secci&oacute;n 2.";
 choices[14][2] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[14][3] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[14] = choices[14][2];
 units[14] = "10";
 comments[14] = "Id Pregunta: 492. PRESUPUESTOS GENERALES";


//  Id pregunta: 578 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Qui&eacute;n elabor&oacute; y aprob&oacute; la Estrategia TIC?.";
 choices[15]= new Array();
 choices[15][0] = "Fue elaborada y aprobada por la CETIC";
 choices[15][1] = "Fue elaborada por la CETIC y aprobada por el gobierno";
 choices[15][2] = "Fue elaborada por el gobierno y aprobada por la CETIC";
 choices[15][3] = "Fue elaborada por la CETIC y aprobada por el MAFP (Ministerio de Administraciones y Funci&oacute;n P&uacute;blica)";
 answers[15] = choices[15][1];
 units[15] = "19";
 comments[15] = "Id Pregunta: 578. Estrategia TIC";


//  Id pregunta: 747 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Cu&aacute;les de los siguientes principios de inspiraci&oacute;n en la funci&oacute;n gerencial NO incorpora la Ley 40/2015?";
 choices[16]= new Array();
 choices[16][0] = "Buena fe, confianza leg&iacute;tima y lealtad institucional.";
 choices[16][1] = "Calidad de los servicios p&uacute;blicos";
 choices[16][2] = "Responsabilidad por la gesti&oacute;n p&uacute;blica.";
 choices[16][3] = "Servicio efectivo a los ciudadanos";
 answers[16] = choices[16][1];
 units[16] = "18, 20";
 comments[16] = "Id Pregunta: 747. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 792 Año de creación de pregunta: 2016
 questions[17]= "18)  Tienen la condici&oacute;n de alto cargo:";
 choices[17]= new Array();
 choices[17][0] = "los &oacute;rganos superiores";
 choices[17][1] = "los &oacute;rganos superiores y directivos";
 choices[17][2] = "los &oacute;rganos superiores y directivos, excepto los Subdirectores generales y asimilados";
 choices[17][3] = "los &oacute;rganos superiores y directivos, excepto los Secretarios generales y asimilados";
 answers[17] = choices[17][2];
 units[17] = "4, 7, 8, 9";
 comments[17] = "Id Pregunta: 792. Ley 40/2015";


//  Id pregunta: 158 Año de creación de pregunta: 2016
 questions[18]= "19)  Seg&uacute;n la ley 39/2015, cuando la notificaci&oacute;n por medios electr&oacute;nicos sea de car&aacute;cter obligatorio, o haya sido expresamente elegida por el interesado:";
 choices[18]= new Array();
 choices[18][0] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[18][1] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[18][2] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[18][3] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 answers[18] = choices[18][1];
 units[18] = "7";
 comments[18] = "Id Pregunta: 158. Ley 39/2015, Art&iacute;culo 43";


//  Id pregunta: 426 Año de creación de pregunta: 2016
 questions[19]= "20)  La aprobaci&oacute;n de convocatorias de pruebas selectivas para el acceso al empleo p&uacute;blico deber&aacute; acompa&ntilde;arse de:";
 choices[19]= new Array();
 choices[19][0] = "Un plan de igualdad.";
 choices[19][1] = "Un informe de impacto de g&eacute;nero.";
 choices[19][2] = "Un programa de igualdad.";
 choices[19][3] = "Todas son correctas.";
 answers[19] = choices[19][1];
 units[19] = "14";
 comments[19] = "Id Pregunta: 426. POLITICAS DE IGUALDAD";


//  Id pregunta: 670 Año de creación de pregunta: 2016
 questions[20]= "21)  Respecto a la ejecuci&oacute;n de la resoluci&oacute;n de un procedimiento administrativo, se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[20]= new Array();
 choices[20][0] = "Las Administraciones P&uacute;blicas no iniciar&aacute;n la ejecuci&oacute;n hasta que se haya dictado resoluci&oacute;n.";
 choices[20][1] = "De una resoluci&oacute;n administrativa nunca puede derivarse una multa.";
 choices[20][2] = "La ejecuci&oacute;n forzosa de una resoluci&oacute;n puede afectar al patrimonio.";
 choices[20][3] = "Contra algunas resoluciones es posible interponer recursos por v&iacute;a administrativa.";
 answers[20] = choices[20][1];
 units[20] = "7";
 comments[20] = "Id Pregunta: 670. Cap&iacute;tulo VII, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 149 Año de creación de pregunta: 2016
 questions[21]= "22)  Seg&uacute;n establece la Ley 39/2015, las Administraciones P&uacute;blicas har&aacute;n p&uacute;blico un Plan Normativo que:";
 choices[21]= new Array();
 choices[21][0] = "Contendr&aacute; las iniciativas legales y reglamentarias que hayan sido aprobadas en el a&ntilde;o en curso y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[21][1] = "Contendr&aacute; exclusivamente las iniciativas legales que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[21][2] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[21][3] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Bolet&iacute;n Oficial de la Administraci&oacute;n P&uacute;blica correspondiente";
 answers[21] = choices[21][2];
 units[21] = "7";
 comments[21] = "Id Pregunta: 149. Ley 39/2015, Art&iacute;culo 132";


//  Id pregunta: 630 Año de creación de pregunta: 2016
 questions[22]= "23)  Seg&uacute;n el Reglamento de Medidas de Seguridad de Ficheros Automatizados con Datos de Car&aacute;cter Personal, los ficheros que contengan datos de ideolog&iacute;a, religi&oacute;n, creencias, origen racial, salud o vida sexual, &iquest;qu&eacute; medidas de seguridad deber&aacute;n adoptar?";
 choices[22]= new Array();
 choices[22][0] = "De nivel b&aacute;sico y nivel medio.";
 choices[22][1] = "De nivel alto.";
 choices[22][2] = "De nivel medio y nivel alto.";
 choices[22][3] = "De nivel b&aacute;sico, nivel medio y nivel alto.";
 answers[22] = choices[22][3];
 units[22] = "35";
 comments[22] = "Id Pregunta: 630. Junta de Extremadura A1 2015";


//  Id pregunta: 507 Año de creación de pregunta: 2016
 questions[23]= "24)  De acuerdo con el art&iacute;culo 32 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, en el supuesto de que la liquidaci&oacute;n presupuestaria del Estado se sit&uacute;e en super&aacute;vit, &eacute;ste debe destinarse a:";
 choices[23]= new Array();
 choices[23][0] = "Reducir el gasto p&uacute;blico.";
 choices[23][1] = "Reducir el d&eacute;ficit presupuestario.";
 choices[23][2] = "Reducir el endeudamiento neto.";
 choices[23][3] = "Al Fondo de Contingencia.";
 answers[23] = choices[23][2];
 units[23] = "10";
 comments[23] = "Id Pregunta: 507. PRESUPUESTOS GENERALES";


//  Id pregunta: 109 Año de creación de pregunta: 2016
 questions[24]= "25)  Big Data:";
 choices[24]= new Array();
 choices[24][0] = "Solo aplica a datos generados m&aacute;quina a m&aacute;quina (M2M)";
 choices[24][1] = "No puede emplearse para tratar datos no estructurados";
 choices[24][2] = "Suele utilizar tecnolog&iacute;as relacionales a la hora de analizar los datos";
 choices[24][3] = "Ninguna de las anteriores";
 answers[24] = choices[24][3];
 units[24] = "73";
 comments[24] = "Id Pregunta: 109. ";


//  Id pregunta: 62 Año de creación de pregunta: 2016
 questions[25]= "26)  El art&iacute;culo 102 del Real Decreto 1720/2007, por el que se determina la conservaci&oacute;n de una copia de respaldo de los datos y de los procedimientos de recuperaci&oacute;n de los mismos en un lugar diferente de aquel en que se encuentren los equipos inform&aacute;ticos que los tratan, &iquest;a qu&eacute; nivel o niveles de medidas de seguridad es aplicable?";
 choices[25]= new Array();
 choices[25][0] = "B&aacute;sico";
 choices[25][1] = "Medio";
 choices[25][2] = "Alto";
 choices[25][3] = "A los niveles medio y alto";
 answers[25] = choices[25][2];
 units[25] = "35";
 comments[25] = "Id Pregunta: 62. AGE A1 2015";


//  Id pregunta: 384 Año de creación de pregunta: 2016
 questions[26]= "27)  De conformidad con lo establecido en la Org&aacute;nica 3/2007 para la igualdad efectiva entre mujeres y hombres, los &oacute;rganos de contrataci&oacute;n podr&aacute;n establecer en los pliegos de cl&aacute;usulas administrativas particulares la preferencia, en igualdad de condiciones jur&iacute;dicas y econ&oacute;micas, en la adjudicaci&oacute;n de los contratos de las proposiciones presentadas por aquellas empresas que:";
 choices[26]= new Array();
 choices[26][0] = "Sean dirigidas por mujeres";
 choices[26][1] = "Cuenten con un colectivo paritario de trabajadores y trabajadoras";
 choices[26][2] = "Incluyan en su proposici&oacute;n para ejecutar el contrato medidas para promover la igualdad efectiva entre mujeres y hombres";
 choices[26][3] = "Fomenten el acceso de las mujeres a puestos directivos.";
 answers[26] = choices[26][2];
 units[26] = "14";
 comments[26] = "Id Pregunta: 384. POLITICAS DE IGUALDAD";


//  Id pregunta: 69 Año de creación de pregunta: 2016
 questions[27]= "28)  Los contratos que celebren los poderes adjudicadores se perfeccionan con su:";
 choices[27]= new Array();
 choices[27][0] = "Ejecuci&oacute;n";
 choices[27][1] = "Adjudicaci&oacute;n";
 choices[27][2] = "Licitaci&oacute;n";
 choices[27][3] = "Formalizaci&oacute;n";
 answers[27] = choices[27][3];
 units[27] = "37";
 comments[27] = "Id Pregunta: 69. AGE A1 2015";


//  Id pregunta: 622 Año de creación de pregunta: 2016
 questions[28]= "29)  Qu&eacute; nombre reciben las unidades de almacenamieto de las que est&aacute; compuesta un documento XML?";
 choices[28]= new Array();
 choices[28][0] = "Entradas (entities).";
 choices[28][1] = "Atributos (attribs).";
 choices[28][2] = "M&oacute;dulos (modules).";
 choices[28][3] = "Objetos (objects).";
 answers[28] = choices[28][0];
 units[28] = "74";
 comments[28] = "Id Pregunta: 622. Junta de Extremadura A1 2015";


//  Id pregunta: 700 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Cu&aacute;l de los siguientes NO es un repositorio de c&oacute;digo?";
 choices[29]= new Array();
 choices[29][0] = "CVS";
 choices[29][1] = "SVN";
 choices[29][2] = "Team Foundation Server";
 choices[29][3] = "Apache Tomcat";
 answers[29] = choices[29][3];
 units[29] = "92";
 comments[29] = "Id Pregunta: 700. INTEGRACION CONTINUA";


//  Id pregunta: 165 Año de creación de pregunta: 2016
 questions[30]= "31)  Como parte del Plan de acci&oacute;n sobre administraci&oacute;n electr&oacute;nica para 2010-2020, la Comisi&oacute;n:";
 choices[30]= new Array();
 choices[30][0] = "Tratar&aacute; de interconectar los registros mercantiles en toda la UE.";
 choices[30][1] = "Se adoptar&aacute;n nuevas normas en materia de telecomunicaciones";
 choices[30][2] = "Se revisar&aacute; la Directiva de servicios de comunicaci&oacute;n audiovisual existente para adaptarse a la evoluci&oacute;n tecnol&oacute;gica";
 choices[30][3] = "Se actualizar&aacute;n las normas de comercio electr&oacute;nico";
 answers[30] = choices[30][0];
 units[30] = "19";
 comments[30] = "Id Pregunta: 165. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/";


//  Id pregunta: 180 Año de creación de pregunta: 2016
 questions[31]= "32)  Se&ntilde;ale la afirmaci&oacute;n correcta de acuerdo con la regulaci&oacute;n que contiene el Art&iacute;culo 116 de la Constituci&oacute;n Espa&ntilde;ola de los estados de alarma, excepci&oacute;n y sitio:";
 choices[31]= new Array();
 choices[31][0] = "el estado de sitio ser&aacute; declarado por la mayor&iacute;a absoluta del Congreso de los Diputados, a propuesta exclusiva del Gobierno.";
 choices[31][1] = "El estado de excepci&oacute;n ser&aacute; declarado por el Gobierno mediante Acuerdo de Ministros, previa autorizaci&oacute;n del Senado.";
 choices[31][2] = "El estado de alarma ser&aacute; declarado por la mayor&iacute;a simple del Congreso de los Diputados, a propuesta exclusiva del Gobierno.";
 choices[31][3] = "La declaraci&oacute;n de los estados de alarma, excepci&oacute;n y sitio s&iacute; modificar&aacute;n el principio de responsabilidad del Gobierno y de sus agentes reconocidos en la CE y en las leyes.";
 answers[31] = choices[31][0];
 units[31] = "1";
 comments[31] = "Id Pregunta: 180. CONSTITUCION1978";


//  Id pregunta: 142 Año de creación de pregunta: 2016
 questions[32]= "33)  El plazo para la interposici&oacute;n del recurso de alzada ser&aacute;:";
 choices[32]= new Array();
 choices[32][0] = "De un mes si el acto fuera presunto";
 choices[32][1] = "De un mes si el acto fuera expreso";
 choices[32][2] = "De un mes en cualquier caso";
 choices[32][3] = "No existe un plazo m&aacute;ximo para la interposici&oacute;n de un recurso de alzada";
 answers[32] = choices[32][1];
 units[32] = "8";
 comments[32] = "Id Pregunta: 142. Ley 39/2015, Art&iacute;culo 122";


//  Id pregunta: 239 Año de creación de pregunta: 2016
 questions[33]= "34)  Respecto de las relaciones que constitucionalmente se regulan entre los miembros del Gobierno y las Cortes Generales:";
 choices[33]= new Array();
 choices[33][0] = "La comparecencia de los miembros del Gobierno ante las C&aacute;maras y sus Comisiones puede extenderse tambi&eacute;n a los funcionarios de sus Departamentos.";
 choices[33][1] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo solicitasen las propias C&aacute;maras o sus Comisiones.";
 choices[33][2] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo deciden los miembros del Gobierno.";
 choices[33][3] = "Los funcionarios no comparecer&aacute;n en ning&uacute;n caso.";
 answers[33] = choices[33][0];
 units[33] = "1";
 comments[33] = "Id Pregunta: 239. CONSTITUCION1978";


//  Id pregunta: 208 Año de creación de pregunta: 2016
 questions[34]= "35)  La direcci&oacute;n de la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado corresponde a:";
 choices[34]= new Array();
 choices[34][0] = "El Rey.";
 choices[34][1] = "El Jefe del Estado.";
 choices[34][2] = "El Gobierno.";
 choices[34][3] = "El Presidente del Gobierno.";
 answers[34] = choices[34][2];
 units[34] = "1";
 comments[34] = "Id Pregunta: 208. CONSTITUCION1978";


//  Id pregunta: 8 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Cu&aacute;l de las siguientes NO es una funci&oacute;n de la Secretar&iacute;a General de Administraci&oacute;n Digital?";
 choices[35]= new Array();
 choices[35][0] = "Establecer los mecanismos que aseguren un adecuado mantenimiento del censo de activos TIC.";
 choices[35][1] = "El estudio y la implementaci&oacute;n de modelos para incentivar la compartici&oacute;n y reutilizaci&oacute;n de las infraestructuras y aplicaciones sectoriales, y promover el desarrollo de aplicaciones bajo dicho modelo.";
 choices[35][2] = "La supervisi&oacute;n y coordinaci&oacute;n del registro de convenios del sector p&uacute;blico estatal, de acuerdo con la informaci&oacute;n que deber&aacute;n suministrar los diferentes departamentos ministeriales y dem&aacute;s organismos p&uacute;blicos suscriptores de los mismos.";
 choices[35][3] = "El desarrollo, impulso e implantaci&oacute;n de sistemas tecnol&oacute;gicos de apoyo para la gesti&oacute;n de recursos humanos, incluidos los sistemas del Registro Central de Personal.";
 answers[35] = choices[35][2];
 units[35] = "26";
 comments[35] = "Id Pregunta: 8. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 793 Año de creación de pregunta: 2016
 questions[36]= "37)  Todos los &oacute;rganos de la Administraci&oacute;n General del Estado que no sean &oacute;rgano superior o directivo se encuentran bajo la dependencia o direcci&oacute;n de:";
 choices[36]= new Array();
 choices[36][0] = "un &oacute;rgano superior";
 choices[36][1] = "un &oacute;rgano directivo";
 choices[36][2] = "un &oacute;rgano superior o directivo";
 choices[36][3] = "ninguna es correcta";
 answers[36] = choices[36][2];
 units[36] = "4, 7, 8, 9";
 comments[36] = "Id Pregunta: 793. Ley 40/2015";


//  Id pregunta: 609 Año de creación de pregunta: 2016
 questions[37]= "38)  Dentro de las t&eacute;cnicas de clasificaci&oacute;n de datos tenemos los m&eacute;todos de clasificaci&oacute;n interna. &iquest;A qu&eacute; tipo de algoritmo de ordenaci&oacute;n o clasificaci&oacute;n pertenece el m&eacute;todo de la burbuja?";
 choices[37]= new Array();
 choices[37][0] = "Clasificaci&oacute;n por inserci&oacute;n.";
 choices[37][1] = "Clasificaci&oacute;n por cuenta.";
 choices[37][2] = "Clasificaci&oacute;n por selecci&oacute;n.";
 choices[37][3] = "Clasificaci&oacute;n por intercambio.";
 answers[37] = choices[37][3];
 units[37] = "56";
 comments[37] = "Id Pregunta: 609. Junta de Extremadura A1 2015";


//  Id pregunta: 116 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Cu&aacute;l de las siguientes es una pol&iacute;tica pasiva de empleo?";
 choices[38]= new Array();
 choices[38][0] = "La organizaci&oacute;n de cursos de formaci&oacute;n gratuitos para desempleados";
 choices[38][1] = "La intermediaci&oacute;n en el mercado laboral, es decir, recoger las ofertas de trabajo y cruzarlas con las demandas.";
 choices[38][2] = "Adecuar los planes de estudio a la realidad laboral";
 choices[38][3] = "El pago de subsidios a parados";
 answers[38] = choices[38][3];
 units[38] = "15";
 comments[38] = "Id Pregunta: 116. ";


//  Id pregunta: 478 Año de creación de pregunta: 2016
 questions[39]= "40)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la funci&oacute;n interventora se ejercer&aacute; en sus modalidades de:";
 choices[39]= new Array();
 choices[39][0] = "Intervenci&oacute;n f&iacute;sica y general.";
 choices[39][1] = "Intervenci&oacute;n formal y material.";
 choices[39][2] = "Intervenci&oacute;n f&iacute;sica y material.";
 choices[39][3] = "Intervenci&oacute;n formal y general.";
 answers[39] = choices[39][1];
 units[39] = "10";
 comments[39] = "Id Pregunta: 478. PRESUPUESTOS GENERALES";


//  Id pregunta: 730 Año de creación de pregunta: 2016
 questions[40]= "41)  Cu&aacute;l de las siguientes caracter&iacute;sticas es especifican de Kanban:";
 choices[40]= new Array();
 choices[40][0] = "Se definen iteraciones";
 choices[40][1] = "Se limitan las tareas que se pueden realizar por fase";
 choices[40][2] = "Los miembros del equipo no tienen un rol especifico";
 choices[40][3] = "Todas las anteriores son caracter&iacute;sticas de la metodolog&iacute;a Kanban.";
 answers[40] = choices[40][1];
 units[40] = "34, 84";
 comments[40] = "Id Pregunta: 730. Metodologias &aacute;giles";


//  Id pregunta: 337 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;De cu&aacute;ntos diputados se compone el Parlamento Europeo?:";
 choices[41]= new Array();
 choices[41][0] = "732";
 choices[41][1] = "626";
 choices[41][2] = "786";
 choices[41][3] = "360";
 answers[41] = choices[41][2];
 units[41] = "5";
 comments[41] = "Id Pregunta: 337. UNION EUROPEA";


//  Id pregunta: 824 Año de creación de pregunta: 2016
 questions[42]= "43)  Podr&aacute;n ordenarle que se abstengan de toda intervenci&oacute;n en el expediente al funcionario que se encuentre en causa de abstenci&oacute;n...";
 choices[42]= new Array();
 choices[42][0] = "Los &oacute;rganos jer&aacute;rquicamente superiores";
 choices[42][1] = "S&oacute;lo los &oacute;rganos inmediatamente superiores jer&aacute;rquicos";
 choices[42][2] = "Los interesados en el procedimiento";
 choices[42][3] = "Las alternativas b) y c) son correctas";
 answers[42] = choices[42][1];
 units[42] = "4, 7, 8, 9";
 comments[42] = "Id Pregunta: 824. Ley 40/2015";


//  Id pregunta: 315 Año de creación de pregunta: 2016
 questions[43]= "44)  El Colegio de Comisarios se re&uacute;ne:";
 choices[43]= new Array();
 choices[43][0] = "Una vez por semana.";
 choices[43][1] = "Una vez al mes.";
 choices[43][2] = "Dos veces en semana.";
 choices[43][3] = "Cuando lo acuerde el Presidente de la Comisi&oacute;n, y adem&aacute;s una vez al mes.";
 answers[43] = choices[43][0];
 units[43] = "5";
 comments[43] = "Id Pregunta: 315. UNION EUROPEA";


//  Id pregunta: 768 Año de creación de pregunta: 2016
 questions[44]= "45)  Las Administraciones P&uacute;blicas sirven con objetividad los intereses generales, con sometimiento pleno a la Constituci&oacute;n, a la Ley y al Derecho y act&uacute;an de acuerdo con los principios de:";
 choices[44]= new Array();
 choices[44][0] = "eficacia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[44][1] = "eficiencia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 choices[44][2] = "eficacia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[44][3] = "eficiencia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 answers[44] = choices[44][2];
 units[44] = "4, 7, 8, 9";
 comments[44] = "Id Pregunta: 768. Ley 40/2015";


//  Id pregunta: 221 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[45]= new Array();
 choices[45][0] = "De los derechos y deberes fundamentales.";
 choices[45][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[45][2] = "Derechos y libertades.";
 choices[45][3] = "De la Corona.";
 answers[45] = choices[45][0];
 units[45] = "1";
 comments[45] = "Id Pregunta: 221. CONSTITUCION1978";


//  Id pregunta: 264 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Cu&aacute;ntos vocales componen el Consejo General del Poder Judicial?";
 choices[46]= new Array();
 choices[46][0] = "Veinte.";
 choices[46][1] = "Quince.";
 choices[46][2] = "Diez.";
 choices[46][3] = "Doce.";
 answers[46] = choices[46][1];
 units[46] = "1";
 comments[46] = "Id Pregunta: 264. CONSTITUCION1978";


//  Id pregunta: 661 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;Qu&eacute; tipos de nodos tiene un cl&uacute;ster Hadoop?";
 choices[47]= new Array();
 choices[47][0] = "Varios namenodes y varios datanodes por cluster";
 choices[47][1] = "varios namenodes y obligatoriamente 1 datanode por cluster";
 choices[47][2] = "1 namenode y varios datanodes por cluster";
 choices[47][3] = "1 namenode y obligatoriamente 1 datanode por cluster";
 answers[47] = choices[47][2];
 units[47] = "73";
 comments[47] = "Id Pregunta: 661. ";


//  Id pregunta: 171 Año de creación de pregunta: 2016
 questions[48]= "49)  Se&ntilde;ale la respuesta FALSA. Entre los objetivos de ISA2 se encuentra:";
 choices[48]= new Array();
 choices[48][0] = "desarrollar, mantener y promover un enfoque hol&iacute;stico hacia la interoperabilidad en la Uni&oacute;n para eliminar la fragmentaci&oacute;n en el panorama de la interoperabilidad en la Uni&oacute;n";
 choices[48][1] = "facilitar la reutilizaci&oacute;n de las soluciones de interoperabilidad por parte de las administraciones p&uacute;blicas europeas.";
 choices[48][2] = "identificar, crear y explotar soluciones de interoperabilidad que faciliten la ejecuci&oacute;n de las pol&iacute;ticas y actividades de la Uni&oacute;n";
 choices[48][3] = "eliminar la interacci&oacute;n electr&oacute;nica transfronteriza tanto entre las administraciones p&uacute;blicas europeas fomentando una cultura de ciberseguridad europea";
 answers[48] = choices[48][3];
 units[48] = "19";
 comments[48] = "Id Pregunta: 171. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Diciembre/Noticia-2015-12-09-Publicada-la-Decision-ISA2-continuidad-al-esfuerzo-asegurar-interoperabilidad-entre-AAPP-europeas.html#.WCnm1WrhDIU";


//  Id pregunta: 362 Año de creación de pregunta: 2016
 questions[49]= "50)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[49]= new Array();
 choices[49][0] = "Son actos normativos.";
 choices[49][1] = "Poseen alcance general.";
 choices[49][2] = "No son obligatorias.";
 choices[49][3] = "Son actos individuales no normativos.";
 answers[49] = choices[49][3];
 units[49] = "5";
 comments[49] = "Id Pregunta: 362. UNION EUROPEA";


//  Id pregunta: 571 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes hechos NO se produce durante la d&eacute;cada de los 70-80?";
 choices[50]= new Array();
 choices[50][0] = "Incorporaci&oacute;n de la mujer al mercado laboral";
 choices[50][1] = "Entrada en la Uni&oacute;n Europea";
 choices[50][2] = "Pactos de la Moncloa";
 choices[50][3] = "Ingreso en la ONU";
 answers[50] = choices[50][3];
 units[50] = "12";
 comments[50] = "Id Pregunta: 571. Modelo econ&oacute;mico";


//  Id pregunta: 126 Año de creación de pregunta: 2016
 questions[51]= "52)  Se&ntilde;ale la respuesta FALSA respecto a la solicitud de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/2013";
 choices[51]= new Array();
 choices[51][0] = "Transcurrido el plazo m&aacute;ximo para resolver sin que se haya dictado y notificado resoluci&oacute;n expresa se entender&aacute; que la solicitud ha sido desestimada.";
 choices[51][1] = "Las resoluciones dictadas en materia de acceso a la informaci&oacute;n p&uacute;blica son recurribles directamente ante la Jurisdicci&oacute;n Contencioso-administrativa, sin perjuicio de la posibilidad de interposici&oacute;n de la reclamaci&oacute;n potestativa prevista en el art&iacute;culo 24.";
 choices[51][2] = "El incumplimiento reiterado de la obligaci&oacute;n de resolver en plazo tendr&aacute; la consideraci&oacute;n de infracci&oacute;n grave a los efectos de la aplicaci&oacute;n a sus responsables del r&eacute;gimen disciplinario previsto en la correspondiente normativa reguladora.";
 choices[51][3] = "La resoluci&oacute;n en la que se conceda o deniegue el acceso a deber&aacute; notificarse al solicitante y a los terceros afectados que as&iacute; lo hayan solicitado en el plazo m&aacute;ximo de 15 d&iacute;as desde la recepci&oacute;n de la solicitud por el &oacute;rgano competente para resolver.";
 answers[51] = choices[51][3];
 units[51] = "22";
 comments[51] = "Id Pregunta: 126. ";


//  Id pregunta: 680 Año de creación de pregunta: 2016
 questions[52]= "53)  Seg&uacute;n el Real Decreto Ley 5/2013, de 15 de marzo, de medidas para favorecer la continuidad de la vida laboral de los trabajadores de mayor edad y promover el envejecimiento activo:";
 choices[52]= new Array();
 choices[52][0] = "La cuant&iacute;a de la pensi&oacute;n de jubilaci&oacute;n compatible con el trabajo ser&aacute; equivalente al 50 por 100 del importe resultante en el reconocimiento inicial, una vez aplicado, si procede, el l&iacute;mite m&aacute;ximo de pensi&oacute;n p&uacute;blica, o del que se est&eacute; percibiendo, en el momento de inicio de la compatibilidad con el trabajo, excluido, en todo caso, el complemento por m&iacute;nimos, cualquiera que sea la jornada laboral o la actividad que realice el pensionista.";
 choices[52][1] = "El trabajo compatible debe realizarse a tiempo parcial.";
 choices[52][2] = "Finalizada la relaci&oacute;n laboral por cuenta ajena o producido el cese en la actividad por cuenta propia, se restablecer&aacute; el percibo &iacute;ntegro de la pensi&oacute;n de jubilaci&oacute;n transcurridos 12 meses de la finalizaci&oacute;n de la relaci&oacute;n laboral.";
 choices[52][3] = "El acceso a la pensi&oacute;n podr&aacute; tener lugar hasta 5 a&ntilde;os antes de la edad que en cada caso resulte de aplicaci&oacute;n.";
 answers[52] = choices[52][0];
 units[52] = "14";
 comments[52] = "Id Pregunta: 680. Pensiones";


//  Id pregunta: 28 Año de creación de pregunta: 2016
 questions[53]= "54)  En UNIX, la llamada &ldquo;FORK&rdquo;:";
 choices[53]= new Array();
 choices[53][0] = "Controla el tiempo de ejecuci&oacute;n de un proceso.";
 choices[53][1] = "Env&iacute;a una se&ntilde;al al proceso especificado.";
 choices[53][2] = "Crea una copia del proceso que hace la llamada.";
 choices[53][3] = "Elimina el mapa de memoria del proceso que hace la llamada.";
 answers[53] = choices[53][2];
 units[53] = "57";
 comments[53] = "Id Pregunta: 28. AGE A1 2015";


//  Id pregunta: 399 Año de creación de pregunta: 2016
 questions[54]= "55)  Las medidas espec&iacute;ficas que adoptar&aacute;n los Poderes P&uacute;blicos a favor de las mujeres para corregir situaciones patentes de desigualdad de hecho con respecto a los hombres, se denominan:";
 choices[54]= new Array();
 choices[54][0] = "Acciones de discriminaci&oacute;n.";
 choices[54][1] = "Acciones positivas.";
 choices[54][2] = "Acciones negativas.";
 choices[54][3] = "Acciones neutras.";
 answers[54] = choices[54][1];
 units[54] = "14";
 comments[54] = "Id Pregunta: 399. POLITICAS DE IGUALDAD";


//  Id pregunta: 653 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Cual de las siguientes bases de datos no est&aacute; orientada a grafos?";
 choices[55]= new Array();
 choices[55][0] = "Neo4J ";
 choices[55][1] = "OrientDB ";
 choices[55][2] = "InfoGrid ";
 choices[55][3] = "SimpleDB";
 answers[55] = choices[55][3];
 units[55] = "73";
 comments[55] = "Id Pregunta: 653. ";


//  Id pregunta: 709 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Qu&eacute; ley regula el ejercicio del alto cargo de la Administraci&oacute;n General del Estado con objeto de garantizar, entre otros, que realice su actividad en m&aacute;ximas condiciones de transparencia?";
 choices[56]= new Array();
 choices[56][0] = "Ley 3/2015";
 choices[56][1] = "Ley 6/2007";
 choices[56][2] = "Ley 5/1984";
 choices[56][3] = "Ley 5/2006";
 answers[56] = choices[56][0];
 units[56] = "22";
 comments[56] = "Id Pregunta: 709. &Eacute;tica P&uacute;blica y Transparencia";


//  Id pregunta: 361 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Qu&eacute; instituci&oacute;n encarna por excelencia los intereses comunitarios?:";
 choices[57]= new Array();
 choices[57][0] = "El Consejo Europeo.";
 choices[57][1] = "El Parlamento Europeo.";
 choices[57][2] = "El Consejo.";
 choices[57][3] = "La Comisi&oacute;n.";
 answers[57] = choices[57][3];
 units[57] = "5";
 comments[57] = "Id Pregunta: 361. UNION EUROPEA";


//  Id pregunta: 411 Año de creación de pregunta: 2016
 questions[58]= "59)  Es objeto de la Ley de Igualdad efectiva de mujeres y hombres:";
 choices[58]= new Array();
 choices[58][0] = "Elaborar medidas de acci&oacute;n positiva.";
 choices[58][1] = "Hacer efectivo el derecho de igualdad de trato y de oportunidades entre mujeres y hombre.";
 choices[58][2] = "Ninguna es correcta.";
 choices[58][3] = "A y B son correctas.";
 answers[58] = choices[58][1];
 units[58] = "14";
 comments[58] = "Id Pregunta: 411. POLITICAS DE IGUALDAD";


//  Id pregunta: 307 Año de creación de pregunta: 2016
 questions[59]= "60)  Las elecciones al Parlamento Europeo tienen lugar cada:";
 choices[59]= new Array();
 choices[59][0] = "Seis a&ntilde;os.";
 choices[59][1] = "Cinco a&ntilde;os.";
 choices[59][2] = "Cuatro a&ntilde;os.";
 choices[59][3] = "Ocho a&ntilde;os.";
 answers[59] = choices[59][1];
 units[59] = "5";
 comments[59] = "Id Pregunta: 307. UNION EUROPEA";


//  Id pregunta: 420 Año de creación de pregunta: 2016
 questions[60]= "61)  La Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, recoge que deber&aacute;n elaborar y aplicar un plan de igualdad, aquellas empresas con m&aacute;s de:";
 choices[60]= new Array();
 choices[60][0] = "150 trabajadores/as.";
 choices[60][1] = "200 trabajadores/as.";
 choices[60][2] = "250 trabajadores/as.";
 choices[60][3] = "300 trabajadores/as.";
 answers[60] = choices[60][2];
 units[60] = "14";
 comments[60] = "Id Pregunta: 420. POLITICAS DE IGUALDAD";


//  Id pregunta: 482 Año de creación de pregunta: 2016
 questions[61]= "62)  De acuerdo con el art&iacute;culo 67 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, si las variaciones afectasen al volumen de endeudamiento a corto y largo plazo, ser&aacute; competencia del Consejo de Ministros cuando su importe exceda de la cuant&iacute;a de:";
 choices[61]= new Array();
 choices[61][0] = "12.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[61][1] = "13.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[61][2] = "11.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[61][3] = "10.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 answers[61] = choices[61][0];
 units[61] = "10";
 comments[61] = "Id Pregunta: 482. PRESUPUESTOS GENERALES";


//  Id pregunta: 629 Año de creación de pregunta: 2016
 questions[62]= "63)  Seg&uacute;n la Ley de Protecci&oacute;n de Datos de Car&aacute;cter Personal, no podr&aacute;n realizarse transferencias de datos de car&aacute;cter personal a pa&iacute;ses que no proporcionen un nivel de protecci&oacute;n equiparable al de esta Ley. &iquest;Qui&eacute;n se encarga de evaluar el nivel adecuado de protecci&oacute;n que ofrece el pa&iacute;s de destino de los datos?";
 choices[62]= new Array();
 choices[62][0] = "El Ministerio de Asuntos Exteriores junto con el Ministerio de Justicia.";
 choices[62][1] = "El responsable de la custodia de los datos enviados.";
 choices[62][2] = "La Agencia Europea de Cooperaci&oacute;n.";
 choices[62][3] = "La Agencia de Protecci&oacute;n de Datos.";
 answers[62] = choices[62][3];
 units[62] = "35";
 comments[62] = "Id Pregunta: 629. Junta de Extremadura A1 2015";


//  Id pregunta: 447 Año de creación de pregunta: 2016
 questions[63]= "64)  Dentro de la l&oacute;gica presupuestaria, los gastos tienen car&aacute;cter...";
 choices[63]= new Array();
 choices[63][0] = "Ejecutivo";
 choices[63][1] = "Limitativo";
 choices[63][2] = "Estimativo";
 choices[63][3] = "Progresivo";
 answers[63] = choices[63][1];
 units[63] = "10";
 comments[63] = "Id Pregunta: 447. PRESUPUESTOS GENERALES";


//  Id pregunta: 808 Año de creación de pregunta: 2016
 questions[64]= "65)  Ostentan la representaci&oacute;n ordinaria del Ministerio:";
 choices[64]= new Array();
 choices[64][0] = "los Secretarios de Estado";
 choices[64][1] = "los Ministros";
 choices[64][2] = "los Subsecretarios";
 choices[64][3] = "los Secretarios generales";
 answers[64] = choices[64][2];
 units[64] = "4, 7, 8, 9";
 comments[64] = "Id Pregunta: 808. Ley 40/2015";


//  Id pregunta: 809 Año de creación de pregunta: 2016
 questions[65]= "66)  Los Subdirectores generales:";
 choices[65]= new Array();
 choices[65][0] = "son los responsables inmediatos, bajo la supervisi&oacute;n del Secretario general o del titular del &oacute;rgano del que dependan, de la ejecuci&oacute;n de aquellos proyectos, objetivos o actividades que les sean asignados, as&iacute; como de la gesti&oacute;n ordinaria de los asuntos de la competencia de la Subdirecci&oacute;n General";
 choices[65][1] = "ser&aacute;n nombrados, respetando los principios de igualdad, m&eacute;rito y capacidad, y cesados por el Ministro, Secretario de Estado o Subsecretario del que dependan";
 choices[65][2] = "sus nombramientos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, o de otras Administraciones, cuando as&iacute; lo prevean las normas de aplicaci&oacute;n, pertenecientes al Subgrupo A2";
 choices[65][3] = "todas son correctas";
 answers[65] = choices[65][1];
 units[65] = "4, 7, 8, 9";
 comments[65] = "Id Pregunta: 809. Ley 40/2015";


//  Id pregunta: 802 Año de creación de pregunta: 2016
 questions[66]= "67)  Los Secretarios generales t&eacute;cnicos:";
 choices[66]= new Array();
 choices[66][0] = "se encuentran bajo la inmediata dependencia del Subsecretario";
 choices[66][1] = "tendr&aacute;n las competencias sobre servicios comunes que les atribuya el Real Decreto de estructura del Departamento";
 choices[66][2] = "tendr&aacute;n las competencias relativas a producci&oacute;n normativa, asistencia jur&iacute;dica y publicaciones";
 choices[66][3] = "todas son correctas";
 answers[66] = choices[66][3];
 units[66] = "4, 7, 8, 9";
 comments[66] = "Id Pregunta: 802. Ley 40/2015";


//  Id pregunta: 621 Año de creación de pregunta: 2016
 questions[67]= "68)  Seg&uacute;n el paradigma de Orientaci&oacute;n a Objetos, la herencia posibilita que:";
 choices[67]= new Array();
 choices[67][0] = "Cualquier cambio en los datos y operaciones contenidas dentro de una superclase es heredado inmediatamente por todas las subclases que se derivan de la superclase.";
 choices[67][1] = "Cualquier cambio en las operaciones y datos de la superclase no se refleja en todas las subclases.";
 choices[67][2] = "Cualquier cambio en una de las subclases que se heredan de la superclase se refleja en sus clases hermanas.";
 choices[67][3] = "En el paradigma de Orientaci&oacute;n a Objetos no existe la herencia.";
 answers[67] = choices[67][0];
 units[67] = "89";
 comments[67] = "Id Pregunta: 621. Junta de Extremadura A1 2015";


//  Id pregunta: 610 Año de creación de pregunta: 2016
 questions[68]= "69)  En el lenguaje de manipulaci&oacute;n de datos, &iquest;cu&aacute;l de las siguientes cl&aacute;usulas va asociada a la cl&aacute;usula HAVING?";
 choices[68]= new Array();
 choices[68][0] = "GROUP BY.";
 choices[68][1] = "COUNT.";
 choices[68][2] = "WHERE.";
 choices[68][3] = "DISTINCT.";
 answers[68] = choices[68][0];
 units[68] = "60";
 comments[68] = "Id Pregunta: 610. Junta de Extremadura A1 2015";


//  Id pregunta: 377 Año de creación de pregunta: 2016
 questions[69]= "70)  Es un elemento caracter&iacute;stico de la naturaleza jur&iacute;dica de la Uni&oacute;n Europea:";
 choices[69]= new Array();
 choices[69][0] = "Tener una estructura institucional.";
 choices[69][1] = "El establecimiento de un Ordenamiento jur&iacute;dico propio.";
 choices[69][2] = "La transferencia de competencias a las instituciones comunitarias.";
 choices[69][3] = "Todas las respuestas son correctas.";
 answers[69] = choices[69][3];
 units[69] = "5";
 comments[69] = "Id Pregunta: 377. UNION EUROPEA";


//  Id pregunta: 524 Año de creación de pregunta: 2016
 questions[70]= "71)  Las asociaciones y organizaciones representativas de intereses econ&oacute;micos y sociales:";
 choices[70]= new Array();
 choices[70][0] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos en los t&eacute;rminos que reglamentariamente se establezca";
 choices[70][1] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos";
 choices[70][2] = "no ser&aacute;n titulares de intereses leg&iacute;timos colectivos";
 choices[70][3] = "ser&aacute;n titulares de intereses leg&iacute;timos colectivos en los t&eacute;rminos que la Ley reconozca";
 answers[70] = choices[70][3];
 units[70] = "7";
 comments[70] = "Id Pregunta: 524. LEY 39/2015";


//  Id pregunta: 159 Año de creación de pregunta: 2016
 questions[71]= "72)  Seg&uacute;n la ley 39/2015, los actos administrativos, a menos que su naturaleza exija otra forma m&aacute;s adecuada de expresi&oacute;n y constancia, se producir&aacute;n: ";
 choices[71]= new Array();
 choices[71][0] = "verbalmente";
 choices[71][1] = "por escrito a trav&eacute;s de medios electr&oacute;nicos o no electr&oacute;nicos";
 choices[71][2] = "por escrito a trav&eacute;s de medios electr&oacute;nicos";
 choices[71][3] = "por escrito a trav&eacute;s de medios no electr&oacute;nicos";
 answers[71] = choices[71][2];
 units[71] = "7";
 comments[71] = "Id Pregunta: 159. Ley 39/2015, Art&iacute;culo 36";


//  Id pregunta: 105 Año de creación de pregunta: 2016
 questions[72]= "73)  Entre las caracter&iacute;sticas de Big Data se encuentra:";
 choices[72]= new Array();
 choices[72][0] = "Gran volumen de informaci&oacute;n";
 choices[72][1] = "Gran variedad de datos";
 choices[72][2] = "Se analizan datos a gran velocidad";
 choices[72][3] = "Todas las anteriores son verdaderas";
 answers[72] = choices[72][3];
 units[72] = "73";
 comments[72] = "Id Pregunta: 105. ";


//  Id pregunta: 329 Año de creación de pregunta: 2016
 questions[73]= "74)  Si el Consejo en alg&uacute;n acuerdo necesita de mayor&iacute;a cualificada se produce:";
 choices[73]= new Array();
 choices[73][0] = "Acuerdos cualificados.";
 choices[73][1] = "Acuerdos ponderados.";
 choices[73][2] = "Valoraci&oacute;n de los votos.";
 choices[73][3] = "Ponderaci&oacute;n de los votos.";
 answers[73] = choices[73][3];
 units[73] = "5";
 comments[73] = "Id Pregunta: 329. UNION EUROPEA";


//  Id pregunta: 247 Año de creación de pregunta: 2016
 questions[74]= "75)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la Regencia se ejercer&aacute;:";
 choices[74]= new Array();
 choices[74][0] = "Por mandato constitucional y siempre en nombre del Rey.";
 choices[74][1] = "Por Orden Ministerial.";
 choices[74][2] = "Por mandato constitucional y siempre en nombre del pueblo espa&ntilde;ol.";
 choices[74][3] = "Por mandato de las Cortes Generales y siempre en nombre del pueblo espa&ntilde;ol.";
 answers[74] = choices[74][0];
 units[74] = "1";
 comments[74] = "Id Pregunta: 247. CONSTITUCION1978";


