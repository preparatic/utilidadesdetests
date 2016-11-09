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

//  Id pregunta: 61 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Qu&eacute; es ECMA?:";
 choices[0]= new Array();
 choices[0][0] = "La red de correo electr&oacute;nico de la Uni&oacute;n Europea";
 choices[0][1] = "La asociaci&oacute;n europea de fabricantes de ordenadores";
 choices[0][2] = "La entidad europea de desarrollo de est&aacute;ndares de electr&oacute;nica y comunicaciones";
 choices[0][3] = "Nada de lo anterior";
 answers[0] = choices[0][1];
 units[0] = "42";
 comments[0] = "Id Pregunta: 61. ";


//  Id pregunta: 205 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  Para el an&aacute;lisis de la gesti&oacute;n de riesgos:";
 choices[1]= new Array();
 choices[1][0] = "usaremos el proyecto MABER de la administraci&oacute;n";
 choices[1][1] = "seguiremos las recomendaciones de la herramienta NEDAES";
 choices[1][2] = "utilizaremos las bases sentadas por ESTROFA";
 choices[1][3] = "Ninguna de las anteriores";
 answers[1] = choices[1][3];
 units[1] = "33";
 comments[1] = "Id Pregunta: 205. ";


//  Id pregunta: 339 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  La red de comunicaci&oacute;n en cadena de una organizaci&oacute;n es:";
 choices[2]= new Array();
 choices[2][0] = "Comunicaci&oacute;n ascendente donde dos subordinados reportan a su jefe sobre un asunto";
 choices[2][1] = "Esquema descendente en jerarqu&iacute;a absoluta";
 choices[2][2] = "Cada sujeto se comunica con todos los restantes";
 choices[2][3] = "Se establece con dos interlocutores en cada caso, interactuando con los m&aacute;s cercanos a uno";
 answers[2] = choices[2][1];
 units[2] = "23";
 comments[2] = "Id Pregunta: 339. ";


//  Id pregunta: 360 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  Las siglas D.S.S. responden por:";
 choices[3]= new Array();
 choices[3][0] = "Design Software System";
 choices[3][1] = "Development  Software System";
 choices[3][2] = "Decision Support System";
 choices[3][3] = "Development Support System";
 answers[3] = choices[3][2];
 units[3] = "21";
 comments[3] = "Id Pregunta: 360. ";


//  Id pregunta: 565 AÃ±o de creación de pregunta: 2006-01-01
 questions[4]= "5)  A qui&eacute;n se debe la &quot;Teor&iacute;a de Recursos y Capacidades&quot;";
 choices[4]= new Array();
 choices[4][0] = "Laurence Prusak";
 choices[4][1] = "Peter Drucker";
 choices[4][2] = "Davenport";
 choices[4][3] = "Ninguno de los anteriores";
 answers[4] = choices[4][3];
 units[4] = "22";
 comments[4] = "Id Pregunta: 565. ";


//  Id pregunta: 804 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  A Claude Shannon se le considera:";
 choices[5]= new Array();
 choices[5][0] = "el padre de la telem&aacute;tica moderna";
 choices[5][1] = "el creador del primer ordenador seg&uacute;n la m&aacute;quina de Von Neumann";
 choices[5][2] = "el pionero de los algoritmos criptogr&aacute;ficos";
 choices[5][3] = "el creador del primer sistema operativo";
 answers[5] = choices[5][0];
 units[5] = "99";
 comments[5] = "Id Pregunta: 804. ";


//  Id pregunta: 931 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Qu&eacute; es un applet de Java?:";
 choices[6]= new Array();
 choices[6][0] = "Una aplicaci&oacute;n escrita en Java";
 choices[6][1] = "Un control ActiveX";
 choices[6][2] = "Un programa de Java incrustado en una p&aacute;gina HTML";
 choices[6][3] = "Ninguna de las anteriores";
 answers[6] = choices[6][2];
 units[6] = "60";
 comments[6] = "Id Pregunta: 931. Se especifica en la pregunta que sea de Java, porque Flash tambi&eacute;n es un applet";


//  Id pregunta: 1377 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  TTP:";
 choices[7]= new Array();
 choices[7][0] = "La Top Testing Policy es una pol&iacute;tica que se implanta en organizaciones con un fuerte desarrollo de la calidad del software, para hacer de las pruebas algo fundamental";
 choices[7][1] = "Training To Practise es un tipo de trabajo en equipo que acelera el tiempo en que un empleado nuevo puede comenzar a desempe&ntilde;ar su funci&oacute;n.";
 choices[7][2] = "Una Trusted Third Party es una tercera parte de confianza, es decir una entidad en la que confiamos, y de la que aceptaremos todo lo que firme";
 choices[7][3] = "Todas son falsas";
 answers[7] = choices[7][2];
 units[7] = "74";
 comments[7] = "Id Pregunta: 1377. NULL";


//  Id pregunta: 2025 AÃ±o de creación de pregunta: 2004-01-01
 questions[8]= "9)  Son lenguajes que al menos en sus &uacute;ltimos est&aacute;ndares soportan la programaci&oacute;n orientada a objetos:";
 choices[8]= new Array();
 choices[8][0] = "C++, COBOL, FORTRAN, Ada.";
 choices[8][1] = "Java, Lisp, Algol, Eiffel.";
 choices[8][2] = "C++, Java, Eiffel, Smalltalk.";
 choices[8][3] = "C++, Smalltalk, Eiffel, REXX.";
 answers[8] = choices[8][2];
 units[8] = "82,84";
 comments[8] = "Id Pregunta: 2025. Examen TIC MAP B 2004";


//  Id pregunta: 2160 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Indicar cu&aacute;les de las siguientes son propiedades fundamentales en la orientaci&oacute;n a objetos:";
 choices[9]= new Array();
 choices[9][0] = "Herencia, encapsulaci&oacute;n, polimorfismo, persistencia";
 choices[9][1] = "Abstracci&oacute;n, reusabilidad";
 choices[9][2] = "Extensibilidad";
 choices[9][3] = "Todas son propiedades fundamentales en la orientaci&oacute;n a objetos";
 answers[9] = choices[9][3];
 units[9] = "82";
 comments[9] = "Id Pregunta: 2160. ";


//  Id pregunta: 2267 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  El criterio 7 en el modelo EFQM de excelencia es el referente a:";
 choices[10]= new Array();
 choices[10][0] = "Las alianzas y los recursos";
 choices[10][1] = "Los procesos";
 choices[10][2] = "Los resultados en la sociedad";
 choices[10][3] = "Los resultados en los clientes";
 answers[10] = choices[10][3];
 units[10] = "92";
 comments[10] = "Id Pregunta: 2267. NULL";


//  Id pregunta: 2743 AÃ±o de creación de pregunta: 2006-01-01
 questions[11]= "12)  En el modelo entidad-relaci&oacute;n extendido el grado es:";
 choices[11]= new Array();
 choices[11][0] = "El n&uacute;mero de entidades que participan en una relaci&oacute;n";
 choices[11][1] = "Es el n&uacute;mero m&aacute;ximo de ocurrencias de cada tipo de entidad que pueden intervenir en una ocurrencia de la relaci&oacute;n que se est&aacute; tratando";
 choices[11][2] = "El n&uacute;mero de columnas de una tabla";
 choices[11][3] = "Es una propiedad o caracter&iacute;stica de un tipo de entidad";
 answers[11] = choices[11][0];
 units[11] = "58,80";
 comments[11] = "Id Pregunta: 2743. ";


//  Id pregunta: 3233 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Cu&aacute;l de los siguientes protocolos env&iacute;a, tal y como indica su especificaci&oacute;n, &quot;traps&quot;?:";
 choices[12]= new Array();
 choices[12][0] = "SNMP";
 choices[12][1] = "UDP";
 choices[12][2] = "HTTP";
 choices[12][3] = "FTP";
 answers[12] = choices[12][0];
 units[12] = "104";
 comments[12] = "Id Pregunta: 3233. ";


//  Id pregunta: 3821 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Se&ntilde;ale la afirmaci&oacute;n falsa relativa a la t&eacute;cnica de multiplexaci&oacute;n en el &aacute;mbito de las comunicaciones:";
 choices[13]= new Array();
 choices[13][0] = "Mejora la calidad de la se&ntilde;al transmitida";
 choices[13][1] = "Sirve para establecer varias comunicaciones independientes en un solo enlace";
 choices[13][2] = "Se puede realizar utilizando divisi&oacute;n en frecuencia o divisi&oacute;n en el tiempo";
 choices[13][3] = "Permite aprovechar al m&aacute;ximo la capacidad del enlace";
 answers[13] = choices[13][0];
 units[13] = "103";
 comments[13] = "Id Pregunta: 3821. ";


//  Id pregunta: 3896 AÃ±o de creación de pregunta: 2003-01-01
 questions[14]= "15)  En una red VoIP el elemento llamado &quot;SoftSwitch&quot; es el encargado de:  ";
 choices[14]= new Array();
 choices[14][0] = "Permitir la comunicaci&oacute;n entre la Red VoIP y las Redes tradicionales de Conmutaci&oacute;n de Circuitos";
 choices[14][1] = "Proporcionar una interfaz hacia la Red VoIP y una o mas interfaces tradicionales de voz hacia el cliente ";
 choices[14][2] = "Recibir la se&ntilde;alizaci&oacute;n de las llamadas y de enrutarlas hacia su destino";
 choices[14][3] = "Ninguna de las respuestas anteriores es cierta";
 answers[14] = choices[14][2];
 units[14] = "100";
 comments[14] = "Id Pregunta: 3896. NULL";


//  Id pregunta: 3990 AÃ±o de creación de pregunta: 2006-01-01
 questions[15]= "16)  Un router puede ser:";
 choices[15]= new Array();
 choices[15][0] = "S&oacute;lo un dispositivo hardware.";
 choices[15][1] = "S&oacute;lo un dispositivo software.";
 choices[15][2] = "Un dispositivo software, hardware o bien una combinaci&oacute;n de ellos.";
 choices[15][3] = "Ninguna de las anteriores es cierta";
 answers[15] = choices[15][2];
 units[15] = "102";
 comments[15] = "Id Pregunta: 3990. ";


//  Id pregunta: 4028 AÃ±o de creación de pregunta: 2006-01-01
 questions[16]= "17)  Respecto a Frame Relay, que es verdadero respecto al CIR";
 choices[16]= new Array();
 choices[16][0] = "Todos los PVC deben tener el mismo CIR";
 choices[16][1] = "Es la velocidad que la red se compromete a  servir como minimo";
 choices[16][2] = "Es el volumen de tr&aacute;fico adicional sobre el volumen alcanzable.";
 choices[16][3] = "Es la velocidad m&aacute;xima de acceso a la red.";
 answers[16] = choices[16][1];
 units[16] = "109";
 comments[16] = "Id Pregunta: 4028. ";


//  Id pregunta: 4071 AÃ±o de creación de pregunta: 2006-01-01
 questions[17]= "18)  &iquest;Cu&aacute;l de las siguientes categorias de software no estan incluidas tipicamente en un ERP ?";
 choices[17]= new Array();
 choices[17][0] = "Gesti&oacute;n de Nomina";
 choices[17][1] = "Gesti&oacute;n de RRHH";
 choices[17][2] = "Gesti&oacute;n de Contabilidad";
 choices[17][3] = "Gesti&oacute;n de Clientes";
 answers[17] = choices[17][3];
 units[17] = "65";
 comments[17] = "Id Pregunta: 4071. ";


//  Id pregunta: 4077 AÃ±o de creación de pregunta: 2006-01-01
 questions[18]= "19)  La red externa a la que se conecta el departamento de compras para comunicarse con sus proveedores se llama";
 choices[18]= new Array();
 choices[18][0] = "Intranet";
 choices[18][1] = "inter-intranet";
 choices[18][2] = "extranet abierta";
 choices[18][3] = "extranet";
 answers[18] = choices[18][3];
 units[18] = "113";
 comments[18] = "Id Pregunta: 4077. ";


//  Id pregunta: 4306 AÃ±o de creación de pregunta: 2007-01-01
 questions[19]= "20)  El sistema m&aacute;s econ&oacute;mico y sencillo para proporcionar autenticaci&oacute;n y autorizaci&oacute;n es:";
 choices[19]= new Array();
 choices[19][0] = "Utilizaci&oacute;n de passwords (palabras de paso).";
 choices[19][1] = "Utilizaci&oacute;n de certificados digitales";
 choices[19][2] = "Utilizaci&oacute;n de mecanismos biom&eacute;tricos.";
 choices[19][3] = "Utilizaci&oacute;n de un cortafuego (firewall).";
 answers[19] = choices[19][0];
 units[19] = "74";
 comments[19] = "Id Pregunta: 4306. NULL";


//  Id pregunta: 4442 AÃ±o de creación de pregunta: 2007-01-01
 questions[20]= "21)  Dentro de las t&eacute;cnicas de planificaci&oacute;n de proyectos, podr&iacute;amos decir que una actividad es cr&iacute;tica si:";
 choices[20]= new Array();
 choices[20][0] = "No se puede cambiar sus instantes de comienzo y finalizaci&oacute;n sin modificar Ia duraci&oacute;n total del proyecto.";
 choices[20][1] = "Es la m&aacute;s corta del proyecto.";
 choices[20][2] = "Indica el fin de Ia fase de verificaci&oacute;n y el inicio de Ia fase de validaci&oacute;n.";
 choices[20][3] = "Requiere el mayor n&uacute;mero de recursos humanos para ser realizada.";
 answers[20] = choices[20][0];
 units[20] = "27";
 comments[20] = "Id Pregunta: 4442. Castilla la mancha 06";


//  Id pregunta: 4584 AÃ±o de creación de pregunta: 2007-01-01
 questions[21]= "22)  Cual de las siguientes opciones NO es un contenedor para Ia arquitectura J2EE";
 choices[21]= new Array();
 choices[21][0] = "contenedor web";
 choices[21][1] = "contenedor EJB";
 choices[21][2] = "contenedor de aplicaci&oacute;n cliente";
 choices[21][3] = "contenedor de base de datos";
 answers[21] = choices[21][3];
 units[21] = "60";
 comments[21] = "Id Pregunta: 4584. NULL";


//  Id pregunta: 4677 AÃ±o de creación de pregunta: 2007-01-01
 questions[22]= "23)  La planificaci&oacute;n y gesti&oacute;n de un proyecto se encarga a una persona, que denominaremos &quot;Jefe de proyecto&quot;. El Plan de proyecto contendr&aacute;";
 choices[22]= new Array();
 choices[22][0] = "Un grafico de Gant para estimar el coste, otro de PERT para las restricciones y usaremos COCOMO para las etapas.";
 choices[22][1] = "Estrictamente la Metodolog&iacute;a que el Departamento especifique";
 choices[22][2] = "Un grafico de GANTT para las etapas, un gr&aacute;fico de PERT para la representaci&oacute;n de las restricciones y usaremos COCOMO para las etapas.";
 choices[22][3] = "La Metodolog&iacute;a del Departamento que se suministre v&iacute;a web";
 answers[22] = choices[22][2];
 units[22] = "77";
 comments[22] = "Id Pregunta: 4677. Examen 2006 JCYL";


//  Id pregunta: 4722 AÃ±o de creación de pregunta: 2007-01-01
 questions[23]= "24)  El uso de Sistemas Abiertos permite una serie de ventajas, indique cual de ellas no lo es.";
 choices[23]= new Array();
 choices[23][0] = "Mejorar, en general, la relaci&oacute;n precio/rendimiento.";
 choices[23][1] = "Garantiza la libertad de elecci&oacute;n.";
 choices[23][2] = "Facilita la gesti&oacute;n del sistema frente a los complejos sistemas propietarios";
 choices[23][3] = "Protege la inversi&oacute;n realizada en el equipo f&iacute;sico";
 answers[23] = choices[23][2];
 units[23] = "40";
 comments[23] = "Id Pregunta: 4722. Examen 2006 JCYL";


//  Id pregunta: 4804 AÃ±o de creación de pregunta: 2007-01-01
 questions[24]= "25)  &iquest;Cu&aacute;l de las siguientes actividades no pertenece al modelo de procesos de Reingenier&iacute;a del Software propuesto por Pressman?";
 choices[24]= new Array();
 choices[24][0] = "An&aacute;lisis de inventarios.";
 choices[24][1] = "Ingenier&iacute;a inversa.";
 choices[24][2] = "Ingenier&iacute;a directa.";
 choices[24][3] = "Ingenier&iacute;a relacional.";
 answers[24] = choices[24][3];
 units[24] = "91";
 comments[24] = "Id Pregunta: 4804. examen TIC 2006";


//  Id pregunta: 4820 AÃ±o de creación de pregunta: 2007-01-01
 questions[25]= "26)  &iquest;Cu&aacute;l de las siguientes afirmaciones relativas al lenguaje XHTML (eXtensible Hypertext Markup Language ) NO escierta?";
 choices[25]= new Array();
 choices[25][0] = "Todos los elementos deben tener etiquetas de cierre y &eacute;stas deben estar correctamente anidadas";
 choices[25][1] = "Todos los documentos XHTML deben usar min&uacute;sculas para los elementos y nombres de atributo HTML";
 choices[25][2] = "Todos los valores de los atributos deben expresarse utilizando comillas excepto los valores num&eacute;ricos, encuyo caso pueden omitirse";
 choices[25][3] = "Los documentos XHTML pueden usar aplicaciones de tipo Script o Applet basadas en HTML-DOM(Document Object Model) o en XML-DOM";
 answers[25] = choices[25][2];
 units[25] = "69";
 comments[25] = "Id Pregunta: 4820. NULL";


//  Id pregunta: 4990 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  &iquest;Cu&aacute;l de los siguientes acr&oacute;nimos NO corresponde a un est&aacute;ndar del W3C?:";
 choices[26]= new Array();
 choices[26][0] = "WDSL";
 choices[26][1] = "SOAP";
 choices[26][2] = "UDDI";
 choices[26][3] = "XHTML";
 answers[26] = choices[26][2];
 units[26] = "39";
 comments[26] = "Id Pregunta: 4990. Examen TIC A 2007";


//  Id pregunta: 5034 AÃ±o de creación de pregunta: 2003-01-01
 questions[27]= "28)  &iquest;Cu&aacute;l de los siguientes es un componente de la versi&oacute;n 2 del &quot;framework&quot; .NET de Microsoft?";
 choices[27]= new Array();
 choices[27][0] = "Visual Studio";
 choices[27][1] = "CLR (Common Language Runtime)";
 choices[27][2] = "BizTalk";
 choices[27][3] = "SQL Server";
 answers[27] = choices[27][1];
 units[27] = "59";
 comments[27] = "Id Pregunta: 5034. Examen TIC A 2007";


//  Id pregunta: 5150 AÃ±o de creación de pregunta: 2003-01-01
 questions[28]= "29)  En un DFD, &iquest;Cu&aacute;l es la diferencia entre un digrama de contexto y un diagrama de nivel 0?";
 choices[28]= new Array();
 choices[28][0] = "El diagrama de contexto no pertenece al DFD sino que es previo al mismo, el cual comienza con el diagrama de nivel 1.";
 choices[28][1] = "El diagrama de nivel 0 no existe, ya que los niveles empiezan en el 1, con lo cual no tiene sentido la comparaci&oacute;n.";
 choices[28][2] = "La &uacute;nica diferencia entre un diagrama de contexto y un diagrama de nivel 0 es que &eacute;ste &uacute;ltimo carece de entidades externas.";
 choices[28][3] = "No hay ninguna diferencia entre ambos pues se llama diagrama de contexto al diagrama de nivel 0 de un DFD.";
 answers[28] = choices[28][3];
 units[28] = "81";
 comments[28] = "Id Pregunta: 5150. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5422 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  Seg&uacute;n la ley de propiedad intelectual (RDL 1/96 de 22 de abril) &iquest;qu&eacute; es una obra compuesta?";
 choices[29]= new Array();
 choices[29][0] = "Es el resultado de la colaboraci&oacute;n entre varios autores";
 choices[29][1] = "Una obra en la que, por su complejidad, no es posible establecer un autor";
 choices[29][2] = "Es una obra nueva que incorpora otra existente sin colaboraci&oacute;n del autor de &eacute;sta";
 choices[29][3] = "La citada ley no hace referencia a tal concepto";
 answers[29] = choices[29][2];
 units[29] = "36";
 comments[29] = "Id Pregunta: 5422. Castilla y Le&oacute;n";


//  Id pregunta: 5564 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto al Resilient Packet Ring?";
 choices[30]= new Array();
 choices[30][0] = "Es una tecnolog&iacute;a de nivel 2";
 choices[30][1] = "Es el est&aacute;ndar 802.17";
 choices[30][2] = "Est&aacute; basado en una topolog&iacute;a de anillo dual";
 choices[30][3] = "Est&aacute; orientada a servicios s&iacute;ncronos";
 answers[30] = choices[30][3];
 units[30] = "101";
 comments[30] = "Id Pregunta: 5564. ";


//  Id pregunta: 5975 AÃ±o de creación de pregunta: 2010-01-01
 questions[31]= "32)  Suponga que dos sistemas A y B est&aacute;n conectados mediante un enlace transcontinental de capacidad C=64 Mbps y retardo de propagaci&oacute;n Rp=2 ms. A comienza a transmitir a B un fichero de 15 MB. &iquest;Cu&aacute;ntos octetos ha transmitido A cuando el primer bit de la transmisi&oacute;n llega a B?";
 choices[31]= new Array();
 choices[31][0] = "128.000.";
 choices[31][1] = "32.000.";
 choices[31][2] = "16.000.";
 choices[31][3] = "4.000.";
 answers[31] = choices[31][2];
 units[31] = "99";
 comments[31] = "Id Pregunta: 5975. TIC A 2009";


//  Id pregunta: 6149 AÃ±o de creación de pregunta: 2010-01-01
 questions[32]= "33)  &iquest;C&oacute;mo se representan las relaciones &quot;ficticias&quot; en el M&eacute;todo de Diagramaci&oacute;n por Flechas (ADM)?";
 choices[32]= new Array();
 choices[32][0] = "Mediante una l&iacute;nea de puntos";
 choices[32][1] = "En ADM no existe el concepto de relaciones &quot;ficticias&quot;";
 choices[32][2] = "Mediante una flecha convexa";
 choices[32][3] = "Mediante una flecha c&oacute;ncava";
 answers[32] = choices[32][0];
 units[32] = "28";
 comments[32] = "Id Pregunta: 6149. ";


//  Id pregunta: 6174 AÃ±o de creación de pregunta: 2010-01-01
 questions[33]= "34)  Indique cual de entre los cuales NO es una funci&oacute;n del LMS:";
 choices[33]= new Array();
 choices[33][0] = "Seguimiento de la actividad del alumno.";
 choices[33][1] = "Publicaci&oacute;n de contenidos de formaci&oacute;n";
 choices[33][2] = "Comunicaci&oacute;n profesor-alumno.";
 choices[33][3] = "Matriculaci&oacute;n en cursos.";
 answers[33] = choices[33][1];
 units[33] = "66";
 comments[33] = "Id Pregunta: 6174. NULL";


//  Id pregunta: 6183 AÃ±o de creación de pregunta: 2010-01-01
 questions[34]= "35)  XPDL, XML Process Definition Language, dentro de los 5 interfaces que defini&oacute; la WfMC, podr&iacute;a encuadrarse dentro del interfaz n&uacute;mero:";
 choices[34]= new Array();
 choices[34][0] = "1";
 choices[34][1] = "2";
 choices[34][2] = "3";
 choices[34][3] = "4";
 answers[34] = choices[34][0];
 units[34] = "71";
 comments[34] = "Id Pregunta: 6183. NULL";


//  Id pregunta: 6199 AÃ±o de creación de pregunta: 2010-01-01
 questions[35]= "36)  De acuerdo con M&eacute;trica v3, en la actividad &quot;Seguimiento y Evaluaci&oacute;n de los cambios hasta la aceptaci&oacute;n&quot; del Mantenimiento de Sistemas de Informaci&oacute;n:";
 choices[35]= new Array();
 choices[35][0] = "La aprobaci&oacute;n de la petici&oacute;n se realiza antes de realizar las pruebas de regresi&oacute;n";
 choices[35][1] = "La aprobaci&oacute;n de la petici&oacute;n se realiza antes de comenzar el cambio en desarrollo";
 choices[35][2] = "La aprobaci&oacute;n de la petici&oacute;n se realiza al finalizar las pruebas de regresi&oacute;n y despu&eacute;s de comprobar que todo lo que ha sido modificado, o puede verse afectado por el cambio, funciona correctamente";
 choices[35][3] = "La aprobaci&oacute;n de la petici&oacute;n no es necesaria si se ha comprobado que s&oacute;lo se han modificado los elementos que se ven afectados por el cambio y que se han realizado las pruebas de integraci&oacute;n y del sistema";
 answers[35] = choices[35][2];
 units[35] = "86";
 comments[35] = "Id Pregunta: 6199. TIC-B 2009, bloque desarrollo";


//  Id pregunta: 6346 AÃ±o de creación de pregunta: 2010-01-01
 questions[36]= "37)  &iquest;Cu&aacute;l de las siguientes definiciones describe lo que es Mashup?";
 choices[36]= new Array();
 choices[36][0] = "Aplicaci&oacute;n web que utiliza informaci&oacute;n de diversas fuentes para crear un servicio en base a ellas.";
 choices[36][1] = "T&eacute;cnica de desarrollo web que permite modificar la informaci&oacute;n de una p&aacute;gina web, sin tener que recargarla totalmente, agilizando la interacci&oacute;n con el usuario.";
 choices[36][2] = "Conjunto de especificaciones que posibilitan la comunicaci&oacute;n y provisi&oacute;n de servicios entre diferentes aplicaciones v&iacute;a web.";
 choices[36][3] = "Ninguna de las anteriores.";
 answers[36] = choices[36][0];
 units[36] = "120";
 comments[36] = "Id Pregunta: 6346. NULL";


//  Id pregunta: 6410 AÃ±o de creación de pregunta: 2010-01-01
 questions[37]= "38)  De acuerdo a lo dispuesto en la ley sobre reutilizaci&oacute;n de la informaci&oacute;n del sector p&uacute;blico, se considerar&aacute; infracci&oacute;n muy grave:";
 choices[37]= new Array();
 choices[37][0] = "La falta de menci&oacute;n de la fecha de la &uacute;ltima actualizaci&oacute;n de la informaci&oacute;n";
 choices[37][1] = "La ausencia de cita de la fuente";
 choices[37][2] = "La reutilizaci&oacute;n de documentaci&oacute;n sin haber obtenido la correspondiente licencia en los casos en que &eacute;sta sea requerida";
 choices[37][3] = "La desnaturalizaci&oacute;n del sentido de la informaci&oacute;n para cuya reutilizaci&oacute;n se haya concedido una licencia";
 answers[37] = choices[37][3];
 units[37] = "30";
 comments[37] = "Id Pregunta: 6410. Art&iacute;culo 11 Ley 37/2007";


//  Id pregunta: 6568 AÃ±o de creación de pregunta: 2010-01-01
 questions[38]= "39)  HSDPA introduce, respecto de UMTS, las siguientes mejoras:";
 choices[38]= new Array();
 choices[38][0] = "Tasas cercanas 200 Gbps";
 choices[38][1] = "Nueva portadora de 584 kbps";
 choices[38][2] = "Reducci&oacute;n del tiempo de latencia";
 choices[38][3] = "M&aacute;ximo de 10 GB de tr&aacute;fico al mes para el usuario";
 answers[38] = choices[38][2];
 units[38] = "108";
 comments[38] = "Id Pregunta: 6568. NULL";


//  Id pregunta: 6641 AÃ±o de creación de pregunta: 2010-01-01
 questions[39]= "40)  Dentro de las t&eacute;cnicas para medir la complejidad del software NO se encuentra:";
 choices[39]= new Array();
 choices[39][0] = "La t&eacute;cnica de McCabe";
 choices[39][1] = "La t&eacute;cnica de McCall";
 choices[39][2] = "La t&eacute;cnica de Halstead";
 choices[39][3] = "La t&eacute;cnica de Bang";
 answers[39] = choices[39][1];
 units[39] = "88";
 comments[39] = "Id Pregunta: 6641. NULL";


//  Id pregunta: 7276 AÃ±o de creación de pregunta: 2010-01-01
 questions[40]= "41)  La t&eacute;cnica que utiliza la paravirtualizaci&oacute;n se denomina ";
 choices[40]= new Array();
 choices[40][0] = "Ringing up";
 choices[40][1] = "Ring deprivileging";
 choices[40][2] = "Privileging";
 choices[40][3] = "Hypervisor";
 answers[40] = choices[40][1];
 units[40] = "119";
 comments[40] = "Id Pregunta: 7276. NULL";


//  Id pregunta: 7294 AÃ±o de creación de pregunta: 2010-01-01
 questions[41]= "42)  Ordene de menor a mayor dificultad las siguientes tareas de reconocimiento autom&aacute;tico del habla (ASR):";
 choices[41]= new Array();
 choices[41][0] = "Palabras aisladas, word-spotting, palabras conectadas, habla espont&aacute;nea, habla continua";
 choices[41][1] = "Palabras aisladas, palabras conectadas, word-spotting, habla espont&aacute;nea, habla continua";
 choices[41][2] = "Palabras aisladas, word-spotting, palabras conectadas, habla continua, habla espont&aacute;nea";
 choices[41][3] = "Palabras aisladas, palabras conectadas, word-spotting, habla continua, habla espont&aacute;nea";
 answers[41] = choices[41][2];
 units[41] = "94";
 comments[41] = "Id Pregunta: 7294. NULL";


//  Id pregunta: 7299 AÃ±o de creación de pregunta: 2010-01-01
 questions[42]= "43)  Indique cu&aacute;l de las siguientes es una medida de centralidad en una red social:";
 choices[42]= new Array();
 choices[42][0] = "Grado (degree)";
 choices[42][1] = "Cercan&iacute;a (closeness)";
 choices[42][2] = "Intermediaci&oacute;n (betweenness)";
 choices[42][3] = "Todas son medidas de centralidad";
 answers[42] = choices[42][3];
 units[42] = "63";
 comments[42] = "Id Pregunta: 7299. ";


//  Id pregunta: 7354 AÃ±o de creación de pregunta: 2010-01-01
 questions[43]= "44)  Se&ntilde;ale la CORRECTA:";
 choices[43]= new Array();
 choices[43][0] = "En un criterio a minimizar, el umbral de saciedad ser&aacute; menor o igual al nivel de satisfacci&oacute;n";
 choices[43][1] = "En un criterio a maximizar, el umbral de saciedad ser&aacute; menor o igual al nivel de satisfacci&oacute;n";
 choices[43][2] = "Es obligatorio establecer un umbral de saciedad";
 choices[43][3] = "Todas son INCORRECTAS";
 answers[43] = choices[43][0];
 units[43] = "34";
 comments[43] = "Id Pregunta: 7354. NULL";


//  Id pregunta: 8275 AÃ±o de creación de pregunta: 2011-01-01
 questions[44]= "45)  En el protocolo Internet Protocol versi&oacute;n 6 (IPv6), &iquest;cu&aacute;l es la afirmaci&oacute;n INCORRECTA?:";
 choices[44]= new Array();
 choices[44][0] = "S&oacute;lo se permite fragmentar en el origen.";
 choices[44][1] = "No tiene un mecanismo equivalente al del bit Don't Fragment (DF) de IPv4.";
 choices[44][2] = "Se requiere que todos los enlaces tengan un MTU de 1500 octetos o mayor.";
 choices[44][3] = "Un jumbograma es un paquete IPv6 que contiene una carga &uacute;til (payload) mayor que 65535 octetos.";
 answers[44] = choices[44][2];
 units[44] = "100";
 comments[44] = "Id Pregunta: 8275. Examen TIC A1 2010";


//  Id pregunta: 8525 AÃ±o de creación de pregunta: 2011-01-01
 questions[45]= "46)  Los routers para filtrado de paquetes (&quot;packet filtering&quot;):";
 choices[45]= new Array();
 choices[45][0] = "Son cortafuegos (firewalls) que operan en el nivel de aplicaci&oacute;n en su modalidad &quot;stateful inspection&quot;.";
 choices[45][1] = "Son firewalls que operan en el nivel de aplicaci&oacute;n en su modalidad &quot;stateless inspection&quot;.";
 choices[45][2] = "No son firewalls, sino dispositivos de encaminamiento (&quot;routing&quot;) que se pueden conectar a un cortafuegos como complemento de &eacute;ste";
 choices[45][3] = "Son firewalls que operan en el nivel de red.";
 answers[45] = choices[45][3];
 units[45] = "111";
 comments[45] = "Id Pregunta: 8525. Examen TIC A2 2010 interna";


//  Id pregunta: 8638 AÃ±o de creación de pregunta: 2011-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l de las siguientes operaciones pertenece al lenguaje de manipulaci&oacute;n de datos en SQL?";
 choices[46]= new Array();
 choices[46][0] = "CREATE";
 choices[46][1] = "ALTER";
 choices[46][2] = "DELETE";
 choices[46][3] = "DROP";
 answers[46] = choices[46][2];
 units[46] = "57, 58";
 comments[46] = "Id Pregunta: 8638. Examen TIC A2 2010 interna";


//  Id pregunta: 8641 AÃ±o de creación de pregunta: 2011-01-01
 questions[47]= "48)  En la arquitectura ANSI SQL la capacidad do modificar el esquema interno sin tener que alterar el esquema conceptual (o los externos) es lo que se conoce como:";
 choices[47]= new Array();
 choices[47][0] = "Independencia f&iacute;sica.";
 choices[47][1] = "Independencia L&oacute;gica.";
 choices[47][2] = "Integridad de la entidad";
 choices[47][3] = "Integridad referencial.";
 answers[47] = choices[47][0];
 units[47] = "57, 58";
 comments[47] = "Id Pregunta: 8641. Examen TIC A2 2010 interna";


//  Id pregunta: 8778 AÃ±o de creación de pregunta: 2011-01-01
 questions[48]= "49)  Las actualizaciones de zonas entre servidores DNS se tienen lugar usando los puertos:";
 choices[48]= new Array();
 choices[48][0] = "53 TCP";
 choices[48][1] = "453 TCP";
 choices[48][2] = "456 UDP";
 choices[48][3] = "53 UDP";
 answers[48] = choices[48][0];
 units[48] = "100, 112";
 comments[48] = "Id Pregunta: 8778. Examen UPM A2 2011";


//  Id pregunta: 8818 AÃ±o de creación de pregunta: 2011-01-01
 questions[49]= "50)  &iquest;Para cu&aacute;l de los siguientes supuestos no vale la calidad de software?";
 choices[49]= new Array();
 choices[49][0] = "Para dar confianza";
 choices[49][1] = "Para asegurar que el software funciona";
 choices[49][2] = "Para evaluar el proceso de desarrollo de software";
 choices[49][3] = "Para hacer los resultados del proceso m&aacute;s predecibles";
 answers[49] = choices[49][3];
 units[49] = "87, 92";
 comments[49] = "Id Pregunta: 8818. Examen UPM A2 2011";


//  Id pregunta: 8827 AÃ±o de creación de pregunta: 2011-01-01
 questions[50]= "51)  &iquest;Qu&eacute; tipo de filtro se emplea en im&aacute;genes digitales para detectar bordes?";
 choices[50]= new Array();
 choices[50][0] = " Filtro paso bajo";
 choices[50][1] = " 	Filtro paso alto";
 choices[50][2] = " Filtro de mediana";
 choices[50][3] = " Filtro de la moda";
 answers[50] = choices[50][1];
 units[50] = "93";
 comments[50] = "Id Pregunta: 8827. Examen UC3M 2010";


//  Id pregunta: 8897 AÃ±o de creación de pregunta: 2011-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l es la directiva europea vigente relativa al tratamiento de los datos personales?";
 choices[51]= new Array();
 choices[51][0] = "Directiva 95/46/CE";
 choices[51][1] = "Directiva 2006/24/CE";
 choices[51][2] = "Directiva 2002/58/CE";
 choices[51][3] = "Directiva 97/66/CE";
 answers[51] = choices[51][0];
 units[51] = "29";
 comments[51] = "Id Pregunta: 8897. ";


//  Id pregunta: 8967 AÃ±o de creación de pregunta: 2011-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes lenguajes de programaci&oacute;n es fuertemente tipado?";
 choices[52]= new Array();
 choices[52][0] = "Lisp.";
 choices[52][1] = "Perl.";
 choices[52][2] = "Php.";
 choices[52][3] = "Python.";
 answers[52] = choices[52][3];
 units[52] = "80,81,82,83,84";
 comments[52] = "Id Pregunta: 8967. ";


//  Id pregunta: 8985 AÃ±o de creación de pregunta: 2011-01-01
 questions[53]= "54)  En el contexto de web services &iquest;Qu&eacute; quiere decir OASIS?";
 choices[53]= new Array();
 choices[53][0] = "Organization for the Advancement of Structured Information Services";
 choices[53][1] = "Organization for the Advancement of Service Integration Standards";
 choices[53][2] = "Organization for the Advancement of Structured Information Standards";
 choices[53][3] = "Organization for the Application of Structured Information Standards";
 answers[53] = choices[53][2];
 units[53] = "51, 69";
 comments[53] = "Id Pregunta: 8985. NULL";


//  Id pregunta: 8989 AÃ±o de creación de pregunta: 2011-01-01
 questions[54]= "55)  Se&ntilde;ale la respuesta falsa respecto del Plan General de Garant&iacute;a de Calidad promovido por CSAE";
 choices[54]= new Array();
 choices[54][0] = "Es un documento impreso";
 choices[54][1] = "Consta de cuatro fasc&iacute;culos";
 choices[54][2] = "Orientada a cualquier ambito de las AAPP";
 choices[54][3] = "Requiere autorizaci&oacute;n para su empleo";
 answers[54] = choices[54][3];
 units[54] = "87";
 comments[54] = "Id Pregunta: 8989. NULL";


//  Id pregunta: 9189 AÃ±o de creación de pregunta: 2013-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguiente no es una T&eacute;cnica?";
 choices[55]= new Array();
 choices[55][0] = "Prototipado";
 choices[55][1] = "Normalizaci&oacute;n";
 choices[55][2] = "Diagrama de paquetes";
 choices[55][3] = "Casos de uso";
 answers[55] = choices[55][0];
 units[55] = "86";
 comments[55] = "Id Pregunta: 9189. NULL";


//  Id pregunta: 9195 AÃ±o de creación de pregunta: 2013-01-01
 questions[56]= "57)  El Texto Refundido de la Ley de Propiedad Intelectual establece que la duraci&oacute;n de la protecci&oacute;n de los derechos de explotaci&oacute;n sobre los programas de ordenador se extiende como m&aacute;ximo a:";
 choices[56]= new Array();
 choices[56][0] = "70 a&ntilde;os computados desde el d&iacute;a siguiente a la divulgaci&oacute;n l&iacute;cita del programa, si el autor es una persona jur&iacute;dica.";
 choices[56][1] = "40 a&ntilde;os desde el 1 de enero del a&ntilde;o siguiente a la divulgaci&oacute;n l&iacute;cita del programa o a su creaci&oacute;n si no se hubiera divulgado.";
 choices[56][2] = "toda la vida del autor y 70 a&ntilde;os despu&eacute;s de su muerte, si el autor es una persona f&iacute;sica.";
 choices[56][3] = "40 a&ntilde;os desde el 1 de enero del a&ntilde;o siguiente a la divulgaci&oacute;n l&iacute;cita del programa, cualquiera que sea la presonalidad del autor.";
 answers[56] = choices[56][2];
 units[56] = "36";
 comments[56] = "Id Pregunta: 9195. ";


//  Id pregunta: 9204 AÃ±o de creación de pregunta: 2013-01-01
 questions[57]= "58)  En el lenguaje ODRL, &iquest;c&oacute;mo se identifica de forma &uacute;nica el contenido digital a proteger?";
 choices[57]= new Array();
 choices[57][0] = "Mediante el elemento Assets.";
 choices[57][1] = "Mendiate el elemento Permission.";
 choices[57][2] = "Mendiante el elemento Constraints.";
 choices[57][3] = "Todas son falsas.";
 answers[57] = choices[57][0];
 units[57] = "37";
 comments[57] = "Id Pregunta: 9204. ";


//  Id pregunta: 9289 AÃ±o de creación de pregunta: 2013-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l es la norma de creaci&oacute;n de AENOR?";
 choices[58]= new Array();
 choices[58][0] = "El RD 2200/1995.";
 choices[58][1] = "El RD 757/1986.";
 choices[58][2] = "La Ley 5/1985.";
 choices[58][3] = "Ninguna, pues no es un organismo p&uacute;blico. ";
 answers[58] = choices[58][3];
 units[58] = "42";
 comments[58] = "Id Pregunta: 9289. ";


//  Id pregunta: 9352 AÃ±o de creación de pregunta: 2013-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l es la velocidad disponible de un acceso primario RDSI en Europa?";
 choices[59]= new Array();
 choices[59][0] = "1544 Kbps";
 choices[59][1] = "64 Kbps";
 choices[59][2] = "2048 Kbps";
 choices[59][3] = "1024 Kbps";
 answers[59] = choices[59][2];
 units[59] = "103";
 comments[59] = "Id Pregunta: 9352. Pruebas selectivas para Gesti&oacute;n de Sistemas e Inform&aacute;tica de la UPM 2011. Libre";


//  Id pregunta: 9405 AÃ±o de creación de pregunta: 2013-01-01
 questions[60]= "61)  QSIG es";
 choices[60]= new Array();
 choices[60][0] = "Un protocolo de se&ntilde;alizaci&oacute;n normalizado a nivel internacional para su uso entre Private Automatic Branch eXchanges (PABX).";
 choices[60][1] = "Un sistema de calidad aplicado a la telefon&iacute;a SIP.";
 choices[60][2] = "Una extensi&oacute;n a SS7 que puede enviarse sobre IP.";
 choices[60][3] = "Ninguna de las anteriores";
 answers[60] = choices[60][0];
 units[60] = "109";
 comments[60] = "Id Pregunta: 9405. T&eacute;cnico Teleco Ayto Madrid 2010";


//  Id pregunta: 9439 AÃ±o de creación de pregunta: 2013-01-01
 questions[61]= "62)  El diagrama de estructura de datos (DED):";
 choices[61]= new Array();
 choices[61][0] = "Representa el modelo l&oacute;gico de datos.";
 choices[61][1] = "Es &uacute;nico para cada sistema de informaci&oacute;n.";
 choices[61][2] = "Se conoce tambi&eacute;n como Diccionario de Datos.";
 choices[61][3] = "Define un conjunto de objetos que comparten una misma estructura y comportamiento com&uacute;n.";
 answers[61] = choices[61][0];
 units[61] = "81";
 comments[61] = "Id Pregunta: 9439. Examen AGE TIC A1 2011";


//  Id pregunta: 9447 AÃ±o de creación de pregunta: 2013-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes es una tecnolog&iacute;a de desarrollo de sistemas distribuidos basados en objetos?:";
 choices[62]= new Array();
 choices[62][0] = "UMTS.";
 choices[62][1] = "JINI.";
 choices[62][2] = "VORBIS.";
 choices[62][3] = "CLOS.";
 answers[62] = choices[62][1];
 units[62] = "82";
 comments[62] = "Id Pregunta: 9447. Examen AGE TIC A1 2011";


//  Id pregunta: 9455 AÃ±o de creación de pregunta: 2013-01-01
 questions[63]= "64)  Seg&uacute;n Codd, una entidad en la que todos los atributos tienen dependencia funcional completa de la clave est&aacute;, al menos, en:";
 choices[63]= new Array();
 choices[63][0] = "Primera Forma Normal.";
 choices[63][1] = "Segunda Forma Normal.";
 choices[63][2] = "Tercera Forma Normal.";
 choices[63][3] = "Forma Normal de Boyce-Codd.";
 answers[63] = choices[63][1];
 units[63] = "58";
 comments[63] = "Id Pregunta: 9455. NULL";


//  Id pregunta: 9489 AÃ±o de creación de pregunta: 2013-01-01
 questions[64]= "65)  Las entrevistas son una t&eacute;cnica de bajo nivel de obtenci&oacute;n de requisitos. &iquest;Cu&aacute;l de las siguientes no es una fase de las mismas?";
 choices[64]= new Array();
 choices[64][0] = "Identificaci&oacute;n de candidatos";
 choices[64][1] = "Contacto con candidatos para fijar entrevista";
 choices[64][2] = "Preparaci&oacute;n";
 choices[64][3] = "Ejecuci&oacute;n de la entrevista";
 answers[64] = choices[64][1];
 units[64] = "78";
 comments[64] = "Id Pregunta: 9489. ";


//  Id pregunta: 9526 AÃ±o de creación de pregunta: 2013-01-01
 questions[65]= "66)  Se&ntilde;ale la afimaci&oacute;n falsa con respecto al protocolo H.329:";
 choices[65]= new Array();
 choices[65][0] = "Es un protocolo que define la se&ntilde;alizaci&oacute;n de llamadas";
 choices[65][1] = "Es un protocolo que permite la inclusi&oacute;n de tr&aacute;fico de datos";
 choices[65][2] = "Especifica un protocolo para el control y etiquetado de dos canales simult&aacute;neos en una &uacute;nica videoconferencia";
 choices[65][3] = "Simplifica y complementa al protocolo T.120";
 answers[65] = choices[65][0];
 units[65] = "117";
 comments[65] = "Id Pregunta: 9526. NULL";


//  Id pregunta: 9574 AÃ±o de creación de pregunta: 2013-01-01
 questions[66]= "67)  Al hablar de software libre y de su uso en la Administraci&oacute;n se&ntilde;ale la frase correcta:";
 choices[66]= new Array();
 choices[66][0] = "La Ley 11/2007 obliga a las administraciones p&uacute;blicas a poner las aplicaciones de cuyos derechos de propiedad son titulares a disposici&oacute;n de cualquier otra Administraci&oacute;n Auton&oacute;mica.";
 choices[66][1] = "Una licencia de c&oacute;digo de fuente abierta seg&uacute;n la FSF obliga a hacer p&uacute;blicas todas las mejoras, poni&eacute;ndolas a disposici&oacute;n de la comunidad.";
 choices[66][2] = "Una licencia LGPL no restringe la posibilidad de incluir el software protegido por la licencia en productos protegidos por licencias no GPL.";
 choices[66][3] = "El Real Decreto 4/2010 del Esquema Nacional de Interoperabilidad prev&eacute; un cat&aacute;logo &uacute;nicamente de est&aacute;ndares abiertos de uso obligatorio por las administraciones p&uacute;blicas.";
 answers[66] = choices[66][2];
 units[66] = "43, 61, 62";
 comments[66] = "Id Pregunta: 9574. Examen TIC A1 2011";


//  Id pregunta: 9627 AÃ±o de creación de pregunta: 2014-01-01
 questions[67]= "68)  En el sistema operativo UNIX la expresi&oacute;n &ldquo;daemon&rdquo; se refiere a un proceso del sistema que:";
 choices[67]= new Array();
 choices[67][0] = "Siempre se ejecuta en segundo plano (background)";
 choices[67][1] = "Siempre es de corta duraci&oacute;n";
 choices[67][2] = "Est&aacute; siempre ejecut&aacute;ndose";
 choices[67][3] = "nunca se ejecuta bajo control de los subsistemas de temporarizaci&oacute;n. ";
 answers[67] = choices[67][0];
 units[67] = "53";
 comments[67] = "Id Pregunta: 9627. Examen TIC A1 2013";


//  Id pregunta: 9671 AÃ±o de creación de pregunta: 2014-01-01
 questions[68]= "69)  Los sistemas multicomputador pueden dividirse, seg&uacute;n la taxonom&iacute;a de Flynn en:";
 choices[68]= new Array();
 choices[68][0] = "SISD, SIMD, MISD y MIMD.";
 choices[68][1] = "UMA y NUMA.";
 choices[68][2] = "MMC y MMD.";
 choices[68][3] = "Ninguna de las anteriores.";
 answers[68] = choices[68][3];
 units[68] = "45";
 comments[68] = "Id Pregunta: 9671. ";


//  Id pregunta: 9797 AÃ±o de creación de pregunta: 2014-01-01
 questions[69]= "70)  El uso conjunto de los certificados ubicados en el DNI electr&oacute;nico proporcionan las siguientes garant&iacute;as";
 choices[69]= new Array();
 choices[69][0] = "Disponibilidad, autenticidad de origen,confidencialidad y no repudio de origen. ";
 choices[69][1] = "Disponibilidad, integridad, autenticidad de origen. ";
 choices[69][2] = "Integridad, autenticidad de origen y no repudio de origen.";
 choices[69][3] = "Integridad, confidencialidad, autenticid ad de origen y no repudio de destino. ";
 answers[69] = choices[69][2];
 units[69] = "74";
 comments[69] = "Id Pregunta: 9797. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9810 AÃ±o de creación de pregunta: 2014-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l de las siguientes unidades de magnitud en relaci&oacute;n al almacenamiento de informaci&oacute;n es mayor?";
 choices[70]= new Array();
 choices[70][0] = "Pettabyte (PB).";
 choices[70][1] = "Terabyte (TB).";
 choices[70][2] = "Yottabyte (YB).";
 choices[70][3] = "Zettabyte (ZB).";
 answers[70] = choices[70][2];
 units[70] = "52";
 comments[70] = "Id Pregunta: 9810. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9933 AÃ±o de creación de pregunta: 2014-01-01
 questions[71]= "72)  &iquest;Cu&aacute;l no es un fallo detectado en el modelo de referencia OSI?";
 choices[71]= new Array();
 choices[71][0] = "Se desarroll&oacute; antes de que se inventaran los protocolos, as&iacute; que no se sab&iacute;a qu&eacute; funcionalidad poner en cada capa.";
 choices[71][1] = "Las capas de red y enlace de datos est&aacute;n muy llenas y se han subdividido en subcapas, cada una con funciones distintas.";
 choices[71][2] = "La administraci&oacute;n de la red es clave en el modelo.";
 choices[71][3] = "El modelo est&aacute; dominado por una mentalidad de comunicaciones.";
 answers[71] = choices[71][2];
 units[71] = "100";
 comments[71] = "Id Pregunta: 9933. NULL";


//  Id pregunta: 9975 AÃ±o de creación de pregunta: 2014-01-01
 questions[72]= "73)  En una arquitectura web en .NET, indique cu&aacute;l es la opci&oacute;n correcta que define una Biblioteca de Clases Base (BCB):";
 choices[72]= new Array();
 choices[72][0] = "La Biblioteca de Clases Base es una API de alto nivel para permitir acceder a los servicios que ofrece el CLR (Common Language Runtime) a trav&eacute;s de objetos en una jerarqu&iacute;a denominada espacio de nombres.";
 choices[72][1] = "La Biblioteca de Clases Base es una API de bajo nivel para permitir acceder a los datos que ofrece el ASP.NET a trav&eacute;s de objetos en una jerarqu&iacute;a denominada espacio de nombres";
 choices[72][2] = "La Biblioteca de Clases Base es un conjunto de librer&iacute;as que permiten realizar las operaciones de acceso a datos.";
 choices[72][3] = "La Biblioteca de Clases Base es un conjunto de clases, interfaces y tipos valor que son la base para la compilaci&oacute;n del c&oacute;digo fuente a un c&oacute;digo intermedio denominado CIL (Common Intermediate Language).";
 answers[72] = choices[72][0];
 units[72] = "115";
 comments[72] = "Id Pregunta: 9975. Examen TICA1, Xunta de GaliciA, 2011";


//  Id pregunta: 9978 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  En el desarrollo de aplicaciones en .NET Framework disponemos de un Garbage Collector (recolector de basura). Indique cu&aacute;l de las siguientes afirmaciones es FALSA ";
 choices[73]= new Array();
 choices[73][0] = "La liberaci&oacute;n de un objeto en memoria es perfectamente posible sin intervenci&oacute;n expl&iacute;cita por parte del usuario ";
 choices[73][1] = "Para la liberaci&oacute;n expl&iacute;cita de memoria existen m&eacute;todos de finalizaci&oacute;n como Finalize() y Dispose()";
 choices[73][2] = "Se suele utilizar Dispose() cuando el objeto no se va a utilizar m&aacute;s definitivamente ";
 choices[73][3] = "Si se invoca expl&iacute;citamente el m&eacute;todo Dispose() de un objeto, este ser&aacute; liberado inmediatamente ";
 answers[73] = choices[73][3];
 units[73] = "59";
 comments[73] = "Id Pregunta: 9978. Examen TICA2, Xunta de GaliciA, 2011";


//  Id pregunta: 9991 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  &iquest;Cu&aacute;l es el formato al que se tienen que ajustar las facturas electr&oacute;nicas que se remitan a las Administraciones P&uacute;blicas, de acuerdo con la ley 25/2013, de 27 de diciembre, de impulso de la factura electr&oacute;nica y creaci&oacute;n del registro contable de facturas en el Sector P&uacute;blico?";
 choices[74]= new Array();
 choices[74][0] = "e-Factura, versi&oacute;n 2.3";
 choices[74][1] = "Facturae, versi&oacute;n 3.2, y versiones sucesivas que publique el Ministerio de Industria, Turismo y Comercio.";
 choices[74][2] = "Facturae, versi&oacute;n 3.2 y 3.2.1, seg&uacute;n resoluci&oacute;n 21 de marzo de 2014";
 choices[74][3] = "ebXML, versi&oacute;n 2.0, hasta que se apruebe la Ley que transpone la Directiva 2006/123/CE sobre actividades de servicio en el mercado interior.";
 answers[74] = choices[74][2];
 units[74] = "70";
 comments[74] = "Id Pregunta: 9991. NULL";


//  Id pregunta: 10030 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  Indique la respuesta correcta en relaci&oacute;n al comando SNMP GetBulkRequest:";
 choices[75]= new Array();
 choices[75][0] = "Est&aacute; disponible en todas las versiones de SNMP.";
 choices[75][1] = "Es utilizado por un sistema gestor de red para enviar un mensaje a otro gestor sobre objetos administrados.";
 choices[75][2] = "Es el que permite utilizar autenticaci&oacute;n en SNMP v3.			";
 choices[75][3] = "Es utilizado cuando se requiere una cantidad elevada de datos transmitidos.";
 answers[75] = choices[75][3];
 units[75] = "104";
 comments[75] = "Id Pregunta: 10030. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10081 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l de los siguientes modelos de ciclo de vida orientado a objetos tiene un enfoque ascendente?";
 choices[76]= new Array();
 choices[76][0] = "Pinball";
 choices[76][1] = "Remolino";
 choices[76][2] = "Cluster";
 choices[76][3] = "Fuente";
 answers[76] = choices[76][2];
 units[76] = "76";
 comments[76] = "Id Pregunta: 10081. NULL";


//  Id pregunta: 10106 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  En el m&eacute;todo de acceso al medio CSMA-p, el emisor:";
 choices[77]= new Array();
 choices[77][0] = "Env&iacute;a datos en cuanto los tiene disponibles.";
 choices[77][1] = "Escucha el medio y los env&iacute;a cuando &eacute;ste est&aacute; libre";
 choices[77][2] = "Escucha el medio y los env&iacute;a cuando &eacute;ste est&aacute; libre con una probabilidad p";
 choices[77][3] = "Escucha el medio y los env&iacute;a cuando &eacute;ste est&aacute; libre con una probabilidad 1-p";
 answers[77] = choices[77][2];
 units[77] = "101";
 comments[77] = "Id Pregunta: 10106. ";


//  Id pregunta: 10163 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  En el modelo l&oacute;gico relacional, la cardinalidad de una relaci&oacute;n se corresponde con:";
 choices[78]= new Array();
 choices[78][0] = "N&uacute;mero de atributos de la relaci&oacute;n";
 choices[78][1] = "N&uacute;mero m&iacute;nimo de ocurrencias de una entidad que pueden participar en la relaci&oacute;n";
 choices[78][2] = "N&uacute;mero de entidades que participan en la relaci&oacute;n o asociaci&oacute;n";
 choices[78][3] = "N&uacute;mero de tuplas de la relaci&oacute;n";
 answers[78] = choices[78][3];
 units[78] = "58";
 comments[78] = "Id Pregunta: 10163. ";


//  Id pregunta: 10203 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  Indique qu&eacute; afirmaci&oacute;n es falsa en relaci&oacute;n a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles";
 choices[79]= new Array();
 choices[79][0] = "Su arquitectura de red, EPS (Evolved Packet System), est&aacute; formada por el n&uacute;cleo de red EPC (Evolved Packet Core) y la red de acceso LTE, conocida como E-UTRAN";
 choices[79][1] = "Descarta el uso de la t&eacute;cnica HARQ (Hybrid Automatic Repeat Request) introducida en la release 5 (HSDPA)";
 choices[79][2] = "La transmisi&oacute;n multiantena est&aacute; basada en SFBC (Space Frequency Block Coding) y FSTD (Frequency-Shift Time Diversity)";
 choices[79][3] = "Se la conoce con el nombre de LTE (Long Term Evolution)";
 answers[79] = choices[79][1];
 units[79] = "108";
 comments[79] = "Id Pregunta: 10203. La t&eacute;cnica HARQ sigue us&aacute;ndose en 4G";


//  Id pregunta: 10224 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  Para que la siguiente sentencia compile:float a = 100.21;I)&nbsp; Necesita hacer un casting a float: float a = (float) 100.21;II)&nbsp; Hay que colocar una f tras el valor num&eacute;rico: float a = 100.21f;III)&nbsp; Hay que prescindir de la fracci&oacute;n decimal: float a = 100;";
 choices[80]= new Array();
 choices[80][0] = "Compila bien sin cambios";
 choices[80][1] = "No compila, pero ninguna de las anteriores permite compilar";
 choices[80][2] = "S&oacute;lo es v&aacute;lida I)";
 choices[80][3] = "I), II) y III) son v&aacute;lidas";
 answers[80] = choices[80][3];
 units[80] = "60";
 comments[80] = "Id Pregunta: 10224. NULL";


//  Id pregunta: 10314 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  Un conector tipo &quot;MT-Array&quot; es un conector para:";
 choices[81]= new Array();
 choices[81][0] = "Fibra &oacute;ptica.";
 choices[81][1] = "Mainframes.";
 choices[81][2] = "Buses PCI.";
 choices[81][3] = "Buses PCI.";
 answers[81] = choices[81][0];
 units[81] = "99";
 comments[81] = "Id Pregunta: 10314. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10352 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  &iquest;Cu&aacute;l de las siguientes no es una herramienta de evaluaci&oacute;n autom&aacute;tica de la accesibilidad de p&aacute;ginas web?";
 choices[82]= new Array();
 choices[82][0] = "ZEUS";
 choices[82][1] = "HERA";
 choices[82][2] = "BOBBY";
 choices[82][3] = "TAW";
 answers[82] = choices[82][0];
 units[82] = "39";
 comments[82] = "Id Pregunta: 10352. Otras herramientas pueden ser eXaminator, Wave o EvalAccess";


//  Id pregunta: 10457 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  &iquest;Cu&aacute;l de los siguientes elementos no forma parte de HTML 5?";
 choices[83]= new Array();
 choices[83][0] = "&lt;canvas&gt;";
 choices[83][1] = "&lt;applet&gt;";
 choices[83][2] = "&lt;keygen&gt;";
 choices[83][3] = "&lt;audio&gt;";
 answers[83] = choices[83][1];
 units[83] = "69";
 comments[83] = "Id Pregunta: 10457. NULL";


//  Id pregunta: 10534 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  En los discos duros magn&eacute;ticos, &iquest;que significa el tiempo de latencia media?";
 choices[84]= new Array();
 choices[84][0] = "Tiempo medio que tarda el cabezal en situarse en la pista deseada";
 choices[84][1] = "Tiempo medio que tarda el cabezal en situarse en la pista y sector deseados";
 choices[84][2] = "Tiempo medio que tarda el cabezal en situarse en el sector deseado, una vez posicionado en la pista";
 choices[84][3] = "Tiempo medio que tarda la controladora en procesar un requerimiento de datos";
 answers[84] = choices[84][2];
 units[84] = "48";
 comments[84] = "Id Pregunta: 10534. NULL";


//  Id pregunta: 10548 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Los auditores que han participado en el desarrollo de un sistema podr&iacute;an haber perdido su independencia si: ";
 choices[85]= new Array();
 choices[85][0] = "Realizan una revisi&oacute;n del desarrollo del sistema ";
 choices[85][1] = "Recomiendan medidas de mejora";
 choices[85][2] = "Realizan una evaluaci&oacute;n independiente de la aplicaci&oacute;n despu&eacute;s de su puesta en producci&oacute;n ";
 choices[85][3] = "Participan activamente en el dise&ntilde;o e implementaci&oacute;n del sistema de aplicaci&oacute;n";
 answers[85] = choices[85][3];
 units[85] = "31, 32, 33";
 comments[85] = "Id Pregunta: 10548. La independencia puede verse afectada si el auditor se involucra activamente en el dise&ntilde;o e implementaci&oacute;n del sistema. ";


//  Id pregunta: 10675 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  La Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas establece su entrada en vigor para &quot;las previsiones relativas al registro electr&oacute;nico de apoderamientos, registro electr&oacute;nico, registro de empleados p&uacute;blicos habilitados, punto de acceso general electr&oacute;nico de la Administraci&oacute;n y archivo &uacute;nico electr&oacute;nico&quot; en un plazo de:";
 choices[86]= new Array();
 choices[86][0] = "2 a&ntilde;os despu&eacute;s de su entrada en vigor.";
 choices[86][1] = "1 a&ntilde;o despu&eacute;s de su publicaci&oacute;n.";
 choices[86][2] = "1 a&ntilde;o despu&eacute;s de su aprobaci&oacute;n.";
 choices[86][3] = "6 meses despu&eacute;s de su publicaci&oacute;n.";
 answers[86] = choices[86][0];
 units[86] = "30";
 comments[86] = "Id Pregunta: 10675. ";


//  Id pregunta: 10816 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  Con respecto a la metodolog&iacute;a &aacute;gil Kanban, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[87]= new Array();
 choices[87][0] = "Las iteraciones deben ser de tiempo fijo siempre.";
 choices[87][1] = "No permite trabajar en m&uacute;ltiples productos simult&aacute;neamente.";
 choices[87][2] = "Prescribe los roles siguientes de modo obligatorio: due&ntilde;o del producto y equipo.";
 choices[87][3] = "Limita el n&uacute;mero de elementos al mismo tiempo en un estado del flujo de trabajo.";
 answers[87] = choices[87][3];
 units[87] = "79";
 comments[87] = "Id Pregunta: 10816. Examen GSI 2014";


//  Id pregunta: 10890 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Indique a qu&eacute; subred pertenece la siguiente direcci&oacute;n de broadcast 95.25.46.159:";
 choices[88]= new Array();
 choices[88][0] = "95.25.30.128/27";
 choices[88][1] = "95.25.30.128/25";
 choices[88][2] = "95.25.46.128/27";
 choices[88][3] = "95.25.46.128/25";
 answers[88] = choices[88][2];
 units[88] = "100";
 comments[88] = "Id Pregunta: 10890. Examen GSI 2014";


//  Id pregunta: 11064 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  De los siguientes t&iacute;tulos, &iquest;cual NO es uno libro del core de publicaciones de ITIL?";
 choices[89]= new Array();
 choices[89][0] = "Servicio de Optimizaci&oacute;n";
 choices[89][1] = "Transici&oacute;n del Servicio";
 choices[89][2] = "Dise&ntilde;o del Servicio";
 choices[89][3] = "Estrategia del Servicio";
 answers[89] = choices[89][0];
 units[89] = "98";
 comments[89] = "Id Pregunta: 11064. ";


//  Id pregunta: 11078 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Seg&uacute;n ITIL, &iquest;Cu&aacute;l de estos NO es un tipo de cambio?";
 choices[90]= new Array();
 choices[90][0] = "Cambio est&aacute;ndar";
 choices[90][1] = "Cambio normal";
 choices[90][2] = "Cambio urgente";
 choices[90][3] = "Cambio de emergencia";
 answers[90] = choices[90][2];
 units[90] = "98";
 comments[90] = "Id Pregunta: 11078. ";


//  Id pregunta: 11201 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l de los siguientes no es un pilar de la Agenda Digital Europea?";
 choices[91]= new Array();
 choices[91][0] = "Mercado Digital Din&aacute;mico &Uacute;nico";
 choices[91][1] = "Acceso r&aacute;pido y ultrarr&aacute;pido a internet";
 choices[91][2] = "Confianza y Seguridad";
 choices[91][3] = "Servicios P&uacute;blicos Digitales de Calidad";
 answers[91] = choices[91][3];
 units[91] = "30";
 comments[91] = "Id Pregunta: 11201. ";


//  Id pregunta: 11239 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  El &aacute;mbito subjetivo del texto refundido de la ley de contratos del sector p&uacute;blico:";
 choices[92]= new Array();
 choices[92][0] = "La ley aplica a la totalidad del sector p&uacute;blico todos sus articulos.";
 choices[92][1] = "Aquellos expedientes de contrataci&oacute;n incoados por las Administraciones P&uacute;blicas son de naturaleza administrativa.";
 choices[92][2] = "Todos los contratos de los Poderes Adjudicadores que no son Administraci&oacute;n P&uacute;blica sujetos a la directiva europea son considerados contratos SARA, independientemente de su cuant&iacute;a.";
 choices[92][3] = "Ninguna es verdadera.";
 answers[92] = choices[92][1];
 units[92] = "41";
 comments[92] = "Id Pregunta: 11239. ";


//  Id pregunta: 11302 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Se&ntilde;ale la norma que no est&aacute; asociada correctamente a su contenido";
 choices[93]= new Array();
 choices[93][0] = "ISO 15408 - Common criteria";
 choices[93][1] = "RFC 2527 - DPC (Declaraci&oacute;n de Pr&aacute;cticas de Certificaci&oacute;n)";
 choices[93][2] = "CWA 14890 - Protocolo de autenticaci&oacute;n mutua, usado para el certificado de componente del DNI";
 choices[93][3] = "RFC 5246 - IPSEC";
 answers[93] = choices[93][3];
 units[93] = "33,74,111";
 comments[93] = "Id Pregunta: 11302. El RFC 5246 describe TLS. IPSEC es descrito en RFC 4305";


//  Id pregunta: 11331 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  De los servicios Java, indique la afirmaci&oacute;n que NO es correcta";
 choices[94]= new Array();
 choices[94][0] = "JPA ha reemplazado a los Entity beans, que desaparecieron en la versi&oacute;n 5 de Java";
 choices[94][1] = "JNI se utiliza para el acceso a directorios";
 choices[94][2] = "JAX-WS hace que la creaci&oacute;n de Web Services en Java sea m&aacute;s sencilla";
 choices[94][3] = "JAXP permite el acceso a ficheros XML";
 answers[94] = choices[94][1];
 units[94] = "116";
 comments[94] = "Id Pregunta: 11331. Es JNDI el que se corresponde con esa descripci&oacute;n";


//  Id pregunta: 11429 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Seg&uacute;n la Ley 9/2014, la aprobaci&oacute;n de los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n:";
 choices[95]= new Array();
 choices[95][0] = "Corresponde al Gobierno, mediante Real Decreto.";
 choices[95][1] = "Corresponde a la CNMC, mediante Resoluci&oacute;n.";
 choices[95][2] = "Corresponde al MINETUR, mediante Real Decreto.";
 choices[95][3] = "Corresponde al Gobierno, mediante Resoluci&oacute;n.";
 answers[95] = choices[95][0];
 units[95] = "110";
 comments[95] = "Id Pregunta: 11429. ";


//  Id pregunta: 11546 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Seg&uacute;n M&eacute;trica v3, &iquest;Cu&aacute;l de las siguientes actividades de aseguramiento de la calidad NO se lleva a cabo durante el Mantenimiento del Sistema de Informaci&oacute;n?";
 choices[96]= new Array();
 choices[96][0] = "Aseguramiento de la calidad NO afecta al proceso MSI";
 choices[96][1] = "La revisi&oacute;n del plan de pruebas de regresi&oacute;n.";
 choices[96][2] = "La revisi&oacute;n de la realizaci&oacute;n de las pruebas de regresi&oacute;n.";
 choices[96][3] = "La revisi&oacute;n del Plan de Mantenimiento del Sistema.";
 answers[96] = choices[96][3];
 units[96] = "86";
 comments[96] = "Id Pregunta: 11546. NULL";


//  Id pregunta: 11579 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  La velocidad y el ancho de banda en las celdas LTE es:";
 choices[97]= new Array();
 choices[97][0] = "Subida hasta 326Mbps y ancho de canal de 5Mhz";
 choices[97][1] = "Subida hasta 2Mbps y ancho de canal de 5Mhz";
 choices[97][2] = "Subida hasta 256Mbps y ancho de canal de 200Khz";
 choices[97][3] = "Subida hasta 1Gpbs y ancho de canal de 160Mhz";
 answers[97] = choices[97][0];
 units[97] = "107";
 comments[97] = "Id Pregunta: 11579. NULL";


//  Id pregunta: 11582 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  De acuerdo a la LOPD, el incumplimiento del deber de informaci&oacute;n al afectado acerca del tratamiento de sus datos de car&aacute;cter personal constituye una infracci&oacute;n de car&aacute;cter:";
 choices[98]= new Array();
 choices[98][0] = "Leve, cuando los datos se han recabado del propio interesado";
 choices[98][1] = "Grave, cuando los datos se han recabado del propio interesado";
 choices[98][2] = "Leve, cuando los datos no se han recabado del propio interesado";
 choices[98][3] = "Todas las anteriores son falsas";
 answers[98] = choices[98][0];
 units[98] = "29";
 comments[98] = "Id Pregunta: 11582. ";


//  Id pregunta: 11710 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Qu&eacute; m&eacute;todo de conmutaci&oacute;n LAN ejecuta un CRC en cada trama?";
 choices[99]= new Array();
 choices[99][0] = "Metodo de corte";
 choices[99][1] = "Verificaci&oacute;n de fragmentos";
 choices[99][2] = "Libre de fragmentos";
 choices[99][3] = "Almacenamiento y env&iacute;o";
 answers[99] = choices[99][3];
 units[99] = "102";
 comments[99] = "Id Pregunta: 11710. NULL";


