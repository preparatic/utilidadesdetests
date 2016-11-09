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

//  Id pregunta: 120 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  Dentro de los objetivos que se fijar&iacute;a una auditor&iacute;a sobre el grado de adecuaci&oacute;n de las herramientas de software utilizadas a la informaci&oacute;n gestionada, &iquest;cu&aacute;l de los siguientes considera que no ser&iacute;a relevante  obtener del estudio?:";
 choices[0]= new Array();
 choices[0][0] = "Fiabilidad t&eacute;cnica";
 choices[0][1] = "Cambio del modelo de datos utilizados";
 choices[0][2] = "Estudio de opini&oacute;n de los usuarios";
 choices[0][3] = "Facilidad de mantenimiento y expansi&oacute;n";
 answers[0] = choices[0][1];
 units[0] = "31,32,33";
 comments[0] = "Id Pregunta: 120. ";


//  Id pregunta: 220 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  En la planificaci&oacute;n de proyectos:";
 choices[1]= new Array();
 choices[1][0] = "Los diagramas de red (entre ellos PERT, ADM &ndash;actividad flecha-, y PDM &ndash;actividad nodo-)  presentan dependencias pero no informaci&oacute;n temporal.";
 choices[1][1] = "Los diagramas de red (entre ellos PERT, ADM &ndash;actividad flecha-, y PDM &ndash;actividad nodo-)  presentan dependencias e informaci&oacute;n temporal.";
 choices[1][2] = "Los gr&aacute;ficos de barras o de Gantt representan las dependencias entre tareas.";
 choices[1][3] = "El camino cr&iacute;tico en un proyecto ha de ser necesariamente &uacute;nico.";
 answers[1] = choices[1][0];
 units[1] = "27";
 comments[1] = "Id Pregunta: 220. La informaci&oacute;n temporal puede aparecer pero no siempre aparece";


//  Id pregunta: 570 AÃ±o de creación de pregunta: 2006-01-01
 questions[2]= "3)  Seg&uacute;n Stephen P. Robbins cual de los siguientes no es un paso en el proceso de planificaci&oacute;n estrat&eacute;gica";
 choices[2]= new Array();
 choices[2][0] = "Definir las misiones de la empresa seg&uacute;n las estrategias";
 choices[2][1] = "Establecer objetivos";
 choices[2][2] = "Instrumentar la estrategia.";
 choices[2][3] = "Examinar el ambiente";
 answers[2] = choices[2][0];
 units[2] = "23";
 comments[2] = "Id Pregunta: 570. ";


//  Id pregunta: 782 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  La Ley 34/2002 de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico establece:";
 choices[3]= new Array();
 choices[3][0] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico que previamente no hubieran sido solicitadas o expresamente autorizadas por los destinatarios de las mismas";
 choices[3][1] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico";
 choices[3][2] = "Las comunicaciones comerciales realizadas por correo electr&oacute;nico incluir&aacute;n al comienzo del mensaje la palabra &quot;publicidad&quot;";
 choices[3][3] = "Las respuestas 'a' y 'c' son correctas";
 answers[3] = choices[3][3];
 units[3] = "30";
 comments[3] = "Id Pregunta: 782. Ley 34/2002, art&iacute;culo 20 y 21";


//  Id pregunta: 825 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;C&oacute;mo se denomina en Java el miniprograma que corre solamente bajo un navegador y es descargado autom&aacute;ticamente como parte de una p&aacute;gina web?:";
 choices[4]= new Array();
 choices[4][0] = "JavaScript";
 choices[4][1] = "Applet";
 choices[4][2] = "Servlet";
 choices[4][3] = "XML";
 answers[4] = choices[4][1];
 units[4] = "60";
 comments[4] = "Id Pregunta: 825. JCED - Preparatic XVII";


//  Id pregunta: 909 AÃ±o de creación de pregunta: 2003-01-01
 questions[5]= "6)  &iquest;Puede ejecutarse una aplicaci&oacute;n Windows al mismo tiempo por muchos usuarios, en una misma m&aacute;quina, pero con pantallas diferentes?:";
 choices[5]= new Array();
 choices[5][0] = "No, dado que un sistema de este tipo solo puede tener una consola, esa prestaci&oacute;n est&aacute; accesible en sistemas empresariales tipo Unix";
 choices[5][1] = "Si, dado que en un servidor windows empresarial pueden conectarse varias consolas diferentes";
 choices[5][2] = "Si, utilizando X-Windows";
 choices[5][3] = "Si, utilizando servicios de Remote Desktop";
 answers[5] = choices[5][3];
 units[5] = "56";
 comments[5] = "Id Pregunta: 909. ";


//  Id pregunta: 1154 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  En una red neuronal feedforward supervisada el m&eacute;todo de aprendizaje que intenta adaptar los pesos para minimizar el error cuadr&aacute;tico medio para el conjunto de patrones de entrenamiento se denomina:";
 choices[6]= new Array();
 choices[6][0] = "M&eacute;todo de la varianza";
 choices[6][1] = "M&eacute;todo de encadenamiento hacia atr&aacute;s";
 choices[6][2] = "M&eacute;todo de retropropagaci&oacute;n";
 choices[6][3] = "M&eacute;todo de Kohonen";
 answers[6] = choices[6][2];
 units[6] = "64";
 comments[6] = "Id Pregunta: 1154. ";


//  Id pregunta: 1288 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  MIGRA";
 choices[7]= new Array();
 choices[7][0] = "Es una norma del CSIAE, que desarrolla SICRES en detalle.";
 choices[7][1] = "Es un proyecto de AENOR para intercambio de informacion entre SIG.";
 choices[7][2] = "Es una herramienta software del los ministerios de Administraciones P&uacute;blicas e Interior que permite el control de la inmigraci&oacute;n ilegal a nuestro pais.";
 choices[7][3] = "Ninguna de las anteriores.";
 answers[7] = choices[7][1];
 units[7] = "67";
 comments[7] = "Id Pregunta: 1288. NULL";


//  Id pregunta: 1347 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Se&ntilde;ale la respuesta correcta. El software de base comprende:";
 choices[8]= new Array();
 choices[8][0] = "El sistema operativo, el sistema de gesti&oacute;n de datos , el software de comunicaciones y las utilidades";
 choices[8][1] = "El sistema operativo,  el software de comunicaciones y las utilidades";
 choices[8][2] = "El sistema operativo, el sistema de gesti&oacute;n de datos  y las utilidades";
 choices[8][3] = "El sistema operativo y las utilidades";
 answers[8] = choices[8][0];
 units[8] = "55";
 comments[8] = "Id Pregunta: 1347. ";


//  Id pregunta: 1354 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Se&ntilde;ale la respuesta falsa. Una pasarela de pagos:";
 choices[9]= new Array();
 choices[9][0] = "Permite a un comercio en internet cobrar a sus clientes, efectuando la transacci&oacute;n por medio de un tercero de confianza";
 choices[9][1] = "Es un aplicativo software que permite conectar al cliente con el comercio de forma segura";
 choices[9][2] = "Es un dispositivo hardware que se instala en el servidor web de la tienda viertual";
 choices[9][3] = "Abstrae el manejo de los pagos de la l&oacute;gica de la aplicaci&oacute;n de la tienda";
 answers[9] = choices[9][2];
 units[9] = "70";
 comments[9] = "Id Pregunta: 1354. NULL";


//  Id pregunta: 1490 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  El creador de JAVA es:";
 choices[10]= new Array();
 choices[10][0] = "Microsoft";
 choices[10][1] = "IBM";
 choices[10][2] = "SUN Microsystems";
 choices[10][3] = "CERN";
 answers[10] = choices[10][2];
 units[10] = "116";
 comments[10] = "Id Pregunta: 1490. ";


//  Id pregunta: 1662 AÃ±o de creación de pregunta: 2004-01-01
 questions[11]= "12)  De entre las siguientes maneras de manipular una base de datos SQL, indique la que no es correcta:";
 choices[11]= new Array();
 choices[11][0] = "Interactivamente, convocando directamente las sentencias SQL.";
 choices[11][1] = "Relacionalmente, invocando paralelamente sentencias SQL.";
 choices[11][2] = "Por m&oacute;dulos, agrupando sentencias SQL en m&oacute;dulos.";
 choices[11][3] = "Por medio de SQL embebido";
 answers[11] = choices[11][1];
 units[11] = "58";
 comments[11] = "Id Pregunta: 1662. MAP-B 2003";


//  Id pregunta: 1758 AÃ±o de creación de pregunta: 2006-01-01
 questions[12]= "13)  En la arquitectura de la plataforma .NET ";
 choices[12]= new Array();
 choices[12][0] = "CLR es el entorno de ejecuci&oacute;n para .NET";
 choices[12][1] = "CLS  define las reglas que debe cumplir todo lenguaje que quiera trabajar con .NET.";
 choices[12][2] = "WebForms se utiliza para el desarrollo de aplicaciones dirigidas a Internet";
 choices[12][3] = "Todas son correctas";
 answers[12] = choices[12][3];
 units[12] = "59";
 comments[12] = "Id Pregunta: 1758. ";


//  Id pregunta: 1884 AÃ±o de creación de pregunta: 2006-01-01
 questions[13]= "14)  De acuerdo a la ley 34/2002, se&ntilde;ale la verdadera:";
 choices[13]= new Array();
 choices[13][0] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nica equivalente previamente no solicitadas o expresamente autorizadas por los destinatarios de las mismas";
 choices[13][1] = "Es posible el env&iacute;o de comunicaciones publicitarias si existe relaci&oacute;n contractual previa ";
 choices[13][2] = "Para que sea v&aacute;lida la celebraci&oacute;n de contratos por v&iacute;a electr&oacute;nica no ser&aacute; necesario el previo acuerdo de las partes sobre la utilizaci&oacute;n de medios electr&oacute;nicos.";
 choices[13][3] = "Todas son verdaderas";
 answers[13] = choices[13][3];
 units[13] = "30";
 comments[13] = "Id Pregunta: 1884. NULL";


//  Id pregunta: 2049 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  En M&eacute;trica V3 no son T&eacute;cnicas de Gesti&oacute;n de Proyectos:";
 choices[14]= new Array();
 choices[14][0] = "WBS";
 choices[14][1] = "MARK II";
 choices[14][2] = "JAD";
 choices[14][3] = "PERT";
 answers[14] = choices[14][2];
 units[14] = "86";
 comments[14] = "Id Pregunta: 2049. NULL";


//  Id pregunta: 2102 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Indicar cu&aacute;l no es un requisito que deba reunir el software de tiempo real.";
 choices[15]= new Array();
 choices[15][0] = "Sincronizaci&oacute;n y divisi&oacute;n en tareas.";
 choices[15][1] = "Eficiente.";
 choices[15][2] = "Modular.";
 choices[15][3] = "Facilidad de mantenimiento.";
 answers[15] = choices[15][1];
 units[15] = "83";
 comments[15] = "Id Pregunta: 2102. ";


//  Id pregunta: 2159 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Indicar cu&aacute;l no es una regla de construcci&oacute;n de una entidad externa dentro de un diagrama de flujo de datos:";
 choices[16]= new Array();
 choices[16][0] = "Representa procesos de aplicaci&oacute;n que no pertenecen al del estudio";
 choices[16][1] = "No est&aacute; permitido que se comuniquen entre s&iacute; las entidades externas a trav&eacute;s de flujos de datos";
 choices[16][2] = "Pueden aparecer en los distintos niveles de un DFD, pero se recomienda que s&oacute;lo aparezcan en el nivel cero";
 choices[16][3] = "Se pueden representar varias veces en el mismo gr&aacute;fico para evitar entrecruzamiento de l&iacute;neas";
 answers[16] = choices[16][0];
 units[16] = "81";
 comments[16] = "Id Pregunta: 2159. ";


//  Id pregunta: 2179 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  &iquest;Cu&aacute;l de los siguientes perfiles  no est&aacute; incluido en la Guia de Participantes de METRICA 3?:";
 choices[17]= new Array();
 choices[17][0] = "Directivo";
 choices[17][1] = "Consultor";
 choices[17][2] = "T&eacute;cnico";
 choices[17][3] = "Programador";
 answers[17] = choices[17][2];
 units[17] = "86";
 comments[17] = "Id Pregunta: 2179. NULL";


//  Id pregunta: 2276 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  El flujo de datos de un DFD:";
 choices[18]= new Array();
 choices[18][0] = "Tiene siempre flechas";
 choices[18][1] = "No tiene por qu&eacute; existir";
 choices[18][2] = "S&oacute;lo conecta procesos";
 choices[18][3] = "Ninguna de las anteriores";
 answers[18] = choices[18][3];
 units[18] = "81";
 comments[18] = "Id Pregunta: 2276. ";


//  Id pregunta: 2363 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Entre los elementos de un diagrama de flujo de datos tenemos:";
 choices[19]= new Array();
 choices[19][0] = "Entidad externa, proceso, almac&eacute;n de datos y diagrama general";
 choices[19][1] = "Entidad externa, almac&eacute;n de datos y flujo de datos";
 choices[19][2] = "Entidad externa, almac&eacute;n de datos, proceso y flujo de datos";
 choices[19][3] = "Almac&eacute;n de datos, proceso, flujo de datos y diagrama general";
 answers[19] = choices[19][2];
 units[19] = "81";
 comments[19] = "Id Pregunta: 2363. ";


//  Id pregunta: 2420 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  El nivel que marca la verdadera frontera de la comprensi&oacute;n y utilizaci&oacute;n del lenguaje natural con la inteligencia artificial es:";
 choices[20]= new Array();
 choices[20][0] = "El niv&eacute;l ac&uacute;stico";
 choices[20][1] = "El nivel fonol&oacute;gico";
 choices[20][2] = "El nivel sem&aacute;ntico-pragm&aacute;tico";
 choices[20][3] = "El nivel pros&oacute;dico";
 answers[20] = choices[20][2];
 units[20] = "94";
 comments[20] = "Id Pregunta: 2420. ";


//  Id pregunta: 2448 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Las secuencias de ejecuci&oacute;n de los programas, el espacio requerido, memoria que utilizan&hellip;, son definidos en los:";
 choices[21]= new Array();
 choices[21][0] = "Manuales de procedimientos";
 choices[21][1] = "Manuales de usuarios";
 choices[21][2] = "Manuales de explotaci&oacute;n";
 choices[21][3] = "Manuales de contingencias";
 answers[21] = choices[21][2];
 units[21] = "86";
 comments[21] = "Id Pregunta: 2448. NULL";


//  Id pregunta: 2706 AÃ±o de creación de pregunta: 2003-01-01
 questions[22]= "23)  Son roles en un sistema gestor de contenidos:";
 choices[22]= new Array();
 choices[22][0] = "Autores.";
 choices[22][1] = "Publicador.";
 choices[22][2] = "Todas las anteriores.";
 choices[22][3] = "Ninguna de las anteriores.";
 answers[22] = choices[22][2];
 units[22] = "95";
 comments[22] = "Id Pregunta: 2706. NULL";


//  Id pregunta: 2711 AÃ±o de creación de pregunta: 2003-01-01
 questions[23]= "24)  Una de las principales caracter&iacute;sticas de un sistema gestor de contenidos es:";
 choices[23]= new Array();
 choices[23][0] = "Desaconseja el uso de metadatos.";
 choices[23][1] = "No hay roles en el proceso.";
 choices[23][2] = "Se separa el contenido de su presentaci&oacute;n.";
 choices[23][3] = "Las p&aacute;ginas se construyen de manera no din&aacute;mica.";
 answers[23] = choices[23][2];
 units[23] = "95";
 comments[23] = "Id Pregunta: 2711. NULL";


//  Id pregunta: 3053 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Dado un cable coaxial de longitud 1 metro, donde se aplica una potencia de 1 mW, y se obtiene en el otro extremo una potencia de salida de 0.1 mW, se puede decir que el cable presenta unas p&eacute;rdidas de:";
 choices[24]= new Array();
 choices[24][0] = "10 dB/m";
 choices[24][1] = "20 dB/m";
 choices[24][2] = "1 dB/m";
 choices[24][3] = "5 dB/m";
 answers[24] = choices[24][0];
 units[24] = "99";
 comments[24] = "Id Pregunta: 3053. ";


//  Id pregunta: 3062 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  En las Active Server Pages de Microsoft IIS:";
 choices[25]= new Array();
 choices[25][0] = "Las p&aacute;ginas ASP son ficheros de texto, con c&oacute;digo VBScript o JScript, que es Interpretado";
 choices[25][1] = "Las p&aacute;ginas ASPX son ficheros compilados con c&oacute;digo de lenguajes Microsoft.NET";
 choices[25][2] = "Las p&aacute;ginas CFM son p&aacute;ginas con c&oacute;digo C, interpretado";
 choices[25][3] = "A y B son ciertas";
 answers[25] = choices[25][3];
 units[25] = "115";
 comments[25] = "Id Pregunta: 3062. NULL";


//  Id pregunta: 3166 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no pertenece a un protocolo de transmisi&oacute;n orientado a bit?:";
 choices[26]= new Array();
 choices[26][0] = "Para detectar el principio y el final de una trama se utiliza una secuencia de bits, llamada bandera";
 choices[26][1] = "Utiliza para la supervisi&oacute;n de la comunicaci&oacute;n mensajes constituidos por uno o varios caracteres, llamados de control de la comunicaci&oacute;n, tomados de un c&oacute;digo preestablecido";
 choices[26][2] = "La trama es de formato fijo, constituida por campos de longitud determinada, excepto el campo de informaci&oacute;n";
 choices[26][3] = "Utiliza para la supervisi&oacute;n de la comunicaci&oacute;n campos de control con bits (o grupos de bits) cuyo significado est&aacute; dado por su posici&oacute;n";
 answers[26] = choices[26][1];
 units[26] = "100, 101";
 comments[26] = "Id Pregunta: 3166. ";


//  Id pregunta: 3230 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  &iquest;Cu&aacute;l de los siguientes podr&iacute;a ser usado en un sistema aut&oacute;nomo para enrutamiento?:";
 choices[27]= new Array();
 choices[27][0] = "BGP (Border Gateway Protocol)";
 choices[27][1] = "EGP (Exterior Gateway Protocol)";
 choices[27][2] = "AGP (Autonomous Gateway Protocol)";
 choices[27][3] = "RIP (Routing Information Protocol)";
 answers[27] = choices[27][3];
 units[27] = "102";
 comments[27] = "Id Pregunta: 3230. ";


//  Id pregunta: 3251 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  &iquest;Cu&aacute;les son las ventajas de la fibra &oacute;ptica comparadas con los cableados de cobre?:";
 choices[28]= new Array();
 choices[28][0] = "Mayor velocidad de transmisi&oacute;n, mayor ancho de banda, menor tama&ntilde;o y peso, inmunidad al ruido electromagn&eacute;tico, ausencia de diafon&iacute;a, menor atenuaci&oacute;n";
 choices[28][1] = "Mayor velocidad de transmisi&oacute;n, menor ancho de banda, menor tama&ntilde;o y peso, inmunidad al ruido electromagn&eacute;tico, distancias menores entre repetidores";
 choices[28][2] = "Menor velocidad de transmisi&oacute;n, menor ancho de banda, menor tama&ntilde;o y peso, inmunidad al ruido electromagn&eacute;tico, ausencia de diafon&iacute;a, mayor atenuaci&oacute;n, distancias mayores entre repetidores";
 choices[28][3] = "Mayor velocidad de transmisi&oacute;n, menor tama&ntilde;o y peso, inmunidad al ruido electromagn&eacute;tico, ausencia de diafon&iacute;a, mayor atenuaci&oacute;n";
 answers[28] = choices[28][0];
 units[28] = "97";
 comments[28] = "Id Pregunta: 3251. NULL";


//  Id pregunta: 3254 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  &iquest;Cu&aacute;ntas subredes son posibles en una red de clase C, con una m&aacute;scara de subnet de 255.255.255.224?:";
 choices[29]= new Array();
 choices[29][0] = "32";
 choices[29][1] = "30";
 choices[29][2] = "8";
 choices[29][3] = "6";
 answers[29] = choices[29][2];
 units[29] = "100";
 comments[29] = "Id Pregunta: 3254. Se usa la f&oacute;rmula 2^N=Y, siendo N el n&uacute;mero de bits ocupados seg&uacute;n la m&aacute;scara, correspodientes a la asignaci&oacute;n por defecto para Host (en este caso  224=11100000 2^3=8)";


//  Id pregunta: 3280 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  &iquest;Qu&eacute; elemento no forma parte del Servicio X.400 de OSI?:";
 choices[30]= new Array();
 choices[30][0] = "Agente de usuario (UA)";
 choices[30][1] = "Sistema de almacenamiento de mensajes (MS)";
 choices[30][2] = "Sistema de enrutamiento de mensajes (MRS)";
 choices[30][3] = "Sistema de mensajes interpersonales (IPMS)";
 answers[30] = choices[30][2];
 units[30] = "106";
 comments[30] = "Id Pregunta: 3280. ";


//  Id pregunta: 3342 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  Con un &quot;m&oacute;dem&quot; RDSI, la llamada:";
 choices[31]= new Array();
 choices[31][0] = "Se establece cada vez que se intercambian datos";
 choices[31][1] = "Est&aacute; siempre establecida";
 choices[31][2] = "Puede ser configurable cu&aacute;ndo se quiere que se establezca la llamada";
 choices[31][3] = "Ninguna de las anteriores";
 answers[31] = choices[31][2];
 units[31] = "103,104,109";
 comments[31] = "Id Pregunta: 3342. ";


//  Id pregunta: 3484 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  El uso de la red de energ&iacute;a el&eacute;ctrica como una red de transmisi&oacute;n telem&aacute;tica de voz y datos es la tecnolog&iacute;a:";
 choices[32]= new Array();
 choices[32][0] = "LCC";
 choices[32][1] = "PCC";
 choices[32][2] = "LLC";
 choices[32][3] = "PLC";
 answers[32] = choices[32][3];
 units[32] = "107";
 comments[32] = "Id Pregunta: 3484. NULL";


//  Id pregunta: 3487 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  En ATM: &quot;la capacidad de transferencia que se caracteriza por la ausencia de caracterizaci&oacute;n del tr&aacute;fico en el contrato de forma que la red transmite la informaci&oacute;n que le ofrece el usuario cuando puede y lo mejor que puede &quot;, se denomina:";
 choices[33]= new Array();
 choices[33][0] = "DBR (Deterministic Bit Rate)";
 choices[33][1] = "SBR (Statistic Bit Rate)";
 choices[33][2] = "ABT (ATM Block Transfer)";
 choices[33][3] = "ABR (Available Bit Rate)";
 answers[33] = choices[33][3];
 units[33] = "109";
 comments[33] = "Id Pregunta: 3487. ";


//  Id pregunta: 3625 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  La normativa referente a la Red Digital de Servicios Integrados para el uso por el usuario de los canales de 64 kbps, &iquest;a qu&eacute; nivel del modelo de referencia OSI corresponder&iacute;a?:";
 choices[34]= new Array();
 choices[34][0] = "Al nivel 8 : Administraci&oacute;n";
 choices[34][1] = "Al nivel 1 : F&iacute;sico";
 choices[34][2] = "Al nivel 3 : Red";
 choices[34][3] = "Al nivel 5 : Enlace";
 answers[34] = choices[34][1];
 units[34] = "102,104,109";
 comments[34] = "Id Pregunta: 3625. ";


//  Id pregunta: 3658 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  Un conjunto de redes administradas por una entidad com&uacute;n y que comparten una estrategia com&uacute;n de encaminamiento se conoce en la terminolog&iacute;a ISO como:";
 choices[35]= new Array();
 choices[35][0] = "Una LAN (RAL)";
 choices[35][1] = "Un &aacute;rea";
 choices[35][2] = "Un sistema aut&oacute;nomo";
 choices[35][3] = "Un dominio";
 answers[35] = choices[35][2];
 units[35] = "102";
 comments[35] = "Id Pregunta: 3658. ";


//  Id pregunta: 3764 AÃ±o de creación de pregunta: 2002-01-01
 questions[36]= "37)  Para la interconexi&oacute;n de redes locales se han especificado diversos equipos. Indique cu&aacute;l de las opciones es correcta:";
 choices[36]= new Array();
 choices[36][0] = "Un router necesariamente une segmentos de red con distinto protocolo de enlace, o nivel dos";
 choices[36][1] = "Un router une dos segmentos de red utilizando exclusivamente la informaci&oacute;n de nivel tres para el filtrado de las direcciones";
 choices[36][2] = "Un router necesariamente une segmentos de red con el mismo protocolo de enlace, o de nivel dos";
 choices[36][3] = "Todas las respuestas anteriores son correctas";
 answers[36] = choices[36][1];
 units[36] = "102";
 comments[36] = "Id Pregunta: 3764. ";


//  Id pregunta: 3782 AÃ±o de creación de pregunta: 2002-01-01
 questions[37]= "38)  Respecto a EDGE puede decirse que:";
 choices[37]= new Array();
 choices[37][0] = "Ha sustuido a GSM en gran parte de Europa";
 choices[37][1] = "Sustiuir&aacute; a UMTS en vista del fracaso de esta &uacute;ltima tecnolog&iacute;a";
 choices[37][2] = "Es un desarrollo paralelo a iMode con amplia implantaci&oacute;n en Jap&oacute;n y Norteam&eacute;rica";
 choices[37][3] = "Nada de lo anterior es cierto";
 answers[37] = choices[37][3];
 units[37] = "108";
 comments[37] = "Id Pregunta: 3782. ";


//  Id pregunta: 3885 AÃ±o de creación de pregunta: 2003-01-01
 questions[38]= "39)  &iquest;Qu&eacute; es JavaScript?";
 choices[38]= new Array();
 choices[38][0] = "Un lenguaje de validaci&oacute;n de formularios en p&aacute;ginas Web";
 choices[38][1] = "Es una implementaci&oacute;n del ECMA 262";
 choices[38][2] = "Es un lenguaje Java reducido para Internet que sustituye a CGI ";
 choices[38][3] = "Es un lenguaje que soporta objetos y funciones, pero no clases de objetos ni herencias entre ellos";
 answers[38] = choices[38][3];
 units[38] = "114";
 comments[38] = "Id Pregunta: 3885. ";


//  Id pregunta: 4231 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  Se desea contratar el servicio Frame Relay con un operador de comunicaciones, para una conexi&oacute;n entre dos puntos. En este caso se deber&aacute; tener en cuenta que el CIR para los Circuitos Virtuales Permanentes (CVP) contratados deber&aacute; cumplir lo siguiente";
 choices[39]= new Array();
 choices[39][0] = "El CIR es mayor que la velocidad de acceso";
 choices[39][1] = "El CIR es menor o igual que la velocidad de acceso";
 choices[39][2] = "El CIR es igual en los dos sentidos del CVP";
 choices[39][3] = "El CIR es distinto en los dos sentidos del CVP";
 answers[39] = choices[39][1];
 units[39] = "109";
 comments[39] = "Id Pregunta: 4231. ";


//  Id pregunta: 4282 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  En miner&iacute;a de datos, un Esquema Estrella:";
 choices[40]= new Array();
 choices[40][0] = "No tiene en cuenta elementos temporales tales como la fecha asociada a la informaci&oacute;n.";
 choices[40][1] = "Es una forma de representar la arquitectura f&iacute;sica del sistema OLAP.";
 choices[40][2] = "Es una t&eacute;cnica de dise&ntilde;o de bases de datos relacionales que sirve para simular el funcionamiento de bases de datos multidimensionales.";
 choices[40][3] = "Representa la centralizaci&oacute;n de la informaci&oacute;n en un solo SGBD para posibilitar su explotaci&oacute;n ndimensional.";
 answers[40] = choices[40][2];
 units[40] = "68";
 comments[40] = "Id Pregunta: 4282. ";


//  Id pregunta: 4297 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  En M&eacute;trica Versi&oacute;n 3, el an&aacute;lisis de los hechos inesperados y an&oacute;malos que se presentan durante la realizaci&oacute;n de las actividades y tareas del proyecto:";
 choices[41]= new Array();
 choices[41][0] = "No est&aacute; contemplado";
 choices[41][1] = "Se realiza en la interfaz de Aseguramiento de la Calidad.";
 choices[41][2] = "Se realiza en la interfaz de Gesti&oacute;n de Configuraci&oacute;n.";
 choices[41][3] = "Se realiza en la interfaz de Gesti&oacute;n de Proyectos.";
 answers[41] = choices[41][3];
 units[41] = "86";
 comments[41] = "Id Pregunta: 4297. NULL";


//  Id pregunta: 4369 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  Cu&aacute;l de las siguientes afirmaciones sobre la tecnolog&iacute;a de acceso a bases de datos ADO.NET no es correcta?";
 choices[42]= new Array();
 choices[42][0] = "El modelo de objetos ADO.NET provee una estructura de acceso a distintos or&iacute;genes de datos. Tiene 2 componentes principales: El Dataset y el proveedor de Datos .NET";
 choices[42][1] = "ADO.NET utiliza XML como formato para transmitir datos desde y hacia su base de datos y su aplicaci&oacute;n Web.";
 choices[42][2] = "ADO.NET es un conjunto de clases que se utiliza para acceder y manipular or&iacute;genes de datos como por ejemplo, una base de datos de SQL Server o una planilla Excel.";
 choices[42][3] = "ADO.NET utiliza un modelo de acceso pensando para entornos permanentemente conectados. Esto quiere decir que la aplicaci&oacute;n y el origen de datos deben estar en comunicaci&oacute;n permanente.";
 answers[42] = choices[42][3];
 units[42] = "59";
 comments[42] = "Id Pregunta: 4369. ";


//  Id pregunta: 4531 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes no es una sentencia correcta?";
 choices[43]= new Array();
 choices[43][0] = "UML es un lenguaje unificado de modelado.";
 choices[43][1] = "UML fue adoptado en noviembre de 1997 por OMG.";
 choices[43][2] = "UML solo costa de una &uacute;nica versi&oacute;n desde su creaci&oacute;n.";
 choices[43][3] = "UML es un est&aacute;ndar de facto para visualizar, especificar y documentar los modelos que se crean durante Ia aplicaci&oacute;n de un proceso de software.";
 answers[43] = choices[43][2];
 units[43] = "82";
 comments[43] = "Id Pregunta: 4531. ";


//  Id pregunta: 4568 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  Indique cual de los siguientes no es un lenguaje relacional:";
 choices[44]= new Array();
 choices[44][0] = "RQL";
 choices[44][1] = "QUEL";
 choices[44][2] = "QBE";
 choices[44][3] = "SQL";
 answers[44] = choices[44][0];
 units[44] = "58";
 comments[44] = "Id Pregunta: 4568. ";


//  Id pregunta: 4726 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  Cual de las siguientes afirmaciones es correcta cuando hablamos de XML:";
 choices[45]= new Array();
 choices[45][0] = "Cocoon es un parser XML de c&oacute;digo abierto";
 choices[45][1] = "Los parsers XML sin validaci&oacute;n necesitan el dtd asociado al documento xml";
 choices[45][2] = "Xerces es un parser XML basado en java";
 choices[45][3] = "XSLT es un esquema para XML utilizado en lugar de los DTD";
 answers[45] = choices[45][2];
 units[45] = "69";
 comments[45] = "Id Pregunta: 4726. Examen 2006 JCYL";


//  Id pregunta: 4729 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  Cual de los siguientes no es un formato vectorial para el tratamiento de im&aacute;genes:";
 choices[46]= new Array();
 choices[46][0] = "SVG";
 choices[46][1] = "WMF";
 choices[46][2] = "Postscript";
 choices[46][3] = "TIFF";
 answers[46] = choices[46][3];
 units[46] = "93";
 comments[46] = "Id Pregunta: 4729. Examen 2006 JCYL";


//  Id pregunta: 4920 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  Los algoritmos &ldquo;no supervisados&rdquo; en Miner&iacute;a de Datos:";
 choices[47]= new Array();
 choices[47][0] = "Se llaman tambi&eacute;n 'predictivos'.";
 choices[47][1] = "Utilizan la t&eacute;cnica de '&aacute;rboles de decisi&oacute;n'.";
 choices[47][2] = "Sirven para descubrir patrones y tendencias en los datos actuales.";
 choices[47][3] = "Predicen el valor de un atributo de un conjunto de datos, conocidos otros atributos.";
 answers[47] = choices[47][2];
 units[47] = "68";
 comments[47] = "Id Pregunta: 4920. Examen TIC B 2007";


//  Id pregunta: 4961 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de estas medidas de seguridad de las instalaciones contra incendios en los centro de proceso de datos no es adecuada?:";
 choices[48]= new Array();
 choices[48][0] = "Utilizaci&oacute;n de tabicados de hormig&oacute;n en su construcci&oacute;n.";
 choices[48][1] = "Utilizaci&oacute;n de un mecanismo para cortar la alimentaci&oacute;n el&eacute;ctrica.";
 choices[48][2] = "Utilizaci&oacute;n de agentes extintores como el gas HAL&Oacute;N.";
 choices[48][3] = "Utilizaci&oacute;n de contenedores de papel con tapa met&aacute;lica que cierre autom&aacute;ticamente.";
 answers[48] = choices[48][2];
 units[48] = "32";
 comments[48] = "Id Pregunta: 4961. Examen TIC B 2007";


//  Id pregunta: 4978 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  Cu&aacute;l de las siguientes tecnolog&iacute;as xDSL proporciona mayor velocidad m&aacute;xima te&oacute;rica para la descarga deinformaci&oacute;n:";
 choices[49]= new Array();
 choices[49][0] = "ADSL2+.";
 choices[49][1] = "VDSL.";
 choices[49][2] = "SDSL.";
 choices[49][3] = "HDSL.";
 answers[49] = choices[49][1];
 units[49] = "107";
 comments[49] = "Id Pregunta: 4978. Examen TIC B 2007";


//  Id pregunta: 5004 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de estas afirmaciones sobre accesibilidad es cierta de acuerdo con las gu&iacute;as del W3C?";
 choices[50]= new Array();
 choices[50][0] = "Una p&aacute;gina web accesible debe tener textos equivalentes para cualquier elemento no textual";
 choices[50][1] = "Un p&aacute;gina web accesible debe contener solo texto";
 choices[50][2] = "Una p&aacute;gina web accesible no debe utilizar colores";
 choices[50][3] = "Una p&aacute;gina web accesible debe utilizar un &uacute;nico tipo de letra establecido en estas gu&iacute;as";
 answers[50] = choices[50][0];
 units[50] = "39";
 comments[50] = "Id Pregunta: 5004. Examen TIC A 2007";


//  Id pregunta: 5253 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  Indique la afirmaci&oacute;n FALSA en relaci&oacute;n al modelo CMM:";
 choices[51]= new Array();
 choices[51][0] = "Consta de 5 niveles de madurez";
 choices[51][1] = "Todos los niveles se descomponen en &aacute;reas de procesos clave";
 choices[51][2] = "Las &aacute;reas de procesos clave  indican las &aacute;reas que una organizaci&oacute;n debe desarrollar para mejorar su proceso software y alcanzar un nivel de madurez";
 choices[51][3] = "Las &aacute;reas claves del proceso se organizan en caracter&iacute;sticas comunes que indican si la implementaci&oacute;n de un proceso clave es efectiva, repetible y duradera.";
 answers[51] = choices[51][1];
 units[51] = "87";
 comments[51] = "Id Pregunta: 5253. NULL";


//  Id pregunta: 5283 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  En Java la herencia es un mecanismo por el que se pueden crear nuevos objetos definidos en t&eacute;rminos de objetos ya existentes. &iquest;Esta permitida la herencia multiple?";
 choices[52]= new Array();
 choices[52][0] = "Si.";
 choices[52][1] = "No.";
 choices[52][2] = "Si con ciertas restricciones.";
 choices[52][3] = "No con ciertas restricciones.";
 answers[52] = choices[52][1];
 units[52] = "60";
 comments[52] = "Id Pregunta: 5283. NULL";


//  Id pregunta: 5633 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  Indique cu&aacute;l de las siguientes respuestas es err&oacute;nea:";
 choices[53]= new Array();
 choices[53][0] = "Un m&oacute;dulo SODIMM posee 200 contactos";
 choices[53][1] = "Existen m&oacute;dulos DIMM de 194 contactos";
 choices[53][2] = "Existen  m&oacute;dulos DIMM de 184 contactos";
 choices[53][3] = "Las siglas DIMM hacen referencia a &quot;Dual Inline Memory Module&quot;";
 answers[53] = choices[53][1];
 units[53] = "47";
 comments[53] = "Id Pregunta: 5633. ";


//  Id pregunta: 5776 AÃ±o de creación de pregunta: 2009-01-01
 questions[54]= "55)  &iquest;Qu&eacute; car&aacute;cter tendr&aacute;n los C&oacute;digos Tipo descritos en el art&iacute;culo 32 de la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal?";
 choices[54]= new Array();
 choices[54][0] = "De legislaci&oacute;n de desarrollo de la Ley Org&aacute;nica 15/1999.";
 choices[54][1] = "Sustitutivo de las regulaciones legales sobre protecci&oacute;n de datos para aquellos sectores que los adopten.";
 choices[54][2] = "Obligatorio para todas aquellas administraciones P&uacute;blicas que prevean la realizaci&oacute;n de transferencias internacionales de datos personales a terceros pa&iacute;ses que no garanticen un nivel adecuado de protecci&oacute;n.";
 choices[54][3] = "C&oacute;digos deontol&oacute;gicos o de buena pr&aacute;ctica profesional.";
 answers[54] = choices[54][3];
 units[54] = "29";
 comments[54] = "Id Pregunta: 5776. ";


//  Id pregunta: 5904 AÃ±o de creación de pregunta: 2009-01-01
 questions[55]= "56)  El modelo CMMI (Capability Maturity Model Integration) es:";
 choices[55]= new Array();
 choices[55][0] = "Un modelo para la mejora de resultados de la organizaci&oacute;n";
 choices[55][1] = "Un modelo para la mejora de los procesos de la organizaci&oacute;n";
 choices[55][2] = "Un modelo para la mejora de la capacidad de liderazgo de la organizaci&oacute;n";
 choices[55][3] = "Un modelo para la mejora de la consistencia de los datos de una organizaci&oacute;n";
 answers[55] = choices[55][1];
 units[55] = "87";
 comments[55] = "Id Pregunta: 5904. MAP 2008 A1";


//  Id pregunta: 6008 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  La t&eacute;cnica JAD (Joint Application Design) para el an&aacute;lisis de requisitos:";
 choices[56]= new Array();
 choices[56][0] = "Consiste en la realizaci&oacute;n de entrevistas con diversas personas, elaborando un acta para cada entrevista que se les remitir&aacute; posteriormente para su aprobaci&oacute;n.";
 choices[56][1] = "Consiste en realizar un taller donde los trabajadores del conocimiento y especialistas de TI se re&uacute;nen en diversas sesiones, a veces por varios d&iacute;as, para definir y revisar los requerimientos del negocio para el sistema.";
 choices[56][2] = "Define seis categor&iacute;as de aspectos que el analista debe estudiar con los usuarios empleando para ello otras t&eacute;cnicas de an&aacute;lisis de requisitos.";
 choices[56][3] = "Es una t&eacute;cnica cuyo objetivo principal es realizar un control de versiones de un determinado producto software.";
 answers[56] = choices[56][1];
 units[56] = "78";
 comments[56] = "Id Pregunta: 6008. TIC A 2009";


//  Id pregunta: 6075 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  &iquest;Cu&aacute;les son los subsistemas que integran fundamentalmente la direcci&oacute;n de proyectos?";
 choices[57]= new Array();
 choices[57][0] = "Planificaci&oacute;n, organizaci&oacute;n, control, informaci&oacute;n, tecnolog&iacute;a, y cultura de la empresa.";
 choices[57][1] = "Planificaci&oacute;n, Organizaci&oacute;n, Control, Documentaci&oacute;n, Tecnolog&iacute;a y Cultura de la Empresa.";
 choices[57][2] = "Planificaci&oacute;n, gesti&oacute;n, control, informaci&oacute;n, tecnolog&iacute;a y documentaci&oacute;n.";
 choices[57][3] = "Planificaci&oacute;n, organizaci&oacute;n, control, informaci&oacute;n, tecnolog&iacute;a y documentaci&oacute;n.";
 answers[57] = choices[57][0];
 units[57] = "27";
 comments[57] = "Id Pregunta: 6075. ";


//  Id pregunta: 6097 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  El sistema operativo MSDOS es:";
 choices[58]= new Array();
 choices[58][0] = "Multiprocesador asim&eacute;trico.";
 choices[58][1] = "Multiprocesador sim&eacute;trico.";
 choices[58][2] = "Multiusuario.";
 choices[58][3] = "Monoprocesador.";
 answers[58] = choices[58][3];
 units[58] = "52";
 comments[58] = "Id Pregunta: 6097. TIC A 2009";


//  Id pregunta: 6189 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  El Esquema Nacional de Interoperabilidad establece que los sistemas han de ser objeto de una auditor&iacute;a regular ordinaria al menos";
 choices[59]= new Array();
 choices[59][0] = "Cada 6 meses";
 choices[59][1] = "Cada a&ntilde;o";
 choices[59][2] = "Cada 2 a&ntilde;os";
 choices[59][3] = "El Esquema Nacional de Interoperabilidad no especifica nada respecto a auditor&iacute;as";
 answers[59] = choices[59][3];
 units[59] = "43";
 comments[59] = "Id Pregunta: 6189. NULL";


//  Id pregunta: 6381 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  De acuerdo a lo establecido en el Esquema Nacional de Interoperabilidad, las administraciones utilizar&aacute;n para las aplicaciones que declaren como de fuentes abiertas aquellas licencias que aseguren que los programas, datos o informaci&oacute;n que se comparten:";
 choices[60]= new Array();
 choices[60][0] = "Se ejecuten exclusivamente para el prop&oacute;sito definido.";
 choices[60][1] = "S&oacute;lo permitan conocer su c&oacute;digo fuente a las personas autorizadas.";
 choices[60][2] = "No pueden modificarse sin permiso previo del autor.";
 choices[60][3] = "Todas las anteriores son falsas.";
 answers[60] = choices[60][3];
 units[60] = "43";
 comments[60] = "Id Pregunta: 6381. Art&iacute;culo 16 ENI";


//  Id pregunta: 7179 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  Revocar un certificado electr&oacute;nico significa:";
 choices[61]= new Array();
 choices[61][0] = "Extender su validez m&aacute;s all&aacute; del tiempo l&iacute;mite inicialmente establecido";
 choices[61][1] = "Anular su validez antes de la fecha de caducidad que consta en el mismo";
 choices[61][2] = "Agotar su vida &uacute;til al haberse llegado al l&iacute;mite de vigencia del mismo";
 choices[61][3] = "Desacoplar un certificado de la tarjeta criptogr&aacute;fica en la que reside";
 answers[61] = choices[61][1];
 units[61] = "74";
 comments[61] = "Id Pregunta: 7179. Examen TIC B 2009";


//  Id pregunta: 7766 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)   &iquest;Cu&aacute;l de los siguientes apartados no forma parte del &laquo;Sistema de Gesti&oacute;n de la Calidad&raquo; de la norma ISO 9004:2000?";
 choices[62]= new Array();
 choices[62][0] = " Gesti&oacute;n de sistemas y procesos.";
 choices[62][1] = " Documentaci&oacute;n.";
 choices[62][2] = " Planificaci&oacute;n.";
 choices[62][3] = " Uso de los principios de gesti&oacute;n de la calidad.";
 answers[62] = choices[62][2];
 units[62] = "NULL";
 comments[62] = "Id Pregunta: 7766. Map 2005";


//  Id pregunta: 7819 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)   La Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, establece como sanci&oacute;n por la comisi&oacute;n de infracciones graves:";
 choices[63]= new Array();
 choices[63][0] = " Multa de 30.001 a 150.000 euros.";
 choices[63][1] = " Multa por importe m&aacute;ximo de 50.000 euros.";
 choices[63][2] = " Multa de 150.001 a 600.000 euros.";
 choices[63][3] = " Multa de 30.001 a 100.000 euros como m&aacute;ximo.";
 answers[63] = choices[63][0];
 units[63] = "NULL";
 comments[63] = "Id Pregunta: 7819. Map 2005";


//  Id pregunta: 7894 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)   El Real Decreto 994/1999, de 11 de junio, por el que se aprueba el Reglamento de medidas de seguridad de los ficheros automatizados que contengan datos de car&aacute;cter personal, establece para los ficheros temporales que:";
 choices[64]= new Array();
 choices[64][0] = " No se les aplica el citado reglamento, dado que se borran tras su utilizaci&oacute;n temporal.";
 choices[64][1] = " Deber&aacute;n cumplir el nivel de seguridad que les corresponda con arreglo a los criterios establecidos en el Reglamento.";
 choices[64][2] = " Les corresponde un nivel de seguridad bajo.";
 choices[64][3] = " Se mantendr&aacute;n almacenados durante un a&ntilde;o, incluidas sus copias de seguridad.";
 answers[64] = choices[64][1];
 units[64] = "NULL";
 comments[64] = "Id Pregunta: 7894. Map 2006";


//  Id pregunta: 8266 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  La tasa de rendimiento contable o rentabilidad media de una inversi&oacute;n es igual a:";
 choices[65]= new Array();
 choices[65][0] = "El cociente entre el beneficio medio anual y la inversi&oacute;n media anual.";
 choices[65][1] = "El cociente entre el flujo de caja medio anual y la inversi&oacute;n media anual.";
 choices[65][2] = "El valor actualizado de la diferencia entre los cobros y los pagos derivados de la inversi&oacute;n.";
 choices[65][3] = "El cociente entre el sumatorio de los flujos de caja y el desembolso inicial.";
 answers[65] = choices[65][0];
 units[65] = "38";
 comments[65] = "Id Pregunta: 8266. Examen TIC A1 2010";


//  Id pregunta: 8367 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  &iquest;En qu&eacute; a&ntilde;o se ha producido la ultima revisi&oacute;n del est&aacute;ndar ANSI SQL?";
 choices[66]= new Array();
 choices[66][0] = "1992.";
 choices[66][1] = "2008";
 choices[66][2] = "2011";
 choices[66][3] = "2012";
 answers[66] = choices[66][2];
 units[66] = "57";
 comments[66] = "Id Pregunta: 8367. Similar a examen TIC A2 2010";


//  Id pregunta: 8382 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  Una desventaja de la topolog&iacute;a f&iacute;sica de estrella es que:";
 choices[67]= new Array();
 choices[67][0] = "Requiere m&aacute;s cable que la topolog&iacute;a de bus.";
 choices[67][1] = "Se requieren terminadores.";
 choices[67][2] = "Es dif&iacute;cil conectar nuevos nodos a la red,";
 choices[67][3] = "Toda la red se caer&iacute;a si hubiera una ruptura en el cable principal.";
 answers[67] = choices[67][0];
 units[67] = "102";
 comments[67] = "Id Pregunta: 8382. Examen TIC A2 2010";


//  Id pregunta: 8477 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  Indique cu&aacute;l de los siguientes es un est&aacute;ndar WiMAX para servicios m&oacute;viles:";
 choices[68]= new Array();
 choices[68][0] = "IEEE 802.16-2004";
 choices[68][1] = "IEEE 802.16d";
 choices[68][2] = "IEEE 802.16e.";
 choices[68][3] = "Wimax no permite acceso a servicios m&oacute;viles.";
 answers[68] = choices[68][2];
 units[68] = "107";
 comments[68] = "Id Pregunta: 8477. Examen TIC A2 2010 interna";


//  Id pregunta: 8604 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l de las siguientes utilidades permite realizar miner&iacute;a de datos?";
 choices[69]= new Array();
 choices[69][0] = "JDataMiner.";
 choices[69][1] = "Cubos OLAP de Excel.";
 choices[69][2] = "VNC.";
 choices[69][3] = "Extract to Learnt by SQLServer.";
 answers[69] = choices[69][1];
 units[69] = "68";
 comments[69] = "Id Pregunta: 8604. Examen TIC A2 2010 interna";


//  Id pregunta: 8619 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  &iquest;Qu&eacute; tipos de mantenimiento contempla M&eacute;trica v3 en su proceso MSI?:";
 choices[70]= new Array();
 choices[70][0] = "Correctivo, evolutivo y adaptativo";
 choices[70][1] = "Correctivo, evolutivo, adaptativo y perfectivo";
 choices[70][2] = "Correctivo y evolutivo";
 choices[70][3] = "Correctivo, evolutivo y perfectivo.";
 answers[70] = choices[70][2];
 units[70] = "86";
 comments[70] = "Id Pregunta: 8619. Examen TIC A2 2010 interna";


//  Id pregunta: 8764 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)   En la planificaci&oacute;n por prioridad circular o &quot;Round Robin&quot;:";
 choices[71]= new Array();
 choices[71][0] = "El proceso preparado que pasa a ejecuci&oacute;n corresponde al de tiempo de ejecuci&oacute;n restante m&aacute;s corto";
 choices[71][1] = "De acuerdo a su prioridad, cada proceso preparado pasa a ejecuci&oacute;n durante una cota de tiempo llamada &quot;cuanto&quot;";
 choices[71][2] = "De forma secuencial, cada proceso preparado pasa a ejecuci&oacute;n durante un intervalo de tiempo llamada &quot;cuanto&quot;";
 choices[71][3] = "El proceso preparado que pasa a ejecuci&oacute;n corresponde al de mayor prioridad asignada";
 answers[71] = choices[71][2];
 units[71] = "52";
 comments[71] = "Id Pregunta: 8764. Examen TIC A2 2010 interna";


//  Id pregunta: 9086 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  Con respecto a los Factores Cr&iacute;ticos de &Eacute;xito y los objetivos de la organizaci&oacute;n, se&ntilde;ale la opci&oacute;n INCORRECTA";
 choices[72]= new Array();
 choices[72][0] = "Los objetivos  son los &quot;fines&quot; hacia los cuales se dirige el esfuerzo y el trabajo de la organizaci&oacute;n";
 choices[72][1] = "Los factores de &eacute;xito son los &quot;medios&quot; o condiciones que se deben cumplir para alcanzar los objetivos";
 choices[72][2] = "Para cada objetivo se debe definir, al menos, un factor de &eacute;xito";
 choices[72][3] = "Los factores de &eacute;xito deben determinarse antes que los objetivos, ya que constituyen la base para definir los mismos de manera precisa";
 answers[72] = choices[72][3];
 units[72] = "77";
 comments[72] = "Id Pregunta: 9086. ";


//  Id pregunta: 9127 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  La taxonom&iacute;a de Flynn clasifica los ordenadores en funci&oacute;n de";
 choices[73]= new Array();
 choices[73][0] = "la relaci&oacute;n mayor o menor entre memoria principal y almacenamiento externo";
 choices[73][1] = "el flujo que siguen los datos dentro de la m&aacute;quina y de las instrucciones sobre esos datos";
 choices[73][2] = "el m&eacute;todo de acceso a los dispositivos de almacenamiento externo";
 choices[73][3] = "la relaci&oacute;n entre la velocidad de acceso a datos seg&uacute;n est&eacute;n en memoria o almacenamiento externo";
 answers[73] = choices[73][1];
 units[73] = "45";
 comments[73] = "Id Pregunta: 9127. Examen TIC-A1 2011";


//  Id pregunta: 9133 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  &iquest;C&oacute;mo se pueden clasificar los perif&eacute;ricos seg&uacute;n su funci&oacute;n?";
 choices[74]= new Array();
 choices[74][0] = "de entrada";
 choices[74][1] = "de salida";
 choices[74][2] = "Que realizan funciones de almacenamiento auxiliar";
 choices[74][3] = "Todas las anteriores";
 answers[74] = choices[74][3];
 units[74] = "47";
 comments[74] = "Id Pregunta: 9133. ";


//  Id pregunta: 9264 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  Indicad cu&aacute;l de los siguientes sistemas de ficheros se corresponde con un sistema de ficheros de alto rendimiento con soporte transaccional:";
 choices[75]= new Array();
 choices[75][0] = "NFS ";
 choices[75][1] = "CIFS ";
 choices[75][2] = "JFS";
 choices[75][3] = "FAT";
 answers[75] = choices[75][2];
 units[75] = "55";
 comments[75] = "Id Pregunta: 9264. Examen TICA2-2011";


//  Id pregunta: 9280 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  Se&ntilde;ale la FALSA respecto a los criterios de seguridad, normalizaci&oacute;n y conservaci&oacute;n.";
 choices[76]= new Array();
 choices[76][0] = "Son las recomendaciones sobre normalizaci&oacute;n e interoperabilidad seguidas por la administraci&oacute;n.";
 choices[76][1] = "Fueron elaboradas por el Consejo Superior de Inform&aacute;tica a ra&iacute;z del RD 209/2003.";
 choices[76][2] = "Consta de tres libros o gu&iacute;as: criterios de seguridad, de normalizaci&oacute;n y de conservaci&oacute;n.";
 choices[76][3] = "Todas son verdaderas. ";
 answers[76] = choices[76][3];
 units[76] = "40";
 comments[76] = "Id Pregunta: 9280. ";


//  Id pregunta: 9498 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  Se&ntilde;ale la afimaci&oacute;n falsa con respecto a PerlScript:";
 choices[77]= new Array();
 choices[77][0] = "No se permite su uso en el servidor";
 choices[77][1] = "Es un lenguaje orientado al entorno Microsoft";
 choices[77][2] = "Es un lenguaje de scripting";
 choices[77][3] = "Permite el uso de PERL en los scripts web del cliente";
 answers[77] = choices[77][0];
 units[77] = "114";
 comments[77] = "Id Pregunta: 9498. NULL";


//  Id pregunta: 9620 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  Las fibras (threads) en el SO Windows...";
 choices[78]= new Array();
 choices[78][0] = "Se ejecutan en modo usuario";
 choices[78][1] = "Usan multitarea preemptiva";
 choices[78][2] = "Usan multitarea colaborativa";
 choices[78][3] = "a) y c) son ciertas";
 answers[78] = choices[78][3];
 units[78] = "56";
 comments[78] = "Id Pregunta: 9620. ";


//  Id pregunta: 9660 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l de los siguientes es un modelo de mejora de calidad del SW?";
 choices[79]= new Array();
 choices[79][0] = "BOOTSTRAP";
 choices[79][1] = "TRILLIUM";
 choices[79][2] = "MOSCA";
 choices[79][3] = "Todos los anterires";
 answers[79] = choices[79][3];
 units[79] = "92";
 comments[79] = "Id Pregunta: 9660. MOSCA (Modelo Sist&eacute;mico de Calidad), BOOTSTRAP (Comisi&oacute;n Europea), TRILLIUM (Bell Canad&aacute;)";


//  Id pregunta: 9792 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  Respecto a las licencias de software libre y su compatibilidad con la GPL, se&ntilde;ale la sentencia correcta:";
 choices[80]= new Array();
 choices[80][0] = "Todas las versiones de la Apache license son incompatibles con las versiones de GPL (v1, v2 y v3). ";
 choices[80][1] = "Las versiones de Apache License anteriores a la v2.0 son incompatibles con GPLv3. ";
 choices[80][2] = "La GPLv2 no es compatible con la Apache License v2 porque tiene algunos requisitos que no est&aacute;n en esa versi&oacute;n de la Apache License, por ejemplo ciertas disposiciones sobre las indemnizaciones y la terminaci&oacute;n por patentes. ";
 choices[80][3] = "Si uso una librer&iacute;a bajo la GPLv3 en un proyecto GPLv2, se puede publicar ese proyecto bajo GPLv2 &uacute;nicamente, ya que solo interact&uacute;a con esa librer&iacute;a mediante mecanismos t&iacute;picos, no copia su c&oacute;digo en el proyecto. ";
 answers[80] = choices[80][1];
 units[80] = "61";
 comments[80] = "Id Pregunta: 9792. Examen TIC A2 2013";


//  Id pregunta: 10100 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  En la lista eventos del modelo ambiental, indique que tipo de evento NO existe: ";
 choices[81]= new Array();
 choices[81][0] = "Evento orientado a flujo";
 choices[81][1] = "Evento temporal";
 choices[81][2] = "Evento de control";
 choices[81][3] = "Evento cr&iacute;tico";
 answers[81] = choices[81][3];
 units[81] = "81";
 comments[81] = "Id Pregunta: 10100. NULL";


//  Id pregunta: 10223 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  Teniendo las siguientes sentencias, el resultado ser&aacute;:byte b1 = 126, b2 = 1;byte b3 = b1 + b2;System.out.println(&quot;b3 vale: &quot; + b3);";
 choices[82]= new Array();
 choices[82][0] = "127";
 choices[82][1] = "Da error, ya que se supera el valor m&aacute;ximo que admite un dato de tipo byte";
 choices[82][2] = "Da error y no compila ya que b3 deber&iacute;a ser de tipo int";
 choices[82][3] = "Da error ya que las variables est&aacute;n mal declaradas";
 answers[82] = choices[82][2];
 units[82] = "60";
 comments[82] = "Id Pregunta: 10223. La suma de la segunda l&iacute;nea solo acepta int. Si se suman bytes debe hacerse casting.";


//  Id pregunta: 10244 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Juan desarrolla un software y publica el c&oacute;digo fuente bajo la licencia GPL. Antonio regala a un amigo un CD con el ejecutable de Juan. &iquest;Cu&aacute;l de las siguientes opciones no satisface las obligaciones de Antonio de hacer disponible el c&oacute;digo fuente?";
 choices[83]= new Array();
 choices[83][0] = "Puede alojar el c&oacute;digo fuente en su web site e indicar la URL en el CD";
 choices[83][1] = "Puede proveer el c&oacute;digo fuente en el mismo CD que el ejecutable";
 choices[83][2] = "Puede hacer una oferta por escrito para proveer el c&oacute;digo fuente contra el pago de los costes de distribuci&oacute;n";
 choices[83][3] = "Puede hacer una oferta por escrito para proveer el c&oacute;digo fuente gratis en un CD";
 answers[83] = choices[83][0];
 units[83] = "61";
 comments[83] = "Id Pregunta: 10244. ";


//  Id pregunta: 10298 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Se&ntilde;ale cu&aacute;l de las siguientes NO es una Protocol Data Unit (PDU) del protocolo SNMP v2/v3:";
 choices[84]= new Array();
 choices[84][0] = "GETREQUEST PDU";
 choices[84][1] = "SETRESPONSE PDU";
 choices[84][2] = "RESPONSE PDU";
 choices[84][3] = "INFORMREQUEST PDU";
 answers[84] = choices[84][1];
 units[84] = "104";
 comments[84] = "Id Pregunta: 10298. TIC A2, libre, examen 2013";


//  Id pregunta: 10308 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;Qu&eacute; es Transact-SQL?";
 choices[85]= new Array();
 choices[85][0] = "Un sistema gestor de base de datos de tipo NoSQL.";
 choices[85][1] = "Una extensi&oacute;n propietaria al est&aacute;ndar SQL.";
 choices[85][2] = "Una query que equivale a realizar consultas SELECT por lotes.";
 choices[85][3] = "Una biblioteca de clases para mapear objetos sobre una base de datos relacional.";
 answers[85] = choices[85][1];
 units[85] = "58";
 comments[85] = "Id Pregunta: 10308. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10535 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l de las siguientes no es una ventaja de los discos duros de estado s&oacute;lido respecto a los tradicionales?";
 choices[86]= new Array();
 choices[86][0] = "Generan menos ruido y calor que los discos duros tradicionales";
 choices[86][1] = "Tienen un menor consumo energ&eacute;tico";
 choices[86][2] = "La latencia de acceso a los datos es menor";
 choices[86][3] = "Tienen mayor velocidad en operaciones I/O secuenciales";
 answers[86] = choices[86][3];
 units[86] = "48";
 comments[86] = "Id Pregunta: 10535. NULL";


//  Id pregunta: 10711 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  &iquest;Qu&eacute; especificaci&oacute;n de SICRES se incluye en la Norma T&eacute;cnica de Interoperabilidad de Modelo de Datos para el Intercambio de asientos entre las entidades registrales?";
 choices[87]= new Array();
 choices[87][0] = "1";
 choices[87][1] = "2";
 choices[87][2] = "3";
 choices[87][3] = "4";
 answers[87] = choices[87][1];
 units[87] = "43";
 comments[87] = "Id Pregunta: 10711. ";


//  Id pregunta: 10765 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  &iquest;Qu&eacute; car&aacute;cter tiene el informe t&eacute;cnico de la memoria y los pliegos de prescripciones t&eacute;cnicas para la contrataci&oacute;n de tecnolog&iacute;as de la informaci&oacute;n?";
 choices[88]= new Array();
 choices[88][0] = "Preceptivo";
 choices[88][1] = "Potestativo";
 choices[88][2] = "Informativo";
 choices[88][3] = "Recomendaci&oacute;n";
 answers[88] = choices[88][0];
 units[88] = "24";
 comments[88] = "Id Pregunta: 10765. ";


//  Id pregunta: 10782 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Respecto al sistema de c&oacute;digo seguro de verificaci&oacute;n, seg&uacute;n el Real Decreto 1671/2009, &iquest;cu&aacute;l de las siguientes es una afirmaci&oacute;n verdadera?";
 choices[89]= new Array();
 choices[89][0] = "Garantiza la confidencialidad de un documento.";
 choices[89][1] = "Garantiza la posibilidad de verificar el documento que tenga asociado por tiempo ilimitado.";
 choices[89][2] = "Su aplicaci&oacute;n requerir&aacute; una orden ministerial del Director General del organismo p&uacute;blico.";
 choices[89][3] = "Garantiza su vinculaci&oacute;n con el documento generado y con el firmante.";
 answers[89] = choices[89][3];
 units[89] = "43";
 comments[89] = "Id Pregunta: 10782. Examen GSI 2014";


//  Id pregunta: 10953 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Respecto a la Comisi&oacute;n de Estrategia TIC de la Administraci&oacute;n General del Estado, se&ntilde;ale la respuesta correcta:";
 choices[90]= new Array();
 choices[90][0] = "Est&aacute; adscrita al Ministerio de la Presidencia y es el &oacute;rgano encargado de la definici&oacute;n de la aplicaci&oacute;n de la Estrategia TIC de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos.";
 choices[90][1] = "Impulsa la colaboraci&oacute;n y cooperaci&oacute;n con las comunidades aut&oacute;nomas y las entidades locales para la puesta en marcha de servicios interadministrativos integrados.";
 choices[90][2] = "Define las prioridades de inversi&oacute;n en materias TIC bajo un convenio marco de colaboraci&oacute;n con la Direcci&oacute;n General de Patrimonio del Estado.";
 choices[90][3] = "Elevar&aacute; semestralmente, a trav&eacute;s de su Presidente, un informe al Consejo de Ministros, en el que se recoger&aacute; el estado de la transformaci&oacute;n digital de las Administraciones P&uacute;blicas.";
 answers[90] = choices[90][1];
 units[90] = "30";
 comments[90] = "Id Pregunta: 10953. TIC A1 AGE 2014";


//  Id pregunta: 11016 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;En cu&aacute;ntos cap&iacute;tulos se estructura el RD 4/2010 (ENI)?";
 choices[91]= new Array();
 choices[91][0] = "8";
 choices[91][1] = "10";
 choices[91][2] = "11";
 choices[91][3] = "12";
 answers[91] = choices[91][3];
 units[91] = "30";
 comments[91] = "Id Pregunta: 11016. ";


//  Id pregunta: 11028 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l es una soluci&oacute;n de servicio en la nube para el registro en las administraciones?";
 choices[92]= new Array();
 choices[92][0] = "ORVE";
 choices[92][1] = "GEISER";
 choices[92][2] = "Las 2 anteriores";
 choices[92][3] = "Ambas son soluciones, pero no en la nube";
 answers[92] = choices[92][2];
 units[92] = "44";
 comments[92] = "Id Pregunta: 11028. ";


//  Id pregunta: 11371 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes afirmaciones sobre un sistema de gesti&oacute;n de configuraci&oacute;n (CMS) es la correcta?";
 choices[93]= new Array();
 choices[93][0] = "El CMS no debe contener datos corporativos acerca de los clientes y usuarios";
 choices[93][1] = "Puede haber m&aacute;s de un CMS";
 choices[93][2] = "No debe haber m&aacute;s de una base de datos de gesti&oacute;n de la configuraci&oacute;n (CMDB)";
 choices[93][3] = "Aunque una organizaci&oacute;n externalice sus servicios de TI tiene la necesidad de un CMS";
 answers[93] = choices[93][3];
 units[93] = "98";
 comments[93] = "Id Pregunta: 11371. ";


//  Id pregunta: 11412 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Seg&uacute;n la Ley 9/2014, &iquest;cu&aacute;l de las siguientes NO es una facultad del gobierno para la administraci&oacute;n del espectro?";
 choices[94]= new Array();
 choices[94][0] = "La adecuada utilizaci&oacute;n del espectro radioel&eacute;ctrico mediante el empleo de equipos y aparatos.";
 choices[94][1] = "El procedimiento de determinaci&oacute;n, control e inspecci&oacute;n de los niveles &uacute;nicos de emisi&oacute;n radioel&eacute;ctrica tolerable y que no supongan un peligro para la salud p&uacute;blica.";
 choices[94][2] = "La determinaci&oacute;n, potestad sancionadora e inspecci&oacute;n de niveles &uacute;nicos de emisi&oacute;n radioel&eacute;ctrica.";
 choices[94][3] = "El procedimiento para la elaboraci&oacute;n de los planes de utilizaci&oacute;n del espectro radioel&eacute;ctrico.";
 answers[94] = choices[94][3];
 units[94] = "110";
 comments[94] = "Id Pregunta: 11412. ";


//  Id pregunta: 11472 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Seg&uacute;n la Ley 9/2014, se&ntilde;ale la respuesta CORRECTA (facultades del Gobierno):";
 choices[95]= new Array();
 choices[95][0] = "Elaborar y aprobar planes de utilizaci&oacute;n del espectro.";
 choices[95][1] = "Determinaci&oacute;n, control e inspecci&oacute;n de los niveles de emisi&oacute;n.";
 choices[95][2] = "Determinar el operador del servicio universal.";
 choices[95][3] = "Todas son atribuciones del Gobierno.";
 answers[95] = choices[95][2];
 units[95] = "110";
 comments[95] = "Id Pregunta: 11472. ";


//  Id pregunta: 11483 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  El Plan de Transformaci&oacute;n Digital de la Administraci&oacute;n General del Estado (AGE) y sus Organismos P&uacute;blicos, Estrategia TIC 2015-2020, fue aprobado por";
 choices[96]= new Array();
 choices[96][0] = "La Comisi&oacute;n de Estrategia TIC (CETIC) el 2 de Octubre de 2015.";
 choices[96][1] = "El Consejo de Ministros el 2 de Octubre de 2015.";
 choices[96][2] = "La Direcci&oacute;n TIC (DTIC) el 15 de septiembre de 2015.";
 choices[96][3] = "Por el Consejo Superior de Administraci&oacute;n Electr&oacute;nica (CSAE) el 15 de Septiembre de 2015.";
 answers[96] = choices[96][1];
 units[96] = "44";
 comments[96] = "Id Pregunta: 11483. NULL";


//  Id pregunta: 11548 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  De acuerdo a los 6 niveles definidos en CMMI para medir la capacidad de los procesos, &iquest;Qu&eacute; nivel corresponde a un proceso que adem&aacute;s de ser gestionado, se ajusta a la pol&iacute;tica de procesos que existe en la organizaci&oacute;n, alineada con las directivas de la empresa?";
 choices[97]= new Array();
 choices[97][0] = "Nivel 3 Definido";
 choices[97][1] = "Nivel 4 Cuantitativamente Gestionado";
 choices[97][2] = "Nivel 3 Predecible";
 choices[97][3] = "Nivel 5 Optimizado";
 answers[97] = choices[97][0];
 units[97] = "87";
 comments[97] = "Id Pregunta: 11548. NULL";


//  Id pregunta: 11554 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  El n&uacute;mero de l&iacute;neas de c&oacute;digo fuente de una aplicaci&oacute;n es una m&eacute;trica de estimaci&oacute;n del software de:";
 choices[98]= new Array();
 choices[98][0] = "Tama&ntilde;o, directa y objetiva.";
 choices[98][1] = "Producitividad, complejidad y objetiva.";
 choices[98][2] = "Complejidad y tama&ntilde;o.";
 choices[98][3] = "Tama&ntilde;o, directa y subjetiva.";
 answers[98] = choices[98][0];
 units[98] = "89";
 comments[98] = "Id Pregunta: 11554. NULL";


//  Id pregunta: 11770 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y de las Comunicaciones no podr&aacute; informar un expediente de contrataci&oacute;n si la documentaci&oacute;n del mismo no incluye: ";
 choices[99]= new Array();
 choices[99][0] = "Presupuesto, objeto y justificaci&oacute;n de la necesidad&nbsp;";
 choices[99][1] = "Presupuesto, objeto y certificado de exclusividad";
 choices[99][2] = "Pliego de cl&aacute;usulas administrativas y memoria econ&oacute;mica";
 choices[99][3] = "Objeto, justificaci&oacute;n temporal y ratio perfiles/horas";
 answers[99] = choices[99][0];
 units[99] = "24, 41";
 comments[99] = "Id Pregunta: 11770. ";


