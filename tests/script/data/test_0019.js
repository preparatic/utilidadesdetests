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

//  Id pregunta: 10122 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos NO forma parte de la estructura org&aacute;nica del Consejo de Transparencia y Buen Gobierno seg&uacute;n su Estatuto?";
 choices[0]= new Array();
 choices[0][0] = "El Presidente del Consejo de Transparencia y Buen Gobierno";
 choices[0][1] = "La Direcci&oacute;n General de Transparencia y Buen Gobierno";
 choices[0][2] = "La Comisi&oacute;n de Transparencia y Buen Gobierno";
 choices[0][3] = "La Subdirecci&oacute;n General de Reclamaciones";
 answers[0] = choices[0][1];
 units[0] = "22";
 comments[0] = "Id Pregunta: 10122. ";


//  Id pregunta: 10238 Año de creación de pregunta: 2016
 questions[1]= "2)  En caso de dimisi&oacute;n del Presidente del Gobierno:";
 choices[1]= new Array();
 choices[1][0] = "El Gobierno cesa a continuaci&oacute;n.";
 choices[1][1] = "El Rey podr&aacute; proponer, a trav&eacute;s del Presidente del Congreso, un nuevo candidato a la Presidencia del Gobierno.";
 choices[1][2] = "El Pleno del Congreso, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 choices[1][3] = "El Pleno del Congreso y del Senado, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 answers[1] = choices[1][1];
 units[1] = "1";
 comments[1] = "Id Pregunta: 10238. CONSTITUCION1978";


//  Id pregunta: 10157 Año de creación de pregunta: 2016
 questions[2]= "3)  Seg&uacute;n la ley 39/2015, los actos administrativos ser&aacute;n objeto de publicaci&oacute;n cuando (se&ntilde;ala la incorrecta):";
 choices[2]= new Array();
 choices[2][0] = "la Administraci&oacute;n estime que la notificaci&oacute;n efectuada a un solo interesado es insuficiente para garantizar la notificaci&oacute;n a todos, no siendo necesaria la notificaci&oacute;n individualizada en este caso";
 choices[2][1] = "se trate de actos integrantes de un procedimiento selectivo o de concurrencia competitiva de cualquier tipo";
 choices[2][2] = "el acto tenga por destinatario a una pluralidad indeterminada de personas";
 choices[2][3] = "as&iacute; lo establezcan las normas reguladoras de cada procedimiento o lo aconsejen razones de inter&eacute;s p&uacute;blico apreciadas por el &oacute;rgano competente";
 answers[2] = choices[2][0];
 units[2] = "7";
 comments[2] = "Id Pregunta: 10157. Ley 39/2015, Art&iacute;culo 45";


//  Id pregunta: 10135 Año de creación de pregunta: 2016
 questions[3]= "4)  Dentro de las &uacute;ltimas medidas vigentes de impulso de la actividad econ&oacute;mica, la liberalizaci&oacute;n del comercio implica:";
 choices[3]= new Array();
 choices[3][0] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[3][1] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 choices[3][2] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[3][3] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 answers[3] = choices[3][0];
 units[3] = "12";
 comments[3] = "Id Pregunta: 10135. Leyes modelo econ&oacute;mico";


//  Id pregunta: 10040 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Cu&aacute;l de los siguientes NO es un gestor de contenidos?";
 choices[4]= new Array();
 choices[4][0] = "Drupal";
 choices[4][1] = "Cassandra";
 choices[4][2] = "Wordpress";
 choices[4][3] = "OpenCMS";
 answers[4] = choices[4][1];
 units[4] = "99";
 comments[4] = "Id Pregunta: 10040. AGE A1 2015";


//  Id pregunta: 10087 Año de creación de pregunta: 2016
 questions[5]= "6)  Respecto a la pol&iacute;tica de normalizaci&oacute;n TIC en la Uni&oacute;n Europea, como se&ntilde;ala el Reglamento 1025/2012 del Parlamento y del Consejo, la identificaci&oacute;n de especificaciones t&eacute;cnicas de las TIC admisibles a efectos de referenciaci&oacute;n:";
 choices[5]= new Array();
 choices[5][0] = "Ha de estar siempre basada en normas de estandarizaci&oacute;n nacionales, europeas o internacionales.";
 choices[5][1] = "No deben ser usadas para permitir la interoperabilidad en la contrataci&oacute;n p&uacute;blica, dado que se podr&iacute;an dar situaciones monopol&iacute;sticas.";
 choices[5][2] = "Ser&aacute; realizada por la Comisi&oacute;n, bien a propuesta de un Estado miembro o por iniciativa propia, sin necesidad de ser una norma nacional, europea o internacional, cumpli&eacute;ndose los dem&aacute;s requisitos establecidos en el reglamento.";
 choices[5][3] = "Requieren para su adopci&oacute;n la unanimidad de todos los Estados miembro.";
 answers[5] = choices[5][2];
 units[5] = "48";
 comments[5] = "Id Pregunta: 10087. AGE A1 2015";


//  Id pregunta: 10538 Año de creación de pregunta: 2016
 questions[6]= "7)  Ser&aacute;/n interoperable/s con los registros electr&oacute;nicos generales y particulares de apoderamientos:";
 choices[6]= new Array();
 choices[6][0] = "los registros mercantiles";
 choices[6][1] = "los registros de la propiedad";
 choices[6][2] = "los protocolos notariales";
 choices[6][3] = "todas son correctas";
 answers[6] = choices[6][3];
 units[6] = "7";
 comments[6] = "Id Pregunta: 10538. LEY 39/2015";


//  Id pregunta: 10142 Año de creación de pregunta: 2016
 questions[7]= "8)  El plazo para la interposici&oacute;n del recurso de alzada ser&aacute;:";
 choices[7]= new Array();
 choices[7][0] = "De un mes si el acto fuera presunto";
 choices[7][1] = "De un mes si el acto fuera expreso";
 choices[7][2] = "De un mes en cualquier caso";
 choices[7][3] = "No existe un plazo m&aacute;ximo para la interposici&oacute;n de un recurso de alzada";
 answers[7] = choices[7][1];
 units[7] = "8";
 comments[7] = "Id Pregunta: 10142. Ley 39/2015, Art&iacute;culo 122";


//  Id pregunta: 10482 Año de creación de pregunta: 2016
 questions[8]= "9)  De acuerdo con el art&iacute;culo 67 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, si las variaciones afectasen al volumen de endeudamiento a corto y largo plazo, ser&aacute; competencia del Consejo de Ministros cuando su importe exceda de la cuant&iacute;a de:";
 choices[8]= new Array();
 choices[8][0] = "12.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[8][1] = "13.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[8][2] = "11.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[8][3] = "10.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 answers[8] = choices[8][0];
 units[8] = "10";
 comments[8] = "Id Pregunta: 10482. PRESUPUESTOS GENERALES";


//  Id pregunta: 10061 Año de creación de pregunta: 2016
 questions[9]= "10)  Indique a partir de qu&eacute; versi&oacute;n del sistema operativo Android se introdujo la posibilidad de que el usuario pudiera gestionar la concesi&oacute;n de permisos para cada aplicaci&oacute;n:";
 choices[9]= new Array();
 choices[9][0] = "Lollipop";
 choices[9][1] = "Jelly Bean";
 choices[9][2] = "Marshmallow";
 choices[9][3] = "KitKat";
 answers[9] = choices[9][2];
 units[9] = "59";
 comments[9] = "Id Pregunta: 10061. AGE A1 2015";


//  Id pregunta: 10530 Año de creación de pregunta: 2016
 questions[10]= "11)  La representaci&oacute;n podr&aacute; acreditarse:";
 choices[10]= new Array();
 choices[10][0] = "mediante cualquier t&iacute;tulo jur&iacute;dico";
 choices[10][1] = "mediante resoluci&oacute;n judicial especial";
 choices[10][2] = "&uacute;nicamente mediante poder notarial";
 choices[10][3] = "mediante cualquier medio v&aacute;lido en Derecho que deje constancia fidedigna de su existencia";
 answers[10] = choices[10][3];
 units[10] = "7";
 comments[10] = "Id Pregunta: 10530. LEY 39/2015";


//  Id pregunta: 10013 Año de creación de pregunta: 2016
 questions[11]= "12)  JNDI se usa para el acceso a:";
 choices[11]= new Array();
 choices[11][0] = "Datos de ficheros";
 choices[11][1] = "Sistemas gestores de bases de datos";
 choices[11][2] = "Directorios de nombres";
 choices[11][3] = "Colas de mensajer&iacute;a";
 answers[11] = choices[11][2];
 units[11] = "64";
 comments[11] = "Id Pregunta: 10013. AGE A1 2015";


//  Id pregunta: 10496 Año de creación de pregunta: 2016
 questions[12]= "13)  A los efectos de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , forman parte del sector p&uacute;blico estatal:";
 choices[12]= new Array();
 choices[12][0] = "Las respuestas a) y b) son correctas.";
 choices[12][1] = "Los organismos aut&oacute;nomos dependientes de la Administraci&oacute;n General del Estado.";
 choices[12][2] = "Las entidades p&uacute;blicas empresariales, dependientes de la Administraci&oacute;n General del Estado, o de cualesquiera otros organismos p&uacute;blicos vinculados o dependientes de ella.";
 choices[12][3] = "Las respuestas a) y b) no son correctas.";
 answers[12] = choices[12][0];
 units[12] = "10";
 comments[12] = "Id Pregunta: 10496. PRESUPUESTOS GENERALES";


//  Id pregunta: 10499 Año de creación de pregunta: 2016
 questions[13]= "14)  A tenor de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la cuant&iacute;a global de los anticipos de caja fija no podr&aacute; superar para cada ministerio y organismo aut&oacute;nomo:";
 choices[13]= new Array();
 choices[13][0] = "El 7% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[13][1] = "El 5% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[13][2] = "El 6% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[13][3] = "El 8% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 answers[13] = choices[13][0];
 units[13] = "10";
 comments[13] = "Id Pregunta: 10499. PRESUPUESTOS GENERALES";


//  Id pregunta: 10624 Año de creación de pregunta: 2016
 questions[14]= "15)  En Java, la sentencia try-catch-throw se utiliza:";
 choices[14]= new Array();
 choices[14][0] = "En sentencias switch para alterar el control de flujo.";
 choices[14][1] = "Para manejar excepciones.";
 choices[14][2] = "Como la sentencia while, para ejecutar bucles.";
 choices[14][3] = "Para devolver el control del programa al final de un m&eacute;todo.";
 answers[14] = choices[14][1];
 units[14] = "64";
 comments[14] = "Id Pregunta: 10624. Junta de Extremadura A1 2015";


//  Id pregunta: 10226 Año de creación de pregunta: 2016
 questions[15]= "16)  Extinguidas todas las l&iacute;neas llamadas en Derecho para la sucesi&oacute;n en el trono:";
 choices[15]= new Array();
 choices[15][0] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n en la forma que m&aacute;s convenga a los intereses de Espa&ntilde;a.";
 choices[15][1] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n atendiendo exclusivamente a los imperativos geneal&oacute;gicos conocidos.";
 choices[15][2] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n de conformidad con los usos y costumbres existentes.";
 choices[15][3] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n conforme a lo que decidan dos grupos parlamentarios o una quinta parte de los Diputados.";
 answers[15] = choices[15][0];
 units[15] = "1";
 comments[15] = "Id Pregunta: 10226. CONSTITUCION1978";


//  Id pregunta: 10252 Año de creación de pregunta: 2016
 questions[16]= "17)  La Constituci&oacute;n garantiza el principio de irretroactividad:";
 choices[16]= new Array();
 choices[16][0] = "De las disposiciones favorables.";
 choices[16][1] = "De las disposiciones sancionadoras no favorables.";
 choices[16][2] = "De las disposiciones no restrictivas de derechos individuales.";
 choices[16][3] = "Las respuestas b) y c) son correctas.";
 answers[16] = choices[16][3];
 units[16] = "1";
 comments[16] = "Id Pregunta: 10252. CONSTITUCION1978";


//  Id pregunta: 10542 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Cu&aacute;l es el &oacute;rgano de la Comisi&oacute;n Europea encargado de la gobernanza TIC cuya misi&oacute;n es garantizar que la Comisi&oacute;n haga un uso eficaz de las tecnolog&iacute;as de la informaci&oacute;n y la comunicaci&oacute;n para el logro de sus objetivos organizativos y pol&iacute;ticos?";
 choices[17]= new Array();
 choices[17][0] = "La Direcci&oacute;n General de Inform&aacute;tica (DIGIT)";
 choices[17][1] = "Oficina del Organismo de Reguladores Europeos de las Comunicaciones Electr&oacute;nicas (ORECE)";
 choices[17][2] = "Agencia de Seguridad de las Redes y de la Informaci&oacute;n de la Uni&oacute;n Europea (ENISA)";
 choices[17][3] = "Instituto Europeo de Innovaci&oacute;n y Tecnolog&iacute;a (EIT)";
 answers[17] = choices[17][0];
 units[17] = "26";
 comments[17] = "Id Pregunta: 10542. Gobernanza TIC";


//  Id pregunta: 10005 Año de creación de pregunta: 2016
 questions[18]= "19)  Se&ntilde;ale cu&aacute;l de los siguientes NO es uno de los principios de COBIT v5:";
 choices[18]= new Array();
 choices[18][0] = "Satisfacer las necesidades de las partes interesadas.";
 choices[18][1] = "Cubrir las necesidades del departamento de tecnolog&iacute;as de la informaci&oacute;n.";
 choices[18][2] = "Habilitar un enfoque hol&iacute;stico.";
 choices[18][3] = "Separar el gobierno de la gesti&oacute;n.";
 answers[18] = choices[18][1];
 units[18] = "101";
 comments[18] = "Id Pregunta: 10005. AGE A1 2015";


//  Id pregunta: 10277 Año de creación de pregunta: 2016
 questions[19]= "20)  Sobre el Consejo de Transparencia y Buen Gobierno:";
 choices[19]= new Array();
 choices[19][0] = "Tiene por finalidad promover la transparencia de la actividad p&uacute;blica, velar por el cumplimiento de las obligaciones de publicidad, salvaguardar el ejercicio de derecho de acceso a la informaci&oacute;n p&uacute;blica y garantizar la observancia de las disposiciones de buen gobierno.";
 choices[19][1] = "Estar&aacute; compuesto por los siguientes &oacute;rganos: la Comisi&oacute;n de Transparencia y Buen Gobierno y el Presidente del Consejo de Transparencia y Buen Gobierno que lo ser&aacute; tambi&eacute;n de su Comisi&oacute;n.";
 choices[19][2] = "Se rige, entre otras, por Ley 33/2003, de 3 de noviembre, del Patrimonio de las Administraciones P&uacute;blicas, y, en lo no previsto en ella, por el Derecho p&uacute;blico en sus adquisiciones patrimoniales.";
 choices[19][3] = "Entre sus funciones se encuentra evaluar el grado de aplicaci&oacute;n de esta Ley. Para ello, elaborar&aacute; anualmente una memoria en la que se incluir&aacute; informaci&oacute;n sobre el cumplimiento de las obligaciones previstas y que ser&aacute; presentada ante las Cortes Generales.";
 answers[19] = choices[19][2];
 units[19] = "22";
 comments[19] = "Id Pregunta: 10277. LEY DE TRANSPARENCIA";


//  Id pregunta: 10352 Año de creación de pregunta: 2016
 questions[20]= "21)  La Comisi&oacute;n est&aacute; compuesta por:";
 choices[20]= new Array();
 choices[20][0] = "27 miembros, nacionales de los Estados comunitarios.";
 choices[20][1] = "20 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 choices[20][2] = "25 miembros, nacionales de los Estados comunitarios.";
 choices[20][3] = "d)22 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 answers[20] = choices[20][0];
 units[20] = "5";
 comments[20] = "Id Pregunta: 10352. UNION EUROPEA";


//  Id pregunta: 10386 Año de creación de pregunta: 2016
 questions[21]= "22)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con las pol&iacute;ticas de igualdad de g&eacute;nero, de conformidad con la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad de mujeres y hombres:";
 choices[21]= new Array();
 choices[21][0] = "El Ministerio de Trabajo y Asuntos Sociales crear&aacute; un distintivo para reconocer a las empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato y de oportunidades con sus trabajadores y trabajadoras.";
 choices[21][1] = "Todas las empresas con sede en Espa&ntilde;a est&aacute;n obligadas a elaborar un plan de igualdad entre sus trabajadores y trabajadoras.";
 choices[21][2] = "En los procesos de car&aacute;cter penal en los que las alegaciones de la parte actora se fundamenten en actuaciones discriminatorias por raz&oacute;n de sexo, corresponde a la persona demandada probar la ausencia de discriminaci&oacute;n.";
 choices[21][3] = "La mitad, al menos, de los nuevos nombramientos de titulares de los &oacute;rganos directivos de la Administraci&oacute;n General del Estado, durante un plazo de dos a&ntilde;os a partir de la entrada en vigor de la ley, deber&aacute;n ser mujeres.";
 answers[21] = choices[21][0];
 units[21] = "14";
 comments[21] = "Id Pregunta: 10386. POLITICAS DE IGUALDAD";


//  Id pregunta: 10077 Año de creación de pregunta: 2016
 questions[22]= "23)  Respecto al uso de servicios de firma de documentos electr&oacute;nicos mediante certificados electr&oacute;nicos centralizados, mediante el sistema Cl@ve, indique cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[22]= new Array();
 choices[22][0] = "Para poder acceder al servicio, el usuario deber&aacute; solicitar previa y expresamente la emisi&oacute;n de los certificados electr&oacute;nicos centralizados correspondientes.";
 choices[22][1] = "Los certificados electr&oacute;nicos centralizados ser&aacute;n emitidos con las mismas garant&iacute;as de identificaci&oacute;n del DNI electr&oacute;nico del ciudadano.";
 choices[22][2] = "El acceso al servicio requiere en todo caso que el usuario se haya registrado en Cl@ve y haya activado su Cl@ve permanente.";
 choices[22][3] = "En el momento de la identificaci&oacute;n, se requerir&aacute; la utilizaci&oacute;n de una verificaci&oacute;n de seguridad adicional mediante un c&oacute;digo de un solo uso y validez limitada en el tiempo que se enviar&aacute; al tel&eacute;fono m&oacute;vil del usuario registrado.";
 answers[22] = choices[22][2];
 units[22] = "47";
 comments[22] = "Id Pregunta: 10077. AGE A1 2015";


//  Id pregunta: 10606 Año de creación de pregunta: 2016
 questions[23]= "24)  En ITIL v3, entre las metas del Proceso de la Planificaci&oacute;n y Soporte de la Transici&oacute;n del Servicio, se incluye:";
 choices[23]= new Array();
 choices[23][0] = "Planificar y coordinar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[23][1] = "Identificar, gestionar y limitar riesgos que puedan interrumpir el servicio a partir de la fase de transici&oacute;n del servicio.";
 choices[23][2] = "Planificar, identificar y gestionar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[23][3] = "Todas las respuestas son correctas.";
 answers[23] = choices[23][1];
 units[23] = "101";
 comments[23] = "Id Pregunta: 10606. Junta de Extremadura A1 2015";


//  Id pregunta: 10349 Año de creación de pregunta: 2016
 questions[24]= "25)  El Tratado de Par&iacute;s que crea la Comunidad Europea del Carb&oacute;n y del Acero entr&oacute; en vigor:";
 choices[24]= new Array();
 choices[24][0] = "El 23 de julio de 1952.";
 choices[24][1] = "El 18 de abril de 1951.";
 choices[24][2] = "El 16 de abril de 1948.";
 choices[24][3] = "d)Ninguna de las respuestas son correctas.";
 answers[24] = choices[24][0];
 units[24] = "5";
 comments[24] = "Id Pregunta: 10349. UNION EUROPEA";


//  Id pregunta: 10074 Año de creación de pregunta: 2016
 questions[25]= "26)  Se&ntilde;ale la opci&oacute;n incorrecta respecto a SMTP:";
 choices[25]= new Array();
 choices[25][0] = "SMTP es capaz de transportar correo a trav&eacute;s de m&uacute;ltiples redes: entre nodos conectados por TCP en Internet, entre nodos conectados en una Intranet TCP/IP aislados por un cortafuegos, o entre nodos en un entorno LAN o WAN que est&eacute;n usando un protocolo de nivel de transporte distinto a TCP.";
 choices[25][1] = "Usando SMTP, un proceso puede transferir correo a otro proceso en la misma red o a otra red mediante un proceso gateway accesible en las dos redes.";
 choices[25][2] = "En SMTP un mensaje de correo puede pasar por una serie de nodos gateway intermedios en su camino desde el emisor al receptor &uacute;ltimo, sirvi&eacute;ndose de mecanismos para decidir el siguiente salto como el sistema de resoluci&oacute;n de nombres de dominio de Internet.";
 choices[25][3] = "En SMTP la transferencia de mensaje ocurre siempre en una conexi&oacute;n &uacute;nica entre el emisor SMTP y el receptor final SMTP.";
 answers[25] = choices[25][3];
 units[25] = "106";
 comments[25] = "Id Pregunta: 10074. AGE A1 2015";


//  Id pregunta: 10388 Año de creación de pregunta: 2016
 questions[26]= "27)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[26]= new Array();
 choices[26][0] = "Indirecta.";
 choices[26][1] = "Directa.";
 choices[26][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[26][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[26] = choices[26][1];
 units[26] = "14";
 comments[26] = "Id Pregunta: 10388. POLITICAS DE IGUALDAD";


//  Id pregunta: 10443 Año de creación de pregunta: 2016
 questions[27]= "28)  Respecto a las comunicaciones y notificaciones electr&oacute;nicas:";
 choices[27]= new Array();
 choices[27][0] = "El servicio SIM se utiliza para el env&iacute;o de notificaciones electr&oacute;nicas.";
 choices[27][1] = "El Servicio compartido la gesti&oacute;n de notificaciones Notific@, ser&aacute; de uso obligatorio para la AGE y sus OOPP en 2017.";
 choices[27][2] = "La plataforma Notific@, recibe desde los organismos emisores, las comunicaciones y adem&aacute;s de aportar otros valores a&ntilde;adidos, las pone a disposici&oacute;n de los destinatarios en la Carpeta Ciudadana.";
 choices[27][3] = "El servicio SIM, que se ha integrado en el Servicio compartido de gesti&oacute;n de notificaciones, proporciona a los ciudadanos y empresas un buz&oacute;n seguro.";
 answers[27] = choices[27][1];
 units[27] = "43";
 comments[27] = "Id Pregunta: 10443. SERVICIOS COMUNES";


//  Id pregunta: 10132 Año de creación de pregunta: 2016
 questions[28]= "29)  Cu&aacute;l de las siguientes leyes no est&aacute; incluida en la reforma tributaria llevada a cabo en el a&ntilde;o 2014:";
 choices[28]= new Array();
 choices[28][0] = "Ley 26/2014, del Impuesto sobre la Renta de las Personas F&iacute;sicas";
 choices[28][1] = "Ley 27/2014, del Impuesto sobre Sociedades";
 choices[28][2] = "Ley 28/2014, de Impuestos Especiales";
 choices[28][3] = "Ley 29/2014, del Impuesto de Valor A&ntilde;adido";
 answers[28] = choices[28][3];
 units[28] = "12";
 comments[28] = "Id Pregunta: 10132. Leyes modelo econ&oacute;mico";


//  Id pregunta: 10218 Año de creación de pregunta: 2016
 questions[29]= "30)  Seg&uacute;n el T&iacute;tulo III &quot;De las Cortes Generales&quot; de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras podr&aacute;n:";
 choices[29]= new Array();
 choices[29][0] = "Recibir peticiones individuales y colectivas, siempre por escrito, quedando prohibida la presentaci&oacute;n directa por manifestaciones ciudadanas.";
 choices[29][1] = "Delegar en las Comisiones Legislativas Permanentes la aprobaci&oacute;n de proyectos o proposiciones de ley relativas a cuestiones internacionales.";
 choices[29][2] = "Reunirse en sesi&oacute;n extraordinaria a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 choices[29][3] = "Nombrar conjuntamente Comisiones de Investigaci&oacute;n sobre asuntos de inter&eacute;s p&uacute;blico. Sus conclusiones ser&aacute;n vinculantes para los Tribunales.";
 answers[29] = choices[29][0];
 units[29] = "1";
 comments[29] = "Id Pregunta: 10218. CONSTITUCION1978";


//  Id pregunta: 10071 Año de creación de pregunta: 2016
 questions[30]= "31)  Seg&uacute;n el Modelo de Referencia Workflow definido por WfMC, &iquest;cu&aacute;l de las siguientes funciones corresponde al Servicio de Representaci&oacute;n del Workflow?";
 choices[30]= new Array();
 choices[30][0] = "Interpretar la descripci&oacute;n de procesos y controlar las diferentes instancias de los procesos, secuenciar las actividades, adicionar elementos a la lista de trabajo de los usuarios, e invocar las aplicaciones necesarias.";
 choices[30][1] = "Especificar el formato de intercambio com&uacute;n para soportar la transferencia de definiciones de procesos entre productos diferentes, utilizando un lenguaje de definici&oacute;n de procesos.";
 choices[30][2] = "Definir los mecanismos requeridos por los desarrolladores de productos workflow para implementar la comunicaci&oacute;n de un motor workflow con otros.";
 choices[30][3] = "Monitorizar informaci&oacute;n relevante del workflow, fundamentalmente con fines de auditor&iacute;a y estad&iacute;sticos.";
 answers[30] = choices[30][0];
 units[30] = "86";
 comments[30] = "Id Pregunta: 10071. AGE A1 2015";


//  Id pregunta: 10614 Año de creación de pregunta: 2016
 questions[31]= "32)  Dada la m&aacute;scara de red 255.255.240.0, &iquest;a qu&eacute; red pertenece la direcci&oacute;n IP 192.228.17.15?";
 choices[31]= new Array();
 choices[31][0] = "192.228.0.0";
 choices[31][1] = "192.228.8.0";
 choices[31][2] = "192.228.16.0";
 choices[31][3] = "192.228.17.0";
 answers[31] = choices[31][2];
 units[31] = "109";
 comments[31] = "Id Pregunta: 10614. Junta de Extremadura A1 2015";


//  Id pregunta: 10268 Año de creación de pregunta: 2016
 questions[32]= "33)  Las Disposiciones Adicionales en la Constituci&oacute;n Espa&ntilde;ola son:";
 choices[32]= new Array();
 choices[32][0] = "Cuatro.";
 choices[32][1] = "Una.";
 choices[32][2] = "Cinco.";
 choices[32][3] = "Nueve.";
 answers[32] = choices[32][2];
 units[32] = "1";
 comments[32] = "Id Pregunta: 10268. CONSTITUCION1978";


//  Id pregunta: 10006 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Cu&aacute;l de los siguientes procesos de M&Eacute;TRICA Versi&oacute;n 3 no est&aacute; dentro del &aacute;mbito de la norma ISO 12207 de procesos de ciclo de vida del software?";
 choices[33]= new Array();
 choices[33][0] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[33][1] = "Desarrollo de Sistemas de Informaci&oacute;n";
 choices[33][2] = "Construcci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[33][3] = "Ninguno de los anteriores, ya que los tres est&aacute;n cubiertos por la norma ISO 12207";
 answers[33] = choices[33][0];
 units[33] = "91";
 comments[33] = "Id Pregunta: 10006. AGE A1 2015";


//  Id pregunta: 10163 Año de creación de pregunta: 2016
 questions[34]= "35)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, constituye una infracci&oacute;n grave:";
 choices[34]= new Array();
 choices[34][0] = "No conservaci&oacute;n reiterada o sistem&aacute;tica de los datos a los que se refiere el art&iacute;culo 3";
 choices[34][1] = "No conservaci&oacute;n en ning&uacute;n momento de los datos a los que se refiere el art&iacute;culo 3.";
 choices[34][2] = "El incumplimiento de la llevanza del libro-registro";
 choices[34][3] = "La conservaci&oacute;n de los datos por un per&iacute;odo superior al establecido en el art&iacute;culo 5.";
 answers[34] = choices[34][0];
 units[34] = "19";
 comments[34] = "Id Pregunta: 10163. B y C: son &quot;Muy grave&quot;; D: para que fuera verdadera deber&iacute;a ser &quot;inferior&quot;";


//  Id pregunta: 10602 Año de creación de pregunta: 2016
 questions[35]= "36)  Como todo criptosistema de clave p&uacute;blica, el protocolo del criptosistema RSA:";
 choices[35]= new Array();
 choices[35][0] = "Tiene dos partes: Cifrado de Mensajes, Descifrado de Mensajes.";
 choices[35][1] = "Se basa en la dificultad que supone resolver el &lt;Problema de la Factorizaci&oacute;n Externa&gt;.";
 choices[35][2] = "Tiene tres partes: Generaci&oacute;n de claves, Cifrado de mensajes, Descifrado de mensajes.";
 choices[35][3] = "Se basa en la dificultad que supone resolver el &lt;Problema de Socrates- Arquimedes&gt;.";
 answers[35] = choices[35][2];
 units[35] = "76";
 comments[35] = "Id Pregunta: 10602. Junta de Extremadura A1 2015";


//  Id pregunta: 10405 Año de creación de pregunta: 2016
 questions[36]= "37)  Se&ntilde;ala las Directivas referidas a la Igualdad de trato de oportunidades entre hombre y mujeres:";
 choices[36]= new Array();
 choices[36][0] = "Directiva 2002/73/CE del Parlamento Europeo y del Consejo.";
 choices[36][1] = "Directiva 2004/113/CE del Consejo.";
 choices[36][2] = "Todas son correctas.";
 choices[36][3] = "Todas son falsas.";
 answers[36] = choices[36][2];
 units[36] = "14";
 comments[36] = "Id Pregunta: 10405. POLITICAS DE IGUALDAD";


//  Id pregunta: 10198 Año de creación de pregunta: 2016
 questions[37]= "38)  La Constituci&oacute;n Espa&ntilde;ola de 1978, estructura las Cortes Generales en:";
 choices[37]= new Array();
 choices[37][0] = "Dos c&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[37][1] = "Consejo de Ministros y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[37][2] = "Gobierno de la Naci&oacute;n y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[37][3] = "Dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Baja) y Senado (C&aacute;mara Alta).";
 answers[37] = choices[37][3];
 units[37] = "1";
 comments[37] = "Id Pregunta: 10198. CONSTITUCION1978";


//  Id pregunta: 10188 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Puede el Estado transferir o delegar a las Comunidades Aut&oacute;nomas facultadas que son de su titularidad?";
 choices[38]= new Array();
 choices[38][0] = "No, en ning&uacute;n caso.";
 choices[38][1] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con cualquier tipo de facultades.";
 choices[38][2] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, sin que el Estado se pueda reservar ninguna forma de control.";
 choices[38][3] = ", mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, previendo en cada caso la correspondiente transferencia de medios financieros, as&iacute; como las formas de control que se reserve el Estado.";
 answers[38] = choices[38][3];
 units[38] = "1";
 comments[38] = "Id Pregunta: 10188. CONSTITUCION1978";


//  Id pregunta: 10428 Año de creación de pregunta: 2016
 questions[39]= "40)  Cuando el periodo de vacaciones coincida con una incapacidad temporal derivada del embarazo, parto o lactancia natural, o con el permiso de maternidad, o con su ampliaci&oacute;n por lactancia, la empleada p&uacute;blica:";
 choices[39]= new Array();
 choices[39][0] = "Perder&aacute; el derecho a vacaciones.";
 choices[39][1] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, siempre que no haya terminado el a&ntilde;o natural que le corresponda.";
 choices[39][2] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, aunque haya terminado el a&ntilde;o natural que le corresponda.";
 choices[39][3] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta dependiendo de la acumulaci&oacute;n de trabajo en al AAPP.";
 answers[39] = choices[39][2];
 units[39] = "14";
 comments[39] = "Id Pregunta: 10428. POLITICAS DE IGUALDAD";


//  Id pregunta: 10612 Año de creación de pregunta: 2016
 questions[40]= "41)  Dentro del &aacute;lgebra relacional, se&ntilde;ala cu&aacute;l de los siguientes operadores es derivado:";
 choices[40]= new Array();
 choices[40][0] = "Intersecci&oacute;n.";
 choices[40][1] = "Uni&oacute;n.";
 choices[40][2] = "Restricci&oacute;n.";
 choices[40][3] = "Diferencia.";
 answers[40] = choices[40][0];
 units[40] = "60";
 comments[40] = "Id Pregunta: 10612. Junta de Extremadura A1 2015";


//  Id pregunta: 10477 Año de creación de pregunta: 2016
 questions[41]= "42)  Se&ntilde;ale, de acuerdo con la Ley General Presupuestaria, cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[41]= new Array();
 choices[41][0] = "La Ley General Presupuestaria permite realizar trasferencias de cr&eacute;dito desde el Cap&iacute;tulo 6 de los Presupuestos generales del Estado al Cap&iacute;tulo 2.";
 choices[41][1] = "Es competencia del Consejo de Ministros la autorizaci&oacute;n de generaciones de cr&eacute;dito.";
 choices[41][2] = "Los cr&eacute;ditos extraordinarios por necesidades surgidas en operaciones financieras se financian con Deuda P&uacute;blica o con baja en otros cr&eacute;ditos de la misma naturaleza.";
 choices[41][3] = "Excepcionalmente tendr&aacute;n la condici&oacute;n de ampliables los cr&eacute;ditos destinados al pago de los salarios de los empleados p&uacute;blicos.";
 answers[41] = choices[41][2];
 units[41] = "10";
 comments[41] = "Id Pregunta: 10477. PRESUPUESTOS GENERALES";


//  Id pregunta: 10372 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[42]= new Array();
 choices[42][0] = "El Parlamento y el Consejo.";
 choices[42][1] = "El Parlamento y la Comisi&oacute;n.";
 choices[42][2] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[42][3] = "La Comisi&oacute;n y el Consejo.";
 answers[42] = choices[42][2];
 units[42] = "5";
 comments[42] = "Id Pregunta: 10372. UNION EUROPEA";


//  Id pregunta: 10403 Año de creación de pregunta: 2016
 questions[43]= "44)  El plan estrat&eacute;gico de Igualdad de Oportunidades incluir&aacute;:";
 choices[43]= new Array();
 choices[43][0] = "Medidas de igualdad.";
 choices[43][1] = "Objetivos de igualdad.";
 choices[43][2] = "Ambas son correctas.";
 choices[43][3] = "A y B son incorrectas.";
 answers[43] = choices[43][2];
 units[43] = "14";
 comments[43] = "Id Pregunta: 10403. POLITICAS DE IGUALDAD";


//  Id pregunta: 10585 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Qu&eacute; &oacute;rgano es el responsable de la implantaci&oacute;n de los medios y servicios compartidos?";
 choices[44]= new Array();
 choices[44][0] = "La CETIC";
 choices[44][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[44][2] = "La DTIC";
 choices[44][3] = "Ninguno de los anteriores";
 answers[44] = choices[44][1];
 units[44] = "19";
 comments[44] = "Id Pregunta: 10585. Estrategia TIC";


//  Id pregunta: 10650 Año de creación de pregunta: 2016
 questions[45]= "46)  Indica cu&aacute;l de las siguientes caracter&iacute;sticas del protocolo IP versi&oacute;n 6 es incorrecta.";
 choices[45]= new Array();
 choices[45][0] = "El tama&ntilde;o de la direcci&oacute;n IP es de 128 bits.";
 choices[45][1] = "Aumento de la flexibilidad en el direccionamiento.";
 choices[45][2] = "Define una cabecera de extensi&oacute;n que proporciona autenticaci&oacute;n.";
 choices[45][3] = "La cabecera IP versi&oacute;n 6 obligatoria es de tama&ntilde;o variable.";
 answers[45] = choices[45][3];
 units[45] = "109";
 comments[45] = "Id Pregunta: 10650. Junta de Extremadura A1 2015";


//  Id pregunta: 10505 Año de creación de pregunta: 2016
 questions[46]= "47)  Respecto a la regla de gasto. Se&ntilde;ale la respuesta falsa:";
 choices[46]= new Array();
 choices[46][0] = "La variaci&oacute;n del gasto computable de la Administraci&oacute;n Central, de las Comunidades Aut&oacute;nomas y de las Corporaciones Locales, no podr&aacute; superar la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola.";
 choices[46][1] = "No obstante, cuando exista un desequilibrio estructural en las cuentas p&uacute;blicas o una deuda p&uacute;blica superior al objetivo establecido, el crecimiento del gasto p&uacute;blico computable se ajustar&aacute; a la senda establecida en los respectivos planes econ&oacute;mico-financieros y de reequilibrio previstos.";
 choices[46][2] = "Corresponde al Ministerio de Econom&iacute;a y Competitividad calcular la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola, de acuerdo con la metodolog&iacute;a utilizada por la Comisi&oacute;n Europea en aplicaci&oacute;n de su normativa.";
 choices[46][3] = "Esta tasa se publicar&aacute; en el informe de situaci&oacute;n de la econom&iacute;a. Ser&aacute; la referencia a tener en cuenta por la Administraci&oacute;n Central en la elaboraci&oacute;n de sus Presupuestos.";
 answers[46] = choices[46][3];
 units[46] = "10";
 comments[46] = "Id Pregunta: 10505. PRESUPUESTOS GENERALES";


//  Id pregunta: 10681 Año de creación de pregunta: 2016
 questions[47]= "48)  El Factor de Sostenibilidad, de acuerdo a la Ley 23/2013, de 23 de diciembre, reguladora del Factor de Sostenibilidad y del &Iacute;ndice de Revalorizaci&oacute;n del Sistema de Pensiones de la Seguridad Social:";
 choices[47]= new Array();
 choices[47][0] = "Es un valor que se calcula para cada periodo de 3 a&ntilde;os, comenzando en el a&ntilde;o 2016.";
 choices[47][1] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la evoluci&oacute;n del PIB y otros datos macroecon&oacute;micos.";
 choices[47][2] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la esperanza de vida de los pensionistas.";
 choices[47][3] = "Se aplicar&aacute; para determinar la cuant&iacute;a de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a partir del 1 de Enero del a&ntilde;o 2018.";
 answers[47] = choices[47][2];
 units[47] = "14";
 comments[47] = "Id Pregunta: 10681. Pensiones";


//  Id pregunta: 10203 Año de creación de pregunta: 2016
 questions[48]= "49)  Se&ntilde;ale la afirmaci&oacute;n correcta. La tramitaci&oacute;n de las proposiciones de ley se regular&aacute; por:";
 choices[48]= new Array();
 choices[48][0] = "Ley Org&aacute;nica.";
 choices[48][1] = "Lo dispuesto en la normativa comunitaria.";
 choices[48][2] = "Los Reglamentos de las C&aacute;maras.";
 choices[48][3] = "El Reglamento del Congreso de los Diputados, exclusivamente.";
 answers[48] = choices[48][2];
 units[48] = "1";
 comments[48] = "Id Pregunta: 10203. CONSTITUCION1978";


//  Id pregunta: 10615 Año de creación de pregunta: 2016
 questions[49]= "50)  El establecimiento de una conexi&oacute;n mediante el protocolo TCP, b&aacute;sicamente se realiza de la siguiente manera:";
 choices[49]= new Array();
 choices[49][0] = "Emisor: env&iacute;a SYN. Receptor: env&iacute;a SYN+ACK. Emisor: env&iacute;a ACK.";
 choices[49][1] = "Emisor: env&iacute;a ACK. Receptor: env&iacute;a ACK+SYN. Emisor: env&iacute;a SYN.";
 choices[49][2] = "Emisor: env&iacute;a SYN. Receptor: env&iacute;a ACK.";
 choices[49][3] = "Emisor: env&iacute;a ACK. Receptor: env&iacute;a SYN.";
 answers[49] = choices[49][0];
 units[49] = "109";
 comments[49] = "Id Pregunta: 10615. Junta de Extremadura A1 2015";


//  Id pregunta: 10359 Año de creación de pregunta: 2016
 questions[50]= "51)  Los Reglamentos no se caracterizan por:";
 choices[50]= new Array();
 choices[50][0] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 choices[50][1] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[50][2] = "Ser obligatorios.";
 choices[50][3] = "No poseer alcance general.";
 answers[50] = choices[50][3];
 units[50] = "5";
 comments[50] = "Id Pregunta: 10359. UNION EUROPEA";


//  Id pregunta: 10394 Año de creación de pregunta: 2016
 questions[51]= "52)  La situaci&oacute;n en que una disposici&oacute;n, criterio o pr&aacute;ctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, se denomina:";
 choices[51]= new Array();
 choices[51][0] = "Discriminaci&oacute;n indirecta.";
 choices[51][1] = "Discriminaci&oacute;n directa.";
 choices[51][2] = "Discriminaci&oacute;n por raz&oacute;n de sexo.";
 choices[51][3] = "Discriminaci&oacute;n abusiva.";
 answers[51] = choices[51][0];
 units[51] = "14";
 comments[51] = "Id Pregunta: 10394. POLITICAS DE IGUALDAD";


//  Id pregunta: 10079 Año de creación de pregunta: 2016
 questions[52]= "53)  La Ley 25/2013, de 27 de diciembre, de impulso de la factura electr&oacute;nica y creaci&oacute;n del Registro Contable de Facturas en el Sector P&uacute;blico, prev&eacute; que anualmente se realice una auditor&iacute;a de sistemas para verificar que los correspondientes registros contables de facturas cumplen con las condiciones de funcionamiento previstas en la normativa aplicable. En el &aacute;mbito de la Administraci&oacute;n General del Estado dicha auditor&iacute;a se realizar&aacute; por:";
 choices[52]= new Array();
 choices[52][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[52][1] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado";
 choices[52][2] = "Las Inspecciones Generales de los Servicios";
 choices[52][3] = "La Agencia Estatal de la Administraci&oacute;n Tributaria";
 answers[52] = choices[52][1];
 units[52] = "75";
 comments[52] = "Id Pregunta: 10079. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 10402 Año de creación de pregunta: 2016
 questions[53]= "54)  El principio de igualdad de trato y oportunidades entre mujeres y hombres tiene car&aacute;cter:";
 choices[53]= new Array();
 choices[53][0] = "Parcial.";
 choices[53][1] = "Sectorial.";
 choices[53][2] = "Tranversal.";
 choices[53][3] = "Vertical.";
 answers[53] = choices[53][2];
 units[53] = "14";
 comments[53] = "Id Pregunta: 10402. POLITICAS DE IGUALDAD";


//  Id pregunta: 10674 Año de creación de pregunta: 2016
 questions[54]= "55)  En referencia a la implantaci&oacute;n de la interoperabilidad de la receta electr&oacute;nica:";
 choices[54]= new Array();
 choices[54][0] = "Permite los ciudadanos retiren sus medicamentos en las farmacias de fuera de la Comunidad Aut&oacute;noma en la que hayan sido recetados.";
 choices[54][1] = "Favorece la seguridad del paciente, al incorporar sistemas online de ayuda a la prescripci&oacute;n, que ayudan a la detecci&oacute;n de interaciones medicamentosas o duplicidades terap&eacute;uticas.";
 choices[54][2] = "Facilita al m&eacute;dico el seguimiento de la adherencia al tratamiento por parte del paciente.";
 choices[54][3] = "Todas las anteriores son correctas.";
 answers[54] = choices[54][3];
 units[54] = "47";
 comments[54] = "Id Pregunta: 10674. Receta electr&oacute;nica";


//  Id pregunta: 10037 Año de creación de pregunta: 2016
 questions[55]= "56)  Seg&uacute;n el proyecto GNU, &iquest;cu&aacute;l de las siguientes NO puede ser considerada una libertad esencial del software libre?";
 choices[55]= new Array();
 choices[55][0] = "La libertad de ejecutar el programa como se desee, con cualquier prop&oacute;sito.";
 choices[55][1] = "La libertad de estudiar c&oacute;mo funciona el programa, y modificarlo para que tenga la funcionalidad deseada.";
 choices[55][2] = "La libertad de redistribuir copias para ayudar al pr&oacute;jimo.";
 choices[55][3] = "La libertad de distribuir a terceros versiones modificadas siempre que no tengan uso comercial.";
 answers[55] = choices[55][3];
 units[55] = "66";
 comments[55] = "Id Pregunta: 10037. AGE A1 2015";


//  Id pregunta: 10249 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[56]= new Array();
 choices[56][0] = "Art&iacute;culo 16.2.";
 choices[56][1] = "Art&iacute;culo 17.1.";
 choices[56][2] = "Art&iacute;culo 18.1.";
 choices[56][3] = "Art&iacute;culo 18.2.";
 answers[56] = choices[56][0];
 units[56] = "1";
 comments[56] = "Id Pregunta: 10249. CONSTITUCION1978";


//  Id pregunta: 10367 Año de creación de pregunta: 2016
 questions[57]= "58)  Es una funci&oacute;n del Presidente del Parlamento Europeo:";
 choices[57]= new Array();
 choices[57][0] = "Presentar la moci&oacute;n de censura.";
 choices[57][1] = "Presidir las sesiones del Parlamento.";
 choices[57][2] = "Organizar la Secretar&iacute;a General.";
 choices[57][3] = "Preparar las actividades de las Comisiones.";
 answers[57] = choices[57][1];
 units[57] = "5";
 comments[57] = "Id Pregunta: 10367. UNION EUROPEA";


//  Id pregunta: 10513 Año de creación de pregunta: 2016
 questions[58]= "59)  La presente Ley se aplica al sector p&uacute;blico, que comprende (se&ntilde;ala la incorrecta):";
 choices[58]= new Array();
 choices[58][0] = "la Administraci&oacute;n General del Estado y las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[58][1] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[58][2] = "el sector p&uacute;blico institucional";
 choices[58][3] = "el sector privado corporativo";
 answers[58] = choices[58][3];
 units[58] = "7";
 comments[58] = "Id Pregunta: 10513. LEY 39/2015";


//  Id pregunta: 10258 Año de creación de pregunta: 2016
 questions[59]= "60)  El Art&iacute;culo 137 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Estado se organiza territorialmente en:";
 choices[59]= new Array();
 choices[59][0] = "Municipios, provincias y CCAA.";
 choices[59][1] = "En 17 CCAA m&aacute;s Ceuta y Melilla.";
 choices[59][2] = "En CCAA, 50 provincias y municipios.";
 choices[59][3] = "En municipios, en provincias, entidades locales menores y CCAA.";
 answers[59] = choices[59][2];
 units[59] = "1";
 comments[59] = "Id Pregunta: 10258. CONSTITUCION1978";


//  Id pregunta: 10368 Año de creación de pregunta: 2016
 questions[60]= "61)  Los Reglamentos comunitarios equivalen a lo que en un ordenamiento interno es:";
 choices[60]= new Array();
 choices[60][0] = "Un Reglamento.";
 choices[60][1] = "Un Decreto.";
 choices[60][2] = "Una Ley.";
 choices[60][3] = "Un Real-Decreto.";
 answers[60] = choices[60][2];
 units[60] = "5";
 comments[60] = "Id Pregunta: 10368. UNION EUROPEA";


//  Id pregunta: 10256 Año de creación de pregunta: 2016
 questions[61]= "62)  El Art&iacute;culo 21 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que:";
 choices[61]= new Array();
 choices[61][0] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y con armas.";
 choices[61][1] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica siempre dentro del derecho de manifestaci&oacute;n previa autorizaci&oacute;n.";
 choices[61][2] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y sin armas.";
 choices[61][3] = "No se reconoce expl&iacute;citamente tal derecho de reuni&oacute;n.";
 answers[61] = choices[61][0];
 units[61] = "1";
 comments[61] = "Id Pregunta: 10256. CONSTITUCION1978";


//  Id pregunta: 10257 Año de creación de pregunta: 2016
 questions[62]= "63)  El Art&iacute;culo 98 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Gobierno Espa&ntilde;ol se compone de:";
 choices[62]= new Array();
 choices[62][0] = "El Presidente y su gabinete.";
 choices[62][1] = "El Presidente y sus Ministros.";
 choices[62][2] = "El Rey y el Presidente.";
 choices[62][3] = "El Presidente, de los Vicepresidentes en su caso, de los Ministros y dem&aacute;s miembros que establezca la ley.";
 answers[62] = choices[62][2];
 units[62] = "1";
 comments[62] = "Id Pregunta: 10257. CONSTITUCION1978";


//  Id pregunta: 10459 Año de creación de pregunta: 2016
 questions[63]= "64)  Seg&uacute;n el art&iacute;culo 41 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, las operaciones financieras que se distinguen son:";
 choices[63]= new Array();
 choices[63][0] = "Enajenaci&oacute;n de inversiones reales y transferencias de capital.";
 choices[63][1] = "Pasivos financieros y transferencias de capital.";
 choices[63][2] = "Activos financieros y pasivos financieros.";
 choices[63][3] = "Activos financieros y enajenaci&oacute;n de inversiones reales.";
 answers[63] = choices[63][2];
 units[63] = "10";
 comments[63] = "Id Pregunta: 10459. PRESUPUESTOS GENERALES";


//  Id pregunta: 10063 Año de creación de pregunta: 2016
 questions[64]= "65)  El modelo de servicio en la nube en el que el consumidor no tiene control sobre la red, los servidores, sistemas operativos o almacenamiento, pero s&iacute; sobre las aplicaciones desplegadas y sobre los ajustes de configuraci&oacute;n de dichas aplicaciones, se denomina:";
 choices[64]= new Array();
 choices[64][0] = "Infrastructure as a Service (IaaS)";
 choices[64][1] = "Platform as a Service (PaaS)";
 choices[64][2] = "Software as a Service (SaaS)";
 choices[64][3] = "Application as a Service (AaaS)";
 answers[64] = choices[64][1];
 units[64] = "52";
 comments[64] = "Id Pregunta: 10063. AGE A1 2015";


//  Id pregunta: 10324 Año de creación de pregunta: 2016
 questions[65]= "66)  El Presidente del Tribunal de Justicia de la Uni&oacute;n Europea es nombrado para un per&iacute;odo de:";
 choices[65]= new Array();
 choices[65][0] = "Tres a&ntilde;os.";
 choices[65][1] = "Cuatro a&ntilde;os.";
 choices[65][2] = "Cinco a&ntilde;os.";
 choices[65][3] = "Seis a&ntilde;os.";
 answers[65] = choices[65][0];
 units[65] = "5";
 comments[65] = "Id Pregunta: 10324. UNION EUROPEA";


//  Id pregunta: 10407 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Qu&eacute; art&iacute;culo de la CE, consagra la obligaci&oacute;n de los poderes p&uacute;blicos para promover las condiciones para la igualdad del individuo:";
 choices[66]= new Array();
 choices[66][0] = "Art&iacute;culo 14 CE.";
 choices[66][1] = "Art&iacute;culo 9.2 CE.";
 choices[66][2] = "Art&iacute;culo 9.1 CE.";
 choices[66][3] = "Art&iacute;culo 13 CE.";
 answers[66] = choices[66][2];
 units[66] = "14";
 comments[66] = "Id Pregunta: 10407. POLITICAS DE IGUALDAD";


//  Id pregunta: 10199 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Cu&aacute;l es la composici&oacute;n del Pleno del Tribunal de Cuentas?";
 choices[67]= new Array();
 choices[67][0] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, uno de los cuales ser&aacute; el Presidente y el Fiscal.";
 choices[67][1] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas, m&aacute;s el Presidente.";
 choices[67][2] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas.";
 choices[67][3] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, m&aacute;s el Presidente.";
 answers[67] = choices[67][0];
 units[67] = "1";
 comments[67] = "Id Pregunta: 10199. CONSTITUCION1978";


//  Id pregunta: 10456 Año de creación de pregunta: 2016
 questions[68]= "69)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los escenarios presupuestarios plurianuales contendr&aacute;n la distribuci&oacute;n org&aacute;nica de los recursos disponibles y se desarrollar&aacute;n en programas plurianuales, referidos a:";
 choices[68]= new Array();
 choices[68][0] = "a) Los cuatro ejercicios siguientes.";
 choices[68][1] = "b) El ejercicio siguiente.";
 choices[68][2] = "c) Los dos ejercicios siguientes.";
 choices[68][3] = "d) Los tres ejercicios siguientes.";
 answers[68] = choices[68][3];
 units[68] = "10";
 comments[68] = "Id Pregunta: 10456. PRESUPUESTOS GENERALES";


//  Id pregunta: 10667 Año de creación de pregunta: 2016
 questions[69]= "70)  Se&ntilde;ale la opci&oacute;n falsa respecto a la instrucci&oacute;n del procedimiento definida en la Ley 39/2015:";
 choices[69]= new Array();
 choices[69][0] = "Los interesados podr&aacute;n, en cualquier momento del procedimiento anterior al tr&aacute;mite de audiencia, aducir alegaciones y aportar documentos u otros elementos de juicio.";
 choices[69][1] = "El instructor del procedimiento s&oacute;lo podr&aacute; rechazar las pruebas propuestas por los interesados cuando sean manifiestamente improcedentes o innecesarias, mediante resoluci&oacute;n motivada.";
 choices[69][2] = "Salvo disposici&oacute;n expresa en contrario, los informes ser&aacute;n preceptivos y vinculantes.";
 choices[69][3] = "Se podr&aacute; prescindir del tr&aacute;mite de audiencia cuando no figuren en el procedimiento ni sean tenidos en cuenta en la resoluci&oacute;n otros hechos ni otras alegaciones y pruebas que las aducidas por el interesado.";
 answers[69] = choices[69][2];
 units[69] = "7";
 comments[69] = "Id Pregunta: 10667. Cap&iacute;tulo IV, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 10461 Año de creación de pregunta: 2016
 questions[70]= "71)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, a qui&eacute;n le corresponde aprobar y comprometer los gastos propios de los servicios a su cargo:";
 choices[70]= new Array();
 choices[70][0] = "A los ministros.";
 choices[70][1] = "Las respuestas a) y b) son correctas.";
 choices[70][2] = "Las respuestas a) y b) no son correctas.";
 choices[70][3] = "A los titulares de los &oacute;rganos del Estado.";
 answers[70] = choices[70][1];
 units[70] = "10";
 comments[70] = "Id Pregunta: 10461. PRESUPUESTOS GENERALES";


//  Id pregunta: 10645 Año de creación de pregunta: 2016
 questions[71]= "72)  Seg&uacute;n la ley de igualdad entre mujeres y hombres y contra la violencia de g&eacute;nero en Extremadura: &iquest;qu&eacute; &oacute;rgano tiene como fin esencial promover las condiciones para que la igualdad entre los sexos sea real y efectiva dentro del &aacute;mbito de competencias de la Junta de Extremadura?";
 choices[71]= new Array();
 choices[71][0] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sociales.";
 choices[71][1] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sanitarias.";
 choices[71][2] = "El Organismo P&uacute;blico de la Mujer.";
 choices[71][3] = "El Instituto de la Mujer de Extremadura.";
 answers[71] = choices[71][3];
 units[71] = "14";
 comments[71] = "Id Pregunta: 10645. Junta de Extremadura A1 2015";


//  Id pregunta: 10390 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre hombres y mujeres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[72]= new Array();
 choices[72][0] = "El Consejo Nacional de la Mujer.";
 choices[72][1] = "El Consejo de la Mujer.";
 choices[72][2] = "El Instituto de la Mujer.";
 choices[72][3] = "El Consejo de Participaci&oacute;n de la Mujer.";
 answers[72] = choices[72][3];
 units[72] = "14";
 comments[72] = "Id Pregunta: 10390. POLITICAS DE IGUALDAD";


//  Id pregunta: 10321 Año de creación de pregunta: 2016
 questions[73]= "74)  Indique el n&uacute;mero de Diputados del Parlamento Europeo que actualmente le corresponden a Espa&ntilde;a:";
 choices[73]= new Array();
 choices[73][0] = "Cincuenta y cuatro.";
 choices[73][1] = "Cincuenta.";
 choices[73][2] = "Cincuenta y cinco.";
 choices[73][3] = "Cincuenta y dos.";
 answers[73] = choices[73][1];
 units[73] = "5";
 comments[73] = "Id Pregunta: 10321. UNION EUROPEA";


//  Id pregunta: 10678 Año de creación de pregunta: 2016
 questions[74]= "75)  De acuerdo a la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia, se define dependencia como:";
 choices[74]= new Array();
 choices[74][0] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[74][1] = "El estado de car&aacute;cter permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[74][2] = "El estado de car&aacute;cter temporal en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[74][3] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad, la discapacidad o la baja laboral, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 answers[74] = choices[74][1];
 units[74] = "14";
 comments[74] = "Id Pregunta: 10678. Dependencia";


