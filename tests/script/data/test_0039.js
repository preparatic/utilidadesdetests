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

//  Id pregunta: 172 Año de creación de pregunta: 2016
 questions[0]= "1)  La Constituci&oacute;n Espa&ntilde;ola reconoce el derecho de reuni&oacute;n:";
 choices[0]= new Array();
 choices[0][0] = "Pac&iacute;fica y sin armas pero con necesidad de autorizaci&oacute;n previa.";
 choices[0][1] = "En lugares de tr&aacute;nsito p&uacute;blico previa autorizaci&oacute;n de la autoridad.";
 choices[0][2] = "En los casos de reuniones en lugares de tr&aacute;nsito p&uacute;blico y manifestaciones se dar&aacute; comunicaci&oacute;n previa a la autoridad.";
 choices[0][3] = "No es preciso realizar ninguna actuaci&oacute;n.";
 answers[0] = choices[0][2];
 units[0] = "1";
 comments[0] = "Id Pregunta: 172. CONSTITUCION1978";


//  Id pregunta: 342 Año de creación de pregunta: 2016
 questions[1]= "2)  La moci&oacute;n de censura contra la Comisi&oacute;n existe desde:";
 choices[1]= new Array();
 choices[1][0] = "El Tratado de Maastrich.";
 choices[1][1] = "El Tratado de Amsterdam.";
 choices[1][2] = "El Tratado de Par&iacute;s.";
 choices[1][3] = "El Tratado de Roma.";
 answers[1] = choices[1][3];
 units[1] = "5";
 comments[1] = "Id Pregunta: 342. UNION EUROPEA";


//  Id pregunta: 109 Año de creación de pregunta: 2016
 questions[2]= "3)  Big Data:";
 choices[2]= new Array();
 choices[2][0] = "Solo aplica a datos generados m&aacute;quina a m&aacute;quina (M2M)";
 choices[2][1] = "No puede emplearse para tratar datos no estructurados";
 choices[2][2] = "Suele utilizar tecnolog&iacute;as relacionales a la hora de analizar los datos";
 choices[2][3] = "Ninguna de las anteriores";
 answers[2] = choices[2][3];
 units[2] = "73";
 comments[2] = "Id Pregunta: 109. ";


//  Id pregunta: 698 Año de creación de pregunta: 2016
 questions[3]= "4)  Se&ntilde;ale el que corresponde a un principio de integraci&oacute;n continua:";
 choices[3]= new Array();
 choices[3][0] = "Migraci&oacute;n manual y controlada a cada entorno de desarrollo";
 choices[3][1] = "Mantener un repositorio de c&oacute;digo.";
 choices[3][2] = "Reutilizaci&oacute;n de interfaces de usuario.";
 choices[3][3] = "Todos corresponden a principios de integraci&oacute;n continua.";
 answers[3] = choices[3][1];
 units[3] = "92";
 comments[3] = "Id Pregunta: 698. INTEGRACION CONTINUA";


//  Id pregunta: 648 Año de creación de pregunta: 2016
 questions[4]= "5)  En Itil v3 se diferencia entre la Gesti&oacute;n de la Cartera de Servicios y la Gesti&oacute;n del Cat&aacute;logo de Servicios ya que:";
 choices[4]= new Array();
 choices[4][0] = "La Cartera de Servicios contiene informaci&oacute;n sobre cada servicio y su estado.";
 choices[4][1] = "La Cartera de Servicios es un subconjunto del Cat&aacute;logo de Servicios.";
 choices[4][2] = "La Cartera de Servicios divide los servicios en componentes y contiene pol&iacute;ticas, directrices y responsabilidades , as&iacute; como precios, acuerdos de nivel de servicio y condiciones de entrega.";
 choices[4][3] = "Todas las respuestas son correctas.";
 answers[4] = choices[4][0];
 units[4] = "101";
 comments[4] = "Id Pregunta: 648. Junta de Extremadura A1 2015";


//  Id pregunta: 485 Año de creación de pregunta: 2016
 questions[5]= "6)  La Ley 47/2003, de 26 de noviembre, General Presupuestaria se encuentra formada por:";
 choices[5]= new Array();
 choices[5][0] = "180 art&iacute;culos.";
 choices[5][1] = "182 art&iacute;culos.";
 choices[5][2] = "185 art&iacute;culos.";
 choices[5][3] = "190 art&iacute;culos.";
 answers[5] = choices[5][1];
 units[5] = "10";
 comments[5] = "Id Pregunta: 485. PRESUPUESTOS GENERALES";


//  Id pregunta: 272 Año de creación de pregunta: 2016
 questions[6]= "7)  Respecto a SonarQube, se&ntilde;ale la FALSA";
 choices[6]= new Array();
 choices[6][0] = "Sirve para evaluar aspectos como la complejidad ciclom&aacute;tica del c&oacute;digo.";
 choices[6][1] = "Anteriormente se denominaba Sonar.";
 choices[6][2] = "Permite disponer de una matriz de dependencia entre objetos.";
 choices[6][3] = "Integra herramientas de medici&oacute;n de la calidad de c&oacute;digo como CPD, findbugs, PMD, checkstyle.";
 answers[6] = choices[6][2];
 units[6] = "92";
 comments[6] = "Id Pregunta: 272. INTEGRACION CONTINUA";


//  Id pregunta: 591 Año de creación de pregunta: 2016
 questions[7]= "8)  Son servicios declarados compartidos:";
 choices[7]= new Array();
 choices[7][0] = "Servicio unificado de telecomunicaciones y servicio de seguridad gestionada";
 choices[7][1] = "Servicio multicanal de atenci&oacute;n al ciudadano";
 choices[7][2] = "Servicio com&uacute;n de generaci&oacute;n y validaci&oacute;n de firmas electr&oacute;nicas";
 choices[7][3] = "Todos los anteriores";
 answers[7] = choices[7][3];
 units[7] = "19";
 comments[7] = "Id Pregunta: 591. Estrategia TIC";


//  Id pregunta: 643 Año de creación de pregunta: 2016
 questions[8]= "9)  La estructura de un Directorio Activo se basa en los siguientes conceptos:";
 choices[8]= new Array();
 choices[8][0] = "Directorios, Unidades f&iacute;sicas y Usuarios.";
 choices[8][1] = "Dominio, Unidad Organizativa, Grupos y Objetos.";
 choices[8][2] = "Unidades f&iacute;sicas, Unidades l&oacute;gicas y Directorios.";
 choices[8][3] = "Ficheros, Directorios, Particiones y Unidades.";
 answers[8] = choices[8][1];
 units[8] = "58";
 comments[8] = "Id Pregunta: 643. Junta de Extremadura A1 2015";


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


//  Id pregunta: 537 Año de creación de pregunta: 2016
 questions[10]= "11)  Dispondr&aacute;/n de un registro electr&oacute;nico general de apoderamientos:";
 choices[10]= new Array();
 choices[10][0] = "la Administraci&oacute;n General del Estado";
 choices[10][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[10][2] = "las Entidades Locales";
 choices[10][3] = "todas son correctas";
 answers[10] = choices[10][3];
 units[10] = "7";
 comments[10] = "Id Pregunta: 537. LEY 39/2015";


//  Id pregunta: 354 Año de creación de pregunta: 2016
 questions[11]= "12)  El Tribunal de Justicia Europeo est&aacute; compuesto por:";
 choices[11]= new Array();
 choices[11][0] = "Veinticinco Jueces y nueve Abogados Generales.";
 choices[11][1] = "Veintisiete Jueces y veintisiete Abogados Generales.";
 choices[11][2] = "Veintisiete Jueces y ocho Abogados Generales.";
 choices[11][3] = "Veinticinco Jueces y siete Abogados Generales.";
 answers[11] = choices[11][2];
 units[11] = "5";
 comments[11] = "Id Pregunta: 354. UNION EUROPEA";


//  Id pregunta: 595 Año de creación de pregunta: 2016
 questions[12]= "13)  A nivel departamental, &iquest;qui&eacute;n es el responsable de la coordinaci&oacute;n interna para llevar a cabo la transformaci&oacute;n digital?";
 choices[12]= new Array();
 choices[12][0] = "Las CMADs (Comisi&oacute;n Ministerial de Administraci&oacute;n Digital)";
 choices[12][1] = "La CETIC";
 choices[12][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[12][3] = "El MHFP";
 answers[12] = choices[12][0];
 units[12] = "19";
 comments[12] = "Id Pregunta: 595. Estrategia TIC";


//  Id pregunta: 738 Año de creación de pregunta: 2016
 questions[13]= "14)  Las iniciativas que se lancen al amparo del Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE se ce&ntilde;ir&aacute;n a:";
 choices[13]= new Array();
 choices[13][0] = "6 principios.";
 choices[13][1] = "7 principios.";
 choices[13][2] = "5 principios.";
 choices[13][3] = "6 directrices.";
 answers[13] = choices[13][1];
 units[13] = "28";
 comments[13] = "Id Pregunta: 738. Estrategia TIC";


//  Id pregunta: 368 Año de creación de pregunta: 2016
 questions[14]= "15)  Los Reglamentos comunitarios equivalen a lo que en un ordenamiento interno es:";
 choices[14]= new Array();
 choices[14][0] = "Un Reglamento.";
 choices[14][1] = "Un Decreto.";
 choices[14][2] = "Una Ley.";
 choices[14][3] = "Un Real-Decreto.";
 answers[14] = choices[14][2];
 units[14] = "5";
 comments[14] = "Id Pregunta: 368. UNION EUROPEA";


//  Id pregunta: 531 Año de creación de pregunta: 2016
 questions[15]= "16)  Se presumir&aacute; la representaci&oacute;n para:";
 choices[15]= new Array();
 choices[15][0] = "formular solicitudes";
 choices[15][1] = "los actos y gestiones de mero tr&aacute;mite";
 choices[15][2] = "presentar declaraciones responsables o comunicaciones";
 choices[15][3] = "interponer recursos, desistir de acciones y renunciar a derechos en nombre de otra persona";
 answers[15] = choices[15][1];
 units[15] = "7";
 comments[15] = "Id Pregunta: 531. LEY 39/2015";


//  Id pregunta: 844 Año de creación de pregunta: 2016
 questions[16]= "17)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Los &oacute;rganos colegiados de la Administraci&oacute;n General del Estado y de sus Organismos p&uacute;blicos, por su composici&oacute;n, se clasifican en:";
 choices[16]= new Array();
 choices[16][0] = "&Oacute;rganos colegiados interministeriales, si sus miembros proceden de diferentes Ministerios.";
 choices[16][1] = "&Oacute;rganos colegiados ministeriales, si sus componentes proceden de los &oacute;rganos del mismo Ministerio.";
 choices[16][2] = "A y B son correctas.";
 choices[16][3] = "A y B son incorrectas.";
 answers[16] = choices[16][2];
 units[16] = "4, 7, 8, 9";
 comments[16] = "Id Pregunta: 844. Ley 40/2015";


//  Id pregunta: 640 Año de creación de pregunta: 2016
 questions[17]= "18)  Indique cu&aacute;l de las siguientes afirmaciones es la correcta:";
 choices[17]= new Array();
 choices[17][0] = "Linux dispone de los tres principales protocolos de red para sistemas UNIX: Novel, TCP/IP y UUCP.";
 choices[17][1] = "Linux dispone &uacute;nicamente del protocolo TCP/IP.";
 choices[17][2] = "Linux dispone de todos los protocolos de red existentes.";
 choices[17][3] = "Linux dispone de los dos principales protocolos de red para sistemas UNIX: TCP/IP y UUCP.";
 answers[17] = choices[17][3];
 units[17] = "57";
 comments[17] = "Id Pregunta: 640. Junta de Extremadura A1 2015";


//  Id pregunta: 39 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Cu&aacute;l de las siguientes respuestas NO es un servicio definido por el Open Geospatial Consortium (OGC)?";
 choices[18]= new Array();
 choices[18][0] = "WMS sirve mapas de forma din&aacute;mica presentando la informaci&oacute;n como im&aacute;genes digitales.";
 choices[18][1] = "WMTS permite la visualizaci&oacute;n de mapas a trav&eacute;s de teselas (tiles) de im&aacute;genes.";
 choices[18][2] = "WRS permite la consulta de colecciones de mapas raster.";
 choices[18][3] = "WFS permite la consulta y descarga de datos vectoriales.";
 answers[18] = choices[18][2];
 units[18] = "71";
 comments[18] = "Id Pregunta: 39. AGE A1 2015";


//  Id pregunta: 479 Año de creación de pregunta: 2016
 questions[19]= "20)  Se&ntilde;ale, de acuerdo con la Ley General Presupuestaria, cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[19]= new Array();
 choices[19][0] = "La Ley General Presupuestaria permite realizar trasferencias de cr&eacute;dito desde el Cap&iacute;tulo 6 de los Presupuestos generales del Estado al Cap&iacute;tulo 2.";
 choices[19][1] = "Es competencia del Consejo de Ministros la autorizaci&oacute;n de generaciones de cr&eacute;dito.";
 choices[19][2] = "Los cr&eacute;ditos extraordinarios por necesidades surgidas en operaciones financieras se financian con Deuda P&uacute;blica o con baja en otros cr&eacute;ditos de la misma naturaleza.";
 choices[19][3] = "Excepcionalmente tendr&aacute;n la condici&oacute;n de ampliables los cr&eacute;ditos destinados al pago de los salarios de los empleados p&uacute;blicos.";
 answers[19] = choices[19][2];
 units[19] = "10";
 comments[19] = "Id Pregunta: 479. PRESUPUESTOS GENERALES";


//  Id pregunta: 508 Año de creación de pregunta: 2016
 questions[20]= "21)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, responde a la reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, (en adelante CE) e incorpora tres nuevos principios con respecto a la derogada Ley Org&aacute;nica 5/2001, de 13 de diciembre, complementaria a la Ley General de Estabilidad Presupuestaria ,Cu&aacute;les son?";
 choices[20]= new Array();
 choices[20][0] = "Estabilidad presupuestaria, plurianualidad, y responsabilidad.";
 choices[20][1] = "Sostenibilidad financiera, responsabilidad y transparencia.";
 choices[20][2] = "Plurianualidad, lealtad institucional y eficiencia en la asignaci&oacute;n de los recursos p&uacute;blicos";
 choices[20][3] = "Responsabilidad, sostenibilidad financiera y lealtad institucional.";
 answers[20] = choices[20][3];
 units[20] = "10";
 comments[20] = "Id Pregunta: 508. PRESUPUESTOS GENERALES";


//  Id pregunta: 246 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[21]= new Array();
 choices[21][0] = "Dos Cap&iacute;tulos.";
 choices[21][1] = "Tres Cap&iacute;tulos.";
 choices[21][2] = "Un Cap&iacute;tulo.";
 choices[21][3] = "Cuatro Cap&iacute;tulos.";
 answers[21] = choices[21][1];
 units[21] = "1";
 comments[21] = "Id Pregunta: 246. CONSTITUCION1978";


//  Id pregunta: 516 Año de creación de pregunta: 2016
 questions[22]= "23)  El sector p&uacute;blico institucional se integra por:";
 choices[22]= new Array();
 choices[22][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[22][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[22][2] = "las Universidades p&uacute;blicas";
 choices[22][3] = "todas son correctas";
 answers[22] = choices[22][3];
 units[22] = "7";
 comments[22] = "Id Pregunta: 516. LEY 39/2015";


//  Id pregunta: 376 Año de creación de pregunta: 2016
 questions[23]= "24)  El Defensor del Pueblo Europeo puede ser consultado por:";
 choices[23]= new Array();
 choices[23][0] = "Personas con residencia en la Uni&oacute;n pero s&oacute;lo personas f&iacute;sicas.";
 choices[23][1] = "Personas con nacionalidad europea.";
 choices[23][2] = "Personas con nacionalidad y pa&iacute;ses asociados.";
 choices[23][3] = "Toda persona f&iacute;sica (ciudadanos) o jur&iacute;dica (instituciones o empresas) que residan en la Uni&oacute;n.";
 answers[23] = choices[23][3];
 units[23] = "5";
 comments[23] = "Id Pregunta: 376. UNION EUROPEA";


//  Id pregunta: 494 Año de creación de pregunta: 2016
 questions[24]= "25)  El R&eacute;gimen Jur&iacute;dico de la Deuda del Estado se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[24]= new Array();
 choices[24][0] = "T&iacute;tulo V, Cap&iacute;tulo II, Secci&oacute;n 4.";
 choices[24][1] = "T&iacute;tulo V, Cap&iacute;tulo I, Secci&oacute;n 2.";
 choices[24][2] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[24][3] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[24] = choices[24][2];
 units[24] = "10";
 comments[24] = "Id Pregunta: 494. PRESUPUESTOS GENERALES";


//  Id pregunta: 434 Año de creación de pregunta: 2016
 questions[25]= "26)  En cuanto al sistema EGEO, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[25]= new Array();
 choices[25][0] = "Permite la representaci&oacute;n de mapas tem&aacute;ticos, georreferenciados, buscador de recursos georreferenciados con filtros definidos por el usuario, y de magnitud.";
 choices[25][1] = "Utiliza &uacute;nicamente sobre mapas oficiales del Instituto Geogr&aacute;fico Nacional (IGN).";
 choices[25][2] = "Es un servicio com&uacute;n dirigido a &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[25][3] = "Para su manejo, es necesario contar con conocimientos de georreferenciaci&oacute;n.";
 answers[25] = choices[25][0];
 units[25] = "43";
 comments[25] = "Id Pregunta: 434. SERVICIOS COMUNES";


//  Id pregunta: 682 Año de creación de pregunta: 2016
 questions[26]= "27)  Seg&uacute;n el Real Decreto Ley 5/2013, de 15 de marzo, de medidas para favorecer la continuidad de la vida laboral de los trabajadores de mayor edad y promover el envejecimiento activo:";
 choices[26]= new Array();
 choices[26][0] = "La cuant&iacute;a de la pensi&oacute;n de jubilaci&oacute;n compatible con el trabajo ser&aacute; equivalente al 50 por 100 del importe resultante en el reconocimiento inicial, una vez aplicado, si procede, el l&iacute;mite m&aacute;ximo de pensi&oacute;n p&uacute;blica, o del que se est&eacute; percibiendo, en el momento de inicio de la compatibilidad con el trabajo, excluido, en todo caso, el complemento por m&iacute;nimos, cualquiera que sea la jornada laboral o la actividad que realice el pensionista.";
 choices[26][1] = "El trabajo compatible debe realizarse a tiempo parcial.";
 choices[26][2] = "Finalizada la relaci&oacute;n laboral por cuenta ajena o producido el cese en la actividad por cuenta propia, se restablecer&aacute; el percibo &iacute;ntegro de la pensi&oacute;n de jubilaci&oacute;n transcurridos 12 meses de la finalizaci&oacute;n de la relaci&oacute;n laboral.";
 choices[26][3] = "El acceso a la pensi&oacute;n podr&aacute; tener lugar hasta 5 a&ntilde;os antes de la edad que en cada caso resulte de aplicaci&oacute;n.";
 answers[26] = choices[26][0];
 units[26] = "14";
 comments[26] = "Id Pregunta: 682. Pensiones";


//  Id pregunta: 190 Año de creación de pregunta: 2016
 questions[27]= "28)  La iniciativa legislativa para la reforma de la Constituci&oacute;n Espa&ntilde;ola de 1978:";
 choices[27]= new Array();
 choices[27][0] = "Le corresponde exclusivamente al congreso y al Senado.";
 choices[27][1] = "Puede ser ejercida por el Tribunal Constitucional.";
 choices[27][2] = "Puede ser instada por las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[27][3] = "Le corresponde exclusivamente al Gobierno.";
 answers[27] = choices[27][2];
 units[27] = "1";
 comments[27] = "Id Pregunta: 190. CONSTITUCION1978";


//  Id pregunta: 800 Año de creación de pregunta: 2016
 questions[28]= "29)  Las unidades administrativas comprenden puestos de trabajo o dotaciones de plantilla:";
 choices[28]= new Array();
 choices[28][0] = "vinculados funcionalmente por raz&oacute;n de sus cometidos y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[28][1] = "vinculados org&aacute;nicamente por raz&oacute;n de sus cometidos y funcionalmente por una jefatura com&uacute;n";
 choices[28][2] = "vinculados funcionalmente por raz&oacute;n de su territorio y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[28][3] = "vinculados org&aacute;nicamente por raz&oacute;n de su territorio y funcionalmente por una jefatura com&uacute;n";
 answers[28] = choices[28][0];
 units[28] = "4, 7, 8, 9";
 comments[28] = "Id Pregunta: 800. Ley 40/2015";


//  Id pregunta: 397 Año de creación de pregunta: 2016
 questions[29]= "30)  Un comportamiento realizado con el prop&oacute;sito o el efecto de intimidar, degradar, ofender o atentar contra la dignidad de una persona en raz&oacute;n de su sexo, se denomina:";
 choices[29]= new Array();
 choices[29][0] = "Acoso sexual.";
 choices[29][1] = "Acoso por raz&oacute;n de sexo.";
 choices[29][2] = "Acoso laboral.";
 choices[29][3] = "Acoso mental.";
 answers[29] = choices[29][1];
 units[29] = "14";
 comments[29] = "Id Pregunta: 397. POLITICAS DE IGUALDAD";


//  Id pregunta: 654 Año de creación de pregunta: 2016
 questions[30]= "31)  Dentro del proceso de MapReduce &iquest;Que es el shuffle?";
 choices[30]= new Array();
 choices[30][0] = "Es un proceso de adaptaci&oacute;n de los datos antes de entrar en la etapa de Map";
 choices[30][1] = "Es un aplicativo dentro del ecosistema Hadoop que sirve para distribuir datos en el HDFS";
 choices[30][2] = "Es el proceso por el que los datos llegan de los mappers a los reducers";
 choices[30][3] = "Es un algoritmo de mineria de datos usado en Big Data";
 answers[30] = choices[30][2];
 units[30] = "73";
 comments[30] = "Id Pregunta: 654. ";


//  Id pregunta: 365 Año de creación de pregunta: 2016
 questions[31]= "32)  Las decisiones de la Comisi&oacute;n se adoptar&aacute;n por:";
 choices[31]= new Array();
 choices[31][0] = "Unanimidad y mayor&iacute;a simple.";
 choices[31][1] = "Unanimidad.";
 choices[31][2] = "Mayor&iacute;a cualificada.";
 choices[31][3] = "Mayor&iacute;a simple.";
 answers[31] = choices[31][3];
 units[31] = "5";
 comments[31] = "Id Pregunta: 365. UNION EUROPEA";


//  Id pregunta: 785 Año de creación de pregunta: 2016
 questions[32]= "33)  Las competencias en materia de organizaci&oacute;n administrativa, r&eacute;gimen de personal, procedimientos e inspecci&oacute;n de servicios, no atribuidas espec&iacute;ficamente conforme a una Ley a ning&uacute;n otro &oacute;rgano de la Administraci&oacute;n General del Estado, ni al Gobierno, corresponder&aacute;n a:";
 choices[32]= new Array();
 choices[32][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[32][1] = "el Consejo de Estado";
 choices[32][2] = "el Congreso";
 choices[32][3] = "las Cortes Generales";
 answers[32] = choices[32][0];
 units[32] = "4, 7, 8, 9";
 comments[32] = "Id Pregunta: 785. Ley 40/2015";


//  Id pregunta: 579 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Cu&aacute;ndo fue aprobada la Estrategia TIC?";
 choices[33]= new Array();
 choices[33][0] = "El 2 de Octubre de 2015";
 choices[33][1] = "El 15 de Septiembre de 2015";
 choices[33][2] = "El 1 de Octubre de 2015";
 choices[33][3] = "El 5 de Octubre de 2015";
 answers[33] = choices[33][0];
 units[33] = "19";
 comments[33] = "Id Pregunta: 579. Estrategia TIC";


//  Id pregunta: 706 Año de creación de pregunta: 2016
 questions[34]= "35)  Se&ntilde;ale la afirmaci&oacute;n verdadera con respecto a la entrada en vigor de la Ley 19/2013 de Transparencia, Acceso a la Informaci&oacute;n P&uacute;blica y Buen Gobierno:";
 choices[34]= new Array();
 choices[34][0] = "Todas las disposiciones entraron en vigor al d&iacute;a siguiente de su publicaci&oacute;n en el BOE";
 choices[34][1] = "La entrada en vigor de todas sus disposiciones fue al a&ntilde;o de su publicaci&oacute;n en el BOE";
 choices[34][2] = "Los &oacute;rganos de las Comunidades Aut&oacute;nomas y Entidades Locales dispusieron de un plazo m&aacute;ximo de dos a&ntilde;os tras publicaci&oacute;n en BOE para adaptarse a las obligaciones contenidas en esta Ley.";
 choices[34][3] = "Algunas disposiciones de la ley entraron en vigor a los 3 a&ntilde;os de su publicaci&oacute;n en el BOE";
 answers[34] = choices[34][2];
 units[34] = "22";
 comments[34] = "Id Pregunta: 706. Ley de transparencia";


//  Id pregunta: 691 Año de creación de pregunta: 2016
 questions[35]= "36)  El Reglamento (UE) 910/2014 deroga la Directiva 1999/93/CE con efectos a partir de:";
 choices[35]= new Array();
 choices[35][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[35][1] = "1 de enero de 2015";
 choices[35][2] = "1 de enero de 2016";
 choices[35][3] = "1 de julio de 2016";
 answers[35] = choices[35][3];
 units[35] = "77";
 comments[35] = "Id Pregunta: 691. Art&iacute;culo 50 del Reglamento 910/2014";


//  Id pregunta: 242 Año de creación de pregunta: 2016
 questions[36]= "37)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, es competencia del Rey:";
 choices[36]= new Array();
 choices[36][0] = "Refrendar los actos del Presidente de Gobierno.";
 choices[36][1] = "Previa autorizaci&oacute;n del Presidente de Gobierno, declarar la guerra y hacer la paz.";
 choices[36][2] = "El Alto Patronazgo de las Reales Academias.";
 choices[36][3] = "Sancionar y publicar las leyes.";
 answers[36] = choices[36][2];
 units[36] = "1";
 comments[36] = "Id Pregunta: 242. CONSTITUCION1978";


//  Id pregunta: 372 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[37]= new Array();
 choices[37][0] = "El Parlamento y el Consejo.";
 choices[37][1] = "El Parlamento y la Comisi&oacute;n.";
 choices[37][2] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[37][3] = "La Comisi&oacute;n y el Consejo.";
 answers[37] = choices[37][2];
 units[37] = "5";
 comments[37] = "Id Pregunta: 372. UNION EUROPEA";


//  Id pregunta: 99 Año de creación de pregunta: 2016
 questions[38]= "39)  En cuanto a la imputaci&oacute;n de costes de los servicios compartidos en la Administraci&oacute;n General del Estado, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[38]= new Array();
 choices[38][0] = "Seg&uacute;n establece el Real Decreto 806/2014 el coste, caso de ocasionarse, ser&aacute; asumido &iacute;ntegramente por la Direcci&oacute;n de Tecnolog&iacute;as de las Informaci&oacute;n y Comunicaciones.";
 choices[38][1] = "Se sufragar&aacute;n con cargo a los presupuestos de Presidencia del Gobierno dado el car&aacute;cter horizontal del servicio compartido.";
 choices[38][2] = "La declaraci&oacute;n de todo servicio compartido deber&aacute; indicar si existe compensaci&oacute;n econ&oacute;mica al proveedor.";
 choices[38][3] = "No existir&aacute;, dado que su gratuidad y libertad de acceso es consustancial a la idea de servicio compartido.";
 answers[38] = choices[38][2];
 units[38] = "26";
 comments[38] = "Id Pregunta: 99. AGE A1 2015: actualmente la Secretar&iacute;a General de Administraci&oacute;n Digital asume las funciones de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 413 Año de creación de pregunta: 2016
 questions[39]= "40)  Gozar&aacute;n de los derecho derivados del principio de igualdad de trato y de la prohibici&oacute;n de discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[39]= new Array();
 choices[39][0] = "La mujeres.";
 choices[39][1] = "Lo hombres.";
 choices[39][2] = "Todas las personas.";
 choices[39][3] = "Las mujeres y ni&ntilde;os menores de 16 a&ntilde;os.";
 answers[39] = choices[39][2];
 units[39] = "14";
 comments[39] = "Id Pregunta: 413. POLITICAS DE IGUALDAD";


//  Id pregunta: 268 Año de creación de pregunta: 2016
 questions[40]= "41)  Las Disposiciones Adicionales en la Constituci&oacute;n Espa&ntilde;ola son:";
 choices[40]= new Array();
 choices[40][0] = "Cuatro.";
 choices[40][1] = "Una.";
 choices[40][2] = "Cinco.";
 choices[40][3] = "Nueve.";
 answers[40] = choices[40][2];
 units[40] = "1";
 comments[40] = "Id Pregunta: 268. CONSTITUCION1978";


//  Id pregunta: 566 Año de creación de pregunta: 2016
 questions[41]= "42)  La &quot;Poblaci&oacute;n Activa&quot; que tiene en cuenta la Encuesta de Poblaci&oacute;n Activa (EPA), incluye:";
 choices[41]= new Array();
 choices[41][0] = "Los ocupados y los parados activos";
 choices[41][1] = "S&oacute;lo los ocupados";
 choices[41][2] = "Los ocupados y los inactivos";
 choices[41][3] = "Los que han trabajado en los &uacute;ltimos 6 meses";
 answers[41] = choices[41][0];
 units[41] = "12";
 comments[41] = "Id Pregunta: 566. Modelo econ&oacute;mico";


//  Id pregunta: 627 Año de creación de pregunta: 2016
 questions[42]= "43)  En UML &iquest;qu&eacute; es una m&aacute;quina de estados?";
 choices[42]= new Array();
 choices[42][0] = "Es un modelo computacional representado por grafos, en los que los estados son los v&eacute;rtices.";
 choices[42][1] = "Es un dispositivo que puede ser programado para cumplir determinadas tareas de control en sistema autom&aacute;ticos.";
 choices[42][2] = "Es un comportamiento que especifica las secuencias de estados por las que pasa un objeto a lo largo de su vida en respuesta a eventos, junto con sus respuestas a esos eventos.";
 choices[42][3] = "Es un sistema l&oacute;gico que posee una entrada, un procesador intermedio y una salida resultado de la aplicaci&oacute;n del procesamiento sobre la entrada.";
 answers[42] = choices[42][2];
 units[42] = "89";
 comments[42] = "Id Pregunta: 627. Junta de Extremadura A1 2015";


//  Id pregunta: 256 Año de creación de pregunta: 2016
 questions[43]= "44)  El Art&iacute;culo 21 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que:";
 choices[43]= new Array();
 choices[43][0] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y con armas.";
 choices[43][1] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica siempre dentro del derecho de manifestaci&oacute;n previa autorizaci&oacute;n.";
 choices[43][2] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y sin armas.";
 choices[43][3] = "No se reconoce expl&iacute;citamente tal derecho de reuni&oacute;n.";
 answers[43] = choices[43][0];
 units[43] = "1";
 comments[43] = "Id Pregunta: 256. CONSTITUCION1978";


//  Id pregunta: 108 Año de creación de pregunta: 2016
 questions[44]= "45)  Son proyectos de Apache relacionados con Big Data:";
 choices[44]= new Array();
 choices[44][0] = "Hadoop";
 choices[44][1] = "Spark";
 choices[44][2] = "A) y B)";
 choices[44][3] = "Niguno de los anteriores";
 answers[44] = choices[44][2];
 units[44] = "73";
 comments[44] = "Id Pregunta: 108. ";


//  Id pregunta: 214 Año de creación de pregunta: 2016
 questions[45]= "46)  Seg&uacute;n el T&iacute;tulo II de la Constituci&oacute;n Espa&ntilde;ola relativo a la Corona:";
 choices[45]= new Array();
 choices[45][0] = "La Regencia se ejercer&aacute; por mandato constitucional y siempre en nombre del Rey.";
 choices[45][1] = "Las abdicaciones y renuncias en el orden sucesorio se resolver&aacute;n por ley ordinaria.";
 choices[45][2] = "El Pr&iacute;ncipe heredero podr&aacute; asumir la Regencia durante su minor&iacute;a de edad.";
 choices[45][3] = "La Regencia podr&aacute; ejercerse por nacionales de cualquier Estado.";
 answers[45] = choices[45][0];
 units[45] = "1";
 comments[45] = "Id Pregunta: 214. CONSTITUCION1978";


//  Id pregunta: 633 Año de creación de pregunta: 2016
 questions[46]= "47)  La segmentaci&oacute;n es un esquema de asignaci&oacute;n de memoria que:";
 choices[46]= new Array();
 choices[46][0] = "Divide la memoria f&iacute;sica disponible en un n&uacute;mero fijo de particiones cuyo tama&ntilde;o tambi&eacute;n es fijo.";
 choices[46][1] = "Divide la memoria f&iacute;sica disponible en particiones cuyo n&uacute;mero y tama&ntilde;o var&iacute;a para adaptarse a las exigencias los procesos.";
 choices[46][2] = "Divide el espacio de direcciones de cada proceso en bloques que puedan ser situados en &aacute;reas de memoria no contiguas.";
 choices[46][3] = "Divide la memoria en dos particiones: una para el sistema operativo y otra para el proceso que se encuentra en ejecuci&oacute;n.";
 answers[46] = choices[46][2];
 units[46] = "50";
 comments[46] = "Id Pregunta: 633. Junta de Extremadura A1 2015";


//  Id pregunta: 793 Año de creación de pregunta: 2016
 questions[47]= "48)  En la Administraci&oacute;n General del Estado en el exterior son &oacute;rganos directivos:";
 choices[47]= new Array();
 choices[47][0] = "los Ministros y los Secretarios de Estado";
 choices[47][1] = "los Subsecretarios y Secretarios generales";
 choices[47][2] = "los embajadores y representantes permanentes ante Organizaciones internacionales";
 choices[47][3] = "los Directores generales";
 answers[47] = choices[47][2];
 units[47] = "4, 7, 8, 9";
 comments[47] = "Id Pregunta: 793. Ley 40/2015";


//  Id pregunta: 719 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;A trav&eacute;s de qu&eacute; empresa surgen las metodolog&iacute;as lean?";
 choices[48]= new Array();
 choices[48][0] = "Ford";
 choices[48][1] = "Google";
 choices[48][2] = "Toyota";
 choices[48][3] = "Facebook";
 answers[48] = choices[48][2];
 units[48] = "34";
 comments[48] = "Id Pregunta: 719. Metodologias Lean";


//  Id pregunta: 502 Año de creación de pregunta: 2016
 questions[49]= "50)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el programa plurianual de la Seguridad Social se elaborar&aacute; por:";
 choices[49]= new Array();
 choices[49][0] = "El presidente de las Cortes Generales.";
 choices[49][1] = "El Presidente del Gobierno.";
 choices[49][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[49][3] = "El Ministro de Trabajo y Asuntos Sociales.";
 answers[49] = choices[49][3];
 units[49] = "10";
 comments[49] = "Id Pregunta: 502. PRESUPUESTOS GENERALES";


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


//  Id pregunta: 617 Año de creación de pregunta: 2016
 questions[51]= "52)  El establecimiento de una conexi&oacute;n mediante el protocolo TCP, b&aacute;sicamente se realiza de la siguiente manera:";
 choices[51]= new Array();
 choices[51][0] = "Emisor: env&iacute;a SYN. Receptor: env&iacute;a SYN+ACK. Emisor: env&iacute;a ACK.";
 choices[51][1] = "Emisor: env&iacute;a ACK. Receptor: env&iacute;a ACK+SYN. Emisor: env&iacute;a SYN.";
 choices[51][2] = "Emisor: env&iacute;a SYN. Receptor: env&iacute;a ACK.";
 choices[51][3] = "Emisor: env&iacute;a ACK. Receptor: env&iacute;a SYN.";
 answers[51] = choices[51][0];
 units[51] = "109";
 comments[51] = "Id Pregunta: 617. Junta de Extremadura A1 2015";


//  Id pregunta: 472 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Qui&eacute;n remitir&aacute; a las Cortes Generales un informe trimestral acerca de la utilizaci&oacute;n del Fondo regulado en el Fondo de Contingencia de ejecuci&oacute;n presupuestaria seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria?";
 choices[52]= new Array();
 choices[52][0] = "El Ministro de Econom&iacute;a.";
 choices[52][1] = "El Gobierno.";
 choices[52][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[52][3] = "El Presidente del Gobierno.";
 answers[52] = choices[52][1];
 units[52] = "10";
 comments[52] = "Id Pregunta: 472. PRESUPUESTOS GENERALES";


//  Id pregunta: 279 Año de creación de pregunta: 2016
 questions[53]= "54)  Se&ntilde;ale la respuesta correcta:";
 choices[53]= new Array();
 choices[53][0] = "Six Pack&quot; se refiere a 6 medidas legislativas adoptadas en el &aacute;mbito de la Uni&oacute;n Europea con la finalidad de reforzar la gobernanza presupuestaria y econ&oacute;mica.";
 choices[53][1] = "El &ldquo;Two-Pack&rdquo; consta de dos reglamentos destinados a aumentar a&uacute;n m&aacute;s la integraci&oacute;n y la convergencia econ&oacute;micas entre los Estados miembros de la zona del euro.";
 choices[53][2] = "Las respuestas A y B son correctas.";
 choices[53][3] = "Las respuestas A y B son falsas.";
 answers[53] = choices[53][2];
 units[53] = "5";
 comments[53] = "Id Pregunta: 279. UNION EUROPEA";


//  Id pregunta: 328 Año de creación de pregunta: 2016
 questions[54]= "55)  El principal &oacute;rgano decisorio de la Comunidad Europea es:";
 choices[54]= new Array();
 choices[54][0] = "El Presidente del Consejo Europeo.";
 choices[54][1] = "La Comisi&oacute;n.";
 choices[54][2] = "El Consejo.";
 choices[54][3] = "El Parlamento Europeo.";
 answers[54] = choices[54][2];
 units[54] = "5";
 comments[54] = "Id Pregunta: 328. UNION EUROPEA";


//  Id pregunta: 236 Año de creación de pregunta: 2016
 questions[55]= "56)  El T&iacute;tulo Preliminar de la Constituci&oacute;n Espa&ntilde;ola de 1978 engloba una serie de preceptos entre los que se encuentra el relativo a:";
 choices[55]= new Array();
 choices[55][0] = "La regulaci&oacute;n sobre la adquisici&oacute;n de la nacionalidad espa&ntilde;ola.";
 choices[55][1] = "La naturaleza, funcionamiento y estructura de los partidos pol&iacute;ticos.";
 choices[55][2] = "La entrada en vigor de la propia Constituci&oacute;n.";
 choices[55][3] = "El reconocimiento de los derechos hist&oacute;ricos de los territorios forales.";
 answers[55] = choices[55][3];
 units[55] = "1";
 comments[55] = "Id Pregunta: 236. CONSTITUCION1978";


//  Id pregunta: 351 Año de creación de pregunta: 2016
 questions[56]= "57)  La sede del Parlamento Europeo se encuentra en:";
 choices[56]= new Array();
 choices[56][0] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas.";
 choices[56][1] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas y la Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[56][2] = "La Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[56][3] = "Celebra todas sus sesiones en Bruselas.";
 answers[56] = choices[56][1];
 units[56] = "5";
 comments[56] = "Id Pregunta: 351. UNION EUROPEA";


//  Id pregunta: 359 Año de creación de pregunta: 2016
 questions[57]= "58)  Los Reglamentos no se caracterizan por:";
 choices[57]= new Array();
 choices[57][0] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 choices[57][1] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[57][2] = "Ser obligatorios.";
 choices[57][3] = "No poseer alcance general.";
 answers[57] = choices[57][3];
 units[57] = "5";
 comments[57] = "Id Pregunta: 359. UNION EUROPEA";


//  Id pregunta: 503 Año de creación de pregunta: 2016
 questions[58]= "59)  De acuerdo con el art&iacute;culo 64 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, qui&eacute;n elaborar&aacute; un presupuesto de explotaci&oacute;n que detallara los recursos y dotaciones anuales correspondientes:";
 choices[58]= new Array();
 choices[58][0] = "Las sociedades mercantiles estatales.";
 choices[58][1] = "Las entidades p&uacute;blicas empresariales.";
 choices[58][2] = "Las respuestas a) y b) son correctas.";
 choices[58][3] = "Las respuestas a) y b) no son correctas.";
 answers[58] = choices[58][2];
 units[58] = "10";
 comments[58] = "Id Pregunta: 503. PRESUPUESTOS GENERALES";


//  Id pregunta: 288 Año de creación de pregunta: 2016
 questions[59]= "60)  Cu&aacute;l no es uno de los pilares que cimientan el Plan de Acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[59]= new Array();
 choices[59][0] = "Configuraci&oacute;n de un marco que habilite la movilidad transfronteriza mediante los servicios p&uacute;blicos digitales;";
 choices[59][1] = "Facilitar la interacci&oacute;n digital con ciudadanos y empresas mediante AA.PP. abiertas y flexibles que impliquen a los actores interesados en el dise&ntilde;o de pol&iacute;ticas y servicios de una forma colaborativa;";
 choices[59][2] = "Sociedad digital integradora, donde los ciudadanos tengan las cualificaciones adecuadas para aprovechar las oportunidades ofrecidas por Internet.";
 choices[59][3] = "Puesta a disposici&oacute;n de habilitadores y facilitadores claves, servicios y activos reutilizables.";
 answers[59] = choices[59][2];
 units[59] = "5";
 comments[59] = "Id Pregunta: 288. UNION EUROPEA";


//  Id pregunta: 492 Año de creación de pregunta: 2016
 questions[60]= "61)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la obligaci&oacute;n de pagar los intereses de la Deuda del Estado y la de devolver los capitales llamados a reembolso, contados respectivamente a partir del vencimiento de los intereses y del d&iacute;a del llamamiento a reembolso prescribir&aacute;:";
 choices[60]= new Array();
 choices[60][0] = "A los cinco a&ntilde;os.";
 choices[60][1] = "A los dos a&ntilde;os.";
 choices[60][2] = "A los tres a&ntilde;os.";
 choices[60][3] = "A los cuatro a&ntilde;os.";
 answers[60] = choices[60][0];
 units[60] = "10";
 comments[60] = "Id Pregunta: 492. PRESUPUESTOS GENERALES";


//  Id pregunta: 177 Año de creación de pregunta: 2016
 questions[61]= "62)  El art&iacute;culo 152 de la Constituci&oacute;n espa&ntilde;ola se refiere a la organizaci&oacute;n instituicional b&aacute;sica de cada Comunidad Aut&oacute;noma, la cual se basar&aacute; en:";
 choices[61]= new Array();
 choices[61][0] = "Una Conseller&iacute;a legislativa, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[61][1] = "Una Asamble legislativa, un Presidente, un Delegado de Gobierno y un Comit&eacute; Superior del Poder Judicial.";
 choices[61][2] = "Una Asamble legislativa, un Consejo de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[61][3] = "Un Consejo legislativo, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Supremo.";
 answers[61] = choices[61][2];
 units[61] = "1";
 comments[61] = "Id Pregunta: 177. CONSTITUCION1978";


//  Id pregunta: 131 Año de creación de pregunta: 2016
 questions[62]= "63)  En qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola se incluy&oacute; la reforma conocida como la 'regla de oro presupuestaria' en el a&ntilde;o 2011:";
 choices[62]= new Array();
 choices[62][0] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[62][1] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda privada.";
 choices[62][2] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[62][3] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los gastos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 answers[62] = choices[62][0];
 units[62] = "12";
 comments[62] = "Id Pregunta: 131. Leyes modelo econ&oacute;mico";


//  Id pregunta: 257 Año de creación de pregunta: 2016
 questions[63]= "64)  El Art&iacute;culo 98 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Gobierno Espa&ntilde;ol se compone de:";
 choices[63]= new Array();
 choices[63][0] = "El Presidente y su gabinete.";
 choices[63][1] = "El Presidente y sus Ministros.";
 choices[63][2] = "El Rey y el Presidente.";
 choices[63][3] = "El Presidente, de los Vicepresidentes en su caso, de los Ministros y dem&aacute;s miembros que establezca la ley.";
 answers[63] = choices[63][2];
 units[63] = "1";
 comments[63] = "Id Pregunta: 257. CONSTITUCION1978";


//  Id pregunta: 154 Año de creación de pregunta: 2016
 questions[64]= "65)  Los t&eacute;rminos y plazos establecidos en la ley 39/2015 u otras leyes obligan a:";
 choices[64]= new Array();
 choices[64][0] = "las autoridades al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[64][1] = "el personal al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[64][2] = "los interesados en la tramitaci&oacute;n de los asuntos";
 choices[64][3] = "todas son correctas";
 answers[64] = choices[64][3];
 units[64] = "7";
 comments[64] = "Id Pregunta: 154. Ley 39/2015, Art&iacute;culo 29";


//  Id pregunta: 10 Año de creación de pregunta: 2016
 questions[65]= "66)  El servicio mediante el cual se localiza un terminal m&oacute;vil dentro de alguna de las N c&eacute;lulas gestionadas coordinadamente en una zona de cobertura se denomina:";
 choices[65]= new Array();
 choices[65][0] = "Paging";
 choices[65][1] = "Roaming";
 choices[65][2] = "Handover";
 choices[65][3] = "Trunking";
 answers[65] = choices[65][0];
 units[65] = "117";
 comments[65] = "Id Pregunta: 10. AGE A1 2015";


//  Id pregunta: 477 Año de creación de pregunta: 2016
 questions[66]= "67)  De conformidad con el art&iacute;culo 29.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales se remitir&aacute;n:";
 choices[66]= new Array();
 choices[66][0] = "Anualmente.";
 choices[66][1] = "Ninguna de las respuestas es correcta.";
 choices[66][2] = "Trimestralmente.";
 choices[66][3] = "Semestralmente.";
 answers[66] = choices[66][0];
 units[66] = "10";
 comments[66] = "Id Pregunta: 477. PRESUPUESTOS GENERALES";


//  Id pregunta: 119 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Con qu&eacute; periodicidad se publica la EPA (Encuesta de Poblaci&oacute;n Activa)?";
 choices[67]= new Array();
 choices[67][0] = "Anual";
 choices[67][1] = "Mensual";
 choices[67][2] = "Semestral";
 choices[67][3] = "Trimestral";
 answers[67] = choices[67][3];
 units[67] = "15";
 comments[67] = "Id Pregunta: 119. ";


//  Id pregunta: 222 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[68]= new Array();
 choices[68][0] = "Dos Cap&iacute;tulos.";
 choices[68][1] = "Tres Cap&iacute;tulos.";
 choices[68][2] = "Un Cap&iacute;tulo.";
 choices[68][3] = "Cuatro Cap&iacute;tulos.";
 answers[68] = choices[68][1];
 units[68] = "1";
 comments[68] = "Id Pregunta: 222. CONSTITUCION1978";


//  Id pregunta: 267 Año de creación de pregunta: 2016
 questions[69]= "70)  El T&iacute;tulo Primero de la Constituci&oacute;n Espa&ntilde;ola est&aacute; dedicado a:";
 choices[69]= new Array();
 choices[69][0] = "Los Derechos y Deberes fundamentales.";
 choices[69][1] = "La Corona.";
 choices[69][2] = "El Poder Judicial.";
 choices[69][3] = "Las Cortes Generales.";
 answers[69] = choices[69][2];
 units[69] = "1";
 comments[69] = "Id Pregunta: 267. CONSTITUCION1978";


//  Id pregunta: 488 Año de creación de pregunta: 2016
 questions[70]= "71)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la prescripci&oacute;n de los derechos de la Hacienda P&uacute;blica estatal, se interrumpir&aacute; conforme a lo establecido en:";
 choices[70]= new Array();
 choices[70][0] = "La Ley General Tributaria.";
 choices[70][1] = "La Ley Presupuestaria.";
 choices[70][2] = "La Ley de Hacienda P&uacute;blica.";
 choices[70][3] = "Ninguna de las respuestas es correcta.";
 answers[70] = choices[70][0];
 units[70] = "10";
 comments[70] = "Id Pregunta: 488. PRESUPUESTOS GENERALES";


//  Id pregunta: 465 Año de creación de pregunta: 2016
 questions[71]= "72)  Seg&uacute;n el art&iacute;culo 26 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la programaci&oacute;n presupuestaria se regir&aacute; por los principios de:";
 choices[71]= new Array();
 choices[71][0] = "Estabilidad presupuestaria, sostenibilidad financiera, eficacia, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[71][1] = "Estabilidad presupuestaria, sostenibilidad financiera, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[71][2] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, responsabilidad y lealtad institucional.";
 choices[71][3] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 answers[71] = choices[71][3];
 units[71] = "10";
 comments[71] = "Id Pregunta: 465. PRESUPUESTOS GENERALES";


//  Id pregunta: 496 Año de creación de pregunta: 2016
 questions[72]= "73)  Seg&uacute;n la Ley General Presupuestaria, con car&aacute;cter excepcional podr&aacute;n generar cr&eacute;dito en el Presupuesto del ejercicio los ingresos realizados:";
 choices[72]= new Array();
 choices[72][0] = "Por reembolso de pr&eacute;stamos.";
 choices[72][1] = "Por la venta de bienes.";
 choices[72][2] = "En el &uacute;ltimo trimestre del ejercicio anterior.";
 choices[72][3] = "Por prestaci&oacute;n de servicios.";
 answers[72] = choices[72][2];
 units[72] = "10";
 comments[72] = "Id Pregunta: 496. PRESUPUESTOS GENERALES";


//  Id pregunta: 707 Año de creación de pregunta: 2016
 questions[73]= "74)  La &Eacute;tica P&uacute;blica se puede definir como:";
 choices[73]= new Array();
 choices[73][0] = "El conjunto de normas que adoptan de manera voluntaria los trabajadores p&uacute;blicos con objeto de satisfacer las necesidades de los ciudadanos.";
 choices[73][1] = "El conjunto de comportamientos inadecuados por parte de empleados p&uacute;blicos y pol&iacute;ticos.";
 choices[73][2] = "El conjunto de normas que rigen la conducta de las personas que trabajan en las Administraciones P&uacute;blicas.";
 choices[73][3] = "El compromiso que adquieren los ciudadanos al relacionarse con las Administraciones P&uacute;blicas.";
 answers[73] = choices[73][2];
 units[73] = "22";
 comments[73] = "Id Pregunta: 707. &Eacute;tica p&uacute;blica";


//  Id pregunta: 605 Año de creación de pregunta: 2016
 questions[74]= "75)  Seg&uacute;n ITILv3 , el objetivo principal del Dise&ntilde;o del Servicio es:";
 choices[74]= new Array();
 choices[74][0] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno de producci&oacute;n.";
 choices[74][1] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno seguro.";
 choices[74][2] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno seguro.";
 choices[74][3] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno de producci&oacute;n.";
 answers[74] = choices[74][3];
 units[74] = "101";
 comments[74] = "Id Pregunta: 605. Junta de Extremadura A1 2015";


