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

//  Id pregunta: 443 Año de creación de pregunta: 2016
 questions[0]= "1)  Respecto a las comunicaciones y notificaciones electr&oacute;nicas:";
 choices[0]= new Array();
 choices[0][0] = "El servicio SIM se utiliza para el env&iacute;o de notificaciones electr&oacute;nicas.";
 choices[0][1] = "El Servicio compartido la gesti&oacute;n de notificaciones Notific@, ser&aacute; de uso obligatorio para la AGE y sus OOPP en 2017.";
 choices[0][2] = "La plataforma Notific@, recibe desde los organismos emisores, las comunicaciones y adem&aacute;s de aportar otros valores a&ntilde;adidos, las pone a disposici&oacute;n de los destinatarios en la Carpeta Ciudadana.";
 choices[0][3] = "El servicio SIM, que se ha integrado en el Servicio compartido de gesti&oacute;n de notificaciones, proporciona a los ciudadanos y empresas un buz&oacute;n seguro.";
 answers[0] = choices[0][1];
 units[0] = "43";
 comments[0] = "Id Pregunta: 443. SERVICIOS COMUNES";


//  Id pregunta: 90 Año de creación de pregunta: 2016
 questions[1]= "2)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad (ENS) en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, el an&aacute;lisis y gesti&oacute;n de riesgos es una parte esencial del proceso de seguridad, debiendo mantenerse permanentemente actualizado. Para ello, el propio ENS establece que se debe realizar un an&aacute;lisis de riesgos formal para los sistemas de:";
 choices[1]= new Array();
 choices[1][0] = "Categor&iacute;a b&aacute;sica";
 choices[1][1] = "Categor&iacute;a media";
 choices[1][2] = "Categor&iacute;a alta";
 choices[1][3] = "Categor&iacute;a media y alta";
 answers[1] = choices[1][2];
 units[1] = "46";
 comments[1] = "Id Pregunta: 90. AGE A1 2015";


//  Id pregunta: 439 Año de creación de pregunta: 2016
 questions[2]= "3)  Sobre el Sistema de Interconexi&oacute;n de Registros (SIR):";
 choices[2]= new Array();
 choices[2][0] = "Es la infraestructura b&aacute;sica que permite el intercambio de asientos electr&oacute;nicos de registro entre los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[2][1] = "Permite eliminar el tr&aacute;nsito de papel entre administraciones, aumentando la eficiencia y eliminando los costes de manipulaci&oacute;n y remisi&oacute;n del papel, gracias a la generaci&oacute;n de copias aut&eacute;nticas electr&oacute;nicas de la documentaci&oacute;n presentada en los asientos de registro.";
 choices[2][2] = "No es necesario que la aplicaci&oacute;n de registro est&eacute; certificada con la norma SICRES 3.0.";
 choices[2][3] = "La integraci&oacute;n en SIR se realiza mediante aplicaciones de registro comunes como GEISER y ORVE o bien, siempre que se justifique, mediante aplicaciones previamente certificadas por la Comisi&oacute;n de Estrategia TIC.";
 answers[2] = choices[2][1];
 units[2] = "43";
 comments[2] = "Id Pregunta: 439. SERVICIOS COMUNES";


//  Id pregunta: 62 Año de creación de pregunta: 2016
 questions[3]= "4)  El art&iacute;culo 102 del Real Decreto 1720/2007, por el que se determina la conservaci&oacute;n de una copia de respaldo de los datos y de los procedimientos de recuperaci&oacute;n de los mismos en un lugar diferente de aquel en que se encuentren los equipos inform&aacute;ticos que los tratan, &iquest;a qu&eacute; nivel o niveles de medidas de seguridad es aplicable?";
 choices[3]= new Array();
 choices[3][0] = "B&aacute;sico";
 choices[3][1] = "Medio";
 choices[3][2] = "Alto";
 choices[3][3] = "A los niveles medio y alto";
 answers[3] = choices[3][2];
 units[3] = "35";
 comments[3] = "Id Pregunta: 62. AGE A1 2015";


//  Id pregunta: 627 Año de creación de pregunta: 2016
 questions[4]= "5)  Seg&uacute;n el Real Decreto 3/2010 sobre el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; organismo es el encargado de actuar ante cualquier agresi&oacute;n recibida en los sistemas de informaci&oacute;n de las Administraciones P&uacute;blicas?";
 choices[4]= new Array();
 choices[4][0] = "El CCN-CERT (Centro Criptol&oacute;gico Nacional&ndash;Computer Emergency Reaction Team).";
 choices[4][1] = "El GDT (Grupo de Delitos Telem&aacute;ticos).";
 choices[4][2] = "La BIT (Brigada de Investigaci&oacute;n Tecnol&oacute;gica).";
 choices[4][3] = "El CCN-STIC (Centro Criptol&oacute;gico Nacional-Seguridad de las Tecnolog&iacute;as de Informaci&oacute;n y Comunicaciones).";
 answers[4] = choices[4][0];
 units[4] = "46";
 comments[4] = "Id Pregunta: 627. Junta de Extremadura A1 2015";


//  Id pregunta: 58 Año de creación de pregunta: 2016
 questions[5]= "6)  Se&ntilde;ale cu&aacute;l de los siguientes apartados NO ha sido declarado como servicio compartido en la Administraci&oacute;n General del Estado:";
 choices[5]= new Array();
 choices[5][0] = "Servicio com&uacute;n de gesti&oacute;n econ&oacute;mico-presupuestaria";
 choices[5][1] = "Servicio com&uacute;n de georreferenciaci&oacute;n";
 choices[5][2] = "Servicio de seguridad gestionada";
 choices[5][3] = "Servicio de gesti&oacute;n de notificaciones";
 answers[5] = choices[5][1];
 units[5] = "26";
 comments[5] = "Id Pregunta: 58. AGE A1 2015";


//  Id pregunta: 720 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;C&uacute;al de las siguientes NO es una metodolog&iacute;a lean?";
 choices[6]= new Array();
 choices[6][0] = "Lean startup";
 choices[6][1] = "Business Model Canvas";
 choices[6][2] = "Dynamic system Development method";
 choices[6][3] = "Lean software development";
 answers[6] = choices[6][2];
 units[6] = "34";
 comments[6] = "Id Pregunta: 720. Metodologias Lean";


//  Id pregunta: 545 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Cu&aacute;l es la nueva denominaci&oacute;n para la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n tras la aprobaci&oacute;n del Real Decreto 424/2016, de 11 de noviembre, por el que se establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales?";
 choices[7]= new Array();
 choices[7][0] = "Subsecretar&iacute;a de Energ&iacute;a, Turismo y Agenda Digital";
 choices[7][1] = "Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[7][2] = "Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[7][3] = "Secretar&iacute;a de Estado de Administraci&oacute;n Digital";
 answers[7] = choices[7][1];
 units[7] = "26";
 comments[7] = "Id Pregunta: 545. Gobernanza TIC";


//  Id pregunta: 543 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Qu&eacute; est&aacute;ndar ISO define un marco de trabajo para la gobernanza TIC?";
 choices[8]= new Array();
 choices[8][0] = "ISO/IEC 31000";
 choices[8][1] = "ISO/IEC 14000";
 choices[8][2] = "ISO/IEC 38500";
 choices[8][3] = "ISO/IEC 18000";
 answers[8] = choices[8][2];
 units[8] = "26";
 comments[8] = "Id Pregunta: 543. Gobernanza TIC";


//  Id pregunta: 440 Año de creación de pregunta: 2016
 questions[9]= "10)  Respecto al Sistema de Informaci&oacute;n Administrativa, se&ntilde;ale la respuesta falsa:";
 choices[9]= new Array();
 choices[9][0] = "Contiene la relaci&oacute;n de procedimientos y servicios de la AGE, y de todas las administraciones participantes.";
 choices[9][1] = "Cumple para la AGE el requisito establecido en el art&iacute;culo 9 del Esquema Nacional de Interoperabilidad, que obliga a las Administraciones p&uacute;blicas a mantener actualizado un Inventario de Informaci&oacute;n Administrativa.";
 choices[9][2] = "SIA est&aacute; dise&ntilde;ado para permitir la administraci&oacute;n distribuida y la actualizaci&oacute;n corresponsable por todas las Administraciones participantes, mediante una aplicaci&oacute;n web.";
 choices[9][3] = "Los usuarios son gestionados por una red de responsables de cada Departamento.";
 answers[9] = choices[9][2];
 units[9] = "43";
 comments[9] = "Id Pregunta: 440. SERVICIOS COMUNES";


//  Id pregunta: 724 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;C&uacute;al es la afirmaci&oacute;n incorrecta?";
 choices[10]= new Array();
 choices[10][0] = "El sprint release es aquel que implementa las tareas necesarias para poner el sistema en producci&oacute;n";
 choices[10][1] = "El sprint rel&eacute;ase es el &uacute;ltimo sprint de la metodolog&iacute;a SCRUM.";
 choices[10][2] = "En el sprint release se pueden llevan a cabo tareas relacionados con el despliegue y generaci&oacute;n de scripts de recuperaci&oacute;n del sistema";
 choices[10][3] = "En el sprint rel&eacute;ase se pueden llevar a cabo tareas relacionados con la documentaci&oacute;n, pruebas de carga, y tareas relacionadas con las bases de datos en producci&oacute;n.";
 answers[10] = choices[10][1];
 units[10] = "34, 84";
 comments[10] = "Id Pregunta: 724. Metodologias &aacute;giles";


//  Id pregunta: 544 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Cu&aacute;l es el &oacute;rgano superior de gobernanza TIC en la Administraci&oacute;n General del Estado?";
 choices[11]= new Array();
 choices[11][0] = "El Comit&eacute; de Direcci&oacute;n TIC";
 choices[11][1] = "El Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[11][2] = "La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[11][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[11] = choices[11][3];
 units[11] = "26";
 comments[11] = "Id Pregunta: 544. Gobernanza TIC";


//  Id pregunta: 84 Año de creación de pregunta: 2016
 questions[12]= "13)  En el marco europeo de interoperabilidad de sistemas de informaci&oacute;n, &iquest;qu&eacute; programa de la Uni&oacute;n Europea ha estado en vigor entre 2010 y 2015?";
 choices[12]= new Array();
 choices[12][0] = "Interchange of Data between Administrations (IDA)";
 choices[12][1] = "Interoperability Solutions for European Public Administrations (ISA)";
 choices[12][2] = "Interoperable Delivery of Pan-European eGovernment Services to Public Administrations, Businesses and Citizens (IDABC)";
 choices[12][3] = "Interoperability Electronic European Solution (IEES)";
 answers[12] = choices[12][1];
 units[12] = "43";
 comments[12] = "Id Pregunta: 84. AGE A1 2015";


//  Id pregunta: 548 Año de creación de pregunta: 2016
 questions[13]= "14)  El &aacute;mbito de aplicaci&oacute;n del RD 806/2014 de Gobernanza TIC es:";
 choices[13]= new Array();
 choices[13][0] = "La Administraci&oacute;n General del Estado";
 choices[13][1] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos";
 choices[13][2] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos y las Comunidades Aut&oacute;nomas";
 choices[13][3] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos, las Comunidades Aut&oacute;nomas y las Entidades Locales";
 answers[13] = choices[13][1];
 units[13] = "26";
 comments[13] = "Id Pregunta: 548. Gobernanza TIC";


//  Id pregunta: 99 Año de creación de pregunta: 2016
 questions[14]= "15)  En cuanto a la imputaci&oacute;n de costes de los servicios compartidos en la Administraci&oacute;n General del Estado, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[14]= new Array();
 choices[14][0] = "Seg&uacute;n establece el Real Decreto 806/2014 el coste, caso de ocasionarse, ser&aacute; asumido &iacute;ntegramente por la Direcci&oacute;n de Tecnolog&iacute;as de las Informaci&oacute;n y Comunicaciones.";
 choices[14][1] = "Se sufragar&aacute;n con cargo a los presupuestos de Presidencia del Gobierno dado el car&aacute;cter horizontal del servicio compartido.";
 choices[14][2] = "La declaraci&oacute;n de todo servicio compartido deber&aacute; indicar si existe compensaci&oacute;n econ&oacute;mica al proveedor.";
 choices[14][3] = "No existir&aacute;, dado que su gratuidad y libertad de acceso es consustancial a la idea de servicio compartido.";
 answers[14] = choices[14][2];
 units[14] = "26";
 comments[14] = "Id Pregunta: 99. AGE A1 2015: actualmente la Secretar&iacute;a General de Administraci&oacute;n Digital asume las funciones de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 719 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;C&uacute;al de los siguientes puntos NO  es uno de los principios de las metodolog&iacute;as lean?";
 choices[15]= new Array();
 choices[15][0] = "Flexibilidad para variar el servicio o producto";
 choices[15][1] = "Eliminar desperdicios";
 choices[15][2] = "Decidir lo m&aacute;s tarde posible";
 choices[15][3] = "Hacer entregas tan r&aacute;pido como sea posible";
 answers[15] = choices[15][0];
 units[15] = "34";
 comments[15] = "Id Pregunta: 719. Metodologias Lean";


//  Id pregunta: 17 Año de creación de pregunta: 2016
 questions[16]= "17)  De acuerdo con el Reglamento por el que se desarrolla parcialmente la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, aprobado por Real Decreto 1671/2009, de 6 de noviembre, se&ntilde;ale la respuesta correcta:";
 choices[16]= new Array();
 choices[16][0] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de emisi&oacute;n.";
 choices[16][1] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 12 meses desde la fecha de emisi&oacute;n.";
 choices[16][2] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de notificaci&oacute;n.";
 choices[16][3] = "Los documentos electr&oacute;nicos deben conservarse por el per&iacute;odo m&iacute;nimo que determine cada &oacute;rgano administrativo de acuerdo con el procedimiento administrativo de que se trate.";
 answers[16] = choices[16][3];
 units[16] = "44";
 comments[16] = "Id Pregunta: 17. AGE A1 2015";


//  Id pregunta: 729 Año de creación de pregunta: 2016
 questions[17]= "18)  Indique cual de los siguientes no forma parte del vocabulario de scrum";
 choices[17]= new Array();
 choices[17][0] = "Burn-up chart";
 choices[17][1] = "Arquitectural Skype";
 choices[17][2] = "Burn-down chart";
 choices[17][3] = "Definition of done";
 answers[17] = choices[17][1];
 units[17] = "34, 84";
 comments[17] = "Id Pregunta: 729. Metodologias &aacute;giles";


//  Id pregunta: 86 Año de creación de pregunta: 2016
 questions[18]= "19)  Un contrato menor tiene una duraci&oacute;n m&aacute;xima de:";
 choices[18]= new Array();
 choices[18][0] = "Un a&ntilde;o prorrogable";
 choices[18][1] = "Dos a&ntilde;os no prorrogables";
 choices[18][2] = "Un a&ntilde;o no prorrogable";
 choices[18][3] = "Dos a&ntilde;os prorrogables";
 answers[18] = choices[18][2];
 units[18] = "37";
 comments[18] = "Id Pregunta: 86. AGE A1 2015";


//  Id pregunta: 76 Año de creación de pregunta: 2016
 questions[19]= "20)  El proceso de auditor&iacute;a de sistemas de informaci&oacute;n se considera como un proceso:";
 choices[19]= new Array();
 choices[19][0] = "Estrat&eacute;gico";
 choices[19][1] = "Operativo";
 choices[19][2] = "T&aacute;ctico";
 choices[19][3] = "Tecnol&oacute;gico";
 answers[19] = choices[19][0];
 units[19] = "36";
 comments[19] = "Id Pregunta: 76. AGE A1 2015";


//  Id pregunta: 547 Año de creación de pregunta: 2016
 questions[20]= "21)  La gobernanza TIC incluye, entre otros, los siguientes aspectos:";
 choices[20]= new Array();
 choices[20][0] = "Integrar la estrategia TIC con la de negocio";
 choices[20][1] = "Adoptar e implantar un marco de control de las TIC";
 choices[20][2] = "Proporcionar las estructuras organizativas encargadas de implantar la estrategia TIC";
 choices[20][3] = "Todas las anteriores";
 answers[20] = choices[20][3];
 units[20] = "26";
 comments[20] = "Id Pregunta: 547. Gobernanza TIC";


//  Id pregunta: 732 Año de creación de pregunta: 2016
 questions[21]= "22)  Indique la opci&oacute;n correcta en relaci&oacute;n con la VISI&Oacute;N de la Estrategia TIC";
 choices[21]= new Array();
 choices[21][0] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser electr&oacute;nica.";
 choices[21][1] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser digital.";
 choices[21][2] = "Para el a&ntilde;o 2020 ya no existir&aacute; ning&uacute;n procedimiento en soporte papel.";
 choices[21][3] = "En el a&ntilde;o 2020 los funcionarios realizar&aacute;n todas sus tareas con ordenador.";
 answers[21] = choices[21][1];
 units[21] = "28";
 comments[21] = "Id Pregunta: 732. Estrategia TIC";


//  Id pregunta: 735 Año de creación de pregunta: 2016
 questions[22]= "23)  Son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[22]= new Array();
 choices[22][0] = "Tranparencia, innovaci&oacute;n, Unidad y visi&oacute;n integral y Orientaci&oacute;n al usuario del servicio";
 choices[22][1] = "Tranparencia, Colaboraci&oacute;n y alianzas, Orientaci&oacute;n al usuario del servicio y Reutilizaci&oacute;n";
 choices[22][2] = "Reutilizaci&oacute;n, Seguridad, Orientaci&oacute;n al usuario del servicio y Transparencia";
 choices[22][3] = "Ninguna de las anteriores";
 answers[22] = choices[22][0];
 units[22] = "28";
 comments[22] = "Id Pregunta: 735. Estrategia TIC";


//  Id pregunta: 80 Año de creación de pregunta: 2016
 questions[23]= "24)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, se&ntilde;ale la respuesta correcta respecto a la auditor&iacute;a de seguridad:";
 choices[23]= new Array();
 choices[23][0] = "Se realizar&aacute;, al menos, cada dieciocho meses para los sistemas de todas las categor&iacute;as, y con car&aacute;cter extraordinario, siempre que se produzcan modificaciones sustanciales en el sistema de informaci&oacute;n, que puedan repercutir en las medidas de seguridad requeridas.";
 choices[23][1] = "El equipo auditor, en el dise&ntilde;o de sus pruebas y revisiones, debe limitarse a la revisi&oacute;n de documentos facilitados por los responsables de la informaci&oacute;n, del servicio y de seguridad.";
 choices[23][2] = "Cuando existan razones que lo justifiquen, dentro de las tareas de la auditoria de seguridad podr&aacute;n incluirse adem&aacute;s la ejecuci&oacute;n de trabajos de consultor&iacute;a.";
 choices[23][3] = "El informe de auditor&iacute;a deber&aacute; dictaminar sobre la adecuaci&oacute;n de las medidas exigidas por el Esquema Nacional de Seguridad, identificar sus deficiencias y proponer las medidas correctoras o complementarias necesarias.";
 answers[23] = choices[23][3];
 units[23] = "46";
 comments[23] = "Id Pregunta: 80. AGE A1 2015";


//  Id pregunta: 733 Año de creación de pregunta: 2016
 questions[24]= "25)  Son l&iacute;neas de acci&oacute;n del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP.";
 choices[24]= new Array();
 choices[24][0] = "Disponer de sistemas de an&aacute;lisis de datos para la toma de decisiones y de funcionarios formados adecuadamente.";
 choices[24][1] = "Que en el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser electr&oacute;nica.";
 choices[24][2] = "Un mejor formaci&oacute;n del funcionariado y una atenci&oacute;n al ciudadano acorde a las nuevas tecnolog&iacute;as.";
 choices[24][3] = "Desarrollar el puesto de trabajo digital y mejorar la satisfacci&oacute;n del usuario en el uso de los servicios p&uacute;blicos digitales.";
 answers[24] = choices[24][3];
 units[24] = "28";
 comments[24] = "Id Pregunta: 733. Estrategia TIC";


//  Id pregunta: 444 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;Cu&aacute;l de las siguientes definiciones NO es uno de los roles de la Plataforma de Intermediaci&oacute;n, seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Protocolos de intermediaci&oacute;n de datos?:";
 choices[25]= new Array();
 choices[25][0] = "Mantendr&aacute; un portal web informativo con toda la documentaci&oacute;n relativa a la Plataforma.";
 choices[25][1] = "Almacenar&aacute; informaci&oacute;n personal de ciudadano derivada de la transacci&oacute;n de intercambio de datos, asegurando para ello la confidencialidad e integridad de la misma a trav&eacute;s de los mecanismos correspondientes.";
 choices[25][2] = "Mantendr&aacute; un centro de atenci&oacute;n a usuarios e integradores que canalice todas las incidencias relativas al sistema.";
 choices[25][3] = "Las consultas a los servicios de verificaci&oacute;n de datos, se pueden realizar de forma automatizada desde una aplicaci&oacute;n de gesti&oacute;n de un tr&aacute;mite, adaptadas para invocar los Webservice proporcionados por el servicio.";
 answers[25] = choices[25][1];
 units[25] = "43";
 comments[25] = "Id Pregunta: 444. SERVICIOS COMUNES";


//  Id pregunta: 734 Año de creación de pregunta: 2016
 questions[26]= "27)  En el Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP el principio de transparencia:";
 choices[26]= new Array();
 choices[26][0] = "El seguimiento de la actividad de los funcionarios aumenta la eficacia de los servicios p&uacute;blicos.";
 choices[26][1] = "La transparencia facilita al ciudadano el acceso a los servicios p&uacute;blicos.";
 choices[26][2] = "Una continua monitorizaci&oacute;n de la actividad, junto a la evaluaci&oacute;n y difusi&oacute;n de resultados incrementa la satisfacci&oacute;n de los ciudadanos.";
 choices[26][3] = "El seguimiento y control de la actividad pol&iacute;tica disminuye las actividades ligadas a la corrupci&oacute;n.";
 answers[26] = choices[26][2];
 units[26] = "28";
 comments[26] = "Id Pregunta: 734. Estrategia TIC";


//  Id pregunta: 437 Año de creación de pregunta: 2016
 questions[27]= "28)  Los Portales de EE.LL. y CC.AA. ofrecen una herramienta de gesti&oacute;n de identidades de los empleados p&uacute;blicos de las entidades locales o auton&oacute;micas. Se&ntilde;ale la respuesta incorrecta.";
 choices[27]= new Array();
 choices[27][0] = "Los empleados p&uacute;blicos de las EE.LL. o CC.AA. tienen que solicitar el alta en alguna unidad local o auton&oacute;mica.";
 choices[27][1] = "Proporcionan tambi&eacute;n informaci&oacute;n del cargo y rol asociados.";
 choices[27][2] = "Cualquier organismo p&uacute;blico puede solicitar la inclusi&oacute;n en la plataforma de nuevas aplicaciones dirigidas a las EE.LL. o CC.AA.: &eacute;stas podr&aacute;n acceder desde un punto centralizado al nuevo servicio.";
 choices[27][3] = "Los portales est&aacute;n integrados y sincronizados con el Directorio Com&uacute;n de Unidades Org&aacute;nicas y Oficinas &#8208; DIR3, permitiendo que la gesti&oacute;n de usuarios y roles no se vea afectada por cambios en el directorio.";
 answers[27] = choices[27][0];
 units[27] = "43";
 comments[27] = "Id Pregunta: 437. SERVICIOS COMUNES";


//  Id pregunta: 737 Año de creación de pregunta: 2016
 questions[28]= "29)  En el Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE, las administraciones p&uacute;blicas y las instituciones p&uacute;blicas de la Uni&oacute;n Europea deben ser abiertas, eficaces e integradoras en el a&ntilde;o:";
 choices[28]= new Array();
 choices[28][0] = "2025";
 choices[28][1] = "2023";
 choices[28][2] = "2030";
 choices[28][3] = "2020";
 answers[28] = choices[28][3];
 units[28] = "28";
 comments[28] = "Id Pregunta: 737. Estrategia TIC";


//  Id pregunta: 740 Año de creación de pregunta: 2016
 questions[29]= "30)  Uno de los objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[29]= new Array();
 choices[29][0] = "Proveer de manera compartida servicios comunes";
 choices[29][1] = "El canal digital ha de ser el medio preferido por ciudadanos y empresas para relacionarse con la Administraci&oacute;n.";
 choices[29][2] = "Orientaci&oacute;n al usuario del servicio.";
 choices[29][3] = "Transparencia";
 answers[29] = choices[29][1];
 units[29] = "28";
 comments[29] = "Id Pregunta: 740. Estrategia TIC";


//  Id pregunta: 83 Año de creación de pregunta: 2016
 questions[30]= "31)  Seg&uacute;n WCAG 2.0, &iquest;con qu&eacute; principio est&aacute; relacionada la pauta &ldquo;Hacer que las p&aacute;ginas web aparezcan y operen de forma predecible&rdquo;?";
 choices[30]= new Array();
 choices[30][0] = "Perceptible";
 choices[30][1] = "Operable";
 choices[30][2] = "Comprensible";
 choices[30][3] = "Robusto";
 answers[30] = choices[30][2];
 units[30] = "42";
 comments[30] = "Id Pregunta: 83. AGE A1 2015";


//  Id pregunta: 85 Año de creación de pregunta: 2016
 questions[31]= "32)  Seg&uacute;n MAGERIT 3.0, el informe en el que se recogen los resultados de la identificaci&oacute;n de las amenazas relevantes sobre el sistema a analizar, caracterizadas por las estimaciones de ocurrencia y da&ntilde;o causado, se denomina:";
 choices[31]= new Array();
 choices[31][0] = "Estimaci&oacute;n del riesgo";
 choices[31][1] = "Evaluaci&oacute;n de salvaguardas";
 choices[31][2] = "Declaraci&oacute;n de aplicabilidad";
 choices[31][3] = "Mapa de riesgos";
 answers[31] = choices[31][3];
 units[31] = "45";
 comments[31] = "Id Pregunta: 85. AGE A1 2015";


//  Id pregunta: 717 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;A trav&eacute;s de qu&eacute; empresa surgen las metodolog&iacute;as lean?";
 choices[32]= new Array();
 choices[32][0] = "Ford";
 choices[32][1] = "Google";
 choices[32][2] = "Toyota";
 choices[32][3] = "Facebook";
 answers[32] = choices[32][2];
 units[32] = "34";
 comments[32] = "Id Pregunta: 717. Metodologias Lean";


//  Id pregunta: 442 Año de creación de pregunta: 2016
 questions[33]= "34)  Sobre la gu&iacute;a de Comunicaci&oacute;n Digital de la AGE, se&ntilde;ale la respuesta falsa:";
 choices[33]= new Array();
 choices[33][0] = "La Gu&iacute;a de Comunicaci&oacute;n Digital para la AGE ofrece un marco de criterios, recomendaciones y buenas pr&aacute;cticas a considerar al crear, generar contenidos o evolucionar sitios web, sedes electr&oacute;nicas o tambi&eacute;n blogs, cuentas o perfiles de redes sociales.";
 choices[33][1] = "Recoge aspectos como la imagen Institucional: uso de los logotipos del Gobierno de Espa&ntilde;a, elementos distintivos de imagen en las redes sociales o la imagen promocional de la administraci&oacute;n electr&oacute;nica.";
 choices[33][2] = "Se divide en tres partes, con fasc&iacute;culos que pueden ser utilizados independientemente seg&uacute;n las necesidades de cada responsable del sitio web.";
 choices[33][3] = "La &laquo;Gu&iacute;a de Comunicaci&oacute;n Digital para la Administraci&oacute;n General del Estado&raquo; que se aprueba mediante la presente Resoluci&oacute;n se aplicar&aacute; al a&ntilde;o siguiente al de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 answers[33] = choices[33][3];
 units[33] = "43";
 comments[33] = "Id Pregunta: 442. SERVICIOS COMUNES";


//  Id pregunta: 43 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Cu&aacute;l de los siguientes principios NO est&aacute; recogido en el Manifiesto por el Desarrollo &Aacute;gil del Software?";
 choices[34]= new Array();
 choices[34][0] = "La simplicidad, o el arte de maximizar la cantidad de trabajo no realizado, es esencial.";
 choices[34][1] = "Aceptamos que los requisitos cambien, incluso en etapas tard&iacute;as del desarrollo. Los procesos &aacute;giles aprovechan el cambio para proporcionar ventaja competitiva al cliente.";
 choices[34][2] = "Las mejores arquitecturas, requisitos y dise&ntilde;os emergen por la aplicaci&oacute;n de unos procesos bien organizados.";
 choices[34][3] = "El software funcionando es la medida principal del progreso.";
 answers[34] = choices[34][2];
 units[34] = "34";
 comments[34] = "Id Pregunta: 43. AGE A1 2015";


//  Id pregunta: 441 Año de creación de pregunta: 2016
 questions[35]= "36)  Se&ntilde;ale la respuesta falsa respecto a Habilit@, Registro de Funcionarios Habilitados:";
 choices[35]= new Array();
 choices[35][0] = "El art&iacute;culo 12.3 de la Ley 39/2015recoge que la Administraci&oacute;n General del Estado, las Comunidades Aut&oacute;nomas y las Entidades Locales mantendr&aacute;n actualizado un registro, u otro sistema equivalente, donde constar&aacute;n los funcionarios habilitados para la identificaci&oacute;n o firma.";
 choices[35][1] = "La Orden HAP/8/2014, de 7 de enero, regula el Registro de funcionarios habilitados para la identificaci&oacute;n y autenticaci&oacute;n de ciudadanos en el &aacute;mbito de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos vinculados o dependientes.";
 choices[35][2] = "En el caso en que el ciudadano no disponga de medios de autenticaci&oacute;n y firma para relacionarse de manera electr&oacute;nica con las Administraciones, la Ley 39/2015 prev&eacute; que, siempre que el ciudadano se identifique y deje constancia de su consentimiento expreso, un funcionario podr&aacute; actuar en su nombre, utilizando el sistema de firma del que disponga para ello.";
 choices[35][3] = "Tambi&eacute;n se establece en la misma Ley 39/2015 que las Administraciones P&uacute;blicas podr&aacute;n realizar copias aut&eacute;nticas de los documentos p&uacute;blicos administrativos o privados mediante funcionario habilitado.";
 answers[35] = choices[35][1];
 units[35] = "43";
 comments[35] = "Id Pregunta: 441. SERVICIOS COMUNES";


//  Id pregunta: 89 Año de creación de pregunta: 2016
 questions[36]= "37)  En un contrato cuyo presupuesto es de 100.000 euros sin IVA y se adjudica por 80.000, IVA excluido, la garant&iacute;a definitiva ser&aacute; de:";
 choices[36]= new Array();
 choices[36][0] = "2.400 euros";
 choices[36][1] = "4.000 euros";
 choices[36][2] = "3.200 euros";
 choices[36][3] = "1.600 euros";
 answers[36] = choices[36][1];
 units[36] = "37";
 comments[36] = "Id Pregunta: 89. AGE A1 2015";


//  Id pregunta: 77 Año de creación de pregunta: 2016
 questions[37]= "38)  Respecto al uso de servicios de firma de documentos electr&oacute;nicos mediante certificados electr&oacute;nicos centralizados, mediante el sistema Cl@ve, indique cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[37]= new Array();
 choices[37][0] = "Para poder acceder al servicio, el usuario deber&aacute; solicitar previa y expresamente la emisi&oacute;n de los certificados electr&oacute;nicos centralizados correspondientes.";
 choices[37][1] = "Los certificados electr&oacute;nicos centralizados ser&aacute;n emitidos con las mismas garant&iacute;as de identificaci&oacute;n del DNI electr&oacute;nico del ciudadano.";
 choices[37][2] = "El acceso al servicio requiere en todo caso que el usuario se haya registrado en Cl@ve y haya activado su Cl@ve permanente.";
 choices[37][3] = "En el momento de la identificaci&oacute;n, se requerir&aacute; la utilizaci&oacute;n de una verificaci&oacute;n de seguridad adicional mediante un c&oacute;digo de un solo uso y validez limitada en el tiempo que se enviar&aacute; al tel&eacute;fono m&oacute;vil del usuario registrado.";
 answers[37] = choices[37][2];
 units[37] = "47";
 comments[37] = "Id Pregunta: 77. AGE A1 2015";


//  Id pregunta: 1 Año de creación de pregunta: 2016
 questions[38]= "39)  Los medios y servicios compartidos, establecidos en el Real Decreto 806/2014 dentro del modelo de gobernanza en el &aacute;mbito de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones de la Administraci&oacute;n General del Estado, son tales que:";
 choices[38]= new Array();
 choices[38][0] = "Su declaraci&oacute;n presupone que el servicio se encuentra en producci&oacute;n, listo para la adhesi&oacute;n de las diferentes unidades departamentales.";
 choices[38][1] = "Dado su car&aacute;cter obligatorio y sustitutivo, no se permite acordar excepciones por razones econ&oacute;micas, t&eacute;cnicas o de oportunidad sobrevenidas.";
 choices[38][2] = "Su declaraci&oacute;n establece la habilitaci&oacute;n para el desarrollo de las medidas t&eacute;cnicas, organizativas, presupuestarias y normativas.";
 choices[38][3] = "Su provisi&oacute;n se realiza directa y exclusivamente por medio de la Direcci&oacute;n General de Administraci&oacute;n Digital";
 answers[38] = choices[38][2];
 units[38] = "26";
 comments[38] = "Id Pregunta: 1. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 672 Año de creación de pregunta: 2016
 questions[39]= "40)  En cuanto a la Historia Cl&iacute;nica Digital del Sistema Nacional de Salud, se&ntilde;ale cual de las siguientes afirmaciones es Incorrecta:";
 choices[39]= new Array();
 choices[39][0] = "Se ha implementado por mandato legal, tanto por la Ley 16/2003 de cohesi&oacute;n y calidad del Sistema Nacional de Salud, como por la Ley 41/2002 de Autonom&iacute;a del Paciente.";
 choices[39][1] = "Permite que los profesionales sanitarios puedan acceder a los datos de salud del paciente, cuando este se encuentre desplazado fuera de su Comunidad Aut&oacute;noma de origen y requiera asistencia sanitaria.";
 choices[39][2] = "De acuerdo a su dise&ntilde;o funcional, permite acceder a la totalidad de los contenidos existentes en la Historia Cl&iacute;nica Electr&oacute;nica de las Comunidades Aut&oacute;nomas.";
 choices[39][3] = "Gracias a ella, de acuerdo al informe CORA de Febrero de 2016, ya son 25,5 millones de ciudadanos los que disponen de informes cl&iacute;nicos en el Sstema Nacional de Salud.";
 answers[39] = choices[39][2];
 units[39] = "47";
 comments[39] = "Id Pregunta: 672. Historia Cl&iacute;nica Digital";


//  Id pregunta: 438 Año de creación de pregunta: 2016
 questions[40]= "41)  El Real Decreto 424/2016, de 11 de noviembre establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales. Se&ntilde;ale la respuesta falsa.";
 choices[40]= new Array();
 choices[40][0] = "Dentro del Ministerio de Energ&iacute;a, Turismo y Agenda Digital se encuentra la Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital, de la que depende la Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n.";
 choices[40][1] = "Suprime la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones.";
 choices[40][2] = "La Direcci&oacute;n General de Racionalizaci&oacute;n y Centralizaci&oacute;n de la Contrataci&oacute;n es un &oacute;rgano directivo perteneciente a la Subsecretar&iacute;a de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[40][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, con rango de Direcci&oacute;n general depende de la Secretar&iacute;a de Estado de Funci&oacute;n P&uacute;blica.";
 answers[40] = choices[40][3];
 units[40] = "43";
 comments[40] = "Id Pregunta: 438. SERVICIOS COMUNES";


//  Id pregunta: 723 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Cu&aacute;les son las caracter&iacute;sticas del sprint 0 en SCRUM?";
 choices[41]= new Array();
 choices[41][0] = "Se dejan listos los entornos de desarrollo";
 choices[41][1] = "Se trabaja en el product backlog, dejando listos los product backlog &iacute;tems priorizados y estimados";
 choices[41][2] = "Se hace una previsi&oacute;n del reparto de historias de usuario por iteraci&oacute;n";
 choices[41][3] = "Todas las anteriores son correctas";
 answers[41] = choices[41][3];
 units[41] = "34, 84";
 comments[41] = "Id Pregunta: 723. Metodologias &aacute;giles";


//  Id pregunta: 739 Año de creación de pregunta: 2016
 questions[42]= "43)  En relaci&oacute;n al principio rector Orientaci&oacute;n al usuario del servicio del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[42]= new Array();
 choices[42][0] = "Es necesario redefinir los servicios empezando por el lado del usuario, ya sea un ciudadano o un empleado p&uacute;blico, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y seguridad.";
 choices[42][1] = "Es necesario redefinir los servicios empezando por el lado del ciudadano, ya sea un funcionario o una persona f&iacute;sica, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y transparencia.";
 choices[42][2] = "Se requiere modernizar los servicios p&uacute;blicos empezando por el lado del ciudadano, ya sea un funcionario o una persona f&iacute;sica, con una vocaci&oacute;n de transparencia, usabilidad, simplicidad y accesibilidad.";
 choices[42][3] = "Es necesario redefinir los servicios empezando por el lado del usuario, ya sea un ciudadano o un empleado p&uacute;blico, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y transparencia.";
 answers[42] = choices[42][0];
 units[42] = "28";
 comments[42] = "Id Pregunta: 739. Estrategia TIC";


//  Id pregunta: 722 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Cu&aacute;l es la principal desventaja de sprints m&aacute;s largos?";
 choices[43]= new Array();
 choices[43][0] = "Permite reaccionar al equipo mejor ante imprevistos";
 choices[43][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[43][2] = "Se reduce el n&uacute;mero de reuniones de sprint";
 choices[43][3] = "Se puede desarrollar algo diferente a lo requerido y obtener el feedback del cliente m&aacute;s tarde.";
 answers[43] = choices[43][3];
 units[43] = "34, 84";
 comments[43] = "Id Pregunta: 722. Metodologias &aacute;giles";


//  Id pregunta: 20 Año de creación de pregunta: 2016
 questions[44]= "45)  Con respecto al &aacute;mbito objetivo de aplicaci&oacute;n de la Ley 37/2007, de 16 de noviembre, sobre reutilizaci&oacute;n de la informaci&oacute;n del sector p&uacute;blico:";
 choices[44]= new Array();
 choices[44][0] = "Abarca el intercambio de documentos entre Administraciones y organismos del sector p&uacute;blico en el ejercicio de las funciones p&uacute;blicas que tengan atribuidas.";
 choices[44][1] = "Ser&aacute; aplicable incluso sobre los documentos que obran en las Administraciones y organismos del sector p&uacute;blico para finalidades ajenas a sus funciones de servicio p&uacute;blico.";
 choices[44][2] = "No afecta a la existencia de derechos de propiedad intelectual de las Administraciones y organismos del sector p&uacute;blico ni a su posesi&oacute;n por &eacute;stos.";
 choices[44][3] = "Fija la prevalencia del derecho fundamental a la protecci&oacute;n de datos de car&aacute;cter personal, a&uacute;n cuando se apliquen medidas de disociaci&oacute;n de datos.";
 answers[44] = choices[44][2];
 units[44] = "27";
 comments[44] = "Id Pregunta: 20. AGE A1 2015";


//  Id pregunta: 551 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Cu&aacute;l es el &oacute;rgano t&eacute;cnico de cooperaci&oacute;n de la Administraci&oacute;n General del Estado, de las Administraciones de las Comunidades Aut&oacute;nomas y de las Entidades Locales en materia de administraci&oacute;n electr&oacute;nica definido en la ley 40/2015 de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[45]= new Array();
 choices[45][0] = "La Conferencia Sectorial de Telecomunicaciones y Sociedad de la Informaci&oacute;n";
 choices[45][1] = "El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica";
 choices[45][2] = "La Comisi&oacute;n Sectorial de administraci&oacute;n electr&oacute;nica";
 choices[45][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[45] = choices[45][2];
 units[45] = "26";
 comments[45] = "Id Pregunta: 551. Gobernanza TIC";


//  Id pregunta: 87 Año de creación de pregunta: 2016
 questions[46]= "47)  Respecto a la pol&iacute;tica de normalizaci&oacute;n TIC en la Uni&oacute;n Europea, como se&ntilde;ala el Reglamento 1025/2012 del Parlamento y del Consejo, la identificaci&oacute;n de especificaciones t&eacute;cnicas de las TIC admisibles a efectos de referenciaci&oacute;n:";
 choices[46]= new Array();
 choices[46][0] = "Ha de estar siempre basada en normas de estandarizaci&oacute;n nacionales, europeas o internacionales.";
 choices[46][1] = "No deben ser usadas para permitir la interoperabilidad en la contrataci&oacute;n p&uacute;blica, dado que se podr&iacute;an dar situaciones monopol&iacute;sticas.";
 choices[46][2] = "Ser&aacute; realizada por la Comisi&oacute;n, bien a propuesta de un Estado miembro o por iniciativa propia, sin necesidad de ser una norma nacional, europea o internacional, cumpli&eacute;ndose los dem&aacute;s requisitos establecidos en el reglamento.";
 choices[46][3] = "Requieren para su adopci&oacute;n la unanimidad de todos los Estados miembro.";
 answers[46] = choices[46][2];
 units[46] = "48";
 comments[46] = "Id Pregunta: 87. AGE A1 2015";


//  Id pregunta: 436 Año de creación de pregunta: 2016
 questions[47]= "48)  Respecto a la carpeta ciudadana, se&ntilde;ale la respuesta incorrecta:";
 choices[47]= new Array();
 choices[47][0] = "Se trata de un &aacute;rea personal en la que cualquier ciudadano disponga de toda su informaci&oacute;n custodiada y gestionada por parte de la Administraci&oacute;n General del Estado.";
 choices[47][1] = "Permite comprobar el Estado de los expedientes con distintos organismos.";
 choices[47][2] = "La autenticaci&oacute;n del ciudadano se realiza a trav&eacute;s de certificados digitales.";
 choices[47][3] = "Muestra al ciudadano los Apoderamientos del Registro Electr&oacute;nico de Apoderamientos (REA), tanto para los poderdantes como los apoderados, posibilitando la revocaci&oacute;n y la renuncia respectivamente.";
 answers[47] = choices[47][2];
 units[47] = "43";
 comments[47] = "Id Pregunta: 436. SERVICIOS COMUNES";


//  Id pregunta: 721 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;C&uacute;al es la principal ventaja de sprints m&aacute;s cortos en Scrum?";
 choices[48]= new Array();
 choices[48][0] = "Permite reaccionar al equipo mejor ante imprevistos";
 choices[48][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[48][2] = "Es m&aacute;s f&aacute;cil cumplir los objetivos marcados al final de cada sprint";
 choices[48][3] = "Ninguna de las anteriores";
 answers[48] = choices[48][1];
 units[48] = "34, 84";
 comments[48] = "Id Pregunta: 721. Metodologias &aacute;giles";


//  Id pregunta: 727 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;C&uacute;al es el nombre de la reuni&oacute;n de SCRUM, donde se revisan los product backlog &iacute;tems?:";
 choices[49]= new Array();
 choices[49][0] = "Backlog refinement";
 choices[49][1] = "Backlog refinement";
 choices[49][2] = "A y b son correctas";
 choices[49][3] = "Ninguna de las anteriores";
 answers[49] = choices[49][2];
 units[49] = "34, 84";
 comments[49] = "Id Pregunta: 727. Metodologias &aacute;giles";


//  Id pregunta: 75 Año de creación de pregunta: 2016
 questions[50]= "51)  Las transferencias internacionales de datos de car&aacute;cter personal:";
 choices[50]= new Array();
 choices[50][0] = "Se regulan en los art&iacute;culos 33 y 34 de la Ley Org&aacute;nica 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal y en el T&iacute;tulo VI del Real Decreto 1720/2007 por el que se aprueba el Reglamento de desarrollo de la Ley Org&aacute;nica 15/1999.";
 choices[50][1] = "Una transferencia internacional de datos, es un tratamiento de datos que supone una transmisi&oacute;n de los mismos fuera del territorio de la Uni&oacute;n Europea (UE).";
 choices[50][2] = "La Decisi&oacute;n de la Comisi&oacute;n 2000/520/CE, con arreglo a la Directiva 95/46/CE, permite actualmente realizar transferencias de datos a Estados Unidos si se cumplen los principios del acuerdo de Puerto Seguro.";
 choices[50][3] = "Precisan, en todo caso, la autorizaci&oacute;n previa de la Direcci&oacute;n de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[50] = choices[50][0];
 units[50] = "35";
 comments[50] = "Id Pregunta: 75. AGE A1 2015";


//  Id pregunta: 598 Año de creación de pregunta: 2016
 questions[51]= "52)  Entre la documentaci&oacute;n de la Seguridad de la Organizaci&oacute;n nos podremos encontrar:";
 choices[51]= new Array();
 choices[51][0] = "La Pol&iacute;tica de Seguridad Corporativa ser&aacute; elaborada por el Responsable de Seguridad Corporativa y aprobada por el Comit&eacute; de Seguridad Corporativa y por la Alta Direcci&oacute;n.";
 choices[51][1] = "La Pol&iacute;tica de Seguridad de las TIC que debe estar alineada en todo momento con el Mantenimiento de los Sistemas de Informaci&oacute;n.";
 choices[51][2] = "El Documento de Seguridad que ha de estar presente en toda documentaci&oacute;n de la seguridad de la informaci&oacute;n.";
 choices[51][3] = "Todas las respuestas anteriores son correctas.";
 answers[51] = choices[51][0];
 units[51] = "45";
 comments[51] = "Id Pregunta: 598. Junta de Extremadura A1 2015";


//  Id pregunta: 78 Año de creación de pregunta: 2016
 questions[52]= "53)  En relaci&oacute;n con la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de protecci&oacute;n de datos de car&aacute;cter personal, se&ntilde;ale la respuesta correcta:";
 choices[52]= new Array();
 choices[52][0] = "En caso de datos de car&aacute;cter personal registrados inexactos o incompletos, el interesado debe instar su rectificaci&oacute;n, sin que puedan ser cancelados y sustituidos de oficio por los datos rectificados o completados.";
 choices[52][1] = "En caso de datos de car&aacute;cter personal registrados inexactos o incompletos, ser&aacute;n cancelados y sustituidos de oficio por los datos rectificados o completados, sin perjuicio del derecho de rectificaci&oacute;n y cancelaci&oacute;n del afectado.";
 choices[52][2] = "El responsable del tratamiento tendr&aacute; la obligaci&oacute;n de hacer efectivo el derecho de rectificaci&oacute;n o cancelaci&oacute;n del interesado en el plazo de 15 d&iacute;as.";
 choices[52][3] = "El responsable del tratamiento tendr&aacute; la obligaci&oacute;n de hacer efectivo el derecho de rectificaci&oacute;n o cancelaci&oacute;n del interesado en el plazo de 1 mes.";
 answers[52] = choices[52][1];
 units[52] = "35";
 comments[52] = "Id Pregunta: 78. AGE A1 2015";


//  Id pregunta: 738 Año de creación de pregunta: 2016
 questions[53]= "54)  LA estructura de la Estrategia TIC:";
 choices[53]= new Array();
 choices[53][0] = "5 principios rectores, 7 principios estrat&eacute;gicos, 9 l&iacute;neas de acci&oacute;n";
 choices[53][1] = "5 principios rectores, 5 principios estrat&eacute;gicos, 7 l&iacute;neas de acci&oacute;n";
 choices[53][2] = "5 principios rectores, 5 principios estrat&eacute;gicos, 9 l&iacute;neas de acci&oacute;n";
 choices[53][3] = "5 principios rectores, 6 principios estrat&eacute;gicos, 8 l&iacute;neas de acci&oacute;n";
 answers[53] = choices[53][2];
 units[53] = "28";
 comments[53] = "Id Pregunta: 738. Estrategia TIC";


//  Id pregunta: 616 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;A qui&eacute;n est&aacute; destinado principalmente las Pautas de Accesibilidad al Contenido en la Web (WCAG)?";
 choices[54]= new Array();
 choices[54][0] = "A desarrolladores de navegadores web y reproductores multimedia.";
 choices[54][1] = "A desarrolladores de herramientas de autor, como herramientas de creaci&oacute;n de p&aacute;ginas web o de creaci&oacute;n de archivos multimedia.";
 choices[54][2] = "A desarrolladores de herramientas de evaluaci&oacute;n de la accesibilidad web.";
 choices[54][3] = "Todas las respuestas son correctas.";
 answers[54] = choices[54][2];
 units[54] = "42";
 comments[54] = "Id Pregunta: 616. Junta de Extremadura A1 2015";


//  Id pregunta: 728 Año de creación de pregunta: 2016
 questions[55]= "56)  Indica la respuesta correcta";
 choices[55]= new Array();
 choices[55][0] = "Scrum no implica baja documentaci&oacute;n, de hecho hay estudios que estiman que es totalmente compatible con CMMI-3";
 choices[55][1] = "Scrum es una metodolog&iacute;a poco organizada";
 choices[55][2] = "Scrum no suele incluir a testers en el SCRUM TEAM";
 choices[55][3] = "En Scrum, sufre la calidad del producto o servicio al no pasar procesos de calidad reglados";
 answers[55] = choices[55][0];
 units[55] = "34, 84";
 comments[55] = "Id Pregunta: 728. Metodologias &aacute;giles";


//  Id pregunta: 73 Año de creación de pregunta: 2016
 questions[56]= "57)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Digitalizaci&oacute;n de Documentos, &iquest;cu&aacute;l de los siguientes metadatos no es considerado como metadato complementario?";
 choices[56]= new Array();
 choices[56][0] = "Resoluci&oacute;n, que indica el valor de resoluci&oacute;n en p&iacute;xeles por pulgada empleada en la digitalizaci&oacute;n.";
 choices[56][1] = "Origen, que indica si el contenido del documento fue creado por un ciudadano o por una administraci&oacute;n.";
 choices[56][2] = "Tama&ntilde;o, que indica el valor y unidades del tama&ntilde;o l&oacute;gico del documento digitalizado.";
 choices[56][3] = "Idioma, que indica el idioma del contenido del documento digitalizado.";
 answers[56] = choices[56][1];
 units[56] = "44";
 comments[56] = "Id Pregunta: 73. AGE A1 2015";


//  Id pregunta: 546 Año de creación de pregunta: 2016
 questions[57]= "58)  El principio definido en el est&aacute;ndar ISO/IEC 38500 para la Gobernanza TIC que establece la necesidad de cumplir los requerimientos regulatorios y legales es el principio de:";
 choices[57]= new Array();
 choices[57][0] = "Conformidad";
 choices[57][1] = "Responsabilidad";
 choices[57][2] = "Adquisici&oacute;n";
 choices[57][3] = "Desempe&ntilde;o";
 answers[57] = choices[57][0];
 units[57] = "26";
 comments[57] = "Id Pregunta: 546. Gobernanza TIC";


//  Id pregunta: 628 Año de creación de pregunta: 2016
 questions[58]= "59)  Seg&uacute;n el Real Decreto 4/2010, de 8 de enero, por el que se regula el Esquema Nacional de Interoperabilidad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; es la interoperabilidad?";
 choices[58]= new Array();
 choices[58][0] = "Es la capacidad de los sistemas de informaci&oacute;n y de los procedimientos a los que &eacute;stos dan soporte, de compartir datos y posibilitar el intercambio de informaci&oacute;n y conocimiento entre ellos.";
 choices[58][1] = "Es la obligaci&oacute;n de conectividad ente sistemas operativos de las Administraciones P&uacute;blicas.";
 choices[58][2] = "Es la capacidad de intercambio de datos entre las Comunidades Aut&oacute;nomas y la Administraci&oacute;n Central.";
 choices[58][3] = "Es la posibilidad de acceso a los datos que poseen todas las Administraciones sobre cualquiera de los usuarios de los sistemas de informaci&oacute;n.";
 answers[58] = choices[58][0];
 units[58] = "45";
 comments[58] = "Id Pregunta: 628. Junta de Extremadura A1 2015";


//  Id pregunta: 736 Año de creación de pregunta: 2016
 questions[59]= "60)  Las iniciativas que se lancen al amparo del Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE se ce&ntilde;ir&aacute;n a:";
 choices[59]= new Array();
 choices[59][0] = "6 principios.";
 choices[59][1] = "7 principios.";
 choices[59][2] = "5 principios.";
 choices[59][3] = "6 directrices.";
 answers[59] = choices[59][1];
 units[59] = "28";
 comments[59] = "Id Pregunta: 736. Estrategia TIC";


//  Id pregunta: 549 Año de creación de pregunta: 2016
 questions[60]= "61)  El presidente del pleno de la Comisi&oacute;n de Estrategia TIC es :";
 choices[60]= new Array();
 choices[60][0] = "El Ministro de Energ&iacute;a, Turismo y Agenda Digital";
 choices[60][1] = "El Ministro de Hacienda y Administraciones P&uacute;blicas";
 choices[60][2] = "El Presidente del Gobierno";
 choices[60][3] = "El Secretario General de Administraci&oacute;n Digital";
 answers[60] = choices[60][1];
 units[60] = "26";
 comments[60] = "Id Pregunta: 549. Gobernanza TIC";


//  Id pregunta: 629 Año de creación de pregunta: 2016
 questions[61]= "62)  Seg&uacute;n la Ley de Protecci&oacute;n de Datos de Car&aacute;cter Personal, no podr&aacute;n realizarse transferencias de datos de car&aacute;cter personal a pa&iacute;ses que no proporcionen un nivel de protecci&oacute;n equiparable al de esta Ley. &iquest;Qui&eacute;n se encarga de evaluar el nivel adecuado de protecci&oacute;n que ofrece el pa&iacute;s de destino de los datos?";
 choices[61]= new Array();
 choices[61][0] = "El Ministerio de Asuntos Exteriores junto con el Ministerio de Justicia.";
 choices[61][1] = "El responsable de la custodia de los datos enviados.";
 choices[61][2] = "La Agencia Europea de Cooperaci&oacute;n.";
 choices[61][3] = "La Agencia de Protecci&oacute;n de Datos.";
 answers[61] = choices[61][3];
 units[61] = "35";
 comments[61] = "Id Pregunta: 629. Junta de Extremadura A1 2015";


//  Id pregunta: 8 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes NO es una funci&oacute;n de la Secretar&iacute;a General de Administraci&oacute;n Digital?";
 choices[62]= new Array();
 choices[62][0] = "Establecer los mecanismos que aseguren un adecuado mantenimiento del censo de activos TIC.";
 choices[62][1] = "El estudio y la implementaci&oacute;n de modelos para incentivar la compartici&oacute;n y reutilizaci&oacute;n de las infraestructuras y aplicaciones sectoriales, y promover el desarrollo de aplicaciones bajo dicho modelo.";
 choices[62][2] = "La supervisi&oacute;n y coordinaci&oacute;n del registro de convenios del sector p&uacute;blico estatal, de acuerdo con la informaci&oacute;n que deber&aacute;n suministrar los diferentes departamentos ministeriales y dem&aacute;s organismos p&uacute;blicos suscriptores de los mismos.";
 choices[62][3] = "El desarrollo, impulso e implantaci&oacute;n de sistemas tecnol&oacute;gicos de apoyo para la gesti&oacute;n de recursos humanos, incluidos los sistemas del Registro Central de Personal.";
 answers[62] = choices[62][2];
 units[62] = "26";
 comments[62] = "Id Pregunta: 8. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 607 Año de creación de pregunta: 2016
 questions[63]= "64)  Seg&uacute;n Magerit v3, en el desarrollo de sistemas de informaci&oacute;n:";
 choices[63]= new Array();
 choices[63][0] = "La seguridad debe estar embebida en el sistema desde su primera concepci&oacute;n.";
 choices[63][1] = "La seguridad comenzar&aacute; a considerarse formalmente cuando finalice el proceso de implantaci&oacute;n de sistemas de informaci&oacute;n.";
 choices[63][2] = "La seguridad del sistema de informaci&oacute;n es m&aacute;s econ&oacute;mica implantarla una vez puesto en producci&oacute;n el sistema de informaci&oacute;n que tenerla en consideraci&oacute;n durante el desarrollo del sistema.";
 choices[63][3] = "La seguridad s&oacute;lo ralentiza el proceso de desarrollo de sistemas de informaci&oacute;n por lo que s&oacute;lo se debe considerar en aquellos sistemas que usen datos econ&oacute;micos.";
 answers[63] = choices[63][0];
 units[63] = "45";
 comments[63] = "Id Pregunta: 607. Junta de Extremadura A1 2015";


//  Id pregunta: 445 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Cu&aacute;l de los siguientes datos NO es obligatorio que figure en la realizaci&oacute;n de una inscripci&oacute;n en el Registro electr&oacute;nico de Apoderamientos?";
 choices[64]= new Array();
 choices[64][0] = "Nombre y apellidos, denominaci&oacute;n o raz&oacute;n social y NIF del poderante.";
 choices[64][1] = "Per&iacute;odo de vigencia de los tr&aacute;mites objeto de apoderamiento.";
 choices[64][2] = "Fecha de otorgamiento.";
 choices[64][3] = "N&uacute;mero de referencia del alta y fecha de alta en el Registro.";
 answers[64] = choices[64][1];
 units[64] = "43";
 comments[64] = "Id Pregunta: 445. SERVICIOS COMUNES";


//  Id pregunta: 597 Año de creación de pregunta: 2016
 questions[65]= "66)  La pol&iacute;tica de seguridad de alto nivel de la Organizaci&oacute;n:";
 choices[65]= new Array();
 choices[65][0] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, sin entrar en detalles acerca del COMO.";
 choices[65][1] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer y COMO se debe implementar.";
 choices[65][2] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 choices[65][3] = "Debe describir QUE se intenta proteger, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 answers[65] = choices[65][0];
 units[65] = "45";
 comments[65] = "Id Pregunta: 597. Junta de Extremadura A1 2015";


//  Id pregunta: 69 Año de creación de pregunta: 2016
 questions[66]= "67)  Los contratos que celebren los poderes adjudicadores se perfeccionan con su:";
 choices[66]= new Array();
 choices[66][0] = "Ejecuci&oacute;n";
 choices[66][1] = "Adjudicaci&oacute;n";
 choices[66][2] = "Licitaci&oacute;n";
 choices[66][3] = "Formalizaci&oacute;n";
 answers[66] = choices[66][3];
 units[66] = "37";
 comments[66] = "Id Pregunta: 69. AGE A1 2015";


//  Id pregunta: 613 Año de creación de pregunta: 2016
 questions[67]= "68)  El Modelo de Referencia de Interconexi&oacute;n de Sistemas Abiertos (OSI) consta de siete niveles. Se&ntilde;ala cu&aacute;l de los principios que se aplicaron para llevar a cabo esta divisi&oacute;n es falso:";
 choices[67]= new Array();
 choices[67][0] = "No se deben crear demasiados niveles de manera que la tarea de describir e integrar &eacute;stos fuera m&aacute;s dif&iacute;cil de lo necesario.";
 choices[67][1] = "Aunque se requiera un nivel de abstracci&oacute;n diferente en el manejo de los datos, debe usarse un nivel ya existente.";
 choices[67][2] = "Cada nivel debe realizar unas funciones bien definidas.";
 choices[67][3] = "Crear para cada nivel interfases con el nivel superior e inferior &uacute;nicamente.";
 answers[67] = choices[67][1];
 units[67] = "48";
 comments[67] = "Id Pregunta: 613. Junta de Extremadura A1 2015";


//  Id pregunta: 435 Año de creación de pregunta: 2016
 questions[68]= "69)  Sobre el servicio com&uacute;n Autentica, se&ntilde;ale la respuesta correcta:";
 choices[68]= new Array();
 choices[68][0] = "Autentica ofrece &uacute;nicamente servicios de autenticaci&oacute;n de empleados p&uacute;blicos de las AA.PP. y usuarios relacionados,";
 choices[68][1] = "Su objetivo es constituirse como el servicio com&uacute;n compartido de referencia para los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado, para sus aplicaciones internas.";
 choices[68][2] = "El servicio provee atributos de los usuarios autenticados relacionados con la unidad y el puesto de destino, incluyendo correo electr&oacute;nico y tel&eacute;fono.";
 choices[68][3] = "Ofrece funcionalidad de autorizaci&oacute;n de usuarios, &uacute;nicamente pertenecientes a la Administraci&oacute;n General del Estado.";
 answers[68] = choices[68][2];
 units[68] = "43";
 comments[68] = "Id Pregunta: 435. SERVICIOS COMUNES";


//  Id pregunta: 32 Año de creación de pregunta: 2016
 questions[69]= "70)  El art&iacute;culo 16 del Esquema Nacional de Interoperabilidad establece las condiciones de licenciamiento aplicables en el &aacute;mbito de la reutilizaci&oacute;n y transferencia de tecnolog&iacute;a, &iquest;cu&aacute;l de las siguientes licencias recomienda expresamente aplicar, sin perjuicio de otras licencias que garanticen los derechos expuestos en el mencionado art&iacute;culo?";
 choices[69]= new Array();
 choices[69][0] = "ASF-AL (Apache License 2.0)";
 choices[69][1] = "EUPL (European Union Public License)";
 choices[69][2] = "LGPL (Lesser General Public License)";
 choices[69][3] = "MIT(MIT License)";
 answers[69] = choices[69][1];
 units[69] = "43";
 comments[69] = "Id Pregunta: 32. AGE A1 2015";


//  Id pregunta: 726 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest; Cu&aacute;l es el n&uacute;mero de personas recomendados para cada team de Scrum?";
 choices[70]= new Array();
 choices[70][0] = "De 1a  4 ";
 choices[70][1] = "De 3 a  7 ";
 choices[70][2] = "De 5 a  9";
 choices[70][3] = "De 7 a 11";
 answers[70] = choices[70][2];
 units[70] = "34, 84";
 comments[70] = "Id Pregunta: 726. Metodologias &aacute;giles";


//  Id pregunta: 725 Año de creación de pregunta: 2016
 questions[71]= "72)  Sobre el Scrum Team, cual es la afirmaci&oacute;n falsa";
 choices[71]= new Array();
 choices[71][0] = "Cada miembro del equipo tiene que tener un rol especifico y no puede asumir tareas que no est&eacute;n dentro de su &aacute;rea de especializaci&oacute;n.";
 choices[71][1] = "Los miembros del equipo deben tener un perfil en &lsquo;T&rsquo;";
 choices[71][2] = "Cada miembro del equipo tiene que tener un conocimiento m&aacute;s amplio de un &aacute;rea";
 choices[71][3] = "Cada miembro del equipo puede asumir cualquier tipo de tarea.";
 answers[71] = choices[71][0];
 units[71] = "34, 84";
 comments[71] = "Id Pregunta: 725. Metodologias &aacute;giles";


//  Id pregunta: 2 Año de creación de pregunta: 2016
 questions[72]= "73)  La estrategia de comunicaci&oacute;n de un nuevo proyecto estrat&eacute;gico TIC NO debe:";
 choices[72]= new Array();
 choices[72][0] = "Posponerse a la puesta en producci&oacute;n del proyecto sin incidencias significativas.";
 choices[72][1] = "Presentar prototipos que muestren la evoluci&oacute;n del desarrollo ya realizado.";
 choices[72][2] = "Dise&ntilde;ar una campa&ntilde;a de difusi&oacute;n y promoci&oacute;n del proyecto.";
 choices[72][3] = "Asegurar la implicaci&oacute;n de representantes de todas las unidades afectadas.";
 answers[72] = choices[72][0];
 units[72] = "31";
 comments[72] = "Id Pregunta: 2. AGE A1 2015";


//  Id pregunta: 0 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Cu&aacute;l de los siguientes NO es un objetivo del Plan de Transformaci&oacute;n Digital de la AGE?";
 choices[73]= new Array();
 choices[73][0] = "Consolidar el tejido productivo nacional apoyando el efectivo despliegue de la Sociedad de la Informaci&oacute;n.";
 choices[73][1] = "Conseguir una mayor eficiencia en los servicios TIC comunes de la Administraci&oacute;n.";
 choices[73][2] = "Implantar una gesti&oacute;n corporativa inteligente de la informaci&oacute;n y los datos.";
 choices[73][3] = "Adoptar una estrategia corporativa de seguridad y usabilidad.";
 answers[73] = choices[73][0];
 units[73] = "26";
 comments[73] = "Id Pregunta: 0. AGE A1 2015";


//  Id pregunta: 630 Año de creación de pregunta: 2016
 questions[74]= "75)  Seg&uacute;n el Reglamento de Medidas de Seguridad de Ficheros Automatizados con Datos de Car&aacute;cter Personal, los ficheros que contengan datos de ideolog&iacute;a, religi&oacute;n, creencias, origen racial, salud o vida sexual, &iquest;qu&eacute; medidas de seguridad deber&aacute;n adoptar?";
 choices[74]= new Array();
 choices[74][0] = "De nivel b&aacute;sico y nivel medio.";
 choices[74][1] = "De nivel alto.";
 choices[74][2] = "De nivel medio y nivel alto.";
 choices[74][3] = "De nivel b&aacute;sico, nivel medio y nivel alto.";
 answers[74] = choices[74][3];
 units[74] = "35";
 comments[74] = "Id Pregunta: 630. Junta de Extremadura A1 2015";


