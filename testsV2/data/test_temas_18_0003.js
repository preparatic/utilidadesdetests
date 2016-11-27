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

//  Id pregunta: 697 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes afirmaciones no es correcta?";
 choices[0]= new Array();
 choices[0][0] = "El elemento b&aacute;sico para la programaci&oacute;n concurrente en Java son los &quot;threads&quot;";
 choices[0][1] = "Java permite la herencia m&uacute;ltiple de clases";
 choices[0][2] = "El modelo de punteros de Java elimina la posibilidad de transformar un entero en un puntero";
 choices[0][3] = "La variable &quot;this&quot; de una clase Java hace referencia a la propia instancia de la clase sobre la que se est&aacute; ejecutando el c&oacute;digo actual";
 answers[0] = choices[0][1];
 units[0] = "60";
 comments[0] = "Id Pregunta: 697. JCED - Preparatic XVII";


//  Id pregunta: 716 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  En el lenguaje Java, la misi&oacute;n del recolector de basura (garbage collector) es:";
 choices[1]= new Array();
 choices[1][0] = "Limpiar o eliminar los objetos no usados o referenciados";
 choices[1][1] = "En los que en otros entornos de programcaci&oacute;n se llama depurador o debugger";
 choices[1][2] = "Es parte del estandar JDBC para acceder a tablas de bases de datos";
 choices[1][3] = "Java no dispone de tal mecanismo &quot;garbage collector&quot;";
 answers[1] = choices[1][0];
 units[1] = "60";
 comments[1] = "Id Pregunta: 716. Examen TIC MAP B 2004";


//  Id pregunta: 760 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  En tecnolog&iacute;a microsoft, para trabajar con bases de datos,utilizaremos";
 choices[2]= new Array();
 choices[2][0] = "ODBC";
 choices[2][1] = "ADO";
 choices[2][2] = "OLE DB";
 choices[2][3] = "Cualquiera de los anteriores";
 answers[2] = choices[2][3];
 units[2] = "59";
 comments[2] = "Id Pregunta: 760. ";


//  Id pregunta: 1101 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  En Java, cuando un programa deja de utilizar un objeto:";
 choices[3]= new Array();
 choices[3][0] = "El &quot;garbage collector&quot; lo elimina inmediatamente de la memoria";
 choices[3][1] = "Es necesario codificar la destrucci&oacute;n del objeto";
 choices[3][2] = "El objeto se destruye a s&iacute; mismo";
 choices[3][3] = "Ninguna de las anteriores";
 answers[3] = choices[3][3];
 units[3] = "60";
 comments[3] = "Id Pregunta: 1101. JCED - Preparatic XVII. El obj puede eliminarse cuando no hay referencias a &eacute;l.";


//  Id pregunta: 1103 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  En Java, al declarar una variable de tipo array";
 choices[4]= new Array();
 choices[4][0] = "No es necesario indicar la longitud del objeto";
 choices[4][1] = "Es necesario indicar la longitud m&aacute;xima del objeto";
 choices[4][2] = "Es necesario indicar la longitud exacta del objeto";
 choices[4][3] = "Ninguna de las anteriores";
 answers[4] = choices[4][0];
 units[4] = "60";
 comments[4] = "Id Pregunta: 1103. JCED - Preparatic XVII. Solo se debe indicar la long max de cada dimensi&oacute;n del array si no se asigna en ese momento.";


//  Id pregunta: 1192 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Indique cu&aacute;l es una ventaja de los applets sobre los scripts:";
 choices[5]= new Array();
 choices[5][0] = "El c&oacute;digo fuente de los applets no es visible";
 choices[5][1] = "Un applet descarga en una sola conexi&oacute;n todos los componentes necesarios";
 choices[5][2] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son verdaderas";
 choices[5][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son falsas";
 answers[5] = choices[5][2];
 units[5] = "116";
 comments[5] = "Id Pregunta: 1192. ";


//  Id pregunta: 1519 AÃ±o de creación de pregunta: 2003-01-01
 questions[6]= "7)  Caracter&iacute;stica falsa de los archivos .jar";
 choices[6]= new Array();
 choices[6][0] = "Es un acr&oacute;nimo de Java ARchives";
 choices[6][1] = " Puede incluir un subdirectorio META-INF";
 choices[6][2] = " Puede incluir un fichero MANIFEST.MF";
 choices[6][3] = "Puede incluir clases e im&aacute;genes pero no sonidos ";
 answers[6] = choices[6][3];
 units[6] = "60";
 comments[6] = "Id Pregunta: 1519. NULL";


//  Id pregunta: 1584 AÃ±o de creación de pregunta: 2003-01-01
 questions[7]= "8)  En el contexto del modelo de componentes software basados en Java, &iquest;qu&eacute; es un contenedor?:";
 choices[7]= new Array();
 choices[7][0] = "Un proceso donde se ejecutan los componentes Java.";
 choices[7][1] = "Una biblioteca de clases Java.";
 choices[7][2] = "Una interfaz de usuario.";
 choices[7][3] = "Un fichero XML que describe los componentes de aplicaci&oacute;n.";
 answers[7] = choices[7][0];
 units[7] = "60";
 comments[7] = "Id Pregunta: 1584. Junta Andaluc&iacute;a";


//  Id pregunta: 1631 AÃ±o de creación de pregunta: 2003-01-01
 questions[8]= "9)  Un debugger (depurador) de programas :";
 choices[8]= new Array();
 choices[8][0] = "Ensambla los distintos m&oacute;dulos de SW";
 choices[8][1] = "Ayuda a los programadores a localizar errores de programaci&oacute;n";
 choices[8][2] = "Escanea los archivos ejecutables para detectar virus";
 choices[8][3] = "Permite crear un CPU virtual donde ejercer las pruebas de Sw minimizando la penalizaci&oacute;n de rendimientos en la instalaci&oacute;n principal";
 answers[8] = choices[8][1];
 units[8] = "59";
 comments[8] = "Id Pregunta: 1631. ";


//  Id pregunta: 1679 AÃ±o de creación de pregunta: 2004-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes NO es una caracter&iacute;stica de un archivo JAR?";
 choices[9]= new Array();
 choices[9][0] = "Fichero que re&uacute;ne clases, im&aacute;genes, sonidos y otros ficheros necesarios para la ejecuci&oacute;n";
 choices[9][1] = "Es dependiente de la plataforma";
 choices[9][2] = "Empaqueta ficheros y los comprime con el algoritmo LZW";
 choices[9][3] = "JAR es el acr&oacute;nimo de Java ARchive";
 answers[9] = choices[9][1];
 units[9] = "60";
 comments[9] = "Id Pregunta: 1679. JCED - Preparatic XVII";


//  Id pregunta: 1762 AÃ±o de creación de pregunta: 2006-01-01
 questions[10]= "11)  Se&ntilde;alar la afirmaci&oacute;n FALSA sobre los APPLETS de Java";
 choices[10]= new Array();
 choices[10][0] = "Programa Java que proporciona funcionalidad avanzada a una p&aacute;gina web";
 choices[10][1] = "S&oacute;lo utiliza recursos del cliente, no interviene nada el servidor.";
 choices[10][2] = "No puede leer o escribir ficheros en la m&aacute;quina local en la que se ejecute";
 choices[10][3] = "Todas las afirmaciones anteriores son verdaderas";
 answers[10] = choices[10][3];
 units[10] = "60";
 comments[10] = "Id Pregunta: 1762. B es falsa. Usa recursos del servidor para descargar el propio Applet y, en su caso, hacer consultas.";


//  Id pregunta: 1767 AÃ±o de creación de pregunta: 2006-01-01
 questions[11]= "12)  En Java a una colecci&oacute;n de clases relacionadas se denomina:";
 choices[11]= new Array();
 choices[11][0] = "Superset o superconjunto.";
 choices[11][1] = "Package o paquete.";
 choices[11][2] = "Superclass o Superclase.";
 choices[11][3] = "Colection o Colecci&oacute;n.";
 answers[11] = choices[11][1];
 units[11] = "60";
 comments[11] = "Id Pregunta: 1767. NULL";


//  Id pregunta: 1769 AÃ±o de creación de pregunta: 2006-01-01
 questions[12]= "13)  Los applets de JAVA:";
 choices[12]= new Array();
 choices[12][0] = "Se puede incluir en una p&aacute;gina HTML de forma mediante una etiqueta especial &lt;add_applet&gt;";
 choices[12][1] = "Un applet nunca puede hacer conexiones a la m&aacute;quina de la que se descarg&oacute;.";
 choices[12][2] = "El navegador invoca el m&eacute;todo init() sobre un applet cada vez que se va a mostrar la p&aacute;gina que contiene &eacute;ste.";
 choices[12][3] = "Para firmar un applet se tiene que crear un fichero de archivo JAR con las clases que componen el applet, un fichero de metainformaci&oacute;n y el fichero de firma.";
 answers[12] = choices[12][3];
 units[12] = "60";
 comments[12] = "Id Pregunta: 1769. NULL";


//  Id pregunta: 1770 AÃ±o de creación de pregunta: 2006-01-01
 questions[13]= "14)  Respecto a los drivers utilizados en JDBC";
 choices[13]= new Array();
 choices[13][0] = "El driver de tipo 1 utiliza c&oacute;digo Java para hacer llamadas a una API nativa que debe estar en la m&aacute;quina que accede a la base de datos.";
 choices[13][1] = "El driver de tipo III no requiere ninguna instalaci&oacute;n adicional en la m&aacute;quina cliente, pero obliga a la existencia del middleware.";
 choices[13][2] = "La ventaja del driver tipo II es que da acceso a pr&aacute;cticamente todos los sistemas de gesti&oacute;n de base de datos del mercado";
 choices[13][3] = "todas son falsas";
 answers[13] = choices[13][1];
 units[13] = "60";
 comments[13] = "Id Pregunta: 1770. NULL";


//  Id pregunta: 1771 AÃ±o de creación de pregunta: 2006-01-01
 questions[14]= "15)  Respecto a JNI";
 choices[14]= new Array();
 choices[14][0] = "Se sigue conservando la portabilidad universal";
 choices[14][1] = "Es la interfaz est&aacute;ndar de programaci&oacute;n para llamar a m&eacute;todos nativos escritos en otros lenguajes como C o C++.";
 choices[14][2] = " permite utilizar clases java desde aplicaciones nativas.";
 choices[14][3] = "B y C son correctas";
 answers[14] = choices[14][3];
 units[14] = "60";
 comments[14] = "Id Pregunta: 1771. NULL";


//  Id pregunta: 1917 AÃ±o de creación de pregunta: 2006-01-01
 questions[15]= "16)  La palabra clave de Visual Basic.NET &quot;overrides&quot; se utiliza para:";
 choices[15]= new Array();
 choices[15][0] = "Heredar todos los miembros no privados de la clase base";
 choices[15][1] = "Especificar qu&eacute; clase no se puede utilizar como clase base";
 choices[15][2] = "Indicar que el procedimiento reemplaza un procedimiento de la clase base";
 choices[15][3] = "Invocar c&oacute;digo escrito en una clase desde la propia clase";
 answers[15] = choices[15][2];
 units[15] = "59";
 comments[15] = "Id Pregunta: 1917. ";


//  Id pregunta: 2929 AÃ±o de creación de pregunta: 2004-01-01
 questions[16]= "17)  La tecnolog&iacute;a DCOM toma las siglas de:";
 choices[16]= new Array();
 choices[16][0] = "Distributed Communication Model";
 choices[16][1] = "Development of Concurrent Multisystems";
 choices[16][2] = "Dynamic Component-Oriented Measure";
 choices[16][3] = "Distributed Component Object Model";
 answers[16] = choices[16][3];
 units[16] = "114";
 comments[16] = "Id Pregunta: 2929. ";


//  Id pregunta: 3028 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  &iquest;Qu&eacute; son dentro del entorno de aplicaciones basadas en arquitectura Internet los plug-ins?:";
 choices[17]= new Array();
 choices[17][0] = "Programas que desarrolla el usuario para personalizar el acceso a la informaci&oacute;n del servidor";
 choices[17][1] = "Programas que se agregan al navegador e interact&uacute;an con &eacute;l, con las p&aacute;ginas web y con los recursos locales";
 choices[17][2] = "Posibilidad de a&ntilde;adir nuevo hardware a trav&eacute;s del navegador de manera autom&aacute;tica";
 choices[17][3] = "Ninguna de las anteriores";
 answers[17] = choices[17][1];
 units[17] = "114";
 comments[17] = "Id Pregunta: 3028. ";


//  Id pregunta: 3031 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  ASP significa:";
 choices[18]= new Array();
 choices[18][0] = "Application Service Provider";
 choices[18][1] = "Active Server Pages";
 choices[18][2] = "Las 2 respuestas anteriores son correctas";
 choices[18][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[18] = choices[18][2];
 units[18] = "114";
 comments[18] = "Id Pregunta: 3031. ";


//  Id pregunta: 3039 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  &iquest;Cu&aacute;l de los siguientes objetos no es un objeto del modelo de objetos de ASP 3.0?:";
 choices[19]= new Array();
 choices[19][0] = "RESPONSE";
 choices[19][1] = "SESSION";
 choices[19][2] = "SERVER";
 choices[19][3] = "FORM";
 answers[19] = choices[19][3];
 units[19] = "115";
 comments[19] = "Id Pregunta: 3039. ";


//  Id pregunta: 3084 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Los web services:";
 choices[20]= new Array();
 choices[20][0] = "Permiten la ejecuci&oacute;n de procedimientos remotos y devoluci&oacute;n de los resultados a trav&eacute;s de redes ip, basandose en el protocolo HTTP";
 choices[20][1] = "Permiten a los usuarios devolver cualquier tipo de informaci&oacute;n con un navegador y el protocolo HTTP";
 choices[20][2] = "Son una mera especificaci&oacute;n y a&uacute;n no se han puesto en pr&aacute;ctica";
 choices[20][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[20] = choices[20][0];
 units[20] = "51";
 comments[20] = "Id Pregunta: 3084.  Nuevo tema: Arquitectura SOA";


//  Id pregunta: 3885 AÃ±o de creación de pregunta: 2003-01-01
 questions[21]= "22)  &iquest;Qu&eacute; es JavaScript?";
 choices[21]= new Array();
 choices[21][0] = "Un lenguaje de validaci&oacute;n de formularios en p&aacute;ginas Web";
 choices[21][1] = "Es una implementaci&oacute;n del ECMA 262";
 choices[21][2] = "Es un lenguaje Java reducido para Internet que sustituye a CGI ";
 choices[21][3] = "Es un lenguaje que soporta objetos y funciones, pero no clases de objetos ni herencias entre ellos";
 answers[21] = choices[21][3];
 units[21] = "114";
 comments[21] = "Id Pregunta: 3885. ";


//  Id pregunta: 3886 AÃ±o de creación de pregunta: 2003-01-01
 questions[22]= "23)  &iquest;Qu&eacute; es Javascript7:";
 choices[22]= new Array();
 choices[22][0] = " Un compilador de Java.";
 choices[22][1] = "Un generador de applets Java";
 choices[22][2] = " Un applet Java que se ejecuta de forma embebida desde un lenguaje de script.";
 choices[22][3] = "Un lenguaje de script basado en la sintaxis de Java.";
 answers[22] = choices[22][3];
 units[22] = "114";
 comments[22] = "Id Pregunta: 3886. Junta Andaluc&iacute;a";


//  Id pregunta: 3942 AÃ±o de creación de pregunta: 2003-01-01
 questions[23]= "24)  Con la API de Servlet con respecto a cookies se puede:";
 choices[23]= new Array();
 choices[23][0] = "S&oacute;lo se pueden leer cookies";
 choices[23][1] = "S&oacute;lo se pueden leer y especificar atributos de cookie pero no crear cookies";
 choices[23][2] = "Se pueden crear cookies";
 choices[23][3] = "S&oacute;lo se pueden situar los Cookies en las cabeceras de respuesta al cliente";
 answers[23] = choices[23][2];
 units[23] = "116";
 comments[23] = "Id Pregunta: 3942. Pregunta no perteneciente al test  del ex&aacute;men 2003 de SS (aunque en este ex&aacute;men hubo una pregunta de API de servlet)";


//  Id pregunta: 3956 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  La depuraci&oacute;n (debug) de resultados intermedios durante la ejecuci&oacute;n de trabajos java:";
 choices[24]= new Array();
 choices[24][0] = "S&oacute;lo se permite desde la m&aacute;quina donde se ejecuta";
 choices[24][1] = "No se permite la ejecuci&oacute;n de paradas intermedias";
 choices[24][2] = "Hay una arquitectura que incluye depuraci&oacute;n en remoto";
 choices[24][3] = "No tiene sentido la depuraci&oacute;n en remoto";
 answers[24] = choices[24][2];
 units[24] = "60";
 comments[24] = "Id Pregunta: 3956. NULL";


//  Id pregunta: 4093 AÃ±o de creación de pregunta: 2006-01-01
 questions[25]= "26)  Que es TRAM";
 choices[25]= new Array();
 choices[25][0] = "Una arquitectura web basada en software libre";
 choices[25][1] = "Una arquitectura web basada en j2ee";
 choices[25][2] = "Una arquitectura web basada en .Net";
 choices[25][3] = "Ninguna de las anteriores";
 answers[25] = choices[25][3];
 units[25] = "114,115, 116";
 comments[25] = "Id Pregunta: 4093. NULL";


//  Id pregunta: 4094 AÃ±o de creación de pregunta: 2006-01-01
 questions[26]= "27)  &iquest;En que se basa AJAX?";
 choices[26]= new Array();
 choices[26][0] = "En JavaScript";
 choices[26][1] = "En Java";
 choices[26][2] = "En JSP";
 choices[26][3] = "En JSF";
 answers[26] = choices[26][0];
 units[26] = "116";
 comments[26] = "Id Pregunta: 4094. ";


//  Id pregunta: 4104 AÃ±o de creación de pregunta: 2006-01-01
 questions[27]= "28)  Tim Berners-Lee lider&oacute; un equipo de f&iacute;sicos en el CERN que cre&oacute;:";
 choices[27]= new Array();
 choices[27][0] = "El lenguaje PHP en 1993";
 choices[27][1] = "El lenguaje HTML en 1989";
 choices[27][2] = "El lenguaje Perl en 1979";
 choices[27][3] = "El lenguaje HTML en 1991";
 answers[27] = choices[27][1];
 units[27] = "114";
 comments[27] = "Id Pregunta: 4104. ";


//  Id pregunta: 4211 AÃ±o de creación de pregunta: 2006-01-01
 questions[28]= "29)  Indique cu&aacute;l de las siguientes afirmaciones es cierta referida a la arquitectura de desarrollo  .NET";
 choices[28]= new Array();
 choices[28][0] = "Biz Talk Server no resulta adecuado si el proceso implica m&uacute;ltiples documentos y servicios";
 choices[28][1] = "En el dise&ntilde;o de la capa de datos se puede disponer de uno o m&aacute;s or&iacute;genes de datos de tipos diferentes";
 choices[28][2] = "Se facilita el mantenimiento de la aplicaci&oacute;n si los componentes l&oacute;gicos de acceso a datos invocan a otros componentes l&oacute;gicos de acceso a datos";
 choices[28][3] = "Los componentes de interfaz de usuario no pueden restringir los tipos de entrada de datos, ya que esto &uacute;nicamente se permite en la base de datos";
 answers[28] = choices[28][1];
 units[28] = "59,115";
 comments[28] = "Id Pregunta: 4211. ";


//  Id pregunta: 4213 AÃ±o de creación de pregunta: 2006-01-01
 questions[29]= "30)  En el formato gr&aacute;fico JPEG &iquest;Cu&aacute;l de estas opciones no es verdadera?";
 choices[29]= new Array();
 choices[29][0] = "Permite seleccionar la mayor o menor p&eacute;rdida de calidad en la compresi&oacute;n";
 choices[29][1] = "Usa el mismo algoritmo de compresi&oacute;n que el ZIP";
 choices[29][2] = "Su nombre oficial es ISO/IEC IS 10918";
 choices[29][3] = "La &uacute;ltima versi&oacute;n es JPEG 2000";
 answers[29] = choices[29][1];
 units[29] = "114";
 comments[29] = "Id Pregunta: 4213. ";


//  Id pregunta: 4214 AÃ±o de creación de pregunta: 2006-01-01
 questions[30]= "31)  En la arquitectura de desarrollo Web bajo Java es cierto que:";
 choices[30]= new Array();
 choices[30][0] = "Java 2 Micro Edition es el entorno de ejecuci&oacute;n est&aacute;ndar para Java";
 choices[30][1] = "Los Java 2 Enterprise Edition blueprints son los que permiten verificar la compatibilidad de una plataforma Java";
 choices[30][2] = "Los servlets son usados para pasar contenido din&aacute;mico al cliente a trav&eacute;s de http";
 choices[30][3] = "Los servlets http no heredan los m&eacute;todos doGet() y doPost() de la clase httpServlet";
 answers[30] = choices[30][2];
 units[30] = "116";
 comments[30] = "Id Pregunta: 4214. ";


//  Id pregunta: 4386 AÃ±o de creación de pregunta: 2007-01-01
 questions[31]= "32)  En el entorno .NET se han desarrollado una serie de lenguajes de programaci&oacute;n para que sean compatibles con el marco de trabajo .NET. &iquest;Cu&aacute;l de los siguientes no es uno de esos lenguajes?";
 choices[31]= new Array();
 choices[31][0] = "Java";
 choices[31][1] = "C#";
 choices[31][2] = "Visual Basic";
 choices[31][3] = "C++";
 answers[31] = choices[31][0];
 units[31] = "59";
 comments[31] = "Id Pregunta: 4386. ";


//  Id pregunta: 4533 AÃ±o de creación de pregunta: 2007-01-01
 questions[32]= "33)  En java, &iquest;como se hace referencia al objeto actual sobre el que ha sido Ilamado el m&eacute;todo que se esta ejecutando?";
 choices[32]= new Array();
 choices[32][0] = "Con Ia referencia this.";
 choices[32][1] = "Con la referencia null.";
 choices[32][2] = "No es posible.";
 choices[32][3] = "Invocando el m&eacute;todo get.";
 answers[32] = choices[32][0];
 units[32] = "60";
 comments[32] = "Id Pregunta: 4533. NULL";


//  Id pregunta: 4667 AÃ±o de creación de pregunta: 2007-01-01
 questions[33]= "34)  En el contexto de SOA, las siglas ESB son el acr&oacute;nimo de:";
 choices[33]= new Array();
 choices[33][0] = "Execution Service Base";
 choices[33][1] = "Execution Service Board";
 choices[33][2] = "Enterprise Service Bus";
 choices[33][3] = "Enterprise Service Board";
 answers[33] = choices[33][2];
 units[33] = "51";
 comments[33] = "Id Pregunta: 4667. NULL";


//  Id pregunta: 4846 AÃ±o de creación de pregunta: 2007-01-01
 questions[34]= "35)  &iquest;Cu&aacute;l de los siguientes NO es un formato v&aacute;lido para el empaquetamiento de aplicaciones en Java EE (Java Enterprise Edition)?";
 choices[34]= new Array();
 choices[34][0] = "WAR (Web Archive)";
 choices[34][1] = "EAR (Enterprise Archive)";
 choices[34][2] = "BAR (Bean Archive)";
 choices[34][3] = "JAR (Java Archive)";
 answers[34] = choices[34][2];
 units[34] = "60";
 comments[34] = "Id Pregunta: 4846. NULL";


//  Id pregunta: 4853 AÃ±o de creación de pregunta: 2007-01-01
 questions[35]= "36)  &iquest;Cu&aacute;l de las siguientes respuestas NO corresponde al modelo de compresi&oacute;n de im&aacute;genes JPEG (JointPhotographic Experts Group)?";
 choices[35]= new Array();
 choices[35][0] = "B&aacute;sico/secuencial";
 choices[35][1] = "Jer&aacute;rquico";
 choices[35][2] = "Progresivo";
 choices[35][3] = "Conjugado modificado";
 answers[35] = choices[35][3];
 units[35] = "114";
 comments[35] = "Id Pregunta: 4853. ";


//  Id pregunta: 4866 AÃ±o de creación de pregunta: 2007-01-01
 questions[36]= "37)  El atributo de posicionamiento de un applet &quot;absbottom&quot;:";
 choices[36]= new Array();
 choices[36][0] = "Coloca el applet en el margen izquierdo de la p&aacute;gina, y el texto que le siga se sit&uacute;a en el espacio situado asu derecha";
 choices[36][1] = "Coloca el applet en el margen derecho de la p&aacute;gina, y el texto que le siga se sit&uacute;a en el espacio situado a suizquierda";
 choices[36][2] = "Coloca la parte inferior del applet coincidiendo con el centro de la l&iacute;nea actual";
 choices[36][3] = "Coloca la parte superior del applet coincidiendo con la parte superior del texto en la l&iacute;nea actual";
 answers[36] = choices[36][2];
 units[36] = "116";
 comments[36] = "Id Pregunta: 4866. ";


//  Id pregunta: 5051 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  &iquest;Cu&aacute;l de los siguientes elementos no es utilizado por Java 2?:";
 choices[37]= new Array();
 choices[37][0] = "Enteros";
 choices[37][1] = "Booleanos";
 choices[37][2] = "Cadenas";
 choices[37][3] = "Tensores";
 answers[37] = choices[37][3];
 units[37] = "60";
 comments[37] = "Id Pregunta: 5051. Examen TIC A 2007";


//  Id pregunta: 5153 AÃ±o de creación de pregunta: 2003-01-01
 questions[38]= "39)  De los siguientes enunciados indique cu&aacute;l es FALSO:";
 choices[38]= new Array();
 choices[38][0] = "Los servlets JAVA permiten que la l&oacute;gica de apliaci&oacute;n sea integrada en el proceso de solicitudes y respuestas HTTP.";
 choices[38][1] = "Los servlets JAVA son programas peque&ntilde;os de lado servidor independientes de la plataforma.";
 choices[38][2] = "Los servlets JAVA ampl&iacute;an program&aacute;ticamente la funcionalidad del servidor Web.";
 choices[38][3] = "Los servlets JAVA son programas que ampl&iacute;an la funcionalidad del cliente Web y que dependen de la plataforma.";
 answers[38] = choices[38][3];
 units[38] = "116";
 comments[38] = "Id Pregunta: 5153. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5154 AÃ±o de creación de pregunta: 2003-01-01
 questions[39]= "40)  &iquest;Cu&aacute;les son los componentes primordiales de .NET Framework?";
 choices[39]= new Array();
 choices[39][0] = "ASP.net y ADO.net";
 choices[39][1] = "Common Language Runtime (CLR) y Clases Framework";
 choices[39][2] = "Common Language Specification (CLS) y Polimorfismo.";
 choices[39][3] = "Hypertext Markup Language (HTML) y Unified Modeling Language (UML)";
 answers[39] = choices[39][1];
 units[39] = "115";
 comments[39] = "Id Pregunta: 5154. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5421 AÃ±o de creación de pregunta: 2003-01-01
 questions[40]= "41)  La API JDBC se utiliza:";
 choices[40]= new Array();
 choices[40][0] = "Para efectuar consultas, actualizaciones de la base de datos que tengan los drivers adecuados. Tambi&eacute;n se pueden utilizar procedimientos almacenados y control de transacciones, pr&aacute;cticamente todas las funciones que soporta un SGBD relacional";
 choices[40][1] = "La API JDBC s&oacute;lo incorpora unos drivers que soportan las funciones de un SGBD relacional.";
 choices[40][2] = "Para efectuar consultas y actualizaciones del SGBD relacional. El control de transacciones y las llamadas a procedimientos almacenados no est&aacute;n soportados.";
 choices[40][3] = "Para efectuar consultas, actualizaciones de la base de datos que tengan los drivers adecuados y algunas de las funciones que soporta un SGBD relacional.";
 answers[40] = choices[40][0];
 units[40] = "116";
 comments[40] = "Id Pregunta: 5421. Castilla y Le&oacute;n";


//  Id pregunta: 5492 AÃ±o de creación de pregunta: 2003-01-01
 questions[41]= "42)  Respecto al DataSet de ADO.NET, se&ntilde;ala la falsa ";
 choices[41]= new Array();
 choices[41][0] = "se puedeutilizar con m&uacute;ltiples y distintos or&iacute;genes, excepto XML, que es su principal carencia";
 choices[41][1] = "Se compone de uno o mas DataTable";
 choices[41][2] = "Reproduce los elementos propios de un modelo de datos relacional";
 choices[41][3] = "est&aacute; expresamente dise&ntilde;ado para el acceso adatos independientemente del origen de datos. ";
 answers[41] = choices[41][0];
 units[41] = "59";
 comments[41] = "Id Pregunta: 5492. ";


//  Id pregunta: 5499 AÃ±o de creación de pregunta: 2003-01-01
 questions[42]= "43)  Indica cu&aacute;l no es una ventaja de la tecnolog&iacute;a JSF:";
 choices[42]= new Array();
 choices[42][0] = "Ofrece un alto nivel de abstracci&oacute;n en el dise&ntilde;o de la interfaz";
 choices[42][1] = "JSF comparada con otras tecnolog&iacute;as MVC (Spring MVC, Struts, WebWork, Tapestry,&hellip;) est&aacute; mas orientada a componetes y eventos  ";
 choices[42][2] = "Para el desarrollo de aplicaciones se basa en la implementaci&oacute;n de complejas clases Java";
 choices[42][3] = "Permite la creaci&oacute;n de nuevos componentes graficos o widgets";
 answers[42] = choices[42][2];
 units[42] = "116";
 comments[42] = "Id Pregunta: 5499. ";


//  Id pregunta: 5643 AÃ±o de creación de pregunta: 2003-01-01
 questions[43]= "44)  Se&ntilde;ale cu&aacute;l de las siguientes opciones relativas a la tecnolog&iacute;a de web services es verdadera:";
 choices[43]= new Array();
 choices[43][0] = "UDDI se utiliza como lenguaje de definici&oacute;n de servicios web";
 choices[43][1] = "SOAP deriva de XML-RPC";
 choices[43][2] = "WSDL permita la localizaci&oacute;n y publicaci&oacute;n de servicios web";
 choices[43][3] = "Ninguna de las anteriores";
 answers[43] = choices[43][1];
 units[43] = "51";
 comments[43] = "Id Pregunta: 5643. NULL";


//  Id pregunta: 5670 AÃ±o de creación de pregunta: 2003-01-01
 questions[44]= "45)  Cual de los siguientes no ser&iacute;a un patr&oacute;n de dise&ntilde;o J2EE";
 choices[44]= new Array();
 choices[44][0] = "abstraction inversion";
 choices[44][1] = "session fa&Ccedil;ade";
 choices[44][2] = "model view controler";
 choices[44][3] = "Data Access Objects";
 answers[44] = choices[44][0];
 units[44] = "116";
 comments[44] = "Id Pregunta: 5670. ";


//  Id pregunta: 5671 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  En una arquitectura Java EE, &iquest;d&oacute;nde situar&iacute;a un JSP?";
 choices[45]= new Array();
 choices[45][0] = "En el servidor web";
 choices[45][1] = "En el contenedor web";
 choices[45][2] = "En el contenedor de EJBs";
 choices[45][3] = "En el navegador Web";
 answers[45] = choices[45][1];
 units[45] = "116";
 comments[45] = "Id Pregunta: 5671. ";


//  Id pregunta: 5702 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  Cu&aacute;l de los siguientes no se encuentra entre los beneficios que puede obtener una organizaci&oacute;n que adopte SOA:";
 choices[46]= new Array();
 choices[46][0] = "Mejora en la interoperabilidad de servicios";
 choices[46][1] = "Facilidad para el desarrollo de aplicaciones fuertemente acopladas ";
 choices[46][2] = "Facilidad para abordar modelos de negocios basados en colaboraci&oacute;n con otros entes (socios, proveedores)";
 choices[46][3] = "Poder para reemplazar elementos de la capa de aplicaci&oacute;n sin disrupci&oacute;n en el proceso de negocio";
 answers[46] = choices[46][1];
 units[46] = "51";
 comments[46] = "Id Pregunta: 5702. NULL";


//  Id pregunta: 5707 AÃ±o de creación de pregunta: 2009-01-01
 questions[47]= "48)  Se&ntilde;ale cu&aacute;l de los siguientes conceptos NO est&aacute; ligado al desarrollo de aplicaciones basadas en servicios web:";
 choices[47]= new Array();
 choices[47][0] = "JAXB";
 choices[47][1] = "AWT";
 choices[47][2] = "AXIS";
 choices[47][3] = "WSE";
 answers[47] = choices[47][1];
 units[47] = "51";
 comments[47] = "Id Pregunta: 5707. MAP 2008 A2";


//  Id pregunta: 5782 AÃ±o de creación de pregunta: 2009-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de los siguientes objetos no forma parte del proveedor de datos del modelo de objetos ADO.NET?";
 choices[48]= new Array();
 choices[48][0] = "Connection.";
 choices[48][1] = "Command.";
 choices[48][2] = "DataAdapter.";
 choices[48][3] = "DataSet.";
 answers[48] = choices[48][3];
 units[48] = "59";
 comments[48] = "Id Pregunta: 5782. MAP 2008 A2";


//  Id pregunta: 5896 AÃ±o de creación de pregunta: 2009-01-01
 questions[49]= "50)  &iquest;Qu&eacute; tecnolog&iacute;as podemos utilizar, entre otras, para evitar utilizar c&oacute;digo Java en las p&aacute;ginas JSP?";
 choices[49]= new Array();
 choices[49][0] = "JSTL y EL";
 choices[49][1] = "Scriptlets";
 choices[49][2] = "JavaScript";
 choices[49][3] = "No es posible hacer tal cosa; toda p&aacute;gina JSP debe contener algo de c&oacute;digo Java";
 answers[49] = choices[49][0];
 units[49] = "116";
 comments[49] = "Id Pregunta: 5896. ";


//  Id pregunta: 6083 AÃ±o de creación de pregunta: 2010-01-01
 questions[50]= "51)  Respecto a SOA y los Servicios Web:";
 choices[50]= new Array();
 choices[50][0] = "Son el mismo concepto.";
 choices[50][1] = "Los Servicios Web son una de las tecnolog&iacute;as destacadas para llevar a la pr&aacute;ctica el paradigma conceptual SOA, pero no son la &uacute;nica.";
 choices[50][2] = "Los Servicios Web son la tecnolog&iacute;a para llevar a la pr&aacute;ctica el paradigma conceptual SOA aunque la arquitectura de desarrollo de los propios Servicios Web puede realizarse de diferentes formas.";
 choices[50][3] = "No existe ninguna relaci&oacute;n entre SOA y los Servicios Web.";
 answers[50] = choices[50][1];
 units[50] = "51";
 comments[50] = "Id Pregunta: 6083. NULL";


//  Id pregunta: 6129 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)  En la arquitectura Java, &iquest;qu&eacute; se entiende por JSR?";
 choices[51]= new Array();
 choices[51][0] = "Un applet.";
 choices[51][1] = "Es una especificaci&oacute;n en la que se describe una tecnolog&iacute;a, sus partes, las relaciones entre las mismas y los roles de las personas que usar&aacute;n dicha tecnolog&iacute;a.";
 choices[51][2] = "Es una especificaci&oacute;n que describe la manera en que la parte servidora atender&aacute; las peticiones hechas por un applet o un javascript. Es el acr&oacute;nimo de Java Server Request.";
 choices[51][3] = "Un JavaBean.";
 answers[51] = choices[51][1];
 units[51] = "60";
 comments[51] = "Id Pregunta: 6129. TIC A 2009";


//  Id pregunta: 6133 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  ADO.NET es:";
 choices[52]= new Array();
 choices[52][0] = "Un conjunto de componentes software de la capa de l&oacute;gica de negocio.";
 choices[52][1] = "Un lenguaje de programaci&oacute;n para el entorno .NET.";
 choices[52][2] = "Un conjunto de componentes para el acceso a datos.";
 choices[52][3] = "Una biblioteca de clases b&aacute;sica de la capa de presentaci&oacute;n.";
 answers[52] = choices[52][2];
 units[52] = "59";
 comments[52] = "Id Pregunta: 6133. TIC A 2009";


//  Id pregunta: 6198 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l es el framework para aplicaciones desarrolladas con Spring, asociado con el control y la gesti&oacute;n de la seguridad?";
 choices[53]= new Array();
 choices[53][0] = "Spring Security";
 choices[53][1] = "JSF";
 choices[53][2] = "Struts";
 choices[53][3] = "Jbuilder";
 answers[53] = choices[53][0];
 units[53] = "60, 116";
 comments[53] = "Id Pregunta: 6198. TIC-B 2009 bloque desarrollo";


//  Id pregunta: 6220 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  Qu&eacute; subproyecto de 'Apache' basado en servlets permite a los desarrolladores crear r&aacute;pidamente aplicaciones web y permite personalizar el uso de sitios web y restringir el acceso a partes de la aplicaci&oacute;n";
 choices[54]= new Array();
 choices[54][0] = "Watchdog";
 choices[54][1] = "Turbine";
 choices[54][2] = "Lucene";
 choices[54][3] = "Avalon";
 answers[54] = choices[54][1];
 units[54] = "60";
 comments[54] = "Id Pregunta: 6220. TICB-2009, bloque desarrollo";


//  Id pregunta: 6223 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  El Java Community Process (JCP) utiliza documentos formales que describen las especificaciones y tecnolog&iacute;as propuestas para que sean a&ntilde;adidas a la plataforma Java. Estos documentos reciben el nombre de:";
 choices[55]= new Array();
 choices[55][0] = "JSR (Java Specification Request)";
 choices[55][1] = "JRS (Java Request Specification)";
 choices[55][2] = "JPS (Java Proposal Specification)";
 choices[55][3] = "JSP (Java Specification Proposal)";
 answers[55] = choices[55][0];
 units[55] = "114";
 comments[55] = "Id Pregunta: 6223. ";


//  Id pregunta: 6231 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  Con respecto a los IFRAMEs, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[56]= new Array();
 choices[56][0] = "Se puede utilizar para extraer porciones de informaci&oacute;n de un documento HTML para mostrarlas en un portlet. De esta forma, se pueden elegir las partes importantes del documento HTML mientras que se descartan aquellos elementos que el cliente es incapaz de mostrar.";
 choices[56][1] = "Se utiliza principalmente para la generaci&oacute;n web de documentos PDF.";
 choices[56][2] = "Es un elemento HTML que permite insertar o incrustar un documento HTML dentro de un documento HTML principal.";
 choices[56][3] = "Ninguna de las afirmaciones anteriores es correcta.";
 answers[56] = choices[56][2];
 units[56] = "114";
 comments[56] = "Id Pregunta: 6231. ";


//  Id pregunta: 6235 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l es el objetivo del Proyecto Mono de Ximian, actualmente impulsado por Novell?";
 choices[57]= new Array();
 choices[57][0] = "Crear una versi&oacute;n Java compatible con el Sistema Operativo GNU/Linux.";
 choices[57][1] = "Crear un Office open source, compatible con el Office de Microsoft.";
 choices[57][2] = "Crear un grupo de herramientas libres, basadas en GNU/Linux y compatibles con .NET seg&uacute;n lo especificado por el ECMA.";
 choices[57][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[57] = choices[57][2];
 units[57] = "115";
 comments[57] = "Id Pregunta: 6235. ";


//  Id pregunta: 6236 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  &iquest;C&oacute;mo se denominan las interfaces de servicio de la implementaci&oacute;n del servicio de directorio de Microsoft en una red distribuida de computadores?";
 choices[58]= new Array();
 choices[58][0] = "ADSI";
 choices[58][1] = "LDAP";
 choices[58][2] = "AD";
 choices[58][3] = "ADIS";
 answers[58] = choices[58][0];
 units[58] = "115";
 comments[58] = "Id Pregunta: 6236. ";


//  Id pregunta: 6246 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes son implementaciones de Java Persistence API?";
 choices[59]= new Array();
 choices[59][0] = "Mediator";
 choices[59][1] = "Composite";
 choices[59][2] = "Facade";
 choices[59][3] = "Kodo";
 answers[59] = choices[59][3];
 units[59] = "116";
 comments[59] = "Id Pregunta: 6246. TICB-2009, bloque desarrollo";


//  Id pregunta: 6474 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de las plataformas desarrolladas por Java es una plataforma para crear aplicaciones servidor?";
 choices[60]= new Array();
 choices[60][0] = "Plataforma Java Technique Edition (JTE)";
 choices[60][1] = "Plataforma Java  Enterprise Edition (JEE)";
 choices[60][2] = "Plataforma Java Standard Edition (JSE)";
 choices[60][3] = "Plataforma Java Micro Edition (JME)";
 answers[60] = choices[60][1];
 units[60] = "116";
 comments[60] = "Id Pregunta: 6474. Castilla La Mancha 2009";


//  Id pregunta: 6515 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  Se&ntilde;ale la afirmaci&oacute;n INCORRECTA con respecto al lenguaje de programaci&oacute;n Java:";
 choices[61]= new Array();
 choices[61][0] = "Una clase 'final' no puede tener clases que hereden de ella.";
 choices[61][1] = "Una clase abstracta (abstract) es una clase que puede tener clases que hereden de ella, pero no puede ser instanciada.";
 choices[61][2] = "Las variables y m&eacute;todos de instancia privados s&oacute;lo pueden ser accedidos desde dentro de la clase y desde las subclases. ";
 choices[61][3] = "No se permite herencia m&uacute;ltiple.";
 answers[61] = choices[61][2];
 units[61] = "60";
 comments[61] = "Id Pregunta: 6515. NULL";


//  Id pregunta: 6523 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  El API que permite a los desarrolladores Java generar y recoger mensajes SOAP con ficheros adjuntos es:";
 choices[62]= new Array();
 choices[62][0] = "JAXR";
 choices[62][1] = "JSXA";
 choices[62][2] = "SAAJ";
 choices[62][3] = "SWAJ";
 answers[62] = choices[62][2];
 units[62] = "116";
 comments[62] = "Id Pregunta: 6523. NULL";


//  Id pregunta: 7319 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  &iquest;Qu&eacute; significan las siglas ASP de la tecnolog&iacute;a ASP.NET?";
 choices[63]= new Array();
 choices[63][0] = "Active Server Pages";
 choices[63][1] = "Active Side Pages";
 choices[63][2] = "Archive Server Pages";
 choices[63][3] = "Archive Side Pages";
 answers[63] = choices[63][0];
 units[63] = "59";
 comments[63] = "Id Pregunta: 7319. NULL";


//  Id pregunta: 8201 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  Indique la afirmaci&oacute;n INCORRECTA acerca de la BCL (Base Class Library) del framework .Net: ";
 choices[64]= new Array();
 choices[64][0] = "Contiene clases para la manipulaci&oacute;n de archivos gr&aacute;ficos. ";
 choices[64][1] = "Se organiza en clases de acceso a datos, de l&oacute;gica de negocio y de presentaci&oacute;n. ";
 choices[64][2] = "No dispone de clases para la gesti&oacute;n de la seguridad. ";
 choices[64][3] = "No depende del lenguaje de programaci&oacute;n utilizado por el desarrollador. ";
 answers[64] = choices[64][2];
 units[64] = "59";
 comments[64] = "Id Pregunta: 8201. Examen TIC A1 2010";


//  Id pregunta: 8354 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  A partir de ASP.NET 2.0, &iquest;en qu&eacute; carpeta se guarda el c&oacute;digo compilado para controles, componentes y otro c&oacute;digo que pueda ser referenciado por la aplicaci&oacute;n (los archivos dll)?";
 choices[65]= new Array();
 choices[65][0] = "App_Data.";
 choices[65][1] = "Bin.";
 choices[65][2] = "App_WebReferences";
 choices[65][3] = "Compilation";
 answers[65] = choices[65][1];
 units[65] = "59,115";
 comments[65] = "Id Pregunta: 8354. Examen TIC A2 2010";


//  Id pregunta: 8590 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  &iquest;Cu&aacute;l de las siguientes utilidades permite desarrollar en JAVA?";
 choices[66]= new Array();
 choices[66][0] = "JRE";
 choices[66][1] = "M&aacute;quina Virtual de Java";
 choices[66][2] = "JDK";
 choices[66][3] = "AWT";
 answers[66] = choices[66][2];
 units[66] = "116";
 comments[66] = "Id Pregunta: 8590. Examen TIC A2 2010 interna";


//  Id pregunta: 8595 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  &iquest;A qu&eacute; corresponden las siglas LINQ?";
 choices[67]= new Array();
 choices[67][0] = "Lenguaje que permite enlaces unidireccionales y bid&iacute;reccionales a otro recurso (como archivos, im&aacute;genes, documentos, programas, etc.) dentro de documentos XML";
 choices[67][1] = "Soluci&oacute;n utilizada en el campo de la Business Intelligence cuyo objetivo es agilizar la consulta a grandes cantidades de datos";
 choices[67][2] = "Conjunto de extensiones a NET Framework que abarca operaciones de consulta integrada de lenguaje, conjuntos y transformaciones.";
 choices[67][3] = "Texto o im&aacute;genes en un sitio web que un usuario puede pinchar para tener acceso o conectar con otro documento.";
 answers[67] = choices[67][2];
 units[67] = "59,115";
 comments[67] = "Id Pregunta: 8595. Examen TIC A2 2010 interna";


//  Id pregunta: 8799 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  &iquest;Con qu&eacute; siglas se identifica el Common Language Runtime de la plataforma .NET?";
 choices[68]= new Array();
 choices[68][0] = "CLRUN";
 choices[68][1] = "CLRNET";
 choices[68][2] = "COLR";
 choices[68][3] = "CLR";
 answers[68] = choices[68][3];
 units[68] = "59, 115";
 comments[68] = "Id Pregunta: 8799. Examen UPM A2 2011";


//  Id pregunta: 8801 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  Con relaci&oacute;n a la programaci&oacute;n en java, &iquest;como se denomina el paquete que comprende una serie de clases que permiten crear y organizar ventanas, implementar componentes gr&aacute;ficas de la interfaz, mediante eventos, dibujar textos y gr&aacute;ficos, procesar im&aacute;genes y acceder a cada sistema nativo de ventanas?";
 choices[69]= new Array();
 choices[69][0] = "WT (Window Toolkit)";
 choices[69][1] = "AWT (Abstract Window Toolkit)";
 choices[69][2] = "JWS (Java Window Set)";
 choices[69][3] = "WS (Windows Set)";
 answers[69] = choices[69][1];
 units[69] = "60";
 comments[69] = "Id Pregunta: 8801. Examen UPM A2 2011";


//  Id pregunta: 8809 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  La clase XPathNavigator de la biblioteca de clases de .NET, &iquest;para qu&eacute; sirve?:";
 choices[70]= new Array();
 choices[70][0] = "Para leer datos de cualquier almac&eacute;n de datos mediante un modelo de cursor";
 choices[70][1] = "Para proporcionar un iterador para un conjunto de nodos seleccionados";
 choices[70][2] = "Para encapsular una expresi&oacute;n XPath compilada";
 choices[70][3] = "Todas las anteriores son falsas";
 answers[70] = choices[70][0];
 units[70] = "59, 115";
 comments[70] = "Id Pregunta: 8809. Examen UPM A2 2011";


//  Id pregunta: 8811 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  Una p&aacute;gina ASP mezcla en el mismo archivo secuencias de comandos con c&oacute;digo HTML est&aacute;ndar con las secuencias de comandos asp mediante los delimitadores:";
 choices[71]= new Array();
 choices[71][0] = "&lt;% y %&gt;";
 choices[71][1] = "&lt;SCRIPT LANGUAGE=&quot;ASPScript&quot;&gt; &lt;/SCRIPl&gt;";
 choices[71][2] = "&lt;!- --&gt;";
 choices[71][3] = "Los comandos ASP no se mezclan en el mismo archive que el c&oacute;digo HTML, sino que se importan desde otro archivo";
 answers[71] = choices[71][0];
 units[71] = "59, 115";
 comments[71] = "Id Pregunta: 8811. Examen UPM A2 2011";


//  Id pregunta: 8816 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  Una de las partes fundamentales de ADO.NET son los DataSets, los cuales contienen una serie de objetos formando una jerarqu&iacute;a, &iquest;cu&aacute;les son v&aacute;lidos?";
 choices[72]= new Array();
 choices[72][0] = "DataSet, DataTable, DataView, DataColumn, DataRow, DataRowView, DataRelation, Constraint";
 choices[72][1] = "DataSet, DataTable, DataView, DataColumn, DataRow, pero no DataRowView, ni DataRelation, ni Constraint";
 choices[72][2] = "ADOSet, ADOTable, ADOView, ADOColumn, ADORow, ADORowView, ADORelation, Constraint";
 choices[72][3] = "ADOSet, ADOTable, ADOView, ADOColumn, ADORow, pero no ADORowView, ni ADORelation, ni Constraint";
 answers[72] = choices[72][0];
 units[72] = "59";
 comments[72] = "Id Pregunta: 8816. Examen UPM A2 2011";


//  Id pregunta: 8855 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;Qu&eacute; tipo de driver JDBC conecta a la base de datos directamente usando su protocolo nativo?";
 choices[73]= new Array();
 choices[73][0] = "Type 1 JDBC Driver";
 choices[73][1] = "Type 2 JDBC Driver";
 choices[73][2] = "Type 3 JDBC Driver";
 choices[73][3] = "Type 4 JDBC Driver";
 answers[73] = choices[73][3];
 units[73] = "58, 60";
 comments[73] = "Id Pregunta: 8855. Analista Ayto. Madrid 2010";


//  Id pregunta: 9495 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  Se&ntilde;ale la afimaci&oacute;n falsa con respecto a Javascript:";
 choices[74]= new Array();
 choices[74][0] = "Es un extensi&oacute;n de Java";
 choices[74][1] = "Es un extensi&oacute;n de HTML";
 choices[74][2] = "Es un lenguaje interpretado";
 choices[74][3] = "El int&eacute;rprete de JavaScript se basa en el est&aacute;ndar ECMAScript";
 answers[74] = choices[74][0];
 units[74] = "114";
 comments[74] = "Id Pregunta: 9495. NULL";


//  Id pregunta: 9504 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  En el &aacute;mbito de los formatos de im&aacute;genes est&aacute;ticas, indique cual de las siguientes es la afirmaci&oacute;n correcta:";
 choices[75]= new Array();
 choices[75][0] = "GIF y PNG comprimen sin p&eacute;rdidas mientras que JPEG comprime con p&eacute;rdidas";
 choices[75][1] = "GIF y JPEG comprimen sin p&eacute;rdidas mientras que PNG comprime con p&eacute;rdidas";
 choices[75][2] = "JPEG y PNG comprimen sin p&eacute;rdidas mientras que GIF comprime con p&eacute;rdidas";
 choices[75][3] = "Todas las anteriores son falsas";
 answers[75] = choices[75][0];
 units[75] = "114";
 comments[75] = "Id Pregunta: 9504. NULL";


//  Id pregunta: 9505 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  &iquest;Cu&aacute;les de los siguientes no es un formato de sonido?";
 choices[76]= new Array();
 choices[76][0] = "MIDI";
 choices[76][1] = "Ogg Vorbis 1.0";
 choices[76][2] = "WAV";
 choices[76][3] = "VRML";
 answers[76] = choices[76][3];
 units[76] = "114";
 comments[76] = "Id Pregunta: 9505. NULL";


//  Id pregunta: 9509 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  &iquest;Qu&eacute; son las Java EE Blueprints?";
 choices[77]= new Array();
 choices[77][0] = "Un conjunto de pr&aacute;cticas obligatorias al desarrollar en Java";
 choices[77][1] = "Un conjunto de buenas pr&aacute;cticas al desarrollar en Java";
 choices[77][2] = "Una API de desarrollo en Java";
 choices[77][3] = "Java EE Blueprints no existe";
 answers[77] = choices[77][1];
 units[77] = "116";
 comments[77] = "Id Pregunta: 9509. NULL";


//  Id pregunta: 9511 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  &iquest;Cu&aacute;l es la API est&aacute;ndar para conectar programas desarrollados en Java con un sistema gestor de base de datos?";
 choices[78]= new Array();
 choices[78][0] = "JAXP";
 choices[78][1] = "StAX";
 choices[78][2] = "JAF";
 choices[78][3] = "JDBC";
 answers[78] = choices[78][3];
 units[78] = "116";
 comments[78] = "Id Pregunta: 9511. NULL";


//  Id pregunta: 9521 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  &iquest;Cu&aacute;les de los siguientes no es un framework de desarrollo en Java?";
 choices[79]= new Array();
 choices[79][0] = "Apache Struts";
 choices[79][1] = "Hibernate";
 choices[79][2] = "Tapestry";
 choices[79][3] = "Todos los anteriores son frameworks de desarrollo en Java";
 answers[79] = choices[79][3];
 units[79] = "116";
 comments[79] = "Id Pregunta: 9521. NULL";


//  Id pregunta: 9778 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  &iquest;Con qu&eacute; directiva se declara una p&aacute;gina maestra en ASP.Net?";
 choices[80]= new Array();
 choices[80][0] = "Master";
 choices[80][1] = "MasterPage";
 choices[80][2] = "Master.Page";
 choices[80][3] = "Page ";
 answers[80] = choices[80][0];
 units[80] = "59, 115";
 comments[80] = "Id Pregunta: 9778. Examen TIC A2 2013";


//  Id pregunta: 9962 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  Los dos componentes principales de ADO.NET para el acceso a los datos y su manipulaci&oacute;n son:";
 choices[81]= new Array();
 choices[81][0] = ".NET Framework Data Connectivity y ADO.NET DataSet";
 choices[81][1] = ".NET Framework Data Providers y ADO.NET ResultSet";
 choices[81][2] = ".NET Framework Data Connectivity y ADO.NET ResultSet";
 choices[81][3] = ".NET Framework Data Providers y ADO.NET DataSet";
 answers[81] = choices[81][3];
 units[81] = "59,115";
 comments[81] = "Id Pregunta: 9962. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 9965 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  &iquest;Cu&aacute;l de las siguientes afirmaciones es FALSA respecto al lenguaje de programaci&oacute;n C# de la  plataforma .NET?";
 choices[82]= new Array();
 choices[82][0] = "En C# una clase puede heredar directamente de una sola clase primaria pero puede implementar cualquier n&uacute;mero de interfaces.";
 choices[82][1] = "C# no admite la aritm&eacute;tica con punteros de manera predeterminada, sin embargo, si utiliza la palabra clave unsafe, puede definir un contexto no seguro en el que se pueden utilizar punteros";
 choices[82][2] = "Los programas en C# pueden constar de uno o varios archivos, y cada archivo puede contener cero o varios espacios de nombres (namespaces).";
 choices[82][3] = "Un espacio de nombres (namespace) puede contener tipos tales como clases (classes), estructuras (structs), interfaces (interfaces), enumeraciones (enumerations) y delegados (delegates), pero no puede contener otros espacios de nombres (namespaces).";
 answers[82] = choices[82][3];
 units[82] = "59,115";
 comments[82] = "Id Pregunta: 9965. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 9978 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  En el desarrollo de aplicaciones en .NET Framework disponemos de un Garbage Collector (recolector de basura). Indique cu&aacute;l de las siguientes afirmaciones es FALSA ";
 choices[83]= new Array();
 choices[83][0] = "La liberaci&oacute;n de un objeto en memoria es perfectamente posible sin intervenci&oacute;n expl&iacute;cita por parte del usuario ";
 choices[83][1] = "Para la liberaci&oacute;n expl&iacute;cita de memoria existen m&eacute;todos de finalizaci&oacute;n como Finalize() y Dispose()";
 choices[83][2] = "Se suele utilizar Dispose() cuando el objeto no se va a utilizar m&aacute;s definitivamente ";
 choices[83][3] = "Si se invoca expl&iacute;citamente el m&eacute;todo Dispose() de un objeto, este ser&aacute; liberado inmediatamente ";
 answers[83] = choices[83][3];
 units[83] = "59";
 comments[83] = "Id Pregunta: 9978. Examen TICA2, Xunta de GaliciA, 2011";


//  Id pregunta: 10024 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Se&ntilde;ale la afirmaci&oacute;n CORRECTA con respecto a un bean de sesi&oacute;n en JavaEE 7:";
 choices[84]= new Array();
 choices[84][0] = "Una aplicaci&oacute;n requerir&aacute; normalmente menos beans de sesi&oacute;n stateless que stateful para respaldar al mismo n&uacute;mero de clientes.";
 choices[84][1] = "Los stateful permiten compartir estado entre varios clientes.";
 choices[84][2] = "Un bean de sesi&oacute;n singleton es instanciado varias veces, seg&uacute;n necesidad, pero va a existir una copia (el singleton) todo el ciclo de vida de la aplicaci&oacute;n.";
 choices[84][3] = "Los stateful est&aacute;n respaldados por una base de datos y pueden implementar un servicio web.";
 answers[84] = choices[84][0];
 units[84] = "60";
 comments[84] = "Id Pregunta: 10024. TIC A2, Promoci&oacute;n Interna, 2013. Un stateless puede servirle a varios clientes. Stateful suele servir solo a 1 cliente.";


//  Id pregunta: 10219 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Las variables declaradas en un interface deben ser:";
 choices[85]= new Array();
 choices[85][0] = "public, static y final";
 choices[85][1] = "private static y final";
 choices[85][2] = "S&oacute;lo protected";
 choices[85][3] = "En un interface no se deben incluir variables";
 answers[85] = choices[85][0];
 units[85] = "60";
 comments[85] = "Id Pregunta: 10219. NULL";


//  Id pregunta: 10228 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Se&ntilde;ala las respuestas correctas sobre los objetos java.util.Vector y java.util.Hashtable:";
 choices[86]= new Array();
 choices[86][0] = "Un Vector puede almacenar referencias de objetos y tipos de datos primitivos";
 choices[86][1] = "Un Vector almacena referencias de objetos en el orden en que son a&ntilde;adidas";
 choices[86][2] = "A y B son ciertas";
 choices[86][3] = "La Hashtable almacena referencias de objetos en el orden en que son a&ntilde;adidas";
 answers[86] = choices[86][2];
 units[86] = "60";
 comments[86] = "Id Pregunta: 10228. La A es cierta tambi&eacute;n. As&iacute; que se cambia la C por la respuesta actual.";


//  Id pregunta: 10230 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Se&ntilde;ala el m&eacute;todo que es usado para obtener un par&aacute;metro de inicializaci&oacute;n desde ServletContext:";
 choices[87]= new Array();
 choices[87][0] = "Object getInitParameter(int index)";
 choices[87][1] = "Object getInitParameter(String name)";
 choices[87][2] = "String getInitParameter(String name)";
 choices[87][3] = "String getParameter(String name)";
 answers[87] = choices[87][2];
 units[87] = "116";
 comments[87] = "Id Pregunta: 10230. NULL";


//  Id pregunta: 10240 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  Una vez creado un objeto StringTokenizer, cu&aacute;l es el m&eacute;todo que nos permite ir avanzando hasta el siguiente elemento del String:";
 choices[88]= new Array();
 choices[88][0] = "next()";
 choices[88][1] = "nextValue()";
 choices[88][2] = "nextToken()";
 choices[88][3] = "Ninguno de los anteriores";
 answers[88] = choices[88][2];
 units[88] = "60";
 comments[88] = "Id Pregunta: 10240. NULL";


//  Id pregunta: 10462 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  Respecto a REST, indique qu&eacute; afirmaci&oacute;n es falsa:";
 choices[89]= new Array();
 choices[89][0] = "Permite una generalizaci&oacute;n de las interfaces entre recursos.";
 choices[89][1] = "Facilita el desarrollo de los clientes de los servicios.";
 choices[89][2] = "Su uso est&aacute; indicado para aplicaciones en las que la gesti&oacute;n del estado es compleja.";
 choices[89][3] = "La funcionalidad de las aplicaciones se representa mediante recursos.";
 answers[89] = choices[89][2];
 units[89] = "51";
 comments[89] = "Id Pregunta: 10462. ";


//  Id pregunta: 10621 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Se&ntilde;ale la respuesta correcta:";
 choices[90]= new Array();
 choices[90][0] = "Para desarrollar una aplicaci&oacute;n distribuida en Java es imprescindible la utilizaci&oacute;n de un servidor de aplicaciones.";
 choices[90][1] = "Weblogic es un contenedor de servlets.";
 choices[90][2] = "Wildfly es la versi&oacute;n gratuita de Jboss.";
 choices[90][3] = "Spring es un m&oacute;dulo de Java EE.";
//  Id pregunta: 10664 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  La licencia del framework .NET:";
 choices[91]= new Array();
 choices[91][0] = "Propietaria";
 choices[91][1] = "Comercial";
 choices[91][2] = "Open Source";
 choices[91][3] = "Mixta";
 answers[91] = choices[91][2];
 units[91] = "115";
 comments[91] = "Id Pregunta: 10664. MIT License desde 2014";


//  Id pregunta: 10852 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  En .NET, &iquest;qu&eacute; es el Managed Extensibility Framework (MEF)?";
 choices[92]= new Array();
 choices[92][0] = "Es una arquitectura que proporciona primitivos as&iacute;ncronos de paso de aprobaci&oacute;n de mensajes sin tipo.";
 choices[92][1] = "Es un modelo extensible de programaci&oacute;n, motor y herramientas para generar con rapidez aplicaciones de flujo de trabajo en Windows.";
 choices[92][2] = "Es una biblioteca de clases portable que permite escribir y compilar ensamblados administrados capaces de funcionar en m&uacute;ltiples plataformas de .NET.";
 choices[92][3] = "Es una biblioteca para crear aplicaciones ligeras y extensibles.";
 answers[92] = choices[92][3];
 units[92] = "59, 115";
 comments[92] = "Id Pregunta: 10852. Examen GSI 2014";


//  Id pregunta: 10866 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Se&ntilde;ale la respuesta FALSA acerca de la tecnolog&iacute;a Java Web Start:";
 choices[93]= new Array();
 choices[93][0] = "El software de Java Web Start permite descargar y ejecutar aplicaciones Java desde la Web.";
 choices[93][1] = "Garantiza que se est&aacute; ejecutando la &uacute;ltima versi&oacute;n de la aplicaci&oacute;n.";
 choices[93][2] = "Incluido en el JDK desde la versi&oacute;n 6, permitiendo instalar aplicaciones a trav&eacute;s de URLs con JMLP (Java Main Launch Protocol).";
 choices[93][3] = "Permite desplegar f&aacute;cilmente aplicaciones standalone de escritorio.";
 answers[93] = choices[93][2];
 units[93] = "60, 116";
 comments[93] = "Id Pregunta: 10866. Examen GSI 2014";


//  Id pregunta: 10999 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  En relaci&oacute;n con jquery, se&ntilde;ale la respuesta correcta:";
 choices[94]= new Array();
 choices[94][0] = "Es una biblioteca disponible en Java 6 y 7 que facilita la realizaci&oacute;n de consultas a bases de datos relacionales.";
 choices[94][1] = "Es una biblioteca de Javascript para simplificar la interacci&oacute;n con p&aacute;ginas web.";
 choices[94][2] = "Es un est&aacute;ndar abierto que facilita la realizaci&oacute;n de consultas a bases de datos relacionales.";
 choices[94][3] = "Es una biblioteca para el acceso a almacenes de datos y big data, que permite la interacci&oacute;n del usuario final con los datos agregados y de detalle.";
 answers[94] = choices[94][1];
 units[94] = "114";
 comments[94] = "Id Pregunta: 10999. TIC A1 AGE 2014";


//  Id pregunta: 11042 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de las siguientes afirmaciones acerca de los compiladores es correcta?";
 choices[95]= new Array();
 choices[95][0] = "Los compiladores AOT (Ahead-Of-Time) compilan a c&oacute;digo m&aacute;quina nativo antes de la ejecuci&oacute;n de la aplicaci&oacute;n";
 choices[95][1] = "Los compiladores JIT (Just in Time) compilan durante la ejecuci&oacute;n";
 choices[95][2] = "Los 2 respuestas anteriores son correctas";
 choices[95][3] = "Ninguna de las anteriores es correcta";
 answers[95] = choices[95][2];
 units[95] = "60";
 comments[95] = "Id Pregunta: 11042. ";


//  Id pregunta: 11226 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  A partir de que versi&oacute;n adopt&oacute; la antigua Sun Microsystem un cambio en la nomenclatura de las versiones en sus productos Java.";
 choices[96]= new Array();
 choices[96][0] = "Hasta la versi&oacute;n 1.2, siendo la versi&oacute;n 3.0 la primera en numerarse de esta forma.";
 choices[96][1] = "Hasta la versi&oacute;n 1.3, siendo la versi&oacute;n 4.0 la primera en numerarse de esta forma.";
 choices[96][2] = "Hasta la versi&oacute;n 1.4, siendo la versi&oacute;n 5.0 la primera en numerarse de esta forma.";
 choices[96][3] = "El versionado ha sido siempre 1.x.";
 answers[96] = choices[96][2];
 units[96] = "116";
 comments[96] = "Id Pregunta: 11226. ";


//  Id pregunta: 11227 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l de los siguientes no es un m&eacute;todo de la clase HttpServlet?";
 choices[97]= new Array();
 choices[97][0] = "doGet(). Se ejecuta cuando se recibe una petici&oacute;n HTTP GET.";
 choices[97][1] = "doPush(). Se ejecuta cuando se recibe una petici&oacute;n HTTP PUSH.";
 choices[97][2] = "doPost(). Se ejecuta cuando se recibe una petici&oacute;n HTTP POST.";
 choices[97][3] = "doPut(). Se ejecuta cuando se recibe una petici&oacute;n HTTP PUT.";
 answers[97] = choices[97][1];
 units[97] = "116";
 comments[97] = "Id Pregunta: 11227. ";


//  Id pregunta: 11345 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  De los perfiles creados por WS-I indique cu&aacute;l no existe";
 choices[98]= new Array();
 choices[98][0] = "WS-I Basic security profile";
 choices[98][1] = "WS-I Reliable secure profile";
 choices[98][2] = "WS-I Extended Reliable profile";
 choices[98][3] = "WS-I Basic profile";
 answers[98] = choices[98][2];
 units[98] = "51";
 comments[98] = "Id Pregunta: 11345. ";


//  Id pregunta: 11670 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Los Enterprise Java Beans (EJB) con funcionamiento as&iacute;ncrono son:";
 choices[99]= new Array();
 choices[99][0] = "Message driven beans";
 choices[99][1] = "Session beans";
 choices[99][2] = "Entity beans";
 choices[99][3] = "Todos los anteriores tienen funcionamiento as&iacute;ncrono.";
 answers[99] = choices[99][0];
 units[99] = "116";
 comments[99] = "Id Pregunta: 11670. ";


