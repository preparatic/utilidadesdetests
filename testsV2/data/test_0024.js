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

//  Id pregunta: 550 Año de creación de pregunta: 2016
 questions[0]= "1)  Entre las funciones a desarrollar por la Comisi&oacute;n Sectorial de la administraci&oacute;n electr&oacute;nica NO se encuentra:";
 choices[0]= new Array();
 choices[0][0] = "Asegurar la compatibilidad e interoperabilidad de los sistemas y aplicaciones empleados por las Administraciones P&uacute;blicas.";
 choices[0][1] = "Impulsar el desarrollo de la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a.";
 choices[0][2] = "Asegurar la cooperaci&oacute;n entre las Administraciones P&uacute;blicas para proporcionar informaci&oacute;n administrativa clara, actualizada e inequ&iacute;voca.";
 choices[0][3] = "El seguimiento de la ejecuci&oacute;n del Plan de Transformaci&oacute;n Digital";
 answers[0] = choices[0][3];
 units[0] = "26";
 comments[0] = "Id Pregunta: 550. Gobernanza TIC";


//  Id pregunta: 36 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;Cu&aacute;l es la interfaz est&aacute;ndar de programaci&oacute;n Java para invocar a m&eacute;todos nativos escritos en otros lenguajes como C o C++?";
 choices[1]= new Array();
 choices[1][0] = "JAXP";
 choices[1][1] = "JNI";
 choices[1][2] = "JNDI";
 choices[1][3] = "JDBC";
 answers[1] = choices[1][1];
 units[1] = "64";
 comments[1] = "Id Pregunta: 36. AGE A1 2015";


//  Id pregunta: 579 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Cu&aacute;les son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[2]= new Array();
 choices[2][0] = "Transparencia e innovaci&oacute;n, orientaci&oacute;n al usuario del servicio y fomentar el uso de est&aacute;ndares";
 choices[2][1] = "Colaboraci&oacute;n y alianzas, unidad y visi&oacute;n integral y orientaci&oacute;n al usuario del servicio";
 choices[2][2] = "Unidad y visi&oacute;n integral, orientaci&oacute;n al usuario del servicio y prestaci&oacute;n de servicios compartidos";
 choices[2][3] = "Colaboraci&oacute;n y alianzas, fomentar el uso de est&aacute;ndares e incrementar la productividad y la eficacia";
 answers[2] = choices[2][1];
 units[2] = "19";
 comments[2] = "Id Pregunta: 579. Estrategia TIC";


//  Id pregunta: 445 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Cu&aacute;l de los siguientes datos NO es obligatorio que figure en la realizaci&oacute;n de una inscripci&oacute;n en el Registro electr&oacute;nico de Apoderamientos?";
 choices[3]= new Array();
 choices[3][0] = "Nombre y apellidos, denominaci&oacute;n o raz&oacute;n social y NIF del poderante.";
 choices[3][1] = "Per&iacute;odo de vigencia de los tr&aacute;mites objeto de apoderamiento.";
 choices[3][2] = "Fecha de otorgamiento.";
 choices[3][3] = "N&uacute;mero de referencia del alta y fecha de alta en el Registro.";
 answers[3] = choices[3][1];
 units[3] = "43";
 comments[3] = "Id Pregunta: 445. SERVICIOS COMUNES";


//  Id pregunta: 15 Año de creación de pregunta: 2016
 questions[4]= "5)  Si una aplicaci&oacute;n web desplegada en una JVM utiliza un servlet para generar p&aacute;ginas web de forma din&aacute;mica, dicho servlet no implementa la interfaz SingleThreadModel, y en un momento determinado se encuentra recibiendo m&uacute;ltiples peticiones de clientes de forma concurrente, &iquest;cu&aacute;ntos objetos de dicha clase estar&aacute;n cargados en la memoria de la JVM?";
 choices[4]= new Array();
 choices[4][0] = "0";
 choices[4][1] = "1";
 choices[4][2] = "Tantos como peticiones concurrentes tenga.";
 choices[4][3] = "Tantos como le permita la memoria de la JVM.";
 answers[4] = choices[4][1];
 units[4] = "64";
 comments[4] = "Id Pregunta: 15. AGE A1 2015";


//  Id pregunta: 59 Año de creación de pregunta: 2016
 questions[5]= "6)  Con respecto a la norma ISO/IEC 20000 de gesti&oacute;n de servicios TI:";
 choices[5]= new Array();
 choices[5][0] = "Permite certificar a individuos a lo largo de diferentes niveles de conocimiento.";
 choices[5][1] = "Impone el uso exclusivo de ITIL como metodolog&iacute;a a seguir.";
 choices[5][2] = "No permite validar la capacidad de un proveedor de servicios TI de gestionar efectivamente servicios TI.";
 choices[5][3] = "Microsoft Operation Framework (MOF) puede ser usado para conseguir su cumplimiento.";
 answers[5] = choices[5][3];
 units[5] = "101";
 comments[5] = "Id Pregunta: 59. AGE A1 2015";


//  Id pregunta: 261 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Qui&eacute;n representa al Consejo General del Poder Judicial?";
 choices[6]= new Array();
 choices[6][0] = "La Comisi&oacute;n Permanente.";
 choices[6][1] = "El Presidente.";
 choices[6][2] = "El Pleno.";
 choices[6][3] = "El Vicepresidente.";
 answers[6] = choices[6][3];
 units[6] = "1";
 comments[6] = "Id Pregunta: 261. CONSTITUCION1978";


//  Id pregunta: 373 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Cu&aacute;ntos Abogados Generales asisten al Tribunal Superior de Justicia?:";
 choices[7]= new Array();
 choices[7][0] = "Nueve.";
 choices[7][1] = "Diez.";
 choices[7][2] = "Siete.";
 choices[7][3] = "Ocho.";
 answers[7] = choices[7][3];
 units[7] = "5";
 comments[7] = "Id Pregunta: 373. UNION EUROPEA";


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


//  Id pregunta: 436 Año de creación de pregunta: 2016
 questions[9]= "10)  Respecto a la carpeta ciudadana, se&ntilde;ale la respuesta incorrecta:";
 choices[9]= new Array();
 choices[9][0] = "Se trata de un &aacute;rea personal en la que cualquier ciudadano disponga de toda su informaci&oacute;n custodiada y gestionada por parte de la Administraci&oacute;n General del Estado.";
 choices[9][1] = "Permite comprobar el Estado de los expedientes con distintos organismos.";
 choices[9][2] = "La autenticaci&oacute;n del ciudadano se realiza a trav&eacute;s de certificados digitales.";
 choices[9][3] = "Muestra al ciudadano los Apoderamientos del Registro Electr&oacute;nico de Apoderamientos (REA), tanto para los poderdantes como los apoderados, posibilitando la revocaci&oacute;n y la renuncia respectivamente.";
 answers[9] = choices[9][2];
 units[9] = "43";
 comments[9] = "Id Pregunta: 436. SERVICIOS COMUNES";


//  Id pregunta: 548 Año de creación de pregunta: 2016
 questions[10]= "11)  El &aacute;mbito de aplicaci&oacute;n del RD 806/2014 de Gobernanza TIC es:";
 choices[10]= new Array();
 choices[10][0] = "La Administraci&oacute;n General del Estado";
 choices[10][1] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos";
 choices[10][2] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos y las Comunidades Aut&oacute;nomas";
 choices[10][3] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos, las Comunidades Aut&oacute;nomas y las Entidades Locales";
 answers[10] = choices[10][1];
 units[10] = "26";
 comments[10] = "Id Pregunta: 548. Gobernanza TIC";


//  Id pregunta: 178 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Qu&eacute; es lo que caracteriza un decreto-ley?";
 choices[11]= new Array();
 choices[11][0] = "No puede afectar al ordenamiento de las instituciones b&aacute;sicas del Estado.";
 choices[11][1] = "Es dictado por las Cortes Generales en casos de urgente necesidad.";
 choices[11][2] = "Es dictado por el Presidente del Gobierno en casos de extraordinaria y urgente necesidad.";
 choices[11][3] = "Es dictado por el Gobierno por encargo de las Cortes Generales.";
 answers[11] = choices[11][0];
 units[11] = "1";
 comments[11] = "Id Pregunta: 178. CONSTITUCION1978";


//  Id pregunta: 413 Año de creación de pregunta: 2016
 questions[12]= "13)  Gozar&aacute;n de los derecho derivados del principio de igualdad de trato y de la prohibici&oacute;n de discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[12]= new Array();
 choices[12][0] = "La mujeres.";
 choices[12][1] = "Lo hombres.";
 choices[12][2] = "Todas las personas.";
 choices[12][3] = "Las mujeres y ni&ntilde;os menores de 16 a&ntilde;os.";
 answers[12] = choices[12][2];
 units[12] = "14";
 comments[12] = "Id Pregunta: 413. POLITICAS DE IGUALDAD";


//  Id pregunta: 764 Año de creación de pregunta: 2016
 questions[13]= "14)  El sector p&uacute;blico institucional se integra por:";
 choices[13]= new Array();
 choices[13][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[13][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[13][2] = "las Universidades p&uacute;blicas";
 choices[13][3] = "todas son correctas";
 answers[13] = choices[13][3];
 units[13] = "4, 7, 8, 9";
 comments[13] = "Id Pregunta: 764. Ley 40/2015";


//  Id pregunta: 298 Año de creación de pregunta: 2016
 questions[14]= "15)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al Consejo de la Uni&oacute;n Europea:";
 choices[14]= new Array();
 choices[14][0] = "Estar&aacute; asistido por dos Secretar&iacute;as Generales.";
 choices[14][1] = "Estar&aacute; asistido por una Secretar&iacute;a General, dirigida por un Secretario General.";
 choices[14][2] = "Estar&aacute; asistido por un alto representante de Pol&iacute;tica Interior y Exterior.";
 choices[14][3] = "Estar&aacute; asistido por el Consejo de Europa.";
 answers[14] = choices[14][1];
 units[14] = "5";
 comments[14] = "Id Pregunta: 298. UNION EUROPEA";


//  Id pregunta: 741 Año de creación de pregunta: 2016
 questions[15]= "16)  Dos de los principios del Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE son:";
 choices[15]= new Array();
 choices[15][0] = "Transparencia e innovaci&oacute;n";
 choices[15][1] = "Seguridad y reutilizaci&oacute;n";
 choices[15][2] = "Reutilizaci&oacute;n y buz&oacute;n de quejas y sugerencias";
 choices[15][3] = "Principio de solo una vez y transfronterizo de forma predeterminada";
 answers[15] = choices[15][3];
 units[15] = "28";
 comments[15] = "Id Pregunta: 741. Estrategia TIC";


//  Id pregunta: 610 Año de creación de pregunta: 2016
 questions[16]= "17)  En el lenguaje de manipulaci&oacute;n de datos, &iquest;cu&aacute;l de las siguientes cl&aacute;usulas va asociada a la cl&aacute;usula HAVING?";
 choices[16]= new Array();
 choices[16][0] = "GROUP BY.";
 choices[16][1] = "COUNT.";
 choices[16][2] = "WHERE.";
 choices[16][3] = "DISTINCT.";
 answers[16] = choices[16][0];
 units[16] = "60";
 comments[16] = "Id Pregunta: 610. Junta de Extremadura A1 2015";


//  Id pregunta: 835 Año de creación de pregunta: 2016
 questions[17]= "18)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[17]= new Array();
 choices[17][0] = "Los &oacute;rganos competentes podr&aacute;n avocar para s&iacute; el conocimiento de uno o varios asuntos cuya resoluci&oacute;n corresponda ordinariamente o por delegaci&oacute;n a sus &oacute;rganos administrativos dependientes, cuando circunstancias de &iacute;ndole t&eacute;cnica, econ&oacute;mica, social, jur&iacute;dica o territorial lo hagan conveniente.";
 choices[17][1] = "En los supuestos de delegaci&oacute;n de competencias en &oacute;rganos no dependientes jer&aacute;rquicamente, el conocimiento de un asunto podr&aacute; ser avocado &uacute;nicamente por el &oacute;rgano delegante.";
 choices[17][2] = "En todo caso, la avocaci&oacute;n se realizar&aacute; mediante acuerdo motivado que deber&aacute; ser notificado a los interesados en el procedimiento, si los hubiere, con posterioridad a la resoluci&oacute;n final que se dicte.";
 choices[17][3] = "Contra el acuerdo de avocaci&oacute;n no cabr&aacute; recurso, aunque podr&aacute; impugnarse en el que, en su caso, se interponga contra la resoluci&oacute;n del procedimiento.";
 answers[17] = choices[17][2];
 units[17] = "4, 7, 8, 9";
 comments[17] = "Id Pregunta: 835. Ley 40/2015";


//  Id pregunta: 790 Año de creación de pregunta: 2016
 questions[18]= "19)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Subdelegados del Gobierno en las provincias los cuales tendr&aacute;n nivel de:";
 choices[18]= new Array();
 choices[18][0] = "Subsecretario";
 choices[18][1] = "Subdirector general";
 choices[18][2] = "Secretario de Estado";
 choices[18][3] = "ninguna es correcta";
 answers[18] = choices[18][1];
 units[18] = "4, 7, 8, 9";
 comments[18] = "Id Pregunta: 790. Ley 40/2015";


//  Id pregunta: 138 Año de creación de pregunta: 2016
 questions[19]= "20)  La ley que obliga a todas las Administraciones a presentar equilibrio estructural en sus cuentas p&uacute;blicas y establece un l&iacute;mite de deuda como garant&iacute;a de sostenibilidad presupuestaria, es:";
 choices[19]= new Array();
 choices[19][0] = "La Ley Org&aacute;nica 2/2011";
 choices[19][1] = "La Ley Org&aacute;nica 2/2012";
 choices[19][2] = "La Ley Org&aacute;nica 3/2012";
 choices[19][3] = "La Ley Org&aacute;nica 2/2002";
 answers[19] = choices[19][1];
 units[19] = "12";
 comments[19] = "Id Pregunta: 138. Leyes modelo econ&oacute;mico";


//  Id pregunta: 60 Año de creación de pregunta: 2016
 questions[20]= "21)  El modelo de capacidad de procesos establecido por COBIT v5:";
 choices[20]= new Array();
 choices[20][0] = "No modifica esencialmente el modelo planteado por COBIT v4.1.";
 choices[20][1] = "Define 5 niveles de procesos (proceso incompleto, ejecutado, gestionado, predecible, optimizado).";
 choices[20][2] = "El nivel 1 (proceso ejecutado) s&oacute;lo se alcanza si el proceso alcanza su prop&oacute;sito.";
 choices[20][3] = "Un proceso es optimizado si se ejecuta dentro de los l&iacute;mites definidos para alcanzar sus resultados de proceso.";
 answers[20] = choices[20][2];
 units[20] = "101";
 comments[20] = "Id Pregunta: 60. AGE A1 2015";


//  Id pregunta: 617 Año de creación de pregunta: 2016
 questions[21]= "22)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[21]= new Array();
 choices[21][0] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar colaborativamente en equipo y obtener el mejor resultado posible de un proyecto.";
 choices[21][1] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar individualmente y obtener el mejor resultado posible de un proyecto.";
 choices[21][2] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar colaborativamente en equipo y obtener un proyecto.";
 choices[21][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[21] = choices[21][0];
 units[21] = "84";
 comments[21] = "Id Pregunta: 617. Junta de Extremadura A1 2015";


//  Id pregunta: 590 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Cu&aacute;les son objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[22]= new Array();
 choices[22][0] = "Incrementar la productividad y la eficacia del funcionamiento interno de la Administraci&oacute;n";
 choices[22][1] = "Convertir el canal digital en el preferente para la relaci&oacute;n de los ciudadanos y empresas con la Administraci&oacute;n";
 choices[22][2] = "Adoptar una estrategia corporativa de seguridad y usabilidad de los servicios p&uacute;blicos digitales";
 choices[22][3] = "Todos los anteriores";
 answers[22] = choices[22][3];
 units[22] = "19";
 comments[22] = "Id Pregunta: 590. Estrategia TIC";


//  Id pregunta: 499 Año de creación de pregunta: 2016
 questions[23]= "24)  A tenor de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la cuant&iacute;a global de los anticipos de caja fija no podr&aacute; superar para cada ministerio y organismo aut&oacute;nomo:";
 choices[23]= new Array();
 choices[23][0] = "El 7% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[23][1] = "El 5% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[23][2] = "El 6% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[23][3] = "El 8% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 answers[23] = choices[23][0];
 units[23] = "10";
 comments[23] = "Id Pregunta: 499. PRESUPUESTOS GENERALES";


//  Id pregunta: 607 Año de creación de pregunta: 2016
 questions[24]= "25)  Seg&uacute;n Magerit v3, en el desarrollo de sistemas de informaci&oacute;n:";
 choices[24]= new Array();
 choices[24][0] = "La seguridad debe estar embebida en el sistema desde su primera concepci&oacute;n.";
 choices[24][1] = "La seguridad comenzar&aacute; a considerarse formalmente cuando finalice el proceso de implantaci&oacute;n de sistemas de informaci&oacute;n.";
 choices[24][2] = "La seguridad del sistema de informaci&oacute;n es m&aacute;s econ&oacute;mica implantarla una vez puesto en producci&oacute;n el sistema de informaci&oacute;n que tenerla en consideraci&oacute;n durante el desarrollo del sistema.";
 choices[24][3] = "La seguridad s&oacute;lo ralentiza el proceso de desarrollo de sistemas de informaci&oacute;n por lo que s&oacute;lo se debe considerar en aquellos sistemas que usen datos econ&oacute;micos.";
 answers[24] = choices[24][0];
 units[24] = "45";
 comments[24] = "Id Pregunta: 607. Junta de Extremadura A1 2015";


//  Id pregunta: 766 Año de creación de pregunta: 2016
 questions[25]= "26)  Las Universidades p&uacute;blicas se regir&aacute;n por:";
 choices[25]= new Array();
 choices[25][0] = "las previsiones de la presente Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[25][1] = "su normativa espec&iacute;fica y supletoriamente por las previsiones de la presente Ley";
 choices[25][2] = "exclusivamente por su normativa espec&iacute;fica";
 choices[25][3] = "exclusivamente por las previsiones de la presente Ley";
 answers[25] = choices[25][1];
 units[25] = "4, 7, 8, 9";
 comments[25] = "Id Pregunta: 766. Ley 40/2015";


//  Id pregunta: 93 Año de creación de pregunta: 2016
 questions[26]= "27)  Entre las tecnolog&iacute;as o herramientas utilizadas para trabajar en sistemas de Big Data NO se encuentra:";
 choices[26]= new Array();
 choices[26][0] = "Almacenamiento orientado a columnas";
 choices[26][1] = "Framework MapReduce";
 choices[26][2] = "OLTP";
 choices[26][3] = "Bases de datos clave-valor";
 answers[26] = choices[26][2];
 units[26] = "73";
 comments[26] = "Id Pregunta: 93. AGE A1 2015";


//  Id pregunta: 551 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;Cu&aacute;l es el &oacute;rgano t&eacute;cnico de cooperaci&oacute;n de la Administraci&oacute;n General del Estado, de las Administraciones de las Comunidades Aut&oacute;nomas y de las Entidades Locales en materia de administraci&oacute;n electr&oacute;nica definido en la ley 40/2015 de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[27]= new Array();
 choices[27][0] = "La Conferencia Sectorial de Telecomunicaciones y Sociedad de la Informaci&oacute;n";
 choices[27][1] = "El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica";
 choices[27][2] = "La Comisi&oacute;n Sectorial de administraci&oacute;n electr&oacute;nica";
 choices[27][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[27] = choices[27][2];
 units[27] = "26";
 comments[27] = "Id Pregunta: 551. Gobernanza TIC";


//  Id pregunta: 402 Año de creación de pregunta: 2016
 questions[28]= "29)  El principio de igualdad de trato y oportunidades entre mujeres y hombres tiene car&aacute;cter:";
 choices[28]= new Array();
 choices[28][0] = "Parcial.";
 choices[28][1] = "Sectorial.";
 choices[28][2] = "Tranversal.";
 choices[28][3] = "Vertical.";
 answers[28] = choices[28][2];
 units[28] = "14";
 comments[28] = "Id Pregunta: 402. POLITICAS DE IGUALDAD";


//  Id pregunta: 95 Año de creación de pregunta: 2016
 questions[29]= "30)  Bajo el paradigma de la Programaci&oacute;n Orientada a Objetos, indique cu&aacute;l de las siguientes proposiciones es falsa:";
 choices[29]= new Array();
 choices[29][0] = "Los objetos se generan a partir de la instanciaci&oacute;n de una clase.";
 choices[29][1] = "El polimorfismo es la propiedad por la que es posible enviar mensajes sint&aacute;cticamente iguales a objetos de tipos distintos.";
 choices[29][2] = "Una clase abstracta puede ser extendida mediante el mecanismo de herencia.";
 choices[29][3] = "La implementaci&oacute;n de una interfaz no se considera polimorfismo.";
 answers[29] = choices[29][3];
 units[29] = "89";
 comments[29] = "Id Pregunta: 95. AGE A1 2015";


//  Id pregunta: 341 Año de creación de pregunta: 2016
 questions[30]= "31)  Tras la cuarta ampliaci&oacute;n de la Uni&oacute;n (Austria, Suecia y Finlandia), el n&uacute;mero total de diputados se estableci&oacute; en:";
 choices[30]= new Array();
 choices[30][0] = "623";
 choices[30][1] = "649";
 choices[30][2] = "626";
 choices[30][3] = "565";
 answers[30] = choices[30][2];
 units[30] = "5";
 comments[30] = "Id Pregunta: 341. UNION EUROPEA";


//  Id pregunta: 333 Año de creación de pregunta: 2016
 questions[31]= "32)  Est&aacute;n legitimados para interponer el recurso de carencia del art. 175 TCE:";
 choices[31]= new Array();
 choices[31][0] = "Las instituciones comunitarias.";
 choices[31][1] = "Los Estados miembros y las instituciones comunitarias.";
 choices[31][2] = "Los Estados miembros.";
 choices[31][3] = "Los nacionales de los Estados miembros.";
 answers[31] = choices[31][1];
 units[31] = "5";
 comments[31] = "Id Pregunta: 333. UNION EUROPEA";


//  Id pregunta: 711 Año de creación de pregunta: 2016
 questions[32]= "33)  En relaci&oacute;n al Portal de Transparencia de la AGE:";
 choices[32]= new Array();
 choices[32][0] = "La informaci&oacute;n m&aacute;s relevante para el ciudadano y de frecuente acceso estar&aacute; disponible en el Portal de Transparencia, no pudiendo accederse a informaci&oacute;n que no se encuentre ya publicada.";
 choices[32][1] = "El ejercicio del Derecho de Acceso abre con la administraci&oacute;n un procedimiento administrativo que exige la identificaci&oacute;n del solicitante.";
 choices[32][2] = "En el Portal de Transparencia de la AGE s&oacute;lo se puede acceder a informaci&oacute;n de tipo institucional.";
 choices[32][3] = "El CTBG es el responsable del Portal de Transparencia.";
 answers[32] = choices[32][1];
 units[32] = "22";
 comments[32] = "Id Pregunta: 711. Portal de Transparencia";


//  Id pregunta: 3 Año de creación de pregunta: 2016
 questions[33]= "34)  En el lenguaje de modelado UML :";
 choices[33]= new Array();
 choices[33][0] = "Los diagramas de secuencia y colaboraci&oacute;n son usados para modelar el comportamiento del sistema, pudiendo usarse para modelar un caso de uso, una clase, o un m&eacute;todo complicado.";
 choices[33][1] = "Los diagramas de actividad son usados para modelar la configuraci&oacute;n de los elementos de procesado en tiempo de ejecuci&oacute;n.";
 choices[33][2] = "Los diagramas de componentes son usados para modelar la estructura del software, incluyendo las dependencias entre los componentes de software.";
 choices[33][3] = "Los diagramas de implementaci&oacute;n son usados para modelar interacciones entre objetos de dise&ntilde;o en el sistema.";
 answers[33] = choices[33][2];
 units[33] = "89";
 comments[33] = "Id Pregunta: 3. AGE A1 2015";


//  Id pregunta: 174 Año de creación de pregunta: 2016
 questions[34]= "35)  De conformidad con la Constituci&oacute;n Espa&ntilde;ola, &iquest; cu&aacute;l de los siguientes derechos y libertades es susceptible de tutela a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional?";
 choices[34]= new Array();
 choices[34][0] = "El derecho a la propiedad privada.";
 choices[34][1] = "El derecho de asociaci&oacute;n.";
 choices[34][2] = "El derecho de fundaci&oacute;n.";
 choices[34][3] = "El derecho de negociaci&oacute;n colectiva.";
 answers[34] = choices[34][1];
 units[34] = "1";
 comments[34] = "Id Pregunta: 174. CONSTITUCION1978";


//  Id pregunta: 517 Año de creación de pregunta: 2016
 questions[35]= "36)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas: (se&ntilde;ala la incorrecta)";
 choices[35]= new Array();
 choices[35][0] = "la Administraci&oacute;n General del Estado";
 choices[35][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[35][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[35][3] = "los organismos p&uacute;blicos y entidades de derecho privado que integran el sector p&uacute;blico institucional";
 answers[35] = choices[35][3];
 units[35] = "7";
 comments[35] = "Id Pregunta: 517. LEY 39/2015";


//  Id pregunta: 825 Año de creación de pregunta: 2016
 questions[36]= "37)  La actuaci&oacute;n de autoridades y personal al servicio de las Administraciones P&uacute;blicas en los que concurran motivos de abstenci&oacute;n ...";
 choices[36]= new Array();
 choices[36][0] = "No implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido pero dar&aacute; lugar a la responsabilidad que proceda";
 choices[36][1] = "Dar&aacute; lugar a la responsabilidad que proceda pero no implicar&aacute; en ning&uacute;n caso la invalidez de los actos en que hayan intervenido";
 choices[36][2] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido";
 choices[36][3] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido dando lugar a la responsabilidad que proceda";
 answers[36] = choices[36][1];
 units[36] = "4, 7, 8, 9";
 comments[36] = "Id Pregunta: 825. Ley 40/2015";


//  Id pregunta: 428 Año de creación de pregunta: 2016
 questions[37]= "38)  Cuando el periodo de vacaciones coincida con una incapacidad temporal derivada del embarazo, parto o lactancia natural, o con el permiso de maternidad, o con su ampliaci&oacute;n por lactancia, la empleada p&uacute;blica:";
 choices[37]= new Array();
 choices[37][0] = "Perder&aacute; el derecho a vacaciones.";
 choices[37][1] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, siempre que no haya terminado el a&ntilde;o natural que le corresponda.";
 choices[37][2] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, aunque haya terminado el a&ntilde;o natural que le corresponda.";
 choices[37][3] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta dependiendo de la acumulaci&oacute;n de trabajo en al AAPP.";
 answers[37] = choices[37][2];
 units[37] = "14";
 comments[37] = "Id Pregunta: 428. POLITICAS DE IGUALDAD";


//  Id pregunta: 675 Año de creación de pregunta: 2016
 questions[38]= "39)  En referencia al proyecto ANDES, para la comunicaci&oacute;n telem&aacute;tica de Nacimientos desde Centros Sanitarios a Registros Civiles, indique cual de las siguientes afirmaciones es falsa:";
 choices[38]= new Array();
 choices[38][0] = "Tiene sustento legal de acuerdo a la Ley 19/2015, de 13 de julio, de medidas de reforma administrativa en el &aacute;mbito de la Administraci&oacute;n de Justicia y del Registro Civil.";
 choices[38][1] = "Se inicia a partir de su propuesta en CORA (Comisi&oacute;n para la Reforma de las Administraciones P&uacute;blicas).";
 choices[38][2] = "Reutiliza el servicio horizontal ACCEDA en modo cloud, lo cual ha facilitado la pronta puesta en marcha de la soluci&oacute;n.";
 choices[38][3] = "La utilizaci&oacute;n de ANDES por parte de los hospitales es completamente transparente, sin necesidad de realizar pasos previos para su despliegue.";
 answers[38] = choices[38][3];
 units[38] = "47";
 comments[38] = "Id Pregunta: 675. Inscripci&oacute;n autom&aacute;tica nacimientos";


//  Id pregunta: 270 Año de creación de pregunta: 2016
 questions[39]= "40)  La tutela de los derechos fundamentales y libertades p&uacute;blicas reconocidos en la secci&oacute;n primera del cap&iacute;tulo II del T&iacute;tulo I de la Constituci&oacute;n espa&ntilde;ola podr&aacute; recabarse por cualquier ciudadano:";
 choices[39]= new Array();
 choices[39][0] = "S&oacute;lo ante el Tribunal Constitucional de acuerdo con lo previsto en el Art&iacute;culo 161.1.a), referente al recurso de Inconstitucionalidad.";
 choices[39][1] = "S&oacute;lo ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad.";
 choices[39][2] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, ante el Tribunal Constitucional a trav&eacute;s del recurso de inconstitucionalidad.";
 choices[39][3] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional.";
 answers[39] = choices[39][0];
 units[39] = "1";
 comments[39] = "Id Pregunta: 270. CONSTITUCION1978";


//  Id pregunta: 316 Año de creación de pregunta: 2016
 questions[40]= "41)  El Consejo de la Uni&oacute;n Europea de reunir&aacute; por:";
 choices[40]= new Array();
 choices[40][0] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de dos de sus miembros o de la Comisi&oacute;n.";
 choices[40][1] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n.";
 choices[40][2] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de tres de sus miembros o de la Comisi&oacute;n.";
 choices[40][3] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n o el Parlamento.";
 answers[40] = choices[40][1];
 units[40] = "5";
 comments[40] = "Id Pregunta: 316. UNION EUROPEA";


//  Id pregunta: 451 Año de creación de pregunta: 2016
 questions[41]= "42)  En los Presupuestos, &iquest;qu&eacute; es lo que se prev&eacute; liquidar?";
 choices[41]= new Array();
 choices[41][0] = "Los cr&eacute;ditos";
 choices[41][1] = "Las partidas presupuestarias";
 choices[41][2] = "Los derechos";
 choices[41][3] = "Las obligaciones";
 answers[41] = choices[41][2];
 units[41] = "10";
 comments[41] = "Id Pregunta: 451. PRESUPUESTOS GENERALES";


//  Id pregunta: 225 Año de creación de pregunta: 2016
 questions[42]= "43)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola, el instrumento fundamental para la participaci&oacute;n pol&iacute;tica son:";
 choices[42]= new Array();
 choices[42][0] = "las Cortes generales.";
 choices[42][1] = "los partidos pol&iacute;ticos.";
 choices[42][2] = "los sindicatos.";
 choices[42][3] = "las Comunidades Aut&oacute;nomas.";
 answers[42] = choices[42][1];
 units[42] = "1";
 comments[42] = "Id Pregunta: 225. CONSTITUCION1978";


//  Id pregunta: 606 Año de creación de pregunta: 2016
 questions[43]= "44)  En ITIL v3, entre las metas del Proceso de la Planificaci&oacute;n y Soporte de la Transici&oacute;n del Servicio, se incluye:";
 choices[43]= new Array();
 choices[43][0] = "Planificar y coordinar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[43][1] = "Identificar, gestionar y limitar riesgos que puedan interrumpir el servicio a partir de la fase de transici&oacute;n del servicio.";
 choices[43][2] = "Planificar, identificar y gestionar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[43][3] = "Todas las respuestas son correctas.";
 answers[43] = choices[43][1];
 units[43] = "101";
 comments[43] = "Id Pregunta: 606. Junta de Extremadura A1 2015";


//  Id pregunta: 532 Año de creación de pregunta: 2016
 questions[44]= "45)  Deber&aacute; incorporar al expediente administrativo acreditaci&oacute;n de la condici&oacute;n de representante y de los poderes que tiene reconocidos en dicho momento:";
 choices[44]= new Array();
 choices[44][0] = "el &oacute;rgano competente para la iniciaci&oacute;n del procedimiento";
 choices[44][1] = "el &oacute;rgano competente para la instrucci&oacute;n del procedimiento";
 choices[44][2] = "el &oacute;rgano competente para la tramitaci&oacute;n del procedimiento";
 choices[44][3] = "el &oacute;rgano competente para la terminaci&oacute;n del procedimiento";
 answers[44] = choices[44][2];
 units[44] = "7";
 comments[44] = "Id Pregunta: 532. LEY 39/2015";


//  Id pregunta: 383 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre mujeres y hombres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[45]= new Array();
 choices[45][0] = "El Consejo Nacional de la Mujer";
 choices[45][1] = "El Consejo de la Mujer";
 choices[45][2] = "El Instituto de la Mujer";
 choices[45][3] = "El Consejo de Participaci&oacute;n de la Mujer";
 answers[45] = choices[45][3];
 units[45] = "14";
 comments[45] = "Id Pregunta: 383. POLITICAS DE IGUALDAD";


//  Id pregunta: 200 Año de creación de pregunta: 2016
 questions[46]= "47)  Se&ntilde;ale la afirmaci&oacute;n correcta. Corresponde al Rey:";
 choices[46]= new Array();
 choices[46][0] = "Nombrar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[46][1] = "Nombrar y separar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[46][2] = "Nombrar y separar a los miembros del Gobierno previa consulta al Presidente del Gobierno.";
 choices[46][3] = "Nombrar y separar a los miembros del Gobierno, a propuesta de su Presidente.";
 answers[46] = choices[46][3];
 units[46] = "1";
 comments[46] = "Id Pregunta: 200. CONSTITUCION1978";


//  Id pregunta: 422 Año de creación de pregunta: 2016
 questions[47]= "48)  Los distintivos para reconocer a aquellas empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato, lo crear&aacute;:";
 choices[47]= new Array();
 choices[47][0] = "El Ministerio de Igualdad.";
 choices[47][1] = "El Ministerio de Empleo y Seguridad Social.";
 choices[47][2] = "Ambas son correctas.";
 choices[47][3] = "La Consejer&iacute;a de Igualdad de cada CCAA.";
 answers[47] = choices[47][1];
 units[47] = "14";
 comments[47] = "Id Pregunta: 422. POLITICAS DE IGUALDAD";


//  Id pregunta: 458 Año de creación de pregunta: 2016
 questions[48]= "49)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Intervenci&oacute;n General de la Administraci&oacute;n del Estado ejercer&aacute; sus funciones de control conforme a los principios de:";
 choices[48]= new Array();
 choices[48][0] = "a) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[48][1] = "b) Eficacia, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[48][2] = "c) Autonom&iacute;a, eficacia y ejercicio desconcentrado.";
 choices[48][3] = "d) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a interna.";
 answers[48] = choices[48][3];
 units[48] = "10";
 comments[48] = "Id Pregunta: 458. PRESUPUESTOS GENERALES";


//  Id pregunta: 279 Año de creación de pregunta: 2016
 questions[49]= "50)  Se&ntilde;ale la respuesta correcta:";
 choices[49]= new Array();
 choices[49][0] = "Six Pack&quot; se refiere a 6 medidas legislativas adoptadas en el &aacute;mbito de la Uni&oacute;n Europea con la finalidad de reforzar la gobernanza presupuestaria y econ&oacute;mica.";
 choices[49][1] = "El &ldquo;Two-Pack&rdquo; consta de dos reglamentos destinados a aumentar a&uacute;n m&aacute;s la integraci&oacute;n y la convergencia econ&oacute;micas entre los Estados miembros de la zona del euro.";
 choices[49][2] = "Las respuestas A y B son correctas.";
 choices[49][3] = "Las respuestas A y B son falsas.";
 answers[49] = choices[49][2];
 units[49] = "5";
 comments[49] = "Id Pregunta: 279. UNION EUROPEA";


//  Id pregunta: 152 Año de creación de pregunta: 2016
 questions[50]= "51)  Los documentos electr&oacute;nicos deber&aacute;n conservarse en un formato que permita: (se&ntilde;ala la respuesta incorrecta)";
 choices[50]= new Array();
 choices[50][0] = "garantizar su consulta hasta transcurridos cinco a&ntilde;os desde su emisi&oacute;n";
 choices[50][1] = "garantizar la conservaci&oacute;n del documento";
 choices[50][2] = "garantizar la autenticidad del documento";
 choices[50][3] = "garantizar la integridad del documento";
 answers[50] = choices[50][0];
 units[50] = "7";
 comments[50] = "Id Pregunta: 152. Ley 39/2015, Art&iacute;culo 17";


//  Id pregunta: 64 Año de creación de pregunta: 2016
 questions[51]= "52)  De entre los siguientes sistemas operativos para dispositivos m&oacute;viles, indique cu&aacute;l est&aacute; afectado por la vulnerabilidad Stagefright:";
 choices[51]= new Array();
 choices[51][0] = "Windows Phone";
 choices[51][1] = "Blackberry";
 choices[51][2] = "iOS";
 choices[51][3] = "Android";
 answers[51] = choices[51][3];
 units[51] = "59";
 comments[51] = "Id Pregunta: 64. AGE A1 2015";


//  Id pregunta: 598 Año de creación de pregunta: 2016
 questions[52]= "53)  Entre la documentaci&oacute;n de la Seguridad de la Organizaci&oacute;n nos podremos encontrar:";
 choices[52]= new Array();
 choices[52][0] = "La Pol&iacute;tica de Seguridad Corporativa ser&aacute; elaborada por el Responsable de Seguridad Corporativa y aprobada por el Comit&eacute; de Seguridad Corporativa y por la Alta Direcci&oacute;n.";
 choices[52][1] = "La Pol&iacute;tica de Seguridad de las TIC que debe estar alineada en todo momento con el Mantenimiento de los Sistemas de Informaci&oacute;n.";
 choices[52][2] = "El Documento de Seguridad que ha de estar presente en toda documentaci&oacute;n de la seguridad de la informaci&oacute;n.";
 choices[52][3] = "Todas las respuestas anteriores son correctas.";
 answers[52] = choices[52][0];
 units[52] = "45";
 comments[52] = "Id Pregunta: 598. Junta de Extremadura A1 2015";


//  Id pregunta: 514 Año de creación de pregunta: 2016
 questions[53]= "54)  El sector p&uacute;blico institucional se integra por:";
 choices[53]= new Array();
 choices[53][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[53][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[53][2] = "las Universidades p&uacute;blicas";
 choices[53][3] = "todas son correctas";
 answers[53] = choices[53][3];
 units[53] = "7";
 comments[53] = "Id Pregunta: 514. LEY 39/2015";


//  Id pregunta: 431 Año de creación de pregunta: 2016
 questions[54]= "55)  En el supuesto de que una empresa haga publicidad enga&ntilde;osa de sus acciones de responsabilidad en materia de igualdad, podr&aacute;n ejercer la acci&oacute;n de cesaci&oacute;n cuando se considere:";
 choices[54]= new Array();
 choices[54][0] = "El Instituto de la Mujer.";
 choices[54][1] = "&Oacute;rganos equivalentes al anterior pertenecientes a las CCAA.";
 choices[54][2] = "Ambas son correctas.";
 choices[54][3] = "A y B son incorrectas.";
 answers[54] = choices[54][2];
 units[54] = "14";
 comments[54] = "Id Pregunta: 431. POLITICAS DE IGUALDAD";


//  Id pregunta: 53 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Cu&aacute;l de los siguientes objetivos est&aacute; fuera del alcance de una reuni&oacute;n diaria de SCRUM (daily scrum)?";
 choices[55]= new Array();
 choices[55][0] = "Exponer las tareas no planificadas que tambi&eacute;n est&aacute;n haciendo los miembros del equipo.";
 choices[55][1] = "Resolver detalladamente los problemas que puedan tener los miembros del equipo.";
 choices[55][2] = "Poner de manifiesto el ritmo de trabajo de cada miembro del equipo.";
 choices[55][3] = "Identificar las tareas que puedan afectar a otros miembros del equipo.";
 answers[55] = choices[55][1];
 units[55] = "84";
 comments[55] = "Id Pregunta: 53. AGE A1 2015";


//  Id pregunta: 734 Año de creación de pregunta: 2016
 questions[56]= "57)  En el Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP el principio de transparencia:";
 choices[56]= new Array();
 choices[56][0] = "El seguimiento de la actividad de los funcionarios aumenta la eficacia de los servicios p&uacute;blicos.";
 choices[56][1] = "La transparencia facilita al ciudadano el acceso a los servicios p&uacute;blicos.";
 choices[56][2] = "Una continua monitorizaci&oacute;n de la actividad, junto a la evaluaci&oacute;n y difusi&oacute;n de resultados incrementa la satisfacci&oacute;n de los ciudadanos.";
 choices[56][3] = "El seguimiento y control de la actividad pol&iacute;tica disminuye las actividades ligadas a la corrupci&oacute;n.";
 answers[56] = choices[56][2];
 units[56] = "28";
 comments[56] = "Id Pregunta: 734. Estrategia TIC";


//  Id pregunta: 84 Año de creación de pregunta: 2016
 questions[57]= "58)  En el marco europeo de interoperabilidad de sistemas de informaci&oacute;n, &iquest;qu&eacute; programa de la Uni&oacute;n Europea ha estado en vigor entre 2010 y 2015?";
 choices[57]= new Array();
 choices[57][0] = "Interchange of Data between Administrations (IDA)";
 choices[57][1] = "Interoperability Solutions for European Public Administrations (ISA)";
 choices[57][2] = "Interoperable Delivery of Pan-European eGovernment Services to Public Administrations, Businesses and Citizens (IDABC)";
 choices[57][3] = "Interoperability Electronic European Solution (IEES)";
 answers[57] = choices[57][1];
 units[57] = "43";
 comments[57] = "Id Pregunta: 84. AGE A1 2015";


//  Id pregunta: 408 Año de creación de pregunta: 2016
 questions[58]= "59)  La igualdad efectiva entre mujeres y hombres est&aacute; regulada en:";
 choices[58]= new Array();
 choices[58][0] = "Ley Org&aacute;nica 7/2003, de 22 de marzo.";
 choices[58][1] = "Ley Org&aacute;nica 3/2003, de 22 de marzo.";
 choices[58][2] = "Ley 13/2007, de 26 de noviembre.";
 choices[58][3] = "Ley 3/2007, de 26 de noviembre.";
 answers[58] = choices[58][1];
 units[58] = "14";
 comments[58] = "Id Pregunta: 408. POLITICAS DE IGUALDAD";


//  Id pregunta: 643 Año de creación de pregunta: 2016
 questions[59]= "60)  La generalizaci&oacute;n es el tipo de interrelaci&oacute;n que existe entre un tipo de entidad, supertipo, y los tipos de entidad m&aacute;s espec&iacute;ficos (subtipos) que dependen de &eacute;l. Las cardinalidades m&aacute;ximas y m&iacute;nimas son siempre:";
 choices[59]= new Array();
 choices[59][0] = "(0,1) en el supertipo y (0,1) en los subtipos.";
 choices[59][1] = "(1,1) en el supertipo y (1,1) en los subtipos.";
 choices[59][2] = "(1,1) en el supertipo y (0,1) en los subtipos.";
 choices[59][3] = "(0,1) en el supertipo y (1,1) en los subtipos.";
 answers[59] = choices[59][2];
 units[59] = "85";
 comments[59] = "Id Pregunta: 643. Junta de Extremadura A1 2015";


//  Id pregunta: 443 Año de creación de pregunta: 2016
 questions[60]= "61)  Respecto a las comunicaciones y notificaciones electr&oacute;nicas:";
 choices[60]= new Array();
 choices[60][0] = "El servicio SIM se utiliza para el env&iacute;o de notificaciones electr&oacute;nicas.";
 choices[60][1] = "El Servicio compartido la gesti&oacute;n de notificaciones Notific@, ser&aacute; de uso obligatorio para la AGE y sus OOPP en 2017.";
 choices[60][2] = "La plataforma Notific@, recibe desde los organismos emisores, las comunicaciones y adem&aacute;s de aportar otros valores a&ntilde;adidos, las pone a disposici&oacute;n de los destinatarios en la Carpeta Ciudadana.";
 choices[60][3] = "El servicio SIM, que se ha integrado en el Servicio compartido de gesti&oacute;n de notificaciones, proporciona a los ciudadanos y empresas un buz&oacute;n seguro.";
 answers[60] = choices[60][1];
 units[60] = "43";
 comments[60] = "Id Pregunta: 443. SERVICIOS COMUNES";


//  Id pregunta: 185 Año de creación de pregunta: 2016
 questions[61]= "62)  Se&ntilde;ale cu&aacute;l de las siguientes funciones NO est&aacute; atribuida constitucionalmente al Rey:";
 choices[61]= new Array();
 choices[61][0] = "El mando supremo de las Fuerzas Armadas.";
 choices[61][1] = "Autorizar indultos generales.";
 choices[61][2] = "Sancionar las leyes.";
 choices[61][3] = "Promulgar las leyes.";
 answers[61] = choices[61][1];
 units[61] = "1";
 comments[61] = "Id Pregunta: 185. CONSTITUCION1978";


//  Id pregunta: 687 Año de creación de pregunta: 2016
 questions[62]= "63)  Indique cu&aacute;l de los siguientes no es uno de los requisitos que debe cumplir una firma electr&oacute;nica avanzada seg&uacute;n el Reglamento (UE) 910/2014";
 choices[62]= new Array();
 choices[62][0] = "Estar vinculada al firmante de manera &uacute;nica";
 choices[62][1] = "Haber sido creada utilizando un dispositivo avanzado de creacio&#769;n de firmas electro&#769;nicas";
 choices[62][2] = "Haber sido creada utilizando datos de creaci&oacute;n de firma que el firmante puede utilizar, con un alto nivel de confianza, bajo su exclusivo control";
 choices[62][3] = "Estar vinculada con los datos firmados, de modo tal que cualquier modificacio&#769;n ulterior de los mismos sea detectable";
 answers[62] = choices[62][1];
 units[62] = "77";
 comments[62] = "Id Pregunta: 687. Art&iacute;culo 26 del Reglamento 910/2014";


//  Id pregunta: 522 Año de creación de pregunta: 2016
 questions[63]= "64)  A los efectos previstos en esta Ley, tendr&aacute;n capacidad de obrar ante las Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[63]= new Array();
 choices[63][0] = "las personas f&iacute;sicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 choices[63][1] = "los menores de edad para el ejercicio y defensa de aquellos de sus derechos e intereses cuya actuaci&oacute;n no est&eacute; permitida por el ordenamiento jur&iacute;dico sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[63][2] = "cuando la Ley as&iacute; lo declare expresamente, los grupos de afectados, las uniones y entidades sin personalidad jur&iacute;dica y los patrimonios independientes o aut&oacute;nomos";
 choices[63][3] = "las personas jur&iacute;dicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 answers[63] = choices[63][1];
 units[63] = "7";
 comments[63] = "Id Pregunta: 522. LEY 39/2015";


//  Id pregunta: 754 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Cu&aacute;l de los siguientes no es un eje del Plan de Servicios P&uacute;blicos Digitales que forma parte de la Agenda Digital para Espa&ntilde;a?";
 choices[64]= new Array();
 choices[64][0] = "Programa de Educaci&oacute;n Digital";
 choices[64][1] = "Programa de Salud y Bienestar Social";
 choices[64][2] = "Programa de Administraci&oacute;n de Justicia Digital";
 choices[64][3] = "Programa de capacitaci&oacute;n de profesionales TIC";
 answers[64] = choices[64][3];
 units[64] = "19";
 comments[64] = "Id Pregunta: 754. Agenda Digital para Espa&ntilde;a";


//  Id pregunta: 707 Año de creación de pregunta: 2016
 questions[65]= "66)  En base a la Ley 19/2013 de Transparencia, Acceso a la Informaci&oacute;n P&uacute;blica y Buen Gobierno se&ntilde;ale la afirmaci&oacute;n verdadera:";
 choices[65]= new Array();
 choices[65][0] = "El derecho de acceso a la informaci&oacute;n p&uacute;blica supone, entre otros, que el sujeto obligado a ello publique de forma peri&oacute;dica y actualizada la informaci&oacute;n cuyo conocimiento sea relevante para garantizar la transparencia de su actividad.";
 choices[65][1] = "Las entidades privadas no est&aacute;n sujetas a obligaciones de transparencia seg&uacute;n la Ley 19/2013.";
 choices[65][2] = "Se admitir&aacute;n a tr&aacute;mite, sin excepci&oacute;n, todas las solicitudes de acceso a la informaci&oacute;n por parte de los ciudadanos.";
 choices[65][3] = "El cumplimiento por la Administraci&oacute;n General del Estado de las obligaciones de publicidad activa ser&aacute; objeto de control por parte del CTBG.";
 answers[65] = choices[65][3];
 units[65] = "22";
 comments[65] = "Id Pregunta: 707. Ley de transparencia";


//  Id pregunta: 697 Año de creación de pregunta: 2016
 questions[66]= "67)  Cu&aacute;l de las siguientes afirmaciones relativas a Apache Jenkins es falsa";
 choices[66]= new Array();
 choices[66][0] = "Est&aacute; desarrollado en Java.";
 choices[66][1] = "Fue un proyecto escindido de Hudson tras una disputa con Oracle.";
 choices[66][2] = "Se considera software libre bajo la licencia EUPL.";
 choices[66][3] = "Todas las afirmaciones son correctas.";
 answers[66] = choices[66][2];
 units[66] = "92";
 comments[66] = "Id Pregunta: 697. INTEGRACION CONTINUA";


//  Id pregunta: 112 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Qu&eacute; dos magnitudes relaciona la Ley de Okun?";
 choices[67]= new Array();
 choices[67][0] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de inflaci&oacute;n";
 choices[67][1] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la variaci&oacute;n del desempleo";
 choices[67][2] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de actividad";
 choices[67][3] = "El valor absoluto del PIB (Producto Interior Bruto) con la tasa de actividad";
 answers[67] = choices[67][1];
 units[67] = "15";
 comments[67] = "Id Pregunta: 112. ";


//  Id pregunta: 257 Año de creación de pregunta: 2016
 questions[68]= "69)  El Art&iacute;culo 98 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Gobierno Espa&ntilde;ol se compone de:";
 choices[68]= new Array();
 choices[68][0] = "El Presidente y su gabinete.";
 choices[68][1] = "El Presidente y sus Ministros.";
 choices[68][2] = "El Rey y el Presidente.";
 choices[68][3] = "El Presidente, de los Vicepresidentes en su caso, de los Ministros y dem&aacute;s miembros que establezca la ley.";
 answers[68] = choices[68][2];
 units[68] = "1";
 comments[68] = "Id Pregunta: 257. CONSTITUCION1978";


//  Id pregunta: 800 Año de creación de pregunta: 2016
 questions[69]= "70)  La Administraci&oacute;n General del Estado se organiza:";
 choices[69]= new Array();
 choices[69][0] = "en Ministerios";
 choices[69][1] = "en Presidencia del Gobierno y en Ministerios";
 choices[69][2] = "en Presidencia del Gobierno, en Ministerios y en Secretar&iacute;as Generales";
 choices[69][3] = "en Presidencia del Gobierno, en Ministerios, en Secretar&iacute;as Generales y en el Servicio Exterior";
 answers[69] = choices[69][1];
 units[69] = "4, 7, 8, 9";
 comments[69] = "Id Pregunta: 800. Ley 40/2015";


//  Id pregunta: 469 Año de creación de pregunta: 2016
 questions[70]= "71)  Conforme a la Ley General Presupuestaria, la clasificaci&oacute;n econ&oacute;mica agrupar&aacute; los cr&eacute;ditos por cap&iacute;tulos separando las operaciones corrientes, las de capital, las financieras y el Fondo de Contingencia de ejecuci&oacute;n presupuestaria. En los cr&eacute;ditos para operaciones de capital se incluir&aacute;n:";
 choices[70]= new Array();
 choices[70][0] = "Las inversiones financieras y las transferencias de capital.";
 choices[70][1] = "Las inversiones reales y financieras.";
 choices[70][2] = "Las transferencias de capital y las transferencias corrientes.";
 choices[70][3] = "Las transferencias de capital y las inversiones reales.";
 answers[70] = choices[70][3];
 units[70] = "10";
 comments[70] = "Id Pregunta: 469. PRESUPUESTOS GENERALES";


//  Id pregunta: 151 Año de creación de pregunta: 2016
 questions[71]= "72)  Seg&uacute;n la ley 39/2015, est&aacute;n obligados a relacionarse a trav&eacute;s de medios electr&oacute;nicos con las Administraciones P&uacute;blicas para la realizaci&oacute;n de cualquier tr&aacute;mite de un procedimiento administrativo: (se&ntilde;ala la respuesta incorrecta)";
 choices[71]= new Array();
 choices[71][0] = "las personas jur&iacute;dicas ";
 choices[71][1] = "las entidades con personalidad jur&iacute;dica";
 choices[71][2] = "los empleados de las Administraciones P&uacute;blicas para los tr&aacute;mites y actuaciones que realicen con ellas por raz&oacute;n de su condici&oacute;n de empleado p&uacute;blico";
 choices[71][3] = "quienes representen a un interesado que est&eacute; obligado legalmente a relacionarse electr&oacute;nicamente con la Administraci&oacute;n";
 answers[71] = choices[71][1];
 units[71] = "7";
 comments[71] = "Id Pregunta: 151. Ley 39/2015, Art&iacute;culo 14";


//  Id pregunta: 595 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Qui&eacute;n elabora y ejecuta los Planes de Acci&oacute;n Sectoriales?";
 choices[72]= new Array();
 choices[72][0] = "La CETIC";
 choices[72][1] = "Los Ministerios";
 choices[72][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[72][3] = "Ninguno de los anteriores";
 answers[72] = choices[72][1];
 units[72] = "19";
 comments[72] = "Id Pregunta: 595. Estrategia TIC";


//  Id pregunta: 767 Año de creación de pregunta: 2016
 questions[73]= "74)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[73]= new Array();
 choices[73][0] = "la Administraci&oacute;n General del Estado";
 choices[73][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[73][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[73][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico o privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[73] = choices[73][3];
 units[73] = "4, 7, 8, 9";
 comments[73] = "Id Pregunta: 767. Ley 40/2015";


//  Id pregunta: 162 Año de creación de pregunta: 2016
 questions[74]= "75)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones";
 choices[74]= new Array();
 choices[74][0] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[74][1] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro de las setenta y dos horas contadas a partir de las 8:00 horas del d&iacute;a laborable siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[74][2] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 00:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 choices[74][3] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 24 horas contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 answers[74] = choices[74][0];
 units[74] = "19";
 comments[74] = "Id Pregunta: 162. La respuesta B es la antigua redacci&oacute;n";


