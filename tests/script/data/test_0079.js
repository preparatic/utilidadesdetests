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

//  Id pregunta: 85 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Qu&eacute; significa la ley de Pareto del 80 / 20?:";
 choices[0]= new Array();
 choices[0][0] = "Con el 20 % del esfuerzo se resuelven el 80 % de los problemas";
 choices[0][1] = "El 80 % de los problemas son originados por el 20 % de la plantilla";
 choices[0][2] = "Con el 80 % del esfuerzo se resuelve el 20 % de los problemas, los m&aacute;s graves";
 choices[0][3] = "El 20 % de los problemas se resuelven autom&aacute;ticamente resolviendo primero el 80 % de ellos";
 answers[0] = choices[0][0];
 units[0] = "25";
 comments[0] = "Id Pregunta: 85. ";


//  Id pregunta: 114 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  De acuerdo con la Ley de Protecci&oacute;n de Datos, mantener los ficheros, locales, programas o equipos que contengan datos de car&aacute;cter personal sin las debidas condiciones de seguridad que por v&iacute;a reglamentaria se determinen, es una infracci&oacute;n:";
 choices[1]= new Array();
 choices[1][0] = "Leve ";
 choices[1][1] = "Grave";
 choices[1][2] = "Muy grave ";
 choices[1][3] = "No es infracci&oacute;n";
 answers[1] = choices[1][1];
 units[1] = "29";
 comments[1] = "Id Pregunta: 114. ";


//  Id pregunta: 185 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  En el modelo de Donovan la expresi&oacute;n 'mano amiga' se refiere a:";
 choices[2]= new Array();
 choices[2][0] = "Empresas que han optado por instalar de forma distribuida el hardware, y el usuario tiene poder de decisi&oacute;n";
 choices[2][1] = "Empresas en las que se ha descentralizado el hardware y el usuario tiene poder de decisi&oacute;n";
 choices[2][2] = "Empresas en las que se ha descentralizado el hardware y el desarrollo, pero el usuario no tiene poder de decisi&oacute;n";
 choices[2][3] = "Empresas en las que se ha descentralizado el hardware y el desarrollo y el usuario tiene poder de decisi&oacute;n";
 answers[2] = choices[2][1];
 units[2] = "22";
 comments[2] = "Id Pregunta: 185. donovan - nolan";


//  Id pregunta: 280 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  La auditoria es:";
 choices[3]= new Array();
 choices[3][0] = "Actividad que tiene por objeto la evaluaci&oacute;n de conformidad de dise&ntilde;os, productos software, procesos o sistema";
 choices[3][1] = "Proceso por el que el sistema de calidad de una empresa es auditado para comprobar el cumplimiento de determinadas normas";
 choices[3][2] = "Descripci&oacute;n completa de un producto software y las interrrelaciones de sus elementos";
 choices[3][3] = "Estructura organizativa, procedimientos, actividades y recursos que juntos aseguran que los productos software satisfacen las necesidades impl&iacute;citas o establecidas en contrato por los clientes";
 answers[3] = choices[3][0];
 units[3] = "31";
 comments[3] = "Id Pregunta: 280. ";


//  Id pregunta: 356 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Las cuatro etapas del modelo inicial de Nolan son:";
 choices[4]= new Array();
 choices[4][0] = "Iniciaci&oacute;n, contagio, control y madurez";
 choices[4][1] = "Iniciaci&oacute;n, expansi&oacute;n, control y madurez";
 choices[4][2] = "Iniciaci&oacute;n, contagio, formalizaci&oacute;n y madurez";
 choices[4][3] = "Iniciaci&oacute;n, expansi&oacute;n, formalizaci&oacute;n y madurez";
 answers[4] = choices[4][3];
 units[4] = "22";
 comments[4] = "Id Pregunta: 356. nolan";


//  Id pregunta: 453 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Se&ntilde;ale la opci&oacute;n incorrecta entre las siguientes: la Agencia de Protecci&oacute;n de Datos es:";
 choices[5]= new Array();
 choices[5][0] = "Un Ente de Derecho P&uacute;blico con personalidad jur&iacute;dica propia";
 choices[5][1] = "Se relaciona con el Gobierno a trav&eacute;s del Ministerio de Administraciones P&uacute;blicas";
 choices[5][2] = "Ejerce sus funciones a trav&eacute;s del Director, cuyos actos ponen fin a la v&iacute;a administrativa";
 choices[5][3] = "Act&uacute;a con plena independencia de las AA.PP.";
 answers[5] = choices[5][1];
 units[5] = "29";
 comments[5] = "Id Pregunta: 453. ";


//  Id pregunta: 458 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Si se desea una estructura organizacional caracterizada por su orientaci&oacute;n a los usuarios se establecer&aacute; una organizaci&oacute;n:";
 choices[6]= new Array();
 choices[6][0] = "Funcional";
 choices[6][1] = "Proyecto-staff";
 choices[6][2] = "Proyecto-funcional";
 choices[6][3] = "Por aplicaciones";
 answers[6] = choices[6][3];
 units[6] = "26";
 comments[6] = "Id Pregunta: 458. ";


//  Id pregunta: 459 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Si un grupo de personas constituyen una asociaci&oacute;n (por ejemplo de antiguos alumnos, o de padres de alumnos) y recaban informaci&oacute;n de car&aacute;cter personal de sus miembros, almacen&aacute;ndola en un fichero:";
 choices[7]= new Array();
 choices[7][0] = "S&oacute;lo deber&aacute;n registrar el fichero en la Agencia de Protecci&oacute;n de Datos si el contenido de &eacute;stos es lo suficientemente sensible";
 choices[7][1] = "Seg&uacute;n la finalidad para la que se use y seg&uacute;n el tama&ntilde;o de dicho fichero podr&aacute;n estar exentos de de registrar el fichero";
 choices[7][2] = "Tienen que registrar el fichero en la Agencia de Protecci&oacute;n de Datos";
 choices[7][3] = "Deber&iacute;an registrar el fichero, pero dado que la Agencia de Protecci&oacute;n de Datos s&oacute;lo se ocupa en la pr&aacute;ctica de grandes casos de fraude  pueden pasar sin ser sancionados sin ning&uacute;n tipo de problema";
 answers[7] = choices[7][2];
 units[7] = "29";
 comments[7] = "Id Pregunta: 459. ";


//  Id pregunta: 729 AÃ±o de creación de pregunta: 2004-01-01
 questions[8]= "9)  En el lenguaje XML, el t&eacute;rmino que se utiliza para definir &quot;Las reglas que determinan el conjunto de marcas y su sintaxis&quot; es:";
 choices[8]= new Array();
 choices[8][0] = "DXL (Document eXtended Language)";
 choices[8][1] = "DTD (Document Type Definition)";
 choices[8][2] = "DOM (Document Object Model)";
 choices[8][3] = "DML (Document Markup Language)";
 answers[8] = choices[8][1];
 units[8] = "69";
 comments[8] = "Id Pregunta: 729. Examen TIC MAP B 2004";


//  Id pregunta: 760 AÃ±o de creación de pregunta: 2004-01-01
 questions[9]= "10)  En tecnolog&iacute;a microsoft, para trabajar con bases de datos,utilizaremos";
 choices[9]= new Array();
 choices[9][0] = "ODBC";
 choices[9][1] = "ADO";
 choices[9][2] = "OLE DB";
 choices[9][3] = "Cualquiera de los anteriores";
 answers[9] = choices[9][3];
 units[9] = "59";
 comments[9] = "Id Pregunta: 760. ";


//  Id pregunta: 839 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes afirmaciones es incorrecta, si hablamos de las ventajas derivadas del uso de vistas en una Base de datos?:";
 choices[10]= new Array();
 choices[10][0] = "Pueden verse los mismos datos por diferentes usuarios";
 choices[10][1] = "Los intercambios de campos entre tablas f&iacute;sicas son transparentes a las vistas del usuario";
 choices[10][2] = "Los intercambios de campos entre tablas f&iacute;sicas no son transparentes a las vistas del usuario";
 choices[10][3] = "Ocultar campos de datos importantes a los usuarios que no deben ser manipulados";
 answers[10] = choices[10][2];
 units[10] = "57";
 comments[10] = "Id Pregunta: 839. ";


//  Id pregunta: 855 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Cu&aacute;l de las siguientes proposiciones es falsa respecto de WML?:";
 choices[11]= new Array();
 choices[11][0] = "El significado de las siglas WML es Wireless Mask Language";
 choices[11][1] = "El lenguaje WML est&aacute; basado en el est&aacute;ndar XML";
 choices[11][2] = "La DTD puede estar en la red o puede almacenarse localmente";
 choices[11][3] = "El lenguaje WML no s&oacute;lo permite texto sino que tambi&eacute;n permite im&aacute;genes";
 answers[11] = choices[11][0];
 units[11] = "69";
 comments[11] = "Id Pregunta: 855. NULL";


//  Id pregunta: 990 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Dentro del entorno IBM VTAM el rearranque autom&aacute;tico de los recursos de las redes se puede realizar con el producto:";
 choices[12]= new Array();
 choices[12][0] = "MVS";
 choices[12][1] = "NetView";
 choices[12][2] = "JES";
 choices[12][3] = "TSO";
 answers[12] = choices[12][2];
 units[12] = "49";
 comments[12] = "Id Pregunta: 990. ";


//  Id pregunta: 1047 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  El protocolo de acceso al directorio en X.500 es:";
 choices[13]= new Array();
 choices[13][0] = "TCP/IP";
 choices[13][1] = "LDAP";
 choices[13][2] = "IMAP";
 choices[13][3] = "DAP";
 answers[13] = choices[13][3];
 units[13] = "73";
 comments[13] = "Id Pregunta: 1047. ";


//  Id pregunta: 1133 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  En sistemas Windows 200x, &iquest;cu&aacute;l es el API nativo de Microsoft que permite programar contra los servicios de Active Directory?:";
 choices[14]= new Array();
 choices[14][0] = "X.500";
 choices[14][1] = "ADSI";
 choices[14][2] = "LDAP";
 choices[14][3] = "Todas son falsas";
 answers[14] = choices[14][1];
 units[14] = "56";
 comments[14] = "Id Pregunta: 1133. ";


//  Id pregunta: 1135 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  En un disco duro Winchester:";
 choices[15]= new Array();
 choices[15][0] = "Las cabezas tocan el disco en todo momento";
 choices[15][1] = "Las cabezas nunca tocan el disco";
 choices[15][2] = "Las cabezas tocan el disco para grabar";
 choices[15][3] = "Las cabezas solo tocan el disco para formatearlo a bajo nivel";
 answers[15] = choices[15][1];
 units[15] = "48";
 comments[15] = "Id Pregunta: 1135. ";


//  Id pregunta: 1158 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  En Unix el comando  vi  es muy utilizado, sirve para:";
 choices[16]= new Array();
 choices[16][0] = "Listar las primeras 10 l&iacute;neas de un fichero";
 choices[16][1] = "Lista todos los procesos en ejecuci&oacute;n con su estado";
 choices[16][2] = "Es un editor de texto";
 choices[16][3] = "Visualiza la cantidad de memoria libre y el tanto por ciento ocupado del procesador";
 answers[16] = choices[16][2];
 units[16] = "54";
 comments[16] = "Id Pregunta: 1158. NULL";


//  Id pregunta: 1240 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  La resoluci&oacute;n distribuida de problemas (RDP) estudia sistemas inteligentes distribuidos, cuyos agentes cumplen unas caracter&iacute;sticas m&iacute;nimas de:";
 choices[17]= new Array();
 choices[17][0] = "Benevolencia, objetivos compartidos, dise&ntilde;o central";
 choices[17][1] = "Benevolencia, objetivos compartidos, dise&ntilde;o distribuido";
 choices[17][2] = "Benevolencia, objetivos propios. dise&ntilde;o distribuido";
 choices[17][3] = "Benevolencia,  objetivos propios, dise&ntilde;o central";
 answers[17] = choices[17][0];
 units[17] = "63";
 comments[17] = "Id Pregunta: 1240. ";


//  Id pregunta: 1296 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Para borrar una tabla en SQL utilizar&eacute;:";
 choices[18]= new Array();
 choices[18][0] = "DELETE + Nombre de la tabla";
 choices[18][1] = "DROP + Nombre de la tabla";
 choices[18][2] = "REVOKE + Nombre de la tabla";
 choices[18][3] = "B y C son ciertas";
 answers[18] = choices[18][1];
 units[18] = "58";
 comments[18] = "Id Pregunta: 1296. ";


//  Id pregunta: 1622 AÃ±o de creación de pregunta: 2003-01-01
 questions[19]= "20)  Se&ntilde;ale cu&aacute;l de las siguientes frases es incorrecta, cuando hablamos de una arquitectura cliente-servidor:";
 choices[19]= new Array();
 choices[19][0] = "El entorno en que se desenvuelve una arquitectura cliente-servidor es homog&eacute;neo y por tanto tiene la ventaja de no requerir interfaz para su comunicaci&oacute;n";
 choices[19][1] = "Se distinguen dos tipos de arquitectura cliente-servidor: modelo de 2 capas y modelo de 3 capas";
 choices[19][2] = "Se trata de una arquitectura escalable, es decir susceptible de ampliarse tanto verticalmente (con mayor n&uacute;mero de servidores) como horizontalmente (con mayor n&uacute;mero de clientes)";
 choices[19][3] = "El proceso clinte proporciona la interfaz del usuario y el proceso servidor los medios para gestionar los recursos compartidos";
 answers[19] = choices[19][0];
 units[19] = "50";
 comments[19] = "Id Pregunta: 1622. ";


//  Id pregunta: 2161 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Indicar la afirmaci&oacute;n falsa acerca del coste de la calidad:";
 choices[20]= new Array();
 choices[20][0] = "El coste total se descompone en: coste de la calidad, coste de la no calidad y costes fijos";
 choices[20][1] = "El coste de la calidad viene dado por el sumatorio de lo que se invierte en prevenci&oacute;n, verificaci&oacute;n y validaci&oacute;n";
 choices[20][2] = "El coste de la no calidad viene dado por el sumatorio de lo que se invierte en fallos internos y fallos externos";
 choices[20][3] = " Como f&oacute;rmula general que determine el inter&eacute;s de la inversi&oacute;n se debe controlar el cumplimiento constante de: gastos en calidad &lt; gastos de la no calidad";
 answers[20] = choices[20][0];
 units[20] = "88";
 comments[20] = "Id Pregunta: 2161. ";


//  Id pregunta: 2290 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  El modelo en espiral:";
 choices[21]= new Array();
 choices[21][0] = "Tiene como n&uacute;cleo la evaluaci&oacute;n de riesgos";
 choices[21][1] = "Es un refinamiento del modelo de prototipos";
 choices[21][2] = "Tiene como idea fundamental la evaluaci&oacute;n de costes, calendario&hellip;";
 choices[21][3] = "No tiene fin, un sistema siempre es mejorable";
 answers[21] = choices[21][0];
 units[21] = "76";
 comments[21] = "Id Pregunta: 2290. ";


//  Id pregunta: 2685 AÃ±o de creación de pregunta: 2003-01-01
 questions[22]= "23)  La entrada de documentos al sistema de reconocimiento &oacute;ptico de caracteres se produce sobre soporte:";
 choices[22]= new Array();
 choices[22][0] = "Papel";
 choices[22][1] = "Fax";
 choices[22][2] = "Correo electr&oacute;nico.";
 choices[22][3] = "Todos los anteriores.";
 answers[22] = choices[22][3];
 units[22] = "94";
 comments[22] = "Id Pregunta: 2685. ";


//  Id pregunta: 2785 AÃ±o de creación de pregunta: 2006-01-01
 questions[23]= "24)  En M&Eacute;TRICA v.3, el documento de Participantes describe el perfil y el grado deresponsabilidad de las personas que deben participar en la realizaci&oacute;n de cada tarea. A este respecto, &iquest;qu&eacute; perfiles considera la citada metodolog&iacute;a? :";
 choices[23]= new Array();
 choices[23][0] = "Jefe de Proyecto, Analista y Programador.";
 choices[23][1] = "Directivo, Equipo de Proyecto, Usuario y Grupo de Calidad.";
 choices[23][2] = "Jefe de Proyecto, T&eacute;cnico, Analista, Programador y Usuario.";
 choices[23][3] = "Directivo, Consultor, Jefe de Proyecto, Analista y Programador.";
 answers[23] = choices[23][3];
 units[23] = "86";
 comments[23] = "Id Pregunta: 2785. NULL";


//  Id pregunta: 2987 AÃ±o de creación de pregunta: 2004-01-01
 questions[24]= "25)  Un spanning tree es";
 choices[24]= new Array();
 choices[24][0] = "Un &aacute;rbol de recubrimiento de una red";
 choices[24][1] = "Un arbol de decisi&oacute;n para algoritmos de inteligencia artificial como id3";
 choices[24][2] = "Un &aacute;rbol de resoluci&oacute;n en l&oacute;gica";
 choices[24][3] = "Un &aacute;rbol de perif&eacute;ricos de un puerto USB";
 answers[24] = choices[24][0];
 units[24] = "101, 102";
 comments[24] = "Id Pregunta: 2987. ";


//  Id pregunta: 3047 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  &iquest;Qu&eacute; diferencia hay entre un servidor de ficheros y un servidor de bases de datos?:";
 choices[25]= new Array();
 choices[25][0] = "El servidor de ficheros devuelve el fichero entero y el de bases de datos s&oacute;lo el dato solicitado";
 choices[25][1] = "El servidor de ficheros es m&aacute;s barato";
 choices[25][2] = "No hay diferencia; es lo mismo";
 choices[25][3] = "Son ciertas &lsquo;a&rsquo; y &lsquo;b&rsquo;";
 answers[25] = choices[25][3];
 units[25] = "113";
 comments[25] = "Id Pregunta: 3047. ";


//  Id pregunta: 3095 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Un sistema, si se desea que controle los intentos de violaci&oacute;n debe incorporar:";
 choices[26]= new Array();
 choices[26][0] = "An&aacute;lisis y validaci&oacute;n de la llamada";
 choices[26][1] = "Registro de la historia y fecha de la contrase&ntilde;a";
 choices[26][2] = "Forzar a que los usuarios cambien la contrase&ntilde;a";
 choices[26][3] = "Todas las respuestas anteriores son ciertas";
 answers[26] = choices[26][3];
 units[26] = "111";
 comments[26] = "Id Pregunta: 3095. NULL";


//  Id pregunta: 3336 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Cada cabecera de IPv6 tiene una longitud de:";
 choices[27]= new Array();
 choices[27][0] = "32 bytes";
 choices[27][1] = "36 bytes";
 choices[27][2] = "n&uacute;mero de bytes variable seg&uacute;n el tipo de cabecera";
 choices[27][3] = "40 bytes";
 answers[27] = choices[27][3];
 units[27] = "100";
 comments[27] = "Id Pregunta: 3336. NULL";


//  Id pregunta: 3482 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  El tr&aacute;fico perdido en un periodo de tiempo T :";
 choices[28]= new Array();
 choices[28][0] = "Se puede medir como el numero de llamadas perdidas Cl por la duraci&oacute;n media de las llamadas durante un tiempo T";
 choices[28][1] = "No tiene sentido pr&aacute;ctico porque no se pueden conocer realmente el n&uacute;mero de llamadas perdidas";
 choices[28][2] = "No puede medirse, s&oacute;lo puede medirse el n&uacute;mero de llamadas perdidas y nunca el tr&aacute;fico perdido";
 choices[28][3] = "Ninguna de las anteriores es v&aacute;lida";
 answers[28] = choices[28][2];
 units[28] = "99";
 comments[28] = "Id Pregunta: 3482. NULL";


//  Id pregunta: 3513 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  En el protocolo IPv6:";
 choices[29]= new Array();
 choices[29][0] = "El campo 'Traffic Class' tiene 8 bits de longitud";
 choices[29][1] = "El campo 'Priority' tiene 8 bits de longitud";
 choices[29][2] = "El campo 'Header CheckSum' tiene 8 bits de longitud";
 choices[29][3] = "El campo 'TOS' indica el tipo de servicio";
 answers[29] = choices[29][0];
 units[29] = "100";
 comments[29] = "Id Pregunta: 3513. NULL";


//  Id pregunta: 3584 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  Indique la opci&oacute;n que mejor refleje el servicio ofrecido por las compa&ntilde;&iacute;as de telecomunicaci&oacute;n, como conmutaci&oacute;n de circuitos:";
 choices[30]= new Array();
 choices[30][0] = "Es cuando un terminal indica a la red, mediante la se&ntilde;alizaci&oacute;n adecuada, el destino de la informaci&oacute;n, la entrega a la red y libera el circuito";
 choices[30][1] = "Es cuando un terminal indica a la red, mediante la se&ntilde;alizaci&oacute;n adecuada, el destino de la informaci&oacute;n, se establece el circuito y se dispone de un ancho de banda variable";
 choices[30][2] = "Es cuando un terminal indica a la red, mediante la se&ntilde;alizaci&oacute;n adecuada, el destino de la informaci&oacute;n, se establece el circuito y se env&iacute;a la informaci&oacute;n en paquetes";
 choices[30][3] = "Es cuando un terminal indica a la red, mediante la se&ntilde;alizaci&oacute;n adecuada, el destino de la informaci&oacute;n, se establece el circuito y se dispone de un ancho de banda de transmisi&oacute;n fijo durante todo el tiempo que permanece establecido el cto";
 answers[30] = choices[30][3];
 units[30] = "101";
 comments[30] = "Id Pregunta: 3584. ";


//  Id pregunta: 3653 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  UDDI: ";
 choices[31]= new Array();
 choices[31][0] = "Es una variante de alt&iacute;sima velocidad de la conocida FDDI";
 choices[31][1] = "Es una variante de FDDI adecuada para su desarrollo en LANs";
 choices[31][2] = "Significa User Definition Domain  Interface";
 choices[31][3] = "Ninguna de las anteriores es v&aacute;lida";
 answers[31] = choices[31][3];
 units[31] = "69";
 comments[31] = "Id Pregunta: 3653. NULL";


//  Id pregunta: 3669 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  Una de las capas o niveles del modelo de referencia de interconexi&oacute;n de sistemas abiertos (OSI) no corresponde a la operaci&oacute;n de los dispositivos mencionados. &iquest;Cual?:";
 choices[32]= new Array();
 choices[32][0] = "F&iacute;sico - Repetidor (&ldquo;repeater&rdquo;), Concentrador (&ldquo;hub&rdquo;), M&oacute;dem, TR1, AT";
 choices[32][1] = "Enlace - Puente (&ldquo;bridge&rdquo;), Conmutador (&ldquo;switch&rdquo;)";
 choices[32][2] = "Enlace - Conector V.24, Conector V.35";
 choices[32][3] = "Red - Encaminador (&ldquo;router&rdquo;)";
 answers[32] = choices[32][2];
 units[32] = "100,101";
 comments[32] = "Id Pregunta: 3669. ";


//  Id pregunta: 3697 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  Las diversas tecnolog&iacute;as usadas en red local y metropolitanas se han popularizado mediante diversos nombres y normas. Indique la opci&oacute;n correcta o si lo son todas ellas:";
 choices[33]= new Array();
 choices[33][0] = "Las redes Token Ring se caracterizan por tener una topolog&iacute;a en anillo l&oacute;gico y la norma que cumple es IEEE 802.4";
 choices[33][1] = "La red FDDI est&aacute; definida como una red en anillo f&iacute;sico y est&aacute; amparada por la norma ISO-9314";
 choices[33][2] = "Las redes Token Bus se caracterizan por tener una topolog&iacute;a en anillo f&iacute;sico y estar amparadas por la norma IEEE 802.3";
 choices[33][3] = "Todas las respuestas anteriores son ciertas";
 answers[33] = choices[33][1];
 units[33] = "101";
 comments[33] = "Id Pregunta: 3697. ";


//  Id pregunta: 3698 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  Las estaciones de una red Token Ring transmiten utilizando la t&eacute;cnica de:";
 choices[34]= new Array();
 choices[34][0] = "Detecci&oacute;n de transmisiones";
 choices[34][1] = "Detecci&oacute;n de colisiones";
 choices[34][2] = "Paso de testigo";
 choices[34][3] = "Reintentos aleatorios";
 answers[34] = choices[34][2];
 units[34] = "101";
 comments[34] = "Id Pregunta: 3698. ";


//  Id pregunta: 3717 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  Los conceptos de &quot;piconet&quot; y &quot;scatternet&quot; forman parte de la arquitectura de red utilizada con tecnolog&iacute;a:";
 choices[35]= new Array();
 choices[35][0] = "IrDA";
 choices[35][1] = "DECT";
 choices[35][2] = "Bluetooth";
 choices[35][3] = "WLAN";
 answers[35] = choices[35][2];
 units[35] = "107";
 comments[35] = "Id Pregunta: 3717. NULL";


//  Id pregunta: 3808 AÃ±o de creación de pregunta: 2002-01-01
 questions[36]= "37)  Seg&uacute;n la norma X.400, &iquest;de cu&aacute;ntas partes consta un mensaje interpersonal (IM)?:";
 choices[36]= new Array();
 choices[36][0] = "Una";
 choices[36][1] = "Dos";
 choices[36][2] = "Tres";
 choices[36][3] = "Tantas como tipos de informaci&oacute;n contenga el mensaje";
 answers[36] = choices[36][1];
 units[36] = "106";
 comments[36] = "Id Pregunta: 3808. ";


//  Id pregunta: 3858 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  El modo de transferencia as&iacute;ncrono (ATM), utiliza:";
 choices[37]= new Array();
 choices[37][0] = "Celdas de tama&ntilde;o variable con una cabecera fija de 5 octetos y un campo de informaci&oacute;n variable de hasta 64 octetos.";
 choices[37][1] = "Celdas de tama&ntilde;o variable con una cabecera fija de 8 octetos, y un campo de informaci&oacute;n variable de hasta 48 octetos.";
 choices[37][2] = "Celdas de tama&ntilde;o fijo con una cabecera fija de 5 octetos y un campo de informaci&oacute;n fijo de 48 octetos.";
 choices[37][3] = "Celdas de tama&ntilde;o variable con una cabecera fija de 8 octetos y un campo de informaci&oacute;n fijo de 64 octetos.";
 answers[37] = choices[37][2];
 units[37] = "109";
 comments[37] = "Id Pregunta: 3858. Junta Andaluc&iacute;a";


//  Id pregunta: 3897 AÃ±o de creación de pregunta: 2003-01-01
 questions[38]= "39)  Entre las atribuciones de la Comisi&oacute;n Nacional de los Mercados y la Competencia NO se encuentran:";
 choices[38]= new Array();
 choices[38][0] = "Definir y analizar los mercados de referencia relativos a redes y servicios de comunicaciones electr&oacute;nicas.";
 choices[38][1] = "Establecer, cuando proceda, las obligaciones espec&iacute;ficas que correspondan a los operadores con poder significativo en mercados de referencia.";
 choices[38][2] = "Vigilancia del cumplimiento de las distintas normas aplicables al sector";
 choices[38][3] = "Ninguna de las anteriores";
 answers[38] = choices[38][2];
 units[38] = "110";
 comments[38] = "Id Pregunta: 3897. NULL";


//  Id pregunta: 3930 AÃ±o de creación de pregunta: 2003-01-01
 questions[39]= "40)  &iquest;Cu&aacute;l no es una extensi&oacute;n de fichero?";
 choices[39]= new Array();
 choices[39][0] = " .pdf";
 choices[39][1] = " .bmp";
 choices[39][2] = ".phf";
 choices[39][3] = ".doc";
 answers[39] = choices[39][2];
 units[39] = "56";
 comments[39] = "Id Pregunta: 3930. ";


//  Id pregunta: 4206 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  La fibra &oacute;ptica m&aacute;s popular es";
 choices[40]= new Array();
 choices[40][0] = "9/125 um";
 choices[40][1] = "62.5/125 um";
 choices[40][2] = "50/125 um";
 choices[40][3] = "100/140 um";
 answers[40] = choices[40][1];
 units[40] = "99";
 comments[40] = "Id Pregunta: 4206. ";


//  Id pregunta: 4248 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  El desarrollo de la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a NO se dirige hacia:";
 choices[41]= new Array();
 choices[41][0] = "Que los ciudadanos puedan elegir el canal de acceso a las AAPP (tel&eacute;fono, Internet, SMSs, TDT...).";
 choices[41][1] = "Que los ciudadanos puedan acceder a los servicios de las AAPP 24 horas al d&iacute;a, 7 d&iacute;as a la semana.";
 choices[41][2] = "Que los tr&aacute;mites por medios electr&oacute;nicos no obtengan la misma validez que los realizados por medios presenciales.";
 choices[41][3] = "Que los ciudadanos no tengan que presentar documentaci&oacute;n que obre en poder de las AAPP.";
 answers[41] = choices[41][2];
 units[41] = "30";
 comments[41] = "Id Pregunta: 4248. NULL";


//  Id pregunta: 4277 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  Si para consolidar una transacci&oacute;n en un sistema relacional se utiliza la sentencia COMMIT, &iquest;qu&eacute; sentencia se utiliza para retroceder una transacci&oacute;n?";
 choices[42]= new Array();
 choices[42][0] = "NO COMMIT.";
 choices[42][1] = "ROLLBACK";
 choices[42][2] = "END TRANSACTION.";
 choices[42][3] = "BACK TRANSACTION.";
 answers[42] = choices[42][1];
 units[42] = "57";
 comments[42] = "Id Pregunta: 4277. ";


//  Id pregunta: 4382 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes actividades se engloba, en m&eacute;trica V3, en el proceso de construcci&oacute;n del sistema?";
 choices[43]= new Array();
 choices[43][0] = "Generaci&oacute;n de especificaciones de construcci&oacute;n.";
 choices[43][1] = "Ejecuci&oacute;n de las pruebas unitarias.";
 choices[43][2] = "Definici&oacute;n de interfaces de usuario.";
 choices[43][3] = "Incorporaci&oacute;n del sistema al entorno de operaci&oacute;n.";
 answers[43] = choices[43][1];
 units[43] = "86";
 comments[43] = "Id Pregunta: 4382. NULL";


//  Id pregunta: 4417 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  &iquest;Cu&aacute;l de las siguientes no es una desventaja del cable coaxial frente a otros medios de transmisi&oacute;n";
 choices[44]= new Array();
 choices[44][0] = "Diafon&iacute;a.";
 choices[44][1] = "Ruido t&eacute;rmico.";
 choices[44][2] = "Ruido de intermodulaci&oacute;n.";
 choices[44][3] = "Atenuaci&oacute;n";
 answers[44] = choices[44][0];
 units[44] = "99";
 comments[44] = "Id Pregunta: 4417. ";


//  Id pregunta: 4438 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  En el an&aacute;lisis de los requisitos de un sistema de informaci&oacute;n, para representar los distintos datos y sus relaciones, la &ldquo;t&eacute;cnica&rdquo; m&aacute;s adecuada:";
 choices[45]= new Array();
 choices[45][0] = "Seudoc&oacute;digo.";
 choices[45][1] = "Modelo Entidad-Relaci&oacute;n.";
 choices[45][2] = "Diagramas de transici&oacute;n de estados.";
 choices[45][3] = "DFD (Diagrama de Flujo de Datos).";
 answers[45] = choices[45][1];
 units[45] = "78";
 comments[45] = "Id Pregunta: 4438. ";


//  Id pregunta: 4464 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  Indique cu&aacute;l de las siguientes afirmaciones sobre una base de datos OLAP es cierta:";
 choices[46]= new Array();
 choices[46][0] = "Cada datamart podr&aacute; tener unas medidas y dimensiones propias y diferentes a los dem&aacute;s.";
 choices[46][1] = "Todos los datamart deber&aacute;n tener las mismas medidas y dimensiones.";
 choices[46][2] = "Los datamart no tienen dimensiones.";
 choices[46][3] = "La dimensi&oacute;n de los datamart debe ser &uacute;nica, aunque las medidas pueden variar de unos datamart a otros.";
 answers[46] = choices[46][0];
 units[46] = "68";
 comments[46] = "Id Pregunta: 4464. ";


//  Id pregunta: 4494 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  El protocolo L2TP es com&uacute;nmente utilizado por las VPN (Redes Privadas Virtuales) para:";
 choices[47]= new Array();
 choices[47][0] = "Efectuar el proceso de encriptado de los datos transmitidos a trav&eacute;s de Ia red publica.";
 choices[47][1] = "Efectuar Ia autentificaci&oacute;n de los usuarios.";
 choices[47][2] = "Crear t&uacute;neles de nivel OSI 2 que encapsulan los datagramas IP transmitidos a trav&eacute;s de Ia red publica.";
 choices[47][3] = "Filtrar los datos recibidos por cada usuario.";
 answers[47] = choices[47][2];
 units[47] = "111";
 comments[47] = "Id Pregunta: 4494. NULL";


//  Id pregunta: 4619 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  Cual de las siguientes opciones es correcta";
 choices[48]= new Array();
 choices[48][0] = "en el modelo jer&aacute;rquico no se exige que el usuario conozca las vinculaciones entre entidades";
 choices[48][1] = "los lenguajes del modelo en red son relacionales";
 choices[48][2] = "el modelo en red responde a una estructura arborescente a varios niveles";
 choices[48][3] = "en el modelo relacional no existen vinculaciones explicitas entre entidades";
 answers[48] = choices[48][3];
 units[48] = "";
 comments[48] = "Id Pregunta: 4619. ";


//  Id pregunta: 4730 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)   Cual de las siguientes tecnolog&iacute;as no sirve para la implementaci&oacute;n de redes privadas virtuales:";
 choices[49]= new Array();
 choices[49][0] = "SSH";
 choices[49][1] = "SLIP";
 choices[49][2] = "IPSEC";
 choices[49][3] = "SSL/TLS";
 answers[49] = choices[49][1];
 units[49] = "100";
 comments[49] = "Id Pregunta: 4730. Examen 2006 JCYL";


//  Id pregunta: 4989 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes opciones se corresponde con una interfaz de Java que permite llamar a m&eacute;todos nativosescritos en otros lenguajes?:";
 choices[50]= new Array();
 choices[50][0] = "RMI";
 choices[50][1] = "JAXP";
 choices[50][2] = "JNDI";
 choices[50][3] = "JNI";
 answers[50] = choices[50][3];
 units[50] = "116";
 comments[50] = "Id Pregunta: 4989. Examen TIC A 2007";


//  Id pregunta: 5063 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  Se&ntilde;ale la respuesta correcta:";
 choices[51]= new Array();
 choices[51][0] = "Las resoluciones de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos son recurribles en alzada ante el Ministrode Industria, Turismo y Comercio";
 choices[51][1] = "Las resoluciones de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos no pueden ser objeto de recurso alguno";
 choices[51][2] = "Las resoluciones de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos agotan la via administrativa";
 choices[51][3] = "Por v&iacute;a reglamentaria se establecer&aacute; el sistema de recursos administrativos ante las resoluciones de laAgencia Espa&ntilde;ola de Protecci&oacute;n de Datos";
 answers[51] = choices[51][2];
 units[51] = "29";
 comments[51] = "Id Pregunta: 5063. Examen TIC A 2007";


//  Id pregunta: 5229 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  Respecto al prototipado r&aacute;pido es incorrecto:";
 choices[52]= new Array();
 choices[52][0] = "Responde al enunciado &quot;no s&eacute; lo que quiero pero cuando vea algo te lo digo&quot;";
 choices[52][1] = "Tambi&eacute;n denominados de usar y tirar, ya que una vez aceptado el prototipo se desecha y se comienza el desarrollo desde cero.";
 choices[52][2] = "Se deben poder construir con facilidad para evaluarlos en una fase temprana del desarrollo";
 choices[52][3] = "Deben ser desarrollados en poco tiempo";
 answers[52] = choices[52][0];
 units[52] = "76";
 comments[52] = "Id Pregunta: 5229. ";


//  Id pregunta: 5231 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  El modelo de ciclo de vida en espiral:";
 choices[53]= new Array();
 choices[53][0] = "Es el que mejor se adapta para ser aplicado al software contratado";
 choices[53][1] = "Permite incorporar objetivos de calidad en el desarrollo de productos software";
 choices[53][2] = "No es especialmente adecuado para la temprana eliminaci&oacute;n de errores y alternativas poco atractivas";
 choices[53][3] = "Todas las anteriores son correctas";
 answers[53] = choices[53][1];
 units[53] = "76";
 comments[53] = "Id Pregunta: 5231. ";


//  Id pregunta: 5241 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  Respecto al an&aacute;lisis D.A.F.O indique la opci&oacute;n incorrecta ";
 choices[54]= new Array();
 choices[54][0] = "Herramienta estrat&eacute;gica por excelencia cuyo objetivo es conocer la situaci&oacute;n real de una organizaci&oacute;n, as&iacute; como los riesgos y oportunidades que le brinda el mercado";
 choices[54][1] = "Tambi&eacute;n llamado Matriz TOWS en terminolog&iacute;a anglosajona";
 choices[54][2] = "Las amenazas y oportunidades corresponden al entorno interno de la organizaci&oacute;n, debiendo &eacute;sta a aprovecharlas o superarlas, anticip&aacute;ndose a las mismas";
 choices[54][3] = "Las fortalezas suponen ventaja competitiva que pueden servir para explotar oportunidades";
 answers[54] = choices[54][2];
 units[54] = "77";
 comments[54] = "Id Pregunta: 5241. ";


//  Id pregunta: 5523 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  La norma para las medidas de la resoluci&oacute;n en c&aacute;maras electr&oacute;nicas es";
 choices[55]= new Array();
 choices[55][0] = "ISO 12233";
 choices[55][1] = "ISO 20000";
 choices[55][2] = "IEEE 12333";
 choices[55][3] = "ANSI 568";
 answers[55] = choices[55][0];
 units[55] = "93";
 comments[55] = "Id Pregunta: 5523. NULL";


//  Id pregunta: 5820 AÃ±o de creación de pregunta: 2009-01-01
 questions[56]= "57)  Indique cu&aacute;l de los siguientes NO se corresponde con un tipo de registro de recurso del Sistema de Nombres de Dominio (DNS &quot; Domain Name System&quot;):";
 choices[56]= new Array();
 choices[56][0] = "HINFO &quot;Host Information&quot;";
 choices[56][1] = "SOA &quot; Start Of Authority&quot;";
 choices[56][2] = "TTL &quot;Time-To- Live&quot;";
 choices[56][3] = "WKS &quot;Well-Now-Services&quot;";
 answers[56] = choices[56][2];
 units[56] = "106";
 comments[56] = "Id Pregunta: 5820. MAP 2008 A1";


//  Id pregunta: 5971 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  Cu&aacute;l de las siguientes opciones NO es un principio de la protecci&oacute;n de datos seg&uacute;n la Ley Org&aacute;nica 15/1999:";
 choices[57]= new Array();
 choices[57][0] = "Datos relativos a las personas";
 choices[57][1] = "Calidad de los datos";
 choices[57][2] = "Consentimiento del afectado";
 choices[57][3] = "Seguridad de los datos";
 answers[57] = choices[57][0];
 units[57] = "29";
 comments[57] = "Id Pregunta: 5971. Castilla La Mancha 2009";


//  Id pregunta: 5975 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  Suponga que dos sistemas A y B est&aacute;n conectados mediante un enlace transcontinental de capacidad C=64 Mbps y retardo de propagaci&oacute;n Rp=2 ms. A comienza a transmitir a B un fichero de 15 MB. &iquest;Cu&aacute;ntos octetos ha transmitido A cuando el primer bit de la transmisi&oacute;n llega a B?";
 choices[58]= new Array();
 choices[58][0] = "128.000.";
 choices[58][1] = "32.000.";
 choices[58][2] = "16.000.";
 choices[58][3] = "4.000.";
 answers[58] = choices[58][2];
 units[58] = "99";
 comments[58] = "Id Pregunta: 5975. TIC A 2009";


//  Id pregunta: 6050 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  La organizaci&oacute;n que publica los est&aacute;ndares sobre SNMP es:";
 choices[59]= new Array();
 choices[59][0] = "UIT-T";
 choices[59][1] = "IETF";
 choices[59][2] = "ISO/IEC";
 choices[59][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[59] = choices[59][1];
 units[59] = "104";
 comments[59] = "Id Pregunta: 6050. ";


//  Id pregunta: 6193 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  La Orden PRE/878/2010 regula";
 choices[60]= new Array();
 choices[60][0] = "El Registro Electr&oacute;nico Com&uacute;n";
 choices[60][1] = "Los contenidos y servicios m&iacute;nimos de las sedes electr&oacute;nicas";
 choices[60][2] = "El uso de certificados de empleado p&uacute;blico";
 choices[60][3] = "La direcci&oacute;n electr&oacute;nica habilitada";
 answers[60] = choices[60][3];
 units[60] = "43";
 comments[60] = "Id Pregunta: 6193. Orden PRE/878/2010, previsto en el art&iacute;culo 38.2 del Real Decreto 1671/2009, de 6 de noviembre.";


//  Id pregunta: 6264 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  Cual de los siguientes enunciados no pertenece al c&oacute;digo &eacute;tico definido para los perfiles de auditor por la ISACA.";
 choices[61]= new Array();
 choices[61][0] = "Apoyar la implantaci&oacute;n y estimular el cumplimiento de est&aacute;ndares, procedimientos y controles apropiados en los sistemas de informaci&oacute;n.";
 choices[61][1] = "Mantener la protecci&oacute;n de la intimidad y la confidencialidad de la informaci&oacute;n a la que se tenga  acceso, dentro del marco de la Directiva Europea en materia de protecci&oacute;n de datos de car&aacute;cter personal (transpuesta en Espa&ntilde;a a trav&eacute;s de la Ley Org&aacute;nica 15/1999).";
 choices[61][2] = "Apoyar la formaci&oacute;n profesional de las partes leg&iacute;timamente interesadas, mejorando su comprensi&oacute;n de la seguridad y control de los sistemas de informaci&oacute;n.";
 choices[61][3] = "Informar a las partes apropiadas de los resultados del trabajo realizado, revelando todos los hechos significativos que obren en su conocimiento.";
 answers[61] = choices[61][1];
 units[61] = "31";
 comments[61] = "Id Pregunta: 6264. ";


//  Id pregunta: 6400 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  El &oacute;rgano competente para la expedici&oacute;n del DNIe es:";
 choices[62]= new Array();
 choices[62][0] = "Ministerio de Defensa";
 choices[62][1] = "Ministerio del Interior";
 choices[62][2] = "Ministerio de Presidencia";
 choices[62][3] = "Secretaria de Estado de Funci&oacute;n P&uacute;blica";
 answers[62] = choices[62][1];
 units[62] = "30";
 comments[62] = "Id Pregunta: 6400. RD 1553/2005, art&iacute;culo 3";


//  Id pregunta: 6509 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l de las siguientes propiedades NO se almacena en el i-node de un archivo?";
 choices[63]= new Array();
 choices[63][0] = "Permisos";
 choices[63][1] = "Propietario";
 choices[63][2] = "Grupo";
 choices[63][3] = "Nombre del fichero";
 answers[63] = choices[63][3];
 units[63] = "53";
 comments[63] = "Id Pregunta: 6509. NULL";


//  Id pregunta: 6536 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  La gu&iacute;a de servicios ISO 9004 sigue un enfoque basado en procesos, como";
 choices[64]= new Array();
 choices[64][0] = "Responsabilidad de la direcci&oacute;n";
 choices[64][1] = "Realizaci&oacute;n del producto";
 choices[64][2] = "Medici&oacute;n, an&aacute;lisis y mejora";
 choices[64][3] = "Todas las respuestas anteriores son correctas";
 answers[64] = choices[64][3];
 units[64] = "92";
 comments[64] = "Id Pregunta: 6536. NULL";


//  Id pregunta: 6604 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  En el an&aacute;lisis estructurado un sistema se puede modelizar completamente con:";
 choices[65]= new Array();
 choices[65][0] = "Modelo Funcional, Modelo Est&aacute;tico y Modelo Din&aacute;mico";
 choices[65][1] = "Modelo de Procesos y Modelo de Datos";
 choices[65][2] = "Modelo Funcional, Modelo de Clases y Modelo de Casos de Uso";
 choices[65][3] = "Modelo Funcional y Modelo E/R";
 answers[65] = choices[65][0];
 units[65] = "81";
 comments[65] = "Id Pregunta: 6604. NULL";


//  Id pregunta: 6611 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  Que NO se puede incluir en un DFD de nivel 2";
 choices[66]= new Array();
 choices[66][0] = "Procesos";
 choices[66][1] = "Decisiones L&oacute;gicas";
 choices[66][2] = "Flujos de Datos";
 choices[66][3] = "Almacenes de Datos";
 answers[66] = choices[66][1];
 units[66] = "81";
 comments[66] = "Id Pregunta: 6611. NULL";


//  Id pregunta: 7279 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  Una maqueta virtual se puede definir como ";
 choices[67]= new Array();
 choices[67][0] = "Un programa inform&aacute;tico que simula el funcionamiento de un terminal de un ordenador central ";
 choices[67][1] = "Un prototipo de aplicaci&oacute;n";
 choices[67][2] = "Un tipo de virtualizaci&oacute;n de servidor";
 choices[67][3] = "Un servidor de terminales";
 answers[67] = choices[67][0];
 units[67] = "119";
 comments[67] = "Id Pregunta: 7279. NULL";


//  Id pregunta: 7893 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)   &iquest;Cu&aacute;l de los siguientes &oacute;rganos de ISOC (Internet Society) tiene la responsabilidad de desarrollar las especificaciones de est&aacute;ndares en Internet?";
 choices[68]= new Array();
 choices[68][0] = " IESG (Internet Engineering Steering Group).";
 choices[68][1] = " IETF (Internet Engineering Task Force).";
 choices[68][2] = " IAB (Internet Architecture Board).";
 choices[68][3] = " IANA (Internet Assigned Number Authority).";
 answers[68] = choices[68][1];
 units[68] = "NULL";
 comments[68] = "Id Pregunta: 7893. Map 2006";


//  Id pregunta: 8138 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)   En relaci&oacute;n a &laquo;Internet Assigned Numbers Authority&raquo; (IANA), indique cu&aacute;l NO es una de sus funciones:";
 choices[69]= new Array();
 choices[69][0] = " IANA coordina a nivel global el &laquo;DNS root&raquo;.";
 choices[69][1] = " IANA gestiona el dominio .int (top-level).";
 choices[69][2] = " IANA asigna las direcciones IP.";
 choices[69][3] = " IANA administra el dominio .ARPA en estrecha relaci&oacute;n con el Internet Architecture Board.";
 answers[69] = choices[69][2];
 units[69] = "NULL";
 comments[69] = "Id Pregunta: 8138. Map 2008";


//  Id pregunta: 8360 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l de los siguientes NO es un factor de calidad en el modelo de McCall?";
 choices[70]= new Array();
 choices[70][0] = "Accesibilidad";
 choices[70][1] = "Correcci&oacute;n";
 choices[70][2] = "Reusabilidad";
 choices[70][3] = "Interoperabilidad";
 answers[70] = choices[70][0];
 units[70] = "87.88";
 comments[70] = "Id Pregunta: 8360. Examen TIC A2 2010";


//  Id pregunta: 8641 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  En la arquitectura ANSI SQL la capacidad do modificar el esquema interno sin tener que alterar el esquema conceptual (o los externos) es lo que se conoce como:";
 choices[71]= new Array();
 choices[71][0] = "Independencia f&iacute;sica.";
 choices[71][1] = "Independencia L&oacute;gica.";
 choices[71][2] = "Integridad de la entidad";
 choices[71][3] = "Integridad referencial.";
 answers[71] = choices[71][0];
 units[71] = "57, 58";
 comments[71] = "Id Pregunta: 8641. Examen TIC A2 2010 interna";


//  Id pregunta: 8848 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l de las siguientes organizaciones de estandarizaci&oacute;n NO es internacional?";
 choices[72]= new Array();
 choices[72][0] = "IEEE";
 choices[72][1] = "ISO";
 choices[72][2] = "IEC";
 choices[72][3] = "ANSI";
 answers[72] = choices[72][3];
 units[72] = "42";
 comments[72] = "Id Pregunta: 8848. Examen UC3M 2010";


//  Id pregunta: 8994 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  Las Cookies que emplea el protocolo HTTP se especifican en el RFC:";
 choices[73]= new Array();
 choices[73][0] = "2965";
 choices[73][1] = "8080";
 choices[73][2] = "1065";
 choices[73][3] = "1265";
 answers[73] = choices[73][0];
 units[73] = "112";
 comments[73] = "Id Pregunta: 8994. Examen UPM A2 2011";


//  Id pregunta: 9378 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas no soporta la herramienta inform&aacute;tica SSD-AAPP?";
 choices[74]= new Array();
 choices[74][0] = "ELECTRE";
 choices[74][1] = "PROMETHEE";
 choices[74][2] = "TOPSIS";
 choices[74][3] = "M&eacute;todo Lexicogr&aacute;fico";
 answers[74] = choices[74][0];
 units[74] = "34";
 comments[74] = "Id Pregunta: 9378. ";


//  Id pregunta: 9382 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  La ley de Cooper afirma que:";
 choices[75]= new Array();
 choices[75][0] = "El n&uacute;mero m&aacute;ximo de conversaciones de voz o su equivalente en tr&aacute;fico de datos que pueden ser llevados a cabo en todo el espectro radioel&eacute;ctrico &uacute;til en una determinada &aacute;rea, se dobla cada 30 meses.";
 choices[75][1] = "Tijeras cortan papel, papel cubre a piedra, piedra aplasta lagarto, lagarto envenena a Spock.";
 choices[75][2] = "&Eacute;l n&uacute;mero de MFLOPS que un procesador puede realizar, aumenta siguiendo un ritmo logar&iacute;tmico.";
 choices[75][3] = "El rendimiento de un sistema aumenta linealmente con el n&uacute;mero de unidades de procesamiento que posea.";
 answers[75] = choices[75][0];
 units[75] = "108";
 comments[75] = "Id Pregunta: 9382. NULL";


//  Id pregunta: 9470 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  Indique la afirmaci&oacute;n verdadera en relaci&oacute;n con el protocolo PEM de seguridad en el correo electr&oacute;nico";
 choices[76]= new Array();
 choices[76][0] = "PEM es un protocolo de seguridad extremo a extremo entre Agentes de Usuario (UA)";
 choices[76][1] = "PEM proporciona autenticaci&oacute;n en origen y confidencialidad, pero no proporciona integridad";
 choices[76][2] = "Sus siglas hacen referencia a &quot;Private Extended Mail&quot;";
 choices[76][3] = "Todas las anteriores son verdaderas";
 answers[76] = choices[76][0];
 units[76] = "106";
 comments[76] = "Id Pregunta: 9470. ";


//  Id pregunta: 9577 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  La publicaci&oacute;n del BOE en su sede electr&oacute;nica:";
 choices[77]= new Array();
 choices[77][0] = "No tiene car&aacute;cter de oficial y aut&eacute;ntica, constituyendo lo publicado una mera manifestaci&oacute;n de servicio p&uacute;blico, ya que lo que tiene valor de oficial y aut&eacute;ntica es su edici&oacute;n impresa";
 choices[77][1] = "Tendr&aacute; car&aacute;cter de oficial y aut&eacute;ntica, al igual que la publicaci&oacute;n del resto de diarios oficiales de las CC.AA, a partir del 1 de enero de 2013.";
 choices[77][2] = "Tiene car&aacute;cter de oficial y aut&eacute;ntica, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil y en las restantes normas aplicables.";
 choices[77][3] = "Tiene car&aacute;cter de oficial y aut&eacute;ntica desde el d&iacute;a 1 de enero de 2011, excepto el contenido de la Secci&oacute;n de Anuncios, que se rige por su normativa espec&iacute;fica.";
 answers[77] = choices[77][2];
 units[77] = "43";
 comments[77] = "Id Pregunta: 9577. Examen TIC A1 2011";


//  Id pregunta: 9619 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  &iquest;En qu&eacute; parte del SO Windows se encuentra el Dispatcher?";
 choices[78]= new Array();
 choices[78][0] = "Ejecutivo";
 choices[78][1] = "Microkernel";
 choices[78][2] = "HAL";
 choices[78][3] = "Drivers";
 answers[78] = choices[78][1];
 units[78] = "56";
 comments[78] = "Id Pregunta: 9619. ";


//  Id pregunta: 9791 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  En el contexto de la seguridad, el shoulder surfing consiste en:";
 choices[79]= new Array();
 choices[79][0] = "Espiar a los usuarios modificando los navegadores web para obtener sus claves de acceso.";
 choices[79][1] = "Uso de aplicaciones intermedias llamadas shoulders para la obtenci&oacute;n de los datos de navegaci&oacute;n.";
 choices[79][2] = "Espiar f&iacute;sicamente a los usuarios, para obtener generalmente claves de acceso al sistema.";
 choices[79][3] = "Es un sin&oacute;nimo del ataque man in the middle ";
 answers[79] = choices[79][2];
 units[79] = "111";
 comments[79] = "Id Pregunta: 9791. Examen TIC A2 2013";


//  Id pregunta: 9805 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  En el supuesto de documentos emitidos originalmente en soporte papel de los que se hayan efectuado copias electr&oacute;nicas, de acuerdo a lo dispuesto en el art 30 de la ley 11/2007, se podr&aacute;:";
 choices[80]= new Array();
 choices[80][0] = "Destruir los originales en los t&eacute;rminos y condiciones que por cada Administraci&oacute;n P&uacute;blica se establezcan. ";
 choices[80][1] = "Destruir los originales, en cualquier caso, al cabo de cinco a&ntilde;os de su presentaci&oacute;n. ";
 choices[80][2] = "Nunca se podr&aacute;n destruir, con car&aacute;cter general para todo el Estado. ";
 choices[80][3] = "Destruir los originales, previo consentimiento del interesado. ";
 answers[80] = choices[80][0];
 units[80] = "43";
 comments[80] = "Id Pregunta: 9805. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9957 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  Para las siguientes conexiones entre elementos de un DFD (Diagrama de flujo de datos), NO es posible el flujo:";
 choices[81]= new Array();
 choices[81][0] = "Proceso-Proceso";
 choices[81][1] = "Proceso-Entidad Externa";
 choices[81][2] = "Almac&eacute;n de datos-Almac&eacute;n de datos. ";
 choices[81][3] = "Entidad Externa-Proceso";
 answers[81] = choices[81][2];
 units[81] = "81";
 comments[81] = "Id Pregunta: 9957. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10050 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  Indique la respuesta FALSA, respecto al protocolo IPSEC :";
 choices[82]= new Array();
 choices[82][0] = "El protocolo IPSEC AH garantiza integridad y autenticaci&oacute;n, pero no confidencialidad.";
 choices[82][1] = "El protocolo IPSEC ESP utiliza el n&uacute;mero de protocolo 50 en la cabecera IP.";
 choices[82][2] = "IPSEC utiliza IKE como protocolo de intercambio de claves.";
 choices[82][3] = "IPSEC ESP es incompatible con el modo transporte, s&oacute;lo se puede utilizar en modo t&uacute;nel.";
 answers[82] = choices[82][3];
 units[82] = "111";
 comments[82] = "Id Pregunta: 10050. TIC A2, promoci&oacute;n interna y libre, examen 2013";


//  Id pregunta: 10114 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  MTU es:";
 choices[83]= new Array();
 choices[83][0] = "El tama&ntilde;o en bytes de la unidad de datos m&aacute;s grande que puede transmitirse por una red de comunicaciones";
 choices[83][1] = "El m&aacute;ximo retardo medido en segundos permitido entre dos nodos";
 choices[83][2] = "El tama&ntilde;o en bits de la unidad de datos m&aacute;s grande que puede transmitirse por una red de comunicaciones";
 choices[83][3] = "El m&aacute;ximo retardo medido en milisegundos permitido entre dos nodos";
 answers[83] = choices[83][0];
 units[83] = "101";
 comments[83] = "Id Pregunta: 10114. Maximum Transfer Unit";


//  Id pregunta: 10122 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  En el encaminamiento por estado de los enlaces cada router:";
 choices[84]= new Array();
 choices[84][0] = "Env&iacute;a una tabla a sus routers vecinos con la distancia de &eacute;l a todos los destinos. ";
 choices[84][1] = "Env&iacute;a una tabla a todos los routers con la distancia de &eacute;l a todos los destinos.";
 choices[84][2] = "Env&iacute;a una tabla a sus routers vecinos con la distancia de &eacute;l a todos sus vecinos.";
 choices[84][3] = "Env&iacute;a una tabla a todos los routers con la distancia de &eacute;l a todos sus vecinos.";
 answers[84] = choices[84][3];
 units[84] = "102";
 comments[84] = "Id Pregunta: 10122. ";


//  Id pregunta: 10168 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  En relaci&oacute;n con los operandos del &aacute;lgebra relacional, se cumple que:";
 choices[85]= new Array();
 choices[85][0] = "La Uni&oacute;n de las relaciones R y S puede aplicarse a&uacute;n cuando R y S no tengan igual grado y/o compatibilidad de dominios";
 choices[85][1] = "El Outer Join incluye en la relaci&oacute;n resultante las tuplas de una o ambas relaciones que en los atributos comunes no tienen valores iguales o correspondientes";
 choices[85][2] = "El grado de la relaci&oacute;n resultante de la Uni&oacute;n Natural o Natural Join entre dos relaciones R y S es igual al grado de R + el grado de S";
 choices[85][3] = "La intersecci&oacute;n es un operador fundamental del &aacute;lgebra relacional";
 answers[85] = choices[85][1];
 units[85] = "58";
 comments[85] = "Id Pregunta: 10168. ";


//  Id pregunta: 10351 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  En relaci&oacute;n con las pautas de accesibilidad WCAG 2.0, indique la respuesta correcta:";
 choices[86]= new Array();
 choices[86][0] = "Para cumplir nivel AA, la presentaci&oacute;n visual de texto e im&aacute;genes de texto debe tener una relaci&oacute;n de contraste de, al menos, 4.5:1";
 choices[86][1] = "Lo anterior es cierto, pero para nivel A";
 choices[86][2] = "Lo anterior es cierto, pero para nivel AAA";
 choices[86][3] = "Lo anterior es cierto, pero a&ntilde;adiendo que no aplica a logotipos, textos grandes y textos incidentales";
 answers[86] = choices[86][3];
 units[86] = "39";
 comments[86] = "Id Pregunta: 10351. Consultar WCAG Pauta 1.4.3 Contraste (m&iacute;nimo)";


//  Id pregunta: 10525 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Se&ntilde;ale la respuesta correcta respecto a las arquitecturas UMA (Uniform Memory Access) y NUMA (Non-Uniform Memory Access)";
 choices[87]= new Array();
 choices[87][0] = "en NUMA un procesador accede m&aacute;s deprisa a su memoria local que a la memoria compartida";
 choices[87][1] = "en UMA los procesadores acceden a la memoria compartida mediante un bus o conmutador";
 choices[87][2] = "A y B son incorrectas";
 choices[87][3] = "A y B son correctas";
 answers[87] = choices[87][3];
 units[87] = "45";
 comments[87] = "Id Pregunta: 10525. NULL";


//  Id pregunta: 10622 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Son proyectos SIG (Sistemas de Informaci&oacute;n Geogr&aacute;fica) en Espa&ntilde;a:";
 choices[88]= new Array();
 choices[88][0] = "SIC y SILG.";
 choices[88][1] = "SIGNA y SIANE.";
 choices[88][2] = "SIGMA y SIGPAC.";
 choices[88][3] = "SIGMAPA y SEGRO.";
 answers[88] = choices[88][1];
 units[88] = "67";
 comments[88] = "Id Pregunta: 10622. ";


//  Id pregunta: 10677 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  La Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas establece la obligatoriedad de relaci&oacute;n con las AAPP a trav&eacute;s de medios electr&oacute;nicos para:";
 choices[89]= new Array();
 choices[89][0] = "Personas f&iacute;sicas.";
 choices[89][1] = "Personas jur&iacute;dicas.";
 choices[89][2] = "Personas f&iacute;sicas y jur&iacute;dicas.";
 choices[89][3] = "Ninguna de las anteriores.";
 answers[89] = choices[89][1];
 units[89] = "30";
 comments[89] = "Id Pregunta: 10677. ";


//  Id pregunta: 11090 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  El procesador intel i7 utiliza una jerarqu&iacute;a de cache de 3 niveles, L1, L2 y L3. Indicar la respuesta INCORRECTA";
 choices[90]= new Array();
 choices[90][0] = "Respecto al tama&ntilde;o de la memoria, L1&gt;L2&gt;L3";
 choices[90][1] = "Los tres niveles utilizan un tama&ntilde;o de bloque de 64 bytes";
 choices[90][2] = "El nivel 3, L3, es compartido por todos los cores del chip";
 choices[90][3] = "El nivel 1, L1, presenta la latencia m&aacute;s alta ";
 answers[90] = choices[90][3];
 units[90] = "45";
 comments[90] = "Id Pregunta: 11090. ";


//  Id pregunta: 11129 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l de las siguientes sentencias es verdadera?";
 choices[91]= new Array();
 choices[91][0] = "El est&aacute;ndar SATA 3 soporta transferencias hasta 4.8 Gbps";
 choices[91][1] = "La versi&oacute;n ATA-8 soporta velocidades hasta 12 Gbps";
 choices[91][2] = "El SAS 600 consigue velocidades de hasta 16 Gbps";
 choices[91][3] = "Los discos SAS han sido progresivamente sustituidos por los SCSI,";
 answers[91] = choices[91][0];
 units[91] = "48";
 comments[91] = "Id Pregunta: 11129. ";


//  Id pregunta: 11218 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Cu&aacute;l de las siguientes respuestas es falsa:";
 choices[92]= new Array();
 choices[92][0] = "Los compiladores nativos eliminan la independencia de la plataforma del c&oacute;digo compilado a cambio de proporcionar un mayor rendimiento.";
 choices[92][1] = "Los compiladores nativos AOT (Ahead-Of-time) compilan a c&oacute;digo m&aacute;quina nativo antes de la ejecuci&oacute;n de la aplicaci&oacute;n.";
 choices[92][2] = "Los compiladores JIT (Just in Time) compilan durante la ejecuci&oacute;n.";
 choices[92][3] = "Todas son verdaderas.";
 answers[92] = choices[92][3];
 units[92] = "60";
 comments[92] = "Id Pregunta: 11218. ";


//  Id pregunta: 11221 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l es el nombre de la biblioteca de clases del Framework de .NET?";
 choices[93]= new Array();
 choices[93][0] = "FCL";
 choices[93][1] = "CLR";
 choices[93][2] = "CLS";
 choices[93][3] = "JIT";
 answers[93] = choices[93][0];
 units[93] = "59";
 comments[93] = "Id Pregunta: 11221. ";


//  Id pregunta: 11282 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Qu&eacute; es un servicio WMTS?";
 choices[94]= new Array();
 choices[94][0] = "Un tipo de recubrimiento SOAP";
 choices[94][1] = "Un servicio de cat&aacute;logo cacheado";
 choices[94][2] = "Un servicio de visualizaci&oacute;n de mapas sin teselas, pero cacheado";
 choices[94][3] = "Un servicio de visualizaci&oacute;n de mapas teselado";
 answers[94] = choices[94][3];
 units[94] = "67";
 comments[94] = "Id Pregunta: 11282. ";


//  Id pregunta: 11284 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Situar una posici&oacute;n en el mapa empleando una referencia catastral es un ejemplo de?";
 choices[95]= new Array();
 choices[95][0] = "Georreferenciaci&oacute;n directa";
 choices[95][1] = "Sistema de Proyecci&oacute;n (SRS)";
 choices[95][2] = "Georreferenciaci&oacute;n discreta";
 choices[95][3] = "a y c son ciertas";
 answers[95] = choices[95][2];
 units[95] = "67";
 comments[95] = "Id Pregunta: 11284. ";


//  Id pregunta: 11308 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Cu&aacute;l de los siguientes &oacute;rganos no es un &oacute;rgano de contrataci&oacute;n en el &aacute;mbito de un ministerio.";
 choices[96]= new Array();
 choices[96][0] = "Ministro";
 choices[96][1] = "Secretario de Estado.";
 choices[96][2] = "Junta de Contrataci&oacute;n.";
 choices[96][3] = "Mesa de Contrataci&oacute;n.";
 answers[96] = choices[96][3];
 units[96] = "41";
 comments[96] = "Id Pregunta: 11308. La Mesa de Contrataci&oacute;n es un &oacute;rgano de asistencia.";


//  Id pregunta: 11420 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Seg&uacute;n la Ley 9/2014, las propuestas para la elaboraci&oacute;n de normativa relativa a las infraestructuras comunes de comunicaciones electr&oacute;nicas en el interior de edificios es funci&oacute;n de:";
 choices[97]= new Array();
 choices[97][0] = "MINETUR.";
 choices[97][1] = "AGE.";
 choices[97][2] = "Organismos internacionales.";
 choices[97][3] = "CNMC.";
 answers[97] = choices[97][0];
 units[97] = "110";
 comments[97] = "Id Pregunta: 11420. ";


//  Id pregunta: 11687 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Al conectar un PC y un HUB se debe usar:";
 choices[98]= new Array();
 choices[98][0] = "Straight-through cable";
 choices[98][1] = "Consola";
 choices[98][2] = "Crossover cable";
 choices[98][3] = "RJ 11";
 answers[98] = choices[98][0];
 units[98] = "99";
 comments[98] = "Id Pregunta: 11687. NULL";


//  Id pregunta: 11726 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;C&oacute;mo se puede mejorar la cancelaci&oacute;n de campo magn&eacute;tico en cables UTP? ";
 choices[99]= new Array();
 choices[99][0] = "Aumentando el n&uacute;mero de vueltas en cada par de hilos ";
 choices[99][1] = "Disminuir el n&uacute;mero de cables que se utilizan para transportar datos";
 choices[99][2] = "Aumentando el espesor del recubrimiento de PVC que encierra todos los pares de hilo";
 choices[99][3] = "Aumentando el espesor de los hilos de cobre";
 answers[99] = choices[99][0];
 units[99] = "99";
 comments[99] = "Id Pregunta: 11726. NULL";


