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

//  Id pregunta: 722 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no corresponde a la tecnolog&iacute;a de procedimiento anal&iacute;tico en l&iacute;nea (OLAP)?";
 choices[0]= new Array();
 choices[0][0] = "Proporciona respuestas r&aacute;pidas a consultas anal&iacute;ticas complejas e iterativas.";
 choices[0][1] = "Utiliza modelos de datos multidimensionales.";
 choices[0][2] = "Proporciona la velocidad y flexibilidad necesarias en tiempo real.";
 choices[0][3] = "Est&aacute; basado en modelos de datos jer&aacute;rquicos.";
 answers[0] = choices[0][3];
 units[0] = "68";
 comments[0] = "Id Pregunta: 722. Examen TIC MAP B 2004";


//  Id pregunta: 742 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  Entre las caracter&iacute;sticas de un Data Warehouse se encuentra que es un sistema:";
 choices[1]= new Array();
 choices[1][0] = "Independiente del tiempo.";
 choices[1][1] = "Integrado.";
 choices[1][2] = "Vol&aacute;til.";
 choices[1][3] = "Ninguna de las anteriores.";
 answers[1] = choices[1][1];
 units[1] = "68";
 comments[1] = "Id Pregunta: 742. Similar a examen TIC SS A 2003";


//  Id pregunta: 857 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas no es com&uacute;nmente utilizada para la extracci&oacute;n de informaci&oacute;n en un almac&eacute;n de datos?";
 choices[2]= new Array();
 choices[2][0] = "De consulta e informe.";
 choices[2][1] = "De an&aacute;lisis m&uacute;ltidimensional.";
 choices[2][2] = "De an&aacute;lisis predictivo.";
 choices[2][3] = "De inteligencia artificial.";
 answers[2] = choices[2][2];
 units[2] = "68";
 comments[2] = "Id Pregunta: 857. ";


//  Id pregunta: 861 AÃ±o de creación de pregunta: 2003-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l de los siguientes ejemplos de tipos de aprendizaje en miner&iacute;a de datos es no supervisado?";
 choices[3]= new Array();
 choices[3][0] = "Modelado y control.";
 choices[3][1] = "Sistemas de predicci&oacute;n.";
 choices[3][2] = "Descubrimiento de patrones.";
 choices[3][3] = "&Aacute;rboles de predicci&oacute;n.";
 answers[3] = choices[3][2];
 units[3] = "68";
 comments[3] = "Id Pregunta: 861. ";


//  Id pregunta: 888 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l no es una caracter&iacute;stica b&aacute;sica de los sistemas OLAP?";
 choices[4]= new Array();
 choices[4][0] = "Permite actualizar la informaci&oacute;n de manera r&aacute;pida y f&aacute;cil.";
 choices[4][1] = "Permiten ahondar en la jerarqu&iacute;a de los datos para acceder a los de m&aacute;s bajo nivel.";
 choices[4][2] = "Ofrecen una visi&oacute;n m&uacute;ltidimensional y jerarquizada de los datos.";
 choices[4][3] = "Son capaces de analizar tendencias a lo largo de per&iacute;odos de tiempo.";
 answers[4] = choices[4][0];
 units[4] = "68";
 comments[4] = "Id Pregunta: 888. ";


//  Id pregunta: 916 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Qu&eacute; es 'slice &amp; dice'?";
 choices[5]= new Array();
 choices[5][0] = "Una utilidad de las hojas de c&aacute;lculo para seleccionar filas y columnas.";
 choices[5][1] = "Una t&eacute;cnica OLAP que permite obtener subconjuntos de las vistas multidimensionales.";
 choices[5][2] = "Una t&eacute;cnica de representaci&oacute;n gr&aacute;fica de un sistema de informaci&oacute;n geogr&aacute;fica de acuerdo al modelo r&aacute;ster.";
 choices[5][3] = "Una t&eacute;cnica para redistribuir los flujos convergentes en un sistema de workflow.";
 answers[5] = choices[5][1];
 units[5] = "68";
 comments[5] = "Id Pregunta: 916. ";


//  Id pregunta: 927 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Qu&eacute; es la miner&iacute;a de datos?";
 choices[6]= new Array();
 choices[6][0] = "Es el an&aacute;lisis de datos que permite extraer informaci&oacute;n de bases de datos mediante la b&uacute;squeda manual de patrones y relaciones.";
 choices[6][1] = "Es el an&aacute;lisis de datos que permite extraer informaci&oacute;n de bases de datos mediante la b&uacute;squeda automatizada de patrones y relaciones.";
 choices[6][2] = "Es el an&aacute;lisis de datos que permite extraer informaci&oacute;n de bases de datos mediante la b&uacute;squeda aleatoria de patrones y relaciones.";
 choices[6][3] = "Nada de lo anterior es correcto.";
 answers[6] = choices[6][1];
 units[6] = "68";
 comments[6] = "Id Pregunta: 927. ";


//  Id pregunta: 928 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Qu&eacute; es la WFMC?";
 choices[7]= new Array();
 choices[7][0] = "Una organizaci&oacute;n para promover la investigaci&oacute;n en el campo de la microelectr&oacute;nica y los computadores";
 choices[7][1] = "Un c&oacute;mite de gesti&oacute;n de las distintas organizaciones mundiales existentes en torno al web";
 choices[7][2] = "Un consorcio para coordinar los distintos forums organizados en torno a la tecnolog&iacute;a multimedia emergente";
 choices[7][3] = "Una organizaci&oacute;n cuya misi&oacute;n es promover el uso del workflow";
 answers[7] = choices[7][3];
 units[7] = "71";
 comments[7] = "Id Pregunta: 928. ";


//  Id pregunta: 945 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Bill Inmon, padre del Data Warehousing, define &eacute;ste como:";
 choices[8]= new Array();
 choices[8][0] = "Una colecci&oacute;n de datos orientada a materias, integrada, no vol&aacute;til y variante en el tiempo, destinada a ayudar a la toma de decisiones de gesti&oacute;n.";
 choices[8][1] = "Un sistema autom&aacute;tico de ayuda a la decisi&oacute;n que implanta la teor&iacute;a de la decisi&oacute;n multicriterio discreta.";
 choices[8][2] = "Una secuencia convergente de refinamientos sobre un conjunto diverso de soluciones a un problema de gesti&oacute;n.";
 choices[8][3] = "Ninguna de las afirmaciones anteriores es correcta.";
 answers[8] = choices[8][0];
 units[8] = "68";
 comments[8] = "Id Pregunta: 945. ";


//  Id pregunta: 967 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Cuando empleamos el t&eacute;mino &lsquo;overlay&rsquo; en relaci&oacute;n con los sistemas de  informaci&oacute;n geogr&aacute;fica, nos estamos refiriendo a:";
 choices[9]= new Array();
 choices[9][0] = "Aquella operaci&oacute;n geogr&aacute;fica que se usa cuando el an&aacute;lisis de la informaci&oacute;n requiere que se identifique el &aacute;rea que rodea a cualquiera de las entidades: nodo, l&iacute;nea o superficie.";
 choices[9][1] = "Al trazado de caminos con distintas condiciones de comienzo, intermedias y finales.";
 choices[9][2] = "Aquella operaci&oacute;n espacial que consiste en obtener el pol&iacute;gono intersecci&oacute;n de dos &aacute;reas o pol&iacute;gonos.";
 choices[9][3] = "Este t&eacute;rmino no se empleaa nunca en relaci&oacute;n con los S.I.G.";
 answers[9] = choices[9][2];
 units[9] = "67";
 comments[9] = "Id Pregunta: 967. NULL";


//  Id pregunta: 1011 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  El data warehousing consiste b&aacute;sicamente en:";
 choices[10]= new Array();
 choices[10][0] = "En realizar un BPR (Business Processing Re-engineering) mediante el an&aacute;lisis automatizado de los datos corporativos.";
 choices[10][1] = "En automatizar los procesos de almacenamiento de datos de toda la corporaci&oacute;n. El sistema se encarga de situar los datos, de manera transparente, en los medios f&iacute;sicos m&aacute;s adecuados (discos, cintas, etc&eacute;tera) y de gestionar las copias de salvaguarda.";
 choices[10][2] = "En generar din&aacute;mica y autom&aacute;ticamente, a partir de datos extra&iacute;dos de todas las B.D. operacionales del sistema, otra base de datos donde se va almacenando informaci&oacute;n integrada, resumida, consolidada, multidimensional y significativa.";
 choices[10][3] = "En independizar los datos de la corporaci&oacute;n de su localizaci&oacute;n f&iacute;sica, creando un sistema de informaci&oacute;n virtual que integra todos los datos de la corporaci&oacute;n, incluso si est&aacute;n repartidos en diferentes sedes.";
 answers[10] = choices[10][2];
 units[10] = "68";
 comments[10] = "Id Pregunta: 1011. ";


//  Id pregunta: 1064 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  El workflow es una categor&iacute;a de aplicaciones dentro del trabajo en grupo o groupware que permite:";
 choices[11]= new Array();
 choices[11][0] = "Desarrollo de aplicaciones multiusuario";
 choices[11][1] = "Desarrollo de aplicaciones de coordinaci&oacute;n de procesos";
 choices[11][2] = "Desarrollo de aplicaciones de flujo de datos";
 choices[11][3] = "Desarrollo de aplicaciones de mail inteligente";
 answers[11] = choices[11][1];
 units[11] = "71";
 comments[11] = "Id Pregunta: 1064. ";


//  Id pregunta: 1176 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Indicar cu&aacute;l de las siguientes no es un tipo de georreferenciaci&oacute;n:";
 choices[12]= new Array();
 choices[12][0] = "Directa.";
 choices[12][1] = "Discreta.";
 choices[12][2] = "Indirecta.";
 choices[12][3] = "Posicional.";
 answers[12] = choices[12][3];
 units[12] = "67";
 comments[12] = "Id Pregunta: 1176. NULL";


//  Id pregunta: 1224 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  La informaci&oacute;n manejada por un Sistema de Informaci&oacute;n Geogr&aacute;fica que define las relaciones de tipo espacial existente entre los objetos modelizados, pertenece a la categor&iacute;a de:";
 choices[13]= new Array();
 choices[13][0] = "Informaci&oacute;n posicional.";
 choices[13][1] = "Informaci&oacute;n tem&aacute;tica.";
 choices[13][2] = "Informaci&oacute;n topol&oacute;gica.";
 choices[13][3] = "No existe tal tipo de informaci&oacute;n.";
 answers[13] = choices[13][2];
 units[13] = "67";
 comments[13] = "Id Pregunta: 1224. NULL";


//  Id pregunta: 1288 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  MIGRA";
 choices[14]= new Array();
 choices[14][0] = "Es una norma del CSIAE, que desarrolla SICRES en detalle.";
 choices[14][1] = "Es un proyecto de AENOR para intercambio de informacion entre SIG.";
 choices[14][2] = "Es una herramienta software del los ministerios de Administraciones P&uacute;blicas e Interior que permite el control de la inmigraci&oacute;n ilegal a nuestro pais.";
 choices[14][3] = "Ninguna de las anteriores.";
 answers[14] = choices[14][1];
 units[14] = "67";
 comments[14] = "Id Pregunta: 1288. NULL";


//  Id pregunta: 1314 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Refiri&eacute;ndonos a los Sistemas de Informaci&oacute;n Geogr&aacute;fica (SIG), podemos afirmar que:";
 choices[15]= new Array();
 choices[15][0] = "Si la informaci&oacute;n est&aacute; almacenada seg&uacute;n el modelo de datos vectorial, las representaciones que se obtienen son menos precisas y de peor calidad que las del modelo r&aacute;ster.";
 choices[15][1] = "Los procedimientos de captura de la informaci&oacute;n gr&aacute;fica son diferentes, seg&uacute;n se trate de entidades planim&eacute;tricas o de entidades topogr&aacute;ficas.";
 choices[15][2] = "Si se va a utilizar en aplicaciones en las que sea esencial el empleo de objetos geogr&aacute;ficos, el modelo de datos r&aacute;ster es el m&aacute;s adecuado.";
 choices[15][3] = "Los atributos alfanum&eacute;ricos, que proporcionan informaci&oacute;n sobre las caracter&iacute;sticas de las entidades gr&aacute;ficas, se almacenan en formato r&aacute;ster.";
 answers[15] = choices[15][1];
 units[15] = "67";
 comments[15] = "Id Pregunta: 1314. NULL";


//  Id pregunta: 1340 AÃ±o de creación de pregunta: 2009-01-01
 questions[16]= "17)  Se&ntilde;alar cu&aacute;l de las siguientes no es una operaci&oacute;n anal&iacute;tica b&aacute;sica en un sistema OLAP:";
 choices[16]= new Array();
 choices[16][0] = "Actualizaci&oacute;n.";
 choices[16][1] = "Agregaci&oacute;n.";
 choices[16][2] = "Dril-down.";
 choices[16][3] = "Slice-Dice.";
 answers[16] = choices[16][0];
 units[16] = "68";
 comments[16] = "Id Pregunta: 1340. ";


//  Id pregunta: 1344 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Se&ntilde;ale el modelo de miner&iacute;a de datos que comprueba la validez de las hip&oacute;tesis establecidas por el usuario.";
 choices[17]= new Array();
 choices[17][0] = "Modelo de descubrimiento.";
 choices[17][1] = "Modelo de verificaci&oacute;n.";
 choices[17][2] = "Modelo predictivo.";
 choices[17][3] = "Modelo de resumen.";
 answers[17] = choices[17][1];
 units[17] = "68";
 comments[17] = "Id Pregunta: 1344. ";


//  Id pregunta: 1379 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Un almac&eacute;n de datos o &quot;data warehouse&quot;:";
 choices[18]= new Array();
 choices[18][0] = "Integra datos de diferentes sistemas de informaci&oacute;n de la organizaci&oacute;n para permitir su an&aacute;lisis posterior por la Direcci&oacute;n.";
 choices[18][1] = "Recopila datos de diferentes &quot;data marts&quot; para permitir su an&aacute;lisis por la Direcci&oacute;n mediante herramientas OLAP.";
 choices[18][2] = "Integra todas las bases de datos que existen en una organizaci&oacute;n para su consulta por la Direcci&oacute;n.";
 choices[18][3] = "Es una base de datos que contiene metainformaci&oacute;n sobre las bases de datos que existen en la organizaci&oacute;n.";
 answers[18] = choices[18][0];
 units[18] = "68";
 comments[18] = "Id Pregunta: 1379. ";


//  Id pregunta: 1408 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Una base de datos multidimensional:";
 choices[19]= new Array();
 choices[19][0] = "Es igual que una relacional, solo que con sistema de indices inversos duplicados que acelera los accesos en un 40%.";
 choices[19][1] = "Est&aacute; formado por la relaci&oacute;n existente entre tablas de hechos y dimensiones.";
 choices[19][2] = "El t&eacute;rmino se aplica a las bases de datos con tecnolog&iacute;a ISAM, por las m&uacute;ltiples posibilidades que ofrecen.";
 choices[19][3] = "&Uacute;nicamente existe cundo las comunicaciones con el servidor han de ser as&iacute;ncronas en el tiempo.";
 answers[19] = choices[19][1];
 units[19] = "68";
 comments[19] = "Id Pregunta: 1408. ";


//  Id pregunta: 1412 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Una de las caracter&iacute;sticas de un sistema OLTP es: ";
 choices[20]= new Array();
 choices[20][0] = "Homogeneidad de datos almacenados.";
 choices[20][1] = "Alto rendimiento en las operaciones de inserci&oacute;n y actualizaci&oacute;n.";
 choices[20][2] = "Total organizaci&oacute;n.";
 choices[20][3] = "Facilidad para responder a consultas complejas.";
 answers[20] = choices[20][1];
 units[20] = "68";
 comments[20] = "Id Pregunta: 1412. ";


//  Id pregunta: 1552 AÃ±o de creación de pregunta: 2003-01-01
 questions[21]= "22)  &iquest;C&uacute;al de las siguientes afirmaciones sobre OLAP es falsa?";
 choices[21]= new Array();
 choices[21][0] = "Pueden presentar vistas de un n&uacute;mero reducido de dimensiones elegido por el usuario.";
 choices[21][1] = "Son capaces de analizar tendencias a lo largo de per&iacute;odos de tiempo.";
 choices[21][2] = "Permiten ahondar en la jerarqu&iacute;a de los datos para acceder a los de m&aacute;s bajo nivel.";
 choices[21][3] = "No pueden existir bases de datos OLAP relacionales.";
 answers[21] = choices[21][3];
 units[21] = "68";
 comments[21] = "Id Pregunta: 1552. ";


//  Id pregunta: 1567 AÃ±o de creación de pregunta: 2003-01-01
 questions[22]= "23)  &iquest;Cu&aacute;l no es una caracter&iacute;stica esencial del Datawarehouse?";
 choices[22]= new Array();
 choices[22][0] = "Orientado por temas";
 choices[22][1] = "Independiente del tiempo";
 choices[22][2] = " No vol&aacute;til";
 choices[22][3] = "Integrado";
 answers[22] = choices[22][1];
 units[22] = "71";
 comments[22] = "Id Pregunta: 1567. ";


//  Id pregunta: 1569 AÃ±o de creación de pregunta: 2003-01-01
 questions[23]= "24)  &iquest;Cu&aacute;l no es un modelo de extracci&oacute;n de datos en miner&iacute;a de datos?";
 choices[23]= new Array();
 choices[23][0] = " De verificaci&oacute;n.";
 choices[23][1] = " De descubrimiento.";
 choices[23][2] = "Jer&aacute;rquico.";
 choices[23][3] = "Predictivo.";
 answers[23] = choices[23][2];
 units[23] = "68";
 comments[23] = "Id Pregunta: 1569. ";


//  Id pregunta: 1651 AÃ±o de creación de pregunta: 2004-01-01
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes t&eacute;rminos no son herramientas o plataformas de e-learning ?";
 choices[24]= new Array();
 choices[24][0] = "aTutor";
 choices[24][1] = "WebCT";
 choices[24][2] = "eSchool";
 choices[24][3] = "Blackboard";
 answers[24] = choices[24][2];
 units[24] = "66";
 comments[24] = "Id Pregunta: 1651. ";


//  Id pregunta: 1652 AÃ±o de creación de pregunta: 2004-01-01
 questions[25]= "26)  &iquest;Las siglas ADL qu&eacute; significan desde la perspectiva del e-learning?";
 choices[25]= new Array();
 choices[25][0] = "Advanced Distributed Learning";
 choices[25][1] = "Advanced Distanced Learning";
 choices[25][2] = "No tienen ning&uacute;n significado desde la perspectiva del e-learning";
 choices[25][3] = "Ninguna de las anteriores";
 answers[25] = choices[25][0];
 units[25] = "66";
 comments[25] = "Id Pregunta: 1652. ";


//  Id pregunta: 1687 AÃ±o de creación de pregunta: 2004-01-01
 questions[26]= "27)  Si comparamos una base de datos relacional y otra multidimensional, es FALSO que:";
 choices[26]= new Array();
 choices[26][0] = "Las BDR son mejores que las BDM para obtener vistas de unos datos en funci&oacute;n de otros.";
 choices[26][1] = "Las BDR est&aacute;n optimizadas para la inserci&oacute;n de registros y el control concurrente de usuarios.";
 choices[26][2] = "Las BDM tienen informaci&oacute;n m&aacute;s consistente que las BDR.";
 choices[26][3] = "Las BDM son mejores para el estudio a alto nivel de los datos, ya que ofrecen mayor flexibilidad y rapidez de acceso para el &aacute;nalisis de los mismos.";
 answers[26] = choices[26][0];
 units[26] = "68";
 comments[26] = "Id Pregunta: 1687. ";


//  Id pregunta: 1691 AÃ±o de creación de pregunta: 2004-01-01
 questions[27]= "28)  Respecto a las herramientas, t&eacute;cnicas y terminolog&iacute;a OLAP indique cu&aacute;l de las siguientes afirmaciones es falsa.";
 choices[27]= new Array();
 choices[27][0] = "Trata de la s&iacute;ntesis, el an&aacute;lisis y la consolidaci&oacute;n din&aacute;mica de grandes vol&uacute;menes de datos multidimensionales.";
 choices[27][1] = "Las herramientas OLAP m&aacute;s eficientes en tiempo de respuesta trabajan sobre base de datos relacionales.";
 choices[27][2] = "Las bases de datos multidimensionales almacenan los datos de forma parecida a como lo hace una hoja de c&aacute;lculo aunque, a diferencia de &eacute;stas, es com&uacute;n que utilicen m&aacute;s de dos dimensiones.";
 choices[27][3] = "Se puede en establecer una jerarqu&iacute;a de niveles en cada dimensi&oacute;n para representar diversos grados de detalle.";
 answers[27] = choices[27][1];
 units[27] = "68";
 comments[27] = "Id Pregunta: 1691. ";


//  Id pregunta: 1805 AÃ±o de creación de pregunta: 2006-01-01
 questions[28]= "29)  La iniciativa ADL (Advanced Distributed Learning) public&oacute; en el a&ntilde;o 2000 un modelo que trata de estandarizar los contenidos formativos digitales y que se conoce como";
 choices[28]= new Array();
 choices[28][0] = "SCORM";
 choices[28][1] = "B-Learning";
 choices[28][2] = "DFC";
 choices[28][3] = "ADL 2000";
 answers[28] = choices[28][0];
 units[28] = "66";
 comments[28] = "Id Pregunta: 1805. ";


//  Id pregunta: 1806 AÃ±o de creación de pregunta: 2006-01-01
 questions[29]= "30)  Dentro del terreno del e-learning, se&ntilde;ale qu&eacute; opci&oacute;n describe el &quot;blended learning&quot; de forma m&aacute;s exacta:";
 choices[29]= new Array();
 choices[29][0] = "Aquel modo de aprender que combina la ense&ntilde;anza presencial con la tecnolog&iacute;a no presencial";
 choices[29][1] = "Aprendizaje e-learning mediante combinaci&oacute;n de informaci&oacute;n alfanum&eacute;rica, gr&aacute;fica e hipertextual";
 choices[29][2] = "Aprendizaje mediante la profusi&oacute;n de elementos multimedia";
 choices[29][3] = "Aprendizaje basado en la mezcla cultural del alumnado, con experiencias diversas";
 answers[29] = choices[29][0];
 units[29] = "66";
 comments[29] = "Id Pregunta: 1806. &quot;blended learning&quot; = aprendizaje semipresencial";


//  Id pregunta: 1812 AÃ±o de creación de pregunta: 2006-01-01
 questions[30]= "31)  En el campo de los sistemas de informaci&oacute;n geogr&aacute;fica, un IDE es:";
 choices[30]= new Array();
 choices[30][0] = "Un conjunto de tecnolog&iacute;as, est&aacute;ndares y recursos humanos necesarios para adquirir, procesar, almacenar, distribuir y mejorar la utilizaci&oacute;n de la informaci&oacute;n geogr&aacute;fica.";
 choices[30][1] = "Un entorno de desarrollo integrado para la elaboraci&oacute;n de aplicaciones que utilizan informaci&oacute;n geogr&aacute;fica.";
 choices[30][2] = "Una infraestructura de datos empresariales, que permite la unificaci&oacute;n de sistemas de informaci&oacute;n geogr&aacute;fica con topolog&iacute;a distribuida.";
 choices[30][3] = "Un sistema de informaci&oacute;n cartogr&aacute;fica como Arc/Info y Arc/View.";
 answers[30] = choices[30][0];
 units[30] = "67";
 comments[30] = "Id Pregunta: 1812. NULL";


//  Id pregunta: 1818 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  De acuerdo al Garner Group, la transformaci&oacute;n de los datos de la compa&ntilde;&iacute;a en conocimiento para obtener una ventaja competitiva se define como:";
 choices[31]= new Array();
 choices[31][0] = "Business Intelligence.";
 choices[31][1] = "Data Mining.";
 choices[31][2] = "ETL.";
 choices[31][3] = "Balanced Score Card.";
 answers[31] = choices[31][0];
 units[31] = "68";
 comments[31] = "Id Pregunta: 1818. ";


//  Id pregunta: 1822 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  Entre los modelos t&iacute;picos de bases de datos multidimensionales se encuentra:";
 choices[32]= new Array();
 choices[32][0] = "Modelo en estrella.";
 choices[32][1] = "El modelo de copo de nieve.";
 choices[32][2] = "Modelo constelaci&oacute;n.";
 choices[32][3] = "Todos los anteriores son correctos.";
 answers[32] = choices[32][3];
 units[32] = "68";
 comments[32] = "Id Pregunta: 1822. ";


//  Id pregunta: 1830 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  &iquest;Qu&eacute; son los Datamarts o supermercados de datos?";
 choices[33]= new Array();
 choices[33][0] = "Proporcionan informaci&oacute;n de c&oacute;mo se ha construido el almac&eacute;n de datos.";
 choices[33][1] = "Son datos muy resumidos para consultas frecuentes.";
 choices[33][2] = "Son lugares de Internet donde por una peque&ntilde;a cuota se puede obtener la  informaci&oacute;n solicitada.";
 choices[33][3] = "Son datos que est&aacute;n disponibles bajo una licencia Creative Commons.";
 answers[33] = choices[33][1];
 units[33] = "68";
 comments[33] = "Id Pregunta: 1830. ";


//  Id pregunta: 1843 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  &iquest;Con que categoria de software esta m&aacute;s relacionado el BPM?";
 choices[34]= new Array();
 choices[34][0] = "Workflow";
 choices[34][1] = "B2B";
 choices[34][2] = "B2C";
 choices[34][3] = "SCM";
 answers[34] = choices[34][0];
 units[34] = "71";
 comments[34] = "Id Pregunta: 1843. ";


//  Id pregunta: 1848 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  ESTROFA:";
 choices[35]= new Array();
 choices[35][0] = "Especificaciones para el tratamiento de flujos automatizados";
 choices[35][1] = "Elaboradas por la COAXI hoy Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[35][2] = "Elaboradas con el fin de homogeneizar terminolog&iacute;a y asesorar a los compradores p&uacute;blicos a la hora de la adquisici&oacute;n de productos de Data Warehouse";
 choices[35][3] = "Todos los anteriores";
 answers[35] = choices[35][0];
 units[35] = "71";
 comments[35] = "Id Pregunta: 1848. ";


//  Id pregunta: 3907 AÃ±o de creación de pregunta: 2003-01-01
 questions[36]= "37)  &iquest;Cu&aacute;l no es un objetivo del uso de t&eacute;cnicas CRM?";
 choices[36]= new Array();
 choices[36][0] = "Usar las relaciones cliente-proveedor para aumentar los beneficios";
 choices[36][1] = "Usar las diferentes fuentes de informaci&oacute;n e integrarlas para proporcionar un servicio excelente";
 choices[36][2] = "Poner en marcha una soluci&oacute;n estrat&eacute;gica proactiva";
 choices[36][3] = "Contar con soluciones parciales para cada etapa de la relaci&oacute;n con los ciudadanos";
 answers[36] = choices[36][3];
 units[36] = "65";
 comments[36] = "Id Pregunta: 3907. ";


//  Id pregunta: 4071 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  &iquest;Cu&aacute;l de las siguientes categorias de software no estan incluidas tipicamente en un ERP ?";
 choices[37]= new Array();
 choices[37][0] = "Gesti&oacute;n de Nomina";
 choices[37][1] = "Gesti&oacute;n de RRHH";
 choices[37][2] = "Gesti&oacute;n de Contabilidad";
 choices[37][3] = "Gesti&oacute;n de Clientes";
 answers[37] = choices[37][3];
 units[37] = "65";
 comments[37] = "Id Pregunta: 4071. ";


//  Id pregunta: 4359 AÃ±o de creación de pregunta: 2007-01-01
 questions[38]= "39)  Una de las caracter&iacute;sticas de un sistema OLTP es:";
 choices[38]= new Array();
 choices[38][0] = "Homogeneidad de datos almacenados.";
 choices[38][1] = "Alto rendimiento en las operaciones de inserci&oacute;n y actualizaci&oacute;n.";
 choices[38][2] = "Total organizaci&oacute;n.";
 choices[38][3] = "Facilidad para responder a consultas complejas.";
 answers[38] = choices[38][1];
 units[38] = "68";
 comments[38] = "Id Pregunta: 4359. ";


//  Id pregunta: 4361 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  Cuando sobre un Data Warehouse llevamos a cabo un proceso de Data-Minig, donde la b&uacute;squeda se dirige hacia la categorizaci&oacute;n de los registros en grupos para detectar patrones aplicables, o extraer relaciones impl&iacute;citas en los datos, estamos aplicando un modelo...";
 choices[39]= new Array();
 choices[39][0] = "De validaci&oacute;n.";
 choices[39][1] = "De verificaci&oacute;n.";
 choices[39][2] = "De descubrimiento.";
 choices[39][3] = "Predictivo.";
 answers[39] = choices[39][2];
 units[39] = "68";
 comments[39] = "Id Pregunta: 4361. ";


//  Id pregunta: 4440 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  Dentro de Ia tecnolog&iacute;a de Sistemas de Informaci&oacute;n Geogr&aacute;fica, si la realidad se representa mediante figuras elementales geom&eacute;tricas, normalmente cuadradas, que forman un mosaico regular, estamos hablando de:";
 choices[40]= new Array();
 choices[40][0] = "Proyecci&oacute;n.";
 choices[40][1] = "R&aacute;ster.";
 choices[40][2] = "Vector.";
 choices[40][3] = "Imagen multiespectral.";
 answers[40] = choices[40][1];
 units[40] = "67";
 comments[40] = "Id Pregunta: 4440. NULL";


//  Id pregunta: 4462 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  &iquest;En qu&eacute; modelo de representaci&oacute;n de datos espaciales las distintas unidades tem&aacute;ticas se definen por las coordenadas de sus bordes?";
 choices[41]= new Array();
 choices[41][0] = "R&aacute;ster.";
 choices[41][1] = "Vectorial.";
 choices[41][2] = "Sinusoidal.";
 choices[41][3] = "Vertical.";
 answers[41] = choices[41][1];
 units[41] = "67";
 comments[41] = "Id Pregunta: 4462. NULL";


//  Id pregunta: 4518 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  En relaci&oacute;n con los entornos OLAP, indique cu&aacute;l de las siguientes afirmaciones es verdadera:";
 choices[42]= new Array();
 choices[42][0] = "Los sistemas MOLAP son capaces de almacenar mas informaci&oacute;n que los ROLAP.";
 choices[42][1] = "Los sistemas ROLAP son multidimensionales.";
 choices[42][2] = "Los sistemas ROLAP son capaces de almacenar m&aacute;s informaci&oacute;n que los MOLAP.";
 choices[42][3] = "Los sistemas MOLAP son relacionales.";
 answers[42] = choices[42][2];
 units[42] = "68";
 comments[42] = "Id Pregunta: 4518. ";


//  Id pregunta: 4519 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  Una herramienta inform&aacute;tica especialmente dise&ntilde;ada para ayudar a los usuarios a trabajar en colaboraci&oacute;n de la forma mas eficaz es";
 choices[43]= new Array();
 choices[43][0] = "Un Data-Warehouse";
 choices[43][1] = "Un Workflow";
 choices[43][2] = "Un Groupware";
 choices[43][3] = "Un OLAP";
 answers[43] = choices[43][2];
 units[43] = "71";
 comments[43] = "Id Pregunta: 4519. ";


//  Id pregunta: 4573 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  Indica cual de las siguientes expresiones NO es correcta en un entorno de e-Learning:";
 choices[44]= new Array();
 choices[44][0] = "el LMS se encarga de gestionar los usuarios, los cursos y as herramientas de comunicaci&oacute;n.";
 choices[44][1] = "dos componentes fundamentales en este tipo de ense&ntilde;anza son el LMS y el courseware.";
 choices[44][2] = "se pueden establecer comunicaciones tanto s&iacute;ncronas como as&iacute;ncronas.";
 choices[44][3] = "para compatibilizar LMS y courseware de distintos fabricantes se utilizan los est&aacute;ndares ADL SCORM y UDDI.";
 answers[44] = choices[44][3];
 units[44] = "66";
 comments[44] = "Id Pregunta: 4573. ";


//  Id pregunta: 4623 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  En un entorno de informaci&oacute;n geogr&aacute;fica, GIS, indicar cu&aacute;l de las siguientes expresiones es la correcta:";
 choices[45]= new Array();
 choices[45][0] = "El DM es la herramienta que gestiona la capa superior del GIS, el metamodelo de los datos.";
 choices[45][1] = "El DM es una herramienta de alcance mas amplio que el GIS.";
 choices[45][2] = "El DM es una herramienta que explota los datos que genera un GIS.";
 choices[45][3] = "Ninguna herramienta DM puede trabajar directarmente con las bases de datos de un GIS";
 answers[45] = choices[45][2];
 units[45] = "67";
 comments[45] = "Id Pregunta: 4623. NULL";


//  Id pregunta: 4685 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  En el &aacute;mbito de la miner&iacute;a de datos &iquest;c&oacute;mo se llama la herramienta con la que se establecen relaciones entre elementos?";
 choices[46]= new Array();
 choices[46][0] = "Clasificaci&oacute;n.";
 choices[46][1] = "Asociaci&oacute;n.";
 choices[46][2] = "Agrupaci&oacute;n.";
 choices[46][3] = "Secuenciaci&oacute;n.";
 answers[46] = choices[46][2];
 units[46] = "68";
 comments[46] = "Id Pregunta: 4685. Examen 2006 JCYL";


//  Id pregunta: 4791 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l de los siguientes NO es uno de los 14 paquetes de nivel superior que se establecen en la norma 19115 de ISO (International Standards Organization) sobre metadatos de un sistema GIS (Geographycal Information System)?";
 choices[47]= new Array();
 choices[47][0] = "Informaci&oacute;n sobre restricciones.";
 choices[47][1] = "Informaci&oacute;n sobre formato.";
 choices[47][2] = "Informaci&oacute;n sobre extensi&oacute;n.";
 choices[47][3] = "Informaci&oacute;n sobre contenidos.";
 answers[47] = choices[47][1];
 units[47] = "67";
 comments[47] = "Id Pregunta: 4791. TIC A1, examen 2006";


//  Id pregunta: 5000 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  El est&aacute;ndar WMS (Web Map Service), que permite publicar cartograf&iacute;a en Internet, &iquest;a cu&aacute;l de las siguientes organizaciones pertenece?:";
 choices[48]= new Array();
 choices[48][0] = "ISO (International Standards Organization).";
 choices[48][1] = "OGC (Open Geospatial Consortium).";
 choices[48][2] = "FGDC (Federal Geographic Data Committee).";
 choices[48][3] = "Consejo Superior Geogr&aacute;fico.";
 answers[48] = choices[48][1];
 units[48] = "67";
 comments[48] = "Id Pregunta: 5000. Examen TIC A1 2007";


//  Id pregunta: 5030 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  Los sistemas de almacenes de bases de datos pueden implementarse utilizando diferentes tipos de esquemas f&iacute;sicos : ROLAP, MOLAP, HOLAP,etc. &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[49]= new Array();
 choices[49][0] = "En ROLAP, f&iacute;sicamente el almac&eacute;n de datos se construye sobre estructuras basadas en matrices multidimensionales.";
 choices[49][1] = "Ejemplos de sistemas MOLAP son: Informix Metacube u Oracle Discover.";
 choices[49][2] = "Ejemplos de sistema ROLAP son: Oracle Express o el Hyperion Enterprise.";
 choices[49][3] = "En MOLAP, f&iacute;sicamente el almac&eacute;n de datos se construye sobre estructuras basadas en matrices multidimensionales, produci&eacute;ndose correspondencia entre el nivel l&oacute;gico y el nivel f&iacute;sico lo que en general aporta especializaci&oacute;n que se traduce generalmente en mayor eficiencia.";
 answers[49] = choices[49][3];
 units[49] = "68";
 comments[49] = "Id Pregunta: 5030. Examen TIC A 2007";


//  Id pregunta: 5581 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes plataformas de e-learning NO es libre?";
 choices[50]= new Array();
 choices[50][0] = "Atutor";
 choices[50][1] = "ILIAS";
 choices[50][2] = "LON-CAPA";
 choices[50][3] = "Blackboard";
 answers[50] = choices[50][3];
 units[50] = "66";
 comments[50] = "Id Pregunta: 5581. ";


//  Id pregunta: 5712 AÃ±o de creación de pregunta: 2009-01-01
 questions[51]= "52)  Referido a OLAP, &iquest;cu&aacute;l es el significado m&aacute;s aproximado de Drill-Across?";
 choices[51]= new Array();
 choices[51][0] = "Navegar hacia un mayor nivel de agregaci&oacute;n.";
 choices[51][1] = "Moverse entre cubos.";
 choices[51][2] = "Descender a un menor nivel de agregaci&oacute;n.";
 choices[51][3] = "Elecci&oacute;n del n&uacute;mero de dimensiones a visualizar.";
 answers[51] = choices[51][1];
 units[51] = "68";
 comments[51] = "Id Pregunta: 5712. ";


//  Id pregunta: 5734 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  &iquest;Cu&aacute;ntos interfaces tiene el modelo de referencia de workflow de WfMC?";
 choices[52]= new Array();
 choices[52][0] = "1";
 choices[52][1] = "3";
 choices[52][2] = "5";
 choices[52][3] = "7";
 answers[52] = choices[52][2];
 units[52] = "71";
 comments[52] = "Id Pregunta: 5734. ";


//  Id pregunta: 5735 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes no corresponde a una interfase del modelo de referencia de workflow de WfMC?:";
 choices[53]= new Array();
 choices[53][0] = "Herramientas de definici&oacute;n de procesos";
 choices[53][1] = "Funciones de representaci&oacute;n";
 choices[53][2] = "Herramientas de administraci&oacute;n y monitorizaci&oacute;n";
 choices[53][3] = "Aplicaciones invocadas";
 answers[53] = choices[53][1];
 units[53] = "71";
 comments[53] = "Id Pregunta: 5735. ";


//  Id pregunta: 5874 AÃ±o de creación de pregunta: 2009-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as es usada espec&iacute;ficamente por el CRM de tipo anal&iacute;tico?";
 choices[54]= new Array();
 choices[54][0] = "Software de gesti&oacute;n de incidencias";
 choices[54][1] = "Software de gesti&oacute;n de correo electr&oacute;nico entrante y saliente";
 choices[54][2] = "Datawarehouse";
 choices[54][3] = "Call-center: software de visi&oacute;n unificada de clientes";
 answers[54] = choices[54][2];
 units[54] = "65";
 comments[54] = "Id Pregunta: 5874. MAP 2008 A1";


//  Id pregunta: 6173 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  Dentro de  una soluci&oacute;n e-learning, donde se encuadrar&iacute;a un sistema LMS:";
 choices[55]= new Array();
 choices[55][0] = "Plataforma de formaci&oacute;n.";
 choices[55][1] = "Contenidos de formaci&oacute;n.";
 choices[55][2] = "Herramientas de comunicaci&oacute;n.";
 choices[55][3] = "Ninguna de las anteriores.";
 answers[55] = choices[55][0];
 units[55] = "66";
 comments[55] = "Id Pregunta: 6173. ";


//  Id pregunta: 6332 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  Si los datos contienen valores 'NULL' (valores desconocidos) antes de realizar una consulta de data mining:";
 choices[56]= new Array();
 choices[56][0] = "Debo eliminarlos.";
 choices[56][1] = "S&oacute;lo se eliminan si son pocos. Si son muchos se utiliza alguna t&eacute;cnica para predecir el valor de esos nulos y trabajar con las aproximaciones obtenidas.";
 choices[56][2] = "En la fase de preproceso se les asignar&aacute; un valor por defecto.";
 choices[56][3] = "Se asigna el valor de la media multiplicado por 2.";
 answers[56] = choices[56][1];
 units[56] = "68";
 comments[56] = "Id Pregunta: 6332. ";


//  Id pregunta: 6334 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  Si el objetivo al plantear una consulta de data mining es obtener reglas de predicci&oacute;n orientadas a la toma de decisi&oacute;n:";
 choices[57]= new Array();
 choices[57][0] = "Es indiferente que t&eacute;cnica se utilice.";
 choices[57][1] = "Se debe disponer de una buena herramienta de c&aacute;lculo de asociaciones.";
 choices[57][2] = "Se tiene que distinguir entre la variable que se va a  predecir y las variables que se uilizar&aacute;n para tal predicci&oacute;n.";
 choices[57][3] = "No hay en el estado actual de la tecnolog&iacute;a data mining ning&uacute;n enfoque adecuado para ese problema.";
 answers[57] = choices[57][2];
 units[57] = "68";
 comments[57] = "Id Pregunta: 6334. ";


//  Id pregunta: 6335 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  En un data warehouse:";
 choices[58]= new Array();
 choices[58][0] = "Jam&aacute;s se debe normalizar ninguna tabla.";
 choices[58][1] = "Es normal que algunas tablas de dimensi&oacute;n se desnormalicen buscando mayor eficiencia.";
 choices[58][2] = "Las tablas se mantienen en la m&aacute;xima forma normal para no perder consistencia dado el alto n&uacute;mero de operaciones de modificaci&oacute;n que se realizan.";
 choices[58][3] = "Todas las respuestas son falsas.";
 answers[58] = choices[58][1];
 units[58] = "68";
 comments[58] = "Id Pregunta: 6335. ";


//  Id pregunta: 6337 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  Para poder realizar consultas de OLAP a distintos niveles de generalizaci&oacute;n es conveniente:";
 choices[59]= new Array();
 choices[59][0] = "Haber definido en el dise&ntilde;o multidimensional jerarqu&iacute;as.";
 choices[59][1] = "No se pueden realizar consultas de OLAP a distintos niveles de generalizaci&oacute;n.";
 choices[59][2] = "Que se disponga del operador GENERALIZATION en el gestor.";
 choices[59][3] = "Si no se dispone del operador de GENERATE no se pueden realizar este tipo de consultas.";
 answers[59] = choices[59][0];
 units[59] = "68";
 comments[59] = "Id Pregunta: 6337. ";


//  Id pregunta: 7169 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  Los sistemas OLTP se utilizan para:";
 choices[60]= new Array();
 choices[60][0] = "Almacenar gran cantidad de datos de forma integrada, no vol&aacute;til y variable en el tiempo.";
 choices[60][1] = "Generar informes para la direcci&oacute;n.";
 choices[60][2] = "Captura de datos heterog&eacute;neos y sin organizaci&oacute;n de diferentes fuentes.";
 choices[60][3] = "Agiliza la consulta de grandes vol&uacute;menes de datos.";
 answers[60] = choices[60][2];
 units[60] = "68";
 comments[60] = "Id Pregunta: 7169. Examen TIC B 2009";


//  Id pregunta: 7297 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  Indique cu&aacute;l de los siguientes es SW libre para miner&iacute;a de datos:";
 choices[61]= new Array();
 choices[61][0] = "SAS.";
 choices[61][1] = "Clementine.";
 choices[61][2] = "Weka.";
 choices[61][3] = "SPSS.";
 answers[61] = choices[61][2];
 units[61] = "68";
 comments[61] = "Id Pregunta: 7297. NULL";


//  Id pregunta: 8196 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  Se&ntilde;ale cu&aacute;l NO es uno de los conjuntos de metadatos que manejan los SIG (Sistemas de Informaci&oacute;n Geogr&aacute;fica): ";
 choices[62]= new Array();
 choices[62][0] = "Metadatos de explotaci&oacute;n. ";
 choices[62][1] = "Metadatos de descubrimiento. ";
 choices[62][2] = "Metadatos de exploraci&oacute;n. ";
 choices[62][3] = "Metadatos de representaci&oacute;n.";
 answers[62] = choices[62][3];
 units[62] = "67";
 comments[62] = "Id Pregunta: 8196. Examen TIC A1 2010";


//  Id pregunta: 8240 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  Seg&uacute;n el modelo de referencia de workflow de la WfMC (Workflow Management Coalition), &iquest;cu&aacute;l de los siguientes elementos interpreta la descripci&oacute;n de los workflows y controla las diferentes instancias de &eacute;stos, as&iacute; como a&ntilde;ade elementos a la lista de trabajo de los usuarios e invoca las aplicaciones necesarias? ";
 choices[63]= new Array();
 choices[63][0] = "El motor de workflow (Workflow engine).";
 choices[63][1] = "La interfaz de programaci&oacute;n de aplicaciones de workflow (WAPI o Workflow Application Programming Interface).";
 choices[63][2] = "El cliente de workflow (Workflow client)";
 choices[63][3] = "El servicio de representaci&oacute;n de workflow (Workflow Enactment Service).";
 answers[63] = choices[63][3];
 units[63] = "71";
 comments[63] = "Id Pregunta: 8240. Examen TIC A2 2010";


//  Id pregunta: 8366 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  Sobre un Data Warehouse con informaci&oacute;n de las ventas nacionales de una compa&ntilde;&iacute;a, se quiere consultar los datos pero a nivel de ventas provinciales. &iquest;Qu&eacute; operaci&oacute;n debemos realizar en el almac&eacute;n de datos para obtener dichos datos?";
 choices[64]= new Array();
 choices[64][0] = "Drill-Down.";
 choices[64][1] = "Slice &amp; Dice.";
 choices[64][2] = "Roll-Up,";
 choices[64][3] = "Drill-Through.";
 answers[64] = choices[64][0];
 units[64] = "68";
 comments[64] = "Id Pregunta: 8366. Examen TIC A2 2010";


//  Id pregunta: 8901 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  &iquest;cu&aacute;l de los siguientes no es un ERP?";
 choices[65]= new Array();
 choices[65][0] = "SAP";
 choices[65][1] = "Tango";
 choices[65][2] = "Calipso";
 choices[65][3] = "Twister";
 answers[65] = choices[65][3];
 units[65] = "65";
 comments[65] = "Id Pregunta: 8901. ";


//  Id pregunta: 8925 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  &iquest;C&oacute;mo se denominan las dos series de datos de uso civil emitidas continuamente por cada sat&eacute;lite del sistema GPS?";
 choices[66]= new Array();
 choices[66][0] = "Almanaque y efem&eacute;rides.";
 choices[66][1] = "Multipath y atenuaci&oacute;n.";
 choices[66][2] = "Triangulaci&oacute;n y correcci&oacute;n.";
 choices[66][3] = "Latitud y longitud.";
 answers[66] = choices[66][0];
 units[66] = "67";
 comments[66] = "Id Pregunta: 8925. Operador Ayto. Madrid 2010";


//  Id pregunta: 8929 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes es una operaci&oacute;n que implica un cambio en el n&uacute;mero de dimensiones contempladas en la visi&oacute;n de un sistema OLAP?";
 choices[67]= new Array();
 choices[67][0] = "Drill-Across.";
 choices[67][1] = "Drill-In.";
 choices[67][2] = "Roll-Up.";
 choices[67][3] = "Rotaci&oacute;n.";
 answers[67] = choices[67][2];
 units[67] = "68";
 comments[67] = "Id Pregunta: 8929. ";


//  Id pregunta: 9153 AÃ±o de creación de pregunta: 2013-01-01
 questions[68]= "69)  No es un concepto relacionado con los sistemas de eLearning:";
 choices[68]= new Array();
 choices[68][0] = "VLE";
 choices[68][1] = "LSS";
 choices[68][2] = "LME";
 choices[68][3] = "ILS";
 answers[68] = choices[68][2];
 units[68] = "66";
 comments[68] = "Id Pregunta: 9153. ";


//  Id pregunta: 9158 AÃ±o de creación de pregunta: 2013-01-01
 questions[69]= "70)  NO se encuentra entre las iniciativas de IMS:";
 choices[69]= new Array();
 choices[69][0] = "Empaquetado de metadatos";
 choices[69][1] = "Interoperabilidad de preguntas y tests";
 choices[69][2] = "Empaquetado de informaci&oacute;n del alumno";
 choices[69][3] = "Empaquetado de contenidos";
 answers[69] = choices[69][0];
 units[69] = "66";
 comments[69] = "Id Pregunta: 9158. ";


//  Id pregunta: 9159 AÃ±o de creación de pregunta: 2013-01-01
 questions[70]= "71)  No es una forma de presentar contenidos en un LMS:";
 choices[70]= new Array();
 choices[70][0] = "Estructura lineal";
 choices[70][1] = "Estructura matricial";
 choices[70][2] = "Estructura jer&aacute;rquica";
 choices[70][3] = "Estructura en red";
 answers[70] = choices[70][1];
 units[70] = "66";
 comments[70] = "Id Pregunta: 9159. ";


//  Id pregunta: 9161 AÃ±o de creación de pregunta: 2013-01-01
 questions[71]= "72)  En el &aacute;mbito de los Sistemas de Informaci&oacute;n Geogr&aacute;fica, &iquest;qu&eacute; es un gazeteer?";
 choices[71]= new Array();
 choices[71][0] = "Directorio de referencias geogr&aacute;ficas";
 choices[71][1] = "Capa raster de informaci&oacute;n topol&oacute;gica";
 choices[71][2] = "Capa vectorial de informaci&oacute;n topol&oacute;gica";
 choices[71][3] = "Ninguna de las anteriores es correcta";
 answers[71] = choices[71][0];
 units[71] = "67";
 comments[71] = "Id Pregunta: 9161. NULL";


//  Id pregunta: 9162 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  La norma ISO referida a la calidad en la informaci&oacute;n geogr&aacute;fica es:";
 choices[72]= new Array();
 choices[72][0] = "ISO 19110";
 choices[72][1] = "ISO 19113";
 choices[72][2] = "ISO 19119";
 choices[72][3] = "ISO 19139";
 answers[72] = choices[72][1];
 units[72] = "67";
 comments[72] = "Id Pregunta: 9162. NULL";


//  Id pregunta: 9164 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  Entre los servicios m&iacute;nimos que toda IDE debe respetar seg&uacute;n el OGC no se encuentra:";
 choices[73]= new Array();
 choices[73][0] = "El servicio de coberturas en web (WCS)";
 choices[73][1] = "El servicio de cat&aacute;logos de datos (CSW)";
 choices[73][2] = "El servicio de procesamientos (WPS)";
 choices[73][3] = "El servicio de conversi&oacute;n de coordenadas";
 answers[73] = choices[73][3];
 units[73] = "67";
 comments[73] = "Id Pregunta: 9164. NULL";


//  Id pregunta: 9166 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  Entre los elementos que propone la ISO 19113, no se encuentra:";
 choices[74]= new Array();
 choices[74][0] = "Compleci&oacute;n";
 choices[74][1] = "Consistencia topol&oacute;gica";
 choices[74][2] = "Exactitud temporal";
 choices[74][3] = "Exactitud posicional";
 answers[74] = choices[74][1];
 units[74] = "67";
 comments[74] = "Id Pregunta: 9166. NULL";


//  Id pregunta: 9167 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  De los siguientes sistemas, &iquest;cu&aacute;l no se refiere a un sistema de navegaci&oacute;n por sat&eacute;lite?";
 choices[75]= new Array();
 choices[75][0] = "Beidou";
 choices[75][1] = "COMPASS";
 choices[75][2] = "QZSS";
 choices[75][3] = "GNS";
 answers[75] = choices[75][3];
 units[75] = "67";
 comments[75] = "Id Pregunta: 9167. NULL";


//  Id pregunta: 9614 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  &iquest;C&uacute;al es un m&eacute;todo aceptado de desnormalizaci&oacute;n de bases de datos?";
 choices[76]= new Array();
 choices[76][0] = "Vistas materializadas.";
 choices[76][1] = "Esquemas de copo de nieve.";
 choices[76][2] = "Cubos OLAP.";
 choices[76][3] = "Todos los anteriores.";
 answers[76] = choices[76][3];
 units[76] = "68";
 comments[76] = "Id Pregunta: 9614. ";


//  Id pregunta: 9643 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l de los siguientes proyectos est&aacute; relacionado con el intercambio de contenidos docentes y la coordinaci&oacute;n entre promotores de formaci&oacute;n en la Administraci&oacute;n General del Estado?";
 choices[77]= new Array();
 choices[77][0] = "Comp@rte";
 choices[77][1] = "Racionaliz@";
 choices[77][2] = "Compartir";
 choices[77][3] = "Educ@";
 answers[77] = choices[77][2];
 units[77] = "66";
 comments[77] = "Id Pregunta: 9643. ";


//  Id pregunta: 9676 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  Son servicios de una IDE:";
 choices[78]= new Array();
 choices[78][0] = "Servicios de mapas en Web (WMS), servicios de elementos en Web (WFS), servicios de coberturas en Web (WCS), servicios de conversi&oacute;n de coordenadas, servicios de cat&aacute;logos de datos.";
 choices[78][1] = "Servicios de nomenclator (gazetteer), descripci&oacute;n de estilo de capas (SLD).";
 choices[78][2] = "Servicios de metadatos, establecimiento de est&aacute;ndares, identificaci&oacute;n de marcos, establecimiento de acuerdos entre organismos para la producci&oacute;n de informaci&oacute;n espacial de inter&eacute;s conjunto.";
 choices[78][3] = "a, b y c son correctas.";
 answers[78] = choices[78][3];
 units[78] = "67";
 comments[78] = "Id Pregunta: 9676. NULL";


//  Id pregunta: 9679 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  En la comparaci&oacute;n en una proyecci&oacute;n Mercator del un &aacute;rea del Atl&aacute;ntico Norte, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[79]= new Array();
 choices[79][0] = "El rumbo loxodr&oacute;mico se toma seg&uacute;n el c&iacute;rculo m&aacute;ximo terrestre o distancia m&aacute;s corta curva en el mapa.";
 choices[79][1] = "El rumbo ortodr&oacute;mico se toma seg&uacute;n los puntos cardinales, l&iacute;nea recta en el mapa.";
 choices[79][2] = "El rumbo loxodr&oacute;mico se toma seg&uacute;n los puntos cardinales, l&iacute;nea recta en el mapa.";
 choices[79][3] = "No existen tales conceptos en la proyecci&oacute;n de Mercator.";
 answers[79] = choices[79][2];
 units[79] = "67";
 comments[79] = "Id Pregunta: 9679. NULL";


//  Id pregunta: 9682 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  Son tipos de mapas:";
 choices[80]= new Array();
 choices[80][0] = "Topogr&aacute;fico, topol&oacute;gico, tem&aacute;tico y superficial.";
 choices[80][1] = "Topogr&aacute;fico, azimutal, tem&aacute;tico y plano.";
 choices[80][2] = "Referencial, topol&oacute;gico, tem&aacute;tico y plano. ";
 choices[80][3] = "Cil&iacute;ndrico, azimutal, c&oacute;nico y estereogr&aacute;fico.";
 answers[80] = choices[80][2];
 units[80] = "67";
 comments[80] = "Id Pregunta: 9682. NULL";


//  Id pregunta: 9684 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  &iquest;Cu&aacute;l de las siguientes opciones representa tipolog&iacute;as de sistemas SIG?";
 choices[81]= new Array();
 choices[81][0] = "SIG empresarial, SIG de sobremesa, Visualizadores SIG y WebSIG.";
 choices[81][1] = "SIG de componentes, Gesti&oacute;n Catastral y Servicios Posicionales.";
 choices[81][2] = "Ninguna es correcta. ";
 choices[81][3] = "Son correctas a y b.";
 answers[81] = choices[81][2];
 units[81] = "67";
 comments[81] = "Id Pregunta: 9684. NULL";


//  Id pregunta: 9783 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  El lenguaje de marcado PMML (Predictive Model Markup Language) es un lenguaje relacionado con las t&eacute;cnicas relativas a:";
 choices[82]= new Array();
 choices[82][0] = "Virtualizaci&oacute;n de escritorio. ";
 choices[82][1] = "Virtualizaci&oacute;n de servidores. ";
 choices[82][2] = "Sistemas SAN. ";
 choices[82][3] = "Miner&iacute;a de datos.";
 answers[82] = choices[82][3];
 units[82] = "68";
 comments[82] = "Id Pregunta: 9783. Examen TIC A2 2013";


//  Id pregunta: 9960 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Seleccione la opci&oacute;n CORRECTA de entre las siguientes afirmaciones que hacen referencia al esquema de estrella";
 choices[83]= new Array();
 choices[83][0] = "Un esquema de estrella es un modelo de datos que tiene una tabla de dimensiones que contiene los datos para el an&aacute;lisis y est&aacute; rodeada de las tablas de hechos.";
 choices[83][1] = "En un esquema de estrella la tabla de hechos tendr&aacute; siempre una clave primaria simple";
 choices[83][2] = "Cuando a un esquema en estrella se aplican principios de normalizaci&oacute;n a una tabla de  dimensi&oacute;n, el resultado se conoce como esquema de copo de nieve.";
 choices[83][3] = "El esquema de estrella es un modelo dimensional implementado en una base de datos multidimensional";
 answers[83] = choices[83][2];
 units[83] = "68,71";
 comments[83] = "Id Pregunta: 9960. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 9961 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  &iquest;Cu&aacute;l de las siguientes opciones NO es un operador espec&iacute;fico de un sistema o herramienta OLAP?";
 choices[84]= new Array();
 choices[84][0] = "DRILL";
 choices[84][1] = "POLL";
 choices[84][2] = "PIVOT";
 choices[84][3] = "SLICE &amp; DICE";
 answers[84] = choices[84][1];
 units[84] = "68,71";
 comments[84] = "Id Pregunta: 9961. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 9963 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Un almac&eacute;n de datos (Data Warehouse) NO se caracteriza por ser:";
 choices[85]= new Array();
 choices[85][0] = "Integrado, los datos en el almac&eacute;n de datos deben integrarse en una estructura consistente.";
 choices[85][1] = "Orientado por temas, el almac&eacute;n de datos est&aacute; organizado de acuerdo con los temas m&aacute;s importantes para la organizaci&oacute;n";
 choices[85][2] = "Variable en el tiempo, los datos en el almac&eacute;n de datos siempre se cargan con una referencia temporal bajo la que son v&aacute;lidos.";
 choices[85][3] = "Vol&aacute;til, los datos en el almac&eacute;n de datos son le&iacute;dos, actualizados y eliminados.";
 answers[85] = choices[85][3];
 units[85] = "68,71";
 comments[85] = "Id Pregunta: 9963. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 9966 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  El subconjunto de datos de un Almac&eacute;n de Datos se denomina:";
 choices[86]= new Array();
 choices[86][0] = "Data Warehouse.";
 choices[86][1] = "OLAP";
 choices[86][2] = "Data Mart.";
 choices[86][3] = "Data Mining.";
 answers[86] = choices[86][2];
 units[86] = "68,71";
 comments[86] = "Id Pregunta: 9966. Examen Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n, Servicio sanitario Extremadura, 2014";


//  Id pregunta: 9971 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  En el &aacute;mbito de SAP ERP, un Centro de Coste o CeCo:";
 choices[87]= new Array();
 choices[87][0] = "Es la unidad organizativa, dentro de una sociedad CO, que representa un emplazamiento claramente delimitado donde se producen costes.";
 choices[87][1] = "Corresponde a una posici&oacute;n en el plan de cuentas relevante para el coste.";
 choices[87][2] = "Es el nivel jer&aacute;rquico m&aacute;s alto en el Sistema SAP.";
 choices[87][3] = "Es una lista de todas las cuentas de mayor utilizadas por una o varias sociedades.";
 answers[87] = choices[87][0];
 units[87] = "65";
 comments[87] = "Id Pregunta: 9971. Examen Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n, Servicio sanitario Extremadura, 2014";


//  Id pregunta: 9990 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  &iquest;Cu&aacute;l de los siguientes es sistemas de gesti&oacute;n de conocimiento tiene una versi&oacute;n con licencia de fuentes abiertas?";
 choices[88]= new Array();
 choices[88][0] = "Blackboard";
 choices[88][1] = "WebCT";
 choices[88][2] = "Dokeos";
 choices[88][3] = "Desire2Learn";
 answers[88] = choices[88][2];
 units[88] = "66";
 comments[88] = "Id Pregunta: 9990. ";


//  Id pregunta: 10293 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  Uno de los siguientes t&eacute;rminos NO se corresponde con un tipo de antena satelital:";
 choices[89]= new Array();
 choices[89][0] = "Cassegrain";
 choices[89][1] = "Krenwinkel";
 choices[89][2] = "Gregorian";
 choices[89][3] = "Offset";
 answers[89] = choices[89][1];
 units[89] = "67";
 comments[89] = "Id Pregunta: 10293. TIC A2, libre, examen 2013";


//  Id pregunta: 10624 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Una sistema de gesti&oacute;n de base de datos NoSQL...";
 choices[90]= new Array();
 choices[90][0] = "&hellip; es un sistema de base de datos relacional que no utiliza SQL.";
 choices[90][1] = "&hellip; almacena sus datos en estructuras fijas (tablas).";
 choices[90][2] = "&hellip; garantiza completamente las propiedades ACID.";
 choices[90][3] = "&hellip; tienen como ventaja principal la gran escalabilidad y rendimiento.";
 answers[90] = choices[90][3];
 units[90] = "68";
 comments[90] = "Id Pregunta: 10624. ";


//  Id pregunta: 10629 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  BPMN (Business Process Model and Notation)...";
 choices[91]= new Array();
 choices[91][0] = "&hellip; es una notaci&oacute;n gr&aacute;fica.";
 choices[91][1] = "&hellip; es una notaci&oacute;n basada en etiquetas de texto.";
 choices[91][2] = "&hellip; es una metodolog&iacute;a para el modelado de procesos de negocio.";
 choices[91][3] = "&hellip; est&aacute; destinado &uacute;nicamente a los analistas de negocio.";
 answers[91] = choices[91][0];
 units[91] = "71";
 comments[91] = "Id Pregunta: 10629. ";


//  Id pregunta: 10920 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Apache Hadoop es un framework de software que implementa un sistema de ficheros basado en:";
 choices[92]= new Array();
 choices[92][0] = "HP Data File System.";
 choices[92][1] = "Google File System.";
 choices[92][2] = "Network File System.";
 choices[92][3] = "High Density File System.";
 answers[92] = choices[92][1];
 units[92] = "68";
 comments[92] = "Id Pregunta: 10920. TIC A1 AGE 2014";


//  Id pregunta: 10947 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Dentro de las soluciones en el &aacute;mbito de BigData, la arquitectura Hadoop consta del m&oacute;dulo MapReduce que consiste en:";
 choices[93]= new Array();
 choices[93][0] = "Un framework para escribir aplicaciones que procesan grandes cantidades de datos en paralelo.";
 choices[93][1] = "Una base de datos no relacional y distribuida, con varios maestros, escalable y sin puntos &uacute;nicos de fallo.";
 choices[93][2] = "Un sistema de archivos distribuido que proporciona acceso de alto rendimiento a los datos de la aplicaci&oacute;n.";
 choices[93][3] = "Una infraestructura de data warehouse que proporciona los datos resumidos y consultas ad hoc.";
 answers[93] = choices[93][0];
 units[93] = "68";
 comments[93] = "Id Pregunta: 10947. TIC A1 AGE 2014";


//  Id pregunta: 11143 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de las siguientes no es una soluci&oacute;n CRM?";
 choices[94]= new Array();
 choices[94][0] = "Oracle Siebel CRM";
 choices[94][1] = "Microsoft Dynamics CRM";
 choices[94][2] = "Jive Software";
 choices[94][3] = "IBM RightNow Sugar CRM";
 answers[94] = choices[94][3];
 units[94] = "65";
 comments[94] = "Id Pregunta: 11143. ";


//  Id pregunta: 11277 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;En el contexto de los Sistemas de Informaci&oacute;n Geogr&aacute;fica &iquest;cu&aacute;l de los siguientes usos ser&iacute;a un mashup?";
 choices[95]= new Array();
 choices[95][0] = "B&uacute;squeda de una direcci&oacute;n (geocodificaci&oacute;n directa)";
 choices[95][1] = "Carga de una capa WMS externa usando la API de OpenLayers";
 choices[95][2] = "Descarga de datos vectoriales en GML o KML";
 choices[95][3] = "Todas las anteriores";
 answers[95] = choices[95][1];
 units[95] = "67";
 comments[95] = "Id Pregunta: 11277. ";


//  Id pregunta: 11279 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Los servicios WMS de OGC se consideran servicios de:";
 choices[96]= new Array();
 choices[96][0] = "Localizaci&oacute;n";
 choices[96][1] = "Descarga";
 choices[96][2] = "Transformaci&oacute;n";
 choices[96][3] = "Visualizaci&oacute;n";
 answers[96] = choices[96][3];
 units[96] = "67";
 comments[96] = "Id Pregunta: 11279. ";


//  Id pregunta: 11282 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Qu&eacute; es un servicio WMTS?";
 choices[97]= new Array();
 choices[97][0] = "Un tipo de recubrimiento SOAP";
 choices[97][1] = "Un servicio de cat&aacute;logo cacheado";
 choices[97][2] = "Un servicio de visualizaci&oacute;n de mapas sin teselas, pero cacheado";
 choices[97][3] = "Un servicio de visualizaci&oacute;n de mapas teselado";
 answers[97] = choices[97][3];
 units[97] = "67";
 comments[97] = "Id Pregunta: 11282. ";


//  Id pregunta: 11283 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Qu&eacute; se entiende por TileMatrixSet en el contexto de la informaci&oacute;n geogr&aacute;fica?";
 choices[98]= new Array();
 choices[98][0] = "Una matriz de puntos de control para registrar una im&aacute;gen r&aacute;ster respecto a otra";
 choices[98][1] = "Un conjunto de rasterizaciones y fragmentaciones de la capa a diferentes escalas predeterminadas para un sistema de referencia y &aacute;mbito concreto";
 choices[98][2] = "Un conjunto de datos de tipo r&aacute;ster en el que el atributo respresentado es la elevaci&oacute;n de los puntos situados en una malla regular";
 choices[98][3] = "Ninguna de las anteriores";
 answers[98] = choices[98][1];
 units[98] = "67";
 comments[98] = "Id Pregunta: 11283. ";


//  Id pregunta: 11284 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Situar una posici&oacute;n en el mapa empleando una referencia catastral es un ejemplo de?";
 choices[99]= new Array();
 choices[99][0] = "Georreferenciaci&oacute;n directa";
 choices[99][1] = "Sistema de Proyecci&oacute;n (SRS)";
 choices[99][2] = "Georreferenciaci&oacute;n discreta";
 choices[99][3] = "a y c son ciertas";
 answers[99] = choices[99][2];
 units[99] = "67";
 comments[99] = "Id Pregunta: 11284. ";


