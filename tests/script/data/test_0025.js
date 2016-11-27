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

//  Id pregunta: 751 Año de creación de pregunta: 2016
 questions[0]= "1)  En el contexto de la Ley 20/2013, de garant&iacute;a de la unidad de mercado, se considerar&aacute; que concurren los principios de necesidad y proporcionalidad para la exigencia de una autorizaci&oacute;n:";
 choices[0]= new Array();
 choices[0][0] = "Respecto a los operadores econ&oacute;micos, cuando est&eacute; justificado por razones de orden p&uacute;blico aunque &eacute;stas puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n.";
 choices[0][1] = "Respecto a las instalaciones o infraestructuras f&iacute;sicas necesarias para el ejercicio de actividades econ&oacute;micas, cuando sean susceptibles de generar da&ntilde;os sobre el medio ambiente y el entorno urbano, la seguridad o la salud p&uacute;blica y el patrimonio hist&oacute;rico-art&iacute;stico, y estas razones no puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n";
 choices[0][2] = "b) y d) son verdaderas";
 choices[0][3] = "Cuando as&iacute; se disponga reglamentariamente";
 answers[0] = choices[0][1];
 units[0] = "18, 20";
 comments[0] = "Id Pregunta: 751. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 797 Año de creación de pregunta: 2016
 questions[1]= "2)  Los Directores generales ser&aacute;n nombrados y separados por:";
 choices[1]= new Array();
 choices[1][0] = "Real Decreto del Consejo de Ministros, a propuesta del titular del Departamento o del Presidente del Gobierno";
 choices[1][1] = "Ley de las Cortes Generales, a propuesta del titular del Departamento";
 choices[1][2] = "Ley de las Cortes Generales, a propuesta del titular del Departamento o del Presidente del Gobierno";
 choices[1][3] = "Real Decreto del Consejo de Ministros, a propuesta del titular del Departamento";
 answers[1] = choices[1][0];
 units[1] = "4, 7, 8, 9";
 comments[1] = "Id Pregunta: 797. Ley 40/2015";


//  Id pregunta: 723 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Cu&aacute;les son las caracter&iacute;sticas del sprint 0 en SCRUM?";
 choices[2]= new Array();
 choices[2][0] = "Se dejan listos los entornos de desarrollo";
 choices[2][1] = "Se trabaja en el product backlog, dejando listos los product backlog &iacute;tems priorizados y estimados";
 choices[2][2] = "Se hace una previsi&oacute;n del reparto de historias de usuario por iteraci&oacute;n";
 choices[2][3] = "Todas las anteriores son correctas";
 answers[2] = choices[2][3];
 units[2] = "34, 84";
 comments[2] = "Id Pregunta: 723. Metodologias &aacute;giles";


//  Id pregunta: 422 Año de creación de pregunta: 2016
 questions[3]= "4)  Los distintivos para reconocer a aquellas empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato, lo crear&aacute;:";
 choices[3]= new Array();
 choices[3][0] = "El Ministerio de Igualdad.";
 choices[3][1] = "El Ministerio de Empleo y Seguridad Social.";
 choices[3][2] = "Ambas son correctas.";
 choices[3][3] = "La Consejer&iacute;a de Igualdad de cada CCAA.";
 answers[3] = choices[3][1];
 units[3] = "14";
 comments[3] = "Id Pregunta: 422. POLITICAS DE IGUALDAD";


//  Id pregunta: 526 Año de creación de pregunta: 2016
 questions[4]= "5)  Los menores incapacitados, cuando la extensi&oacute;n de la incapacitaci&oacute;n afecte al ejercicio y defensa de los derechos o intereses de que se trate:";
 choices[4]= new Array();
 choices[4][0] = "tienen capacidad de obrar limitada";
 choices[4][1] = "pueden actuar sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[4][2] = "no tienen capacidad de obrar";
 choices[4][3] = "ninguna es correcta";
 answers[4] = choices[4][2];
 units[4] = "7";
 comments[4] = "Id Pregunta: 526. LEY 39/2015";


//  Id pregunta: 756 Año de creación de pregunta: 2016
 questions[5]= "6)  Las Universidades p&uacute;blicas se regir&aacute;n por:";
 choices[5]= new Array();
 choices[5][0] = "las previsiones de la presente Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[5][1] = "su normativa espec&iacute;fica y supletoriamente por las previsiones de la presente Ley";
 choices[5][2] = "exclusivamente por su normativa espec&iacute;fica";
 choices[5][3] = "exclusivamente por las previsiones de la presente Ley";
 answers[5] = choices[5][1];
 units[5] = "4, 7, 8, 9";
 comments[5] = "Id Pregunta: 756. Ley 40/2015";


//  Id pregunta: 204 Año de creación de pregunta: 2016
 questions[6]= "7)  Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada reciben el t&iacute;tulo de:";
 choices[6]= new Array();
 choices[6][0] = "Decretos Legislativos.";
 choices[6][1] = "Decretos-leyes.";
 choices[6][2] = "Leyes de bases.";
 choices[6][3] = "Reales Decretos del Consejo de Ministros.";
 answers[6] = choices[6][0];
 units[6] = "1";
 comments[6] = "Id Pregunta: 204. CONSTITUCION1978";


//  Id pregunta: 170 Año de creación de pregunta: 2016
 questions[7]= "8)  En el contexto del mercado &uacute;nico digital, &iquest;qu&eacute; medidas se han tomado para el impulso de la confianza en el tratamiento de los datos personales en el contexto de los servicios digitales en el a&ntilde;o 2016?";
 choices[7]= new Array();
 choices[7][0] = "Se ha establecido una colaboraci&oacute;n p&uacute;blico-privada en materia de ciberseguridad.";
 choices[7][1] = "Se han introducido medidas para impulsar las destrezas digitales de la poblaci&oacute;n, que la Comisi&oacute;n incorporar&aacute; en futuras iniciativas sobre destrezas y formaci&oacute;n.";
 choices[7][2] = "Se ha aprobado el Reglamento (UE) 2016/769 relativo a la protecci&oacute;n de las personas f&iacute;sicas en lo que respecta al tratamiento de datos personales y a la libre circulaci&oacute;n de estos datos y por el que se deroga la Directiva 95/46/CE";
 choices[7][3] = "Se han introducido medidas para garantizar la libertad de los medios de comunicaci&oacute;n y la promoci&oacute;n de la diversidad cultural";
 answers[7] = choices[7][2];
 units[7] = "19";
 comments[7] = "Id Pregunta: 170. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Mayo/Noticia-2016-05-09-Nuevo-Reglamento-LOPD.html#.WCnlfmrhDIU";


//  Id pregunta: 832 Año de creación de pregunta: 2016
 questions[8]= "9)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Los &oacute;rganos colegiados de la Administraci&oacute;n General del Estado y de sus Organismos p&uacute;blicos, por su composici&oacute;n, se clasifican en:";
 choices[8]= new Array();
 choices[8][0] = "&Oacute;rganos colegiados interministeriales, si sus miembros proceden de diferentes Ministerios.";
 choices[8][1] = "&Oacute;rganos colegiados ministeriales, si sus componentes proceden de los &oacute;rganos del mismo Ministerio.";
 choices[8][2] = "A y B son correctas.";
 choices[8][3] = "A y B son incorrectas.";
 answers[8] = choices[8][2];
 units[8] = "4, 7, 8, 9";
 comments[8] = "Id Pregunta: 832. Ley 40/2015";


//  Id pregunta: 398 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Qu&eacute; art&iacute;culo de la Ley Org&aacute;nica 3/2007 para la igualdad efectiva de mujeres y hombres, regula las acciones positivas?";
 choices[9]= new Array();
 choices[9][0] = "Art. 13, L.O.3/2007.";
 choices[9][1] = "Art. 14, L.O.3/2007.";
 choices[9][2] = "Art. 11, L.O.3/2007.";
 choices[9][3] = "Ninguna es correcta.";
 answers[9] = choices[9][2];
 units[9] = "14";
 comments[9] = "Id Pregunta: 398. POLITICAS DE IGUALDAD";


//  Id pregunta: 186 Año de creación de pregunta: 2016
 questions[10]= "11)  En cuanto a las fuentes del derecho, las normas jur&iacute;dicas contenidas en los tratados internacionales:";
 choices[10]= new Array();
 choices[10][0] = "ser&aacute;n de aplicaci&oacute;n directa en Espa&ntilde;a-";
 choices[10][1] = "ser&aacute;n de aplicaci&oacute;n directa y pasar&aacute;n a formar parte del ordenamiento interno una vez ratificadas por Espa&ntilde;a.";
 choices[10][2] = "no ser&aacute;n de aplicaci&oacute;n directa en Espapa en tanto no hayan pasado a formar parte ddel ordenamiento interno mediante su publicaci&oacute;n oficial en Espa&ntilde;a.";
 choices[10][3] = "ratificados por Espala y publicadas en el BOE, no son fuente de derecho.";
 answers[10] = choices[10][2];
 units[10] = "1";
 comments[10] = "Id Pregunta: 186. CONSTITUCION1978";


//  Id pregunta: 387 Año de creación de pregunta: 2016
 questions[11]= "12)  El art&iacute;culo 37 de la Ley Org&aacute;nica 3/2007, para la igualdad efectiva de mujeres y hombres, indica que la Corporaci&oacute;n RTVE, en el ejercicio de su funci&oacute;n, perseguir&aacute; en su programaci&oacute;n:";
 choices[11]= new Array();
 choices[11][0] = "Mostrar anuncios para la igualdad de forma habitual.";
 choices[11][1] = "Ofrecer trabajo a mujeres v&iacute;ctimas de violencia de g&eacute;nero.";
 choices[11][2] = "Promover la incorporaci&oacute;n de mujeres a puestos visibles ante las c&aacute;maras.";
 choices[11][3] = "Reflejar adecuadamente la presencia de las mujeres en los diversos &aacute;mbitos de la vida social.";
 answers[11] = choices[11][3];
 units[11] = "14";
 comments[11] = "Id Pregunta: 387. POLITICAS DE IGUALDAD";


//  Id pregunta: 558 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Cu&aacute;ndo ha sido aprobada la Agenda Digital para Espa&ntilde;a?";
 choices[12]= new Array();
 choices[12][0] = "En 2015";
 choices[12][1] = "En 2013";
 choices[12][2] = "En 2016";
 choices[12][3] = "En 2007";
 answers[12] = choices[12][1];
 units[12] = "19";
 comments[12] = "Id Pregunta: 558. Agenda Digital";


//  Id pregunta: 473 Año de creación de pregunta: 2016
 questions[13]= "14)  Seg&uacute;n el art&iacute;culo de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , el r&eacute;gimen econ&oacute;mico y financiero del sector p&uacute;blico estatal se regula en:";
 choices[13]= new Array();
 choices[13][0] = "Ley 50/1997, del Gobierno.";
 choices[13][1] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[13][2] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General del Estado.";
 choices[13][3] = "La Ley General de la Hacienda P&uacute;blica.";
 answers[13] = choices[13][1];
 units[13] = "10";
 comments[13] = "Id Pregunta: 473. PRESUPUESTOS GENERALES";


//  Id pregunta: 164 Año de creación de pregunta: 2016
 questions[14]= "15)  En el contexto del Mercado &Uacute;nico Digital, &iquest;qu&eacute; significa la eliminaci&oacute;n del geobloqueo?";
 choices[14]= new Array();
 choices[14][0] = "Introducir medidas destinadas a mejorar la transparencia en materia de precios y la vigilancia regulatoria del mercado transfronterizo de paqueter&iacute;a";
 choices[14][1] = "Eliminar la denegaci&oacute;n de acceso a sitios internet basados en otro pa&iacute;s de la UE o que se cobren precios distintos en funci&oacute;n de la localizaci&oacute;n de un cliente";
 choices[14][2] = "Promover medidas para permitir a los vendedores de bienes f&iacute;sicos beneficiarse del registro y pago electr&oacute;nicos &uacute;nicos y de la introducci&oacute;n de un umbral com&uacute;n del IVA que ayude a las nuevas empresas innovadoras a trabajar en l&iacute;nea";
 choices[14][3] = "Presentar una iniciativa europea sobre computaci&oacute;n en nube, incluidos los servicios de certificaci&oacute;n de la nube";
 answers[14] = choices[14][1];
 units[14] = "19";
 comments[14] = "Id Pregunta: 164. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/ A: &quot;mejora de la paqueter&iacute;a transfronteriza&quot;; C: &quot;Reducci&oacute;n de la burocracia relacionada con el IVA&quot;; D: &quot;Construir una econom&iacute;a de los datos&quot;";


//  Id pregunta: 787 Año de creación de pregunta: 2016
 questions[15]= "16)  Los elementos organizativos b&aacute;sicos de las estructuras org&aacute;nicas son:";
 choices[15]= new Array();
 choices[15][0] = "los &oacute;rganos administrativos";
 choices[15][1] = "las entidades dependientes";
 choices[15][2] = "las unidades administrativas";
 choices[15][3] = "los servicios comunes";
 answers[15] = choices[15][2];
 units[15] = "4, 7, 8, 9";
 comments[15] = "Id Pregunta: 787. Ley 40/2015";


//  Id pregunta: 31 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Qu&eacute; es MongoDB?";
 choices[16]= new Array();
 choices[16][0] = "Una herramienta Object Relational Mapping (ORM) para facilitar el desarrollo.";
 choices[16][1] = "Una base de datos de c&oacute;digo abierto de documentos tipo JSON.";
 choices[16][2] = "Un sistema gestor de base de datos relacional.";
 choices[16][3] = "Una base de datos jer&aacute;rquica de relaciones encadenadas.";
 answers[16] = choices[16][1];
 units[16] = "73";
 comments[16] = "Id Pregunta: 31. AGE A1 2015";


//  Id pregunta: 211 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;A cu&aacute;ntos miembros del Tribunal Constitucional corresponde proponer al Gobierno?";
 choices[17]= new Array();
 choices[17][0] = "Cuatro.";
 choices[17][1] = "Ninguno.";
 choices[17][2] = "Dos.";
 choices[17][3] = "Seis.";
 answers[17] = choices[17][2];
 units[17] = "1";
 comments[17] = "Id Pregunta: 211. CONSTITUCION1978";


//  Id pregunta: 34 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Cu&aacute;les de los siguientes mecanismos no existe espec&iacute;ficamente como cach&eacute; de c&oacute;digo PHP?";
 choices[18]= new Array();
 choices[18][0] = "Memcached";
 choices[18][1] = "OpCache";
 choices[18][2] = "WinCache Extension for PHP";
 choices[18][3] = "Alternative PHP Cache";
 answers[18] = choices[18][0];
 units[18] = "65";
 comments[18] = "Id Pregunta: 34. AGE A1 2015";


//  Id pregunta: 540 Año de creación de pregunta: 2016
 questions[19]= "20)  Respecto a los poderes que se inscriban en los registros electr&oacute;nicos generales y particulares de apoderamientos pueden ser:";
 choices[19]= new Array();
 choices[19][0] = "un poder general para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa y ante cualquier Administraci&oacute;n";
 choices[19][1] = "un poder para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa ante una Administraci&oacute;n u Organismo concreto";
 choices[19][2] = "un poder para que el apoderado pueda actuar en nombre del poderdante &uacute;nicamente para la realizaci&oacute;n de determinados tr&aacute;mites especificados en el poder";
 choices[19][3] = "todas son correctas";
 answers[19] = choices[19][3];
 units[19] = "7";
 comments[19] = "Id Pregunta: 540. LEY 39/2015";


//  Id pregunta: 68 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;Cu&aacute;l de las siguientes opciones se refiere al conjunto de metodolog&iacute;as, procesos, arquitecturas y tecnolog&iacute;as que permiten reunir, depurar y transformar datos de los sistemas transaccionales e informaci&oacute;n desestructurada en informaci&oacute;n estructurada, para su explotaci&oacute;n directa o para su an&aacute;lisis y conversi&oacute;n en conocimiento, dando as&iacute; soporte a la toma de decisiones sobre el negocio?";
 choices[20]= new Array();
 choices[20][0] = "Data Mining (miner&iacute;a de datos)";
 choices[20][1] = "Business Intelligence (inteligencia de negocio)";
 choices[20][2] = "Data Warehouse (almac&eacute;n de datos)";
 choices[20][3] = "An&aacute;lisis OLTP (procesamiento en l&iacute;nea transaccional)";
 answers[20] = choices[20][1];
 units[20] = "72";
 comments[20] = "Id Pregunta: 68. AGE A1 2015";


//  Id pregunta: 652 Año de creación de pregunta: 2016
 questions[21]= "22)  Dentro del proceso de MapReduce &iquest;Que es el shuffle?";
 choices[21]= new Array();
 choices[21][0] = "Es un proceso de adaptaci&oacute;n de los datos antes de entrar en la etapa de Map";
 choices[21][1] = "Es un aplicativo dentro del ecosistema Hadoop que sirve para distribuir datos en el HDFS";
 choices[21][2] = "Es el proceso por el que los datos llegan de los mappers a los reducers";
 choices[21][3] = "Es un algoritmo de mineria de datos usado en Big Data";
 answers[21] = choices[21][2];
 units[21] = "73";
 comments[21] = "Id Pregunta: 652. ";


//  Id pregunta: 280 Año de creación de pregunta: 2016
 questions[22]= "23)  El pacto fiscal europeo de 2012 incluye:";
 choices[22]= new Array();
 choices[22][0] = "Un conjunto de reglas, llamadas &quot;reglas de oro&quot;, que son vinculantes en la UE para el principio de equilibrio presupuestario.";
 choices[22][1] = "Un compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,6% de la PIB.";
 choices[22][2] = "Un compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional, lo cual no necesita ser verificado por el Tribunal de Justicia de la Uni&oacute;n Europea.";
 choices[22][3] = "La obligaci&oacute;n de mantener siempre el d&eacute;ficit p&uacute;blico por debajo del 2.8 % del PIB.";
 answers[22] = choices[22][0];
 units[22] = "5";
 comments[22] = "Id Pregunta: 280. UNION EUROPEA";


//  Id pregunta: 745 Año de creación de pregunta: 2016
 questions[23]= "24)  Cu&aacute;l de los siguientes NO es uno de los programas del marco general para la mejora de la calidad en la Administraci&oacute;n General del Estado:";
 choices[23]= new Array();
 choices[23][0] = "Programa de an&aacute;lisis de la demanda y de evaluaci&oacute;n de la satisfacci&oacute;n de los usuarios de los servicios.";
 choices[23][1] = "Programa de cartas de servicios";
 choices[23][2] = "Programa para la mejora continua de las organizaciones.";
 choices[23][3] = "Programa de evaluaci&oacute;n de la calidad de las organizaciones.";
 answers[23] = choices[23][2];
 units[23] = "18, 20";
 comments[23] = "Id Pregunta: 745. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 316 Año de creación de pregunta: 2016
 questions[24]= "25)  El Consejo de la Uni&oacute;n Europea de reunir&aacute; por:";
 choices[24]= new Array();
 choices[24][0] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de dos de sus miembros o de la Comisi&oacute;n.";
 choices[24][1] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n.";
 choices[24][2] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de tres de sus miembros o de la Comisi&oacute;n.";
 choices[24][3] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n o el Parlamento.";
 answers[24] = choices[24][1];
 units[24] = "5";
 comments[24] = "Id Pregunta: 316. UNION EUROPEA";


//  Id pregunta: 190 Año de creación de pregunta: 2016
 questions[25]= "26)  La iniciativa legislativa para la reforma de la Constituci&oacute;n Espa&ntilde;ola de 1978:";
 choices[25]= new Array();
 choices[25][0] = "Le corresponde exclusivamente al congreso y al Senado.";
 choices[25][1] = "Puede ser ejercida por el Tribunal Constitucional.";
 choices[25][2] = "Puede ser instada por las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[25][3] = "Le corresponde exclusivamente al Gobierno.";
 answers[25] = choices[25][2];
 units[25] = "1";
 comments[25] = "Id Pregunta: 190. CONSTITUCION1978";


//  Id pregunta: 722 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Cu&aacute;l es la principal desventaja de sprints m&aacute;s largos?";
 choices[26]= new Array();
 choices[26][0] = "Permite reaccionar al equipo mejor ante imprevistos";
 choices[26][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[26][2] = "Se reduce el n&uacute;mero de reuniones de sprint";
 choices[26][3] = "Se puede desarrollar algo diferente a lo requerido y obtener el feedback del cliente m&aacute;s tarde.";
 answers[26] = choices[26][3];
 units[26] = "34, 84";
 comments[26] = "Id Pregunta: 722. Metodologias &aacute;giles";


//  Id pregunta: 644 Año de creación de pregunta: 2016
 questions[27]= "28)  El Estatuto B&aacute;sico del empleado p&uacute;blico determina como clases de personal los siguientes:";
 choices[27]= new Array();
 choices[27][0] = "Funcionarios de carrera, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 choices[27][1] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal.";
 choices[27][2] = "Funcionarios e interinos.";
 choices[27][3] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 answers[27] = choices[27][3];
 units[27] = "20";
 comments[27] = "Id Pregunta: 644. Junta de Extremadura A1 2015";


//  Id pregunta: 168 Año de creación de pregunta: 2016
 questions[28]= "29)  En relaci&oacute;n la conectividad desde dispositivos m&oacute;viles en Europa";
 choices[28]= new Array();
 choices[28][0] = "A partir de 15 de Julio de 2017 los operadores solo podr&aacute;n cobrar un extra adicional m&aacute;ximo 1 &euro; /min en llamadas de voz, en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[28][1] = "No existe regulaci&oacute;n sobre el roaming en la UE, sino sobre la portabilidad, que ser&aacute; prohibida a partir del 15 de Julio de 2017.";
 choices[28][2] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[28][3] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de portabilidad al viajar a otro pa&iacute;s de la UE.";
 answers[28] = choices[28][2];
 units[28] = "19";
 comments[28] = "Id Pregunta: 168. https://ec.europa.eu/digital-single-market/en/roaming";


//  Id pregunta: 600 Año de creación de pregunta: 2016
 questions[29]= "30)  Los est&aacute;ndares de la norma IEEE 802.11 se ubican en las capas del modelo OSI:";
 choices[29]= new Array();
 choices[29][0] = "La capa de transmisi&oacute;n y la capa de presentaci&oacute;n.";
 choices[29][1] = "La capa de aplicaci&oacute;n y la capa de gesti&oacute;n.";
 choices[29][2] = "La capa f&iacute;sica y la cada de enlace de datos.";
 choices[29][3] = "La capa de red y la capa de tr&aacute;fico.";
 answers[29] = choices[29][2];
 units[29] = "108";
 comments[29] = "Id Pregunta: 600. Junta de Extremadura A1 2015";


//  Id pregunta: 79 Año de creación de pregunta: 2016
 questions[30]= "31)  La Ley 25/2013, de 27 de diciembre, de impulso de la factura electr&oacute;nica y creaci&oacute;n del Registro Contable de Facturas en el Sector P&uacute;blico, prev&eacute; que anualmente se realice una auditor&iacute;a de sistemas para verificar que los correspondientes registros contables de facturas cumplen con las condiciones de funcionamiento previstas en la normativa aplicable. En el &aacute;mbito de la Administraci&oacute;n General del Estado dicha auditor&iacute;a se realizar&aacute; por:";
 choices[30]= new Array();
 choices[30][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[30][1] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado";
 choices[30][2] = "Las Inspecciones Generales de los Servicios";
 choices[30][3] = "La Agencia Estatal de la Administraci&oacute;n Tributaria";
 answers[30] = choices[30][1];
 units[30] = "75";
 comments[30] = "Id Pregunta: 79. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 208 Año de creación de pregunta: 2016
 questions[31]= "32)  La direcci&oacute;n de la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado corresponde a:";
 choices[31]= new Array();
 choices[31][0] = "El Rey.";
 choices[31][1] = "El Jefe del Estado.";
 choices[31][2] = "El Gobierno.";
 choices[31][3] = "El Presidente del Gobierno.";
 answers[31] = choices[31][2];
 units[31] = "1";
 comments[31] = "Id Pregunta: 208. CONSTITUCION1978";


//  Id pregunta: 137 Año de creación de pregunta: 2016
 questions[32]= "33)  La creaci&oacute;n de la Autoridad Independiente de Responsabilidad Fiscal, dentro de la Ley Org&aacute;nica 6/2013, tiene por objeto:";
 choices[32]= new Array();
 choices[32][0] = "Garantizar el cumplimiento efectivo por las Administraciones P&uacute;blicas del principio de estabilidad presupuestaria previsto en el art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola.";
 choices[32][1] = "La evaluaci&oacute;n continua del ciclo presupuestario, del endeudamiento p&uacute;blico, y el an&aacute;lisis de las previsiones econ&oacute;micas.";
 choices[32][2] = "Ejercer sus funciones con autonom&iacute;a e independencia funcional respecto de las Administraciones P&uacute;blicas.";
 choices[32][3] = "Todos las anteriores son ciertas.";
 answers[32] = choices[32][3];
 units[32] = "12";
 comments[32] = "Id Pregunta: 137. Leyes modelo econ&oacute;mico";


//  Id pregunta: 637 Año de creación de pregunta: 2016
 questions[33]= "34)  En el sistema operativo Unix/Linux, el comando id:";
 choices[33]= new Array();
 choices[33][0] = "Muestra el n&uacute;mero de identificaci&oacute;n y el grupo al que pertenece el usuario.";
 choices[33][1] = "El comando id no existe.";
 choices[33][2] = "Muestra el n&uacute;mero de procesos lanzados por el usuario.";
 choices[33][3] = "Muestra las hebras y las identificaciones de los archivos abiertos por el usuario.";
 answers[33] = choices[33][0];
 units[33] = "57";
 comments[33] = "Id Pregunta: 637. Junta de Extremadura A1 2015";


//  Id pregunta: 58 Año de creación de pregunta: 2016
 questions[34]= "35)  Se&ntilde;ale cu&aacute;l de los siguientes apartados NO ha sido declarado como servicio compartido en la Administraci&oacute;n General del Estado:";
 choices[34]= new Array();
 choices[34][0] = "Servicio com&uacute;n de gesti&oacute;n econ&oacute;mico-presupuestaria";
 choices[34][1] = "Servicio com&uacute;n de georreferenciaci&oacute;n";
 choices[34][2] = "Servicio de seguridad gestionada";
 choices[34][3] = "Servicio de gesti&oacute;n de notificaciones";
 answers[34] = choices[34][1];
 units[34] = "26";
 comments[34] = "Id Pregunta: 58. AGE A1 2015";


//  Id pregunta: 748 Año de creación de pregunta: 2016
 questions[35]= "36)  Son rasgos fundamentales del sistema burocr&aacute;tico:";
 choices[35]= new Array();
 choices[35][0] = "La racionalidad en la divisi&oacute;n del trabajo";
 choices[35][1] = "La eficiencia en el uso de los recursos p&uacute;blicos";
 choices[35][2] = "La competencia t&eacute;cnica y la meritocracia";
 choices[35][3] = "a) y c) son rasgos fundamentales del sistema burocr&aacute;tico";
 answers[35] = choices[35][3];
 units[35] = "18, 20";
 comments[35] = "Id Pregunta: 748. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 813 Año de creación de pregunta: 2016
 questions[36]= "37)  Debe abstenerse el funcionario que tiene relaci&oacute;n de servicio con interesado en el asunto o le ha prestado servicios profesionales en los ...";
 choices[36]= new Array();
 choices[36][0] = "Tres &uacute;ltimos a&ntilde;os";
 choices[36][1] = "Cinco &uacute;ltimos a&ntilde;os";
 choices[36][2] = "Cuatro &uacute;ltimos a&ntilde;os";
 choices[36][3] = "Dos &uacute;ltimos a&ntilde;os";
 answers[36] = choices[36][1];
 units[36] = "4, 7, 8, 9";
 comments[36] = "Id Pregunta: 813. Ley 40/2015";


//  Id pregunta: 400 Año de creación de pregunta: 2016
 questions[37]= "38)  Corresponde probar la ausencia de discriminaci&oacute;n en las medidas adoptadas y su proporcionalidad, a:";
 choices[37]= new Array();
 choices[37][0] = "A la persona demandante.";
 choices[37][1] = "A la persona demandada.";
 choices[37][2] = "Al &oacute;rgano judicial.";
 choices[37][3] = "Al &oacute;rgano administrativo.";
 answers[37] = choices[37][1];
 units[37] = "14";
 comments[37] = "Id Pregunta: 400. POLITICAS DE IGUALDAD";


//  Id pregunta: 482 Año de creación de pregunta: 2016
 questions[38]= "39)  De acuerdo con el art&iacute;culo 67 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, si las variaciones afectasen al volumen de endeudamiento a corto y largo plazo, ser&aacute; competencia del Consejo de Ministros cuando su importe exceda de la cuant&iacute;a de:";
 choices[38]= new Array();
 choices[38][0] = "12.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[38][1] = "13.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[38][2] = "11.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[38][3] = "10.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 answers[38] = choices[38][0];
 units[38] = "10";
 comments[38] = "Id Pregunta: 482. PRESUPUESTOS GENERALES";


//  Id pregunta: 510 Año de creación de pregunta: 2016
 questions[39]= "40)  La presente Ley tiene por objeto regular: (se&ntilde;ala la incorrecta)";
 choices[39]= new Array();
 choices[39][0] = "Los requisitos de validez y eficacia de los actos administrativos";
 choices[39][1] = "El procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas, incluyendo el sancionador y el de reclamaci&oacute;n de responsabilidad de las Administraciones P&uacute;blicas";
 choices[39][2] = "Las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[39][3] = "Los principios a los que se ha de ajustar el ejercicio de la iniciativa legislativa y la potestad reglamentaria";
 answers[39] = choices[39][2];
 units[39] = "7";
 comments[39] = "Id Pregunta: 510. LEY 39/2015";


//  Id pregunta: 557 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;Qu&eacute; ministerios han liderado la elaboraci&oacute;n de la Agenda Digital para Espa&ntilde;a?";
 choices[40]= new Array();
 choices[40][0] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica ";
 choices[40][1] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Econom&iacute;a, Industria y Competitividad";
 choices[40][2] = "El Ministerio de Econom&iacute;a, Industria y Competitividad y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[40][3] = "Ninguno de ellos, puesto que ha venido elaborada desde los organismos de la UE";
 answers[40] = choices[40][0];
 units[40] = "19";
 comments[40] = "Id Pregunta: 557. Agenda Digital";


//  Id pregunta: 784 Año de creación de pregunta: 2016
 questions[41]= "42)  Los estatutos de los Organismos p&uacute;blicos determinar&aacute;n sus respectivos:";
 choices[41]= new Array();
 choices[41][0] = "&oacute;rganos superiores";
 choices[41][1] = "&oacute;rganos directivos";
 choices[41][2] = "&oacute;rganos superiores y directivos";
 choices[41][3] = "ninguna es correcta";
 answers[41] = choices[41][1];
 units[41] = "4, 7, 8, 9";
 comments[41] = "Id Pregunta: 784. Ley 40/2015";


//  Id pregunta: 827 Año de creación de pregunta: 2016
 questions[42]= "43)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La formalizaci&oacute;n de las encomiendas de gesti&oacute;n se ajustar&aacute; a las siguientes reglas:";
 choices[42]= new Array();
 choices[42][0] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos administrativos o Entidades de Derecho P&uacute;blico pertenecientes a la misma Administraci&oacute;n deber&aacute; formalizarse en los t&eacute;rminos que establezca su normativa propia y, en su defecto, por acuerdo expreso de los &oacute;rganos o Entidades de Derecho P&uacute;blico intervinientes. En todo caso, el instrumento de formalizaci&oacute;n de la encomienda de gesti&oacute;n y su resoluci&oacute;n deber&aacute; ser publicada, para su eficacia, en el Bolet&iacute;n Oficial del Estado, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante.";
 choices[42][1] = "Cada Administraci&oacute;n podr&aacute; regular los requisitos necesarios para la validez de tales acuerdos que incluir&aacute;n, al menos, expresa menci&oacute;n de la actividad o actividades a las que afecten, el plazo de vigencia y la naturaleza y alcance de la gesti&oacute;n encomendada.";
 choices[42][2] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos y Entidades de Derecho P&uacute;blico de distintas Administraciones se formalizar&aacute; mediante firma del correspondiente convenio entre ellas, que deber&aacute; ser publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante, salvo en el supuesto de la gesti&oacute;n ordinaria de los servicios de las Comunidades Aut&oacute;nomas por las Diputaciones Provinciales o en su caso Cabildos o Consejos insulares, que se regir&aacute; por la legislaci&oacute;n de R&eacute;gimen Local.";
 choices[42][3] = "Todas son correctas.";
 answers[42] = choices[42][3];
 units[42] = "4, 7, 8, 9";
 comments[42] = "Id Pregunta: 827. Ley 40/2015";


//  Id pregunta: 738 Año de creación de pregunta: 2016
 questions[43]= "44)  LA estructura de la Estrategia TIC:";
 choices[43]= new Array();
 choices[43][0] = "5 principios rectores, 7 principios estrat&eacute;gicos, 9 l&iacute;neas de acci&oacute;n";
 choices[43][1] = "5 principios rectores, 5 principios estrat&eacute;gicos, 7 l&iacute;neas de acci&oacute;n";
 choices[43][2] = "5 principios rectores, 5 principios estrat&eacute;gicos, 9 l&iacute;neas de acci&oacute;n";
 choices[43][3] = "5 principios rectores, 6 principios estrat&eacute;gicos, 8 l&iacute;neas de acci&oacute;n";
 answers[43] = choices[43][2];
 units[43] = "28";
 comments[43] = "Id Pregunta: 738. Estrategia TIC";


//  Id pregunta: 12 Año de creación de pregunta: 2016
 questions[44]= "45)  Indique cu&aacute;l de las siguientes proposiciones es cierta:";
 choices[44]= new Array();
 choices[44][0] = "AngularJS es un framework de JavaScript de c&oacute;digo abierto que sigue el patr&oacute;n de dise&ntilde;o MVC.";
 choices[44][1] = "PrimeFaces y RichFaces son librer&iacute;as que extienden el framework .NET de Microsoft.";
 choices[44][2] = "PrimeFaces es una extensi&oacute;n de AngularJS que permite la integraci&oacute;n de componentes RichFaces.";
 choices[44][3] = "El framework Spring es compatible con el uso delORM Hibernate, pero es incompatible con el uso de Java Server Faces en la capa de presentaci&oacute;n.";
 answers[44] = choices[44][0];
 units[44] = "62";
 comments[44] = "Id Pregunta: 12. AGE A1 2015";


//  Id pregunta: 572 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares de la serie IEEE 802.11 se conoce como Fast Basic Service Set Transition, el cual est&aacute; enfocado a permitir la conexi&oacute;n continua de clientes en movimiento?";
 choices[45]= new Array();
 choices[45][0] = "IEEE 802.11p";
 choices[45][1] = "IEEE 802.11r";
 choices[45][2] = "IEEE 802.11v";
 choices[45][3] = "IEEE 802.11w";
 answers[45] = choices[45][1];
 units[45] = "112";
 comments[45] = "Id Pregunta: 572. Tema 112. TAI 2016.";


//  Id pregunta: 106 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;En qu&eacute; consiste el paradigma MapReduce?";
 choices[46]= new Array();
 choices[46][0] = "Map toma un conjunto de datos y lo convierte en otro conjunto donde los elementos individuales son separados en tuplas (pares clave/valor)";
 choices[46][1] = "Reduce obtiene la salida de map como datos de entrada y combina tuplas en un conjunto m&aacute;s peque&ntilde;o de las mismas";
 choices[46][2] = "A) y B) son verdaderas";
 choices[46][3] = "A) es la definici&oacute;n del procedimiento intermedio Shuffle";
 answers[46] = choices[46][2];
 units[46] = "73";
 comments[46] = "Id Pregunta: 106. ";


//  Id pregunta: 216 Año de creación de pregunta: 2016
 questions[47]= "48)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola de 1978, est&aacute;n legitimados para interponer el recurso de inconstitucionalidad:";
 choices[47]= new Array();
 choices[47][0] = "El Presidente del Gobierno.";
 choices[47][1] = "El Consejo de Ministros.";
 choices[47][2] = "40 Diputados.";
 choices[47][3] = "El Ministerio Fiscal.";
 answers[47] = choices[47][0];
 units[47] = "1";
 comments[47] = "Id Pregunta: 216. CONSTITUCION1978";


//  Id pregunta: 701 Año de creación de pregunta: 2016
 questions[48]= "49)  Se&ntilde;ale la que NO corresponde a una herramienta de automatizaci&oacute;n de pruebas:";
 choices[48]= new Array();
 choices[48][0] = "Selenium";
 choices[48][1] = "JUnit";
 choices[48][2] = "Jenkins";
 choices[48][3] = "JMeter";
 answers[48] = choices[48][2];
 units[48] = "92";
 comments[48] = "Id Pregunta: 701. INTEGRACION CONTINUA";


//  Id pregunta: 284 Año de creación de pregunta: 2016
 questions[49]= "50)  Se&ntilde;ale la respuesta falsa:";
 choices[49]= new Array();
 choices[49][0] = "El mercado interior europeo que tiene una repercusi&oacute;n positiva en el crecimiento de la econom&iacute;a y del empleo.";
 choices[49][1] = "En mayo de 2015 la Comisi&oacute;n Europea anunci&oacute; la Estrategia para el Mercado &Uacute;nico Digital, destinada a responder a los retos de la econom&iacute;a digital.";
 choices[49][2] = "La Comisi&oacute;n propone una nueva estrategia de comercio e inversi&oacute;n para la Uni&oacute;n Europea, con el t&iacute;tulo &laquo;Comercio para todos: Hacia una pol&iacute;tica de comercio e inversi&oacute;n m&aacute;s sostenible&raquo;.";
 choices[49][3] = "En septiembre de 2015 se ha publicado el plan de acci&oacute;n para la creaci&oacute;n de la Uni&oacute;n de los Mercados de Capitales.";
 answers[49] = choices[49][2];
 units[49] = "5";
 comments[49] = "Id Pregunta: 284. UNION EUROPEA";


//  Id pregunta: 11 Año de creación de pregunta: 2016
 questions[50]= "51)  Nada m&aacute;s arrancar el servidor de aplicaciones, usted intenta acceder a su aplicaci&oacute;n y se produce un error de memoria. En ese momento, sospecha que el error se produce porque est&aacute; utilizando unas librer&iacute;as de terceros de gran tama&ntilde;o. &iquest;Qu&eacute; tipo de error deber&iacute;a estar d&aacute;ndose para corroborar su hip&oacute;tesis?";
 choices[50]= new Array();
 choices[50][0] = "java.lang.OutOfMemoryError: Java heap space";
 choices[50][1] = "java.lang.OutOfMemoryError: PermGen space";
 choices[50][2] = "java.lang.OutOfMemoryError: Requested array size exceeds VM limit";
 choices[50][3] = "java.lang.OutOfMemoryError: request &lt;size&gt; bytes for &lt;reason&gt;. Out of swap space";
 answers[50] = choices[50][1];
 units[50] = "64";
 comments[50] = "Id Pregunta: 11. AGE A1 2015";


//  Id pregunta: 187 Año de creación de pregunta: 2016
 questions[51]= "52)  El Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola establece un plazo de 30 d&iacute;as, para que los Decretos-Leyes sean sometidos a debate y votaci&oacute;n de la totalidad del Congreso de los Diputados, durante el cual:";
 choices[51]= new Array();
 choices[51][0] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento de urgencia.";
 choices[51][1] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento com&uacute;n.";
 choices[51][2] = "Durante dicho plazo, no pueden ser tramitados ni como proyectos de ley ni como propociones de ley.";
 choices[51][3] = "Durante dicho plazo, s&oacute;lo el Senado puede tramitar los Decretos-Leyes como proyectos de ley por el procedimiento de urgencia.";
 answers[51] = choices[51][0];
 units[51] = "1";
 comments[51] = "Id Pregunta: 187. CONSTITUCION1978";


//  Id pregunta: 475 Año de creación de pregunta: 2016
 questions[52]= "53)  De conformidad con el art&iacute;culo 29.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales se remitir&aacute;n:";
 choices[52]= new Array();
 choices[52][0] = "Anualmente.";
 choices[52][1] = "Ninguna de las respuestas es correcta.";
 choices[52][2] = "Trimestralmente.";
 choices[52][3] = "Semestralmente.";
 answers[52] = choices[52][0];
 units[52] = "10";
 comments[52] = "Id Pregunta: 475. PRESUPUESTOS GENERALES";


//  Id pregunta: 541 Año de creación de pregunta: 2016
 questions[53]= "54)  Se&ntilde;ala la correcta:";
 choices[53]= new Array();
 choices[53][0] = "la falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n impedir&aacute; que se tenga por realizado el acto de que se trate";
 choices[53][1] = "el documento electr&oacute;nico que acredite el resultado de la consulta al registro electr&oacute;nico de apoderamientos correspondiente tendr&aacute; la condici&oacute;n de acreditaci&oacute;n a estos efectos";
 choices[53][2] = "los registros electr&oacute;nicos generales y particulares de apoderamientos pertenecientes a todas y cada una de las Administraciones, ser&aacute;n preferiblemente interoperables entre s&iacute;";
 choices[53][3] = "el interesado no podr&aacute; comparecer por s&iacute; mismo en un procedimiento en el que haya designado representante";
 answers[53] = choices[53][1];
 units[53] = "7";
 comments[53] = "Id Pregunta: 541. LEY 39/2015";


//  Id pregunta: 385 Año de creación de pregunta: 2016
 questions[54]= "55)  Se&ntilde;ale c&oacute;mo es evaluado el Plan de Igualdad en la Administraci&oacute;n General del Estado, previsto en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la Igualdad efectiva de mujeres y hombres:";
 choices[54]= new Array();
 choices[54][0] = "Anualmente por el Consejo de Ministros";
 choices[54][1] = "Anualmente por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios";
 choices[54][2] = "Al final de cada legislatura por el Gobierno";
 choices[54][3] = "Al final de cada legislatura por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios.";
 answers[54] = choices[54][0];
 units[54] = "14";
 comments[54] = "Id Pregunta: 385. POLITICAS DE IGUALDAD";


//  Id pregunta: 594 Año de creación de pregunta: 2016
 questions[55]= "56)  Son excepciones singulares en la utilizaci&oacute;n de los medios y servicios compartidos:";
 choices[55]= new Array();
 choices[55][0] = "Seguridad Social y AEAT";
 choices[55][1] = "IGAE (Servicios Inform&aacute;tica Presupuestaria)";
 choices[55][2] = "Medios y servicios espec&iacute;ficos que afecten a defensa, consulta pol&iacute;tica, situaciones de crisis y seguridad del Estado y los que manejen informaci&oacute;n clasificada";
 choices[55][3] = "Todos los anteriores";
 answers[55] = choices[55][3];
 units[55] = "19";
 comments[55] = "Id Pregunta: 594. Estrategia TIC";


//  Id pregunta: 763 Año de creación de pregunta: 2016
 questions[56]= "57)  Las Administraciones P&uacute;blicas que, en el ejercicio de sus respectivas competencias, establezcan medidas que limiten el ejercicio de derechos individuales o colectivos o exijan el cumplimiento de requisitos para el desarrollo de una actividad, deber&aacute;n (se&ntilde;ala la incorrecta):";
 choices[56]= new Array();
 choices[56][0] = "aplicar el principio de proporcionalidad y elegir la medida menos restrictiva";
 choices[56][1] = "motivar su necesidad para la protecci&oacute;n del inter&eacute;s p&uacute;blico";
 choices[56][2] = "justificar su adecuaci&oacute;n para lograr los fines que se persiguen, evitando en la medida de lo posible que se produzcan diferencias de trato discriminatorias";
 choices[56][3] = "evaluar peri&oacute;dicamente los efectos y resultados obtenidos";
 answers[56] = choices[56][2];
 units[56] = "4, 7, 8, 9";
 comments[56] = "Id Pregunta: 763. Ley 40/2015";


//  Id pregunta: 124 Año de creación de pregunta: 2016
 questions[57]= "58)  Se&ntilde;ale la VERDADERA con respecto a las las reclamaciones ante el Consejo de Transparencia y Buen Gobierno:";
 choices[57]= new Array();
 choices[57][0] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de tres meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[57][1] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de seis meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[57][2] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[57][3] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; estimada";
 answers[57] = choices[57][0];
 units[57] = "22";
 comments[57] = "Id Pregunta: 124. ";


//  Id pregunta: 636 Año de creación de pregunta: 2016
 questions[58]= "59)  El soporte de m&oacute;dulos en Linux tiene tres componentes:";
 choices[58]= new Array();
 choices[58][0] = "Gesti&oacute;n de E/S, Interfaces y Gesti&oacute;n del almacenamiento.";
 choices[58][1] = "Gesti&oacute;n del almacenamiento, Gesti&oacute;n de seguridad y Gesti&oacute;n de integridad.";
 choices[58][2] = "Gesti&oacute;n de m&oacute;dulos, M&oacute;dulo registro de controladores y Mecanismo de resoluci&oacute;n de conflictos.";
 choices[58][3] = "Gesti&oacute;n de memoria, Gesti&oacute;n de discos y Gesti&oacute;n de impresi&oacute;n.";
 answers[58] = choices[58][2];
 units[58] = "57";
 comments[58] = "Id Pregunta: 636. Junta de Extremadura A1 2015";


//  Id pregunta: 527 Año de creación de pregunta: 2016
 questions[59]= "60)  Los interesados con capacidad de obrar podr&aacute;n actuar por medio de representante:";
 choices[59]= new Array();
 choices[59][0] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 choices[59][1] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[59][2] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[59][3] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 answers[59] = choices[59][2];
 units[59] = "7";
 comments[59] = "Id Pregunta: 527. LEY 39/2015";


//  Id pregunta: 146 Año de creación de pregunta: 2016
 questions[60]= "61)  La declaraci&oacute;n de lesividad de los actos anulables:";
 choices[60]= new Array();
 choices[60][0] = "No podr&aacute; adoptarse una vez transcurridos cuatro a&ntilde;os desde que se dict&oacute; el acto administrativo";
 choices[60][1] = "No es necesaria para impugnar ante el orden jurisdiccional contencioso-administrativo los actos favorables para los interesados";
 choices[60][2] = "Se adoptar&aacute; en todo caso por el Consejo de Estado";
 choices[60][3] = "Si el acto proviniera de las entidades que integran la Administraci&oacute;n Local, la declaraci&oacute;n de lesividad se adoptar&aacute; por la Comunidad Aut&oacute;noma a la que pertenece dicha entidad";
 answers[60] = choices[60][0];
 units[60] = "8";
 comments[60] = "Id Pregunta: 146. Ley 39/2015, Art&iacute;culo 107";


//  Id pregunta: 10 Año de creación de pregunta: 2016
 questions[61]= "62)  El servicio mediante el cual se localiza un terminal m&oacute;vil dentro de alguna de las N c&eacute;lulas gestionadas coordinadamente en una zona de cobertura se denomina:";
 choices[61]= new Array();
 choices[61][0] = "Paging";
 choices[61][1] = "Roaming";
 choices[61][2] = "Handover";
 choices[61][3] = "Trunking";
 answers[61] = choices[61][0];
 units[61] = "117";
 comments[61] = "Id Pregunta: 10. AGE A1 2015";


//  Id pregunta: 133 Año de creación de pregunta: 2016
 questions[62]= "63)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, cu&aacute;l no corresponde a una de las medidas implantadas:";
 choices[62]= new Array();
 choices[62][0] = "Apoyos fiscales y en materia de Seguridad Social a los emprendedores.";
 choices[62][1] = "Medidas de conciliaci&oacute;n familiar especiales para los emprendedores.";
 choices[62][2] = "Modificaci&oacute;n de la ley concursal para facilitar los acuerdos de refinanciaci&oacute;n.";
 choices[62][3] = "Creaci&oacute;n de la figura del Emprendedor de Responsabilidad Limitada.";
 answers[62] = choices[62][1];
 units[62] = "12";
 comments[62] = "Id Pregunta: 133. Leyes modelo econ&oacute;mico";


//  Id pregunta: 610 Año de creación de pregunta: 2016
 questions[63]= "64)  En el lenguaje de manipulaci&oacute;n de datos, &iquest;cu&aacute;l de las siguientes cl&aacute;usulas va asociada a la cl&aacute;usula HAVING?";
 choices[63]= new Array();
 choices[63][0] = "GROUP BY.";
 choices[63][1] = "COUNT.";
 choices[63][2] = "WHERE.";
 choices[63][3] = "DISTINCT.";
 answers[63] = choices[63][0];
 units[63] = "60";
 comments[63] = "Id Pregunta: 610. Junta de Extremadura A1 2015";


//  Id pregunta: 313 Año de creación de pregunta: 2016
 questions[64]= "65)  Indique qui&eacute;n propone al candidato para el cargo de Presidente de la Comisi&oacute;n Europea:";
 choices[64]= new Array();
 choices[64][0] = "El Consejo Europeo.";
 choices[64][1] = "El Consejo de la Uni&oacute;n Europea.";
 choices[64][2] = "Los miembros de la Comisi&oacute;n Europea.";
 choices[64][3] = "El Parlamento Europeo.";
 answers[64] = choices[64][0];
 units[64] = "5";
 comments[64] = "Id Pregunta: 313. UNION EUROPEA";


//  Id pregunta: 386 Año de creación de pregunta: 2016
 questions[65]= "66)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con las pol&iacute;ticas de igualdad de g&eacute;nero, de conformidad con la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad de mujeres y hombres:";
 choices[65]= new Array();
 choices[65][0] = "El Ministerio de Trabajo y Asuntos Sociales crear&aacute; un distintivo para reconocer a las empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato y de oportunidades con sus trabajadores y trabajadoras.";
 choices[65][1] = "Todas las empresas con sede en Espa&ntilde;a est&aacute;n obligadas a elaborar un plan de igualdad entre sus trabajadores y trabajadoras.";
 choices[65][2] = "En los procesos de car&aacute;cter penal en los que las alegaciones de la parte actora se fundamenten en actuaciones discriminatorias por raz&oacute;n de sexo, corresponde a la persona demandada probar la ausencia de discriminaci&oacute;n.";
 choices[65][3] = "La mitad, al menos, de los nuevos nombramientos de titulares de los &oacute;rganos directivos de la Administraci&oacute;n General del Estado, durante un plazo de dos a&ntilde;os a partir de la entrada en vigor de la ley, deber&aacute;n ser mujeres.";
 answers[65] = choices[65][0];
 units[65] = "14";
 comments[65] = "Id Pregunta: 386. POLITICAS DE IGUALDAD";


//  Id pregunta: 775 Año de creación de pregunta: 2016
 questions[66]= "67)  La Administraci&oacute;n General del Estado comprende (se&ntilde;ala la incorrecta):";
 choices[66]= new Array();
 choices[66][0] = "la Organizaci&oacute;n Central, que integra los Ministerios y los servicios comunes";
 choices[66][1] = "la Organizaci&oacute;n Territorial";
 choices[66][2] = "la Organizaci&oacute;n sectorial";
 choices[66][3] = "la Administraci&oacute;n General del Estado en el exterior";
 answers[66] = choices[66][2];
 units[66] = "4, 7, 8, 9";
 comments[66] = "Id Pregunta: 775. Ley 40/2015";


//  Id pregunta: 309 Año de creación de pregunta: 2016
 questions[67]= "68)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a los Cuestores:";
 choices[67]= new Array();
 choices[67][0] = "Son miembros de la Mesa del Parlamento Europeo con voz pero sin voto.";
 choices[67][1] = "No son miembros de la Mesa del Parlamento Europeo.";
 choices[67][2] = "Son miembros de la Mesa del Parlamento Europeo con voz y voto.";
 choices[67][3] = "Los Cuestores forman parte de la Mesa del Parlamento Europeo en un n&uacute;mero igual a tres.";
 answers[67] = choices[67][0];
 units[67] = "5";
 comments[67] = "Id Pregunta: 309. UNION EUROPEA";


//  Id pregunta: 466 Año de creación de pregunta: 2016
 questions[68]= "69)  A tenor del art&iacute;culo 34 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el ejercicio presupuestario coincidir&aacute;:";
 choices[68]= new Array();
 choices[68][0] = "Con el a&ntilde;o anterior.";
 choices[68][1] = "Con los tres a&ntilde;os anteriores.";
 choices[68][2] = "Con el a&ntilde;o natural.";
 choices[68][3] = "Con los dos a&ntilde;os anteriores.";
 answers[68] = choices[68][2];
 units[68] = "10";
 comments[68] = "Id Pregunta: 466. PRESUPUESTOS GENERALES";


//  Id pregunta: 427 Año de creación de pregunta: 2016
 questions[69]= "70)  En las bases de los concursos para la provisi&oacute;n de puestos de trabajo se computar&aacute;, a los efectos de valoraci&oacute;n del trabajo desarrollado y de los correspondientes m&eacute;ritos, el tiempo que las personas candidatas hayan permanecido:";
 choices[69]= new Array();
 choices[69][0] = "En r&eacute;gimen de excedencias, reducciones de jornada, permiso de maternidad o permiso de paternidad.";
 choices[69][1] = "En el extranjero.";
 choices[69][2] = "Ninguna es correcta.";
 choices[69][3] = "Ambas son correctas.";
 answers[69] = choices[69][0];
 units[69] = "14";
 comments[69] = "Id Pregunta: 427. POLITICAS DE IGUALDAD";


//  Id pregunta: 89 Año de creación de pregunta: 2016
 questions[70]= "71)  En un contrato cuyo presupuesto es de 100.000 euros sin IVA y se adjudica por 80.000, IVA excluido, la garant&iacute;a definitiva ser&aacute; de:";
 choices[70]= new Array();
 choices[70][0] = "2.400 euros";
 choices[70][1] = "4.000 euros";
 choices[70][2] = "3.200 euros";
 choices[70][3] = "1.600 euros";
 answers[70] = choices[70][1];
 units[70] = "37";
 comments[70] = "Id Pregunta: 89. AGE A1 2015";


//  Id pregunta: 239 Año de creación de pregunta: 2016
 questions[71]= "72)  Respecto de las relaciones que constitucionalmente se regulan entre los miembros del Gobierno y las Cortes Generales:";
 choices[71]= new Array();
 choices[71][0] = "La comparecencia de los miembros del Gobierno ante las C&aacute;maras y sus Comisiones puede extenderse tambi&eacute;n a los funcionarios de sus Departamentos.";
 choices[71][1] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo solicitasen las propias C&aacute;maras o sus Comisiones.";
 choices[71][2] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo deciden los miembros del Gobierno.";
 choices[71][3] = "Los funcionarios no comparecer&aacute;n en ning&uacute;n caso.";
 answers[71] = choices[71][0];
 units[71] = "1";
 comments[71] = "Id Pregunta: 239. CONSTITUCION1978";


//  Id pregunta: 276 Año de creación de pregunta: 2016
 questions[72]= "73)  Se&ntilde;ale la respuesta falsa";
 choices[72]= new Array();
 choices[72][0] = "El Portal de la Transparencia del Gobierno de Espa&ntilde;a es una subsede de la sede electr&oacute;nica central del Ministerio de la Presidencia.";
 choices[72][1] = "La titularidad de esta subsede corresponde a la Oficina de la Transparencia y Acceso a la Informaci&oacute;n (OTAI), dependiente de la Oficina para la Ejecuci&oacute;n de la Reforma de la Administraci&oacute;n P&uacute;blica (OPERA).";
 choices[72][2] = "La gesti&oacute;n de la plataforma tecnol&oacute;gica es competencia de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones (DTIC), en virtud del Acuerdo de Colaboraci&oacute;n firmado por el Ministerio de la Presidencia y el Ministerio de Hacienda y Administraciones P&uacute;blicas, para el desarrollo del Portal de la Transparencia.";
 choices[72][3] = "La DTIC ser&aacute; responsable de la integridad y disponibilidad de la informaci&oacute;n, que se provea al Portal de la Transparencia a trav&eacute;s de enlaces o v&iacute;nculos a otras p&aacute;ginas o sedes electr&oacute;nicas cuya responsabilidad corresponda a distinto &oacute;rgano o Administraci&oacute;n P&uacute;blica.";
 answers[72] = choices[72][3];
 units[72] = "22";
 comments[72] = "Id Pregunta: 276. LEY DE TRANSPARENCIA";


//  Id pregunta: 98 Año de creación de pregunta: 2016
 questions[73]= "74)  La tecnolog&iacute;a de software que permite ejecutar al mismo tiempo varios sistemas operativos y aplicaciones en el mismo servidor se denomina:";
 choices[73]= new Array();
 choices[73][0] = "Clustering";
 choices[73][1] = "Deduplicaci&oacute;n";
 choices[73][2] = "Virtualizaci&oacute;n";
 choices[73][3] = "Contenerizaci&oacute;n";
 answers[73] = choices[73][2];
 units[73] = "124";
 comments[73] = "Id Pregunta: 98. AGE A1 2015";


//  Id pregunta: 503 Año de creación de pregunta: 2016
 questions[74]= "75)  Respecto a la Ley Org&aacute;nica 2/2012 se&ntilde;ale la respuesta falsa:";
 choices[74]= new Array();
 choices[74][0] = "La elaboraci&oacute;n, aprobaci&oacute;n y ejecuci&oacute;n de los Presupuestos y dem&aacute;s actuaciones que afecten a los gastos o ingresos de las Administraciones P&uacute;blicas y dem&aacute;s entidades que forman parte del sector p&uacute;blico se someter&aacute; al principio de estabilidad presupuestaria.";
 choices[74][1] = "Ninguna Administraci&oacute;n P&uacute;blica podr&aacute; incurrir en d&eacute;ficit estructural, definido como d&eacute;ficit ajustado del ciclo, neto de medidas excepcionales y temporales.";
 choices[74][2] = "Excepcionalmente, el Estado y las Comunidades Aut&oacute;nomas podr&aacute;n incurrir en d&eacute;ficit estructural en caso de cat&aacute;strofes naturales, recesi&oacute;n econ&oacute;mica grave o situaciones de emergencia extraordinaria que escapen al control de las Administraciones P&uacute;blicas y perjudiquen considerablemente su situaci&oacute;n financiera o su sostenibilidad econ&oacute;mica o social.";
 choices[74][3] = "Las Corporaciones Locales deber&aacute;n mantener una posici&oacute;n de equilibrio presupuestario.";
 answers[74] = choices[74][3];
 units[74] = "10";
 comments[74] = "Id Pregunta: 503. PRESUPUESTOS GENERALES";


