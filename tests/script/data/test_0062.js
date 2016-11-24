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

//  Id pregunta: 10265 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Qui&eacute;n debe refrendar el nombramiento del Presidente del Consejo General del Poder Judicial?:";
 choices[0]= new Array();
 choices[0][0] = "El Presidente del Senado";
 choices[0][1] = "No es un acto Real, por tanto no conlleva refrendo";
 choices[0][2] = "El Presidente del Gobierno";
 choices[0][3] = "El Presidente de las Cortes Generales";
 answers[0] = choices[0][2];
 units[0] = "1";
 comments[0] = "Id Pregunta: 10265. CONSTITUCION1978";


//  Id pregunta: 10157 Año de creación de pregunta: 2016
 questions[1]= "2)  Seg&uacute;n la ley 39/2015, los actos administrativos ser&aacute;n objeto de publicaci&oacute;n cuando (se&ntilde;ala la incorrecta):";
 choices[1]= new Array();
 choices[1][0] = "la Administraci&oacute;n estime que la notificaci&oacute;n efectuada a un solo interesado es insuficiente para garantizar la notificaci&oacute;n a todos, no siendo necesaria la notificaci&oacute;n individualizada en este caso";
 choices[1][1] = "se trate de actos integrantes de un procedimiento selectivo o de concurrencia competitiva de cualquier tipo";
 choices[1][2] = "el acto tenga por destinatario a una pluralidad indeterminada de personas";
 choices[1][3] = "as&iacute; lo establezcan las normas reguladoras de cada procedimiento o lo aconsejen razones de inter&eacute;s p&uacute;blico apreciadas por el &oacute;rgano competente";
 answers[1] = choices[1][0];
 units[1] = "7";
 comments[1] = "Id Pregunta: 10157. Ley 39/2015, Art&iacute;culo 45";


//  Id pregunta: 10574 Año de creación de pregunta: 2016
 questions[2]= "3)  Son herramientas espec&iacute;ficas de control de versiones de software:";
 choices[2]= new Array();
 choices[2][0] = "Mercurial, Git y Apache Subversion.";
 choices[2][1] = "Gimp, Mercurial y Git.";
 choices[2][2] = "RedMine, Planner y OpenProj.";
 choices[2][3] = "Cassandra, Git y REDIS.";
 answers[2] = choices[2][0];
 units[2] = "92";
 comments[2] = "Id Pregunta: 10574. Tema 92. TAI 2016.";


//  Id pregunta: 10053 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Cu&aacute;l de los siguientes objetivos est&aacute; fuera del alcance de una reuni&oacute;n diaria de SCRUM (daily scrum)?";
 choices[3]= new Array();
 choices[3][0] = "Exponer las tareas no planificadas que tambi&eacute;n est&aacute;n haciendo los miembros del equipo.";
 choices[3][1] = "Resolver detalladamente los problemas que puedan tener los miembros del equipo.";
 choices[3][2] = "Poner de manifiesto el ritmo de trabajo de cada miembro del equipo.";
 choices[3][3] = "Identificar las tareas que puedan afectar a otros miembros del equipo.";
 answers[3] = choices[3][1];
 units[3] = "84";
 comments[3] = "Id Pregunta: 10053. AGE A1 2015";


//  Id pregunta: 10149 Año de creación de pregunta: 2016
 questions[4]= "5)  Seg&uacute;n establece la Ley 39/2015, las Administraciones P&uacute;blicas har&aacute;n p&uacute;blico un Plan Normativo que:";
 choices[4]= new Array();
 choices[4][0] = "Contendr&aacute; las iniciativas legales y reglamentarias que hayan sido aprobadas en el a&ntilde;o en curso y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[4][1] = "Contendr&aacute; exclusivamente las iniciativas legales que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[4][2] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[4][3] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Bolet&iacute;n Oficial de la Administraci&oacute;n P&uacute;blica correspondiente";
 answers[4] = choices[4][2];
 units[4] = "7";
 comments[4] = "Id Pregunta: 10149. Ley 39/2015, Art&iacute;culo 132";


//  Id pregunta: 10650 Año de creación de pregunta: 2016
 questions[5]= "6)  Indica cu&aacute;l de las siguientes caracter&iacute;sticas del protocolo IP versi&oacute;n 6 es incorrecta.";
 choices[5]= new Array();
 choices[5][0] = "El tama&ntilde;o de la direcci&oacute;n IP es de 128 bits.";
 choices[5][1] = "Aumento de la flexibilidad en el direccionamiento.";
 choices[5][2] = "Define una cabecera de extensi&oacute;n que proporciona autenticaci&oacute;n.";
 choices[5][3] = "La cabecera IP versi&oacute;n 6 obligatoria es de tama&ntilde;o variable.";
 answers[5] = choices[5][3];
 units[5] = "109";
 comments[5] = "Id Pregunta: 10650. Junta de Extremadura A1 2015";


//  Id pregunta: 10305 Año de creación de pregunta: 2016
 questions[6]= "7)  Indique en donde tiene su sede de la Comisi&oacute;n Europea:";
 choices[6]= new Array();
 choices[6][0] = "Estrasburgo.";
 choices[6][1] = "Bruselas.";
 choices[6][2] = "Luxemburgo.";
 choices[6][3] = "Par&iacute;s.";
 answers[6] = choices[6][1];
 units[6] = "5";
 comments[6] = "Id Pregunta: 10305. UNION EUROPEA";


//  Id pregunta: 10517 Año de creación de pregunta: 2016
 questions[7]= "8)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas: (se&ntilde;ala la incorrecta)";
 choices[7]= new Array();
 choices[7][0] = "la Administraci&oacute;n General del Estado";
 choices[7][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[7][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[7][3] = "los organismos p&uacute;blicos y entidades de derecho privado que integran el sector p&uacute;blico institucional";
 answers[7] = choices[7][3];
 units[7] = "7";
 comments[7] = "Id Pregunta: 10517. LEY 39/2015";


//  Id pregunta: 10611 Año de creación de pregunta: 2016
 questions[8]= "9)  Una de las caracter&iacute;sticas de seguridad en SQL Server 2008 es el cifrado transparente de datos. Se&ntilde;ala la afirmaci&oacute;n correcta:";
 choices[8]= new Array();
 choices[8][0] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de registro.";
 choices[8][1] = "SQL Server ofrece la capacidad de buscar dentro de los datos cifrados.";
 choices[8][2] = "Para trabajar con datos cifrados utilizando esta caracter&iacute;stica hay que introducir cambios en las aplicaciones.";
 choices[8][3] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de datos.";
 answers[8] = choices[8][1];
 units[8] = "63";
 comments[8] = "Id Pregunta: 10611. Junta de Extremadura A1 2015";


//  Id pregunta: 10023 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Cu&aacute;l de los siguientes lenguajes propone el W3C para consultar datos en formato RDF?";
 choices[9]= new Array();
 choices[9][0] = "SPARQL";
 choices[9][1] = "UnQL";
 choices[9][2] = "XQUERY";
 choices[9][3] = "RQL";
 answers[9] = choices[9][0];
 units[9] = "74";
 comments[9] = "Id Pregunta: 10023. AGE A1 2015";


//  Id pregunta: 10529 Año de creación de pregunta: 2016
 questions[10]= "11)  Se presumir&aacute; la representaci&oacute;n para:";
 choices[10]= new Array();
 choices[10][0] = "formular solicitudes";
 choices[10][1] = "los actos y gestiones de mero tr&aacute;mite";
 choices[10][2] = "presentar declaraciones responsables o comunicaciones";
 choices[10][3] = "interponer recursos, desistir de acciones y renunciar a derechos en nombre de otra persona";
 answers[10] = choices[10][1];
 units[10] = "7";
 comments[10] = "Id Pregunta: 10529. LEY 39/2015";


//  Id pregunta: 10348 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;En qu&eacute; fecha naci&oacute; la Uni&oacute;n Europea?:";
 choices[11]= new Array();
 choices[11][0] = "El 1 de noviembre de 1994.";
 choices[11][1] = "El 1 de noviembre de 1992.";
 choices[11][2] = "El 1 de noviembre de 1995.";
 choices[11][3] = "El 1 de noviembre de 1993.";
 answers[11] = choices[11][3];
 units[11] = "5";
 comments[11] = "Id Pregunta: 10348. UNION EUROPEA";


//  Id pregunta: 10002 Año de creación de pregunta: 2016
 questions[12]= "13)  La estrategia de comunicaci&oacute;n de un nuevo proyecto estrat&eacute;gico TIC NO debe:";
 choices[12]= new Array();
 choices[12][0] = "Posponerse a la puesta en producci&oacute;n del proyecto sin incidencias significativas.";
 choices[12][1] = "Presentar prototipos que muestren la evoluci&oacute;n del desarrollo ya realizado.";
 choices[12][2] = "Dise&ntilde;ar una campa&ntilde;a de difusi&oacute;n y promoci&oacute;n del proyecto.";
 choices[12][3] = "Asegurar la implicaci&oacute;n de representantes de todas las unidades afectadas.";
 answers[12] = choices[12][0];
 units[12] = "31";
 comments[12] = "Id Pregunta: 10002. AGE A1 2015";


//  Id pregunta: 10641 Año de creación de pregunta: 2016
 questions[13]= "14)  La estructura de un Directorio Activo se basa en los siguientes conceptos:";
 choices[13]= new Array();
 choices[13][0] = "Directorios, Unidades f&iacute;sicas y Usuarios.";
 choices[13][1] = "Dominio, Unidad Organizativa, Grupos y Objetos.";
 choices[13][2] = "Unidades f&iacute;sicas, Unidades l&oacute;gicas y Directorios.";
 choices[13][3] = "Ficheros, Directorios, Particiones y Unidades.";
 answers[13] = choices[13][1];
 units[13] = "58";
 comments[13] = "Id Pregunta: 10641. Junta de Extremadura A1 2015";


//  Id pregunta: 10674 Año de creación de pregunta: 2016
 questions[14]= "15)  En referencia a la implantaci&oacute;n de la interoperabilidad de la receta electr&oacute;nica:";
 choices[14]= new Array();
 choices[14][0] = "Permite los ciudadanos retiren sus medicamentos en las farmacias de fuera de la Comunidad Aut&oacute;noma en la que hayan sido recetados.";
 choices[14][1] = "Favorece la seguridad del paciente, al incorporar sistemas online de ayuda a la prescripci&oacute;n, que ayudan a la detecci&oacute;n de interaciones medicamentosas o duplicidades terap&eacute;uticas.";
 choices[14][2] = "Facilita al m&eacute;dico el seguimiento de la adherencia al tratamiento por parte del paciente.";
 choices[14][3] = "Todas las anteriores son correctas.";
 answers[14] = choices[14][3];
 units[14] = "47";
 comments[14] = "Id Pregunta: 10674. Receta electr&oacute;nica";


//  Id pregunta: 10522 Año de creación de pregunta: 2016
 questions[15]= "16)  A los efectos previstos en esta Ley, tendr&aacute;n capacidad de obrar ante las Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[15]= new Array();
 choices[15][0] = "las personas f&iacute;sicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 choices[15][1] = "los menores de edad para el ejercicio y defensa de aquellos de sus derechos e intereses cuya actuaci&oacute;n no est&eacute; permitida por el ordenamiento jur&iacute;dico sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[15][2] = "cuando la Ley as&iacute; lo declare expresamente, los grupos de afectados, las uniones y entidades sin personalidad jur&iacute;dica y los patrimonios independientes o aut&oacute;nomos";
 choices[15][3] = "las personas jur&iacute;dicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 answers[15] = choices[15][1];
 units[15] = "7";
 comments[15] = "Id Pregunta: 10522. LEY 39/2015";


//  Id pregunta: 10592 Año de creación de pregunta: 2016
 questions[16]= "17)  Seg&uacute;n el Plan de Transformaci&oacute;n Digital de la AGE, &iquest;con qu&eacute; frecuencia de realizar&aacute;n nuevas declaraciones de servicios compartidos?";
 choices[16]= new Array();
 choices[16][0] = "Anualmente";
 choices[16][1] = "Bienalmente";
 choices[16][2] = "Cada cuatro a&ntilde;os";
 choices[16][3] = "No se define ninguna periodicidad";
 answers[16] = choices[16][1];
 units[16] = "19";
 comments[16] = "Id Pregunta: 10592. Estrategia TIC. Se indica en la l&iacute;nea de acci&oacute;n 6";


//  Id pregunta: 10153 Año de creación de pregunta: 2016
 questions[17]= "18)  Se entiende por documentos p&uacute;blicos administrativos";
 choices[17]= new Array();
 choices[17][0] = "los v&aacute;lidamente emitidos por los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[17][1] = "los remitidos por personas f&iacute;sicas o jur&iacute;dicas a los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[17][2] = "a y b son correctas";
 choices[17][3] = "a y b son incorrectas";
 answers[17] = choices[17][0];
 units[17] = "7";
 comments[17] = "Id Pregunta: 10153. Ley 39/2015, Art&iacute;culo 26";


//  Id pregunta: 10020 Año de creación de pregunta: 2016
 questions[18]= "19)  Con respecto al &aacute;mbito objetivo de aplicaci&oacute;n de la Ley 37/2007, de 16 de noviembre, sobre reutilizaci&oacute;n de la informaci&oacute;n del sector p&uacute;blico:";
 choices[18]= new Array();
 choices[18][0] = "Abarca el intercambio de documentos entre Administraciones y organismos del sector p&uacute;blico en el ejercicio de las funciones p&uacute;blicas que tengan atribuidas.";
 choices[18][1] = "Ser&aacute; aplicable incluso sobre los documentos que obran en las Administraciones y organismos del sector p&uacute;blico para finalidades ajenas a sus funciones de servicio p&uacute;blico.";
 choices[18][2] = "No afecta a la existencia de derechos de propiedad intelectual de las Administraciones y organismos del sector p&uacute;blico ni a su posesi&oacute;n por &eacute;stos.";
 choices[18][3] = "Fija la prevalencia del derecho fundamental a la protecci&oacute;n de datos de car&aacute;cter personal, a&uacute;n cuando se apliquen medidas de disociaci&oacute;n de datos.";
 answers[18] = choices[18][2];
 units[18] = "27";
 comments[18] = "Id Pregunta: 10020. AGE A1 2015";


//  Id pregunta: 10154 Año de creación de pregunta: 2016
 questions[19]= "20)  Los t&eacute;rminos y plazos establecidos en la ley 39/2015 u otras leyes obligan a:";
 choices[19]= new Array();
 choices[19][0] = "las autoridades al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[19][1] = "el personal al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[19][2] = "los interesados en la tramitaci&oacute;n de los asuntos";
 choices[19][3] = "todas son correctas";
 answers[19] = choices[19][3];
 units[19] = "7";
 comments[19] = "Id Pregunta: 10154. Ley 39/2015, Art&iacute;culo 29";


//  Id pregunta: 10367 Año de creación de pregunta: 2016
 questions[20]= "21)  Es una funci&oacute;n del Presidente del Parlamento Europeo:";
 choices[20]= new Array();
 choices[20][0] = "Presentar la moci&oacute;n de censura.";
 choices[20][1] = "Presidir las sesiones del Parlamento.";
 choices[20][2] = "Organizar la Secretar&iacute;a General.";
 choices[20][3] = "Preparar las actividades de las Comisiones.";
 answers[20] = choices[20][1];
 units[20] = "5";
 comments[20] = "Id Pregunta: 10367. UNION EUROPEA";


//  Id pregunta: 10295 Año de creación de pregunta: 2016
 questions[21]= "22)  La sede del Tribunal de Cuentas Europeo se encuentra en:";
 choices[21]= new Array();
 choices[21][0] = "Estrasburgo.";
 choices[21][1] = "Bruselas.";
 choices[21][2] = "Luxemburgo.";
 choices[21][3] = "Holanda.";
 answers[21] = choices[21][2];
 units[21] = "5";
 comments[21] = "Id Pregunta: 10295. UNION EUROPEA";


//  Id pregunta: 10619 Año de creación de pregunta: 2016
 questions[22]= "23)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[22]= new Array();
 choices[22][0] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: la identificaci&oacute;n de clases sem&aacute;nticas, atributos y servicios; identificaci&oacute;n de las relaciones entre clases; el emplazamiento de las clases, atributos y servicios; la especificaci&oacute;n del comportamiento din&aacute;mico mediante paso de mensajes.";
 choices[22][1] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: a&ntilde;adir las clases interfaz, base y utilidad; refinar las clases sem&aacute;nticas.";
 choices[22][2] = "En el An&aacute;lisis Orientado a Objetos, deben llevarse a cabo las siguientes actividades: toma inicial de requisitos; an&aacute;lisis; dise&ntilde;o; implementaci&oacute;n.";
 choices[22][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[22] = choices[22][1];
 units[22] = "89";
 comments[22] = "Id Pregunta: 10619. Junta de Extremadura A1 2015";


//  Id pregunta: 10465 Año de creación de pregunta: 2016
 questions[23]= "24)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales deber&aacute; de contener:";
 choices[23]= new Array();
 choices[23][0] = "Las respuestas a) y b) son correctas.";
 choices[23][1] = "Las respuestas a) y b) no son correctas.";
 choices[23][2] = "Contenido coherente con los planes sectoriales.";
 choices[23][3] = "Programas de actuaci&oacute;n de existentes en el &aacute;mbito de cada departamento.";
 answers[23] = choices[23][0];
 units[23] = "10";
 comments[23] = "Id Pregunta: 10465. PRESUPUESTOS GENERALES";


//  Id pregunta: 10125 Año de creación de pregunta: 2016
 questions[24]= "25)  El derecho de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/20013  podr&aacute; ser limitado cuando acceder a la informaci&oacute;n suponga un perjuicio, se&ntilde;ale cual NO est&aacute; contemplado en dicha ley:";
 choices[24]= new Array();
 choices[24][0] = "Los intereses de las administraciones que cuenten con su propio Consejo de Transparencia u &oacute;rgano equivalente.";
 choices[24][1] = "La garant&iacute;a de la confidencialidad o el secreto requerido en procesos de toma de decisi&oacute;n.";
 choices[24][2] = "La protecci&oacute;n del medio ambiente.";
 choices[24][3] = "Los intereses econ&oacute;micos y comerciales.";
 answers[24] = choices[24][0];
 units[24] = "22";
 comments[24] = "Id Pregunta: 10125. ";


//  Id pregunta: 10527 Año de creación de pregunta: 2016
 questions[25]= "26)  Los interesados con capacidad de obrar podr&aacute;n actuar por medio de representante:";
 choices[25]= new Array();
 choices[25][0] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 choices[25][1] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[25][2] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[25][3] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 answers[25] = choices[25][2];
 units[25] = "7";
 comments[25] = "Id Pregunta: 10527. LEY 39/2015";


//  Id pregunta: 10503 Año de creación de pregunta: 2016
 questions[26]= "27)  Respecto a la Ley Org&aacute;nica 2/2012 se&ntilde;ale la respuesta falsa:";
 choices[26]= new Array();
 choices[26][0] = "La elaboraci&oacute;n, aprobaci&oacute;n y ejecuci&oacute;n de los Presupuestos y dem&aacute;s actuaciones que afecten a los gastos o ingresos de las Administraciones P&uacute;blicas y dem&aacute;s entidades que forman parte del sector p&uacute;blico se someter&aacute; al principio de estabilidad presupuestaria.";
 choices[26][1] = "Ninguna Administraci&oacute;n P&uacute;blica podr&aacute; incurrir en d&eacute;ficit estructural, definido como d&eacute;ficit ajustado del ciclo, neto de medidas excepcionales y temporales.";
 choices[26][2] = "Excepcionalmente, el Estado y las Comunidades Aut&oacute;nomas podr&aacute;n incurrir en d&eacute;ficit estructural en caso de cat&aacute;strofes naturales, recesi&oacute;n econ&oacute;mica grave o situaciones de emergencia extraordinaria que escapen al control de las Administraciones P&uacute;blicas y perjudiquen considerablemente su situaci&oacute;n financiera o su sostenibilidad econ&oacute;mica o social.";
 choices[26][3] = "Las Corporaciones Locales deber&aacute;n mantener una posici&oacute;n de equilibrio presupuestario.";
 answers[26] = choices[26][3];
 units[26] = "10";
 comments[26] = "Id Pregunta: 10503. PRESUPUESTOS GENERALES";


//  Id pregunta: 10252 Año de creación de pregunta: 2016
 questions[27]= "28)  La Constituci&oacute;n garantiza el principio de irretroactividad:";
 choices[27]= new Array();
 choices[27][0] = "De las disposiciones favorables.";
 choices[27][1] = "De las disposiciones sancionadoras no favorables.";
 choices[27][2] = "De las disposiciones no restrictivas de derechos individuales.";
 choices[27][3] = "Las respuestas b) y c) son correctas.";
 answers[27] = choices[27][3];
 units[27] = "1";
 comments[27] = "Id Pregunta: 10252. CONSTITUCION1978";


//  Id pregunta: 10429 Año de creación de pregunta: 2016
 questions[28]= "29)  Para la prevenci&oacute;n del acoso sexual y del acoso por raz&oacute;n de sexo, las Administraciones P&uacute;blicas negociar&aacute;n con la representaci&oacute;n legal de las trabajadoras y trabajadores, un protocolo de actuaci&oacute;n que comprender&aacute;:";
 choices[28]= new Array();
 choices[28][0] = "La identificaci&oacute;n de las personas responsables de atender a quienes formulen una queja o denuncia.";
 choices[28][1] = "El tratamiento p&uacute;blico de las denuncias de hechos que pudieran ser constitutivos de acoso sexual o de acoso por raz&oacute;n de sexo.";
 choices[28][2] = "Ambas son correctas.";
 choices[28][3] = "Ambas son incorrectas.";
 answers[28] = choices[28][0];
 units[28] = "14";
 comments[28] = "Id Pregunta: 10429. POLITICAS DE IGUALDAD";


//  Id pregunta: 10233 Año de creación de pregunta: 2016
 questions[29]= "30)  Seg&uacute;n el Art&iacute;culo 75 de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras pueden delegar en las Comisiones Legislativas Permanentes:";
 choices[29]= new Array();
 choices[29][0] = "La aprobaci&oacute;n de proyectos o proposiciones de ley.";
 choices[29][1] = "La convalidaci&oacute;n de decretos-leyes.";
 choices[29][2] = "La aprobaci&oacute;n de proyectos de leyes de bases.";
 choices[29][3] = "La aprobaci&oacute;n de proyectos de leyes org&aacute;nicas.";
 answers[29] = choices[29][2];
 units[29] = "1";
 comments[29] = "Id Pregunta: 10233. CONSTITUCION1978";


//  Id pregunta: 10226 Año de creación de pregunta: 2016
 questions[30]= "31)  Extinguidas todas las l&iacute;neas llamadas en Derecho para la sucesi&oacute;n en el trono:";
 choices[30]= new Array();
 choices[30][0] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n en la forma que m&aacute;s convenga a los intereses de Espa&ntilde;a.";
 choices[30][1] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n atendiendo exclusivamente a los imperativos geneal&oacute;gicos conocidos.";
 choices[30][2] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n de conformidad con los usos y costumbres existentes.";
 choices[30][3] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n conforme a lo que decidan dos grupos parlamentarios o una quinta parte de los Diputados.";
 answers[30] = choices[30][0];
 units[30] = "1";
 comments[30] = "Id Pregunta: 10226. CONSTITUCION1978";


//  Id pregunta: 10165 Año de creación de pregunta: 2016
 questions[31]= "32)  Como parte del Plan de acci&oacute;n sobre administraci&oacute;n electr&oacute;nica para 2010-2020, la Comisi&oacute;n:";
 choices[31]= new Array();
 choices[31][0] = "Tratar&aacute; de interconectar los registros mercantiles en toda la UE.";
 choices[31][1] = "Se adoptar&aacute;n nuevas normas en materia de telecomunicaciones";
 choices[31][2] = "Se revisar&aacute; la Directiva de servicios de comunicaci&oacute;n audiovisual existente para adaptarse a la evoluci&oacute;n tecnol&oacute;gica";
 choices[31][3] = "Se actualizar&aacute;n las normas de comercio electr&oacute;nico";
 answers[31] = choices[31][0];
 units[31] = "19";
 comments[31] = "Id Pregunta: 10165. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/";


//  Id pregunta: 10021 Año de creación de pregunta: 2016
 questions[32]= "33)  En ITIL v3, &iquest;cu&aacute;l de los siguientes procesos forma parte del Dise&ntilde;o del Servicio?";
 choices[32]= new Array();
 choices[32][0] = "Gesti&oacute;n de la disponibilidad";
 choices[32][1] = "Gesti&oacute;n de la demanda";
 choices[32][2] = "Gesti&oacute;n de entregas";
 choices[32][3] = "Gesti&oacute;n de la configuraci&oacute;n";
 answers[32] = choices[32][0];
 units[32] = "101";
 comments[32] = "Id Pregunta: 10021. AGE A1 2015";


//  Id pregunta: 10297 Año de creación de pregunta: 2016
 questions[33]= "34)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n a la Presidencia del Consejo:";
 choices[33]= new Array();
 choices[33][0] = "Es rotatoria y tiene una duraci&oacute;n de un a&ntilde;o.";
 choices[33][1] = "Es rotatoria y tiene una duraci&oacute;n de seis meses.";
 choices[33][2] = "Se nombra por el Parlamento para un per&iacute;odo de cinco a&ntilde;os.";
 choices[33][3] = "La ostenta el presidente de la Comisi&oacute;n.";
 answers[33] = choices[33][1];
 units[33] = "5";
 comments[33] = "Id Pregunta: 10297. UNION EUROPEA";


//  Id pregunta: 10083 Año de creación de pregunta: 2016
 questions[34]= "35)  Seg&uacute;n WCAG 2.0, &iquest;con qu&eacute; principio est&aacute; relacionada la pauta &ldquo;Hacer que las p&aacute;ginas web aparezcan y operen de forma predecible&rdquo;?";
 choices[34]= new Array();
 choices[34][0] = "Perceptible";
 choices[34][1] = "Operable";
 choices[34][2] = "Comprensible";
 choices[34][3] = "Robusto";
 answers[34] = choices[34][2];
 units[34] = "42";
 comments[34] = "Id Pregunta: 10083. AGE A1 2015";


//  Id pregunta: 10311 Año de creación de pregunta: 2016
 questions[35]= "36)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[35]= new Array();
 choices[35][0] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los tres quintos del n&uacute;mero de Estados miembros.";
 choices[35][1] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a las tres cuartas partes del n&uacute;mero de Estados miembros.";
 choices[35][2] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los dos tercios del n&uacute;mero de Estados miembros.";
 choices[35][3] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a un nacional por cada Estado miembro.";
 answers[35] = choices[35][2];
 units[35] = "5";
 comments[35] = "Id Pregunta: 10311. UNION EUROPEA";


//  Id pregunta: 10378 Año de creación de pregunta: 2016
 questions[36]= "37)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[36]= new Array();
 choices[36][0] = "Quince miembros.";
 choices[36][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[36][2] = "Los miembros que determine el Consejo.";
 choices[36][3] = "Un Presidente y quince miembros.";
 answers[36] = choices[36][1];
 units[36] = "14";
 comments[36] = "Id Pregunta: 10378. UNION EUROPEA";


//  Id pregunta: 10475 Año de creación de pregunta: 2016
 questions[37]= "38)  De conformidad con el art&iacute;culo 29.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales se remitir&aacute;n:";
 choices[37]= new Array();
 choices[37][0] = "Anualmente.";
 choices[37][1] = "Ninguna de las respuestas es correcta.";
 choices[37][2] = "Trimestralmente.";
 choices[37][3] = "Semestralmente.";
 answers[37] = choices[37][0];
 units[37] = "10";
 comments[37] = "Id Pregunta: 10475. PRESUPUESTOS GENERALES";


//  Id pregunta: 10583 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Qu&eacute; establece Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[38]= new Array();
 choices[38][0] = "Los principios rectores";
 choices[38][1] = "Los objetivos estrat&eacute;gicos y las acciones para alcanzarlos";
 choices[38][2] = "Los hitos para su desarrollo gradual";
 choices[38][3] = "Todos los anteriores";
 answers[38] = choices[38][3];
 units[38] = "19";
 comments[38] = "Id Pregunta: 10583. Estrategia TIC";


//  Id pregunta: 10155 Año de creación de pregunta: 2016
 questions[39]= "40)  A efectos del c&oacute;mputo de plazo fijado en d&iacute;as h&aacute;biles, y en lo que se refiere al cumplimiento de plazos por los interesados, la presentaci&oacute;n de documentos en un registro electr&oacute;nico un d&iacute;a inh&aacute;bil:";
 choices[39]= new Array();
 choices[39][0] = "se entender&aacute; realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil.";
 choices[39][1] = "se entender&aacute;, en todo caso, realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior";
 choices[39][2] = "se entender&aacute; realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil";
 choices[39][3] = "se entender&aacute;, en todo caso, realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente";
 answers[39] = choices[39][2];
 units[39] = "7";
 comments[39] = "Id Pregunta: 10155. Ley 39/2015, Art&iacute;culo 31";


//  Id pregunta: 10523 Año de creación de pregunta: 2016
 questions[40]= "41)  Se consideran interesados en el procedimiento administrativo:";
 choices[40]= new Array();
 choices[40][0] = "quienes lo promuevan como titulares de derechos o intereses leg&iacute;timos individuales o colectivos";
 choices[40][1] = "los que, habiendo iniciado el procedimiento, tengan derechos que puedan resultar afectados por la decisi&oacute;n que en el mismo se adopte";
 choices[40][2] = "aquellos cuyos intereses leg&iacute;timos, individuales o colectivos, puedan resultar afectados por la resoluci&oacute;n y se personen en el procedimiento durante el tr&aacute;mite de audiencia";
 choices[40][3] = "todas son correctas";
 answers[40] = choices[40][0];
 units[40] = "7";
 comments[40] = "Id Pregunta: 10523. LEY 39/2015";


//  Id pregunta: 10327 Año de creación de pregunta: 2016
 questions[41]= "42)  La idea de una Europa unida tiene sus antecedentes en el siglo:";
 choices[41]= new Array();
 choices[41][0] = "X.";
 choices[41][1] = "XIX.";
 choices[41][2] = "XV.";
 choices[41][3] = "XIII.";
 answers[41] = choices[41][1];
 units[41] = "5";
 comments[41] = "Id Pregunta: 10327. UNION EUROPEA";


//  Id pregunta: 10352 Año de creación de pregunta: 2016
 questions[42]= "43)  La Comisi&oacute;n est&aacute; compuesta por:";
 choices[42]= new Array();
 choices[42][0] = "27 miembros, nacionales de los Estados comunitarios.";
 choices[42][1] = "20 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 choices[42][2] = "25 miembros, nacionales de los Estados comunitarios.";
 choices[42][3] = "d)22 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 answers[42] = choices[42][0];
 units[42] = "5";
 comments[42] = "Id Pregunta: 10352. UNION EUROPEA";


//  Id pregunta: 10615 Año de creación de pregunta: 2016
 questions[43]= "44)  El establecimiento de una conexi&oacute;n mediante el protocolo TCP, b&aacute;sicamente se realiza de la siguiente manera:";
 choices[43]= new Array();
 choices[43][0] = "Emisor: env&iacute;a SYN. Receptor: env&iacute;a SYN+ACK. Emisor: env&iacute;a ACK.";
 choices[43][1] = "Emisor: env&iacute;a ACK. Receptor: env&iacute;a ACK+SYN. Emisor: env&iacute;a SYN.";
 choices[43][2] = "Emisor: env&iacute;a SYN. Receptor: env&iacute;a ACK.";
 choices[43][3] = "Emisor: env&iacute;a ACK. Receptor: env&iacute;a SYN.";
 answers[43] = choices[43][0];
 units[43] = "109";
 comments[43] = "Id Pregunta: 10615. Junta de Extremadura A1 2015";


//  Id pregunta: 10136 Año de creación de pregunta: 2016
 questions[44]= "45)  La Ley 15/2014, de racionalizaci&oacute;n del Sector P&uacute;blico y otras medidas de reforma administrativa, no incluye:";
 choices[44]= new Array();
 choices[44][0] = "Modificaci&oacute;n de la Ley General Presupuestaria para permitir de manera m&aacute;s eficaz el control de las cuentas corrientes en las que se sit&uacute;an fondos de Tesoro P&uacute;blico.";
 choices[44][1] = "Permiso para la reordenaci&oacute;n de organismos p&uacute;blicos con el fin de mejorar su eficiencia y reducir el gasto p&uacute;blico.";
 choices[44][2] = "Modificaci&oacute;n normativa para hacer uso de certificados electr&oacute;nicos &uacute;nicos para grupos o colectivos de personas f&iacute;sicas.";
 choices[44][3] = "Implantaci&oacute;n del BOE como Tabl&oacute;n Edictal &Uacute;nico para la realizaci&oacute;n de notificaciones administrativas.";
 answers[44] = choices[44][2];
 units[44] = "12";
 comments[44] = "Id Pregunta: 10136. Leyes modelo econ&oacute;mico";


//  Id pregunta: 10239 Año de creación de pregunta: 2016
 questions[45]= "46)  Respecto de las relaciones que constitucionalmente se regulan entre los miembros del Gobierno y las Cortes Generales:";
 choices[45]= new Array();
 choices[45][0] = "La comparecencia de los miembros del Gobierno ante las C&aacute;maras y sus Comisiones puede extenderse tambi&eacute;n a los funcionarios de sus Departamentos.";
 choices[45][1] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo solicitasen las propias C&aacute;maras o sus Comisiones.";
 choices[45][2] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo deciden los miembros del Gobierno.";
 choices[45][3] = "Los funcionarios no comparecer&aacute;n en ning&uacute;n caso.";
 answers[45] = choices[45][0];
 units[45] = "1";
 comments[45] = "Id Pregunta: 10239. CONSTITUCION1978";


//  Id pregunta: 10091 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Cu&aacute;l de las siguientes opciones muestra exclusivamente herramientas directamente relacionadas con la realizaci&oacute;n de pruebas para asegurar la calidad del software?";
 choices[46]= new Array();
 choices[46][0] = "JUnit, Artifactory y SonarQube";
 choices[46][1] = "JUnit, Artifactory y Selenium";
 choices[46][2] = "JUnit, SonarQube y Selenium";
 choices[46][3] = "ArtiFactory, SonarQube y Selenium";
 answers[46] = choices[46][2];
 units[46] = "92";
 comments[46] = "Id Pregunta: 10091. AGE A1 2015";


//  Id pregunta: 10614 Año de creación de pregunta: 2016
 questions[47]= "48)  Dada la m&aacute;scara de red 255.255.240.0, &iquest;a qu&eacute; red pertenece la direcci&oacute;n IP 192.228.17.15?";
 choices[47]= new Array();
 choices[47][0] = "192.228.0.0";
 choices[47][1] = "192.228.8.0";
 choices[47][2] = "192.228.16.0";
 choices[47][3] = "192.228.17.0";
 answers[47] = choices[47][2];
 units[47] = "109";
 comments[47] = "Id Pregunta: 10614. Junta de Extremadura A1 2015";


//  Id pregunta: 10210 Año de creación de pregunta: 2016
 questions[48]= "49)  De acuerdo con la Constituci&oacute;n espa&ntilde;ola, la declaraci&oacute;n del estado de excepci&oacute;n corresponde a:";
 choices[48]= new Array();
 choices[48][0] = "El rey, a propuesta del Gobierno.";
 choices[48][1] = "El Gobierno, mediante Decreto acordado en Consejo de Ministros, previa autorizaci&oacute;n del Congreso de los Diputados.";
 choices[48][2] = "El Congreso de los Diputados, a propuesta del Consejo de Ministros.";
 choices[48][3] = "Las Cortes Generales, por mayor&iacute;a de los miembros de cada C&aacute;mara.";
 answers[48] = choices[48][1];
 units[48] = "1";
 comments[48] = "Id Pregunta: 10210. CONSTITUCION1978";


//  Id pregunta: 10511 Año de creación de pregunta: 2016
 questions[49]= "50)  Cuando resulte eficaz, proporcionado y necesario para la consecuci&oacute;n de los fines propios del procedimiento, y de manera motivada, podr&aacute;n incluirse tr&aacute;mites adicionales o distintos a los contemplados en esta Ley:";
 choices[49]= new Array();
 choices[49][0] = "solo mediante ley";
 choices[49][1] = "reglamentariamente";
 choices[49][2] = "mediante ley o reglamentariamente";
 choices[49][3] = "ninguna es correcta";
 answers[49] = choices[49][0];
 units[49] = "7";
 comments[49] = "Id Pregunta: 10511. LEY 39/2015";


//  Id pregunta: 10084 Año de creación de pregunta: 2016
 questions[50]= "51)  En el marco europeo de interoperabilidad de sistemas de informaci&oacute;n, &iquest;qu&eacute; programa de la Uni&oacute;n Europea ha estado en vigor entre 2010 y 2015?";
 choices[50]= new Array();
 choices[50][0] = "Interchange of Data between Administrations (IDA)";
 choices[50][1] = "Interoperability Solutions for European Public Administrations (ISA)";
 choices[50][2] = "Interoperable Delivery of Pan-European eGovernment Services to Public Administrations, Businesses and Citizens (IDABC)";
 choices[50][3] = "Interoperability Electronic European Solution (IEES)";
 answers[50] = choices[50][1];
 units[50] = "43";
 comments[50] = "Id Pregunta: 10084. AGE A1 2015";


//  Id pregunta: 10383 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre mujeres y hombres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[51]= new Array();
 choices[51][0] = "El Consejo Nacional de la Mujer";
 choices[51][1] = "El Consejo de la Mujer";
 choices[51][2] = "El Instituto de la Mujer";
 choices[51][3] = "El Consejo de Participaci&oacute;n de la Mujer";
 answers[51] = choices[51][3];
 units[51] = "14";
 comments[51] = "Id Pregunta: 10383. POLITICAS DE IGUALDAD";


//  Id pregunta: 10231 Año de creación de pregunta: 2016
 questions[52]= "53)  La convocatoria a refer&eacute;ndum en los casos previstos en la Constituci&oacute;n corresponde a:";
 choices[52]= new Array();
 choices[52][0] = "El Presidente del Congreso de los Diputados.";
 choices[52][1] = "El Presidente del Gobierno.";
 choices[52][2] = "El Rey.";
 choices[52][3] = "El Consejo de Ministros.";
 answers[52] = choices[52][0];
 units[52] = "1";
 comments[52] = "Id Pregunta: 10231. CONSTITUCION1978";


//  Id pregunta: 10634 Año de creación de pregunta: 2016
 questions[53]= "54)  En un modelo entidad/relaci&oacute;n, un tipo de interrelaci&oacute;n se caracteriza por:";
 choices[53]= new Array();
 choices[53][0] = "El nombre y el tipo de correspondencia.";
 choices[53][1] = "El nombre, el grado y el tipo de correspondencia.";
 choices[53][2] = "El nombre, el nivel y el tipo de correspondencia.";
 choices[53][3] = "El nombre y el grado.";
 answers[53] = choices[53][1];
 units[53] = "85";
 comments[53] = "Id Pregunta: 10634. Junta de Extremadura A1 2015";


//  Id pregunta: 10026 Año de creación de pregunta: 2016
 questions[54]= "55)  Usted, como directivo TIC de la AGE, decide crear un portal web, con una direcci&oacute;n electr&oacute;nica nueva, con el objetivo de informar al ciudadano sobre determinados aspectos relacionados con su unidad. &iquest;Cu&aacute;l de los siguientes tipos de certificado utilizar&iacute;a para identificar a los servidores de su portal informativo?";
 choices[54]= new Array();
 choices[54][0] = "Sello electr&oacute;nico";
 choices[54][1] = "Sede electr&oacute;nica";
 choices[54][2] = "Servidor seguro (SSL/TLS)";
 choices[54][3] = "Empleado p&uacute;blico";
 answers[54] = choices[54][2];
 units[54] = "7";
 comments[54] = "Id Pregunta: 10026. AGE A1 2015";


//  Id pregunta: 10460 Año de creación de pregunta: 2016
 questions[55]= "56)  De conformidad con el art&iacute;culo 11 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los derechos de naturaleza p&uacute;blica de la Hacienda P&uacute;blica estatal se adquieren y nacen de conformidad con lo establecido en:";
 choices[55]= new Array();
 choices[55][0] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[55][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la AGE.";
 choices[55][2] = "La normativa reguladora de cada derecho.";
 choices[55][3] = "Ley 50/1997, del Gobierno.";
 answers[55] = choices[55][2];
 units[55] = "10";
 comments[55] = "Id Pregunta: 10460. PRESUPUESTOS GENERALES";


//  Id pregunta: 10310 Año de creación de pregunta: 2016
 questions[56]= "57)  Los actos legislativos de la Uni&oacute;n Europea, podr&aacute;n adoptarse &uacute;nicamente a propuesta de:";
 choices[56]= new Array();
 choices[56][0] = "La Comisi&oacute;n Europea.";
 choices[56][1] = "El Consejo Europeo.";
 choices[56][2] = "El Consejo de Europa.";
 choices[56][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[56] = choices[56][0];
 units[56] = "5";
 comments[56] = "Id Pregunta: 10310. UNION EUROPEA";


//  Id pregunta: 10046 Año de creación de pregunta: 2016
 questions[57]= "58)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[57]= new Array();
 choices[57][0] = "En un sistema de cifrado de clave asim&eacute;trica la seguridad radica en la transmisi&oacute;n de la clave, mediante canal seguro, entre el emisor y el receptor del mensaje.";
 choices[57][1] = "Las huellas digitales devueltas por una misma funci&oacute;n hash tienen id&eacute;ntica longitud.";
 choices[57][2] = "Para ofrecer un nivel de seguridad equivalente, los sistemas de clave p&uacute;blica requieren menores longitudes de clave que los sistemas sim&eacute;tricos.";
 choices[57][3] = "Se denomina criptograma al procedimiento empleado para cifrar un mensaje.";
 answers[57] = choices[57][1];
 units[57] = "76";
 comments[57] = "Id Pregunta: 10046. AGE A1 2015";


//  Id pregunta: 10060 Año de creación de pregunta: 2016
 questions[58]= "59)  El modelo de capacidad de procesos establecido por COBIT v5:";
 choices[58]= new Array();
 choices[58][0] = "No modifica esencialmente el modelo planteado por COBIT v4.1.";
 choices[58][1] = "Define 5 niveles de procesos (proceso incompleto, ejecutado, gestionado, predecible, optimizado).";
 choices[58][2] = "El nivel 1 (proceso ejecutado) s&oacute;lo se alcanza si el proceso alcanza su prop&oacute;sito.";
 choices[58][3] = "Un proceso es optimizado si se ejecuta dentro de los l&iacute;mites definidos para alcanzar sus resultados de proceso.";
 answers[58] = choices[58][2];
 units[58] = "101";
 comments[58] = "Id Pregunta: 10060. AGE A1 2015";


//  Id pregunta: 10261 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Qui&eacute;n representa al Consejo General del Poder Judicial?";
 choices[59]= new Array();
 choices[59][0] = "La Comisi&oacute;n Permanente.";
 choices[59][1] = "El Presidente.";
 choices[59][2] = "El Pleno.";
 choices[59][3] = "El Vicepresidente.";
 answers[59] = choices[59][3];
 units[59] = "1";
 comments[59] = "Id Pregunta: 10261. CONSTITUCION1978";


//  Id pregunta: 10679 Año de creación de pregunta: 2016
 questions[60]= "61)  De acuerdo a la Ley 27/2011, de 1 de agosto, sobre actualizaci&oacute;n, adecuaci&oacute;n y modernizaci&oacute;n del sistema de Seguridad Social, la edad exigida de jubilaci&oacute;n:";
 choices[60]= new Array();
 choices[60][0] = "A partir del a&ntilde;o 2020, ser&aacute; de 67 a&ntilde;os para quellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un perido cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[60][1] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para quellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un perido cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[60][2] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para todas las personas con independencia del periodo cotizado.";
 choices[60][3] = "Aumenta progresivamente desde los 65 a los 67 a&ntilde;os desde el a&ntilde;o 2013 al 2027, si bien se mantiene en los 65 a&ntilde;os para personas con un periodo cotizado igual o mayor a 35 a&ntilde;os.";
 answers[60] = choices[60][1];
 units[60] = "14";
 comments[60] = "Id Pregunta: 10679. Pensiones";


//  Id pregunta: 10566 Año de creación de pregunta: 2016
 questions[61]= "62)  Cuando decimos que la inversi&oacute;n extranjera en Espa&ntilde;a tiene un car&aacute;cter proc&iacute;clico, nos referimos a que:";
 choices[61]= new Array();
 choices[61][0] = "Aumenta cuando la econom&iacute;a est&aacute; en crecimiento, y se reduce cuando el pa&iacute;s entra en recesi&oacute;n";
 choices[61][1] = "Se reduce cuando la econom&iacute;a est&aacute; en crecimiento, y aumenta cuando el pa&iacute;s entra en recesi&oacute;n";
 choices[61][2] = "Aumenta cuando el pa&iacute;s entra en recesi&oacute;n, y aumenta cuando la econom&iacute;a est&aacute; en crecimiento";
 choices[61][3] = "Se reduce cuando el pa&iacute;s entra en recesi&oacute;n, y se reduce cuando la econom&iacute;a est&aacute; en crecimiento";
 answers[61] = choices[61][0];
 units[61] = "12";
 comments[61] = "Id Pregunta: 10566. Modelo econ&oacute;mico";


//  Id pregunta: 10016 Año de creación de pregunta: 2016
 questions[62]= "63)  De acuerdo con la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos de comunicaciones electr&oacute;nicas y de redes p&uacute;blicas de comunicaci&oacute;n:";
 choices[62]= new Array();
 choices[62][0] = "Deben conservarse los datos que revelen el contenido de la comunicaci&oacute;n en virtud de lo establecido en la citada Ley.";
 choices[62][1] = "La obligaci&oacute;n de conservaci&oacute;n de datos cesa a los tres a&ntilde;os desde la fecha en que se haya producido la comunicaci&oacute;n.";
 choices[62][2] = "Los datos conservados de conformidad con lo dispuesto en la citada Ley pueden ser cedidos para los fines que en la misma se determinan previa autorizaci&oacute;n administrativa.";
 choices[62][3] = "Son sujetos obligados los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones.";
 answers[62] = choices[62][3];
 units[62] = "19";
 comments[62] = "Id Pregunta: 10016. AGE A1 2015";


//  Id pregunta: 10513 Año de creación de pregunta: 2016
 questions[63]= "64)  La presente Ley se aplica al sector p&uacute;blico, que comprende (se&ntilde;ala la incorrecta):";
 choices[63]= new Array();
 choices[63][0] = "la Administraci&oacute;n General del Estado y las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[63][1] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[63][2] = "el sector p&uacute;blico institucional";
 choices[63][3] = "el sector privado corporativo";
 answers[63] = choices[63][3];
 units[63] = "7";
 comments[63] = "Id Pregunta: 10513. LEY 39/2015";


//  Id pregunta: 10372 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[64]= new Array();
 choices[64][0] = "El Parlamento y el Consejo.";
 choices[64][1] = "El Parlamento y la Comisi&oacute;n.";
 choices[64][2] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[64][3] = "La Comisi&oacute;n y el Consejo.";
 answers[64] = choices[64][2];
 units[64] = "5";
 comments[64] = "Id Pregunta: 10372. UNION EUROPEA";


//  Id pregunta: 10655 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Qu&eacute; aplicativo no se encuentra dentro del ecosistemas de Haddoop?";
 choices[65]= new Array();
 choices[65][0] = "Yarn";
 choices[65][1] = "Flume";
 choices[65][2] = "Hive";
 choices[65][3] = "BizAgi";
 answers[65] = choices[65][3];
 units[65] = "73";
 comments[65] = "Id Pregunta: 10655. ";


//  Id pregunta: 10119 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Con qu&eacute; periodicidad se publica la EPA (Encuesta de Poblaci&oacute;n Activa)?";
 choices[66]= new Array();
 choices[66][0] = "Anual";
 choices[66][1] = "Mensual";
 choices[66][2] = "Semestral";
 choices[66][3] = "Trimestral";
 answers[66] = choices[66][3];
 units[66] = "15";
 comments[66] = "Id Pregunta: 10119. ";


//  Id pregunta: 10328 Año de creación de pregunta: 2016
 questions[67]= "68)  El principal &oacute;rgano decisorio de la Comunidad Europea es:";
 choices[67]= new Array();
 choices[67][0] = "El Presidente del Consejo Europeo.";
 choices[67][1] = "La Comisi&oacute;n.";
 choices[67][2] = "El Consejo.";
 choices[67][3] = "El Parlamento Europeo.";
 answers[67] = choices[67][2];
 units[67] = "5";
 comments[67] = "Id Pregunta: 10328. UNION EUROPEA";


//  Id pregunta: 10382 Año de creación de pregunta: 2016
 questions[68]= "69)  Seg&uacute;n la ley org&aacute;nica 3/2007, los actos y las cl&aacute;usulas de los negocios jur&iacute;dicos que causen discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[68]= new Array();
 choices[68][0] = "Se considerar&aacute;n nulos y sin efecto.";
 choices[68][1] = "Est&aacute;n sometidos a una tasa fiscal especial (Tasa Tobin)";
 choices[68][2] = "Son impugnables ante los juzgados especiales contra la violencia de g&eacute;nero.";
 choices[68][3] = "Si son actos administrativos, el recurso se debe interponer, en todo caso, ante el Ministerio de Igualdad.";
 answers[68] = choices[68][0];
 units[68] = "14";
 comments[68] = "Id Pregunta: 10382. POLITICAS DE IGUALDAD";


//  Id pregunta: 10027 Año de creación de pregunta: 2016
 questions[69]= "70)  La Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, NO estableci&oacute; como derecho de los ciudadanos, el derecho:";
 choices[69]= new Array();
 choices[69][0] = "A la igualdad en el acceso electr&oacute;nico a los servicios de las Administraciones P&uacute;blicas.";
 choices[69][1] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que tengan la condici&oacute;n de interesado.";
 choices[69][2] = "A la calidad de los servicios p&uacute;blicos prestados por medios electr&oacute;nicos.";
 choices[69][3] = "A la preferencia en la tramitaci&oacute;n de los procedimientos presentados electr&oacute;nicamente.";
 answers[69] = choices[69][3];
 units[69] = "7";
 comments[69] = "Id Pregunta: 10027. AGE A1 2015";


//  Id pregunta: 10621 Año de creación de pregunta: 2016
 questions[70]= "71)  Seg&uacute;n el paradigma de Orientaci&oacute;n a Objetos, la herencia posibilita que:";
 choices[70]= new Array();
 choices[70][0] = "Cualquier cambio en los datos y operaciones contenidas dentro de una superclase es heredado inmediatamente por todas las subclases que se derivan de la superclase.";
 choices[70][1] = "Cualquier cambio en las operaciones y datos de la superclase no se refleja en todas las subclases.";
 choices[70][2] = "Cualquier cambio en una de las subclases que se heredan de la superclase se refleja en sus clases hermanas.";
 choices[70][3] = "En el paradigma de Orientaci&oacute;n a Objetos no existe la herencia.";
 answers[70] = choices[70][0];
 units[70] = "89";
 comments[70] = "Id Pregunta: 10621. Junta de Extremadura A1 2015";


//  Id pregunta: 10453 Año de creación de pregunta: 2016
 questions[71]= "72)  En las Administraciones P&uacute;blicas...";
 choices[71]= new Array();
 choices[71][0] = "Existe un Presupuesto ordinario &uacute;nicamente";
 choices[71][1] = "Existen s&oacute;lo un presupuesto ordinario y un presupuesto extraordinario";
 choices[71][2] = "Existe un &uacute;nico presupuesto ordinario y uno o varios presupuestos extraordinarios";
 choices[71][3] = "Existen varios presupuestos que indistintamente pueden ser considerados ordinarios o extraordinarios";
 answers[71] = choices[71][0];
 units[71] = "10";
 comments[71] = "Id Pregunta: 10453. PRESUPUESTOS GENERALES";


//  Id pregunta: 10445 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Cu&aacute;l de los siguientes datos NO es obligatorio que figure en la realizaci&oacute;n de una inscripci&oacute;n en el Registro electr&oacute;nico de Apoderamientos?";
 choices[72]= new Array();
 choices[72][0] = "Nombre y apellidos, denominaci&oacute;n o raz&oacute;n social y NIF del poderante.";
 choices[72][1] = "Per&iacute;odo de vigencia de los tr&aacute;mites objeto de apoderamiento.";
 choices[72][2] = "Fecha de otorgamiento.";
 choices[72][3] = "N&uacute;mero de referencia del alta y fecha de alta en el Registro.";
 answers[72] = choices[72][1];
 units[72] = "43";
 comments[72] = "Id Pregunta: 10445. SERVICIOS COMUNES";


//  Id pregunta: 10015 Año de creación de pregunta: 2016
 questions[73]= "74)  Si una aplicaci&oacute;n web desplegada en una JVM utiliza un servlet para generar p&aacute;ginas web de forma din&aacute;mica, dicho servlet no implementa la interfaz SingleThreadModel, y en un momento determinado se encuentra recibiendo m&uacute;ltiples peticiones de clientes de forma concurrente, &iquest;cu&aacute;ntos objetos de dicha clase estar&aacute;n cargados en la memoria de la JVM?";
 choices[73]= new Array();
 choices[73][0] = "0";
 choices[73][1] = "1";
 choices[73][2] = "Tantos como peticiones concurrentes tenga.";
 choices[73][3] = "Tantos como le permita la memoria de la JVM.";
 answers[73] = choices[73][1];
 units[73] = "64";
 comments[73] = "Id Pregunta: 10015. AGE A1 2015";


//  Id pregunta: 10077 Año de creación de pregunta: 2016
 questions[74]= "75)  Respecto al uso de servicios de firma de documentos electr&oacute;nicos mediante certificados electr&oacute;nicos centralizados, mediante el sistema Cl@ve, indique cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[74]= new Array();
 choices[74][0] = "Para poder acceder al servicio, el usuario deber&aacute; solicitar previa y expresamente la emisi&oacute;n de los certificados electr&oacute;nicos centralizados correspondientes.";
 choices[74][1] = "Los certificados electr&oacute;nicos centralizados ser&aacute;n emitidos con las mismas garant&iacute;as de identificaci&oacute;n del DNI electr&oacute;nico del ciudadano.";
 choices[74][2] = "El acceso al servicio requiere en todo caso que el usuario se haya registrado en Cl@ve y haya activado su Cl@ve permanente.";
 choices[74][3] = "En el momento de la identificaci&oacute;n, se requerir&aacute; la utilizaci&oacute;n de una verificaci&oacute;n de seguridad adicional mediante un c&oacute;digo de un solo uso y validez limitada en el tiempo que se enviar&aacute; al tel&eacute;fono m&oacute;vil del usuario registrado.";
 answers[74] = choices[74][2];
 units[74] = "47";
 comments[74] = "Id Pregunta: 10077. AGE A1 2015";


