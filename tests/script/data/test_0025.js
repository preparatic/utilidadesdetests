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

//  Id pregunta: 56 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;ntos niveles de prioridad hay definidos en WAI?";
 choices[0]= new Array();
 choices[0][0] = "2";
 choices[0][1] = "3";
 choices[0][2] = "4";
 choices[0][3] = "5";
 answers[0] = choices[0][1];
 units[0] = "39";
 comments[0] = "Id Pregunta: 56. ";


//  Id pregunta: 185 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  En el modelo de Donovan la expresi&oacute;n 'mano amiga' se refiere a:";
 choices[1]= new Array();
 choices[1][0] = "Empresas que han optado por instalar de forma distribuida el hardware, y el usuario tiene poder de decisi&oacute;n";
 choices[1][1] = "Empresas en las que se ha descentralizado el hardware y el usuario tiene poder de decisi&oacute;n";
 choices[1][2] = "Empresas en las que se ha descentralizado el hardware y el desarrollo, pero el usuario no tiene poder de decisi&oacute;n";
 choices[1][3] = "Empresas en las que se ha descentralizado el hardware y el desarrollo y el usuario tiene poder de decisi&oacute;n";
 answers[1] = choices[1][1];
 units[1] = "22";
 comments[1] = "Id Pregunta: 185. donovan - nolan";


//  Id pregunta: 285 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  La certificaci&oacute;n es:";
 choices[2]= new Array();
 choices[2][0] = "Actividad que tiene por objeto la evaluaci&oacute;n de conformidad de dise&ntilde;os, productos software, procesos o sistema";
 choices[2][1] = "Proceso por el que el sistema de calidad de una empresa es auditado para comprobar el cumplimiento de determinadas normas";
 choices[2][2] = "Descripci&oacute;n completa de un producto software y las interrelaciones de sus elementos";
 choices[2][3] = "Estructura organizativa, procedimientos, actividades, capacidades y recursos que juntos aseguran que los productos software satisfacen las necesidades impl&iacute;citas o establecidas en contrato por los clientes";
 answers[2] = choices[2][1];
 units[2] = "42";
 comments[2] = "Id Pregunta: 285. NULL";


//  Id pregunta: 389 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  No es un instrumento b&aacute;sico de un DSS orientado a datos:";
 choices[3]= new Array();
 choices[3][0] = "Informe resumen";
 choices[3][1] = "Informe de relaci&oacute;n";
 choices[3][2] = "Informe de excepci&oacute;n";
 choices[3][3] = "Informe gr&aacute;fico";
 answers[3] = choices[3][1];
 units[3] = "21";
 comments[3] = "Id Pregunta: 389. ";


//  Id pregunta: 434 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Seg&uacute;n la Ley 1/1996 de Propiedad Intelectual, la obra nueva que incorpore una obra existente sin la colaboraci&oacute;n del autor de esta &uacute;ltima se denomina:";
 choices[4]= new Array();
 choices[4][0] = "Obra colectiva";
 choices[4][1] = "Obra compuesta";
 choices[4][2] = "Obra en semi-colaboraci&oacute;n";
 choices[4][3] = "Obra replicada";
 answers[4] = choices[4][1];
 units[4] = "36";
 comments[4] = "Id Pregunta: 434. ";


//  Id pregunta: 535 AÃ±o de creación de pregunta: 2004-01-01
 questions[5]= "6)  &iquest;Cu&aacute;l es la variable m&aacute;s importante en un modelo PERT?";
 choices[5]= new Array();
 choices[5][0] = "riesgo";
 choices[5][1] = "coste";
 choices[5][2] = "impacto";
 choices[5][3] = "tiempo";
 answers[5] = choices[5][3];
 units[5] = "28";
 comments[5] = "Id Pregunta: 535. ";


//  Id pregunta: 549 AÃ±o de creación de pregunta: 2004-01-01
 questions[6]= "7)  Las metodolog&iacute;as desarrolladas y utilizadas en la auditoria y el control inform&aacute;ticos se pueden agrupar en las siguientes familias:";
 choices[6]= new Array();
 choices[6][0] = "Internas, externas y mixtas";
 choices[6][1] = "De datos y de aplicaciones";
 choices[6][2] = "Cuantitativas y cualitativas";
 choices[6][3] = "Basadas en modelos, formales y mixtas";
 answers[6] = choices[6][2];
 units[6] = "31, 32, 33";
 comments[6] = "Id Pregunta: 549. ";


//  Id pregunta: 577 AÃ±o de creación de pregunta: 2006-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes afirmaciones es verdadera?";
 choices[7]= new Array();
 choices[7][0] = "Desde el punto de vista cuantitativo, la gr&aacute;fica de Gantt no proporciona informaci&oacute;n sobre la secuencia mas &oacute;ptima de actividades.";
 choices[7][1] = "Desde el punto de vista cualitativo, la gr&aacute;fica de Gantt no proporciona informaci&oacute;n sobre la secuencia mas &oacute;ptima de actividades.";
 choices[7][2] = "Desde el punto de vista cuantitativo, la gr&aacute;fica de Gantt no proporciona informaci&oacute;n sobre la secuencia de actividades.";
 choices[7][3] = "Desde el punto de vista cualitativo, la gr&aacute;fica de Gantt no proporciona informaci&oacute;n sobre la secuencia  actividades.";
 answers[7] = choices[7][0];
 units[7] = "27";
 comments[7] = "Id Pregunta: 577. ";


//  Id pregunta: 641 AÃ±o de creación de pregunta: 2006-01-01
 questions[8]= "9)  Cu&aacute;l de las siguientes afirmaciones sobre sistemas abiertos es incorrecta:";
 choices[8]= new Array();
 choices[8][0] = "Portabilidad consiste en la posibilidad de utilizar el mismo entorno de software en diferentes gamas de ordenadores, desde ordenadores de sobremesa hasta mainframes.";
 choices[8][1] = "lnteroperabilidad consiste en la posibilidad de enlazar distintos ordenadores.";
 choices[8][2] = "Una de las principales ventajas de usar sistemas abiertos consiste en proteger la inversi&oacute;n en equipos f&iacute;sicos, software, formaci&oacute;n y usuarios.";
 choices[8][3] = "Con la utilizaci&oacute;n de sistemas abiertos se persigue evitar el 's&iacute;ndrome de cliente cautivo'.";
 answers[8] = choices[8][0];
 units[8] = "40";
 comments[8] = "Id Pregunta: 641. ";


//  Id pregunta: 691 AÃ±o de creación de pregunta: 2009-01-01
 questions[9]= "10)  De acuerdo con la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, se deber&aacute;n retener los datos de conexi&oacute;n y tr&aacute;fico por un periodo m&aacute;ximo de: ";
 choices[9]= new Array();
 choices[9][0] = "3 meses";
 choices[9][1] = "6 meses";
 choices[9][2] = "12 meses";
 choices[9][3] = "2 a&ntilde;os";
 answers[9] = choices[9][3];
 units[9] = "30";
 comments[9] = "Id Pregunta: 691. reglamentariamente se podr&aacute; reducir a seis meses o ampliar a dos a&ntilde;os, como permite la Directiva 2006/24/CE";


//  Id pregunta: 795 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Qu&eacute; son los midlets?:";
 choices[10]= new Array();
 choices[10][0] = "Son aplicaciones Java para la capa de middleware";
 choices[10][1] = "Son aplicaciones Java igualmente v&aacute;lidas para cliente o para servidor";
 choices[10][2] = "Son applets que s&oacute;lo se ejecutan bajo ciertas condiciones";
 choices[10][3] = "Son aplicaciones Java J2ME para dispositivos m&oacute;viles";
 answers[10] = choices[10][3];
 units[10] = "60";
 comments[10] = "Id Pregunta: 795. NULL";


//  Id pregunta: 975 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Dado x [ 4 ] = { 1, 0, 1, 0 },  &iquest;cu&aacute;l ser&aacute; su contenido despu&eacute;s de ejecutar la siguiente instrucci&oacute;n en lenguaje C?: &ldquo;for ( i=0; i&lt;4; i++ ) for ( j=0; j&lt; 3 ; j++ )  x [ i ] = x [ j ] + 1&rdquo;:";
 choices[11]= new Array();
 choices[11][0] = "{ 1, 1, 2, 3 }";
 choices[11][1] = "{ 2, 2, 2, 2 }";
 choices[11][2] = "{ 2, 2, 4, 5 }";
 choices[11][3] = "Otros valores.";
 answers[11] = choices[11][2];
 units[11] = "NULL";
 comments[11] = "Id Pregunta: 975. NULL";


//  Id pregunta: 1485 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa cuando hablamos del Modelo de Componentes Distribuidos (DCOM)?:";
 choices[12]= new Array();
 choices[12][0] = "DCOM especifica interfaces entre objetos de componentes dentro de una sola aplicaci&oacute;n o entre aplicaciones";
 choices[12][1] = "Dispone de API para el descubrimiento din&aacute;mico de los interfaces que exporta un objeto";
 choices[12][2] = "El modelo de objetos soporta la herencia m&uacute;ltiple, al igual que CORBA";
 choices[12][3] = "Un componente DCOM es capaz de soportar interfaces m&uacute;ltiples";
 answers[12] = choices[12][2];
 units[12] = "59";
 comments[12] = "Id Pregunta: 1485. JCED - Preparatic XVII";


//  Id pregunta: 1681 AÃ±o de creación de pregunta: 2004-01-01
 questions[13]= "14)  Respecto a los cuatro tipos de drivers de JDBC, &iquest;Cu&aacute;l de ellos requiere la existencia de un servidor intermedio o middleware?";
 choices[13]= new Array();
 choices[13][0] = "Driver de tipo I";
 choices[13][1] = "Driver de tipo II";
 choices[13][2] = "Driver de tipo III";
 choices[13][3] = "Driver de tipo IV";
 answers[13] = choices[13][2];
 units[13] = "58";
 comments[13] = "Id Pregunta: 1681. ";


//  Id pregunta: 1770 AÃ±o de creación de pregunta: 2006-01-01
 questions[14]= "15)  Respecto a los drivers utilizados en JDBC";
 choices[14]= new Array();
 choices[14][0] = "El driver de tipo 1 utiliza c&oacute;digo Java para hacer llamadas a una API nativa que debe estar en la m&aacute;quina que accede a la base de datos.";
 choices[14][1] = "El driver de tipo III no requiere ninguna instalaci&oacute;n adicional en la m&aacute;quina cliente, pero obliga a la existencia del middleware.";
 choices[14][2] = "La ventaja del driver tipo II es que da acceso a pr&aacute;cticamente todos los sistemas de gesti&oacute;n de base de datos del mercado";
 choices[14][3] = "todas son falsas";
 answers[14] = choices[14][1];
 units[14] = "60";
 comments[14] = "Id Pregunta: 1770. NULL";


//  Id pregunta: 1833 AÃ±o de creación de pregunta: 2006-01-01
 questions[15]= "16)  Se&ntilde;alar la respuesta falsa";
 choices[15]= new Array();
 choices[15][0] = "HTML es un subconjunto de SGML";
 choices[15][1] = "XHTML es un subconjunto de XML";
 choices[15][2] = "XML es una ampliaci&oacute;n de HTML";
 choices[15][3] = "RTF es un subconjunto de SGML";
 answers[15] = choices[15][2];
 units[15] = "69";
 comments[15] = "Id Pregunta: 1833. NULL";


//  Id pregunta: 1834 AÃ±o de creación de pregunta: 2006-01-01
 questions[16]= "17)  El formato PDF/A";
 choices[16]= new Array();
 choices[16][0] = "Es la &uacute;ltima versi&oacute;n que ha publicado Adobe de su formato PDF";
 choices[16][1] = "Es una versi&oacute;n estandarizada por ISO para el almacenamiento de archivos a largo plazo";
 choices[16][2] = "Es una versi&oacute;n de PDF que se ha publicado bajo una licencia CC";
 choices[16][3] = "Es la primera versi&oacute;n PDF que public&oacute; Adobe y la m&aacute;s extendida";
 answers[16] = choices[16][1];
 units[16] = "93";
 comments[16] = "Id Pregunta: 1834. NULL";


//  Id pregunta: 1843 AÃ±o de creación de pregunta: 2006-01-01
 questions[17]= "18)  &iquest;Con que categoria de software esta m&aacute;s relacionado el BPM?";
 choices[17]= new Array();
 choices[17][0] = "Workflow";
 choices[17][1] = "B2B";
 choices[17][2] = "B2C";
 choices[17][3] = "SCM";
 answers[17] = choices[17][0];
 units[17] = "71";
 comments[17] = "Id Pregunta: 1843. ";


//  Id pregunta: 1864 AÃ±o de creación de pregunta: 2006-01-01
 questions[18]= "19)  &iquest;En qu&eacute; nivel de la pila OSI se sit&uacute;a el protocolo LDAP?";
 choices[18]= new Array();
 choices[18][0] = "Aplicaci&oacute;n";
 choices[18][1] = "Transporte";
 choices[18][2] = "Red";
 choices[18][3] = "Sesi&oacute;n";
 answers[18] = choices[18][0];
 units[18] = "74";
 comments[18] = "Id Pregunta: 1864. NULL";


//  Id pregunta: 2255 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Dentro del control de calidad, &iquest;qu&eacute; se entiende por revisi&oacute;n por pares o &quot;peer review&quot;?";
 choices[19]= new Array();
 choices[19][0] = "Generar un conjunto de pruebas para examinar autom&aacute;ticamente el objeto que se acaba de desarrollar";
 choices[19][1] = "Analizar el objeto en tiempo de ejecuci&oacute;n";
 choices[19][2] = "Revisar del c&oacute;digo de un programador por otros programadores";
 choices[19][3] = "Elaborar un informe de resultados";
 answers[19] = choices[19][2];
 units[19] = "92";
 comments[19] = "Id Pregunta: 2255. NULL";


//  Id pregunta: 2369 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Es cierto decir que la &quot;Ingenier&iacute;a hacia delante&quot;:";
 choices[20]= new Array();
 choices[20][0] = "Es una reingenier&iacute;a hecha a continuaci&oacute;n de una ingenier&iacute;a inversa.";
 choices[20][1] = "Es el resultado de aplicar t&eacute;cnicas de reutilizaci&oacute;n a un sistema bien definido.";
 choices[20][2] = "Parte de un alto nivel de abstracci&oacute;n.";
 choices[20][3] = "Precisa antes una &quot;ingenier&iacute;a inversa&quot;.";
 answers[20] = choices[20][2];
 units[20] = "91";
 comments[20] = "Id Pregunta: 2369. ";


//  Id pregunta: 2656 AÃ±o de creación de pregunta: 2003-01-01
 questions[21]= "22)  Relativo a las clases en OO, cuando dos subtipos se unen para crear una clase superior, se produce:";
 choices[21]= new Array();
 choices[21][0] = "Asociaci&oacute;n";
 choices[21][1] = "Agrupaci&oacute;n";
 choices[21][2] = "Agregaci&oacute;n";
 choices[21][3] = "Generalizaci&oacute;n";
 answers[21] = choices[21][3];
 units[21] = "82";
 comments[21] = "Id Pregunta: 2656. ";


//  Id pregunta: 2727 AÃ±o de creación de pregunta: 2006-01-01
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes factores no es necesario tener en cuenta para guiar a una organizaci&oacute;n hacia el futuro?";
 choices[22]= new Array();
 choices[22][0] = "El mercado";
 choices[22][1] = "La misi&oacute;n";
 choices[22][2] = "Metas y objetivos";
 choices[22][3] = "Subvenciones";
 answers[22] = choices[22][3];
 units[22] = "77";
 comments[22] = "Id Pregunta: 2727. ";


//  Id pregunta: 3306 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  &iquest;Qu&eacute; punto de referencia es el interfaz f&iacute;sico y l&oacute;gico entre Terminales dise&ntilde;ados para conectarse directamente a la RDSI como los tel&eacute;fonos digitales RDSI, &oacute; Adaptadores de Terminal, con una Terminaci&oacute;n de Red de tipo 2?:";
 choices[23]= new Array();
 choices[23][0] = "R";
 choices[23][1] = "S";
 choices[23][2] = "T";
 choices[23][3] = "U";
 answers[23] = choices[23][1];
 units[23] = "103";
 comments[23] = "Id Pregunta: 3306. ";


//  Id pregunta: 3362 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Del protocolo IKE de IPSec podemos decir:";
 choices[24]= new Array();
 choices[24][0] = "que su componente OAKLEY usa el m&eacute;todo de Diffie-Helman modificado para la generaci&oacute;n e intercambio de claves";
 choices[24][1] = "que tiene 3 componentes: ISAKMP, SA y OAKLEY";
 choices[24][2] = "que s&oacute;lo se usa en modo t&uacute;nel, ya que el modo transporte no cifra la cabecera IP original";
 choices[24][3] = "nada de lo anterior es cierto";
 answers[24] = choices[24][0];
 units[24] = "111";
 comments[24] = "Id Pregunta: 3362. Consultar rfc 2409";


//  Id pregunta: 3563 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  En un entorno donde m&uacute;ltiples ordenadores cliente experimentan congesti&oacute;n accediendo a ficheros en unservidor centralizado:";
 choices[25]= new Array();
 choices[25][0] = "Un conmutador (switch) con un ancho de banda mayor dedicado a las puertas de los clientes ayudar&aacute; a aliviar la congesti&oacute;n en el servidor";
 choices[25][1] = "Un switch con el mismo ancho de banda para cada puerta asegurar&aacute; que se la carga de trabajo se distribuya";
 choices[25][2] = "Un an&aacute;lisis de las pautas de tr&aacute;fico y de los puntos cuellos de botella ayudar&aacute; a determinar el tipo de conmutador apropiado";
 choices[25][3] = "Un puente multipuerta proporcionar&aacute; acceso dedicado a la puerta del servidor y aliviar&aacute; la congesti&oacute;n";
 answers[25] = choices[25][2];
 units[25] = "102, 104";
 comments[25] = "Id Pregunta: 3563. ";


//  Id pregunta: 4269 AÃ±o de creación de pregunta: 2007-01-01
 questions[26]= "27)  Indique cu&aacute;l de las siguientes no es una direcci&oacute;n IP correcta:";
 choices[26]= new Array();
 choices[26][0] = "115.26.13.4";
 choices[26][1] = "255.3.4.5";
 choices[26][2] = "10.0.0.1";
 choices[26][3] = "0.0.0.3";
 answers[26] = choices[26][1];
 units[26] = "99";
 comments[26] = "Id Pregunta: 4269. ";


//  Id pregunta: 4415 AÃ±o de creación de pregunta: 2007-01-01
 questions[27]= "28)  En el m&eacute;todo TOPSIS de decisi&oacute;n entre alternativas...";
 choices[27]= new Array();
 choices[27][0] = "La alternativa seleccionada debe ser aqu&eacute;lla que est&eacute; lo m&aacute;s cerca posible de la soluci&oacute;n ideal positiva y lo m&aacute;s lejos posible de la soluci&oacute;n ideal negativa.";
 choices[27][1] = "La idea es comparar cada permutaci&oacute;n posible de alternativas con la informaci&oacute;n ordinal de evaluaciones que aporta para cada criterio la matriz de decisi&oacute;n.";
 choices[27][2] = "En cada comparaci&oacute;n se asocia: &iacute;ndice de concordancia (mide argumentos a favor de la alternativa) e &iacute;ndice de discordancia (mide argumentos en contra).";
 choices[27][3] = "Se ignora la cuant&iacute;a de la diferencia entre alternativas para cada criterio, s&oacute;lo se&ntilde;ala si existe o no, y considera la importancia del criterio para el decisor.";
 answers[27] = choices[27][0];
 units[27] = "34";
 comments[27] = "Id Pregunta: 4415. ";


//  Id pregunta: 4461 AÃ±o de creación de pregunta: 2007-01-01
 questions[28]= "29)  Es un est&aacute;ndar de e-learning: ";
 choices[28]= new Array();
 choices[28][0] = "IEEE";
 choices[28][1] = "ADL";
 choices[28][2] = "LMS";
 choices[28][3] = "SCORM";
 answers[28] = choices[28][3];
 units[28] = "66";
 comments[28] = "Id Pregunta: 4461. ";


//  Id pregunta: 4859 AÃ±o de creación de pregunta: 2007-01-01
 questions[29]= "30)  En un sistema experto tipo MYCIN, &iquest;c&oacute;mo se realiza el tratamiento de la incertidumbre?";
 choices[29]= new Array();
 choices[29][0] = "Mediante un modelo de inferencia bayesiana";
 choices[29][1] = "Mediante conjuntos borrosos, utilizando la teor&iacute;a de Zadeh";
 choices[29][2] = "Mediante factores de incertidumbre, utilizando la teor&iacute;a de Dempster-Shafer";
 choices[29][3] = "No hay tratamiento de la incertidumbre";
 answers[29] = choices[29][2];
 units[29] = "63";
 comments[29] = "Id Pregunta: 4859. ";


//  Id pregunta: 5459 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  Una de las ventajas del protocolo PPP respecto al SLIP es:";
 choices[30]= new Array();
 choices[30][0] = "Permite conexiones s&iacute;ncronas y as&iacute;ncronas";
 choices[30][1] = "Permite varios protocolos de red sobre &eacute;l";
 choices[30][2] = "Permite crear redes privadas virtuales";
 choices[30][3] = "Todas las respuestas son correctas";
 answers[30] = choices[30][3];
 units[30] = "100, 101, 107, 111";
 comments[30] = "Id Pregunta: 5459. Castilla y Le&oacute;n";


//  Id pregunta: 5474 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  En el servidor http Apache al configurarlo como HostnameLookUps On lo que hacemos es";
 choices[31]= new Array();
 choices[31][0] = "Ver si la petici&oacute;n origen proviene de un sistema conocido a trav&eacute;s del fichero /etc/hosts para almacenar el nombre en el fichero de log";
 choices[31][1] = "Ver si la petici&oacute;n origen proviene de un sistema conocido a trav&eacute;s del servicio dns inverso para almacenar el nombre en el fichero de log";
 choices[31][2] = "Ver si la petici&oacute;n origen tiene un nombre asociado a trav&eacute;s del o los servicios de resoluci&oacute;n de nombres ip para almacenar el nombre en el fichero del log";
 choices[31][3] = "Almacena en el log la ip y tambi&eacute;n el nombre del sistema origen de la petici&oacute;n http";
 answers[31] = choices[31][2];
 units[31] = "113";
 comments[31] = "Id Pregunta: 5474. Castilla y Le&oacute;n";


//  Id pregunta: 5570 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  &iquest;Qu&eacute; afirmaci&oacute;n sobre los puentes NO es correcta?";
 choices[32]= new Array();
 choices[32][0] = "Da servicio a un n&uacute;mero de ordenadores mayor que el que puede cubrirse con una red local";
 choices[32][1] = "Puede conectar redees heterog&eacute;neas";
 choices[32][2] = "Puede conectar medios f&iacute;sicos distintos";
 choices[32][3] = "Un problema en una subred afecta a toda la red";
 answers[32] = choices[32][3];
 units[32] = "102";
 comments[32] = "Id Pregunta: 5570. ";


//  Id pregunta: 5936 AÃ±o de creación de pregunta: 2009-01-01
 questions[33]= "34)  &iquest;Cu&aacute;l de estas afirmaciones es cierta con respecto al hypervisor de la herramienta de virtualizaci&oacute;n Xen?";
 choices[33]= new Array();
 choices[33][0] = "Los kernels que incorporan por defecto las distribuciones populares como Debian y Red Hat pueden realizar la funci&oacute;n de hypervisor de Xen.";
 choices[33][1] = "Para que un kernel gen&eacute;rico de Debian o Red Hat puede realizar la funci&oacute;n de hypervisor debemos cargar m&oacute;dulos espec&iacute;ficos en el arranque del sistema.";
 choices[33][2] = "En funci&oacute;n del tipo que sistema operativo que vayamos a alojar como hu&eacute;sped deberemos o no cargar m&oacute;dulos espec&iacute;ficos del kernel por defecto de Debian o Red Hat para que &eacute;ste realice la funci&oacute;n de hypervisor.";
 choices[33][3] = "El hypervisor de Xen es un kernel de Linux especial que debemos instalar, puesto que el kernel por defecto de Debian o Red Hat no puede realizar esas tareas.";
 answers[33] = choices[33][3];
 units[33] = "119";
 comments[33] = "Id Pregunta: 5936. ";


//  Id pregunta: 6054 AÃ±o de creación de pregunta: 2010-01-01
 questions[34]= "35)  El CCITT ha pasado a denominarse:";
 choices[34]= new Array();
 choices[34][0] = "UIT-T o ITU-T.";
 choices[34][1] = "CEPT.";
 choices[34][2] = "IEEE.";
 choices[34][3] = "ETSI.";
 answers[34] = choices[34][0];
 units[34] = "42";
 comments[34] = "Id Pregunta: 6054. TIC A 2009";


//  Id pregunta: 6084 AÃ±o de creación de pregunta: 2010-01-01
 questions[35]= "36)  &iquest;Qu&eacute; se entiende por SOI (Infraestructura Orientada a Servicios)?";
 choices[35]= new Array();
 choices[35][0] = "Una colecci&oacute;n de recursos de hardware y software que soportan la implantaci&oacute;n y el desarrollo de la arquitectura SOA.";
 choices[35][1] = "Se trata de una colecci&oacute;n de recursos de hardware y software que suponen una alternativa a SOA.";
 choices[35][2] = "Se trata de un concepto para el que &quot;The Open Group&quot; ha abierto un proyecto dentro del grupo de trabajo de SOA.";
 choices[35][3] = "Tanto A y C son correctas.";
 answers[35] = choices[35][3];
 units[35] = "51";
 comments[35] = "Id Pregunta: 6084. NULL";


//  Id pregunta: 6153 AÃ±o de creación de pregunta: 2010-01-01
 questions[36]= "37)  &iquest;Sobre qu&eacute; protocolo de la capa de presentaci&oacute;n est&aacute; implementado NFS?";
 choices[36]= new Array();
 choices[36][0] = "ONC RPC";
 choices[36][1] = "XDR";
 choices[36][2] = "NIS";
 choices[36][3] = "XML";
 answers[36] = choices[36][1];
 units[36] = "112";
 comments[36] = "Id Pregunta: 6153. ";


//  Id pregunta: 6155 AÃ±o de creación de pregunta: 2010-01-01
 questions[37]= "38)  &iquest;C&oacute;mo fue renombrado el protocolo SMB por Microsoft?";
 choices[37]= new Array();
 choices[37][0] = "SAMBA";
 choices[37][1] = "CIFS";
 choices[37][2] = "MSRPC";
 choices[37][3] = "Ninguna de las anteriores.";
 answers[37] = choices[37][1];
 units[37] = "112";
 comments[37] = "Id Pregunta: 6155. ";


//  Id pregunta: 6201 AÃ±o de creación de pregunta: 2010-01-01
 questions[38]= "39)  De acuerdo con M&eacute;trica versi&oacute;n 3, &iquest;qui&eacute;n participa en la obtenci&oacute;n del producto &quot;Entorno de pruebas unitarias&quot;, de la tarea &quot;Preparaci&oacute;n del entorno de las pruebas unitarias&quot;?";
 choices[38]= new Array();
 choices[38][0] = "T&eacute;cnicos de sistemas";
 choices[38][1] = "T&eacute;cnicos de sistemas y programadores";
 choices[38][2] = "Programadores";
 choices[38][3] = "Analistas, Programadores y T&eacute;cnicos de sistemas";
 answers[38] = choices[38][1];
 units[38] = "86";
 comments[38] = "Id Pregunta: 6201. TIC-B 2009 bloque desarrollo";


//  Id pregunta: 6212 AÃ±o de creación de pregunta: 2010-01-01
 questions[39]= "40)  Se&ntilde;ale la sentencia correcta:";
 choices[39]= new Array();
 choices[39][0] = "La complejidad ciclom&aacute;tica es una m&eacute;trica del software que proporciona una medici&oacute;n cualitativa de la complejidad l&oacute;gica de un programa";
 choices[39][1] = "Si se usa la complejidad ciclom&aacute;tica en el contexto del m&eacute;todo de prueba del camino b&aacute;sico, el valor calculado como complejidad ciclom&aacute;tica define el n&uacute;mero de caminos dependientes del conjunto b&aacute;sico de un programa";
 choices[39][2] = "En las pruebas del camino b&aacute;sico, los casos de prueba obtenidos del conjunto b&aacute;sico garantizan que durante la prueba se ejecuta una sola vez cada sentencia del programa";
 choices[39][3] = "Dentro de la prueba del camino b&aacute;sico, un camino independiente est&aacute; constituido por lo menos por una arista que no haya sido recorrida anteriormente a la definici&oacute;n del camino";
 answers[39] = choices[39][3];
 units[39] = "88";
 comments[39] = "Id Pregunta: 6212. TICB-2009, bloque desarrollo";


//  Id pregunta: 6342 AÃ±o de creación de pregunta: 2010-01-01
 questions[40]= "41)  &iquest;Cu&aacute;l de los siguientes servicios o aplicaciones no se asocia a la Web 2.0?";
 choices[40]= new Array();
 choices[40][0] = "Facebook";
 choices[40][1] = "Wikipedia";
 choices[40][2] = "Flickr";
 choices[40][3] = "Geocities";
 answers[40] = choices[40][3];
 units[40] = "120";
 comments[40] = "Id Pregunta: 6342. NULL";


//  Id pregunta: 6434 AÃ±o de creación de pregunta: 2010-01-01
 questions[41]= "42)  En el modelo entidad/relaci&oacute;n la forma de representar una entidad es:";
 choices[41]= new Array();
 choices[41][0] = "Mediante un rombo y en el interior del mismo el nombre de la entidad.";
 choices[41][1] = "Mediante un rect&aacute;ngulo y en el interior del mismo el nombre de la entidad.";
 choices[41][2] = "Mediante un elipse y en el interior del mismo el nombre de la entidad.";
 choices[41][3] = "Mediante un tri&aacute;ngulo invertido y el nombre de la entidad en una elipse unida al tri&aacute;ngulo mediante una l&iacute;nea.";
 answers[41] = choices[41][1];
 units[41] = "80";
 comments[41] = "Id Pregunta: 6434. NULL";


//  Id pregunta: 6498 AÃ±o de creación de pregunta: 2010-01-01
 questions[42]= "43)  NO corresponde a una libertad del software libre, seg&uacute;n la FSF:";
 choices[42]= new Array();
 choices[42][0] = "La libertad de usar el programa, con cualquier prop&oacute;sito";
 choices[42][1] = "La libertad de estudiar c&oacute;mo funciona el programa, y adaptarlo a sus necesidades";
 choices[42][2] = "La libertad de distribuir copias, con la autorizaci&oacute;n expl&iacute;cita del autor";
 choices[42][3] = "La libertad de mejorar el programa y hacer p&uacute;blicas las mejoras a los dem&aacute;s, de modo que toda la comunidad se beneficie";
 answers[42] = choices[42][2];
 units[42] = "61";
 comments[42] = "Id Pregunta: 6498. ";


//  Id pregunta: 6534 AÃ±o de creación de pregunta: 2010-01-01
 questions[43]= "44)  El modelo EFQM de excelencia ";
 choices[43]= new Array();
 choices[43][0] = "Es un modelo din&aacute;mico";
 choices[43][1] = "Sigue el esquema l&oacute;gico REDER (RADAR en ingl&eacute;s)";
 choices[43][2] = "Tiene un car&aacute;cter globalizador que cubre todos los aspectos del funcionamiento de una organizaci&oacute;n";
 choices[43][3] = "Todas las respuestas anteriores son correctas";
 answers[43] = choices[43][3];
 units[43] = "92";
 comments[43] = "Id Pregunta: 6534. NULL";


//  Id pregunta: 6560 AÃ±o de creación de pregunta: 2010-01-01
 questions[44]= "45)  Qu&eacute; afirmaci&oacute;n es falsa en relaci&oacute;n a la tecnolog&iacute;a 3.5G?";
 choices[44]= new Array();
 choices[44][0] = "Tecnolog&iacute;a HSDPA";
 choices[44][1] = "Capacidad enlace descendente: hasta 14.4 Mbps";
 choices[44][2] = "El uso del canal descendente puede ser compartido por varios usuarios";
 choices[44][3] = "Todas las respuestas anteriores son correctas";
 answers[44] = choices[44][3];
 units[44] = "108";
 comments[44] = "Id Pregunta: 6560. NULL";


//  Id pregunta: 7246 AÃ±o de creación de pregunta: 2010-01-01
 questions[45]= "46)  &iquest;Qu&eacute; valor tiene el primer n&uacute;mero de una red de clase C en internet?";
 choices[45]= new Array();
 choices[45][0] = "Menor o igual que 127";
 choices[45][1] = "Entre 192 y 223";
 choices[45][2] = "Mayor o igual que 224";
 choices[45][3] = "Entre 128 y 191";
 answers[45] = choices[45][1];
 units[45] = "100";
 comments[45] = "Id Pregunta: 7246. Examen TIC B 2009";


//  Id pregunta: 7306 AÃ±o de creación de pregunta: 2010-01-01
 questions[46]= "47)  Indique cu&aacute;l de los siguientes acr&oacute;nimos se refiere a un formato de gram&aacute;ticas para reconocimiento autom&aacute;tico del habla:";
 choices[46]= new Array();
 choices[46][0] = "JSGF";
 choices[46][1] = "SRGS";
 choices[46][2] = "Ninguno de los dos es un formato de gram&aacute;ticas";
 choices[46][3] = "Los dos son formatos de gram&aacute;ticas";
 answers[46] = choices[46][3];
 units[46] = "94";
 comments[46] = "Id Pregunta: 7306. NULL";


//  Id pregunta: 8248 AÃ±o de creación de pregunta: 2011-01-01
 questions[47]= "48)  Indique la afirmaci&oacute;n FALSA. De acuerdo a la ley 30/2007, el sistema de determinaci&oacute;n del precio de los contratos para el desarrollo de programas inform&aacute;ticos:";
 choices[47]= new Array();
 choices[47][0] = "Puede ser a tanto alzado.";
 choices[47][1] = "Puede resultar de la aplicaci&oacute;n de honorarios por tarifas.";
 choices[47][2] = "Se debe establecer en el Pliego de Prescripciones T&eacute;cnicas.";
 choices[47][3] = "Puede resultar de la combinaci&oacute;n de varias modalidades de c&aacute;lculo.";
 answers[47] = choices[47][2];
 units[47] = "36,37";
 comments[47] = "Id Pregunta: 8248. Examen TIC A1 2010";


//  Id pregunta: 8270 AÃ±o de creación de pregunta: 2011-01-01
 questions[48]= "49)  La gesti&oacute;n de memoria virtual en Unix:";
 choices[48]= new Array();
 choices[48][0] = "Mantiene siempre en memoria RAM los procesos del kernel.";
 choices[48][1] = "Utiliza siempre p&aacute;ginas de memoria de tama&ntilde;o variable.";
 choices[48][2] = "Asigna a los procesos, espacios de direcciones compartidos.";
 choices[48][3] = "No contempla la compartici&oacute;n de c&oacute;digo entre procesos.";
 answers[48] = choices[48][0];
 units[48] = "52,53";
 comments[48] = "Id Pregunta: 8270. Examen TIC A1 2010";


//  Id pregunta: 8318 AÃ±o de creación de pregunta: 2011-01-01
 questions[49]= "50)  &iquest;En qu&eacute; banda de frecuencias y hasta qu&eacute; velocidad funciona el est&aacute;ndar 802.11a? ";
 choices[49]= new Array();
 choices[49][0] = "2,4 GHz y hasta 11Mbps. ";
 choices[49][1] = "5 GHz y hasta 54Mbps. ";
 choices[49][2] = "2,4 GHz y hasta 54 Mbps. ";
 choices[49][3] = "5 GHz y hasta 11 Mbps.";
 answers[49] = choices[49][1];
 units[49] = "107";
 comments[49] = "Id Pregunta: 8318. Examen TIC A2 2010";


//  Id pregunta: 8353 AÃ±o de creación de pregunta: 2011-01-01
 questions[50]= "51)  Indique cu&aacute;l de las siguientes definiciones se corresponde con Biztalk:";
 choices[50]= new Array();
 choices[50][0] = "Es un servidor que permite gestionar procesos de negocio por medio de adaptadores dise&ntilde;ados al efecto, capacit&aacute;ndolo para operar diferentes tipos de software.";
 choices[50][1] = "Es una libreria de .NET que permite la comunicaci&oacute;n por IRC facilitando la implementaci&oacute;n de chats.";
 choices[50][2] = "Es un servidor web de .NET especialmente adaptado para tecnolog&iacute;as m&oacute;viles";
 choices[50][3] = "Es un componente que pertenece al CLR de .NET y que facilita la ejecuci&oacute;n de la aplicaci&oacute;n.";
 answers[50] = choices[50][0];
 units[50] = "59,115";
 comments[50] = "Id Pregunta: 8353. Examen TIC A2 2010";


//  Id pregunta: 8389 AÃ±o de creación de pregunta: 2011-01-01
 questions[51]= "52)  &iquest;En cual de las siguientes pruebas interviene el usuario final?";
 choices[51]= new Array();
 choices[51][0] = "Pruebas de Caja Blanca.";
 choices[51][1] = "Pruebas de Aceptaci&oacute;n.";
 choices[51][2] = "Pruebas de Implantaci&oacute;n.";
 choices[51][3] = "Pruebas de Regresi&oacute;n.";
 answers[51] = choices[51][1];
 units[51] = "86";
 comments[51] = "Id Pregunta: 8389. Examen TIC A2 2010";


//  Id pregunta: 8618 AÃ±o de creación de pregunta: 2011-01-01
 questions[52]= "53)  Con el objeto de asegurar la integridad de los datos, es necesario que una de las funciones del sistema gestor de base de datos sea la gesti&oacute;n de las transacciones. &iquest;Qu&eacute; propiedades deben tener &eacute;stas?";
 choices[52]= new Array();
 choices[52][0] = "Autenticaci&oacute;n, confidencialidad, integridad y disponibilidad.";
 choices[52][1] = "Eficiencia, eficacia, rapidez y estabilidad.";
 choices[52][2] = "Atomicidad, consistencia, aislamiento y persistencia.";
 choices[52][3] = "Serializaci&oacute;n, indexaci&oacute;n, independencia y transparencia.";
 answers[52] = choices[52][2];
 units[52] = "57,58";
 comments[52] = "Id Pregunta: 8618. Examen TIC A2 2010 interna";


//  Id pregunta: 8669 AÃ±o de creación de pregunta: 2011-01-01
 questions[53]= "54)  Cu&aacute;l de los siguientes elementos de seguridad opera en el nivel 3 del modelo OSI";
 choices[53]= new Array();
 choices[53][0] = "Proxy";
 choices[53][1] = "Firewall de filtrado de paquetes";
 choices[53][2] = "Antivirus";
 choices[53][3] = "Filtro anti SPAM";
 answers[53] = choices[53][1];
 units[53] = "111";
 comments[53] = "Id Pregunta: 8669. Examen UPM A2 2011";


//  Id pregunta: 8766 AÃ±o de creación de pregunta: 2011-01-01
 questions[54]= "55)  La metodolog&iacute;a de programaci&oacute;n estructurada utiliza la t&eacute;cnica de refinamientos:";
 choices[54]= new Array();
 choices[54][0] = "Sucesivos.";
 choices[54][1] = "Por iteraci&oacute;n.";
 choices[54][2] = "Secuencial";
 choices[54][3] = "Por selecci&oacute;n.";
 answers[54] = choices[54][0];
 units[54] = "81, 84";
 comments[54] = "Id Pregunta: 8766. Examen TIC A2 2010 interna";


//  Id pregunta: 8777 AÃ±o de creación de pregunta: 2011-01-01
 questions[55]= "56)  La solicitud de certificaci&oacute;n de una clave p&uacute;blica remitida a la autoridad de certificaci&oacute;n correspondiente deber&aacute; ser generada en formato:";
 choices[55]= new Array();
 choices[55][0] = "PKCS#10";
 choices[55][1] = "PKCS#12";
 choices[55][2] = "X.500";
 choices[55][3] = "X.509";
 answers[55] = choices[55][0];
 units[55] = "74";
 comments[55] = "Id Pregunta: 8777. Examen UPM A2 2011";


//  Id pregunta: 8813 AÃ±o de creación de pregunta: 2011-01-01
 questions[56]= "57)  En programaci&oacute;n orientada a objetos &iquest;qu&eacute; son las clases abstractas?";
 choices[56]= new Array();
 choices[56][0] = "Aquellas que se dividen en subclases";
 choices[56][1] = "Aquellas que est&aacute;n predefinidas";
 choices[56][2] = "Las que no tienen instancias";
 choices[56][3] = "Las que no son reutilizables";
 answers[56] = choices[56][2];
 units[56] = "82";
 comments[56] = "Id Pregunta: 8813. Examen UPM A2 2011";


//  Id pregunta: 8875 AÃ±o de creación de pregunta: 2011-01-01
 questions[57]= "58)  &ldquo;Los casos de uso&rdquo; son una t&eacute;cnica utilizada para la especificaci&oacute;n de los requisitos que debe de cumplir el software, &iquest;cu&aacute;l de estas afirmaciones es v&aacute;lida?:";
 choices[57]= new Array();
 choices[57][0] = "No es una t&eacute;cnica v&aacute;lida para desarrollos estructurados";
 choices[57][1] = "Es una t&eacute;cnica v&aacute;lida s&oacute;lo para desarrollos orientados a objetos";
 choices[57][2] = "Es una t&eacute;cnica v&aacute;lida tanto en desarrollos estructurados como en orientaci&oacute;n a objetos, aunque en este caso se propone como t&eacute;cnica obligatoria";
 choices[57][3] = "Es una t&eacute;cnica obligatoria tanto para desarrollos estructurados como para orientados a objetos";
 answers[57] = choices[57][2];
 units[57] = "78";
 comments[57] = "Id Pregunta: 8875. Analista Ayto. Madrid 2010";


//  Id pregunta: 8892 AÃ±o de creación de pregunta: 2011-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de los siguientes es uno de los programas del marco general para la mejora de la calidad en la AGE?";
 choices[58]= new Array();
 choices[58][0] = "Programa de Evaluaci&oacute;n de la Calidad de las Organizaciones";
 choices[58][1] = "Programa de Formaci&oacute;n en EFQM";
 choices[58][2] = "Programa de Mejora de la Eficiencia en la Administraci&oacute;n P&uacute;blica";
 choices[58][3] = "Programa de Aseguramiento de la Calidad";
 answers[58] = choices[58][0];
 units[58] = "87";
 comments[58] = "Id Pregunta: 8892. NULL";


//  Id pregunta: 8919 AÃ±o de creación de pregunta: 2011-01-01
 questions[59]= "60)  &iquest;Qu&eacute; herramienta con versiones en Windows, Unix y otros sistemas, muestra informaci&oacute;n sobre el estado actual de todos los procesos IP que se est&aacute;n ejecutando, las sesiones activas y puede proporcionar estad&iacute;sticas bas&aacute;ndose en los puertos o protocolos.";
 choices[59]= new Array();
 choices[59][0] = "ROUTE";
 choices[59][1] = "NETSTAT";
 choices[59][2] = "NBTSTAT";
 choices[59][3] = "TRACERT";
 answers[59] = choices[59][1];
 units[59] = "104";
 comments[59] = "Id Pregunta: 8919. Operador Ayto. Madrid 2010";


//  Id pregunta: 8966 AÃ±o de creación de pregunta: 2011-01-01
 questions[60]= "61)  El modelo de Prototipado Evolutivo  fue creado por:";
 choices[60]= new Array();
 choices[60][0] = "Hirsch";
 choices[60][1] = "Royce";
 choices[60][2] = "Jackson";
 choices[60][3] = "Bohem";
 answers[60] = choices[60][2];
 units[60] = "76,85";
 comments[60] = "Id Pregunta: 8966. ";


//  Id pregunta: 9003 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  Seg&uacute;n la LOPD, el &oacute;rgano sancionador establecer&aacute; la cuant&iacute;a de la sanci&oacute;n aplicando la escala relativa a la clase de infracciones que preceda inmediatamente en gravedad a aquella en que se integra la considerada en el caso de que se trate, en los siguientes supuestos:";
 choices[61]= new Array();
 choices[61][0] = "Cuando pueda apreciarse que la conducta del afectado ha podido inducir a la comisi&oacute;n de la infracci&oacute;n.";
 choices[61][1] = "Cuando se haya producido un proceso de fusi&oacute;n por absorci&oacute;n y la infracci&oacute;n fuese anterior a dicho proceso, no siendo imputable a la entidad absorbente.";
 choices[61][2] = "Cuando el infractor haya reconocido espont&aacute;neamente su culpabilidad.";
 choices[61][3] = "Todos los anteriores";
 answers[61] = choices[61][3];
 units[61] = "29";
 comments[61] = "Id Pregunta: 9003. ";


//  Id pregunta: 9024 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  El sistema de se&ntilde;alizaci&oacute;n SS7:";
 choices[62]= new Array();
 choices[62][0] = "Se ocupa, entre otras cosas, del establecimiento de llamada.";
 choices[62][1] = "S&oacute;lo se emplea en RDSI.";
 choices[62][2] = "Permite realizar llamadas, pero no intercambiar informaci&oacute;n de usuario.";
 choices[62][3] = "Ninguna de las anteriores";
 answers[62] = choices[62][0];
 units[62] = "103";
 comments[62] = "Id Pregunta: 9024. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9029 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l de los siguientes no es un servidor de streaming?";
 choices[63]= new Array();
 choices[63][0] = "Wowza Media Server";
 choices[63][1] = "Icecast";
 choices[63][2] = "Darwin Streaming Server";
 choices[63][3] = "FlowCast";
 answers[63] = choices[63][3];
 units[63] = "117";
 comments[63] = "Id Pregunta: 9029. ";


//  Id pregunta: 9078 AÃ±o de creación de pregunta: 2013-01-01
 questions[64]= "65)  &quot;Ayuda a la entrada de datos&quot; es una pauta enmarcada en el principio:";
 choices[64]= new Array();
 choices[64][0] = "Perceptible. ";
 choices[64][1] = "Operable. ";
 choices[64][2] = "Comprensible.";
 choices[64][3] = "Robusto.";
 answers[64] = choices[64][2];
 units[64] = "39";
 comments[64] = "Id Pregunta: 9078. ";


//  Id pregunta: 9094 AÃ±o de creación de pregunta: 2013-01-01
 questions[65]= "66)  &iquest;Est&aacute;n protegidos los manuales de uso de un programa de ordenador?";
 choices[65]= new Array();
 choices[65][0] = "Los manuales de uso de un programa de ordeandor no est&aacute;n protegidos.";
 choices[65][1] = "Si, como obra literaria.";
 choices[65][2] = "Como obra literaria, pero s&oacute;lo si tienen suficiente calidad artistica.";
 choices[65][3] = "Si, como parte integrante del concepto &quot;programa de ordenador&quot;.";
 answers[65] = choices[65][3];
 units[65] = "36";
 comments[65] = "Id Pregunta: 9094. ";


//  Id pregunta: 9170 AÃ±o de creación de pregunta: 2013-01-01
 questions[66]= "67)  Se&ntilde;ale cu&aacute;l de los siguientes no es un bloque de primer nivel en una factura en formato Facturae;";
 choices[66]= new Array();
 choices[66][0] = "Datos del emisor";
 choices[66][1] = "Detalle de la factura";
 choices[66][2] = "Importe de la factura";
 choices[66][3] = "Datos de la firma electr&oacute;nica ";
 answers[66] = choices[66][2];
 units[66] = "70";
 comments[66] = "Id Pregunta: 9170. ";


//  Id pregunta: 9240 AÃ±o de creación de pregunta: 2013-01-01
 questions[67]= "68)  &iquest;Qu&eacute; caracter&iacute;sticas tiene Ubuntu?";
 choices[67]= new Array();
 choices[67][0] = "Se orienta al usuario novel y promedio.";
 choices[67][1] = "Tiene un fuerte enfoque en la facilidad de uso";
 choices[67][2] = "Su patrocinador es Canonical.";
 choices[67][3] = "Todas son correctas.";
 answers[67] = choices[67][3];
 units[67] = "53";
 comments[67] = "Id Pregunta: 9240. ";


//  Id pregunta: 9269 AÃ±o de creación de pregunta: 2013-01-01
 questions[68]= "69)  Los dispositivos f&iacute;sicos que se utilizan para conectar servidores a trav&eacute;s de una red t&iacute;picamente de fibra con sus dispositivos de almacenamiento, se llaman:";
 choices[68]= new Array();
 choices[68][0] = "LUN";
 choices[68][1] = "ESX";
 choices[68][2] = "HBA";
 choices[68][3] = "IDS";
 answers[68] = choices[68][2];
 units[68] = "48";
 comments[68] = "Id Pregunta: 9269. Examen TICA2-2011";


//  Id pregunta: 9317 AÃ±o de creación de pregunta: 2013-01-01
 questions[69]= "70)  Se&ntilde;ale la falsa";
 choices[69]= new Array();
 choices[69][0] = "La auditor&iacute;a requiere una planificaci&oacute;n a tres niveles: qu&eacute;, cu&aacute;ndo y c&oacute;mo auditar";
 choices[69][1] = "Si el &aacute;rea ya ha sido auditada con anterioridad debe revisarse la documentaci&oacute;n previa";
 choices[69][2] = "Aunque el &aacute;rea ya haya sido auditada con anterioridad es necesario realizar la auditor&iacute;a al completo sin tener en cuenta la documentaci&oacute;n previa pues &eacute;sta puede no ser ya consistente con la situaci&oacute;n actual";
 choices[69][3] = "Una de las ventajas del uso de herramientas de auditor&iacute;a inform&aacute;tica es la disminuci&oacute;n del riesgo propio del proceso de auditor&iacute;a en la recolecci&oacute;n de datos y la mayor independencia";
 answers[69] = choices[69][2];
 units[69] = "31";
 comments[69] = "Id Pregunta: 9317. ";


//  Id pregunta: 9369 AÃ±o de creación de pregunta: 2013-01-01
 questions[70]= "71)  Ante situaciones de congesti&oacute;n, Resilient Packet Ring:";
 choices[70]= new Array();
 choices[70][0] = "Reacciona descartando paquetes.";
 choices[70][1] = "Utiliza el algoritmo Fairness, que sirve para los servicios de clase A1, B-CIR, B-EIR y C; y que limita el tr&aacute;fico en la red, asign&aacute;ndose diferentes rangos de velocidad a los clientes en base a la cantidad de ancho de banda disponible en el anillo y que se puede reutilizar de las diferentes clases.";
 choices[70][2] = "Utiliza el algoritmo Fairness, que sirve para todos los tipos de tr&aacute;fico y que limita el tr&aacute;fico en la red, asign&aacute;ndose diferentes rangos de velocidad a los clientes en base a la cantidad de ancho de banda disponible en el anillo.";
 choices[70][3] = "No tiene control de congesti&oacute;n.";
 answers[70] = choices[70][1];
 units[70] = "101";
 comments[70] = "Id Pregunta: 9369. ";


//  Id pregunta: 9397 AÃ±o de creación de pregunta: 2013-01-01
 questions[71]= "72)  MOS (&quot;Mean Opinion Score&quot;) es un &iacute;ndice subjetivo que sirve para medir la calidad de la voz. Su rango de valores est&aacute; entre 1 y 5. Si toma el valor 4, significa:";
 choices[71]= new Array();
 choices[71][0] = "La calidad es equiparable a una conversi&oacute;n cara a cara o escuchar la radio. ";
 choices[71][1] = "Apenas se entiende nada.";
 choices[71][2] = "Se perciben imperfecciones pero el sonido es claro";
 choices[71][3] = "Se requiere un esfuerzo considerable para seguir la comunicaci&oacute;n.";
 answers[71] = choices[71][2];
 units[71] = "109";
 comments[71] = "Id Pregunta: 9397. TIC AGE A2 2011 libre";


//  Id pregunta: 9607 AÃ±o de creación de pregunta: 2014-01-01
 questions[72]= "73)  &iquest;C&uacute;al de las siguientes caracter&iacute;sticas es propia de los sistemas de base de datos NoSQL?";
 choices[72]= new Array();
 choices[72][0] = "Soportan operaciones JOIN";
 choices[72][1] = " Garantizan completamente ACID";
 choices[72][2] = "Requieren estructuras fijas, como tablas";
 choices[72][3] = "Escalan bien horizontalmente";
 answers[72] = choices[72][3];
 units[72] = "58";
 comments[72] = "Id Pregunta: 9607. ";


//  Id pregunta: 9668 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes categor&iacute;as de la taxonom&iacute;a de Flynn se corresponden con una arquitectura monoprocesador?";
 choices[73]= new Array();
 choices[73][0] = "MISD y SISD";
 choices[73][1] = "SIMD y SISD";
 choices[73][2] = "MIMD y MISD";
 choices[73][3] = "SISD y MISD";
 answers[73] = choices[73][1];
 units[73] = "45";
 comments[73] = "Id Pregunta: 9668. ";


//  Id pregunta: 9741 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  &iquest;Qu&eacute; significa CDI en el contexto de Java EE 7?";
 choices[74]= new Array();
 choices[74][0] = "Contexts and Dependency Injection.";
 choices[74][1] = "Common Display Interface.";
 choices[74][2] = "Context-Dependent Interface.";
 choices[74][3] = "Case-Driven Implementation.";
 answers[74] = choices[74][0];
 units[74] = "60";
 comments[74] = "Id Pregunta: 9741. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9742 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  Con respecto al Entity Framework &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[75]= new Array();
 choices[75][0] = "Para usar Entity framework se requiere una versi&oacute;n del framework de .Net de 2.0, o superior.";
 choices[75][1] = "Entity framework es la implementaci&oacute;n del Modelo Vista Controlador (MVC) en .NET.";
 choices[75][2] = "El contexto en el Entity Framework es el punto de arranque dentro del espacio de nombres.";
 choices[75][3] = "Entity es una clase u objeto que representa los datos de la aplicaci&oacute;n.";
 answers[75] = choices[75][3];
 units[75] = "59";
 comments[75] = "Id Pregunta: 9742. Examen TIC-A2 2013-Libre";


//  Id pregunta: 10033 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  De las siguientes cabeceras IPv6 (RFC 2460), &iquest;cu&aacute;l de las siguientes cabeceras NO es de extensi&oacute;n?";
 choices[76]= new Array();
 choices[76][0] = "Fragmentacion. ";
 choices[76][1] = "Opciones de salto a salto.";
 choices[76][2] = "Autenticaci&oacute;n. ";
 choices[76][3] = "L&iacute;mite de saltos.";
 answers[76] = choices[76][3];
 units[76] = "100";
 comments[76] = "Id Pregunta: 10033. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10068 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  Entre los tipos de modulaci&oacute;n en las tecnolog&iacute;as xDSL se encuentra:";
 choices[77]= new Array();
 choices[77][0] = "SDH (Synchronous Digital Hierarchy).";
 choices[77][1] = "SGL (Splitterless G. Lite).";
 choices[77][2] = "SHDSL (Single-pair High-speed Digital Subscriber Line).";
 choices[77][3] = "CAP (Carrierless Amplitude Phase).";
 answers[77] = choices[77][3];
 units[77] = "107";
 comments[77] = "Id Pregunta: 10068. TIC A2, libre, Examen 2013";


//  Id pregunta: 10092 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  &iquest;Cu&aacute;l es el orden cronol&oacute;gico m&aacute;s acertado?";
 choices[78]= new Array();
 choices[78][0] = "BPM, SOA, EAI, ESB";
 choices[78][1] = "EAI, BPM, SOA, ESB";
 choices[78][2] = "EAI, SOA, BPM, ESB";
 choices[78][3] = "BPM, EAI, SOA, ESB";
 answers[78] = choices[78][1];
 units[78] = "79";
 comments[78] = "Id Pregunta: 10092. NULL";


//  Id pregunta: 10206 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  &iquest;Cual de las siguientes afirmaciones es correcta respecto a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles?";
 choices[79]= new Array();
 choices[79][0] = "Es compatible con las redes IEEE 802.16e";
 choices[79][1] = "Usa una nueva interfaz aire basada en OFDMA (Orthogonal Frequency Division Multiple Access) en vez de WCDMA (Wideband Code Division Multiple Access)";
 choices[79][2] = "Desaparecen los hard handovers y solo existen soft handovers";
 choices[79][3] = "En la arquitectura se introduce un nuevo elemento llamado MME (Mobility Management Entity) basado en la antigua HLR y AuC";
 answers[79] = choices[79][1];
 units[79] = "108";
 comments[79] = "Id Pregunta: 10206. 4G busca la convergencia con WiMax en el est&aacute;ndar 802.16m. Desaparecen los soft handovers y solo existen hard handovers al desaparecer los RNC e incorporarse a los eNode B. El nuevo elemento basado en la antigua HLR y AuC es HSS (Home Subscriber Server), ";


//  Id pregunta: 10233 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  &iquest;En que casos una sesi&oacute;n ser&aacute; invalidada?:";
 choices[80]= new Array();
 choices[80][0] = "No se recibe una petici&oacute;n del cliente superado el plazo de session timeout";
 choices[80][1] = "El cliente envia una petici&oacute;n KILL_SESSION";
 choices[80][2] = "El contenedor de servlets invalida una sesi&oacute;n por sobrecarga en el servidor";
 choices[80][3] = "El usuario cierra la ventana del navegador";
 answers[80] = choices[80][0];
 units[80] = "116";
 comments[80] = "Id Pregunta: 10233. NULL";


//  Id pregunta: 10258 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  En caso de solicitarse la rectificaci&oacute;n de unos datos de car&aacute;cter personal a un responsable del tratamiento que haya realizado una cesi&oacute;n de dichos datos a un tercero";
 choices[81]= new Array();
 choices[81][0] = "No pueden rectificarse datos de car&aacute;cter personal que hayan sido objeto de cesi&oacute;n a terceros";
 choices[81][1] = "El responsable deber&aacute; contestar al interesado y proceder a la rectificaci&oacute;n, no siendo necesario que comunique la misma al cesionario";
 choices[81][2] = "El responsable deber&aacute; contestar al interesado,  proceder a la rectificaci&oacute;n y comunicarla al cesionario para que tambi&eacute;n la realice. El cesionario contestar&aacute; tambi&eacute;n al interesado";
 choices[81][3] = "El responsable deber&aacute; contestar al interesado,  proceder a la rectificaci&oacute;n y comunicarla al cesionario para que tambi&eacute;n la realice. El cesionario no tiene obligaci&oacute;n de contestar al interesado";
 answers[81] = choices[81][3];
 units[81] = "29";
 comments[81] = "Id Pregunta: 10258. Art&iacute;culo 32.3 del RD 1720/2007";


//  Id pregunta: 10458 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  &iquest;Cu&aacute;l no es una novedad de HTML 5? ";
 choices[82]= new Array();
 choices[82][0] = "Application Cache";
 choices[82][1] = "Elementos sem&aacute;nticos.";
 choices[82][2] = "Web workers";
 choices[82][3] = "Elementos de desarrollo para plataformas m&oacute;viles.";
 answers[82] = choices[82][3];
 units[82] = "69";
 comments[82] = "Id Pregunta: 10458. NULL";


//  Id pregunta: 10505 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  &iquest;Cual de las siguientes normas se refiere a la Compatibilidad Electromagnetica?";
 choices[83]= new Array();
 choices[83][0] = "Real Decreto 158/2006";
 choices[83][1] = "Directiva 2004/108/CE";
 choices[83][2] = "Directiva 2006/123/CE";
 choices[83][3] = "Ninguna de las anteriores";
 answers[83] = choices[83][1];
 units[83] = "99";
 comments[83] = "Id Pregunta: 10505. El RD es el Real Decreto 1580/2006 y la directiva 2006/123 es la de servicios";


//  Id pregunta: 10563 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Los controles correctivos tienen como objeto:";
 choices[84]= new Array();
 choices[84][0] = "reducir el riesgo ante una debilidad existente";
 choices[84][1] = "Predecir problemas potenciales antes de que ocurran";
 choices[84][2] = "Solucionar problemas detectados por controles detectivos";
 choices[84][3] = "Reportar errores";
 answers[84] = choices[84][2];
 units[84] = "31, 32, 33";
 comments[84] = "Id Pregunta: 10563. ";


//  Id pregunta: 10680 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  En qu&eacute; T&iacute;tulo de la Ley 39/2015 se recogen los &quot;Derechos de las personas en sus relaciones con las Administraciones P&uacute;blicas.&quot;";
 choices[85]= new Array();
 choices[85][0] = "T&iacute;tulo I";
 choices[85][1] = "T&iacute;tulo II";
 choices[85][2] = "T&iacute;tulo III";
 choices[85][3] = "T&iacute;tulo IV";
 answers[85] = choices[85][1];
 units[85] = "30";
 comments[85] = "Id Pregunta: 10680. ";


//  Id pregunta: 10688 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  La Comisi&oacute;n para la Reforma de las Administraciones P&uacute;blicas present&oacute; su informe en:";
 choices[86]= new Array();
 choices[86][0] = "Enero de 2013.";
 choices[86][1] = "Junio de 2013.";
 choices[86][2] = "Diciembre de 2013.";
 choices[86][3] = "Enero de 2014.";
 answers[86] = choices[86][1];
 units[86] = "30";
 comments[86] = "Id Pregunta: 10688. ";


//  Id pregunta: 10865 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  De las estrategias de dise&ntilde;o propuestas por M&eacute;trica v3 para obtener el diagrama de estructura &iquest;en qu&eacute; se diferencian el an&aacute;lisis de transformaci&oacute;n y el an&aacute;lisis de transacci&oacute;n?";
 choices[87]= new Array();
 choices[87][0] = "No existe ninguna diferencia, ambas son estrategias de dise&ntilde;o que se aplican a los DFD.";
 choices[87][1] = "El an&aacute;lisis de transformaci&oacute;n se aplica cuando el DFD realiza modificaciones independientemente de la entrada y la salida, mientras que el an&aacute;lisis de transacci&oacute;n se aplica cuando en un DFD en funci&oacute;n del flujo de llegada se realiza la elecci&oacute;n de uno o m&aacute;s flujos de informaci&oacute;n.";
 choices[87][2] = "El an&aacute;lisis de transacci&oacute;n se aplica cuando el DFD realiza modificaciones independientemente de la entrada y la salida, mientras que el an&aacute;lisis de transformaci&oacute;n se aplica a los DFD cuando en funci&oacute;n del flujo de llegada se realiza la elecci&oacute;n de uno o m&aacute;s flujos de informaci&oacute;n.";
 choices[87][3] = "El an&aacute;lisis de transacci&oacute;n se centra en los resultados del diagrama mientras que el an&aacute;lisis de transformaci&oacute;n se centra en c&oacute;mo se realizan dichos cambios.";
 answers[87] = choices[87][1];
 units[87] = "86, 81, 82";
 comments[87] = "Id Pregunta: 10865. Examen GSI 2014";


//  Id pregunta: 10975 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Seg&uacute;n la metodolog&iacute;a M&eacute;trica 3, el Plan de Sistemas de Informaci&oacute;n:";
 choices[88]= new Array();
 choices[88][0] = "Incluye la evaluaci&oacute;n de los recursos necesarios para los proyectos a desarrollar en los pr&oacute;ximos cinco a&ntilde;os, con el objetivo de tenerlos en cuenta en los presupuestos.";
 choices[88][1] = "La perspectiva del plan debe ser estrat&eacute;gica, operativa y tecnol&oacute;gica.";
 choices[88][2] = "El nivel de detalle con el que se har&aacute; el estudio de la situaci&oacute;n actual no depende de la existencia de documentaci&oacute;n.";
 choices[88][3] = "Para su elaboraci&oacute;n se estudian las necesidades de informaci&oacute;n de los procesos afectados con el fin de definir requisitos generales y obtener modelos conceptuales de informaci&oacute;n.";
 answers[88] = choices[88][3];
 units[88] = "86";
 comments[88] = "Id Pregunta: 10975. TIC A1 AGE 2014";


//  Id pregunta: 11066 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;Cuales de las siguientes afirmaciones, son caracter&iacute;sticas para cada proceso?";
 choices[89]= new Array();
 choices[89][0] = "Medible, puntual, entrega un resultado y responde a un evento espec&iacute;fico";
 choices[89][1] = "Medible, puntual, responde a un evento espec&iacute;fico y ofrece su principal resultado a un cliente o parte interesada";
 choices[89][2] = "Medible, entrega un resultado, responde a un evento espec&iacute;fico y ofrece su principal resultado a un cliente o parte interesada";
 choices[89][3] = "Medible, puntual, entrega un resultado, responde a un evento espec&iacute;fico y ofrece su principal resultado a un cliente o parte interesada";
 answers[89] = choices[89][2];
 units[89] = "98";
 comments[89] = "Id Pregunta: 11066. ";


//  Id pregunta: 11187 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l de los siguientes ataques se basa en la suplantaci&oacute;n de identidad mediante t&eacute;cnicas de ingenier&iacute;a social?";
 choices[90]= new Array();
 choices[90][0] = "Phishing";
 choices[90][1] = "Man in the middle";
 choices[90][2] = "Eavesdropping";
 choices[90][3] = "Sniffing";
 answers[90] = choices[90][0];
 units[90] = "111";
 comments[90] = "Id Pregunta: 11187. ";


//  Id pregunta: 11281 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Qu&eacute; es un servicio WPS?";
 choices[91]= new Array();
 choices[91][0] = "Un servicio de descarga de datos vectoriales";
 choices[91][1] = "Un servicio de visualizaci&oacute;n de coberturas r&aacute;ster";
 choices[91][2] = "Un servicio de transformaci&oacute;n";
 choices[91][3] = "No es un tipo de servicio";
 answers[91] = choices[91][2];
 units[91] = "67";
 comments[91] = "Id Pregunta: 11281. ";


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


//  Id pregunta: 11389 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes actividades asegura y desempe&ntilde;a la Gesti&oacute;n de Configuraci&oacute;n y Activos del Servicio?: 1. Identificar los elementos de configuraci&oacute;n (CI); 2. Que los CIs tengan una l&iacute;nea base; 3. Controlar los cambios en los CIs";
 choices[93]= new Array();
 choices[93][0] = "Todos";
 choices[93][1] = "Solo 1 y 2";
 choices[93][2] = "Solo 3";
 choices[93][3] = "Solo 2 y 3";
 answers[93] = choices[93][0];
 units[93] = "98";
 comments[93] = "Id Pregunta: 11389. ";


//  Id pregunta: 11470 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  La ley 9/2014 establece el derecho al cambio de operador, con conservaci&oacute;n de los n&uacute;meros, en un plazo de:";
 choices[94]= new Array();
 choices[94][0] = "Un d&iacute;a natural.";
 choices[94][1] = "Un d&iacute;a laborable.";
 choices[94][2] = "Una semana.";
 choices[94][3] = "Depende del operador.";
 answers[94] = choices[94][1];
 units[94] = "110";
 comments[94] = "Id Pregunta: 11470. ";


//  Id pregunta: 11471 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Seg&uacute;n la Ley 9/2014, &iquest;qui&eacute;n establece las condiciones para la habilitaci&oacute;n del ejercicio de los derechos de uso del dominio p&uacute;blico radioel&eacute;ctrico?:";
 choices[95]= new Array();
 choices[95][0] = "MINETUR.";
 choices[95][1] = "CNMC.";
 choices[95][2] = "El Gobierno.";
 choices[95][3] = "La SETSI.";
 answers[95] = choices[95][2];
 units[95] = "110";
 comments[95] = "Id Pregunta: 11471. ";


//  Id pregunta: 11684 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Cuando un switch recibe una trama y no posee la direcci&oacute;n de destino, el switch:";
 choices[96]= new Array();
 choices[96][0] = "env&iacute;a la trama por todos los puertos";
 choices[96][1] = "env&iacute;a un ARP para obtener la direcci&oacute;n de destino de la trama";
 choices[96][2] = "reenv&iacute;a la trama por todos los puertos, excepto por el que fue recibido";
 choices[96][3] = "descarta la trama";
 answers[96] = choices[96][2];
 units[96] = "100";
 comments[96] = "Id Pregunta: 11684. NULL";


//  Id pregunta: 11716 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cuantos mensajes se intercambian durante el proceso de terminaci&oacute;n de la sesi&oacute;n TCP entre el cliente y el servidor?";
 choices[97]= new Array();
 choices[97][0] = "2";
 choices[97][1] = "4";
 choices[97][2] = "6";
 choices[97][3] = "8";
 answers[97] = choices[97][1];
 units[97] = "102";
 comments[97] = "Id Pregunta: 11716. NULL";


//  Id pregunta: 11721 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Qu&eacute; comando se puede utilizar en un PC con S.O. Windows para obtener la configuraci&oacute;n IP de ese equipo?";
 choices[98]= new Array();
 choices[98][0] = "ifconfig -a";
 choices[98][1] = "netstat -rn";
 choices[98][2] = "iptables -L";
 choices[98][3] = "ipconfig";
 answers[98] = choices[98][3];
 units[98] = "102";
 comments[98] = "Id Pregunta: 11721. NULL";


//  Id pregunta: 11776 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Qu&eacute; consecuencias tiene la declaraci&oacute;n judicial de existencia de cesi&oacute;n ilegal de trabajadores, en caso de que un trabajador de una empresa externa demande judicialmente y obtenga un pronunciamiento en tal sentido?";
 choices[99]= new Array();
 choices[99][0] = "La declaraci&oacute;n de cesi&oacute;n ilegal de trabajadores produce autom&aacute;ticamente la incorporaci&oacute;n del trabajador demandante a la plantilla de la Administraci&oacute;n, como trabajador fijo,&nbsp; manteniendo las condiciones laborales que ten&iacute;a reconocida con la empresa contratista";
 choices[99][1] = "La declaraci&oacute;n de cesi&oacute;n ilegal de trabajadores no produce efectos sobre la relaci&oacute;n laboral entre el trabajador que demande y la empresa contratista, sin perjuicio de las responsabilidades disciplinarias y en su caso penales del funcionario responsable de la irregularidad";
 choices[99][2] = "El trabajador podr&aacute; optar por incorporarse a la plantilla de la Administraci&oacute;n, como trabajador indefinido no fijo, y podr&aacute;n derivarse responsabilidades disciplinarias y penales contra el funcionario responsable de la irregularidad, entre otras posibles consecuencias&nbsp;";
 choices[99][3] = "El trabajador continuar&aacute; prestando servicios en la empresa contratista, si bien tendr&aacute; las mismas condiciones, econ&oacute;micas y de horario, mientras dure la contrata con la Administraci&oacute;n, que el funcionario responsable del servicio externalizado";
 answers[99] = choices[99][2];
 units[99] = "41";
 comments[99] = "Id Pregunta: 11776. ";


