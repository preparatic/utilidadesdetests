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

//  Id pregunta: 713 Año de creación de pregunta: 2016
 questions[0]= "1)  Entre las funcionalidades generales de un servidor de integraci&oacute;n continua NO se encuentra";
 choices[0]= new Array();
 choices[0][0] = "La ejecuci&oacute;n de una serie de test: JUnit, Cactus, Auditoria del c&oacute;digo fuente, test IHM, test funcionales.";
 choices[0][1] = "Permite realiza el despliegue de archivos en el entorno de producci&oacute;n.";
 choices[0][2] = "La notificaci&oacute;n del resultado por medios como correo electr&oacute;nico o RSS.";
 choices[0][3] = "La creaci&oacute;n de un informe de estad&iacute;sticas.";
 answers[0] = choices[0][1];
 units[0] = "92";
 comments[0] = "Id Pregunta: 713. INTEGRACION CONTINUA";


//  Id pregunta: 15 Año de creación de pregunta: 2016
 questions[1]= "2)  Si una aplicaci&oacute;n web desplegada en una JVM utiliza un servlet para generar p&aacute;ginas web de forma din&aacute;mica, dicho servlet no implementa la interfaz SingleThreadModel, y en un momento determinado se encuentra recibiendo m&uacute;ltiples peticiones de clientes de forma concurrente, &iquest;cu&aacute;ntos objetos de dicha clase estar&aacute;n cargados en la memoria de la JVM?";
 choices[1]= new Array();
 choices[1][0] = "0";
 choices[1][1] = "1";
 choices[1][2] = "Tantos como peticiones concurrentes tenga.";
 choices[1][3] = "Tantos como le permita la memoria de la JVM.";
 answers[1] = choices[1][1];
 units[1] = "64";
 comments[1] = "Id Pregunta: 15. AGE A1 2015";


//  Id pregunta: 188 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Puede el Estado transferir o delegar a las Comunidades Aut&oacute;nomas facultadas que son de su titularidad?";
 choices[2]= new Array();
 choices[2][0] = "No, en ning&uacute;n caso.";
 choices[2][1] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con cualquier tipo de facultades.";
 choices[2][2] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, sin que el Estado se pueda reservar ninguna forma de control.";
 choices[2][3] = ", mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, previendo en cada caso la correspondiente transferencia de medios financieros, as&iacute; como las formas de control que se reserve el Estado.";
 answers[2] = choices[2][3];
 units[2] = "1";
 comments[2] = "Id Pregunta: 188. CONSTITUCION1978";


//  Id pregunta: 822 Año de creación de pregunta: 2016
 questions[3]= "4)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de los siguientes requisitos:";
 choices[3]= new Array();
 choices[3][0] = "Determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia org&aacute;nica.";
 choices[3][1] = "Delimitaci&oacute;n de su naturaleza, funciones y competencias.";
 choices[3][2] = "Dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento.";
 choices[3][3] = "Todas son correctas.";
 answers[3] = choices[3][3];
 units[3] = "4, 7, 8, 9";
 comments[3] = "Id Pregunta: 822. Ley 40/2015";


//  Id pregunta: 785 Año de creación de pregunta: 2016
 questions[4]= "5)  Se&ntilde;ale la respuesta correcta:";
 choices[4]= new Array();
 choices[4][0] = "corresponde a los &oacute;rganos superiores establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos directivos su desarrollo y ejecuci&oacute;n";
 choices[4][1] = "corresponde establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos superiores";
 choices[4][2] = "corresponde establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos directivos";
 choices[4][3] = "corresponde a los &oacute;rganos directivos establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos superiores su desarrollo y ejecuci&oacute;n";
 answers[4] = choices[4][0];
 units[4] = "4, 7, 8, 9";
 comments[4] = "Id Pregunta: 785. Ley 40/2015";


//  Id pregunta: 263 Año de creación de pregunta: 2016
 questions[5]= "6)  Los Vocales integrantes del &oacute;rgano de gobierno del Poder Judicial:";
 choices[5]= new Array();
 choices[5][0] = "Ser&aacute;n nombrados por el Presidente del Tribunal Supremo y del Consejo del Poder Judicial, por un periodo de cinco a&ntilde;os.";
 choices[5][1] = "Ser&aacute;n nombrados por el Congreso de los Diputados y por el Senado por un periodo de cinco a&ntilde;os.";
 choices[5][2] = "Ser&aacute;n nombrados por el Rey por un periodo de cinco a&ntilde;os.";
 choices[5][3] = "er&aacute;n nombrados por el Rey por un periodo de tres a&ntilde;os.";
 answers[5] = choices[5][1];
 units[5] = "1";
 comments[5] = "Id Pregunta: 263. CONSTITUCION1978";


//  Id pregunta: 119 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Con qu&eacute; periodicidad se publica la EPA (Encuesta de Poblaci&oacute;n Activa)?";
 choices[6]= new Array();
 choices[6][0] = "Anual";
 choices[6][1] = "Mensual";
 choices[6][2] = "Semestral";
 choices[6][3] = "Trimestral";
 answers[6] = choices[6][3];
 units[6] = "15";
 comments[6] = "Id Pregunta: 119. ";


//  Id pregunta: 490 Año de creación de pregunta: 2016
 questions[7]= "8)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la obligaci&oacute;n de pagar los intereses de la Deuda del Estado y la de devolver los capitales llamados a reembolso, contados respectivamente a partir del vencimiento de los intereses y del d&iacute;a del llamamiento a reembolso prescribir&aacute;:";
 choices[7]= new Array();
 choices[7][0] = "A los cinco a&ntilde;os.";
 choices[7][1] = "A los dos a&ntilde;os.";
 choices[7][2] = "A los tres a&ntilde;os.";
 choices[7][3] = "A los cuatro a&ntilde;os.";
 answers[7] = choices[7][0];
 units[7] = "10";
 comments[7] = "Id Pregunta: 490. PRESUPUESTOS GENERALES";


//  Id pregunta: 443 Año de creación de pregunta: 2016
 questions[8]= "9)  Respecto a las comunicaciones y notificaciones electr&oacute;nicas:";
 choices[8]= new Array();
 choices[8][0] = "El servicio SIM se utiliza para el env&iacute;o de notificaciones electr&oacute;nicas.";
 choices[8][1] = "El Servicio compartido la gesti&oacute;n de notificaciones Notific@, ser&aacute; de uso obligatorio para la AGE y sus OOPP en 2017.";
 choices[8][2] = "La plataforma Notific@, recibe desde los organismos emisores, las comunicaciones y adem&aacute;s de aportar otros valores a&ntilde;adidos, las pone a disposici&oacute;n de los destinatarios en la Carpeta Ciudadana.";
 choices[8][3] = "El servicio SIM, que se ha integrado en el Servicio compartido de gesti&oacute;n de notificaciones, proporciona a los ciudadanos y empresas un buz&oacute;n seguro.";
 answers[8] = choices[8][1];
 units[8] = "43";
 comments[8] = "Id Pregunta: 443. SERVICIOS COMUNES";


//  Id pregunta: 116 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes es una pol&iacute;tica pasiva de empleo?";
 choices[9]= new Array();
 choices[9][0] = "La organizaci&oacute;n de cursos de formaci&oacute;n gratuitos para desempleados";
 choices[9][1] = "La intermediaci&oacute;n en el mercado laboral, es decir, recoger las ofertas de trabajo y cruzarlas con las demandas.";
 choices[9][2] = "Adecuar los planes de estudio a la realidad laboral";
 choices[9][3] = "El pago de subsidios a parados";
 answers[9] = choices[9][3];
 units[9] = "15";
 comments[9] = "Id Pregunta: 116. ";


//  Id pregunta: 466 Año de creación de pregunta: 2016
 questions[10]= "11)  A tenor del art&iacute;culo 34 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el ejercicio presupuestario coincidir&aacute;:";
 choices[10]= new Array();
 choices[10][0] = "Con el a&ntilde;o anterior.";
 choices[10][1] = "Con los tres a&ntilde;os anteriores.";
 choices[10][2] = "Con el a&ntilde;o natural.";
 choices[10][3] = "Con los dos a&ntilde;os anteriores.";
 answers[10] = choices[10][2];
 units[10] = "10";
 comments[10] = "Id Pregunta: 466. PRESUPUESTOS GENERALES";


//  Id pregunta: 428 Año de creación de pregunta: 2016
 questions[11]= "12)  Cuando el periodo de vacaciones coincida con una incapacidad temporal derivada del embarazo, parto o lactancia natural, o con el permiso de maternidad, o con su ampliaci&oacute;n por lactancia, la empleada p&uacute;blica:";
 choices[11]= new Array();
 choices[11][0] = "Perder&aacute; el derecho a vacaciones.";
 choices[11][1] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, siempre que no haya terminado el a&ntilde;o natural que le corresponda.";
 choices[11][2] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, aunque haya terminado el a&ntilde;o natural que le corresponda.";
 choices[11][3] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta dependiendo de la acumulaci&oacute;n de trabajo en al AAPP.";
 answers[11] = choices[11][2];
 units[11] = "14";
 comments[11] = "Id Pregunta: 428. POLITICAS DE IGUALDAD";


//  Id pregunta: 828 Año de creación de pregunta: 2016
 questions[12]= "13)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta correcta.";
 choices[12]= new Array();
 choices[12][0] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos provisionalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[12][1] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos temporalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[12][2] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos eventualmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[12][3] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos circunstancialmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 answers[12] = choices[12][1];
 units[12] = "4, 7, 8, 9";
 comments[12] = "Id Pregunta: 828. Ley 40/2015";


//  Id pregunta: 62 Año de creación de pregunta: 2016
 questions[13]= "14)  El art&iacute;culo 102 del Real Decreto 1720/2007, por el que se determina la conservaci&oacute;n de una copia de respaldo de los datos y de los procedimientos de recuperaci&oacute;n de los mismos en un lugar diferente de aquel en que se encuentren los equipos inform&aacute;ticos que los tratan, &iquest;a qu&eacute; nivel o niveles de medidas de seguridad es aplicable?";
 choices[13]= new Array();
 choices[13][0] = "B&aacute;sico";
 choices[13][1] = "Medio";
 choices[13][2] = "Alto";
 choices[13][3] = "A los niveles medio y alto";
 answers[13] = choices[13][2];
 units[13] = "35";
 comments[13] = "Id Pregunta: 62. AGE A1 2015";


//  Id pregunta: 335 Año de creación de pregunta: 2016
 questions[14]= "15)  Un diputado del Parlamento Europeo, de nacionalidad espa&ntilde;ola, &iquest;puede ser tambi&eacute;n Diputado en el Congreso espa&ntilde;ol?:";
 choices[14]= new Array();
 choices[14][0] = "Son compatibles, lo que no puede compatibilizar es ser funcionario de cualquiera de las Instituciones Europeas.";
 choices[14][1] = "Son compatibles, lo que no puede compatibilizar es ser miembro del Tribunal de Justicia de Luxemburgo.";
 choices[14][2] = "Son incompatibles ambas actas de diputado.";
 choices[14][3] = "Son perfectamente compatibles ambas actas de diputado.";
 answers[14] = choices[14][2];
 units[14] = "5";
 comments[14] = "Id Pregunta: 335. UNION EUROPEA";


//  Id pregunta: 551 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Cu&aacute;l es el &oacute;rgano t&eacute;cnico de cooperaci&oacute;n de la Administraci&oacute;n General del Estado, de las Administraciones de las Comunidades Aut&oacute;nomas y de las Entidades Locales en materia de administraci&oacute;n electr&oacute;nica definido en la ley 40/2015 de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[15]= new Array();
 choices[15][0] = "La Conferencia Sectorial de Telecomunicaciones y Sociedad de la Informaci&oacute;n";
 choices[15][1] = "El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica";
 choices[15][2] = "La Comisi&oacute;n Sectorial de administraci&oacute;n electr&oacute;nica";
 choices[15][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[15] = choices[15][2];
 units[15] = "26";
 comments[15] = "Id Pregunta: 551. Gobernanza TIC";


//  Id pregunta: 182 Año de creación de pregunta: 2016
 questions[16]= "17)  De acuerdo con el T&iacute;tulo II de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; tutor del Rey menor:";
 choices[16]= new Array();
 choices[16][0] = "El que hubiere designado el familiar m&aacute;s cercano al Rey difunto.";
 choices[16][1] = "El que hubiere designado el Rey difunto en su testamento.";
 choices[16][2] = "El que hubieren designado las Cortes Generales.";
 choices[16][3] = "El que hubiere designado el Senado por mayor&iacute;a absoluta.";
 answers[16] = choices[16][1];
 units[16] = "1";
 comments[16] = "Id Pregunta: 182. CONSTITUCION1978";


//  Id pregunta: 68 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Cu&aacute;l de las siguientes opciones se refiere al conjunto de metodolog&iacute;as, procesos, arquitecturas y tecnolog&iacute;as que permiten reunir, depurar y transformar datos de los sistemas transaccionales e informaci&oacute;n desestructurada en informaci&oacute;n estructurada, para su explotaci&oacute;n directa o para su an&aacute;lisis y conversi&oacute;n en conocimiento, dando as&iacute; soporte a la toma de decisiones sobre el negocio?";
 choices[17]= new Array();
 choices[17][0] = "Data Mining (miner&iacute;a de datos)";
 choices[17][1] = "Business Intelligence (inteligencia de negocio)";
 choices[17][2] = "Data Warehouse (almac&eacute;n de datos)";
 choices[17][3] = "An&aacute;lisis OLTP (procesamiento en l&iacute;nea transaccional)";
 answers[17] = choices[17][1];
 units[17] = "72";
 comments[17] = "Id Pregunta: 68. AGE A1 2015";


//  Id pregunta: 758 Año de creación de pregunta: 2016
 questions[18]= "19)  Las Administraciones P&uacute;blicas sirven con objetividad los intereses generales, con sometimiento pleno a la Constituci&oacute;n, a la Ley y al Derecho y act&uacute;an de acuerdo con los principios de:";
 choices[18]= new Array();
 choices[18][0] = "eficacia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[18][1] = "eficiencia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 choices[18][2] = "eficacia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[18][3] = "eficiencia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 answers[18] = choices[18][2];
 units[18] = "4, 7, 8, 9";
 comments[18] = "Id Pregunta: 758. Ley 40/2015";


//  Id pregunta: 583 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Qu&eacute; establece Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[19]= new Array();
 choices[19][0] = "Los principios rectores";
 choices[19][1] = "Los objetivos estrat&eacute;gicos y las acciones para alcanzarlos";
 choices[19][2] = "Los hitos para su desarrollo gradual";
 choices[19][3] = "Todos los anteriores";
 answers[19] = choices[19][3];
 units[19] = "19";
 comments[19] = "Id Pregunta: 583. Estrategia TIC";


//  Id pregunta: 285 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;Cu&aacute;l no es un obst&aacute;culo que dificulta la Agenda Digital para Europa?";
 choices[20]= new Array();
 choices[20][0] = "la fragmentaci&oacute;n de los mercados digitales.";
 choices[20][1] = "las diferencias tarifarias de los servicios de la sociedad de la informaci&oacute;n entre los miembros de la UE.";
 choices[20][2] = "la falta de interoperabilidad.";
 choices[20][3] = "el incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes.";
 answers[20] = choices[20][1];
 units[20] = "5";
 comments[20] = "Id Pregunta: 285. UNION EUROPEA";


//  Id pregunta: 459 Año de creación de pregunta: 2016
 questions[21]= "22)  Seg&uacute;n el art&iacute;culo 41 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, las operaciones financieras que se distinguen son:";
 choices[21]= new Array();
 choices[21][0] = "Enajenaci&oacute;n de inversiones reales y transferencias de capital.";
 choices[21][1] = "Pasivos financieros y transferencias de capital.";
 choices[21][2] = "Activos financieros y pasivos financieros.";
 choices[21][3] = "Activos financieros y enajenaci&oacute;n de inversiones reales.";
 answers[21] = choices[21][2];
 units[21] = "10";
 comments[21] = "Id Pregunta: 459. PRESUPUESTOS GENERALES";


//  Id pregunta: 620 Año de creación de pregunta: 2016
 questions[22]= "23)  En el entorno de la Arquitectura del Software, un patr&oacute;n :";
 choices[22]= new Array();
 choices[22][0] = "Es una soluci&oacute;n a un problema en un contexto particular.";
 choices[22][1] = "Es recurrente y ense&ntilde;a permitiendo entender c&oacute;mo adaptarlo a la variante particular del problema donde se quiere aplicar.";
 choices[22][2] = "Tiene un nombre para referirse al patr&oacute;n.";
 choices[22][3] = "Todas las respuestas son correctas.";
 answers[22] = choices[22][3];
 units[22] = "50";
 comments[22] = "Id Pregunta: 620. Junta de Extremadura A1 2015";


//  Id pregunta: 684 Año de creación de pregunta: 2016
 questions[23]= "24)  Indique los niveles de seguridad que contempla el Reglamento (UE) 910/2014 para los sistemas de identificaci&oacute;n electr&oacute;nica";
 choices[23]= new Array();
 choices[23][0] = "B&aacute;sico, medio y alto";
 choices[23][1] = "D&eacute;bil y fuerte";
 choices[23][2] = "Bajo, medio y alto";
 choices[23][3] = "Bajo, sustancial y alto";
 answers[23] = choices[23][3];
 units[23] = "77";
 comments[23] = "Id Pregunta: 684. Art&iacute;culo 8 del Reglamento 910/2014";


//  Id pregunta: 614 Año de creación de pregunta: 2016
 questions[24]= "25)  Dada la m&aacute;scara de red 255.255.240.0, &iquest;a qu&eacute; red pertenece la direcci&oacute;n IP 192.228.17.15?";
 choices[24]= new Array();
 choices[24][0] = "192.228.0.0";
 choices[24][1] = "192.228.8.0";
 choices[24][2] = "192.228.16.0";
 choices[24][3] = "192.228.17.0";
 answers[24] = choices[24][2];
 units[24] = "109";
 comments[24] = "Id Pregunta: 614. Junta de Extremadura A1 2015";


//  Id pregunta: 470 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;Qui&eacute;n remitir&aacute; a las Cortes Generales un informe trimestral acerca de la utilizaci&oacute;n del Fondo regulado en el Fondo de Contingencia de ejecuci&oacute;n presupuestaria seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria?";
 choices[25]= new Array();
 choices[25][0] = "El Ministro de Econom&iacute;a.";
 choices[25][1] = "El Gobierno.";
 choices[25][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[25][3] = "El Presidente del Gobierno.";
 answers[25] = choices[25][1];
 units[25] = "10";
 comments[25] = "Id Pregunta: 470. PRESUPUESTOS GENERALES";


//  Id pregunta: 166 Año de creación de pregunta: 2016
 questions[26]= "27)  El indicador de la Comisi&oacute;n Europea &ldquo;DESI&rdquo; (Digital Economy &amp; Society Index) tiene entre sus dimensiones:";
 choices[26]= new Array();
 choices[26][0] = "Interoperabilidad";
 choices[26][1] = "Integridad";
 choices[26][2] = "Capital humano";
 choices[26][3] = "Trazabilidad";
 answers[26] = choices[26][2];
 units[26] = "19";
 comments[26] = "Id Pregunta: 166. https://ec.europa.eu/digital-single-market/en/desi Conectividad, Capital humano, Uso de internet, Integraci&oacute;n de tecnolog&iacute;a digital, Servicios p&uacute;blicos digitales";


//  Id pregunta: 754 Año de creación de pregunta: 2016
 questions[27]= "28)  El sector p&uacute;blico institucional se integra por:";
 choices[27]= new Array();
 choices[27][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[27][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[27][2] = "las Universidades p&uacute;blicas";
 choices[27][3] = "todas son correctas";
 answers[27] = choices[27][3];
 units[27] = "4, 7, 8, 9";
 comments[27] = "Id Pregunta: 754. Ley 40/2015";


//  Id pregunta: 748 Año de creación de pregunta: 2016
 questions[28]= "29)  Son rasgos fundamentales del sistema burocr&aacute;tico:";
 choices[28]= new Array();
 choices[28][0] = "La racionalidad en la divisi&oacute;n del trabajo";
 choices[28][1] = "La eficiencia en el uso de los recursos p&uacute;blicos";
 choices[28][2] = "La competencia t&eacute;cnica y la meritocracia";
 choices[28][3] = "a) y c) son rasgos fundamentales del sistema burocr&aacute;tico";
 answers[28] = choices[28][3];
 units[28] = "18, 20";
 comments[28] = "Id Pregunta: 748. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 794 Año de creación de pregunta: 2016
 questions[29]= "30)  Los nombramientos de los Secretarios generales t&eacute;cnicos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades locales, pertenecientes al:";
 choices[29]= new Array();
 choices[29][0] = "Subgrupo A1";
 choices[29][1] = "Subgrupo A2";
 choices[29][2] = "Subgrupo B";
 choices[29][3] = "Subgrupo C1";
 answers[29] = choices[29][0];
 units[29] = "4, 7, 8, 9";
 comments[29] = "Id Pregunta: 794. Ley 40/2015";


//  Id pregunta: 414 Año de creación de pregunta: 2016
 questions[30]= "31)  Los proyectos de disposiciones de car&aacute;cter general y los planes de especial relevancia econ&oacute;mica, que sometan a la aprobaci&oacute;n del Consejo de Ministros, incorporar&aacute;n:";
 choices[30]= new Array();
 choices[30][0] = "Un informe de impacto de g&eacute;nero.";
 choices[30][1] = "Un programa de igualdad de oportunidades.";
 choices[30][2] = "Un plan de Igualdad de Oportunidades.";
 choices[30][3] = "Un Decreto de Igualdad de Oportunidades.";
 answers[30] = choices[30][0];
 units[30] = "14";
 comments[30] = "Id Pregunta: 414. POLITICAS DE IGUALDAD";


//  Id pregunta: 774 Año de creación de pregunta: 2016
 questions[31]= "32)  Salvo las excepciones previstas por esta Ley, la organizaci&oacute;n de la Administraci&oacute;n General del Estado responde a los principios de:";
 choices[31]= new Array();
 choices[31][0] = "divisi&oacute;n funcional en Departamentos ministeriales y de gesti&oacute;n territorial integrada en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[31][1] = "gesti&oacute;n territorial integrada en Departamentos ministeriales y de divisi&oacute;n funcional en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[31][2] = "divisi&oacute;n funcional en Delegaciones del Gobierno y de gesti&oacute;n territorial integrada en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 choices[31][3] = "gesti&oacute;n territorial integrada en Delegaciones del Gobierno y de divisi&oacute;n funcional en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 answers[31] = choices[31][0];
 units[31] = "4, 7, 8, 9";
 comments[31] = "Id Pregunta: 774. Ley 40/2015";


//  Id pregunta: 286 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Cu&aacute;l no es un pilar de la Estrategia del Mercado &Uacute;nico Digital?";
 choices[32]= new Array();
 choices[32][0] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa.";
 choices[32][1] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar.";
 choices[32][2] = "Iniciativa europea de libre flujo de datos.";
 choices[32][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital.";
 answers[32] = choices[32][2];
 units[32] = "5";
 comments[32] = "Id Pregunta: 286. UNION EUROPEA";


//  Id pregunta: 834 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Qu&eacute; t&eacute;cnica de cooperaci&oacute;n se regula por primera vez con la Ley 40/2015?";
 choices[33]= new Array();
 choices[33][0] = "Conferencia de Presidentes.";
 choices[33][1] = "Convenios de colaboraci&oacute;n.";
 choices[33][2] = "Comisiones Bilaterales de Cooperaci&oacute;n.";
 choices[33][3] = "Conferencias Sectoriales.";
 answers[33] = choices[33][0];
 units[33] = "4, 7, 8, 9";
 comments[33] = "Id Pregunta: 834. Ley 40/2015";


//  Id pregunta: 274 Año de creación de pregunta: 2016
 questions[34]= "35)  La Ley 19/2013 de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno ha establecido el derecho:";
 choices[34]= new Array();
 choices[34][0] = "Al acceso a la informaci&oacute;n p&uacute;blica, en desarrollo de los t&eacute;rminos ya previstos por la Ley 11/2007, de acceso electr&oacute;nico de los ciudadano a los servicios p&uacute;blicos.";
 choices[34][1] = "Al acceso a la informaci&oacute;n p&uacute;blica, por primera vez en nuestra legislaci&oacute;n positiva.";
 choices[34][2] = "Al acceso a la informaci&oacute;n p&uacute;blica a trav&eacute;s del portal de transparencia.";
 choices[34][3] = "Al acceso a la informaci&oacute;n p&uacute;blica, con las limitaciones derivadas del posible perjuicio para la defensa, seguridad nacional o funciones administrativas de inspecci&oacute;n, entre otras.";
 answers[34] = choices[34][3];
 units[34] = "22";
 comments[34] = "Id Pregunta: 274. LEY DE TRANSPARENCIA";


//  Id pregunta: 663 Año de creación de pregunta: 2016
 questions[35]= "36)  Seg&uacute;n la Ley 39/2015, la iniciaci&oacute;n de un procedimiento administrativo puede realizarse:";
 choices[35]= new Array();
 choices[35][0] = "De oficio.";
 choices[35][1] = "A solicitud del interesado.";
 choices[35][2] = "De oficio o a solicitud del interesado.";
 choices[35][3] = "Por la Administraci&oacute;n P&uacute;blica responsable.";
 answers[35] = choices[35][2];
 units[35] = "7";
 comments[35] = "Id Pregunta: 663. Art&iacute;culo 54 de la Ley 39/2015";


//  Id pregunta: 9 Año de creación de pregunta: 2016
 questions[36]= "37)  Con respecto a los entornos de integraci&oacute;n continua, indique cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[36]= new Array();
 choices[36][0] = "Jenkins no dispone de la funcionalidad de extenderse mediante plugins.";
 choices[36][1] = "SonarQube utiliza herramientas de an&aacute;lisis est&aacute;tico de c&oacute;digo que permiten obtener m&eacute;tricas para mejorar la calidad del c&oacute;digo.";
 choices[36][2] = "El fichero POM empleado en Maven no siempre es un fichero XML.";
 choices[36][3] = "Jenkins es un software de integraci&oacute;n continua bajo licencia Oracle.";
 answers[36] = choices[36][1];
 units[36] = "95";
 comments[36] = "Id Pregunta: 9. AGE A1 2015";


//  Id pregunta: 268 Año de creación de pregunta: 2016
 questions[37]= "38)  Las Disposiciones Adicionales en la Constituci&oacute;n Espa&ntilde;ola son:";
 choices[37]= new Array();
 choices[37][0] = "Cuatro.";
 choices[37][1] = "Una.";
 choices[37][2] = "Cinco.";
 choices[37][3] = "Nueve.";
 answers[37] = choices[37][2];
 units[37] = "1";
 comments[37] = "Id Pregunta: 268. CONSTITUCION1978";


//  Id pregunta: 837 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Cu&aacute;l de los siguientes es un sistema de firma para la actuaci&oacute;n administrativa automatizada?";
 choices[38]= new Array();
 choices[38][0] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico reconocido o cualificado que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[38][1] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico avanzado o reconocido que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[38][2] = "C&oacute;digo seguro de verificaci&oacute;n vinculado a la Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de Derecho P&uacute;blico, en los t&eacute;rminos y condiciones establecidos, permiti&eacute;ndose en todo caso la comprobaci&oacute;n de la integridad del documento mediante el acceso al portal correspondiente.";
 choices[38][3] = "Firma electr&oacute;nica del titular del &oacute;rgano o empleado p&uacute;blico.";
 answers[38] = choices[38][0];
 units[38] = "4, 7, 8, 9";
 comments[38] = "Id Pregunta: 837. Ley 40/2015";


//  Id pregunta: 140 Año de creación de pregunta: 2016
 questions[39]= "40)  No es una causa de inadmisi&oacute;n de un recurso administrativo:";
 choices[39]= new Array();
 choices[39][0] = "Carecer de legitimaci&oacute;n el recurrente";
 choices[39][1] = "Tratarse de un acto no susceptible de recurso";
 choices[39][2] = "La ausencia de calificaci&oacute;n del recurso por parte del recurrente";
 choices[39][3] = "Todas ellas son causas de inadmisi&oacute;n de un recurso administrativo";
 answers[39] = choices[39][2];
 units[39] = "8";
 comments[39] = "Id Pregunta: 140. Ley 39/2015, Art&iacute;culo 116";


//  Id pregunta: 623 Año de creación de pregunta: 2016
 questions[40]= "41)  En PHP 5.0, &iquest;cu&aacute;l es la regla para formar los nombres de las variables?";
 choices[40]= new Array();
 choices[40][0] = "Una variable debe comenzar con el signo $ seguido del nombre de la variable.";
 choices[40][1] = "Una variable debe comenzar con el signo &amp; seguido del nombre de la variable.";
 choices[40][2] = "Una variable debe comenzar por un car&aacute;cter num&eacute;rico.";
 choices[40][3] = "No hay regla para la formaci&oacute;n de los nombres de las variables.";
 answers[40] = choices[40][0];
 units[40] = "65";
 comments[40] = "Id Pregunta: 623. Junta de Extremadura A1 2015";


//  Id pregunta: 720 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;C&uacute;al de las siguientes NO es una metodolog&iacute;a lean?";
 choices[41]= new Array();
 choices[41][0] = "Lean startup";
 choices[41][1] = "Business Model Canvas";
 choices[41][2] = "Dynamic system Development method";
 choices[41][3] = "Lean software development";
 answers[41] = choices[41][2];
 units[41] = "34";
 comments[41] = "Id Pregunta: 720. Metodologias Lean";


//  Id pregunta: 667 Año de creación de pregunta: 2016
 questions[42]= "43)  Se&ntilde;ale la opci&oacute;n falsa respecto a la instrucci&oacute;n del procedimiento definida en la Ley 39/2015:";
 choices[42]= new Array();
 choices[42][0] = "Los interesados podr&aacute;n, en cualquier momento del procedimiento anterior al tr&aacute;mite de audiencia, aducir alegaciones y aportar documentos u otros elementos de juicio.";
 choices[42][1] = "El instructor del procedimiento s&oacute;lo podr&aacute; rechazar las pruebas propuestas por los interesados cuando sean manifiestamente improcedentes o innecesarias, mediante resoluci&oacute;n motivada.";
 choices[42][2] = "Salvo disposici&oacute;n expresa en contrario, los informes ser&aacute;n preceptivos y vinculantes.";
 choices[42][3] = "Se podr&aacute; prescindir del tr&aacute;mite de audiencia cuando no figuren en el procedimiento ni sean tenidos en cuenta en la resoluci&oacute;n otros hechos ni otras alegaciones y pruebas que las aducidas por el interesado.";
 answers[42] = choices[42][2];
 units[42] = "7";
 comments[42] = "Id Pregunta: 667. Cap&iacute;tulo IV, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 643 Año de creación de pregunta: 2016
 questions[43]= "44)  La generalizaci&oacute;n es el tipo de interrelaci&oacute;n que existe entre un tipo de entidad, supertipo, y los tipos de entidad m&aacute;s espec&iacute;ficos (subtipos) que dependen de &eacute;l. Las cardinalidades m&aacute;ximas y m&iacute;nimas son siempre:";
 choices[43]= new Array();
 choices[43][0] = "(0,1) en el supertipo y (0,1) en los subtipos.";
 choices[43][1] = "(1,1) en el supertipo y (1,1) en los subtipos.";
 choices[43][2] = "(1,1) en el supertipo y (0,1) en los subtipos.";
 choices[43][3] = "(0,1) en el supertipo y (1,1) en los subtipos.";
 answers[43] = choices[43][2];
 units[43] = "85";
 comments[43] = "Id Pregunta: 643. Junta de Extremadura A1 2015";


//  Id pregunta: 596 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Qui&eacute;n supervisa la elaboraci&oacute;n y ejecutaci&oacute;n de los Planes de Acci&oacute;n Sectoriales?";
 choices[44]= new Array();
 choices[44][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[44][1] = "Las CMADs";
 choices[44][2] = "Ambas son correctas.";
 choices[44][3] = "Ninguna es correcta";
 answers[44] = choices[44][2];
 units[44] = "19";
 comments[44] = "Id Pregunta: 596. Estrategia TIC";


//  Id pregunta: 515 Año de creación de pregunta: 2016
 questions[45]= "46)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[45]= new Array();
 choices[45][0] = "quedar&aacute;n sujetas a lo dispuesto en todas las normas de esta Ley";
 choices[45][1] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[45][2] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo cuando ejerzan potestades administrativas";
 choices[45][3] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley";
 answers[45] = choices[45][1];
 units[45] = "7";
 comments[45] = "Id Pregunta: 515. LEY 39/2015";


//  Id pregunta: 378 Año de creación de pregunta: 2016
 questions[46]= "47)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[46]= new Array();
 choices[46][0] = "Quince miembros.";
 choices[46][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[46][2] = "Los miembros que determine el Consejo.";
 choices[46][3] = "Un Presidente y quince miembros.";
 answers[46] = choices[46][1];
 units[46] = "14";
 comments[46] = "Id Pregunta: 378. UNION EUROPEA";


//  Id pregunta: 548 Año de creación de pregunta: 2016
 questions[47]= "48)  El &aacute;mbito de aplicaci&oacute;n del RD 806/2014 de Gobernanza TIC es:";
 choices[47]= new Array();
 choices[47][0] = "La Administraci&oacute;n General del Estado";
 choices[47][1] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos";
 choices[47][2] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos y las Comunidades Aut&oacute;nomas";
 choices[47][3] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos, las Comunidades Aut&oacute;nomas y las Entidades Locales";
 answers[47] = choices[47][1];
 units[47] = "26";
 comments[47] = "Id Pregunta: 548. Gobernanza TIC";


//  Id pregunta: 376 Año de creación de pregunta: 2016
 questions[48]= "49)  El Defensor del Pueblo Europeo puede ser consultado por:";
 choices[48]= new Array();
 choices[48][0] = "Personas con residencia en la Uni&oacute;n pero s&oacute;lo personas f&iacute;sicas.";
 choices[48][1] = "Personas con nacionalidad europea.";
 choices[48][2] = "Personas con nacionalidad y pa&iacute;ses asociados.";
 choices[48][3] = "Toda persona f&iacute;sica (ciudadanos) o jur&iacute;dica (instituciones o empresas) que residan en la Uni&oacute;n.";
 answers[48] = choices[48][3];
 units[48] = "5";
 comments[48] = "Id Pregunta: 376. UNION EUROPEA";


//  Id pregunta: 147 Año de creación de pregunta: 2016
 questions[49]= "50)  Seg&uacute;n la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas el ejercicio de la potestad reglamentaria corresponde:";
 choices[49]= new Array();
 choices[49][0] = "Al Gobierno de la naci&oacute;n";
 choices[49][1] = "A las Cortes Generales y al Gobierno por delegaci&oacute;n de estas";
 choices[49][2] = "Al Gobierno de la naci&oacute;n y a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas";
 choices[49][3] = "Al Gobierno de la naci&oacute;n, a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas y a los &oacute;rganos de gobierno locales";
 answers[49] = choices[49][3];
 units[49] = "7";
 comments[49] = "Id Pregunta: 147. Ley 39/2015, Art&iacute;culo 128";


//  Id pregunta: 312 Año de creación de pregunta: 2016
 questions[50]= "51)  Los acuerdos de la Comisi&oacute;n Europea se adoptan:";
 choices[50]= new Array();
 choices[50][0] = "Por unanimidad.";
 choices[50][1] = "Por mayor&iacute;a cualificada.";
 choices[50][2] = "Por mayor&iacute;a de las dos terceras partes de sus miembros.";
 choices[50][3] = "Por mayor&iacute;a del n&uacute;mero de miembros.";
 answers[50] = choices[50][3];
 units[50] = "5";
 comments[50] = "Id Pregunta: 312. UNION EUROPEA";


//  Id pregunta: 736 Año de creación de pregunta: 2016
 questions[51]= "52)  Las iniciativas que se lancen al amparo del Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE se ce&ntilde;ir&aacute;n a:";
 choices[51]= new Array();
 choices[51][0] = "6 principios.";
 choices[51][1] = "7 principios.";
 choices[51][2] = "5 principios.";
 choices[51][3] = "6 directrices.";
 answers[51] = choices[51][1];
 units[51] = "28";
 comments[51] = "Id Pregunta: 736. Estrategia TIC";


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


//  Id pregunta: 788 Año de creación de pregunta: 2016
 questions[53]= "54)  Las unidades administrativas comprenden puestos de trabajo o dotaciones de plantilla:";
 choices[53]= new Array();
 choices[53][0] = "vinculados funcionalmente por raz&oacute;n de sus cometidos y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[53][1] = "vinculados org&aacute;nicamente por raz&oacute;n de sus cometidos y funcionalmente por una jefatura com&uacute;n";
 choices[53][2] = "vinculados funcionalmente por raz&oacute;n de su territorio y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[53][3] = "vinculados org&aacute;nicamente por raz&oacute;n de su territorio y funcionalmente por una jefatura com&uacute;n";
 answers[53] = choices[53][0];
 units[53] = "4, 7, 8, 9";
 comments[53] = "Id Pregunta: 788. Ley 40/2015";


//  Id pregunta: 657 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;Qu&eacute; es el machine learning?";
 choices[54]= new Array();
 choices[54][0] = "El uso de los datos para el desarrollo de mecanismos de predicci&oacute;n y aprendizaje";
 choices[54][1] = "l uso de datos para la automatizaci&oacute;n de tareas repetitivas";
 choices[54][2] = "El aprendizaje de mecanismos de monitorizaci&oacute;n y alertas";
 choices[54][3] = "Un paradigma en el desarrollo de mecanismos de control ";
 answers[54] = choices[54][0];
 units[54] = "73";
 comments[54] = "Id Pregunta: 657. ";


//  Id pregunta: 356 Año de creación de pregunta: 2016
 questions[55]= "56)  Se&ntilde;ale la respuesta correcta respecto a las directivas comunitarias:";
 choices[55]= new Array();
 choices[55][0] = "No se aplican directamente en los Estados.";
 choices[55][1] = "No son vinculantes.";
 choices[55][2] = "Habitualmente se dictan sobre materias que son competencias exclusivas de la Uni&oacute;n Europea.";
 choices[55][3] = "Tienen alcance general.";
 answers[55] = choices[55][0];
 units[55] = "5";
 comments[55] = "Id Pregunta: 356. UNION EUROPEA";


//  Id pregunta: 832 Año de creación de pregunta: 2016
 questions[56]= "57)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Los &oacute;rganos colegiados de la Administraci&oacute;n General del Estado y de sus Organismos p&uacute;blicos, por su composici&oacute;n, se clasifican en:";
 choices[56]= new Array();
 choices[56][0] = "&Oacute;rganos colegiados interministeriales, si sus miembros proceden de diferentes Ministerios.";
 choices[56][1] = "&Oacute;rganos colegiados ministeriales, si sus componentes proceden de los &oacute;rganos del mismo Ministerio.";
 choices[56][2] = "A y B son correctas.";
 choices[56][3] = "A y B son incorrectas.";
 answers[56] = choices[56][2];
 units[56] = "4, 7, 8, 9";
 comments[56] = "Id Pregunta: 832. Ley 40/2015";


//  Id pregunta: 554 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Qu&eacute; &oacute;rgano europeo ha establecido las 16 iniciativas para llevar a cabo la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[57]= new Array();
 choices[57][0] = "El BCE";
 choices[57][1] = "El Parlamento";
 choices[57][2] = "El Consejo";
 choices[57][3] = "La Comisi&oacute;n";
 answers[57] = choices[57][3];
 units[57] = "17";
 comments[57] = "Id Pregunta: 554. Mercado &Uacute;nico Digital";


//  Id pregunta: 26 Año de creación de pregunta: 2016
 questions[58]= "59)  Usted, como directivo TIC de la AGE, decide crear un portal web, con una direcci&oacute;n electr&oacute;nica nueva, con el objetivo de informar al ciudadano sobre determinados aspectos relacionados con su unidad. &iquest;Cu&aacute;l de los siguientes tipos de certificado utilizar&iacute;a para identificar a los servidores de su portal informativo?";
 choices[58]= new Array();
 choices[58][0] = "Sello electr&oacute;nico";
 choices[58][1] = "Sede electr&oacute;nica";
 choices[58][2] = "Servidor seguro (SSL/TLS)";
 choices[58][3] = "Empleado p&uacute;blico";
 answers[58] = choices[58][2];
 units[58] = "7";
 comments[58] = "Id Pregunta: 26. AGE A1 2015";


//  Id pregunta: 54 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;A qu&eacute; tipo de ataque nos referimos cuando se suplanta la identidad de una direcci&oacute;n IP origen?";
 choices[59]= new Array();
 choices[59][0] = "DoS";
 choices[59][1] = "Phishing";
 choices[59][2] = "Sniffing";
 choices[59][3] = "Spoofing";
 answers[59] = choices[59][3];
 units[59] = "119";
 comments[59] = "Id Pregunta: 54. AGE A1 2015";


//  Id pregunta: 688 Año de creación de pregunta: 2016
 questions[60]= "61)  Indique cu&aacute;l de los siguientes no es uno de los requisitos que deben cumplir los servicios cualificados de entrega electro&#769;nica certificada seg&uacute;n el Reglamento (UE) 910/2014";
 choices[60]= new Array();
 choices[60][0] = "Ser prestados por uno o ma&#769;s prestadores cualificados de servicios de confianza";
 choices[60][1] = "Garantizar la identificacio&#769;n del destinatario antes de la entrega de los datos";
 choices[60][2] = "Indicar mediante un sello cualificado de tiempo electro&#769;nico la fecha y hora de envi&#769;o, recepcio&#769;n y eventual modificacio&#769;n de los datos";
 choices[60][3] = "Proteger el envi&#769;o y la recepcio&#769;n de datos por una firma electro&#769;nica cualificada o un sello electro&#769;nico cualificado de un prestador cualificado de servicios de confianza";
 answers[60] = choices[60][1];
 units[60] = "77";
 comments[60] = "Id Pregunta: 688. Art&iacute;culo 44 del Reglamento 910/2014";


//  Id pregunta: 164 Año de creación de pregunta: 2016
 questions[61]= "62)  En el contexto del Mercado &Uacute;nico Digital, &iquest;qu&eacute; significa la eliminaci&oacute;n del geobloqueo?";
 choices[61]= new Array();
 choices[61][0] = "Introducir medidas destinadas a mejorar la transparencia en materia de precios y la vigilancia regulatoria del mercado transfronterizo de paqueter&iacute;a";
 choices[61][1] = "Eliminar la denegaci&oacute;n de acceso a sitios internet basados en otro pa&iacute;s de la UE o que se cobren precios distintos en funci&oacute;n de la localizaci&oacute;n de un cliente";
 choices[61][2] = "Promover medidas para permitir a los vendedores de bienes f&iacute;sicos beneficiarse del registro y pago electr&oacute;nicos &uacute;nicos y de la introducci&oacute;n de un umbral com&uacute;n del IVA que ayude a las nuevas empresas innovadoras a trabajar en l&iacute;nea";
 choices[61][3] = "Presentar una iniciativa europea sobre computaci&oacute;n en nube, incluidos los servicios de certificaci&oacute;n de la nube";
 answers[61] = choices[61][1];
 units[61] = "19";
 comments[61] = "Id Pregunta: 164. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/ A: &quot;mejora de la paqueter&iacute;a transfronteriza&quot;; C: &quot;Reducci&oacute;n de la burocracia relacionada con el IVA&quot;; D: &quot;Construir una econom&iacute;a de los datos&quot;";


//  Id pregunta: 267 Año de creación de pregunta: 2016
 questions[62]= "63)  El T&iacute;tulo Primero de la Constituci&oacute;n Espa&ntilde;ola est&aacute; dedicado a:";
 choices[62]= new Array();
 choices[62][0] = "Los Derechos y Deberes fundamentales.";
 choices[62][1] = "La Corona.";
 choices[62][2] = "El Poder Judicial.";
 choices[62][3] = "Las Cortes Generales.";
 answers[62] = choices[62][2];
 units[62] = "1";
 comments[62] = "Id Pregunta: 267. CONSTITUCION1978";


//  Id pregunta: 217 Año de creación de pregunta: 2016
 questions[63]= "64)  Tal y como marca la Constituci&oacute;n Espa&ntilde;ola de 1978, en el caso de los refer&eacute;ndums consultivos:";
 choices[63]= new Array();
 choices[63][0] = "Su propuesta parte del Presidente del Gobierno, ha de ser autorizada por el Congreso de los Diputados.";
 choices[63][1] = "Son propuestos por el Consejo de Ministros, siendo autorizados previamente por el Presidente del Gobierno.";
 choices[63][2] = "Son refrendados por el Rey.";
 choices[63][3] = "Son convocados por el Presidente del Gobierno.";
 answers[63] = choices[63][0];
 units[63] = "1";
 comments[63] = "Id Pregunta: 217. CONSTITUCION1978";


//  Id pregunta: 261 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Qui&eacute;n representa al Consejo General del Poder Judicial?";
 choices[64]= new Array();
 choices[64][0] = "La Comisi&oacute;n Permanente.";
 choices[64][1] = "El Presidente.";
 choices[64][2] = "El Pleno.";
 choices[64][3] = "El Vicepresidente.";
 answers[64] = choices[64][3];
 units[64] = "1";
 comments[64] = "Id Pregunta: 261. CONSTITUCION1978";


//  Id pregunta: 749 Año de creación de pregunta: 2016
 questions[65]= "66)  En los or&iacute;genes te&oacute;ricos del t&eacute;rmino gobernanza se encuentra:";
 choices[65]= new Array();
 choices[65][0] = "Peters";
 choices[65][1] = "Hollingsworth";
 choices[65][2] = "Manuel Castells";
 choices[65][3] = "Gaebler";
 answers[65] = choices[65][1];
 units[65] = "18, 20";
 comments[65] = "Id Pregunta: 749. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 770 Año de creación de pregunta: 2016
 questions[66]= "67)  Sin perjuicio de la responsabilidad disciplinaria en que se pueda incurrir, el incumplimiento de las instrucciones u &oacute;rdenes de servicio:";
 choices[66]= new Array();
 choices[66][0] = "no afecta por s&iacute; solo a la validez de los actos dictados por los &oacute;rganos administrativos";
 choices[66][1] = "supone la invalidez de los actos dictados por los &oacute;rganos administrativos";
 choices[66][2] = "supone la nulidad de los actos dictados por los &oacute;rganos administrativos";
 choices[66][3] = "supone la anulabilidad de los actos dictados por los &oacute;rganos administrativos";
 answers[66] = choices[66][0];
 units[66] = "4, 7, 8, 9";
 comments[66] = "Id Pregunta: 770. Ley 40/2015";


//  Id pregunta: 558 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Cu&aacute;ndo ha sido aprobada la Agenda Digital para Espa&ntilde;a?";
 choices[67]= new Array();
 choices[67][0] = "En 2015";
 choices[67][1] = "En 2013";
 choices[67][2] = "En 2016";
 choices[67][3] = "En 2007";
 answers[67] = choices[67][1];
 units[67] = "19";
 comments[67] = "Id Pregunta: 558. Agenda Digital";


//  Id pregunta: 120 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Cu&aacute;l es el Real Decreto por el que se aprueba el Estatuto del Consejo de Transparencia y Buen Gobierno?";
 choices[68]= new Array();
 choices[68][0] = "Real Decreto 806/2014, de 19 de septiembre";
 choices[68][1] = "Real Decreto 951/2015, de 23 de octubre";
 choices[68][2] = "Real Decreto 1065/2015, de 27 de noviembre";
 choices[68][3] = "Real Decreto 919/2014, de 31 de octubre";
 answers[68] = choices[68][3];
 units[68] = "22";
 comments[68] = "Id Pregunta: 120. ";


//  Id pregunta: 578 Año de creación de pregunta: 2016
 questions[69]= "70)  &iquest;Qui&eacute;n elabor&oacute; y aprob&oacute; la Estrategia TIC?.";
 choices[69]= new Array();
 choices[69][0] = "Fue elaborada y aprobada por la CETIC";
 choices[69][1] = "Fue elaborada por la CETIC y aprobada por el gobierno";
 choices[69][2] = "Fue elaborada por el gobierno y aprobada por la CETIC";
 choices[69][3] = "Fue elaborada por la CETIC y aprobada por el MAFP (Ministerio de Administraciones y Funci&oacute;n P&uacute;blica)";
 answers[69] = choices[69][1];
 units[69] = "19";
 comments[69] = "Id Pregunta: 578. Estrategia TIC";


//  Id pregunta: 209 Año de creación de pregunta: 2016
 questions[70]= "71)  Corresponde aprobar el proyecto de Ley de Presupuestos Generales del Estado a:";
 choices[70]= new Array();
 choices[70][0] = "El Ministerio de Econom&iacute;a y Hacienda.";
 choices[70][1] = "El Congreso de los Diputados.";
 choices[70][2] = "Las Cortes Generales.";
 choices[70][3] = "El Consejo de Ministros";
 answers[70] = choices[70][3];
 units[70] = "1";
 comments[70] = "Id Pregunta: 209. CONSTITUCION1978";


//  Id pregunta: 184 Año de creación de pregunta: 2016
 questions[71]= "72)  El T&iacute;tulo IV de la Constituci&oacute;n Espa&ntilde;ola de 1978 dispone que el Gobierno:";
 choices[71]= new Array();
 choices[71][0] = "Se compone del Presidente, los Vicepresidentes y los Secretarios de Estado.";
 choices[71][1] = "Ejerce la funci&oacute;n ejecutiva y la legislativa de acuerdo con la Constituci&oacute;n y las leyes.";
 choices[71][2] = "Cesa tras la celebraci&oacute;n de elecciones generales, en los casos de p&eacute;rdida de confianza parlamentaria, o por dimisi&oacute;n o fallecimiento de su Presidente.";
 choices[71][3] = "El presidente y los dem&aacute;s miembros del Gobierno son nombrados por el Rey a propuesta del Presidente del Congreso.";
 answers[71] = choices[71][2];
 units[71] = "1";
 comments[71] = "Id Pregunta: 184. CONSTITUCION1978";


//  Id pregunta: 577 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Cu&aacute;ndo fue aprobada la Estrategia TIC?";
 choices[72]= new Array();
 choices[72][0] = "El 2 de Octubre de 2015";
 choices[72][1] = "El 15 de Septiembre de 2015";
 choices[72][2] = "El 1 de Octubre de 2015";
 choices[72][3] = "El 5 de Octubre de 2015";
 answers[72] = choices[72][0];
 units[72] = "19";
 comments[72] = "Id Pregunta: 577. Estrategia TIC";


//  Id pregunta: 34 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Cu&aacute;les de los siguientes mecanismos no existe espec&iacute;ficamente como cach&eacute; de c&oacute;digo PHP?";
 choices[73]= new Array();
 choices[73][0] = "Memcached";
 choices[73][1] = "OpCache";
 choices[73][2] = "WinCache Extension for PHP";
 choices[73][3] = "Alternative PHP Cache";
 answers[73] = choices[73][0];
 units[73] = "65";
 comments[73] = "Id Pregunta: 34. AGE A1 2015";


//  Id pregunta: 63 Año de creación de pregunta: 2016
 questions[74]= "75)  El modelo de servicio en la nube en el que el consumidor no tiene control sobre la red, los servidores, sistemas operativos o almacenamiento, pero s&iacute; sobre las aplicaciones desplegadas y sobre los ajustes de configuraci&oacute;n de dichas aplicaciones, se denomina:";
 choices[74]= new Array();
 choices[74][0] = "Infrastructure as a Service (IaaS)";
 choices[74][1] = "Platform as a Service (PaaS)";
 choices[74][2] = "Software as a Service (SaaS)";
 choices[74][3] = "Application as a Service (AaaS)";
 answers[74] = choices[74][1];
 units[74] = "52";
 comments[74] = "Id Pregunta: 63. AGE A1 2015";


