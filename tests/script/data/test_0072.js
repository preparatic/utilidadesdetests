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

//  Id pregunta: 153 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  El modelo orientado a los tratamientos:";
 choices[0]= new Array();
 choices[0][0] = "Trata de identificar las funciones a desarrollar por el sistema de informaci&oacute;n";
 choices[0][1] = "Trata de identificar la evoluci&oacute;n de la vida de las entidades";
 choices[0][2] = "Trata de identificar las funciones a desarrollar por el sistema inform&aacute;tico";
 choices[0][3] = "Trata de identificar la evoluci&oacute;n de la vida del sistema";
 answers[0] = choices[0][0];
 units[0] = "21";
 comments[0] = "Id Pregunta: 153. ";


//  Id pregunta: 198 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes no es una fuente principal para que una Organizaci&oacute;n identifique sus necesidades de seguiridad f&iacute;sica en el &aacute;rea de sistemas de informaci&oacute;n?";
 choices[1]= new Array();
 choices[1][0] = "Los requisitos legales, estatutarios y contractuales a los que est&eacute; obligada la Organizaci&oacute;n";
 choices[1][1] = "Los principios, objetivos y requisitos para el tratamiento de la informaci&oacute;n que la Organizaci&oacute;n ha desarrollado para soportar sus operaciones";
 choices[1][2] = "El nivel de madurez en la gesti&oacute;n de la seguirdad f&iacute;sica, medido de acuerdo con el Computer Maturity Model";
 choices[1][3] = "La valoraci&oacute;n de los riesgos de la Organizaci&oacute;n";
 answers[1] = choices[1][2];
 units[1] = "33";
 comments[1] = "Id Pregunta: 198. Examen TIC MAP B 2004";


//  Id pregunta: 241 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  En un sistema de informaci&oacute;n:";
 choices[2]= new Array();
 choices[2][0] = "La integraci&oacute;n permite mayor eficiencia conjunta e interrelaci&oacute;n m&aacute;s efectiva de actividades";
 choices[2][1] = "La integraci&oacute;n no presenta vulnerabilidades a incertidumbres por la flexibilidad que ofrece";
 choices[2][2] = "Se debe primar en todo momento la integraci&oacute;n frente a la independencia";
 choices[2][3] = "Se debe primar en todo momento la independencia frente a la integraci&oacute;n";
 answers[2] = choices[2][0];
 units[2] = "21";
 comments[2] = "Id Pregunta: 241. ";


//  Id pregunta: 412 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  Respecto al movimiento internacional de datos, la Ley Org&aacute;nica 15/99 de Protecci&oacute;n de Datos de Car&aacute;cter Personal establece:";
 choices[3]= new Array();
 choices[3][0] = "No podr&aacute;n realizarse transferencias de datos personales a pa&iacute;ses que no presenten un nivel de protecci&oacute;n equiparable al espa&ntilde;ol";
 choices[3][1] = "Dicha transferencia podr&aacute; realizarse si el destino es un Estado miembro de la Uni&oacute;n Europea";
 choices[3][2] = "S&oacute;lo podr&aacute; realizarse si el destino es un Estado miembro de la Uni&oacute;n Europea, respecto del cual la Comisi&oacute;n Europea  haya declarado que garantiza un nivel de protecci&oacute;n adecuado";
 choices[3][3] = "S&oacute;lo podr&aacute;n realizarse transferencias de datos cuando el Director de la Agencia de Protecci&oacute;n de Datos lo autorice";
 answers[3] = choices[3][1];
 units[3] = "29";
 comments[3] = "Id Pregunta: 412. ";


//  Id pregunta: 484 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes afirmaciones referentes a las recomendaciones de la ITU es falsa?:";
 choices[4]= new Array();
 choices[4][0] = "La norma X.200 (ISO 7498) define el modelo de referencia para la interconexi&oacute;n de sistemas abiertos (OSI)";
 choices[4][1] = "La norma X.400 (ISO 10021) define un sistema de gesti&oacute;n de mensajes (MHS)";
 choices[4][2] = "La norma X.500 (ISO 9594) define los servicios de directorio";
 choices[4][3] = "Ninguna de las anteriores";
 answers[4] = choices[4][3];
 units[4] = "42";
 comments[4] = "Id Pregunta: 484. ";


//  Id pregunta: 664 AÃ±o de creación de pregunta: 2006-01-01
 questions[5]= "6)  En un proceso de evaluaci&oacute;n de bienes y servicios inform&aacute;ticos,  el m&eacute;todo de ordenaci&oacute;n de alternativas PROMETHEE:";
 choices[5]= new Array();
 choices[5][0] = "Cuantifica la diferencia y al trabajar con los pesos de los criterios, considera si esa diferencia se ha hallado en un criterio m&aacute;s o menos importante para el decisor";
 choices[5][1] = "Ignora la cuant&iacute;a de la diferencia, solo se&ntilde;ala si existe o no, y al trabajar con los pesos de los criterios, ignora si esa diferencia se ha hallado en un criterio m&aacute;s o menos importante para el decisor";
 choices[5][2] = "Ignora la cuant&iacute;a de la diferencia, solo se&ntilde;ala si existe o no y al trabajar con los pesos de los criterios, considera si esa diferencia se ha hallado en un criterio m&aacute;s o menos importante para el decisor";
 choices[5][3] = "Cuantifica la diferencia, y al trabajar con los pesos de los criterios, ignora si esa diferencia se ha hallado en un criterio m&aacute;s o menos importante para el decisor";
 answers[5] = choices[5][2];
 units[5] = "34";
 comments[5] = "Id Pregunta: 664. ";


//  Id pregunta: 879 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Cu&aacute;l es el modelo de objeto de documento que utilizan los parsers o analizadores de XML?:";
 choices[6]= new Array();
 choices[6][0] = "DOKM";
 choices[6][1] = "DOM";
 choices[6][2] = "JDOC";
 choices[6][3] = "Todas son falsas";
 answers[6] = choices[6][1];
 units[6] = "69";
 comments[6] = "Id Pregunta: 879. NULL";


//  Id pregunta: 1019 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  El interfaz socket:";
 choices[7]= new Array();
 choices[7][0] = "S&oacute;lo es aplicable a TCP/IP";
 choices[7][1] = "S&oacute;lo es aplicable a UNIX";
 choices[7][2] = "Es el &uacute;nico modelo en Unix para acceder a TCP/IP";
 choices[7][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[7] = choices[7][3];
 units[7] = "100";
 comments[7] = "Id Pregunta: 1019. NULL";


//  Id pregunta: 1186 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Indicar la respuesta incorrecta sobre los procedimientos de inferencia asociados a los marcos en inteligencia artificial:";
 choices[8]= new Array();
 choices[8][0] = "Deducci&oacute;n de valores de ranuras";
 choices[8][1] = "Actualizaci&oacute;n de valores de ranuras";
 choices[8][2] = "Herencia de ranuras";
 choices[8][3] = "Equiparaci&oacute;n de marcos";
 answers[8] = choices[8][2];
 units[8] = "64";
 comments[8] = "Id Pregunta: 1186. ";


//  Id pregunta: 1207 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  La arquitectura RISC:";
 choices[9]= new Array();
 choices[9][0] = "Se emplea sobre todo en estaciones de trabajo debido a sus altas prestaciones para el c&aacute;lculo en coma flotante";
 choices[9][1] = "Permite que con un juego sencillo de instrucciones se pueda disponer de todas las que se necesiten mediante el uso de la microprogramaci&oacute;n";
 choices[9][2] = "No es adaptable al sector de los microordenadores";
 choices[9][3] = "Dificulta el dise&ntilde;o de compiladores optimizados";
 answers[9] = choices[9][3];
 units[9] = "46";
 comments[9] = "Id Pregunta: 1207. ";


//  Id pregunta: 1306 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Peque&ntilde;as aplicaciones que pueden formar parte de la p&aacute;gina Web, y que pueden viajar a trav&eacute;s de Intenet para ejecutarse en el ordenador que las reciba se denominan:";
 choices[10]= new Array();
 choices[10][0] = "Controles Java";
 choices[10][1] = "Applets";
 choices[10][2] = "Servlets";
 choices[10][3] = "Aplicaciones CGI";
 answers[10] = choices[10][1];
 units[10] = "60";
 comments[10] = "Id Pregunta: 1306. NULL";


//  Id pregunta: 1591 AÃ±o de creación de pregunta: 2003-01-01
 questions[11]= "12)  En la creaci&oacute;n de una Base de Datos, &iquest;para qu&eacute; se utiliza el comando &lsquo;ASSERT&rsquo;?";
 choices[11]= new Array();
 choices[11][0] = "Para asignar un &iacute;ndice a una tabla de la Base de Datos.";
 choices[11][1] = "Para establecer reglas de integridad.";
 choices[11][2] = "Para asignar una vista a una o varias tablas de la Base de Datos.";
 choices[11][3] = "Para hacer copias de seguridad de la Base de Datos.";
 answers[11] = choices[11][1];
 units[11] = "58";
 comments[11] = "Id Pregunta: 1591. NULL";


//  Id pregunta: 1595 AÃ±o de creación de pregunta: 2003-01-01
 questions[12]= "13)  En los sistemas gestores de bases de datos (SGBD) , &iquest;qu&eacute; diferencia hay entre el DDL y el DML?";
 choices[12]= new Array();
 choices[12][0] = "El DDL se utiliza embebido mediante un precompilador mientras que el DML solamente se puede utilizar con un compilador extendido.";
 choices[12][1] = "El DDL sirve para definir el esquema conceptual y los diferentes esquemas externos de la base de datos  mientras que el DML sirve para gestionar la informaci&oacute;n incluida en dicha base.";
 choices[12][2] = "El DDL se utiliza para definir y mantener las estructuras de la base de datos en el nivel conceptual mientras que el DML sirve para la definici&oacute;n y mantenimiento de las vistas en el nivel externo (usuario).";
 choices[12][3] = "El DDL es el lenguaje de base de datos de los sistemas MVS y el DML es el lenguaje de base de datos para los entornos DOS/VSE.";
 answers[12] = choices[12][1];
 units[12] = "58";
 comments[12] = "Id Pregunta: 1595. ";


//  Id pregunta: 1664 AÃ±o de creación de pregunta: 2004-01-01
 questions[13]= "14)  &iquest;C&oacute;mo se conoce la taxonom&iacute;a, que clasifica las arquitecturas de ordenadores en SISD, SIMD, MISD, MIMD?";
 choices[13]= new Array();
 choices[13][0] = "Kuck";
 choices[13][1] = "Treleaven";
 choices[13][2] = "Flynn";
 choices[13][3] = "Gajski y Pier";
 answers[13] = choices[13][2];
 units[13] = "45";
 comments[13] = "Id Pregunta: 1664. ";


//  Id pregunta: 1672 AÃ±o de creación de pregunta: 2004-01-01
 questions[14]= "15)  &iquest;Qu&eacute; es un cluster?";
 choices[14]= new Array();
 choices[14][0] = "Un sistema paralelo distribuido de &aacute;mbito local";
 choices[14][1] = "Un sistema paralelo distribuido de &aacute;mbito global";
 choices[14][2] = "Un sistema distribuido paralelo de &aacute;mbito local";
 choices[14][3] = "Un sistema distribuido paralelo de &aacute;mbito global";
 answers[14] = choices[14][0];
 units[14] = "45";
 comments[14] = "Id Pregunta: 1672. ";


//  Id pregunta: 1704 AÃ±o de creación de pregunta: 2006-01-01
 questions[15]= "16)  La t&eacute;cnica usada para incrementar la velocidad de los PC, copiando a memoria RAM el c&oacute;digo de la memoria BIOS ROM tras el arranque, se denomina:";
 choices[15]= new Array();
 choices[15][0] = "Overclocking";
 choices[15][1] = "Ghosting";
 choices[15][2] = "Shadowing";
 choices[15][3] = "La BIOS no se puede ejecutar en una memoria RAM";
 answers[15] = choices[15][2];
 units[15] = "47";
 comments[15] = "Id Pregunta: 1704. ";


//  Id pregunta: 1838 AÃ±o de creación de pregunta: 2006-01-01
 questions[16]= "17)  Indicar la respuesta falsa respecto al protocolo SET (Secure Electronic Transaction):";
 choices[16]= new Array();
 choices[16][0] = "Fue desarrollado por Visa y MasterCard";
 choices[16][1] = "Hace uso de criptograf&iacute;a mediante DES y RSA";
 choices[16][2] = "Garantiza la autenticaci&oacute;n e integridad de la comunicaci&oacute;n";
 choices[16][3] = "Fue desarrollado tras el fracso de la tecnolog&iacute;a 3D-Secure de Visa";
 answers[16] = choices[16][3];
 units[16] = "70";
 comments[16] = "Id Pregunta: 1838. NULL";


//  Id pregunta: 1997 AÃ±o de creación de pregunta: 2004-01-01
 questions[17]= "18)  &iquest;Cu&aacute;l de los siguientes modelos de ciclo de vida, hace enfasis en el control de riesgos?";
 choices[17]= new Array();
 choices[17][0] = "Espiral";
 choices[17][1] = "Cascada";
 choices[17][2] = "Ambos";
 choices[17][3] = "Ninguno";
 answers[17] = choices[17][0];
 units[17] = "76";
 comments[17] = "Id Pregunta: 1997. Pregunta TIC-B 2003";


//  Id pregunta: 2459 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Los inconvenientes del modelo en espiral son&hellip;:";
 choices[18]= new Array();
 choices[18][0] = "Dependencia de la experiencia del personal";
 choices[18][1] = "No es tan estandar como METRICA";
 choices[18][2] = "No es adecuado para la orientaci&oacute;n a objetos";
 choices[18][3] = "Todas las anteriores son ciertas";
 answers[18] = choices[18][0];
 units[18] = "76";
 comments[18] = "Id Pregunta: 2459. ";


//  Id pregunta: 2786 AÃ±o de creación de pregunta: 2006-01-01
 questions[19]= "20)  La Planificaci&oacute;n de Sistemas de Informaci&oacute;n, seg&uacute;n M&Eacute;TRICA 3, tiene por objeto:";
 choices[19]= new Array();
 choices[19][0] = "Obtener un marco de referencia para el desarrollo de sistemas de informaci&oacute;n que respondan a los objetivos estrat&eacute;gicos y operativos de la organizaci&oacute;n.";
 choices[19][1] = "Recoger el conjunto de reglas que aseguran una decisi&oacute;n &oacute;ptima en cada momento.";
 choices[19][2] = "La previsi&oacute;n en fechas de la realizaci&oacute;n del conjunto de actividades que comprende la construcci&oacute;n del sistema, teniendo en cuenta los recursos a emplear y el coste de los mismos.";
 choices[19][3] = "Todo lo anterior.";
 answers[19] = choices[19][0];
 units[19] = "86";
 comments[19] = "Id Pregunta: 2786. NULL";


//  Id pregunta: 2891 AÃ±o de creación de pregunta: 2005-01-01
 questions[20]= "21)  &iquest;Cu&aacute;l de los siguientes servicios no ser&aacute; considerado un servicio b&aacute;sico a prestar dentro de la ed SARA (Intranet Administrativa)?:";
 choices[20]= new Array();
 choices[20][0] = "Servicio de DNS";
 choices[20][1] = "Servicio de Foros de discusi&oacute;n";
 choices[20][2] = "Servicio de Videoconferencia";
 choices[20][3] = "Servicio de Correo electr&oacute;nico";
 answers[20] = choices[20][2];
 units[20] = "113.44";
 comments[20] = "Id Pregunta: 2891. NULL";


//  Id pregunta: 2936 AÃ±o de creación de pregunta: 2004-01-01
 questions[21]= "22)  &iquest;Cu&aacute;l de los siguientes no es uno de los estadios en la estandarizaci&oacute;n del IAB?";
 choices[21]= new Array();
 choices[21][0] = "Borrador de Internet";
 choices[21][1] = "Est&aacute;ndar propuesto";
 choices[21][2] = "Borrador de est&aacute;ndar";
 choices[21][3] = "Est&aacute;ndar temporal";
 answers[21] = choices[21][3];
 units[21] = "112,42";
 comments[21] = "Id Pregunta: 2936. Similar a examen TIC MAP A 2004";


//  Id pregunta: 2999 AÃ±o de creación de pregunta: 2004-01-01
 questions[22]= "23)  En 1988, la CCITT cre&oacute; el est&aacute;ndar X.500, sobre servicios de directorio que, posteriormente, fue adoptado por la ISO. El est&aacute;ndar X.500 organiza las entradas en el directorio de manera:";
 choices[22]= new Array();
 choices[22][0] = "Asociativa";
 choices[22][1] = "Jer&aacute;rquica";
 choices[22][2] = "En estrella";
 choices[22][3] = "Como una pila FIFO";
 answers[22] = choices[22][1];
 units[22] = "106";
 comments[22] = "Id Pregunta: 2999. ";


//  Id pregunta: 3055 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Dentro de la norma X.400, &iquest; qu&eacute; se entiende por Agente de Usuario (UA)?:";
 choices[23]= new Array();
 choices[23][0] = "El usuario que puede ser una persona o programa de aplicaci&oacute;n";
 choices[23][1] = "Agente que almacena y retransmite los mensajes destinados a un usuario";
 choices[23][2] = "Agente que enruta los mensajes.";
 choices[23][3] = "Proceso de aplicaci&oacute;n que interactua con el sistema de transferencia de mensajes";
 answers[23] = choices[23][3];
 units[23] = "106";
 comments[23] = "Id Pregunta: 3055. ";


//  Id pregunta: 3189 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Dentro del modelo OSI la funci&oacute;n de 'compatibilizaci&oacute;n de ficheros de distintos formatos', corresponde al nivel:";
 choices[24]= new Array();
 choices[24][0] = "Nivel de red";
 choices[24][1] = "Nivel de transporte";
 choices[24][2] = "Nivel de sesi&oacute;n";
 choices[24][3] = "Nivel de presentaci&oacute;n";
 answers[24] = choices[24][3];
 units[24] = "100";
 comments[24] = "Id Pregunta: 3189. NULL";


//  Id pregunta: 3234 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  &iquest;Cu&aacute;l de los siguientes protocolos no pertenece a la capa de aplicaci&oacute;n en la arquitectura TCP/IP?:";
 choices[25]= new Array();
 choices[25][0] = "SLIP";
 choices[25][1] = "SMTP";
 choices[25][2] = "DNS";
 choices[25][3] = "RPC";
 answers[25] = choices[25][0];
 units[25] = "100, 106, 116, 112";
 comments[25] = "Id Pregunta: 3234. ";


//  Id pregunta: 3313 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  &iquest;Qu&eacute; t&eacute;cnica de codificaci&oacute;n utiliza Bluetooth?:";
 choices[26]= new Array();
 choices[26][0] = "Spread spectrum con secuencia directa";
 choices[26][1] = "Spread spectrum con salto de frecuencia";
 choices[26][2] = "&quot;a&quot; y &quot;b&quot;";
 choices[26][3] = "Ninguna de las anteriores";
 answers[26] = choices[26][1];
 units[26] = "107";
 comments[26] = "Id Pregunta: 3313. NULL";


//  Id pregunta: 3419 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Indicar cu&aacute;l de las siguientes desventajas no corresponde al uso de un filtro de paquetes como cortafuegos:";
 choices[27]= new Array();
 choices[27][0] = "Sobrecarga";
 choices[27][1] = "Dificultad de la implementaci&oacute;n de reglas de filtrado";
 choices[27][2] = "Posibilidad de ataques de &quot;IP spoofing&quot;";
 choices[27][3] = "Posibilidad de ataques de &quot;source routing&quot;";
 answers[27] = choices[27][0];
 units[27] = "111";
 comments[27] = "Id Pregunta: 3419. NULL";


//  Id pregunta: 3575 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  En una red de &aacute;rea local que utiliza la t&eacute;cnica de acceso al medio conocida como contienda, una de las siguientes afirmaciones es falsa. Se&ntilde;&aacute;lela:";
 choices[28]= new Array();
 choices[28][0] = "Se pueden producir colisiones";
 choices[28][1] = "Cualquier estaci&oacute;n de la Red de &Aacute;rea Local puede transmitir en cualquier momento";
 choices[28][2] = "Se pueden establecer prioridades";
 choices[28][3] = "Ofrece buen rendimiento a baja carga";
 answers[28] = choices[28][2];
 units[28] = "101";
 comments[28] = "Id Pregunta: 3575. ";


//  Id pregunta: 3637 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  La red digital de servicios integrados (RDSI):";
 choices[29]= new Array();
 choices[29][0] = "Procede de la evoluci&oacute;n de la red telef&oacute;nica conmutada";
 choices[29][1] = "El acceso b&aacute;sico disponen de dos canales B (64 Kbit/s) que emplean conmutaci&oacute;n de paquetes";
 choices[29][2] = "El acceso desde el terminal de abonado se realiza mediante fibra &oacute;ptica";
 choices[29][3] = "El acceso b&aacute;sico no se puede utilizar para conexi&oacute;n de centralitas digitales PABX's";
 answers[29] = choices[29][0];
 units[29] = "103";
 comments[29] = "Id Pregunta: 3637. ";


//  Id pregunta: 3693 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  Las direcciones de tipo B en IPv4:";
 choices[30]= new Array();
 choices[30][0] = "Comienzan por '110'";
 choices[30][1] = "incluyen entre ellas a la direcci&oacute;n 193.168.25.73";
 choices[30][2] = "destina 16 bits para los sistemas";
 choices[30][3] = "es utilizada para direcciones multicast";
 answers[30] = choices[30][2];
 units[30] = "100";
 comments[30] = "Id Pregunta: 3693. NULL";


//  Id pregunta: 3714 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  Los barcos cableros:";
 choices[31]= new Array();
 choices[31][0] = "No existen";
 choices[31][1] = "Son barcos-factor&iacute;a que fabrican cableado de altas prestaciones en alta mar aprovechando las mejores condiciones fiscales de las aguas internacionales";
 choices[31][2] = "Son barcos cuya misi&oacute;n principal es instalar en el fondo marino los cables submarinos de alta capacidad que unen distintos puntos separados mediante mares u oc&eacute;anos";
 choices[31][3] = "Todo lo anterior es falso";
 answers[31] = choices[31][2];
 units[31] = "99";
 comments[31] = "Id Pregunta: 3714. ";


//  Id pregunta: 3751 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  MIB son unas siglas asociadas a:";
 choices[32]= new Array();
 choices[32][0] = "SGBD orientadas a objetos";
 choices[32][1] = "Lenguaje de programaci&oacute;n C++";
 choices[32][2] = "Sistemas de gesti&oacute;n de redes";
 choices[32][3] = "Sistemas OLAP";
 answers[32] = choices[32][2];
 units[32] = "104";
 comments[32] = "Id Pregunta: 3751. ";


//  Id pregunta: 4050 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  &iquest;Qu&eacute; no se suele permitir en una DMZ?";
 choices[33]= new Array();
 choices[33][0] = "Conexiones de ordenadores en la DMZ a ordenadores en la red interna";
 choices[33][1] = "Conexiones de ordenadores en la red interna a ordenadores en la dmz";
 choices[33][2] = "Conexiones de ordenadores en la dmz a ordenadores en la red externa";
 choices[33][3] = "Se permiten todas las anteriores";
 answers[33] = choices[33][3];
 units[33] = "111";
 comments[33] = "Id Pregunta: 4050. NULL";


//  Id pregunta: 4061 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  El puerto reservado para el protocolo SMTP es";
 choices[34]= new Array();
 choices[34][0] = "80";
 choices[34][1] = "25";
 choices[34][2] = "110";
 choices[34][3] = "69";
 answers[34] = choices[34][1];
 units[34] = "112";
 comments[34] = "Id Pregunta: 4061. ";


//  Id pregunta: 4139 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  La transmisi&oacute;n de datos a trav&eacute;s de la red p&uacute;blica de forma que los nodos de enrutado no sean conscientes de que la transmisi&oacute;n es parte de una red privada se llama";
 choices[35]= new Array();
 choices[35][0] = "Tunel";
 choices[35][1] = "Red Privada Virtual (VPN)";
 choices[35][2] = "IPSec";
 choices[35][3] = "SSL";
 answers[35] = choices[35][0];
 units[35] = "111";
 comments[35] = "Id Pregunta: 4139. NULL";


//  Id pregunta: 4309 AÃ±o de creación de pregunta: 2007-01-01
 questions[36]= "37)  Ernesto es un jefe de proyecto que en una nueva aplicaci&oacute;n que est&aacute; realizando en su Ministerio ha decidido emplear la tecnolog&iacute;a CORBA de objetos distribuidos. La raz&oacute;n m&aacute;s probable por la que Ernesto ha decidido utilizar CORBA es";
 choices[36]= new Array();
 choices[36][0] = "CORBA es la tecnolog&iacute;a de objetos distribuidos m&aacute;s sencilla";
 choices[36][1] = "CORBA es multilenguaje, con interfaces Fortran, Java, Lisp, Ada, etc.";
 choices[36][2] = "CORBA es ideal para sistemas cerrados Java";
 choices[36][3] = "CORBA es una tecnolog&iacute;a de Microsoft, y se adapta muy bien para desarrollos en Visual Basic y J++";
 answers[36] = choices[36][1];
 units[36] = "62";
 comments[36] = "Id Pregunta: 4309. ";


//  Id pregunta: 4351 AÃ±o de creación de pregunta: 2007-01-01
 questions[37]= "38)  &iquest;Qu&eacute; se entiende por servicio universal, seg&uacute;n la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones?";
 choices[37]= new Array();
 choices[37][0] = "Que todos los usuarios finales puedan obtener una conexi&oacute;n a la red telef&oacute;nica p&uacute;blica.";
 choices[37][1] = "Que los usuarios finales con discapacidad tengan acceso a los mismos servicios que el resto de los usuarios finales.";
 choices[37][2] = "El conjunto definido de servicios cuya prestaci&oacute;n se garantiza para todos los usuarios finales con independencia de su localizaci&oacute;n geogr&aacute;fica, con una calidad determinada y a un precio asequible.";
 choices[37][3] = "Que se ponga a disposici&oacute;n de los abonados al servicio telef&oacute;nico disponible al p&uacute;blico una gu&iacute;a general de n&uacute;meros de abonados.";
 answers[37] = choices[37][2];
 units[37] = "110";
 comments[37] = "Id Pregunta: 4351. ";


//  Id pregunta: 4364 AÃ±o de creación de pregunta: 2007-01-01
 questions[38]= "39)  Sea el array [10, 3, 12, 7, 2, 20]. Si se emplea el algoritmo de ordenaci&oacute;n por selecci&oacute;n, despu&eacute;s de tres iteraciones (ordenaci&oacute;n ascendente), el estado del array ser&aacute;";
 choices[38]= new Array();
 choices[38][0] = "[3, 10, 12, 7, 2, 20]";
 choices[38][1] = "[2, 3, 12, 7, 10, 20]";
 choices[38][2] = "[2, 3, 7, 10, 12, 20]";
 choices[38][3] = "[2, 3, 7, 12, 10, 20]";
 answers[38] = choices[38][3];
 units[38] = "";
 comments[38] = "Id Pregunta: 4364. ";


//  Id pregunta: 4390 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  El diagrama de transici&oacute;n de estados es una notaci&oacute;n:";
 choices[39]= new Array();
 choices[39][0] = "Est&aacute;tica.";
 choices[39][1] = "H&iacute;brida.";
 choices[39][2] = "Din&aacute;mica.";
 choices[39][3] = "Estructural.";
 answers[39] = choices[39][2];
 units[39] = "84";
 comments[39] = "Id Pregunta: 4390. Examen TIC MAP B 2006";


//  Id pregunta: 4539 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  Las siglas CCNA se corresponden con:";
 choices[40]= new Array();
 choices[40][0] = "Una metodolog&iacute;a de gesti&oacute;n de proyectos en Tecnolog&iacute;as de is Informaci&oacute;n.";
 choices[40][1] = "Una metodolog&iacute;a para el an&aacute;lisis y gesti&oacute;n de riesgos en Tecnolog&iacute;as de Ia Informaci&oacute;n.";
 choices[40][2] = "Metodolog&iacute;a de gesti&oacute;n de Ia seguridad en las Tecnolog&iacute;as de Ia Informaci&oacute;n.";
 choices[40][3] = "Una certificaci&oacute;n de Cisco.";
 answers[40] = choices[40][3];
 units[40] = "";
 comments[40] = "Id Pregunta: 4539. ";


//  Id pregunta: 4564 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  &iquest;Cual de las siguientes afirmaciones sobre dispositivos NAS es falsa?:";
 choices[41]= new Array();
 choices[41][0] = "Ia capacidad m&aacute;xima de almacenamiento de los dispositivos NAS es inferior al de las redes SAN";
 choices[41][1] = "los dispositivos NAS utilizan un protocolo SCSI para suministrar los archivos a los clientes";
 choices[41][2] = "la conexi&oacute;n entre los dispositivos NAS y la red se realiza a trav&eacute;s de TCP/IP";
 choices[41][3] = "los dispositivos NAS son unidades de almacenamiento, grandes servidores dedicados exclusivamente a tal fin que se conectan a la red";
 answers[41] = choices[41][1];
 units[41] = "48";
 comments[41] = "Id Pregunta: 4564. ";


//  Id pregunta: 4589 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  &iquest;Cual es el tama&ntilde;o de cabecera en una unidad de datos del protocolo lPv6?";
 choices[42]= new Array();
 choices[42][0] = "es variable";
 choices[42][1] = "de 20 octetos";
 choices[42][2] = "de 40 octetos";
 choices[42][3] = "similar a lPv4";
 answers[42] = choices[42][2];
 units[42] = "100";
 comments[42] = "Id Pregunta: 4589. ";


//  Id pregunta: 4737 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  &iquest;Cual es el primer criterio de calidad del Modelo EFQM?";
 choices[43]= new Array();
 choices[43][0] = "Liderazgo";
 choices[43][1] = "Oportunidad";
 choices[43][2] = "Satisfacci&oacute;n del cliente";
 choices[43][3] = "Satisfacer los requisitos";
 answers[43] = choices[43][0];
 units[43] = "92";
 comments[43] = "Id Pregunta: 4737. Examen 2006 JCYL";


//  Id pregunta: 5208 AÃ±o de creación de pregunta: 2003-01-01
 questions[44]= "45)  En el modelo de calidad del software de McCall, cu&aacute;l de los siguientes es un factor de explotaci&oacute;n u operaci&oacute;n:";
 choices[44]= new Array();
 choices[44][0] = "Mantenibilidad";
 choices[44][1] = "Flexibilidad";
 choices[44][2] = "Usabilidad";
 choices[44][3] = "Reusabilidad";
 answers[44] = choices[44][2];
 units[44] = "88";
 comments[44] = "Id Pregunta: 5208. NULL";


//  Id pregunta: 5222 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  La actividad &quot;Asignaci&oacute;n detallada de tareas&quot; a qu&eacute; grupo de actividades pertenece";
 choices[45]= new Array();
 choices[45][0] = "Actividades de Inicio de Proyecto (GPI)";
 choices[45][1] = "Actividades de Seguimiento y Control (GPS)";
 choices[45][2] = "Actividades de Finalizaci&oacute;n de Proyecto";
 choices[45][3] = "Actividades de Planificaci&oacute;n de Proyecto (GPP)";
 answers[45] = choices[45][1];
 units[45] = "86";
 comments[45] = "Id Pregunta: 5222. NULL";


//  Id pregunta: 5260 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  Se&ntilde;ale la falsa:";
 choices[46]= new Array();
 choices[46][0] = "Las m&eacute;tricas de complejidad intentan principalmente evaluar la posible mantenibilidad del software.";
 choices[46][1] = "Las t&eacute;cnicas de Halstead y McCabe se engloban dentro de estas m&eacute;tricas.";
 choices[46][2] = "La complejidad ciclom&aacute;tica de McCabe es una medida cualitativa de la complejidad l&oacute;gica de un programa";
 choices[46][3] = "La t&eacute;cnica de Halstead define los token, como la unidad sint&aacute;ctica m&aacute;s elemental distinguible por un compilador.";
 answers[46] = choices[46][2];
 units[46] = "88";
 comments[46] = "Id Pregunta: 5260. NULL";


//  Id pregunta: 5525 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  Las siglas OCR responden a";
 choices[47]= new Array();
 choices[47][0] = "Optical Character Recognition";
 choices[47][1] = "Optical Computer Redefinition";
 choices[47][2] = "Optimal Character Recognition";
 choices[47][3] = "Online Character Recognition";
 answers[47] = choices[47][0];
 units[47] = "94";
 comments[47] = "Id Pregunta: 5525. ";


//  Id pregunta: 5539 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  En la recuperaci&oacute;n de la informaci&oacute;n, los modelos cl&aacute;sicos basados en aproximaciones estad&iacute;sticas son";
 choices[48]= new Array();
 choices[48][0] = "Booleano";
 choices[48][1] = "Vectorial";
 choices[48][2] = "Probabil&iacute;stico";
 choices[48][3] = "Todos los anteriores son modelos cl&aacute;sicos";
 answers[48] = choices[48][3];
 units[48] = "96";
 comments[48] = "Id Pregunta: 5539. NULL";


//  Id pregunta: 5570 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  &iquest;Qu&eacute; afirmaci&oacute;n sobre los puentes NO es correcta?";
 choices[49]= new Array();
 choices[49][0] = "Da servicio a un n&uacute;mero de ordenadores mayor que el que puede cubrirse con una red local";
 choices[49][1] = "Puede conectar redees heterog&eacute;neas";
 choices[49][2] = "Puede conectar medios f&iacute;sicos distintos";
 choices[49][3] = "Un problema en una subred afecta a toda la red";
 answers[49] = choices[49][3];
 units[49] = "102";
 comments[49] = "Id Pregunta: 5570. ";


//  Id pregunta: 5642 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  Se&ntilde;ale cu&aacute;l de los siguientes es el protocolo utilizado para el registro y publicaci&oacute;n de servicios web:";
 choices[50]= new Array();
 choices[50][0] = "SOAP";
 choices[50][1] = "UDDI";
 choices[50][2] = "WSDL";
 choices[50][3] = "UDIT";
 answers[50] = choices[50][1];
 units[50] = "51";
 comments[50] = "Id Pregunta: 5642. NULL";


//  Id pregunta: 5651 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  Seg&uacute;n el RD 1720/2007, se implantar&aacute;n, adem&aacute;s de las medidas de nivel b&aacute;sico, las de nivel medio, a los siguientes ficheros:";
 choices[51]= new Array();
 choices[51][0] = "Aquellos de los que sean responsables Administraciones tributaria y se relacionen con el ejercicio de sus potestades";
 choices[51][1] = "Los relativos a la comision de infracciones administrativas o penales";
 choices[51][2] = "Aquellos que contengan datos derivados de la violencia de g&eacute;nero";
 choices[51][3] = "La a) y la b) son correctas";
 answers[51] = choices[51][3];
 units[51] = "29";
 comments[51] = "Id Pregunta: 5651. ";


//  Id pregunta: 5705 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares no est&aacute; asociado a los servicios web?";
 choices[52]= new Array();
 choices[52][0] = "SOAP";
 choices[52][1] = " UDDI";
 choices[52][2] = "CORBA";
 choices[52][3] = "HTTP";
 answers[52] = choices[52][2];
 units[52] = "51";
 comments[52] = "Id Pregunta: 5705. NULL";


//  Id pregunta: 5709 AÃ±o de creación de pregunta: 2009-01-01
 questions[53]= "54)  Como se denomina al conjunto de servicios y protocolos de los servicios web:";
 choices[53]= new Array();
 choices[53][0] = "Web Service Protocol Stack.";
 choices[53][1] = "Web Service Protocol Set.";
 choices[53][2] = "UDDI (Universal Description, Discovery and Integration).";
 choices[53][3] = "SOAP (Simple Object Access Protocol).";
 answers[53] = choices[53][0];
 units[53] = "51";
 comments[53] = "Id Pregunta: 5709. MAP 2008 A2";


//  Id pregunta: 5719 AÃ±o de creación de pregunta: 2009-01-01
 questions[54]= "55)  &iquest;En cu&aacute;l de los siguientes archivos de un sistema GNU/Linux se encuentra la asignaci&oacute;n entre particiones de disco duro y directorios donde son montadas?";
 choices[54]= new Array();
 choices[54][0] = "mountd.conf";
 choices[54][1] = "fstab";
 choices[54][2] = "filesystems";
 choices[54][3] = ".mnt-conf";
 answers[54] = choices[54][1];
 units[54] = "54";
 comments[54] = "Id Pregunta: 5719. ";


//  Id pregunta: 5801 AÃ±o de creación de pregunta: 2009-01-01
 questions[55]= "56)  El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica depende de:";
 choices[55]= new Array();
 choices[55][0] = "La Conferencia Sectorial de Administraci&oacute;n P&uacute;blica.";
 choices[55][1] = "La Comisi&oacute;n Permanente del Consejo Superior de Administraci&oacute;n Electr&oacute;nica.";
 choices[55][2] = "El Director General para el impulso de la Administraci&oacute;n electr&oacute;nica.";
 choices[55][3] = "Presidencia del Gobierno.";
 answers[55] = choices[55][0];
 units[55] = "30";
 comments[55] = "Id Pregunta: 5801. MAP 2008 A2";


//  Id pregunta: 5809 AÃ±o de creación de pregunta: 2009-01-01
 questions[56]= "57)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto de UML?:";
 choices[56]= new Array();
 choices[56][0] = "Los paquetes pueden contener clases, objetos, relaciones, componentes, nodos y diagramas asociados.";
 choices[56][1] = "Los diagramas de clases expresan la estructura est&aacute;tica de un sistema, con las clases, los atributos y las operaciones.";
 choices[56][2] = "Las relaciones entre los casos de uso son de subordinaci&oacute;n, dependencia, igualdad y superioridad.";
 choices[56][3] = "Los nodos del diagrama de despliegue se representan con un cubo, y las l&iacute;neas que los unen simbolizan los soportes de las comunicaciones.";
 answers[56] = choices[56][2];
 units[56] = "84";
 comments[56] = "Id Pregunta: 5809. NULL";


//  Id pregunta: 5837 AÃ±o de creación de pregunta: 2009-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de las afirmaciones siguientes NO es uno de los principios incluidos en el &quot;Manifiesto &Aacute;gil&quot; (Manifiesto por elDesarrollo &Aacute;gil de Software)?";
 choices[57]= new Array();
 choices[57][0] = "Aceptamos requisitos cambiantes, excepto en etapas avanzadas";
 choices[57][1] = "Entregamos software frecuentemente, con una periodicidad desde un par de semanas a un par de meses, con preferencia por los periodos m&aacute;s cortos posibles";
 choices[57][2] = "Las mejores arquitecturas, requisitos y dise&ntilde;os surgen de equipos que se auto organizan";
 choices[57][3] = "El m&eacute;todo m&aacute;s eficiente y efectivo de comunicar la informaci&oacute;n a un equipo de desarrollo y entre los miembros del mismo es la conversaci&oacute;n cara a cara";
 answers[57] = choices[57][0];
 units[57] = "79";
 comments[57] = "Id Pregunta: 5837. MAP 2008 A1";


//  Id pregunta: 6302 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de los siguientes no es una propiedad del modelo orientado a objetos?";
 choices[58]= new Array();
 choices[58][0] = "Abstracci&oacute;n";
 choices[58][1] = "Encapsulaci&oacute;n";
 choices[58][2] = "Independencia";
 choices[58][3] = "Modularidad";
 answers[58] = choices[58][2];
 units[58] = "82";
 comments[58] = "Id Pregunta: 6302. ";


//  Id pregunta: 6352 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes sentencias relativas al software libre es verdadera?";
 choices[59]= new Array();
 choices[59][0] = "El software libre es por definici&oacute;n gratuito";
 choices[59][1] = "Es lo mismo que el software de fuentes abiertas";
 choices[59][2] = "No existe software libre para Windows";
 choices[59][3] = "Ninguna de las anteriores";
 answers[59] = choices[59][3];
 units[59] = "61";
 comments[59] = "Id Pregunta: 6352. ";


//  Id pregunta: 6645 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  &iquest;Qu&eacute; modelo de estimaci&oacute;n de esfuerzo no requiere datos hist&oacute;ricos de otros proyectos?";
 choices[60]= new Array();
 choices[60][0] = "Modelo de Waltson y F&eacute;lix";
 choices[60][1] = "Modelo de Bailey y Basili";
 choices[60][2] = "Modelo de Putnam";
 choices[60][3] = "Todos estos modelos requieren datos hist&oacute;ricos";
 answers[60] = choices[60][2];
 units[60] = "89";
 comments[60] = "Id Pregunta: 6645. NULL";


//  Id pregunta: 7142 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  Las siglas CAAT en relaci&oacute;n con los Sistemas de Informaci&oacute;n significan";
 choices[61]= new Array();
 choices[61][0] = "Computed-Assisted Audit Techniques";
 choices[61][1] = "Campaign Against Automotive Trenes";
 choices[61][2] = "Centro para la Administraci&oacute;n de Alternativas Tecnol&oacute;gicas";
 choices[61][3] = "Computer-Assisted Advanced Tools";
 answers[61] = choices[61][0];
 units[61] = "31";
 comments[61] = "Id Pregunta: 7142. Examen TIC B 2009";


//  Id pregunta: 7295 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  Indique cu&aacute;l de los siguientes es un algoritmo empleado en adaptaci&oacute;n al locutor para reconocimiento autom&aacute;tico del habla (ASR):";
 choices[62]= new Array();
 choices[62][0] = "MLLR";
 choices[62][1] = "MAP";
 choices[62][2] = "a y b son correctas";
 choices[62][3] = "a y b son incorrectas";
 answers[62] = choices[62][2];
 units[62] = "94";
 comments[62] = "Id Pregunta: 7295. NULL";


//  Id pregunta: 7992 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)   En el sistema de soporte a la decisi&oacute;n SSD-AAPP v 3.0, el umbral de saciedad m&aacute;ximo para un criterio:";
 choices[63]= new Array();
 choices[63][0] = " Indica el valor m&aacute;ximo (en un criterio a minimizar) que debe cumplir la puntuaci&oacute;n de una alternativa para ese criterio para que pueda ser considerada.";
 choices[63][1] = " Indica el valor m&aacute;ximo (en un criterio a maximizar) que debe cumplir la puntuaci&oacute;n de una alternativa para ese criterio para que pueda ser considerada.";
 choices[63][2] = " Indica (en un criterio a maximizar) que si la puntuaci&oacute;n de ese criterio toma un valor mayor no incidir&aacute; en la puntuaci&oacute;n obtenida.";
 choices[63][3] = " Indica el valor m&aacute;ximo que se puede asignar al peso de ese criterio.";
 answers[63] = choices[63][2];
 units[63] = "NULL";
 comments[63] = "Id Pregunta: 7992. Map 2007";


//  Id pregunta: 8007 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)   Elija la opci&oacute;n correcta con respecto al funcionamiento de los registros telem&aacute;ticos en d&iacute;as inh&aacute;biles, seg&uacute;n el Real Decreto 209/2003, de 21 de febrero:";
 choices[64]= new Array();
 choices[64][0] = " Los registros telem&aacute;ticos no estar&aacute;n en funcionamiento los d&iacute;as inh&aacute;biles.";
 choices[64][1] = " La entrada de las solicitudes, escritos y comunicaciones recibidas en un d&iacute;a inh&aacute;bil para el registro telem&aacute;tico se entender&aacute; efectuada en la primera hora del primer d&iacute;a h&aacute;bil siguiente.";
 choices[64][2] = " La entrada de las solicitudes, escritos y comunicaciones recibidas en un d&iacute;a inh&aacute;bil para el registro telem&aacute;tico se entender&aacute; efectuada en la &uacute;ltima hora del &uacute;ltimo d&iacute;a h&aacute;bil anterior.";
 choices[64][3] = " No se permitir&aacute; la entrada de solicitudes, escritos y comunicaciones en un d&iacute;a inh&aacute;bil, y por consiguiente la entrada de las solicitudes, escritos y comunicaciones recibidas en un d&iacute;a inh&aacute;bil para el registro telem&aacute;tico no se entender&aacute; efectuada.";
 answers[64] = choices[64][1];
 units[64] = "NULL";
 comments[64] = "Id Pregunta: 8007. Map 2007";


//  Id pregunta: 8274 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  En relaci&oacute;n con la seguridad en UNIX y particularmente con la auditor&iacute;a del sistema, cu&aacute;l de los siguientes archivos de registro de equipos UNIX se guardan en texto claro, y pueden visualizarse con una orden como cat o similares:";
 choices[65]= new Array();
 choices[65][0] = "syslog, wtmp, lastlog, sulog. ";
 choices[65][1] = "syslogd, utmpx, faillog, loginlog. ";
 choices[65][2] = "syslog, debug, sulog, loginlog. ";
 choices[65][3] = "syslog, btmp, lastlog, loginlog. ";
 answers[65] = choices[65][2];
 units[65] = "53, 54";
 comments[65] = "Id Pregunta: 8274. Examen TIC A1 2010";


//  Id pregunta: 8370 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  La norma UNE 139802:2003 establece requisitos de accesibilidad del software de los ordenadores para !as personas con discapacidad, agrupados en:";
 choices[66]= new Array();
 choices[66][0] = "7 categor&iacute;as: Teclado, dispositivos apuntadores, pantalla, sonido y rnultimedia, notificaci&oacute;n al usuario, informaci&oacute;n de objetos, tiempo.";
 choices[66][1] = "8 categor&iacute;as: Teclado, dispositivos apuntadores, pantalla, sonido y rnultimedia, notificaci&oacute;n al usuario, informaci&oacute;n de objetos, tiempo, documentaci&oacute;n.";
 choices[66][2] = "11 categor&iacute;as: Principios generales, teclado, dispositivos apuntadores, pantalla, sonido, multimedia, notificaci&oacute;n al usuario, informaci&oacute;n de objetos, tiempo, documentaci&oacute;n, otros";
 choices[66][3] = "10 categor&iacute;as: Principios generales, teclado, dispositivos apuntadores, pantalla, sonido y multimedia, notificaci&oacute;n al usuario, informaci&oacute;n de objetos, tiempo, documentaci&oacute;n, otros.";
 answers[66] = choices[66][3];
 units[66] = "39";
 comments[66] = "Id Pregunta: 8370. Examen TIC A2 2010";


//  Id pregunta: 8383 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  El cable UTP (Unshielded Twisted Pair):";
 choices[67]= new Array();
 choices[67][0] = "No es tan susceptible a las interferencias electromagn&eacute;ticas como el cable STP (Shielded Twisted Pair). ";
 choices[67][1] = "Es m&aacute;s barato y f&aacute;cil de manipular que el STP.";
 choices[67][2] = "Tiene una l&aacute;mina externa de aluminio o de cobre trenzado alrededor del conjunto de pares.";
 choices[67][3] = "Tiene una pantalla protectora para cada par de hilos.";
 answers[67] = choices[67][1];
 units[67] = "99";
 comments[67] = "Id Pregunta: 8383. Examen TIC A2 2010";


//  Id pregunta: 8475 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  El est&aacute;ndar IEEE 802.16 hace referencia a:";
 choices[68]= new Array();
 choices[68][0] = "Bluetooth.";
 choices[68][1] = "Wi-Fi.";
 choices[68][2] = "Wimax.";
 choices[68][3] = "Wireless LAN.";
 answers[68] = choices[68][2];
 units[68] = "107";
 comments[68] = "Id Pregunta: 8475. Examen TIC A2 2010 interna";


//  Id pregunta: 8642 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l de los siguientes algoritmos de ordenaci&oacute;n es inestable?";
 choices[69]= new Array();
 choices[69][0] = "Mergesort";
 choices[69][1] = "Bubblesort";
 choices[69][2] = "Quicksort";
 choices[69][3] = "Insertionsort";
 answers[69] = choices[69][2];
 units[69] = "96";
 comments[69] = "Id Pregunta: 8642. Examen TIC A2 2010 interna";


//  Id pregunta: 8684 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  Indique el puerto utilizado por el protocolo ldap sobre SSL:";
 choices[70]= new Array();
 choices[70][0] = "563";
 choices[70][1] = "443";
 choices[70][2] = "336";
 choices[70][3] = "636";
 answers[70] = choices[70][3];
 units[70] = "74";
 comments[70] = "Id Pregunta: 8684. Examen UPM A2 2011";


//  Id pregunta: 9026 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  A efectos de facturaci&oacute;n, en una red corporativa donde exista una salida/entrada directa a la red de m&oacute;viles (enlace desde la red corporativa a la red de m&oacute;viles directo) para todas las llamadas desde/a m&oacute;viles:";
 choices[71]= new Array();
 choices[71][0] = "Se considerar&aacute;n tres tipos de tarifas en funci&oacute;n del origen y destino de la llamada corporativa: fijo-m&oacute;vil, m&oacute;vil-fijo y m&oacute;vil-m&oacute;vil.";
 choices[71][1] = "Todas las llamadas corporativas fijo-m&oacute;vil y m&oacute;vil-fijo tendr&aacute;n consideraci&oacute;n de m&oacute;vil-m&oacute;vil.";
 choices[71][2] = "Esta es un servicio que no lo dan los operadores de m&oacute;viles y es preciso salir a m&oacute;viles a trav&eacute;s de la red p&uacute;blica de conmutaci&oacute;n de circuitos.";
 choices[71][3] = "Todas las llamadas corporativas fijo-m&oacute;vil y m&oacute;vil-fijo tendr&aacute;n consideraci&oacute;n de fijo-fijo.";
 answers[71] = choices[71][1];
 units[71] = "103";
 comments[71] = "Id Pregunta: 9026. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9099 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  &iquest;De los siguientes cual no forma parte del ciclo de vida de los derechos digitales?";
 choices[72]= new Array();
 choices[72][0] = "Empaquetado.";
 choices[72][1] = "Envio.";
 choices[72][2] = "Protecci&oacute;n y venta.";
 choices[72][3] = "Consumo.";
 answers[72] = choices[72][1];
 units[72] = "37";
 comments[72] = "Id Pregunta: 9099. ";


//  Id pregunta: 9134 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l no se considera una arquitectura de un sistema f&iacute;sico?";
 choices[73]= new Array();
 choices[73][0] = "de bus m&uacute;ltiple";
 choices[73][1] = "paralela";
 choices[73][2] = "Pipeline";
 choices[73][3] = "Fault Tolerant";
 answers[73] = choices[73][0];
 units[73] = "47";
 comments[73] = "Id Pregunta: 9134. ";


//  Id pregunta: 9214 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  &iquest;C&oacute;mo es SAN iSCSI respecto a FC?";
 choices[74]= new Array();
 choices[74][0] = "A nivel funcional pueden ofrecer las mismas capacidades pero es m&aacute;s cara.";
 choices[74][1] = "Igual";
 choices[74][2] = "A nivel funcional pueden ofrecer las mismas capacidades pero es m&aacute;s barata";
 choices[74][3] = "SCSI se utiliza en tecnolog&iacute;as NAS y no en SAN.";
 answers[74] = choices[74][2];
 units[74] = "48";
 comments[74] = "Id Pregunta: 9214. ";


//  Id pregunta: 9259 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l es el sistema operativo auspiciado por la Linux Foundation como un sistema preparado para funcionar en netbooks, dispositivos port&aacute;tiles, sistemas en veh&iacute;culos, televisiones y tel&eacute;fonos multimedia?";
 choices[75]= new Array();
 choices[75][0] = "Meego. ";
 choices[75][1] = "Android. ";
 choices[75][2] = "Chrome OS. ";
 choices[75][3] = "Symbian OS. ";
 answers[75] = choices[75][0];
 units[75] = "47";
 comments[75] = "Id Pregunta: 9259. Examen TICA2-2011";


//  Id pregunta: 9275 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l de los siguientes NO es un tipo de bus interno paralelo?";
 choices[76]= new Array();
 choices[76][0] = "ISA";
 choices[76][1] = "HTI";
 choices[76][2] = "PCI";
 choices[76][3] = "AGP";
 answers[76] = choices[76][1];
 units[76] = "47";
 comments[76] = "Id Pregunta: 9275. Examen TIC-A1 2011";


//  Id pregunta: 9294 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l de las siguientes no es una clave para asegurar la eficacia de los planes de continuidad seg&uacute;n la norma ISO 17799?";
 choices[77]= new Array();
 choices[77][0] = "Probar las copias de seguridad.";
 choices[77][1] = "Separaci&oacute;n l&oacute;gica de las copias de seguridad.";
 choices[77][2] = "No descartar amenazas.";
 choices[77][3] = "La ISO 17799 no define claves sino dominios de control.";
 answers[77] = choices[77][1];
 units[77] = "32";
 comments[77] = "Id Pregunta: 9294. ";


//  Id pregunta: 9320 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  Cu&aacute;l de las siguientes no es un requisito que debe cumplir una evidencia";
 choices[78]= new Array();
 choices[78][0] = "Suficiente";
 choices[78][1] = "Eficiente";
 choices[78][2] = "Relevante";
 choices[78][3] = "Competente";
 answers[78] = choices[78][1];
 units[78] = "31";
 comments[78] = "Id Pregunta: 9320. ";


//  Id pregunta: 9383 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  Se&ntilde;ale la respuesta incorrecta en relaci&oacute;n con 4G:";
 choices[79]= new Array();
 choices[79][0] = "Admite la utilizaci&oacute;n de antenas MIMO";
 choices[79][1] = "Para el servicio de voz utiliza el canal VOL, cuyo acceso se negocia previamente a trav&eacute;s del canal VOL-ALLOC";
 choices[79][2] = "Utiliza modulaciones adaptativas para el aprovechamiento &oacute;ptimo del canal.";
 choices[79][3] = "Utiliza multiplexaci&oacute;n estad&iacute;stica en el dominio de la frecuencia.";
 answers[79] = choices[79][1];
 units[79] = "108";
 comments[79] = "Id Pregunta: 9383. NULL";


//  Id pregunta: 9588 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  De acuerdo con el Real Decreto 4/2010, por el que se regula el Esquema Nacional de Interoperabilidad, aquella dimensi&oacute;n de la interoperabilidad relativa a que la informaci&oacute;n intercambiada pueda ser interpretable de forma autom&aacute;tica y reutilizable por aplicaciones que no intervinieron en su creaci&oacute;n, es la referente a la:";
 choices[80]= new Array();
 choices[80][0] = "Interoperabilidad, en general.";
 choices[80][1] = "Interoperabilidad organizativa. ";
 choices[80][2] = "Interoperabilidad t&eacute;cnica. ";
 choices[80][3] = "Interoperabilidad sem&aacute;ntica. ";
 answers[80] = choices[80][3];
 units[80] = "43";
 comments[80] = "Id Pregunta: 9588. Examen TIC A2 2011";


//  Id pregunta: 9745 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  &iquest;Qu&eacute; es el Marco Com&uacute;n de Evaluaci&oacute;n (CAF) 2013?";
 choices[81]= new Array();
 choices[81][0] = "CAF ofrece dos sistemas de puntuaci&oacute;n, el cl&aacute;sico y el refinado, s&oacute;lo el primero de ellos est&aacute; fundamentado sobre el Ciclo de Deming.";
 choices[81][1] = "Es uno del los ejes del modelo EFQM.";
 choices[81][2] = "Es una herramienta de gesti&oacute;n de la calidad total, desarrollada por y para el sector p&uacute;blico.";
 choices[81][3] = "Es una autoevaluaci&oacute;n que debe realizar una organizaci&oacute;n conforme a lo que dicta la norma ISO 9000.";
 answers[81] = choices[81][2];
 units[81] = "92";
 comments[81] = "Id Pregunta: 9745. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9928 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  En IPv4 el n&uacute;mero m&aacute;ximo de fragmentos por datagrama son:";
 choices[82]= new Array();
 choices[82][0] = "8192.";
 choices[82][1] = "1024.";
 choices[82][2] = "512.";
 choices[82][3] = "2048.";
 answers[82] = choices[82][0];
 units[82] = "100";
 comments[82] = "Id Pregunta: 9928. NULL";


//  Id pregunta: 10037 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Con respecto al protocolo DNS. &iquest;Cu&aacute;l de las siguientes opciones NO es una parte de un mensaje DNS?";
 choices[83]= new Array();
 choices[83][0] = "Cabecera.";
 choices[83][1] = "Checksum.";
 choices[83][2] = "Registros de recursos de Respuesta.";
 choices[83][3] = "Registros de recursos de Autoridad.";
 answers[83] = choices[83][1];
 units[83] = "112";
 comments[83] = "Id Pregunta: 10037. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10045 AÃ±o de creación de pregunta: 2010-01-01
 questions[84]= "85)  La recomendaci&oacute;n X.25 de la ITU (International Telecommunication Union) se refiere a:";
 choices[84]= new Array();
 choices[84][0] = "Interfaz entre el equipo terminal de datos y el equipo de terminaci&oacute;n del circuito de datos para equipos terminales que funcionan en el modo paquete y est&aacute;n conectados a redes p&uacute;blicas de datos por circuitos especializados.";
 choices[84][1] = "Interfaz equipo terminal de datos/equipo de terminaci&oacute;n del circuito de datos para los equipos terminales de datos arr&iacute;tmicos con acceso a la facilidad de ensamblado/desensamblado de paquetes en una red p&uacute;blica de datos situada en elmismo pa&iacute;s.";
 choices[84][2] = "Utilizaci&oacute;n, en las redes p&uacute;blicas de datos, de equipos terminales de datos dise&ntilde;ados para su conexi&oacute;n con m&oacute;dems s&iacute;ncronos de la serie V.";
 choices[84][3] = "Interfaz entre el equipo terminal de datos y el equipo de terminaci&oacute;n del circuito de datos para funcionamiento s&iacute;ncrono en redes p&uacute;blicas de datos.";
 answers[84] = choices[84][0];
 units[84] = "103";
 comments[84] = "Id Pregunta: 10045. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10153 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[85]= new Array();
 choices[85][0] = "Los funcionarios habilitados podr&aacute;n recibir notificaciones postales";
 choices[85][1] = "Los funcionarios habilitados podr&aacute;n recibir notificaciones por comparecencia electr&oacute;nica en la sede";
 choices[85][2] = "Los funcionarios habilitados podr&aacute;n recibir notificaciones en la direcci&oacute;n electr&oacute;nica habilitada del ciudadano";
 choices[85][3] = "Los funcionarios habilitados no podr&aacute;n recibir ning&uacute;n tipo de notificaciones que requieran la identificaci&oacute;n y autenticaci&oacute;n del ciudadano";
 answers[85] = choices[85][1];
 units[85] = "43";
 comments[85] = "Id Pregunta: 10153. ";


//  Id pregunta: 10211 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Respecto a las alternativas de suministro de equipamiento hardware, &iquest;a qu&eacute; cap&iacute;tulo presupuestario se imputar&iacute;a el arrendamiento de equipos sin opci&oacute;n a compra?";
 choices[86]= new Array();
 choices[86][0] = "Cap&iacute;tulo 1";
 choices[86][1] = "Cap&iacute;tulo 2";
 choices[86][2] = "Cap&iacute;tulo 4";
 choices[86][3] = "Cap&iacute;tulo 6";
 answers[86] = choices[86][1];
 units[86] = "35";
 comments[86] = "Id Pregunta: 10211. ";


//  Id pregunta: 10478 AÃ±o de creación de pregunta: 2010-01-01
 questions[87]= "88)  Si quiero cambiar el PIN del DNI electr&oacute;nico:";
 choices[87]= new Array();
 choices[87][0] = "Puedo hacerlo desde mi casa pero necesito un lector de huella dactilar.";
 choices[87][1] = "S&oacute;lo puedo hacerlo desde dispositivos autorizados por la Direcci&oacute;n General de la Polic&iacute;a.";
 choices[87][2] = "Puedo hacerlo usando mi navegador web.";
 choices[87][3] = "S&oacute;lo puedo hacerlo si tengo el PUK.";
//  Id pregunta: 10564 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  Para desarrollar un plan de continuidad de negocio de &eacute;xito es fundamental  la participaci&oacute;n del usuario final durante el proceso de: ";
 choices[88]= new Array();
 choices[88][0] = "Estrategias de recuperaci&oacute;n";
 choices[88][1] = "Desarrollo del plan detallado";
 choices[88][2] = "An&aacute;lisis de impacto al negocio (BIA)";
 choices[88][3] = "Mantenimiento y pruebas";
 answers[88] = choices[88][2];
 units[88] = "31, 32, 33";
 comments[88] = "Id Pregunta: 10564. Durante el BIA se debe entender y conocer las necesidades del negocio, sus operaciones y el impacto en el negocio ante un desastre";


//  Id pregunta: 10574 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;Qu&eacute; especificaciones permiten eliminar los certificados administrativos en papel mediante el intercambio electr&oacute;nico de datos entre Administraciones?";
 choices[89]= new Array();
 choices[89][0] = "SCSP";
 choices[89][1] = "SIGP";
 choices[89][2] = "SAML";
 choices[89][3] = "SIR";
 answers[89] = choices[89][0];
 units[89] = "44";
 comments[89] = "Id Pregunta: 10574. Sustituci&oacute;n de Certificados en Soporte Papel ";


//  Id pregunta: 10841 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l de las siguientes normas define un est&aacute;ndar para pruebas de software?";
 choices[90]= new Array();
 choices[90][0] = "ISO 29781";
 choices[90][1] = "ISO 29621";
 choices[90][2] = "ISO 29382";
 choices[90][3] = "ISO 29119";
 answers[90] = choices[90][3];
 units[90] = "0";
 comments[90] = "Id Pregunta: 10841. Examen GSI 2014";


//  Id pregunta: 10852 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  En .NET, &iquest;qu&eacute; es el Managed Extensibility Framework (MEF)?";
 choices[91]= new Array();
 choices[91][0] = "Es una arquitectura que proporciona primitivos as&iacute;ncronos de paso de aprobaci&oacute;n de mensajes sin tipo.";
 choices[91][1] = "Es un modelo extensible de programaci&oacute;n, motor y herramientas para generar con rapidez aplicaciones de flujo de trabajo en Windows.";
 choices[91][2] = "Es una biblioteca de clases portable que permite escribir y compilar ensamblados administrados capaces de funcionar en m&uacute;ltiples plataformas de .NET.";
 choices[91][3] = "Es una biblioteca para crear aplicaciones ligeras y extensibles.";
 answers[91] = choices[91][3];
 units[91] = "59, 115";
 comments[91] = "Id Pregunta: 10852. Examen GSI 2014";


//  Id pregunta: 11020 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de las siguientes es una es una metodolog&iacute;a de gesti&oacute;n de software que ayuda a definir e implementar procesos para optimizar la inversi&oacute;n en software cumpliendo con la legislaci&oacute;n aplicable?";
 choices[92]= new Array();
 choices[92][0] = "BSA";
 choices[92][1] = "SAM";
 choices[92][2] = "Copyleft";
 choices[92][3] = "Copyright";
 answers[92] = choices[92][1];
 units[92] = "37";
 comments[92] = "Id Pregunta: 11020. SAM (Gesti&oacute;n de Activos de Software)";


//  Id pregunta: 11101 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l de los siguientes es un principio b&aacute;sico del Esquema Nacional de Interoperabilidad?";
 choices[93]= new Array();
 choices[93][0] = "La interoperabilidad como cualidad integral";
 choices[93][1] = "Car&aacute;cter multidimensional de la interoperabilidad";
 choices[93][2] = "Enfoque de soluciones multilaterales";
 choices[93][3] = "Todos los anteriores";
 answers[93] = choices[93][3];
 units[93] = "30";
 comments[93] = "Id Pregunta: 11101. ";


//  Id pregunta: 11106 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Seleccione la respuesta correcta sobre las estrategias de recuperaci&oacute;n.";
 choices[94]= new Array();
 choices[94][0] = "Los Cold Sites son instalaciones parcialmente configurados, que permiten la recuperaci&oacute;n en menos de una semana.";
 choices[94][1] = "Las instalaciones redundantes permiten una recuperaci&oacute;n inmediata ante una interrupci&oacute;n";
 choices[94][2] = "Los Hot Sites tienen un coste menor que los Cold Sites";
 choices[94][3] = "La configuraci&oacute;n m&aacute;s adecuada para un Warm Site es de mirroring.";
 answers[94] = choices[94][1];
 units[94] = "32";
 comments[94] = "Id Pregunta: 11106. ";


//  Id pregunta: 11286 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Para qu&eacute; sirve un servicio SOS del Open Geospatial Consortium (OGC)?";
 choices[95]= new Array();
 choices[95][0] = "Consulta de cat&aacute;logo de metadatos";
 choices[95][1] = "Localizaci&oacute;n de datos vectoriales";
 choices[95][2] = "Presentaci&oacute;n de coberturas r&aacute;ster";
 choices[95][3] = "Consulta de observaciones de sensores";
 answers[95] = choices[95][3];
 units[95] = "67";
 comments[95] = "Id Pregunta: 11286. ";


//  Id pregunta: 11296 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  En relaci&oacute;n a la gesti&oacute;n documental, de contenidos y portales &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[96]= new Array();
 choices[96][0] = "La gesti&oacute;n de portales suele constituir la capa de presentaci&oacute;n, y la documental la de persistencia";
 choices[96][1] = "La gesti&oacute;n de contenidos suele constituir la capa de persistencia, mientras que la gesti&oacute;n documental es la capa de negocio";
 choices[96][2] = "La gesti&oacute;n de portales suele constituir la capa de negocio y la gesti&oacute;n documental la de presentaci&oacute;n";
 choices[96][3] = "La gesti&oacute;n de portales suele constituir la capa de persistencia, mientras que la de contenidos es la de presentaci&oacute;n";
 answers[96] = choices[96][0];
 units[96] = "95";
 comments[96] = "Id Pregunta: 11296. ";


//  Id pregunta: 11373 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; proceso es responsable de revisar regularmente los acuerdos de nivel operativo (OLA)?";
 choices[97]= new Array();
 choices[97][0] = "Gesti&oacute;n de suministradores";
 choices[97][1] = "Gesti&oacute;n de niveles de servicio";
 choices[97][2] = "Gesti&oacute;n del porfolio de servicios";
 choices[97][3] = "Gesti&oacute;n de demanda";
 answers[97] = choices[97][1];
 units[97] = "98";
 comments[97] = "Id Pregunta: 11373. ";


//  Id pregunta: 11541 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  En relaci&oacute;n con las t&eacute;cnicas de planificaci&oacute;n de proyectos se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[98]= new Array();
 choices[98][0] = "Una diferencia entre PERT y CPM es que este &uacute;ltimo considera que los tiempos de las actividades se conocen en forma determin&iacute;stica y se pueden variar cambiando el nivel de recursos utilizados.";
 choices[98][1] = "PERT considera que cuando el n&uacute;mero de actividades de un proyecto es lo suficientemente elevado, la duraci&oacute;n del proyecto es una variable aleatoria que converge en una distribuci&oacute;n Normal.";
 choices[98][2] = "El diagrama de GANTT realiza la planificaci&oacute;n y la programaci&oacute;n al mismo tiempo.";
 choices[98][3] = "Son correctas todas las afirmaciones anteriores.";
 answers[98] = choices[98][3];
 units[98] = "89";
 comments[98] = "Id Pregunta: 11541. NULL";


//  Id pregunta: 11656 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Se&ntilde;ale la frase incorrecta:";
 choices[99]= new Array();
 choices[99][0] = "La versi&oacute;n 3 de SNMP proporciona mejoras en materia de seguridad con respecto a la versi&oacute;n 2.";
 choices[99][1] = "SNMP es un protocolo de la capa de aplicaci&oacute;n.";
 choices[99][2] = "Las versiones 1, 2 y 3 son compatibles entre s&iacute;.";
 choices[99][3] = "Los mensajes GetNextRequest se utilizan para recorrer una tabla de objetos.";
