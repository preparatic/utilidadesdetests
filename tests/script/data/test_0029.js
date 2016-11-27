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

//  Id pregunta: 328 Año de creación de pregunta: 2016
 questions[0]= "1)  El principal &oacute;rgano decisorio de la Comunidad Europea es:";
 choices[0]= new Array();
 choices[0][0] = "El Presidente del Consejo Europeo.";
 choices[0][1] = "La Comisi&oacute;n.";
 choices[0][2] = "El Consejo.";
 choices[0][3] = "El Parlamento Europeo.";
 answers[0] = choices[0][2];
 units[0] = "5";
 comments[0] = "Id Pregunta: 328. UNION EUROPEA";


//  Id pregunta: 471 Año de creación de pregunta: 2016
 questions[1]= "2)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la agrupaci&oacute;n de los cr&eacute;ditos en cap&iacute;tulos, art&iacute;culos, conceptos y subconceptos corresponde a la clasificaci&oacute;n:";
 choices[1]= new Array();
 choices[1][0] = "Org&aacute;nica.";
 choices[1][1] = "Contable.";
 choices[1][2] = "Econ&oacute;mica.";
 choices[1][3] = "Por programas.";
 answers[1] = choices[1][2];
 units[1] = "10";
 comments[1] = "Id Pregunta: 471. PRESUPUESTOS GENERALES";


//  Id pregunta: 442 Año de creación de pregunta: 2016
 questions[2]= "3)  Sobre la gu&iacute;a de Comunicaci&oacute;n Digital de la AGE, se&ntilde;ale la respuesta falsa:";
 choices[2]= new Array();
 choices[2][0] = "La Gu&iacute;a de Comunicaci&oacute;n Digital para la AGE ofrece un marco de criterios, recomendaciones y buenas pr&aacute;cticas a considerar al crear, generar contenidos o evolucionar sitios web, sedes electr&oacute;nicas o tambi&eacute;n blogs, cuentas o perfiles de redes sociales.";
 choices[2][1] = "Recoge aspectos como la imagen Institucional: uso de los logotipos del Gobierno de Espa&ntilde;a, elementos distintivos de imagen en las redes sociales o la imagen promocional de la administraci&oacute;n electr&oacute;nica.";
 choices[2][2] = "Se divide en tres partes, con fasc&iacute;culos que pueden ser utilizados independientemente seg&uacute;n las necesidades de cada responsable del sitio web.";
 choices[2][3] = "La &laquo;Gu&iacute;a de Comunicaci&oacute;n Digital para la Administraci&oacute;n General del Estado&raquo; que se aprueba mediante la presente Resoluci&oacute;n se aplicar&aacute; al a&ntilde;o siguiente al de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 answers[2] = choices[2][3];
 units[2] = "43";
 comments[2] = "Id Pregunta: 442. SERVICIOS COMUNES";


//  Id pregunta: 451 Año de creación de pregunta: 2016
 questions[3]= "4)  En los Presupuestos, &iquest;qu&eacute; es lo que se prev&eacute; liquidar?";
 choices[3]= new Array();
 choices[3][0] = "Los cr&eacute;ditos";
 choices[3][1] = "Las partidas presupuestarias";
 choices[3][2] = "Los derechos";
 choices[3][3] = "Las obligaciones";
 answers[3] = choices[3][2];
 units[3] = "10";
 comments[3] = "Id Pregunta: 451. PRESUPUESTOS GENERALES";


//  Id pregunta: 554 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Qu&eacute; &oacute;rgano europeo ha establecido las 16 iniciativas para llevar a cabo la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[4]= new Array();
 choices[4][0] = "El BCE";
 choices[4][1] = "El Parlamento";
 choices[4][2] = "El Consejo";
 choices[4][3] = "La Comisi&oacute;n";
 answers[4] = choices[4][3];
 units[4] = "17";
 comments[4] = "Id Pregunta: 554. Mercado &Uacute;nico Digital";


//  Id pregunta: 175 Año de creación de pregunta: 2016
 questions[5]= "6)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola en su Art&iacute;culo 159, los miembros del Tribunal Constitucional ser&aacute;n designados por un per&iacute;odo de:";
 choices[5]= new Array();
 choices[5][0] = "seis a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[5][1] = "nueve a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[5][2] = "ocho a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 choices[5][3] = "cuatro a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 answers[5] = choices[5][1];
 units[5] = "1";
 comments[5] = "Id Pregunta: 175. CONSTITUCION1978";


//  Id pregunta: 249 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[6]= new Array();
 choices[6][0] = "Art&iacute;culo 16.2.";
 choices[6][1] = "Art&iacute;culo 17.1.";
 choices[6][2] = "Art&iacute;culo 18.1.";
 choices[6][3] = "Art&iacute;culo 18.2.";
 answers[6] = choices[6][0];
 units[6] = "1";
 comments[6] = "Id Pregunta: 249. CONSTITUCION1978";


//  Id pregunta: 425 Año de creación de pregunta: 2016
 questions[7]= "8)  Todos los tribunales y &oacute;rganos de selecci&oacute;n del personal de la Administraci&oacute;n General del Estado y los organismos p&uacute;blicos vinculados o dependientes de ella responder&aacute;n al principio:";
 choices[7]= new Array();
 choices[7][0] = "Presencia equilibrada.";
 choices[7][1] = "Presencia paritaria.";
 choices[7][2] = "Presencia consensuada.";
 choices[7][3] = "presencia horizontal.";
 answers[7] = choices[7][0];
 units[7] = "14";
 comments[7] = "Id Pregunta: 425. POLITICAS DE IGUALDAD";


//  Id pregunta: 466 Año de creación de pregunta: 2016
 questions[8]= "9)  A tenor del art&iacute;culo 34 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el ejercicio presupuestario coincidir&aacute;:";
 choices[8]= new Array();
 choices[8][0] = "Con el a&ntilde;o anterior.";
 choices[8][1] = "Con los tres a&ntilde;os anteriores.";
 choices[8][2] = "Con el a&ntilde;o natural.";
 choices[8][3] = "Con los dos a&ntilde;os anteriores.";
 answers[8] = choices[8][2];
 units[8] = "10";
 comments[8] = "Id Pregunta: 466. PRESUPUESTOS GENERALES";


//  Id pregunta: 491 Año de creación de pregunta: 2016
 questions[9]= "10)  Seg&uacute;n Ley 47/2003, de 26 de noviembre, General Presupuestaria, el conjunto de gastos que se considera necesario realizar en el desarrollo de actividades orientadas a la consecuci&oacute;n de determinados objetivos preestablecidos es:";
 choices[9]= new Array();
 choices[9][0] = "Un programa presupuestario.";
 choices[9][1] = "Un concepto presupuestario.";
 choices[9][2] = "Una aplicaci&oacute;n presupuestaria.";
 choices[9][3] = "Un cr&eacute;dito presupuestario.";
 answers[9] = choices[9][0];
 units[9] = "10";
 comments[9] = "Id Pregunta: 491. PRESUPUESTOS GENERALES";


//  Id pregunta: 731 Año de creación de pregunta: 2016
 questions[10]= "11)  Cu&aacute;l de las siguientes reglas se corresponde a las reglas de la metodolog&iacute;a Kanban:";
 choices[10]= new Array();
 choices[10][0] = "Visualizar el trabajo o el flujo de trabajo. ";
 choices[10][1] = "Determinar el l&iacute;mite de trabajo en curso (Work in progress)";
 choices[10][2] = "Medir el tiempo en completar una tarea (Lead time)";
 choices[10][3] = "Todas las anteriores son reglas correspondientes a la metodolog&iacute;a Kanban.";
 answers[10] = choices[10][3];
 units[10] = "34, 84";
 comments[10] = "Id Pregunta: 731. Metodologias &aacute;giles";


//  Id pregunta: 13 Año de creación de pregunta: 2016
 questions[11]= "12)  JNDI se usa para el acceso a:";
 choices[11]= new Array();
 choices[11][0] = "Datos de ficheros";
 choices[11][1] = "Sistemas gestores de bases de datos";
 choices[11][2] = "Directorios de nombres";
 choices[11][3] = "Colas de mensajer&iacute;a";
 answers[11] = choices[11][2];
 units[11] = "64";
 comments[11] = "Id Pregunta: 13. AGE A1 2015";


//  Id pregunta: 770 Año de creación de pregunta: 2016
 questions[12]= "13)  Sin perjuicio de la responsabilidad disciplinaria en que se pueda incurrir, el incumplimiento de las instrucciones u &oacute;rdenes de servicio:";
 choices[12]= new Array();
 choices[12][0] = "no afecta por s&iacute; solo a la validez de los actos dictados por los &oacute;rganos administrativos";
 choices[12][1] = "supone la invalidez de los actos dictados por los &oacute;rganos administrativos";
 choices[12][2] = "supone la nulidad de los actos dictados por los &oacute;rganos administrativos";
 choices[12][3] = "supone la anulabilidad de los actos dictados por los &oacute;rganos administrativos";
 answers[12] = choices[12][0];
 units[12] = "4, 7, 8, 9";
 comments[12] = "Id Pregunta: 770. Ley 40/2015";


//  Id pregunta: 536 Año de creación de pregunta: 2016
 questions[13]= "14)  En el registro electr&oacute;nico general de apoderamientos, deber&aacute;n inscribirse, al menos, los de car&aacute;cter general otorgados por quien ostente la condici&oacute;n de interesado en un procedimiento administrativo a favor de representante:";
 choices[13]= new Array();
 choices[13][0] = "apud acta";
 choices[13][1] = "presencialmente";
 choices[13][2] = "electr&oacute;nicamente";
 choices[13][3] = "todas son correctas";
 answers[13] = choices[13][3];
 units[13] = "7";
 comments[13] = "Id Pregunta: 536. LEY 39/2015";


//  Id pregunta: 15 Año de creación de pregunta: 2016
 questions[14]= "15)  Si una aplicaci&oacute;n web desplegada en una JVM utiliza un servlet para generar p&aacute;ginas web de forma din&aacute;mica, dicho servlet no implementa la interfaz SingleThreadModel, y en un momento determinado se encuentra recibiendo m&uacute;ltiples peticiones de clientes de forma concurrente, &iquest;cu&aacute;ntos objetos de dicha clase estar&aacute;n cargados en la memoria de la JVM?";
 choices[14]= new Array();
 choices[14][0] = "0";
 choices[14][1] = "1";
 choices[14][2] = "Tantos como peticiones concurrentes tenga.";
 choices[14][3] = "Tantos como le permita la memoria de la JVM.";
 answers[14] = choices[14][1];
 units[14] = "64";
 comments[14] = "Id Pregunta: 15. AGE A1 2015";


//  Id pregunta: 672 Año de creación de pregunta: 2016
 questions[15]= "16)  En cuanto a la Historia Cl&iacute;nica Digital del Sistema Nacional de Salud, se&ntilde;ale cual de las siguientes afirmaciones es Incorrecta:";
 choices[15]= new Array();
 choices[15][0] = "Se ha implementado por mandato legal, tanto por la Ley 16/2003 de cohesi&oacute;n y calidad del Sistema Nacional de Salud, como por la Ley 41/2002 de Autonom&iacute;a del Paciente.";
 choices[15][1] = "Permite que los profesionales sanitarios puedan acceder a los datos de salud del paciente, cuando este se encuentre desplazado fuera de su Comunidad Aut&oacute;noma de origen y requiera asistencia sanitaria.";
 choices[15][2] = "De acuerdo a su dise&ntilde;o funcional, permite acceder a la totalidad de los contenidos existentes en la Historia Cl&iacute;nica Electr&oacute;nica de las Comunidades Aut&oacute;nomas.";
 choices[15][3] = "Gracias a ella, de acuerdo al informe CORA de Febrero de 2016, ya son 25,5 millones de ciudadanos los que disponen de informes cl&iacute;nicos en el Sstema Nacional de Salud.";
 answers[15] = choices[15][2];
 units[15] = "47";
 comments[15] = "Id Pregunta: 672. Historia Cl&iacute;nica Digital";


//  Id pregunta: 341 Año de creación de pregunta: 2016
 questions[16]= "17)  Tras la cuarta ampliaci&oacute;n de la Uni&oacute;n (Austria, Suecia y Finlandia), el n&uacute;mero total de diputados se estableci&oacute; en:";
 choices[16]= new Array();
 choices[16][0] = "623";
 choices[16][1] = "649";
 choices[16][2] = "626";
 choices[16][3] = "565";
 answers[16] = choices[16][2];
 units[16] = "5";
 comments[16] = "Id Pregunta: 341. UNION EUROPEA";


//  Id pregunta: 26 Año de creación de pregunta: 2016
 questions[17]= "18)  Usted, como directivo TIC de la AGE, decide crear un portal web, con una direcci&oacute;n electr&oacute;nica nueva, con el objetivo de informar al ciudadano sobre determinados aspectos relacionados con su unidad. &iquest;Cu&aacute;l de los siguientes tipos de certificado utilizar&iacute;a para identificar a los servidores de su portal informativo?";
 choices[17]= new Array();
 choices[17][0] = "Sello electr&oacute;nico";
 choices[17][1] = "Sede electr&oacute;nica";
 choices[17][2] = "Servidor seguro (SSL/TLS)";
 choices[17][3] = "Empleado p&uacute;blico";
 answers[17] = choices[17][2];
 units[17] = "7";
 comments[17] = "Id Pregunta: 26. AGE A1 2015";


//  Id pregunta: 178 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Qu&eacute; es lo que caracteriza un decreto-ley?";
 choices[18]= new Array();
 choices[18][0] = "No puede afectar al ordenamiento de las instituciones b&aacute;sicas del Estado.";
 choices[18][1] = "Es dictado por las Cortes Generales en casos de urgente necesidad.";
 choices[18][2] = "Es dictado por el Presidente del Gobierno en casos de extraordinaria y urgente necesidad.";
 choices[18][3] = "Es dictado por el Gobierno por encargo de las Cortes Generales.";
 answers[18] = choices[18][0];
 units[18] = "1";
 comments[18] = "Id Pregunta: 178. CONSTITUCION1978";


//  Id pregunta: 550 Año de creación de pregunta: 2016
 questions[19]= "20)  Entre las funciones a desarrollar por la Comisi&oacute;n Sectorial de la administraci&oacute;n electr&oacute;nica NO se encuentra:";
 choices[19]= new Array();
 choices[19][0] = "Asegurar la compatibilidad e interoperabilidad de los sistemas y aplicaciones empleados por las Administraciones P&uacute;blicas.";
 choices[19][1] = "Impulsar el desarrollo de la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a.";
 choices[19][2] = "Asegurar la cooperaci&oacute;n entre las Administraciones P&uacute;blicas para proporcionar informaci&oacute;n administrativa clara, actualizada e inequ&iacute;voca.";
 choices[19][3] = "El seguimiento de la ejecuci&oacute;n del Plan de Transformaci&oacute;n Digital";
 answers[19] = choices[19][3];
 units[19] = "26";
 comments[19] = "Id Pregunta: 550. Gobernanza TIC";


//  Id pregunta: 762 Año de creación de pregunta: 2016
 questions[20]= "21)  Las Administraciones P&uacute;blicas act&uacute;an para el cumplimiento de sus fines con:";
 choices[20]= new Array();
 choices[20][0] = "personalidad jur&iacute;dica propia";
 choices[20][1] = "personalidad jur&iacute;dica &uacute;nica";
 choices[20][2] = "personalidad jur&iacute;dica plena";
 choices[20][3] = "personalidad jur&iacute;dica f&iacute;sica";
 answers[20] = choices[20][1];
 units[20] = "4, 7, 8, 9";
 comments[20] = "Id Pregunta: 762. Ley 40/2015";


//  Id pregunta: 25 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Mediante qu&eacute; tipo de objetos se implementa el acceso a los recursos gestionados con la tecnolog&iacute;a JMX?";
 choices[21]= new Array();
 choices[21][0] = "SessionBean";
 choices[21][1] = "JavaBean";
 choices[21][2] = "MBeans";
 choices[21][3] = "MessageDrivenBean";
 answers[21] = choices[21][2];
 units[21] = "64";
 comments[21] = "Id Pregunta: 25. AGE A1 2015";


//  Id pregunta: 647 Año de creación de pregunta: 2016
 questions[22]= "23)  En Itil V3, entre los factores que hay que tener en cuenta en la evaluaci&oacute;n de herramientas de Gesti&oacute;n del Servicio se encuentran:";
 choices[22]= new Array();
 choices[22][0] = "Estructura, tratamiento, integraci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[22][1] = "structura, salvaguarda, integraci&oacute;n de datos, flexibilidad de implementaci&oacute;n, uso y comunicaci&oacute;n de datos.";
 choices[22][2] = "Estructura, tratamiento, inspecci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[22][3] = "Responsabilidad, tratamiento, inspecci&oacute;n de datos y soporte a la monitorizaci&oacute;n de los niveles de servicio.";
 answers[22] = choices[22][0];
 units[22] = "101";
 comments[22] = "Id Pregunta: 647. Junta de Extremadura A1 2015";


//  Id pregunta: 690 Año de creación de pregunta: 2016
 questions[23]= "24)  El Reglamento (UE) 910/2014 entra en vigor:";
 choices[23]= new Array();
 choices[23][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[23][1] = "A los 20 d&iacute;as de su publicaci&oacute;n en el Diario Oficial de la Uni&oacute;n Europea (DOUE)";
 choices[23][2] = "A partir del 1 de enero de 2015";
 choices[23][3] = "A partir del 1 de julio de 2016";
 answers[23] = choices[23][1];
 units[23] = "77";
 comments[23] = "Id Pregunta: 690. Art&iacute;culo 52 del Reglamento 910/2014";


//  Id pregunta: 490 Año de creación de pregunta: 2016
 questions[24]= "25)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la obligaci&oacute;n de pagar los intereses de la Deuda del Estado y la de devolver los capitales llamados a reembolso, contados respectivamente a partir del vencimiento de los intereses y del d&iacute;a del llamamiento a reembolso prescribir&aacute;:";
 choices[24]= new Array();
 choices[24][0] = "A los cinco a&ntilde;os.";
 choices[24][1] = "A los dos a&ntilde;os.";
 choices[24][2] = "A los tres a&ntilde;os.";
 choices[24][3] = "A los cuatro a&ntilde;os.";
 answers[24] = choices[24][0];
 units[24] = "10";
 comments[24] = "Id Pregunta: 490. PRESUPUESTOS GENERALES";


//  Id pregunta: 732 Año de creación de pregunta: 2016
 questions[25]= "26)  Indique la opci&oacute;n correcta en relaci&oacute;n con la VISI&Oacute;N de la Estrategia TIC";
 choices[25]= new Array();
 choices[25][0] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser electr&oacute;nica.";
 choices[25][1] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser digital.";
 choices[25][2] = "Para el a&ntilde;o 2020 ya no existir&aacute; ning&uacute;n procedimiento en soporte papel.";
 choices[25][3] = "En el a&ntilde;o 2020 los funcionarios realizar&aacute;n todas sus tareas con ordenador.";
 answers[25] = choices[25][1];
 units[25] = "28";
 comments[25] = "Id Pregunta: 732. Estrategia TIC";


//  Id pregunta: 676 Año de creación de pregunta: 2016
 questions[26]= "27)  Son servicios previstos en el cat&aacute;logo de servicios de la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia:";
 choices[26]= new Array();
 choices[26][0] = "Los servicios de teleasistencia, de ayuda a domicilio y de formaci&oacute;n.";
 choices[26][1] = "Los servicios de ayuda a domicilio, de teleasistencia y de centro de d&iacute;a y de noche.";
 choices[26][2] = "Los servicios de teleasistencia, de atenci&oacute;n residencial y de sede electr&oacute;nica.";
 choices[26][3] = "Los servicios de prevenci&oacute;n, de ayuda a domicilio y de ambulancia.";
 answers[26] = choices[26][1];
 units[26] = "14";
 comments[26] = "Id Pregunta: 676. Dependencia";


//  Id pregunta: 605 Año de creación de pregunta: 2016
 questions[27]= "28)  En ITIL v3, entre los procesos de la &ldquo;Fase del Ciclo de Vida: Dise&ntilde;o del Servicio&rdquo;, est&aacute;n:";
 choices[27]= new Array();
 choices[27][0] = "Gesti&oacute;n del Cat&aacute;logo de Servicios y Gesti&oacute;n de la Cartera de Servicios.";
 choices[27][1] = "Gesti&oacute;n de la Cartera de Servicio y Gesti&oacute;n de la Seguridad de la Informaci&oacute;n.";
 choices[27][2] = "Gesti&oacute;n de la Disponibilidad y Gesti&oacute;n de la Capacidad.";
 choices[27][3] = "Gesti&oacute;n de Suministradores y Gesti&oacute;n de Eventos.";
 answers[27] = choices[27][2];
 units[27] = "101";
 comments[27] = "Id Pregunta: 605. Junta de Extremadura A1 2015";


//  Id pregunta: 630 Año de creación de pregunta: 2016
 questions[28]= "29)  Seg&uacute;n el Reglamento de Medidas de Seguridad de Ficheros Automatizados con Datos de Car&aacute;cter Personal, los ficheros que contengan datos de ideolog&iacute;a, religi&oacute;n, creencias, origen racial, salud o vida sexual, &iquest;qu&eacute; medidas de seguridad deber&aacute;n adoptar?";
 choices[28]= new Array();
 choices[28][0] = "De nivel b&aacute;sico y nivel medio.";
 choices[28][1] = "De nivel alto.";
 choices[28][2] = "De nivel medio y nivel alto.";
 choices[28][3] = "De nivel b&aacute;sico, nivel medio y nivel alto.";
 answers[28] = choices[28][3];
 units[28] = "35";
 comments[28] = "Id Pregunta: 630. Junta de Extremadura A1 2015";


//  Id pregunta: 645 Año de creación de pregunta: 2016
 questions[29]= "30)  Seg&uacute;n la ley de igualdad entre mujeres y hombres y contra la violencia de g&eacute;nero en Extremadura: &iquest;qu&eacute; &oacute;rgano tiene como fin esencial promover las condiciones para que la igualdad entre los sexos sea real y efectiva dentro del &aacute;mbito de competencias de la Junta de Extremadura?";
 choices[29]= new Array();
 choices[29][0] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sociales.";
 choices[29][1] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sanitarias.";
 choices[29][2] = "El Organismo P&uacute;blico de la Mujer.";
 choices[29][3] = "El Instituto de la Mujer de Extremadura.";
 answers[29] = choices[29][3];
 units[29] = "14";
 comments[29] = "Id Pregunta: 645. Junta de Extremadura A1 2015";


//  Id pregunta: 465 Año de creación de pregunta: 2016
 questions[30]= "31)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales deber&aacute; de contener:";
 choices[30]= new Array();
 choices[30][0] = "Las respuestas a) y b) son correctas.";
 choices[30][1] = "Las respuestas a) y b) no son correctas.";
 choices[30][2] = "Contenido coherente con los planes sectoriales.";
 choices[30][3] = "Programas de actuaci&oacute;n de existentes en el &aacute;mbito de cada departamento.";
 answers[30] = choices[30][0];
 units[30] = "10";
 comments[30] = "Id Pregunta: 465. PRESUPUESTOS GENERALES";


//  Id pregunta: 497 Año de creación de pregunta: 2016
 questions[31]= "32)  Las Obligaciones de la Hacienda P&uacute;blica Estatal se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[31]= new Array();
 choices[31][0] = "T&iacute;tulo II, Cap&iacute;tulo I, Secci&oacute;n 1.";
 choices[31][1] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[31][2] = "T&iacute;tulo I, Cap&iacute;tulo I, Secci&oacute;n 4.";
 choices[31][3] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[31] = choices[31][3];
 units[31] = "10";
 comments[31] = "Id Pregunta: 497. PRESUPUESTOS GENERALES";


//  Id pregunta: 474 Año de creación de pregunta: 2016
 questions[32]= "33)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los interventores delegados ser&aacute;n designados entre funcionarios de los Cuerpos:";
 choices[32]= new Array();
 choices[32][0] = "Cuerpo Superior de Interventores y Auditores del Estado.";
 choices[32][1] = "Todas las respuestas son correctas.";
 choices[32][2] = "Cuerpo Militar de Intervenci&oacute;n de la Defensa.";
 choices[32][3] = "Cuerpo Superior de Intervenci&oacute;n y Contabilidad de Administraci&oacute;n de la Seguridad Social.";
 answers[32] = choices[32][1];
 units[32] = "10";
 comments[32] = "Id Pregunta: 474. PRESUPUESTOS GENERALES";


//  Id pregunta: 346 Año de creación de pregunta: 2016
 questions[33]= "34)  La duraci&oacute;n del mandato de un diputado del Parlamento Europeo es de:";
 choices[33]= new Array();
 choices[33][0] = "25 diputados lo son con car&aacute;cter vitalicio y el resto se renueva cada cinco a&ntilde;os.";
 choices[33][1] = "Cuatro a&ntilde;os, como un diputado espa&ntilde;ol.";
 choices[33][2] = "Cinco a&ntilde;os.";
 choices[33][3] = "Ninguna es correcta.";
 answers[33] = choices[33][2];
 units[33] = "5";
 comments[33] = "Id Pregunta: 346. UNION EUROPEA";


//  Id pregunta: 168 Año de creación de pregunta: 2016
 questions[34]= "35)  En relaci&oacute;n la conectividad desde dispositivos m&oacute;viles en Europa";
 choices[34]= new Array();
 choices[34][0] = "A partir de 15 de Julio de 2017 los operadores solo podr&aacute;n cobrar un extra adicional m&aacute;ximo 1 &euro; /min en llamadas de voz, en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[34][1] = "No existe regulaci&oacute;n sobre el roaming en la UE, sino sobre la portabilidad, que ser&aacute; prohibida a partir del 15 de Julio de 2017.";
 choices[34][2] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[34][3] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de portabilidad al viajar a otro pa&iacute;s de la UE.";
 answers[34] = choices[34][2];
 units[34] = "19";
 comments[34] = "Id Pregunta: 168. https://ec.europa.eu/digital-single-market/en/roaming";


//  Id pregunta: 382 Año de creación de pregunta: 2016
 questions[35]= "36)  Seg&uacute;n la ley org&aacute;nica 3/2007, los actos y las cl&aacute;usulas de los negocios jur&iacute;dicos que causen discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[35]= new Array();
 choices[35][0] = "Se considerar&aacute;n nulos y sin efecto.";
 choices[35][1] = "Est&aacute;n sometidos a una tasa fiscal especial (Tasa Tobin)";
 choices[35][2] = "Son impugnables ante los juzgados especiales contra la violencia de g&eacute;nero.";
 choices[35][3] = "Si son actos administrativos, el recurso se debe interponer, en todo caso, ante el Ministerio de Igualdad.";
 answers[35] = choices[35][0];
 units[35] = "14";
 comments[35] = "Id Pregunta: 382. POLITICAS DE IGUALDAD";


//  Id pregunta: 224 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[36]= new Array();
 choices[36][0] = "Art&iacute;culo 16.2.";
 choices[36][1] = "Art&iacute;culo 17.1.";
 choices[36][2] = "Art&iacute;culo 18.1.";
 choices[36][3] = "Art&iacute;culo 18.2.";
 answers[36] = choices[36][2];
 units[36] = "1";
 comments[36] = "Id Pregunta: 224. CONSTITUCION1978";


//  Id pregunta: 177 Año de creación de pregunta: 2016
 questions[37]= "38)  El art&iacute;culo 152 de la Constituci&oacute;n espa&ntilde;ola se refiere a la organizaci&oacute;n instituicional b&aacute;sica de cada Comunidad Aut&oacute;noma, la cual se basar&aacute; en:";
 choices[37]= new Array();
 choices[37][0] = "Una Conseller&iacute;a legislativa, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[37][1] = "Una Asamble legislativa, un Presidente, un Delegado de Gobierno y un Comit&eacute; Superior del Poder Judicial.";
 choices[37][2] = "Una Asamble legislativa, un Consejo de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[37][3] = "Un Consejo legislativo, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Supremo.";
 answers[37] = choices[37][2];
 units[37] = "1";
 comments[37] = "Id Pregunta: 177. CONSTITUCION1978";


//  Id pregunta: 183 Año de creación de pregunta: 2016
 questions[38]= "39)  Seg&uacute;n el Art&iacute;culo 113 de la Constituci&oacute;n Espa&ntilde;ola, la moci&oacute;n de censura deber&aacute; ser propuesta:";
 choices[38]= new Array();
 choices[38][0] = "al menos por 50 Diputados.";
 choices[38][1] = "al menos por la d&eacute;cima parte de los Diputados.";
 choices[38][2] = "por la Mesa del Congreso de los Diputados.";
 choices[38][3] = "al menos por dos grupos pol&iacute;ticos del Congreso de los Diputados.";
 answers[38] = choices[38][1];
 units[38] = "1";
 comments[38] = "Id Pregunta: 183. CONSTITUCION1978";


//  Id pregunta: 345 Año de creación de pregunta: 2016
 questions[39]= "40)  El procedimiento de dictamen simple o dictamen consultivo significa que:";
 choices[39]= new Array();
 choices[39][0] = "El Consejo debe obtener la aprobaci&oacute;n del Parlamento Europeo para que se tomen determinadas decisiones de primera importancia.";
 choices[39][1] = "Por el que se da poder al Parlamento Europeo para una mayor posibilidad de influir sobre el proceso legislativo mediante una &quot;doble lectura&quot; de las propuestas legislativas de la Comisi&oacute;n.";
 choices[39][2] = "Por el que se da poder al Parlamento Europeo para aprobar disposiciones conjuntamente con el Consejo.";
 choices[39][3] = "El Consejo consulte al Parlamento Europeo y tome sus puntos de vista en consideraci&oacute;n.";
 answers[39] = choices[39][3];
 units[39] = "5";
 comments[39] = "Id Pregunta: 345. UNION EUROPEA";


//  Id pregunta: 315 Año de creación de pregunta: 2016
 questions[40]= "41)  El Colegio de Comisarios se re&uacute;ne:";
 choices[40]= new Array();
 choices[40][0] = "Una vez por semana.";
 choices[40][1] = "Una vez al mes.";
 choices[40][2] = "Dos veces en semana.";
 choices[40][3] = "Cuando lo acuerde el Presidente de la Comisi&oacute;n, y adem&aacute;s una vez al mes.";
 answers[40] = choices[40][0];
 units[40] = "5";
 comments[40] = "Id Pregunta: 315. UNION EUROPEA";


//  Id pregunta: 73 Año de creación de pregunta: 2016
 questions[41]= "42)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Digitalizaci&oacute;n de Documentos, &iquest;cu&aacute;l de los siguientes metadatos no es considerado como metadato complementario?";
 choices[41]= new Array();
 choices[41][0] = "Resoluci&oacute;n, que indica el valor de resoluci&oacute;n en p&iacute;xeles por pulgada empleada en la digitalizaci&oacute;n.";
 choices[41][1] = "Origen, que indica si el contenido del documento fue creado por un ciudadano o por una administraci&oacute;n.";
 choices[41][2] = "Tama&ntilde;o, que indica el valor y unidades del tama&ntilde;o l&oacute;gico del documento digitalizado.";
 choices[41][3] = "Idioma, que indica el idioma del contenido del documento digitalizado.";
 answers[41] = choices[41][1];
 units[41] = "44";
 comments[41] = "Id Pregunta: 73. AGE A1 2015";


//  Id pregunta: 18 Año de creación de pregunta: 2016
 questions[42]= "43)  Indique en qu&eacute; capa del modelo OSI se establece la encriptaci&oacute;n:";
 choices[42]= new Array();
 choices[42][0] = "Aplicaci&oacute;n";
 choices[42][1] = "Sesi&oacute;n";
 choices[42][2] = "Presentaci&oacute;n";
 choices[42][3] = "Transporte";
 answers[42] = choices[42][2];
 units[42] = "105";
 comments[42] = "Id Pregunta: 18. AGE A1 2015";


//  Id pregunta: 635 Año de creación de pregunta: 2016
 questions[43]= "44)  En el modelo relacional existen diversas clasificaciones de las relaciones. Indica qu&eacute; tipos de relaciones se consideran relaciones persistentes:";
 choices[43]= new Array();
 choices[43][0] = "Relaciones base y vistas.";
 choices[43][1] = "Relaciones base, vistas y el resultado de una consulta.";
 choices[43][2] = "Relaciones base, vistas y relaciones temporales.";
 choices[43][3] = "Relaciones base, vistas e instant&aacute;neas.";
 answers[43] = choices[43][3];
 units[43] = "60";
 comments[43] = "Id Pregunta: 635. Junta de Extremadura A1 2015";


//  Id pregunta: 428 Año de creación de pregunta: 2016
 questions[44]= "45)  Cuando el periodo de vacaciones coincida con una incapacidad temporal derivada del embarazo, parto o lactancia natural, o con el permiso de maternidad, o con su ampliaci&oacute;n por lactancia, la empleada p&uacute;blica:";
 choices[44]= new Array();
 choices[44][0] = "Perder&aacute; el derecho a vacaciones.";
 choices[44][1] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, siempre que no haya terminado el a&ntilde;o natural que le corresponda.";
 choices[44][2] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, aunque haya terminado el a&ntilde;o natural que le corresponda.";
 choices[44][3] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta dependiendo de la acumulaci&oacute;n de trabajo en al AAPP.";
 answers[44] = choices[44][2];
 units[44] = "14";
 comments[44] = "Id Pregunta: 428. POLITICAS DE IGUALDAD";


//  Id pregunta: 186 Año de creación de pregunta: 2016
 questions[45]= "46)  En cuanto a las fuentes del derecho, las normas jur&iacute;dicas contenidas en los tratados internacionales:";
 choices[45]= new Array();
 choices[45][0] = "ser&aacute;n de aplicaci&oacute;n directa en Espa&ntilde;a-";
 choices[45][1] = "ser&aacute;n de aplicaci&oacute;n directa y pasar&aacute;n a formar parte del ordenamiento interno una vez ratificadas por Espa&ntilde;a.";
 choices[45][2] = "no ser&aacute;n de aplicaci&oacute;n directa en Espapa en tanto no hayan pasado a formar parte ddel ordenamiento interno mediante su publicaci&oacute;n oficial en Espa&ntilde;a.";
 choices[45][3] = "ratificados por Espala y publicadas en el BOE, no son fuente de derecho.";
 answers[45] = choices[45][2];
 units[45] = "1";
 comments[45] = "Id Pregunta: 186. CONSTITUCION1978";


//  Id pregunta: 212 Año de creación de pregunta: 2016
 questions[46]= "47)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con la regulaci&oacute;n constitucional de la composici&oacute;n del Senado:";
 choices[46]= new Array();
 choices[46][0] = "La poblaci&oacute;n de Melilla elegir&aacute; dos Senadores.";
 choices[46][1] = "En cada provincia se elegir&aacute;n tres senadores.";
 choices[46][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas elegir&aacute;n un senador cuando su poblaci&oacute;n supere el mill&oacute;n de habitantes.";
 choices[46][3] = "El Senado se compone de 350 senadores.";
 answers[46] = choices[46][0];
 units[46] = "1";
 comments[46] = "Id Pregunta: 212. CONSTITUCION1978";


//  Id pregunta: 516 Año de creación de pregunta: 2016
 questions[47]= "48)  Las Universidades p&uacute;blicas:";
 choices[47]= new Array();
 choices[47][0] = "se regir&aacute;n &uacute;nicamente por su normativa espec&iacute;fica";
 choices[47][1] = "se regir&aacute;n por su normativa espec&iacute;fica y supletoriamente por las previsiones de esta Ley";
 choices[47][2] = "se regir&aacute;n por las previsiones de esta Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[47][3] = "se regir&aacute;n &uacute;nicamente por las previsiones de esta Ley";
 answers[47] = choices[47][1];
 units[47] = "7";
 comments[47] = "Id Pregunta: 516. LEY 39/2015";


//  Id pregunta: 77 Año de creación de pregunta: 2016
 questions[48]= "49)  Respecto al uso de servicios de firma de documentos electr&oacute;nicos mediante certificados electr&oacute;nicos centralizados, mediante el sistema Cl@ve, indique cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[48]= new Array();
 choices[48][0] = "Para poder acceder al servicio, el usuario deber&aacute; solicitar previa y expresamente la emisi&oacute;n de los certificados electr&oacute;nicos centralizados correspondientes.";
 choices[48][1] = "Los certificados electr&oacute;nicos centralizados ser&aacute;n emitidos con las mismas garant&iacute;as de identificaci&oacute;n del DNI electr&oacute;nico del ciudadano.";
 choices[48][2] = "El acceso al servicio requiere en todo caso que el usuario se haya registrado en Cl@ve y haya activado su Cl@ve permanente.";
 choices[48][3] = "En el momento de la identificaci&oacute;n, se requerir&aacute; la utilizaci&oacute;n de una verificaci&oacute;n de seguridad adicional mediante un c&oacute;digo de un solo uso y validez limitada en el tiempo que se enviar&aacute; al tel&eacute;fono m&oacute;vil del usuario registrado.";
 answers[48] = choices[48][2];
 units[48] = "47";
 comments[48] = "Id Pregunta: 77. AGE A1 2015";


//  Id pregunta: 769 Año de creación de pregunta: 2016
 questions[49]= "50)  Las instrucciones y &oacute;rdenes de servicio se publicar&aacute;n en el bolet&iacute;n oficial que corresponda, sin perjuicio de su difusi&oacute;n de acuerdo con lo previsto en la Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno cuando:";
 choices[49]= new Array();
 choices[49][0] = "una disposici&oacute;n espec&iacute;fica as&iacute; lo establezca";
 choices[49][1] = "se estime conveniente por raz&oacute;n de los destinatarios";
 choices[49][2] = "se estime conveniente por raz&oacute;n de los efectos que puedan producirse";
 choices[49][3] = "todas son correctas";
 answers[49] = choices[49][3];
 units[49] = "4, 7, 8, 9";
 comments[49] = "Id Pregunta: 769. Ley 40/2015";


//  Id pregunta: 834 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Qu&eacute; t&eacute;cnica de cooperaci&oacute;n se regula por primera vez con la Ley 40/2015?";
 choices[50]= new Array();
 choices[50][0] = "Conferencia de Presidentes.";
 choices[50][1] = "Convenios de colaboraci&oacute;n.";
 choices[50][2] = "Comisiones Bilaterales de Cooperaci&oacute;n.";
 choices[50][3] = "Conferencias Sectoriales.";
 answers[50] = choices[50][0];
 units[50] = "4, 7, 8, 9";
 comments[50] = "Id Pregunta: 834. Ley 40/2015";


//  Id pregunta: 511 Año de creación de pregunta: 2016
 questions[51]= "52)  Cuando resulte eficaz, proporcionado y necesario para la consecuci&oacute;n de los fines propios del procedimiento, y de manera motivada, podr&aacute;n incluirse tr&aacute;mites adicionales o distintos a los contemplados en esta Ley:";
 choices[51]= new Array();
 choices[51][0] = "solo mediante ley";
 choices[51][1] = "reglamentariamente";
 choices[51][2] = "mediante ley o reglamentariamente";
 choices[51][3] = "ninguna es correcta";
 answers[51] = choices[51][0];
 units[51] = "7";
 comments[51] = "Id Pregunta: 511. LEY 39/2015";


//  Id pregunta: 403 Año de creación de pregunta: 2016
 questions[52]= "53)  El plan estrat&eacute;gico de Igualdad de Oportunidades incluir&aacute;:";
 choices[52]= new Array();
 choices[52][0] = "Medidas de igualdad.";
 choices[52][1] = "Objetivos de igualdad.";
 choices[52][2] = "Ambas son correctas.";
 choices[52][3] = "A y B son incorrectas.";
 answers[52] = choices[52][2];
 units[52] = "14";
 comments[52] = "Id Pregunta: 403. POLITICAS DE IGUALDAD";


//  Id pregunta: 530 Año de creación de pregunta: 2016
 questions[53]= "54)  La representaci&oacute;n podr&aacute; acreditarse:";
 choices[53]= new Array();
 choices[53][0] = "mediante cualquier t&iacute;tulo jur&iacute;dico";
 choices[53][1] = "mediante resoluci&oacute;n judicial especial";
 choices[53][2] = "&uacute;nicamente mediante poder notarial";
 choices[53][3] = "mediante cualquier medio v&aacute;lido en Derecho que deje constancia fidedigna de su existencia";
 answers[53] = choices[53][3];
 units[53] = "7";
 comments[53] = "Id Pregunta: 530. LEY 39/2015";


//  Id pregunta: 586 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;Cu&aacute;l es el per&iacute;odo temporal del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[54]= new Array();
 choices[54][0] = "Comprende del a&ntilde;o 2015 al 2017";
 choices[54][1] = "Comprende del a&ntilde;o 2015 al 2020";
 choices[54][2] = "Comprende del a&ntilde;o 2016 al 2018";
 choices[54][3] = "Ninguna de las anteriores";
 answers[54] = choices[54][1];
 units[54] = "19";
 comments[54] = "Id Pregunta: 586. Estrategia TIC";


//  Id pregunta: 809 Año de creación de pregunta: 2016
 questions[55]= "56)  Los Delegados del Gobierno (se&ntilde;ala la incorrecta):";
 choices[55]= new Array();
 choices[55][0] = "representan al Gobierno de la Naci&oacute;n en el territorio de la respectiva Comunidad Aut&oacute;noma";
 choices[55][1] = "dirigir&aacute;n y supervisar&aacute;n la Administraci&oacute;n General del Estado en el territorio de las respectivas Comunidades Aut&oacute;nomas";
 choices[55][2] = "son &oacute;rganos directivos con rango de Director general";
 choices[55][3] = "ser&aacute;n nombrados y separados por Real Decreto del Consejo de Ministros, a propuesta del Presidente del Gobierno";
 answers[55] = choices[55][2];
 units[55] = "4, 7, 8, 9";
 comments[55] = "Id Pregunta: 809. Ley 40/2015";


//  Id pregunta: 329 Año de creación de pregunta: 2016
 questions[56]= "57)  Si el Consejo en alg&uacute;n acuerdo necesita de mayor&iacute;a cualificada se produce:";
 choices[56]= new Array();
 choices[56][0] = "Acuerdos cualificados.";
 choices[56][1] = "Acuerdos ponderados.";
 choices[56][2] = "Valoraci&oacute;n de los votos.";
 choices[56][3] = "Ponderaci&oacute;n de los votos.";
 answers[56] = choices[56][3];
 units[56] = "5";
 comments[56] = "Id Pregunta: 329. UNION EUROPEA";


//  Id pregunta: 527 Año de creación de pregunta: 2016
 questions[57]= "58)  Los interesados con capacidad de obrar podr&aacute;n actuar por medio de representante:";
 choices[57]= new Array();
 choices[57][0] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 choices[57][1] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[57][2] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[57][3] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 answers[57] = choices[57][2];
 units[57] = "7";
 comments[57] = "Id Pregunta: 527. LEY 39/2015";


//  Id pregunta: 378 Año de creación de pregunta: 2016
 questions[58]= "59)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[58]= new Array();
 choices[58][0] = "Quince miembros.";
 choices[58][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[58][2] = "Los miembros que determine el Consejo.";
 choices[58][3] = "Un Presidente y quince miembros.";
 answers[58] = choices[58][1];
 units[58] = "14";
 comments[58] = "Id Pregunta: 378. UNION EUROPEA";


//  Id pregunta: 408 Año de creación de pregunta: 2016
 questions[59]= "60)  La igualdad efectiva entre mujeres y hombres est&aacute; regulada en:";
 choices[59]= new Array();
 choices[59][0] = "Ley Org&aacute;nica 7/2003, de 22 de marzo.";
 choices[59][1] = "Ley Org&aacute;nica 3/2003, de 22 de marzo.";
 choices[59][2] = "Ley 13/2007, de 26 de noviembre.";
 choices[59][3] = "Ley 3/2007, de 26 de noviembre.";
 answers[59] = choices[59][1];
 units[59] = "14";
 comments[59] = "Id Pregunta: 408. POLITICAS DE IGUALDAD";


//  Id pregunta: 37 Año de creación de pregunta: 2016
 questions[60]= "61)  Seg&uacute;n el proyecto GNU, &iquest;cu&aacute;l de las siguientes NO puede ser considerada una libertad esencial del software libre?";
 choices[60]= new Array();
 choices[60][0] = "La libertad de ejecutar el programa como se desee, con cualquier prop&oacute;sito.";
 choices[60][1] = "La libertad de estudiar c&oacute;mo funciona el programa, y modificarlo para que tenga la funcionalidad deseada.";
 choices[60][2] = "La libertad de redistribuir copias para ayudar al pr&oacute;jimo.";
 choices[60][3] = "La libertad de distribuir a terceros versiones modificadas siempre que no tengan uso comercial.";
 answers[60] = choices[60][3];
 units[60] = "66";
 comments[60] = "Id Pregunta: 37. AGE A1 2015";


//  Id pregunta: 531 Año de creación de pregunta: 2016
 questions[61]= "62)  Se entender&aacute; acreditada la representaci&oacute;n realizada:";
 choices[61]= new Array();
 choices[61][0] = "mediante apoderamiento apud acta efectuado por comparecencia personal";
 choices[61][1] = "mediante apoderamiento apud acta efectuado por comparecencia electr&oacute;nica en la correspondiente sede electr&oacute;nica";
 choices[61][2] = "a trav&eacute;s de la acreditaci&oacute;n de su inscripci&oacute;n en el registro electr&oacute;nico de apoderamientos de la Administraci&oacute;n P&uacute;blica competente";
 choices[61][3] = "todas son correctas";
 answers[61] = choices[61][3];
 units[61] = "7";
 comments[61] = "Id Pregunta: 531. LEY 39/2015";


//  Id pregunta: 252 Año de creación de pregunta: 2016
 questions[62]= "63)  La Constituci&oacute;n garantiza el principio de irretroactividad:";
 choices[62]= new Array();
 choices[62][0] = "De las disposiciones favorables.";
 choices[62][1] = "De las disposiciones sancionadoras no favorables.";
 choices[62][2] = "De las disposiciones no restrictivas de derechos individuales.";
 choices[62][3] = "Las respuestas b) y c) son correctas.";
 answers[62] = choices[62][3];
 units[62] = "1";
 comments[62] = "Id Pregunta: 252. CONSTITUCION1978";


//  Id pregunta: 366 Año de creación de pregunta: 2016
 questions[63]= "64)  Para constituir un Grupo en el Parlamento Europeo es necesario al menos:";
 choices[63]= new Array();
 choices[63][0] = "20 parlamentarios.";
 choices[63][1] = "29 parlamentarios.";
 choices[63][2] = "18 parlamentarios.";
 choices[63][3] = "23 parlamentarios.";
 answers[63] = choices[63][0];
 units[63] = "5";
 comments[63] = "Id Pregunta: 366. UNION EUROPEA";


//  Id pregunta: 308 Año de creación de pregunta: 2016
 questions[64]= "65)  El Tribunal de Justicia se cre&oacute; en:";
 choices[64]= new Array();
 choices[64][0] = "El Tratado de la CECA.";
 choices[64][1] = "El Tratado de Niza.";
 choices[64][2] = "El Tratado de &Aacute;msterdam.";
 choices[64][3] = "El Tratado de Lisboa.";
 answers[64] = choices[64][0];
 units[64] = "5";
 comments[64] = "Id Pregunta: 308. UNION EUROPEA";


//  Id pregunta: 11 Año de creación de pregunta: 2016
 questions[65]= "66)  Nada m&aacute;s arrancar el servidor de aplicaciones, usted intenta acceder a su aplicaci&oacute;n y se produce un error de memoria. En ese momento, sospecha que el error se produce porque est&aacute; utilizando unas librer&iacute;as de terceros de gran tama&ntilde;o. &iquest;Qu&eacute; tipo de error deber&iacute;a estar d&aacute;ndose para corroborar su hip&oacute;tesis?";
 choices[65]= new Array();
 choices[65][0] = "java.lang.OutOfMemoryError: Java heap space";
 choices[65][1] = "java.lang.OutOfMemoryError: PermGen space";
 choices[65][2] = "java.lang.OutOfMemoryError: Requested array size exceeds VM limit";
 choices[65][3] = "java.lang.OutOfMemoryError: request &lt;size&gt; bytes for &lt;reason&gt;. Out of swap space";
 answers[65] = choices[65][1];
 units[65] = "64";
 comments[65] = "Id Pregunta: 11. AGE A1 2015";


//  Id pregunta: 352 Año de creación de pregunta: 2016
 questions[66]= "67)  La Comisi&oacute;n est&aacute; compuesta por:";
 choices[66]= new Array();
 choices[66][0] = "27 miembros, nacionales de los Estados comunitarios.";
 choices[66][1] = "20 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 choices[66][2] = "25 miembros, nacionales de los Estados comunitarios.";
 choices[66][3] = "d)22 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 answers[66] = choices[66][0];
 units[66] = "5";
 comments[66] = "Id Pregunta: 352. UNION EUROPEA";


//  Id pregunta: 274 Año de creación de pregunta: 2016
 questions[67]= "68)  La Ley 19/2013 de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno ha establecido el derecho:";
 choices[67]= new Array();
 choices[67][0] = "Al acceso a la informaci&oacute;n p&uacute;blica, en desarrollo de los t&eacute;rminos ya previstos por la Ley 11/2007, de acceso electr&oacute;nico de los ciudadano a los servicios p&uacute;blicos.";
 choices[67][1] = "Al acceso a la informaci&oacute;n p&uacute;blica, por primera vez en nuestra legislaci&oacute;n positiva.";
 choices[67][2] = "Al acceso a la informaci&oacute;n p&uacute;blica a trav&eacute;s del portal de transparencia.";
 choices[67][3] = "Al acceso a la informaci&oacute;n p&uacute;blica, con las limitaciones derivadas del posible perjuicio para la defensa, seguridad nacional o funciones administrativas de inspecci&oacute;n, entre otras.";
 answers[67] = choices[67][3];
 units[67] = "22";
 comments[67] = "Id Pregunta: 274. LEY DE TRANSPARENCIA";


//  Id pregunta: 414 Año de creación de pregunta: 2016
 questions[68]= "69)  Los proyectos de disposiciones de car&aacute;cter general y los planes de especial relevancia econ&oacute;mica, que sometan a la aprobaci&oacute;n del Consejo de Ministros, incorporar&aacute;n:";
 choices[68]= new Array();
 choices[68][0] = "Un informe de impacto de g&eacute;nero.";
 choices[68][1] = "Un programa de igualdad de oportunidades.";
 choices[68][2] = "Un plan de Igualdad de Oportunidades.";
 choices[68][3] = "Un Decreto de Igualdad de Oportunidades.";
 answers[68] = choices[68][0];
 units[68] = "14";
 comments[68] = "Id Pregunta: 414. POLITICAS DE IGUALDAD";


//  Id pregunta: 134 Año de creación de pregunta: 2016
 questions[69]= "70)  La Ley 2/2015, de desindexaci&oacute;n de la econom&iacute;a espa&ntilde;ola, parte de un compromiso del Gobierno en el marco:";
 choices[69]= new Array();
 choices[69][0] = "Del Programa Nacional de Reformas 2015 y 2016.";
 choices[69][1] = "Del Plan de Transformaci&oacute;n Digital 2015-2020.";
 choices[69][2] = "Del Programa Nacional de Reformas 2013 y 2014.";
 choices[69][3] = "Del Pacto Fiscal Europeo de 2012.";
 answers[69] = choices[69][2];
 units[69] = "12";
 comments[69] = "Id Pregunta: 134. Leyes modelo econ&oacute;mico";


//  Id pregunta: 210 Año de creación de pregunta: 2016
 questions[70]= "71)  De acuerdo con la Constituci&oacute;n espa&ntilde;ola, la declaraci&oacute;n del estado de excepci&oacute;n corresponde a:";
 choices[70]= new Array();
 choices[70][0] = "El rey, a propuesta del Gobierno.";
 choices[70][1] = "El Gobierno, mediante Decreto acordado en Consejo de Ministros, previa autorizaci&oacute;n del Congreso de los Diputados.";
 choices[70][2] = "El Congreso de los Diputados, a propuesta del Consejo de Ministros.";
 choices[70][3] = "Las Cortes Generales, por mayor&iacute;a de los miembros de cada C&aacute;mara.";
 answers[70] = choices[70][1];
 units[70] = "1";
 comments[70] = "Id Pregunta: 210. CONSTITUCION1978";


//  Id pregunta: 632 Año de creación de pregunta: 2016
 questions[71]= "72)  El sistema operativo que se dise&ntilde;a pensando en los tipos de datos y recursos que va a manejar: ficheros, procesos, memoria, hardware, etc., y en las propiedades y servicios que &eacute;stos pueden prestar, se construye siguiendo un modelo:";
 choices[71]= new Array();
 choices[71][0] = "Monol&iacute;tico.";
 choices[71][1] = "Estratificado.";
 choices[71][2] = "Cliente/servidor.";
 choices[71][3] = "Orientado a objetos.";
 answers[71] = choices[71][3];
 units[71] = "56";
 comments[71] = "Id Pregunta: 632. Junta de Extremadura A1 2015";


//  Id pregunta: 86 Año de creación de pregunta: 2016
 questions[72]= "73)  Un contrato menor tiene una duraci&oacute;n m&aacute;xima de:";
 choices[72]= new Array();
 choices[72][0] = "Un a&ntilde;o prorrogable";
 choices[72][1] = "Dos a&ntilde;os no prorrogables";
 choices[72][2] = "Un a&ntilde;o no prorrogable";
 choices[72][3] = "Dos a&ntilde;os prorrogables";
 answers[72] = choices[72][2];
 units[72] = "37";
 comments[72] = "Id Pregunta: 86. AGE A1 2015";


//  Id pregunta: 694 Año de creación de pregunta: 2016
 questions[73]= "74)  De las siguientes cu&aacute;l NO es una ventaja de la integraci&oacute;n continua:";
 choices[73]= new Array();
 choices[73][0] = "Ejecuci&oacute;n inmediata de las pruebas de aceptaci&oacute;n.";
 choices[73][1] = "Monitorizaci&oacute;n continua de las m&eacute;tricas de calidad del proyecto.";
 choices[73][2] = "Los desarrolladores pueden detectar y solucionar problemas de integraci&oacute;n de forma continua, evitando el caos de &uacute;ltima hora cuando se acercan las fechas de entrega.";
 choices[73][3] = "Disponibilidad constante de una versi&oacute;n para pruebas, demos o lanzamientos anticipados.";
 answers[73] = choices[73][0];
 units[73] = "92";
 comments[73] = "Id Pregunta: 694. INTEGRACION CONTINUA";


//  Id pregunta: 508 Año de creación de pregunta: 2016
 questions[74]= "75)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, se dict&oacute; en desarrollo de lo indicado en:";
 choices[74]= new Array();
 choices[74][0] = "El art&iacute;culo 131 de la Constituci&oacute;n que establece que el Estado, mediante ley, podr&aacute; planificar la actividad econ&oacute;mica general para atender a las necesidades colectivas, equilibrar y armonizar el desarrollo regional y sectorial y estimular el crecimiento de la renta y de la riqueza y su m&aacute;s justa distribuci&oacute;n.";
 choices[74][1] = "El art&iacute;culo 134.1 de la Constituci&oacute;n que establece que corresponde al Gobierno la elaboraci&oacute;n de los Presupuestos Generales del Estado y a las Cortes Generales, su examen, enmienda y aprobaci&oacute;n.";
 choices[74][2] = "La Disposici&oacute;n Adicional &Uacute;nica de la Reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, de 27 de septiembre de 2011 .";
 choices[74][3] = "El art&iacute;culo 135.2 de la Constituci&oacute;n que establec&iacute;a que los cr&eacute;ditos para satisfacer el pago de intereses y capital de la Deuda P&uacute;blica del Estado se entender&aacute;n siempre incluidos en el estado de gastos de los presupuestos y no podr&aacute;n ser objeto de enmienda o modificaci&oacute;n, mientras se ajusten a las condiciones de la ley de emisi&oacute;n.";
 answers[74] = choices[74][3];
 units[74] = "10";
 comments[74] = "Id Pregunta: 508. PRESUPUESTOS GENERALES";


