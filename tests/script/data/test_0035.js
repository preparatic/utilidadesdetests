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

//  Id pregunta: 102 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  En relaci&oacute;n con los sistemas abiertos, las caracter&iacute;sticas t&eacute;cnicas m&aacute;s comunmente citadas son:";
 choices[0]= new Array();
 choices[0][0] = "Interoperabilidad, consistencia y escalabilidad";
 choices[0][1] = "Interoperabilidad, conectividad e  integrabilidad";
 choices[0][2] = "Consistencia, portabilidad e integrabilidad";
 choices[0][3] = "Interoperabilidad, portabilidad y escalabilidad";
 answers[0] = choices[0][3];
 units[0] = "40";
 comments[0] = "Id Pregunta: 102. ";


//  Id pregunta: 345 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  La t&eacute;cnica de direcci&oacute;n en la etapa de iniciaci&oacute;n es:";
 choices[1]= new Array();
 choices[1][0] = "Orientada a ventas";
 choices[1][1] = "Informal";
 choices[1][2] = "Orientada a los recursos";
 choices[1][3] = "Orientada al control";
 answers[1] = choices[1][1];
 units[1] = "22";
 comments[1] = "Id Pregunta: 345. ";


//  Id pregunta: 377 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  Los sistemas de ayuda a la decisi&oacute;n pueden ser:";
 choices[2]= new Array();
 choices[2][0] = "Orientados a modelos y orientados a datos";
 choices[2][1] = "Orientados a modelos y orientados a procesos";
 choices[2][2] = "Orientados a datos y orientados a procesos";
 choices[2][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[2] = choices[2][0];
 units[2] = "21";
 comments[2] = "Id Pregunta: 377. ";


//  Id pregunta: 457 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  Si el camino cr&iacute;tico de un proyecto est&aacute; formado por las tareas A(3,12,21) y B( 6,15,30), la desviaci&oacute;n critica del proyecto ser&aacute;:";
 choices[3]= new Array();
 choices[3][0] = "9";
 choices[3][1] = "5";
 choices[3][2] = "7";
 choices[3][3] = "4";
 answers[3] = choices[3][1];
 units[3] = "28";
 comments[3] = "Id Pregunta: 457. ";


//  Id pregunta: 487 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  La serie V de estandarizaci&oacute;n de la ITU-T trata sobre:";
 choices[4]= new Array();
 choices[4][0] = "tecnolog&iacute;a inal&aacute;mbrica";
 choices[4][1] = "digitalizaci&oacute;n de datos";
 choices[4][2] = "modems";
 choices[4][3] = "RDSI";
 answers[4] = choices[4][2];
 units[4] = "42";
 comments[4] = "Id Pregunta: 487. ";


//  Id pregunta: 632 AÃ±o de creación de pregunta: 2006-01-01
 questions[5]= "6)  Cu&aacute;l de las siguientes t&eacute;cnicas no persigue la comprobaci&oacute;n o el control de la legalidad del Software:";
 choices[5]= new Array();
 choices[5][0] = "DRM (Digital Rigths Management).";
 choices[5][1] = "CRM (Copyright Rights Management).";
 choices[5][2] = "Marcas de Agua.";
 choices[5][3] = "TPM (Technical Protection Measures).";
 answers[5] = choices[5][1];
 units[5] = "37";
 comments[5] = "Id Pregunta: 632. ";


//  Id pregunta: 1137 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  En un entorno transaccional, &iquest;cu&aacute;l de las siguientes acciones traer&iacute;a como resultado una disminuci&oacute;n del tiempo de respuesta?:";
 choices[6]= new Array();
 choices[6][0] = "Compactaci&oacute;n de datos en el dispositivo de almacenamiento magn&eacute;tico, para disminuir el n&uacute;mero de E/S al DASD";
 choices[6][1] = "Ampliaci&oacute;n de la partici&oacute;n de memoria principal para los programas activos, para disminuir la frecuencia de 'swapping'";
 choices[6][2] = "Ampliaci&oacute;n de la memoria virtual, para disminuir la paginaci&oacute;n";
 choices[6][3] = "Todas las anteriores respuestas son correctas";
 answers[6] = choices[6][1];
 units[6] = "52";
 comments[6] = "Id Pregunta: 1137. ";


//  Id pregunta: 1223 AÃ±o de creación de pregunta: 2005-01-01
 questions[7]= "8)  Los DN, en LDAP, se representan en:";
 choices[7]= new Array();
 choices[7][0] = "XML";
 choices[7][1] = "HTML";
 choices[7][2] = "Texto plano";
 choices[7][3] = "ASN.1";
 answers[7] = choices[7][2];
 units[7] = "74";
 comments[7] = "Id Pregunta: 1223. RFC 4514";


//  Id pregunta: 1269 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Los algoritmos de clave p&uacute;blica o asim&eacute;trica:";
 choices[8]= new Array();
 choices[8][0] = "no han alcanzado la perfecci&oacute;n matem&aacute;tica, hay ataques m&aacute;s eficaces que la fuerza bruta";
 choices[8][1] = "presentan altas tasas de cifrado y descifrado";
 choices[8][2] = "su distribuci&oacute;n usando directorios p&uacute;blicos es compleja";
 choices[8][3] = "no son compatibles con el concepto de certificado";
 answers[8] = choices[8][0];
 units[8] = "72";
 comments[8] = "Id Pregunta: 1269. ";


//  Id pregunta: 1567 AÃ±o de creación de pregunta: 2003-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l no es una caracter&iacute;stica esencial del Datawarehouse?";
 choices[9]= new Array();
 choices[9][0] = "Orientado por temas";
 choices[9][1] = "Independiente del tiempo";
 choices[9][2] = " No vol&aacute;til";
 choices[9][3] = "Integrado";
 answers[9] = choices[9][1];
 units[9] = "71";
 comments[9] = "Id Pregunta: 1567. ";


//  Id pregunta: 1652 AÃ±o de creación de pregunta: 2004-01-01
 questions[10]= "11)  &iquest;Las siglas ADL qu&eacute; significan desde la perspectiva del e-learning?";
 choices[10]= new Array();
 choices[10][0] = "Advanced Distributed Learning";
 choices[10][1] = "Advanced Distanced Learning";
 choices[10][2] = "No tienen ning&uacute;n significado desde la perspectiva del e-learning";
 choices[10][3] = "Ninguna de las anteriores";
 answers[10] = choices[10][0];
 units[10] = "66";
 comments[10] = "Id Pregunta: 1652. ";


//  Id pregunta: 1779 AÃ±o de creación de pregunta: 2006-01-01
 questions[11]= "12)  &iquest;Cu&aacute;l de los siguientes no es un servidor de aplicaciones J2EE?";
 choices[11]= new Array();
 choices[11][0] = "Tomcat";
 choices[11][1] = "Geronimo";
 choices[11][2] = "JBoss";
 choices[11][3] = "Los 3 lo son";
 answers[11] = choices[11][0];
 units[11] = "60";
 comments[11] = "Id Pregunta: 1779. De la especificaci&oacute;n JEE, Tomcat no cumple la especificaci&oacute;n EJB, solo servlets.";


//  Id pregunta: 1782 AÃ±o de creación de pregunta: 2006-01-01
 questions[12]= "13)  Se&ntilde;ale la definici&oacute;n m&aacute;s correcta para el producto XEN:";
 choices[12]= new Array();
 choices[12][0] = "Entorno de ejecuci&oacute;n .NET sobre Linux, al estilo de Mono";
 choices[12][1] = "Hoja de c&aacute;lculo para KDE";
 choices[12][2] = "Sistema gestor de redes empresariales extendidas";
 choices[12][3] = "Sistema de virtualizaci&oacute;n de sistemas operativos, de fuente abierta";
 answers[12] = choices[12][3];
 units[12] = "61,62";
 comments[12] = "Id Pregunta: 1782. ";


//  Id pregunta: 1862 AÃ±o de creación de pregunta: 2009-01-01
 questions[13]= "14)  Relativo a la firma digital, indique la opci&oacute;n incorrecta:";
 choices[13]= new Array();
 choices[13][0] = "XMLDSig es una sintaxis XML para la generaci&oacute;n de firma digital";
 choices[13][1] = "XMLDSig s&oacute;lo se utiliza para firmar documentos XML";
 choices[13][2] = "XML Advanced Electronic Signatures (XAdES) cumple la directiva europea sobre firma electr&oacute;nica 1999/93/CE";
 choices[13][3] = "Las respuestas 'a' y 'c' son verdaderas";
 answers[13] = choices[13][1];
 units[13] = "74";
 comments[13] = "Id Pregunta: 1862. NULL";


//  Id pregunta: 2433 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Indicar a qu&eacute; corresponde la siguiente definici&oacute;n propuesta por el IEEE dentro del &aacute;mbito de la reingenier&iacute;a e ingenier&iacute;a inversa: &quot;la transformaci&oacute;n de una forma de representaci&oacute;n de un sistema en otra distinta pero del mismo nivel de abstracci&oacute;n, sin modificar el comportamiento&quot;";
 choices[14]= new Array();
 choices[14][0] = "Ingenier&iacute;a inversa";
 choices[14][1] = "Reestructuraci&oacute;n";
 choices[14][2] = "Reingenier&iacute;a";
 choices[14][3] = "Ingenier&iacute;a hacia delante";
 answers[14] = choices[14][1];
 units[14] = "91";
 comments[14] = "Id Pregunta: 2433. NULL";


//  Id pregunta: 2606 AÃ±o de creación de pregunta: 2003-01-01
 questions[15]= "16)  &iquest;C&oacute;mo se llama la caracter&iacute;stica que permite que dos m&eacute;todos distintos tengan el mismo nombre?";
 choices[15]= new Array();
 choices[15][0] = " Herencia";
 choices[15][1] = "Persistencia";
 choices[15][2] = "Polimorfismo";
 choices[15][3] = "Abstracci&oacute;n";
 answers[15] = choices[15][2];
 units[15] = "82";
 comments[15] = "Id Pregunta: 2606. ";


//  Id pregunta: 2646 AÃ±o de creación de pregunta: 2003-01-01
 questions[16]= "17)  En el modelo Entidad/Relaci&oacute;n extendido las relaciones d&eacute;biles:";
 choices[16]= new Array();
 choices[16][0] = "Son las que existen entre entidades d&eacute;biles";
 choices[16][1] = "&Uacute;nicamente las que existen entre una entidad regular y otra entidad d&eacute;bil cuya identificaci&oacute;n depende de la identificaci&oacute;n de la anterior.";
 choices[16][2] = "Son las que existen entre una entidad regular y otra entidad d&eacute;bil, independientemente de que la dependencia sea por identificaci&oacute;n o existencia.";
 choices[16][3] = "Son las que existen entre una entidad regular y otra entidad d&eacute;bil cuya existencia no depende de la existencia de la anterior.";
 answers[16] = choices[16][2];
 units[16] = "58,80";
 comments[16] = "Id Pregunta: 2646. ";


//  Id pregunta: 2670 AÃ±o de creación de pregunta: 2003-01-01
 questions[17]= "18)  En im&aacute;genes multiespectrales o multitemporales se emplean las operaciones aritm&eacute;ticas para:";
 choices[17]= new Array();
 choices[17][0] = "Eliminar ruidos.";
 choices[17][1] = "Detectar cambios.";
 choices[17][2] = "Todas las anteriores.";
 choices[17][3] = "Ninguna de las anteriores.";
 answers[17] = choices[17][2];
 units[17] = "93";
 comments[17] = "Id Pregunta: 2670. NULL";


//  Id pregunta: 2741 AÃ±o de creación de pregunta: 2006-01-01
 questions[18]= "19)  En el modelo entidad-relaci&oacute;n de CHEN la cardinalidad es:";
 choices[18]= new Array();
 choices[18][0] = "El n&uacute;mero de tablas";
 choices[18][1] = "El n&uacute;mero de elementos del modelo";
 choices[18][2] = "El n&uacute;mero m&iacute;nimo y m&aacute;ximo de entidades de un tipo de entidad que se relacionan con una entidad del otro tipo.";
 choices[18][3] = "El n&uacute;mero de relaciones unitarias";
 answers[18] = choices[18][2];
 units[18] = "80";
 comments[18] = "Id Pregunta: 2741. ";


//  Id pregunta: 2764 AÃ±o de creación de pregunta: 2006-01-01
 questions[19]= "20)  Se&ntilde;ale la afirmaci&oacute;n cierta sobre el acoplamiento normal.";
 choices[19]= new Array();
 choices[19][0] = "Provoca dependencia de ejecuci&oacute;n.";
 choices[19][1] = "Los m&oacute;dulos se refieren a la misma estructura de datos local.";
 choices[19][2] = "No se produce traspaso de par&aacute;metros.";
 choices[19][3] = "Los m&oacute;dulos se refieren a la misma &aacute;rea global de datos.";
 answers[19] = choices[19][2];
 units[19] = "84";
 comments[19] = "Id Pregunta: 2764. ";


//  Id pregunta: 2808 AÃ±o de creación de pregunta: 2006-01-01
 questions[20]= "21)  La Precisi&oacute;n es un criterio relacionado con:";
 choices[20]= new Array();
 choices[20][0] = "La Usabilidad.";
 choices[20][1] = "La Correcci&oacute;n.";
 choices[20][2] = "La Eficiencia.";
 choices[20][3] = "La Fiabilidad.";
 answers[20] = choices[20][3];
 units[20] = "88";
 comments[20] = "Id Pregunta: 2808. NULL";


//  Id pregunta: 2851 AÃ±o de creación de pregunta: 2006-01-01
 questions[21]= "22)  &iquest;Qu&eacute; sistema de parametr&iacute;zaci&oacute;n no se emplea en el reconocimiento de voz?";
 choices[21]= new Array();
 choices[21][0] = "por fonemas";
 choices[21][1] = "por morfemas";
 choices[21][2] = "por difonemas";
 choices[21][3] = "por semis&iacute;labas";
 answers[21] = choices[21][1];
 units[21] = "94";
 comments[21] = "Id Pregunta: 2851. ";


//  Id pregunta: 3170 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  &iquest;Cu&aacute;l de las siguientes expresiones definen mejor las ventajas de un multiplexor estad&iacute;stico?:";
 choices[22]= new Array();
 choices[22][0] = "Pueden atender m&aacute;s circuitos que los multiplexores por divisi&oacute;n de tiempos (MDT)";
 choices[22][1] = "Permiten evaluar la eficacia de transmisi&oacute;n de los circuitos que multiplexa";
 choices[22][2] = "Permite utilizar una l&iacute;nea de transmisi&oacute;n de menor velocidad que el MDT equivalente";
 choices[22][3] = "Evita el uso de los filtros requeridos por el MDT";
 answers[22] = choices[22][2];
 units[22] = "101";
 comments[22] = "Id Pregunta: 3170. ";


//  Id pregunta: 3260 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  &iquest;Cu&aacute;ntos terminales pueden ser usados simult&aacute;neamente en una RDSI con acceso b&aacute;sico?:";
 choices[23]= new Array();
 choices[23][0] = "S&oacute;lo 1 canal puede estar ocupado en un momento determinado";
 choices[23][1] = "2, ya que puede haber comunicaciones simult&aacute;neas en los canales B de datos";
 choices[23][2] = "1 por cada canal B mientras que el canal D puede ser utilizado por varios terminales en modo paquete";
 choices[23][3] = "3, ya que cada canal solo puede ser utilizado por un terminal a la vez, independientemente de su tipo";
 answers[23] = choices[23][2];
 units[23] = "103";
 comments[23] = "Id Pregunta: 3260. ";


//  Id pregunta: 3261 AÃ±o de creación de pregunta: 2009-01-01
 questions[24]= "25)  En GPRS, es razonable facturar:";
 choices[24]= new Array();
 choices[24][0] = "por tiempo de conexi&oacute;n";
 choices[24][1] = "por n&uacute;mero de conexiones";
 choices[24][2] = "por portadoras en uso";
 choices[24][3] = "por volumen y calidad de servicio";
 answers[24] = choices[24][3];
 units[24] = "108";
 comments[24] = "Id Pregunta: 3261. ";


//  Id pregunta: 3421 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Indicar cu&aacute;l de los siguientes equipos no deber&iacute;a colocarse en una DMZ:";
 choices[25]= new Array();
 choices[25][0] = "Bastion host";
 choices[25][1] = "Servidor Web";
 choices[25][2] = "Servidor FTP";
 choices[25][3] = "Servidor de aplicaciones";
 answers[25] = choices[25][3];
 units[25] = "113";
 comments[25] = "Id Pregunta: 3421. ";


//  Id pregunta: 3791 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Respecto a los dispositivos de interconexi&oacute;n de redes locales, es falso que:";
 choices[26]= new Array();
 choices[26][0] = "El repetidor compatibiliza 2 medios de transmisi&oacute;n a nivel f&iacute;sico";
 choices[26][1] = "Los puentes operan a nivel de enlace, subnivel LLC para un mismo nivel MAC";
 choices[26][2] = "Los enrutadores conectan LANs con LANs, MANs o WANs";
 choices[26][3] = "Las pasarelas trabajan a nivel de red o superior";
 answers[26] = choices[26][1];
 units[26] = "102";
 comments[26] = "Id Pregunta: 3791. ";


//  Id pregunta: 3979 AÃ±o de creación de pregunta: 2006-01-01
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes afirmaciones es verdadera?";
 choices[27]= new Array();
 choices[27][0] = "Cable de Categor&iacute;a 4 (seg&uacute;n EIA/TIA)  que permite obtener velocidades de transmisi&oacute;n de 2 Mbit/s con distancias de 100 metros.";
 choices[27][1] = "Cable de Categor&iacute;a 5 (seg&uacute;n EIA/TIA) que permite obtener velocidades de transmisi&oacute;n de 10 Mbit/s con distancias de 100 metros.";
 choices[27][2] = "Las especificaciones de la EIA/TIA-569 y las del SYSTIMAX IBS establecen la necesidad de al menos dos armarios de distribuci&oacute;n por planta para hasta 1000 metros cuadrados.";
 choices[27][3] = "El cableado horizontal debe emplear una topolog&iacute;a en estrella con una longitud m&aacute;xima de 90 metros (entre armario y roseta).";
 answers[27] = choices[27][3];
 units[27] = "99";
 comments[27] = "Id Pregunta: 3979. ";


//  Id pregunta: 4066 AÃ±o de creación de pregunta: 2006-01-01
 questions[28]= "29)  Que elemento de los siguientes no son propios de instalaciones de VoIP";
 choices[28]= new Array();
 choices[28][0] = "gatekeeper";
 choices[28][1] = "SIP";
 choices[28][2] = "router";
 choices[28][3] = "todos los anteriores";
 answers[28] = choices[28][3];
 units[28] = "117";
 comments[28] = "Id Pregunta: 4066. ";


//  Id pregunta: 4236 AÃ±o de creación de pregunta: 2007-01-01
 questions[29]= "30)  &iquest;Cu&aacute;l es el nombre del paquete open source Java que se utiliza para la generaci&oacute;n de informes?";
 choices[29]= new Array();
 choices[29][0] = "iReport";
 choices[29][1] = "SaintReport";
 choices[29][2] = "JasperReports";
 choices[29][3] = "xStream";
 answers[29] = choices[29][2];
 units[29] = "60.116";
 comments[29] = "Id Pregunta: 4236. NULL";


//  Id pregunta: 4367 AÃ±o de creación de pregunta: 2007-01-01
 questions[30]= "31)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la tecnolog&iacute;a de procesadores NUMA (No Uniform Memory Access)?";
 choices[30]= new Array();
 choices[30][0] = "Acceso a m&uacute;ltiples memorias de forma equivalente.";
 choices[30][1] = "Facilidad de programaci&oacute;n.";
 choices[30][2] = "Escalabilidad.";
 choices[30][3] = "Procesamiento paralelo.";
 answers[30] = choices[30][0];
 units[30] = "45";
 comments[30] = "Id Pregunta: 4367. ";


//  Id pregunta: 4719 AÃ±o de creación de pregunta: 2007-01-01
 questions[31]= "32)  El sello de oro del modelo EFQM se obtiene a partir de una evaluaci&oacute;n de:";
 choices[31]= new Array();
 choices[31][0] = "400 puntos sobre 1000.";
 choices[31][1] = "500 puntos sobre 1000.";
 choices[31][2] = "700 puntos sobre 1000.";
 choices[31][3] = "900 puntos sobre 1000.";
 answers[31] = choices[31][1];
 units[31] = "92";
 comments[31] = "Id Pregunta: 4719. Examen 2006 JCYL";


//  Id pregunta: 4721 AÃ±o de creación de pregunta: 2007-01-01
 questions[32]= "33)  La gesti&oacute;n de nombres de dominio bajo el c&oacute;digo correspondientes a Espa&ntilde;a .es la tiene legalmenteencomendada:";
 choices[32]= new Array();
 choices[32][0] = "Internic.es";
 choices[32][1] = "Red.es";
 choices[32][2] = "Mityc.es";
 choices[32][3] = " Netsol.es";
 answers[32] = choices[32][1];
 units[32] = "112";
 comments[32] = "Id Pregunta: 4721. Examen 2006 JCYL";


//  Id pregunta: 5014 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  En el sistema de soporte a la decisi&oacute;n SSD-AAPP v 3.0 el umbral de saciedad m&aacute;ximo para un criterio";
 choices[33]= new Array();
 choices[33][0] = "indica el valor m&aacute;ximo (en un criterio a minimizar) que debe cumplir la puntuaci&oacute;n de una alternativa paraese criterio para que pueda ser considerada";
 choices[33][1] = "indica el valor m&aacute;ximo (en un criterio a maximizar) que debe cumplir la puntuaci&oacute;n de una alternativa paraese criterio para que pueda ser considerada";
 choices[33][2] = "indica (en un criterio a maximizar) que si la puntuaci&oacute;n de ese criterio toma un valor mayor no incidir&aacute; en lapuntuaci&oacute;n obtenida";
 choices[33][3] = "indica el valor m&aacute;ximo que se puede asignar al peso de ese criterio";
 answers[33] = choices[33][2];
 units[33] = "34";
 comments[33] = "Id Pregunta: 5014. Examen TIC A 2007";


//  Id pregunta: 5043 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  &iquest;Cu&aacute;l es la naturaleza j&uacute;ridica de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos?";
 choices[34]= new Array();
 choices[34][0] = "Organismo aut&oacute;nomo";
 choices[34][1] = "Entidad P&uacute;blica Empresarial";
 choices[34][2] = "Ente de Derecho p&uacute;blico regulado por su legislaci&oacute;n espec&iacute;fica";
 choices[34][3] = "Agencia Estatal de las previstas en la Ley 28/2006, de 18 de julio. (Art. 35 LO 13/1999 y Disposici&oacute;nadicional d&eacute;cima de la LOFAGE)";
 answers[34] = choices[34][2];
 units[34] = "29";
 comments[34] = "Id Pregunta: 5043. Examen TIC A 2007";


//  Id pregunta: 5075 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  El XML (Extensible Markup Language) ha sido desarrollado por el W3C. Indique cu&aacute;l de las siguientesafirmaciones es falsa:";
 choices[35]= new Array();
 choices[35][0] = "Proviene del SGML";
 choices[35][1] = "Pretende ser un est&aacute;ndar para el intercambio de informaci&oacute;n entre plataformas no circunscritoexclusivamente a Internet";
 choices[35][2] = "Dada su extensibilidad no se soporta en bases de datos sino que requiere formatos de texto plano";
 choices[35][3] = "No es un lenguaje propiamente dicho sino un metalenguaje creado para definir lenguages que cubrandiferentes necesidades";
 answers[35] = choices[35][2];
 units[35] = "69";
 comments[35] = "Id Pregunta: 5075. Examen TIC A 2007";


//  Id pregunta: 5108 AÃ±o de creación de pregunta: 2003-01-01
 questions[36]= "37)  El modelo CMMI:";
 choices[36]= new Array();
 choices[36][0] = "Es una metodolog&iacute;a de desarrollo software.";
 choices[36][1] = "Es una pr&aacute;ctica para estimaci&oacute;n de complejidad de software.";
 choices[36][2] = "Permite obtener un diagn&oacute;stico de la madurez de los procesos relacionados con las tecnolog&iacute;as de la informaci&oacute;n de una organizaci&oacute;n.";
 choices[36][3] = "Permite la obtenci&oacute;n de un modelo l&oacute;gico de procesos que represente el sistema, con independencia de las restricciones f&iacute;sicas del entorno.";
 answers[36] = choices[36][2];
 units[36] = "27";
 comments[36] = "Id Pregunta: 5108. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5138 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  Indique cu&aacute;l de las siguientes afirmaciones sobre el m&eacute;todo de planificaci&oacute;n PERT (Program Evaluation and Review Technique) es FALSA:";
 choices[37]= new Array();
 choices[37][0] = "El m&eacute;todo PERT parte de la descomposici&oacute;n del proyecto en una serie de obras parciales o actividades.";
 choices[37][1] = "Para representar las diferentes actividades en que se descompone un proyecto, as&iacute; como sus correspondientes sucesos, se utiliza una estructura de grafo. Los arcos del grafo representan las actividades y los v&eacute;rtices los sucesos.";
 choices[37][2] = "Es la forma habitual de presentar el plan de ejecuci&oacute;n de un proyecto, recogiendo en las filas la relaci&oacute;n de actividades a realizar y en las columnas la escala de tiempos que se est&aacute; manejando.";
 choices[37][3] = "Un suceso es un acontecimiento, un punto en el tiempo, una fecha en el calendario. El suceso no consume recursos, s&oacute;lo indica el principio o el fin de una actividad o de un conjunto de actividades.";
 answers[37] = choices[37][2];
 units[37] = "77";
 comments[37] = "Id Pregunta: 5138. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5486 AÃ±o de creación de pregunta: 2003-01-01
 questions[38]= "39)  El estudio de las consecuencias que tendr&iacute;a una parada de X tiempo sobre la organizaci&oacute;n se contempla en la metodolog&iacute;a MAGERIT en";
 choices[38]= new Array();
 choices[38][0] = "An&aacute;lisis de riesgos";
 choices[38][1] = "An&aacute;lisis de impacto";
 choices[38][2] = "Disponibilidad";
 choices[38][3] = "Es una metodolog&iacute;a de desarrollo, en ning&uacute;n caso trata an&aacute;lisis del riesgo";
 answers[38] = choices[38][1];
 units[38] = "33";
 comments[38] = "Id Pregunta: 5486. Castilla y Le&oacute;n";


//  Id pregunta: 5678 AÃ±o de creación de pregunta: 2003-01-01
 questions[39]= "40)  En cuanto a Agentes Software y la Comunicaci&oacute;n y Coordinaci&oacute;n entre agentes, indique la respuesta no correcta:";
 choices[39]= new Array();
 choices[39][0] = "En el sistema de pizarra existe una estructura de datos global, la pizarra que es gestionada y arbitrada por todos los agentes";
 choices[39][1] = "En la red de contratos en cada tarea existen dos roles diferentes: el del contratista, que es responsable de la gesti&oacute;n de una tarea y el del oferente, que se encarga de la ejecuci&oacute;n real de la tarea.";
 choices[39][2] = "KQML  es un  lenguaje de comunicaci&oacute;n entre agentes software.";
 choices[39][3] = "Ninguna de las anteriores es correcta";
 answers[39] = choices[39][0];
 units[39] = "63";
 comments[39] = "Id Pregunta: 5678. ";


//  Id pregunta: 5707 AÃ±o de creación de pregunta: 2009-01-01
 questions[40]= "41)  Se&ntilde;ale cu&aacute;l de los siguientes conceptos NO est&aacute; ligado al desarrollo de aplicaciones basadas en servicios web:";
 choices[40]= new Array();
 choices[40][0] = "JAXB";
 choices[40][1] = "AWT";
 choices[40][2] = "AXIS";
 choices[40][3] = "WSE";
 answers[40] = choices[40][1];
 units[40] = "51";
 comments[40] = "Id Pregunta: 5707. MAP 2008 A2";


//  Id pregunta: 5742 AÃ±o de creación de pregunta: 2009-01-01
 questions[41]= "42)  En el &aacute;mbito de la Uni&oacute;n Europea, &iquest;tiene validez jur&iacute;dica la firma electr&oacute;nica?";
 choices[41]= new Array();
 choices[41][0] = "Solamente si es firma reconocida";
 choices[41][1] = "Solamente si es firma avanzada";
 choices[41][2] = "Siempre ser&aacute; admisible como prueba en el procedimiento judicial";
 choices[41][3] = "Ninguna de las anteriores es correcta";
 answers[41] = choices[41][2];
 units[41] = "30";
 comments[41] = "Id Pregunta: 5742. Directiva 1999/93/CE y Reglamento 910/2014, consideraci&oacute;n 61)";


//  Id pregunta: 5965 AÃ±o de creación de pregunta: 2010-01-01
 questions[42]= "43)  &iquest;Qu&eacute; norma espa&ntilde;ola es la vigente de &quot;Tecnolog&iacute;as de la Informaci&oacute;n. T&eacute;cnicas de seguridad. Sistema de Gesti&oacute;n de la Seguridad de la Informaci&oacute;n (SGSI). Requisitos&quot;?";
 choices[42]= new Array();
 choices[42][0] = "UNE 71502:2004";
 choices[42][1] = "UNE-ISO/IEC 27001:2007";
 choices[42][2] = "UNE 17799:2000";
 choices[42][3] = "Ninguna de las anteriores";
 answers[42] = choices[42][1];
 units[42] = "42";
 comments[42] = "Id Pregunta: 5965. Castilla La Mancha 2009";


//  Id pregunta: 5966 AÃ±o de creación de pregunta: 2010-01-01
 questions[43]= "44)  Seg&uacute;n CMMI, todos los elementos que influyen en la construcci&oacute;n del producto son:";
 choices[43]= new Array();
 choices[43][0] = "El procedimiento, la tecnolog&iacute;a, la direcci&oacute;n y las personas";
 choices[43][1] = "El proceso, la tecnolog&iacute;a y las personas";
 choices[43][2] = "El procedimiento, el proceso, la tecnolog&iacute;a y las personas";
 choices[43][3] = "El proceso y el procedimiento";
 answers[43] = choices[43][1];
 units[43] = "87";
 comments[43] = "Id Pregunta: 5966. Castilla La Mancha 2009";


//  Id pregunta: 6046 AÃ±o de creación de pregunta: 2010-01-01
 questions[44]= "45)  En el &aacute;mbito del Single Sign-On, &iquest;c&oacute;mo se denomina a la informaci&oacute;n confidencial agrupada (nombre de usuario, contrase&ntilde;a, etc) que se precisa para acceder a las aplicaciones?";
 choices[44]= new Array();
 choices[44][0] = "Credenciales";
 choices[44][1] = "Federaci&oacute;n";
 choices[44][2] = "Cookies";
 choices[44][3] = "Login";
 answers[44] = choices[44][0];
 units[44] = "118";
 comments[44] = "Id Pregunta: 6046. ";


//  Id pregunta: 6047 AÃ±o de creación de pregunta: 2010-01-01
 questions[45]= "46)  El programa marco de la UE para la innovaci&oacute;n y competitividad se denomina:";
 choices[45]= new Array();
 choices[45][0] = "eTEN";
 choices[45][1] = "IDA";
 choices[45][2] = "CIP";
 choices[45][3] = "Ninguna de las respuestas es correcta";
 answers[45] = choices[45][2];
 units[45] = "103";
 comments[45] = "Id Pregunta: 6047. ";


//  Id pregunta: 6142 AÃ±o de creación de pregunta: 2010-01-01
 questions[46]= "47)  En relaci&oacute;n con los c&oacute;decs que se utilizan para comprimir la voz en sistemas de VoIP:";
 choices[46]= new Array();
 choices[46][0] = "G.711 proporciona mejor calidad de sonido que G.729";
 choices[46][1] = "G.711 genera una tasa de transferencia menor que G.729";
 choices[46][2] = "Las dos respuestas anteriores son correctas";
 choices[46][3] = "Todas las respuestas anteriores son falsas";
 answers[46] = choices[46][0];
 units[46] = "100, 109";
 comments[46] = "Id Pregunta: 6142. ";


//  Id pregunta: 6235 AÃ±o de creación de pregunta: 2010-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l es el objetivo del Proyecto Mono de Ximian, actualmente impulsado por Novell?";
 choices[47]= new Array();
 choices[47][0] = "Crear una versi&oacute;n Java compatible con el Sistema Operativo GNU/Linux.";
 choices[47][1] = "Crear un Office open source, compatible con el Office de Microsoft.";
 choices[47][2] = "Crear un grupo de herramientas libres, basadas en GNU/Linux y compatibles con .NET seg&uacute;n lo especificado por el ECMA.";
 choices[47][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[47] = choices[47][2];
 units[47] = "115";
 comments[47] = "Id Pregunta: 6235. ";


//  Id pregunta: 6289 AÃ±o de creación de pregunta: 2010-01-01
 questions[48]= "49)  &iquest;Qu&eacute; informaci&oacute;n deber&aacute; describir, al menos, cada requisito en el an&aacute;lisis de un Sistema de Informaci&oacute;n?";
 choices[48]= new Array();
 choices[48][0] = "Una descripci&oacute;n";
 choices[48][1] = "Un nombre Descriptivo del Requisito";
 choices[48][2] = "Un c&oacute;digo &uacute;nico";
 choices[48][3] = "Todas las anteriores";
 answers[48] = choices[48][3];
 units[48] = "78";
 comments[48] = "Id Pregunta: 6289. ";


//  Id pregunta: 6298 AÃ±o de creación de pregunta: 2010-01-01
 questions[49]= "50)  &iquest;Cu&aacute;l es la diferencia entre una clase y un objeto?";
 choices[49]= new Array();
 choices[49][0] = "Las clases son un concepto din&aacute;mico mientras que los objetos son entes est&aacute;ticos";
 choices[49][1] = "Ninguna, son lo mismo";
 choices[49][2] = "Las clases son un concepto est&aacute;ticos mientras que los objetos son entes din&aacute;micos";
 choices[49][3] = "Tanto las clases como los objetos son entes est&aacute;ticos definidos en el programa fuente";
 answers[49] = choices[49][2];
 units[49] = "82";
 comments[49] = "Id Pregunta: 6298. ";


//  Id pregunta: 6316 AÃ±o de creación de pregunta: 2010-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes no es un tipo de vista en UML?";
 choices[50]= new Array();
 choices[50][0] = "Vista de Casos de Uso.";
 choices[50][1] = "Vista de Componentes.";
 choices[50][2] = "Vista est&aacute;tica.";
 choices[50][3] = "Vista de concurrencia.";
 answers[50] = choices[50][2];
 units[50] = "84";
 comments[50] = "Id Pregunta: 6316. ";


//  Id pregunta: 6319 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)  En un modelo relacional, la regla de integridad de las entidades dice :";
 choices[51]= new Array();
 choices[51][0] = "Ning&uacute;n componente de la clave primaria de una relaci&oacute;n base puede aceptar       nulos.";
 choices[51][1] = "La base de datos no debe contener valores de clave ajena sin concordancia.";
 choices[51][2] = "En una clave primaria compuesta, cada valor individual de la clave primaria puede ser nulo aunque no en su totalidad.";
 choices[51][3] = "Ning&uacute;n componente de una clave ajena de una relaci&oacute;n puede aceptar nulos.";
 answers[51] = choices[51][0];
 units[51] = "58";
 comments[51] = "Id Pregunta: 6319. ";


//  Id pregunta: 6462 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  Indique la actividad que NO forma parte del ciclo de vida del software";
 choices[52]= new Array();
 choices[52][0] = "El an&aacute;lisis del sistema de informaci&oacute;n";
 choices[52][1] = "La planificaci&oacute;n estrat&eacute;gica de sistemas de informaci&oacute;n";
 choices[52][2] = "El mantenimiento del sistema de informaci&oacute;n";
 choices[52][3] = "La gesti&oacute;n de riesgos";
 answers[52] = choices[52][1];
 units[52] = "76";
 comments[52] = "Id Pregunta: 6462. Castilla La Mancha 2009";


//  Id pregunta: 6585 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  Un fichero de car&aacute;cter personal de entidades financieras para las finalidades relacionadas con la prestaci&oacute;n de servicios financieros de acuerdo a la regulaci&oacute;n de protecci&oacute;n de datos vigente, de las siguientes medidas de seguridad cu&aacute;l no es obligatorio que cumpla?";
 choices[53]= new Array();
 choices[53][0] = "Debe existir un responsable de seguridad encargado de coordinar y controlar las medidas del documento";
 choices[53][1] = "Debe llevarse a cabo al menos una copia de respaldo semanal";
 choices[53][2] = "Debe existir un registro de accesos: usuario, hora, fichero, tipo de acceso, autorizado o denegado";
 choices[53][3] = "Todas las respuestas anteriores son correctas";
 answers[53] = choices[53][2];
 units[53] = "29";
 comments[53] = "Id Pregunta: 6585. NULL";


//  Id pregunta: 6604 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  En el an&aacute;lisis estructurado un sistema se puede modelizar completamente con:";
 choices[54]= new Array();
 choices[54][0] = "Modelo Funcional, Modelo Est&aacute;tico y Modelo Din&aacute;mico";
 choices[54][1] = "Modelo de Procesos y Modelo de Datos";
 choices[54][2] = "Modelo Funcional, Modelo de Clases y Modelo de Casos de Uso";
 choices[54][3] = "Modelo Funcional y Modelo E/R";
 answers[54] = choices[54][0];
 units[54] = "81";
 comments[54] = "Id Pregunta: 6604. NULL";


//  Id pregunta: 6620 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  Seg&uacute;n M&eacute;trica, las Interfaces son:";
 choices[55]= new Array();
 choices[55][0] = "4: Gesti&oacute;n de Proyectos; Seguridad y Gesti&oacute;n de Riesgos; Aseguramiento de la Calidad; Gesti&oacute;n de Configuraci&oacute;n";
 choices[55][1] = "3: Gesti&oacute;n de Proyectos; Gesti&oacute;n de Riesgos; Aseguramiento de la Calidad";
 choices[55][2] = "3: Gesti&oacute;n de Proyectos; Aseguramiento de la Calidad  y Gesti&oacute;n de Riesgos; Gesti&oacute;n de Configuraci&oacute;n";
 choices[55][3] = "4: Gesti&oacute;n de Proyectos; Seguridad; Gesti&oacute;n de Riesgos; Aseguramiento de la Calidad";
 answers[55] = choices[55][0];
 units[55] = "86";
 comments[55] = "Id Pregunta: 6620. NULL";


//  Id pregunta: 7143 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  Se&ntilde;ala la opci&oacute;n que NO se encuentra en los objetivos de MAGERIT v2:";
 choices[56]= new Array();
 choices[56][0] = "Concienciar a los responsables de los sistemas de informaci&oacute;n de la existencia de riesgos y de la necesidad de atajarlos a tiempo";
 choices[56][1] = "Ofrecer un m&eacute;todo sistem&aacute;tico para analizar los riesgos siguiendo el Libro Blanco de Buenas Pr&aacute;cticas en Materia de Seguridad para la Administraci&oacute;n Europea";
 choices[56][2] = "Ayudar a descubrir y planificar las medidas oportunas para mantener los riesgos bajo control";
 choices[56][3] = "Apoyar la preparaci&oacute;n a la Organizaci&oacute;n para procesos de evaluaci&oacute;n, auditoria, certificaci&oacute;n o acreditaci&oacute;n";
 answers[56] = choices[56][1];
 units[56] = "33";
 comments[56] = "Id Pregunta: 7143. Examen TIC B 2009";


//  Id pregunta: 7257 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  &iquest;Qu&eacute; dato es INCORRECTO relativo al dividendo digital espa&ntilde;ol?";
 choices[57]= new Array();
 choices[57][0] = "Consiste en las bandas de frecuencias que han sido empleadas para la difusi&oacute;n de la TDT";
 choices[57][1] = "Ocupa la banda de frecuencias de 790 a 862 MHz";
 choices[57][2] = "Se refiere a las frecuencias usadas para la difusi&oacute;n en anal&oacute;gico";
 choices[57][3] = "En el futuro, ser&aacute; utilizado para servicios diferentes al de la televisi&oacute;n";
 answers[57] = choices[57][2];
 units[57] = "105";
 comments[57] = "Id Pregunta: 7257. Examen TIC B 2009";


//  Id pregunta: 7269 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  El Centro Criptol&oacute;gico Nacional (CCN) es el organismo responsable de velar por la seguridad de las TIC en las administraciones p&uacute;blicas, y de formar en este campo a sus profesionales. El CCN depende de:";
 choices[58]= new Array();
 choices[58][0] = "El Consejo Superior para la Administraci&oacute;n Electr&oacute;nica (Ministerio de la Presidencia)";
 choices[58][1] = "La F&aacute;brica Nacional de Moneda y Timbre (Ministerio de Econom&iacute;a y Hacienda)";
 choices[58][2] = "La Direcci&oacute;n General de la Polic&iacute;a y la Guardia Civil (Ministerio del Interior)";
 choices[58][3] = "El Centro Nacional de Inteligencia (Ministerio de Defensa)";
 answers[58] = choices[58][3];
 units[58] = "111";
 comments[58] = "Id Pregunta: 7269. Examen TIC B 2009";


//  Id pregunta: 7309 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  Indique cu&aacute;l de los siguientes es un lenguaje de marcado empleado en conversi&oacute;n texto-voz (TTS):";
 choices[59]= new Array();
 choices[59][0] = "TTSXML";
 choices[59][1] = "SVML";
 choices[59][2] = "SSML";
 choices[59][3] = "Todos son lenguajes de marcado utilizados en TTS";
 answers[59] = choices[59][2];
 units[59] = "94";
 comments[59] = "Id Pregunta: 7309. NULL";


//  Id pregunta: 7324 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  Se&ntilde;ala cu&aacute;l de las siguientes no es una tecnolog&iacute;a empleada en el pago a trav&eacute;s de Internet:";
 choices[60]= new Array();
 choices[60][0] = "3D Secure";
 choices[60][1] = "UCAF";
 choices[60][2] = "Urbinet ";
 choices[60][3] = "SET ";
 answers[60] = choices[60][2];
 units[60] = "70";
 comments[60] = "Id Pregunta: 7324. NULL";


//  Id pregunta: 8175 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  Indique la Potencia a la entrada del receptor del sistema de telecomunicaciones compuesto de los siguientes elementos:- Una antena receptora a la que le llega una Potencia de entrada de 10exp-8 mW.- Un amplificador con ganancia G1 = 1000.- Una longitud de cable de 10m con atenuaci&oacute;n del mismo de 0&rsquo;3 dB/m.- Un amplificador con ganancia G2 = 100.- Un receptor.";
 choices[61]= new Array();
 choices[61][0] = "-63 dBW.";
 choices[61][1] = "+33 dBm.";
 choices[61][2] = "1exp-6 W.";
 choices[61][3] = "-53 dBm.";
 answers[61] = choices[61][0];
 units[61] = "107";
 comments[61] = "Id Pregunta: 8175. Examen TIC A1 2010";


//  Id pregunta: 8192 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  Indique la afirmaci&oacute;n correcta que aplica al DNI electr&oacute;nico: ";
 choices[62]= new Array();
 choices[62][0] = "La PKI adoptada para el DNI electr&oacute;nico asigna las funciones de Autoridad de Validaci&oacute;n a las entidades Autoridad de Certificaci&oacute;n, con objeto de tener conocimiento de la vigencia o caducidad de certificados de un determinado titular.";
 choices[62][1] = "La clave personal de acceso (PIN) podr&aacute; contener signos de puntuaci&oacute;n.";
 choices[62][2] = "Todos los certificados emitidos por DNIe contienen la extensi&oacute;n &lsquo;Key Usage&rsquo; con al menos los siguientes usos &quot;contentCommitment&quot;, &quot;Digital Signature&quot; y &quot;dataEncipherment&quot;.";
 choices[62][3] = "El tama&ntilde;o de las claves de los certificados de autenticaci&oacute;n y firma contenidos en el DNIe, es de 4096 bits. ";
 answers[62] = choices[62][1];
 units[62] = "74";
 comments[62] = "Id Pregunta: 8192. Examen TIC A1 2010";


//  Id pregunta: 8201 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  Indique la afirmaci&oacute;n INCORRECTA acerca de la BCL (Base Class Library) del framework .Net: ";
 choices[63]= new Array();
 choices[63][0] = "Contiene clases para la manipulaci&oacute;n de archivos gr&aacute;ficos. ";
 choices[63][1] = "Se organiza en clases de acceso a datos, de l&oacute;gica de negocio y de presentaci&oacute;n. ";
 choices[63][2] = "No dispone de clases para la gesti&oacute;n de la seguridad. ";
 choices[63][3] = "No depende del lenguaje de programaci&oacute;n utilizado por el desarrollador. ";
 answers[63] = choices[63][2];
 units[63] = "59";
 comments[63] = "Id Pregunta: 8201. Examen TIC A1 2010";


//  Id pregunta: 8338 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  &iquest;Qu&eacute; tipo de diagrama permite estimar la desviaci&oacute;n de un proyecto?";
 choices[64]= new Array();
 choices[64][0] = "Diagrama de Extrapolaci&oacute;n.";
 choices[64][1] = "PERT.";
 choices[64][2] = "CPM.";
 choices[64][3] = "El histograma de recursos.";
 answers[64] = choices[64][0];
 units[64] = "86";
 comments[64] = "Id Pregunta: 8338. Examen TIC A2 2010";


//  Id pregunta: 8361 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  En el contexto de herramientas de evaluaci&oacute;n de la accesibilidad web, se&ntilde;ale la herramienta INCORRECTA: ";
 choices[65]= new Array();
 choices[65][0] = "WAVE.";
 choices[65][1] = "TrueCrypt.";
 choices[65][2] = "CSS Analyser.";
 choices[65][3] = "TAW.";
 answers[65] = choices[65][1];
 units[65] = "39";
 comments[65] = "Id Pregunta: 8361. Examen TIC A2 2010";


//  Id pregunta: 8522 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  &iquest;Cu&aacute;l de los siguientes es un tipo de algoritmo de control de la congesti&oacute;n en redes conmutadas?";
 choices[66]= new Array();
 choices[66][0] = "Estado del enlace.";
 choices[66][1] = "Vector distancia.";
 choices[66][2] = "Inundaci&oacute;n de paquetes.";
 choices[66][3] = "Cubeta con goteo.";
 answers[66] = choices[66][3];
 units[66] = "104";
 comments[66] = "Id Pregunta: 8522. Examen TIC A2 2010 interna";


//  Id pregunta: 8652 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes es una caracter&iacute;stica propia del Proceso Unificado de Desarrollo de Software?";
 choices[67]= new Array();
 choices[67][0] = "Se basa en las Historias de Usuario.";
 choices[67][1] = "Proceso dirigido por casos de uso.";
 choices[67][2] = "Existe una continua refactorizaci&oacute;n del c&oacute;digo.";
 choices[67][3] = "No contempla la gesti&oacute;n del proyecto.";
 answers[67] = choices[67][1];
 units[67] = "79";
 comments[67] = "Id Pregunta: 8652. Examen TIC A2 2010 interna";


//  Id pregunta: 8774 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  a) &iquest;Cu&aacute;l de las siguientes cabeceras de extensi&oacute;n no est&aacute; especificada en la RFC 2460 que desarrolla las especificaciones de el protocolo IPv6?";
 choices[68]= new Array();
 choices[68][0] = "Hop-By-Hop Options";
 choices[68][1] = "Routing (Type 0)";
 choices[68][2] = "Fragment";
 choices[68][3] = "Authentication Header";
 answers[68] = choices[68][3];
 units[68] = "100";
 comments[68] = "Id Pregunta: 8774. Examen UPM A2 2011";


//  Id pregunta: 8861 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  El lenguaje Java Script:";
 choices[69]= new Array();
 choices[69][0] = "Permite escribir c&oacute;digo que se compila en el servidor para su ejecuci&oacute;n en el cliente";
 choices[69][1] = "Es interpretado por el navegador cuando se abre un fichero virtual en el que se encuentra c&oacute;digo javascript embebido";
 choices[69][2] = "S&oacute;lo puede ser compilado si el cliente tiene instalada una m&aacute;quina virtual java (JVM)";
 choices[69][3] = "Solamente puede ser compilado si el servidor tiene instalada una m&aacute;quina virtual java (JVM)";
 answers[69] = choices[69][1];
 units[69] = "69";
 comments[69] = "Id Pregunta: 8861. Analista Ayto. Madrid 2010";


//  Id pregunta: 8907 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  &iquest;Qu&eacute; relaci&oacute;n existe entre fichero, registro y campo?:";
 choices[70]= new Array();
 choices[70][0] = "El fichero esta formado por varios campos y a cada conjunto de campos con un significado relevante se le conoce como registro.";
 choices[70][1] = "Los registros est&aacute;n compuestos por campos, pero no tienen ninguna relaci&oacute;n con un fichero.";
 choices[70][2] = "Los ficheros contienen registros y los registros est&aacute;n formados por una serie de campos cada uno de los cuales contiene un tipo de informaci&oacute;n sobre dicho registro.";
 choices[70][3] = "Ninguna de las anteriores es correcta";
 answers[70] = choices[70][2];
 units[70] = "52";
 comments[70] = "Id Pregunta: 8907. Operador Ayto. Madrid 2010";


//  Id pregunta: 8953 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  KDE puede arrancar un n&uacute;mero m&aacute;ximo de escritorios virtuales &iquest;cu&aacute;l es ese n&uacute;mero?:";
 choices[71]= new Array();
 choices[71][0] = "16";
 choices[71][1] = "8";
 choices[71][2] = "4";
 choices[71][3] = "6";
 answers[71] = choices[71][1];
 units[71] = "53,54";
 comments[71] = "Id Pregunta: 8953. ";


//  Id pregunta: 9001 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l es el tama&ntilde;o de las celdas ATM?";
 choices[72]= new Array();
 choices[72][0] = "48 octetos";
 choices[72][1] = "64 octetos";
 choices[72][2] = "53 octetos";
 choices[72][3] = "32 octetos";
 answers[72] = choices[72][2];
 units[72] = "109";
 comments[72] = "Id Pregunta: 9001. Examen UPM A2 2011";


//  Id pregunta: 9089 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  &iquest;C&oacute;mo se realiza la protecci&oacute;n de un programa de ordenador?";
 choices[73]= new Array();
 choices[73][0] = "A la hora de crear el programa, el autor debe decidir qu&eacute; tipo de protecci&oacute;n quiere otorgarle, si a trav&eacute;s de la ley de patentes o a trav&eacute;s de la ley de propiedad intelectual";
 choices[73][1] = "A traves de la ley de patentes";
 choices[73][2] = "Nunca puede realizarse a trav&eacute;s de la ley de patentes";
 choices[73][3] = "Si el programa forma parte de una patente, tambi&eacute;n estar&aacute; protegido por la ley de propiedad intelectual";
 answers[73] = choices[73][3];
 units[73] = "36";
 comments[73] = "Id Pregunta: 9089. ";


//  Id pregunta: 9219 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  &iquest;Qu&eacute; es LUN Masking?";
 choices[74]= new Array();
 choices[74][0] = "La cabina presenta una LUN a un servidor y este puede acceder.";
 choices[74][1] = "Se evita que un servidor pueda acceder a una LUN que pertenece a otro servidor.";
 choices[74][2] = "Es un m&eacute;todo de seguridad en red SAN de la interfaz SCSCI.";
 choices[74][3] = "Todos son v&aacute;lidas";
 answers[74] = choices[74][3];
 units[74] = "48";
 comments[74] = "Id Pregunta: 9219. ";


//  Id pregunta: 9262 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  Si se quisiera un middleware para una grid, se elegir&iacute;a:";
 choices[75]= new Array();
 choices[75][0] = "Globus Toolkit. ";
 choices[75][1] = "Cluster Veritas.";
 choices[75][2] = "Arduino.";
 choices[75][3] = "Data protector. ";
 answers[75] = choices[75][0];
 units[75] = "45";
 comments[75] = "Id Pregunta: 9262. Examen TICA2-2011";


//  Id pregunta: 9332 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  Respecto a la tecnologia";
 choices[76]= new Array();
 choices[76][0] = "Dense WDM soporta menos canales que Coarse WDM y se usa en distancias mas cortas.";
 choices[76][1] = "Coarse WDM utiliza luz muy direccional para aprovechar el bajo numero de canales";
 choices[76][2] = "Dense WDM y Coarse WDM son tecnologias no interoperables";
 choices[76][3] = "Coarse WDM alcanza distancias de 1000 km";
 answers[76] = choices[76][2];
 units[76] = "99";
 comments[76] = "Id Pregunta: 9332. Corregida la respuesta A.";


//  Id pregunta: 9365 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  Acerca de Fibre Channel, se puede decir:";
 choices[77]= new Array();
 choices[77][0] = "El protocolo sigue el model de referencia OSI.";
 choices[77][1] = "Es un protocolo con 5 capas. ";
 choices[77][2] = "La capa FC3 es la capa de mapeo de protocolo.";
 choices[77][3] = "Los routers en Fibre Channel operan en la capa 3.";
 answers[77] = choices[77][1];
 units[77] = "101, 48";
 comments[77] = "Id Pregunta: 9365. ";


//  Id pregunta: 9395 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  Se&ntilde;ale la incorrecta en relaci&oacute;n con HSDPA";
 choices[78]= new Array();
 choices[78][0] = "Utiliza la t&eacute;cnica de HARQ (Hybrid Automatica Repeat Request)";
 choices[78][1] = "Hace uso de una modulaci&oacute;n adaptativa, que cambia seg&uacute;n las condiciones del canal.";
 choices[78][2] = "Existen diferentes versiones de HSDPA que proporcionan diferentes velocidades.";
 choices[78][3] = "Mediante Fast-Packet Scheduling, se asignan espacios de tiempo fijos, por prioridades, haciendo que los usuarios se turnen para que tengan un ancho de banda tambi&eacute;n fijo para la descarga de datos.";
 answers[78] = choices[78][3];
 units[78] = "108";
 comments[78] = "Id Pregunta: 9395. NULL";


//  Id pregunta: 9595 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  Para el concepto de struts, indique cu&aacute;l de las siguientes opciones es correcta:";
 choices[79]= new Array();
 choices[79][0] = "Struts es un framework que se basa en el patr&oacute;n MVC (Model View Controller) ";
 choices[79][1] = "Struts es un framework que se basa en la tecnolog&iacute;a JSF (Java Server Faces)";
 choices[79][2] = "Struts es un patr&oacute;n de dise&ntilde;o para plataformas .NET";
 choices[79][3] = "Struts es un patr&oacute;n de dise&ntilde;o para plataformas JEE ";
 answers[79] = choices[79][0];
 units[79] = "60";
 comments[79] = "Id Pregunta: 9595. Xunta Libre 2011";


//  Id pregunta: 9613 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  &iquest;Qu&eacute; alternativas existen en otros sistemas de base de datos a las vistas materializadas de Oracle?";
 choices[80]= new Array();
 choices[80][0] = "Vistas indexadas";
 choices[80][1] = "Vistas normalizadas";
 choices[80][2] = "Vistas f&iacute;sicas";
 choices[80][3] = "No existen alternativas";
 answers[80] = choices[80][0];
 units[80] = "58";
 comments[80] = "Id Pregunta: 9613. En SQL Server se llaman vistas indexadas";


//  Id pregunta: 9626 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  &iquest;Cu&aacute;l de las siguientes aplicaciones, incluida en KOffice, se emplea para generaci&oacute;n de informes?";
 choices[81]= new Array();
 choices[81][0] = "Kexi.";
 choices[81][1] = "Kivio.";
 choices[81][2] = "Konqueror.";
 choices[81][3] = "Kugar.";
 answers[81] = choices[81][3];
 units[81] = "62";
 comments[81] = "Id Pregunta: 9626. Examen TIC A1 2013";


//  Id pregunta: 9756 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  &iquest;En qu&eacute; actividad de M&eacute;trica v3 se formaliza el Plan de Mantenimiento?";
 choices[82]= new Array();
 choices[82][0] = "IAS.3 Incorporaci&oacute;n del sistema al entorno de operaci&oacute;n";
 choices[82][1] = "IAS.7 Preparaci&oacute;n del Mantenimiento del sistema";
 choices[82][2] = "IAS.8 Establecimiento del acuerdo de nivel de servicio";
 choices[82][3] = "DSI.11 Establecimiento de requisitos de implantaci&oacute;n";
 answers[82] = choices[82][1];
 units[82] = "86";
 comments[82] = "Id Pregunta: 9756. IAS.7.2 Formalizaci&oacute;n del Plan de Mantenimiento";


//  Id pregunta: 10027 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Elija la respuesta correcta:";
 choices[83]= new Array();
 choices[83][0] = "La JavaServer Pages Standard Tag Library (JSTL) es una colecci&oacute;n de bibliotecas de etiquetas con utilidades ampliamente utilizadas en el desarrollo de p&aacute;ginas web.";
 choices[83][1] = "Apache Struts es un framework de desarrollo bajo el modelo vista controlador que sirve para crear Aplicaciones web con Smalltalk.";
 choices[83][2] = "El Unified Expression Language (EL) integra los JSP con los servlets.";
 choices[83][3] = "Los Applets y las Java Server Pages (JSPs) son dos m&eacute;todos de creaci&oacute;n de p&aacute;ginas web din&aacute;micas en servidor usando el lenguaje Java.";
 answers[83] = choices[83][0];
 units[83] = "115";
 comments[83] = "Id Pregunta: 10027. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10117 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Cu&aacute;l de los siguientes equipos trabaja a nivel 1 de red:";
 choices[84]= new Array();
 choices[84][0] = "Router";
 choices[84][1] = "Switch";
 choices[84][2] = "Bridge";
 choices[84][3] = "Hub";
 answers[84] = choices[84][3];
 units[84] = "102";
 comments[84] = "Id Pregunta: 10117. ";


//  Id pregunta: 10234 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Podemos considerar a SOAP como:";
 choices[85]= new Array();
 choices[85][0] = "Un protocolo XML para ser usado con tecnolog&iacute;a RMI";
 choices[85][1] = "Una especificaci&oacute;n que describe las normas en que se envian y reciben comunicaciones basadas en XML";
 choices[85][2] = "Sustituye al protocolo RPC en sistemas distribuidos que usan CORBA";
 choices[85][3] = "Ninguna de las anteriores";
 answers[85] = choices[85][1];
 units[85] = "116";
 comments[85] = "Id Pregunta: 10234. NULL";


//  Id pregunta: 10262 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Se debe notificar al Registro General de Protecci&oacute;n de Datos";
 choices[86]= new Array();
 choices[86][0] = "Los ficheros de nueva creaci&oacute;n";
 choices[86][1] = "Las modificaciones posteriores en la informaci&oacute;n comunicada en el registro de un fichero";
 choices[86][2] = "La supresi&oacute;n de ficheros previamente registrados";
 choices[86][3] = "Todos ellos";
 answers[86] = choices[86][3];
 units[86] = "29";
 comments[86] = "Id Pregunta: 10262. Art&iacute;culos 55.1, 55.2, 58.1 y 58.2 del RD 1720/2007";


//  Id pregunta: 10517 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Cu&aacute;l es el plazo m&aacute;ximo en el cual Registro de Operadores dictar&aacute;n resoluci&oacute;n motivada cuando constate que una notificaci&oacute;n no re&uacute;ne los requisitos establecidos:";
 choices[87]= new Array();
 choices[87][0] = "10 d&iacute;as";
 choices[87][1] = "15 d&iacute;as";
 choices[87][2] = "1 mes";
 choices[87][3] = "3 meses";
 answers[87] = choices[87][1];
 units[87] = "110";
 comments[87] = "Id Pregunta: 10517. ";


//  Id pregunta: 10544 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  El quince de febrero de 2013 el Consejo de Ministros aprob&oacute; la Agenda Digital para Espa&ntilde;a como la estrategia del Gobierno para desarrollar la econom&iacute;a y la sociedad digital en Espa&ntilde;a durante el periodo 2013-2015.";
 choices[88]= new Array();
 choices[88][0] = "Esta estrategia se configura como el paraguas de todas las acciones del Gobierno en materia de Telecomunicaciones y de Sociedad de la Informaci&oacute;n. La Agenda se lidera conjuntamente por el Ministerio de Industria, Energ&iacute;a y Turismo y por el Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[88][1] = "Esta estrategia se configura como el paraguas de todas las acciones del Gobierno en materia de Telecomunicaciones y de Sociedad de la Informaci&oacute;n. La Agenda se lidera conjuntamente por el Ministerio de Industria, Energ&iacute;a y Turismo y por la Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 choices[88][2] = "Esta estrategia se configura como el paraguas de todas las acciones del Gobierno en materia de Administraci&oacute;n Electr&oacute;nica. La Agenda se lidera conjuntamente por el Ministerio de Industria, Energ&iacute;a y Turismo y por el Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[88][3] = "Esta estrategia se configura como el paraguas de todas las acciones del Gobierno en materia de Administraci&oacute;n Electr&oacute;nica. La Agenda se lidera conjuntamente por el Ministerio de Industria, Energ&iacute;a y Turismo y por la Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 answers[88] = choices[88][0];
 units[88] = "30";
 comments[88] = "Id Pregunta: 10544. http://www.agendadigital.gob.es/agenda-digital/Paginas/agenda-digital.aspx";


//  Id pregunta: 10623 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Indique qu&eacute; soluci&oacute;n tiene una mayor rapidez de repuesta para consultas multitabla:";
 choices[89]= new Array();
 choices[89][0] = "OLAP";
 choices[89][1] = "OLTP";
 choices[89][2] = "ETL";
 choices[89][3] = "OLTA";
 answers[89] = choices[89][0];
 units[89] = "68";
 comments[89] = "Id Pregunta: 10623. ";


//  Id pregunta: 10673 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  La Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas deroga expresamente:";
 choices[90]= new Array();
 choices[90][0] = "La Ley 30/1992, de 26 de noviembre, de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y del Procedimiento Administrativo Com&uacute;n.";
 choices[90][1] = "La Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los Servicios P&uacute;blicos.";
 choices[90][2] = "Ambas";
 choices[90][3] = "Ninguna de las dos Leyes se&ntilde;aladas.";
 answers[90] = choices[90][1];
 units[90] = "30";
 comments[90] = "Id Pregunta: 10673. ";


//  Id pregunta: 10712 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l no es seg&uacute;n la NTI de Modelo de Datos para el Intercambio de asientos entre las entidades registrales una caracter&iacute;stica de la misma?";
 choices[91]= new Array();
 choices[91][0] = "Inclusi&oacute;n de metadatos que faciliten el intercambio de asientos.";
 choices[91][1] = "Incorporaci&oacute;n de ficheros adjuntos a los intercambios.";
 choices[91][2] = "Orientaci&oacute;n a arquitecturas de intermediaci&oacute;n.";
 choices[91][3] = "Mejora en los mecanismos de control del intercambio.";
 answers[91] = choices[91][0];
 units[91] = "43";
 comments[91] = "Id Pregunta: 10712. ";


//  Id pregunta: 11138 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de los siguientes tipos de drivers interacciona con un Middleware que ser&aacute; el que convierta las peticiones JDBC en el protocolo espec&iacute;fico del SGBD?";
 choices[92]= new Array();
 choices[92][0] = "Native-Api Driver";
 choices[92][1] = "Network Protocol Driver";
 choices[92][2] = "Native Protocol Driver";
 choices[92][3] = "JDBC-OBDC Bridge";
 answers[92] = choices[92][1];
 units[92] = "58";
 comments[92] = "Id Pregunta: 11138. ";


//  Id pregunta: 11267 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;les NO es uno de los cuatro conceptos (conocidos como las cuatro Ps de Mintzberg) en base  a los cuales debe estar definida la estrategia de una organizaci&oacute;n seg&uacute;n ITIL versi&oacute;n 3?";
 choices[93]= new Array();
 choices[93][0] = "Perspectiva: disponer de metas y valores bien definidos y asumibles.";
 choices[93][1] = "Partici&oacute;n: definir y dividir los servicios en procesos.";
 choices[93][2] = "Planificaci&oacute;n: establecer criterios claros de desarrollo futuro.";
 choices[93][3] = "Patr&oacute;n: mantener una coherencia en la toma de decisiones y acciones adoptadas.";
 answers[93] = choices[93][1];
 units[93] = "98";
 comments[93] = "Id Pregunta: 11267. ";


//  Id pregunta: 11364 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de los siguientes enunciados no es un prop&oacute;sito de Operaci&oacute;n del Servicio?";
 choices[94]= new Array();
 choices[94][0] = "Llevar a cabo pruebas para asegurar que los servicios est&aacute;n dise&ntilde;ados para satisfacer las necesidades del negocio";
 choices[94][1] = "Entregar y gestionar servicios de TI";
 choices[94][2] = "Gestionar la tecnolog&iacute;a utilizada para entregar servicios";
 choices[94][3] = "Monitorizar el desempe&ntilde;o de la tecnolog&iacute;a y los procesos";
 answers[94] = choices[94][0];
 units[94] = "98";
 comments[94] = "Id Pregunta: 11364. ";


//  Id pregunta: 11409 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Indique la afirmaci&oacute;n INCORRECTA seg&uacute;n la Ley 9/2014:";
 choices[95]= new Array();
 choices[95][0] = "Se regular&aacute; el derecho a acceder a los servicios de emergencia de forma gratuita.";
 choices[95][1] = "Se regular&aacute; el derecho a la continuidad del servicio.";
 choices[95][2] = "Se regular&aacute; el derecho a la utilizaci&oacute;n del servicio de contestador autom&aacute;tico de llamadas.";
 choices[95][3] = "Se regular&aacute; el derecho a la facturaci&oacute;n detallada, clara y sin errores.";
 answers[95] = choices[95][2];
 units[95] = "110";
 comments[95] = "Id Pregunta: 11409. ";


//  Id pregunta: 11518 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Qu&eacute; afirmaci&oacute;n respecto al protocolo SSL NO es cierta?";
 choices[96]= new Array();
 choices[96][0] = "Responde por Secure Socket Layer.";
 choices[96][1] = "Es un est&aacute;ndar de facto propuesto por Netscape, ampliamente disponible en servidores y navegadores web.";
 choices[96][2] = "En su funcionamiento se establece primeramente una clave de sesi&oacute;n para conseguir el cifrado del canal. (confidencialidad)";
 choices[96][3] = "Es un protocolo cliente-servidor que requiere la autenticaci&oacute;n de ambas partes.";
 answers[96] = choices[96][3];
 units[96] = "111";
 comments[96] = "Id Pregunta: 11518. NULL";


//  Id pregunta: 11654 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Son protocolos de estado del enlace:";
 choices[97]= new Array();
 choices[97][0] = "OSPF y RIPv2";
 choices[97][1] = "IS-IS y OSPF";
 choices[97][2] = "IGRP y RIPv2";
 choices[97][3] = "RIPv2 e IS-IS";
 answers[97] = choices[97][1];
 units[97] = "102";
 comments[97] = "Id Pregunta: 11654. ";


//  Id pregunta: 11725 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)   &iquest;Qu&eacute; protocolo soporta la transmisi&oacute;n de informaci&oacute;n en tiempo real?";
 choices[98]= new Array();
 choices[98][0] = "UDP";
 choices[98][1] = "RTP";
 choices[98][2] = "SMTP";
 choices[98][3] = "NTP";
 answers[98] = choices[98][1];
 units[98] = "100";
 comments[98] = "Id Pregunta: 11725. NULL";


//  Id pregunta: 11747 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Cu&aacute;l de los siguientes responsables no forma parte de la Comisi&oacute;n de Transparencia y Buen Gobierno?:";
 choices[99]= new Array();
 choices[99][0] = "representante del Tribunal de Cuentas";
 choices[99][1] = "representante de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos";
 choices[99][2] = "representante de la Agencia Estatal de la Administraci&oacute;n del Estado";
 choices[99][3] = "representante de la Autoridad Independiente de Responsabilidad Fiscal";
 answers[99] = choices[99][2];
 units[99] = "41";
 comments[99] = "Id Pregunta: 11747. ";


