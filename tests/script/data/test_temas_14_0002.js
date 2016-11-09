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

//  Id pregunta: 2937 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  La Ley General de Telecomunicaciones 9/2014 establece la creaci&oacute;n de un registro de operadores. &iquest;A qu&eacute; entidad encarga su llevanza?";
 choices[0]= new Array();
 choices[0][0] = "Agencia estatal de radiocomunicaciones";
 choices[0][1] = "Ministerio de Industria, Energ&iacute;a y Turismo";
 choices[0][2] = "Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[0][3] = "Ministerio de Ciencia y Tecnolog&iacute;a";
 answers[0] = choices[0][1];
 units[0] = "110";
 comments[0] = "Id Pregunta: 2937. Similar a examen TIC MAP A 2004. Modificada seg&uacute;n Ley 9/2014";


//  Id pregunta: 3018 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  Seg&uacute;n la ley 9/2014 general de telecomunicaciones, qu&eacute; organismo regular&aacute; los mercados de telecomunicaciones";
 choices[1]= new Array();
 choices[1][0] = "El ministerio de industria";
 choices[1][1] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia.";
 choices[1][2] = "Agencia Nacional de Radiocomunicaciones";
 choices[1][3] = "ninguna de las anteriores";
 answers[1] = choices[1][1];
 units[1] = "110";
 comments[1] = "Id Pregunta: 3018. ";


//  Id pregunta: 3301 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Qu&eacute; Ofertas tienen obligatoriamente que ser reguladas por la Administraci&oacute;n en materia de telecomunicaciones?:";
 choices[2]= new Array();
 choices[2][0] = "La Oferta de Referencia de Interconexi&oacute;n y la Oferta de Referencia de Cobertura";
 choices[2][1] = "La Oferta de Servicios P&uacute;blicos de Telefon&iacute;a y la Oferta de Bucle de Abonado";
 choices[2][2] = "La Oferta de Transmisi&oacute;n P&uacute;blica de Datos y la Oferta de Servicios P&uacute;blicos de Voz";
 choices[2][3] = "La Oferta de Referencia de Interconexi&oacute;n y la Oferta de Bucle de Abonado";
 answers[2] = choices[2][3];
 units[2] = "110";
 comments[2] = "Id Pregunta: 3301. ";


//  Id pregunta: 3551 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  En relaci&oacute;n con la prestaci&oacute;n de servicios de telecomunicaciones en Espa&ntilde;a, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?:";
 choices[3]= new Array();
 choices[3][0] = "Est&aacute; liberalizada la provisi&oacute;n de servicios, pero no la instalaci&oacute;n de redes de telecomunicaci&oacute;n";
 choices[3][1] = "S&oacute;lo est&aacute;n liberalizadas las comunicaciones telef&oacute;nicas y el acceso a internet";
 choices[3][2] = "S&oacute;lo Telef&oacute;nica de Espa&ntilde;a, Jazztel y Ono est&aacute;n autorizadas a alquilar circuitos punto a punto";
 choices[3][3] = "La instalaci&oacute;n y explotaci&oacute;n de redes y la provisi&oacute;n de servicios de telecomunicaciones est&aacute;n liberalizados";
 answers[3] = choices[3][3];
 units[3] = "110";
 comments[3] = "Id Pregunta: 3551. ";


//  Id pregunta: 3615 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  La liberalizaci&oacute;n del sector de telecomunicaciones vino marcada por una serie de directivas comunitarias tendentes hacia un mercado en plena competencia. Marcar la directiva relativa a la competencia en los mercados de servicios de telecomunicaciones:";
 choices[4]= new Array();
 choices[4][0] = "Directiva  CE 2002/58";
 choices[4][1] = "Directiva  CE 2002/22";
 choices[4][2] = "Directiva  CE 2002/77";
 choices[4][3] = "Ninguna de las anteriores";
 answers[4] = choices[4][2];
 units[4] = "110";
 comments[4] = "Id Pregunta: 3615. ";


//  Id pregunta: 3628 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  La orden por la que se aprueba el reglamento de desarrollo en lo relativo al uso de dominio p&uacute;blico radioel&eacute;ctrico es:";
 choices[5]= new Array();
 choices[5][0] = "Orden de 10 de marzo de 2000";
 choices[5][1] = "Orden de 10 de marzo de 2001";
 choices[5][2] = "Orden de 10 de marzo de 2002";
 choices[5][3] = "Orden de 9 de marzo de 2000. Derogada por el Real Decreto 863/2008";
 answers[5] = choices[5][3];
 units[5] = "110";
 comments[5] = "Id Pregunta: 3628. ";


//  Id pregunta: 3631 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  La prestaci&oacute;n de consentimiento expreso por parte del cliente o afectado  exige:";
 choices[6]= new Array();
 choices[6][0] = "Es valido el silencio por parte del destinatario";
 choices[6][1] = "La manifestaci&oacute;n de una voluntad libre, informada, espec&iacute;fica e inequ&iacute;voca (que no deje lugar a duda)";
 choices[6][2] = "Es v&aacute;lido el consentimiento oral";
 choices[6][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[6] = choices[6][1];
 units[6] = "110";
 comments[6] = "Id Pregunta: 3631. ";


//  Id pregunta: 3734 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Los prestadores de servicios de la sociedad de la informaci&oacute;n, seg&uacute;n la Ley 34/2002, tienen obligaci&oacute;n:";
 choices[7]= new Array();
 choices[7][0] = "De comunicar a la Agencia de Protecci&oacute;n de Datos peri&oacute;dicamente los datos de tr&aacute;fico relativos a comunicaciones electr&oacute;nicas";
 choices[7][1] = "De comunicar al Registro de la Propiedad y a la Conserjer&iacute;a de Administraciones P&uacute;blicas su nombre de dominio y direcci&oacute;n de internet";
 choices[7][2] = "De mantener datos para su utilizaci&oacute;n en el marco de una investigaci&oacute;n criminal o para la salvaguarda de la seguridad p&uacute;blica y la defensa nacional sin sujeci&oacute;n a lo dispuesto en la normativa sobre protecci&oacute;n de datos personales";
 choices[7][3] = "De almacenar los datos de conexi&oacute;n y tr&aacute;fico generados por las comunicaciones establecidas durante la prestaci&oacute;n de un servicio de la sociedad de la informaci&oacute;n por un periodo m&aacute;ximo de 12 meses";
 answers[7] = choices[7][3];
 units[7] = "110";
 comments[7] = "Id Pregunta: 3734. ";


//  Id pregunta: 3953 AÃ±o de creación de pregunta: 2003-01-01
 questions[8]= "9)  Indicar cual no es una directriz de la Ley General de Telecomunicaciones";
 choices[8]= new Array();
 choices[8][0] = "Simplificaci&oacute;n de tr&aacute;mites administrativos";
 choices[8][1] = "Menor vigilancia de la libre competencia";
 choices[8][2] = "Clarificaci&oacute;n en el reparto de competencias";
 choices[8][3] = "Creaci&oacute;n de garant&iacute;as para los operadores";
 answers[8] = choices[8][1];
 units[8] = "110";
 comments[8] = "Id Pregunta: 3953. ";


//  Id pregunta: 4037 AÃ±o de creación de pregunta: 2006-01-01
 questions[9]= "10)  El servicio universal definido en Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, debe permitir al usuario final la posibilidad de:";
 choices[9]= new Array();
 choices[9][0] = "Efectuar y recibir llamadas telef&oacute;nicas.";
 choices[9][1] = "Efectuar y recibir llamadas telef&oacute;nicas y permitir comunicaciones de fax.";
 choices[9][2] = "Efectuar y recibir llamadas telef&oacute;nicas y permitir comunicaciones de fax y datos a velocidad suficiente para acceder de forma funcional a Internet.";
 choices[9][3] = "Efectuar y recibir llamadas telef&oacute;nicas y permitir comunicaciones de datos a velocidad suficiente para acceder de forma funcional a Internet.";
 answers[9] = choices[9][2];
 units[9] = "110";
 comments[9] = "Id Pregunta: 4037. ";


//  Id pregunta: 4039 AÃ±o de creación de pregunta: 2006-01-01
 questions[10]= "11)  Seg&uacute;n establece la Ley 9/2014, General de Telecomunicaciones, es una infracci&oacute;n muy grave:";
 choices[10]= new Array();
 choices[10][0] = "La emisi&oacute;n de se&ntilde;ales de identificaci&oacute;n falsas o enga&ntilde;osas.";
 choices[10][1] = "El establecimiento de comunicaciones utilizando estaciones no autorizadas.";
 choices[10][2] = "El incumplimiento por los operadores de las obligaciones relativas a la integridad y seguridad en la prestaci&oacute;n de servicios o la explotaci&oacute;n de redes de comunicaciones electr&oacute;nica.";
 choices[10][3] = "No atender el requerimiento de cesaci&oacute;n hecho por la Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n, en los supuestos de producci&oacute;n de interferencias.";
 answers[10] = choices[10][3];
 units[10] = "110";
 comments[10] = "Id Pregunta: 4039. ";


//  Id pregunta: 4041 AÃ±o de creación de pregunta: 2006-01-01
 questions[11]= "12)  &iquest;Cada cu&aacute;nto tiempo se renuevan los cargos de Presidente, Vicepresidente y Consejeros de la Comisi&oacute;n Nacional de los Mercados y la Competencia?";
 choices[11]= new Array();
 choices[11][0] = "6 a&ntilde;os";
 choices[11][1] = "5 a&ntilde;os";
 choices[11][2] = "4 a&ntilde;os";
 choices[11][3] = "3 a&ntilde;os";
 answers[11] = choices[11][0];
 units[11] = "110";
 comments[11] = "Id Pregunta: 4041. ";


//  Id pregunta: 4044 AÃ±o de creación de pregunta: 2006-01-01
 questions[12]= "13)  &iquest;Cu&aacute;l es el l&iacute;mite m&aacute;ximo de la multa que se puede imponer por la comisi&oacute;n de una infracci&oacute;n leve seg&uacute;n la Ley 32/2003 de Telecomunicaciones?";
 choices[12]= new Array();
 choices[12][0] = "50.000 euros";
 choices[12][1] = "30.000 euros";
 choices[12][2] = "500.000 euros";
 choices[12][3] = "60.000 euros";
 answers[12] = choices[12][0];
 units[12] = "110";
 comments[12] = "Id Pregunta: 4044. ";


//  Id pregunta: 4045 AÃ±o de creación de pregunta: 2006-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l de las siguientes infracciones est&aacute; tipificada como muy grave seg&uacute;n la Ley 9/2014 de Telecomunicaciones?";
 choices[13]= new Array();
 choices[13][0] = "La emisi&oacute;n de se&ntilde;ales de identificaci&oacute;n falsas o enga&ntilde;osas";
 choices[13][1] = "La interceptaci&oacute;n, sin autorizaci&oacute;n, de telecomunicaciones no destinadas al p&uacute;blico en general, as&iacute; como la divulgaci&oacute;n del contenido.";
 choices[13][2] = "El establecimiento de comunicaciones con estaciones no autorizadas";
 choices[13][3] = "Carecer de los preceptivos cuadros de tarifas o de precios cuando su exhibici&oacute;n se exija por la normativa vigente";
 answers[13] = choices[13][1];
 units[13] = "110";
 comments[13] = "Id Pregunta: 4045. ";


//  Id pregunta: 4239 AÃ±o de creación de pregunta: 2007-01-01
 questions[14]= "15)  Seg&uacute;n la Ley General de Telecomunicaciones 9/2014 corresponde el control e inspecci&oacute;n del espectro radioel&eacute;ctrico a";
 choices[14]= new Array();
 choices[14][0] = "Ministerio de Econom&iacute;a y Competitividad";
 choices[14][1] = "Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[14][2] = "CNAF";
 choices[14][3] = "Ninguno de los anteriores";
 answers[14] = choices[14][3];
 units[14] = "110";
 comments[14] = "Id Pregunta: 4239. ";


//  Id pregunta: 4261 AÃ±o de creación de pregunta: 2007-01-01
 questions[15]= "16)  &iquest;Cu&aacute;l de  las siguientes afirmaciones est&aacute; recogida en la LLey 9/2014, de 9 de mayo, General de Telecomunicaciones?";
 choices[15]= new Array();
 choices[15][0] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia aprobar&aacute; los planes nacionales de numeracion y direccion";
 choices[15][1] = "El Gobierno podr&aacute; imponer  a los operadores, mediante Real Decreto, obligaciones de servicio p&uacute;blico en ciertos supuestos";
 choices[15][2] = "Tendr&aacute;n la consideraci&oacute;n de Autoridades Nacionales de Reglamentacion de Telecomunicaciones &uacute;nicamente el Gobierno y la Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[15][3] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia analizar&aacute; los mercados de referencia al por mayor y al por menor cada tres a&ntilde;os como m&iacute;nimo";
 answers[15] = choices[15][1];
 units[15] = "110";
 comments[15] = "Id Pregunta: 4261. ";


//  Id pregunta: 4351 AÃ±o de creación de pregunta: 2007-01-01
 questions[16]= "17)  &iquest;Qu&eacute; se entiende por servicio universal, seg&uacute;n la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones?";
 choices[16]= new Array();
 choices[16][0] = "Que todos los usuarios finales puedan obtener una conexi&oacute;n a la red telef&oacute;nica p&uacute;blica.";
 choices[16][1] = "Que los usuarios finales con discapacidad tengan acceso a los mismos servicios que el resto de los usuarios finales.";
 choices[16][2] = "El conjunto definido de servicios cuya prestaci&oacute;n se garantiza para todos los usuarios finales con independencia de su localizaci&oacute;n geogr&aacute;fica, con una calidad determinada y a un precio asequible.";
 choices[16][3] = "Que se ponga a disposici&oacute;n de los abonados al servicio telef&oacute;nico disponible al p&uacute;blico una gu&iacute;a general de n&uacute;meros de abonados.";
 answers[16] = choices[16][2];
 units[16] = "110";
 comments[16] = "Id Pregunta: 4351. ";


//  Id pregunta: 4489 AÃ±o de creación de pregunta: 2007-01-01
 questions[17]= "18)  Seg&uacute;n el RD 944/2005 de 29 de Julio por el que se aprob6 el Plan T&eacute;cnico Nacional para Ia Televisi&oacute;n Digital Terrestre, cada m&uacute;ltiple digital de cobertura nacional o auton&oacute;mica integrara:";
 choices[17]= new Array();
 choices[17][0] = "Al menos cuatro canales digitales diferentes, siendo posible utilizar pasta el 20 % de la capacidad del m&uacute;ltiple para Ia transmisi&oacute;n de servicios adicionales de datos.";
 choices[17][1] = "Al menos cuatro canales digitales sin posibilidad de emitir ning&uacute;n otro servicio adicional de datos.";
 choices[17][2] = "Al menos cuatro canales digitales diferentes siendo obligatoria Ia emision de servicios de datos adicionales.";
 choices[17][3] = "Al menos cuatro canales digitales diferentes, siendo obligatoria la difusi&oacute;n de las Gu&iacute;as Electr&oacute;nicas de Programaci&oacute;n correspondientes a dichos canales.";
 answers[17] = choices[17][0];
 units[17] = "110";
 comments[17] = "Id Pregunta: 4489. ";


//  Id pregunta: 4492 AÃ±o de creación de pregunta: 2007-01-01
 questions[18]= "19)  Entre otras funciones, sa Comisi&oacute;n Nacional de los Mercados y la Competencia se encargar&aacute; de:";
 choices[18]= new Array();
 choices[18][0] = "La gesti&oacute;n de nombres de dominios de Internet.";
 choices[18][1] = "Arbitrar en los conflictos que puedan surgir entre operadores del sector de Ia comunicaci&oacute;n electr&oacute;nica cuando los interesados lo acuerden.";
 choices[18][2] = "Elaborar el Cuadro Nacional de Atribuci&oacute;n de Frecuencias.";
 choices[18][3] = "Elaboraci&oacute;n de proyectos y desarrollo de los Planes Nacionales de Radiodifusi&oacute;n y Televisi&oacute;n.";
 answers[18] = choices[18][1];
 units[18] = "110";
 comments[18] = "Id Pregunta: 4492. ";


//  Id pregunta: 4542 AÃ±o de creación de pregunta: 2007-01-01
 questions[19]= "20)  La concesi&oacute;n por un municipio de una licencia de establecimiento de instalaci&oacute;n de una antena previa a la aprobaci&oacute;n del Plan Territorial de Despliegue de Red que incluya a dicha antena, ser&aacute;:";
 choices[19]= new Array();
 choices[19][0] = "Nula de pleno derecho.";
 choices[19][1] = "Valida a todos los efectos.";
 choices[19][2] = "Valida si el Plan Territorial de Despliegue de Red que incluye a dicha antena se aprueba durante el mes siguiente a Ia concesi&oacute;n.";
 choices[19][3] = "Nula si la antena no se aprueba en el mes siguiente a contar desde Ia fecha de la concesi&oacute;n de la licencia.";
 answers[19] = choices[19][0];
 units[19] = "110";
 comments[19] = "Id Pregunta: 4542. ";


//  Id pregunta: 4548 AÃ±o de creación de pregunta: 2007-01-01
 questions[20]= "21)  La reserva para uso privativo de cualquier frecuencia del dominio p&uacute;blico radioel&eacute;ctrico a favor de una o varias personas o entidades:";
 choices[20]= new Array();
 choices[20][0] = "No requiere ning&uacute;n tipo de pago al Estado. &Uacute;nicamente es necesaria su notificaci&oacute;n a la Comisi&oacute;n Nacional de los Mercados y la Competencia.";
 choices[20][1] = "Se gravar&aacute; con una tasa anual por reserva del dominio publico radioel&eacute;ctrico.";
 choices[20][2] = "Requiere el pago de una tasa &uacute;nica al inicio de la utilizaci&oacute;n de dichas frecuencias que se negociar&aacute; entre el Estado y el beneficiario de la reserva.";
 choices[20][3] = "Requiere el pago de una tasa a negociar entre el beneficiario de Ia reserva y las personas o entidades que ocupan las bandas de frecuencias adyacentes a la reservada.";
 answers[20] = choices[20][1];
 units[20] = "110";
 comments[20] = "Id Pregunta: 4548. ";


//  Id pregunta: 4595 AÃ±o de creación de pregunta: 2007-01-01
 questions[21]= "22)  Seg&uacute;n se indica en el Real Decreto 944/2005 cual es el porcentaje m&aacute;ximo del total de Ia capacidad de transmisi&oacute;n del multiple digital que se podr&aacute; utilizar para prestar servicios adicionales distintos del de difusi&oacute;n de televisi&oacute;n:";
 choices[21]= new Array();
 choices[21][0] = "20%";
 choices[21][1] = "40%";
 choices[21][2] = "50%";
 choices[21][3] = "60%";
 answers[21] = choices[21][0];
 units[21] = "110";
 comments[21] = "Id Pregunta: 4595. ";


//  Id pregunta: 4598 AÃ±o de creación de pregunta: 2007-01-01
 questions[22]= "23)  Cual de los siguientes servicios o redes est&aacute;n sujetos al &aacute;mbito de aplicaci&oacute;n de la Ley 9/2014 General de Telecomunicaciones";
 choices[22]= new Array();
 choices[22][0] = "los contenidos difundidos a trav&eacute;s del servicio de radiodifusi&oacute;n sonora";
 choices[22][1] = "los contenidos difundidos a trav&eacute;s del servicio de radiodifusi&oacute;n televisiva";
 choices[22][2] = "las redes de televisi&oacute;n por cable";
 choices[22][3] = "servicios que suministren contenidos transmitidos mediante redes y servicios de comunicaciones electr&oacute;nicas";
 answers[22] = choices[22][2];
 units[22] = "110";
 comments[22] = "Id Pregunta: 4598. ";


//  Id pregunta: 4773 AÃ±o de creación de pregunta: 2007-01-01
 questions[23]= "24)  De acuerdo con lo establecido en la Ley 9/2014 General de Telecomunicaciones, &iquest;a cu&aacute;l de las siguientes entidades no le corresponde la competencia sancionadora en materia de telecomunicaciones?";
 choices[23]= new Array();
 choices[23][0] = "Al Secretario de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 choices[23][1] = "A la Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[23][2] = "A la Agencia Estatal de Radiocomunicaciones";
 choices[23][3] = "Todas tienen competencia sancionadora";
 answers[23] = choices[23][2];
 units[23] = "110";
 comments[23] = "Id Pregunta: 4773. ";


//  Id pregunta: 4777 AÃ±o de creación de pregunta: 2007-01-01
 questions[24]= "25)  De acuerdo con la Ley 9/2014 General de Telecomunicaciones, la gesti&oacute;n y control de los planes nacionales de numeraci&oacute;n corresponde a ";
 choices[24]= new Array();
 choices[24][0] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[24][1] = "El Ministerio de Industria, Turismo y Comercio";
 choices[24][2] = "El Gobierno";
 choices[24][3] = "La Agencia Estatal de Radiocomunicaciones";
 answers[24] = choices[24][1];
 units[24] = "110";
 comments[24] = "Id Pregunta: 4777. ";


//  Id pregunta: 4778 AÃ±o de creación de pregunta: 2007-01-01
 questions[25]= "26)  De acuerdo con la Ley 9/2014 General de Telecomunicaciones, el espectro radioel&eacute;ctrico es un bien de dominio p&uacute;blico, cuya titularidad y administraci&oacute;n corresponden a";
 choices[25]= new Array();
 choices[25][0] = "El Gobierno";
 choices[25][1] = "La Agencia Estatal de Radiocomunicaciones";
 choices[25][2] = "El Estado";
 choices[25][3] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia";
 answers[25] = choices[25][2];
 units[25] = "110";
 comments[25] = "Id Pregunta: 4778. ";


//  Id pregunta: 4855 AÃ±o de creación de pregunta: 2007-01-01
 questions[26]= "27)  Seg&uacute;n lo establecido por la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, la utilizaci&oacute;n del dominio p&uacute;blico radioel&eacute;ctrico, frecuencias o canales radioel&eacute;ctricos no adecuada al correspondiente plan de utilizaci&oacute;n del espectro radioel&eacute;ctrico o al Cuadro Nacional de Atribuci&oacute;n de Frecuencia:";
 choices[26]= new Array();
 choices[26][0] = "Es una infracci&oacute;n muy grave";
 choices[26][1] = "Es una infracci&oacute;n grave";
 choices[26][2] = "Es una infracci&oacute;n leve";
 choices[26][3] = "No es una infracci&oacute;n";
 answers[26] = choices[26][0];
 units[26] = "110";
 comments[26] = "Id Pregunta: 4855. ";


//  Id pregunta: 4984 AÃ±o de creación de pregunta: 2003-01-01
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes conductas se considera infracci&oacute;n muy grave, seg&uacute;n la Ley 9/2014, General de Telecomunicaciones?";
 choices[27]= new Array();
 choices[27][0] = "La producci&oacute;n deliberada de interferencias definidas como perjudiciales en la citada Ley.";
 choices[27][1] = "La emisi&oacute;n de se&ntilde;ales de identificaci&oacute;n falsas o enga&ntilde;osas.";
 choices[27][2] = "Carecer de los preceptivos cuadros de tarifas o de precios exigidos por la normativa vigente.";
 choices[27][3] = "El establecimiento de comunicaciones con estaciones no autorizadas.";
 answers[27] = choices[27][0];
 units[27] = "110";
 comments[27] = "Id Pregunta: 4984. Examen TIC B 2007";


//  Id pregunta: 5031 AÃ±o de creación de pregunta: 2003-01-01
 questions[28]= "29)  La Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, establece que:";
 choices[28]= new Array();
 choices[28][0] = "El Gobierno crear&aacute; una entidad p&uacute;blica para la gesti&oacute;n del Fondo nacional del servicio universal";
 choices[28][1] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia se encargar&aacute; de la gesti&oacute;n del Fondo nacional del servicio universal";
 choices[28][2] = "El Gobierno, mediante Decreto, establecer&aacute; el procedimiento por el que las operadoras gestionar&aacute;n elFondo nacional del servicio universal";
 choices[28][3] = "La Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n se encargar&aacute; de lagesti&oacute;n del Fondo nacional del servicio universal";
 answers[28] = choices[28][1];
 units[28] = "110";
 comments[28] = "Id Pregunta: 5031. Examen TIC A 2007";


//  Id pregunta: 5167 AÃ±o de creación de pregunta: 2009-01-01
 questions[29]= "30)  Seg&uacute;n la legislaci&oacute;n aplicable, forma parte del servicio universal:";
 choices[29]= new Array();
 choices[29][0] = "Una conexi&oacute;n que deber&aacute; permitir comunicaciones en banda ancha, en los t&eacute;rminos que se definan por la normativa vigente";
 choices[29][1] = "Una conexi&oacute;n con acceso a servicios de televisi&oacute;n sobre IP";
 choices[29][2] = "Una conexi&oacute;n a telefon&iacute;a m&oacute;vil GSM";
 choices[29][3] = "Una conexi&oacute;n que permita comunicaciones de datos a velocidad suficiente para acceder de forma fucional a Internet y a otras redes de &aacute;mbito privado";
 answers[29] = choices[29][0];
 units[29] = "110";
 comments[29] = "Id Pregunta: 5167. ";


//  Id pregunta: 5306 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  Seg&uacute;n la Ley 9/2014, la determinaci&oacute;n de si la prestaci&oacute;n del servicio universal supone una causa injustificada para los operadores obligados a prestarlo corresponde a:";
 choices[30]= new Array();
 choices[30][0] = "Ministerio de Industria";
 choices[30][1] = "Gobierno";
 choices[30][2] = "Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[30][3] = "Ninguno de los anteriores";
 answers[30] = choices[30][2];
 units[30] = "110";
 comments[30] = "Id Pregunta: 5306. ";


//  Id pregunta: 6109 AÃ±o de creación de pregunta: 2010-01-01
 questions[31]= "32)  La competencia para la propuesta de planificaci&oacute;n, gesti&oacute;n y administraci&oacute;n del dominio p&uacute;blico radioel&eacute;ctrico, para la comprobaci&oacute;n t&eacute;cnica de emisiones radioel&eacute;ctricas, y para el control y la inspecci&oacute;n de las telecomunicaciones, as&iacute; como la aplicaci&oacute;n del r&eacute;gimen sancionador en la materia, la tiene:";
 choices[31]= new Array();
 choices[31][0] = "El Ministerio de Industria, Energ&iacute;a y Turismo.";
 choices[31][1] = "Comisi&oacute;n Nacional de los Mercados y la Competencia.";
 choices[31][2] = "La Uni&oacute;n Internacional de Telecomunicaciones.";
 choices[31][3] = "Red.es.";
 answers[31] = choices[31][0];
 units[31] = "110";
 comments[31] = "Id Pregunta: 6109. TIC A 2009";


//  Id pregunta: 6138 AÃ±o de creación de pregunta: 2010-01-01
 questions[32]= "33)  Indique la opci&oacute;n FALSA. Dentro del servicio universal definido por la Ley 9/2014, General de Telecomunicaciones, se debe garantizar:";
 choices[32]= new Array();
 choices[32][0] = "El acceso funcional a internet a velocidad suficiente.";
 choices[32][1] = "Una gu&iacute;a general de n&uacute;meros de abonados.";
 choices[32][2] = "Una cobertura suficiente que permita el acceso a la red de telefon&iacute;a m&oacute;vil.";
 choices[32][3] = "Una oferta suficiente de tel&eacute;fonos p&uacute;blicos de pago en todo el territorio nacional.";
 answers[32] = choices[32][2];
 units[32] = "110";
 comments[32] = "Id Pregunta: 6138. TIC A 2009";


//  Id pregunta: 6356 AÃ±o de creación de pregunta: 2010-01-01
 questions[33]= "34)  El registro de operadores creado al amparo de la Ley 32/2003, se crea dependiente de:";
 choices[33]= new Array();
 choices[33][0] = "La Comisi&oacute;n Nacional de Competencia";
 choices[33][1] = "La Secretaria de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 choices[33][2] = "La Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos";
 choices[33][3] = "La Comisi&oacute;n del Mercado de las Telecomunicaciones";
 answers[33] = choices[33][3];
 units[33] = "110";
 comments[33] = "Id Pregunta: 6356. Art&iacute;culo 7 Ley 32/2003";


//  Id pregunta: 6360 AÃ±o de creación de pregunta: 2010-01-01
 questions[34]= "35)  El servicio universal definido en la ley 9/2014 deber&aacute; garantizar:";
 choices[34]= new Array();
 choices[34][0] = "Que se ponga a disposici&oacute;n de los abonados al servicio telef&oacute;nico disponible al p&uacute;blico una gu&iacute;a general de n&uacute;meros de abonados, ya sea impresa o electr&oacute;nica, o ambas, y se actualice, como m&aacute;ximo, una vez al a&ntilde;o.";
 choices[34][1] = "Que todos los usuarios finales puedan obtener una conexi&oacute;n a la red telef&oacute;nica p&uacute;blica, que le ofrezca la posibilidad de efectuar y recibir llamadas telef&oacute;nicas, enviar mensajes cortos de texto (SMS) y permitir comunicaciones de fax y datos a velocidad suficiente para acceder de forma funcional a Internet.";
 choices[34][2] = "Que exista una oferta suficiente de equipos terminales de acceso a Internet de banda ancha.";
 choices[34][3] = "Conexi&oacute;n a la red p&uacute;blica de comunicaciones con capacidad de acceso funcional a Internet deber&aacute; permitir comunicaciones de datos en banda ancha a una velocidad en sentido descendente de 1 Mbit por segundo";
 answers[34] = choices[34][3];
 units[34] = "110";
 comments[34] = "Id Pregunta: 6360. Art&iacute;culo 25 Ley 9/2014";


//  Id pregunta: 8169 AÃ±o de creación de pregunta: 2011-01-01
 questions[35]= "36)  &iquest;Cu&aacute;l de las siguientes afirmaciones respecto a la &quot;Ley General de Telecomunicaciones&quot; es cierta?:";
 choices[35]= new Array();
 choices[35][0] = "Corresponde a la Comisi&oacute;n Nacional de los Mercados y la Competencia la aprobaci&oacute;n de los planes nacionales de numeraci&oacute;n y, en su caso, de direccionamiento y nombres, teniendo en cuenta las decisiones aplicables que se adopten en el seno de las organizaciones y los foros internacionales.";
 choices[35][1] = "Corresponde al Ministerio de Industria, Energ&iacute;a y Turismo el otorgamiento de los derechos de uso de los recursos p&uacute;blicos regulados en los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n";
 choices[35][2] = "El procedimiento y los plazos para la asignaci&oacute;n de n&uacute;meros, as&iacute; como las condiciones asociadas al uso de los n&uacute;meros, que ser&aacute;n no discriminatorias, proporcionadas y transparentes, se establecer&aacute;n reglamentariamente. Transcurrido el plazo m&aacute;ximo sin haberse notificado la resoluci&oacute;n expresa, se podr&aacute; entender aprobada la solicitud por silencio administrativo.";
 choices[35][3] = "Quedan incluidos en el &aacute;mbito de esta Ley, el r&eacute;gimen aplicable a los contenidos de car&aacute;cter audiovisual transmitidos a trav&eacute;s de las redes.";
 answers[35] = choices[35][1];
 units[35] = "110";
 comments[35] = "Id Pregunta: 8169. Examen TIC A1 2010. Modificado seg&uacute;n Ley 9/2014";


//  Id pregunta: 8323 AÃ±o de creación de pregunta: 2011-01-01
 questions[36]= "37)  La normativa que establece las condiciones t&eacute;cnicas para la emisi&oacute;n del servido de televisi&oacute;n digital terrestre (TDT) en alta definici&oacute;n, es: ";
 choices[36]= new Array();
 choices[36][0] = "Ley 7/2010. ";
 choices[36][1] = "Real Decreto 691/2010. ";
 choices[36][2] = "Directiva 98/48/CE. ";
 choices[36][3] = "Real Decreto 944/2005. ";
 answers[36] = choices[36][1];
 units[36] = "105, 110";
 comments[36] = "Id Pregunta: 8323. Examen TIC A2 2010";


//  Id pregunta: 9006 AÃ±o de creación de pregunta: 2011-01-01
 questions[37]= "38)  Entre las competencias que la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, atribuye a la Comisi&oacute;n Nacional de los Mercados y la Competencia, est&aacute; analizar la competencia efectiva en los mercados de referencia que defina y determinar los operadores que en esos mercados se consideren:";
 choices[37]= new Array();
 choices[37][0] = "Dominantes.";
 choices[37][1] = "Con poder significativo en el mercado.";
 choices[37][2] = "Anticompetitivos.";
 choices[37][3] = "Incumbentes";
 answers[37] = choices[37][1];
 units[37] = "110";
 comments[37] = "Id Pregunta: 9006. Teleco Ayto. Madrid 2010. Modificada seg&uacute;n Ley 9/2014";


//  Id pregunta: 9390 AÃ±o de creación de pregunta: 2013-01-01
 questions[38]= "39)  El servicio universal de telecomunicaciones es:";
 choices[38]= new Array();
 choices[38][0] = "El conjunto definido de servicios cuya prestaci&oacute;n se garantiza en un &aacute;mbito compartido entre varios usuarios, con independencia de su localizaci&oacute;n geogr&aacute;fica, con una calidad determinada y a un precio asequible";
 choices[38][1] = "El conjunto definido de servicios cuya prestaci&oacute;n se garantiza a todos los usuarios finales con independencia de su localizaci&oacute;n geogr&aacute;fica, con una calidad determinada y a un precio asequible.";
 choices[38][2] = "El conjunto definido de servicios cuya prestaci&oacute;n se garantiza a los usuarios con las rentas m&aacute;s bajas con independencia de su localizaci&oacute;n geogr&aacute;fica, con una calidad determinada y a un precio asequible";
 choices[38][3] = "El conjunto definido de servicios cuya prestaci&oacute;n se garantiza a todos los centros de formaci&oacute;n con independencia de su localizaci&oacute;n geogr&aacute;fica, con una calidad determinada.";
 answers[38] = choices[38][1];
 units[38] = "110";
 comments[38] = "Id Pregunta: 9390. Examen TIC A1 2011 Libre";


//  Id pregunta: 9426 AÃ±o de creación de pregunta: 2013-01-01
 questions[39]= "40)  Cuando un municipio elabora un instrumento de planificaci&oacute;n territorial o urban&iacute;stica";
 choices[39]= new Array();
 choices[39][0] = "Deber&aacute;n obtener un informe sobre la adecuaci&oacute;n de dichos instrumentos de planificaci&oacute;n con la Ley 9/2014 y con la normativa sectorial de telecomunicaciones y sobre las necesidades de redes p&uacute;blicas de comunicaciones electr&oacute;nicas en el &aacute;mbito territorial a que se refieran.";
 choices[39][1] = "El informe lo emite el Ministerio de Industria, Energ&iacute;a y Turismo.";
 choices[39][2] = "Los instrumentos de planificaci&oacute;n territorial o urban&iacute;stica no son competencia estatal, por lo que no se debe emitir ning&uacute;n informe.";
 choices[39][3] = "a) y b) son correctas";
 answers[39] = choices[39][3];
 units[39] = "110";
 comments[39] = "Id Pregunta: 9426. ";


//  Id pregunta: 9427 AÃ±o de creación de pregunta: 2013-01-01
 questions[40]= "41)  Hay dos operadores que para operar en un determinado territorio ejercen el derecho de ocupaci&oacute;n de propiedad p&uacute;blica o privada. Sin embargo, por motivos de ordenaci&oacute;n urbana, no pueden ejercer esos derechos por separado.";
 choices[40]= new Array();
 choices[40][0] = "Uno de los dos deber&aacute; renunciar a su derecho de ocupaci&oacute;n.";
 choices[40][1] = "La Administraci&oacute;n competente en ordenaci&oacute;n urbana, podr&aacute; instar de manera motivada al Ministerio de Industria, Energ&iacute;a y Turismo el inicio del procedimiento para imponer el uso compartido recogido en el Art&iacute;culo 32.2.";
 choices[40][2] = "La Administraci&oacute;n competente en ordenaci&oacute;n urbana, previo tr&aacute;mite de informaci&oacute;n p&uacute;blica, determinar&aacute; una soluci&oacute;n que permita el ejercicio de los derechos de ocupaci&oacute;n de dominio p&uacute;blico o propiedad privada por separado.";
 choices[40][3] = "No se trata de un elemento que regule la ley 9/2014, General de Telecomunicaciones";
 answers[40] = choices[40][1];
 units[40] = "110";
 comments[40] = "Id Pregunta: 9427. ";


//  Id pregunta: 9431 AÃ±o de creación de pregunta: 2013-01-01
 questions[41]= "42)  Una de las siguientes no es una funci&oacute;n de la Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[41]= new Array();
 choices[41][0] = "Arbitrar en los conflictos que puedan surgir entre los operadores del sector de las comunicaciones electr&oacute;nicas";
 choices[41][1] = "Definir y analizar los mercados de referencia relativos a redes y servicios de comunicaciones electr&oacute;nicas";
 choices[41][2] = "Determinar la cuant&iacute;a que supone el coste neto en la prestaci&oacute;n del servicio universal";
 choices[41][3] = "La creaci&oacute;n de un plan de numeraci&oacute;n";
 answers[41] = choices[41][3];
 units[41] = "110";
 comments[41] = "Id Pregunta: 9431. ";


//  Id pregunta: 9432 AÃ±o de creación de pregunta: 2013-01-01
 questions[42]= "43)  Las tasas en materia de telecomunicaciones tiene una serie de fines. Indique el falso:";
 choices[42]= new Array();
 choices[42][0] = "Cubrir los gastos administrativos que ocasione el trabajo de regulaci&oacute;n";
 choices[42][1] = "Cubrir los gastos que ocasionen la gesti&oacute;n, control y ejecuci&oacute;n del r&eacute;gimen establecido en la ley";
 choices[42][2] = "Cubrir los gastos relativos al fomento del despliegue de redes de telecomunicaci&oacute;n";
 choices[42][3] = "Cubrir los gastos de cooperaci&oacute;n internacional, armonizaci&oacute;n y normalizaci&oacute;n y el an&aacute;lisis de mercado";
 answers[42] = choices[42][2];
 units[42] = "110";
 comments[42] = "Id Pregunta: 9432. ";


//  Id pregunta: 9433 AÃ±o de creación de pregunta: 2013-01-01
 questions[43]= "44)  Se&ntilde;ale, de entre las siguientes, la que es una infracci&oacute;n grave seg&uacute;n la ley 32/2003";
 choices[43]= new Array();
 choices[43][0] = "La interceptaci&oacute;n, sin autorizaci&oacute;n, de telecomunicaciones no destinadas al p&uacute;blico en general.";
 choices[43][1] = "El establecimiento de comunicaciones con estaciones no autorizadas.";
 choices[43][2] = "El incumplimiento de las condiciones determinantes de la adjudicaci&oacute;n y asignaci&oacute;n de los recursos de numeraci&oacute;n incluidos en los planes de numeraci&oacute;n ";
 choices[43][3] = "La falta de notificaci&oacute;n a la Administraci&oacute;n por el titular de una red de comunicaciones electr&oacute;nicas de los servicios que se est&eacute;n prestando a trav&eacute;s de ella cuando esta informaci&oacute;n sea exigible de acuerdo con la normativa aplicable.";
 answers[43] = choices[43][1];
 units[43] = "110";
 comments[43] = "Id Pregunta: 9433. ";


//  Id pregunta: 9434 AÃ±o de creación de pregunta: 2013-01-01
 questions[44]= "45)  El art. 12 de la Ley 9/2014, General de Telecomunicaciones, indica los principios generales aplicables al acceso a las redes y recursos asociados y a su interconexi&oacute;n. Indique cual de las siguientes afirmaciones no es correcta:";
 choices[44]= new Array();
 choices[44][0] = "Los operadores de redes p&uacute;blicas de comunicaciones electr&oacute;nicas tendr&aacute;n el derecho y, cuando se solicite por otros operadores de redes p&uacute;blicas de comunicaciones electr&oacute;nicas, la obligaci&oacute;n de negociar la interconexi&oacute;n mutua con el fin de prestar servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico, con el objeto de garantizar as&iacute; la prestaci&oacute;n de servicios y su interoperabilidad.";
 choices[44][1] = "No existir&aacute;n restricciones que impidan que los operadores negocien entre s&iacute; acuerdos de acceso e interconexi&oacute;n";
 choices[44][2] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia intervendr&aacute; en las relaciones entre operadores, a petici&oacute;n del Consejo de Ministros.";
 choices[44][3] = "Los operadores que obtengan informaci&oacute;n de otros, en el proceso de negociaci&oacute;n de los acuerdos de acceso o de interconexi&oacute;n, destinar&aacute;n la informaci&oacute;n obtenida exclusivamente a los fines para los que fue solicitada.";
 answers[44] = choices[44][2];
 units[44] = "110";
 comments[44] = "Id Pregunta: 9434. Examen Xunta Galicia 2011 TIC A1";


//  Id pregunta: 9878 AÃ±o de creación de pregunta: 2014-01-01
 questions[45]= "46)  De acuerdo con la Ley 9/2014, General de Telecomunicaciones, &iquest;cu&aacute;l de las siguientes conductas se considera infracci&oacute;n muy grave?";
 choices[45]= new Array();
 choices[45][0] = "La producci&oacute;n deliberada de interferencias definidas como perjudiciales en la citada Ley.";
 choices[45][1] = "El establecimiento de comunicaciones con estaciones no autorizadas.";
 choices[45][2] = "La emisi&oacute;n de se&ntilde;ales de identificaci&oacute;n falsas o enga&ntilde;osas.";
 choices[45][3] = "La instalaci&oacute;n de estaciones radioel&eacute;ctricas sin autorizaci&oacute;n, cuando, de acuerdo con lo dispuesto en la normativa reguladora de las telecomunicaciones, sea necesaria.";
 answers[45] = choices[45][0];
 units[45] = "110";
 comments[45] = "Id Pregunta: 9878. TIC A1, Examen 2013";


//  Id pregunta: 10490 AÃ±o de creación de pregunta: 2014-01-01
 questions[46]= "47)  Seg&uacute;n la Ley 9/2014, que tipo de infracci&oacute;n es: La realizaci&oacute;n de actividades sin disponer de la habilitaci&oacute;n oportuna en las materias reguladas por esta Ley, cuando legalmente sea necesaria.";
 choices[46]= new Array();
 choices[46][0] = "Muy Grave";
 choices[46][1] = "Grave";
 choices[46][2] = "Leve";
 choices[46][3] = "No es Infraccion";
 answers[46] = choices[46][0];
 units[46] = "110";
 comments[46] = "Id Pregunta: 10490. Art 76.1 de la Ley 9/2014";


//  Id pregunta: 10516 AÃ±o de creación de pregunta: 2014-01-01
 questions[47]= "48)  Indique cu&aacute;l de las afirmaciones es falsa";
 choices[47]= new Array();
 choices[47][0] = "Las redes de telecomunicaciones que desarrollen actividades esenciales para la defensa nacional integran, se reservan al Estado y se rigen por su normativa espec&iacute;fica.";
 choices[47][1] = "En el marco de las funciones relacionadas con la defensa civil, corresponde al Ministerio de Defensa estudiar, programar, proponer y ejecutar las medidas relacionadas con las telecomunicaciones.";
 choices[47][2] = "En el &aacute;mbito de la protecci&oacute;n civil, en su espec&iacute;fica relaci&oacute;n con el uso de las telecomunicaciones, el Ministerio de Industria, Energ&iacute;a y Turismo cooperar&aacute; con el Ministerio del Interior y con los &oacute;rganos responsables de las comunidades aut&oacute;nomas.";
 choices[47][3] = "El Gobierno, con car&aacute;cter excepcional y transitorio, podr&aacute; acordar la asunci&oacute;n por la Administraci&oacute;n General del Estado de la gesti&oacute;n directa de determinados servicios de comunicaciones electr&oacute;nicas. ";
 answers[47] = choices[47][1];
 units[47] = "110";
 comments[47] = "Id Pregunta: 10516. ";


//  Id pregunta: 10517 AÃ±o de creación de pregunta: 2014-01-01
 questions[48]= "49)  Cu&aacute;l es el plazo m&aacute;ximo en el cual Registro de Operadores dictar&aacute;n resoluci&oacute;n motivada cuando constate que una notificaci&oacute;n no re&uacute;ne los requisitos establecidos:";
 choices[48]= new Array();
 choices[48][0] = "10 d&iacute;as";
 choices[48][1] = "15 d&iacute;as";
 choices[48][2] = "1 mes";
 choices[48][3] = "3 meses";
 answers[48] = choices[48][1];
 units[48] = "110";
 comments[48] = "Id Pregunta: 10517. ";


//  Id pregunta: 10518 AÃ±o de creación de pregunta: 2014-01-01
 questions[49]= "50)  En relaci&oacute;n al uso del dominio p&uacute;blico radioel&eacute;ctrico, cu&aacute;l de las siguientes afirmaciones es falsa:";
 choices[49]= new Array();
 choices[49][0] = "El uso com&uacute;n del dominio p&uacute;blico radioel&eacute;ctrico no precisar&aacute; de ning&uacute;n t&iacute;tulo habilitante ";
 choices[49][1] = "El uso especial del dominio p&uacute;blico radioel&eacute;ctrico precisar&aacute; de una autorizaci&oacute;n general. ";
 choices[49][2] = "El derecho de uso especial por radioaficionados u otros sin contenido econ&oacute;mico no precisar&aacute; de t&iacute;tulo habilitante";
 choices[49][3] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico requerir&aacute; de una concesi&oacute;n administrativa ";
 answers[49] = choices[49][2];
 units[49] = "110";
 comments[49] = "Id Pregunta: 10518. ";


//  Id pregunta: 10519 AÃ±o de creación de pregunta: 2014-01-01
 questions[50]= "51)  Cu&aacute;l es el periodo m&aacute;ximo de inhabilitaci&oacute;n al que pueden dar lugar las infracciones muy graves:";
 choices[50]= new Array();
 choices[50][0] = "10 a&ntilde;os";
 choices[50][1] = "5 a&ntilde;os";
 choices[50][2] = "3 a&ntilde;os";
 choices[50][3] = "1 a&ntilde;o";
 answers[50] = choices[50][1];
 units[50] = "110";
 comments[50] = "Id Pregunta: 10519. ";


//  Id pregunta: 10656 AÃ±o de creación de pregunta: 2015-01-01
 questions[51]= "52)  &iquest;Seg&uacute;n la Ley 9/2014, cu&aacute;ndo finaliza el per&iacute;odo por el que se otorgan los derechos de uso privativo del dominio p&uacute;blico radioel&eacute;ctrico sin limitaci&oacute;n de n&uacute;mero?";
 choices[51]= new Array();
 choices[51][0] = "El 31 de diciembre del a&ntilde;o natural en que cumplan su quinto a&ntilde;o de vigencia.";
 choices[51][1] = "A los 20 a&ntilde;os desde el otorgamiento.";
 choices[51][2] = "El 31 de noviembre del a&ntilde;o natural en que cumplan su quinto a&ntilde;o de vigencia.";
 choices[51][3] = "A los cinco a&ntilde;os desde el otorgamiento.";
 answers[51] = choices[51][0];
 units[51] = "110";
 comments[51] = "Id Pregunta: 10656. ";


//  Id pregunta: 10657 AÃ±o de creación de pregunta: 2015-01-01
 questions[52]= "53)  Seg&uacute;n la Ley 9/2014, la emisi&oacute;n de se&ntilde;ales de identificaci&oacute;n falsas o enga&ntilde;osas es una infracci&oacute;n:";
 choices[52]= new Array();
 choices[52][0] = "Muy grave.";
 choices[52][1] = "Grave.";
 choices[52][2] = "Leve";
 choices[52][3] = "No es una infracci&oacute;n.";
 answers[52] = choices[52][1];
 units[52] = "110";
 comments[52] = "Id Pregunta: 10657. ";


//  Id pregunta: 10906 AÃ±o de creación de pregunta: 2015-01-01
 questions[53]= "54)  Se&ntilde;ale la respuesta correcta seg&uacute;n lo que dicta el art&iacute;culo 79 de la Ley 9/2014, General de Telecomunicaciones:";
 choices[53]= new Array();
 choices[53][0] = "Por la comisi&oacute;n de infracciones muy graves se impondr&aacute; al infractor multa por importe de hasta 30 millones de euros.";
 choices[53][1] = "Las infracciones muy graves, en funci&oacute;n de sus circunstancias, podr&aacute;n dar lugar a la inhabilitaci&oacute;n hasta de 10 a&ntilde;os del operador para la explotaci&oacute;n de redes o la prestaci&oacute;n de servicios de comunicaciones electr&oacute;nicas.";
 choices[53][2] = "Por la comisi&oacute;n de infracciones graves se impondr&aacute; al infractor multa por importe de hasta 5 millones de euros.";
 choices[53][3] = "Por la comisi&oacute;n de infracciones leves se impondr&aacute; al infractor una multa por importe de hasta 50 mil euros.";
 answers[53] = choices[53][3];
 units[53] = "110";
 comments[53] = "Id Pregunta: 10906. Examen GSI 2014";


//  Id pregunta: 11318 AÃ±o de creación de pregunta: 2015-01-01
 questions[54]= "55)  La Ley 25/2007, establece las condiciones de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones. De entre los datos que hay que almacenar, no se encuentra:";
 choices[54]= new Array();
 choices[54][0] = "Datos para determinar fecha, hora y duraci&oacute;n de un comunici&oacute;n.";
 choices[54][1] = "Tipo de comunicaci&oacute;n.";
 choices[54][2] = "Datos de llamadas no conectadas";
 choices[54][3] = "Datos de llamadas infructuosas";
 answers[54] = choices[54][2];
 units[54] = "110";
 comments[54] = "Id Pregunta: 11318. Recogido de la redacci&oacute;n de la propia Ley. &quot;Art&iacute;culo 4. Los datos relativos a las llamadas no conectadas est&aacute;n excluidos de las obligaciones de conservaci&oacute;n contenidas en esta Ley...&quot;";


//  Id pregunta: 11332 AÃ±o de creación de pregunta: 2015-01-01
 questions[55]= "56)  La Ley General de Telecomunicaciones establece los conceptos por los que se puede aplicar tasa. Seleccione cu&aacute;l se corresponde con esta definici&oacute;n: &quot;para cubrir gastos por certificaciones registrales, la recepci&oacute;n de proyectos t&eacute;cnicos, cumplimiento de especificaciones t&eacute;cnicas de aparatos y equipos, etc.&quot;";
 choices[55]= new Array();
 choices[55][0] = "Tasa General de Operadores.";
 choices[55][1] = "Tasas por numeraci&oacute;n, direccionamiento y denominaci&oacute;n.";
 choices[55][2] = "Tasa por reserva del espacio radioel&eacute;ctrico";
 choices[55][3] = "Tasa de telecomunicaciones";
 answers[55] = choices[55][3];
 units[55] = "110";
 comments[55] = "Id Pregunta: 11332. ";


//  Id pregunta: 11408 AÃ±o de creación de pregunta: 2015-01-01
 questions[56]= "57)  De acuerdo a la Ley 9/2014:";
 choices[56]= new Array();
 choices[56][0] = "La CNMC garantiza la conservaci&oacute;n del n&uacute;mero de abonado.";
 choices[56][1] = "El MINETUR garantiza la conservaci&oacute;n del n&uacute;mero de abonado.";
 choices[56][2] = "Los operadores garantizan la conservaci&oacute;n del n&uacute;mero de abonado.";
 choices[56][3] = "La SETSI garantiza la conservaci&oacute;n del n&uacute;mero de abonado.";
 answers[56] = choices[56][2];
 units[56] = "110";
 comments[56] = "Id Pregunta: 11408. ";


//  Id pregunta: 11412 AÃ±o de creación de pregunta: 2015-01-01
 questions[57]= "58)  Seg&uacute;n la Ley 9/2014, &iquest;cu&aacute;l de las siguientes NO es una facultad del gobierno para la administraci&oacute;n del espectro?";
 choices[57]= new Array();
 choices[57][0] = "La adecuada utilizaci&oacute;n del espectro radioel&eacute;ctrico mediante el empleo de equipos y aparatos.";
 choices[57][1] = "El procedimiento de determinaci&oacute;n, control e inspecci&oacute;n de los niveles &uacute;nicos de emisi&oacute;n radioel&eacute;ctrica tolerable y que no supongan un peligro para la salud p&uacute;blica.";
 choices[57][2] = "La determinaci&oacute;n, potestad sancionadora e inspecci&oacute;n de niveles &uacute;nicos de emisi&oacute;n radioel&eacute;ctrica.";
 choices[57][3] = "El procedimiento para la elaboraci&oacute;n de los planes de utilizaci&oacute;n del espectro radioel&eacute;ctrico.";
 answers[57] = choices[57][3];
 units[57] = "110";
 comments[57] = "Id Pregunta: 11412. ";


//  Id pregunta: 11413 AÃ±o de creación de pregunta: 2015-01-01
 questions[58]= "59)  Seg&uacute;n la Ley 9/2014, General de Telecomunicaciones, es facultad del gobierno para la administraci&oacute;n del espectro:";
 choices[58]= new Array();
 choices[58][0] = "Aprobaci&oacute;n del CNAF previa elaboraci&oacute;n del MINETUR.";
 choices[58][1] = "La determinaci&oacute;n de los niveles &uacute;nicos de emisi&oacute;n radioel&eacute;ctrica de cuyo control se encarga MINETUR.";
 choices[58][2] = "Establecer el procedimiento para la reasignaci&oacute;n del uso de bandas de frecuencia.";
 choices[58][3] = "El otorgamiento de las autorizaciones de uso.";
 answers[58] = choices[58][2];
 units[58] = "110";
 comments[58] = "Id Pregunta: 11413. ";


//  Id pregunta: 11414 AÃ±o de creación de pregunta: 2015-01-01
 questions[59]= "60)  Se&ntilde;alar la FALSAde acuerdo a la Ley 9/2014. Entre las facultades del gobierno para la administraci&oacute;n del espectro, se encuentran:";
 choices[59]= new Array();
 choices[59][0] = "Aprobar los planes de utilizaci&oacute;n del espectro bas&aacute;ndose en las propuestas del MINETUR.";
 choices[59][1] = "La adecuada utilizaci&oacute;n del espectro mediante el empleo de equipos y aparatos.";
 choices[59][2] = "La determinaci&oacute;n de los niveles de emisi&oacute;n radioel&eacute;ctrica tolerable.";
 choices[59][3] = "Las condiciones de otorgamiento de t&iacute;tulos habilitantes para uso del dominio p&uacute;blico para eventos de corta duraci&oacute;n.";
 answers[59] = choices[59][0];
 units[59] = "110";
 comments[59] = "Id Pregunta: 11414. ";


//  Id pregunta: 11415 AÃ±o de creación de pregunta: 2015-01-01
 questions[60]= "61)  Seg&uacute;n la Ley 9/2014, es un derecho del usuario de teleco:";
 choices[60]= new Array();
 choices[60][0] = "La desconexi&oacute;n de cualquier servicio, previa solicitud.";
 choices[60][1] = "Disponer de un 902 o comunicaci&oacute;n electr&oacute;nica como servicio de atenci&oacute;n al cliente.";
 choices[60][2] = "La continuidad del servicio.";
 choices[60][3] = "A ser informado, pleno pago de la tasa correspondiente, de la inclusi&oacute;n de sus datos en las gu&iacute;as de abonados.";
 answers[60] = choices[60][2];
 units[60] = "110";
 comments[60] = "Id Pregunta: 11415. ";


//  Id pregunta: 11416 AÃ±o de creación de pregunta: 2015-01-01
 questions[61]= "62)  Seg&uacute;n la Ley 9/2014, los planes nacionales de numeraci&oacute;n se aprueban mediante:";
 choices[61]= new Array();
 choices[61][0] = "Orden Ministerial del MINETUR.";
 choices[61][1] = "Resoluci&oacute;n de la CNMC.";
 choices[61][2] = "Real Decreto.";
 choices[61][3] = "Ninguna de las anteriores.";
 answers[61] = choices[61][2];
 units[61] = "110";
 comments[61] = "Id Pregunta: 11416. ";


//  Id pregunta: 11418 AÃ±o de creación de pregunta: 2015-01-01
 questions[62]= "63)  Seg&uacute;n la Ley 9/2014, las decisiones de otorgamiento de uso de numeraci&oacute;n, direccionamiento y denominaci&oacute;n se adoptar&aacute;n y comunicar&aacute;n en un plazo m&aacute;ximo de:";
 choices[62]= new Array();
 choices[62][0] = "15 d&iacute;as.";
 choices[62][1] = "10 d&iacute;as.";
 choices[62][2] = "3 semanas cuando se apliquen procedimientos de selecci&oacute;n comparativa.";
 choices[62][3] = "6 semanas cuando se apliquen procedimientos de selecci&oacute;n comparativa.";
 answers[62] = choices[62][3];
 units[62] = "110";
 comments[62] = "Id Pregunta: 11418. ";


//  Id pregunta: 11420 AÃ±o de creación de pregunta: 2015-01-01
 questions[63]= "64)  Seg&uacute;n la Ley 9/2014, las propuestas para la elaboraci&oacute;n de normativa relativa a las infraestructuras comunes de comunicaciones electr&oacute;nicas en el interior de edificios es funci&oacute;n de:";
 choices[63]= new Array();
 choices[63][0] = "MINETUR.";
 choices[63][1] = "AGE.";
 choices[63][2] = "Organismos internacionales.";
 choices[63][3] = "CNMC.";
 answers[63] = choices[63][0];
 units[63] = "110";
 comments[63] = "Id Pregunta: 11420. ";


//  Id pregunta: 11424 AÃ±o de creación de pregunta: 2015-01-01
 questions[64]= "65)  Se&ntilde;ale la falsa, en relaci&oacute;n a derechos de los usuarios, seg&uacute;n se indica en la Ley 9/2014:";
 choices[64]= new Array();
 choices[64][0] = "Derecho a resolver el contrato en cualquier momento.";
 choices[64][1] = "Derecho al cambio de operador con conservaci&oacute;n del n&uacute;mero.";
 choices[64][2] = "Derecho a la continuidad del servicio, sin indemnizaci&oacute;n por parte del operador si la interrupci&oacute;n es inferior a 60 minutos.";
 choices[64][3] = "Derecho a acceder gratuitamente a llamadas de emergencia.";
 answers[64] = choices[64][2];
 units[64] = "110";
 comments[64] = "Id Pregunta: 11424. ";


//  Id pregunta: 11427 AÃ±o de creación de pregunta: 2015-01-01
 questions[65]= "66)  Seg&uacute;n la Ley 9/2014, qu&eacute; no regula el Gobierno, respecto al espectro:";
 choices[65]= new Array();
 choices[65][0] = "Niveles de emisi&oacute;n.";
 choices[65][1] = "Asignaci&oacute;n de bandas de frecuencia.";
 choices[65][2] = "Los contenidos enviados dentro del espectro.";
 choices[65][3] = "Establecer condiciones no discriminatorias.";
 answers[65] = choices[65][1];
 units[65] = "110";
 comments[65] = "Id Pregunta: 11427. ";


//  Id pregunta: 11428 AÃ±o de creación de pregunta: 2015-01-01
 questions[66]= "67)  Seg&uacute;n la Ley 9/2014, mediante Real Decreto se regular&aacute;n derechos:";
 choices[66]= new Array();
 choices[66][0] = "Continuidad servicio.";
 choices[66][1] = "Continuidad servicio y obtener compensaci&oacute;n autom&aacute;tica sin interrupci&oacute;n.";
 choices[66][2] = "Continuidad servicio y obtener compensaci&oacute;n proporcional al tiempo de interrupci&oacute;n.";
 choices[66][3] = "Continuidad servicio, sin compensaci&oacute;n.";
 answers[66] = choices[66][1];
 units[66] = "110";
 comments[66] = "Id Pregunta: 11428. ";


//  Id pregunta: 11429 AÃ±o de creación de pregunta: 2015-01-01
 questions[67]= "68)  Seg&uacute;n la Ley 9/2014, la aprobaci&oacute;n de los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n:";
 choices[67]= new Array();
 choices[67][0] = "Corresponde al Gobierno, mediante Real Decreto.";
 choices[67][1] = "Corresponde a la CNMC, mediante Resoluci&oacute;n.";
 choices[67][2] = "Corresponde al MINETUR, mediante Real Decreto.";
 choices[67][3] = "Corresponde al Gobierno, mediante Resoluci&oacute;n.";
 answers[67] = choices[67][0];
 units[67] = "110";
 comments[67] = "Id Pregunta: 11429. ";


//  Id pregunta: 11431 AÃ±o de creación de pregunta: 2015-01-01
 questions[68]= "69)  Seg&uacute;n la Ley 9/2014, &iquest;cu&aacute;l de las siguientes no es una facultad del Gobierno?:";
 choices[68]= new Array();
 choices[68][0] = "La elaboraci&oacute;n de los planes de utilizaci&oacute;n del espectro.";
 choices[68][1] = "La aprobaci&oacute;n de los planes de utilizaci&oacute;n del espectro.";
 choices[68][2] = "La elaboraci&oacute;n de los planes nacionales de numeraci&oacute;n.";
 choices[68][3] = "La aprobaci&oacute;n de los planes nacionales de numeraci&oacute;n.";
 answers[68] = choices[68][2];
 units[68] = "110";
 comments[68] = "Id Pregunta: 11431. ";


//  Id pregunta: 11433 AÃ±o de creación de pregunta: 2015-01-01
 questions[69]= "70)  Respecto a los derechos de los usuarios finales en la Ley 9/2014, se&ntilde;ale la falsa:";
 choices[69]= new Array();
 choices[69][0] = "El derecho al cambio de operador en 1 d&iacute;a laborable.";
 choices[69][1] = "El derecho a mostrar, mediante un procedimiento sencillo y gratuito, la presentaci&oacute;n de la identificaci&oacute;n de la l&iacute;nea de origen en las llamadas entrantes.";
 choices[69][2] = "Derecho de continuidad del servicio y a obtener compensaci&oacute;n econ&oacute;mica por interrupci&oacute;n.";
 choices[69][3] = "Derecho a detener el desv&iacute;o autom&aacute;tico de llamada efectuado a su terminal por un tercero.";
 answers[69] = choices[69][1];
 units[69] = "110";
 comments[69] = "Id Pregunta: 11433. ";


//  Id pregunta: 11434 AÃ±o de creación de pregunta: 2015-01-01
 questions[70]= "71)  Seg&uacute;n el art&iacute;culo 47 de la ley 9/2014, se regular&aacute; mediante Real Decreto (seleccione la INCORRECTA):";
 choices[70]= new Array();
 choices[70][0] = "Derecho a resolver el contrato en cualquier momento.";
 choices[70][1] = "Derecho a figurar en las gu&iacute;as de abonado.";
 choices[70][2] = "Derecho al cambio de operador.";
 choices[70][3] = "Derecho a acceder a los servicios de emergencia de forma gratuita.";
 answers[70] = choices[70][1];
 units[70] = "110";
 comments[70] = "Id Pregunta: 11434. ";


//  Id pregunta: 11437 AÃ±o de creación de pregunta: 2015-01-01
 questions[71]= "72)  &iquest;Cu&aacute;l de las siguientes cuestiones sobre la Ley 9/2014 es correcta?:";
 choices[71]= new Array();
 choices[71][0] = "Los abonados conservar&aacute;n los n&uacute;meros que le hayan sido asignados autom&aacute;ticamente.";
 choices[71][1] = "Los costes derivados de la actualizaci&oacute;n de los elementos de red ser&aacute;n sufragados por el abonado.";
 choices[71][2] = "Los abonados conservar&aacute;n los n&uacute;meros que le hayan sido asignados previa solicitud.";
 choices[71][3] = "Corresponde al MINETUR la aprobaci&oacute;n por RD de los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n.";
 answers[71] = choices[71][2];
 units[71] = "110";
 comments[71] = "Id Pregunta: 11437. ";


//  Id pregunta: 11438 AÃ±o de creación de pregunta: 2015-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l de las siguientes cuestiones sobre la Ley 9/2014 es incorrecta respecto a los derechos de los usuarios?";
 choices[72]= new Array();
 choices[72][0] = "Derecho a acceder a los servicios de emergencias de forma gratuita.";
 choices[72][1] = "Derecho a la continuidad de servicio.";
 choices[72][2] = "Derecho a la facturaci&oacute;n detallada, clara y sin errores.";
 choices[72][3] = "Derecho al cambio de operador, con conservaci&oacute;n de los n&uacute;meros en el plazo de dos d&iacute;as laborables.";
 answers[72] = choices[72][3];
 units[72] = "110";
 comments[72] = "Id Pregunta: 11438. ";


//  Id pregunta: 11441 AÃ±o de creación de pregunta: 2015-01-01
 questions[73]= "74)  Seg&uacute;n la Ley 9/2014, los usuarios finales de redes y servicios de comunicaciones electr&oacute;nicas tendr&aacute;n derecho a:";
 choices[73]= new Array();
 choices[73][0] = "Impedir la presentaci&oacute;n de la identificaci&oacute;n de su l&iacute;nea en las llamadas que genere, mediante procedimiento sencillo y gratuito.";
 choices[73][1] = "Impedir la presentaci&oacute;n de la identificaci&oacute;n de la l&iacute;nea origen en las llamadas entrantes, mediante un procedimiento sencillo y gratuito.";
 choices[73][2] = "Rechazar las llamadas entrantes en que la l&iacute;nea origen no aparezca identificada, mediante un procedimiento sencillo y gratuito.";
 choices[73][3] = "Todas las anteriores.";
 answers[73] = choices[73][3];
 units[73] = "110";
 comments[73] = "Id Pregunta: 11441. ";


//  Id pregunta: 11443 AÃ±o de creación de pregunta: 2015-01-01
 questions[74]= "75)  Identifique la respuesta incorrecta sobre derechos del usuario final de la LGT (9/2014):";
 choices[74]= new Array();
 choices[74][0] = "Tiene derecho a celebrar contratos con operadores.";
 choices[74][1] = "Tiene derecho al cambio de operador, con conservaci&oacute;n de los n&uacute;meros.";
 choices[74][2] = "Tiene derecho a una factura en papel, clara y detallada.";
 choices[74][3] = "Tiene derecho a acceder a los servicios de emergencia.";
 answers[74] = choices[74][2];
 units[74] = "110";
 comments[74] = "Id Pregunta: 11443. ";


//  Id pregunta: 11447 AÃ±o de creación de pregunta: 2015-01-01
 questions[75]= "76)  Seg&uacute;n la Ley 9/2014, el retraso en la conservaci&oacute;n de los n&uacute;meros por parte del operador, da derecho a los abonados a:";
 choices[75]= new Array();
 choices[75][0] = "Una compensaci&oacute;n.";
 choices[75][1] = "Nada.";
 choices[75][2] = "Alegar a recibir una segunda l&iacute;nea.";
 choices[75][3] = "Servicio gratuito durante los 3 primeros a&ntilde;os.";
 answers[75] = choices[75][0];
 units[75] = "110";
 comments[75] = "Id Pregunta: 11447. ";


//  Id pregunta: 11448 AÃ±o de creación de pregunta: 2015-01-01
 questions[76]= "77)  Seg&uacute;n la Ley 9/2014, si el MINETUR emite un informe negativo de una planificaci&oacute;n urbana o territorial, se podr&aacute; alegar:";
 choices[76]= new Array();
 choices[76][0] = "En el plazo m&aacute;ximo de tres meses.";
 choices[76][1] = "Nunca, ya que el informe emitido por MINETUR es negativo.";
 choices[76][2] = "En el plazo m&aacute;ximo de tres meses siempre y cuando el informe negativo permita modificar el informe.";
 choices[76][3] = "En el plazo m&aacute;ximo de un mes.";
 answers[76] = choices[76][3];
 units[76] = "110";
 comments[76] = "Id Pregunta: 11448. ";


//  Id pregunta: 11449 AÃ±o de creación de pregunta: 2015-01-01
 questions[77]= "78)  Seg&uacute;n la Ley 9/2014, las condiciones asociadas a los t&iacute;tulos habilitantes para el uso del dominio p&uacute;blico radioel&eacute;ctrico no incluyen:";
 choices[77]= new Array();
 choices[77][0] = "Proporcionadas.";
 choices[77][1] = "No discriminatorias.";
 choices[77][2] = "Transparentes.";
 choices[77][3] = "Neutrales.";
 answers[77] = choices[77][3];
 units[77] = "110";
 comments[77] = "Id Pregunta: 11449. ";


//  Id pregunta: 11451 AÃ±o de creación de pregunta: 2015-01-01
 questions[78]= "79)  Seg&uacute;n la Ley 9/2014, el Gobierno, al administrar el espectro radioel&eacute;ctrico, debe:";
 choices[78]= new Array();
 choices[78][0] = "Determinar los niveles de emisi&oacute;n radioel&eacute;ctrica tolerable.";
 choices[78][1] = "Establecer el procedimiento para reasignar el uso de las bandas para un uso m&aacute;s eficiente del espectro.";
 choices[78][2] = "Utilizar el espectro de forma adecuada.";
 choices[78][3] = "Todas son atribuciones del Gobierno.";
 answers[78] = choices[78][3];
 units[78] = "110";
 comments[78] = "Id Pregunta: 11451. ";


//  Id pregunta: 11456 AÃ±o de creación de pregunta: 2015-01-01
 questions[79]= "80)  Sobre los plazos relacionados con las decisiones sobre los otorgamientos de derechos de uso en la Ley 9/2014, General de Telecomunicaciones, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?:";
 choices[79]= new Array();
 choices[79][0] = "El plazo m&aacute;ximo entre la recepci&oacute;n de la solicitud y la adopci&oacute;n y publicaci&oacute;n de decisiones es de 6 semanas.";
 choices[79][1] = "El plazo m&aacute;ximo entre la petici&oacute;n y la decisi&oacute;n sin hacerla p&uacute;blica  es de 3 semanas.";
 choices[79][2] = "El plazo m&aacute;ximo entre la recepci&oacute;n de solicitud y la adopci&oacute;n, comunicaci&oacute;n y publicaci&oacute;n de decisiones es de 3 semanas, salvo cuando se apliquen procedimientos de selecci&oacute;n comparativa o competitiva.";
 choices[79][3] = "Ninguna de las anteriores es correcta.";
 answers[79] = choices[79][2];
 units[79] = "110";
 comments[79] = "Id Pregunta: 11456. ";


//  Id pregunta: 11457 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre la Ley 9/2014 General de Telecomunicaciones es correcta?:";
 choices[80]= new Array();
 choices[80][0] = "Mediante real decreto el Gobierno otorgar&aacute; los derechos de uso de los recursos p&uacute;blicos regulados en los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n.";
 choices[80][1] = "El Ministerio de Industria, Energ&iacute;a y Turismo  podr&aacute; fijar, mediante orden ministerial, las caracter&iacute;sticas y condiciones para la conservaci&oacute;n de los n&uacute;meros.";
 choices[80][2] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia, previo informe del Ministerio de Industria, Energ&iacute;a y Turismo, podr&aacute; modificar la estructura y organizaci&oacute;n de los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n.";
 choices[80][3] = "Los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n tomar&aacute;n en consideraci&oacute;n los n&uacute;meros, direcciones y nombres necesarios para permitir la efectiva prestaci&oacute;n de servicios de comunicaciones electr&oacute;nicas.";
 answers[80] = choices[80][3];
 units[80] = "110";
 comments[80] = "Id Pregunta: 11457. ";


//  Id pregunta: 11458 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre la Ley General de Telecomunicaciones 9/2014 es correcta?:";
 choices[81]= new Array();
 choices[81][0] = "La Comisi&oacute;n Nacional de los Mercados y de la Competencia suministrar&aacute; a las empresas que hagan gu&iacute;as de abonados los datos que faciliten los operadores.";
 choices[81][1] = "Los usuarios finales tienen derecho a cambiar de operador en el plazo de 1 d&iacute;a laborable.";
 choices[81][2] = "La llamada a los servicios de emergencias tienen un coste definido por el operador.";
 choices[81][3] = "Ninguna de las anteriores.";
 answers[81] = choices[81][1];
 units[81] = "110";
 comments[81] = "Id Pregunta: 11458. ";


//  Id pregunta: 11459 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  Seg&uacute;n la Ley 9/2014, el Gobierno, en relaci&oacute;n a la administraci&oacute;n del dominio p&uacute;blico radioel&eacute;ctrico, establecer&aacute;:";
 choices[82]= new Array();
 choices[82][0] = "La adecuada utilizaci&oacute;n del espectro mediante el empleo de equipos p&uacute;blicos.";
 choices[82][1] = "La correcta utilizaci&oacute;n de frecuencias por parte de los operadores.";
 choices[82][2] = "La inspecci&oacute;n por un ente privado del nivel radioel&eacute;ctrico tolerable.";
 choices[82][3] = "Ninguna de las anteriores.";
 answers[82] = choices[82][3];
 units[82] = "110";
 comments[82] = "Id Pregunta: 11459. ";


//  Id pregunta: 11461 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  Seg&uacute;n la Ley 9/2014, se&ntilde;ale la falsa:";
 choices[83]= new Array();
 choices[83][0] = "Corresponde al Gobierno la aprobaci&oacute;n por Real Decreto de los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n.";
 choices[83][1] = "El MINETUR podr&aacute; mediante orden y previo informe del Gobierno, modificar la estructura y organizaci&oacute;n de los planes nacionales.";
 choices[83][2] = "Los costes derivados de la actualizaci&oacute;n de los elementos de la red deber&aacute;n ser sufragados por cada operador.";
 choices[83][3] = "Las decisiones relativas a los otorgamientos de derechos de uso se adoptar&aacute;n, comunicar&aacute;n y har&aacute;n p&uacute;blicas en el plazo m&aacute;ximo de tres semanas desde la recepci&oacute;n de la solicitud completa, salvo cuando se apliquen procedimientos de selecci&oacute;n comparativa o competitiva.";
 answers[83] = choices[83][1];
 units[83] = "110";
 comments[83] = "Id Pregunta: 11461. ";


//  Id pregunta: 11466 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  Seg&uacute;n la Ley 9/2014, el usuario tiene derecho durante una llamada:";
 choices[84]= new Array();
 choices[84][0] = "A impedir la presentaci&oacute;n de la identificaci&oacute;n de su l&iacute;nea.";
 choices[84][1] = "A impedir la presentaci&oacute;n de la identificaci&oacute;n de la l&iacute;nea de origen.";
 choices[84][2] = "A ambas.";
 choices[84][3] = "A ninguna.";
 answers[84] = choices[84][2];
 units[84] = "110";
 comments[84] = "Id Pregunta: 11466. ";


//  Id pregunta: 11468 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  Seg&uacute;n la Ley 9/2014, &iquest;cu&aacute;l de las siguientes NO es una facultad del Gobierno para la administraci&oacute;n del espectro?";
 choices[85]= new Array();
 choices[85][0] = "La adecuada utilizaci&oacute;n del espectro mediante equipos y aparatos.";
 choices[85][1] = "Establecer condiciones discriminatorias respecto a los t&iacute;tulos habilitantes para el uso del dominio p&uacute;blico radioel&eacute;ctrico.";
 choices[85][2] = "Garantizar el uso efectivo y eficaz de las frecuencias.";
 choices[85][3] = "Elaborar y aprobar los planes de utilizaci&oacute;n del espectro.";
 answers[85] = choices[85][1];
 units[85] = "110";
 comments[85] = "Id Pregunta: 11468. ";


//  Id pregunta: 11478 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l no es una facultad del Gobierno en la administraci&oacute;n del espectro seg&uacute;n la Ley 9/2014?";
 choices[86]= new Array();
 choices[86][0] = "Elaborar los planes de utilizaci&oacute;n del espectro.";
 choices[86][1] = "Gestionar las tasas asociadas a los t&iacute;tulos habilitantes de derechos de uso.";
 choices[86][2] = "Fijar condiciones proporcionadas sobre los t&iacute;tulos habilitantes.";
 choices[86][3] = "Velar por uso adecuado del espectro mediante uso de equipos y aparatos.";
 answers[86] = choices[86][1];
 units[86] = "110";
 comments[86] = "Id Pregunta: 11478. ";


