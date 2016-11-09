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

//  Id pregunta: 10 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l es la decisi&oacute;n del Consejo de las Comunidades Europeas que fija la pol&iacute;tica comunitaria sobre las compras p&uacute;blicas en el sector de la tecnolog&iacute;a de la informaci&oacute;n y de las comunicaciones?:";
 choices[0]= new Array();
 choices[0][0] = "Decisi&oacute;n 87-95-CEE";
 choices[0][1] = "Decreto 88-91-CEE";
 choices[0][2] = "Decreto 88-90-CEE";
 choices[0][3] = "Decisi&oacute;n 91-88-CEE";
 answers[0] = choices[0][0];
 units[0] = "40";
 comments[0] = "Id Pregunta: 10. ";


//  Id pregunta: 15 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Cu&aacute;l no es un aspecto concreto por el que la tecnolog&iacute;a de la informaci&oacute;n afecta directamente a la competitividad de las empresas?:";
 choices[1]= new Array();
 choices[1][0] = "Alteraci&oacute;n o cambio de las estructuras de las industrias";
 choices[1][1] = "Simplifica las tareas realizar";
 choices[1][2] = "Afecta a los costes y a la diferenciaci&oacute;n estrat&eacute;gica";
 choices[1][3] = "Expande las actividades haciendo que se puedan crear nuevos negocios";
 answers[1] = choices[1][1];
 units[1] = "22";
 comments[1] = "Id Pregunta: 15. ";


//  Id pregunta: 117 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  Dentro de la estructura administrativa de normalizaci&oacute;n comunitaria, el organismo responsable para las telecomunicaciones es:";
 choices[2]= new Array();
 choices[2][0] = "CEN";
 choices[2][1] = "CENELEC";
 choices[2][2] = "ETSI";
 choices[2][3] = "ECMA";
 answers[2] = choices[2][2];
 units[2] = "42";
 comments[2] = "Id Pregunta: 117. ";


//  Id pregunta: 163 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  El siguiente punto de verificaci&oacute;n de WAI (en la norma WCAG 1.0): &quot;Hasta que las aplicaciones de usuario permitan controlarlo, evite provocar parpadeo en la pantalla&quot;, &iquest;a qu&eacute; nivel de prioridad pertenece?:";
 choices[3]= new Array();
 choices[3][0] = "1";
 choices[3][1] = "2";
 choices[3][2] = "3";
 choices[3][3] = "no es ning&uacute;n punto de verificaci&oacute;n contemplado en WAI";
 answers[3] = choices[3][0];
 units[3] = "39";
 comments[3] = "Id Pregunta: 163. ";


//  Id pregunta: 194 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  El An&aacute;lisis Coste-Beneficio es una t&eacute;cnica empleada en el estudio de viabilidad de un nuevo sistema de informaci&oacute;n. &iquest;Cu&aacute;l de las siguientes no es una utilidad del An&aacute;lisis Coste-Beneficio?";
 choices[4]= new Array();
 choices[4][0] = "Valorar la necesidad y oportunidad de acometer la realizaci&oacute;n del proyecto.";
 choices[4][1] = "Calcular el punto de amortizaci&oacute;n del proyecto.";
 choices[4][2] = "Seleccionar la alternativa m&aacute;s beneficiosa.";
 choices[4][3] = "Estimar adecuadamente los recursos econ&oacute;micos necesarios.";
 answers[4] = choices[4][1];
 units[4] = "27";
 comments[4] = "Id Pregunta: 194. Examen TIC MAP B 2004";


//  Id pregunta: 371 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Los gr&aacute;ficos de Gantt son representaciones gr&aacute;ficas en las que en el eje horizontal se representa el tiempo, y en el vertical las diferentes tareas  con el tiempo de inicio, ejecuci&oacute;n y final, y se denominan as&iacute; debido a:";
 choices[5]= new Array();
 choices[5][0] = "Son las siglas de Global Approach Near Tasks Timing, t&eacute;cnica desarrollada por General Electric";
 choices[5][1] = "Procede de su dise&ntilde;ador Henry Laurence Gantt. Ingeniero estadounidense (1861-1919) que lo utiliz&oacute; para la programaci&oacute;n de tareas en la costrucci&oacute;n de buques durante la primera guerra mundial";
 choices[5][2] = "Procede del desarrollo de t&eacute;cnicas del Pent&aacute;gono y se dise&ntilde;&oacute; como subconjunto de los gr&aacute;ficos PERT en el proyecto del misil POLARIS";
 choices[5][3] = "Es un subconjunto de los diagramas utilizados en las t&eacute;cnicas CPM y su nombre procede de la ciudad donde estaba ubicada la base de desarrollo militar donde se utilizaron por primera vez. (Gantt - Nevada)";
 answers[5] = choices[5][1];
 units[5] = "28";
 comments[5] = "Id Pregunta: 371. ";


//  Id pregunta: 376 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Los sistemas de ayuda a la decisi&oacute;n orientados a datos se caracterizan por:";
 choices[6]= new Array();
 choices[6][0] = "Proporcionar un medio f&aacute;cil al usuario para &quot;jugar con los datos&quot;";
 choices[6][1] = "Facilitar el conocimiento estructural del problema que permita el desarrollo de un modelo formal de decisi&oacute;n";
 choices[6][2] = "Presentar al usuario una informaci&oacute;n relacionada para la toma de decisiones";
 choices[6][3] = "Ser m&aacute;s caros que los sistemas de ayuda a la decisi&oacute;n orientados a modelos";
 answers[6] = choices[6][3];
 units[6] = "21";
 comments[6] = "Id Pregunta: 376. ";


//  Id pregunta: 499 AÃ±o de creación de pregunta: 2003-01-01
 questions[7]= "8)  El nivel EAL4 de Criterios Comunes considera el dise&ntilde;o del producto";
 choices[7]= new Array();
 choices[7][0] = "S&iacute;";
 choices[7][1] = "No, es el EAL2 el que lo considera";
 choices[7][2] = "No, es el EAL3 el que lo considera";
 choices[7][3] = "Ninguna de las anteriores respuestas es cierta";
 answers[7] = choices[7][0];
 units[7] = "31,32,33";
 comments[7] = "Id Pregunta: 499. ";


//  Id pregunta: 625 AÃ±o de creación de pregunta: 2006-01-01
 questions[8]= "9)  En el proceso de selecci&oacute;n de alternativas en bienes y servicios de Tecnolog&iacute;as de la Informaci&oacute;n, &iquest;cu&aacute;l de los siguientes m&eacute;todos es el m&aacute;s recomendable a efectos de que no se vean favorecidas en exceso las alternativas que son median&iacute;as? :";
 choices[8]= new Array();
 choices[8][0] = "El m&eacute;todo de la Ponderaci&oacute;n Lineal.";
 choices[8][1] = "Los m&eacute;todos de Relaciones de Superaci&oacute;n.";
 choices[8][2] = "El m&eacute;todo Lexicogr&aacute;fico.";
 choices[8][3] = "El m&eacute;todo de las Utilidades Relativas.";
 answers[8] = choices[8][1];
 units[8] = "34";
 comments[8] = "Id Pregunta: 625. ";


//  Id pregunta: 690 AÃ±o de creación de pregunta: 2009-01-01
 questions[9]= "10)  De acuerdo con la Ley 25/2007 Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, la retenci&oacute;n de datos de tr&aacute;fico relativo a las comunicaciones electr&oacute;nicas es deber de:";
 choices[9]= new Array();
 choices[9][0] = "los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones, en los t&eacute;rminos establecidos en la Ley 32/2003, de 3 de noviembre, General de Telecomunicaciones.";
 choices[9][1] = "los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico, en los t&eacute;rminos establecidos en la Ley 32/2003, de 3 de noviembre, General de Telecomunicaciones.";
 choices[9][2] = "los Operadores de Servicios de comunicaciones electr&oacute;nicas, Los proveedores de Acceso a redes de telecomunicaciones, Los prestadores de servicios de alojamiento de datos";
 choices[9][3] = "las respuestas 'a' y 'b' son correctas";
 answers[9] = choices[9][0];
 units[9] = "30";
 comments[9] = "Id Pregunta: 690. Art&iacute;culo 2 de la ley";


//  Id pregunta: 719 AÃ±o de creación de pregunta: 2004-01-01
 questions[10]= "11)  Para realizar un programa que accede a una base de datos para presentar el resultado de una b&uacute;squeda, se utilizar&aacute;:";
 choices[10]= new Array();
 choices[10][0] = "Sentencias de lectura de los ficheros que componen la base de datos";
 choices[10][1] = "SQL embebido en un lenguaje de programaci&oacute;n";
 choices[10][2] = "SQL din&aacute;mico, ya que es m&aacute;s eficiente que el SQL est&aacute;tico";
 choices[10][3] = "SQL, escrito directamente sobre una sesi&oacute;n de la base de datos";
 answers[10] = choices[10][1];
 units[10] = "58";
 comments[10] = "Id Pregunta: 719. Examen TIC MAP B 2004";


//  Id pregunta: 1165 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Entre las caracter&iacute;sticas de JAVA que se describen a continuaci&oacute;n s&oacute;lo una es cierta. Se&ntilde;&aacute;lela:";
 choices[11]= new Array();
 choices[11][0] = "JAVA es similar a C++ pero m&aacute;s complejo que &eacute;ste";
 choices[11][1] = "La portabilidad de los programas JAVA no requiere recompilar.";
 choices[11][2] = "JAVA es del orden de 10 veces m&aacute;s r&aacute;pido que C++";
 choices[11][3] = "Todas las anteriores son ciertas";
 answers[11] = choices[11][1];
 units[11] = "60";
 comments[11] = "Id Pregunta: 1165. JCED - Preparatic XVII";


//  Id pregunta: 1340 AÃ±o de creación de pregunta: 2009-01-01
 questions[12]= "13)  Se&ntilde;alar cu&aacute;l de las siguientes no es una operaci&oacute;n anal&iacute;tica b&aacute;sica en un sistema OLAP:";
 choices[12]= new Array();
 choices[12][0] = "Actualizaci&oacute;n.";
 choices[12][1] = "Agregaci&oacute;n.";
 choices[12][2] = "Dril-down.";
 choices[12][3] = "Slice-Dice.";
 answers[12] = choices[12][0];
 units[12] = "68";
 comments[12] = "Id Pregunta: 1340. ";


//  Id pregunta: 1553 AÃ±o de creación de pregunta: 2003-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no es propia de un sistema de almacenamiento de datos Data-warehouse?:";
 choices[13]= new Array();
 choices[13][0] = "Almacenamiento de datos hist&oacute;ricos.";
 choices[13][1] = "Alta volatilidad de los datos.";
 choices[13][2] = "Organizaci&oacute;n tem&aacute;tica de los datos.";
 choices[13][3] = "Integraci&oacute;n del formato de los datos.";
 answers[13] = choices[13][1];
 units[13] = "71";
 comments[13] = "Id Pregunta: 1553. Junta Andaluc&iacute;a";


//  Id pregunta: 1789 AÃ±o de creación de pregunta: 2006-01-01
 questions[14]= "15)  Se&ntilde;ale qu&eacute; lenguaje intermedio espec&iacute;fico de representaci&oacute;n de conocimiento se utiliza en el &aacute;rea de inteligencia artificial";
 choices[14]= new Array();
 choices[14][0] = "XML";
 choices[14][1] = "STRIPS";
 choices[14][2] = "KIF";
 choices[14][3] = "EXML";
 answers[14] = choices[14][2];
 units[14] = "63";
 comments[14] = "Id Pregunta: 1789. ";


//  Id pregunta: 1807 AÃ±o de creación de pregunta: 2006-01-01
 questions[15]= "16)  Se&ntilde;ale la opci&oacute;n que enumera tres de las especificaciones m&aacute;s robustas en el sector del e-learning";
 choices[15]= new Array();
 choices[15][0] = "AICC, IMS y SCORM";
 choices[15][1] = "AICC, EL-XML y SCORM";
 choices[15][2] = "ELEARN, FCC y SCORM";
 choices[15][3] = "SCORM, ELEARN y AICC";
 answers[15] = choices[15][0];
 units[15] = "66";
 comments[15] = "Id Pregunta: 1807. ";


//  Id pregunta: 1923 AÃ±o de creación de pregunta: 2006-01-01
 questions[16]= "17)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa sobre el formato JAR?";
 choices[16]= new Array();
 choices[16][0] = "Utiliza el mismo algoritmo de compresi&oacute;n que los archivos .ZIP";
 choices[16][1] = "Es compatible con los sistemas de distribuci&oacute;n autom&aacute;tica";
 choices[16][2] = "Los ficheros con este formato son independientes de la plataforma";
 choices[16][3] = "Un fichero con este formato debe incluir obligatoriamente las firmas digitales de los fichero que contiene";
 answers[16] = choices[16][3];
 units[16] = "60";
 comments[16] = "Id Pregunta: 1923. NULL";


//  Id pregunta: 1928 AÃ±o de creación de pregunta: 2006-01-01
 questions[17]= "18)  En el &aacute;mbito de las tarjetas con chip integrado, &iquest;cu&aacute;l es el apartado de la norma ISO 7816 que recoge las especificaciones el&eacute;ctricas y los protocolos de comunicaci&oacute;n?";
 choices[17]= new Array();
 choices[17][0] = "ISO 7816-1";
 choices[17][1] = "ISO 7816-2";
 choices[17][2] = "ISO 7816-3";
 choices[17][3] = "ISO 7816-4";
 answers[17] = choices[17][2];
 units[17] = "74";
 comments[17] = "Id Pregunta: 1928. NULL";


//  Id pregunta: 2017 AÃ±o de creación de pregunta: 2004-01-01
 questions[18]= "19)  Dentro de la metodolog&iacute;a M&Eacute;TRICA versi&oacute;n 3, &iquest;cu&aacute;l de las siguientes opciones es una extensi&oacute;n del modelo entidad/relaci&oacute;n?";
 choices[18]= new Array();
 choices[18][0] = "Definici&oacute;n de &iacute;ndices";
 choices[18][1] = "Generalizaci&oacute;n";
 choices[18][2] = "Entidades deductivas";
 choices[18][3] = "Entidades hist&oacute;ricas";
 answers[18] = choices[18][1];
 units[18] = "86";
 comments[18] = "Id Pregunta: 2017. Examen TIC MAP B 2004";


//  Id pregunta: 2035 AÃ±o de creación de pregunta: 2004-01-01
 questions[19]= "20)  Cu&aacute;l de los siguientes no es un formato de imagen:";
 choices[19]= new Array();
 choices[19][0] = "gif";
 choices[19][1] = "jp2";
 choices[19][2] = "drw";
 choices[19][3] = "php";
 answers[19] = choices[19][3];
 units[19] = "93";
 comments[19] = "Id Pregunta: 2035. Similar a examen TIC SS A 2003";


//  Id pregunta: 2091 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  DARTS es el acr&oacute;nimo de:";
 choices[20]= new Array();
 choices[20][0] = "Data Redesign for Transactional Systems.";
 choices[20][1] = "Design Aproach for Real Time Systems.";
 choices[20][2] = "Design Aproach for Real Transactional Systems.";
 choices[20][3] = "No es acr&oacute;nimo de nada.";
 answers[20] = choices[20][1];
 units[20] = "83";
 comments[20] = "Id Pregunta: 2091. ";


//  Id pregunta: 2150 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  &iquest;Cu&aacute;l de los siguientes no es un componente de una herramienta CASE integrada?";
 choices[21]= new Array();
 choices[21][0] = "Diccionario de datos.";
 choices[21][1] = "Editor de diagramas.";
 choices[21][2] = "Editor de documentos.";
 choices[21][3] = "Editor de textos.";
 answers[21] = choices[21][3];
 units[21] = "91";
 comments[21] = "Id Pregunta: 2150. ";


//  Id pregunta: 2498 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Se&ntilde;ale el tipo de prueba que es de caja negra:";
 choices[22]= new Array();
 choices[22][0] = "Prueba de bucles";
 choices[22][1] = "Prueba basada en grafos";
 choices[22][2] = "Prueba del camino b&aacute;sico";
 choices[22][3] = "Prueba de condici&oacute;n";
 answers[22] = choices[22][1];
 units[22] = "86";
 comments[22] = "Id Pregunta: 2498. NULL";


//  Id pregunta: 2577 AÃ±o de creación de pregunta: 2003-01-01
 questions[23]= "24)  La planificaci&oacute;n estrat&eacute;gica es";
 choices[23]= new Array();
 choices[23][0] = "un  momento en el tiempo para tomar decisiones";
 choices[23][1] = "una herramienta para anticiparse a los cambios";
 choices[23][2] = "una herramienta que permite que los cambios sean consecuencia de las acciones emprendidas por la organizaci&oacute;n";
 choices[23][3] = "una herramineta que se limita e extrapolar el presente al futuro";
 answers[23] = choices[23][2];
 units[23] = "77";
 comments[23] = "Id Pregunta: 2577. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 2627 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  &iquest;En qu&eacute; diagramas se representan los tipos de elementos nodos y conexiones?";
 choices[24]= new Array();
 choices[24][0] = "Diagrama de despliegue.";
 choices[24][1] = "Diagrama de componentes.";
 choices[24][2] = "Diagrama de descomposici&oacute;n.";
 choices[24][3] = "Diagrama de estructura.";
 answers[24] = choices[24][0];
 units[24] = "82,84";
 comments[24] = "Id Pregunta: 2627. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 3219 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  &iquest;Cu&aacute;l de los siguientes conceptos no aporta seguridad a una intranet?:";
 choices[25]= new Array();
 choices[25][0] = "Spoofing";
 choices[25][1] = "Firewalls";
 choices[25][2] = "NAT";
 choices[25][3] = "Proxy";
 answers[25] = choices[25][0];
 units[25] = "113";
 comments[25] = "Id Pregunta: 3219. ";


//  Id pregunta: 3325 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  A la fuente fundamental de datos de lo que ocurre en un servidor web se le denomina:";
 choices[26]= new Array();
 choices[26][0] = "registro de incidencias";
 choices[26][1] = "fichero de log";
 choices[26][2] = "lista de errores";
 choices[26][3] = "fichero de registros";
 answers[26] = choices[26][1];
 units[26] = "113";
 comments[26] = "Id Pregunta: 3325. ";


//  Id pregunta: 3349 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Cuando hablamos de Frame Relay, &iquest;En qu&eacute; consiste el CIR?:";
 choices[27]= new Array();
 choices[27][0] = "El el tanto por ciento de ocupaci&oacute;n de canal m&aacute;ximo en las horas punta, seg&uacute;n el contrato de calidad de servicio";
 choices[27][1] = "Es la tarifa m&iacute;nima de alquiler de circuito que nos da derecho al envio de un n&uacute;mero de tramas al mes (las tramas en horas valle se ponderan con un factor variable)";
 choices[27][2] = "El la velocidad m&aacute;xima de informaci&oacute;n que el transportista nos asegura en cualquier momento, pudiendo 'tirar a la basura' las que excedan ese valor, si hay saturaci&oacute;n en la red";
 choices[27][3] = "Es el n&uacute;mero m&aacute;ximo de tramas err&oacute;neas (en porcentaje) que el transportista nos asegura en el contrato de nuestra 'Calidad de Servicio'";
 answers[27] = choices[27][2];
 units[27] = "109";
 comments[27] = "Id Pregunta: 3349. ";


//  Id pregunta: 3530 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  En la Red Digital de Servicios Integrados, indique cu&aacute;l de las siguientes afirmaciones no es correcta:";
 choices[28]= new Array();
 choices[28][0] = "Existen definidos 2 tipos de acceso: b&aacute;sico y primario";
 choices[28][1] = "El acceso primario est&aacute; constituido por 30 canales B de 64 kbps y 1 canal D de 16 kbps";
 choices[28][2] = "Es posible la conexi&oacute;n a la RDSI a trav&eacute;s de un modem m&aacute;s un adaptador anal&oacute;gico-digital";
 choices[28][3] = "Proporciona conexiones digitales extremo a extremo";
 answers[28] = choices[28][1];
 units[28] = "103";
 comments[28] = "Id Pregunta: 3530. ";


//  Id pregunta: 4182 AÃ±o de creación de pregunta: 2006-01-01
 questions[29]= "30)  Los puntos de conexi&oacute;n de telefon&iacute;a a implantar en una nueva instalaci&oacute;n ser&aacute;n normalmente de tipo";
 choices[29]= new Array();
 choices[29][0] = "RJ11 de 6 contactos";
 choices[29][1] = "RJ45 de 6 contactos";
 choices[29][2] = "RJ45 de 8 contactos";
 choices[29][3] = "RJ49 para cables STP";
 answers[29] = choices[29][2];
 units[29] = "99";
 comments[29] = "Id Pregunta: 4182. ";


//  Id pregunta: 4387 AÃ±o de creación de pregunta: 2007-01-01
 questions[30]= "31)  &iquest;Cu&aacute;l de los siguientes no es un factor de calidad, seg&uacute;n el modelo de McCall?";
 choices[30]= new Array();
 choices[30][0] = "Integridad.";
 choices[30][1] = "Completitud.";
 choices[30][2] = "Fiabilidad.";
 choices[30][3] = "Facilidad de mantenimiento.";
 answers[30] = choices[30][1];
 units[30] = "88";
 comments[30] = "Id Pregunta: 4387. NULL";


//  Id pregunta: 4639 AÃ±o de creación de pregunta: 2007-01-01
 questions[31]= "32)  Quien NO es un participante en la actividad An&aacute;lisis de Consistencia y Especificaci&oacute;n de Requisitos del proceso de An&aacute;lisis de Sistemas de Informaci&oacute;n";
 choices[31]= new Array();
 choices[31][0] = "usuarios expertos";
 choices[31][1] = "Analistas";
 choices[31][2] = "jefe de proyecto";
 choices[31][3] = "equipo de arquitectura";
 answers[31] = choices[31][2];
 units[31] = "86";
 comments[31] = "Id Pregunta: 4639. NULL";


//  Id pregunta: 4727 AÃ±o de creación de pregunta: 2007-01-01
 questions[32]= "33)  Los resultados del modelo EFQM se eval&uacute;an:";
 choices[32]= new Array();
 choices[32][0] = "Respecto a los clientes";
 choices[32][1] = "Respecto a la sociedad";
 choices[32][2] = "Respecto al personal de la empresa";
 choices[32][3] = "Todas las respuestas son correctas";
 answers[32] = choices[32][3];
 units[32] = "92";
 comments[32] = "Id Pregunta: 4727. Examen 2006 JCYL";


//  Id pregunta: 4793 AÃ±o de creación de pregunta: 2007-01-01
 questions[33]= "34)  Dada una jerarqu&iacute;a total con solapamiento en el modelo E/R (Entidad / Relaci&oacute;n), &iquest;cu&aacute;l de las siguientesafirmaciones es cierta?";
 choices[33]= new Array();
 choices[33][0] = "No es necesario que toda ocurrencia del supertipo se encuentre en alguno de los subtipos";
 choices[33][1] = "Cuando se borra una ocurrencia de un subtipo hay que borrarla tambi&eacute;n del supertipo";
 choices[33][2] = "Cuando se borra una ocurrencia de un subtipo se borra del supertipo si s&oacute;lo pertenece a ese subtipo";
 choices[33][3] = "Si se borra una ocurrencia del supertipo no siempre hay que eliminarla de los subtipos a los que pertenece";
 answers[33] = choices[33][2];
 units[33] = "80";
 comments[33] = "Id Pregunta: 4793. ";


//  Id pregunta: 4839 AÃ±o de creación de pregunta: 2007-01-01
 questions[34]= "35)  En relaci&oacute;n con las licencias de software libre, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[34]= new Array();
 choices[34][0] = "La licencia GPL (General Public License) de software libre obliga a publicar las modificaciones realizadassobre el software";
 choices[34][1] = "En un producto distribuido bajo licencia GPL es obligatorio incluir un fichero que contenga &uacute;nicamente lost&eacute;rminos concretos de la licencia y un aviso de que los derechos de copia son establecidos por el autor delproducto";
 choices[34][2] = "La licencia LGPL (Lesser General Public License) permite la inclusi&oacute;n del software que ampara enprogramas distribuidos bajo licencia no GPL";
 choices[34][3] = "La licencia LGPL no es compatible con la definici&oacute;n del software distribuido bajo el tipo licencia &quot;Copyleft&quot;";
 answers[34] = choices[34][2];
 units[34] = "61";
 comments[34] = "Id Pregunta: 4839. ";


//  Id pregunta: 4969 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  &iquest;Cu&aacute;l de las siguientes redes no admite asignar niveles de prioridad en el tr&aacute;fico transmitido?:";
 choices[35]= new Array();
 choices[35][0] = "802.6.";
 choices[35][1] = "802.3.";
 choices[35][2] = "802.4.";
 choices[35][3] = "802.5.";
 answers[35] = choices[35][1];
 units[35] = "101";
 comments[35] = "Id Pregunta: 4969. Examen TIC B 2007";


//  Id pregunta: 5506 AÃ±o de creación de pregunta: 2003-01-01
 questions[36]= "37)  La sindicaci&oacute;n de contenidos web:";
 choices[36]= new Array();
 choices[36][0] = "Se emplea el lenguaje RSS (Really Simple Sindication)";
 choices[36][1] = "Actualmente se emplea el estandar Atom 1.0";
 choices[36][2] = "Permite recuperar contenido de un sitio web y publicarlo en otro";
 choices[36][3] = "Todas son correctas";
 answers[36] = choices[36][3];
 units[36] = "69";
 comments[36] = "Id Pregunta: 5506. NULL";


//  Id pregunta: 5572 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  &iquest;C&uacute;al de los siguientes protocolos de encaminamiento NO es interno?";
 choices[37]= new Array();
 choices[37][0] = "BGP";
 choices[37][1] = "EIGRP";
 choices[37][2] = "OSPF";
 choices[37][3] = "IGRP";
 answers[37] = choices[37][0];
 units[37] = "102";
 comments[37] = "Id Pregunta: 5572. ";


//  Id pregunta: 5747 AÃ±o de creación de pregunta: 2009-01-01
 questions[38]= "39)  &iquest;Cu&aacute;l es la longitud del resumen de la funci&oacute;n SHA-1?";
 choices[38]= new Array();
 choices[38][0] = "64 bits";
 choices[38][1] = "128 bits";
 choices[38][2] = "160 bits";
 choices[38][3] = "224 bits";
 answers[38] = choices[38][2];
 units[38] = "72";
 comments[38] = "Id Pregunta: 5747. ";


//  Id pregunta: 5781 AÃ±o de creación de pregunta: 2009-01-01
 questions[39]= "40)  Se&ntilde;ale cu&aacute;l de los siguientes objetos forma parte de los componentes proveedores de datos .NET Framework de ADO.NET";
 choices[39]= new Array();
 choices[39][0] = "DataSet";
 choices[39][1] = "DataTable";
 choices[39][2] = "DataAdapter";
 choices[39][3] = "RecordSet";
 answers[39] = choices[39][2];
 units[39] = "59";
 comments[39] = "Id Pregunta: 5781. MAP 2008 A2";


//  Id pregunta: 5785 AÃ±o de creación de pregunta: 2009-01-01
 questions[40]= "41)  &iquest;De acuerdo al est&aacute;ndar, cu&aacute;l es el ancho de banda que podr&aacute; obtener un usuario de una red UMTS R99 si se est&aacute; desplazando en un veh&iacute;culo a 40 km/h en un entorno urbano?";
 choices[40]= new Array();
 choices[40][0] = "2 Mbps independientemente de la situaci&oacute;n del usuario";
 choices[40][1] = "100 kbps";
 choices[40][2] = "144 Kbps";
 choices[40][3] = "384 kbps";
 answers[40] = choices[40][3];
 units[40] = "108";
 comments[40] = "Id Pregunta: 5785. ";


//  Id pregunta: 5830 AÃ±o de creación de pregunta: 2009-01-01
 questions[41]= "42)  Se&ntilde;ale la afirmaci&oacute;n incorrecta respecto a la licencia EUPL.";
 choices[41]= new Array();
 choices[41][0] = "Con estte tipo de licencia las administraciones pueden ser proveedoras de software open source ente ellas, reutilizando lo que otros han hecho y mejor&aacute;ndolo.";
 choices[41][1] = "Es equivalente a las licencias GNU GPL y se pueden usar indistintamente, s&oacute;lo que EUPL aplica &uacute;nicamente en europa.";
 choices[41][2] = "Una de las novedades que introduce es la variedad de idiomas en los que est&aacute; disponible.";
 choices[41][3] = "Es una licencia compatible con otras licencias copyleft";
 answers[41] = choices[41][1];
 units[41] = "36,37";
 comments[41] = "Id Pregunta: 5830. ";


//  Id pregunta: 5884 AÃ±o de creación de pregunta: 2009-01-01
 questions[42]= "43)  En relaci&oacute;n a &quot;Internet Assigned Numbers Authority&quot; (IANA), indique cu&aacute;l NO es una de sus funciones:";
 choices[42]= new Array();
 choices[42][0] = "IANA coordina a nivel global el &quot;DNS root&quot;";
 choices[42][1] = "IANA gestiona el dominio .int (top-level)";
 choices[42][2] = "IANA asigna las direcciones IP";
 choices[42][3] = "IANA administra el dominio .ARPA en estrecha relaci&oacute;n con el Internet Architecture Board";
 answers[42] = choices[42][2];
 units[42] = "112";
 comments[42] = "Id Pregunta: 5884. MAP 2008 A1";


//  Id pregunta: 5942 AÃ±o de creación de pregunta: 2009-01-01
 questions[43]= "44)  Respecto a productos de virtualizaci&oacute;n, se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[43]= new Array();
 choices[43][0] = "Virtual Box es una soluci&oacute;n de virtualizaci&oacute;n de Oracle";
 choices[43][1] = "Hyper-V es una soluci&oacute;n de virtualizaci&oacute;n de Microsoft";
 choices[43][2] = "La distribuci&oacute;n de GNU/Linux Red Hat mantiene una infraestructura de virtualizaci&oacute;n para el kernel de Linux";
 choices[43][3] = "VMWare Player es una soluci&oacute;n de virtualizaci&oacute;n de escritorio gratuita y de fuentes abiertas de VMWare";
 answers[43] = choices[43][3];
 units[43] = "119";
 comments[43] = "Id Pregunta: 5942. ";


//  Id pregunta: 6058 AÃ±o de creación de pregunta: 2010-01-01
 questions[44]= "45)  Qu&eacute; asociaci&oacute;n entre organismos internacionales y europeos es la correcta?";
 choices[44]= new Array();
 choices[44][0] = "IEC-CENELEC, UIT-ETSI, ISO-CEN.";
 choices[44][1] = "IEC-CEN, ISO-CENELEC, ITU-ETSI.";
 choices[44][2] = "ISO-CEN, IEEE-IEC, ETSI-CENELEC.";
 choices[44][3] = "IEC-CENELEC, IEEE-ETSI, ISO-CEN.";
 answers[44] = choices[44][0];
 units[44] = "42";
 comments[44] = "Id Pregunta: 6058. TIC A 2009";


//  Id pregunta: 6066 AÃ±o de creación de pregunta: 2010-01-01
 questions[45]= "46)  Cuando un sistema en una red local env&iacute;a un datagrama IP a otro sistema en una subred distinta, utiliza el protocolo ARP para obtener:";
 choices[45]= new Array();
 choices[45][0] = "La direcci&oacute;n MAC del sistema final destino.";
 choices[45][1] = "La direcci&oacute;n IP del sistema final destino.";
 choices[45][2] = "La identificaci&oacute;n del puerto TCP o UDP del sistema final destino.";
 choices[45][3] = "La direcci&oacute;n MAC del router.";
 answers[45] = choices[45][3];
 units[45] = "100";
 comments[45] = "Id Pregunta: 6066. TIC A 2009";


//  Id pregunta: 6082 AÃ±o de creación de pregunta: 2010-01-01
 questions[46]= "47)  Cu&aacute;l de los siguientes NO es un principio arquitect&oacute;nico b&aacute;sico intr&iacute;nsicamente aplicable a arquitecturas SOA:";
 choices[46]= new Array();
 choices[46][0] = "Encapsulaci&oacute;n";
 choices[46][1] = "D&eacute;bil acoplamiento";
 choices[46][2] = "Composici&oacute;n";
 choices[46][3] = "Polimorfismo";
 answers[46] = choices[46][3];
 units[46] = "51";
 comments[46] = "Id Pregunta: 6082. NULL";


//  Id pregunta: 6164 AÃ±o de creación de pregunta: 2010-01-01
 questions[47]= "48)  Se&ntilde;ale la informaci&oacute;n falsa:";
 choices[47]= new Array();
 choices[47][0] = "La telepresencia es la evoluci&oacute;n de los servicios de videoconferencia que se acerca hacia la realidad virtual.";
 choices[47][1] = "En una sesi&oacute;n de videoconferencia es posible incorporar herramientas de colaboraci&oacute;n.";
 choices[47][2] = "En soluciones de videoconferencia accesibles desde el exterior es posible tunelizar las comunicaciones por el puerto http o de lo contrario tener en cuenta las consideraciones con los Firewall.";
 choices[47][3] = "Todas las anteriores son correctas.";
 answers[47] = choices[47][3];
 units[47] = "117";
 comments[47] = "Id Pregunta: 6164. ";


//  Id pregunta: 6279 AÃ±o de creación de pregunta: 2010-01-01
 questions[48]= "49)  No es una dificultad del modelo de ciclo de vida en espiral:";
 choices[48]= new Array();
 choices[48][0] = "Dificultad a la hora de definir requisitos";
 choices[48][1] = "Dependencia de la experiencia en la evaluaci&oacute;n de riesgos";
 choices[48][2] = "Necesidad de elaboraci&oacute;n adicional de los pasos del modelo en espiral";
 choices[48][3] = "Adaptar su aplicabilidad al software contratado";
 answers[48] = choices[48][0];
 units[48] = "76";
 comments[48] = "Id Pregunta: 6279. ";


//  Id pregunta: 6292 AÃ±o de creación de pregunta: 2010-01-01
 questions[49]= "50)  El problema de volatilidad a la hora de la obtenci&oacute;n de requisitos en el an&aacute;lisis de un Sistema de Informaci&oacute;n y Comunicaciones se refiere a:";
 choices[49]= new Array();
 choices[49][0] = "Los requisitos son el resultado de integrar informaci&oacute;n de m&uacute;ltiples fuentes, algunas con intereses contrapuestos";
 choices[49][1] = "La complejidad de la organizaci&oacute;n puede hacer que a lo largo del proyecto se cambien objetivos, pol&iacute;ticas, legislaci&oacute;n, etc";
 choices[49][2] = "Las necesidades del usuario cambian";
 choices[49][3] = "Todas las anteriores";
 answers[49] = choices[49][3];
 units[49] = "78";
 comments[49] = "Id Pregunta: 6292. ";


//  Id pregunta: 6324 AÃ±o de creación de pregunta: 2010-01-01
 questions[50]= "51)  La cl&aacute;usula INSERT para inserci&oacute;n de datos";
 choices[50]= new Array();
 choices[50][0] = "Tan s&oacute;lo permite la inserci&oacute;n de una tupla cada vez.";
 choices[50][1] = "Puede permitir la inserci&oacute;n de m&aacute;s de una tupla al mismo tiempo.";
 choices[50][2] = "No permite insertar valores nulos.";
 choices[50][3] = "Obliga a que la inserci&oacute;n de los valores sea en el orden en que se cre&oacute; la tabla.";
 answers[50] = choices[50][1];
 units[50] = "58";
 comments[50] = "Id Pregunta: 6324. ";


//  Id pregunta: 6371 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)  En el Esquema Nacional de Seguridad, las dimensiones de seguridad se adscribir&aacute;n a uno de los siguientes niveles:";
 choices[51]= new Array();
 choices[51][0] = "Bajo, Medio o Alto";
 choices[51][1] = "Limitado, Grave o Muy Grave";
 choices[51][2] = "B&aacute;sico, Medio o Alto";
 choices[51][3] = "B&aacute;sico, Medio, Alto o Muy Alto";
 answers[51] = choices[51][0];
 units[51] = "43";
 comments[51] = "Id Pregunta: 6371. Anexo I ENS. Y las categor&iacute;as pueden ser b&aacute;sica, media o alta.";


//  Id pregunta: 6488 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de las siguientes es una herramienta IDS?";
 choices[52]= new Array();
 choices[52][0] = "Nessus";
 choices[52][1] = "Snort";
 choices[52][2] = "Nagios";
 choices[52][3] = "NetSaint";
 answers[52] = choices[52][1];
 units[52] = "111";
 comments[52] = "Id Pregunta: 6488. Castilla La Mancha 2009";


//  Id pregunta: 6586 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  Los ficheros de los operadores de comunicaciones electr&oacute;nicas, respecto de los datos de tr&aacute;fico y localizaci&oacute;n, de acuerdo a la normativa vigente de protecci&oacute;n de datos deben aplicar:";
 choices[53]= new Array();
 choices[53][0] = "S&oacute;lo medidas de seguridad de nivel medio";
 choices[53][1] = "S&oacute;lo medidas de seguridad de nivel medio y b&aacute;sico";
 choices[53][2] = "Medidas de seguridad de nivel b&aacute;sico, medio y deben disponer de un registro de accesos";
 choices[53][3] = "Todas las respuestas anteriores son incorrectas";
 answers[53] = choices[53][2];
 units[53] = "29";
 comments[53] = "Id Pregunta: 6586. NULL";


//  Id pregunta: 6610 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  En un DFD, entre 2 procesos existir&aacute; un almac&eacute;n de datos cuando:";
 choices[54]= new Array();
 choices[54][0] = "La comunicaci&oacute;n entre ellos sea s&iacute;ncrona";
 choices[54][1] = "La comunicaci&oacute;n entre ellos sea as&iacute;ncrona";
 choices[54][2] = "Existir&aacute; siempre que haya comunicaci&oacute;n entre los procesos";
 choices[54][3] = "Es el analista el que decide si tiene que existir o no el almac&eacute;n de datos";
 answers[54] = choices[54][1];
 units[54] = "81";
 comments[54] = "Id Pregunta: 6610. NULL";


//  Id pregunta: 6617 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[55]= new Array();
 choices[55][0] = "Las Pruebas de Aceptaci&oacute;n se definen en ASI y se ejecutan en CSI";
 choices[55][1] = "Las Pruebas de Implantaci&oacute;n se definen en DSI y se ejecutan en IAS";
 choices[55][2] = "Las Pruebas de Implantaci&oacute;n se definen en ASI y se ejecutan en CSI";
 choices[55][3] = "Las Pruebas de Aceptaci&oacute;n se definen en DSI y se ejecutan en IAS";
 answers[55] = choices[55][1];
 units[55] = "86";
 comments[55] = "Id Pregunta: 6617. NULL";


//  Id pregunta: 6630 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  El modelo CMM de Ingenier&iacute;a de Software tiene:";
 choices[56]= new Array();
 choices[56][0] = "5 niveles de Capacidad y 6 niveles de Madurez";
 choices[56][1] = "5 niveles de Capacidad y 5 niveles de Madurez";
 choices[56][2] = "6 niveles de Capacidad y 5 niveles de Madurez";
 choices[56][3] = "6 niveles de Capacidad y 6 niveles de Madurez";
 answers[56] = choices[56][2];
 units[56] = "87";
 comments[56] = "Id Pregunta: 6630. NULL";


//  Id pregunta: 7151 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  En la guerra de formatos sucesores del DVD, se ha impuesto el Blue-Ray, &iquest;cu&aacute;l es su capacidad de almacenamiento?";
 choices[57]= new Array();
 choices[57][0] = "40 GB para discos de una capa y 85 GB para discos de dos capas";
 choices[57][1] = "20 GB para discos de una capa y 100 GB para discos multicapas";
 choices[57][2] = "25 GB para discos de una capa y 50 GB para discos de dos capas";
 choices[57][3] = "30 GB para discos de una capa y 60 GB para discos de dos capas";
 answers[57] = choices[57][2];
 units[57] = "48";
 comments[57] = "Id Pregunta: 7151. Examen TIC B 2009";


//  Id pregunta: 7304 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  El est&aacute;ndar AURORA de reconocimiento del habla distribuido es un est&aacute;ndar de:";
 choices[58]= new Array();
 choices[58][0] = "ETSI";
 choices[58][1] = "IEEE";
 choices[58][2] = "NIST";
 choices[58][3] = "ANSI";
 answers[58] = choices[58][0];
 units[58] = "94";
 comments[58] = "Id Pregunta: 7304. NULL";


//  Id pregunta: 8180 AÃ±o de creación de pregunta: 2011-01-01
 questions[59]= "60)  El manifiesto por un desarrollo de software &aacute;gil (Manifesto for Agile Software Development) da m&aacute;s valor a:";
 choices[59]= new Array();
 choices[59][0] = "Los individuos y sus interacciones que a los procesos y herramientas.";
 choices[59][1] = "Una documentaci&oacute;n completa que a software que funcione.";
 choices[59][2] = "La negociaci&oacute;n contractual que a la colaboraci&oacute;n con los usuarios.";
 choices[59][3] = "Seguir una planificaci&oacute;n que a adaptarse al cambio.";
 answers[59] = choices[59][0];
 units[59] = "79";
 comments[59] = "Id Pregunta: 8180. Examen TIC A1 2010";


//  Id pregunta: 8328 AÃ±o de creación de pregunta: 2011-01-01
 questions[60]= "61)  La tecnologia IDSL (ISDN Digital Subscriber Line):";
 choices[60]= new Array();
 choices[60][0] = "Se utiliza para transportar voz y datos";
 choices[60][1] = "Es asim&eacute;trica";
 choices[60][2] = "Utiliza 3 pares de hilos";
 choices[60][3] = "Alcanza una distancia m&aacute;xima de 5,5 Km.";
 answers[60] = choices[60][3];
 units[60] = "109";
 comments[60] = "Id Pregunta: 8328. Analista Ayto. Madrid 2010";


//  Id pregunta: 8428 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de las siguientes normas del IEEE se utiliza para el control de acceso a red basada en puertos?";
 choices[61]= new Array();
 choices[61][0] = "802.1x";
 choices[61][1] = "802.3.ay";
 choices[61][2] = "802.11";
 choices[61][3] = "802.3.q";
 answers[61] = choices[61][0];
 units[61] = "101";
 comments[61] = "Id Pregunta: 8428. ";


//  Id pregunta: 8454 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  El est&aacute;ndar de la red X.25 especifica las siguientes capas de protocolos:";
 choices[62]= new Array();
 choices[62][0] = "Capa F&iacute;sica, de enlace y de paquete";
 choices[62][1] = "Capa F&iacute;sica, de enlace y de sesi&oacute;n";
 choices[62][2] = "Capa de transporte, de sesi&oacute;n y de presentaci&oacute;n";
 choices[62][3] = "Capa f&iacute;sica, de transporte y de presentaci&oacute;n";
 answers[62] = choices[62][0];
 units[62] = "103";
 comments[62] = "Id Pregunta: 8454. Analista Ayto. Madrid 2010";


//  Id pregunta: 8486 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  Los centros de proceso de datos o datacenters deben cumplir una serie de caracter&iacute;sticas de seguridad f&iacute;sica, &iquest;cu&aacute;l de las siguientes NO es una buena pol&iacute;tica de seguridad?";
 choices[63]= new Array();
 choices[63][0] = "Debe disponer de puertas de acceso grandes.";
 choices[63][1] = "Debe estar expl&iacute;citamente se&ntilde;alizado.";
 choices[63][2] = "Debe evitar tener ventanas.";
 choices[63][3] = "Dispondr&aacute; de un sistema de refrigeraci&oacute;n";
 answers[63] = choices[63][1];
 units[63] = "32,33";
 comments[63] = "Id Pregunta: 8486. Examen TIC A2 2010 interna";


//  Id pregunta: 8504 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  &iquest;Cu&aacute;l de los siguientes NO es un campo de control en el segmento TCP? ";
 choices[64]= new Array();
 choices[64][0] = "URG";
 choices[64][1] = "PSH";
 choices[64][2] = "END";
 choices[64][3] = "ACK";
 answers[64] = choices[64][2];
 units[64] = "100";
 comments[64] = "Id Pregunta: 8504. Examen TIC A2 2010";


//  Id pregunta: 8728 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  El acr&oacute;nimo FCAPS en gesti&oacute;n de redes se refiere a:";
 choices[65]= new Array();
 choices[65][0] = "Failure, Configuration, Accountability, Performance, Software, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, configuraci&oacute;n, contabilidad, rendimiento y software de red.";
 choices[65][1] = "Failure, Compatibility, Accountability, Performance, Security, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, compatibilidad, contabilidad, rendimiento y seguridad.";
 choices[65][2] = "Failure, Configuration, Adaptability, Performance, Security, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, configuraci&oacute;n, adaptabilidad, rendimiento y seguridad.";
 choices[65][3] = "Failure, Configuration, Accountability, Performance, Security, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, configuraci&oacute;n, contabilidad, rendimiento y seguridad.";
 answers[65] = choices[65][3];
 units[65] = "104";
 comments[65] = "Id Pregunta: 8728. Examen UPM A2 2011";


//  Id pregunta: 8756 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  &iquest;Cu&aacute;l de los siguientes NO es un sistema operativo para dispositivos m&oacute;viles?";
 choices[66]= new Array();
 choices[66][0] = "Android.";
 choices[66][1] = " SymbianOS.";
 choices[66][2] = "HTC Mobile.";
 choices[66][3] = "RIM BlackBerry.";
 answers[66] = choices[66][2];
 units[66] = "52";
 comments[66] = "Id Pregunta: 8756. Examen TIC A2 2010 interna";


//  Id pregunta: 8763 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  En el contexto de los lenguajes de programaci&oacute;n orientados a objetos, cuando un objeto recibe de otro objeto o aplicaci&oacute;n una notificaci&oacute;n, ha recibido un:";
 choices[67]= new Array();
 choices[67][0] = "Evento.";
 choices[67][1] = "Comando.";
 choices[67][2] = "Protocolo.";
 choices[67][3] = "Orden.";
 answers[67] = choices[67][0];
 units[67] = "82, 84";
 comments[67] = "Id Pregunta: 8763. Examen TIC A2 2010 interna";


//  Id pregunta: 8777 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  La solicitud de certificaci&oacute;n de una clave p&uacute;blica remitida a la autoridad de certificaci&oacute;n correspondiente deber&aacute; ser generada en formato:";
 choices[68]= new Array();
 choices[68][0] = "PKCS#10";
 choices[68][1] = "PKCS#12";
 choices[68][2] = "X.500";
 choices[68][3] = "X.509";
 answers[68] = choices[68][0];
 units[68] = "74";
 comments[68] = "Id Pregunta: 8777. Examen UPM A2 2011";


//  Id pregunta: 8809 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  La clase XPathNavigator de la biblioteca de clases de .NET, &iquest;para qu&eacute; sirve?:";
 choices[69]= new Array();
 choices[69][0] = "Para leer datos de cualquier almac&eacute;n de datos mediante un modelo de cursor";
 choices[69][1] = "Para proporcionar un iterador para un conjunto de nodos seleccionados";
 choices[69][2] = "Para encapsular una expresi&oacute;n XPath compilada";
 choices[69][3] = "Todas las anteriores son falsas";
 answers[69] = choices[69][0];
 units[69] = "59, 115";
 comments[69] = "Id Pregunta: 8809. Examen UPM A2 2011";


//  Id pregunta: 8863 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  Seg&uacute;n M&eacute;trica v.3, la desnormalizaci&oacute;n controlada del modelo f&iacute;sico de datos se aplica para:";
 choices[70]= new Array();
 choices[70][0] = "Reducir o simplificar el n&uacute;mero de accesos a la base de datos";
 choices[70][1] = "Proporcionar flexibilidad al modelo";
 choices[70][2] = "Hacer m&aacute;s r&aacute;pidas las actualizaciones";
 choices[70][3] = "Proporcionar independencia del sistema gestor de base de datos";
 answers[70] = choices[70][0];
 units[70] = "86";
 comments[70] = "Id Pregunta: 8863. Analista Ayto. Madrid 2010";


//  Id pregunta: 8896 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  &iquest;Qu&eacute; grupos de operaciones est&aacute;n definidas en el modelo funcional de LDAP?";
 choices[71]= new Array();
 choices[71][0] = "De consulta, de actualizaci&oacute;n y de b&uacute;squeda";
 choices[71][1] = "De b&uacute;squeda, de actualizaci&oacute;n y de control";
 choices[71][2] = "De consulta, de actualizaci&oacute;n y de autenticaci&oacute;n y control";
 choices[71][3] = "De comparaci&oacute;n, de consulta y de b&uacute;squeda";
 answers[71] = choices[71][1];
 units[71] = "74";
 comments[71] = "Id Pregunta: 8896. NULL";


//  Id pregunta: 8985 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  En el contexto de web services &iquest;Qu&eacute; quiere decir OASIS?";
 choices[72]= new Array();
 choices[72][0] = "Organization for the Advancement of Structured Information Services";
 choices[72][1] = "Organization for the Advancement of Service Integration Standards";
 choices[72][2] = "Organization for the Advancement of Structured Information Standards";
 choices[72][3] = "Organization for the Application of Structured Information Standards";
 answers[72] = choices[72][2];
 units[72] = "51, 69";
 comments[72] = "Id Pregunta: 8985. NULL";


//  Id pregunta: 8986 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes es una recomendaci&oacute;n del formato Facturae";
 choices[73]= new Array();
 choices[73][0] = "Formato de firma XMLDSig ENVELOPED";
 choices[73][1] = "Algoritmo de canonicalizaci&oacute;n C14N";
 choices[73][2] = "Algoritmo de firma RSA sobre SHA1";
 choices[73][3] = "Todas las anteriores";
 answers[73] = choices[73][3];
 units[73] = "70";
 comments[73] = "Id Pregunta: 8986. NULL";


//  Id pregunta: 9017 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  En un sistema de transmisi&oacute;n digital &hellip;";
 choices[74]= new Array();
 choices[74][0] = "El ruido es acumulativo.";
 choices[74][1] = "Cada repetidor puede regenerar la se&ntilde;al.";
 choices[74][2] = "No tiene influencia el ruido.";
 choices[74][3] = "Ninguna de las anteriores";
 answers[74] = choices[74][1];
 units[74] = "99";
 comments[74] = "Id Pregunta: 9017. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9057 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  &iquest;Cual de las siguientes NO es una herramienta de revisi&oacute;n de la usabilidad ?";
 choices[75]= new Array();
 choices[75][0] = "ACCWarning";
 choices[75][1] = "A-PRompt";
 choices[75][2] = "HiCaption";
 choices[75][3] = "MAGPie";
 answers[75] = choices[75][0];
 units[75] = "39";
 comments[75] = "Id Pregunta: 9057. NULL";


//  Id pregunta: 9097 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  &iquest;Cu&aacute;ntas copias de seguridad de un programa de ordenador se pueden realizar seg&uacute;n la legislaci&oacute;n vigente en materia de propiedad intelectual?";
 choices[76]= new Array();
 choices[76][0] = "No se pueden realizar copias de seguridad.";
 choices[76][1] = "La ley premite siempre la realizaci&oacute;n de una copia de seguridad.";
 choices[76][2] = "Una copia de seguridad, siempre que el titular no se oponga expresamente.";
 choices[76][3] = "Una copia de seguridad, pero lo tiene que autorizar expresamente el titular.";
 answers[76] = choices[76][1];
 units[76] = "36";
 comments[76] = "Id Pregunta: 9097. ";


//  Id pregunta: 9124 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  &iquest;Cu&aacute;les son aplicaciones generales para la computaci&oacute;n GRID?";
 choices[77]= new Array();
 choices[77][0] = "S&uacute;per computaci&oacute;n distribuida.";
 choices[77][1] = "Sistemas distribuidos en tiempo real";
 choices[77][2] = "Entornos virtuales de colaboraci&oacute;n (Tele-inmersi&oacute;n)";
 choices[77][3] = "Todas las respuetas anteriores son v&aacute;lidas";
 answers[77] = choices[77][3];
 units[77] = "45";
 comments[77] = "Id Pregunta: 9124. ";


//  Id pregunta: 9214 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  &iquest;C&oacute;mo es SAN iSCSI respecto a FC?";
 choices[78]= new Array();
 choices[78][0] = "A nivel funcional pueden ofrecer las mismas capacidades pero es m&aacute;s cara.";
 choices[78][1] = "Igual";
 choices[78][2] = "A nivel funcional pueden ofrecer las mismas capacidades pero es m&aacute;s barata";
 choices[78][3] = "SCSI se utiliza en tecnolog&iacute;as NAS y no en SAN.";
 answers[78] = choices[78][2];
 units[78] = "48";
 comments[78] = "Id Pregunta: 9214. ";


//  Id pregunta: 9238 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  &iquest;Qu&eacute; caracter&iacute;sticas tiene shorewall?";
 choices[79]= new Array();
 choices[79][0] = "Es una herramienta de configuraci&oacute;n de gateway/firewall para GNU/Linux";
 choices[79][1] = "Se publicita como &ldquo;iptables f&aacute;cil&rdquo;";
 choices[79][2] = "Si se quiere configurar el firewall para Ipv6 se debe instalar shorewall6.";
 choices[79][3] = "Todas las anteriores son correctas.";
 answers[79] = choices[79][3];
 units[79] = "53";
 comments[79] = "Id Pregunta: 9238. ";


//  Id pregunta: 9335 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  &iquest;C&oacute;mo se denomina al subsistema de cableado estructurado que interconecta los armarios de planta de un edificio?";
 choices[80]= new Array();
 choices[80][0] = "Subsistema campus";
 choices[80][1] = "Subsistema horizontal";
 choices[80][2] = "Subsistema intermodal";
 choices[80][3] = "Subsistema troncal";
 answers[80] = choices[80][3];
 units[80] = "99";
 comments[80] = "Id Pregunta: 9335. TIC a2 AGE 2011";


//  Id pregunta: 9361 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  De entre los diferentes tipos de CSMA (Carrier Sense Multiple Access), se puede afirmar:";
 choices[81]= new Array();
 choices[81][0] = "En CSMA 1-persistente, si el medio est&aacute; libre, el emisor transmite, si no, espera un tiempo aleatorio.";
 choices[81][1] = "En CSMA p-Persistente, el emisor escucha el canal y transmite tan pronto como &eacute;ste est&eacute; libre.";
 choices[81][2] = "En CSMA no-persistente, si el emisor tiene el canal libre, transmite con probabilidad &quot;p&quot; y si detecta que existe alguien transmitiendo, espera un tiempo aleatorio con probabilidad &quot;q=(1-p)&quot;";
 choices[81][3] = "En CSMA 1-persistente, el emisor escucha el canal y transmite tan pronto como &eacute;ste est&eacute; libre ";
 answers[81] = choices[81][3];
 units[81] = "101";
 comments[81] = "Id Pregunta: 9361. pag. 7 ASTIC 2011";


//  Id pregunta: 9654 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  El framework de JAVA para desarrollo web se llama:";
 choices[82]= new Array();
 choices[82][0] = "Maverick";
 choices[82][1] = "Mavericks";
 choices[82][2] = "Cocoa";
 choices[82][3] = "Kit Kat";
 answers[82] = choices[82][0];
 units[82] = "116";
 comments[82] = "Id Pregunta: 9654. Mavericks es el sistema operativo OS X de Apple";


//  Id pregunta: 9732 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Se&ntilde;ale la opci&oacute;n INCORRECTA:";
 choices[83]= new Array();
 choices[83][0] = "En dise&ntilde;o de programas, GRASP significa &quot;patrones generales de software para asignar responsabilidades&quot;, y describen los principios fundamentales de la asignaci&oacute;n de responsabilidades a objetos.";
 choices[83][1] = "La cohesi&oacute;n se define como el grado de interdependencia existente entre los m&oacute;dulos de un sistema.";
 choices[83][2] = "En la programaci&oacute;n modular lo m&aacute;s conveniente es que un m&oacute;dulo sea altamente cohesivo y con bajo acoplamiento.";
 choices[83][3] = "AOSD (Desarrollo Software Orientado a Aspectos) es una aproximaci&oacute;n al dise&ntilde;o de la arquitectura del sistema. Se caracteriza porque ofrece mecanismos para resolver problemas de c&oacute;digo disperso o enmara&ntilde;ado gracias a los aspectos.";
 answers[83] = choices[83][1];
 units[83] = "84";
 comments[83] = "Id Pregunta: 9732. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9764 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  En M&eacute;trica v3, &iquest;cu&aacute;l de los siguientes no es un perfil participante?";
 choices[84]= new Array();
 choices[84][0] = "Directivo";
 choices[84][1] = "Jefe de Proyecto";
 choices[84][2] = "Consultor";
 choices[84][3] = "Usuario experto";
 answers[84] = choices[84][3];
 units[84] = "86";
 comments[84] = "Id Pregunta: 9764. Seg&uacute;n M&eacute;trica v3, el usuario experto estar&iacute;a englobado en el perfil &quot;Directivo&quot;.";


//  Id pregunta: 9798 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;Cu&aacute;les son &aacute;reas de actuaci&oacute;n dentro de la Estrategia 2011-2015 del Plan Avanza 2?";
 choices[85]= new Array();
 choices[85][0] = "Ciudadan&iacute;a Digital, Econom&iacute;a Digital, Educaci&oacute;n y Servicios P&uacute;blicos Digitales, Publicaci&oacute;n Digital. ";
 choices[85][1] = "Infraestructura, Gobernanza, Confianza y Seguridad, Espacio &uacute;nico de informaci&oacute;n.";
 choices[85][2] = "Administraci&oacute;n sin papeles, Infraestructuras, Uso y confianza en Internet, Impulso de la industria TIC espa&ntilde;ola. ";
 choices[85][3] = "Administraci&oacute;n en l&iacute;nea, Comercio electr&oacute;nico, Salud y Educaci&oacute;n en l&iacute;nea, Banda Ancha. ";
 answers[85] = choices[85][2];
 units[85] = "30";
 comments[85] = "Id Pregunta: 9798. Examen TIC-A2 2013-Libre. En la p&aacute;gina web de la estrategia viene algo distinto, dice: Infraestructuras, Confianza y Seguridad, Capacitaci&oacute;n Tecnol&oacute;gica, Contenidos y Servicios Digitales y Desarrollo del Sector TIC. Esto a veces pasa.";


//  Id pregunta: 10024 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Se&ntilde;ale la afirmaci&oacute;n CORRECTA con respecto a un bean de sesi&oacute;n en JavaEE 7:";
 choices[86]= new Array();
 choices[86][0] = "Una aplicaci&oacute;n requerir&aacute; normalmente menos beans de sesi&oacute;n stateless que stateful para respaldar al mismo n&uacute;mero de clientes.";
 choices[86][1] = "Los stateful permiten compartir estado entre varios clientes.";
 choices[86][2] = "Un bean de sesi&oacute;n singleton es instanciado varias veces, seg&uacute;n necesidad, pero va a existir una copia (el singleton) todo el ciclo de vida de la aplicaci&oacute;n.";
 choices[86][3] = "Los stateful est&aacute;n respaldados por una base de datos y pueden implementar un servicio web.";
 answers[86] = choices[86][0];
 units[86] = "60";
 comments[86] = "Id Pregunta: 10024. TIC A2, Promoci&oacute;n Interna, 2013. Un stateless puede servirle a varios clientes. Stateful suele servir solo a 1 cliente.";


//  Id pregunta: 10043 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;En qu&eacute; protocolo de encaminamiento se utiliza el Algoritmo de Dijkstra para el c&aacute;lculo de rutas?";
 choices[87]= new Array();
 choices[87][0] = "OSPF ";
 choices[87][1] = "RIP";
 choices[87][2] = "BGP";
 choices[87][3] = "EGP";
 answers[87] = choices[87][0];
 units[87] = "102";
 comments[87] = "Id Pregunta: 10043. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10076 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  Los t&eacute;rminos scatternet y piconet est&aacute;n relacionados con la tecnolog&iacute;a:";
 choices[88]= new Array();
 choices[88][0] = "RDSI ";
 choices[88][1] = "Bluetooth";
 choices[88][2] = "DECT ";
 choices[88][3] = "Wimax";
 answers[88] = choices[88][1];
 units[88] = "107";
 comments[88] = "Id Pregunta: 10076. TIC A2, libre, Examen 2013";


//  Id pregunta: 10166 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  Sea la relaci&oacute;n SOLICITUD (CODIGO, FECHA, DNI_SOLICITANTE, NOM_SOLICITANTE, TEL_SOLICITANTE) y el atributo CODIGO su clave primaria, &iquest;en qu&eacute; forma normal se encuentra?";
 choices[89]= new Array();
 choices[89][0] = "Sin normalizar";
 choices[89][1] = "1&ordf; Forma Normal";
 choices[89][2] = "2&ordf; Forma Normal";
 choices[89][3] = "3&ordf; Forma Normal";
 answers[89] = choices[89][0];
 units[89] = "58";
 comments[89] = "Id Pregunta: 10166. ";


//  Id pregunta: 10202 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  Indique qu&eacute; afirmaci&oacute;n es falsa en relaci&oacute;n a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles";
 choices[90]= new Array();
 choices[90][0] = "Para el canal de subida utiliza la modulaci&oacute;n SD-FDMA y para el de bajada, OFDMA";
 choices[90][1] = "Utiliza IMS (IP Multimedia Subsystem) para transmitir informaci&oacute;n multimedia sobre IP";
 choices[90][2] = "Es compatible con las redes IEEE 802.16e";
 choices[90][3] = "Desaparecen los soft handovers y solo existen hard handovers al desaparecer los RNC e incorporarse a los eNode B";
 answers[90] = choices[90][2];
 units[90] = "108";
 comments[90] = "Id Pregunta: 10202. 4G busca la convergencia con WiMax en el est&aacute;ndar 802.16m";


//  Id pregunta: 10253 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  Cuando sea preciso recabar el consentimiento del interesado para tratar sus datos personales:";
 choices[91]= new Array();
 choices[91][0] = "Ser&aacute; preciso que el responsable del tratamiento pueda probar la existencia de dicho consentimiento, s&oacute;lo en el caso de los datos especialmente protegidos";
 choices[91][1] = "Ser&aacute; preciso que el responsable del tratamiento pueda probar la existencia de dicho consentimiento, en todo caso y durante un periodo m&aacute;ximo de 12 meses";
 choices[91][2] = "Ser&aacute; preciso que el responsable del tratamiento pueda probar la existencia de dicho consentimiento, en todo caso y mientras dure dicho tratamiento";
 choices[91][3] = "No ser&aacute; necesario que el responsable del tratamiento pruebe la existencia del consentimiento para el mismo";
 answers[91] = choices[91][2];
 units[91] = "29";
 comments[91] = "Id Pregunta: 10253. Art&iacute;culo 12.3 del RD 1720/2007";


//  Id pregunta: 10303 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  Internet Small Computer Systems Interface (iSCSI) seg&uacute;n el RFC 3720 es un protocolo de:";
 choices[92]= new Array();
 choices[92][0] = "Enlace.";
 choices[92][1] = "Red.";
 choices[92][2] = "Transporte.";
 choices[92][3] = "Aplicaci&oacute;n.";
 answers[92] = choices[92][2];
 units[92] = "48";
 comments[92] = "Id Pregunta: 10303. TIC A2, libre, examen 2013";


//  Id pregunta: 10693 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  La Ley 39/2015 es de aplicaci&oacute;n obligatoria:";
 choices[93]= new Array();
 choices[93][0] = "Para la Administraci&oacute;n General del Estado.";
 choices[93][1] = "Para las Comunidades Aut&oacute;nomas y Administraci&oacute;n Local.";
 choices[93][2] = "Para el Sector P&uacute;blico Institucional.";
 choices[93][3] = "Todas las anteriores.";
 answers[93] = choices[93][3];
 units[93] = "30";
 comments[93] = "Id Pregunta: 10693. ";


//  Id pregunta: 10943 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  La Estrategia de Ciberseguridad Nacional fue aprobada por el Consejo Nacional de Seguridad en:";
 choices[94]= new Array();
 choices[94][0] = "Septiembre de 2012.";
 choices[94][1] = "Diciembre de 2013.";
 choices[94][2] = "Enero de 2014.";
 choices[94][3] = "Enero de 2011.";
 answers[94] = choices[94][1];
 units[94] = "111";
 comments[94] = "Id Pregunta: 10943. TIC A1 AGE 2014";


//  Id pregunta: 11119 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Por qu&eacute; acuerdo marco comprar&iacute;a usted un ordenador personal?";
 choices[95]= new Array();
 choices[95][0] = "AM 2/2013";
 choices[95][1] = "AM 10/2013";
 choices[95][2] = "AM 13/2013";
 choices[95][3] = "AM 5/2013";
 answers[95] = choices[95][0];
 units[95] = "41";
 comments[95] = "Id Pregunta: 11119. ";


//  Id pregunta: 11313 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  En la fase de dise&ntilde;o de un servicio, ITIL utiliza la matriz o modelo RACI. Se&ntilde;ale la afirmaci&oacute;n correcta en cuanto a ella.";
 choices[96]= new Array();
 choices[96][0] = "Una persona no puede ser R o A en m&uacute;ltiples tareas";
 choices[96][1] = "En cada tarea debe haber un unico R y A";
 choices[96][2] = "Existen variaciones menores de este modelo como RASCI, donde S es Support";
 choices[96][3] = "El rol Responsible (Encargado), es el responsable de la correcta ejecuci&oacute;n de la tarea, pero no de la ejecuci&oacute;n de la tarea en cuesti&oacute;n";
 answers[96] = choices[96][1];
 units[96] = "98";
 comments[96] = "Id Pregunta: 11313. Cuidado con esto. Responsible es el rol encargado de hacer la tarea. Accountable (traducido en espa&ntilde;ol como responsable) es el responsable de la correcta ejecuci&oacute;n de la tarea";


//  Id pregunta: 11388 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de los siguientes podr&iacute;an ser considerados parte interesada (stakeholder) en una gesti&oacute;n de proyecto de servicios?";
 choices[97]= new Array();
 choices[97][0] = "Solo usuarios y clientes";
 choices[97][1] = "Solo suministradores y funciones";
 choices[97][2] = "Solo clientes y funciones";
 choices[97][3] = "Todos los anteriores";
 answers[97] = choices[97][3];
 units[97] = "98";
 comments[97] = "Id Pregunta: 11388. ";


//  Id pregunta: 11662 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  De acuerdo a la Ley 9/2014, General de Telecomunicaciones, los derechos de uso privativo del dominio p&uacute;blico radioel&eacute;ctrico con limitaci&oacute;n de n&uacute;mero:";
 choices[98]= new Array();
 choices[98][0] = "Se otorgar&aacute;n, por un per&iacute;odo que finalizar&aacute; el 31 de diciembre del a&ntilde;o natural en que cumplan su quinto a&ntilde;o de vigencia, sin perjuicio de su posible renovaci&oacute;n.";
 choices[98][1] = "Se otorgar&aacute;n, por un per&iacute;odo que finalizar&aacute; el 31 de diciembre del a&ntilde;o natural en que cumplan su quinto a&ntilde;o de vigencia, sin posibilidad de renovaci&oacute;n.";
 choices[98][2] = "Tendr&aacute;n la duraci&oacute;n prevista en los correspondientes procedimientos de licitaci&oacute;n, con un m&aacute;ximo de veinte a&ntilde;os, incluyendo pr&oacute;rrogas, sin posibilidad de renovaci&oacute;n autom&aacute;tica. ";
 choices[98][3] = "Tendr&aacute;n la duraci&oacute;n prevista en los correspondientes procedimientos de licitaci&oacute;n, con un m&aacute;ximo de veinte a&ntilde;os, salvo pr&oacute;rrogas, sin posibilidad de renovaci&oacute;n autom&aacute;tica. ";
 answers[98] = choices[98][2];
 units[98] = "110";
 comments[98] = "Id Pregunta: 11662. ";


//  Id pregunta: 11704 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Las direcciones globales en ipv6 empiezan de la manera siguiente:";
 choices[99]= new Array();
 choices[99][0] = "2000::/3";
 choices[99][1] = "FF00::/10";
 choices[99][2] = "FE00::/12";
 choices[99][3] = "::1/128";
 answers[99] = choices[99][0];
 units[99] = "100";
 comments[99] = "Id Pregunta: 11704. NULL";


