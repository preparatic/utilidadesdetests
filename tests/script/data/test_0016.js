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

//  Id pregunta: 103 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  Algunas t&eacute;cnicas de ayuda a la toma de decisiones son:";
 choices[0]= new Array();
 choices[0][0] = "Brain-storming, o tormenta de ideas";
 choices[0][1] = "Teor&iacute;a de grafos y an&aacute;lisis de redes";
 choices[0][2] = "Teor&iacute;a de colas o de l&iacute;neas de espera";
 choices[0][3] = "Todas las anteriores";
 answers[0] = choices[0][3];
 units[0] = "23";
 comments[0] = "Id Pregunta: 103. NULL";


//  Id pregunta: 518 AÃ±o de creación de pregunta: 2003-01-01
 questions[1]= "2)  Una de las organizaciones que lucha internacionalmente contra la pirater&iacute;a inform&aacute;tica es";
 choices[1]= new Array();
 choices[1][0] = "BSA";
 choices[1][1] = "RSA";
 choices[1][2] = "ESA";
 choices[1][3] = "EIT";
 answers[1] = choices[1][0];
 units[1] = "36,37";
 comments[1] = "Id Pregunta: 518. ";


//  Id pregunta: 557 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguientes no es una tarea t&iacute;pica de la auditor&iacute;a inform&aacute;tica?";
 choices[2]= new Array();
 choices[2][0] = "Reorganizaci&oacute;n de los recursos humanos del Departamento de Sistemas de Informaci&oacute;n";
 choices[2][1] = "Revisi&oacute;n de aplicaciones";
 choices[2][2] = "Revisi&oacute;n de instalaciones inform&aacute;ticas";
 choices[2][3] = "Revisi&oacute;n de sistemas bajo desarrollo";
 answers[2] = choices[2][0];
 units[2] = "31, 32, 33";
 comments[2] = "Id Pregunta: 557. MAP-B 2004";


//  Id pregunta: 667 AÃ±o de creación de pregunta: 2006-01-01
 questions[3]= "4)  En su libro &quot;La estructura de las organizaciones&quot; Mintzberg describe las organizaciones matriciales y se&ntilde;ala diversos factores que las identifican. &iquest;Cu&aacute;l de los siguientes no corresponde a estos factores?";
 choices[3]= new Array();
 choices[3][0] = "Elevada tendencia a disgregar a los especialistas en unidades funcionales en lo que corresponde a asuntos internos";
 choices[3][1] = "Estructura sumamente org&aacute;nica con escasa formalizaci&oacute;n del comportamiento";
 choices[3][2] = "Elevada especializaci&oacute;n del puesto basada en una preparaci&oacute;n formal";
 choices[3][3] = "Uso de dispositivos de enlace para fomentar la adaptaci&oacute;n mutua";
 answers[3] = choices[3][0];
 units[3] = "22";
 comments[3] = "Id Pregunta: 667. ";


//  Id pregunta: 822 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Un programa shareware:";
 choices[4]= new Array();
 choices[4][0] = "Es software que podemos utilizar libremente";
 choices[4][1] = "Es software que podemos vender libremente";
 choices[4][2] = "Es software que podemos probar libremente";
 choices[4][3] = "No existe este concepto";
 answers[4] = choices[4][2];
 units[4] = "61";
 comments[4] = "Id Pregunta: 822. ";


//  Id pregunta: 1000 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  El &aacute;rbol formado por las entradas del directorio, en LDAP, se llama:";
 choices[5]= new Array();
 choices[5][0] = "Ltree";
 choices[5][1] = "LDS";
 choices[5][2] = "DIT";
 choices[5][3] = "Todas son falsas";
 answers[5] = choices[5][2];
 units[5] = "74";
 comments[5] = "Id Pregunta: 1000. NULL";


//  Id pregunta: 1197 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Java ME es:";
 choices[6]= new Array();
 choices[6][0] = "Una versi&oacute;n de Java que permite explotar las capacidades multimedia de los nuevos procesadores";
 choices[6][1] = "Una versi&oacute;n reducida de Java dise&ntilde;ada para ser ejecutada en dispositivos m&oacute;viles o embebidos.";
 choices[6][2] = "Una versi&oacute;n de Java que permite varias ejecuciones simult&aacute;neas y multiplexadas de un programa para ejecuci&oacute;n en procesadores en paralelo";
 choices[6][3] = "Una versi&oacute;n de Java optimizada para Macintosh";
 answers[6] = choices[6][1];
 units[6] = "60";
 comments[6] = "Id Pregunta: 1197. NULL";


//  Id pregunta: 1678 AÃ±o de creación de pregunta: 2004-01-01
 questions[7]= "8)  Indique la afirmaci&oacute;n verdadera respecta a ADO.NET";
 choices[7]= new Array();
 choices[7][0] = "Utiliza el objeto DATASET, estructura relacional que puede ser le&iacute;da, escrita y serializada usando XML";
 choices[7][1] = "Potencia el acceso a datos desconectados usando XML";
 choices[7][2] = "El DATASET de ADO.NET accede a los datos con independencia de la fuente de datos que lo aprovisiona";
 choices[7][3] = "Todas son ciertas";
 answers[7] = choices[7][3];
 units[7] = "59";
 comments[7] = "Id Pregunta: 1678. ";


//  Id pregunta: 1752 AÃ±o de creación de pregunta: 2006-01-01
 questions[8]= "9)  Se&ntilde;ala la falsa referente a SQL";
 choices[8]= new Array();
 choices[8][0] = "Las funciones agregadas devuelven un &uacute;nico valor ";
 choices[8][1] = "La cla&uacute;sula HAVING se utiliza para especificar las condiciones que deben reunir los registros nulos a seleccionar";
 choices[8][2] = "SELF JOIN es una t&eacute;cnica empleada para conseguir el producto cartesiano de una tabla consigo misma";
 choices[8][3] = "La cla&uacute;sula CONSTRAINT permite crear o eliminar &iacute;ndices";
 answers[8] = choices[8][1];
 units[8] = "58";
 comments[8] = "Id Pregunta: 1752. NULL";


//  Id pregunta: 2029 AÃ±o de creación de pregunta: 2004-01-01
 questions[9]= "10)  Ivar Jacobson, Jim Rumbaugh y Grady Booch fueron los creadores de:";
 choices[9]= new Array();
 choices[9][0] = "UML";
 choices[9][1] = "XML";
 choices[9][2] = "HTML";
 choices[9][3] = "Ninguno de los anteriores";
 answers[9] = choices[9][0];
 units[9] = "82";
 comments[9] = "Id Pregunta: 2029. Similar a examen TIC SS A 2003";


//  Id pregunta: 2432 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  La relaci&oacute;n de herencia en la orientaci&oacute;n a objetos:";
 choices[10]= new Array();
 choices[10][0] = "Permite que una clase cliente que utilice la interfaz de otra pueda tratar igualmente con objetos pertenecientes a superclases de las que aquella hereda.";
 choices[10][1] = "Facilita la reutilizaci&oacute;n de especificaciones preexistentes para la creaci&oacute;n de otras nuevas.";
 choices[10][2] = "Facilita el principio de acoplamiento d&eacute;bil entre clases.";
 choices[10][3] = "Aumenta la modularidad y abstracci&oacute;n del dise&ntilde;o, pero disminuye la productividad del equipo de desarrollo.";
 answers[10] = choices[10][1];
 units[10] = "82,84";
 comments[10] = "Id Pregunta: 2432. ";


//  Id pregunta: 2513 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Uno de los efectos de la falta de calidad en el desarrollo de software es la insatisfacci&oacute;n de los usuarios. &iquest;Cu&aacute;l es una de las principales causas de esta insatisfacci&oacute;n?:";
 choices[11]= new Array();
 choices[11][0] = "El dimensionamiento del hardware";
 choices[11][1] = "Las necesidades funcionales solicitadas y no contempladas por el software para &eacute;l desarrollado";
 choices[11][2] = "Las dificultades de adaptaci&oacute;n al nuevo trabajo";
 choices[11][3] = "Los usuarios no suelen estar insatisfechos nunca";
 answers[11] = choices[11][1];
 units[11] = "92";
 comments[11] = "Id Pregunta: 2513. NULL";


//  Id pregunta: 2922 AÃ±o de creación de pregunta: 2004-01-01
 questions[12]= "13)  &iquest;Cu&aacute;l es el est&aacute;ndar de WLAN que permite transmitir a una velocidad efectiva de entre 12 y 24 Mbps y a una velocidad m&aacute;xima de 54 Mbps?";
 choices[12]= new Array();
 choices[12][0] = "IEEE 802.11a";
 choices[12][1] = "IEEE 802.11b";
 choices[12][2] = "IEEE 802.11g";
 choices[12][3] = "IEEE 802.11i";
 answers[12] = choices[12][2];
 units[12] = "101, 107";
 comments[12] = "Id Pregunta: 2922. Similar a examen TIC SS A 2003";


//  Id pregunta: 3136 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l de las respuestas siguientes es verdadera sobre las direcciones disponibles en clases A, B y C en redes IP?:";
 choices[13]= new Array();
 choices[13][0] = "El n&uacute;mero de direcciones para sistemas por red decrece de redes clase A  a las de clase C";
 choices[13][1] = "El n&uacute;mero de direcciones disponibles para redes decrece de las de clases A a las de clase C";
 choices[13][2] = "Las direcciones de clase C son adecuadas para organizaciones muy grandes, mientras que las de clase B son m&aacute;s adecuadas para compa&ntilde;ias peque&ntilde;as";
 choices[13][3] = "El rango de direcciones A es num&eacute;ricamente el mayor mientras que las de clase C es numericamente el menor";
 answers[13] = choices[13][0];
 units[13] = "100";
 comments[13] = "Id Pregunta: 3136. NULL";


//  Id pregunta: 3279 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  &iquest;Qu&eacute; elemento de la especificaci&oacute;n de RDSI ser&iacute;a una centralita digital de abonado?:";
 choices[14]= new Array();
 choices[14][0] = "Un TR1";
 choices[14][1] = "Un TR2";
 choices[14][2] = "RDSI no contempla el concepto de central de abonado, por lo que esta ser&iacute;a un equipo terminal (ET1) m&aacute;s";
 choices[14][3] = "RDSI no contempla el concepto de central de abonado, por lo que esta ser&iacute;a un equipo terminal (ET2) m&aacute;s";
 answers[14] = choices[14][1];
 units[14] = "103";
 comments[14] = "Id Pregunta: 3279. ";


//  Id pregunta: 3750 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  MIB es:";
 choices[15]= new Array();
 choices[15][0] = "Una base de datos de informaci&oacute;n de gestion";
 choices[15][1] = "Un protocolo de gesti&oacute;n";
 choices[15][2] = "Un dominio de gesti&oacute;n";
 choices[15][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[15] = choices[15][0];
 units[15] = "104";
 comments[15] = "Id Pregunta: 3750. ";


//  Id pregunta: 3989 AÃ±o de creación de pregunta: 2006-01-01
 questions[16]= "17)  La t&eacute;cnica NAT no permite:";
 choices[16]= new Array();
 choices[16][0] = "Implementar una pasarela FTP.";
 choices[16][1] = "Optimizar el uso de direccionamiento IP p&uacute;blico.";
 choices[16][2] = "Aislar el espacio de direccionamiento p&uacute;blico del privado.";
 choices[16][3] = "Asignar direcciones din&aacute;micas para acceso a Internet.";
 answers[16] = choices[16][0];
 units[16] = "102";
 comments[16] = "Id Pregunta: 3989. ";


//  Id pregunta: 4075 AÃ±o de creación de pregunta: 2006-01-01
 questions[17]= "18)  &iquest;Qu&eacute; beneficios puede tener la distribuci&oacute;n del software en varias maquinas ?";
 choices[17]= new Array();
 choices[17][0] = "Normalmente no presenta beneficios pero en algunas ocasiones es necesario";
 choices[17][1] = "Nunca tiene beneficios";
 choices[17][2] = "Es m&aacute;s optimo que los sistemas SMP";
 choices[17][3] = "Mayor disponibilidad";
 answers[17] = choices[17][3];
 units[17] = "113";
 comments[17] = "Id Pregunta: 4075. ";


//  Id pregunta: 4081 AÃ±o de creación de pregunta: 2006-01-01
 questions[18]= "19)  Un proxy o apoderado permite";
 choices[18]= new Array();
 choices[18][0] = "realizar funciones de repetidor, ocultando la m&aacute;quina solicitante";
 choices[18][1] = "disponer de una memoria temporal para almacenar las p&aacute;ginas web m&aacute;s visitadas";
 choices[18][2] = "traducir las direcciones internas a externas y viceversa";
 choices[18][3] = "Todas  las respuestas son correctas";
 answers[18] = choices[18][3];
 units[18] = "113";
 comments[18] = "Id Pregunta: 4081. ";


//  Id pregunta: 4407 AÃ±o de creación de pregunta: 2007-01-01
 questions[19]= "20)  &iquest;En qu&eacute; consiste el CRA (Customer Relationship Analisis?";
 choices[19]= new Array();
 choices[19][0] = "Es un conjunto de herramientas que proveen de soporte t&eacute;cnico al CRM.";
 choices[19][1] = "Es el precursor del CRM.";
 choices[19][2] = "Es el an&aacute;lisis de datos acerca de los clientes y su relaci&oacute;n con la empresa.";
 choices[19][3] = "Integraci&oacute;n del software de an&aacute;lisis de datos con las bases de datos y el inventario de las organizaciones";
 answers[19] = choices[19][2];
 units[19] = "65";
 comments[19] = "Id Pregunta: 4407. ";


//  Id pregunta: 4501 AÃ±o de creación de pregunta: 2007-01-01
 questions[20]= "21)  Trabajando con un diagrama PERT vemos que se retrasa una etapa no perteneciente al camino critico. Este aumento de duraci&oacute;n, &iquest;retrasar&aacute; la fecha del final del proyecto?";
 choices[20]= new Array();
 choices[20][0] = "Siempre, dado que todo retraso en una etapa afecta a la duraci&oacute;n del proyecto.";
 choices[20][1] = "Nunca, al no pertenecer la etapa al camino cr&iacute;tico.";
 choices[20][2] = "S&oacute;lo si la nueva duraci&oacute;n de la etapa es superior a la duraci&oacute;n de cualquiera de las otras etapas.";
 choices[20][3] = "S&oacute;lo si la nueva duraci&oacute;n convierte en critico el camino al que pertenece la etapa.";
 answers[20] = choices[20][3];
 units[20] = "27";
 comments[20] = "Id Pregunta: 4501. Castilla la Mancha 06";


//  Id pregunta: 4569 AÃ±o de creación de pregunta: 2007-01-01
 questions[21]= "22)  Para hacer una Ilamada a un procedimiento almacenado trabajando con JDBC podemos utilizar un objeto CallableStatement. Si el procedimiento almacenado devuelve mas de un conjunto de resultados, &iquest;que m&eacute;todo deberemos invocar?:";
 choices[21]= new Array();
 choices[21][0] = "execute";
 choices[21][1] = "executeQuery";
 choices[21][2] = "executeProcedure";
 choices[21][3] = "executeUpdate";
 answers[21] = choices[21][0];
 units[21] = "60";
 comments[21] = "Id Pregunta: 4569. NULL";


//  Id pregunta: 4571 AÃ±o de creación de pregunta: 2007-01-01
 questions[22]= "23)  En HTML podemos referenciar una marca dentro de un documento con la directiva &lt;A&gt;, indicando el nombre de documento y el nombre de la marca, y separando ambos nombres con el car&aacute;cter:";
 choices[22]= new Array();
 choices[22][0] = "@";
 choices[22][1] = "$";
 choices[22][2] = "&amp;";
 choices[22][3] = "#";
 answers[22] = choices[22][3];
 units[22] = "69";
 comments[22] = "Id Pregunta: 4571. NULL";


//  Id pregunta: 4692 AÃ±o de creación de pregunta: 2007-01-01
 questions[23]= "24)  &iquest;Qu&eacute; no es una ventaja de los sistemas abiertos seg&uacute;n la Estrategia de Sistemas Abiertos de la Administraci&oacute;n del Estado?";
 choices[23]= new Array();
 choices[23][0] = "Libertad de elecci&oacute;n";
 choices[23][1] = "Protecci&oacute;n de la inversi&oacute;n";
 choices[23][2] = "Mejor relaci&oacute;n calidad/precio";
 choices[23][3] = "Garant&iacute;a de comunicaci&oacute;n e interoperabilidad de los sistemas";
 answers[23] = choices[23][2];
 units[23] = "40";
 comments[23] = "Id Pregunta: 4692. Examen 2006 JCYL";


//  Id pregunta: 4739 AÃ±o de creación de pregunta: 2007-01-01
 questions[24]= "25)  La refactorizaci&oacute;n consiste en:";
 choices[24]= new Array();
 choices[24][0] = "Mejorar el c&oacute;digo fuente.";
 choices[24][1] = "Mejorar el dise&ntilde;o de una aplicaci&oacute;n.";
 choices[24][2] = "Mejorar el mantenimiento del c&oacute;digo fuente.";
 choices[24][3] = "Todas las respuestas anteriores son correctas.";
 answers[24] = choices[24][3];
 units[24] = "91";
 comments[24] = "Id Pregunta: 4739. Examen 2006 JCYL";


//  Id pregunta: 4770 AÃ±o de creación de pregunta: 2007-01-01
 questions[25]= "26)  Si Alice quiere transmitir un documento cifrado (sin autentcaci&oacute;n) hacia Bob utilizando un algoritmo de clave asim&eacute;trica";
 choices[25]= new Array();
 choices[25][0] = "Debe cifrarlo con la clave p&uacute;blica de Bob";
 choices[25][1] = "Debe cifrarlo con la clave privada de Bob";
 choices[25][2] = "Debe cifrarlo con la clave privada de Alice";
 choices[25][3] = "Debe cifrarlo con la clave p&uacute;blica de Alice";
 answers[25] = choices[25][0];
 units[25] = "74";
 comments[25] = "Id Pregunta: 4770. NULL";


//  Id pregunta: 5103 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  Los elementos b&aacute;sicos de un sistema de informaci&oacute;n son:";
 choices[26]= new Array();
 choices[26][0] = "Los procedimiento y las pr&aacute;cticas hatituales de trabajo; la informaci&oacute;n; los usuarios; el equipo de soporte para la comunicaci&oacute;n, el procesamiento y el almacenamiento de la informaci&oacute;n.";
 choices[26][1] = "Los procedimientos y las pr&aacute;cticas habituales de trabajo; la informaci&oacute;n; el eqipo de soporte para la comunicaci&oacute;n, el procesamiento y el almacenamiento de la informaci&oacute;n.";
 choices[26][2] = "Los procedimientos y las pr&aacute;cticas habituales de trabajo; la informaci&oacute;n; los usuarios.";
 choices[26][3] = "La informaci&oacute;n; el equipo de soporte para la comunicaci&oacute;n, el procesamiento y el almacenamiento de la informaci&oacute;n.";
 answers[26] = choices[26][0];
 units[26] = "21";
 comments[26] = "Id Pregunta: 5103. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5175 AÃ±o de creación de pregunta: 2003-01-01
 questions[27]= "28)  Respecto a los organismos y procesos de normalizaci&oacute;n podemos afirmar:";
 choices[27]= new Array();
 choices[27][0] = "La adopci&oacute;n de las normas internacionales elaboradas en ISO e EIC es obligatoria para los pa&iacute;ses miembros de la UE.";
 choices[27][1] = "Los organismos europeos de normalizaci&oacute;n obligan a sus miembros a adoptar las normas europeas que ellos elaboren.";
 choices[27][2] = "AENOR es una entidad p&uacute;blica empresarial dependiente del Ministerio de Industria.";
 choices[27][3] = "Las normas publicadas por AENOR se conocen como normas IEC.";
 answers[27] = choices[27][1];
 units[27] = "42";
 comments[27] = "Id Pregunta: 5175. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5552 AÃ±o de creación de pregunta: 2003-01-01
 questions[28]= "29)  Se&ntilde;ale la afirmaci&oacute;n incorrecta:";
 choices[28]= new Array();
 choices[28][0] = "Las pautas WAI  se encuentran agrupadas en WCAG, ATAG, UAAG.";
 choices[28][1] = "Las pautas WAI se basan en la utilizaci&oacute;n de est&aacute;ndares del W3C.";
 choices[28][2] = "Las WCAG 1.0  tienen 15 pautas, cada una de ellas con uno o m&aacute;s puntos de verificaci&oacute;n.";
 choices[28][3] = "Cada punto de verificaci&oacute;n tiene una prioridad asignada. El cumplimiento de los puntos de prioridad 1 asegura el cumplimiento del nivel de accesibilidad web A.";
 answers[28] = choices[28][2];
 units[28] = "39";
 comments[28] = "Id Pregunta: 5552. ";


//  Id pregunta: 6150 AÃ±o de creación de pregunta: 2010-01-01
 questions[29]= "30)  &iquest;Cu&aacute;les son algunos modelos de mejora de procesos relacionados con la gesti&oacute;n de la calidad en un proyecto?";
 choices[29]= new Array();
 choices[29][0] = "Malcolm Baldrige, CMM, CMMISM y ASQ.";
 choices[29][1] = "Malcolm Baldrige, AMD y CMMISM.";
 choices[29][2] = "Malcolm Baldrige, CMM, CMMISM y AMD.";
 choices[29][3] = "Malcolm Baldrige, CMM y CMMISM.";
 answers[29] = choices[29][3];
 units[29] = "28";
 comments[29] = "Id Pregunta: 6150. ";


//  Id pregunta: 6176 AÃ±o de creación de pregunta: 2010-01-01
 questions[30]= "31)  Se&ntilde;ale cual de los siguientes no se corresponde con ning&uacute;n libro SCORM";
 choices[30]= new Array();
 choices[30][0] = "Scorm Content Aggregation Model.";
 choices[30][1] = "Scorm Shareable Content Objects.";
 choices[30][2] = "Scorm Run-Time Environment.";
 choices[30][3] = "Scorm Sequencing and Navigation.";
 answers[30] = choices[30][1];
 units[30] = "66";
 comments[30] = "Id Pregunta: 6176. ";


//  Id pregunta: 6281 AÃ±o de creación de pregunta: 2010-01-01
 questions[31]= "32)  &iquest;Qu&eacute; t&eacute;cnica se emplea para determinar la situaci&oacute;n real en que se encuentra la organizaci&oacute;n y conocer el riesgo y las oportunidades que le ofrece el mercado?";
 choices[31]= new Array();
 choices[31][0] = "T&eacute;cnica FCE (Factores Cr&iacute;ticos de &Eacute;xito)";
 choices[31][1] = "An&aacute;lisis DAFO ";
 choices[31][2] = "Aprendizaje organizativo";
 choices[31][3] = "An&aacute;lisis econ&oacute;mico del mercado";
 answers[31] = choices[31][1];
 units[31] = "77";
 comments[31] = "Id Pregunta: 6281. ";


//  Id pregunta: 6349 AÃ±o de creación de pregunta: 2010-01-01
 questions[32]= "33)  &iquest;Cu&aacute;l de los siguientes no es un servicio de marcadores sociales en web?";
 choices[32]= new Array();
 choices[32][0] = "Delicious";
 choices[32][1] = "Digg";
 choices[32][2] = "Visconti";
 choices[32][3] = "Reddit";
 answers[32] = choices[32][2];
 units[32] = "120";
 comments[32] = "Id Pregunta: 6349. NULL";


//  Id pregunta: 6350 AÃ±o de creación de pregunta: 2010-01-01
 questions[33]= "34)  El proyecto de Reutilizaci&oacute;n de la informaci&oacute;n del Sector P&uacute;blico, promovido por la Secretaria de Estado de Telecomunicaciones y para la sociedad de la informaci&oacute;n se llama:";
 choices[33]= new Array();
 choices[33][0] = "Reutiliza";
 choices[33][1] = "Comparte";
 choices[33][2] = "Rhodas";
 choices[33][3] = "Aporta";
 answers[33] = choices[33][3];
 units[33] = "30";
 comments[33] = "Id Pregunta: 6350. http://datos.gob.es/content/proyecto-aporta";


//  Id pregunta: 6618 AÃ±o de creación de pregunta: 2010-01-01
 questions[34]= "35)  La actividad Verificaci&oacute;n y Aceptaci&oacute;n de la Arquitectura del Sistema seg&uacute;n M&eacute;trica:";
 choices[34]= new Array();
 choices[34][0] = "Se realiza en el proceso de Planificaci&oacute;n (PSI), despu&eacute;s de la Definici&oacute;n de la Arquitectura Tecnol&oacute;gica (PSI 7)";
 choices[34][1] = "Se realiza en el Estudio de Viabilidad, despu&eacute;s del Estudio de Alternativas de la Soluci&oacute;n (EVS 4)";
 choices[34][2] = "Se realiza en el proceso de An&aacute;lisis (ASI), despu&eacute;s del An&aacute;lisis de Consistencia (ASI 9)";
 choices[34][3] = "Se realiza en el proceso de Dise&ntilde;o (DSI), despu&eacute;s del Dise&ntilde;o de la Arqitectura de Soporte (DSI 2) y el Dise&ntilde;o F&iacute;sico de Datos (DSI 6)";
 answers[34] = choices[34][3];
 units[34] = "86";
 comments[34] = "Id Pregunta: 6618. NULL";


//  Id pregunta: 6634 AÃ±o de creación de pregunta: 2010-01-01
 questions[35]= "36)  Entre los distintos modelos de calidad NO se encuentra:";
 choices[35]= new Array();
 choices[35][0] = "FURPS (Funcionality, Usability, Reliability, Performance, Supportability)";
 choices[35][1] = "McCall";
 choices[35][2] = "EFQM (European Foundation for Quality Management)";
 choices[35][3] = "EQAM (European Quality Assurance Method)";
 answers[35] = choices[35][3];
 units[35] = "88";
 comments[35] = "Id Pregunta: 6634. NULL";


//  Id pregunta: 7266 AÃ±o de creación de pregunta: 2010-01-01
 questions[36]= "37)  El acceso al medio utilizado por GSM (Global System Mobile) es acceso m&uacute;ltiple por divisi&oacute;n de:";
 choices[36]= new Array();
 choices[36][0] = "Frecuencia";
 choices[36][1] = "Tiempo";
 choices[36][2] = "Tiempo y frecuencia";
 choices[36][3] = "C&oacute;digo de banda ancha (WCDMA)";
 answers[36] = choices[36][2];
 units[36] = "108";
 comments[36] = "Id Pregunta: 7266. Examen TIC B 2009";


//  Id pregunta: 7284 AÃ±o de creación de pregunta: 2010-01-01
 questions[37]= "38)  Una de las grandes ventajas que aporta la virtualizaci&oacute;n de infraestructuras en un centro de datos es:";
 choices[37]= new Array();
 choices[37][0] = "Reducci&oacute;n de personal de operaciones";
 choices[37][1] = "Reducci&oacute;n de costes de mantenimiento preventivo";
 choices[37][2] = "Gesti&oacute;n del ciclo de vida de la informaci&oacute;n (ILM) m&aacute;s eficaz";
 choices[37][3] = "Gesti&oacute;n agrupada (pooled) de recursos a lo largo de toda la Organizaci&oacute;n";
 answers[37] = choices[37][3];
 units[37] = "119";
 comments[37] = "Id Pregunta: 7284. Examen TIC B 2009";


//  Id pregunta: 7295 AÃ±o de creación de pregunta: 2010-01-01
 questions[38]= "39)  Indique cu&aacute;l de los siguientes es un algoritmo empleado en adaptaci&oacute;n al locutor para reconocimiento autom&aacute;tico del habla (ASR):";
 choices[38]= new Array();
 choices[38][0] = "MLLR";
 choices[38][1] = "MAP";
 choices[38][2] = "a y b son correctas";
 choices[38][3] = "a y b son incorrectas";
 answers[38] = choices[38][2];
 units[38] = "94";
 comments[38] = "Id Pregunta: 7295. NULL";


//  Id pregunta: 7353 AÃ±o de creación de pregunta: 2010-01-01
 questions[39]= "40)  Si para un determinado criterio, el decisor establece como umbral de saciedad 50 y como nivel de satisfacci&oacute;n 10:";
 choices[39]= new Array();
 choices[39][0] = "No ser&aacute;n tenidas en cuenta las ofertas que ofrezcan menos de 50";
 choices[39][1] = "Solo ser&aacute;n tenidas en cuenta las ofertas est&eacute;n entre 10 y 50";
 choices[39][2] = "Es un criterio a minimizar";
 choices[39][3] = "Una oferta que ofrezca 50 y otra que ofrezca 60 tendr&aacute;n la misma puntuaci&oacute;n en ese criterio";
 answers[39] = choices[39][3];
 units[39] = "34";
 comments[39] = "Id Pregunta: 7353. NULL";


//  Id pregunta: 8025 AÃ±o de creación de pregunta: 2010-01-01
 questions[40]= "41)   &iquest;Cu&aacute;l es el per&iacute;odo m&aacute;ximo de validez de los certificados del DNIe?";
 choices[40]= new Array();
 choices[40][0] = " 24 meses.";
 choices[40][1] = " 5 a&ntilde;os.";
 choices[40][2] = " 30 meses.";
 choices[40][3] = " 4 a&ntilde;os.";
 answers[40] = choices[40][2];
 units[40] = "NULL";
 comments[40] = "Id Pregunta: 8025. Map 2007";


//  Id pregunta: 8178 AÃ±o de creación de pregunta: 2011-01-01
 questions[41]= "42)  WS-BPEL (Web Service Business Process Execution Language), versi&oacute;n 2.0:";
 choices[41]= new Array();
 choices[41][0] = "Consta de una notaci&oacute;n gr&aacute;fica standard y de un lenguaje ejecutable para especificar interacciones entre servicios web.";
 choices[41][1] = "Permite la especificaci&oacute;n de procesos de negocio abstractos, pero no de procesos de negocio ejecutables.";
 choices[41][2] = "Utiliza XML Schema y WSDL 1.1 para la definici&oacute;n de tipos de datos e interfaces de servicios en la definici&oacute;n de procesos.";
 choices[41][3] = "Es una notaci&oacute;n gr&aacute;fica para la definici&oacute;n de servicios web.";
 answers[41] = choices[41][2];
 units[41] = "71";
 comments[41] = "Id Pregunta: 8178. Examen TIC A1 2010";


//  Id pregunta: 8224 AÃ±o de creación de pregunta: 2011-01-01
 questions[42]= "43)  De acuerdo con la normativa de protecci&oacute;n de datos de car&aacute;cter personal, proceder a la creaci&oacute;n de ficheros de titularidad p&uacute;blica o iniciar la recogida de datos de car&aacute;cter personal para los mismos, sin autorizaci&oacute;n de disposici&oacute;n general publicada en el BOE o Diario oficial correspondiente, se considerar&aacute;:";
 choices[42]= new Array();
 choices[42][0] = "Infracci&oacute;n leve.";
 choices[42][1] = "Infracci&oacute;n notable.";
 choices[42][2] = "Infracci&oacute;n grave.";
 choices[42][3] = "Infracci&oacute;n muy grave.";
 answers[42] = choices[42][2];
 units[42] = "29";
 comments[42] = "Id Pregunta: 8224. Examen TIC A1 2010";


//  Id pregunta: 8294 AÃ±o de creación de pregunta: 2011-01-01
 questions[43]= "44)  Un socket necesita, para estar correctamente definido, especificar el protocolo de nivel de: ";
 choices[43]= new Array();
 choices[43][0] = "Enlace.";
 choices[43][1] = "Red.";
 choices[43][2] = "Transporte.";
 choices[43][3] = "Aplicaci&oacute;n.";
 answers[43] = choices[43][2];
 units[43] = "111";
 comments[43] = "Id Pregunta: 8294. Examen TIC A2 2010";


//  Id pregunta: 8408 AÃ±o de creación de pregunta: 2011-01-01
 questions[44]= "45)  En los dispositivos tipo esc&aacute;ner, la resoluci&oacute;n interpolada es: ";
 choices[44]= new Array();
 choices[44][0] = "Una resoluci&oacute;n calculada que genera nuevos puntos a partir de otros reales m&aacute;s pr&oacute;ximos. ";
 choices[44][1] = "La cantidad de puntos individuales de una imagen captada mediante el sensor";
 choices[44][2] = "La empleada por los programas OCR para identificar el texto. ";
 choices[44][3] = "La que determina la profundidad del color";
 answers[44] = choices[44][0];
 units[44] = "93, 94";
 comments[44] = "Id Pregunta: 8408. Examen TIC A2 2010";


//  Id pregunta: 8629 AÃ±o de creación de pregunta: 2011-01-01
 questions[45]= "46)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre el modelo entidad/relaci&oacute;n es correcta?";
 choices[45]= new Array();
 choices[45][0] = "En la especializaci&oacute;n un supertipo so descompone en uno o varios subtipos, los cuales heredan todos los atributos y relaciones del supertipo.";
 choices[45][1] = "La generalizaci&oacute;n consiste en relacionar dos tipos de entidades que normalmente son de dominios independientes, pero coyunturalmente se asocian.";
 choices[45][2] = "La agregaci&oacute;n permite abstraer un tipo de entidad de nivel superior (supertipo) a partir de varios tipos de entidad (subtipos).";
 choices[45][3] = "La asociaci&oacute;n consiste en construir un nuevo tipo de entidad como composici&oacute;n de otros.";
 answers[45] = choices[45][0];
 units[45] = "57, 58";
 comments[45] = "Id Pregunta: 8629. Examen TIC A2 2010 interna";


//  Id pregunta: 8667 AÃ±o de creación de pregunta: 2011-01-01
 questions[46]= "47)  En relaci&oacute;n a los puertos utilizados en el protocolo FTP se&ntilde;ale la afirmaci&oacute;n correcta.";
 choices[46]= new Array();
 choices[46][0] = "Utiliza el 21 para datos y el 20 para control";
 choices[46][1] = "Utiliza el 20 para datos y el 21 para control";
 choices[46][2] = "Utiliza el 23 para datos y el 25 para control";
 choices[46][3] = "Utiliza el 25 para datos y el 23 para control";
 answers[46] = choices[46][1];
 units[46] = "112";
 comments[46] = "Id Pregunta: 8667. Examen UPM A2 2011";


//  Id pregunta: 8778 AÃ±o de creación de pregunta: 2011-01-01
 questions[47]= "48)  Las actualizaciones de zonas entre servidores DNS se tienen lugar usando los puertos:";
 choices[47]= new Array();
 choices[47][0] = "53 TCP";
 choices[47][1] = "453 TCP";
 choices[47][2] = "456 UDP";
 choices[47][3] = "53 UDP";
 answers[47] = choices[47][0];
 units[47] = "100, 112";
 comments[47] = "Id Pregunta: 8778. Examen UPM A2 2011";


//  Id pregunta: 8933 AÃ±o de creación de pregunta: 2011-01-01
 questions[48]= "49)  La &uacute;ltima versi&oacute;n de ISO 9004 es:";
 choices[48]= new Array();
 choices[48][0] = "ISO 9004:2005";
 choices[48][1] = "ISO 9004:2000";
 choices[48][2] = "ISO 9004:2009";
 choices[48][3] = "ISO 9004:2008";
 answers[48] = choices[48][2];
 units[48] = "92";
 comments[48] = "Id Pregunta: 8933. NULL";


//  Id pregunta: 8957 AÃ±o de creación de pregunta: 2011-01-01
 questions[49]= "50)  Denttro de Web Sem&aacute;ntica 3.0 &iquest;cu&aacute;l no es un lenguaje de construcci&oacute;n?";
 choices[49]= new Array();
 choices[49][0] = "SHOE";
 choices[49][1] = "DAML + OIL";
 choices[49][2] = "WDML";
 choices[49][3] = "RDF";
 answers[49] = choices[49][2];
 units[49] = "63";
 comments[49] = "Id Pregunta: 8957. ";


//  Id pregunta: 9054 AÃ±o de creación de pregunta: 2011-01-01
 questions[50]= "51)  &iquest;Cual de las siguientes NO es una actividad del estadard ISO 13407?";
 choices[50]= new Array();
 choices[50][0] = "Generaci&oacute;n de las soluciones de dise&ntilde;o";
 choices[50][1] = "Di&aacute;logo simple y natural";
 choices[50][2] = "Producci&oacute;n de soluciones de dise&ntilde;o";
 choices[50][3] = "Entender y especificar el contexto de uso.";
 answers[50] = choices[50][0];
 units[50] = "39";
 comments[50] = "Id Pregunta: 9054. NULL";


//  Id pregunta: 9188 AÃ±o de creación de pregunta: 2013-01-01
 questions[51]= "52)  &iquest;En qu&eacute; proceso se llevan a cabo las pruebas de sistema?";
 choices[51]= new Array();
 choices[51][0] = "ASI";
 choices[51][1] = "DSI";
 choices[51][2] = "CSI";
 choices[51][3] = "IAS";
 answers[51] = choices[51][2];
 units[51] = "86";
 comments[51] = "Id Pregunta: 9188. NULL";


//  Id pregunta: 9196 AÃ±o de creación de pregunta: 2013-01-01
 questions[52]= "53)  Cuando un trabajador asalariado crea un programa de ordenador, en el ejercicio de sus funciones:";
 choices[52]= new Array();
 choices[52][0] = "Los derechos de explotaci&oacute;n pertenecen al trabajador.";
 choices[52][1] = "Los derechos de explotaci&oacute;n pertenecen al empresario.";
 choices[52][2] = "Los derechos morales pertenecen al trabajador";
 choices[52][3] = "Los derechos morales pertenecen al empresario";
 answers[52] = choices[52][2];
 units[52] = "36";
 comments[52] = "Id Pregunta: 9196. ";


//  Id pregunta: 9203 AÃ±o de creación de pregunta: 2013-01-01
 questions[53]= "54)  De los siguientes elementos, &iquest; cu&aacute;les no est&aacute;n definidos por el lenguaje ODRL?";
 choices[53]= new Array();
 choices[53][0] = "Assets.";
 choices[53][1] = "Rights.";
 choices[53][2] = "Resources.";
 choices[53][3] = "Parties.";
 answers[53] = choices[53][2];
 units[53] = "37";
 comments[53] = "Id Pregunta: 9203. ";


//  Id pregunta: 9343 AÃ±o de creación de pregunta: 2013-01-01
 questions[54]= "55)  &iquest; Cu&aacute;ntos principios fundamentales define la ISO 9004:2000 ?";
 choices[54]= new Array();
 choices[54][0] = "6";
 choices[54][1] = "7";
 choices[54][2] = "8";
 choices[54][3] = "Ninguno";
 answers[54] = choices[54][2];
 units[54] = "87";
 comments[54] = "Id Pregunta: 9343. NULL";


//  Id pregunta: 9353 AÃ±o de creación de pregunta: 2013-01-01
 questions[55]= "56)  El sistema de se&ntilde;alizaci&oacute;n SS7:";
 choices[55]= new Array();
 choices[55][0] = "Se ocupa, entre otras cosas, del establecimiento de llamada.";
 choices[55][1] = "S&oacute;lo se emplea en RDSI";
 choices[55][2] = "Permite realizar llamadas, pero no intercambiar informaci&oacute;n de usuario.";
 choices[55][3] = "Ninguna de las respuestas es correcta.";
 answers[55] = choices[55][0];
 units[55] = "103";
 comments[55] = "Id Pregunta: 9353. Pruebas selectivas Ingeniero de Telecomunicaci&oacute;n Ayto de Madrid 2010";


//  Id pregunta: 9449 AÃ±o de creación de pregunta: 2013-01-01
 questions[56]= "57)  En el modelo Entidad-Relaci&oacute;n extendido, si puede haber elementos de una superentidad que no est&eacute;n en ninguna de las subentidades hablamos de:";
 choices[56]= new Array();
 choices[56][0] = "Jerarqu&iacute;a con cobertura total.";
 choices[56][1] = "Jerarqu&iacute;a con cobertura parcial.";
 choices[56][2] = "Jerarqu&iacute;a disjunta.";
 choices[56][3] = "Jerarqu&iacute;a con solapamiento.";
 answers[56] = choices[56][1];
 units[56] = "80";
 comments[56] = "Id Pregunta: 9449. Examen AGE TIC A1 2011";


//  Id pregunta: 9488 AÃ±o de creación de pregunta: 2013-01-01
 questions[57]= "58)  Indique cu&aacute;l de los siguientes no es un tipo de prototipo en el proceso unificado de desarrollo del software";
 choices[57]= new Array();
 choices[57][0] = "Prototipo arquitect&oacute;nico";
 choices[57][1] = "Prototipo de prueba";
 choices[57][2] = "Prototipo exploratorio";
 choices[57][3] = "Prototipo evolutivo";
 answers[57] = choices[57][1];
 units[57] = "78";
 comments[57] = "Id Pregunta: 9488. ";


//  Id pregunta: 9529 AÃ±o de creación de pregunta: 2013-01-01
 questions[58]= "59)  Un valor 3 en la escala MOS (Mean Opinion Score) indica que la calidad de la se&ntilde;al es:";
 choices[58]= new Array();
 choices[58][0] = "Adecuada";
 choices[58][1] = "Pobre";
 choices[58][2] = "Buena";
 choices[58][3] = "Ninguna de las anteriores es correcta";
 answers[58] = choices[58][0];
 units[58] = "117";
 comments[58] = "Id Pregunta: 9529. NULL";


//  Id pregunta: 9603 AÃ±o de creación de pregunta: 2014-01-01
 questions[59]= "60)  De las siguientes bases de datos &iquest;cual sigue un esquema noSQL?";
 choices[59]= new Array();
 choices[59][0] = "MariaBD";
 choices[59][1] = "Apache Cassandra";
 choices[59][2] = "Heidi";
 choices[59][3] = "Ingres";
 answers[59] = choices[59][1];
 units[59] = "58";
 comments[59] = "Id Pregunta: 9603. NULL";


//  Id pregunta: 9622 AÃ±o de creación de pregunta: 2014-01-01
 questions[60]= "61)  &iquest;En qu&eacute; consisten los fallos de p&aacute;gina suaves?";
 choices[60]= new Array();
 choices[60][0] = "En actualizar la tabla de p&aacute;ginas";
 choices[60][1] = "En traer la p&aacute;gina del disco porque no se encuentra en memoria";
 choices[60][2] = "En modificar el bit de acceso de la p&aacute;gina";
 choices[60][3] = "En modificar el bit de &quot;p&aacute;gina sucia&quot;";
 answers[60] = choices[60][0];
 units[60] = "52";
 comments[60] = "Id Pregunta: 9622. ";


//  Id pregunta: 9633 AÃ±o de creación de pregunta: 2014-01-01
 questions[61]= "62)  En un sistema UNIX, &iquest;cu&aacute;l es la diferencia entre los ficheros /etc/passwd y /etc/shadow?";
 choices[61]= new Array();
 choices[61][0] = "/etc/shadow es una copia exacta del fichero /etc/password pero s&oacute;lo visible por root";
 choices[61][1] = "/etc/password alberga las passwords de los usuarios y /etc/shadow alberga la historia de comandos realizadas por los mismos";
 choices[61][2] = "/etc/passwd es legible por todos los usuarios, mientras que /etc/shadow es legible s&oacute;lo por root";
 choices[61][3] = "/etc/passwd alberga las passwords de los usuarios mientras que /etc/shadow alberga el nombre de los usuarios";
 answers[61] = choices[61][2];
 units[61] = "53";
 comments[61] = "Id Pregunta: 9633. Examen TIC A2 2013";


//  Id pregunta: 9673 AÃ±o de creación de pregunta: 2014-01-01
 questions[62]= "63)  En Grid Computing:";
 choices[62]= new Array();
 choices[62][0] = "Podemos conseguir cerca del 100% de uso de CPU.";
 choices[62][1] = "Los nodos no tienen que estar dedicados, puesto que su caracter&iacute;stica m&aacute;s importante es que la escalabilidad es parametrizable.";
 choices[62][2] = "Son sistemas heterog&eacute;neos.";
 choices[62][3] = "Todas las anteriores.";
 answers[62] = choices[62][3];
 units[62] = "45";
 comments[62] = "Id Pregunta: 9673. ";


//  Id pregunta: 9778 AÃ±o de creación de pregunta: 2014-01-01
 questions[63]= "64)  &iquest;Con qu&eacute; directiva se declara una p&aacute;gina maestra en ASP.Net?";
 choices[63]= new Array();
 choices[63][0] = "Master";
 choices[63][1] = "MasterPage";
 choices[63][2] = "Master.Page";
 choices[63][3] = "Page ";
 answers[63] = choices[63][0];
 units[63] = "59, 115";
 comments[63] = "Id Pregunta: 9778. Examen TIC A2 2013";


//  Id pregunta: 9899 AÃ±o de creación de pregunta: 2014-01-01
 questions[64]= "65)  Cual de los siguientes NO es un mecanismo de intercambio de informaci&oacute;n utilizable en una arquitectura distribuida";
 choices[64]= new Array();
 choices[64][0] = "mensajes XML sobre protocolo SMTP.";
 choices[64][1] = "mensajes SOAP sobre Servicios de Mensajes Java (JMS).";
 choices[64][2] = "OData.(Open Data Protocol)";
 choices[64][3] = "BPMN (Business Process Message Notation).";
 answers[64] = choices[64][3];
 units[64] = "50,51,79";
 comments[64] = "Id Pregunta: 9899. TIC A1, Examen 2013";


//  Id pregunta: 9902 AÃ±o de creación de pregunta: 2014-01-01
 questions[65]= "66)  Los puntos de fijaci&oacute;n (anchor points) son caracter&iacute;sticos en el modelo de desarrollo:";
 choices[65]= new Array();
 choices[65][0] = "En cascada.";
 choices[65][1] = "Basado en prototipos.";
 choices[65][2] = "En espiral WINWIN.";
 choices[65][3] = "RAD.";
 answers[65] = choices[65][2];
 units[65] = "76";
 comments[65] = "Id Pregunta: 9902. TIC A2, Examen 2013";


//  Id pregunta: 9959 AÃ±o de creación de pregunta: 2014-01-01
 questions[66]= "67)  ASP.NET proporciona varios modos de persistencia para las variables de sesi&oacute;n. Indique cu&aacute;l de las respuestas NO es un modo v&aacute;lido:";
 choices[66]= new Array();
 choices[66][0] = "InProc";
 choices[66][1] = "StateServer";
 choices[66][2] = "ClusterServer";
 choices[66][3] = "SqlServer";
 answers[66] = choices[66][2];
 units[66] = "59,115";
 comments[66] = "Id Pregunta: 9959. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 9992 AÃ±o de creación de pregunta: 2014-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes no es una forma de pago admitida por la Pasarela de Pagos de la Agencia Tributaria?";
 choices[67]= new Array();
 choices[67][0] = "Pago mediante cargo en cuenta";
 choices[67][1] = "Pago con tarjeta";
 choices[67][2] = "Pago por cargo en cuenta de terceras personas, previo apoderamiento registrado en &ldquo;Registro de apoderamientos&rdquo;";
 choices[67][3] = "Pago mediante remesa de importaci&oacute;n para obligados contribuyentes con residencia en el extranjero";
 answers[67] = choices[67][3];
 units[67] = "70";
 comments[67] = "Id Pregunta: 9992. NULL";


//  Id pregunta: 10104 AÃ±o de creación de pregunta: 2014-01-01
 questions[68]= "69)  En un DFD, de acuerdo a M&eacute;trica v.3:";
 choices[68]= new Array();
 choices[68][0] = "Existe un diagrama 0 (nivel 0)";
 choices[68][1] = "Existe un diagrama 1 (nivel 0)";
 choices[68][2] = "Existe un diagrama 1 (nivel 1)";
 choices[68][3] = "Existe un diagrama 0 (nivel 1)";
 answers[68] = choices[68][3];
 units[68] = "81";
 comments[68] = "Id Pregunta: 10104. NULL";


//  Id pregunta: 10113 AÃ±o de creación de pregunta: 2014-01-01
 questions[69]= "70)  El tama&ntilde;o de trama m&iacute;nimo en Ethernet es:";
 choices[69]= new Array();
 choices[69][0] = "48 bytes";
 choices[69][1] = "24 bytes";
 choices[69][2] = "128 bytes";
 choices[69][3] = "64 bytes";
 answers[69] = choices[69][3];
 units[69] = "101";
 comments[69] = "Id Pregunta: 10113. ";


//  Id pregunta: 10129 AÃ±o de creación de pregunta: 2014-01-01
 questions[70]= "71)  Las siglas CMOT significan:";
 choices[70]= new Array();
 choices[70][0] = "Complex Management Over TCP";
 choices[70][1] = "Common Management Over TCP/IP";
 choices[70][2] = "Complex Management Over TCP/IP";
 choices[70][3] = "Complex Management Of Telecomucation";
 answers[70] = choices[70][1];
 units[70] = "104";
 comments[70] = "Id Pregunta: 10129. ";


//  Id pregunta: 10176 AÃ±o de creación de pregunta: 2014-01-01
 questions[71]= "72)  El uso del paradigma de OO se caracteriza por&hellip;.";
 choices[71]= new Array();
 choices[71][0] = "&hellip; el bajo acoplamiento y fuerte cohesi&oacute;n interna de los m&oacute;dulos (clases)";
 choices[71][1] = "&hellip; el alto acoplamiento y d&eacute;bil cohesi&oacute;n interna de los m&oacute;dulos (clases)";
 choices[71][2] = "La Reusabilidad no se encuentra entre sus objetivos";
 choices[71][3] = "La mayor dificultad de la programaci&oacute;n OO reduce la mantenibilidad y modificabilidad de los programas";
 answers[71] = choices[71][0];
 units[71] = "82";
 comments[71] = "Id Pregunta: 10176. ";


//  Id pregunta: 10250 AÃ±o de creación de pregunta: 2014-01-01
 questions[72]= "73)  Juan desarrolla un software y publica el c&oacute;digo fuente bajo la licencia GPL. Recibe muchas modificaciones y Juan decide incorporarlas a una nueva versi&oacute;n de su software. Finalmente, Juan decide hacer una versi&oacute;n propietaria de su software, y declara:I) Como el c&oacute;digo fuente original eral GPL, todos los que han hecho mejoras autom&aacute;ticamente asignan el copyright de esas mejoras a Juan, por lo que no necesita solicitar autorizaci&oacute;n para licenciar el c&oacute;digo de otra formaII) Como Juan tiene el copyright, puede licenciar el c&oacute;digo de forma retroactiva, por lo que nadie puede distribuir versiones anteriores bajo GPL";
 choices[72]= new Array();
 choices[72][0] = "I) y II) son verdaderas";
 choices[72][1] = "I) es verdadera, II) es falsa";
 choices[72][2] = "I es falsa, II) es verdadera";
 choices[72][3] = "I) y II) son falsas";
 answers[72] = choices[72][3];
 units[72] = "61";
 comments[72] = "Id Pregunta: 10250. ";


//  Id pregunta: 10288 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  En el contexto de copias de seguridad o respaldo, un TMS es acr&oacute;nimo de:";
 choices[73]= new Array();
 choices[73][0] = "Tape Management System.";
 choices[73][1] = "Transaction Multiplexing System.";
 choices[73][2] = "Tape Mapping System.";
 choices[73][3] = "Transaction Management System.";
 answers[73] = choices[73][0];
 units[73] = "48";
 comments[73] = "Id Pregunta: 10288. TIC A2, libre, examen 2013";


//  Id pregunta: 10294 AÃ±o de creación de pregunta: 2010-01-01
 questions[74]= "75)  Indique cu&aacute;l de los siguientes es un tipo v&aacute;lido de cable de par trenzado seg&uacute;n su aislamiento o apantallamiento:";
 choices[74]= new Array();
 choices[74][0] = "scp";
 choices[74][1] = "htp";
 choices[74][2] = "ftp";
 choices[74][3] = "ssh";
 answers[74] = choices[74][2];
 units[74] = "99";
 comments[74] = "Id Pregunta: 10294. TIC A2, libre, examen 2013";


//  Id pregunta: 10353 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l es el &aacute;mbito de aplicaci&oacute;n del Real Decreto 1494/2007 de accesibilidad a la sociedad de la informaci&oacute;n y medios de comunicaci&oacute;n social?";
 choices[75]= new Array();
 choices[75][0] = "Los portales web de la Administraciones P&uacute;blicas";
 choices[75][1] = "Administraciones P&uacute;blicas, operadores de telecomunicaciones, prestadores de servicios de la sociedad de la informaci&oacute;n, y medios de comunicaci&oacute;n social";
 choices[75][2] = "Administraciones P&uacute;blicas y medios de comunicaci&oacute;n social, ya que los operadores de telecomunicaciones se rigen por lo dispuesto en la Ley General de Telecomunicaciones";
 choices[75][3] = "Es el mismo que se establece en la norma UNE 139803:2012";
 answers[75] = choices[75][1];
 units[75] = "39";
 comments[75] = "Id Pregunta: 10353. Consultar Art. 2 del Real Decreto";


//  Id pregunta: 10363 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  En relaci&oacute;n con la SETSI, se&ntilde;ale la respuesta incorrecta:";
 choices[76]= new Array();
 choices[76][0] = "Sus siglas corresponden a la Secretar&iacute;a de Estado de Telecomunicaciones y Sistemas de la Informaci&oacute;n";
 choices[76][1] = "Est&aacute; integrada dentro del Ministerio de Industria, Energ&iacute;a y Turismo";
 choices[76][2] = "Desarrolla, entre otras funciones, la realizaci&oacute;n de estudios y propuestas de normas t&eacute;cnicas de equipos e instalaciones del sector de las telecomunicaciones";
 choices[76][3] = "El Ministerio de Industria, Energ&iacute;a y Turismo es miembro de la ETSI a trav&eacute;s de la SETSI";
 answers[76] = choices[76][0];
 units[76] = "42";
 comments[76] = "Id Pregunta: 10363. SETSI: Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";


//  Id pregunta: 10480 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  La Autoridad de Certificaci&oacute;n de los certificados emitidos para el DNI electr&oacute;nico es:";
 choices[77]= new Array();
 choices[77][0] = "La F&aacute;brica Nacional de Moneda y Timbre";
 choices[77][1] = "El Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[77][2] = "El CCN (Centro Criptol&oacute;gico Nacional)";
 choices[77][3] = "El Ministerio del Interior - Direcci&oacute;n General de la Polic&iacute;a";
 answers[77] = choices[77][3];
 units[77] = "74";
 comments[77] = "Id Pregunta: 10480. NULL";


//  Id pregunta: 10514 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  &iquest;Qu&eacute; RFC define el Estandar SIP?";
 choices[78]= new Array();
 choices[78][0] = "RFC 3160";
 choices[78][1] = "RFC 6130";
 choices[78][2] = "RFC 3610";
 choices[78][3] = "RFC 3261";
 answers[78] = choices[78][3];
 units[78] = "109";
 comments[78] = "Id Pregunta: 10514. NULL";


//  Id pregunta: 10540 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  Se&ntilde;ale la respuesta correcta en lo referente a la detecci&oacute;n y correcci&oacute;n de errores en telecomunicaciones";
 choices[79]= new Array();
 choices[79][0] = "CRC (C&oacute;digo de Redundancia C&iacute;clico) permite detectar y corregir errores en recepci&oacute;n";
 choices[79][1] = "un c&oacute;digo Hamming de distancia 3 permite detectar 2 errores y corregir 1";
 choices[79][2] = "Reed-Solomon solamente permite detectar errores, no corregirlos";
 choices[79][3] = "todas las anteriores son incorrectas";
 answers[79] = choices[79][1];
 units[79] = "100";
 comments[79] = "Id Pregunta: 10540. NULL";


//  Id pregunta: 10554 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  Cuando una metodolog&iacute;a de ciclo de vida de desarrollo de sistemas es inadecuada, el riesgo m&aacute;s serio del nuevo sistema ser&aacute;:";
 choices[80]= new Array();
 choices[80][0] = "Se completar&aacute; tarde";
 choices[80][1] = "Superar&aacute; las estimaciones de coste";
 choices[80][2] = "No cumplir&aacute; con las necesidades de negocio y de los usuarios";
 choices[80][3] = "Ser&aacute; incompatible con los sistemas existentes";
 answers[80] = choices[80][2];
 units[80] = "31, 32, 33";
 comments[80] = "Id Pregunta: 10554. Aunque todas las respuestas son riesgos, lo primero y m&aacute;s perjudicial es que el sistema no cumplir&aacute; con las necesidades de los usuarios y del negocio.";


//  Id pregunta: 10849 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  Al conjunto de documentos que definen patrones de dise&ntilde;o y pr&aacute;cticas recomendadas en la creaci&oacute;n de aplicaciones utilizando Java Enterprise Edition se denomina:";
 choices[81]= new Array();
 choices[81][0] = "Java BluePrints.";
 choices[81][1] = "Java Specification Request.";
 choices[81][2] = "Java Community Process.";
 choices[81][3] = "Java Pattern Spec.";
 answers[81] = choices[81][0];
 units[81] = "60, 116";
 comments[81] = "Id Pregunta: 10849. Examen GSI 2014";


//  Id pregunta: 10915 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  Un proyecto europeo cuyo objetivo estrat&eacute;gico fue mejorar y potenciar el uso de la tecnolog&iacute;a PLC se denomin&oacute; proyecto:";
 choices[82]= new Array();
 choices[82][0] = "CORDIS";
 choices[82][1] = "OPERA";
 choices[82][2] = "Dublin Core";
 choices[82][3] = "POIROT";
 answers[82] = choices[82][1];
 units[82] = "107";
 comments[82] = "Id Pregunta: 10915. Examen GSI 2014";


//  Id pregunta: 10989 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  &iquest;A qu&eacute; perfil corresponde en M&eacute;trica 3 la persona que asesora en los aspectos de seguridad y calidad relativos al producto y al proceso seguido para su obtenci&oacute;n, identifica y analiza los riesgos y determina las medidas de control oportunas?";
 choices[83]= new Array();
 choices[83][0] = "Perfil Consultor.";
 choices[83][1] = "Perfil Directivo.";
 choices[83][2] = "Perfil Analista.";
 choices[83][3] = "Perfil Jefe de Proyecto.";
 answers[83] = choices[83][3];
 units[83] = "86";
 comments[83] = "Id Pregunta: 10989. TIC A1 AGE 2014";


//  Id pregunta: 11058 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  &iquest;Qu&eacute; rol de la metodolog&iacute;a FDD es responsable del dise&ntilde;o global del sistema y de la ejecuci&oacute;n de todas las etapas del dise&ntilde;o?";
 choices[84]= new Array();
 choices[84][0] = "Product Manager";
 choices[84][1] = "Chief architect";
 choices[84][2] = "Chief programmer";
 choices[84][3] = "System administrator";
 answers[84] = choices[84][1];
 units[84] = "79";
 comments[84] = "Id Pregunta: 11058. ";


//  Id pregunta: 11112 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  Seleccione la opci&oacute;n verdadera";
 choices[85]= new Array();
 choices[85][0] = "ORVE permite la digitalizaci&oacute;n del papel que presenta el ciudadano en las oficinas de registro";
 choices[85][1] = "GEISER es un protocolo de interconexi&oacute;n de registros";
 choices[85][2] = "ACCEDA permite crear un registro en la nube";
 choices[85][3] = "La norma SICRES 4.0 normaliza el intercambio de asientos registrales entre distintas oficinas de registro";
 answers[85] = choices[85][0];
 units[85] = "30";
 comments[85] = "Id Pregunta: 11112. ";


//  Id pregunta: 11113 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  Indique qu&eacute; tipos de entidades pueden conectarse a la Red Sara:";
 choices[86]= new Array();
 choices[86][0] = "Organismo p&uacute;blicos";
 choices[86][1] = "Ministerios";
 choices[86][2] = "Comunidades Aut&oacute;nomas";
 choices[86][3] = "Todas las anteriores";
 answers[86] = choices[86][3];
 units[86] = "30";
 comments[86] = "Id Pregunta: 11113. ";


//  Id pregunta: 11188 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l de los siguientes es un protocolo de autenticaci&oacute;n PPP (Point to Point)?";
 choices[87]= new Array();
 choices[87][0] = "RADIUS &ndash; Remote Authentication Dial In User Service";
 choices[87][1] = "Kerberos";
 choices[87][2] = "CHAP Challenge Handshake Authentication Protocol";
 choices[87][3] = "Todos los anteriores";
 answers[87] = choices[87][2];
 units[87] = "111";
 comments[87] = "Id Pregunta: 11188. ";


//  Id pregunta: 11271 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  El 5&ordm; principio de marco de trabajo CobiT v5 establece:";
 choices[88]= new Array();
 choices[88][0] = "Este principio se centra en el Gobierno TI dejando la gesti&oacute;n a otras metodolog&iacute;as como ITIL.";
 choices[88][1] = "Establece una clara distinci&oacute;n entre Gobierno y Gesti&oacute;n.";
 choices[88][2] = "No existe interacci&oacute;n alguna entre Gobierno y Gesti&oacute;n.";
 choices[88][3] = "El Gobierno contiene cuatro dominios, seg&uacute;n las &aacute;reas de responsabilidad de Planificar, Construir, Ejecutar y Supervisar (Plan, Build, Run and Monitor, PBRM).";
 answers[88] = choices[88][1];
 units[88] = "98";
 comments[88] = "Id Pregunta: 11271. ";


//  Id pregunta: 11297 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  En qu&eacute; casos no es necesario el consentimiento del usuario en el tratamiento de datos seg&uacute;n la Ley Org&aacute;nica de Protecci&oacute;n de Datos";
 choices[89]= new Array();
 choices[89][0] = "Datos con fines hist&oacute;ricos, estad&iacute;sticos o cient&iacute;ficos.";
 choices[89][1] = "No existen excepciones al consentimiento de tratamiento de los datos.";
 choices[89][2] = "La Administraci&oacute;n en el desempe&ntilde;o de sus funciones y las fuentes accesibles al p&uacute;blico.";
 choices[89][3] = "Datos sobre Sindicaci&oacute;n, Ideolog&iacute;a y Religi&oacute;n.";
 answers[89] = choices[89][2];
 units[89] = "29";
 comments[89] = "Id Pregunta: 11297. ";


//  Id pregunta: 11317 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Una de las siguientes afirmaciones es falsa respecto a las variables est&aacute;ticas en Java";
 choices[90]= new Array();
 choices[90][0] = "Sus valores son compartidos por todos los objetos de la clase";
 choices[90][1] = "Si se invoca desde la clase en la que se encuentra definido, basta con escribir su nombre";
 choices[90][2] = "Si se le invoca desde una clase distinta, debe anteponerse a su nombre, el de la clase en la que se encuentra seguido del operador punto (.) &lt;NombreClase&gt;.variableEstatica";
 choices[90][3] = "Se define mediante el modificador de acceso public";
 answers[90] = choices[90][3];
 units[90] = "116";
 comments[90] = "Id Pregunta: 11317. El identificador que caracteriza a una variable de clase es static y no es considerada de acceso. Las de acceso son: public, private y protected.";


//  Id pregunta: 11387 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Seg&uacute;n ITIL v3, &iquest;una petici&oacute;n de un cliente deber&iacute;a ser cumplida SIEMPRE?";
 choices[91]= new Array();
 choices[91][0] = "S&iacute;, si el cliente es externo, ya que est&aacute; pagando por el servicio";
 choices[91][1] = "No si el cliente es interno, ya que no siempre paga por el servicio";
 choices[91][2] = "No, es responsabilidad del proveedor TI llevar a cabo las debidas diligencias antes de que la petici&oacute;n sea cumplida";
 choices[91][3] = "S&iacute;, el proveedor del servicio deber&iacute;a asegurarse de que todos las peticiones para nuevos servicios sean cumplidas";
 answers[91] = choices[91][2];
 units[91] = "98";
 comments[91] = "Id Pregunta: 11387. ";


//  Id pregunta: 11461 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Seg&uacute;n la Ley 9/2014, se&ntilde;ale la falsa:";
 choices[92]= new Array();
 choices[92][0] = "Corresponde al Gobierno la aprobaci&oacute;n por Real Decreto de los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n.";
 choices[92][1] = "El MINETUR podr&aacute; mediante orden y previo informe del Gobierno, modificar la estructura y organizaci&oacute;n de los planes nacionales.";
 choices[92][2] = "Los costes derivados de la actualizaci&oacute;n de los elementos de la red deber&aacute;n ser sufragados por cada operador.";
 choices[92][3] = "Las decisiones relativas a los otorgamientos de derechos de uso se adoptar&aacute;n, comunicar&aacute;n y har&aacute;n p&uacute;blicas en el plazo m&aacute;ximo de tres semanas desde la recepci&oacute;n de la solicitud completa, salvo cuando se apliquen procedimientos de selecci&oacute;n comparativa o competitiva.";
 answers[92] = choices[92][1];
 units[92] = "110";
 comments[92] = "Id Pregunta: 11461. ";


//  Id pregunta: 11495 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Seg&uacute;n la Ley de Contratos del Sector P&uacute;blico (L.C.S.P.), la adquisici&oacute;n de una licencia mediante la que se cede el derecho de uso de un programa de ordenador tiene la categor&iacute;a de:";
 choices[93]= new Array();
 choices[93][0] = "Contrato de Suministros.";
 choices[93][1] = "Contrato de Arrendamiento.";
 choices[93][2] = "Contrato de Servicios.";
 choices[93][3] = "Contrato de &quot;leasing&quot; o de &quot;renting&quot;";
 answers[93] = choices[93][0];
 units[93] = "41";
 comments[93] = "Id Pregunta: 11495. NULL";


//  Id pregunta: 11590 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Las RFCs son publicadas por:";
 choices[94]= new Array();
 choices[94][0] = "ITU";
 choices[94][1] = "W3C";
 choices[94][2] = "IAB";
 choices[94][3] = "IETF";
 answers[94] = choices[94][3];
 units[94] = "42";
 comments[94] = "Id Pregunta: 11590. ";


//  Id pregunta: 11649 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Se&ntilde;ale cu&aacute;l de los siguientes no es un conector de fibra &oacute;ptica:";
 choices[95]= new Array();
 choices[95][0] = "FC";
 choices[95][1] = "LC";
 choices[95][2] = "SC";
 choices[95][3] = "NC";
 answers[95] = choices[95][3];
 units[95] = "99";
 comments[95] = "Id Pregunta: 11649. ";


//  Id pregunta: 11658 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  En LTE, el S-GW:";
 choices[96]= new Array();
 choices[96][0] = "Es el punto de interconexi&oacute;n a redes IP externas.";
 choices[96][1] = "Une la red de acceso con el n&uacute;cleo de red.";
 choices[96][2] = "Gestiona la QoS en los servicios.";
 choices[96][3] = "Almacena y actualiza la base de datos que contiene la informaci&oacute;n de suscripci&oacute;n del usuario.";
 answers[96] = choices[96][1];
 units[96] = "108";
 comments[96] = "Id Pregunta: 11658. ";


//  Id pregunta: 11678 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  UDDI se corresponde con las siglas:";
 choices[97]= new Array();
 choices[97][0] = "Universal Description, Discovery and Integration";
 choices[97][1] = "Uniform Description, Discovery and Integration";
 choices[97][2] = "Universal Description, Discovery and Information";
 choices[97][3] = "Unic Description, Discovery and Information";
 answers[97] = choices[97][0];
 units[97] = "51, 69";
 comments[97] = "Id Pregunta: 11678. ";


//  Id pregunta: 11682 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Cu&aacute;l es el nombre de la PDU de capa 2 del modelo OSI?";
 choices[98]= new Array();
 choices[98][0] = "MAC";
 choices[98][1] = "Segmento";
 choices[98][2] = "Paquete";
 choices[98][3] = "Trama";
 answers[98] = choices[98][3];
 units[98] = "100";
 comments[98] = "Id Pregunta: 11682. NULL";


//  Id pregunta: 11694 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;cu&aacute;l no es un estado de puerto en el protocolo STP?";
 choices[99]= new Array();
 choices[99][0] = "Listening";
 choices[99][1] = "Learning";
 choices[99][2] = "Forwarding";
 choices[99][3] = "Broadcasting";
 answers[99] = choices[99][3];
 units[99] = "102";
 comments[99] = "Id Pregunta: 11694. NULL";


