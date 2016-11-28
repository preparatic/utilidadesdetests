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

//  Id pregunta: 696 Año de creación de pregunta: 2016
 questions[0]= "1)  De las siguientes cu&aacute;l NO es una ventaja de la integraci&oacute;n continua:";
 choices[0]= new Array();
 choices[0][0] = "Ejecuci&oacute;n inmediata de las pruebas de aceptaci&oacute;n.";
 choices[0][1] = "Monitorizaci&oacute;n continua de las m&eacute;tricas de calidad del proyecto.";
 choices[0][2] = "Los desarrolladores pueden detectar y solucionar problemas de integraci&oacute;n de forma continua, evitando el caos de &uacute;ltima hora cuando se acercan las fechas de entrega.";
 choices[0][3] = "Disponibilidad constante de una versi&oacute;n para pruebas, demos o lanzamientos anticipados.";
 answers[0] = choices[0][0];
 units[0] = "92";
 comments[0] = "Id Pregunta: 696. INTEGRACION CONTINUA";


//  Id pregunta: 805 Año de creación de pregunta: 2016
 questions[1]= "2)  Los Secretarios generales t&eacute;cnicos tienen a todos los efectos la categor&iacute;a de:";
 choices[1]= new Array();
 choices[1][0] = "Director General";
 choices[1][1] = "Secretario general";
 choices[1][2] = "Subdirector general";
 choices[1][3] = "Subsecretario";
 answers[1] = choices[1][0];
 units[1] = "4, 7, 8, 9";
 comments[1] = "Id Pregunta: 805. Ley 40/2015";


//  Id pregunta: 787 Año de creación de pregunta: 2016
 questions[2]= "3)  La Administraci&oacute;n General del Estado comprende (se&ntilde;ala la incorrecta):";
 choices[2]= new Array();
 choices[2][0] = "la Organizaci&oacute;n Central, que integra los Ministerios y los servicios comunes";
 choices[2][1] = "la Organizaci&oacute;n Territorial";
 choices[2][2] = "la Organizaci&oacute;n sectorial";
 choices[2][3] = "la Administraci&oacute;n General del Estado en el exterior";
 answers[2] = choices[2][2];
 units[2] = "4, 7, 8, 9";
 comments[2] = "Id Pregunta: 787. Ley 40/2015";


//  Id pregunta: 82 Año de creación de pregunta: 2016
 questions[3]= "4)  La titularidad de los derechos de explotaci&oacute;n de un programa de ordenador por una persona jur&iacute;dica expirar&aacute;:";
 choices[3]= new Array();
 choices[3][0] = "A los setenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[3][1] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita, o al de su creaci&oacute;n si no se hubiera divulgado.";
 choices[3][2] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[3][3] = "A los setenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita o al de su creaci&oacute;n si no se hubiera divulgado.";
 answers[3] = choices[3][3];
 units[3] = "41";
 comments[3] = "Id Pregunta: 82. AGE A1 2015";


//  Id pregunta: 503 Año de creación de pregunta: 2016
 questions[4]= "5)  De acuerdo con el art&iacute;culo 64 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, qui&eacute;n elaborar&aacute; un presupuesto de explotaci&oacute;n que detallara los recursos y dotaciones anuales correspondientes:";
 choices[4]= new Array();
 choices[4][0] = "Las sociedades mercantiles estatales.";
 choices[4][1] = "Las entidades p&uacute;blicas empresariales.";
 choices[4][2] = "Las respuestas a) y b) son correctas.";
 choices[4][3] = "Las respuestas a) y b) no son correctas.";
 answers[4] = choices[4][2];
 units[4] = "10";
 comments[4] = "Id Pregunta: 503. PRESUPUESTOS GENERALES";


//  Id pregunta: 261 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Qui&eacute;n representa al Consejo General del Poder Judicial?";
 choices[5]= new Array();
 choices[5][0] = "La Comisi&oacute;n Permanente.";
 choices[5][1] = "El Presidente.";
 choices[5][2] = "El Pleno.";
 choices[5][3] = "El Vicepresidente.";
 answers[5] = choices[5][3];
 units[5] = "1";
 comments[5] = "Id Pregunta: 261. CONSTITUCION1978";


//  Id pregunta: 138 Año de creación de pregunta: 2016
 questions[6]= "7)  La ley que obliga a todas las Administraciones a presentar equilibrio estructural en sus cuentas p&uacute;blicas y establece un l&iacute;mite de deuda como garant&iacute;a de sostenibilidad presupuestaria, es:";
 choices[6]= new Array();
 choices[6][0] = "La Ley Org&aacute;nica 2/2011";
 choices[6][1] = "La Ley Org&aacute;nica 2/2012";
 choices[6][2] = "La Ley Org&aacute;nica 3/2012";
 choices[6][3] = "La Ley Org&aacute;nica 2/2002";
 answers[6] = choices[6][1];
 units[6] = "12";
 comments[6] = "Id Pregunta: 138. Leyes modelo econ&oacute;mico";


//  Id pregunta: 586 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Con qu&eacute; frecuencia se revisa la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE, para su alineamiento con las pol&iacute;ticas p&uacute;blicas del gobierno?";
 choices[7]= new Array();
 choices[7][0] = "Bienalmente";
 choices[7][1] = "Anualmente";
 choices[7][2] = "Semestralmente";
 choices[7][3] = "Cada cuatro a&ntilde;os";
 answers[7] = choices[7][1];
 units[7] = "19";
 comments[7] = "Id Pregunta: 586. Estrategia TIC";


//  Id pregunta: 151 Año de creación de pregunta: 2016
 questions[8]= "9)  Seg&uacute;n la ley 39/2015, est&aacute;n obligados a relacionarse a trav&eacute;s de medios electr&oacute;nicos con las Administraciones P&uacute;blicas para la realizaci&oacute;n de cualquier tr&aacute;mite de un procedimiento administrativo: (se&ntilde;ala la respuesta incorrecta)";
 choices[8]= new Array();
 choices[8][0] = "las personas jur&iacute;dicas ";
 choices[8][1] = "las entidades con personalidad jur&iacute;dica";
 choices[8][2] = "los empleados de las Administraciones P&uacute;blicas para los tr&aacute;mites y actuaciones que realicen con ellas por raz&oacute;n de su condici&oacute;n de empleado p&uacute;blico";
 choices[8][3] = "quienes representen a un interesado que est&eacute; obligado legalmente a relacionarse electr&oacute;nicamente con la Administraci&oacute;n";
 answers[8] = choices[8][1];
 units[8] = "7";
 comments[8] = "Id Pregunta: 151. Ley 39/2015, Art&iacute;culo 14";


//  Id pregunta: 358 Año de creación de pregunta: 2016
 questions[9]= "10)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones no es correcta:";
 choices[9]= new Array();
 choices[9][0] = "a)La Uni&oacute;n Europea no es a&uacute;n una estructura acabada, sino m&aacute;s bien un sistema de gestaci&oacute;n cuya apariencia definitiva a&uacute;n no puede preverse.";
 choices[9][1] = "b) La Uni&oacute;n Europea no es un proceso de integraci&oacute;n sino una Organizaci&oacute;n Internacional sui generis.";
 choices[9][2] = "c) Todas las respuestas son correctas.";
 choices[9][3] = "d)La Uni&oacute;n Europea s&oacute;lo tiene en com&uacute;n con las organizaciones tradicionales de derecho internacional que tambi&eacute;n han sido creadas mediante un tratado internacional.";
 answers[9] = choices[9][1];
 units[9] = "5";
 comments[9] = "Id Pregunta: 358. UNION EUROPEA";


//  Id pregunta: 297 Año de creación de pregunta: 2016
 questions[10]= "11)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n a la Presidencia del Consejo:";
 choices[10]= new Array();
 choices[10][0] = "Es rotatoria y tiene una duraci&oacute;n de un a&ntilde;o.";
 choices[10][1] = "Es rotatoria y tiene una duraci&oacute;n de seis meses.";
 choices[10][2] = "Se nombra por el Parlamento para un per&iacute;odo de cinco a&ntilde;os.";
 choices[10][3] = "La ostenta el presidente de la Comisi&oacute;n.";
 answers[10] = choices[10][1];
 units[10] = "5";
 comments[10] = "Id Pregunta: 297. UNION EUROPEA";


//  Id pregunta: 160 Año de creación de pregunta: 2016
 questions[11]= "12)  El mercado &uacute;nico digital se basa en tres pilares. Se&ntilde;ale cu&aacute;l NO es uno de los tres pilares.";
 choices[11]= new Array();
 choices[11][0] = "Mejorar el acceso de consumidores y empresas a los bienes y servicios digitales en toda Europa.";
 choices[11][1] = "Promover la actualizaci&oacute;n de las normas de accesibilidad hacia WCAG 3.0 por una sociedad m&aacute;s incluyente.";
 choices[11][2] = "Creaci&oacute;n de las condiciones adecuadas y la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan florecer";
 choices[11][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[11] = choices[11][1];
 units[11] = "19";
 comments[11] = "Id Pregunta: 160. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Mayo/Noticia-2015-05-07-estrategia-mercado-unico-digital-europeo.html#.WCjr0mrhDIU";


//  Id pregunta: 544 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Cu&aacute;l es el &oacute;rgano de la Comisi&oacute;n Europea encargado de la gobernanza TIC cuya misi&oacute;n es garantizar que la Comisi&oacute;n haga un uso eficaz de las tecnolog&iacute;as de la informaci&oacute;n y la comunicaci&oacute;n para el logro de sus objetivos organizativos y pol&iacute;ticos?";
 choices[12]= new Array();
 choices[12][0] = "La Direcci&oacute;n General de Inform&aacute;tica (DIGIT)";
 choices[12][1] = "Oficina del Organismo de Reguladores Europeos de las Comunicaciones Electr&oacute;nicas (ORECE)";
 choices[12][2] = "Agencia de Seguridad de las Redes y de la Informaci&oacute;n de la Uni&oacute;n Europea (ENISA)";
 choices[12][3] = "Instituto Europeo de Innovaci&oacute;n y Tecnolog&iacute;a (EIT)";
 answers[12] = choices[12][0];
 units[12] = "26";
 comments[12] = "Id Pregunta: 544. Gobernanza TIC";


//  Id pregunta: 310 Año de creación de pregunta: 2016
 questions[13]= "14)  Los actos legislativos de la Uni&oacute;n Europea, podr&aacute;n adoptarse &uacute;nicamente a propuesta de:";
 choices[13]= new Array();
 choices[13][0] = "La Comisi&oacute;n Europea.";
 choices[13][1] = "El Consejo Europeo.";
 choices[13][2] = "El Consejo de Europa.";
 choices[13][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[13] = choices[13][0];
 units[13] = "5";
 comments[13] = "Id Pregunta: 310. UNION EUROPEA";


//  Id pregunta: 379 Año de creación de pregunta: 2016
 questions[14]= "15)  Seg&uacute;n recoge la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, &iquest;con qu&eacute; frecuencia debe elaborar el Gobierno un informe sobre el conjunto de actuaciones en relaci&oacute;n con le efectividad del principio de igualdad entre mujeres y hombres?";
 choices[14]= new Array();
 choices[14][0] = "Anual.";
 choices[14][1] = "Semestral.";
 choices[14][2] = "Seg&uacute;n se determine reglamentariamente.";
 choices[14][3] = "Bienal.";
 answers[14] = choices[14][2];
 units[14] = "14";
 comments[14] = "Id Pregunta: 379. POLITICAS DE IGUALDAD";


//  Id pregunta: 53 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Cu&aacute;l de los siguientes objetivos est&aacute; fuera del alcance de una reuni&oacute;n diaria de SCRUM (daily scrum)?";
 choices[15]= new Array();
 choices[15][0] = "Exponer las tareas no planificadas que tambi&eacute;n est&aacute;n haciendo los miembros del equipo.";
 choices[15][1] = "Resolver detalladamente los problemas que puedan tener los miembros del equipo.";
 choices[15][2] = "Poner de manifiesto el ritmo de trabajo de cada miembro del equipo.";
 choices[15][3] = "Identificar las tareas que puedan afectar a otros miembros del equipo.";
 answers[15] = choices[15][1];
 units[15] = "84";
 comments[15] = "Id Pregunta: 53. AGE A1 2015";


//  Id pregunta: 371 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;En qu&eacute; a&ntilde;o se adhiri&oacute; Espa&ntilde;a a la Comunidad Europea?:";
 choices[16]= new Array();
 choices[16][0] = "En 1988.";
 choices[16][1] = "En 1981.";
 choices[16][2] = "En 1982.";
 choices[16][3] = "En 1986.";
 answers[16] = choices[16][3];
 units[16] = "5";
 comments[16] = "Id Pregunta: 371. UNION EUROPEA";


//  Id pregunta: 107 Año de creación de pregunta: 2016
 questions[17]= "18)  Son bases de datos NoSQL orientadas a objetos:";
 choices[17]= new Array();
 choices[17][0] = "GemStone";
 choices[17][1] = "Zope Object DB";
 choices[17][2] = "Las dos anteriores";
 choices[17][3] = "Solo B)";
 answers[17] = choices[17][2];
 units[17] = "73";
 comments[17] = "Id Pregunta: 107. ";


//  Id pregunta: 199 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Cu&aacute;l es la composici&oacute;n del Pleno del Tribunal de Cuentas?";
 choices[18]= new Array();
 choices[18][0] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, uno de los cuales ser&aacute; el Presidente y el Fiscal.";
 choices[18][1] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas, m&aacute;s el Presidente.";
 choices[18][2] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas.";
 choices[18][3] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, m&aacute;s el Presidente.";
 answers[18] = choices[18][0];
 units[18] = "1";
 comments[18] = "Id Pregunta: 199. CONSTITUCION1978";


//  Id pregunta: 301 Año de creación de pregunta: 2016
 questions[19]= "20)  El Presidente del Tribunal de Cuentas es elegido por:";
 choices[19]= new Array();
 choices[19][0] = "Los propios miembros del Tribunal.";
 choices[19][1] = "El Consejo de Europa.";
 choices[19][2] = "El Consejo Europeo.";
 choices[19][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[19] = choices[19][0];
 units[19] = "5";
 comments[19] = "Id Pregunta: 301. UNION EUROPEA";


//  Id pregunta: 380 Año de creación de pregunta: 2016
 questions[20]= "21)  La acreditaci&oacute;n de las situaciones de violencia de g&eacute;nero ejercida sobre las trabajadoras, seg&uacute;n indica la Ley Org&aacute;nica 1/2004 de Medidas de Protecci&oacute;n Integral contra la violencia de g&eacute;nero, se produce mediante:";
 choices[20]= new Array();
 choices[20][0] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima.";
 choices[20][1] = "La correspondiente denuncia presentada en Comisar&iacute;a o Juzgado.";
 choices[20][2] = "La orden de alejamiento a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal que indique la existencia de indicios de violencia de g&eacute;nero.";
 choices[20][3] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal en el que se indique la existencia de indicios de violencia de g&eacute;nero, hasta que se dicte la orden de protecci&oacute;n.";
 answers[20] = choices[20][3];
 units[20] = "14";
 comments[20] = "Id Pregunta: 380. POLITICAS DE IGUALDAD";


//  Id pregunta: 648 Año de creación de pregunta: 2016
 questions[21]= "22)  En Itil v3 se diferencia entre la Gesti&oacute;n de la Cartera de Servicios y la Gesti&oacute;n del Cat&aacute;logo de Servicios ya que:";
 choices[21]= new Array();
 choices[21][0] = "La Cartera de Servicios contiene informaci&oacute;n sobre cada servicio y su estado.";
 choices[21][1] = "La Cartera de Servicios es un subconjunto del Cat&aacute;logo de Servicios.";
 choices[21][2] = "La Cartera de Servicios divide los servicios en componentes y contiene pol&iacute;ticas, directrices y responsabilidades , as&iacute; como precios, acuerdos de nivel de servicio y condiciones de entrega.";
 choices[21][3] = "Todas las respuestas son correctas.";
 answers[21] = choices[21][0];
 units[21] = "101";
 comments[21] = "Id Pregunta: 648. Junta de Extremadura A1 2015";


//  Id pregunta: 629 Año de creación de pregunta: 2016
 questions[22]= "23)  Seg&uacute;n el Real Decreto 3/2010 sobre el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; organismo es el encargado de actuar ante cualquier agresi&oacute;n recibida en los sistemas de informaci&oacute;n de las Administraciones P&uacute;blicas?";
 choices[22]= new Array();
 choices[22][0] = "El CCN-CERT (Centro Criptol&oacute;gico Nacional&ndash;Computer Emergency Reaction Team).";
 choices[22][1] = "El GDT (Grupo de Delitos Telem&aacute;ticos).";
 choices[22][2] = "La BIT (Brigada de Investigaci&oacute;n Tecnol&oacute;gica).";
 choices[22][3] = "El CCN-STIC (Centro Criptol&oacute;gico Nacional-Seguridad de las Tecnolog&iacute;as de Informaci&oacute;n y Comunicaciones).";
 answers[22] = choices[22][0];
 units[22] = "46";
 comments[22] = "Id Pregunta: 629. Junta de Extremadura A1 2015";


//  Id pregunta: 757 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Cu&aacute;l de los siguientes no es uno de los planes y actuaciones recogidos en la Agenda Digital para Espa&ntilde;a?";
 choices[23]= new Array();
 choices[23][0] = "Plan Nacional de Ciudades Inteligentes";
 choices[23][1] = "Plan Digital de Protecci&oacute;n del Medioambiente";
 choices[23][2] = "Plan de Impulso de las Tecnolog&iacute;as del Lenguaje";
 choices[23][3] = "Desarrollo e innovaci&oacute;n del sector TIC";
 answers[23] = choices[23][1];
 units[23] = "19";
 comments[23] = "Id Pregunta: 757. Agenda Digital para Espa&ntilde;a";


//  Id pregunta: 222 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[24]= new Array();
 choices[24][0] = "Dos Cap&iacute;tulos.";
 choices[24][1] = "Tres Cap&iacute;tulos.";
 choices[24][2] = "Un Cap&iacute;tulo.";
 choices[24][3] = "Cuatro Cap&iacute;tulos.";
 answers[24] = choices[24][1];
 units[24] = "1";
 comments[24] = "Id Pregunta: 222. CONSTITUCION1978";


//  Id pregunta: 540 Año de creación de pregunta: 2016
 questions[25]= "26)  Ser&aacute;/n interoperable/s con los registros electr&oacute;nicos generales y particulares de apoderamientos:";
 choices[25]= new Array();
 choices[25][0] = "los registros mercantiles";
 choices[25][1] = "los registros de la propiedad";
 choices[25][2] = "los protocolos notariales";
 choices[25][3] = "todas son correctas";
 answers[25] = choices[25][3];
 units[25] = "7";
 comments[25] = "Id Pregunta: 540. LEY 39/2015";


//  Id pregunta: 576 Año de creación de pregunta: 2016
 questions[26]= "27)  Son herramientas espec&iacute;ficas de control de versiones de software:";
 choices[26]= new Array();
 choices[26][0] = "Mercurial, Git y Apache Subversion.";
 choices[26][1] = "Gimp, Mercurial y Git.";
 choices[26][2] = "RedMine, Planner y OpenProj.";
 choices[26][3] = "Cassandra, Git y REDIS.";
 answers[26] = choices[26][0];
 units[26] = "92";
 comments[26] = "Id Pregunta: 576. Tema 92. TAI 2016.";


//  Id pregunta: 730 Año de creación de pregunta: 2016
 questions[27]= "28)  Indica la respuesta correcta";
 choices[27]= new Array();
 choices[27][0] = "Scrum no implica baja documentaci&oacute;n, de hecho hay estudios que estiman que es totalmente compatible con CMMI-3";
 choices[27][1] = "Scrum es una metodolog&iacute;a poco organizada";
 choices[27][2] = "Scrum no suele incluir a testers en el SCRUM TEAM";
 choices[27][3] = "En Scrum, sufre la calidad del producto o servicio al no pasar procesos de calidad reglados";
 answers[27] = choices[27][0];
 units[27] = "34, 84";
 comments[27] = "Id Pregunta: 730. Metodologias &aacute;giles";


//  Id pregunta: 754 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Agenda Digital para Espa&ntilde;a?";
 choices[28]= new Array();
 choices[28][0] = "Aumentar los beneficios empresariales mediante las TIC";
 choices[28][1] = "Promover la inclusi&oacute;n digital y la empleabilidad";
 choices[28][2] = "Fomentar el despliegue de redes y servicios";
 choices[28][3] = "Mejorar la administraci&oacute;n electr&oacute;nica";
 answers[28] = choices[28][0];
 units[28] = "19";
 comments[28] = "Id Pregunta: 754. Agenda Digital para Espa&ntilde;a";


//  Id pregunta: 64 Año de creación de pregunta: 2016
 questions[29]= "30)  De entre los siguientes sistemas operativos para dispositivos m&oacute;viles, indique cu&aacute;l est&aacute; afectado por la vulnerabilidad Stagefright:";
 choices[29]= new Array();
 choices[29][0] = "Windows Phone";
 choices[29][1] = "Blackberry";
 choices[29][2] = "iOS";
 choices[29][3] = "Android";
 answers[29] = choices[29][3];
 units[29] = "59";
 comments[29] = "Id Pregunta: 64. AGE A1 2015";


//  Id pregunta: 143 Año de creación de pregunta: 2016
 questions[30]= "31)  Contra la resoluci&oacute;n de un recurso de alzada:";
 choices[30]= new Array();
 choices[30][0] = "No cabe interponer ning&uacute;n tipo de recurso";
 choices[30][1] = "Puede interponerse el recurso de reposici&oacute;n como paso previo a la impugnaci&oacute;n ante el orden jurisdiccional contencioso-administrativo";
 choices[30][2] = "Puede interponerse el recurso extraordinario de revisi&oacute;n, en los casos establecidos en el art&iacute;culo 125.1.";
 choices[30][3] = "Puede interponerse un nuevo recurso de alzada si el acto no fuera expreso";
 answers[30] = choices[30][2];
 units[30] = "8";
 comments[30] = "Id Pregunta: 143. Ley 39/2015, Art&iacute;culo 122";


//  Id pregunta: 99 Año de creación de pregunta: 2016
 questions[31]= "32)  En cuanto a la imputaci&oacute;n de costes de los servicios compartidos en la Administraci&oacute;n General del Estado, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[31]= new Array();
 choices[31][0] = "Seg&uacute;n establece el Real Decreto 806/2014 el coste, caso de ocasionarse, ser&aacute; asumido &iacute;ntegramente por la Direcci&oacute;n de Tecnolog&iacute;as de las Informaci&oacute;n y Comunicaciones.";
 choices[31][1] = "Se sufragar&aacute;n con cargo a los presupuestos de Presidencia del Gobierno dado el car&aacute;cter horizontal del servicio compartido.";
 choices[31][2] = "La declaraci&oacute;n de todo servicio compartido deber&aacute; indicar si existe compensaci&oacute;n econ&oacute;mica al proveedor.";
 choices[31][3] = "No existir&aacute;, dado que su gratuidad y libertad de acceso es consustancial a la idea de servicio compartido.";
 answers[31] = choices[31][2];
 units[31] = "26";
 comments[31] = "Id Pregunta: 99. AGE A1 2015: actualmente la Secretar&iacute;a General de Administraci&oacute;n Digital asume las funciones de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 435 Año de creación de pregunta: 2016
 questions[32]= "33)  Sobre el servicio com&uacute;n Autentica, se&ntilde;ale la respuesta correcta:";
 choices[32]= new Array();
 choices[32][0] = "Autentica ofrece &uacute;nicamente servicios de autenticaci&oacute;n de empleados p&uacute;blicos de las AA.PP. y usuarios relacionados,";
 choices[32][1] = "Su objetivo es constituirse como el servicio com&uacute;n compartido de referencia para los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado, para sus aplicaciones internas.";
 choices[32][2] = "El servicio provee atributos de los usuarios autenticados relacionados con la unidad y el puesto de destino, incluyendo correo electr&oacute;nico y tel&eacute;fono.";
 choices[32][3] = "Ofrece funcionalidad de autorizaci&oacute;n de usuarios, &uacute;nicamente pertenecientes a la Administraci&oacute;n General del Estado.";
 answers[32] = choices[32][2];
 units[32] = "43";
 comments[32] = "Id Pregunta: 435. SERVICIOS COMUNES";


//  Id pregunta: 469 Año de creación de pregunta: 2016
 questions[33]= "34)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Econom&iacute;a y Competitividad podr&aacute; autorizar a la Secretar&iacute;a General del Tesoro y Pol&iacute;tica Financiera a realizar operaciones pasivas de pr&eacute;stamo a un plazo no superior a:";
 choices[33]= new Array();
 choices[33][0] = "Tres meses.";
 choices[33][1] = "Nueve meses.";
 choices[33][2] = "Cuatro meses.";
 choices[33][3] = "Seis meses.";
 answers[33] = choices[33][0];
 units[33] = "10";
 comments[33] = "Id Pregunta: 469. PRESUPUESTOS GENERALES";


//  Id pregunta: 670 Año de creación de pregunta: 2016
 questions[34]= "35)  La Ley 39/2015 introduce un cap&iacute;tulo relativo a la tramitaci&oacute;n simplificada del procedimiento administrativo com&uacute;n. Respecto a este tr&aacute;mite se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[34]= new Array();
 choices[34][0] = "Se podr&aacute; acordar la tramitaci&oacute;n simplificada por falta de complejidad del procedimiento y por razones de inter&eacute;s p&uacute;blico.";
 choices[34][1] = "Los interesados podr&aacute;n, en cualquier caso, solicitar la tramitaci&oacute;n simplificada del procedimiento.";
 choices[34][2] = "En general, los procedimientos administrativos tramitados de manera simplificada deber&aacute;n ser resueltos en treinta d&iacute;as.";
 choices[34][3] = "Constar&aacute;n &uacute;nicamente de los siguientes tr&aacute;mites: inicio, subsanaci&oacute;n (en su caso), alegaciones y tr&aacute;mite de audiencia.";
 answers[34] = choices[34][3];
 units[34] = "7";
 comments[34] = "Id Pregunta: 670. Cap&iacute;tulo VI, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 549 Año de creación de pregunta: 2016
 questions[35]= "36)  La gobernanza TIC incluye, entre otros, los siguientes aspectos:";
 choices[35]= new Array();
 choices[35][0] = "Integrar la estrategia TIC con la de negocio";
 choices[35][1] = "Adoptar e implantar un marco de control de las TIC";
 choices[35][2] = "Proporcionar las estructuras organizativas encargadas de implantar la estrategia TIC";
 choices[35][3] = "Todas las anteriores";
 answers[35] = choices[35][3];
 units[35] = "26";
 comments[35] = "Id Pregunta: 549. Gobernanza TIC";


//  Id pregunta: 270 Año de creación de pregunta: 2016
 questions[36]= "37)  La tutela de los derechos fundamentales y libertades p&uacute;blicas reconocidos en la secci&oacute;n primera del cap&iacute;tulo II del T&iacute;tulo I de la Constituci&oacute;n espa&ntilde;ola podr&aacute; recabarse por cualquier ciudadano:";
 choices[36]= new Array();
 choices[36][0] = "S&oacute;lo ante el Tribunal Constitucional de acuerdo con lo previsto en el Art&iacute;culo 161.1.a), referente al recurso de Inconstitucionalidad.";
 choices[36][1] = "S&oacute;lo ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad.";
 choices[36][2] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, ante el Tribunal Constitucional a trav&eacute;s del recurso de inconstitucionalidad.";
 choices[36][3] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional.";
 answers[36] = choices[36][0];
 units[36] = "1";
 comments[36] = "Id Pregunta: 270. CONSTITUCION1978";


//  Id pregunta: 642 Año de creación de pregunta: 2016
 questions[37]= "38)  Los sistemas de archivos gestionados por Windows 2008 Server son:";
 choices[37]= new Array();
 choices[37][0] = "Fat y Ntfs.";
 choices[37][1] = "Extfat y Fat.";
 choices[37][2] = "Fat y Nfst.";
 choices[37][3] = "ext2fs y Ntfs.";
 answers[37] = choices[37][0];
 units[37] = "58";
 comments[37] = "Id Pregunta: 642. Junta de Extremadura A1 2015";


//  Id pregunta: 98 Año de creación de pregunta: 2016
 questions[38]= "39)  La tecnolog&iacute;a de software que permite ejecutar al mismo tiempo varios sistemas operativos y aplicaciones en el mismo servidor se denomina:";
 choices[38]= new Array();
 choices[38][0] = "Clustering";
 choices[38][1] = "Deduplicaci&oacute;n";
 choices[38][2] = "Virtualizaci&oacute;n";
 choices[38][3] = "Contenerizaci&oacute;n";
 answers[38] = choices[38][2];
 units[38] = "124";
 comments[38] = "Id Pregunta: 98. AGE A1 2015";


//  Id pregunta: 797 Año de creación de pregunta: 2016
 questions[39]= "40)  Se&ntilde;ale la respuesta correcta:";
 choices[39]= new Array();
 choices[39][0] = "corresponde a los &oacute;rganos superiores establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos directivos su desarrollo y ejecuci&oacute;n";
 choices[39][1] = "corresponde establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos superiores";
 choices[39][2] = "corresponde establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos directivos";
 choices[39][3] = "corresponde a los &oacute;rganos directivos establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos superiores su desarrollo y ejecuci&oacute;n";
 answers[39] = choices[39][0];
 units[39] = "4, 7, 8, 9";
 comments[39] = "Id Pregunta: 797. Ley 40/2015";


//  Id pregunta: 855 Año de creación de pregunta: 2016
 questions[40]= "41)  Indique cu&aacute;l de las siguientes funciones relativas a una PKI es INCORRECTA:";
 choices[40]= new Array();
 choices[40][0] = "Garantiza mediante el uso de certificados digitales el no repudio, integridad, autenticaci&oacute;n y la publicaci&oacute;n de los datos transmitidos.";
 choices[40][1] = "Los componentes de una PKI para la administraci&oacute;n de los ccertificados son: software, hardware, personas, pol&iacute;ticas, procedimientos.";
 choices[40][2] = "Entre las funciones de una PKI se encuentra la revocaci&oacute;n de claves.";
 choices[40][3] = "Entre las funciones de una PKI se encuentran la generaci&oacute;n, recuperaci&oacute;n y renovaci&oacute;n de claves.";
 answers[40] = choices[40][0];
 units[40] = "76";
 comments[40] = "Id Pregunta: 855. Xunta de Galicia 2015";


//  Id pregunta: 474 Año de creación de pregunta: 2016
 questions[41]= "42)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la modalidad de auditor&iacute;a cuyo objeto consiste en la verificaci&oacute;n selectiva de la adecuaci&oacute;n a la legalidad de la gesti&oacute;n presupuestaria, de contrataci&oacute;n, personal, ingresos y gesti&oacute;n de subvenciones, as&iacute; como de cualquier otro aspecto de la actividad econ&oacute;mico financiero de las entidades auditadas se denomina:";
 choices[41]= new Array();
 choices[41][0] = "Auditor&iacute;a de sistemas y procedimientos de gesti&oacute;n econ&oacute;mica y financiera.";
 choices[41][1] = "Auditor&iacute;a operativa.";
 choices[41][2] = "Auditor&iacute;a de cumplimiento.";
 choices[41][3] = "Auditor&iacute;a de econom&iacute;a, eficacia y eficiencia.";
 answers[41] = choices[41][2];
 units[41] = "10";
 comments[41] = "Id Pregunta: 474. PRESUPUESTOS GENERALES";


//  Id pregunta: 498 Año de creación de pregunta: 2016
 questions[42]= "43)  A los efectos de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , forman parte del sector p&uacute;blico estatal:";
 choices[42]= new Array();
 choices[42][0] = "Las respuestas a) y b) son correctas.";
 choices[42][1] = "Los organismos aut&oacute;nomos dependientes de la Administraci&oacute;n General del Estado.";
 choices[42][2] = "Las entidades p&uacute;blicas empresariales, dependientes de la Administraci&oacute;n General del Estado, o de cualesquiera otros organismos p&uacute;blicos vinculados o dependientes de ella.";
 choices[42][3] = "Las respuestas a) y b) no son correctas.";
 answers[42] = choices[42][0];
 units[42] = "10";
 comments[42] = "Id Pregunta: 498. PRESUPUESTOS GENERALES";


//  Id pregunta: 271 Año de creación de pregunta: 2016
 questions[43]= "44)  La delegaci&oacute;n legislativa de las Cortes Generales en el Gobierno, cuando se trata de refundir varios textos legales en uno solo, deber&aacute; otorgarse mediante:";
 choices[43]= new Array();
 choices[43][0] = "Ley org&aacute;nica.";
 choices[43][1] = "Ley ordinaria.";
 choices[43][2] = "Ley de bases.";
 choices[43][3] = "Ley marco.";
 answers[43] = choices[43][0];
 units[43] = "1";
 comments[43] = "Id Pregunta: 271. CONSTITUCION1978";


//  Id pregunta: 662 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Qu&eacute; herramienta dentro del ecosistema Hadoop sirve para trasladar datos masivos entre Hadoop y sistemas de tratamiento estructurados?";
 choices[44]= new Array();
 choices[44][0] = "Avro";
 choices[44][1] = "Sqoop";
 choices[44][2] = "UIMA";
 choices[44][3] = "Jaql";
 answers[44] = choices[44][1];
 units[44] = "73";
 comments[44] = "Id Pregunta: 662. ";


//  Id pregunta: 377 Año de creación de pregunta: 2016
 questions[45]= "46)  Es un elemento caracter&iacute;stico de la naturaleza jur&iacute;dica de la Uni&oacute;n Europea:";
 choices[45]= new Array();
 choices[45][0] = "Tener una estructura institucional.";
 choices[45][1] = "El establecimiento de un Ordenamiento jur&iacute;dico propio.";
 choices[45][2] = "La transferencia de competencias a las instituciones comunitarias.";
 choices[45][3] = "Todas las respuestas son correctas.";
 answers[45] = choices[45][3];
 units[45] = "5";
 comments[45] = "Id Pregunta: 377. UNION EUROPEA";


//  Id pregunta: 745 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Qu&eacute; dos figuras son novedad de la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n ?";
 choices[46]= new Array();
 choices[46][0] = "Las Sociedades de Responsabilidad Limitada de formaci&oacute;n sucesiva y el Emprendedor de responsabilidad limitada";
 choices[46][1] = "Sociedad Limitada de Formaci&oacute;n Sucesiva y Emprendedor de responsabilidad limitada";
 choices[46][2] = "Sociedad de Responsabilidad Limitada y Emprendedor de responsabilidad Limitada";
 choices[46][3] = "Sociedad de Formaci&oacute;n sucesiva y emprendedor de responsabilidad limitada";
 answers[46] = choices[46][1];
 units[46] = "18, 20";
 comments[46] = "Id Pregunta: 745. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 491 Año de creación de pregunta: 2016
 questions[47]= "48)  A tenor del art&iacute;culo 47.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el n&uacute;mero de ejercicios a que pueden aplicarse los gastos no ser&aacute; superior a:";
 choices[47]= new Array();
 choices[47][0] = "Dos.";
 choices[47][1] = "Cuatro.";
 choices[47][2] = "Cinco.";
 choices[47][3] = "Tres.";
 answers[47] = choices[47][1];
 units[47] = "10";
 comments[47] = "Id Pregunta: 491. PRESUPUESTOS GENERALES";


//  Id pregunta: 827 Año de creación de pregunta: 2016
 questions[48]= "49)  La actuaci&oacute;n de autoridades y personal al servicio de las Administraciones P&uacute;blicas en los que concurran motivos de abstenci&oacute;n ...";
 choices[48]= new Array();
 choices[48][0] = "No implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido pero dar&aacute; lugar a la responsabilidad que proceda";
 choices[48][1] = "Dar&aacute; lugar a la responsabilidad que proceda pero no implicar&aacute; en ning&uacute;n caso la invalidez de los actos en que hayan intervenido";
 choices[48][2] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido";
 choices[48][3] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido dando lugar a la responsabilidad que proceda";
 answers[48] = choices[48][1];
 units[48] = "4, 7, 8, 9";
 comments[48] = "Id Pregunta: 827. Ley 40/2015";


//  Id pregunta: 814 Año de creación de pregunta: 2016
 questions[49]= "50)  Las Delegaciones del Gobierno est&aacute;n adscritas org&aacute;nicamente a:";
 choices[49]= new Array();
 choices[49][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[49][1] = "el Consejo de Gobierno de la Comunidad Aut&oacute;noma";
 choices[49][2] = "el Ministerio del Interior";
 choices[49][3] = "la Administraci&oacute;n General del Estado";
 answers[49] = choices[49][0];
 units[49] = "4, 7, 8, 9";
 comments[49] = "Id Pregunta: 814. Ley 40/2015";


//  Id pregunta: 668 Año de creación de pregunta: 2016
 questions[50]= "51)  Seg&uacute;n el art&iacute;culo 73 de la Ley 39/2015, el plazo para el el cumplimiento de tr&aacute;mites que deban ser cumplimentados por el interesado, es por defecto:";
 choices[50]= new Array();
 choices[50][0] = "10 d&iacute;as.";
 choices[50][1] = "15 d&iacute;as.";
 choices[50][2] = "1 mes.";
 choices[50][3] = "No se establece ning&uacute;n plazo por defecto.";
 answers[50] = choices[50][0];
 units[50] = "7";
 comments[50] = "Id Pregunta: 668. Art&iacute;culo 73 de la Ley 39/2015";


//  Id pregunta: 482 Año de creación de pregunta: 2016
 questions[51]= "52)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el &aacute;mbito del Ministerio de Defensa y de la Seguridad Social, el control se ejercer&aacute; a trav&eacute;s de:";
 choices[51]= new Array();
 choices[51][0] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[51][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[51][2] = "Las respuestas a) b) no son correctas.";
 choices[51][3] = "Las respuestas a) y b) son correctas.";
 answers[51] = choices[51][3];
 units[51] = "10";
 comments[51] = "Id Pregunta: 482. PRESUPUESTOS GENERALES";


//  Id pregunta: 286 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Cu&aacute;l no es un pilar de la Estrategia del Mercado &Uacute;nico Digital?";
 choices[52]= new Array();
 choices[52][0] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa.";
 choices[52][1] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar.";
 choices[52][2] = "Iniciativa europea de libre flujo de datos.";
 choices[52][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital.";
 answers[52] = choices[52][2];
 units[52] = "5";
 comments[52] = "Id Pregunta: 286. UNION EUROPEA";


//  Id pregunta: 732 Año de creación de pregunta: 2016
 questions[53]= "54)  Cu&aacute;l de las siguientes caracter&iacute;sticas es especifican de Kanban:";
 choices[53]= new Array();
 choices[53][0] = "Se definen iteraciones";
 choices[53][1] = "Se limitan las tareas que se pueden realizar por fase";
 choices[53][2] = "Los miembros del equipo no tienen un rol especifico";
 choices[53][3] = "Todas las anteriores son caracter&iacute;sticas de la metodolog&iacute;a Kanban.";
 answers[53] = choices[53][1];
 units[53] = "34, 84";
 comments[53] = "Id Pregunta: 732. Metodologias &aacute;giles";


//  Id pregunta: 510 Año de creación de pregunta: 2016
 questions[54]= "55)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, se dict&oacute; en desarrollo de lo indicado en:";
 choices[54]= new Array();
 choices[54][0] = "El art&iacute;culo 131 de la Constituci&oacute;n que establece que el Estado, mediante ley, podr&aacute; planificar la actividad econ&oacute;mica general para atender a las necesidades colectivas, equilibrar y armonizar el desarrollo regional y sectorial y estimular el crecimiento de la renta y de la riqueza y su m&aacute;s justa distribuci&oacute;n.";
 choices[54][1] = "El art&iacute;culo 134.1 de la Constituci&oacute;n que establece que corresponde al Gobierno la elaboraci&oacute;n de los Presupuestos Generales del Estado y a las Cortes Generales, su examen, enmienda y aprobaci&oacute;n.";
 choices[54][2] = "La Disposici&oacute;n Adicional &Uacute;nica de la Reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, de 27 de septiembre de 2011 .";
 choices[54][3] = "El art&iacute;culo 135.2 de la Constituci&oacute;n que establec&iacute;a que los cr&eacute;ditos para satisfacer el pago de intereses y capital de la Deuda P&uacute;blica del Estado se entender&aacute;n siempre incluidos en el estado de gastos de los presupuestos y no podr&aacute;n ser objeto de enmienda o modificaci&oacute;n, mientras se ajusten a las condiciones de la ley de emisi&oacute;n.";
 answers[54] = choices[54][3];
 units[54] = "10";
 comments[54] = "Id Pregunta: 510. PRESUPUESTOS GENERALES";


//  Id pregunta: 171 Año de creación de pregunta: 2016
 questions[55]= "56)  Se&ntilde;ale la respuesta FALSA. Entre los objetivos de ISA2 se encuentra:";
 choices[55]= new Array();
 choices[55][0] = "desarrollar, mantener y promover un enfoque hol&iacute;stico hacia la interoperabilidad en la Uni&oacute;n para eliminar la fragmentaci&oacute;n en el panorama de la interoperabilidad en la Uni&oacute;n";
 choices[55][1] = "facilitar la reutilizaci&oacute;n de las soluciones de interoperabilidad por parte de las administraciones p&uacute;blicas europeas.";
 choices[55][2] = "identificar, crear y explotar soluciones de interoperabilidad que faciliten la ejecuci&oacute;n de las pol&iacute;ticas y actividades de la Uni&oacute;n";
 choices[55][3] = "eliminar la interacci&oacute;n electr&oacute;nica transfronteriza tanto entre las administraciones p&uacute;blicas europeas fomentando una cultura de ciberseguridad europea";
 answers[55] = choices[55][3];
 units[55] = "19";
 comments[55] = "Id Pregunta: 171. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Diciembre/Noticia-2015-12-09-Publicada-la-Decision-ISA2-continuidad-al-esfuerzo-asegurar-interoperabilidad-entre-AAPP-europeas.html#.WCnm1WrhDIU";


//  Id pregunta: 813 Año de creación de pregunta: 2016
 questions[56]= "57)  Las Delegaciones del Gobierno tendr&aacute;n su sede en:";
 choices[56]= new Array();
 choices[56][0] = "la localidad elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[56][1] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[56][2] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[56][3] = "la localidad donde elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 answers[56] = choices[56][2];
 units[56] = "4, 7, 8, 9";
 comments[56] = "Id Pregunta: 813. Ley 40/2015";


//  Id pregunta: 716 Año de creación de pregunta: 2016
 questions[57]= "58)  Se&ntilde;ale la opci&oacute;n correcta";
 choices[57]= new Array();
 choices[57][0] = "Jenkins un servidor de integraci&oacute;n continua comercial.";
 choices[57][1] = "Extiende su funcionalidad a trav&eacute;s de plugins.";
 choices[57][2] = "Solamente soporta herramientas de control de versiones como CVS, Git y Clearcase.";
 choices[57][3] = "No posee un historial de cambios realizados por build o versi&oacute;n.";
 answers[57] = choices[57][1];
 units[57] = "92";
 comments[57] = "Id Pregunta: 716. INTEGRACION CONTINUA";


//  Id pregunta: 248 Año de creación de pregunta: 2016
 questions[58]= "59)  El T&iacute;tulo II de la Constituci&oacute;n finaliza en el Art&iacute;culo:";
 choices[58]= new Array();
 choices[58][0] = "61";
 choices[58][1] = "53";
 choices[58][2] = "65";
 choices[58][3] = "67";
 answers[58] = choices[58][1];
 units[58] = "1";
 comments[58] = "Id Pregunta: 248. CONSTITUCION1978";


//  Id pregunta: 527 Año de creación de pregunta: 2016
 questions[59]= "60)  Cuando la condici&oacute;n de interesado derivase de alguna relaci&oacute;n jur&iacute;dica transmisible el derecho-habiente suceder&aacute; en tal condici&oacute;n:";
 choices[59]= new Array();
 choices[59][0] = "si el procedimiento no ha alcanzado la fase de instrucci&oacute;n";
 choices[59][1] = "si el procedimiento no ha alcanzado el tr&aacute;mite de audiencia";
 choices[59][2] = "si el procedimiento no ha alcanzado el tr&aacute;mite de informaci&oacute;n p&uacute;blica";
 choices[59][3] = "cualquiera que sea el estado del procedimiento";
 answers[59] = choices[59][3];
 units[59] = "7";
 comments[59] = "Id Pregunta: 527. LEY 39/2015";


//  Id pregunta: 154 Año de creación de pregunta: 2016
 questions[60]= "61)  Los t&eacute;rminos y plazos establecidos en la ley 39/2015 u otras leyes obligan a:";
 choices[60]= new Array();
 choices[60][0] = "las autoridades al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[60][1] = "el personal al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[60][2] = "los interesados en la tramitaci&oacute;n de los asuntos";
 choices[60][3] = "todas son correctas";
 answers[60] = choices[60][3];
 units[60] = "7";
 comments[60] = "Id Pregunta: 154. Ley 39/2015, Art&iacute;culo 29";


//  Id pregunta: 800 Año de creación de pregunta: 2016
 questions[61]= "62)  Las unidades administrativas comprenden puestos de trabajo o dotaciones de plantilla:";
 choices[61]= new Array();
 choices[61][0] = "vinculados funcionalmente por raz&oacute;n de sus cometidos y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[61][1] = "vinculados org&aacute;nicamente por raz&oacute;n de sus cometidos y funcionalmente por una jefatura com&uacute;n";
 choices[61][2] = "vinculados funcionalmente por raz&oacute;n de su territorio y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[61][3] = "vinculados org&aacute;nicamente por raz&oacute;n de su territorio y funcionalmente por una jefatura com&uacute;n";
 answers[61] = choices[61][0];
 units[61] = "4, 7, 8, 9";
 comments[61] = "Id Pregunta: 800. Ley 40/2015";


//  Id pregunta: 173 Año de creación de pregunta: 2016
 questions[62]= "63)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la cuesti&oacute;n de confianza planteada por el Presidente del Gobierno, se entender&aacute; otorgada cuando vote a su favor la mayor&iacute;a:";
 choices[62]= new Array();
 choices[62][0] = "absoluta de las Cortes Generales.";
 choices[62][1] = "absoluta del Congreso de los Diputados.";
 choices[62][2] = "simple de las Cortes Generales.";
 choices[62][3] = "simple del Congreso de los Diputados.";
 answers[62] = choices[62][3];
 units[62] = "1";
 comments[62] = "Id Pregunta: 173. CONSTITUCION1978";


//  Id pregunta: 254 Año de creación de pregunta: 2016
 questions[63]= "64)  El Art&iacute;culo 16 de la Constituci&oacute;n Espa&ntilde;ola garantiza:";
 choices[63]= new Array();
 choices[63][0] = "La libertad ideol&oacute;gica, religiosa y de culto.";
 choices[63][1] = "La libertad sexual y religiosa.";
 choices[63][2] = "La obligaci&oacute;n del derecho al voto en las elecciones.";
 choices[63][3] = "La ausencia de libertad cat&oacute;lica.";
 answers[63] = choices[63][3];
 units[63] = "1";
 comments[63] = "Id Pregunta: 254. CONSTITUCION1978";


//  Id pregunta: 460 Año de creación de pregunta: 2016
 questions[64]= "65)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Intervenci&oacute;n General de la Administraci&oacute;n del Estado ejercer&aacute; sus funciones de control conforme a los principios de:";
 choices[64]= new Array();
 choices[64][0] = "a) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[64][1] = "b) Eficacia, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[64][2] = "c) Autonom&iacute;a, eficacia y ejercicio desconcentrado.";
 choices[64][3] = "d) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a interna.";
 answers[64] = choices[64][3];
 units[64] = "10";
 comments[64] = "Id Pregunta: 460. PRESUPUESTOS GENERALES";


//  Id pregunta: 849 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Cu&aacute;l de los siguientes es un sistema de firma para la actuaci&oacute;n administrativa automatizada?";
 choices[65]= new Array();
 choices[65][0] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico reconocido o cualificado que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[65][1] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico avanzado o reconocido que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[65][2] = "C&oacute;digo seguro de verificaci&oacute;n vinculado a la Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de Derecho P&uacute;blico, en los t&eacute;rminos y condiciones establecidos, permiti&eacute;ndose en todo caso la comprobaci&oacute;n de la integridad del documento mediante el acceso al portal correspondiente.";
 choices[65][3] = "Firma electr&oacute;nica del titular del &oacute;rgano o empleado p&uacute;blico.";
 answers[65] = choices[65][0];
 units[65] = "4, 7, 8, 9";
 comments[65] = "Id Pregunta: 849. Ley 40/2015";


//  Id pregunta: 465 Año de creación de pregunta: 2016
 questions[66]= "67)  Seg&uacute;n el art&iacute;culo 26 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la programaci&oacute;n presupuestaria se regir&aacute; por los principios de:";
 choices[66]= new Array();
 choices[66][0] = "Estabilidad presupuestaria, sostenibilidad financiera, eficacia, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[66][1] = "Estabilidad presupuestaria, sostenibilidad financiera, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[66][2] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, responsabilidad y lealtad institucional.";
 choices[66][3] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 answers[66] = choices[66][3];
 units[66] = "10";
 comments[66] = "Id Pregunta: 465. PRESUPUESTOS GENERALES";


//  Id pregunta: 21 Año de creación de pregunta: 2016
 questions[67]= "68)  En ITIL v3, &iquest;cu&aacute;l de los siguientes procesos forma parte del Dise&ntilde;o del Servicio?";
 choices[67]= new Array();
 choices[67][0] = "Gesti&oacute;n de la disponibilidad";
 choices[67][1] = "Gesti&oacute;n de la demanda";
 choices[67][2] = "Gesti&oacute;n de entregas";
 choices[67][3] = "Gesti&oacute;n de la configuraci&oacute;n";
 answers[67] = choices[67][0];
 units[67] = "101";
 comments[67] = "Id Pregunta: 21. AGE A1 2015";


//  Id pregunta: 622 Año de creación de pregunta: 2016
 questions[68]= "69)  En el entorno de la Arquitectura del Software, un patr&oacute;n :";
 choices[68]= new Array();
 choices[68][0] = "Es una soluci&oacute;n a un problema en un contexto particular.";
 choices[68][1] = "Es recurrente y ense&ntilde;a permitiendo entender c&oacute;mo adaptarlo a la variante particular del problema donde se quiere aplicar.";
 choices[68][2] = "Tiene un nombre para referirse al patr&oacute;n.";
 choices[68][3] = "Todas las respuestas son correctas.";
 answers[68] = choices[68][3];
 units[68] = "50";
 comments[68] = "Id Pregunta: 622. Junta de Extremadura A1 2015";


//  Id pregunta: 599 Año de creación de pregunta: 2016
 questions[69]= "70)  La pol&iacute;tica de seguridad de alto nivel de la Organizaci&oacute;n:";
 choices[69]= new Array();
 choices[69][0] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, sin entrar en detalles acerca del COMO.";
 choices[69][1] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer y COMO se debe implementar.";
 choices[69][2] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 choices[69][3] = "Debe describir QUE se intenta proteger, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 answers[69] = choices[69][0];
 units[69] = "45";
 comments[69] = "Id Pregunta: 599. Junta de Extremadura A1 2015";


//  Id pregunta: 767 Año de creación de pregunta: 2016
 questions[70]= "71)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[70]= new Array();
 choices[70][0] = "no quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo, cuando ejerzan potestades administrativas";
 choices[70][1] = "no quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley, ni siquiera, cuando ejerzan potestades administrativas";
 choices[70][2] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[70][3] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, excepto, cuando ejerzan potestades administrativas";
 answers[70] = choices[70][2];
 units[70] = "4, 7, 8, 9";
 comments[70] = "Id Pregunta: 767. Ley 40/2015";


//  Id pregunta: 16 Año de creación de pregunta: 2016
 questions[71]= "72)  De acuerdo con la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos de comunicaciones electr&oacute;nicas y de redes p&uacute;blicas de comunicaci&oacute;n:";
 choices[71]= new Array();
 choices[71][0] = "Deben conservarse los datos que revelen el contenido de la comunicaci&oacute;n en virtud de lo establecido en la citada Ley.";
 choices[71][1] = "La obligaci&oacute;n de conservaci&oacute;n de datos cesa a los tres a&ntilde;os desde la fecha en que se haya producido la comunicaci&oacute;n.";
 choices[71][2] = "Los datos conservados de conformidad con lo dispuesto en la citada Ley pueden ser cedidos para los fines que en la misma se determinan previa autorizaci&oacute;n administrativa.";
 choices[71][3] = "Son sujetos obligados los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones.";
 answers[71] = choices[71][3];
 units[71] = "19";
 comments[71] = "Id Pregunta: 16. AGE A1 2015";


//  Id pregunta: 174 Año de creación de pregunta: 2016
 questions[72]= "73)  De conformidad con la Constituci&oacute;n Espa&ntilde;ola, &iquest; cu&aacute;l de los siguientes derechos y libertades es susceptible de tutela a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional?";
 choices[72]= new Array();
 choices[72][0] = "El derecho a la propiedad privada.";
 choices[72][1] = "El derecho de asociaci&oacute;n.";
 choices[72][2] = "El derecho de fundaci&oacute;n.";
 choices[72][3] = "El derecho de negociaci&oacute;n colectiva.";
 answers[72] = choices[72][1];
 units[72] = "1";
 comments[72] = "Id Pregunta: 174. CONSTITUCION1978";


//  Id pregunta: 773 Año de creación de pregunta: 2016
 questions[73]= "74)  La actuaci&oacute;n de la Administraci&oacute;n P&uacute;blica respectiva se desarrolla para alcanzar los objetivos que establecen las leyes y el resto del ordenamiento jur&iacute;dico, bajo la direcci&oacute;n de (se&ntilde;ala la incorrecta):";
 choices[73]= new Array();
 choices[73][0] = "el Gobierno de la Naci&oacute;n";
 choices[73][1] = "los &oacute;rganos de gobierno de las Comunidades Aut&oacute;nomas";
 choices[73][2] = "los &oacute;rganos de gobierno de las Entidades Locales";
 choices[73][3] = "los &oacute;rganos de gobierno de las Universidades p&uacute;blicas";
 answers[73] = choices[73][3];
 units[73] = "4, 7, 8, 9";
 comments[73] = "Id Pregunta: 773. Ley 40/2015";


//  Id pregunta: 2 Año de creación de pregunta: 2016
 questions[74]= "75)  La estrategia de comunicaci&oacute;n de un nuevo proyecto estrat&eacute;gico TIC NO debe:";
 choices[74]= new Array();
 choices[74][0] = "Posponerse a la puesta en producci&oacute;n del proyecto sin incidencias significativas.";
 choices[74][1] = "Presentar prototipos que muestren la evoluci&oacute;n del desarrollo ya realizado.";
 choices[74][2] = "Dise&ntilde;ar una campa&ntilde;a de difusi&oacute;n y promoci&oacute;n del proyecto.";
 choices[74][3] = "Asegurar la implicaci&oacute;n de representantes de todas las unidades afectadas.";
 answers[74] = choices[74][0];
 units[74] = "31";
 comments[74] = "Id Pregunta: 2. AGE A1 2015";


