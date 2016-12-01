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

//  Id pregunta: 43 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes principios NO est&aacute; recogido en el Manifiesto por el Desarrollo &Aacute;gil del Software?";
 choices[0]= new Array();
 choices[0][0] = "La simplicidad, o el arte de maximizar la cantidad de trabajo no realizado, es esencial.";
 choices[0][1] = "Aceptamos que los requisitos cambien, incluso en etapas tard&iacute;as del desarrollo. Los procesos &aacute;giles aprovechan el cambio para proporcionar ventaja competitiva al cliente.";
 choices[0][2] = "Las mejores arquitecturas, requisitos y dise&ntilde;os emergen por la aplicaci&oacute;n de unos procesos bien organizados.";
 choices[0][3] = "El software funcionando es la medida principal del progreso.";
 answers[0] = choices[0][2];
 units[0] = "34";
 comments[0] = "Id Pregunta: 43. AGE A1 2015";
 preguntaids[0] = 43


//  Id pregunta: 738 Año de creación de pregunta: 2016
 questions[1]= "2)  Las iniciativas que se lancen al amparo del Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE se basar&aacute;n en:";
 choices[1]= new Array();
 choices[1][0] = "6 principios.";
 choices[1][1] = "7 principios.";
 choices[1][2] = "5 principios.";
 choices[1][3] = "6 directrices.";
 answers[1] = choices[1][2];
 units[1] = "28";
 comments[1] = "Id Pregunta: 738. Estrategia TIC";
 preguntaids[1] = 738


//  Id pregunta: 92 Año de creación de pregunta: 2016
 questions[2]= "3)  Seg&uacute;n AENOR, la certificaci&oacute;n es:";
 choices[2]= new Array();
 choices[2][0] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 choices[2][1] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple con los requisitos legales para salir al mercado.";
 choices[2][2] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio es beneficioso para los consumidores.";
 choices[2][3] = "La acci&oacute;n llevada a cabo por una entidad dependiente de la Administraci&oacute;n p&uacute;blica mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 answers[2] = choices[2][0];
 units[2] = "48";
 comments[2] = "Id Pregunta: 92. AGE A1 2015";
 preguntaids[2] = 92


//  Id pregunta: 73 Año de creación de pregunta: 2016
 questions[3]= "4)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Digitalizaci&oacute;n de Documentos, &iquest;cu&aacute;l de los siguientes metadatos no es considerado como metadato complementario?";
 choices[3]= new Array();
 choices[3][0] = "Resoluci&oacute;n, que indica el valor de resoluci&oacute;n en p&iacute;xeles por pulgada empleada en la digitalizaci&oacute;n.";
 choices[3][1] = "Origen, que indica si el contenido del documento fue creado por un ciudadano o por una administraci&oacute;n.";
 choices[3][2] = "Tama&ntilde;o, que indica el valor y unidades del tama&ntilde;o l&oacute;gico del documento digitalizado.";
 choices[3][3] = "Idioma, que indica el idioma del contenido del documento digitalizado.";
 answers[3] = choices[3][1];
 units[3] = "44";
 comments[3] = "Id Pregunta: 73. AGE A1 2015";
 preguntaids[3] = 73


//  Id pregunta: 730 Año de creación de pregunta: 2016
 questions[4]= "5)  Indica la respuesta correcta";
 choices[4]= new Array();
 choices[4][0] = "Scrum no implica baja documentaci&oacute;n, de hecho hay estudios que estiman que es totalmente compatible con CMMI-3";
 choices[4][1] = "Scrum es una metodolog&iacute;a poco organizada";
 choices[4][2] = "Scrum no suele incluir a testers en el SCRUM TEAM";
 choices[4][3] = "En Scrum, sufre la calidad del producto o servicio al no pasar procesos de calidad reglados";
 answers[4] = choices[4][0];
 units[4] = "34, 84";
 comments[4] = "Id Pregunta: 730. Metodologias &aacute;giles";
 preguntaids[4] = 730


//  Id pregunta: 19 Año de creación de pregunta: 2016
 questions[5]= "6)  En el sistema de Identificaci&oacute;n, Autenticaci&oacute;n y Firma Electr&oacute;nica com&uacute;n para todo el Sector P&uacute;blico Administrativo Estatal (cl@ve):";
 choices[5]= new Array();
 choices[5][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital es el proveedor &uacute;nico de servicios de verificaci&oacute;n de la identidad.";
 choices[5][1] = "Sus destinatarios son exclusivamente ciudadanos espa&ntilde;oles.";
 choices[5][2] = "Su &aacute;mbito de aplicaci&oacute;n podr&aacute; extenderse a otras Administraciones P&uacute;blicas mediante la formalizaci&oacute;n del oportuno convenio.";
 choices[5][3] = "No se requiere registro previo de usuarios, ni consentimiento del usuario ya registrado en otros sistemas previos de identificaci&oacute;n, autenticaci&oacute;n y firma.";
 answers[5] = choices[5][2];
 units[5] = "47";
 comments[5] = "Id Pregunta: 19. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";
 preguntaids[5] = 19


//  Id pregunta: 436 Año de creación de pregunta: 2016
 questions[6]= "7)  Respecto a la carpeta ciudadana, se&ntilde;ale la respuesta incorrecta:";
 choices[6]= new Array();
 choices[6][0] = "Se trata de un &aacute;rea personal en la que cualquier ciudadano disponga de toda su informaci&oacute;n custodiada y gestionada por parte de la Administraci&oacute;n General del Estado.";
 choices[6][1] = "Permite comprobar el Estado de los expedientes con distintos organismos.";
 choices[6][2] = "La autenticaci&oacute;n del ciudadano se realiza a trav&eacute;s de certificados digitales.";
 choices[6][3] = "Muestra al ciudadano los Apoderamientos del Registro Electr&oacute;nico de Apoderamientos (REA), tanto para los poderdantes como los apoderados, posibilitando la revocaci&oacute;n y la renuncia respectivamente.";
 answers[6] = choices[6][2];
 units[6] = "43";
 comments[6] = "Id Pregunta: 436. SERVICIOS COMUNES";
 preguntaids[6] = 436


//  Id pregunta: 76 Año de creación de pregunta: 2016
 questions[7]= "8)  El proceso de auditor&iacute;a de sistemas de informaci&oacute;n se considera como un proceso:";
 choices[7]= new Array();
 choices[7][0] = "Estrat&eacute;gico";
 choices[7][1] = "Operativo";
 choices[7][2] = "T&aacute;ctico";
 choices[7][3] = "Tecnol&oacute;gico";
 answers[7] = choices[7][0];
 units[7] = "36";
 comments[7] = "Id Pregunta: 76. AGE A1 2015";
 preguntaids[7] = 76


//  Id pregunta: 78 Año de creación de pregunta: 2016
 questions[8]= "9)  En relaci&oacute;n con la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de protecci&oacute;n de datos de car&aacute;cter personal, se&ntilde;ale la respuesta correcta:";
 choices[8]= new Array();
 choices[8][0] = "En caso de datos de car&aacute;cter personal registrados inexactos o incompletos, el interesado debe instar su rectificaci&oacute;n, sin que puedan ser cancelados y sustituidos de oficio por los datos rectificados o completados.";
 choices[8][1] = "En caso de datos de car&aacute;cter personal registrados inexactos o incompletos, ser&aacute;n cancelados y sustituidos de oficio por los datos rectificados o completados, sin perjuicio del derecho de rectificaci&oacute;n y cancelaci&oacute;n del afectado.";
 choices[8][2] = "El responsable del tratamiento tendr&aacute; la obligaci&oacute;n de hacer efectivo el derecho de rectificaci&oacute;n o cancelaci&oacute;n del interesado en el plazo de 15 d&iacute;as.";
 choices[8][3] = "El responsable del tratamiento tendr&aacute; la obligaci&oacute;n de hacer efectivo el derecho de rectificaci&oacute;n o cancelaci&oacute;n del interesado en el plazo de 1 mes.";
 answers[8] = choices[8][1];
 units[8] = "35";
 comments[8] = "Id Pregunta: 78. AGE A1 2015";
 preguntaids[8] = 78


//  Id pregunta: 32 Año de creación de pregunta: 2016
 questions[9]= "10)  El art&iacute;culo 16 del Esquema Nacional de Interoperabilidad establece las condiciones de licenciamiento aplicables en el &aacute;mbito de la reutilizaci&oacute;n y transferencia de tecnolog&iacute;a, &iquest;cu&aacute;l de las siguientes licencias recomienda expresamente aplicar, sin perjuicio de otras licencias que garanticen los derechos expuestos en el mencionado art&iacute;culo?";
 choices[9]= new Array();
 choices[9][0] = "ASF-AL (Apache License 2.0)";
 choices[9][1] = "EUPL (European Union Public License)";
 choices[9][2] = "LGPL (Lesser General Public License)";
 choices[9][3] = "MIT(MIT License)";
 answers[9] = choices[9][1];
 units[9] = "43";
 comments[9] = "Id Pregunta: 32. AGE A1 2015";
 preguntaids[9] = 32


//  Id pregunta: 549 Año de creación de pregunta: 2016
 questions[10]= "11)  La gobernanza TIC incluye, entre otros, los siguientes aspectos:";
 choices[10]= new Array();
 choices[10][0] = "Integrar la estrategia TIC con la de negocio";
 choices[10][1] = "Adoptar e implantar un marco de control de las TIC";
 choices[10][2] = "Proporcionar las estructuras organizativas encargadas de implantar la estrategia TIC";
 choices[10][3] = "Todas las anteriores";
 answers[10] = choices[10][3];
 units[10] = "26";
 comments[10] = "Id Pregunta: 549. Gobernanza TIC";
 preguntaids[10] = 549


//  Id pregunta: 85 Año de creación de pregunta: 2016
 questions[11]= "12)  Seg&uacute;n MAGERIT 3.0, el informe en el que se recogen los resultados de la identificaci&oacute;n de las amenazas relevantes sobre el sistema a analizar, caracterizadas por las estimaciones de ocurrencia y da&ntilde;o causado, se denomina:";
 choices[11]= new Array();
 choices[11][0] = "Estimaci&oacute;n del riesgo";
 choices[11][1] = "Evaluaci&oacute;n de salvaguardas";
 choices[11][2] = "Declaraci&oacute;n de aplicabilidad";
 choices[11][3] = "Mapa de riesgos";
 answers[11] = choices[11][3];
 units[11] = "45";
 comments[11] = "Id Pregunta: 85. AGE A1 2015";
 preguntaids[11] = 85


//  Id pregunta: 722 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;C&uacute;al de las siguientes NO es una metodolog&iacute;a lean?";
 choices[12]= new Array();
 choices[12][0] = "Lean startup";
 choices[12][1] = "Business Model Canvas";
 choices[12][2] = "Dynamic system Development method";
 choices[12][3] = "Lean software development";
 answers[12] = choices[12][2];
 units[12] = "34";
 comments[12] = "Id Pregunta: 722. Metodologias Lean";
 preguntaids[12] = 722


//  Id pregunta: 720 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Qui&eacute;n es el responsable de transladar la metodolog&iacute;a lean al software?";
 choices[13]= new Array();
 choices[13][0] = "Eric Ries";
 choices[13][1] = "Steve Blank";
 choices[13][2] = "Tom Poppendieck";
 choices[13][3] = "Alexander Osterwalder";
 answers[13] = choices[13][2];
 units[13] = "34";
 comments[13] = "Id Pregunta: 720. Metodologias Lean";
 preguntaids[13] = 720


//  Id pregunta: 438 Año de creación de pregunta: 2016
 questions[14]= "15)  El Real Decreto 424/2016, de 11 de noviembre establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales. Se&ntilde;ale la respuesta falsa.";
 choices[14]= new Array();
 choices[14][0] = "Dentro del Ministerio de Energ&iacute;a, Turismo y Agenda Digital se encuentra la Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital, de la que depende la Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n.";
 choices[14][1] = "Suprime la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones.";
 choices[14][2] = "La Direcci&oacute;n General de Racionalizaci&oacute;n y Centralizaci&oacute;n de la Contrataci&oacute;n es un &oacute;rgano directivo perteneciente a la Subsecretar&iacute;a de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[14][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, con rango de Direcci&oacute;n general depende de la Secretar&iacute;a de Estado de Funci&oacute;n P&uacute;blica.";
 answers[14] = choices[14][3];
 units[14] = "43";
 comments[14] = "Id Pregunta: 438. SERVICIOS COMUNES";
 preguntaids[14] = 438


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
 preguntaids[15] = 8


//  Id pregunta: 742 Año de creación de pregunta: 2016
 questions[16]= "17)  Uno de los objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[16]= new Array();
 choices[16][0] = "Proveer de manera compartida servicios comunes";
 choices[16][1] = "El canal digital ha de ser el medio preferido por ciudadanos y empresas para relacionarse con la Administraci&oacute;n.";
 choices[16][2] = "Orientaci&oacute;n al usuario del servicio.";
 choices[16][3] = "Transparencia";
 answers[16] = choices[16][1];
 units[16] = "28";
 comments[16] = "Id Pregunta: 742. Estrategia TIC";
 preguntaids[16] = 742


//  Id pregunta: 437 Año de creación de pregunta: 2016
 questions[17]= "18)  Los Portales de EE.LL. y CC.AA. ofrecen una herramienta de gesti&oacute;n de identidades de los empleados p&uacute;blicos de las entidades locales o auton&oacute;micas. Se&ntilde;ale la respuesta incorrecta.";
 choices[17]= new Array();
 choices[17][0] = "Los empleados p&uacute;blicos de las EE.LL. o CC.AA. tienen que solicitar el alta en alguna unidad local o auton&oacute;mica.";
 choices[17][1] = "Proporcionan tambi&eacute;n informaci&oacute;n del cargo y rol asociados.";
 choices[17][2] = "Cualquier organismo p&uacute;blico puede solicitar la inclusi&oacute;n en la plataforma de nuevas aplicaciones dirigidas a las EE.LL. o CC.AA.: &eacute;stas podr&aacute;n acceder desde un punto centralizado al nuevo servicio.";
 choices[17][3] = "Los portales est&aacute;n integrados y sincronizados con el Directorio Com&uacute;n de Unidades Org&aacute;nicas y Oficinas &#8208; DIR3, permitiendo que la gesti&oacute;n de usuarios y roles no se vea afectada por cambios en el directorio.";
 answers[17] = choices[17][0];
 units[17] = "43";
 comments[17] = "Id Pregunta: 437. SERVICIOS COMUNES";
 preguntaids[17] = 437


//  Id pregunta: 75 Año de creación de pregunta: 2016
 questions[18]= "19)  Las transferencias internacionales de datos de car&aacute;cter personal:";
 choices[18]= new Array();
 choices[18][0] = "Se regulan en los art&iacute;culos 33 y 34 de la Ley Org&aacute;nica 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal y en el T&iacute;tulo VI del Real Decreto 1720/2007 por el que se aprueba el Reglamento de desarrollo de la Ley Org&aacute;nica 15/1999.";
 choices[18][1] = "Una transferencia internacional de datos, es un tratamiento de datos que supone una transmisi&oacute;n de los mismos fuera del territorio de la Uni&oacute;n Europea (UE).";
 choices[18][2] = "La Decisi&oacute;n de la Comisi&oacute;n 2000/520/CE, con arreglo a la Directiva 95/46/CE, permite actualmente realizar transferencias de datos a Estados Unidos si se cumplen los principios del acuerdo de Puerto Seguro.";
 choices[18][3] = "Precisan, en todo caso, la autorizaci&oacute;n previa de la Direcci&oacute;n de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[18] = choices[18][0];
 units[18] = "35";
 comments[18] = "Id Pregunta: 75. AGE A1 2015";
 preguntaids[18] = 75


//  Id pregunta: 676 Año de creación de pregunta: 2016
 questions[19]= "20)  En referencia a la implantaci&oacute;n de la interoperabilidad de la receta electr&oacute;nica:";
 choices[19]= new Array();
 choices[19][0] = "Permite los ciudadanos retiren sus medicamentos en las farmacias de fuera de la Comunidad Aut&oacute;noma en la que hayan sido recetados.";
 choices[19][1] = "Favorece la seguridad del paciente, al incorporar sistemas online de ayuda a la prescripci&oacute;n, que ayudan a la detecci&oacute;n de interaciones medicamentosas o duplicidades terap&eacute;uticas.";
 choices[19][2] = "Facilita al m&eacute;dico el seguimiento de la adherencia al tratamiento por parte del paciente.";
 choices[19][3] = "Todas las anteriores son correctas.";
 answers[19] = choices[19][3];
 units[19] = "47";
 comments[19] = "Id Pregunta: 676. Receta electr&oacute;nica";
 preguntaids[19] = 676


//  Id pregunta: 545 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;Qu&eacute; est&aacute;ndar ISO define un marco de trabajo para la gobernanza TIC?";
 choices[20]= new Array();
 choices[20][0] = "ISO/IEC 31000";
 choices[20][1] = "ISO/IEC 14000";
 choices[20][2] = "ISO/IEC 38500";
 choices[20][3] = "ISO/IEC 18000";
 answers[20] = choices[20][2];
 units[20] = "26";
 comments[20] = "Id Pregunta: 545. Gobernanza TIC";
 preguntaids[20] = 545


//  Id pregunta: 732 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es especifican de Kanban?:";
 choices[21]= new Array();
 choices[21][0] = "Se definen iteraciones";
 choices[21][1] = "Se limitan las tareas que se pueden realizar por fase";
 choices[21][2] = "Los miembros del equipo no tienen un rol especifico";
 choices[21][3] = "Todas las anteriores son caracter&iacute;sticas de la metodolog&iacute;a Kanban.";
 answers[21] = choices[21][1];
 units[21] = "34, 84";
 comments[21] = "Id Pregunta: 732. Metodologias &aacute;giles";
 preguntaids[21] = 732


//  Id pregunta: 17 Año de creación de pregunta: 2016
 questions[22]= "23)  De acuerdo con el Reglamento por el que se desarrolla parcialmente la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, aprobado por Real Decreto 1671/2009, de 6 de noviembre, se&ntilde;ale la respuesta correcta:";
 choices[22]= new Array();
 choices[22][0] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de emisi&oacute;n.";
 choices[22][1] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 12 meses desde la fecha de emisi&oacute;n.";
 choices[22][2] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de notificaci&oacute;n.";
 choices[22][3] = "Los documentos electr&oacute;nicos deben conservarse por el per&iacute;odo m&iacute;nimo que determine cada &oacute;rgano administrativo de acuerdo con el procedimiento administrativo de que se trate.";
 answers[22] = choices[22][3];
 units[22] = "44";
 comments[22] = "Id Pregunta: 17. AGE A1 2015";
 preguntaids[22] = 17


//  Id pregunta: 615 Año de creación de pregunta: 2016
 questions[23]= "24)  El Modelo de Referencia de Interconexi&oacute;n de Sistemas Abiertos (OSI) consta de siete niveles. Se&ntilde;ala cu&aacute;l de los principios que se aplicaron para llevar a cabo esta divisi&oacute;n es falso:";
 choices[23]= new Array();
 choices[23][0] = "No se deben crear demasiados niveles de manera que la tarea de describir e integrar &eacute;stos fuera m&aacute;s dif&iacute;cil de lo necesario.";
 choices[23][1] = "Aunque se requiera un nivel de abstracci&oacute;n diferente en el manejo de los datos, debe usarse un nivel ya existente.";
 choices[23][2] = "Cada nivel debe realizar unas funciones bien definidas.";
 choices[23][3] = "Crear para cada nivel interfases con el nivel superior e inferior &uacute;nicamente.";
 answers[23] = choices[23][1];
 units[23] = "48";
 comments[23] = "Id Pregunta: 615. Junta de Extremadura A1 2015";
 preguntaids[23] = 615


//  Id pregunta: 444 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Cu&aacute;l de las siguientes definiciones NO es uno de los roles de la Plataforma de Intermediaci&oacute;n, seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Protocolos de intermediaci&oacute;n de datos?:";
 choices[24]= new Array();
 choices[24][0] = "Mantendr&aacute; un portal web informativo con toda la documentaci&oacute;n relativa a la Plataforma.";
 choices[24][1] = "Almacenar&aacute; informaci&oacute;n personal de ciudadano derivada de la transacci&oacute;n de intercambio de datos, asegurando para ello la confidencialidad e integridad de la misma a trav&eacute;s de los mecanismos correspondientes.";
 choices[24][2] = "Mantendr&aacute; un centro de atenci&oacute;n a usuarios e integradores que canalice todas las incidencias relativas al sistema.";
 choices[24][3] = "Las consultas a los servicios de verificaci&oacute;n de datos, se pueden realizar de forma automatizada desde una aplicaci&oacute;n de gesti&oacute;n de un tr&aacute;mite, adaptadas para invocar los Webservice proporcionados por el servicio.";
 answers[24] = choices[24][1];
 units[24] = "43";
 comments[24] = "Id Pregunta: 444. SERVICIOS COMUNES";
 preguntaids[24] = 444


//  Id pregunta: 99 Año de creación de pregunta: 2016
 questions[25]= "26)  En cuanto a la imputaci&oacute;n de costes de los servicios compartidos en la Administraci&oacute;n General del Estado, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[25]= new Array();
 choices[25][0] = "Seg&uacute;n establece el Real Decreto 806/2014 el coste, caso de ocasionarse, ser&aacute; asumido &iacute;ntegramente por la Direcci&oacute;n de Tecnolog&iacute;as de las Informaci&oacute;n y Comunicaciones.";
 choices[25][1] = "Se sufragar&aacute;n con cargo a los presupuestos de Presidencia del Gobierno dado el car&aacute;cter horizontal del servicio compartido.";
 choices[25][2] = "La declaraci&oacute;n de todo servicio compartido deber&aacute; indicar si existe compensaci&oacute;n econ&oacute;mica al proveedor.";
 choices[25][3] = "No existir&aacute;, dado que su gratuidad y libertad de acceso es consustancial a la idea de servicio compartido.";
 answers[25] = choices[25][2];
 units[25] = "26";
 comments[25] = "Id Pregunta: 99. AGE A1 2015: actualmente la Secretar&iacute;a General de Administraci&oacute;n Digital asume las funciones de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, seg&uacute;n Real Decreto 424/2016";
 preguntaids[25] = 99


//  Id pregunta: 725 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Cu&aacute;les son las caracter&iacute;sticas del sprint 0 en SCRUM?";
 choices[26]= new Array();
 choices[26][0] = "Se dejan listos los entornos de desarrollo";
 choices[26][1] = "Se trabaja en el product backlog, dejando listos los product backlog &iacute;tems priorizados y estimados";
 choices[26][2] = "Se hace una previsi&oacute;n del reparto de historias de usuario por iteraci&oacute;n";
 choices[26][3] = "Todas las anteriores son correctas";
 answers[26] = choices[26][3];
 units[26] = "34, 84";
 comments[26] = "Id Pregunta: 725. Metodologias &aacute;giles";
 preguntaids[26] = 725


//  Id pregunta: 728 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;Cu&aacute;l es el n&uacute;mero de personas generalmete recomendados para cada equipo de Scrum?";
 choices[27]= new Array();
 choices[27][0] = "De 1 a  4 ";
 choices[27][1] = "De 3 a  7 ";
 choices[27][2] = "De 5 a  9";
 choices[27][3] = "De 7 a 11";
 answers[27] = choices[27][2];
 units[27] = "34, 84";
 comments[27] = "Id Pregunta: 728. Metodologias &aacute;giles";
 preguntaids[27] = 728


//  Id pregunta: 726 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;C&uacute;al es la afirmaci&oacute;n incorrecta?";
 choices[28]= new Array();
 choices[28][0] = "El sprint release es aquel que implementa las tareas necesarias para poner el sistema en producci&oacute;n";
 choices[28][1] = "El sprint release es el &uacute;ltimo sprint de la metodolog&iacute;a SCRUM";
 choices[28][2] = "En el sprint release se pueden llevan a cabo tareas relacionados con el despliegue y generaci&oacute;n de scripts de recuperaci&oacute;n del sistema";
 choices[28][3] = "En el sprint release se pueden llevar a cabo tareas relacionados con la documentaci&oacute;n, pruebas de carga, y tareas relacionadas con las bases de datos en producci&oacute;n.";
 answers[28] = choices[28][1];
 units[28] = "34, 84";
 comments[28] = "Id Pregunta: 726. Metodologias &aacute;giles";
 preguntaids[28] = 726


//  Id pregunta: 443 Año de creación de pregunta: 2016
 questions[29]= "30)  Respecto a las comunicaciones y notificaciones electr&oacute;nicas:";
 choices[29]= new Array();
 choices[29][0] = "El servicio SIM se utiliza para el env&iacute;o de notificaciones electr&oacute;nicas.";
 choices[29][1] = "El Servicio compartido la gesti&oacute;n de notificaciones Notific@, ser&aacute; de uso obligatorio para la AGE y sus OOPP en 2017.";
 choices[29][2] = "La plataforma Notific@, recibe desde los organismos emisores, las comunicaciones y adem&aacute;s de aportar otros valores a&ntilde;adidos, las pone a disposici&oacute;n de los destinatarios en la Carpeta Ciudadana.";
 choices[29][3] = "El servicio SIM, que se ha integrado en el Servicio compartido de gesti&oacute;n de notificaciones, proporciona a los ciudadanos y empresas un buz&oacute;n seguro.";
 answers[29] = choices[29][1];
 units[29] = "43";
 comments[29] = "Id Pregunta: 443. SERVICIOS COMUNES";
 preguntaids[29] = 443


//  Id pregunta: 552 Año de creación de pregunta: 2016
 questions[30]= "31)  Entre las funciones a desarrollar por la Comisi&oacute;n Sectorial de la administraci&oacute;n electr&oacute;nica NO se encuentra:";
 choices[30]= new Array();
 choices[30][0] = "Asegurar la compatibilidad e interoperabilidad de los sistemas y aplicaciones empleados por las Administraciones P&uacute;blicas.";
 choices[30][1] = "Impulsar el desarrollo de la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a.";
 choices[30][2] = "Asegurar la cooperaci&oacute;n entre las Administraciones P&uacute;blicas para proporcionar informaci&oacute;n administrativa clara, actualizada e inequ&iacute;voca.";
 choices[30][3] = "El seguimiento de la ejecuci&oacute;n del Plan de Transformaci&oacute;n Digital";
 answers[30] = choices[30][3];
 units[30] = "26";
 comments[30] = "Id Pregunta: 552. Gobernanza TIC";
 preguntaids[30] = 552


//  Id pregunta: 724 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Cu&aacute;l es la principal desventaja de sprints m&aacute;s largos?";
 choices[31]= new Array();
 choices[31][0] = "Permite reaccionar al equipo mejor ante imprevistos";
 choices[31][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[31][2] = "Se reduce el n&uacute;mero de reuniones de sprint";
 choices[31][3] = "Se puede desarrollar algo diferente a lo requerido y obtener el feedback del cliente m&aacute;s tarde.";
 answers[31] = choices[31][3];
 units[31] = "34, 84";
 comments[31] = "Id Pregunta: 724. Metodologias &aacute;giles";
 preguntaids[31] = 724


//  Id pregunta: 83 Año de creación de pregunta: 2016
 questions[32]= "33)  Seg&uacute;n WCAG 2.0, &iquest;con qu&eacute; principio est&aacute; relacionada la pauta &ldquo;Hacer que las p&aacute;ginas web aparezcan y operen de forma predecible&rdquo;?";
 choices[32]= new Array();
 choices[32][0] = "Perceptible";
 choices[32][1] = "Operable";
 choices[32][2] = "Comprensible";
 choices[32][3] = "Robusto";
 answers[32] = choices[32][2];
 units[32] = "42";
 comments[32] = "Id Pregunta: 83. AGE A1 2015";
 preguntaids[32] = 83


//  Id pregunta: 82 Año de creación de pregunta: 2016
 questions[33]= "34)  La titularidad de los derechos de explotaci&oacute;n de un programa de ordenador por una persona jur&iacute;dica expirar&aacute;:";
 choices[33]= new Array();
 choices[33][0] = "A los setenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[33][1] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita, o al de su creaci&oacute;n si no se hubiera divulgado.";
 choices[33][2] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[33][3] = "A los setenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita o al de su creaci&oacute;n si no se hubiera divulgado.";
 answers[33] = choices[33][3];
 units[33] = "41";
 comments[33] = "Id Pregunta: 82. AGE A1 2015";
 preguntaids[33] = 82


//  Id pregunta: 544 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Cu&aacute;l es el &oacute;rgano de la Comisi&oacute;n Europea encargado de la gobernanza TIC cuya misi&oacute;n es garantizar que la Comisi&oacute;n haga un uso eficaz de las tecnolog&iacute;as de la informaci&oacute;n y la comunicaci&oacute;n para el logro de sus objetivos organizativos y pol&iacute;ticos?";
 choices[34]= new Array();
 choices[34][0] = "La Direcci&oacute;n General de Inform&aacute;tica (DIGIT)";
 choices[34][1] = "Oficina del Organismo de Reguladores Europeos de las Comunicaciones Electr&oacute;nicas (ORECE)";
 choices[34][2] = "Agencia de Seguridad de las Redes y de la Informaci&oacute;n de la Uni&oacute;n Europea (ENISA)";
 choices[34][3] = "Instituto Europeo de Innovaci&oacute;n y Tecnolog&iacute;a (EIT)";
 answers[34] = choices[34][0];
 units[34] = "26";
 comments[34] = "Id Pregunta: 544. Gobernanza TIC";
 preguntaids[34] = 544


//  Id pregunta: 735 Año de creación de pregunta: 2016
 questions[35]= "36)  Son l&iacute;neas de acci&oacute;n del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP.";
 choices[35]= new Array();
 choices[35][0] = "Disponer de sistemas de an&aacute;lisis de datos para la toma de decisiones y de funcionarios formados adecuadamente.";
 choices[35][1] = "Que en el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser electr&oacute;nica.";
 choices[35][2] = "Un mejor formaci&oacute;n del funcionariado y una atenci&oacute;n al ciudadano acorde a las nuevas tecnolog&iacute;as.";
 choices[35][3] = "Desarrollar el puesto de trabajo digital y mejorar la satisfacci&oacute;n del usuario en el uso de los servicios p&uacute;blicos digitales.";
 answers[35] = choices[35][3];
 units[35] = "28";
 comments[35] = "Id Pregunta: 735. Estrategia TIC";
 preguntaids[35] = 735


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
 preguntaids[36] = 89


//  Id pregunta: 600 Año de creación de pregunta: 2016
 questions[37]= "38)  Entre la documentaci&oacute;n de la Seguridad de la Organizaci&oacute;n nos podremos encontrar:";
 choices[37]= new Array();
 choices[37][0] = "La Pol&iacute;tica de Seguridad Corporativa ser&aacute; elaborada por el Responsable de Seguridad Corporativa y aprobada por el Comit&eacute; de Seguridad Corporativa y por la Alta Direcci&oacute;n.";
 choices[37][1] = "La Pol&iacute;tica de Seguridad de las TIC que debe estar alineada en todo momento con el Mantenimiento de los Sistemas de Informaci&oacute;n.";
 choices[37][2] = "El Documento de Seguridad que ha de estar presente en toda documentaci&oacute;n de la seguridad de la informaci&oacute;n.";
 choices[37][3] = "Todas las respuestas anteriores son correctas.";
 answers[37] = choices[37][0];
 units[37] = "45";
 comments[37] = "Id Pregunta: 600. Junta de Extremadura A1 2015";
 preguntaids[37] = 600


//  Id pregunta: 441 Año de creación de pregunta: 2016
 questions[38]= "39)  Se&ntilde;ale la respuesta falsa respecto a Habilit@, Registro de Funcionarios Habilitados:";
 choices[38]= new Array();
 choices[38][0] = "El art&iacute;culo 12.3 de la Ley 39/2015recoge que la Administraci&oacute;n General del Estado, las Comunidades Aut&oacute;nomas y las Entidades Locales mantendr&aacute;n actualizado un registro, u otro sistema equivalente, donde constar&aacute;n los funcionarios habilitados para la identificaci&oacute;n o firma.";
 choices[38][1] = "La Orden HAP/8/2014, de 7 de enero, regula el Registro de funcionarios habilitados para la identificaci&oacute;n y autenticaci&oacute;n de ciudadanos en el &aacute;mbito de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos vinculados o dependientes.";
 choices[38][2] = "En el caso en que el ciudadano no disponga de medios de autenticaci&oacute;n y firma para relacionarse de manera electr&oacute;nica con las Administraciones, la Ley 39/2015 prev&eacute; que, siempre que el ciudadano se identifique y deje constancia de su consentimiento expreso, un funcionario podr&aacute; actuar en su nombre, utilizando el sistema de firma del que disponga para ello.";
 choices[38][3] = "Tambi&eacute;n se establece en la misma Ley 39/2015 que las Administraciones P&uacute;blicas podr&aacute;n realizar copias aut&eacute;nticas de los documentos p&uacute;blicos administrativos o privados mediante funcionario habilitado.";
 answers[38] = choices[38][1];
 units[38] = "43";
 comments[38] = "Id Pregunta: 441. SERVICIOS COMUNES";
 preguntaids[38] = 441


//  Id pregunta: 90 Año de creación de pregunta: 2016
 questions[39]= "40)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad (ENS) en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, el an&aacute;lisis y gesti&oacute;n de riesgos es una parte esencial del proceso de seguridad, debiendo mantenerse permanentemente actualizado. Para ello, el propio ENS establece que se debe realizar un an&aacute;lisis de riesgos formal para los sistemas de:";
 choices[39]= new Array();
 choices[39][0] = "Categor&iacute;a b&aacute;sica";
 choices[39][1] = "Categor&iacute;a media";
 choices[39][2] = "Categor&iacute;a alta";
 choices[39][3] = "Categor&iacute;a media y alta";
 answers[39] = choices[39][2];
 units[39] = "46";
 comments[39] = "Id Pregunta: 90. AGE A1 2015";
 preguntaids[39] = 90


//  Id pregunta: 550 Año de creación de pregunta: 2016
 questions[40]= "41)  El &aacute;mbito de aplicaci&oacute;n del RD 806/2014 de Gobernanza TIC es:";
 choices[40]= new Array();
 choices[40][0] = "La Administraci&oacute;n General del Estado";
 choices[40][1] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos";
 choices[40][2] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos y las Comunidades Aut&oacute;nomas";
 choices[40][3] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos, las Comunidades Aut&oacute;nomas y las Entidades Locales";
 answers[40] = choices[40][1];
 units[40] = "26";
 comments[40] = "Id Pregunta: 550. Gobernanza TIC";
 preguntaids[40] = 550


//  Id pregunta: 739 Año de creación de pregunta: 2016
 questions[41]= "42)  En el Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE, las administraciones p&uacute;blicas y las instituciones p&uacute;blicas de la Uni&oacute;n Europea deben ser abiertas, eficaces e integradoras en el a&ntilde;o:";
 choices[41]= new Array();
 choices[41][0] = "2025";
 choices[41][1] = "2023";
 choices[41][2] = "2030";
 choices[41][3] = "2020";
 answers[41] = choices[41][3];
 units[41] = "28";
 comments[41] = "Id Pregunta: 739. Estrategia TIC";
 preguntaids[41] = 739


//  Id pregunta: 80 Año de creación de pregunta: 2016
 questions[42]= "43)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, se&ntilde;ale la respuesta correcta respecto a la auditor&iacute;a de seguridad:";
 choices[42]= new Array();
 choices[42][0] = "Se realizar&aacute;, al menos, cada dieciocho meses para los sistemas de todas las categor&iacute;as, y con car&aacute;cter extraordinario, siempre que se produzcan modificaciones sustanciales en el sistema de informaci&oacute;n, que puedan repercutir en las medidas de seguridad requeridas.";
 choices[42][1] = "El equipo auditor, en el dise&ntilde;o de sus pruebas y revisiones, debe limitarse a la revisi&oacute;n de documentos facilitados por los responsables de la informaci&oacute;n, del servicio y de seguridad.";
 choices[42][2] = "Cuando existan razones que lo justifiquen, dentro de las tareas de la auditoria de seguridad podr&aacute;n incluirse adem&aacute;s la ejecuci&oacute;n de trabajos de consultor&iacute;a.";
 choices[42][3] = "El informe de auditor&iacute;a deber&aacute; dictaminar sobre la adecuaci&oacute;n de las medidas exigidas por el Esquema Nacional de Seguridad, identificar sus deficiencias y proponer las medidas correctoras o complementarias necesarias.";
 answers[42] = choices[42][3];
 units[42] = "46";
 comments[42] = "Id Pregunta: 80. AGE A1 2015";
 preguntaids[42] = 80


//  Id pregunta: 601 Año de creación de pregunta: 2016
 questions[43]= "44)  Algunos de los elementos tecnol&oacute;gicos que intervienen en la seguridad perimetral corporativa son:";
 choices[43]= new Array();
 choices[43][0] = "En la seguridad perimetral corporativa s&oacute;lo intervienen enrutadores y switches. .";
 choices[43][1] = "Switches, servidores y aplicaciones departamentales.";
 choices[43][2] = "Enrutadores , cortafuegos y sistemas VPN.";
 choices[43][3] = "Servidores, tecnolog&iacute;as inal&aacute;mbricas, sistemas de usuarios y aplicaciones departamentales.";
 answers[43] = choices[43][2];
 units[43] = "45";
 comments[43] = "Id Pregunta: 601. Junta de Extremadura A1 2015";
 preguntaids[43] = 601


//  Id pregunta: 440 Año de creación de pregunta: 2016
 questions[44]= "45)  Respecto al Sistema de Informaci&oacute;n Administrativa, se&ntilde;ale la respuesta falsa:";
 choices[44]= new Array();
 choices[44][0] = "Contiene la relaci&oacute;n de procedimientos y servicios de la AGE, y de todas las administraciones participantes.";
 choices[44][1] = "Cumple para la AGE el requisito establecido en el art&iacute;culo 9 del Esquema Nacional de Interoperabilidad, que obliga a las Administraciones p&uacute;blicas a mantener actualizado un Inventario de Informaci&oacute;n Administrativa.";
 choices[44][2] = "SIA est&aacute; dise&ntilde;ado para permitir la administraci&oacute;n distribuida y la actualizaci&oacute;n corresponsable por todas las Administraciones participantes, mediante una aplicaci&oacute;n web.";
 choices[44][3] = "Los usuarios son gestionados por una red de responsables de cada Departamento.";
 answers[44] = choices[44][2];
 units[44] = "43";
 comments[44] = "Id Pregunta: 440. SERVICIOS COMUNES";
 preguntaids[44] = 440


//  Id pregunta: 69 Año de creación de pregunta: 2016
 questions[45]= "46)  Los contratos que celebren los poderes adjudicadores se perfeccionan con su:";
 choices[45]= new Array();
 choices[45][0] = "Ejecuci&oacute;n";
 choices[45][1] = "Adjudicaci&oacute;n";
 choices[45][2] = "Licitaci&oacute;n";
 choices[45][3] = "Formalizaci&oacute;n";
 answers[45] = choices[45][3];
 units[45] = "37";
 comments[45] = "Id Pregunta: 69. AGE A1 2015";
 preguntaids[45] = 69


//  Id pregunta: 435 Año de creación de pregunta: 2016
 questions[46]= "47)  Sobre el servicio com&uacute;n Autentica, se&ntilde;ale la respuesta correcta:";
 choices[46]= new Array();
 choices[46][0] = "Autentica ofrece &uacute;nicamente servicios de autenticaci&oacute;n de empleados p&uacute;blicos de las AA.PP. y usuarios relacionados,";
 choices[46][1] = "Su objetivo es constituirse como el servicio com&uacute;n compartido de referencia para los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado, para sus aplicaciones internas.";
 choices[46][2] = "El servicio provee atributos de los usuarios autenticados relacionados con la unidad y el puesto de destino, incluyendo correo electr&oacute;nico y tel&eacute;fono.";
 choices[46][3] = "Ofrece funcionalidad de autorizaci&oacute;n de usuarios, &uacute;nicamente pertenecientes a la Administraci&oacute;n General del Estado.";
 answers[46] = choices[46][2];
 units[46] = "43";
 comments[46] = "Id Pregunta: 435. SERVICIOS COMUNES";
 preguntaids[46] = 435


//  Id pregunta: 547 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;Cu&aacute;l es la nueva denominaci&oacute;n para la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n tras la aprobaci&oacute;n del Real Decreto 424/2016, de 11 de noviembre, por el que se establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales?";
 choices[47]= new Array();
 choices[47][0] = "Subsecretar&iacute;a de Energ&iacute;a, Turismo y Agenda Digital";
 choices[47][1] = "Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[47][2] = "Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[47][3] = "Secretar&iacute;a de Estado de Administraci&oacute;n Digital";
 answers[47] = choices[47][1];
 units[47] = "26";
 comments[47] = "Id Pregunta: 547. Gobernanza TIC";
 preguntaids[47] = 547


//  Id pregunta: 447 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Cu&aacute;l de los siguientes datos NO es obligatorio que figure en la realizaci&oacute;n de una inscripci&oacute;n en el Registro electr&oacute;nico de Apoderamientos?";
 choices[48]= new Array();
 choices[48][0] = "Nombre y apellidos, denominaci&oacute;n o raz&oacute;n social y NIF del poderante.";
 choices[48][1] = "Per&iacute;odo de vigencia de los tr&aacute;mites objeto de apoderamiento.";
 choices[48][2] = "Fecha de otorgamiento.";
 choices[48][3] = "N&uacute;mero de referencia del alta y fecha de alta en el Registro.";
 answers[48] = choices[48][1];
 units[48] = "43";
 comments[48] = "Id Pregunta: 447. SERVICIOS COMUNES";
 preguntaids[48] = 447


//  Id pregunta: 1 Año de creación de pregunta: 2016
 questions[49]= "50)  Los medios y servicios compartidos, establecidos en el Real Decreto 806/2014 dentro del modelo de gobernanza en el &aacute;mbito de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones de la Administraci&oacute;n General del Estado, son tales que:";
 choices[49]= new Array();
 choices[49][0] = "Su declaraci&oacute;n presupone que el servicio se encuentra en producci&oacute;n, listo para la adhesi&oacute;n de las diferentes unidades departamentales.";
 choices[49][1] = "Dado su car&aacute;cter obligatorio y sustitutivo, no se permite acordar excepciones por razones econ&oacute;micas, t&eacute;cnicas o de oportunidad sobrevenidas.";
 choices[49][2] = "Su declaraci&oacute;n establece la habilitaci&oacute;n para el desarrollo de las medidas t&eacute;cnicas, organizativas, presupuestarias y normativas.";
 choices[49][3] = "Su provisi&oacute;n se realiza directa y exclusivamente por medio de la Direcci&oacute;n General de Administraci&oacute;n Digital";
 answers[49] = choices[49][2];
 units[49] = "26";
 comments[49] = "Id Pregunta: 1. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";
 preguntaids[49] = 1


//  Id pregunta: 718 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;C&uacute;al es un objetivo de las metodolog&iacute;as lean?";
 choices[50]= new Array();
 choices[50][0] = "Maximizar el valor para los clientes";
 choices[50][1] = "Reducir los costes y aumentar la calidad del producto o del servicio";
 choices[50][2] = " Entregar productos de manera m&aacute;s r&aacute;pida";
 choices[50][3] = "Todos los anteriores son objetivos de la metodolog&iacute;a lean";
 answers[50] = choices[50][3];
 units[50] = "34";
 comments[50] = "Id Pregunta: 718. Metodologias Lean";
 preguntaids[50] = 718


//  Id pregunta: 850 Año de creación de pregunta: 2016
 questions[51]= "52)  El RPO (Recovery Point Objective) de una organizaci&oacute;n son 2 horas. &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?: ";
 choices[51]= new Array();
 choices[51][0] = "No m&aacute;s de 2 horas de datos de producci&oacute;n se pueden perder en caso de desastre";
 choices[51][1] = "No m&aacute;s de 4 horas de datos de producci&oacute;n se pueden perder en caso de desastre";
 choices[51][2] = "El tiempo para recuperar los sistemas en producci&oacute;n de nuevo no puede ser m&aacute;s de 2 horas.";
 choices[51][3] = "El tiempo para recuperar los sistemas en producci&oacute;n de nuevo no puede ser m&aacute;s de 4 horas.";
 answers[51] = choices[51][0];
 units[51] = "45";
 comments[51] = "Id Pregunta: 850. Xunta de Galicia 2015";
 preguntaids[51] = 850


//  Id pregunta: 727 Año de creación de pregunta: 2016
 questions[52]= "53)  Sobre el Scrum Team, cual es la afirmaci&oacute;n falsa";
 choices[52]= new Array();
 choices[52][0] = "Cada miembro del equipo tiene que tener un rol especifico y no puede asumir tareas que no est&eacute;n dentro de su &aacute;rea de especializaci&oacute;n.";
 choices[52][1] = "Los miembros del equipo deben tener un perfil en &lsquo;T&rsquo; (manejo en una serie amplia de &aacute;reas, con conocimientos en profundidad en unas pocas)";
 choices[52][2] = "Cada miembro del equipo tiene que tener un conocimiento m&aacute;s amplio de un &aacute;rea";
 choices[52][3] = "Cada miembro del equipo puede asumir cualquier tipo de tarea";
 answers[52] = choices[52][0];
 units[52] = "34, 84";
 comments[52] = "Id Pregunta: 727. Metodologias &aacute;giles";
 preguntaids[52] = 727


//  Id pregunta: 58 Año de creación de pregunta: 2016
 questions[53]= "54)  Se&ntilde;ale cu&aacute;l de los siguientes apartados NO ha sido declarado como servicio compartido en la Administraci&oacute;n General del Estado:";
 choices[53]= new Array();
 choices[53][0] = "Servicio com&uacute;n de gesti&oacute;n econ&oacute;mico-presupuestaria";
 choices[53][1] = "Servicio com&uacute;n de georreferenciaci&oacute;n";
 choices[53][2] = "Servicio de seguridad gestionada";
 choices[53][3] = "Servicio de gesti&oacute;n de notificaciones";
 answers[53] = choices[53][1];
 units[53] = "26";
 comments[53] = "Id Pregunta: 58. AGE A1 2015";
 preguntaids[53] = 58


//  Id pregunta: 77 Año de creación de pregunta: 2016
 questions[54]= "55)  Respecto al uso de servicios de firma de documentos electr&oacute;nicos mediante certificados electr&oacute;nicos centralizados, mediante el sistema Cl@ve, indique cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[54]= new Array();
 choices[54][0] = "Para poder acceder al servicio, el usuario deber&aacute; solicitar previa y expresamente la emisi&oacute;n de los certificados electr&oacute;nicos centralizados correspondientes.";
 choices[54][1] = "Los certificados electr&oacute;nicos centralizados ser&aacute;n emitidos con las mismas garant&iacute;as de identificaci&oacute;n del DNI electr&oacute;nico del ciudadano.";
 choices[54][2] = "El acceso al servicio requiere en todo caso que el usuario se haya registrado en Cl@ve y haya activado su Cl@ve permanente.";
 choices[54][3] = "En el momento de la identificaci&oacute;n, se requerir&aacute; la utilizaci&oacute;n de una verificaci&oacute;n de seguridad adicional mediante un c&oacute;digo de un solo uso y validez limitada en el tiempo que se enviar&aacute; al tel&eacute;fono m&oacute;vil del usuario registrado.";
 answers[54] = choices[54][2];
 units[54] = "47";
 comments[54] = "Id Pregunta: 77. AGE A1 2015";
 preguntaids[54] = 77


//  Id pregunta: 87 Año de creación de pregunta: 2016
 questions[55]= "56)  Respecto a la pol&iacute;tica de normalizaci&oacute;n TIC en la Uni&oacute;n Europea, como se&ntilde;ala el Reglamento 1025/2012 del Parlamento y del Consejo, la identificaci&oacute;n de especificaciones t&eacute;cnicas de las TIC admisibles a efectos de referenciaci&oacute;n:";
 choices[55]= new Array();
 choices[55][0] = "Ha de estar siempre basada en normas de estandarizaci&oacute;n nacionales, europeas o internacionales.";
 choices[55][1] = "No deben ser usadas para permitir la interoperabilidad en la contrataci&oacute;n p&uacute;blica, dado que se podr&iacute;an dar situaciones monopol&iacute;sticas.";
 choices[55][2] = "Ser&aacute; realizada por la Comisi&oacute;n, bien a propuesta de un Estado miembro o por iniciativa propia, sin necesidad de ser una norma nacional, europea o internacional, cumpli&eacute;ndose los dem&aacute;s requisitos establecidos en el reglamento.";
 choices[55][3] = "Requieren para su adopci&oacute;n la unanimidad de todos los Estados miembro.";
 answers[55] = choices[55][2];
 units[55] = "48";
 comments[55] = "Id Pregunta: 87. AGE A1 2015";
 preguntaids[55] = 87


//  Id pregunta: 743 Año de creación de pregunta: 2016
 questions[56]= "57)  Dos de los principios del Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE son:";
 choices[56]= new Array();
 choices[56][0] = "Transparencia e innovaci&oacute;n";
 choices[56][1] = "Seguridad y reutilizaci&oacute;n";
 choices[56][2] = "Reutilizaci&oacute;n y buz&oacute;n de quejas y sugerencias";
 choices[56][3] = "Principio de solo una vez y transfronterizo de forma predeterminada";
 answers[56] = choices[56][3];
 units[56] = "28";
 comments[56] = "Id Pregunta: 743. Estrategia TIC";
 preguntaids[56] = 743


//  Id pregunta: 733 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes reglas se corresponde a las reglas de la metodolog&iacute;a Kanban?:";
 choices[57]= new Array();
 choices[57][0] = "Visualizar el trabajo o el flujo de trabajo";
 choices[57][1] = "Determinar el l&iacute;mite de trabajo en curso (Work in progress)";
 choices[57][2] = "Medir el tiempo en completar una tarea (Lead time)";
 choices[57][3] = "Todas las anteriores son reglas correspondientes a la metodolog&iacute;a Kanban.";
 answers[57] = choices[57][3];
 units[57] = "34, 84";
 comments[57] = "Id Pregunta: 733. Metodologias &aacute;giles";
 preguntaids[57] = 733


//  Id pregunta: 599 Año de creación de pregunta: 2016
 questions[58]= "59)  La pol&iacute;tica de seguridad de alto nivel de la Organizaci&oacute;n:";
 choices[58]= new Array();
 choices[58][0] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, sin entrar en detalles acerca del COMO.";
 choices[58][1] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer y COMO se debe implementar.";
 choices[58][2] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 choices[58][3] = "Debe describir QUE se intenta proteger, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 answers[58] = choices[58][0];
 units[58] = "45";
 comments[58] = "Id Pregunta: 599. Junta de Extremadura A1 2015";
 preguntaids[58] = 599


//  Id pregunta: 22 Año de creación de pregunta: 2016
 questions[59]= "60)  La composici&oacute;n inicial del Comit&eacute; Ejecutivo de la Comisi&oacute;n de Estrategia TIC, fijada por la disposici&oacute;n adicional quinta del Real Decreto 806/2014, incluye, entre otros, a:";
 choices[59]= new Array();
 choices[59][0] = "Los responsables de las unidades ministeriales de tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones.";
 choices[59][1] = "La Inspecci&oacute;n General del Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[59][2] = "El titular de la Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 choices[59][3] = "Representantes de las empresas del sector TIC nacional.";
 answers[59] = choices[59][1];
 units[59] = "26";
 comments[59] = "Id Pregunta: 22. AGE A1 2015";
 preguntaids[59] = 22


//  Id pregunta: 51 Año de creación de pregunta: 2016
 questions[60]= "61)  De acuerdo con el Real Decreto 1720/2007 indique qu&eacute; medida ha de ser aplicada obligatoriamente a los ficheros de los que sean responsables las Administraciones tributarias en el ejercicio de sus potestades tributarias:";
 choices[60]= new Array();
 choices[60][0] = "Cifrado de las comunicaciones";
 choices[60][1] = "Al menos, una auditor&iacute;a bienal (cada 2 a&ntilde;os)";
 choices[60][2] = "Registro de los accesos";
 choices[60][3] = "No queda regulado en dicho Real Decreto al depender de la criticidad del fichero.";
 answers[60] = choices[60][1];
 units[60] = "35";
 comments[60] = "Id Pregunta: 51. AGE A1 2015. Pregunta anulada en el examen real, ya que la opci&oacute;n B dec&iacute;a &quot;bianual&quot; en lugar de &quot;bienal&quot;";
 preguntaids[60] = 51


//  Id pregunta: 0 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Cu&aacute;l de los siguientes NO es un objetivo del Plan de Transformaci&oacute;n Digital de la AGE?";
 choices[61]= new Array();
 choices[61][0] = "Consolidar el tejido productivo nacional apoyando el efectivo despliegue de la Sociedad de la Informaci&oacute;n.";
 choices[61][1] = "Conseguir una mayor eficiencia en los servicios TIC comunes de la Administraci&oacute;n.";
 choices[61][2] = "Implantar una gesti&oacute;n corporativa inteligente de la informaci&oacute;n y los datos.";
 choices[61][3] = "Adoptar una estrategia corporativa de seguridad y usabilidad.";
 answers[61] = choices[61][0];
 units[61] = "26";
 comments[61] = "Id Pregunta: 0. AGE A1 2015";
 preguntaids[61] = 0


//  Id pregunta: 741 Año de creación de pregunta: 2016
 questions[62]= "63)  En relaci&oacute;n al principio rector Orientaci&oacute;n al usuario del servicio del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[62]= new Array();
 choices[62][0] = "Es necesario redefinir los servicios empezando por el lado del usuario, ya sea un ciudadano o un empleado p&uacute;blico, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y seguridad.";
 choices[62][1] = "Es necesario redefinir los servicios empezando por el lado del ciudadano, ya sea un funcionario o una persona f&iacute;sica, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y transparencia.";
 choices[62][2] = "Se requiere modernizar los servicios p&uacute;blicos empezando por el lado del ciudadano, ya sea un funcionario o una persona f&iacute;sica, con una vocaci&oacute;n de transparencia, usabilidad, simplicidad y accesibilidad.";
 choices[62][3] = "Es necesario redefinir los servicios empezando por el lado del usuario, ya sea un ciudadano o un empleado p&uacute;blico, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y transparencia.";
 answers[62] = choices[62][0];
 units[62] = "28";
 comments[62] = "Id Pregunta: 741. Estrategia TIC";
 preguntaids[62] = 741


//  Id pregunta: 84 Año de creación de pregunta: 2016
 questions[63]= "64)  En el marco europeo de interoperabilidad de sistemas de informaci&oacute;n, &iquest;qu&eacute; programa de la Uni&oacute;n Europea ha estado en vigor entre 2010 y 2015?";
 choices[63]= new Array();
 choices[63][0] = "Interchange of Data between Administrations (IDA)";
 choices[63][1] = "Interoperability Solutions for European Public Administrations (ISA)";
 choices[63][2] = "Interoperable Delivery of Pan-European eGovernment Services to Public Administrations, Businesses and Citizens (IDABC)";
 choices[63][3] = "Interoperability Electronic European Solution (IEES)";
 answers[63] = choices[63][1];
 units[63] = "43";
 comments[63] = "Id Pregunta: 84. AGE A1 2015";
 preguntaids[63] = 84


//  Id pregunta: 721 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;C&uacute;al de los siguientes puntos NO es uno de los principios de las metodolog&iacute;as lean?";
 choices[64]= new Array();
 choices[64][0] = "Flexibilidad para variar el servicio o producto";
 choices[64][1] = "Eliminar desperdicios";
 choices[64][2] = "Decidir lo m&aacute;s tarde posible";
 choices[64][3] = "Hacer entregas tan r&aacute;pido como sea posible";
 answers[64] = choices[64][0];
 units[64] = "34";
 comments[64] = "Id Pregunta: 721. Metodologias Lean";
 preguntaids[64] = 721


//  Id pregunta: 548 Año de creación de pregunta: 2016
 questions[65]= "66)  El principio definido en el est&aacute;ndar ISO/IEC 38500 para la Gobernanza TIC que establece la necesidad de cumplir los requerimientos regulatorios y legales es el principio de:";
 choices[65]= new Array();
 choices[65][0] = "Conformidad";
 choices[65][1] = "Responsabilidad";
 choices[65][2] = "Adquisici&oacute;n";
 choices[65][3] = "Desempe&ntilde;o";
 answers[65] = choices[65][0];
 units[65] = "26";
 comments[65] = "Id Pregunta: 548. Gobernanza TIC";
 preguntaids[65] = 548


//  Id pregunta: 719 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;A trav&eacute;s de qu&eacute; empresa surgen las metodolog&iacute;as lean?";
 choices[66]= new Array();
 choices[66][0] = "Ford";
 choices[66][1] = "Google";
 choices[66][2] = "Toyota";
 choices[66][3] = "Facebook";
 answers[66] = choices[66][2];
 units[66] = "34";
 comments[66] = "Id Pregunta: 719. Metodologias Lean";
 preguntaids[66] = 719


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
 preguntaids[67] = 86


//  Id pregunta: 446 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Cu&aacute;l es el servicio com&uacute;n que  permitir&aacute; la tramitaci&oacute;n por medios electr&oacute;nicos de todo el ciclo de vida involucrado en la concesi&oacute;n de ayudas provenientes de los fondos FEDER?";
 choices[68]= new Array();
 choices[68][0] = "IRIA";
 choices[68][1] = "GALATEA";
 choices[68][2] = "BADARAL";
 choices[68][3] = "SOROLLA";
 answers[68] = choices[68][1];
 units[68] = "43";
 comments[68] = "Id Pregunta: 446. SERVICIOS COMUNES";
 preguntaids[68] = 446


//  Id pregunta: 629 Año de creación de pregunta: 2016
 questions[69]= "70)  Seg&uacute;n el Real Decreto 3/2010 sobre el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; organismo es el encargado de actuar ante cualquier agresi&oacute;n recibida en los sistemas de informaci&oacute;n de las Administraciones P&uacute;blicas?";
 choices[69]= new Array();
 choices[69][0] = "El CCN-CERT (Centro Criptol&oacute;gico Nacional&ndash;Computer Emergency Reaction Team).";
 choices[69][1] = "El GDT (Grupo de Delitos Telem&aacute;ticos).";
 choices[69][2] = "La BIT (Brigada de Investigaci&oacute;n Tecnol&oacute;gica).";
 choices[69][3] = "El CCN-STIC (Centro Criptol&oacute;gico Nacional-Seguridad de las Tecnolog&iacute;as de Informaci&oacute;n y Comunicaciones).";
 answers[69] = choices[69][0];
 units[69] = "46";
 comments[69] = "Id Pregunta: 629. Junta de Extremadura A1 2015";
 preguntaids[69] = 629


//  Id pregunta: 740 Año de creación de pregunta: 2016
 questions[70]= "71)  La estructura de la Estrategia TIC:";
 choices[70]= new Array();
 choices[70][0] = "5 principios rectores, 7 objetivos estrat&eacute;gicos, 9 l&iacute;neas de acci&oacute;n";
 choices[70][1] = "5 principios rectores, 5 objetivos estrat&eacute;gicos, 7 l&iacute;neas de acci&oacute;n";
 choices[70][2] = "5 principios rectores, 5 objetivos estrat&eacute;gicos, 9 l&iacute;neas de acci&oacute;n";
 choices[70][3] = "5 principios rectores, 6 objetivos estrat&eacute;gicos, 8 l&iacute;neas de acci&oacute;n";
 answers[70] = choices[70][2];
 units[70] = "28";
 comments[70] = "Id Pregunta: 740. Estrategia TIC";
 preguntaids[70] = 740


//  Id pregunta: 734 Año de creación de pregunta: 2016
 questions[71]= "72)  Indique la opci&oacute;n correcta en relaci&oacute;n con la VISI&Oacute;N de la Estrategia TIC";
 choices[71]= new Array();
 choices[71][0] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser electr&oacute;nica.";
 choices[71][1] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser digital.";
 choices[71][2] = "Para el a&ntilde;o 2020 ya no existir&aacute; ning&uacute;n procedimiento en soporte papel.";
 choices[71][3] = "En el a&ntilde;o 2020 los funcionarios realizar&aacute;n todas sus tareas con ordenador.";
 answers[71] = choices[71][1];
 units[71] = "28";
 comments[71] = "Id Pregunta: 734. Estrategia TIC";
 preguntaids[71] = 734


//  Id pregunta: 731 Año de creación de pregunta: 2016
 questions[72]= "73)  Indique cual de los siguientes no forma parte del vocabulario de scrum";
 choices[72]= new Array();
 choices[72][0] = "Burn-up chart";
 choices[72][1] = "Arquitectural Skype";
 choices[72][2] = "Burn-down chart";
 choices[72][3] = "Definition of done";
 answers[72] = choices[72][1];
 units[72] = "34, 84";
 comments[72] = "Id Pregunta: 731. Metodologias &aacute;giles";
 preguntaids[72] = 731


//  Id pregunta: 618 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;A qui&eacute;n est&aacute; destinado principalmente las Pautas de Accesibilidad al Contenido en la Web (WCAG)?";
 choices[73]= new Array();
 choices[73][0] = "A desarrolladores de navegadores web y reproductores multimedia.";
 choices[73][1] = "A desarrolladores de herramientas de autor, como herramientas de creaci&oacute;n de p&aacute;ginas web o de creaci&oacute;n de archivos multimedia.";
 choices[73][2] = "A desarrolladores de herramientas de evaluaci&oacute;n de la accesibilidad web.";
 choices[73][3] = "Todas las respuestas son correctas.";
 answers[73] = choices[73][2];
 units[73] = "42";
 comments[73] = "Id Pregunta: 618. Junta de Extremadura A1 2015";
 preguntaids[73] = 618


//  Id pregunta: 546 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;Cu&aacute;l es el &oacute;rgano superior de gobernanza TIC en la Administraci&oacute;n General del Estado?";
 choices[74]= new Array();
 choices[74][0] = "El Comit&eacute; de Direcci&oacute;n TIC";
 choices[74][1] = "El Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[74][2] = "La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[74][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[74] = choices[74][3];
 units[74] = "26";
 comments[74] = "Id Pregunta: 546. Gobernanza TIC";
 preguntaids[74] = 546


