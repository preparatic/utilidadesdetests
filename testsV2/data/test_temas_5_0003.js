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

//  Id pregunta: 107 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  CRM son las siglas de:";
 choices[0]= new Array();
 choices[0][0] = "Cost Recalculating Method: m&eacute;todo de c&aacute;lculo de optimizaci&oacute;n de costes";
 choices[0][1] = "Call Routing for Mobile phones: sistema de enrutamiento de llamadas en telefon&iacute;a m&oacute;vil";
 choices[0][2] = "Customer Relationship Management: gesti&oacute;n de relaci&oacute;n con los clientes";
 choices[0][3] = "Customer Relationship Method: m&eacute;todo para relaci&oacute;n con los clientes";
 answers[0] = choices[0][2];
 units[0] = "65";
 comments[0] = "Id Pregunta: 107. ";


//  Id pregunta: 743 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  Dentro del campo de los almacenes de datos, los supermercados de datos o Data Marts:";
 choices[1]= new Array();
 choices[1][0] = "Son muy vol&aacute;tiles dada la gran frecuencia de actualizaci&oacute;n.";
 choices[1][1] = "son una versi&oacute;n especial de Data Warehouse, duplicados en varias m&aacute;quinas para agilizar el acceso a los mismos, que contienen los datos muy resumidos en una arquitectura distribuida por niveles.";
 choices[1][2] = "S&oacute;lo pueden ser accedidos por el departamento al que pertenecen los datos.";
 choices[1][3] = "Ninguna de las anteriores.";
 answers[1] = choices[1][1];
 units[1] = "68";
 comments[1] = "Id Pregunta: 743. Similar a examen TIC SS A 2003";


//  Id pregunta: 842 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre data-warehouse es verdadera?";
 choices[2]= new Array();
 choices[2][0] = "Los datos se agregan en conjuntos.";
 choices[2][1] = "La actualizaci&oacute;n de los datos se hace en tiempo real.";
 choices[2][2] = "Est&aacute;n orientados a procesos.";
 choices[2][3] = "&Uacute;nicamente se puede realizar data-mining sobre un sistema data-warehouse.";
 answers[2] = choices[2][0];
 units[2] = "68";
 comments[2] = "Id Pregunta: 842. ";


//  Id pregunta: 896 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;En qu&eacute; consiste el an&aacute;lisis multidimensional de OLAP?";
 choices[3]= new Array();
 choices[3][0] = "En analizar los mismos datos desde distintas perspectivas.";
 choices[3][1] = "En consolidar los datos por distintas trayectorias.";
 choices[3][2] = "En encontrar nuevas relaciones entre variables.";
 choices[3][3] = "Todas las respuestas anteriores son correctas.";
 answers[3] = choices[3][3];
 units[3] = "68";
 comments[3] = "Id Pregunta: 896. ";


//  Id pregunta: 900 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Es posible averiguar el peso de un cuerpo a partir de una imagen o conjunto de im&aacute;genes?:";
 choices[4]= new Array();
 choices[4][0] = "No, ya que faltan magnitudes que no pueden obtenerse de una imagen.";
 choices[4][1] = "No, ya que aunque se dispongan de todos los datos el peso no se relaciona en nada con sus dimensiones.";
 choices[4][2] = "S&iacute;, mediante sencillos c&aacute;lculos aritm&eacute;ticos sobre los p&iacute;xeles, viendo c&oacute;mo var&iacute;a su tonalidad.";
 choices[4][3] = "S&iacute;, mediante t&eacute;cnicas de triangulaci&oacute;n y de c&aacute;lculo de tiempos de vuelo de se&ntilde;ales sonda se obtienen las dimensiones (por consiguiente el volumen), y mediante las im&aacute;genes de c&aacute;maras infrarrojas su densidad, obteniendo a partir de estas 2 magnitudes el peso.";
 answers[4] = choices[4][3];
 units[4] = "67";
 comments[4] = "Id Pregunta: 900. NULL";


//  Id pregunta: 954 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Comparando los conceptos de Groupware y CSCW (Computer Supported Cooperative Work):";
 choices[5]= new Array();
 choices[5][0] = "Groupware se refiere m&aacute;s a aspectos sociol&oacute;gicos y psicol&oacute;gicos";
 choices[5][1] = "CSCW aborda la tem&aacute;tica desde una perspectiva mucho m&aacute;s concreta y espec&iacute;fica";
 choices[5][2] = "Groupware se centra en las connotaciones tecnol&oacute;gicas, en aplicaciones concretas y en actividades grupales";
 choices[5][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[5] = choices[5][2];
 units[5] = "71";
 comments[5] = "Id Pregunta: 954. ";


//  Id pregunta: 1007 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  El concepto de trabajo en grupo o groupware se construy&oacute; alrededor de:";
 choices[6]= new Array();
 choices[6][0] = "Los productos de correo electr&oacute;nico";
 choices[6][1] = "Los procesadores de texto";
 choices[6][2] = "Las redes locales de &aacute;mbito de oficina";
 choices[6][3] = "Las hojas de c&aacute;lculo";
 answers[6] = choices[6][0];
 units[6] = "71";
 comments[6] = "Id Pregunta: 1007. ";


//  Id pregunta: 1041 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  El objetivo principal de la miner&iacute;a de datos es:";
 choices[7]= new Array();
 choices[7][0] = "Descubrir el conocimiento oculto en grandes vol&uacute;menes de datos y expresarlo de forma inteligible.";
 choices[7][1] = "Reorganizar adecuadamente los grandes vol&uacute;menes de datos.";
 choices[7][2] = "Tener copias de seguridad fiables y r&aacute;pidas de todos y cada uno de los datos de que se dispone.";
 choices[7][3] = "Ninguna de las anteriores respuestas es correcta.";
 answers[7] = choices[7][0];
 units[7] = "68";
 comments[7] = "Id Pregunta: 1041. ";


//  Id pregunta: 1057 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  El software para la productividad en grupos de trabajo incluye:";
 choices[8]= new Array();
 choices[8][0] = "Gesti&oacute;n de agenda compartida";
 choices[8][1] = "Teleconversaciones m&uacute;ltiples";
 choices[8][2] = "Correo electr&oacute;nico";
 choices[8][3] = "Todas las respuestas anteriores son correctas";
 answers[8] = choices[8][3];
 units[8] = "71";
 comments[8] = "Id Pregunta: 1057. ";


//  Id pregunta: 1141 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  En un sistema de informaci&oacute;n geogr&aacute;fica tipo r&aacute;ster, indique cu&aacute;l de las siguientes es una operaci&oacute;n con varias capas:";
 choices[9]= new Array();
 choices[9][0] = "Vectorizaci&oacute;n.";
 choices[9][1] = "Filtrado.";
 choices[9][2] = "Scanning.";
 choices[9][3] = "Overlay.";
 answers[9] = choices[9][3];
 units[9] = "67";
 comments[9] = "Id Pregunta: 1141. NULL";


//  Id pregunta: 1166 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Entre las caracter&iacute;sticas del Data Warehousing se encuentra:";
 choices[10]= new Array();
 choices[10][0] = "Estar orientado a objetos.";
 choices[10][1] = "Los datos de la empresa no son modificados.";
 choices[10][2] = "Estar destinado a ayudar a la toma de decisiones de gesti&oacute;n.";
 choices[10][3] = "Son ciertas las respuestas &lsquo;b&rsquo; y &lsquo;c&rsquo;.";
 answers[10] = choices[10][3];
 units[10] = "68";
 comments[10] = "Id Pregunta: 1166. ";


//  Id pregunta: 1181 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Indicar cu&aacute;l de los siguientes no es un modelo de miner&iacute;a de datos:";
 choices[11]= new Array();
 choices[11][0] = "De verificaci&oacute;n.";
 choices[11][1] = "De descubrimiento.";
 choices[11][2] = "De predicci&oacute;n.";
 choices[11][3] = "De validaci&oacute;n.";
 answers[11] = choices[11][3];
 units[11] = "68";
 comments[11] = "Id Pregunta: 1181. ";


//  Id pregunta: 1252 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Las actividades clave del data warehousing son:";
 choices[12]= new Array();
 choices[12][0] = "Recepci&oacute;n, almacenamiento, proceso y presentaci&oacute;n.";
 choices[12][1] = "Extracci&oacute;n de datos, almacenamiento de datos, OLAP, miner&iacute;a de datos y acceso a los datos.";
 choices[12][2] = "Carga de datos de prueba, entrenamiento, inferencia del conocimiento, carga de datos reales y c&aacute;lculo de decisiones.";
 choices[12][3] = "Gesti&oacute;n de los medios f&iacute;sicos de almacenamiento, localizaci&oacute;n transparente de los datos y salvaguarda y restauraci&oacute;n autom&aacute;ticas.";
 answers[12] = choices[12][1];
 units[12] = "68";
 comments[12] = "Id Pregunta: 1252. ";


//  Id pregunta: 1284 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Los tipos de an&aacute;lisis desarrollados en Data Mining se dividen com&uacute;nmente en:";
 choices[13]= new Array();
 choices[13][0] = "Sint&aacute;ctico y sem&aacute;ntico.";
 choices[13][1] = "Estad&iacute;stico y de calidad.";
 choices[13][2] = "Gr&aacute;fico y textual.";
 choices[13][3] = "Supervisado y no supervisado.";
 answers[13] = choices[13][3];
 units[13] = "68";
 comments[13] = "Id Pregunta: 1284. ";


//  Id pregunta: 1528 AÃ±o de creación de pregunta: 2003-01-01
 questions[14]= "15)  El sistema GPS (Global Positioning System), &iquest;de cu&aacute;ntos  sat&eacute;lites operativos se compone?";
 choices[14]= new Array();
 choices[14][0] = "16.";
 choices[14][1] = "24.";
 choices[14][2] = "32.";
 choices[14][3] = "64.";
 answers[14] = choices[14][1];
 units[14] = "67";
 comments[14] = "Id Pregunta: 1528. Junta Andaluc&iacute;a";


//  Id pregunta: 1558 AÃ±o de creación de pregunta: 2003-01-01
 questions[15]= "16)  &iquest;C&uacute;al de los modelos de datos de Sistemas de Informaci&oacute;n Geogr&aacute;fica es m&aacute;s adecuado para representar l&iacute;neas con precisi&oacute;n y superficies rellenas?";
 choices[15]= new Array();
 choices[15][0] = "Modelo R&aacute;ster.";
 choices[15][1] = "Modelo Vectorial.";
 choices[15][2] = "Modelo R&aacute;ster y Modelo Vectorial.";
 choices[15][3] = "El modelo R&aacute;ster para l&iacute;neas y el modelo Vectorial para superficies.";
 answers[15] = choices[15][2];
 units[15] = "67";
 comments[15] = "Id Pregunta: 1558. NULL";


//  Id pregunta: 1594 AÃ±o de creación de pregunta: 2003-01-01
 questions[16]= "17)  En los GIS, el formato empleado para almacenamiento de la informaci&oacute;n gr&aacute;fica mediante la t&eacute;cnica de descomponer cada objeto en una matriz de celdas de id&eacute;ntico tama&ntilde;o (pixel) se corresponde con el formato:";
 choices[16]= new Array();
 choices[16][0] = "Vectorial.";
 choices[16][1] = "Shape.";
 choices[16][2] = "Mapa de bits.";
 choices[16][3] = "R&aacute;ster.";
 answers[16] = choices[16][3];
 units[16] = "67";
 comments[16] = "Id Pregunta: 1594. Junta Andaluc&iacute;a";


//  Id pregunta: 1647 AÃ±o de creación de pregunta: 2004-01-01
 questions[17]= "18)  &iquest;Cu&aacute;l de los siguientes son subsistemas usuales en un sistema de e-learning?";
 choices[17]= new Array();
 choices[17][0] = "LCMS (Learning Content Management System)";
 choices[17][1] = "LOMS (Learning Objects Management System)";
 choices[17][2] = "CRM (Customer Relationship Management)";
 choices[17][3] = "Todos los anteriores";
 answers[17] = choices[17][0];
 units[17] = "66";
 comments[17] = "Id Pregunta: 1647. ";


//  Id pregunta: 1649 AÃ±o de creación de pregunta: 2004-01-01
 questions[18]= "19)  &iquest;Cu&aacute;l de los siguientes t&eacute;rminos no tienen relaci&oacute;n con el elearning?";
 choices[18]= new Array();
 choices[18][0] = "IMS";
 choices[18][1] = "SCORM";
 choices[18][2] = "Moodle";
 choices[18][3] = "ePupil";
 answers[18] = choices[18][3];
 units[18] = "66";
 comments[18] = "Id Pregunta: 1649. ";


//  Id pregunta: 1685 AÃ±o de creación de pregunta: 2004-01-01
 questions[19]= "20)  Sobre el e-learnig";
 choices[19]= new Array();
 choices[19][0] = "Es el uso de las tecnolog&iacute;as multimedia para mejorar y desarrollar nuevas estrategias de aprendizaje";
 choices[19][1] = "Algunas de las facilidades que aporta el e-learning son la accesibilidad geogr&aacute;fica y la flexibilidad en el tiempo";
 choices[19][2] = "Las dos afirmaciones anteriores son correctas";
 choices[19][3] = "Todas las afirmaciones anteriores son falsas";
 answers[19] = choices[19][2];
 units[19] = "66";
 comments[19] = "Id Pregunta: 1685. ";


//  Id pregunta: 1801 AÃ±o de creación de pregunta: 2006-01-01
 questions[20]= "21)  &iquest;Para que se utiliza un LMS?";
 choices[20]= new Array();
 choices[20][0] = "Para crear cursos de e-learning";
 choices[20][1] = "Para cachear los cursos de e-learning en el web server";
 choices[20][2] = "Es un Content Management System especializado en e-learning";
 choices[20][3] = "Ninguna de las anteriores";
 answers[20] = choices[20][3];
 units[20] = "66";
 comments[20] = "Id Pregunta: 1801. Los cursos se crean mediante un LCMS. El LMS se utiliza para administrar esos cursos/objetos de aprendizajes ya existentes.";


//  Id pregunta: 1804 AÃ±o de creación de pregunta: 2006-01-01
 questions[21]= "22)  Se&ntilde;ale la afirmaci&oacute;n que sea FALSA acerca de la educaci&oacute;n virtual (e-learning)";
 choices[21]= new Array();
 choices[21][0] = "La educaci&oacute;n virtual exige a los alumnos m&aacute;s esfuerzo en aprender las t&eacute;cnicas que en el contenido";
 choices[21][1] = "Lo realmente complejo en la educaci&oacute;n virtual es la instalaci&oacute;n de las herramientas necesarias";
 choices[21][2] = "La educaci&oacute;n virtual no rivaliza con la educaci&oacute;n presencial";
 choices[21][3] = "La educaci&oacute;n virtual permite la evaluaci&oacute;n de los alumnos de forma completamente fiable";
 answers[21] = choices[21][3];
 units[21] = "66";
 comments[21] = "Id Pregunta: 1804. ";


//  Id pregunta: 1809 AÃ±o de creación de pregunta: 2006-01-01
 questions[22]= "23)  &iquest;Cu&aacute;l es la utilidad de la proyecci&oacute;n en los GIS?";
 choices[22]= new Array();
 choices[22][0] = "Permite reconocer los datos geogr&aacute;ficos utilizando fotograf&iacute;as, preferiblemente desde sat&eacute;lite.";
 choices[22][1] = "Soluciona los problemas de representar la curvatura terrestre en un plano.";
 choices[22][2] = "Facilita la realizaci&oacute;n de zooms sin perder resoluci&oacute;n tanto hacia dentro como hacia fuera.";
 choices[22][3] = "Permite cambiar la longitud de onda de las fotograf&iacute;as para poder visualizar cosas que no se pueden ver en el espectro visible.";
 answers[22] = choices[22][1];
 units[22] = "67";
 comments[22] = "Id Pregunta: 1809. NULL";


//  Id pregunta: 1810 AÃ±o de creación de pregunta: 2006-01-01
 questions[23]= "24)  En los GIS, el sistema UTM:";
 choices[23]= new Array();
 choices[23][0] = "Asocia cada elemento a una clave de zona.";
 choices[23][1] = "Proyecta el globo terr&aacute;queo sobre un cilindro.";
 choices[23][2] = "Almacena la informaci&oacute;n de los pol&iacute;gonos en base a un solo punto.";
 choices[23][3] = "Es un est&aacute;ndar universal para intercambio de datos geogr&aacute;ficos.";
 answers[23] = choices[23][1];
 units[23] = "67";
 comments[23] = "Id Pregunta: 1810. NULL";


//  Id pregunta: 1811 AÃ±o de creación de pregunta: 2006-01-01
 questions[24]= "25)  Google Earth es un sistema que permite el acceso a informaci&oacute;n geogr&aacute;fica, y que emplea un modelo de datos:";
 choices[24]= new Array();
 choices[24][0] = "&Uacute;nicamente r&aacute;ster.";
 choices[24][1] = "R&aacute;ster y vectorial.";
 choices[24][2] = "&Uacute;nicamente vectorial.";
 choices[24][3] = "Representaci&oacute;n de tipo streaming.";
 answers[24] = choices[24][1];
 units[24] = "67";
 comments[24] = "Id Pregunta: 1811. NULL";


//  Id pregunta: 1814 AÃ±o de creación de pregunta: 2006-01-01
 questions[25]= "26)  El modelo de datos vectorial utilizado en sistemas de informaci&oacute;n geogr&aacute;fica, utiliza los siguientes elementos de representaci&oacute;n para la informaci&oacute;n topol&oacute;gica (se&ntilde;ale la respuesta correcta):";
 choices[25]= new Array();
 choices[25][0] = "Puntos, arcos, politopos.";
 choices[25][1] = "Puntos, segmentos, pol&iacute;gonos.";
 choices[25][2] = "Puntos, arcos, pol&iacute;gonos.";
 choices[25][3] = "Puntos, arcos, segmentos.";
 answers[25] = choices[25][2];
 units[25] = "67";
 comments[25] = "Id Pregunta: 1814. NULL";


//  Id pregunta: 1815 AÃ±o de creación de pregunta: 2006-01-01
 questions[26]= "27)  &iquest;Qu&eacute; utilidad puede tener el Data Mining?";
 choices[26]= new Array();
 choices[26][0] = "Predecir valores futuros en base a los datos actuales.";
 choices[26][1] = "Descubrimiento de fraude.";
 choices[26][2] = "Descubrimiento de patrones en los datos.";
 choices[26][3] = "Todas las anteriores.";
 answers[26] = choices[26][3];
 units[26] = "68";
 comments[26] = "Id Pregunta: 1815. ";


//  Id pregunta: 1816 AÃ±o de creación de pregunta: 2006-01-01
 questions[27]= "28)  &iquest;Para qu&eacute; se utiliza  principalmente el algoritmo k-medias?";
 choices[27]= new Array();
 choices[27][0] = "Clustering.";
 choices[27][1] = "Categorizaci&oacute;n.";
 choices[27][2] = "Predicci&oacute;n.";
 choices[27][3] = "Detecci&oacute;n de fraude.";
 answers[27] = choices[27][0];
 units[27] = "68";
 comments[27] = "Id Pregunta: 1816. ";


//  Id pregunta: 1819 AÃ±o de creación de pregunta: 2006-01-01
 questions[28]= "29)  El fen&oacute;meno por el que se encuentran huecos entre las tablas de datos multidimensionales se conoce como:";
 choices[28]= new Array();
 choices[28][0] = "Data sparsity.";
 choices[28][1] = "Data cleansing.";
 choices[28][2] = "Data mining.";
 choices[28][3] = "Data explosion.";
 answers[28] = choices[28][0];
 units[28] = "68";
 comments[28] = "Id Pregunta: 1819. ";


//  Id pregunta: 1820 AÃ±o de creación de pregunta: 2006-01-01
 questions[29]= "30)  El termino ETL se refiere a: ";
 choices[29]= new Array();
 choices[29][0] = "Extraction, Transfer &amp; Labeling.";
 choices[29][1] = "Explanation, Transformation &amp; Loading.";
 choices[29][2] = "Extraction, Transformation &amp; Loading.";
 choices[29][3] = "Extraction, Transfer &amp; Loading.";
 answers[29] = choices[29][2];
 units[29] = "68";
 comments[29] = "Id Pregunta: 1820. ";


//  Id pregunta: 1821 AÃ±o de creación de pregunta: 2006-01-01
 questions[30]= "31)  Entre las ventajas de un Datawarehouse no se encuentra:";
 choices[30]= new Array();
 choices[30][0] = "Reducir el tiempo de respuesta de los sistemas operacionales.";
 choices[30][1] = "Presentar una visi&oacute;n &uacute;nica de la informaci&oacute;n de una empresa.";
 choices[30][2] = "Permitir que los usuarios sean autosuficientes para satisfacer sus propias necesidades de informaci&oacute;n. ";
 choices[30][3] = "La informaci&oacute;n de una empresa se mantiene consistente, segura, actualizada y f&aacute;cilmente accesible. ";
 answers[30] = choices[30][0];
 units[30] = "68";
 comments[30] = "Id Pregunta: 1821. ";


//  Id pregunta: 1823 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  Las especializaciones de los sistemas de Datawarehouse orientadas a departamentos o &aacute;reas de negocio concretas se denominan:";
 choices[31]= new Array();
 choices[31][0] = "Data Marts.";
 choices[31][1] = "Data Cleansing.";
 choices[31][2] = "Data Mining.";
 choices[31][3] = "Metadata.";
 answers[31] = choices[31][0];
 units[31] = "68";
 comments[31] = "Id Pregunta: 1823. ";


//  Id pregunta: 1824 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  Las herramientas para la elaboraci&oacute;n de informes y listados, tanto en detalle como sobre informaci&oacute;n agregada, a partir de la informaci&oacute;n de los Datawarehouse y datamarts se conocen como herramientas de:";
 choices[32]= new Array();
 choices[32][0] = "OLAP.";
 choices[32][1] = "Query &amp; reporting.";
 choices[32][2] = "Cuadro de mando anal&iacute;tico.";
 choices[32][3] = "Datamining.";
 answers[32] = choices[32][1];
 units[32] = "68";
 comments[32] = "Id Pregunta: 1824. ";


//  Id pregunta: 1829 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  &iquest;Con cu&aacute;l de las siguientes categor&iacute;as de software est&aacute; m&aacute;s relacionado el Business Intelligence?";
 choices[33]= new Array();
 choices[33][0] = "ERP.";
 choices[33][1] = "Datawarehouse y OLAP.";
 choices[33][2] = "Document Management y Content Management.";
 choices[33][3] = "SCM.";
 answers[33] = choices[33][1];
 units[33] = "68";
 comments[33] = "Id Pregunta: 1829. ";


//  Id pregunta: 1832 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  OLAP significa:";
 choices[34]= new Array();
 choices[34][0] = "On-Line Automatic Prediction.";
 choices[34][1] = "On-Line Analytical Prediction.";
 choices[34][2] = "On-Line Automatic Processing.";
 choices[34][3] = "On-Line Analytical Processing.";
 answers[34] = choices[34][3];
 units[34] = "68";
 comments[34] = "Id Pregunta: 1832. ";


//  Id pregunta: 1844 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  Indique la respuesta falsa en relaci&oacute;n a las ventajas aportadas por una herramienta de Workflow:";
 choices[35]= new Array();
 choices[35][0] = "Incremento de la productividad";
 choices[35][1] = "Monitorizaci&oacute;n del estado de cualquier proceso";
 choices[35][2] = "Reducci&oacute;n de los tiempos muertos";
 choices[35][3] = "Todas las anteriores son ciertas";
 answers[35] = choices[35][3];
 units[35] = "71";
 comments[35] = "Id Pregunta: 1844. ";


//  Id pregunta: 1845 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  Indique la respuesta falsa en relaci&oacute;n al WfMC (Workflow Management Coalition):";
 choices[36]= new Array();
 choices[36][0] = "Organizaci&oacute;n destinada a establecer est&aacute;ndares relativos a la terminolog&iacute;a del software, su interoperabilidad y conectividad";
 choices[36][1] = "Organizaci&oacute;n creada por las principales empresas del sector para el facilitar la compatibilidad de sus herramientas";
 choices[36][2] = "Ha desarrollado el denominado Modelo de Referencia de Workflow";
 choices[36][3] = "Est&aacute; dividida en tres comit&eacute;s principales: el Comit&eacute; T&eacute;cnico, el Comit&eacute; de Relaciones Externas y el Comit&eacute; Directivo";
 answers[36] = choices[36][1];
 units[36] = "71";
 comments[36] = "Id Pregunta: 1845. ";


//  Id pregunta: 1847 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  Se&ntilde;ale la falsa:";
 choices[37]= new Array();
 choices[37][0] = "Bonita es un motor de workflow de sw libre que implementa las especificaciones de la WfMC.";
 choices[37][1] = "Evolution es un cliente para correo electr&oacute;nico y workgroup para sistemas Linux.";
 choices[37][2] = "JoNAS es un servidor de aplicaciones de SW libre";
 choices[37][3] = "Todas son incorrectas";
 answers[37] = choices[37][3];
 units[37] = "71";
 comments[37] = "Id Pregunta: 1847. ";


//  Id pregunta: 1849 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  Un sistema de Workflow seg&uacute;n la WfMC debe incluir necesariamente la funci&oacute;n de:";
 choices[38]= new Array();
 choices[38][0] = "Gesti&oacute;n de notificaciones y colas de trabajo";
 choices[38][1] = "Autorizaciones y asignaci&oacute;n de responsabilidades";
 choices[38][2] = "Facilidades de enrrutamiento";
 choices[38][3] = "Todas las anteriores";
 answers[38] = choices[38][3];
 units[38] = "71";
 comments[38] = "Id Pregunta: 1849. ";


//  Id pregunta: 1931 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  Seleccione la afirmaci&oacute;n incorrecta sobre la relaci&oacute;n de la especificaci&oacute;n Learning Design con otras especificaciones";
 choices[39]= new Array();
 choices[39][0] = "IMS DR puede ser transformado a las caracter&iacute;sticas de Learning Design, particularmente con la clase &quot;abstract person&quot;";
 choices[39][1] = "Learning Design puede ser integrado dentro la estructura de IMS Content Package en la secci&oacute;n de &lt;organization&gt;";
 choices[39][2] = "Learning Design puede incorporar preguntas y test definidos con IMS QTI";
 choices[39][3] = "Learning Design incluye expresiones, metadatos y vocabularios de IMS y IEEE metadata";
 answers[39] = choices[39][0];
 units[39] = "66";
 comments[39] = "Id Pregunta: 1931. ";


//  Id pregunta: 4072 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  &iquest;Qu&eacute; gestiona un CRM?";
 choices[40]= new Array();
 choices[40][0] = "Las relaciones con los clientes";
 choices[40][1] = "Las relaciones con los Empleados";
 choices[40][2] = "Las relaciones con clientes y empleados";
 choices[40][3] = "Ninguna de las anteriores";
 answers[40] = choices[40][0];
 units[40] = "65";
 comments[40] = "Id Pregunta: 4072. ";


//  Id pregunta: 4280 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  Un sistema ERP (Enterprise Resource Planning) b&aacute;sicamente act&uacute;a sobre:";
 choices[41]= new Array();
 choices[41][0] = "La capa de datos (SGBD).";
 choices[41][1] = "La capa de l&oacute;gica de negocio.";
 choices[41][2] = "La capa de presentaci&oacute;n.";
 choices[41][3] = "La capa de comunicaci&oacute;n";
 answers[41] = choices[41][1];
 units[41] = "65";
 comments[41] = "Id Pregunta: 4280. ";


//  Id pregunta: 4461 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  Es un est&aacute;ndar de e-learning: ";
 choices[42]= new Array();
 choices[42][0] = "IEEE";
 choices[42][1] = "ADL";
 choices[42][2] = "LMS";
 choices[42][3] = "SCORM";
 answers[42] = choices[42][3];
 units[42] = "66";
 comments[42] = "Id Pregunta: 4461. ";


//  Id pregunta: 4525 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  En un Sistema de Informaci&oacute;n Geogr&aacute;fica los atributos que puede tener un objeto ser&aacute;n:";
 choices[43]= new Array();
 choices[43][0] = "Solamente gr&aacute;ficos.";
 choices[43][1] = "Solamente alfanum&eacute;ricos.";
 choices[43][2] = "Solamente vectoriales.";
 choices[43][3] = "Gr&aacute;ficos y alfanum&eacute;ricos.";
 answers[43] = choices[43][3];
 units[43] = "67";
 comments[43] = "Id Pregunta: 4525. NULL";


//  Id pregunta: 4747 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  En relaci&oacute;n a los modelos vectorial frente a r&aacute;ster en un SIG, se&ntilde;ale la opci&oacute;n verdadera.";
 choices[44]= new Array();
 choices[44][0] = "Las operaciones de c&aacute;lculo se simplifican al utilizar modelos vectoriales.";
 choices[44][1] = "No se deben mezclar datos raster con datos vectoriales entre capas o las prestaciones globales del SIG se ver&aacute;n comprometidas.";
 choices[44][2] = "La precisi&oacute;n gr&aacute;fica del modelo raster supera al modelo vectorial, al no tener que reescalar nada.";
 choices[44][3] = "La cartograf&iacute;a digital tradicional es fundamentalmente de tipo vectorial.";
 answers[44] = choices[44][3];
 units[44] = "67";
 comments[44] = "Id Pregunta: 4747. NULL";


//  Id pregunta: 4879 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  Seg&uacute;n se establece en la Gu&iacute;a de Certificaci&oacute;n para Sistemas de e-Learning basados en Web de AICC (Aviation Industry Computer-based Training Committee), &iquest;cu&aacute;l es la longitud m&aacute;xima de la URL (Uniform Resource Locator)de arranque de una unidad de asignaci&oacute;n en caracteres?";
 choices[45]= new Array();
 choices[45][0] = "64";
 choices[45][1] = "128";
 choices[45][2] = "256";
 choices[45][3] = "1024";
 answers[45] = choices[45][2];
 units[45] = "66";
 comments[45] = "Id Pregunta: 4879. ";


//  Id pregunta: 4911 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  En el contexto de Almac&eacute;n de datos (Data Warehouse) la creaci&oacute;n de &ldquo;duplicaciones&rdquo; locales o departamentales basadas en subconjuntos de la informaci&oacute;n contenida en el Data Warehouse central o maestro, se identifica con el t&eacute;rmino:";
 choices[46]= new Array();
 choices[46][0] = "Data Marts.";
 choices[46][1] = "Metadata.";
 choices[46][2] = "Middleware.";
 choices[46][3] = "Dataware.";
 answers[46] = choices[46][0];
 units[46] = "68";
 comments[46] = "Id Pregunta: 4911. Examen TIC B 2007";


//  Id pregunta: 4913 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  &iquest;Para cu&aacute;les de los siguientes sistemas se debe configurar la base de datos optimizando las inserciones, modificaciones y borrado de datos y asegurando un alto nivel de concurrencia?";
 choices[47]= new Array();
 choices[47][0] = "OLTP (sistemas transaccionales on line).";
 choices[47][1] = "DSS (sistemas de soporte a la decisi&oacute;n).";
 choices[47][2] = "Data Warehouse (almacenes de datos).";
 choices[47][3] = "ERP (sistemas de planificaci&oacute;n de recursos).";
 answers[47] = choices[47][0];
 units[47] = "68";
 comments[47] = "Id Pregunta: 4913. Examen TIC B 2007";


//  Id pregunta: 4920 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  Los algoritmos &ldquo;no supervisados&rdquo; en Miner&iacute;a de Datos:";
 choices[48]= new Array();
 choices[48][0] = "Se llaman tambi&eacute;n 'predictivos'.";
 choices[48][1] = "Utilizan la t&eacute;cnica de '&aacute;rboles de decisi&oacute;n'.";
 choices[48][2] = "Sirven para descubrir patrones y tendencias en los datos actuales.";
 choices[48][3] = "Predicen el valor de un atributo de un conjunto de datos, conocidos otros atributos.";
 answers[48] = choices[48][2];
 units[48] = "68";
 comments[48] = "Id Pregunta: 4920. Examen TIC B 2007";


//  Id pregunta: 4988 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  Indique cu&aacute;l de las siguientes NO es una caracter&iacute;stica de los Almacenes de Datos (Datawarehouses):";
 choices[49]= new Array();
 choices[49][0] = "Est&aacute;n orientados al an&aacute;lisis de informaci&oacute;n y la toma de decisiones.";
 choices[49][1] = "Para facilitar el mantenimiento deben utilizar el mismo esquema que exista para la informaci&oacute;n operativa de la empresa.";
 choices[49][2] = "La informaci&oacute;n var&iacute;a en el tiempo.";
 choices[49][3] = "Son colecciones de datos.";
 answers[49] = choices[49][1];
 units[49] = "68";
 comments[49] = "Id Pregunta: 4988. Examen TIC A 2007";


//  Id pregunta: 5017 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l es una caracter&iacute;stica de los sistemas de informaci&oacute;n geogr&aacute;fica basados en formato r&aacute;ster?:";
 choices[50]= new Array();
 choices[50][0] = "Utiliza puntos, l&iacute;neas y pol&iacute;gonos para almacenar la informaci&oacute;n.";
 choices[50][1] = "La precisi&oacute;n de localizaci&oacute;n es mayor que en la de otros formatos.";
 choices[50][2] = "Se construye utilizando ret&iacute;culas de tama&ntilde;o regular.";
 choices[50][3] = "No es adecuado para modelos que incluyan evoluci&oacute;n temporal.";
 answers[50] = choices[50][2];
 units[50] = "67";
 comments[50] = "Id Pregunta: 5017. Examen TIC A 2007";


//  Id pregunta: 5126 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l de los siguientes formatos gr&aacute;ficos soporta internamente datos de georeferenciaci&oacute;n?";
 choices[51]= new Array();
 choices[51][0] = ".jpeg.";
 choices[51][1] = ".tiff.";
 choices[51][2] = ".png.";
 choices[51][3] = ".bmp.";
 answers[51] = choices[51][1];
 units[51] = "67";
 comments[51] = "Id Pregunta: 5126. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5128 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l es el modelo conceptual m&aacute;s extendido para los almacenes de datos?";
 choices[52]= new Array();
 choices[52][0] = "Relacional.";
 choices[52][1] = "Multidimensional.";
 choices[52][2] = "Espacial.";
 choices[52][3] = "Temporal.";
 answers[52] = choices[52][1];
 units[52] = "68";
 comments[52] = "Id Pregunta: 5128. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5425 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  En OLAP, &iquest;Qu&eacute; son las variables complejas?";
 choices[53]= new Array();
 choices[53][0] = "Las que tienen un tipo complejo.";
 choices[53][1] = "Las que se calculan a partir de otras variables.";
 choices[53][2] = "Las que necesitan m&aacute;s de una dimensi&oacute;n para ser almacenadas.";
 choices[53][3] = "Las que no son representables.";
 answers[53] = choices[53][0];
 units[53] = "68";
 comments[53] = "Id Pregunta: 5425. Castilla y Le&oacute;n";


//  Id pregunta: 5438 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  Los sistemas colaborativos buscan";
 choices[54]= new Array();
 choices[54][0] = "Que todo el mundo participe en la toma de decisiones";
 choices[54][1] = "La puesta a disposici&oacute;n de un gran volumen de informaci&oacute;n";
 choices[54][2] = "Integrar el trabajo de muchos usuarios concurrentes en un solo proyecto";
 choices[54][3] = "El despliegue de un sistema de informaci&oacute;n que abarque a todo el personal de la organizaci&oacute;n";
 answers[54] = choices[54][2];
 units[54] = "71";
 comments[54] = "Id Pregunta: 5438. Castilla y Le&oacute;n";


//  Id pregunta: 5500 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no corresponde a la tecnolog&iacute;a de procedimiento anal&iacute;tico en l&iacute;nea (OLAP)?";
 choices[55]= new Array();
 choices[55][0] = "Proporciona respuestas r&aacute;pidas a consultas anal&iacute;ticas complejas e iterativas.";
 choices[55][1] = "Utiliza modelos de datos multidimensionales.";
 choices[55][2] = "Recuperan un dato individual con un alto rendimiento.";
 choices[55][3] = "Ofrece ventajas sobre las BBDD Relacionales a la hora de trabajar sobre datos agregados.";
 answers[55] = choices[55][2];
 units[55] = "68";
 comments[55] = "Id Pregunta: 5500. ";


//  Id pregunta: 5676 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  Indique la respuesta incorrecta en relaci&oacute;n a Sistemas de Informaci&oacute;n Geogr&aacute;ficos:";
 choices[56]= new Array();
 choices[56][0] = "El t&eacute;rmino Clearinghouse se refiere al conjunto de datos marco utilizado en el Proyecto Dublin Core.";
 choices[56][1] = "El est&aacute;ndar m&aacute;s extendido para la implementaci&oacute;n de servicios de cat&aacute;logo es el ISO 23950.";
 choices[56][2] = "ISO 19110 se ocupa de la metodolog&iacute;a de catalogaci&oacute;n de objetos geogr&aacute;ficos.";
 choices[56][3] = "ISO ha producido el ISO 19115 Metadatos.";
 answers[56] = choices[56][0];
 units[56] = "67";
 comments[56] = "Id Pregunta: 5676. NULL";


//  Id pregunta: 5905 AÃ±o de creación de pregunta: 2009-01-01
 questions[57]= "58)  Un Data Warehouse es:";
 choices[57]= new Array();
 choices[57][0] = "Una colecci&oacute;n de datos invariante en el tiempo y no vol&aacute;til.";
 choices[57][1] = "Una colecci&oacute;n de datos orientado a temas, integrados, fijos en el tiempo y no vol&aacute;tiles.";
 choices[57][2] = "Una colecci&oacute;n de datos cambiantes en el tiempo y vol&aacute;til.";
 choices[57][3] = "Una colecci&oacute;n de datos orientado a temas, integrados, cambiantes en el tiempo y no vol&aacute;tiles.";
 answers[57] = choices[57][3];
 units[57] = "68";
 comments[57] = "Id Pregunta: 5905. MAP 2008 A1";


//  Id pregunta: 6176 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  Se&ntilde;ale cual de los siguientes no se corresponde con ning&uacute;n libro SCORM";
 choices[58]= new Array();
 choices[58][0] = "Scorm Content Aggregation Model.";
 choices[58][1] = "Scorm Shareable Content Objects.";
 choices[58][2] = "Scorm Run-Time Environment.";
 choices[58][3] = "Scorm Sequencing and Navigation.";
 answers[58] = choices[58][1];
 units[58] = "66";
 comments[58] = "Id Pregunta: 6176. ";


//  Id pregunta: 6181 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  Indique la afirmaci&oacute;n verdadera";
 choices[59]= new Array();
 choices[59][0] = "El resultado de una modelizaci&oacute;n de procesos en BPMN debe ser expresado en BPML, BPEL o XPDL.";
 choices[59][1] = "El resultado de una modelizaci&oacute;n de procesos en BPML debe ser expresado en BPMN, BPEL o XPDL.";
 choices[59][2] = "El resultado de una modelizaci&oacute;n de procesos en BPEL debe ser expresado en BPML, BPMN o XPDL.";
 choices[59][3] = "El resultado de una modelizaci&oacute;n de procesos en XPDL debe ser expresado en BPML, BPEL o BPMN.";
 answers[59] = choices[59][0];
 units[59] = "71";
 comments[59] = "Id Pregunta: 6181. ";


//  Id pregunta: 6333 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  A la hora de aplicar m&eacute;todos de data mining:";
 choices[60]= new Array();
 choices[60][0] = "Lo &uacute;nico importante es que se disponga de muchos datos.";
 choices[60][1] = "Debe disponerse de muchos datos residentes en una base de datos relacional.";
 choices[60][2] = "Lo m&aacute;s importante es disponer de una buena herramienta comercial.";
 choices[60][3] = "Las bases de datos deben haberse integrado en un Data Warehouse para que los datos sean coherentes.";
 answers[60] = choices[60][3];
 units[60] = "68";
 comments[60] = "Id Pregunta: 6333. ";


//  Id pregunta: 6336 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  Indique la respuesta correcta:";
 choices[61]= new Array();
 choices[61][0] = "Las consultas de OLAP sin ser consultas de data mining permiten la realizaci&oacute;n de informes para soporte a la toma de decisiones.";
 choices[61][1] = "Todas las consultas de OLAP son tambi&eacute;n consultas de data mining.";
 choices[61][2] = "Las consultas de OLAP s&oacute;lo pueden realizarse si se ha implementado un hipercubo.";
 choices[61][3] = "Todas las respuestas son ciertas.";
 answers[61] = choices[61][0];
 units[61] = "68";
 comments[61] = "Id Pregunta: 6336. ";


//  Id pregunta: 6454 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes definiciones corresponde al modelo r&aacute;ster de un SIG?";
 choices[62]= new Array();
 choices[62][0] = "El modelo r&aacute;ster estructura el espacio en una serie de elementos discretos por medio de una ret&iacute;cula regular, generalmente compuesta por celdas cuadradas, tambi&eacute;n llamadas p&iacute;xeles.";
 choices[62][1] = "El modelo r&aacute;ster representa cada objeto geogr&aacute;fico de forma independiente mediante las primitivas gr&aacute;ficas (puntos, l&iacute;neas y pol&iacute;gonos).";
 choices[62][2] = "El modelo r&aacute;ster estructura el espacio en una serie de elementos discretos que se clasifican en puntos, l&iacute;neas o pol&iacute;gonos.";
 choices[62][3] = "El modelo r&aacute;ster representa cada objeto geogr&aacute;fico de forma independiente mediante primitivas gr&aacute;ficas, tambi&eacute;n llamadas p&iacute;xeles, a los cuales se les asocia informaci&oacute;n estructurada a modo de tablas en bases de datos relacionales.";
 answers[62] = choices[62][0];
 units[62] = "67";
 comments[62] = "Id Pregunta: 6454. Castilla La Mancha 2009";


//  Id pregunta: 6456 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  Comparando las dos arquitecturas diferentes para los sistemas OLAP: relacional y multidimensional es cierto que:";
 choices[63]= new Array();
 choices[63][0] = "Los sistemas multidimensionales delegan la informaci&oacute;n entre tiempo de respuesta y el proceso batch al dise&ntilde;o del sistema.";
 choices[63][1] = "Los sistemas multidimensionales generalmente son adecuados para diez o menos dimensiones.";
 choices[63][2] = "Los sistemas multidimensionales soportan an&aacute;lisis OLAP contra grandes vol&uacute;menes de datos elementales.";
 choices[63][3] = "Los sistemas multidimensionales pueden crecer hasta un gran n&uacute;mero de dimensiones.";
 answers[63] = choices[63][1];
 units[63] = "68";
 comments[63] = "Id Pregunta: 6456. Castilla La Mancha 2009";


//  Id pregunta: 8170 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  Entre los lenguajes de especificaci&oacute;n de workflows, NO se encuentra:";
 choices[64]= new Array();
 choices[64][0] = "YAWL.";
 choices[64][1] = "ETL.";
 choices[64][2] = "XPDL.";
 choices[64][3] = "BPEL.";
 answers[64] = choices[64][1];
 units[64] = "71";
 comments[64] = "Id Pregunta: 8170. Examen TIC A1 2010";


//  Id pregunta: 8187 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l es el sistema de referencia geod&eacute;sico establecido por el RD 1071/2007, en el que se debe compilar toda la informaci&oacute;n geogr&aacute;fica y cartograf&iacute;a oficial espa&ntilde;ola a partir del 01 de Enero de 2015?:";
 choices[65]= new Array();
 choices[65][0] = "Exclusivamente el sistema ETRS89.";
 choices[65][1] = "Los sistemas ED50 y ETRS89.";
 choices[65][2] = "Los sistemas ETRS89 y REGCAN95.";
 choices[65][3] = "El sistema ETRS-C&oacute;nica Conforme de Lambert.";
 answers[65] = choices[65][2];
 units[65] = "67";
 comments[65] = "Id Pregunta: 8187. Examen TIC A1 2010";


//  Id pregunta: 8456 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  Entre las ventajas de un Datawarehouse NO se encuentra:";
 choices[66]= new Array();
 choices[66][0] = "Reducir el tiempo de respuesta de los sistemas operacionales.";
 choices[66][1] = "Presentar una visi&oacute;n &uacute;nica de la informaci&oacute;n de una empresa.";
 choices[66][2] = "Permitir que los usuarios sean autosuficientes para satisfacer sus propias necesidades de informaci&oacute;n.";
 choices[66][3] = "Facilitar la implementaci&oacute;n de cuadros de mando.";
 answers[66] = choices[66][0];
 units[66] = "68";
 comments[66] = "Id Pregunta: 8456. Analista Ayto. Madrid 2010";


//  Id pregunta: 8604 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes utilidades permite realizar miner&iacute;a de datos?";
 choices[67]= new Array();
 choices[67][0] = "JDataMiner.";
 choices[67][1] = "Cubos OLAP de Excel.";
 choices[67][2] = "VNC.";
 choices[67][3] = "Extract to Learnt by SQLServer.";
 answers[67] = choices[67][1];
 units[67] = "68";
 comments[67] = "Id Pregunta: 8604. Examen TIC A2 2010 interna";


//  Id pregunta: 8606 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  &iquest;Cu&aacute;l de los siguientes NO es un servidor OLAP?";
 choices[68]= new Array();
 choices[68][0] = "Microstrategy OLAP Services.";
 choices[68][1] = "MDX OLAP server.";
 choices[68][2] = "Oracle Database OLAP.";
 choices[68][3] = "Mondrian OLAP Server.";
 answers[68] = choices[68][1];
 units[68] = "68";
 comments[68] = "Id Pregunta: 8606. Examen TIC A2 2010 interna";


//  Id pregunta: 8815 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  Los procesos de un Data Warehouse son:";
 choices[69]= new Array();
 choices[69][0] = "Elaboraci&oacute;n, carga, explotaci&oacute;n y an&aacute;lisis.";
 choices[69][1] = "Extracci&oacute;n, elaboraci&oacute;n, carga y explotaci&oacute;n.";
 choices[69][2] = "Extracci&oacute;n, carga, explotaci&oacute;n y an&aacute;lisis.";
 choices[69][3] = "Extracci&oacute;n, elaboraci&oacute;n, carga y an&aacute;lisis.";
 answers[69] = choices[69][1];
 units[69] = "68";
 comments[69] = "Id Pregunta: 8815. Examen TIC B 2007 y examen UPM A2 2011";


//  Id pregunta: 8842 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)   De acuerdo con el modelo de cuadro de mando (Balanced Scorecard) de Kaplan y Nolan, &iquest;cu&aacute;l de las siguientes respuestas ser&iacute;a la correcta?";
 choices[70]= new Array();
 choices[70][0] = "La implantaci&oacute;n de un cuadro de mando se debe realizar estableciendo objetivos que se deben trasladar a indicadores o medidas espec&iacute;ficas.";
 choices[70][1] = "El cuadro de mando permite a los gestores priorizar las expectativas de los clientes sobre la situaci&oacute;n financiera de la organizaci&oacute;n.";
 choices[70][2] = "El cuadro de mando permite a los gestores priorizar la situaci&oacute;n financiera de la organizaci&oacute;n sobre las expectativas de los clientes.";
 choices[70][3] = "El cuadro de mando se establece teniendo en cuenta cinco perspectivas distintas: clientes, accionistas, perspectiva interna de la organizaci&oacute;n, innovaci&oacute;n-aprendizaje y perspectiva financiera.";
 answers[70] = choices[70][0];
 units[70] = "68";
 comments[70] = "Id Pregunta: 8842. Examen UC3M 2010";


//  Id pregunta: 8867 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  En el contexto de Almac&eacute;n de datos (Data Warehouse) a los subconjuntos de datos para &aacute;reas especificas se le llama:";
 choices[71]= new Array();
 choices[71][0] = "Metadata.";
 choices[71][1] = "Data Marts.";
 choices[71][2] = "Data Ware.";
 choices[71][3] = "Data Store.";
 answers[71] = choices[71][1];
 units[71] = "68";
 comments[71] = "Id Pregunta: 8867. Analista Ayto. Madrid 2010";


//  Id pregunta: 8959 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  Dentro de las soluciones propietarias de CRM no se encuentra:";
 choices[72]= new Array();
 choices[72][0] = "Compiere";
 choices[72][1] = "SPSS- Clementine";
 choices[72][2] = "Epiphany";
 choices[72][3] = "Todas son soluciones comerciales";
 answers[72] = choices[72][0];
 units[72] = "65";
 comments[72] = "Id Pregunta: 8959. ";


//  Id pregunta: 8960 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  Los pilares de CRM son:";
 choices[73]= new Array();
 choices[73][0] = "Estrategia, personas, servicios, tecnologias";
 choices[73][1] = "Estrategia, personas, gestion, tecnologias";
 choices[73][2] = "Estrategia, clientes, servicios, tecnologias";
 choices[73][3] = "Estrategias, personas, procesos, tecnologias";
 answers[73] = choices[73][3];
 units[73] = "65";
 comments[73] = "Id Pregunta: 8960. ";


//  Id pregunta: 8963 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  Uno de los instrumentos b&aacute;sicos de los Decision Support Systems orientados a modelos es:";
 choices[74]= new Array();
 choices[74][0] = "Procesos prueba-error.";
 choices[74][1] = "Informes resumen.";
 choices[74][2] = "Informes de excepci&oacute;n.";
 choices[74][3] = "Consultas ad-hoc.";
 answers[74] = choices[74][0];
 units[74] = "68";
 comments[74] = "Id Pregunta: 8963. ";


//  Id pregunta: 9157 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  De acuerdo a AGR010, un sistema CMI (Computer Managed Instruction) con un entorno basado en web, no tiene por qu&eacute; cumplir con:";
 choices[75]= new Array();
 choices[75][0] = "Comunicaci&oacute;n HTTP (HACP Binding)";
 choices[75][1] = "Comunicaci&oacute;n mediante API (API Binding)";
 choices[75][2] = "Definici&oacute;n de la estructura del curso (File Binding)";
 choices[75][3] = "Definici&oacute;n de los tipos de datos del curso (Data Binding) ";
 answers[75] = choices[75][3];
 units[75] = "66";
 comments[75] = "Id Pregunta: 9157. ";


//  Id pregunta: 9680 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  En relaci&oacute;n con las t&eacute;cnicas de compresi&oacute;n y organizaci&oacute;n en SIG raster, se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[76]= new Array();
 choices[76][0] = "RLE (Run Length Encode) se basa en estructuras de datos orientadas a la indexaci&oacute;n espacial en las que se procede a la divisi&oacute;n recursiva de la informaci&oacute;n de partida en bloques (cuadrantes).";
 choices[76][1] = "Las t&eacute;cnicas 'Quadtrees' son m&aacute;s complejas que las RLE pero m&aacute;s eficientes.";
 choices[76][2] = "Wavelets se basa en la compresi&oacute;n de patrones y hace factible la transmisi&oacute;n a trav&eacute;s de Internet con tiempos de respuesta muy aceptables.";
 choices[76][3] = "La t&eacute;cnica m&aacute;s elemental es almacenar secuencialmente los valores del atributo en las sucesivas celdas de acuerdo a la secuencia de barrido de la imagen.";
 answers[76] = choices[76][0];
 units[76] = "67";
 comments[76] = "Id Pregunta: 9680. NULL";


//  Id pregunta: 9691 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l de las siguientes opciones representa tipos de modelos dimensionales?";
 choices[77]= new Array();
 choices[77][0] = "Modelo en estrella.";
 choices[77][1] = "Modelo Copo de nieve.";
 choices[77][2] = "Constelaciones.";
 choices[77][3] = "Todos son modelos dimensionales.";
 answers[77] = choices[77][3];
 units[77] = "68";
 comments[77] = "Id Pregunta: 9691. ";


//  Id pregunta: 9692 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  Un problema del modelo dimensional es:";
 choices[78]= new Array();
 choices[78][0] = "Data Expression.";
 choices[78][1] = "Data Complexity.";
 choices[78][2] = "Data Sparsity.";
 choices[78][3] = "Data Compression.";
 answers[78] = choices[78][2];
 units[78] = "68";
 comments[78] = "Id Pregunta: 9692. ";


//  Id pregunta: 9710 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  El modelo Vectorial de representaci&oacute;n de datos espaciales";
 choices[79]= new Array();
 choices[79][0] = "facilita establecer relaciones topol&oacute;gicas entre los elementos.";
 choices[79][1] = "utiliza s&oacute;lo dos elementos geom&eacute;tricos (puntos y l&iacute;neas) para modelar digitalmente las entidades del mundo real.";
 choices[79][2] = "divide el espacio en celdas regulares donde cada una de ellas es ubicada por un vector.";
 choices[79][3] = "almacena los datos mediante el formato vectorial de base de datos BLOB.";
 answers[79] = choices[79][0];
 units[79] = "67";
 comments[79] = "Id Pregunta: 9710. Examen TIC-A1 2013";


//  Id pregunta: 9960 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  Seleccione la opci&oacute;n CORRECTA de entre las siguientes afirmaciones que hacen referencia al esquema de estrella";
 choices[80]= new Array();
 choices[80][0] = "Un esquema de estrella es un modelo de datos que tiene una tabla de dimensiones que contiene los datos para el an&aacute;lisis y est&aacute; rodeada de las tablas de hechos.";
 choices[80][1] = "En un esquema de estrella la tabla de hechos tendr&aacute; siempre una clave primaria simple";
 choices[80][2] = "Cuando a un esquema en estrella se aplican principios de normalizaci&oacute;n a una tabla de  dimensi&oacute;n, el resultado se conoce como esquema de copo de nieve.";
 choices[80][3] = "El esquema de estrella es un modelo dimensional implementado en una base de datos multidimensional";
 answers[80] = choices[80][2];
 units[80] = "68,71";
 comments[80] = "Id Pregunta: 9960. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 9961 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  &iquest;Cu&aacute;l de las siguientes opciones NO es un operador espec&iacute;fico de un sistema o herramienta OLAP?";
 choices[81]= new Array();
 choices[81][0] = "DRILL";
 choices[81][1] = "POLL";
 choices[81][2] = "PIVOT";
 choices[81][3] = "SLICE &amp; DICE";
 answers[81] = choices[81][1];
 units[81] = "68,71";
 comments[81] = "Id Pregunta: 9961. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 9963 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  Un almac&eacute;n de datos (Data Warehouse) NO se caracteriza por ser:";
 choices[82]= new Array();
 choices[82][0] = "Integrado, los datos en el almac&eacute;n de datos deben integrarse en una estructura consistente.";
 choices[82][1] = "Orientado por temas, el almac&eacute;n de datos est&aacute; organizado de acuerdo con los temas m&aacute;s importantes para la organizaci&oacute;n";
 choices[82][2] = "Variable en el tiempo, los datos en el almac&eacute;n de datos siempre se cargan con una referencia temporal bajo la que son v&aacute;lidos.";
 choices[82][3] = "Vol&aacute;til, los datos en el almac&eacute;n de datos son le&iacute;dos, actualizados y eliminados.";
 answers[82] = choices[82][3];
 units[82] = "68,71";
 comments[82] = "Id Pregunta: 9963. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 9967 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Seg&uacute;n la Workflow Management Coalition (WfMC) &iquest;cu&aacute;l de las siguientes funciones NO es caracter&iacute;stica de un Workflow?";
 choices[83]= new Array();
 choices[83][0] = "Funciones de Control de Procesos en Tiempo de ejecuci&oacute;n (Run-time Process Control Functions).";
 choices[83][1] = "Interacciones de Actividad en Tiempo de ejecuci&oacute;n (Run-time Activity Interactions).";
 choices[83][2] = "Distribuci&oacute;n e Interfaces del Sistema (Distribution &amp; System Interfaces).";
 choices[83][3] = "Lanzamiento de Procesos Programados (Scheduled Release Process).";
 answers[83] = choices[83][3];
 units[83] = "71";
 comments[83] = "Id Pregunta: 9967. Examen Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n, Servicio sanitario Extremadura, 2014";


//  Id pregunta: 9969 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  De las siguientes afirmaciones sobre XPDL seleccione la INCORRECTA:";
 choices[84]= new Array();
 choices[84][0] = "Permite escribir especificaciones de procesos Workflow de manera estandarizada";
 choices[84][1] = "Permite una representaci&oacute;n gr&aacute;fica de los procesos incluyendo coordenadas X e Y para cada nodo implementado.";
 choices[84][2] = "Proporciona una notaci&oacute;n gr&aacute;fica para facilitar la comunicaci&oacute;n humana entre usuarios";
 choices[84][3] = "Es un lenguaje de definici&oacute;n de Workflow creado por OASIS";
 answers[84] = choices[84][3];
 units[84] = "71";
 comments[84] = "Id Pregunta: 9969. Examen Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n, Servicio sanitario Extremadura, 2014";


//  Id pregunta: 9970 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  En el &aacute;mbito de SAP ERP, los infotipos son:";
 choices[85]= new Array();
 choices[85][0] = "Objetos de C&aacute;lculo de n&oacute;mina y de Gesti&oacute;n de personal utilizados para distinguir entre importes monetarios.";
 choices[85][1] = "Unidades de tiempo que se utilizan de modos diferentes para calcular la remuneraci&oacute;n del empleado.";
 choices[85][2] = "Unidades de informaci&oacute;n en el sistema de Gesti&oacute;n de personal.";
 choices[85][3] = "T&eacute;cnicas provistas por SAP para el ingreso masivo de informaci&oacute;n";
 answers[85] = choices[85][2];
 units[85] = "65";
 comments[85] = "Id Pregunta: 9970. Examen Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n, Servicio sanitario Extremadura, 2014";


//  Id pregunta: 9972 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l de los siguientes se corresponde con un m&oacute;dulo dentro de un ERP (Enterprise Resource Planning)?";
 choices[86]= new Array();
 choices[86][0] = "Recursos Humanos";
 choices[86][1] = "Planificaci&oacute;n Estrat&eacute;gica";
 choices[86][2] = "Seguridad de Informaci&oacute;n";
 choices[86][3] = "HelpDesk";
 answers[86] = choices[86][0];
 units[86] = "65";
 comments[86] = "Id Pregunta: 9972. Examen TICA1, Xunta de GaliciA, 2011";


//  Id pregunta: 9973 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Indique cu&aacute;l de los siguientes elementos NO se asocia a un sistema datawarehouse: ";
 choices[87]= new Array();
 choices[87][0] = "Un motor de transacciones.";
 choices[87][1] = "Las herramientas de Extracci&oacute;n, Transformaci&oacute;n y Carga de datos.";
 choices[87][2] = "Las herramientas de explotaci&oacute;n anal&iacute;tica de la informaci&oacute;n.";
 choices[87][3] = "La base de datos multidimensional";
 answers[87] = choices[87][0];
 units[87] = "68,71";
 comments[87] = "Id Pregunta: 9973. Examen TICA1, Xunta de GaliciA, 2011";


//  Id pregunta: 9989 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  &iquest;Cu&aacute;l de los siguientes no es un sistema de gesti&oacute;n de conocimiento con licencia de software libre?";
 choices[88]= new Array();
 choices[88][0] = "ATutor";
 choices[88][1] = "Claroline";
 choices[88][2] = "Joomla";
 choices[88][3] = "Moodle";
 answers[88] = choices[88][2];
 units[88] = "66";
 comments[88] = "Id Pregunta: 9989. ";


//  Id pregunta: 10292 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  &iquest;A qu&eacute; altitud aproximada est&aacute; la &oacute;rbita de los sat&eacute;lites que forman el sistema GPS?";
 choices[89]= new Array();
 choices[89][0] = "5.200 km";
 choices[89][1] = "20.200 km";
 choices[89][2] = "36.200 km";
 choices[89][3] = "45.200 km";
 answers[89] = choices[89][1];
 units[89] = "67";
 comments[89] = "Id Pregunta: 10292. TIC A2, libre, examen 2013";


//  Id pregunta: 10839 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  De las siguientes herramientas de teleaprendizaje para formaci&oacute;n de usuarios y personal t&eacute;cnico, indique cu&aacute;l es de software propietario:";
 choices[90]= new Array();
 choices[90][0] = "Catedr@.";
 choices[90][1] = "Dokeos.";
 choices[90][2] = "Moodle.";
 choices[90][3] = "Claroline.";
 answers[90] = choices[90][0];
 units[90] = "66";
 comments[90] = "Id Pregunta: 10839. Examen GSI 2014";


//  Id pregunta: 10863 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  De acuerdo a las operaciones que se requieran desarrollar, los Data Marts pueden adoptar diversas arquitecturas, se&ntilde;ale la caracter&iacute;stica correspondiente a la arquitectura Top-Down:";
 choices[91]= new Array();
 choices[91][0] = "Se definen previamente los Data Marts (DM) y luego se integran en un Data Warehouse (DW) centralizado. Los DM se cargan a trav&eacute;s de procesos ETL.";
 choices[91][1] = "Se define previamente un DW y un DM principal que se cargan a trav&eacute;s de procesos ETL. El DW alimentar&aacute; a otros DW, y el DM principal alimentar&aacute; a otros DM.";
 choices[91][2] = "Se define una base de datos (BD) principal que se carga mediante procesos ETL desde todas las BD corporativas, esta BD alimenta en exclusiva a todos los DM y DW existentes.";
 choices[91][3] = "Primero se define el DW, el cual es cargado a trav&eacute;s de procesos ETL y luego este alimenta a los diferentes DM. Cada DM recibir&aacute; los datos que correspondan al tema/departamento que traten.";
 answers[91] = choices[91][3];
 units[91] = "68, 71";
 comments[91] = "Id Pregunta: 10863. Examen GSI 2014";


//  Id pregunta: 10922 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de los siguientes servicios transforma un texto original en un hipertexto con v&iacute;nculos geogr&aacute;ficos?:";
 choices[92]= new Array();
 choices[92][0] = "Coberturas en Web (WCS).";
 choices[92][1] = "Nom&eacute;nclator (Gazetteer).";
 choices[92][2] = "Cat&aacute;logo (CSW).";
 choices[92][3] = "Geoparser.";
 answers[92] = choices[92][3];
 units[92] = "67";
 comments[92] = "Id Pregunta: 10922. TIC A1 AGE 2014";


//  Id pregunta: 11044 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l de las siguientes NO es una soluci&oacute;n comercial de ERP?";
 choices[93]= new Array();
 choices[93][0] = "Microsoft Dynamics";
 choices[93][1] = "HP LoadRunner";
 choices[93][2] = "Oracle E-Business Suite";
 choices[93][3] = "SAP";
 answers[93] = choices[93][1];
 units[93] = "65";
 comments[93] = "Id Pregunta: 11044. ";


//  Id pregunta: 11045 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l no es una caracter&iacute;stica de la gesti&oacute;n de Sistemas de Informaci&oacute;n Geogr&aacute;fica?";
 choices[94]= new Array();
 choices[94][0] = "Es muy voluminosa";
 choices[94][1] = "Es borrosa";
 choices[94][2] = "Es din&aacute;mica";
 choices[94][3] = "Todas son caracter&iacute;sticas";
 answers[94] = choices[94][3];
 units[94] = "67";
 comments[94] = "Id Pregunta: 11045. ";


//  Id pregunta: 11046 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Qu&eacute; Directiva establece las reglas generales para el establecimiento de una Infraestructura de Informaci&oacute;n Espacial en la Comunidad Europea basada en las Infraestructuras de los Estados miembros?";
 choices[95]= new Array();
 choices[95][0] = "INSPIRE";
 choices[95][1] = "SIGPAC";
 choices[95][2] = "SIC";
 choices[95][3] = "SIGMAPA";
 answers[95] = choices[95][0];
 units[95] = "67";
 comments[95] = "Id Pregunta: 11046. ";


//  Id pregunta: 11281 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Qu&eacute; es un servicio WPS?";
 choices[96]= new Array();
 choices[96][0] = "Un servicio de descarga de datos vectoriales";
 choices[96][1] = "Un servicio de visualizaci&oacute;n de coberturas r&aacute;ster";
 choices[96][2] = "Un servicio de transformaci&oacute;n";
 choices[96][3] = "No es un tipo de servicio";
 answers[96] = choices[96][2];
 units[96] = "67";
 comments[96] = "Id Pregunta: 11281. ";


//  Id pregunta: 11509 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l de los siguientes NO hace referencia a un proyecto de Big Data?";
 choices[97]= new Array();
 choices[97][0] = "Flume";
 choices[97][1] = "Cassandra";
 choices[97][2] = "Galenicum";
 choices[97][3] = "Hbase";
 answers[97] = choices[97][2];
 units[97] = "68";
 comments[97] = "Id Pregunta: 11509. NULL";


//  Id pregunta: 11511 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Cu&aacute;l de los siguientes sistemas de Big Data es utilizado por el Red Social Facebook?";
 choices[98]= new Array();
 choices[98][0] = "Hive";
 choices[98][1] = "Cassandra";
 choices[98][2] = "Hbase";
 choices[98][3] = "ZoneKeeper";
 answers[98] = choices[98][2];
 units[98] = "68";
 comments[98] = "Id Pregunta: 11511. NULL";


//  Id pregunta: 11512 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Indique la FALSA respecto al concepto MapReduce.";
 choices[99]= new Array();
 choices[99][0] = "Es un paradigma de programaci&oacute;n utilizado en plataformas de Big Data";
 choices[99][1] = "Adem&aacute;s de los procesos Map y Reduce, incorpora una fase intermedia de Shuffle que permite balancear la carga de las tuplas de entrada.";
 choices[99][2] = "El proceso Map consiste en tomar las salidas del proceso Reduce y combina dichas tuplas en un conjunto m&aacute;s peque&ntilde;o.";
 choices[99][3] = "Proceso Map toma un conjunto de datos y lo convierte en otro conjunto, separando los elementos indiviudales en tuplas (pares clave/valor)";
 answers[99] = choices[99][2];
 units[99] = "68";
 comments[99] = "Id Pregunta: 11512. NULL";


