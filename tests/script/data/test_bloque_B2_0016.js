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

//  Id pregunta: 720 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  Indique cu&aacute;l de las siguientes definiciones es verdadera. &quot;ODBC es:";
 choices[0]= new Array();
 choices[0][0] = "Un lenguaje de programaci&oacute;n para acceder a datos en sistemas gestores de bases de datos no relacionales&quot;.";
 choices[0][1] = "Una interface de aplicaciones para acceder a datos en sistemas gestores de bases de datos tanto relacionales como no relacionales&quot;.";
 choices[0][2] = "Una aplicaci&oacute;n que permite a los usuarios almacenar, procesar y recuperar informaci&oacute;n en una base de datos&quot;.";
 choices[0][3] = "Un lenguaje de programaci&oacute;n est&aacute;ndar que controla e interact&uacute;a con un sistema de gesti&oacute;n de base de datos&quot;.";
 answers[0] = choices[0][1];
 units[0] = "58";
 comments[0] = "Id Pregunta: 720. Examen TIC MAP B 2004";


//  Id pregunta: 737 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  Si le notifican una multa de tr&aacute;fico mediante el Servicio de Notificaciones Telem&aacute;ticas Seguras (Direcci&oacute;n Electr&oacute;nica Unica):";
 choices[1]= new Array();
 choices[1][0] = "Puede rechazar recibir la notificaci&oacute;n";
 choices[1][1] = "No puede rechazar recibir la notificaci&oacute;n";
 choices[1][2] = "Le sirve de preaviso, pero debe esperar la notificaci&oacute;n oficial por correo ordinario, o la publicaci&oacute;n de la sanci&oacute;n en el Bolet&iacute;n Oficial de la Provincia";
 choices[1][3] = "Puede reenviarla a otro buz&oacute;n electr&oacute;nico de su elecci&oacute;n";
 answers[1] = choices[1][0];
 units[1] = "30";
 comments[1] = "Id Pregunta: 737. Examen TIC MAP B 2004";


//  Id pregunta: 800 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Qu&eacute; versi&oacute;n de la API JDBC de Sun incorpora un  gestor de 'pool' de conexiones con el sistema gestor de base de datos?:";
 choices[2]= new Array();
 choices[2][0] = "JDBC 1.0";
 choices[2][1] = "JDBC 1.5";
 choices[2][2] = "JDBC 1.8";
 choices[2][3] = "JDBC 2.0";
 answers[2] = choices[2][3];
 units[2] = "57";
 comments[2] = "Id Pregunta: 800. ";


//  Id pregunta: 831 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Cree que puede ser posible poner 'virus' en un disquete protegido contra escritura?:";
 choices[3]= new Array();
 choices[3][0] = "No";
 choices[3][1] = "S&iacute;, usando una t&eacute;cnica especial";
 choices[3][2] = "S&oacute;lo si se formata el disco antes";
 choices[3][3] = "S&iacute;, si el disquete ya tiene virus";
 answers[3] = choices[3][0];
 units[3] = "47";
 comments[3] = "Id Pregunta: 831. ";


//  Id pregunta: 889 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;C&uacute;al o c&uacute;ales de los siguientes sistemas de criptograf&iacute;a pueden encontrarse dentro de la criptograf&iacute;a sim&eacute;trica?:";
 choices[4]= new Array();
 choices[4][0] = "De bloques (block cipher),  de flujos (stream cipher) y de res&uacute;men (hash function)";
 choices[4][1] = "De flujos (stream cipher), de res&uacute;men (hash function) y de sigilo (stealth cipher)";
 choices[4][2] = "De bloques (block cipher),  de ocultamiento (conceal cipher) y de sellado de tiempo (time stamping cipher)";
 choices[4][3] = "Las respuestas &lsquo;b&rsquo; y &lsquo;c&rsquo; son correctas";
 answers[4] = choices[4][0];
 units[4] = "72";
 comments[4] = "Id Pregunta: 889. ";


//  Id pregunta: 915 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Qu&eacute; elemento no forma parte del Servicio X.500 de OSI?:";
 choices[5]= new Array();
 choices[5][0] = "Agente de usuario del directorio (DUA)";
 choices[5][1] = "Agentes del sistema de directorio (DSA)";
 choices[5][2] = "&Aacute;rbol de informaci&oacute;n del directorio (DIT)";
 choices[5][3] = "Sistema de almacenamiento del directorio (DMS)";
 answers[5] = choices[5][3];
 units[5] = "73";
 comments[5] = "Id Pregunta: 915. ";


//  Id pregunta: 957 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Con las siglas SCSI se identifica:";
 choices[6]= new Array();
 choices[6][0] = "Un est&aacute;ndar de facto para la interconexi&oacute;n entre distintas capas de OSI";
 choices[6][1] = "Un est&aacute;ndar para la comunicaci&oacute;n entre el ordenador y los perif&eacute;ricos a &eacute;l conectados";
 choices[6][2] = "Una arquitectura de ordenadores";
 choices[6][3] = "Una tarjeta de video";
 answers[6] = choices[6][1];
 units[6] = "47";
 comments[6] = "Id Pregunta: 957. ";


//  Id pregunta: 962 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Considerando las memoria VRAM, indique la respuesta que es falsa:";
 choices[7]= new Array();
 choices[7][0] = "Incluyen una memoria DRAM y unos registros de desplazamiento que permiten acceso en forma serie";
 choices[7][1] = "Est&aacute;n especialmente dise&ntilde;adas para construir memorias de refresco de determinados gr&aacute;ficos";
 choices[7][2] = "Es un tipo de RAM que no es din&aacute;mica";
 choices[7][3] = "Equivale a Video RAM";
 answers[7] = choices[7][2];
 units[7] = "47";
 comments[7] = "Id Pregunta: 962. ";


//  Id pregunta: 964 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Considere un sistema con un espacio l&oacute;gico de memoria de 128k p&aacute;ginas, cada una con 8k palabras de 16 bits y una memoria f&iacute;sica de 64 Mb. &iquest;Cu&aacute;ntos bits hay en la direcci&oacute;n l&oacute;gica?:";
 choices[8]= new Array();
 choices[8][0] = "32";
 choices[8][1] = "30";
 choices[8][2] = "26";
 choices[8][3] = "25";
 answers[8] = choices[8][1];
 units[8] = "52";
 comments[8] = "Id Pregunta: 964. ";


//  Id pregunta: 970 AÃ±o de creación de pregunta: 2005-01-01
 questions[9]= "10)  Cuando se obtiene un certificado electr&oacute;nico, la clave privada generada se queda en:";
 choices[9]= new Array();
 choices[9][0] = "El navegador de internet";
 choices[9][1] = "El proveedor de servicios ";
 choices[9][2] = "Un servidor de certificados";
 choices[9][3] = "La Autoridad de Certificaci&oacute;n";
 answers[9] = choices[9][0];
 units[9] = "74";
 comments[9] = "Id Pregunta: 970. NULL";


//  Id pregunta: 977 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  De las cl&aacute;usulas de Horn, no es correcto afirmar que:";
 choices[10]= new Array();
 choices[10][0] = "Son aquellas que tienen, como mucho, un literal no negado";
 choices[10][1] = "Una hip&oacute;tesis es una cl&aacute;usula de Horn con un literal no negado";
 choices[10][2] = "Una pregunta es una cl&aacute;usula de Horn con ning&uacute;n literal no negado o teorema a demostrar";
 choices[10][3] = "En las bases de datos deductivas indefinidas, todos los axiomas son cl&aacute;usulas de Horn";
 answers[10] = choices[10][3];
 units[10] = "56";
 comments[10] = "Id Pregunta: 977. ";


//  Id pregunta: 990 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Dentro del entorno IBM VTAM el rearranque autom&aacute;tico de los recursos de las redes se puede realizar con el producto:";
 choices[11]= new Array();
 choices[11][0] = "MVS";
 choices[11][1] = "NetView";
 choices[11][2] = "JES";
 choices[11][3] = "TSO";
 answers[11] = choices[11][2];
 units[11] = "49";
 comments[11] = "Id Pregunta: 990. ";


//  Id pregunta: 1002 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  El cifrado DES - EDE (Encrypt-Decrypt-Encrypt) es:";
 choices[12]= new Array();
 choices[12][0] = "Un cifrado doble con 2 claves que aumentan el tama&ntilde;o de la clave DES a 112 bits";
 choices[12][1] = "Un cifrado triple con 2 claves que aumenta el tama&ntilde;o de la clave DES a 112 bits";
 choices[12][2] = "Un cifrado triple con una clave de 56 bits";
 choices[12][3] = "No existe";
 answers[12] = choices[12][2];
 units[12] = "72";
 comments[12] = "Id Pregunta: 1002. Pregunta capciosa";


//  Id pregunta: 1006 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  El concepto de adware implica que:";
 choices[13]= new Array();
 choices[13][0] = "Normalmente no existe coste por ser un a&ntilde;adido sencillo a otro software ya existente";
 choices[13][1] = "Es un software que se vende a empresas de publicidad para que &eacute;stas puedan usarlo en sus campa&ntilde;as de lanzamiento de productos";
 choices[13][2] = "Es un parche que se puede descargar f&aacute;cilmente de la web normalmente para solucionar fallos puntuales de funcionamiento de programas de pago";
 choices[13][3] = "Es un software cuyo &uacute;nico coste de adquisici&oacute;n es 'soportar' la inclusi&oacute;n de banners y pop-ups publicitarios cada vez que se ejecute";
 answers[13] = choices[13][3];
 units[13] = "61";
 comments[13] = "Id Pregunta: 1006. ";


//  Id pregunta: 1014 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  El factor de utilizaci&oacute;n de los componentes de un sistema es:";
 choices[14]= new Array();
 choices[14][0] = "Relaci&oacute;n entre el tiempo de proceso requerido por una petici&oacute;n y el tiempo de reflexi&oacute;n del usuario";
 choices[14][1] = "Porcentaje de tiempo durante el cual est&aacute; siendo utilizado un componente del sistema inform&aacute;tico";
 choices[14][2] = "Porcentaje de tiempo durante el cual dos o m&aacute;s componentes del sistema est&aacute;n siendo utilizados simult&aacute;neamente";
 choices[14][3] = "Porcentaje de tiempo que los distintos dispositivos del sistema est&aacute;n siendo utilizados en tareas del sistema, no directamente imputables a ninguno de los trabajos en curso";
 answers[14] = choices[14][1];
 units[14] = "52";
 comments[14] = "Id Pregunta: 1014. ";


//  Id pregunta: 1024 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  El lenguaje Visual Basic, y la arquitectura DNA de Microsoft permiten arquitecturas Cliente/Servidor:";
 choices[15]= new Array();
 choices[15][0] = "De 2 niveles";
 choices[15][1] = "De N niveles";
 choices[15][2] = "Solo con clientes Microsoft";
 choices[15][3] = "B y C son ciertas";
 answers[15] = choices[15][1];
 units[15] = "50";
 comments[15] = "Id Pregunta: 1024. ";


//  Id pregunta: 1039 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  El nombre del lenguaje Ada se debe a:";
 choices[16]= new Array();
 choices[16][0] = "Advanced Development of Algorithms";
 choices[16][1] = "Automatic Development and Adaptation of software";
 choices[16][2] = "Adaptative Digital Algorithms";
 choices[16][3] = "Es un homenaje a Ada Augusta Byron, considerada la primera programadora de la historia, que contribuy&oacute; econ&oacute;micamente y laboralmente al desarrollo de las primeras m&aacute;quinas diferenciales";
 answers[16] = choices[16][3];
 units[16] = "";
 comments[16] = "Id Pregunta: 1039. ";


//  Id pregunta: 1053 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  El SGBD permite la definici&oacute;n de la Base de Datos a tres niveles de abstracci&oacute;n: l&oacute;gico, f&iacute;sico y externo En el nivel l&oacute;gico:";
 choices[17]= new Array();
 choices[17][0] = "Se da una definici&oacute;n de las estructuras de datos que constituyen la base de datos";
 choices[17][1] = "Se elige una implementaci&oacute;n de cada una de las estructuras de datos";
 choices[17][2] = "Se definen vistas parciales de la base de datos para distintos grupos de usuarios";
 choices[17][3] = "Ninguna es cierta";
 answers[17] = choices[17][0];
 units[17] = "57";
 comments[17] = "Id Pregunta: 1053. ";


//  Id pregunta: 1142 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  En un sistema de memoria virtual, cuando un proceso en ejecuci&oacute;n genera un 'fallo de p&aacute;gina':";
 choices[18]= new Array();
 choices[18][0] = "Es un error grave del sistema operativo que ocasiona el aborto del programa";
 choices[18][1] = "El sistema operativo busca en memoria secundaria (disco) la p&aacute;gina que falta y la carga en memoria";
 choices[18][2] = "El sistema operativo busca en memoria secundaria la p&aacute;gina que falta y la intenta llevar a memoria; si no hay espacio para la nueva p&aacute;gina, interrumpe la ejecuci&oacute;n del programa, dando el control a otro proceso";
 choices[18][3] = "Un proceso en ejecuci&oacute;n nunca puede generar un fallo de p&aacute;gina ya que de lo contrario todo el equipo 'caer&aacute;' produciendose una reinicializaci&oacute;n de la m&aacute;quina";
 answers[18] = choices[18][1];
 units[18] = "52";
 comments[18] = "Id Pregunta: 1142. ";


//  Id pregunta: 1185 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Indicar la respuesta incorrecta sobre las restricciones en inteligencia artificial:";
 choices[19]= new Array();
 choices[19][0] = "Si bien las reglas expresan influencias del tipo causa-efecto entre conceptos, una restricci&oacute;n es una ecuaci&oacute;n que permite expresar m&uacute;ltiples relaciones causa-efecto, estableciendo puntos de sincronismo en el comportamiento de los objetos";
 choices[19][1] = "Una restricci&oacute;n expresa una relaci&oacute;n de equilibrio entre los atributos de uno o m&aacute;s sujetos, y constituye la pieza b&aacute;sica de informaci&oacute;n para la comprensi&oacute;n y modelizaci&oacute;n del conocimiento del mundo real bajo este enfoque";
 choices[19][2] = "Hay dominios de conocimiento que formulados en restriccioness dan lugar a bases de conocimiento muy grandes debido a que el conocimiento se expresa mejor mediante reglas";
 choices[19][3] = "Todo sistema de restricciones debe constar como m&iacute;nimo de un lenguaje de especificaci&oacute;n de restricciones y un procedimiento capaz de interpretar esta especificaci&oacute;n y de evaluar sus respuestas";
 answers[19] = choices[19][2];
 units[19] = "64";
 comments[19] = "Id Pregunta: 1185. ";


//  Id pregunta: 1213 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  La compresi&oacute;n o compactaci&oacute;n de datos en los dispositivos de almacenamiento magn&eacute;tico, es una t&eacute;cnica efectiva para:";
 choices[20]= new Array();
 choices[20][0] = "Reducir la ocupaci&oacute;n de los registros en dispositivos DASD";
 choices[20][1] = "Reducir el n&uacute;mero de I-O's, mejorando la eficiencia del procesador";
 choices[20][2] = "Mejorar la eficiencia del buffer de datos";
 choices[20][3] = "Todas las anteriores respuestas son correctas";
 answers[20] = choices[20][3];
 units[20] = "48";
 comments[20] = "Id Pregunta: 1213. ";


//  Id pregunta: 1218 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  La especificaci&oacute;n XSLT define:";
 choices[21]= new Array();
 choices[21][0] = "El formato de visualizaci&oacute;n de los documentos XML";
 choices[21][1] = "El formato de ordenaci&oacute;n de etiquetas o tags de documentos XML";
 choices[21][2] = "La definici&oacute;n de datos en los documentos XML";
 choices[21][3] = "La estructura de enlace en los documentos XML";
 answers[21] = choices[21][0];
 units[21] = "69";
 comments[21] = "Id Pregunta: 1218. NULL";


//  Id pregunta: 1220 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  La estructura secuencial encadenada:";
 choices[22]= new Array();
 choices[22][0] = "Es una estructura de f&aacute;cil gesti&oacute;n";
 choices[22][1] = "La inserciones de datos se autogestionan sin variar la estructura l&oacute;gica inicial";
 choices[22][2] = "Es el elemento precursor de la estructura relacional de las bases de datos";
 choices[22][3] = "La idea de apuntadores ha sido utilizada en los sistemas jer&aacute;rquicos y en red";
 answers[22] = choices[22][3];
 units[22] = "57";
 comments[22] = "Id Pregunta: 1220. ";


//  Id pregunta: 1245 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  La teor&iacute;as matem&aacute;ticas de la l&oacute;gica y la probabilidad usada en la computaci&oacute;n desde sus inicios se deben a:";
 choices[23]= new Array();
 choices[23][0] = "Isaac Newton";
 choices[23][1] = "Charles Babbage";
 choices[23][2] = "David Hilbert";
 choices[23][3] = "George Boole";
 answers[23] = choices[23][3];
 units[23] = "46";
 comments[23] = "Id Pregunta: 1245. ";


//  Id pregunta: 1310 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Por clave ajena se entiende:";
 choices[24]= new Array();
 choices[24][0] = "Un conjunto no vacio de atributos de una relaci&oacute;n";
 choices[24][1] = "Un atributo no principal de una relaci&oacute;n que no tiene valor nulo";
 choices[24][2] = "Un descriptor de una relaci&oacute;n, cuyos valores coinciden con los valores de la clave primaria de otra relaci&oacute;n";
 choices[24][3] = "Es el atributo de una relaci&oacute;n que garantiza la integridad de la entidad";
 answers[24] = choices[24][2];
 units[24] = "58";
 comments[24] = "Id Pregunta: 1310. ";


//  Id pregunta: 1318 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Respecto al algoritmo RSA:";
 choices[25]= new Array();
 choices[25][0] = "Reduce el problema de la distribuci&oacute;n de claves respecto a los criptosistemas cl&aacute;sicos";
 choices[25][1] = "Pertenece a la categor&iacute;a de criptosistemas sim&eacute;tricos";
 choices[25][2] = "Se basa en la utilizaci&oacute;n de grandes series de n&uacute;meros primos de tama&ntilde;o peque&ntilde;o  ";
 choices[25][3] = "Se basa en la transposici&oacute;n y sustituci&oacute;n de s&iacute;mbolos a trav&eacute;s de m&uacute;ltiples iteraciones";
 answers[25] = choices[25][0];
 units[25] = "72";
 comments[25] = "Id Pregunta: 1318. ";


//  Id pregunta: 1370 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Si un ordenador tiene un tiempo de acceso a memoria de 60 nanosegundos, una longitud de palabra de 16 bits, memoria ECC y utiliza 24 bits para direccionamiento, se puede decir que la memoria m&aacute;xima que puede direccionar es de:";
 choices[26]= new Array();
 choices[26][0] = "8 Megabytes";
 choices[26][1] = "16 Megabytes";
 choices[26][2] = "32 Megabytes";
 choices[26][3] = "64 Megabytes";
 answers[26] = choices[26][2];
 units[26] = "47";
 comments[26] = "Id Pregunta: 1370. ";


//  Id pregunta: 1388 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Un productor de bases de datos es aqu&eacute;l que:";
 choices[27]= new Array();
 choices[27][0] = "&Uacute;nicamente recopila informaci&oacute;n y la pone a disposici&oacute;n de la sociedad en un soporte susceptible de tratamiento inform&aacute;tico";
 choices[27][1] = "Solo mantiene al d&iacute;a la informaci&oacute;n contenida en las bases";
 choices[27][2] = "Algunos de ellos no se limitan a recopilar la informaci&oacute;n, sino que la elaboran";
 choices[27][3] = "Son correctas las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo;";
 answers[27] = choices[27][2];
 units[27] = "57";
 comments[27] = "Id Pregunta: 1388. ";


//  Id pregunta: 1400 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Un sistema operativo b&aacute;sico se compone de:";
 choices[28]= new Array();
 choices[28][0] = "Gesti&oacute;n de E/S";
 choices[28][1] = "Gesti&oacute;n de Memoria";
 choices[28][2] = "Planificaci&oacute;n";
 choices[28][3] = "Todas son ciertas";
 answers[28] = choices[28][3];
 units[28] = "52";
 comments[28] = "Id Pregunta: 1400. ";


//  Id pregunta: 1446 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  &iquest;Cu&aacute;l de las siguientes afirmaciones no es correcta al referirnos a los dos tipos de interfaces existentes?:";
 choices[29]= new Array();
 choices[29][0] = "La utilizaci&oacute;n diaria de la interfaz basada en comandos es m&aacute;s &aacute;gil que la basada en men&uacute;, pero su aprendizaje es m&aacute;s costoso";
 choices[29][1] = "A medida que el usuario va ganando destreza la interfaz basada en men&uacute; tiende a hacerse tediosa debido al elevado n&uacute;mero de opciones y funciones que proporcionan";
 choices[29][2] = "Con la interfaz basada en men&uacute; el usuario tiene la continua sensaci&oacute;n de sentirse guiado";
 choices[29][3] = "La interfaz basada en comando es m&aacute;s intuitiva que la basada en men&uacute;";
 answers[29] = choices[29][3];
 units[29] = "47";
 comments[29] = "Id Pregunta: 1446. ";


//  Id pregunta: 1518 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  Al objeto de una base de datos ORACLE que tiene como funci&oacute;n establecer una referencia a datos almacenados en otra base de datos, se denomina:";
 choices[30]= new Array();
 choices[30][0] = "&Iacute;ndice no &uacute;nico.";
 choices[30][1] = "Vista.";
 choices[30][2] = "Database link.";
 choices[30][3] = "Clustered Cable.";
 answers[30] = choices[30][2];
 units[30] = "58";
 comments[30] = "Id Pregunta: 1518. Junta Andaluc&iacute;a";


//  Id pregunta: 1531 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  El Real Decreto 209/2003:";
 choices[31]= new Array();
 choices[31][0] = "Modifica  la denominaci&oacute;n del Consejo Superior de Inform&aacute;tica";
 choices[31][1] = "Modifica  la denominaci&oacute;n del Consejo Superior de Inform&aacute;tica y regula los registros y las notificaciones telem&aacute;ticas";
 choices[31][2] = "Regula los registros y las notificaciones telem&aacute;ticas y modifica la ley 59/2003";
 choices[31][3] = "Todas las anteriores son ciertas";
 answers[31] = choices[31][1];
 units[31] = "30";
 comments[31] = "Id Pregunta: 1531. ";


//  Id pregunta: 1559 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  &iquest;Cu&aacute;l de los siguientes algoritmos no es de criptograf&iacute;a sim&eacute;trica de flujos?";
 choices[32]= new Array();
 choices[32][0] = "WAKE";
 choices[32][1] = "RC-4 ";
 choices[32][2] = "SEAL";
 choices[32][3] = "MD5";
 answers[32] = choices[32][3];
 units[32] = "72";
 comments[32] = "Id Pregunta: 1559. ";


//  Id pregunta: 1563 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  &iquest;Cu&aacute;l de los siguientes tipos de informaci&oacute;n no est&aacute; contenida obligatoriamente en un certificado digital X.509?:";
 choices[33]= new Array();
 choices[33][0] = "La clave p&uacute;blica del titular.";
 choices[33][1] = "Datos personales de identificaci&oacute;n del titular.";
 choices[33][2] = "La URL del directorio LDAP contenedor de claves p&uacute;blicas.";
 choices[33][3] = "La firma electr&oacute;nica de la Autoridad de Certificaci&oacute;n que emiti&oacute; el certificado.";
 answers[33] = choices[33][2];
 units[33] = "73";
 comments[33] = "Id Pregunta: 1563. Junta Andaluc&iacute;a";


//  Id pregunta: 1588 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  En el modelo l&oacute;gico relacional, &iquest;qu&eacute; afirmaci&oacute;n es cierta?";
 choices[34]= new Array();
 choices[34][0] = "La clave candidata es la clave que el analista escoge entre todas las claves primarias y a las que no escoge se las denomina claves alternativas.";
 choices[34][1] = "La clave alternativa es la clave primaria pero que puede tomar valores nulos.";
 choices[34][2] = "La clave primaria tiene menos atributos que la clave candidata.";
 choices[34][3] = "La clave primaria es la clave que el analista escoge entre todas las claves candidatas y no puede adoptar bajo ninguna circunstancia el valor nulo.";
 answers[34] = choices[34][3];
 units[34] = "58";
 comments[34] = "Id Pregunta: 1588. ";


//  Id pregunta: 1593 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  En los sistemas de aplicaciones transaccionales online (OLTP), &iquest;como se define el concepto de throughput?:";
 choices[35]= new Array();
 choices[35][0] = "Mayor tiempo de respuesta por transacci&oacute;n.";
 choices[35][1] = "Cantidad de trabajo realizada en un determinado tiempo.";
 choices[35][2] = "Unidad m&iacute;nima de recursos f&iacute;sicos necesarios para ejecutar una transacci&oacute;n.";
 choices[35][3] = "N&uacute;mero de hilos (threads) de ejecuci&oacute;n paralela de transacciones.";
 answers[35] = choices[35][1];
 units[35] = "83";
 comments[35] = "Id Pregunta: 1593. Junta Andaluc&iacute;a";


//  Id pregunta: 1631 AÃ±o de creación de pregunta: 2003-01-01
 questions[36]= "37)  Un debugger (depurador) de programas :";
 choices[36]= new Array();
 choices[36][0] = "Ensambla los distintos m&oacute;dulos de SW";
 choices[36][1] = "Ayuda a los programadores a localizar errores de programaci&oacute;n";
 choices[36][2] = "Escanea los archivos ejecutables para detectar virus";
 choices[36][3] = "Permite crear un CPU virtual donde ejercer las pruebas de Sw minimizando la penalizaci&oacute;n de rendimientos en la instalaci&oacute;n principal";
 answers[36] = choices[36][1];
 units[36] = "59";
 comments[36] = "Id Pregunta: 1631. ";


//  Id pregunta: 1637 AÃ±o de creación de pregunta: 2004-01-01
 questions[37]= "38)  El software que conecta dos aplicaciones heterog&eacute;neas, para compartir recursos de proceso de datos, se conoce como:";
 choices[37]= new Array();
 choices[37][0] = "Firmware";
 choices[37][1] = "Interfaz de usuario";
 choices[37][2] = "Middleware";
 choices[37][3] = "Everyware";
 answers[37] = choices[37][2];
 units[37] = "50";
 comments[37] = "Id Pregunta: 1637. ";


//  Id pregunta: 1683 AÃ±o de creación de pregunta: 2004-01-01
 questions[38]= "39)  En cuanto a los procedimientos de inferencia de las estructuras de representaci&oacute;n del conocimiento, se&ntilde;ale la afirmaci&oacute;n correcta";
 choices[38]= new Array();
 choices[38][0] = "En las redes semanticas los procedimientos de inferencia son la herencia y el equiparaci&oacute;n";
 choices[38][1] = "En los marcos los procedimientos de inferencia son la deducci&oacute;n de valores de slots, la actualizaci&oacute;n de valores de slots, y la emparejamiento";
 choices[38][2] = "En las reglas los procedimientos de inferencia son el encadenamiento hacia adelante, y el encadenamiento hacia atr&aacute;s";
 choices[38][3] = "Todas son correctas";
 answers[38] = choices[38][3];
 units[38] = "64";
 comments[38] = "Id Pregunta: 1683. NULL";


//  Id pregunta: 1686 AÃ±o de creación de pregunta: 2004-01-01
 questions[39]= "40)  &iquest;Con que otro nombre se conoce tambi&eacute;n a la informaci&oacute;n georreferenciada?";
 choices[39]= new Array();
 choices[39][0] = "Informaci&oacute;n espacial.";
 choices[39][1] = "Informaci&oacute;n geogr&aacute;fica.";
 choices[39][2] = "Geodatos.";
 choices[39][3] = "Todas las anteriores.";
 answers[39] = choices[39][3];
 units[39] = "67";
 comments[39] = "Id Pregunta: 1686. NULL";


//  Id pregunta: 1744 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  Indique cu&aacute;l de las siguientes afirmaciones es falsa en relaci&oacute;n al software libre";
 choices[40]= new Array();
 choices[40][0] = "El kernel de linux es estable a pesar de sus continuas modificaciones";
 choices[40][1] = "El software libre es apto para usuarios no t&eacute;cnicos";
 choices[40][2] = "El SL puede funcionar con software propietario (interoperable)";
 choices[40][3] = "El software libre carece en la actualidad de un soporte adecuado";
 answers[40] = choices[40][3];
 units[40] = "61";
 comments[40] = "Id Pregunta: 1744. ";


//  Id pregunta: 1765 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  &iquest;C&oacute;mo se denominan en Java EE los componentes de negocio en el entorno servidor?";
 choices[41]= new Array();
 choices[41][0] = "Applet.";
 choices[41][1] = "EJB.";
 choices[41][2] = "DCOM+.";
 choices[41][3] = "JSP.";
 answers[41] = choices[41][1];
 units[41] = "60.116";
 comments[41] = "Id Pregunta: 1765. JCED - Preparatic XVII";


//  Id pregunta: 1784 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  Indique aquel conjunto de programas que no guardan relaci&oacute;n en cuanto a su funcionalidad";
 choices[42]= new Array();
 choices[42][0] = "Gnumeric, kspread";
 choices[42][1] = "Firefox, Epiphany";
 choices[42][2] = "Thunderbird, Konqueror";
 choices[42][3] = "Dia, kivio";
 answers[42] = choices[42][2];
 units[42] = "61,62";
 comments[42] = "Id Pregunta: 1784. ";


//  Id pregunta: 1810 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  En los GIS, el sistema UTM:";
 choices[43]= new Array();
 choices[43][0] = "Asocia cada elemento a una clave de zona.";
 choices[43][1] = "Proyecta el globo terr&aacute;queo sobre un cilindro.";
 choices[43][2] = "Almacena la informaci&oacute;n de los pol&iacute;gonos en base a un solo punto.";
 choices[43][3] = "Es un est&aacute;ndar universal para intercambio de datos geogr&aacute;ficos.";
 answers[43] = choices[43][1];
 units[43] = "67";
 comments[43] = "Id Pregunta: 1810. NULL";


//  Id pregunta: 1833 AÃ±o de creación de pregunta: 2006-01-01
 questions[44]= "45)  Se&ntilde;alar la respuesta falsa";
 choices[44]= new Array();
 choices[44][0] = "HTML es un subconjunto de SGML";
 choices[44][1] = "XHTML es un subconjunto de XML";
 choices[44][2] = "XML es una ampliaci&oacute;n de HTML";
 choices[44][3] = "RTF es un subconjunto de SGML";
 answers[44] = choices[44][2];
 units[44] = "69";
 comments[44] = "Id Pregunta: 1833. NULL";


//  Id pregunta: 1873 AÃ±o de creación de pregunta: 2006-01-01
 questions[45]= "46)  Indicar la afirmaci&oacute;n falsa en relaci&oacute;n a las notificaciones telem&aacute;ticas cuya regulaci&oacute;n se introduce en el RD 209/2003.";
 choices[45]= new Array();
 choices[45][0] = "La notificaci&oacute;n se practicar&aacute; s&oacute;lo para los procedimientos expresamente se&ntilde;alados por el interesado";
 choices[45][1] = "El interesado deber&aacute; contar con un certificado digital X.509v3 emitido a su nombre o de la empresa que represente";
 choices[45][2] = "Cuando existiendo constancia de la recepci&oacute;n de la notificaci&oacute;n en la direcci&oacute;n electr&oacute;nica, transcurrieran diez d&iacute;as naturales sin que acceda a su contenido, se entender&aacute; que la notificaci&oacute;n ha sido rechazada.";
 choices[45][3] = "En cualquier caso, la direcci&oacute;n electr&oacute;nica  &uacute;nica tendr&aacute; car&aacute;cter indefinido.";
 answers[45] = choices[45][3];
 units[45] = "30";
 comments[45] = "Id Pregunta: 1873. ";


//  Id pregunta: 1915 AÃ±o de creación de pregunta: 2006-01-01
 questions[46]= "47)  En el entorno del lenguaje Java, AWT se refiere a:";
 choices[46]= new Array();
 choices[46][0] = "Una extensi&oacute;n de Swing";
 choices[46][1] = "Una biblioteca de clases Java para el desarrollo de interfaces gr&aacute;ficas de usuario";
 choices[46][2] = "Un conjunto de clases gr&aacute;ficas bajo licencia de IBM/Taligent";
 choices[46][3] = "Una familia de fuentes de caracteres";
 answers[46] = choices[46][1];
 units[46] = "60";
 comments[46] = "Id Pregunta: 1915. NULL";


//  Id pregunta: 4368 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  Indique cu&aacute;l de las siguientes no es una caracter&iacute;stica de los sistemas cliente-servidor:";
 choices[47]= new Array();
 choices[47][0] = "Compartici&oacute;n de recursos.";
 choices[47][1] = "Existe un &uacute;nico sistema de almacenamiento compartido, donde reside toda la informaci&oacute;n importante del sistema.";
 choices[47][2] = "Concurrencia.";
 choices[47][3] = "Interoperabilidad.";
 answers[47] = choices[47][1];
 units[47] = "50";
 comments[47] = "Id Pregunta: 4368. ";


//  Id pregunta: 4600 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  Respecto al protocolo de seguridad IKE, cual de las siguientes respuestas es falsa:";
 choices[48]= new Array();
 choices[48][0] = "recrea las claves cada cierto tiempo";
 choices[48][1] = "permite utilizar certificados digitales";
 choices[48][2] = "se necesita una asociaci&oacute;n de seguridad IKE Para cada conexi&oacute;n IPSEC.";
 choices[48][3] = "esta basado en Oakley.";
 answers[48] = choices[48][2];
 units[48] = "74";
 comments[48] = "Id Pregunta: 4600. NULL";


//  Id pregunta: 4617 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  &iquest;Cual de las siguientes opciones es la correcta?";
 choices[49]= new Array();
 choices[49][0] = "un dispositivo NAS comparte bloques mientras que en una SAN se comparten ficheros.";
 choices[49][1] = "en el modelo NAS se utiliza una infraestructura de red de datos, mientras que en una SAN se crea una infraestructura de red nueva dedicada y orientada a compartir dispositivos de almacenamiento.";
 choices[49][2] = "una SAN puede ser compartida por varios servidores o estar dedicada a un &uacute;nico servidor, puede ser local pero no extenderse por &aacute;reas geogr&aacute;ficas mas amplias.";
 choices[49][3] = "en el modelo SAN se utiliza una infraestructura de red de datos, mientras que en una NAS se crea una infraestructura de red nueva dedicada y orientada a compartir dispositivos de almacenamiento.";
 answers[49] = choices[49][1];
 units[49] = "48";
 comments[49] = "Id Pregunta: 4617. ";


//  Id pregunta: 4643 AÃ±o de creación de pregunta: 2007-01-01
 questions[50]= "51)  Los cursores de referencia de Pl/SQL";
 choices[50]= new Array();
 choices[50][0] = "son m&aacute;s r&aacute;pidos que los cursores est&aacute;ndar (o normales).";
 choices[50][1] = "pueden aceptar la asociaci&oacute;n de variables";
 choices[50][2] = "pueden usarse como cursores impl&iacute;citos en bucles";
 choices[50][3] = "pueden aceptar par&aacute;metros";
 answers[50] = choices[50][1];
 units[50] = "";
 comments[50] = "Id Pregunta: 4643. ";


//  Id pregunta: 4723 AÃ±o de creación de pregunta: 2007-01-01
 questions[51]= "52)  En el directorio activo de Microsoft la definici&oacute;n de todas las definiciones de clases de todos los objetos yatributos del directorio activo se encuentra en el:";
 choices[51]= new Array();
 choices[51][0] = "Schema Naming Context";
 choices[51][1] = " Active Directory Schema MMC";
 choices[51][2] = "Configuration Naming Context";
 choices[51][3] = "Domain Naming Context";
 answers[51] = choices[51][0];
 units[51] = "59,115";
 comments[51] = "Id Pregunta: 4723. Examen 2006 JCYL";


//  Id pregunta: 4957 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  Seg&uacute;n la metodolog&iacute;a Magerit versi&oacute;n 2, el riesgo remanente en el sistema tras la implantaci&oacute;n de lassalvaguardas determinadas en el plan de seguridad de la informaci&oacute;n se denomina:";
 choices[52]= new Array();
 choices[52][0] = "Riesgo retenido.";
 choices[52][1] = "Riesgo acumulado.";
 choices[52][2] = "Riesgo residual.";
 choices[52][3] = "Riesgo supervisado.";
 answers[52] = choices[52][2];
 units[52] = "33";
 comments[52] = "Id Pregunta: 4957. Examen TIC B 2007";


//  Id pregunta: 4988 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  Indique cu&aacute;l de las siguientes NO es una caracter&iacute;stica de los Almacenes de Datos (Datawarehouses):";
 choices[53]= new Array();
 choices[53][0] = "Est&aacute;n orientados al an&aacute;lisis de informaci&oacute;n y la toma de decisiones.";
 choices[53][1] = "Para facilitar el mantenimiento deben utilizar el mismo esquema que exista para la informaci&oacute;n operativa de la empresa.";
 choices[53][2] = "La informaci&oacute;n var&iacute;a en el tiempo.";
 choices[53][3] = "Son colecciones de datos.";
 answers[53] = choices[53][1];
 units[53] = "68";
 comments[53] = "Id Pregunta: 4988. Examen TIC A 2007";


//  Id pregunta: 5133 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  Seg&uacute;n la LSSI, cu&aacute;les son las p&aacute;ginas web que deben cumplir criterios de accesibilidad:";
 choices[54]= new Array();
 choices[54][0] = "Todas, independientemente de su finalidad.";
 choices[54][1] = "Las de la Administraci&oacute;n P&uacute;blica a partir del 31 de Diciembre de 2004";
 choices[54][2] = "Las de la Administraci&oacute;n P&uacute;blica a partir del 31 de Diciembre de 2008";
 choices[54][3] = "S&oacute;lo las comerciales";
 answers[54] = choices[54][2];
 units[54] = "30";
 comments[54] = "Id Pregunta: 5133. Examen TIC A Castilla La Mancha 2007 (Ley 34/2002, disposici&oacute;n adicional quinta, modificado por Ley 56/2007, art&iacute;culo 4)";


//  Id pregunta: 5464 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  En el directorio activo de Microsoft la definici&oacute;n de todas las definiciones de clases de todos los objetos y atributos del directorio activo se encuentra en el";
 choices[55]= new Array();
 choices[55][0] = "Schema Naming Context";
 choices[55][1] = "Active Directory Schema MMC";
 choices[55][2] = "Configuration Naming Context";
 choices[55][3] = "Domain Naming Context";
 answers[55] = choices[55][0];
 units[55] = "73";
 comments[55] = "Id Pregunta: 5464. Castilla y Le&oacute;n";


//  Id pregunta: 5632 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  Una soluci&oacute;n CISC no se caracteriza por:";
 choices[56]= new Array();
 choices[56][0] = "Muchos modos de direccionamiento";
 choices[56][1] = "Unidad de control cableada";
 choices[56][2] = "N&uacute;mero de instrucciones muy elevado";
 choices[56][3] = "Varios formatos de instrucci&oacute;n (longitud variable)";
 answers[56] = choices[56][1];
 units[56] = "45";
 comments[56] = "Id Pregunta: 5632. ";


//  Id pregunta: 5744 AÃ±o de creación de pregunta: 2009-01-01
 questions[57]= "58)  En criptograf&iacute;a sim&eacute;trica, &iquest;qu&eacute; es una sustituci&oacute;n monogr&aacute;mica?";
 choices[57]= new Array();
 choices[57][0] = "La que cifra los caracteres de uno en uno";
 choices[57][1] = "La que sustituye cada letra por varias letras";
 choices[57][2] = "Aquella en que cada letra es sustituidad siempre por la misma dentro de un mismo mensaje";
 choices[57][3] = "La que sustituye las letras en grupos de longitud variable, dependiendo de su posici&oacute;n dentro del mensaje";
 answers[57] = choices[57][0];
 units[57] = "72";
 comments[57] = "Id Pregunta: 5744. ";


//  Id pregunta: 5750 AÃ±o de creación de pregunta: 2009-01-01
 questions[58]= "59)  Entre SHA-1 y MD5 &iquest;cu&aacute;l se considera m&aacute;s resistente a colisiones?";
 choices[58]= new Array();
 choices[58][0] = "El SHA-1 porque produce un resumen m&aacute;s largo";
 choices[58][1] = "El SHA-1 porque produce un resumen m&aacute;s corto";
 choices[58][2] = "El MD5 porque produce un resumen m&aacute;s largo";
 choices[58][3] = "El MD5 porque produce un resumen m&aacute;s corto";
 answers[58] = choices[58][0];
 units[58] = "72";
 comments[58] = "Id Pregunta: 5750. ";


//  Id pregunta: 5784 AÃ±o de creación de pregunta: 2009-01-01
 questions[59]= "60)  En el framework .NET, &iquest;qu&eacute; c&oacute;digo se genera como salida del compilador just in time?";
 choices[59]= new Array();
 choices[59][0] = "Bytecode";
 choices[59][1] = "IL (intemediate language)";
 choices[59][2] = "C&oacute;digo m&aacute;quina";
 choices[59][3] = "C&oacute;digo ensamblador";
 answers[59] = choices[59][2];
 units[59] = "59";
 comments[59] = "Id Pregunta: 5784. MAP 2008 A2";


//  Id pregunta: 6327 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  El operador de agregaci&oacute;n AVG(nombre_atributo) sirve para:";
 choices[60]= new Array();
 choices[60][0] = "Calcular la media de cualquier atributo.";
 choices[60][1] = "Calcular la media de un atributo num&eacute;rico.";
 choices[60][2] = "Calcular la suma de los valores de un atributo.";
 choices[60][3] = "Contar el n&uacute;mero de ocurrencias de un atributo.";
 answers[60] = choices[60][1];
 units[60] = "58";
 comments[60] = "Id Pregunta: 6327. ";


//  Id pregunta: 6428 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  Jboss es un servidor de aplicaciones desarrollado por:";
 choices[61]= new Array();
 choices[61][0] = "Red Hat";
 choices[61][1] = "Canonical";
 choices[61][2] = "Apache";
 choices[61][3] = "GNU";
 answers[61] = choices[61][0];
 units[61] = "62";
 comments[61] = "Id Pregunta: 6428. NULL";


//  Id pregunta: 6516 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  El c&oacute;digo intermedio que se ejecuta en una m&aacute;quina virtual java (JVM) se denomina:";
 choices[62]= new Array();
 choices[62][0] = "bytecode";
 choices[62][1] = "class";
 choices[62][2] = "jar";
 choices[62][3] = "applet";
 answers[62] = choices[62][0];
 units[62] = "60";
 comments[62] = "Id Pregunta: 6516. NULL";


//  Id pregunta: 6517 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  Se&ntilde;ale que afirmaci&oacute;n es FALSA en relaci&oacute;n a los archivos jar en java:";
 choices[63]= new Array();
 choices[63][0] = "El algoritmo de compresi&oacute;n que utilizan es LZW.";
 choices[63][1] = "Son independientes de la plataforma y cualquier JVM los interpreta.";
 choices[63][2] = "Todos los ficheros que contienen, tienen la extensi&oacute;n class.";
 choices[63][3] = "Pueden incluir un subdirectorio de metainformaci&oacute;n llamado META-INF.";
 answers[63] = choices[63][2];
 units[63] = "60";
 comments[63] = "Id Pregunta: 6517. NULL";


//  Id pregunta: 6583 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  Entre los apartados m&iacute;nimos que debe tener un documento de seguridad est&aacute;n";
 choices[64]= new Array();
 choices[64][0] = "Identificaci&oacute;n del responsable de seguridad";
 choices[64][1] = "Control peri&oacute;dico del cumplimiento del documento";
 choices[64][2] = "Funciones y obligaciones del personal";
 choices[64][3] = "Todas las respuestas anteriores son correctas";
 answers[64] = choices[64][2];
 units[64] = "29";
 comments[64] = "Id Pregunta: 6583. NULL";


//  Id pregunta: 6598 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  El documento de seguridad de obligado cumplimiento para el personal con acceso a los ficheros automatizados y no automatizados de car&aacute;cter personal y a los sistemas de informaci&oacute;n, debo incluir:";
 choices[65]= new Array();
 choices[65][0] = "&Aacute;mbito de aplicaci&oacute;n del documento con especificaci&oacute;n detallada de los recursos protegidos";
 choices[65][1] = "Estructura de los ficheros con datos de car&aacute;cter personal y descripci&oacute;n de los sistemas de informaci&oacute;n que los tratan";
 choices[65][2] = "Procedimiento de notificaci&oacute;n, gesti&oacute;n y respuesta ante incidencias";
 choices[65][3] = "Todas las respuestas anteriores son correctas";
 answers[65] = choices[65][3];
 units[65] = "75";
 comments[65] = "Id Pregunta: 6598. NULL";


//  Id pregunta: 7175 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  La entidad que identifica de forma inequ&iacute;voca al solicitante de un certificado electr&oacute;nico  es la:";
 choices[66]= new Array();
 choices[66][0] = "Autoridad de Registro";
 choices[66][1] = "Autoridad de Certificaci&oacute;n";
 choices[66][2] = "Autoridad de Revocaci&oacute;n";
 choices[66][3] = "Autoridad de Usurpaci&oacute;n";
 answers[66] = choices[66][0];
 units[66] = "73.74";
 comments[66] = "Id Pregunta: 7175. Examen TIC B 2009";


//  Id pregunta: 7176 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l es el est&aacute;ndar de la tarjeta f&iacute;sica del DNI electr&oacute;nico?";
 choices[67]= new Array();
 choices[67][0] = "ISO-7816-1";
 choices[67][1] = "PCKS#11";
 choices[67][2] = "ISO-17789";
 choices[67][3] = "ISO-7815-1";
 answers[67] = choices[67][0];
 units[67] = "74";
 comments[67] = "Id Pregunta: 7176. Examen TIC B 2009. Cumple est&aacute;ndar 7816-1. Soporta est&aacute;ndar PKCS#11";


//  Id pregunta: 7179 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  Revocar un certificado electr&oacute;nico significa:";
 choices[68]= new Array();
 choices[68][0] = "Extender su validez m&aacute;s all&aacute; del tiempo l&iacute;mite inicialmente establecido";
 choices[68][1] = "Anular su validez antes de la fecha de caducidad que consta en el mismo";
 choices[68][2] = "Agotar su vida &uacute;til al haberse llegado al l&iacute;mite de vigencia del mismo";
 choices[68][3] = "Desacoplar un certificado de la tarjeta criptogr&aacute;fica en la que reside";
 answers[68] = choices[68][1];
 units[68] = "74";
 comments[68] = "Id Pregunta: 7179. Examen TIC B 2009";


//  Id pregunta: 7344 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  El grupo de est&aacute;ndares de criptograf&iacute;a de clave p&uacute;blica, PKCS (Public Key Cryptography Standars), son publicados por:";
 choices[69]= new Array();
 choices[69][0] = "IEEE";
 choices[69][1] = "IETF";
 choices[69][2] = "RSA";
 choices[69][3] = "DES";
 answers[69] = choices[69][2];
 units[69] = "72";
 comments[69] = "Id Pregunta: 7344. NULL";


//  Id pregunta: 8165 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l es la vigencia temporal de los certificados electr&oacute;nicos contenidos en el DNIe?:";
 choices[70]= new Array();
 choices[70][0] = "Ilimitada.";
 choices[70][1] = "No podr&aacute; ser superior a 5 a&ntilde;os.";
 choices[70][2] = "30 meses.";
 choices[70][3] = "El certificado de autenticidad 24 meses y el de firma 18.";
 answers[70] = choices[70][1];
 units[70] = "74";
 comments[70] = "Id Pregunta: 8165. Examen TIC A1 2010. RD 414/2015 que modifica el RD 1553/2005 de expedici&oacute;n del DNI.";


//  Id pregunta: 8173 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  En los sistemas MIMD:";
 choices[71]= new Array();
 choices[71][0] = "Todos los datos est&aacute;n accesibles para todos los procesadores.";
 choices[71][1] = "No todas las instrucciones est&aacute;n disponibles para todos los procesadores.";
 choices[71][2] = "Emplean varios buses de altas prestaciones para transmitir instrucciones y datos simult&aacute;neamente.";
 choices[71][3] = "Pueden trabajar con memoria compartida o con memoria distribuida.";
 answers[71] = choices[71][3];
 units[71] = "45";
 comments[71] = "Id Pregunta: 8173. Examen TIC A1 2010";


//  Id pregunta: 8549 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  En el contexto de la virtualizaci&oacute;n, &iquest;qu&eacute; es el hypervisor?";
 choices[72]= new Array();
 choices[72][0] = "Un m&oacute;dulo en el sistema operativo hu&eacute;sped que monitoriza el uso de recursosdel mismo.";
 choices[72][1] = "La extensi&oacute;n del gestor de procesos del sistema operativo anfitri&oacute;n que permitecompartir memoria a los procesos de distintos sistemas operativos hu&eacute;spedes.";
 choices[72][2] = "Es la plataforma que permite ejecutar concurrentemente varios sistemasoperativos en una m&aacute;quina.";
 choices[72][3] = "Un m&oacute;dulo en el sistema operativo anfitri&oacute;n que monitoriza el uso de recursosdel mismo.";
 answers[72] = choices[72][2];
 units[72] = "119";
 comments[72] = "Id Pregunta: 8549. Analista Ayto. Madrid 2010";


//  Id pregunta: 8604 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes utilidades permite realizar miner&iacute;a de datos?";
 choices[73]= new Array();
 choices[73][0] = "JDataMiner.";
 choices[73][1] = "Cubos OLAP de Excel.";
 choices[73][2] = "VNC.";
 choices[73][3] = "Extract to Learnt by SQLServer.";
 answers[73] = choices[73][1];
 units[73] = "68";
 comments[73] = "Id Pregunta: 8604. Examen TIC A2 2010 interna";


//  Id pregunta: 8755 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  En relaci&oacute;n con la tecnolog&iacute;a &quot;grid computing&quot;, se&ntilde;ale la respuesta FALSA:";
 choices[74]= new Array();
 choices[74][0] = "Los nodos no tienen que estar dedicados.";
 choices[74][1] = "Son sistemas homog&eacute;neos (todos los nodos deben ser id&eacute;nticos).";
 choices[74][2] = "Se consigue reducci&oacute;n de costes, no es necesaria disponer de grandes y costosos servidores.";
 choices[74][3] = "La escalabilidad parametrizable es una caracter&iacute;stica muy Importante de esta arquitectura";
 answers[74] = choices[74][1];
 units[74] = "45";
 comments[74] = "Id Pregunta: 8755. Examen TIC A2 2010 interna";


//  Id pregunta: 8777 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  La solicitud de certificaci&oacute;n de una clave p&uacute;blica remitida a la autoridad de certificaci&oacute;n correspondiente deber&aacute; ser generada en formato:";
 choices[75]= new Array();
 choices[75][0] = "PKCS#10";
 choices[75][1] = "PKCS#12";
 choices[75][2] = "X.500";
 choices[75][3] = "X.509";
 answers[75] = choices[75][0];
 units[75] = "74";
 comments[75] = "Id Pregunta: 8777. Examen UPM A2 2011";


//  Id pregunta: 8792 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  El listado que resulta de ejecutar en un sistema GNU/Linux el comando &quot;cat /etc/passwd | cut -d: -f3,7&quot; contendr&aacute; los campos:";
 choices[76]= new Array();
 choices[76][0] = "Nombre de usuario y shell";
 choices[76][1] = "Contrase&ntilde;a de usuario y home";
 choices[76][2] = "uid y shell";
 choices[76][3] = "gid y home";
 answers[76] = choices[76][2];
 units[76] = "53, 54";
 comments[76] = "Id Pregunta: 8792. Examen UPM A2 2011";


//  Id pregunta: 8793 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l debe ser la parte local del elemento ra&iacute;z de un documento XHTML 2.0 de conformidad estricta?";
 choices[77]= new Array();
 choices[77][0] = "La parte local del elemento ra&iacute;z del documento debe ser &quot;html&quot;.";
 choices[77][1] = "La parte local del elemento ra&iacute;z del documento debe ser &quot;xhtml&quot;. ";
 choices[77][2] = "La parte local del elemento ra&iacute;z del documento debe ser &quot;xml&quot;. ";
 choices[77][3] = "No puede existir una declaraci&oacute;n DOCTYPE.";
 answers[77] = choices[77][0];
 units[77] = "69";
 comments[77] = "Id Pregunta: 8793. Examen UPM A2 2011";


//  Id pregunta: 8805 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  En el contexto de Almac&eacute;n de datos (Data Warehouse) la creaci&oacute;n de subconjuntos de la informaci&oacute;n contenida en el Data Warehouse central o maestro, se identifica con...";
 choices[78]= new Array();
 choices[78][0] = "Data Marts.";
 choices[78][1] = "Metadata.";
 choices[78][2] = "Middleware.";
 choices[78][3] = "Cubos OLAP.";
 answers[78] = choices[78][0];
 units[78] = "68";
 comments[78] = "Id Pregunta: 8805. Examen UPM A2 2011";


//  Id pregunta: 9098 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  El lenguaje de expresi&oacute;n de derechos REL se basa en contenedores de grants. Indica cual de los siguientes elementos no forma parte de un grant.";
 choices[79]= new Array();
 choices[79][0] = "Principal.";
 choices[79][1] = "Right.";
 choices[79][2] = "Resource.";
 choices[79][3] = "Constraints.";
 answers[79] = choices[79][3];
 units[79] = "37";
 comments[79] = "Id Pregunta: 9098. ";


//  Id pregunta: 9100 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  De los siguientes elementos, &iquest; cu&aacute;les no est&aacute;n definidos por el lenguaje ODRL?";
 choices[80]= new Array();
 choices[80][0] = "Assets.";
 choices[80][1] = "Rights.";
 choices[80][2] = "Resources.";
 choices[80][3] = "Parties.";
 answers[80] = choices[80][2];
 units[80] = "37";
 comments[80] = "Id Pregunta: 9100. ";


//  Id pregunta: 9149 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  &iquest;C&oacute;mo se clasifican los m&eacute;todos de grabaci&oacute;n en cinta magn&eacute;tica?";
 choices[81]= new Array();
 choices[81][0] = "Lineal, circular y transversal";
 choices[81][1] = "Circular, transversal y Helical";
 choices[81][2] = "Lineal, Transversal, Helical";
 choices[81][3] = "Trasnversal y Helical";
 answers[81] = choices[81][2];
 units[81] = "47";
 comments[81] = "Id Pregunta: 9149. ";


//  Id pregunta: 9222 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  Identificar que protocolo no est&aacute; dise&ntilde;ado especificamente para la extensi&oacute;n de las SAN sobre protocolo IP";
 choices[82]= new Array();
 choices[82][0] = "iFTP";
 choices[82][1] = "iSCSCI";
 choices[82][2] = "FCIP";
 choices[82][3] = "iFCP";
 answers[82] = choices[82][0];
 units[82] = "48";
 comments[82] = "Id Pregunta: 9222. Examen TIC-A1 2011";


//  Id pregunta: 9227 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  &iquest;C&oacute;mo es por lo general el paso de mensajes mediante la primitiva send-receive?";
 choices[83]= new Array();
 choices[83][0] = "S&iacute;ncrona";
 choices[83][1] = "As&iacute;ncrona";
 choices[83][2] = "Se realiza una llamada desde un cliente a una funci&oacute;n o procedimiento de un servidor.";
 choices[83][3] = "Se instancia un objeto del servidor.";
 answers[83] = choices[83][1];
 units[83] = "50";
 comments[83] = "Id Pregunta: 9227. ";


//  Id pregunta: 9258 AÃ±o de creación de pregunta: 2013-01-01
 questions[84]= "85)  &iquest;Qu&eacute; requisitos m&iacute;nimos de hardware tiene Windows 8?";
 choices[84]= new Array();
 choices[84][0] = "2 GB de RAM para versi&oacute;n de 64 bits y 1 GB para versi&oacute;n de 32 bits.";
 choices[84][1] = "1 GB para versi&oacute;n de 64 bits y 2 para versi&oacute;n de 32 bits.";
 choices[84][2] = "16 GB de espacio libre para versi&oacute;n de 64 bits.";
 choices[84][3] = "Ninguna es correcta.";
 answers[84] = choices[84][0];
 units[84] = "56";
 comments[84] = "Id Pregunta: 9258. ";


//  Id pregunta: 9263 AÃ±o de creación de pregunta: 2013-01-01
 questions[85]= "86)  Indicad cu&aacute;l de las siguientes versiones NO se corresponde con una distribuci&oacute;n de Linux:";
 choices[85]= new Array();
 choices[85][0] = "Kubuntu.";
 choices[85][1] = "Red Hat";
 choices[85][2] = "Slackware.";
 choices[85][3] = "IRIX.";
 answers[85] = choices[85][3];
 units[85] = "53";
 comments[85] = "Id Pregunta: 9263. Examen TICA2-2011";


//  Id pregunta: 9690 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Respecto a las herramientas de explotaci&oacute;n:";
 choices[86]= new Array();
 choices[86][0] = "'Query and reporting' sirve para la elaboraci&oacute;n de informes y listados a partir de la informaci&oacute;n de los almacenes de datos y los datamart.";
 choices[86][1] = "El cuadro de mando anal&iacute;tico contiene informaci&oacute;n de toda la organizaci&oacute;n.";
 choices[86][2] = "OLAP no es una herramienta de explotaci&oacute;n.";
 choices[86][3] = "A es falsa.";
 answers[86] = choices[86][0];
 units[86] = "68";
 comments[86] = "Id Pregunta: 9690. ";


//  Id pregunta: 9813 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  La t&eacute;cnica que permite solapar instrucciones mediante la divisi&oacute;n de su ejecuci&oacute;n en etapas se denomina:";
 choices[87]= new Array();
 choices[87][0] = "Parametrizaci&oacute;n.";
 choices[87][1] = "Segmentaci&oacute;n.";
 choices[87][2] = "Multiplexaci&oacute;n.";
 choices[87][3] = "Paginaci&oacute;n.";
 answers[87] = choices[87][1];
 units[87] = "52";
 comments[87] = "Id Pregunta: 9813. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9970 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  En el &aacute;mbito de SAP ERP, los infotipos son:";
 choices[88]= new Array();
 choices[88][0] = "Objetos de C&aacute;lculo de n&oacute;mina y de Gesti&oacute;n de personal utilizados para distinguir entre importes monetarios.";
 choices[88][1] = "Unidades de tiempo que se utilizan de modos diferentes para calcular la remuneraci&oacute;n del empleado.";
 choices[88][2] = "Unidades de informaci&oacute;n en el sistema de Gesti&oacute;n de personal.";
 choices[88][3] = "T&eacute;cnicas provistas por SAP para el ingreso masivo de informaci&oacute;n";
 answers[88] = choices[88][2];
 units[88] = "65";
 comments[88] = "Id Pregunta: 9970. Examen Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n, Servicio sanitario Extremadura, 2014";


//  Id pregunta: 9989 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l de los siguientes no es un sistema de gesti&oacute;n de conocimiento con licencia de software libre?";
 choices[89]= new Array();
 choices[89][0] = "ATutor";
 choices[89][1] = "Claroline";
 choices[89][2] = "Joomla";
 choices[89][3] = "Moodle";
 answers[89] = choices[89][2];
 units[89] = "66";
 comments[89] = "Id Pregunta: 9989. ";


//  Id pregunta: 10024 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  Se&ntilde;ale la afirmaci&oacute;n CORRECTA con respecto a un bean de sesi&oacute;n en JavaEE 7:";
 choices[90]= new Array();
 choices[90][0] = "Una aplicaci&oacute;n requerir&aacute; normalmente menos beans de sesi&oacute;n stateless que stateful para respaldar al mismo n&uacute;mero de clientes.";
 choices[90][1] = "Los stateful permiten compartir estado entre varios clientes.";
 choices[90][2] = "Un bean de sesi&oacute;n singleton es instanciado varias veces, seg&uacute;n necesidad, pero va a existir una copia (el singleton) todo el ciclo de vida de la aplicaci&oacute;n.";
 choices[90][3] = "Los stateful est&aacute;n respaldados por una base de datos y pueden implementar un servicio web.";
 answers[90] = choices[90][0];
 units[90] = "60";
 comments[90] = "Id Pregunta: 10024. TIC A2, Promoci&oacute;n Interna, 2013. Un stateless puede servirle a varios clientes. Stateful suele servir solo a 1 cliente.";


//  Id pregunta: 10374 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  El Teorema Chino del Resto es un m&eacute;todo matem&aacute;tico de resoluci&oacute;n de ecuaciones en aritm&eacute;tica modular que tiene aplicaci&oacute;n principalmente en:";
 choices[91]= new Array();
 choices[91][0] = "Criptograf&iacute;a asim&eacute;trica o de clave p&uacute;blica";
 choices[91][1] = "Criptograf&iacute;a sim&eacute;trica";
 choices[91][2] = "C&aacute;lculo de impedancias de cables coaxiales";
 choices[91][3] = "Junto con el teorema de Euler se usa en resoluci&oacute;n de caminos en grafos, teniendo su aplicaci&oacute;n pr&aacute;ctica en la resoluci&oacute;n de enrutamientos en comunicaciones.";
 answers[91] = choices[91][0];
 units[91] = "72";
 comments[91] = "Id Pregunta: 10374. ";


//  Id pregunta: 10460 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  Respecto a JSON (Javascript Object Notation), indicar la respuesta incorrecta:";
 choices[92]= new Array();
 choices[92][0] = "Es una parte de la definici&oacute;n del est&aacute;ndar ECMA-262.";
 choices[92][1] = "Es una alternativa a XML en AJAX.";
 choices[92][2] = "Requiere analizadores sint&aacute;cticos complejos.";
 choices[92][3] = "Suele emplearse en entornos donde el tama&ntilde;o del flujo de datos entre cliente y servidor es importante.";
 answers[92] = choices[92][2];
 units[92] = "51";
 comments[92] = "Id Pregunta: 10460. NULL";


//  Id pregunta: 10622 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Son proyectos SIG (Sistemas de Informaci&oacute;n Geogr&aacute;fica) en Espa&ntilde;a:";
 choices[93]= new Array();
 choices[93][0] = "SIC y SILG.";
 choices[93][1] = "SIGNA y SIANE.";
 choices[93][2] = "SIGMA y SIGPAC.";
 choices[93][3] = "SIGMAPA y SEGRO.";
 answers[93] = choices[93][1];
 units[93] = "67";
 comments[93] = "Id Pregunta: 10622. ";


//  Id pregunta: 10626 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  El sistema operativo Android:";
 choices[94]= new Array();
 choices[94][0] = "Est&aacute; basado en el kernel de Linux.";
 choices[94][1] = "Est&aacute; basado en la distribuci&oacute;n &ldquo;Ubuntu Touch&rdquo;.";
 choices[94][2] = "Es una distribuci&oacute;n de Linux.";
 choices[94][3] = "Es el resultado de la combinaci&oacute;n de Linux y Firefox OS.";
 answers[94] = choices[94][0];
 units[94] = "52.54";
 comments[94] = "Id Pregunta: 10626. ";


//  Id pregunta: 10786 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Globus Toolkit es:";
 choices[95]= new Array();
 choices[95][0] = "Un framework de IBM que proporciona caracter&iacute;sticas para desarrollar, hacer debug y testear aplicaciones AJAX.";
 choices[95][1] = "Un conjunto de herramientas open source para construir grids computacionales.";
 choices[95][2] = "Un framework que contiene APIs y widgets para facilitar el desarrollo de aplicaciones Web que utilicen tecnolog&iacute;a AJAX y programaci&oacute;n paralela.";
 choices[95][3] = "Una librer&iacute;a Python, modular y extensible, que ofrece una API para desarrollar aplicaciones distribuidas.";
 answers[95] = choices[95][1];
 units[95] = "45";
 comments[95] = "Id Pregunta: 10786. Examen GSI 2014";


//  Id pregunta: 11030 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Qu&eacute; quiere decir que una operaci&oacute;n es idempotente?";
 choices[96]= new Array();
 choices[96][0] = "Que tiene prioridad sobre cualquier tipo de operaci&oacute;n";
 choices[96][1] = "Que cualquier operaci&oacute;n tiene m&aacute;s prioridad que ella";
 choices[96][2] = "Que el resultado de la misma var&iacute;a cada vez que se ejecuta";
 choices[96][3] = "Que el resultado de la misma no var&iacute;a con cada vez que se ejecuta";
 answers[96] = choices[96][3];
 units[96] = "50";
 comments[96] = "Id Pregunta: 11030. ";


//  Id pregunta: 11132 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;A qu&eacute; se refiere un problema de fragmentaci&oacute;n interna de la memoria de un sistema operativo?";
 choices[97]= new Array();
 choices[97][0] = "Cuando el programa es m&aacute;s peque&ntilde;o que el marco de p&aacute;gina asignado";
 choices[97][1] = "Cuando quedan zonas de memoria libres peque&ntilde;as que no se pueden utilizar";
 choices[97][2] = "Cuando un programa utiliza zonas de memoria diferentes en cada sesi&oacute;n para escribir sus datos.";
 choices[97][3] = "Ninguna de las anteriores";
 answers[97] = choices[97][0];
 units[97] = "52";
 comments[97] = "Id Pregunta: 11132. ";


//  Id pregunta: 11517 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Seg&uacute;n el Modelo de Referencia de WorkFlow de la WFMc (WorkFlow Management Coalition), se&ntilde;ale la INCORRECTA:";
 choices[98]= new Array();
 choices[98][0] = "WF Enacment Service es el servicio de representaci&oacute;n de workflow e interpreta la descripci&oacute;n de los procesos.";
 choices[98][1] = "El interfaz 2 establece la comunicaci&oacute;n con las aplicaciones de los clientes.";
 choices[98][2] = "La Interfaz 4 o WAPI, establece funciones de interoperabilidad e interpretaci&oacute;n com&uacute;n en la definici&oacute;n de procesos.";
 choices[98][3] = "La Interfaz 1 se encarga de la administraci&oacute;n y monitorizaci&oacute;n del flujo de trabajo.";
 answers[98] = choices[98][3];
 units[98] = "71";
 comments[98] = "Id Pregunta: 11517. NULL";


//  Id pregunta: 11619 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  El Algoritmo A* es un m&eacute;todo de b&uacute;squeda:";
 choices[99]= new Array();
 choices[99][0] = "De mejora iterativa";
 choices[99][1] = "Ciego";
 choices[99][2] = "Heur&iacute;stico";
 choices[99][3] = "a) y c) son correctos";
 answers[99] = choices[99][2];
 units[99] = "63";
 comments[99] = "Id Pregunta: 11619. ";


