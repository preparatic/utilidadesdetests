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

//  Id pregunta: 190 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  En la Metodolog&iacute;a MAGERIT, el evento que pueden desencadenar un incidente en la organizaci&oacute;n, produciendo da&ntilde;os materiales o p&eacute;rdidas inmateriales en sus activos, se denomina:";
 choices[0]= new Array();
 choices[0][0] = "Impacto";
 choices[0][1] = "Vulnerabilidad";
 choices[0][2] = "Amenaza";
 choices[0][3] = "Riesgo";
 answers[0] = choices[0][2];
 units[0] = "33";
 comments[0] = "Id Pregunta: 190. Similar a examen TIC SS A 2003";


//  Id pregunta: 267 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  Indicar cu&aacute;l no es una t&eacute;cnica para la toma individual de decisiones:";
 choices[1]= new Array();
 choices[1][0] = "T&eacute;cnica Delphi";
 choices[1][1] = "An&aacute;lisis de redes";
 choices[1][2] = "Teor&iacute;a de probabilidad";
 choices[1][3] = "Programaci&oacute;n lineal";
 answers[1] = choices[1][0];
 units[1] = "23";
 comments[1] = "Id Pregunta: 267. ";


//  Id pregunta: 544 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  &iquest;Existe el concepto de 'copia privada' en la actual legislaci&oacute;n de propiedad intelectual?";
 choices[2]= new Array();
 choices[2][0] = "Si, es un derecho por el cual no es necesaria la autorizaci&oacute;n del creador de una obra ya divulgada para proceder a la reproducci&oacute;n de la misma para uso privado del copista, siempre que no vaya a ser objeto de utilizaci&oacute;n colectiva ni lucrativa";
 choices[2][1] = "Si, pero no como copia leg&iacute;tima";
 choices[2][2] = "Si, es un derecho por el cual, previa autorizaci&oacute;n del creador de una obra ya divulgada, se procede a la reproducci&oacute;n de la misma para uso privado del copista, siempre que no vaya a ser objeto de utilizaci&oacute;n colectiva ni lucrativa";
 choices[2][3] = "No";
 answers[2] = choices[2][0];
 units[2] = "36,37";
 comments[2] = "Id Pregunta: 544. LPI de 1996";


//  Id pregunta: 568 AÃ±o de creación de pregunta: 2006-01-01
 questions[3]= "4)  El t&eacute;rmino &quot;organizaci&oacute;n aprendiente&quot; se debe a:";
 choices[3]= new Array();
 choices[3][0] = "Peter Drucker";
 choices[3][1] = "Davenport";
 choices[3][2] = "C. Rami&oacute;";
 choices[3][3] = "Linda Applegate";
 answers[3] = choices[3][0];
 units[3] = "22";
 comments[3] = "Id Pregunta: 568. ";


//  Id pregunta: 754 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  Indicar la afirmaci&oacute;n INCORRECTA respecto MS ASP.NET";
 choices[4]= new Array();
 choices[4][0] = "ASP.NET puede utilizar cualquier lenguaje de programaci&oacute;n soportado por .NET";
 choices[4][1] = "Es compatible con p&aacute;ginas ASP existentes";
 choices[4][2] = "Necesita el .NET Framework para su ejecuci&oacute;n";
 choices[4][3] = "Se puede utilizar con servidores web que no sean IIS, como Apache o nginx";
 answers[4] = choices[4][3];
 units[4] = "59";
 comments[4] = "Id Pregunta: 754. NULL";


//  Id pregunta: 1100 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  En Java, al mecanismo que permite agrupar un conjunto de clases relacionadas se le denomina";
 choices[5]= new Array();
 choices[5][0] = "Superset o superconjunto";
 choices[5][1] = "Package o paquete";
 choices[5][2] = "Superclass o Superclase";
 choices[5][3] = "Colection o Colecci&oacute;n";
 answers[5] = choices[5][1];
 units[5] = "60";
 comments[5] = "Id Pregunta: 1100. JCED - Preparatic XVII";


//  Id pregunta: 1190 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Indique cu&aacute;l de las siguientes es una caracter&iacute;stica exclusiva del software libre frente a otros tipos de licencias de software:";
 choices[6]= new Array();
 choices[6][0] = "Fuentes abiertas";
 choices[6][1] = "Gratuidad";
 choices[6][2] = "Libre copia y distribuci&oacute;n del c&oacute;digo fuente";
 choices[6][3] = "Todas las caracteristicas anteriores son exclusivas del software libre";
 answers[6] = choices[6][2];
 units[6] = "61";
 comments[6] = "Id Pregunta: 1190. ";


//  Id pregunta: 1217 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  La definici&oacute;n de PKI, seg&uacute;n IETF - PKIX es:";
 choices[7]= new Array();
 choices[7][0] = "El conjunto de hardware, software, pol&iacute;ticas y procedimientos necesarios para crear, gestionar, almacenar, distribuir y revocar certificados basados en criptograf&iacute;a de clave p&uacute;blica";
 choices[7][1] = "El conjunto de hardware, software, personal, pol&iacute;ticas y procedimientos necesarios para crear, gestionar y almacenarcertificados basados en criptograf&iacute;a de clave p&uacute;blica";
 choices[7][2] = "El conjunto de hardware, software, personal, pol&iacute;ticas y procedimientos necesarios para crear, gestionar, almacenar, distribuir y revocar certificados basados en criptograf&iacute;a de clave p&uacute;blica";
 choices[7][3] = "El conjunto de pol&iacute;ticas y procedimientos necesarios para crear, gestionar, almacenar, distribuir y revocar certificados basados en criptograf&iacute;a de clave p&uacute;blica";
 answers[7] = choices[7][2];
 units[7] = "74";
 comments[7] = "Id Pregunta: 1217. NULL";


//  Id pregunta: 1311 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Que el bus de datos trabaje con 32 bits quiere decir que:";
 choices[8]= new Array();
 choices[8][0] = "Todos los dispositivos conectados al bus acceden a 32 bits en cada impulso de reloj del ordenador";
 choices[8][1] = "Todos los dispositivos conectados al bus acceden a 32 bits en dos impulsos de reloj del ordenador";
 choices[8][2] = "Todos los dispositivos conectados al bus acceden a 32 bits en cuatro impulsos de reloj del ordenador";
 choices[8][3] = "Ninguna de las anteriores, ya que el bus del ordenador puede trabajar a diferente velocidad que la CPU";
 answers[8] = choices[8][3];
 units[8] = "47";
 comments[8] = "Id Pregunta: 1311. ";


//  Id pregunta: 2023 AÃ±o de creación de pregunta: 2004-01-01
 questions[9]= "10)  De acuerdo con el modelo Staffing Size, en un desarrollo orientado a objetos:";
 choices[9]= new Array();
 choices[9][0] = "El porcentaje de clases clave oscila entre el 20% y el 40%; el resto suelen ser clases secundarias.";
 choices[9][1] = "El porcentaje de clases clave nunca debe superar el 5% del total de clases.";
 choices[9][2] = "El porcentaje de clases clave debe ser superior al 75% para garantizar la robustez del proyecto.";
 choices[9][3] = "No deben existir clases secundarias.";
 answers[9] = choices[9][0];
 units[9] = "82,84";
 comments[9] = "Id Pregunta: 2023. Examen TIC MAP B 2004";


//  Id pregunta: 2164 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Indicar la respuesta verdadera respecto a EFQM:";
 choices[10]= new Array();
 choices[10][0] = "El Modelo Europeo de Calidad se desarroll&oacute; en 1991 bajo la iniciativa de la European Foundation for QualityManagement (EFQM), formada en 1988 por un grupo de catorce importantes empresas europeas. En la actualidad la componen m&aacute;s de 400 miembros";
 choices[10][1] = "El modelo identific&oacute; una serie de elementos que ser&aacute;n la base para la Gesti&oacute;n de Calidad Total (TQM) dentro de las organizaciones y que se pueden agrupar en dos grandes bloques que podemos denominar: el C&oacute;mo y el Qu&eacute; o tambi&eacute;n los Agentes y los Resultados";
 choices[10][2] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son falsas";
 choices[10][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son verdaderas";
 answers[10] = choices[10][3];
 units[10] = "92";
 comments[10] = "Id Pregunta: 2164. NULL";


//  Id pregunta: 2396 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  La integraci&oacute;n de un conjunto de bases de datos aisladas en un entorno cliente / servidor, con un potente servidor de bases de datos, es un ejemplo t&iacute;pico de:";
 choices[11]= new Array();
 choices[11][0] = "Downsizing.";
 choices[11][1] = "Outsourcing.";
 choices[11][2] = "Arquitectura centralizada.";
 choices[11][3] = "Upsizing.";
 answers[11] = choices[11][3];
 units[11] = "90";
 comments[11] = "Id Pregunta: 2396. ";


//  Id pregunta: 2495 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Se&ntilde;ale la respuesta falsa a la siguiente afirmaci&oacute;n: &quot;Las relaciones de un diagrama de clases pueden ser&quot;:";
 choices[12]= new Array();
 choices[12][0] = "Agregaci&oacute;n.";
 choices[12][1] = "Coherencia.";
 choices[12][2] = "Herencia.";
 choices[12][3] = "Dependencia.";
 answers[12] = choices[12][1];
 units[12] = "82,84";
 comments[12] = "Id Pregunta: 2495. ";


//  Id pregunta: 2738 AÃ±o de creación de pregunta: 2006-01-01
 questions[13]= "14)  Indique la afirmaci&oacute;n incorrecta";
 choices[13]= new Array();
 choices[13][0] = "Una relaci&oacute;n est&aacute; en segunda forma normal (2FN) solamente si todos los atributos son dependientes en forma completa de la clave.";
 choices[13][1] = "Cualquier relaci&oacute;n en primera forma normal que tiene una clave compuesta, est&aacute; autom&aacute;ticamente en segunda forma normal.";
 choices[13][2] = "Una relaci&oacute;n se encuentra en tercera forma normal (EFN) si no existen transitividades entre sus atributos y si ya se encuentra en 2 FN.";
 choices[13][3] = "Para poner una relaci&oacute;n en la cuarta forma normal debe estar en 3FN y deben existir una o m&aacute;s multidependencias.";
 answers[13] = choices[13][1];
 units[13] = "58";
 comments[13] = "Id Pregunta: 2738. ";


//  Id pregunta: 2893 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  La cooperaci&oacute;n de los Estados miembros para la utilizaci&oacute;n de la tecnolog&iacute;a de la informaci&oacute;n en todas las instituciones de la UE se realiza a trav&eacute;s del programa:";
 choices[14]= new Array();
 choices[14][0] = "TESTA II ";
 choices[14][1] = "IDABC";
 choices[14][2] = "INDALO";
 choices[14][3] = "HITA";
 answers[14] = choices[14][1];
 units[14] = "103";
 comments[14] = "Id Pregunta: 2893. ";


//  Id pregunta: 2983 AÃ±o de creación de pregunta: 2004-01-01
 questions[15]= "16)  En la redes de ordenadores, en la topolog&iacute;a en estrella:";
 choices[15]= new Array();
 choices[15][0] = "Un ordenador se conecta al siguiente y el &uacute;ltimo al primero, formando un circulo cerrado";
 choices[15][1] = "Existe un nodo raiz del que cuelgan uno o varios nodos";
 choices[15][2] = "Existe un nodo central o hub al que se conectan todos los ordenadores";
 choices[15][3] = "Cada uno de los nodos est&aacute; conectado con todos los demas";
 answers[15] = choices[15][2];
 units[15] = "101";
 comments[15] = "Id Pregunta: 2983. NULL";


//  Id pregunta: 2989 AÃ±o de creación de pregunta: 2004-01-01
 questions[16]= "17)  &iquest;Qu&eacute; norma se encargaga de la estabdarizaci&oacute;n de redes inal&aacute;mbricas de &aacute;rea personal?";
 choices[16]= new Array();
 choices[16][0] = "El IEEE 802.11";
 choices[16][1] = "El IEEE 802.15";
 choices[16][2] = "El AUT-C";
 choices[16][3] = "El UIT-T E-164";
 answers[16] = choices[16][1];
 units[16] = "42";
 comments[16] = "Id Pregunta: 2989. ";


//  Id pregunta: 3342 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Con un &quot;m&oacute;dem&quot; RDSI, la llamada:";
 choices[17]= new Array();
 choices[17][0] = "Se establece cada vez que se intercambian datos";
 choices[17][1] = "Est&aacute; siempre establecida";
 choices[17][2] = "Puede ser configurable cu&aacute;ndo se quiere que se establezca la llamada";
 choices[17][3] = "Ninguna de las anteriores";
 answers[17] = choices[17][2];
 units[17] = "103,104,109";
 comments[17] = "Id Pregunta: 3342. ";


//  Id pregunta: 3984 AÃ±o de creación de pregunta: 2006-01-01
 questions[18]= "19)  En relaci&oacute;n con las redes de comunicaciones, &iquest;a qu&eacute; hace referencia el t&eacute;rmino &quot;VLAN trunking&quot;?";
 choices[18]= new Array();
 choices[18][0] = "Es el est&aacute;ndar 802.1Q";
 choices[18][1] = "Se refiere a etiquetar tramas ethernet";
 choices[18][2] = "Al proceso de transmitir m&uacute;ltiples VLAN por un &uacute;nico enlace";
 choices[18][3] = "A la se&ntilde;alizaci&oacute;n de VLAN";
 answers[18] = choices[18][2];
 units[18] = "101, 102";
 comments[18] = "Id Pregunta: 3984. ";


//  Id pregunta: 4078 AÃ±o de creación de pregunta: 2006-01-01
 questions[19]= "20)  &iquest;Es posible distribuir en una granja de servidores la l&oacute;gica de negocio de una empresa?";
 choices[19]= new Array();
 choices[19][0] = "Si utilizando .Net";
 choices[19][1] = "Si utilizando J2EE";
 choices[19][2] = "Si usando software libre";
 choices[19][3] = "todas las anteriores son ciertas";
 answers[19] = choices[19][3];
 units[19] = "113";
 comments[19] = "Id Pregunta: 4078. ";


//  Id pregunta: 4409 AÃ±o de creación de pregunta: 2007-01-01
 questions[20]= "21)  Indique cu&aacute;l de las siguientes afirmaciones es falsa en relaci&oacute;n a la planificaci&oacute;n de la capacidad de los sistemas de informaci&oacute;n:";
 choices[20]= new Array();
 choices[20][0] = "Se configura en torno a una situaci&oacute;n real y actual, sin hacer referencias a evoluciones futuras.";
 choices[20][1] = "Sirve para conocer y predecir el conjunto de recursos (instalaciones, m&aacute;quinas, equipos, etc.) necesarios para atender la carga de trabajo esperada en el futuro.";
 choices[20][2] = "Es un proceso sistem&aacute;tico.";
 choices[20][3] = "Determina las necesidades de recursos para suministrar el nivel de servicio requerido, actual y futuro.";
 answers[20] = choices[20][0];
 units[20] = "";
 comments[20] = "Id Pregunta: 4409. ";


//  Id pregunta: 4475 AÃ±o de creación de pregunta: 2007-01-01
 questions[21]= "22)  &iquest;Cu&aacute;les de los siguientes no ser&iacute;an objetivos de la ingenier&iacute;a inversa?";
 choices[21]= new Array();
 choices[21][0] = "Incrementar la comprensi&oacute;n global del sistema para el mantenimiento o nuevo desarrollo.";
 choices[21][1] = "Reducir la complejidad del sistema y generar vistas alternativas.";
 choices[21][2] = "Disminuci&oacute;n en los tiempos del ciclo de vida.";
 choices[21][3] = "Recuperar informaci&oacute;n perdida y detectar efectos laterales.";
 answers[21] = choices[21][2];
 units[21] = "91";
 comments[21] = "Id Pregunta: 4475. Castilla la Mancha 06";


//  Id pregunta: 4701 AÃ±o de creación de pregunta: 2007-01-01
 questions[22]= "23)  &iquest;C&oacute;mo se puede describir el formato de los datos en XML?";
 choices[22]= new Array();
 choices[22][0] = "Usando XSL";
 choices[22][1] = "Usando un DTD";
 choices[22][2] = "Usando un Nodo de Descripci&oacute;n (Description Node)";
 choices[22][3] = "Usando XSLT";
 answers[22] = choices[22][1];
 units[22] = "69";
 comments[22] = "Id Pregunta: 4701. Examen 2006 JCYL";


//  Id pregunta: 4704 AÃ±o de creación de pregunta: 2007-01-01
 questions[23]= "24)  Un applet de Java se ejecutar&aacute; en casi cualquier navegador porque ..";
 choices[23]= new Array();
 choices[23][0] = "el servidor tiene un built-in de JVM.";
 choices[23][1] = "el navegador es capaz de interpretar el c&oacute;digo fuente";
 choices[23][2] = "el navegador tiene un built-in de JVM";
 choices[23][3] = "los applets no necesitan una JVM.";
 answers[23] = choices[23][2];
 units[23] = "60";
 comments[23] = "Id Pregunta: 4704. Examen 2006 JCYL";


//  Id pregunta: 4750 AÃ±o de creación de pregunta: 2007-01-01
 questions[24]= "25)  Se&ntilde;ale la opci&oacute;n verdadera en relaci&oacute;n a las infraestructura de clave p&uacute;blica&hellip;";
 choices[24]= new Array();
 choices[24][0] = "Se ha de garantizar que ning&uacute;n usuario, salvo aquel para quien se ha generado una pareja de claves de un certificado, pueda jam&aacute;s llegar a disponer de ellas.";
 choices[24][1] = "La utilizaci&oacute;n de hardware criptogr&aacute;fico (HSM) tiene sentido en las Autoridades de Certificaci&oacute;n (CA) pero no as&iacute; en las Autoridades de Registro (RA)";
 choices[24][2] = "Es importante que la CA disponga de certificaci&oacute;n FIPS 140-2";
 choices[24][3] = "EMV es un tipo de certificado que no responde al est&aacute;ndar X.509";
 answers[24] = choices[24][3];
 units[24] = "74";
 comments[24] = "Id Pregunta: 4750. NULL";


//  Id pregunta: 4954 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  &iquest;Qu&eacute; t&eacute;cnica no es aplicable para dise&ntilde;ar un producto web usable y centrado en el usuario?:";
 choices[25]= new Array();
 choices[25][0] = "Card Sorting.";
 choices[25][1] = "L&oacute;gica Fuzzy.";
 choices[25][2] = "Eye Tracking.";
 choices[25][3] = "An&aacute;lisis de Secuencia.";
 answers[25] = choices[25][1];
 units[25] = "39";
 comments[25] = "Id Pregunta: 4954. Examen TIC B 2007";


//  Id pregunta: 5450 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  &iquest;Qu&eacute; no es sociedad de la informaci&oacute;n?";
 choices[26]= new Array();
 choices[26][0] = "Un estadio social y econ&oacute;mico de desarrollo";
 choices[26][1] = "La posibilidad de obtener y compartir &ldquo;cualquier&rdquo; informaci&oacute;n de manera instant&aacute;nea desde cualquier lugar";
 choices[26][2] = "Una situaci&oacute;n en la que la mayor parte de los empleos est&aacute;n asociados a la producci&oacute;n de bienes tangibles";
 choices[26][3] = "El cambio de los medios de generaci&oacute;n de riqueza desde los sectores industriales a los sectores de servicios";
 answers[26] = choices[26][2];
 units[26] = "21";
 comments[26] = "Id Pregunta: 5450. Castilla y Le&oacute;n";


//  Id pregunta: 5710 AÃ±o de creación de pregunta: 2009-01-01
 questions[27]= "28)  En las iniciales IDABC, la &quot;I&quot; y la &quot;D&quot; corresonden a:";
 choices[27]= new Array();
 choices[27][0] = "Innovative y Delivery";
 choices[27][1] = "Interoperable y Delivery";
 choices[27][2] = "Innovative y Development";
 choices[27][3] = "Interoperable y Development";
 answers[27] = choices[27][1];
 units[27] = "40";
 comments[27] = "Id Pregunta: 5710. ";


//  Id pregunta: 5874 AÃ±o de creación de pregunta: 2009-01-01
 questions[28]= "29)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as es usada espec&iacute;ficamente por el CRM de tipo anal&iacute;tico?";
 choices[28]= new Array();
 choices[28][0] = "Software de gesti&oacute;n de incidencias";
 choices[28][1] = "Software de gesti&oacute;n de correo electr&oacute;nico entrante y saliente";
 choices[28][2] = "Datawarehouse";
 choices[28][3] = "Call-center: software de visi&oacute;n unificada de clientes";
 answers[28] = choices[28][2];
 units[28] = "65";
 comments[28] = "Id Pregunta: 5874. MAP 2008 A1";


//  Id pregunta: 6078 AÃ±o de creación de pregunta: 2010-01-01
 questions[29]= "30)  Los procesos de Gesti&oacute;n de las Comunicaciones del Proyecto incluyen lo siguiente:";
 choices[29]= new Array();
 choices[29][0] = "An&aacute;lisis de las Comunicaciones, Dise&ntilde;o de las Comunicaciones, Informar del Rendimiento y Gestionar a los interesados.";
 choices[29][1] = "Planificaci&oacute;n de las Comunicaciones, Distribuci&oacute;n de la Informaci&oacute;n, Informar del Rendimiento y Gestionar a los Interesados.";
 choices[29][2] = "An&aacute;lisis de las Comunicaciones, Dise&ntilde;o de las Comunicaciones y Desarrollo de las Comunicaciones.";
 choices[29][3] = "An&aacute;lisis de las Comunicaciones y Dise&ntilde;o de las Comunicaciones.";
 answers[29] = choices[29][1];
 units[29] = "27";
 comments[29] = "Id Pregunta: 6078. ";


//  Id pregunta: 6147 AÃ±o de creación de pregunta: 2010-01-01
 questions[30]= "31)  El ADM (M&eacute;todo de diagramaci&oacute;n con flechas):";
 choices[30]= new Array();
 choices[30][0] = "Es un m&eacute;todo para crear un diagrama de red del cronograma del proyecto que utiliza casillas o rect&aacute;ngulos, denominados nodos, para representar actividades, que se conectan con flechas que muestran las dependencias.";
 choices[30][1] = "A y C son correctas.";
 choices[30][2] = "Es un m&eacute;todo para crear un diagrama de red del cronograma del proyecto que utiliza flechas para representar las actividades, que se conectan en nodos para mostrar sus dependencias.";
 choices[30][3] = "Ninguna de las anteriores es correcta";
 answers[30] = choices[30][2];
 units[30] = "28";
 comments[30] = "Id Pregunta: 6147. ";


//  Id pregunta: 6285 AÃ±o de creación de pregunta: 2010-01-01
 questions[31]= "32)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de un Plan de Sistemas?";
 choices[31]= new Array();
 choices[31][0] = "Planificar y controlar con eficacia el proceso de mecanizaci&oacute;n";
 choices[31][1] = "Conocer con cierta aproximaci&oacute;n y de forma anticipada las inversiones, los costes de funcionamiento, los resultados esperados, etc";
 choices[31][2] = "Definir los requerimientos t&eacute;cnicos necesarios y suficientes";
 choices[31][3] = "Todos lo son";
 answers[31] = choices[31][3];
 units[31] = "77";
 comments[31] = "Id Pregunta: 6285. ";


//  Id pregunta: 6459 AÃ±o de creación de pregunta: 2010-01-01
 questions[32]= "33)  El per&iacute;odo de validez de los certificados reconocidos no podr&aacute; ser superior a:";
 choices[32]= new Array();
 choices[32][0] = "Tres a&ntilde;os";
 choices[32][1] = "Diez a&ntilde;os";
 choices[32][2] = "Dos a&ntilde;os";
 choices[32][3] = "Cinco a&ntilde;os";
 answers[32] = choices[32][3];
 units[32] = "30";
 comments[32] = "Id Pregunta: 6459. Castilla La Mancha 2009 (Ley 9/2014, Disposici&oacute;n final sexta)";


//  Id pregunta: 6561 AÃ±o de creación de pregunta: 2010-01-01
 questions[33]= "34)  GSM se caracteriza por";
 choices[33]= new Array();
 choices[33][0] = "Enlace ascendente 880-905 MHz";
 choices[33][1] = "Enlace ascendente 890-915 MHz";
 choices[33][2] = "Enlace descendente 890-915 MHz";
 choices[33][3] = "Todas las respuestas anteriores son incorrectos";
 answers[33] = choices[33][1];
 units[33] = "108";
 comments[33] = "Id Pregunta: 6561. NULL";


//  Id pregunta: 7278 AÃ±o de creación de pregunta: 2010-01-01
 questions[34]= "35)  VMWare es un software de virtualiaci&oacute;n de ";
 choices[34]= new Array();
 choices[34][0] = "Sistema operativo";
 choices[34][1] = "Red";
 choices[34][2] = "Paravirtualizaci&oacute;n";
 choices[34][3] = "Hardware";
 answers[34] = choices[34][3];
 units[34] = "119";
 comments[34] = "Id Pregunta: 7278. NULL";


//  Id pregunta: 8182 AÃ±o de creación de pregunta: 2011-01-01
 questions[35]= "36)  El diagrama de despliegue se utiliza en M&eacute;trica versi&oacute;n 3 en:";
 choices[35]= new Array();
 choices[35][0] = "El dise&ntilde;o de la arquitectura de m&oacute;dulos del sistema.";
 choices[35][1] = "El dise&ntilde;o f&iacute;sico de datos";
 choices[35][2] = "La generaci&oacute;n de especificaciones de construcci&oacute;n.";
 choices[35][3] = "El dise&ntilde;o del modelo de sistemas de informaci&oacute;n.";
 answers[35] = choices[35][2];
 units[35] = "86";
 comments[35] = "Id Pregunta: 8182. Examen TIC A1 2010";


//  Id pregunta: 8188 AÃ±o de creación de pregunta: 2011-01-01
 questions[36]= "37)  Los &quot;mashups&quot; en Web 2.0:";
 choices[36]= new Array();
 choices[36][0] = "Son un tipo de wikis con interfaces AJAX.";
 choices[36][1] = "Son una aplicaci&oacute;n de la teor&iacute;a &quot;Long Tail&quot;.";
 choices[36][2] = "Son aplicaciones web que combinan datos o servicios de otras fuentes.";
 choices[36][3] = "Siempre se implementan con t&eacute;cnicas de &quot;screen scraping&quot;.";
 answers[36] = choices[36][2];
 units[36] = "120";
 comments[36] = "Id Pregunta: 8188. Examen TIC A1 2010";


//  Id pregunta: 8240 AÃ±o de creación de pregunta: 2011-01-01
 questions[37]= "38)  Seg&uacute;n el modelo de referencia de workflow de la WfMC (Workflow Management Coalition), &iquest;cu&aacute;l de los siguientes elementos interpreta la descripci&oacute;n de los workflows y controla las diferentes instancias de &eacute;stos, as&iacute; como a&ntilde;ade elementos a la lista de trabajo de los usuarios e invoca las aplicaciones necesarias? ";
 choices[37]= new Array();
 choices[37][0] = "El motor de workflow (Workflow engine).";
 choices[37][1] = "La interfaz de programaci&oacute;n de aplicaciones de workflow (WAPI o Workflow Application Programming Interface).";
 choices[37][2] = "El cliente de workflow (Workflow client)";
 choices[37][3] = "El servicio de representaci&oacute;n de workflow (Workflow Enactment Service).";
 answers[37] = choices[37][3];
 units[37] = "71";
 comments[37] = "Id Pregunta: 8240. Examen TIC A2 2010";


//  Id pregunta: 8261 AÃ±o de creación de pregunta: 2011-01-01
 questions[38]= "39)  El empleo de redes neuronales para el reconocimiento de caracteres:";
 choices[38]= new Array();
 choices[38][0] = "Usa mecanismos basados en l&oacute;gica borrosa.";
 choices[38][1] = "No permite explicar f&aacute;cilmente las razones por las que se obtiene un determinado resultado.";
 choices[38][2] = "Se basa en la obtenci&oacute;n de un vector de caracter&iacute;sticas";
 choices[38][3] = "Hace que el reconocimiento se vea m&aacute;s afectado por defectos de la imagen que otros m&eacute;todos como el de comparaci&oacute;n de matrices.";
 answers[38] = choices[38][1];
 units[38] = "63,64";
 comments[38] = "Id Pregunta: 8261. Examen TIC A1 2010";


//  Id pregunta: 8381 AÃ±o de creación de pregunta: 2011-01-01
 questions[39]= "40)  La tecnolog&iacute;a de transmisi&oacute;n 100Base-FX:";
 choices[39]= new Array();
 choices[39][0] = "Utiliza cable UTP de categor&iacute;a 5 o superior.";
 choices[39][1] = "Tiene una longitud m&aacute;xima de 2 kil&oacute;metros para transmisiones half-duplex y 400 metros para transmisiones full-duplex.";
 choices[39][2] = "Es compatible con la tecnolog&iacute;a 10Base&bull;FL.";
 choices[39][3] = "Puede usar conectores MIC.";
 answers[39] = choices[39][3];
 units[39] = "99";
 comments[39] = "Id Pregunta: 8381. Examen TIC A2 2010";


//  Id pregunta: 8385 AÃ±o de creación de pregunta: 2011-01-01
 questions[40]= "41)  &iquest;Cu&aacute;l de los siguientes protocolos de enrutamiento NO soporta VLSM (Variable Length Subnet Mask - M&aacute;scara de subred de tama&ntilde;o variable)?:";
 choices[40]= new Array();
 choices[40][0] = "RIPv2.";
 choices[40][1] = "EIGRP.";
 choices[40][2] = "IGRP.";
 choices[40][3] = "OSPF.";
 answers[40] = choices[40][2];
 units[40] = "112,102";
 comments[40] = "Id Pregunta: 8385. Examen TIC A2 2010";


//  Id pregunta: 8482 AÃ±o de creación de pregunta: 2011-01-01
 questions[41]= "42)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta, considerando diferencias entre IPv4 e IPv6?";
 choices[41]= new Array();
 choices[41][0] = "Ipv6 duplica el tama&ntilde;o de la direcci&oacute;n desde los 32 bits a los 64 bits.";
 choices[41][1] = "Algunos campos de la cabecera de Ipv4 han sido eliminados o convertidos en opcionales para reducir el coste de proceso normal de los paquetes y limitar el coste en ancho de banda de la cabecera Ipv6.";
 choices[41][2] = "IPV6 complica la cabecera, al a&ntilde;adir campos a los que ya tenia la cabecea Ipv4, para permitir mayor capacidad de configuraci&oacute;n, lo que supone, por contra, un mayor coste de proceso, que se compensar&aacute; por la mayor potencia del hardware.";
 choices[41][3] = "IPv6 triplica el tama&ntilde;o de la direcci&oacute;n desde los 32 bits a los 96 bits.";
 answers[41] = choices[41][1];
 units[41] = "100";
 comments[41] = "Id Pregunta: 8482. Examen TIC A2 2010 interna";


//  Id pregunta: 8510 AÃ±o de creación de pregunta: 2011-01-01
 questions[42]= "43)  El IVR (lnteractive Voice Response), para brindar mejores servicios involucra otras tecnolog&iacute;as, indicar la ERR&Oacute;NEA:";
 choices[42]= new Array();
 choices[42][0] = "DTMF (Dual Tone Multi Frequency) es la tecnolog&iacute;a de tonos utilizada para el marcado. ";
 choices[42][1] = "TTS (Text To Speech) le da capacidad de transformar texto a audio que escucha el operador. ";
 choices[42][2] = " ASR (Reconocimiento de Voz) le da la capacidad de reconocer las palabras del usuario y aceptarlas como &oacute;rdenes. ";
 choices[42][3] = "MSCML (Media Server Control Markup Language): lo que le permite controlar cualquier Media Resource Function (MRF). ";
 answers[42] = choices[42][3];
 units[42] = "94";
 comments[42] = "Id Pregunta: 8510. Examen TIC A2 2010";


//  Id pregunta: 8640 AÃ±o de creación de pregunta: 2011-01-01
 questions[43]= "44)  Si tenemos las dependencias funcionales (A, B) -&gt; C, B -&gt; D y la siguiente relaci&oacute;n (A, B, C, D) donde (A, B) es la clave candidata. &iquest;Cu&aacute;l seria el resultado de aplicar la 2&ordf; forma normal?";
 choices[43]= new Array();
 choices[43][0] = "(A, B, C), (A, B, D).";
 choices[43][1] = "(A, B, C), (B, D).";
 choices[43][2] = "(A, B, C),  (A, D).";
 choices[43][3] = "Ya est&aacute; en 2FN.";
 answers[43] = choices[43][1];
 units[43] = "57, 58";
 comments[43] = "Id Pregunta: 8640. Examen TIC A2 2010 interna";


//  Id pregunta: 8770 AÃ±o de creación de pregunta: 2011-01-01
 questions[44]= "45)  &iquest;Cu&aacute;l es la versi&oacute;n extendida del protocolo BOOTP?";
 choices[44]= new Array();
 choices[44][0] = "DHCP";
 choices[44][1] = "RARP";
 choices[44][2] = "RTSP";
 choices[44][3] = "DNS";
 answers[44] = choices[44][0];
 units[44] = "100";
 comments[44] = "Id Pregunta: 8770. Examen TIC A2 2010 interna";


//  Id pregunta: 8898 AÃ±o de creación de pregunta: 2011-01-01
 questions[45]= "46)  Se&ntilde;ale la respuesta correcta relativa a m&eacute;todos de asignaci&oacute;n de pesos a los criterios";
 choices[45]= new Array();
 choices[45][0] = "El m&eacute;todo Delphi es un m&eacute;todo de asignaci&oacute;n indirecta";
 choices[45][1] = "El m&eacute;todo de las Utilidades Relativas es un m&eacute;todo de asignaci&oacute;n directa y el m&eacute;todo de AHP es un m&eacute;todo de asignaci&oacute;n indirecta";
 choices[45][2] = "Tanto el m&eacute;todo de las Utilidades Relativas como el m&eacute;todo AHP son m&eacute;todos de asignaci&oacute;n directa";
 choices[45][3] = "El m&eacute;todo Delphi es un m&eacute;todo de asignaci&oacute;n directa y el m&eacute;todo AHP es un m&eacute;todo de asignaci&oacute;n indirecta";
 answers[45] = choices[45][3];
 units[45] = "34";
 comments[45] = "Id Pregunta: 8898. ";


//  Id pregunta: 8970 AÃ±o de creación de pregunta: 2011-01-01
 questions[46]= "47)  Entre los agentes del Plan General de Garant&iacute;a de la Calidad no figura:";
 choices[46]= new Array();
 choices[46][0] = "EGC (Eq garant&iacute;a calidad)";
 choices[46][1] = "EDS (Equipo de desarrollo)";
 choices[46][2] = "DIR (Director de proyecto)";
 choices[46][3] = "CDC (Comit&eacute; directivo de calidad)";
 answers[46] = choices[46][3];
 units[46] = "87,88,92";
 comments[46] = "Id Pregunta: 8970. ";


//  Id pregunta: 9062 AÃ±o de creación de pregunta: 2011-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l de las siguientes es una infracci&oacute;n muy grave seg&uacute;n la normativa de protecci&oacute;n de datos de car&aacute;cter personal?";
 choices[47]= new Array();
 choices[47][0] = "La vulneraci&oacute;n del deber de guardar secreto acerca del tratamiento de los datos de car&aacute;cter personal";
 choices[47][1] = "No atender, u obstaculizar de forma sistem&aacute;tica el ejercicio de los derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n u oposici&oacute;n";
 choices[47][2] = "No cesar en el tratamiento il&iacute;cito de datos de car&aacute;cter personal cuando existiese un previo requerimiento del Director de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos para ello";
 choices[47][3] = "No solicitar la inscripci&oacute;n del fichero de datos de car&aacute;cter personal en el Registro General de Protecci&oacute;n de Datos";
 answers[47] = choices[47][2];
 units[47] = "29";
 comments[47] = "Id Pregunta: 9062. NULL";


//  Id pregunta: 9080 AÃ±o de creación de pregunta: 2013-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l es el est&aacute;ndar PKCS que fue la base para el est&aacute;ndar S/MIME?";
 choices[48]= new Array();
 choices[48][0] = "PKCS#1";
 choices[48][1] = "PKCS#6";
 choices[48][2] = "PKCS#7";
 choices[48][3] = "PKCS#8";
 answers[48] = choices[48][3];
 units[48] = "111";
 comments[48] = "Id Pregunta: 9080. NULL";


//  Id pregunta: 9101 AÃ±o de creación de pregunta: 2013-01-01
 questions[49]= "50)  En el lenguaje ODRL, &iquest;c&oacute;mo se identifica de forma &uacute;nica el contenido digital a proteger?";
 choices[49]= new Array();
 choices[49][0] = "Mediante el elemento Assets.";
 choices[49][1] = "Mediante el elemento Permission.";
 choices[49][2] = "Mediante el elemento Constraints.";
 choices[49][3] = "Todas son falsas.";
 answers[49] = choices[49][0];
 units[49] = "37";
 comments[49] = "Id Pregunta: 9101. ";


//  Id pregunta: 9158 AÃ±o de creación de pregunta: 2013-01-01
 questions[50]= "51)  NO se encuentra entre las iniciativas de IMS:";
 choices[50]= new Array();
 choices[50][0] = "Empaquetado de metadatos";
 choices[50][1] = "Interoperabilidad de preguntas y tests";
 choices[50][2] = "Empaquetado de informaci&oacute;n del alumno";
 choices[50][3] = "Empaquetado de contenidos";
 answers[50] = choices[50][0];
 units[50] = "66";
 comments[50] = "Id Pregunta: 9158. ";


//  Id pregunta: 9181 AÃ±o de creación de pregunta: 2013-01-01
 questions[51]= "52)  En procesamiento de im&aacute;genes, la transformada de Hough se utiliza para:";
 choices[51]= new Array();
 choices[51][0] = "Encontrar l&iacute;neas o c&iacute;rculos en im&aacute;genes";
 choices[51][1] = "Detectar los falsos bordes que se hayan encontrado mediante el Algoritmo de Marr-Hildred";
 choices[51][2] = "Dividir una imagen en varias regiones";
 choices[51][3] = "Crear histogramas de las im&aacute;genes precargadas";
 answers[51] = choices[51][0];
 units[51] = "93";
 comments[51] = "Id Pregunta: 9181. NULL";


//  Id pregunta: 9192 AÃ±o de creación de pregunta: 2013-01-01
 questions[52]= "53)  &iquest;C&oacute;mo se realiza la protecci&oacute;n de un programa de ordenador?";
 choices[52]= new Array();
 choices[52][0] = "A la hora de crear el programa, el autor debe decidir qu&eacute; tipo de protecci&oacute;n quiere otorgarle, si a trav&eacute;s de la ley de patentes o a trav&eacute;s de la ley de propiedad intelectual";
 choices[52][1] = "A traves de la ley de patentes";
 choices[52][2] = "Nunca puede realizarse a trav&eacute;s de la ley de patentes";
 choices[52][3] = "Si el programa forma parte de una patente, tambi&eacute;n estar&aacute; protegido por la ley de propiedad intelectual";
 answers[52] = choices[52][3];
 units[52] = "36";
 comments[52] = "Id Pregunta: 9192. ";


//  Id pregunta: 9341 AÃ±o de creación de pregunta: 2013-01-01
 questions[53]= "54)  &iquest; Cu&aacute;l de los siguientes no es un nivel de madurez de CMMI ?";
 choices[53]= new Array();
 choices[53][0] = "Definido";
 choices[53][1] = "Gestionado";
 choices[53][2] = "Gestionado de forma cuantitativa";
 choices[53][3] = "Repetible";
 answers[53] = choices[53][3];
 units[53] = "87";
 comments[53] = "Id Pregunta: 9341. NULL";


//  Id pregunta: 9350 AÃ±o de creación de pregunta: 2013-01-01
 questions[54]= "55)  DSS1 es:";
 choices[54]= new Array();
 choices[54][0] = "Un protocolo utilizado en ADSL, en la capa de red, para la gesti&oacute;n de conexiones con el DSLAM";
 choices[54][1] = "Un protocolo utilizado en RDSI, de la capa de red, para gesti&oacute;n de conexiones.";
 choices[54][2] = "Un protocolo utilizado en RDSI en la capa de enlace, para el control de acceso al canal D";
 choices[54][3] = "Un protocolo utilizado en ADSL, en la capa de enlace, para el acceso m&uacute;ltiple a los servicios";
 answers[54] = choices[54][1];
 units[54] = "103";
 comments[54] = "Id Pregunta: 9350. Pag. 8 astic 2011";


//  Id pregunta: 9444 AÃ±o de creación de pregunta: 2013-01-01
 questions[55]= "56)  En relaci&oacute;n al proceso de An&aacute;lisis de Sistemas de Informaci&oacute;n (ASI) de M&eacute;trica v.3, un producto de la actividad Establecimiento de Requisitos es:";
 choices[55]= new Array();
 choices[55][0] = "Modelo conceptual de datos.";
 choices[55][1] = "Modelo de casos de uso.";
 choices[55][2] = "Cat&aacute;logo de usuarios.";
 choices[55][3] = "Cat&aacute;logo de excepciones.";
 answers[55] = choices[55][1];
 units[55] = "86";
 comments[55] = "Id Pregunta: 9444. Examen AGE TIC A1 2011";


//  Id pregunta: 9527 AÃ±o de creación de pregunta: 2013-01-01
 questions[56]= "57)  Se&ntilde;ale la afimaci&oacute;n correcta respecto al protocolo SIP";
 choices[56]= new Array();
 choices[56][0] = "Proporciona servicios que implementan modelos de petici&oacute;n-respuesta";
 choices[56][1] = "Proporciona primitivas que implementan modelos de petici&oacute;n-respuesta";
 choices[56][2] = "Sobre SIP se monta RTP que se utiliza para negociar las capacidades de la comunicaci&oacute;n";
 choices[56][3] = "Los elementos involucrados en la videoconferencia est&aacute;n representados por URLs";
 answers[56] = choices[56][1];
 units[56] = "117";
 comments[56] = "Id Pregunta: 9527. NULL";


//  Id pregunta: 9660 AÃ±o de creación de pregunta: 2014-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de los siguientes es un modelo de mejora de calidad del SW?";
 choices[57]= new Array();
 choices[57][0] = "BOOTSTRAP";
 choices[57][1] = "TRILLIUM";
 choices[57][2] = "MOSCA";
 choices[57][3] = "Todos los anterires";
 answers[57] = choices[57][3];
 units[57] = "92";
 comments[57] = "Id Pregunta: 9660. MOSCA (Modelo Sist&eacute;mico de Calidad), BOOTSTRAP (Comisi&oacute;n Europea), TRILLIUM (Bell Canad&aacute;)";


//  Id pregunta: 9675 AÃ±o de creación de pregunta: 2014-01-01
 questions[58]= "59)  El serviceware permite:";
 choices[58]= new Array();
 choices[58][0] = "Gestionar el uso del Cl&uacute;ster que hace cada usuario.";
 choices[58][1] = "Gestionar el uso del Grid que hace cada usuario.";
 choices[58][2] = "Controlar la red de comunicaciones del Cl&uacute;ster.";
 choices[58][3] = "Controlar la red de comunicaciones del Grid.";
 answers[58] = choices[58][1];
 units[58] = "45";
 comments[58] = "Id Pregunta: 9675. ";


//  Id pregunta: 9748 AÃ±o de creación de pregunta: 2014-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes pautas est&aacute; asociada al principio &quot;comprensible&quot; de la WCAG 2.0?";
 choices[59]= new Array();
 choices[59][0] = "Alternativas textuales.";
 choices[59][1] = "Distinguible.";
 choices[59][2] = "Predecible.";
 choices[59][3] = "Compatible.";
 answers[59] = choices[59][2];
 units[59] = "39";
 comments[59] = "Id Pregunta: 9748. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9773 AÃ±o de creación de pregunta: 2014-01-01
 questions[60]= "61)  Podremos almacenar un fichero de 6 GB en un dispositivo, si el sistema de ficheros con el que est&aacute; formateado es:";
 choices[60]= new Array();
 choices[60][0] = "FAT32.";
 choices[60][1] = "NTFS. ";
 choices[60][2] = "HPFS";
 choices[60][3] = "ISO 9660:1988 Level 2. ";
 answers[60] = choices[60][1];
 units[60] = "52";
 comments[60] = "Id Pregunta: 9773. Examen TIC A2 2013";


//  Id pregunta: 9778 AÃ±o de creación de pregunta: 2014-01-01
 questions[61]= "62)  &iquest;Con qu&eacute; directiva se declara una p&aacute;gina maestra en ASP.Net?";
 choices[61]= new Array();
 choices[61][0] = "Master";
 choices[61][1] = "MasterPage";
 choices[61][2] = "Master.Page";
 choices[61][3] = "Page ";
 answers[61] = choices[61][0];
 units[61] = "59, 115";
 comments[61] = "Id Pregunta: 9778. Examen TIC A2 2013";


//  Id pregunta: 9962 AÃ±o de creación de pregunta: 2014-01-01
 questions[62]= "63)  Los dos componentes principales de ADO.NET para el acceso a los datos y su manipulaci&oacute;n son:";
 choices[62]= new Array();
 choices[62][0] = ".NET Framework Data Connectivity y ADO.NET DataSet";
 choices[62][1] = ".NET Framework Data Providers y ADO.NET ResultSet";
 choices[62][2] = ".NET Framework Data Connectivity y ADO.NET ResultSet";
 choices[62][3] = ".NET Framework Data Providers y ADO.NET DataSet";
 answers[62] = choices[62][3];
 units[62] = "59,115";
 comments[62] = "Id Pregunta: 9962. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 10055 AÃ±o de creación de pregunta: 2014-01-01
 questions[63]= "64)  De los 32 bits que tiene una cabecera MPLS, &iquest;cu&aacute;ntos est&aacute;n reservados para el valor de la etiqueta MPLS seg&uacute;n la RFC 3032?";
 choices[63]= new Array();
 choices[63][0] = "32 ";
 choices[63][1] = "24";
 choices[63][2] = "20 ";
 choices[63][3] = "16";
 answers[63] = choices[63][2];
 units[63] = "100";
 comments[63] = "Id Pregunta: 10055. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10069 AÃ±o de creación de pregunta: 2014-01-01
 questions[64]= "65)  Analizando los problemas con la calidad de servicio en VoIP, &iquest;qu&eacute; se entiende por jitter?";
 choices[64]= new Array();
 choices[64][0] = "Una reflexi&oacute;n retardada de la se&ntilde;al ac&uacute;stica original.";
 choices[64][1] = "El tiempo que tarda un paquete en llegar desde la fuente al destino.";
 choices[64][2] = "Variaci&oacute;n en el tiempo de llegada de los paquetes, causada por congesti&oacute;n de red, perdida de sincronizaci&oacute;n o por las diferentes rutas seguidas.";
 choices[64][3] = "Cantidad de informaci&oacute;n o de datos que se puede enviar a trav&eacute;s de una conexi&oacute;n de red en un per&iacute;odo de tiempo dado.";
 answers[64] = choices[64][2];
 units[64] = "109";
 comments[64] = "Id Pregunta: 10069. TIC A2, libre, Examen 2013";


//  Id pregunta: 10084 AÃ±o de creación de pregunta: 2014-01-01
 questions[65]= "66)  De acuerdo al marco de desarrollo PUDS, &iquest;cu&aacute;l de los siguientes NO es un flujo de trabajo de soporte?";
 choices[65]= new Array();
 choices[65][0] = "Gesti&oacute;n de la configuraci&oacute;n";
 choices[65][1] = "Gesti&oacute;n";
 choices[65][2] = "Entorno de desarrollo";
 choices[65][3] = "Pruebas";
 answers[65] = choices[65][3];
 units[65] = "76";
 comments[65] = "Id Pregunta: 10084. NULL";


//  Id pregunta: 10096 AÃ±o de creación de pregunta: 2014-01-01
 questions[66]= "67)  En el an&aacute;lisis de requisitos, el dominio de la informaci&oacute;n debe analizarse desde 3 puntos de vista. &iquest;Cu&aacute;l NO es uno de ellos?";
 choices[66]= new Array();
 choices[66][0] = "Flujo de la informaci&oacute;n";
 choices[66][1] = "Contenido de la informaci&oacute;n";
 choices[66][2] = "Modelo de la informaci&oacute;n";
 choices[66][3] = "Estructura de la informaci&oacute;n";
 answers[66] = choices[66][2];
 units[66] = "78";
 comments[66] = "Id Pregunta: 10096. NULL";


//  Id pregunta: 10099 AÃ±o de creación de pregunta: 2014-01-01
 questions[67]= "68)  Se&ntilde;ala la afirmaci&oacute;n correcta sobre el an&aacute;lisis estructurado";
 choices[67]= new Array();
 choices[67][0] = "El modelo ambiental se compone del modelo esencial y el modelo de comportamiento.";
 choices[67][1] = "El modelo esencial se compone del modelo ambiental y el modelo de comportamiento.";
 choices[67][2] = "El modelo de compotamiento se compone del modelo ambiental y el modelo esencial.";
 choices[67][3] = "El modelo ambiental se compone del modelo estructural y el modelo esencial.";
 answers[67] = choices[67][1];
 units[67] = "81";
 comments[67] = "Id Pregunta: 10099. NULL";


//  Id pregunta: 10111 AÃ±o de creación de pregunta: 2014-01-01
 questions[68]= "69)  El est&aacute;ndar Wimax est&aacute; especificado en la norma:";
 choices[68]= new Array();
 choices[68][0] = "IEEE 802.11";
 choices[68][1] = "IEEE 802.16";
 choices[68][2] = "IEEE 802.15";
 choices[68][3] = "IEEE 802.19";
 answers[68] = choices[68][1];
 units[68] = "101";
 comments[68] = "Id Pregunta: 10111. ";


//  Id pregunta: 10128 AÃ±o de creación de pregunta: 2014-01-01
 questions[69]= "70)  En la gesti&oacute;n de redes, el agente de gesti&oacute;n se encuentra en: ";
 choices[69]= new Array();
 choices[69][0] = "El elemento gestionado";
 choices[69][1] = "El nodo de gesti&oacute;n central";
 choices[69][2] = "Nodos intermedios que act&uacute;an como relay";
 choices[69][3] = "El agente de gesti&oacute;n no es un elemento de la gesti&oacute;n de red.";
 answers[69] = choices[69][0];
 units[69] = "104";
 comments[69] = "Id Pregunta: 10128. ";


//  Id pregunta: 10180 AÃ±o de creación de pregunta: 2014-01-01
 questions[70]= "71)  Respecto las relaciones de agregaci&oacute;n y composici&oacute;n entre clases de objetos, es cierto que:";
 choices[70]= new Array();
 choices[70][0] = "La composici&oacute;n expresa una relaci&oacute;n &quot;todo / parte&quot; o &quot;forma parte de&quot; entre los objetos implicados. La agregaci&oacute;n es una forma m&aacute;s fuerte de composici&oacute;n, de forma que si el &quot;objeto hijo&quot; es eliminado o desaparece, el &quot;objeto padre&quot; deja de existir.";
 choices[70][1] = "La agregaci&oacute;n expresa una relaci&oacute;n &quot;todo / parte&quot; o &quot;forma parte de&quot; entre los objetos implicados. La composici&oacute;n es una forma m&aacute;s fuerte de agregaci&oacute;n, de forma que si el &quot;objeto hijo&quot; es eliminado o desaparece, el &quot;objeto padre&quot; deja de existir.";
 choices[70][2] = "La a) y adem&aacute;s, la composici&oacute;n se representa en el diagrama de clases mediante una l&iacute;nea de asociaci&oacute;n entre las clases implicadas, finalizada en un rombo relleno en el extremo del &quot;todo&quot; ";
 choices[70][3] = "La b) y adem&aacute;s, la agregaci&oacute;n se representa en el diagrama de clases mediante una l&iacute;nea de asociaci&oacute;n entre las clases implicadas, finalizada en un rombo vac&iacute;o en el extremo del &quot;todo&quot; ";
 answers[70] = choices[70][3];
 units[70] = "82";
 comments[70] = "Id Pregunta: 10180. ";


//  Id pregunta: 10185 AÃ±o de creación de pregunta: 2014-01-01
 questions[71]= "72)  El n&uacute;mero m&iacute;nimo y m&aacute;ximo de ocurrencias de un tipo de entidad que pueden estar relacionadas con una ocurrencia del otro u otros tipos de entidad participantes en la relaci&oacute;n se denomina:";
 choices[71]= new Array();
 choices[71][0] = "Tipo de correspondencia";
 choices[71][1] = "Cardinalidad de la relaci&oacute;n";
 choices[71][2] = "Grado";
 choices[71][3] = "No es de inter&eacute;s en el modelo E-R y por tanto no tiene una denominaci&oacute;n espec&iacute;fica";
 answers[71] = choices[71][1];
 units[71] = "80";
 comments[71] = "Id Pregunta: 10185. NULL";


//  Id pregunta: 10245 AÃ±o de creación de pregunta: 2014-01-01
 questions[72]= "73)  Juan desarrolla un software y publica el c&oacute;digo fuente bajo la licencia GPL. Antonio realiza modificaciones al mismo y distribuye los archivos binarios desde su web site. &iquest;Cu&aacute;l de las siguientes opciones cumple con las obligaciones de Antonio sobre distribuir el c&oacute;digo fuente del software modificado?I) Puede distribuir el c&oacute;digo fuente original de Juan, mateniendo las notificaciones de copyrightII) Puede distribuir el c&oacute;digo fuente junto a los binariosIII) Puede distribuir los parches aplicados al c&oacute;digo fuente originalIV) Puede distribuir los parches aplicados al c&oacute;digo fuente original, junto con &eacute;ste";
 choices[72]= new Array();
 choices[72][0] = "I o II, y nada m&aacute;s";
 choices[72][1] = "S&oacute;lo II";
 choices[72][2] = "II o IV, pero nada m&aacute;s";
 choices[72][3] = "Cualquiera de las 4";
 answers[72] = choices[72][2];
 units[72] = "61";
 comments[72] = "Id Pregunta: 10245. ";


//  Id pregunta: 10306 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de estas instrucciones NO vac&iacute;a el contenido del fichero con nombre 2013 en Linux?";
 choices[73]= new Array();
 choices[73][0] = "true &gt; 2013";
 choices[73][1] = "&gt; 2013";
 choices[73][2] = "cat /dev/null &gt; 2013";
 choices[73][3] = "| &gt; 2013";
 answers[73] = choices[73][3];
 units[73] = "53";
 comments[73] = "Id Pregunta: 10306. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10364 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  En relaci&oacute;n con IEC (International Electrotechnical Commission), se&ntilde;ale la respuesta incorrecta:";
 choices[74]= new Array();
 choices[74][0] = "El equivalente europeo es CENELEC (Comit&eacute; Europeo de Normalizaci&oacute;n Electrot&eacute;cnica)";
 choices[74][1] = "La representaci&oacute;n espa&ntilde;ola como miembro de pleno derecho recae en AENOR";
 choices[74][2] = "Elabora normas a nivel t&eacute;cnico en materia el&eacute;ctrica y electrot&eacute;cnica";
 choices[74][3] = "Las normas elaboradas por el CENELEC se denominan CEN";
 answers[74] = choices[74][3];
 units[74] = "42";
 comments[74] = "Id Pregunta: 10364. Las normas elaboradas por el CENELEC se denominan EN (Norma Europea)";


//  Id pregunta: 10431 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  En la arquitectura SOA (Arquitectura Orientada a Servicios)";
 choices[75]= new Array();
 choices[75][0] = "se hace incompatible el uso de servicios web.";
 choices[75][1] = "los servicios encapsulan sus funcionalidades. ";
 choices[75][2] = "los servicios mantienen un fuerte acoplamiento.";
 choices[75][3] = "os servicios dependen fuertemente de la plataforma subyacente.";
 answers[75] = choices[75][1];
 units[75] = "51";
 comments[75] = "Id Pregunta: 10431. Examen TIC A1 2013";


//  Id pregunta: 10535 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l de las siguientes no es una ventaja de los discos duros de estado s&oacute;lido respecto a los tradicionales?";
 choices[76]= new Array();
 choices[76][0] = "Generan menos ruido y calor que los discos duros tradicionales";
 choices[76][1] = "Tienen un menor consumo energ&eacute;tico";
 choices[76][2] = "La latencia de acceso a los datos es menor";
 choices[76][3] = "Tienen mayor velocidad en operaciones I/O secuenciales";
 answers[76] = choices[76][3];
 units[76] = "48";
 comments[76] = "Id Pregunta: 10535. NULL";


//  Id pregunta: 10547 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  El primer paso a la hora de desarrollar un Plan de Continuidad de Negocio es:";
 choices[77]= new Array();
 choices[77][0] = "Clasificar los sistemas seg&uacute;n su importancia";
 choices[77][1] = "Establecer una estrategia de recuperaci&oacute;n de desastres";
 choices[77][2] = "determinar el tiempo cr&iacute;tico de recuperaci&oacute;n";
 choices[77][3] = "Realizar una clasificaci&oacute;n del riesgo";
 answers[77] = choices[77][0];
 units[77] = "31, 32, 33";
 comments[77] = "Id Pregunta: 10547. NULL";


//  Id pregunta: 10590 AÃ±o de creación de pregunta: 2015-01-01
 questions[78]= "79)  La Decisi&oacute;n 922/2009/CE del Parlamento Europeo y del Consejo:";
 choices[78]= new Array();
 choices[78][0] = "Tiene como prioridad un crecimiento inteligente.";
 choices[78][1] = "Es la base legal del programa ISA.";
 choices[78][2] = "Desarrolla el Esquema Europeo de Seguridad.";
 choices[78][3] = "";
 answers[78] = choices[78][1];
 units[78] = "30";
 comments[78] = "Id Pregunta: 10590. ";


//  Id pregunta: 10611 AÃ±o de creación de pregunta: 2015-01-01
 questions[79]= "80)  En una arquitectura PKI, la Autoridad de Validaci&oacute;n:";
 choices[79]= new Array();
 choices[79][0] = "Verifica la identidad del titular antes de la expedici&oacute;n del certificado.";
 choices[79][1] = "Comprueba si un certificado ha sido revocado mediante servicios de directorio, CRL y OCSP.";
 choices[79][2] = "Expide, gestiona y revoca certificados digitales.";
 choices[79][3] = "Procesa solicitudes de revocaci&oacute;n de certificados.";
 answers[79] = choices[79][1];
 units[79] = "74";
 comments[79] = "Id Pregunta: 10611. ";


//  Id pregunta: 10621 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  Se&ntilde;ale la respuesta correcta:";
 choices[80]= new Array();
 choices[80][0] = "Para desarrollar una aplicaci&oacute;n distribuida en Java es imprescindible la utilizaci&oacute;n de un servidor de aplicaciones.";
 choices[80][1] = "Weblogic es un contenedor de servlets.";
 choices[80][2] = "Wildfly es la versi&oacute;n gratuita de Jboss.";
 choices[80][3] = "Spring es un m&oacute;dulo de Java EE.";
//  Id pregunta: 10632 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  La actividad &ldquo;Elaboraci&oacute;n del Modelo de Datos&rdquo; forma parte del proceso de M&eacute;trica v3:";
 choices[81]= new Array();
 choices[81][0] = "Estudio de Viabilidad del Sistema (EVS)";
 choices[81][1] = "Planificaci&oacute;n del Sistema de Informaci&oacute;n (PSI)";
 choices[81][2] = "An&aacute;lisis del Sistema de Informaci&oacute;n (ASI)";
 choices[81][3] = "Dise&ntilde;o del Sistema de Informaci&oacute;n (DSI)";
 answers[81] = choices[81][2];
 units[81] = "86";
 comments[81] = "Id Pregunta: 10632. ";


//  Id pregunta: 10809 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  Indique la afirmaci&oacute;n FALSA respecto a VoiceXML:";
 choices[82]= new Array();
 choices[82][0] = "Es un lenguaje basado en XML.";
 choices[82][1] = "VoiceXML tiene como origen el Phone Markup Language (PML) de AT&amp;T.";
 choices[82][2] = "Es una recomendaci&oacute;n de la W3C.";
 choices[82][3] = "La &uacute;ltima versi&oacute;n es la VoiceXML 2.0.";
 answers[82] = choices[82][3];
 units[82] = "69";
 comments[82] = "Id Pregunta: 10809. Examen GSI 2014";


//  Id pregunta: 10882 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  Tama&ntilde;o destinado en una trama b&aacute;sica Ethernet (IEEE 802.3-2012) para el payload:";
 choices[83]= new Array();
 choices[83][0] = "Tiene un m&iacute;nimo de 64 Bytes hasta un m&aacute;ximo de 1500 Bytes.";
 choices[83][1] = "Tiene un m&iacute;nimo de 16 Bytes hasta un m&aacute;ximo de 1000 Bytes.";
 choices[83][2] = "Tiene un m&iacute;nimo de 46 Bytes hasta un m&aacute;ximo de 1500 Bytes.";
 choices[83][3] = "Tiene un m&iacute;nimo de 32 Bytes hasta un m&aacute;ximo de 1000 Bytes.";
 answers[83] = choices[83][2];
 units[83] = "100";
 comments[83] = "Id Pregunta: 10882. Examen GSI 2014";


//  Id pregunta: 10931 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  En materia de protecci&oacute;n de datos, el ejercicio del derecho de cancelaci&oacute;n dar&aacute; lugar:";
 choices[84]= new Array();
 choices[84][0] = "A que se modifiquen los datos que resulten ser falsos o inexactos.";
 choices[84][1] = "A que se modifiquen los datos que resulten ser inadecuados o inexactos.";
 choices[84][2] = "A que se supriman los datos que resulten ser inadecuados o excesivos.";
 choices[84][3] = "A que se supriman los datos que resulten ser inexactos o excesivos.";
 answers[84] = choices[84][2];
 units[84] = "29";
 comments[84] = "Id Pregunta: 10931. TIC A1 AGE 2014";


//  Id pregunta: 10949 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  La cuarta generaci&oacute;n de telefon&iacute;a m&oacute;vil (4G) incluye:";
 choices[85]= new Array();
 choices[85][0] = "El requisito establecido por la UIT de velocidades m&aacute;ximas de transmisi&oacute;n de datos mejoradas: 100 Mbit/s para una movilidad alta y de 1 Gbit/s para una movilidad baja.";
 choices[85][1] = "El requisito establecido por la UIT de velocidades m&aacute;ximas de transmisi&oacute;n de datos mejoradas: 10 Mbit/s para una movilidad alta y de 100 Mbit/s para una movilidad baja.";
 choices[85][2] = "El requisito establecido por el IEEE de velocidades m&aacute;ximas de transmisi&oacute;n de datos mejoradas: 100 Mbit/s para una movilidad alta y de 1 Gbit/s para una movilidad baja.";
 choices[85][3] = "El requisito establecido por el IEEE de velocidades m&aacute;ximas de transmisi&oacute;n de datos mejoradas: 10 Mbit/s para una movilidad alta y de 100 Mbit/s para una movilidad baja.";
 answers[85] = choices[85][0];
 units[85] = "108";
 comments[85] = "Id Pregunta: 10949. TIC A1 AGE 2014";


//  Id pregunta: 10995 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  Para prevenir un ataque de SQL Injection:";
 choices[86]= new Array();
 choices[86][0] = "Debe detenerse la base de datos para evitar su infecci&oacute;n por el c&oacute;digo malicioso.";
 choices[86][1] = "Debe evitarse el uso de procedimientos almacenados en la base de datos.";
 choices[86][2] = "Debe eliminarse del equipo del usuario el c&oacute;digo SQL descargado, para evitar su propagaci&oacute;n.";
 choices[86][3] = "Debe utilizarse instrucciones SQL parametrizadas.";
 answers[86] = choices[86][3];
 units[86] = "111";
 comments[86] = "Id Pregunta: 10995. TIC A1 AGE 2014";


//  Id pregunta: 11040 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  &iquest;C&oacute;mo se denomina a la restricci&oacute;n del Modelo L&oacute;gico Relacional por la que si en una relaci&oacute;n hay alguna clave ajena, sus valores deben coincidir con los valores de la clave primaria a la que hace referencia, o bien, deben ser completamente nulos?";
 choices[87]= new Array();
 choices[87][0] = "Aserci&oacute;n (ASSERTION)";
 choices[87][1] = "Verificaci&oacute;n (CHECK)";
 choices[87][2] = "Restricci&oacute;n de clave primaria";
 choices[87][3] = "Integridad referencial";
 answers[87] = choices[87][3];
 units[87] = "58";
 comments[87] = "Id Pregunta: 11040. ";


//  Id pregunta: 11062 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Respecto a la factura electr&oacute;nica:";
 choices[88]= new Array();
 choices[88][0] = "S&oacute;lo es obligatoria en el &aacute;mbito de la AGE";
 choices[88][1] = "Reglamentariamente pueden excluirse las de importe inferior a 5000&euro;";
 choices[88][2] = "No est&aacute;n obligadas las agrupaciones de inter&eacute;s econ&oacute;mico europeas";
 choices[88][3] = "Todas son correctas";
 answers[88] = choices[88][1];
 units[88] = "70";
 comments[88] = "Id Pregunta: 11062. ";


//  Id pregunta: 11063 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l es la definici&oacute;n de servicio seg&uacute;n ITIL?";
 choices[89]= new Array();
 choices[89][0] = "Medio para entregar valor a los clientes, facilitando los resultados que estos quieren conseguir sin asumir costes o riesgos espec&iacute;ficos";
 choices[89][1] = "Subdivisi&oacute;n de una organizaci&oacute;n, que est&aacute; especializada en realizar un tipo concreto de trabajo y tiene la responsabilidad de obtener resultados concretos";
 choices[89][2] = "Conjunto estructurado de actividades dise&ntilde;ado para cumplir objetivo concreto.";
 choices[89][3] = "Conjunto de responsabilidades, actividades y autorizaciones concedidas a una persona o equipo.";
 answers[89] = choices[89][0];
 units[89] = "98";
 comments[89] = "Id Pregunta: 11063. ";


//  Id pregunta: 11149 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;Qu&eacute; versi&oacute;n del PKCS define una interfaz para el acceso a dispositivos que contienen informaci&oacute;n criptogr&aacute;fica como Tokens o Tarjetas?";
 choices[90]= new Array();
 choices[90][0] = "PKCS 1";
 choices[90][1] = "PKCS 7";
 choices[90][2] = "PCKCS 9";
 choices[90][3] = "PKCS 11";
 answers[90] = choices[90][3];
 units[90] = "73";
 comments[90] = "Id Pregunta: 11149. ";


//  Id pregunta: 11184 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares Wifi incluye WPA2?";
 choices[91]= new Array();
 choices[91][0] = "802.e";
 choices[91][1] = "802.f";
 choices[91][2] = "802.h";
 choices[91][3] = "802.i";
 answers[91] = choices[91][3];
 units[91] = "107";
 comments[91] = "Id Pregunta: 11184. ";


//  Id pregunta: 11203 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Agenda Digital Espa&ntilde;ola?";
 choices[92]= new Array();
 choices[92][0] = "Confianza Digital";
 choices[92][1] = "Mejorar la Administraci&oacute;n Electr&oacute;nica";
 choices[92][2] = "Despliegue de redes r&aacute;pidas y ultrarr&aacute;pidas";
 choices[92][3] = "Interoperabilidad y normas";
 answers[92] = choices[92][3];
 units[92] = "30";
 comments[92] = "Id Pregunta: 11203. ";


//  Id pregunta: 11384 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes afirmaciones respecto a funciones es correcta?: 1. Pueden incluir herramientas; 2. Son grupos que utilizan recursos para llevar a cabo una o m&aacute;s actividades; 3. Una persona o grupo puede desarrollar m&uacute;ltiples funciones; 4. Son m&aacute;s caras de implantar comparado con los procesos";
 choices[93]= new Array();
 choices[93][0] = "Solo 1, 2 y 3";
 choices[93][1] = "Solo 1, 2 y 4";
 choices[93][2] = "Todas las anteriores";
 choices[93][3] = "Ninguna de las anteriores";
 answers[93] = choices[93][0];
 units[93] = "98";
 comments[93] = "Id Pregunta: 11384. ";


//  Id pregunta: 11447 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Seg&uacute;n la Ley 9/2014, el retraso en la conservaci&oacute;n de los n&uacute;meros por parte del operador, da derecho a los abonados a:";
 choices[94]= new Array();
 choices[94][0] = "Una compensaci&oacute;n.";
 choices[94][1] = "Nada.";
 choices[94][2] = "Alegar a recibir una segunda l&iacute;nea.";
 choices[94][3] = "Servicio gratuito durante los 3 primeros a&ntilde;os.";
 answers[94] = choices[94][0];
 units[94] = "110";
 comments[94] = "Id Pregunta: 11447. ";


//  Id pregunta: 11632 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Se&ntilde;ale cu&aacute;l no es una metodolog&iacute;a &aacute;gil:";
 choices[95]= new Array();
 choices[95][0] = "Lean Programming";
 choices[95][1] = "OpenUP";
 choices[95][2] = "MSF";
 choices[95][3] = "AUP";
 answers[95] = choices[95][2];
 units[95] = "79";
 comments[95] = "Id Pregunta: 11632. ";


//  Id pregunta: 11670 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Los Enterprise Java Beans (EJB) con funcionamiento as&iacute;ncrono son:";
 choices[96]= new Array();
 choices[96][0] = "Message driven beans";
 choices[96][1] = "Session beans";
 choices[96][2] = "Entity beans";
 choices[96][3] = "Todos los anteriores tienen funcionamiento as&iacute;ncrono.";
 answers[96] = choices[96][0];
 units[96] = "116";
 comments[96] = "Id Pregunta: 11670. ";


//  Id pregunta: 11689 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Un cable RJ-45 cruzado se forma:";
 choices[97]= new Array();
 choices[97][0] = "conectando los pines 1 al 3 y el 2 al 6";
 choices[97][1] = "conectando los pines 1 al 8 el y el 2 al 7";
 choices[97][2] = "conectando los pines 1 al 3 y el 2 al 4";
 choices[97][3] = "conectando el pin 1 al pin 1 y el pin 2 al pin 2";
 answers[97] = choices[97][0];
 units[97] = "99";
 comments[97] = "Id Pregunta: 11689. NULL";


//  Id pregunta: 11712 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Cu&aacute;l de los siguientes protocolos utiliza caracter&iacute;sticas tanto de los protocolos de vector distancia como de los de estado de enlace?";
 choices[98]= new Array();
 choices[98][0] = "OSPF";
 choices[98][1] = "RIP";
 choices[98][2] = "RIPv2";
 choices[98][3] = "EIGRP";
 answers[98] = choices[98][3];
 units[98] = "102";
 comments[98] = "Id Pregunta: 11712. NULL";


//  Id pregunta: 11767 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Mediante qu&eacute; procedimiento su pueden adjudicar los acuerdos marco?";
 choices[99]= new Array();
 choices[99][0] = "Solo por procedimiento negociado";
 choices[99][1] = "Solo por procedimiento restringido";
 choices[99][2] = "Solo por procedimiento abierto";
 choices[99][3] = "Por procedimiento abierto, restringido o negociado&nbsp;";
 answers[99] = choices[99][3];
 units[99] = "41";
 comments[99] = "Id Pregunta: 11767. ";


