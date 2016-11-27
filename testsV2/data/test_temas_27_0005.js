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


//  Id pregunta: 722 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no corresponde a la tecnolog&iacute;a de procedimiento anal&iacute;tico en l&iacute;nea (OLAP)?";
 choices[1]= new Array();
 choices[1][0] = "Proporciona respuestas r&aacute;pidas a consultas anal&iacute;ticas complejas e iterativas.";
 choices[1][1] = "Utiliza modelos de datos multidimensionales.";
 choices[1][2] = "Proporciona la velocidad y flexibilidad necesarias en tiempo real.";
 choices[1][3] = "Est&aacute; basado en modelos de datos jer&aacute;rquicos.";
 answers[1] = choices[1][3];
 units[1] = "68";
 comments[1] = "Id Pregunta: 722. Examen TIC MAP B 2004";


//  Id pregunta: 740 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  En inteligencia artificial, los marcos";
 choices[2]= new Array();
 choices[2][0] = "Internamente est&aacute;n formados por ranuras, cada una de las cuales representa una caracter&iacute;stica del marco";
 choices[2][1] = "Requieren de un proceso de entrenamiento previo, al igual que las redes neuronales.";
 choices[2][2] = "Utiliza como estrategias de inferencia en el proceso deductivo las estrategias en X, Y y Z";
 choices[2][3] = "Se representan mediante nodos y arcos";
 answers[2] = choices[2][0];
 units[2] = "64";
 comments[2] = "Id Pregunta: 740. Similar a examen TIC SS A 2003";


//  Id pregunta: 742 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  Entre las caracter&iacute;sticas de un Data Warehouse se encuentra que es un sistema:";
 choices[3]= new Array();
 choices[3][0] = "Independiente del tiempo.";
 choices[3][1] = "Integrado.";
 choices[3][2] = "Vol&aacute;til.";
 choices[3][3] = "Ninguna de las anteriores.";
 answers[3] = choices[3][1];
 units[3] = "68";
 comments[3] = "Id Pregunta: 742. Similar a examen TIC SS A 2003";


//  Id pregunta: 791 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  Seg&uacute;n la licencia GNU GPL (General Public License), &iquest;cu&aacute;l de las siguientes sentencias no es correcta?";
 choices[4]= new Array();
 choices[4][0] = "Disponemos de la libertad de estudiar c&oacute;mo funciona el programa y adaptarlo seg&uacute;n nuestras necesidades";
 choices[4][1] = "Nuestro derecho de autor queda salvaguardado";
 choices[4][2] = "Podemos redistribuir todas las copias que queramos";
 choices[4][3] = "No se puede cobrar dinero por el software libre.";
 answers[4] = choices[4][3];
 units[4] = "61";
 comments[4] = "Id Pregunta: 791. ";


//  Id pregunta: 843 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre ingenier&iacute;a del conocimiento es falsa?:";
 choices[5]= new Array();
 choices[5][0] = "S&oacute;lo trata problemas de tipo heur&iacute;stico";
 choices[5][1] = "No utiliza enfoques algor&iacute;tmicos";
 choices[5][2] = "Requiere una estructura eminentemente declarativa";
 choices[5][3] = "Los programas que generan son primordialmente procedimentales";
 answers[5] = choices[5][3];
 units[5] = "64";
 comments[5] = "Id Pregunta: 843. ";


//  Id pregunta: 844 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre un proyecto GIS es cierta?:";
 choices[6]= new Array();
 choices[6][0] = "La digitalizaci&oacute;n de una cartograf&iacute;a existente es cara por lo laborioso del proceso de digitalizaci&oacute;n ya que requiere mucho trabajo manual de depuraci&oacute;n y correcci&oacute;n.";
 choices[6][1] = "Mientras el coste del uso de los sat&eacute;lites de posici&oacute;n no baje, la obtenci&oacute;n de datos mediante itinerarios con GPS siempre presenta una relaci&oacute;n coste/calidad inaceptable.";
 choices[6][2] = "El procesado de im&aacute;genes de sat&eacute;lite es complicado puesto que la informaci&oacute;n r&aacute;ster no puede ser vectorizada.";
 choices[6][3] = "La fotogrametr&iacute;a es una opci&oacute;n viable s&oacute;lo cuando no existan otros m&eacute;todos (trazado por GPS, procesado de im&aacute;genes de sat&eacute;lite, digitalizaci&oacute;n de cartograf&iacute;as existentes) por lo elevado de su coste.";
 answers[6] = choices[6][0];
 units[6] = "67";
 comments[6] = "Id Pregunta: 844. NULL";


//  Id pregunta: 862 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de los siguientes elementos no forma parte de la arquitectura basada en inteligencia artificial?:";
 choices[7]= new Array();
 choices[7][0] = "Base de conocimientos";
 choices[7][1] = "Sistema inferencial";
 choices[7][2] = "Motor inferencial";
 choices[7][3] = "Memoria de trabajo";
 answers[7] = choices[7][2];
 units[7] = "64";
 comments[7] = "Id Pregunta: 862. ";


//  Id pregunta: 868 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l de los siguientes no es un grupo de &aacute;reas de aplicaci&oacute;n de la inteligencia artifical?";
 choices[8]= new Array();
 choices[8][0] = "juegos, sistemas expertos, demostraci&oacute;n de teoremas";
 choices[8][1] = "lenguaje natural, razonamiento autom&aacute;tico, redes neuronales";
 choices[8][2] = "algoritmos gen&eacute;ticos, modelizaci&oacute;n del comportamiento humano, rob&oacute;tica";
 choices[8][3] = "todas son &aacute;reas de aplicaci&oacute;n de la inteligencia artificial";
 answers[8] = choices[8][3];
 units[8] = "63";
 comments[8] = "Id Pregunta: 868. ";


//  Id pregunta: 869 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de los siguientes no es un lenguaje declarativo?:";
 choices[9]= new Array();
 choices[9][0] = "Prolog";
 choices[9][1] = "LISP";
 choices[9][2] = "Clos";
 choices[9][3] = "Todos los lenguajes anteriores son declarativos";
 answers[9] = choices[9][3];
 units[9] = "64";
 comments[9] = "Id Pregunta: 869. ";


//  Id pregunta: 917 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Qu&eacute; es Apache?:";
 choices[10]= new Array();
 choices[10][0] = "Una versi&oacute;n del sistema operativo Linux";
 choices[10][1] = "Un servidor web propiedad de Microsoft";
 choices[10][2] = "Una autoridad de certificaci&oacute;n ampliamente utilizada en Espa&ntilde;a";
 choices[10][3] = "Un servidor web del tipo &quot;software libre&quot;";
 answers[10] = choices[10][3];
 units[10] = "62";
 comments[10] = "Id Pregunta: 917. ";


//  Id pregunta: 918 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Qu&eacute; es el abandonware?:";
 choices[11]= new Array();
 choices[11][0] = "Consiste en retomar proyectos software interesantes, que fueron abandonados en su momento por falta de rentabilidad";
 choices[11][1] = "Consiste en recopilar SW ya anticuado, cuyo soporte ha sido abandonado por la empresa/persona creadora, y que normalmente podr&aacute; obtenerse gratuitamente al estar descatalogado";
 choices[11][2] = "Consiste en estudiar el SW que circula por la red &quot;sin due&ntilde;o&quot; y que carece de las correspondientes licencias de distribuci&oacute;n";
 choices[11][3] = "Nada de lo anterior es cierto";
 answers[11] = choices[11][1];
 units[11] = "61";
 comments[11] = "Id Pregunta: 918. ";


//  Id pregunta: 967 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Cuando empleamos el t&eacute;mino &lsquo;overlay&rsquo; en relaci&oacute;n con los sistemas de  informaci&oacute;n geogr&aacute;fica, nos estamos refiriendo a:";
 choices[12]= new Array();
 choices[12][0] = "Aquella operaci&oacute;n geogr&aacute;fica que se usa cuando el an&aacute;lisis de la informaci&oacute;n requiere que se identifique el &aacute;rea que rodea a cualquiera de las entidades: nodo, l&iacute;nea o superficie.";
 choices[12][1] = "Al trazado de caminos con distintas condiciones de comienzo, intermedias y finales.";
 choices[12][2] = "Aquella operaci&oacute;n espacial que consiste en obtener el pol&iacute;gono intersecci&oacute;n de dos &aacute;reas o pol&iacute;gonos.";
 choices[12][3] = "Este t&eacute;rmino no se empleaa nunca en relaci&oacute;n con los S.I.G.";
 answers[12] = choices[12][2];
 units[12] = "67";
 comments[12] = "Id Pregunta: 967. NULL";


//  Id pregunta: 1040 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  El objetivo del aprendizaje no supervisado en miner&iacute;a de datos basado en modelado consiste en:";
 choices[13]= new Array();
 choices[13][0] = "Asignar nuevas situaciones a clases a partir de ejemplos existentes.";
 choices[13][1] = "Determinar el comportamiento futuro a partir de datos hist&oacute;ricos.";
 choices[13][2] = "Establecer grupos de parecidos.";
 choices[13][3] = "Descubren patrones y tendencias en los datos.";
 answers[13] = choices[13][3];
 units[13] = "68";
 comments[13] = "Id Pregunta: 1040. ";


//  Id pregunta: 1110 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  En la orientaci&oacute;n l&oacute;gica de la inteligencia artificial podemos afirmar que:";
 choices[14]= new Array();
 choices[14][0] = "El c&aacute;lculo proposicional entra en la sem&aacute;ntica de las proposiciones, distinguiendo en ella los componentes predicados y los t&eacute;rminos";
 choices[14][1] = "El c&aacute;lculo de predicados representa el lenguaje usual tomando como elemento b&aacute;sico de la formulaci&oacute;n una representaci&oacute;n matem&aacute;tica de las frases declarativas simples (proposiciones)";
 choices[14][2] = "En el c&aacute;lculo proposicional, una proposici&oacute;n es la unidad m&iacute;nima del lenguaje con un contenido de informaci&oacute;n, sobre cuyo significado es posible afirmar la verdad o falsedad";
 choices[14][3] = "Las clases de conectivas &quot;negaci&oacute;n y condicional&quot; pertenecen al c&aacute;lculo de predicados";
 answers[14] = choices[14][2];
 units[14] = "63";
 comments[14] = "Id Pregunta: 1110. ";


//  Id pregunta: 1112 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  En la terminolog&iacute;a de software libre:";
 choices[15]= new Array();
 choices[15][0] = "El software libre no tiene porque ser gratis";
 choices[15][1] = "Las licencias existentes no ponen ning&uacute;n tipo de limitaciones a su modificaci&oacute;n";
 choices[15][2] = "A la hora de redistribuir el software, s&oacute;lo podemos redistribuir las fuentes";
 choices[15][3] = "El uso de software considerado como libre s&oacute;lo est&aacute; disponible para determinadas plataformas, por incompatibilidades t&eacute;cnicas";
 answers[15] = choices[15][0];
 units[15] = "61";
 comments[15] = "Id Pregunta: 1112. ";


//  Id pregunta: 1178 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Indicar cu&aacute;l de las siguientes no es una tendencia en el desarrollo de Sistemas Basados en el Conocimiento (SBC):";
 choices[16]= new Array();
 choices[16][0] = "Los SBC se conciben como sistemas que han de integrarse dentro de otros, en vez de trabajar en solitario";
 choices[16][1] = "Cada vez son m&aacute;s frecuentadas los SBC h&iacute;bridos, que combinan diferentes t&eacute;cnicas de representaci&oacute;n del conocimiento, frente a los de reglas puros";
 choices[16][2] = "Cada vez m&aacute;s se concibe a los SBC como un sistema de procesamiento especial de la informaci&oacute;n";
 choices[16][3] = "Cada vez se presta m&aacute;s atenci&oacute;n a conceptos tales como: ciclo de vida del proyecto, mantenimiento de sistemas, soluciones y retorno esperable, y metodolog&iacute;as de construcci&oacute;n";
 answers[16] = choices[16][2];
 units[16] = "64";
 comments[16] = "Id Pregunta: 1178. ";


//  Id pregunta: 1261 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Las redes neuronales son:";
 choices[17]= new Array();
 choices[17][0] = "Redes de comunicaciones controladas por inteligencia artificial";
 choices[17][1] = "Redes de ordenadores que piensan";
 choices[17][2] = "Una tecnolog&iacute;a que emula el funcionamiento del cerebro humano";
 choices[17][3] = "Nada de lo anterior";
 answers[17] = choices[17][2];
 units[17] = "63";
 comments[17] = "Id Pregunta: 1261. ";


//  Id pregunta: 1359 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Si a un sistema experto se le vac&iacute;a su base de conocimientos dejando intactos el resto de sus componentes (base de reglas y motor de inferencia) para que se pueda aplicar a temas similares al que dio lugar al desarrollo se denomina  sistema:";
 choices[18]= new Array();
 choices[18][0] = "Kernel o n&uacute;cleo";
 choices[18][1] = "Concha o shell";
 choices[18][2] = "Sistema inferente";
 choices[18][3] = "Sistema fuente";
 answers[18] = choices[18][1];
 units[18] = "64";
 comments[18] = "Id Pregunta: 1359. ";


//  Id pregunta: 1406 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Un tesauro es lineal cuando:";
 choices[19]= new Array();
 choices[19][0] = "Las relaciones entre descriptores constituyen una estructura de red";
 choices[19][1] = "Los descriptores se clasifican jer&aacute;rquicamente con un cierto criterio";
 choices[19][2] = "Se componen de una relaci&oacute;n de palabras o descriptores sin conexiones entre ellos";
 choices[19][3] = "Los descriptores se clasifican formando una estructura en anillo";
 answers[19] = choices[19][2];
 units[19] = "64";
 comments[19] = "Id Pregunta: 1406. ";


//  Id pregunta: 1408 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Una base de datos multidimensional:";
 choices[20]= new Array();
 choices[20][0] = "Es igual que una relacional, solo que con sistema de indices inversos duplicados que acelera los accesos en un 40%.";
 choices[20][1] = "Est&aacute; formado por la relaci&oacute;n existente entre tablas de hechos y dimensiones.";
 choices[20][2] = "El t&eacute;rmino se aplica a las bases de datos con tecnolog&iacute;a ISAM, por las m&uacute;ltiples posibilidades que ofrecen.";
 choices[20][3] = "&Uacute;nicamente existe cundo las comunicaciones con el servidor han de ser as&iacute;ncronas en el tiempo.";
 answers[20] = choices[20][1];
 units[20] = "68";
 comments[20] = "Id Pregunta: 1408. ";


//  Id pregunta: 1449 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes licencias no es compatible con la licencia General Public License (GPL)?:";
 choices[21]= new Array();
 choices[21][0] = "Lesser General Public License (LGPL)";
 choices[21][1] = "Modified BSD License";
 choices[21][2] = "Mozilla Public License (MPL)";
 choices[21][3] = "X11 License";
 answers[21] = choices[21][2];
 units[21] = "61,62";
 comments[21] = "Id Pregunta: 1449. ";


//  Id pregunta: 1558 AÃ±o de creación de pregunta: 2003-01-01
 questions[22]= "23)  &iquest;C&uacute;al de los modelos de datos de Sistemas de Informaci&oacute;n Geogr&aacute;fica es m&aacute;s adecuado para representar l&iacute;neas con precisi&oacute;n y superficies rellenas?";
 choices[22]= new Array();
 choices[22][0] = "Modelo R&aacute;ster.";
 choices[22][1] = "Modelo Vectorial.";
 choices[22][2] = "Modelo R&aacute;ster y Modelo Vectorial.";
 choices[22][3] = "El modelo R&aacute;ster para l&iacute;neas y el modelo Vectorial para superficies.";
 answers[22] = choices[22][2];
 units[22] = "67";
 comments[22] = "Id Pregunta: 1558. NULL";


//  Id pregunta: 1630 AÃ±o de creación de pregunta: 2003-01-01
 questions[23]= "24)  Sobre lenguajes de comunicaci&oacute;n entre sistemas multiagente cual es cierta";
 choices[23]= new Array();
 choices[23][0] = "Se utiliza KQML porque aporta generalidad y ortogonalidad ";
 choices[23][1] = "Se utiliza KQML porque aporta generalidad y no ortogonalidad";
 choices[23][2] = "utiliza KIF porque aporta generalidad y ortogonalidad";
 choices[23][3] = "Se utiliza ARCHON porque aporta generalidad y ortogonalidad";
 answers[23] = choices[23][0];
 units[23] = "63";
 comments[23] = "Id Pregunta: 1630. ";


//  Id pregunta: 1633 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  &iquest;Cu&aacute;l es un navegador propietario?";
 choices[24]= new Array();
 choices[24][0] = "Lynx";
 choices[24][1] = "Epiphany";
 choices[24][2] = "Firefox";
 choices[24][3] = "Internet Explorer";
 answers[24] = choices[24][3];
 units[24] = "62";
 comments[24] = "Id Pregunta: 1633. ";


//  Id pregunta: 1773 AÃ±o de creación de pregunta: 2006-01-01
 questions[25]= "26)  &iquest;C&oacute;mo se llama la versi&oacute;n en software libre de la plataforma .Net?";
 choices[25]= new Array();
 choices[25][0] = ".DOT";
 choices[25][1] = ".free";
 choices[25][2] = "Mono";
 choices[25][3] = "Gambas";
 answers[25] = choices[25][2];
 units[25] = "61,62";
 comments[25] = "Id Pregunta: 1773. ";


//  Id pregunta: 1776 AÃ±o de creación de pregunta: 2006-01-01
 questions[26]= "27)  El modelo de proceso de desarrollo de fuente abierta, b&aacute;sicamente descentralizado y caracter&iacute;stico de productos como Linux, Apache, Mozilla, Perl y Lisp/Emacs, se ha dado en llamar:";
 choices[26]= new Array();
 choices[26][0] = "Mercado";
 choices[26][1] = "Bazar";
 choices[26][2] = "Catedral";
 choices[26][3] = "Iglesia";
 answers[26] = choices[26][1];
 units[26] = "61,62";
 comments[26] = "Id Pregunta: 1776. ";


//  Id pregunta: 1778 AÃ±o de creación de pregunta: 2006-01-01
 questions[27]= "28)  &iquest;Cual de los siguientes ser&iacute;a uno de los productos equivalentes a Excel en el software libre?";
 choices[27]= new Array();
 choices[27][0] = "Konqueror";
 choices[27][1] = "Kspread";
 choices[27][2] = "Apache";
 choices[27][3] = "Evolution";
 answers[27] = choices[27][1];
 units[27] = "61,62";
 comments[27] = "Id Pregunta: 1778. ";


//  Id pregunta: 1781 AÃ±o de creación de pregunta: 2006-01-01
 questions[28]= "29)  Cual de los siguientes no forma parte del paquete Open Office";
 choices[28]= new Array();
 choices[28][0] = "Impress";
 choices[28][1] = "Calc";
 choices[28][2] = "Math";
 choices[28][3] = "Text";
 answers[28] = choices[28][3];
 units[28] = "61,62";
 comments[28] = "Id Pregunta: 1781. ";


//  Id pregunta: 1782 AÃ±o de creación de pregunta: 2006-01-01
 questions[29]= "30)  Se&ntilde;ale la definici&oacute;n m&aacute;s correcta para el producto XEN:";
 choices[29]= new Array();
 choices[29][0] = "Entorno de ejecuci&oacute;n .NET sobre Linux, al estilo de Mono";
 choices[29][1] = "Hoja de c&aacute;lculo para KDE";
 choices[29][2] = "Sistema gestor de redes empresariales extendidas";
 choices[29][3] = "Sistema de virtualizaci&oacute;n de sistemas operativos, de fuente abierta";
 answers[29] = choices[29][3];
 units[29] = "61,62";
 comments[29] = "Id Pregunta: 1782. ";


//  Id pregunta: 1783 AÃ±o de creación de pregunta: 2006-01-01
 questions[30]= "31)  En el proyecto RHODAS del MAP, para la renovaci&oacute;n del parque ofim&aacute;tico del ministerio mediante puestos de trabajo equipados con software libre, indique qu&eacute; entorno de escritorio fue elegido en la arquitectura de referencia:";
 choices[30]= new Array();
 choices[30][0] = "KDE";
 choices[30][1] = "Wine";
 choices[30][2] = "GNOME";
 choices[30][3] = "Konkeror";
 answers[30] = choices[30][0];
 units[30] = "61,62";
 comments[30] = "Id Pregunta: 1783. ";


//  Id pregunta: 1799 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  En sistemas de representaci&oacute;n del conocimiento mediante reglas, el disparo de una regla en el mecanismo de inferencia con encadenamiento hacia delante:";
 choices[31]= new Array();
 choices[31][0] = "Produce en general cambios en la base de hechos, de forma que reglas que se pod&iacute;an disparar dejan de poder hacerlo y otras pasan a verificar su antecedente";
 choices[31][1] = "Produce en general cambios en la base de hechos, de forma que reglas que se pod&iacute;an disparar pueden seguir haci&eacute;ndolo y otras pasan tambi&eacute;n a verificar su antecedente";
 choices[31][2] = "El antecedente de la regla seleccionada est&aacute; formado por hechos que son consi-derados ahora como subobjetivos iniciando de nuevo el proceso";
 choices[31][3] = "La idea es partir del objetivo, seleccionar una regla y entonces elegir como otro u otros subobjetivos los hechos que est&aacute;n en el antecedente de la regla seleccionada, repitiendo el proceso de selecci&oacute;n de regla hasta alcanzar los datos";
 answers[31] = choices[31][0];
 units[31] = "64";
 comments[31] = "Id Pregunta: 1799. ";


//  Id pregunta: 1803 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  &iquest;Qu&eacute; es moodle?";
 choices[32]= new Array();
 choices[32][0] = "Un sistema de gest&oacute;n de la ense&ntilde;anza de Software libre";
 choices[32][1] = "Un sistema de gesti&oacute;n de contenidos gratuito pero no libre";
 choices[32][2] = "Un buscador de Internet";
 choices[32][3] = "Un entorno de escritorio para sistemas Linux bajo tecnolog&iacute;a X Windows";
 answers[32] = choices[32][0];
 units[32] = "66";
 comments[32] = "Id Pregunta: 1803. Moodle tiene licencia GNU GPL.";


//  Id pregunta: 1808 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  En un GIS, el modelo vectorial ";
 choices[33]= new Array();
 choices[33][0] = "Utiliza nodos, l&iacute;neas y pol&iacute;gonos para representar los datos geogr&aacute;ficos.";
 choices[33][1] = "Cada l&iacute;nea se define por todos los puntos intermedios, almacenando todos ellos.";
 choices[33][2] = "Utiliza m&aacute;s espacio de almacenamiento que el modelo r&aacute;ster.";
 choices[33][3] = "Es preferible al modelo r&aacute;ster para superposici&oacute;n de planos.";
 answers[33] = choices[33][0];
 units[33] = "67";
 comments[33] = "Id Pregunta: 1808. NULL";


//  Id pregunta: 1812 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  En el campo de los sistemas de informaci&oacute;n geogr&aacute;fica, un IDE es:";
 choices[34]= new Array();
 choices[34][0] = "Un conjunto de tecnolog&iacute;as, est&aacute;ndares y recursos humanos necesarios para adquirir, procesar, almacenar, distribuir y mejorar la utilizaci&oacute;n de la informaci&oacute;n geogr&aacute;fica.";
 choices[34][1] = "Un entorno de desarrollo integrado para la elaboraci&oacute;n de aplicaciones que utilizan informaci&oacute;n geogr&aacute;fica.";
 choices[34][2] = "Una infraestructura de datos empresariales, que permite la unificaci&oacute;n de sistemas de informaci&oacute;n geogr&aacute;fica con topolog&iacute;a distribuida.";
 choices[34][3] = "Un sistema de informaci&oacute;n cartogr&aacute;fica como Arc/Info y Arc/View.";
 answers[34] = choices[34][0];
 units[34] = "67";
 comments[34] = "Id Pregunta: 1812. NULL";


//  Id pregunta: 1814 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  El modelo de datos vectorial utilizado en sistemas de informaci&oacute;n geogr&aacute;fica, utiliza los siguientes elementos de representaci&oacute;n para la informaci&oacute;n topol&oacute;gica (se&ntilde;ale la respuesta correcta):";
 choices[35]= new Array();
 choices[35][0] = "Puntos, arcos, politopos.";
 choices[35][1] = "Puntos, segmentos, pol&iacute;gonos.";
 choices[35][2] = "Puntos, arcos, pol&iacute;gonos.";
 choices[35][3] = "Puntos, arcos, segmentos.";
 answers[35] = choices[35][2];
 units[35] = "67";
 comments[35] = "Id Pregunta: 1814. NULL";


//  Id pregunta: 1818 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  De acuerdo al Garner Group, la transformaci&oacute;n de los datos de la compa&ntilde;&iacute;a en conocimiento para obtener una ventaja competitiva se define como:";
 choices[36]= new Array();
 choices[36][0] = "Business Intelligence.";
 choices[36][1] = "Data Mining.";
 choices[36][2] = "ETL.";
 choices[36][3] = "Balanced Score Card.";
 answers[36] = choices[36][0];
 units[36] = "68";
 comments[36] = "Id Pregunta: 1818. ";


//  Id pregunta: 1819 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  El fen&oacute;meno por el que se encuentran huecos entre las tablas de datos multidimensionales se conoce como:";
 choices[37]= new Array();
 choices[37][0] = "Data sparsity.";
 choices[37][1] = "Data cleansing.";
 choices[37][2] = "Data mining.";
 choices[37][3] = "Data explosion.";
 answers[37] = choices[37][0];
 units[37] = "68";
 comments[37] = "Id Pregunta: 1819. ";


//  Id pregunta: 1822 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  Entre los modelos t&iacute;picos de bases de datos multidimensionales se encuentra:";
 choices[38]= new Array();
 choices[38][0] = "Modelo en estrella.";
 choices[38][1] = "El modelo de copo de nieve.";
 choices[38][2] = "Modelo constelaci&oacute;n.";
 choices[38][3] = "Todos los anteriores son correctos.";
 answers[38] = choices[38][3];
 units[38] = "68";
 comments[38] = "Id Pregunta: 1822. ";


//  Id pregunta: 1827 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  La operaci&oacute;n que permite navegar hacia un mayor nivel de agregaci&oacute;n en dimensiones en un Datawarehouse se conoce como:";
 choices[39]= new Array();
 choices[39][0] = "Drill-Down.";
 choices[39][1] = "Roll-Up.";
 choices[39][2] = "Drill-Through.";
 choices[39][3] = "Slice and Dice.";
 answers[39] = choices[39][1];
 units[39] = "68";
 comments[39] = "Id Pregunta: 1827. ";


//  Id pregunta: 1931 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  Seleccione la afirmaci&oacute;n incorrecta sobre la relaci&oacute;n de la especificaci&oacute;n Learning Design con otras especificaciones";
 choices[40]= new Array();
 choices[40][0] = "IMS DR puede ser transformado a las caracter&iacute;sticas de Learning Design, particularmente con la clase &quot;abstract person&quot;";
 choices[40][1] = "Learning Design puede ser integrado dentro la estructura de IMS Content Package en la secci&oacute;n de &lt;organization&gt;";
 choices[40][2] = "Learning Design puede incorporar preguntas y test definidos con IMS QTI";
 choices[40][3] = "Learning Design incluye expresiones, metadatos y vocabularios de IMS y IEEE metadata";
 answers[40] = choices[40][0];
 units[40] = "66";
 comments[40] = "Id Pregunta: 1931. ";


//  Id pregunta: 3907 AÃ±o de creación de pregunta: 2003-01-01
 questions[41]= "42)  &iquest;Cu&aacute;l no es un objetivo del uso de t&eacute;cnicas CRM?";
 choices[41]= new Array();
 choices[41][0] = "Usar las relaciones cliente-proveedor para aumentar los beneficios";
 choices[41][1] = "Usar las diferentes fuentes de informaci&oacute;n e integrarlas para proporcionar un servicio excelente";
 choices[41][2] = "Poner en marcha una soluci&oacute;n estrat&eacute;gica proactiva";
 choices[41][3] = "Contar con soluciones parciales para cada etapa de la relaci&oacute;n con los ciudadanos";
 answers[41] = choices[41][3];
 units[41] = "65";
 comments[41] = "Id Pregunta: 3907. ";


//  Id pregunta: 4071 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  &iquest;Cu&aacute;l de las siguientes categorias de software no estan incluidas tipicamente en un ERP ?";
 choices[42]= new Array();
 choices[42][0] = "Gesti&oacute;n de Nomina";
 choices[42][1] = "Gesti&oacute;n de RRHH";
 choices[42][2] = "Gesti&oacute;n de Contabilidad";
 choices[42][3] = "Gesti&oacute;n de Clientes";
 answers[42] = choices[42][3];
 units[42] = "65";
 comments[42] = "Id Pregunta: 4071. ";


//  Id pregunta: 4440 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  Dentro de Ia tecnolog&iacute;a de Sistemas de Informaci&oacute;n Geogr&aacute;fica, si la realidad se representa mediante figuras elementales geom&eacute;tricas, normalmente cuadradas, que forman un mosaico regular, estamos hablando de:";
 choices[43]= new Array();
 choices[43][0] = "Proyecci&oacute;n.";
 choices[43][1] = "R&aacute;ster.";
 choices[43][2] = "Vector.";
 choices[43][3] = "Imagen multiespectral.";
 answers[43] = choices[43][1];
 units[43] = "67";
 comments[43] = "Id Pregunta: 4440. NULL";


//  Id pregunta: 4464 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  Indique cu&aacute;l de las siguientes afirmaciones sobre una base de datos OLAP es cierta:";
 choices[44]= new Array();
 choices[44][0] = "Cada datamart podr&aacute; tener unas medidas y dimensiones propias y diferentes a los dem&aacute;s.";
 choices[44][1] = "Todos los datamart deber&aacute;n tener las mismas medidas y dimensiones.";
 choices[44][2] = "Los datamart no tienen dimensiones.";
 choices[44][3] = "La dimensi&oacute;n de los datamart debe ser &uacute;nica, aunque las medidas pueden variar de unos datamart a otros.";
 answers[44] = choices[44][0];
 units[44] = "68";
 comments[44] = "Id Pregunta: 4464. ";


//  Id pregunta: 4573 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  Indica cual de las siguientes expresiones NO es correcta en un entorno de e-Learning:";
 choices[45]= new Array();
 choices[45][0] = "el LMS se encarga de gestionar los usuarios, los cursos y as herramientas de comunicaci&oacute;n.";
 choices[45][1] = "dos componentes fundamentales en este tipo de ense&ntilde;anza son el LMS y el courseware.";
 choices[45][2] = "se pueden establecer comunicaciones tanto s&iacute;ncronas como as&iacute;ncronas.";
 choices[45][3] = "para compatibilizar LMS y courseware de distintos fabricantes se utilizan los est&aacute;ndares ADL SCORM y UDDI.";
 answers[45] = choices[45][3];
 units[45] = "66";
 comments[45] = "Id Pregunta: 4573. ";


//  Id pregunta: 4623 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  En un entorno de informaci&oacute;n geogr&aacute;fica, GIS, indicar cu&aacute;l de las siguientes expresiones es la correcta:";
 choices[46]= new Array();
 choices[46][0] = "El DM es la herramienta que gestiona la capa superior del GIS, el metamodelo de los datos.";
 choices[46][1] = "El DM es una herramienta de alcance mas amplio que el GIS.";
 choices[46][2] = "El DM es una herramienta que explota los datos que genera un GIS.";
 choices[46][3] = "Ninguna herramienta DM puede trabajar directarmente con las bases de datos de un GIS";
 answers[46] = choices[46][2];
 units[46] = "67";
 comments[46] = "Id Pregunta: 4623. NULL";


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


//  Id pregunta: 4801 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  En el modelo de miner&iacute;a de datos de &aacute;rboles de decisi&oacute;n (ID3) de Quinlan:";
 choices[48]= new Array();
 choices[48][0] = "Se obtiene un nuevo conjunto de reglas a partir de uno previo, utilizando mecanismos de deducci&oacute;n basadosen la entrop&iacute;a";
 choices[48][1] = "Se obtiene un conjunto de reglas a partir de un conjunto de ejemplos, clasificados a priori, utilizandomecanismos de inducci&oacute;n";
 choices[48][2] = "Se obtiene un nuevo conjunto de reglas que agrupan, por similaridad, un conjunto de ejemplos, utilizandoaprendizaje no supervisado";
 choices[48][3] = "Se obtiene un nuevo conjunto de reglas a partir de uno previo, mediante eliminaci&oacute;n de reglas incorrectas einclusi&oacute;n de reglas necesarias, utilizando un conjunto de ejemplos para dicha depuraci&oacute;n";
 answers[48] = choices[48][1];
 units[48] = "64";
 comments[48] = "Id Pregunta: 4801. ";


//  Id pregunta: 4811 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  Sobre las funciones OLAP (Online Analytical Processing) definidas como extensiones a SQL (Structured Query Language) que forman parte de SQL:2003, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[49]= new Array();
 choices[49][0] = "La funci&oacute;n ROLLUP puede aparecer en la cl&aacute;usula GROUP BY.";
 choices[49][1] = "La funci&oacute;n ROLLUP puede aparecer en la cl&aacute;usula ORDER BY.";
 choices[49][2] = "La funci&oacute;n CUBE puede aparecer en la cl&aacute;usula ORDER BY.";
 choices[49][3] = "La funci&oacute;n CUBE puede aparecer en la cl&aacute;usula FROM.";
 answers[49] = choices[49][0];
 units[49] = "68";
 comments[49] = "Id Pregunta: 4811. ";


//  Id pregunta: 5065 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  En relaci&oacute;n con los ERP, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta respecto a SAP R/3?";
 choices[50]= new Array();
 choices[50][0] = "El m&oacute;dulo donde se gestionan las compras se denomina CO";
 choices[50][1] = "El m&oacute;dulo PM se encarga de gestionar la gesti&oacute;n de proyectos";
 choices[50][2] = "El m&oacute;dulo SD es parte del m&oacute;dulo de contabilidad financiera";
 choices[50][3] = "El m&oacute;dulo &quot;Basis&quot; se encarga de gestionar la base de datos";
 answers[50] = choices[50][3];
 units[50] = "65";
 comments[50] = "Id Pregunta: 5065. Examen TIC A 2007";


//  Id pregunta: 5128 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l es el modelo conceptual m&aacute;s extendido para los almacenes de datos?";
 choices[51]= new Array();
 choices[51][0] = "Relacional.";
 choices[51][1] = "Multidimensional.";
 choices[51][2] = "Espacial.";
 choices[51][3] = "Temporal.";
 answers[51] = choices[51][1];
 units[51] = "68";
 comments[51] = "Id Pregunta: 5128. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5601 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes es un lenguaje orientado al trabajo con la inteligencia artificial?";
 choices[52]= new Array();
 choices[52][0] = "C++";
 choices[52][1] = "Fortran";
 choices[52][2] = "PROLOG";
 choices[52][3] = "Pascal";
 answers[52] = choices[52][2];
 units[52] = "64";
 comments[52] = "Id Pregunta: 5601. ";


//  Id pregunta: 5676 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  Indique la respuesta incorrecta en relaci&oacute;n a Sistemas de Informaci&oacute;n Geogr&aacute;ficos:";
 choices[53]= new Array();
 choices[53][0] = "El t&eacute;rmino Clearinghouse se refiere al conjunto de datos marco utilizado en el Proyecto Dublin Core.";
 choices[53][1] = "El est&aacute;ndar m&aacute;s extendido para la implementaci&oacute;n de servicios de cat&aacute;logo es el ISO 23950.";
 choices[53][2] = "ISO 19110 se ocupa de la metodolog&iacute;a de catalogaci&oacute;n de objetos geogr&aacute;ficos.";
 choices[53][3] = "ISO ha producido el ISO 19115 Metadatos.";
 answers[53] = choices[53][0];
 units[53] = "67";
 comments[53] = "Id Pregunta: 5676. NULL";


//  Id pregunta: 5711 AÃ±o de creación de pregunta: 2009-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de los siguientes no es un tipo de modelo de datos multidimensional?";
 choices[54]= new Array();
 choices[54][0] = "HOLAP.";
 choices[54][1] = "DOLAP.";
 choices[54][2] = "MOLAP.";
 choices[54][3] = "ROLAP.";
 answers[54] = choices[54][1];
 units[54] = "68";
 comments[54] = "Id Pregunta: 5711. ";


//  Id pregunta: 5712 AÃ±o de creación de pregunta: 2009-01-01
 questions[55]= "56)  Referido a OLAP, &iquest;cu&aacute;l es el significado m&aacute;s aproximado de Drill-Across?";
 choices[55]= new Array();
 choices[55][0] = "Navegar hacia un mayor nivel de agregaci&oacute;n.";
 choices[55][1] = "Moverse entre cubos.";
 choices[55][2] = "Descender a un menor nivel de agregaci&oacute;n.";
 choices[55][3] = "Elecci&oacute;n del n&uacute;mero de dimensiones a visualizar.";
 answers[55] = choices[55][1];
 units[55] = "68";
 comments[55] = "Id Pregunta: 5712. ";


//  Id pregunta: 5758 AÃ±o de creación de pregunta: 2009-01-01
 questions[56]= "57)  En cuanto a la licencia LGPL, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[56]= new Array();
 choices[56][0] = "Un software con licencia LGPL puede ser modificado y redistribuido como software propietario siempre que se trate del driver de un dispositivo.";
 choices[56][1] = "Un software con licencia LGPL puede ser modificado y redistribuido como software propietario siempre que se trate de una librer&iacute;a sin interfaz con el usuario.";
 choices[56][2] = "Un software con licencia LGPL puede utilizar librer&iacute;as propietarias, y el conjunto tener la licencia LGPL.";
 choices[56][3] = "Un software propietario puede utilizar librer&iacute;as LGPL sin dejar de ser propietario.";
 answers[56] = choices[56][3];
 units[56] = "61";
 comments[56] = "Id Pregunta: 5758. ";


//  Id pregunta: 5870 AÃ±o de creación de pregunta: 2009-01-01
 questions[57]= "58)  En la plataforma de e-learning Moodle, indique cu&aacute;l de las siguientes expresiones NO es correcta:";
 choices[57]= new Array();
 choices[57][0] = "Es una plataforma de libre distribuci&oacute;n de e-learning";
 choices[57][1] = "Soporta el aprendizaje colaborativo en cualquier lugar y en cualquier momento";
 choices[57][2] = "Es una aplicaci&oacute;n Web que funciona en cualquier computador en el que se pueda ejecutar PHP";
 choices[57][3] = "S&oacute;lo funciona con el sistema operativo Linux";
 answers[57] = choices[57][3];
 units[57] = "66";
 comments[57] = "Id Pregunta: 5870. MAP 2008 A1";


//  Id pregunta: 5874 AÃ±o de creación de pregunta: 2009-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as es usada espec&iacute;ficamente por el CRM de tipo anal&iacute;tico?";
 choices[58]= new Array();
 choices[58][0] = "Software de gesti&oacute;n de incidencias";
 choices[58][1] = "Software de gesti&oacute;n de correo electr&oacute;nico entrante y saliente";
 choices[58][2] = "Datawarehouse";
 choices[58][3] = "Call-center: software de visi&oacute;n unificada de clientes";
 answers[58] = choices[58][2];
 units[58] = "65";
 comments[58] = "Id Pregunta: 5874. MAP 2008 A1";


//  Id pregunta: 5889 AÃ±o de creación de pregunta: 2009-01-01
 questions[59]= "60)  En Inteligencia Artificial, la hip&oacute;tesis del mundo cerrado consiste en:";
 choices[59]= new Array();
 choices[59][0] = "Suponer falso todo lo que no est&aacute; almacenado en la base de hechos";
 choices[59][1] = "Suponer cierto todo lo que est&aacute; almacenado en la base de hechos";
 choices[59][2] = "Suponer unas veces cierto y otras falso la informaci&oacute;n almacenada en la base de hechos";
 choices[59][3] = "Ninguna de las anteriores";
 answers[59] = choices[59][0];
 units[59] = "63";
 comments[59] = "Id Pregunta: 5889. MAP 2008 A1";


//  Id pregunta: 6057 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes utilidades NO se corresponde con software de c&oacute;digo abierto?";
 choices[60]= new Array();
 choices[60][0] = "Thunderbird.";
 choices[60][1] = "Adobe Reader.";
 choices[60][2] = "OpenOffice.";
 choices[60][3] = "Firefox.";
 answers[60] = choices[60][1];
 units[60] = "62";
 comments[60] = "Id Pregunta: 6057. TIC A 2009";


//  Id pregunta: 6176 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  Se&ntilde;ale cual de los siguientes no se corresponde con ning&uacute;n libro SCORM";
 choices[61]= new Array();
 choices[61][0] = "Scorm Content Aggregation Model.";
 choices[61][1] = "Scorm Shareable Content Objects.";
 choices[61][2] = "Scorm Run-Time Environment.";
 choices[61][3] = "Scorm Sequencing and Navigation.";
 answers[61] = choices[61][1];
 units[61] = "66";
 comments[61] = "Id Pregunta: 6176. ";


//  Id pregunta: 6252 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  El algoritmo ID3 es una t&eacute;cnica de miner&iacute;a de datos que se clasifica en el grupo de:";
 choices[62]= new Array();
 choices[62][0] = "Los m&oacute;delos estad&iacute;sticos";
 choices[62][1] = "Agrupamiento";
 choices[62][2] = "Los &aacute;rboles de decisi&oacute;n";
 choices[62][3] = "Las redes neuronales";
 answers[62] = choices[62][2];
 units[62] = "64";
 comments[62] = "Id Pregunta: 6252. TICB-2009, bloque desarrollo";


//  Id pregunta: 6339 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l de los siguientes nombres no est&aacute;n relaiconados con una soluci&oacute;n ERP?";
 choices[63]= new Array();
 choices[63][0] = "Oracle Financials";
 choices[63][1] = "SAP";
 choices[63][2] = "IBM Websphere";
 choices[63][3] = "META4";
 answers[63] = choices[63][2];
 units[63] = "65";
 comments[63] = "Id Pregunta: 6339. ";


//  Id pregunta: 6426 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  &iquest;Cu&aacute;l de las siguientes aplicaciones de software libre sirve para la edici&oacute;n profesional de im&aacute;genes?";
 choices[64]= new Array();
 choices[64][0] = "GIMP";
 choices[64][1] = "Celtx";
 choices[64][2] = "Nvu";
 choices[64][3] = "Rhythmbox";
 answers[64] = choices[64][0];
 units[64] = "62";
 comments[64] = "Id Pregunta: 6426. NULL";


//  Id pregunta: 8166 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  AGNUBIS, aplicaci&oacute;n del entorno de escritorio de GNOME, es:";
 choices[65]= new Array();
 choices[65][0] = "Un interfaz gr&aacute;fico para el dibujo de gr&aacute;ficos y manipulaciones estad&iacute;sticas.";
 choices[65][1] = "Un programa de presentaciones similar a MS POWER POINT.";
 choices[65][2] = "Un programa de dibujo vectorial que puede trabajar con archivos 5VG.";
 choices[65][3] = "El gestor de archivos oficial de GNOME.";
 answers[65] = choices[65][1];
 units[65] = "62";
 comments[65] = "Id Pregunta: 8166. Examen TIC A1 2010";


//  Id pregunta: 8364 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  Entre las t&eacute;cnicas usadas en miner&iacute;a de datos se encuentran las redes neuronales artificiales, &iquest;cu&aacute;l de los siguientes es uno de sus modelos? ";
 choices[66]= new Array();
 choices[66][0] = "Redes de Shelman.";
 choices[66][1] = "Redes de Coperfield.";
 choices[66][2] = "Redes ART.";
 choices[66][3] = "M&aacute;quina de Gauss.";
 answers[66] = choices[66][2];
 units[66] = "68";
 comments[66] = "Id Pregunta: 8364. Examen TIC A2 2010";


//  Id pregunta: 8365 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  &iquest;En qu&eacute; tipo de t&eacute;cnica de miner&iacute;a de datos se utiliza el algoritmo IK-medoids?";
 choices[67]= new Array();
 choices[67][0] = "Predicci&oacute;n.";
 choices[67][1] = "Categorizaci&oacute;n.";
 choices[67][2] = "Clustering.";
 choices[67][3] = "Estad&iacute;sticas.";
 answers[67] = choices[67][2];
 units[67] = "68";
 comments[67] = "Id Pregunta: 8365. Examen TIC A2 2010";


//  Id pregunta: 8456 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  Entre las ventajas de un Datawarehouse NO se encuentra:";
 choices[68]= new Array();
 choices[68][0] = "Reducir el tiempo de respuesta de los sistemas operacionales.";
 choices[68][1] = "Presentar una visi&oacute;n &uacute;nica de la informaci&oacute;n de una empresa.";
 choices[68][2] = "Permitir que los usuarios sean autosuficientes para satisfacer sus propias necesidades de informaci&oacute;n.";
 choices[68][3] = "Facilitar la implementaci&oacute;n de cuadros de mando.";
 answers[68] = choices[68][0];
 units[68] = "68";
 comments[68] = "Id Pregunta: 8456. Analista Ayto. Madrid 2010";


//  Id pregunta: 8514 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  Algunas Comunidades Aut&oacute;nomas han realizado de forma gratuita y totalmente personalizada distribuciones de software libre. Indique la asociaci&oacute;n INCORRECTA: ";
 choices[69]= new Array();
 choices[69][0] = "Lluirex - Valencia";
 choices[69][1] = "MAX - Madrid";
 choices[69][2] = "LinKat - Catalu&ntilde;a";
 choices[69][3] = "mEDUxa - Baleares";
 answers[69] = choices[69][3];
 units[69] = "61";
 comments[69] = "Id Pregunta: 8514. Examen TIC A2 2010";


//  Id pregunta: 8808 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  El est&aacute;ndar de e-learning participado por el IEEE, que incluye un modelo de referencia para objetos software educativos compartibles, un entorno de ejecuci&oacute;n y un modelo de agregaci&oacute;n de contenido es:";
 choices[70]= new Array();
 choices[70][0] = "AEIC.";
 choices[70][1] = "LOM.";
 choices[70][2] = "LCMS.";
 choices[70][3] = "SCORM.";
 answers[70] = choices[70][3];
 units[70] = "66";
 comments[70] = "Id Pregunta: 8808. Examen UPM A2 2011";


//  Id pregunta: 8842 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)   De acuerdo con el modelo de cuadro de mando (Balanced Scorecard) de Kaplan y Nolan, &iquest;cu&aacute;l de las siguientes respuestas ser&iacute;a la correcta?";
 choices[71]= new Array();
 choices[71][0] = "La implantaci&oacute;n de un cuadro de mando se debe realizar estableciendo objetivos que se deben trasladar a indicadores o medidas espec&iacute;ficas.";
 choices[71][1] = "El cuadro de mando permite a los gestores priorizar las expectativas de los clientes sobre la situaci&oacute;n financiera de la organizaci&oacute;n.";
 choices[71][2] = "El cuadro de mando permite a los gestores priorizar la situaci&oacute;n financiera de la organizaci&oacute;n sobre las expectativas de los clientes.";
 choices[71][3] = "El cuadro de mando se establece teniendo en cuenta cinco perspectivas distintas: clientes, accionistas, perspectiva interna de la organizaci&oacute;n, innovaci&oacute;n-aprendizaje y perspectiva financiera.";
 answers[71] = choices[71][0];
 units[71] = "68";
 comments[71] = "Id Pregunta: 8842. Examen UC3M 2010";


//  Id pregunta: 8925 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;C&oacute;mo se denominan las dos series de datos de uso civil emitidas continuamente por cada sat&eacute;lite del sistema GPS?";
 choices[72]= new Array();
 choices[72][0] = "Almanaque y efem&eacute;rides.";
 choices[72][1] = "Multipath y atenuaci&oacute;n.";
 choices[72][2] = "Triangulaci&oacute;n y correcci&oacute;n.";
 choices[72][3] = "Latitud y longitud.";
 answers[72] = choices[72][0];
 units[72] = "67";
 comments[72] = "Id Pregunta: 8925. Operador Ayto. Madrid 2010";


//  Id pregunta: 8929 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes es una operaci&oacute;n que implica un cambio en el n&uacute;mero de dimensiones contempladas en la visi&oacute;n de un sistema OLAP?";
 choices[73]= new Array();
 choices[73][0] = "Drill-Across.";
 choices[73][1] = "Drill-In.";
 choices[73][2] = "Roll-Up.";
 choices[73][3] = "Rotaci&oacute;n.";
 answers[73] = choices[73][2];
 units[73] = "68";
 comments[73] = "Id Pregunta: 8929. ";


//  Id pregunta: 8956 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  En Inteligencia artificial existe varias clasificaciones en cuanto a los m&eacute;todos de b&uacute;squeda. De lso siguientes &iquest;cu&aacute;l pertenece  a la clasificaci&oacute;n  de Mejora Iterativa?";
 choices[74]= new Array();
 choices[74][0] = "B&uacute;squeda Greedy";
 choices[74][1] = "B&uacute;squeda en profundidad iterativa";
 choices[74][2] = "Algoritmo A*";
 choices[74][3] = "Escalada por m&aacute;xima pendiente";
 answers[74] = choices[74][3];
 units[74] = "63";
 comments[74] = "Id Pregunta: 8956. ";


//  Id pregunta: 8961 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  Se&ntilde;ale cu&aacute;l de los siguientes no se corresponde con un est&aacute;ndar de Sistemas Geogr&aacute;ficos de Informaci&oacute;n:";
 choices[75]= new Array();
 choices[75][0] = "ISO 19115.";
 choices[75][1] = "ISO 19130.";
 choices[75][2] = "ISO 23950.";
 choices[75][3] = "Todos son est&aacute;ndares de sistemas SIG.";
 answers[75] = choices[75][3];
 units[75] = "67";
 comments[75] = "Id Pregunta: 8961. NULL";


//  Id pregunta: 9161 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  En el &aacute;mbito de los Sistemas de Informaci&oacute;n Geogr&aacute;fica, &iquest;qu&eacute; es un gazeteer?";
 choices[76]= new Array();
 choices[76][0] = "Directorio de referencias geogr&aacute;ficas";
 choices[76][1] = "Capa raster de informaci&oacute;n topol&oacute;gica";
 choices[76][2] = "Capa vectorial de informaci&oacute;n topol&oacute;gica";
 choices[76][3] = "Ninguna de las anteriores es correcta";
 answers[76] = choices[76][0];
 units[76] = "67";
 comments[76] = "Id Pregunta: 9161. NULL";


//  Id pregunta: 9163 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  Respecto a la Directiva INSPIRE, indique la respuesta FALSA:";
 choices[77]= new Array();
 choices[77][0] = "Se refiere a la Directiva 2007/2/CE";
 choices[77][1] = "Contiene 34 temas espaciales";
 choices[77][2] = "El Comit&eacute; INSPIRE publica sus Implementing Rules en forma de Reglamentos";
 choices[77][3] = "Dirigida a que las IDEs de los Estados Miembros sean compatibles e interoperables";
 answers[77] = choices[77][2];
 units[77] = "67";
 comments[77] = "Id Pregunta: 9163. NULL";


//  Id pregunta: 9166 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  Entre los elementos que propone la ISO 19113, no se encuentra:";
 choices[78]= new Array();
 choices[78][0] = "Compleci&oacute;n";
 choices[78][1] = "Consistencia topol&oacute;gica";
 choices[78][2] = "Exactitud temporal";
 choices[78][3] = "Exactitud posicional";
 answers[78] = choices[78][1];
 units[78] = "67";
 comments[78] = "Id Pregunta: 9166. NULL";


//  Id pregunta: 9167 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  De los siguientes sistemas, &iquest;cu&aacute;l no se refiere a un sistema de navegaci&oacute;n por sat&eacute;lite?";
 choices[79]= new Array();
 choices[79][0] = "Beidou";
 choices[79][1] = "COMPASS";
 choices[79][2] = "QZSS";
 choices[79][3] = "GNS";
 answers[79] = choices[79][3];
 units[79] = "67";
 comments[79] = "Id Pregunta: 9167. NULL";


//  Id pregunta: 9680 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  En relaci&oacute;n con las t&eacute;cnicas de compresi&oacute;n y organizaci&oacute;n en SIG raster, se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[80]= new Array();
 choices[80][0] = "RLE (Run Length Encode) se basa en estructuras de datos orientadas a la indexaci&oacute;n espacial en las que se procede a la divisi&oacute;n recursiva de la informaci&oacute;n de partida en bloques (cuadrantes).";
 choices[80][1] = "Las t&eacute;cnicas 'Quadtrees' son m&aacute;s complejas que las RLE pero m&aacute;s eficientes.";
 choices[80][2] = "Wavelets se basa en la compresi&oacute;n de patrones y hace factible la transmisi&oacute;n a trav&eacute;s de Internet con tiempos de respuesta muy aceptables.";
 choices[80][3] = "La t&eacute;cnica m&aacute;s elemental es almacenar secuencialmente los valores del atributo en las sucesivas celdas de acuerdo a la secuencia de barrido de la imagen.";
 answers[80] = choices[80][0];
 units[80] = "67";
 comments[80] = "Id Pregunta: 9680. NULL";


//  Id pregunta: 9685 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  Las proyecciones (Georreferenciaci&oacute;n Directa):";
 choices[81]= new Array();
 choices[81][0] = "Son proyecciones cil&iacute;ndricas: Proyecci&oacute;n de Mercator, Proyecci&oacute;n de Peter, Proyecci&oacute;n ortogr&aacute;fica y la Proyecci&oacute;n conforme de Lambert.";
 choices[81][1] = "Son proyecciones azimutales: proyecci&oacute;n azimutal, proyecci&oacute;n azimutal de Lambert, proyecci&oacute;n gnom&oacute;nica y proyecci&oacute;n azimutal m&uacute;ltiple.";
 choices[81][2] = "Son proyecciones c&oacute;nicas: proyecci&oacute;n c&oacute;nica simple, proyecci&oacute;n conforme de Lambert y proyecci&oacute;n c&oacute;nica m&uacute;ltiple. ";
 choices[81][3] = "Son proyecciones estereogr&aacute;ficas: proyecci&oacute;n estereogr&aacute;fica, proyecci&oacute;n ortogr&aacute;fica, proyecciones modificadas y proyecci&oacute;n conforme gnom&oacute;nica. ";
 answers[81] = choices[81][2];
 units[81] = "67";
 comments[81] = "Id Pregunta: 9685. NULL";


//  Id pregunta: 9687 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  En Georeferenciaci&oacute;n, las funciones que deben ser desempe&ntilde;adas por los metadatos son:";
 choices[82]= new Array();
 choices[82][0] = "Descubrimiento, exploraci&oacute;n y acceso.";
 choices[82][1] = "Localizaci&oacute;n inicial, exploraci&oacute;n y carga de los datos.";
 choices[82][2] = "Localizaci&oacute;n inicial, exploraci&oacute;n, carga de los datos e interpretaci&oacute;n.";
 choices[82][3] = "Descubrimiento, exploraci&oacute;n y explotaci&oacute;n.";
 answers[82] = choices[82][3];
 units[82] = "67";
 comments[82] = "Id Pregunta: 9687. NULL";


//  Id pregunta: 9690 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Respecto a las herramientas de explotaci&oacute;n:";
 choices[83]= new Array();
 choices[83][0] = "'Query and reporting' sirve para la elaboraci&oacute;n de informes y listados a partir de la informaci&oacute;n de los almacenes de datos y los datamart.";
 choices[83][1] = "El cuadro de mando anal&iacute;tico contiene informaci&oacute;n de toda la organizaci&oacute;n.";
 choices[83][2] = "OLAP no es una herramienta de explotaci&oacute;n.";
 choices[83][3] = "A es falsa.";
 answers[83] = choices[83][0];
 units[83] = "68";
 comments[83] = "Id Pregunta: 9690. ";


//  Id pregunta: 9729 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Se&ntilde;ale cu&aacute;l de los siguientes NO es un framework JAVA";
 choices[84]= new Array();
 choices[84][0] = "Bird.";
 choices[84][1] = "Hibernate.";
 choices[84][2] = "Maverick.";
 choices[84][3] = "Spring.";
 answers[84] = choices[84][0];
 units[84] = "61";
 comments[84] = "Id Pregunta: 9729. Examen TIC-A1 2013";


//  Id pregunta: 9783 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  El lenguaje de marcado PMML (Predictive Model Markup Language) es un lenguaje relacionado con las t&eacute;cnicas relativas a:";
 choices[85]= new Array();
 choices[85][0] = "Virtualizaci&oacute;n de escritorio. ";
 choices[85][1] = "Virtualizaci&oacute;n de servidores. ";
 choices[85][2] = "Sistemas SAN. ";
 choices[85][3] = "Miner&iacute;a de datos.";
 answers[85] = choices[85][3];
 units[85] = "68";
 comments[85] = "Id Pregunta: 9783. Examen TIC A2 2013";


//  Id pregunta: 9963 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Un almac&eacute;n de datos (Data Warehouse) NO se caracteriza por ser:";
 choices[86]= new Array();
 choices[86][0] = "Integrado, los datos en el almac&eacute;n de datos deben integrarse en una estructura consistente.";
 choices[86][1] = "Orientado por temas, el almac&eacute;n de datos est&aacute; organizado de acuerdo con los temas m&aacute;s importantes para la organizaci&oacute;n";
 choices[86][2] = "Variable en el tiempo, los datos en el almac&eacute;n de datos siempre se cargan con una referencia temporal bajo la que son v&aacute;lidos.";
 choices[86][3] = "Vol&aacute;til, los datos en el almac&eacute;n de datos son le&iacute;dos, actualizados y eliminados.";
 answers[86] = choices[86][3];
 units[86] = "68,71";
 comments[86] = "Id Pregunta: 9963. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 9990 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l de los siguientes es sistemas de gesti&oacute;n de conocimiento tiene una versi&oacute;n con licencia de fuentes abiertas?";
 choices[87]= new Array();
 choices[87][0] = "Blackboard";
 choices[87][1] = "WebCT";
 choices[87][2] = "Dokeos";
 choices[87][3] = "Desire2Learn";
 answers[87] = choices[87][2];
 units[87] = "66";
 comments[87] = "Id Pregunta: 9990. ";


//  Id pregunta: 10250 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  Juan desarrolla un software y publica el c&oacute;digo fuente bajo la licencia GPL. Recibe muchas modificaciones y Juan decide incorporarlas a una nueva versi&oacute;n de su software. Finalmente, Juan decide hacer una versi&oacute;n propietaria de su software, y declara:I) Como el c&oacute;digo fuente original eral GPL, todos los que han hecho mejoras autom&aacute;ticamente asignan el copyright de esas mejoras a Juan, por lo que no necesita solicitar autorizaci&oacute;n para licenciar el c&oacute;digo de otra formaII) Como Juan tiene el copyright, puede licenciar el c&oacute;digo de forma retroactiva, por lo que nadie puede distribuir versiones anteriores bajo GPL";
 choices[88]= new Array();
 choices[88][0] = "I) y II) son verdaderas";
 choices[88][1] = "I) es verdadera, II) es falsa";
 choices[88][2] = "I es falsa, II) es verdadera";
 choices[88][3] = "I) y II) son falsas";
 answers[88] = choices[88][3];
 units[88] = "61";
 comments[88] = "Id Pregunta: 10250. ";


//  Id pregunta: 10273 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  Referente al m&eacute;todo de b&uacute;squeda con adversario aplicado a juegos, &iquest;cu&aacute;l de las siguientes afirmaciones es falsa?";
 choices[89]= new Array();
 choices[89][0] = "Los dos jugadores disponen de informaci&oacute;n completa sobre el estado del juego";
 choices[89][1] = "La estrategia del oponente es desconocida";
 choices[89][2] = "Interviene el azar";
 choices[89][3] = "Al acabar, cada jugador pierde, gana o empata";
 answers[89] = choices[89][2];
 units[89] = "63";
 comments[89] = "Id Pregunta: 10273. NULL";


//  Id pregunta: 10279 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  En reglas, la inferencia mediante encadenamiento hacia adelante:";
 choices[90]= new Array();
 choices[90][0] = "Requiere en primer lugar que se introduzcan las premisas en la base de hechos";
 choices[90][1] = "Se crea un conjunto conflicto con las reglas cuyo consecuente es el objetivo de la inferencia";
 choices[90][2] = "La regla que se va a disparar siempre se elige de forma aleatoria";
 choices[90][3] = "Si la regla disparada es deductiva, se ejecuta la acci&oacute;n asociada";
 answers[90] = choices[90][0];
 units[90] = "64";
 comments[90] = "Id Pregunta: 10279. NULL";


//  Id pregunta: 10812 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l de las siguientes licencias NO se considera copyleft robusto?";
 choices[91]= new Array();
 choices[91][0] = "EUPL";
 choices[91][1] = "GPL";
 choices[91][2] = "LGPL";
 choices[91][3] = "BSD";
 answers[91] = choices[91][3];
 units[91] = "61";
 comments[91] = "Id Pregunta: 10812. Examen GSI 2014";


//  Id pregunta: 10839 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  De las siguientes herramientas de teleaprendizaje para formaci&oacute;n de usuarios y personal t&eacute;cnico, indique cu&aacute;l es de software propietario:";
 choices[92]= new Array();
 choices[92][0] = "Catedr@.";
 choices[92][1] = "Dokeos.";
 choices[92][2] = "Moodle.";
 choices[92][3] = "Claroline.";
 answers[92] = choices[92][0];
 units[92] = "66";
 comments[92] = "Id Pregunta: 10839. Examen GSI 2014";


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


//  Id pregunta: 11046 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Qu&eacute; Directiva establece las reglas generales para el establecimiento de una Infraestructura de Informaci&oacute;n Espacial en la Comunidad Europea basada en las Infraestructuras de los Estados miembros?";
 choices[94]= new Array();
 choices[94][0] = "INSPIRE";
 choices[94][1] = "SIGPAC";
 choices[94][2] = "SIC";
 choices[94][3] = "SIGMAPA";
 answers[94] = choices[94][0];
 units[94] = "67";
 comments[94] = "Id Pregunta: 11046. ";


//  Id pregunta: 11141 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de los siguientes no es un lenguaje de construcci&oacute;n de la Web Sem&aacute;ntica?";
 choices[95]= new Array();
 choices[95][0] = "OWL";
 choices[95][1] = "MADL";
 choices[95][2] = "XML";
 choices[95][3] = "RDF";
 answers[95] = choices[95][1];
 units[95] = "63";
 comments[95] = "Id Pregunta: 11141. ";


//  Id pregunta: 11280 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares de informaci&oacute;n geogr&aacute;fica NO corresponde a un servicio de visualizaci&oacute;n?";
 choices[96]= new Array();
 choices[96][0] = "WFS";
 choices[96][1] = "WMS";
 choices[96][2] = "WMTS";
 choices[96][3] = "WCS";
 answers[96] = choices[96][0];
 units[96] = "67";
 comments[96] = "Id Pregunta: 11280. ";


//  Id pregunta: 11333 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Distintos gobiernos regionales est&aacute;n desarrollando sus propias distribuciones Linux. Seleccione cu&aacute;l no es una de ellas:";
 choices[97]= new Array();
 choices[97][0] = "LinEx en Extremadura,";
 choices[97][1] = "Augustux en Arag&oacute;n";
 choices[97][2] = "AndaLinex en Andaluc&iacute;a";
 choices[97][3] = "LinuxGlobal en Cantabria";
 answers[97] = choices[97][2];
 units[97] = "61";
 comments[97] = "Id Pregunta: 11333. Es Guadalinex";


//  Id pregunta: 11510 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Cu&aacute;l de los siguientes sistemas de Big Data es utilizado por el Red Social Twitter?";
 choices[98]= new Array();
 choices[98][0] = "Hive";
 choices[98][1] = "Cassandra";
 choices[98][2] = "Hbase";
 choices[98][3] = "ZoneKeeper";
 answers[98] = choices[98][1];
 units[98] = "68";
 comments[98] = "Id Pregunta: 11510. NULL";


//  Id pregunta: 11536 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  La licencia de la GNU utilizada espec&iacute;ficamente para licenciar Software en la redes de computadores es:";
 choices[99]= new Array();
 choices[99][0] = "GFDL";
 choices[99][1] = "GPL";
 choices[99][2] = "Affero GPL";
 choices[99][3] = "EUPL";
 answers[99] = choices[99][2];
 units[99] = "62";
 comments[99] = "Id Pregunta: 11536. NULL";


