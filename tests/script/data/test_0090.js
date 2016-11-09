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

//  Id pregunta: 206 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  En el modelo de Donovan las organizaciones se clasifican en:";
 choices[0]= new Array();
 choices[0][0] = "Dinosaurio, gran hermano, mano vigilante, network, cluster";
 choices[0][1] = "Dinosaurio, gran hermano, perro vigilante, network, cluster";
 choices[0][2] = "Dinosaurio, gran hermano, mano amiga, perro vigilante, network";
 choices[0][3] = "Dinosaurio, gran hermano, mano amiga, perro vigilante, cluster";
 answers[0] = choices[0][2];
 units[0] = "22";
 comments[0] = "Id Pregunta: 206. donovan - nolan";


//  Id pregunta: 213 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  En la estructura de un sistema de informaci&oacute;n:";
 choices[1]= new Array();
 choices[1][0] = "En la dimensi&oacute;n vertical las funciones se subdividen en aplicaciones o procedimientos";
 choices[1][1] = "En la dimensi&oacute;n horizontal las funciones se subdividen en aplicaciones o procedimientos";
 choices[1][2] = "La dimensi&oacute;n vertical se subdivide en los niveles operacional, t&aacute;ctico y estrat&eacute;gico";
 choices[1][3] = "Las respuestas &lsquo;b&rsquo; y &lsquo;c&rsquo; son correctas";
 answers[1] = choices[1][3];
 units[1] = "21";
 comments[1] = "Id Pregunta: 213. ";


//  Id pregunta: 249 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  Entendemos por sistema de informaci&oacute;n:";
 choices[2]= new Array();
 choices[2][0] = "Conjunto de procedimientos autom&aacute;ticos y de funciones dirigidas a la recogida, elaboraci&oacute;n, evaluaci&oacute;n, almacenamiento, recuperaci&oacute;n, condensaci&oacute;n y distribuci&oacute;n de informaciones dentro de una organizaci&oacute;n";
 choices[2][1] = "Conjunto de procedimientos manuales y de funciones dirigidas a la recogida, elaboraci&oacute;n, evaluaci&oacute;n, almacenamiento, recuperaci&oacute;n, condensaci&oacute;n y distribuci&oacute;n de informaciones dentro de una organizaci&oacute;n";
 choices[2][2] = "Conjunto de procedimientos, manuales y autom&aacute;ticos, y de funciones dirigidas a la recogida, elaboraci&oacute;n, almacenamiento, recuperaci&oacute;n, condensaci&oacute;n, distribuci&oacute;n y evaluaci&oacute;n de informaciones dentro de una organizaci&oacute;n";
 choices[2][3] = "Conjunto de procedimientos, manuales y autom&aacute;ticos, y de funciones dirigidas a la recogida, elaboraci&oacute;n, evaluaci&oacute;n, almacenamiento, recuperaci&oacute;n, condensaci&oacute;n y distribuci&oacute;n de informaciones dentro de una organizaci&oacute;n";
 answers[2] = choices[2][3];
 units[2] = "21";
 comments[2] = "Id Pregunta: 249. ";


//  Id pregunta: 279 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  La auditor&iacute;a de sistemas de informaci&oacute;n se puede considerar como:";
 choices[3]= new Array();
 choices[3][0] = "Una auditor&iacute;a de eficiencia";
 choices[3][1] = "Una auditor&iacute;a de eficacia";
 choices[3][2] = "Una auditor&iacute;a operativa";
 choices[3][3] = "Una auditor&iacute;a de legalidad";
 answers[3] = choices[3][2];
 units[3] = "31,32";
 comments[3] = "Id Pregunta: 279. ";


//  Id pregunta: 508 AÃ±o de creación de pregunta: 2003-01-01
 questions[4]= "5)  La Ley Org&aacute;nica 15/1999 establece, en el apartado 2 del art&iacute;culo 22, las condiciones bajo las que las Fuerzas y Cuerpos de Seguridad pueden tratar datos personales con fines policiales sin estar sujetos a la ley:";
 choices[4]= new Array();
 choices[4][0] = "Cuando cuenten con la preceptiva autorizaci&oacute;n del Ministerio del Interior";
 choices[4][1] = "No existen excepciones. Se requiere obligatoriamente el consentimiento expreso del afectado";
 choices[4][2] = "Cuando resulte necesario para la prevenci&oacute;n de un peligro real para la seguridad p&uacute;blica o para la represi&oacute;n de infracciones penales";
 choices[4][3] = "Cuando lo autorice un juez";
 answers[4] = choices[4][2];
 units[4] = "29";
 comments[4] = "Id Pregunta: 508. ";


//  Id pregunta: 580 AÃ±o de creación de pregunta: 2006-01-01
 questions[5]= "6)  Desde el punto de vista funcional la organizaci&oacute;n reticular se caracteriza por";
 choices[5]= new Array();
 choices[5][0] = "prescindir casitotalmente de los formalismos.";
 choices[5][1] = "Lascomunicaciones son de todos con todos, sobre todo por niveles.";
 choices[5][2] = "Las comunicaciones suelen estar muy formalizadas y documentadas deacuerdo a normas estrictas.";
 choices[5][3] = "La mayor&iacute;a de las comunicaciones, por no decir todas, se producen de jefe a subordinados";
 answers[5] = choices[5][1];
 units[5] = "26";
 comments[5] = "Id Pregunta: 580. ";


//  Id pregunta: 657 AÃ±o de creación de pregunta: 2006-01-01
 questions[6]= "7)  El Sistema de Soporte a la Decisi&oacute;n SSD-AAPP es una aplicaci&oacute;n inform&aacute;tica dise&ntilde;ada para:";
 choices[6]= new Array();
 choices[6][0] = "Ayudar a la selecci&oacute;n de la mejor oferta posible de entre las obtenidas en cualquier proceso de contrataci&oacute;n p&uacute;blica relacionada con Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones";
 choices[6][1] = "Ayudar a la selecci&oacute;n de la mejor oferta posible de entre las obtenidas en cualquier proceso de contrataci&oacute;n p&uacute;blica a trav&eacute;s del Cat&aacute;logo de Bienes de Adquisici&oacute;n Centralizada";
 choices[6][2] = "Ayudar a la selecci&oacute;n de la mejor oferta posible de entre las obtenidas en cualquier proceso de contrataci&oacute;n p&uacute;blica";
 choices[6][3] = "Ayudar a la selecci&oacute;n de la mejor oferta posible de entre las obtenidas en un proceso de contrataci&oacute;n p&uacute;blica a trav&eacute;s de un procedimiento negociado por exclusividad";
 answers[6] = choices[6][2];
 units[6] = "34";
 comments[6] = "Id Pregunta: 657. ";


//  Id pregunta: 1239 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  La propiedad de una funci&oacute;n res&uacute;men por la que dado un mensaje (x), es computacionalmente imposible encontrar otro mensaje (x&rsquo;) cuya funci&oacute;n resumen sea igual a la funci&oacute;n res&uacute;men del primer mensaje (x), corresponde a:";
 choices[7]= new Array();
 choices[7][0] = "Resistencia a la preimagen";
 choices[7][1] = "Resistencia a la segunda preimagen";
 choices[7][2] = "Resistencia a colisi&oacute;n";
 choices[7][3] = "Resistencia a la igualdad";
 answers[7] = choices[7][1];
 units[7] = "72";
 comments[7] = "Id Pregunta: 1239. ";


//  Id pregunta: 1315 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Respecto a la compatibilidad entre Windows y Linux:";
 choices[8]= new Array();
 choices[8][0] = "Windows no puede ejecutarse bajo Linux";
 choices[8][1] = "Linux no puede ejecutarse bajo Windows";
 choices[8][2] = "Ambos pueden ejecutarse simult&aacute;neamente de forma nativa";
 choices[8][3] = "Existen programas que permiten la ejecuci&oacute;n de cada uno de estos sistemas operativos como si fuera un programa embebido en el otro sistema operativo";
 answers[8] = choices[8][3];
 units[8] = "53,55";
 comments[8] = "Id Pregunta: 1315. ";


//  Id pregunta: 1325 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  SAN:";
 choices[9]= new Array();
 choices[9][0] = "Es un fabricante americano de hardware y software";
 choices[9][1] = "Es una red de fibra &oacute;ptica dedicada para el almacenamiento";
 choices[9][2] = "Es una red de &aacute;rea local muy peque&ntilde;a (Simple Area Network)";
 choices[9][3] = "Corresponde con la tecnolog&iacute;a Software Adaptative Networking que permite que los nodos de conmutaci&oacute;n de las redes tengan procesamiento inteligente liberando a los clientes de incompatibilidades de protocolos y de gran cantidad de procesamiento";
 answers[9] = choices[9][1];
 units[9] = "48";
 comments[9] = "Id Pregunta: 1325. ";


//  Id pregunta: 1328 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Se denomina firmware a:";
 choices[10]= new Array();
 choices[10][0] = "El software que suele suministrar el fabricante con sus equipos";
 choices[10][1] = "El c&oacute;digo de bajo nivel que es com&uacute;n a todos los ordenadores";
 choices[10][2] = "El componente f&iacute;sico que permite que el ordenador ejecute instrucciones m&aacute;quina";
 choices[10][3] = "Programa empotrado que establece la l&oacute;gica de bajo nivel que controla los circuitos electr&oacute;nicos de un dispositivo.";
 answers[10] = choices[10][3];
 units[10] = "47";
 comments[10] = "Id Pregunta: 1328. ";


//  Id pregunta: 1348 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Se&ntilde;ale la respuesta correcta. La diferencia entre un procesador con tecnolog&iacute;a RISC y tecnolog&iacute;a CISC es:";
 choices[11]= new Array();
 choices[11][0] = "El RISC tiene m&aacute;s registros";
 choices[11][1] = "El CISC tiene un juego de instrucciones m&aacute;s amplio";
 choices[11][2] = "El RISC es m&aacute;s r&aacute;pido en la ejecuci&oacute;n de instrucciones";
 choices[11][3] = "Todas las respuestas anteriores son ciertas";
 answers[11] = choices[11][3];
 units[11] = "46";
 comments[11] = "Id Pregunta: 1348. ";


//  Id pregunta: 1479 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Se&ntilde;ale cu&aacute;l de los siguientes es un principio de dise&ntilde;o RISC:";
 choices[12]= new Array();
 choices[12][0] = "Un amplio juego de instrucciones facilita el dise&ntilde;o de compiladores";
 choices[12][1] = "El modelo de ejecuci&oacute;n de pila es superior al de registros";
 choices[12][2] = "Los juegos de instrucciones amplios reducen el tama&ntilde;o de los programas";
 choices[12][3] = "No debe emplearse la microprogramaci&oacute;n";
 answers[12] = choices[12][3];
 units[12] = "46";
 comments[12] = "Id Pregunta: 1479. ";


//  Id pregunta: 1528 AÃ±o de creación de pregunta: 2003-01-01
 questions[13]= "14)  El sistema GPS (Global Positioning System), &iquest;de cu&aacute;ntos  sat&eacute;lites operativos se compone?";
 choices[13]= new Array();
 choices[13][0] = "16.";
 choices[13][1] = "24.";
 choices[13][2] = "32.";
 choices[13][3] = "64.";
 answers[13] = choices[13][1];
 units[13] = "67";
 comments[13] = "Id Pregunta: 1528. Junta Andaluc&iacute;a";


//  Id pregunta: 1580 AÃ±o de creación de pregunta: 2004-01-01
 questions[14]= "15)  Sobre el algoritmo de cifrado RSA en no es cierto que";
 choices[14]= new Array();
 choices[14][0] = "Es utilizado para firmar digitalmente";
 choices[14][1] = "Fue propuesto por Diffie y Hellman";
 choices[14][2] = "Lo que se cifra con la clave privada se descifra con la p&uacute;blica";
 choices[14][3] = "Lo que se cifra con la clave p&uacute;blica se descifra con la privada";
 answers[14] = choices[14][1];
 units[14] = "72";
 comments[14] = "Id Pregunta: 1580. Tanenbaum";


//  Id pregunta: 1804 AÃ±o de creación de pregunta: 2006-01-01
 questions[15]= "16)  Se&ntilde;ale la afirmaci&oacute;n que sea FALSA acerca de la educaci&oacute;n virtual (e-learning)";
 choices[15]= new Array();
 choices[15][0] = "La educaci&oacute;n virtual exige a los alumnos m&aacute;s esfuerzo en aprender las t&eacute;cnicas que en el contenido";
 choices[15][1] = "Lo realmente complejo en la educaci&oacute;n virtual es la instalaci&oacute;n de las herramientas necesarias";
 choices[15][2] = "La educaci&oacute;n virtual no rivaliza con la educaci&oacute;n presencial";
 choices[15][3] = "La educaci&oacute;n virtual permite la evaluaci&oacute;n de los alumnos de forma completamente fiable";
 answers[15] = choices[15][3];
 units[15] = "66";
 comments[15] = "Id Pregunta: 1804. ";


//  Id pregunta: 1913 AÃ±o de creación de pregunta: 2006-01-01
 questions[16]= "17)  Dentro del an&aacute;lisis orientado a objetos, la cualidad que se refiere al tiempo durante el cual un objeto permanece accesible en la memoria del ordenador (principal o secundaria), se denomina:";
 choices[16]= new Array();
 choices[16][0] = "Reusabilidad";
 choices[16][1] = "Encapsulaci&oacute;n";
 choices[16][2] = "Abstracci&oacute;n";
 choices[16][3] = "Persistencia";
 answers[16] = choices[16][3];
 units[16] = "82";
 comments[16] = "Id Pregunta: 1913. ";


//  Id pregunta: 2112 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  &iquest; En qu&eacute; consiste la teor&iacute;a de la Calidad/Coste  aplicada a la implantaci&oacute;n de la calidad?:";
 choices[17]= new Array();
 choices[17][0] = "El coste de producci&oacute;n aumenta libremente con el aumento de la calidad";
 choices[17][1] = "El coste de producci&oacute;n aumenta exponencialmente con el aumento de la calidad";
 choices[17][2] = "El coste de producci&oacute;n aumenta linealmente con el aumento de la calidad";
 choices[17][3] = "El coste de producci&oacute;n aumenta diferencialmente con el aumento de la calidad";
 answers[17] = choices[17][1];
 units[17] = "88";
 comments[17] = "Id Pregunta: 2112. ";


//  Id pregunta: 2225 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  A la extensi&oacute;n por la cual un programa puede ser usado en otras aplicaciones se llama:";
 choices[18]= new Array();
 choices[18][0] = "Portabilidad";
 choices[18][1] = "Reusabilidad";
 choices[18][2] = "Interoperatividad";
 choices[18][3] = "Mantenibilidad";
 answers[18] = choices[18][1];
 units[18] = "88";
 comments[18] = "Id Pregunta: 2225. ";


//  Id pregunta: 2312 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  En el modelo en cascada del ciclo de vida de un &quot;software&quot;, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?:";
 choices[19]= new Array();
 choices[19][0] = "La fase de especificaci&oacute;n de requisitos depende del entorno tecnol&oacute;gico del Sistema de Informaci&oacute;n (SI)";
 choices[19][1] = "Se puede pasar por las fases de planificaci&oacute;n, especificaci&oacute;n de requisitos, dise&ntilde;o, codificaci&oacute;n y pruebas, sin necesidad de completar cada una de ellas";
 choices[19][2] = "La fase de dise&ntilde;o se denomina an&aacute;lisis funcional";
 choices[19][3] = "La decisi&oacute;n del paso de una fase a la siguiente se toma en funci&oacute;n de si la documentaci&oacute;n asociada a esa fase est&aacute; completa o no";
 answers[19] = choices[19][3];
 units[19] = "76";
 comments[19] = "Id Pregunta: 2312. ";


//  Id pregunta: 2687 AÃ±o de creación de pregunta: 2003-01-01
 questions[20]= "21)  Teniendo en cuenta la agudeza visual humana y la unidad m&iacute;nima de resoluci&oacute;n, los procesos de tratamiento digital de imagen deber&iacute;an llevarse a cabo entre:";
 choices[20]= new Array();
 choices[20][0] = "25 &micro;m y 100 &micro;m.";
 choices[20][1] = "0,4 &micro;m y 0,7 &micro;m.";
 choices[20][2] = "0,3 &micro;m y 1 mm.";
 choices[20][3] = "Ninguna de las anteriores.";
 answers[20] = choices[20][0];
 units[20] = "93";
 comments[20] = "Id Pregunta: 2687. NULL";


//  Id pregunta: 2710 AÃ±o de creación de pregunta: 2003-01-01
 questions[21]= "22)  Una de estas no es una propiedad de un Sistema de Gesti&oacute;n Documental:";
 choices[21]= new Array();
 choices[21][0] = "Establecer m&eacute;todos seguros de distribuci&oacute;n de documentos interna o externamente a la organizaci&oacute;n.";
 choices[21][1] = "Recoger documentaci&oacute;n de otros profesionales o colaboradores.";
 choices[21][2] = "El env&iacute;o de documentos por fax o e-mail de forma directa.";
 choices[21][3] = "Gestionar millones de registros y recuperarlos en pocos segundos.";
 answers[21] = choices[21][1];
 units[21] = "95";
 comments[21] = "Id Pregunta: 2710. NULL";


//  Id pregunta: 2873 AÃ±o de creación de pregunta: 2006-01-01
 questions[22]= "23)  &iquest;C&oacute;mo se llama la norma europea que recoge las especificaciones para la gesti&oacute;n de documentos electr&oacute;nicos de archivo?";
 choices[22]= new Array();
 choices[22][0] = "MoReq";
 choices[22][1] = "IDABC";
 choices[22][2] = "ISAD(G)";
 choices[22][3] = "EDMS";
 answers[22] = choices[22][0];
 units[22] = "95";
 comments[22] = "Id Pregunta: 2873. NULL";


//  Id pregunta: 2923 AÃ±o de creación de pregunta: 2004-01-01
 questions[23]= "24)  &iquest;Es posible hacer convivir varios protocolos incompatibles entre s&iacute; sobre una misma red?";
 choices[23]= new Array();
 choices[23][0] = "S&iacute;, utilizando tunneling o encapsulado de protocolos";
 choices[23][1] = "S&iacute;, pero s&oacute;lo si los protocolos pertenecen a la familia OSI";
 choices[23][2] = "S&iacute;, pero s&oacute;lo si los protocolos pertenecen a la familia TCP/IP";
 choices[23][3] = "No";
 answers[23] = choices[23][0];
 units[23] = "100";
 comments[23] = "Id Pregunta: 2923. Similar a examen TIC SS A 2003";


//  Id pregunta: 3028 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  &iquest;Qu&eacute; son dentro del entorno de aplicaciones basadas en arquitectura Internet los plug-ins?:";
 choices[24]= new Array();
 choices[24][0] = "Programas que desarrolla el usuario para personalizar el acceso a la informaci&oacute;n del servidor";
 choices[24][1] = "Programas que se agregan al navegador e interact&uacute;an con &eacute;l, con las p&aacute;ginas web y con los recursos locales";
 choices[24][2] = "Posibilidad de a&ntilde;adir nuevo hardware a trav&eacute;s del navegador de manera autom&aacute;tica";
 choices[24][3] = "Ninguna de las anteriores";
 answers[24] = choices[24][1];
 units[24] = "114";
 comments[24] = "Id Pregunta: 3028. ";


//  Id pregunta: 3041 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  &iquest;Entre qu&eacute; niveles de la arquitectura TCP/IP se encuentra el protocolo SSL (Secure Socket Layer)?:";
 choices[25]= new Array();
 choices[25][0] = "Por encima del nivel de aplicaci&oacute;n";
 choices[25][1] = "Al mismo nivel que el nivel de aplicaci&oacute;n";
 choices[25][2] = "Entre el nivel de aplicaci&oacute;n y TCP";
 choices[25][3] = "Entre TCP e IP";
 answers[25] = choices[25][2];
 units[25] = "100";
 comments[25] = "Id Pregunta: 3041. NULL";


//  Id pregunta: 3159 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  &iquest;Cu&aacute;l de las siguientes afirmaciones referidas al modelo de referencia de interconexi&oacute;n de sistemas abiertos de ISO es err&oacute;nea?:";
 choices[26]= new Array();
 choices[26][0] = "El nivel de presentaci&oacute;n da servicios al nivel de aplicaci&oacute;n y solicita revisi&oacute;n a trav&eacute;s de primitivas al nivel de sesi&oacute;n";
 choices[26][1] = "El bloque de transporte est&aacute; formado por los niveles f&iacute;sico, enlace, red y transporte";
 choices[26][2] = "El protocolo de nivel de presentaci&oacute;n regula el di&aacute;logo entre dos entes de nivel 5";
 choices[26][3] = "El nivel de red da servicio al nivel de transporte y solicita servicios del nivel enlace";
 answers[26] = choices[26][2];
 units[26] = "100";
 comments[26] = "Id Pregunta: 3159. Los tres niveles inferiores (f&iacute;sico, de enlace, de red) constituyen el bloque de transmisi&oacute;n. (depenndientes de la red de conmutaci&oacute;n) y los tres superiores est&aacute;n orientados a la aplicaci&oacute;n (funciones de comunicaci&oacute;n)";


//  Id pregunta: 3212 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  El equipo que se encuentra en ambos extremos de una l&iacute;nea de transmisi&oacute;n, se denomina, seg&uacute;n la nomenclatura espa&ntilde;ola de la ITU-T:";
 choices[27]= new Array();
 choices[27][0] = "ETC o equipo terminal de datos";
 choices[27][1] = "ETD o equipo terminal de datos";
 choices[27][2] = "ETCD o equipo terminal del circuito digital";
 choices[27][3] = "ETCD o equipo terminal del circuito de datos";
 answers[27] = choices[27][3];
 units[27] = "97";
 comments[27] = "Id Pregunta: 3212. NULL";


//  Id pregunta: 3221 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares define un anillo l&oacute;gico sobre un bus f&iacute;sico?:";
 choices[28]= new Array();
 choices[28][0] = "802.2";
 choices[28][1] = "802.3";
 choices[28][2] = "802.4";
 choices[28][3] = "802.5";
 answers[28] = choices[28][2];
 units[28] = "100";
 comments[28] = "Id Pregunta: 3221. NULL";


//  Id pregunta: 3265 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  &iquest;En qu&eacute; bandas de frecuencias se han concedido licencias LMDS en Espa&ntilde;a?:";
 choices[29]= new Array();
 choices[29][0] = "450 y 900 MHz";
 choices[29][1] = "450 y 900 GHz";
 choices[29][2] = "3,5 y 26 MHz";
 choices[29][3] = "3,5 y 26 GHz";
 answers[29] = choices[29][3];
 units[29] = "107";
 comments[29] = "Id Pregunta: 3265. NULL";


//  Id pregunta: 3473 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  El subnivel MAC del nivel de enlace de datos de la pila de protocolos OSI proporciona:";
 choices[30]= new Array();
 choices[30][0] = "Las direcciones de los puntos de acceso al servicio";
 choices[30][1] = "Servicios orientados a la conexi&oacute;n";
 choices[30][2] = "Servicios orientados a la conexi&oacute;n con reconocimiento";
 choices[30][3] = "La direcci&oacute;n f&iacute;sica de un dispositivo de la red";
 answers[30] = choices[30][3];
 units[30] = "100";
 comments[30] = "Id Pregunta: 3473. NULL";


//  Id pregunta: 3715 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  Los circuitos de la red telef&oacute;nica conmutada anal&oacute;gica, vistos desde el interfaz LT - ETCD...:";
 choices[31]= new Array();
 choices[31][0] = "No est&aacute;n limitados en banda porque no hay multiplexaci&oacute;n de se&ntilde;ales";
 choices[31][1] = "Est&aacute;n limitados a una banda entre 300 Hz y 3.400 Hz";
 choices[31][2] = "Est&aacute;n limitados a 64 kbps";
 choices[31][3] = "Est&aacute;n limitados a 144 kbps";
 answers[31] = choices[31][1];
 units[31] = "108";
 comments[31] = "Id Pregunta: 3715. ";


//  Id pregunta: 3896 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  En una red VoIP el elemento llamado &quot;SoftSwitch&quot; es el encargado de:  ";
 choices[32]= new Array();
 choices[32][0] = "Permitir la comunicaci&oacute;n entre la Red VoIP y las Redes tradicionales de Conmutaci&oacute;n de Circuitos";
 choices[32][1] = "Proporcionar una interfaz hacia la Red VoIP y una o mas interfaces tradicionales de voz hacia el cliente ";
 choices[32][2] = "Recibir la se&ntilde;alizaci&oacute;n de las llamadas y de enrutarlas hacia su destino";
 choices[32][3] = "Ninguna de las respuestas anteriores es cierta";
 answers[32] = choices[32][2];
 units[32] = "100";
 comments[32] = "Id Pregunta: 3896. NULL";


//  Id pregunta: 3978 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  Se&ntilde;ale la respuesta falsa sobre el coaxial tipo &quot;thick&quot;:";
 choices[33]= new Array();
 choices[33][0] = "Utiliza un conector BNC.";
 choices[33][1] = "Su impedancia es de 50 Ohm";
 choices[33][2] = "La longitud m&aacute;xima del segmento es de 500 m.";
 choices[33][3] = "Todas son falsas";
 answers[33] = choices[33][0];
 units[33] = "99";
 comments[33] = "Id Pregunta: 3978. ";


//  Id pregunta: 4224 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  Las SDU (Service Data Unit) son unidades de datos";
 choices[34]= new Array();
 choices[34][0] = "Que se intercambian entre  entidades hom&oacute;logas";
 choices[34][1] = "Que proporcionan informaci&oacute;n de control entre niveles";
 choices[34][2] = "Correspondientes a las primitivas de comunicaci&oacute;n";
 choices[34][3] = "Que deben ser tratados por el nivel superior (N+1) de forma transparente";
 answers[34] = choices[34][3];
 units[34] = "100";
 comments[34] = "Id Pregunta: 4224. ";


//  Id pregunta: 4321 AÃ±o de creación de pregunta: 2007-01-01
 questions[35]= "36)  Los modelos de COCOMO (b&aacute;sico, intermedio y avanzado), est&aacute;n definidos para tres modos de desarrollo de proyectos software. Indique cu&aacute;l de los siguientes conceptos no identifica alguno de estos modos:";
 choices[35]= new Array();
 choices[35][0] = "Modo encapsulado.";
 choices[35][1] = "Modo semiacoplado.";
 choices[35][2] = "Modo org&aacute;nico.";
 choices[35][3] = "Modo empotrado.";
 answers[35] = choices[35][0];
 units[35] = "89";
 comments[35] = "Id Pregunta: 4321. NULL";


//  Id pregunta: 4380 AÃ±o de creación de pregunta: 2007-01-01
 questions[36]= "37)  Un sistema pide a los usuarios c&oacute;digo de usuario y clave para identificarse. Los datos de los usuarios se almacenan en la base de datos, a excepci&oacute;n de las claves que se guardan en un fichero encriptado del sistema, que se actualiza cuando los usuarios cambian su clave. Este sistema ha demostrado ser lento y poco seguro. Se&ntilde;ale la opci&oacute;n m&aacute;s adecuada para mejorarlo:";
 choices[36]= new Array();
 choices[36][0] = "Indexar el fichero para que el acceso sea m&aacute;s r&aacute;pido.";
 choices[36][1] = "Guardar las claves encriptadas en un campo de la tabla de usuarios.";
 choices[36][2] = "Dividir el fichero en varios ficheros para mejorar el acceso, guardando en un campo de la tabla de usuarios el nombre del fichero donde reside la clave de cada usuario.";
 choices[36][3] = "No guardar la clave, gener&aacute;ndola mediante una funci&oacute;n hash aplicada al c&oacute;digo.";
 answers[36] = choices[36][1];
 units[36] = "73";
 comments[36] = "Id Pregunta: 4380. ";


//  Id pregunta: 4637 AÃ±o de creación de pregunta: 2007-01-01
 questions[37]= "38)  Es un producto de entrada y salida del proceso Dise&ntilde;o de Sistema de Informaci&oacute;n de Metrica V3";
 choices[37]= new Array();
 choices[37][0] = "dise&ntilde;o de la arquitectura del sistema";
 choices[37][1] = "resultado del an&aacute;lisis de consistencia";
 choices[37][2] = "modelo f&iacute;sico de datos";
 choices[37][3] = "modelo de casos de uso";
 answers[37] = choices[37][1];
 units[37] = "86";
 comments[37] = "Id Pregunta: 4637. NULL";


//  Id pregunta: 4732 AÃ±o de creación de pregunta: 2007-01-01
 questions[38]= "39)  En el servidor http Apache al configurarlo como HostnameLookUps On lo que hacemos es:";
 choices[38]= new Array();
 choices[38][0] = "Ver si la petici&oacute;n origen proviene de un sistema conocido a trav&eacute;s del fichero /etc/hosts para almacenar el nombre en el fichero de log";
 choices[38][1] = "Ver si la petici&oacute;n origen proviene de un sistema conocido a trav&eacute;s del servicio dns inverso para almacenar el nombre en el fichero de log";
 choices[38][2] = "Ver si la petici&oacute;n origen tiene un nombre asociado a trav&eacute;s del o los servicios de resoluci&oacute;n de nombres ip para almacenar el nombre en el fichero del log";
 choices[38][3] = "Almacena en el log la ip y tambi&eacute;n el nombre del sistema origen de la petici&oacute;n http";
 answers[38] = choices[38][2];
 units[38] = "112";
 comments[38] = "Id Pregunta: 4732. Examen 2006 JCYL";


//  Id pregunta: 4798 AÃ±o de creación de pregunta: 2009-01-01
 questions[39]= "40)  Seg&uacute;n el RD 1720/2007, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal, &iquest;c&oacute;mo se define al &quot;Responsable del fichero o tratamiento&quot;?";
 choices[39]= new Array();
 choices[39][0] = "Persona f&iacute;sica o jur&iacute;dica, de naturaleza p&uacute;blica o privada, u &oacute;rgano administrativo, que s&oacute;lo o conjuntamente con otros decida sobre la finalidad, contenido y uso del tratamiento, aunque no lo realizase materialmente. Podr&aacute;n ser tambi&eacute;n responsables del fichero o del tratamiento los entes sin personalidad jur&iacute;dica que act&uacute;en en el tr&aacute;fico como sujetos diferenciados";
 choices[39][1] = "Persona f&iacute;sica o jur&iacute;dica, de naturaleza p&uacute;blica o privada, u &oacute;rgano administrativo, que s&oacute;lo o conjuntamente con otros decida sobre la finalidad, contenido y uso del tratamiento, aunque no lo realizase materialmente. No podr&aacute;n ser responsables del fichero o del tratamiento los entes sin personalidad jur&iacute;dica que act&uacute;en en el tr&aacute;fico como sujetos diferenciados";
 choices[39][2] = "Persona jur&iacute;dica, de naturaleza p&uacute;blica o privada, u &oacute;rgano administrativo, que s&oacute;lo o conjuntamente con otros decida sobre la finalidad, contenido y uso del tratamiento, aunque no lo realizase materialmente. Podr&aacute;n ser tambi&eacute;n responsables del fichero o del tratamiento los entes sin personalidad jur&iacute;dica que act&uacute;en en el tr&aacute;fico como sujetos diferenciados";
 choices[39][3] = "Persona f&iacute;sica, de naturaleza p&uacute;blica o privada, u &oacute;rgano administrativo, que s&oacute;lo o conjuntamente con otros decida sobre la finalidad, contenido y uso del tratamiento, aunque no lo realizase materialmente. Podr&aacute;n ser responsables del fichero o del tratamiento los entes sin personalidad jur&iacute;dica que act&uacute;en en el tr&aacute;fico como sujetos diferenciados";
 answers[39] = choices[39][0];
 units[39] = "29";
 comments[39] = "Id Pregunta: 4798. ";


//  Id pregunta: 4866 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  El atributo de posicionamiento de un applet &quot;absbottom&quot;:";
 choices[40]= new Array();
 choices[40][0] = "Coloca el applet en el margen izquierdo de la p&aacute;gina, y el texto que le siga se sit&uacute;a en el espacio situado asu derecha";
 choices[40][1] = "Coloca el applet en el margen derecho de la p&aacute;gina, y el texto que le siga se sit&uacute;a en el espacio situado a suizquierda";
 choices[40][2] = "Coloca la parte inferior del applet coincidiendo con el centro de la l&iacute;nea actual";
 choices[40][3] = "Coloca la parte superior del applet coincidiendo con la parte superior del texto en la l&iacute;nea actual";
 answers[40] = choices[40][2];
 units[40] = "116";
 comments[40] = "Id Pregunta: 4866. ";


//  Id pregunta: 5016 AÃ±o de creación de pregunta: 2003-01-01
 questions[41]= "42)  Indique cu&aacute;l es el puerto para la conexi&oacute;n de datos que abrir&aacute; el cliente en el modo PASV del Protocolo deTransferencia de Ficheros FTP (&quot;File Transfer Protocol&quot;):";
 choices[41]= new Array();
 choices[41][0] = "El puerto 20";
 choices[41][1] = "El puerto 21";
 choices[41][2] = "Un puerto por encima de 1023 elegido al azar por el cliente";
 choices[41][3] = "Un puerto por encima de 1023 elegido al azar por el servidor";
 answers[41] = choices[41][3];
 units[41] = "112";
 comments[41] = "Id Pregunta: 5016. Examen TIC A 2007- Anulada por el Tribunal";


//  Id pregunta: 5107 AÃ±o de creación de pregunta: 2003-01-01
 questions[42]= "43)  La norma ISO 9001 cuando se desarrolla, implementa y mejora la eficacia de un sistema de gesti&oacute;n de calidad promueve un enfoque:";
 choices[42]= new Array();
 choices[42][0] = "Basado en procesos.";
 choices[42][1] = "Basado en tareas.";
 choices[42][2] = "Basado en el usuario.";
 choices[42][3] = "Basado en recursos.";
 answers[42] = choices[42][0];
 units[42] = "87";
 comments[42] = "Id Pregunta: 5107. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5141 AÃ±o de creación de pregunta: 2003-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l es el objetivo de la Gesti&oacute;n de Configuraci&oacute;n del Software?";
 choices[43]= new Array();
 choices[43][0] = "Gestionar de forma autom&aacute;tica la creaci&oacute;n, modificaci&oacute;n y borrado de usuarios en un sistema de informaci&oacute;n.";
 choices[43][1] = "Mantener la integridad de los productos que se obtienen a lo largo del desarrollo de los sistemas de informaci&oacute;n, garantizando que no se realizan cambios incontrolados.";
 choices[43][2] = "Permitir que los programadores de un sistema de informaci&oacute;n conozcan en todo momento los cambios de la configuraci&oacute;n f&iacute;sica que se vaya produciendo a nivel de sistema operativo.";
 choices[43][3] = "Permitir gestionar los recursos que se deidcan a cada tarea de desarrollo de los distintos m&oacute;dulos del sistema.";
 answers[43] = choices[43][1];
 units[43] = "79";
 comments[43] = "Id Pregunta: 5141. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5285 AÃ±o de creación de pregunta: 2003-01-01
 questions[44]= "45)  Indique cu&aacute;l de los siguientes no es un objeto integrado de ASP:";
 choices[44]= new Array();
 choices[44][0] = "Client";
 choices[44][1] = "Application";
 choices[44][2] = "Server";
 choices[44][3] = "Request";
 answers[44] = choices[44][0];
 units[44] = "115";
 comments[44] = "Id Pregunta: 5285. ";


//  Id pregunta: 5305 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  Seg&uacute;n la Ley 9/2014, la aprobaci&oacute;n de los planes nacionales de numeraci&oacute;n corresponde a:";
 choices[45]= new Array();
 choices[45][0] = "Ministerio de Industria";
 choices[45][1] = "Gobierno";
 choices[45][2] = "Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[45][3] = "Ninguno de los anteriores";
 answers[45] = choices[45][1];
 units[45] = "110";
 comments[45] = "Id Pregunta: 5305. ";


//  Id pregunta: 5579 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  En el marco de la liberalizaci&oacute;n de las telecomunicaciones, &iquest;Cu&aacute;les de las siguientes acciones NO se pretende fomentar mediante la desagregaci&oacute;n del bucle de abonado?";
 choices[46]= new Array();
 choices[46][0] = "Incrementar el n&uacute;mero de abonados";
 choices[46][1] = "Incrementar la penetraci&oacute;n de servicios de banda ancha";
 choices[46][2] = "Reducir el precio de los servicios avanzados de telecomunicaciones";
 choices[46][3] = "Favorecer la competencia enlas redes de acceso";
 answers[46] = choices[46][0];
 units[46] = "107";
 comments[46] = "Id Pregunta: 5579. NULL";


//  Id pregunta: 5589 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  &iquest;Qu&eacute; permite la Plataforma de Contrataci&oacute;n del Sector P&uacute;blico, seg&uacute;n el RD Legislativo 3/2011 de contratos del sector p&uacute;blico?";
 choices[47]= new Array();
 choices[47][0] = "Permite a los empresarios elaborar las ofertas, para enviarlas al &oacute;rgano de contrataci&oacute;n";
 choices[47][1] = "Permite al estado controlar el conjunto de contratos que est&aacute;n actualmente en curso";
 choices[47][2] = "Es una base de datos en la que se incluye toda la informaci&oacute;n sobre contratos celebrados con la administraci&oacute;n a lo largo de la historia";
 choices[47][3] = "Permite a los &oacute;rganos de contrataci&oacute;n dar publicidad a sus convocatorias y resultados a trav&eacute;s de internet";
 answers[47] = choices[47][3];
 units[47] = "41";
 comments[47] = "Id Pregunta: 5589. ";


//  Id pregunta: 5629 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  Dentro de la clasificaci&oacute;n de Flynn, un ordenador con Multiprocesador Masivamente Paralelo (MPP), se clasificar&iacute;a en la siguiente categor&iacute;a:";
 choices[48]= new Array();
 choices[48][0] = "SISD";
 choices[48][1] = "SIMD";
 choices[48][2] = "MISD";
 choices[48][3] = "MIMD";
 answers[48] = choices[48][3];
 units[48] = "45";
 comments[48] = "Id Pregunta: 5629. ";


//  Id pregunta: 5659 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  Seg&uacute;n el RD 1720/2007, cual de los siguientes es un requisito del documento de seguridad, exclusivo para los niveles medio y alto:";
 choices[49]= new Array();
 choices[49][0] = "La identificacion del responsable o responsables de seguridad.";
 choices[49][1] = "Los procedimientos de realizacion de copias de repaldo y de recuperacion de los datos en los ficheros o tratamientos automatizados.";
 choices[49][2] = "Los controles periodicos que se deban realizar para verificar el cumplimiento de lo dispuesto en el propio documento.";
 choices[49][3] = "La a) y la c) lo son.";
 answers[49] = choices[49][3];
 units[49] = "29";
 comments[49] = "Id Pregunta: 5659. ";


//  Id pregunta: 5812 AÃ±o de creación de pregunta: 2009-01-01
 questions[50]= "51)  &iquest;D&oacute;nde NO es necesario especificar la forma de acceso al Perfil del Contratante (art&iacute;culo 53.1 RD Legislativo 3/2011)?";
 choices[50]= new Array();
 choices[50][0] = "En las p&aacute;ginas Web institucionales que mantengan los entes del sector p&uacute;blico";
 choices[50][1] = "En el Bolet&iacute;n Oficial del Estado";
 choices[50][2] = "En la Plataforma de Contrataci&oacute;n del Sector P&uacute;blico";
 choices[50][3] = "En los pliegos y anuncions de licitaci&oacute;n";
 answers[50] = choices[50][1];
 units[50] = "41";
 comments[50] = "Id Pregunta: 5812. ";


//  Id pregunta: 5979 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)  El Organismo de Normalizaci&oacute;n:";
 choices[51]= new Array();
 choices[51][0] = "CEN (Comit&eacute; Europeo de Normalizaci&oacute;n) desarrolla normas que deben adoptarse &iacute;ntegramente por los OrganismosNacionales de Normalizaci&oacute;n pertenecientes al CEN como normas nacionales.";
 choices[51][1] = "ISO (International Organization for Standardization) tiene la competencia exclusiva de la normalizaci&oacute;n internacional en elcampo de las Tecnolog&iacute;as de la Informaci&oacute;n.";
 choices[51][2] = "ISO desarrolla normas que, en la etapa previa a su publicaci&oacute;n como est&aacute;ndar internacional, reciben el nombre deISO/PIS (Preview Draft International Standard).";
 choices[51][3] = "CEN desarrolla en el campo de las Tecnolog&iacute;as de la Informaci&oacute;n Acuerdos de Trabajo (CWA) que tienen la categor&iacute;a deNormas Europeas (EN).";
 answers[51] = choices[51][0];
 units[51] = "42";
 comments[51] = "Id Pregunta: 5979. TIC A 2009";


//  Id pregunta: 6101 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  Por raz&oacute;n de su cuant&iacute;a, &iquest;en qu&eacute; contratos de objeto inform&aacute;tico se precisa autorizaci&oacute;n del Consejo de Ministros para poder celebrar el contrato?";
 choices[52]= new Array();
 choices[52][0] = "Cuando su cuant&iacute;a es igual o superior a 10 millones de euros.";
 choices[52][1] = "Cuando su cuant&iacute;a es igual o superior a 12 millones de euros.";
 choices[52][2] = "Cuando su cuant&iacute;a es igual o superior a 15 millones de euros.";
 choices[52][3] = "No se precisa autorizaci&oacute;n del Consejo de Ministros por motivos de cuant&iacute;a en los contratos de objeto inform&aacute;tico.";
 answers[52] = choices[52][1];
 units[52] = "41";
 comments[52] = "Id Pregunta: 6101. TIC A 2009";


//  Id pregunta: 6251 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[53]= new Array();
 choices[53][0] = "Las pruebas de caja blanca se miden por cobertura de segmentos, de ramas, de condici&oacute;n/decisi&oacute;n, de bucles";
 choices[53][1] = "Las pruebas de caja blanca son pruebas de Sistema";
 choices[53][2] = "Las pruebas de caja negra se miden por cobertura de segmentos, de ramas, de condici&oacute;n/decisi&oacute;n, de bucles";
 choices[53][3] = "Las pruebas de caja negra son pruebas de Regresi&oacute;n";
 answers[53] = choices[53][0];
 units[53] = "87";
 comments[53] = "Id Pregunta: 6251. TICB-2009, bloque desarrollo";


//  Id pregunta: 6337 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  Para poder realizar consultas de OLAP a distintos niveles de generalizaci&oacute;n es conveniente:";
 choices[54]= new Array();
 choices[54][0] = "Haber definido en el dise&ntilde;o multidimensional jerarqu&iacute;as.";
 choices[54][1] = "No se pueden realizar consultas de OLAP a distintos niveles de generalizaci&oacute;n.";
 choices[54][2] = "Que se disponga del operador GENERALIZATION en el gestor.";
 choices[54][3] = "Si no se dispone del operador de GENERATE no se pueden realizar este tipo de consultas.";
 answers[54] = choices[54][0];
 units[54] = "68";
 comments[54] = "Id Pregunta: 6337. ";


//  Id pregunta: 6401 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  La red multicanal de acceso a informaci&oacute;n o tramitaci&oacute;n de los servicios p&uacute;blicos de cualquier administraci&oacute;n, es conocida como:";
 choices[55]= new Array();
 choices[55][0] = "Red 112";
 choices[55][1] = "Red 060";
 choices[55][2] = "Red Conecta";
 choices[55][3] = "Red SARA";
 answers[55] = choices[55][1];
 units[55] = "30";
 comments[55] = "Id Pregunta: 6401. NULL";


//  Id pregunta: 6492 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  Para los servicios de telefon&iacute;a m&oacute;vil, el modo de propagaci&oacute;n de la se&ntilde;al radioel&eacute;ctrica es:";
 choices[56]= new Array();
 choices[56][0] = "Onda de superficie";
 choices[56][1] = "Onda ionosf&eacute;rica";
 choices[56][2] = "Onda espacial";
 choices[56][3] = "Onda de dispersi&oacute;n troposf&eacute;rica";
 answers[56] = choices[56][2];
 units[56] = "108";
 comments[56] = "Id Pregunta: 6492. Castilla La Mancha 2009";


//  Id pregunta: 7346 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  &iquest;Qu&eacute; es HSM?";
 choices[57]= new Array();
 choices[57][0] = "Un dispositivo criptogr&aacute;fico basado en hardware  que genera, almacena y protege claves criptogr&aacute;ficas";
 choices[57][1] = "Un algoritmo de clave p&uacute;blica";
 choices[57][2] = "Un API gen&eacute;rico de acceso a dispositivos criptogr&aacute;ficos";
 choices[57][3] = "Un conjunto de pol&iacute;ticas de seguridad en el &aacute;mbito de la criptograf&iacute;a de clave p&uacute;bica";
 answers[57] = choices[57][0];
 units[57] = "72";
 comments[57] = "Id Pregunta: 7346. NULL";


//  Id pregunta: 7355 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  Es un m&eacute;todo est&aacute;tico de an&aacute;lisis:";
 choices[58]= new Array();
 choices[58][0] = "Valor Actual Neto";
 choices[58][1] = "Tasa Interna de Retorno";
 choices[58][2] = "Pay-Back";
 choices[58][3] = "Delphi";
 answers[58] = choices[58][2];
 units[58] = "38";
 comments[58] = "Id Pregunta: 7355. NULL";


//  Id pregunta: 7829 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)   La Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, en relaci&oacute;n con los certificados electr&oacute;nicos de personas jur&iacute;dicas, establece que:";
 choices[59]= new Array();
 choices[59][0] = " La custodia de los datos de creaci&oacute;n de firma asociados a cada certificado electr&oacute;nico de persona jur&iacute;dica ser&aacute; responsabilidad de los administradores.";
 choices[59][1] = " S&oacute;lo podr&aacute;n solicitar certificados electr&oacute;nicos de personas jur&iacute;dicas sus administradores.";
 choices[59][2] = " La custodia de los datos de creaci&oacute;n de firma asociados a cada certificado electr&oacute;nico de persona jur&iacute;dica ser&aacute; responsabilidad de la persona f&iacute;sica solicitante.";
 choices[59][3] = " Si la firma se utiliza transgrediendo los l&iacute;mites mencionados en la Ley, la persona jur&iacute;dica quedar&aacute; vinculada frente a terceros en todo caso.";
 answers[59] = choices[59][2];
 units[59] = "NULL";
 comments[59] = "Id Pregunta: 7829. Map 2005";


//  Id pregunta: 7840 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)   Hay dos metalenguajes con los que definir los lenguajes que podemos obtener a partir de XML, &iquest;cu&aacute;les son?";
 choices[60]= new Array();
 choices[60][0] = " DTD y XML Schema.";
 choices[60][1] = " DTL y HTML.";
 choices[60][2] = " HTML y API.";
 choices[60][3] = " DTD y SGML.";
 answers[60] = choices[60][0];
 units[60] = "NULL";
 comments[60] = "Id Pregunta: 7840. Map 2005";


//  Id pregunta: 7939 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)   En relaci&oacute;n a las m&eacute;tricas y evaluaci&oacute;n de la Calidad del software, &iquest;cu&aacute;l de las siguientes afirmaciones NO es cierta?";
 choices[61]= new Array();
 choices[61][0] = " La t&eacute;cnica de Halstead es una m&eacute;trica de la fiabilidad del software.";
 choices[61][1] = " Las m&eacute;tricas de complejidad eval&uacute;an la facilidad de mantenimiento del software.";
 choices[61][2] = " El m&eacute;todo de los puntos de funci&oacute;n es una m&eacute;trica de productividad del software.";
 choices[61][3] = " COCOMO (Constructive Cost Model) es un modelo de estimaci&oacute;n algor&iacute;tmico.";
 answers[61] = choices[61][0];
 units[61] = "NULL";
 comments[61] = "Id Pregunta: 7939. Map 2006";


//  Id pregunta: 8006 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)   En una red donde se utilizan redes virtuales (802.1q), &iquest;cu&aacute;l es el tama&ntilde;o m&aacute;ximo de las tramas etiquetadas que circulan por la red?";
 choices[62]= new Array();
 choices[62][0] = " 1522 bytes.";
 choices[62][1] = " 1500 bytes.";
 choices[62][2] = " 1496 bytes.";
 choices[62][3] = " 1518 bytes.";
 answers[62] = choices[62][0];
 units[62] = "NULL";
 comments[62] = "Id Pregunta: 8006. Map 2007";


//  Id pregunta: 8080 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)   La Ley 11/2007 de acceso electr&oacute;nico de los ciudadanos a los Servicios P&uacute;blicos:";
 choices[63]= new Array();
 choices[63][0] = " Prev&eacute; que los ciudadanos se relacionen con dichas Administraciones siempre que usen para ello los sistemas de firma electr&oacute;nica incorporados al Documento Nacional de Identidad.";
 choices[63][1] = " Establece la creaci&oacute;n de registros electr&oacute;nicos por las Administraciones P&uacute;blicas, que admitir&aacute;n exclusivamente documentos electr&oacute;nicos normalizados y cumplimentados de acuerdo con formatos preestablecidos.";
 choices[63][2] = " Es de aplicaci&oacute;n exclusivamente a los ciudadanos en sus relaciones con las Administraciones P&uacute;blicas.";
 choices[63][3] = " Establece que la publicaci&oacute;n del BOE en la sede electr&oacute;nica del organismo competente tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico exclusivamente en las condiciones y con las garant&iacute;as reglamentarias.";
 answers[63] = choices[63][3];
 units[63] = "NULL";
 comments[63] = "Id Pregunta: 8080. Map 2008";


//  Id pregunta: 8140 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)   El m&eacute;todo de Saaty o AHP:";
 choices[64]= new Array();
 choices[64][0] = " Es relativo a accesibilidad web.";
 choices[64][1] = " Es relativo a la decisi&oacute;n multicriterio.";
 choices[64][2] = " Es relativo a la comunicaci&oacute;n en la organizaci&oacute;n.";
 choices[64][3] = " Se refiere al env&iacute;o de datos a un centro de respaldo.";
 answers[64] = choices[64][1];
 units[64] = "NULL";
 comments[64] = "Id Pregunta: 8140. Map 2008";


//  Id pregunta: 8172 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  Seg&uacute;n M&eacute;trica v3, las pruebas de Regresi&oacute;n:";
 choices[65]= new Array();
 choices[65][0] = "Se realizan para validar el resultado de las etapas anteriores.";
 choices[65][1] = "Se deben llevar a cabo cuando se hace un cambio en el sistema.";
 choices[65][2] = "Se dise&ntilde;an durante la fase de An&aacute;lisis.";
 choices[65][3] = "M&eacute;trica V3 no define las pruebas de regresi&oacute;n.";
 answers[65] = choices[65][1];
 units[65] = "86";
 comments[65] = "Id Pregunta: 8172. Examen TIC A1 2010";


//  Id pregunta: 8361 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  En el contexto de herramientas de evaluaci&oacute;n de la accesibilidad web, se&ntilde;ale la herramienta INCORRECTA: ";
 choices[66]= new Array();
 choices[66][0] = "WAVE.";
 choices[66][1] = "TrueCrypt.";
 choices[66][2] = "CSS Analyser.";
 choices[66][3] = "TAW.";
 answers[66] = choices[66][1];
 units[66] = "39";
 comments[66] = "Id Pregunta: 8361. Examen TIC A2 2010";


//  Id pregunta: 8377 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre iSCSI es FALSA?:";
 choices[67]= new Array();
 choices[67][0] = "Es un est&aacute;ndar de la IETF.";
 choices[67][1] = "Utiliza por defecto los puertos TCP 860 y TCP 3260.";
 choices[67][2] = "Necesita una arquitectura de cableado independiente.";
 choices[67][3] = "Usa CHAP como principal m&eacute;todo de autenticaci&oacute;n.";
 answers[67] = choices[67][2];
 units[67] = "48";
 comments[67] = "Id Pregunta: 8377. Examen TIC A2 2010";


//  Id pregunta: 8452 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  &iquest;Cu&aacute;l es uno de los inconvenientes de usar un Hub?:";
 choices[68]= new Array();
 choices[68][0] = "Un Hub no puede extender la distancia operativa de la red";
 choices[68][1] = "Un Hub no puede filtrar el tr&aacute;fico de la red";
 choices[68][2] = "Un Hub no puede amplificar se&ntilde;ales debilitadas";
 choices[68][3] = "Un Hub no cumple ninguna de las anteriores";
 answers[68] = choices[68][1];
 units[68] = "102";
 comments[68] = "Id Pregunta: 8452. Analista Ayto. Madrid 2010";


//  Id pregunta: 8508 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l de los siguientes elementos de VoiceXML v2.0 captura un evento de ayuda? ";
 choices[69]= new Array();
 choices[69][0] = "&lt;catch&gt; ";
 choices[69][1] = "&lt;help&gt; ";
 choices[69][2] = "&lt;field&gt; ";
 choices[69][3] = "&lt;record&gt; ";
 answers[69] = choices[69][1];
 units[69] = "94";
 comments[69] = "Id Pregunta: 8508. Examen TIC A2 2010";


//  Id pregunta: 8780 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  Seg&uacute;n la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal, se considera cesi&oacute;n o comunicaci&oacute;n de datos:";
 choices[70]= new Array();
 choices[70][0] = "Toda manifestaci&oacute;n de voluntad, libre inequ&iacute;voca, espec&iacute;fica e informada, mediante la cual el interesado comunique datos.";
 choices[70][1] = "Toda revelaci&oacute;n de datos realizada a una persona distinta del interesado.";
 choices[70][2] = "Toda revelaci&oacute;n electr&oacute;nica de datos realizada a otra persona distinta de la que los posee.";
 choices[70][3] = "Toda transferencia electr&oacute;nica de datos realizada a una persona distinta del interesado.";
 answers[70] = choices[70][1];
 units[70] = "29";
 comments[70] = "Id Pregunta: 8780. Examen UPM A2 2011";


//  Id pregunta: 9128 AÃ±o de creación de pregunta: 2013-01-01
 questions[71]= "72)  La arquitectura de un ordenador viene definida por";
 choices[71]= new Array();
 choices[71][0] = "El repertorio de instrucciones";
 choices[71][1] = "El tipo de direccionamientos";
 choices[71][2] = "El tipo de operandos";
 choices[71][3] = "Todas las anteriores";
 answers[71] = choices[71][3];
 units[71] = "46";
 comments[71] = "Id Pregunta: 9128. ";


//  Id pregunta: 9151 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  &iquest;Qu&eacute; era Meego?";
 choices[72]= new Array();
 choices[72][0] = "la uni&oacute;n de los sistemas operativos Maemo y Moblin, con el que Intel y Google pretend&iacute;ann competir con el sistema iOs de Apple. Fue el inicio del sistema Android.";
 choices[72][1] = "Est&aacute; auspiciado por la Linux Foundation";
 choices[72][2] = "Una competencia al Android de Google.";
 choices[72][3] = "La B) y la C) son correctas.";
 answers[72] = choices[72][3];
 units[72] = "47";
 comments[72] = "Id Pregunta: 9151. ";


//  Id pregunta: 9374 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  Indique cu&aacute;l de las siguientes afirmaciones es correcta en el &aacute;mbito de la normalizaci&oacute;n de puntuaciones de la Teor&iacute;a de la Decisi&oacute;n Multicriterio Discreta:";
 choices[73]= new Array();
 choices[73][0] = "El m&eacute;todo de fracci&oacute;n del ideal y el m&eacute;todo de fracci&oacute;n del m&aacute;ximo no mantienen la proporcionalidad pre y postnormalizaci&oacute;n";
 choices[73][1] = "El m&eacute;todo de fracci&oacute;n del m&aacute;ximo y el m&eacute;todo de fracci&oacute;n de la suma no mantienen la proporcionalidad pre y postnormalizaci&oacute;n";
 choices[73][2] = "El m&eacute;todo de fracci&oacute;n del ideal no mantiene la proporcionalidad pre y postnormalizaci&oacute;n, mientras que el m&eacute;todo de fracci&oacute;n del m&aacute;ximo s&iacute; la mantiene";
 choices[73][3] = "El m&eacute;todo de fracci&oacute;n del ideal mantiene la proporcionalidad pre y postnormalizaci&oacute;n, mientras que el m&eacute;todo de fracci&oacute;n del m&aacute;ximo no la mantiene";
 answers[73] = choices[73][2];
 units[73] = "34";
 comments[73] = "Id Pregunta: 9374. ";


//  Id pregunta: 9420 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  El modelo de estimaci&oacute;n de Putnam no se caracteriza por";
 choices[74]= new Array();
 choices[74][0] = "Distribuir los esfuerzos de desarrollo seg&uacute;n la curva Rayleigh/Norden";
 choices[74][1] = "Tener asociada una herramienta automatizada (SLIM)";
 choices[74][2] = "Incluir una constante tecnol&oacute;gica";
 choices[74][3] = "Funcionar en proyectos grandes relativamente peor que en proyectos peque&ntilde;os";
 answers[74] = choices[74][3];
 units[74] = "89";
 comments[74] = "Id Pregunta: 9420. NULL";


//  Id pregunta: 9613 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  &iquest;Qu&eacute; alternativas existen en otros sistemas de base de datos a las vistas materializadas de Oracle?";
 choices[75]= new Array();
 choices[75][0] = "Vistas indexadas";
 choices[75][1] = "Vistas normalizadas";
 choices[75][2] = "Vistas f&iacute;sicas";
 choices[75][3] = "No existen alternativas";
 answers[75] = choices[75][0];
 units[75] = "58";
 comments[75] = "Id Pregunta: 9613. En SQL Server se llaman vistas indexadas";


//  Id pregunta: 9621 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  &iquest;C&uacute;al de los siguientes es un medio para la sincronizaci&oacute;n entre procesos Windows?";
 choices[76]= new Array();
 choices[76][0] = "Signals";
 choices[76][1] = "Mutex";
 choices[76][2] = "Sockets";
 choices[76][3] = "RPCs";
 answers[76] = choices[76][1];
 units[76] = "56";
 comments[76] = "Id Pregunta: 9621. ";


//  Id pregunta: 9691 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l de las siguientes opciones representa tipos de modelos dimensionales?";
 choices[77]= new Array();
 choices[77][0] = "Modelo en estrella.";
 choices[77][1] = "Modelo Copo de nieve.";
 choices[77][2] = "Constelaciones.";
 choices[77][3] = "Todos son modelos dimensionales.";
 answers[77] = choices[77][3];
 units[77] = "68";
 comments[77] = "Id Pregunta: 9691. ";


//  Id pregunta: 9721 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  La t&eacute;cnica de protecci&oacute;n de software conocida como marca de agua digital consiste en";
 choices[78]= new Array();
 choices[78][0] = "la inserci&oacute;n de un mensaje en el interior de un objeto digital que contiene informaci&oacute;n sobre el autor o propietario digital de dicho objeto.";
 choices[78][1] = "la generaci&oacute;n de un c&oacute;digo de activaci&oacute;n sin el cual no se puede utilizar una aplicaci&oacute;n.";
 choices[78][2] = "una etiqueta hologr&aacute;fica que ayuda a identificar que el software es original.";
 choices[78][3] = "la gesti&oacute;n de derechos de uso de contenido en formato digital que comprende medidas t&eacute;cnicas y organizativas.";
 answers[78] = choices[78][0];
 units[78] = "37";
 comments[78] = "Id Pregunta: 9721. Examen TIC-A1 2013";


//  Id pregunta: 9783 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  El lenguaje de marcado PMML (Predictive Model Markup Language) es un lenguaje relacionado con las t&eacute;cnicas relativas a:";
 choices[79]= new Array();
 choices[79][0] = "Virtualizaci&oacute;n de escritorio. ";
 choices[79][1] = "Virtualizaci&oacute;n de servidores. ";
 choices[79][2] = "Sistemas SAN. ";
 choices[79][3] = "Miner&iacute;a de datos.";
 answers[79] = choices[79][3];
 units[79] = "68";
 comments[79] = "Id Pregunta: 9783. Examen TIC A2 2013";


//  Id pregunta: 9867 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  &iquest;A qui&eacute;n corresponde la aprobaci&oacute;n de los planes nacionales de numeraci&oacute;n de acuerdo a la Ley 9/2014, General de Telecomunicaciones?";
 choices[80]= new Array();
 choices[80][0] = "Al Gobierno.";
 choices[80][1] = "A la Comisi&oacute;n del Mercado de las Telecomunicaciones";
 choices[80][2] = "Al Ministerio de Ciencia y Tecnolog&iacute;a (hoy, Ministerio de Industria, Energ&iacute;a y Turismo).";
 choices[80][3] = "A la Secretaria de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 answers[80] = choices[80][0];
 units[80] = "110";
 comments[80] = "Id Pregunta: 9867. TIC A1, Examen 2013";


//  Id pregunta: 9917 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  Seg&uacute;n M&eacute;trica v3 &iquest;es posible definir un evento (o interrupci&oacute;n) en un diagrama de flujo de datos?";
 choices[81]= new Array();
 choices[81][0] = "S&iacute;, mediante un flujo de datos.";
 choices[81][1] = "S&iacute;, mediante un flujo de control.";
 choices[81][2] = "Si, mediante un proceso iterativo.";
 choices[81][3] = "No, no es posible. Los DFD &uacute;nicamente representan como se transforma la informaci&oacute;n.";
 answers[81] = choices[81][1];
 units[81] = "86";
 comments[81] = "Id Pregunta: 9917. TIC A2, Examen 2013";


//  Id pregunta: 9962 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  Los dos componentes principales de ADO.NET para el acceso a los datos y su manipulaci&oacute;n son:";
 choices[82]= new Array();
 choices[82][0] = ".NET Framework Data Connectivity y ADO.NET DataSet";
 choices[82][1] = ".NET Framework Data Providers y ADO.NET ResultSet";
 choices[82][2] = ".NET Framework Data Connectivity y ADO.NET ResultSet";
 choices[82][3] = ".NET Framework Data Providers y ADO.NET DataSet";
 answers[82] = choices[82][3];
 units[82] = "59,115";
 comments[82] = "Id Pregunta: 9962. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 10480 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  La Autoridad de Certificaci&oacute;n de los certificados emitidos para el DNI electr&oacute;nico es:";
 choices[83]= new Array();
 choices[83][0] = "La F&aacute;brica Nacional de Moneda y Timbre";
 choices[83][1] = "El Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[83][2] = "El CCN (Centro Criptol&oacute;gico Nacional)";
 choices[83][3] = "El Ministerio del Interior - Direcci&oacute;n General de la Polic&iacute;a";
 answers[83] = choices[83][3];
 units[83] = "74";
 comments[83] = "Id Pregunta: 10480. NULL";


//  Id pregunta: 10508 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  En la arquitectura X.400, &iquest;cual es el protocolo de comunicaci&oacute;n entre los Agentes de Usuario y el Repositorio de Mensajes?";
 choices[84]= new Array();
 choices[84][0] = "P2";
 choices[84][1] = "P7";
 choices[84][2] = "P3";
 choices[84][3] = "P1";
 answers[84] = choices[84][1];
 units[84] = "106";
 comments[84] = "Id Pregunta: 10508. http://www.x400.org/US/X400_Protocols.htm";


//  Id pregunta: 10514 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;Qu&eacute; RFC define el Estandar SIP?";
 choices[85]= new Array();
 choices[85][0] = "RFC 3160";
 choices[85][1] = "RFC 6130";
 choices[85][2] = "RFC 3610";
 choices[85][3] = "RFC 3261";
 answers[85] = choices[85][3];
 units[85] = "109";
 comments[85] = "Id Pregunta: 10514. NULL";


//  Id pregunta: 10641 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  Las fases por ciclo en el Modelo de Ciclo de Vida en espiral son:";
 choices[86]= new Array();
 choices[86][0] = "Planificaci&oacute;n, An&aacute;lisis de Riesgos, Ingenier&iacute;a y Evaluaci&oacute;n.";
 choices[86][1] = "Planificaci&oacute;n, Dise&ntilde;o, Codificaci&oacute;n e Integraci&oacute;n.";
 choices[86][2] = "Construcci&oacute;n y Transici&oacute;n.";
 choices[86][3] = "Adaptaci&oacute;n, Composici&oacute;n y Reemplazo.";
 answers[86] = choices[86][0];
 units[86] = "76";
 comments[86] = "Id Pregunta: 10641. ";


//  Id pregunta: 10873 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  Respecto a la tecnolog&iacute;a de almacenamiento InnoDB se&ntilde;ale la respuesta afirmativa:";
 choices[87]= new Array();
 choices[87][0] = "InnoDB es una tecnolog&iacute;a de almacenamiento de datos de c&oacute;digo abierto para la base de datos Oracle.";
 choices[87][1] = "Es la tecnolog&iacute;a de almacenamiento de datos por defecto por el sistema administrador de bases de datos relacionales MySQL.";
 choices[87][2] = "Se basa en el c&oacute;digo ISAM.";
 choices[87][3] = "No permite las b&uacute;squedas denominadas full-text, que para conjuntos de datos grandes son mucho m&aacute;s eficientes.";
 answers[87] = choices[87][1];
 units[87] = "57";
 comments[87] = "Id Pregunta: 10873. Examen GSI 2014";


//  Id pregunta: 10902 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  La arquitectura de cortafuegos que combina un router con un host basti&oacute;n y donde el principal nivel de seguridad proviene del filtrado de paquetes se denomina:";
 choices[88]= new Array();
 choices[88][0] = "Screened Subnet.";
 choices[88][1] = "Dual-Homed Host.";
 choices[88][2] = "Router-Homed Host.";
 choices[88][3] = "Screened Host.";
 answers[88] = choices[88][3];
 units[88] = "111";
 comments[88] = "Id Pregunta: 10902. Examen GSI 2014";


//  Id pregunta: 10908 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Seg&uacute;n la norma de la ITU-T asociada a la recomendaci&oacute;n G.726, de Modulaci&oacute;n por impulsos codificados diferencial adaptativa, indicar la respuesta correcta que se corresponde con su bit rate (kbit/s):";
 choices[89]= new Array();
 choices[89][0] = "16, 24, 32 &oacute; 40";
 choices[89][1] = "6, 12, 24 &oacute; 48";
 choices[89][2] = "4, 8, 16 &oacute; 40";
 choices[89][3] = "8, 16, 32 &oacute; 64";
 answers[89] = choices[89][0];
 units[89] = "117";
 comments[89] = "Id Pregunta: 10908. Examen GSI 2014";


//  Id pregunta: 11024 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l de las siguientes es un principio de Dise&ntilde;o universal?";
 choices[90]= new Array();
 choices[90][0] = "Cumplimiento de las WCAG 1.0";
 choices[90][1] = "Cumplimiento de las WCAG 2.0";
 choices[90][2] = "Escaso esfuerzo f&iacute;sico";
 choices[90][3] = "Ensayo prueba-error";
 answers[90] = choices[90][2];
 units[90] = "39";
 comments[90] = "Id Pregunta: 11024. ";


//  Id pregunta: 11027 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l es la Asociaci&oacute;n Europea de Fabricantes de Ordenadores?";
 choices[91]= new Array();
 choices[91][0] = "ETSI";
 choices[91][1] = "CECUA";
 choices[91][2] = "ECMA";
 choices[91][3] = "ECTA";
 answers[91] = choices[91][2];
 units[91] = "42";
 comments[91] = "Id Pregunta: 11027. ";


//  Id pregunta: 11033 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Durante qu&eacute; procesos del desarrollo del Sistema de Informaci&oacute;n se realiza la modelizaci&oacute;n de los datos?";
 choices[92]= new Array();
 choices[92][0] = "Durante el an&aacute;lisis";
 choices[92][1] = "Durante el dise&ntilde;o";
 choices[92][2] = "Durante el an&aacute;lisis y durante el dise&ntilde;o";
 choices[92][3] = "No se utiliza la modelizaci&oacute;n de datos en el proceso de desarrollo del SI";
 answers[92] = choices[92][2];
 units[92] = "57";
 comments[92] = "Id Pregunta: 11033. ";


//  Id pregunta: 11196 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l de las siguientes iniciativas de la Estrategia Europa 2020 hace referencia al objetivo de crecimiento integrador?";
 choices[93]= new Array();
 choices[93][0] = "Agenda de nuevas cualificaciones y empleo";
 choices[93][1] = "Agenda Digital para Europa";
 choices[93][2] = "Todas las anteriores";
 choices[93][3] = "Ninguna de las Anteriores";
 answers[93] = choices[93][0];
 units[93] = "30";
 comments[93] = "Id Pregunta: 11196. ";


//  Id pregunta: 11322 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Las directivas JSP nos permiten configurar alguna informaci&oacute;n que pueda ser usada en nuestra p&aacute;gina JSP. Cu&aacute;l de las siguientes no es una directiva jsp";
 choices[94]= new Array();
 choices[94][0] = "DocRel";
 choices[94][1] = "Page";
 choices[94][2] = "Include";
 choices[94][3] = "Taglib";
 answers[94] = choices[94][0];
 units[94] = "115";
 comments[94] = "Id Pregunta: 11322. ";


//  Id pregunta: 11383 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes alternativas es la lista correcta de las cuatro P's del dise&ntilde;o del servicio?";
 choices[95]= new Array();
 choices[95][0] = "Planificaci&oacute;n, productos, posici&oacute;n, procesos";
 choices[95][1] = "Planificaci&oacute;n, perspectiva, posici&oacute;n, personas";
 choices[95][2] = "Perspectiva, asociados (partners), problemas, personas";
 choices[95][3] = "Personas, asociados (partners), productos, procesos";
 answers[95] = choices[95][3];
 units[95] = "98";
 comments[95] = "Id Pregunta: 11383. ";


//  Id pregunta: 11471 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Seg&uacute;n la Ley 9/2014, &iquest;qui&eacute;n establece las condiciones para la habilitaci&oacute;n del ejercicio de los derechos de uso del dominio p&uacute;blico radioel&eacute;ctrico?:";
 choices[96]= new Array();
 choices[96][0] = "MINETUR.";
 choices[96][1] = "CNMC.";
 choices[96][2] = "El Gobierno.";
 choices[96][3] = "La SETSI.";
 answers[96] = choices[96][2];
 units[96] = "110";
 comments[96] = "Id Pregunta: 11471. ";


//  Id pregunta: 11536 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  La licencia de la GNU utilizada espec&iacute;ficamente para licenciar Software en la redes de computadores es:";
 choices[97]= new Array();
 choices[97][0] = "GFDL";
 choices[97][1] = "GPL";
 choices[97][2] = "Affero GPL";
 choices[97][3] = "EUPL";
 answers[97] = choices[97][2];
 units[97] = "62";
 comments[97] = "Id Pregunta: 11536. NULL";


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


