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

//  Id pregunta: 609 Año de creación de pregunta: 2016
 questions[0]= "1)  Dentro de las t&eacute;cnicas de clasificaci&oacute;n de datos tenemos los m&eacute;todos de clasificaci&oacute;n interna. &iquest;A qu&eacute; tipo de algoritmo de ordenaci&oacute;n o clasificaci&oacute;n pertenece el m&eacute;todo de la burbuja?";
 choices[0]= new Array();
 choices[0][0] = "Clasificaci&oacute;n por inserci&oacute;n.";
 choices[0][1] = "Clasificaci&oacute;n por cuenta.";
 choices[0][2] = "Clasificaci&oacute;n por selecci&oacute;n.";
 choices[0][3] = "Clasificaci&oacute;n por intercambio.";
 answers[0] = choices[0][3];
 units[0] = "56";
 comments[0] = "Id Pregunta: 609. Junta de Extremadura A1 2015";


//  Id pregunta: 720 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;C&uacute;al de las siguientes NO es una metodolog&iacute;a lean?";
 choices[1]= new Array();
 choices[1][0] = "Lean startup";
 choices[1][1] = "Business Model Canvas";
 choices[1][2] = "Dynamic system Development method";
 choices[1][3] = "Lean software development";
 answers[1] = choices[1][2];
 units[1] = "34";
 comments[1] = "Id Pregunta: 720. Metodologias Lean";


//  Id pregunta: 362 Año de creación de pregunta: 2016
 questions[2]= "3)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[2]= new Array();
 choices[2][0] = "Son actos normativos.";
 choices[2][1] = "Poseen alcance general.";
 choices[2][2] = "No son obligatorias.";
 choices[2][3] = "Son actos individuales no normativos.";
 answers[2] = choices[2][3];
 units[2] = "5";
 comments[2] = "Id Pregunta: 362. UNION EUROPEA";


//  Id pregunta: 524 Año de creación de pregunta: 2016
 questions[3]= "4)  Las asociaciones y organizaciones representativas de intereses econ&oacute;micos y sociales:";
 choices[3]= new Array();
 choices[3][0] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos en los t&eacute;rminos que reglamentariamente se establezca";
 choices[3][1] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos";
 choices[3][2] = "no ser&aacute;n titulares de intereses leg&iacute;timos colectivos";
 choices[3][3] = "ser&aacute;n titulares de intereses leg&iacute;timos colectivos en los t&eacute;rminos que la Ley reconozca";
 answers[3] = choices[3][3];
 units[3] = "7";
 comments[3] = "Id Pregunta: 524. LEY 39/2015";


//  Id pregunta: 453 Año de creación de pregunta: 2016
 questions[4]= "5)  En las Administraciones P&uacute;blicas...";
 choices[4]= new Array();
 choices[4][0] = "Existe un Presupuesto ordinario &uacute;nicamente";
 choices[4][1] = "Existen s&oacute;lo un presupuesto ordinario y un presupuesto extraordinario";
 choices[4][2] = "Existe un &uacute;nico presupuesto ordinario y uno o varios presupuestos extraordinarios";
 choices[4][3] = "Existen varios presupuestos que indistintamente pueden ser considerados ordinarios o extraordinarios";
 answers[4] = choices[4][0];
 units[4] = "10";
 comments[4] = "Id Pregunta: 453. PRESUPUESTOS GENERALES";


//  Id pregunta: 443 Año de creación de pregunta: 2016
 questions[5]= "6)  Respecto a las comunicaciones y notificaciones electr&oacute;nicas:";
 choices[5]= new Array();
 choices[5][0] = "El servicio SIM se utiliza para el env&iacute;o de notificaciones electr&oacute;nicas.";
 choices[5][1] = "El Servicio compartido la gesti&oacute;n de notificaciones Notific@, ser&aacute; de uso obligatorio para la AGE y sus OOPP en 2017.";
 choices[5][2] = "La plataforma Notific@, recibe desde los organismos emisores, las comunicaciones y adem&aacute;s de aportar otros valores a&ntilde;adidos, las pone a disposici&oacute;n de los destinatarios en la Carpeta Ciudadana.";
 choices[5][3] = "El servicio SIM, que se ha integrado en el Servicio compartido de gesti&oacute;n de notificaciones, proporciona a los ciudadanos y empresas un buz&oacute;n seguro.";
 answers[5] = choices[5][1];
 units[5] = "43";
 comments[5] = "Id Pregunta: 443. SERVICIOS COMUNES";


//  Id pregunta: 166 Año de creación de pregunta: 2016
 questions[6]= "7)  El indicador de la Comisi&oacute;n Europea &ldquo;DESI&rdquo; (Digital Economy &amp; Society Index) tiene entre sus dimensiones:";
 choices[6]= new Array();
 choices[6][0] = "Interoperabilidad";
 choices[6][1] = "Integridad";
 choices[6][2] = "Capital humano";
 choices[6][3] = "Trazabilidad";
 answers[6] = choices[6][2];
 units[6] = "19";
 comments[6] = "Id Pregunta: 166. https://ec.europa.eu/digital-single-market/en/desi Conectividad, Capital humano, Uso de internet, Integraci&oacute;n de tecnolog&iacute;a digital, Servicios p&uacute;blicos digitales";


//  Id pregunta: 216 Año de creación de pregunta: 2016
 questions[7]= "8)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola de 1978, est&aacute;n legitimados para interponer el recurso de inconstitucionalidad:";
 choices[7]= new Array();
 choices[7][0] = "El Presidente del Gobierno.";
 choices[7][1] = "El Consejo de Ministros.";
 choices[7][2] = "40 Diputados.";
 choices[7][3] = "El Ministerio Fiscal.";
 answers[7] = choices[7][0];
 units[7] = "1";
 comments[7] = "Id Pregunta: 216. CONSTITUCION1978";


//  Id pregunta: 580 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;A qui&eacute;n corresponde la declaraci&oacute;n de medios y servicios compartidos?";
 choices[8]= new Array();
 choices[8][0] = "A la CETIC";
 choices[8][1] = "A la Secretar&iacute;a General de Administraci&oacute;n Digital, a propuesta de la CETIC";
 choices[8][2] = "A la CETIC y a la Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[8][3] = "A la CETIC, a propuesta de la Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[8] = choices[8][3];
 units[8] = "19";
 comments[8] = "Id Pregunta: 580. Estrategia TIC";


//  Id pregunta: 27 Año de creación de pregunta: 2016
 questions[9]= "10)  La Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, NO estableci&oacute; como derecho de los ciudadanos, el derecho:";
 choices[9]= new Array();
 choices[9][0] = "A la igualdad en el acceso electr&oacute;nico a los servicios de las Administraciones P&uacute;blicas.";
 choices[9][1] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que tengan la condici&oacute;n de interesado.";
 choices[9][2] = "A la calidad de los servicios p&uacute;blicos prestados por medios electr&oacute;nicos.";
 choices[9][3] = "A la preferencia en la tramitaci&oacute;n de los procedimientos presentados electr&oacute;nicamente.";
 answers[9] = choices[9][3];
 units[9] = "7";
 comments[9] = "Id Pregunta: 27. AGE A1 2015";


//  Id pregunta: 669 Año de creación de pregunta: 2016
 questions[10]= "11)  Un procedimiento administrativo finalizar&aacute;, seg&uacute;n la Ley 39/2015, por:";
 choices[10]= new Array();
 choices[10][0] = "Resoluci&oacute;n.";
 choices[10][1] = "Desistimiento o renuncia.";
 choices[10][2] = "Caducidad.";
 choices[10][3] = "Todas las anteriores.";
 answers[10] = choices[10][3];
 units[10] = "7";
 comments[10] = "Id Pregunta: 669. Art&iacute;culo 84 de la Ley 39/2015";


//  Id pregunta: 702 Año de creación de pregunta: 2016
 questions[11]= "12)  En el modelo de integraci&oacute;n continua se recomienda:";
 choices[11]= new Array();
 choices[11][0] = "Mantener un repositorio de c&oacute;digo.";
 choices[11][1] = "Realizar una migraci&oacute;n manual y controlada a cada entorno de desarrollo.";
 choices[11][2] = "Realizar las construcciones de versiones agrupando m&uacute;ltiples commits para optimizar el tiempo de proceso.";
 choices[11][3] = "Realizar las pruebas en el entorno de producci&oacute;n para obtener resultados reales.";
 answers[11] = choices[11][1];
 units[11] = "92";
 comments[11] = "Id Pregunta: 702. INTEGRACION CONTINUA";


//  Id pregunta: 835 Año de creación de pregunta: 2016
 questions[12]= "13)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[12]= new Array();
 choices[12][0] = "Los &oacute;rganos competentes podr&aacute;n avocar para s&iacute; el conocimiento de uno o varios asuntos cuya resoluci&oacute;n corresponda ordinariamente o por delegaci&oacute;n a sus &oacute;rganos administrativos dependientes, cuando circunstancias de &iacute;ndole t&eacute;cnica, econ&oacute;mica, social, jur&iacute;dica o territorial lo hagan conveniente.";
 choices[12][1] = "En los supuestos de delegaci&oacute;n de competencias en &oacute;rganos no dependientes jer&aacute;rquicamente, el conocimiento de un asunto podr&aacute; ser avocado &uacute;nicamente por el &oacute;rgano delegante.";
 choices[12][2] = "En todo caso, la avocaci&oacute;n se realizar&aacute; mediante acuerdo motivado que deber&aacute; ser notificado a los interesados en el procedimiento, si los hubiere, con posterioridad a la resoluci&oacute;n final que se dicte.";
 choices[12][3] = "Contra el acuerdo de avocaci&oacute;n no cabr&aacute; recurso, aunque podr&aacute; impugnarse en el que, en su caso, se interponga contra la resoluci&oacute;n del procedimiento.";
 answers[12] = choices[12][2];
 units[12] = "4, 7, 8, 9";
 comments[12] = "Id Pregunta: 835. Ley 40/2015";


//  Id pregunta: 440 Año de creación de pregunta: 2016
 questions[13]= "14)  Respecto al Sistema de Informaci&oacute;n Administrativa, se&ntilde;ale la respuesta falsa:";
 choices[13]= new Array();
 choices[13][0] = "Contiene la relaci&oacute;n de procedimientos y servicios de la AGE, y de todas las administraciones participantes.";
 choices[13][1] = "Cumple para la AGE el requisito establecido en el art&iacute;culo 9 del Esquema Nacional de Interoperabilidad, que obliga a las Administraciones p&uacute;blicas a mantener actualizado un Inventario de Informaci&oacute;n Administrativa.";
 choices[13][2] = "SIA est&aacute; dise&ntilde;ado para permitir la administraci&oacute;n distribuida y la actualizaci&oacute;n corresponsable por todas las Administraciones participantes, mediante una aplicaci&oacute;n web.";
 choices[13][3] = "Los usuarios son gestionados por una red de responsables de cada Departamento.";
 answers[13] = choices[13][2];
 units[13] = "43";
 comments[13] = "Id Pregunta: 440. SERVICIOS COMUNES";


//  Id pregunta: 395 Año de creación de pregunta: 2016
 questions[14]= "15)  Una persona que en atenci&oacute;n a su sexo es tratada de manera menos favorable que otra en situaci&oacute;n comparable, est&aacute; sufriendo:";
 choices[14]= new Array();
 choices[14][0] = "Discriminaci&oacute;n indirecta.";
 choices[14][1] = "Discriminaci&oacute;n directa.";
 choices[14][2] = "Discriminaci&oacute;n por maternidad.";
 choices[14][3] = "Discriminaci&oacute;n abusiva.";
 answers[14] = choices[14][1];
 units[14] = "14";
 comments[14] = "Id Pregunta: 395. POLITICAS DE IGUALDAD";


//  Id pregunta: 41 Año de creación de pregunta: 2016
 questions[15]= "16)  En cuanto al an&aacute;lisis DAFO:";
 choices[15]= new Array();
 choices[15][0] = "Considera detallada y exclusivamente factores internos.";
 choices[15][1] = "Es una t&eacute;cnica aplicable dentro de la Planificaci&oacute;n de Sistemas de Informaci&oacute;n.";
 choices[15][2] = "Considera detallada y exclusivamente factores externos.";
 choices[15][3] = "Se obtiene como resultado final del proceso de Planificaci&oacute;n Estrat&eacute;gica.";
 answers[15] = choices[15][1];
 units[15] = "83";
 comments[15] = "Id Pregunta: 41. AGE A1 2015";


//  Id pregunta: 153 Año de creación de pregunta: 2016
 questions[16]= "17)  Se entiende por documentos p&uacute;blicos administrativos";
 choices[16]= new Array();
 choices[16][0] = "los v&aacute;lidamente emitidos por los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[16][1] = "los remitidos por personas f&iacute;sicas o jur&iacute;dicas a los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[16][2] = "a y b son correctas";
 choices[16][3] = "a y b son incorrectas";
 answers[16] = choices[16][0];
 units[16] = "7";
 comments[16] = "Id Pregunta: 153. Ley 39/2015, Art&iacute;culo 26";


//  Id pregunta: 728 Año de creación de pregunta: 2016
 questions[17]= "18)  Indica la respuesta correcta";
 choices[17]= new Array();
 choices[17][0] = "Scrum no implica baja documentaci&oacute;n, de hecho hay estudios que estiman que es totalmente compatible con CMMI-3";
 choices[17][1] = "Scrum es una metodolog&iacute;a poco organizada";
 choices[17][2] = "Scrum no suele incluir a testers en el SCRUM TEAM";
 choices[17][3] = "En Scrum, sufre la calidad del producto o servicio al no pasar procesos de calidad reglados";
 answers[17] = choices[17][0];
 units[17] = "34, 84";
 comments[17] = "Id Pregunta: 728. Metodologias &aacute;giles";


//  Id pregunta: 417 Año de creación de pregunta: 2016
 questions[18]= "19)  Las Administraciones P&uacute;blicas en el &aacute;mbito de la educaci&oacute;n superior, promover&aacute;n:";
 choices[18]= new Array();
 choices[18][0] = "Inclusi&oacute;n de ense&ntilde;anzas en materia de igualdad entre mujeres y hombres.";
 choices[18][1] = "La creaci&oacute;n de postgrados espec&iacute;ficos.";
 choices[18][2] = "Ambas son correctas.";
 choices[18][3] = "La A y B son incorrectas.";
 answers[18] = choices[18][2];
 units[18] = "14";
 comments[18] = "Id Pregunta: 417. POLITICAS DE IGUALDAD";


//  Id pregunta: 70 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Qui&eacute;n determina las condiciones t&eacute;cnicas normalizadas del Punto General de Entrada de Factura Electr&oacute;nica?";
 choices[19]= new Array();
 choices[19][0] = "La Secretar&iacute;a de Estado de Administraciones P&uacute;blicas conjuntamente con la Secretar&iacute;a de Estado de Presupuestos y Gastos";
 choices[19][1] = "La Secretar&iacute;a de Estado de Hacienda conjuntamente con la Comisi&oacute;n Ministerial de Administraci&oacute; Digital";
 choices[19][2] = "La Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 choices[19][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[19] = choices[19][0];
 units[19] = "75";
 comments[19] = "Id Pregunta: 70. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 613 Año de creación de pregunta: 2016
 questions[20]= "21)  El Modelo de Referencia de Interconexi&oacute;n de Sistemas Abiertos (OSI) consta de siete niveles. Se&ntilde;ala cu&aacute;l de los principios que se aplicaron para llevar a cabo esta divisi&oacute;n es falso:";
 choices[20]= new Array();
 choices[20][0] = "No se deben crear demasiados niveles de manera que la tarea de describir e integrar &eacute;stos fuera m&aacute;s dif&iacute;cil de lo necesario.";
 choices[20][1] = "Aunque se requiera un nivel de abstracci&oacute;n diferente en el manejo de los datos, debe usarse un nivel ya existente.";
 choices[20][2] = "Cada nivel debe realizar unas funciones bien definidas.";
 choices[20][3] = "Crear para cada nivel interfases con el nivel superior e inferior &uacute;nicamente.";
 answers[20] = choices[20][1];
 units[20] = "48";
 comments[20] = "Id Pregunta: 613. Junta de Extremadura A1 2015";


//  Id pregunta: 659 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;De qu&eacute; modelo de programaci&oacute;n es una implementaci&oacute;n Hadoop?";
 choices[21]= new Array();
 choices[21][0] = "Orientaci&oacute;n a objetos";
 choices[21][1] = "MapReduce";
 choices[21][2] = "Pipeline filtering";
 choices[21][3] = "Programaci&oacute;n funcional";
 answers[21] = choices[21][1];
 units[21] = "73";
 comments[21] = "Id Pregunta: 659. ";


//  Id pregunta: 398 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Qu&eacute; art&iacute;culo de la Ley Org&aacute;nica 3/2007 para la igualdad efectiva de mujeres y hombres, regula las acciones positivas?";
 choices[22]= new Array();
 choices[22][0] = "Art. 13, L.O.3/2007.";
 choices[22][1] = "Art. 14, L.O.3/2007.";
 choices[22][2] = "Art. 11, L.O.3/2007.";
 choices[22][3] = "Ninguna es correcta.";
 answers[22] = choices[22][2];
 units[22] = "14";
 comments[22] = "Id Pregunta: 398. POLITICAS DE IGUALDAD";


//  Id pregunta: 159 Año de creación de pregunta: 2016
 questions[23]= "24)  Seg&uacute;n la ley 39/2015, los actos administrativos, a menos que su naturaleza exija otra forma m&aacute;s adecuada de expresi&oacute;n y constancia, se producir&aacute;n: ";
 choices[23]= new Array();
 choices[23][0] = "verbalmente";
 choices[23][1] = "por escrito a trav&eacute;s de medios electr&oacute;nicos o no electr&oacute;nicos";
 choices[23][2] = "por escrito a trav&eacute;s de medios electr&oacute;nicos";
 choices[23][3] = "por escrito a trav&eacute;s de medios no electr&oacute;nicos";
 answers[23] = choices[23][2];
 units[23] = "7";
 comments[23] = "Id Pregunta: 159. Ley 39/2015, Art&iacute;culo 36";


//  Id pregunta: 787 Año de creación de pregunta: 2016
 questions[24]= "25)  En la organizaci&oacute;n central no son &oacute;rganos directivos:";
 choices[24]= new Array();
 choices[24][0] = "los Subsecretarios y Secretarios generales";
 choices[24][1] = "los Secretarios generales t&eacute;cnicos y Directores generales";
 choices[24][2] = "los Secretarios de Estado";
 choices[24][3] = "los Subdirectores generales";
 answers[24] = choices[24][2];
 units[24] = "4, 7, 8, 9";
 comments[24] = "Id Pregunta: 787. Ley 40/2015";


//  Id pregunta: 351 Año de creación de pregunta: 2016
 questions[25]= "26)  La sede del Parlamento Europeo se encuentra en:";
 choices[25]= new Array();
 choices[25][0] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas.";
 choices[25][1] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas y la Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[25][2] = "La Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[25][3] = "Celebra todas sus sesiones en Bruselas.";
 answers[25] = choices[25][1];
 units[25] = "5";
 comments[25] = "Id Pregunta: 351. UNION EUROPEA";


//  Id pregunta: 807 Año de creación de pregunta: 2016
 questions[26]= "27)  Los Directores generales ser&aacute;n nombrados y separados por:";
 choices[26]= new Array();
 choices[26][0] = "Real Decreto del Consejo de Ministros, a propuesta del titular del Departamento o del Presidente del Gobierno";
 choices[26][1] = "Ley de las Cortes Generales, a propuesta del titular del Departamento";
 choices[26][2] = "Ley de las Cortes Generales, a propuesta del titular del Departamento o del Presidente del Gobierno";
 choices[26][3] = "Real Decreto del Consejo de Ministros, a propuesta del titular del Departamento";
 answers[26] = choices[26][0];
 units[26] = "4, 7, 8, 9";
 comments[26] = "Id Pregunta: 807. Ley 40/2015";


//  Id pregunta: 131 Año de creación de pregunta: 2016
 questions[27]= "28)  En qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola se incluy&oacute; la reforma conocida como la 'regla de oro presupuestaria' en el a&ntilde;o 2011:";
 choices[27]= new Array();
 choices[27][0] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[27][1] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda privada.";
 choices[27][2] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[27][3] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los gastos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 answers[27] = choices[27][0];
 units[27] = "12";
 comments[27] = "Id Pregunta: 131. Leyes modelo econ&oacute;mico";


//  Id pregunta: 422 Año de creación de pregunta: 2016
 questions[28]= "29)  Los distintivos para reconocer a aquellas empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato, lo crear&aacute;:";
 choices[28]= new Array();
 choices[28][0] = "El Ministerio de Igualdad.";
 choices[28][1] = "El Ministerio de Empleo y Seguridad Social.";
 choices[28][2] = "Ambas son correctas.";
 choices[28][3] = "La Consejer&iacute;a de Igualdad de cada CCAA.";
 answers[28] = choices[28][1];
 units[28] = "14";
 comments[28] = "Id Pregunta: 422. POLITICAS DE IGUALDAD";


//  Id pregunta: 238 Año de creación de pregunta: 2016
 questions[29]= "30)  En caso de dimisi&oacute;n del Presidente del Gobierno:";
 choices[29]= new Array();
 choices[29][0] = "El Gobierno cesa a continuaci&oacute;n.";
 choices[29][1] = "El Rey podr&aacute; proponer, a trav&eacute;s del Presidente del Congreso, un nuevo candidato a la Presidencia del Gobierno.";
 choices[29][2] = "El Pleno del Congreso, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 choices[29][3] = "El Pleno del Congreso y del Senado, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 answers[29] = choices[29][1];
 units[29] = "1";
 comments[29] = "Id Pregunta: 238. CONSTITUCION1978";


//  Id pregunta: 686 Año de creación de pregunta: 2016
 questions[30]= "31)  Indique cu&aacute;l de las siguientes afirmaciones no es correcta seg&uacute;n lo establecido en el Reglamento (UE) 910/2014";
 choices[30]= new Array();
 choices[30][0] = "Las firmas electro&#769;nicas cualificadas tendr&aacute;n un efecto juri&#769;dico equivalente al de una firma manuscrita";
 choices[30][1] = "Una firma electro&#769;nica cualificada basada en un certificado cualificado emitido en un Estado miembro sera&#769; reconocida como firma electro&#769;nica cualificada en los dema&#769;s Estados miembros";
 choices[30][2] = "No se denegara&#769;n efectos juri&#769;dicos ni admisibilidad como prueba en procedimientos judiciales a una firma electro&#769;nica por el mero hecho de ser una firma electro&#769;nica";
 choices[30][3] = "Las firmas electr&oacute;nicas cualificadas tendr&aacute;n una validez de 48 meses";
 answers[30] = choices[30][3];
 units[30] = "77";
 comments[30] = "Id Pregunta: 686. Art&iacute;culo 25 del Reglamento 910/2014";


//  Id pregunta: 788 Año de creación de pregunta: 2016
 questions[31]= "32)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado son &oacute;rganos directivos:";
 choices[31]= new Array();
 choices[31][0] = "los Delegados del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[31][1] = "los Subdelegados del Gobierno en las provincias";
 choices[31][2] = "los Subdelegados del Gobierno en las entidades locales";
 choices[31][3] = "a y b son correctas";
 answers[31] = choices[31][3];
 units[31] = "4, 7, 8, 9";
 comments[31] = "Id Pregunta: 788. Ley 40/2015";


//  Id pregunta: 795 Año de creación de pregunta: 2016
 questions[32]= "33)  Se&ntilde;ale la respuesta correcta:";
 choices[32]= new Array();
 choices[32][0] = "corresponde a los &oacute;rganos superiores establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos directivos su desarrollo y ejecuci&oacute;n";
 choices[32][1] = "corresponde establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos superiores";
 choices[32][2] = "corresponde establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos directivos";
 choices[32][3] = "corresponde a los &oacute;rganos directivos establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos superiores su desarrollo y ejecuci&oacute;n";
 answers[32] = choices[32][0];
 units[32] = "4, 7, 8, 9";
 comments[32] = "Id Pregunta: 795. Ley 40/2015";


//  Id pregunta: 287 Año de creación de pregunta: 2016
 questions[33]= "34)  Se&ntilde;ale cu&aacute;l no es un principio del Plan de acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[33]= new Array();
 choices[33][0] = "Versi&oacute;n digital prioritaria.";
 choices[33][1] = "Principio de &laquo;solo una vez&raquo;.";
 choices[33][2] = "Inclusi&oacute;n y accesibilidad.";
 choices[33][3] = "Apertura y transparencia.";
 answers[33] = choices[33][0];
 units[33] = "5";
 comments[33] = "Id Pregunta: 287. UNION EUROPEA";


//  Id pregunta: 521 Año de creación de pregunta: 2016
 questions[34]= "35)  El sector p&uacute;blico institucional se integra por:";
 choices[34]= new Array();
 choices[34][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho privado vinculados o independientes de las Administraciones P&uacute;blicas";
 choices[34][1] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[34][2] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o independientes de las Administraciones P&uacute;blicas";
 choices[34][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[34] = choices[34][1];
 units[34] = "7";
 comments[34] = "Id Pregunta: 521. LEY 39/2015";


//  Id pregunta: 71 Año de creación de pregunta: 2016
 questions[35]= "36)  Seg&uacute;n el Modelo de Referencia Workflow definido por WfMC, &iquest;cu&aacute;l de las siguientes funciones corresponde al Servicio de Representaci&oacute;n del Workflow?";
 choices[35]= new Array();
 choices[35][0] = "Interpretar la descripci&oacute;n de procesos y controlar las diferentes instancias de los procesos, secuenciar las actividades, adicionar elementos a la lista de trabajo de los usuarios, e invocar las aplicaciones necesarias.";
 choices[35][1] = "Especificar el formato de intercambio com&uacute;n para soportar la transferencia de definiciones de procesos entre productos diferentes, utilizando un lenguaje de definici&oacute;n de procesos.";
 choices[35][2] = "Definir los mecanismos requeridos por los desarrolladores de productos workflow para implementar la comunicaci&oacute;n de un motor workflow con otros.";
 choices[35][3] = "Monitorizar informaci&oacute;n relevante del workflow, fundamentalmente con fines de auditor&iacute;a y estad&iacute;sticos.";
 answers[35] = choices[35][0];
 units[35] = "86";
 comments[35] = "Id Pregunta: 71. AGE A1 2015";


//  Id pregunta: 773 Año de creación de pregunta: 2016
 questions[36]= "37)  Las Administraciones P&uacute;blicas que, en el ejercicio de sus respectivas competencias, establezcan medidas que limiten el ejercicio de derechos individuales o colectivos o exijan el cumplimiento de requisitos para el desarrollo de una actividad, deber&aacute;n (se&ntilde;ala la incorrecta):";
 choices[36]= new Array();
 choices[36][0] = "aplicar el principio de proporcionalidad y elegir la medida menos restrictiva";
 choices[36][1] = "motivar su necesidad para la protecci&oacute;n del inter&eacute;s p&uacute;blico";
 choices[36][2] = "justificar su adecuaci&oacute;n para lograr los fines que se persiguen, evitando en la medida de lo posible que se produzcan diferencias de trato discriminatorias";
 choices[36][3] = "evaluar peri&oacute;dicamente los efectos y resultados obtenidos";
 answers[36] = choices[36][2];
 units[36] = "4, 7, 8, 9";
 comments[36] = "Id Pregunta: 773. Ley 40/2015";


//  Id pregunta: 393 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[37]= new Array();
 choices[37][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[37][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[37][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[37][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[37] = choices[37][0];
 units[37] = "14";
 comments[37] = "Id Pregunta: 393. POLITICAS DE IGUALDAD";


//  Id pregunta: 383 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre mujeres y hombres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[38]= new Array();
 choices[38][0] = "El Consejo Nacional de la Mujer";
 choices[38][1] = "El Consejo de la Mujer";
 choices[38][2] = "El Instituto de la Mujer";
 choices[38][3] = "El Consejo de Participaci&oacute;n de la Mujer";
 answers[38] = choices[38][3];
 units[38] = "14";
 comments[38] = "Id Pregunta: 383. POLITICAS DE IGUALDAD";


//  Id pregunta: 373 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Cu&aacute;ntos Abogados Generales asisten al Tribunal Superior de Justicia?:";
 choices[39]= new Array();
 choices[39][0] = "Nueve.";
 choices[39][1] = "Diez.";
 choices[39][2] = "Siete.";
 choices[39][3] = "Ocho.";
 answers[39] = choices[39][3];
 units[39] = "5";
 comments[39] = "Id Pregunta: 373. UNION EUROPEA";


//  Id pregunta: 413 Año de creación de pregunta: 2016
 questions[40]= "41)  Gozar&aacute;n de los derecho derivados del principio de igualdad de trato y de la prohibici&oacute;n de discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[40]= new Array();
 choices[40][0] = "La mujeres.";
 choices[40][1] = "Lo hombres.";
 choices[40][2] = "Todas las personas.";
 choices[40][3] = "Las mujeres y ni&ntilde;os menores de 16 a&ntilde;os.";
 answers[40] = choices[40][2];
 units[40] = "14";
 comments[40] = "Id Pregunta: 413. POLITICAS DE IGUALDAD";


//  Id pregunta: 588 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Cu&aacute;ntos servicios se declararon compartidos en la primera declaraci&oacute;n?";
 choices[41]= new Array();
 choices[41][0] = "14";
 choices[41][1] = "11";
 choices[41][2] = "12";
 choices[41][3] = "15";
 answers[41] = choices[41][0];
 units[41] = "19";
 comments[41] = "Id Pregunta: 588. Estrategia TIC";


//  Id pregunta: 636 Año de creación de pregunta: 2016
 questions[42]= "43)  El soporte de m&oacute;dulos en Linux tiene tres componentes:";
 choices[42]= new Array();
 choices[42][0] = "Gesti&oacute;n de E/S, Interfaces y Gesti&oacute;n del almacenamiento.";
 choices[42][1] = "Gesti&oacute;n del almacenamiento, Gesti&oacute;n de seguridad y Gesti&oacute;n de integridad.";
 choices[42][2] = "Gesti&oacute;n de m&oacute;dulos, M&oacute;dulo registro de controladores y Mecanismo de resoluci&oacute;n de conflictos.";
 choices[42][3] = "Gesti&oacute;n de memoria, Gesti&oacute;n de discos y Gesti&oacute;n de impresi&oacute;n.";
 answers[42] = choices[42][2];
 units[42] = "57";
 comments[42] = "Id Pregunta: 636. Junta de Extremadura A1 2015";


//  Id pregunta: 786 Año de creación de pregunta: 2016
 questions[43]= "44)  En la organizaci&oacute;n central son &oacute;rganos superiores:";
 choices[43]= new Array();
 choices[43][0] = "los Subsecretarios y los Secretarios generales";
 choices[43][1] = "los Ministros y los Secretarios generales t&eacute;cnicos";
 choices[43][2] = "los Secretarios de Estado y los Directores generales";
 choices[43][3] = "los Ministros y los Secretarios de Estado";
 answers[43] = choices[43][3];
 units[43] = "4, 7, 8, 9";
 comments[43] = "Id Pregunta: 786. Ley 40/2015";


//  Id pregunta: 800 Año de creación de pregunta: 2016
 questions[44]= "45)  La Administraci&oacute;n General del Estado se organiza:";
 choices[44]= new Array();
 choices[44][0] = "en Ministerios";
 choices[44][1] = "en Presidencia del Gobierno y en Ministerios";
 choices[44][2] = "en Presidencia del Gobierno, en Ministerios y en Secretar&iacute;as Generales";
 choices[44][3] = "en Presidencia del Gobierno, en Ministerios, en Secretar&iacute;as Generales y en el Servicio Exterior";
 answers[44] = choices[44][1];
 units[44] = "4, 7, 8, 9";
 comments[44] = "Id Pregunta: 800. Ley 40/2015";


//  Id pregunta: 620 Año de creación de pregunta: 2016
 questions[45]= "46)  En el entorno de la Arquitectura del Software, un patr&oacute;n :";
 choices[45]= new Array();
 choices[45][0] = "Es una soluci&oacute;n a un problema en un contexto particular.";
 choices[45][1] = "Es recurrente y ense&ntilde;a permitiendo entender c&oacute;mo adaptarlo a la variante particular del problema donde se quiere aplicar.";
 choices[45][2] = "Tiene un nombre para referirse al patr&oacute;n.";
 choices[45][3] = "Todas las respuestas son correctas.";
 answers[45] = choices[45][3];
 units[45] = "50";
 comments[45] = "Id Pregunta: 620. Junta de Extremadura A1 2015";


//  Id pregunta: 545 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Cu&aacute;l es la nueva denominaci&oacute;n para la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n tras la aprobaci&oacute;n del Real Decreto 424/2016, de 11 de noviembre, por el que se establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales?";
 choices[46]= new Array();
 choices[46][0] = "Subsecretar&iacute;a de Energ&iacute;a, Turismo y Agenda Digital";
 choices[46][1] = "Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[46][2] = "Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[46][3] = "Secretar&iacute;a de Estado de Administraci&oacute;n Digital";
 answers[46] = choices[46][1];
 units[46] = "26";
 comments[46] = "Id Pregunta: 545. Gobernanza TIC";


//  Id pregunta: 262 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;Cu&aacute;l de las siguientes no es una jurisdicci&oacute;n especial?:";
 choices[47]= new Array();
 choices[47][0] = "Constitucional.";
 choices[47][1] = "Penal.";
 choices[47][2] = "Militar.";
 choices[47][3] = "Tribunales consuetudinarios.";
 answers[47] = choices[47][0];
 units[47] = "1";
 comments[47] = "Id Pregunta: 262. CONSTITUCION1978";


//  Id pregunta: 233 Año de creación de pregunta: 2016
 questions[48]= "49)  Seg&uacute;n el Art&iacute;culo 75 de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras pueden delegar en las Comisiones Legislativas Permanentes:";
 choices[48]= new Array();
 choices[48][0] = "La aprobaci&oacute;n de proyectos o proposiciones de ley.";
 choices[48][1] = "La convalidaci&oacute;n de decretos-leyes.";
 choices[48][2] = "La aprobaci&oacute;n de proyectos de leyes de bases.";
 choices[48][3] = "La aprobaci&oacute;n de proyectos de leyes org&aacute;nicas.";
 answers[48] = choices[48][2];
 units[48] = "1";
 comments[48] = "Id Pregunta: 233. CONSTITUCION1978";


//  Id pregunta: 252 Año de creación de pregunta: 2016
 questions[49]= "50)  La Constituci&oacute;n garantiza el principio de irretroactividad:";
 choices[49]= new Array();
 choices[49][0] = "De las disposiciones favorables.";
 choices[49][1] = "De las disposiciones sancionadoras no favorables.";
 choices[49][2] = "De las disposiciones no restrictivas de derechos individuales.";
 choices[49][3] = "Las respuestas b) y c) son correctas.";
 answers[49] = choices[49][3];
 units[49] = "1";
 comments[49] = "Id Pregunta: 252. CONSTITUCION1978";


//  Id pregunta: 850 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas de backup es la m&aacute;s eficiente a nivel de ocupaci&oacute;n de espacio?";
 choices[50]= new Array();
 choices[50][0] = "Backup full.";
 choices[50][1] = "Backup diferencial.";
 choices[50][2] = "Backup incremental.";
 choices[50][3] = "Backup deduplicado.";
 answers[50] = choices[50][3];
 units[50] = "53";
 comments[50] = "Id Pregunta: 850. Xunta de Galicia 2015";


//  Id pregunta: 37 Año de creación de pregunta: 2016
 questions[51]= "52)  Seg&uacute;n el proyecto GNU, &iquest;cu&aacute;l de las siguientes NO puede ser considerada una libertad esencial del software libre?";
 choices[51]= new Array();
 choices[51][0] = "La libertad de ejecutar el programa como se desee, con cualquier prop&oacute;sito.";
 choices[51][1] = "La libertad de estudiar c&oacute;mo funciona el programa, y modificarlo para que tenga la funcionalidad deseada.";
 choices[51][2] = "La libertad de redistribuir copias para ayudar al pr&oacute;jimo.";
 choices[51][3] = "La libertad de distribuir a terceros versiones modificadas siempre que no tengan uso comercial.";
 answers[51] = choices[51][3];
 units[51] = "66";
 comments[51] = "Id Pregunta: 37. AGE A1 2015";


//  Id pregunta: 353 Año de creación de pregunta: 2016
 questions[52]= "53)  El buen funcionamiento de la Uni&oacute;n Europea recae, entre otras instituciones, en:";
 choices[52]= new Array();
 choices[52][0] = "El Parlamento Europeo.";
 choices[52][1] = "Todas las respuestas son correctas.";
 choices[52][2] = "La Comisi&oacute;n Europea.";
 choices[52][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[52] = choices[52][1];
 units[52] = "5";
 comments[52] = "Id Pregunta: 353. UNION EUROPEA";


//  Id pregunta: 230 Año de creación de pregunta: 2016
 questions[53]= "54)  Seg&uacute;n el Art&iacute;culo 22 de la Constituci&oacute;n Espa&ntilde;ola, las asociaciones s&oacute;lo podr&aacute;n ser disueltas o suspendidas en sus actividades:";
 choices[53]= new Array();
 choices[53][0] = "Por Real Decreto.";
 choices[53][1] = "Por Orden del Ministerio del Interior.";
 choices[53][2] = "Por resoluci&oacute;n judicial motivada.";
 choices[53][3] = "Por resoluci&oacute;n del Delegado del Gobierno de la Comunidad Aut&oacute;noma donde tenga establecido su domicilio la asociaci&oacute;n.";
 answers[53] = choices[53][2];
 units[53] = "1";
 comments[53] = "Id Pregunta: 230. CONSTITUCION1978";


//  Id pregunta: 29 Año de creación de pregunta: 2016
 questions[54]= "55)  De acuerdo con el art&iacute;culo 62 de la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, se&ntilde;ale la respuesta correcta:";
 choices[54]= new Array();
 choices[54][0] = "El uso del dominio p&uacute;blico radioel&eacute;ctrico s&oacute;lo puede ser de dos tipos: especial o privativo.";
 choices[54][1] = "El uso com&uacute;n del dominio p&uacute;blico radioel&eacute;ctrico precisa de t&iacute;tulo habilitante.";
 choices[54][2] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico es el que se realiza mediante la explotaci&oacute;n en exclusiva, o por un n&uacute;mero limitado de usuarios, de determinadas frecuencias en un mismo &aacute;mbito f&iacute;sico de aplicaci&oacute;n.";
 choices[54][3] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico es el que se lleve a cabo de las bandas de frecuencias habilitadas para su explotaci&oacute;n de forma compartida, sin limitaci&oacute;n de n&uacute;mero de operadores o usuarios y con las condiciones t&eacute;cnicas y para los servicios que se establezcan en cada caso.";
 answers[54] = choices[54][2];
 units[54] = "121";
 comments[54] = "Id Pregunta: 29. AGE A1 2015";


//  Id pregunta: 195 Año de creación de pregunta: 2016
 questions[55]= "56)  La potestad reglamentaria constitucionalmente corresponde:";
 choices[55]= new Array();
 choices[55][0] = "Al Gobierno.";
 choices[55][1] = "A las Cortes Generales.";
 choices[55][2] = "Al Poder Judicial.";
 choices[55][3] = "Al Congreso de los Diputados.";
 answers[55] = choices[55][0];
 units[55] = "1";
 comments[55] = "Id Pregunta: 195. CONSTITUCION1978";


//  Id pregunta: 180 Año de creación de pregunta: 2016
 questions[56]= "57)  Se&ntilde;ale la afirmaci&oacute;n correcta de acuerdo con la regulaci&oacute;n que contiene el Art&iacute;culo 116 de la Constituci&oacute;n Espa&ntilde;ola de los estados de alarma, excepci&oacute;n y sitio:";
 choices[56]= new Array();
 choices[56][0] = "el estado de sitio ser&aacute; declarado por la mayor&iacute;a absoluta del Congreso de los Diputados, a propuesta exclusiva del Gobierno.";
 choices[56][1] = "El estado de excepci&oacute;n ser&aacute; declarado por el Gobierno mediante Acuerdo de Ministros, previa autorizaci&oacute;n del Senado.";
 choices[56][2] = "El estado de alarma ser&aacute; declarado por la mayor&iacute;a simple del Congreso de los Diputados, a propuesta exclusiva del Gobierno.";
 choices[56][3] = "La declaraci&oacute;n de los estados de alarma, excepci&oacute;n y sitio s&iacute; modificar&aacute;n el principio de responsabilidad del Gobierno y de sus agentes reconocidos en la CE y en las leyes.";
 answers[56] = choices[56][0];
 units[56] = "1";
 comments[56] = "Id Pregunta: 180. CONSTITUCION1978";


//  Id pregunta: 285 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cu&aacute;l no es un obst&aacute;culo que dificulta la Agenda Digital para Europa?";
 choices[57]= new Array();
 choices[57][0] = "la fragmentaci&oacute;n de los mercados digitales.";
 choices[57][1] = "las diferencias tarifarias de los servicios de la sociedad de la informaci&oacute;n entre los miembros de la UE.";
 choices[57][2] = "la falta de interoperabilidad.";
 choices[57][3] = "el incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes.";
 answers[57] = choices[57][1];
 units[57] = "5";
 comments[57] = "Id Pregunta: 285. UNION EUROPEA";


//  Id pregunta: 478 Año de creación de pregunta: 2016
 questions[58]= "59)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la funci&oacute;n interventora se ejercer&aacute; en sus modalidades de:";
 choices[58]= new Array();
 choices[58][0] = "Intervenci&oacute;n f&iacute;sica y general.";
 choices[58][1] = "Intervenci&oacute;n formal y material.";
 choices[58][2] = "Intervenci&oacute;n f&iacute;sica y material.";
 choices[58][3] = "Intervenci&oacute;n formal y general.";
 answers[58] = choices[58][1];
 units[58] = "10";
 comments[58] = "Id Pregunta: 478. PRESUPUESTOS GENERALES";


//  Id pregunta: 336 Año de creación de pregunta: 2016
 questions[59]= "60)  El Tribunal de Justicia Europeo funcion&oacute; como instancia &uacute;nica hasta:";
 choices[59]= new Array();
 choices[59][0] = "Diciembre de 1987.";
 choices[59][1] = "Septiembre de 1989.";
 choices[59][2] = "Octubre de 1990.";
 choices[59][3] = "Noviembre de 1980.";
 answers[59] = choices[59][1];
 units[59] = "5";
 comments[59] = "Id Pregunta: 336. UNION EUROPEA";


//  Id pregunta: 145 Año de creación de pregunta: 2016
 questions[60]= "61)  Puede interponerse un recurso extraordinario de revisi&oacute;n:";
 choices[60]= new Array();
 choices[60][0] = "Ante actos firmes en la v&iacute;a administrativa cuando al dictarlos se hubiera incurrido en error de hecho, que resulte de los propios documentos incorporados al expediente";
 choices[60][1] = "Ante actos firmes en la v&iacute;a administrativa cuando en la resoluci&oacute;n hayan influido esencialmente documentos o testimonios declarados falsos por sentencia judicial firme, anterior o posterior a aquella resoluci&oacute;n";
 choices[60][2] = "Ante actos firmes en la v&iacute;a administrativa cuando la resoluci&oacute;n se hubiese dictado como consecuencia de prevaricaci&oacute;n, cohecho, violencia, maquinaci&oacute;n fraudulenta u otra conducta punible y se haya declarado as&iacute; en virtud de sentencia judicial firme";
 choices[60][3] = "Todas las anteriores son ciertas";
 answers[60] = choices[60][3];
 units[60] = "8";
 comments[60] = "Id Pregunta: 145. Ley 39/2015, Art&iacute;culo 125";


//  Id pregunta: 8 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Cu&aacute;l de las siguientes NO es una funci&oacute;n de la Secretar&iacute;a General de Administraci&oacute;n Digital?";
 choices[61]= new Array();
 choices[61][0] = "Establecer los mecanismos que aseguren un adecuado mantenimiento del censo de activos TIC.";
 choices[61][1] = "El estudio y la implementaci&oacute;n de modelos para incentivar la compartici&oacute;n y reutilizaci&oacute;n de las infraestructuras y aplicaciones sectoriales, y promover el desarrollo de aplicaciones bajo dicho modelo.";
 choices[61][2] = "La supervisi&oacute;n y coordinaci&oacute;n del registro de convenios del sector p&uacute;blico estatal, de acuerdo con la informaci&oacute;n que deber&aacute;n suministrar los diferentes departamentos ministeriales y dem&aacute;s organismos p&uacute;blicos suscriptores de los mismos.";
 choices[61][3] = "El desarrollo, impulso e implantaci&oacute;n de sistemas tecnol&oacute;gicos de apoyo para la gesti&oacute;n de recursos humanos, incluidos los sistemas del Registro Central de Personal.";
 answers[61] = choices[61][2];
 units[61] = "26";
 comments[61] = "Id Pregunta: 8. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 735 Año de creación de pregunta: 2016
 questions[62]= "63)  Son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[62]= new Array();
 choices[62][0] = "Tranparencia, innovaci&oacute;n, Unidad y visi&oacute;n integral y Orientaci&oacute;n al usuario del servicio";
 choices[62][1] = "Tranparencia, Colaboraci&oacute;n y alianzas, Orientaci&oacute;n al usuario del servicio y Reutilizaci&oacute;n";
 choices[62][2] = "Reutilizaci&oacute;n, Seguridad, Orientaci&oacute;n al usuario del servicio y Transparencia";
 choices[62][3] = "Ninguna de las anteriores";
 answers[62] = choices[62][0];
 units[62] = "28";
 comments[62] = "Id Pregunta: 735. Estrategia TIC";


//  Id pregunta: 409 Año de creación de pregunta: 2016
 questions[63]= "64)  La mayor novedad de la Ley para la igualdad efectiva de mujeres y hombres, radica en:";
 choices[63]= new Array();
 choices[63][0] = "Prevenir las conductas discriminatorias.";
 choices[63][1] = "Proveer pol&iacute;ticas activas para hacer efectivo el principio de igualdad.";
 choices[63][2] = "Todas son correctas.";
 choices[63][3] = "Proveer pol&iacute;ticas pasivas para hacer efectivo el principio de igualdad.";
 answers[63] = choices[63][2];
 units[63] = "14";
 comments[63] = "Id Pregunta: 409. POLITICAS DE IGUALDAD";


//  Id pregunta: 842 Año de creación de pregunta: 2016
 questions[64]= "65)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Los &oacute;rganos colegiados de la Administraci&oacute;n General del Estado y de sus Organismos p&uacute;blicos, por su composici&oacute;n, se clasifican en:";
 choices[64]= new Array();
 choices[64][0] = "&Oacute;rganos colegiados interministeriales, si sus miembros proceden de diferentes Ministerios.";
 choices[64][1] = "&Oacute;rganos colegiados ministeriales, si sus componentes proceden de los &oacute;rganos del mismo Ministerio.";
 choices[64][2] = "A y B son correctas.";
 choices[64][3] = "A y B son incorrectas.";
 answers[64] = choices[64][2];
 units[64] = "4, 7, 8, 9";
 comments[64] = "Id Pregunta: 842. Ley 40/2015";


//  Id pregunta: 201 Año de creación de pregunta: 2016
 questions[65]= "66)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[65]= new Array();
 choices[65][0] = "La aprobaci&oacute;n, modificaci&oacute;n o derogaci&oacute;n de las leyes org&aacute;nicas exigir&aacute; mayor&iacute;a absoluta de las Cortes Generales, en una votaci&oacute;n final sobre el conjunto del proyecto.";
 choices[65][1] = "Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada recibir&aacute;n el t&iacute;tulo de Decretos-leyes.";
 choices[65][2] = "Son leyes org&aacute;nicas las relativas al desarrollo de los derechos fundamentales y de las libertades p&uacute;blicas, las que aprueben los Estatutos de Autonom&iacute;a y el r&eacute;gimen electoral general y las dem&aacute;s previstas en la Constituci&oacute;n.";
 choices[65][3] = "La delegaci&oacute;n legislativa deber&aacute; otorgarse mediante una ley org&aacute;nica cuando su objeto sea la formaci&oacute;n de textos articulados o por una ley ordinaria cuando se trate de refundir varios textos legales en uno.";
 answers[65] = choices[65][2];
 units[65] = "1";
 comments[65] = "Id Pregunta: 201. CONSTITUCION1978";


//  Id pregunta: 737 Año de creación de pregunta: 2016
 questions[66]= "67)  En el Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE, las administraciones p&uacute;blicas y las instituciones p&uacute;blicas de la Uni&oacute;n Europea deben ser abiertas, eficaces e integradoras en el a&ntilde;o:";
 choices[66]= new Array();
 choices[66][0] = "2025";
 choices[66][1] = "2023";
 choices[66][2] = "2030";
 choices[66][3] = "2020";
 answers[66] = choices[66][3];
 units[66] = "28";
 comments[66] = "Id Pregunta: 737. Estrategia TIC";


//  Id pregunta: 401 Año de creación de pregunta: 2016
 questions[67]= "68)  Entre los criterios generales de actuaci&oacute;n los Poderes P&uacute;blicos, tienen:";
 choices[67]= new Array();
 choices[67][0] = "La implantaci&oacute;n de un lenguaje no sexista en el &aacute;mbito administrativo, y en la totalidad de las relaciones sociales, culturales y art&iacute;sticas.";
 choices[67][1] = "La participaci&oacute;n equilibrada de mujeres y hombres en las candidaturas electorales y toma de decisiones.";
 choices[67][2] = "Ambas son correctas.";
 choices[67][3] = "A y B son incorrectas.";
 answers[67] = choices[67][2];
 units[67] = "14";
 comments[67] = "Id Pregunta: 401. POLITICAS DE IGUALDAD";


//  Id pregunta: 187 Año de creación de pregunta: 2016
 questions[68]= "69)  El Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola establece un plazo de 30 d&iacute;as, para que los Decretos-Leyes sean sometidos a debate y votaci&oacute;n de la totalidad del Congreso de los Diputados, durante el cual:";
 choices[68]= new Array();
 choices[68][0] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento de urgencia.";
 choices[68][1] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento com&uacute;n.";
 choices[68][2] = "Durante dicho plazo, no pueden ser tramitados ni como proyectos de ley ni como propociones de ley.";
 choices[68][3] = "Durante dicho plazo, s&oacute;lo el Senado puede tramitar los Decretos-Leyes como proyectos de ley por el procedimiento de urgencia.";
 answers[68] = choices[68][0];
 units[68] = "1";
 comments[68] = "Id Pregunta: 187. CONSTITUCION1978";


//  Id pregunta: 634 Año de creación de pregunta: 2016
 questions[69]= "70)  En un modelo entidad/relaci&oacute;n, un tipo de interrelaci&oacute;n se caracteriza por:";
 choices[69]= new Array();
 choices[69][0] = "El nombre y el tipo de correspondencia.";
 choices[69][1] = "El nombre, el grado y el tipo de correspondencia.";
 choices[69][2] = "El nombre, el nivel y el tipo de correspondencia.";
 choices[69][3] = "El nombre y el grado.";
 answers[69] = choices[69][1];
 units[69] = "85";
 comments[69] = "Id Pregunta: 634. Junta de Extremadura A1 2015";


//  Id pregunta: 267 Año de creación de pregunta: 2016
 questions[70]= "71)  El T&iacute;tulo Primero de la Constituci&oacute;n Espa&ntilde;ola est&aacute; dedicado a:";
 choices[70]= new Array();
 choices[70][0] = "Los Derechos y Deberes fundamentales.";
 choices[70][1] = "La Corona.";
 choices[70][2] = "El Poder Judicial.";
 choices[70][3] = "Las Cortes Generales.";
 answers[70] = choices[70][2];
 units[70] = "1";
 comments[70] = "Id Pregunta: 267. CONSTITUCION1978";


//  Id pregunta: 9 Año de creación de pregunta: 2016
 questions[71]= "72)  Con respecto a los entornos de integraci&oacute;n continua, indique cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[71]= new Array();
 choices[71][0] = "Jenkins no dispone de la funcionalidad de extenderse mediante plugins.";
 choices[71][1] = "SonarQube utiliza herramientas de an&aacute;lisis est&aacute;tico de c&oacute;digo que permiten obtener m&eacute;tricas para mejorar la calidad del c&oacute;digo.";
 choices[71][2] = "El fichero POM empleado en Maven no siempre es un fichero XML.";
 choices[71][3] = "Jenkins es un software de integraci&oacute;n continua bajo licencia Oracle.";
 answers[71] = choices[71][1];
 units[71] = "95";
 comments[71] = "Id Pregunta: 9. AGE A1 2015";


//  Id pregunta: 561 Año de creación de pregunta: 2016
 questions[72]= "73)  El plan nacional de ciudades inteligentes...";
 choices[72]= new Array();
 choices[72][0] = "Es una apuesta liderada por la Federaci&oacute;n Espa&ntilde;ola de Municipios y Provincias";
 choices[72][1] = "Es una apuesta del ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[72][2] = "Es una apuesta liderada por una gran asociaci&oacute;n de empresas tecnol&oacute;gicas nacionales";
 choices[72][3] = "No existe";
 answers[72] = choices[72][1];
 units[72] = "19";
 comments[72] = "Id Pregunta: 561. Ciudades Inteligentes";


//  Id pregunta: 847 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Cu&aacute;l de los siguientes es un sistema de firma para la actuaci&oacute;n administrativa automatizada?";
 choices[73]= new Array();
 choices[73][0] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico reconocido o cualificado que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[73][1] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico avanzado o reconocido que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[73][2] = "C&oacute;digo seguro de verificaci&oacute;n vinculado a la Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de Derecho P&uacute;blico, en los t&eacute;rminos y condiciones establecidos, permiti&eacute;ndose en todo caso la comprobaci&oacute;n de la integridad del documento mediante el acceso al portal correspondiente.";
 choices[73][3] = "Firma electr&oacute;nica del titular del &oacute;rgano o empleado p&uacute;blico.";
 answers[73] = choices[73][0];
 units[73] = "4, 7, 8, 9";
 comments[73] = "Id Pregunta: 847. Ley 40/2015";


//  Id pregunta: 553 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;Cu&aacute;l de las siguientes iniciativas busca la mejora del acceso de los consumidores y las empresas a los bienes y servicios digitales, como parte de la estrategia para el Mercado &Uacute;nico Digital de la UE?";
 choices[74]= new Array();
 choices[74][0] = "Una paqueter&iacute;a m&aacute;s eficiente y asequible";
 choices[74][1] = "Revisar el marco de comunicaci&oacute;n audiovisual con el fin de adecuarlo al siglo XXI";
 choices[74][2] = "Reforzar la confianza y la seguridad en los servicios digitales, en particular en relaci&oacute;n con el tratamiento de datos personales";
 choices[74][3] = "Todas lo son";
 answers[74] = choices[74][0];
 units[74] = "17";
 comments[74] = "Id Pregunta: 553. Mercado &Uacute;nico Digital";


