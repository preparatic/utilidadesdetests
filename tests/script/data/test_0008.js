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

//  Id pregunta: 166 Año de creación de pregunta: 2016
 questions[0]= "1)  El indicador de la Comisi&oacute;n Europea &ldquo;DESI&rdquo; (Digital Economy &amp; Society Index) tiene entre sus dimensiones:";
 choices[0]= new Array();
 choices[0][0] = "Interoperabilidad";
 choices[0][1] = "Integridad";
 choices[0][2] = "Capital humano";
 choices[0][3] = "Trazabilidad";
 answers[0] = choices[0][2];
 units[0] = "19";
 comments[0] = "Id Pregunta: 166. https://ec.europa.eu/digital-single-market/en/desi Conectividad, Capital humano, Uso de internet, Integraci&oacute;n de tecnolog&iacute;a digital, Servicios p&uacute;blicos digitales";


//  Id pregunta: 442 Año de creación de pregunta: 2016
 questions[1]= "2)  Sobre la gu&iacute;a de Comunicaci&oacute;n Digital de la AGE, se&ntilde;ale la respuesta falsa:";
 choices[1]= new Array();
 choices[1][0] = "La Gu&iacute;a de Comunicaci&oacute;n Digital para la AGE ofrece un marco de criterios, recomendaciones y buenas pr&aacute;cticas a considerar al crear, generar contenidos o evolucionar sitios web, sedes electr&oacute;nicas o tambi&eacute;n blogs, cuentas o perfiles de redes sociales.";
 choices[1][1] = "Recoge aspectos como la imagen Institucional: uso de los logotipos del Gobierno de Espa&ntilde;a, elementos distintivos de imagen en las redes sociales o la imagen promocional de la administraci&oacute;n electr&oacute;nica.";
 choices[1][2] = "Se divide en tres partes, con fasc&iacute;culos que pueden ser utilizados independientemente seg&uacute;n las necesidades de cada responsable del sitio web.";
 choices[1][3] = "La &laquo;Gu&iacute;a de Comunicaci&oacute;n Digital para la Administraci&oacute;n General del Estado&raquo; que se aprueba mediante la presente Resoluci&oacute;n se aplicar&aacute; al a&ntilde;o siguiente al de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 answers[1] = choices[1][3];
 units[1] = "43";
 comments[1] = "Id Pregunta: 442. SERVICIOS COMUNES";


//  Id pregunta: 258 Año de creación de pregunta: 2016
 questions[2]= "3)  El Art&iacute;culo 137 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Estado se organiza territorialmente en:";
 choices[2]= new Array();
 choices[2][0] = "Municipios, provincias y CCAA.";
 choices[2][1] = "En 17 CCAA m&aacute;s Ceuta y Melilla.";
 choices[2][2] = "En CCAA, 50 provincias y municipios.";
 choices[2][3] = "En municipios, en provincias, entidades locales menores y CCAA.";
 answers[2] = choices[2][2];
 units[2] = "1";
 comments[2] = "Id Pregunta: 258. CONSTITUCION1978";


//  Id pregunta: 44 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Cu&aacute;les son las propiedades que debe cumplir una unidad l&oacute;gica de trabajo para ser calificada como transacci&oacute;n?";
 choices[3]= new Array();
 choices[3][0] = "Atomicidad, concurrencia, aislamiento y temporalidad";
 choices[3][1] = "Atomicidad, consistencia, aislamiento y durabilidad";
 choices[3][2] = "Atomicidad, concurrencia, escalabilidad y durabilidad";
 choices[3][3] = "Atomicidad, consistencia, aislamiento y temporalidad";
 answers[3] = choices[3][1];
 units[3] = "60";
 comments[3] = "Id Pregunta: 44. AGE A1 2015";


//  Id pregunta: 648 Año de creación de pregunta: 2016
 questions[4]= "5)  Los IDS, (Sistemas de Detecci&oacute;n de Intrusos), pueden clasificarse:";
 choices[4]= new Array();
 choices[4][0] = "Solamente en funci&oacute;n de los sistemas que monitorizan.";
 choices[4][1] = "En funci&oacute;n de los sistemas que monitorizan y en funci&oacute;n de c&oacute;mo operan los Sistemas de Detecci&oacute;n de Intrusos.";
 choices[4][2] = "Solamente en funci&oacute;n de c&oacute;mo operan los Sistemas de Detecci&oacute;n de Intrusos.";
 choices[4][3] = "Estos sistemas es imposible clasificarlos.";
 answers[4] = choices[4][1];
 units[4] = "119";
 comments[4] = "Id Pregunta: 648. Junta de Extremadura A1 2015";


//  Id pregunta: 385 Año de creación de pregunta: 2016
 questions[5]= "6)  Se&ntilde;ale c&oacute;mo es evaluado el Plan de Igualdad en la Administraci&oacute;n General del Estado, previsto en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la Igualdad efectiva de mujeres y hombres:";
 choices[5]= new Array();
 choices[5][0] = "Anualmente por el Consejo de Ministros";
 choices[5][1] = "Anualmente por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios";
 choices[5][2] = "Al final de cada legislatura por el Gobierno";
 choices[5][3] = "Al final de cada legislatura por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios.";
 answers[5] = choices[5][0];
 units[5] = "14";
 comments[5] = "Id Pregunta: 385. POLITICAS DE IGUALDAD";


//  Id pregunta: 393 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[6]= new Array();
 choices[6][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[6][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[6][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[6][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[6] = choices[6][0];
 units[6] = "14";
 comments[6] = "Id Pregunta: 393. POLITICAS DE IGUALDAD";


//  Id pregunta: 143 Año de creación de pregunta: 2016
 questions[7]= "8)  Contra la resoluci&oacute;n de un recurso de alzada:";
 choices[7]= new Array();
 choices[7][0] = "No cabe interponer ning&uacute;n tipo de recurso";
 choices[7][1] = "Puede interponerse el recurso de reposici&oacute;n como paso previo a la impugnaci&oacute;n ante el orden jurisdiccional contencioso-administrativo";
 choices[7][2] = "Puede interponerse el recurso extraordinario de revisi&oacute;n, en los casos establecidos en el art&iacute;culo 125.1.";
 choices[7][3] = "Puede interponerse un nuevo recurso de alzada si el acto no fuera expreso";
 answers[7] = choices[7][2];
 units[7] = "8";
 comments[7] = "Id Pregunta: 143. Ley 39/2015, Art&iacute;culo 122";


//  Id pregunta: 759 Año de creación de pregunta: 2016
 questions[8]= "9)  Las Administraciones P&uacute;blicas deber&aacute;n respetar en su actuaci&oacute;n y relaciones los siguientes principios:";
 choices[8]= new Array();
 choices[8][0] = "simplicidad, claridad y proximidad a los ciudadanos";
 choices[8][1] = "participaci&oacute;n, objetividad y transparencia de la actuaci&oacute;n administrativa";
 choices[8][2] = "responsabilidad por la gesti&oacute;n p&uacute;blica";
 choices[8][3] = "todas son correctas";
 answers[8] = choices[8][3];
 units[8] = "4, 7, 8, 9";
 comments[8] = "Id Pregunta: 759. Ley 40/2015";


//  Id pregunta: 319 Año de creación de pregunta: 2016
 questions[9]= "10)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[9]= new Array();
 choices[9][0] = "El Presidente de la Comisi&oacute;n, con la aprobaci&oacute;n de la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[9][1] = "La Comisi&oacute;n por mayor&iacute;a de dos tercios de sus miembros puede exigir la dimisi&oacute;n de un Comisario.";
 choices[9][2] = "El Presidente, sin necesidad de contar con la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[9][3] = "&Uacute;nicamente el Presidente del Consejo puede exigir la dimisi&oacute;n de un Comisario.";
 answers[9] = choices[9][0];
 units[9] = "5";
 comments[9] = "Id Pregunta: 319. UNION EUROPEA";


//  Id pregunta: 559 Año de creación de pregunta: 2016
 questions[10]= "11)  Uno de los objetivos de la Agenda Digital para Espa&ntilde;a es desarrollar la econom&iacute;a digital, &iquest;qu&eacute; actuaciones se deben desarrollar para lograr esto?";
 choices[10]= new Array();
 choices[10][0] = "Impulsar la producci&oacute;n y distribuci&oacute;n a trav&eacute;s de Internet de contenidos digitales";
 choices[10][1] = "Favorecer la internacionalizaci&oacute;n de las empresas tecnol&oacute;gicas";
 choices[10][2] = "Incentivar el uso transformador de las TIC en nuestras empresas";
 choices[10][3] = "Todos los anteriores";
 answers[10] = choices[10][3];
 units[10] = "19";
 comments[10] = "Id Pregunta: 559. Agenda Digital";


//  Id pregunta: 400 Año de creación de pregunta: 2016
 questions[11]= "12)  Corresponde probar la ausencia de discriminaci&oacute;n en las medidas adoptadas y su proporcionalidad, a:";
 choices[11]= new Array();
 choices[11][0] = "A la persona demandante.";
 choices[11][1] = "A la persona demandada.";
 choices[11][2] = "Al &oacute;rgano judicial.";
 choices[11][3] = "Al &oacute;rgano administrativo.";
 answers[11] = choices[11][1];
 units[11] = "14";
 comments[11] = "Id Pregunta: 400. POLITICAS DE IGUALDAD";


//  Id pregunta: 721 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;C&uacute;al es la principal ventaja de sprints m&aacute;s cortos en Scrum?";
 choices[12]= new Array();
 choices[12][0] = "Permite reaccionar al equipo mejor ante imprevistos";
 choices[12][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[12][2] = "Es m&aacute;s f&aacute;cil cumplir los objetivos marcados al final de cada sprint";
 choices[12][3] = "Ninguna de las anteriores";
 answers[12] = choices[12][1];
 units[12] = "34, 84";
 comments[12] = "Id Pregunta: 721. Metodologias &aacute;giles";


//  Id pregunta: 751 Año de creación de pregunta: 2016
 questions[13]= "14)  En el contexto de la Ley 20/2013, de garant&iacute;a de la unidad de mercado, se considerar&aacute; que concurren los principios de necesidad y proporcionalidad para la exigencia de una autorizaci&oacute;n:";
 choices[13]= new Array();
 choices[13][0] = "Respecto a los operadores econ&oacute;micos, cuando est&eacute; justificado por razones de orden p&uacute;blico aunque &eacute;stas puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n.";
 choices[13][1] = "Respecto a las instalaciones o infraestructuras f&iacute;sicas necesarias para el ejercicio de actividades econ&oacute;micas, cuando sean susceptibles de generar da&ntilde;os sobre el medio ambiente y el entorno urbano, la seguridad o la salud p&uacute;blica y el patrimonio hist&oacute;rico-art&iacute;stico, y estas razones no puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n";
 choices[13][2] = "b) y d) son verdaderas";
 choices[13][3] = "Cuando as&iacute; se disponga reglamentariamente";
 answers[13] = choices[13][1];
 units[13] = "18, 20";
 comments[13] = "Id Pregunta: 751. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 796 Año de creación de pregunta: 2016
 questions[14]= "15)  A los Directores generales les corresponde (se&ntilde;ala la incorrecta):";
 choices[14]= new Array();
 choices[14][0] = "proponer los proyectos de su Direcci&oacute;n general para alcanzar los objetivos establecidos por el Ministro, dirigir su ejecuci&oacute;n y controlar su adecuado cumplimiento";
 choices[14][1] = "solicitar del Ministerio de Hacienda y Administraciones P&uacute;blicas la afectaci&oacute;n o el arrendamiento de los inmuebles necesarios para el cumplimiento de los fines de los servicios a cargo del Departamento";
 choices[14][2] = "ejercer las competencias atribuidas a la Direcci&oacute;n general y las que le sean desconcentradas o delegadas";
 choices[14][3] = "impulsar y supervisar las actividades que forman parte de la gesti&oacute;n ordinaria del &oacute;rgano directivo y velar por el buen funcionamiento de los &oacute;rganos y unidades dependientes y del personal integrado en los mismos";
 answers[14] = choices[14][1];
 units[14] = "4, 7, 8, 9";
 comments[14] = "Id Pregunta: 796. Ley 40/2015";


//  Id pregunta: 194 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Cu&aacute;ntos miembros componen el Tribunal Constitucional?";
 choices[15]= new Array();
 choices[15][0] = "11";
 choices[15][1] = "12";
 choices[15][2] = "14";
 choices[15][3] = "8";
 answers[15] = choices[15][1];
 units[15] = "1";
 comments[15] = "Id Pregunta: 194. CONSTITUCION1978";


//  Id pregunta: 560 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Cu&aacute;l de los siguientes no es un obst&aacute;culo identificado por la Comisi&oacute;n para el desarrollo de la Agenda Digital europea?";
 choices[16]= new Array();
 choices[16][0] = "El incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes";
 choices[16][1] = "La falta de inversi&oacute;n en campa&ntilde;as de comunicaci&oacute;n en los pa&iacute;ses miembros";
 choices[16][2] = "Las carencias en la alfabetizaci&oacute;n y la capacitaci&oacute;n digitales";
 choices[16][3] = "La ausencia de inversi&oacute;n en las redes";
 answers[16] = choices[16][1];
 units[16] = "19";
 comments[16] = "Id Pregunta: 560. Agenda Digital";


//  Id pregunta: 506 Año de creación de pregunta: 2016
 questions[17]= "18)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, responde a la reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, (en adelante CE) e incorpora tres nuevos principios con respecto a la derogada Ley Org&aacute;nica 5/2001, de 13 de diciembre, complementaria a la Ley General de Estabilidad Presupuestaria ,Cu&aacute;les son?";
 choices[17]= new Array();
 choices[17][0] = "Estabilidad presupuestaria, plurianualidad, y responsabilidad.";
 choices[17][1] = "Sostenibilidad financiera, responsabilidad y transparencia.";
 choices[17][2] = "Plurianualidad, lealtad institucional y eficiencia en la asignaci&oacute;n de los recursos p&uacute;blicos";
 choices[17][3] = "Responsabilidad, sostenibilidad financiera y lealtad institucional.";
 answers[17] = choices[17][3];
 units[17] = "10";
 comments[17] = "Id Pregunta: 506. PRESUPUESTOS GENERALES";


//  Id pregunta: 288 Año de creación de pregunta: 2016
 questions[18]= "19)  Cu&aacute;l no es uno de los pilares que cimientan el Plan de Acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[18]= new Array();
 choices[18][0] = "Configuraci&oacute;n de un marco que habilite la movilidad transfronteriza mediante los servicios p&uacute;blicos digitales;";
 choices[18][1] = "Facilitar la interacci&oacute;n digital con ciudadanos y empresas mediante AA.PP. abiertas y flexibles que impliquen a los actores interesados en el dise&ntilde;o de pol&iacute;ticas y servicios de una forma colaborativa;";
 choices[18][2] = "Sociedad digital integradora, donde los ciudadanos tengan las cualificaciones adecuadas para aprovechar las oportunidades ofrecidas por Internet.";
 choices[18][3] = "Puesta a disposici&oacute;n de habilitadores y facilitadores claves, servicios y activos reutilizables.";
 answers[18] = choices[18][2];
 units[18] = "5";
 comments[18] = "Id Pregunta: 288. UNION EUROPEA";


//  Id pregunta: 377 Año de creación de pregunta: 2016
 questions[19]= "20)  Es un elemento caracter&iacute;stico de la naturaleza jur&iacute;dica de la Uni&oacute;n Europea:";
 choices[19]= new Array();
 choices[19][0] = "Tener una estructura institucional.";
 choices[19][1] = "El establecimiento de un Ordenamiento jur&iacute;dico propio.";
 choices[19][2] = "La transferencia de competencias a las instituciones comunitarias.";
 choices[19][3] = "Todas las respuestas son correctas.";
 answers[19] = choices[19][3];
 units[19] = "5";
 comments[19] = "Id Pregunta: 377. UNION EUROPEA";


//  Id pregunta: 48 Año de creación de pregunta: 2016
 questions[20]= "21)  El Reglamento (UE) 910/2014 del Parlamento Europeo y del Consejo relativo a la identificaci&oacute;n electr&oacute;nica y los servicios de confianza para las transacciones electr&oacute;nicas en el mercado interior establece:";
 choices[20]= new Array();
 choices[20][0] = "La norma reguladora de los certificados de sede electr&oacute;nica en la Uni&oacute;n Europea.";
 choices[20][1] = "Cinco a&ntilde;os como el periodo m&aacute;ximo de vigencia de los certificados electr&oacute;nicos.";
 choices[20][2] = "La plena prohibici&oacute;n del uso de seud&oacute;nimos en el uso de las transacciones electr&oacute;nicas.";
 choices[20][3] = "La regulaci&oacute;n del certificado de sello electr&oacute;nico y su uso en los servicios p&uacute;blicos.";
 answers[20] = choices[20][3];
 units[20] = "77";
 comments[20] = "Id Pregunta: 48. AGE A1 2015";


//  Id pregunta: 615 Año de creación de pregunta: 2016
 questions[21]= "22)  El establecimiento de una conexi&oacute;n mediante el protocolo TCP, b&aacute;sicamente se realiza de la siguiente manera:";
 choices[21]= new Array();
 choices[21][0] = "Emisor: env&iacute;a SYN. Receptor: env&iacute;a SYN+ACK. Emisor: env&iacute;a ACK.";
 choices[21][1] = "Emisor: env&iacute;a ACK. Receptor: env&iacute;a ACK+SYN. Emisor: env&iacute;a SYN.";
 choices[21][2] = "Emisor: env&iacute;a SYN. Receptor: env&iacute;a ACK.";
 choices[21][3] = "Emisor: env&iacute;a ACK. Receptor: env&iacute;a SYN.";
 answers[21] = choices[21][0];
 units[21] = "109";
 comments[21] = "Id Pregunta: 615. Junta de Extremadura A1 2015";


//  Id pregunta: 5 Año de creación de pregunta: 2016
 questions[22]= "23)  Se&ntilde;ale cu&aacute;l de los siguientes NO es uno de los principios de COBIT v5:";
 choices[22]= new Array();
 choices[22][0] = "Satisfacer las necesidades de las partes interesadas.";
 choices[22][1] = "Cubrir las necesidades del departamento de tecnolog&iacute;as de la informaci&oacute;n.";
 choices[22][2] = "Habilitar un enfoque hol&iacute;stico.";
 choices[22][3] = "Separar el gobierno de la gesti&oacute;n.";
 answers[22] = choices[22][1];
 units[22] = "101";
 comments[22] = "Id Pregunta: 5. AGE A1 2015";


//  Id pregunta: 763 Año de creación de pregunta: 2016
 questions[23]= "24)  Las Administraciones P&uacute;blicas que, en el ejercicio de sus respectivas competencias, establezcan medidas que limiten el ejercicio de derechos individuales o colectivos o exijan el cumplimiento de requisitos para el desarrollo de una actividad, deber&aacute;n (se&ntilde;ala la incorrecta):";
 choices[23]= new Array();
 choices[23][0] = "aplicar el principio de proporcionalidad y elegir la medida menos restrictiva";
 choices[23][1] = "motivar su necesidad para la protecci&oacute;n del inter&eacute;s p&uacute;blico";
 choices[23][2] = "justificar su adecuaci&oacute;n para lograr los fines que se persiguen, evitando en la medida de lo posible que se produzcan diferencias de trato discriminatorias";
 choices[23][3] = "evaluar peri&oacute;dicamente los efectos y resultados obtenidos";
 answers[23] = choices[23][2];
 units[23] = "4, 7, 8, 9";
 comments[23] = "Id Pregunta: 763. Ley 40/2015";


//  Id pregunta: 784 Año de creación de pregunta: 2016
 questions[24]= "25)  Los estatutos de los Organismos p&uacute;blicos determinar&aacute;n sus respectivos:";
 choices[24]= new Array();
 choices[24][0] = "&oacute;rganos superiores";
 choices[24][1] = "&oacute;rganos directivos";
 choices[24][2] = "&oacute;rganos superiores y directivos";
 choices[24][3] = "ninguna es correcta";
 answers[24] = choices[24][1];
 units[24] = "4, 7, 8, 9";
 comments[24] = "Id Pregunta: 784. Ley 40/2015";


//  Id pregunta: 374 Año de creación de pregunta: 2016
 questions[25]= "26)  Las instituciones de la Uni&oacute;n Europea son:";
 choices[25]= new Array();
 choices[25][0] = "El Consejo, la Comisi&oacute;n, el Parlamento y el Tribunal de Justicia.";
 choices[25][1] = "El Consejo, el Parlamento y el Tribunal de Justicia.";
 choices[25][2] = "El Consejo, el Parlamento y la Comisi&oacute;n.";
 choices[25][3] = "El Consejo, la Comisi&oacute;n, el Parlamento Europeo, el Tribunal de Justicia y el Tribunal de Cuentas.";
 answers[25] = choices[25][3];
 units[25] = "5";
 comments[25] = "Id Pregunta: 374. UNION EUROPEA";


//  Id pregunta: 305 Año de creación de pregunta: 2016
 questions[26]= "27)  Indique en donde tiene su sede de la Comisi&oacute;n Europea:";
 choices[26]= new Array();
 choices[26][0] = "Estrasburgo.";
 choices[26][1] = "Bruselas.";
 choices[26][2] = "Luxemburgo.";
 choices[26][3] = "Par&iacute;s.";
 answers[26] = choices[26][1];
 units[26] = "5";
 comments[26] = "Id Pregunta: 305. UNION EUROPEA";


//  Id pregunta: 564 Año de creación de pregunta: 2016
 questions[27]= "28)  La &quot;Poblaci&oacute;n Activa&quot; que tiene en cuenta la Encuesta de Poblaci&oacute;n Activa (EPA), incluye:";
 choices[27]= new Array();
 choices[27][0] = "Los ocupados y los parados activos";
 choices[27][1] = "S&oacute;lo los ocupados";
 choices[27][2] = "Los ocupados y los inactivos";
 choices[27][3] = "Los que han trabajado en los &uacute;ltimos 6 meses";
 answers[27] = choices[27][0];
 units[27] = "12";
 comments[27] = "Id Pregunta: 564. Modelo econ&oacute;mico";


//  Id pregunta: 296 Año de creación de pregunta: 2016
 questions[28]= "29)  Indique a qui&eacute;n corresponde la funci&oacute;n de adoptar las iniciativas de la programaci&oacute;n anual y plurianual de la Uni&oacute;n Europea con el fin de alcanzar acuerdos interinstitucionales:";
 choices[28]= new Array();
 choices[28][0] = "Al Consejo Europeo.";
 choices[28][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[28][2] = "A la Comisi&oacute;n Europea.";
 choices[28][3] = "Al Parlamento Europeo.";
 answers[28] = choices[28][2];
 units[28] = "5";
 comments[28] = "Id Pregunta: 296. UNION EUROPEA";


//  Id pregunta: 512 Año de creación de pregunta: 2016
 questions[29]= "30)  Podr&aacute;n establecerse especialidades del procedimiento referidas a los &oacute;rganos competentes, plazos propios del concreto procedimiento por raz&oacute;n de la materia, formas de iniciaci&oacute;n y terminaci&oacute;n, publicaci&oacute;n e informes a recabar:";
 choices[29]= new Array();
 choices[29][0] = "solo mediante ley";
 choices[29][1] = "reglamentariamente";
 choices[29][2] = "mediante ley o reglamentariamente";
 choices[29][3] = "ninguna es correcta";
 answers[29] = choices[29][1];
 units[29] = "7";
 comments[29] = "Id Pregunta: 512. LEY 39/2015";


//  Id pregunta: 20 Año de creación de pregunta: 2016
 questions[30]= "31)  Con respecto al &aacute;mbito objetivo de aplicaci&oacute;n de la Ley 37/2007, de 16 de noviembre, sobre reutilizaci&oacute;n de la informaci&oacute;n del sector p&uacute;blico:";
 choices[30]= new Array();
 choices[30][0] = "Abarca el intercambio de documentos entre Administraciones y organismos del sector p&uacute;blico en el ejercicio de las funciones p&uacute;blicas que tengan atribuidas.";
 choices[30][1] = "Ser&aacute; aplicable incluso sobre los documentos que obran en las Administraciones y organismos del sector p&uacute;blico para finalidades ajenas a sus funciones de servicio p&uacute;blico.";
 choices[30][2] = "No afecta a la existencia de derechos de propiedad intelectual de las Administraciones y organismos del sector p&uacute;blico ni a su posesi&oacute;n por &eacute;stos.";
 choices[30][3] = "Fija la prevalencia del derecho fundamental a la protecci&oacute;n de datos de car&aacute;cter personal, a&uacute;n cuando se apliquen medidas de disociaci&oacute;n de datos.";
 answers[30] = choices[30][2];
 units[30] = "27";
 comments[30] = "Id Pregunta: 20. AGE A1 2015";


//  Id pregunta: 18 Año de creación de pregunta: 2016
 questions[31]= "32)  Indique en qu&eacute; capa del modelo OSI se establece la encriptaci&oacute;n:";
 choices[31]= new Array();
 choices[31][0] = "Aplicaci&oacute;n";
 choices[31][1] = "Sesi&oacute;n";
 choices[31][2] = "Presentaci&oacute;n";
 choices[31][3] = "Transporte";
 answers[31] = choices[31][2];
 units[31] = "105";
 comments[31] = "Id Pregunta: 18. AGE A1 2015";


//  Id pregunta: 440 Año de creación de pregunta: 2016
 questions[32]= "33)  Respecto al Sistema de Informaci&oacute;n Administrativa, se&ntilde;ale la respuesta falsa:";
 choices[32]= new Array();
 choices[32][0] = "Contiene la relaci&oacute;n de procedimientos y servicios de la AGE, y de todas las administraciones participantes.";
 choices[32][1] = "Cumple para la AGE el requisito establecido en el art&iacute;culo 9 del Esquema Nacional de Interoperabilidad, que obliga a las Administraciones p&uacute;blicas a mantener actualizado un Inventario de Informaci&oacute;n Administrativa.";
 choices[32][2] = "SIA est&aacute; dise&ntilde;ado para permitir la administraci&oacute;n distribuida y la actualizaci&oacute;n corresponsable por todas las Administraciones participantes, mediante una aplicaci&oacute;n web.";
 choices[32][3] = "Los usuarios son gestionados por una red de responsables de cada Departamento.";
 answers[32] = choices[32][2];
 units[32] = "43";
 comments[32] = "Id Pregunta: 440. SERVICIOS COMUNES";


//  Id pregunta: 445 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Cu&aacute;l de los siguientes datos NO es obligatorio que figure en la realizaci&oacute;n de una inscripci&oacute;n en el Registro electr&oacute;nico de Apoderamientos?";
 choices[33]= new Array();
 choices[33][0] = "Nombre y apellidos, denominaci&oacute;n o raz&oacute;n social y NIF del poderante.";
 choices[33][1] = "Per&iacute;odo de vigencia de los tr&aacute;mites objeto de apoderamiento.";
 choices[33][2] = "Fecha de otorgamiento.";
 choices[33][3] = "N&uacute;mero de referencia del alta y fecha de alta en el Registro.";
 answers[33] = choices[33][1];
 units[33] = "43";
 comments[33] = "Id Pregunta: 445. SERVICIOS COMUNES";


//  Id pregunta: 614 Año de creación de pregunta: 2016
 questions[34]= "35)  Dada la m&aacute;scara de red 255.255.240.0, &iquest;a qu&eacute; red pertenece la direcci&oacute;n IP 192.228.17.15?";
 choices[34]= new Array();
 choices[34][0] = "192.228.0.0";
 choices[34][1] = "192.228.8.0";
 choices[34][2] = "192.228.16.0";
 choices[34][3] = "192.228.17.0";
 answers[34] = choices[34][2];
 units[34] = "109";
 comments[34] = "Id Pregunta: 614. Junta de Extremadura A1 2015";


//  Id pregunta: 404 Año de creación de pregunta: 2016
 questions[35]= "36)  La igualdad como principio fundamental en la UE, entra en vigor con:";
 choices[35]= new Array();
 choices[35][0] = "El Tratado de Roma, 1957.";
 choices[35][1] = "El Acta &Uacute;nica Europea.";
 choices[35][2] = "El Tratado de &Aacute;msterdam, 1997.";
 choices[35][3] = "Ninguna es correcta.";
 answers[35] = choices[35][2];
 units[35] = "14";
 comments[35] = "Id Pregunta: 404. POLITICAS DE IGUALDAD";


//  Id pregunta: 490 Año de creación de pregunta: 2016
 questions[36]= "37)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la obligaci&oacute;n de pagar los intereses de la Deuda del Estado y la de devolver los capitales llamados a reembolso, contados respectivamente a partir del vencimiento de los intereses y del d&iacute;a del llamamiento a reembolso prescribir&aacute;:";
 choices[36]= new Array();
 choices[36][0] = "A los cinco a&ntilde;os.";
 choices[36][1] = "A los dos a&ntilde;os.";
 choices[36][2] = "A los tres a&ntilde;os.";
 choices[36][3] = "A los cuatro a&ntilde;os.";
 answers[36] = choices[36][0];
 units[36] = "10";
 comments[36] = "Id Pregunta: 490. PRESUPUESTOS GENERALES";


//  Id pregunta: 370 Año de creación de pregunta: 2016
 questions[37]= "38)  Establecer la interpretaci&oacute;n adecuada de los Tratados de la Uni&oacute;n Europea y las normas de derecho derivado es el objeto de:";
 choices[37]= new Array();
 choices[37][0] = "Un recurso de incumplimiento.";
 choices[37][1] = "Recurso de carencia.";
 choices[37][2] = "Cuesti&oacute;n o incidente prejudicial.";
 choices[37][3] = "Ninguna es correcta.";
 answers[37] = choices[37][2];
 units[37] = "5";
 comments[37] = "Id Pregunta: 370. UNION EUROPEA";


//  Id pregunta: 446 Año de creación de pregunta: 2016
 questions[38]= "39)  Dentro de la l&oacute;gica presupuestaria, los ingresos tienen car&aacute;cter...";
 choices[38]= new Array();
 choices[38][0] = "Ejecutivo";
 choices[38][1] = "Limitativo";
 choices[38][2] = "Estimativo";
 choices[38][3] = "Progresivo";
 answers[38] = choices[38][2];
 units[38] = "10";
 comments[38] = "Id Pregunta: 446. PRESUPUESTOS GENERALES";


//  Id pregunta: 265 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Qui&eacute;n debe refrendar el nombramiento del Presidente del Consejo General del Poder Judicial?:";
 choices[39]= new Array();
 choices[39][0] = "El Presidente del Senado";
 choices[39][1] = "No es un acto Real, por tanto no conlleva refrendo";
 choices[39][2] = "El Presidente del Gobierno";
 choices[39][3] = "El Presidente de las Cortes Generales";
 answers[39] = choices[39][2];
 units[39] = "1";
 comments[39] = "Id Pregunta: 265. CONSTITUCION1978";


//  Id pregunta: 722 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;Cu&aacute;l es la principal desventaja de sprints m&aacute;s largos?";
 choices[40]= new Array();
 choices[40][0] = "Permite reaccionar al equipo mejor ante imprevistos";
 choices[40][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[40][2] = "Se reduce el n&uacute;mero de reuniones de sprint";
 choices[40][3] = "Se puede desarrollar algo diferente a lo requerido y obtener el feedback del cliente m&aacute;s tarde.";
 answers[40] = choices[40][3];
 units[40] = "34, 84";
 comments[40] = "Id Pregunta: 722. Metodologias &aacute;giles";


//  Id pregunta: 740 Año de creación de pregunta: 2016
 questions[41]= "42)  Uno de los objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[41]= new Array();
 choices[41][0] = "Proveer de manera compartida servicios comunes";
 choices[41][1] = "El canal digital ha de ser el medio preferido por ciudadanos y empresas para relacionarse con la Administraci&oacute;n.";
 choices[41][2] = "Orientaci&oacute;n al usuario del servicio.";
 choices[41][3] = "Transparencia";
 answers[41] = choices[41][1];
 units[41] = "28";
 comments[41] = "Id Pregunta: 740. Estrategia TIC";


//  Id pregunta: 291 Año de creación de pregunta: 2016
 questions[42]= "43)  La duraci&oacute;n del mandato de los miembros del Tribunal de Cuentas de la Uni&oacute;n Europea es de:";
 choices[42]= new Array();
 choices[42][0] = "Tres a&ntilde;os.";
 choices[42][1] = "Dos a&ntilde;os y medio.";
 choices[42][2] = "Cinco a&ntilde;os.";
 choices[42][3] = "Seis a&ntilde;os.";
 answers[42] = choices[42][3];
 units[42] = "5";
 comments[42] = "Id Pregunta: 291. UNION EUROPEA";


//  Id pregunta: 153 Año de creación de pregunta: 2016
 questions[43]= "44)  Se entiende por documentos p&uacute;blicos administrativos";
 choices[43]= new Array();
 choices[43][0] = "los v&aacute;lidamente emitidos por los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[43][1] = "los remitidos por personas f&iacute;sicas o jur&iacute;dicas a los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[43][2] = "a y b son correctas";
 choices[43][3] = "a y b son incorrectas";
 answers[43] = choices[43][0];
 units[43] = "7";
 comments[43] = "Id Pregunta: 153. Ley 39/2015, Art&iacute;culo 26";


//  Id pregunta: 789 Año de creación de pregunta: 2016
 questions[44]= "45)  Respecto a las unidades administrativas:";
 choices[44]= new Array();
 choices[44][0] = "pueden existir unidades administrativas complejas, que agrupen dos o m&aacute;s unidades mayores";
 choices[44][1] = "los jefes de las unidades administrativas son responsables del correcto funcionamiento de la unidad y de la adecuada ejecuci&oacute;n de las tareas asignadas a la misma";
 choices[44][2] = "las unidades administrativas se establecen mediante las relaciones de puestos de trabajo, que se aprobar&aacute;n de acuerdo con su regulaci&oacute;n espec&iacute;fica, y no se integran en ning&uacute;n &oacute;rgano determinado";
 choices[44][3] = "ninguna es correcta";
 answers[44] = choices[44][1];
 units[44] = "4, 7, 8, 9";
 comments[44] = "Id Pregunta: 789. Ley 40/2015";


//  Id pregunta: 324 Año de creación de pregunta: 2016
 questions[45]= "46)  El Presidente del Tribunal de Justicia de la Uni&oacute;n Europea es nombrado para un per&iacute;odo de:";
 choices[45]= new Array();
 choices[45][0] = "Tres a&ntilde;os.";
 choices[45][1] = "Cuatro a&ntilde;os.";
 choices[45][2] = "Cinco a&ntilde;os.";
 choices[45][3] = "Seis a&ntilde;os.";
 answers[45] = choices[45][0];
 units[45] = "5";
 comments[45] = "Id Pregunta: 324. UNION EUROPEA";


//  Id pregunta: 149 Año de creación de pregunta: 2016
 questions[46]= "47)  Seg&uacute;n establece la Ley 39/2015, las Administraciones P&uacute;blicas har&aacute;n p&uacute;blico un Plan Normativo que:";
 choices[46]= new Array();
 choices[46][0] = "Contendr&aacute; las iniciativas legales y reglamentarias que hayan sido aprobadas en el a&ntilde;o en curso y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[46][1] = "Contendr&aacute; exclusivamente las iniciativas legales que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[46][2] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[46][3] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Bolet&iacute;n Oficial de la Administraci&oacute;n P&uacute;blica correspondiente";
 answers[46] = choices[46][2];
 units[46] = "7";
 comments[46] = "Id Pregunta: 149. Ley 39/2015, Art&iacute;culo 132";


//  Id pregunta: 801 Año de creación de pregunta: 2016
 questions[47]= "48)  Las Delegaciones del Gobierno tendr&aacute;n su sede en:";
 choices[47]= new Array();
 choices[47][0] = "la localidad elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[47][1] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[47][2] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[47][3] = "la localidad donde elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 answers[47] = choices[47][2];
 units[47] = "4, 7, 8, 9";
 comments[47] = "Id Pregunta: 801. Ley 40/2015";


//  Id pregunta: 492 Año de creación de pregunta: 2016
 questions[48]= "49)  El R&eacute;gimen Jur&iacute;dico de la Deuda del Estado se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[48]= new Array();
 choices[48][0] = "T&iacute;tulo V, Cap&iacute;tulo II, Secci&oacute;n 4.";
 choices[48][1] = "T&iacute;tulo V, Cap&iacute;tulo I, Secci&oacute;n 2.";
 choices[48][2] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[48][3] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[48] = choices[48][2];
 units[48] = "10";
 comments[48] = "Id Pregunta: 492. PRESUPUESTOS GENERALES";


//  Id pregunta: 611 Año de creación de pregunta: 2016
 questions[49]= "50)  Una de las caracter&iacute;sticas de seguridad en SQL Server 2008 es el cifrado transparente de datos. Se&ntilde;ala la afirmaci&oacute;n correcta:";
 choices[49]= new Array();
 choices[49][0] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de registro.";
 choices[49][1] = "SQL Server ofrece la capacidad de buscar dentro de los datos cifrados.";
 choices[49][2] = "Para trabajar con datos cifrados utilizando esta caracter&iacute;stica hay que introducir cambios en las aplicaciones.";
 choices[49][3] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de datos.";
 answers[49] = choices[49][1];
 units[49] = "63";
 comments[49] = "Id Pregunta: 611. Junta de Extremadura A1 2015";


//  Id pregunta: 109 Año de creación de pregunta: 2016
 questions[50]= "51)  Big Data:";
 choices[50]= new Array();
 choices[50][0] = "Solo aplica a datos generados m&aacute;quina a m&aacute;quina (M2M)";
 choices[50][1] = "No puede emplearse para tratar datos no estructurados";
 choices[50][2] = "Suele utilizar tecnolog&iacute;as relacionales a la hora de analizar los datos";
 choices[50][3] = "Ninguna de las anteriores";
 answers[50] = choices[50][3];
 units[50] = "73";
 comments[50] = "Id Pregunta: 109. ";


//  Id pregunta: 573 Año de creación de pregunta: 2016
 questions[51]= "52)  Si queremos dise&ntilde;ar un enlace de 10 Gbps. &iquest;qu&eacute; medio de transmisi&oacute;n nos permite alcanzar la m&aacute;xima longitud del enlace?";
 choices[51]= new Array();
 choices[51][0] = "Cableado de cobre de categor&iacute;a 7.";
 choices[51][1] = "Fibra &oacute;ptica monomodo tipo OS2.";
 choices[51][2] = "Fibra &oacute;ptica multimodo tipo OM3.";
 choices[51][3] = "Fibra &oacute;ptica multimodo tipo OM4.";
 answers[51] = choices[51][1];
 units[51] = "106";
 comments[51] = "Id Pregunta: 573. Tema 106. TAI 2016.";


//  Id pregunta: 673 Año de creación de pregunta: 2016
 questions[52]= "53)  Se&ntilde;ale cual de los siguientes factores no contribuye a la sostenibilidad del sistema de pensiones:";
 choices[52]= new Array();
 choices[52][0] = "El aumento de la esperanza de vida.";
 choices[52][1] = "La mejora del &iacute;ndice de natalidad.";
 choices[52][2] = "La reducci&oacute;n del desempleo.";
 choices[52][3] = "El incremento de la edad de jubilaci&oacute;n.";
 answers[52] = choices[52][0];
 units[52] = "14";
 comments[52] = "Id Pregunta: 673. Estructura social";


//  Id pregunta: 613 Año de creación de pregunta: 2016
 questions[53]= "54)  El Modelo de Referencia de Interconexi&oacute;n de Sistemas Abiertos (OSI) consta de siete niveles. Se&ntilde;ala cu&aacute;l de los principios que se aplicaron para llevar a cabo esta divisi&oacute;n es falso:";
 choices[53]= new Array();
 choices[53][0] = "No se deben crear demasiados niveles de manera que la tarea de describir e integrar &eacute;stos fuera m&aacute;s dif&iacute;cil de lo necesario.";
 choices[53][1] = "Aunque se requiera un nivel de abstracci&oacute;n diferente en el manejo de los datos, debe usarse un nivel ya existente.";
 choices[53][2] = "Cada nivel debe realizar unas funciones bien definidas.";
 choices[53][3] = "Crear para cada nivel interfases con el nivel superior e inferior &uacute;nicamente.";
 answers[53] = choices[53][1];
 units[53] = "48";
 comments[53] = "Id Pregunta: 613. Junta de Extremadura A1 2015";


//  Id pregunta: 173 Año de creación de pregunta: 2016
 questions[54]= "55)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la cuesti&oacute;n de confianza planteada por el Presidente del Gobierno, se entender&aacute; otorgada cuando vote a su favor la mayor&iacute;a:";
 choices[54]= new Array();
 choices[54][0] = "absoluta de las Cortes Generales.";
 choices[54][1] = "absoluta del Congreso de los Diputados.";
 choices[54][2] = "simple de las Cortes Generales.";
 choices[54][3] = "simple del Congreso de los Diputados.";
 answers[54] = choices[54][3];
 units[54] = "1";
 comments[54] = "Id Pregunta: 173. CONSTITUCION1978";


//  Id pregunta: 313 Año de creación de pregunta: 2016
 questions[55]= "56)  Indique qui&eacute;n propone al candidato para el cargo de Presidente de la Comisi&oacute;n Europea:";
 choices[55]= new Array();
 choices[55][0] = "El Consejo Europeo.";
 choices[55][1] = "El Consejo de la Uni&oacute;n Europea.";
 choices[55][2] = "Los miembros de la Comisi&oacute;n Europea.";
 choices[55][3] = "El Parlamento Europeo.";
 answers[55] = choices[55][0];
 units[55] = "5";
 comments[55] = "Id Pregunta: 313. UNION EUROPEA";


//  Id pregunta: 643 Año de creación de pregunta: 2016
 questions[56]= "57)  La generalizaci&oacute;n es el tipo de interrelaci&oacute;n que existe entre un tipo de entidad, supertipo, y los tipos de entidad m&aacute;s espec&iacute;ficos (subtipos) que dependen de &eacute;l. Las cardinalidades m&aacute;ximas y m&iacute;nimas son siempre:";
 choices[56]= new Array();
 choices[56][0] = "(0,1) en el supertipo y (0,1) en los subtipos.";
 choices[56][1] = "(1,1) en el supertipo y (1,1) en los subtipos.";
 choices[56][2] = "(1,1) en el supertipo y (0,1) en los subtipos.";
 choices[56][3] = "(0,1) en el supertipo y (1,1) en los subtipos.";
 answers[56] = choices[56][2];
 units[56] = "85";
 comments[56] = "Id Pregunta: 643. Junta de Extremadura A1 2015";


//  Id pregunta: 597 Año de creación de pregunta: 2016
 questions[57]= "58)  La pol&iacute;tica de seguridad de alto nivel de la Organizaci&oacute;n:";
 choices[57]= new Array();
 choices[57][0] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, sin entrar en detalles acerca del COMO.";
 choices[57][1] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer y COMO se debe implementar.";
 choices[57][2] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 choices[57][3] = "Debe describir QUE se intenta proteger, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 answers[57] = choices[57][0];
 units[57] = "45";
 comments[57] = "Id Pregunta: 597. Junta de Extremadura A1 2015";


//  Id pregunta: 76 Año de creación de pregunta: 2016
 questions[58]= "59)  El proceso de auditor&iacute;a de sistemas de informaci&oacute;n se considera como un proceso:";
 choices[58]= new Array();
 choices[58][0] = "Estrat&eacute;gico";
 choices[58][1] = "Operativo";
 choices[58][2] = "T&aacute;ctico";
 choices[58][3] = "Tecnol&oacute;gico";
 answers[58] = choices[58][0];
 units[58] = "36";
 comments[58] = "Id Pregunta: 76. AGE A1 2015";


//  Id pregunta: 483 Año de creación de pregunta: 2016
 questions[59]= "60)  La Ley 47/2003, de 26 de noviembre, General Presupuestaria se encuentra formada por:";
 choices[59]= new Array();
 choices[59][0] = "180 art&iacute;culos.";
 choices[59][1] = "182 art&iacute;culos.";
 choices[59][2] = "185 art&iacute;culos.";
 choices[59][3] = "190 art&iacute;culos.";
 answers[59] = choices[59][1];
 units[59] = "10";
 comments[59] = "Id Pregunta: 483. PRESUPUESTOS GENERALES";


//  Id pregunta: 75 Año de creación de pregunta: 2016
 questions[60]= "61)  Las transferencias internacionales de datos de car&aacute;cter personal:";
 choices[60]= new Array();
 choices[60][0] = "Se regulan en los art&iacute;culos 33 y 34 de la Ley Org&aacute;nica 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal y en el T&iacute;tulo VI del Real Decreto 1720/2007 por el que se aprueba el Reglamento de desarrollo de la Ley Org&aacute;nica 15/1999.";
 choices[60][1] = "Una transferencia internacional de datos, es un tratamiento de datos que supone una transmisi&oacute;n de los mismos fuera del territorio de la Uni&oacute;n Europea (UE).";
 choices[60][2] = "La Decisi&oacute;n de la Comisi&oacute;n 2000/520/CE, con arreglo a la Directiva 95/46/CE, permite actualmente realizar transferencias de datos a Estados Unidos si se cumplen los principios del acuerdo de Puerto Seguro.";
 choices[60][3] = "Precisan, en todo caso, la autorizaci&oacute;n previa de la Direcci&oacute;n de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[60] = choices[60][0];
 units[60] = "35";
 comments[60] = "Id Pregunta: 75. AGE A1 2015";


//  Id pregunta: 694 Año de creación de pregunta: 2016
 questions[61]= "62)  De las siguientes cu&aacute;l NO es una ventaja de la integraci&oacute;n continua:";
 choices[61]= new Array();
 choices[61][0] = "Ejecuci&oacute;n inmediata de las pruebas de aceptaci&oacute;n.";
 choices[61][1] = "Monitorizaci&oacute;n continua de las m&eacute;tricas de calidad del proyecto.";
 choices[61][2] = "Los desarrolladores pueden detectar y solucionar problemas de integraci&oacute;n de forma continua, evitando el caos de &uacute;ltima hora cuando se acercan las fechas de entrega.";
 choices[61][3] = "Disponibilidad constante de una versi&oacute;n para pruebas, demos o lanzamientos anticipados.";
 answers[61] = choices[61][0];
 units[61] = "92";
 comments[61] = "Id Pregunta: 694. INTEGRACION CONTINUA";


//  Id pregunta: 832 Año de creación de pregunta: 2016
 questions[62]= "63)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Los &oacute;rganos colegiados de la Administraci&oacute;n General del Estado y de sus Organismos p&uacute;blicos, por su composici&oacute;n, se clasifican en:";
 choices[62]= new Array();
 choices[62][0] = "&Oacute;rganos colegiados interministeriales, si sus miembros proceden de diferentes Ministerios.";
 choices[62][1] = "&Oacute;rganos colegiados ministeriales, si sus componentes proceden de los &oacute;rganos del mismo Ministerio.";
 choices[62][2] = "A y B son correctas.";
 choices[62][3] = "A y B son incorrectas.";
 answers[62] = choices[62][2];
 units[62] = "4, 7, 8, 9";
 comments[62] = "Id Pregunta: 832. Ley 40/2015";


//  Id pregunta: 691 Año de creación de pregunta: 2016
 questions[63]= "64)  Se&ntilde;ale cu&aacute;l de los siguientes no es uno de los contenidos de los certificados cualificados de firma electr&oacute;nica seg&uacute;n el Reglamento (UE) 910/2014";
 choices[63]= new Array();
 choices[63][0] = "El nombre del firmante o un seudo&#769;nimo";
 choices[63][1] = "Los datos de validacio&#769;n de la firma electro&#769;nica";
 choices[63][2] = "La firma electro&#769;nica cualificada o el sello electro&#769;nico cualificado del prestador de servicios de confianza expedidor";
 choices[63][3] = "La localizacio&#769;n de los servicios que se pueden utilizar para consultar el estado de validez del certificado";
 answers[63] = choices[63][2];
 units[63] = "77";
 comments[63] = "Id Pregunta: 691. Anexo I del Reglamento 910/2014";


//  Id pregunta: 379 Año de creación de pregunta: 2016
 questions[64]= "65)  Seg&uacute;n recoge la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, &iquest;con qu&eacute; frecuencia debe elaborar el Gobierno un informe sobre el conjunto de actuaciones en relaci&oacute;n con le efectividad del principio de igualdad entre mujeres y hombres?";
 choices[64]= new Array();
 choices[64][0] = "Anual.";
 choices[64][1] = "Semestral.";
 choices[64][2] = "Seg&uacute;n se determine reglamentariamente.";
 choices[64][3] = "Bienal.";
 answers[64] = choices[64][2];
 units[64] = "14";
 comments[64] = "Id Pregunta: 379. POLITICAS DE IGUALDAD";


//  Id pregunta: 224 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[65]= new Array();
 choices[65][0] = "Art&iacute;culo 16.2.";
 choices[65][1] = "Art&iacute;culo 17.1.";
 choices[65][2] = "Art&iacute;culo 18.1.";
 choices[65][3] = "Art&iacute;culo 18.2.";
 answers[65] = choices[65][2];
 units[65] = "1";
 comments[65] = "Id Pregunta: 224. CONSTITUCION1978";


//  Id pregunta: 118 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;C&oacute;mo se concretan anualmente los objetivos de la Estrategia Espa&ntilde;ola de Activaci&oacute;n para el Empleo?";
 choices[66]= new Array();
 choices[66][0] = "Mediante &Oacute;rdenes Ministeriales del Ministerio de Empleo y Seguridad Social";
 choices[66][1] = "Mediante Reales Decretos del Consejo de Ministros";
 choices[66][2] = "Mediante los Planes Anuales de Pol&iacute;tica de Empleo";
 choices[66][3] = "Mediante dictamen del Consejo General del Sistema Nacional de Empleo";
 answers[66] = choices[66][2];
 units[66] = "15";
 comments[66] = "Id Pregunta: 118. ";


//  Id pregunta: 652 Año de creación de pregunta: 2016
 questions[67]= "68)  Dentro del proceso de MapReduce &iquest;Que es el shuffle?";
 choices[67]= new Array();
 choices[67][0] = "Es un proceso de adaptaci&oacute;n de los datos antes de entrar en la etapa de Map";
 choices[67][1] = "Es un aplicativo dentro del ecosistema Hadoop que sirve para distribuir datos en el HDFS";
 choices[67][2] = "Es el proceso por el que los datos llegan de los mappers a los reducers";
 choices[67][3] = "Es un algoritmo de mineria de datos usado en Big Data";
 answers[67] = choices[67][2];
 units[67] = "73";
 comments[67] = "Id Pregunta: 652. ";


//  Id pregunta: 349 Año de creación de pregunta: 2016
 questions[68]= "69)  El Tratado de Par&iacute;s que crea la Comunidad Europea del Carb&oacute;n y del Acero entr&oacute; en vigor:";
 choices[68]= new Array();
 choices[68][0] = "El 23 de julio de 1952.";
 choices[68][1] = "El 18 de abril de 1951.";
 choices[68][2] = "El 16 de abril de 1948.";
 choices[68][3] = "d)Ninguna de las respuestas son correctas.";
 answers[68] = choices[68][0];
 units[68] = "5";
 comments[68] = "Id Pregunta: 349. UNION EUROPEA";


//  Id pregunta: 731 Año de creación de pregunta: 2016
 questions[69]= "70)  Cu&aacute;l de las siguientes reglas se corresponde a las reglas de la metodolog&iacute;a Kanban:";
 choices[69]= new Array();
 choices[69][0] = "Visualizar el trabajo o el flujo de trabajo. ";
 choices[69][1] = "Determinar el l&iacute;mite de trabajo en curso (Work in progress)";
 choices[69][2] = "Medir el tiempo en completar una tarea (Lead time)";
 choices[69][3] = "Todas las anteriores son reglas correspondientes a la metodolog&iacute;a Kanban.";
 answers[69] = choices[69][3];
 units[69] = "34, 84";
 comments[69] = "Id Pregunta: 731. Metodologias &aacute;giles";


//  Id pregunta: 452 Año de creación de pregunta: 2016
 questions[70]= "71)  En t&eacute;rminos familiares, podemos decir que desembocan en gastos...";
 choices[70]= new Array();
 choices[70][0] = "Los cr&eacute;ditos";
 choices[70][1] = "Las partidas presupuestarias";
 choices[70][2] = "Los derechos";
 choices[70][3] = "Las obligaciones";
 answers[70] = choices[70][3];
 units[70] = "10";
 comments[70] = "Id Pregunta: 452. PRESUPUESTOS GENERALES";


//  Id pregunta: 390 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre hombres y mujeres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[71]= new Array();
 choices[71][0] = "El Consejo Nacional de la Mujer.";
 choices[71][1] = "El Consejo de la Mujer.";
 choices[71][2] = "El Instituto de la Mujer.";
 choices[71][3] = "El Consejo de Participaci&oacute;n de la Mujer.";
 answers[71] = choices[71][3];
 units[71] = "14";
 comments[71] = "Id Pregunta: 390. POLITICAS DE IGUALDAD";


//  Id pregunta: 494 Año de creación de pregunta: 2016
 questions[72]= "73)  Seg&uacute;n la Ley General Presupuestaria, con car&aacute;cter excepcional podr&aacute;n generar cr&eacute;dito en el Presupuesto del ejercicio los ingresos realizados:";
 choices[72]= new Array();
 choices[72][0] = "Por reembolso de pr&eacute;stamos.";
 choices[72][1] = "Por la venta de bienes.";
 choices[72][2] = "En el &uacute;ltimo trimestre del ejercicio anterior.";
 choices[72][3] = "Por prestaci&oacute;n de servicios.";
 answers[72] = choices[72][2];
 units[72] = "10";
 comments[72] = "Id Pregunta: 494. PRESUPUESTOS GENERALES";


//  Id pregunta: 24 Año de creación de pregunta: 2016
 questions[73]= "74)  De acuerdo con la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, una de las funciones de la Comisi&oacute;n Nacional de los Mercados y la Competencia es:";
 choices[73]= new Array();
 choices[73][0] = "Gestionar en per&iacute;odo voluntario las tasas en materia de telecomunicaciones a que se refiere la presente Ley.";
 choices[73][1] = "Proponer al Gobierno la pol&iacute;tica a seguir para facilitar el desarrollo y la evoluci&oacute;n de las obligaciones de servicio p&uacute;blico.";
 choices[73][2] = "Gestionar el Registro de Operadores.";
 choices[73][3] = "Establecer el procedimiento para cuantificar los beneficios no monetarios obtenidos por los operadores encargados de la prestaci&oacute;n del servicio universal.";
 answers[73] = choices[73][3];
 units[73] = "121";
 comments[73] = "Id Pregunta: 24. AGE A1 2015";


//  Id pregunta: 65 Año de creación de pregunta: 2016
 questions[74]= "75)  Respecto a las arquitecturas de almacenamiento SAN Fibre Channel, indique la respuesta incorrecta:";
 choices[74]= new Array();
 choices[74][0] = "Cada equipo de la red se identifica de forma un&iacute;voca mediante una direcci&oacute;n de 64 bits.";
 choices[74][1] = "El SNS asigna los FCID y permite traducir de FCID a WWN.";
 choices[74][2] = "Los switches FC intercambian informaci&oacute;n de enrutado de tramas mediante un protocolo del tipo EGP adaptado a las redes FC.";
 choices[74][3] = "La se&ntilde;alizaci&oacute;n del canal de fibra puede funcionar sobre pares de cobre.";
 answers[74] = choices[74][2];
 units[74] = "53";
 comments[74] = "Id Pregunta: 65. AGE A1 2015";


