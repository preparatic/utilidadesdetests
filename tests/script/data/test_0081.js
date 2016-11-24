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

//  Id pregunta: 10261 AÃ±o de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Qui&eacute;n representa al Consejo General del Poder Judicial?";
 choices[0]= new Array();
 choices[0][0] = "La Comisi&oacute;n Permanente.";
 choices[0][1] = "El Presidente.";
 choices[0][2] = "El Pleno.";
 choices[0][3] = "El Vicepresidente.";
 answers[0] = choices[0][3];
 units[0] = "1";
 comments[0] = "Id Pregunta: 10261. CONSTITUCION1978";


//  Id pregunta: 10039 AÃ±o de creación de pregunta: 2016
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes respuestas NO es un servicio definido por el Open Geospatial Consortium (OGC)?";
 choices[1]= new Array();
 choices[1][0] = "WMS sirve mapas de forma din&aacute;mica presentando la informaci&oacute;n como im&aacute;genes digitales.";
 choices[1][1] = "WMTS permite la visualizaci&oacute;n de mapas a trav&eacute;s de teselas (tiles) de im&aacute;genes.";
 choices[1][2] = "WRS permite la consulta de colecciones de mapas raster.";
 choices[1][3] = "WFS permite la consulta y descarga de datos vectoriales.";
 answers[1] = choices[1][2];
 units[1] = "71";
 comments[1] = "Id Pregunta: 10039. AGE A1 2015";


//  Id pregunta: 10398 AÃ±o de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Qu&eacute; art&iacute;culo de la Ley Org&aacute;nica 3/2007 para la igualdad efectiva de mujeres y hombres, regula las acciones positivas?";
 choices[2]= new Array();
 choices[2][0] = "Art. 13, L.O.3/2007.";
 choices[2][1] = "Art. 14, L.O.3/2007.";
 choices[2][2] = "Art. 11, L.O.3/2007.";
 choices[2][3] = "Ninguna es correcta.";
 answers[2] = choices[2][2];
 units[2] = "14";
 comments[2] = "Id Pregunta: 10398. POLITICAS DE IGUALDAD";


//  Id pregunta: 10250 AÃ±o de creación de pregunta: 2016
 questions[3]= "4)  La Constituci&oacute;n Espa&ntilde;ola propugna como valores superiores de su ordenamiento jur&iacute;dico:";
 choices[3]= new Array();
 choices[3][0] = "La Libertad, la Democracia, la Igualdad y la Justicia.";
 choices[3][1] = "La Libertad, la Justicia, la Seguridad y promover el bien de cuantos la integran.";
 choices[3][2] = "La Soberan&iacute;a, el Sufragio Universal, la Unidad de la Naci&oacute;n espa&ntilde;ola y el derecho a la autonom&iacute;a de las nacionalidades y regiones que la integran.";
 choices[3][3] = "La Justicia, el Pluralismo Pol&iacute;tico, la Igualdad, y la Libertad.";
 answers[3] = choices[3][2];
 units[3] = "1";
 comments[3] = "Id Pregunta: 10250. CONSTITUCION1978";


//  Id pregunta: 10382 AÃ±o de creación de pregunta: 2016
 questions[4]= "5)  Seg&uacute;n la ley org&aacute;nica 3/2007, los actos y las cl&aacute;usulas de los negocios jur&iacute;dicos que causen discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[4]= new Array();
 choices[4][0] = "Se considerar&aacute;n nulos y sin efecto.";
 choices[4][1] = "Est&aacute;n sometidos a una tasa fiscal especial (Tasa Tobin)";
 choices[4][2] = "Son impugnables ante los juzgados especiales contra la violencia de g&eacute;nero.";
 choices[4][3] = "Si son actos administrativos, el recurso se debe interponer, en todo caso, ante el Ministerio de Igualdad.";
 answers[4] = choices[4][0];
 units[4] = "14";
 comments[4] = "Id Pregunta: 10382. POLITICAS DE IGUALDAD";


//  Id pregunta: 10087 AÃ±o de creación de pregunta: 2016
 questions[5]= "6)  Respecto a la pol&iacute;tica de normalizaci&oacute;n TIC en la Uni&oacute;n Europea, como se&ntilde;ala el Reglamento 1025/2012 del Parlamento y del Consejo, la identificaci&oacute;n de especificaciones t&eacute;cnicas de las TIC admisibles a efectos de referenciaci&oacute;n:";
 choices[5]= new Array();
 choices[5][0] = "Ha de estar siempre basada en normas de estandarizaci&oacute;n nacionales, europeas o internacionales.";
 choices[5][1] = "No deben ser usadas para permitir la interoperabilidad en la contrataci&oacute;n p&uacute;blica, dado que se podr&iacute;an dar situaciones monopol&iacute;sticas.";
 choices[5][2] = "Ser&aacute; realizada por la Comisi&oacute;n, bien a propuesta de un Estado miembro o por iniciativa propia, sin necesidad de ser una norma nacional, europea o internacional, cumpli&eacute;ndose los dem&aacute;s requisitos establecidos en el reglamento.";
 choices[5][3] = "Requieren para su adopci&oacute;n la unanimidad de todos los Estados miembro.";
 answers[5] = choices[5][2];
 units[5] = "48";
 comments[5] = "Id Pregunta: 10087. AGE A1 2015";


//  Id pregunta: 10000 AÃ±o de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Cu&aacute;l de los siguientes NO es un objetivo del Plan de Transformaci&oacute;n Digital de la AGE?";
 choices[6]= new Array();
 choices[6][0] = "Consolidar el tejido productivo nacional apoyando el efectivo despliegue de la Sociedad de la Informaci&oacute;n.";
 choices[6][1] = "Conseguir una mayor eficiencia en los servicios TIC comunes de la Administraci&oacute;n.";
 choices[6][2] = "Implantar una gesti&oacute;n corporativa inteligente de la informaci&oacute;n y los datos.";
 choices[6][3] = "Adoptar una estrategia corporativa de seguridad y usabilidad.";
 answers[6] = choices[6][0];
 units[6] = "26";
 comments[6] = "Id Pregunta: 10000. AGE A1 2015";


//  Id pregunta: 10053 AÃ±o de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Cu&aacute;l de los siguientes objetivos est&aacute; fuera del alcance de una reuni&oacute;n diaria de SCRUM (daily scrum)?";
 choices[7]= new Array();
 choices[7][0] = "Exponer las tareas no planificadas que tambi&eacute;n est&aacute;n haciendo los miembros del equipo.";
 choices[7][1] = "Resolver detalladamente los problemas que puedan tener los miembros del equipo.";
 choices[7][2] = "Poner de manifiesto el ritmo de trabajo de cada miembro del equipo.";
 choices[7][3] = "Identificar las tareas que puedan afectar a otros miembros del equipo.";
 answers[7] = choices[7][1];
 units[7] = "84";
 comments[7] = "Id Pregunta: 10053. AGE A1 2015";


//  Id pregunta: 10066 AÃ±o de creación de pregunta: 2016
 questions[8]= "9)  Para los siguientes tipos de copias de seguridad, indique cu&aacute;l de las siguientes secuencias los ordena de mayor a menor tiempo de restauraci&oacute;n:";
 choices[8]= new Array();
 choices[8][0] = "Incremental, diferencial, completa";
 choices[8][1] = "Completa, incremental, diferencial";
 choices[8][2] = "Completa, diferencial, incremental";
 choices[8][3] = "No hay diferencia en el tiempo de restauraci&oacute;n, encontr&aacute;ndose la diferencia en el espacio de almacenamiento consumido.";
 answers[8] = choices[8][0];
 units[8] = "53";
 comments[8] = "Id Pregunta: 10066. AGE A1 2015. Pregunta anulada en el examen real. La opci&oacute;n A dec&iacute;a &quot;Diferencial, incremental, completa&quot;, por lo que ninguna respuesta pod&iacute;a considerarse correcta";


//  Id pregunta: 10125 AÃ±o de creación de pregunta: 2016
 questions[9]= "10)  El derecho de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/20013  podr&aacute; ser limitado cuando acceder a la informaci&oacute;n suponga un perjuicio, se&ntilde;ale cual NO est&aacute; contemplado en dicha ley:";
 choices[9]= new Array();
 choices[9][0] = "Los intereses de las administraciones que cuenten con su propio Consejo de Transparencia u &oacute;rgano equivalente.";
 choices[9][1] = "La garant&iacute;a de la confidencialidad o el secreto requerido en procesos de toma de decisi&oacute;n.";
 choices[9][2] = "La protecci&oacute;n del medio ambiente.";
 choices[9][3] = "Los intereses econ&oacute;micos y comerciales.";
 answers[9] = choices[9][0];
 units[9] = "22";
 comments[9] = "Id Pregunta: 10125. ";


//  Id pregunta: 10121 AÃ±o de creación de pregunta: 2016
 questions[10]= "11)  Se&ntilde;ale la respuesta incorrecta respecto al Consejo de Transparencia y Buen Gobierno";
 choices[10]= new Array();
 choices[10][0] = "Las resoluciones del Consejo se publican en el Portal de la Transparencia";
 choices[10][1] = "Las resoluciones del Consejo se publican en la p&aacute;gina web institucional del organismo";
 choices[10][2] = "La memoria anual del Consejo ser&aacute; publicada integramente en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 choices[10][3] = "Un resumen de la memoria anual del Consejo ser&aacute; publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 answers[10] = choices[10][2];
 units[10] = "22";
 comments[10] = "Id Pregunta: 10121. ";


//  Id pregunta: 10018 AÃ±o de creación de pregunta: 2016
 questions[11]= "12)  Indique en qu&eacute; capa del modelo OSI se establece la encriptaci&oacute;n:";
 choices[11]= new Array();
 choices[11][0] = "Aplicaci&oacute;n";
 choices[11][1] = "Sesi&oacute;n";
 choices[11][2] = "Presentaci&oacute;n";
 choices[11][3] = "Transporte";
 answers[11] = choices[11][2];
 units[11] = "105";
 comments[11] = "Id Pregunta: 10018. AGE A1 2015";


//  Id pregunta: 10504 AÃ±o de creación de pregunta: 2016
 questions[12]= "13)  Sobre el per&iacute;odo medio de pagos, se&ntilde;ale la respuesta falsa:";
 choices[12]= new Array();
 choices[12][0] = "Se entiende que existe sostenibilidad de la deuda comercial, cuando el periodo medio de pago a los proveedores no supere el plazo m&aacute;ximo previsto en la normativa sobre morosidad.";
 choices[12][1] = "Este control informatizado y sistematizado de las facturas favorecer&aacute; un seguimiento riguroso de la morosidad a trav&eacute;s de un indicador, el periodo medio de pagos, que visualizar&aacute; el volumen de deuda comercial de las Administraciones P&uacute;blicas.";
 choices[12][2] = "Para el c&aacute;lculo econ&oacute;mico del per&iacute;odo medio de pago a proveedores, se tendr&aacute;n en cuenta las facturas expedidas desde el 1 de enero de 2015 que consten en el registro contable de facturas o sistema equivalente y las certificaciones mensuales de obra aprobadas a partir de la misma fecha.";
 choices[12][3] = "El per&iacute;odo medio de pagos se calcular&aacute; mediante la siguiente f&oacute;rmula: Periodo medio de pago global a proveedores = &Sigma; (periodo medio de pago de cada entidad x importe operaciones de la entidad)/ &Sigma; importe operaciones de las entidades";
 answers[12] = choices[12][2];
 units[12] = "10";
 comments[12] = "Id Pregunta: 10504. PRESUPUESTOS GENERALES";


//  Id pregunta: 10294 AÃ±o de creación de pregunta: 2016
 questions[13]= "14)  Indique a qui&eacute;n corresponde la funci&oacute;n de promover el inter&eacute;s general de la Uni&oacute;n Europea y tomar las iniciativas adecuadas con este fin:";
 choices[13]= new Array();
 choices[13][0] = "Al Consejo Europeo.";
 choices[13][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[13][2] = "A la Comisi&oacute;n Europea.";
 choices[13][3] = "Al Parlamento Europeo.";
 answers[13] = choices[13][2];
 units[13] = "5";
 comments[13] = "Id Pregunta: 10294. UNION EUROPEA";


//  Id pregunta: 10367 AÃ±o de creación de pregunta: 2016
 questions[14]= "15)  Es una funci&oacute;n del Presidente del Parlamento Europeo:";
 choices[14]= new Array();
 choices[14][0] = "Presentar la moci&oacute;n de censura.";
 choices[14][1] = "Presidir las sesiones del Parlamento.";
 choices[14][2] = "Organizar la Secretar&iacute;a General.";
 choices[14][3] = "Preparar las actividades de las Comisiones.";
 answers[14] = choices[14][1];
 units[14] = "5";
 comments[14] = "Id Pregunta: 10367. UNION EUROPEA";


//  Id pregunta: 10671 AÃ±o de creación de pregunta: 2016
 questions[15]= "16)  De forma general, las fases de un procedimiento administrativo com&uacute;n son:";
 choices[15]= new Array();
 choices[15][0] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, finalizaci&oacute;n y ejecuci&oacute;n.";
 choices[15][1] = "Iniciaci&oacute;n, desarrollo y resoluci&oacute;n.";
 choices[15][2] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, resoluci&oacute;n y ejecuci&oacute;n.";
 choices[15][3] = "Iniciaci&oacute;n, desarrollo y finalizaci&oacute;n.";
 answers[15] = choices[15][0];
 units[15] = "7";
 comments[15] = "Id Pregunta: 10671. T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 10623 AÃ±o de creación de pregunta: 2016
 questions[16]= "17)  En PHP 5.0, &iquest;cu&aacute;l es la regla para formar los nombres de las variables?";
 choices[16]= new Array();
 choices[16][0] = "Una variable debe comenzar con el signo $ seguido del nombre de la variable.";
 choices[16][1] = "Una variable debe comenzar con el signo &amp; seguido del nombre de la variable.";
 choices[16][2] = "Una variable debe comenzar por un car&aacute;cter num&eacute;rico.";
 choices[16][3] = "No hay regla para la formaci&oacute;n de los nombres de las variables.";
 answers[16] = choices[16][0];
 units[16] = "65";
 comments[16] = "Id Pregunta: 10623. Junta de Extremadura A1 2015";


//  Id pregunta: 10474 AÃ±o de creación de pregunta: 2016
 questions[17]= "18)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los interventores delegados ser&aacute;n designados entre funcionarios de los Cuerpos:";
 choices[17]= new Array();
 choices[17][0] = "Cuerpo Superior de Interventores y Auditores del Estado.";
 choices[17][1] = "Todas las respuestas son correctas.";
 choices[17][2] = "Cuerpo Militar de Intervenci&oacute;n de la Defensa.";
 choices[17][3] = "Cuerpo Superior de Intervenci&oacute;n y Contabilidad de Administraci&oacute;n de la Seguridad Social.";
 answers[17] = choices[17][1];
 units[17] = "10";
 comments[17] = "Id Pregunta: 10474. PRESUPUESTOS GENERALES";


//  Id pregunta: 10430 AÃ±o de creación de pregunta: 2016
 questions[18]= "19)  En el acceso a bienes y servicios, ning&uacute;n contratante podr&aacute; indagar sobre la situaci&oacute;n de embarazo de una mujer demandante del mismo, salvo por razones de:";
 choices[18]= new Array();
 choices[18][0] = "Incompatibilidad del puesto con una baja maternal.";
 choices[18][1] = "Protecci&oacute;n de su salud.";
 choices[18][2] = "Ninguna es correcta.";
 choices[18][3] = "A y B son correctas.";
 answers[18] = choices[18][1];
 units[18] = "14";
 comments[18] = "Id Pregunta: 10430. POLITICAS DE IGUALDAD";


//  Id pregunta: 10429 AÃ±o de creación de pregunta: 2016
 questions[19]= "20)  Para la prevenci&oacute;n del acoso sexual y del acoso por raz&oacute;n de sexo, las Administraciones P&uacute;blicas negociar&aacute;n con la representaci&oacute;n legal de las trabajadoras y trabajadores, un protocolo de actuaci&oacute;n que comprender&aacute;:";
 choices[19]= new Array();
 choices[19][0] = "La identificaci&oacute;n de las personas responsables de atender a quienes formulen una queja o denuncia.";
 choices[19][1] = "El tratamiento p&uacute;blico de las denuncias de hechos que pudieran ser constitutivos de acoso sexual o de acoso por raz&oacute;n de sexo.";
 choices[19][2] = "Ambas son correctas.";
 choices[19][3] = "Ambas son incorrectas.";
 answers[19] = choices[19][0];
 units[19] = "14";
 comments[19] = "Id Pregunta: 10429. POLITICAS DE IGUALDAD";


//  Id pregunta: 10189 AÃ±o de creación de pregunta: 2016
 questions[20]= "21)  De conformidad a lo establecido en la Constituci&oacute;n Espa&ntilde;ola, las Cortes pueden delegar en el Gobierno la potestad de dictar normas con rango de Ley. Cuando se trata de que el Gobierno elabore y apruebe textos articulados esta delegaci&oacute;n tiene que otorgarse mediante:";
 choices[20]= new Array();
 choices[20][0] = "Ley Org&aacute;nica.";
 choices[20][1] = "Ley de Bases.";
 choices[20][2] = "Ley ordinaria.";
 choices[20][3] = "Mandato.";
 answers[20] = choices[20][1];
 units[20] = "1";
 comments[20] = "Id Pregunta: 10189. CONSTITUCION1978";


//  Id pregunta: 10586 AÃ±o de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Cu&aacute;l es el per&iacute;odo temporal del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[21]= new Array();
 choices[21][0] = "Comprende del a&ntilde;o 2015 al 2017";
 choices[21][1] = "Comprende del a&ntilde;o 2015 al 2020";
 choices[21][2] = "Comprende del a&ntilde;o 2016 al 2018";
 choices[21][3] = "Ninguna de las anteriores";
 answers[21] = choices[21][1];
 units[21] = "19";
 comments[21] = "Id Pregunta: 10586. Estrategia TIC";


//  Id pregunta: 10519 AÃ±o de creación de pregunta: 2016
 questions[22]= "23)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas tiene:";
 choices[22]= new Array();
 choices[22][0] = "un art&iacute;culo";
 choices[22][1] = "dos art&iacute;culos";
 choices[22][2] = "tres art&iacute;culos";
 choices[22][3] = "cuatro art&iacute;culos";
 answers[22] = choices[22][1];
 units[22] = "7";
 comments[22] = "Id Pregunta: 10519. LEY 39/2015";


//  Id pregunta: 10009 AÃ±o de creación de pregunta: 2016
 questions[23]= "24)  Con respecto a los entornos de integraci&oacute;n continua, indique cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[23]= new Array();
 choices[23][0] = "Jenkins no dispone de la funcionalidad de extenderse mediante plugins.";
 choices[23][1] = "SonarQube utiliza herramientas de an&aacute;lisis est&aacute;tico de c&oacute;digo que permiten obtener m&eacute;tricas para mejorar la calidad del c&oacute;digo.";
 choices[23][2] = "El fichero POM empleado en Maven no siempre es un fichero XML.";
 choices[23][3] = "Jenkins es un software de integraci&oacute;n continua bajo licencia Oracle.";
 answers[23] = choices[23][1];
 units[23] = "95";
 comments[23] = "Id Pregunta: 10009. AGE A1 2015";


//  Id pregunta: 10399 AÃ±o de creación de pregunta: 2016
 questions[24]= "25)  Las medidas espec&iacute;ficas que adoptar&aacute;n los Poderes P&uacute;blicos a favor de las mujeres para corregir situaciones patentes de desigualdad de hecho con respecto a los hombres, se denominan:";
 choices[24]= new Array();
 choices[24][0] = "Acciones de discriminaci&oacute;n.";
 choices[24][1] = "Acciones positivas.";
 choices[24][2] = "Acciones negativas.";
 choices[24][3] = "Acciones neutras.";
 answers[24] = choices[24][1];
 units[24] = "14";
 comments[24] = "Id Pregunta: 10399. POLITICAS DE IGUALDAD";


//  Id pregunta: 10626 AÃ±o de creación de pregunta: 2016
 questions[25]= "26)  &iquest;Cu&aacute;l es el &oacute;rgano encargado de las funciones de instrucci&oacute;n de expedientes dentro de la Comisi&oacute;n Nacional de los Mercados y la Competencia en materia de comunicaciones electr&oacute;nicas?";
 choices[25]= new Array();
 choices[25][0] = "La Direcci&oacute;n de Telecomunicaciones y del Sector Audiovisual.";
 choices[25][1] = "La Direcci&oacute;n de la Competencia.";
 choices[25][2] = "La Direcci&oacute;n de la Energ&iacute;a.";
 choices[25][3] = "La Direcci&oacute;n de Transportes y del Sector Postal.";
 answers[25] = choices[25][0];
 units[25] = "121";
 comments[25] = "Id Pregunta: 10626. Junta de Extremadura A1 2015";


//  Id pregunta: 10224 AÃ±o de creación de pregunta: 2016
 questions[26]= "27)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[26]= new Array();
 choices[26][0] = "Art&iacute;culo 16.2.";
 choices[26][1] = "Art&iacute;culo 17.1.";
 choices[26][2] = "Art&iacute;culo 18.1.";
 choices[26][3] = "Art&iacute;culo 18.2.";
 answers[26] = choices[26][2];
 units[26] = "1";
 comments[26] = "Id Pregunta: 10224. CONSTITUCION1978";


//  Id pregunta: 10208 AÃ±o de creación de pregunta: 2016
 questions[27]= "28)  La direcci&oacute;n de la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado corresponde a:";
 choices[27]= new Array();
 choices[27][0] = "El Rey.";
 choices[27][1] = "El Jefe del Estado.";
 choices[27][2] = "El Gobierno.";
 choices[27][3] = "El Presidente del Gobierno.";
 answers[27] = choices[27][2];
 units[27] = "1";
 comments[27] = "Id Pregunta: 10208. CONSTITUCION1978";


//  Id pregunta: 10045 AÃ±o de creación de pregunta: 2016
 questions[28]= "29)  46. &iquest;Cu&aacute;l de las siguientes NO es una de las APIs incorporadas a HTML5?";
 choices[28]= new Array();
 choices[28][0] = "HTML Drag and Drop, para arrastrar un objeto a otra localizaci&oacute;n.";
 choices[28][1] = "HTML Advanced Search, para parametrizar y modificar el comportamiento de los buscadores.";
 choices[28][2] = "HTML Local Storage, para almacenar datos en el navegador.";
 choices[28][3] = "HTML SSE, para actualizar una p&aacute;gina web autom&aacute;ticamente sin preguntar al servidor.";
 answers[28] = choices[28][1];
 units[28] = "74";
 comments[28] = "Id Pregunta: 10045. AGE A1 2015";


//  Id pregunta: 10273 AÃ±o de creación de pregunta: 2016
 questions[29]= "30)  Se&ntilde;ale la opci&oacute;n correcta";
 choices[29]= new Array();
 choices[29][0] = "Jenkins un servidor de integraci&oacute;n continua comercial.";
 choices[29][1] = "Extiende su funcionalidad a trav&eacute;s de plugins.";
 choices[29][2] = "Solamente soporta herramientas de control de versiones como CVS, Gity Clearcase.";
 choices[29][3] = "No posee un historial de cambios realizados por build o versi&oacute;n.";
 answers[29] = choices[29][1];
 units[29] = "92";
 comments[29] = "Id Pregunta: 10273. INTEGRACION CONTINUA";


//  Id pregunta: 10495 AÃ±o de creación de pregunta: 2016
 questions[30]= "31)  Seg&uacute;n el art&iacute;culo 13.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el aplazamiento y fraccionamiento de las cantidades adeudadas a la Hacienda P&uacute;blica estatal por las comunidades aut&oacute;nomas y las corporaciones locales se regir&aacute; por:";
 choices[30]= new Array();
 choices[30][0] = "La Ley General Tributaria.";
 choices[30][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General del Estado.";
 choices[30][2] = "La legislaci&oacute;n espec&iacute;fica, la cual tendr&aacute; en cuenta la necesaria reciprocidad entre administraciones.";
 choices[30][3] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 answers[30] = choices[30][2];
 units[30] = "10";
 comments[30] = "Id Pregunta: 10495. PRESUPUESTOS GENERALES";


//  Id pregunta: 10079 AÃ±o de creación de pregunta: 2016
 questions[31]= "32)  La Ley 25/2013, de 27 de diciembre, de impulso de la factura electr&oacute;nica y creaci&oacute;n del Registro Contable de Facturas en el Sector P&uacute;blico, prev&eacute; que anualmente se realice una auditor&iacute;a de sistemas para verificar que los correspondientes registros contables de facturas cumplen con las condiciones de funcionamiento previstas en la normativa aplicable. En el &aacute;mbito de la Administraci&oacute;n General del Estado dicha auditor&iacute;a se realizar&aacute; por:";
 choices[31]= new Array();
 choices[31][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[31][1] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado";
 choices[31][2] = "Las Inspecciones Generales de los Servicios";
 choices[31][3] = "La Agencia Estatal de la Administraci&oacute;n Tributaria";
 answers[31] = choices[31][1];
 units[31] = "75";
 comments[31] = "Id Pregunta: 10079. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 10378 AÃ±o de creación de pregunta: 2016
 questions[32]= "33)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[32]= new Array();
 choices[32][0] = "Quince miembros.";
 choices[32][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[32][2] = "Los miembros que determine el Consejo.";
 choices[32][3] = "Un Presidente y quince miembros.";
 answers[32] = choices[32][1];
 units[32] = "14";
 comments[32] = "Id Pregunta: 10378. UNION EUROPEA";


//  Id pregunta: 10642 AÃ±o de creación de pregunta: 2016
 questions[33]= "34)  En Itil V3 la Gesti&oacute;n de la Cartera de Servicios pertenece a la fase de ciclo de vida:";
 choices[33]= new Array();
 choices[33][0] = "Dise&ntilde;o del servicio.";
 choices[33][1] = "Transici&oacute;n del servicio.";
 choices[33][2] = "Estrategia del servicio.";
 choices[33][3] = "Operaci&oacute;n del servicio.";
 answers[33] = choices[33][2];
 units[33] = "101";
 comments[33] = "Id Pregunta: 10642. Junta de Extremadura A1 2015";


//  Id pregunta: 10211 AÃ±o de creación de pregunta: 2016
 questions[34]= "35)  &iquest;A cu&aacute;ntos miembros del Tribunal Constitucional corresponde proponer al Gobierno?";
 choices[34]= new Array();
 choices[34][0] = "Cuatro.";
 choices[34][1] = "Ninguno.";
 choices[34][2] = "Dos.";
 choices[34][3] = "Seis.";
 answers[34] = choices[34][2];
 units[34] = "1";
 comments[34] = "Id Pregunta: 10211. CONSTITUCION1978";


//  Id pregunta: 10292 AÃ±o de creación de pregunta: 2016
 questions[35]= "36)  Indique la afirmaci&oacute;n correcta relativa al Parlamento Europeo:";
 choices[35]= new Array();
 choices[35][0] = "Se reunir&aacute; con previa convocatoria el segundo martes de marzo.";
 choices[35][1] = "Se reunir&aacute; sin necesidad de previa convocatoria el segundo martes de marzo.";
 choices[35][2] = "Se reunir&aacute; la segunda semana de enero con previa convocatoria.";
 choices[35][3] = "Se reunir&aacute; la tercera semana de enero sin previa convocatoria.";
 answers[35] = choices[35][1];
 units[35] = "5";
 comments[35] = "Id Pregunta: 10292. UNION EUROPEA";


//  Id pregunta: 10512 AÃ±o de creación de pregunta: 2016
 questions[36]= "37)  Podr&aacute;n establecerse especialidades del procedimiento referidas a los &oacute;rganos competentes, plazos propios del concreto procedimiento por raz&oacute;n de la materia, formas de iniciaci&oacute;n y terminaci&oacute;n, publicaci&oacute;n e informes a recabar:";
 choices[36]= new Array();
 choices[36][0] = "solo mediante ley";
 choices[36][1] = "reglamentariamente";
 choices[36][2] = "mediante ley o reglamentariamente";
 choices[36][3] = "ninguna es correcta";
 answers[36] = choices[36][1];
 units[36] = "7";
 comments[36] = "Id Pregunta: 10512. LEY 39/2015";


//  Id pregunta: 10352 AÃ±o de creación de pregunta: 2016
 questions[37]= "38)  La Comisi&oacute;n est&aacute; compuesta por:";
 choices[37]= new Array();
 choices[37][0] = "27 miembros, nacionales de los Estados comunitarios.";
 choices[37][1] = "20 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 choices[37][2] = "25 miembros, nacionales de los Estados comunitarios.";
 choices[37][3] = "d)22 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 answers[37] = choices[37][0];
 units[37] = "5";
 comments[37] = "Id Pregunta: 10352. UNION EUROPEA";


//  Id pregunta: 10591 AÃ±o de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Qui&eacute;n se encarga de revisar la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[38]= new Array();
 choices[38][0] = "La CETIC";
 choices[38][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[38][2] = "La DTIC";
 choices[38][3] = "El MHFP";
 answers[38] = choices[38][0];
 units[38] = "19";
 comments[38] = "Id Pregunta: 10591. Estrategia TIC";


//  Id pregunta: 10596 AÃ±o de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Qui&eacute;n supervisa la elaboraci&oacute;n y ejecutaci&oacute;n de los Planes de Acci&oacute;n Sectoriales?";
 choices[39]= new Array();
 choices[39][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[39][1] = "Las CMADs";
 choices[39][2] = "Ambas son correctas.";
 choices[39][3] = "Ninguna es correcta";
 answers[39] = choices[39][2];
 units[39] = "19";
 comments[39] = "Id Pregunta: 10596. Estrategia TIC";


//  Id pregunta: 10219 AÃ±o de creación de pregunta: 2016
 questions[40]= "41)  Seg&uacute;n establece el Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola, los Decretos-Leyes son normas con rango de Ley que aprueba el Gobierno:";
 choices[40]= new Array();
 choices[40][0] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad y una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[40][1] = "Sin mediar delegaci&oacute;n de las Cortes, aunque deben ser inmediatamente sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[40][2] = "En casos de extraordinaria y urgente necesidad sin mediar delegaci&oacute;n de las Cortes, aunque una vez aprobados deben ser tramitados como proyectos de ley por el procedimiento de urgencia.";
 choices[40][3] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad, y que una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 answers[40] = choices[40][1];
 units[40] = "1";
 comments[40] = "Id Pregunta: 10219. CONSTITUCION1978";


//  Id pregunta: 10188 AÃ±o de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Puede el Estado transferir o delegar a las Comunidades Aut&oacute;nomas facultadas que son de su titularidad?";
 choices[41]= new Array();
 choices[41][0] = "No, en ning&uacute;n caso.";
 choices[41][1] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con cualquier tipo de facultades.";
 choices[41][2] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, sin que el Estado se pueda reservar ninguna forma de control.";
 choices[41][3] = ", mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, previendo en cada caso la correspondiente transferencia de medios financieros, as&iacute; como las formas de control que se reserve el Estado.";
 answers[41] = choices[41][3];
 units[41] = "1";
 comments[41] = "Id Pregunta: 10188. CONSTITUCION1978";


//  Id pregunta: 10142 AÃ±o de creación de pregunta: 2016
 questions[42]= "43)  El plazo para la interposici&oacute;n del recurso de alzada ser&aacute;:";
 choices[42]= new Array();
 choices[42][0] = "De un mes si el acto fuera presunto";
 choices[42][1] = "De un mes si el acto fuera expreso";
 choices[42][2] = "De un mes en cualquier caso";
 choices[42][3] = "No existe un plazo m&aacute;ximo para la interposici&oacute;n de un recurso de alzada";
 answers[42] = choices[42][1];
 units[42] = "8";
 comments[42] = "Id Pregunta: 10142. Ley 39/2015, Art&iacute;culo 122";


//  Id pregunta: 10424 AÃ±o de creación de pregunta: 2016
 questions[43]= "44)  Entre otros criterios de actuaci&oacute;n de las administraciones p&uacute;blicas para la consecuci&oacute;n del principio de igualdad, se encuentra:";
 choices[43]= new Array();
 choices[43][0] = "Evaluar peri&oacute;dicamente la efectividad del principio de igualdad.";
 choices[43][1] = "Penalizar a las empresas que no cumplan con los planes de igualdad.";
 choices[43][2] = "Ninguna es correcta.";
 choices[43][3] = "A y B son correctas.";
 answers[43] = choices[43][0];
 units[43] = "14";
 comments[43] = "Id Pregunta: 10424. POLITICAS DE IGUALDAD";


//  Id pregunta: 10038 AÃ±o de creación de pregunta: 2016
 questions[44]= "45)  LAMP es el acr&oacute;nimo usado para describir un sistema de infraestructura de internet aplicable a la pila:";
 choices[44]= new Array();
 choices[44][0] = "Linux, Ant, MySQL/MariaDB y PJava";
 choices[44][1] = "Linux, Apache, Microsoft SQLServer y Perl, PHP, o Python";
 choices[44][2] = "Linux, Ant, MongoDB y Perl, PHP, o Python";
 choices[44][3] = "Linux, Apache, MySQL/MariaDB y Perl, PHP, o Python";
 answers[44] = choices[44][3];
 units[44] = "62";
 comments[44] = "Id Pregunta: 10038. AGE A1 2015";


//  Id pregunta: 10446 AÃ±o de creación de pregunta: 2016
 questions[45]= "46)  Dentro de la l&oacute;gica presupuestaria, los ingresos tienen car&aacute;cter...";
 choices[45]= new Array();
 choices[45][0] = "Ejecutivo";
 choices[45][1] = "Limitativo";
 choices[45][2] = "Estimativo";
 choices[45][3] = "Progresivo";
 answers[45] = choices[45][2];
 units[45] = "10";
 comments[45] = "Id Pregunta: 10446. PRESUPUESTOS GENERALES";


//  Id pregunta: 10249 AÃ±o de creación de pregunta: 2016
 questions[46]= "47)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[46]= new Array();
 choices[46][0] = "Art&iacute;culo 16.2.";
 choices[46][1] = "Art&iacute;culo 17.1.";
 choices[46][2] = "Art&iacute;culo 18.1.";
 choices[46][3] = "Art&iacute;culo 18.2.";
 answers[46] = choices[46][0];
 units[46] = "1";
 comments[46] = "Id Pregunta: 10249. CONSTITUCION1978";


//  Id pregunta: 10611 AÃ±o de creación de pregunta: 2016
 questions[47]= "48)  Una de las caracter&iacute;sticas de seguridad en SQL Server 2008 es el cifrado transparente de datos. Se&ntilde;ala la afirmaci&oacute;n correcta:";
 choices[47]= new Array();
 choices[47][0] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de registro.";
 choices[47][1] = "SQL Server ofrece la capacidad de buscar dentro de los datos cifrados.";
 choices[47][2] = "Para trabajar con datos cifrados utilizando esta caracter&iacute;stica hay que introducir cambios en las aplicaciones.";
 choices[47][3] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de datos.";
 answers[47] = choices[47][1];
 units[47] = "63";
 comments[47] = "Id Pregunta: 10611. Junta de Extremadura A1 2015";


//  Id pregunta: 10291 AÃ±o de creación de pregunta: 2016
 questions[48]= "49)  La duraci&oacute;n del mandato de los miembros del Tribunal de Cuentas de la Uni&oacute;n Europea es de:";
 choices[48]= new Array();
 choices[48][0] = "Tres a&ntilde;os.";
 choices[48][1] = "Dos a&ntilde;os y medio.";
 choices[48][2] = "Cinco a&ntilde;os.";
 choices[48][3] = "Seis a&ntilde;os.";
 answers[48] = choices[48][3];
 units[48] = "5";
 comments[48] = "Id Pregunta: 10291. UNION EUROPEA";


//  Id pregunta: 10653 AÃ±o de creación de pregunta: 2016
 questions[49]= "50)  &iquest;Cual de las siguientes bases de datos no est&aacute; orientada a grafos?";
 choices[49]= new Array();
 choices[49][0] = "Neo4J ";
 choices[49][1] = "OrientDB ";
 choices[49][2] = "InfoGrid ";
 choices[49][3] = "SimpleDB";
 answers[49] = choices[49][3];
 units[49] = "73";
 comments[49] = "Id Pregunta: 10653. ";


//  Id pregunta: 10479 AÃ±o de creación de pregunta: 2016
 questions[50]= "51)  Conforme a Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el Presupuesto del Estado, los cr&eacute;ditos destinados a atenciones protocolarias y representativas se especificar&aacute;n:";
 choices[50]= new Array();
 choices[50][0] = "A nivel de art&iacute;culo.";
 choices[50][1] = "A nivel de cap&iacute;tulo.";
 choices[50][2] = "Al nivel que corresponda conforme a su concreta clasificaci&oacute;n econ&oacute;mica.";
 choices[50][3] = "A nivel de concepto.";
 answers[50] = choices[50][2];
 units[50] = "10";
 comments[50] = "Id Pregunta: 10479. PRESUPUESTOS GENERALES";


//  Id pregunta: 10529 AÃ±o de creación de pregunta: 2016
 questions[51]= "52)  Se presumir&aacute; la representaci&oacute;n para:";
 choices[51]= new Array();
 choices[51][0] = "formular solicitudes";
 choices[51][1] = "los actos y gestiones de mero tr&aacute;mite";
 choices[51][2] = "presentar declaraciones responsables o comunicaciones";
 choices[51][3] = "interponer recursos, desistir de acciones y renunciar a derechos en nombre de otra persona";
 answers[51] = choices[51][1];
 units[51] = "7";
 comments[51] = "Id Pregunta: 10529. LEY 39/2015";


//  Id pregunta: 10438 AÃ±o de creación de pregunta: 2016
 questions[52]= "53)  El Real Decreto 424/2016, de 11 de noviembre establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales. Se&ntilde;ale la respuesta falsa.";
 choices[52]= new Array();
 choices[52][0] = "Dentro del Ministerio de Energ&iacute;a, Turismo y Agenda Digital se encuentra la Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital, de la que depende la Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n.";
 choices[52][1] = "Suprime la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones.";
 choices[52][2] = "La Direcci&oacute;n General de Racionalizaci&oacute;n y Centralizaci&oacute;n de la Contrataci&oacute;n es un &oacute;rgano directivo perteneciente a la Subsecretar&iacute;a de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[52][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, con rango de Direcci&oacute;n general depende de la Secretar&iacute;a de Estado de Funci&oacute;n P&uacute;blica.";
 answers[52] = choices[52][3];
 units[52] = "43";
 comments[52] = "Id Pregunta: 10438. SERVICIOS COMUNES";


//  Id pregunta: 10251 AÃ±o de creación de pregunta: 2016
 questions[53]= "54)  La Justicia, en Espa&ntilde;a, emana del/de la:";
 choices[53]= new Array();
 choices[53][0] = "Rey.";
 choices[53][1] = "&Oacute;rgano jurisdiccional que act&uacute;a en cada caso.";
 choices[53][2] = "Constituci&oacute;n.";
 choices[53][3] = "Pueblo.";
 answers[53] = choices[53][2];
 units[53] = "1";
 comments[53] = "Id Pregunta: 10251. CONSTITUCION1978";


//  Id pregunta: 10226 AÃ±o de creación de pregunta: 2016
 questions[54]= "55)  Extinguidas todas las l&iacute;neas llamadas en Derecho para la sucesi&oacute;n en el trono:";
 choices[54]= new Array();
 choices[54][0] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n en la forma que m&aacute;s convenga a los intereses de Espa&ntilde;a.";
 choices[54][1] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n atendiendo exclusivamente a los imperativos geneal&oacute;gicos conocidos.";
 choices[54][2] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n de conformidad con los usos y costumbres existentes.";
 choices[54][3] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n conforme a lo que decidan dos grupos parlamentarios o una quinta parte de los Diputados.";
 answers[54] = choices[54][0];
 units[54] = "1";
 comments[54] = "Id Pregunta: 10226. CONSTITUCION1978";


//  Id pregunta: 10583 AÃ±o de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Qu&eacute; establece Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[55]= new Array();
 choices[55][0] = "Los principios rectores";
 choices[55][1] = "Los objetivos estrat&eacute;gicos y las acciones para alcanzarlos";
 choices[55][2] = "Los hitos para su desarrollo gradual";
 choices[55][3] = "Todos los anteriores";
 answers[55] = choices[55][3];
 units[55] = "19";
 comments[55] = "Id Pregunta: 10583. Estrategia TIC";


//  Id pregunta: 10514 AÃ±o de creación de pregunta: 2016
 questions[56]= "57)  El sector p&uacute;blico institucional se integra por:";
 choices[56]= new Array();
 choices[56][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[56][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[56][2] = "las Universidades p&uacute;blicas";
 choices[56][3] = "todas son correctas";
 answers[56] = choices[56][3];
 units[56] = "7";
 comments[56] = "Id Pregunta: 10514. LEY 39/2015";


//  Id pregunta: 10093 AÃ±o de creación de pregunta: 2016
 questions[57]= "58)  Entre las tecnolog&iacute;as o herramientas utilizadas para trabajar en sistemas de Big Data NO se encuentra:";
 choices[57]= new Array();
 choices[57][0] = "Almacenamiento orientado a columnas";
 choices[57][1] = "Framework MapReduce";
 choices[57][2] = "OLTP";
 choices[57][3] = "Bases de datos clave-valor";
 answers[57] = choices[57][2];
 units[57] = "73";
 comments[57] = "Id Pregunta: 10093. AGE A1 2015";


//  Id pregunta: 10372 AÃ±o de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[58]= new Array();
 choices[58][0] = "El Parlamento y el Consejo.";
 choices[58][1] = "El Parlamento y la Comisi&oacute;n.";
 choices[58][2] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[58][3] = "La Comisi&oacute;n y el Consejo.";
 answers[58] = choices[58][2];
 units[58] = "5";
 comments[58] = "Id Pregunta: 10372. UNION EUROPEA";


//  Id pregunta: 10542 AÃ±o de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Cu&aacute;l es el &oacute;rgano de la Comisi&oacute;n Europea encargado de la gobernanza TIC cuya misi&oacute;n es garantizar que la Comisi&oacute;n haga un uso eficaz de las tecnolog&iacute;as de la informaci&oacute;n y la comunicaci&oacute;n para el logro de sus objetivos organizativos y pol&iacute;ticos?";
 choices[59]= new Array();
 choices[59][0] = "La Direcci&oacute;n General de Inform&aacute;tica (DIGIT)";
 choices[59][1] = "Oficina del Organismo de Reguladores Europeos de las Comunicaciones Electr&oacute;nicas (ORECE)";
 choices[59][2] = "Agencia de Seguridad de las Redes y de la Informaci&oacute;n de la Uni&oacute;n Europea (ENISA)";
 choices[59][3] = "Instituto Europeo de Innovaci&oacute;n y Tecnolog&iacute;a (EIT)";
 answers[59] = choices[59][0];
 units[59] = "26";
 comments[59] = "Id Pregunta: 10542. Gobernanza TIC";


//  Id pregunta: 10136 AÃ±o de creación de pregunta: 2016
 questions[60]= "61)  La Ley 15/2014, de racionalizaci&oacute;n del Sector P&uacute;blico y otras medidas de reforma administrativa, no incluye:";
 choices[60]= new Array();
 choices[60][0] = "Modificaci&oacute;n de la Ley General Presupuestaria para permitir de manera m&aacute;s eficaz el control de las cuentas corrientes en las que se sit&uacute;an fondos de Tesoro P&uacute;blico.";
 choices[60][1] = "Permiso para la reordenaci&oacute;n de organismos p&uacute;blicos con el fin de mejorar su eficiencia y reducir el gasto p&uacute;blico.";
 choices[60][2] = "Modificaci&oacute;n normativa para hacer uso de certificados electr&oacute;nicos &uacute;nicos para grupos o colectivos de personas f&iacute;sicas.";
 choices[60][3] = "Implantaci&oacute;n del BOE como Tabl&oacute;n Edictal &Uacute;nico para la realizaci&oacute;n de notificaciones administrativas.";
 answers[60] = choices[60][2];
 units[60] = "12";
 comments[60] = "Id Pregunta: 10136. Leyes modelo econ&oacute;mico";


//  Id pregunta: 10678 AÃ±o de creación de pregunta: 2016
 questions[61]= "62)  De acuerdo a la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia, se define dependencia como:";
 choices[61]= new Array();
 choices[61][0] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[61][1] = "El estado de car&aacute;cter permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[61][2] = "El estado de car&aacute;cter temporal en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[61][3] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad, la discapacidad o la baja laboral, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 answers[61] = choices[61][1];
 units[61] = "14";
 comments[61] = "Id Pregunta: 10678. Dependencia";


//  Id pregunta: 10476 AÃ±o de creación de pregunta: 2016
 questions[62]= "63)  Conforme a la Ley General Presupuestaria, la aprobaci&oacute;n de las normas reguladoras de los anticipos de caja fija mediante las que se indiquen los gastos que pueden ser satisfechos por dicho sistema y los cr&eacute;ditos compete:";
 choices[62]= new Array();
 choices[62][0] = "Al Gobierno.";
 choices[62][1] = "Al Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[62][2] = "A los Ministros y Presidentes o Directores de los Organismos aut&oacute;nomos en relaci&oacute;n con sus respectivos &aacute;mbitos.";
 choices[62][3] = "A los Ministros en relaci&oacute;n con sus respectivos Departamentos, incluyendo los Organismos aut&oacute;nomos que tengan adscritos.";
 answers[62] = choices[62][2];
 units[62] = "10";
 comments[62] = "Id Pregunta: 10476. PRESUPUESTOS GENERALES";


//  Id pregunta: 10405 AÃ±o de creación de pregunta: 2016
 questions[63]= "64)  Se&ntilde;ala las Directivas referidas a la Igualdad de trato de oportunidades entre hombre y mujeres:";
 choices[63]= new Array();
 choices[63][0] = "Directiva 2002/73/CE del Parlamento Europeo y del Consejo.";
 choices[63][1] = "Directiva 2004/113/CE del Consejo.";
 choices[63][2] = "Todas son correctas.";
 choices[63][3] = "Todas son falsas.";
 answers[63] = choices[63][2];
 units[63] = "14";
 comments[63] = "Id Pregunta: 10405. POLITICAS DE IGUALDAD";


//  Id pregunta: 10475 AÃ±o de creación de pregunta: 2016
 questions[64]= "65)  De conformidad con el art&iacute;culo 29.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales se remitir&aacute;n:";
 choices[64]= new Array();
 choices[64][0] = "Anualmente.";
 choices[64][1] = "Ninguna de las respuestas es correcta.";
 choices[64][2] = "Trimestralmente.";
 choices[64][3] = "Semestralmente.";
 answers[64] = choices[64][0];
 units[64] = "10";
 comments[64] = "Id Pregunta: 10475. PRESUPUESTOS GENERALES";


//  Id pregunta: 10309 AÃ±o de creación de pregunta: 2016
 questions[65]= "66)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a los Cuestores:";
 choices[65]= new Array();
 choices[65][0] = "Son miembros de la Mesa del Parlamento Europeo con voz pero sin voto.";
 choices[65][1] = "No son miembros de la Mesa del Parlamento Europeo.";
 choices[65][2] = "Son miembros de la Mesa del Parlamento Europeo con voz y voto.";
 choices[65][3] = "Los Cuestores forman parte de la Mesa del Parlamento Europeo en un n&uacute;mero igual a tres.";
 answers[65] = choices[65][0];
 units[65] = "5";
 comments[65] = "Id Pregunta: 10309. UNION EUROPEA";


//  Id pregunta: 10387 AÃ±o de creación de pregunta: 2016
 questions[66]= "67)  El art&iacute;culo 37 de la Ley Org&aacute;nica 3/2007, para la igualdad efectiva de mujeres y hombres, indica que la Corporaci&oacute;n RTVE, en el ejercicio de su funci&oacute;n, perseguir&aacute; en su programaci&oacute;n:";
 choices[66]= new Array();
 choices[66][0] = "Mostrar anuncios para la igualdad de forma habitual.";
 choices[66][1] = "Ofrecer trabajo a mujeres v&iacute;ctimas de violencia de g&eacute;nero.";
 choices[66][2] = "Promover la incorporaci&oacute;n de mujeres a puestos visibles ante las c&aacute;maras.";
 choices[66][3] = "Reflejar adecuadamente la presencia de las mujeres en los diversos &aacute;mbitos de la vida social.";
 answers[66] = choices[66][3];
 units[66] = "14";
 comments[66] = "Id Pregunta: 10387. POLITICAS DE IGUALDAD";


//  Id pregunta: 10198 AÃ±o de creación de pregunta: 2016
 questions[67]= "68)  La Constituci&oacute;n Espa&ntilde;ola de 1978, estructura las Cortes Generales en:";
 choices[67]= new Array();
 choices[67][0] = "Dos c&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[67][1] = "Consejo de Ministros y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[67][2] = "Gobierno de la Naci&oacute;n y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[67][3] = "Dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Baja) y Senado (C&aacute;mara Alta).";
 answers[67] = choices[67][3];
 units[67] = "1";
 comments[67] = "Id Pregunta: 10198. CONSTITUCION1978";


//  Id pregunta: 10299 AÃ±o de creación de pregunta: 2016
 questions[68]= "69)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[68]= new Array();
 choices[68][0] = "Quince miembros.";
 choices[68][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[68][2] = "Los miembros que determine el Consejo.";
 choices[68][3] = "Un Presidente y quince miembros.";
 answers[68] = choices[68][1];
 units[68] = "5";
 comments[68] = "Id Pregunta: 10299. UNION EUROPEA";


//  Id pregunta: 10358 AÃ±o de creación de pregunta: 2016
 questions[69]= "70)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones no es correcta:";
 choices[69]= new Array();
 choices[69][0] = "a)La Uni&oacute;n Europea no es a&uacute;n una estructura acabada, sino m&aacute;s bien un sistema de gestaci&oacute;n cuya apariencia definitiva a&uacute;n no puede preverse.";
 choices[69][1] = "b) La Uni&oacute;n Europea no es un proceso de integraci&oacute;n sino una Organizaci&oacute;n Internacional sui generis.";
 choices[69][2] = "c) Todas las respuestas son correctas.";
 choices[69][3] = "d)La Uni&oacute;n Europea s&oacute;lo tiene en com&uacute;n con las organizaciones tradicionales de derecho internacional que tambi&eacute;n han sido creadas mediante un tratado internacional.";
 answers[69] = choices[69][1];
 units[69] = "5";
 comments[69] = "Id Pregunta: 10358. UNION EUROPEA";


//  Id pregunta: 10190 AÃ±o de creación de pregunta: 2016
 questions[70]= "71)  La iniciativa legislativa para la reforma de la Constituci&oacute;n Espa&ntilde;ola de 1978:";
 choices[70]= new Array();
 choices[70][0] = "Le corresponde exclusivamente al congreso y al Senado.";
 choices[70][1] = "Puede ser ejercida por el Tribunal Constitucional.";
 choices[70][2] = "Puede ser instada por las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[70][3] = "Le corresponde exclusivamente al Gobierno.";
 answers[70] = choices[70][2];
 units[70] = "1";
 comments[70] = "Id Pregunta: 10190. CONSTITUCION1978";


//  Id pregunta: 10276 AÃ±o de creación de pregunta: 2016
 questions[71]= "72)  Se&ntilde;ale la respuesta falsa";
 choices[71]= new Array();
 choices[71][0] = "El Portal de la Transparencia del Gobierno de Espa&ntilde;a es una subsede de la sede electr&oacute;nica central del Ministerio de la Presidencia.";
 choices[71][1] = "La titularidad de esta subsede corresponde a la Oficina de la Transparencia y Acceso a la Informaci&oacute;n (OTAI), dependiente de la Oficina para la Ejecuci&oacute;n de la Reforma de la Administraci&oacute;n P&uacute;blica (OPERA).";
 choices[71][2] = "La gesti&oacute;n de la plataforma tecnol&oacute;gica es competencia de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones (DTIC), en virtud del Acuerdo de Colaboraci&oacute;n firmado por el Ministerio de la Presidencia y el Ministerio de Hacienda y Administraciones P&uacute;blicas, para el desarrollo del Portal de la Transparencia.";
 choices[71][3] = "La DTIC ser&aacute; responsable de la integridad y disponibilidad de la informaci&oacute;n, que se provea al Portal de la Transparencia a trav&eacute;s de enlaces o v&iacute;nculos a otras p&aacute;ginas o sedes electr&oacute;nicas cuya responsabilidad corresponda a distinto &oacute;rgano o Administraci&oacute;n P&uacute;blica.";
 answers[71] = choices[71][3];
 units[71] = "22";
 comments[71] = "Id Pregunta: 10276. LEY DE TRANSPARENCIA";


//  Id pregunta: 10584 AÃ±o de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Con qu&eacute; frecuencia se revisa la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE, para su alineamiento con las pol&iacute;ticas p&uacute;blicas del gobierno?";
 choices[72]= new Array();
 choices[72][0] = "Bienalmente";
 choices[72][1] = "Anualmente";
 choices[72][2] = "Semestralmente";
 choices[72][3] = "Cada cuatro a&ntilde;os";
 answers[72] = choices[72][1];
 units[72] = "19";
 comments[72] = "Id Pregunta: 10584. Estrategia TIC";


//  Id pregunta: 10373 AÃ±o de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Cu&aacute;ntos Abogados Generales asisten al Tribunal Superior de Justicia?:";
 choices[73]= new Array();
 choices[73][0] = "Nueve.";
 choices[73][1] = "Diez.";
 choices[73][2] = "Siete.";
 choices[73][3] = "Ocho.";
 answers[73] = choices[73][3];
 units[73] = "5";
 comments[73] = "Id Pregunta: 10373. UNION EUROPEA";


//  Id pregunta: 10290 AÃ±o de creación de pregunta: 2016
 questions[74]= "75)  El Parlamento Europeo celebrar&aacute;:";
 choices[74]= new Array();
 choices[74][0] = "Cada a&ntilde;o un per&iacute;odo de sesiones.";
 choices[74][1] = "Los per&iacute;odos de sesiones se dividen de febrero a junio y de septiembre a diciembre.";
 choices[74][2] = "Cada a&ntilde;o tres per&iacute;odos de sesiones.";
 choices[74][3] = "Las sesiones del Parlamento no se dividen en per&iacute;odos de sesiones.";
 answers[74] = choices[74][0];
 units[74] = "5";
 comments[74] = "Id Pregunta: 10290. UNION EUROPEA";


//  Id pregunta: 10134 AÃ±o de creación de pregunta: 2016
 questions[75]= "76)  La Ley 2/2015, de desindexaci&oacute;n de la econom&iacute;a espa&ntilde;ola, parte de un compromiso del Gobierno en el marco:";
 choices[75]= new Array();
 choices[75][0] = "Del Programa Nacional de Reformas 2015 y 2016.";
 choices[75][1] = "Del Plan de Transformaci&oacute;n Digital 2015-2020.";
 choices[75][2] = "Del Programa Nacional de Reformas 2013 y 2014.";
 choices[75][3] = "Del Pacto Fiscal Europeo de 2012.";
 answers[75] = choices[75][2];
 units[75] = "12";
 comments[75] = "Id Pregunta: 10134. Leyes modelo econ&oacute;mico";


//  Id pregunta: 10010 AÃ±o de creación de pregunta: 2016
 questions[76]= "77)  El servicio mediante el cual se localiza un terminal m&oacute;vil dentro de alguna de las N c&eacute;lulas gestionadas coordinadamente en una zona de cobertura se denomina:";
 choices[76]= new Array();
 choices[76][0] = "Paging";
 choices[76][1] = "Roaming";
 choices[76][2] = "Handover";
 choices[76][3] = "Trunking";
 answers[76] = choices[76][0];
 units[76] = "117";
 comments[76] = "Id Pregunta: 10010. AGE A1 2015";


//  Id pregunta: 10657 AÃ±o de creación de pregunta: 2016
 questions[77]= "78)  &iquest;Qu&eacute; es el machine learning?";
 choices[77]= new Array();
 choices[77][0] = "El uso de los datos para el desarrollo de mecanismos de predicci&oacute;n y aprendizaje";
 choices[77][1] = "l uso de datos para la automatizaci&oacute;n de tareas repetitivas";
 choices[77][2] = "El aprendizaje de mecanismos de monitorizaci&oacute;n y alertas";
 choices[77][3] = "Un paradigma en el desarrollo de mecanismos de control ";
 answers[77] = choices[77][0];
 units[77] = "73";
 comments[77] = "Id Pregunta: 10657. ";


//  Id pregunta: 10432 AÃ±o de creación de pregunta: 2016
 questions[78]= "79)  Las sociedades obligadas a presentar cuenta de p&eacute;rdidas y ganancias no abreviada, procurar&aacute;n incluir en su Consejo de Administraci&oacute;n un n&uacute;mero de mujeres que permita alcanzar la presencia equilibrada de mujeres y hombres en un plazo:";
 choices[78]= new Array();
 choices[78][0] = "De ocho a&ntilde;os.";
 choices[78][1] = "El d&iacute;a despu&eacute;s de la publicaci&oacute;n en el BOE de la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombre.";
 choices[78][2] = "Ambas son correctas.";
 choices[78][3] = "No existe un l&iacute;mite.";
 answers[78] = choices[78][0];
 units[78] = "14";
 comments[78] = "Id Pregunta: 10432. POLITICAS DE IGUALDAD";


//  Id pregunta: 10502 AÃ±o de creación de pregunta: 2016
 questions[79]= "80)  La Ley Org&aacute;nica 2/2012 destaca una serie de principios generales entre los que no se encuentra:";
 choices[79]= new Array();
 choices[79][0] = "Principio de transparencia.";
 choices[79][1] = "Principio de cooperaci&oacute;n.";
 choices[79][2] = "Principio de eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos.";
 choices[79][3] = "Principio de lealtad institucional.";
 answers[79] = choices[79][1];
 units[79] = "10";
 comments[79] = "Id Pregunta: 10502. PRESUPUESTOS GENERALES";


//  Id pregunta: 10366 AÃ±o de creación de pregunta: 2016
 questions[80]= "81)  Para constituir un Grupo en el Parlamento Europeo es necesario al menos:";
 choices[80]= new Array();
 choices[80][0] = "20 parlamentarios.";
 choices[80][1] = "29 parlamentarios.";
 choices[80][2] = "18 parlamentarios.";
 choices[80][3] = "23 parlamentarios.";
 answers[80] = choices[80][0];
 units[80] = "5";
 comments[80] = "Id Pregunta: 10366. UNION EUROPEA";


//  Id pregunta: 10593 AÃ±o de creación de pregunta: 2016
 questions[81]= "82)  A nivel departamental, &iquest;qui&eacute;n es el responsable de la coordinaci&oacute;n interna para llevar a cabo la transformaci&oacute;n digital?";
 choices[81]= new Array();
 choices[81][0] = "Las CMADs (Comisi&oacute;n Ministerial de Administraci&oacute;n Digital)";
 choices[81][1] = "La CETIC";
 choices[81][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[81][3] = "El MHFP";
 answers[81] = choices[81][0];
 units[81] = "19";
 comments[81] = "Id Pregunta: 10593. Estrategia TIC";


//  Id pregunta: 10527 AÃ±o de creación de pregunta: 2016
 questions[82]= "83)  Los interesados con capacidad de obrar podr&aacute;n actuar por medio de representante:";
 choices[82]= new Array();
 choices[82][0] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 choices[82][1] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[82][2] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[82][3] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 answers[82] = choices[82][2];
 units[82] = "7";
 comments[82] = "Id Pregunta: 10527. LEY 39/2015";


//  Id pregunta: 10239 AÃ±o de creación de pregunta: 2016
 questions[83]= "84)  Respecto de las relaciones que constitucionalmente se regulan entre los miembros del Gobierno y las Cortes Generales:";
 choices[83]= new Array();
 choices[83][0] = "La comparecencia de los miembros del Gobierno ante las C&aacute;maras y sus Comisiones puede extenderse tambi&eacute;n a los funcionarios de sus Departamentos.";
 choices[83][1] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo solicitasen las propias C&aacute;maras o sus Comisiones.";
 choices[83][2] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo deciden los miembros del Gobierno.";
 choices[83][3] = "Los funcionarios no comparecer&aacute;n en ning&uacute;n caso.";
 answers[83] = choices[83][0];
 units[83] = "1";
 comments[83] = "Id Pregunta: 10239. CONSTITUCION1978";


//  Id pregunta: 10288 AÃ±o de creación de pregunta: 2016
 questions[84]= "85)  Cu&aacute;l no es uno de los pilares que cimientan el Plan de Acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[84]= new Array();
 choices[84][0] = "Configuraci&oacute;n de un marco que habilite la movilidad transfronteriza mediante los servicios p&uacute;blicos digitales;";
 choices[84][1] = "Facilitar la interacci&oacute;n digital con ciudadanos y empresas mediante AA.PP. abiertas y flexibles que impliquen a los actores interesados en el dise&ntilde;o de pol&iacute;ticas y servicios de una forma colaborativa;";
 choices[84][2] = "Sociedad digital integradora, donde los ciudadanos tengan las cualificaciones adecuadas para aprovechar las oportunidades ofrecidas por Internet.";
 choices[84][3] = "Puesta a disposici&oacute;n de habilitadores y facilitadores claves, servicios y activos reutilizables.";
 answers[84] = choices[84][2];
 units[84] = "5";
 comments[84] = "Id Pregunta: 10288. UNION EUROPEA";


//  Id pregunta: 10270 AÃ±o de creación de pregunta: 2016
 questions[85]= "86)  La tutela de los derechos fundamentales y libertades p&uacute;blicas reconocidos en la secci&oacute;n primera del cap&iacute;tulo II del T&iacute;tulo I de la Constituci&oacute;n espa&ntilde;ola podr&aacute; recabarse por cualquier ciudadano:";
 choices[85]= new Array();
 choices[85][0] = "S&oacute;lo ante el Tribunal Constitucional de acuerdo con lo previsto en el Art&iacute;culo 161.1.a), referente al recurso de Inconstitucionalidad.";
 choices[85][1] = "S&oacute;lo ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad.";
 choices[85][2] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, ante el Tribunal Constitucional a trav&eacute;s del recurso de inconstitucionalidad.";
 choices[85][3] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional.";
 answers[85] = choices[85][0];
 units[85] = "1";
 comments[85] = "Id Pregunta: 10270. CONSTITUCION1978";


//  Id pregunta: 10412 AÃ±o de creación de pregunta: 2016
 questions[86]= "87)  &Aacute;mbito de aplicaci&oacute;n de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombre:";
 choices[86]= new Array();
 choices[86][0] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Europeo.";
 choices[86][1] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Espa&ntilde;ol.";
 choices[86][2] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Internacional.";
 choices[86][3] = "Ninguna de ellas se ajusta al &aacute;mbito de aplicaci&oacute;n.";
 answers[86] = choices[86][1];
 units[86] = "14";
 comments[86] = "Id Pregunta: 10412. POLITICAS DE IGUALDAD";


//  Id pregunta: 10493 AÃ±o de creación de pregunta: 2016
 questions[87]= "88)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, inspeccionar la actividad de las oficinas de contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una competencia de:";
 choices[87]= new Array();
 choices[87][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[87][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[87][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[87][3] = "La Intervenci&oacute;n General de la Seguridad Social.";
 answers[87] = choices[87][2];
 units[87] = "10";
 comments[87] = "Id Pregunta: 10493. PRESUPUESTOS GENERALES";


//  Id pregunta: 10092 AÃ±o de creación de pregunta: 2016
 questions[88]= "89)  Seg&uacute;n AENOR, la certificaci&oacute;n es:";
 choices[88]= new Array();
 choices[88][0] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 choices[88][1] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple con los requisitos legales para salir al mercado.";
 choices[88][2] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio es beneficioso para los consumidores.";
 choices[88][3] = "La acci&oacute;n llevada a cabo por una entidad dependiente de la Administraci&oacute;n p&uacute;blica mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 answers[88] = choices[88][0];
 units[88] = "48";
 comments[88] = "Id Pregunta: 10092. AGE A1 2015";


//  Id pregunta: 10301 AÃ±o de creación de pregunta: 2016
 questions[89]= "90)  El Presidente del Tribunal de Cuentas es elegido por:";
 choices[89]= new Array();
 choices[89][0] = "Los propios miembros del Tribunal.";
 choices[89][1] = "El Consejo de Europa.";
 choices[89][2] = "El Consejo Europeo.";
 choices[89][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[89] = choices[89][0];
 units[89] = "5";
 comments[89] = "Id Pregunta: 10301. UNION EUROPEA";


//  Id pregunta: 10388 AÃ±o de creación de pregunta: 2016
 questions[90]= "91)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[90]= new Array();
 choices[90][0] = "Indirecta.";
 choices[90][1] = "Directa.";
 choices[90][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[90][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[90] = choices[90][1];
 units[90] = "14";
 comments[90] = "Id Pregunta: 10388. POLITICAS DE IGUALDAD";


//  Id pregunta: 10393 AÃ±o de creación de pregunta: 2016
 questions[91]= "92)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[91]= new Array();
 choices[91][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[91][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[91][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[91][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[91] = choices[91][0];
 units[91] = "14";
 comments[91] = "Id Pregunta: 10393. POLITICAS DE IGUALDAD";


//  Id pregunta: 10647 AÃ±o de creación de pregunta: 2016
 questions[92]= "93)  En Itil V3, entre los factores que hay que tener en cuenta en la evaluaci&oacute;n de herramientas de Gesti&oacute;n del Servicio se encuentran:";
 choices[92]= new Array();
 choices[92][0] = "Estructura, tratamiento, integraci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[92][1] = "structura, salvaguarda, integraci&oacute;n de datos, flexibilidad de implementaci&oacute;n, uso y comunicaci&oacute;n de datos.";
 choices[92][2] = "Estructura, tratamiento, inspecci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[92][3] = "Responsabilidad, tratamiento, inspecci&oacute;n de datos y soporte a la monitorizaci&oacute;n de los niveles de servicio.";
 answers[92] = choices[92][0];
 units[92] = "101";
 comments[92] = "Id Pregunta: 10647. Junta de Extremadura A1 2015";


//  Id pregunta: 10465 AÃ±o de creación de pregunta: 2016
 questions[93]= "94)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales deber&aacute; de contener:";
 choices[93]= new Array();
 choices[93][0] = "Las respuestas a) y b) son correctas.";
 choices[93][1] = "Las respuestas a) y b) no son correctas.";
 choices[93][2] = "Contenido coherente con los planes sectoriales.";
 choices[93][3] = "Programas de actuaci&oacute;n de existentes en el &aacute;mbito de cada departamento.";
 answers[93] = choices[93][0];
 units[93] = "10";
 comments[93] = "Id Pregunta: 10465. PRESUPUESTOS GENERALES";


//  Id pregunta: 10315 AÃ±o de creación de pregunta: 2016
 questions[94]= "95)  El Colegio de Comisarios se re&uacute;ne:";
 choices[94]= new Array();
 choices[94][0] = "Una vez por semana.";
 choices[94][1] = "Una vez al mes.";
 choices[94][2] = "Dos veces en semana.";
 choices[94][3] = "Cuando lo acuerde el Presidente de la Comisi&oacute;n, y adem&aacute;s una vez al mes.";
 answers[94] = choices[94][0];
 units[94] = "5";
 comments[94] = "Id Pregunta: 10315. UNION EUROPEA";


//  Id pregunta: 10374 AÃ±o de creación de pregunta: 2016
 questions[95]= "96)  Las instituciones de la Uni&oacute;n Europea son:";
 choices[95]= new Array();
 choices[95][0] = "El Consejo, la Comisi&oacute;n, el Parlamento y el Tribunal de Justicia.";
 choices[95][1] = "El Consejo, el Parlamento y el Tribunal de Justicia.";
 choices[95][2] = "El Consejo, el Parlamento y la Comisi&oacute;n.";
 choices[95][3] = "El Consejo, la Comisi&oacute;n, el Parlamento Europeo, el Tribunal de Justicia y el Tribunal de Cuentas.";
 answers[95] = choices[95][3];
 units[95] = "5";
 comments[95] = "Id Pregunta: 10374. UNION EUROPEA";


//  Id pregunta: 10124 AÃ±o de creación de pregunta: 2016
 questions[96]= "97)  Se&ntilde;ale la VERDADERA con respecto a las las reclamaciones ante el Consejo de Transparencia y Buen Gobierno:";
 choices[96]= new Array();
 choices[96][0] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de tres meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[96][1] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de seis meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[96][2] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[96][3] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; estimada";
 answers[96] = choices[96][0];
 units[96] = "22";
 comments[96] = "Id Pregunta: 10124. ";


//  Id pregunta: 10510 AÃ±o de creación de pregunta: 2016
 questions[97]= "98)  La presente Ley tiene por objeto regular: (se&ntilde;ala la incorrecta)";
 choices[97]= new Array();
 choices[97][0] = "Los requisitos de validez y eficacia de los actos administrativos";
 choices[97][1] = "El procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas, incluyendo el sancionador y el de reclamaci&oacute;n de responsabilidad de las Administraciones P&uacute;blicas";
 choices[97][2] = "Las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[97][3] = "Los principios a los que se ha de ajustar el ejercicio de la iniciativa legislativa y la potestad reglamentaria";
 answers[97] = choices[97][2];
 units[97] = "7";
 comments[97] = "Id Pregunta: 10510. LEY 39/2015";


//  Id pregunta: 10555 AÃ±o de creación de pregunta: 2016
 questions[98]= "99)  &iquest;Qui&eacute;nes son los beneficiarios de la estrategia para el Mercado &Uacute;nico Digital en la UE?";
 choices[98]= new Array();
 choices[98][0] = "Consumidores";
 choices[98][1] = "PYMES y Start-ups";
 choices[98][2] = "La Industria";
 choices[98][3] = "Todos los anteriores";
 answers[98] = choices[98][3];
 units[98] = "17";
 comments[98] = "Id Pregunta: 10555. Mercado &Uacute;nico Digital";


//  Id pregunta: 10179 AÃ±o de creación de pregunta: 2016
 questions[99]= "100)  &iquest;Qu&eacute; tipo de ley aprueba los estatutos de autonom&iacute;a?";
 choices[99]= new Array();
 choices[99][0] = "Una ley orginaria.";
 choices[99][1] = "Una ley org&aacute;nica.";
 choices[99][2] = "Una ley de bases.";
 choices[99][3] = "Una ley de transferencia.";
 answers[99] = choices[99][1];
 units[99] = "1";
 comments[99] = "Id Pregunta: 10179. CONSTITUCION1978";


