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

//  Id pregunta: 705 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes NO es un principio t&eacute;cnico de los mencionados en la Ley 19/2013 al que debe atenerse la informaci&oacute;n publicada en el Portal de Transparencia de la Administraci&oacute;n General del Estado?";
 choices[0]= new Array();
 choices[0][0] = "Compatibilidad";
 choices[0][1] = "Interoperabilidad";
 choices[0][2] = "Reutilizaci&oacute;n";
 choices[0][3] = "Accesibilidad";
 answers[0] = choices[0][0];
 units[0] = "22";
 comments[0] = "Id Pregunta: 705. Ley de transparencia";


//  Id pregunta: 348 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;En qu&eacute; fecha naci&oacute; la Uni&oacute;n Europea?:";
 choices[1]= new Array();
 choices[1][0] = "El 1 de noviembre de 1994.";
 choices[1][1] = "El 1 de noviembre de 1992.";
 choices[1][2] = "El 1 de noviembre de 1995.";
 choices[1][3] = "El 1 de noviembre de 1993.";
 answers[1] = choices[1][3];
 units[1] = "5";
 comments[1] = "Id Pregunta: 348. UNION EUROPEA";


//  Id pregunta: 319 Año de creación de pregunta: 2016
 questions[2]= "3)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[2]= new Array();
 choices[2][0] = "El Presidente de la Comisi&oacute;n, con la aprobaci&oacute;n de la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[2][1] = "La Comisi&oacute;n por mayor&iacute;a de dos tercios de sus miembros puede exigir la dimisi&oacute;n de un Comisario.";
 choices[2][2] = "El Presidente, sin necesidad de contar con la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[2][3] = "&Uacute;nicamente el Presidente del Consejo puede exigir la dimisi&oacute;n de un Comisario.";
 answers[2] = choices[2][0];
 units[2] = "5";
 comments[2] = "Id Pregunta: 319. UNION EUROPEA";


//  Id pregunta: 587 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Qu&eacute; &oacute;rgano es el responsable de la implantaci&oacute;n de los medios y servicios compartidos?";
 choices[3]= new Array();
 choices[3][0] = "La CETIC";
 choices[3][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[3][2] = "La DTIC";
 choices[3][3] = "Ninguno de los anteriores";
 answers[3] = choices[3][1];
 units[3] = "19";
 comments[3] = "Id Pregunta: 587. Estrategia TIC";


//  Id pregunta: 695 Año de creación de pregunta: 2016
 questions[4]= "5)  Se&ntilde;ale de las siguientes la que NO corresponde a una herramienta de integraci&oacute;n continua:";
 choices[4]= new Array();
 choices[4][0] = "Jenkins";
 choices[4][1] = "Hudson";
 choices[4][2] = "SonarQube";
 choices[4][3] = "Todas lo son";
 answers[4] = choices[4][3];
 units[4] = "92";
 comments[4] = "Id Pregunta: 695. INTEGRACION CONTINUA";


//  Id pregunta: 45 Año de creación de pregunta: 2016
 questions[5]= "6)  46. &iquest;Cu&aacute;l de las siguientes NO es una de las APIs incorporadas a HTML5?";
 choices[5]= new Array();
 choices[5][0] = "HTML Drag and Drop, para arrastrar un objeto a otra localizaci&oacute;n.";
 choices[5][1] = "HTML Advanced Search, para parametrizar y modificar el comportamiento de los buscadores.";
 choices[5][2] = "HTML Local Storage, para almacenar datos en el navegador.";
 choices[5][3] = "HTML SSE, para actualizar una p&aacute;gina web autom&aacute;ticamente sin preguntar al servidor.";
 answers[5] = choices[5][1];
 units[5] = "74";
 comments[5] = "Id Pregunta: 45. AGE A1 2015";


//  Id pregunta: 123 Año de creación de pregunta: 2016
 questions[6]= "7)  Seg&uacute;n el  Estatuto del Consejo de Transparencia y Buen Gobierno, &iquest;cu&aacute;l NO es un vocal de la Comisi&oacute;n de Transparencia y Buen Gobierno?";
 choices[6]= new Array();
 choices[6][0] = "Un representante de la Administraci&oacute;n local.";
 choices[6][1] = "Un representante del Tribunal de Cuentas.";
 choices[6][2] = "Un representante del Defensor del Pueblo.";
 choices[6][3] = "Un representante de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[6] = choices[6][0];
 units[6] = "22";
 comments[6] = "Id Pregunta: 123. ";


//  Id pregunta: 533 Año de creación de pregunta: 2016
 questions[7]= "8)  Se entender&aacute; acreditada la representaci&oacute;n realizada:";
 choices[7]= new Array();
 choices[7][0] = "mediante apoderamiento apud acta efectuado por comparecencia personal";
 choices[7][1] = "mediante apoderamiento apud acta efectuado por comparecencia electr&oacute;nica en la correspondiente sede electr&oacute;nica";
 choices[7][2] = "a trav&eacute;s de la acreditaci&oacute;n de su inscripci&oacute;n en el registro electr&oacute;nico de apoderamientos de la Administraci&oacute;n P&uacute;blica competente";
 choices[7][3] = "todas son correctas";
 answers[7] = choices[7][3];
 units[7] = "7";
 comments[7] = "Id Pregunta: 533. LEY 39/2015";


//  Id pregunta: 604 Año de creación de pregunta: 2016
 questions[8]= "9)  Como todo criptosistema de clave p&uacute;blica, el protocolo del criptosistema RSA:";
 choices[8]= new Array();
 choices[8][0] = "Tiene dos partes: Cifrado de Mensajes, Descifrado de Mensajes.";
 choices[8][1] = "Se basa en la dificultad que supone resolver el &lt;Problema de la Factorizaci&oacute;n Externa&gt;.";
 choices[8][2] = "Tiene tres partes: Generaci&oacute;n de claves, Cifrado de mensajes, Descifrado de mensajes.";
 choices[8][3] = "Se basa en la dificultad que supone resolver el &lt;Problema de Socrates- Arquimedes&gt;.";
 answers[8] = choices[8][2];
 units[8] = "76";
 comments[8] = "Id Pregunta: 604. Junta de Extremadura A1 2015";


//  Id pregunta: 141 Año de creación de pregunta: 2016
 questions[9]= "10)  El recurso de alzada puede interponerse:";
 choices[9]= new Array();
 choices[9][0] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna en todo caso";
 choices[9][1] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna o ante el competente para resolverlo";
 choices[9][2] = "Ante el &oacute;rgano competente para resolverlo en todo caso";
 choices[9][3] = "Ante el Defensor del Pueblo";
 answers[9] = choices[9][1];
 units[9] = "8";
 comments[9] = "Id Pregunta: 141. Ley 39/2015, Art&iacute;culo 121";


//  Id pregunta: 853 Año de creación de pregunta: 2016
 questions[10]= "11)  Si disponemos de 8 discos SAS de 1TB netos configurados en RAID1, &iquest;de qu&eacute; capacidad neta se dispone en RAID1 en el sistema de almacenamiento?";
 choices[10]= new Array();
 choices[10][0] = "6 TB.";
 choices[10][1] = "8 TB.";
 choices[10][2] = "7 TB.";
 choices[10][3] = "4 TB.";
 answers[10] = choices[10][3];
 units[10] = "53";
 comments[10] = "Id Pregunta: 853. Xunta de Galicia 2015";


//  Id pregunta: 796 Año de creación de pregunta: 2016
 questions[11]= "12)  Los estatutos de los Organismos p&uacute;blicos determinar&aacute;n sus respectivos:";
 choices[11]= new Array();
 choices[11][0] = "&oacute;rganos superiores";
 choices[11][1] = "&oacute;rganos directivos";
 choices[11][2] = "&oacute;rganos superiores y directivos";
 choices[11][3] = "ninguna es correcta";
 answers[11] = choices[11][1];
 units[11] = "4, 7, 8, 9";
 comments[11] = "Id Pregunta: 796. Ley 40/2015";


//  Id pregunta: 511 Año de creación de pregunta: 2016
 questions[12]= "13)  A tenor de lo dispuesto en el art&iacute;culo 14 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, el pago de los intereses y el capital de la deuda p&uacute;blica de las Administraciones P&uacute;blicas gozar&aacute; de prioridad:";
 choices[12]= new Array();
 choices[12][0] = "Sobre otros gastos siempre que no superen el 80% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[12][1] = "Sobre otros gastos siempre que no superen el 70% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[12][2] = "Absoluta frente a cualquier otro gasto.";
 choices[12][3] = "Sobre otros gastos siempre que no superen el 60% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea";
 answers[12] = choices[12][2];
 units[12] = "10";
 comments[12] = "Id Pregunta: 511. PRESUPUESTOS GENERALES";


//  Id pregunta: 122 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos NO forma parte de la estructura org&aacute;nica del Consejo de Transparencia y Buen Gobierno seg&uacute;n su Estatuto?";
 choices[13]= new Array();
 choices[13][0] = "El Presidente del Consejo de Transparencia y Buen Gobierno";
 choices[13][1] = "La Direcci&oacute;n General de Transparencia y Buen Gobierno";
 choices[13][2] = "La Comisi&oacute;n de Transparencia y Buen Gobierno";
 choices[13][3] = "La Subdirecci&oacute;n General de Reclamaciones";
 answers[13] = choices[13][1];
 units[13] = "22";
 comments[13] = "Id Pregunta: 122. ";


//  Id pregunta: 406 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola garantiza la no discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[14]= new Array();
 choices[14][0] = "Art&iacute;culo 9.1 CE.";
 choices[14][1] = "Art&iacute;culo 53 CE.";
 choices[14][2] = "Art&iacute;culo 14 CE.";
 choices[14][3] = "Art&iacute;culo 16 CE.";
 answers[14] = choices[14][2];
 units[14] = "14";
 comments[14] = "Id Pregunta: 406. POLITICAS DE IGUALDAD";


//  Id pregunta: 702 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Cu&aacute;l de los siguientes NO es un repositorio de c&oacute;digo?";
 choices[15]= new Array();
 choices[15][0] = "CVS";
 choices[15][1] = "SVN";
 choices[15][2] = "Team Foundation Server";
 choices[15][3] = "Apache Tomcat";
 answers[15] = choices[15][3];
 units[15] = "92";
 comments[15] = "Id Pregunta: 702. INTEGRACION CONTINUA";


//  Id pregunta: 758 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Cu&aacute;l de los siguientes no es uno de los pilares en que se basa la Agenda Digital Europea?";
 choices[16]= new Array();
 choices[16][0] = "Promover un acceso a internet r&aacute;pido y ultrarr&aacute;pido para todos";
 choices[16][1] = "Implantar el mercado general europeo";
 choices[16][2] = "Fomentar la alfabetizaci&oacute;n, la capacitaci&oacute;n y la inclusi&oacute;n digitales";
 choices[16][3] = "Consolidar la confianza y la seguridad en l&iacute;nea";
 answers[16] = choices[16][1];
 units[16] = "19";
 comments[16] = "Id Pregunta: 758. Agenda Digital Europea";


//  Id pregunta: 283 Año de creación de pregunta: 2016
 questions[17]= "18)  Se&ntilde;ale cu&aacute;l no es una de las prioridades de la Estrategia Europa 2020:";
 choices[17]= new Array();
 choices[17][0] = "Crecimiento inteligente.";
 choices[17][1] = "Crecimiento inclusivo.";
 choices[17][2] = "Crecimiento sostenible.";
 choices[17][3] = "Crecimiento integrador.";
 answers[17] = choices[17][1];
 units[17] = "5";
 comments[17] = "Id Pregunta: 283. UNION EUROPEA";


//  Id pregunta: 274 Año de creación de pregunta: 2016
 questions[18]= "19)  La Ley 19/2013 de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno ha establecido el derecho:";
 choices[18]= new Array();
 choices[18][0] = "Al acceso a la informaci&oacute;n p&uacute;blica, en desarrollo de los t&eacute;rminos ya previstos por la Ley 11/2007, de acceso electr&oacute;nico de los ciudadano a los servicios p&uacute;blicos.";
 choices[18][1] = "Al acceso a la informaci&oacute;n p&uacute;blica, por primera vez en nuestra legislaci&oacute;n positiva.";
 choices[18][2] = "Al acceso a la informaci&oacute;n p&uacute;blica a trav&eacute;s del portal de transparencia.";
 choices[18][3] = "Al acceso a la informaci&oacute;n p&uacute;blica, con las limitaciones derivadas del posible perjuicio para la defensa, seguridad nacional o funciones administrativas de inspecci&oacute;n, entre otras.";
 answers[18] = choices[18][3];
 units[18] = "22";
 comments[18] = "Id Pregunta: 274. LEY DE TRANSPARENCIA";


//  Id pregunta: 137 Año de creación de pregunta: 2016
 questions[19]= "20)  La creaci&oacute;n de la Autoridad Independiente de Responsabilidad Fiscal, dentro de la Ley Org&aacute;nica 6/2013, tiene por objeto:";
 choices[19]= new Array();
 choices[19][0] = "Garantizar el cumplimiento efectivo por las Administraciones P&uacute;blicas del principio de estabilidad presupuestaria previsto en el art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola.";
 choices[19][1] = "La evaluaci&oacute;n continua del ciclo presupuestario, del endeudamiento p&uacute;blico, y el an&aacute;lisis de las previsiones econ&oacute;micas.";
 choices[19][2] = "Ejercer sus funciones con autonom&iacute;a e independencia funcional respecto de las Administraciones P&uacute;blicas.";
 choices[19][3] = "Todos las anteriores son ciertas.";
 answers[19] = choices[19][3];
 units[19] = "12";
 comments[19] = "Id Pregunta: 137. Leyes modelo econ&oacute;mico";


//  Id pregunta: 584 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;Cu&aacute;ndo tuvo lugar la primera declaraci&oacute;n de servicios compartidos?";
 choices[20]= new Array();
 choices[20][0] = "El 5 de Octubre de 2015";
 choices[20][1] = "El 15 de Octubre de 2015";
 choices[20][2] = "El 15 de Septiembre de 2015";
 choices[20][3] = "El 2 de Octubre de 2015";
 answers[20] = choices[20][2];
 units[20] = "19";
 comments[20] = "Id Pregunta: 584. Estrategia TIC";


//  Id pregunta: 676 Año de creación de pregunta: 2016
 questions[21]= "22)  En referencia a la implantaci&oacute;n de la interoperabilidad de la receta electr&oacute;nica:";
 choices[21]= new Array();
 choices[21][0] = "Permite los ciudadanos retiren sus medicamentos en las farmacias de fuera de la Comunidad Aut&oacute;noma en la que hayan sido recetados.";
 choices[21][1] = "Favorece la seguridad del paciente, al incorporar sistemas online de ayuda a la prescripci&oacute;n, que ayudan a la detecci&oacute;n de interaciones medicamentosas o duplicidades terap&eacute;uticas.";
 choices[21][2] = "Facilita al m&eacute;dico el seguimiento de la adherencia al tratamiento por parte del paciente.";
 choices[21][3] = "Todas las anteriores son correctas.";
 answers[21] = choices[21][3];
 units[21] = "47";
 comments[21] = "Id Pregunta: 676. Receta electr&oacute;nica";


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


//  Id pregunta: 519 Año de creación de pregunta: 2016
 questions[23]= "24)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas: (se&ntilde;ala la incorrecta)";
 choices[23]= new Array();
 choices[23][0] = "la Administraci&oacute;n General del Estado";
 choices[23][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[23][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[23][3] = "los organismos p&uacute;blicos y entidades de derecho privado que integran el sector p&uacute;blico institucional";
 answers[23] = choices[23][3];
 units[23] = "7";
 comments[23] = "Id Pregunta: 519. LEY 39/2015";


//  Id pregunta: 363 Año de creación de pregunta: 2016
 questions[24]= "25)  Los Reglamentos no se caracterizan por:";
 choices[24]= new Array();
 choices[24][0] = "No poseer alcance general.";
 choices[24][1] = "Ser obligatorios.";
 choices[24][2] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[24][3] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 answers[24] = choices[24][0];
 units[24] = "5";
 comments[24] = "Id Pregunta: 363. UNION EUROPEA";


//  Id pregunta: 841 Año de creación de pregunta: 2016
 questions[25]= "26)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[25]= new Array();
 choices[25][0] = "El &oacute;rgano administrativo que se estime incompetente para la resoluci&oacute;n de un asunto remitir&aacute; directamente las actuaciones al &oacute;rgano superior, debiendo notificar esta circunstancia a los interesados.";
 choices[25][1] = "Los interesados que sean parte en el procedimiento podr&aacute;n dirigirse al &oacute;rgano que se encuentre conociendo de un asunto para que decline su competencia y remita las actuaciones al &oacute;rgano competente.";
 choices[25][2] = "Asimismo, podr&aacute;n dirigirse al &oacute;rgano que estimen competente para que requiera de inhibici&oacute;n al que est&eacute; conociendo del asunto.";
 choices[25][3] = "Los conflictos de atribuciones s&oacute;lo podr&aacute;n suscitarse entre &oacute;rganos de una misma Administraci&oacute;n no relacionados jer&aacute;rquicamente, y respecto a asuntos sobre los que no haya finalizado el procedimiento administrativo.";
 answers[25] = choices[25][0];
 units[25] = "4, 7, 8, 9";
 comments[25] = "Id Pregunta: 841. Ley 40/2015";


//  Id pregunta: 744 Año de creación de pregunta: 2016
 questions[26]= "27)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, se entiende por emprendedor:";
 choices[26]= new Array();
 choices[26][0] = "Aquellas personas f&iacute;sicas que van a desarrollar o est&aacute;n desarrollando una actividad econ&oacute;mica productiva.";
 choices[26][1] = "Aquellas personas independientemente de su condici&oacute;n de persona f&iacute;sica o jur&iacute;dica, que van a desarrollar una actividad econ&oacute;mica productiva.";
 choices[26][2] = "Aquellas personas, independientemente de su condici&oacute;n de persona f&iacute;sica o jur&iacute;dica, que van a desarrollar o est&aacute;n desarrollando una actividad econ&oacute;mica productiva.";
 choices[26][3] = "Ninguna de las anteriores";
 answers[26] = choices[26][2];
 units[26] = "18, 20";
 comments[26] = "Id Pregunta: 744. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 316 Año de creación de pregunta: 2016
 questions[27]= "28)  El Consejo de la Uni&oacute;n Europea de reunir&aacute; por:";
 choices[27]= new Array();
 choices[27][0] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de dos de sus miembros o de la Comisi&oacute;n.";
 choices[27][1] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n.";
 choices[27][2] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de tres de sus miembros o de la Comisi&oacute;n.";
 choices[27][3] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n o el Parlamento.";
 answers[27] = choices[27][1];
 units[27] = "5";
 comments[27] = "Id Pregunta: 316. UNION EUROPEA";


//  Id pregunta: 655 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Cual de las siguientes bases de datos no est&aacute; orientada a grafos?";
 choices[28]= new Array();
 choices[28][0] = "Neo4J ";
 choices[28][1] = "OrientDB ";
 choices[28][2] = "InfoGrid ";
 choices[28][3] = "SimpleDB";
 answers[28] = choices[28][3];
 units[28] = "73";
 comments[28] = "Id Pregunta: 655. ";


//  Id pregunta: 272 Año de creación de pregunta: 2016
 questions[29]= "30)  Respecto a SonarQube, se&ntilde;ale la FALSA";
 choices[29]= new Array();
 choices[29][0] = "Sirve para evaluar aspectos como la complejidad ciclom&aacute;tica del c&oacute;digo.";
 choices[29][1] = "Anteriormente se denominaba Sonar.";
 choices[29][2] = "Permite disponer de una matriz de dependencia entre objetos.";
 choices[29][3] = "Integra herramientas de medici&oacute;n de la calidad de c&oacute;digo como CPD, findbugs, PMD, checkstyle.";
 answers[29] = choices[29][2];
 units[29] = "92";
 comments[29] = "Id Pregunta: 272. INTEGRACION CONTINUA";


//  Id pregunta: 298 Año de creación de pregunta: 2016
 questions[30]= "31)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al Consejo de la Uni&oacute;n Europea:";
 choices[30]= new Array();
 choices[30][0] = "Estar&aacute; asistido por dos Secretar&iacute;as Generales.";
 choices[30][1] = "Estar&aacute; asistido por una Secretar&iacute;a General, dirigida por un Secretario General.";
 choices[30][2] = "Estar&aacute; asistido por un alto representante de Pol&iacute;tica Interior y Exterior.";
 choices[30][3] = "Estar&aacute; asistido por el Consejo de Europa.";
 answers[30] = choices[30][1];
 units[30] = "5";
 comments[30] = "Id Pregunta: 298. UNION EUROPEA";


//  Id pregunta: 204 Año de creación de pregunta: 2016
 questions[31]= "32)  Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada reciben el t&iacute;tulo de:";
 choices[31]= new Array();
 choices[31][0] = "Decretos Legislativos.";
 choices[31][1] = "Decretos-leyes.";
 choices[31][2] = "Leyes de bases.";
 choices[31][3] = "Reales Decretos del Consejo de Ministros.";
 answers[31] = choices[31][0];
 units[31] = "1";
 comments[31] = "Id Pregunta: 204. CONSTITUCION1978";


//  Id pregunta: 176 Año de creación de pregunta: 2016
 questions[32]= "33)  Seg&uacute;n el Art&iacute;culo 115 de la Constituci&oacute;n Espa&ntilde;ola, el Presidente del Gobierno, previa deliberaci&oacute;n del Consejo de Ministros, y bajo su responsabilidad, podr&aacute; proponer la disoluci&oacute;n de:";
 choices[32]= new Array();
 choices[32][0] = "El Congreso, el senado o las Cortes Generales.";
 choices[32][1] = "Solamente el Congreso.";
 choices[32][2] = "El Congreso, pero s&oacute;lo mediante la tramitaci&oacute;n de una moci&oacute;n de censura.";
 choices[32][3] = "El Congreso y el Senado, mediante Refer&eacute;ndum.";
 answers[32] = choices[32][0];
 units[32] = "1";
 comments[32] = "Id Pregunta: 176. CONSTITUCION1978";


//  Id pregunta: 349 Año de creación de pregunta: 2016
 questions[33]= "34)  El Tratado de Par&iacute;s que crea la Comunidad Europea del Carb&oacute;n y del Acero entr&oacute; en vigor:";
 choices[33]= new Array();
 choices[33][0] = "El 23 de julio de 1952.";
 choices[33][1] = "El 18 de abril de 1951.";
 choices[33][2] = "El 16 de abril de 1948.";
 choices[33][3] = "d)Ninguna de las respuestas son correctas.";
 answers[33] = choices[33][0];
 units[33] = "5";
 comments[33] = "Id Pregunta: 349. UNION EUROPEA";


//  Id pregunta: 36 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Cu&aacute;l es la interfaz est&aacute;ndar de programaci&oacute;n Java para invocar a m&eacute;todos nativos escritos en otros lenguajes como C o C++?";
 choices[34]= new Array();
 choices[34][0] = "JAXP";
 choices[34][1] = "JNI";
 choices[34][2] = "JNDI";
 choices[34][3] = "JDBC";
 answers[34] = choices[34][1];
 units[34] = "64";
 comments[34] = "Id Pregunta: 36. AGE A1 2015";


//  Id pregunta: 190 Año de creación de pregunta: 2016
 questions[35]= "36)  La iniciativa legislativa para la reforma de la Constituci&oacute;n Espa&ntilde;ola de 1978:";
 choices[35]= new Array();
 choices[35][0] = "Le corresponde exclusivamente al congreso y al Senado.";
 choices[35][1] = "Puede ser ejercida por el Tribunal Constitucional.";
 choices[35][2] = "Puede ser instada por las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[35][3] = "Le corresponde exclusivamente al Gobierno.";
 answers[35] = choices[35][2];
 units[35] = "1";
 comments[35] = "Id Pregunta: 190. CONSTITUCION1978";


//  Id pregunta: 855 Año de creación de pregunta: 2016
 questions[36]= "37)  Indique cu&aacute;l de las siguientes funciones relativas a una PKI es INCORRECTA:";
 choices[36]= new Array();
 choices[36][0] = "Garantiza mediante el uso de certificados digitales el no repudio, integridad, autenticaci&oacute;n y la publicaci&oacute;n de los datos transmitidos.";
 choices[36][1] = "Los componentes de una PKI para la administraci&oacute;n de los ccertificados son: software, hardware, personas, pol&iacute;ticas, procedimientos.";
 choices[36][2] = "Entre las funciones de una PKI se encuentra la revocaci&oacute;n de claves.";
 choices[36][3] = "Entre las funciones de una PKI se encuentran la generaci&oacute;n, recuperaci&oacute;n y renovaci&oacute;n de claves.";
 answers[36] = choices[36][0];
 units[36] = "76";
 comments[36] = "Id Pregunta: 855. Xunta de Galicia 2015";


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


//  Id pregunta: 452 Año de creación de pregunta: 2016
 questions[38]= "39)  Los Presupuestos Generales son expresi&oacute;n...";
 choices[38]= new Array();
 choices[38][0] = "Cifrada";
 choices[38][1] = "Conjunta";
 choices[38][2] = "Sistem&aacute;tica";
 choices[38][3] = "Todas son correctas";
 answers[38] = choices[38][3];
 units[38] = "10";
 comments[38] = "Id Pregunta: 452. PRESUPUESTOS GENERALES";


//  Id pregunta: 315 Año de creación de pregunta: 2016
 questions[39]= "40)  El Colegio de Comisarios se re&uacute;ne:";
 choices[39]= new Array();
 choices[39][0] = "Una vez por semana.";
 choices[39][1] = "Una vez al mes.";
 choices[39][2] = "Dos veces en semana.";
 choices[39][3] = "Cuando lo acuerde el Presidente de la Comisi&oacute;n, y adem&aacute;s una vez al mes.";
 answers[39] = choices[39][0];
 units[39] = "5";
 comments[39] = "Id Pregunta: 315. UNION EUROPEA";


//  Id pregunta: 26 Año de creación de pregunta: 2016
 questions[40]= "41)  Usted, como directivo TIC de la AGE, decide crear un portal web, con una direcci&oacute;n electr&oacute;nica nueva, con el objetivo de informar al ciudadano sobre determinados aspectos relacionados con su unidad. &iquest;Cu&aacute;l de los siguientes tipos de certificado utilizar&iacute;a para identificar a los servidores de su portal informativo?";
 choices[40]= new Array();
 choices[40][0] = "Sello electr&oacute;nico";
 choices[40][1] = "Sede electr&oacute;nica";
 choices[40][2] = "Servidor seguro (SSL/TLS)";
 choices[40][3] = "Empleado p&uacute;blico";
 answers[40] = choices[40][2];
 units[40] = "7";
 comments[40] = "Id Pregunta: 26. AGE A1 2015";


//  Id pregunta: 300 Año de creación de pregunta: 2016
 questions[41]= "42)  La designaci&oacute;n para formar parte del Tribunal de Cuentas la efect&uacute;a:";
 choices[41]= new Array();
 choices[41][0] = "La Comisi&oacute;n.";
 choices[41][1] = "El Consejo de Europa.";
 choices[41][2] = "El Consejo Europeo.";
 choices[41][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[41] = choices[41][3];
 units[41] = "5";
 comments[41] = "Id Pregunta: 300. UNION EUROPEA";


//  Id pregunta: 590 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Cu&aacute;ntos servicios se declararon compartidos en la primera declaraci&oacute;n?";
 choices[42]= new Array();
 choices[42][0] = "14";
 choices[42][1] = "11";
 choices[42][2] = "12";
 choices[42][3] = "15";
 answers[42] = choices[42][0];
 units[42] = "19";
 comments[42] = "Id Pregunta: 590. Estrategia TIC";


//  Id pregunta: 94 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es propia de Apache Hadoop?";
 choices[43]= new Array();
 choices[43][0] = "Es un framework de software libre.";
 choices[43][1] = "Es una base de datos NoSQL.";
 choices[43][2] = "Est&aacute; basado en MapReduce.";
 choices[43][3] = "Puede emplearse en sistemas de datos masivos (Big Data).";
 answers[43] = choices[43][1];
 units[43] = "73";
 comments[43] = "Id Pregunta: 94. AGE A1 2015";


//  Id pregunta: 304 Año de creación de pregunta: 2016
 questions[44]= "45)  El mandato de la Comisi&oacute;n se establece por un per&iacute;odo de:";
 choices[44]= new Array();
 choices[44][0] = "Cinco a&ntilde;os.";
 choices[44][1] = "Seis a&ntilde;os.";
 choices[44][2] = "Cuatro a&ntilde;os.";
 choices[44][3] = "Tres a&ntilde;os.";
 answers[44] = choices[44][0];
 units[44] = "5";
 comments[44] = "Id Pregunta: 304. UNION EUROPEA";


//  Id pregunta: 754 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Agenda Digital para Espa&ntilde;a?";
 choices[45]= new Array();
 choices[45][0] = "Aumentar los beneficios empresariales mediante las TIC";
 choices[45][1] = "Promover la inclusi&oacute;n digital y la empleabilidad";
 choices[45][2] = "Fomentar el despliegue de redes y servicios";
 choices[45][3] = "Mejorar la administraci&oacute;n electr&oacute;nica";
 answers[45] = choices[45][0];
 units[45] = "19";
 comments[45] = "Id Pregunta: 754. Agenda Digital para Espa&ntilde;a";


//  Id pregunta: 245 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[46]= new Array();
 choices[46][0] = "De los derechos y deberes fundamentales.";
 choices[46][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[46][2] = "Derechos y libertades.";
 choices[46][3] = "De la Corona.";
 answers[46] = choices[46][1];
 units[46] = "1";
 comments[46] = "Id Pregunta: 245. CONSTITUCION1978";


//  Id pregunta: 661 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;De qu&eacute; modelo de programaci&oacute;n es una implementaci&oacute;n Hadoop?";
 choices[47]= new Array();
 choices[47][0] = "Orientaci&oacute;n a objetos";
 choices[47][1] = "MapReduce";
 choices[47][2] = "Pipeline filtering";
 choices[47][3] = "Programaci&oacute;n funcional";
 answers[47] = choices[47][1];
 units[47] = "73";
 comments[47] = "Id Pregunta: 661. ";


//  Id pregunta: 535 Año de creación de pregunta: 2016
 questions[48]= "49)  La falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n no impedir&aacute; que se tenga por realizado el acto de que se trate, siempre que se aporte aqu&eacute;lla o se subsane el defecto dentro del plazo de:";
 choices[48]= new Array();
 choices[48][0] = "5 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[48][1] = "10 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[48][2] = "15 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[48][3] = "20 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 answers[48] = choices[48][1];
 units[48] = "7";
 comments[48] = "Id Pregunta: 535. LEY 39/2015";


//  Id pregunta: 47 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es propia de OCSP?";
 choices[49]= new Array();
 choices[49][0] = "Es un m&eacute;todo de validaci&oacute;n del estado de un certificado electr&oacute;nico que emplea suplementariamente la descarga y consulta de CRLs.";
 choices[49][1] = "Permite la consulta off-line del estado de revocaci&oacute;n de un certificado proporcionado por una autoridad de certificaci&oacute;n.";
 choices[49][2] = "No permite implementar mecanismos de tarificaci&oacute;n.";
 choices[49][3] = "Permite verificar el estado de los certificados mediante la consulta a una autoridad de validaci&oacute;n.";
 answers[49] = choices[49][3];
 units[49] = "78";
 comments[49] = "Id Pregunta: 47. AGE A1 2015";


//  Id pregunta: 621 Año de creación de pregunta: 2016
 questions[50]= "51)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[50]= new Array();
 choices[50][0] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: la identificaci&oacute;n de clases sem&aacute;nticas, atributos y servicios; identificaci&oacute;n de las relaciones entre clases; el emplazamiento de las clases, atributos y servicios; la especificaci&oacute;n del comportamiento din&aacute;mico mediante paso de mensajes.";
 choices[50][1] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: a&ntilde;adir las clases interfaz, base y utilidad; refinar las clases sem&aacute;nticas.";
 choices[50][2] = "En el An&aacute;lisis Orientado a Objetos, deben llevarse a cabo las siguientes actividades: toma inicial de requisitos; an&aacute;lisis; dise&ntilde;o; implementaci&oacute;n.";
 choices[50][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[50] = choices[50][1];
 units[50] = "89";
 comments[50] = "Id Pregunta: 621. Junta de Extremadura A1 2015";


//  Id pregunta: 711 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Qu&eacute; ley regula el ejercicio del alto cargo de la Administraci&oacute;n General del Estado con objeto de garantizar, entre otros, que realice su actividad en m&aacute;ximas condiciones de transparencia?";
 choices[51]= new Array();
 choices[51][0] = "Ley 3/2015";
 choices[51][1] = "Ley 6/2007";
 choices[51][2] = "Ley 5/1984";
 choices[51][3] = "Ley 5/2006";
 answers[51] = choices[51][0];
 units[51] = "22";
 comments[51] = "Id Pregunta: 711. &Eacute;tica P&uacute;blica y Transparencia";


//  Id pregunta: 583 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Qu&eacute; car&aacute;cter tiene la utilizaci&oacute;n de los medios y servicios compartidos?.";
 choices[52]= new Array();
 choices[52][0] = "Car&aacute;cter sustitutivo";
 choices[52][1] = "Car&aacute;cter obligatorio";
 choices[52][2] = "Car&aacute;cter obligatorio y sustitutivo, sin excepci&oacute;n alguna";
 choices[52][3] = "Ninguna de las anteriores";
 answers[52] = choices[52][3];
 units[52] = "19";
 comments[52] = "Id Pregunta: 583. Estrategia TIC. Car&aacute;cter obligatorio y sustitutivo, aunque se podr&aacute;n acordar excepciones";


//  Id pregunta: 440 Año de creación de pregunta: 2016
 questions[53]= "54)  Respecto al Sistema de Informaci&oacute;n Administrativa, se&ntilde;ale la respuesta falsa:";
 choices[53]= new Array();
 choices[53][0] = "Contiene la relaci&oacute;n de procedimientos y servicios de la AGE, y de todas las administraciones participantes.";
 choices[53][1] = "Cumple para la AGE el requisito establecido en el art&iacute;culo 9 del Esquema Nacional de Interoperabilidad, que obliga a las Administraciones p&uacute;blicas a mantener actualizado un Inventario de Informaci&oacute;n Administrativa.";
 choices[53][2] = "SIA est&aacute; dise&ntilde;ado para permitir la administraci&oacute;n distribuida y la actualizaci&oacute;n corresponsable por todas las Administraciones participantes, mediante una aplicaci&oacute;n web.";
 choices[53][3] = "Los usuarios son gestionados por una red de responsables de cada Departamento.";
 answers[53] = choices[53][2];
 units[53] = "43";
 comments[53] = "Id Pregunta: 440. SERVICIOS COMUNES";


//  Id pregunta: 280 Año de creación de pregunta: 2016
 questions[54]= "55)  El pacto fiscal europeo de 2012 incluye:";
 choices[54]= new Array();
 choices[54][0] = "Un conjunto de reglas, llamadas &quot;reglas de oro&quot;, que son vinculantes en la UE para el principio de equilibrio presupuestario.";
 choices[54][1] = "Un compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,6% de la PIB.";
 choices[54][2] = "Un compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional, lo cual no necesita ser verificado por el Tribunal de Justicia de la Uni&oacute;n Europea.";
 choices[54][3] = "La obligaci&oacute;n de mantener siempre el d&eacute;ficit p&uacute;blico por debajo del 2.8 % del PIB.";
 answers[54] = choices[54][0];
 units[54] = "5";
 comments[54] = "Id Pregunta: 280. UNION EUROPEA";


//  Id pregunta: 672 Año de creación de pregunta: 2016
 questions[55]= "56)  Respecto a la ejecuci&oacute;n de la resoluci&oacute;n de un procedimiento administrativo, se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[55]= new Array();
 choices[55][0] = "Las Administraciones P&uacute;blicas no iniciar&aacute;n la ejecuci&oacute;n hasta que se haya dictado resoluci&oacute;n.";
 choices[55][1] = "De una resoluci&oacute;n administrativa nunca puede derivarse una multa.";
 choices[55][2] = "La ejecuci&oacute;n forzosa de una resoluci&oacute;n puede afectar al patrimonio.";
 choices[55][3] = "Contra algunas resoluciones es posible interponer recursos por v&iacute;a administrativa.";
 answers[55] = choices[55][1];
 units[55] = "7";
 comments[55] = "Id Pregunta: 672. Cap&iacute;tulo VII, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 84 Año de creación de pregunta: 2016
 questions[56]= "57)  En el marco europeo de interoperabilidad de sistemas de informaci&oacute;n, &iquest;qu&eacute; programa de la Uni&oacute;n Europea ha estado en vigor entre 2010 y 2015?";
 choices[56]= new Array();
 choices[56][0] = "Interchange of Data between Administrations (IDA)";
 choices[56][1] = "Interoperability Solutions for European Public Administrations (ISA)";
 choices[56][2] = "Interoperable Delivery of Pan-European eGovernment Services to Public Administrations, Businesses and Citizens (IDABC)";
 choices[56][3] = "Interoperability Electronic European Solution (IEES)";
 answers[56] = choices[56][1];
 units[56] = "43";
 comments[56] = "Id Pregunta: 84. AGE A1 2015";


//  Id pregunta: 217 Año de creación de pregunta: 2016
 questions[57]= "58)  Tal y como marca la Constituci&oacute;n Espa&ntilde;ola de 1978, en el caso de los refer&eacute;ndums consultivos:";
 choices[57]= new Array();
 choices[57][0] = "Su propuesta parte del Presidente del Gobierno, ha de ser autorizada por el Congreso de los Diputados.";
 choices[57][1] = "Son propuestos por el Consejo de Ministros, siendo autorizados previamente por el Presidente del Gobierno.";
 choices[57][2] = "Son refrendados por el Rey.";
 choices[57][3] = "Son convocados por el Presidente del Gobierno.";
 answers[57] = choices[57][0];
 units[57] = "1";
 comments[57] = "Id Pregunta: 217. CONSTITUCION1978";


//  Id pregunta: 244 Año de creación de pregunta: 2016
 questions[58]= "59)  La Constituci&oacute;n Espa&ntilde;ola, en el art&iacute;culo 9 del T&iacute;tulo Preliminar, garantiza el principio de:";
 choices[58]= new Array();
 choices[58][0] = "Retroactividad de las disposiciones sancionadoras no favorables de derechos individuales.";
 choices[58][1] = "Publicidad de las normas.";
 choices[58][2] = "Defensa jur&iacute;dica ante los tribunales.";
 choices[58][3] = "Coordinaci&oacute;n normativa.";
 answers[58] = choices[58][2];
 units[58] = "1";
 comments[58] = "Id Pregunta: 244. CONSTITUCION1978";


//  Id pregunta: 38 Año de creación de pregunta: 2016
 questions[59]= "60)  LAMP es el acr&oacute;nimo usado para describir un sistema de infraestructura de internet aplicable a la pila:";
 choices[59]= new Array();
 choices[59][0] = "Linux, Ant, MySQL/MariaDB y PJava";
 choices[59][1] = "Linux, Apache, Microsoft SQLServer y Perl, PHP, o Python";
 choices[59][2] = "Linux, Ant, MongoDB y Perl, PHP, o Python";
 choices[59][3] = "Linux, Apache, MySQL/MariaDB y Perl, PHP, o Python";
 answers[59] = choices[59][3];
 units[59] = "62";
 comments[59] = "Id Pregunta: 38. AGE A1 2015";


//  Id pregunta: 456 Año de creación de pregunta: 2016
 questions[60]= "61)  El Presupuesto por programas sirve para saber...";
 choices[60]= new Array();
 choices[60][0] = "En qu&eacute; nos gastamos el dinero";
 choices[60][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[60][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[60][3] = "Qui&eacute;n se gasta el dinero";
 answers[60] = choices[60][2];
 units[60] = "10";
 comments[60] = "Id Pregunta: 456. PRESUPUESTOS GENERALES";


//  Id pregunta: 486 Año de creación de pregunta: 2016
 questions[61]= "62)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, dirigir la contabilidad de las entidades que integran el sistema de la Seguridad Social y gestionar la contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una funci&oacute;n de:";
 choices[61]= new Array();
 choices[61][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[61][1] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[61][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[61][3] = "La Intervenci&oacute;n General de la Defensa.";
 answers[61] = choices[61][2];
 units[61] = "10";
 comments[61] = "Id Pregunta: 486. PRESUPUESTOS GENERALES";


//  Id pregunta: 747 Año de creación de pregunta: 2016
 questions[62]= "63)  Cu&aacute;l de los siguientes NO es uno de los programas del marco general para la mejora de la calidad en la Administraci&oacute;n General del Estado:";
 choices[62]= new Array();
 choices[62][0] = "Programa de an&aacute;lisis de la demanda y de evaluaci&oacute;n de la satisfacci&oacute;n de los usuarios de los servicios.";
 choices[62][1] = "Programa de cartas de servicios";
 choices[62][2] = "Programa para la mejora continua de las organizaciones.";
 choices[62][3] = "Programa de evaluaci&oacute;n de la calidad de las organizaciones.";
 answers[62] = choices[62][2];
 units[62] = "18, 20";
 comments[62] = "Id Pregunta: 747. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 509 Año de creación de pregunta: 2016
 questions[63]= "64)  De acuerdo con el art&iacute;culo 32 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, en el supuesto de que la liquidaci&oacute;n presupuestaria del Estado se sit&uacute;e en super&aacute;vit, &eacute;ste debe destinarse a:";
 choices[63]= new Array();
 choices[63][0] = "Reducir el gasto p&uacute;blico.";
 choices[63][1] = "Reducir el d&eacute;ficit presupuestario.";
 choices[63][2] = "Reducir el endeudamiento neto.";
 choices[63][3] = "Al Fondo de Contingencia.";
 answers[63] = choices[63][2];
 units[63] = "10";
 comments[63] = "Id Pregunta: 509. PRESUPUESTOS GENERALES";


//  Id pregunta: 623 Año de creación de pregunta: 2016
 questions[64]= "65)  Seg&uacute;n el paradigma de Orientaci&oacute;n a Objetos, la herencia posibilita que:";
 choices[64]= new Array();
 choices[64][0] = "Cualquier cambio en los datos y operaciones contenidas dentro de una superclase es heredado inmediatamente por todas las subclases que se derivan de la superclase.";
 choices[64][1] = "Cualquier cambio en las operaciones y datos de la superclase no se refleja en todas las subclases.";
 choices[64][2] = "Cualquier cambio en una de las subclases que se heredan de la superclase se refleja en sus clases hermanas.";
 choices[64][3] = "En el paradigma de Orientaci&oacute;n a Objetos no existe la herencia.";
 answers[64] = choices[64][0];
 units[64] = "89";
 comments[64] = "Id Pregunta: 623. Junta de Extremadura A1 2015";


//  Id pregunta: 660 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Qu&eacute; tecnolog&iacute;a de tratamiento de datos no guarda relaci&oacute;n con BigData?";
 choices[65]= new Array();
 choices[65][0] = "NoSQL";
 choices[65][1] = "Sistemas de baja latencia";
 choices[65][2] = "MapReduce";
 choices[65][3] = "Business Intelligence";
 answers[65] = choices[65][1];
 units[65] = "73";
 comments[65] = "Id Pregunta: 660. ";


//  Id pregunta: 713 Año de creación de pregunta: 2016
 questions[66]= "67)  En relaci&oacute;n al Portal de Transparencia de la AGE:";
 choices[66]= new Array();
 choices[66][0] = "La informaci&oacute;n m&aacute;s relevante para el ciudadano y de frecuente acceso estar&aacute; disponible en el Portal de Transparencia, no pudiendo accederse a informaci&oacute;n que no se encuentre ya publicada.";
 choices[66][1] = "El ejercicio del Derecho de Acceso abre con la administraci&oacute;n un procedimiento administrativo que exige la identificaci&oacute;n del solicitante.";
 choices[66][2] = "En el Portal de Transparencia de la AGE s&oacute;lo se puede acceder a informaci&oacute;n de tipo institucional.";
 choices[66][3] = "El CTBG es el responsable del Portal de Transparencia.";
 answers[66] = choices[66][1];
 units[66] = "22";
 comments[66] = "Id Pregunta: 713. Portal de Transparencia";


//  Id pregunta: 441 Año de creación de pregunta: 2016
 questions[67]= "68)  Se&ntilde;ale la respuesta falsa respecto a Habilit@, Registro de Funcionarios Habilitados:";
 choices[67]= new Array();
 choices[67][0] = "El art&iacute;culo 12.3 de la Ley 39/2015recoge que la Administraci&oacute;n General del Estado, las Comunidades Aut&oacute;nomas y las Entidades Locales mantendr&aacute;n actualizado un registro, u otro sistema equivalente, donde constar&aacute;n los funcionarios habilitados para la identificaci&oacute;n o firma.";
 choices[67][1] = "La Orden HAP/8/2014, de 7 de enero, regula el Registro de funcionarios habilitados para la identificaci&oacute;n y autenticaci&oacute;n de ciudadanos en el &aacute;mbito de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos vinculados o dependientes.";
 choices[67][2] = "En el caso en que el ciudadano no disponga de medios de autenticaci&oacute;n y firma para relacionarse de manera electr&oacute;nica con las Administraciones, la Ley 39/2015 prev&eacute; que, siempre que el ciudadano se identifique y deje constancia de su consentimiento expreso, un funcionario podr&aacute; actuar en su nombre, utilizando el sistema de firma del que disponga para ello.";
 choices[67][3] = "Tambi&eacute;n se establece en la misma Ley 39/2015 que las Administraciones P&uacute;blicas podr&aacute;n realizar copias aut&eacute;nticas de los documentos p&uacute;blicos administrativos o privados mediante funcionario habilitado.";
 answers[67] = choices[67][1];
 units[67] = "43";
 comments[67] = "Id Pregunta: 441. SERVICIOS COMUNES";


//  Id pregunta: 478 Año de creación de pregunta: 2016
 questions[68]= "69)  Conforme a la Ley General Presupuestaria, la aprobaci&oacute;n de las normas reguladoras de los anticipos de caja fija mediante las que se indiquen los gastos que pueden ser satisfechos por dicho sistema y los cr&eacute;ditos compete:";
 choices[68]= new Array();
 choices[68][0] = "Al Gobierno.";
 choices[68][1] = "Al Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[68][2] = "A los Ministros y Presidentes o Directores de los Organismos aut&oacute;nomos en relaci&oacute;n con sus respectivos &aacute;mbitos.";
 choices[68][3] = "A los Ministros en relaci&oacute;n con sus respectivos Departamentos, incluyendo los Organismos aut&oacute;nomos que tengan adscritos.";
 answers[68] = choices[68][2];
 units[68] = "10";
 comments[68] = "Id Pregunta: 478. PRESUPUESTOS GENERALES";


//  Id pregunta: 229 Año de creación de pregunta: 2016
 questions[69]= "70)  De acuerdo con lo previsto en la Constituci&oacute;n Espa&ntilde;ola, el Gobierno y la administraci&oacute;n aut&oacute;noma de las provincias estar&aacute;n encomendados:";
 choices[69]= new Array();
 choices[69][0] = "A Diputaciones u otras Corporaciones de car&aacute;cter representativo.";
 choices[69][1] = "A los Subdelegados del Gobierno y a los Directores Insulares.";
 choices[69][2] = "A las Diputaciones y a las Mancomunidades de Municipios.";
 choices[69][3] = "A las Diputaciones y a las Comarcas.";
 answers[69] = choices[69][3];
 units[69] = "1";
 comments[69] = "Id Pregunta: 229. CONSTITUCION1978";


//  Id pregunta: 811 Año de creación de pregunta: 2016
 questions[70]= "71)  Los Subdirectores generales:";
 choices[70]= new Array();
 choices[70][0] = "son los responsables inmediatos, bajo la supervisi&oacute;n del Secretario general o del titular del &oacute;rgano del que dependan, de la ejecuci&oacute;n de aquellos proyectos, objetivos o actividades que les sean asignados, as&iacute; como de la gesti&oacute;n ordinaria de los asuntos de la competencia de la Subdirecci&oacute;n General";
 choices[70][1] = "ser&aacute;n nombrados, respetando los principios de igualdad, m&eacute;rito y capacidad, y cesados por el Ministro, Secretario de Estado o Subsecretario del que dependan";
 choices[70][2] = "sus nombramientos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, o de otras Administraciones, cuando as&iacute; lo prevean las normas de aplicaci&oacute;n, pertenecientes al Subgrupo A2";
 choices[70][3] = "todas son correctas";
 answers[70] = choices[70][1];
 units[70] = "4, 7, 8, 9";
 comments[70] = "Id Pregunta: 811. Ley 40/2015";


//  Id pregunta: 681 Año de creación de pregunta: 2016
 questions[71]= "72)  De acuerdo a la Ley 27/2011, de 1 de agosto, sobre actualizaci&oacute;n, adecuaci&oacute;n y modernizaci&oacute;n del sistema de Seguridad Social, la edad exigida de jubilaci&oacute;n:";
 choices[71]= new Array();
 choices[71][0] = "A partir del a&ntilde;o 2020, ser&aacute; de 67 a&ntilde;os para quellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un perido cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[71][1] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para quellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un perido cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[71][2] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para todas las personas con independencia del periodo cotizado.";
 choices[71][3] = "Aumenta progresivamente desde los 65 a los 67 a&ntilde;os desde el a&ntilde;o 2013 al 2027, si bien se mantiene en los 65 a&ntilde;os para personas con un periodo cotizado igual o mayor a 35 a&ntilde;os.";
 answers[71] = choices[71][1];
 units[71] = "14";
 comments[71] = "Id Pregunta: 681. Pensiones";


//  Id pregunta: 723 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;C&uacute;al es la principal ventaja de sprints m&aacute;s cortos en Scrum?";
 choices[72]= new Array();
 choices[72][0] = "Permite reaccionar al equipo mejor ante imprevistos";
 choices[72][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[72][2] = "Es m&aacute;s f&aacute;cil cumplir los objetivos marcados al final de cada sprint";
 choices[72][3] = "Ninguna de las anteriores";
 answers[72] = choices[72][1];
 units[72] = "34, 84";
 comments[72] = "Id Pregunta: 723. Metodologias &aacute;giles";


//  Id pregunta: 708 Año de creación de pregunta: 2016
 questions[73]= "74)  El Portal de Transparencia de la Administraci&oacute;n General del Estado depende del:";
 choices[73]= new Array();
 choices[73][0] = "Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[73][1] = "Ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[73][2] = "Ministerio de la Presidencia";
 choices[73][3] = "Ministerio de Fomento";
 answers[73] = choices[73][2];
 units[73] = "22";
 comments[73] = "Id Pregunta: 708. Portal de Transparencia";


//  Id pregunta: 727 Año de creación de pregunta: 2016
 questions[74]= "75)  Sobre el Scrum Team, cual es la afirmaci&oacute;n falsa";
 choices[74]= new Array();
 choices[74][0] = "Cada miembro del equipo tiene que tener un rol especifico y no puede asumir tareas que no est&eacute;n dentro de su &aacute;rea de especializaci&oacute;n.";
 choices[74][1] = "Los miembros del equipo deben tener un perfil en &lsquo;T&rsquo;";
 choices[74][2] = "Cada miembro del equipo tiene que tener un conocimiento m&aacute;s amplio de un &aacute;rea";
 choices[74][3] = "Cada miembro del equipo puede asumir cualquier tipo de tarea.";
 answers[74] = choices[74][0];
 units[74] = "34, 84";
 comments[74] = "Id Pregunta: 727. Metodologias &aacute;giles";


