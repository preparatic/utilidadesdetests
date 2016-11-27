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

//  Id pregunta: 767 Año de creación de pregunta: 2016
 questions[0]= "1)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[0]= new Array();
 choices[0][0] = "la Administraci&oacute;n General del Estado";
 choices[0][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[0][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[0][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico o privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[0] = choices[0][3];
 units[0] = "4, 7, 8, 9";
 comments[0] = "Id Pregunta: 767. Ley 40/2015";


//  Id pregunta: 188 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;Puede el Estado transferir o delegar a las Comunidades Aut&oacute;nomas facultadas que son de su titularidad?";
 choices[1]= new Array();
 choices[1][0] = "No, en ning&uacute;n caso.";
 choices[1][1] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con cualquier tipo de facultades.";
 choices[1][2] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, sin que el Estado se pueda reservar ninguna forma de control.";
 choices[1][3] = ", mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, previendo en cada caso la correspondiente transferencia de medios financieros, as&iacute; como las formas de control que se reserve el Estado.";
 answers[1] = choices[1][3];
 units[1] = "1";
 comments[1] = "Id Pregunta: 188. CONSTITUCION1978";


//  Id pregunta: 413 Año de creación de pregunta: 2016
 questions[2]= "3)  Gozar&aacute;n de los derecho derivados del principio de igualdad de trato y de la prohibici&oacute;n de discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[2]= new Array();
 choices[2][0] = "La mujeres.";
 choices[2][1] = "Lo hombres.";
 choices[2][2] = "Todas las personas.";
 choices[2][3] = "Las mujeres y ni&ntilde;os menores de 16 a&ntilde;os.";
 answers[2] = choices[2][2];
 units[2] = "14";
 comments[2] = "Id Pregunta: 413. POLITICAS DE IGUALDAD";


//  Id pregunta: 355 Año de creación de pregunta: 2016
 questions[3]= "4)  En el marco de la Uni&oacute;n Europea, los dict&aacute;menes:";
 choices[3]= new Array();
 choices[3][0] = "Son vinculantes solamente.";
 choices[3][1] = "No son vinculantes, ya que su contenido no obliga a aqu&eacute;llos a los que van dirigidos.";
 choices[3][2] = "Son preceptivos y vinculantes.";
 choices[3][3] = "Son preceptivos y no vinculantes.";
 answers[3] = choices[3][1];
 units[3] = "5";
 comments[3] = "Id Pregunta: 355. UNION EUROPEA";


//  Id pregunta: 544 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Cu&aacute;l es el &oacute;rgano superior de gobernanza TIC en la Administraci&oacute;n General del Estado?";
 choices[4]= new Array();
 choices[4][0] = "El Comit&eacute; de Direcci&oacute;n TIC";
 choices[4][1] = "El Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[4][2] = "La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[4][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[4] = choices[4][3];
 units[4] = "26";
 comments[4] = "Id Pregunta: 544. Gobernanza TIC";


//  Id pregunta: 184 Año de creación de pregunta: 2016
 questions[5]= "6)  El T&iacute;tulo IV de la Constituci&oacute;n Espa&ntilde;ola de 1978 dispone que el Gobierno:";
 choices[5]= new Array();
 choices[5][0] = "Se compone del Presidente, los Vicepresidentes y los Secretarios de Estado.";
 choices[5][1] = "Ejerce la funci&oacute;n ejecutiva y la legislativa de acuerdo con la Constituci&oacute;n y las leyes.";
 choices[5][2] = "Cesa tras la celebraci&oacute;n de elecciones generales, en los casos de p&eacute;rdida de confianza parlamentaria, o por dimisi&oacute;n o fallecimiento de su Presidente.";
 choices[5][3] = "El presidente y los dem&aacute;s miembros del Gobierno son nombrados por el Rey a propuesta del Presidente del Congreso.";
 answers[5] = choices[5][2];
 units[5] = "1";
 comments[5] = "Id Pregunta: 184. CONSTITUCION1978";


//  Id pregunta: 693 Año de creación de pregunta: 2016
 questions[6]= "7)  Se&ntilde;ale de las siguientes la que NO corresponde a una herramienta de integraci&oacute;n continua:";
 choices[6]= new Array();
 choices[6][0] = "Jenkins";
 choices[6][1] = "Hudson";
 choices[6][2] = "SonarQube";
 choices[6][3] = "Todas lo son";
 answers[6] = choices[6][3];
 units[6] = "92";
 comments[6] = "Id Pregunta: 693. INTEGRACION CONTINUA";


//  Id pregunta: 7 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes asociaciones de protocolos y niveles OSI es correcta?";
 choices[7]= new Array();
 choices[7][0] = "Nivel 7 - MPLS.";
 choices[7][1] = "Nivel 3 - RARP.";
 choices[7][2] = "Nivel 2 - HDLC.";
 choices[7][3] = "Nivel 1 &ndash; CSMA/CD.";
 answers[7] = choices[7][2];
 units[7] = "105";
 comments[7] = "Id Pregunta: 7. AGE A1 2015";


//  Id pregunta: 264 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Cu&aacute;ntos vocales componen el Consejo General del Poder Judicial?";
 choices[8]= new Array();
 choices[8][0] = "Veinte.";
 choices[8][1] = "Quince.";
 choices[8][2] = "Diez.";
 choices[8][3] = "Doce.";
 answers[8] = choices[8][1];
 units[8] = "1";
 comments[8] = "Id Pregunta: 264. CONSTITUCION1978";


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


//  Id pregunta: 343 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;Cu&aacute;l es el n&uacute;mero m&iacute;nimo de parlamentarios de cinco Estados miembros para constituir un grupo pol&iacute;tico?:";
 choices[10]= new Array();
 choices[10][0] = "23";
 choices[10][1] = "20";
 choices[10][2] = "14";
 choices[10][3] = "18";
 answers[10] = choices[10][1];
 units[10] = "5";
 comments[10] = "Id Pregunta: 343. UNION EUROPEA";


//  Id pregunta: 28 Año de creación de pregunta: 2016
 questions[11]= "12)  En UNIX, la llamada &ldquo;FORK&rdquo;:";
 choices[11]= new Array();
 choices[11][0] = "Controla el tiempo de ejecuci&oacute;n de un proceso.";
 choices[11][1] = "Env&iacute;a una se&ntilde;al al proceso especificado.";
 choices[11][2] = "Crea una copia del proceso que hace la llamada.";
 choices[11][3] = "Elimina el mapa de memoria del proceso que hace la llamada.";
 answers[11] = choices[11][2];
 units[11] = "57";
 comments[11] = "Id Pregunta: 28. AGE A1 2015";


//  Id pregunta: 827 Año de creación de pregunta: 2016
 questions[12]= "13)  La recusaci&oacute;n se plantea...";
 choices[12]= new Array();
 choices[12][0] = "Antes de iniciado el procedimiento";
 choices[12][1] = "Una vez iniciado el procedimiento";
 choices[12][2] = "Cuando el instructor dicta propuesta de resoluci&oacute;n";
 choices[12][3] = "En cualquier momento del procedimiento";
 answers[12] = choices[12][0];
 units[12] = "4, 7, 8, 9";
 comments[12] = "Id Pregunta: 827. Ley 40/2015";


//  Id pregunta: 750 Año de creación de pregunta: 2016
 questions[13]= "14)  Es falso que:";
 choices[13]= new Array();
 choices[13][0] = "Son rasgos del modelo burocr&aacute;tico el pleno sometimiento al ordenamiento jur&iacute;dico y la impersonalidad en las relaciones.";
 choices[13][1] = "La Nueva Gesti&oacute;n P&uacute;blica ha sido el paradigma de reforma administrativa prevaleciente hasta principios de los 90, que tuvo gran influencia en los pa&iacute;ses angloamericanos y n&oacute;rdicos.";
 choices[13][2] = "Es un rasgo de la Nueva Gesti&oacute;n P&uacute;blica la terciarizaci&oacute;n de las actividades auxiliares o de apoyo, que pasan a ser licitadas competitivamente en el mercado.";
 choices[13][3] = "Una de las desventajas del modelo de la gobernanza es las redes pueden obstaculizar los cambios e innovaciones pol&iacute;ticos al dar un peso excesivo a los diversos intereses implicados.";
 answers[13] = choices[13][1];
 units[13] = "18, 20";
 comments[13] = "Id Pregunta: 750. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 724 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;C&uacute;al es la afirmaci&oacute;n incorrecta?";
 choices[14]= new Array();
 choices[14][0] = "El sprint release es aquel que implementa las tareas necesarias para poner el sistema en producci&oacute;n";
 choices[14][1] = "El sprint rel&eacute;ase es el &uacute;ltimo sprint de la metodolog&iacute;a SCRUM.";
 choices[14][2] = "En el sprint release se pueden llevan a cabo tareas relacionados con el despliegue y generaci&oacute;n de scripts de recuperaci&oacute;n del sistema";
 choices[14][3] = "En el sprint rel&eacute;ase se pueden llevar a cabo tareas relacionados con la documentaci&oacute;n, pruebas de carga, y tareas relacionadas con las bases de datos en producci&oacute;n.";
 answers[14] = choices[14][1];
 units[14] = "34, 84";
 comments[14] = "Id Pregunta: 724. Metodologias &aacute;giles";


//  Id pregunta: 195 Año de creación de pregunta: 2016
 questions[15]= "16)  La potestad reglamentaria constitucionalmente corresponde:";
 choices[15]= new Array();
 choices[15][0] = "Al Gobierno.";
 choices[15][1] = "A las Cortes Generales.";
 choices[15][2] = "Al Poder Judicial.";
 choices[15][3] = "Al Congreso de los Diputados.";
 answers[15] = choices[15][0];
 units[15] = "1";
 comments[15] = "Id Pregunta: 195. CONSTITUCION1978";


//  Id pregunta: 481 Año de creación de pregunta: 2016
 questions[16]= "17)  A tenor del art&iacute;culo 48 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, podr&aacute; ser diferido el vencimiento de la obligaci&oacute;n de pago del precio de compra de bienes inmuebles adquiridos directamente cuyo importe excede de:";
 choices[16]= new Array();
 choices[16][0] = "Cuatro millones de euros.";
 choices[16][1] = "Seis millones de euros.";
 choices[16][2] = "Siete millones de euros.";
 choices[16][3] = "Cinco millones de euros.";
 answers[16] = choices[16][1];
 units[16] = "10";
 comments[16] = "Id Pregunta: 481. PRESUPUESTOS GENERALES";


//  Id pregunta: 813 Año de creación de pregunta: 2016
 questions[17]= "18)  Existir&aacute; un Subdelegado del Gobierno, que estar&aacute; bajo la inmediata dependencia del Delegado del Gobierno:";
 choices[17]= new Array();
 choices[17][0] = "en cada Comunidad Aut&oacute;noma";
 choices[17][1] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas pluriprovinciales";
 choices[17][2] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas uniprovinciales";
 choices[17][3] = "en cada una de las localidades de las Comunidades Aut&oacute;nomas";
 answers[17] = choices[17][1];
 units[17] = "4, 7, 8, 9";
 comments[17] = "Id Pregunta: 813. Ley 40/2015";


//  Id pregunta: 705 Año de creación de pregunta: 2016
 questions[18]= "19)  La &Eacute;tica P&uacute;blica se puede definir como:";
 choices[18]= new Array();
 choices[18][0] = "El conjunto de normas que adoptan de manera voluntaria los trabajadores p&uacute;blicos con objeto de satisfacer las necesidades de los ciudadanos.";
 choices[18][1] = "El conjunto de comportamientos inadecuados por parte de empleados p&uacute;blicos y pol&iacute;ticos.";
 choices[18][2] = "El conjunto de normas que rigen la conducta de las personas que trabajan en las Administraciones P&uacute;blicas.";
 choices[18][3] = "El compromiso que adquieren los ciudadanos al relacionarse con las Administraciones P&uacute;blicas.";
 answers[18] = choices[18][2];
 units[18] = "22";
 comments[18] = "Id Pregunta: 705. &Eacute;tica p&uacute;blica";


//  Id pregunta: 575 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Cu&aacute;l de los siguientes sistemas de bases de datos es orientado a objetos?";
 choices[19]= new Array();
 choices[19][0] = "MySQL";
 choices[19][1] = "SQLite";
 choices[19][2] = "Zope";
 choices[19][3] = "MariaDB";
 answers[19] = choices[19][2];
 units[19] = "61";
 comments[19] = "Id Pregunta: 575. Tema 61. TAI 2016.";


//  Id pregunta: 492 Año de creación de pregunta: 2016
 questions[20]= "21)  El R&eacute;gimen Jur&iacute;dico de la Deuda del Estado se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[20]= new Array();
 choices[20][0] = "T&iacute;tulo V, Cap&iacute;tulo II, Secci&oacute;n 4.";
 choices[20][1] = "T&iacute;tulo V, Cap&iacute;tulo I, Secci&oacute;n 2.";
 choices[20][2] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[20][3] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[20] = choices[20][2];
 units[20] = "10";
 comments[20] = "Id Pregunta: 492. PRESUPUESTOS GENERALES";


//  Id pregunta: 94 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es propia de Apache Hadoop?";
 choices[21]= new Array();
 choices[21][0] = "Es un framework de software libre.";
 choices[21][1] = "Es una base de datos NoSQL.";
 choices[21][2] = "Est&aacute; basado en MapReduce.";
 choices[21][3] = "Puede emplearse en sistemas de datos masivos (Big Data).";
 answers[21] = choices[21][1];
 units[21] = "73";
 comments[21] = "Id Pregunta: 94. AGE A1 2015";


//  Id pregunta: 812 Año de creación de pregunta: 2016
 questions[22]= "23)  Las Delegaciones del Gobierno est&aacute;n adscritas org&aacute;nicamente a:";
 choices[22]= new Array();
 choices[22][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[22][1] = "el Consejo de Gobierno de la Comunidad Aut&oacute;noma";
 choices[22][2] = "el Ministerio del Interior";
 choices[22][3] = "la Administraci&oacute;n General del Estado";
 answers[22] = choices[22][0];
 units[22] = "4, 7, 8, 9";
 comments[22] = "Id Pregunta: 812. Ley 40/2015";


//  Id pregunta: 665 Año de creación de pregunta: 2016
 questions[23]= "24)  Seg&uacute;n la Ley 39/2015, un expediente administrativo contendr&aacute;:";
 choices[23]= new Array();
 choices[23][0] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios,la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento, y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[23][1] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios y un &iacute;ndice numerado de todos los documentos.";
 choices[23][2] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[23][3] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos, la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento  y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 answers[23] = choices[23][2];
 units[23] = "7";
 comments[23] = "Id Pregunta: 665. Art&iacute;culo 70 de la Ley 39/2015";


//  Id pregunta: 470 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Qui&eacute;n remitir&aacute; a las Cortes Generales un informe trimestral acerca de la utilizaci&oacute;n del Fondo regulado en el Fondo de Contingencia de ejecuci&oacute;n presupuestaria seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria?";
 choices[24]= new Array();
 choices[24][0] = "El Ministro de Econom&iacute;a.";
 choices[24][1] = "El Gobierno.";
 choices[24][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[24][3] = "El Presidente del Gobierno.";
 answers[24] = choices[24][1];
 units[24] = "10";
 comments[24] = "Id Pregunta: 470. PRESUPUESTOS GENERALES";


//  Id pregunta: 378 Año de creación de pregunta: 2016
 questions[25]= "26)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[25]= new Array();
 choices[25][0] = "Quince miembros.";
 choices[25][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[25][2] = "Los miembros que determine el Consejo.";
 choices[25][3] = "Un Presidente y quince miembros.";
 answers[25] = choices[25][1];
 units[25] = "14";
 comments[25] = "Id Pregunta: 378. UNION EUROPEA";


//  Id pregunta: 61 Año de creación de pregunta: 2016
 questions[26]= "27)  Indique a partir de qu&eacute; versi&oacute;n del sistema operativo Android se introdujo la posibilidad de que el usuario pudiera gestionar la concesi&oacute;n de permisos para cada aplicaci&oacute;n:";
 choices[26]= new Array();
 choices[26][0] = "Lollipop";
 choices[26][1] = "Jelly Bean";
 choices[26][2] = "Marshmallow";
 choices[26][3] = "KitKat";
 answers[26] = choices[26][2];
 units[26] = "59";
 comments[26] = "Id Pregunta: 61. AGE A1 2015";


//  Id pregunta: 352 Año de creación de pregunta: 2016
 questions[27]= "28)  La Comisi&oacute;n est&aacute; compuesta por:";
 choices[27]= new Array();
 choices[27][0] = "27 miembros, nacionales de los Estados comunitarios.";
 choices[27][1] = "20 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 choices[27][2] = "25 miembros, nacionales de los Estados comunitarios.";
 choices[27][3] = "d)22 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 answers[27] = choices[27][0];
 units[27] = "5";
 comments[27] = "Id Pregunta: 352. UNION EUROPEA";


//  Id pregunta: 307 Año de creación de pregunta: 2016
 questions[28]= "29)  Las elecciones al Parlamento Europeo tienen lugar cada:";
 choices[28]= new Array();
 choices[28][0] = "Seis a&ntilde;os.";
 choices[28][1] = "Cinco a&ntilde;os.";
 choices[28][2] = "Cuatro a&ntilde;os.";
 choices[28][3] = "Ocho a&ntilde;os.";
 answers[28] = choices[28][1];
 units[28] = "5";
 comments[28] = "Id Pregunta: 307. UNION EUROPEA";


//  Id pregunta: 26 Año de creación de pregunta: 2016
 questions[29]= "30)  Usted, como directivo TIC de la AGE, decide crear un portal web, con una direcci&oacute;n electr&oacute;nica nueva, con el objetivo de informar al ciudadano sobre determinados aspectos relacionados con su unidad. &iquest;Cu&aacute;l de los siguientes tipos de certificado utilizar&iacute;a para identificar a los servidores de su portal informativo?";
 choices[29]= new Array();
 choices[29][0] = "Sello electr&oacute;nico";
 choices[29][1] = "Sede electr&oacute;nica";
 choices[29][2] = "Servidor seguro (SSL/TLS)";
 choices[29][3] = "Empleado p&uacute;blico";
 answers[29] = choices[29][2];
 units[29] = "7";
 comments[29] = "Id Pregunta: 26. AGE A1 2015";


//  Id pregunta: 532 Año de creación de pregunta: 2016
 questions[30]= "31)  Deber&aacute; incorporar al expediente administrativo acreditaci&oacute;n de la condici&oacute;n de representante y de los poderes que tiene reconocidos en dicho momento:";
 choices[30]= new Array();
 choices[30][0] = "el &oacute;rgano competente para la iniciaci&oacute;n del procedimiento";
 choices[30][1] = "el &oacute;rgano competente para la instrucci&oacute;n del procedimiento";
 choices[30][2] = "el &oacute;rgano competente para la tramitaci&oacute;n del procedimiento";
 choices[30][3] = "el &oacute;rgano competente para la terminaci&oacute;n del procedimiento";
 answers[30] = choices[30][2];
 units[30] = "7";
 comments[30] = "Id Pregunta: 532. LEY 39/2015";


//  Id pregunta: 229 Año de creación de pregunta: 2016
 questions[31]= "32)  De acuerdo con lo previsto en la Constituci&oacute;n Espa&ntilde;ola, el Gobierno y la administraci&oacute;n aut&oacute;noma de las provincias estar&aacute;n encomendados:";
 choices[31]= new Array();
 choices[31][0] = "A Diputaciones u otras Corporaciones de car&aacute;cter representativo.";
 choices[31][1] = "A los Subdelegados del Gobierno y a los Directores Insulares.";
 choices[31][2] = "A las Diputaciones y a las Mancomunidades de Municipios.";
 choices[31][3] = "A las Diputaciones y a las Comarcas.";
 answers[31] = choices[31][3];
 units[31] = "1";
 comments[31] = "Id Pregunta: 229. CONSTITUCION1978";


//  Id pregunta: 108 Año de creación de pregunta: 2016
 questions[32]= "33)  Son proyectos de Apache relacionados con Big Data:";
 choices[32]= new Array();
 choices[32][0] = "Hadoop";
 choices[32][1] = "Spark";
 choices[32][2] = "A) y B)";
 choices[32][3] = "Niguno de los anteriores";
 answers[32] = choices[32][2];
 units[32] = "73";
 comments[32] = "Id Pregunta: 108. ";


//  Id pregunta: 757 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Cu&aacute;l de las siguientes no es una prioridad propuesta por la Estrategia Europa 2020?";
 choices[33]= new Array();
 choices[33][0] = "Crecimiento sostenible";
 choices[33][1] = "Crecimiento inteligente";
 choices[33][2] = "Crecimiento digital";
 choices[33][3] = "Crecimiento integrador";
 answers[33] = choices[33][2];
 units[33] = "19";
 comments[33] = "Id Pregunta: 757. Europa 2020";


//  Id pregunta: 533 Año de creación de pregunta: 2016
 questions[34]= "35)  La falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n no impedir&aacute; que se tenga por realizado el acto de que se trate, siempre que se aporte aqu&eacute;lla o se subsane el defecto dentro del plazo de:";
 choices[34]= new Array();
 choices[34][0] = "5 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[34][1] = "10 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[34][2] = "15 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[34][3] = "20 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 answers[34] = choices[34][1];
 units[34] = "7";
 comments[34] = "Id Pregunta: 533. LEY 39/2015";


//  Id pregunta: 73 Año de creación de pregunta: 2016
 questions[35]= "36)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Digitalizaci&oacute;n de Documentos, &iquest;cu&aacute;l de los siguientes metadatos no es considerado como metadato complementario?";
 choices[35]= new Array();
 choices[35][0] = "Resoluci&oacute;n, que indica el valor de resoluci&oacute;n en p&iacute;xeles por pulgada empleada en la digitalizaci&oacute;n.";
 choices[35][1] = "Origen, que indica si el contenido del documento fue creado por un ciudadano o por una administraci&oacute;n.";
 choices[35][2] = "Tama&ntilde;o, que indica el valor y unidades del tama&ntilde;o l&oacute;gico del documento digitalizado.";
 choices[35][3] = "Idioma, que indica el idioma del contenido del documento digitalizado.";
 answers[35] = choices[35][1];
 units[35] = "44";
 comments[35] = "Id Pregunta: 73. AGE A1 2015";


//  Id pregunta: 489 Año de creación de pregunta: 2016
 questions[36]= "37)  A tenor del art&iacute;culo 47.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el n&uacute;mero de ejercicios a que pueden aplicarse los gastos no ser&aacute; superior a:";
 choices[36]= new Array();
 choices[36][0] = "Dos.";
 choices[36][1] = "Cuatro.";
 choices[36][2] = "Cinco.";
 choices[36][3] = "Tres.";
 answers[36] = choices[36][1];
 units[36] = "10";
 comments[36] = "Id Pregunta: 489. PRESUPUESTOS GENERALES";


//  Id pregunta: 838 Año de creación de pregunta: 2016
 questions[37]= "38)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta correcta.";
 choices[37]= new Array();
 choices[37][0] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos provisionalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[37][1] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos temporalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[37][2] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos eventualmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[37][3] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos circunstancialmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 answers[37] = choices[37][1];
 units[37] = "4, 7, 8, 9";
 comments[37] = "Id Pregunta: 838. Ley 40/2015";


//  Id pregunta: 330 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Cu&aacute;les son las funciones de la Conferencia para Asuntos Relacionados con las Comunidades Europeas?:";
 choices[38]= new Array();
 choices[38][0] = "Garantizar el cumplimiento en las Conferencias Sectoriales de los procedimientos y f&oacute;rmulas de participaci&oacute;n de las Comunidades Aut&oacute;nomas.";
 choices[38][1] = "El tratamiento y resoluci&oacute;n con arreglo al principio de cooperaci&oacute;n de aquellas cuestiones de alcance general o contenido institucional relacionadas con las Comunidades Europeas.";
 choices[38][2] = "Todas son correctas.";
 choices[38][3] = "Informaci&oacute;n a las Comunidades Aut&oacute;nomas y la discusi&oacute;n en com&uacute;n sobre el desarrollo del proceso de constituci&oacute;n europea.";
 answers[38] = choices[38][2];
 units[38] = "5";
 comments[38] = "Id Pregunta: 330. UNION EUROPEA";


//  Id pregunta: 387 Año de creación de pregunta: 2016
 questions[39]= "40)  El art&iacute;culo 37 de la Ley Org&aacute;nica 3/2007, para la igualdad efectiva de mujeres y hombres, indica que la Corporaci&oacute;n RTVE, en el ejercicio de su funci&oacute;n, perseguir&aacute; en su programaci&oacute;n:";
 choices[39]= new Array();
 choices[39][0] = "Mostrar anuncios para la igualdad de forma habitual.";
 choices[39][1] = "Ofrecer trabajo a mujeres v&iacute;ctimas de violencia de g&eacute;nero.";
 choices[39][2] = "Promover la incorporaci&oacute;n de mujeres a puestos visibles ante las c&aacute;maras.";
 choices[39][3] = "Reflejar adecuadamente la presencia de las mujeres en los diversos &aacute;mbitos de la vida social.";
 answers[39] = choices[39][3];
 units[39] = "14";
 comments[39] = "Id Pregunta: 387. POLITICAS DE IGUALDAD";


//  Id pregunta: 485 Año de creación de pregunta: 2016
 questions[40]= "41)  Se&ntilde;ale la respuesta incorrecta respecto de la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[40]= new Array();
 choices[40][0] = "El principio de dotaci&oacute;n presupuestaria implica que los Presupuestos Generales del Estado de cada ejercicio contendr&aacute;n los cr&eacute;ditos necesarios para atender a las transferencias de medios econ&oacute;micos que deban realizarse a las comunidades aut&oacute;nomas por aplicaci&oacute;n del sistema de financiaci&oacute;n vigente en cada momento.";
 choices[40][1] = "Los cr&eacute;ditos para hacer efectivas las liquidaciones definitivas de ejercicios anteriores tendr&aacute;n el car&aacute;cter de ampliables.";
 choices[40][2] = "El reintegro de ayudas y la responsabilidad financiera derivados de la gesti&oacute;n de los fondos procedentes de la Uni&oacute;n Europea se someter&aacute; a lo previsto en la Ley General de Subvenciones y en la normativa comunitaria.";
 choices[40][3] = "Los anticipos para ejecuci&oacute;n de acciones y programas financiados o cofinanciados por fondos europeos que estuvieran pendientes de cancelar al finalizar el ejercicio, no podr&aacute;n cancelarse en el ejercicio siguiente.";
 answers[40] = choices[40][3];
 units[40] = "10";
 comments[40] = "Id Pregunta: 485. PRESUPUESTOS GENERALES";


//  Id pregunta: 1 Año de creación de pregunta: 2016
 questions[41]= "42)  Los medios y servicios compartidos, establecidos en el Real Decreto 806/2014 dentro del modelo de gobernanza en el &aacute;mbito de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones de la Administraci&oacute;n General del Estado, son tales que:";
 choices[41]= new Array();
 choices[41][0] = "Su declaraci&oacute;n presupone que el servicio se encuentra en producci&oacute;n, listo para la adhesi&oacute;n de las diferentes unidades departamentales.";
 choices[41][1] = "Dado su car&aacute;cter obligatorio y sustitutivo, no se permite acordar excepciones por razones econ&oacute;micas, t&eacute;cnicas o de oportunidad sobrevenidas.";
 choices[41][2] = "Su declaraci&oacute;n establece la habilitaci&oacute;n para el desarrollo de las medidas t&eacute;cnicas, organizativas, presupuestarias y normativas.";
 choices[41][3] = "Su provisi&oacute;n se realiza directa y exclusivamente por medio de la Direcci&oacute;n General de Administraci&oacute;n Digital";
 answers[41] = choices[41][2];
 units[41] = "26";
 comments[41] = "Id Pregunta: 1. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 35 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Qu&eacute; es Java Web Start?";
 choices[42]= new Array();
 choices[42][0] = "Un motor para la ejecuci&oacute;n de Java Serlvets y JavaServer Pages.";
 choices[42][1] = "Una interfaz de programaci&oacute;n para entornos de ventanas en Java.";
 choices[42][2] = "Una tecnolog&iacute;a de compiladores empleada por Java.";
 choices[42][3] = "Una tecnolog&iacute;a que permite descargar y ejecutar aplicaciones Java.";
 answers[42] = choices[42][3];
 units[42] = "64";
 comments[42] = "Id Pregunta: 35. AGE A1 2015";


//  Id pregunta: 342 Año de creación de pregunta: 2016
 questions[43]= "44)  La moci&oacute;n de censura contra la Comisi&oacute;n existe desde:";
 choices[43]= new Array();
 choices[43][0] = "El Tratado de Maastrich.";
 choices[43][1] = "El Tratado de Amsterdam.";
 choices[43][2] = "El Tratado de Par&iacute;s.";
 choices[43][3] = "El Tratado de Roma.";
 answers[43] = choices[43][3];
 units[43] = "5";
 comments[43] = "Id Pregunta: 342. UNION EUROPEA";


//  Id pregunta: 32 Año de creación de pregunta: 2016
 questions[44]= "45)  El art&iacute;culo 16 del Esquema Nacional de Interoperabilidad establece las condiciones de licenciamiento aplicables en el &aacute;mbito de la reutilizaci&oacute;n y transferencia de tecnolog&iacute;a, &iquest;cu&aacute;l de las siguientes licencias recomienda expresamente aplicar, sin perjuicio de otras licencias que garanticen los derechos expuestos en el mencionado art&iacute;culo?";
 choices[44]= new Array();
 choices[44][0] = "ASF-AL (Apache License 2.0)";
 choices[44][1] = "EUPL (European Union Public License)";
 choices[44][2] = "LGPL (Lesser General Public License)";
 choices[44][3] = "MIT(MIT License)";
 answers[44] = choices[44][1];
 units[44] = "43";
 comments[44] = "Id Pregunta: 32. AGE A1 2015";


//  Id pregunta: 848 Año de creación de pregunta: 2016
 questions[45]= "46)  El RPO (Recovery Point Objective) de una organizaci&oacute;n son 2 horas. &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?: ";
 choices[45]= new Array();
 choices[45][0] = "No m&aacute;s de 2 horas de datos de producci&oacute;n se pueden perder en caso de desastre";
 choices[45][1] = "No m&aacute;s de 4 horas de datos de producci&oacute;n se pueden perder en caso de desastre";
 choices[45][2] = "El tiempo para recuperar los sistemas en producci&oacute;n de nuevo no puede ser m&aacute;s de 2 horas.";
 choices[45][3] = "El tiempo para recuperar los sistemas en producci&oacute;n de nuevo no puede ser m&aacute;s de 4 horas.";
 answers[45] = choices[45][0];
 units[45] = "45";
 comments[45] = "Id Pregunta: 848. Xunta de Galicia 2015";


//  Id pregunta: 551 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Cu&aacute;l es el &oacute;rgano t&eacute;cnico de cooperaci&oacute;n de la Administraci&oacute;n General del Estado, de las Administraciones de las Comunidades Aut&oacute;nomas y de las Entidades Locales en materia de administraci&oacute;n electr&oacute;nica definido en la ley 40/2015 de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[46]= new Array();
 choices[46][0] = "La Conferencia Sectorial de Telecomunicaciones y Sociedad de la Informaci&oacute;n";
 choices[46][1] = "El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica";
 choices[46][2] = "La Comisi&oacute;n Sectorial de administraci&oacute;n electr&oacute;nica";
 choices[46][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[46] = choices[46][2];
 units[46] = "26";
 comments[46] = "Id Pregunta: 551. Gobernanza TIC";


//  Id pregunta: 499 Año de creación de pregunta: 2016
 questions[47]= "48)  A tenor de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la cuant&iacute;a global de los anticipos de caja fija no podr&aacute; superar para cada ministerio y organismo aut&oacute;nomo:";
 choices[47]= new Array();
 choices[47][0] = "El 7% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[47][1] = "El 5% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[47][2] = "El 6% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[47][3] = "El 8% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 answers[47] = choices[47][0];
 units[47] = "10";
 comments[47] = "Id Pregunta: 499. PRESUPUESTOS GENERALES";


//  Id pregunta: 685 Año de creación de pregunta: 2016
 questions[48]= "49)  Se&ntilde;ale el plazo en que deben ser auditados los prestadores cualificados de servicios de confianza";
 choices[48]= new Array();
 choices[48][0] = "Al menos cada 12 meses";
 choices[48][1] = "El Reglamento no trata la supervisi&oacute;n de los prestadores cualificados de servicios de confianza, dejando tal cuesti&oacute;n a la regulaci&oacute;n nacional de cada Estado miembro";
 choices[48][2] = "Al menos cada 18 meses";
 choices[48][3] = "Al menos cada 24 meses";
 answers[48] = choices[48][3];
 units[48] = "77";
 comments[48] = "Id Pregunta: 685. Art&iacute;culo 20 del Reglamento 910/2014";


//  Id pregunta: 713 Año de creación de pregunta: 2016
 questions[49]= "50)  Entre las funcionalidades generales de un servidor de integraci&oacute;n continua NO se encuentra";
 choices[49]= new Array();
 choices[49][0] = "La ejecuci&oacute;n de una serie de test: JUnit, Cactus, Auditoria del c&oacute;digo fuente, test IHM, test funcionales.";
 choices[49][1] = "Permite realiza el despliegue de archivos en el entorno de producci&oacute;n.";
 choices[49][2] = "La notificaci&oacute;n del resultado por medios como correo electr&oacute;nico o RSS.";
 choices[49][3] = "La creaci&oacute;n de un informe de estad&iacute;sticas.";
 answers[49] = choices[49][1];
 units[49] = "92";
 comments[49] = "Id Pregunta: 713. INTEGRACION CONTINUA";


//  Id pregunta: 29 Año de creación de pregunta: 2016
 questions[50]= "51)  De acuerdo con el art&iacute;culo 62 de la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, se&ntilde;ale la respuesta correcta:";
 choices[50]= new Array();
 choices[50][0] = "El uso del dominio p&uacute;blico radioel&eacute;ctrico s&oacute;lo puede ser de dos tipos: especial o privativo.";
 choices[50][1] = "El uso com&uacute;n del dominio p&uacute;blico radioel&eacute;ctrico precisa de t&iacute;tulo habilitante.";
 choices[50][2] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico es el que se realiza mediante la explotaci&oacute;n en exclusiva, o por un n&uacute;mero limitado de usuarios, de determinadas frecuencias en un mismo &aacute;mbito f&iacute;sico de aplicaci&oacute;n.";
 choices[50][3] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico es el que se lleve a cabo de las bandas de frecuencias habilitadas para su explotaci&oacute;n de forma compartida, sin limitaci&oacute;n de n&uacute;mero de operadores o usuarios y con las condiciones t&eacute;cnicas y para los servicios que se establezcan en cada caso.";
 answers[50] = choices[50][2];
 units[50] = "121";
 comments[50] = "Id Pregunta: 29. AGE A1 2015";


//  Id pregunta: 717 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;A trav&eacute;s de qu&eacute; empresa surgen las metodolog&iacute;as lean?";
 choices[51]= new Array();
 choices[51][0] = "Ford";
 choices[51][1] = "Google";
 choices[51][2] = "Toyota";
 choices[51][3] = "Facebook";
 answers[51] = choices[51][2];
 units[51] = "34";
 comments[51] = "Id Pregunta: 717. Metodologias Lean";


//  Id pregunta: 523 Año de creación de pregunta: 2016
 questions[52]= "53)  Se consideran interesados en el procedimiento administrativo:";
 choices[52]= new Array();
 choices[52][0] = "quienes lo promuevan como titulares de derechos o intereses leg&iacute;timos individuales o colectivos";
 choices[52][1] = "los que, habiendo iniciado el procedimiento, tengan derechos que puedan resultar afectados por la decisi&oacute;n que en el mismo se adopte";
 choices[52][2] = "aquellos cuyos intereses leg&iacute;timos, individuales o colectivos, puedan resultar afectados por la resoluci&oacute;n y se personen en el procedimiento durante el tr&aacute;mite de audiencia";
 choices[52][3] = "todas son correctas";
 answers[52] = choices[52][0];
 units[52] = "7";
 comments[52] = "Id Pregunta: 523. LEY 39/2015";


//  Id pregunta: 39 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes respuestas NO es un servicio definido por el Open Geospatial Consortium (OGC)?";
 choices[53]= new Array();
 choices[53][0] = "WMS sirve mapas de forma din&aacute;mica presentando la informaci&oacute;n como im&aacute;genes digitales.";
 choices[53][1] = "WMTS permite la visualizaci&oacute;n de mapas a trav&eacute;s de teselas (tiles) de im&aacute;genes.";
 choices[53][2] = "WRS permite la consulta de colecciones de mapas raster.";
 choices[53][3] = "WFS permite la consulta y descarga de datos vectoriales.";
 answers[53] = choices[53][2];
 units[53] = "71";
 comments[53] = "Id Pregunta: 39. AGE A1 2015";


//  Id pregunta: 408 Año de creación de pregunta: 2016
 questions[54]= "55)  La igualdad efectiva entre mujeres y hombres est&aacute; regulada en:";
 choices[54]= new Array();
 choices[54][0] = "Ley Org&aacute;nica 7/2003, de 22 de marzo.";
 choices[54][1] = "Ley Org&aacute;nica 3/2003, de 22 de marzo.";
 choices[54][2] = "Ley 13/2007, de 26 de noviembre.";
 choices[54][3] = "Ley 3/2007, de 26 de noviembre.";
 answers[54] = choices[54][1];
 units[54] = "14";
 comments[54] = "Id Pregunta: 408. POLITICAS DE IGUALDAD";


//  Id pregunta: 584 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Con qu&eacute; frecuencia se revisa la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE, para su alineamiento con las pol&iacute;ticas p&uacute;blicas del gobierno?";
 choices[55]= new Array();
 choices[55][0] = "Bienalmente";
 choices[55][1] = "Anualmente";
 choices[55][2] = "Semestralmente";
 choices[55][3] = "Cada cuatro a&ntilde;os";
 answers[55] = choices[55][1];
 units[55] = "19";
 comments[55] = "Id Pregunta: 584. Estrategia TIC";


//  Id pregunta: 655 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Qu&eacute; aplicativo no se encuentra dentro del ecosistemas de Haddoop?";
 choices[56]= new Array();
 choices[56][0] = "Yarn";
 choices[56][1] = "Flume";
 choices[56][2] = "Hive";
 choices[56][3] = "BizAgi";
 answers[56] = choices[56][3];
 units[56] = "73";
 comments[56] = "Id Pregunta: 655. ";


//  Id pregunta: 609 Año de creación de pregunta: 2016
 questions[57]= "58)  Dentro de las t&eacute;cnicas de clasificaci&oacute;n de datos tenemos los m&eacute;todos de clasificaci&oacute;n interna. &iquest;A qu&eacute; tipo de algoritmo de ordenaci&oacute;n o clasificaci&oacute;n pertenece el m&eacute;todo de la burbuja?";
 choices[57]= new Array();
 choices[57][0] = "Clasificaci&oacute;n por inserci&oacute;n.";
 choices[57][1] = "Clasificaci&oacute;n por cuenta.";
 choices[57][2] = "Clasificaci&oacute;n por selecci&oacute;n.";
 choices[57][3] = "Clasificaci&oacute;n por intercambio.";
 answers[57] = choices[57][3];
 units[57] = "56";
 comments[57] = "Id Pregunta: 609. Junta de Extremadura A1 2015";


//  Id pregunta: 601 Año de creación de pregunta: 2016
 questions[58]= "59)  Los criptosistemas pueden clasificarse en:";
 choices[58]= new Array();
 choices[58][0] = "Concretos, Estables e Inestables.";
 choices[58][1] = "Sim&eacute;tricos, Paralelos y Referenciales.";
 choices[58][2] = "Asim&eacute;tricos, Referenciales y Concretos.";
 choices[58][3] = "Sim&eacute;tricos, Asim&eacute;tricos e H&iacute;bridos.";
 answers[58] = choices[58][3];
 units[58] = "76";
 comments[58] = "Id Pregunta: 601. Junta de Extremadura A1 2015";


//  Id pregunta: 770 Año de creación de pregunta: 2016
 questions[59]= "60)  Las Administraciones P&uacute;blicas:";
 choices[59]= new Array();
 choices[59][0] = "se relacionar&aacute;n entre s&iacute; y con sus &oacute;rganos, organismos p&uacute;blicos y entidades vinculados o dependientes a trav&eacute;s de medios no electr&oacute;nicos, que aseguren la interoperabilidad y seguridad de los sistemas y soluciones adoptadas por cada una de ellas";
 choices[59][1] = "garantizar&aacute;n la protecci&oacute;n de los datos de car&aacute;cter personal";
 choices[59][2] = "facilitar&aacute;n preferentemente la prestaci&oacute;n disociada de servicios a los interesados";
 choices[59][3] = "todas son correctas";
 answers[59] = choices[59][1];
 units[59] = "4, 7, 8, 9";
 comments[59] = "Id Pregunta: 770. Ley 40/2015";


//  Id pregunta: 599 Año de creación de pregunta: 2016
 questions[60]= "61)  Algunos de los elementos tecnol&oacute;gicos que intervienen en la seguridad perimetral corporativa son:";
 choices[60]= new Array();
 choices[60][0] = "En la seguridad perimetral corporativa s&oacute;lo intervienen enrutadores y switches. .";
 choices[60][1] = "Switches, servidores y aplicaciones departamentales.";
 choices[60][2] = "Enrutadores , cortafuegos y sistemas VPN.";
 choices[60][3] = "Servidores, tecnolog&iacute;as inal&aacute;mbricas, sistemas de usuarios y aplicaciones departamentales.";
 answers[60] = choices[60][2];
 units[60] = "45";
 comments[60] = "Id Pregunta: 599. Junta de Extremadura A1 2015";


//  Id pregunta: 733 Año de creación de pregunta: 2016
 questions[61]= "62)  Son l&iacute;neas de acci&oacute;n del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP.";
 choices[61]= new Array();
 choices[61][0] = "Disponer de sistemas de an&aacute;lisis de datos para la toma de decisiones y de funcionarios formados adecuadamente.";
 choices[61][1] = "Que en el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser electr&oacute;nica.";
 choices[61][2] = "Un mejor formaci&oacute;n del funcionariado y una atenci&oacute;n al ciudadano acorde a las nuevas tecnolog&iacute;as.";
 choices[61][3] = "Desarrollar el puesto de trabajo digital y mejorar la satisfacci&oacute;n del usuario en el uso de los servicios p&uacute;blicos digitales.";
 answers[61] = choices[61][3];
 units[61] = "28";
 comments[61] = "Id Pregunta: 733. Estrategia TIC";


//  Id pregunta: 409 Año de creación de pregunta: 2016
 questions[62]= "63)  La mayor novedad de la Ley para la igualdad efectiva de mujeres y hombres, radica en:";
 choices[62]= new Array();
 choices[62][0] = "Prevenir las conductas discriminatorias.";
 choices[62][1] = "Proveer pol&iacute;ticas activas para hacer efectivo el principio de igualdad.";
 choices[62][2] = "Todas son correctas.";
 choices[62][3] = "Proveer pol&iacute;ticas pasivas para hacer efectivo el principio de igualdad.";
 answers[62] = choices[62][2];
 units[62] = "14";
 comments[62] = "Id Pregunta: 409. POLITICAS DE IGUALDAD";


//  Id pregunta: 512 Año de creación de pregunta: 2016
 questions[63]= "64)  Podr&aacute;n establecerse especialidades del procedimiento referidas a los &oacute;rganos competentes, plazos propios del concreto procedimiento por raz&oacute;n de la materia, formas de iniciaci&oacute;n y terminaci&oacute;n, publicaci&oacute;n e informes a recabar:";
 choices[63]= new Array();
 choices[63][0] = "solo mediante ley";
 choices[63][1] = "reglamentariamente";
 choices[63][2] = "mediante ley o reglamentariamente";
 choices[63][3] = "ninguna es correcta";
 answers[63] = choices[63][1];
 units[63] = "7";
 comments[63] = "Id Pregunta: 512. LEY 39/2015";


//  Id pregunta: 491 Año de creación de pregunta: 2016
 questions[64]= "65)  Seg&uacute;n Ley 47/2003, de 26 de noviembre, General Presupuestaria, el conjunto de gastos que se considera necesario realizar en el desarrollo de actividades orientadas a la consecuci&oacute;n de determinados objetivos preestablecidos es:";
 choices[64]= new Array();
 choices[64][0] = "Un programa presupuestario.";
 choices[64][1] = "Un concepto presupuestario.";
 choices[64][2] = "Una aplicaci&oacute;n presupuestaria.";
 choices[64][3] = "Un cr&eacute;dito presupuestario.";
 answers[64] = choices[64][0];
 units[64] = "10";
 comments[64] = "Id Pregunta: 491. PRESUPUESTOS GENERALES";


//  Id pregunta: 84 Año de creación de pregunta: 2016
 questions[65]= "66)  En el marco europeo de interoperabilidad de sistemas de informaci&oacute;n, &iquest;qu&eacute; programa de la Uni&oacute;n Europea ha estado en vigor entre 2010 y 2015?";
 choices[65]= new Array();
 choices[65][0] = "Interchange of Data between Administrations (IDA)";
 choices[65][1] = "Interoperability Solutions for European Public Administrations (ISA)";
 choices[65][2] = "Interoperable Delivery of Pan-European eGovernment Services to Public Administrations, Businesses and Citizens (IDABC)";
 choices[65][3] = "Interoperability Electronic European Solution (IEES)";
 answers[65] = choices[65][1];
 units[65] = "43";
 comments[65] = "Id Pregunta: 84. AGE A1 2015";


//  Id pregunta: 627 Año de creación de pregunta: 2016
 questions[66]= "67)  Seg&uacute;n el Real Decreto 3/2010 sobre el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; organismo es el encargado de actuar ante cualquier agresi&oacute;n recibida en los sistemas de informaci&oacute;n de las Administraciones P&uacute;blicas?";
 choices[66]= new Array();
 choices[66][0] = "El CCN-CERT (Centro Criptol&oacute;gico Nacional&ndash;Computer Emergency Reaction Team).";
 choices[66][1] = "El GDT (Grupo de Delitos Telem&aacute;ticos).";
 choices[66][2] = "La BIT (Brigada de Investigaci&oacute;n Tecnol&oacute;gica).";
 choices[66][3] = "El CCN-STIC (Centro Criptol&oacute;gico Nacional-Seguridad de las Tecnolog&iacute;as de Informaci&oacute;n y Comunicaciones).";
 answers[66] = choices[66][0];
 units[66] = "46";
 comments[66] = "Id Pregunta: 627. Junta de Extremadura A1 2015";


//  Id pregunta: 10 Año de creación de pregunta: 2016
 questions[67]= "68)  El servicio mediante el cual se localiza un terminal m&oacute;vil dentro de alguna de las N c&eacute;lulas gestionadas coordinadamente en una zona de cobertura se denomina:";
 choices[67]= new Array();
 choices[67][0] = "Paging";
 choices[67][1] = "Roaming";
 choices[67][2] = "Handover";
 choices[67][3] = "Trunking";
 answers[67] = choices[67][0];
 units[67] = "117";
 comments[67] = "Id Pregunta: 10. AGE A1 2015";


//  Id pregunta: 569 Año de creación de pregunta: 2016
 questions[68]= "69)  El sector Servicios NO incluye:";
 choices[68]= new Array();
 choices[68][0] = "El Comercio";
 choices[68][1] = "Los Transportes";
 choices[68][2] = "La Energ&iacute;a";
 choices[68][3] = "Las Comunicaciones";
 answers[68] = choices[68][2];
 units[68] = "12";
 comments[68] = "Id Pregunta: 569. Modelo econ&oacute;mico";


//  Id pregunta: 93 Año de creación de pregunta: 2016
 questions[69]= "70)  Entre las tecnolog&iacute;as o herramientas utilizadas para trabajar en sistemas de Big Data NO se encuentra:";
 choices[69]= new Array();
 choices[69][0] = "Almacenamiento orientado a columnas";
 choices[69][1] = "Framework MapReduce";
 choices[69][2] = "OLTP";
 choices[69][3] = "Bases de datos clave-valor";
 answers[69] = choices[69][2];
 units[69] = "73";
 comments[69] = "Id Pregunta: 93. AGE A1 2015";


//  Id pregunta: 716 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;C&uacute;al es un objetivo de las metodolog&iacute;as lean?";
 choices[70]= new Array();
 choices[70][0] = "Maximizar el valor para los clientes";
 choices[70][1] = "Reducir los costes y aumentar la calidad del producto o del servicio";
 choices[70][2] = " Entregar productos de manera m&aacute;s r&aacute;pida";
 choices[70][3] = "Todos los anteriores son objetivos de la metodolog&iacute;a lean";
 answers[70] = choices[70][3];
 units[70] = "34";
 comments[70] = "Id Pregunta: 716. Metodologias Lean";


//  Id pregunta: 483 Año de creación de pregunta: 2016
 questions[71]= "72)  La Ley 47/2003, de 26 de noviembre, General Presupuestaria se encuentra formada por:";
 choices[71]= new Array();
 choices[71][0] = "180 art&iacute;culos.";
 choices[71][1] = "182 art&iacute;culos.";
 choices[71][2] = "185 art&iacute;culos.";
 choices[71][3] = "190 art&iacute;culos.";
 answers[71] = choices[71][1];
 units[71] = "10";
 comments[71] = "Id Pregunta: 483. PRESUPUESTOS GENERALES";


//  Id pregunta: 114 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Qu&eacute; es la Garant&iacute;a Juvenil?";
 choices[72]= new Array();
 choices[72][0] = "Una iniciativa europea que pretende facilitar el acceso de los j&oacute;venes al mercado de trabajo ofreci&eacute;ndoles una oferta de empleo, de educaci&oacute;n o formaci&oacute;n tras haber finalizado sus estudios o quedar desempleados";
 choices[72][1] = "Un Plan que permite la concesi&oacute;n de subvenciones a j&oacute;venes para facilitar el alquiler de su vivienda habitual.";
 choices[72][2] = "Un Plan que concede cr&eacute;ditos en condiciones ventajosas a j&oacute;venes emprendedores";
 choices[72][3] = "Una inciativa europea que facilita a los j&oacute;venes el acceso a las nuevas tecnolog&iacute;as";
 answers[72] = choices[72][0];
 units[72] = "15";
 comments[72] = "Id Pregunta: 114. ";


//  Id pregunta: 711 Año de creación de pregunta: 2016
 questions[73]= "74)  En relaci&oacute;n al Portal de Transparencia de la AGE:";
 choices[73]= new Array();
 choices[73][0] = "La informaci&oacute;n m&aacute;s relevante para el ciudadano y de frecuente acceso estar&aacute; disponible en el Portal de Transparencia, no pudiendo accederse a informaci&oacute;n que no se encuentre ya publicada.";
 choices[73][1] = "El ejercicio del Derecho de Acceso abre con la administraci&oacute;n un procedimiento administrativo que exige la identificaci&oacute;n del solicitante.";
 choices[73][2] = "En el Portal de Transparencia de la AGE s&oacute;lo se puede acceder a informaci&oacute;n de tipo institucional.";
 choices[73][3] = "El CTBG es el responsable del Portal de Transparencia.";
 answers[73] = choices[73][1];
 units[73] = "22";
 comments[73] = "Id Pregunta: 711. Portal de Transparencia";


//  Id pregunta: 96 Año de creación de pregunta: 2016
 questions[74]= "75)  Indique cu&aacute;l de las siguientes soluciones tecnol&oacute;gicas NO se utiliza para virtualizaci&oacute;n:";
 choices[74]= new Array();
 choices[74][0] = "VMware ESX";
 choices[74][1] = "XenServer";
 choices[74][2] = "Alfresco";
 choices[74][3] = "Microsoft Hyper-V";
 answers[74] = choices[74][2];
 units[74] = "54";
 comments[74] = "Id Pregunta: 96. AGE A1 2015";


