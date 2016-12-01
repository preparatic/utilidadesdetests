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

//  Id pregunta: 302 Año de creación de pregunta: 2016
 questions[0]= "1)  El Presidente del Tribunal de Cuentas es elegido para un per&iacute;odo de:";
 choices[0]= new Array();
 choices[0][0] = "Cinco a&ntilde;os.";
 choices[0][1] = "Cuatro a&ntilde;os.";
 choices[0][2] = "Tres a&ntilde;os.";
 choices[0][3] = "Seis meses.";
 answers[0] = choices[0][2];
 units[0] = "5";
 comments[0] = "Id Pregunta: 302. UNION EUROPEA";
 preguntaids[0] = 302


//  Id pregunta: 79 Año de creación de pregunta: 2016
 questions[1]= "2)  La Ley 25/2013, de 27 de diciembre, de impulso de la factura electr&oacute;nica y creaci&oacute;n del Registro Contable de Facturas en el Sector P&uacute;blico, prev&eacute; que anualmente se realice una auditor&iacute;a de sistemas para verificar que los correspondientes registros contables de facturas cumplen con las condiciones de funcionamiento previstas en la normativa aplicable. En el &aacute;mbito de la Administraci&oacute;n General del Estado dicha auditor&iacute;a se realizar&aacute; por:";
 choices[1]= new Array();
 choices[1][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[1][1] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado";
 choices[1][2] = "Las Inspecciones Generales de los Servicios";
 choices[1][3] = "La Agencia Estatal de la Administraci&oacute;n Tributaria";
 answers[1] = choices[1][1];
 units[1] = "75";
 comments[1] = "Id Pregunta: 79. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";
 preguntaids[1] = 79


//  Id pregunta: 222 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[2]= new Array();
 choices[2][0] = "Dos Cap&iacute;tulos.";
 choices[2][1] = "Tres Cap&iacute;tulos.";
 choices[2][2] = "Un Cap&iacute;tulo.";
 choices[2][3] = "Cuatro Cap&iacute;tulos.";
 answers[2] = choices[2][1];
 units[2] = "1";
 comments[2] = "Id Pregunta: 222. CONSTITUCION1978";
 preguntaids[2] = 222


//  Id pregunta: 443 Año de creación de pregunta: 2016
 questions[3]= "4)  Respecto a las comunicaciones y notificaciones electr&oacute;nicas:";
 choices[3]= new Array();
 choices[3][0] = "El servicio SIM se utiliza para el env&iacute;o de notificaciones electr&oacute;nicas.";
 choices[3][1] = "El Servicio compartido la gesti&oacute;n de notificaciones Notific@, ser&aacute; de uso obligatorio para la AGE y sus OOPP en 2017.";
 choices[3][2] = "La plataforma Notific@, recibe desde los organismos emisores, las comunicaciones y adem&aacute;s de aportar otros valores a&ntilde;adidos, las pone a disposici&oacute;n de los destinatarios en la Carpeta Ciudadana.";
 choices[3][3] = "El servicio SIM, que se ha integrado en el Servicio compartido de gesti&oacute;n de notificaciones, proporciona a los ciudadanos y empresas un buz&oacute;n seguro.";
 answers[3] = choices[3][1];
 units[3] = "43";
 comments[3] = "Id Pregunta: 443. SERVICIOS COMUNES";
 preguntaids[3] = 443


//  Id pregunta: 218 Año de creación de pregunta: 2016
 questions[4]= "5)  Seg&uacute;n el T&iacute;tulo III &quot;De las Cortes Generales&quot; de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras podr&aacute;n:";
 choices[4]= new Array();
 choices[4][0] = "Recibir peticiones individuales y colectivas, siempre por escrito, quedando prohibida la presentaci&oacute;n directa por manifestaciones ciudadanas.";
 choices[4][1] = "Delegar en las Comisiones Legislativas Permanentes la aprobaci&oacute;n de proyectos o proposiciones de ley relativas a cuestiones internacionales.";
 choices[4][2] = "Reunirse en sesi&oacute;n extraordinaria a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 choices[4][3] = "Nombrar conjuntamente Comisiones de Investigaci&oacute;n sobre asuntos de inter&eacute;s p&uacute;blico. Sus conclusiones ser&aacute;n vinculantes para los Tribunales.";
 answers[4] = choices[4][0];
 units[4] = "1";
 comments[4] = "Id Pregunta: 218. CONSTITUCION1978";
 preguntaids[4] = 218


//  Id pregunta: 454 Año de creación de pregunta: 2016
 questions[5]= "6)  En t&eacute;rminos familiares, podemos decir que desembocan en gastos...";
 choices[5]= new Array();
 choices[5][0] = "Los cr&eacute;ditos";
 choices[5][1] = "Las partidas presupuestarias";
 choices[5][2] = "Los derechos";
 choices[5][3] = "Las obligaciones";
 answers[5] = choices[5][3];
 units[5] = "10";
 comments[5] = "Id Pregunta: 454. PRESUPUESTOS GENERALES";
 preguntaids[5] = 454


//  Id pregunta: 815 Año de creación de pregunta: 2016
 questions[6]= "7)  Existir&aacute; un Subdelegado del Gobierno, que estar&aacute; bajo la inmediata dependencia del Delegado del Gobierno:";
 choices[6]= new Array();
 choices[6][0] = "en cada Comunidad Aut&oacute;noma";
 choices[6][1] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas pluriprovinciales";
 choices[6][2] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas uniprovinciales";
 choices[6][3] = "en cada una de las localidades de las Comunidades Aut&oacute;nomas";
 answers[6] = choices[6][1];
 units[6] = "4, 7, 8, 9";
 comments[6] = "Id Pregunta: 815. Ley 40/2015";
 preguntaids[6] = 815


//  Id pregunta: 260 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se recoge el principio de unidad jurisdiccional?:";
 choices[7]= new Array();
 choices[7][0] = "117.5";
 choices[7][1] = "117.1";
 choices[7][2] = "116";
 choices[7][3] = "15";
 answers[7] = choices[7][0];
 units[7] = "1";
 comments[7] = "Id Pregunta: 260. CONSTITUCION1978";
 preguntaids[7] = 260


//  Id pregunta: 855 Año de creación de pregunta: 2016
 questions[8]= "9)  Indique cu&aacute;l de las siguientes funciones relativas a una PKI es INCORRECTA:";
 choices[8]= new Array();
 choices[8][0] = "Garantiza mediante el uso de certificados digitales el no repudio, integridad, autenticaci&oacute;n y la publicaci&oacute;n de los datos transmitidos.";
 choices[8][1] = "Los componentes de una PKI para la administraci&oacute;n de los ccertificados son: software, hardware, personas, pol&iacute;ticas, procedimientos.";
 choices[8][2] = "Entre las funciones de una PKI se encuentra la revocaci&oacute;n de claves.";
 choices[8][3] = "Entre las funciones de una PKI se encuentran la generaci&oacute;n, recuperaci&oacute;n y renovaci&oacute;n de claves.";
 answers[8] = choices[8][0];
 units[8] = "76";
 comments[8] = "Id Pregunta: 855. Xunta de Galicia 2015";
 preguntaids[8] = 855


//  Id pregunta: 710 Año de creación de pregunta: 2016
 questions[9]= "10)  Indique la afirmaci&oacute;n falsa:";
 choices[9]= new Array();
 choices[9][0] = "En la publicidad activa la Administraci&oacute;n pone los datos a disposici&oacute;n de la ciudadan&iacute;a, en portales y p&aacute;ginas web, sin esperar a que los ciudadanos los demanden, proactivamente.";
 choices[9][1] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica los ciudadanos acceden a la informaci&oacute;n p&uacute;blica puesta a disposici&oacute;n por la Administraci&oacute;n en portales y p&aacute;ginas web.";
 choices[9][2] = "La publicidad activa y el derecho de acceso fomentan la transparencia en la actividad p&uacute;blica.";
 choices[9][3] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica la Administraci&oacute;n responde a las demandas de informaci&oacute;n por parte de los ciudadanos.";
 answers[9] = choices[9][1];
 units[9] = "22";
 comments[9] = "Id Pregunta: 710. Ley de transparencia";
 preguntaids[9] = 710


//  Id pregunta: 148 Año de creación de pregunta: 2016
 questions[10]= "11)  La publicaci&oacute;n del &laquo;Bolet&iacute;n Oficial del Estado&raquo; en la sede electr&oacute;nica del Organismo competente:";
 choices[10]= new Array();
 choices[10][0] = "Tiene car&aacute;cter supletorio respecto a la versi&oacute;n en formato papel";
 choices[10][1] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, aunque no se podr&aacute; derivar de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[10][2] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[10][3] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se habr&aacute;n de determinar necesariamente por Ley, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 answers[10] = choices[10][2];
 units[10] = "7";
 comments[10] = "Id Pregunta: 148. Ley 39/2015, Art&iacute;culo 131";
 preguntaids[10] = 148


//  Id pregunta: 688 Año de creación de pregunta: 2016
 questions[11]= "12)  Indique cu&aacute;l de las siguientes afirmaciones no es correcta seg&uacute;n lo establecido en el Reglamento (UE) 910/2014";
 choices[11]= new Array();
 choices[11][0] = "Las firmas electro&#769;nicas cualificadas tendr&aacute;n un efecto juri&#769;dico equivalente al de una firma manuscrita";
 choices[11][1] = "Una firma electro&#769;nica cualificada basada en un certificado cualificado emitido en un Estado miembro sera&#769; reconocida como firma electro&#769;nica cualificada en los dema&#769;s Estados miembros";
 choices[11][2] = "No se denegara&#769;n efectos juri&#769;dicos ni admisibilidad como prueba en procedimientos judiciales a una firma electro&#769;nica por el mero hecho de ser una firma electro&#769;nica";
 choices[11][3] = "Las firmas electr&oacute;nicas cualificadas tendr&aacute;n una validez de 48 meses";
 answers[11] = choices[11][3];
 units[11] = "77";
 comments[11] = "Id Pregunta: 688. Art&iacute;culo 25 del Reglamento 910/2014";
 preguntaids[11] = 688


//  Id pregunta: 814 Año de creación de pregunta: 2016
 questions[12]= "13)  Las Delegaciones del Gobierno est&aacute;n adscritas org&aacute;nicamente a:";
 choices[12]= new Array();
 choices[12][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[12][1] = "el Consejo de Gobierno de la Comunidad Aut&oacute;noma";
 choices[12][2] = "el Ministerio del Interior";
 choices[12][3] = "la Administraci&oacute;n General del Estado";
 answers[12] = choices[12][0];
 units[12] = "4, 7, 8, 9";
 comments[12] = "Id Pregunta: 814. Ley 40/2015";
 preguntaids[12] = 814


//  Id pregunta: 8 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Cu&aacute;l de las siguientes NO es una funci&oacute;n de la Secretar&iacute;a General de Administraci&oacute;n Digital?";
 choices[13]= new Array();
 choices[13][0] = "Establecer los mecanismos que aseguren un adecuado mantenimiento del censo de activos TIC.";
 choices[13][1] = "El estudio y la implementaci&oacute;n de modelos para incentivar la compartici&oacute;n y reutilizaci&oacute;n de las infraestructuras y aplicaciones sectoriales, y promover el desarrollo de aplicaciones bajo dicho modelo.";
 choices[13][2] = "La supervisi&oacute;n y coordinaci&oacute;n del registro de convenios del sector p&uacute;blico estatal, de acuerdo con la informaci&oacute;n que deber&aacute;n suministrar los diferentes departamentos ministeriales y dem&aacute;s organismos p&uacute;blicos suscriptores de los mismos.";
 choices[13][3] = "El desarrollo, impulso e implantaci&oacute;n de sistemas tecnol&oacute;gicos de apoyo para la gesti&oacute;n de recursos humanos, incluidos los sistemas del Registro Central de Personal.";
 answers[13] = choices[13][2];
 units[13] = "26";
 comments[13] = "Id Pregunta: 8. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";
 preguntaids[13] = 8


//  Id pregunta: 544 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Cu&aacute;l es el &oacute;rgano de la Comisi&oacute;n Europea encargado de la gobernanza TIC cuya misi&oacute;n es garantizar que la Comisi&oacute;n haga un uso eficaz de las tecnolog&iacute;as de la informaci&oacute;n y la comunicaci&oacute;n para el logro de sus objetivos organizativos y pol&iacute;ticos?";
 choices[14]= new Array();
 choices[14][0] = "La Direcci&oacute;n General de Inform&aacute;tica (DIGIT)";
 choices[14][1] = "Oficina del Organismo de Reguladores Europeos de las Comunicaciones Electr&oacute;nicas (ORECE)";
 choices[14][2] = "Agencia de Seguridad de las Redes y de la Informaci&oacute;n de la Uni&oacute;n Europea (ENISA)";
 choices[14][3] = "Instituto Europeo de Innovaci&oacute;n y Tecnolog&iacute;a (EIT)";
 answers[14] = choices[14][0];
 units[14] = "26";
 comments[14] = "Id Pregunta: 544. Gobernanza TIC";
 preguntaids[14] = 544


//  Id pregunta: 150 Año de creación de pregunta: 2016
 questions[15]= "16)  Seg&uacute;n la ley 39/2015, el medio elegido por la persona para comunicarse con las Administraciones P&uacute;blicas:";
 choices[15]= new Array();
 choices[15][0] = "&uacute;nicamente podr&aacute; ser modificado cuando de no hacerlo se corra riesgo de no alcanzarse las pretensiones del interesado ";
 choices[15][1] = "no podr&aacute; ser modificado con posterioridad al tr&aacute;mite de audiencia";
 choices[15][2] = "podr&aacute; ser modificado en cualquier momento por la persona";
 choices[15][3] = "no podr&aacute; ser modificado de manera unilateral por el interesado";
 answers[15] = choices[15][2];
 units[15] = "7";
 comments[15] = "Id Pregunta: 150. Ley 39/2015, Art&iacute;culo 14";
 preguntaids[15] = 150


//  Id pregunta: 719 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;A trav&eacute;s de qu&eacute; empresa surgen las metodolog&iacute;as lean?";
 choices[16]= new Array();
 choices[16][0] = "Ford";
 choices[16][1] = "Google";
 choices[16][2] = "Toyota";
 choices[16][3] = "Facebook";
 answers[16] = choices[16][2];
 units[16] = "34";
 comments[16] = "Id Pregunta: 719. Metodologias Lean";
 preguntaids[16] = 719


//  Id pregunta: 590 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Cu&aacute;ntos servicios se declararon compartidos en la primera declaraci&oacute;n?";
 choices[17]= new Array();
 choices[17][0] = "14";
 choices[17][1] = "11";
 choices[17][2] = "12";
 choices[17][3] = "15";
 answers[17] = choices[17][0];
 units[17] = "19";
 comments[17] = "Id Pregunta: 590. Estrategia TIC";
 preguntaids[17] = 590


//  Id pregunta: 405 Año de creación de pregunta: 2016
 questions[18]= "19)  Se&ntilde;ala las Directivas referidas a la Igualdad de trato de oportunidades entre hombre y mujeres:";
 choices[18]= new Array();
 choices[18][0] = "Directiva 2002/73/CE del Parlamento Europeo y del Consejo.";
 choices[18][1] = "Directiva 2004/113/CE del Consejo.";
 choices[18][2] = "Todas son correctas.";
 choices[18][3] = "Todas son falsas.";
 answers[18] = choices[18][2];
 units[18] = "14";
 comments[18] = "Id Pregunta: 405. POLITICAS DE IGUALDAD";
 preguntaids[18] = 405


//  Id pregunta: 501 Año de creación de pregunta: 2016
 questions[19]= "20)  A tenor de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la cuant&iacute;a global de los anticipos de caja fija no podr&aacute; superar para cada ministerio y organismo aut&oacute;nomo:";
 choices[19]= new Array();
 choices[19][0] = "El 7% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[19][1] = "El 5% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[19][2] = "El 6% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[19][3] = "El 8% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 answers[19] = choices[19][0];
 units[19] = "10";
 comments[19] = "Id Pregunta: 501. PRESUPUESTOS GENERALES";
 preguntaids[19] = 501


//  Id pregunta: 58 Año de creación de pregunta: 2016
 questions[20]= "21)  Se&ntilde;ale cu&aacute;l de los siguientes apartados NO ha sido declarado como servicio compartido en la Administraci&oacute;n General del Estado:";
 choices[20]= new Array();
 choices[20][0] = "Servicio com&uacute;n de gesti&oacute;n econ&oacute;mico-presupuestaria";
 choices[20][1] = "Servicio com&uacute;n de georreferenciaci&oacute;n";
 choices[20][2] = "Servicio de seguridad gestionada";
 choices[20][3] = "Servicio de gesti&oacute;n de notificaciones";
 answers[20] = choices[20][1];
 units[20] = "26";
 comments[20] = "Id Pregunta: 58. AGE A1 2015";
 preguntaids[20] = 58


//  Id pregunta: 337 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;De cu&aacute;ntos diputados se compone el Parlamento Europeo?:";
 choices[21]= new Array();
 choices[21][0] = "732";
 choices[21][1] = "626";
 choices[21][2] = "786";
 choices[21][3] = "360";
 answers[21] = choices[21][2];
 units[21] = "5";
 comments[21] = "Id Pregunta: 337. UNION EUROPEA";
 preguntaids[21] = 337


//  Id pregunta: 362 Año de creación de pregunta: 2016
 questions[22]= "23)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[22]= new Array();
 choices[22][0] = "Son actos normativos.";
 choices[22][1] = "Poseen alcance general.";
 choices[22][2] = "No son obligatorias.";
 choices[22][3] = "Son actos individuales no normativos.";
 answers[22] = choices[22][3];
 units[22] = "5";
 comments[22] = "Id Pregunta: 362. UNION EUROPEA";
 preguntaids[22] = 362


//  Id pregunta: 317 Año de creación de pregunta: 2016
 questions[23]= "24)  Habr&aacute; qu&oacute;rum en el Parlamento Europeo, cuando se encuentre reunida en el sal&oacute;n de sesiones:";
 choices[23]= new Array();
 choices[23][0] = "La cuarta parte de los Diputados que integran el Parlamento.";
 choices[23][1] = "La quinta parte de los Diputados que integran el Parlamento.";
 choices[23][2] = "La mitad de los Diputados que integran el Parlamento.";
 choices[23][3] = "La tercera parte de los Diputados que integran el Parlamento.";
 answers[23] = choices[23][3];
 units[23] = "5";
 comments[23] = "Id Pregunta: 317. UNION EUROPEA";
 preguntaids[23] = 317


//  Id pregunta: 557 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Qui&eacute;nes son los beneficiarios de la estrategia para el Mercado &Uacute;nico Digital en la UE?";
 choices[24]= new Array();
 choices[24][0] = "Consumidores";
 choices[24][1] = "PYMES y Start-ups";
 choices[24][2] = "La Industria";
 choices[24][3] = "Todos los anteriores";
 answers[24] = choices[24][3];
 units[24] = "17";
 comments[24] = "Id Pregunta: 557. Mercado &Uacute;nico Digital";
 preguntaids[24] = 557


//  Id pregunta: 695 Año de creación de pregunta: 2016
 questions[25]= "26)  Se&ntilde;ale de las siguientes la que NO corresponde a una herramienta de integraci&oacute;n continua:";
 choices[25]= new Array();
 choices[25][0] = "Jenkins";
 choices[25][1] = "Hudson";
 choices[25][2] = "SonarQube";
 choices[25][3] = "Todas lo son";
 answers[25] = choices[25][3];
 units[25] = "92";
 comments[25] = "Id Pregunta: 695. INTEGRACION CONTINUA";
 preguntaids[25] = 695


//  Id pregunta: 508 Año de creación de pregunta: 2016
 questions[26]= "27)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, responde a la reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, (en adelante CE) e incorpora tres nuevos principios con respecto a la derogada Ley Org&aacute;nica 5/2001, de 13 de diciembre, complementaria a la Ley General de Estabilidad Presupuestaria ,Cu&aacute;les son?";
 choices[26]= new Array();
 choices[26][0] = "Estabilidad presupuestaria, plurianualidad, y responsabilidad.";
 choices[26][1] = "Sostenibilidad financiera, responsabilidad y transparencia.";
 choices[26][2] = "Plurianualidad, lealtad institucional y eficiencia en la asignaci&oacute;n de los recursos p&uacute;blicos";
 choices[26][3] = "Responsabilidad, sostenibilidad financiera y lealtad institucional.";
 answers[26] = choices[26][3];
 units[26] = "10";
 comments[26] = "Id Pregunta: 508. PRESUPUESTOS GENERALES";
 preguntaids[26] = 508


//  Id pregunta: 483 Año de creación de pregunta: 2016
 questions[27]= "28)  A tenor del art&iacute;culo 48 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, podr&aacute; ser diferido el vencimiento de la obligaci&oacute;n de pago del precio de compra de bienes inmuebles adquiridos directamente cuyo importe excede de:";
 choices[27]= new Array();
 choices[27][0] = "Cuatro millones de euros.";
 choices[27][1] = "Seis millones de euros.";
 choices[27][2] = "Siete millones de euros.";
 choices[27][3] = "Cinco millones de euros.";
 answers[27] = choices[27][1];
 units[27] = "10";
 comments[27] = "Id Pregunta: 483. PRESUPUESTOS GENERALES";
 preguntaids[27] = 483


//  Id pregunta: 630 Año de creación de pregunta: 2016
 questions[28]= "29)  Seg&uacute;n el Real Decreto 4/2010, de 8 de enero, por el que se regula el Esquema Nacional de Interoperabilidad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; es la interoperabilidad?";
 choices[28]= new Array();
 choices[28][0] = "Es la capacidad de los sistemas de informaci&oacute;n y de los procedimientos a los que &eacute;stos dan soporte, de compartir datos y posibilitar el intercambio de informaci&oacute;n y conocimiento entre ellos.";
 choices[28][1] = "Es la obligaci&oacute;n de conectividad ente sistemas operativos de las Administraciones P&uacute;blicas.";
 choices[28][2] = "Es la capacidad de intercambio de datos entre las Comunidades Aut&oacute;nomas y la Administraci&oacute;n Central.";
 choices[28][3] = "Es la posibilidad de acceso a los datos que poseen todas las Administraciones sobre cualquiera de los usuarios de los sistemas de informaci&oacute;n.";
 answers[28] = choices[28][0];
 units[28] = "45";
 comments[28] = "Id Pregunta: 630. Junta de Extremadura A1 2015";
 preguntaids[28] = 630


//  Id pregunta: 255 Año de creación de pregunta: 2016
 questions[29]= "30)  La soberan&iacute;a nacional reside en:";
 choices[29]= new Array();
 choices[29][0] = "el Parlamento nacional.";
 choices[29][1] = "el Parlamento auton&oacute;mico o Asamblea.";
 choices[29][2] = "el pueblo espa&ntilde;ol.";
 choices[29][3] = "el Congreso y el Senado.";
 answers[29] = choices[29][3];
 units[29] = "1";
 comments[29] = "Id Pregunta: 255. CONSTITUCION1978";
 preguntaids[29] = 255


//  Id pregunta: 721 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;C&uacute;al de los siguientes puntos NO es uno de los principios de las metodolog&iacute;as lean?";
 choices[30]= new Array();
 choices[30][0] = "Flexibilidad para variar el servicio o producto";
 choices[30][1] = "Eliminar desperdicios";
 choices[30][2] = "Decidir lo m&aacute;s tarde posible";
 choices[30][3] = "Hacer entregas tan r&aacute;pido como sea posible";
 answers[30] = choices[30][0];
 units[30] = "34";
 comments[30] = "Id Pregunta: 721. Metodologias Lean";
 preguntaids[30] = 721


//  Id pregunta: 495 Año de creación de pregunta: 2016
 questions[31]= "32)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, inspeccionar la actividad de las oficinas de contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una competencia de:";
 choices[31]= new Array();
 choices[31][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[31][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[31][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[31][3] = "La Intervenci&oacute;n General de la Seguridad Social.";
 answers[31] = choices[31][2];
 units[31] = "10";
 comments[31] = "Id Pregunta: 495. PRESUPUESTOS GENERALES";
 preguntaids[31] = 495


//  Id pregunta: 475 Año de creación de pregunta: 2016
 questions[32]= "33)  Seg&uacute;n el art&iacute;culo de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , el r&eacute;gimen econ&oacute;mico y financiero del sector p&uacute;blico estatal se regula en:";
 choices[32]= new Array();
 choices[32][0] = "Ley 50/1997, del Gobierno.";
 choices[32][1] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[32][2] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General del Estado.";
 choices[32][3] = "La Ley General de la Hacienda P&uacute;blica.";
 answers[32] = choices[32][1];
 units[32] = "10";
 comments[32] = "Id Pregunta: 475. PRESUPUESTOS GENERALES";
 preguntaids[32] = 475


//  Id pregunta: 306 Año de creación de pregunta: 2016
 questions[33]= "34)  Componen la Comisi&oacute;n Europea:";
 choices[33]= new Array();
 choices[33][0] = "Un Comisario por cada Estado miembro.";
 choices[33][1] = "Uno o dos Comisarios por cada Estado miembro, dependiendo de las caracter&iacute;sticas del Estado.";
 choices[33][2] = "Dos Comisarios por cada Estado miembro.";
 choices[33][3] = "Los Ministros de Asuntos Exteriores de cada Estado miembro.";
 answers[33] = choices[33][0];
 units[33] = "5";
 comments[33] = "Id Pregunta: 306. UNION EUROPEA";
 preguntaids[33] = 306


//  Id pregunta: 122 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos NO forma parte de la estructura org&aacute;nica del Consejo de Transparencia y Buen Gobierno seg&uacute;n su Estatuto?";
 choices[34]= new Array();
 choices[34][0] = "El Presidente del Consejo de Transparencia y Buen Gobierno";
 choices[34][1] = "La Direcci&oacute;n General de Transparencia y Buen Gobierno";
 choices[34][2] = "La Comisi&oacute;n de Transparencia y Buen Gobierno";
 choices[34][3] = "La Subdirecci&oacute;n General de Reclamaciones";
 answers[34] = choices[34][1];
 units[34] = "22";
 comments[34] = "Id Pregunta: 122. ";
 preguntaids[34] = 122


//  Id pregunta: 120 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Cu&aacute;l es el Real Decreto por el que se aprueba el Estatuto del Consejo de Transparencia y Buen Gobierno?";
 choices[35]= new Array();
 choices[35][0] = "Real Decreto 806/2014, de 19 de septiembre";
 choices[35][1] = "Real Decreto 951/2015, de 23 de octubre";
 choices[35][2] = "Real Decreto 1065/2015, de 27 de noviembre";
 choices[35][3] = "Real Decreto 919/2014, de 31 de octubre";
 answers[35] = choices[35][3];
 units[35] = "22";
 comments[35] = "Id Pregunta: 120. ";
 preguntaids[35] = 120


//  Id pregunta: 745 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Qu&eacute; dos figuras son novedad de la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n ?";
 choices[36]= new Array();
 choices[36][0] = "Las Sociedades de Responsabilidad Limitada de formaci&oacute;n sucesiva y el Emprendedor de responsabilidad limitada";
 choices[36][1] = "Sociedad Limitada de Formaci&oacute;n Sucesiva y Emprendedor de responsabilidad limitada";
 choices[36][2] = "Sociedad de Responsabilidad Limitada y Emprendedor de responsabilidad Limitada";
 choices[36][3] = "Sociedad de Formaci&oacute;n sucesiva y emprendedor de responsabilidad limitada";
 answers[36] = choices[36][1];
 units[36] = "23";
 comments[36] = "Id Pregunta: 745. Direcci&oacute;n p&uacute;blica";
 preguntaids[36] = 745


//  Id pregunta: 26 Año de creación de pregunta: 2016
 questions[37]= "38)  Usted, como directivo TIC de la AGE, decide crear un portal web, con una direcci&oacute;n electr&oacute;nica nueva, con el objetivo de informar al ciudadano sobre determinados aspectos relacionados con su unidad. &iquest;Cu&aacute;l de los siguientes tipos de certificado utilizar&iacute;a para identificar a los servidores de su portal informativo?";
 choices[37]= new Array();
 choices[37][0] = "Sello electr&oacute;nico";
 choices[37][1] = "Sede electr&oacute;nica";
 choices[37][2] = "Servidor seguro (SSL/TLS)";
 choices[37][3] = "Empleado p&uacute;blico";
 answers[37] = choices[37][2];
 units[37] = "7";
 comments[37] = "Id Pregunta: 26. AGE A1 2015";
 preguntaids[37] = 26


//  Id pregunta: 698 Año de creación de pregunta: 2016
 questions[38]= "39)  Se&ntilde;ale el que corresponde a un principio de integraci&oacute;n continua:";
 choices[38]= new Array();
 choices[38][0] = "Migraci&oacute;n manual y controlada a cada entorno de desarrollo";
 choices[38][1] = "Mantener un repositorio de c&oacute;digo.";
 choices[38][2] = "Reutilizaci&oacute;n de interfaces de usuario.";
 choices[38][3] = "Todos corresponden a principios de integraci&oacute;n continua.";
 answers[38] = choices[38][1];
 units[38] = "92";
 comments[38] = "Id Pregunta: 698. INTEGRACION CONTINUA";
 preguntaids[38] = 698


//  Id pregunta: 614 Año de creación de pregunta: 2016
 questions[39]= "40)  Dentro del &aacute;lgebra relacional, se&ntilde;ala cu&aacute;l de los siguientes operadores es derivado:";
 choices[39]= new Array();
 choices[39][0] = "Intersecci&oacute;n.";
 choices[39][1] = "Uni&oacute;n.";
 choices[39][2] = "Restricci&oacute;n.";
 choices[39][3] = "Diferencia.";
 answers[39] = choices[39][0];
 units[39] = "60";
 comments[39] = "Id Pregunta: 614. Junta de Extremadura A1 2015";
 preguntaids[39] = 614


//  Id pregunta: 284 Año de creación de pregunta: 2016
 questions[40]= "41)  Se&ntilde;ale la respuesta falsa:";
 choices[40]= new Array();
 choices[40][0] = "El mercado interior europeo que tiene una repercusi&oacute;n positiva en el crecimiento de la econom&iacute;a y del empleo.";
 choices[40][1] = "En mayo de 2015 la Comisi&oacute;n Europea anunci&oacute; la Estrategia para el Mercado &Uacute;nico Digital, destinada a responder a los retos de la econom&iacute;a digital.";
 choices[40][2] = "La Comisi&oacute;n propone una nueva estrategia de comercio e inversi&oacute;n para la Uni&oacute;n Europea, con el t&iacute;tulo &laquo;Comercio para todos: Hacia una pol&iacute;tica de comercio e inversi&oacute;n m&aacute;s sostenible&raquo;.";
 choices[40][3] = "En septiembre de 2015 se ha publicado el plan de acci&oacute;n para la creaci&oacute;n de la Uni&oacute;n de los Mercados de Capitales.";
 answers[40] = choices[40][2];
 units[40] = "5";
 comments[40] = "Id Pregunta: 284. UNION EUROPEA";
 preguntaids[40] = 284


//  Id pregunta: 766 Año de creación de pregunta: 2016
 questions[41]= "42)  El sector p&uacute;blico institucional se integra por:";
 choices[41]= new Array();
 choices[41][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[41][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[41][2] = "las Universidades p&uacute;blicas";
 choices[41][3] = "todas son correctas";
 answers[41] = choices[41][3];
 units[41] = "4, 7, 8, 9";
 comments[41] = "Id Pregunta: 766. Ley 40/2015";
 preguntaids[41] = 766


//  Id pregunta: 588 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Cu&aacute;l es el per&iacute;odo temporal del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[42]= new Array();
 choices[42][0] = "Comprende del a&ntilde;o 2015 al 2017";
 choices[42][1] = "Comprende del a&ntilde;o 2015 al 2020";
 choices[42][2] = "Comprende del a&ntilde;o 2016 al 2018";
 choices[42][3] = "Ninguna de las anteriores";
 answers[42] = choices[42][1];
 units[42] = "19";
 comments[42] = "Id Pregunta: 588. Estrategia TIC";
 preguntaids[42] = 588


//  Id pregunta: 371 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;En qu&eacute; a&ntilde;o se adhiri&oacute; Espa&ntilde;a a la Comunidad Europea?:";
 choices[43]= new Array();
 choices[43][0] = "En 1988.";
 choices[43][1] = "En 1981.";
 choices[43][2] = "En 1982.";
 choices[43][3] = "En 1986.";
 answers[43] = choices[43][3];
 units[43] = "5";
 comments[43] = "Id Pregunta: 371. UNION EUROPEA";
 preguntaids[43] = 371


//  Id pregunta: 387 Año de creación de pregunta: 2016
 questions[44]= "45)  El art&iacute;culo 37 de la Ley Org&aacute;nica 3/2007, para la igualdad efectiva de mujeres y hombres, indica que la Corporaci&oacute;n RTVE, en el ejercicio de su funci&oacute;n, perseguir&aacute; en su programaci&oacute;n:";
 choices[44]= new Array();
 choices[44][0] = "Mostrar anuncios para la igualdad de forma habitual.";
 choices[44][1] = "Ofrecer trabajo a mujeres v&iacute;ctimas de violencia de g&eacute;nero.";
 choices[44][2] = "Promover la incorporaci&oacute;n de mujeres a puestos visibles ante las c&aacute;maras.";
 choices[44][3] = "Reflejar adecuadamente la presencia de las mujeres en los diversos &aacute;mbitos de la vida social.";
 answers[44] = choices[44][3];
 units[44] = "14";
 comments[44] = "Id Pregunta: 387. POLITICAS DE IGUALDAD";
 preguntaids[44] = 387


//  Id pregunta: 64 Año de creación de pregunta: 2016
 questions[45]= "46)  De entre los siguientes sistemas operativos para dispositivos m&oacute;viles, indique cu&aacute;l est&aacute; afectado por la vulnerabilidad Stagefright:";
 choices[45]= new Array();
 choices[45][0] = "Windows Phone";
 choices[45][1] = "Blackberry";
 choices[45][2] = "iOS";
 choices[45][3] = "Android";
 answers[45] = choices[45][3];
 units[45] = "59";
 comments[45] = "Id Pregunta: 64. AGE A1 2015";
 preguntaids[45] = 64


//  Id pregunta: 691 Año de creación de pregunta: 2016
 questions[46]= "47)  El Reglamento (UE) 910/2014 deroga la Directiva 1999/93/CE con efectos a partir de:";
 choices[46]= new Array();
 choices[46][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[46][1] = "1 de enero de 2015";
 choices[46][2] = "1 de enero de 2016";
 choices[46][3] = "1 de julio de 2016";
 answers[46] = choices[46][3];
 units[46] = "77";
 comments[46] = "Id Pregunta: 691. Art&iacute;culo 50 del Reglamento 910/2014";
 preguntaids[46] = 691


//  Id pregunta: 186 Año de creación de pregunta: 2016
 questions[47]= "48)  En cuanto a las fuentes del derecho, las normas jur&iacute;dicas contenidas en los tratados internacionales:";
 choices[47]= new Array();
 choices[47][0] = "ser&aacute;n de aplicaci&oacute;n directa en Espa&ntilde;a-";
 choices[47][1] = "ser&aacute;n de aplicaci&oacute;n directa y pasar&aacute;n a formar parte del ordenamiento interno una vez ratificadas por Espa&ntilde;a.";
 choices[47][2] = "no ser&aacute;n de aplicaci&oacute;n directa en Espapa en tanto no hayan pasado a formar parte ddel ordenamiento interno mediante su publicaci&oacute;n oficial en Espa&ntilde;a.";
 choices[47][3] = "ratificados por Espala y publicadas en el BOE, no son fuente de derecho.";
 answers[47] = choices[47][2];
 units[47] = "1";
 comments[47] = "Id Pregunta: 186. CONSTITUCION1978";
 preguntaids[47] = 186


//  Id pregunta: 646 Año de creación de pregunta: 2016
 questions[48]= "49)  El Estatuto B&aacute;sico del empleado p&uacute;blico determina como clases de personal los siguientes:";
 choices[48]= new Array();
 choices[48][0] = "Funcionarios de carrera, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 choices[48][1] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal.";
 choices[48][2] = "Funcionarios e interinos.";
 choices[48][3] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 answers[48] = choices[48][3];
 units[48] = "20";
 comments[48] = "Id Pregunta: 646. Junta de Extremadura A1 2015";
 preguntaids[48] = 646


//  Id pregunta: 239 Año de creación de pregunta: 2016
 questions[49]= "50)  Respecto de las relaciones que constitucionalmente se regulan entre los miembros del Gobierno y las Cortes Generales:";
 choices[49]= new Array();
 choices[49][0] = "La comparecencia de los miembros del Gobierno ante las C&aacute;maras y sus Comisiones puede extenderse tambi&eacute;n a los funcionarios de sus Departamentos.";
 choices[49][1] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo solicitasen las propias C&aacute;maras o sus Comisiones.";
 choices[49][2] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo deciden los miembros del Gobierno.";
 choices[49][3] = "Los funcionarios no comparecer&aacute;n en ning&uacute;n caso.";
 answers[49] = choices[49][0];
 units[49] = "1";
 comments[49] = "Id Pregunta: 239. CONSTITUCION1978";
 preguntaids[49] = 239


//  Id pregunta: 51 Año de creación de pregunta: 2016
 questions[50]= "51)  De acuerdo con el Real Decreto 1720/2007 indique qu&eacute; medida ha de ser aplicada obligatoriamente a los ficheros de los que sean responsables las Administraciones tributarias en el ejercicio de sus potestades tributarias:";
 choices[50]= new Array();
 choices[50][0] = "Cifrado de las comunicaciones";
 choices[50][1] = "Al menos, una auditor&iacute;a bienal (cada 2 a&ntilde;os)";
 choices[50][2] = "Registro de los accesos";
 choices[50][3] = "No queda regulado en dicho Real Decreto al depender de la criticidad del fichero.";
 answers[50] = choices[50][1];
 units[50] = "35";
 comments[50] = "Id Pregunta: 51. AGE A1 2015. Pregunta anulada en el examen real, ya que la opci&oacute;n B dec&iacute;a &quot;bianual&quot; en lugar de &quot;bienal&quot;";
 preguntaids[50] = 51


//  Id pregunta: 516 Año de creación de pregunta: 2016
 questions[51]= "52)  El sector p&uacute;blico institucional se integra por:";
 choices[51]= new Array();
 choices[51][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[51][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[51][2] = "las Universidades p&uacute;blicas";
 choices[51][3] = "todas son correctas";
 answers[51] = choices[51][3];
 units[51] = "7";
 comments[51] = "Id Pregunta: 516. LEY 39/2015";
 preguntaids[51] = 516


//  Id pregunta: 85 Año de creación de pregunta: 2016
 questions[52]= "53)  Seg&uacute;n MAGERIT 3.0, el informe en el que se recogen los resultados de la identificaci&oacute;n de las amenazas relevantes sobre el sistema a analizar, caracterizadas por las estimaciones de ocurrencia y da&ntilde;o causado, se denomina:";
 choices[52]= new Array();
 choices[52][0] = "Estimaci&oacute;n del riesgo";
 choices[52][1] = "Evaluaci&oacute;n de salvaguardas";
 choices[52][2] = "Declaraci&oacute;n de aplicabilidad";
 choices[52][3] = "Mapa de riesgos";
 answers[52] = choices[52][3];
 units[52] = "45";
 comments[52] = "Id Pregunta: 85. AGE A1 2015";
 preguntaids[52] = 85


//  Id pregunta: 220 Año de creación de pregunta: 2016
 questions[53]= "54)  Seg&uacute;n el Art&iacute;culo 68 de la Constituci&oacute;n, el Congreso se compone de:";
 choices[53]= new Array();
 choices[53][0] = "Un m&iacute;nimo de 300 Diputados.";
 choices[53][1] = "Un m&aacute;ximo de 350 Diputados.";
 choices[53][2] = "Un m&iacute;nimo de 400 Diputados.";
 choices[53][3] = "Un m&aacute;ximo de 300 Diputados.";
 answers[53] = choices[53][0];
 units[53] = "1";
 comments[53] = "Id Pregunta: 220. CONSTITUCION1978";
 preguntaids[53] = 220


//  Id pregunta: 515 Año de creación de pregunta: 2016
 questions[54]= "55)  La presente Ley se aplica al sector p&uacute;blico, que comprende (se&ntilde;ala la incorrecta):";
 choices[54]= new Array();
 choices[54][0] = "la Administraci&oacute;n General del Estado y las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[54][1] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[54][2] = "el sector p&uacute;blico institucional";
 choices[54][3] = "el sector privado corporativo";
 answers[54] = choices[54][3];
 units[54] = "7";
 comments[54] = "Id Pregunta: 515. LEY 39/2015";
 preguntaids[54] = 515


//  Id pregunta: 573 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Cu&aacute;l de los siguientes hechos NO se produce durante la d&eacute;cada de los 70-80?";
 choices[55]= new Array();
 choices[55][0] = "Incorporaci&oacute;n de la mujer al mercado laboral";
 choices[55][1] = "Entrada en la Uni&oacute;n Europea";
 choices[55][2] = "Pactos de la Moncloa";
 choices[55][3] = "Ingreso en la ONU";
 answers[55] = choices[55][3];
 units[55] = "12";
 comments[55] = "Id Pregunta: 573. Modelo econ&oacute;mico";
 preguntaids[55] = 573


//  Id pregunta: 136 Año de creación de pregunta: 2016
 questions[56]= "57)  La Ley 15/2014, de racionalizaci&oacute;n del Sector P&uacute;blico y otras medidas de reforma administrativa, no incluye:";
 choices[56]= new Array();
 choices[56][0] = "Modificaci&oacute;n de la Ley General Presupuestaria para permitir de manera m&aacute;s eficaz el control de las cuentas corrientes en las que se sit&uacute;an fondos de Tesoro P&uacute;blico.";
 choices[56][1] = "Permiso para la reordenaci&oacute;n de organismos p&uacute;blicos con el fin de mejorar su eficiencia y reducir el gasto p&uacute;blico.";
 choices[56][2] = "Modificaci&oacute;n normativa para hacer uso de certificados electr&oacute;nicos &uacute;nicos para grupos o colectivos de personas f&iacute;sicas.";
 choices[56][3] = "Implantaci&oacute;n del BOE como Tabl&oacute;n Edictal &Uacute;nico para la realizaci&oacute;n de notificaciones administrativas.";
 answers[56] = choices[56][2];
 units[56] = "12";
 comments[56] = "Id Pregunta: 136. Leyes modelo econ&oacute;mico";
 preguntaids[56] = 136


//  Id pregunta: 195 Año de creación de pregunta: 2016
 questions[57]= "58)  La potestad reglamentaria constitucionalmente corresponde:";
 choices[57]= new Array();
 choices[57][0] = "Al Gobierno.";
 choices[57][1] = "A las Cortes Generales.";
 choices[57][2] = "Al Poder Judicial.";
 choices[57][3] = "Al Congreso de los Diputados.";
 answers[57] = choices[57][0];
 units[57] = "1";
 comments[57] = "Id Pregunta: 195. CONSTITUCION1978";
 preguntaids[57] = 195


//  Id pregunta: 39 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Cu&aacute;l de las siguientes respuestas NO es un servicio definido por el Open Geospatial Consortium (OGC)?";
 choices[58]= new Array();
 choices[58][0] = "WMS sirve mapas de forma din&aacute;mica presentando la informaci&oacute;n como im&aacute;genes digitales.";
 choices[58][1] = "WMTS permite la visualizaci&oacute;n de mapas a trav&eacute;s de teselas (tiles) de im&aacute;genes.";
 choices[58][2] = "WRS permite la consulta de colecciones de mapas raster.";
 choices[58][3] = "WFS permite la consulta y descarga de datos vectoriales.";
 answers[58] = choices[58][2];
 units[58] = "71";
 comments[58] = "Id Pregunta: 39. AGE A1 2015";
 preguntaids[58] = 39


//  Id pregunta: 625 Año de creación de pregunta: 2016
 questions[59]= "60)  En PHP 5.0, &iquest;cu&aacute;l es la regla para formar los nombres de las variables?";
 choices[59]= new Array();
 choices[59][0] = "Una variable debe comenzar con el signo $ seguido del nombre de la variable.";
 choices[59][1] = "Una variable debe comenzar con el signo &amp; seguido del nombre de la variable.";
 choices[59][2] = "Una variable debe comenzar por un car&aacute;cter num&eacute;rico.";
 choices[59][3] = "No hay regla para la formaci&oacute;n de los nombres de las variables.";
 answers[59] = choices[59][0];
 units[59] = "65";
 comments[59] = "Id Pregunta: 625. Junta de Extremadura A1 2015";
 preguntaids[59] = 625


//  Id pregunta: 458 Año de creación de pregunta: 2016
 questions[60]= "61)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los escenarios presupuestarios plurianuales contendr&aacute;n la distribuci&oacute;n org&aacute;nica de los recursos disponibles y se desarrollar&aacute;n en programas plurianuales, referidos a:";
 choices[60]= new Array();
 choices[60][0] = "a) Los cuatro ejercicios siguientes.";
 choices[60][1] = "b) El ejercicio siguiente.";
 choices[60][2] = "c) Los dos ejercicios siguientes.";
 choices[60][3] = "d) Los tres ejercicios siguientes.";
 answers[60] = choices[60][3];
 units[60] = "10";
 comments[60] = "Id Pregunta: 458. PRESUPUESTOS GENERALES";
 preguntaids[60] = 458


//  Id pregunta: 304 Año de creación de pregunta: 2016
 questions[61]= "62)  El mandato de la Comisi&oacute;n se establece por un per&iacute;odo de:";
 choices[61]= new Array();
 choices[61][0] = "Cinco a&ntilde;os.";
 choices[61][1] = "Seis a&ntilde;os.";
 choices[61][2] = "Cuatro a&ntilde;os.";
 choices[61][3] = "Tres a&ntilde;os.";
 answers[61] = choices[61][0];
 units[61] = "5";
 comments[61] = "Id Pregunta: 304. UNION EUROPEA";
 preguntaids[61] = 304


//  Id pregunta: 533 Año de creación de pregunta: 2016
 questions[62]= "63)  Se entender&aacute; acreditada la representaci&oacute;n realizada:";
 choices[62]= new Array();
 choices[62][0] = "mediante apoderamiento apud acta efectuado por comparecencia personal";
 choices[62][1] = "mediante apoderamiento apud acta efectuado por comparecencia electr&oacute;nica en la correspondiente sede electr&oacute;nica";
 choices[62][2] = "a trav&eacute;s de la acreditaci&oacute;n de su inscripci&oacute;n en el registro electr&oacute;nico de apoderamientos de la Administraci&oacute;n P&uacute;blica competente";
 choices[62][3] = "todas son correctas";
 answers[62] = choices[62][3];
 units[62] = "7";
 comments[62] = "Id Pregunta: 533. LEY 39/2015";
 preguntaids[62] = 533


//  Id pregunta: 117 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Qui&eacute;n integra el Sistema Nacional de Empleo?";
 choices[63]= new Array();
 choices[63][0] = "El Servicio P&uacute;blico de Empleo Estatal y los servicios p&uacute;blicos de empleo de las comunidades aut&oacute;nomas";
 choices[63][1] = "&Uacute;nicamente los servicios p&uacute;blicos de empleo de las comunidades aut&oacute;nomas ";
 choices[63][2] = "&Uacute;nicamente el Servicio P&uacute;blico de Empleo Estatal";
 choices[63][3] = "El Servicio P&uacute;blico de Empleo Estatal m&aacute;s las ETT (Empresas de Trabajo Temporal) que quieran adherirse";
 answers[63] = choices[63][0];
 units[63] = "15";
 comments[63] = "Id Pregunta: 117. ";
 preguntaids[63] = 117


//  Id pregunta: 774 Año de creación de pregunta: 2016
 questions[64]= "65)  Las Administraciones P&uacute;blicas act&uacute;an para el cumplimiento de sus fines con:";
 choices[64]= new Array();
 choices[64][0] = "personalidad jur&iacute;dica propia";
 choices[64][1] = "personalidad jur&iacute;dica &uacute;nica";
 choices[64][2] = "personalidad jur&iacute;dica plena";
 choices[64][3] = "personalidad jur&iacute;dica f&iacute;sica";
 answers[64] = choices[64][1];
 units[64] = "4, 7, 8, 9";
 comments[64] = "Id Pregunta: 774. Ley 40/2015";
 preguntaids[64] = 774


//  Id pregunta: 225 Año de creación de pregunta: 2016
 questions[65]= "66)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola, el instrumento fundamental para la participaci&oacute;n pol&iacute;tica son:";
 choices[65]= new Array();
 choices[65][0] = "las Cortes generales.";
 choices[65][1] = "los partidos pol&iacute;ticos.";
 choices[65][2] = "los sindicatos.";
 choices[65][3] = "las Comunidades Aut&oacute;nomas.";
 answers[65] = choices[65][1];
 units[65] = "1";
 comments[65] = "Id Pregunta: 225. CONSTITUCION1978";
 preguntaids[65] = 225


//  Id pregunta: 802 Año de creación de pregunta: 2016
 questions[66]= "67)  La Administraci&oacute;n General del Estado se organiza:";
 choices[66]= new Array();
 choices[66][0] = "en Ministerios";
 choices[66][1] = "en Presidencia del Gobierno y en Ministerios";
 choices[66][2] = "en Presidencia del Gobierno, en Ministerios y en Secretar&iacute;as Generales";
 choices[66][3] = "en Presidencia del Gobierno, en Ministerios, en Secretar&iacute;as Generales y en el Servicio Exterior";
 answers[66] = choices[66][1];
 units[66] = "4, 7, 8, 9";
 comments[66] = "Id Pregunta: 802. Ley 40/2015";
 preguntaids[66] = 802


//  Id pregunta: 116 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes es una pol&iacute;tica pasiva de empleo?";
 choices[67]= new Array();
 choices[67][0] = "La organizaci&oacute;n de cursos de formaci&oacute;n gratuitos para desempleados";
 choices[67][1] = "La intermediaci&oacute;n en el mercado laboral, es decir, recoger las ofertas de trabajo y cruzarlas con las demandas.";
 choices[67][2] = "Adecuar los planes de estudio a la realidad laboral";
 choices[67][3] = "El pago de subsidios a parados";
 answers[67] = choices[67][3];
 units[67] = "15";
 comments[67] = "Id Pregunta: 116. ";
 preguntaids[67] = 116


//  Id pregunta: 358 Año de creación de pregunta: 2016
 questions[68]= "69)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones no es correcta:";
 choices[68]= new Array();
 choices[68][0] = "a)La Uni&oacute;n Europea no es a&uacute;n una estructura acabada, sino m&aacute;s bien un sistema de gestaci&oacute;n cuya apariencia definitiva a&uacute;n no puede preverse.";
 choices[68][1] = "b) La Uni&oacute;n Europea no es un proceso de integraci&oacute;n sino una Organizaci&oacute;n Internacional sui generis.";
 choices[68][2] = "c) Todas las respuestas son correctas.";
 choices[68][3] = "d)La Uni&oacute;n Europea s&oacute;lo tiene en com&uacute;n con las organizaciones tradicionales de derecho internacional que tambi&eacute;n han sido creadas mediante un tratado internacional.";
 answers[68] = choices[68][1];
 units[68] = "5";
 comments[68] = "Id Pregunta: 358. UNION EUROPEA";
 preguntaids[68] = 358


//  Id pregunta: 390 Año de creación de pregunta: 2016
 questions[69]= "70)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre hombres y mujeres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[69]= new Array();
 choices[69][0] = "El Consejo Nacional de la Mujer.";
 choices[69][1] = "El Consejo de la Mujer.";
 choices[69][2] = "El Instituto de la Mujer.";
 choices[69][3] = "El Consejo de Participaci&oacute;n de la Mujer.";
 answers[69] = choices[69][3];
 units[69] = "14";
 comments[69] = "Id Pregunta: 390. POLITICAS DE IGUALDAD";
 preguntaids[69] = 390


//  Id pregunta: 652 Año de creación de pregunta: 2016
 questions[70]= "71)  Indica cu&aacute;l de las siguientes caracter&iacute;sticas del protocolo IP versi&oacute;n 6 es incorrecta.";
 choices[70]= new Array();
 choices[70][0] = "El tama&ntilde;o de la direcci&oacute;n IP es de 128 bits.";
 choices[70][1] = "Aumento de la flexibilidad en el direccionamiento.";
 choices[70][2] = "Define una cabecera de extensi&oacute;n que proporciona autenticaci&oacute;n.";
 choices[70][3] = "La cabecera IP versi&oacute;n 6 obligatoria es de tama&ntilde;o variable.";
 answers[70] = choices[70][3];
 units[70] = "109";
 comments[70] = "Id Pregunta: 652. Junta de Extremadura A1 2015";
 preguntaids[70] = 652


//  Id pregunta: 289 Año de creación de pregunta: 2016
 questions[71]= "72)  La duraci&oacute;n del mandato del Defensor del Pueblo Europeo es de:";
 choices[71]= new Array();
 choices[71][0] = "Tres a&ntilde;os.";
 choices[71][1] = "Dos a&ntilde;os y medio.";
 choices[71][2] = "Cinco a&ntilde;os.";
 choices[71][3] = "Seis a&ntilde;os.";
 answers[71] = choices[71][2];
 units[71] = "5";
 comments[71] = "Id Pregunta: 289. UNION EUROPEA";
 preguntaids[71] = 289


//  Id pregunta: 386 Año de creación de pregunta: 2016
 questions[72]= "73)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con las pol&iacute;ticas de igualdad de g&eacute;nero, de conformidad con la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad de mujeres y hombres:";
 choices[72]= new Array();
 choices[72][0] = "El Ministerio de Trabajo y Asuntos Sociales crear&aacute; un distintivo para reconocer a las empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato y de oportunidades con sus trabajadores y trabajadoras.";
 choices[72][1] = "Todas las empresas con sede en Espa&ntilde;a est&aacute;n obligadas a elaborar un plan de igualdad entre sus trabajadores y trabajadoras.";
 choices[72][2] = "En los procesos de car&aacute;cter penal en los que las alegaciones de la parte actora se fundamenten en actuaciones discriminatorias por raz&oacute;n de sexo, corresponde a la persona demandada probar la ausencia de discriminaci&oacute;n.";
 choices[72][3] = "La mitad, al menos, de los nuevos nombramientos de titulares de los &oacute;rganos directivos de la Administraci&oacute;n General del Estado, durante un plazo de dos a&ntilde;os a partir de la entrada en vigor de la ley, deber&aacute;n ser mujeres.";
 answers[72] = choices[72][0];
 units[72] = "14";
 comments[72] = "Id Pregunta: 386. POLITICAS DE IGUALDAD";
 preguntaids[72] = 386


//  Id pregunta: 545 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Qu&eacute; est&aacute;ndar ISO define un marco de trabajo para la gobernanza TIC?";
 choices[73]= new Array();
 choices[73][0] = "ISO/IEC 31000";
 choices[73][1] = "ISO/IEC 14000";
 choices[73][2] = "ISO/IEC 38500";
 choices[73][3] = "ISO/IEC 18000";
 answers[73] = choices[73][2];
 units[73] = "26";
 comments[73] = "Id Pregunta: 545. Gobernanza TIC";
 preguntaids[73] = 545


//  Id pregunta: 169 Año de creación de pregunta: 2016
 questions[74]= "75)  En lo que se refiere a comunicaciones m&oacute;viles en Europa,";
 choices[74]= new Array();
 choices[74][0] = "en 2020 se liberar&aacute;n las bandas de frecuencia superior a 10 Ghz para el despliegue de 5G";
 choices[74][1] = "en 2020 se espera desplegar la red 5G a gran escala.";
 choices[74][2] = "en 2020 se espera desplegar la red 4G-plus.";
 choices[74][3] = "en 2020 se liberar&aacute; la banda de frecuencia de 800 Mhz para finalizar el despliegue de 4G";
 answers[74] = choices[74][1];
 units[74] = "19";
 comments[74] = "Id Pregunta: 169. https://ec.europa.eu/digital-single-market/en/5g-europe-action-plan";
 preguntaids[74] = 169


