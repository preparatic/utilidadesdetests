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

//  Id pregunta: 21 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;les son las caracter&iacute;sticas fundamentales establecidas por X/Open en el entorno de los sistemas abiertos?: ";
 choices[0]= new Array();
 choices[0][0] = "Interoperabilidad, seguridad y portabilidad";
 choices[0][1] = "Portabilidad, interconectividad e interoperabilidad";
 choices[0][2] = "Portabilidad, escalabilidad e interoperabilidad";
 choices[0][3] = "Integridad, interconectivilidad e interoperabilidad";
 answers[0] = choices[0][2];
 units[0] = "40";
 comments[0] = "Id Pregunta: 21. ";


//  Id pregunta: 196 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  El t&eacute;rmino MAGERIT es un acr&oacute;nimo que procede de los siguientes t&eacute;rminos, o significa lo siguiente:";
 choices[1]= new Array();
 choices[1][0] = "Mercado Abierto y Gratuito a la Exportaci&oacute;n de Recursos Inform&aacute;ticos y de Telecomunicaciones";
 choices[1][1] = "Sistema Inform&aacute;tico propio, financiado y desarrollado por la Comunidad Aut&oacute;noma de Madrid (de aqu&iacute; el nombre de: &quot;Magerit&quot;)";
 choices[1][2] = "Metodolog&iacute;a de An&aacute;lisis y Gesti&oacute;n de Riesgos de los Sistemas de Informaci&oacute;n";
 choices[1][3] = "Methot Aid for Gradual Employ Resource of Information Technology";
 answers[1] = choices[1][2];
 units[1] = "33";
 comments[1] = "Id Pregunta: 196. Examen TIC MAP B 2004";


//  Id pregunta: 447 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  Seg&uacute;n las teor&iacute;as de Alvin Toffler:";
 choices[2]= new Array();
 choices[2][0] = "Las organizaciones tradicionales tienen dos elementos caracter&iacute;sticos &quot;cub&iacute;culos&quot; y &quot;canales&quot;";
 choices[2][1] = "Las organizaciones basadas en la informaci&oacute;n tienen dos elementos caracter&iacute;sticos &quot;cub&iacute;culos&quot; y &quot;canales&quot;";
 choices[2][2] = "La evoluci&oacute;n en el tiempo del presupuesto invertido en inform&aacute;tica produce una gr&aacute;fica en forma de S";
 choices[2][3] = "La evoluci&oacute;n en el tiempo del presupuesto invertido en inform&aacute;tica produce una gr&aacute;fica en forma de doble S";
 answers[2] = choices[2][0];
 units[2] = "22";
 comments[2] = "Id Pregunta: 447. ";


//  Id pregunta: 690 AÃ±o de creación de pregunta: 2009-01-01
 questions[3]= "4)  De acuerdo con la Ley 25/2007 Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, la retenci&oacute;n de datos de tr&aacute;fico relativo a las comunicaciones electr&oacute;nicas es deber de:";
 choices[3]= new Array();
 choices[3][0] = "los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones, en los t&eacute;rminos establecidos en la Ley 32/2003, de 3 de noviembre, General de Telecomunicaciones.";
 choices[3][1] = "los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico, en los t&eacute;rminos establecidos en la Ley 32/2003, de 3 de noviembre, General de Telecomunicaciones.";
 choices[3][2] = "los Operadores de Servicios de comunicaciones electr&oacute;nicas, Los proveedores de Acceso a redes de telecomunicaciones, Los prestadores de servicios de alojamiento de datos";
 choices[3][3] = "las respuestas 'a' y 'b' son correctas";
 answers[3] = choices[3][0];
 units[3] = "30";
 comments[3] = "Id Pregunta: 690. Art&iacute;culo 2 de la ley";


//  Id pregunta: 788 AÃ±o de creación de pregunta: 2009-01-01
 questions[4]= "5)  Seg&uacute;n la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, los datos de tr&aacute;fico deben retenerse por un periodo de:";
 choices[4]= new Array();
 choices[4][0] = "doce meses computados desde la fecha en que se haya producido la comunicaci&oacute;n. Reglamentariamente, previa consulta a los operadores, se podr&aacute; ampliar o reducir el plazo de conservaci&oacute;n para determinados datos o una categor&iacute;a de datos hasta un m&aacute;ximo de dos a&ntilde;os o un m&iacute;nimo de seis meses.";
 choices[4][1] = "doce meses computados desde la fecha en que se haya producido la comunicaci&oacute;n. Reglamentariamente, previa consulta a los operadores, se podr&aacute; ampliar o reducir el plazo de conservaci&oacute;n para determinados datos o una categor&iacute;a de datos hasta un m&aacute;ximo de dieciocho meses o un m&iacute;nimo de seis meses.";
 choices[4][2] = "La Ley lo fijar&aacute; reglamentariamente";
 choices[4][3] = "12 meses m&iacute;nimo para los proveedores de redes (carriers) y 24 meses m&iacute;nimo para los proveedores de acceso a internet y de alojamiento";
 answers[4] = choices[4][0];
 units[4] = "30";
 comments[4] = "Id Pregunta: 788. articulo 5";


//  Id pregunta: 1072 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  En cuanto a las t&eacute;cnicas de representaci&oacute;n del conocimiento, podemos afirmar que:";
 choices[5]= new Array();
 choices[5][0] = "Un Sistema Basado en el Conocimiento (SBC) es un sistema inform&aacute;tico cuya principal caracter&iacute;stica reside en que el conocimiento necesario para resolver un problema aparece como estructura procesable separada del procedimiento que la manipula";
 choices[5][1] = "Los mecanismos de inferencia son paradigmas de representaci&oacute;n utilizados en las bases de conocimiento de los SBC";
 choices[5][2] = "La representaci&oacute;n param&eacute;trica est&aacute; basada en una concepci&oacute;n epistemol&oacute;gica del mundo en t&eacute;rminos de conceptos";
 choices[5][3] = "Las representaciones de tipo simb&oacute;lico est&aacute;n basadas en una visi&oacute;n del mundo de tipo fisiol&oacute;gico, tales como las redes neuronales";
 answers[5] = choices[5][0];
 units[5] = "64";
 comments[5] = "Id Pregunta: 1072. ";


//  Id pregunta: 1086 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  En el modelo cliente/servidor:";
 choices[6]= new Array();
 choices[6][0] = "Pueden elegirse distintos lenguajes de programaci&oacute;n para cada una de las partes";
 choices[6][1] = "Debe utilizarse siempre SQL para los procesos de tratamiento de datos";
 choices[6][2] = "El lenguaje para la parte cliente, debe permitir caracter&iacute;sticas de orientaci&oacute;n al objeto";
 choices[6][3] = "El lenguaje en el que se programen los procesos a ejecutarse en el cliente determina el que se debe utilizar para programar los procesos de los servidores";
 answers[6] = choices[6][0];
 units[6] = "50";
 comments[6] = "Id Pregunta: 1086. ";


//  Id pregunta: 1192 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Indique cu&aacute;l es una ventaja de los applets sobre los scripts:";
 choices[7]= new Array();
 choices[7][0] = "El c&oacute;digo fuente de los applets no es visible";
 choices[7][1] = "Un applet descarga en una sola conexi&oacute;n todos los componentes necesarios";
 choices[7][2] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son verdaderas";
 choices[7][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son falsas";
 answers[7] = choices[7][2];
 units[7] = "116";
 comments[7] = "Id Pregunta: 1192. ";


//  Id pregunta: 1371 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Si una relaci&oacute;n no posee grupos repetitivos y cada atributo que no pertenezca a la clave es identificado &uacute;nicamente y de forma total por la clave se dice que est&aacute; en:";
 choices[8]= new Array();
 choices[8][0] = "Primera forma normal";
 choices[8][1] = "Segunda forma normal";
 choices[8][2] = "Tercera forma normal";
 choices[8][3] = "Forma normal de Boyce-Codd";
 answers[8] = choices[8][1];
 units[8] = "58";
 comments[8] = "Id Pregunta: 1371. ";


//  Id pregunta: 1453 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l es el objetivo del concepto WYSIWYG en los sistemas inform&aacute;ticos?:";
 choices[9]= new Array();
 choices[9][0] = "Lograr alta definici&oacute;n (resoluci&oacute;n) en los documentos impresos";
 choices[9][1] = "Que a la hora de imprimir se tenga claro c&oacute;mo queda el documento";
 choices[9][2] = "Disponer de fonts de todos los tama&ntilde;os deseados a partir de una font base dada";
 choices[9][3] = "Crear documentos multimedia";
 answers[9] = choices[9][1];
 units[9] = "47";
 comments[9] = "Id Pregunta: 1453. ";


//  Id pregunta: 1590 AÃ±o de creación de pregunta: 2003-01-01
 questions[10]= "11)  En la arquitectura de tres niveles para el dise&ntilde;o de bases de datos establecida por el ANSI, &iquest;qu&eacute; nivel se ocupa de las reglas de integridad, claves e &iacute;ndices?";
 choices[10]= new Array();
 choices[10][0] = "Nivel f&iacute;sico.";
 choices[10][1] = "Nivel conceptual.";
 choices[10][2] = "Nivel Externo.";
 choices[10][3] = "Ninguno de los tres niveles se ocupa de las reglas de integridad, claves e &iacute;ndices, lo hace el administrador de la base de datos.";
 answers[10] = choices[10][0];
 units[10] = "57";
 comments[10] = "Id Pregunta: 1590. ";


//  Id pregunta: 1599 AÃ±o de creación de pregunta: 2003-01-01
 questions[11]= "12)  En un modelo de datos jer&aacute;rquico:";
 choices[11]= new Array();
 choices[11][0] = "Un registro no es subordinado directo de ning&uacute;n otro registro.";
 choices[11][1] = "Un registro es subordinado directo de como m&aacute;ximo otro registro.";
 choices[11][2] = "Un registro es subordinado directo de n registros, dependiendo de la topolog&iacute;a del modelo.";
 choices[11][3] = "Los registros estar organizados en una red de relaciones mediante un grafo.";
 answers[11] = choices[11][1];
 units[11] = "57";
 comments[11] = "Id Pregunta: 1599. Junta Andaluc&iacute;a";


//  Id pregunta: 1645 AÃ±o de creación de pregunta: 2004-01-01
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre la arquitectura hardware NUMA es cierta?";
 choices[12]= new Array();
 choices[12][0] = "Se tarda m&aacute;s en acceder a ciertas zonas de memoria que a otras";
 choices[12][1] = "Cada procesador tiene su propia memoria local";
 choices[12][2] = "Cada procesador puede acceder a las memorias de otros procesadores";
 choices[12][3] = "Todas las anteriores son ciertas";
 answers[12] = choices[12][3];
 units[12] = "45";
 comments[12] = "Id Pregunta: 1645. ";


//  Id pregunta: 1743 AÃ±o de creación de pregunta: 2006-01-01
 questions[13]= "14)  En el entorno Microsoft WebDAV se utiliza para";
 choices[13]= new Array();
 choices[13][0] = "Recuperaci&oacute;n automatizada del sistema";
 choices[13][1] = "Para sincronizaci&oacute;n de copias de DFS.";
 choices[13][2] = "Compartici&oacute;n remota de documentos";
 choices[13][3] = "Encriptaci&oacute;n del sistema de archivos.";
 answers[13] = choices[13][2];
 units[13] = "56";
 comments[13] = "Id Pregunta: 1743. ";


//  Id pregunta: 1764 AÃ±o de creación de pregunta: 2006-01-01
 questions[14]= "15)  Se&ntilde;ale la afirmaci&oacute;n FALSA sobre los ficheros .jar de Java";
 choices[14]= new Array();
 choices[14][0] = "Est&aacute;ndar de empaquetado de ficheros compilados, para facilitar su distribuci&oacute;n y reutilizaci&oacute;n";
 choices[14][1] = "Utiliza para la compresi&oacute;n el algoritmo LZW";
 choices[14][2] = "Son ficheros independientes de la plataforma y cualquier JVM (Java Virtual Machine) ser&aacute; capaz de interpretarlos";
 choices[14][3] = "Todas las afirmaciones anteriores son verdaderas";
 answers[14] = choices[14][3];
 units[14] = "60";
 comments[14] = "Id Pregunta: 1764. A es falsa. Tambi&eacute;n puede incluir im&aacute;genes y otro tipo de archivos. Los .class no son compilados en el sentido estricto.";


//  Id pregunta: 1897 AÃ±o de creación de pregunta: 2006-01-01
 questions[15]= "16)  Software de negocio para mejorar la comunicaci&oacute;n entre organizaciones y sus socios";
 choices[15]= new Array();
 choices[15][0] = "Acuerdo de Licencia de Usuario Final (EULA)";
 choices[15][1] = "Pol&iacute;tica de Seguridad";
 choices[15][2] = "Acuerdo de nivel de servicio (SLA)";
 choices[15][3] = "Gesti&oacute;n de relaciones entre socios (PRM)";
 answers[15] = choices[15][3];
 units[15] = "23";
 comments[15] = "Id Pregunta: 1897. ";


//  Id pregunta: 2033 AÃ±o de creación de pregunta: 2004-01-01
 questions[16]= "17)  Cu&aacute;l de los siguientes no es un factor de calidad de McCall:";
 choices[16]= new Array();
 choices[16][0] = "Fiabilidad";
 choices[16][1] = "Usabilidad";
 choices[16][2] = "Facilidad de mantenimiento";
 choices[16][3] = "Bajo coste";
 answers[16] = choices[16][3];
 units[16] = "88";
 comments[16] = "Id Pregunta: 2033. Similar a examen TIC SS A 2003";


//  Id pregunta: 2037 AÃ±o de creación de pregunta: 2004-01-01
 questions[17]= "18)  En UML una variable o un m&eacute;todo con la notaci&oacute;n: '#' &iquest;qu&eacute; significa?";
 choices[17]= new Array();
 choices[17][0] = "Que es p&uacute;blica.";
 choices[17][1] = "Que es privada.";
 choices[17][2] = "Que es protegida.";
 choices[17][3] = "Ninguna de las anteriores.";
 answers[17] = choices[17][2];
 units[17] = "84";
 comments[17] = "Id Pregunta: 2037. ";


//  Id pregunta: 2069 AÃ±o de creación de pregunta: 2004-01-01
 questions[18]= "19)  No es una caracter&iacute;stica de la orientaci&oacute;n a objetos";
 choices[18]= new Array();
 choices[18][0] = "la programaci&oacute;n funcional";
 choices[18][1] = "El acoplamiento d&eacute;bil";
 choices[18][2] = "La ocultaci&oacute;n de la implementacion";
 choices[18][3] = "el polimorfismo";
 answers[18] = choices[18][0];
 units[18] = "82";
 comments[18] = "Id Pregunta: 2069. ";


//  Id pregunta: 2214 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  &iquest;Qu&eacute; modelo de desarrollo de software tiene como caracter&iacute;stica convertir autom&aacute;ticamente una especificaci&oacute;n formal en un programa que satisfaga dicha especificaci&oacute;n?:";
 choices[19]= new Array();
 choices[19][0] = "Modelo en espiral";
 choices[19][1] = "Modelo evolutivo";
 choices[19][2] = "Modelo de lenguaje de especificaci&oacute;n formal";
 choices[19][3] = "Modelo de transformaci&oacute;n";
 answers[19] = choices[19][3];
 units[19] = "76";
 comments[19] = "Id Pregunta: 2214. ";


//  Id pregunta: 2402 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  La necesidad b&aacute;sica de la garant&iacute;a de calidad:";
 choices[20]= new Array();
 choices[20][0] = "Est&aacute; relacionada con el potencial de errores o defectos latentes en el producto software";
 choices[20][1] = "Est&aacute; relacionada con la necesidad de abaratar costes";
 choices[20][2] = "Est&aacute; relacionada con la disfunci&oacute;n recurrente";
 choices[20][3] = "Est&aacute; relacionada con la ley de Markov";
 answers[20] = choices[20][0];
 units[20] = "87";
 comments[20] = "Id Pregunta: 2402. NULL";


//  Id pregunta: 2634 AÃ±o de creación de pregunta: 2003-01-01
 questions[21]= "22)  El  prototipado de sistemas de informaci&oacute;n, seg&uacute;n M&eacute;trica V3.";
 choices[21]= new Array();
 choices[21][0] = "Tiene como objetivo elaborar un modelo o maqueta de las interfaces entre el sistema y el usuario para evaluar el rendimiento y funcionalidad del sistema.";
 choices[21][1] = "Es la t&eacute;cnica principal para obtener un cat&aacute;logo de requisitos del usuario de forma alternativa a la obtenida en la fase del an&aacute;sis del sistema.";
 choices[21][2] = "Es una pr&aacute;ctica cuyo aspecto clave es la identificaci&oacute;n de los usuarios a los que va a dirigir, teniendo en cuenta que debe responder a diferentes individualidades, con distintos conocimientos y habilidades.";
 choices[21][3] = "Se debe centrar en las funciones fundamentales, ignorando aquellos atributos relacionados con el aspecto est&eacute;tico como son el color y el sonido y en general todo aspecto vidual del sistema";
 answers[21] = choices[21][2];
 units[21] = "85,86";
 comments[21] = "Id Pregunta: 2634. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 2750 AÃ±o de creación de pregunta: 2006-01-01
 questions[22]= "23)  Indique de las siguientes cual no es una metodologia de desarrollo orientada a objetos";
 choices[22]= new Array();
 choices[22][0] = "SA/SD";
 choices[22][1] = "OMT";
 choices[22][2] = "Proceso Unificado de modelado";
 choices[22][3] = "Tarjetas de clase";
 answers[22] = choices[22][0];
 units[22] = "82";
 comments[22] = "Id Pregunta: 2750. ";


//  Id pregunta: 2782 AÃ±o de creación de pregunta: 2006-01-01
 questions[23]= "24)  En M&Eacute;TRICA 3, la definici&oacute;n de la Arquitectura del Sistema, se lleva a cabo en:";
 choices[23]= new Array();
 choices[23][0] = "El An&aacute;lisis del Sistema de Informaci&oacute;n.";
 choices[23][1] = "La Planificaci&oacute;n de Sistemas.";
 choices[23][2] = "El Dise&ntilde;o del Sistema de Informaci&oacute;n.";
 choices[23][3] = "La Especificaci&oacute;n Funcional del Sistema.";
 answers[23] = choices[23][2];
 units[23] = "86";
 comments[23] = "Id Pregunta: 2782. NULL";


//  Id pregunta: 3113 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  &iquest;A qu&eacute; nivel ISO-OSI operan los bridges (puentes)?:";
 choices[24]= new Array();
 choices[24][0] = "A nivel f&iacute;sico";
 choices[24][1] = "A nivel de red";
 choices[24][2] = "A nivel de enlace";
 choices[24][3] = "A nivel de transporte";
 answers[24] = choices[24][2];
 units[24] = "100";
 comments[24] = "Id Pregunta: 3113. NULL";


//  Id pregunta: 3560 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  En transmisi&oacute;n de datos, &iquest;qu&eacute; ventaja reporta el uso de c&eacute;lulas peque&ntilde;as de longitud fija?:";
 choices[25]= new Array();
 choices[25][0] = "Utilizaci&oacute;n m&aacute;s eficiente del enlace ya que un dispositivo puede enviar c&eacute;lulas sin necesidad de un slot 'libre' de tiempo";
 choices[25][1] = "Minimizaci&oacute;n de esperas intermitentes que pueden derivarse de la espera para que se transmita un paquete largo";
 choices[25][2] = "Una estaci&oacute;n puede enviar muchas c&eacute;lulas en fila sin tener que esperar para est&eacute; disponible su slot de tiempo";
 choices[25][3] = "Puede usarse un pol&iacute;tica de tr&aacute;fico para comparar el tr&aacute;fico real con el acordado";
 answers[25] = choices[25][1];
 units[25] = "109";
 comments[25] = "Id Pregunta: 3560. ";


//  Id pregunta: 3640 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  La RFC que contiene las especificaciones del protocolo IPv6 es:";
 choices[26]= new Array();
 choices[26][0] = "1945";
 choices[26][1] = "1884";
 choices[26][2] = "2460";
 choices[26][3] = "2584";
 answers[26] = choices[26][2];
 units[26] = "100";
 comments[26] = "Id Pregunta: 3640. NULL";


//  Id pregunta: 3758 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Para conectar una intranet dispersa geogr&aacute;ficamente con aplicaciones cr&iacute;ticas, la mejor opci&oacute;n es:";
 choices[27]= new Array();
 choices[27][0] = "El acceso telef&oacute;nico conmutado";
 choices[27][1] = "Utilizar la t&eacute;cnica de Tunneling";
 choices[27][2] = "Utilizar l&iacute;neas privadas";
 choices[27][3] = "Utilizar Internet como mecanismo de interconexi&oacute;n de los equipos de la intranet";
 answers[27] = choices[27][1];
 units[27] = "113";
 comments[27] = "Id Pregunta: 3758. ";


//  Id pregunta: 3806 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Se pueden se&ntilde;alar como ventajas del EDI:";
 choices[28]= new Array();
 choices[28][0] = "Reduce los gastos de tratamiento de una transacci&oacute;n, as&iacute; como los de transmisi&oacute;n de la misma";
 choices[28][1] = "Se puede aplicar  a todo tipo de sectores de la industria, pero dentro de un pa&iacute;s";
 choices[28][2] = "No existen condicionantes legales para su implantaci&oacute;n";
 choices[28][3] = "Se trata de un sistema de futuro";
 answers[28] = choices[28][0];
 units[28] = "112";
 comments[28] = "Id Pregunta: 3806. ";


//  Id pregunta: 3857 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  El cortafuegos CheckPoint Firewall-1 es:";
 choices[29]= new Array();
 choices[29][0] = "Un cortafuegos de filtrado din&aacute;mico de paquetes";
 choices[29][1] = "Un cortafuegos de inspecci&oacute;n de estado";
 choices[29][2] = "Un cortafuegos h&iacute;brido que intercepta los paquetes entre las capas 3 y4 del modelo OSI";
 choices[29][3] = "No es nada de lo anterior";
 answers[29] = choices[29][1];
 units[29] = "111";
 comments[29] = "Id Pregunta: 3857. NULL";


//  Id pregunta: 4091 AÃ±o de creación de pregunta: 2006-01-01
 questions[30]= "31)  En .NET el c&oacute;digo fuente se compila a un lenguaje intermedio";
 choices[30]= new Array();
 choices[30][0] = "que se llama Bytecode, igual que en Jaba";
 choices[30][1] = "denominado IL, Lenguaje intermedio";
 choices[30][2] = "No se compila, sino que el c&oacute;digo es interpretado directamente por un int&eacute;rprete CLR";
 choices[30][3] = "que depende de la m&aacute;quina en la que se va a ejecutar";
 answers[30] = choices[30][1];
 units[30] = "115";
 comments[30] = "Id Pregunta: 4091. ";


//  Id pregunta: 4116 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  Wikipedia es:";
 choices[31]= new Array();
 choices[31][0] = "Un diccionario de pago.";
 choices[31][1] = "Un diccionario libre con licencia GFDL.";
 choices[31][2] = "Una enciclopedia de pago publicada en varios idiomas.";
 choices[31][3] = "Una enciclopedia libre escrita por voluntarios.";
 answers[31] = choices[31][3];
 units[31] = "112";
 comments[31] = "Id Pregunta: 4116. ";


//  Id pregunta: 4118 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  Cuando dividimos la cantidad de trabajo que ejecuta un ordenador entre dos o m&aacute;s hablamos de";
 choices[32]= new Array();
 choices[32][0] = "clusters";
 choices[32][1] = "multicast";
 choices[32][2] = "balanceo de carga";
 choices[32][3] = "peering";
 answers[32] = choices[32][2];
 units[32] = "49";
 comments[32] = "Id Pregunta: 4118. ";


//  Id pregunta: 4168 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  Un test de penetraci&oacute;n proporciona todo lo siguiente salvo";
 choices[33]= new Array();
 choices[33][0] = "identificaci&oacute;n de fallos de seguridad";
 choices[33][1] = "demostraci&oacute;n de los efectos de los fallos de seguridad";
 choices[33][2] = "un m&eacute;todo de correcci&oacute;n de los fallos";
 choices[33][3] = "verificaci&oacute;n de los niveles actuales de resistencia a la infiltraci&oacute;n";
 answers[33] = choices[33][1];
 units[33] = "111";
 comments[33] = "Id Pregunta: 4168. NULL";


//  Id pregunta: 4187 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  Respecto al protocolo IP";
 choices[34]= new Array();
 choices[34][0] = "IPv6 no permite OSPF";
 choices[34][1] = "IPv4 no permite al origen de la comunicaci&oacute;n seleccionar el encaminamiento";
 choices[34][2] = "IPv6 permite al origen de la comunicaci&oacute;n seleccionar el encaminamiento";
 choices[34][3] = "ninguna de las anteriores";
 answers[34] = choices[34][2];
 units[34] = "100";
 comments[34] = "Id Pregunta: 4187. ";


//  Id pregunta: 4374 AÃ±o de creación de pregunta: 2007-01-01
 questions[35]= "36)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas no es propia del modelado de sistemas?";
 choices[35]= new Array();
 choices[35][0] = "Descomposici&oacute;n.";
 choices[35][1] = "Partici&oacute;n en clases de equivalencia.";
 choices[35][2] = "Aproximaciones sucesivas.";
 choices[35][3] = "An&aacute;lisis del dominio.";
 answers[35] = choices[35][1];
 units[35] = "80";
 comments[35] = "Id Pregunta: 4374. ";


//  Id pregunta: 4574 AÃ±o de creación de pregunta: 2007-01-01
 questions[36]= "37)  &iquest;Cual de los siguientes tipos de sistemas de ficheros, lo es de red?";
 choices[36]= new Array();
 choices[36][0] = "ext2";
 choices[36][1] = "swap";
 choices[36][2] = "SMB";
 choices[36][3] = "MSB";
 answers[36] = choices[36][2];
 units[36] = "56";
 comments[36] = "Id Pregunta: 4574. ";


//  Id pregunta: 4615 AÃ±o de creación de pregunta: 2007-01-01
 questions[37]= "38)  Seg&uacute;n las pautas de conducta en el proceso de auditoria, los auditores pueden o deben hacer";
 choices[37]= new Array();
 choices[37][0] = "escribir los procedimientos";
 choices[37][1] = "realizar gesti&oacute;n de perfiles de usuarios";
 choices[37][2] = "realizar Ia documentaci&oacute;n";
 choices[37][3] = "verificar que se evaluan peri&oacute;dicamente riesgos o bien evaluarlos";
 answers[37] = choices[37][3];
 units[37] = "31";
 comments[37] = "Id Pregunta: 4615. ";


//  Id pregunta: 4859 AÃ±o de creación de pregunta: 2007-01-01
 questions[38]= "39)  En un sistema experto tipo MYCIN, &iquest;c&oacute;mo se realiza el tratamiento de la incertidumbre?";
 choices[38]= new Array();
 choices[38][0] = "Mediante un modelo de inferencia bayesiana";
 choices[38][1] = "Mediante conjuntos borrosos, utilizando la teor&iacute;a de Zadeh";
 choices[38][2] = "Mediante factores de incertidumbre, utilizando la teor&iacute;a de Dempster-Shafer";
 choices[38][3] = "No hay tratamiento de la incertidumbre";
 answers[38] = choices[38][2];
 units[38] = "63";
 comments[38] = "Id Pregunta: 4859. ";


//  Id pregunta: 4895 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  Seg&uacute;n el RD Legislativo 3/2011 de contratos del sector p&uacute;blico, son procedimientos de adjudicaci&oacute;n de los contratos:";
 choices[39]= new Array();
 choices[39][0] = "El ordinario, el de urgencia y el de emergencia.";
 choices[39][1] = "La adjudicaci&oacute;n directa, el concurso y la subasta.";
 choices[39][2] = "El procedimiento abierto, el restringido y el negociado.";
 choices[39][3] = "El procedimiento general y el simplificado";
 answers[39] = choices[39][2];
 units[39] = "41";
 comments[39] = "Id Pregunta: 4895. ";


//  Id pregunta: 4905 AÃ±o de creación de pregunta: 2003-01-01
 questions[40]= "41)  El formato de compresi&oacute;n de video DivX est&aacute; basado en:";
 choices[40]= new Array();
 choices[40][0] = "Apple QuickTime.";
 choices[40][1] = "HDMI/Blu-Ray.";
 choices[40][2] = "MPEG-4 parte 2.";
 choices[40][3] = "MP3 eXtended Revision.";
 answers[40] = choices[40][2];
 units[40] = "114";
 comments[40] = "Id Pregunta: 4905. Examen TIC B 2007";


//  Id pregunta: 4935 AÃ±o de creación de pregunta: 2003-01-01
 questions[41]= "42)  Se&ntilde;ale, &iquest;cu&aacute;l de los siguientes t&eacute;rminos no es un elemento de los Diagramas de Flujos de Datos (DFD)?:";
 choices[41]= new Array();
 choices[41][0] = "Funci&oacute;n.";
 choices[41][1] = "Proceso.";
 choices[41][2] = "Flujo de recursos.";
 choices[41][3] = "Almac&eacute;n.";
 answers[41] = choices[41][0];
 units[41] = "81";
 comments[41] = "Id Pregunta: 4935. Examen TIC B 2007";


//  Id pregunta: 5011 AÃ±o de creación de pregunta: 2003-01-01
 questions[42]= "43)  &iquest;Cu&aacute;l de los siguientes es un requisito de seguridad en una transacci&oacute;n electr&oacute;nica en la que intervenga un mediode pago?:";
 choices[42]= new Array();
 choices[42][0] = "Simultaneidad";
 choices[42][1] = "Interactividad";
 choices[42][2] = "No repudio";
 choices[42][3] = "Automatizaci&oacute;n";
 answers[42] = choices[42][2];
 units[42] = "70";
 comments[42] = "Id Pregunta: 5011. Examen TIC A 2007";


//  Id pregunta: 5108 AÃ±o de creación de pregunta: 2003-01-01
 questions[43]= "44)  El modelo CMMI:";
 choices[43]= new Array();
 choices[43][0] = "Es una metodolog&iacute;a de desarrollo software.";
 choices[43][1] = "Es una pr&aacute;ctica para estimaci&oacute;n de complejidad de software.";
 choices[43][2] = "Permite obtener un diagn&oacute;stico de la madurez de los procesos relacionados con las tecnolog&iacute;as de la informaci&oacute;n de una organizaci&oacute;n.";
 choices[43][3] = "Permite la obtenci&oacute;n de un modelo l&oacute;gico de procesos que represente el sistema, con independencia de las restricciones f&iacute;sicas del entorno.";
 answers[43] = choices[43][2];
 units[43] = "27";
 comments[43] = "Id Pregunta: 5108. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5132 AÃ±o de creación de pregunta: 2003-01-01
 questions[44]= "45)  Seg&uacute;n la normativa de firma electr&oacute;nica de firma electr&oacute;nica, el per&iacute;odo de validez de los certificados reconocidos no podr&aacute; ser superior a:";
 choices[44]= new Array();
 choices[44][0] = "Un a&ntilde;o";
 choices[44][1] = "Dos a&ntilde;os";
 choices[44][2] = "Tres a&ntilde;os";
 choices[44][3] = "Cinco a&ntilde;os";
 answers[44] = choices[44][3];
 units[44] = "30";
 comments[44] = "Id Pregunta: 5132. Examen TIC A Castilla La Mancha 2007. Modificada seg&uacute;n Ley 9/2014";


//  Id pregunta: 5142 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  Indique la secuencia correcta de actividades en que se divide el proceso de Mantenimiento del Sistema de Informaci&oacute;n de M&eacute;trica V3:";
 choices[45]= new Array();
 choices[45][0] = "An&aacute;lisis de la Petici&oacute;n -&gt; Registro de la Petici&oacute;n -&gt; Preparaci&oacute;n de la Implementaci&oacute;n de la Modificaci&oacute;n -&gt; Seguimiento y Evaluaci&oacute;n de los cambios hasta la Aceptaci&oacute;n.";
 choices[45][1] = "An&aacute;lisis de la Petici&oacute;n -&gt; Seguimiento y Evaluaci&oacute;n de los cambios hasta la Aceptaci&oacute;n -&gt; Registro de la Petici&oacute;n -&gt; Preparaci&oacute;n de la Implementaci&oacute;n de la Modificaci&oacute;n.";
 choices[45][2] = "Registro de la Petici&oacute;n -&gt; An&aacute;lisis de la Petici&oacute;n -&gt; Preparaci&oacute;n de la Implementaci&oacute;n de la Modificaci&oacute;n &gt; Seguimiento y Evaluaci&oacute;n de los cambios hasta la Aceptaci&oacute;n.";
 choices[45][3] = "An&aacute;lisis de la Petici&oacute;n -&gt; Preparaci&oacute;n de la Implementaci&oacute;n de la Modificaci&oacute;n -&gt; Seguimiento y Evaluaci&oacute;n de los cambios hasta la Aceptaci&oacute;n -&gt; Registro de la Petici&oacute;n.";
 answers[45] = choices[45][2];
 units[45] = "86";
 comments[45] = "Id Pregunta: 5142. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5460 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  El sello de oro del modelo EFQM se obtiene a partir de una evaluaci&oacute;n de:";
 choices[46]= new Array();
 choices[46][0] = "400 puntos sobre 1000";
 choices[46][1] = "500 puntos sobre 1000";
 choices[46][2] = "700 puntos sobre 1000";
 choices[46][3] = "900 puntos sobre 1000";
 answers[46] = choices[46][1];
 units[46] = "88";
 comments[46] = "Id Pregunta: 5460. Castilla y Le&oacute;n";


//  Id pregunta: 5591 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  &iquest;Qu&eacute; sistemas de racionalizaci&oacute;n de compras incluye el RD Legislativo 3/2011 de contratos del sector p&uacute;blico (art&iacute;culo 194)?";
 choices[47]= new Array();
 choices[47][0] = "Acuerdos marco";
 choices[47][1] = "Sistemas din&aacute;micos de adquisici&oacute;n";
 choices[47][2] = "Centrales de contrataci&oacute;n";
 choices[47][3] = "Incluye las tres anteriores";
 answers[47] = choices[47][3];
 units[47] = "41";
 comments[47] = "Id Pregunta: 5591. ";


//  Id pregunta: 5665 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  Seg&uacute;n el RD 1720/2007, &iquest;cual de los siguientes no es un derecho del afectado?";
 choices[48]= new Array();
 choices[48][0] = "Derecho de rectificacion";
 choices[48][1] = "Derecho de cancelacion";
 choices[48][2] = "Derecho de oposici&oacute;n";
 choices[48][3] = "Derecho de informaci&oacute;n";
 answers[48] = choices[48][3];
 units[48] = "29";
 comments[48] = "Id Pregunta: 5665. ";


//  Id pregunta: 5706 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  La ley 11/2007 que regula el acceso electr&oacute;nico de los ciudadanos  a los servicios p&uacute;blicos, transpone aspectos de:";
 choices[49]= new Array();
 choices[49][0] = "De la directiva 200/31/CE relativos a Servicios de la Sociedad de la Informaci&oacute;n.";
 choices[49][1] = "De la Directiva 2006/123/CE relativa a los servicios en el mercado interior.";
 choices[49][2] = "De la Directiva 2002/58/CE sobre la privacidad y las comunicaciones electr&oacute;nicas.";
 choices[49][3] = "No recoge la transposici&oacute;n de articulado relativo a ninguna Directiva.";
 answers[49] = choices[49][1];
 units[49] = "43";
 comments[49] = "Id Pregunta: 5706. NULL";


//  Id pregunta: 5898 AÃ±o de creación de pregunta: 2009-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes corresponde a una tecnolog&iacute;a Java para acceder a bases de datos relacionales?";
 choices[50]= new Array();
 choices[50][0] = "JRDB";
 choices[50][1] = "JPA";
 choices[50][2] = "ORM";
 choices[50][3] = "Ninguna de las anteriores";
 answers[50] = choices[50][1];
 units[50] = "60";
 comments[50] = "Id Pregunta: 5898. NULL";


//  Id pregunta: 5974 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)  Dadas las siguientes relaciones: A={ax,ay,az,by,bz,cx,cy} y B={x,z} &iquest;Cu&aacute;l ser&iacute;a el resultado de la operaci&oacute;n A dividido entre B?";
 choices[51]= new Array();
 choices[51][0] = "{a,b,c}.";
 choices[51][1] = "{ax,az,bz,cx}.";
 choices[51][2] = "{ay,by,cy}.";
 choices[51][3] = "{a}.";
 answers[51] = choices[51][3];
 units[51] = "58";
 comments[51] = "Id Pregunta: 5974. TIC A 2009";


//  Id pregunta: 5999 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  Respecto al contenido del informe de auditoria, indicar cu&aacute;l de las siguientes recomendaciones es correcta:";
 choices[52]= new Array();
 choices[52][0] = "El informe final de una auditoria s&oacute;lo contendr&aacute; recomendaciones relativas a los incumplimientos o puntos d&eacute;biles detectados en el &aacute;rea auditada.";
 choices[52][1] = "El informe final incluir&aacute; las alegaciones de los auditados, indicando la opini&oacute;n de los auditores sobre ellas, y si no se incluyen las alegaciones, deber&aacute; indicarse el motivo.";
 choices[52][2] = "El informe final de una auditoria operativa debe contener la opini&oacute;n de los auditores y sugerencias generales sobre c&oacute;mo aplicar los controles para evaluar el funcionamiento del &aacute;rea auditada.";
 choices[52][3] = "En el informe final de una auditoria operativa se deben se&ntilde;alar las debilidades y fortalezas observadas en relaci&oacute;n con los controles implementados en el &aacute;rea auditada.";
 answers[52] = choices[52][1];
 units[52] = "31";
 comments[52] = "Id Pregunta: 5999. TIC A 2009";


//  Id pregunta: 6100 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  Acerca de las Autoridades de sellado de tiempo:";
 choices[53]= new Array();
 choices[53][0] = "Para expedir su certificado precisan conocer en su integridad el documento.";
 choices[53][1] = "En el modo de registros encadenados aplican iterativamente una funci&oacute;n resumen (hash) a la concatenaci&oacute;n del resumen del mensaje a sellar con el resultado de la iteraci&oacute;n anterior.";
 choices[53][2] = "En el modo de firma digital firman la concatenaci&oacute;n de los mensajes a sellar con el tiempo.";
 choices[53][3] = "No pueden ser simult&aacute;neamente Prestadores de Servicios de Certificaci&oacute;n seg&uacute;n la definici&oacute;n que de &eacute;stos da la Ley 59/2003 de firma electr&oacute;nica.";
 answers[53] = choices[53][1];
 units[53] = "74";
 comments[53] = "Id Pregunta: 6100. TIC A 2009";


//  Id pregunta: 6201 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  De acuerdo con M&eacute;trica versi&oacute;n 3, &iquest;qui&eacute;n participa en la obtenci&oacute;n del producto &quot;Entorno de pruebas unitarias&quot;, de la tarea &quot;Preparaci&oacute;n del entorno de las pruebas unitarias&quot;?";
 choices[54]= new Array();
 choices[54][0] = "T&eacute;cnicos de sistemas";
 choices[54][1] = "T&eacute;cnicos de sistemas y programadores";
 choices[54][2] = "Programadores";
 choices[54][3] = "Analistas, Programadores y T&eacute;cnicos de sistemas";
 answers[54] = choices[54][1];
 units[54] = "86";
 comments[54] = "Id Pregunta: 6201. TIC-B 2009 bloque desarrollo";


//  Id pregunta: 6202 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  Respecto al Diagrama de Secuencia, &iquest;cu&aacute;l de las siguientes opciones es correcta?";
 choices[55]= new Array();
 choices[55][0] = "Muestra los objetos participantes en la interacci&oacute;n y los mensajes que intercambian ordenados seg&uacute;n su secuencia en el tiempo.";
 choices[55][1] = "El eje horizontal representa el tiempo, y en el eje vertical se colocan los objetos y actores participantes en la interacci&oacute;n, sin un orden prefijado.";
 choices[55][2] = "Cada objeto o actor tiene una l&iacute;nea horizontal, y los mensajes se representan mediante etiquetas entre los distintos objetos.";
 choices[55][3] = "El tiempo fluye de abajo a arriba y de izquiera a derecha.";
 answers[55] = choices[55][0];
 units[55] = "84";
 comments[55] = "Id Pregunta: 6202. TIC-B 2009 bloque desarrollo";


//  Id pregunta: 6211 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  En M&eacute;trica versi&oacute;n 3, el proceso de Planificaci&oacute;n de Sistemas de Informaci&oacute;n, incluye la tarea de:";
 choices[56]= new Array();
 choices[56][0] = "Definici&oacute;n de la Arquitectura Tecnol&oacute;gica";
 choices[56][1] = "Estudio de la situaci&oacute;n actual";
 choices[56][2] = "Selecci&oacute;n de la Soluci&oacute;n";
 choices[56][3] = "Definici&oacute;n del Sistema";
 answers[56] = choices[56][0];
 units[56] = "86";
 comments[56] = "Id Pregunta: 6211. TICB-2009, bloque desarrollo";


//  Id pregunta: 6212 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  Se&ntilde;ale la sentencia correcta:";
 choices[57]= new Array();
 choices[57][0] = "La complejidad ciclom&aacute;tica es una m&eacute;trica del software que proporciona una medici&oacute;n cualitativa de la complejidad l&oacute;gica de un programa";
 choices[57][1] = "Si se usa la complejidad ciclom&aacute;tica en el contexto del m&eacute;todo de prueba del camino b&aacute;sico, el valor calculado como complejidad ciclom&aacute;tica define el n&uacute;mero de caminos dependientes del conjunto b&aacute;sico de un programa";
 choices[57][2] = "En las pruebas del camino b&aacute;sico, los casos de prueba obtenidos del conjunto b&aacute;sico garantizan que durante la prueba se ejecuta una sola vez cada sentencia del programa";
 choices[57][3] = "Dentro de la prueba del camino b&aacute;sico, un camino independiente est&aacute; constituido por lo menos por una arista que no haya sido recorrida anteriormente a la definici&oacute;n del camino";
 answers[57] = choices[57][3];
 units[57] = "88";
 comments[57] = "Id Pregunta: 6212. TICB-2009, bloque desarrollo";


//  Id pregunta: 6217 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  En el desarrollo de un sistema &iquest;En qu&eacute; casos de los siguientes es adecuado el uso de un 'modelo en espiral'?";
 choices[58]= new Array();
 choices[58][0] = "Sistemas de peque&ntilde;o tama&ntilde;o";
 choices[58][1] = "Cuando los requisitos est&eacute;n bien definidos desde un principio";
 choices[58][2] = "Proyectos donde sea importante el factor riesgo";
 choices[58][3] = "El producto a desarrollar no es novedoso";
 answers[58] = choices[58][2];
 units[58] = "76";
 comments[58] = "Id Pregunta: 6217. TICB-2009, bloque desarrollo";


//  Id pregunta: 6295 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes no es una t&eacute;cnica de bajo nivel de obtenci&oacute;n de requisitos en el an&aacute;lisis de los sistemas de Informaci&oacute;n?";
 choices[59]= new Array();
 choices[59][0] = "Entrevistas";
 choices[59][1] = "An&aacute;lisis de Mercado";
 choices[59][2] = "Entorno de Bucles Adaptativo";
 choices[59][3] = "Brainstorming";
 answers[59] = choices[59][2];
 units[59] = "78";
 comments[59] = "Id Pregunta: 6295. ";


//  Id pregunta: 7170 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes NO es una caracter&iacute;stica de un Data Mart?";
 choices[60]= new Array();
 choices[60][0] = "Especializado en el almacenamiento de los datos de un &aacute;rea de negocio espec&iacute;fica.";
 choices[60][1] = "Debe ser alimentado siempre desde un Data Warehouse.";
 choices[60][2] = "En los Data Mart OLAP la estructura para el an&aacute;lisis de su informaci&oacute;n se basa en los cubos OLAP.";
 choices[60][3] = "En los Data Mart OLTP la estructura para el an&aacute;lisis de su informaci&oacute;n est&aacute; montada sobre una base de datos OLTP, como en el Data Warehouse.";
 answers[60] = choices[60][1];
 units[60] = "68";
 comments[60] = "Id Pregunta: 7170. Examen TIC B 2009";


//  Id pregunta: 7308 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  Indique cu&aacute;l de los siguientes NO es un lenguaje de marcado multimodal:";
 choices[61]= new Array();
 choices[61][0] = "EMMA";
 choices[61][1] = "VoiceXML";
 choices[61][2] = "SALT";
 choices[61][3] = "Todos son lenguajes de marcado multimodal";
 answers[61] = choices[61][1];
 units[61] = "94";
 comments[61] = "Id Pregunta: 7308. NULL";


//  Id pregunta: 7793 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)   En el modelo de comunicaciones TCP/IP, cuando un cliente inicia una sesi&oacute;n:";
 choices[62]= new Array();
 choices[62][0] = " El campo SYN del primer segmento TCP es igual a 0.";
 choices[62][1] = " El campo SYN del primer segmento TCP es igual a 1.";
 choices[62][2] = " El campo RST del primer segmento TCP es igual a 1.";
 choices[62][3] = " El campo PSH del primer segmento TCP es igual a 1.";
 answers[62] = choices[62][1];
 units[62] = "NULL";
 comments[62] = "Id Pregunta: 7793. Map 2005";


//  Id pregunta: 7870 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)   &iquest;Cu&aacute;l de las siguientes afirmaciones relativas al formato MARC (Machine-Readable Cataloging) es cierta?";
 choices[63]= new Array();
 choices[63][0] = " Es un est&aacute;ndar para la catalogaci&oacute;n de documentos de archivo.";
 choices[63][1] = " EUROMARC es la versi&oacute;n europea de dicho formato.";
 choices[63][2] = " Fue desarrollado por la Library of Congress de los Estados Unidos en los a&ntilde;os 60.";
 choices[63][3] = " Ha dejado de utilizarse, habiendo sido sustituido por las ISBD (International Standard Bibliographic Description).";
 answers[63] = choices[63][2];
 units[63] = "NULL";
 comments[63] = "Id Pregunta: 7870. Map 2006";


//  Id pregunta: 7980 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)   En el proceso RUP (&laquo;Rational Unified Process&raquo;):";
 choices[64]= new Array();
 choices[64][0] = " La dimensi&oacute;n temporal del proceso se expresa en t&eacute;rminos de actividades, productos intermedios, perfiles de trabajo o roles y flujos de trabajo.";
 choices[64][1] = " La dimensi&oacute;n est&aacute;tica del proceso se expresa en t&eacute;rminos de ciclos, fases, iteraciones e hitos.";
 choices[64][2] = " La dimensi&oacute;n temporal del proceso se expresa en t&eacute;rminos de ciclos, fases, iteraciones e hitos.";
 choices[64][3] = " En la dimensi&oacute;n est&aacute;tica, cada ciclo se compone de cuatro fases secuenciales (comienzo, elaboraci&oacute;n, construcci&oacute;n y transici&oacute;n).";
 answers[64] = choices[64][2];
 units[64] = "NULL";
 comments[64] = "Id Pregunta: 7980. Map 2007";


//  Id pregunta: 8115 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)   &iquest;Qu&eacute; NO garantiza el Servicio Universal contemplado por la Ley 32/2003 General de Telecomunicaciones?";
 choices[65]= new Array();
 choices[65][0] = " El ciudadano podr&aacute; elegir, para la prestaci&oacute;n de este servicio, a cualquiera de los operadores registrados a nivel nacional.";
 choices[65][1] = " Todos los usuarios finales podr&aacute;n obtener una conexi&oacute;n a la red telef&oacute;nica p&uacute;blica desde una ubicaci&oacute;n fija y acceder a la prestaci&oacute;n del servicio telef&oacute;nico disponible al p&uacute;blico.";
 choices[65][2] = " Que se ponga a disposici&oacute;n de los abonados al servicio telef&oacute;nico disponible al p&uacute;blico una gu&iacute;a general de n&uacute;meros de abonados, ya sea impresa o electr&oacute;nica.";
 choices[65][3] = " Que exista una oferta suficiente de tel&eacute;fonos p&uacute;blicos de pago, en todo el territorio nacional, que satisfaga razonablemente las necesidades de los usuarios finales.";
 answers[65] = choices[65][0];
 units[65] = "NULL";
 comments[65] = "Id Pregunta: 8115. Map 2008";


//  Id pregunta: 8185 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  La tabla ESTUDIANTES(DNI#, Nombre, Apellido 1, Apellido 2, DNITutor, NombreTutor):";
 choices[66]= new Array();
 choices[66][0] = "No est&aacute; en primera forma normal.";
 choices[66][1] = "Est&aacute; en primera forma normal pero no en segunda forma normal.";
 choices[66][2] = "Est&aacute; en segunda forma normal pero no en tercera forma normal.";
 choices[66][3] = "Est&aacute; en tercera forma normal pero no en forma normal de Boyce Codd.";
 answers[66] = choices[66][2];
 units[66] = "58";
 comments[66] = "Id Pregunta: 8185. Examen TIC A1 2010";


//  Id pregunta: 8592 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  En J2EE &iquest;qu&eacute; es un fichero WAR?";
 choices[67]= new Array();
 choices[67][0] = "Contiene los recursos y librer&iacute;as necesarias para compilar un proyecto";
 choices[67][1] = "Contiene la aplicaci&oacute;n web lista para ser desplegada en cualquier contenedor de servlets/jsp.";
 choices[67][2] = "Contiene los m&oacute;dulos EJB de las aplicaciones";
 choices[67][3] = "No existen los ficheros WAR en J2EE";
 answers[67] = choices[67][1];
 units[67] = "116";
 comments[67] = "Id Pregunta: 8592. Examen TIC A2 2010 interna";


//  Id pregunta: 8770 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  &iquest;Cu&aacute;l es la versi&oacute;n extendida del protocolo BOOTP?";
 choices[68]= new Array();
 choices[68][0] = "DHCP";
 choices[68][1] = "RARP";
 choices[68][2] = "RTSP";
 choices[68][3] = "DNS";
 answers[68] = choices[68][0];
 units[68] = "100";
 comments[68] = "Id Pregunta: 8770. Examen TIC A2 2010 interna";


//  Id pregunta: 8874 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  En la tarea &ldquo;Valoraci&oacute;n de los Sistemas de Informaci&oacute;n actuales&rdquo;, encuadrado en la Planificaci&oacute;n de un Sistema de Informaci&oacute;n, participan seg&uacute;n M&eacute;trica versi&oacute;n 3:";
 choices[69]= new Array();
 choices[69][0] = "Consultores y Consultores Inform&aacute;ticos";
 choices[69][1] = "Consultores y Jefes de Proyecto";
 choices[69][2] = "Consultores Inform&aacute;ticos y Usuarios Expertos";
 choices[69][3] = "Analistas y Jefes de Proyecto";
 answers[69] = choices[69][0];
 units[69] = "86";
 comments[69] = "Id Pregunta: 8874. Analista Ayto. Madrid 2010";


//  Id pregunta: 8904 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  Un applet de Java de una p&aacute;gina Web &iquest;d&oacute;nde se ejecuta?:";
 choices[70]= new Array();
 choices[70][0] = "En el navegador del cliente.";
 choices[70][1] = "En el servidor Web.";
 choices[70][2] = "En el proxy.";
 choices[70][3] = "En el servidor de aplicaciones";
 answers[70] = choices[70][0];
 units[70] = "60";
 comments[70] = "Id Pregunta: 8904. Operador Ayto. Madrid 2010";


//  Id pregunta: 9057 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  &iquest;Cual de las siguientes NO es una herramienta de revisi&oacute;n de la usabilidad ?";
 choices[71]= new Array();
 choices[71][0] = "ACCWarning";
 choices[71][1] = "A-PRompt";
 choices[71][2] = "HiCaption";
 choices[71][3] = "MAGPie";
 answers[71] = choices[71][0];
 units[71] = "39";
 comments[71] = "Id Pregunta: 9057. NULL";


//  Id pregunta: 9140 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  &iquest;En qu&eacute; &iacute;ndices se puede medir la potencia de un ordenador?";
 choices[72]= new Array();
 choices[72][0] = "Miles de instrucciones por segundo (MIPS)";
 choices[72][1] = "SPEC. Ejecuta en el procesador un conjunto de programas y combina las medidas de prestaciones de &eacute;stos con la media aritm&eacute;tica o geom&eacute;trica.";
 choices[72][2] = "SPECint y SpeCfp. &Iacute;ndices que miden las velocidades en operaciones con enteros y comas flotantes. La medida resultante se denomina SPECifp";
 choices[72][3] = "Por el n&uacute;mero de cores que tenga el procesador";
 answers[72] = choices[72][1];
 units[72] = "47";
 comments[72] = "Id Pregunta: 9140. ";


//  Id pregunta: 9194 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  La protecci&oacute;n de un programa de ordenador, &iquest;se extiende al c&oacute;digo objeto?";
 choices[73]= new Array();
 choices[73][0] = "No, puesto que no es una creaci&oacute;n intelectual, sino una compilaci&oacute;n autom&aacute;tica de la m&aacute;quina.";
 choices[73][1] = "No, puesto que es algo que no se puede entender, as&iacute; que no se puede proteger.";
 choices[73][2] = "Si, en todos los casos";
 choices[73][3] = "Todas las anteriores son falsas";
 answers[73] = choices[73][2];
 units[73] = "36";
 comments[73] = "Id Pregunta: 9194. ";


//  Id pregunta: 9228 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  En la primitiva send-receive qu&eacute; caracter&iacute;sticas tienen send y receive?";
 choices[74]= new Array();
 choices[74][0] = "Send en bloqueante y Receive es no bloqueante.";
 choices[74][1] = "Ambas son bloqueantes.";
 choices[74][2] = "Ambas son no bloqueantes.";
 choices[74][3] = "Send es no bloqueante y Receive es bloqueante.";
 answers[74] = choices[74][3];
 units[74] = "50";
 comments[74] = "Id Pregunta: 9228. ";


//  Id pregunta: 9271 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  En relaci&oacute;n a los sistemas Ubuntu Server, &iquest;qu&eacute; implica una versi&oacute;n LTS? ";
 choices[75]= new Array();
 choices[75][0] = "Que es una versi&oacute;n inestable o en fase de desarrollo del kernel. ";
 choices[75][1] = "Que es una versi&oacute;n Lite o ligera, especialmente adaptada para tabletas. ";
 choices[75][2] = "Que existe soporte para esa versi&oacute;n durante al menos 5 a&ntilde;os desde el lanzamiento. ";
 choices[75][3] = "Que existe soporte para esa versi&oacute;n durante al menos 4 a&ntilde;os desde el lanzamiento.";
 answers[75] = choices[75][2];
 units[75] = "54";
 comments[75] = "Id Pregunta: 9271. Examen TICA2-2011";


//  Id pregunta: 9504 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  En el &aacute;mbito de los formatos de im&aacute;genes est&aacute;ticas, indique cual de las siguientes es la afirmaci&oacute;n correcta:";
 choices[76]= new Array();
 choices[76][0] = "GIF y PNG comprimen sin p&eacute;rdidas mientras que JPEG comprime con p&eacute;rdidas";
 choices[76][1] = "GIF y JPEG comprimen sin p&eacute;rdidas mientras que PNG comprime con p&eacute;rdidas";
 choices[76][2] = "JPEG y PNG comprimen sin p&eacute;rdidas mientras que GIF comprime con p&eacute;rdidas";
 choices[76][3] = "Todas las anteriores son falsas";
 answers[76] = choices[76][0];
 units[76] = "114";
 comments[76] = "Id Pregunta: 9504. NULL";


//  Id pregunta: 9616 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  &iquest;Desde qu&eacute; versi&oacute;n del SO Windows est&aacute; disponible la funcionalidad de bitlocker para USB?";
 choices[77]= new Array();
 choices[77][0] = "Windows XP";
 choices[77][1] = "Windows Vista";
 choices[77][2] = "Windows 7";
 choices[77][3] = "Windows 8";
 answers[77] = choices[77][2];
 units[77] = "56";
 comments[77] = "Id Pregunta: 9616. ";


//  Id pregunta: 9625 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  En lo referente a las instalaciones por defecto de las interfaces gr&aacute;ficas de los sistemas Linux-Unix:";
 choices[78]= new Array();
 choices[78][0] = "Gnome utiliza &ldquo;Telepathy&rdquo; como librer&iacute;a para las comunicaciones y &ldquo;Plasma&rdquo; para la representaci&oacute;n gr&aacute;fica de la interfaz";
 choices[78][1] = "KDE utiliza la librer&iacute;a &ldquo;Pulse Audio&rdquo; para la gesti&oacute;n de sonido y &ldquo;GTK+&rdquo; para la representaci&oacute;n de la interfaz de usuario. ";
 choices[78][2] = "KDE utiliza la librer&iacute;a &ldquo;Phonon&rdquo; para la creaci&oacute;n de contenido multimedia y &ldquo;Goya&rdquo; para la representaci&oacute;n gr&aacute;fica de partes de la interfaz. ";
 choices[78][3] = "Gnome utiliza &ldquo;Sonnet&rdquo; como librer&iacute;a para la representaci&oacute;n de la interfaz de usuario y &ldquo;Pulse Audio&rdquo; para la gesti&oacute;n de sonido. ";
 answers[78] = choices[78][2];
 units[78] = "54";
 comments[78] = "Id Pregunta: 9625. Examen TIC A1 2013";


//  Id pregunta: 9646 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l es el plazo necesario entre la invitaci&oacute;n a mejorar ofertas a los licitadores y la subasta electr&oacute;nica?";
 choices[79]= new Array();
 choices[79][0] = "No antes de 15 d&iacute;as h&aacute;biles desde la invitaci&oacute;n";
 choices[79][1] = "No antes de 15 d&iacute;as naturales desde la invitaci&oacute;n";
 choices[79][2] = "M&iacute;nimo 2 d&iacute;as h&aacute;biles entre invitaci&oacute;n y subasta";
 choices[79][3] = "M&iacute;nimo 2 d&iacute;as naturales entre invitaci&oacute;n y subasta";
 answers[79] = choices[79][3];
 units[79] = "41";
 comments[79] = "Id Pregunta: 9646. RD Legislativo 3/2011, Art. 148.7. Entre la fecha de env&iacute;o de las invitaciones y el comienzo de la subasta electr&oacute;nica habr&aacute;n de transcurrir, al menos, dos d&iacute;as h&aacute;biles.";


//  Id pregunta: 9734 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  Se&ntilde;ale de entre las siguientes la t&eacute;cnica de integraci&oacute;n NO incremental para pruebas de integraci&oacute;n:";
 choices[80]= new Array();
 choices[80][0] = "Top-down.";
 choices[80][1] = "Sandwich.";
 choices[80][2] = "Big-Bang";
 choices[80][3] = "Bottom-up.";
 answers[80] = choices[80][2];
 units[80] = "86";
 comments[80] = "Id Pregunta: 9734. Examen TIC-A2 2013-Libre";


//  Id pregunta: 10032 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  Si tenemos la siguiente direcci&oacute;n de broadcast 95.26.35.159, indicar a qu&eacute; subred pertenece.";
 choices[81]= new Array();
 choices[81][0] = "95.26.35.144/30 ";
 choices[81][1] = "95.26.35.144/29";
 choices[81][2] = "95.26.35.128/27 ";
 choices[81][3] = "95.26.35.128/25";
 answers[81] = choices[81][2];
 units[81] = "100";
 comments[81] = "Id Pregunta: 10032. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10081 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  &iquest;Cu&aacute;l de los siguientes modelos de ciclo de vida orientado a objetos tiene un enfoque ascendente?";
 choices[82]= new Array();
 choices[82][0] = "Pinball";
 choices[82][1] = "Remolino";
 choices[82][2] = "Cluster";
 choices[82][3] = "Fuente";
 answers[82] = choices[82][2];
 units[82] = "76";
 comments[82] = "Id Pregunta: 10081. NULL";


//  Id pregunta: 10173 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Los distintos niveles de aislamiento permiten evitar problemas de consistencia o p&eacute;rdida de datos derivados de la ejecuci&oacute;n concurrente de transacciones.";
 choices[83]= new Array();
 choices[83][0] = "Una Lectura No Repetible se produce cuando una transacci&oacute;n lee datos todav&iacute;a no confirmados, y que pueden ser finalmente revertidos por la transacci&oacute;n que hizo el cambio";
 choices[83][1] = "Evitar el problema de concurrencia denominado &quot;Lectura fantasma&quot; requiere aplicar como nivel de aislamiento SERIALIZABLE";
 choices[83][2] = "Con el nivel de aislamiento denominado &quot;READ COMMITTED&quot; pueden producirse problemas de Lectura sucia y Lectura Fantasma";
 choices[83][3] = "Todas las anteriores";
 answers[83] = choices[83][1];
 units[83] = "57";
 comments[83] = "Id Pregunta: 10173. ";


//  Id pregunta: 10203 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Indique qu&eacute; afirmaci&oacute;n es falsa en relaci&oacute;n a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles";
 choices[84]= new Array();
 choices[84][0] = "Su arquitectura de red, EPS (Evolved Packet System), est&aacute; formada por el n&uacute;cleo de red EPC (Evolved Packet Core) y la red de acceso LTE, conocida como E-UTRAN";
 choices[84][1] = "Descarta el uso de la t&eacute;cnica HARQ (Hybrid Automatic Repeat Request) introducida en la release 5 (HSDPA)";
 choices[84][2] = "La transmisi&oacute;n multiantena est&aacute; basada en SFBC (Space Frequency Block Coding) y FSTD (Frequency-Shift Time Diversity)";
 choices[84][3] = "Se la conoce con el nombre de LTE (Long Term Evolution)";
 answers[84] = choices[84][1];
 units[84] = "108";
 comments[84] = "Id Pregunta: 10203. La t&eacute;cnica HARQ sigue us&aacute;ndose en 4G";


//  Id pregunta: 10304 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Indicar cu&aacute;l de los siguientes NO es un modo de transferencia de datos utilizado por el protocolo HDLC (High Level Data Link Control):";
 choices[85]= new Array();
 choices[85][0] = "Modo de respuesta normal (NRM, Normal Response Mode).";
 choices[85][1] = "Modo balanceado as&iacute;ncrono (ABM, Asynchronous Balanced Mode).";
 choices[85][2] = "Modo de respuesta as&iacute;ncrono (ARM, Asynchronous Response Mode).";
 choices[85][3] = "Modo balanceado s&iacute;ncrono (SBM, Synchronous Balanced Mode).";
 answers[85] = choices[85][3];
 units[85] = "100";
 comments[85] = "Id Pregunta: 10304. TIC A2, libre, examen 2013";


//  Id pregunta: 10354 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l es el &oacute;rgano encargado de supervisar y mejorar la accesibilidad de los portales web de la Administraci&oacute;n?";
 choices[86]= new Array();
 choices[86][0] = "Ministerio de Industria, Energ&iacute;a y Turismo";
 choices[86][1] = "Ministerio de la Presidencia";
 choices[86][2] = "El Observatorio de Accesibilidad, iniciativa del Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[86][3] = "El Observatorio Estatal de la Discapacidad (OED), iniciativa del Ministerio de Sanidad, Servicios Sociales e Igualdad";
 answers[86] = choices[86][2];
 units[86] = "39";
 comments[86] = "Id Pregunta: 10354. http://administracionelectronica.gob.es/pae_Home/pae_Estrategias/pae_Accesibilidad/pae_Observatorio_de_Accesibilidad.html";


//  Id pregunta: 10449 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  En relaci&oacute;n a una red privada virtual (VPN, Virtual Private Network), es FALSO que ";
 choices[87]= new Array();
 choices[87][0] = "una VPN permite utilizar la red p&uacute;blica de un operador para construir una red privada dedicada, con funcionalidades de red y de seguridad equivalentes a las que se obtienen con una red privada. ";
 choices[87][1] = "en la actualidad, el concepto de VPN se extiende para incluir las soluciones que permiten el acceso remoto de un equipo a la red de una organizaci&oacute;n a trav&eacute;s de redes p&uacute;blicas, especialmente Internet, mediante la utilizaci&oacute;n de mecanismos de t&uacute;nel y cifrado. ";
 choices[87][2] = "el protocolo MPLS (Multiprotocol Label Switching) permite crear VPNs de nivel 4, utilizando como tecnolog&iacute;as de acceso T1/E1, ATM &oacute; Frame Relay. ";
 choices[87][3] = "VPLS (Virtual Private LAN Switching) es un servicio de red LAN privada virtual, que permite entregar tramas de nivel 2 directamente entre sedes remotas de un mismo organismo  ";
 answers[87] = choices[87][2];
 units[87] = "111";
 comments[87] = "Id Pregunta: 10449. Examen TIC A1 2013";


//  Id pregunta: 10792 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  &iquest;Para qu&eacute; se utiliza el servicio SMB de Windows?";
 choices[88]= new Array();
 choices[88][0] = "Para configurar un proxy-inverso en la salida a Internet.";
 choices[88][1] = "Para realizar backups remotos y cronificados.";
 choices[88][2] = "Para compartir archivos e impresoras.";
 choices[88][3] = "Para configurar redes wifi.";
 answers[88] = choices[88][2];
 units[88] = "56";
 comments[88] = "Id Pregunta: 10792. Examen GSI 2014";


//  Id pregunta: 10817 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Una pr&aacute;ctica frecuente asociada al modelo de Proceso Unificado de Desarrollo es el &quot;timeboxing&quot;, &iquest;en qu&eacute; consiste?";
 choices[89]= new Array();
 choices[89][0] = "Enfoque para identificar casos de uso y determinar el nivel de granularidad apropiado.";
 choices[89][1] = "Modelo de planificaci&oacute;n adaptativa para ganar tiempo.";
 choices[89][2] = "Asignaci&oacute;n de un periodo de tiempo fijo para la ejecuci&oacute;n de una iteraci&oacute;n.";
 choices[89][3] = "Utilizar casos de usos temporales para captar requisitos funcionales.";
 answers[89] = choices[89][2];
 units[89] = "79";
 comments[89] = "Id Pregunta: 10817. Examen GSI 2014";


//  Id pregunta: 10955 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  En ITIL V3, &iquest;qu&eacute; es un OLA?";
 choices[90]= new Array();
 choices[90][0] = "Es un contrato entre un proveedor de servicios de TI con un &uacute;nico cliente externo a la organizaci&oacute;n.";
 choices[90][1] = "Es un contrato entre departamentos de una misma organizaci&oacute;n.";
 choices[90][2] = "Es un contrato entre un proveedor de servicios de TI que describe los servicios ofertados a varios clientes externos a la organizaci&oacute;n.";
 choices[90][3] = "Es un contrato entre la administraci&oacute;n y la empresa privada.";
 answers[90] = choices[90][1];
 units[90] = "98";
 comments[90] = "Id Pregunta: 10955. TIC A1 AGE 2014";


//  Id pregunta: 11058 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Qu&eacute; rol de la metodolog&iacute;a FDD es responsable del dise&ntilde;o global del sistema y de la ejecuci&oacute;n de todas las etapas del dise&ntilde;o?";
 choices[91]= new Array();
 choices[91][0] = "Product Manager";
 choices[91][1] = "Chief architect";
 choices[91][2] = "Chief programmer";
 choices[91][3] = "System administrator";
 answers[91] = choices[91][1];
 units[91] = "79";
 comments[91] = "Id Pregunta: 11058. ";


//  Id pregunta: 11134 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de las siguientes no es una Shell de Linux?";
 choices[92]= new Array();
 choices[92][0] = "Shell X";
 choices[92][1] = "Shell de Korn";
 choices[92][2] = "Shell de Bourne";
 choices[92][3] = "Shell C";
 answers[92] = choices[92][0];
 units[92] = "54";
 comments[92] = "Id Pregunta: 11134. ";


//  Id pregunta: 11203 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Agenda Digital Espa&ntilde;ola?";
 choices[93]= new Array();
 choices[93][0] = "Confianza Digital";
 choices[93][1] = "Mejorar la Administraci&oacute;n Electr&oacute;nica";
 choices[93][2] = "Despliegue de redes r&aacute;pidas y ultrarr&aacute;pidas";
 choices[93][3] = "Interoperabilidad y normas";
 answers[93] = choices[93][3];
 units[93] = "30";
 comments[93] = "Id Pregunta: 11203. ";


//  Id pregunta: 11435 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Seg&uacute;n la Ley 9/2014, las decisiones relativas a los otorgamientos de derechos de uso (de numeraci&oacute;n, direccionamiento y denominaci&oacute;n) se adoptar&aacute;n en el plazo de:";
 choices[94]= new Array();
 choices[94][0] = "10 d&iacute;as.";
 choices[94][1] = "15 d&iacute;as.";
 choices[94][2] = "3 semanas.";
 choices[94][3] = "6 semanas.";
 answers[94] = choices[94][3];
 units[94] = "110";
 comments[94] = "Id Pregunta: 11435. ";


//  Id pregunta: 11436 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Seg&uacute;n la Ley 9/2014, un usuario final podr&aacute; resolver un contrato de redes y servicios de telecomunicaciones:";
 choices[95]= new Array();
 choices[95][0] = "Solo al finalizar el contrato";
 choices[95][1] = "Anticipadamente con penalizaci&oacute;n";
 choices[95][2] = "Anticipadamente sin penalizaci&oacute;n.";
 choices[95][3] = "Ninguna de las anteriores.";
 answers[95] = choices[95][2];
 units[95] = "110";
 comments[95] = "Id Pregunta: 11436. ";


//  Id pregunta: 11693 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Qu&eacute; es PAT?";
 choices[96]= new Array();
 choices[96][0] = "Port Address Translation";
 choices[96][1] = "Protocol Access Translation";
 choices[96][2] = "Port Acknowledge Timeout";
 choices[96][3] = "PDU access token";
 answers[96] = choices[96][0];
 units[96] = "111";
 comments[96] = "Id Pregunta: 11693. NULL";


//  Id pregunta: 11715 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l es la forma en que un administrador puede configurar VLAN?";
 choices[97]= new Array();
 choices[97][0] = "Est&aacute;ticamente o Dinamicamente";
 choices[97][1] = "Din&aacute;micamente o a trav&eacute;s de una base de datos de VLAN";
 choices[97][2] = "A trav&eacute;s de un servidor DHCP";
 choices[97][3] = "A trav&eacute;s de  una base de datos";
 answers[97] = choices[97][0];
 units[97] = "102";
 comments[97] = "Id Pregunta: 11715. NULL";


//  Id pregunta: 11742 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Qu&eacute; nivel se tiene que establecer en un registro cuando un ciudadano registra datos de salud no siendo competencia del propio organismo ?";
 choices[98]= new Array();
 choices[98][0] = "nivel basico";
 choices[98][1] = "nivel medio";
 choices[98][2] = "nivel alto";
 choices[98][3] = "nivel bajo";
 answers[98] = choices[98][0];
 units[98] = "29";
 comments[98] = "Id Pregunta: 11742. ";


//  Id pregunta: 11752 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Cu&aacute;l de los siguientes no es un principio de accesibilidad?";
 choices[99]= new Array();
 choices[99][0] = "robusto";
 choices[99][1] = "operable";
 choices[99][2] = "universal";
 choices[99][3] = "perceptible";
 answers[99] = choices[99][2];
 units[99] = "39";
 comments[99] = "Id Pregunta: 11752. ";


