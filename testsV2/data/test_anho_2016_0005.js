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

//  Id pregunta: 235 Año de creación de pregunta: 2016
 questions[0]= "1)  El Art&iacute;culo 108 de la Constituci&oacute;n Espa&ntilde;ola establece que el Gobierno responde solidariamente de su gesti&oacute;n pol&iacute;tica ante:";
 choices[0]= new Array();
 choices[0][0] = "El Jefe del Estado.";
 choices[0][1] = "El Tribunal Constitucional.";
 choices[0][2] = "El Congreso de los Diputados.";
 choices[0][3] = "Las Cortes Generales.";
 answers[0] = choices[0][0];
 units[0] = "1";
 comments[0] = "Id Pregunta: 235. CONSTITUCION1978";
 preguntaids[0] = 235


//  Id pregunta: 682 Año de creación de pregunta: 2016
 questions[1]= "2)  Seg&uacute;n el Real Decreto Ley 5/2013, de 15 de marzo, de medidas para favorecer la continuidad de la vida laboral de los trabajadores de mayor edad y promover el envejecimiento activo:";
 choices[1]= new Array();
 choices[1][0] = "La cuant&iacute;a de la pensi&oacute;n de jubilaci&oacute;n compatible con el trabajo ser&aacute; equivalente al 50 por 100 del importe resultante en el reconocimiento inicial, una vez aplicado, si procede, el l&iacute;mite m&aacute;ximo de pensi&oacute;n p&uacute;blica, o del que se est&eacute; percibiendo, en el momento de inicio de la compatibilidad con el trabajo, excluido, en todo caso, el complemento por m&iacute;nimos, cualquiera que sea la jornada laboral o la actividad que realice el pensionista.";
 choices[1][1] = "El trabajo compatible debe realizarse a tiempo parcial.";
 choices[1][2] = "Finalizada la relaci&oacute;n laboral por cuenta ajena o producido el cese en la actividad por cuenta propia, se restablecer&aacute; el percibo &iacute;ntegro de la pensi&oacute;n de jubilaci&oacute;n transcurridos 12 meses de la finalizaci&oacute;n de la relaci&oacute;n laboral.";
 choices[1][3] = "El acceso a la pensi&oacute;n podr&aacute; tener lugar hasta 5 a&ntilde;os antes de la edad que en cada caso resulte de aplicaci&oacute;n.";
 answers[1] = choices[1][0];
 units[1] = "14";
 comments[1] = "Id Pregunta: 682. Pensiones";
 preguntaids[1] = 682


//  Id pregunta: 728 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Cu&aacute;l es el n&uacute;mero de personas generalmete recomendados para cada equipo de Scrum?";
 choices[2]= new Array();
 choices[2][0] = "De 1 a  4 ";
 choices[2][1] = "De 3 a  7 ";
 choices[2][2] = "De 5 a  9";
 choices[2][3] = "De 7 a 11";
 answers[2] = choices[2][2];
 units[2] = "34, 84";
 comments[2] = "Id Pregunta: 728. Metodologias &aacute;giles";
 preguntaids[2] = 728


//  Id pregunta: 639 Año de creación de pregunta: 2016
 questions[3]= "4)  En el sistema operativo Unix/Linux, el comando id:";
 choices[3]= new Array();
 choices[3][0] = "Muestra el n&uacute;mero de identificaci&oacute;n y el grupo al que pertenece el usuario.";
 choices[3][1] = "El comando id no existe.";
 choices[3][2] = "Muestra el n&uacute;mero de procesos lanzados por el usuario.";
 choices[3][3] = "Muestra las hebras y las identificaciones de los archivos abiertos por el usuario.";
 answers[3] = choices[3][0];
 units[3] = "57";
 comments[3] = "Id Pregunta: 639. Junta de Extremadura A1 2015";
 preguntaids[3] = 639


//  Id pregunta: 745 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Qu&eacute; dos figuras son novedad de la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n ?";
 choices[4]= new Array();
 choices[4][0] = "Las Sociedades de Responsabilidad Limitada de formaci&oacute;n sucesiva y el Emprendedor de responsabilidad limitada";
 choices[4][1] = "Sociedad Limitada de Formaci&oacute;n Sucesiva y Emprendedor de responsabilidad limitada";
 choices[4][2] = "Sociedad de Responsabilidad Limitada y Emprendedor de responsabilidad Limitada";
 choices[4][3] = "Sociedad de Formaci&oacute;n sucesiva y emprendedor de responsabilidad limitada";
 answers[4] = choices[4][1];
 units[4] = "23";
 comments[4] = "Id Pregunta: 745. Direcci&oacute;n p&uacute;blica";
 preguntaids[4] = 745


//  Id pregunta: 52 Año de creación de pregunta: 2016
 questions[5]= "6)  Las normas ISO que cubren los procesos de especificaci&oacute;n de requisitos de calidad del software y evaluaci&oacute;n de la calidad del software corresponden a la serie:";
 choices[5]= new Array();
 choices[5][0] = "ISO/IEC 25000";
 choices[5][1] = "ISO/IEC 27000";
 choices[5][2] = "ISO 9000";
 choices[5][3] = "ISO 9001";
 answers[5] = choices[5][0];
 units[5] = "93";
 comments[5] = "Id Pregunta: 52. AGE A1 2015";
 preguntaids[5] = 52


//  Id pregunta: 768 Año de creación de pregunta: 2016
 questions[6]= "7)  Las Universidades p&uacute;blicas se regir&aacute;n por:";
 choices[6]= new Array();
 choices[6][0] = "las previsiones de la presente Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[6][1] = "su normativa espec&iacute;fica y supletoriamente por las previsiones de la presente Ley";
 choices[6][2] = "exclusivamente por su normativa espec&iacute;fica";
 choices[6][3] = "exclusivamente por las previsiones de la presente Ley";
 answers[6] = choices[6][1];
 units[6] = "4, 7, 8, 9";
 comments[6] = "Id Pregunta: 768. Ley 40/2015";
 preguntaids[6] = 768


//  Id pregunta: 381 Año de creación de pregunta: 2016
 questions[7]= "8)  La ley Org&aacute;nica 3/2007 para la igualdad efectiva entre hombres y mujeres en el &aacute;mbito de la Sociedad de la Informaci&oacute;n, obliga al Gobierno:";
 choices[7]= new Array();
 choices[7][0] = "A promover los contenidos creados por mujeres en el &aacute;mbito de la Sociedad de la Informaci&oacute;n";
 choices[7][1] = "A proteger los contenidos creados por mujeres n el &aacute;mbito de la Sociedad de la Informaci&oacute;n con medidas especiales de propiedad intelectual.";
 choices[7][2] = "A dise&ntilde;ar webs con contenido espec&iacute;fico femenino.";
 choices[7][3] = "A incorporar, en las convocatorias de empleo p&uacute;blico, igual n&uacute;mero de funcionarios que de funcionarias.";
 answers[7] = choices[7][0];
 units[7] = "14";
 comments[7] = "Id Pregunta: 381. POLITICAS DE IGUALDAD";
 preguntaids[7] = 381


//  Id pregunta: 323 Año de creación de pregunta: 2016
 questions[8]= "9)  Los Jueces y Abogados Generales del Tribunal de Justicia de la Uni&oacute;n Europea son nombrados para un per&iacute;odo de:";
 choices[8]= new Array();
 choices[8][0] = "Tres a&ntilde;os.";
 choices[8][1] = "Cuatro a&ntilde;os.";
 choices[8][2] = "Cinco a&ntilde;os.";
 choices[8][3] = "Seis a&ntilde;os.";
 answers[8] = choices[8][3];
 units[8] = "5";
 comments[8] = "Id Pregunta: 323. UNION EUROPEA";
 preguntaids[8] = 323


//  Id pregunta: 787 Año de creación de pregunta: 2016
 questions[9]= "10)  La Administraci&oacute;n General del Estado comprende (se&ntilde;ala la incorrecta):";
 choices[9]= new Array();
 choices[9][0] = "la Organizaci&oacute;n Central, que integra los Ministerios y los servicios comunes";
 choices[9][1] = "la Organizaci&oacute;n Territorial";
 choices[9][2] = "la Organizaci&oacute;n sectorial";
 choices[9][3] = "la Administraci&oacute;n General del Estado en el exterior";
 answers[9] = choices[9][2];
 units[9] = "4, 7, 8, 9";
 comments[9] = "Id Pregunta: 787. Ley 40/2015";
 preguntaids[9] = 787


//  Id pregunta: 301 Año de creación de pregunta: 2016
 questions[10]= "11)  El Presidente del Tribunal de Cuentas es elegido por:";
 choices[10]= new Array();
 choices[10][0] = "Los propios miembros del Tribunal.";
 choices[10][1] = "El Consejo de Europa.";
 choices[10][2] = "El Consejo Europeo.";
 choices[10][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[10] = choices[10][0];
 units[10] = "5";
 comments[10] = "Id Pregunta: 301. UNION EUROPEA";
 preguntaids[10] = 301


//  Id pregunta: 659 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Qu&eacute; es el machine learning?";
 choices[11]= new Array();
 choices[11][0] = "El uso de los datos para el desarrollo de mecanismos de predicci&oacute;n y aprendizaje";
 choices[11][1] = "l uso de datos para la automatizaci&oacute;n de tareas repetitivas";
 choices[11][2] = "El aprendizaje de mecanismos de monitorizaci&oacute;n y alertas";
 choices[11][3] = "Un paradigma en el desarrollo de mecanismos de control ";
 answers[11] = choices[11][0];
 units[11] = "73";
 comments[11] = "Id Pregunta: 659. ";
 preguntaids[11] = 659


//  Id pregunta: 506 Año de creación de pregunta: 2016
 questions[12]= "13)  Sobre el per&iacute;odo medio de pagos, se&ntilde;ale la respuesta falsa:";
 choices[12]= new Array();
 choices[12][0] = "Se entiende que existe sostenibilidad de la deuda comercial, cuando el periodo medio de pago a los proveedores no supere el plazo m&aacute;ximo previsto en la normativa sobre morosidad.";
 choices[12][1] = "Este control informatizado y sistematizado de las facturas favorecer&aacute; un seguimiento riguroso de la morosidad a trav&eacute;s de un indicador, el periodo medio de pagos, que visualizar&aacute; el volumen de deuda comercial de las Administraciones P&uacute;blicas.";
 choices[12][2] = "Para el c&aacute;lculo econ&oacute;mico del per&iacute;odo medio de pago a proveedores, se tendr&aacute;n en cuenta las facturas expedidas desde el 1 de enero de 2015 que consten en el registro contable de facturas o sistema equivalente y las certificaciones mensuales de obra aprobadas a partir de la misma fecha.";
 choices[12][3] = "El per&iacute;odo medio de pagos se calcular&aacute; mediante la siguiente f&oacute;rmula: Periodo medio de pago global a proveedores = &Sigma; (periodo medio de pago de cada entidad x importe operaciones de la entidad)/ &Sigma; importe operaciones de las entidades";
 answers[12] = choices[12][2];
 units[12] = "10";
 comments[12] = "Id Pregunta: 506. PRESUPUESTOS GENERALES";
 preguntaids[12] = 506


//  Id pregunta: 416 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Qu&eacute; art&iacute;culo de la LO 3/2007, regula la igualdad en el &aacute;mbito de la educaci&oacute;n superior:";
 choices[13]= new Array();
 choices[13][0] = "Art. 25 LO, 3/2007.";
 choices[13][1] = "Art. 23 LO, 3/2007.";
 choices[13][2] = "Art. 14 LO, 3/2007.";
 choices[13][3] = "Ninguna es correcta, es el art. 13.";
 answers[13] = choices[13][0];
 units[13] = "14";
 comments[13] = "Id Pregunta: 416. POLITICAS DE IGUALDAD";
 preguntaids[13] = 416


//  Id pregunta: 432 Año de creación de pregunta: 2016
 questions[14]= "15)  Las sociedades obligadas a presentar cuenta de p&eacute;rdidas y ganancias no abreviada, procurar&aacute;n incluir en su Consejo de Administraci&oacute;n un n&uacute;mero de mujeres que permita alcanzar la presencia equilibrada de mujeres y hombres en un plazo:";
 choices[14]= new Array();
 choices[14][0] = "De ocho a&ntilde;os.";
 choices[14][1] = "El d&iacute;a despu&eacute;s de la publicaci&oacute;n en el BOE de la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombre.";
 choices[14][2] = "Ambas son correctas.";
 choices[14][3] = "No existe un l&iacute;mite.";
 answers[14] = choices[14][0];
 units[14] = "14";
 comments[14] = "Id Pregunta: 432. POLITICAS DE IGUALDAD";
 preguntaids[14] = 432


//  Id pregunta: 174 Año de creación de pregunta: 2016
 questions[15]= "16)  De conformidad con la Constituci&oacute;n Espa&ntilde;ola, &iquest; cu&aacute;l de los siguientes derechos y libertades es susceptible de tutela a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional?";
 choices[15]= new Array();
 choices[15][0] = "El derecho a la propiedad privada.";
 choices[15][1] = "El derecho de asociaci&oacute;n.";
 choices[15][2] = "El derecho de fundaci&oacute;n.";
 choices[15][3] = "El derecho de negociaci&oacute;n colectiva.";
 answers[15] = choices[15][1];
 units[15] = "1";
 comments[15] = "Id Pregunta: 174. CONSTITUCION1978";
 preguntaids[15] = 174


//  Id pregunta: 726 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;C&uacute;al es la afirmaci&oacute;n incorrecta?";
 choices[16]= new Array();
 choices[16][0] = "El sprint release es aquel que implementa las tareas necesarias para poner el sistema en producci&oacute;n";
 choices[16][1] = "El sprint release es el &uacute;ltimo sprint de la metodolog&iacute;a SCRUM";
 choices[16][2] = "En el sprint release se pueden llevan a cabo tareas relacionados con el despliegue y generaci&oacute;n de scripts de recuperaci&oacute;n del sistema";
 choices[16][3] = "En el sprint release se pueden llevar a cabo tareas relacionados con la documentaci&oacute;n, pruebas de carga, y tareas relacionadas con las bases de datos en producci&oacute;n.";
 answers[16] = choices[16][1];
 units[16] = "34, 84";
 comments[16] = "Id Pregunta: 726. Metodologias &aacute;giles";
 preguntaids[16] = 726


//  Id pregunta: 97 Año de creación de pregunta: 2016
 questions[17]= "18)  Indique la opci&oacute;n correcta respecto al Portal de Transparencia del Gobierno de Espa&ntilde;a:";
 choices[17]= new Array();
 choices[17][0] = "Incluye informaci&oacute;n acerca de las Entidades Locales.";
 choices[17][1] = "La solicitud de informaci&oacute;n disponible, amparada por el derecho de acceso presente en la Ley 19/2013, no precisa identificaci&oacute;n.";
 choices[17][2] = "No incluye informaci&oacute;n acerca de &oacute;rganos Constitucionales.";
 choices[17][3] = "El Portal es gestionado por el Consejo de Transparencia y Buen Gobierno.";
 answers[17] = choices[17][2];
 units[17] = "22";
 comments[17] = "Id Pregunta: 97. AGE A1 2015";
 preguntaids[17] = 97


//  Id pregunta: 42 Año de creación de pregunta: 2016
 questions[18]= "19)  En relaci&oacute;n con BPEL, &iquest;cu&aacute;l de las siguientes afirmaciones es incorrecta?";
 choices[18]= new Array();
 choices[18][0] = "Es un lenguaje basado en XML para la definici&oacute;n y ejecuci&oacute;n de procesos de negocio utilizando Servicios Web.";
 choices[18][1] = "Es un lenguaje de orquestaci&oacute;n estandarizado por OASIS.";
 choices[18][2] = "BPEL proporciona manejadores (handlers) que permiten tratar situaciones excepcionales o inesperadas.";
 choices[18][3] = "En BPEL se utiliza WS-CDL en lugar de WSDL.";
 answers[18] = choices[18][3];
 units[18] = "86";
 comments[18] = "Id Pregunta: 42. AGE A1 2015";
 preguntaids[18] = 42


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
 preguntaids[19] = 443


//  Id pregunta: 717 Año de creación de pregunta: 2016
 questions[20]= "21)  Respecto a SonarQube, se&ntilde;ale la FALSA:";
 choices[20]= new Array();
 choices[20][0] = "Sirve para evaluar aspectos como la complejidad ciclom&aacute;tica del c&oacute;digo.";
 choices[20][1] = "Anteriormente se denominaba Sonar.";
 choices[20][2] = "Permite disponer de una matriz de dependencia entre objetos.";
 choices[20][3] = "Integra herramientas de medici&oacute;n de la calidad de c&oacute;digo como CPD, findbugs, PMD, checkstyle.";
 answers[20] = choices[20][2];
 units[20] = "92";
 comments[20] = "Id Pregunta: 717. INTEGRACION CONTINUA";
 preguntaids[20] = 717


//  Id pregunta: 802 Año de creación de pregunta: 2016
 questions[21]= "22)  La Administraci&oacute;n General del Estado se organiza:";
 choices[21]= new Array();
 choices[21][0] = "en Ministerios";
 choices[21][1] = "en Presidencia del Gobierno y en Ministerios";
 choices[21][2] = "en Presidencia del Gobierno, en Ministerios y en Secretar&iacute;as Generales";
 choices[21][3] = "en Presidencia del Gobierno, en Ministerios, en Secretar&iacute;as Generales y en el Servicio Exterior";
 answers[21] = choices[21][1];
 units[21] = "4, 7, 8, 9";
 comments[21] = "Id Pregunta: 802. Ley 40/2015";
 preguntaids[21] = 802


//  Id pregunta: 552 Año de creación de pregunta: 2016
 questions[22]= "23)  Entre las funciones a desarrollar por la Comisi&oacute;n Sectorial de la administraci&oacute;n electr&oacute;nica NO se encuentra:";
 choices[22]= new Array();
 choices[22][0] = "Asegurar la compatibilidad e interoperabilidad de los sistemas y aplicaciones empleados por las Administraciones P&uacute;blicas.";
 choices[22][1] = "Impulsar el desarrollo de la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a.";
 choices[22][2] = "Asegurar la cooperaci&oacute;n entre las Administraciones P&uacute;blicas para proporcionar informaci&oacute;n administrativa clara, actualizada e inequ&iacute;voca.";
 choices[22][3] = "El seguimiento de la ejecuci&oacute;n del Plan de Transformaci&oacute;n Digital";
 answers[22] = choices[22][3];
 units[22] = "26";
 comments[22] = "Id Pregunta: 552. Gobernanza TIC";
 preguntaids[22] = 552


//  Id pregunta: 274 Año de creación de pregunta: 2016
 questions[23]= "24)  La Ley 19/2013 de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno ha establecido el derecho:";
 choices[23]= new Array();
 choices[23][0] = "Al acceso a la informaci&oacute;n p&uacute;blica, en desarrollo de los t&eacute;rminos ya previstos por la Ley 11/2007, de acceso electr&oacute;nico de los ciudadano a los servicios p&uacute;blicos.";
 choices[23][1] = "Al acceso a la informaci&oacute;n p&uacute;blica, por primera vez en nuestra legislaci&oacute;n positiva.";
 choices[23][2] = "Al acceso a la informaci&oacute;n p&uacute;blica a trav&eacute;s del portal de transparencia.";
 choices[23][3] = "Al acceso a la informaci&oacute;n p&uacute;blica, con las limitaciones derivadas del posible perjuicio para la defensa, seguridad nacional o funciones administrativas de inspecci&oacute;n, entre otras.";
 answers[23] = choices[23][3];
 units[23] = "22";
 comments[23] = "Id Pregunta: 274. LEY DE TRANSPARENCIA";
 preguntaids[23] = 274


//  Id pregunta: 563 Año de creación de pregunta: 2016
 questions[24]= "25)  El plan nacional de ciudades inteligentes...";
 choices[24]= new Array();
 choices[24][0] = "Es una apuesta liderada por la Federaci&oacute;n Espa&ntilde;ola de Municipios y Provincias";
 choices[24][1] = "Es una apuesta del ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[24][2] = "Es una apuesta liderada por una gran asociaci&oacute;n de empresas tecnol&oacute;gicas nacionales";
 choices[24][3] = "No existe";
 answers[24] = choices[24][1];
 units[24] = "19";
 comments[24] = "Id Pregunta: 563. Ciudades Inteligentes";
 preguntaids[24] = 563


//  Id pregunta: 657 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;Qu&eacute; aplicativo no se encuentra dentro del ecosistemas de Haddoop?";
 choices[25]= new Array();
 choices[25][0] = "Yarn";
 choices[25][1] = "Flume";
 choices[25][2] = "Hive";
 choices[25][3] = "BizAgi";
 answers[25] = choices[25][3];
 units[25] = "73";
 comments[25] = "Id Pregunta: 657. ";
 preguntaids[25] = 657


//  Id pregunta: 483 Año de creación de pregunta: 2016
 questions[26]= "27)  A tenor del art&iacute;culo 48 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, podr&aacute; ser diferido el vencimiento de la obligaci&oacute;n de pago del precio de compra de bienes inmuebles adquiridos directamente cuyo importe excede de:";
 choices[26]= new Array();
 choices[26][0] = "Cuatro millones de euros.";
 choices[26][1] = "Seis millones de euros.";
 choices[26][2] = "Siete millones de euros.";
 choices[26][3] = "Cinco millones de euros.";
 answers[26] = choices[26][1];
 units[26] = "10";
 comments[26] = "Id Pregunta: 483. PRESUPUESTOS GENERALES";
 preguntaids[26] = 483


//  Id pregunta: 185 Año de creación de pregunta: 2016
 questions[27]= "28)  Se&ntilde;ale cu&aacute;l de las siguientes funciones NO est&aacute; atribuida constitucionalmente al Rey:";
 choices[27]= new Array();
 choices[27][0] = "El mando supremo de las Fuerzas Armadas.";
 choices[27][1] = "Autorizar indultos generales.";
 choices[27][2] = "Sancionar las leyes.";
 choices[27][3] = "Promulgar las leyes.";
 answers[27] = choices[27][1];
 units[27] = "1";
 comments[27] = "Id Pregunta: 185. CONSTITUCION1978";
 preguntaids[27] = 185


//  Id pregunta: 679 Año de creación de pregunta: 2016
 questions[28]= "29)  Las situaciones de dependencia se clasifican en los siguientes grados:";
 choices[28]= new Array();
 choices[28][0] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave";
 choices[28][1] = "Grado I dependencia moderada, grado II dependencia severa, grado III dependencia muy severa";
 choices[28][2] = "Grado I dependencia moderada, grado II dependencia severa, grado III gran dependencia";
 choices[28][3] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave, grado IV gran dependencia";
 answers[28] = choices[28][2];
 units[28] = "14";
 comments[28] = "Id Pregunta: 679. Dependencia";
 preguntaids[28] = 679


//  Id pregunta: 430 Año de creación de pregunta: 2016
 questions[29]= "30)  En el acceso a bienes y servicios, ning&uacute;n contratante podr&aacute; indagar sobre la situaci&oacute;n de embarazo de una mujer demandante del mismo, salvo por razones de:";
 choices[29]= new Array();
 choices[29][0] = "Incompatibilidad del puesto con una baja maternal.";
 choices[29][1] = "Protecci&oacute;n de su salud.";
 choices[29][2] = "Ninguna es correcta.";
 choices[29][3] = "A y B son correctas.";
 answers[29] = choices[29][1];
 units[29] = "14";
 comments[29] = "Id Pregunta: 430. POLITICAS DE IGUALDAD";
 preguntaids[29] = 430


//  Id pregunta: 645 Año de creación de pregunta: 2016
 questions[30]= "31)  La generalizaci&oacute;n es el tipo de interrelaci&oacute;n que existe entre un tipo de entidad, supertipo, y los tipos de entidad m&aacute;s espec&iacute;ficos (subtipos) que dependen de &eacute;l. Las cardinalidades m&aacute;ximas y m&iacute;nimas son siempre:";
 choices[30]= new Array();
 choices[30][0] = "(0,1) en el supertipo y (0,1) en los subtipos.";
 choices[30][1] = "(1,1) en el supertipo y (1,1) en los subtipos.";
 choices[30][2] = "(1,1) en el supertipo y (0,1) en los subtipos.";
 choices[30][3] = "(0,1) en el supertipo y (1,1) en los subtipos.";
 answers[30] = choices[30][2];
 units[30] = "85";
 comments[30] = "Id Pregunta: 645. Junta de Extremadura A1 2015";
 preguntaids[30] = 645


//  Id pregunta: 380 Año de creación de pregunta: 2016
 questions[31]= "32)  La acreditaci&oacute;n de las situaciones de violencia de g&eacute;nero ejercida sobre las trabajadoras, seg&uacute;n indica la Ley Org&aacute;nica 1/2004 de Medidas de Protecci&oacute;n Integral contra la violencia de g&eacute;nero, se produce mediante:";
 choices[31]= new Array();
 choices[31][0] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima.";
 choices[31][1] = "La correspondiente denuncia presentada en Comisar&iacute;a o Juzgado.";
 choices[31][2] = "La orden de alejamiento a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal que indique la existencia de indicios de violencia de g&eacute;nero.";
 choices[31][3] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal en el que se indique la existencia de indicios de violencia de g&eacute;nero, hasta que se dicte la orden de protecci&oacute;n.";
 answers[31] = choices[31][3];
 units[31] = "14";
 comments[31] = "Id Pregunta: 380. POLITICAS DE IGUALDAD";
 preguntaids[31] = 380


//  Id pregunta: 633 Año de creación de pregunta: 2016
 questions[32]= "33)  La segmentaci&oacute;n es un esquema de asignaci&oacute;n de memoria que:";
 choices[32]= new Array();
 choices[32][0] = "Divide la memoria f&iacute;sica disponible en un n&uacute;mero fijo de particiones cuyo tama&ntilde;o tambi&eacute;n es fijo.";
 choices[32][1] = "Divide la memoria f&iacute;sica disponible en particiones cuyo n&uacute;mero y tama&ntilde;o var&iacute;a para adaptarse a las exigencias los procesos.";
 choices[32][2] = "Divide el espacio de direcciones de cada proceso en bloques que puedan ser situados en &aacute;reas de memoria no contiguas.";
 choices[32][3] = "Divide la memoria en dos particiones: una para el sistema operativo y otra para el proceso que se encuentra en ejecuci&oacute;n.";
 answers[32] = choices[32][2];
 units[32] = "50";
 comments[32] = "Id Pregunta: 633. Junta de Extremadura A1 2015";
 preguntaids[32] = 633


//  Id pregunta: 177 Año de creación de pregunta: 2016
 questions[33]= "34)  El art&iacute;culo 152 de la Constituci&oacute;n espa&ntilde;ola se refiere a la organizaci&oacute;n instituicional b&aacute;sica de cada Comunidad Aut&oacute;noma, la cual se basar&aacute; en:";
 choices[33]= new Array();
 choices[33][0] = "Una Conseller&iacute;a legislativa, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[33][1] = "Una Asamble legislativa, un Presidente, un Delegado de Gobierno y un Comit&eacute; Superior del Poder Judicial.";
 choices[33][2] = "Una Asamble legislativa, un Consejo de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[33][3] = "Un Consejo legislativo, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Supremo.";
 answers[33] = choices[33][2];
 units[33] = "1";
 comments[33] = "Id Pregunta: 177. CONSTITUCION1978";
 preguntaids[33] = 177


//  Id pregunta: 211 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;A cu&aacute;ntos miembros del Tribunal Constitucional corresponde proponer al Gobierno?";
 choices[34]= new Array();
 choices[34][0] = "Cuatro.";
 choices[34][1] = "Ninguno.";
 choices[34][2] = "Dos.";
 choices[34][3] = "Seis.";
 answers[34] = choices[34][2];
 units[34] = "1";
 comments[34] = "Id Pregunta: 211. CONSTITUCION1978";
 preguntaids[34] = 211


//  Id pregunta: 792 Año de creación de pregunta: 2016
 questions[35]= "36)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Subdelegados del Gobierno en las provincias los cuales tendr&aacute;n nivel de:";
 choices[35]= new Array();
 choices[35][0] = "Subsecretario";
 choices[35][1] = "Subdirector general";
 choices[35][2] = "Secretario de Estado";
 choices[35][3] = "ninguna es correcta";
 answers[35] = choices[35][1];
 units[35] = "4, 7, 8, 9";
 comments[35] = "Id Pregunta: 792. Ley 40/2015";
 preguntaids[35] = 792


//  Id pregunta: 724 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Cu&aacute;l es la principal desventaja de sprints m&aacute;s largos?";
 choices[36]= new Array();
 choices[36][0] = "Permite reaccionar al equipo mejor ante imprevistos";
 choices[36][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[36][2] = "Se reduce el n&uacute;mero de reuniones de sprint";
 choices[36][3] = "Se puede desarrollar algo diferente a lo requerido y obtener el feedback del cliente m&aacute;s tarde.";
 answers[36] = choices[36][3];
 units[36] = "34, 84";
 comments[36] = "Id Pregunta: 724. Metodologias &aacute;giles";
 preguntaids[36] = 724


//  Id pregunta: 83 Año de creación de pregunta: 2016
 questions[37]= "38)  Seg&uacute;n WCAG 2.0, &iquest;con qu&eacute; principio est&aacute; relacionada la pauta &ldquo;Hacer que las p&aacute;ginas web aparezcan y operen de forma predecible&rdquo;?";
 choices[37]= new Array();
 choices[37][0] = "Perceptible";
 choices[37][1] = "Operable";
 choices[37][2] = "Comprensible";
 choices[37][3] = "Robusto";
 answers[37] = choices[37][2];
 units[37] = "42";
 comments[37] = "Id Pregunta: 83. AGE A1 2015";
 preguntaids[37] = 83


//  Id pregunta: 507 Año de creación de pregunta: 2016
 questions[38]= "39)  Respecto a la regla de gasto. Se&ntilde;ale la respuesta falsa:";
 choices[38]= new Array();
 choices[38][0] = "La variaci&oacute;n del gasto computable de la Administraci&oacute;n Central, de las Comunidades Aut&oacute;nomas y de las Corporaciones Locales, no podr&aacute; superar la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola.";
 choices[38][1] = "No obstante, cuando exista un desequilibrio estructural en las cuentas p&uacute;blicas o una deuda p&uacute;blica superior al objetivo establecido, el crecimiento del gasto p&uacute;blico computable se ajustar&aacute; a la senda establecida en los respectivos planes econ&oacute;mico-financieros y de reequilibrio previstos.";
 choices[38][2] = "Corresponde al Ministerio de Econom&iacute;a y Competitividad calcular la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola, de acuerdo con la metodolog&iacute;a utilizada por la Comisi&oacute;n Europea en aplicaci&oacute;n de su normativa.";
 choices[38][3] = "Esta tasa se publicar&aacute; en el informe de situaci&oacute;n de la econom&iacute;a. Ser&aacute; la referencia a tener en cuenta por la Administraci&oacute;n Central en la elaboraci&oacute;n de sus Presupuestos.";
 answers[38] = choices[38][3];
 units[38] = "10";
 comments[38] = "Id Pregunta: 507. PRESUPUESTOS GENERALES";
 preguntaids[38] = 507


//  Id pregunta: 829 Año de creación de pregunta: 2016
 questions[39]= "40)  La recusaci&oacute;n se plantea...";
 choices[39]= new Array();
 choices[39][0] = "Antes de iniciado el procedimiento";
 choices[39][1] = "Una vez iniciado el procedimiento";
 choices[39][2] = "Cuando el instructor dicta propuesta de resoluci&oacute;n";
 choices[39][3] = "En cualquier momento del procedimiento";
 answers[39] = choices[39][0];
 units[39] = "4, 7, 8, 9";
 comments[39] = "Id Pregunta: 829. Ley 40/2015";
 preguntaids[39] = 829


//  Id pregunta: 554 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;Cu&aacute;l de los siguientes no es uno de los pilares de la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[40]= new Array();
 choices[40][0] = "Establecer redes de telecomunicaciones continentales";
 choices[40][1] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa";
 choices[40][2] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar";
 choices[40][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[40] = choices[40][0];
 units[40] = "17";
 comments[40] = "Id Pregunta: 554. Mercado &Uacute;nico Digital";
 preguntaids[40] = 554


//  Id pregunta: 82 Año de creación de pregunta: 2016
 questions[41]= "42)  La titularidad de los derechos de explotaci&oacute;n de un programa de ordenador por una persona jur&iacute;dica expirar&aacute;:";
 choices[41]= new Array();
 choices[41][0] = "A los setenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[41][1] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita, o al de su creaci&oacute;n si no se hubiera divulgado.";
 choices[41][2] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[41][3] = "A los setenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita o al de su creaci&oacute;n si no se hubiera divulgado.";
 answers[41] = choices[41][3];
 units[41] = "41";
 comments[41] = "Id Pregunta: 82. AGE A1 2015";
 preguntaids[41] = 82


//  Id pregunta: 640 Año de creación de pregunta: 2016
 questions[42]= "43)  Indique cu&aacute;l de las siguientes afirmaciones es la correcta:";
 choices[42]= new Array();
 choices[42][0] = "Linux dispone de los tres principales protocolos de red para sistemas UNIX: Novel, TCP/IP y UUCP.";
 choices[42][1] = "Linux dispone &uacute;nicamente del protocolo TCP/IP.";
 choices[42][2] = "Linux dispone de todos los protocolos de red existentes.";
 choices[42][3] = "Linux dispone de los dos principales protocolos de red para sistemas UNIX: TCP/IP y UUCP.";
 answers[42] = choices[42][3];
 units[42] = "57";
 comments[42] = "Id Pregunta: 640. Junta de Extremadura A1 2015";
 preguntaids[42] = 640


//  Id pregunta: 449 Año de creación de pregunta: 2016
 questions[43]= "44)  Dentro de la l&oacute;gica presupuestaria, los gastos tienen car&aacute;cter...";
 choices[43]= new Array();
 choices[43][0] = "Ejecutivo";
 choices[43][1] = "Limitativo";
 choices[43][2] = "Estimativo";
 choices[43][3] = "Progresivo";
 answers[43] = choices[43][1];
 units[43] = "10";
 comments[43] = "Id Pregunta: 449. PRESUPUESTOS GENERALES";
 preguntaids[43] = 449


//  Id pregunta: 642 Año de creación de pregunta: 2016
 questions[44]= "45)  Los sistemas de archivos gestionados por Windows 2008 Server son:";
 choices[44]= new Array();
 choices[44][0] = "Fat y Ntfs.";
 choices[44][1] = "Extfat y Fat.";
 choices[44][2] = "Fat y Nfst.";
 choices[44][3] = "ext2fs y Ntfs.";
 answers[44] = choices[44][0];
 units[44] = "58";
 comments[44] = "Id Pregunta: 642. Junta de Extremadura A1 2015";
 preguntaids[44] = 642


//  Id pregunta: 181 Año de creación de pregunta: 2016
 questions[45]= "46)  El Presidente del Tribunal Constitucional, seg&uacute;n lo establecido en el Art&iacute;culo 160 de la Constituci&oacute;n Espa&ntilde;ola ser&aacute; nombrado entre sus miembros por:";
 choices[45]= new Array();
 choices[45][0] = "l Consejo General del Poder Judicial";
 choices[45][1] = "El pleno de Tribunal Constitucional";
 choices[45][2] = "El Presidente del Gobierno, a propuesta del pleno del Tribunal Constitucional.";
 choices[45][3] = "Por el Rey, a propuesta del mismo Tribunal en pleno.";
 answers[45] = choices[45][3];
 units[45] = "1";
 comments[45] = "Id Pregunta: 181. CONSTITUCION1978";
 preguntaids[45] = 181


//  Id pregunta: 18 Año de creación de pregunta: 2016
 questions[46]= "47)  Indique en qu&eacute; capa del modelo OSI se establece la encriptaci&oacute;n:";
 choices[46]= new Array();
 choices[46][0] = "Aplicaci&oacute;n";
 choices[46][1] = "Sesi&oacute;n";
 choices[46][2] = "Presentaci&oacute;n";
 choices[46][3] = "Transporte";
 answers[46] = choices[46][2];
 units[46] = "105";
 comments[46] = "Id Pregunta: 18. AGE A1 2015";
 preguntaids[46] = 18


//  Id pregunta: 16 Año de creación de pregunta: 2016
 questions[47]= "48)  De acuerdo con la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos de comunicaciones electr&oacute;nicas y de redes p&uacute;blicas de comunicaci&oacute;n:";
 choices[47]= new Array();
 choices[47][0] = "Deben conservarse los datos que revelen el contenido de la comunicaci&oacute;n en virtud de lo establecido en la citada Ley.";
 choices[47][1] = "La obligaci&oacute;n de conservaci&oacute;n de datos cesa a los tres a&ntilde;os desde la fecha en que se haya producido la comunicaci&oacute;n.";
 choices[47][2] = "Los datos conservados de conformidad con lo dispuesto en la citada Ley pueden ser cedidos para los fines que en la misma se determinan previa autorizaci&oacute;n administrativa.";
 choices[47][3] = "Son sujetos obligados los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones.";
 answers[47] = choices[47][3];
 units[47] = "19";
 comments[47] = "Id Pregunta: 16. AGE A1 2015";
 preguntaids[47] = 16


//  Id pregunta: 71 Año de creación de pregunta: 2016
 questions[48]= "49)  Seg&uacute;n el Modelo de Referencia Workflow definido por WfMC, &iquest;cu&aacute;l de las siguientes funciones corresponde al Servicio de Representaci&oacute;n del Workflow?";
 choices[48]= new Array();
 choices[48][0] = "Interpretar la descripci&oacute;n de procesos y controlar las diferentes instancias de los procesos, secuenciar las actividades, adicionar elementos a la lista de trabajo de los usuarios, e invocar las aplicaciones necesarias.";
 choices[48][1] = "Especificar el formato de intercambio com&uacute;n para soportar la transferencia de definiciones de procesos entre productos diferentes, utilizando un lenguaje de definici&oacute;n de procesos.";
 choices[48][2] = "Definir los mecanismos requeridos por los desarrolladores de productos workflow para implementar la comunicaci&oacute;n de un motor workflow con otros.";
 choices[48][3] = "Monitorizar informaci&oacute;n relevante del workflow, fundamentalmente con fines de auditor&iacute;a y estad&iacute;sticos.";
 answers[48] = choices[48][0];
 units[48] = "86";
 comments[48] = "Id Pregunta: 71. AGE A1 2015";
 preguntaids[48] = 71


//  Id pregunta: 332 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;Cu&aacute;ndo son de aplicaci&oacute;n los tratados internacionales?:";
 choices[49]= new Array();
 choices[49][0] = "Al d&iacute;a siguiente de su ratificaci&oacute;n por el Congreso de los Diputados.";
 choices[49][1] = "Al d&iacute;a siguiente de su firma por los Ministros plenipotenciarios.";
 choices[49][2] = "El mismo d&iacute;a de la firma por los Ministros plenipotenciarios.";
 choices[49][3] = "No ser&aacute;n de aplicaci&oacute;n directa hasta que formen parte del ordenamiento mediante su publicaci&oacute;n en el BOE.";
 answers[49] = choices[49][3];
 units[49] = "5";
 comments[49] = "Id Pregunta: 332. UNION EUROPEA";
 preguntaids[49] = 332


//  Id pregunta: 700 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Qu&eacute; es SonarQube?";
 choices[50]= new Array();
 choices[50][0] = "Una m&eacute;trica de calidad orientada a estandarizar la evaluaci&oacute;n cualitativa del c&oacute;digo fuente.";
 choices[50][1] = "Una plataforma Open Source de inspecci&oacute;n continua de la calidad del c&oacute;digo.";
 choices[50][2] = "Una herramienta propietaria para la integraci&oacute;n continua, integrada en Apache Jenkins.";
 choices[50][3] = "Una herramienta multiplataforma para la evaluaci&oacute;n de la calidad en el c&oacute;digo desarrollada en VisualBasic 6.";
 answers[50] = choices[50][2];
 units[50] = "92";
 comments[50] = "Id Pregunta: 700. INTEGRACION CONTINUA";
 preguntaids[50] = 700


//  Id pregunta: 12 Año de creación de pregunta: 2016
 questions[51]= "52)  Indique cu&aacute;l de las siguientes proposiciones es cierta:";
 choices[51]= new Array();
 choices[51][0] = "AngularJS es un framework de JavaScript de c&oacute;digo abierto que sigue el patr&oacute;n de dise&ntilde;o MVC.";
 choices[51][1] = "PrimeFaces y RichFaces son librer&iacute;as que extienden el framework .NET de Microsoft.";
 choices[51][2] = "PrimeFaces es una extensi&oacute;n de AngularJS que permite la integraci&oacute;n de componentes RichFaces.";
 choices[51][3] = "El framework Spring es compatible con el uso delORM Hibernate, pero es incompatible con el uso de Java Server Faces en la capa de presentaci&oacute;n.";
 answers[51] = choices[51][0];
 units[51] = "62";
 comments[51] = "Id Pregunta: 12. AGE A1 2015";
 preguntaids[51] = 12


//  Id pregunta: 251 Año de creación de pregunta: 2016
 questions[52]= "53)  La Justicia, en Espa&ntilde;a, emana del/de la:";
 choices[52]= new Array();
 choices[52][0] = "Rey.";
 choices[52][1] = "&Oacute;rgano jurisdiccional que act&uacute;a en cada caso.";
 choices[52][2] = "Constituci&oacute;n.";
 choices[52][3] = "Pueblo.";
 answers[52] = choices[52][2];
 units[52] = "1";
 comments[52] = "Id Pregunta: 251. CONSTITUCION1978";
 preguntaids[52] = 251


//  Id pregunta: 756 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;Cu&aacute;l de los siguientes no es un eje del Plan de Servicios P&uacute;blicos Digitales que forma parte de la Agenda Digital para Espa&ntilde;a?";
 choices[53]= new Array();
 choices[53][0] = "Programa de Educaci&oacute;n Digital";
 choices[53][1] = "Programa de Salud y Bienestar Social";
 choices[53][2] = "Programa de Administraci&oacute;n de Justicia Digital";
 choices[53][3] = "Programa de capacitaci&oacute;n de profesionales TIC";
 answers[53] = choices[53][3];
 units[53] = "19";
 comments[53] = "Id Pregunta: 756. Agenda Digital para Espa&ntilde;a";
 preguntaids[53] = 756


//  Id pregunta: 364 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;En qu&eacute; fecha entr&oacute; en vigor el Tratado de Amsterdam?:";
 choices[54]= new Array();
 choices[54][0] = "El 1 de junio de 1999.";
 choices[54][1] = "El 1 de mayo de 1999.";
 choices[54][2] = "El 1 de abril de 1999.";
 choices[54][3] = "El 1 de marzo de 1999.";
 answers[54] = choices[54][1];
 units[54] = "5";
 comments[54] = "Id Pregunta: 364. UNION EUROPEA";
 preguntaids[54] = 364


//  Id pregunta: 788 Año de creación de pregunta: 2016
 questions[55]= "56)  En la organizaci&oacute;n central son &oacute;rganos superiores:";
 choices[55]= new Array();
 choices[55][0] = "los Subsecretarios y los Secretarios generales";
 choices[55][1] = "los Ministros y los Secretarios generales t&eacute;cnicos";
 choices[55][2] = "los Secretarios de Estado y los Directores generales";
 choices[55][3] = "los Ministros y los Secretarios de Estado";
 answers[55] = choices[55][3];
 units[55] = "4, 7, 8, 9";
 comments[55] = "Id Pregunta: 788. Ley 40/2015";
 preguntaids[55] = 788


//  Id pregunta: 63 Año de creación de pregunta: 2016
 questions[56]= "57)  El modelo de servicio en la nube en el que el consumidor no tiene control sobre la red, los servidores, sistemas operativos o almacenamiento, pero s&iacute; sobre las aplicaciones desplegadas y sobre los ajustes de configuraci&oacute;n de dichas aplicaciones, se denomina:";
 choices[56]= new Array();
 choices[56][0] = "Infrastructure as a Service (IaaS)";
 choices[56][1] = "Platform as a Service (PaaS)";
 choices[56][2] = "Software as a Service (SaaS)";
 choices[56][3] = "Application as a Service (AaaS)";
 answers[56] = choices[56][1];
 units[56] = "52";
 comments[56] = "Id Pregunta: 63. AGE A1 2015";
 preguntaids[56] = 63


//  Id pregunta: 342 Año de creación de pregunta: 2016
 questions[57]= "58)  La moci&oacute;n de censura contra la Comisi&oacute;n existe desde:";
 choices[57]= new Array();
 choices[57][0] = "El Tratado de Maastrich.";
 choices[57][1] = "El Tratado de Amsterdam.";
 choices[57][2] = "El Tratado de Par&iacute;s.";
 choices[57][3] = "El Tratado de Roma.";
 answers[57] = choices[57][3];
 units[57] = "5";
 comments[57] = "Id Pregunta: 342. UNION EUROPEA";
 preguntaids[57] = 342


//  Id pregunta: 536 Año de creación de pregunta: 2016
 questions[58]= "59)  Las Administraciones P&uacute;blicas podr&aacute;n habilitar:";
 choices[58]= new Array();
 choices[58][0] = "con car&aacute;cter general a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[58][1] = "con car&aacute;cter general o espec&iacute;fico a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[58][2] = "con car&aacute;cter general o espec&iacute;fico a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[58][3] = "con car&aacute;cter general a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 answers[58] = choices[58][2];
 units[58] = "7";
 comments[58] = "Id Pregunta: 536. LEY 39/2015";
 preguntaids[58] = 536


//  Id pregunta: 482 Año de creación de pregunta: 2016
 questions[59]= "60)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el &aacute;mbito del Ministerio de Defensa y de la Seguridad Social, el control se ejercer&aacute; a trav&eacute;s de:";
 choices[59]= new Array();
 choices[59][0] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[59][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[59][2] = "Las respuestas a) b) no son correctas.";
 choices[59][3] = "Las respuestas a) y b) son correctas.";
 answers[59] = choices[59][3];
 units[59] = "10";
 comments[59] = "Id Pregunta: 482. PRESUPUESTOS GENERALES";
 preguntaids[59] = 482


//  Id pregunta: 840 Año de creación de pregunta: 2016
 questions[60]= "61)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta correcta.";
 choices[60]= new Array();
 choices[60][0] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos provisionalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[60][1] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos temporalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[60][2] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos eventualmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[60][3] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos circunstancialmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 answers[60] = choices[60][1];
 units[60] = "4, 7, 8, 9";
 comments[60] = "Id Pregunta: 840. Ley 40/2015";
 preguntaids[60] = 840


//  Id pregunta: 544 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Cu&aacute;l es el &oacute;rgano de la Comisi&oacute;n Europea encargado de la gobernanza TIC cuya misi&oacute;n es garantizar que la Comisi&oacute;n haga un uso eficaz de las tecnolog&iacute;as de la informaci&oacute;n y la comunicaci&oacute;n para el logro de sus objetivos organizativos y pol&iacute;ticos?";
 choices[61]= new Array();
 choices[61][0] = "La Direcci&oacute;n General de Inform&aacute;tica (DIGIT)";
 choices[61][1] = "Oficina del Organismo de Reguladores Europeos de las Comunicaciones Electr&oacute;nicas (ORECE)";
 choices[61][2] = "Agencia de Seguridad de las Redes y de la Informaci&oacute;n de la Uni&oacute;n Europea (ENISA)";
 choices[61][3] = "Instituto Europeo de Innovaci&oacute;n y Tecnolog&iacute;a (EIT)";
 answers[61] = choices[61][0];
 units[61] = "26";
 comments[61] = "Id Pregunta: 544. Gobernanza TIC";
 preguntaids[61] = 544


//  Id pregunta: 735 Año de creación de pregunta: 2016
 questions[62]= "63)  Son l&iacute;neas de acci&oacute;n del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP.";
 choices[62]= new Array();
 choices[62][0] = "Disponer de sistemas de an&aacute;lisis de datos para la toma de decisiones y de funcionarios formados adecuadamente.";
 choices[62][1] = "Que en el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser electr&oacute;nica.";
 choices[62][2] = "Un mejor formaci&oacute;n del funcionariado y una atenci&oacute;n al ciudadano acorde a las nuevas tecnolog&iacute;as.";
 choices[62][3] = "Desarrollar el puesto de trabajo digital y mejorar la satisfacci&oacute;n del usuario en el uso de los servicios p&uacute;blicos digitales.";
 answers[62] = choices[62][3];
 units[62] = "28";
 comments[62] = "Id Pregunta: 735. Estrategia TIC";
 preguntaids[62] = 735


//  Id pregunta: 89 Año de creación de pregunta: 2016
 questions[63]= "64)  En un contrato cuyo presupuesto es de 100.000 euros sin IVA y se adjudica por 80.000, IVA excluido, la garant&iacute;a definitiva ser&aacute; de:";
 choices[63]= new Array();
 choices[63][0] = "2.400 euros";
 choices[63][1] = "4.000 euros";
 choices[63][2] = "3.200 euros";
 choices[63][3] = "1.600 euros";
 answers[63] = choices[63][1];
 units[63] = "37";
 comments[63] = "Id Pregunta: 89. AGE A1 2015";
 preguntaids[63] = 89


//  Id pregunta: 101 Año de creación de pregunta: 2016
 questions[64]= "65)  El Teorema de Brewer o Principio CAP recoge las siguientes garant&iacute;as:";
 choices[64]= new Array();
 choices[64][0] = "Consistencia (Consistency), Disponibilidad (Availability) y Persistencia (Persistence)";
 choices[64][1] = "Consistencia (Consistency), Disponibilidad (Availability) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[64][2] = "Consistencia (Consistency), Atomicidad (Atomicity) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[64][3] = "Confidencialidad (Confidentiality), Autenticidad (Authentication) y Protecci&oacute;n (Protection)";
 answers[64] = choices[64][1];
 units[64] = "73";
 comments[64] = "Id Pregunta: 101. ";
 preguntaids[64] = 101


//  Id pregunta: 328 Año de creación de pregunta: 2016
 questions[65]= "66)  El principal &oacute;rgano decisorio de la Comunidad Europea es:";
 choices[65]= new Array();
 choices[65][0] = "El Presidente del Consejo Europeo.";
 choices[65][1] = "La Comisi&oacute;n.";
 choices[65][2] = "El Consejo.";
 choices[65][3] = "El Parlamento Europeo.";
 answers[65] = choices[65][2];
 units[65] = "5";
 comments[65] = "Id Pregunta: 328. UNION EUROPEA";
 preguntaids[65] = 328


//  Id pregunta: 543 Año de creación de pregunta: 2016
 questions[66]= "67)  Se&ntilde;ala la correcta:";
 choices[66]= new Array();
 choices[66][0] = "la falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n impedir&aacute; que se tenga por realizado el acto de que se trate";
 choices[66][1] = "el documento electr&oacute;nico que acredite el resultado de la consulta al registro electr&oacute;nico de apoderamientos correspondiente tendr&aacute; la condici&oacute;n de acreditaci&oacute;n a estos efectos";
 choices[66][2] = "los registros electr&oacute;nicos generales y particulares de apoderamientos pertenecientes a todas y cada una de las Administraciones, ser&aacute;n preferiblemente interoperables entre s&iacute;";
 choices[66][3] = "el interesado no podr&aacute; comparecer por s&iacute; mismo en un procedimiento en el que haya designado representante";
 answers[66] = choices[66][1];
 units[66] = "7";
 comments[66] = "Id Pregunta: 543. LEY 39/2015";
 preguntaids[66] = 543


//  Id pregunta: 455 Año de creación de pregunta: 2016
 questions[67]= "68)  En las Administraciones P&uacute;blicas...";
 choices[67]= new Array();
 choices[67][0] = "Existe un Presupuesto ordinario &uacute;nicamente";
 choices[67][1] = "Existen s&oacute;lo un presupuesto ordinario y un presupuesto extraordinario";
 choices[67][2] = "Existe un &uacute;nico presupuesto ordinario y uno o varios presupuestos extraordinarios";
 choices[67][3] = "Existen varios presupuestos que indistintamente pueden ser considerados ordinarios o extraordinarios";
 answers[67] = choices[67][0];
 units[67] = "10";
 comments[67] = "Id Pregunta: 455. PRESUPUESTOS GENERALES";
 preguntaids[67] = 455


//  Id pregunta: 708 Año de creación de pregunta: 2016
 questions[68]= "69)  El Portal de Transparencia de la Administraci&oacute;n General del Estado depende del:";
 choices[68]= new Array();
 choices[68][0] = "Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[68][1] = "Ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[68][2] = "Ministerio de la Presidencia";
 choices[68][3] = "Ministerio de Fomento";
 answers[68] = choices[68][2];
 units[68] = "22";
 comments[68] = "Id Pregunta: 708. Portal de Transparencia";
 preguntaids[68] = 708


//  Id pregunta: 252 Año de creación de pregunta: 2016
 questions[69]= "70)  La Constituci&oacute;n garantiza el principio de irretroactividad:";
 choices[69]= new Array();
 choices[69][0] = "De las disposiciones favorables.";
 choices[69][1] = "De las disposiciones sancionadoras no favorables.";
 choices[69][2] = "De las disposiciones no restrictivas de derechos individuales.";
 choices[69][3] = "Las respuestas b) y c) son correctas.";
 answers[69] = choices[69][3];
 units[69] = "1";
 comments[69] = "Id Pregunta: 252. CONSTITUCION1978";
 preguntaids[69] = 252


//  Id pregunta: 390 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre hombres y mujeres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[70]= new Array();
 choices[70][0] = "El Consejo Nacional de la Mujer.";
 choices[70][1] = "El Consejo de la Mujer.";
 choices[70][2] = "El Instituto de la Mujer.";
 choices[70][3] = "El Consejo de Participaci&oacute;n de la Mujer.";
 answers[70] = choices[70][3];
 units[70] = "14";
 comments[70] = "Id Pregunta: 390. POLITICAS DE IGUALDAD";
 preguntaids[70] = 390


//  Id pregunta: 600 Año de creación de pregunta: 2016
 questions[71]= "72)  Entre la documentaci&oacute;n de la Seguridad de la Organizaci&oacute;n nos podremos encontrar:";
 choices[71]= new Array();
 choices[71][0] = "La Pol&iacute;tica de Seguridad Corporativa ser&aacute; elaborada por el Responsable de Seguridad Corporativa y aprobada por el Comit&eacute; de Seguridad Corporativa y por la Alta Direcci&oacute;n.";
 choices[71][1] = "La Pol&iacute;tica de Seguridad de las TIC que debe estar alineada en todo momento con el Mantenimiento de los Sistemas de Informaci&oacute;n.";
 choices[71][2] = "El Documento de Seguridad que ha de estar presente en toda documentaci&oacute;n de la seguridad de la informaci&oacute;n.";
 choices[71][3] = "Todas las respuestas anteriores son correctas.";
 answers[71] = choices[71][0];
 units[71] = "45";
 comments[71] = "Id Pregunta: 600. Junta de Extremadura A1 2015";
 preguntaids[71] = 600


//  Id pregunta: 139 Año de creación de pregunta: 2016
 questions[72]= "73)  Las siglas de SAREB, entidad privada creada por Real Decreto para ayudar al saneamiento del sector financiero espa&ntilde;ol, hacen referencia a:";
 choices[72]= new Array();
 choices[72][0] = "Sociedad de Gesti&oacute;n de Activos Procedentes de la Reestructuraci&oacute;n Bancaria.";
 choices[72][1] = "Static &amp; Active process for REsolution Bank.";
 choices[72][2] = "Sociedad de Ayudas Principales para la Resoluci&oacute;n Bancaria.";
 choices[72][3] = "Super Active REsponse for Banks";
 answers[72] = choices[72][0];
 units[72] = "12";
 comments[72] = "Id Pregunta: 139. Leyes modelo econ&oacute;mico";
 preguntaids[72] = 139


//  Id pregunta: 590 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Cu&aacute;ntos servicios se declararon compartidos en la primera declaraci&oacute;n?";
 choices[73]= new Array();
 choices[73][0] = "14";
 choices[73][1] = "11";
 choices[73][2] = "12";
 choices[73][3] = "15";
 answers[73] = choices[73][0];
 units[73] = "19";
 comments[73] = "Id Pregunta: 590. Estrategia TIC";
 preguntaids[73] = 590


//  Id pregunta: 407 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;Qu&eacute; art&iacute;culo de la CE, consagra la obligaci&oacute;n de los poderes p&uacute;blicos para promover las condiciones para la igualdad del individuo:";
 choices[74]= new Array();
 choices[74][0] = "Art&iacute;culo 14 CE.";
 choices[74][1] = "Art&iacute;culo 9.2 CE.";
 choices[74][2] = "Art&iacute;culo 9.1 CE.";
 choices[74][3] = "Art&iacute;culo 13 CE.";
 answers[74] = choices[74][2];
 units[74] = "14";
 comments[74] = "Id Pregunta: 407. POLITICAS DE IGUALDAD";
 preguntaids[74] = 407


