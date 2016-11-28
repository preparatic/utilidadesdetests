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

//  Id pregunta: 335 Año de creación de pregunta: 2016
 questions[0]= "1)  Un diputado del Parlamento Europeo, de nacionalidad espa&ntilde;ola, &iquest;puede ser tambi&eacute;n Diputado en el Congreso espa&ntilde;ol?:";
 choices[0]= new Array();
 choices[0][0] = "Son compatibles, lo que no puede compatibilizar es ser funcionario de cualquiera de las Instituciones Europeas.";
 choices[0][1] = "Son compatibles, lo que no puede compatibilizar es ser miembro del Tribunal de Justicia de Luxemburgo.";
 choices[0][2] = "Son incompatibles ambas actas de diputado.";
 choices[0][3] = "Son perfectamente compatibles ambas actas de diputado.";
 answers[0] = choices[0][2];
 units[0] = "5";
 comments[0] = "Id Pregunta: 335. UNION EUROPEA";


//  Id pregunta: 792 Año de creación de pregunta: 2016
 questions[1]= "2)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Subdelegados del Gobierno en las provincias los cuales tendr&aacute;n nivel de:";
 choices[1]= new Array();
 choices[1][0] = "Subsecretario";
 choices[1][1] = "Subdirector general";
 choices[1][2] = "Secretario de Estado";
 choices[1][3] = "ninguna es correcta";
 answers[1] = choices[1][1];
 units[1] = "4, 7, 8, 9";
 comments[1] = "Id Pregunta: 792. Ley 40/2015";


//  Id pregunta: 54 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;A qu&eacute; tipo de ataque nos referimos cuando se suplanta la identidad de una direcci&oacute;n IP origen?";
 choices[2]= new Array();
 choices[2][0] = "DoS";
 choices[2][1] = "Phishing";
 choices[2][2] = "Sniffing";
 choices[2][3] = "Spoofing";
 answers[2] = choices[2][3];
 units[2] = "119";
 comments[2] = "Id Pregunta: 54. AGE A1 2015";


//  Id pregunta: 424 Año de creación de pregunta: 2016
 questions[3]= "4)  Entre otros criterios de actuaci&oacute;n de las administraciones p&uacute;blicas para la consecuci&oacute;n del principio de igualdad, se encuentra:";
 choices[3]= new Array();
 choices[3][0] = "Evaluar peri&oacute;dicamente la efectividad del principio de igualdad.";
 choices[3][1] = "Penalizar a las empresas que no cumplan con los planes de igualdad.";
 choices[3][2] = "Ninguna es correcta.";
 choices[3][3] = "A y B son correctas.";
 answers[3] = choices[3][0];
 units[3] = "14";
 comments[3] = "Id Pregunta: 424. POLITICAS DE IGUALDAD";


//  Id pregunta: 107 Año de creación de pregunta: 2016
 questions[4]= "5)  Son bases de datos NoSQL orientadas a objetos:";
 choices[4]= new Array();
 choices[4][0] = "GemStone";
 choices[4][1] = "Zope Object DB";
 choices[4][2] = "Las dos anteriores";
 choices[4][3] = "Solo B)";
 answers[4] = choices[4][2];
 units[4] = "73";
 comments[4] = "Id Pregunta: 107. ";


//  Id pregunta: 695 Año de creación de pregunta: 2016
 questions[5]= "6)  Se&ntilde;ale de las siguientes la que NO corresponde a una herramienta de integraci&oacute;n continua:";
 choices[5]= new Array();
 choices[5][0] = "Jenkins";
 choices[5][1] = "Hudson";
 choices[5][2] = "SonarQube";
 choices[5][3] = "Todas lo son";
 answers[5] = choices[5][3];
 units[5] = "92";
 comments[5] = "Id Pregunta: 695. INTEGRACION CONTINUA";


//  Id pregunta: 216 Año de creación de pregunta: 2016
 questions[6]= "7)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola de 1978, est&aacute;n legitimados para interponer el recurso de inconstitucionalidad:";
 choices[6]= new Array();
 choices[6][0] = "El Presidente del Gobierno.";
 choices[6][1] = "El Consejo de Ministros.";
 choices[6][2] = "40 Diputados.";
 choices[6][3] = "El Ministerio Fiscal.";
 answers[6] = choices[6][0];
 units[6] = "1";
 comments[6] = "Id Pregunta: 216. CONSTITUCION1978";


//  Id pregunta: 571 Año de creación de pregunta: 2016
 questions[7]= "8)  El sector Servicios NO incluye:";
 choices[7]= new Array();
 choices[7][0] = "El Comercio";
 choices[7][1] = "Los Transportes";
 choices[7][2] = "La Energ&iacute;a";
 choices[7][3] = "Las Comunicaciones";
 answers[7] = choices[7][2];
 units[7] = "12";
 comments[7] = "Id Pregunta: 571. Modelo econ&oacute;mico";


//  Id pregunta: 730 Año de creación de pregunta: 2016
 questions[8]= "9)  Indica la respuesta correcta";
 choices[8]= new Array();
 choices[8][0] = "Scrum no implica baja documentaci&oacute;n, de hecho hay estudios que estiman que es totalmente compatible con CMMI-3";
 choices[8][1] = "Scrum es una metodolog&iacute;a poco organizada";
 choices[8][2] = "Scrum no suele incluir a testers en el SCRUM TEAM";
 choices[8][3] = "En Scrum, sufre la calidad del producto o servicio al no pasar procesos de calidad reglados";
 answers[8] = choices[8][0];
 units[8] = "34, 84";
 comments[8] = "Id Pregunta: 730. Metodologias &aacute;giles";


//  Id pregunta: 212 Año de creación de pregunta: 2016
 questions[9]= "10)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con la regulaci&oacute;n constitucional de la composici&oacute;n del Senado:";
 choices[9]= new Array();
 choices[9][0] = "La poblaci&oacute;n de Melilla elegir&aacute; dos Senadores.";
 choices[9][1] = "En cada provincia se elegir&aacute;n tres senadores.";
 choices[9][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas elegir&aacute;n un senador cuando su poblaci&oacute;n supere el mill&oacute;n de habitantes.";
 choices[9][3] = "El Senado se compone de 350 senadores.";
 answers[9] = choices[9][0];
 units[9] = "1";
 comments[9] = "Id Pregunta: 212. CONSTITUCION1978";


//  Id pregunta: 388 Año de creación de pregunta: 2016
 questions[10]= "11)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[10]= new Array();
 choices[10][0] = "Indirecta.";
 choices[10][1] = "Directa.";
 choices[10][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[10][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[10] = choices[10][1];
 units[10] = "14";
 comments[10] = "Id Pregunta: 388. POLITICAS DE IGUALDAD";


//  Id pregunta: 491 Año de creación de pregunta: 2016
 questions[11]= "12)  A tenor del art&iacute;culo 47.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el n&uacute;mero de ejercicios a que pueden aplicarse los gastos no ser&aacute; superior a:";
 choices[11]= new Array();
 choices[11][0] = "Dos.";
 choices[11][1] = "Cuatro.";
 choices[11][2] = "Cinco.";
 choices[11][3] = "Tres.";
 answers[11] = choices[11][1];
 units[11] = "10";
 comments[11] = "Id Pregunta: 491. PRESUPUESTOS GENERALES";


//  Id pregunta: 3 Año de creación de pregunta: 2016
 questions[12]= "13)  En el lenguaje de modelado UML :";
 choices[12]= new Array();
 choices[12][0] = "Los diagramas de secuencia y colaboraci&oacute;n son usados para modelar el comportamiento del sistema, pudiendo usarse para modelar un caso de uso, una clase, o un m&eacute;todo complicado.";
 choices[12][1] = "Los diagramas de actividad son usados para modelar la configuraci&oacute;n de los elementos de procesado en tiempo de ejecuci&oacute;n.";
 choices[12][2] = "Los diagramas de componentes son usados para modelar la estructura del software, incluyendo las dependencias entre los componentes de software.";
 choices[12][3] = "Los diagramas de implementaci&oacute;n son usados para modelar interacciones entre objetos de dise&ntilde;o en el sistema.";
 answers[12] = choices[12][2];
 units[12] = "89";
 comments[12] = "Id Pregunta: 3. AGE A1 2015";


//  Id pregunta: 11 Año de creación de pregunta: 2016
 questions[13]= "14)  Nada m&aacute;s arrancar el servidor de aplicaciones, usted intenta acceder a su aplicaci&oacute;n y se produce un error de memoria. En ese momento, sospecha que el error se produce porque est&aacute; utilizando unas librer&iacute;as de terceros de gran tama&ntilde;o. &iquest;Qu&eacute; tipo de error deber&iacute;a estar d&aacute;ndose para corroborar su hip&oacute;tesis?";
 choices[13]= new Array();
 choices[13][0] = "java.lang.OutOfMemoryError: Java heap space";
 choices[13][1] = "java.lang.OutOfMemoryError: PermGen space";
 choices[13][2] = "java.lang.OutOfMemoryError: Requested array size exceeds VM limit";
 choices[13][3] = "java.lang.OutOfMemoryError: request &lt;size&gt; bytes for &lt;reason&gt;. Out of swap space";
 answers[13] = choices[13][1];
 units[13] = "64";
 comments[13] = "Id Pregunta: 11. AGE A1 2015";


//  Id pregunta: 33 Año de creación de pregunta: 2016
 questions[14]= "15)  Respecto al desarrollo empleando tecnolog&iacute;a Microsoft, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[14]= new Array();
 choices[14][0] = "WINAPI (Windows API) permite un acceso a alto nivel del sistema, directamente usable en cualquier lenguaje y entorno de programaci&oacute;n.";
 choices[14][1] = "El framework .NET se compone de una biblioteca de clases denominada FCL (Framework Class Library) y del entorno com&uacute;n de ejecuci&oacute;n CLR (Common Language Runtime).";
 choices[14][2] = "En .NET el resultado de la compilaci&oacute;n de las aplicaciones es un m&oacute;dulo ensamblado en formato de fichero PE32 o PE32+ (Windows portable executable) directamente ejecutable sobre el hardware.";
 choices[14][3] = "Los compiladores para CLR producen c&oacute;digo FL (Final Language) denominado c&oacute;digo administrado.";
 answers[14] = choices[14][1];
 units[14] = "63";
 comments[14] = "Id Pregunta: 33. AGE A1 2015";


//  Id pregunta: 180 Año de creación de pregunta: 2016
 questions[15]= "16)  Se&ntilde;ale la afirmaci&oacute;n correcta de acuerdo con la regulaci&oacute;n que contiene el Art&iacute;culo 116 de la Constituci&oacute;n Espa&ntilde;ola de los estados de alarma, excepci&oacute;n y sitio:";
 choices[15]= new Array();
 choices[15][0] = "el estado de sitio ser&aacute; declarado por la mayor&iacute;a absoluta del Congreso de los Diputados, a propuesta exclusiva del Gobierno.";
 choices[15][1] = "El estado de excepci&oacute;n ser&aacute; declarado por el Gobierno mediante Acuerdo de Ministros, previa autorizaci&oacute;n del Senado.";
 choices[15][2] = "El estado de alarma ser&aacute; declarado por la mayor&iacute;a simple del Congreso de los Diputados, a propuesta exclusiva del Gobierno.";
 choices[15][3] = "La declaraci&oacute;n de los estados de alarma, excepci&oacute;n y sitio s&iacute; modificar&aacute;n el principio de responsabilidad del Gobierno y de sus agentes reconocidos en la CE y en las leyes.";
 answers[15] = choices[15][0];
 units[15] = "1";
 comments[15] = "Id Pregunta: 180. CONSTITUCION1978";


//  Id pregunta: 763 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;En qu&eacute; a&ntilde;o se adopt&oacute; la Estrategia para el Mercado &Uacute;nico Digital?";
 choices[16]= new Array();
 choices[16][0] = "En 2011";
 choices[16][1] = "En 2013";
 choices[16][2] = "En 2015";
 choices[16][3] = "En 2016";
 answers[16] = choices[16][2];
 units[16] = "17";
 comments[16] = "Id Pregunta: 763. Mercado &Uacute;nico Digital";


//  Id pregunta: 678 Año de creación de pregunta: 2016
 questions[17]= "18)  Son servicios previstos en el cat&aacute;logo de servicios de la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia:";
 choices[17]= new Array();
 choices[17][0] = "Los servicios de teleasistencia, de ayuda a domicilio y de formaci&oacute;n.";
 choices[17][1] = "Los servicios de ayuda a domicilio, de teleasistencia y de centro de d&iacute;a y de noche.";
 choices[17][2] = "Los servicios de teleasistencia, de atenci&oacute;n residencial y de sede electr&oacute;nica.";
 choices[17][3] = "Los servicios de prevenci&oacute;n, de ayuda a domicilio y de ambulancia.";
 answers[17] = choices[17][1];
 units[17] = "14";
 comments[17] = "Id Pregunta: 678. Dependencia";


//  Id pregunta: 619 Año de creación de pregunta: 2016
 questions[18]= "19)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[18]= new Array();
 choices[18][0] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar colaborativamente en equipo y obtener el mejor resultado posible de un proyecto.";
 choices[18][1] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar individualmente y obtener el mejor resultado posible de un proyecto.";
 choices[18][2] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar colaborativamente en equipo y obtener un proyecto.";
 choices[18][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[18] = choices[18][0];
 units[18] = "84";
 comments[18] = "Id Pregunta: 619. Junta de Extremadura A1 2015";


//  Id pregunta: 45 Año de creación de pregunta: 2016
 questions[19]= "20)  46. &iquest;Cu&aacute;l de las siguientes NO es una de las APIs incorporadas a HTML5?";
 choices[19]= new Array();
 choices[19][0] = "HTML Drag and Drop, para arrastrar un objeto a otra localizaci&oacute;n.";
 choices[19][1] = "HTML Advanced Search, para parametrizar y modificar el comportamiento de los buscadores.";
 choices[19][2] = "HTML Local Storage, para almacenar datos en el navegador.";
 choices[19][3] = "HTML SSE, para actualizar una p&aacute;gina web autom&aacute;ticamente sin preguntar al servidor.";
 answers[19] = choices[19][1];
 units[19] = "74";
 comments[19] = "Id Pregunta: 45. AGE A1 2015";


//  Id pregunta: 624 Año de creación de pregunta: 2016
 questions[20]= "21)  Qu&eacute; nombre reciben las unidades de almacenamieto de las que est&aacute; compuesta un documento XML?";
 choices[20]= new Array();
 choices[20][0] = "Entradas (entities).";
 choices[20][1] = "Atributos (attribs).";
 choices[20][2] = "M&oacute;dulos (modules).";
 choices[20][3] = "Objetos (objects).";
 answers[20] = choices[20][0];
 units[20] = "74";
 comments[20] = "Id Pregunta: 624. Junta de Extremadura A1 2015";


//  Id pregunta: 654 Año de creación de pregunta: 2016
 questions[21]= "22)  Dentro del proceso de MapReduce &iquest;Que es el shuffle?";
 choices[21]= new Array();
 choices[21][0] = "Es un proceso de adaptaci&oacute;n de los datos antes de entrar en la etapa de Map";
 choices[21][1] = "Es un aplicativo dentro del ecosistema Hadoop que sirve para distribuir datos en el HDFS";
 choices[21][2] = "Es el proceso por el que los datos llegan de los mappers a los reducers";
 choices[21][3] = "Es un algoritmo de mineria de datos usado en Big Data";
 answers[21] = choices[21][2];
 units[21] = "73";
 comments[21] = "Id Pregunta: 654. ";


//  Id pregunta: 43 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes principios NO est&aacute; recogido en el Manifiesto por el Desarrollo &Aacute;gil del Software?";
 choices[22]= new Array();
 choices[22][0] = "La simplicidad, o el arte de maximizar la cantidad de trabajo no realizado, es esencial.";
 choices[22][1] = "Aceptamos que los requisitos cambien, incluso en etapas tard&iacute;as del desarrollo. Los procesos &aacute;giles aprovechan el cambio para proporcionar ventaja competitiva al cliente.";
 choices[22][2] = "Las mejores arquitecturas, requisitos y dise&ntilde;os emergen por la aplicaci&oacute;n de unos procesos bien organizados.";
 choices[22][3] = "El software funcionando es la medida principal del progreso.";
 answers[22] = choices[22][2];
 units[22] = "34";
 comments[22] = "Id Pregunta: 43. AGE A1 2015";


//  Id pregunta: 729 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;C&uacute;al es el nombre de la reuni&oacute;n de SCRUM, donde se revisan los product backlog &iacute;tems?:";
 choices[23]= new Array();
 choices[23][0] = "Backlog refinement";
 choices[23][1] = "Backlog refinement";
 choices[23][2] = "A y b son correctas";
 choices[23][3] = "Ninguna de las anteriores";
 answers[23] = choices[23][2];
 units[23] = "34, 84";
 comments[23] = "Id Pregunta: 729. Metodologias &aacute;giles";


//  Id pregunta: 19 Año de creación de pregunta: 2016
 questions[24]= "25)  En el sistema de Identificaci&oacute;n, Autenticaci&oacute;n y Firma Electr&oacute;nica com&uacute;n para todo el Sector P&uacute;blico Administrativo Estatal (cl@ve):";
 choices[24]= new Array();
 choices[24][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital es el proveedor &uacute;nico de servicios de verificaci&oacute;n de la identidad.";
 choices[24][1] = "Sus destinatarios son exclusivamente ciudadanos espa&ntilde;oles.";
 choices[24][2] = "Su &aacute;mbito de aplicaci&oacute;n podr&aacute; extenderse a otras Administraciones P&uacute;blicas mediante la formalizaci&oacute;n del oportuno convenio.";
 choices[24][3] = "No se requiere registro previo de usuarios, ni consentimiento del usuario ya registrado en otros sistemas previos de identificaci&oacute;n, autenticaci&oacute;n y firma.";
 answers[24] = choices[24][2];
 units[24] = "47";
 comments[24] = "Id Pregunta: 19. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 187 Año de creación de pregunta: 2016
 questions[25]= "26)  El Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola establece un plazo de 30 d&iacute;as, para que los Decretos-Leyes sean sometidos a debate y votaci&oacute;n de la totalidad del Congreso de los Diputados, durante el cual:";
 choices[25]= new Array();
 choices[25][0] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento de urgencia.";
 choices[25][1] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento com&uacute;n.";
 choices[25][2] = "Durante dicho plazo, no pueden ser tramitados ni como proyectos de ley ni como propociones de ley.";
 choices[25][3] = "Durante dicho plazo, s&oacute;lo el Senado puede tramitar los Decretos-Leyes como proyectos de ley por el procedimiento de urgencia.";
 answers[25] = choices[25][0];
 units[25] = "1";
 comments[25] = "Id Pregunta: 187. CONSTITUCION1978";


//  Id pregunta: 797 Año de creación de pregunta: 2016
 questions[26]= "27)  Se&ntilde;ale la respuesta correcta:";
 choices[26]= new Array();
 choices[26][0] = "corresponde a los &oacute;rganos superiores establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos directivos su desarrollo y ejecuci&oacute;n";
 choices[26][1] = "corresponde establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos superiores";
 choices[26][2] = "corresponde establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos directivos";
 choices[26][3] = "corresponde a los &oacute;rganos directivos establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos superiores su desarrollo y ejecuci&oacute;n";
 answers[26] = choices[26][0];
 units[26] = "4, 7, 8, 9";
 comments[26] = "Id Pregunta: 797. Ley 40/2015";


//  Id pregunta: 719 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;A trav&eacute;s de qu&eacute; empresa surgen las metodolog&iacute;as lean?";
 choices[27]= new Array();
 choices[27][0] = "Ford";
 choices[27][1] = "Google";
 choices[27][2] = "Toyota";
 choices[27][3] = "Facebook";
 answers[27] = choices[27][2];
 units[27] = "34";
 comments[27] = "Id Pregunta: 719. Metodologias Lean";


//  Id pregunta: 565 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Qu&eacute; fen&oacute;meno NO ha puesto de manifiesto la crisis econ&oacute;mica?";
 choices[28]= new Array();
 choices[28][0] = "Tasa de paro estructural alt&iacute;sima";
 choices[28][1] = "Excesiva estabilidad de empleo";
 choices[28][2] = "An&eacute;mico crecimiento de la productividad";
 choices[28][3] = "Existencia de una importante econom&iacute;a sumergida";
 answers[28] = choices[28][1];
 units[28] = "12";
 comments[28] = "Id Pregunta: 565. Modelo econ&oacute;mico";


//  Id pregunta: 581 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Cu&aacute;les son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[29]= new Array();
 choices[29][0] = "Transparencia e innovaci&oacute;n, orientaci&oacute;n al usuario del servicio y fomentar el uso de est&aacute;ndares";
 choices[29][1] = "Colaboraci&oacute;n y alianzas, unidad y visi&oacute;n integral y orientaci&oacute;n al usuario del servicio";
 choices[29][2] = "Unidad y visi&oacute;n integral, orientaci&oacute;n al usuario del servicio y prestaci&oacute;n de servicios compartidos";
 choices[29][3] = "Colaboraci&oacute;n y alianzas, fomentar el uso de est&aacute;ndares e incrementar la productividad y la eficacia";
 answers[29] = choices[29][1];
 units[29] = "19";
 comments[29] = "Id Pregunta: 581. Estrategia TIC";


//  Id pregunta: 599 Año de creación de pregunta: 2016
 questions[30]= "31)  La pol&iacute;tica de seguridad de alto nivel de la Organizaci&oacute;n:";
 choices[30]= new Array();
 choices[30][0] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, sin entrar en detalles acerca del COMO.";
 choices[30][1] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer y COMO se debe implementar.";
 choices[30][2] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 choices[30][3] = "Debe describir QUE se intenta proteger, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 answers[30] = choices[30][0];
 units[30] = "45";
 comments[30] = "Id Pregunta: 599. Junta de Extremadura A1 2015";


//  Id pregunta: 189 Año de creación de pregunta: 2016
 questions[31]= "32)  De conformidad a lo establecido en la Constituci&oacute;n Espa&ntilde;ola, las Cortes pueden delegar en el Gobierno la potestad de dictar normas con rango de Ley. Cuando se trata de que el Gobierno elabore y apruebe textos articulados esta delegaci&oacute;n tiene que otorgarse mediante:";
 choices[31]= new Array();
 choices[31][0] = "Ley Org&aacute;nica.";
 choices[31][1] = "Ley de Bases.";
 choices[31][2] = "Ley ordinaria.";
 choices[31][3] = "Mandato.";
 answers[31] = choices[31][1];
 units[31] = "1";
 comments[31] = "Id Pregunta: 189. CONSTITUCION1978";


//  Id pregunta: 296 Año de creación de pregunta: 2016
 questions[32]= "33)  Indique a qui&eacute;n corresponde la funci&oacute;n de adoptar las iniciativas de la programaci&oacute;n anual y plurianual de la Uni&oacute;n Europea con el fin de alcanzar acuerdos interinstitucionales:";
 choices[32]= new Array();
 choices[32][0] = "Al Consejo Europeo.";
 choices[32][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[32][2] = "A la Comisi&oacute;n Europea.";
 choices[32][3] = "Al Parlamento Europeo.";
 answers[32] = choices[32][2];
 units[32] = "5";
 comments[32] = "Id Pregunta: 296. UNION EUROPEA";


//  Id pregunta: 240 Año de creación de pregunta: 2016
 questions[33]= "34)  Las dos C&aacute;maras que configuran las Cortes Generales:";
 choices[33]= new Array();
 choices[33][0] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a diciembre, y de febrero a julio.";
 choices[33][1] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a noviembre, y de febrero a junio.";
 choices[33][2] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la Diputaci&oacute;n Permanente.";
 choices[33][3] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 answers[33] = choices[33][0];
 units[33] = "1";
 comments[33] = "Id Pregunta: 240. CONSTITUCION1978";


//  Id pregunta: 548 Año de creación de pregunta: 2016
 questions[34]= "35)  El principio definido en el est&aacute;ndar ISO/IEC 38500 para la Gobernanza TIC que establece la necesidad de cumplir los requerimientos regulatorios y legales es el principio de:";
 choices[34]= new Array();
 choices[34][0] = "Conformidad";
 choices[34][1] = "Responsabilidad";
 choices[34][2] = "Adquisici&oacute;n";
 choices[34][3] = "Desempe&ntilde;o";
 answers[34] = choices[34][0];
 units[34] = "26";
 comments[34] = "Id Pregunta: 548. Gobernanza TIC";


//  Id pregunta: 183 Año de creación de pregunta: 2016
 questions[35]= "36)  Seg&uacute;n el Art&iacute;culo 113 de la Constituci&oacute;n Espa&ntilde;ola, la moci&oacute;n de censura deber&aacute; ser propuesta:";
 choices[35]= new Array();
 choices[35][0] = "al menos por 50 Diputados.";
 choices[35][1] = "al menos por la d&eacute;cima parte de los Diputados.";
 choices[35][2] = "por la Mesa del Congreso de los Diputados.";
 choices[35][3] = "al menos por dos grupos pol&iacute;ticos del Congreso de los Diputados.";
 answers[35] = choices[35][1];
 units[35] = "1";
 comments[35] = "Id Pregunta: 183. CONSTITUCION1978";


//  Id pregunta: 820 Año de creación de pregunta: 2016
 questions[36]= "37)  Respecto a los servicios territoriales es correcto:";
 choices[36]= new Array();
 choices[36][0] = "la organizaci&oacute;n de los servicios territoriales no integrados en las Delegaciones del Gobierno se establecer&aacute; mediante Real Decreto";
 choices[36][1] = "los servicios territoriales no integrados depender&aacute;n del Delegado del Gobierno, o en su caso Subdelegado del Gobierno, a trav&eacute;s de la Secretar&iacute;a General";
 choices[36][2] = "los servicios territoriales integrados depender&aacute;n del &oacute;rgano central competente sobre el sector de actividad en el que aqu&eacute;llos operen";
 choices[36][3] = "ninguna es correcta";
 answers[36] = choices[36][0];
 units[36] = "4, 7, 8, 9";
 comments[36] = "Id Pregunta: 820. Ley 40/2015";


//  Id pregunta: 641 Año de creación de pregunta: 2016
 questions[37]= "38)  En cuanto al proceso de autenticaci&oacute;n en Linux, indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[37]= new Array();
 choices[37][0] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema DEC.";
 choices[37][1] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema MD6.";
 choices[37][2] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DES y MD5.";
 choices[37][3] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DEC y MD6.";
 answers[37] = choices[37][2];
 units[37] = "57";
 comments[37] = "Id Pregunta: 641. Junta de Extremadura A1 2015";


//  Id pregunta: 29 Año de creación de pregunta: 2016
 questions[38]= "39)  De acuerdo con el art&iacute;culo 62 de la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, se&ntilde;ale la respuesta correcta:";
 choices[38]= new Array();
 choices[38][0] = "El uso del dominio p&uacute;blico radioel&eacute;ctrico s&oacute;lo puede ser de dos tipos: especial o privativo.";
 choices[38][1] = "El uso com&uacute;n del dominio p&uacute;blico radioel&eacute;ctrico precisa de t&iacute;tulo habilitante.";
 choices[38][2] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico es el que se realiza mediante la explotaci&oacute;n en exclusiva, o por un n&uacute;mero limitado de usuarios, de determinadas frecuencias en un mismo &aacute;mbito f&iacute;sico de aplicaci&oacute;n.";
 choices[38][3] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico es el que se lleve a cabo de las bandas de frecuencias habilitadas para su explotaci&oacute;n de forma compartida, sin limitaci&oacute;n de n&uacute;mero de operadores o usuarios y con las condiciones t&eacute;cnicas y para los servicios que se establezcan en cada caso.";
 answers[38] = choices[38][2];
 units[38] = "121";
 comments[38] = "Id Pregunta: 29. AGE A1 2015";


//  Id pregunta: 344 Año de creación de pregunta: 2016
 questions[39]= "40)  Al ingreso de Espa&ntilde;a en la Uni&oacute;n Europea &iquest;cu&aacute;ntos eurodiputados componen el Parlamento?:";
 choices[39]= new Array();
 choices[39][0] = "Pas&oacute; de 518 a 626.";
 choices[39][1] = "Pas&oacute; de 434 a 518.";
 choices[39][2] = "Pas&oacute; de 345 a 512.";
 choices[39][3] = "Pas&oacute; de 435 a 610.";
 answers[39] = choices[39][1];
 units[39] = "5";
 comments[39] = "Id Pregunta: 344. UNION EUROPEA";


//  Id pregunta: 782 Año de creación de pregunta: 2016
 questions[40]= "41)  Sin perjuicio de la responsabilidad disciplinaria en que se pueda incurrir, el incumplimiento de las instrucciones u &oacute;rdenes de servicio:";
 choices[40]= new Array();
 choices[40][0] = "no afecta por s&iacute; solo a la validez de los actos dictados por los &oacute;rganos administrativos";
 choices[40][1] = "supone la invalidez de los actos dictados por los &oacute;rganos administrativos";
 choices[40][2] = "supone la nulidad de los actos dictados por los &oacute;rganos administrativos";
 choices[40][3] = "supone la anulabilidad de los actos dictados por los &oacute;rganos administrativos";
 answers[40] = choices[40][0];
 units[40] = "4, 7, 8, 9";
 comments[40] = "Id Pregunta: 782. Ley 40/2015";


//  Id pregunta: 457 Año de creación de pregunta: 2016
 questions[41]= "42)  La clasificaci&oacute;n econ&oacute;mica del gasto nos dice...";
 choices[41]= new Array();
 choices[41][0] = "En qu&eacute; nos gastamos el dinero";
 choices[41][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[41][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[41][3] = "Qui&eacute;n se gasta el dinero.";
 answers[41] = choices[41][0];
 units[41] = "10";
 comments[41] = "Id Pregunta: 457. PRESUPUESTOS GENERALES";


//  Id pregunta: 743 Año de creación de pregunta: 2016
 questions[42]= "43)  Dos de los principios del Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE son:";
 choices[42]= new Array();
 choices[42][0] = "Transparencia e innovaci&oacute;n";
 choices[42][1] = "Seguridad y reutilizaci&oacute;n";
 choices[42][2] = "Reutilizaci&oacute;n y buz&oacute;n de quejas y sugerencias";
 choices[42][3] = "Principio de solo una vez y transfronterizo de forma predeterminada";
 answers[42] = choices[42][3];
 units[42] = "28";
 comments[42] = "Id Pregunta: 743. Estrategia TIC";


//  Id pregunta: 681 Año de creación de pregunta: 2016
 questions[43]= "44)  De acuerdo a la Ley 27/2011, de 1 de agosto, sobre actualizaci&oacute;n, adecuaci&oacute;n y modernizaci&oacute;n del sistema de Seguridad Social, la edad exigida de jubilaci&oacute;n:";
 choices[43]= new Array();
 choices[43][0] = "A partir del a&ntilde;o 2020, ser&aacute; de 67 a&ntilde;os para quellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un perido cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[43][1] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para quellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un perido cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[43][2] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para todas las personas con independencia del periodo cotizado.";
 choices[43][3] = "Aumenta progresivamente desde los 65 a los 67 a&ntilde;os desde el a&ntilde;o 2013 al 2027, si bien se mantiene en los 65 a&ntilde;os para personas con un periodo cotizado igual o mayor a 35 a&ntilde;os.";
 answers[43] = choices[43][1];
 units[43] = "14";
 comments[43] = "Id Pregunta: 681. Pensiones";


//  Id pregunta: 540 Año de creación de pregunta: 2016
 questions[44]= "45)  Ser&aacute;/n interoperable/s con los registros electr&oacute;nicos generales y particulares de apoderamientos:";
 choices[44]= new Array();
 choices[44][0] = "los registros mercantiles";
 choices[44][1] = "los registros de la propiedad";
 choices[44][2] = "los protocolos notariales";
 choices[44][3] = "todas son correctas";
 answers[44] = choices[44][3];
 units[44] = "7";
 comments[44] = "Id Pregunta: 540. LEY 39/2015";


//  Id pregunta: 701 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Qu&eacute; es la integraci&oacute;n continua?";
 choices[45]= new Array();
 choices[45][0] = "Una pr&aacute;ctica recogida en la metodolog&iacute;a M&eacute;trica V3.";
 choices[45][1] = "Un modelo inform&aacute;tico que consiste en hacer integraciones autom&aacute;ticas de un proyecto lo m&aacute;s a menudo posible para as&iacute; poder detectar fallos cuanto antes.";
 choices[45][2] = "Una metodolog&iacute;a &aacute;gil inspirada en XP y FDD encaminada a realizar un desarrollo hol&iacute;stico en todo el proceso de desarrollo de un sistema de informaci&oacute;n.";
 choices[45][3] = "Ninguna de las anteriores.";
 answers[45] = choices[45][1];
 units[45] = "92";
 comments[45] = "Id Pregunta: 701. INTEGRACION CONTINUA";


//  Id pregunta: 602 Año de creación de pregunta: 2016
 questions[46]= "47)  Los est&aacute;ndares de la norma IEEE 802.11 se ubican en las capas del modelo OSI:";
 choices[46]= new Array();
 choices[46][0] = "La capa de transmisi&oacute;n y la capa de presentaci&oacute;n.";
 choices[46][1] = "La capa de aplicaci&oacute;n y la capa de gesti&oacute;n.";
 choices[46][2] = "La capa f&iacute;sica y la cada de enlace de datos.";
 choices[46][3] = "La capa de red y la capa de tr&aacute;fico.";
 answers[46] = choices[46][2];
 units[46] = "108";
 comments[46] = "Id Pregunta: 602. Junta de Extremadura A1 2015";


//  Id pregunta: 94 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es propia de Apache Hadoop?";
 choices[47]= new Array();
 choices[47][0] = "Es un framework de software libre.";
 choices[47][1] = "Es una base de datos NoSQL.";
 choices[47][2] = "Est&aacute; basado en MapReduce.";
 choices[47][3] = "Puede emplearse en sistemas de datos masivos (Big Data).";
 answers[47] = choices[47][1];
 units[47] = "73";
 comments[47] = "Id Pregunta: 94. AGE A1 2015";


//  Id pregunta: 616 Año de creación de pregunta: 2016
 questions[48]= "49)  Dada la m&aacute;scara de red 255.255.240.0, &iquest;a qu&eacute; red pertenece la direcci&oacute;n IP 192.228.17.15?";
 choices[48]= new Array();
 choices[48][0] = "192.228.0.0";
 choices[48][1] = "192.228.8.0";
 choices[48][2] = "192.228.16.0";
 choices[48][3] = "192.228.17.0";
 answers[48] = choices[48][2];
 units[48] = "109";
 comments[48] = "Id Pregunta: 616. Junta de Extremadura A1 2015";


//  Id pregunta: 136 Año de creación de pregunta: 2016
 questions[49]= "50)  La Ley 15/2014, de racionalizaci&oacute;n del Sector P&uacute;blico y otras medidas de reforma administrativa, no incluye:";
 choices[49]= new Array();
 choices[49][0] = "Modificaci&oacute;n de la Ley General Presupuestaria para permitir de manera m&aacute;s eficaz el control de las cuentas corrientes en las que se sit&uacute;an fondos de Tesoro P&uacute;blico.";
 choices[49][1] = "Permiso para la reordenaci&oacute;n de organismos p&uacute;blicos con el fin de mejorar su eficiencia y reducir el gasto p&uacute;blico.";
 choices[49][2] = "Modificaci&oacute;n normativa para hacer uso de certificados electr&oacute;nicos &uacute;nicos para grupos o colectivos de personas f&iacute;sicas.";
 choices[49][3] = "Implantaci&oacute;n del BOE como Tabl&oacute;n Edictal &Uacute;nico para la realizaci&oacute;n de notificaciones administrativas.";
 answers[49] = choices[49][2];
 units[49] = "12";
 comments[49] = "Id Pregunta: 136. Leyes modelo econ&oacute;mico";


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


//  Id pregunta: 780 Año de creación de pregunta: 2016
 questions[51]= "52)  Los &oacute;rganos administrativos podr&aacute;n dirigir las actividades de sus &oacute;rganos jer&aacute;rquicamente dependientes mediante:";
 choices[51]= new Array();
 choices[51][0] = "circulares";
 choices[51][1] = "reglamentos internos";
 choices[51][2] = "instrucciones y &oacute;rdenes de servicio";
 choices[51][3] = "disposiciones de car&aacute;cter general";
 answers[51] = choices[51][2];
 units[51] = "4, 7, 8, 9";
 comments[51] = "Id Pregunta: 780. Ley 40/2015";


//  Id pregunta: 306 Año de creación de pregunta: 2016
 questions[52]= "53)  Componen la Comisi&oacute;n Europea:";
 choices[52]= new Array();
 choices[52][0] = "Un Comisario por cada Estado miembro.";
 choices[52][1] = "Uno o dos Comisarios por cada Estado miembro, dependiendo de las caracter&iacute;sticas del Estado.";
 choices[52][2] = "Dos Comisarios por cada Estado miembro.";
 choices[52][3] = "Los Ministros de Asuntos Exteriores de cada Estado miembro.";
 answers[52] = choices[52][0];
 units[52] = "5";
 comments[52] = "Id Pregunta: 306. UNION EUROPEA";


//  Id pregunta: 738 Año de creación de pregunta: 2016
 questions[53]= "54)  Las iniciativas que se lancen al amparo del Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE se ce&ntilde;ir&aacute;n a:";
 choices[53]= new Array();
 choices[53][0] = "6 principios.";
 choices[53][1] = "7 principios.";
 choices[53][2] = "5 principios.";
 choices[53][3] = "6 directrices.";
 answers[53] = choices[53][1];
 units[53] = "28";
 comments[53] = "Id Pregunta: 738. Estrategia TIC";


//  Id pregunta: 634 Año de creación de pregunta: 2016
 questions[54]= "55)  El sistema operativo que se dise&ntilde;a pensando en los tipos de datos y recursos que va a manejar: ficheros, procesos, memoria, hardware, etc., y en las propiedades y servicios que &eacute;stos pueden prestar, se construye siguiendo un modelo:";
 choices[54]= new Array();
 choices[54][0] = "Monol&iacute;tico.";
 choices[54][1] = "Estratificado.";
 choices[54][2] = "Cliente/servidor.";
 choices[54][3] = "Orientado a objetos.";
 answers[54] = choices[54][3];
 units[54] = "56";
 comments[54] = "Id Pregunta: 634. Junta de Extremadura A1 2015";


//  Id pregunta: 179 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Qu&eacute; tipo de ley aprueba los estatutos de autonom&iacute;a?";
 choices[55]= new Array();
 choices[55][0] = "Una ley orginaria.";
 choices[55][1] = "Una ley org&aacute;nica.";
 choices[55][2] = "Una ley de bases.";
 choices[55][3] = "Una ley de transferencia.";
 answers[55] = choices[55][1];
 units[55] = "1";
 comments[55] = "Id Pregunta: 179. CONSTITUCION1978";


//  Id pregunta: 627 Año de creación de pregunta: 2016
 questions[56]= "57)  En UML &iquest;qu&eacute; es una m&aacute;quina de estados?";
 choices[56]= new Array();
 choices[56][0] = "Es un modelo computacional representado por grafos, en los que los estados son los v&eacute;rtices.";
 choices[56][1] = "Es un dispositivo que puede ser programado para cumplir determinadas tareas de control en sistema autom&aacute;ticos.";
 choices[56][2] = "Es un comportamiento que especifica las secuencias de estados por las que pasa un objeto a lo largo de su vida en respuesta a eventos, junto con sus respuestas a esos eventos.";
 choices[56][3] = "Es un sistema l&oacute;gico que posee una entrada, un procesador intermedio y una salida resultado de la aplicaci&oacute;n del procesamiento sobre la entrada.";
 answers[56] = choices[56][2];
 units[56] = "89";
 comments[56] = "Id Pregunta: 627. Junta de Extremadura A1 2015";


//  Id pregunta: 529 Año de creación de pregunta: 2016
 questions[57]= "58)  Los interesados con capacidad de obrar podr&aacute;n actuar por medio de representante:";
 choices[57]= new Array();
 choices[57][0] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 choices[57][1] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[57][2] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[57][3] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 answers[57] = choices[57][2];
 units[57] = "7";
 comments[57] = "Id Pregunta: 529. LEY 39/2015";


//  Id pregunta: 205 Año de creación de pregunta: 2016
 questions[58]= "59)  De acuerdo con la regulaci&oacute;n de la Constitucional de las Comunidades Aut&oacute;nomas, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[58]= new Array();
 choices[58][0] = "La federaci&oacute;n de Comunidades Aut&oacute;nomas exige aprobaci&oacute;n mediante ley org&aacute;nica.";
 choices[58][1] = "Los Estatutos de Autonom&iacute;a deben contener la delimitaci&oacute;n del territorio de la Comunidad Aut&oacute;noma.";
 choices[58][2] = "La reforma de los Estatutos se aprobar&aacute; por las Cortes Generales mediante ley ordinaria.";
 choices[58][3] = "El Estado tiene competencia exclusiva sobre agricultura y ganader&iacute;a.";
 answers[58] = choices[58][1];
 units[58] = "1";
 comments[58] = "Id Pregunta: 205. CONSTITUCION1978";


//  Id pregunta: 728 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest; Cu&aacute;l es el n&uacute;mero de personas recomendados para cada team de Scrum?";
 choices[59]= new Array();
 choices[59][0] = "De 1a  4 ";
 choices[59][1] = "De 3 a  7 ";
 choices[59][2] = "De 5 a  9";
 choices[59][3] = "De 7 a 11";
 answers[59] = choices[59][2];
 units[59] = "34, 84";
 comments[59] = "Id Pregunta: 728. Metodologias &aacute;giles";


//  Id pregunta: 141 Año de creación de pregunta: 2016
 questions[60]= "61)  El recurso de alzada puede interponerse:";
 choices[60]= new Array();
 choices[60][0] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna en todo caso";
 choices[60][1] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna o ante el competente para resolverlo";
 choices[60][2] = "Ante el &oacute;rgano competente para resolverlo en todo caso";
 choices[60][3] = "Ante el Defensor del Pueblo";
 answers[60] = choices[60][1];
 units[60] = "8";
 comments[60] = "Id Pregunta: 141. Ley 39/2015, Art&iacute;culo 121";


//  Id pregunta: 167 Año de creación de pregunta: 2016
 questions[61]= "62)  Una de las preocupaciones de la Agenda Digital Europea es la &ldquo;exclusi&oacute;n digital&rdquo;. Para combatirla, se incluyen medidas como...";
 choices[61]= new Array();
 choices[61][0] = "incrementar la eficiencia energ&eacute;tica y reducir la energ&iacute;a que se usa en los hogares";
 choices[61][1] = "incrementar el ratio de participaci&oacute;n de personas con discapacidad en actividades p&uacute;blicas, sociales y econ&oacute;micas a trav&eacute;s de proyectos de inclusi&oacute;n.";
 choices[61][2] = "implementar un sistema de firma electr&oacute;nica seguro que funcione en cualquiera de los Estados Miembros";
 choices[61][3] = "apoyar las pol&iacute;ticas del sector audiovisual en pos de las personas con discapacidad";
 answers[61] = choices[61][1];
 units[61] = "19";
 comments[61] = "Id Pregunta: 167. https://ec.europa.eu/digital-single-market/en/digital-inclusion-better-eu-society";


//  Id pregunta: 433 Año de creación de pregunta: 2016
 questions[62]= "63)  El &oacute;rgano colegiado responsable de la coordinaci&oacute;n de las pol&iacute;ticas y medidas adoptadas por los departamentos ministeriales con la finalidad de garantizar el derecho a la igualdad entre mujeres y hombres, se denomina:";
 choices[62]= new Array();
 choices[62][0] = "Unidad de igualdad.";
 choices[62][1] = "Comisi&oacute;n Interministerial de Igualdad entre mujeres y hombres.";
 choices[62][2] = "Ninguna de las anteriores.";
 choices[62][3] = "A y B son correctas.";
 answers[62] = choices[62][1];
 units[62] = "14";
 comments[62] = "Id Pregunta: 433. POLITICAS DE IGUALDAD";


//  Id pregunta: 454 Año de creación de pregunta: 2016
 questions[63]= "64)  En t&eacute;rminos familiares, podemos decir que desembocan en gastos...";
 choices[63]= new Array();
 choices[63][0] = "Los cr&eacute;ditos";
 choices[63][1] = "Las partidas presupuestarias";
 choices[63][2] = "Los derechos";
 choices[63][3] = "Las obligaciones";
 answers[63] = choices[63][3];
 units[63] = "10";
 comments[63] = "Id Pregunta: 454. PRESUPUESTOS GENERALES";


//  Id pregunta: 489 Año de creación de pregunta: 2016
 questions[64]= "65)  Seg&uacute;n el art&iacute;culo 56.6 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Hacienda dar&aacute; cuentas trimestralmente de los cr&eacute;ditos extraordinarias y suplementos de cr&eacute;dito a:";
 choices[64]= new Array();
 choices[64][0] = "Las Cortes Generales.";
 choices[64][1] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[64][2] = "El Gobierno.";
 choices[64][3] = "El Congreso de los Diputados.";
 answers[64] = choices[64][0];
 units[64] = "10";
 comments[64] = "Id Pregunta: 489. PRESUPUESTOS GENERALES";


//  Id pregunta: 520 Año de creación de pregunta: 2016
 questions[65]= "66)  Las Corporaciones de Derecho P&uacute;blico se regir&aacute;n por:";
 choices[65]= new Array();
 choices[65][0] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[65][1] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica";
 choices[65][2] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[65][3] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica";
 answers[65] = choices[65][0];
 units[65] = "7";
 comments[65] = "Id Pregunta: 520. LEY 39/2015";


//  Id pregunta: 582 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;A qui&eacute;n corresponde la declaraci&oacute;n de medios y servicios compartidos?";
 choices[66]= new Array();
 choices[66][0] = "A la CETIC";
 choices[66][1] = "A la Secretar&iacute;a General de Administraci&oacute;n Digital, a propuesta de la CETIC";
 choices[66][2] = "A la CETIC y a la Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[66][3] = "A la CETIC, a propuesta de la Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[66] = choices[66][3];
 units[66] = "19";
 comments[66] = "Id Pregunta: 582. Estrategia TIC";


//  Id pregunta: 412 Año de creación de pregunta: 2016
 questions[67]= "68)  &Aacute;mbito de aplicaci&oacute;n de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombre:";
 choices[67]= new Array();
 choices[67][0] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Europeo.";
 choices[67][1] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Espa&ntilde;ol.";
 choices[67][2] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Internacional.";
 choices[67][3] = "Ninguna de ellas se ajusta al &aacute;mbito de aplicaci&oacute;n.";
 answers[67] = choices[67][1];
 units[67] = "14";
 comments[67] = "Id Pregunta: 412. POLITICAS DE IGUALDAD";


//  Id pregunta: 108 Año de creación de pregunta: 2016
 questions[68]= "69)  Son proyectos de Apache relacionados con Big Data:";
 choices[68]= new Array();
 choices[68][0] = "Hadoop";
 choices[68][1] = "Spark";
 choices[68][2] = "A) y B)";
 choices[68][3] = "Niguno de los anteriores";
 answers[68] = choices[68][2];
 units[68] = "73";
 comments[68] = "Id Pregunta: 108. ";


//  Id pregunta: 400 Año de creación de pregunta: 2016
 questions[69]= "70)  Corresponde probar la ausencia de discriminaci&oacute;n en las medidas adoptadas y su proporcionalidad, a:";
 choices[69]= new Array();
 choices[69][0] = "A la persona demandante.";
 choices[69][1] = "A la persona demandada.";
 choices[69][2] = "Al &oacute;rgano judicial.";
 choices[69][3] = "Al &oacute;rgano administrativo.";
 answers[69] = choices[69][1];
 units[69] = "14";
 comments[69] = "Id Pregunta: 400. POLITICAS DE IGUALDAD";


//  Id pregunta: 77 Año de creación de pregunta: 2016
 questions[70]= "71)  Respecto al uso de servicios de firma de documentos electr&oacute;nicos mediante certificados electr&oacute;nicos centralizados, mediante el sistema Cl@ve, indique cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[70]= new Array();
 choices[70][0] = "Para poder acceder al servicio, el usuario deber&aacute; solicitar previa y expresamente la emisi&oacute;n de los certificados electr&oacute;nicos centralizados correspondientes.";
 choices[70][1] = "Los certificados electr&oacute;nicos centralizados ser&aacute;n emitidos con las mismas garant&iacute;as de identificaci&oacute;n del DNI electr&oacute;nico del ciudadano.";
 choices[70][2] = "El acceso al servicio requiere en todo caso que el usuario se haya registrado en Cl@ve y haya activado su Cl@ve permanente.";
 choices[70][3] = "En el momento de la identificaci&oacute;n, se requerir&aacute; la utilizaci&oacute;n de una verificaci&oacute;n de seguridad adicional mediante un c&oacute;digo de un solo uso y validez limitada en el tiempo que se enviar&aacute; al tel&eacute;fono m&oacute;vil del usuario registrado.";
 answers[70] = choices[70][2];
 units[70] = "47";
 comments[70] = "Id Pregunta: 77. AGE A1 2015";


//  Id pregunta: 336 Año de creación de pregunta: 2016
 questions[71]= "72)  El Tribunal de Justicia Europeo funcion&oacute; como instancia &uacute;nica hasta:";
 choices[71]= new Array();
 choices[71][0] = "Diciembre de 1987.";
 choices[71][1] = "Septiembre de 1989.";
 choices[71][2] = "Octubre de 1990.";
 choices[71][3] = "Noviembre de 1980.";
 answers[71] = choices[71][1];
 units[71] = "5";
 comments[71] = "Id Pregunta: 336. UNION EUROPEA";


//  Id pregunta: 9 Año de creación de pregunta: 2016
 questions[72]= "73)  Con respecto a los entornos de integraci&oacute;n continua, indique cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[72]= new Array();
 choices[72][0] = "Jenkins no dispone de la funcionalidad de extenderse mediante plugins.";
 choices[72][1] = "SonarQube utiliza herramientas de an&aacute;lisis est&aacute;tico de c&oacute;digo que permiten obtener m&eacute;tricas para mejorar la calidad del c&oacute;digo.";
 choices[72][2] = "El fichero POM empleado en Maven no siempre es un fichero XML.";
 choices[72][3] = "Jenkins es un software de integraci&oacute;n continua bajo licencia Oracle.";
 answers[72] = choices[72][1];
 units[72] = "95";
 comments[72] = "Id Pregunta: 9. AGE A1 2015";


//  Id pregunta: 837 Año de creación de pregunta: 2016
 questions[73]= "74)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[73]= new Array();
 choices[73][0] = "Los &oacute;rganos competentes podr&aacute;n avocar para s&iacute; el conocimiento de uno o varios asuntos cuya resoluci&oacute;n corresponda ordinariamente o por delegaci&oacute;n a sus &oacute;rganos administrativos dependientes, cuando circunstancias de &iacute;ndole t&eacute;cnica, econ&oacute;mica, social, jur&iacute;dica o territorial lo hagan conveniente.";
 choices[73][1] = "En los supuestos de delegaci&oacute;n de competencias en &oacute;rganos no dependientes jer&aacute;rquicamente, el conocimiento de un asunto podr&aacute; ser avocado &uacute;nicamente por el &oacute;rgano delegante.";
 choices[73][2] = "En todo caso, la avocaci&oacute;n se realizar&aacute; mediante acuerdo motivado que deber&aacute; ser notificado a los interesados en el procedimiento, si los hubiere, con posterioridad a la resoluci&oacute;n final que se dicte.";
 choices[73][3] = "Contra el acuerdo de avocaci&oacute;n no cabr&aacute; recurso, aunque podr&aacute; impugnarse en el que, en su caso, se interponga contra la resoluci&oacute;n del procedimiento.";
 answers[73] = choices[73][2];
 units[73] = "4, 7, 8, 9";
 comments[73] = "Id Pregunta: 837. Ley 40/2015";


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


