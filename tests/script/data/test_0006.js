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

//  Id pregunta: 334 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  NO es un modelo para la toma grupal de decisiones:";
 choices[0]= new Array();
 choices[0][0] = "Tormenta de ideas";
 choices[0][1] = "An&aacute;lisis de redes";
 choices[0][2] = "T&eacute;cnica nominal de grupo";
 choices[0][3] = "T&eacute;cnica Delphi";
 answers[0] = choices[0][1];
 units[0] = "23";
 comments[0] = "Id Pregunta: 334. ";


//  Id pregunta: 619 AÃ±o de creación de pregunta: 2006-01-01
 questions[1]= "2)  En la auditor&iacute;a de sistemas EFT son las iniciales de:";
 choices[1]= new Array();
 choices[1][0] = " Electronic Fundation Transfer";
 choices[1][1] = "Electronic Fundation Testing";
 choices[1][2] = "Electronic Funds Transfer";
 choices[1][3] = "Electronic Funds Testing";
 answers[1] = choices[1][2];
 units[1] = "33";
 comments[1] = "Id Pregunta: 619. ";


//  Id pregunta: 629 AÃ±o de creación de pregunta: 2006-01-01
 questions[2]= "3)  Qu&eacute; derecho de explotaci&oacute;n no reconoce expl&iacute;citamente la ley espa&ntilde;ola de propiedad intelectual:";
 choices[2]= new Array();
 choices[2][0] = "Derecho de integridad";
 choices[2][1] = "Derecho de distribuci&oacute;n.";
 choices[2][2] = "Derecho de reproducci&oacute;n.";
 choices[2][3] = "Derecho de comunicaci&oacute;n p&uacute;blica.";
 answers[2] = choices[2][0];
 units[2] = "36";
 comments[2] = "Id Pregunta: 629. ";


//  Id pregunta: 652 AÃ±o de creación de pregunta: 2006-01-01
 questions[3]= "4)  Se&ntilde;ale la respuesta falsa respecto a los CTS (Conformance Testing Services):";
 choices[3]= new Array();
 choices[3][0] = "Los centros de prueba CTS pueden comercializar herramientas de ensayo para que las empresas puedan realizar sus propias pruebas";
 choices[3][1] = "En Espa&ntilde;a, coordinados por AENOR, existen varios centros de prueba CTS";
 choices[3][2] = "Cada servicio de pruebas debe ofrecerse en m&aacute;s de dos Estados miembros, que deber&aacute;n velar por el reconocimiento mutuo de los resultados de las pruebas";
 choices[3][3] = "El programa CTS se basa en los principios de independencia, reconocimiento mutuo y armonizaci&oacute;n";
 answers[3] = choices[3][2];
 units[3] = "42";
 comments[3] = "Id Pregunta: 652. ";


//  Id pregunta: 685 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Qu&eacute; es PROFIT?";
 choices[4]= new Array();
 choices[4][0] = "Un estamento independiente que se encarga de velar por el desarrollo de las tecnolog&iacute;as de la informaci&oacute;n en los pa&iacute;ses en v&iacute;as de desarrollo.";
 choices[4][1] = "El Programa de Fomento para la Investigaci&oacute;n T&eacute;cnica, promovido para conceder ayudas a los proyectos de I+D.";
 choices[4][2] = "El programa asociado al programa IDA y encargado del intercambio de las estad&iacute;sticas de tr&aacute;fico en los distintos pa&iacute;ses de la Comunidad Europea.";
 choices[4][3] = "Nada de lo anterior es cierto.";
 answers[4] = choices[4][1];
 units[4] = "103";
 comments[4] = "Id Pregunta: 685. ";


//  Id pregunta: 1298 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Para especificar localizadores en XML se usa:";
 choices[5]= new Array();
 choices[5][0] = "s&oacute;lo el est&aacute;ndar Xlink";
 choices[5][1] = "s&oacute;lo el est&aacute;ndar Xpointer";
 choices[5][2] = "los est&aacute;ndares Xlink y Xpointer";
 choices[5][3] = "ninguno de los anteriores";
 answers[5] = choices[5][2];
 units[5] = "69";
 comments[5] = "Id Pregunta: 1298. NULL";


//  Id pregunta: 1524 AÃ±o de creación de pregunta: 2003-01-01
 questions[6]= "7)  Cu&aacute;l de las siguientes afirmaciones respecto a LINUX es falsa";
 choices[6]= new Array();
 choices[6][0] = "est&aacute; constituido por un n&uacute;cleo kernel; cada usuario debe construirse las librer&iacute;as y programa para poderlo utilizar";
 choices[6][1] = "es un sistema operativo compatible con UNIX";
 choices[6][2] = "es un software libre";
 choices[6][3] = "el sistema viene acompa&ntilde;ado del c&oacute;digo fuente";
 answers[6] = choices[6][0];
 units[6] = "61,62";
 comments[6] = "Id Pregunta: 1524. EXAMEN CASTILLA LA MANCHA";


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


//  Id pregunta: 1862 AÃ±o de creación de pregunta: 2009-01-01
 questions[8]= "9)  Relativo a la firma digital, indique la opci&oacute;n incorrecta:";
 choices[8]= new Array();
 choices[8][0] = "XMLDSig es una sintaxis XML para la generaci&oacute;n de firma digital";
 choices[8][1] = "XMLDSig s&oacute;lo se utiliza para firmar documentos XML";
 choices[8][2] = "XML Advanced Electronic Signatures (XAdES) cumple la directiva europea sobre firma electr&oacute;nica 1999/93/CE";
 choices[8][3] = "Las respuestas 'a' y 'c' son verdaderas";
 answers[8] = choices[8][1];
 units[8] = "74";
 comments[8] = "Id Pregunta: 1862. NULL";


//  Id pregunta: 1913 AÃ±o de creación de pregunta: 2006-01-01
 questions[9]= "10)  Dentro del an&aacute;lisis orientado a objetos, la cualidad que se refiere al tiempo durante el cual un objeto permanece accesible en la memoria del ordenador (principal o secundaria), se denomina:";
 choices[9]= new Array();
 choices[9][0] = "Reusabilidad";
 choices[9][1] = "Encapsulaci&oacute;n";
 choices[9][2] = "Abstracci&oacute;n";
 choices[9][3] = "Persistencia";
 answers[9] = choices[9][3];
 units[9] = "82";
 comments[9] = "Id Pregunta: 1913. ";


//  Id pregunta: 2362 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Entre las ventajas que presenta el modelo en espiral o iterativo del ciclo de vida respecto a otros modelos, est&aacute;:";
 choices[10]= new Array();
 choices[10][0] = "Su rango de opciones acomoda las buenas caracter&iacute;sticas de los dem&aacute;s modelos de desarrollo de software";
 choices[10][1] = "Permite preparar la evoluci&oacute;n del ciclo de vida, crecimiento y cambios del producto software";
 choices[10][2] = "Es especialmente indicado para la temprana eliminaci&oacute;n de errores y alternativas poco atractivas";
 choices[10][3] = "Todas las anteriores son ventajas del modelo de ciclo de vida en espiral";
 answers[10] = choices[10][3];
 units[10] = "76";
 comments[10] = "Id Pregunta: 2362. ";


//  Id pregunta: 2438 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Las &quot;Collaboration Responsabilities Cards&quot; se usan en:";
 choices[11]= new Array();
 choices[11][0] = "La localizaci&oacute;n de objetos.";
 choices[11][1] = "La direcci&oacute;n de reuniones.";
 choices[11][2] = "La negociaci&oacute;n.";
 choices[11][3] = "Los diagramas generales de un sistema.";
 answers[11] = choices[11][0];
 units[11] = "82,84";
 comments[11] = "Id Pregunta: 2438. ";


//  Id pregunta: 2479 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Por sistema de garant&iacute;a de calidad se entiende:";
 choices[12]= new Array();
 choices[12][0] = "Actividad que tiene por objeto la evaluaci&oacute;n de conformidad de dise&ntilde;os, productos software, procesos o sistema";
 choices[12][1] = "Proceso por el que el sistema de calidad de una empresa es auditado para comprobar el cumplimiento de determinadas normas";
 choices[12][2] = "Estructura organizativa, procedimientos, actividades, capacidades y recursos que juntos aseguran que los productos software satisfacen las necesidades impl&iacute;citas o establecidas en contrato por los clientes";
 choices[12][3] = "Proceso de determinaci&oacute;n de correcci&oacute;n de los  productos de una fase de desarrollo con respecto a los requisitos establecidos en la fase anterior";
 answers[12] = choices[12][2];
 units[12] = "87";
 comments[12] = "Id Pregunta: 2479. NULL";


//  Id pregunta: 2651 AÃ±o de creación de pregunta: 2003-01-01
 questions[13]= "14)  Indique cu&aacute;l no es un resultado del modelo EFQM";
 choices[13]= new Array();
 choices[13][0] = "Satisfacci&oacute;n del cliente";
 choices[13][1] = "Impacto en la sociedad";
 choices[13][2] = "Obtenci&oacute;n de la estrategia";
 choices[13][3] = "Satisfacci&oacute;n del personal";
 answers[13] = choices[13][2];
 units[13] = "92";
 comments[13] = "Id Pregunta: 2651. NULL";


//  Id pregunta: 2828 AÃ±o de creación de pregunta: 2006-01-01
 questions[14]= "15)  &iquest;Cu&aacute;l de los siguientes no es un criterio para abordar un proceso de ajuste dimensional?";
 choices[14]= new Array();
 choices[14][0] = "Interconectividad.";
 choices[14][1] = "Seguridad.";
 choices[14][2] = "Grado de conocimiento de los usuarios finales.";
 choices[14][3] = "Reducci&oacute;n del presupuesto.";
 answers[14] = choices[14][3];
 units[14] = "90";
 comments[14] = "Id Pregunta: 2828. ";


//  Id pregunta: 3834 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  SIP es:";
 choices[15]= new Array();
 choices[15][0] = "una versi&oacute;n segura del protocolo IP";
 choices[15][1] = "un conjunto de protocolos para gesti&oacute;n de sesiones";
 choices[15][2] = "protocolo para instalaciones de software";
 choices[15][3] = "nada de lo anterior";
 answers[15] = choices[15][1];
 units[15] = "104";
 comments[15] = "Id Pregunta: 3834. ";


//  Id pregunta: 3906 AÃ±o de creación de pregunta: 2003-01-01
 questions[16]= "17)  SSL son las iniciales de Secure Socket Layer, S-HTTP son las siglas de Secure HyperText Transfer Protocol, protocolos para la comunicaci&oacute;n segura entre dos ordenadores, normalmente entre un cliente y un servidor y su objetivo es similar, pero:";
 choices[16]= new Array();
 choices[16][0] = "SSL es m&aacute;s amplio que S-HTTP ya que puede ser utilizado como un intermediario entre el TCP/ IP y cualquier otro protocolo (por ejemplo, el HTTP) para a&ntilde;adir seguridad a cualquier tipo de comunicaci&oacute;n entre un cliente y un servidor.";
 choices[16][1] = "SSL es menos amplio que S-HTTP ya que es una parte de este que puede ser utilizada para a&ntilde;adir seguridad a cualquier tipo de comunicaci&oacute;n http entre un cliente y un servidor.";
 choices[16][2] = "S-HTTP sustituye al protocolo HTTP, aunque el cliente no est&eacute; preparado para utilizar ese nivel de seguridad, lo que no se puede conseguir con SSL, que necesita cliente y servidor preparados para utilizar ese nivel de seguridad.";
 choices[16][3] = "SSL sustituye al protocolo HTTP, aunque el cliente no est&eacute; preparado para utilizar ese nivel de seguridad, lo que no se puede conseguir con S-HTTP, que necesita cliente y servidor preparados para utilizar ese nivel de seguridad.";
 answers[16] = choices[16][0];
 units[16] = "111";
 comments[16] = "Id Pregunta: 3906. Junta Andaluc&iacute;a";


//  Id pregunta: 3981 AÃ±o de creación de pregunta: 2006-01-01
 questions[17]= "18)  Se&ntilde;ale la respuesta correcta:";
 choices[17]= new Array();
 choices[17][0] = "Cuando se usa selecci&oacute;n, existe una estaci&oacute;n de control y una o varias estaciones tributarios.";
 choices[17][1] = "En la contienda todas las estaciones pueden acceder en cualquier momento al circuito.";
 choices[17][2] = "Se denomina ventana al n&uacute;mero m&aacute;ximo de tramas que en un determinado momento pueden estar pendientes de confirmaci&oacute;n.";
 choices[17][3] = "Todas son verdaderas.";
 answers[17] = choices[17][3];
 units[17] = "101";
 comments[17] = "Id Pregunta: 3981. ";


//  Id pregunta: 4304 AÃ±o de creación de pregunta: 2007-01-01
 questions[18]= "19)  En una base de datos relacional, para definir la estructura org&aacute;nica de un organismo p&uacute;blico, la mejor soluci&oacute;n ser&aacute;:";
 choices[18]= new Array();
 choices[18][0] = "Definir una tabla de departamentos con una relaci&oacute;n reflexiva &lsquo;pertenece a&rsquo;.";
 choices[18][1] = "Definir dos tablas de departamentos con una relaci&oacute;n &lsquo;pertenece a&rsquo; entre ellas.";
 choices[18][2] = "Definir una tabla de departamentos con una clave tipo &lsquo;TREE&rsquo; que recoja la estructura org&aacute;nica.";
 choices[18][3] = "Preguntar al usuario cu&aacute;ntos niveles de departamentos tiene el organismo, y definir en una tabla de departamentos tantos atributos como niveles posibles pueda haber.";
 answers[18] = choices[18][0];
 units[18] = "58";
 comments[18] = "Id Pregunta: 4304. ";


//  Id pregunta: 4310 AÃ±o de creación de pregunta: 2007-01-01
 questions[19]= "20)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre la arquitectura .Net no es correcta?:";
 choices[19]= new Array();
 choices[19][0] = "Las aplicaciones .Net s&oacute;lo pueden ejecutarse en los sistemas operativos Windows.";
 choices[19][1] = ".NET soporta la creaci&oacute;n de Servicios Web XML independientes de la plataforma, a trav&eacute;s de SOAP.";
 choices[19][2] = "El proceso de compilaci&oacute;n en .Net produce un fichero ejecutable al que se denomina portable executable (PE).";
 choices[19][3] = "Al c&oacute;digo escrito para ejecutarse en la plataforma .NET se le llama c&oacute;digo gestionado.";
 answers[19] = choices[19][0];
 units[19] = "59";
 comments[19] = "Id Pregunta: 4310. JCED - Preparatic XVII";


//  Id pregunta: 4697 AÃ±o de creación de pregunta: 2007-01-01
 questions[20]= "21)  Los sistemas colaborativos buscan";
 choices[20]= new Array();
 choices[20][0] = "Que todo el mundo participe en la toma de decisiones";
 choices[20][1] = "La puesta a disposici&oacute;n de un gran volumen de informaci&oacute;n.";
 choices[20][2] = " Integrar el trabajo de muchos usuarios concurrentes en un solo proyecto.";
 choices[20][3] = "El despliegue de un sistema de informaci&oacute;n que abarque a todo el personal de la organizaci&oacute;n.";
 answers[20] = choices[20][2];
 units[20] = "21";
 comments[20] = "Id Pregunta: 4697. Examen 2006 JCYL";


//  Id pregunta: 4756 AÃ±o de creación de pregunta: 2007-01-01
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes no es una directriz de Accesibilidad para el Contenido Web (WCAG 1.0) del W3C?";
 choices[21]= new Array();
 choices[21][0] = "Asegure el control del usuario de los cambios de contenido que dependen del tiempo";
 choices[21][1] = "Utilice soluciones provisionales";
 choices[21][2] = "Aseg&uacute;rese de que los documentos son claros y simples";
 choices[21][3] = "Todas lo son";
 answers[21] = choices[21][3];
 units[21] = "39";
 comments[21] = "Id Pregunta: 4756. ";


//  Id pregunta: 5690 AÃ±o de creación de pregunta: 2003-01-01
 questions[22]= "23)  &iquest;Qui&eacute;n expide los certificados del DNI electr&oacute;nico?";
 choices[22]= new Array();
 choices[22][0] = "El Ministerio de Administraciones P&uacute;blicas";
 choices[22][1] = "La plataforma @firma";
 choices[22][2] = "La Entidad P&uacute;blica Red.es";
 choices[22][3] = "La Direcci&oacute;n General de la Polic&iacute;a";
 answers[22] = choices[22][3];
 units[22] = "74";
 comments[22] = "Id Pregunta: 5690. NULL";


//  Id pregunta: 5833 AÃ±o de creación de pregunta: 2009-01-01
 questions[23]= "24)  &iquest;Cu&aacute;l de los dispositivos de red -citados seguidamente- brinda internetworking y control de broadcast?";
 choices[23]= new Array();
 choices[23][0] = "Hub";
 choices[23][1] = "Puente";
 choices[23][2] = "NIC (Network Interface Card)";
 choices[23][3] = "Router";
 answers[23] = choices[23][3];
 units[23] = "102";
 comments[23] = "Id Pregunta: 5833. MAP 2008 A1";


//  Id pregunta: 5876 AÃ±o de creación de pregunta: 2009-01-01
 questions[24]= "25)  &iquest;Qu&eacute; es Atom?";
 choices[24]= new Array();
 choices[24][0] = "Sistema de an&aacute;lisis XML";
 choices[24][1] = "Tecnolog&iacute;a de sindicaci&oacute;n de contenidos";
 choices[24][2] = "Lenguaje que permite el intercambio de informaci&oacute;n financiera de las empresas";
 choices[24][3] = "Sintaxis de una DTD";
 answers[24] = choices[24][1];
 units[24] = "69";
 comments[24] = "Id Pregunta: 5876. MAP 2008 A1";


//  Id pregunta: 5900 AÃ±o de creación de pregunta: 2009-01-01
 questions[25]= "26)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa sobre JPA?";
 choices[25]= new Array();
 choices[25][0] = "El mapeo de los objetos al modelo relacional se puede definir mediante anotaciones en las entidades (clases)";
 choices[25][1] = "El mapeo de los objetos al modelo relacional se puede definir mediante ficheros XML";
 choices[25][2] = "Una misma unidad de persistencia permite acceder a diferentes fuentes de datos";
 choices[25][3] = "Una entidad puede estar mapeada a m&aacute;s de una tabla relacional";
 answers[25] = choices[25][2];
 units[25] = "60";
 comments[25] = "Id Pregunta: 5900. NULL";


//  Id pregunta: 6401 AÃ±o de creación de pregunta: 2010-01-01
 questions[26]= "27)  La red multicanal de acceso a informaci&oacute;n o tramitaci&oacute;n de los servicios p&uacute;blicos de cualquier administraci&oacute;n, es conocida como:";
 choices[26]= new Array();
 choices[26][0] = "Red 112";
 choices[26][1] = "Red 060";
 choices[26][2] = "Red Conecta";
 choices[26][3] = "Red SARA";
 answers[26] = choices[26][1];
 units[26] = "30";
 comments[26] = "Id Pregunta: 6401. NULL";


//  Id pregunta: 8185 AÃ±o de creación de pregunta: 2011-01-01
 questions[27]= "28)  La tabla ESTUDIANTES(DNI#, Nombre, Apellido 1, Apellido 2, DNITutor, NombreTutor):";
 choices[27]= new Array();
 choices[27][0] = "No est&aacute; en primera forma normal.";
 choices[27][1] = "Est&aacute; en primera forma normal pero no en segunda forma normal.";
 choices[27][2] = "Est&aacute; en segunda forma normal pero no en tercera forma normal.";
 choices[27][3] = "Est&aacute; en tercera forma normal pero no en forma normal de Boyce Codd.";
 answers[27] = choices[27][2];
 units[27] = "58";
 comments[27] = "Id Pregunta: 8185. Examen TIC A1 2010";


//  Id pregunta: 8317 AÃ±o de creación de pregunta: 2011-01-01
 questions[28]= "29)  El protocolo de acceso de datos para redes de telefon&iacute;a m&oacute;vil calificado como generaci&oacute;n 3.75 (3.75 G) es: ";
 choices[28]= new Array();
 choices[28][0] = "GPRS. ";
 choices[28][1] = "HSDPA. ";
 choices[28][2] = "HSUPA. ";
 choices[28][3] = "UMTS. ";
 answers[28] = choices[28][2];
 units[28] = "108";
 comments[28] = "Id Pregunta: 8317. Examen TIC A2 2010";


//  Id pregunta: 8480 AÃ±o de creación de pregunta: 2011-01-01
 questions[29]= "30)  &iquest;Qu&eacute; es una DMZ o zona desmilitarizada?";
 choices[29]= new Array();
 choices[29][0] = "Es una subred perimetral aislada por cortafuegos aunque visible desde Internet.";
 choices[29][1] = "a) Es una subred libre de ataques externos, donde residen -entre otros- servidores con bases de datos criticas.";
 choices[29][2] = "Es una subred desde la que se permiten conexiones a la red interna, por estar la primera desmilitarizada.";
 choices[29][3] = "Es un tipo de honeypot.";
 answers[29] = choices[29][0];
 units[29] = "113";
 comments[29] = "Id Pregunta: 8480. Examen TIC A2 2010 interna";


//  Id pregunta: 8483 AÃ±o de creación de pregunta: 2011-01-01
 questions[30]= "31)  De las siguientes afirmaciones sobre el protocolo ICMP, &iquest;cu&aacute;l es cierta?";
 choices[30]= new Array();
 choices[30][0] = "Est&aacute; definido en las RFC 792 y 2463.";
 choices[30][1] = "Se considera un protocolo de nivel de transporte, al ir sobre datagramas IP.";
 choices[30][2] = "Permite conocer la direcci&oacute;n MAC asociada a una direcci&oacute;n IP.";
 choices[30][3] = "La cabecera tiene una longitud de 4 bytes en ICMPv4 y de 8 en ICMPv6.";
 answers[30] = choices[30][0];
 units[30] = "100";
 comments[30] = "Id Pregunta: 8483. Examen TIC A2 2010 interna";


//  Id pregunta: 8655 AÃ±o de creación de pregunta: 2011-01-01
 questions[31]= "32)  &iquest;En qu&eacute; recomendaci&oacute;n del ITU-T se especifican las caracter&iacute;sticas de las fibras &oacute;pticas monomodo &quot;non-zero dispersion-shifted&quot; (NZDSF) habitualmente utilizadas en DWDM?:";
 choices[31]= new Array();
 choices[31][0] = "G.653";
 choices[31][1] = "G.654";
 choices[31][2] = "G.655";
 choices[31][3] = "G.656";
 answers[31] = choices[31][2];
 units[31] = "99";
 comments[31] = "Id Pregunta: 8655. Examen UPM A2 2011";


//  Id pregunta: 8814 AÃ±o de creación de pregunta: 2011-01-01
 questions[32]= "33)  &iquest;Cu&aacute;l de estos procesos de M&eacute;trica 3 contiene actividades diferentes dependiendo de si se trata de un desarrollo estructurado u orientado a objetos?";
 choices[32]= new Array();
 choices[32][0] = "Construcci&oacute;n del Sistema de Informaci&oacute;n (CSI)";
 choices[32][1] = "An&aacute;lisis del Sistema de Informaci&oacute;n (ASI)";
 choices[32][2] = "Estudio de Viabilidad del Sistema (EVS)";
 choices[32][3] = "Ninguno de los anteriores";
 answers[32] = choices[32][1];
 units[32] = "86";
 comments[32] = "Id Pregunta: 8814. Examen UPM A2 2011";


//  Id pregunta: 8820 AÃ±o de creación de pregunta: 2011-01-01
 questions[33]= "34)  El objetivo del Plan de Sistemas de Informaci&oacute;n es:";
 choices[33]= new Array();
 choices[33][0] = "Proporcionar un marco estrat&eacute;gico que sirva de referencia para los Sistemas de Informaci&oacute;n de un &aacute;mbito concreto de una organizaci&oacute;n.";
 choices[33][1] = "El an&aacute;lisis de un conjunto concreto de necesidades para proponer una soluci&oacute;n a corto plazo, que tenga en cuenta restricciones econ&oacute;micas, t&eacute;cnicas, legales y operativas.";
 choices[33][2] = "a y b son correctas.";
 choices[33][3] = "Ninguna de las anteriores.";
 answers[33] = choices[33][0];
 units[33] = "27, 86";
 comments[33] = "Id Pregunta: 8820. Examen UPM A2 2011";


//  Id pregunta: 8979 AÃ±o de creación de pregunta: 2011-01-01
 questions[34]= "35)  &iquest;Cu&aacute;l de las siguientes no es una tecnolog&iacute;a de virtualizaci&oacute;n?";
 choices[34]= new Array();
 choices[34][0] = "XEN";
 choices[34][1] = "KVM";
 choices[34][2] = "UML";
 choices[34][3] = "Todas lo son";
 answers[34] = choices[34][3];
 units[34] = "119";
 comments[34] = "Id Pregunta: 8979. ";


//  Id pregunta: 8992 AÃ±o de creación de pregunta: 2011-01-01
 questions[35]= "36)  La ley de econom&iacute;a sostenible ha modificado las cuant&iacute;as de las sanciones fijadas en la LOPD &iquest;C&oacute;mo?";
 choices[35]= new Array();
 choices[35][0] = "Ha aumentado todas";
 choices[35][1] = "Ha disminuido todas";
 choices[35][2] = "Ha disminuido la m&iacute;nima y aumentado la m&aacute;xima";
 choices[35][3] = "Ha aumentado la m&iacute;nima y disminuido la m&aacute;xima";
 answers[35] = choices[35][3];
 units[35] = "29";
 comments[35] = "Id Pregunta: 8992. ";


//  Id pregunta: 9084 AÃ±o de creación de pregunta: 2013-01-01
 questions[36]= "37)  En relaci&oacute;n a la elaboraci&oacute;n de un Plan de Sistemas de Informaci&oacute;n:";
 choices[36]= new Array();
 choices[36][0] = "El Comit&eacute; de Direcci&oacute;n realiza la programaci&oacute;n, define la administraci&oacute;n, los procedimientos y la organizaci&oacute;n del trabajo.";
 choices[36][1] = "El equipo de proyecto es la instancia que establece las orientaciones del desarrollo con los controles de su realizaci&oacute;n, la validaci&oacute;n de los trabajos efectuados, y la toma de decisiones al final de cada fase del estudio.";
 choices[36][2] = "Es tarea del Comit&eacute; de Direcci&oacute;n asegurarse de la traslaci&oacute;n de la pol&iacute;tica estrat&eacute;gica de la organizaci&oacute;n al plan estrat&eacute;gico de Sistemas de Informaci&oacute;n y las Comunicaciones";
 choices[36][3] = "Todas las anteriores";
 answers[36] = choices[36][2];
 units[36] = "77";
 comments[36] = "Id Pregunta: 9084. ";


//  Id pregunta: 9730 AÃ±o de creación de pregunta: 2014-01-01
 questions[37]= "38)  &iquest;Cu&aacute;l de estas aseveraciones es INCORRECTA? En programaci&oacute;n, la ofuscaci&oacute;n del c&oacute;digo fuente";
 choices[37]= new Array();
 choices[37][0] = "dificulta la legilibilidad del c&oacute;digo fuente, pudiendo usar cifrado.";
 choices[37][1] = "impide la ingenier&iacute;a inversa.";
 choices[37][2] = "es un ejemplo de seguridad a trav&eacute;s de la oscuridad.";
 choices[37][3] = "es aplicable a lenguajes compilados directamente a c&oacute;digo m&aacute;quina como C o C++.";
 answers[37] = choices[37][1];
 units[37] = "91";
 comments[37] = "Id Pregunta: 9730. Examen TIC-A1 2013";


//  Id pregunta: 9769 AÃ±o de creación de pregunta: 2014-01-01
 questions[38]= "39)  Seg&uacute;n la Ley 37/2007 de Reutilizaci&oacute;n de Informaci&oacute;n del Sector P&uacute;blico, son infracciones muy graves:";
 choices[38]= new Array();
 choices[38][0] = "La reutilizaci&oacute;n de documentaci&oacute;n sin haber obtenido la correspondiente licencia en los casos en que &eacute;sta sea requerida.";
 choices[38][1] = "La reutilizaci&oacute;n de la informaci&oacute;n para una finalidad distinta a la que se concedi&oacute;.";
 choices[38][2] = "La desnaturalizaci&oacute;n del sentido de la informaci&oacute;n para cuya reutilizaci&oacute;n se haya concedido una licencia.";
 choices[38][3] = "La ausencia de cita de la fuente.";
 answers[38] = choices[38][2];
 units[38] = "22";
 comments[38] = "Id Pregunta: 9769. ";


//  Id pregunta: 9782 AÃ±o de creación de pregunta: 2014-01-01
 questions[39]= "40)  Se&ntilde;ale cu&aacute;l de las siguientes opciones est&aacute; basada en el protocolo ICMP:";
 choices[39]= new Array();
 choices[39][0] = "SMTP";
 choices[39][1] = "SNMP";
 choices[39][2] = "PING";
 choices[39][3] = "DNS ";
 answers[39] = choices[39][2];
 units[39] = "100";
 comments[39] = "Id Pregunta: 9782. Examen TIC A2 2013";


//  Id pregunta: 9908 AÃ±o de creación de pregunta: 2014-01-01
 questions[40]= "41)  En M&eacute;trica v3 existe una interfaz de &quot;Aseguramiento de la Calidad&quot;. Indique la afirmaci&oacute;n correcta sobre dicho interfaz:";
 choices[40]= new Array();
 choices[40][0] = "Para cada uno de los procesos que se definen en el interfaz se establecen un conjunto de tareas que se desarrollan mediante la ejecuci&oacute;n de diversas actividades.";
 choices[40][1] = "El Grupo de Aseguramiento de la Calidad no participa en todos los procesos que se describen en el interfaz.";
 choices[40][2] = "La &quot;Constituci&oacute;n del equipo de aseguramiento de la calidad&quot; se realiza dentro del proceso de Estudio de Viabilidad del Sistema del interfaz.";
 choices[40][3] = "La aplicaci&oacute;n de dicho interfaz es de obligado cumplimiento para los organismos dependientes de la AGE, seg&uacute;n la Ley 28/2006, de 18 de julio, por la que se crea la Agencia Estatal de Evaluaci&oacute;n de las Pol&iacute;ticas P&uacute;blicas y la Calidad de losServicios.";
 answers[40] = choices[40][2];
 units[40] = "86";
 comments[40] = "Id Pregunta: 9908. TIC A2, Examen 2013";


//  Id pregunta: 9966 AÃ±o de creación de pregunta: 2014-01-01
 questions[41]= "42)  El subconjunto de datos de un Almac&eacute;n de Datos se denomina:";
 choices[41]= new Array();
 choices[41][0] = "Data Warehouse.";
 choices[41][1] = "OLAP";
 choices[41][2] = "Data Mart.";
 choices[41][3] = "Data Mining.";
 answers[41] = choices[41][2];
 units[41] = "68,71";
 comments[41] = "Id Pregunta: 9966. Examen Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n, Servicio sanitario Extremadura, 2014";


//  Id pregunta: 9979 AÃ±o de creación de pregunta: 2014-01-01
 questions[42]= "43)  Un sistema que puede emplearse para registrar la relaci&oacute;n del ciudadano con la administraci&oacute;n, anotando todas las relaciones establecidas por &eacute;l, para configurar su personalidad administrativa digital es ";
 choices[42]= new Array();
 choices[42][0] = "Gesti&oacute;n de la Relaci&oacute;n con el Cliente (CRM) ";
 choices[42][1] = "Arquitectura Orientada a Servicios (SOA) ";
 choices[42][2] = "Planificaci&oacute;n de Recursos Empresariales (ERP) ";
 choices[42][3] = "Gesti&oacute;n de Procesos de Negocio (BPM) ";
 answers[42] = choices[42][0];
 units[42] = "65";
 comments[42] = "Id Pregunta: 9979. Examen TICA2, Xunta de GaliciA, 2011";


//  Id pregunta: 9989 AÃ±o de creación de pregunta: 2014-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l de los siguientes no es un sistema de gesti&oacute;n de conocimiento con licencia de software libre?";
 choices[43]= new Array();
 choices[43][0] = "ATutor";
 choices[43][1] = "Claroline";
 choices[43][2] = "Joomla";
 choices[43][3] = "Moodle";
 answers[43] = choices[43][2];
 units[43] = "66";
 comments[43] = "Id Pregunta: 9989. ";


//  Id pregunta: 9995 AÃ±o de creación de pregunta: 2014-01-01
 questions[44]= "45)  En relaci&oacute;n a im&aacute;genes est&aacute;ticas en portales web,";
 choices[44]= new Array();
 choices[44][0] = "El formato PNG, si bien est&aacute; libre de patentes, tiene mayor p&eacute;rdida de informaci&oacute;n que el formato JPEG.";
 choices[44][1] = "El formato GIF utiliza el algoritmo LZW de compresi&oacute;n patentado por CompuServe.";
 choices[44][2] = "JPEG tiene m&aacute;s p&eacute;rdida de informaci&oacute;n que GIF y PNG.";
 choices[44][3] = "El soporte de animaciones no es posible en PNG, utiliz&aacute;ndose NMG en su lugar.";
 answers[44] = choices[44][2];
 units[44] = "93";
 comments[44] = "Id Pregunta: 9995. NULL";


//  Id pregunta: 10115 AÃ±o de creación de pregunta: 2014-01-01
 questions[45]= "46)  Cu&aacute;l de los siguientes contenedores SDH no es posible:";
 choices[45]= new Array();
 choices[45][0] = "STM-1";
 choices[45][1] = "STM-16";
 choices[45][2] = "STM-128";
 choices[45][3] = "STM-256";
 answers[45] = choices[45][2];
 units[45] = "101";
 comments[45] = "Id Pregunta: 10115. ";


//  Id pregunta: 10193 AÃ±o de creación de pregunta: 2014-01-01
 questions[46]= "47)  En relaci&oacute;n a las t&eacute;cnicas para el reconocimiento &oacute;ptico de caracteres, indique la frase incorrecta:";
 choices[46]= new Array();
 choices[46][0] = "El histograma horizontal permite dividir un p&aacute;rrafo en l&iacute;neas";
 choices[46][1] = "El proceso de kerning aplicado por un procesador de textos dificulta el segmentado de palabras";
 choices[46][2] = "Los m&eacute;todos de Zadeh usan mecanismos basados en l&oacute;gica borrosa";
 choices[46][3] = "Los m&eacute;todos de comparaci&oacute;n de plantillas usan matrices bidimensionales";
 answers[46] = choices[46][1];
 units[46] = "94";
 comments[46] = "Id Pregunta: 10193. ";


//  Id pregunta: 10212 AÃ±o de creación de pregunta: 2014-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l de los siguientes m&eacute;todos de ordenaci&oacute;n de alternativas de la Decisi&oacute;n Multicriterio Discreta est&aacute; basado en relaciones de superaci&oacute;n?";
 choices[47]= new Array();
 choices[47][0] = "M&eacute;todo PROMETHEE";
 choices[47][1] = "M&eacute;todo T.O.P.S.I.S. o de la programaci&oacute;n compromiso";
 choices[47][2] = "M&eacute;todo lexicogr&aacute;fico";
 choices[47][3] = "M&eacute;todo de la ponderaci&oacute;n lineal con &iacute;ndices econ&oacute;micos";
 answers[47] = choices[47][0];
 units[47] = "34";
 comments[47] = "Id Pregunta: 10212. ";


//  Id pregunta: 10273 AÃ±o de creación de pregunta: 2014-01-01
 questions[48]= "49)  Referente al m&eacute;todo de b&uacute;squeda con adversario aplicado a juegos, &iquest;cu&aacute;l de las siguientes afirmaciones es falsa?";
 choices[48]= new Array();
 choices[48][0] = "Los dos jugadores disponen de informaci&oacute;n completa sobre el estado del juego";
 choices[48][1] = "La estrategia del oponente es desconocida";
 choices[48][2] = "Interviene el azar";
 choices[48][3] = "Al acabar, cada jugador pierde, gana o empata";
 answers[48] = choices[48][2];
 units[48] = "63";
 comments[48] = "Id Pregunta: 10273. NULL";


//  Id pregunta: 10287 AÃ±o de creación de pregunta: 2014-01-01
 questions[49]= "50)  En la herramienta de control de versiones Subversion, &iquest;con que comando se suben los cambios al repositorio?";
 choices[49]= new Array();
 choices[49][0] = "svn commit";
 choices[49][1] = "svn checkin";
 choices[49][2] = "svn checkout";
 choices[49][3] = "svn upload";
 answers[49] = choices[49][0];
 units[49] = "78";
 comments[49] = "Id Pregunta: 10287. TIC A2, libre, examen 2013";


//  Id pregunta: 10344 AÃ±o de creación de pregunta: 2014-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l es la normativa que crea la Comisi&oacute;n de Propiedad Intelectual?";
 choices[50]= new Array();
 choices[50][0] = "Ley 2/2011, de Econom&iacute;a Sostenible";
 choices[50][1] = "Real Decreto 1889/2011, de regulaci&oacute;n del funcionamiento de la Comisi&oacute;n de Propiedad Intelectual";
 choices[50][2] = "Real Decreto Legislativo 1/1996, por el que se aprueba el texto refundido de la Ley de Propiedad Intelectual";
 choices[50][3] = "Real Decreto 1/1996, por el que se aprueba el texto refundido de la Ley de Propiedad Intelectual";
 answers[50] = choices[50][0];
 units[50] = "37";
 comments[50] = "Id Pregunta: 10344. La Ley 2/2011 crea la Comisi&oacute;n de Propiedad Intelectual, y el Real Decreto 1889/2011 regula su funcionamiento";


//  Id pregunta: 10356 AÃ±o de creación de pregunta: 2014-01-01
 questions[51]= "52)  &iquest;C&uacute;al de los siguientes no es un principio del programa ISA (soluciones de interoperabilidad para las administraciones p&uacute;blicas europeas)?";
 choices[51]= new Array();
 choices[51][0] = "Neutralidad con respecto a la tecnolog&iacute;a y adaptabilidad";
 choices[51][1] = "Reutilizaci&oacute;n";
 choices[51][2] = "Privacidad y protecci&oacute;n de los datos personales";
 choices[51][3] = "Fomento del uso de software libre y sistemas abiertos";
 answers[51] = choices[51][3];
 units[51] = "40";
 comments[51] = "Id Pregunta: 10356. El programa ISA se basa en los siguientes principios: neutralidad con respecto a la tecnolog&iacute;a y adaptabilidad, apertura, reutilizaci&oacute;n, privacidad y protecci&oacute;n de los datos personales, seguridad";


//  Id pregunta: 10447 AÃ±o de creación de pregunta: 2014-01-01
 questions[52]= "53)   Indique la opci&oacute;n verdadera.";
 choices[52]= new Array();
 choices[52][0] = "En la jerarqu&iacute;a digital plesi&oacute;crona un E1 proporciona 4 Mbps.";
 choices[52][1] = "En la jerarqu&iacute;a digital plesi&oacute;crona un E3 proporciona 32 Mbps.";
 choices[52][2] = "En la jerarqu&iacute;a digital s&iacute;ncrona un STM1 proporciona 140 Mbps.";
 choices[52][3] = "En la jerarqu&iacute;a digital s&iacute;ncrona un STM1 proporciona 155 Mbps. ";
 answers[52] = choices[52][3];
 units[52] = "103";
 comments[52] = "Id Pregunta: 10447. Examen TIC A1 2013";


//  Id pregunta: 10492 AÃ±o de creación de pregunta: 2014-01-01
 questions[53]= "54)  &iquest;Cual de los siguientes no es un tipo de ataque ?";
 choices[53]= new Array();
 choices[53][0] = "Ataque por entrop&iacute;a";
 choices[53][1] = "Ataque por fuerza bruta";
 choices[53][2] = "Ataque con Tablas Arcoiris";
 choices[53][3] = "Todos son tipos de ataques";
 answers[53] = choices[53][0];
 units[53] = "111";
 comments[53] = "Id Pregunta: 10492. No hay referencias a ataques por entropia. En la guia CCN-STIC 436, por ejemplo, se pueden encontrar referencias a taques con Tablas Arcoiris, tambien en Wikipedia";


//  Id pregunta: 10561 AÃ±o de creación de pregunta: 2014-01-01
 questions[54]= "55)  Los controles preventivos tienen como objeto:";
 choices[54]= new Array();
 choices[54][0] = "reducir el riesgo ante una debilidad existente";
 choices[54][1] = "Predecir problemas potenciales antes de que ocurran";
 choices[54][2] = "Solucionar problemas detectados por controles detectivos";
 choices[54][3] = "Reportar errores";
 answers[54] = choices[54][1];
 units[54] = "31, 32, 33";
 comments[54] = "Id Pregunta: 10561. ";


//  Id pregunta: 10664 AÃ±o de creación de pregunta: 2015-01-01
 questions[55]= "56)  La licencia del framework .NET:";
 choices[55]= new Array();
 choices[55][0] = "Propietaria";
 choices[55][1] = "Comercial";
 choices[55][2] = "Open Source";
 choices[55][3] = "Mixta";
 answers[55] = choices[55][2];
 units[55] = "115";
 comments[55] = "Id Pregunta: 10664. MIT License desde 2014";


//  Id pregunta: 10763 AÃ±o de creación de pregunta: 2015-01-01
 questions[56]= "57)  Seg&uacute;n la gu&iacute;a de comunicaci&oacute;n digital. Si un sitio ofrece p&aacute;ginas espec&iacute;ficamente a dispositivos m&oacute;viles. &iquest;A qu&eacute; resoluci&oacute;n es aconsejable optimizar la resoluci&oacute;n?";
 choices[56]= new Array();
 choices[56][0] = "200 x 250 p&iacute;xeles";
 choices[56][1] = "400 x 450 p&iacute;xeles";
 choices[56][2] = "700 x 950 p&iacute;xeles";
 choices[56][3] = "700 x 1150 p&iacute;xeles";
 answers[56] = choices[56][0];
 units[56] = "120";
 comments[56] = "Id Pregunta: 10763. ";


//  Id pregunta: 10788 AÃ±o de creación de pregunta: 2015-01-01
 questions[57]= "58)  En un sistema de memoria paginada, la tabla donde se almacena la correspondencia entre direcciones l&oacute;gicas y f&iacute;sicas, se denomina:";
 choices[57]= new Array();
 choices[57][0] = "TLB: Translation Lookaside Buffer.";
 choices[57][1] = "TTL: Translation Table Location.";
 choices[57][2] = "ATL: Address Translation Lookup.";
 choices[57][3] = "ATB: Address Table Buffer.";
 answers[57] = choices[57][0];
 units[57] = "52";
 comments[57] = "Id Pregunta: 10788. Examen GSI 2014";


//  Id pregunta: 10789 AÃ±o de creación de pregunta: 2015-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de las siguientes opciones NO corresponde a un sistema de ficheros empleado en Sistemas Operativos GNU/Linux?";
 choices[58]= new Array();
 choices[58][0] = "ext3";
 choices[58][1] = "mini fs";
 choices[58][2] = "ReiserFS";
 choices[58][3] = "Reiser4";
 answers[58] = choices[58][1];
 units[58] = "53, 54";
 comments[58] = "Id Pregunta: 10789. Examen GSI 2014";


//  Id pregunta: 10822 AÃ±o de creación de pregunta: 2015-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes reglas puede aplicarse para determinar el esfuerzo total de un proyecto en la fase de estimaci&oacute;n del mismo?";
 choices[59]= new Array();
 choices[59][0] = "Regla del 80-20.";
 choices[59][1] = "Regla del 30-40-30.";
 choices[59][2] = "Regla del 40-20-40.";
 choices[59][3] = "Regla del 20-60-20.";
 answers[59] = choices[59][2];
 units[59] = "28, 89";
 comments[59] = "Id Pregunta: 10822. Examen GSI 2014";


//  Id pregunta: 10825 AÃ±o de creación de pregunta: 2015-01-01
 questions[60]= "61)  Indicar cu&aacute;l de los siguientes diagramas se emplea para capturar los requisitos funcionales de un sistema y expresarlos desde el punto de vista del usuario seg&uacute;n M&eacute;trica v3:";
 choices[60]= new Array();
 choices[60][0] = "Diagrama de secuencia.";
 choices[60][1] = "Diagrama de colaboraci&oacute;n.";
 choices[60][2] = "Diagrama de clases.";
 choices[60][3] = "Diagrama de Casos de Uso.";
 answers[60] = choices[60][3];
 units[60] = "86, 82, 84";
 comments[60] = "Id Pregunta: 10825. Examen GSI 2014";


//  Id pregunta: 10845 AÃ±o de creación de pregunta: 2015-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de los siguientes tipos de diagramas NO est&aacute; incluido en la categor&iacute;a de diagramas estructurales que define UML 2?";
 choices[61]= new Array();
 choices[61][0] = "Diagrama de clases.";
 choices[61][1] = "Diagrama de objetos.";
 choices[61][2] = "Diagrama de despliegue.";
 choices[61][3] = "Diagrama de actividades.";
 answers[61] = choices[61][3];
 units[61] = "82, 84";
 comments[61] = "Id Pregunta: 10845. Examen GSI 2014";


//  Id pregunta: 10847 AÃ±o de creación de pregunta: 2015-01-01
 questions[62]= "63)  La especificaci&oacute;n &ldquo;Java Platform, Enterprise Edition 7 (Java EE 7)&rdquo; se encuentra definida en el JSR (Java Specification Request):";
 choices[62]= new Array();
 choices[62][0] = "JSR 342.";
 choices[62][1] = "JSR 366.";
 choices[62][2] = "JSR 324.";
 choices[62][3] = "JSR 224.";
 answers[62] = choices[62][0];
 units[62] = "60, 116";
 comments[62] = "Id Pregunta: 10847. Examen GSI 2014";


//  Id pregunta: 10848 AÃ±o de creación de pregunta: 2015-01-01
 questions[63]= "64)  Elija la respuesta correcta respecto Java EE 7:";
 choices[63]= new Array();
 choices[63][0] = "Para crear un nuevo servlet se debe invocar al procedimiento init ().";
 choices[63][1] = "Para destruir un servlet se debe invocar al m&eacute;todo destroy().";
 choices[63][2] = "La clase ServletConfig sirve para pasarle informaci&oacute;n al servlet durante su inicializaci&oacute;n.";
 choices[63][3] = "La clase ServletSession proporciona a las aplicaciones las herramientas para la gesti&oacute;n de la sesi&oacute;n.";
 answers[63] = choices[63][2];
 units[63] = "60, 116";
 comments[63] = "Id Pregunta: 10848. Examen GSI 2014";


//  Id pregunta: 10851 AÃ±o de creación de pregunta: 2015-01-01
 questions[64]= "65)  La plataforma inform&aacute;tica y de servicios en Internet hospedada en centros de datos administrados o respaldados por Microsoft se llama:";
 choices[64]= new Array();
 choices[64][0] = "Bajoo.";
 choices[64][1] = "Azure.";
 choices[64][2] = "Heroku.";
 choices[64][3] = "Adrive.";
 answers[64] = choices[64][1];
 units[64] = "59, 115";
 comments[64] = "Id Pregunta: 10851. Examen GSI 2014";


//  Id pregunta: 10857 AÃ±o de creación de pregunta: 2015-01-01
 questions[65]= "66)  Se&ntilde;ale c&oacute;mo se clasifican los niveles en las organizaciones seg&uacute;n se establece en el Modelo de Madurez de la Ingenier&iacute;a del Software ISO/IEC 15504-SPICE para la evaluaci&oacute;n y mejora de las organizaciones, en la representaci&oacute;n continua del modelo que mide la capacidad:";
 choices[65]= new Array();
 choices[65][0] = "En 6 niveles, desde el cero al cinco.";
 choices[65][1] = "En 5 niveles, desde el uno al cinco.";
 choices[65][2] = "En 6 niveles, desde el uno al seis.";
 choices[65][3] = "En 5 niveles, desde el cero al cuatro.";
 answers[65] = choices[65][0];
 units[65] = "88";
 comments[65] = "Id Pregunta: 10857. Examen GSI 2014";


//  Id pregunta: 10861 AÃ±o de creación de pregunta: 2015-01-01
 questions[66]= "67)  Indique el principio de la WCAG 2.0 asociado a la pauta &quot;maximizar la compatibilidad&quot;:";
 choices[66]= new Array();
 choices[66][0] = "Operable.";
 choices[66][1] = "Perceptible.";
 choices[66][2] = "Robustez.";
 choices[66][3] = "Comprensible.";
 answers[66] = choices[66][2];
 units[66] = "39";
 comments[66] = "Id Pregunta: 10861. Examen GSI 2014";


//  Id pregunta: 10864 AÃ±o de creación de pregunta: 2015-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes respuestas incluye un est&aacute;ndar correcto del proceso de software?";
 choices[67]= new Array();
 choices[67][0] = "IEEE 930:1998. Pr&aacute;cticas recomendadas para la Especificaci&oacute;n de Requisitos del Software (ERS).";
 choices[67][1] = "IEEE 29148:2011. Ingenier&iacute;a de Sistemas y Software - Procesos de ciclo de vida - Ingenier&iacute;a de requisitos.";
 choices[67][2] = "IEEE 1216:1987. Pr&aacute;cticas recomendadas para la Especificaci&oacute;n del Dise&ntilde;o del Software.";
 choices[67][3] = "IEEE 830: 2004. Pr&aacute;cticas recomendadas para la Especificaci&oacute;n de Requisitos del Software (ERS).";
 answers[67] = choices[67][1];
 units[67] = "76, 78, 79";
 comments[67] = "Id Pregunta: 10864. Examen GSI 2014";


//  Id pregunta: 10886 AÃ±o de creación de pregunta: 2015-01-01
 questions[68]= "69)  El puerto del protocolo FTP sobre TLS/SSL (FTPS) es:";
 choices[68]= new Array();
 choices[68][0] = "2121";
 choices[68][1] = "2020";
 choices[68][2] = "980";
 choices[68][3] = "990";
 answers[68] = choices[68][3];
 units[68] = "112";
 comments[68] = "Id Pregunta: 10886. Examen GSI 2014";


//  Id pregunta: 10900 AÃ±o de creación de pregunta: 2015-01-01
 questions[69]= "70)  Atendiendo &uacute;nicamente a criterios de eficiencia en tiempo, &iquest;cu&aacute;l de los siguientes m&eacute;todos ser&iacute;a el m&aacute;s eficiente para securizar las comunicaciones entre usuarios dentro de una red?";
 choices[69]= new Array();
 choices[69][0] = "Mediante claves sim&eacute;tricas.";
 choices[69][1] = "Mediante claves asim&eacute;tricas.";
 choices[69][2] = "Mediante claves sim&eacute;tricas compartidas peri&oacute;dicamente con claves asim&eacute;tricas.";
 choices[69][3] = "Mediante claves asim&eacute;tricas compartidas peri&oacute;dicamente con claves sim&eacute;tricas.";
 answers[69] = choices[69][0];
 units[69] = "73, 74";
 comments[69] = "Id Pregunta: 10900. Examen GSI 2014";


//  Id pregunta: 10902 AÃ±o de creación de pregunta: 2015-01-01
 questions[70]= "71)  La arquitectura de cortafuegos que combina un router con un host basti&oacute;n y donde el principal nivel de seguridad proviene del filtrado de paquetes se denomina:";
 choices[70]= new Array();
 choices[70][0] = "Screened Subnet.";
 choices[70][1] = "Dual-Homed Host.";
 choices[70][2] = "Router-Homed Host.";
 choices[70][3] = "Screened Host.";
 answers[70] = choices[70][3];
 units[70] = "111";
 comments[70] = "Id Pregunta: 10902. Examen GSI 2014";


//  Id pregunta: 10940 AÃ±o de creación de pregunta: 2015-01-01
 questions[71]= "72)  Tener la funcionalidad &quot;Thin Provisioning&quot; en una cabina de almacenamiento conectada a una red SAN nos permite:";
 choices[71]= new Array();
 choices[71][0] = "Asignar menor cantidad de GB/TB a los servidores, si no se ha alcanzado el m&aacute;ximo de ocupaci&oacute;n real de la cabina.";
 choices[71][1] = "Sobreasignar mayor cantidad de GB/TB a los servidores, si no se ha alcanzado el m&aacute;ximo de ocupaci&oacute;n real de la cabina.";
 choices[71][2] = "Asignar mediante peque&ntilde;os incrementos los nuevos discos que se incorporen en caliente.";
 choices[71][3] = "Provisionar una capa de control para la virtualizaci&oacute;n del almacenamiento en cloud.";
 answers[71] = choices[71][1];
 units[71] = "48";
 comments[71] = "Id Pregunta: 10940. TIC A1 AGE 2014";


//  Id pregunta: 10994 AÃ±o de creación de pregunta: 2015-01-01
 questions[72]= "73)  Entre los objetivos del proyecto STORK 2.0 (Secure idenTity acrOss boRders linKed) NO se encuentra:";
 choices[72]= new Array();
 choices[72][0] = "Construcci&oacute;n de pilotos o demostradores de servicios de administraci&oacute;n electr&oacute;nica.";
 choices[72][1] = "Estudio de las especificaciones t&eacute;cnicas comunes que permitan el reconocimiento europeo de las eID (identidades electr&oacute;nicas) nacionales.";
 choices[72][2] = "Desarrollo de tecnolog&iacute;as y servicios avanzados de eID que sirvan de base para la construcci&oacute;n de la identidad electr&oacute;nica europea &uacute;nica (eueID) prevista para 2020.";
 choices[72][3] = "Realizaci&oacute;n de estudios sobre la situaci&oacute;n legal y t&eacute;cnica de los sistemas de identificaci&oacute;n y firma electr&oacute;nica utilizados en los Estados Miembros.";
 answers[72] = choices[72][2];
 units[72] = "30";
 comments[72] = "Id Pregunta: 10994. TIC A1 AGE 2014";


//  Id pregunta: 11004 AÃ±o de creación de pregunta: 2015-01-01
 questions[73]= "74)  En el modelo Entidad/Relaci&oacute;n, y dada una jerarqu&iacute;a obligatoria disjunta, indicar cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[73]= new Array();
 choices[73][0] = "No es necesario que toda ocurrencia del supertipo se encuentre en al menos uno de los subtipos.";
 choices[73][1] = "Es necesario que toda ocurrencia del supertipo se encuentre en uno solo de los subtipos.";
 choices[73][2] = "Es necesario que toda ocurrencia del supertipo se encuentre en todos los subtipos.";
 choices[73][3] = "Es necesario que toda ocurrencia del supertipo se encuentre en al menos uno de los subtipos.";
 answers[73] = choices[73][1];
 units[73] = "80";
 comments[73] = "Id Pregunta: 11004. TIC A1 AGE 2014";


//  Id pregunta: 11027 AÃ±o de creación de pregunta: 2015-01-01
 questions[74]= "75)  &iquest;Cu&aacute;l es la Asociaci&oacute;n Europea de Fabricantes de Ordenadores?";
 choices[74]= new Array();
 choices[74][0] = "ETSI";
 choices[74][1] = "CECUA";
 choices[74][2] = "ECMA";
 choices[74][3] = "ECTA";
 answers[74] = choices[74][2];
 units[74] = "42";
 comments[74] = "Id Pregunta: 11027. ";


//  Id pregunta: 11048 AÃ±o de creación de pregunta: 2015-01-01
 questions[75]= "76)  &iquest;Qu&eacute; RFC contiene la especificaci&oacute;n de HTTP/2?";
 choices[75]= new Array();
 choices[75][0] = "6660";
 choices[75][1] = "6978";
 choices[75][2] = "7540";
 choices[75][3] = "8880";
 answers[75] = choices[75][2];
 units[75] = "69";
 comments[75] = "Id Pregunta: 11048. ";


//  Id pregunta: 11055 AÃ±o de creación de pregunta: 2015-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l de las siguientes NO es una Metodolog&iacute;a &Aacute;gil?";
 choices[76]= new Array();
 choices[76][0] = "XP";
 choices[76][1] = "Kanban";
 choices[76][2] = "FDD";
 choices[76][3] = "Todas son metodolog&iacute;as &aacute;giles";
 answers[76] = choices[76][3];
 units[76] = "79";
 comments[76] = "Id Pregunta: 11055. ";


//  Id pregunta: 11066 AÃ±o de creación de pregunta: 2015-01-01
 questions[77]= "78)  &iquest;Cuales de las siguientes afirmaciones, son caracter&iacute;sticas para cada proceso?";
 choices[77]= new Array();
 choices[77][0] = "Medible, puntual, entrega un resultado y responde a un evento espec&iacute;fico";
 choices[77][1] = "Medible, puntual, responde a un evento espec&iacute;fico y ofrece su principal resultado a un cliente o parte interesada";
 choices[77][2] = "Medible, entrega un resultado, responde a un evento espec&iacute;fico y ofrece su principal resultado a un cliente o parte interesada";
 choices[77][3] = "Medible, puntual, entrega un resultado, responde a un evento espec&iacute;fico y ofrece su principal resultado a un cliente o parte interesada";
 answers[77] = choices[77][2];
 units[77] = "98";
 comments[77] = "Id Pregunta: 11066. ";


//  Id pregunta: 11090 AÃ±o de creación de pregunta: 2015-01-01
 questions[78]= "79)  El procesador intel i7 utiliza una jerarqu&iacute;a de cache de 3 niveles, L1, L2 y L3. Indicar la respuesta INCORRECTA";
 choices[78]= new Array();
 choices[78][0] = "Respecto al tama&ntilde;o de la memoria, L1&gt;L2&gt;L3";
 choices[78][1] = "Los tres niveles utilizan un tama&ntilde;o de bloque de 64 bytes";
 choices[78][2] = "El nivel 3, L3, es compartido por todos los cores del chip";
 choices[78][3] = "El nivel 1, L1, presenta la latencia m&aacute;s alta ";
 answers[78] = choices[78][3];
 units[78] = "45";
 comments[78] = "Id Pregunta: 11090. ";


//  Id pregunta: 11102 AÃ±o de creación de pregunta: 2015-01-01
 questions[79]= "80)  La NTI de Digitalizaci&oacute;n de Documentos indica que el nivel de resoluci&oacute;n m&iacute;nimo ser&aacute; para blanco y negro de:";
 choices[79]= new Array();
 choices[79][0] = "200 p&iacute;xeles por pulgada";
 choices[79][1] = "125 p&iacute;xeles por pulgada";
 choices[79][2] = "256 p&iacute;xeles por pulgada";
 choices[79][3] = "80 p&iacute;xeles por pulgada";
 answers[79] = choices[79][0];
 units[79] = "30";
 comments[79] = "Id Pregunta: 11102. ";


//  Id pregunta: 11107 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  Seleccione la respuesta correcta sobre los derechos morales irrenunciables de un autor de una obra:";
 choices[80]= new Array();
 choices[80][0] = "Derecho a decidir sobre la divulgaci&oacute;n o no de la obra";
 choices[80][1] = "Respeto a la integridad de la obra";
 choices[80][2] = "Derecho a exigir el reconocimiento de su condici&oacute;n de autor";
 choices[80][3] = "Todas las anteriores";
 answers[80] = choices[80][3];
 units[80] = "36";
 comments[80] = "Id Pregunta: 11107. ";


//  Id pregunta: 11131 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  &iquest;Cu&aacute;l de los siguiente no es un organismo de estandarizaci&oacute;n de arquitecturas SOA?";
 choices[81]= new Array();
 choices[81][0] = "Business Process Management Initiative (BPMI)";
 choices[81][1] = "Object Management Group (OMG)";
 choices[81][2] = "OASIS";
 choices[81][3] = "Microsoft-IBM Workflow Management Coallition";
 answers[81] = choices[81][3];
 units[81] = "51";
 comments[81] = "Id Pregunta: 11131. ";


//  Id pregunta: 11144 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  &iquest;Cu&aacute;l de los siguientes no es un protocolo de pago?";
 choices[82]= new Array();
 choices[82][0] = "SET";
 choices[82][1] = "Paypal";
 choices[82][2] = "3-D Secure";
 choices[82][3] = "Mastercard True Payment Protocol";
 answers[82] = choices[82][3];
 units[82] = "70";
 comments[82] = "Id Pregunta: 11144. ";


//  Id pregunta: 11157 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  &iquest;Cu&aacute;l de los siguientes niveles de los Diagramas de Flujo de Datos no es correcto?";
 choices[83]= new Array();
 choices[83][0] = "Nivel 0: Diagrama de Contexto";
 choices[83][1] = "Nivel 1: Diagrama de Subsistemas";
 choices[83][2] = "Nivel 3: Diagrama de Funciones de los Sistemas";
 choices[83][3] = "Nivel 4: Diagrama de Procesos";
 answers[83] = choices[83][2];
 units[83] = "81";
 comments[83] = "Id Pregunta: 11157. ";


//  Id pregunta: 11248 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  Cada cuanto tiempo se revisa la solvencia de las empresas clasificadas:";
 choices[84]= new Array();
 choices[84][0] = "La solvencia econ&oacute;mica y financiera se revisa cada tres a&ntilde;os.";
 choices[84][1] = "La solvencia t&eacute;cnica cada a&ntilde;o.";
 choices[84][2] = "El plazo de c&oacute;mputo de la experiencia para la solvencia t&eacute;cnica es de cinco a&ntilde;os.";
 choices[84][3] = "Todas son verdaderas.";
 answers[84] = choices[84][2];
 units[84] = "41";
 comments[84] = "Id Pregunta: 11248. ";


//  Id pregunta: 11318 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  La Ley 25/2007, establece las condiciones de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones. De entre los datos que hay que almacenar, no se encuentra:";
 choices[85]= new Array();
 choices[85][0] = "Datos para determinar fecha, hora y duraci&oacute;n de un comunici&oacute;n.";
 choices[85][1] = "Tipo de comunicaci&oacute;n.";
 choices[85][2] = "Datos de llamadas no conectadas";
 choices[85][3] = "Datos de llamadas infructuosas";
 answers[85] = choices[85][2];
 units[85] = "110";
 comments[85] = "Id Pregunta: 11318. Recogido de la redacci&oacute;n de la propia Ley. &quot;Art&iacute;culo 4. Los datos relativos a las llamadas no conectadas est&aacute;n excluidos de las obligaciones de conservaci&oacute;n contenidas en esta Ley...&quot;";


//  Id pregunta: 11335 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  Respecto del modelo EFQM, se&ntilde;ale la afirmaci&oacute;n correcta";
 choices[86]= new Array();
 choices[86][0] = "Contempla entre los agentes facilitadores los siguientes: Liderazgo; Personas; Pol&iacute;ticas y Estrategias;";
 choices[86][1] = "La autoevaluaci&oacute;n del modelo no permite extraer puntos fuertes y &aacute;reas de mejora";
 choices[86][2] = "Contempla cuatro tipos de resultados:  en las Personas; Clientes; en la Sociedad y resultados Clave. Los resultados no son consecuencia de los agentes facilitadores";
 choices[86][3] = "El premio europeo a la calidad es quinquenal";
 answers[86] = choices[86][0];
 units[86] = "92";
 comments[86] = "Id Pregunta: 11335. ";


//  Id pregunta: 11391 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; proceso es primordialmente responsable de empaquetar, construir, probar y desplegar servicios?";
 choices[87]= new Array();
 choices[87][0] = "Planificaci&oacute;n y soporte a la transici&oacute;n";
 choices[87][1] = "Gesti&oacute;n de versiones y despliegues";
 choices[87][2] = "Gesti&oacute;n de configuraci&oacute;n y activos del servicio";
 choices[87][3] = "Gesti&oacute;n del cat&aacute;logo de servicios";
 answers[87] = choices[87][1];
 units[87] = "98";
 comments[87] = "Id Pregunta: 11391. ";


//  Id pregunta: 11562 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  &iquest;Qu&eacute; es XFP?";
 choices[88]= new Array();
 choices[88][0] = "Puerto de conexi&oacute;n de alta velocidad con par trenzado.";
 choices[88][1] = "Puerto de conexi&oacute;n de alta velocidad de fibra &oacute;ptica.";
 choices[88][2] = "Puerto de conexi&oacute;n de alta velocidad de cable coaxial.";
 choices[88][3] = "Puerto de conexi&oacute;n de alta velocidad con capacidad para emplear distintos medios de transmisi&oacute;n.";
 answers[88] = choices[88][1];
 units[88] = "99";
 comments[88] = "Id Pregunta: 11562. NULL";


//  Id pregunta: 11572 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l no es una modulaci&oacute;n para DSL?";
 choices[89]= new Array();
 choices[89][0] = "CAP";
 choices[89][1] = "FSK";
 choices[89][2] = "DMT";
 choices[89][3] = "WDMT";
 answers[89] = choices[89][1];
 units[89] = "107";
 comments[89] = "Id Pregunta: 11572. NULL";


//  Id pregunta: 11575 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  En el protocolo IPv6:";
 choices[90]= new Array();
 choices[90][0] = "No se pueden fragmentar paquetes.";
 choices[90][1] = "Las cabeceras AH y ESP se procesan en cada router.";
 choices[90][2] = "Incorpora mecanismos para crear circuitos virtuales.";
 choices[90][3] = "Se ofrecen servicios espec&iacute;ficos para TCPv6";
 answers[90] = choices[90][2];
 units[90] = "100";
 comments[90] = "Id Pregunta: 11575. NULL";


//  Id pregunta: 11583 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Se&ntilde;ale la opci&oacute;n incorrecta. Es posible la cesi&oacute;n de los datos de car&aacute;cter personal sin contar con el consentimiento del interesado cuando:";
 choices[91]= new Array();
 choices[91][0] = "La comunicaci&oacute;n que debe efectuarse tiene por destinatario el Tribunal de Cuentas y se realiza en el &aacute;mbito de las funciones que la ley le atribuya expresamente.";
 choices[91][1] = "Lo autoriza una norma de derecho comunitario.";
 choices[91][2] = "Es una cesi&oacute;n entre Administraciones p&uacute;blicas y tiene por objeto el tratamiento de los datos con fines cient&iacute;ficos.";
 choices[91][3] = "Todas las anteriores son correctas";
 answers[91] = choices[91][3];
 units[91] = "29";
 comments[91] = "Id Pregunta: 11583. ";


//  Id pregunta: 11613 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  En SQL, para borrar los datos de una tabla pero seguir conserv&aacute;ndola se emplea:";
 choices[92]= new Array();
 choices[92][0] = "DROP TABLE";
 choices[92][1] = "TRUNCATE TABLE";
 choices[92][2] = "DELETE TABLE";
 choices[92][3] = "MODIFY TABLE";
 answers[92] = choices[92][1];
 units[92] = "58";
 comments[92] = "Id Pregunta: 11613. ";


//  Id pregunta: 11616 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  La libertad de distribuci&oacute;n, seg&uacute;n la definici&oacute;n de SW libre de Richard Stallman se identifica como la libertad n&uacute;mero:";
 choices[93]= new Array();
 choices[93][0] = "0";
 choices[93][1] = "1";
 choices[93][2] = "2";
 choices[93][3] = "3";
 answers[93] = choices[93][2];
 units[93] = "61";
 comments[93] = "Id Pregunta: 11616. ";


//  Id pregunta: 11639 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  En el modelo CMMI por etapas, el nivel 4 se corresponde con:";
 choices[94]= new Array();
 choices[94][0] = "Gestionado";
 choices[94][1] = "Gestionado cuantitativamente";
 choices[94][2] = "Definido";
 choices[94][3] = "Realizado";
 answers[94] = choices[94][1];
 units[94] = "87";
 comments[94] = "Id Pregunta: 11639. ";


//  Id pregunta: 11656 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Se&ntilde;ale la frase incorrecta:";
 choices[95]= new Array();
 choices[95][0] = "La versi&oacute;n 3 de SNMP proporciona mejoras en materia de seguridad con respecto a la versi&oacute;n 2.";
 choices[95][1] = "SNMP es un protocolo de la capa de aplicaci&oacute;n.";
 choices[95][2] = "Las versiones 1, 2 y 3 son compatibles entre s&iacute;.";
 choices[95][3] = "Los mensajes GetNextRequest se utilizan para recorrer una tabla de objetos.";
//  Id pregunta: 11660 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  En una trama de Frame Relay, la m&iacute;nima longitud posible del campo DLCI es:";
 choices[96]= new Array();
 choices[96][0] = "8 bits";
 choices[96][1] = "10 bits";
 choices[96][2] = "17 bits";
 choices[96][3] = "24 bits";
 answers[96] = choices[96][1];
 units[96] = "109";
 comments[96] = "Id Pregunta: 11660. ";


//  Id pregunta: 11675 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Se&ntilde;ale la tecnolog&iacute;a que no hace uso de MIMO:";
 choices[97]= new Array();
 choices[97][0] = "HSPA+";
 choices[97][1] = "WiFi";
 choices[97][2] = "WiMAX";
 choices[97][3] = "Las 3 hacen uso de MIMO";
 answers[97] = choices[97][3];
 units[97] = "107, 108";
 comments[97] = "Id Pregunta: 11675. ";


//  Id pregunta: 11676 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Se&ntilde;ale el c&oacute;dec que no aplica compresi&oacute;n de entre los siguientes:";
 choices[98]= new Array();
 choices[98][0] = "G.711";
 choices[98][1] = "G.726";
 choices[98][2] = "G.729";
 choices[98][3] = "iLBC";
 answers[98] = choices[98][0];
 units[98] = "109, 117";
 comments[98] = "Id Pregunta: 11676. ";


//  Id pregunta: 11699 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Una WAN ATM est&aacute;ndar corresponde a una red f&iacute;sica:";
 choices[99]= new Array();
 choices[99][0] = "Punto a punto";
 choices[99][1] = "Broadcast multi-acceso";
 choices[99][2] = "No broadcast multi-acceso";
 choices[99][3] = "Broadcast punto a multipunto";
 answers[99] = choices[99][2];
 units[99] = "102";
 comments[99] = "Id Pregunta: 11699. NULL";


