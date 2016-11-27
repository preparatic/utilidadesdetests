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

//  Id pregunta: 121 Año de creación de pregunta: 2016
 questions[0]= "1)  Se&ntilde;ale la respuesta incorrecta respecto al Consejo de Transparencia y Buen Gobierno";
 choices[0]= new Array();
 choices[0][0] = "Las resoluciones del Consejo se publican en el Portal de la Transparencia";
 choices[0][1] = "Las resoluciones del Consejo se publican en la p&aacute;gina web institucional del organismo";
 choices[0][2] = "La memoria anual del Consejo ser&aacute; publicada integramente en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 choices[0][3] = "Un resumen de la memoria anual del Consejo ser&aacute; publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 answers[0] = choices[0][2];
 units[0] = "22";
 comments[0] = "Id Pregunta: 121. ";


//  Id pregunta: 742 Año de creación de pregunta: 2016
 questions[1]= "2)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, se entiende por emprendedor:";
 choices[1]= new Array();
 choices[1][0] = "Aquellas personas f&iacute;sicas que van a desarrollar o est&aacute;n desarrollando una actividad econ&oacute;mica productiva.";
 choices[1][1] = "Aquellas personas independientemente de su condici&oacute;n de persona f&iacute;sica o jur&iacute;dica, que van a desarrollar una actividad econ&oacute;mica productiva.";
 choices[1][2] = "Aquellas personas, independientemente de su condici&oacute;n de persona f&iacute;sica o jur&iacute;dica, que van a desarrollar o est&aacute;n desarrollando una actividad econ&oacute;mica productiva.";
 choices[1][3] = "Ninguna de las anteriores";
 answers[1] = choices[1][2];
 units[1] = "18, 20";
 comments[1] = "Id Pregunta: 742. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 781 Año de creación de pregunta: 2016
 questions[2]= "3)  En la Administraci&oacute;n General del Estado en el exterior son &oacute;rganos directivos:";
 choices[2]= new Array();
 choices[2][0] = "los Ministros y los Secretarios de Estado";
 choices[2][1] = "los Subsecretarios y Secretarios generales";
 choices[2][2] = "los embajadores y representantes permanentes ante Organizaciones internacionales";
 choices[2][3] = "los Directores generales";
 answers[2] = choices[2][2];
 units[2] = "4, 7, 8, 9";
 comments[2] = "Id Pregunta: 781. Ley 40/2015";


//  Id pregunta: 574 Año de creación de pregunta: 2016
 questions[3]= "4)  Son herramientas espec&iacute;ficas de control de versiones de software:";
 choices[3]= new Array();
 choices[3][0] = "Mercurial, Git y Apache Subversion.";
 choices[3][1] = "Gimp, Mercurial y Git.";
 choices[3][2] = "RedMine, Planner y OpenProj.";
 choices[3][3] = "Cassandra, Git y REDIS.";
 answers[3] = choices[3][0];
 units[3] = "92";
 comments[3] = "Id Pregunta: 574. Tema 92. TAI 2016.";


//  Id pregunta: 127 Año de creación de pregunta: 2016
 questions[4]= "5)  Seg&uacute;n la ley 19/2013, la Reclamaci&oacute;n ante el Consejo de Transparencia y Buen Gobierno:";
 choices[4]= new Array();
 choices[4][0] = "Tiene car&aacute;cter facultativo.";
 choices[4][1] = "Tiene car&aacute;cter potestativo. ";
 choices[4][2] = "Se puede realizar de forma paralela a su impugnaci&oacute;n en v&iacute;a contencioso-administrativa.";
 choices[4][3] = "Se realiza si la impugnaci&oacute;n en v&iacute;a contencioso-administrativa es rechazada.";
 answers[4] = choices[4][1];
 units[4] = "22";
 comments[4] = "Id Pregunta: 127. ";


//  Id pregunta: 40 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Cu&aacute;l de los siguientes NO es un gestor de contenidos?";
 choices[5]= new Array();
 choices[5][0] = "Drupal";
 choices[5][1] = "Cassandra";
 choices[5][2] = "Wordpress";
 choices[5][3] = "OpenCMS";
 answers[5] = choices[5][1];
 units[5] = "99";
 comments[5] = "Id Pregunta: 40. AGE A1 2015";


//  Id pregunta: 435 Año de creación de pregunta: 2016
 questions[6]= "7)  Sobre el servicio com&uacute;n Autentica, se&ntilde;ale la respuesta correcta:";
 choices[6]= new Array();
 choices[6][0] = "Autentica ofrece &uacute;nicamente servicios de autenticaci&oacute;n de empleados p&uacute;blicos de las AA.PP. y usuarios relacionados,";
 choices[6][1] = "Su objetivo es constituirse como el servicio com&uacute;n compartido de referencia para los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado, para sus aplicaciones internas.";
 choices[6][2] = "El servicio provee atributos de los usuarios autenticados relacionados con la unidad y el puesto de destino, incluyendo correo electr&oacute;nico y tel&eacute;fono.";
 choices[6][3] = "Ofrece funcionalidad de autorizaci&oacute;n de usuarios, &uacute;nicamente pertenecientes a la Administraci&oacute;n General del Estado.";
 answers[6] = choices[6][2];
 units[6] = "43";
 comments[6] = "Id Pregunta: 435. SERVICIOS COMUNES";


//  Id pregunta: 305 Año de creación de pregunta: 2016
 questions[7]= "8)  Indique en donde tiene su sede de la Comisi&oacute;n Europea:";
 choices[7]= new Array();
 choices[7][0] = "Estrasburgo.";
 choices[7][1] = "Bruselas.";
 choices[7][2] = "Luxemburgo.";
 choices[7][3] = "Par&iacute;s.";
 answers[7] = choices[7][1];
 units[7] = "5";
 comments[7] = "Id Pregunta: 305. UNION EUROPEA";


//  Id pregunta: 460 Año de creación de pregunta: 2016
 questions[8]= "9)  De conformidad con el art&iacute;culo 11 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los derechos de naturaleza p&uacute;blica de la Hacienda P&uacute;blica estatal se adquieren y nacen de conformidad con lo establecido en:";
 choices[8]= new Array();
 choices[8][0] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[8][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la AGE.";
 choices[8][2] = "La normativa reguladora de cada derecho.";
 choices[8][3] = "Ley 50/1997, del Gobierno.";
 answers[8] = choices[8][2];
 units[8] = "10";
 comments[8] = "Id Pregunta: 460. PRESUPUESTOS GENERALES";


//  Id pregunta: 522 Año de creación de pregunta: 2016
 questions[9]= "10)  A los efectos previstos en esta Ley, tendr&aacute;n capacidad de obrar ante las Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[9]= new Array();
 choices[9][0] = "las personas f&iacute;sicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 choices[9][1] = "los menores de edad para el ejercicio y defensa de aquellos de sus derechos e intereses cuya actuaci&oacute;n no est&eacute; permitida por el ordenamiento jur&iacute;dico sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[9][2] = "cuando la Ley as&iacute; lo declare expresamente, los grupos de afectados, las uniones y entidades sin personalidad jur&iacute;dica y los patrimonios independientes o aut&oacute;nomos";
 choices[9][3] = "las personas jur&iacute;dicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 answers[9] = choices[9][1];
 units[9] = "7";
 comments[9] = "Id Pregunta: 522. LEY 39/2015";


//  Id pregunta: 524 Año de creación de pregunta: 2016
 questions[10]= "11)  Las asociaciones y organizaciones representativas de intereses econ&oacute;micos y sociales:";
 choices[10]= new Array();
 choices[10][0] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos en los t&eacute;rminos que reglamentariamente se establezca";
 choices[10][1] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos";
 choices[10][2] = "no ser&aacute;n titulares de intereses leg&iacute;timos colectivos";
 choices[10][3] = "ser&aacute;n titulares de intereses leg&iacute;timos colectivos en los t&eacute;rminos que la Ley reconozca";
 answers[10] = choices[10][3];
 units[10] = "7";
 comments[10] = "Id Pregunta: 524. LEY 39/2015";


//  Id pregunta: 168 Año de creación de pregunta: 2016
 questions[11]= "12)  En relaci&oacute;n la conectividad desde dispositivos m&oacute;viles en Europa";
 choices[11]= new Array();
 choices[11][0] = "A partir de 15 de Julio de 2017 los operadores solo podr&aacute;n cobrar un extra adicional m&aacute;ximo 1 &euro; /min en llamadas de voz, en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[11][1] = "No existe regulaci&oacute;n sobre el roaming en la UE, sino sobre la portabilidad, que ser&aacute; prohibida a partir del 15 de Julio de 2017.";
 choices[11][2] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[11][3] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de portabilidad al viajar a otro pa&iacute;s de la UE.";
 answers[11] = choices[11][2];
 units[11] = "19";
 comments[11] = "Id Pregunta: 168. https://ec.europa.eu/digital-single-market/en/roaming";


//  Id pregunta: 46 Año de creación de pregunta: 2016
 questions[12]= "13)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[12]= new Array();
 choices[12][0] = "En un sistema de cifrado de clave asim&eacute;trica la seguridad radica en la transmisi&oacute;n de la clave, mediante canal seguro, entre el emisor y el receptor del mensaje.";
 choices[12][1] = "Las huellas digitales devueltas por una misma funci&oacute;n hash tienen id&eacute;ntica longitud.";
 choices[12][2] = "Para ofrecer un nivel de seguridad equivalente, los sistemas de clave p&uacute;blica requieren menores longitudes de clave que los sistemas sim&eacute;tricos.";
 choices[12][3] = "Se denomina criptograma al procedimiento empleado para cifrar un mensaje.";
 answers[12] = choices[12][1];
 units[12] = "76";
 comments[12] = "Id Pregunta: 46. AGE A1 2015";


//  Id pregunta: 472 Año de creación de pregunta: 2016
 questions[13]= "14)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la modalidad de auditor&iacute;a cuyo objeto consiste en la verificaci&oacute;n selectiva de la adecuaci&oacute;n a la legalidad de la gesti&oacute;n presupuestaria, de contrataci&oacute;n, personal, ingresos y gesti&oacute;n de subvenciones, as&iacute; como de cualquier otro aspecto de la actividad econ&oacute;mico financiero de las entidades auditadas se denomina:";
 choices[13]= new Array();
 choices[13][0] = "Auditor&iacute;a de sistemas y procedimientos de gesti&oacute;n econ&oacute;mica y financiera.";
 choices[13][1] = "Auditor&iacute;a operativa.";
 choices[13][2] = "Auditor&iacute;a de cumplimiento.";
 choices[13][3] = "Auditor&iacute;a de econom&iacute;a, eficacia y eficiencia.";
 answers[13] = choices[13][2];
 units[13] = "10";
 comments[13] = "Id Pregunta: 472. PRESUPUESTOS GENERALES";


//  Id pregunta: 30 Año de creación de pregunta: 2016
 questions[14]= "15)  El sistema operativo OS X El Capit&aacute;n incluye un conjunto de servicios de red para compartir archivos entre Mac y PC, &iquest;cu&aacute;l es el protocolo por defecto que emplea OS X El Capit&aacute;n?";
 choices[14]= new Array();
 choices[14][0] = "SMB3";
 choices[14][1] = "AFP";
 choices[14][2] = "NFS";
 choices[14][3] = "FTP";
 answers[14] = choices[14][0];
 units[14] = "59";
 comments[14] = "Id Pregunta: 30. AGE A1 2015";


//  Id pregunta: 663 Año de creación de pregunta: 2016
 questions[15]= "16)  Seg&uacute;n la Ley 39/2015, la iniciaci&oacute;n de un procedimiento administrativo puede realizarse:";
 choices[15]= new Array();
 choices[15][0] = "De oficio.";
 choices[15][1] = "A solicitud del interesado.";
 choices[15][2] = "De oficio o a solicitud del interesado.";
 choices[15][3] = "Por la Administraci&oacute;n P&uacute;blica responsable.";
 answers[15] = choices[15][2];
 units[15] = "7";
 comments[15] = "Id Pregunta: 663. Art&iacute;culo 54 de la Ley 39/2015";


//  Id pregunta: 161 Año de creación de pregunta: 2016
 questions[16]= "17)  Se&ntilde;alar cu&aacute;l NO es uno de los principios del Plan de Acci&oacute;n de Administraci&oacute;n Electr&oacute;nica 2016-2020";
 choices[16]= new Array();
 choices[16][0] = "Principio de solo una vez";
 choices[16][1] = "Apertura y transparencia";
 choices[16][2] = "Confianza y seguridad";
 choices[16][3] = "Estandarizaci&oacute;n de forma predeterminada";
 answers[16] = choices[16][3];
 units[16] = "19";
 comments[16] = "Id Pregunta: 161. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Junio/Noticia-2016-06-02-Plan-accion-administracion-electronica-2016-2020.html#.WCjvuWrhDIU";


//  Id pregunta: 393 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[17]= new Array();
 choices[17][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[17][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[17][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[17][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[17] = choices[17][0];
 units[17] = "14";
 comments[17] = "Id Pregunta: 393. POLITICAS DE IGUALDAD";


//  Id pregunta: 829 Año de creación de pregunta: 2016
 questions[18]= "19)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[18]= new Array();
 choices[18][0] = "El &oacute;rgano administrativo que se estime incompetente para la resoluci&oacute;n de un asunto remitir&aacute; directamente las actuaciones al &oacute;rgano superior, debiendo notificar esta circunstancia a los interesados.";
 choices[18][1] = "Los interesados que sean parte en el procedimiento podr&aacute;n dirigirse al &oacute;rgano que se encuentre conociendo de un asunto para que decline su competencia y remita las actuaciones al &oacute;rgano competente.";
 choices[18][2] = "Asimismo, podr&aacute;n dirigirse al &oacute;rgano que estimen competente para que requiera de inhibici&oacute;n al que est&eacute; conociendo del asunto.";
 choices[18][3] = "Los conflictos de atribuciones s&oacute;lo podr&aacute;n suscitarse entre &oacute;rganos de una misma Administraci&oacute;n no relacionados jer&aacute;rquicamente, y respecto a asuntos sobre los que no haya finalizado el procedimiento administrativo.";
 answers[18] = choices[18][0];
 units[18] = "4, 7, 8, 9";
 comments[18] = "Id Pregunta: 829. Ley 40/2015";


//  Id pregunta: 98 Año de creación de pregunta: 2016
 questions[19]= "20)  La tecnolog&iacute;a de software que permite ejecutar al mismo tiempo varios sistemas operativos y aplicaciones en el mismo servidor se denomina:";
 choices[19]= new Array();
 choices[19][0] = "Clustering";
 choices[19][1] = "Deduplicaci&oacute;n";
 choices[19][2] = "Virtualizaci&oacute;n";
 choices[19][3] = "Contenerizaci&oacute;n";
 answers[19] = choices[19][2];
 units[19] = "124";
 comments[19] = "Id Pregunta: 98. AGE A1 2015";


//  Id pregunta: 806 Año de creación de pregunta: 2016
 questions[20]= "21)  Los Directores Insulares de la Administraci&oacute;n General del Estado (se&ntilde;ala la incorrecta):";
 choices[20]= new Array();
 choices[20][0] = "ser&aacute;n nombrados por el Delegado del Gobierno mediante el procedimiento de concurso-oposici&oacute;n";
 choices[20][1] = "ser&aacute;n nombrados entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades Locales, pertenecientes a Cuerpos o Escalas clasificados como Subgrupo A1";
 choices[20][2] = "dependen jer&aacute;rquicamente del Delegado del Gobierno en la Comunidad Aut&oacute;noma o del Subdelegado del Gobierno en la provincia, cuando este cargo exista";
 choices[20][3] = "ejercen, en su &aacute;mbito territorial, las competencias atribuidas por esta Ley a los Subdelegados del Gobierno en las provincias";
 answers[20] = choices[20][0];
 units[20] = "4, 7, 8, 9";
 comments[20] = "Id Pregunta: 806. Ley 40/2015";


//  Id pregunta: 135 Año de creación de pregunta: 2016
 questions[21]= "22)  Dentro de las &uacute;ltimas medidas vigentes de impulso de la actividad econ&oacute;mica, la liberalizaci&oacute;n del comercio implica:";
 choices[21]= new Array();
 choices[21][0] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[21][1] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 choices[21][2] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[21][3] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 answers[21] = choices[21][0];
 units[21] = "12";
 comments[21] = "Id Pregunta: 135. Leyes modelo econ&oacute;mico";


//  Id pregunta: 664 Año de creación de pregunta: 2016
 questions[22]= "23)  De acuerdo a la Ley 39/2015, el formato del expediente administrativo ser&aacute;:";
 choices[22]= new Array();
 choices[22][0] = "Siempre en formato electr&oacute;nico.";
 choices[22][1] = "Siempre en formato papel.";
 choices[22][2] = "Las personas f&iacute;sicas podr&aacute;n elegir en todo momento el formato del expediente administrativo.";
 choices[22][3] = "La ley no regula el formato del expediente.";
 answers[22] = choices[22][0];
 units[22] = "7";
 comments[22] = "Id Pregunta: 664. Art&iacute;culo 70 de la Ley 39/2015";


//  Id pregunta: 623 Año de creación de pregunta: 2016
 questions[23]= "24)  En PHP 5.0, &iquest;cu&aacute;l es la regla para formar los nombres de las variables?";
 choices[23]= new Array();
 choices[23][0] = "Una variable debe comenzar con el signo $ seguido del nombre de la variable.";
 choices[23][1] = "Una variable debe comenzar con el signo &amp; seguido del nombre de la variable.";
 choices[23][2] = "Una variable debe comenzar por un car&aacute;cter num&eacute;rico.";
 choices[23][3] = "No hay regla para la formaci&oacute;n de los nombres de las variables.";
 answers[23] = choices[23][0];
 units[23] = "65";
 comments[23] = "Id Pregunta: 623. Junta de Extremadura A1 2015";


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


//  Id pregunta: 165 Año de creación de pregunta: 2016
 questions[25]= "26)  Como parte del Plan de acci&oacute;n sobre administraci&oacute;n electr&oacute;nica para 2010-2020, la Comisi&oacute;n:";
 choices[25]= new Array();
 choices[25][0] = "Tratar&aacute; de interconectar los registros mercantiles en toda la UE.";
 choices[25][1] = "Se adoptar&aacute;n nuevas normas en materia de telecomunicaciones";
 choices[25][2] = "Se revisar&aacute; la Directiva de servicios de comunicaci&oacute;n audiovisual existente para adaptarse a la evoluci&oacute;n tecnol&oacute;gica";
 choices[25][3] = "Se actualizar&aacute;n las normas de comercio electr&oacute;nico";
 answers[25] = choices[25][0];
 units[25] = "19";
 comments[25] = "Id Pregunta: 165. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/";


//  Id pregunta: 674 Año de creación de pregunta: 2016
 questions[26]= "27)  En referencia a la implantaci&oacute;n de la interoperabilidad de la receta electr&oacute;nica:";
 choices[26]= new Array();
 choices[26][0] = "Permite los ciudadanos retiren sus medicamentos en las farmacias de fuera de la Comunidad Aut&oacute;noma en la que hayan sido recetados.";
 choices[26][1] = "Favorece la seguridad del paciente, al incorporar sistemas online de ayuda a la prescripci&oacute;n, que ayudan a la detecci&oacute;n de interaciones medicamentosas o duplicidades terap&eacute;uticas.";
 choices[26][2] = "Facilita al m&eacute;dico el seguimiento de la adherencia al tratamiento por parte del paciente.";
 choices[26][3] = "Todas las anteriores son correctas.";
 answers[26] = choices[26][3];
 units[26] = "47";
 comments[26] = "Id Pregunta: 674. Receta electr&oacute;nica";


//  Id pregunta: 308 Año de creación de pregunta: 2016
 questions[27]= "28)  El Tribunal de Justicia se cre&oacute; en:";
 choices[27]= new Array();
 choices[27][0] = "El Tratado de la CECA.";
 choices[27][1] = "El Tratado de Niza.";
 choices[27][2] = "El Tratado de &Aacute;msterdam.";
 choices[27][3] = "El Tratado de Lisboa.";
 answers[27] = choices[27][0];
 units[27] = "5";
 comments[27] = "Id Pregunta: 308. UNION EUROPEA";


//  Id pregunta: 607 Año de creación de pregunta: 2016
 questions[28]= "29)  Seg&uacute;n Magerit v3, en el desarrollo de sistemas de informaci&oacute;n:";
 choices[28]= new Array();
 choices[28][0] = "La seguridad debe estar embebida en el sistema desde su primera concepci&oacute;n.";
 choices[28][1] = "La seguridad comenzar&aacute; a considerarse formalmente cuando finalice el proceso de implantaci&oacute;n de sistemas de informaci&oacute;n.";
 choices[28][2] = "La seguridad del sistema de informaci&oacute;n es m&aacute;s econ&oacute;mica implantarla una vez puesto en producci&oacute;n el sistema de informaci&oacute;n que tenerla en consideraci&oacute;n durante el desarrollo del sistema.";
 choices[28][3] = "La seguridad s&oacute;lo ralentiza el proceso de desarrollo de sistemas de informaci&oacute;n por lo que s&oacute;lo se debe considerar en aquellos sistemas que usen datos econ&oacute;micos.";
 answers[28] = choices[28][0];
 units[28] = "45";
 comments[28] = "Id Pregunta: 607. Junta de Extremadura A1 2015";


//  Id pregunta: 611 Año de creación de pregunta: 2016
 questions[29]= "30)  Una de las caracter&iacute;sticas de seguridad en SQL Server 2008 es el cifrado transparente de datos. Se&ntilde;ala la afirmaci&oacute;n correcta:";
 choices[29]= new Array();
 choices[29][0] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de registro.";
 choices[29][1] = "SQL Server ofrece la capacidad de buscar dentro de los datos cifrados.";
 choices[29][2] = "Para trabajar con datos cifrados utilizando esta caracter&iacute;stica hay que introducir cambios en las aplicaciones.";
 choices[29][3] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de datos.";
 answers[29] = choices[29][1];
 units[29] = "63";
 comments[29] = "Id Pregunta: 611. Junta de Extremadura A1 2015";


//  Id pregunta: 0 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Cu&aacute;l de los siguientes NO es un objetivo del Plan de Transformaci&oacute;n Digital de la AGE?";
 choices[30]= new Array();
 choices[30][0] = "Consolidar el tejido productivo nacional apoyando el efectivo despliegue de la Sociedad de la Informaci&oacute;n.";
 choices[30][1] = "Conseguir una mayor eficiencia en los servicios TIC comunes de la Administraci&oacute;n.";
 choices[30][2] = "Implantar una gesti&oacute;n corporativa inteligente de la informaci&oacute;n y los datos.";
 choices[30][3] = "Adoptar una estrategia corporativa de seguridad y usabilidad.";
 answers[30] = choices[30][0];
 units[30] = "26";
 comments[30] = "Id Pregunta: 0. AGE A1 2015";


//  Id pregunta: 482 Año de creación de pregunta: 2016
 questions[31]= "32)  De acuerdo con el art&iacute;culo 67 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, si las variaciones afectasen al volumen de endeudamiento a corto y largo plazo, ser&aacute; competencia del Consejo de Ministros cuando su importe exceda de la cuant&iacute;a de:";
 choices[31]= new Array();
 choices[31][0] = "12.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[31][1] = "13.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[31][2] = "11.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[31][3] = "10.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 answers[31] = choices[31][0];
 units[31] = "10";
 comments[31] = "Id Pregunta: 482. PRESUPUESTOS GENERALES";


//  Id pregunta: 670 Año de creación de pregunta: 2016
 questions[32]= "33)  Respecto a la ejecuci&oacute;n de la resoluci&oacute;n de un procedimiento administrativo, se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[32]= new Array();
 choices[32][0] = "Las Administraciones P&uacute;blicas no iniciar&aacute;n la ejecuci&oacute;n hasta que se haya dictado resoluci&oacute;n.";
 choices[32][1] = "De una resoluci&oacute;n administrativa nunca puede derivarse una multa.";
 choices[32][2] = "La ejecuci&oacute;n forzosa de una resoluci&oacute;n puede afectar al patrimonio.";
 choices[32][3] = "Contra algunas resoluciones es posible interponer recursos por v&iacute;a administrativa.";
 answers[32] = choices[32][1];
 units[32] = "7";
 comments[32] = "Id Pregunta: 670. Cap&iacute;tulo VII, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 668 Año de creación de pregunta: 2016
 questions[33]= "34)  La Ley 39/2015 introduce un cap&iacute;tulo relativo a la tramitaci&oacute;n simplificada del procedimiento administrativo com&uacute;n. Respecto a este tr&aacute;mite se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[33]= new Array();
 choices[33][0] = "Se podr&aacute; acordar la tramitaci&oacute;n simplificada por falta de complejidad del procedimiento y por razones de inter&eacute;s p&uacute;blico.";
 choices[33][1] = "Los interesados podr&aacute;n, en cualquier caso, solicitar la tramitaci&oacute;n simplificada del procedimiento.";
 choices[33][2] = "En general, los procedimientos administrativos tramitados de manera simplificada deber&aacute;n ser resueltos en treinta d&iacute;as.";
 choices[33][3] = "Constar&aacute;n &uacute;nicamente de los siguientes tr&aacute;mites: inicio, subsanaci&oacute;n (en su caso), alegaciones y tr&aacute;mite de audiencia.";
 answers[33] = choices[33][3];
 units[33] = "7";
 comments[33] = "Id Pregunta: 668. Cap&iacute;tulo VI, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 720 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;C&uacute;al de las siguientes NO es una metodolog&iacute;a lean?";
 choices[34]= new Array();
 choices[34][0] = "Lean startup";
 choices[34][1] = "Business Model Canvas";
 choices[34][2] = "Dynamic system Development method";
 choices[34][3] = "Lean software development";
 answers[34] = choices[34][2];
 units[34] = "34";
 comments[34] = "Id Pregunta: 720. Metodologias Lean";


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


//  Id pregunta: 27 Año de creación de pregunta: 2016
 questions[36]= "37)  La Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, NO estableci&oacute; como derecho de los ciudadanos, el derecho:";
 choices[36]= new Array();
 choices[36][0] = "A la igualdad en el acceso electr&oacute;nico a los servicios de las Administraciones P&uacute;blicas.";
 choices[36][1] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que tengan la condici&oacute;n de interesado.";
 choices[36][2] = "A la calidad de los servicios p&uacute;blicos prestados por medios electr&oacute;nicos.";
 choices[36][3] = "A la preferencia en la tramitaci&oacute;n de los procedimientos presentados electr&oacute;nicamente.";
 answers[36] = choices[36][3];
 units[36] = "7";
 comments[36] = "Id Pregunta: 27. AGE A1 2015";


//  Id pregunta: 414 Año de creación de pregunta: 2016
 questions[37]= "38)  Los proyectos de disposiciones de car&aacute;cter general y los planes de especial relevancia econ&oacute;mica, que sometan a la aprobaci&oacute;n del Consejo de Ministros, incorporar&aacute;n:";
 choices[37]= new Array();
 choices[37][0] = "Un informe de impacto de g&eacute;nero.";
 choices[37][1] = "Un programa de igualdad de oportunidades.";
 choices[37][2] = "Un plan de Igualdad de Oportunidades.";
 choices[37][3] = "Un Decreto de Igualdad de Oportunidades.";
 answers[37] = choices[37][0];
 units[37] = "14";
 comments[37] = "Id Pregunta: 414. POLITICAS DE IGUALDAD";


//  Id pregunta: 440 Año de creación de pregunta: 2016
 questions[38]= "39)  Respecto al Sistema de Informaci&oacute;n Administrativa, se&ntilde;ale la respuesta falsa:";
 choices[38]= new Array();
 choices[38][0] = "Contiene la relaci&oacute;n de procedimientos y servicios de la AGE, y de todas las administraciones participantes.";
 choices[38][1] = "Cumple para la AGE el requisito establecido en el art&iacute;culo 9 del Esquema Nacional de Interoperabilidad, que obliga a las Administraciones p&uacute;blicas a mantener actualizado un Inventario de Informaci&oacute;n Administrativa.";
 choices[38][2] = "SIA est&aacute; dise&ntilde;ado para permitir la administraci&oacute;n distribuida y la actualizaci&oacute;n corresponsable por todas las Administraciones participantes, mediante una aplicaci&oacute;n web.";
 choices[38][3] = "Los usuarios son gestionados por una red de responsables de cada Departamento.";
 answers[38] = choices[38][2];
 units[38] = "43";
 comments[38] = "Id Pregunta: 440. SERVICIOS COMUNES";


//  Id pregunta: 820 Año de creación de pregunta: 2016
 questions[39]= "40)  Contra las resoluciones en materia de abstenci&oacute;n y recusaci&oacute;n...";
 choices[39]= new Array();
 choices[39][0] = "Cabr&aacute; recurso de alzada";
 choices[39][1] = "Cabr&aacute; el nuevo protesto";
 choices[39][2] = "Cabr&aacute; recurso de reposici&oacute;n";
 choices[39][3] = "No cabr&aacute; recurso alguno";
 answers[39] = choices[39][3];
 units[39] = "4, 7, 8, 9";
 comments[39] = "Id Pregunta: 820. Ley 40/2015";


//  Id pregunta: 409 Año de creación de pregunta: 2016
 questions[40]= "41)  La mayor novedad de la Ley para la igualdad efectiva de mujeres y hombres, radica en:";
 choices[40]= new Array();
 choices[40][0] = "Prevenir las conductas discriminatorias.";
 choices[40][1] = "Proveer pol&iacute;ticas activas para hacer efectivo el principio de igualdad.";
 choices[40][2] = "Todas son correctas.";
 choices[40][3] = "Proveer pol&iacute;ticas pasivas para hacer efectivo el principio de igualdad.";
 answers[40] = choices[40][2];
 units[40] = "14";
 comments[40] = "Id Pregunta: 409. POLITICAS DE IGUALDAD";


//  Id pregunta: 456 Año de creación de pregunta: 2016
 questions[41]= "42)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los escenarios presupuestarios plurianuales contendr&aacute;n la distribuci&oacute;n org&aacute;nica de los recursos disponibles y se desarrollar&aacute;n en programas plurianuales, referidos a:";
 choices[41]= new Array();
 choices[41][0] = "a) Los cuatro ejercicios siguientes.";
 choices[41][1] = "b) El ejercicio siguiente.";
 choices[41][2] = "c) Los dos ejercicios siguientes.";
 choices[41][3] = "d) Los tres ejercicios siguientes.";
 answers[41] = choices[41][3];
 units[41] = "10";
 comments[41] = "Id Pregunta: 456. PRESUPUESTOS GENERALES";


//  Id pregunta: 487 Año de creación de pregunta: 2016
 questions[42]= "43)  Seg&uacute;n el art&iacute;culo 56.6 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Hacienda dar&aacute; cuentas trimestralmente de los cr&eacute;ditos extraordinarias y suplementos de cr&eacute;dito a:";
 choices[42]= new Array();
 choices[42][0] = "Las Cortes Generales.";
 choices[42][1] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[42][2] = "El Gobierno.";
 choices[42][3] = "El Congreso de los Diputados.";
 answers[42] = choices[42][0];
 units[42] = "10";
 comments[42] = "Id Pregunta: 487. PRESUPUESTOS GENERALES";


//  Id pregunta: 605 Año de creación de pregunta: 2016
 questions[43]= "44)  En ITIL v3, entre los procesos de la &ldquo;Fase del Ciclo de Vida: Dise&ntilde;o del Servicio&rdquo;, est&aacute;n:";
 choices[43]= new Array();
 choices[43][0] = "Gesti&oacute;n del Cat&aacute;logo de Servicios y Gesti&oacute;n de la Cartera de Servicios.";
 choices[43][1] = "Gesti&oacute;n de la Cartera de Servicio y Gesti&oacute;n de la Seguridad de la Informaci&oacute;n.";
 choices[43][2] = "Gesti&oacute;n de la Disponibilidad y Gesti&oacute;n de la Capacidad.";
 choices[43][3] = "Gesti&oacute;n de Suministradores y Gesti&oacute;n de Eventos.";
 answers[43] = choices[43][2];
 units[43] = "101";
 comments[43] = "Id Pregunta: 605. Junta de Extremadura A1 2015";


//  Id pregunta: 661 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Qu&eacute; tipos de nodos tiene un cl&uacute;ster Hadoop?";
 choices[44]= new Array();
 choices[44][0] = "Varios namenodes y varios datanodes por cluster";
 choices[44][1] = "varios namenodes y obligatoriamente 1 datanode por cluster";
 choices[44][2] = "1 namenode y varios datanodes por cluster";
 choices[44][3] = "1 namenode y obligatoriamente 1 datanode por cluster";
 answers[44] = choices[44][2];
 units[44] = "73";
 comments[44] = "Id Pregunta: 661. ";


//  Id pregunta: 578 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Qui&eacute;n elabor&oacute; y aprob&oacute; la Estrategia TIC?.";
 choices[45]= new Array();
 choices[45][0] = "Fue elaborada y aprobada por la CETIC";
 choices[45][1] = "Fue elaborada por la CETIC y aprobada por el gobierno";
 choices[45][2] = "Fue elaborada por el gobierno y aprobada por la CETIC";
 choices[45][3] = "Fue elaborada por la CETIC y aprobada por el MAFP (Ministerio de Administraciones y Funci&oacute;n P&uacute;blica)";
 answers[45] = choices[45][1];
 units[45] = "19";
 comments[45] = "Id Pregunta: 578. Estrategia TIC";


//  Id pregunta: 34 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Cu&aacute;les de los siguientes mecanismos no existe espec&iacute;ficamente como cach&eacute; de c&oacute;digo PHP?";
 choices[46]= new Array();
 choices[46][0] = "Memcached";
 choices[46][1] = "OpCache";
 choices[46][2] = "WinCache Extension for PHP";
 choices[46][3] = "Alternative PHP Cache";
 answers[46] = choices[46][0];
 units[46] = "65";
 comments[46] = "Id Pregunta: 34. AGE A1 2015";


//  Id pregunta: 538 Año de creación de pregunta: 2016
 questions[47]= "48)  Ser&aacute;/n interoperable/s con los registros electr&oacute;nicos generales y particulares de apoderamientos:";
 choices[47]= new Array();
 choices[47][0] = "los registros mercantiles";
 choices[47][1] = "los registros de la propiedad";
 choices[47][2] = "los protocolos notariales";
 choices[47][3] = "todas son correctas";
 answers[47] = choices[47][3];
 units[47] = "7";
 comments[47] = "Id Pregunta: 538. LEY 39/2015";


//  Id pregunta: 368 Año de creación de pregunta: 2016
 questions[48]= "49)  Los Reglamentos comunitarios equivalen a lo que en un ordenamiento interno es:";
 choices[48]= new Array();
 choices[48][0] = "Un Reglamento.";
 choices[48][1] = "Un Decreto.";
 choices[48][2] = "Una Ley.";
 choices[48][3] = "Un Real-Decreto.";
 answers[48] = choices[48][2];
 units[48] = "5";
 comments[48] = "Id Pregunta: 368. UNION EUROPEA";


//  Id pregunta: 559 Año de creación de pregunta: 2016
 questions[49]= "50)  Uno de los objetivos de la Agenda Digital para Espa&ntilde;a es desarrollar la econom&iacute;a digital, &iquest;qu&eacute; actuaciones se deben desarrollar para lograr esto?";
 choices[49]= new Array();
 choices[49][0] = "Impulsar la producci&oacute;n y distribuci&oacute;n a trav&eacute;s de Internet de contenidos digitales";
 choices[49][1] = "Favorecer la internacionalizaci&oacute;n de las empresas tecnol&oacute;gicas";
 choices[49][2] = "Incentivar el uso transformador de las TIC en nuestras empresas";
 choices[49][3] = "Todos los anteriores";
 answers[49] = choices[49][3];
 units[49] = "19";
 comments[49] = "Id Pregunta: 559. Agenda Digital";


//  Id pregunta: 108 Año de creación de pregunta: 2016
 questions[50]= "51)  Son proyectos de Apache relacionados con Big Data:";
 choices[50]= new Array();
 choices[50][0] = "Hadoop";
 choices[50][1] = "Spark";
 choices[50][2] = "A) y B)";
 choices[50][3] = "Niguno de los anteriores";
 answers[50] = choices[50][2];
 units[50] = "73";
 comments[50] = "Id Pregunta: 108. ";


//  Id pregunta: 771 Año de creación de pregunta: 2016
 questions[51]= "52)  La Administraci&oacute;n consultiva podr&aacute; articularse:";
 choices[51]= new Array();
 choices[51][0] = "mediante &oacute;rganos espec&iacute;ficos dotados de autonom&iacute;a org&aacute;nica y funcional con respecto a la Administraci&oacute;n activa";
 choices[51][1] = "a trav&eacute;s de los servicios de la Administraci&oacute;n activa que prestan asistencia jur&iacute;dica";
 choices[51][2] = "a y b son correctas";
 choices[51][3] = "a y b son incorrectas";
 answers[51] = choices[51][2];
 units[51] = "4, 7, 8, 9";
 comments[51] = "Id Pregunta: 771. Ley 40/2015";


//  Id pregunta: 335 Año de creación de pregunta: 2016
 questions[52]= "53)  Un diputado del Parlamento Europeo, de nacionalidad espa&ntilde;ola, &iquest;puede ser tambi&eacute;n Diputado en el Congreso espa&ntilde;ol?:";
 choices[52]= new Array();
 choices[52][0] = "Son compatibles, lo que no puede compatibilizar es ser funcionario de cualquiera de las Instituciones Europeas.";
 choices[52][1] = "Son compatibles, lo que no puede compatibilizar es ser miembro del Tribunal de Justicia de Luxemburgo.";
 choices[52][2] = "Son incompatibles ambas actas de diputado.";
 choices[52][3] = "Son perfectamente compatibles ambas actas de diputado.";
 answers[52] = choices[52][2];
 units[52] = "5";
 comments[52] = "Id Pregunta: 335. UNION EUROPEA";


//  Id pregunta: 309 Año de creación de pregunta: 2016
 questions[53]= "54)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a los Cuestores:";
 choices[53]= new Array();
 choices[53][0] = "Son miembros de la Mesa del Parlamento Europeo con voz pero sin voto.";
 choices[53][1] = "No son miembros de la Mesa del Parlamento Europeo.";
 choices[53][2] = "Son miembros de la Mesa del Parlamento Europeo con voz y voto.";
 choices[53][3] = "Los Cuestores forman parte de la Mesa del Parlamento Europeo en un n&uacute;mero igual a tres.";
 answers[53] = choices[53][0];
 units[53] = "5";
 comments[53] = "Id Pregunta: 309. UNION EUROPEA";


//  Id pregunta: 257 Año de creación de pregunta: 2016
 questions[54]= "55)  El Art&iacute;culo 98 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Gobierno Espa&ntilde;ol se compone de:";
 choices[54]= new Array();
 choices[54][0] = "El Presidente y su gabinete.";
 choices[54][1] = "El Presidente y sus Ministros.";
 choices[54][2] = "El Rey y el Presidente.";
 choices[54][3] = "El Presidente, de los Vicepresidentes en su caso, de los Ministros y dem&aacute;s miembros que establezca la ley.";
 answers[54] = choices[54][2];
 units[54] = "1";
 comments[54] = "Id Pregunta: 257. CONSTITUCION1978";


//  Id pregunta: 80 Año de creación de pregunta: 2016
 questions[55]= "56)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, se&ntilde;ale la respuesta correcta respecto a la auditor&iacute;a de seguridad:";
 choices[55]= new Array();
 choices[55][0] = "Se realizar&aacute;, al menos, cada dieciocho meses para los sistemas de todas las categor&iacute;as, y con car&aacute;cter extraordinario, siempre que se produzcan modificaciones sustanciales en el sistema de informaci&oacute;n, que puedan repercutir en las medidas de seguridad requeridas.";
 choices[55][1] = "El equipo auditor, en el dise&ntilde;o de sus pruebas y revisiones, debe limitarse a la revisi&oacute;n de documentos facilitados por los responsables de la informaci&oacute;n, del servicio y de seguridad.";
 choices[55][2] = "Cuando existan razones que lo justifiquen, dentro de las tareas de la auditoria de seguridad podr&aacute;n incluirse adem&aacute;s la ejecuci&oacute;n de trabajos de consultor&iacute;a.";
 choices[55][3] = "El informe de auditor&iacute;a deber&aacute; dictaminar sobre la adecuaci&oacute;n de las medidas exigidas por el Esquema Nacional de Seguridad, identificar sus deficiencias y proponer las medidas correctoras o complementarias necesarias.";
 answers[55] = choices[55][3];
 units[55] = "46";
 comments[55] = "Id Pregunta: 80. AGE A1 2015";


//  Id pregunta: 798 Año de creación de pregunta: 2016
 questions[56]= "57)  Ostentan la representaci&oacute;n ordinaria del Ministerio:";
 choices[56]= new Array();
 choices[56][0] = "los Secretarios de Estado";
 choices[56][1] = "los Ministros";
 choices[56][2] = "los Subsecretarios";
 choices[56][3] = "los Secretarios generales";
 answers[56] = choices[56][2];
 units[56] = "4, 7, 8, 9";
 comments[56] = "Id Pregunta: 798. Ley 40/2015";


//  Id pregunta: 346 Año de creación de pregunta: 2016
 questions[57]= "58)  La duraci&oacute;n del mandato de un diputado del Parlamento Europeo es de:";
 choices[57]= new Array();
 choices[57][0] = "25 diputados lo son con car&aacute;cter vitalicio y el resto se renueva cada cinco a&ntilde;os.";
 choices[57][1] = "Cuatro a&ntilde;os, como un diputado espa&ntilde;ol.";
 choices[57][2] = "Cinco a&ntilde;os.";
 choices[57][3] = "Ninguna es correcta.";
 answers[57] = choices[57][2];
 units[57] = "5";
 comments[57] = "Id Pregunta: 346. UNION EUROPEA";


//  Id pregunta: 782 Año de creación de pregunta: 2016
 questions[58]= "59)  Tienen la condici&oacute;n de alto cargo:";
 choices[58]= new Array();
 choices[58][0] = "los &oacute;rganos superiores";
 choices[58][1] = "los &oacute;rganos superiores y directivos";
 choices[58][2] = "los &oacute;rganos superiores y directivos, excepto los Subdirectores generales y asimilados";
 choices[58][3] = "los &oacute;rganos superiores y directivos, excepto los Secretarios generales y asimilados";
 answers[58] = choices[58][2];
 units[58] = "4, 7, 8, 9";
 comments[58] = "Id Pregunta: 782. Ley 40/2015";


//  Id pregunta: 441 Año de creación de pregunta: 2016
 questions[59]= "60)  Se&ntilde;ale la respuesta falsa respecto a Habilit@, Registro de Funcionarios Habilitados:";
 choices[59]= new Array();
 choices[59][0] = "El art&iacute;culo 12.3 de la Ley 39/2015recoge que la Administraci&oacute;n General del Estado, las Comunidades Aut&oacute;nomas y las Entidades Locales mantendr&aacute;n actualizado un registro, u otro sistema equivalente, donde constar&aacute;n los funcionarios habilitados para la identificaci&oacute;n o firma.";
 choices[59][1] = "La Orden HAP/8/2014, de 7 de enero, regula el Registro de funcionarios habilitados para la identificaci&oacute;n y autenticaci&oacute;n de ciudadanos en el &aacute;mbito de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos vinculados o dependientes.";
 choices[59][2] = "En el caso en que el ciudadano no disponga de medios de autenticaci&oacute;n y firma para relacionarse de manera electr&oacute;nica con las Administraciones, la Ley 39/2015 prev&eacute; que, siempre que el ciudadano se identifique y deje constancia de su consentimiento expreso, un funcionario podr&aacute; actuar en su nombre, utilizando el sistema de firma del que disponga para ello.";
 choices[59][3] = "Tambi&eacute;n se establece en la misma Ley 39/2015 que las Administraciones P&uacute;blicas podr&aacute;n realizar copias aut&eacute;nticas de los documentos p&uacute;blicos administrativos o privados mediante funcionario habilitado.";
 answers[59] = choices[59][1];
 units[59] = "43";
 comments[59] = "Id Pregunta: 441. SERVICIOS COMUNES";


//  Id pregunta: 324 Año de creación de pregunta: 2016
 questions[60]= "61)  El Presidente del Tribunal de Justicia de la Uni&oacute;n Europea es nombrado para un per&iacute;odo de:";
 choices[60]= new Array();
 choices[60][0] = "Tres a&ntilde;os.";
 choices[60][1] = "Cuatro a&ntilde;os.";
 choices[60][2] = "Cinco a&ntilde;os.";
 choices[60][3] = "Seis a&ntilde;os.";
 answers[60] = choices[60][0];
 units[60] = "5";
 comments[60] = "Id Pregunta: 324. UNION EUROPEA";


//  Id pregunta: 301 Año de creación de pregunta: 2016
 questions[61]= "62)  El Presidente del Tribunal de Cuentas es elegido por:";
 choices[61]= new Array();
 choices[61][0] = "Los propios miembros del Tribunal.";
 choices[61][1] = "El Consejo de Europa.";
 choices[61][2] = "El Consejo Europeo.";
 choices[61][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[61] = choices[61][0];
 units[61] = "5";
 comments[61] = "Id Pregunta: 301. UNION EUROPEA";


//  Id pregunta: 557 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;Qu&eacute; ministerios han liderado la elaboraci&oacute;n de la Agenda Digital para Espa&ntilde;a?";
 choices[62]= new Array();
 choices[62][0] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica ";
 choices[62][1] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Econom&iacute;a, Industria y Competitividad";
 choices[62][2] = "El Ministerio de Econom&iacute;a, Industria y Competitividad y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[62][3] = "Ninguno de ellos, puesto que ha venido elaborada desde los organismos de la UE";
 answers[62] = choices[62][0];
 units[62] = "19";
 comments[62] = "Id Pregunta: 557. Agenda Digital";


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


//  Id pregunta: 493 Año de creación de pregunta: 2016
 questions[64]= "65)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, inspeccionar la actividad de las oficinas de contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una competencia de:";
 choices[64]= new Array();
 choices[64][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[64][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[64][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[64][3] = "La Intervenci&oacute;n General de la Seguridad Social.";
 answers[64] = choices[64][2];
 units[64] = "10";
 comments[64] = "Id Pregunta: 493. PRESUPUESTOS GENERALES";


//  Id pregunta: 302 Año de creación de pregunta: 2016
 questions[65]= "66)  El Presidente del Tribunal de Cuentas es elegido para un per&iacute;odo de:";
 choices[65]= new Array();
 choices[65][0] = "Cinco a&ntilde;os.";
 choices[65][1] = "Cuatro a&ntilde;os.";
 choices[65][2] = "Tres a&ntilde;os.";
 choices[65][3] = "Seis meses.";
 answers[65] = choices[65][2];
 units[65] = "5";
 comments[65] = "Id Pregunta: 302. UNION EUROPEA";


//  Id pregunta: 166 Año de creación de pregunta: 2016
 questions[66]= "67)  El indicador de la Comisi&oacute;n Europea &ldquo;DESI&rdquo; (Digital Economy &amp; Society Index) tiene entre sus dimensiones:";
 choices[66]= new Array();
 choices[66][0] = "Interoperabilidad";
 choices[66][1] = "Integridad";
 choices[66][2] = "Capital humano";
 choices[66][3] = "Trazabilidad";
 answers[66] = choices[66][2];
 units[66] = "19";
 comments[66] = "Id Pregunta: 166. https://ec.europa.eu/digital-single-market/en/desi Conectividad, Capital humano, Uso de internet, Integraci&oacute;n de tecnolog&iacute;a digital, Servicios p&uacute;blicos digitales";


//  Id pregunta: 764 Año de creación de pregunta: 2016
 questions[67]= "68)  Las Administraciones P&uacute;blicas velar&aacute;n por el cumplimiento de los requisitos previstos en la legislaci&oacute;n que resulte aplicable, para lo cual podr&aacute;n, en el &aacute;mbito de sus respectivas competencias, comprobar, verificar, investigar e inspeccionar los hechos, actos, elementos, actividades, estimaciones y dem&aacute;s circunstancias que fueran necesarias con los l&iacute;mites establecidos en:";
 choices[67]= new Array();
 choices[67][0] = "la legislaci&oacute;n de protecci&oacute;n de datos de car&aacute;cter personal";
 choices[67][1] = "el C&oacute;digo Civil";
 choices[67][2] = "la Constituci&oacute;n Espa&ntilde;ola";
 choices[67][3] = "la ley de procedimiento administrativo com&uacute;n de las Administraciones P&uacute;blicas";
 answers[67] = choices[67][0];
 units[67] = "4, 7, 8, 9";
 comments[67] = "Id Pregunta: 764. Ley 40/2015";


//  Id pregunta: 813 Año de creación de pregunta: 2016
 questions[68]= "69)  Debe abstenerse el funcionario que tiene relaci&oacute;n de servicio con interesado en el asunto o le ha prestado servicios profesionales en los ...";
 choices[68]= new Array();
 choices[68][0] = "Tres &uacute;ltimos a&ntilde;os";
 choices[68][1] = "Cinco &uacute;ltimos a&ntilde;os";
 choices[68][2] = "Cuatro &uacute;ltimos a&ntilde;os";
 choices[68][3] = "Dos &uacute;ltimos a&ntilde;os";
 answers[68] = choices[68][1];
 units[68] = "4, 7, 8, 9";
 comments[68] = "Id Pregunta: 813. Ley 40/2015";


//  Id pregunta: 429 Año de creación de pregunta: 2016
 questions[69]= "70)  Para la prevenci&oacute;n del acoso sexual y del acoso por raz&oacute;n de sexo, las Administraciones P&uacute;blicas negociar&aacute;n con la representaci&oacute;n legal de las trabajadoras y trabajadores, un protocolo de actuaci&oacute;n que comprender&aacute;:";
 choices[69]= new Array();
 choices[69][0] = "La identificaci&oacute;n de las personas responsables de atender a quienes formulen una queja o denuncia.";
 choices[69][1] = "El tratamiento p&uacute;blico de las denuncias de hechos que pudieran ser constitutivos de acoso sexual o de acoso por raz&oacute;n de sexo.";
 choices[69][2] = "Ambas son correctas.";
 choices[69][3] = "Ambas son incorrectas.";
 answers[69] = choices[69][0];
 units[69] = "14";
 comments[69] = "Id Pregunta: 429. POLITICAS DE IGUALDAD";


//  Id pregunta: 294 Año de creación de pregunta: 2016
 questions[70]= "71)  Indique a qui&eacute;n corresponde la funci&oacute;n de promover el inter&eacute;s general de la Uni&oacute;n Europea y tomar las iniciativas adecuadas con este fin:";
 choices[70]= new Array();
 choices[70][0] = "Al Consejo Europeo.";
 choices[70][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[70][2] = "A la Comisi&oacute;n Europea.";
 choices[70][3] = "Al Parlamento Europeo.";
 answers[70] = choices[70][2];
 units[70] = "5";
 comments[70] = "Id Pregunta: 294. UNION EUROPEA";


//  Id pregunta: 465 Año de creación de pregunta: 2016
 questions[71]= "72)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales deber&aacute; de contener:";
 choices[71]= new Array();
 choices[71][0] = "Las respuestas a) y b) son correctas.";
 choices[71][1] = "Las respuestas a) y b) no son correctas.";
 choices[71][2] = "Contenido coherente con los planes sectoriales.";
 choices[71][3] = "Programas de actuaci&oacute;n de existentes en el &aacute;mbito de cada departamento.";
 answers[71] = choices[71][0];
 units[71] = "10";
 comments[71] = "Id Pregunta: 465. PRESUPUESTOS GENERALES";


//  Id pregunta: 313 Año de creación de pregunta: 2016
 questions[72]= "73)  Indique qui&eacute;n propone al candidato para el cargo de Presidente de la Comisi&oacute;n Europea:";
 choices[72]= new Array();
 choices[72][0] = "El Consejo Europeo.";
 choices[72][1] = "El Consejo de la Uni&oacute;n Europea.";
 choices[72][2] = "Los miembros de la Comisi&oacute;n Europea.";
 choices[72][3] = "El Parlamento Europeo.";
 answers[72] = choices[72][0];
 units[72] = "5";
 comments[72] = "Id Pregunta: 313. UNION EUROPEA";


//  Id pregunta: 336 Año de creación de pregunta: 2016
 questions[73]= "74)  El Tribunal de Justicia Europeo funcion&oacute; como instancia &uacute;nica hasta:";
 choices[73]= new Array();
 choices[73][0] = "Diciembre de 1987.";
 choices[73][1] = "Septiembre de 1989.";
 choices[73][2] = "Octubre de 1990.";
 choices[73][3] = "Noviembre de 1980.";
 answers[73] = choices[73][1];
 units[73] = "5";
 comments[73] = "Id Pregunta: 336. UNION EUROPEA";


//  Id pregunta: 11 Año de creación de pregunta: 2016
 questions[74]= "75)  Nada m&aacute;s arrancar el servidor de aplicaciones, usted intenta acceder a su aplicaci&oacute;n y se produce un error de memoria. En ese momento, sospecha que el error se produce porque est&aacute; utilizando unas librer&iacute;as de terceros de gran tama&ntilde;o. &iquest;Qu&eacute; tipo de error deber&iacute;a estar d&aacute;ndose para corroborar su hip&oacute;tesis?";
 choices[74]= new Array();
 choices[74][0] = "java.lang.OutOfMemoryError: Java heap space";
 choices[74][1] = "java.lang.OutOfMemoryError: PermGen space";
 choices[74][2] = "java.lang.OutOfMemoryError: Requested array size exceeds VM limit";
 choices[74][3] = "java.lang.OutOfMemoryError: request &lt;size&gt; bytes for &lt;reason&gt;. Out of swap space";
 answers[74] = choices[74][1];
 units[74] = "64";
 comments[74] = "Id Pregunta: 11. AGE A1 2015";


