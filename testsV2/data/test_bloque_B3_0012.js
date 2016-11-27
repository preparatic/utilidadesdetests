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

//  Id pregunta: 2011 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  La complejidad  ciclom&aacute;tica de un grafo con 5 nodos y 7 aristas es:";
 choices[0]= new Array();
 choices[0][0] = "3";
 choices[0][1] = "4";
 choices[0][2] = "5";
 choices[0][3] = "6";
 answers[0] = choices[0][1];
 units[0] = "88";
 comments[0] = "Id Pregunta: 2011. Similar a examen TIC SS A 2004. Complejidad McCabe = aristas - nodos + 2";


//  Id pregunta: 2018 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  Con objeto de optimizar el modelo f&iacute;sico de datos y satisfacer los requisitos de rendimiento establecidos, &iquest;cu&aacute;l de las siguientes t&eacute;cnicas no deber&iacute;a utilizarse?";
 choices[1]= new Array();
 choices[1][0] = "Dividir entidades.";
 choices[1][1] = "Evitar el uso de encriptaci&oacute;n de datos.";
 choices[1][2] = "Combinar entidades si los accesos son frecuentes dentro de la misma transacci&oacute;n.";
 choices[1][3] = "Definir &iacute;ndices para permitir caminos de acceso alternativos.";
 answers[1] = choices[1][1];
 units[1] = "84";
 comments[1] = "Id Pregunta: 2018. Examen TIC MAP B 2004";


//  Id pregunta: 2028 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l de los siguientes lenguajes no es orientado a objetos?";
 choices[2]= new Array();
 choices[2][0] = "C.";
 choices[2][1] = "Smalltalk.";
 choices[2][2] = "Eiffel.";
 choices[2][3] = "ACTOR.";
 answers[2] = choices[2][0];
 units[2] = "82,84";
 comments[2] = "Id Pregunta: 2028. Similar a examen TIC SS A 2003";


//  Id pregunta: 2072 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l de estos elementos no forma parte de EFQM?";
 choices[3]= new Array();
 choices[3][0] = "Liderazgo";
 choices[3][1] = "Resultados Empresariales";
 choices[3][2] = "Pol&iacute;ticas y estrategias";
 choices[3][3] = "Valor de las acciones";
 answers[3] = choices[3][3];
 units[3] = "92";
 comments[3] = "Id Pregunta: 2072. NULL";


//  Id pregunta: 2194 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Cu&aacute;ndo debe aplicarse un plan de garant&iacute;a de calidad?:";
 choices[4]= new Array();
 choices[4][0] = "En casos de proyectos de gran envergadura";
 choices[4][1] = "Cuando sea rentable econ&oacute;micamente";
 choices[4][2] = "Cuando el cliente as&iacute; lo solicite";
 choices[4][3] = "Cuando el coste de no aplicarlo sea mayor que el de aplicarlo";
 answers[4] = choices[4][3];
 units[4] = "87";
 comments[4] = "Id Pregunta: 2194. NULL";


//  Id pregunta: 2210 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Qu&eacute; entidades certifican ISO-9000 en Espa&ntilde;a?:";
 choices[5]= new Array();
 choices[5][0] = "S&oacute;lo ISO";
 choices[5][1] = "S&oacute;lo AENOR";
 choices[5][2] = "Empresas privadas";
 choices[5][3] = "AENOR y empresas privadas";
 answers[5] = choices[5][3];
 units[5] = "92";
 comments[5] = "Id Pregunta: 2210. NULL";


//  Id pregunta: 2220 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Qu&eacute; tipo de organizaci&oacute;n es tambi&eacute;n conocida por &quot;organizaci&oacute;n matricial&quot;?:";
 choices[6]= new Array();
 choices[6][0] = "Organizaci&oacute;n proyecto-funcional";
 choices[6][1] = "Organizaci&oacute;n funcional";
 choices[6][2] = "Organizaci&oacute;n proyecto-staff";
 choices[6][3] = "Organizaci&oacute;n por aplicaciones";
 answers[6] = choices[6][0];
 units[6] = "26";
 comments[6] = "Id Pregunta: 2220. ";


//  Id pregunta: 2225 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  A la extensi&oacute;n por la cual un programa puede ser usado en otras aplicaciones se llama:";
 choices[7]= new Array();
 choices[7][0] = "Portabilidad";
 choices[7][1] = "Reusabilidad";
 choices[7][2] = "Interoperatividad";
 choices[7][3] = "Mantenibilidad";
 answers[7] = choices[7][1];
 units[7] = "88";
 comments[7] = "Id Pregunta: 2225. ";


//  Id pregunta: 2226 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  A la extensi&oacute;n por la cual un programa satisface sus especificaciones y cumple con los requerimientos del usuario se le llama:";
 choices[8]= new Array();
 choices[8][0] = "Correcci&oacute;n";
 choices[8][1] = "Fiabilidad";
 choices[8][2] = "Eficiencia";
 choices[8][3] = "Integridad";
 answers[8] = choices[8][0];
 units[8] = "88";
 comments[8] = "Id Pregunta: 2226. ";


//  Id pregunta: 2242 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Cuando en la etapa de mantenimiento de un sistema se realizan modificaciones para mejorar las funcionalidades del sistema o ampliar las mismas, se trata de un mantenimiento:";
 choices[9]= new Array();
 choices[9][0] = "Correctivo";
 choices[9][1] = "Perfectivo";
 choices[9][2] = "Evolutivo";
 choices[9][3] = "Adaptativo";
 answers[9] = choices[9][2];
 units[9] = "86";
 comments[9] = "Id Pregunta: 2242. NULL";


//  Id pregunta: 2271 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  El diagrama que representa el despliegue de los componentes sobre los dispositivos materiales o nodos es el de:";
 choices[10]= new Array();
 choices[10][0] = "componentes";
 choices[10][1] = "despliegue";
 choices[10][2] = "actividades";
 choices[10][3] = "ninguno de los anteriores";
 answers[10] = choices[10][1];
 units[10] = "86";
 comments[10] = "Id Pregunta: 2271. NULL";


//  Id pregunta: 2311 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  En el modelo de estimaci&oacute;n de costes de desarrollo de software (COCOMO) la evaluaci&oacute;n se hace en funci&oacute;n de lo que se conoce como DSI (Delivered Source Instructions). &iquest;Qu&eacute; tipo de instrucciones no se incluyen en este concepto?:";
 choices[11]= new Array();
 choices[11][0] = "Las correspondientes a control de trabajos o procedimientos JCL";
 choices[11][1] = "La de declaraci&oacute;n de datos";
 choices[11][2] = "Las instrucciones de formateo de pantallas";
 choices[11][3] = "Se incluyen todas las anteriores";
 answers[11] = choices[11][3];
 units[11] = "89";
 comments[11] = "Id Pregunta: 2311. NULL";


//  Id pregunta: 2320 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  En el Plan General de Garant&iacute;a de Calidad se calcula un cierto Coeficiente de Divergencia CDi:";
 choices[12]= new Array();
 choices[12][0] = "0 &lt;= CDi &lt; 3 representa casos que pueden ser controlados mediante la aplicaci&oacute;n adecuada del Plan General de Garantia de Calidad";
 choices[12][1] = "0 &gt;= CDi &gt; -3 representa un planteamiento desajustado que debe ser revisado necesariamente";
 choices[12][2] = "El CDi calculado no puede tener valores inferiores a -3, por la forma que es calculado";
 choices[12][3] = "Son ciertas todas las respuestas anteriores";
 answers[12] = choices[12][0];
 units[12] = "88";
 comments[12] = "Id Pregunta: 2320. ";


//  Id pregunta: 2329 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  En la programaci&oacute;n orientada a objetos, &iquest;cu&aacute;l de las siguientes afirmaciones es incorrecta?:";
 choices[13]= new Array();
 choices[13][0] = "La herencia define una relaci&oacute;n entre clases, donde una clase comparte la estructura o comportamiento definido en una o m&aacute;s clases";
 choices[13][1] = "La encapsulaci&oacute;n es el proceso de ocultaci&oacute;n de los detalles internos o de implementaci&oacute;n de un objeto";
 choices[13][2] = "Un objeto es una instancia de una clase y cada clase tiene cero o m&aacute;s instancias";
 choices[13][3] = "Las instancias de una metaclase no son clases";
 answers[13] = choices[13][3];
 units[13] = "82";
 comments[13] = "Id Pregunta: 2329. ";


//  Id pregunta: 2394 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  La garant&iacute;a de que en un determinado software bajo prueba se han ejecutado todos los bucles en sus partes internas y condiciones de retorno, y se han ejecutado todas las decisiones l&oacute;gicas en sus variantes verdadera y falsa, corresponde a:";
 choices[14]= new Array();
 choices[14][0] = "Los tests estructurales";
 choices[14][1] = "Los tests funcionales";
 choices[14][2] = "Las revisiones t&eacute;cnicas formales";
 choices[14][3] = "Las revisiones de usuario";
 answers[14] = choices[14][0];
 units[14] = "86";
 comments[14] = "Id Pregunta: 2394. NULL";


//  Id pregunta: 2395 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  La ingenier&iacute;a inversa consiste en:";
 choices[15]= new Array();
 choices[15][0] = "Obtener los elementos de dise&ntilde;o de un sistema de informaci&oacute;n a partir del c&oacute;digo fuente y de las estructuras de datos que utiliza.";
 choices[15][1] = "Realizar un proceso de redise&ntilde;o de un sistema de informaci&oacute;n, bas&aacute;ndose en la utilizaci&oacute;n de las nuevas tecnolog&iacute;as de dise&ntilde;o inverso (desde el conocimiento de las posibilidades de las nuevas tecnolog&iacute;as hasta los requerimientos funcionales).";
 choices[15][2] = "Redise&ntilde;ar el c&oacute;digo y las estructuras de un sistema de informaci&oacute;n bas&aacute;ndose en los dise&ntilde;os f&iacute;sicos.";
 choices[15][3] = "Un conjunto de herramientas orientadas a facilitar las fases de an&aacute;lisis y dise&ntilde;o de los sistemas de informaci&oacute;n.";
 answers[15] = choices[15][0];
 units[15] = "91";
 comments[15] = "Id Pregunta: 2395. ";


//  Id pregunta: 2417 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  El m&eacute;todo de recuperaci&oacute;n de la informaci&oacute;n basado en ficheros auxiliares de t&eacute;rminos (claves o &iacute;ndices  de palabras) o ficheros de apuntadores (referencias de los documentos base) es propio de:";
 choices[16]= new Array();
 choices[16][0] = "Modelo booleano";
 choices[16][1] = "Indexaci&oacute;n y recuperaci&oacute;n autom&aacute;tica vectorial";
 choices[16][2] = "&Iacute;ndices invertidos";
 choices[16][3] = "Retroalimentaci&oacute;n";
 answers[16] = choices[16][2];
 units[16] = "96";
 comments[16] = "Id Pregunta: 2417. NULL";


//  Id pregunta: 2475 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Para el an&aacute;lisis de sistemas en tiempo real no se usan:";
 choices[17]= new Array();
 choices[17][0] = "Modelos matem&aacute;ticos.";
 choices[17][1] = "Diagramas de bloques.";
 choices[17][2] = "Redes de Petri.";
 choices[17][3] = "Dominios distribuidos de Halm.";
 answers[17] = choices[17][3];
 units[17] = "83";
 comments[17] = "Id Pregunta: 2475. ";


//  Id pregunta: 2487 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Sea una interrelaci&oacute;n 1:N entre dos entidades A y B. Si para toda ocurrencia de A pueden existir, o no, una o varias ocurrencias de B asociadas, y para una ocurrencia de B existe una ocurrencia de A asociada, se dice que esta interrelaci&oacute;n es:";
 choices[18]= new Array();
 choices[18][0] = "Obligatoria en A y opcional en B";
 choices[18][1] = "Obligatoria en B y opcional en A";
 choices[18][2] = "Obligatoria en ambos extremos";
 choices[18][3] = "Opcional en ambos extremos";
 answers[18] = choices[18][1];
 units[18] = "80";
 comments[18] = "Id Pregunta: 2487. ";


//  Id pregunta: 2493 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Se&ntilde;alar la respuesta correcta respecto a METRICA V3:";
 choices[19]= new Array();
 choices[19][0] = "No propone la utilizaci&oacute;n de MAGERIT como metodolog&iacute;a de an&aacute;lisis y gesti&oacute;n de riesgos";
 choices[19][1] = "Propone el uso de MAGERIT para el an&aacute;lisis de riesgos pero no para la gesti&oacute;n de riesgos";
 choices[19][2] = "Propone la utilizaci&oacute;n de MAGERIT como metodolog&iacute;a de an&aacute;lisis y gesti&oacute;n de riesgos en el caso de que la organizaci&oacute;n no disponga de su propia metodolog&iacute;a";
 choices[19][3] = "Es imperativo el uso de MAGERIT como metodolog&iacute;a de an&aacute;lisis y gesti&oacute;n de riesgos";
 answers[19] = choices[19][2];
 units[19] = "86";
 comments[19] = "Id Pregunta: 2493. NULL";


//  Id pregunta: 2516 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Utilizando la funcionalidad como criterio principal, las herramientas CASE pueden agruparse en: Herramientas de planificaci&oacute;n de sistemas, Herramientas de an&aacute;lisis y dise&ntilde;o, Herramientas de programaci&oacute;n, Herramientas de integraci&oacute;n y prueba, y Herramientas:";
 choices[20]= new Array();
 choices[20][0] = "Herramientas de mantenimiento";
 choices[20][1] = "Herramientas de gesti&oacute;n de prototipos";
 choices[20][2] = "Herramientas de integraci&oacute;n y prueba";
 choices[20][3] = "Herramientas de programaci&oacute;n";
 answers[20] = choices[20][0];
 units[20] = "86";
 comments[20] = "Id Pregunta: 2516. NULL";


//  Id pregunta: 2559 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Los robots (entendidos como programas que recorren de forma autom&aacute;tica la estructura hipertexto de la web) se clasifican com&uacute;nmente en:";
 choices[21]= new Array();
 choices[21][0] = "est&aacute;ticos y din&aacute;micos";
 choices[21][1] = "spiders, knowbots y wanderers";
 choices[21][2] = "mantenimiento, esp&iacute;as y virus";
 choices[21][3] = "recopiladores de informaci&oacute;n y vigilantes ";
 answers[21] = choices[21][1];
 units[21] = "96";
 comments[21] = "Id Pregunta: 2559. NULL";


//  Id pregunta: 2577 AÃ±o de creación de pregunta: 2003-01-01
 questions[22]= "23)  La planificaci&oacute;n estrat&eacute;gica es";
 choices[22]= new Array();
 choices[22][0] = "un  momento en el tiempo para tomar decisiones";
 choices[22][1] = "una herramienta para anticiparse a los cambios";
 choices[22][2] = "una herramienta que permite que los cambios sean consecuencia de las acciones emprendidas por la organizaci&oacute;n";
 choices[22][3] = "una herramineta que se limita e extrapolar el presente al futuro";
 answers[22] = choices[22][2];
 units[22] = "77";
 comments[22] = "Id Pregunta: 2577. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 2597 AÃ±o de creación de pregunta: 2003-01-01
 questions[23]= "24)  Las actividades de la interfaz de Gesti&oacute;n de Proyectos en METRICA V3, se clasifican en:";
 choices[23]= new Array();
 choices[23][0] = "Actividades de inicio; actividades de seguimiento y control; actividades de finalizaci&oacute;n.";
 choices[23][1] = "Actividades de estimaci&oacute;n; actividades de dise&ntilde;o y construcci&oacute;n; actividades de presentaci&oacute;n.";
 choices[23][2] = "Actividades de planificaci&oacute;n, actividades de organizaci&oacute;n; actividades de evaluaci&oacute;n.";
 choices[23][3] = "Actividades de planificaci&oacute;n, actividades de estudio, actividades de organizaci&oacute;n, actividades de evaluaci&oacute;n.";
 answers[23] = choices[23][0];
 units[23] = "86";
 comments[23] = "Id Pregunta: 2597. Junta Andaluc&iacute;a";


//  Id pregunta: 2599 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  Seg&uacute;n METRICA V3, &iquest;cu&aacute;l de las siguientes no se considera una tarea propia de la etapa de Implantaci&oacute;n y Aceptaci&oacute;n de Sistemas de informaci&oacute;n (IAS)?:";
 choices[24]= new Array();
 choices[24][0] = "Establecimiento del Plan de Implantaci&oacute;n";
 choices[24][1] = "Elaboraci&oacute;n de los manuales de usuario.";
 choices[24][2] = "Incorporaci&oacute;n del Sistema a entorno de operaci&oacute;n.";
 choices[24][3] = " Paso a Producci&oacute;n.";
 answers[24] = choices[24][1];
 units[24] = "86";
 comments[24] = "Id Pregunta: 2599. Junta Andaluc&iacute;a";


//  Id pregunta: 2601 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)   &iquest;Cu&aacute;l de los siguientes modelos de ciclode vida, hace especial &eacute;nfasis en el control de riesgos?";
 choices[25]= new Array();
 choices[25][0] = "Espiral";
 choices[25][1] = "Cascada";
 choices[25][2] = "Ambos";
 choices[25][3] = "Ninguno";
 answers[25] = choices[25][0];
 units[25] = "76";
 comments[25] = "Id Pregunta: 2601. ";


//  Id pregunta: 2605 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  &iquest; Qu&eacute; diferencia fundamental existe entre el Diagrama de Estructura de Datos y el Modelo Entidad Relaci&oacute;n?";
 choices[26]= new Array();
 choices[26][0] = "Ninguna, son dos nombres que definen exactamente el mismo modelo.";
 choices[26][1] = "S&oacute;lo se diferencian en la representaci&oacute;n geom&eacute;trica de las entidades, que en el de Entidad Relaci&oacute;n son rect&aacute;ngulos y en el de Estructura de Datos son elipses, el resto es igual.";
 choices[26][2] = "En el modelo Entidad Relaci&oacute;n pueden existir relaciones n-arias mientras que en el de Estructura de Datos estas relaciones se representan cre&aacute;ndose una entidad auxiliar y dos relaciones 1:m.";
 choices[26][3] = " El Diagrama de Estructura de Datos no es un modelo que sirva para la representaci&oacute;n l&oacute;gica de los datos mientras que el Entidad Relaci&oacute;n s&iacute;.";
 answers[26] = choices[26][2];
 units[26] = "58,80";
 comments[26] = "Id Pregunta: 2605. ";


//  Id pregunta: 2615 AÃ±o de creación de pregunta: 2003-01-01
 questions[27]= "28)  &iquest;Cu&aacute;l de los siguientes no es un resultado de la fase de an&aacute;lisis de Metrica v 3?";
 choices[27]= new Array();
 choices[27][0] = "Cat&aacute;logo de normas";
 choices[27][1] = "Cat&aacute;logo de requisitos";
 choices[27][2] = "Glosario";
 choices[27][3] = "Descripci&oacute;n de subsistemas";
 answers[27] = choices[27][0];
 units[27] = "86";
 comments[27] = "Id Pregunta: 2615. NULL";


//  Id pregunta: 2636 AÃ±o de creación de pregunta: 2003-01-01
 questions[28]= "29)  El Mantenimiento de sistemas de Informaci&oacute;n tal como lo define M&eacute;trica V3";
 choices[28]= new Array();
 choices[28][0] = "De tipo perfectivo";
 choices[28][1] = "Requiere &uacute;nicamente la participaci&oacute;n del jefe de proyecto y del equipo y del equipo de mantenimiento";
 choices[28][2] = "Hace uso de la t&eacute;cnica denominada &ldquo;factores cr&iacute;ticos de &eacute;xito&rdquo;";
 choices[28][3] = "Tiene como objetivo la obtenci&oacute;n de una nueva versi&oacute;n de un sistema de informaci&oacute;n desarrollado, a partir de las peticiones de mantenimiento que los usuarios realizan con motivo de un problema detectado";
 answers[28] = choices[28][3];
 units[28] = "86";
 comments[28] = "Id Pregunta: 2636. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 2676 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  En un Sistema de Gesti&oacute;n Documental la recuperaci&oacute;n de la informaci&oacute;n se produce mediante:";
 choices[29]= new Array();
 choices[29][0] = "Palabras clave.";
 choices[29][1] = "Texto completo.";
 choices[29][2] = "&Iacute;ndices.";
 choices[29][3] = "Todas las anteriores.";
 answers[29] = choices[29][3];
 units[29] = "96";
 comments[29] = "Id Pregunta: 2676. NULL";


//  Id pregunta: 2762 AÃ±o de creación de pregunta: 2006-01-01
 questions[30]= "31)  La base para el an&aacute;lisis de un sistema de tiempo real pasa por:";
 choices[30]= new Array();
 choices[30][0] = "La teor&iacute;a de los sistemas lineales.";
 choices[30][1] = "La especificaci&oacute;n de las pruebas de caja blanca.";
 choices[30][2] = "La sincronizaci&oacute;n.";
 choices[30][3] = "Ninguna de las anteriores.";
 answers[30] = choices[30][0];
 units[30] = "83";
 comments[30] = "Id Pregunta: 2762. NULL";


//  Id pregunta: 2780 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  &iquest;Cu&aacute;ndo aplicar&iacute;a usted un ciclo de vida basado en prototipos?";
 choices[31]= new Array();
 choices[31][0] = "Cuando los requisitios son dif&iacute;ciles de revisar";
 choices[31][1] = "Cuando el sistema es cr&iacute;tico";
 choices[31][2] = "Para desarrollos de larga duraci&oacute;n";
 choices[31][3] = "Se aplicar&iacute;a en todos los casos anteriores";
 answers[31] = choices[31][0];
 units[31] = "85";
 comments[31] = "Id Pregunta: 2780. ";


//  Id pregunta: 2822 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  El modelo COCOMO 2000 contempla tres versiones que cubren desde el an&aacute;lisis hasta las pruebas de integraci&oacute;n. Cu&aacute;l de las siguientes no es una versi&oacute;n correcta";
 choices[32]= new Array();
 choices[32][0] = "Modelo de composici&oacute;n de la aplicaci&oacute;n";
 choices[32][1] = "Modelo de definici&oacute;n funcional";
 choices[32][2] = "Modelo de dise&ntilde;o preliminar";
 choices[32][3] = "Modelo Post-Arquitectura";
 answers[32] = choices[32][1];
 units[32] = "89";
 comments[32] = "Id Pregunta: 2822. NULL";


//  Id pregunta: 2872 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  Indique cu&aacute;l de las siguientes alternativas corresponde a los procesos principales de que consta la metodolog&iacute;a METRICA  ver. 3";
 choices[33]= new Array();
 choices[33][0] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n, Desarrollo de Sistemas de Informaci&oacute;n y Mantenimiento de Sistemas de Informaci&oacute;n";
 choices[33][1] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n, Estudio de viabilidad de  Sistemas de Informaci&oacute;n, Desarrollo  de Sistemas de Informaci&oacute;n e Implantaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[33][2] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n, An&aacute;lisis de Sistemas de Informaci&oacute;n, Construcci&oacute;n e Implantaci&oacute;n de  Sistemas de Informaci&oacute;n y Mantenimiento de Sistemas de Informaci&oacute;n";
 choices[33][3] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n, Desarrollo de Sistemas de Informaci&oacute;n e Implantaci&oacute;n de Sistemas de Informaci&oacute;n";
 answers[33] = choices[33][0];
 units[33] = "86";
 comments[33] = "Id Pregunta: 2872. NULL";


//  Id pregunta: 2883 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  &iquest;Cu&aacute;l de los siguientes subcriterios no corresponde al criterio &quot;Personas&quot; en el modelo EFQM?";
 choices[34]= new Array();
 choices[34][0] = "Planificaci&oacute;n, gesti&oacute;n y mejora de los recursos humanos";
 choices[34][1] = "Identificaci&oacute;n, desarrollo y mantenimiento del conocimiento y la capacidad de las personas de la organizaci&oacute;n";
 choices[34][2] = "Existencia de un autoliderazgo en las personas de la organizaci&oacute;n";
 choices[34][3] = "Recompensa, reconocimiento y atenci&oacute;n a las personas de la organizaci&oacute;n";
 answers[34] = choices[34][2];
 units[34] = "92";
 comments[34] = "Id Pregunta: 2883. NULL";


//  Id pregunta: 4371 AÃ±o de creación de pregunta: 2007-01-01
 questions[35]= "36)  El Ciclo de Vida del software es:";
 choices[35]= new Array();
 choices[35][0] = "Un patr&oacute;n del comportamiento de los dise&ntilde;adores.";
 choices[35][1] = "Un modelo del proceso de construcci&oacute;n del Software";
 choices[35][2] = "Un modelo de especificaciones establecido por el analista.";
 choices[35][3] = "Un esquema para integrar el sistema completo.";
 answers[35] = choices[35][1];
 units[35] = "76";
 comments[35] = "Id Pregunta: 4371. ";


//  Id pregunta: 4411 AÃ±o de creación de pregunta: 2007-01-01
 questions[36]= "37)  Si para un sistema de acceso basado en control biom&eacute;trico, FAR = 0% y FRR=12%, puede afirmarse que...";
 choices[36]= new Array();
 choices[36][0] = "Ning&uacute;n acceso no autorizado ha sido denegado y un 12% de los accesos autorizados han sido denegados.";
 choices[36][1] = "Ning&uacute;n acceso no autorizado ha sido permitido y un 12% de los accesos autorizados han sido denegados.";
 choices[36][2] = "Ning&uacute;n acceso no autorizado ha sido permitido y un 88% de los accesos autorizados han sido denegados.";
 choices[36][3] = "Ning&uacute;n acceso no autorizado ha sido denegado y un 12% de los accesos autorizados han sido permitidos.";
 answers[36] = choices[36][1];
 units[36] = "";
 comments[36] = "Id Pregunta: 4411. ";


//  Id pregunta: 4427 AÃ±o de creación de pregunta: 2007-01-01
 questions[37]= "38)  La firma digital de un mensaje o documento, garantiza:";
 choices[37]= new Array();
 choices[37][0] = "La autenticaci&oacute;n del emisor e integridad del mensaje.";
 choices[37][1] = "La autenticaci&oacute;n del emisor y confidencialidad del env&iacute;o.";
 choices[37][2] = "Autenticaci&oacute;n, confidencialidad e integridad.";
 choices[37][3] = "Confidencialidad del env&iacute;o e integridad del mensaje.";
 answers[37] = choices[37][0];
 units[37] = "74";
 comments[37] = "Id Pregunta: 4427. NULL";


//  Id pregunta: 4758 AÃ±o de creación de pregunta: 2007-01-01
 questions[38]= "39)  En relaci&oacute;n con la certificaci&oacute;n de ITIL:";
 choices[38]= new Array();
 choices[38][0] = "No es posible certificar una organizaci&oacute;n o sistema de gesti&oacute;n como &laquo;conforme a ITIL&raquo;";
 choices[38][1] = "Una organizaci&oacute;n que haya implementado las gu&iacute;as de ITIL sobre Gesti&oacute;n de los Servicios de TI puede lograr certificarse bajo la ISO/IEC 20000";
 choices[38][2] = "Los particulares pueden conseguir varias certificaciones oficiales ITIL";
 choices[38][3] = "Todas son ciertas";
 answers[38] = choices[38][3];
 units[38] = "98";
 comments[38] = "Id Pregunta: 4758. NULL";


//  Id pregunta: 4765 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  El paquete de programas COBIT completo es un juego que consiste 6 publicaciones entre las cuales no se encuentra:";
 choices[39]= new Array();
 choices[39][0] = "Resumen Ejecutivo";
 choices[39][1] = "Directrices de auditoria";
 choices[39][2] = "Instrumento de puesta en pr&aacute;ctica ";
 choices[39][3] = "Directrices de Calidad ";
 answers[39] = choices[39][3];
 units[39] = "98";
 comments[39] = "Id Pregunta: 4765. NULL";


//  Id pregunta: 4785 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  El modelo espiral WinWin define los siguientes hitos en el proceso:";
 choices[40]= new Array();
 choices[40][0] = "Objetivos del ciclo de vida, arquitectura del ciclo de vida y capacidad operativa iniclal.";
 choices[40][1] = "Alcance del sistema y tama&ntilde;o del sistema.";
 choices[40][2] = "Verificaci&oacute;n de requisitos, verificaci&oacute;n de funcionalidades y verificaci&oacute;n de codigo";
 choices[40][3] = "El modelo espiral WinWin no define hitos en el proceso";
 answers[40] = choices[40][3];
 units[40] = "76";
 comments[40] = "Id Pregunta: 4785. ";


//  Id pregunta: 4797 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  &iquest;Qu&eacute; tipo de diagramas de UML (Unified Modeling Language) permiten describir el comportamiento din&aacute;mico del sistema de informaci&oacute;n mediante el paso de mensajes entre los objetos del mismo?";
 choices[41]= new Array();
 choices[41][0] = "Diagramas de casos de uso.";
 choices[41][1] = "Diagramas de estados.";
 choices[41][2] = "Diagramas de interacci&oacute;n.";
 choices[41][3] = "Diagramas de flujo de datos.";
 answers[41] = choices[41][2];
 units[41] = "84";
 comments[41] = "Id Pregunta: 4797. examen TIC 2006";


//  Id pregunta: 4852 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  &iquest;Cu&aacute;l de los siguientes productos NO es resultado del proceso &quot;Implantaci&oacute;n y Aceptaci&oacute;n del Sistema&quot; (IAS) de la metodolog&iacute;a M&Eacute;TRICA versi&oacute;n 3?";
 choices[42]= new Array();
 choices[42][0] = "Evaluaci&oacute;n del Resultado de las Pruebas de Integraci&oacute;n";
 choices[42][1] = "Evaluaci&oacute;n del Resultado de las Pruebas de Implantaci&oacute;n";
 choices[42][2] = "Acuerdo de Nivel de Servicio";
 choices[42][3] = "Plan de Mantenimiento";
 answers[42] = choices[42][0];
 units[42] = "86";
 comments[42] = "Id Pregunta: 4852. NULL";


//  Id pregunta: 4953 AÃ±o de creación de pregunta: 2003-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l es el organismo acreditador espa&ntilde;ol dentro de la Infraestructura de la Calidad?";
 choices[43]= new Array();
 choices[43][0] = "AENOR";
 choices[43][1] = "ENAC";
 choices[43][2] = "Cualquier organismo de certificaci&oacute;n.";
 choices[43][3] = "Cualquier organismo certificado por el CEN (Centro Europeo de Normalizaci&oacute;n).";
 answers[43] = choices[43][1];
 units[43] = "92";
 comments[43] = "Id Pregunta: 4953. Examen TIC B 2007";


//  Id pregunta: 5182 AÃ±o de creación de pregunta: 2003-01-01
 questions[44]= "45)  En el modelo E/R, las entidades d&eacute;biles:";
 choices[44]= new Array();
 choices[44][0] = "Dependen de la existencia de otro tipo de entidad";
 choices[44][1] = "S&oacute;lo pueden tener un &uacute;nico atributo de clave propio";
 choices[44][2] = "Tienen atributos de clave propios, pero coinciden con los de la entidad fuerte de la que dependen";
 choices[44][3] = "Se representan mediante un rect&aacute;ngulo de trazo discontinuo";
 answers[44] = choices[44][0];
 units[44] = "80";
 comments[44] = "Id Pregunta: 5182. ";


//  Id pregunta: 5223 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  La actividad &quot;Especificaci&oacute;n detallada del plan de aseguramiento de calidad&quot; en qu&eacute; proceso se realiza";
 choices[45]= new Array();
 choices[45][0] = "An&aacute;lisis del Sistema de Informaci&oacute;n";
 choices[45][1] = "Estudio de Viabilidad del Sistema";
 choices[45][2] = "Dise&ntilde;o del Sistema de Informaci&oacute;n";
 choices[45][3] = "Planificaci&oacute;n del Sistema de Informaci&oacute;n";
 answers[45] = choices[45][0];
 units[45] = "86";
 comments[45] = "Id Pregunta: 5223. NULL";


//  Id pregunta: 5414 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  Una m&eacute;trica basada en la calidad del software utiliza como factores de calidad desde un punto de vista de explotaci&oacute;n:";
 choices[46]= new Array();
 choices[46][0] = "Reusabilidad, Seguridad, Eficiencia, Correcci&oacute;n y Fiabilidad";
 choices[46][1] = "Usabilidad, Seguridad, Eficiencia, Correccion y Fiabilidad";
 choices[46][2] = "Usabilidad, Seguridad, Mantenibilidad, Correcci&oacute;n y Fiabilidad";
 choices[46][3] = "Usabilidad, Seguridad, Portabilidad, Correcci&oacute;n y Fiabilidad";
 answers[46] = choices[46][1];
 units[46] = "88";
 comments[46] = "Id Pregunta: 5414. Castilla y Le&oacute;n";


//  Id pregunta: 5470 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  La primera fase del desarrollo software seg&uacute;n M&eacute;trica Versi&oacute;n 3 es:";
 choices[47]= new Array();
 choices[47][0] = "Estudio de Viabilidad del Sistema";
 choices[47][1] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[47][2] = "Definici&oacute;n del Sistema";
 choices[47][3] = "Estudio del Sistema Actual";
 answers[47] = choices[47][0];
 units[47] = "86";
 comments[47] = "Id Pregunta: 5470. Castilla y Le&oacute;n";


//  Id pregunta: 5924 AÃ±o de creación de pregunta: 2009-01-01
 questions[48]= "49)  De acuerdo con la Metodolog&iacute;a M&eacute;trica Versi&oacute;n 3, indique el concepto que NO es necesario tener en cuenta en el c&aacute;lculo del &quot;Retorno de la Inversi&oacute;n&quot;:";
 choices[48]= new Array();
 choices[48][0] = "Beneficio Neto Anual";
 choices[48][1] = "Inversi&oacute;n Promedio";
 choices[48][2] = "Coste desarrollo anualizado";
 choices[48][3] = "Periodo de Amortizaci&oacute;n";
 answers[48] = choices[48][3];
 units[48] = "86";
 comments[48] = "Id Pregunta: 5924. MAP 2008 A1";


//  Id pregunta: 6006 AÃ±o de creación de pregunta: 2010-01-01
 questions[49]= "50)  La redocumentaci&oacute;n es:";
 choices[49]= new Array();
 choices[49][0] = "Una forma de ingenier&iacute;a inversa.";
 choices[49][1] = "Es el proceso mediante el que se produce documentaci&oacute;n desde un sistema en desarrollo.";
 choices[49][2] = "Es el mismo concepto que humanware.";
 choices[49][3] = "Es la identificaci&oacute;n de los componentes de un sistema y sus relaciones.";
 answers[49] = choices[49][0];
 units[49] = "91";
 comments[49] = "Id Pregunta: 6006. TIC A 2009";


//  Id pregunta: 6053 AÃ±o de creación de pregunta: 2010-01-01
 questions[50]= "51)  La gesti&oacute;n del alcance de un proyecto de tecnolog&iacute;as de la informaci&oacute;n se suele dividir en 5 etapas; indicar cu&aacute;l de las siguientes NO es una de ellas:";
 choices[50]= new Array();
 choices[50][0] = "Planificaci&oacute;n del alcance.";
 choices[50][1] = "Creaci&oacute;n de la Estructura de Desglose del Trabajo (EDT).";
 choices[50][2] = "Definici&oacute;n del alcance.";
 choices[50][3] = "Estimaci&oacute;n de la duraci&oacute;n de las actividades o trabajos.";
 answers[50] = choices[50][3];
 units[50] = "86";
 comments[50] = "Id Pregunta: 6053. TIC A 2009";


//  Id pregunta: 6093 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)  M&eacute;trica 3 propone el uso de la t&eacute;cnica de an&aacute;lisis coste/beneficio en:";
 choices[51]= new Array();
 choices[51][0] = "Los procesos de Planificaci&oacute;n y Desarrollo (subproceso ASI).";
 choices[51][1] = "Solamente en el proceso de Desarrollo (subprocesos EVS y ASI).";
 choices[51][2] = "Solamente en el proceso de Planificaci&oacute;n.";
 choices[51][3] = "Los procesos de Planificaci&oacute;n y Desarrollo (subproceso EVS).";
 answers[51] = choices[51][3];
 units[51] = "86";
 comments[51] = "Id Pregunta: 6093. TIC A 2009";


//  Id pregunta: 6096 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes NO es un principio b&aacute;sico de todo modelo orientado a objetos seg&uacute;n Booch?";
 choices[52]= new Array();
 choices[52][0] = "Distribuci&oacute;n.";
 choices[52][1] = "Abstracci&oacute;n.";
 choices[52][2] = "Encapsulaci&oacute;n.";
 choices[52][3] = "Modularidad.";
 answers[52] = choices[52][0];
 units[52] = "82";
 comments[52] = "Id Pregunta: 6096. TIC A 2009";


//  Id pregunta: 6241 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  De acuerdo a la terminolog&iacute;a adoptada por el IEEE, la transformaci&oacute;n de una forma de representaci&oacute;n del sistema en otra distinta, pero del mismo nivel de abstracci&oacute;n, sin modificar el comportamiento externo del sistema, es la definici&oacute;n de:";
 choices[53]= new Array();
 choices[53][0] = "Ingenier&iacute;a hacia delante.";
 choices[53][1] = "Reestructuraci&oacute;n.";
 choices[53][2] = "Reingenier&iacute;a.";
 choices[53][3] = "Ingenier&iacute;a inversa.";
 answers[53] = choices[53][1];
 units[53] = "91";
 comments[53] = "Id Pregunta: 6241. TIC B-2009, bloque desarrollo";


//  Id pregunta: 6254 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  Una de las tareas de los Analistas en la gesti&oacute;n del proceso de desarrollo es:";
 choices[54]= new Array();
 choices[54][0] = "Dar seguimiento al plan de trabajo y corregir las desviaciones a tiempo";
 choices[54][1] = "Construir el c&oacute;digo que dar&aacute; lugar al producto resultante";
 choices[54][2] = "Fijar el calendario de hitos y entregas";
 choices[54][3] = "Mantener entrevistas y sesiones de trabajo con los responsables de la organizaci&oacute;n y los usuarios";
 answers[54] = choices[54][3];
 units[54] = "79";
 comments[54] = "Id Pregunta: 6254. TICB-2009, bloque desarrollo";


//  Id pregunta: 6295 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes no es una t&eacute;cnica de bajo nivel de obtenci&oacute;n de requisitos en el an&aacute;lisis de los sistemas de Informaci&oacute;n?";
 choices[55]= new Array();
 choices[55][0] = "Entrevistas";
 choices[55][1] = "An&aacute;lisis de Mercado";
 choices[55][2] = "Entorno de Bucles Adaptativo";
 choices[55][3] = "Brainstorming";
 answers[55] = choices[55][2];
 units[55] = "78";
 comments[55] = "Id Pregunta: 6295. ";


//  Id pregunta: 6438 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  Se&ntilde;ale una de las restricciones del modelo E/R:";
 choices[56]= new Array();
 choices[56][0] = "No se pueden realizar relaciones de unas relaciones con otras.";
 choices[56][1] = "No permite relacionar m&aacute;s de dos entidades.";
 choices[56][2] = "No permite relacines reflexivas.";
 choices[56][3] = "No se pueden representar las propiedades de las entidades.";
 answers[56] = choices[56][0];
 units[56] = "80";
 comments[56] = "Id Pregunta: 6438. NULL";


//  Id pregunta: 6469 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  En M&eacute;trica V3, qu&eacute; producto NO se elabora en el proceso Plan de Sistemas de Informaci&oacute;n:";
 choices[57]= new Array();
 choices[57][0] = "Modelo de procesos de la organizaci&oacute;n";
 choices[57][1] = "Plan de Migraci&oacute;n y Carga Inicial de Datos";
 choices[57][2] = "Arquitectura Tecnol&oacute;gica";
 choices[57][3] = "Plan de proyectos";
 answers[57] = choices[57][1];
 units[57] = "86";
 comments[57] = "Id Pregunta: 6469. Castilla La Mancha 2009";


//  Id pregunta: 6532 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  El marco general para la mejora de la calidad de la AGE se establece en:";
 choices[58]= new Array();
 choices[58][0] = "RD 951/2003";
 choices[58][1] = "RD 952/2003";
 choices[58][2] = "RD 951/2005";
 choices[58][3] = "RD 951/2006";
 answers[58] = choices[58][2];
 units[58] = "87";
 comments[58] = "Id Pregunta: 6532. NULL";


//  Id pregunta: 6537 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  La gesti&oacute;n de recursos, de acuerdo a ISO 9004, se apoya en:";
 choices[59]= new Array();
 choices[59][0] = "El ciclo de vida";
 choices[59][1] = "Gesti&oacute;n de la seguridad";
 choices[59][2] = "An&aacute;lisis de la viabilidad";
 choices[59][3] = "Infraestructura";
 answers[59] = choices[59][3];
 units[59] = "92";
 comments[59] = "Id Pregunta: 6537. NULL";


//  Id pregunta: 6604 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  En el an&aacute;lisis estructurado un sistema se puede modelizar completamente con:";
 choices[60]= new Array();
 choices[60][0] = "Modelo Funcional, Modelo Est&aacute;tico y Modelo Din&aacute;mico";
 choices[60][1] = "Modelo de Procesos y Modelo de Datos";
 choices[60][2] = "Modelo Funcional, Modelo de Clases y Modelo de Casos de Uso";
 choices[60][3] = "Modelo Funcional y Modelo E/R";
 answers[60] = choices[60][0];
 units[60] = "81";
 comments[60] = "Id Pregunta: 6604. NULL";


//  Id pregunta: 6629 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  El modelo CMM de Ingenier&iacute;a de Software ofrece dos representaciones que se denominan:";
 choices[61]= new Array();
 choices[61][0] = "Continua y Discontinua";
 choices[61][1] = "Continua y Por Et&aacute;pas";
 choices[61][2] = "Por &Aacute;reas Clave y Caracter&iacute;sticas";
 choices[61][3] = "Continua y Por &Aacute;reas Clave";
 answers[61] = choices[61][1];
 units[61] = "87";
 comments[61] = "Id Pregunta: 6629. NULL";


//  Id pregunta: 8250 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  En el desarrollo de software &aacute;gil (Agile) se usan los siguientes niveles de planificaci&oacute;n:";
 choices[62]= new Array();
 choices[62][0] = "Planificaci&oacute;n de entregas, planificaci&oacute;n de iteraciones o sprints y planificaci&oacute;n diaria.";
 choices[62][1] = "Planificaci&oacute;n estrat&eacute;gica y planifiaci&oacute;n semanal.";
 choices[62][2] = "Planificaci&oacute;n de iteraciones o sprints, planificaci&oacute;n de hitos de cada iteraci&oacute;n o sprint y planificaci&oacute;n semanal.";
 choices[62][3] = "Planificaci&oacute;n estrat&eacute;gica, planificaci&oacute;n de recursos y planificaci&oacute;n de entregas.";
 answers[62] = choices[62][0];
 units[62] = "76";
 comments[62] = "Id Pregunta: 8250. Examen TIC A1 2010";


//  Id pregunta: 8342 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  &iquest;Qu&eacute; se intenta conseguir al aplicar t&eacute;cnicas de desnormalizaci&oacute;n en algunas tablas en una base de datos que fue normalizada previamente?";
 choices[63]= new Array();
 choices[63][0] = "Optimizar el desempe&ntilde;o de la base de datos.";
 choices[63][1] = "Evitar datos redundantes.";
 choices[63][2] = "Proteger la integridad de los datos.";
 choices[63][3] = "Facilitar el uso al usuano final.";
 answers[63] = choices[63][0];
 units[63] = "86";
 comments[63] = "Id Pregunta: 8342. Examen TIC A2 2010";


//  Id pregunta: 8652 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  &iquest;Cu&aacute;l de las siguientes es una caracter&iacute;stica propia del Proceso Unificado de Desarrollo de Software?";
 choices[64]= new Array();
 choices[64][0] = "Se basa en las Historias de Usuario.";
 choices[64][1] = "Proceso dirigido por casos de uso.";
 choices[64][2] = "Existe una continua refactorizaci&oacute;n del c&oacute;digo.";
 choices[64][3] = "No contempla la gesti&oacute;n del proyecto.";
 answers[64] = choices[64][1];
 units[64] = "79";
 comments[64] = "Id Pregunta: 8652. Examen TIC A2 2010 interna";


//  Id pregunta: 8765 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  En relaci&oacute;n con los lenguajes de programaci&oacute;n, una constante puede pasarse como argumento a un procedimiento:";
 choices[65]= new Array();
 choices[65][0] = "No puede pasarse.";
 choices[65][1] = "S&oacute;lo por valor.";
 choices[65][2] = "S&oacute;lo por referencia.";
 choices[65][3] = "Por referencia y por valor.";
 answers[65] = choices[65][3];
 units[65] = "84";
 comments[65] = "Id Pregunta: 8765. Examen TIC A2 2010 interna";


//  Id pregunta: 8813 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  En programaci&oacute;n orientada a objetos &iquest;qu&eacute; son las clases abstractas?";
 choices[66]= new Array();
 choices[66][0] = "Aquellas que se dividen en subclases";
 choices[66][1] = "Aquellas que est&aacute;n predefinidas";
 choices[66][2] = "Las que no tienen instancias";
 choices[66][3] = "Las que no son reutilizables";
 answers[66] = choices[66][2];
 units[66] = "82";
 comments[66] = "Id Pregunta: 8813. Examen UPM A2 2011";


//  Id pregunta: 9340 AÃ±o de creación de pregunta: 2013-01-01
 questions[67]= "68)  La t&eacute;cnica de McCabe permite medir:";
 choices[67]= new Array();
 choices[67][0] = "la productividad del software";
 choices[67][1] = "la complejidad del software";
 choices[67][2] = "la fiabilidad del software";
 choices[67][3] = "Ninguna de las tres";
 answers[67] = choices[67][1];
 units[67] = "88";
 comments[67] = "Id Pregunta: 9340. NULL";


//  Id pregunta: 9419 AÃ±o de creación de pregunta: 2013-01-01
 questions[68]= "69)  El modelo de estimaci&oacute;n de Putnam se caracteriza por";
 choices[68]= new Array();
 choices[68][0] = "Ser un modelo te&oacute;rico";
 choices[68][1] = "Distribuir los esfuerzos de desarrollo seg&uacute;n la curva Rayleigh/Norden";
 choices[68][2] = "Incluir una constante tecnol&oacute;gica";
 choices[68][3] = "Todas las anteriores";
 answers[68] = choices[68][3];
 units[68] = "89";
 comments[68] = "Id Pregunta: 9419. NULL";


//  Id pregunta: 9438 AÃ±o de creación de pregunta: 2013-01-01
 questions[69]= "70)  En un DFD los niveles de los diagramas que recogen la descomposici&oacute;n en niveles, desde el m&aacute;s general al m&aacute;s espec&iacute;fico, se denominan:";
 choices[69]= new Array();
 choices[69][0] = "Diagrama de sistema, subsistemas, funciones, subfunciones, procesos y subprocesos.";
 choices[69][1] = "Diagrama de contexto, sistemas, subsistemas, funciones y subfunciones.";
 choices[69][2] = "Diagrama de contexto, sistemas, funciones y subfunciones.";
 choices[69][3] = "Diagrama de contexto, subsistemas, funciones, subfunciones y procesos.";
 answers[69] = choices[69][3];
 units[69] = "81";
 comments[69] = "Id Pregunta: 9438. Examen AGE TIC A1 2011";


//  Id pregunta: 9764 AÃ±o de creación de pregunta: 2014-01-01
 questions[70]= "71)  En M&eacute;trica v3, &iquest;cu&aacute;l de los siguientes no es un perfil participante?";
 choices[70]= new Array();
 choices[70][0] = "Directivo";
 choices[70][1] = "Jefe de Proyecto";
 choices[70][2] = "Consultor";
 choices[70][3] = "Usuario experto";
 answers[70] = choices[70][3];
 units[70] = "86";
 comments[70] = "Id Pregunta: 9764. Seg&uacute;n M&eacute;trica v3, el usuario experto estar&iacute;a englobado en el perfil &quot;Directivo&quot;.";


//  Id pregunta: 9785 AÃ±o de creación de pregunta: 2014-01-01
 questions[71]= "72)  Seg&uacute;n Magerit v2, quien NO es un participante en un proyecto de an&aacute;lisis y gesti&oacute;n de riesgos:";
 choices[71]= new Array();
 choices[71][0] = "Comit&eacute; de Gesti&oacute;n.";
 choices[71][1] = "Grupos de Interlocutores.";
 choices[71][2] = "Comit&eacute; de Seguimiento.";
 choices[71][3] = "Equipo de Proyecto";
 answers[71] = choices[71][0];
 units[71] = "98";
 comments[71] = "Id Pregunta: 9785. Examen TIC A2 2013";


//  Id pregunta: 9901 AÃ±o de creación de pregunta: 2014-01-01
 questions[72]= "73)  En relaci&oacute;n a los participantes de la metodolog&iacute;a M&eacute;trica v3, aquellos cuya funci&oacute;n es asesorar en las cuestiones en las que tienen un conocimiento especializado se denominan";
 choices[72]= new Array();
 choices[72][0] = "Consultores.";
 choices[72][1] = "Expertos.";
 choices[72][2] = "Analistas.";
 choices[72][3] = "Jefes de Proyecto.";
 answers[72] = choices[72][0];
 units[72] = "86";
 comments[72] = "Id Pregunta: 9901. TIC A2, Examen 2013";


//  Id pregunta: 9910 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  Se&ntilde;ale cu&aacute;l de las siguientes es una t&eacute;cnica de desarrollo seg&uacute;n M&eacute;trica v3:";
 choices[73]= new Array();
 choices[73][0] = "T&eacute;cnicas Matriciales.";
 choices[73][1] = "M&eacute;todo Albrecht.";
 choices[73][2] = "An&aacute;lisis de Impacto.";
 choices[73][3] = "Caminos de Acceso.";
 answers[73] = choices[73][0];
 units[73] = "86";
 comments[73] = "Id Pregunta: 9910. TIC A2, Examen 2013";


//  Id pregunta: 9921 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  En M&eacute;trica v3, en relaci&oacute;n al modelo entidad/relaci&oacute;n extendido, dentro de las relaciones d&eacute;biles, &iquest;qu&eacute; dos divisiones se distinguen?";
 choices[74]= new Array();
 choices[74][0] = "Dependencia en existencia y dependencia en identificaci&oacute;n.";
 choices[74][1] = "Dependencia en composici&oacute;n y dependencia en identificaci&oacute;n.";
 choices[74][2] = "Dependencia en existencia y dependencia en discriminaci&oacute;n.";
 choices[74][3] = "Dependencia en composici&oacute;n y dependencia en discriminaci&oacute;n.";
 answers[74] = choices[74][0];
 units[74] = "86,58";
 comments[74] = "Id Pregunta: 9921. TIC A2, Examen 2013";


//  Id pregunta: 9946 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)   El &quot;nivel de definici&oacute;n&quot; del modelo CMM (Capability Maturity Model) se caracteriza por:";
 choices[75]= new Array();
 choices[75][0] = "Proceso poco documentado. ";
 choices[75][1] = "Proceso de desarrollo por definir.";
 choices[75][2] = "Proceso de desarrollo integrado en la organizaci&oacute;n.";
 choices[75][3] = "Control cuantitativo de productos";
 answers[75] = choices[75][2];
 units[75] = "87";
 comments[75] = "Id Pregunta: 9946. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 9995 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  En relaci&oacute;n a im&aacute;genes est&aacute;ticas en portales web,";
 choices[76]= new Array();
 choices[76][0] = "El formato PNG, si bien est&aacute; libre de patentes, tiene mayor p&eacute;rdida de informaci&oacute;n que el formato JPEG.";
 choices[76][1] = "El formato GIF utiliza el algoritmo LZW de compresi&oacute;n patentado por CompuServe.";
 choices[76][2] = "JPEG tiene m&aacute;s p&eacute;rdida de informaci&oacute;n que GIF y PNG.";
 choices[76][3] = "El soporte de animaciones no es posible en PNG, utiliz&aacute;ndose NMG en su lugar.";
 answers[76] = choices[76][2];
 units[76] = "93";
 comments[76] = "Id Pregunta: 9995. NULL";


//  Id pregunta: 10181 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  Determine la afirmaci&oacute;n cierta en relaci&oacute;n con las clases abstractas y las interfaces:";
 choices[77]= new Array();
 choices[77][0] = "En una clase abstracta, todos los m&eacute;todos definidos deben carecer de implementaci&oacute;n";
 choices[77][1] = "Una clase abstracta podr&aacute; ser instanciada cuando la clase que hereda implemente los m&eacute;todos abstractos";
 choices[77][2] = "Una interfaz permite la implementaci&oacute;n de clases con comportamientos comunes, sin importar su ubicaci&oacute;n en la jerarqu&iacute;a de clases.";
 choices[77][3] = "Las interfaces pueden definir constantes y variables de instancia";
 answers[77] = choices[77][2];
 units[77] = "82";
 comments[77] = "Id Pregunta: 10181. ";


//  Id pregunta: 10194 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  Para el reconocimiento de las vocales se calculan";
 choices[78]= new Array();
 choices[78][0] = "los al&oacute;fonos";
 choices[78][1] = "el pitch";
 choices[78][2] = "los formantes";
 choices[78][3] = "el cepstrum";
 answers[78] = choices[78][2];
 units[78] = "94";
 comments[78] = "Id Pregunta: 10194. ";


//  Id pregunta: 10286 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  &iquest;Qu&eacute; tipo de mantenimiento debe realizarse como consecuencia de los cambios en el entorno de operaci&oacute;n?";
 choices[79]= new Array();
 choices[79][0] = "Operativo";
 choices[79][1] = "Correctivo";
 choices[79][2] = "Perfectivo";
 choices[79][3] = "Adaptativo";
 answers[79] = choices[79][3];
 units[79] = "91";
 comments[79] = "Id Pregunta: 10286. TIC A2, libre, examen 2013";


//  Id pregunta: 10451 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  En el &aacute;mbito de la continuidad de negocio, el &quot;objetivo de prestaci&oacute;n de servicios&quot; se define como:";
 choices[80]= new Array();
 choices[80][0] = "El tiempo que una organizaci&oacute;n puede esperar desde el punto de fallo hasta la restauraci&oacute;n de los servicios o aplicaciones cr&iacute;ticas.";
 choices[80][1] = "El nivel de servicios a proveer durante el modo de proceso alterno.";
 choices[80][2] = "Ninguna de las anteriores.";
 choices[80][3] = "A y B.";
 answers[80] = choices[80][1];
 units[80] = "97";
 comments[80] = "Id Pregunta: 10451. NULL";


//  Id pregunta: 10454 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  En el &aacute;mbito de la continuidad de negocio una operaci&oacute;n clasificada como cr&iacute;tica:";
 choices[81]= new Array();
 choices[81][0] = "No puede ser reemplazada por una operaci&oacute;n manual.";
 choices[81][1] = "La tolerancia a la interrupci&oacute;n es muy baja.";
 choices[81][2] = "El costo de interrupci&oacute;n es muy alto.";
 choices[81][3] = "Todas las anteriores.";
 answers[81] = choices[81][3];
 units[81] = "97";
 comments[81] = "Id Pregunta: 10454. NULL";


//  Id pregunta: 10835 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  Se&ntilde;ale la afirmaci&oacute;n INCORRECTA en relaci&oacute;n a los &aacute;rboles de b&uacute;squeda AVL:";
 choices[82]= new Array();
 choices[82][0] = "Son un tipo de &aacute;rbol de b&uacute;squeda binario.";
 choices[82][1] = "Para cada uno de los nodos, la diferencia de altura entre sus dos sub&aacute;rboles no puede ser superior a uno.";
 choices[82][2] = "Los &aacute;rboles AVL menos profundos son los &aacute;rboles de Fibonacci.";
 choices[82][3] = "Un &aacute;rbol de Fibonacci es el &aacute;rbol AVL m&aacute;s desbalanceado permitido.";
 answers[82] = choices[82][2];
 units[82] = "0";
 comments[82] = "Id Pregunta: 10835. Examen GSI 2014";


//  Id pregunta: 10837 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  En teor&iacute;a de colas, el modelo de disciplina de cola denominado RSS se refiere a que:";
 choices[83]= new Array();
 choices[83][0] = "Se atiende primero al cliente que antes haya llegado.";
 choices[83][1] = "Selecciona a los clientes de manera aleatoria, de acuerdo a alg&uacute;n procedimiento de prioridad o a alg&uacute;n otro orden.";
 choices[83][2] = "Sirve a los clientes igualmente, se reparte un espacio de tiempo a cada cliente.";
 choices[83][3] = "Se atiende primero al cliente que ha llegado el &uacute;ltimo.";
 answers[83] = choices[83][1];
 units[83] = "0";
 comments[83] = "Id Pregunta: 10837. Examen GSI 2014";


//  Id pregunta: 10841 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  &iquest;Cu&aacute;l de las siguientes normas define un est&aacute;ndar para pruebas de software?";
 choices[84]= new Array();
 choices[84][0] = "ISO 29781";
 choices[84][1] = "ISO 29621";
 choices[84][2] = "ISO 29382";
 choices[84][3] = "ISO 29119";
 answers[84] = choices[84][3];
 units[84] = "0";
 comments[84] = "Id Pregunta: 10841. Examen GSI 2014";


//  Id pregunta: 10859 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  El ciclo de Deming es una estrategia de mejora continua de la calidad en la administraci&oacute;n de una organizaci&oacute;n, los 4 pasos de la estrategia son:";
 choices[85]= new Array();
 choices[85][0] = "Plan, Do, Construct, Approval (Planificar, Hacer, Construir, Aprobar).";
 choices[85][1] = "Plan, Do, Check, Act (Planificar, Hacer, Verificar, Actuar).";
 choices[85][2] = "Plan, Develop, Control, Anticipate (Planificar, Desarrollar, Controlar, Tener previsto).";
 choices[85][3] = "Plan, Deduct, Control, Approval (Planificar, Deducir, Controlar, Aprobar).";
 answers[85] = choices[85][1];
 units[85] = "88";
 comments[85] = "Id Pregunta: 10859. Examen GSI 2014";


//  Id pregunta: 11074 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  &iquest;A cual de las siguientes &aacute;reas debe la tecnolog&iacute;a ayudar a dar soporte durante la fase de Dise&ntilde;o del Servicio en el ciclo de Vida del Servicio?";
 choices[86]= new Array();
 choices[86][0] = "Dise&ntilde;o de hardware y software";
 choices[86][1] = "Dise&ntilde;o del entorno y dise&ntilde;o de los procesos";
 choices[86][2] = "Dise&ntilde;o de datos";
 choices[86][3] = "Todas ellas";
 answers[86] = choices[86][3];
 units[86] = "98";
 comments[86] = "Id Pregunta: 11074. ";


//  Id pregunta: 11077 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  &iquest;Qu&eacute; representa el Modelo de Servicio en V?";
 choices[87]= new Array();
 choices[87][0] = "Una estrategia para la realizaci&oacute;n con &eacute;xito de todos los proyectos de gesti&oacute;n de servicios";
 choices[87][1] = "La ruta de acceso para la Entrega y Soporte del Servicio para una eficiente y eficaz utilizaci&oacute;n de los recursos";
 choices[87][2] = "Los niveles de pruebas requeridos para la entrega del servicio";
 choices[87][3] = "La perspectiva empresarial que tienen los Clientes y Usuarios de los servicios";
 answers[87] = choices[87][2];
 units[87] = "98";
 comments[87] = "Id Pregunta: 11077. ";


//  Id pregunta: 11157 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  &iquest;Cu&aacute;l de los siguientes niveles de los Diagramas de Flujo de Datos no es correcto?";
 choices[88]= new Array();
 choices[88][0] = "Nivel 0: Diagrama de Contexto";
 choices[88][1] = "Nivel 1: Diagrama de Subsistemas";
 choices[88][2] = "Nivel 3: Diagrama de Funciones de los Sistemas";
 choices[88][3] = "Nivel 4: Diagrama de Procesos";
 answers[88] = choices[88][2];
 units[88] = "81";
 comments[88] = "Id Pregunta: 11157. ";


//  Id pregunta: 11355 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  En cuanto al uso de los Cost Driven Attributes (CDA) en COCOMO, seleccione la opci&oacute;n verdadera";
 choices[89]= new Array();
 choices[89][0] = "Para estimar el esfuerzo, se tiene en cuenta las l&iacute;neas de c&oacute;digo en miles de l&iacute;neas de c&oacute;digo (KLOC)";
 choices[89][1] = "Los Cost Driven Attributes (a, b, c y d) son los mismos para cada fase de construcci&oacute;n del software en el modelo avanzado.";
 choices[89][2] = "En el m&oacute;delo b&aacute;sico, se tiene en cuenta, adem&aacute;s del n&uacute;mero de l&iacute;neas, los Cost Driven Attributes (CDA) b&aacute;sicos";
 choices[89][3] = "Para estimar el esfuerzo, se utiliza a y b. Para estimar el tiempo se utliza c y d.";
 answers[89] = choices[89][3];
 units[89] = "89";
 comments[89] = "Id Pregunta: 11355. ";


//  Id pregunta: 11362 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Indique qu&eacute; definiciones son correctas de acuerdo a ITIL v3 para Gesti&oacute;n de Incidencias y Gesti&oacute;n de Problemas: 1. Gesti&oacute;n de Incidencias: restaura el servicio lo antes posible, sin importar la soluci&oacute;n aplicada; 2. Gesti&oacute;n de Problemas: procura dar soluciones definitivas para evitar la recurrencia de incidencias.";
 choices[90]= new Array();
 choices[90][0] = "Solo 1";
 choices[90][1] = "Solo 2";
 choices[90][2] = "Ambas";
 choices[90][3] = "Ninguna";
 answers[90] = choices[90][2];
 units[90] = "98";
 comments[90] = "Id Pregunta: 11362. ";


//  Id pregunta: 11371 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes afirmaciones sobre un sistema de gesti&oacute;n de configuraci&oacute;n (CMS) es la correcta?";
 choices[91]= new Array();
 choices[91][0] = "El CMS no debe contener datos corporativos acerca de los clientes y usuarios";
 choices[91][1] = "Puede haber m&aacute;s de un CMS";
 choices[91][2] = "No debe haber m&aacute;s de una base de datos de gesti&oacute;n de la configuraci&oacute;n (CMDB)";
 choices[91][3] = "Aunque una organizaci&oacute;n externalice sus servicios de TI tiene la necesidad de un CMS";
 answers[91] = choices[91][3];
 units[91] = "98";
 comments[91] = "Id Pregunta: 11371. ";


//  Id pregunta: 11372 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;les de los siguientes elementos estar&iacute;an almacenados en la biblioteca definitiva de medios (DML)?: 1. Copias de software comprado; 2. Copias de software desarrollado internamente; 3. Documentaci&oacute;n relevante de las licencias; 4. Calendario de cambios";
 choices[92]= new Array();
 choices[92][0] = "Todas las anteriores";
 choices[92][1] = "Solo 1 y 2";
 choices[92][2] = "Solo 3 y 4";
 choices[92][3] = "Solo 1, 2 y 3";
 answers[92] = choices[92][3];
 units[92] = "98";
 comments[92] = "Id Pregunta: 11372. ";


//  Id pregunta: 11405 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes situaciones es un objetivo del proceso de coordinaci&oacute;n del dise&ntilde;o?";
 choices[93]= new Array();
 choices[93][0] = "Asegurar que los objetivos de disponibilidad del servicio se cumplan";
 choices[93][1] = "Definir, documentar, acordar, monitorizar, medir y revisar los niveles de servicios";
 choices[93][2] = "Proveer y mantener una fuente &uacute;nica de informaci&oacute;n consistente sobre todos los servicios operativos";
 choices[93][3] = "Monitorizar y mejorar el desempe&ntilde;o de la etapa de dise&ntilde;o del ciclo de vida del servicio";
 answers[93] = choices[93][3];
 units[93] = "98";
 comments[93] = "Id Pregunta: 11405. ";


//  Id pregunta: 11406 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;En qu&eacute; libro de ITIL v3 se pueden encontrar las descripciones detalladas de la Gesti&oacute;n del Cat&aacute;logo de Servicios y Gesti&oacute;n de Suministradores?";
 choices[94]= new Array();
 choices[94][0] = "Estrategia del Servicio";
 choices[94][1] = "Dise&ntilde;o del Servicio";
 choices[94][2] = "Transici&oacute;n del Servicio";
 choices[94][3] = "Operaci&oacute;n del Servicio";
 answers[94] = choices[94][1];
 units[94] = "98";
 comments[94] = "Id Pregunta: 11406. ";


//  Id pregunta: 11407 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes opciones es la jerarqu&iacute;a que utiliza el proceso de Gesti&oacute;n del Conocimiento?";
 choices[95]= new Array();
 choices[95][0] = "Sabidur&iacute;a (Wisdom), Informaci&oacute;n (Information), Datos (Data), Conocimiento (Knowledge)";
 choices[95][1] = "Datos (Data), Informaci&oacute;n (Information), Conocimiento (Knowledge), Sabidur&iacute;a (Wisdom)";
 choices[95][2] = "Conocimiento (Knowledge), Sabidur&iacute;a (Wisdom), Informaci&oacute;n (Information), Datos (Data)";
 choices[95][3] = "Informaci&oacute;n (Information), Datos (Data), Conocimiento (Knowledge), Sabidur&iacute;a (Wisdom)";
 answers[95] = choices[95][1];
 units[95] = "98";
 comments[95] = "Id Pregunta: 11407. ";


//  Id pregunta: 11549 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Seg&uacute;n el modelo EFQM (versi&oacute;n 2013) &iquest;Cu&aacute;l de los siguientes no lo considera como un concepto fundamental de la excelencia?";
 choices[96]= new Array();
 choices[96][0] = "Desarrolar la capacidad de la organizaci&oacute;n.";
 choices[96][1] = "Gestionar con agilidad.";
 choices[96][2] = "Alcanzar el &eacute;xito mediante el talento de las personas.";
 choices[96][3] = "Todos los anteriores son conceptos fundamentales para la excelencia.";
 answers[96] = choices[96][3];
 units[96] = "87";
 comments[96] = "Id Pregunta: 11549. NULL";


//  Id pregunta: 11550 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l de los siguientes factores NO afecta al mantenimiento del software?";
 choices[97]= new Array();
 choices[97][0] = "Interdependencia entre los m&oacute;dulos.";
 choices[97][1] = "Especificaciones funcionales de los usuarios.";
 choices[97][2] = "La dependencia del programa de su entorno de desarrollo.";
 choices[97][3] = "Todos los factores anteriores afectan al mantenimieno del software.";
 answers[97] = choices[97][3];
 units[97] = "91";
 comments[97] = "Id Pregunta: 11550. NULL";


//  Id pregunta: 11560 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  En el dise&ntilde;o estructurado, el acoplamiento normal o simple entre dos m&oacute;dulos de software consiste en:";
 choices[98]= new Array();
 choices[98][0] = "Ambos m&oacute;dulos utilizan las mismas estructuras de datos.";
 choices[98][1] = "Un m&oacute;dulo genera informaci&oacute;n de control para el otro m&oacute;dulo.";
 choices[98][2] = "Un m&oacute;dulo se comunica con el otro mediante paso de par&aacute;metros.";
 choices[98][3] = "Son falsas todas las anteriores.";
 answers[98] = choices[98][2];
 units[98] = "84";
 comments[98] = "Id Pregunta: 11560. NULL";


//  Id pregunta: 11635 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  De los siguientes, se&ntilde;ale el peor acoplamiento entre m&oacute;dulos:";
 choices[99]= new Array();
 choices[99][0] = "De contenido";
 choices[99][1] = "Externo";
 choices[99][2] = "De control";
 choices[99][3] = "Normal";
 answers[99] = choices[99][0];
 units[99] = "84";
 comments[99] = "Id Pregunta: 11635. ";


