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

//  Id pregunta: 22 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;C&oacute;mo se denomina al derecho o facultad que se reconoce al afectado para recabar informaci&oacute;n gratuita sobre sus datos de car&aacute;cter personal, ya est&eacute;n incluidos o vayan a ser tratados?:";
 choices[0]= new Array();
 choices[0][0] = "Derecho de informaci&oacute;n";
 choices[0][1] = "Derecho de acceso";
 choices[0][2] = "Derecho de consulta al Registro General de Protecci&oacute;n de Datos";
 choices[0][3] = "Derecho de cancelaci&oacute;n";
 answers[0] = choices[0][1];
 units[0] = "29";
 comments[0] = "Id Pregunta: 22. ";


//  Id pregunta: 66 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Qu&eacute; indica un nivel de prioridad 3 en la norma WCAG 1.0 del WAI sobre un punto de verificaci&oacute;n?";
 choices[1]= new Array();
 choices[1][0] = "Un desarrollador de contenidos de p&aacute;ginas web tiene que satisfacer el punto de verificaci&oacute;n ";
 choices[1][1] = "Un desarrollador de contenidos de p&aacute;ginas web debe satisfacer el punto de verificaci&oacute;n";
 choices[1][2] = "Un desarrollador de contenidos de p&aacute;ginas web puede satisfacer el punto de verificaci&oacute;n";
 choices[1][3] = "Ninguna de las opciones anteriores es correcta";
 answers[1] = choices[1][2];
 units[1] = "39";
 comments[1] = "Id Pregunta: 66. ";


//  Id pregunta: 411 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  Respecto al modelo de Nolan:";
 choices[2]= new Array();
 choices[2][0] = "Fue criticado por Strassman al no contemplar la aparici&oacute;n de las bases de datos";
 choices[2][1] = "Seg&uacute;n su autor es un modelo de 4 etapas, posteriormente corregido a 5 etapas";
 choices[2][2] = "Las 2 anteriores";
 choices[2][3] = "Ninguna de las anteriores";
 answers[2] = choices[2][0];
 units[2] = "22";
 comments[2] = "Id Pregunta: 411. nolan";


//  Id pregunta: 527 AÃ±o de creación de pregunta: 2003-01-01
 questions[3]= "4)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con la normativa vigente en materia de protecci&oacute;n de datos de car&aacute;cter personal:";
 choices[3]= new Array();
 choices[3][0] = "El responsable del fichero adoptar&aacute; las medidas necesarias para que el personal conozca las normas de seguridad que afectan al desarrollo de sus funciones as&iacute; como las consecuencias en que pudiera incurrir en caso de incumplimiento.";
 choices[3][1] = "Cada fichero del organismo con datos de car&aacute;cter personal dispondr&aacute; de un documento especifico de seguridad en el que no se podr&aacute;n describir conjuntamente aspectos de seguridad relativos a mas de un fichero.";
 choices[3][2] = "La LOPD se aplicara de forma completa a los ficheros manuales a partir del 24 de octubre de 2010.";
 choices[3][3] = "La protecci&oacute;n de datos personales es un derecho fundamental que afecta exclusivamente a los datos que afectan a la intimidad del individuo.";
 answers[3] = choices[3][0];
 units[3] = "29";
 comments[3] = "Id Pregunta: 527. Junta Andaluc&iacute;a";


//  Id pregunta: 615 AÃ±o de creación de pregunta: 2006-01-01
 questions[4]= "5)  El Plan de Contingencias:";
 choices[4]= new Array();
 choices[4][0] = "implica un an&aacute;lisis de los posibles riesgos";
 choices[4][1] = "debe incluir un Plan de Recuperaci&oacute;n de Desastres";
 choices[4][2] = "las dos primeras son ciertas";
 choices[4][3] = "las dos primeras son falsas";
 answers[4] = choices[4][2];
 units[4] = "32";
 comments[4] = "Id Pregunta: 615. ";


//  Id pregunta: 745 AÃ±o de creación de pregunta: 2004-01-01
 questions[5]= "6)  Los algoritmos de cifrado que utilizaban los antiguos romanos eran de clave:";
 choices[5]= new Array();
 choices[5][0] = "sim&eacute;trica";
 choices[5][1] = "asim&eacute;trica";
 choices[5][2] = "diferencial";
 choices[5][3] = "clave sim&eacute;trica o asim&eacute;trica, dependiendo del algoritmo";
 answers[5] = choices[5][0];
 units[5] = "72";
 comments[5] = "Id Pregunta: 745. Similar a examen TIC SS A 2003";


//  Id pregunta: 770 AÃ±o de creación de pregunta: 2004-01-01
 questions[6]= "7)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares no es se corresponde con un est&aacute;ndar de audio?";
 choices[6]= new Array();
 choices[6][0] = "mp3";
 choices[6][1] = "wav";
 choices[6][2] = "mod";
 choices[6][3] = "rmm";
 answers[6] = choices[6][3];
 units[6] = "47";
 comments[6] = "Id Pregunta: 770. ";


//  Id pregunta: 885 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l es la diferencia de los comandos del sistema, tales como la orden de listado de directorio (dir &oacute; ls) en MSDOS y LINUX?:";
 choices[7]= new Array();
 choices[7][0] = "En MSDOS, los programas del sistema estaban contenidos en el nucleo, y en LINUX son archivos ejecutables";
 choices[7][1] = "En LINUX, los programas del sistema estan contenidos en el nucleo, y en MSDOS eran archivos ejecutables";
 choices[7][2] = "No existe diferencia, salvo de nombre en esos programas";
 choices[7][3] = "Todas son falsas";
 answers[7] = choices[7][0];
 units[7] = "54";
 comments[7] = "Id Pregunta: 885. NULL";


//  Id pregunta: 954 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Comparando los conceptos de Groupware y CSCW (Computer Supported Cooperative Work):";
 choices[8]= new Array();
 choices[8][0] = "Groupware se refiere m&aacute;s a aspectos sociol&oacute;gicos y psicol&oacute;gicos";
 choices[8][1] = "CSCW aborda la tem&aacute;tica desde una perspectiva mucho m&aacute;s concreta y espec&iacute;fica";
 choices[8][2] = "Groupware se centra en las connotaciones tecnol&oacute;gicas, en aplicaciones concretas y en actividades grupales";
 choices[8][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[8] = choices[8][2];
 units[8] = "71";
 comments[8] = "Id Pregunta: 954. ";


//  Id pregunta: 1038 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  El modo de ejecuci&oacute;n menos privilegiado de un procesador es conocido como:";
 choices[9]= new Array();
 choices[9][0] = "Modo del sistema";
 choices[9][1] = "Modo de usuario";
 choices[9][2] = "Modo de control";
 choices[9][3] = "Modo del n&uacute;cleo";
 answers[9] = choices[9][1];
 units[9] = "47";
 comments[9] = "Id Pregunta: 1038. ";


//  Id pregunta: 1104 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  En la arquitectura ANSI/X3 SPARC a tres niveles de BD, indicar cu&aacute;l de los esquemas citados a continuaci&oacute;n no corresponde a dicha arquitectura:";
 choices[10]= new Array();
 choices[10][0] = "Esquema externo";
 choices[10][1] = "Esquema legal";
 choices[10][2] = "Esquema conceptual";
 choices[10][3] = "Esquema interno";
 answers[10] = choices[10][1];
 units[10] = "57";
 comments[10] = "Id Pregunta: 1104. ";


//  Id pregunta: 1126 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  En relaci&oacute;n a las diferentes tecnolog&iacute;as de buses:";
 choices[11]= new Array();
 choices[11][0] = "ISA es posterior a MCA";
 choices[11][1] = "AGP es posterior a PCI";
 choices[11][2] = "XT es posterior a ISA";
 choices[11][3] = "EISA es anterior a MCA";
 answers[11] = choices[11][1];
 units[11] = "47";
 comments[11] = "Id Pregunta: 1126. ";


//  Id pregunta: 1202 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  KADS es una metodolog&iacute;a de desarrollo de sistemas basados en en el conocimiento. Se divide en varias fases, entre las que no se encuentra:";
 choices[12]= new Array();
 choices[12][0] = "Refino de la base de conocimiento";
 choices[12][1] = "Implementaci&oacute;n";
 choices[12][2] = "Uso";
 choices[12][3] = "Clasificaci&oacute;n";
 answers[12] = choices[12][3];
 units[12] = "64";
 comments[12] = "Id Pregunta: 1202. ";


//  Id pregunta: 1208 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  La arquitectura UMA seg&uacute;n Silicon Graphics:";
 choices[13]= new Array();
 choices[13][0] = "Utiliza un bus AGP 16x";
 choices[13][1] = "Utiliza una &uacute;nica memoria para todos los dispositivos, sin que estos tengan memorias locales";
 choices[13][2] = "Las respuestas 'a' y 'b' son correctas";
 choices[13][3] = "Las respuestas 'a' y 'b' son falsas";
 answers[13] = choices[13][1];
 units[13] = "45";
 comments[13] = "Id Pregunta: 1208. ";


//  Id pregunta: 1245 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  La teor&iacute;as matem&aacute;ticas de la l&oacute;gica y la probabilidad usada en la computaci&oacute;n desde sus inicios se deben a:";
 choices[14]= new Array();
 choices[14][0] = "Isaac Newton";
 choices[14][1] = "Charles Babbage";
 choices[14][2] = "David Hilbert";
 choices[14][3] = "George Boole";
 answers[14] = choices[14][3];
 units[14] = "46";
 comments[14] = "Id Pregunta: 1245. ";


//  Id pregunta: 1488 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  &iquest;Cu&aacute;l de las siguientes respuestas caracteriza FDDI?:";
 choices[15]= new Array();
 choices[15][0] = "Consiste en el control de dispositivos y datos que funcionan por desplazameinto de frecuencia";
 choices[15][1] = "Consiste en la t&eacute;cnica de control de los dispositivos para filtraje de datos en las redes de &aacute;rea local";
 choices[15][2] = "Consiste en dos bucles de fibra &oacute;ptica con protocolo de paso de testigo";
 choices[15][3] = "Consiste en un bucle de fibra &oacute;ptica que funciona como Ethernet (por contenci&oacute;n) pero a 100 Mbits/seg, y hay otro bucle como backup del primero";
 answers[15] = choices[15][2];
 units[15] = "101";
 comments[15] = "Id Pregunta: 1488. ";


//  Id pregunta: 1544 AÃ±o de creación de pregunta: 2003-01-01
 questions[16]= "17)  &iquest;Qu&eacute; es Wine?";
 choices[16]= new Array();
 choices[16][0] = "Un emulador X11 para Windows";
 choices[16][1] = "Un emulador X11 para Linux";
 choices[16][2] = "Una implementaci&oacute;n de c&oacute;digo fuente abierto de la API de Windows que funciona sobre una plataforma X11";
 choices[16][3] = "Nada de lo anterior";
 answers[16] = choices[16][2];
 units[16] = "62";
 comments[16] = "Id Pregunta: 1544. ";


//  Id pregunta: 1737 AÃ±o de creación de pregunta: 2006-01-01
 questions[17]= "18)  El sistema operativo WindowsNT se basaba en una estructura de n&uacute;cleo de sistema operativo";
 choices[17]= new Array();
 choices[17][0] = "Microkernel";
 choices[17][1] = "Monol&iacute;tico";
 choices[17][2] = "Anillo";
 choices[17][3] = "Red";
 answers[17] = choices[17][0];
 units[17] = "56";
 comments[17] = "Id Pregunta: 1737. ";


//  Id pregunta: 1849 AÃ±o de creación de pregunta: 2006-01-01
 questions[18]= "19)  Un sistema de Workflow seg&uacute;n la WfMC debe incluir necesariamente la funci&oacute;n de:";
 choices[18]= new Array();
 choices[18][0] = "Gesti&oacute;n de notificaciones y colas de trabajo";
 choices[18][1] = "Autorizaciones y asignaci&oacute;n de responsabilidades";
 choices[18][2] = "Facilidades de enrrutamiento";
 choices[18][3] = "Todas las anteriores";
 answers[18] = choices[18][3];
 units[18] = "71";
 comments[18] = "Id Pregunta: 1849. ";


//  Id pregunta: 1927 AÃ±o de creación de pregunta: 2006-01-01
 questions[19]= "20)  En el entorno de escritorio KDE, Kate es:";
 choices[19]= new Array();
 choices[19][0] = "El navegador del escritorio";
 choices[19][1] = "Un generador de informes para la empresa";
 choices[19][2] = "Un editor de f&oacute;rmulas matem&aacute;ticas";
 choices[19][3] = "Un editor de texto";
 answers[19] = choices[19][3];
 units[19] = "54";
 comments[19] = "Id Pregunta: 1927. NULL";


//  Id pregunta: 1989 AÃ±o de creación de pregunta: 2004-01-01
 questions[20]= "21)  El acoplamiento QUE presenta una gradaci&oacute;n de menor a mayor es:";
 choices[20]= new Array();
 choices[20][0] = "Sin acoplamiento directo, de datos simple, por estampado, de control, externo, com&uacute;n, por contenido.";
 choices[20][1] = "Sin acoplamiento directo, de datos simple, generico, de control, externo, por contenido.";
 choices[20][2] = "De datos simple, por estampado, externo, com&uacute;n, de control, por contenido.";
 choices[20][3] = "Por estampado, simple, de control, externo, com&uacute;n, por contenido.";
 answers[20] = choices[20][0];
 units[20] = "84";
 comments[20] = "Id Pregunta: 1989. ";


//  Id pregunta: 2058 AÃ±o de creación de pregunta: 2004-01-01
 questions[21]= "22)  En METRICA V3 y otras metodolog&iacute;as de desarrollo, &iquest;qu&eacute; se entiende por Gesti&oacute;n de la Configuraci&oacute;n?";
 choices[21]= new Array();
 choices[21][0] = "La planificaci&oacute;n, seguimiento y control de los recursos humanos y materiales que intervienen en el desarrollo del Sistema de Informaci&oacute;n.";
 choices[21][1] = "La administraci&oacute;n de los recursos f&iacute;sicos que soportan la infraestructura de construcci&oacute;n del Sistema de Informaci&oacute;n";
 choices[21][2] = "El mantenimiento de la integridad de los productos y objetos obenidos durante el desarrollo de los sistemas de informaci&oacute;n, controlando las versiones y los cambios de estos.";
 choices[21][3] = "El marco com&uacute;n de medidas orientadas al aseguramiento de la calidad aplicable al Proyecto";
 answers[21] = choices[21][2];
 units[21] = "86";
 comments[21] = "Id Pregunta: 2058. Pregunta Junta Andalucia - A";


//  Id pregunta: 2077 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Para la estimaci&oacute;n del esfuerzo necesario y dimensionamiento de proyectos de desarrollo de sistemas, &iquest;qu&eacute; opciones viables aparecen?:";
 choices[22]= new Array();
 choices[22][0] = "Modelos basados en t&eacute;cnicas de descomposici&oacute;n y modelos de estimaci&oacute;n emp&iacute;ricos";
 choices[22][1] = "Modelos de estimaci&oacute;n de l&iacute;neas de c&oacute;digo y modelos de punto de funci&oacute;n";
 choices[22][2] = "Modelos basados en t&eacute;cnicas de planificaci&oacute;n y control de proyectos y modelos de planificaci&oacute;n temporal";
 choices[22][3] = "Modelos de estimaci&oacute;n de l&iacute;neas de c&oacute;digo y modelos emp&iacute;ricos";
 answers[22] = choices[22][1];
 units[22] = "89";
 comments[22] = "Id Pregunta: 2077. NULL";


//  Id pregunta: 2134 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  &iquest;Cu&aacute;l de las siguientes afirmaciones, respecto de las especificaciones de los requerimientos, es falsa?:";
 choices[23]= new Array();
 choices[23][0] = "La especificaci&oacute;n debe separar la funcionalidad de la implementaci&oacute;n";
 choices[23][1] = "La especificaci&oacute;n s&oacute;lo debe contemplar el software, aisl&aacute;ndolo del resto del sistema";
 choices[23][2] = "La especificaci&oacute;n debe ser ampliable y flexible";
 choices[23][3] = "La especificaci&oacute;n debe ser f&aacute;cilmente operativa";
 answers[23] = choices[23][1];
 units[23] = "78";
 comments[23] = "Id Pregunta: 2134. ";


//  Id pregunta: 2338 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  En los Diagramas de Estructura de Datos utilizados para la representaci&oacute;n de un modelo l&oacute;gico relacional, las relaciones pueden tener cardinalidad:";
 choices[24]= new Array();
 choices[24][0] = "Uno-a-muchos";
 choices[24][1] = "Binaria";
 choices[24][2] = "Muchos-a-muchos";
 choices[24][3] = "Ninguna de las anteriores";
 answers[24] = choices[24][0];
 units[24] = "57,58,80";
 comments[24] = "Id Pregunta: 2338. ";


//  Id pregunta: 2416 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  El m&eacute;todo booleano de recuperaci&oacute;n de informaci&oacute;n presenta como problema fundamental:";
 choices[25]= new Array();
 choices[25][0] = "Es de sintaxis compleja y la consulta debe reintentarse normalmente para obtener una cantidad razonable de documentos";
 choices[25][1] = "Deben utilizarse m&uacute;ltiples ficheros auxiliares";
 choices[25][2] = "Utilizan operadores l&oacute;gicos y modelos probabil&iacute;sticos simult&aacute;neamente";
 choices[25][3] = "Est&aacute; basado en sistemas expertos";
 answers[25] = choices[25][0];
 units[25] = "96";
 comments[25] = "Id Pregunta: 2416. NULL";


//  Id pregunta: 2511 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Una entidad externa en un DFD:";
 choices[26]= new Array();
 choices[26][0] = "No debe figurar en el DFD";
 choices[26][1] = "No se tiene en consideraci&oacute;n";
 choices[26][2] = "Interactua con el sistema";
 choices[26][3] = "Se relaciona con otras entidades externas";
 answers[26] = choices[26][2];
 units[26] = "81";
 comments[26] = "Id Pregunta: 2511. ";


//  Id pregunta: 2675 AÃ±o de creación de pregunta: 2003-01-01
 questions[27]= "28)  En los Sistemas de Recuperaci&oacute;n de Informaci&oacute;n se define:";
 choices[27]= new Array();
 choices[27][0] = "El &Iacute;ndice de Retorno, que mide la cantidad de material devuelto, y el &Iacute;ndice de Precisi&oacute;n, que mide el ajuste del material devuelto.";
 choices[27][1] = "El &Iacute;ndice de Devoluciones, que mide la cantidad de manterial devuelto, y el &Iacute;ndice de Calidad, que mide el ajuste del material devuelto.";
 choices[27][2] = "El &Iacute;ndice de Datos, que mide la cantidad de material devuelto, y el &Iacute;ndice de Errores, que mide el desajuste del material devuelto.";
 choices[27][3] = "El &Iacute;ndice de Retorno, que mide la cantidad de material devuelto y el &Iacute;ndice de Calidad, que mide el ajuste del material devuelto.";
 answers[27] = choices[27][0];
 units[27] = "96";
 comments[27] = "Id Pregunta: 2675. NULL";


//  Id pregunta: 2681 AÃ±o de creación de pregunta: 2003-01-01
 questions[28]= "29)  Indique la afirmaci&oacute;n verdadera:";
 choices[28]= new Array();
 choices[28][0] = "La informaci&oacute;n recogida por la c&eacute;lula fotoel&eacute;ctrica del esc&aacute;ner es de tipo anal&oacute;gica.";
 choices[28][1] = "En el caso de los esc&aacute;neres de color, el sistema de detecci&oacute;n consiste en separar los componentes de color en sus valores b&aacute;sicos: rojo, verde y azul.";
 choices[28][2] = "La exploraci&oacute;n se realiza mediante c&eacute;lulas fotoel&eacute;ctricas o fotodiodos y el resultado es una informaci&oacute;n que hay que digitalizar antes de que se pueda transmitir al ordenador, que es capaz de procesarla mediante sistemas gr&aacute;ficos y software especial.";
 choices[28][3] = "Todas las anteriores.";
 answers[28] = choices[28][3];
 units[28] = "93";
 comments[28] = "Id Pregunta: 2681. NULL";


//  Id pregunta: 2712 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  &iquest;Cu&aacute;l de estos es un tipo de fichero de sonido?";
 choices[29]= new Array();
 choices[29][0] = " TIFF";
 choices[29][1] = "PNG";
 choices[29][2] = " VRML ";
 choices[29][3] = "MIDI";
 answers[29] = choices[29][3];
 units[29] = "94";
 comments[29] = "Id Pregunta: 2712. ";


//  Id pregunta: 2927 AÃ±o de creación de pregunta: 2004-01-01
 questions[30]= "31)  En una configuraci&oacute;n de red interna o intranet conectada a internet se entiende por DMZ a:";
 choices[30]= new Array();
 choices[30][0] = "El conjunto de Firewalls y filtros que permiten garantizar la seguridad de la red.";
 choices[30][1] = "Una red que enlaza la intranet con internet en la que se implementan todas las restricciones necesarias para la seguridad de la red.";
 choices[30][2] = "Una red que enlaza la intranet con internet en la que se implementan los servicios p&uacute;blicos que se deseen ofrecer, separada de ambas redes mediante sendos Firewalls.";
 choices[30][3] = "Una red que enlaza la intranet con internet en la que se implementan los servicios que requieren mayor protecci&oacute;n y privacidad, separada de ambas redes mediante sendos Firewalls.";
 answers[30] = choices[30][2];
 units[30] = "113";
 comments[30] = "Id Pregunta: 2927. ";


//  Id pregunta: 2966 AÃ±o de creación de pregunta: 2004-01-01
 questions[31]= "32)  Indique a qu&eacute; velocidad aproximada dentro de la Jerarqu&iacute;a Digital S&iacute;ncrona corresponde a un contenedor OC-3 de la Jerarqu&iacute;a SONET:";
 choices[31]= new Array();
 choices[31][0] = "52 Mbps";
 choices[31][1] = "155 Mbps";
 choices[31][2] = "384 Mpbs";
 choices[31][3] = "Ninguno de los anteriores";
 answers[31] = choices[31][1];
 units[31] = "109";
 comments[31] = "Id Pregunta: 2966. ";


//  Id pregunta: 2968 AÃ±o de creación de pregunta: 2004-01-01
 questions[32]= "33)  El componente de servidor J2EE de uso m&aacute;s apropiado para mantener una conversaci&oacute;n con un cliente es un EJB del tipo ...";
 choices[32]= new Array();
 choices[32][0] = "Stateless Session Bean";
 choices[32][1] = "Message Driven Bean";
 choices[32][2] = "Entity Bean con persistencia BMP";
 choices[32][3] = "Stateful Session Bean";
 answers[32] = choices[32][3];
 units[32] = "116";
 comments[32] = "Id Pregunta: 2968. ";


//  Id pregunta: 3089 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  Se dice que una tarea o rutina es as&iacute;ncrona cuando:";
 choices[33]= new Array();
 choices[33][0] = "Gestiona un enlace de terminales 'tontos'";
 choices[33][1] = "Lanza una transacci&oacute;n a un terminal as&iacute;ncrono y espera su contestaci&oacute;n";
 choices[33][2] = "La tarea que la lanza no espera a su terminaci&oacute;n para continuar";
 choices[33][3] = "Son rutinas especializadas de los Sistemas de Tiempo Real dedicadas a la supervis&oacute;n de eventos en los elementos anal&oacute;gicos que controlan";
 answers[33] = choices[33][2];
 units[33] = "112";
 comments[33] = "Id Pregunta: 3089. ";


//  Id pregunta: 3098 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  Una transmisi&oacute;n as&iacute;ncrona se caracteriza porque:";
 choices[34]= new Array();
 choices[34][0] = "Los caracteres se reciben a un ritmo diferente del que se transmiten";
 choices[34][1] = "El terminal receptor funciona a velocidad diferente del emisor";
 choices[34][2] = "Cada car&aacute;cter incorpora su propio sincronismo";
 choices[34][3] = "Se utilizan caracteres de sincronizaci&oacute;n sin periodicidad fija";
 answers[34] = choices[34][2];
 units[34] = "100";
 comments[34] = "Id Pregunta: 3098. Cada caracter a ser transmitido es delimitado por un bit de informaci&oacute;n denominado de cabecera o de arranque, y uno o dos bits denominados de terminaci&oacute;n o de parada";


//  Id pregunta: 3118 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  &iquest;A qu&eacute; se denomina Hub en una red local?:";
 choices[35]= new Array();
 choices[35][0] = "A un conector que sirve para unir cada ordenador con el cableado principal";
 choices[35][1] = "A un dispositivo que tiene como funci&oacute;n concentrar el cableado de la red";
 choices[35][2] = "A un dispositivo que tiene como funci&oacute;n convertir cableado en modo balanceado a modo no balanceado";
 choices[35][3] = "A un terminador que tiene como funci&oacute;n adaptar impedancias";
 answers[35] = choices[35][1];
 units[35] = "102";
 comments[35] = "Id Pregunta: 3118. ";


//  Id pregunta: 3327 AÃ±o de creación de pregunta: 2002-01-01
 questions[36]= "37)  A la tecnolog&iacute;a que permite a un abonado disfrutar de servicios propios de su operadora cuando est&aacute; en itinerancia en otra operadora nacional o extranjera con la que se tengan acuerdos de roaming, se denomina:";
 choices[36]= new Array();
 choices[36][0] = "USSD";
 choices[36][1] = "CAMEL";
 choices[36][2] = "VHE";
 choices[36][3] = "I-Roaming";
 answers[36] = choices[36][1];
 units[36] = "107";
 comments[36] = "Id Pregunta: 3327. NULL";


//  Id pregunta: 3450 AÃ±o de creación de pregunta: 2002-01-01
 questions[37]= "38)  El protocolo FTP (File Transfer Protocol) utiliza canales diferentes para comandos y para datos:";
 choices[37]= new Array();
 choices[37][0] = "Un servidor FTP en modo activo emplea el puerto 21 para enviar datos al cliente";
 choices[37][1] = "Un servidor FTP emplea el puerto 21 para comandos, ya sea en modo activo o pasivo";
 choices[37][2] = "Un servidor FTP en modo pasivo emplea el puerto 21 para enviar datos al cliente";
 choices[37][3] = "Un servidor FTP emplea el puerto 20 para comandos, ya sea en modo activo o pasivo";
 answers[37] = choices[37][1];
 units[37] = "112";
 comments[37] = "Id Pregunta: 3450. ";


//  Id pregunta: 3535 AÃ±o de creación de pregunta: 2002-01-01
 questions[38]= "39)  En las t&eacute;cnicas celulares aplicadas a telefon&iacute;a m&oacute;vil, &iquest;cu&aacute;l es la geometr&iacute;a m&aacute;s adecuada de una c&eacute;lula en t&eacute;rminos de m&aacute;xima cobertura y m&iacute;nima intereferencia?:";
 choices[38]= new Array();
 choices[38][0] = "La cuadrada";
 choices[38][1] = "La circular";
 choices[38][2] = "La triangular";
 choices[38][3] = "La hexagonal";
 answers[38] = choices[38][3];
 units[38] = "108";
 comments[38] = "Id Pregunta: 3535. ";


//  Id pregunta: 3562 AÃ±o de creación de pregunta: 2002-01-01
 questions[39]= "40)  En un domicilio particular abonado a un &quot;acceso b&aacute;sico&quot; de RDSI:";
 choices[39]= new Array();
 choices[39][0] = "Siempre puede estar conectado a Internet y a su vez recibir una llamada telef&oacute;nica";
 choices[39][1] = "No puede estar conectado a Internet ya su vez recibir una llamada telef&oacute;nica";
 choices[39][2] = "Puede estar conectado a Internet y a su vez recibir una llamada telef&oacute;nica, solo en el caso de que disponga de un &quot;m&oacute;dem&quot; ADSL";
 choices[39][3] = "Ninguna de las anteriores es correcta";
 answers[39] = choices[39][0];
 units[39] = "103";
 comments[39] = "Id Pregunta: 3562. ";


//  Id pregunta: 3594 AÃ±o de creación de pregunta: 2002-01-01
 questions[40]= "41)  La diferencia entre protocolo e interfaz seg&uacute;n OSI es:";
 choices[40]= new Array();
 choices[40][0] = "entre otras, un protocolo se refiere a entidades de distintos niveles y un interfaz a entidades del mismo nivel";
 choices[40][1] = "ambos conceptos se refieren a entidades de distintos niveles";
 choices[40][2] = "ambos conceptos se refieren a entidades del mismo nivel";
 choices[40][3] = "entre otras, un protocolo se refiere a entidades del mismo nivel y un interfaz a entidades de distintos niveles";
 answers[40] = choices[40][3];
 units[40] = "100";
 comments[40] = "Id Pregunta: 3594. NULL";


//  Id pregunta: 3854 AÃ±o de creación de pregunta: 2003-01-01
 questions[41]= "42)  Con respecto a las l&iacute;neas PLC (POWER LINE COMMUNICATIONS) no es cierto que:";
 choices[41]= new Array();
 choices[41][0] = "Tiene problemas respecto a sus a prestaciones o a la velocidad debido al ruido y microcortes";
 choices[41][1] = "No es necesaria nueva regulaci&oacute;n debido a la que ya existe para las l&iacute;neas de potencia instaladas";
 choices[41][2] = "Requiere colocar amplificadores de desacoplamiento en cada transformador de media/baja tensi&oacute;n porque estos act&uacute;an como filtros para los datos";
 choices[41][3] = "Deben enfrentarse a todas las interferencias y perturbaciones presentes, debido a la amplia proliferaci&oacute;n de electrodom&eacute;sticos y otros dispositivos conectados";
 answers[41] = choices[41][1];
 units[41] = "107";
 comments[41] = "Id Pregunta: 3854. NULL";


//  Id pregunta: 3998 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  En relaci&oacute;n con las redes de distribuci&oacute;n HFC, se&ntilde;ale qu&eacute; afirmaci&oacute;n no es correcta:";
 choices[42]= new Array();
 choices[42][0] = "Los amplificadores de l&iacute;nea (Line Extender) son componentes activos.";
 choices[42][1] = "Los taps son componentes pasivos.";
 choices[42][2] = "Los amplificadores de l&iacute;nea (Line Extender), en sentido ascendente, utilizan configuraciones de amplificaci&oacute;n en paralelo denominadas &ldquo;power dubbing&rdquo; o &ldquo;feed forward&rdquo;.";
 choices[42][3] = "Los taps derivan parte de la energ&iacute;a que circula por el coaxial hacia las terminaciones donde se conectan las acometidas de usuario.";
 answers[42] = choices[42][2];
 units[42] = "105";
 comments[42] = "Id Pregunta: 3998. ";


//  Id pregunta: 4115 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  Se&ntilde;ale la afirmaci&oacute;n incorrecta:";
 choices[43]= new Array();
 choices[43][0] = "Un &ldquo;Webcrawler&rdquo; es motor de b&uacute;squeda de nuevo contenido en Internet";
 choices[43][1] = "Un robot &ldquo;Spider&rdquo; navega por la red de una p&aacute;gina a otra recogiendo informaci&oacute;n de los sitios que visita, esta informaci&oacute;n es almacenada en la base de datos del motor de b&uacute;squeda.";
 choices[43][2] = "Los robots &ldquo;Wanderers&rdquo; o vagabundos miden el tama&ntilde;o de la red en n&ordm; de servidores.";
 choices[43][3] = "Todas las respuestas son ciertas";
 answers[43] = choices[43][3];
 units[43] = "112";
 comments[43] = "Id Pregunta: 4115. ";


//  Id pregunta: 4191 AÃ±o de creación de pregunta: 2006-01-01
 questions[44]= "45)  Para ver los saltos en la ruta entre dos servidores utilizo el comando";
 choices[44]= new Array();
 choices[44][0] = "ping";
 choices[44][1] = "netstat";
 choices[44][2] = "tracert o traceroute";
 choices[44][3] = "ipconfig / ifconfig";
 answers[44] = choices[44][2];
 units[44] = "50";
 comments[44] = "Id Pregunta: 4191. ";


//  Id pregunta: 4553 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  En gesti&oacute;n de proyectos de tecnolog&iacute;as de la informaci&oacute;n indicar cu&aacute;l de los siguientes diagramas es de red y tiene una representaci&oacute;n gr&aacute;fica m&aacute;s sencilla no incluyendo actividades virtuales.";
 choices[45]= new Array();
 choices[45][0] = "Diagrama PERT (Program Evaluation and Review Technique).";
 choices[45][1] = "Diagrama PDM (Precedence Diagramming Method).";
 choices[45][2] = "Diagrama ADM (Arrow Diagramming Method).";
 choices[45][3] = "Ninguno de los anteriores.";
 answers[45] = choices[45][1];
 units[45] = "27";
 comments[45] = "Id Pregunta: 4553. Castilla la Mancha B 06";


//  Id pregunta: 4658 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l es el periodo de vigencia de los certificados contenidos en el DNI electronico?";
 choices[46]= new Array();
 choices[46][0] = "El mismo que el DNI ";
 choices[46][1] = "36 meses";
 choices[46][2] = "30 meses";
 choices[46][3] = "12 meses";
 answers[46] = choices[46][2];
 units[46] = "30";
 comments[46] = "Id Pregunta: 4658. RD 1553/2005, art&iacute;culo 12";


//  Id pregunta: 4805 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  El protocolo IPv6 (Internet Protocol version 6):";
 choices[47]= new Array();
 choices[47][0] = "Tiene direcciones de red de 64 bits de longitud";
 choices[47][1] = "Recomienda que si el datagrama tiene varias cabeceras de extensi&oacute;n, la cabecera de encaminamiento(routing header) aparezca siempre antes que la cabecera de opciones salto a salto (hop-by-hop header)";
 choices[47][2] = "Aunque su cabecera es m&aacute;s grande que la del protocolo IPv4 (Internet Protocol version 4), tiene menoscampos. Esto hace que, por lo general, los routersrealicen menos procesamiento sobre losdatagramas, consiguiendo as&iacute; un encaminamiento m&aacute;s eficiente";
 choices[47][3] = "El campo etiqueta de flujo (flow label) basta para identificar un&iacute;vocamente a un flujo de paquetes";
 answers[47] = choices[47][2];
 units[47] = "100";
 comments[47] = "Id Pregunta: 4805. ";


//  Id pregunta: 4882 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de los siguientes par&aacute;metros NO forma parte de la ecuaci&oacute;n del software de Putnam para la estimaci&oacute;n delesfuerzo de un proyecto software?";
 choices[48]= new Array();
 choices[48][0] = "Casos de uso";
 choices[48][1] = "L&iacute;neas de c&oacute;digo";
 choices[48][2] = "Duraci&oacute;n del proyecto";
 choices[48][3] = "Par&aacute;metro de productividad";
 answers[48] = choices[48][0];
 units[48] = "89";
 comments[48] = "Id Pregunta: 4882. NULL";


//  Id pregunta: 4942 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  La Programaci&oacute;n Estructurada de Jackson es una t&eacute;cnica de dise&ntilde;o:";
 choices[49]= new Array();
 choices[49][0] = "Estructurado.";
 choices[49][1] = "Orientada a objetos.";
 choices[49][2] = "Para organizar los datos.";
 choices[49][3] = "De descomposici&oacute;n funcional.";
 answers[49] = choices[49][0];
 units[49] = "83,84";
 comments[49] = "Id Pregunta: 4942. Examen TIC B 2007";


//  Id pregunta: 4988 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  Indique cu&aacute;l de las siguientes NO es una caracter&iacute;stica de los Almacenes de Datos (Datawarehouses):";
 choices[50]= new Array();
 choices[50][0] = "Est&aacute;n orientados al an&aacute;lisis de informaci&oacute;n y la toma de decisiones.";
 choices[50][1] = "Para facilitar el mantenimiento deben utilizar el mismo esquema que exista para la informaci&oacute;n operativa de la empresa.";
 choices[50][2] = "La informaci&oacute;n var&iacute;a en el tiempo.";
 choices[50][3] = "Son colecciones de datos.";
 answers[50] = choices[50][1];
 units[50] = "68";
 comments[50] = "Id Pregunta: 4988. Examen TIC A 2007";


//  Id pregunta: 5450 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  &iquest;Qu&eacute; no es sociedad de la informaci&oacute;n?";
 choices[51]= new Array();
 choices[51][0] = "Un estadio social y econ&oacute;mico de desarrollo";
 choices[51][1] = "La posibilidad de obtener y compartir &ldquo;cualquier&rdquo; informaci&oacute;n de manera instant&aacute;nea desde cualquier lugar";
 choices[51][2] = "Una situaci&oacute;n en la que la mayor parte de los empleos est&aacute;n asociados a la producci&oacute;n de bienes tangibles";
 choices[51][3] = "El cambio de los medios de generaci&oacute;n de riqueza desde los sectores industriales a los sectores de servicios";
 answers[51] = choices[51][2];
 units[51] = "21";
 comments[51] = "Id Pregunta: 5450. Castilla y Le&oacute;n";


//  Id pregunta: 5512 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  La red de conexi&oacute;n r&aacute;pida inaugurada por la Uni&oacute;n Europea en 2005 para atender la interconexi&oacute;n de investigadores europeos se denomina:";
 choices[52]= new Array();
 choices[52][0] = "TEIN2";
 choices[52][1] = "GEANT2";
 choices[52][2] = "ALICE";
 choices[52][3] = "DANTE";
 answers[52] = choices[52][1];
 units[52] = "103";
 comments[52] = "Id Pregunta: 5512. ";


//  Id pregunta: 5547 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  Entre los derechos reconocidos por la Ley de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos NO se encuentra:";
 choices[53]= new Array();
 choices[53][0] = "El Derecho a la Igualdad en el acceso electr&oacute;nico a los servicios de las Administraciones P&uacute;blicas.";
 choices[53][1] = "El Derecho a la Conservaci&oacute;n en formato electr&oacute;nico por las Administraciones P&uacute;blicas, de los documentos electr&oacute;nicos que formen parte de un expediente.";
 choices[53][2] = "El Derecho a obtener los medios de identificaci&oacute;n electr&oacute;nica necesarios.";
 choices[53][3] = "El Derecho a la libre utilizaci&oacute;n de cualquier sistema de firma electr&oacute;nica.";
 answers[53] = choices[53][3];
 units[53] = "43";
 comments[53] = "Id Pregunta: 5547. NULL";


//  Id pregunta: 5882 AÃ±o de creación de pregunta: 2009-01-01
 questions[54]= "55)  &iquest;Cu&aacute;ndo deber&aacute;n tener implantadas la totalidad de las medidas de seguridad los ficheros, tanto automatizados como no automatizados, creados con posterioridad a la fecha de entrada en vigor del RD 1720/2007, de 21 de diciembre, por el que se aprueba el Reglamento de Desarrollo de la LOPD?:";
 choices[54]= new Array();
 choices[54][0] = "En el plazo de un a&ntilde;o desde su creaci&oacute;n";
 choices[54][1] = "En el plazo de seis meses desde su creaci&oacute;n";
 choices[54][2] = "En el momento de su creaci&oacute;n";
 choices[54][3] = "Depender&aacute; del tama&ntilde;o del fichero";
 answers[54] = choices[54][2];
 units[54] = "29";
 comments[54] = "Id Pregunta: 5882. MAP 2008 A1";


//  Id pregunta: 5993 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes funciones NO es competencia del Consejo Superior de Administraci&oacute;n Electr&oacute;nica?";
 choices[55]= new Array();
 choices[55][0] = "Actuar como Observatorio de la Administraci&oacute;n Electr&oacute;nica.";
 choices[55][1] = "La colaboraci&oacute;n con el Centro Criptol&oacute;gico Nacional del Centro Nacional de Inteligencia en la elaboraci&oacute;n de medidas de seguridad.";
 choices[55][2] = "El control, regulaci&oacute;n y supervisi&oacute;n de los proveedores de accesos a Internet de la Administraci&oacute;n General del Estado.";
 choices[55][3] = "El impulso y la coordinaci&oacute;n de la Administraci&oacute;n Electr&oacute;nica en el seno de la Administraci&oacute;n General del Estado.";
 answers[55] = choices[55][2];
 units[55] = "77";
 comments[55] = "Id Pregunta: 5993. TIC A 2009";


//  Id pregunta: 6083 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  Respecto a SOA y los Servicios Web:";
 choices[56]= new Array();
 choices[56][0] = "Son el mismo concepto.";
 choices[56][1] = "Los Servicios Web son una de las tecnolog&iacute;as destacadas para llevar a la pr&aacute;ctica el paradigma conceptual SOA, pero no son la &uacute;nica.";
 choices[56][2] = "Los Servicios Web son la tecnolog&iacute;a para llevar a la pr&aacute;ctica el paradigma conceptual SOA aunque la arquitectura de desarrollo de los propios Servicios Web puede realizarse de diferentes formas.";
 choices[56][3] = "No existe ninguna relaci&oacute;n entre SOA y los Servicios Web.";
 answers[56] = choices[56][1];
 units[56] = "51";
 comments[56] = "Id Pregunta: 6083. NULL";


//  Id pregunta: 6153 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  &iquest;Sobre qu&eacute; protocolo de la capa de presentaci&oacute;n est&aacute; implementado NFS?";
 choices[57]= new Array();
 choices[57][0] = "ONC RPC";
 choices[57][1] = "XDR";
 choices[57][2] = "NIS";
 choices[57][3] = "XML";
 answers[57] = choices[57][1];
 units[57] = "112";
 comments[57] = "Id Pregunta: 6153. ";


//  Id pregunta: 6163 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  Con respecto al cifrado de los datos en videoconferencia:";
 choices[58]= new Array();
 choices[58][0] = "En H.320 sobre RDSI se desarrollaron los est&aacute;ndares H.233 y H.234.";
 choices[58][1] = "Para las videoconferencias basadas en H.323, se desarrollaron los est&aacute;ndares  H.235.";
 choices[58][2] = "Los sistemas basados en SIP usan SRTP.";
 choices[58][3] = "Todas las anteriores son correctas.";
 answers[58] = choices[58][3];
 units[58] = "117";
 comments[58] = "Id Pregunta: 6163. ";


//  Id pregunta: 6446 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  Los usuarios de dispositivos m&oacute;viles con Windows Mobile 6, pueden sincronizarse con Exchange Server mediante el uso, en el dispositivo m&oacute;vil, de:";
 choices[59]= new Array();
 choices[59][0] = "PalmSync";
 choices[59][1] = "StrongARM";
 choices[59][2] = "MobileSync";
 choices[59][3] = "ActiveSync";
 answers[59] = choices[59][3];
 units[59] = "47";
 comments[59] = "Id Pregunta: 6446. Castilla La Mancha 2009";


//  Id pregunta: 6538 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  En relaci&oacute;n a las t&eacute;cnicas de control de acceso";
 choices[60]= new Array();
 choices[60][0] = "DAC permite a los propietarios de los datos elegir los sujetos que tienen acceso a los mismos";
 choices[60][1] = "MAC usa un sistema de etiquetado";
 choices[60][2] = "El control de acceso no discrecional usa un m&eacute;todo basado en roles para determinar los permisos";
 choices[60][3] = "Todas las respuestas anteriores son correctas";
 answers[60] = choices[60][3];
 units[60] = "111";
 comments[60] = "Id Pregunta: 6538. NULL";


//  Id pregunta: 6550 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l es el m&eacute;todo de autenticaci&oacute;n mejor?";
 choices[61]= new Array();
 choices[61][0] = "Algo que alguien sabe";
 choices[61][1] = "Algo que alguien es";
 choices[61][2] = "Algo que alguien tiene";
 choices[61][3] = "Lo que una persona sabe y es";
 answers[61] = choices[61][3];
 units[61] = "111";
 comments[61] = "Id Pregunta: 6550. NULL";


//  Id pregunta: 6593 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  Un tipo de software libre que lleva al cabo una auditor&iacute;a de todo el software y hardware que se encuentra en una red de una manera sencilla, adem&aacute;s de eficiente es";
 choices[62]= new Array();
 choices[62][0] = "MAPILab Reports:";
 choices[62][1] = "Network Inventory Advisor";
 choices[62][2] = "Visual audit. X4";
 choices[62][3] = "Todas las respuestas anteriores son correctas";
 answers[62] = choices[62][3];
 units[62] = "75";
 comments[62] = "Id Pregunta: 6593. NULL";


//  Id pregunta: 6614 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  De las siguientes actividades, &iquest;cu&aacute;l forma parte del proceso de An&aacute;lisis del Sistema de Informaci&oacute;n (ASI) de M&eacute;trica?";
 choices[63]= new Array();
 choices[63][0] = "Establecimiento de Requisitos";
 choices[63][1] = "Identificaci&oacute;n de Requisitos";
 choices[63][2] = "Establecimiento de Requisitos de Implantaci&oacute;n";
 choices[63][3] = "Definici&oacute;n de Requisitos del Sistema";
 answers[63] = choices[63][0];
 units[63] = "86";
 comments[63] = "Id Pregunta: 6614. NULL";


//  Id pregunta: 7835 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)   &iquest;Cu&aacute;l de las siguientes actividades no forma parte de la &laquo;Planificaci&oacute;n de la adquisici&oacute;n&raquo; seg&uacute;n EUROM&Eacute;TODO versi&oacute;n 1?";
 choices[64]= new Array();
 choices[64][0] = " Definir el dominio objetivo de la compra del sistema de informaci&oacute;n.";
 choices[64][1] = " Determinar los escenarios generales de las adaptaciones y prestaciones de servicio.";
 choices[64][2] = " Analizar los riesgos.";
 choices[64][3] = " Dise&ntilde;ar una estrategia de adquisici&oacute;n en el marco de la gesti&oacute;n de riesgos.";
 answers[64] = choices[64][0];
 units[64] = "NULL";
 comments[64] = "Id Pregunta: 7835. Map 2005";


//  Id pregunta: 7889 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)   Dentro de la orientaci&oacute;n a objetos, &iquest;qu&eacute; t&eacute;rmino expresa que los datos de un objeto s&oacute;lo pueden ser manipulados mediante los mensajes y m&eacute;todos predefinidos?";
 choices[65]= new Array();
 choices[65][0] = " Reusabilidad.";
 choices[65][1] = " Encapsulaci&oacute;n.";
 choices[65][2] = " Persistencia.";
 choices[65][3] = " Herencia.";
 answers[65] = choices[65][1];
 units[65] = "NULL";
 comments[65] = "Id Pregunta: 7889. Map 2006";


//  Id pregunta: 7972 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)   &iquest;Cu&aacute;l de los siguientes NO es uno de los principios incluidos en el Manifiesto de Desarrollo &Aacute;gil de Software (&laquo;Manifesto for Agile Software Development&raquo;)?";
 choices[66]= new Array();
 choices[66][0] = " Aceptamos requisitos cambiantes solo en las primeras etapas del desarrollo.";
 choices[66][1] = " Los procesos &aacute;giles aprovechan el cambio para proporcionar ventaja competitiva al cliente.";
 choices[66][2] = " Entregamos software frecuentemente, con una periodicidad desde un par de semanas a un par de meses, con preferencia por los per&iacute;odos m&aacute;s cortos posibles.";
 choices[66][3] = " Los responsables de negocio y los desarrolladores deben trabajar juntos diariamente a lo largo del proyecto.";
 answers[66] = choices[66][0];
 units[66] = "NULL";
 comments[66] = "Id Pregunta: 7972. Map 2007";


//  Id pregunta: 8025 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)   &iquest;Cu&aacute;l es el per&iacute;odo m&aacute;ximo de validez de los certificados del DNIe?";
 choices[67]= new Array();
 choices[67][0] = " 24 meses.";
 choices[67][1] = " 5 a&ntilde;os.";
 choices[67][2] = " 30 meses.";
 choices[67][3] = " 4 a&ntilde;os.";
 answers[67] = choices[67][2];
 units[67] = "NULL";
 comments[67] = "Id Pregunta: 8025. Map 2007";


//  Id pregunta: 8074 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)   &iquest;Cu&aacute;l de las afirmaciones siguientes NO es uno de los principios incluidos en el &laquo;Manifiesto &Aacute;gil&raquo; (Manifiesto por el Desarrollo &Aacute;gil de Software)?";
 choices[68]= new Array();
 choices[68][0] = " Aceptamos requisitos cambiantes, excepto en etapas avanzadas.";
 choices[68][1] = " Entregamos software frecuentemente, con una periodicidad desde un par de semanas a un par de meses, con preferencia por los per&iacute;odos m&aacute;s cortos posibles.";
 choices[68][2] = " Las mejores arquitecturas, requisitos y dise&ntilde;os surgen de equipos que se autoorganizan.";
 choices[68][3] = " El m&eacute;todo m&aacute;s eficiente y efectivo de comunicar la informaci&oacute;n a un equipo de desarrollo y entre los miembros del mismo es la conversaci&oacute;n cara a cara.";
 answers[68] = choices[68][0];
 units[68] = "NULL";
 comments[68] = "Id Pregunta: 8074. Map 2008";


//  Id pregunta: 8230 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  En lo relativo a la rentabilidad de las inversiones, &iquest;cu&aacute;l de los siguientes m&eacute;todos es un m&eacute;todo din&aacute;mico de selecci&oacute;n de inversiones?";
 choices[69]= new Array();
 choices[69][0] = "VAN (Valor Actual Neto). ";
 choices[69][1] = "El m&eacute;todo del flujo total por unidad monetaria comprometida.";
 choices[69][2] = "El m&eacute;todo de comparaci&oacute;n de costes.";
 choices[69][3] = "El m&eacute;todo del payback";
 answers[69] = choices[69][0];
 units[69] = "38";
 comments[69] = "Id Pregunta: 8230. Examen TIC A2 2010";


//  Id pregunta: 8265 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  En un acuerdo marco en vigor, la licitaci&oacute;n simplificada puede limitarse a s&oacute;lo tres empresas de entre las firmantes del acuerdo:";
 choices[70]= new Array();
 choices[70][0] = "Cuando la duraci&oacute;n m&aacute;xima de acuerdo sea inferior a un a&ntilde;o.";
 choices[70][1] = "Cuando el importe de licitaci&oacute;n sea inferior al mill&oacute;n de euros.";
 choices[70][2] = "Cuando la tramitaci&oacute;n se haya declarado urgente.";
 choices[70][3] = "Cuando el contrato a adjudicar no est&eacute; sujeto a regulaci&oacute;n armonizada.";
 answers[70] = choices[70][3];
 units[70] = "41";
 comments[70] = "Id Pregunta: 8265. Examen TIC A1 2010";


//  Id pregunta: 8277 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  Seg&uacute;n el RD 951/2005 de 29 de julio, el marco general para la mejora de la calidad en la AGE, NO incluye entre sus programas:";
 choices[71]= new Array();
 choices[71][0] = "An&aacute;lisis de la demanda y evaluaci&oacute;n de la satisfacci&oacute;n de los usuarios.";
 choices[71][1] = "Reconocimiento (certificaci&oacute;n de organizaciones y premios).";
 choices[71][2] = "Observatorio de la calidad de los servicios p&uacute;blicos.";
 choices[71][3] = "Quejas y reclamaciones.";
 answers[71] = choices[71][3];
 units[71] = "87";
 comments[71] = "Id Pregunta: 8277. Examen TIC A1 2010";


//  Id pregunta: 8290 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  Respecto al protocolo ligero de acceso a directorios (LDAPv3):";
 choices[72]= new Array();
 choices[72][0] = "No admite TCP/IP.";
 choices[72][1] = "No es un protocolo abierto.";
 choices[72][2] = "No requiere X.500.";
 choices[72][3] = "Ninguna de las anteriores es correcta.";
 answers[72] = choices[72][2];
 units[72] = "74";
 comments[72] = "Id Pregunta: 8290. Examen TIC A2 2010";


//  Id pregunta: 8292 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de los siguientes NO se encuentra entre los elementos de un Sistema de Gesti&oacute;n de Red?";
 choices[73]= new Array();
 choices[73][0] = "Gestor DHCP.";
 choices[73][1] = "MIB.";
 choices[73][2] = "Agente-SMAP.";
 choices[73][3] = "NMS.";
 answers[73] = choices[73][0];
 units[73] = "104";
 comments[73] = "Id Pregunta: 8292. Examen TIC A2 2010";


//  Id pregunta: 8379 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  Una copia de seguridad que incluye todos los archivos creados o modificados desde la &uacute;ltima copia completa, sin marcarlos individualmente como copiados, es una copia de seguridad:";
 choices[74]= new Array();
 choices[74][0] = "Acumulativa.";
 choices[74][1] = "Intermedia.";
 choices[74][2] = "Incremental.";
 choices[74][3] = "Diferencial.";
 answers[74] = choices[74][3];
 units[74] = "96";
 comments[74] = "Id Pregunta: 8379. Examen TIC A2 2010";


//  Id pregunta: 8414 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  COBOL es el acr&oacute;nimo de: ";
 choices[75]= new Array();
 choices[75][0] = "COmputer BUsiness-Oriented Language (Lenguaje de Ordenador Orientado a Negocios). ";
 choices[75][1] = "COmmon Business-Oriented Language (Lenguaje Com&uacute;n Orientado a Negocios). ";
 choices[75][2] = "Common Object Business Oriented Language (Lenguaje Com&uacute;n Orientado a Objetos de Negocio). ";
 choices[75][3] = "No es un acr&oacute;nimo.";
 answers[75] = choices[75][1];
 units[75] = "57";
 comments[75] = "Id Pregunta: 8414. Examen TIC A2 2010";


//  Id pregunta: 8451 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  El est&aacute;ndar 802.11b mas conocido como Wifi, trabaja en la banda libre de:";
 choices[76]= new Array();
 choices[76][0] = "2.4 GHz";
 choices[76][1] = "2.4 MHz";
 choices[76][2] = "2.4 THz";
 choices[76][3] = "2 GHz";
 answers[76] = choices[76][0];
 units[76] = "107";
 comments[76] = "Id Pregunta: 8451. Analista Ayto. Madrid 2010";


//  Id pregunta: 8523 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  &iquest;Qu&eacute; tama&ntilde;o tiene una celda ATM?";
 choices[77]= new Array();
 choices[77][0] = "48 bytes, de los cuales 44 son para transmisi&oacute;n de informaci&oacute;n y, el resto, para uso de campos de control.";
 choices[77][1] = "El campo de direcci&oacute;n o cabecera tiene una longitud de 2 octetos, ampiable hasta 4 y un campo de informaci&oacute;n de entre 1 y 8000 bytes (1600 por defecto).";
 choices[77][2] = "Los doce primeros octetos est&aacute;n presentes en cada celda, como cabecera de control, con un cuerpo de informaci&oacute;n de longitud variable.";
 choices[77][3] = "53 bytes, de los cuales 48 (opcionalmente 44) son para trasiego de informaci&oacute;n y, los restantes, para uso de campos de control (cabecera) con datos de direccionamiento";
 answers[77] = choices[77][3];
 units[77] = "109";
 comments[77] = "Id Pregunta: 8523. Examen TIC A2 2010 interna";


//  Id pregunta: 8803 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  En el contexto de la Web 2.0, a la p&aacute;gina Web o aplicaci&oacute;n que usa o combina datos, presentaciones y funcionalidad procedentes de una o m&aacute;s fuentes para crear nuevos servicios, se conoce como";
 choices[78]= new Array();
 choices[78][0] = "folcsonom&iacute;a";
 choices[78][1] = "mashup";
 choices[78][2] = "podcast";
 choices[78][3] = "Wiki";
 answers[78] = choices[78][1];
 units[78] = "120";
 comments[78] = "Id Pregunta: 8803. Examen UPM A2 2011";


//  Id pregunta: 8942 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  &iquest;Cu&aacute;les de las siguientes no tendr&aacute;n la consideraci&oacute;n de copias aut&eacute;nticas seg&uacute;n la ley 18/2011?";
 choices[79]= new Array();
 choices[79][0] = "Las copias realizadas en soporte papel de documentos judiciales electr&oacute;nicos y firmados electr&oacute;nicamente por el secretario judicial que incluyan la impresi&oacute;n de un c&oacute;digo seguro de verificaci&oacute;n que permita contrastar su autenticidad";
 choices[79][1] = "Las copias realizadas por las oficinas judiciales, utilizando medios electr&oacute;nicos, de documentos emitidos originalmente por ellas en soporte papel";
 choices[79][2] = "Las copias realizadas por las oficinas judiciales, utilizando medios electr&oacute;nicos, de documentos emitidos por el interesado en soporte papel";
 choices[79][3] = "Las copias realizadas por medios electr&oacute;nicos de documentos electr&oacute;nicos emitidos por el propio interesado estando el documento electr&oacute;nico original en poder de la oficina judicial donde haya sido originado o incorporado y que la informaci&oacute;n de firma electr&oacute;nica y, en su caso, de sellado de tiempo permitan comprobar la coincidencia con dicho documento";
 answers[79] = choices[79][2];
 units[79] = "43";
 comments[79] = "Id Pregunta: 8942. ";


//  Id pregunta: 8956 AÃ±o de creación de pregunta: 2011-01-01
 questions[80]= "81)  En Inteligencia artificial existe varias clasificaciones en cuanto a los m&eacute;todos de b&uacute;squeda. De lso siguientes &iquest;cu&aacute;l pertenece  a la clasificaci&oacute;n  de Mejora Iterativa?";
 choices[80]= new Array();
 choices[80][0] = "B&uacute;squeda Greedy";
 choices[80][1] = "B&uacute;squeda en profundidad iterativa";
 choices[80][2] = "Algoritmo A*";
 choices[80][3] = "Escalada por m&aacute;xima pendiente";
 answers[80] = choices[80][3];
 units[80] = "63";
 comments[80] = "Id Pregunta: 8956. ";


//  Id pregunta: 9144 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  &iquest;C&oacute;mo es el conector SAS?";
 choices[81]= new Array();
 choices[81][0] = "El mismo que en la interfaz SATA y permite utilizar estos discos duros para aplicaciones con m&aacute;s necesidades de velocidad.";
 choices[81][1] = "El mismo que en la interfaz SATA y permite utilizar estos discos duros para aplicaciones con menos necesidad de velocidad, aunque con mayor costo.";
 choices[81][2] = "No tiene nada que ver con la interfaz SATA";
 choices[81][3] = "El mismo que en la interfaz SATA y permite utilizar estos discos duros para aplicaciones con menos necesidad de velocidad, pero con ahorro de costos.";
 answers[81] = choices[81][3];
 units[81] = "47";
 comments[81] = "Id Pregunta: 9144. ";


//  Id pregunta: 9174 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  Si hablamos de UBL, &iquest;cu&aacute;l de las siguientes afirmaciones es INCORRECTA?";
 choices[82]= new Array();
 choices[82][0] = "Fue desarrollado por OASIS";
 choices[82][1] = "Es una librer&iacute;a est&aacute;ndar de documentos XML dedicada a la representaci&oacute;n de facturas ";
 choices[82][2] = "Est&aacute; basada en el concepto de Core Components";
 choices[82][3] = "El desarrollo de su variante NES, NESUBL, es la base del proyecto PEPPOL de contrataci&oacute;n online paneuropea";
 answers[82] = choices[82][1];
 units[82] = "70";
 comments[82] = "Id Pregunta: 9174. ";


//  Id pregunta: 9328 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  &iquest;C&uacute;al de los siguientes aspectos NO se recogen en las";
 choices[83]= new Array();
 choices[83][0] = "El cableado deber&aacute; estar de acuerdo con los requerimientos de nivel f&iacute;sico de la iso 80211";
 choices[83][1] = "El cableado deber&aacute; estar de acuerdo con los requerimientos de nivel f&iacute;sico de la iso 8802";
 choices[83][2] = "Se deber&aacute; detallar la ubicaci&oacute;n de equipos activos en el cableado de backbone";
 choices[83][3] = "Se debe detallar el n&uacute;mero de z&oacute;calos del cableado horizontal";
 answers[83] = choices[83][3];
 units[83] = "99";
 comments[83] = "Id Pregunta: 9328. NULL";


//  Id pregunta: 9371 AÃ±o de creación de pregunta: 2013-01-01
 questions[84]= "85)  E-Line:";
 choices[84]= new Array();
 choices[84][0] = "Es un servicio que ofrecen los operadores de fibra de lineas dedicadas.";
 choices[84][1] = "Es un mecanismo para proporcionar comunicaciones punto a punto mediante t&uacute;neles IPSec.";
 choices[84][2] = "Es un mecanismo para proporcionar comunicaciones punto a punto, encapsulando el tr&aacute;fico Ethernet dentro de un tunel MPLS.";
 choices[84][3] = "Es un mecanismo para comunicar dos computadoras mediante PPP.";
 answers[84] = choices[84][2];
 units[84] = "101";
 comments[84] = "Id Pregunta: 9371. ";


//  Id pregunta: 9850 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  El proceso mediante el cual un usuario se autentica una vez en el sistema de la organizaci&oacute;n y es capaz de acceder al resto de servicios se denomina:";
 choices[85]= new Array();
 choices[85][0] = "Single Login On";
 choices[85][1] = "Simple Login On";
 choices[85][2] = "Single Sign On";
 choices[85][3] = "Simple Sign On";
 answers[85] = choices[85][2];
 units[85] = "118";
 comments[85] = "Id Pregunta: 9850. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 10214 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Tres alternativas A, B y C han obtenido respectivamente las puntuaciones directas 300, 450 y 250 respecto de un criterio. Seg&uacute;n el m&eacute;todo de fracci&oacute;n del ideal, &iquest;qu&eacute; puntuaci&oacute;n normalizada corresponde a la alternativa A?";
 choices[86]= new Array();
 choices[86][0] = "0,25 puntos";
 choices[86][1] = "0,75 puntos";
 choices[86][2] = "0,33 puntos";
 choices[86][3] = "0,66 puntos";
 answers[86] = choices[86][0];
 units[86] = "34";
 comments[86] = "Id Pregunta: 10214. Puntuaci&oacute;n normalizada por factor del ideal = (puntuacion - puntuacion_min) / (puntuacion_max - puntuacion_min) = (300 - 250) / (450 - 250) = 0,25";


//  Id pregunta: 10259 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  El derecho de oposici&oacute;n al tratamiento de datos de car&aacute;cter personal tiene sentido:";
 choices[87]= new Array();
 choices[87][0] = "Para los ficheros mencionados en b) y c)";
 choices[87][1] = "Para ficheros que recojan datos de car&aacute;cter personal y no sea preciso el consentimiento del afectado para realizar el tratamiento";
 choices[87][2] = "Para ficheros que recojan datos de car&aacute;cter personal y tengan por objeto realizar actividades de prospecci&oacute;n comercial";
 choices[87][3] = "Para todo tipo de ficheros que recojan datos de car&aacute;cter personal";
 answers[87] = choices[87][0];
 units[87] = "29";
 comments[87] = "Id Pregunta: 10259. Art&iacute;culo 34 a) y b) del RD 1720/2007";


//  Id pregunta: 10592 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  La LOPD:";
 choices[88]= new Array();
 choices[88][0] = "Desarrolla el art&iacute;culo 17.4 de la Constituci&oacute;n Espa&ntilde;ola";
 choices[88][1] = "A y C son correctas";
 choices[88][2] = "Es la transposici&oacute;n de la Directiva 95/46/CE";
 choices[88][3] = "A y C son incorrectas.";
 answers[88] = choices[88][2];
 units[88] = "29";
 comments[88] = "Id Pregunta: 10592. ";


//  Id pregunta: 10712 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l no es seg&uacute;n la NTI de Modelo de Datos para el Intercambio de asientos entre las entidades registrales una caracter&iacute;stica de la misma?";
 choices[89]= new Array();
 choices[89][0] = "Inclusi&oacute;n de metadatos que faciliten el intercambio de asientos.";
 choices[89][1] = "Incorporaci&oacute;n de ficheros adjuntos a los intercambios.";
 choices[89][2] = "Orientaci&oacute;n a arquitecturas de intermediaci&oacute;n.";
 choices[89][3] = "Mejora en los mecanismos de control del intercambio.";
 answers[89] = choices[89][0];
 units[89] = "43";
 comments[89] = "Id Pregunta: 10712. ";


//  Id pregunta: 10802 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l de las siguientes respuestas NO se considera una de las cuatro primitivas de servicio que define el modelo OSI de ISO para la comunicaci&oacute;n entre niveles?";
 choices[90]= new Array();
 choices[90][0] = "Request.";
 choices[90][1] = "Invoke.";
 choices[90][2] = "Response.";
 choices[90][3] = "Confirmation.";
 answers[90] = choices[90][1];
 units[90] = "100";
 comments[90] = "Id Pregunta: 10802. Examen GSI 2014";


//  Id pregunta: 10962 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Respecto al formato de factura electr&oacute;nica Facturae 3.2, se&ntilde;ale la respuesta correcta:";
 choices[91]= new Array();
 choices[91][0] = "Es de tipo PDF-A, para facilitar su impresi&oacute;n.";
 choices[91][1] = "Es un formato certificado con la Norma SICRES 3.0, para la compatibilidad e interconexi&oacute;n de los Registros Contables de Facturas.";
 choices[91][2] = "Es un formato no estructurado compuesto por dos bloques obligatorios y cuatro opcionales.";
 choices[91][3] = "Incluye firma Electr&oacute;nica en XML Advanced Electronic Signature (XADES)";
 answers[91] = choices[91][3];
 units[91] = "70";
 comments[91] = "Id Pregunta: 10962. TIC A1 AGE 2014";


//  Id pregunta: 11004 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  En el modelo Entidad/Relaci&oacute;n, y dada una jerarqu&iacute;a obligatoria disjunta, indicar cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[92]= new Array();
 choices[92][0] = "No es necesario que toda ocurrencia del supertipo se encuentre en al menos uno de los subtipos.";
 choices[92][1] = "Es necesario que toda ocurrencia del supertipo se encuentre en uno solo de los subtipos.";
 choices[92][2] = "Es necesario que toda ocurrencia del supertipo se encuentre en todos los subtipos.";
 choices[92][3] = "Es necesario que toda ocurrencia del supertipo se encuentre en al menos uno de los subtipos.";
 answers[92] = choices[92][1];
 units[92] = "80";
 comments[92] = "Id Pregunta: 11004. TIC A1 AGE 2014";


//  Id pregunta: 11135 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Qu&eacute; comando de UNIX muestra la ruta al directorio de trabajo?";
 choices[93]= new Array();
 choices[93][0] = "Ls";
 choices[93][1] = "Pwd";
 choices[93][2] = "Tree";
 choices[93][3] = "Cd /home";
 answers[93] = choices[93][1];
 units[93] = "54";
 comments[93] = "Id Pregunta: 11135. ";


//  Id pregunta: 11178 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de los siguientes componentes es de nivel 2?";
 choices[94]= new Array();
 choices[94][0] = "Repetidores";
 choices[94][1] = "Puentes";
 choices[94][2] = "Enrutadores";
 choices[94][3] = "Concentradores";
 answers[94] = choices[94][1];
 units[94] = "102";
 comments[94] = "Id Pregunta: 11178. ";


//  Id pregunta: 11220 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de las siguientes no es una tecnolog&iacute;a de Microsoft .NET?";
 choices[95]= new Array();
 choices[95][0] = "Servicios: ASP.NET y WCF.";
 choices[95][1] = "Aplicaciones de escritorio: WinForms, WPF.";
 choices[95][2] = "Aplicaciones para dispositivos m&oacute;viles: Silverlait, WinFX.";
 choices[95][3] = "Aplicaciones en la nube: Azure.";
 answers[95] = choices[95][2];
 units[95] = "59";
 comments[95] = "Id Pregunta: 11220. ";


//  Id pregunta: 11331 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  De los servicios Java, indique la afirmaci&oacute;n que NO es correcta";
 choices[96]= new Array();
 choices[96][0] = "JPA ha reemplazado a los Entity beans, que desaparecieron en la versi&oacute;n 5 de Java";
 choices[96][1] = "JNI se utiliza para el acceso a directorios";
 choices[96][2] = "JAX-WS hace que la creaci&oacute;n de Web Services en Java sea m&aacute;s sencilla";
 choices[96][3] = "JAXP permite el acceso a ficheros XML";
 answers[96] = choices[96][1];
 units[96] = "116";
 comments[96] = "Id Pregunta: 11331. Es JNDI el que se corresponde con esa descripci&oacute;n";


//  Id pregunta: 11463 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Seg&uacute;n la Ley 9/2014, los costes derivados de la actualizaci&oacute;n de los elementos de la red y de los sistemas necesarios para hacer posible la conservaci&oacute;n de los n&uacute;meros que deber&aacute;n ser sufragados por:";
 choices[97]= new Array();
 choices[97][0] = "El Gobierno.";
 choices[97][1] = "El usuario a trav&eacute;s de la cuota de l&iacute;nea.";
 choices[97][2] = "Cada operador.";
 choices[97][3] = "Entre cada operador y los usuarios.";
 answers[97] = choices[97][2];
 units[97] = "110";
 comments[97] = "Id Pregunta: 11463. ";


//  Id pregunta: 11497 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;En qu&eacute; casos puede sustituirse el requisito de solvencia por el de clasifiaci&oacute;n?";
 choices[98]= new Array();
 choices[98][0] = "Contratos de obras cuyo valor estimado sea igual o superior a 500.000 &euro;.";
 choices[98][1] = "Contratos de servicios cuyo valor estimado sea igual o superior a 200.000 &euro;.";
 choices[98][2] = "En los 2 casos anteriores.";
 choices[98][3] = "En ninguno de los casos anteriores.";
 answers[98] = choices[98][2];
 units[98] = "38";
 comments[98] = "Id Pregunta: 11497. NULL";


//  Id pregunta: 11588 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Los contratos de servicios de los organismos aut&oacute;nomos se encuentran sujetos a regulaci&oacute;n armonizada cuando su importe es igual o superior a:";
 choices[99]= new Array();
 choices[99][0] = "50000";
 choices[99][1] = "134000";
 choices[99][2] = "207000";
 choices[99][3] = "862000";
 answers[99] = choices[99][1];
 units[99] = "41";
 comments[99] = "Id Pregunta: 11588. ";


