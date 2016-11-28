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

//  Id pregunta: 625 Año de creación de pregunta: 2016
 questions[0]= "1)  En PHP 5.0, &iquest;cu&aacute;l es la regla para formar los nombres de las variables?";
 choices[0]= new Array();
 choices[0][0] = "Una variable debe comenzar con el signo $ seguido del nombre de la variable.";
 choices[0][1] = "Una variable debe comenzar con el signo &amp; seguido del nombre de la variable.";
 choices[0][2] = "Una variable debe comenzar por un car&aacute;cter num&eacute;rico.";
 choices[0][3] = "No hay regla para la formaci&oacute;n de los nombres de las variables.";
 answers[0] = choices[0][0];
 units[0] = "65";
 comments[0] = "Id Pregunta: 625. Junta de Extremadura A1 2015";


//  Id pregunta: 385 Año de creación de pregunta: 2016
 questions[1]= "2)  Se&ntilde;ale c&oacute;mo es evaluado el Plan de Igualdad en la Administraci&oacute;n General del Estado, previsto en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la Igualdad efectiva de mujeres y hombres:";
 choices[1]= new Array();
 choices[1][0] = "Anualmente por el Consejo de Ministros";
 choices[1][1] = "Anualmente por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios";
 choices[1][2] = "Al final de cada legislatura por el Gobierno";
 choices[1][3] = "Al final de cada legislatura por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios.";
 answers[1] = choices[1][0];
 units[1] = "14";
 comments[1] = "Id Pregunta: 385. POLITICAS DE IGUALDAD";


//  Id pregunta: 373 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Cu&aacute;ntos Abogados Generales asisten al Tribunal Superior de Justicia?:";
 choices[2]= new Array();
 choices[2][0] = "Nueve.";
 choices[2][1] = "Diez.";
 choices[2][2] = "Siete.";
 choices[2][3] = "Ocho.";
 answers[2] = choices[2][3];
 units[2] = "5";
 comments[2] = "Id Pregunta: 373. UNION EUROPEA";


//  Id pregunta: 91 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguientes opciones muestra exclusivamente herramientas directamente relacionadas con la realizaci&oacute;n de pruebas para asegurar la calidad del software?";
 choices[3]= new Array();
 choices[3][0] = "JUnit, Artifactory y SonarQube";
 choices[3][1] = "JUnit, Artifactory y Selenium";
 choices[3][2] = "JUnit, SonarQube y Selenium";
 choices[3][3] = "ArtiFactory, SonarQube y Selenium";
 answers[3] = choices[3][2];
 units[3] = "92";
 comments[3] = "Id Pregunta: 91. AGE A1 2015";


//  Id pregunta: 591 Año de creación de pregunta: 2016
 questions[4]= "5)  Son servicios declarados compartidos:";
 choices[4]= new Array();
 choices[4][0] = "Servicio unificado de telecomunicaciones y servicio de seguridad gestionada";
 choices[4][1] = "Servicio multicanal de atenci&oacute;n al ciudadano";
 choices[4][2] = "Servicio com&uacute;n de generaci&oacute;n y validaci&oacute;n de firmas electr&oacute;nicas";
 choices[4][3] = "Todos los anteriores";
 answers[4] = choices[4][3];
 units[4] = "19";
 comments[4] = "Id Pregunta: 591. Estrategia TIC";


//  Id pregunta: 833 Año de creación de pregunta: 2016
 questions[5]= "6)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Marque la respuesta correcta.";
 choices[5]= new Array();
 choices[5][0] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo.";
 choices[5][1] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo.";
 choices[5][2] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter potestativo.";
 choices[5][3] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter oneroso.";
 answers[5] = choices[5][0];
 units[5] = "4, 7, 8, 9";
 comments[5] = "Id Pregunta: 833. Ley 40/2015";


//  Id pregunta: 482 Año de creación de pregunta: 2016
 questions[6]= "7)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el &aacute;mbito del Ministerio de Defensa y de la Seguridad Social, el control se ejercer&aacute; a trav&eacute;s de:";
 choices[6]= new Array();
 choices[6][0] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[6][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[6][2] = "Las respuestas a) b) no son correctas.";
 choices[6][3] = "Las respuestas a) y b) son correctas.";
 answers[6] = choices[6][3];
 units[6] = "10";
 comments[6] = "Id Pregunta: 482. PRESUPUESTOS GENERALES";


//  Id pregunta: 619 Año de creación de pregunta: 2016
 questions[7]= "8)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[7]= new Array();
 choices[7][0] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar colaborativamente en equipo y obtener el mejor resultado posible de un proyecto.";
 choices[7][1] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar individualmente y obtener el mejor resultado posible de un proyecto.";
 choices[7][2] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar colaborativamente en equipo y obtener un proyecto.";
 choices[7][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[7] = choices[7][0];
 units[7] = "84";
 comments[7] = "Id Pregunta: 619. Junta de Extremadura A1 2015";


//  Id pregunta: 622 Año de creación de pregunta: 2016
 questions[8]= "9)  En el entorno de la Arquitectura del Software, un patr&oacute;n :";
 choices[8]= new Array();
 choices[8][0] = "Es una soluci&oacute;n a un problema en un contexto particular.";
 choices[8][1] = "Es recurrente y ense&ntilde;a permitiendo entender c&oacute;mo adaptarlo a la variante particular del problema donde se quiere aplicar.";
 choices[8][2] = "Tiene un nombre para referirse al patr&oacute;n.";
 choices[8][3] = "Todas las respuestas son correctas.";
 answers[8] = choices[8][3];
 units[8] = "50";
 comments[8] = "Id Pregunta: 622. Junta de Extremadura A1 2015";


//  Id pregunta: 711 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Qu&eacute; ley regula el ejercicio del alto cargo de la Administraci&oacute;n General del Estado con objeto de garantizar, entre otros, que realice su actividad en m&aacute;ximas condiciones de transparencia?";
 choices[9]= new Array();
 choices[9][0] = "Ley 3/2015";
 choices[9][1] = "Ley 6/2007";
 choices[9][2] = "Ley 5/1984";
 choices[9][3] = "Ley 5/2006";
 answers[9] = choices[9][0];
 units[9] = "22";
 comments[9] = "Id Pregunta: 711. &Eacute;tica P&uacute;blica y Transparencia";


//  Id pregunta: 471 Año de creación de pregunta: 2016
 questions[10]= "11)  Conforme a la Ley General Presupuestaria, la clasificaci&oacute;n econ&oacute;mica agrupar&aacute; los cr&eacute;ditos por cap&iacute;tulos separando las operaciones corrientes, las de capital, las financieras y el Fondo de Contingencia de ejecuci&oacute;n presupuestaria. En los cr&eacute;ditos para operaciones de capital se incluir&aacute;n:";
 choices[10]= new Array();
 choices[10][0] = "Las inversiones financieras y las transferencias de capital.";
 choices[10][1] = "Las inversiones reales y financieras.";
 choices[10][2] = "Las transferencias de capital y las transferencias corrientes.";
 choices[10][3] = "Las transferencias de capital y las inversiones reales.";
 answers[10] = choices[10][3];
 units[10] = "10";
 comments[10] = "Id Pregunta: 471. PRESUPUESTOS GENERALES";


//  Id pregunta: 748 Año de creación de pregunta: 2016
 questions[11]= "12)  Respecto a los contratos de colaboraci&oacute;n entre el sector p&uacute;blico y el sector privado, NO se incluyen entre las prestaciones que pueden ser objeto de estos contratos:";
 choices[11]= new Array();
 choices[11][0] = "La construcci&oacute;n, instalaci&oacute;n o transformaci&oacute;n de obras, equipos, sistemas, y productos o bienes complejos, as&iacute; como su mantenimiento, actualizaci&oacute;n o renovaci&oacute;n, su explotaci&oacute;n o su gesti&oacute;n.";
 choices[11][1] = "La gesti&oacute;n integral del mantenimiento de instalaciones para la investigaci&oacute;n.";
 choices[11][2] = "La fabricaci&oacute;n de bienes y la prestaci&oacute;n de servicios que incorporen tecnolog&iacute;a espec&iacute;ficamente desarrollada con el prop&oacute;sito de aportar soluciones m&aacute;s avanzadas y econ&oacute;micamente m&aacute;s ventajosas que las existentes en el mercado.";
 choices[11][3] = "Todas las anteriores pueden ser objeto de ese tipo de contratos.";
 answers[11] = choices[11][1];
 units[11] = "18, 20";
 comments[11] = "Id Pregunta: 748. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 151 Año de creación de pregunta: 2016
 questions[12]= "13)  Seg&uacute;n la ley 39/2015, est&aacute;n obligados a relacionarse a trav&eacute;s de medios electr&oacute;nicos con las Administraciones P&uacute;blicas para la realizaci&oacute;n de cualquier tr&aacute;mite de un procedimiento administrativo: (se&ntilde;ala la respuesta incorrecta)";
 choices[12]= new Array();
 choices[12][0] = "las personas jur&iacute;dicas ";
 choices[12][1] = "las entidades con personalidad jur&iacute;dica";
 choices[12][2] = "los empleados de las Administraciones P&uacute;blicas para los tr&aacute;mites y actuaciones que realicen con ellas por raz&oacute;n de su condici&oacute;n de empleado p&uacute;blico";
 choices[12][3] = "quienes representen a un interesado que est&eacute; obligado legalmente a relacionarse electr&oacute;nicamente con la Administraci&oacute;n";
 answers[12] = choices[12][1];
 units[12] = "7";
 comments[12] = "Id Pregunta: 151. Ley 39/2015, Art&iacute;culo 14";


//  Id pregunta: 594 Año de creación de pregunta: 2016
 questions[13]= "14)  Seg&uacute;n el Plan de Transformaci&oacute;n Digital de la AGE, &iquest;con qu&eacute; frecuencia de realizar&aacute;n nuevas declaraciones de servicios compartidos?";
 choices[13]= new Array();
 choices[13][0] = "Anualmente";
 choices[13][1] = "Bienalmente";
 choices[13][2] = "Cada cuatro a&ntilde;os";
 choices[13][3] = "No se define ninguna periodicidad";
 answers[13] = choices[13][1];
 units[13] = "19";
 comments[13] = "Id Pregunta: 594. Estrategia TIC. Se indica en la l&iacute;nea de acci&oacute;n 6";


//  Id pregunta: 687 Año de creación de pregunta: 2016
 questions[14]= "15)  Se&ntilde;ale el plazo en que deben ser auditados los prestadores cualificados de servicios de confianza";
 choices[14]= new Array();
 choices[14][0] = "Al menos cada 12 meses";
 choices[14][1] = "El Reglamento no trata la supervisi&oacute;n de los prestadores cualificados de servicios de confianza, dejando tal cuesti&oacute;n a la regulaci&oacute;n nacional de cada Estado miembro";
 choices[14][2] = "Al menos cada 18 meses";
 choices[14][3] = "Al menos cada 24 meses";
 answers[14] = choices[14][3];
 units[14] = "77";
 comments[14] = "Id Pregunta: 687. Art&iacute;culo 20 del Reglamento 910/2014";


//  Id pregunta: 90 Año de creación de pregunta: 2016
 questions[15]= "16)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad (ENS) en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, el an&aacute;lisis y gesti&oacute;n de riesgos es una parte esencial del proceso de seguridad, debiendo mantenerse permanentemente actualizado. Para ello, el propio ENS establece que se debe realizar un an&aacute;lisis de riesgos formal para los sistemas de:";
 choices[15]= new Array();
 choices[15][0] = "Categor&iacute;a b&aacute;sica";
 choices[15][1] = "Categor&iacute;a media";
 choices[15][2] = "Categor&iacute;a alta";
 choices[15][3] = "Categor&iacute;a media y alta";
 answers[15] = choices[15][2];
 units[15] = "46";
 comments[15] = "Id Pregunta: 90. AGE A1 2015";


//  Id pregunta: 576 Año de creación de pregunta: 2016
 questions[16]= "17)  Son herramientas espec&iacute;ficas de control de versiones de software:";
 choices[16]= new Array();
 choices[16][0] = "Mercurial, Git y Apache Subversion.";
 choices[16][1] = "Gimp, Mercurial y Git.";
 choices[16][2] = "RedMine, Planner y OpenProj.";
 choices[16][3] = "Cassandra, Git y REDIS.";
 answers[16] = choices[16][0];
 units[16] = "92";
 comments[16] = "Id Pregunta: 576. Tema 92. TAI 2016.";


//  Id pregunta: 27 Año de creación de pregunta: 2016
 questions[17]= "18)  La Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, NO estableci&oacute; como derecho de los ciudadanos, el derecho:";
 choices[17]= new Array();
 choices[17][0] = "A la igualdad en el acceso electr&oacute;nico a los servicios de las Administraciones P&uacute;blicas.";
 choices[17][1] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que tengan la condici&oacute;n de interesado.";
 choices[17][2] = "A la calidad de los servicios p&uacute;blicos prestados por medios electr&oacute;nicos.";
 choices[17][3] = "A la preferencia en la tramitaci&oacute;n de los procedimientos presentados electr&oacute;nicamente.";
 answers[17] = choices[17][3];
 units[17] = "7";
 comments[17] = "Id Pregunta: 27. AGE A1 2015";


//  Id pregunta: 560 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Cu&aacute;ndo ha sido aprobada la Agenda Digital para Espa&ntilde;a?";
 choices[18]= new Array();
 choices[18][0] = "En 2015";
 choices[18][1] = "En 2013";
 choices[18][2] = "En 2016";
 choices[18][3] = "En 2007";
 answers[18] = choices[18][1];
 units[18] = "19";
 comments[18] = "Id Pregunta: 560. Agenda Digital";


//  Id pregunta: 724 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Cu&aacute;l es la principal desventaja de sprints m&aacute;s largos?";
 choices[19]= new Array();
 choices[19][0] = "Permite reaccionar al equipo mejor ante imprevistos";
 choices[19][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[19][2] = "Se reduce el n&uacute;mero de reuniones de sprint";
 choices[19][3] = "Se puede desarrollar algo diferente a lo requerido y obtener el feedback del cliente m&aacute;s tarde.";
 answers[19] = choices[19][3];
 units[19] = "34, 84";
 comments[19] = "Id Pregunta: 724. Metodologias &aacute;giles";


//  Id pregunta: 312 Año de creación de pregunta: 2016
 questions[20]= "21)  Los acuerdos de la Comisi&oacute;n Europea se adoptan:";
 choices[20]= new Array();
 choices[20][0] = "Por unanimidad.";
 choices[20][1] = "Por mayor&iacute;a cualificada.";
 choices[20][2] = "Por mayor&iacute;a de las dos terceras partes de sus miembros.";
 choices[20][3] = "Por mayor&iacute;a del n&uacute;mero de miembros.";
 answers[20] = choices[20][3];
 units[20] = "5";
 comments[20] = "Id Pregunta: 312. UNION EUROPEA";


//  Id pregunta: 356 Año de creación de pregunta: 2016
 questions[21]= "22)  Se&ntilde;ale la respuesta correcta respecto a las directivas comunitarias:";
 choices[21]= new Array();
 choices[21][0] = "No se aplican directamente en los Estados.";
 choices[21][1] = "No son vinculantes.";
 choices[21][2] = "Habitualmente se dictan sobre materias que son competencias exclusivas de la Uni&oacute;n Europea.";
 choices[21][3] = "Tienen alcance general.";
 answers[21] = choices[21][0];
 units[21] = "5";
 comments[21] = "Id Pregunta: 356. UNION EUROPEA";


//  Id pregunta: 150 Año de creación de pregunta: 2016
 questions[22]= "23)  Seg&uacute;n la ley 39/2015, el medio elegido por la persona para comunicarse con las Administraciones P&uacute;blicas:";
 choices[22]= new Array();
 choices[22][0] = "&uacute;nicamente podr&aacute; ser modificado cuando de no hacerlo se corra riesgo de no alcanzarse las pretensiones del interesado ";
 choices[22][1] = "no podr&aacute; ser modificado con posterioridad al tr&aacute;mite de audiencia";
 choices[22][2] = "podr&aacute; ser modificado en cualquier momento por la persona";
 choices[22][3] = "no podr&aacute; ser modificado de manera unilateral por el interesado";
 answers[22] = choices[22][2];
 units[22] = "7";
 comments[22] = "Id Pregunta: 150. Ley 39/2015, Art&iacute;culo 14";


//  Id pregunta: 434 Año de creación de pregunta: 2016
 questions[23]= "24)  En cuanto al sistema EGEO, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[23]= new Array();
 choices[23][0] = "Permite la representaci&oacute;n de mapas tem&aacute;ticos, georreferenciados, buscador de recursos georreferenciados con filtros definidos por el usuario, y de magnitud.";
 choices[23][1] = "Utiliza &uacute;nicamente sobre mapas oficiales del Instituto Geogr&aacute;fico Nacional (IGN).";
 choices[23][2] = "Es un servicio com&uacute;n dirigido a &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[23][3] = "Para su manejo, es necesario contar con conocimientos de georreferenciaci&oacute;n.";
 answers[23] = choices[23][0];
 units[23] = "43";
 comments[23] = "Id Pregunta: 434. SERVICIOS COMUNES";


//  Id pregunta: 147 Año de creación de pregunta: 2016
 questions[24]= "25)  Seg&uacute;n la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas el ejercicio de la potestad reglamentaria corresponde:";
 choices[24]= new Array();
 choices[24][0] = "Al Gobierno de la naci&oacute;n";
 choices[24][1] = "A las Cortes Generales y al Gobierno por delegaci&oacute;n de estas";
 choices[24][2] = "Al Gobierno de la naci&oacute;n y a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas";
 choices[24][3] = "Al Gobierno de la naci&oacute;n, a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas y a los &oacute;rganos de gobierno locales";
 answers[24] = choices[24][3];
 units[24] = "7";
 comments[24] = "Id Pregunta: 147. Ley 39/2015, Art&iacute;culo 128";


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


//  Id pregunta: 770 Año de creación de pregunta: 2016
 questions[26]= "27)  Las Administraciones P&uacute;blicas sirven con objetividad los intereses generales, con sometimiento pleno a la Constituci&oacute;n, a la Ley y al Derecho y act&uacute;an de acuerdo con los principios de:";
 choices[26]= new Array();
 choices[26][0] = "eficacia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[26][1] = "eficiencia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 choices[26][2] = "eficacia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[26][3] = "eficiencia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 answers[26] = choices[26][2];
 units[26] = "4, 7, 8, 9";
 comments[26] = "Id Pregunta: 770. Ley 40/2015";


//  Id pregunta: 538 Año de creación de pregunta: 2016
 questions[27]= "28)  En el registro electr&oacute;nico general de apoderamientos, deber&aacute;n inscribirse, al menos, los de car&aacute;cter general otorgados por quien ostente la condici&oacute;n de interesado en un procedimiento administrativo a favor de representante:";
 choices[27]= new Array();
 choices[27][0] = "apud acta";
 choices[27][1] = "presencialmente";
 choices[27][2] = "electr&oacute;nicamente";
 choices[27][3] = "todas son correctas";
 answers[27] = choices[27][3];
 units[27] = "7";
 comments[27] = "Id Pregunta: 538. LEY 39/2015";


//  Id pregunta: 116 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Cu&aacute;l de las siguientes es una pol&iacute;tica pasiva de empleo?";
 choices[28]= new Array();
 choices[28][0] = "La organizaci&oacute;n de cursos de formaci&oacute;n gratuitos para desempleados";
 choices[28][1] = "La intermediaci&oacute;n en el mercado laboral, es decir, recoger las ofertas de trabajo y cruzarlas con las demandas.";
 choices[28][2] = "Adecuar los planes de estudio a la realidad laboral";
 choices[28][3] = "El pago de subsidios a parados";
 answers[28] = choices[28][3];
 units[28] = "15";
 comments[28] = "Id Pregunta: 116. ";


//  Id pregunta: 545 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Qu&eacute; est&aacute;ndar ISO define un marco de trabajo para la gobernanza TIC?";
 choices[29]= new Array();
 choices[29][0] = "ISO/IEC 31000";
 choices[29][1] = "ISO/IEC 14000";
 choices[29][2] = "ISO/IEC 38500";
 choices[29][3] = "ISO/IEC 18000";
 answers[29] = choices[29][2];
 units[29] = "26";
 comments[29] = "Id Pregunta: 545. Gobernanza TIC";


//  Id pregunta: 21 Año de creación de pregunta: 2016
 questions[30]= "31)  En ITIL v3, &iquest;cu&aacute;l de los siguientes procesos forma parte del Dise&ntilde;o del Servicio?";
 choices[30]= new Array();
 choices[30][0] = "Gesti&oacute;n de la disponibilidad";
 choices[30][1] = "Gesti&oacute;n de la demanda";
 choices[30][2] = "Gesti&oacute;n de entregas";
 choices[30][3] = "Gesti&oacute;n de la configuraci&oacute;n";
 answers[30] = choices[30][0];
 units[30] = "101";
 comments[30] = "Id Pregunta: 21. AGE A1 2015";


//  Id pregunta: 817 Año de creación de pregunta: 2016
 questions[31]= "32)  Se determinar&aacute;n las islas en las que existir&aacute; un Director Insular de la Administraci&oacute;n General del Estado:";
 choices[31]= new Array();
 choices[31][0] = "por Real Decreto";
 choices[31][1] = "reglamentariamente";
 choices[31][2] = "mediante Ley";
 choices[31][3] = "ninguna es correcta";
 answers[31] = choices[31][1];
 units[31] = "4, 7, 8, 9";
 comments[31] = "Id Pregunta: 817. Ley 40/2015";


//  Id pregunta: 679 Año de creación de pregunta: 2016
 questions[32]= "33)  Las situaciones de dependencia se clasifican en los siguientes grados:";
 choices[32]= new Array();
 choices[32][0] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave";
 choices[32][1] = "Grado I dependencia moderada, grado II dependencia severa, grado III dependencia muy severa";
 choices[32][2] = "Grado I dependencia moderada, grado II dependencia severa, grado III gran dependencia";
 choices[32][3] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave, grado IV gran dependencia";
 answers[32] = choices[32][2];
 units[32] = "14";
 comments[32] = "Id Pregunta: 679. Dependencia";


//  Id pregunta: 767 Año de creación de pregunta: 2016
 questions[33]= "34)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[33]= new Array();
 choices[33][0] = "no quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo, cuando ejerzan potestades administrativas";
 choices[33][1] = "no quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley, ni siquiera, cuando ejerzan potestades administrativas";
 choices[33][2] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[33][3] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, excepto, cuando ejerzan potestades administrativas";
 answers[33] = choices[33][2];
 units[33] = "4, 7, 8, 9";
 comments[33] = "Id Pregunta: 767. Ley 40/2015";


//  Id pregunta: 198 Año de creación de pregunta: 2016
 questions[34]= "35)  La Constituci&oacute;n Espa&ntilde;ola de 1978, estructura las Cortes Generales en:";
 choices[34]= new Array();
 choices[34][0] = "Dos c&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[34][1] = "Consejo de Ministros y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[34][2] = "Gobierno de la Naci&oacute;n y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[34][3] = "Dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Baja) y Senado (C&aacute;mara Alta).";
 answers[34] = choices[34][3];
 units[34] = "1";
 comments[34] = "Id Pregunta: 198. CONSTITUCION1978";


//  Id pregunta: 18 Año de creación de pregunta: 2016
 questions[35]= "36)  Indique en qu&eacute; capa del modelo OSI se establece la encriptaci&oacute;n:";
 choices[35]= new Array();
 choices[35][0] = "Aplicaci&oacute;n";
 choices[35][1] = "Sesi&oacute;n";
 choices[35][2] = "Presentaci&oacute;n";
 choices[35][3] = "Transporte";
 answers[35] = choices[35][2];
 units[35] = "105";
 comments[35] = "Id Pregunta: 18. AGE A1 2015";


//  Id pregunta: 135 Año de creación de pregunta: 2016
 questions[36]= "37)  Dentro de las &uacute;ltimas medidas vigentes de impulso de la actividad econ&oacute;mica, la liberalizaci&oacute;n del comercio implica:";
 choices[36]= new Array();
 choices[36][0] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[36][1] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 choices[36][2] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[36][3] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 answers[36] = choices[36][0];
 units[36] = "12";
 comments[36] = "Id Pregunta: 135. Leyes modelo econ&oacute;mico";


//  Id pregunta: 244 Año de creación de pregunta: 2016
 questions[37]= "38)  La Constituci&oacute;n Espa&ntilde;ola, en el art&iacute;culo 9 del T&iacute;tulo Preliminar, garantiza el principio de:";
 choices[37]= new Array();
 choices[37][0] = "Retroactividad de las disposiciones sancionadoras no favorables de derechos individuales.";
 choices[37][1] = "Publicidad de las normas.";
 choices[37][2] = "Defensa jur&iacute;dica ante los tribunales.";
 choices[37][3] = "Coordinaci&oacute;n normativa.";
 answers[37] = choices[37][2];
 units[37] = "1";
 comments[37] = "Id Pregunta: 244. CONSTITUCION1978";


//  Id pregunta: 43 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Cu&aacute;l de los siguientes principios NO est&aacute; recogido en el Manifiesto por el Desarrollo &Aacute;gil del Software?";
 choices[38]= new Array();
 choices[38][0] = "La simplicidad, o el arte de maximizar la cantidad de trabajo no realizado, es esencial.";
 choices[38][1] = "Aceptamos que los requisitos cambien, incluso en etapas tard&iacute;as del desarrollo. Los procesos &aacute;giles aprovechan el cambio para proporcionar ventaja competitiva al cliente.";
 choices[38][2] = "Las mejores arquitecturas, requisitos y dise&ntilde;os emergen por la aplicaci&oacute;n de unos procesos bien organizados.";
 choices[38][3] = "El software funcionando es la medida principal del progreso.";
 answers[38] = choices[38][2];
 units[38] = "34";
 comments[38] = "Id Pregunta: 43. AGE A1 2015";


//  Id pregunta: 683 Año de creación de pregunta: 2016
 questions[39]= "40)  El Factor de Sostenibilidad, de acuerdo a la Ley 23/2013, de 23 de diciembre, reguladora del Factor de Sostenibilidad y del &Iacute;ndice de Revalorizaci&oacute;n del Sistema de Pensiones de la Seguridad Social:";
 choices[39]= new Array();
 choices[39][0] = "Es un valor que se calcula para cada periodo de 3 a&ntilde;os, comenzando en el a&ntilde;o 2016.";
 choices[39][1] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la evoluci&oacute;n del PIB y otros datos macroecon&oacute;micos.";
 choices[39][2] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la esperanza de vida de los pensionistas.";
 choices[39][3] = "Se aplicar&aacute; para determinar la cuant&iacute;a de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a partir del 1 de Enero del a&ntilde;o 2018.";
 answers[39] = choices[39][2];
 units[39] = "14";
 comments[39] = "Id Pregunta: 683. Pensiones";


//  Id pregunta: 327 Año de creación de pregunta: 2016
 questions[40]= "41)  La idea de una Europa unida tiene sus antecedentes en el siglo:";
 choices[40]= new Array();
 choices[40][0] = "X.";
 choices[40][1] = "XIX.";
 choices[40][2] = "XV.";
 choices[40][3] = "XIII.";
 answers[40] = choices[40][1];
 units[40] = "5";
 comments[40] = "Id Pregunta: 327. UNION EUROPEA";


//  Id pregunta: 564 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Cu&aacute;l de los siguientes per&iacute;odos puede considerarse de crecimiento econ&oacute;mico en Espa&ntilde;a?";
 choices[41]= new Array();
 choices[41][0] = "Entre 1973 y 1978";
 choices[41][1] = "Entre 1992 y 1996";
 choices[41][2] = "Entre 1978 y 1985";
 choices[41][3] = "Entre 2008 y 2013";
 answers[41] = choices[41][2];
 units[41] = "12";
 comments[41] = "Id Pregunta: 564. Modelo econ&oacute;mico";


//  Id pregunta: 19 Año de creación de pregunta: 2016
 questions[42]= "43)  En el sistema de Identificaci&oacute;n, Autenticaci&oacute;n y Firma Electr&oacute;nica com&uacute;n para todo el Sector P&uacute;blico Administrativo Estatal (cl@ve):";
 choices[42]= new Array();
 choices[42][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital es el proveedor &uacute;nico de servicios de verificaci&oacute;n de la identidad.";
 choices[42][1] = "Sus destinatarios son exclusivamente ciudadanos espa&ntilde;oles.";
 choices[42][2] = "Su &aacute;mbito de aplicaci&oacute;n podr&aacute; extenderse a otras Administraciones P&uacute;blicas mediante la formalizaci&oacute;n del oportuno convenio.";
 choices[42][3] = "No se requiere registro previo de usuarios, ni consentimiento del usuario ya registrado en otros sistemas previos de identificaci&oacute;n, autenticaci&oacute;n y firma.";
 answers[42] = choices[42][2];
 units[42] = "47";
 comments[42] = "Id Pregunta: 19. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 86 Año de creación de pregunta: 2016
 questions[43]= "44)  Un contrato menor tiene una duraci&oacute;n m&aacute;xima de:";
 choices[43]= new Array();
 choices[43][0] = "Un a&ntilde;o prorrogable";
 choices[43][1] = "Dos a&ntilde;os no prorrogables";
 choices[43][2] = "Un a&ntilde;o no prorrogable";
 choices[43][3] = "Dos a&ntilde;os prorrogables";
 answers[43] = choices[43][2];
 units[43] = "37";
 comments[43] = "Id Pregunta: 86. AGE A1 2015";


//  Id pregunta: 118 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;C&oacute;mo se concretan anualmente los objetivos de la Estrategia Espa&ntilde;ola de Activaci&oacute;n para el Empleo?";
 choices[44]= new Array();
 choices[44][0] = "Mediante &Oacute;rdenes Ministeriales del Ministerio de Empleo y Seguridad Social";
 choices[44][1] = "Mediante Reales Decretos del Consejo de Ministros";
 choices[44][2] = "Mediante los Planes Anuales de Pol&iacute;tica de Empleo";
 choices[44][3] = "Mediante dictamen del Consejo General del Sistema Nacional de Empleo";
 answers[44] = choices[44][2];
 units[44] = "15";
 comments[44] = "Id Pregunta: 118. ";


//  Id pregunta: 39 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Cu&aacute;l de las siguientes respuestas NO es un servicio definido por el Open Geospatial Consortium (OGC)?";
 choices[45]= new Array();
 choices[45][0] = "WMS sirve mapas de forma din&aacute;mica presentando la informaci&oacute;n como im&aacute;genes digitales.";
 choices[45][1] = "WMTS permite la visualizaci&oacute;n de mapas a trav&eacute;s de teselas (tiles) de im&aacute;genes.";
 choices[45][2] = "WRS permite la consulta de colecciones de mapas raster.";
 choices[45][3] = "WFS permite la consulta y descarga de datos vectoriales.";
 answers[45] = choices[45][2];
 units[45] = "71";
 comments[45] = "Id Pregunta: 39. AGE A1 2015";


//  Id pregunta: 573 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Cu&aacute;l de los siguientes hechos NO se produce durante la d&eacute;cada de los 70-80?";
 choices[46]= new Array();
 choices[46][0] = "Incorporaci&oacute;n de la mujer al mercado laboral";
 choices[46][1] = "Entrada en la Uni&oacute;n Europea";
 choices[46][2] = "Pactos de la Moncloa";
 choices[46][3] = "Ingreso en la ONU";
 answers[46] = choices[46][3];
 units[46] = "12";
 comments[46] = "Id Pregunta: 573. Modelo econ&oacute;mico";


//  Id pregunta: 764 Año de creación de pregunta: 2016
 questions[47]= "48)  La Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico, establece y regula (se&ntilde;ala la incorrecta):";
 choices[47]= new Array();
 choices[47][0] = "las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[47][1] = "los principios del sistema de responsabilidad de las Administraciones P&uacute;blicas y de la potestad sancionadora";
 choices[47][2] = "el procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas";
 choices[47][3] = "la organizaci&oacute;n y funcionamiento de la Administraci&oacute;n General del Estado y de su sector p&uacute;blico institucional para el desarrollo de sus actividades";
 answers[47] = choices[47][2];
 units[47] = "4, 7, 8, 9";
 comments[47] = "Id Pregunta: 764. Ley 40/2015";


//  Id pregunta: 812 Año de creación de pregunta: 2016
 questions[48]= "49)  Existir&aacute; una Delegaci&oacute;n del Gobierno en:";
 choices[48]= new Array();
 choices[48][0] = "la capital del pa&iacute;s";
 choices[48][1] = "cada una de las Comunidades Aut&oacute;nomas";
 choices[48][2] = "cada una de las provincias";
 choices[48][3] = "cada una de las embajadas espa&ntilde;olas";
 answers[48] = choices[48][1];
 units[48] = "4, 7, 8, 9";
 comments[48] = "Id Pregunta: 812. Ley 40/2015";


//  Id pregunta: 283 Año de creación de pregunta: 2016
 questions[49]= "50)  Se&ntilde;ale cu&aacute;l no es una de las prioridades de la Estrategia Europa 2020:";
 choices[49]= new Array();
 choices[49][0] = "Crecimiento inteligente.";
 choices[49][1] = "Crecimiento inclusivo.";
 choices[49][2] = "Crecimiento sostenible.";
 choices[49][3] = "Crecimiento integrador.";
 answers[49] = choices[49][1];
 units[49] = "5";
 comments[49] = "Id Pregunta: 283. UNION EUROPEA";


//  Id pregunta: 613 Año de creación de pregunta: 2016
 questions[50]= "51)  Una de las caracter&iacute;sticas de seguridad en SQL Server 2008 es el cifrado transparente de datos. Se&ntilde;ala la afirmaci&oacute;n correcta:";
 choices[50]= new Array();
 choices[50][0] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de registro.";
 choices[50][1] = "SQL Server ofrece la capacidad de buscar dentro de los datos cifrados.";
 choices[50][2] = "Para trabajar con datos cifrados utilizando esta caracter&iacute;stica hay que introducir cambios en las aplicaciones.";
 choices[50][3] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de datos.";
 answers[50] = choices[50][1];
 units[50] = "63";
 comments[50] = "Id Pregunta: 613. Junta de Extremadura A1 2015";


//  Id pregunta: 721 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;C&uacute;al de los siguientes puntos NO  es uno de los principios de las metodolog&iacute;as lean?";
 choices[51]= new Array();
 choices[51][0] = "Flexibilidad para variar el servicio o producto";
 choices[51][1] = "Eliminar desperdicios";
 choices[51][2] = "Decidir lo m&aacute;s tarde posible";
 choices[51][3] = "Hacer entregas tan r&aacute;pido como sea posible";
 answers[51] = choices[51][0];
 units[51] = "34";
 comments[51] = "Id Pregunta: 721. Metodologias Lean";


//  Id pregunta: 137 Año de creación de pregunta: 2016
 questions[52]= "53)  La creaci&oacute;n de la Autoridad Independiente de Responsabilidad Fiscal, dentro de la Ley Org&aacute;nica 6/2013, tiene por objeto:";
 choices[52]= new Array();
 choices[52][0] = "Garantizar el cumplimiento efectivo por las Administraciones P&uacute;blicas del principio de estabilidad presupuestaria previsto en el art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola.";
 choices[52][1] = "La evaluaci&oacute;n continua del ciclo presupuestario, del endeudamiento p&uacute;blico, y el an&aacute;lisis de las previsiones econ&oacute;micas.";
 choices[52][2] = "Ejercer sus funciones con autonom&iacute;a e independencia funcional respecto de las Administraciones P&uacute;blicas.";
 choices[52][3] = "Todos las anteriores son ciertas.";
 answers[52] = choices[52][3];
 units[52] = "12";
 comments[52] = "Id Pregunta: 137. Leyes modelo econ&oacute;mico";


//  Id pregunta: 655 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;Cual de las siguientes bases de datos no est&aacute; orientada a grafos?";
 choices[53]= new Array();
 choices[53][0] = "Neo4J ";
 choices[53][1] = "OrientDB ";
 choices[53][2] = "InfoGrid ";
 choices[53][3] = "SimpleDB";
 answers[53] = choices[53][3];
 units[53] = "73";
 comments[53] = "Id Pregunta: 655. ";


//  Id pregunta: 791 Año de creación de pregunta: 2016
 questions[54]= "55)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Delegados del Gobierno en las Comunidades Aut&oacute;nomas tendr&aacute;n rango de:";
 choices[54]= new Array();
 choices[54][0] = "Subsecretario";
 choices[54][1] = "Subdirector general";
 choices[54][2] = "Secretario de Estado";
 choices[54][3] = "ninguna es correcta";
 answers[54] = choices[54][0];
 units[54] = "4, 7, 8, 9";
 comments[54] = "Id Pregunta: 791. Ley 40/2015";


//  Id pregunta: 396 Año de creación de pregunta: 2016
 questions[55]= "56)  La discriminaci&oacute;n por embarazo o maternidad, es considerada:";
 choices[55]= new Array();
 choices[55][0] = "Discriminaci&oacute;n directa por raz&oacute;n de sexo.";
 choices[55][1] = "Discriminaci&oacute;n indirecta por raz&oacute;n de sexo.";
 choices[55][2] = "Discriminaci&oacute;n negativa por raz&oacute;n de sexo.";
 choices[55][3] = "Discriminaci&oacute;n positiva por raz&oacute;n de sexo.";
 answers[55] = choices[55][0];
 units[55] = "14";
 comments[55] = "Id Pregunta: 396. POLITICAS DE IGUALDAD";


//  Id pregunta: 840 Año de creación de pregunta: 2016
 questions[56]= "57)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta correcta.";
 choices[56]= new Array();
 choices[56][0] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos provisionalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[56][1] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos temporalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[56][2] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos eventualmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[56][3] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos circunstancialmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 answers[56] = choices[56][1];
 units[56] = "4, 7, 8, 9";
 comments[56] = "Id Pregunta: 840. Ley 40/2015";


//  Id pregunta: 452 Año de creación de pregunta: 2016
 questions[57]= "58)  Los Presupuestos Generales son expresi&oacute;n...";
 choices[57]= new Array();
 choices[57][0] = "Cifrada";
 choices[57][1] = "Conjunta";
 choices[57][2] = "Sistem&aacute;tica";
 choices[57][3] = "Todas son correctas";
 answers[57] = choices[57][3];
 units[57] = "10";
 comments[57] = "Id Pregunta: 452. PRESUPUESTOS GENERALES";


//  Id pregunta: 554 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Cu&aacute;l de los siguientes no es uno de los pilares de la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[58]= new Array();
 choices[58][0] = "Establecer redes de telecomunicaciones continentales";
 choices[58][1] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa";
 choices[58][2] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar";
 choices[58][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[58] = choices[58][0];
 units[58] = "17";
 comments[58] = "Id Pregunta: 554. Mercado &Uacute;nico Digital";


//  Id pregunta: 271 Año de creación de pregunta: 2016
 questions[59]= "60)  La delegaci&oacute;n legislativa de las Cortes Generales en el Gobierno, cuando se trata de refundir varios textos legales en uno solo, deber&aacute; otorgarse mediante:";
 choices[59]= new Array();
 choices[59][0] = "Ley org&aacute;nica.";
 choices[59][1] = "Ley ordinaria.";
 choices[59][2] = "Ley de bases.";
 choices[59][3] = "Ley marco.";
 answers[59] = choices[59][0];
 units[59] = "1";
 comments[59] = "Id Pregunta: 271. CONSTITUCION1978";


//  Id pregunta: 834 Año de creación de pregunta: 2016
 questions[60]= "61)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de los siguientes requisitos:";
 choices[60]= new Array();
 choices[60][0] = "Determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia org&aacute;nica.";
 choices[60][1] = "Delimitaci&oacute;n de su naturaleza, funciones y competencias.";
 choices[60][2] = "Dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento.";
 choices[60][3] = "Todas son correctas.";
 answers[60] = choices[60][3];
 units[60] = "4, 7, 8, 9";
 comments[60] = "Id Pregunta: 834. Ley 40/2015";


//  Id pregunta: 11 Año de creación de pregunta: 2016
 questions[61]= "62)  Nada m&aacute;s arrancar el servidor de aplicaciones, usted intenta acceder a su aplicaci&oacute;n y se produce un error de memoria. En ese momento, sospecha que el error se produce porque est&aacute; utilizando unas librer&iacute;as de terceros de gran tama&ntilde;o. &iquest;Qu&eacute; tipo de error deber&iacute;a estar d&aacute;ndose para corroborar su hip&oacute;tesis?";
 choices[61]= new Array();
 choices[61][0] = "java.lang.OutOfMemoryError: Java heap space";
 choices[61][1] = "java.lang.OutOfMemoryError: PermGen space";
 choices[61][2] = "java.lang.OutOfMemoryError: Requested array size exceeds VM limit";
 choices[61][3] = "java.lang.OutOfMemoryError: request &lt;size&gt; bytes for &lt;reason&gt;. Out of swap space";
 answers[61] = choices[61][1];
 units[61] = "64";
 comments[61] = "Id Pregunta: 11. AGE A1 2015";


//  Id pregunta: 156 Año de creación de pregunta: 2016
 questions[62]= "63)  Seg&uacute;n la ley 39/2015, toda notificaci&oacute;n deber&aacute; (se&ntilde;ala la respuesta incorrecta):";
 choices[62]= new Array();
 choices[62][0] = "contener el texto &iacute;ntegro de la resoluci&oacute;n";
 choices[62][1] = "expresar los recursos que procedan, &uacute;nicamente en v&iacute;a administrativa";
 choices[62][2] = "indicar si pone fin o no a la v&iacute;a administrativa";
 choices[62][3] = "indicar el &oacute;rgano ante el que hubieran de presentarse los recursos que procedan y el plazo para interponerlos";
 answers[62] = choices[62][1];
 units[62] = "7";
 comments[62] = "Id Pregunta: 156. Ley 39/2015, Art&iacute;culo 40";


//  Id pregunta: 293 Año de creación de pregunta: 2016
 questions[63]= "64)  Las sesiones plenarias mensuales, a las que asisten todos los diputados, se celebran en:";
 choices[63]= new Array();
 choices[63][0] = "Estrasburgo.";
 choices[63][1] = "Bruselas.";
 choices[63][2] = "Luxemburgo.";
 choices[63][3] = "Holanda.";
 answers[63] = choices[63][0];
 units[63] = "5";
 comments[63] = "Id Pregunta: 293. UNION EUROPEA";


//  Id pregunta: 306 Año de creación de pregunta: 2016
 questions[64]= "65)  Componen la Comisi&oacute;n Europea:";
 choices[64]= new Array();
 choices[64][0] = "Un Comisario por cada Estado miembro.";
 choices[64][1] = "Uno o dos Comisarios por cada Estado miembro, dependiendo de las caracter&iacute;sticas del Estado.";
 choices[64][2] = "Dos Comisarios por cada Estado miembro.";
 choices[64][3] = "Los Ministros de Asuntos Exteriores de cada Estado miembro.";
 answers[64] = choices[64][0];
 units[64] = "5";
 comments[64] = "Id Pregunta: 306. UNION EUROPEA";


//  Id pregunta: 606 Año de creación de pregunta: 2016
 questions[65]= "66)  ITIL v3, define:";
 choices[65]= new Array();
 choices[65][0] = "Un proceso es un conjunto estructurado de actividades dise&ntilde;ado para cumplir un objetivo concreto.";
 choices[65][1] = "Un proceso es un conjunto de actividades no estructuradas para cumplir un objetivo concreto.";
 choices[65][2] = "Un proceso es toda actividad encaminada a cumplir con un est&aacute;ndar definido por las normas ISO.";
 choices[65][3] = "Un proceso es un conjunto de actividades de documentaci&oacute;n y seguridad dise&ntilde;ados mediante diagramas de flujo de informaci&oacute;n.";
 answers[65] = choices[65][0];
 units[65] = "101";
 comments[65] = "Id Pregunta: 606. Junta de Extremadura A1 2015";


//  Id pregunta: 112 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Qu&eacute; dos magnitudes relaciona la Ley de Okun?";
 choices[66]= new Array();
 choices[66][0] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de inflaci&oacute;n";
 choices[66][1] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la variaci&oacute;n del desempleo";
 choices[66][2] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de actividad";
 choices[66][3] = "El valor absoluto del PIB (Producto Interior Bruto) con la tasa de actividad";
 answers[66] = choices[66][1];
 units[66] = "15";
 comments[66] = "Id Pregunta: 112. ";


//  Id pregunta: 453 Año de creación de pregunta: 2016
 questions[67]= "68)  En los Presupuestos, &iquest;qu&eacute; es lo que se prev&eacute; liquidar?";
 choices[67]= new Array();
 choices[67][0] = "Los cr&eacute;ditos";
 choices[67][1] = "Las partidas presupuestarias";
 choices[67][2] = "Los derechos";
 choices[67][3] = "Las obligaciones";
 answers[67] = choices[67][2];
 units[67] = "10";
 comments[67] = "Id Pregunta: 453. PRESUPUESTOS GENERALES";


//  Id pregunta: 497 Año de creación de pregunta: 2016
 questions[68]= "69)  Seg&uacute;n el art&iacute;culo 13.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el aplazamiento y fraccionamiento de las cantidades adeudadas a la Hacienda P&uacute;blica estatal por las comunidades aut&oacute;nomas y las corporaciones locales se regir&aacute; por:";
 choices[68]= new Array();
 choices[68][0] = "La Ley General Tributaria.";
 choices[68][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General del Estado.";
 choices[68][2] = "La legislaci&oacute;n espec&iacute;fica, la cual tendr&aacute; en cuenta la necesaria reciprocidad entre administraciones.";
 choices[68][3] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 answers[68] = choices[68][2];
 units[68] = "10";
 comments[68] = "Id Pregunta: 497. PRESUPUESTOS GENERALES";


//  Id pregunta: 416 Año de creación de pregunta: 2016
 questions[69]= "70)  &iquest;Qu&eacute; art&iacute;culo de la LO 3/2007, regula la igualdad en el &aacute;mbito de la educaci&oacute;n superior:";
 choices[69]= new Array();
 choices[69][0] = "Art. 25 LO, 3/2007.";
 choices[69][1] = "Art. 23 LO, 3/2007.";
 choices[69][2] = "Art. 14 LO, 3/2007.";
 choices[69][3] = "Ninguna es correcta, es el art. 13.";
 answers[69] = choices[69][0];
 units[69] = "14";
 comments[69] = "Id Pregunta: 416. POLITICAS DE IGUALDAD";


//  Id pregunta: 254 Año de creación de pregunta: 2016
 questions[70]= "71)  El Art&iacute;culo 16 de la Constituci&oacute;n Espa&ntilde;ola garantiza:";
 choices[70]= new Array();
 choices[70][0] = "La libertad ideol&oacute;gica, religiosa y de culto.";
 choices[70][1] = "La libertad sexual y religiosa.";
 choices[70][2] = "La obligaci&oacute;n del derecho al voto en las elecciones.";
 choices[70][3] = "La ausencia de libertad cat&oacute;lica.";
 answers[70] = choices[70][3];
 units[70] = "1";
 comments[70] = "Id Pregunta: 254. CONSTITUCION1978";


//  Id pregunta: 620 Año de creación de pregunta: 2016
 questions[71]= "72)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[71]= new Array();
 choices[71][0] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de tareas que se comportan de acuerdo a los requisitos del sistema.";
 choices[71][1] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de procesos externos que se comportan de acuerdo a los requisitos del sistema.";
 choices[71][2] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de objetos sem&aacute;nticos que interaccionan y se comportan de acuerdo a los requisitos del sistema.";
 choices[71][3] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela la soluci&oacute;n del problema identificando y especificando un conjunto de usuarios que son los que necesitan los requisitos del sistema.";
 answers[71] = choices[71][2];
 units[71] = "85";
 comments[71] = "Id Pregunta: 620. Junta de Extremadura A1 2015";


//  Id pregunta: 517 Año de creación de pregunta: 2016
 questions[72]= "73)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[72]= new Array();
 choices[72][0] = "quedar&aacute;n sujetas a lo dispuesto en todas las normas de esta Ley";
 choices[72][1] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[72][2] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo cuando ejerzan potestades administrativas";
 choices[72][3] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley";
 answers[72] = choices[72][1];
 units[72] = "7";
 comments[72] = "Id Pregunta: 517. LEY 39/2015";


//  Id pregunta: 54 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;A qu&eacute; tipo de ataque nos referimos cuando se suplanta la identidad de una direcci&oacute;n IP origen?";
 choices[73]= new Array();
 choices[73][0] = "DoS";
 choices[73][1] = "Phishing";
 choices[73][2] = "Sniffing";
 choices[73][3] = "Spoofing";
 answers[73] = choices[73][3];
 units[73] = "119";
 comments[73] = "Id Pregunta: 54. AGE A1 2015";


//  Id pregunta: 420 Año de creación de pregunta: 2016
 questions[74]= "75)  La Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, recoge que deber&aacute;n elaborar y aplicar un plan de igualdad, aquellas empresas con m&aacute;s de:";
 choices[74]= new Array();
 choices[74][0] = "150 trabajadores/as.";
 choices[74][1] = "200 trabajadores/as.";
 choices[74][2] = "250 trabajadores/as.";
 choices[74][3] = "300 trabajadores/as.";
 answers[74] = choices[74][2];
 units[74] = "14";
 comments[74] = "Id Pregunta: 420. POLITICAS DE IGUALDAD";


