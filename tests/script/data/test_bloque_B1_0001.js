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

//  Id pregunta: 726 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;C&uacute;al es la afirmaci&oacute;n incorrecta?";
 choices[0]= new Array();
 choices[0][0] = "El sprint release es aquel que implementa las tareas necesarias para poner el sistema en producci&oacute;n";
 choices[0][1] = "El sprint rel&eacute;ase es el &uacute;ltimo sprint de la metodolog&iacute;a SCRUM.";
 choices[0][2] = "En el sprint release se pueden llevan a cabo tareas relacionados con el despliegue y generaci&oacute;n de scripts de recuperaci&oacute;n del sistema";
 choices[0][3] = "En el sprint rel&eacute;ase se pueden llevar a cabo tareas relacionados con la documentaci&oacute;n, pruebas de carga, y tareas relacionadas con las bases de datos en producci&oacute;n.";
 answers[0] = choices[0][1];
 units[0] = "34, 84";
 comments[0] = "Id Pregunta: 726. Metodologias &aacute;giles";


//  Id pregunta: 630 Año de creación de pregunta: 2016
 questions[1]= "2)  Seg&uacute;n el Real Decreto 4/2010, de 8 de enero, por el que se regula el Esquema Nacional de Interoperabilidad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; es la interoperabilidad?";
 choices[1]= new Array();
 choices[1][0] = "Es la capacidad de los sistemas de informaci&oacute;n y de los procedimientos a los que &eacute;stos dan soporte, de compartir datos y posibilitar el intercambio de informaci&oacute;n y conocimiento entre ellos.";
 choices[1][1] = "Es la obligaci&oacute;n de conectividad ente sistemas operativos de las Administraciones P&uacute;blicas.";
 choices[1][2] = "Es la capacidad de intercambio de datos entre las Comunidades Aut&oacute;nomas y la Administraci&oacute;n Central.";
 choices[1][3] = "Es la posibilidad de acceso a los datos que poseen todas las Administraciones sobre cualquiera de los usuarios de los sistemas de informaci&oacute;n.";
 answers[1] = choices[1][0];
 units[1] = "45";
 comments[1] = "Id Pregunta: 630. Junta de Extremadura A1 2015";


//  Id pregunta: 551 Año de creación de pregunta: 2016
 questions[2]= "3)  El presidente del pleno de la Comisi&oacute;n de Estrategia TIC es :";
 choices[2]= new Array();
 choices[2][0] = "El Ministro de Energ&iacute;a, Turismo y Agenda Digital";
 choices[2][1] = "El Ministro de Hacienda y Administraciones P&uacute;blicas";
 choices[2][2] = "El Presidente del Gobierno";
 choices[2][3] = "El Secretario General de Administraci&oacute;n Digital";
 answers[2] = choices[2][1];
 units[2] = "26";
 comments[2] = "Id Pregunta: 551. Gobernanza TIC";


//  Id pregunta: 19 Año de creación de pregunta: 2016
 questions[3]= "4)  En el sistema de Identificaci&oacute;n, Autenticaci&oacute;n y Firma Electr&oacute;nica com&uacute;n para todo el Sector P&uacute;blico Administrativo Estatal (cl@ve):";
 choices[3]= new Array();
 choices[3][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital es el proveedor &uacute;nico de servicios de verificaci&oacute;n de la identidad.";
 choices[3][1] = "Sus destinatarios son exclusivamente ciudadanos espa&ntilde;oles.";
 choices[3][2] = "Su &aacute;mbito de aplicaci&oacute;n podr&aacute; extenderse a otras Administraciones P&uacute;blicas mediante la formalizaci&oacute;n del oportuno convenio.";
 choices[3][3] = "No se requiere registro previo de usuarios, ni consentimiento del usuario ya registrado en otros sistemas previos de identificaci&oacute;n, autenticaci&oacute;n y firma.";
 answers[3] = choices[3][2];
 units[3] = "47";
 comments[3] = "Id Pregunta: 19. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 17 Año de creación de pregunta: 2016
 questions[4]= "5)  De acuerdo con el Reglamento por el que se desarrolla parcialmente la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, aprobado por Real Decreto 1671/2009, de 6 de noviembre, se&ntilde;ale la respuesta correcta:";
 choices[4]= new Array();
 choices[4][0] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de emisi&oacute;n.";
 choices[4][1] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 12 meses desde la fecha de emisi&oacute;n.";
 choices[4][2] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de notificaci&oacute;n.";
 choices[4][3] = "Los documentos electr&oacute;nicos deben conservarse por el per&iacute;odo m&iacute;nimo que determine cada &oacute;rgano administrativo de acuerdo con el procedimiento administrativo de que se trate.";
 answers[4] = choices[4][3];
 units[4] = "44";
 comments[4] = "Id Pregunta: 17. AGE A1 2015";


//  Id pregunta: 445 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Cu&aacute;l no es una funcionalidad que incorpora la versi&oacute;n 3.5 de Acceda?";
 choices[5]= new Array();
 choices[5][0] = "Gesti&oacute;n de notificaciones pendientes, notificadas y rehusadas (de forma expresa o vencido el plazo de caducidad).";
 choices[5][1] = "Remisi&oacute;n a Notific@, desde el m&oacute;dulo de gesti&oacute;n de ACCEDA, de las notificaciones que se emitan como parte de la tramitaci&oacute;n de los expedientes.";
 choices[5][2] = "Gesti&oacute;n de notificaciones pendientes, notificadas y rehusadas (de forma expresa o sin haber vencido el plazo de caducidad).";
 choices[5][3] = "Parametrizaci&oacute;n de las opciones de env&iacute;o: canal de notificaci&oacute;n - Sede-e ACCEDA y Carpeta Ciudadana; DEH obligatorio; DEH voluntario / env&iacute;o postal, etc.";
 answers[5] = choices[5][2];
 units[5] = "43";
 comments[5] = "Id Pregunta: 445. SERVICIOS COMUNES";


//  Id pregunta: 439 Año de creación de pregunta: 2016
 questions[6]= "7)  Sobre el Sistema de Interconexi&oacute;n de Registros (SIR):";
 choices[6]= new Array();
 choices[6][0] = "Es la infraestructura b&aacute;sica que permite el intercambio de asientos electr&oacute;nicos de registro entre los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[6][1] = "Permite eliminar el tr&aacute;nsito de papel entre administraciones, aumentando la eficiencia y eliminando los costes de manipulaci&oacute;n y remisi&oacute;n del papel, gracias a la generaci&oacute;n de copias aut&eacute;nticas electr&oacute;nicas de la documentaci&oacute;n presentada en los asientos de registro.";
 choices[6][2] = "No es necesario que la aplicaci&oacute;n de registro est&eacute; certificada con la norma SICRES 3.0.";
 choices[6][3] = "La integraci&oacute;n en SIR se realiza mediante aplicaciones de registro comunes como GEISER y ORVE o bien, siempre que se justifique, mediante aplicaciones previamente certificadas por la Comisi&oacute;n de Estrategia TIC.";
 answers[6] = choices[6][1];
 units[6] = "43";
 comments[6] = "Id Pregunta: 439. SERVICIOS COMUNES";


//  Id pregunta: 545 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Qu&eacute; est&aacute;ndar ISO define un marco de trabajo para la gobernanza TIC?";
 choices[7]= new Array();
 choices[7][0] = "ISO/IEC 31000";
 choices[7][1] = "ISO/IEC 14000";
 choices[7][2] = "ISO/IEC 38500";
 choices[7][3] = "ISO/IEC 18000";
 answers[7] = choices[7][2];
 units[7] = "26";
 comments[7] = "Id Pregunta: 545. Gobernanza TIC";


//  Id pregunta: 8 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes NO es una funci&oacute;n de la Secretar&iacute;a General de Administraci&oacute;n Digital?";
 choices[8]= new Array();
 choices[8][0] = "Establecer los mecanismos que aseguren un adecuado mantenimiento del censo de activos TIC.";
 choices[8][1] = "El estudio y la implementaci&oacute;n de modelos para incentivar la compartici&oacute;n y reutilizaci&oacute;n de las infraestructuras y aplicaciones sectoriales, y promover el desarrollo de aplicaciones bajo dicho modelo.";
 choices[8][2] = "La supervisi&oacute;n y coordinaci&oacute;n del registro de convenios del sector p&uacute;blico estatal, de acuerdo con la informaci&oacute;n que deber&aacute;n suministrar los diferentes departamentos ministeriales y dem&aacute;s organismos p&uacute;blicos suscriptores de los mismos.";
 choices[8][3] = "El desarrollo, impulso e implantaci&oacute;n de sistemas tecnol&oacute;gicos de apoyo para la gesti&oacute;n de recursos humanos, incluidos los sistemas del Registro Central de Personal.";
 answers[8] = choices[8][2];
 units[8] = "26";
 comments[8] = "Id Pregunta: 8. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 83 Año de creación de pregunta: 2016
 questions[9]= "10)  Seg&uacute;n WCAG 2.0, &iquest;con qu&eacute; principio est&aacute; relacionada la pauta &ldquo;Hacer que las p&aacute;ginas web aparezcan y operen de forma predecible&rdquo;?";
 choices[9]= new Array();
 choices[9][0] = "Perceptible";
 choices[9][1] = "Operable";
 choices[9][2] = "Comprensible";
 choices[9][3] = "Robusto";
 answers[9] = choices[9][2];
 units[9] = "42";
 comments[9] = "Id Pregunta: 83. AGE A1 2015";


//  Id pregunta: 82 Año de creación de pregunta: 2016
 questions[10]= "11)  La titularidad de los derechos de explotaci&oacute;n de un programa de ordenador por una persona jur&iacute;dica expirar&aacute;:";
 choices[10]= new Array();
 choices[10][0] = "A los setenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[10][1] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita, o al de su creaci&oacute;n si no se hubiera divulgado.";
 choices[10][2] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[10][3] = "A los setenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita o al de su creaci&oacute;n si no se hubiera divulgado.";
 answers[10] = choices[10][3];
 units[10] = "41";
 comments[10] = "Id Pregunta: 82. AGE A1 2015";


//  Id pregunta: 632 Año de creación de pregunta: 2016
 questions[11]= "12)  Seg&uacute;n el Reglamento de Medidas de Seguridad de Ficheros Automatizados con Datos de Car&aacute;cter Personal, los ficheros que contengan datos de ideolog&iacute;a, religi&oacute;n, creencias, origen racial, salud o vida sexual, &iquest;qu&eacute; medidas de seguridad deber&aacute;n adoptar?";
 choices[11]= new Array();
 choices[11][0] = "De nivel b&aacute;sico y nivel medio.";
 choices[11][1] = "De nivel alto.";
 choices[11][2] = "De nivel medio y nivel alto.";
 choices[11][3] = "De nivel b&aacute;sico, nivel medio y nivel alto.";
 answers[11] = choices[11][3];
 units[11] = "35";
 comments[11] = "Id Pregunta: 632. Junta de Extremadura A1 2015";


//  Id pregunta: 58 Año de creación de pregunta: 2016
 questions[12]= "13)  Se&ntilde;ale cu&aacute;l de los siguientes apartados NO ha sido declarado como servicio compartido en la Administraci&oacute;n General del Estado:";
 choices[12]= new Array();
 choices[12][0] = "Servicio com&uacute;n de gesti&oacute;n econ&oacute;mico-presupuestaria";
 choices[12][1] = "Servicio com&uacute;n de georreferenciaci&oacute;n";
 choices[12][2] = "Servicio de seguridad gestionada";
 choices[12][3] = "Servicio de gesti&oacute;n de notificaciones";
 answers[12] = choices[12][1];
 units[12] = "26";
 comments[12] = "Id Pregunta: 58. AGE A1 2015";


//  Id pregunta: 90 Año de creación de pregunta: 2016
 questions[13]= "14)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad (ENS) en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, el an&aacute;lisis y gesti&oacute;n de riesgos es una parte esencial del proceso de seguridad, debiendo mantenerse permanentemente actualizado. Para ello, el propio ENS establece que se debe realizar un an&aacute;lisis de riesgos formal para los sistemas de:";
 choices[13]= new Array();
 choices[13][0] = "Categor&iacute;a b&aacute;sica";
 choices[13][1] = "Categor&iacute;a media";
 choices[13][2] = "Categor&iacute;a alta";
 choices[13][3] = "Categor&iacute;a media y alta";
 answers[13] = choices[13][2];
 units[13] = "46";
 comments[13] = "Id Pregunta: 90. AGE A1 2015";


//  Id pregunta: 550 Año de creación de pregunta: 2016
 questions[14]= "15)  El &aacute;mbito de aplicaci&oacute;n del RD 806/2014 de Gobernanza TIC es:";
 choices[14]= new Array();
 choices[14][0] = "La Administraci&oacute;n General del Estado";
 choices[14][1] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos";
 choices[14][2] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos y las Comunidades Aut&oacute;nomas";
 choices[14][3] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos, las Comunidades Aut&oacute;nomas y las Entidades Locales";
 answers[14] = choices[14][1];
 units[14] = "26";
 comments[14] = "Id Pregunta: 550. Gobernanza TIC";


//  Id pregunta: 435 Año de creación de pregunta: 2016
 questions[15]= "16)  Sobre el servicio com&uacute;n Autentica, se&ntilde;ale la respuesta correcta:";
 choices[15]= new Array();
 choices[15][0] = "Autentica ofrece &uacute;nicamente servicios de autenticaci&oacute;n de empleados p&uacute;blicos de las AA.PP. y usuarios relacionados,";
 choices[15][1] = "Su objetivo es constituirse como el servicio com&uacute;n compartido de referencia para los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado, para sus aplicaciones internas.";
 choices[15][2] = "El servicio provee atributos de los usuarios autenticados relacionados con la unidad y el puesto de destino, incluyendo correo electr&oacute;nico y tel&eacute;fono.";
 choices[15][3] = "Ofrece funcionalidad de autorizaci&oacute;n de usuarios, &uacute;nicamente pertenecientes a la Administraci&oacute;n General del Estado.";
 answers[15] = choices[15][2];
 units[15] = "43";
 comments[15] = "Id Pregunta: 435. SERVICIOS COMUNES";


//  Id pregunta: 442 Año de creación de pregunta: 2016
 questions[16]= "17)  Sobre la gu&iacute;a de Comunicaci&oacute;n Digital de la AGE, se&ntilde;ale la respuesta falsa:";
 choices[16]= new Array();
 choices[16][0] = "La Gu&iacute;a de Comunicaci&oacute;n Digital para la AGE ofrece un marco de criterios, recomendaciones y buenas pr&aacute;cticas a considerar al crear, generar contenidos o evolucionar sitios web, sedes electr&oacute;nicas o tambi&eacute;n blogs, cuentas o perfiles de redes sociales.";
 choices[16][1] = "Recoge aspectos como la imagen Institucional: uso de los logotipos del Gobierno de Espa&ntilde;a, elementos distintivos de imagen en las redes sociales o la imagen promocional de la administraci&oacute;n electr&oacute;nica.";
 choices[16][2] = "Se divide en tres partes, con fasc&iacute;culos que pueden ser utilizados independientemente seg&uacute;n las necesidades de cada responsable del sitio web.";
 choices[16][3] = "La &laquo;Gu&iacute;a de Comunicaci&oacute;n Digital para la Administraci&oacute;n General del Estado&raquo; que se aprueba mediante la presente Resoluci&oacute;n se aplicar&aacute; al a&ntilde;o siguiente al de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 answers[16] = choices[16][3];
 units[16] = "43";
 comments[16] = "Id Pregunta: 442. SERVICIOS COMUNES";


//  Id pregunta: 742 Año de creación de pregunta: 2016
 questions[17]= "18)  Uno de los objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[17]= new Array();
 choices[17][0] = "Proveer de manera compartida servicios comunes";
 choices[17][1] = "El canal digital ha de ser el medio preferido por ciudadanos y empresas para relacionarse con la Administraci&oacute;n.";
 choices[17][2] = "Orientaci&oacute;n al usuario del servicio.";
 choices[17][3] = "Transparencia";
 answers[17] = choices[17][1];
 units[17] = "28";
 comments[17] = "Id Pregunta: 742. Estrategia TIC";


//  Id pregunta: 73 Año de creación de pregunta: 2016
 questions[18]= "19)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Digitalizaci&oacute;n de Documentos, &iquest;cu&aacute;l de los siguientes metadatos no es considerado como metadato complementario?";
 choices[18]= new Array();
 choices[18][0] = "Resoluci&oacute;n, que indica el valor de resoluci&oacute;n en p&iacute;xeles por pulgada empleada en la digitalizaci&oacute;n.";
 choices[18][1] = "Origen, que indica si el contenido del documento fue creado por un ciudadano o por una administraci&oacute;n.";
 choices[18][2] = "Tama&ntilde;o, que indica el valor y unidades del tama&ntilde;o l&oacute;gico del documento digitalizado.";
 choices[18][3] = "Idioma, que indica el idioma del contenido del documento digitalizado.";
 answers[18] = choices[18][1];
 units[18] = "44";
 comments[18] = "Id Pregunta: 73. AGE A1 2015";


//  Id pregunta: 99 Año de creación de pregunta: 2016
 questions[19]= "20)  En cuanto a la imputaci&oacute;n de costes de los servicios compartidos en la Administraci&oacute;n General del Estado, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[19]= new Array();
 choices[19][0] = "Seg&uacute;n establece el Real Decreto 806/2014 el coste, caso de ocasionarse, ser&aacute; asumido &iacute;ntegramente por la Direcci&oacute;n de Tecnolog&iacute;as de las Informaci&oacute;n y Comunicaciones.";
 choices[19][1] = "Se sufragar&aacute;n con cargo a los presupuestos de Presidencia del Gobierno dado el car&aacute;cter horizontal del servicio compartido.";
 choices[19][2] = "La declaraci&oacute;n de todo servicio compartido deber&aacute; indicar si existe compensaci&oacute;n econ&oacute;mica al proveedor.";
 choices[19][3] = "No existir&aacute;, dado que su gratuidad y libertad de acceso es consustancial a la idea de servicio compartido.";
 answers[19] = choices[19][2];
 units[19] = "26";
 comments[19] = "Id Pregunta: 99. AGE A1 2015: actualmente la Secretar&iacute;a General de Administraci&oacute;n Digital asume las funciones de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 739 Año de creación de pregunta: 2016
 questions[20]= "21)  En el Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE, las administraciones p&uacute;blicas y las instituciones p&uacute;blicas de la Uni&oacute;n Europea deben ser abiertas, eficaces e integradoras en el a&ntilde;o:";
 choices[20]= new Array();
 choices[20][0] = "2025";
 choices[20][1] = "2023";
 choices[20][2] = "2030";
 choices[20][3] = "2020";
 answers[20] = choices[20][3];
 units[20] = "28";
 comments[20] = "Id Pregunta: 739. Estrategia TIC";


//  Id pregunta: 720 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Qui&eacute;n es el responsable de transladar la metodolog&iacute;a lean al software?";
 choices[21]= new Array();
 choices[21][0] = "Eric Ries";
 choices[21][1] = "Steve Blank";
 choices[21][2] = "Tom Poppendieck";
 choices[21][3] = "Alexander Osterwalder";
 answers[21] = choices[21][2];
 units[21] = "34";
 comments[21] = "Id Pregunta: 720. Metodologias Lean";


//  Id pregunta: 20 Año de creación de pregunta: 2016
 questions[22]= "23)  Con respecto al &aacute;mbito objetivo de aplicaci&oacute;n de la Ley 37/2007, de 16 de noviembre, sobre reutilizaci&oacute;n de la informaci&oacute;n del sector p&uacute;blico:";
 choices[22]= new Array();
 choices[22][0] = "Abarca el intercambio de documentos entre Administraciones y organismos del sector p&uacute;blico en el ejercicio de las funciones p&uacute;blicas que tengan atribuidas.";
 choices[22][1] = "Ser&aacute; aplicable incluso sobre los documentos que obran en las Administraciones y organismos del sector p&uacute;blico para finalidades ajenas a sus funciones de servicio p&uacute;blico.";
 choices[22][2] = "No afecta a la existencia de derechos de propiedad intelectual de las Administraciones y organismos del sector p&uacute;blico ni a su posesi&oacute;n por &eacute;stos.";
 choices[22][3] = "Fija la prevalencia del derecho fundamental a la protecci&oacute;n de datos de car&aacute;cter personal, a&uacute;n cuando se apliquen medidas de disociaci&oacute;n de datos.";
 answers[22] = choices[22][2];
 units[22] = "27";
 comments[22] = "Id Pregunta: 20. AGE A1 2015";


//  Id pregunta: 609 Año de creación de pregunta: 2016
 questions[23]= "24)  Seg&uacute;n Magerit v3, en el desarrollo de sistemas de informaci&oacute;n:";
 choices[23]= new Array();
 choices[23][0] = "La seguridad debe estar embebida en el sistema desde su primera concepci&oacute;n.";
 choices[23][1] = "La seguridad comenzar&aacute; a considerarse formalmente cuando finalice el proceso de implantaci&oacute;n de sistemas de informaci&oacute;n.";
 choices[23][2] = "La seguridad del sistema de informaci&oacute;n es m&aacute;s econ&oacute;mica implantarla una vez puesto en producci&oacute;n el sistema de informaci&oacute;n que tenerla en consideraci&oacute;n durante el desarrollo del sistema.";
 choices[23][3] = "La seguridad s&oacute;lo ralentiza el proceso de desarrollo de sistemas de informaci&oacute;n por lo que s&oacute;lo se debe considerar en aquellos sistemas que usen datos econ&oacute;micos.";
 answers[23] = choices[23][0];
 units[23] = "45";
 comments[23] = "Id Pregunta: 609. Junta de Extremadura A1 2015";


//  Id pregunta: 76 Año de creación de pregunta: 2016
 questions[24]= "25)  El proceso de auditor&iacute;a de sistemas de informaci&oacute;n se considera como un proceso:";
 choices[24]= new Array();
 choices[24][0] = "Estrat&eacute;gico";
 choices[24][1] = "Operativo";
 choices[24][2] = "T&aacute;ctico";
 choices[24][3] = "Tecnol&oacute;gico";
 answers[24] = choices[24][0];
 units[24] = "36";
 comments[24] = "Id Pregunta: 76. AGE A1 2015";


//  Id pregunta: 87 Año de creación de pregunta: 2016
 questions[25]= "26)  Respecto a la pol&iacute;tica de normalizaci&oacute;n TIC en la Uni&oacute;n Europea, como se&ntilde;ala el Reglamento 1025/2012 del Parlamento y del Consejo, la identificaci&oacute;n de especificaciones t&eacute;cnicas de las TIC admisibles a efectos de referenciaci&oacute;n:";
 choices[25]= new Array();
 choices[25][0] = "Ha de estar siempre basada en normas de estandarizaci&oacute;n nacionales, europeas o internacionales.";
 choices[25][1] = "No deben ser usadas para permitir la interoperabilidad en la contrataci&oacute;n p&uacute;blica, dado que se podr&iacute;an dar situaciones monopol&iacute;sticas.";
 choices[25][2] = "Ser&aacute; realizada por la Comisi&oacute;n, bien a propuesta de un Estado miembro o por iniciativa propia, sin necesidad de ser una norma nacional, europea o internacional, cumpli&eacute;ndose los dem&aacute;s requisitos establecidos en el reglamento.";
 choices[25][3] = "Requieren para su adopci&oacute;n la unanimidad de todos los Estados miembro.";
 answers[25] = choices[25][2];
 units[25] = "48";
 comments[25] = "Id Pregunta: 87. AGE A1 2015";


//  Id pregunta: 737 Año de creación de pregunta: 2016
 questions[26]= "27)  Son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[26]= new Array();
 choices[26][0] = "Tranparencia, innovaci&oacute;n, Unidad y visi&oacute;n integral y Orientaci&oacute;n al usuario del servicio";
 choices[26][1] = "Tranparencia, Colaboraci&oacute;n y alianzas, Orientaci&oacute;n al usuario del servicio y Reutilizaci&oacute;n";
 choices[26][2] = "Reutilizaci&oacute;n, Seguridad, Orientaci&oacute;n al usuario del servicio y Transparencia";
 choices[26][3] = "Ninguna de las anteriores";
 answers[26] = choices[26][0];
 units[26] = "28";
 comments[26] = "Id Pregunta: 737. Estrategia TIC";


//  Id pregunta: 77 Año de creación de pregunta: 2016
 questions[27]= "28)  Respecto al uso de servicios de firma de documentos electr&oacute;nicos mediante certificados electr&oacute;nicos centralizados, mediante el sistema Cl@ve, indique cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[27]= new Array();
 choices[27][0] = "Para poder acceder al servicio, el usuario deber&aacute; solicitar previa y expresamente la emisi&oacute;n de los certificados electr&oacute;nicos centralizados correspondientes.";
 choices[27][1] = "Los certificados electr&oacute;nicos centralizados ser&aacute;n emitidos con las mismas garant&iacute;as de identificaci&oacute;n del DNI electr&oacute;nico del ciudadano.";
 choices[27][2] = "El acceso al servicio requiere en todo caso que el usuario se haya registrado en Cl@ve y haya activado su Cl@ve permanente.";
 choices[27][3] = "En el momento de la identificaci&oacute;n, se requerir&aacute; la utilizaci&oacute;n de una verificaci&oacute;n de seguridad adicional mediante un c&oacute;digo de un solo uso y validez limitada en el tiempo que se enviar&aacute; al tel&eacute;fono m&oacute;vil del usuario registrado.";
 answers[27] = choices[27][2];
 units[27] = "47";
 comments[27] = "Id Pregunta: 77. AGE A1 2015";


//  Id pregunta: 547 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Cu&aacute;l es la nueva denominaci&oacute;n para la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n tras la aprobaci&oacute;n del Real Decreto 424/2016, de 11 de noviembre, por el que se establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales?";
 choices[28]= new Array();
 choices[28][0] = "Subsecretar&iacute;a de Energ&iacute;a, Turismo y Agenda Digital";
 choices[28][1] = "Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[28][2] = "Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[28][3] = "Secretar&iacute;a de Estado de Administraci&oacute;n Digital";
 answers[28] = choices[28][1];
 units[28] = "26";
 comments[28] = "Id Pregunta: 547. Gobernanza TIC";


//  Id pregunta: 725 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Cu&aacute;les son las caracter&iacute;sticas del sprint 0 en SCRUM?";
 choices[29]= new Array();
 choices[29][0] = "Se dejan listos los entornos de desarrollo";
 choices[29][1] = "Se trabaja en el product backlog, dejando listos los product backlog &iacute;tems priorizados y estimados";
 choices[29][2] = "Se hace una previsi&oacute;n del reparto de historias de usuario por iteraci&oacute;n";
 choices[29][3] = "Todas las anteriores son correctas";
 answers[29] = choices[29][3];
 units[29] = "34, 84";
 comments[29] = "Id Pregunta: 725. Metodologias &aacute;giles";


//  Id pregunta: 2 Año de creación de pregunta: 2016
 questions[30]= "31)  La estrategia de comunicaci&oacute;n de un nuevo proyecto estrat&eacute;gico TIC NO debe:";
 choices[30]= new Array();
 choices[30][0] = "Posponerse a la puesta en producci&oacute;n del proyecto sin incidencias significativas.";
 choices[30][1] = "Presentar prototipos que muestren la evoluci&oacute;n del desarrollo ya realizado.";
 choices[30][2] = "Dise&ntilde;ar una campa&ntilde;a de difusi&oacute;n y promoci&oacute;n del proyecto.";
 choices[30][3] = "Asegurar la implicaci&oacute;n de representantes de todas las unidades afectadas.";
 answers[30] = choices[30][0];
 units[30] = "31";
 comments[30] = "Id Pregunta: 2. AGE A1 2015";


//  Id pregunta: 728 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest; Cu&aacute;l es el n&uacute;mero de personas recomendados para cada team de Scrum?";
 choices[31]= new Array();
 choices[31][0] = "De 1a  4 ";
 choices[31][1] = "De 3 a  7 ";
 choices[31][2] = "De 5 a  9";
 choices[31][3] = "De 7 a 11";
 answers[31] = choices[31][2];
 units[31] = "34, 84";
 comments[31] = "Id Pregunta: 728. Metodologias &aacute;giles";


//  Id pregunta: 600 Año de creación de pregunta: 2016
 questions[32]= "33)  Entre la documentaci&oacute;n de la Seguridad de la Organizaci&oacute;n nos podremos encontrar:";
 choices[32]= new Array();
 choices[32][0] = "La Pol&iacute;tica de Seguridad Corporativa ser&aacute; elaborada por el Responsable de Seguridad Corporativa y aprobada por el Comit&eacute; de Seguridad Corporativa y por la Alta Direcci&oacute;n.";
 choices[32][1] = "La Pol&iacute;tica de Seguridad de las TIC que debe estar alineada en todo momento con el Mantenimiento de los Sistemas de Informaci&oacute;n.";
 choices[32][2] = "El Documento de Seguridad que ha de estar presente en toda documentaci&oacute;n de la seguridad de la informaci&oacute;n.";
 choices[32][3] = "Todas las respuestas anteriores son correctas.";
 answers[32] = choices[32][0];
 units[32] = "45";
 comments[32] = "Id Pregunta: 600. Junta de Extremadura A1 2015";


//  Id pregunta: 734 Año de creación de pregunta: 2016
 questions[33]= "34)  Indique la opci&oacute;n correcta en relaci&oacute;n con la VISI&Oacute;N de la Estrategia TIC";
 choices[33]= new Array();
 choices[33][0] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser electr&oacute;nica.";
 choices[33][1] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser digital.";
 choices[33][2] = "Para el a&ntilde;o 2020 ya no existir&aacute; ning&uacute;n procedimiento en soporte papel.";
 choices[33][3] = "En el a&ntilde;o 2020 los funcionarios realizar&aacute;n todas sus tareas con ordenador.";
 answers[33] = choices[33][1];
 units[33] = "28";
 comments[33] = "Id Pregunta: 734. Estrategia TIC";


//  Id pregunta: 51 Año de creación de pregunta: 2016
 questions[34]= "35)  De acuerdo con el Real Decreto 1720/2007 indique qu&eacute; medida ha de ser aplicada obligatoriamente a los ficheros de los que sean responsables las Administraciones tributarias en el ejercicio de sus potestades tributarias:";
 choices[34]= new Array();
 choices[34][0] = "Cifrado de las comunicaciones";
 choices[34][1] = "Al menos, una auditor&iacute;a bienal (cada 2 a&ntilde;os)";
 choices[34][2] = "Registro de los accesos";
 choices[34][3] = "No queda regulado en dicho Real Decreto al depender de la criticidad del fichero.";
 answers[34] = choices[34][1];
 units[34] = "35";
 comments[34] = "Id Pregunta: 51. AGE A1 2015. Pregunta anulada en el examen real, ya que la opci&oacute;n B dec&iacute;a &quot;bianual&quot; en lugar de &quot;bienal&quot;";


//  Id pregunta: 80 Año de creación de pregunta: 2016
 questions[35]= "36)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, se&ntilde;ale la respuesta correcta respecto a la auditor&iacute;a de seguridad:";
 choices[35]= new Array();
 choices[35][0] = "Se realizar&aacute;, al menos, cada dieciocho meses para los sistemas de todas las categor&iacute;as, y con car&aacute;cter extraordinario, siempre que se produzcan modificaciones sustanciales en el sistema de informaci&oacute;n, que puedan repercutir en las medidas de seguridad requeridas.";
 choices[35][1] = "El equipo auditor, en el dise&ntilde;o de sus pruebas y revisiones, debe limitarse a la revisi&oacute;n de documentos facilitados por los responsables de la informaci&oacute;n, del servicio y de seguridad.";
 choices[35][2] = "Cuando existan razones que lo justifiquen, dentro de las tareas de la auditoria de seguridad podr&aacute;n incluirse adem&aacute;s la ejecuci&oacute;n de trabajos de consultor&iacute;a.";
 choices[35][3] = "El informe de auditor&iacute;a deber&aacute; dictaminar sobre la adecuaci&oacute;n de las medidas exigidas por el Esquema Nacional de Seguridad, identificar sus deficiencias y proponer las medidas correctoras o complementarias necesarias.";
 answers[35] = choices[35][3];
 units[35] = "46";
 comments[35] = "Id Pregunta: 80. AGE A1 2015";


//  Id pregunta: 75 Año de creación de pregunta: 2016
 questions[36]= "37)  Las transferencias internacionales de datos de car&aacute;cter personal:";
 choices[36]= new Array();
 choices[36][0] = "Se regulan en los art&iacute;culos 33 y 34 de la Ley Org&aacute;nica 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal y en el T&iacute;tulo VI del Real Decreto 1720/2007 por el que se aprueba el Reglamento de desarrollo de la Ley Org&aacute;nica 15/1999.";
 choices[36][1] = "Una transferencia internacional de datos, es un tratamiento de datos que supone una transmisi&oacute;n de los mismos fuera del territorio de la Uni&oacute;n Europea (UE).";
 choices[36][2] = "La Decisi&oacute;n de la Comisi&oacute;n 2000/520/CE, con arreglo a la Directiva 95/46/CE, permite actualmente realizar transferencias de datos a Estados Unidos si se cumplen los principios del acuerdo de Puerto Seguro.";
 choices[36][3] = "Precisan, en todo caso, la autorizaci&oacute;n previa de la Direcci&oacute;n de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[36] = choices[36][0];
 units[36] = "35";
 comments[36] = "Id Pregunta: 75. AGE A1 2015";


//  Id pregunta: 89 Año de creación de pregunta: 2016
 questions[37]= "38)  En un contrato cuyo presupuesto es de 100.000 euros sin IVA y se adjudica por 80.000, IVA excluido, la garant&iacute;a definitiva ser&aacute; de:";
 choices[37]= new Array();
 choices[37][0] = "2.400 euros";
 choices[37][1] = "4.000 euros";
 choices[37][2] = "3.200 euros";
 choices[37][3] = "1.600 euros";
 answers[37] = choices[37][1];
 units[37] = "37";
 comments[37] = "Id Pregunta: 89. AGE A1 2015";


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


//  Id pregunta: 735 Año de creación de pregunta: 2016
 questions[39]= "40)  Son l&iacute;neas de acci&oacute;n del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP.";
 choices[39]= new Array();
 choices[39][0] = "Disponer de sistemas de an&aacute;lisis de datos para la toma de decisiones y de funcionarios formados adecuadamente.";
 choices[39][1] = "Que en el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser electr&oacute;nica.";
 choices[39][2] = "Un mejor formaci&oacute;n del funcionariado y una atenci&oacute;n al ciudadano acorde a las nuevas tecnolog&iacute;as.";
 choices[39][3] = "Desarrollar el puesto de trabajo digital y mejorar la satisfacci&oacute;n del usuario en el uso de los servicios p&uacute;blicos digitales.";
 answers[39] = choices[39][3];
 units[39] = "28";
 comments[39] = "Id Pregunta: 735. Estrategia TIC";


//  Id pregunta: 62 Año de creación de pregunta: 2016
 questions[40]= "41)  El art&iacute;culo 102 del Real Decreto 1720/2007, por el que se determina la conservaci&oacute;n de una copia de respaldo de los datos y de los procedimientos de recuperaci&oacute;n de los mismos en un lugar diferente de aquel en que se encuentren los equipos inform&aacute;ticos que los tratan, &iquest;a qu&eacute; nivel o niveles de medidas de seguridad es aplicable?";
 choices[40]= new Array();
 choices[40][0] = "B&aacute;sico";
 choices[40][1] = "Medio";
 choices[40][2] = "Alto";
 choices[40][3] = "A los niveles medio y alto";
 answers[40] = choices[40][2];
 units[40] = "35";
 comments[40] = "Id Pregunta: 62. AGE A1 2015";


//  Id pregunta: 719 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;A trav&eacute;s de qu&eacute; empresa surgen las metodolog&iacute;as lean?";
 choices[41]= new Array();
 choices[41][0] = "Ford";
 choices[41][1] = "Google";
 choices[41][2] = "Toyota";
 choices[41][3] = "Facebook";
 answers[41] = choices[41][2];
 units[41] = "34";
 comments[41] = "Id Pregunta: 719. Metodologias Lean";


//  Id pregunta: 741 Año de creación de pregunta: 2016
 questions[42]= "43)  En relaci&oacute;n al principio rector Orientaci&oacute;n al usuario del servicio del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[42]= new Array();
 choices[42][0] = "Es necesario redefinir los servicios empezando por el lado del usuario, ya sea un ciudadano o un empleado p&uacute;blico, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y seguridad.";
 choices[42][1] = "Es necesario redefinir los servicios empezando por el lado del ciudadano, ya sea un funcionario o una persona f&iacute;sica, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y transparencia.";
 choices[42][2] = "Se requiere modernizar los servicios p&uacute;blicos empezando por el lado del ciudadano, ya sea un funcionario o una persona f&iacute;sica, con una vocaci&oacute;n de transparencia, usabilidad, simplicidad y accesibilidad.";
 choices[42][3] = "Es necesario redefinir los servicios empezando por el lado del usuario, ya sea un ciudadano o un empleado p&uacute;blico, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y transparencia.";
 answers[42] = choices[42][0];
 units[42] = "28";
 comments[42] = "Id Pregunta: 741. Estrategia TIC";


//  Id pregunta: 434 Año de creación de pregunta: 2016
 questions[43]= "44)  En cuanto al sistema EGEO, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[43]= new Array();
 choices[43][0] = "Permite la representaci&oacute;n de mapas tem&aacute;ticos, georreferenciados, buscador de recursos georreferenciados con filtros definidos por el usuario, y de magnitud.";
 choices[43][1] = "Utiliza &uacute;nicamente sobre mapas oficiales del Instituto Geogr&aacute;fico Nacional (IGN).";
 choices[43][2] = "Es un servicio com&uacute;n dirigido a &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[43][3] = "Para su manejo, es necesario contar con conocimientos de georreferenciaci&oacute;n.";
 answers[43] = choices[43][0];
 units[43] = "43";
 comments[43] = "Id Pregunta: 434. SERVICIOS COMUNES";


//  Id pregunta: 546 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Cu&aacute;l es el &oacute;rgano superior de gobernanza TIC en la Administraci&oacute;n General del Estado?";
 choices[44]= new Array();
 choices[44][0] = "El Comit&eacute; de Direcci&oacute;n TIC";
 choices[44][1] = "El Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[44][2] = "La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[44][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[44] = choices[44][3];
 units[44] = "26";
 comments[44] = "Id Pregunta: 546. Gobernanza TIC";


//  Id pregunta: 552 Año de creación de pregunta: 2016
 questions[45]= "46)  Entre las funciones a desarrollar por la Comisi&oacute;n Sectorial de la administraci&oacute;n electr&oacute;nica NO se encuentra:";
 choices[45]= new Array();
 choices[45][0] = "Asegurar la compatibilidad e interoperabilidad de los sistemas y aplicaciones empleados por las Administraciones P&uacute;blicas.";
 choices[45][1] = "Impulsar el desarrollo de la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a.";
 choices[45][2] = "Asegurar la cooperaci&oacute;n entre las Administraciones P&uacute;blicas para proporcionar informaci&oacute;n administrativa clara, actualizada e inequ&iacute;voca.";
 choices[45][3] = "El seguimiento de la ejecuci&oacute;n del Plan de Transformaci&oacute;n Digital";
 answers[45] = choices[45][3];
 units[45] = "26";
 comments[45] = "Id Pregunta: 552. Gobernanza TIC";


//  Id pregunta: 92 Año de creación de pregunta: 2016
 questions[46]= "47)  Seg&uacute;n AENOR, la certificaci&oacute;n es:";
 choices[46]= new Array();
 choices[46][0] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 choices[46][1] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple con los requisitos legales para salir al mercado.";
 choices[46][2] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio es beneficioso para los consumidores.";
 choices[46][3] = "La acci&oacute;n llevada a cabo por una entidad dependiente de la Administraci&oacute;n p&uacute;blica mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 answers[46] = choices[46][0];
 units[46] = "48";
 comments[46] = "Id Pregunta: 92. AGE A1 2015";


//  Id pregunta: 548 Año de creación de pregunta: 2016
 questions[47]= "48)  El principio definido en el est&aacute;ndar ISO/IEC 38500 para la Gobernanza TIC que establece la necesidad de cumplir los requerimientos regulatorios y legales es el principio de:";
 choices[47]= new Array();
 choices[47][0] = "Conformidad";
 choices[47][1] = "Responsabilidad";
 choices[47][2] = "Adquisici&oacute;n";
 choices[47][3] = "Desempe&ntilde;o";
 answers[47] = choices[47][0];
 units[47] = "26";
 comments[47] = "Id Pregunta: 548. Gobernanza TIC";


//  Id pregunta: 618 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;A qui&eacute;n est&aacute; destinado principalmente las Pautas de Accesibilidad al Contenido en la Web (WCAG)?";
 choices[48]= new Array();
 choices[48][0] = "A desarrolladores de navegadores web y reproductores multimedia.";
 choices[48][1] = "A desarrolladores de herramientas de autor, como herramientas de creaci&oacute;n de p&aacute;ginas web o de creaci&oacute;n de archivos multimedia.";
 choices[48][2] = "A desarrolladores de herramientas de evaluaci&oacute;n de la accesibilidad web.";
 choices[48][3] = "Todas las respuestas son correctas.";
 answers[48] = choices[48][2];
 units[48] = "42";
 comments[48] = "Id Pregunta: 618. Junta de Extremadura A1 2015";


//  Id pregunta: 0 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;Cu&aacute;l de los siguientes NO es un objetivo del Plan de Transformaci&oacute;n Digital de la AGE?";
 choices[49]= new Array();
 choices[49][0] = "Consolidar el tejido productivo nacional apoyando el efectivo despliegue de la Sociedad de la Informaci&oacute;n.";
 choices[49][1] = "Conseguir una mayor eficiencia en los servicios TIC comunes de la Administraci&oacute;n.";
 choices[49][2] = "Implantar una gesti&oacute;n corporativa inteligente de la informaci&oacute;n y los datos.";
 choices[49][3] = "Adoptar una estrategia corporativa de seguridad y usabilidad.";
 answers[49] = choices[49][0];
 units[49] = "26";
 comments[49] = "Id Pregunta: 0. AGE A1 2015";


//  Id pregunta: 443 Año de creación de pregunta: 2016
 questions[50]= "51)  Respecto a las comunicaciones y notificaciones electr&oacute;nicas:";
 choices[50]= new Array();
 choices[50][0] = "El servicio SIM se utiliza para el env&iacute;o de notificaciones electr&oacute;nicas.";
 choices[50][1] = "El Servicio compartido la gesti&oacute;n de notificaciones Notific@, ser&aacute; de uso obligatorio para la AGE y sus OOPP en 2017.";
 choices[50][2] = "La plataforma Notific@, recibe desde los organismos emisores, las comunicaciones y adem&aacute;s de aportar otros valores a&ntilde;adidos, las pone a disposici&oacute;n de los destinatarios en la Carpeta Ciudadana.";
 choices[50][3] = "El servicio SIM, que se ha integrado en el Servicio compartido de gesti&oacute;n de notificaciones, proporciona a los ciudadanos y empresas un buz&oacute;n seguro.";
 answers[50] = choices[50][1];
 units[50] = "43";
 comments[50] = "Id Pregunta: 443. SERVICIOS COMUNES";


//  Id pregunta: 631 Año de creación de pregunta: 2016
 questions[51]= "52)  Seg&uacute;n la Ley de Protecci&oacute;n de Datos de Car&aacute;cter Personal, no podr&aacute;n realizarse transferencias de datos de car&aacute;cter personal a pa&iacute;ses que no proporcionen un nivel de protecci&oacute;n equiparable al de esta Ley. &iquest;Qui&eacute;n se encarga de evaluar el nivel adecuado de protecci&oacute;n que ofrece el pa&iacute;s de destino de los datos?";
 choices[51]= new Array();
 choices[51][0] = "El Ministerio de Asuntos Exteriores junto con el Ministerio de Justicia.";
 choices[51][1] = "El responsable de la custodia de los datos enviados.";
 choices[51][2] = "La Agencia Europea de Cooperaci&oacute;n.";
 choices[51][3] = "La Agencia de Protecci&oacute;n de Datos.";
 answers[51] = choices[51][3];
 units[51] = "35";
 comments[51] = "Id Pregunta: 631. Junta de Extremadura A1 2015";


//  Id pregunta: 677 Año de creación de pregunta: 2016
 questions[52]= "53)  En referencia al proyecto ANDES, para la comunicaci&oacute;n telem&aacute;tica de Nacimientos desde Centros Sanitarios a Registros Civiles, indique cual de las siguientes afirmaciones es falsa:";
 choices[52]= new Array();
 choices[52][0] = "Tiene sustento legal de acuerdo a la Ley 19/2015, de 13 de julio, de medidas de reforma administrativa en el &aacute;mbito de la Administraci&oacute;n de Justicia y del Registro Civil.";
 choices[52][1] = "Se inicia a partir de su propuesta en CORA (Comisi&oacute;n para la Reforma de las Administraciones P&uacute;blicas).";
 choices[52][2] = "Reutiliza el servicio horizontal ACCEDA en modo cloud, lo cual ha facilitado la pronta puesta en marcha de la soluci&oacute;n.";
 choices[52][3] = "La utilizaci&oacute;n de ANDES por parte de los hospitales es completamente transparente, sin necesidad de realizar pasos previos para su despliegue.";
 answers[52] = choices[52][3];
 units[52] = "47";
 comments[52] = "Id Pregunta: 677. Inscripci&oacute;n autom&aacute;tica nacimientos";


//  Id pregunta: 32 Año de creación de pregunta: 2016
 questions[53]= "54)  El art&iacute;culo 16 del Esquema Nacional de Interoperabilidad establece las condiciones de licenciamiento aplicables en el &aacute;mbito de la reutilizaci&oacute;n y transferencia de tecnolog&iacute;a, &iquest;cu&aacute;l de las siguientes licencias recomienda expresamente aplicar, sin perjuicio de otras licencias que garanticen los derechos expuestos en el mencionado art&iacute;culo?";
 choices[53]= new Array();
 choices[53][0] = "ASF-AL (Apache License 2.0)";
 choices[53][1] = "EUPL (European Union Public License)";
 choices[53][2] = "LGPL (Lesser General Public License)";
 choices[53][3] = "MIT(MIT License)";
 answers[53] = choices[53][1];
 units[53] = "43";
 comments[53] = "Id Pregunta: 32. AGE A1 2015";


//  Id pregunta: 729 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;C&uacute;al es el nombre de la reuni&oacute;n de SCRUM, donde se revisan los product backlog &iacute;tems?:";
 choices[54]= new Array();
 choices[54][0] = "Backlog refinement";
 choices[54][1] = "Backlog refinement";
 choices[54][2] = "A y b son correctas";
 choices[54][3] = "Ninguna de las anteriores";
 answers[54] = choices[54][2];
 units[54] = "34, 84";
 comments[54] = "Id Pregunta: 729. Metodologias &aacute;giles";


//  Id pregunta: 724 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Cu&aacute;l es la principal desventaja de sprints m&aacute;s largos?";
 choices[55]= new Array();
 choices[55][0] = "Permite reaccionar al equipo mejor ante imprevistos";
 choices[55][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[55][2] = "Se reduce el n&uacute;mero de reuniones de sprint";
 choices[55][3] = "Se puede desarrollar algo diferente a lo requerido y obtener el feedback del cliente m&aacute;s tarde.";
 answers[55] = choices[55][3];
 units[55] = "34, 84";
 comments[55] = "Id Pregunta: 724. Metodologias &aacute;giles";


//  Id pregunta: 599 Año de creación de pregunta: 2016
 questions[56]= "57)  La pol&iacute;tica de seguridad de alto nivel de la Organizaci&oacute;n:";
 choices[56]= new Array();
 choices[56][0] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, sin entrar en detalles acerca del COMO.";
 choices[56][1] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer y COMO se debe implementar.";
 choices[56][2] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 choices[56][3] = "Debe describir QUE se intenta proteger, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 answers[56] = choices[56][0];
 units[56] = "45";
 comments[56] = "Id Pregunta: 599. Junta de Extremadura A1 2015";


//  Id pregunta: 553 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cu&aacute;l es el &oacute;rgano t&eacute;cnico de cooperaci&oacute;n de la Administraci&oacute;n General del Estado, de las Administraciones de las Comunidades Aut&oacute;nomas y de las Entidades Locales en materia de administraci&oacute;n electr&oacute;nica definido en la ley 40/2015 de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[57]= new Array();
 choices[57][0] = "La Conferencia Sectorial de Telecomunicaciones y Sociedad de la Informaci&oacute;n";
 choices[57][1] = "El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica";
 choices[57][2] = "La Comisi&oacute;n Sectorial de administraci&oacute;n electr&oacute;nica";
 choices[57][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[57] = choices[57][2];
 units[57] = "26";
 comments[57] = "Id Pregunta: 553. Gobernanza TIC";


//  Id pregunta: 731 Año de creación de pregunta: 2016
 questions[58]= "59)  Indique cual de los siguientes no forma parte del vocabulario de scrum";
 choices[58]= new Array();
 choices[58][0] = "Burn-up chart";
 choices[58][1] = "Arquitectural Skype";
 choices[58][2] = "Burn-down chart";
 choices[58][3] = "Definition of done";
 answers[58] = choices[58][1];
 units[58] = "34, 84";
 comments[58] = "Id Pregunta: 731. Metodologias &aacute;giles";


//  Id pregunta: 743 Año de creación de pregunta: 2016
 questions[59]= "60)  Dos de los principios del Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE son:";
 choices[59]= new Array();
 choices[59][0] = "Transparencia e innovaci&oacute;n";
 choices[59][1] = "Seguridad y reutilizaci&oacute;n";
 choices[59][2] = "Reutilizaci&oacute;n y buz&oacute;n de quejas y sugerencias";
 choices[59][3] = "Principio de solo una vez y transfronterizo de forma predeterminada";
 answers[59] = choices[59][3];
 units[59] = "28";
 comments[59] = "Id Pregunta: 743. Estrategia TIC";


//  Id pregunta: 718 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;C&uacute;al es un objetivo de las metodolog&iacute;as lean?";
 choices[60]= new Array();
 choices[60][0] = "Maximizar el valor para los clientes";
 choices[60][1] = "Reducir los costes y aumentar la calidad del producto o del servicio";
 choices[60][2] = " Entregar productos de manera m&aacute;s r&aacute;pida";
 choices[60][3] = "Todos los anteriores son objetivos de la metodolog&iacute;a lean";
 answers[60] = choices[60][3];
 units[60] = "34";
 comments[60] = "Id Pregunta: 718. Metodologias Lean";


//  Id pregunta: 85 Año de creación de pregunta: 2016
 questions[61]= "62)  Seg&uacute;n MAGERIT 3.0, el informe en el que se recogen los resultados de la identificaci&oacute;n de las amenazas relevantes sobre el sistema a analizar, caracterizadas por las estimaciones de ocurrencia y da&ntilde;o causado, se denomina:";
 choices[61]= new Array();
 choices[61][0] = "Estimaci&oacute;n del riesgo";
 choices[61][1] = "Evaluaci&oacute;n de salvaguardas";
 choices[61][2] = "Declaraci&oacute;n de aplicabilidad";
 choices[61][3] = "Mapa de riesgos";
 answers[61] = choices[61][3];
 units[61] = "45";
 comments[61] = "Id Pregunta: 85. AGE A1 2015";


//  Id pregunta: 444 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes definiciones NO es uno de los roles de la Plataforma de Intermediaci&oacute;n, seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Protocolos de intermediaci&oacute;n de datos?:";
 choices[62]= new Array();
 choices[62][0] = "Mantendr&aacute; un portal web informativo con toda la documentaci&oacute;n relativa a la Plataforma.";
 choices[62][1] = "Almacenar&aacute; informaci&oacute;n personal de ciudadano derivada de la transacci&oacute;n de intercambio de datos, asegurando para ello la confidencialidad e integridad de la misma a trav&eacute;s de los mecanismos correspondientes.";
 choices[62][2] = "Mantendr&aacute; un centro de atenci&oacute;n a usuarios e integradores que canalice todas las incidencias relativas al sistema.";
 choices[62][3] = "Las consultas a los servicios de verificaci&oacute;n de datos, se pueden realizar de forma automatizada desde una aplicaci&oacute;n de gesti&oacute;n de un tr&aacute;mite, adaptadas para invocar los Webservice proporcionados por el servicio.";
 answers[62] = choices[62][1];
 units[62] = "43";
 comments[62] = "Id Pregunta: 444. SERVICIOS COMUNES";


//  Id pregunta: 549 Año de creación de pregunta: 2016
 questions[63]= "64)  La gobernanza TIC incluye, entre otros, los siguientes aspectos:";
 choices[63]= new Array();
 choices[63][0] = "Integrar la estrategia TIC con la de negocio";
 choices[63][1] = "Adoptar e implantar un marco de control de las TIC";
 choices[63][2] = "Proporcionar las estructuras organizativas encargadas de implantar la estrategia TIC";
 choices[63][3] = "Todas las anteriores";
 answers[63] = choices[63][3];
 units[63] = "26";
 comments[63] = "Id Pregunta: 549. Gobernanza TIC";


//  Id pregunta: 736 Año de creación de pregunta: 2016
 questions[64]= "65)  En el Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP el principio de transparencia:";
 choices[64]= new Array();
 choices[64][0] = "El seguimiento de la actividad de los funcionarios aumenta la eficacia de los servicios p&uacute;blicos.";
 choices[64][1] = "La transparencia facilita al ciudadano el acceso a los servicios p&uacute;blicos.";
 choices[64][2] = "Una continua monitorizaci&oacute;n de la actividad, junto a la evaluaci&oacute;n y difusi&oacute;n de resultados incrementa la satisfacci&oacute;n de los ciudadanos.";
 choices[64][3] = "El seguimiento y control de la actividad pol&iacute;tica disminuye las actividades ligadas a la corrupci&oacute;n.";
 answers[64] = choices[64][2];
 units[64] = "28";
 comments[64] = "Id Pregunta: 736. Estrategia TIC";


//  Id pregunta: 436 Año de creación de pregunta: 2016
 questions[65]= "66)  Respecto a la carpeta ciudadana, se&ntilde;ale la respuesta incorrecta:";
 choices[65]= new Array();
 choices[65][0] = "Se trata de un &aacute;rea personal en la que cualquier ciudadano disponga de toda su informaci&oacute;n custodiada y gestionada por parte de la Administraci&oacute;n General del Estado.";
 choices[65][1] = "Permite comprobar el Estado de los expedientes con distintos organismos.";
 choices[65][2] = "La autenticaci&oacute;n del ciudadano se realiza a trav&eacute;s de certificados digitales.";
 choices[65][3] = "Muestra al ciudadano los Apoderamientos del Registro Electr&oacute;nico de Apoderamientos (REA), tanto para los poderdantes como los apoderados, posibilitando la revocaci&oacute;n y la renuncia respectivamente.";
 answers[65] = choices[65][2];
 units[65] = "43";
 comments[65] = "Id Pregunta: 436. SERVICIOS COMUNES";


//  Id pregunta: 676 Año de creación de pregunta: 2016
 questions[66]= "67)  En referencia a la implantaci&oacute;n de la interoperabilidad de la receta electr&oacute;nica:";
 choices[66]= new Array();
 choices[66][0] = "Permite los ciudadanos retiren sus medicamentos en las farmacias de fuera de la Comunidad Aut&oacute;noma en la que hayan sido recetados.";
 choices[66][1] = "Favorece la seguridad del paciente, al incorporar sistemas online de ayuda a la prescripci&oacute;n, que ayudan a la detecci&oacute;n de interaciones medicamentosas o duplicidades terap&eacute;uticas.";
 choices[66][2] = "Facilita al m&eacute;dico el seguimiento de la adherencia al tratamiento por parte del paciente.";
 choices[66][3] = "Todas las anteriores son correctas.";
 answers[66] = choices[66][3];
 units[66] = "47";
 comments[66] = "Id Pregunta: 676. Receta electr&oacute;nica";


//  Id pregunta: 86 Año de creación de pregunta: 2016
 questions[67]= "68)  Un contrato menor tiene una duraci&oacute;n m&aacute;xima de:";
 choices[67]= new Array();
 choices[67][0] = "Un a&ntilde;o prorrogable";
 choices[67][1] = "Dos a&ntilde;os no prorrogables";
 choices[67][2] = "Un a&ntilde;o no prorrogable";
 choices[67][3] = "Dos a&ntilde;os prorrogables";
 answers[67] = choices[67][2];
 units[67] = "37";
 comments[67] = "Id Pregunta: 86. AGE A1 2015";


//  Id pregunta: 440 Año de creación de pregunta: 2016
 questions[68]= "69)  Respecto al Sistema de Informaci&oacute;n Administrativa, se&ntilde;ale la respuesta falsa:";
 choices[68]= new Array();
 choices[68][0] = "Contiene la relaci&oacute;n de procedimientos y servicios de la AGE, y de todas las administraciones participantes.";
 choices[68][1] = "Cumple para la AGE el requisito establecido en el art&iacute;culo 9 del Esquema Nacional de Interoperabilidad, que obliga a las Administraciones p&uacute;blicas a mantener actualizado un Inventario de Informaci&oacute;n Administrativa.";
 choices[68][2] = "SIA est&aacute; dise&ntilde;ado para permitir la administraci&oacute;n distribuida y la actualizaci&oacute;n corresponsable por todas las Administraciones participantes, mediante una aplicaci&oacute;n web.";
 choices[68][3] = "Los usuarios son gestionados por una red de responsables de cada Departamento.";
 answers[68] = choices[68][2];
 units[68] = "43";
 comments[68] = "Id Pregunta: 440. SERVICIOS COMUNES";


//  Id pregunta: 84 Año de creación de pregunta: 2016
 questions[69]= "70)  En el marco europeo de interoperabilidad de sistemas de informaci&oacute;n, &iquest;qu&eacute; programa de la Uni&oacute;n Europea ha estado en vigor entre 2010 y 2015?";
 choices[69]= new Array();
 choices[69][0] = "Interchange of Data between Administrations (IDA)";
 choices[69][1] = "Interoperability Solutions for European Public Administrations (ISA)";
 choices[69][2] = "Interoperable Delivery of Pan-European eGovernment Services to Public Administrations, Businesses and Citizens (IDABC)";
 choices[69][3] = "Interoperability Electronic European Solution (IEES)";
 answers[69] = choices[69][1];
 units[69] = "43";
 comments[69] = "Id Pregunta: 84. AGE A1 2015";


//  Id pregunta: 441 Año de creación de pregunta: 2016
 questions[70]= "71)  Se&ntilde;ale la respuesta falsa respecto a Habilit@, Registro de Funcionarios Habilitados:";
 choices[70]= new Array();
 choices[70][0] = "El art&iacute;culo 12.3 de la Ley 39/2015recoge que la Administraci&oacute;n General del Estado, las Comunidades Aut&oacute;nomas y las Entidades Locales mantendr&aacute;n actualizado un registro, u otro sistema equivalente, donde constar&aacute;n los funcionarios habilitados para la identificaci&oacute;n o firma.";
 choices[70][1] = "La Orden HAP/8/2014, de 7 de enero, regula el Registro de funcionarios habilitados para la identificaci&oacute;n y autenticaci&oacute;n de ciudadanos en el &aacute;mbito de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos vinculados o dependientes.";
 choices[70][2] = "En el caso en que el ciudadano no disponga de medios de autenticaci&oacute;n y firma para relacionarse de manera electr&oacute;nica con las Administraciones, la Ley 39/2015 prev&eacute; que, siempre que el ciudadano se identifique y deje constancia de su consentimiento expreso, un funcionario podr&aacute; actuar en su nombre, utilizando el sistema de firma del que disponga para ello.";
 choices[70][3] = "Tambi&eacute;n se establece en la misma Ley 39/2015 que las Administraciones P&uacute;blicas podr&aacute;n realizar copias aut&eacute;nticas de los documentos p&uacute;blicos administrativos o privados mediante funcionario habilitado.";
 answers[70] = choices[70][1];
 units[70] = "43";
 comments[70] = "Id Pregunta: 441. SERVICIOS COMUNES";


//  Id pregunta: 723 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;C&uacute;al es la principal ventaja de sprints m&aacute;s cortos en Scrum?";
 choices[71]= new Array();
 choices[71][0] = "Permite reaccionar al equipo mejor ante imprevistos";
 choices[71][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[71][2] = "Es m&aacute;s f&aacute;cil cumplir los objetivos marcados al final de cada sprint";
 choices[71][3] = "Ninguna de las anteriores";
 answers[71] = choices[71][1];
 units[71] = "34, 84";
 comments[71] = "Id Pregunta: 723. Metodologias &aacute;giles";


//  Id pregunta: 727 Año de creación de pregunta: 2016
 questions[72]= "73)  Sobre el Scrum Team, cual es la afirmaci&oacute;n falsa";
 choices[72]= new Array();
 choices[72][0] = "Cada miembro del equipo tiene que tener un rol especifico y no puede asumir tareas que no est&eacute;n dentro de su &aacute;rea de especializaci&oacute;n.";
 choices[72][1] = "Los miembros del equipo deben tener un perfil en &lsquo;T&rsquo;";
 choices[72][2] = "Cada miembro del equipo tiene que tener un conocimiento m&aacute;s amplio de un &aacute;rea";
 choices[72][3] = "Cada miembro del equipo puede asumir cualquier tipo de tarea.";
 answers[72] = choices[72][0];
 units[72] = "34, 84";
 comments[72] = "Id Pregunta: 727. Metodologias &aacute;giles";


//  Id pregunta: 740 Año de creación de pregunta: 2016
 questions[73]= "74)  LA estructura de la Estrategia TIC:";
 choices[73]= new Array();
 choices[73][0] = "5 principios rectores, 7 principios estrat&eacute;gicos, 9 l&iacute;neas de acci&oacute;n";
 choices[73][1] = "5 principios rectores, 5 principios estrat&eacute;gicos, 7 l&iacute;neas de acci&oacute;n";
 choices[73][2] = "5 principios rectores, 5 principios estrat&eacute;gicos, 9 l&iacute;neas de acci&oacute;n";
 choices[73][3] = "5 principios rectores, 6 principios estrat&eacute;gicos, 8 l&iacute;neas de acci&oacute;n";
 answers[73] = choices[73][2];
 units[73] = "28";
 comments[73] = "Id Pregunta: 740. Estrategia TIC";


//  Id pregunta: 733 Año de creación de pregunta: 2016
 questions[74]= "75)  Cu&aacute;l de las siguientes reglas se corresponde a las reglas de la metodolog&iacute;a Kanban:";
 choices[74]= new Array();
 choices[74][0] = "Visualizar el trabajo o el flujo de trabajo. ";
 choices[74][1] = "Determinar el l&iacute;mite de trabajo en curso (Work in progress)";
 choices[74][2] = "Medir el tiempo en completar una tarea (Lead time)";
 choices[74][3] = "Todas las anteriores son reglas correspondientes a la metodolog&iacute;a Kanban.";
 answers[74] = choices[74][3];
 units[74] = "34, 84";
 comments[74] = "Id Pregunta: 733. Metodologias &aacute;giles";


