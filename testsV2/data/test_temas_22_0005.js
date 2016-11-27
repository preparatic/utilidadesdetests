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

//  Id pregunta: 807 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  A la tabla virtual que se deriva de una o varias tablas f&iacute;sicas y aparece como una ventana personalizada para el usuario, se la conoce por el nombre de:";
 choices[0]= new Array();
 choices[0][0] = "Subesquema de grupo";
 choices[0][1] = "Vista";
 choices[0][2] = "Apuntador de &iacute;ndices";
 choices[0][3] = "Modelo f&iacute;sico";
 answers[0] = choices[0][1];
 units[0] = "52,53";
 comments[0] = "Id Pregunta: 807. ";


//  Id pregunta: 839 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes afirmaciones es incorrecta, si hablamos de las ventajas derivadas del uso de vistas en una Base de datos?:";
 choices[1]= new Array();
 choices[1][0] = "Pueden verse los mismos datos por diferentes usuarios";
 choices[1][1] = "Los intercambios de campos entre tablas f&iacute;sicas son transparentes a las vistas del usuario";
 choices[1][2] = "Los intercambios de campos entre tablas f&iacute;sicas no son transparentes a las vistas del usuario";
 choices[1][3] = "Ocultar campos de datos importantes a los usuarios que no deben ser manipulados";
 answers[1] = choices[1][2];
 units[1] = "57";
 comments[1] = "Id Pregunta: 839. ";


//  Id pregunta: 852 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguientes no es una versi&oacute;n propietaria del sistema operativo Unix?:";
 choices[2]= new Array();
 choices[2][0] = "HP-UX";
 choices[2][1] = "Solaris";
 choices[2][2] = "IRIX";
 choices[2][3] = "Todas las anteriores lo son";
 answers[2] = choices[2][3];
 units[2] = "52, 53";
 comments[2] = "Id Pregunta: 852. ";


//  Id pregunta: 899 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Es posible arrancar en GNU/Linux desde CD?:";
 choices[3]= new Array();
 choices[3][0] = "No, tiene que estar en disco duro obligatoriamente";
 choices[3][1] = "S&iacute;, en todos los casos";
 choices[3][2] = "S&iacute;, dependiendo de la versi&oacute;n de GNU/Linux";
 choices[3][3] = "No, aunque se podr&iacute;a parchear el arranque para que mirase el CD primero";
 answers[3] = choices[3][2];
 units[3] = "53";
 comments[3] = "Id Pregunta: 899. ";


//  Id pregunta: 941 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Qu&eacute; se entiende por quantum?:";
 choices[4]= new Array();
 choices[4][0] = "El porcentaje de tiempo durante el cual dos o m&aacute;s componentes est&aacute;n siendo utilizados simult&aacute;neamente";
 choices[4][1] = "El porcentaje de tiempo durante el cual los distintos dispositivos del sistema est&aacute;n siendo utilizados en tareas del sistema";
 choices[4][2] = "La cantidad de tiempo ininterrumpido de la CPU que un sistema de tiempo compartido asigna a los diferentes trabajos";
 choices[4][3] = "El n&uacute;mero de programas sacados de memoria por unidad de tiempo a causa de falta de espacio &oacute; para reorganizar el mismo";
 answers[4] = choices[4][2];
 units[4] = "52";
 comments[4] = "Id Pregunta: 941. ";


//  Id pregunta: 1045 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  El principio de &quot;Need-To-Know&quot; viene a significar que:";
 choices[5]= new Array();
 choices[5][0] = "Un proceso s&oacute;lo deber&iacute;a acceder a aquello recursos que son necesarios para completar su tarea";
 choices[5][1] = "Un proceso ha de estar siempre activo frente a cualquier ataque pasivo";
 choices[5][2] = "Las dos anteriores son correctas";
 choices[5][3] = "Hace referencia exclusiva a la asignaci&oacute;n de recursos con herramientas PERT, CPM etc";
 answers[5] = choices[5][0];
 units[5] = "52";
 comments[5] = "Id Pregunta: 1045. ";


//  Id pregunta: 1051 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  El robo de ciclo explica que la duraci&oacute;n de las instrucciones no sea fija en funci&oacute;n de si existen o no robos de ciclo:";
 choices[6]= new Array();
 choices[6][0] = "En todo caso es falso";
 choices[6][1] = "Siempre es cierto";
 choices[6][2] = "Depende de la carga de trabajo de la CPU";
 choices[6][3] = "Depende del 'throughput'";
 answers[6] = choices[6][1];
 units[6] = "52";
 comments[6] = "Id Pregunta: 1051. ";


//  Id pregunta: 1055 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  El sistema operativo Linux puede ejecutarse en muchas plataformas diferentes. Esto se debe a:";
 choices[7]= new Array();
 choices[7][0] = "El uso de una m&aacute;quina virtual que encapsula el sistema operativo, abstrayendolo de las peculiaridades del hardware subyacente";
 choices[7][1] = "El uso de una aquitectura microkernel que permite una portabilidad sin precedentes";
 choices[7][2] = "Simplemente el sistema se vuelve a compilar cada vez que se cambia de plataforma";
 choices[7][3] = "La difusi&oacute;n del juego de instrucciones x86, para el que existe soporte en gran cantidad de sistemas";
 answers[7] = choices[7][2];
 units[7] = "53";
 comments[7] = "Id Pregunta: 1055. ";


//  Id pregunta: 1068 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Elija la respuesta falsa. Las siguientes funciones pueden ser llevadas a cabo por un sistema windows 200x:";
 choices[8]= new Array();
 choices[8][0] = "Enrutamiento Ip";
 choices[8][1] = "Servidor de telefonia";
 choices[8][2] = "Servidor NFS";
 choices[8][3] = "Servidor NIS+";
 answers[8] = choices[8][3];
 units[8] = "56";
 comments[8] = "Id Pregunta: 1068. ";


//  Id pregunta: 1084 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  En el lenguaje SQL una 'Transacci&oacute;n' es una secuencia de operaciones que constituye una unidad de recuperaci&oacute;n, y que puede finalizarse con una sentencia:";
 choices[9]= new Array();
 choices[9][0] = "SELECT";
 choices[9][1] = "END";
 choices[9][2] = "COMMIT";
 choices[9][3] = "CLOSE";
 answers[9] = choices[9][2];
 units[9] = "58";
 comments[9] = "Id Pregunta: 1084. ";


//  Id pregunta: 1133 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  En sistemas Windows 200x, &iquest;cu&aacute;l es el API nativo de Microsoft que permite programar contra los servicios de Active Directory?:";
 choices[10]= new Array();
 choices[10][0] = "X.500";
 choices[10][1] = "ADSI";
 choices[10][2] = "LDAP";
 choices[10][3] = "Todas son falsas";
 answers[10] = choices[10][1];
 units[10] = "56";
 comments[10] = "Id Pregunta: 1133. ";


//  Id pregunta: 1143 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  En un sistema fuertemente acoplado (tightly coupled):";
 choices[11]= new Array();
 choices[11][0] = "Los procesadores solo pueden acceder a los recursos mas cercanos, que ellos controlan";
 choices[11][1] = "Los procesadores pueden acceder a todos los recursos del sistema, mediante paso de mensajes";
 choices[11][2] = "El acceso es posible directamente para todos los procesadores, a la misma velocidad";
 choices[11][3] = "El acceso es posible directamente para todos los procesadores, pero con variaciones de velocidad seg&uacute;n la memoria accedida";
 answers[11] = choices[11][2];
 units[11] = "52";
 comments[11] = "Id Pregunta: 1143. ";


//  Id pregunta: 1145 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  En un sistema operativo Linux, &iquest;cu&aacute;l es el &uacute;ltimo script que se ejecuta antes de iniciarse el proceso 'login'?:";
 choices[12]= new Array();
 choices[12][0] = "rc.local";
 choices[12][1] = "autoexec.bat";
 choices[12][2] = "rc4";
 choices[12][3] = "prelogin";
 answers[12] = choices[12][0];
 units[12] = "54";
 comments[12] = "Id Pregunta: 1145. NULL";


//  Id pregunta: 1151 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  En una operaci&oacute;n de acceso directo a memoria, el procesador debe enviar distintas informaciones necesarias para realizar la operaci&oacute;n. Indique cu&aacute;l de las siguientes alternativas se refiere a una informaci&oacute;n que no es necesaria en una operaci&oacute;n de DMA:";
 choices[13]= new Array();
 choices[13][0] = "Direcci&oacute;n de memoria";
 choices[13][1] = "Tama&ntilde;o de las palabras";
 choices[13][2] = "Sentido de la operaci&oacute;n";
 choices[13][3] = "Identificaci&oacute;n del perif&eacute;rico";
 answers[13] = choices[13][1];
 units[13] = "52";
 comments[13] = "Id Pregunta: 1151. ";


//  Id pregunta: 1157 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  En Unix el comando  pwd sirve para:";
 choices[14]= new Array();
 choices[14][0] = "Introducir la contrase&ntilde;a al sistema";
 choices[14][1] = "Saber cu&aacute;l es directorio donde se est&aacute; situado";
 choices[14][2] = "Cambiar nuestra contrase&ntilde;a";
 choices[14][3] = "Saber cu&aacute;l es nuestra impresora asignada";
 answers[14] = choices[14][1];
 units[14] = "54";
 comments[14] = "Id Pregunta: 1157. NULL";


//  Id pregunta: 1170 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  GNU:";
 choices[15]= new Array();
 choices[15][0] = "Es un acr&oacute;nimo de 'GNU is Not Unix'";
 choices[15][1] = "Fue fundado en 1984 por Richard M. Stallman para crear un sistema operativo Unix completo, basado en software libre.";
 choices[15][2] = "Es el autor de las licencias de software libre GPL y LGPL";
 choices[15][3] = "Todas son ciertas";
 answers[15] = choices[15][3];
 units[15] = "53";
 comments[15] = "Id Pregunta: 1170. ";


//  Id pregunta: 1191 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Indique cu&aacute;l de las siguientes expresiones corresponde a una sentencia correcta de consulta en SQL:";
 choices[16]= new Array();
 choices[16][0] = "SELECT Nombre, Apellido FROM PERSONAS IF Edad &gt;25";
 choices[16][1] = "SHOW Nombre, Apellido.FROM PERSONAS FOR Edad &gt;25";
 choices[16][2] = "SELECT Nombre, Apellido FROM PERSONAS WHERE Edad&gt; 25";
 choices[16][3] = "DISPLAY Nombre, Apellido FROM PERSONAS WHERE Edad &gt;25";
 answers[16] = choices[16][2];
 units[16] = "58";
 comments[16] = "Id Pregunta: 1191. ";


//  Id pregunta: 1232 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  La memoria virtual:";
 choices[17]= new Array();
 choices[17][0] = "Tambi&eacute;n se denomina antememoria o memoria cach&eacute;";
 choices[17][1] = "Es una memoria de s&oacute;lo lectura";
 choices[17][2] = "Obliga a diferenciar entre el mapa de direcciones l&oacute;gicas y el de direcciones f&iacute;sicas";
 choices[17][3] = " Se organiza, siguiendo la t&eacute;cnica 'pipe-line', en un conjunto de elementos, llamados segmentos,que forman una unidad l&oacute;gica desde el punto de vista del software";
 answers[17] = choices[17][2];
 units[17] = "52";
 comments[17] = "Id Pregunta: 1232. ";


//  Id pregunta: 1234 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  La multiprogramaci&oacute;n y el tiempo compartido, en los sistemas operativos, ocasionan:";
 choices[18]= new Array();
 choices[18][0] = "Que haya que crear mecanismos de seguridad como cortafuegos y sistemas de alimentaci&oacute;n ininterrumpida";
 choices[18][1] = "Que haya que crear mecanismos de protecci&oacute;n de injerencias entre diversos trabajos simult&aacute;neos, y entre diversos usuarios que quieran acceder a archivos o recursos como la impresora o los discos";
 choices[18][2] = "Que haya que comprobar al apagar el ordenador si a&uacute;n no han cerrado su sesi&oacute;n todos los usuarios";
 choices[18][3] = "Que haya que crear sistemas de protecci&oacute;n del monitor para evitar ataques no autorizados";
 answers[18] = choices[18][1];
 units[18] = "52";
 comments[18] = "Id Pregunta: 1234. ";


//  Id pregunta: 1236 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  La norma ANSI/SQL se corresponde con la norma ISO:";
 choices[19]= new Array();
 choices[19][0] = "ISO 7498";
 choices[19][1] = "ISO 9735";
 choices[19][2] = "ISO 9075";
 choices[19][3] = "ISO 9945-1";
 answers[19] = choices[19][2];
 units[19] = "58";
 comments[19] = "Id Pregunta: 1236. ";


//  Id pregunta: 1255 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Las bases de datos tipo ORACLE o Mysql est&aacute;n estructuradas seg&uacute;n un modelo:";
 choices[20]= new Array();
 choices[20][0] = "Sem&aacute;ntico";
 choices[20][1] = "Conceptual";
 choices[20][2] = "Relacional";
 choices[20][3] = "Jer&aacute;rquico";
 answers[20] = choices[20][2];
 units[20] = "58";
 comments[20] = "Id Pregunta: 1255. ";


//  Id pregunta: 1268 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  LinEx es:";
 choices[21]= new Array();
 choices[21][0] = "Una versi&oacute;n de Linux creada por una escisi&oacute;n del grupo de programadores, desconformes con el descontrol de las contribuciones SW al sistema";
 choices[21][1] = "Una versi&oacute;n de Linux dise&ntilde;ada para Europa tratando de unificar tecnol&oacute;gicamente sus sistemas";
 choices[21][2] = "Una versi&oacute;n de Linux creada para la Administraci&oacute;n Electr&oacute;nica y todas sus aplicaciones";
 choices[21][3] = "Una versi&oacute;n de Linux dise&ntilde;ada por la Administraci&oacute;n P&uacute;blica de Extremadura para abaratar costes de licencias SW en la Administraci&oacute;n";
 answers[21] = choices[21][3];
 units[21] = "54";
 comments[21] = "Id Pregunta: 1268. NULL";


//  Id pregunta: 1301 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Para prestaciones, capacidades y funcionalidades equivalentes entre Linux y Windows XP, &iquest;qu&eacute; afirmaci&oacute;n es cierta?:";
 choices[22]= new Array();
 choices[22][0] = "Un PC con Linux necesita m&aacute;s memoria que uno con Windows XP";
 choices[22][1] = "Un PC con Linux necesita aproximadamente la misma memoria que uno con Windows XP";
 choices[22][2] = "Un PC con Linux necesita menos memoria que uno con Windows XP";
 choices[22][3] = "Linux no puede instalarse en PCs";
 answers[22] = choices[22][2];
 units[22] = "53,56";
 comments[22] = "Id Pregunta: 1301. ";


//  Id pregunta: 1324 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  SAMBA:";
 choices[23]= new Array();
 choices[23][0] = "Implementa los protocolos de los servidores de archivos Windows";
 choices[23][1] = "Permite que un servidor Unix sea controlador de dominio en una red Windows";
 choices[23][2] = "Permite la compartici&oacute;n de las colas de impresi&oacute;n Unix con Windows y viceversa";
 choices[23][3] = "Todas las anteriores respuestas son ciertas";
 answers[23] = choices[23][3];
 units[23] = "54";
 comments[23] = "Id Pregunta: 1324. NULL";


//  Id pregunta: 1336 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Sean dos transacciones A y B:  1&ordm;) A accede al registro 1. 2&ordm;) B accede al registro 2. 3&ordm;) A pide el registro 2, pero debe esperar que B lo libere. 4&ordm;) B pide el registro 1, pero debe esperar que A lo libere.  Entonces:";
 choices[24]= new Array();
 choices[24][0] = "Se produjo alg&uacute;n fallo en el dise&ntilde;o l&oacute;gico de datos, pues &eacute;sto no debe suceder";
 choices[24][1] = "Estamos ante un caso de dise&ntilde;o defectuoso de los procesos A y B";
 choices[24][2] = "Se ha producido una situaci&oacute;n de 'deadlock'";
 choices[24][3] = "El transaccional desbloquear&aacute; los registros bloqueados y permitir&aacute; que las transacciones continuen sin m&aacute;s problemas";
 answers[24] = choices[24][2];
 units[24] = "58";
 comments[24] = "Id Pregunta: 1336. NULL";


//  Id pregunta: 1381 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Un conjunto de instrucciones dedicadas a la ejecuci&oacute;n de una tarea espec&iacute;fica sobre una base de datos en tiempo real recibe el nombre de:";
 choices[25]= new Array();
 choices[25][0] = "M&oacute;dulo";
 choices[25][1] = "M&oacute;dulo reentrante";
 choices[25][2] = "Transacci&oacute;n";
 choices[25][3] = "Actualizaci&oacute;n";
 answers[25] = choices[25][2];
 units[25] = "56,57";
 comments[25] = "Id Pregunta: 1381. ";


//  Id pregunta: 1404 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Un sistema situado en una central nuclear, encargado de gestionar su correcto funcionamiento y operativa, controlando todos sus elementos, y que tiene un umbral de tiempo m&aacute;ximo para dar cada respuesta, se cataloga como:";
 choices[26]= new Array();
 choices[26][0] = "Sistema multiprogramado";
 choices[26][1] = "Sistema de tiempo compartido";
 choices[26][2] = "Sistema de tiempo real";
 choices[26][3] = "Sistema multiusuario";
 answers[26] = choices[26][2];
 units[26] = "52";
 comments[26] = "Id Pregunta: 1404. ";


//  Id pregunta: 1427 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Unix implementa la protecci&oacute;n de ficheros (permisos) a nivel de:";
 choices[27]= new Array();
 choices[27][0] = "Librer&iacute;as del sistema";
 choices[27][1] = "Microkernel";
 choices[27][2] = "Directorios";
 choices[27][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[27] = choices[27][2];
 units[27] = "53";
 comments[27] = "Id Pregunta: 1427. ";


//  Id pregunta: 1459 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  En las interfaces orientadas a objetos (OOUI) es falso que:";
 choices[28]= new Array();
 choices[28][0] = "los iconos representan objetos que se pueden manipular directamente";
 choices[28][1] = "los objetos son de 3 tipos: datos, contenedores y dispositivos";
 choices[28][2] = "un ejemplo de interfaz orientada a objeto lo representan los accesos directos de Windows, donde cada objeto tiene su propia tarea asociada";
 choices[28][3] = "el estilo de interacci&oacute;n es el de acci&oacute;n-objeto y no el de objeto-acci&oacute;n";
 answers[28] = choices[28][3];
 units[28] = "52";
 comments[28] = "Id Pregunta: 1459. ";


//  Id pregunta: 1497 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  La aplicaci&oacute;n que permite conocer si un sistema est&aacute; accesible es:";
 choices[29]= new Array();
 choices[29][0] = "traceroute";
 choices[29][1] = "ping";
 choices[29][2] = "wake";
 choices[29][3] = "setup";
 answers[29] = choices[29][1];
 units[29] = "52,55";
 comments[29] = "Id Pregunta: 1497. ";


//  Id pregunta: 1502 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  La utilidad &quot;ping&quot;:";
 choices[30]= new Array();
 choices[30][0] = "Se basa en los comandos &quot;echo request&quot; y &quot;echo reply&quot; del protocolo ICMP";
 choices[30][1] = "Se basa en el protocolo PING";
 choices[30][2] = "Se basa en el protocolo UDP";
 choices[30][3] = "Se basa en el protocolo TCP";
 answers[30] = choices[30][0];
 units[30] = "52,55";
 comments[30] = "Id Pregunta: 1502. ";


//  Id pregunta: 1540 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  &iquest;Qu&eacute; es MOSIX?";
 choices[31]= new Array();
 choices[31][0] = "MOSIX  es un conjunto de herramientas especialmentedesarrolladas para la construcci&oacute;n de clusters Linux basados en el procesador x86";
 choices[31][1] = "MOSIX  es un conjunto de herramientas especialmentedesarrolladas para la construcci&oacute;n de clusters Unix";
 choices[31][2] = "MOSIX  es un conjunto de herramientas especialmentedesarrolladas para la construcci&oacute;n de clusters Linux";
 choices[31][3] = "MOSIX es un conjunto de herramientas especialmentedesarrolladas para la construcci&oacute;n de clusters Unix basados en el procesador x86";
 answers[31] = choices[31][0];
 units[31] = "55";
 comments[31] = "Id Pregunta: 1540. ";


//  Id pregunta: 1597 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  En relaci&oacute;n con la interfaz ODBC, se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es falsa:";
 choices[32]= new Array();
 choices[32][0] = "Es la implementaci&oacute;n realizada por Microsoft de las especificaciones CLI (Call Level Interface) para el acceso desde aplicaciones a sistemas gestores de base de datos";
 choices[32][1] = "La idea que sustenta el desarrollo de ODBC es la de permitir que una misma aplicaci&oacute;n pueda interactuar con distintos sistemas gestores de base de datos";
 choices[32][2] = "Dispone de flexibilidad como interfaz pero impide aprovechar las ventajas de la arquitectura cliente servidor";
 choices[32][3] = "Permite que lo que un sistema gestor pueda hacerle sea transparente a la aplicaci&oacute;n, aunque no implementa nuevas capacidades";
 answers[32] = choices[32][2];
 units[32] = "58";
 comments[32] = "Id Pregunta: 1597. NULL";


//  Id pregunta: 1607 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  La ejecuci&oacute;n desde otro lenguaje de programaci&oacute;n, de un procedimiento escrito en SQL, se denomina:";
 choices[33]= new Array();
 choices[33][0] = "PL/SQL.";
 choices[33][1] = "JSQL.";
 choices[33][2] = "SQL embebido.";
 choices[33][3] = "SQL anfitri&oacute;n.";
 answers[33] = choices[33][2];
 units[33] = "58";
 comments[33] = "Id Pregunta: 1607. Junta Andaluc&iacute;a";


//  Id pregunta: 1673 AÃ±o de creación de pregunta: 2004-01-01
 questions[34]= "35)  &iquest;Qu&eacute; se conoce como grado de una relaci&oacute;n?";
 choices[34]= new Array();
 choices[34][0] = "Un conjunto de valores";
 choices[34][1] = "El n&uacute;mero de tuplas";
 choices[34][2] = "El n&uacute;mero de atributos";
 choices[34][3] = "El n&uacute;mero de vistas";
 answers[34] = choices[34][2];
 units[34] = "58";
 comments[34] = "Id Pregunta: 1673. ";


//  Id pregunta: 1677 AÃ±o de creación de pregunta: 2004-01-01
 questions[35]= "36)  &iquest;Qu&eacute; hace el comando SQL update?";
 choices[35]= new Array();
 choices[35][0] = "Modifica la estructura de una tabla agregando o eliminando campos";
 choices[35][1] = "Modifica la estructura de una vista";
 choices[35][2] = "Modifica los valores de los campos de una tabla";
 choices[35][3] = "Modifica la estructura de una tabla cambiando la definici&oacute;n de sus campos";
 answers[35] = choices[35][2];
 units[35] = "58";
 comments[35] = "Id Pregunta: 1677. ";


//  Id pregunta: 1726 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  Las partes del sistema operativo que acceden directamente a los recursos hardware";
 choices[36]= new Array();
 choices[36][0] = "Se ejecutan en modo usuario";
 choices[36][1] = "Se desarrollan por los usuarios";
 choices[36][2] = "Se desarrollan de forma gen&eacute;rica";
 choices[36][3] = "Se ejcutan en modo protegido";
 answers[36] = choices[36][3];
 units[36] = "54";
 comments[36] = "Id Pregunta: 1726. NULL";


//  Id pregunta: 1745 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  Cu&aacute;les son las funciones de un SGBD";
 choices[37]= new Array();
 choices[37][0] = "Facilitar la compresi&oacute;n de un problema complejo como es el dise&ntilde;o de una base de datos";
 choices[37][1] = "Proporcionar un DDL (Lenguaje de Definici&oacute;n de Datos) o un DML (Lenguaje de Manipulaci&oacute;n de Datos)";
 choices[37][2] = "Proporcionar soluciones ante problemas de cuota de almacenamiento concurrente";
 choices[37][3] = "Proporcionar un diccionario de datos";
 answers[37] = choices[37][3];
 units[37] = "57";
 comments[37] = "Id Pregunta: 1745. ";


//  Id pregunta: 1746 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  Qu&eacute; tipo de arquitectura propone el comit&eacute; ANSI/X3/SPARC para la normalizaci&oacute;n de los SGBD";
 choices[38]= new Array();
 choices[38][0] = "Arquitectura de dos niveles: estructura global y vistas l&oacute;gicas";
 choices[38][1] = "Arquitectura de tres niveles: nivel interno o f&iacute;sico, conceptual y externo o l&oacute;gico";
 choices[38][2] = "Arquitectura de cuatro niveles: interno, f&iacute;sico, conceptual y l&oacute;gico";
 choices[38][3] = "Arquitectura de un &uacute;nico nivel denominado nivel global";
 answers[38] = choices[38][1];
 units[38] = "57";
 comments[38] = "Id Pregunta: 1746. ";


//  Id pregunta: 1747 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  Cu&aacute;l de las siguientes &oacute;rdenes, define el Lenguaje de Manipulaci&oacute;n de Datos (DML) de un SGBD";
 choices[39]= new Array();
 choices[39][0] = "create table";
 choices[39][1] = "revoke";
 choices[39][2] = "insert";
 choices[39][3] = "todas las anteriores";
 answers[39] = choices[39][2];
 units[39] = "57";
 comments[39] = "Id Pregunta: 1747. ";


//  Id pregunta: 1748 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  Identifique el t&eacute;rmino que no designa a una distribuci&oacute;n de Linux";
 choices[40]= new Array();
 choices[40][0] = "Ubuntu";
 choices[40][1] = "Debian";
 choices[40][2] = "Mandeva";
 choices[40][3] = "Red Hat";
 answers[40] = choices[40][2];
 units[40] = "52,53";
 comments[40] = "Id Pregunta: 1748. 57";


//  Id pregunta: 1925 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  Para la modelizaci&oacute;n de datos en el modelo de entidad-relaci&oacute;n &iquest;Qu&eacute; se entiende como grado de una tabla?";
 choices[41]= new Array();
 choices[41][0] = "El n&uacute;mero de filas de la tabla";
 choices[41][1] = "El n&uacute;mero de columnas de la tabla";
 choices[41][2] = "El n&uacute;mero de entidades de un tipo que se relacionan con las de otro tipo en funci&oacute;n de los atributos que caracterizan la relaci&oacute;n";
 choices[41][3] = "El n&uacute;mero de atributos de esa tabla que son claves primarias de otras tablas";
 answers[41] = choices[41][1];
 units[41] = "58";
 comments[41] = "Id Pregunta: 1925. NULL";


//  Id pregunta: 1935 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  En un sistema de ficheros Unix con un tama&ntilde;o de bloque de 2 KB y nodos-i con doce direcciones directas, una indirecta simple, una indirecta doble y una indirecta triple, con direcciones de bloque de 4 bytes, para representar un fichero de 2 MB";
 choices[42]= new Array();
 choices[42][0] = "Se utilizar&aacute; un bloque de indexaci&oacute;n simple y uno de indexaci&oacute;n doble";
 choices[42][1] = "Se utilizar&aacute; un bloque de indexaci&oacute;n simple y dos de indexaci&oacute;n doble";
 choices[42][2] = "Se utilizar&aacute;n dos bloques de indexaci&oacute;n simple y uno de indexaci&oacute;n doble";
 choices[42][3] = "Se utilizar&aacute;n dos bloques de indexaci&oacute;n simple";
 answers[42] = choices[42][2];
 units[42] = "53";
 comments[42] = "Id Pregunta: 1935. ";


//  Id pregunta: 1947 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  La t&eacute;cnica que se emplea para la modelizaci&oacute;n sem&aacute;ntica de datos a la hora de dise&ntilde;ar un sistema de informaci&oacute;n, se denomina:";
 choices[43]= new Array();
 choices[43][0] = "Modelo Entidad/Relaci&oacute;n";
 choices[43][1] = "Diagrama de Flujo de Datos";
 choices[43][2] = "Diagrama de Contexto";
 choices[43][3] = "Modelo de Datos";
 answers[43] = choices[43][0];
 units[43] = "58";
 comments[43] = "Id Pregunta: 1947. ";


//  Id pregunta: 2743 AÃ±o de creación de pregunta: 2006-01-01
 questions[44]= "45)  En el modelo entidad-relaci&oacute;n extendido el grado es:";
 choices[44]= new Array();
 choices[44][0] = "El n&uacute;mero de entidades que participan en una relaci&oacute;n";
 choices[44][1] = "Es el n&uacute;mero m&aacute;ximo de ocurrencias de cada tipo de entidad que pueden intervenir en una ocurrencia de la relaci&oacute;n que se est&aacute; tratando";
 choices[44][2] = "El n&uacute;mero de columnas de una tabla";
 choices[44][3] = "Es una propiedad o caracter&iacute;stica de un tipo de entidad";
 answers[44] = choices[44][0];
 units[44] = "58,80";
 comments[44] = "Id Pregunta: 2743. ";


//  Id pregunta: 4285 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  &iquest;Qu&eacute; s&iacute;mbolo es utilizado para direccionar el resultado de la ejecuci&oacute;n de un comando del sistema operativo Unix sustituyendo el contenido de un fichero?";
 choices[45]= new Array();
 choices[45][0] = "&lt;";
 choices[45][1] = "&gt;";
 choices[45][2] = "&lt;&lt;";
 choices[45][3] = "&gt;&gt;";
 answers[45] = choices[45][1];
 units[45] = "54";
 comments[45] = "Id Pregunta: 4285. ";


//  Id pregunta: 4457 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  Para usar la utilidad &quot;Shadow Copies for Shared Folders&quot; en un sistema Windows Server 2003 R2 se necesita";
 choices[46]= new Array();
 choices[46][0] = "Un volumen FAT.";
 choices[46][1] = "Un volumen NTFS dedicado en exclusiva a esta funci&oacute;n.";
 choices[46][2] = "Un volumen FAT dedicado en exclusiva a esta funci&oacute;n.";
 choices[46][3] = "Un volumen NTFS";
 answers[46] = choices[46][3];
 units[46] = "56";
 comments[46] = "Id Pregunta: 4457. ";


//  Id pregunta: 4514 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  En el modelo relacional se denomina dominio de un atributo a:";
 choices[47]= new Array();
 choices[47][0] = "El conjunto de valores permitidos para ese atributo.";
 choices[47][1] = "El peso del atributo, es decir si forma parte de una clave candidata o no.";
 choices[47][2] = "La clasificaci&oacute;n de los atributos de una relaci&oacute;n entre dominantes y dominados.";
 choices[47][3] = "El orden de los valores de ese atributo para todas las tuplas de la relaci&oacute;n donde se encuentra definido.";
 answers[47] = choices[47][0];
 units[47] = "58";
 comments[47] = "Id Pregunta: 4514. ";


//  Id pregunta: 4724 AÃ±o de creación de pregunta: 2009-01-01
 questions[48]= "49)  La siguiente instrucci&oacute;n &ldquo;iptables &ndash;L&rdquo; :";
 choices[48]= new Array();
 choices[48][0] = "Habilita el firewall de un equipo basado en iptables.";
 choices[48][1] = "Habilita el interface loopback a traves del firewall iptables.";
 choices[48][2] = "Habilita el paso de paquetes de retorno a trav&eacute;s del firewall iptables.";
 choices[48][3] = "Muestra la lista de reglas del firewall basado en iptables.";
 answers[48] = choices[48][3];
 units[48] = "54,111";
 comments[48] = "Id Pregunta: 4724. ";


//  Id pregunta: 4800 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  En una base de datos relacional en la cual K es una clave primaria simple de una relaci&oacute;n R1, y el atributo A, perteneciente a una clave compuesta de una relaci&oacute;n R2, est&aacute; definido en el mismo dominio que K, &iquest;cu&aacute;l de las afirmaciones NO es cierta?";
 choices[49]= new Array();
 choices[49][0] = "Si la clave compuesta de la relaci&oacute;n R2 a la que pertenece A es primaria, puede existir un valor de K en R1 cuyo valor sea igual al valor de A";
 choices[49][1] = "Si la clave compuesta de la relaci&oacute;n R2 a la que pertenece A no es primaria, A puede tener un valor diferente a los posibles valores de K";
 choices[49][2] = "Si la clave compuesta de la relaci&oacute;n R2 a la que pertenece A es primaria, A no puede tener un valor nulo";
 choices[49][3] = "Si la clave compuesta de la relaci&oacute;n R2 a la que pertenece A no es primaria, A puede tener un valor nulo";
 answers[49] = choices[49][1];
 units[49] = "57";
 comments[49] = "Id Pregunta: 4800. ";


//  Id pregunta: 4955 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes es un Sistema de Gesti&oacute;n de Bases de Datos?:";
 choices[50]= new Array();
 choices[50][0] = "PostgreSQL.";
 choices[50][1] = "Gentoo.";
 choices[50][2] = "UbuntuBD.";
 choices[50][3] = "SQLCentos.";
 answers[50] = choices[50][0];
 units[50] = "57";
 comments[50] = "Id Pregunta: 4955. Examen TIC B 2007";


//  Id pregunta: 5451 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  The Bourne-again shell (bash) ";
 choices[51]= new Array();
 choices[51][0] = "es conocido como el shell original de UNIX";
 choices[51][1] = "combina buenas caracter&iacute;sticas interactivas con una sintaxis de programaci&oacute;n en shell sencilla";
 choices[51][2] = "no se usa habitualmente, por la dificultad que ofrece su shell m&aacute;s complicado";
 choices[51][3] = "es una extensi&oacute;n mejorada de la original";
 answers[51] = choices[51][3];
 units[51] = "54";
 comments[51] = "Id Pregunta: 5451. Castilla y Le&oacute;n";


//  Id pregunta: 5616 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  En UNIX, los procesos que se ejecutan en background se llaman:";
 choices[52]= new Array();
 choices[52][0] = "DAEMONS";
 choices[52][1] = "SOCKETS";
 choices[52][2] = "BACKGROUND PROCESS";
 choices[52][3] = "En UNIX no se ejecutan procesos en background ya que es un sistema operativo multiusuario";
 answers[52] = choices[52][0];
 units[52] = "53";
 comments[52] = "Id Pregunta: 5616. ";


//  Id pregunta: 5719 AÃ±o de creación de pregunta: 2009-01-01
 questions[53]= "54)  &iquest;En cu&aacute;l de los siguientes archivos de un sistema GNU/Linux se encuentra la asignaci&oacute;n entre particiones de disco duro y directorios donde son montadas?";
 choices[53]= new Array();
 choices[53][0] = "mountd.conf";
 choices[53][1] = "fstab";
 choices[53][2] = "filesystems";
 choices[53][3] = ".mnt-conf";
 answers[53] = choices[53][1];
 units[53] = "54";
 comments[53] = "Id Pregunta: 5719. ";


//  Id pregunta: 5938 AÃ±o de creación de pregunta: 2009-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de estos no es un producto de virtualizaci&oacute;n de VMWare?";
 choices[54]= new Array();
 choices[54][0] = "VMWare Parallels";
 choices[54][1] = "VMWare ESXi";
 choices[54][2] = "VMWare Workstation";
 choices[54][3] = "VMWare Fusion";
 answers[54] = choices[54][0];
 units[54] = "119";
 comments[54] = "Id Pregunta: 5938. ";


//  Id pregunta: 5942 AÃ±o de creación de pregunta: 2009-01-01
 questions[55]= "56)  Respecto a productos de virtualizaci&oacute;n, se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[55]= new Array();
 choices[55][0] = "Virtual Box es una soluci&oacute;n de virtualizaci&oacute;n de Oracle";
 choices[55][1] = "Hyper-V es una soluci&oacute;n de virtualizaci&oacute;n de Microsoft";
 choices[55][2] = "La distribuci&oacute;n de GNU/Linux Red Hat mantiene una infraestructura de virtualizaci&oacute;n para el kernel de Linux";
 choices[55][3] = "VMWare Player es una soluci&oacute;n de virtualizaci&oacute;n de escritorio gratuita y de fuentes abiertas de VMWare";
 answers[55] = choices[55][3];
 units[55] = "119";
 comments[55] = "Id Pregunta: 5942. ";


//  Id pregunta: 5943 AÃ±o de creación de pregunta: 2009-01-01
 questions[56]= "57)  En el contexto de la virtualizaci&oacute;n, &iquest;qu&eacute; es el hypervisor?";
 choices[56]= new Array();
 choices[56][0] = "Un m&oacute;dulo en el sistema operativo hu&eacute;sped que monitoriza el uso de recursos del mismo";
 choices[56][1] = "La extensi&oacute;n del gestor de procesos del sistema operativo anfitri&oacute;n que permite compartir memoria a los procesos de distintos sistemas operativos hu&eacute;spedes";
 choices[56][2] = "Es la plataforma que permite ejecutar concurrentemente varios sistemas operativos en una m&aacute;quina";
 choices[56][3] = "Es un m&oacute;dulo en el sistema operativo anfitri&oacute;n que monitoriza el uso de la Virtualization API Standard que realizan los sistemas operativos hu&eacute;spedes";
 answers[56] = choices[56][2];
 units[56] = "119";
 comments[56] = "Id Pregunta: 5943. ";


//  Id pregunta: 6318 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  Si decimos que las filas de una tabla est&aacute;n ordenadas en alguna secuencia&nbsp;f&iacute;sica, independiente de cualquier ordenamiento que pueda imponerse a la tabla mediante &iacute;ndices, estamos refiri&eacute;ndonos a un sistema de base de datos:";
 choices[57]= new Array();
 choices[57][0] = "Orientado a objetos";
 choices[57][1] = "Relacional";
 choices[57][2] = "De lista invertida";
 choices[57][3] = "Jer&aacute;rquica";
 answers[57] = choices[57][2];
 units[57] = "58";
 comments[57] = "Id Pregunta: 6318. Un ejemplo de BD de lista invertida es ADABAS";


//  Id pregunta: 6449 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  En referencia a Sistemas Operativos multiproceso tipo UNIX &iquest;qu&eacute; se entiende por proceso zombi?";
 choices[58]= new Array();
 choices[58][0] = "Un proceso padre que se ha quedado bloqueado a la espera de que sus hijos acaben sus tareas pendientes";
 choices[58][1] = "Un par de procesos en el que el primero est&aacute; a la espera de que el segundo proceso acabe y este segundo est&aacute; la espera de que el primer proceso acabe";
 choices[58][2] = "Un proceso que ha completado su ejecuci&oacute;n pero a&uacute;n contin&uacute;a consumiendo recursos";
 choices[58][3] = "Un proceso hijo que est&aacute; bloqueado a la espera de que el proceso padre le env&iacute;e datos que necesita";
 answers[58] = choices[58][2];
 units[58] = "53";
 comments[58] = "Id Pregunta: 6449. Castilla La Mancha 2009";


//  Id pregunta: 6509 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes propiedades NO se almacena en el i-node de un archivo?";
 choices[59]= new Array();
 choices[59][0] = "Permisos";
 choices[59][1] = "Propietario";
 choices[59][2] = "Grupo";
 choices[59][3] = "Nombre del fichero";
 answers[59] = choices[59][3];
 units[59] = "53";
 comments[59] = "Id Pregunta: 6509. NULL";


//  Id pregunta: 6510 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  El superusuario administrador de un sistema UNIX se conoce como:";
 choices[60]= new Array();
 choices[60][0] = "admin";
 choices[60][1] = "root";
 choices[60][2] = "superadmin";
 choices[60][3] = "Ninguno de los anteriores";
 answers[60] = choices[60][1];
 units[60] = "54";
 comments[60] = "Id Pregunta: 6510. NULL";


//  Id pregunta: 6514 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  GNOME es el acr&oacute;nimo de:";
 choices[61]= new Array();
 choices[61][0] = "GNU Network Object Model Environment";
 choices[61][1] = "General Network Object Model Environment";
 choices[61][2] = "GIMP Network Object Model Environment";
 choices[61][3] = "GNOME Network Object Model Environment";
 answers[61] = choices[61][0];
 units[61] = "54";
 comments[61] = "Id Pregunta: 6514. NULL";


//  Id pregunta: 7164 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  En una aplicaci&oacute;n desarrollada para el entorno WINDOWS, la posibilidad de cambiar de base de datos relacional a la que se accede sin tener que modificar la aplicaci&oacute;n, est&aacute; garantizada por la utilizaci&oacute;n de";
 choices[62]= new Array();
 choices[62][0] = "Drivers ODBC";
 choices[62][1] = "La tecnolog&iacute;a COM";
 choices[62][2] = "Librer&iacute;as de carga din&aacute;mica (DLL)";
 choices[62][3] = "El API adecuado";
 answers[62] = choices[62][0];
 units[62] = "56";
 comments[62] = "Id Pregunta: 7164. Examen TIC B 2009";


//  Id pregunta: 7165 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l de las siguientes es una sentencia SQL de tipo DDL (Data Definition Language)?";
 choices[63]= new Array();
 choices[63][0] = "SELECT";
 choices[63][1] = "DROP";
 choices[63][2] = "INSERT";
 choices[63][3] = "DELETE";
 answers[63] = choices[63][1];
 units[63] = "58";
 comments[63] = "Id Pregunta: 7165. Examen TIC B 2009";


//  Id pregunta: 7277 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  Virtuozzo es un software para virutalizaci&oacute;n de";
 choices[64]= new Array();
 choices[64][0] = "Hardware";
 choices[64][1] = "Red";
 choices[64][2] = "Sistema operativo";
 choices[64][3] = "Escritorio";
 answers[64] = choices[64][2];
 units[64] = "119";
 comments[64] = "Id Pregunta: 7277. NULL";


//  Id pregunta: 7298 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  SQL*Loader es una herramienta utilizada para qu&eacute; servidor de bases de datos:";
 choices[65]= new Array();
 choices[65][0] = "MySQL";
 choices[65][1] = "Oracle";
 choices[65][2] = "SQL Server";
 choices[65][3] = "Todas las opciones son correctas";
 answers[65] = choices[65][1];
 units[65] = "57";
 comments[65] = "Id Pregunta: 7298. NULL";


//  Id pregunta: 8191 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  Indique cu&aacute;l de los siguientes sistemas NO permite direccionar ficheros de un Terabyte:";
 choices[66]= new Array();
 choices[66][0] = "AdvFS";
 choices[66][1] = "MFS";
 choices[66][2] = "JFS2 ";
 choices[66][3] = "XFS";
 answers[66] = choices[66][1];
 units[66] = "48, 52";
 comments[66] = "Id Pregunta: 8191. Examen TIC A1 2010";


//  Id pregunta: 8208 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  En una tabla de una base de datos relacional:";
 choices[67]= new Array();
 choices[67][0] = "La definici&oacute;n de un mayor n&uacute;mero de &iacute;ndices siempre supone mejora en el rendimiento de las operaciones de consulta.";
 choices[67][1] = "La definici&oacute;n de un mayor n&uacute;mero de &iacute;ndices siempre mejora el rendimiento de las operaciones de inserci&oacute;n.";
 choices[67][2] = "Nunca deben incluirse en los &iacute;ndices atributos que no forman parte de la cl&aacute;usula WHERE.";
 choices[67][3] = "Si las filas de un &iacute;ndice contienen todas las columnas referenciadas en el SELECT, se elimina la necesidad de acceder ala tabla.";
 answers[67] = choices[67][3];
 units[67] = "57, 58";
 comments[67] = "Id Pregunta: 8208. Examen TIC A1 2010";


//  Id pregunta: 8412 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  &iquest;Qu&eacute; realiza la sentencia &quot;df -h | grep / unidad/temporal | grep -v grep I wc -l&quot; en el sistema operativo Linux? ";
 choices[68]= new Array();
 choices[68][0] = "Cuenta el n&uacute;mero de f&iacute;cheros que se llaman temporal. ";
 choices[68][1] = "Lista las unidades extra&iacute;bles del sistema. ";
 choices[68][2] = "Cuenta el n&uacute;mero de filesystems que contienen /unidad/temporal en su path de montaje. ";
 choices[68][3] = "Cuenta el n&uacute;mero de procesos cuyo nombre contiene /unidad/temporal. ";
 answers[68] = choices[68][2];
 units[68] = "53, 54";
 comments[68] = "Id Pregunta: 8412. Examen TIC A2 2010";


//  Id pregunta: 8613 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  En relaci&oacute;n con la administraci&oacute;n de un sistema operativo Linux, indique cu&aacute;l de los siguientes comandos NO est&aacute; destinado a realizar copias de seguridad:";
 choices[69]= new Array();
 choices[69][0] = "tar con los par&aacute;metros cvf";
 choices[69][1] = "tar con los par&aacute;metros tvf";
 choices[69][2] = "cpio en conjunci&oacute;n con el comando ls";
 choices[69][3] = "cpio en conjunci&oacute;n con el comando find";
 answers[69] = choices[69][1];
 units[69] = "53,54";
 comments[69] = "Id Pregunta: 8613. Examen TIC A2 2010 interna";


//  Id pregunta: 8630 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l de las siguientes es una regla de Codd?";
 choices[70]= new Array();
 choices[70][0] = "Regla de la no subversi&oacute;n.";
 choices[70][1] = "Regla de la no concurrencia.";
 choices[70][2] = "Regla de la restricci&oacute;n.";
 choices[70][3] = "Regla de la no replicaci&oacute;n de Informaci&oacute;n.";
 answers[70] = choices[70][0];
 units[70] = "57, 58";
 comments[70] = "Id Pregunta: 8630. Examen TIC A2 2010 interna";


//  Id pregunta: 8638 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  &iquest;Cu&aacute;l de las siguientes operaciones pertenece al lenguaje de manipulaci&oacute;n de datos en SQL?";
 choices[71]= new Array();
 choices[71][0] = "CREATE";
 choices[71][1] = "ALTER";
 choices[71][2] = "DELETE";
 choices[71][3] = "DROP";
 answers[71] = choices[71][2];
 units[71] = "57, 58";
 comments[71] = "Id Pregunta: 8638. Examen TIC A2 2010 interna";


//  Id pregunta: 8644 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l es la definici&oacute;n correcta de 3FN?";
 choices[72]= new Array();
 choices[72][0] = "Una entidad est&aacute; en 3FN si est&aacute; en 2FN y todos los atributos que forman parte de las claves candidatas (atributos principales) tienen dependencia funcional completa respecto de &eacute;stas es decir, no hay dependencias funcionales de atributos no principales respecto de una parte de las claves.";
 choices[72][1] = "Una entidad est&aacute; en 3FN si est&aacute; en 2FN y lodos los atributos que no forman parte de las claves candidatas (atributos no principales) tienen dependencia funcional completa respecto de &eacute;stas, es decir, no hay dependencias funcionales de atributos no principales respecto de una parte de las claves Cada uno de los atributos de una entidad depende de toda la clave.";
 choices[72][2] = "Una entidad est&aacute; en 3FN si est&aacute; en 2FN y todos sus atributos principales dependen directamente de la clave primaria, es decir, no hay dependencias funcionales transitivas de atributos no principales respecto de las claves.";
 choices[72][3] = "Una entidad est&aacute; en 3FN si est&aacute; en 2FN y todos sus atributos no principales dependen directamente de la clave primaria, es decir, no hay dependencias funcionales transitivas de atributos no principales respecto de las claves.";
 answers[72] = choices[72][3];
 units[72] = "57 ,58";
 comments[72] = "Id Pregunta: 8644. Examen TIC A2 2010 interna";


//  Id pregunta: 8758 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  En un Sistema Operativo, una planificaci&oacute;n de procesos se denomina &quot;preemptive&quot;:";
 choices[73]= new Array();
 choices[73][0] = "Cuando un proceso no se puede desalojar de la CPU";
 choices[73][1] = "No existe tal denominaci&oacute;n.";
 choices[73][2] = "La prevenci&oacute;n de ejecutar procesos que consuman muchos recursos por el Sistema operativo";
 choices[73][3] = "Cuando un proceso se puedo desalojar de la CPU";
 answers[73] = choices[73][3];
 units[73] = "52";
 comments[73] = "Id Pregunta: 8758. Examen TIC A2 2010 interna";


//  Id pregunta: 8952 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  El manejador de dispositivos es:";
 choices[74]= new Array();
 choices[74][0] = "Un p rograma de usuario final";
 choices[74][1] = "Hardware que controla un dispositivo";
 choices[74][2] = "Software que controla un dispositivo";
 choices[74][3] = "Todas las anteriores son ciertas";
 answers[74] = choices[74][2];
 units[74] = "53,54";
 comments[74] = "Id Pregunta: 8952. ";


//  Id pregunta: 8980 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l es la arquitectura del kernel empleado en Windows 7?";
 choices[75]= new Array();
 choices[75][0] = "Monol&iacute;tico";
 choices[75][1] = "Microkernel";
 choices[75][2] = "Nanokernel";
 choices[75][3] = "Hibrida";
 answers[75] = choices[75][3];
 units[75] = "52";
 comments[75] = "Id Pregunta: 8980. ";


//  Id pregunta: 9231 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  &iquest;Qu&eacute; es la barra y la l&iacute;nea en tecnolog&iacute;a mainframe de IBM?";
 choices[76]= new Array();
 choices[76][0] = "Espacio de direccionamiento que alcanza los 64 MB y los 2 GB respectivamente.";
 choices[76][1] = "Espacio de direccionamiento que alcanza los 2 GB y los 64 MB respectivamente";
 choices[76][2] = "Espacio de direccionamiento que alcanza los 2 GB y los 16 MB respectivamente.";
 choices[76][3] = "Ninguna es correcta.";
 answers[76] = choices[76][2];
 units[76] = "52,55";
 comments[76] = "Id Pregunta: 9231. ";


//  Id pregunta: 9234 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  &iquest;Qu&eacute; es IPL?";
 choices[77]= new Array();
 choices[77][0] = "Es el equivalente al Boot en z/OS";
 choices[77][1] = "El primer programa que se ejecuta cuando se hace un TSO logon.";
 choices[77][2] = "Carga de programa en modo batch en z/OS.";
 choices[77][3] = "Ninguna es correcta.";
 answers[77] = choices[77][0];
 units[77] = "52, 55";
 comments[77] = "Id Pregunta: 9234. ";


//  Id pregunta: 9235 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  &iquest;Qu&eacute; es DJL?";
 choices[78]= new Array();
 choices[78][0] = "Un administrador de juegos escrito en Python que permite instalar juegos en Linux.";
 choices[78][1] = "Gestor de juegos que sirve tanto para lanzar los juegos instalados como para instalar juegos desde la red.";
 choices[78][2] = "No existe";
 choices[78][3] = "A) y B) son correctas.";
 answers[78] = choices[78][3];
 units[78] = "54";
 comments[78] = "Id Pregunta: 9235. ";


//  Id pregunta: 9236 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  Antes de la serie 2.6 del kernel de linux, &iquest;qu&eacute; versiones del n&uacute;cleo existieron?";
 choices[79]= new Array();
 choices[79][0] = "Versi&oacute;n de producci&oacute;n y de desarrollo.";
 choices[79][1] = "Versi&oacute;n estable hasta el momento y versiones experimentales que se usaban para programar, comprobar y verificar nuevas caracter&iacute;sticas.";
 choices[79][2] = "La versi&oacute;n estable era el resultado final de las versiones de desarrollo o experimentales.";
 choices[79][3] = "Todas son correctas.";
 answers[79] = choices[79][3];
 units[79] = "53";
 comments[79] = "Id Pregunta: 9236. ";


//  Id pregunta: 9602 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  La comunicaci&oacute;n s&iacute;ncrona entre procesos UNIX tiene lugar mediante...";
 choices[80]= new Array();
 choices[80][0] = "Pipes";
 choices[80][1] = "Signals";
 choices[80][2] = "Events";
 choices[80][3] = "Sem&aacute;foros";
 answers[80] = choices[80][0];
 units[80] = "53";
 comments[80] = "Id Pregunta: 9602. ";


//  Id pregunta: 9611 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  &iquest;Qu&eacute; es el FSQL?";
 choices[81]= new Array();
 choices[81][0] = "Una versi&oacute;n de SQL que se usa en la ingenier&iacute;a hacia adelante.";
 choices[81][1] = "Una versi&oacute;n de SQL que se usa para l&oacute;gica difusa";
 choices[81][2] = "Una versi&oacute;n de SQL que se usa para memorias asociativas";
 choices[81][3] = "Una versi&oacute;n de SQL que se usa en sistemas distribuidos";
 answers[81] = choices[81][1];
 units[81] = "58";
 comments[81] = "Id Pregunta: 9611. NULL";


//  Id pregunta: 9618 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  &iquest;Cuantos atributos tiene un archivo en el sistema de ficheros NTFS?";
 choices[82]= new Array();
 choices[82][0] = "9";
 choices[82][1] = "11";
 choices[82][2] = "13";
 choices[82][3] = "15";
 answers[82] = choices[82][2];
 units[82] = "56";
 comments[82] = "Id Pregunta: 9618. ";


//  Id pregunta: 9625 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  En lo referente a las instalaciones por defecto de las interfaces gr&aacute;ficas de los sistemas Linux-Unix:";
 choices[83]= new Array();
 choices[83][0] = "Gnome utiliza &ldquo;Telepathy&rdquo; como librer&iacute;a para las comunicaciones y &ldquo;Plasma&rdquo; para la representaci&oacute;n gr&aacute;fica de la interfaz";
 choices[83][1] = "KDE utiliza la librer&iacute;a &ldquo;Pulse Audio&rdquo; para la gesti&oacute;n de sonido y &ldquo;GTK+&rdquo; para la representaci&oacute;n de la interfaz de usuario. ";
 choices[83][2] = "KDE utiliza la librer&iacute;a &ldquo;Phonon&rdquo; para la creaci&oacute;n de contenido multimedia y &ldquo;Goya&rdquo; para la representaci&oacute;n gr&aacute;fica de partes de la interfaz. ";
 choices[83][3] = "Gnome utiliza &ldquo;Sonnet&rdquo; como librer&iacute;a para la representaci&oacute;n de la interfaz de usuario y &ldquo;Pulse Audio&rdquo; para la gesti&oacute;n de sonido. ";
 answers[83] = choices[83][2];
 units[83] = "54";
 comments[83] = "Id Pregunta: 9625. Examen TIC A1 2013";


//  Id pregunta: 9635 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  &iquest;Qu&eacute; es IPAM en Windows 2012 Server?";
 choices[84]= new Array();
 choices[84][0] = "IP Address Management";
 choices[84][1] = "Internet Proccess Advanced Management";
 choices[84][2] = "IP Access Management";
 choices[84][3] = "Ninguna de las anteriores";
 answers[84] = choices[84][0];
 units[84] = "56";
 comments[84] = "Id Pregunta: 9635. ";


//  Id pregunta: 9750 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;Cu&aacute;l de las siguientes respuestas se corresponde con una base de datos no SQL destinada a almacenar enormes cantidades de datos?";
 choices[85]= new Array();
 choices[85][0] = "Citrix";
 choices[85][1] = "Oracle";
 choices[85][2] = "MySql Extend";
 choices[85][3] = "Cassandra";
 answers[85] = choices[85][3];
 units[85] = "58";
 comments[85] = "Id Pregunta: 9750. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9812 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l de los siguientes nombres NO se corresponde con una versi&oacute;n del sistema operativo Android?";
 choices[86]= new Array();
 choices[86][0] = "Kit Kat.";
 choices[86][1] = "Ice Cream Sandwich.";
 choices[86][2] = "Donut.";
 choices[86][3] = "Candy Marzipan.";
 answers[86] = choices[86][3];
 units[86] = "52,53,54";
 comments[86] = "Id Pregunta: 9812. Examen TIC-A2 2013-Libre";


//  Id pregunta: 10002 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  En el sistema operativo UNIX la expresi&oacute;n &ldquo;daemon&rdquo; se refiere a un proceso delsistema que";
 choices[87]= new Array();
 choices[87][0] = "siempre se ejecuta en segundo plano (background).";
 choices[87][1] = "siempre es de corta duraci&oacute;n.";
 choices[87][2] = "est&aacute; siempre ejecut&aacute;ndose.";
 choices[87][3] = "nunca se ejecuta bajo control de los subsistemas de temporarizaci&oacute;n.";
 answers[87] = choices[87][0];
 units[87] = "53";
 comments[87] = "Id Pregunta: 10002. ";


//  Id pregunta: 10012 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  En un entorno de base de datos relacional, si se puede afirmar que los valores de una clave ajena coinciden con los valores de la clave primaria a la que hace referencia o son nulos  entonces se est&aacute; cumpliendo:";
 choices[88]= new Array();
 choices[88][0] = "Regla de los nulos.";
 choices[88][1] = "Regla de integridad de la entidad.";
 choices[88][2] = "Regla de la integridad referencial.";
 choices[88][3] = "Regla de los valores ajenos.";
 answers[88] = choices[88][2];
 units[88] = "58";
 comments[88] = "Id Pregunta: 10012. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10163 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  En el modelo l&oacute;gico relacional, la cardinalidad de una relaci&oacute;n se corresponde con:";
 choices[89]= new Array();
 choices[89][0] = "N&uacute;mero de atributos de la relaci&oacute;n";
 choices[89][1] = "N&uacute;mero m&iacute;nimo de ocurrencias de una entidad que pueden participar en la relaci&oacute;n";
 choices[89][2] = "N&uacute;mero de entidades que participan en la relaci&oacute;n o asociaci&oacute;n";
 choices[89][3] = "N&uacute;mero de tuplas de la relaci&oacute;n";
 answers[89] = choices[89][3];
 units[89] = "58";
 comments[89] = "Id Pregunta: 10163. ";


//  Id pregunta: 10164 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  &iquest;En qu&eacute; consiste la regla de Independencia de Integridad establecida por Codd?";
 choices[90]= new Array();
 choices[90][0] = "Los programas de aplicaci&oacute;n y actividades del terminal permanecer&aacute;n inalterados a nivel l&oacute;gico cuando se realicen cambios sobre las tablas base que preservan la informaci&oacute;n";
 choices[90][1] = "Los limitantes de integridad han de poder ser definidos utilizando el sublenguaje de datos relacional y almacenables en el cat&aacute;logo din&aacute;mico";
 choices[90][2] = "La independencia de integridad requiere la definici&oacute;n de claves ajenas con la opci&oacute;n &quot;CASCADE&quot;, a fin que se propaguen a la clave ajena los cambios realizados sobre la clave primaria referenciada";
 choices[90][3] = "Si en una relaci&oacute;n hay una clave ajena, sus valores deben coincidir con los valores de la clave primaria a que se refiere, o deben ser completamente nulos";
 answers[90] = choices[90][1];
 units[90] = "58";
 comments[90] = "Id Pregunta: 10164. ";


//  Id pregunta: 10283 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  En Sql Server 2012 &iquest;qu&eacute; comando se utiliza para configurar una conexi&oacute;n de servidor de informes?";
 choices[91]= new Array();
 choices[91][0] = "rdlccfg";
 choices[91][1] = "tsmrpt";
 choices[91][2] = "rptsetup";
 choices[91][3] = "rsconfig";
 answers[91] = choices[91][3];
 units[91] = "58";
 comments[91] = "Id Pregunta: 10283. TIC A2, libre, examen 2013";


//  Id pregunta: 10429 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  La virtualizaci&oacute;n basada en VDI (Virtual Desktop Infrastructure) ";
 choices[92]= new Array();
 choices[92][0] = "permite ratios de consolidaci&oacute;n de 10 a 1 respecto a servidores de terminales. ";
 choices[92][1] = "est&aacute; basado en la soluci&oacute;n XenApp de Citrix.";
 choices[92][2] = "aporta aislamiento y control sobre los puestos de trabajo gestionados.";
 choices[92][3] = "no est&aacute; dise&ntilde;ado para soportar el perfil de Desarrolladores, por el control limitado del entorno.  ";
 answers[92] = choices[92][2];
 units[92] = "119";
 comments[92] = "Id Pregunta: 10429. Examen TIC A1 2013";


//  Id pregunta: 10442 AÃ±o de creación de pregunta: 2014-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l de las siguientes aplicaciones, incluida en KOffice, se emplea para generaci&oacute;n de informes? ";
 choices[93]= new Array();
 choices[93][0] = "Kexi.";
 choices[93][1] = "Kivio.";
 choices[93][2] = "Konqueror.";
 choices[93][3] = "Kugar.";
 answers[93] = choices[93][3];
 units[93] = "54";
 comments[93] = "Id Pregunta: 10442. Examen TIC A1 2013";


//  Id pregunta: 10787 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  La m&aacute;quina virtual usada por el sistema operativo Android en versiones anteriores a la 4.4, se denomina:";
 choices[94]= new Array();
 choices[94][0] = "ART.";
 choices[94][1] = "Dalvik.";
 choices[94][2] = "Java VM. ";
 choices[94][3] = "APK.";
 answers[94] = choices[94][1];
 units[94] = "52";
 comments[94] = "Id Pregunta: 10787. Examen GSI 2014";


//  Id pregunta: 11033 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Durante qu&eacute; procesos del desarrollo del Sistema de Informaci&oacute;n se realiza la modelizaci&oacute;n de los datos?";
 choices[95]= new Array();
 choices[95][0] = "Durante el an&aacute;lisis";
 choices[95][1] = "Durante el dise&ntilde;o";
 choices[95][2] = "Durante el an&aacute;lisis y durante el dise&ntilde;o";
 choices[95][3] = "No se utiliza la modelizaci&oacute;n de datos en el proceso de desarrollo del SI";
 answers[95] = choices[95][2];
 units[95] = "57";
 comments[95] = "Id Pregunta: 11033. ";


//  Id pregunta: 11036 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l no es un operador b&aacute;sico del &Aacute;lgebra Relacional?";
 choices[96]= new Array();
 choices[96][0] = "Intersecci&oacute;n";
 choices[96][1] = "Uni&oacute;n";
 choices[96][2] = "Proyecci&oacute;n";
 choices[96][3] = "Diferencia";
 answers[96] = choices[96][0];
 units[96] = "58";
 comments[96] = "Id Pregunta: 11036. ";


//  Id pregunta: 11040 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;C&oacute;mo se denomina a la restricci&oacute;n del Modelo L&oacute;gico Relacional por la que si en una relaci&oacute;n hay alguna clave ajena, sus valores deben coincidir con los valores de la clave primaria a la que hace referencia, o bien, deben ser completamente nulos?";
 choices[97]= new Array();
 choices[97][0] = "Aserci&oacute;n (ASSERTION)";
 choices[97][1] = "Verificaci&oacute;n (CHECK)";
 choices[97][2] = "Restricci&oacute;n de clave primaria";
 choices[97][3] = "Integridad referencial";
 answers[97] = choices[97][3];
 units[97] = "58";
 comments[97] = "Id Pregunta: 11040. ";


//  Id pregunta: 11135 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Qu&eacute; comando de UNIX muestra la ruta al directorio de trabajo?";
 choices[98]= new Array();
 choices[98][0] = "Ls";
 choices[98][1] = "Pwd";
 choices[98][2] = "Tree";
 choices[98][3] = "Cd /home";
 answers[98] = choices[98][1];
 units[98] = "54";
 comments[98] = "Id Pregunta: 11135. ";


//  Id pregunta: 11138 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Cu&aacute;l de los siguientes tipos de drivers interacciona con un Middleware que ser&aacute; el que convierta las peticiones JDBC en el protocolo espec&iacute;fico del SGBD?";
 choices[99]= new Array();
 choices[99][0] = "Native-Api Driver";
 choices[99][1] = "Network Protocol Driver";
 choices[99][2] = "Native Protocol Driver";
 choices[99][3] = "JDBC-OBDC Bridge";
 answers[99] = choices[99][1];
 units[99] = "58";
 comments[99] = "Id Pregunta: 11138. ";


