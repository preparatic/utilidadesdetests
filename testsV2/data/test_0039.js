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

//  Id pregunta: 11 Año de creación de pregunta: 2016
 questions[0]= "1)  Nada m&aacute;s arrancar el servidor de aplicaciones, usted intenta acceder a su aplicaci&oacute;n y se produce un error de memoria. En ese momento, sospecha que el error se produce porque est&aacute; utilizando unas librer&iacute;as de terceros de gran tama&ntilde;o. &iquest;Qu&eacute; tipo de error deber&iacute;a estar d&aacute;ndose para corroborar su hip&oacute;tesis?";
 choices[0]= new Array();
 choices[0][0] = "java.lang.OutOfMemoryError: Java heap space";
 choices[0][1] = "java.lang.OutOfMemoryError: PermGen space";
 choices[0][2] = "java.lang.OutOfMemoryError: Requested array size exceeds VM limit";
 choices[0][3] = "java.lang.OutOfMemoryError: request &lt;size&gt; bytes for &lt;reason&gt;. Out of swap space";
 answers[0] = choices[0][1];
 units[0] = "64";
 comments[0] = "Id Pregunta: 11. AGE A1 2015";
 preguntaids[0] = 11


//  Id pregunta: 132 Año de creación de pregunta: 2016
 questions[1]= "2)  Cu&aacute;l de las siguientes leyes no est&aacute; incluida en la reforma tributaria llevada a cabo en el a&ntilde;o 2014:";
 choices[1]= new Array();
 choices[1][0] = "Ley 26/2014, del Impuesto sobre la Renta de las Personas F&iacute;sicas";
 choices[1][1] = "Ley 27/2014, del Impuesto sobre Sociedades";
 choices[1][2] = "Ley 28/2014, de Impuestos Especiales";
 choices[1][3] = "Ley 29/2014, del Impuesto de Valor A&ntilde;adido";
 answers[1] = choices[1][3];
 units[1] = "12";
 comments[1] = "Id Pregunta: 132. Leyes modelo econ&oacute;mico";
 preguntaids[1] = 132


//  Id pregunta: 574 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares de la serie IEEE 802.11 se conoce como Fast Basic Service Set Transition, el cual est&aacute; enfocado a permitir la conexi&oacute;n continua de clientes en movimiento?";
 choices[2]= new Array();
 choices[2][0] = "IEEE 802.11p";
 choices[2][1] = "IEEE 802.11r";
 choices[2][2] = "IEEE 802.11v";
 choices[2][3] = "IEEE 802.11w";
 answers[2] = choices[2][1];
 units[2] = "112";
 comments[2] = "Id Pregunta: 574. Tema 112. TAI 2016.";
 preguntaids[2] = 574


//  Id pregunta: 859 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Cu&aacute;ntos fasc&iacute;culos tiene la gu&iacute;a de comunicaci&oacute;n digital para la Administraci&oacute;n General del Estado?";
 choices[3]= new Array();
 choices[3][0] = "12";
 choices[3][1] = "11";
 choices[3][2] = "13";
 choices[3][3] = "10";
 answers[3] = choices[3][0];
 units[3] = "125";
 comments[3] = "Id Pregunta: 859. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[3] = 859


//  Id pregunta: 739 Año de creación de pregunta: 2016
 questions[4]= "5)  En el Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE, las administraciones p&uacute;blicas y las instituciones p&uacute;blicas de la Uni&oacute;n Europea deben ser abiertas, eficaces e integradoras en el a&ntilde;o:";
 choices[4]= new Array();
 choices[4][0] = "2025";
 choices[4][1] = "2023";
 choices[4][2] = "2030";
 choices[4][3] = "2020";
 answers[4] = choices[4][3];
 units[4] = "28";
 comments[4] = "Id Pregunta: 739. Estrategia TIC";
 preguntaids[4] = 739


//  Id pregunta: 839 Año de creación de pregunta: 2016
 questions[5]= "6)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La formalizaci&oacute;n de las encomiendas de gesti&oacute;n se ajustar&aacute; a las siguientes reglas:";
 choices[5]= new Array();
 choices[5][0] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos administrativos o Entidades de Derecho P&uacute;blico pertenecientes a la misma Administraci&oacute;n deber&aacute; formalizarse en los t&eacute;rminos que establezca su normativa propia y, en su defecto, por acuerdo expreso de los &oacute;rganos o Entidades de Derecho P&uacute;blico intervinientes. En todo caso, el instrumento de formalizaci&oacute;n de la encomienda de gesti&oacute;n y su resoluci&oacute;n deber&aacute; ser publicada, para su eficacia, en el Bolet&iacute;n Oficial del Estado, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante.";
 choices[5][1] = "Cada Administraci&oacute;n podr&aacute; regular los requisitos necesarios para la validez de tales acuerdos que incluir&aacute;n, al menos, expresa menci&oacute;n de la actividad o actividades a las que afecten, el plazo de vigencia y la naturaleza y alcance de la gesti&oacute;n encomendada.";
 choices[5][2] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos y Entidades de Derecho P&uacute;blico de distintas Administraciones se formalizar&aacute; mediante firma del correspondiente convenio entre ellas, que deber&aacute; ser publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante, salvo en el supuesto de la gesti&oacute;n ordinaria de los servicios de las Comunidades Aut&oacute;nomas por las Diputaciones Provinciales o en su caso Cabildos o Consejos insulares, que se regir&aacute; por la legislaci&oacute;n de R&eacute;gimen Local.";
 choices[5][3] = "Todas son correctas.";
 answers[5] = choices[5][3];
 units[5] = "4, 7, 8, 9";
 comments[5] = "Id Pregunta: 839. Ley 40/2015";
 preguntaids[5] = 839


//  Id pregunta: 763 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;En qu&eacute; a&ntilde;o se adopt&oacute; la Estrategia para el Mercado &Uacute;nico Digital?";
 choices[6]= new Array();
 choices[6][0] = "En 2011";
 choices[6][1] = "En 2013";
 choices[6][2] = "En 2015";
 choices[6][3] = "En 2016";
 answers[6] = choices[6][2];
 units[6] = "17";
 comments[6] = "Id Pregunta: 763. Mercado &Uacute;nico Digital";
 preguntaids[6] = 763


//  Id pregunta: 729 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;C&uacute;al es el nombre de la reuni&oacute;n de SCRUM, donde se revisan los product backlog &iacute;tems?:";
 choices[7]= new Array();
 choices[7][0] = "Backlog refinement";
 choices[7][1] = "Backlog grooming";
 choices[7][2] = "a y b son correctas";
 choices[7][3] = "Ninguna de las anteriores";
 answers[7] = choices[7][2];
 units[7] = "34, 84";
 comments[7] = "Id Pregunta: 729. Metodologias &aacute;giles";
 preguntaids[7] = 729


//  Id pregunta: 769 Año de creación de pregunta: 2016
 questions[8]= "9)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[8]= new Array();
 choices[8][0] = "la Administraci&oacute;n General del Estado";
 choices[8][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[8][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[8][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico o privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[8] = choices[8][3];
 units[8] = "4, 7, 8, 9";
 comments[8] = "Id Pregunta: 769. Ley 40/2015";
 preguntaids[8] = 769


//  Id pregunta: 548 Año de creación de pregunta: 2016
 questions[9]= "10)  El principio definido en el est&aacute;ndar ISO/IEC 38500 para la Gobernanza TIC que establece la necesidad de cumplir los requerimientos regulatorios y legales es el principio de:";
 choices[9]= new Array();
 choices[9][0] = "Conformidad";
 choices[9][1] = "Responsabilidad";
 choices[9][2] = "Adquisici&oacute;n";
 choices[9][3] = "Desempe&ntilde;o";
 answers[9] = choices[9][0];
 units[9] = "26";
 comments[9] = "Id Pregunta: 548. Gobernanza TIC";
 preguntaids[9] = 548


//  Id pregunta: 165 Año de creación de pregunta: 2016
 questions[10]= "11)  Como parte del Plan de acci&oacute;n sobre administraci&oacute;n electr&oacute;nica para 2010-2020, la Comisi&oacute;n:";
 choices[10]= new Array();
 choices[10][0] = "Tratar&aacute; de interconectar los registros mercantiles en toda la UE.";
 choices[10][1] = "Se adoptar&aacute;n nuevas normas en materia de telecomunicaciones";
 choices[10][2] = "Se revisar&aacute; la Directiva de servicios de comunicaci&oacute;n audiovisual existente para adaptarse a la evoluci&oacute;n tecnol&oacute;gica";
 choices[10][3] = "Se actualizar&aacute;n las normas de comercio electr&oacute;nico";
 answers[10] = choices[10][0];
 units[10] = "19";
 comments[10] = "Id Pregunta: 165. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/";
 preguntaids[10] = 165


//  Id pregunta: 311 Año de creación de pregunta: 2016
 questions[11]= "12)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[11]= new Array();
 choices[11][0] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los tres quintos del n&uacute;mero de Estados miembros.";
 choices[11][1] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a las tres cuartas partes del n&uacute;mero de Estados miembros.";
 choices[11][2] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los dos tercios del n&uacute;mero de Estados miembros.";
 choices[11][3] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a un nacional por cada Estado miembro.";
 answers[11] = choices[11][2];
 units[11] = "5";
 comments[11] = "Id Pregunta: 311. UNION EUROPEA";
 preguntaids[11] = 311


//  Id pregunta: 8 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes NO es una funci&oacute;n de la Secretar&iacute;a General de Administraci&oacute;n Digital?";
 choices[12]= new Array();
 choices[12][0] = "Establecer los mecanismos que aseguren un adecuado mantenimiento del censo de activos TIC.";
 choices[12][1] = "El estudio y la implementaci&oacute;n de modelos para incentivar la compartici&oacute;n y reutilizaci&oacute;n de las infraestructuras y aplicaciones sectoriales, y promover el desarrollo de aplicaciones bajo dicho modelo.";
 choices[12][2] = "La supervisi&oacute;n y coordinaci&oacute;n del registro de convenios del sector p&uacute;blico estatal, de acuerdo con la informaci&oacute;n que deber&aacute;n suministrar los diferentes departamentos ministeriales y dem&aacute;s organismos p&uacute;blicos suscriptores de los mismos.";
 choices[12][3] = "El desarrollo, impulso e implantaci&oacute;n de sistemas tecnol&oacute;gicos de apoyo para la gesti&oacute;n de recursos humanos, incluidos los sistemas del Registro Central de Personal.";
 answers[12] = choices[12][2];
 units[12] = "26";
 comments[12] = "Id Pregunta: 8. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";
 preguntaids[12] = 8


//  Id pregunta: 9 Año de creación de pregunta: 2016
 questions[13]= "14)  Con respecto a los entornos de integraci&oacute;n continua, indique cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[13]= new Array();
 choices[13][0] = "Jenkins no dispone de la funcionalidad de extenderse mediante plugins.";
 choices[13][1] = "SonarQube utiliza herramientas de an&aacute;lisis est&aacute;tico de c&oacute;digo que permiten obtener m&eacute;tricas para mejorar la calidad del c&oacute;digo.";
 choices[13][2] = "El fichero POM empleado en Maven no siempre es un fichero XML.";
 choices[13][3] = "Jenkins es un software de integraci&oacute;n continua bajo licencia Oracle.";
 answers[13] = choices[13][1];
 units[13] = "95";
 comments[13] = "Id Pregunta: 9. AGE A1 2015";
 preguntaids[13] = 9


//  Id pregunta: 758 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Cu&aacute;l de los siguientes no es uno de los pilares en que se basa la Agenda Digital Europea?";
 choices[14]= new Array();
 choices[14][0] = "Promover un acceso a internet r&aacute;pido y ultrarr&aacute;pido para todos";
 choices[14][1] = "Implantar el mercado general europeo";
 choices[14][2] = "Fomentar la alfabetizaci&oacute;n, la capacitaci&oacute;n y la inclusi&oacute;n digitales";
 choices[14][3] = "Consolidar la confianza y la seguridad en l&iacute;nea";
 answers[14] = choices[14][1];
 units[14] = "19";
 comments[14] = "Id Pregunta: 758. Agenda Digital Europea";
 preguntaids[14] = 758


//  Id pregunta: 563 Año de creación de pregunta: 2016
 questions[15]= "16)  El plan nacional de ciudades inteligentes...";
 choices[15]= new Array();
 choices[15][0] = "Es una apuesta liderada por la Federaci&oacute;n Espa&ntilde;ola de Municipios y Provincias";
 choices[15][1] = "Es una apuesta del ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[15][2] = "Es una apuesta liderada por una gran asociaci&oacute;n de empresas tecnol&oacute;gicas nacionales";
 choices[15][3] = "No existe";
 answers[15] = choices[15][1];
 units[15] = "19";
 comments[15] = "Id Pregunta: 563. Ciudades Inteligentes";
 preguntaids[15] = 563


//  Id pregunta: 695 Año de creación de pregunta: 2016
 questions[16]= "17)  Se&ntilde;ale de las siguientes la que NO corresponde a una herramienta de integraci&oacute;n continua:";
 choices[16]= new Array();
 choices[16][0] = "Jenkins";
 choices[16][1] = "Hudson";
 choices[16][2] = "SonarQube";
 choices[16][3] = "Todas lo son";
 answers[16] = choices[16][3];
 units[16] = "92";
 comments[16] = "Id Pregunta: 695. INTEGRACION CONTINUA";
 preguntaids[16] = 695


//  Id pregunta: 733 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Cu&aacute;l de las siguientes reglas se corresponde a las reglas de la metodolog&iacute;a Kanban?:";
 choices[17]= new Array();
 choices[17][0] = "Visualizar el trabajo o el flujo de trabajo";
 choices[17][1] = "Determinar el l&iacute;mite de trabajo en curso (Work in progress)";
 choices[17][2] = "Medir el tiempo en completar una tarea (Lead time)";
 choices[17][3] = "Todas las anteriores son reglas correspondientes a la metodolog&iacute;a Kanban.";
 answers[17] = choices[17][3];
 units[17] = "34, 84";
 comments[17] = "Id Pregunta: 733. Metodologias &aacute;giles";
 preguntaids[17] = 733


//  Id pregunta: 38 Año de creación de pregunta: 2016
 questions[18]= "19)  LAMP es el acr&oacute;nimo usado para describir un sistema de infraestructura de internet aplicable a la pila:";
 choices[18]= new Array();
 choices[18][0] = "Linux, Ant, MySQL/MariaDB y PJava";
 choices[18][1] = "Linux, Apache, Microsoft SQLServer y Perl, PHP, o Python";
 choices[18][2] = "Linux, Ant, MongoDB y Perl, PHP, o Python";
 choices[18][3] = "Linux, Apache, MySQL/MariaDB y Perl, PHP, o Python";
 answers[18] = choices[18][3];
 units[18] = "62";
 comments[18] = "Id Pregunta: 38. AGE A1 2015";
 preguntaids[18] = 38


//  Id pregunta: 77 Año de creación de pregunta: 2016
 questions[19]= "20)  Respecto al uso de servicios de firma de documentos electr&oacute;nicos mediante certificados electr&oacute;nicos centralizados, mediante el sistema Cl@ve, indique cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[19]= new Array();
 choices[19][0] = "Para poder acceder al servicio, el usuario deber&aacute; solicitar previa y expresamente la emisi&oacute;n de los certificados electr&oacute;nicos centralizados correspondientes.";
 choices[19][1] = "Los certificados electr&oacute;nicos centralizados ser&aacute;n emitidos con las mismas garant&iacute;as de identificaci&oacute;n del DNI electr&oacute;nico del ciudadano.";
 choices[19][2] = "El acceso al servicio requiere en todo caso que el usuario se haya registrado en Cl@ve y haya activado su Cl@ve permanente.";
 choices[19][3] = "En el momento de la identificaci&oacute;n, se requerir&aacute; la utilizaci&oacute;n de una verificaci&oacute;n de seguridad adicional mediante un c&oacute;digo de un solo uso y validez limitada en el tiempo que se enviar&aacute; al tel&eacute;fono m&oacute;vil del usuario registrado.";
 answers[19] = choices[19][2];
 units[19] = "47";
 comments[19] = "Id Pregunta: 77. AGE A1 2015";
 preguntaids[19] = 77


//  Id pregunta: 258 Año de creación de pregunta: 2016
 questions[20]= "21)  El Art&iacute;culo 137 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Estado se organiza territorialmente en:";
 choices[20]= new Array();
 choices[20][0] = "Municipios, provincias y CCAA.";
 choices[20][1] = "En 17 CCAA m&aacute;s Ceuta y Melilla.";
 choices[20][2] = "En CCAA, 50 provincias y municipios.";
 choices[20][3] = "En municipios, en provincias, entidades locales menores y CCAA.";
 answers[20] = choices[20][2];
 units[20] = "1";
 comments[20] = "Id Pregunta: 258. CONSTITUCION1978";
 preguntaids[20] = 258


//  Id pregunta: 553 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Cu&aacute;l es el &oacute;rgano t&eacute;cnico de cooperaci&oacute;n de la Administraci&oacute;n General del Estado, de las Administraciones de las Comunidades Aut&oacute;nomas y de las Entidades Locales en materia de administraci&oacute;n electr&oacute;nica definido en la ley 40/2015 de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[21]= new Array();
 choices[21][0] = "La Conferencia Sectorial de Telecomunicaciones y Sociedad de la Informaci&oacute;n";
 choices[21][1] = "El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica";
 choices[21][2] = "La Comisi&oacute;n Sectorial de administraci&oacute;n electr&oacute;nica";
 choices[21][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[21] = choices[21][2];
 units[21] = "26";
 comments[21] = "Id Pregunta: 553. Gobernanza TIC";
 preguntaids[21] = 553


//  Id pregunta: 698 Año de creación de pregunta: 2016
 questions[22]= "23)  Se&ntilde;ale el que corresponde a un principio de integraci&oacute;n continua:";
 choices[22]= new Array();
 choices[22][0] = "Migraci&oacute;n manual y controlada a cada entorno de desarrollo";
 choices[22][1] = "Mantener un repositorio de c&oacute;digo.";
 choices[22][2] = "Reutilizaci&oacute;n de interfaces de usuario.";
 choices[22][3] = "Todos corresponden a principios de integraci&oacute;n continua.";
 answers[22] = choices[22][1];
 units[22] = "92";
 comments[22] = "Id Pregunta: 698. INTEGRACION CONTINUA";
 preguntaids[22] = 698


//  Id pregunta: 82 Año de creación de pregunta: 2016
 questions[23]= "24)  La titularidad de los derechos de explotaci&oacute;n de un programa de ordenador por una persona jur&iacute;dica expirar&aacute;:";
 choices[23]= new Array();
 choices[23][0] = "A los setenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[23][1] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita, o al de su creaci&oacute;n si no se hubiera divulgado.";
 choices[23][2] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[23][3] = "A los setenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita o al de su creaci&oacute;n si no se hubiera divulgado.";
 answers[23] = choices[23][3];
 units[23] = "41";
 comments[23] = "Id Pregunta: 82. AGE A1 2015";
 preguntaids[23] = 82


//  Id pregunta: 792 Año de creación de pregunta: 2016
 questions[24]= "25)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Subdelegados del Gobierno en las provincias los cuales tendr&aacute;n nivel de:";
 choices[24]= new Array();
 choices[24][0] = "Subsecretario";
 choices[24][1] = "Subdirector general";
 choices[24][2] = "Secretario de Estado";
 choices[24][3] = "ninguna es correcta";
 answers[24] = choices[24][1];
 units[24] = "4, 7, 8, 9";
 comments[24] = "Id Pregunta: 792. Ley 40/2015";
 preguntaids[24] = 792


//  Id pregunta: 549 Año de creación de pregunta: 2016
 questions[25]= "26)  La gobernanza TIC incluye, entre otros, los siguientes aspectos:";
 choices[25]= new Array();
 choices[25][0] = "Integrar la estrategia TIC con la de negocio";
 choices[25][1] = "Adoptar e implantar un marco de control de las TIC";
 choices[25][2] = "Proporcionar las estructuras organizativas encargadas de implantar la estrategia TIC";
 choices[25][3] = "Todas las anteriores";
 answers[25] = choices[25][3];
 units[25] = "26";
 comments[25] = "Id Pregunta: 549. Gobernanza TIC";
 preguntaids[25] = 549


//  Id pregunta: 255 Año de creación de pregunta: 2016
 questions[26]= "27)  La soberan&iacute;a nacional reside en:";
 choices[26]= new Array();
 choices[26][0] = "el Parlamento nacional.";
 choices[26][1] = "el Parlamento auton&oacute;mico o Asamblea.";
 choices[26][2] = "el pueblo espa&ntilde;ol.";
 choices[26][3] = "el Congreso y el Senado.";
 answers[26] = choices[26][3];
 units[26] = "1";
 comments[26] = "Id Pregunta: 255. CONSTITUCION1978";
 preguntaids[26] = 255


//  Id pregunta: 777 Año de creación de pregunta: 2016
 questions[27]= "28)  Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos:";
 choices[27]= new Array();
 choices[27][0] = "las unidades administrativas a las que se les atribuyan funciones que no tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo";
 choices[27][1] = "las unidades administrativas a las que se les atribuyan funciones que no tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo";
 choices[27][2] = "las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo";
 choices[27][3] = "las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo";
 answers[27] = choices[27][3];
 units[27] = "4, 7, 8, 9";
 comments[27] = "Id Pregunta: 777. Ley 40/2015";
 preguntaids[27] = 777


//  Id pregunta: 750 Año de creación de pregunta: 2016
 questions[28]= "29)  Son rasgos fundamentales del sistema burocr&aacute;tico:";
 choices[28]= new Array();
 choices[28][0] = "La racionalidad en la divisi&oacute;n del trabajo";
 choices[28][1] = "La eficiencia en el uso de los recursos p&uacute;blicos";
 choices[28][2] = "La competencia t&eacute;cnica y la meritocracia";
 choices[28][3] = "a) y c) son rasgos fundamentales del sistema burocr&aacute;tico";
 answers[28] = choices[28][3];
 units[28] = "20";
 comments[28] = "Id Pregunta: 750. Direcci&oacute;n p&uacute;blica";
 preguntaids[28] = 750


//  Id pregunta: 264 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Cu&aacute;ntos vocales componen el Consejo General del Poder Judicial?";
 choices[29]= new Array();
 choices[29][0] = "Veinte.";
 choices[29][1] = "Quince.";
 choices[29][2] = "Diez.";
 choices[29][3] = "Doce.";
 answers[29] = choices[29][1];
 units[29] = "1";
 comments[29] = "Id Pregunta: 264. CONSTITUCION1978";
 preguntaids[29] = 264


//  Id pregunta: 775 Año de creación de pregunta: 2016
 questions[30]= "31)  Las Administraciones P&uacute;blicas que, en el ejercicio de sus respectivas competencias, establezcan medidas que limiten el ejercicio de derechos individuales o colectivos o exijan el cumplimiento de requisitos para el desarrollo de una actividad, deber&aacute;n (se&ntilde;ala la incorrecta):";
 choices[30]= new Array();
 choices[30][0] = "aplicar el principio de proporcionalidad y elegir la medida menos restrictiva";
 choices[30][1] = "motivar su necesidad para la protecci&oacute;n del inter&eacute;s p&uacute;blico";
 choices[30][2] = "justificar su adecuaci&oacute;n para lograr los fines que se persiguen, evitando en la medida de lo posible que se produzcan diferencias de trato discriminatorias";
 choices[30][3] = "evaluar peri&oacute;dicamente los efectos y resultados obtenidos";
 answers[30] = choices[30][2];
 units[30] = "4, 7, 8, 9";
 comments[30] = "Id Pregunta: 775. Ley 40/2015";
 preguntaids[30] = 775


//  Id pregunta: 429 Año de creación de pregunta: 2016
 questions[31]= "32)  Para la prevenci&oacute;n del acoso sexual y del acoso por raz&oacute;n de sexo, las Administraciones P&uacute;blicas negociar&aacute;n con la representaci&oacute;n legal de las trabajadoras y trabajadores, un protocolo de actuaci&oacute;n que comprender&aacute;:";
 choices[31]= new Array();
 choices[31][0] = "La identificaci&oacute;n de las personas responsables de atender a quienes formulen una queja o denuncia.";
 choices[31][1] = "El tratamiento p&uacute;blico de las denuncias de hechos que pudieran ser constitutivos de acoso sexual o de acoso por raz&oacute;n de sexo.";
 choices[31][2] = "Ambas son correctas.";
 choices[31][3] = "Ambas son incorrectas.";
 answers[31] = choices[31][0];
 units[31] = "14";
 comments[31] = "Id Pregunta: 429. POLITICAS DE IGUALDAD";
 preguntaids[31] = 429


//  Id pregunta: 559 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Qu&eacute; ministerios han liderado la elaboraci&oacute;n de la Agenda Digital para Espa&ntilde;a?";
 choices[32]= new Array();
 choices[32][0] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica ";
 choices[32][1] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Econom&iacute;a, Industria y Competitividad";
 choices[32][2] = "El Ministerio de Econom&iacute;a, Industria y Competitividad y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[32][3] = "Ninguno de ellos, puesto que ha venido elaborada desde los organismos de la UE";
 answers[32] = choices[32][0];
 units[32] = "19";
 comments[32] = "Id Pregunta: 559. Agenda Digital";
 preguntaids[32] = 559


//  Id pregunta: 96 Año de creación de pregunta: 2016
 questions[33]= "34)  Indique cu&aacute;l de las siguientes soluciones tecnol&oacute;gicas NO se utiliza para virtualizaci&oacute;n:";
 choices[33]= new Array();
 choices[33][0] = "VMware ESX";
 choices[33][1] = "XenServer";
 choices[33][2] = "Alfresco";
 choices[33][3] = "Microsoft Hyper-V";
 answers[33] = choices[33][2];
 units[33] = "54";
 comments[33] = "Id Pregunta: 96. AGE A1 2015";
 preguntaids[33] = 96


//  Id pregunta: 747 Año de creación de pregunta: 2016
 questions[34]= "35)  Cu&aacute;l de los siguientes NO es uno de los programas del marco general para la mejora de la calidad en la Administraci&oacute;n General del Estado:";
 choices[34]= new Array();
 choices[34][0] = "Programa de an&aacute;lisis de la demanda y de evaluaci&oacute;n de la satisfacci&oacute;n de los usuarios de los servicios.";
 choices[34][1] = "Programa de cartas de servicios";
 choices[34][2] = "Programa para la mejora continua de las organizaciones.";
 choices[34][3] = "Programa de evaluaci&oacute;n de la calidad de las organizaciones.";
 answers[34] = choices[34][2];
 units[34] = "19";
 comments[34] = "Id Pregunta: 747. Direcci&oacute;n p&uacute;blica";
 preguntaids[34] = 747


//  Id pregunta: 383 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre mujeres y hombres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[35]= new Array();
 choices[35][0] = "El Consejo Nacional de la Mujer";
 choices[35][1] = "El Consejo de la Mujer";
 choices[35][2] = "El Instituto de la Mujer";
 choices[35][3] = "El Consejo de Participaci&oacute;n de la Mujer";
 answers[35] = choices[35][3];
 units[35] = "14";
 comments[35] = "Id Pregunta: 383. POLITICAS DE IGUALDAD";
 preguntaids[35] = 383


//  Id pregunta: 458 Año de creación de pregunta: 2016
 questions[36]= "37)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los escenarios presupuestarios plurianuales contendr&aacute;n la distribuci&oacute;n org&aacute;nica de los recursos disponibles y se desarrollar&aacute;n en programas plurianuales, referidos a:";
 choices[36]= new Array();
 choices[36][0] = "a) Los cuatro ejercicios siguientes.";
 choices[36][1] = "b) El ejercicio siguiente.";
 choices[36][2] = "c) Los dos ejercicios siguientes.";
 choices[36][3] = "d) Los tres ejercicios siguientes.";
 answers[36] = choices[36][3];
 units[36] = "10";
 comments[36] = "Id Pregunta: 458. PRESUPUESTOS GENERALES";
 preguntaids[36] = 458


//  Id pregunta: 293 Año de creación de pregunta: 2016
 questions[37]= "38)  Las sesiones plenarias mensuales, a las que asisten todos los diputados, se celebran en:";
 choices[37]= new Array();
 choices[37][0] = "Estrasburgo.";
 choices[37][1] = "Bruselas.";
 choices[37][2] = "Luxemburgo.";
 choices[37][3] = "Holanda.";
 answers[37] = choices[37][0];
 units[37] = "5";
 comments[37] = "Id Pregunta: 293. UNION EUROPEA";
 preguntaids[37] = 293


//  Id pregunta: 360 Año de creación de pregunta: 2016
 questions[38]= "39)  El Parlamento Europeo est&aacute; compuesto actualmente por:";
 choices[38]= new Array();
 choices[38][0] = "786 Diputados como m&aacute;ximo.";
 choices[38][1] = "600 Diputados como m&aacute;ximo.";
 choices[38][2] = "650 Diputados como m&aacute;ximo.";
 choices[38][3] = "732 Diputados como m&aacute;ximo.";
 answers[38] = choices[38][0];
 units[38] = "5";
 comments[38] = "Id Pregunta: 360. UNION EUROPEA";
 preguntaids[38] = 360


//  Id pregunta: 136 Año de creación de pregunta: 2016
 questions[39]= "40)  La Ley 15/2014, de racionalizaci&oacute;n del Sector P&uacute;blico y otras medidas de reforma administrativa, no incluye:";
 choices[39]= new Array();
 choices[39][0] = "Modificaci&oacute;n de la Ley General Presupuestaria para permitir de manera m&aacute;s eficaz el control de las cuentas corrientes en las que se sit&uacute;an fondos de Tesoro P&uacute;blico.";
 choices[39][1] = "Permiso para la reordenaci&oacute;n de organismos p&uacute;blicos con el fin de mejorar su eficiencia y reducir el gasto p&uacute;blico.";
 choices[39][2] = "Modificaci&oacute;n normativa para hacer uso de certificados electr&oacute;nicos &uacute;nicos para grupos o colectivos de personas f&iacute;sicas.";
 choices[39][3] = "Implantaci&oacute;n del BOE como Tabl&oacute;n Edictal &Uacute;nico para la realizaci&oacute;n de notificaciones administrativas.";
 answers[39] = choices[39][2];
 units[39] = "12";
 comments[39] = "Id Pregunta: 136. Leyes modelo econ&oacute;mico";
 preguntaids[39] = 136


//  Id pregunta: 260 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se recoge el principio de unidad jurisdiccional?:";
 choices[40]= new Array();
 choices[40][0] = "117.5";
 choices[40][1] = "117.1";
 choices[40][2] = "116";
 choices[40][3] = "15";
 answers[40] = choices[40][0];
 units[40] = "1";
 comments[40] = "Id Pregunta: 260. CONSTITUCION1978";
 preguntaids[40] = 260


//  Id pregunta: 737 Año de creación de pregunta: 2016
 questions[41]= "42)  Son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[41]= new Array();
 choices[41][0] = "Tranparencia, Innovaci&oacute;n, Unidad y visi&oacute;n integral y Orientaci&oacute;n al usuario del servicio";
 choices[41][1] = "Tranparencia, Colaboraci&oacute;n y alianzas, Orientaci&oacute;n al usuario del servicio y Reutilizaci&oacute;n";
 choices[41][2] = "Reutilizaci&oacute;n, Seguridad, Orientaci&oacute;n al usuario del servicio y Transparencia";
 choices[41][3] = "Ninguna de las anteriores";
 answers[41] = choices[41][0];
 units[41] = "28";
 comments[41] = "Id Pregunta: 737. Estrategia TIC";
 preguntaids[41] = 737


//  Id pregunta: 52 Año de creación de pregunta: 2016
 questions[42]= "43)  Las normas ISO que cubren los procesos de especificaci&oacute;n de requisitos de calidad del software y evaluaci&oacute;n de la calidad del software corresponden a la serie:";
 choices[42]= new Array();
 choices[42][0] = "ISO/IEC 25000";
 choices[42][1] = "ISO/IEC 27000";
 choices[42][2] = "ISO 9000";
 choices[42][3] = "ISO 9001";
 answers[42] = choices[42][0];
 units[42] = "93";
 comments[42] = "Id Pregunta: 52. AGE A1 2015";
 preguntaids[42] = 52


//  Id pregunta: 10 Año de creación de pregunta: 2016
 questions[43]= "44)  El servicio mediante el cual se localiza un terminal m&oacute;vil dentro de alguna de las N c&eacute;lulas gestionadas coordinadamente en una zona de cobertura se denomina:";
 choices[43]= new Array();
 choices[43][0] = "Paging";
 choices[43][1] = "Roaming";
 choices[43][2] = "Handover";
 choices[43][3] = "Trunking";
 answers[43] = choices[43][0];
 units[43] = "117";
 comments[43] = "Id Pregunta: 10. AGE A1 2015";
 preguntaids[43] = 10


//  Id pregunta: 623 Año de creación de pregunta: 2016
 questions[44]= "45)  Seg&uacute;n el paradigma de Orientaci&oacute;n a Objetos, la herencia posibilita que:";
 choices[44]= new Array();
 choices[44][0] = "Cualquier cambio en los datos y operaciones contenidas dentro de una superclase es heredado inmediatamente por todas las subclases que se derivan de la superclase.";
 choices[44][1] = "Cualquier cambio en las operaciones y datos de la superclase no se refleja en todas las subclases.";
 choices[44][2] = "Cualquier cambio en una de las subclases que se heredan de la superclase se refleja en sus clases hermanas.";
 choices[44][3] = "En el paradigma de Orientaci&oacute;n a Objetos no existe la herencia.";
 answers[44] = choices[44][0];
 units[44] = "89";
 comments[44] = "Id Pregunta: 623. Junta de Extremadura A1 2015";
 preguntaids[44] = 623


//  Id pregunta: 731 Año de creación de pregunta: 2016
 questions[45]= "46)  Indique cual de los siguientes no forma parte del vocabulario de scrum";
 choices[45]= new Array();
 choices[45][0] = "Burn-up chart";
 choices[45][1] = "Arquitectural Skype";
 choices[45][2] = "Burn-down chart";
 choices[45][3] = "Definition of done";
 answers[45] = choices[45][1];
 units[45] = "34, 84";
 comments[45] = "Id Pregunta: 731. Metodologias &aacute;giles";
 preguntaids[45] = 731


//  Id pregunta: 651 Año de creación de pregunta: 2016
 questions[46]= "47)  Los objetivos que persegu&iacute;a Codd con el modelo relacional, se pueden resumir en:";
 choices[46]= new Array();
 choices[46][0] = "Independencia f&iacute;sica, independencia l&oacute;gica, flexibilidad, uniformidad y sencillez.";
 choices[46][1] = "Independencia f&iacute;sica, independencia l&oacute;gica y uniformidad.";
 choices[46][2] = "Independencia f&iacute;sica, flexibilidad, uniformidad y sencillez.";
 choices[46][3] = "Independencia f&iacute;sica, independencia l&oacute;gica, independencia conceptual, flexibilidad, uniformidad y sencillez.";
 answers[46] = choices[46][0];
 units[46] = "60";
 comments[46] = "Id Pregunta: 651. Junta de Extremadura A1 2015";
 preguntaids[46] = 651


//  Id pregunta: 49 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;Qu&eacute; facilita un ORM?";
 choices[47]= new Array();
 choices[47][0] = "Conversi&oacute;n de objetos a tablas relacionales";
 choices[47][1] = "Conversi&oacute;n de objetos a documentos";
 choices[47][2] = "Conversi&oacute;n de tipos de driver JDBC";
 choices[47][3] = "Conversi&oacute;n de ADO.NET a OLE DB";
 answers[47] = choices[47][0];
 units[47] = "62";
 comments[47] = "Id Pregunta: 49. AGE A1 2015";
 preguntaids[47] = 49


//  Id pregunta: 108 Año de creación de pregunta: 2016
 questions[48]= "49)  Son proyectos de Apache relacionados con Big Data:";
 choices[48]= new Array();
 choices[48][0] = "Hadoop";
 choices[48][1] = "Spark";
 choices[48][2] = "A) y B)";
 choices[48][3] = "Niguno de los anteriores";
 answers[48] = choices[48][2];
 units[48] = "73";
 comments[48] = "Id Pregunta: 108. ";
 preguntaids[48] = 108


//  Id pregunta: 461 Año de creación de pregunta: 2016
 questions[49]= "50)  Seg&uacute;n el art&iacute;culo 41 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, las operaciones financieras que se distinguen son:";
 choices[49]= new Array();
 choices[49][0] = "Enajenaci&oacute;n de inversiones reales y transferencias de capital.";
 choices[49][1] = "Pasivos financieros y transferencias de capital.";
 choices[49][2] = "Activos financieros y pasivos financieros.";
 choices[49][3] = "Activos financieros y enajenaci&oacute;n de inversiones reales.";
 answers[49] = choices[49][2];
 units[49] = "10";
 comments[49] = "Id Pregunta: 461. PRESUPUESTOS GENERALES";
 preguntaids[49] = 461


//  Id pregunta: 734 Año de creación de pregunta: 2016
 questions[50]= "51)  Indique la opci&oacute;n correcta en relaci&oacute;n con la VISI&Oacute;N de la Estrategia TIC";
 choices[50]= new Array();
 choices[50][0] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser electr&oacute;nica.";
 choices[50][1] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser digital.";
 choices[50][2] = "Para el a&ntilde;o 2020 ya no existir&aacute; ning&uacute;n procedimiento en soporte papel.";
 choices[50][3] = "En el a&ntilde;o 2020 los funcionarios realizar&aacute;n todas sus tareas con ordenador.";
 answers[50] = choices[50][1];
 units[50] = "28";
 comments[50] = "Id Pregunta: 734. Estrategia TIC";
 preguntaids[50] = 734


//  Id pregunta: 843 Año de creación de pregunta: 2016
 questions[51]= "52)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[51]= new Array();
 choices[51][0] = "De cada sesi&oacute;n que celebre el &oacute;rgano colegiado se levantar&aacute; acta por el Secretario, que especificar&aacute; necesariamente los asistentes, el orden del d&iacute;a de la reuni&oacute;n, las circunstancias del lugar y tiempo en que se ha celebrado, los puntos principales de las deliberaciones, as&iacute; como el contenido de los acuerdos adoptados.";
 choices[51][1] = "Podr&aacute;n grabarse las sesiones que celebre el &oacute;rgano colegiado. El fichero resultante de la grabaci&oacute;n, junto con la certificaci&oacute;n expedida por el Secretario de la autenticidad e integridad del mismo, y cuantos documentos en soporte electr&oacute;nico se utilizasen como documentos de la sesi&oacute;n, podr&aacute;n acompa&ntilde;ar al acta de las sesiones, sin necesidad de hacer constar en ella los puntos principales de las deliberaciones.";
 choices[51][2] = "El acta de cada sesi&oacute;n podr&aacute; aprobarse en la misma reuni&oacute;n o en una reuni&oacute;n posterior. El Secretario elaborar&aacute; el acta con el visto bueno del Presidente y lo remitir&aacute; a trav&eacute;s de medios electr&oacute;nicos, a los miembros del &oacute;rgano colegiado, quienes podr&aacute;n manifestar por los mismos medios su conformidad o reparos al texto, a efectos de su aprobaci&oacute;n, consider&aacute;ndose, en caso afirmativo, aprobada en la misma reuni&oacute;n.";
 choices[51][3] = "Cuando se hubiese optado por la grabaci&oacute;n de las sesiones celebradas o por la utilizaci&oacute;n de documentos en soporte electr&oacute;nico, deber&aacute;n conservarse de forma que se garantice la integridad y autenticidad de los ficheros electr&oacute;nicos correspondientes y el acceso a los mismos por parte de los miembros del &oacute;rgano colegiado.";
 answers[51] = choices[51][2];
 units[51] = "4, 7, 8, 9";
 comments[51] = "Id Pregunta: 843. Ley 40/2015";
 preguntaids[51] = 843


//  Id pregunta: 413 Año de creación de pregunta: 2016
 questions[52]= "53)  Gozar&aacute;n de los derecho derivados del principio de igualdad de trato y de la prohibici&oacute;n de discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[52]= new Array();
 choices[52][0] = "La mujeres.";
 choices[52][1] = "Lo hombres.";
 choices[52][2] = "Todas las personas.";
 choices[52][3] = "Las mujeres y ni&ntilde;os menores de 16 a&ntilde;os.";
 answers[52] = choices[52][2];
 units[52] = "14";
 comments[52] = "Id Pregunta: 413. POLITICAS DE IGUALDAD";
 preguntaids[52] = 413


//  Id pregunta: 239 Año de creación de pregunta: 2016
 questions[53]= "54)  Respecto de las relaciones que constitucionalmente se regulan entre los miembros del Gobierno y las Cortes Generales:";
 choices[53]= new Array();
 choices[53][0] = "La comparecencia de los miembros del Gobierno ante las C&aacute;maras y sus Comisiones puede extenderse tambi&eacute;n a los funcionarios de sus Departamentos.";
 choices[53][1] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo solicitasen las propias C&aacute;maras o sus Comisiones.";
 choices[53][2] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo deciden los miembros del Gobierno.";
 choices[53][3] = "Los funcionarios no comparecer&aacute;n en ning&uacute;n caso.";
 answers[53] = choices[53][0];
 units[53] = "1";
 comments[53] = "Id Pregunta: 239. CONSTITUCION1978";
 preguntaids[53] = 239


//  Id pregunta: 490 Año de creación de pregunta: 2016
 questions[54]= "55)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, autorizar las transferencias entre distintas secciones presupuestarias como consecuencia de reorganizaciones administrativas, es una competencia de:";
 choices[54]= new Array();
 choices[54][0] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[54][1] = "El Gobierno.";
 choices[54][2] = "El Presidente del Gobierno.";
 choices[54][3] = "El Consejo de Ministros.";
 answers[54] = choices[54][1];
 units[54] = "10";
 comments[54] = "Id Pregunta: 490. PRESUPUESTOS GENERALES";
 preguntaids[54] = 490


//  Id pregunta: 12 Año de creación de pregunta: 2016
 questions[55]= "56)  Indique cu&aacute;l de las siguientes proposiciones es cierta:";
 choices[55]= new Array();
 choices[55][0] = "AngularJS es un framework de JavaScript de c&oacute;digo abierto que sigue el patr&oacute;n de dise&ntilde;o MVC.";
 choices[55][1] = "PrimeFaces y RichFaces son librer&iacute;as que extienden el framework .NET de Microsoft.";
 choices[55][2] = "PrimeFaces es una extensi&oacute;n de AngularJS que permite la integraci&oacute;n de componentes RichFaces.";
 choices[55][3] = "El framework Spring es compatible con el uso delORM Hibernate, pero es incompatible con el uso de Java Server Faces en la capa de presentaci&oacute;n.";
 answers[55] = choices[55][0];
 units[55] = "62";
 comments[55] = "Id Pregunta: 12. AGE A1 2015";
 preguntaids[55] = 12


//  Id pregunta: 771 Año de creación de pregunta: 2016
 questions[56]= "57)  Las Administraciones P&uacute;blicas deber&aacute;n respetar en su actuaci&oacute;n y relaciones los siguientes principios:";
 choices[56]= new Array();
 choices[56][0] = "simplicidad, claridad y proximidad a los ciudadanos";
 choices[56][1] = "participaci&oacute;n, objetividad y transparencia de la actuaci&oacute;n administrativa";
 choices[56][2] = "responsabilidad por la gesti&oacute;n p&uacute;blica";
 choices[56][3] = "todas son correctas";
 answers[56] = choices[56][3];
 units[56] = "4, 7, 8, 9";
 comments[56] = "Id Pregunta: 771. Ley 40/2015";
 preguntaids[56] = 771


//  Id pregunta: 331 Año de creación de pregunta: 2016
 questions[57]= "58)  Tras el tratado de Niza, &iquest;cu&aacute;ntos eurodiputados son elegidos en el Estado espa&ntilde;ol?:";
 choices[57]= new Array();
 choices[57][0] = "90";
 choices[57][1] = "50";
 choices[57][2] = "64";
 choices[57][3] = "60";
 answers[57] = choices[57][1];
 units[57] = "5";
 comments[57] = "Id Pregunta: 331. UNION EUROPEA";
 preguntaids[57] = 331


//  Id pregunta: 50 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas del DNI electr&oacute;nico es exclusiva del DNIe 3.0?";
 choices[58]= new Array();
 choices[58][0] = "Cumple la norma ISO 7816 para tarjetas inteligentes.";
 choices[58][1] = "Emplea la tecnolog&iacute;a inal&aacute;mbrica NFC.";
 choices[58][2] = "Contiene certificados de componente, autenticaci&oacute;n y firma.";
 choices[58][3] = "Sus certificados cumplen la norma X509 v3.";
 answers[58] = choices[58][1];
 units[58] = "78";
 comments[58] = "Id Pregunta: 50. AGE A1 2015";
 preguntaids[58] = 50


//  Id pregunta: 294 Año de creación de pregunta: 2016
 questions[59]= "60)  Indique a qui&eacute;n corresponde la funci&oacute;n de promover el inter&eacute;s general de la Uni&oacute;n Europea y tomar las iniciativas adecuadas con este fin:";
 choices[59]= new Array();
 choices[59][0] = "Al Consejo Europeo.";
 choices[59][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[59][2] = "A la Comisi&oacute;n Europea.";
 choices[59][3] = "Al Parlamento Europeo.";
 answers[59] = choices[59][2];
 units[59] = "5";
 comments[59] = "Id Pregunta: 294. UNION EUROPEA";
 preguntaids[59] = 294


//  Id pregunta: 481 Año de creación de pregunta: 2016
 questions[60]= "61)  Conforme a Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el Presupuesto del Estado, los cr&eacute;ditos destinados a atenciones protocolarias y representativas se especificar&aacute;n:";
 choices[60]= new Array();
 choices[60][0] = "A nivel de art&iacute;culo.";
 choices[60][1] = "A nivel de cap&iacute;tulo.";
 choices[60][2] = "Al nivel que corresponda conforme a su concreta clasificaci&oacute;n econ&oacute;mica.";
 choices[60][3] = "A nivel de concepto.";
 answers[60] = choices[60][2];
 units[60] = "10";
 comments[60] = "Id Pregunta: 481. PRESUPUESTOS GENERALES";
 preguntaids[60] = 481


//  Id pregunta: 510 Año de creación de pregunta: 2016
 questions[61]= "62)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, se dict&oacute; en desarrollo de lo indicado en:";
 choices[61]= new Array();
 choices[61][0] = "El art&iacute;culo 131 de la Constituci&oacute;n que establece que el Estado, mediante ley, podr&aacute; planificar la actividad econ&oacute;mica general para atender a las necesidades colectivas, equilibrar y armonizar el desarrollo regional y sectorial y estimular el crecimiento de la renta y de la riqueza y su m&aacute;s justa distribuci&oacute;n.";
 choices[61][1] = "El art&iacute;culo 134.1 de la Constituci&oacute;n que establece que corresponde al Gobierno la elaboraci&oacute;n de los Presupuestos Generales del Estado y a las Cortes Generales, su examen, enmienda y aprobaci&oacute;n.";
 choices[61][2] = "La Disposici&oacute;n Adicional &Uacute;nica de la Reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, de 27 de septiembre de 2011 .";
 choices[61][3] = "El art&iacute;culo 135.2 de la Constituci&oacute;n que establec&iacute;a que los cr&eacute;ditos para satisfacer el pago de intereses y capital de la Deuda P&uacute;blica del Estado se entender&aacute;n siempre incluidos en el estado de gastos de los presupuestos y no podr&aacute;n ser objeto de enmienda o modificaci&oacute;n, mientras se ajusten a las condiciones de la ley de emisi&oacute;n.";
 answers[61] = choices[61][3];
 units[61] = "10";
 comments[61] = "Id Pregunta: 510. PRESUPUESTOS GENERALES";
 preguntaids[61] = 510


//  Id pregunta: 162 Año de creación de pregunta: 2016
 questions[62]= "63)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones";
 choices[62]= new Array();
 choices[62][0] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[62][1] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro de las setenta y dos horas contadas a partir de las 8:00 horas del d&iacute;a laborable siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[62][2] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 00:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 choices[62][3] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 24 horas contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 answers[62] = choices[62][0];
 units[62] = "19";
 comments[62] = "Id Pregunta: 162. La respuesta B es la antigua redacci&oacute;n";
 preguntaids[62] = 162


//  Id pregunta: 329 Año de creación de pregunta: 2016
 questions[63]= "64)  Si el Consejo en alg&uacute;n acuerdo necesita de mayor&iacute;a cualificada se produce:";
 choices[63]= new Array();
 choices[63][0] = "Acuerdos cualificados.";
 choices[63][1] = "Acuerdos ponderados.";
 choices[63][2] = "Valoraci&oacute;n de los votos.";
 choices[63][3] = "Ponderaci&oacute;n de los votos.";
 answers[63] = choices[63][3];
 units[63] = "5";
 comments[63] = "Id Pregunta: 329. UNION EUROPEA";
 preguntaids[63] = 329


//  Id pregunta: 687 Año de creación de pregunta: 2016
 questions[64]= "65)  Se&ntilde;ale el plazo en que deben ser auditados los prestadores cualificados de servicios de confianza";
 choices[64]= new Array();
 choices[64][0] = "Al menos cada 12 meses";
 choices[64][1] = "El Reglamento no trata la supervisi&oacute;n de los prestadores cualificados de servicios de confianza, dejando tal cuesti&oacute;n a la regulaci&oacute;n nacional de cada Estado miembro";
 choices[64][2] = "Al menos cada 18 meses";
 choices[64][3] = "Al menos cada 24 meses";
 answers[64] = choices[64][3];
 units[64] = "77";
 comments[64] = "Id Pregunta: 687. Art&iacute;culo 20 del Reglamento 910/2014";
 preguntaids[64] = 687


//  Id pregunta: 275 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Cu&aacute;l NO es una funci&oacute;n de la oficina de transparencia y acceso a la informaci&oacute;n?";
 choices[65]= new Array();
 choices[65][0] = "Actuar como unidad de informaci&oacute;n del Ministerio de la Presidencia, en los t&eacute;rminos previstos en el art&iacute;culo 21 de la Ley 19/2013, de 9 de diciembre.";
 choices[65][1] = "La atenci&oacute;n a los ciudadanos sobre el modo de acceso a los servicios y procedimientos en materias propias del departamento.";
 choices[65][2] = "Actuar como observatorio de la transparencia, acceso a la informaci&oacute;n y buen Gobierno.";
 choices[65][3] = "La tramitaci&oacute;n de las quejas y sugerencias que pudieran derivarse del funcionamiento de los servicios de competencia del departamento.";
 answers[65] = choices[65][2];
 units[65] = "22";
 comments[65] = "Id Pregunta: 275. LEY DE TRANSPARENCIA";
 preguntaids[65] = 275


//  Id pregunta: 823 Año de creación de pregunta: 2016
 questions[66]= "67)  En las Comunidades Aut&oacute;nomas uniprovinciales en las que no exista Subdelegado la suplencia corresponder&aacute; a:";
 choices[66]= new Array();
 choices[66][0] = "el Secretario General";
 choices[66][1] = "el Subdirector General";
 choices[66][2] = "el Secretario de Estado";
 choices[66][3] = "ninguna es correcta";
 answers[66] = choices[66][0];
 units[66] = "4, 7, 8, 9";
 comments[66] = "Id Pregunta: 823. Ley 40/2015";
 preguntaids[66] = 823


//  Id pregunta: 422 Año de creación de pregunta: 2016
 questions[67]= "68)  Los distintivos para reconocer a aquellas empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato, lo crear&aacute;:";
 choices[67]= new Array();
 choices[67][0] = "El Ministerio de Igualdad.";
 choices[67][1] = "El Ministerio de Empleo y Seguridad Social.";
 choices[67][2] = "Ambas son correctas.";
 choices[67][3] = "La Consejer&iacute;a de Igualdad de cada CCAA.";
 answers[67] = choices[67][1];
 units[67] = "14";
 comments[67] = "Id Pregunta: 422. POLITICAS DE IGUALDAD";
 preguntaids[67] = 422


//  Id pregunta: 605 Año de creación de pregunta: 2016
 questions[68]= "69)  Seg&uacute;n ITILv3 , el objetivo principal del Dise&ntilde;o del Servicio es:";
 choices[68]= new Array();
 choices[68][0] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno de producci&oacute;n.";
 choices[68][1] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno seguro.";
 choices[68][2] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno seguro.";
 choices[68][3] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno de producci&oacute;n.";
 answers[68] = choices[68][3];
 units[68] = "101";
 comments[68] = "Id Pregunta: 605. Junta de Extremadura A1 2015";
 preguntaids[68] = 605


//  Id pregunta: 748 Año de creación de pregunta: 2016
 questions[69]= "70)  Respecto a los contratos de colaboraci&oacute;n entre el sector p&uacute;blico y el sector privado, NO se incluyen entre las prestaciones que pueden ser objeto de estos contratos:";
 choices[69]= new Array();
 choices[69][0] = "La construcci&oacute;n, instalaci&oacute;n o transformaci&oacute;n de obras, equipos, sistemas, y productos o bienes complejos, as&iacute; como su mantenimiento, actualizaci&oacute;n o renovaci&oacute;n, su explotaci&oacute;n o su gesti&oacute;n.";
 choices[69][1] = "La gesti&oacute;n integral del mantenimiento de instalaciones para la investigaci&oacute;n.";
 choices[69][2] = "La fabricaci&oacute;n de bienes y la prestaci&oacute;n de servicios que incorporen tecnolog&iacute;a espec&iacute;ficamente desarrollada con el prop&oacute;sito de aportar soluciones m&aacute;s avanzadas y econ&oacute;micamente m&aacute;s ventajosas que las existentes en el mercado.";
 choices[69][3] = "Todas las anteriores pueden ser objeto de ese tipo de contratos.";
 answers[69] = choices[69][1];
 units[69] = "10";
 comments[69] = "Id Pregunta: 748. Direcci&oacute;n p&uacute;blica";
 preguntaids[69] = 748


//  Id pregunta: 689 Año de creación de pregunta: 2016
 questions[70]= "71)  Indique cu&aacute;l de los siguientes no es uno de los requisitos que debe cumplir una firma electr&oacute;nica avanzada seg&uacute;n el Reglamento (UE) 910/2014";
 choices[70]= new Array();
 choices[70][0] = "Estar vinculada al firmante de manera &uacute;nica";
 choices[70][1] = "Haber sido creada utilizando un dispositivo avanzado de creacio&#769;n de firmas electro&#769;nicas";
 choices[70][2] = "Haber sido creada utilizando datos de creaci&oacute;n de firma que el firmante puede utilizar, con un alto nivel de confianza, bajo su exclusivo control";
 choices[70][3] = "Estar vinculada con los datos firmados, de modo tal que cualquier modificacio&#769;n ulterior de los mismos sea detectable";
 answers[70] = choices[70][1];
 units[70] = "77";
 comments[70] = "Id Pregunta: 689. Art&iacute;culo 26 del Reglamento 910/2014";
 preguntaids[70] = 689


//  Id pregunta: 156 Año de creación de pregunta: 2016
 questions[71]= "72)  Seg&uacute;n la ley 39/2015, toda notificaci&oacute;n deber&aacute; (se&ntilde;ala la respuesta incorrecta):";
 choices[71]= new Array();
 choices[71][0] = "contener el texto &iacute;ntegro de la resoluci&oacute;n";
 choices[71][1] = "expresar los recursos que procedan, &uacute;nicamente en v&iacute;a administrativa";
 choices[71][2] = "indicar si pone fin o no a la v&iacute;a administrativa";
 choices[71][3] = "indicar el &oacute;rgano ante el que hubieran de presentarse los recursos que procedan y el plazo para interponerlos";
 answers[71] = choices[71][1];
 units[71] = "7";
 comments[71] = "Id Pregunta: 156. Ley 39/2015, Art&iacute;culo 40";
 preguntaids[71] = 156


//  Id pregunta: 391 Año de creación de pregunta: 2016
 questions[72]= "73)  El T&iacute;tulo II de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombres se denomina:";
 choices[72]= new Array();
 choices[72][0] = "El principio de igualdad y la tutela contra la discriminaci&oacute;n.";
 choices[72][1] = "Objeto y &aacute;mbito de la Ley.";
 choices[72][2] = "Pol&iacute;ticas p&uacute;blicas para la igualdad.";
 choices[72][3] = "El derecho al trabajo en igualdad de oportunidades.";
 answers[72] = choices[72][2];
 units[72] = "14";
 comments[72] = "Id Pregunta: 391. POLITICAS DE IGUALDAD";
 preguntaids[72] = 391


//  Id pregunta: 200 Año de creación de pregunta: 2016
 questions[73]= "74)  Se&ntilde;ale la afirmaci&oacute;n correcta. Corresponde al Rey:";
 choices[73]= new Array();
 choices[73][0] = "Nombrar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[73][1] = "Nombrar y separar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[73][2] = "Nombrar y separar a los miembros del Gobierno previa consulta al Presidente del Gobierno.";
 choices[73][3] = "Nombrar y separar a los miembros del Gobierno, a propuesta de su Presidente.";
 answers[73] = choices[73][3];
 units[73] = "1";
 comments[73] = "Id Pregunta: 200. CONSTITUCION1978";
 preguntaids[73] = 200


//  Id pregunta: 607 Año de creación de pregunta: 2016
 questions[74]= "75)  En ITIL v3, entre los procesos de la &ldquo;Fase del Ciclo de Vida: Dise&ntilde;o del Servicio&rdquo;, est&aacute;n:";
 choices[74]= new Array();
 choices[74][0] = "Gesti&oacute;n del Cat&aacute;logo de Servicios y Gesti&oacute;n de la Cartera de Servicios.";
 choices[74][1] = "Gesti&oacute;n de la Cartera de Servicio y Gesti&oacute;n de la Seguridad de la Informaci&oacute;n.";
 choices[74][2] = "Gesti&oacute;n de la Disponibilidad y Gesti&oacute;n de la Capacidad.";
 choices[74][3] = "Gesti&oacute;n de Suministradores y Gesti&oacute;n de Eventos.";
 answers[74] = choices[74][2];
 units[74] = "101";
 comments[74] = "Id Pregunta: 607. Junta de Extremadura A1 2015";
 preguntaids[74] = 607


