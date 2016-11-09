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

//  Id pregunta: 142 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  El dominio de la informaci&oacute;n se articula en tres grandes partes:";
 choices[0]= new Array();
 choices[0][0] = "Flujo de la informaci&oacute;n, proceso de la informaci&oacute;n, estructura de la informaci&oacute;n";
 choices[0][1] = "Flujo de la informaci&oacute;n, proceso de la informaci&oacute;n, almac&eacute;n de la informaci&oacute;n";
 choices[0][2] = "Flujo de la informaci&oacute;n, contenido de la informaci&oacute;n, almac&eacute;n de la informaci&oacute;n";
 choices[0][3] = "Flujo de la informaci&oacute;n, contenido de la informaci&oacute;n, estructura de la informaci&oacute;n";
 answers[0] = choices[0][3];
 units[0] = "21";
 comments[0] = "Id Pregunta: 142. NULL";


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


//  Id pregunta: 489 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  Una de las siguientes organizaciones de estandarizaci&oacute;n no ha desarrollado el est&aacute;ndar mencionado.  &iquest;Cu&aacute;l es?:";
 choices[2]= new Array();
 choices[2][0] = "ANSI - FDDI";
 choices[2][1] = "IEEE- TCP/IP";
 choices[2][2] = "ITU-T - X.25";
 choices[2][3] = "EIA  - RS-232";
 answers[2] = choices[2][1];
 units[2] = "42";
 comments[2] = "Id Pregunta: 489. ";


//  Id pregunta: 645 AÃ±o de creación de pregunta: 2006-01-01
 questions[3]= "4)  Cu&aacute;l de las siguientes no es una excepci&oacute;n admitida por la Decisi&oacute;n 87/95/CEE para la utilizaci&oacute;n de especificaciones no normalizadas:";
 choices[3]= new Array();
 choices[3][0] = "Por cuestiones de continuidad de funcionamiento, pero con la existencia de un plan estrat&eacute;gico de transici&oacute;n.";
 choices[3][1] = "Por la existencia de una norma 'de facto' ampliamente aceptada.";
 choices[3][2] = "Si se demuestra que la satisfacci&oacute;n de la norma tiene un coste excesivo.";
 choices[3][3] = "Por cuestiones de Innovaci&oacute;n.";
 answers[3] = choices[3][1];
 units[3] = "40";
 comments[3] = "Id Pregunta: 645. ";


//  Id pregunta: 991 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Dentro del proyecto CERES, es posible disponer de tarjetas criptogr&aacute;ficas para entregar a los ciudadanos &iquest;Qu&eacute; funcionalidades proporcionan dichas tarjetas desde el punto de vista de la seguridad?:";
 choices[4]= new Array();
 choices[4][0] = "Autenticaci&oacute;n e integridad, &uacute;nicamente";
 choices[4][1] = "Autenticaci&oacute;n, integridad y confidencialidad, &uacute;nicamente";
 choices[4][2] = "Autenticaci&oacute;n, integridad y confidencialidad y no repudio en origen";
 choices[4][3] = "Autenticaci&oacute;n, integridad y confidencialidad y no repudio en destino";
 answers[4] = choices[4][2];
 units[4] = "74";
 comments[4] = "Id Pregunta: 991. NULL";


//  Id pregunta: 1631 AÃ±o de creación de pregunta: 2003-01-01
 questions[5]= "6)  Un debugger (depurador) de programas :";
 choices[5]= new Array();
 choices[5][0] = "Ensambla los distintos m&oacute;dulos de SW";
 choices[5][1] = "Ayuda a los programadores a localizar errores de programaci&oacute;n";
 choices[5][2] = "Escanea los archivos ejecutables para detectar virus";
 choices[5][3] = "Permite crear un CPU virtual donde ejercer las pruebas de Sw minimizando la penalizaci&oacute;n de rendimientos en la instalaci&oacute;n principal";
 answers[5] = choices[5][1];
 units[5] = "59";
 comments[5] = "Id Pregunta: 1631. ";


//  Id pregunta: 1945 AÃ±o de creación de pregunta: 2006-01-01
 questions[6]= "7)  Hay dos metalenguajes con los que definir los lenguajes que podemos obtener a partir de XML, &iquest;Cu&aacute;les son?";
 choices[6]= new Array();
 choices[6][0] = "DTD y XML Schema";
 choices[6][1] = "DTL y HTML";
 choices[6][2] = "HTML y API";
 choices[6][3] = "DTD y SGML";
 answers[6] = choices[6][0];
 units[6] = "69";
 comments[6] = "Id Pregunta: 1945. NULL";


//  Id pregunta: 1947 AÃ±o de creación de pregunta: 2006-01-01
 questions[7]= "8)  La t&eacute;cnica que se emplea para la modelizaci&oacute;n sem&aacute;ntica de datos a la hora de dise&ntilde;ar un sistema de informaci&oacute;n, se denomina:";
 choices[7]= new Array();
 choices[7][0] = "Modelo Entidad/Relaci&oacute;n";
 choices[7][1] = "Diagrama de Flujo de Datos";
 choices[7][2] = "Diagrama de Contexto";
 choices[7][3] = "Modelo de Datos";
 answers[7] = choices[7][0];
 units[7] = "58";
 comments[7] = "Id Pregunta: 1947. ";


//  Id pregunta: 2030 AÃ±o de creación de pregunta: 2004-01-01
 questions[8]= "9)  En UML, los diagramas que describen bajo la forma de acciones y reacciones el comportamiento de un sistema desde el punto de vista de un usuario, se denominan:";
 choices[8]= new Array();
 choices[8][0] = "casos de uso";
 choices[8][1] = "diagrama de estados";
 choices[8][2] = "diagrama de actividades";
 choices[8][3] = "diagrama de secuencia";
 answers[8] = choices[8][0];
 units[8] = "82";
 comments[8] = "Id Pregunta: 2030. Similar a examen TIC SS A 2003";


//  Id pregunta: 2393 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  La fundaci&oacute;n EFQM fue una iniciativa de:";
 choices[9]= new Array();
 choices[9][0] = "Las organizaciones europeas de normalizaci&oacute;n (AENOR, AFNOR, DIN...)";
 choices[9][1] = "ANSI e IEEE";
 choices[9][2] = "La Comisi&oacute;n Europea y 14 compa&ntilde;&iacute;as europeas";
 choices[9][3] = "ISO";
 answers[9] = choices[9][2];
 units[9] = "92";
 comments[9] = "Id Pregunta: 2393. NULL";


//  Id pregunta: 2729 AÃ±o de creación de pregunta: 2006-01-01
 questions[10]= "11)  Uno de los objetivos principales de los Sistemas de Informaci&oacute;n es:";
 choices[10]= new Array();
 choices[10][0] = "Permitir la realizaci&oacute;n de los objetivos de la organizaci&oacute;n";
 choices[10][1] = "Interconectar las distintas sedes de la organizaci&oacute;n";
 choices[10][2] = "Aumentar la complejidad de los procesos de la organizaci&oacute;n";
 choices[10][3] = "Reducir el n&uacute;mero de empleados";
 answers[10] = choices[10][0];
 units[10] = "77";
 comments[10] = "Id Pregunta: 2729. ";


//  Id pregunta: 2831 AÃ±o de creación de pregunta: 2006-01-01
 questions[11]= "12)  La ingenier&iacute;a inversa:";
 choices[11]= new Array();
 choices[11][0] = "Seg&uacute;n el IEEE, es el proceso de analizar un sistema para identificar los componentes y las interrelaciones entre ellos, creando representaciones del sistema en otra forma distinta a la original a un mayor nivel de abstracci&oacute;n";
 choices[11][1] = "Es sin&oacute;nimo de Reingenier&iacute;a";
 choices[11][2] = "Es sin&oacute;nimo de Forward Engineering";
 choices[11][3] = "El IEEE no proporciona una definici&oacute;n de Ingenier&iacute;a Inversa";
 answers[11] = choices[11][0];
 units[11] = "91";
 comments[11] = "Id Pregunta: 2831. NULL";


//  Id pregunta: 2984 AÃ±o de creación de pregunta: 2004-01-01
 questions[12]= "13)  Los bridges:";
 choices[12]= new Array();
 choices[12][0] = "Filtran y encaminan la informaci&oacute;n por el trayecto &oacute;ptimo permitiendo la interconexi&oacute;n de redes heterog&eacute;neas a niveles 1 y 2";
 choices[12][1] = "Son elementos para la interconexi&oacute;n que operan en los niveles superiores al de red";
 choices[12][2] = "Son dispositivos que se encargan de regenerar la se&ntilde;al entre los dos segmentos de red que interconectan";
 choices[12][3] = "Operan a nivel de MAC (nivel 2), por tanto son transparentes a los protocolos de niveles superiores";
 answers[12] = choices[12][3];
 units[12] = "102";
 comments[12] = "Id Pregunta: 2984. ";


//  Id pregunta: 3057 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Dentro del objeto APPLICATION no pueden almacenarse:";
 choices[13]= new Array();
 choices[13][0] = "Variables simples de car&aacute;cter global";
 choices[13][1] = "Variables espec&iacute;ficas para cada usuario que accede al Web";
 choices[13][2] = "Arrays accesibles a todos los usuarios que est&eacute;n ejecutando la aplicaci&oacute;n de una o m&aacute;s dimensiones ";
 choices[13][3] = "Referencias de variables globales que apuntan a instancias de un objeto COM";
 answers[13] = choices[13][1];
 units[13] = "115";
 comments[13] = "Id Pregunta: 3057. ";


//  Id pregunta: 3227 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  &iquest;Cu&aacute;l de los siguientes no es un protocolo de encaminamiento o enrutamiento?:";
 choices[14]= new Array();
 choices[14][0] = "OSPF";
 choices[14][1] = "RIP";
 choices[14][2] = "ORP";
 choices[14][3] = "IS-IS";
 answers[14] = choices[14][2];
 units[14] = "102";
 comments[14] = "Id Pregunta: 3227. ";


//  Id pregunta: 3277 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  &iquest;Qu&eacute; ancho de banda tiene un acceso b&aacute;sico de RDSI en Europa?:";
 choices[15]= new Array();
 choices[15][0] = "64 kbps";
 choices[15][1] = "144 kbps";
 choices[15][2] = "128 kbps";
 choices[15][3] = "2048 kbps";
 answers[15] = choices[15][1];
 units[15] = "103";
 comments[15] = "Id Pregunta: 3277. ";


//  Id pregunta: 3667 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Una arquitectura de red jer&aacute;rquica:";
 choices[16]= new Array();
 choices[16][0] = "Asigna a cada sistema de comunicaciones de la red las mismas funciones";
 choices[16][1] = "Todas las sesiones de la red tienen lugar entre sistemas parejos";
 choices[16][2] = "Un sistema maestro es el encargado de toda la red y realiza funciones de gesti&oacute;n y control";
 choices[16][3] = "Todas las sesiones comparten las funciones de gesti&oacute;n de red";
 answers[16] = choices[16][2];
 units[16] = "104";
 comments[16] = "Id Pregunta: 3667. ";


//  Id pregunta: 3784 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Respecto a J2ME y Symbian:";
 choices[17]= new Array();
 choices[17][0] = "Symbian soporta J2ME, y J2ME soporta Symbian";
 choices[17][1] = "Symbian soporta J2ME, y J2ME no soporta Symbian";
 choices[17][2] = "Symbian no soporta J2ME, y J2ME soporta Symbian";
 choices[17][3] = "Symbian no soporta J2ME, y J2ME no soporta Symbian";
 answers[17] = choices[17][1];
 units[17] = "60";
 comments[17] = "Id Pregunta: 3784. J2ME no es multiplataforma.";


//  Id pregunta: 3863 AÃ±o de creación de pregunta: 2004-01-01
 questions[18]= "19)  El protocolo HTTP";
 choices[18]= new Array();
 choices[18][0] = "Obliga a los servidores a escuchar en el puerto 80";
 choices[18][1] = "Utiliza el formato MIME para las respuestas ";
 choices[18][2] = "Utiliza DNS y TCP para establecer la conexi&oacute;n con el servidor";
 choices[18][3] = "Est&aacute; basado en los comandos de Un&iacute;x";
 answers[18] = choices[18][1];
 units[18] = "113";
 comments[18] = "Id Pregunta: 3863. Tanenbaum";


//  Id pregunta: 4062 AÃ±o de creación de pregunta: 2006-01-01
 questions[19]= "20)  El protocolo de transporte TCP, est&aacute;ndar de internet, NO tiene entre sus caracter&iacute;sticas";
 choices[19]= new Array();
 choices[19][0] = "la entrega fiable de paquetes";
 choices[19][1] = "la detecci&oacute;n y el control de la congesti&oacute;n";
 choices[19][2] = "es orientado a conexi&oacute;n";
 choices[19][3] = "su RFC es 793";
 answers[19] = choices[19][1];
 units[19] = "112,100";
 comments[19] = "Id Pregunta: 4062. ";


//  Id pregunta: 4377 AÃ±o de creación de pregunta: 2007-01-01
 questions[20]= "21)  &iquest;Cu&aacute;les son los elementos en que se desglosa el desarrollo de un sistema de informaci&oacute;n, seg&uacute;n M&eacute;trica v3?";
 choices[20]= new Array();
 choices[20][0] = "Revisiones t&eacute;cnicas formales e inspecciones informales.";
 choices[20][1] = "Procesos principales, actividades y tareas.";
 choices[20][2] = "Fases, m&oacute;dulos, actividades y tareas.";
 choices[20][3] = "Interfaces y fases.";
 answers[20] = choices[20][1];
 units[20] = "86";
 comments[20] = "Id Pregunta: 4377. NULL";


//  Id pregunta: 4385 AÃ±o de creación de pregunta: 2007-01-01
 questions[21]= "22)  J2EE es:";
 choices[21]= new Array();
 choices[21][0] = "Un producto.";
 choices[21][1] = "Un servicio.";
 choices[21][2] = "Un estandar.";
 choices[21][3] = "Un entorno de desarrollo.";
 answers[21] = choices[21][2];
 units[21] = "60";
 comments[21] = "Id Pregunta: 4385. Es una especificaci&oacute;n que es est&aacute;ndar.";


//  Id pregunta: 4600 AÃ±o de creación de pregunta: 2007-01-01
 questions[22]= "23)  Respecto al protocolo de seguridad IKE, cual de las siguientes respuestas es falsa:";
 choices[22]= new Array();
 choices[22][0] = "recrea las claves cada cierto tiempo";
 choices[22][1] = "permite utilizar certificados digitales";
 choices[22][2] = "se necesita una asociaci&oacute;n de seguridad IKE Para cada conexi&oacute;n IPSEC.";
 choices[22][3] = "esta basado en Oakley.";
 answers[22] = choices[22][2];
 units[22] = "74";
 comments[22] = "Id Pregunta: 4600. NULL";


//  Id pregunta: 4689 AÃ±o de creación de pregunta: 2007-01-01
 questions[23]= "24)  La diferencia entre la fibra &oacute;ptica monomodo y multimodo radica, principalmente, en";
 choices[23]= new Array();
 choices[23][0] = "las frecuencias usadas";
 choices[23][1] = "los adaptadores usados";
 choices[23][2] = " la forma en que el haz se refleja dentro del n&uacute;cleo de la fibra";
 choices[23][3] = "Ninguna de las anteriores";
 answers[23] = choices[23][2];
 units[23] = "99";
 comments[23] = "Id Pregunta: 4689. Examen 2006 JCYL";


//  Id pregunta: 4786 AÃ±o de creación de pregunta: 2007-01-01
 questions[24]= "25)  Seg&uacute;n La t&eacute;cnica de estimaci&oacute;n Mark II de Puntos Funci&oacute;n, a cada atributo se le asigna un valor entre:";
 choices[24]= new Array();
 choices[24][0] = "1 y 5.";
 choices[24][1] = "1 y 8.";
 choices[24][2] = "0 y 8.";
 choices[24][3] = "0 y 5.";
 answers[24] = choices[24][3];
 units[24] = "27";
 comments[24] = "Id Pregunta: 4786. Castilla la Mancha B 06";


//  Id pregunta: 5054 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  RDF (Resource Description Framework) es un:";
 choices[25]= new Array();
 choices[25][0] = "Lenguaje del W3C para representar informaci&oacute;n sobre recursos en la Web";
 choices[25][1] = "Est&aacute;ndar del W3C para la definici&oacute;n de datos";
 choices[25][2] = "Est&aacute;ndar para la creaci&oacute;n de p&aacute;ginas web accesibles";
 choices[25][3] = "Est&aacute;ndar para la descripci&oacute;n de los recursos inform&aacute;ticos de una organizaci&oacute;n";
 answers[25] = choices[25][0];
 units[25] = "39";
 comments[25] = "Id Pregunta: 5054. Examen TIC A 2007";


//  Id pregunta: 5055 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  Seg&uacute;n la legislaci&oacute;n vigente sobre la Propiedad Intelectual, &iquest;cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n con laduraci&oacute;n de la protecci&oacute;n en la explotaci&oacute;n de los derechos de autor de un programa de ordenador, por la personatitular del derecho, es cierta?";
 choices[26]= new Array();
 choices[26][0] = "Si el autor es una persona natural, la duraci&oacute;n de la protecci&oacute;n son 35 a&ntilde;os desde la publicaci&oacute;n delprograma.";
 choices[26][1] = "Si el autor es una persona jur&iacute;dica, la duraci&oacute;n de la protecci&oacute;n ser&aacute; de 99 a&ntilde;os computados desde el 1 deenero del a&ntilde;o siguiente al de divulgaci&oacute;n del programa";
 choices[26][2] = "La protecci&oacute;n es indefinida en el tiempo, desde la creaci&oacute;n del c&oacute;digo objeto del programa";
 choices[26][3] = "Cuando el autor sea una persona natural, durar&aacute;n toda la vida del autor y setenta a&ntilde;os despu&eacute;s de sumuerte o declaraci&oacute;n de fallecimiento";
 answers[26] = choices[26][3];
 units[26] = "36";
 comments[26] = "Id Pregunta: 5055. Examen TIC A 2007";


//  Id pregunta: 5065 AÃ±o de creación de pregunta: 2003-01-01
 questions[27]= "28)  En relaci&oacute;n con los ERP, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta respecto a SAP R/3?";
 choices[27]= new Array();
 choices[27][0] = "El m&oacute;dulo donde se gestionan las compras se denomina CO";
 choices[27][1] = "El m&oacute;dulo PM se encarga de gestionar la gesti&oacute;n de proyectos";
 choices[27][2] = "El m&oacute;dulo SD es parte del m&oacute;dulo de contabilidad financiera";
 choices[27][3] = "El m&oacute;dulo &quot;Basis&quot; se encarga de gestionar la base de datos";
 answers[27] = choices[27][3];
 units[27] = "65";
 comments[27] = "Id Pregunta: 5065. Examen TIC A 2007";


//  Id pregunta: 5104 AÃ±o de creación de pregunta: 2003-01-01
 questions[28]= "29)  En un sistema de informaci&oacute;n, los informes espec&iacute;ficos que no se hab&iacute;an pedido anteriormente y que los directivos necesitan con rapidez para resolver un problema muy concreto ser&aacute;n para:";
 choices[28]= new Array();
 choices[28][0] = "Un nivel operativo";
 choices[28][1] = "Un nivel t&aacute;ctico";
 choices[28][2] = "Un nivel estrat&eacute;gico";
 choices[28][3] = "Un nivel transaccional";
 answers[28] = choices[28][1];
 units[28] = "22";
 comments[28] = "Id Pregunta: 5104. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5565 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as permiten la transmisi&oacute;n de datos sobre una infraestructura de fibra &oacute;ptica para una red de &aacute;rea metropolitana?";
 choices[29]= new Array();
 choices[29][0] = "DQDB";
 choices[29][1] = "CDDI";
 choices[29][2] = "HIPPI";
 choices[29][3] = "PDDI";
 answers[29] = choices[29][0];
 units[29] = "101";
 comments[29] = "Id Pregunta: 5565. ";


//  Id pregunta: 5829 AÃ±o de creación de pregunta: 2009-01-01
 questions[30]= "31)  &iquest;Cu&aacute;ntos p&iacute;xeles tiene una ilustraci&oacute;n de 6x6 pulgadas con una resoluci&oacute;n de 300 ppi?";
 choices[30]= new Array();
 choices[30][0] = "540.000 p&iacute;xeles";
 choices[30][1] = "3.240.000 p&iacute;xeles";
 choices[30][2] = "10.800 p&iacute;xeles";
 choices[30][3] = "1.800 p&iacute;xeles";
 answers[30] = choices[30][1];
 units[30] = "93";
 comments[30] = "Id Pregunta: 5829. MAP 2008 A1";


//  Id pregunta: 5835 AÃ±o de creación de pregunta: 2009-01-01
 questions[31]= "32)  Las caracter&iacute;sticas del m&eacute;todo Delphi son";
 choices[31]= new Array();
 choices[31][0] = "Confidencialidad, integridad del grupo y disponibilidad";
 choices[31][1] = "Anonimato, realimentaci&oacute;n controlada y respuesta del grupo de forma estad&iacute;stica";
 choices[31][2] = "Criticidad, autenticaci&oacute;n del grupo y consistencia";
 choices[31][3] = "Convergencia, coherencia del grupo y salvaguarda";
 answers[31] = choices[31][1];
 units[31] = "34";
 comments[31] = "Id Pregunta: 5835. MAP 2008 A1";


//  Id pregunta: 6053 AÃ±o de creación de pregunta: 2010-01-01
 questions[32]= "33)  La gesti&oacute;n del alcance de un proyecto de tecnolog&iacute;as de la informaci&oacute;n se suele dividir en 5 etapas; indicar cu&aacute;l de las siguientes NO es una de ellas:";
 choices[32]= new Array();
 choices[32][0] = "Planificaci&oacute;n del alcance.";
 choices[32][1] = "Creaci&oacute;n de la Estructura de Desglose del Trabajo (EDT).";
 choices[32][2] = "Definici&oacute;n del alcance.";
 choices[32][3] = "Estimaci&oacute;n de la duraci&oacute;n de las actividades o trabajos.";
 answers[32] = choices[32][3];
 units[32] = "86";
 comments[32] = "Id Pregunta: 6053. TIC A 2009";


//  Id pregunta: 6068 AÃ±o de creación de pregunta: 2010-01-01
 questions[33]= "34)  En el &aacute;mbito de los algoritmos de aprendizaje";
 choices[33]= new Array();
 choices[33][0] = "Los algoritmos de agrupamiento son m&eacute;todos de aprendizaje supervisado y los de clasificaci&oacute;n son m&eacute;todos de aprendizaje no supervisado";
 choices[33][1] = "Los algoritmos de agrupamiento son m&eacute;todos de aprendizaje no supervisado y los de clasificaci&oacute;n son m&eacute;todos de aprendizaje supervisado";
 choices[33][2] = "Tanto los algoritmos de agrupamiento como de clasificaci&oacute;n son m&eacute;todos aprendizaje supervisado";
 choices[33][3] = "Tanto los algoritmos de agrupamiento como de clasificaci&oacute;n son m&eacute;todos aprendizaje no supervisado";
 answers[33] = choices[33][1];
 units[33] = "63,64";
 comments[33] = "Id Pregunta: 6068. ";


//  Id pregunta: 6148 AÃ±o de creación de pregunta: 2010-01-01
 questions[34]= "35)  &iquest;Qu&eacute; tipo de dependencias utiliza el m&eacute;todo ADM?";
 choices[34]= new Array();
 choices[34][0] = "Utiliza dependencias inicio a final y final a inicio.";
 choices[34][1] = "S&oacute;lo utiliza dependencias de inicio a final.";
 choices[34][2] = "S&oacute;lo utiliza dependencias de final a inicio.";
 choices[34][3] = "S&oacute;lo utiliza dependencias final a final.";
 answers[34] = choices[34][2];
 units[34] = "28";
 comments[34] = "Id Pregunta: 6148. ";


//  Id pregunta: 6156 AÃ±o de creación de pregunta: 2010-01-01
 questions[35]= "36)  &iquest;Qu&eacute; tipo de licencia utiliza Samba?";
 choices[35]= new Array();
 choices[35][0] = "GPL";
 choices[35][1] = "GNU LGPL";
 choices[35][2] = "No utiliza ning&uacute;n tipo de licencia";
 choices[35][3] = "MGPL";
 answers[35] = choices[35][0];
 units[35] = "112";
 comments[35] = "Id Pregunta: 6156. ";


//  Id pregunta: 6175 AÃ±o de creación de pregunta: 2010-01-01
 questions[36]= "37)  &iquest;Cual es la &uacute;ltima versi&oacute;n del protocolo SCORM?";
 choices[36]= new Array();
 choices[36][0] = "SCORM 1.0";
 choices[36][1] = "SCORM 1.1";
 choices[36][2] = "SCORM 1.2";
 choices[36][3] = "SCORM 2004";
 answers[36] = choices[36][3];
 units[36] = "66";
 comments[36] = "Id Pregunta: 6175. ";


//  Id pregunta: 6182 AÃ±o de creación de pregunta: 2010-01-01
 questions[37]= "38)  Entre las funciones de BPEL no se encuentra:";
 choices[37]= new Array();
 choices[37][0] = "Definir una interpretaci&oacute;n gr&aacute;fica de procesos.";
 choices[37][1] = "Definir procesos de negocio.";
 choices[37][2] = "Construir sobre servicios Web operaciones que participan en procedimientos empresariales.";
 choices[37][3] = "Orquestar servicios Web.";
 answers[37] = choices[37][0];
 units[37] = "71";
 comments[37] = "Id Pregunta: 6182. ";


//  Id pregunta: 6341 AÃ±o de creación de pregunta: 2010-01-01
 questions[38]= "39)  &iquest;Qu&eacute; es un widget?";
 choices[38]= new Array();
 choices[38][0] = "Una aplicaci&oacute;n web que utiliza informaci&oacute;n de diversas fuentes relevantes para crear un nuevo servicio en base a ellas, normalmente empleando Servicios Web y APIs p&uacute;blicas. ";
 choices[38][1] = "Una red inform&aacute;tica entre pares, sin servidores centralizados, donde se puede compartir informaci&oacute;n de cualquier tipo.";
 choices[38][2] = "Una peque&ntilde;a aplicaci&oacute;n o m&oacute;dulo que realiza una funci&oacute;n concreta, generalmente de tipo visual, dentro de otras aplicaciones o sistemas operativos.";
 choices[38][3] = "Un enlace fijo que no var&iacute;a con el tiempo.";
 answers[38] = choices[38][2];
 units[38] = "120";
 comments[38] = "Id Pregunta: 6341. NULL";


//  Id pregunta: 6398 AÃ±o de creación de pregunta: 2010-01-01
 questions[39]= "40)  La ley 59/2003 de firma electr&oacute;nica, regula:";
 choices[39]= new Array();
 choices[39][0] = "La firma electr&oacute;nica";
 choices[39][1] = "La prestaci&oacute;n de servicios de certificaci&oacute;n";
 choices[39][2] = "La eficacia de la firma electr&oacute;nica";
 choices[39][3] = "Todas las anteriores son correctas.";
 answers[39] = choices[39][3];
 units[39] = "30";
 comments[39] = "Id Pregunta: 6398. Ley 59/2003, art&iacute;culo 1";


//  Id pregunta: 6566 AÃ±o de creación de pregunta: 2010-01-01
 questions[40]= "41)  UMTS ";
 choices[40]= new Array();
 choices[40][0] = "Reutiliza el subsistema de red de GSM";
 choices[40][1] = "Reutiliza el subsistema de red de GPRS";
 choices[40][2] = "El sistema de acceso radio es nuevo";
 choices[40][3] = "Todas las respuestas anteriores son ciertas";
 answers[40] = choices[40][3];
 units[40] = "108";
 comments[40] = "Id Pregunta: 6566. NULL";


//  Id pregunta: 6638 AÃ±o de creación de pregunta: 2010-01-01
 questions[41]= "42)  El modelo COCOMO II propone los modelos:";
 choices[41]= new Array();
 choices[41][0] = "Modelo de Composici&oacute;n de la Aplicci&oacute;n, Dise&ntilde;o Preliminar y Modelo Post-Arquitectura";
 choices[41][1] = "Modelo de Composici&oacute;n de la Aplicci&oacute;n y Dise&ntilde;o Preliminar";
 choices[41][2] = "Modelo Org&aacute;nico y Semiacoplado";
 choices[41][3] = "Modelo Org&aacute;nico, Semiacoplado y Empotrado";
 answers[41] = choices[41][0];
 units[41] = "88";
 comments[41] = "Id Pregunta: 6638. NULL";


//  Id pregunta: 7281 AÃ±o de creación de pregunta: 2010-01-01
 questions[42]= "43)  Los dos enfoques m&aacute;s habituales de la virtuailzaci&oacute;n de servidores o estaciones de trabajo son:";
 choices[42]= new Array();
 choices[42][0] = "Hospedada y mediante hipervisor (bare metal)";
 choices[42][1] = "Acoplada y mediante hipervisor (bare metal)";
 choices[42][2] = "Paralela y mediante hipervisor (bare metal)";
 choices[42][3] = "Acoplada y mediante CPM (Cross Platform Manager)";
 answers[42] = choices[42][0];
 units[42] = "119";
 comments[42] = "Id Pregunta: 7281. Examen TIC B 2009";


//  Id pregunta: 7308 AÃ±o de creación de pregunta: 2010-01-01
 questions[43]= "44)  Indique cu&aacute;l de los siguientes NO es un lenguaje de marcado multimodal:";
 choices[43]= new Array();
 choices[43][0] = "EMMA";
 choices[43][1] = "VoiceXML";
 choices[43][2] = "SALT";
 choices[43][3] = "Todos son lenguajes de marcado multimodal";
 answers[43] = choices[43][1];
 units[43] = "94";
 comments[43] = "Id Pregunta: 7308. NULL";


//  Id pregunta: 8260 AÃ±o de creación de pregunta: 2011-01-01
 questions[44]= "45)  Se&ntilde;ale cu&aacute;l de los siguientes NO es un principio b&aacute;sico del Esquema Nacional de Seguridad (ENS):";
 choices[44]= new Array();
 choices[44][0] = "Funci&oacute;n diferenciada.";
 choices[44][1] = "Prevenci&oacute;n, reacci&oacute;n y recuperaci&oacute;n.";
 choices[44][2] = "L&iacute;neas de defensa.";
 choices[44][3] = "Continuidad de la actividad.";
 answers[44] = choices[44][3];
 units[44] = "43";
 comments[44] = "Id Pregunta: 8260. Examen TIC A1 2010";


//  Id pregunta: 8303 AÃ±o de creación de pregunta: 2011-01-01
 questions[45]= "46)  En relaci&oacute;n a IPSec se&ntilde;ale la opci&oacute;n INCORRECTA:";
 choices[45]= new Array();
 choices[45][0] = "Se defini&oacute; originariamente en las RFCs 1825 y 1829.";
 choices[45][1] = "Tanto AH (Authentication Header) como ESP (Encapsulating Security Payload) proporcionan integridad y autenticaci&oacute;n en la comunicaci&oacute;n.";
 choices[45][2] = "En modo transporte con AH no es posible traducir direcciones mediante NAT transversal.";
 choices[45][3] = "ESP debe implementar obligatoriamente el algoritmo AES-CBC con claves de 128 bits";
 answers[45] = choices[45][2];
 units[45] = "111";
 comments[45] = "Id Pregunta: 8303. Examen TIC A2 2010";


//  Id pregunta: 8310 AÃ±o de creación de pregunta: 2011-01-01
 questions[46]= "47)  La autoridad encargada de la asignaci&oacute;n de nombres de dominio de primer nivel gen&eacute;ricos (gTLD) y de c&oacute;digos de pa&iacute;ses (ocTLD) &uacute;nicos en lnternet es:";
 choices[46]= new Array();
 choices[46][0] = "IANA. ";
 choices[46][1] = "NIST.";
 choices[46][2] = "ICANN.";
 choices[46][3] = "IETF.";
 answers[46] = choices[46][2];
 units[46] = "112,42";
 comments[46] = "Id Pregunta: 8310. Examen TIC A2 2010";


//  Id pregunta: 8313 AÃ±o de creación de pregunta: 2011-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l es el est&aacute;ndar correspondiente al m&eacute;todo de compresi&oacute;n ADPCM (Adaptative Differential Pulse Code Modulation) de la voz? ";
 choices[47]= new Array();
 choices[47][0] = "G.711.";
 choices[47][1] = "G.726.";
 choices[47][2] = "G.728. ";
 choices[47][3] = "G.729. ";
 answers[47] = choices[47][1];
 units[47] = "117";
 comments[47] = "Id Pregunta: 8313. Examen TIC A2 2010";


//  Id pregunta: 8314 AÃ±o de creación de pregunta: 2011-01-01
 questions[48]= "49)  El c&oacute;dec G.729 especificado por la ITU-T para la codificaci&oacute;n de voz para su uso en sistemas de Voz sobre IP, &iquest;a qu&eacute; tasas de bit puede operar?";
 choices[48]= new Array();
 choices[48][0] = "A 56 o 64 kbps.";
 choices[48][1] = "A 6.4, 8 o 11.8 kbps. ";
 choices[48][2] = "&Uacute;nicamente a 8 kbps. ";
 choices[48][3] = "A 5.3 o 6.4 kbps.";
 answers[48] = choices[48][1];
 units[48] = "100";
 comments[48] = "Id Pregunta: 8314. Examen TIC A2 2010";


//  Id pregunta: 8461 AÃ±o de creación de pregunta: 2011-01-01
 questions[49]= "50)  &iquest;Cu&aacute;l de estos NO es un est&aacute;ndar del W3C para Web Services?:";
 choices[49]= new Array();
 choices[49][0] = "UDDI";
 choices[49][1] = "SOAP";
 choices[49][2] = "WSDL";
 choices[49][3] = "XML";
 answers[49] = choices[49][0];
 units[49] = "51";
 comments[49] = "Id Pregunta: 8461. Analista Ayto. Madrid 2010";


//  Id pregunta: 8591 AÃ±o de creación de pregunta: 2011-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes opciones NO es un servidor de aplicaciones que cumple con la especificaci&oacute;n de Java EE?";
 choices[50]= new Array();
 choices[50][0] = "Apache Tomcat";
 choices[50][1] = "JBOSS";
 choices[50][2] = "WebSphere Application Server";
 choices[50][3] = "Glassfish";
 answers[50] = choices[50][0];
 units[50] = "115,116";
 comments[50] = "Id Pregunta: 8591. Examen TIC A2 2010 interna";


//  Id pregunta: 8644 AÃ±o de creación de pregunta: 2011-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l es la definici&oacute;n correcta de 3FN?";
 choices[51]= new Array();
 choices[51][0] = "Una entidad est&aacute; en 3FN si est&aacute; en 2FN y todos los atributos que forman parte de las claves candidatas (atributos principales) tienen dependencia funcional completa respecto de &eacute;stas es decir, no hay dependencias funcionales de atributos no principales respecto de una parte de las claves.";
 choices[51][1] = "Una entidad est&aacute; en 3FN si est&aacute; en 2FN y lodos los atributos que no forman parte de las claves candidatas (atributos no principales) tienen dependencia funcional completa respecto de &eacute;stas, es decir, no hay dependencias funcionales de atributos no principales respecto de una parte de las claves Cada uno de los atributos de una entidad depende de toda la clave.";
 choices[51][2] = "Una entidad est&aacute; en 3FN si est&aacute; en 2FN y todos sus atributos principales dependen directamente de la clave primaria, es decir, no hay dependencias funcionales transitivas de atributos no principales respecto de las claves.";
 choices[51][3] = "Una entidad est&aacute; en 3FN si est&aacute; en 2FN y todos sus atributos no principales dependen directamente de la clave primaria, es decir, no hay dependencias funcionales transitivas de atributos no principales respecto de las claves.";
 answers[51] = choices[51][3];
 units[51] = "57 ,58";
 comments[51] = "Id Pregunta: 8644. Examen TIC A2 2010 interna";


//  Id pregunta: 8680 AÃ±o de creación de pregunta: 2011-01-01
 questions[52]= "53)  a) A que componente del protocolo SIP corresponde la funci&oacute;n de &quot;aceptar peticiones de registros de usuarios y guardar la informaci&oacute;n de estas peticiones para suministrar un servicio de localizaci&oacute;n y traducci&oacute;n de direcciones en el dominio que controla&quot;:";
 choices[52]= new Array();
 choices[52][0] = "Proxy Server.";
 choices[52][1] = "Account Server.";
 choices[52][2] = "Redirect Server.";
 choices[52][3] = "Registrar Server.";
 answers[52] = choices[52][3];
 units[52] = "109";
 comments[52] = "Id Pregunta: 8680. Examen UPM A2 2011";


//  Id pregunta: 8807 AÃ±o de creación de pregunta: 2011-01-01
 questions[53]= "54)  No todos los componentes de un Diagrama de Flujo de Datos (DFD) se pueden conectar mediante flujos de datos &iquest;qu&eacute; conexi&oacute;n de las siguientes est&aacute; permitida?";
 choices[53]= new Array();
 choices[53][0] = "Proceso con proceso";
 choices[53][1] = "Almac&eacute;n con almac&eacute;n";
 choices[53][2] = "Entidad Externa con Almac&eacute;n";
 choices[53][3] = "Entidad Externa con Entidad Externa";
 answers[53] = choices[53][0];
 units[53] = "81";
 comments[53] = "Id Pregunta: 8807. Examen UPM A2 2011";


//  Id pregunta: 8819 AÃ±o de creación de pregunta: 2011-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de estas normas especifica los requisitos para un buen sistema de gesti&oacute;n de calidad?";
 choices[54]= new Array();
 choices[54][0] = "ISO 9001";
 choices[54][1] = "ISO 9000";
 choices[54][2] = "ISO 9004";
 choices[54][3] = "ISO 19011";
 answers[54] = choices[54][0];
 units[54] = "87, 92";
 comments[54] = "Id Pregunta: 8819. Examen UPM A2 2011";


//  Id pregunta: 8822 AÃ±o de creación de pregunta: 2011-01-01
 questions[55]= "56)  Al modificar un programa protegido por licencia GPL, el resultado deberemos protegerlo con una licencia:";
 choices[55]= new Array();
 choices[55][0] = "GPL";
 choices[55][1] = "BSD";
 choices[55][2] = "EULA";
 choices[55][3] = "GNU";
 answers[55] = choices[55][0];
 units[55] = "61";
 comments[55] = "Id Pregunta: 8822. Examen UPM A2 2011";


//  Id pregunta: 8868 AÃ±o de creación de pregunta: 2011-01-01
 questions[56]= "57)  En un modelo entidad-relaci&oacute;n cual es la definici&oacute;n b&aacute;sica que corresponde con el elemento entidad?:";
 choices[56]= new Array();
 choices[56][0] = "Es aquel objeto que existe en el mundo real con una identificaci&oacute;n distinta y con un significado propio";
 choices[56][1] = "Es aquella propiedad que tiene asignado un dominio";
 choices[56][2] = "Es el conjunto de valores que puede tomar un atributo";
 choices[56][3] = "Es la relaci&oacute;n que se establece entre los objetos del modelo";
 answers[56] = choices[56][0];
 units[56] = "80";
 comments[56] = "Id Pregunta: 8868. Analista Ayto. Madrid 2010";


//  Id pregunta: 8970 AÃ±o de creación de pregunta: 2011-01-01
 questions[57]= "58)  Entre los agentes del Plan General de Garant&iacute;a de la Calidad no figura:";
 choices[57]= new Array();
 choices[57][0] = "EGC (Eq garant&iacute;a calidad)";
 choices[57][1] = "EDS (Equipo de desarrollo)";
 choices[57][2] = "DIR (Director de proyecto)";
 choices[57][3] = "CDC (Comit&eacute; directivo de calidad)";
 answers[57] = choices[57][3];
 units[57] = "87,88,92";
 comments[57] = "Id Pregunta: 8970. ";


//  Id pregunta: 9005 AÃ±o de creación de pregunta: 2011-01-01
 questions[58]= "59)  NO es una infracci&oacute;n leve seg&uacute;n la LOPD:";
 choices[58]= new Array();
 choices[58][0] = "Incumplir el deber de secreto establecido en el art&iacute;culo 10 de esta Ley, salvo que constituya infracci&oacute;n grave.";
 choices[58][1] = "No solicitar la inscripci&oacute;n del fichero de datos de car&aacute;cter personal en el Registro General de Protecci&oacute;n de Datos.";
 choices[58][2] = "La transmisi&oacute;n de los datos a un encargado del tratamiento sin dar cumplimiento a los deberes formales establecidos en el art&iacute;culo 12 de esta Ley.";
 choices[58][3] = "No remitir a la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos las notificaciones previstas en esta Ley o en sus disposiciones de desarrollo.";
 answers[58] = choices[58][0];
 units[58] = "29";
 comments[58] = "Id Pregunta: 9005. ";


//  Id pregunta: 9098 AÃ±o de creación de pregunta: 2013-01-01
 questions[59]= "60)  El lenguaje de expresi&oacute;n de derechos REL se basa en contenedores de grants. Indica cual de los siguientes elementos no forma parte de un grant.";
 choices[59]= new Array();
 choices[59][0] = "Principal.";
 choices[59][1] = "Right.";
 choices[59][2] = "Resource.";
 choices[59][3] = "Constraints.";
 answers[59] = choices[59][3];
 units[59] = "37";
 comments[59] = "Id Pregunta: 9098. ";


//  Id pregunta: 9198 AÃ±o de creación de pregunta: 2013-01-01
 questions[60]= "61)  Cuando un trabajador asalariado crea un programa de ordenador, en el ejercicio de sus funciones:";
 choices[60]= new Array();
 choices[60][0] = "Los derechos de explotaci&oacute;n pertenecen al trabajador salvo pacto en contrario";
 choices[60][1] = "Los derechos de explotaci&oacute;n pertenecen al empresario salvo pacto en contrario";
 choices[60][2] = "Los derechos morales pertenecen al trabajador salvo pacto en contrario";
 choices[60][3] = "Los derechos morales pertenecen al empresario salvo pacto en contrario";
 answers[60] = choices[60][1];
 units[60] = "36";
 comments[60] = "Id Pregunta: 9198. ";


//  Id pregunta: 9232 AÃ±o de creación de pregunta: 2013-01-01
 questions[61]= "62)  &iquest;Qu&eacute; es Jelly Bean?";
 choices[61]= new Array();
 choices[61][0] = "Sistema operativo de Apple para dispositivos m&oacute;viles";
 choices[61][1] = "Sistema operativo de Apple para ordenadores de sobremesa.";
 choices[61][2] = "Una versi&oacute;n de Android.";
 choices[61][3] = "No existe.";
 answers[61] = choices[61][2];
 units[61] = "52";
 comments[61] = "Id Pregunta: 9232. ";


//  Id pregunta: 9351 AÃ±o de creación de pregunta: 2013-01-01
 questions[62]= "63)  Respecto de RDSI, se puede afirmar:";
 choices[62]= new Array();
 choices[62][0] = "En la capa de enlace, el canal D hace uso del Procedimiento de Acceso al Enlace en el Canal D (o LAPD)";
 choices[62][1] = "En la capa de enlace, el canal B hace uso del Procedimiento de Acceso al Enlace en el Canal B (o LAPB)";
 choices[62][2] = "La transmisi&oacute;n d&uacute;plex en la capa f&iacute;sica se efect&uacute;a a 192 kbps mediante tramas de 40 bits cada una y una duraci&oacute;n de 275 us";
 choices[62][3] = "En la capa de red, se usa el protocolo LAPB, para gestionar las conexiones";
 answers[62] = choices[62][0];
 units[62] = "103";
 comments[62] = "Id Pregunta: 9351. Pag. 8 astic 2011";


//  Id pregunta: 9363 AÃ±o de creación de pregunta: 2013-01-01
 questions[63]= "64)  Una red de anillo en contienda.";
 choices[63]= new Array();
 choices[63][0] = "Nunca se pasa un testigo";
 choices[63][1] = "Lo m&aacute;s razonable es utilizar este m&eacute;todo en situaciones de demanda baja de transmisi&oacute;n.";
 choices[63][2] = "Mejora las prestaciones de la red en situaciones alta demanda de transmisi&oacute;n.";
 choices[63][3] = "Es imposible detectar las colisiones bajo este esquema de funcionamiento.";
 answers[63] = choices[63][1];
 units[63] = "101";
 comments[63] = "Id Pregunta: 9363. ";


//  Id pregunta: 9402 AÃ±o de creación de pregunta: 2013-01-01
 questions[64]= "65)  Una red Frame Relay:";
 choices[64]= new Array();
 choices[64][0] = "Es adecuada para la transmisi&oacute;n de voz.";
 choices[64][1] = "Gestiona tr&aacute;fico por prioridades.";
 choices[64][2] = "Permite establecer circuitos virtuales permanentes.";
 choices[64][3] = "Ninguna de las anteriores";
 answers[64] = choices[64][2];
 units[64] = "109";
 comments[64] = "Id Pregunta: 9402. T&eacute;cnico Teleco Ayto Madrid 2010";


//  Id pregunta: 9441 AÃ±o de creación de pregunta: 2013-01-01
 questions[65]= "66)  Se&ntilde;ale la afirmaci&oacute;n correcta respecto del patr&oacute;n de dise&ntilde;o MVC (Modelo, Vista, Controlador):";
 choices[65]= new Array();
 choices[65][0] = "A pesar de su amplia difusi&oacute;n con las arquitecturas Web, naci&oacute; en la d&eacute;cada de los sesenta.";
 choices[65][1] = "Los componentes que se encargan de la l&oacute;gica de negocio forman parte del Modelo.";
 choices[65][2] = "La Vista variar&aacute; inevitablemente al variar el Modelo.";
 choices[65][3] = "El patr&oacute;n de dise&ntilde;o MVC es un modo de dividir la funcionalidad de un componente de forma ordenada.";
 answers[65] = choices[65][1];
 units[65] = "82";
 comments[65] = "Id Pregunta: 9441. Examen AGE TIC A1 2011";


//  Id pregunta: 9448 AÃ±o de creación de pregunta: 2013-01-01
 questions[66]= "67)  En el modelo de ciclo de vida en espiral, dentro de cada ciclo:";
 choices[66]= new Array();
 choices[66][0] = "La dimensi&oacute;n radial representa el avance y la angular el coste.";
 choices[66][1] = "La dimensi&oacute;n radial representa la complejidad y la angular el avance.";
 choices[66][2] = "La dimensi&oacute;n radial representa el coste y la angular la complejidad.";
 choices[66][3] = "La dimensi&oacute;n radial representa el coste y la angular el avance.";
 answers[66] = choices[66][3];
 units[66] = "76";
 comments[66] = "Id Pregunta: 9448. Examen AGE TIC A1 2011";


//  Id pregunta: 9452 AÃ±o de creación de pregunta: 2013-01-01
 questions[67]= "68)  Aquellas pruebas que se realizan en el entorno de desarrollo y tienen como objetivo verificar el funcionamiento global del sistema de informaci&oacute;n completo se denominan:";
 choices[67]= new Array();
 choices[67][0] = "Pruebas unitarias.";
 choices[67][1] = "Pruebas de integraci&oacute;n.";
 choices[67][2] = "Pruebas del sistema.";
 choices[67][3] = "Pruebas de implantaci&oacute;n.";
 answers[67] = choices[67][2];
 units[67] = "86";
 comments[67] = "Id Pregunta: 9452. Examen AGE TIC A1 2011";


//  Id pregunta: 9485 AÃ±o de creación de pregunta: 2013-01-01
 questions[68]= "69)  Seg&uacute;n Metricav3, &iquest;qu&eacute; participante se encarga de definir los requisitos de sistema?";
 choices[68]= new Array();
 choices[68][0] = "Jefe de proyecto";
 choices[68][1] = "Consultor";
 choices[68][2] = "Analista";
 choices[68][3] = "Programador";
 answers[68] = choices[68][2];
 units[68] = "78";
 comments[68] = "Id Pregunta: 9485. ";


//  Id pregunta: 9602 AÃ±o de creación de pregunta: 2014-01-01
 questions[69]= "70)  La comunicaci&oacute;n s&iacute;ncrona entre procesos UNIX tiene lugar mediante...";
 choices[69]= new Array();
 choices[69][0] = "Pipes";
 choices[69][1] = "Signals";
 choices[69][2] = "Events";
 choices[69][3] = "Sem&aacute;foros";
 answers[69] = choices[69][0];
 units[69] = "53";
 comments[69] = "Id Pregunta: 9602. ";


//  Id pregunta: 9667 AÃ±o de creación de pregunta: 2014-01-01
 questions[70]= "71)  La segmentaci&oacute;n o pipelining:";
 choices[70]= new Array();
 choices[70][0] = "Es una t&eacute;cnica de solapamiento de instrucciones mediante la divisi&oacute;n de su ejecuci&oacute;n en etapas para simular paralelizaci&oacute;n.";
 choices[70][1] = "Disminuye el tiempo de ejecuci&oacute;n de cada instrucci&oacute;n.";
 choices[70][2] = "Se trata de dividir el c&oacute;digo en fragmentos para distribuirlos por distintos procesadores.";
 choices[70][3] = "Todas  las anteriores.";
 answers[70] = choices[70][0];
 units[70] = "45";
 comments[70] = "Id Pregunta: 9667. ";


//  Id pregunta: 9693 AÃ±o de creación de pregunta: 2014-01-01
 questions[71]= "72)  Indique cu&aacute;l es la respuesta falsa. Los principios que se aplicaron para llegar a las siete capas del modelo OSI fueron:";
 choices[71]= new Array();
 choices[71][0] = "Cada capa debe realizar una funci&oacute;n bien definida.";
 choices[71][1] = "No debe dise&ntilde;arse la funci&oacute;n de cada capa pensando en la definici&oacute;n de protocolos estandarizados internacionalmente.";
 choices[71][2] = "Se debe crear una capa siempre que exista un nivel diferente de abstracci&oacute;n.";
 choices[71][3] = "Los l&iacute;mites de las capas deben elegirse a modo de minimizar el flujo de informaci&oacute;n a trav&eacute;s de las interfaces.";
 answers[71] = choices[71][1];
 units[71] = "100";
 comments[71] = "Id Pregunta: 9693. NULL";


//  Id pregunta: 9898 AÃ±o de creación de pregunta: 2014-01-01
 questions[72]= "73)  Tras la realizaci&oacute;n de un an&aacute;lisis de riesgos de acuerdo con MAGERIT 3.0, el informe que detalla los activos, sus dependencias, las dimensiones en que son valiosos y la estimaci&oacute;n de dicho valor, se denomina";
 choices[72]= new Array();
 choices[72][0] = "modelo de valor.";
 choices[72][1] = "declaraci&oacute;n de aplicabilidad.";
 choices[72][2] = "mapa de riesgos.";
 choices[72][3] = "estado de riesgo.";
 answers[72] = choices[72][0];
 units[72] = "31,32,33";
 comments[72] = "Id Pregunta: 9898. TIC A1, Examen 2013";


//  Id pregunta: 9938 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l es la principal raz&oacute;n por la que en las comunicaciones UMTS y Wi-Fi seutilizan t&eacute;cnicas de expansi&oacute;n del espectro o espectro ensanchado?";
 choices[73]= new Array();
 choices[73][0] = "Para mejorar la resistencia a las interferencias.";
 choices[73][1] = "Para mejorar las seguridad en el acceso al informaci&oacute;n transmitida.";
 choices[73][2] = "Para incrementar la longitud de onda y reducir el consumo energ&eacute;tico.";
 choices[73][3] = "Wi-Fi no utiliza estas t&eacute;cnicas.";
 answers[73] = choices[73][0];
 units[73] = "107, 108";
 comments[73] = "Id Pregunta: 9938. TIC A1, Examen 2013";


//  Id pregunta: 9949 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  Cu&aacute;l de las siguientes palabras y acr&oacute;nimos NO est&aacute; relacionado con Metodolog&iacute;as &Aacute;giles para el desarrollo de software:";
 choices[74]= new Array();
 choices[74][0] = "SCRUM ";
 choices[74][1] = "XP ";
 choices[74][2] = "DSDM ";
 choices[74][3] = "AGILD ";
 answers[74] = choices[74][3];
 units[74] = "79";
 comments[74] = "Id Pregunta: 9949. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10000 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  Las siglas &ldquo;SOAP&rdquo;, en el marco de los servicios web, corresponden a";
 choices[75]= new Array();
 choices[75][0] = "Service Oriented Architecture Protocol.";
 choices[75][1] = "Simple Oriented Access Paradigm.";
 choices[75][2] = "Service Object Architecture Paradigm.";
 choices[75][3] = "Simple Object Access Protocol.";
 answers[75] = choices[75][3];
 units[75] = "69";
 comments[75] = "Id Pregunta: 10000. ";


//  Id pregunta: 10011 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  &iquest;Que disposici&oacute;n legal determina el procedimiento para la expedici&oacute;n del DNI electr&oacute;nico y sus certificados de firma electr&oacute;nica?";
 choices[76]= new Array();
 choices[76][0] = "Ley 11/2007, de 22 de junio.";
 choices[76][1] = "RD 4/2010, de 8 de enero.";
 choices[76][2] = "RD 1553/2005, de 23 de diciembre.";
 choices[76][3] = "Ley 26/2007, de 28 de diciembre.";
 answers[76] = choices[76][2];
 units[76] = "70";
 comments[76] = "Id Pregunta: 10011. ";


//  Id pregunta: 10026 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  El Entity Framework es:";
 choices[77]= new Array();
 choices[77][0] = "Un framework ORM (object-relational mapper) desarrollado por Microsoft e integrado en la plataforma .NET.";
 choices[77][1] = "Una utilidad que permite identificar las funcionalidades de un sistema inform&aacute;tico.";
 choices[77][2] = "Una herramienta de planificaci&oacute;n y gesti&oacute;n del software desarrollado por Microsoft.";
 choices[77][3] = "Un framework orientado a la realizaci&oacute;n de aplicaciones web implementado por Microsoft que respecta el modelo vista controlador.";
 answers[77] = choices[77][0];
 units[77] = "59";
 comments[77] = "Id Pregunta: 10026. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10060 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  En una empresa con 2.000 puestos de usuario en su red local de comunicaciones existen 3 subredes con estos direccionamientos: red A: 10.X.X.X, red B: 192.168.1.X y red C: 195.57.72.X.Teniendo en cuenta que en la ubicaci&oacute;n de los equipos de usuarios y servidores se busca mantener la red operativa y a la vez con la m&aacute;xima seguridad posible, &iquest;d&oacute;nde se ubicar&iacute;an los servidores de Base de Datos de los que se alimentan tanto los servidores web p&uacute;blicos como los de la intranet?";
 choices[78]= new Array();
 choices[78][0] = "Red A.";
 choices[78][1] = "Red B.";
 choices[78][2] = "Red C.";
 choices[78][3] = "Habr&iacute;a dos servidores de bases de datos, el p&uacute;blico en la red C y el privado en la red B.";
 answers[78] = choices[78][1];
 units[78] = "100";
 comments[78] = "Id Pregunta: 10060. TIC A2, libre, Examen 2013";


//  Id pregunta: 10171 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  En el lenguaje SQL, la funci&oacute;n de agregado COUNT, aplicada sobre una columna, contabiliza&hellip;";
 choices[79]= new Array();
 choices[79][0] = "N&ordm; de filas recuperadas por la consulta ";
 choices[79][1] = "N&ordm; de filas recuperadas por la consulta, exceptuando aquellas en que la columna referenciada tenga valor nulo";
 choices[79][2] = "N&ordm; de filas recuperadas por la consulta, incluyendo valores duplicados o nulos en la columna";
 choices[79][3] = "Si la columna sobre la que se aplica tiene valor nulo en todas las filas, la funci&oacute;n COUNT devolver&aacute; &quot;nulo&quot;";
 answers[79] = choices[79][1];
 units[79] = "58";
 comments[79] = "Id Pregunta: 10171. ";


//  Id pregunta: 10228 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  Se&ntilde;ala las respuestas correctas sobre los objetos java.util.Vector y java.util.Hashtable:";
 choices[80]= new Array();
 choices[80][0] = "Un Vector puede almacenar referencias de objetos y tipos de datos primitivos";
 choices[80][1] = "Un Vector almacena referencias de objetos en el orden en que son a&ntilde;adidas";
 choices[80][2] = "A y B son ciertas";
 choices[80][3] = "La Hashtable almacena referencias de objetos en el orden en que son a&ntilde;adidas";
 answers[80] = choices[80][2];
 units[80] = "60";
 comments[80] = "Id Pregunta: 10228. La A es cierta tambi&eacute;n. As&iacute; que se cambia la C por la respuesta actual.";


//  Id pregunta: 10321 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  &iquest;Se pueden controlar el n&uacute;mero de impresiones que un usuario ha realizado en una impresora en red mediante el protocolo de gesti&oacute;n SNMP?";
 choices[81]= new Array();
 choices[81][0] = "Si, siempre y cuando en la MIB de la impresora se contemple este par&aacute;metro.";
 choices[81][1] = "No, necesitar&iacute;a una base de datos externa para almacenarlo.";
 choices[81][2] = "Si, s&oacute;lo mediante instalaci&oacute;n de firmware nuevo en la impresora.";
 choices[81][3] = "Si, pero con protocolos propietarios de la impresora.";
 answers[81] = choices[81][0];
 units[81] = "104";
 comments[81] = "Id Pregunta: 10321. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10351 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  En relaci&oacute;n con las pautas de accesibilidad WCAG 2.0, indique la respuesta correcta:";
 choices[82]= new Array();
 choices[82][0] = "Para cumplir nivel AA, la presentaci&oacute;n visual de texto e im&aacute;genes de texto debe tener una relaci&oacute;n de contraste de, al menos, 4.5:1";
 choices[82][1] = "Lo anterior es cierto, pero para nivel A";
 choices[82][2] = "Lo anterior es cierto, pero para nivel AAA";
 choices[82][3] = "Lo anterior es cierto, pero a&ntilde;adiendo que no aplica a logotipos, textos grandes y textos incidentales";
 answers[82] = choices[82][3];
 units[82] = "39";
 comments[82] = "Id Pregunta: 10351. Consultar WCAG Pauta 1.4.3 Contraste (m&iacute;nimo)";


//  Id pregunta: 10496 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  &iquest;Cual de las siguientes es una implementaci&oacute;n del protocolo LDAP?";
 choices[83]= new Array();
 choices[83][0] = "eDirectory";
 choices[83][1] = "iPlanet";
 choices[83][2] = "Active Directory";
 choices[83][3] = "Todos lo son";
 answers[83] = choices[83][3];
 units[83] = "74, 106";
 comments[83] = "Id Pregunta: 10496. eDirectory es la implementaci&oacute;n de Novell, e iPlanet la de Sun";


//  Id pregunta: 10506 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  &iquest;Cual de los siguientes no es un tipo de conector RJ?";
 choices[84]= new Array();
 choices[84][0] = "RJ-12";
 choices[84][1] = "RJ-45";
 choices[84][2] = "RJ-25";
 choices[84][3] = "Todos los anteriores son tipos de conectores RJ";
 answers[84] = choices[84][3];
 units[84] = "99";
 comments[84] = "Id Pregunta: 10506. ";


//  Id pregunta: 10536 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;Qu&eacute; es la tecnolog&iacute;a TRIM que emplean los discos duros de estado s&oacute;lido?";
 choices[85]= new Array();
 choices[85][0] = "Permite al disco SSD optimizar el almacenamiento de la informaci&oacute;n, de forma que todos los datos est&eacute;n contiguos, mejorando as&iacute; el rendimiento";
 choices[85][1] = "Permite al sistema operativo comunicarle al disco SSD qu&eacute; celdas no est&aacute;n en uso";
 choices[85][2] = "Permite que el disco SSD entre en hibernaci&oacute;n cuando no se usa, mejorando as&iacute; su vida &uacute;til";
 choices[85][3] = "Permite reducir el ruido y calor generado por el disco SSD, as&iacute; como su consumo energ&eacute;tico";
 answers[85] = choices[85][1];
 units[85] = "48";
 comments[85] = "Id Pregunta: 10536. NULL";


//  Id pregunta: 10592 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  La LOPD:";
 choices[86]= new Array();
 choices[86][0] = "Desarrolla el art&iacute;culo 17.4 de la Constituci&oacute;n Espa&ntilde;ola";
 choices[86][1] = "A y C son correctas";
 choices[86][2] = "Es la transposici&oacute;n de la Directiva 95/46/CE";
 choices[86][3] = "A y C son incorrectas.";
 answers[86] = choices[86][2];
 units[86] = "29";
 comments[86] = "Id Pregunta: 10592. ";


//  Id pregunta: 10595 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  La revisi&oacute;n de la solvencia t&eacute;cnica del empresario para la conservaci&oacute;n de la clasificaci&oacute;n debe realizarse:";
 choices[87]= new Array();
 choices[87][0] = "Anualmente";
 choices[87][1] = "Cada tres a&ntilde;os";
 choices[87][2] = "No es necesario revisarla mientras se mantengan las condiciones y circunstancias en que se bas&oacute; la concesi&oacute;n de la clasificaci&oacute;n.";
 choices[87][3] = "S&oacute;lo se revisa a petici&oacute;n de los interesados.";
 answers[87] = choices[87][0];
 units[87] = "41";
 comments[87] = "Id Pregunta: 10595. ";


//  Id pregunta: 10690 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  &iquest;Qu&eacute; reglamento ha considerado la Ley 39/2015 para el establecimiento los sistemas de identificaci&oacute;n como los de firma previstos en dicha Ley?";
 choices[88]= new Array();
 choices[88][0] = "Reglamento (UE) n.&ordm; 910/2014.";
 choices[88][1] = "Reglamento (UE) n.&ordm; 810/2013.";
 choices[88][2] = "Reglamento (UE) n.&ordm; 527/2013.";
 choices[88][3] = "Reglamento (UE) n.&ordm; 810/2014.";
 answers[88] = choices[88][0];
 units[88] = "30";
 comments[88] = "Id Pregunta: 10690. ";


//  Id pregunta: 10773 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Se&ntilde;ale la respuesta correcta. Seg&uacute;n se establece en la Ley de Firma Electr&oacute;nica 59/2003 en su art&iacute;culo 32, las multas establecidas al infractor ser&aacute;n de:";
 choices[89]= new Array();
 choices[89][0] = "Por la comisi&oacute;n de infracciones muy graves, multa de 150.001 a 600.000 euros, por la comisi&oacute;n de infracciones graves, se impondr&aacute; al infractor multa de 30.001 a 150.000 euros y por la comisi&oacute;n de infracciones leves, se impondr&aacute; al infractor una multa por importe de hasta 30.000 euros.";
 choices[89][1] = "Por la comisi&oacute;n de infracciones muy graves, multa de 60.001 a 600.000 euros, por la comisi&oacute;n de infracciones graves, se impondr&aacute; al infractor multa de 6.001 a 60.000 euros y por la comisi&oacute;n de infracciones leves, se impondr&aacute; al infractor una multa por importe de hasta 6.000 euros.";
 choices[89][2] = "Por la comisi&oacute;n de infracciones muy graves, multa de 120.001 a 600.000 euros, por la comisi&oacute;n de infracciones graves, se impondr&aacute; al infractor multa de 12.001 a 120.000 euros y por la comisi&oacute;n de infracciones leves, se impondr&aacute; al infractor una multa por importe de hasta 12.000 euros.";
 choices[89][3] = "Por la comisi&oacute;n de infracciones muy graves, multa de 150.001 a 600.000 euros, por la comisi&oacute;n de infracciones graves, se impondr&aacute; al infractor multa de 15.001 a 150.000 euros y por la comisi&oacute;n de infracciones leves, se impondr&aacute; al infractor una multa por importe de hasta 15.000 euros.";
 answers[89] = choices[89][0];
 units[89] = "30";
 comments[89] = "Id Pregunta: 10773. Examen GSI 2014";


//  Id pregunta: 10829 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Seg&uacute;n M&eacute;trica v3, los flujos de datos de tipo di&aacute;logo, que comunican procesos con almacenes en un DFD (diagrama de flujo de datos) son aquellos que:";
 choices[90]= new Array();
 choices[90][0] = "Representan la utilizaci&oacute;n de los valores de uno o m&aacute;s campos de un almac&eacute;n o la comprobaci&oacute;n de que los valores de los campos seleccionados cumplen unos criterios determinados.";
 choices[90][1] = "Representan una consulta y una actualizaci&oacute;n entre el proceso y el almac&eacute;n.";
 choices[90][2] = "Representan la alteraci&oacute;n de los datos de un almac&eacute;n como consecuencia de la creaci&oacute;n de un nuevo elemento, por eliminaci&oacute;n o modificaci&oacute;n de otros ya existentes.";
 choices[90][3] = "Representan un trigger programado entre el proceso y el almac&eacute;n.";
 answers[90] = choices[90][1];
 units[90] = "86, 81";
 comments[90] = "Id Pregunta: 10829. Examen GSI 2014";


//  Id pregunta: 11070 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  El principal objetivo de la Gesti&oacute;n de la Disponibilidad es &hellip;";
 choices[91]= new Array();
 choices[91][0] = "Monitorizar e informar sobre la disponibilidad de los servicios y componentes";
 choices[91][1] = "Asegurar que los objetivos de los SLA&rsquo;s se consiguen";
 choices[91][2] = "Garantizar niveles de disponibilidad para servicios y componentes";
 choices[91][3] = "Asegurarse que la disponibilidad de los servicios, se consigue o excede seg&uacute;n las necesidades acordadas con el negocio";
 answers[91] = choices[91][3];
 units[91] = "98";
 comments[91] = "Id Pregunta: 11070. ";


//  Id pregunta: 11083 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l es la principal raz&oacute;n para establecer una L&iacute;nea Base (Baseline)?";
 choices[92]= new Array();
 choices[92][0] = "Estandarizar la operaci&oacute;n";
 choices[92][1] = "Conocer el coste de los servicios proporcionados";
 choices[92][2] = "Para que los roles y responsabilidades sean claras";
 choices[92][3] = "Para comparaciones posteriores";
 answers[92] = choices[92][3];
 units[92] = "98";
 comments[92] = "Id Pregunta: 11083. ";


//  Id pregunta: 11228 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l de los siguientes pasos es incorrecto para desplegar un servlet en un servidor web?";
 choices[93]= new Array();
 choices[93][0] = "Indicando en el web.xml la URL a la que responder&aacute; y la clase que lo implementar&aacute;.";
 choices[93][1] = "Implementado la clase del servlet, que implementar&aacute; la interfaz de IhttpServlet.";
 choices[93][2] = "Implementado la clase del servlet, que heredar&aacute; de la clase abstracta HttpServlet.";
 choices[93][3] = "Copiar la clase compilada en el directorio del servidor WEB-INF\classes\.";
 answers[93] = choices[93][1];
 units[93] = "116";
 comments[93] = "Id Pregunta: 11228. ";


//  Id pregunta: 11474 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Seg&uacute;n la Ley 9/2014, indique la respuesta INCORRECTA:";
 choices[94]= new Array();
 choices[94][0] = "El MINUETUR publicar&aacute; procedimientos de resoluci&oacute;n de controversias.";
 choices[94][1] = "El abonado puede decidir si figura en la gu&iacute;a.";
 choices[94][2] = "El cambio de operador con conservaci&oacute;n del n&uacute;mero se realizar&aacute; en un plazo m&aacute;ximo de 72 horas.";
 choices[94][3] = "Los usuarios tiene derecho de acceso gratuito a servicios de emergencia.";
 answers[94] = choices[94][2];
 units[94] = "110";
 comments[94] = "Id Pregunta: 11474. ";


//  Id pregunta: 11555 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  El model COCOMO contempla tres modos distintos de desarrollo del software. El m&aacute;s adecuado para un proyecto de unas 300.000 instrucciones de c&oacute;digo fuente, con unos requisitos extremadamente r&iacute;gidos, es:";
 choices[95]= new Array();
 choices[95][0] = "Modo semilibre.";
 choices[95][1] = "Modo empotrado.";
 choices[95][2] = "Modo org&aacute;nico.";
 choices[95][3] = "Modo avanzado.";
 answers[95] = choices[95][1];
 units[95] = "89";
 comments[95] = "Id Pregunta: 11555. NULL";


//  Id pregunta: 11657 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  El est&aacute;ndar WiFi que permite establecer comunicaciones entre autom&oacute;viles es:";
 choices[96]= new Array();
 choices[96][0] = "IEEE 802.11j";
 choices[96][1] = "IEEE 802.11k";
 choices[96][2] = "IEEE 802.11n";
 choices[96][3] = "IEEE 802.11p";
 answers[96] = choices[96][3];
 units[96] = "107";
 comments[96] = "Id Pregunta: 11657. ";


//  Id pregunta: 11685 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  La capa de Red del modelo OSI equivale a la capa siguiente del modelo TCP:";
 choices[97]= new Array();
 choices[97][0] = "Internet";
 choices[97][1] = "Application";
 choices[97][2] = "Red";
 choices[97][3] = "Data Link";
 answers[97] = choices[97][0];
 units[97] = "100";
 comments[97] = "Id Pregunta: 11685. NULL";


//  Id pregunta: 11693 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Qu&eacute; es PAT?";
 choices[98]= new Array();
 choices[98][0] = "Port Address Translation";
 choices[98][1] = "Protocol Access Translation";
 choices[98][2] = "Port Acknowledge Timeout";
 choices[98][3] = "PDU access token";
 answers[98] = choices[98][0];
 units[98] = "111";
 comments[98] = "Id Pregunta: 11693. NULL";


//  Id pregunta: 11723 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Qu&eacute; mensaje DHCP se utiliza para localizar cualquier servidor DHCP disponible en la red?";
 choices[99]= new Array();
 choices[99][0] = "DHCPREQUEST";
 choices[99][1] = "DHCPACK";
 choices[99][2] = "DHCPDISCOVER";
 choices[99][3] = "DHCPOFFER";
 answers[99] = choices[99][2];
 units[99] = "102";
 comments[99] = "Id Pregunta: 11723. NULL";


