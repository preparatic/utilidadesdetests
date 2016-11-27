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

//  Id pregunta: 785 Año de creación de pregunta: 2016
 questions[0]= "1)  Se&ntilde;ale la respuesta correcta:";
 choices[0]= new Array();
 choices[0][0] = "corresponde a los &oacute;rganos superiores establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos directivos su desarrollo y ejecuci&oacute;n";
 choices[0][1] = "corresponde establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos superiores";
 choices[0][2] = "corresponde establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos directivos";
 choices[0][3] = "corresponde a los &oacute;rganos directivos establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos superiores su desarrollo y ejecuci&oacute;n";
 answers[0] = choices[0][0];
 units[0] = "4, 7, 8, 9";
 comments[0] = "Id Pregunta: 785. Ley 40/2015";


//  Id pregunta: 247 Año de creación de pregunta: 2016
 questions[1]= "2)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la Regencia se ejercer&aacute;:";
 choices[1]= new Array();
 choices[1][0] = "Por mandato constitucional y siempre en nombre del Rey.";
 choices[1][1] = "Por Orden Ministerial.";
 choices[1][2] = "Por mandato constitucional y siempre en nombre del pueblo espa&ntilde;ol.";
 choices[1][3] = "Por mandato de las Cortes Generales y siempre en nombre del pueblo espa&ntilde;ol.";
 answers[1] = choices[1][0];
 units[1] = "1";
 comments[1] = "Id Pregunta: 247. CONSTITUCION1978";


//  Id pregunta: 758 Año de creación de pregunta: 2016
 questions[2]= "3)  Las Administraciones P&uacute;blicas sirven con objetividad los intereses generales, con sometimiento pleno a la Constituci&oacute;n, a la Ley y al Derecho y act&uacute;an de acuerdo con los principios de:";
 choices[2]= new Array();
 choices[2][0] = "eficacia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[2][1] = "eficiencia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 choices[2][2] = "eficacia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[2][3] = "eficiencia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 answers[2] = choices[2][2];
 units[2] = "4, 7, 8, 9";
 comments[2] = "Id Pregunta: 758. Ley 40/2015";


//  Id pregunta: 746 Año de creación de pregunta: 2016
 questions[3]= "4)  Respecto a los contratos de colaboraci&oacute;n entre el sector p&uacute;blico y el sector privado, NO se incluyen entre las prestaciones que pueden ser objeto de estos contratos:";
 choices[3]= new Array();
 choices[3][0] = "La construcci&oacute;n, instalaci&oacute;n o transformaci&oacute;n de obras, equipos, sistemas, y productos o bienes complejos, as&iacute; como su mantenimiento, actualizaci&oacute;n o renovaci&oacute;n, su explotaci&oacute;n o su gesti&oacute;n.";
 choices[3][1] = "La gesti&oacute;n integral del mantenimiento de instalaciones para la investigaci&oacute;n.";
 choices[3][2] = "La fabricaci&oacute;n de bienes y la prestaci&oacute;n de servicios que incorporen tecnolog&iacute;a espec&iacute;ficamente desarrollada con el prop&oacute;sito de aportar soluciones m&aacute;s avanzadas y econ&oacute;micamente m&aacute;s ventajosas que las existentes en el mercado.";
 choices[3][3] = "Todas las anteriores pueden ser objeto de ese tipo de contratos.";
 answers[3] = choices[3][1];
 units[3] = "18, 20";
 comments[3] = "Id Pregunta: 746. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 39 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes respuestas NO es un servicio definido por el Open Geospatial Consortium (OGC)?";
 choices[4]= new Array();
 choices[4][0] = "WMS sirve mapas de forma din&aacute;mica presentando la informaci&oacute;n como im&aacute;genes digitales.";
 choices[4][1] = "WMTS permite la visualizaci&oacute;n de mapas a trav&eacute;s de teselas (tiles) de im&aacute;genes.";
 choices[4][2] = "WRS permite la consulta de colecciones de mapas raster.";
 choices[4][3] = "WFS permite la consulta y descarga de datos vectoriales.";
 answers[4] = choices[4][2];
 units[4] = "71";
 comments[4] = "Id Pregunta: 39. AGE A1 2015";


//  Id pregunta: 574 Año de creación de pregunta: 2016
 questions[5]= "6)  Son herramientas espec&iacute;ficas de control de versiones de software:";
 choices[5]= new Array();
 choices[5][0] = "Mercurial, Git y Apache Subversion.";
 choices[5][1] = "Gimp, Mercurial y Git.";
 choices[5][2] = "RedMine, Planner y OpenProj.";
 choices[5][3] = "Cassandra, Git y REDIS.";
 answers[5] = choices[5][0];
 units[5] = "92";
 comments[5] = "Id Pregunta: 574. Tema 92. TAI 2016.";


//  Id pregunta: 747 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Cu&aacute;les de los siguientes principios de inspiraci&oacute;n en la funci&oacute;n gerencial NO incorpora la Ley 40/2015?";
 choices[6]= new Array();
 choices[6][0] = "Buena fe, confianza leg&iacute;tima y lealtad institucional.";
 choices[6][1] = "Calidad de los servicios p&uacute;blicos";
 choices[6][2] = "Responsabilidad por la gesti&oacute;n p&uacute;blica.";
 choices[6][3] = "Servicio efectivo a los ciudadanos";
 answers[6] = choices[6][1];
 units[6] = "18, 20";
 comments[6] = "Id Pregunta: 747. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 602 Año de creación de pregunta: 2016
 questions[7]= "8)  Como todo criptosistema de clave p&uacute;blica, el protocolo del criptosistema RSA:";
 choices[7]= new Array();
 choices[7][0] = "Tiene dos partes: Cifrado de Mensajes, Descifrado de Mensajes.";
 choices[7][1] = "Se basa en la dificultad que supone resolver el &lt;Problema de la Factorizaci&oacute;n Externa&gt;.";
 choices[7][2] = "Tiene tres partes: Generaci&oacute;n de claves, Cifrado de mensajes, Descifrado de mensajes.";
 choices[7][3] = "Se basa en la dificultad que supone resolver el &lt;Problema de Socrates- Arquimedes&gt;.";
 answers[7] = choices[7][2];
 units[7] = "76";
 comments[7] = "Id Pregunta: 602. Junta de Extremadura A1 2015";


//  Id pregunta: 453 Año de creación de pregunta: 2016
 questions[8]= "9)  En las Administraciones P&uacute;blicas...";
 choices[8]= new Array();
 choices[8][0] = "Existe un Presupuesto ordinario &uacute;nicamente";
 choices[8][1] = "Existen s&oacute;lo un presupuesto ordinario y un presupuesto extraordinario";
 choices[8][2] = "Existe un &uacute;nico presupuesto ordinario y uno o varios presupuestos extraordinarios";
 choices[8][3] = "Existen varios presupuestos que indistintamente pueden ser considerados ordinarios o extraordinarios";
 answers[8] = choices[8][0];
 units[8] = "10";
 comments[8] = "Id Pregunta: 453. PRESUPUESTOS GENERALES";


//  Id pregunta: 371 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;En qu&eacute; a&ntilde;o se adhiri&oacute; Espa&ntilde;a a la Comunidad Europea?:";
 choices[9]= new Array();
 choices[9][0] = "En 1988.";
 choices[9][1] = "En 1981.";
 choices[9][2] = "En 1982.";
 choices[9][3] = "En 1986.";
 answers[9] = choices[9][3];
 units[9] = "5";
 comments[9] = "Id Pregunta: 371. UNION EUROPEA";


//  Id pregunta: 382 Año de creación de pregunta: 2016
 questions[10]= "11)  Seg&uacute;n la ley org&aacute;nica 3/2007, los actos y las cl&aacute;usulas de los negocios jur&iacute;dicos que causen discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[10]= new Array();
 choices[10][0] = "Se considerar&aacute;n nulos y sin efecto.";
 choices[10][1] = "Est&aacute;n sometidos a una tasa fiscal especial (Tasa Tobin)";
 choices[10][2] = "Son impugnables ante los juzgados especiales contra la violencia de g&eacute;nero.";
 choices[10][3] = "Si son actos administrativos, el recurso se debe interponer, en todo caso, ante el Ministerio de Igualdad.";
 answers[10] = choices[10][0];
 units[10] = "14";
 comments[10] = "Id Pregunta: 382. POLITICAS DE IGUALDAD";


//  Id pregunta: 796 Año de creación de pregunta: 2016
 questions[11]= "12)  A los Directores generales les corresponde (se&ntilde;ala la incorrecta):";
 choices[11]= new Array();
 choices[11][0] = "proponer los proyectos de su Direcci&oacute;n general para alcanzar los objetivos establecidos por el Ministro, dirigir su ejecuci&oacute;n y controlar su adecuado cumplimiento";
 choices[11][1] = "solicitar del Ministerio de Hacienda y Administraciones P&uacute;blicas la afectaci&oacute;n o el arrendamiento de los inmuebles necesarios para el cumplimiento de los fines de los servicios a cargo del Departamento";
 choices[11][2] = "ejercer las competencias atribuidas a la Direcci&oacute;n general y las que le sean desconcentradas o delegadas";
 choices[11][3] = "impulsar y supervisar las actividades que forman parte de la gesti&oacute;n ordinaria del &oacute;rgano directivo y velar por el buen funcionamiento de los &oacute;rganos y unidades dependientes y del personal integrado en los mismos";
 answers[11] = choices[11][1];
 units[11] = "4, 7, 8, 9";
 comments[11] = "Id Pregunta: 796. Ley 40/2015";


//  Id pregunta: 36 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Cu&aacute;l es la interfaz est&aacute;ndar de programaci&oacute;n Java para invocar a m&eacute;todos nativos escritos en otros lenguajes como C o C++?";
 choices[12]= new Array();
 choices[12][0] = "JAXP";
 choices[12][1] = "JNI";
 choices[12][2] = "JNDI";
 choices[12][3] = "JDBC";
 answers[12] = choices[12][1];
 units[12] = "64";
 comments[12] = "Id Pregunta: 36. AGE A1 2015";


//  Id pregunta: 498 Año de creación de pregunta: 2016
 questions[13]= "14)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la Deuda P&uacute;blica podr&aacute; estar representada en:";
 choices[13]= new Array();
 choices[13][0] = "En t&iacute;tulos-valores.";
 choices[13][1] = "Las respuestas a) y b) son correctas.";
 choices[13][2] = "Las respuestas a) y b) no son correctas.";
 choices[13][3] = "En cuenta.";
 answers[13] = choices[13][1];
 units[13] = "10";
 comments[13] = "Id Pregunta: 498. PRESUPUESTOS GENERALES";


//  Id pregunta: 63 Año de creación de pregunta: 2016
 questions[14]= "15)  El modelo de servicio en la nube en el que el consumidor no tiene control sobre la red, los servidores, sistemas operativos o almacenamiento, pero s&iacute; sobre las aplicaciones desplegadas y sobre los ajustes de configuraci&oacute;n de dichas aplicaciones, se denomina:";
 choices[14]= new Array();
 choices[14][0] = "Infrastructure as a Service (IaaS)";
 choices[14][1] = "Platform as a Service (PaaS)";
 choices[14][2] = "Software as a Service (SaaS)";
 choices[14][3] = "Application as a Service (AaaS)";
 answers[14] = choices[14][1];
 units[14] = "52";
 comments[14] = "Id Pregunta: 63. AGE A1 2015";


//  Id pregunta: 62 Año de creación de pregunta: 2016
 questions[15]= "16)  El art&iacute;culo 102 del Real Decreto 1720/2007, por el que se determina la conservaci&oacute;n de una copia de respaldo de los datos y de los procedimientos de recuperaci&oacute;n de los mismos en un lugar diferente de aquel en que se encuentren los equipos inform&aacute;ticos que los tratan, &iquest;a qu&eacute; nivel o niveles de medidas de seguridad es aplicable?";
 choices[15]= new Array();
 choices[15][0] = "B&aacute;sico";
 choices[15][1] = "Medio";
 choices[15][2] = "Alto";
 choices[15][3] = "A los niveles medio y alto";
 answers[15] = choices[15][2];
 units[15] = "35";
 comments[15] = "Id Pregunta: 62. AGE A1 2015";


//  Id pregunta: 162 Año de creación de pregunta: 2016
 questions[16]= "17)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones";
 choices[16]= new Array();
 choices[16][0] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[16][1] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro de las setenta y dos horas contadas a partir de las 8:00 horas del d&iacute;a laborable siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[16][2] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 00:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 choices[16][3] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 24 horas contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 answers[16] = choices[16][0];
 units[16] = "19";
 comments[16] = "Id Pregunta: 162. La respuesta B es la antigua redacci&oacute;n";


//  Id pregunta: 60 Año de creación de pregunta: 2016
 questions[17]= "18)  El modelo de capacidad de procesos establecido por COBIT v5:";
 choices[17]= new Array();
 choices[17][0] = "No modifica esencialmente el modelo planteado por COBIT v4.1.";
 choices[17][1] = "Define 5 niveles de procesos (proceso incompleto, ejecutado, gestionado, predecible, optimizado).";
 choices[17][2] = "El nivel 1 (proceso ejecutado) s&oacute;lo se alcanza si el proceso alcanza su prop&oacute;sito.";
 choices[17][3] = "Un proceso es optimizado si se ejecuta dentro de los l&iacute;mites definidos para alcanzar sus resultados de proceso.";
 answers[17] = choices[17][2];
 units[17] = "101";
 comments[17] = "Id Pregunta: 60. AGE A1 2015";


//  Id pregunta: 108 Año de creación de pregunta: 2016
 questions[18]= "19)  Son proyectos de Apache relacionados con Big Data:";
 choices[18]= new Array();
 choices[18][0] = "Hadoop";
 choices[18][1] = "Spark";
 choices[18][2] = "A) y B)";
 choices[18][3] = "Niguno de los anteriores";
 answers[18] = choices[18][2];
 units[18] = "73";
 comments[18] = "Id Pregunta: 108. ";


//  Id pregunta: 161 Año de creación de pregunta: 2016
 questions[19]= "20)  Se&ntilde;alar cu&aacute;l NO es uno de los principios del Plan de Acci&oacute;n de Administraci&oacute;n Electr&oacute;nica 2016-2020";
 choices[19]= new Array();
 choices[19][0] = "Principio de solo una vez";
 choices[19][1] = "Apertura y transparencia";
 choices[19][2] = "Confianza y seguridad";
 choices[19][3] = "Estandarizaci&oacute;n de forma predeterminada";
 answers[19] = choices[19][3];
 units[19] = "19";
 comments[19] = "Id Pregunta: 161. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Junio/Noticia-2016-06-02-Plan-accion-administracion-electronica-2016-2020.html#.WCjvuWrhDIU";


//  Id pregunta: 408 Año de creación de pregunta: 2016
 questions[20]= "21)  La igualdad efectiva entre mujeres y hombres est&aacute; regulada en:";
 choices[20]= new Array();
 choices[20][0] = "Ley Org&aacute;nica 7/2003, de 22 de marzo.";
 choices[20][1] = "Ley Org&aacute;nica 3/2003, de 22 de marzo.";
 choices[20][2] = "Ley 13/2007, de 26 de noviembre.";
 choices[20][3] = "Ley 3/2007, de 26 de noviembre.";
 answers[20] = choices[20][1];
 units[20] = "14";
 comments[20] = "Id Pregunta: 408. POLITICAS DE IGUALDAD";


//  Id pregunta: 282 Año de creación de pregunta: 2016
 questions[21]= "22)  Sobre el Plan Juncker:";
 choices[21]= new Array();
 choices[21][0] = "El denominado plan Juncker es un fondo de inversiones con el que el Ejecutivo comunitario pretende movilizar hasta 215.000 millones para inversiones.";
 choices[21][1] = "Su objetivo es reactivar la inversi&oacute;n y el crecimiento en Europa.";
 choices[21][2] = "El dinero proceder&aacute; de los presupuestos europeos.";
 choices[21][3] = "Banco Europeo de Inversiones aportar&aacute; 15000 millones de euros.";
 answers[21] = choices[21][1];
 units[21] = "5";
 comments[21] = "Id Pregunta: 282. UNION EUROPEA";


//  Id pregunta: 288 Año de creación de pregunta: 2016
 questions[22]= "23)  Cu&aacute;l no es uno de los pilares que cimientan el Plan de Acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[22]= new Array();
 choices[22][0] = "Configuraci&oacute;n de un marco que habilite la movilidad transfronteriza mediante los servicios p&uacute;blicos digitales;";
 choices[22][1] = "Facilitar la interacci&oacute;n digital con ciudadanos y empresas mediante AA.PP. abiertas y flexibles que impliquen a los actores interesados en el dise&ntilde;o de pol&iacute;ticas y servicios de una forma colaborativa;";
 choices[22][2] = "Sociedad digital integradora, donde los ciudadanos tengan las cualificaciones adecuadas para aprovechar las oportunidades ofrecidas por Internet.";
 choices[22][3] = "Puesta a disposici&oacute;n de habilitadores y facilitadores claves, servicios y activos reutilizables.";
 answers[22] = choices[22][2];
 units[22] = "5";
 comments[22] = "Id Pregunta: 288. UNION EUROPEA";


//  Id pregunta: 146 Año de creación de pregunta: 2016
 questions[23]= "24)  La declaraci&oacute;n de lesividad de los actos anulables:";
 choices[23]= new Array();
 choices[23][0] = "No podr&aacute; adoptarse una vez transcurridos cuatro a&ntilde;os desde que se dict&oacute; el acto administrativo";
 choices[23][1] = "No es necesaria para impugnar ante el orden jurisdiccional contencioso-administrativo los actos favorables para los interesados";
 choices[23][2] = "Se adoptar&aacute; en todo caso por el Consejo de Estado";
 choices[23][3] = "Si el acto proviniera de las entidades que integran la Administraci&oacute;n Local, la declaraci&oacute;n de lesividad se adoptar&aacute; por la Comunidad Aut&oacute;noma a la que pertenece dicha entidad";
 answers[23] = choices[23][0];
 units[23] = "8";
 comments[23] = "Id Pregunta: 146. Ley 39/2015, Art&iacute;culo 107";


//  Id pregunta: 611 Año de creación de pregunta: 2016
 questions[24]= "25)  Una de las caracter&iacute;sticas de seguridad en SQL Server 2008 es el cifrado transparente de datos. Se&ntilde;ala la afirmaci&oacute;n correcta:";
 choices[24]= new Array();
 choices[24][0] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de registro.";
 choices[24][1] = "SQL Server ofrece la capacidad de buscar dentro de los datos cifrados.";
 choices[24][2] = "Para trabajar con datos cifrados utilizando esta caracter&iacute;stica hay que introducir cambios en las aplicaciones.";
 choices[24][3] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de datos.";
 answers[24] = choices[24][1];
 units[24] = "63";
 comments[24] = "Id Pregunta: 611. Junta de Extremadura A1 2015";


//  Id pregunta: 496 Año de creación de pregunta: 2016
 questions[25]= "26)  A los efectos de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , forman parte del sector p&uacute;blico estatal:";
 choices[25]= new Array();
 choices[25][0] = "Las respuestas a) y b) son correctas.";
 choices[25][1] = "Los organismos aut&oacute;nomos dependientes de la Administraci&oacute;n General del Estado.";
 choices[25][2] = "Las entidades p&uacute;blicas empresariales, dependientes de la Administraci&oacute;n General del Estado, o de cualesquiera otros organismos p&uacute;blicos vinculados o dependientes de ella.";
 choices[25][3] = "Las respuestas a) y b) no son correctas.";
 answers[25] = choices[25][0];
 units[25] = "10";
 comments[25] = "Id Pregunta: 496. PRESUPUESTOS GENERALES";


//  Id pregunta: 704 Año de creación de pregunta: 2016
 questions[26]= "27)  Se&ntilde;ale la afirmaci&oacute;n verdadera con respecto a la entrada en vigor de la Ley 19/2013 de Transparencia, Acceso a la Informaci&oacute;n P&uacute;blica y Buen Gobierno:";
 choices[26]= new Array();
 choices[26][0] = "Todas las disposiciones entraron en vigor al d&iacute;a siguiente de su publicaci&oacute;n en el BOE";
 choices[26][1] = "La entrada en vigor de todas sus disposiciones fue al a&ntilde;o de su publicaci&oacute;n en el BOE";
 choices[26][2] = "Los &oacute;rganos de las Comunidades Aut&oacute;nomas y Entidades Locales dispusieron de un plazo m&aacute;ximo de dos a&ntilde;os tras publicaci&oacute;n en BOE para adaptarse a las obligaciones contenidas en esta Ley.";
 choices[26][3] = "Algunas disposiciones de la ley entraron en vigor a los 3 a&ntilde;os de su publicaci&oacute;n en el BOE";
 answers[26] = choices[26][2];
 units[26] = "22";
 comments[26] = "Id Pregunta: 704. Ley de transparencia";


//  Id pregunta: 509 Año de creación de pregunta: 2016
 questions[27]= "28)  A tenor de lo dispuesto en el art&iacute;culo 14 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, el pago de los intereses y el capital de la deuda p&uacute;blica de las Administraciones P&uacute;blicas gozar&aacute; de prioridad:";
 choices[27]= new Array();
 choices[27][0] = "Sobre otros gastos siempre que no superen el 80% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[27][1] = "Sobre otros gastos siempre que no superen el 70% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[27][2] = "Absoluta frente a cualquier otro gasto.";
 choices[27][3] = "Sobre otros gastos siempre que no superen el 60% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea";
 answers[27] = choices[27][2];
 units[27] = "10";
 comments[27] = "Id Pregunta: 509. PRESUPUESTOS GENERALES";


//  Id pregunta: 352 Año de creación de pregunta: 2016
 questions[28]= "29)  La Comisi&oacute;n est&aacute; compuesta por:";
 choices[28]= new Array();
 choices[28][0] = "27 miembros, nacionales de los Estados comunitarios.";
 choices[28][1] = "20 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 choices[28][2] = "25 miembros, nacionales de los Estados comunitarios.";
 choices[28][3] = "d)22 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 answers[28] = choices[28][0];
 units[28] = "5";
 comments[28] = "Id Pregunta: 352. UNION EUROPEA";


//  Id pregunta: 474 Año de creación de pregunta: 2016
 questions[29]= "30)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los interventores delegados ser&aacute;n designados entre funcionarios de los Cuerpos:";
 choices[29]= new Array();
 choices[29][0] = "Cuerpo Superior de Interventores y Auditores del Estado.";
 choices[29][1] = "Todas las respuestas son correctas.";
 choices[29][2] = "Cuerpo Militar de Intervenci&oacute;n de la Defensa.";
 choices[29][3] = "Cuerpo Superior de Intervenci&oacute;n y Contabilidad de Administraci&oacute;n de la Seguridad Social.";
 answers[29] = choices[29][1];
 units[29] = "10";
 comments[29] = "Id Pregunta: 474. PRESUPUESTOS GENERALES";


//  Id pregunta: 798 Año de creación de pregunta: 2016
 questions[30]= "31)  Ostentan la representaci&oacute;n ordinaria del Ministerio:";
 choices[30]= new Array();
 choices[30][0] = "los Secretarios de Estado";
 choices[30][1] = "los Ministros";
 choices[30][2] = "los Subsecretarios";
 choices[30][3] = "los Secretarios generales";
 answers[30] = choices[30][2];
 units[30] = "4, 7, 8, 9";
 comments[30] = "Id Pregunta: 798. Ley 40/2015";


//  Id pregunta: 658 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Qu&eacute; tecnolog&iacute;a de tratamiento de datos no guarda relaci&oacute;n con BigData?";
 choices[31]= new Array();
 choices[31][0] = "NoSQL";
 choices[31][1] = "Sistemas de baja latencia";
 choices[31][2] = "MapReduce";
 choices[31][3] = "Business Intelligence";
 answers[31] = choices[31][1];
 units[31] = "73";
 comments[31] = "Id Pregunta: 658. ";


//  Id pregunta: 760 Año de creación de pregunta: 2016
 questions[32]= "33)  Las Administraciones P&uacute;blicas:";
 choices[32]= new Array();
 choices[32][0] = "se relacionar&aacute;n entre s&iacute; y con sus &oacute;rganos, organismos p&uacute;blicos y entidades vinculados o dependientes a trav&eacute;s de medios no electr&oacute;nicos, que aseguren la interoperabilidad y seguridad de los sistemas y soluciones adoptadas por cada una de ellas";
 choices[32][1] = "garantizar&aacute;n la protecci&oacute;n de los datos de car&aacute;cter personal";
 choices[32][2] = "facilitar&aacute;n preferentemente la prestaci&oacute;n disociada de servicios a los interesados";
 choices[32][3] = "todas son correctas";
 answers[32] = choices[32][1];
 units[32] = "4, 7, 8, 9";
 comments[32] = "Id Pregunta: 760. Ley 40/2015";


//  Id pregunta: 511 Año de creación de pregunta: 2016
 questions[33]= "34)  Cuando resulte eficaz, proporcionado y necesario para la consecuci&oacute;n de los fines propios del procedimiento, y de manera motivada, podr&aacute;n incluirse tr&aacute;mites adicionales o distintos a los contemplados en esta Ley:";
 choices[33]= new Array();
 choices[33][0] = "solo mediante ley";
 choices[33][1] = "reglamentariamente";
 choices[33][2] = "mediante ley o reglamentariamente";
 choices[33][3] = "ninguna es correcta";
 answers[33] = choices[33][0];
 units[33] = "7";
 comments[33] = "Id Pregunta: 511. LEY 39/2015";


//  Id pregunta: 223 Año de creación de pregunta: 2016
 questions[34]= "35)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, durante el periodo de su mandato los Diputados y Senadores gozar&aacute;n asimismo de inmunidad y s&oacute;lo podr&aacute;n ser detenidos en caso de flagrante delito. No podr&aacute;n ser inculpados ni procesados sin la previa autorizaci&oacute;n:";
 choices[34]= new Array();
 choices[34][0] = "De la C&aacute;mara respectiva.";
 choices[34][1] = "Del Rey.";
 choices[34][2] = "Del Tribunal Constitucional.";
 choices[34][3] = "Del Tribunal Supremo.";
 answers[34] = choices[34][0];
 units[34] = "1";
 comments[34] = "Id Pregunta: 223. CONSTITUCION1978";


//  Id pregunta: 94 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es propia de Apache Hadoop?";
 choices[35]= new Array();
 choices[35][0] = "Es un framework de software libre.";
 choices[35][1] = "Es una base de datos NoSQL.";
 choices[35][2] = "Est&aacute; basado en MapReduce.";
 choices[35][3] = "Puede emplearse en sistemas de datos masivos (Big Data).";
 answers[35] = choices[35][1];
 units[35] = "73";
 comments[35] = "Id Pregunta: 94. AGE A1 2015";


//  Id pregunta: 33 Año de creación de pregunta: 2016
 questions[36]= "37)  Respecto al desarrollo empleando tecnolog&iacute;a Microsoft, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[36]= new Array();
 choices[36][0] = "WINAPI (Windows API) permite un acceso a alto nivel del sistema, directamente usable en cualquier lenguaje y entorno de programaci&oacute;n.";
 choices[36][1] = "El framework .NET se compone de una biblioteca de clases denominada FCL (Framework Class Library) y del entorno com&uacute;n de ejecuci&oacute;n CLR (Common Language Runtime).";
 choices[36][2] = "En .NET el resultado de la compilaci&oacute;n de las aplicaciones es un m&oacute;dulo ensamblado en formato de fichero PE32 o PE32+ (Windows portable executable) directamente ejecutable sobre el hardware.";
 choices[36][3] = "Los compiladores para CLR producen c&oacute;digo FL (Final Language) denominado c&oacute;digo administrado.";
 answers[36] = choices[36][1];
 units[36] = "63";
 comments[36] = "Id Pregunta: 33. AGE A1 2015";


//  Id pregunta: 135 Año de creación de pregunta: 2016
 questions[37]= "38)  Dentro de las &uacute;ltimas medidas vigentes de impulso de la actividad econ&oacute;mica, la liberalizaci&oacute;n del comercio implica:";
 choices[37]= new Array();
 choices[37][0] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[37][1] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 choices[37][2] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[37][3] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 answers[37] = choices[37][0];
 units[37] = "12";
 comments[37] = "Id Pregunta: 135. Leyes modelo econ&oacute;mico";


//  Id pregunta: 313 Año de creación de pregunta: 2016
 questions[38]= "39)  Indique qui&eacute;n propone al candidato para el cargo de Presidente de la Comisi&oacute;n Europea:";
 choices[38]= new Array();
 choices[38][0] = "El Consejo Europeo.";
 choices[38][1] = "El Consejo de la Uni&oacute;n Europea.";
 choices[38][2] = "Los miembros de la Comisi&oacute;n Europea.";
 choices[38][3] = "El Parlamento Europeo.";
 answers[38] = choices[38][0];
 units[38] = "5";
 comments[38] = "Id Pregunta: 313. UNION EUROPEA";


//  Id pregunta: 685 Año de creación de pregunta: 2016
 questions[39]= "40)  Se&ntilde;ale el plazo en que deben ser auditados los prestadores cualificados de servicios de confianza";
 choices[39]= new Array();
 choices[39][0] = "Al menos cada 12 meses";
 choices[39][1] = "El Reglamento no trata la supervisi&oacute;n de los prestadores cualificados de servicios de confianza, dejando tal cuesti&oacute;n a la regulaci&oacute;n nacional de cada Estado miembro";
 choices[39][2] = "Al menos cada 18 meses";
 choices[39][3] = "Al menos cada 24 meses";
 answers[39] = choices[39][3];
 units[39] = "77";
 comments[39] = "Id Pregunta: 685. Art&iacute;culo 20 del Reglamento 910/2014";


//  Id pregunta: 96 Año de creación de pregunta: 2016
 questions[40]= "41)  Indique cu&aacute;l de las siguientes soluciones tecnol&oacute;gicas NO se utiliza para virtualizaci&oacute;n:";
 choices[40]= new Array();
 choices[40][0] = "VMware ESX";
 choices[40][1] = "XenServer";
 choices[40][2] = "Alfresco";
 choices[40][3] = "Microsoft Hyper-V";
 answers[40] = choices[40][2];
 units[40] = "54";
 comments[40] = "Id Pregunta: 96. AGE A1 2015";


//  Id pregunta: 816 Año de creación de pregunta: 2016
 questions[41]= "42)  La recusaci&oacute;n pueden promoverla...";
 choices[41]= new Array();
 choices[41][0] = "Cualquier &oacute;rgano";
 choices[41][1] = "El interesado";
 choices[41][2] = "El interesado y el superior jer&aacute;rquico del &oacute;rgano de que se trate";
 choices[41][3] = "El interesado, el superior jer&aacute;rquico del &oacute;rgano de que se trate y el propio &oacute;rgano";
 answers[41] = choices[41][0];
 units[41] = "4, 7, 8, 9";
 comments[41] = "Id Pregunta: 816. Ley 40/2015";


//  Id pregunta: 471 Año de creación de pregunta: 2016
 questions[42]= "43)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la agrupaci&oacute;n de los cr&eacute;ditos en cap&iacute;tulos, art&iacute;culos, conceptos y subconceptos corresponde a la clasificaci&oacute;n:";
 choices[42]= new Array();
 choices[42][0] = "Org&aacute;nica.";
 choices[42][1] = "Contable.";
 choices[42][2] = "Econ&oacute;mica.";
 choices[42][3] = "Por programas.";
 answers[42] = choices[42][2];
 units[42] = "10";
 comments[42] = "Id Pregunta: 471. PRESUPUESTOS GENERALES";


//  Id pregunta: 770 Año de creación de pregunta: 2016
 questions[43]= "44)  Sin perjuicio de la responsabilidad disciplinaria en que se pueda incurrir, el incumplimiento de las instrucciones u &oacute;rdenes de servicio:";
 choices[43]= new Array();
 choices[43][0] = "no afecta por s&iacute; solo a la validez de los actos dictados por los &oacute;rganos administrativos";
 choices[43][1] = "supone la invalidez de los actos dictados por los &oacute;rganos administrativos";
 choices[43][2] = "supone la nulidad de los actos dictados por los &oacute;rganos administrativos";
 choices[43][3] = "supone la anulabilidad de los actos dictados por los &oacute;rganos administrativos";
 answers[43] = choices[43][0];
 units[43] = "4, 7, 8, 9";
 comments[43] = "Id Pregunta: 770. Ley 40/2015";


//  Id pregunta: 308 Año de creación de pregunta: 2016
 questions[44]= "45)  El Tribunal de Justicia se cre&oacute; en:";
 choices[44]= new Array();
 choices[44][0] = "El Tratado de la CECA.";
 choices[44][1] = "El Tratado de Niza.";
 choices[44][2] = "El Tratado de &Aacute;msterdam.";
 choices[44][3] = "El Tratado de Lisboa.";
 answers[44] = choices[44][0];
 units[44] = "5";
 comments[44] = "Id Pregunta: 308. UNION EUROPEA";


//  Id pregunta: 426 Año de creación de pregunta: 2016
 questions[45]= "46)  La aprobaci&oacute;n de convocatorias de pruebas selectivas para el acceso al empleo p&uacute;blico deber&aacute; acompa&ntilde;arse de:";
 choices[45]= new Array();
 choices[45][0] = "Un plan de igualdad.";
 choices[45][1] = "Un informe de impacto de g&eacute;nero.";
 choices[45][2] = "Un programa de igualdad.";
 choices[45][3] = "Todas son correctas.";
 answers[45] = choices[45][1];
 units[45] = "14";
 comments[45] = "Id Pregunta: 426. POLITICAS DE IGUALDAD";


//  Id pregunta: 730 Año de creación de pregunta: 2016
 questions[46]= "47)  Cu&aacute;l de las siguientes caracter&iacute;sticas es especifican de Kanban:";
 choices[46]= new Array();
 choices[46][0] = "Se definen iteraciones";
 choices[46][1] = "Se limitan las tareas que se pueden realizar por fase";
 choices[46][2] = "Los miembros del equipo no tienen un rol especifico";
 choices[46][3] = "Todas las anteriores son caracter&iacute;sticas de la metodolog&iacute;a Kanban.";
 answers[46] = choices[46][1];
 units[46] = "34, 84";
 comments[46] = "Id Pregunta: 730. Metodologias &aacute;giles";


//  Id pregunta: 558 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;Cu&aacute;ndo ha sido aprobada la Agenda Digital para Espa&ntilde;a?";
 choices[47]= new Array();
 choices[47][0] = "En 2015";
 choices[47][1] = "En 2013";
 choices[47][2] = "En 2016";
 choices[47][3] = "En 2007";
 answers[47] = choices[47][1];
 units[47] = "19";
 comments[47] = "Id Pregunta: 558. Agenda Digital";


//  Id pregunta: 241 Año de creación de pregunta: 2016
 questions[48]= "49)  A trav&eacute;s de la moci&oacute;n de censura se exige la responsabilidad pol&iacute;tica del Gobierno:";
 choices[48]= new Array();
 choices[48][0] = "A propuesta de la d&eacute;cima parte de los Diputados y los Senadores representados en las c&aacute;maras, en la que incluir&aacute;n un candidato a Presidente del Gobierno.";
 choices[48][1] = "Mediante su adopci&oacute;n por mayor&iacute;a absoluta de las Cortes Generales.";
 choices[48][2] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a presidente del Gobierno. No podr&aacute; ser votada hasta que transcurran cinco d&iacute;as desde su presentaci&oacute;n y se adoptar&aacute; por mayor&iacute;a absoluta del Congreso de los Diputados.";
 choices[48][3] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a Presidente del Gobierno. Su adopci&oacute;n requiere mayor&iacute;a absoluta en una primera votaci&oacute;n y mayor&iacute;a simple en una segunda votaci&oacute;n.";
 answers[48] = choices[48][0];
 units[48] = "1";
 comments[48] = "Id Pregunta: 241. CONSTITUCION1978";


//  Id pregunta: 643 Año de creación de pregunta: 2016
 questions[49]= "50)  La generalizaci&oacute;n es el tipo de interrelaci&oacute;n que existe entre un tipo de entidad, supertipo, y los tipos de entidad m&aacute;s espec&iacute;ficos (subtipos) que dependen de &eacute;l. Las cardinalidades m&aacute;ximas y m&iacute;nimas son siempre:";
 choices[49]= new Array();
 choices[49][0] = "(0,1) en el supertipo y (0,1) en los subtipos.";
 choices[49][1] = "(1,1) en el supertipo y (1,1) en los subtipos.";
 choices[49][2] = "(1,1) en el supertipo y (0,1) en los subtipos.";
 choices[49][3] = "(0,1) en el supertipo y (1,1) en los subtipos.";
 answers[49] = choices[49][2];
 units[49] = "85";
 comments[49] = "Id Pregunta: 643. Junta de Extremadura A1 2015";


//  Id pregunta: 607 Año de creación de pregunta: 2016
 questions[50]= "51)  Seg&uacute;n Magerit v3, en el desarrollo de sistemas de informaci&oacute;n:";
 choices[50]= new Array();
 choices[50][0] = "La seguridad debe estar embebida en el sistema desde su primera concepci&oacute;n.";
 choices[50][1] = "La seguridad comenzar&aacute; a considerarse formalmente cuando finalice el proceso de implantaci&oacute;n de sistemas de informaci&oacute;n.";
 choices[50][2] = "La seguridad del sistema de informaci&oacute;n es m&aacute;s econ&oacute;mica implantarla una vez puesto en producci&oacute;n el sistema de informaci&oacute;n que tenerla en consideraci&oacute;n durante el desarrollo del sistema.";
 choices[50][3] = "La seguridad s&oacute;lo ralentiza el proceso de desarrollo de sistemas de informaci&oacute;n por lo que s&oacute;lo se debe considerar en aquellos sistemas que usen datos econ&oacute;micos.";
 answers[50] = choices[50][0];
 units[50] = "45";
 comments[50] = "Id Pregunta: 607. Junta de Extremadura A1 2015";


//  Id pregunta: 256 Año de creación de pregunta: 2016
 questions[51]= "52)  El Art&iacute;culo 21 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que:";
 choices[51]= new Array();
 choices[51][0] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y con armas.";
 choices[51][1] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica siempre dentro del derecho de manifestaci&oacute;n previa autorizaci&oacute;n.";
 choices[51][2] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y sin armas.";
 choices[51][3] = "No se reconoce expl&iacute;citamente tal derecho de reuni&oacute;n.";
 answers[51] = choices[51][0];
 units[51] = "1";
 comments[51] = "Id Pregunta: 256. CONSTITUCION1978";


//  Id pregunta: 538 Año de creación de pregunta: 2016
 questions[52]= "53)  Ser&aacute;/n interoperable/s con los registros electr&oacute;nicos generales y particulares de apoderamientos:";
 choices[52]= new Array();
 choices[52][0] = "los registros mercantiles";
 choices[52][1] = "los registros de la propiedad";
 choices[52][2] = "los protocolos notariales";
 choices[52][3] = "todas son correctas";
 answers[52] = choices[52][3];
 units[52] = "7";
 comments[52] = "Id Pregunta: 538. LEY 39/2015";


//  Id pregunta: 595 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;Qui&eacute;n elabora y ejecuta los Planes de Acci&oacute;n Sectoriales?";
 choices[53]= new Array();
 choices[53][0] = "La CETIC";
 choices[53][1] = "Los Ministerios";
 choices[53][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[53][3] = "Ninguno de los anteriores";
 answers[53] = choices[53][1];
 units[53] = "19";
 comments[53] = "Id Pregunta: 595. Estrategia TIC";


//  Id pregunta: 623 Año de creación de pregunta: 2016
 questions[54]= "55)  En PHP 5.0, &iquest;cu&aacute;l es la regla para formar los nombres de las variables?";
 choices[54]= new Array();
 choices[54][0] = "Una variable debe comenzar con el signo $ seguido del nombre de la variable.";
 choices[54][1] = "Una variable debe comenzar con el signo &amp; seguido del nombre de la variable.";
 choices[54][2] = "Una variable debe comenzar por un car&aacute;cter num&eacute;rico.";
 choices[54][3] = "No hay regla para la formaci&oacute;n de los nombres de las variables.";
 answers[54] = choices[54][0];
 units[54] = "65";
 comments[54] = "Id Pregunta: 623. Junta de Extremadura A1 2015";


//  Id pregunta: 192 Año de creación de pregunta: 2016
 questions[55]= "56)  Seg&uacute;n la Constituci&oacute;n, las poblaciones de Ceuta y Melilla estar&aacute;n representadas por:";
 choices[55]= new Array();
 choices[55][0] = "Un diputado y un senador, cada una de ellas";
 choices[55][1] = "Dos diputados y un senador, cada una de ellas.";
 choices[55][2] = "Un diputado y dos senadores, cada una de ellas";
 choices[55][3] = "dos diputados y dos senadores, cada una de ellas.";
 answers[55] = choices[55][2];
 units[55] = "1";
 comments[55] = "Id Pregunta: 192. CONSTITUCION1978";


//  Id pregunta: 209 Año de creación de pregunta: 2016
 questions[56]= "57)  Corresponde aprobar el proyecto de Ley de Presupuestos Generales del Estado a:";
 choices[56]= new Array();
 choices[56][0] = "El Ministerio de Econom&iacute;a y Hacienda.";
 choices[56][1] = "El Congreso de los Diputados.";
 choices[56][2] = "Las Cortes Generales.";
 choices[56][3] = "El Consejo de Ministros";
 answers[56] = choices[56][3];
 units[56] = "1";
 comments[56] = "Id Pregunta: 209. CONSTITUCION1978";


//  Id pregunta: 423 Año de creación de pregunta: 2016
 questions[57]= "58)  Para contribuir a un reparto m&aacute;s equilibrado de las responsabilidades familiares se reconoce a los padres:";
 choices[57]= new Array();
 choices[57][0] = "El derecho a un permiso.";
 choices[57][1] = "Una prestaci&oacute;n por paternidad.";
 choices[57][2] = "Ambas son correctas.";
 choices[57][3] = "18 d&iacute;as de permiso.";
 answers[57] = choices[57][2];
 units[57] = "14";
 comments[57] = "Id Pregunta: 423. POLITICAS DE IGUALDAD";


//  Id pregunta: 54 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;A qu&eacute; tipo de ataque nos referimos cuando se suplanta la identidad de una direcci&oacute;n IP origen?";
 choices[58]= new Array();
 choices[58][0] = "DoS";
 choices[58][1] = "Phishing";
 choices[58][2] = "Sniffing";
 choices[58][3] = "Spoofing";
 answers[58] = choices[58][3];
 units[58] = "119";
 comments[58] = "Id Pregunta: 54. AGE A1 2015";


//  Id pregunta: 57 Año de creación de pregunta: 2016
 questions[59]= "60)  Con respecto a ITIL se&ntilde;ale qu&eacute; afirmaci&oacute;n es cierta:";
 choices[59]= new Array();
 choices[59][0] = "Constituye una metodolog&iacute;a exhaustiva de pasos a seguir en el dise&ntilde;o de servicios TI.";
 choices[59][1] = "Da instrucciones de trabajo concretas, asignado tareas a personas.";
 choices[59][2] = "Los organismos tecnol&oacute;gicamente m&aacute;s punteros de la Administraci&oacute;n General del Estado se encuentran certificados en ITIL.";
 choices[59][3] = "Constituye un conjunto de mejores pr&aacute;cticas para la gesti&oacute;n de servicios TI.";
 answers[59] = choices[59][3];
 units[59] = "101";
 comments[59] = "Id Pregunta: 57. AGE A1 2015";


//  Id pregunta: 797 Año de creación de pregunta: 2016
 questions[60]= "61)  Los Directores generales ser&aacute;n nombrados y separados por:";
 choices[60]= new Array();
 choices[60][0] = "Real Decreto del Consejo de Ministros, a propuesta del titular del Departamento o del Presidente del Gobierno";
 choices[60][1] = "Ley de las Cortes Generales, a propuesta del titular del Departamento";
 choices[60][2] = "Ley de las Cortes Generales, a propuesta del titular del Departamento o del Presidente del Gobierno";
 choices[60][3] = "Real Decreto del Consejo de Ministros, a propuesta del titular del Departamento";
 answers[60] = choices[60][0];
 units[60] = "4, 7, 8, 9";
 comments[60] = "Id Pregunta: 797. Ley 40/2015";


//  Id pregunta: 228 Año de creación de pregunta: 2016
 questions[61]= "62)  Indique la respuesta falsa. Seg&uacute;n el Art&iacute;culo 147 de la Constituci&oacute;n espa&ntilde;ola, los Estatutos de Autonom&iacute;a deber&aacute;n contener:";
 choices[61]= new Array();
 choices[61][0] = "La denominaci&oacute;n de la Comunidad que mejor corresponda a su identidad hist&oacute;rica.";
 choices[61][1] = "La delimitaci&oacute;n de su territorio.";
 choices[61][2] = "Las competencias asumidas y aqu&eacute;llas del Estado sobre las que la Comunidad Aut&oacute;noma se reserva el derecho de opci&oacute;n.";
 choices[61][3] = "La denominaci&oacute;n, organizaci&oacute;n y sede de las instituciones aut&oacute;nomas propias.";
 answers[61] = choices[61][2];
 units[61] = "1";
 comments[61] = "Id Pregunta: 228. CONSTITUCION1978";


//  Id pregunta: 148 Año de creación de pregunta: 2016
 questions[62]= "63)  La publicaci&oacute;n del &laquo;Bolet&iacute;n Oficial del Estado&raquo; en la sede electr&oacute;nica del Organismo competente:";
 choices[62]= new Array();
 choices[62][0] = "Tiene car&aacute;cter supletorio respecto a la versi&oacute;n en formato papel";
 choices[62][1] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, aunque no se podr&aacute; derivar de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[62][2] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[62][3] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se habr&aacute;n de determinar necesariamente por Ley, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 answers[62] = choices[62][2];
 units[62] = "7";
 comments[62] = "Id Pregunta: 148. Ley 39/2015, Art&iacute;culo 131";


//  Id pregunta: 127 Año de creación de pregunta: 2016
 questions[63]= "64)  Seg&uacute;n la ley 19/2013, la Reclamaci&oacute;n ante el Consejo de Transparencia y Buen Gobierno:";
 choices[63]= new Array();
 choices[63][0] = "Tiene car&aacute;cter facultativo.";
 choices[63][1] = "Tiene car&aacute;cter potestativo. ";
 choices[63][2] = "Se puede realizar de forma paralela a su impugnaci&oacute;n en v&iacute;a contencioso-administrativa.";
 choices[63][3] = "Se realiza si la impugnaci&oacute;n en v&iacute;a contencioso-administrativa es rechazada.";
 answers[63] = choices[63][1];
 units[63] = "22";
 comments[63] = "Id Pregunta: 127. ";


//  Id pregunta: 271 Año de creación de pregunta: 2016
 questions[64]= "65)  La delegaci&oacute;n legislativa de las Cortes Generales en el Gobierno, cuando se trata de refundir varios textos legales en uno solo, deber&aacute; otorgarse mediante:";
 choices[64]= new Array();
 choices[64][0] = "Ley org&aacute;nica.";
 choices[64][1] = "Ley ordinaria.";
 choices[64][2] = "Ley de bases.";
 choices[64][3] = "Ley marco.";
 answers[64] = choices[64][0];
 units[64] = "1";
 comments[64] = "Id Pregunta: 271. CONSTITUCION1978";


//  Id pregunta: 548 Año de creación de pregunta: 2016
 questions[65]= "66)  El &aacute;mbito de aplicaci&oacute;n del RD 806/2014 de Gobernanza TIC es:";
 choices[65]= new Array();
 choices[65][0] = "La Administraci&oacute;n General del Estado";
 choices[65][1] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos";
 choices[65][2] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos y las Comunidades Aut&oacute;nomas";
 choices[65][3] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos, las Comunidades Aut&oacute;nomas y las Entidades Locales";
 answers[65] = choices[65][1];
 units[65] = "26";
 comments[65] = "Id Pregunta: 548. Gobernanza TIC";


//  Id pregunta: 298 Año de creación de pregunta: 2016
 questions[66]= "67)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al Consejo de la Uni&oacute;n Europea:";
 choices[66]= new Array();
 choices[66][0] = "Estar&aacute; asistido por dos Secretar&iacute;as Generales.";
 choices[66][1] = "Estar&aacute; asistido por una Secretar&iacute;a General, dirigida por un Secretario General.";
 choices[66][2] = "Estar&aacute; asistido por un alto representante de Pol&iacute;tica Interior y Exterior.";
 choices[66][3] = "Estar&aacute; asistido por el Consejo de Europa.";
 answers[66] = choices[66][1];
 units[66] = "5";
 comments[66] = "Id Pregunta: 298. UNION EUROPEA";


//  Id pregunta: 42 Año de creación de pregunta: 2016
 questions[67]= "68)  En relaci&oacute;n con BPEL, &iquest;cu&aacute;l de las siguientes afirmaciones es incorrecta?";
 choices[67]= new Array();
 choices[67][0] = "Es un lenguaje basado en XML para la definici&oacute;n y ejecuci&oacute;n de procesos de negocio utilizando Servicios Web.";
 choices[67][1] = "Es un lenguaje de orquestaci&oacute;n estandarizado por OASIS.";
 choices[67][2] = "BPEL proporciona manejadores (handlers) que permiten tratar situaciones excepcionales o inesperadas.";
 choices[67][3] = "En BPEL se utiliza WS-CDL en lugar de WSDL.";
 answers[67] = choices[67][3];
 units[67] = "86";
 comments[67] = "Id Pregunta: 42. AGE A1 2015";


//  Id pregunta: 420 Año de creación de pregunta: 2016
 questions[68]= "69)  La Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, recoge que deber&aacute;n elaborar y aplicar un plan de igualdad, aquellas empresas con m&aacute;s de:";
 choices[68]= new Array();
 choices[68][0] = "150 trabajadores/as.";
 choices[68][1] = "200 trabajadores/as.";
 choices[68][2] = "250 trabajadores/as.";
 choices[68][3] = "300 trabajadores/as.";
 answers[68] = choices[68][2];
 units[68] = "14";
 comments[68] = "Id Pregunta: 420. POLITICAS DE IGUALDAD";


//  Id pregunta: 465 Año de creación de pregunta: 2016
 questions[69]= "70)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales deber&aacute; de contener:";
 choices[69]= new Array();
 choices[69][0] = "Las respuestas a) y b) son correctas.";
 choices[69][1] = "Las respuestas a) y b) no son correctas.";
 choices[69][2] = "Contenido coherente con los planes sectoriales.";
 choices[69][3] = "Programas de actuaci&oacute;n de existentes en el &aacute;mbito de cada departamento.";
 answers[69] = choices[69][0];
 units[69] = "10";
 comments[69] = "Id Pregunta: 465. PRESUPUESTOS GENERALES";


//  Id pregunta: 632 Año de creación de pregunta: 2016
 questions[70]= "71)  El sistema operativo que se dise&ntilde;a pensando en los tipos de datos y recursos que va a manejar: ficheros, procesos, memoria, hardware, etc., y en las propiedades y servicios que &eacute;stos pueden prestar, se construye siguiendo un modelo:";
 choices[70]= new Array();
 choices[70][0] = "Monol&iacute;tico.";
 choices[70][1] = "Estratificado.";
 choices[70][2] = "Cliente/servidor.";
 choices[70][3] = "Orientado a objetos.";
 answers[70] = choices[70][3];
 units[70] = "56";
 comments[70] = "Id Pregunta: 632. Junta de Extremadura A1 2015";


//  Id pregunta: 46 Año de creación de pregunta: 2016
 questions[71]= "72)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[71]= new Array();
 choices[71][0] = "En un sistema de cifrado de clave asim&eacute;trica la seguridad radica en la transmisi&oacute;n de la clave, mediante canal seguro, entre el emisor y el receptor del mensaje.";
 choices[71][1] = "Las huellas digitales devueltas por una misma funci&oacute;n hash tienen id&eacute;ntica longitud.";
 choices[71][2] = "Para ofrecer un nivel de seguridad equivalente, los sistemas de clave p&uacute;blica requieren menores longitudes de clave que los sistemas sim&eacute;tricos.";
 choices[71][3] = "Se denomina criptograma al procedimiento empleado para cifrar un mensaje.";
 answers[71] = choices[71][1];
 units[71] = "76";
 comments[71] = "Id Pregunta: 46. AGE A1 2015";


//  Id pregunta: 263 Año de creación de pregunta: 2016
 questions[72]= "73)  Los Vocales integrantes del &oacute;rgano de gobierno del Poder Judicial:";
 choices[72]= new Array();
 choices[72][0] = "Ser&aacute;n nombrados por el Presidente del Tribunal Supremo y del Consejo del Poder Judicial, por un periodo de cinco a&ntilde;os.";
 choices[72][1] = "Ser&aacute;n nombrados por el Congreso de los Diputados y por el Senado por un periodo de cinco a&ntilde;os.";
 choices[72][2] = "Ser&aacute;n nombrados por el Rey por un periodo de cinco a&ntilde;os.";
 choices[72][3] = "er&aacute;n nombrados por el Rey por un periodo de tres a&ntilde;os.";
 answers[72] = choices[72][1];
 units[72] = "1";
 comments[72] = "Id Pregunta: 263. CONSTITUCION1978";


//  Id pregunta: 297 Año de creación de pregunta: 2016
 questions[73]= "74)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n a la Presidencia del Consejo:";
 choices[73]= new Array();
 choices[73][0] = "Es rotatoria y tiene una duraci&oacute;n de un a&ntilde;o.";
 choices[73][1] = "Es rotatoria y tiene una duraci&oacute;n de seis meses.";
 choices[73][2] = "Se nombra por el Parlamento para un per&iacute;odo de cinco a&ntilde;os.";
 choices[73][3] = "La ostenta el presidente de la Comisi&oacute;n.";
 answers[73] = choices[73][1];
 units[73] = "5";
 comments[73] = "Id Pregunta: 297. UNION EUROPEA";


//  Id pregunta: 620 Año de creación de pregunta: 2016
 questions[74]= "75)  En el entorno de la Arquitectura del Software, un patr&oacute;n :";
 choices[74]= new Array();
 choices[74][0] = "Es una soluci&oacute;n a un problema en un contexto particular.";
 choices[74][1] = "Es recurrente y ense&ntilde;a permitiendo entender c&oacute;mo adaptarlo a la variante particular del problema donde se quiere aplicar.";
 choices[74][2] = "Tiene un nombre para referirse al patr&oacute;n.";
 choices[74][3] = "Todas las respuestas son correctas.";
 answers[74] = choices[74][3];
 units[74] = "50";
 comments[74] = "Id Pregunta: 620. Junta de Extremadura A1 2015";


