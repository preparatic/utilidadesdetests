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

//  Id pregunta: 58 Año de creación de pregunta: 2016
 questions[0]= "1)  Se&ntilde;ale cu&aacute;l de los siguientes apartados NO ha sido declarado como servicio compartido en la Administraci&oacute;n General del Estado:";
 choices[0]= new Array();
 choices[0][0] = "Servicio com&uacute;n de gesti&oacute;n econ&oacute;mico-presupuestaria";
 choices[0][1] = "Servicio com&uacute;n de georreferenciaci&oacute;n";
 choices[0][2] = "Servicio de seguridad gestionada";
 choices[0][3] = "Servicio de gesti&oacute;n de notificaciones";
 answers[0] = choices[0][1];
 units[0] = "26";
 comments[0] = "Id Pregunta: 58. AGE A1 2015";


//  Id pregunta: 441 Año de creación de pregunta: 2016
 questions[1]= "2)  Se&ntilde;ale la respuesta falsa respecto a Habilit@, Registro de Funcionarios Habilitados:";
 choices[1]= new Array();
 choices[1][0] = "El art&iacute;culo 12.3 de la Ley 39/2015recoge que la Administraci&oacute;n General del Estado, las Comunidades Aut&oacute;nomas y las Entidades Locales mantendr&aacute;n actualizado un registro, u otro sistema equivalente, donde constar&aacute;n los funcionarios habilitados para la identificaci&oacute;n o firma.";
 choices[1][1] = "La Orden HAP/8/2014, de 7 de enero, regula el Registro de funcionarios habilitados para la identificaci&oacute;n y autenticaci&oacute;n de ciudadanos en el &aacute;mbito de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos vinculados o dependientes.";
 choices[1][2] = "En el caso en que el ciudadano no disponga de medios de autenticaci&oacute;n y firma para relacionarse de manera electr&oacute;nica con las Administraciones, la Ley 39/2015 prev&eacute; que, siempre que el ciudadano se identifique y deje constancia de su consentimiento expreso, un funcionario podr&aacute; actuar en su nombre, utilizando el sistema de firma del que disponga para ello.";
 choices[1][3] = "Tambi&eacute;n se establece en la misma Ley 39/2015 que las Administraciones P&uacute;blicas podr&aacute;n realizar copias aut&eacute;nticas de los documentos p&uacute;blicos administrativos o privados mediante funcionario habilitado.";
 answers[1] = choices[1][1];
 units[1] = "43";
 comments[1] = "Id Pregunta: 441. SERVICIOS COMUNES";


//  Id pregunta: 549 Año de creación de pregunta: 2016
 questions[2]= "3)  El presidente del pleno de la Comisi&oacute;n de Estrategia TIC es :";
 choices[2]= new Array();
 choices[2][0] = "El Ministro de Energ&iacute;a, Turismo y Agenda Digital";
 choices[2][1] = "El Ministro de Hacienda y Administraciones P&uacute;blicas";
 choices[2][2] = "El Presidente del Gobierno";
 choices[2][3] = "El Secretario General de Administraci&oacute;n Digital";
 answers[2] = choices[2][1];
 units[2] = "26";
 comments[2] = "Id Pregunta: 549. Gobernanza TIC";


//  Id pregunta: 718 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Qui&eacute;n es el responsable de transladar la metodolog&iacute;a lean al software?";
 choices[3]= new Array();
 choices[3][0] = "Eric Ries";
 choices[3][1] = "Steve Blank";
 choices[3][2] = "Tom Poppendieck";
 choices[3][3] = "Alexander Osterwalder";
 answers[3] = choices[3][2];
 units[3] = "34";
 comments[3] = "Id Pregunta: 718. Metodologias Lean";


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


//  Id pregunta: 741 Año de creación de pregunta: 2016
 questions[5]= "6)  Dos de los principios del Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE son:";
 choices[5]= new Array();
 choices[5][0] = "Transparencia e innovaci&oacute;n";
 choices[5][1] = "Seguridad y reutilizaci&oacute;n";
 choices[5][2] = "Reutilizaci&oacute;n y buz&oacute;n de quejas y sugerencias";
 choices[5][3] = "Principio de solo una vez y transfronterizo de forma predeterminada";
 answers[5] = choices[5][3];
 units[5] = "28";
 comments[5] = "Id Pregunta: 741. Estrategia TIC";


//  Id pregunta: 543 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Qu&eacute; est&aacute;ndar ISO define un marco de trabajo para la gobernanza TIC?";
 choices[6]= new Array();
 choices[6][0] = "ISO/IEC 31000";
 choices[6][1] = "ISO/IEC 14000";
 choices[6][2] = "ISO/IEC 38500";
 choices[6][3] = "ISO/IEC 18000";
 answers[6] = choices[6][2];
 units[6] = "26";
 comments[6] = "Id Pregunta: 543. Gobernanza TIC";


//  Id pregunta: 728 Año de creación de pregunta: 2016
 questions[7]= "8)  Indica la respuesta correcta";
 choices[7]= new Array();
 choices[7][0] = "Scrum no implica baja documentaci&oacute;n, de hecho hay estudios que estiman que es totalmente compatible con CMMI-3";
 choices[7][1] = "Scrum es una metodolog&iacute;a poco organizada";
 choices[7][2] = "Scrum no suele incluir a testers en el SCRUM TEAM";
 choices[7][3] = "En Scrum, sufre la calidad del producto o servicio al no pasar procesos de calidad reglados";
 answers[7] = choices[7][0];
 units[7] = "34, 84";
 comments[7] = "Id Pregunta: 728. Metodologias &aacute;giles";


//  Id pregunta: 630 Año de creación de pregunta: 2016
 questions[8]= "9)  Seg&uacute;n el Reglamento de Medidas de Seguridad de Ficheros Automatizados con Datos de Car&aacute;cter Personal, los ficheros que contengan datos de ideolog&iacute;a, religi&oacute;n, creencias, origen racial, salud o vida sexual, &iquest;qu&eacute; medidas de seguridad deber&aacute;n adoptar?";
 choices[8]= new Array();
 choices[8][0] = "De nivel b&aacute;sico y nivel medio.";
 choices[8][1] = "De nivel alto.";
 choices[8][2] = "De nivel medio y nivel alto.";
 choices[8][3] = "De nivel b&aacute;sico, nivel medio y nivel alto.";
 answers[8] = choices[8][3];
 units[8] = "35";
 comments[8] = "Id Pregunta: 630. Junta de Extremadura A1 2015";


//  Id pregunta: 722 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Cu&aacute;l es la principal desventaja de sprints m&aacute;s largos?";
 choices[9]= new Array();
 choices[9][0] = "Permite reaccionar al equipo mejor ante imprevistos";
 choices[9][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[9][2] = "Se reduce el n&uacute;mero de reuniones de sprint";
 choices[9][3] = "Se puede desarrollar algo diferente a lo requerido y obtener el feedback del cliente m&aacute;s tarde.";
 answers[9] = choices[9][3];
 units[9] = "34, 84";
 comments[9] = "Id Pregunta: 722. Metodologias &aacute;giles";


//  Id pregunta: 442 Año de creación de pregunta: 2016
 questions[10]= "11)  Sobre la gu&iacute;a de Comunicaci&oacute;n Digital de la AGE, se&ntilde;ale la respuesta falsa:";
 choices[10]= new Array();
 choices[10][0] = "La Gu&iacute;a de Comunicaci&oacute;n Digital para la AGE ofrece un marco de criterios, recomendaciones y buenas pr&aacute;cticas a considerar al crear, generar contenidos o evolucionar sitios web, sedes electr&oacute;nicas o tambi&eacute;n blogs, cuentas o perfiles de redes sociales.";
 choices[10][1] = "Recoge aspectos como la imagen Institucional: uso de los logotipos del Gobierno de Espa&ntilde;a, elementos distintivos de imagen en las redes sociales o la imagen promocional de la administraci&oacute;n electr&oacute;nica.";
 choices[10][2] = "Se divide en tres partes, con fasc&iacute;culos que pueden ser utilizados independientemente seg&uacute;n las necesidades de cada responsable del sitio web.";
 choices[10][3] = "La &laquo;Gu&iacute;a de Comunicaci&oacute;n Digital para la Administraci&oacute;n General del Estado&raquo; que se aprueba mediante la presente Resoluci&oacute;n se aplicar&aacute; al a&ntilde;o siguiente al de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 answers[10] = choices[10][3];
 units[10] = "43";
 comments[10] = "Id Pregunta: 442. SERVICIOS COMUNES";


//  Id pregunta: 545 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Cu&aacute;l es la nueva denominaci&oacute;n para la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n tras la aprobaci&oacute;n del Real Decreto 424/2016, de 11 de noviembre, por el que se establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales?";
 choices[11]= new Array();
 choices[11][0] = "Subsecretar&iacute;a de Energ&iacute;a, Turismo y Agenda Digital";
 choices[11][1] = "Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[11][2] = "Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[11][3] = "Secretar&iacute;a de Estado de Administraci&oacute;n Digital";
 answers[11] = choices[11][1];
 units[11] = "26";
 comments[11] = "Id Pregunta: 545. Gobernanza TIC";


//  Id pregunta: 629 Año de creación de pregunta: 2016
 questions[12]= "13)  Seg&uacute;n la Ley de Protecci&oacute;n de Datos de Car&aacute;cter Personal, no podr&aacute;n realizarse transferencias de datos de car&aacute;cter personal a pa&iacute;ses que no proporcionen un nivel de protecci&oacute;n equiparable al de esta Ley. &iquest;Qui&eacute;n se encarga de evaluar el nivel adecuado de protecci&oacute;n que ofrece el pa&iacute;s de destino de los datos?";
 choices[12]= new Array();
 choices[12][0] = "El Ministerio de Asuntos Exteriores junto con el Ministerio de Justicia.";
 choices[12][1] = "El responsable de la custodia de los datos enviados.";
 choices[12][2] = "La Agencia Europea de Cooperaci&oacute;n.";
 choices[12][3] = "La Agencia de Protecci&oacute;n de Datos.";
 answers[12] = choices[12][3];
 units[12] = "35";
 comments[12] = "Id Pregunta: 629. Junta de Extremadura A1 2015";


//  Id pregunta: 82 Año de creación de pregunta: 2016
 questions[13]= "14)  La titularidad de los derechos de explotaci&oacute;n de un programa de ordenador por una persona jur&iacute;dica expirar&aacute;:";
 choices[13]= new Array();
 choices[13][0] = "A los setenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[13][1] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita, o al de su creaci&oacute;n si no se hubiera divulgado.";
 choices[13][2] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[13][3] = "A los setenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita o al de su creaci&oacute;n si no se hubiera divulgado.";
 answers[13] = choices[13][3];
 units[13] = "41";
 comments[13] = "Id Pregunta: 82. AGE A1 2015";


//  Id pregunta: 19 Año de creación de pregunta: 2016
 questions[14]= "15)  En el sistema de Identificaci&oacute;n, Autenticaci&oacute;n y Firma Electr&oacute;nica com&uacute;n para todo el Sector P&uacute;blico Administrativo Estatal (cl@ve):";
 choices[14]= new Array();
 choices[14][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital es el proveedor &uacute;nico de servicios de verificaci&oacute;n de la identidad.";
 choices[14][1] = "Sus destinatarios son exclusivamente ciudadanos espa&ntilde;oles.";
 choices[14][2] = "Su &aacute;mbito de aplicaci&oacute;n podr&aacute; extenderse a otras Administraciones P&uacute;blicas mediante la formalizaci&oacute;n del oportuno convenio.";
 choices[14][3] = "No se requiere registro previo de usuarios, ni consentimiento del usuario ya registrado en otros sistemas previos de identificaci&oacute;n, autenticaci&oacute;n y firma.";
 answers[14] = choices[14][2];
 units[14] = "47";
 comments[14] = "Id Pregunta: 19. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 8 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Cu&aacute;l de las siguientes NO es una funci&oacute;n de la Secretar&iacute;a General de Administraci&oacute;n Digital?";
 choices[15]= new Array();
 choices[15][0] = "Establecer los mecanismos que aseguren un adecuado mantenimiento del censo de activos TIC.";
 choices[15][1] = "El estudio y la implementaci&oacute;n de modelos para incentivar la compartici&oacute;n y reutilizaci&oacute;n de las infraestructuras y aplicaciones sectoriales, y promover el desarrollo de aplicaciones bajo dicho modelo.";
 choices[15][2] = "La supervisi&oacute;n y coordinaci&oacute;n del registro de convenios del sector p&uacute;blico estatal, de acuerdo con la informaci&oacute;n que deber&aacute;n suministrar los diferentes departamentos ministeriales y dem&aacute;s organismos p&uacute;blicos suscriptores de los mismos.";
 choices[15][3] = "El desarrollo, impulso e implantaci&oacute;n de sistemas tecnol&oacute;gicos de apoyo para la gesti&oacute;n de recursos humanos, incluidos los sistemas del Registro Central de Personal.";
 answers[15] = choices[15][2];
 units[15] = "26";
 comments[15] = "Id Pregunta: 8. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 76 Año de creación de pregunta: 2016
 questions[16]= "17)  El proceso de auditor&iacute;a de sistemas de informaci&oacute;n se considera como un proceso:";
 choices[16]= new Array();
 choices[16][0] = "Estrat&eacute;gico";
 choices[16][1] = "Operativo";
 choices[16][2] = "T&aacute;ctico";
 choices[16][3] = "Tecnol&oacute;gico";
 answers[16] = choices[16][0];
 units[16] = "36";
 comments[16] = "Id Pregunta: 76. AGE A1 2015";


//  Id pregunta: 550 Año de creación de pregunta: 2016
 questions[17]= "18)  Entre las funciones a desarrollar por la Comisi&oacute;n Sectorial de la administraci&oacute;n electr&oacute;nica NO se encuentra:";
 choices[17]= new Array();
 choices[17][0] = "Asegurar la compatibilidad e interoperabilidad de los sistemas y aplicaciones empleados por las Administraciones P&uacute;blicas.";
 choices[17][1] = "Impulsar el desarrollo de la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a.";
 choices[17][2] = "Asegurar la cooperaci&oacute;n entre las Administraciones P&uacute;blicas para proporcionar informaci&oacute;n administrativa clara, actualizada e inequ&iacute;voca.";
 choices[17][3] = "El seguimiento de la ejecuci&oacute;n del Plan de Transformaci&oacute;n Digital";
 answers[17] = choices[17][3];
 units[17] = "26";
 comments[17] = "Id Pregunta: 550. Gobernanza TIC";


//  Id pregunta: 43 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Cu&aacute;l de los siguientes principios NO est&aacute; recogido en el Manifiesto por el Desarrollo &Aacute;gil del Software?";
 choices[18]= new Array();
 choices[18][0] = "La simplicidad, o el arte de maximizar la cantidad de trabajo no realizado, es esencial.";
 choices[18][1] = "Aceptamos que los requisitos cambien, incluso en etapas tard&iacute;as del desarrollo. Los procesos &aacute;giles aprovechan el cambio para proporcionar ventaja competitiva al cliente.";
 choices[18][2] = "Las mejores arquitecturas, requisitos y dise&ntilde;os emergen por la aplicaci&oacute;n de unos procesos bien organizados.";
 choices[18][3] = "El software funcionando es la medida principal del progreso.";
 answers[18] = choices[18][2];
 units[18] = "34";
 comments[18] = "Id Pregunta: 43. AGE A1 2015";


//  Id pregunta: 83 Año de creación de pregunta: 2016
 questions[19]= "20)  Seg&uacute;n WCAG 2.0, &iquest;con qu&eacute; principio est&aacute; relacionada la pauta &ldquo;Hacer que las p&aacute;ginas web aparezcan y operen de forma predecible&rdquo;?";
 choices[19]= new Array();
 choices[19][0] = "Perceptible";
 choices[19][1] = "Operable";
 choices[19][2] = "Comprensible";
 choices[19][3] = "Robusto";
 answers[19] = choices[19][2];
 units[19] = "42";
 comments[19] = "Id Pregunta: 83. AGE A1 2015";


//  Id pregunta: 613 Año de creación de pregunta: 2016
 questions[20]= "21)  El Modelo de Referencia de Interconexi&oacute;n de Sistemas Abiertos (OSI) consta de siete niveles. Se&ntilde;ala cu&aacute;l de los principios que se aplicaron para llevar a cabo esta divisi&oacute;n es falso:";
 choices[20]= new Array();
 choices[20][0] = "No se deben crear demasiados niveles de manera que la tarea de describir e integrar &eacute;stos fuera m&aacute;s dif&iacute;cil de lo necesario.";
 choices[20][1] = "Aunque se requiera un nivel de abstracci&oacute;n diferente en el manejo de los datos, debe usarse un nivel ya existente.";
 choices[20][2] = "Cada nivel debe realizar unas funciones bien definidas.";
 choices[20][3] = "Crear para cada nivel interfases con el nivel superior e inferior &uacute;nicamente.";
 answers[20] = choices[20][1];
 units[20] = "48";
 comments[20] = "Id Pregunta: 613. Junta de Extremadura A1 2015";


//  Id pregunta: 674 Año de creación de pregunta: 2016
 questions[21]= "22)  En referencia a la implantaci&oacute;n de la interoperabilidad de la receta electr&oacute;nica:";
 choices[21]= new Array();
 choices[21][0] = "Permite los ciudadanos retiren sus medicamentos en las farmacias de fuera de la Comunidad Aut&oacute;noma en la que hayan sido recetados.";
 choices[21][1] = "Favorece la seguridad del paciente, al incorporar sistemas online de ayuda a la prescripci&oacute;n, que ayudan a la detecci&oacute;n de interaciones medicamentosas o duplicidades terap&eacute;uticas.";
 choices[21][2] = "Facilita al m&eacute;dico el seguimiento de la adherencia al tratamiento por parte del paciente.";
 choices[21][3] = "Todas las anteriores son correctas.";
 answers[21] = choices[21][3];
 units[21] = "47";
 comments[21] = "Id Pregunta: 674. Receta electr&oacute;nica";


//  Id pregunta: 628 Año de creación de pregunta: 2016
 questions[22]= "23)  Seg&uacute;n el Real Decreto 4/2010, de 8 de enero, por el que se regula el Esquema Nacional de Interoperabilidad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; es la interoperabilidad?";
 choices[22]= new Array();
 choices[22][0] = "Es la capacidad de los sistemas de informaci&oacute;n y de los procedimientos a los que &eacute;stos dan soporte, de compartir datos y posibilitar el intercambio de informaci&oacute;n y conocimiento entre ellos.";
 choices[22][1] = "Es la obligaci&oacute;n de conectividad ente sistemas operativos de las Administraciones P&uacute;blicas.";
 choices[22][2] = "Es la capacidad de intercambio de datos entre las Comunidades Aut&oacute;nomas y la Administraci&oacute;n Central.";
 choices[22][3] = "Es la posibilidad de acceso a los datos que poseen todas las Administraciones sobre cualquiera de los usuarios de los sistemas de informaci&oacute;n.";
 answers[22] = choices[22][0];
 units[22] = "45";
 comments[22] = "Id Pregunta: 628. Junta de Extremadura A1 2015";


//  Id pregunta: 92 Año de creación de pregunta: 2016
 questions[23]= "24)  Seg&uacute;n AENOR, la certificaci&oacute;n es:";
 choices[23]= new Array();
 choices[23][0] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 choices[23][1] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple con los requisitos legales para salir al mercado.";
 choices[23][2] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio es beneficioso para los consumidores.";
 choices[23][3] = "La acci&oacute;n llevada a cabo por una entidad dependiente de la Administraci&oacute;n p&uacute;blica mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 answers[23] = choices[23][0];
 units[23] = "48";
 comments[23] = "Id Pregunta: 92. AGE A1 2015";


//  Id pregunta: 729 Año de creación de pregunta: 2016
 questions[24]= "25)  Indique cual de los siguientes no forma parte del vocabulario de scrum";
 choices[24]= new Array();
 choices[24][0] = "Burn-up chart";
 choices[24][1] = "Arquitectural Skype";
 choices[24][2] = "Burn-down chart";
 choices[24][3] = "Definition of done";
 answers[24] = choices[24][1];
 units[24] = "34, 84";
 comments[24] = "Id Pregunta: 729. Metodologias &aacute;giles";


//  Id pregunta: 598 Año de creación de pregunta: 2016
 questions[25]= "26)  Entre la documentaci&oacute;n de la Seguridad de la Organizaci&oacute;n nos podremos encontrar:";
 choices[25]= new Array();
 choices[25][0] = "La Pol&iacute;tica de Seguridad Corporativa ser&aacute; elaborada por el Responsable de Seguridad Corporativa y aprobada por el Comit&eacute; de Seguridad Corporativa y por la Alta Direcci&oacute;n.";
 choices[25][1] = "La Pol&iacute;tica de Seguridad de las TIC que debe estar alineada en todo momento con el Mantenimiento de los Sistemas de Informaci&oacute;n.";
 choices[25][2] = "El Documento de Seguridad que ha de estar presente en toda documentaci&oacute;n de la seguridad de la informaci&oacute;n.";
 choices[25][3] = "Todas las respuestas anteriores son correctas.";
 answers[25] = choices[25][0];
 units[25] = "45";
 comments[25] = "Id Pregunta: 598. Junta de Extremadura A1 2015";


//  Id pregunta: 735 Año de creación de pregunta: 2016
 questions[26]= "27)  Son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[26]= new Array();
 choices[26][0] = "Tranparencia, innovaci&oacute;n, Unidad y visi&oacute;n integral y Orientaci&oacute;n al usuario del servicio";
 choices[26][1] = "Tranparencia, Colaboraci&oacute;n y alianzas, Orientaci&oacute;n al usuario del servicio y Reutilizaci&oacute;n";
 choices[26][2] = "Reutilizaci&oacute;n, Seguridad, Orientaci&oacute;n al usuario del servicio y Transparencia";
 choices[26][3] = "Ninguna de las anteriores";
 answers[26] = choices[26][0];
 units[26] = "28";
 comments[26] = "Id Pregunta: 735. Estrategia TIC";


//  Id pregunta: 440 Año de creación de pregunta: 2016
 questions[27]= "28)  Respecto al Sistema de Informaci&oacute;n Administrativa, se&ntilde;ale la respuesta falsa:";
 choices[27]= new Array();
 choices[27][0] = "Contiene la relaci&oacute;n de procedimientos y servicios de la AGE, y de todas las administraciones participantes.";
 choices[27][1] = "Cumple para la AGE el requisito establecido en el art&iacute;culo 9 del Esquema Nacional de Interoperabilidad, que obliga a las Administraciones p&uacute;blicas a mantener actualizado un Inventario de Informaci&oacute;n Administrativa.";
 choices[27][2] = "SIA est&aacute; dise&ntilde;ado para permitir la administraci&oacute;n distribuida y la actualizaci&oacute;n corresponsable por todas las Administraciones participantes, mediante una aplicaci&oacute;n web.";
 choices[27][3] = "Los usuarios son gestionados por una red de responsables de cada Departamento.";
 answers[27] = choices[27][2];
 units[27] = "43";
 comments[27] = "Id Pregunta: 440. SERVICIOS COMUNES";


//  Id pregunta: 445 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Cu&aacute;l de los siguientes datos NO es obligatorio que figure en la realizaci&oacute;n de una inscripci&oacute;n en el Registro electr&oacute;nico de Apoderamientos?";
 choices[28]= new Array();
 choices[28][0] = "Nombre y apellidos, denominaci&oacute;n o raz&oacute;n social y NIF del poderante.";
 choices[28][1] = "Per&iacute;odo de vigencia de los tr&aacute;mites objeto de apoderamiento.";
 choices[28][2] = "Fecha de otorgamiento.";
 choices[28][3] = "N&uacute;mero de referencia del alta y fecha de alta en el Registro.";
 answers[28] = choices[28][1];
 units[28] = "43";
 comments[28] = "Id Pregunta: 445. SERVICIOS COMUNES";


//  Id pregunta: 734 Año de creación de pregunta: 2016
 questions[29]= "30)  En el Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP el principio de transparencia:";
 choices[29]= new Array();
 choices[29][0] = "El seguimiento de la actividad de los funcionarios aumenta la eficacia de los servicios p&uacute;blicos.";
 choices[29][1] = "La transparencia facilita al ciudadano el acceso a los servicios p&uacute;blicos.";
 choices[29][2] = "Una continua monitorizaci&oacute;n de la actividad, junto a la evaluaci&oacute;n y difusi&oacute;n de resultados incrementa la satisfacci&oacute;n de los ciudadanos.";
 choices[29][3] = "El seguimiento y control de la actividad pol&iacute;tica disminuye las actividades ligadas a la corrupci&oacute;n.";
 answers[29] = choices[29][2];
 units[29] = "28";
 comments[29] = "Id Pregunta: 734. Estrategia TIC";


//  Id pregunta: 740 Año de creación de pregunta: 2016
 questions[30]= "31)  Uno de los objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[30]= new Array();
 choices[30][0] = "Proveer de manera compartida servicios comunes";
 choices[30][1] = "El canal digital ha de ser el medio preferido por ciudadanos y empresas para relacionarse con la Administraci&oacute;n.";
 choices[30][2] = "Orientaci&oacute;n al usuario del servicio.";
 choices[30][3] = "Transparencia";
 answers[30] = choices[30][1];
 units[30] = "28";
 comments[30] = "Id Pregunta: 740. Estrategia TIC";


//  Id pregunta: 719 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;C&uacute;al de los siguientes puntos NO  es uno de los principios de las metodolog&iacute;as lean?";
 choices[31]= new Array();
 choices[31][0] = "Flexibilidad para variar el servicio o producto";
 choices[31][1] = "Eliminar desperdicios";
 choices[31][2] = "Decidir lo m&aacute;s tarde posible";
 choices[31][3] = "Hacer entregas tan r&aacute;pido como sea posible";
 answers[31] = choices[31][0];
 units[31] = "34";
 comments[31] = "Id Pregunta: 719. Metodologias Lean";


//  Id pregunta: 439 Año de creación de pregunta: 2016
 questions[32]= "33)  Sobre el Sistema de Interconexi&oacute;n de Registros (SIR):";
 choices[32]= new Array();
 choices[32][0] = "Es la infraestructura b&aacute;sica que permite el intercambio de asientos electr&oacute;nicos de registro entre los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[32][1] = "Permite eliminar el tr&aacute;nsito de papel entre administraciones, aumentando la eficiencia y eliminando los costes de manipulaci&oacute;n y remisi&oacute;n del papel, gracias a la generaci&oacute;n de copias aut&eacute;nticas electr&oacute;nicas de la documentaci&oacute;n presentada en los asientos de registro.";
 choices[32][2] = "No es necesario que la aplicaci&oacute;n de registro est&eacute; certificada con la norma SICRES 3.0.";
 choices[32][3] = "La integraci&oacute;n en SIR se realiza mediante aplicaciones de registro comunes como GEISER y ORVE o bien, siempre que se justifique, mediante aplicaciones previamente certificadas por la Comisi&oacute;n de Estrategia TIC.";
 answers[32] = choices[32][1];
 units[32] = "43";
 comments[32] = "Id Pregunta: 439. SERVICIOS COMUNES";


//  Id pregunta: 443 Año de creación de pregunta: 2016
 questions[33]= "34)  Respecto a las comunicaciones y notificaciones electr&oacute;nicas:";
 choices[33]= new Array();
 choices[33][0] = "El servicio SIM se utiliza para el env&iacute;o de notificaciones electr&oacute;nicas.";
 choices[33][1] = "El Servicio compartido la gesti&oacute;n de notificaciones Notific@, ser&aacute; de uso obligatorio para la AGE y sus OOPP en 2017.";
 choices[33][2] = "La plataforma Notific@, recibe desde los organismos emisores, las comunicaciones y adem&aacute;s de aportar otros valores a&ntilde;adidos, las pone a disposici&oacute;n de los destinatarios en la Carpeta Ciudadana.";
 choices[33][3] = "El servicio SIM, que se ha integrado en el Servicio compartido de gesti&oacute;n de notificaciones, proporciona a los ciudadanos y empresas un buz&oacute;n seguro.";
 answers[33] = choices[33][1];
 units[33] = "43";
 comments[33] = "Id Pregunta: 443. SERVICIOS COMUNES";


//  Id pregunta: 726 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest; Cu&aacute;l es el n&uacute;mero de personas recomendados para cada team de Scrum?";
 choices[34]= new Array();
 choices[34][0] = "De 1a  4 ";
 choices[34][1] = "De 3 a  7 ";
 choices[34][2] = "De 5 a  9";
 choices[34][3] = "De 7 a 11";
 answers[34] = choices[34][2];
 units[34] = "34, 84";
 comments[34] = "Id Pregunta: 726. Metodologias &aacute;giles";


//  Id pregunta: 730 Año de creación de pregunta: 2016
 questions[35]= "36)  Cu&aacute;l de las siguientes caracter&iacute;sticas es especifican de Kanban:";
 choices[35]= new Array();
 choices[35][0] = "Se definen iteraciones";
 choices[35][1] = "Se limitan las tareas que se pueden realizar por fase";
 choices[35][2] = "Los miembros del equipo no tienen un rol especifico";
 choices[35][3] = "Todas las anteriores son caracter&iacute;sticas de la metodolog&iacute;a Kanban.";
 answers[35] = choices[35][1];
 units[35] = "34, 84";
 comments[35] = "Id Pregunta: 730. Metodologias &aacute;giles";


//  Id pregunta: 51 Año de creación de pregunta: 2016
 questions[36]= "37)  De acuerdo con el Real Decreto 1720/2007 indique qu&eacute; medida ha de ser aplicada obligatoriamente a los ficheros de los que sean responsables las Administraciones tributarias en el ejercicio de sus potestades tributarias:";
 choices[36]= new Array();
 choices[36][0] = "Cifrado de las comunicaciones";
 choices[36][1] = "Al menos, una auditor&iacute;a bienal (cada 2 a&ntilde;os)";
 choices[36][2] = "Registro de los accesos";
 choices[36][3] = "No queda regulado en dicho Real Decreto al depender de la criticidad del fichero.";
 answers[36] = choices[36][1];
 units[36] = "35";
 comments[36] = "Id Pregunta: 51. AGE A1 2015. Pregunta anulada en el examen real, ya que la opci&oacute;n B dec&iacute;a &quot;bianual&quot; en lugar de &quot;bienal&quot;";


//  Id pregunta: 86 Año de creación de pregunta: 2016
 questions[37]= "38)  Un contrato menor tiene una duraci&oacute;n m&aacute;xima de:";
 choices[37]= new Array();
 choices[37][0] = "Un a&ntilde;o prorrogable";
 choices[37][1] = "Dos a&ntilde;os no prorrogables";
 choices[37][2] = "Un a&ntilde;o no prorrogable";
 choices[37][3] = "Dos a&ntilde;os prorrogables";
 answers[37] = choices[37][2];
 units[37] = "37";
 comments[37] = "Id Pregunta: 86. AGE A1 2015";


//  Id pregunta: 434 Año de creación de pregunta: 2016
 questions[38]= "39)  En cuanto al sistema EGEO, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[38]= new Array();
 choices[38][0] = "Permite la representaci&oacute;n de mapas tem&aacute;ticos, georreferenciados, buscador de recursos georreferenciados con filtros definidos por el usuario, y de magnitud.";
 choices[38][1] = "Utiliza &uacute;nicamente sobre mapas oficiales del Instituto Geogr&aacute;fico Nacional (IGN).";
 choices[38][2] = "Es un servicio com&uacute;n dirigido a &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[38][3] = "Para su manejo, es necesario contar con conocimientos de georreferenciaci&oacute;n.";
 answers[38] = choices[38][0];
 units[38] = "43";
 comments[38] = "Id Pregunta: 434. SERVICIOS COMUNES";


//  Id pregunta: 87 Año de creación de pregunta: 2016
 questions[39]= "40)  Respecto a la pol&iacute;tica de normalizaci&oacute;n TIC en la Uni&oacute;n Europea, como se&ntilde;ala el Reglamento 1025/2012 del Parlamento y del Consejo, la identificaci&oacute;n de especificaciones t&eacute;cnicas de las TIC admisibles a efectos de referenciaci&oacute;n:";
 choices[39]= new Array();
 choices[39][0] = "Ha de estar siempre basada en normas de estandarizaci&oacute;n nacionales, europeas o internacionales.";
 choices[39][1] = "No deben ser usadas para permitir la interoperabilidad en la contrataci&oacute;n p&uacute;blica, dado que se podr&iacute;an dar situaciones monopol&iacute;sticas.";
 choices[39][2] = "Ser&aacute; realizada por la Comisi&oacute;n, bien a propuesta de un Estado miembro o por iniciativa propia, sin necesidad de ser una norma nacional, europea o internacional, cumpli&eacute;ndose los dem&aacute;s requisitos establecidos en el reglamento.";
 choices[39][3] = "Requieren para su adopci&oacute;n la unanimidad de todos los Estados miembro.";
 answers[39] = choices[39][2];
 units[39] = "48";
 comments[39] = "Id Pregunta: 87. AGE A1 2015";


//  Id pregunta: 607 Año de creación de pregunta: 2016
 questions[40]= "41)  Seg&uacute;n Magerit v3, en el desarrollo de sistemas de informaci&oacute;n:";
 choices[40]= new Array();
 choices[40][0] = "La seguridad debe estar embebida en el sistema desde su primera concepci&oacute;n.";
 choices[40][1] = "La seguridad comenzar&aacute; a considerarse formalmente cuando finalice el proceso de implantaci&oacute;n de sistemas de informaci&oacute;n.";
 choices[40][2] = "La seguridad del sistema de informaci&oacute;n es m&aacute;s econ&oacute;mica implantarla una vez puesto en producci&oacute;n el sistema de informaci&oacute;n que tenerla en consideraci&oacute;n durante el desarrollo del sistema.";
 choices[40][3] = "La seguridad s&oacute;lo ralentiza el proceso de desarrollo de sistemas de informaci&oacute;n por lo que s&oacute;lo se debe considerar en aquellos sistemas que usen datos econ&oacute;micos.";
 answers[40] = choices[40][0];
 units[40] = "45";
 comments[40] = "Id Pregunta: 607. Junta de Extremadura A1 2015";


//  Id pregunta: 435 Año de creación de pregunta: 2016
 questions[41]= "42)  Sobre el servicio com&uacute;n Autentica, se&ntilde;ale la respuesta correcta:";
 choices[41]= new Array();
 choices[41][0] = "Autentica ofrece &uacute;nicamente servicios de autenticaci&oacute;n de empleados p&uacute;blicos de las AA.PP. y usuarios relacionados,";
 choices[41][1] = "Su objetivo es constituirse como el servicio com&uacute;n compartido de referencia para los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado, para sus aplicaciones internas.";
 choices[41][2] = "El servicio provee atributos de los usuarios autenticados relacionados con la unidad y el puesto de destino, incluyendo correo electr&oacute;nico y tel&eacute;fono.";
 choices[41][3] = "Ofrece funcionalidad de autorizaci&oacute;n de usuarios, &uacute;nicamente pertenecientes a la Administraci&oacute;n General del Estado.";
 answers[41] = choices[41][2];
 units[41] = "43";
 comments[41] = "Id Pregunta: 435. SERVICIOS COMUNES";


//  Id pregunta: 2 Año de creación de pregunta: 2016
 questions[42]= "43)  La estrategia de comunicaci&oacute;n de un nuevo proyecto estrat&eacute;gico TIC NO debe:";
 choices[42]= new Array();
 choices[42][0] = "Posponerse a la puesta en producci&oacute;n del proyecto sin incidencias significativas.";
 choices[42][1] = "Presentar prototipos que muestren la evoluci&oacute;n del desarrollo ya realizado.";
 choices[42][2] = "Dise&ntilde;ar una campa&ntilde;a de difusi&oacute;n y promoci&oacute;n del proyecto.";
 choices[42][3] = "Asegurar la implicaci&oacute;n de representantes de todas las unidades afectadas.";
 answers[42] = choices[42][0];
 units[42] = "31";
 comments[42] = "Id Pregunta: 2. AGE A1 2015";


//  Id pregunta: 80 Año de creación de pregunta: 2016
 questions[43]= "44)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, se&ntilde;ale la respuesta correcta respecto a la auditor&iacute;a de seguridad:";
 choices[43]= new Array();
 choices[43][0] = "Se realizar&aacute;, al menos, cada dieciocho meses para los sistemas de todas las categor&iacute;as, y con car&aacute;cter extraordinario, siempre que se produzcan modificaciones sustanciales en el sistema de informaci&oacute;n, que puedan repercutir en las medidas de seguridad requeridas.";
 choices[43][1] = "El equipo auditor, en el dise&ntilde;o de sus pruebas y revisiones, debe limitarse a la revisi&oacute;n de documentos facilitados por los responsables de la informaci&oacute;n, del servicio y de seguridad.";
 choices[43][2] = "Cuando existan razones que lo justifiquen, dentro de las tareas de la auditoria de seguridad podr&aacute;n incluirse adem&aacute;s la ejecuci&oacute;n de trabajos de consultor&iacute;a.";
 choices[43][3] = "El informe de auditor&iacute;a deber&aacute; dictaminar sobre la adecuaci&oacute;n de las medidas exigidas por el Esquema Nacional de Seguridad, identificar sus deficiencias y proponer las medidas correctoras o complementarias necesarias.";
 answers[43] = choices[43][3];
 units[43] = "46";
 comments[43] = "Id Pregunta: 80. AGE A1 2015";


//  Id pregunta: 78 Año de creación de pregunta: 2016
 questions[44]= "45)  En relaci&oacute;n con la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de protecci&oacute;n de datos de car&aacute;cter personal, se&ntilde;ale la respuesta correcta:";
 choices[44]= new Array();
 choices[44][0] = "En caso de datos de car&aacute;cter personal registrados inexactos o incompletos, el interesado debe instar su rectificaci&oacute;n, sin que puedan ser cancelados y sustituidos de oficio por los datos rectificados o completados.";
 choices[44][1] = "En caso de datos de car&aacute;cter personal registrados inexactos o incompletos, ser&aacute;n cancelados y sustituidos de oficio por los datos rectificados o completados, sin perjuicio del derecho de rectificaci&oacute;n y cancelaci&oacute;n del afectado.";
 choices[44][2] = "El responsable del tratamiento tendr&aacute; la obligaci&oacute;n de hacer efectivo el derecho de rectificaci&oacute;n o cancelaci&oacute;n del interesado en el plazo de 15 d&iacute;as.";
 choices[44][3] = "El responsable del tratamiento tendr&aacute; la obligaci&oacute;n de hacer efectivo el derecho de rectificaci&oacute;n o cancelaci&oacute;n del interesado en el plazo de 1 mes.";
 answers[44] = choices[44][1];
 units[44] = "35";
 comments[44] = "Id Pregunta: 78. AGE A1 2015";


//  Id pregunta: 20 Año de creación de pregunta: 2016
 questions[45]= "46)  Con respecto al &aacute;mbito objetivo de aplicaci&oacute;n de la Ley 37/2007, de 16 de noviembre, sobre reutilizaci&oacute;n de la informaci&oacute;n del sector p&uacute;blico:";
 choices[45]= new Array();
 choices[45][0] = "Abarca el intercambio de documentos entre Administraciones y organismos del sector p&uacute;blico en el ejercicio de las funciones p&uacute;blicas que tengan atribuidas.";
 choices[45][1] = "Ser&aacute; aplicable incluso sobre los documentos que obran en las Administraciones y organismos del sector p&uacute;blico para finalidades ajenas a sus funciones de servicio p&uacute;blico.";
 choices[45][2] = "No afecta a la existencia de derechos de propiedad intelectual de las Administraciones y organismos del sector p&uacute;blico ni a su posesi&oacute;n por &eacute;stos.";
 choices[45][3] = "Fija la prevalencia del derecho fundamental a la protecci&oacute;n de datos de car&aacute;cter personal, a&uacute;n cuando se apliquen medidas de disociaci&oacute;n de datos.";
 answers[45] = choices[45][2];
 units[45] = "27";
 comments[45] = "Id Pregunta: 20. AGE A1 2015";


//  Id pregunta: 720 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;C&uacute;al de las siguientes NO es una metodolog&iacute;a lean?";
 choices[46]= new Array();
 choices[46][0] = "Lean startup";
 choices[46][1] = "Business Model Canvas";
 choices[46][2] = "Dynamic system Development method";
 choices[46][3] = "Lean software development";
 answers[46] = choices[46][2];
 units[46] = "34";
 comments[46] = "Id Pregunta: 720. Metodologias Lean";


//  Id pregunta: 69 Año de creación de pregunta: 2016
 questions[47]= "48)  Los contratos que celebren los poderes adjudicadores se perfeccionan con su:";
 choices[47]= new Array();
 choices[47][0] = "Ejecuci&oacute;n";
 choices[47][1] = "Adjudicaci&oacute;n";
 choices[47][2] = "Licitaci&oacute;n";
 choices[47][3] = "Formalizaci&oacute;n";
 answers[47] = choices[47][3];
 units[47] = "37";
 comments[47] = "Id Pregunta: 69. AGE A1 2015";


//  Id pregunta: 62 Año de creación de pregunta: 2016
 questions[48]= "49)  El art&iacute;culo 102 del Real Decreto 1720/2007, por el que se determina la conservaci&oacute;n de una copia de respaldo de los datos y de los procedimientos de recuperaci&oacute;n de los mismos en un lugar diferente de aquel en que se encuentren los equipos inform&aacute;ticos que los tratan, &iquest;a qu&eacute; nivel o niveles de medidas de seguridad es aplicable?";
 choices[48]= new Array();
 choices[48][0] = "B&aacute;sico";
 choices[48][1] = "Medio";
 choices[48][2] = "Alto";
 choices[48][3] = "A los niveles medio y alto";
 answers[48] = choices[48][2];
 units[48] = "35";
 comments[48] = "Id Pregunta: 62. AGE A1 2015";


//  Id pregunta: 438 Año de creación de pregunta: 2016
 questions[49]= "50)  El Real Decreto 424/2016, de 11 de noviembre establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales. Se&ntilde;ale la respuesta falsa.";
 choices[49]= new Array();
 choices[49][0] = "Dentro del Ministerio de Energ&iacute;a, Turismo y Agenda Digital se encuentra la Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital, de la que depende la Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n.";
 choices[49][1] = "Suprime la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones.";
 choices[49][2] = "La Direcci&oacute;n General de Racionalizaci&oacute;n y Centralizaci&oacute;n de la Contrataci&oacute;n es un &oacute;rgano directivo perteneciente a la Subsecretar&iacute;a de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[49][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, con rango de Direcci&oacute;n general depende de la Secretar&iacute;a de Estado de Funci&oacute;n P&uacute;blica.";
 answers[49] = choices[49][3];
 units[49] = "43";
 comments[49] = "Id Pregunta: 438. SERVICIOS COMUNES";


//  Id pregunta: 0 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes NO es un objetivo del Plan de Transformaci&oacute;n Digital de la AGE?";
 choices[50]= new Array();
 choices[50][0] = "Consolidar el tejido productivo nacional apoyando el efectivo despliegue de la Sociedad de la Informaci&oacute;n.";
 choices[50][1] = "Conseguir una mayor eficiencia en los servicios TIC comunes de la Administraci&oacute;n.";
 choices[50][2] = "Implantar una gesti&oacute;n corporativa inteligente de la informaci&oacute;n y los datos.";
 choices[50][3] = "Adoptar una estrategia corporativa de seguridad y usabilidad.";
 answers[50] = choices[50][0];
 units[50] = "26";
 comments[50] = "Id Pregunta: 0. AGE A1 2015";


//  Id pregunta: 22 Año de creación de pregunta: 2016
 questions[51]= "52)  La composici&oacute;n inicial del Comit&eacute; Ejecutivo de la Comisi&oacute;n de Estrategia TIC, fijada por la disposici&oacute;n adicional quinta del Real Decreto 806/2014, incluye, entre otros, a:";
 choices[51]= new Array();
 choices[51][0] = "Los responsables de las unidades ministeriales de tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones.";
 choices[51][1] = "La Inspecci&oacute;n General del Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[51][2] = "El titular de la Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 choices[51][3] = "Representantes de las empresas del sector TIC nacional.";
 answers[51] = choices[51][1];
 units[51] = "26";
 comments[51] = "Id Pregunta: 22. AGE A1 2015";


//  Id pregunta: 616 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;A qui&eacute;n est&aacute; destinado principalmente las Pautas de Accesibilidad al Contenido en la Web (WCAG)?";
 choices[52]= new Array();
 choices[52][0] = "A desarrolladores de navegadores web y reproductores multimedia.";
 choices[52][1] = "A desarrolladores de herramientas de autor, como herramientas de creaci&oacute;n de p&aacute;ginas web o de creaci&oacute;n de archivos multimedia.";
 choices[52][2] = "A desarrolladores de herramientas de evaluaci&oacute;n de la accesibilidad web.";
 choices[52][3] = "Todas las respuestas son correctas.";
 answers[52] = choices[52][2];
 units[52] = "42";
 comments[52] = "Id Pregunta: 616. Junta de Extremadura A1 2015";


//  Id pregunta: 75 Año de creación de pregunta: 2016
 questions[53]= "54)  Las transferencias internacionales de datos de car&aacute;cter personal:";
 choices[53]= new Array();
 choices[53][0] = "Se regulan en los art&iacute;culos 33 y 34 de la Ley Org&aacute;nica 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal y en el T&iacute;tulo VI del Real Decreto 1720/2007 por el que se aprueba el Reglamento de desarrollo de la Ley Org&aacute;nica 15/1999.";
 choices[53][1] = "Una transferencia internacional de datos, es un tratamiento de datos que supone una transmisi&oacute;n de los mismos fuera del territorio de la Uni&oacute;n Europea (UE).";
 choices[53][2] = "La Decisi&oacute;n de la Comisi&oacute;n 2000/520/CE, con arreglo a la Directiva 95/46/CE, permite actualmente realizar transferencias de datos a Estados Unidos si se cumplen los principios del acuerdo de Puerto Seguro.";
 choices[53][3] = "Precisan, en todo caso, la autorizaci&oacute;n previa de la Direcci&oacute;n de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[53] = choices[53][0];
 units[53] = "35";
 comments[53] = "Id Pregunta: 75. AGE A1 2015";


//  Id pregunta: 437 Año de creación de pregunta: 2016
 questions[54]= "55)  Los Portales de EE.LL. y CC.AA. ofrecen una herramienta de gesti&oacute;n de identidades de los empleados p&uacute;blicos de las entidades locales o auton&oacute;micas. Se&ntilde;ale la respuesta incorrecta.";
 choices[54]= new Array();
 choices[54][0] = "Los empleados p&uacute;blicos de las EE.LL. o CC.AA. tienen que solicitar el alta en alguna unidad local o auton&oacute;mica.";
 choices[54][1] = "Proporcionan tambi&eacute;n informaci&oacute;n del cargo y rol asociados.";
 choices[54][2] = "Cualquier organismo p&uacute;blico puede solicitar la inclusi&oacute;n en la plataforma de nuevas aplicaciones dirigidas a las EE.LL. o CC.AA.: &eacute;stas podr&aacute;n acceder desde un punto centralizado al nuevo servicio.";
 choices[54][3] = "Los portales est&aacute;n integrados y sincronizados con el Directorio Com&uacute;n de Unidades Org&aacute;nicas y Oficinas &#8208; DIR3, permitiendo que la gesti&oacute;n de usuarios y roles no se vea afectada por cambios en el directorio.";
 answers[54] = choices[54][0];
 units[54] = "43";
 comments[54] = "Id Pregunta: 437. SERVICIOS COMUNES";


//  Id pregunta: 85 Año de creación de pregunta: 2016
 questions[55]= "56)  Seg&uacute;n MAGERIT 3.0, el informe en el que se recogen los resultados de la identificaci&oacute;n de las amenazas relevantes sobre el sistema a analizar, caracterizadas por las estimaciones de ocurrencia y da&ntilde;o causado, se denomina:";
 choices[55]= new Array();
 choices[55][0] = "Estimaci&oacute;n del riesgo";
 choices[55][1] = "Evaluaci&oacute;n de salvaguardas";
 choices[55][2] = "Declaraci&oacute;n de aplicabilidad";
 choices[55][3] = "Mapa de riesgos";
 answers[55] = choices[55][3];
 units[55] = "45";
 comments[55] = "Id Pregunta: 85. AGE A1 2015";


//  Id pregunta: 548 Año de creación de pregunta: 2016
 questions[56]= "57)  El &aacute;mbito de aplicaci&oacute;n del RD 806/2014 de Gobernanza TIC es:";
 choices[56]= new Array();
 choices[56][0] = "La Administraci&oacute;n General del Estado";
 choices[56][1] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos";
 choices[56][2] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos y las Comunidades Aut&oacute;nomas";
 choices[56][3] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos, las Comunidades Aut&oacute;nomas y las Entidades Locales";
 answers[56] = choices[56][1];
 units[56] = "26";
 comments[56] = "Id Pregunta: 548. Gobernanza TIC";


//  Id pregunta: 542 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cu&aacute;l es el &oacute;rgano de la Comisi&oacute;n Europea encargado de la gobernanza TIC cuya misi&oacute;n es garantizar que la Comisi&oacute;n haga un uso eficaz de las tecnolog&iacute;as de la informaci&oacute;n y la comunicaci&oacute;n para el logro de sus objetivos organizativos y pol&iacute;ticos?";
 choices[57]= new Array();
 choices[57][0] = "La Direcci&oacute;n General de Inform&aacute;tica (DIGIT)";
 choices[57][1] = "Oficina del Organismo de Reguladores Europeos de las Comunicaciones Electr&oacute;nicas (ORECE)";
 choices[57][2] = "Agencia de Seguridad de las Redes y de la Informaci&oacute;n de la Uni&oacute;n Europea (ENISA)";
 choices[57][3] = "Instituto Europeo de Innovaci&oacute;n y Tecnolog&iacute;a (EIT)";
 answers[57] = choices[57][0];
 units[57] = "26";
 comments[57] = "Id Pregunta: 542. Gobernanza TIC";


//  Id pregunta: 731 Año de creación de pregunta: 2016
 questions[58]= "59)  Cu&aacute;l de las siguientes reglas se corresponde a las reglas de la metodolog&iacute;a Kanban:";
 choices[58]= new Array();
 choices[58][0] = "Visualizar el trabajo o el flujo de trabajo. ";
 choices[58][1] = "Determinar el l&iacute;mite de trabajo en curso (Work in progress)";
 choices[58][2] = "Medir el tiempo en completar una tarea (Lead time)";
 choices[58][3] = "Todas las anteriores son reglas correspondientes a la metodolog&iacute;a Kanban.";
 answers[58] = choices[58][3];
 units[58] = "34, 84";
 comments[58] = "Id Pregunta: 731. Metodologias &aacute;giles";


//  Id pregunta: 672 Año de creación de pregunta: 2016
 questions[59]= "60)  En cuanto a la Historia Cl&iacute;nica Digital del Sistema Nacional de Salud, se&ntilde;ale cual de las siguientes afirmaciones es Incorrecta:";
 choices[59]= new Array();
 choices[59][0] = "Se ha implementado por mandato legal, tanto por la Ley 16/2003 de cohesi&oacute;n y calidad del Sistema Nacional de Salud, como por la Ley 41/2002 de Autonom&iacute;a del Paciente.";
 choices[59][1] = "Permite que los profesionales sanitarios puedan acceder a los datos de salud del paciente, cuando este se encuentre desplazado fuera de su Comunidad Aut&oacute;noma de origen y requiera asistencia sanitaria.";
 choices[59][2] = "De acuerdo a su dise&ntilde;o funcional, permite acceder a la totalidad de los contenidos existentes en la Historia Cl&iacute;nica Electr&oacute;nica de las Comunidades Aut&oacute;nomas.";
 choices[59][3] = "Gracias a ella, de acuerdo al informe CORA de Febrero de 2016, ya son 25,5 millones de ciudadanos los que disponen de informes cl&iacute;nicos en el Sstema Nacional de Salud.";
 answers[59] = choices[59][2];
 units[59] = "47";
 comments[59] = "Id Pregunta: 672. Historia Cl&iacute;nica Digital";


//  Id pregunta: 544 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Cu&aacute;l es el &oacute;rgano superior de gobernanza TIC en la Administraci&oacute;n General del Estado?";
 choices[60]= new Array();
 choices[60][0] = "El Comit&eacute; de Direcci&oacute;n TIC";
 choices[60][1] = "El Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[60][2] = "La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[60][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[60] = choices[60][3];
 units[60] = "26";
 comments[60] = "Id Pregunta: 544. Gobernanza TIC";


//  Id pregunta: 724 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;C&uacute;al es la afirmaci&oacute;n incorrecta?";
 choices[61]= new Array();
 choices[61][0] = "El sprint release es aquel que implementa las tareas necesarias para poner el sistema en producci&oacute;n";
 choices[61][1] = "El sprint rel&eacute;ase es el &uacute;ltimo sprint de la metodolog&iacute;a SCRUM.";
 choices[61][2] = "En el sprint release se pueden llevan a cabo tareas relacionados con el despliegue y generaci&oacute;n de scripts de recuperaci&oacute;n del sistema";
 choices[61][3] = "En el sprint rel&eacute;ase se pueden llevar a cabo tareas relacionados con la documentaci&oacute;n, pruebas de carga, y tareas relacionadas con las bases de datos en producci&oacute;n.";
 answers[61] = choices[61][1];
 units[61] = "34, 84";
 comments[61] = "Id Pregunta: 724. Metodologias &aacute;giles";


//  Id pregunta: 73 Año de creación de pregunta: 2016
 questions[62]= "63)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Digitalizaci&oacute;n de Documentos, &iquest;cu&aacute;l de los siguientes metadatos no es considerado como metadato complementario?";
 choices[62]= new Array();
 choices[62][0] = "Resoluci&oacute;n, que indica el valor de resoluci&oacute;n en p&iacute;xeles por pulgada empleada en la digitalizaci&oacute;n.";
 choices[62][1] = "Origen, que indica si el contenido del documento fue creado por un ciudadano o por una administraci&oacute;n.";
 choices[62][2] = "Tama&ntilde;o, que indica el valor y unidades del tama&ntilde;o l&oacute;gico del documento digitalizado.";
 choices[62][3] = "Idioma, que indica el idioma del contenido del documento digitalizado.";
 answers[62] = choices[62][1];
 units[62] = "44";
 comments[62] = "Id Pregunta: 73. AGE A1 2015";


//  Id pregunta: 1 Año de creación de pregunta: 2016
 questions[63]= "64)  Los medios y servicios compartidos, establecidos en el Real Decreto 806/2014 dentro del modelo de gobernanza en el &aacute;mbito de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones de la Administraci&oacute;n General del Estado, son tales que:";
 choices[63]= new Array();
 choices[63][0] = "Su declaraci&oacute;n presupone que el servicio se encuentra en producci&oacute;n, listo para la adhesi&oacute;n de las diferentes unidades departamentales.";
 choices[63][1] = "Dado su car&aacute;cter obligatorio y sustitutivo, no se permite acordar excepciones por razones econ&oacute;micas, t&eacute;cnicas o de oportunidad sobrevenidas.";
 choices[63][2] = "Su declaraci&oacute;n establece la habilitaci&oacute;n para el desarrollo de las medidas t&eacute;cnicas, organizativas, presupuestarias y normativas.";
 choices[63][3] = "Su provisi&oacute;n se realiza directa y exclusivamente por medio de la Direcci&oacute;n General de Administraci&oacute;n Digital";
 answers[63] = choices[63][2];
 units[63] = "26";
 comments[63] = "Id Pregunta: 1. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 32 Año de creación de pregunta: 2016
 questions[64]= "65)  El art&iacute;culo 16 del Esquema Nacional de Interoperabilidad establece las condiciones de licenciamiento aplicables en el &aacute;mbito de la reutilizaci&oacute;n y transferencia de tecnolog&iacute;a, &iquest;cu&aacute;l de las siguientes licencias recomienda expresamente aplicar, sin perjuicio de otras licencias que garanticen los derechos expuestos en el mencionado art&iacute;culo?";
 choices[64]= new Array();
 choices[64][0] = "ASF-AL (Apache License 2.0)";
 choices[64][1] = "EUPL (European Union Public License)";
 choices[64][2] = "LGPL (Lesser General Public License)";
 choices[64][3] = "MIT(MIT License)";
 answers[64] = choices[64][1];
 units[64] = "43";
 comments[64] = "Id Pregunta: 32. AGE A1 2015";


//  Id pregunta: 848 Año de creación de pregunta: 2016
 questions[65]= "66)  El RPO (Recovery Point Objective) de una organizaci&oacute;n son 2 horas. &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?: ";
 choices[65]= new Array();
 choices[65][0] = "No m&aacute;s de 2 horas de datos de producci&oacute;n se pueden perder en caso de desastre";
 choices[65][1] = "No m&aacute;s de 4 horas de datos de producci&oacute;n se pueden perder en caso de desastre";
 choices[65][2] = "El tiempo para recuperar los sistemas en producci&oacute;n de nuevo no puede ser m&aacute;s de 2 horas.";
 choices[65][3] = "El tiempo para recuperar los sistemas en producci&oacute;n de nuevo no puede ser m&aacute;s de 4 horas.";
 answers[65] = choices[65][0];
 units[65] = "45";
 comments[65] = "Id Pregunta: 848. Xunta de Galicia 2015";


//  Id pregunta: 551 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Cu&aacute;l es el &oacute;rgano t&eacute;cnico de cooperaci&oacute;n de la Administraci&oacute;n General del Estado, de las Administraciones de las Comunidades Aut&oacute;nomas y de las Entidades Locales en materia de administraci&oacute;n electr&oacute;nica definido en la ley 40/2015 de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[66]= new Array();
 choices[66][0] = "La Conferencia Sectorial de Telecomunicaciones y Sociedad de la Informaci&oacute;n";
 choices[66][1] = "El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica";
 choices[66][2] = "La Comisi&oacute;n Sectorial de administraci&oacute;n electr&oacute;nica";
 choices[66][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[66] = choices[66][2];
 units[66] = "26";
 comments[66] = "Id Pregunta: 551. Gobernanza TIC";


//  Id pregunta: 717 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;A trav&eacute;s de qu&eacute; empresa surgen las metodolog&iacute;as lean?";
 choices[67]= new Array();
 choices[67][0] = "Ford";
 choices[67][1] = "Google";
 choices[67][2] = "Toyota";
 choices[67][3] = "Facebook";
 answers[67] = choices[67][2];
 units[67] = "34";
 comments[67] = "Id Pregunta: 717. Metodologias Lean";


//  Id pregunta: 599 Año de creación de pregunta: 2016
 questions[68]= "69)  Algunos de los elementos tecnol&oacute;gicos que intervienen en la seguridad perimetral corporativa son:";
 choices[68]= new Array();
 choices[68][0] = "En la seguridad perimetral corporativa s&oacute;lo intervienen enrutadores y switches. .";
 choices[68][1] = "Switches, servidores y aplicaciones departamentales.";
 choices[68][2] = "Enrutadores , cortafuegos y sistemas VPN.";
 choices[68][3] = "Servidores, tecnolog&iacute;as inal&aacute;mbricas, sistemas de usuarios y aplicaciones departamentales.";
 answers[68] = choices[68][2];
 units[68] = "45";
 comments[68] = "Id Pregunta: 599. Junta de Extremadura A1 2015";


//  Id pregunta: 733 Año de creación de pregunta: 2016
 questions[69]= "70)  Son l&iacute;neas de acci&oacute;n del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP.";
 choices[69]= new Array();
 choices[69][0] = "Disponer de sistemas de an&aacute;lisis de datos para la toma de decisiones y de funcionarios formados adecuadamente.";
 choices[69][1] = "Que en el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser electr&oacute;nica.";
 choices[69][2] = "Un mejor formaci&oacute;n del funcionariado y una atenci&oacute;n al ciudadano acorde a las nuevas tecnolog&iacute;as.";
 choices[69][3] = "Desarrollar el puesto de trabajo digital y mejorar la satisfacci&oacute;n del usuario en el uso de los servicios p&uacute;blicos digitales.";
 answers[69] = choices[69][3];
 units[69] = "28";
 comments[69] = "Id Pregunta: 733. Estrategia TIC";


//  Id pregunta: 84 Año de creación de pregunta: 2016
 questions[70]= "71)  En el marco europeo de interoperabilidad de sistemas de informaci&oacute;n, &iquest;qu&eacute; programa de la Uni&oacute;n Europea ha estado en vigor entre 2010 y 2015?";
 choices[70]= new Array();
 choices[70][0] = "Interchange of Data between Administrations (IDA)";
 choices[70][1] = "Interoperability Solutions for European Public Administrations (ISA)";
 choices[70][2] = "Interoperable Delivery of Pan-European eGovernment Services to Public Administrations, Businesses and Citizens (IDABC)";
 choices[70][3] = "Interoperability Electronic European Solution (IEES)";
 answers[70] = choices[70][1];
 units[70] = "43";
 comments[70] = "Id Pregunta: 84. AGE A1 2015";


//  Id pregunta: 627 Año de creación de pregunta: 2016
 questions[71]= "72)  Seg&uacute;n el Real Decreto 3/2010 sobre el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; organismo es el encargado de actuar ante cualquier agresi&oacute;n recibida en los sistemas de informaci&oacute;n de las Administraciones P&uacute;blicas?";
 choices[71]= new Array();
 choices[71][0] = "El CCN-CERT (Centro Criptol&oacute;gico Nacional&ndash;Computer Emergency Reaction Team).";
 choices[71][1] = "El GDT (Grupo de Delitos Telem&aacute;ticos).";
 choices[71][2] = "La BIT (Brigada de Investigaci&oacute;n Tecnol&oacute;gica).";
 choices[71][3] = "El CCN-STIC (Centro Criptol&oacute;gico Nacional-Seguridad de las Tecnolog&iacute;as de Informaci&oacute;n y Comunicaciones).";
 answers[71] = choices[71][0];
 units[71] = "46";
 comments[71] = "Id Pregunta: 627. Junta de Extremadura A1 2015";


//  Id pregunta: 716 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;C&uacute;al es un objetivo de las metodolog&iacute;as lean?";
 choices[72]= new Array();
 choices[72][0] = "Maximizar el valor para los clientes";
 choices[72][1] = "Reducir los costes y aumentar la calidad del producto o del servicio";
 choices[72][2] = " Entregar productos de manera m&aacute;s r&aacute;pida";
 choices[72][3] = "Todos los anteriores son objetivos de la metodolog&iacute;a lean";
 answers[72] = choices[72][3];
 units[72] = "34";
 comments[72] = "Id Pregunta: 716. Metodologias Lean";


//  Id pregunta: 721 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;C&uacute;al es la principal ventaja de sprints m&aacute;s cortos en Scrum?";
 choices[73]= new Array();
 choices[73][0] = "Permite reaccionar al equipo mejor ante imprevistos";
 choices[73][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[73][2] = "Es m&aacute;s f&aacute;cil cumplir los objetivos marcados al final de cada sprint";
 choices[73][3] = "Ninguna de las anteriores";
 answers[73] = choices[73][1];
 units[73] = "34, 84";
 comments[73] = "Id Pregunta: 721. Metodologias &aacute;giles";


//  Id pregunta: 725 Año de creación de pregunta: 2016
 questions[74]= "75)  Sobre el Scrum Team, cual es la afirmaci&oacute;n falsa";
 choices[74]= new Array();
 choices[74][0] = "Cada miembro del equipo tiene que tener un rol especifico y no puede asumir tareas que no est&eacute;n dentro de su &aacute;rea de especializaci&oacute;n.";
 choices[74][1] = "Los miembros del equipo deben tener un perfil en &lsquo;T&rsquo;";
 choices[74][2] = "Cada miembro del equipo tiene que tener un conocimiento m&aacute;s amplio de un &aacute;rea";
 choices[74][3] = "Cada miembro del equipo puede asumir cualquier tipo de tarea.";
 answers[74] = choices[74][0];
 units[74] = "34, 84";
 comments[74] = "Id Pregunta: 725. Metodologias &aacute;giles";


