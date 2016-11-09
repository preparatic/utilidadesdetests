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

//  Id pregunta: 850 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes no es una herramienta de gesti&oacute;n de contenidos web (CMS)?:";
 choices[0]= new Array();
 choices[0][0] = "ZOPE";
 choices[0][1] = "Easy Web";
 choices[0][2] = "Content Management Server";
 choices[0][3] = "Vignette";
 answers[0] = choices[0][1];
 units[0] = "95";
 comments[0] = "Id Pregunta: 850. NULL";


//  Id pregunta: 1474 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  PDF se corresponde con:";
 choices[1]= new Array();
 choices[1][0] = "Portable Digital Format, Formato Digital Portable";
 choices[1][1] = "Portable Data Format, Formato de Datos Portables";
 choices[1][2] = "Portable Document Format, Formato de Documento Portable";
 choices[1][3] = "Pseudo-compatibility Data Format, Formato de Datos para la Compatibilidad ";
 answers[1] = choices[1][2];
 units[1] = "93";
 comments[1] = "Id Pregunta: 1474. NULL";


//  Id pregunta: 1986 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l de los siguientes es un principio de especificaci&oacute;n del software de acuerdo con R.S. Pressman?:";
 choices[2]= new Array();
 choices[2][0] = "Separar funcionalidad de implementaci&oacute;n";
 choices[2][1] = "La especificaci&oacute;n del sistema debe ser tolerante a la incompletitud y ampliable";
 choices[2][2] = "Una especificaci&oacute;n debe ser operativa";
 choices[2][3] = "Todos los anteriores son principios de especificaci&oacute;n del software";
 answers[2] = choices[2][3];
 units[2] = "78";
 comments[2] = "Id Pregunta: 1986. ";


//  Id pregunta: 1999 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  En el modelo COCOMO de estimaci&oacute;n de esfuerzo de desarrollo de software, se distingue una jerarqu&iacute;a de modelos de estimaci&oacute;n. E esta jerarqu&iacute;a el modelo b&aacute;sico corresponde a:";
 choices[3]= new Array();
 choices[3][0] = "C&aacute;lculo del esfuerzo en funci&oacute;n de las l&iacute;neas de c&oacute;digo a desarrollar";
 choices[3][1] = "C&aacute;lculo del esfuerzo en funci&oacute;n de las l&iacute;neas de c&oacute;digo a desarrollar y de unos factores correctores";
 choices[3][2] = "C&aacute;lculo del esfuerzo de las l&iacute;neas de c&oacute;digo a desarrollar y de la etapa del ciclo de vida del sistema";
 choices[3][3] = "C&aacute;lculo del esfuerzo en funci&oacute;n de las l&iacute;neas de c&oacute;digo a desarrollar y del hardware usado";
 answers[3] = choices[3][0];
 units[3] = "89";
 comments[3] = "Id Pregunta: 1999. NULL";


//  Id pregunta: 2009 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  Las pruebas que se realizan con los componentes modificados con el fin de comprobar que no introducen ning&uacute;n error adicional en los componentes no modificados se denominan:";
 choices[4]= new Array();
 choices[4][0] = "Pruebas unitarias";
 choices[4][1] = "Pruebas de sistema";
 choices[4][2] = "Pruebas de regresi&oacute;n";
 choices[4][3] = "Pruebas de aceptaci&oacute;n";
 answers[4] = choices[4][2];
 units[4] = "86";
 comments[4] = "Id Pregunta: 2009. Similar a examen TIC SS A 2004";


//  Id pregunta: 2019 AÃ±o de creación de pregunta: 2004-01-01
 questions[5]= "6)  En el dise&ntilde;o estructurado, se&ntilde;ale la definici&oacute;n correcta de FAN-OUT.";
 choices[5]= new Array();
 choices[5][0] = "Es el n&uacute;mero de superordinados inmediatos de un m&oacute;dulo.";
 choices[5][1] = "Es el n&uacute;mero de subordinados inmediatos de un m&oacute;dulo.";
 choices[5][2] = "Es el n&uacute;mero de m&oacute;dulos que hay que compilar antes del m&oacute;dulo.";
 choices[5][3] = "Es el n&uacute;mero de par&aacute;metros de salida que tiene un m&oacute;dulo.";
 answers[5] = choices[5][1];
 units[5] = "84";
 comments[5] = "Id Pregunta: 2019. Examen TIC MAP B 2004";


//  Id pregunta: 2026 AÃ±o de creación de pregunta: 2004-01-01
 questions[6]= "7)  En el &aacute;mbito de las tecnolog&iacute;as multimedia, se&ntilde;ale cu&aacute;l de los siguientes formatos corresponder&iacute;a a una imagen con &quot;formato de gr&aacute;fico vectorial&quot;:";
 choices[6]= new Array();
 choices[6][0] = "Graphical Interchange Format (GIF)";
 choices[6][1] = "Windows Metafile Format (WMF)";
 choices[6][2] = "Portable Network Graphics (PNG)";
 choices[6][3] = "Windows Bitmap (BMP)";
 answers[6] = choices[6][1];
 units[6] = "93";
 comments[6] = "Id Pregunta: 2026. Examen TIC MAP B 2004";


//  Id pregunta: 2043 AÃ±o de creación de pregunta: 2004-01-01
 questions[7]= "8)  &iquest;Cu&aacute;ntos criterios y subcriterios de calidad considera el Modelo de Excelencia de la EFQM?";
 choices[7]= new Array();
 choices[7][0] = "Considera 9 criterios y 32 subcriterios";
 choices[7][1] = "Considera 11 criterios y 23 subcriterios, de forma an&aacute;loga a los factores y criterios de calidad del Modelo de McCall";
 choices[7][2] = "El modelo de la EFQM solo considera criterios de calidad, en concreto ocho criterios";
 choices[7][3] = "El modelo de la EFQM no habla de criterios y subcriterios, sino de factores de calidad y criterios de calidad, y considera 8 factores y 36 criterios";
 answers[7] = choices[7][0];
 units[7] = "92";
 comments[7] = "Id Pregunta: 2043. NULL";


//  Id pregunta: 2061 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  La medida del cumplimiento de los objetivos del organismo y de los requisitos de los usuarios de un sistema de informaci&oacute;n se conoce como:";
 choices[8]= new Array();
 choices[8][0] = "Eficiencia";
 choices[8][1] = "Correspondencia";
 choices[8][2] = "Eficacia";
 choices[8][3] = "Capacidad";
 answers[8] = choices[8][2];
 units[8] = "77";
 comments[8] = "Id Pregunta: 2061. ";


//  Id pregunta: 2088 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l no es un requisito para un software de tiempo real?";
 choices[9]= new Array();
 choices[9][0] = "Predecible.";
 choices[9][1] = "Encapsulado.";
 choices[9][2] = "Fiable.";
 choices[9][3] = "F&aacute;cil de mantener.";
 answers[9] = choices[9][1];
 units[9] = "83";
 comments[9] = "Id Pregunta: 2088. ";


//  Id pregunta: 2101 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  En un sistema transaccional, se liberan los registros intervinientes en una transacci&oacute;n:";
 choices[10]= new Array();
 choices[10][0] = "S&oacute;lo cuando la actualizaci&oacute;n tiene lugar en varias bases de datos.";
 choices[10][1] = "Cuando acaba la rutina que los actualiza.";
 choices[10][2] = "Cuando otra transacci&oacute;n los intenta bloquear para actualizarlos.";
 choices[10][3] = "Cuando la aplicaci&oacute;n indica que la transacci&oacute;n ha terminado.";
 answers[10] = choices[10][3];
 units[10] = "57,58,83";
 comments[10] = "Id Pregunta: 2101. ";


//  Id pregunta: 2347 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  En relaci&oacute;n con la t&eacute;cnica del prototipado, &iquest;qu&eacute; es falso?:";
 choices[11]= new Array();
 choices[11][0] = "Se facilita la comunicaci&oacute;n con el usuario";
 choices[11][1] = "Permite que el proceso de aprendizaje sea m&aacute;s r&aacute;pido";
 choices[11][2] = "Facilita el trabajo con especificaciones incompletas";
 choices[11][3] = "Aumenta los costes de implementaci&oacute;n";
 answers[11] = choices[11][3];
 units[11] = "85";
 comments[11] = "Id Pregunta: 2347. ";


//  Id pregunta: 2350 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  En un diagrama de flujo de datos:";
 choices[12]= new Array();
 choices[12][0] = "Una entidad externa puede aparecer en cualquier diagrama de cualquier nivel";
 choices[12][1] = "Una entidad externa nunca se relaciona mediante un flujo directamente con un almac&eacute;n de datos";
 choices[12][2] = "Se entiende por 'cuadre de flujos netos' el que un proceso tenga el mismo n&uacute;mero de flujos de entrada que de salida";
 choices[12][3] = "Son ciertas las respuestas 'a' y 'b'";
 answers[12] = choices[12][3];
 units[12] = "81";
 comments[12] = "Id Pregunta: 2350. ";


//  Id pregunta: 2363 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Entre los elementos de un diagrama de flujo de datos tenemos:";
 choices[13]= new Array();
 choices[13][0] = "Entidad externa, proceso, almac&eacute;n de datos y diagrama general";
 choices[13][1] = "Entidad externa, almac&eacute;n de datos y flujo de datos";
 choices[13][2] = "Entidad externa, almac&eacute;n de datos, proceso y flujo de datos";
 choices[13][3] = "Almac&eacute;n de datos, proceso, flujo de datos y diagrama general";
 answers[13] = choices[13][2];
 units[13] = "81";
 comments[13] = "Id Pregunta: 2363. ";


//  Id pregunta: 2377 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  EXCELERATOR, SADT, TAGS..., son herramientas para:";
 choices[14]= new Array();
 choices[14][0] = "Confecci&oacute;n de prototipos";
 choices[14][1] = "An&aacute;lisis de requerimientos";
 choices[14][2] = "Auditor&iacute;a de Sistemas de Informaci&oacute;n";
 choices[14][3] = "Ninguna de las anteriores es cierta";
 answers[14] = choices[14][1];
 units[14] = "78";
 comments[14] = "Id Pregunta: 2377. ";


//  Id pregunta: 2412 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  De los siguientes est&aacute;ndares de comprensi&oacute;n de datos, se&ntilde;alar aquel que se basa en la denominada transformaci&oacute;n discreta del coseno:";
 choices[15]= new Array();
 choices[15][0] = "JPEG";
 choices[15][1] = "LZW";
 choices[15][2] = "RLE";
 choices[15][3] = "JPEG 2000";
 answers[15] = choices[15][0];
 units[15] = "93";
 comments[15] = "Id Pregunta: 2412. NULL";


//  Id pregunta: 2436 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  La versi&oacute;n 3 de la metodolog&iacute;a M&eacute;trica:";
 choices[16]= new Array();
 choices[16][0] = "Cubre tanto desarrollos estructurados como desarrollos orientados a objetos ";
 choices[16][1] = "Cubre exclusivamente desarrollos estructurados";
 choices[16][2] = "Cubre exclusivamente desarrollos orientados a objetos";
 choices[16][3] = "Cubre exclusivamente desarrollos orientados a entornos microinform&aacute;ticos";
 answers[16] = choices[16][0];
 units[16] = "86";
 comments[16] = "Id Pregunta: 2436. NULL";


//  Id pregunta: 2478 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Por configuraci&oacute;n se entiende:";
 choices[17]= new Array();
 choices[17][0] = "Actividad que tiene por objeto la evaluaci&oacute;n de conformidad de dise&ntilde;os, productos software, procesos o sistema.";
 choices[17][1] = "Proceso por el que el sistema de calidad de una empresa es auditado para comprobar el cumplimiento de determinadas normas.";
 choices[17][2] = "Descripci&oacute;n completa de un producto software y las interrelaciones de sus elementos.";
 choices[17][3] = "Proceso de determinaci&oacute;n de correcci&oacute;n de los  productos de una fase de desarrollo con respecto a los requisitos establecidos en la fase anterior.";
 answers[17] = choices[17][2];
 units[17] = "90";
 comments[17] = "Id Pregunta: 2478. ";


//  Id pregunta: 2507 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Un m&eacute;todo orientado a los procesos es:";
 choices[18]= new Array();
 choices[18][0] = "Modelo Entidad-Relaci&oacute;n";
 choices[18][1] = "Dise&ntilde;o Estructurado de Jackson";
 choices[18][2] = "An&aacute;lisis de flujo de datos";
 choices[18][3] = "An&aacute;lisis relacional de datos (COOD)";
 answers[18] = choices[18][2];
 units[18] = "81";
 comments[18] = "Id Pregunta: 2507. ";


//  Id pregunta: 2514 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Uno de los m&eacute;todos utilizados para la identificaci&oacute;n de objetos es:";
 choices[19]= new Array();
 choices[19][0] = "Tarjetas CRC";
 choices[19][1] = "An&aacute;lisis l&eacute;xico";
 choices[19][2] = "Contraste de modelos";
 choices[19][3] = "Todas las anteriores son ciertas";
 answers[19] = choices[19][3];
 units[19] = "82";
 comments[19] = "Id Pregunta: 2514. ";


//  Id pregunta: 2535 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  La codificaci&oacute;n progresiva es una t&eacute;cnica usada en la comprensi&oacute;n de im&aacute;genes basada en:";
 choices[20]= new Array();
 choices[20][0] = "La proximidad espacial (la poca variaci&oacute;n entre pixels contiguos)";
 choices[20][1] = "La proximidad temporal (la poca variaci&oacute;n entre im&aacute;genes temporalmente consecutivas)";
 choices[20][2] = "La relevancia de la informaci&oacute;n";
 choices[20][3] = "T&eacute;cnicas aleatorias";
 answers[20] = choices[20][2];
 units[20] = "93";
 comments[20] = "Id Pregunta: 2535. NULL";


//  Id pregunta: 2549 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Un programa de reconocimiento de voz:";
 choices[21]= new Array();
 choices[21][0] = "Es independiente de la persona que lo use";
 choices[21][1] = "Necesita un entrenamiento para adaptarse a la persona que lo use";
 choices[21][2] = "Entiende cualquier vocabulario e idioma una vez que es configurado, ya que s&oacute;lo se basa en adaptaci&oacute;n al tono y altura de la voz que recibe";
 choices[21][3] = "Todo lo anterior es falso";
 answers[21] = choices[21][1];
 units[21] = "94";
 comments[21] = "Id Pregunta: 2549. ";


//  Id pregunta: 2627 AÃ±o de creación de pregunta: 2003-01-01
 questions[22]= "23)  &iquest;En qu&eacute; diagramas se representan los tipos de elementos nodos y conexiones?";
 choices[22]= new Array();
 choices[22][0] = "Diagrama de despliegue.";
 choices[22][1] = "Diagrama de componentes.";
 choices[22][2] = "Diagrama de descomposici&oacute;n.";
 choices[22][3] = "Diagrama de estructura.";
 answers[22] = choices[22][0];
 units[22] = "82,84";
 comments[22] = "Id Pregunta: 2627. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 2651 AÃ±o de creación de pregunta: 2003-01-01
 questions[23]= "24)  Indique cu&aacute;l no es un resultado del modelo EFQM";
 choices[23]= new Array();
 choices[23][0] = "Satisfacci&oacute;n del cliente";
 choices[23][1] = "Impacto en la sociedad";
 choices[23][2] = "Obtenci&oacute;n de la estrategia";
 choices[23][3] = "Satisfacci&oacute;n del personal";
 answers[23] = choices[23][2];
 units[23] = "92";
 comments[23] = "Id Pregunta: 2651. NULL";


//  Id pregunta: 2657 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  Un diagrama de contexto, utilizado como mecanismo de an&aacute;lisis estructurado, debe contener s&oacute;lo dos tipos de componentes siguientes";
 choices[24]= new Array();
 choices[24][0] = "Entidad externa y almacenes de datos";
 choices[24][1] = "Almac&eacute;n de datos y burbujas de proceso";
 choices[24][2] = "Burbujas de proceso y entidades externas";
 choices[24][3] = "Burbuja de proceso y almacenes de datos";
 answers[24] = choices[24][2];
 units[24] = "86";
 comments[24] = "Id Pregunta: 2657. ";


//  Id pregunta: 2663 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  El nivel ac&uacute;stico:";
 choices[25]= new Array();
 choices[25][0] = "Analiza las caracter&iacute;sticas f&iacute;sicas de la se&ntilde;al vocal, tales como la frecuencia fundamen-tal, los formantes, las transiciones, etc.";
 choices[25][1] = "Determina los objetos sonoros elementales, tales como los fonemas, las s&iacute;labas o los ruidos simples.";
 choices[25][2] = "Tambi&eacute;n llamado fon&eacute;tico distintivo, determina el n&uacute;mero preciso de sonidos con valor distinto.";
 choices[25][3] = "Empieza la abstracci&oacute;n y en se aplican reglas gramaticales al conjunto de sonidos a identificar.";
 answers[25] = choices[25][0];
 units[25] = "94";
 comments[25] = "Id Pregunta: 2663. ";


//  Id pregunta: 2678 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  Formato m&aacute;s utilizado en la actualidad en los Sistemas de Gesti&oacute;n de Contenidos:";
 choices[26]= new Array();
 choices[26][0] = "HTTP.";
 choices[26][1] = "CCS.";
 choices[26][2] = "Excel.";
 choices[26][3] = "XML.";
 answers[26] = choices[26][3];
 units[26] = "95";
 comments[26] = "Id Pregunta: 2678. NULL";


//  Id pregunta: 2732 AÃ±o de creación de pregunta: 2006-01-01
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes no es una metodolog&iacute;a que cubra el desarrollo de planes de sistemas de informaci&oacute;n?";
 choices[27]= new Array();
 choices[27][0] = "M&eacute;trica";
 choices[27][1] = "Racines";
 choices[27][2] = "Method 1";
 choices[27][3] = "Eclipse";
 answers[27] = choices[27][3];
 units[27] = "77";
 comments[27] = "Id Pregunta: 2732. ";


//  Id pregunta: 2745 AÃ±o de creación de pregunta: 2006-01-01
 questions[28]= "29)  &iquest;C&oacute;mo se denomina la estrategia para obtener el diagrama de  un DFD si existe un proceso que en funcion de un flujo de llegada determina la eleccion de uno o m&aacute;s flujos de informacion?";
 choices[28]= new Array();
 choices[28][0] = "An&aacute;lisis de transacci&oacute;n";
 choices[28][1] = "An&aacute;lisis de Transformaci&oacute;n";
 choices[28][2] = "An&aacute;lisis de flujo";
 choices[28][3] = "An&aacute;lisis de Informaci&oacute;n";
 answers[28] = choices[28][0];
 units[28] = "81";
 comments[28] = "Id Pregunta: 2745. ";


//  Id pregunta: 2757 AÃ±o de creación de pregunta: 2006-01-01
 questions[29]= "30)  En el an&aacute;lisis orientado a objetos, una clase que no tenga instancias se denomina:";
 choices[29]= new Array();
 choices[29][0] = "No puede darse";
 choices[29][1] = "Clase padre";
 choices[29][2] = "Subclase";
 choices[29][3] = "Clase abstracta";
 answers[29] = choices[29][3];
 units[29] = "82";
 comments[29] = "Id Pregunta: 2757. ";


//  Id pregunta: 2774 AÃ±o de creación de pregunta: 2006-01-01
 questions[30]= "31)  Uno de los siguientes no es un tipo de flujo de datos que comunica un proceso con un almacen de mensajes. Se&ntilde;&aacute;lelo.";
 choices[30]= new Array();
 choices[30][0] = "De consulta.";
 choices[30][1] = "De control.";
 choices[30][2] = "De di&aacute;logo.";
 choices[30][3] = "De actualizaci&oacute;n.";
 answers[30] = choices[30][1];
 units[30] = "84";
 comments[30] = "Id Pregunta: 2774. ";


//  Id pregunta: 2775 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  Se&ntilde;ale la afirmaci&oacute;n cierta sobre los prototipos...";
 choices[31]= new Array();
 choices[31][0] = "Son un modelo a escala o facs&iacute;mil de lo real que lleva a cabo la totalidad de las funciones necesarias del sistema final.";
 choices[31][1] = "En la fase de dise&ntilde;o se utiliza para definir los requerimientos del usuario.";
 choices[31][2] = "Se debe definir su objetivo a medida que se desarrolla.";
 choices[31][3] = "Los prototipos de pantalla permiten evaluar la posici&oacute;n de informaci&oacute;n sobre la pantalla.";
 answers[31] = choices[31][3];
 units[31] = "85";
 comments[31] = "Id Pregunta: 2775. ";


//  Id pregunta: 2777 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  Sobre la elaboraci&oacute;n de un prototipo es cierto que...";
 choices[32]= new Array();
 choices[32][0] = "El que los usuarios finales vean en el prototipo una versi&oacute;n definitiva del software no es un problema t&iacute;pico de los prototipos desechables.";
 choices[32][1] = "Los prototipos desechables se utilizan en desarrollos en cascada.";
 choices[32][2] = "No se suelen considerar aspectos de calidad pero s&iacute; de facilidad de mantenimiento.";
 choices[32][3] = "El que los usuarios finales vean en el prototipo una versi&oacute;n definitiva del software es un problema t&iacute;pico de los prototipos evolutivos.";
 answers[32] = choices[32][1];
 units[32] = "85";
 comments[32] = "Id Pregunta: 2777. ";


//  Id pregunta: 2840 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  &iquest;En el modelo EFQM qu&eacute; porcentaje se da al liderazgo?";
 choices[33]= new Array();
 choices[33][0] = "15";
 choices[33][1] = "10";
 choices[33][2] = "20";
 choices[33][3] = "9";
 answers[33] = choices[33][1];
 units[33] = "92";
 comments[33] = "Id Pregunta: 2840. NULL";


//  Id pregunta: 2877 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  Indique cu&aacute;l de los siguientes componentes no es considerado por el m&eacute;todo de los puntos de funci&oacute;n de Albrecht, para la estimaci&oacute;n del tama&ntilde;o y del esfuerzo necesarios para desarrollar un sistema software";
 choices[34]= new Array();
 choices[34][0] = "Entradas externas";
 choices[34][1] = "Ficheros l&oacute;gicos internos";
 choices[34][2] = "Atributos del producto";
 choices[34][3] = "Consultas";
 answers[34] = choices[34][2];
 units[34] = "89";
 comments[34] = "Id Pregunta: 2877. NULL";


//  Id pregunta: 4263 AÃ±o de creación de pregunta: 2007-01-01
 questions[35]= "36)  &iquest;Cual de las siguientes afirmaciones es falsa en relacion con las t&eacute;cnicas y pr&aacute;cticas recogidas en Metrica V3?";
 choices[35]= new Array();
 choices[35][0] = "El m&eacute;todo Albretch para el an&aacute;lisis de los puntos de funcion identifica 14 atributos de ajustes al que se le asignan valores de 0 a 5";
 choices[35][1] = "Se  recoge la t&eacute;cnica de gestion de proyectos de diagrama de extrapolaci&oacute;n";
 choices[35][2] = "La t&eacute;cnica Staffing Size se basa en el n&uacute;mero de clases clave y de clases secundarias";
 choices[35][3] = "Se consideran t&eacute;cnicas de sesiones de trabajo el JRP (Joint Requirements Planning) y JAD (Joint Application Design)";
 answers[35] = choices[35][3];
 units[35] = "86";
 comments[35] = "Id Pregunta: 4263. NULL";


//  Id pregunta: 4299 AÃ±o de creación de pregunta: 2007-01-01
 questions[36]= "37)  Si est&aacute; utilizando la t&eacute;cnica de despliegue de la funci&oacute;n calidad (DFC) para traducir las necesidades del cliente en requisitos, el an&aacute;lisis de valor:";
 choices[36]= new Array();
 choices[36][0] = "Se emplea para determinar el valor de cada funci&oacute;n requerida por el sistema.";
 choices[36][1] = "Se lleva a cabo para determinar la prioridad relativa de requisitos";
 choices[36][2] = "Sirve para identificar los acontecimientos que el sistema debe producir y consumir.";
 choices[36][3] = "Examina el comportamiento del sistema dentro del contexto de su entorno.";
 answers[36] = choices[36][1];
 units[36] = "78";
 comments[36] = "Id Pregunta: 4299. ";


//  Id pregunta: 4364 AÃ±o de creación de pregunta: 2007-01-01
 questions[37]= "38)  Sea el array [10, 3, 12, 7, 2, 20]. Si se emplea el algoritmo de ordenaci&oacute;n por selecci&oacute;n, despu&eacute;s de tres iteraciones (ordenaci&oacute;n ascendente), el estado del array ser&aacute;";
 choices[37]= new Array();
 choices[37][0] = "[3, 10, 12, 7, 2, 20]";
 choices[37][1] = "[2, 3, 12, 7, 10, 20]";
 choices[37][2] = "[2, 3, 7, 10, 12, 20]";
 choices[37][3] = "[2, 3, 7, 12, 10, 20]";
 answers[37] = choices[37][3];
 units[37] = "";
 comments[37] = "Id Pregunta: 4364. ";


//  Id pregunta: 4392 AÃ±o de creación de pregunta: 2007-01-01
 questions[38]= "39)  Las pruebas alfa:";
 choices[38]= new Array();
 choices[38][0] = "Son pruebas de integraci&oacute;n.";
 choices[38][1] = "Son pruebas de caja transparente";
 choices[38][2] = "Comprueban todo el espacio de ejecuci&oacute;n de un programa.";
 choices[38][3] = "Estiman el porcentaje de errores no detectados.";
 answers[38] = choices[38][2];
 units[38] = "87";
 comments[38] = "Id Pregunta: 4392. NULL";


//  Id pregunta: 4444 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  El modelo CMMi , en su modo Staged establece 5 niveles de madurez. Indique el orden correcto de menor a mayor madurez:";
 choices[39]= new Array();
 choices[39][0] = "Performed, Managed, Defined, Quantitatively Managed, Optimizing";
 choices[39][1] = "Performed, Optimizing, Managed, Defined, Quantitatively Managed";
 choices[39][2] = "Performed, Defined, Managed, Quantitatively Managed, Optimizing";
 choices[39][3] = "Performed, Defined, Managed, Quantitatively Managed, Optimizing";
 answers[39] = choices[39][0];
 units[39] = "87";
 comments[39] = "Id Pregunta: 4444. NULL";


//  Id pregunta: 4522 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  En el modelo de Ciclo de vida en cascada pura, &iquest;que sucede si Ia revisi&oacute;n del paso a Ia siguiente etapa del proyecto no es satisfactoria?";
 choices[40]= new Array();
 choices[40][0] = "Se continua con Ia etapa siguiente.";
 choices[40][1] = "Se retrocede a Ia etapa anterior.";
 choices[40][2] = "Se permanece en la etapa actual hasta que este preparada.";
 choices[40][3] = "Se comienza otra vez con Ia primera etapa.";
 answers[40] = choices[40][2];
 units[40] = "76";
 comments[40] = "Id Pregunta: 4522. ";


//  Id pregunta: 4604 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  Ignorar quien accede a que dato y cuando lo hace, afecta a Ia dimensi&oacute;n de la seguridad denominada";
 choices[41]= new Array();
 choices[41][0] = "confidencialidad";
 choices[41][1] = "disponibilidad";
 choices[41][2] = "integridad";
 choices[41][3] = "trazabilidad";
 answers[41] = choices[41][3];
 units[41] = "111";
 comments[41] = "Id Pregunta: 4604. NULL";


//  Id pregunta: 4804 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  &iquest;Cu&aacute;l de las siguientes actividades no pertenece al modelo de procesos de Reingenier&iacute;a del Software propuesto por Pressman?";
 choices[42]= new Array();
 choices[42][0] = "An&aacute;lisis de inventarios.";
 choices[42][1] = "Ingenier&iacute;a inversa.";
 choices[42][2] = "Ingenier&iacute;a directa.";
 choices[42][3] = "Ingenier&iacute;a relacional.";
 answers[42] = choices[42][3];
 units[42] = "91";
 comments[42] = "Id Pregunta: 4804. examen TIC 2006";


//  Id pregunta: 4876 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  En el modelo de procesos de Reingenier&iacute;a del Software propuesto por Pressman, la actividad de modificaci&oacute;n del c&oacute;digo fuente de un m&oacute;dulo con la finalidad de adecuarlo para futuros cambios, recibe la denominaci&oacute;n de:";
 choices[43]= new Array();
 choices[43][0] = "Ingenier&iacute;a inversa de procesos.";
 choices[43][1] = "Reestructuraci&oacute;n del software.";
 choices[43][2] = "Ingenier&iacute;a de la integraci&oacute;n de m&oacute;dulos.";
 choices[43][3] = "Ingenier&iacute;a avanzada.";
 answers[43] = choices[43][1];
 units[43] = "91";
 comments[43] = "Id Pregunta: 4876. examen TIC 2006";


//  Id pregunta: 4934 AÃ±o de creación de pregunta: 2003-01-01
 questions[44]= "45)  Clara acaba de recibir un documento de especificaciones de usuario de una aplicaci&oacute;n. El requisito establecidopara el desarrollo de que: &ldquo;El software debe soportar al menos 1.000.000 libros, 7.000 lectores y 250 materias&rdquo;,se enmarcar&iacute;a dentro de los requisitos de:";
 choices[44]= new Array();
 choices[44][0] = "Operaci&oacute;n.";
 choices[44][1] = "Funcionalidad.";
 choices[44][2] = "Recursos.";
 choices[44][3] = "Capacidad.";
 answers[44] = choices[44][3];
 units[44] = "78";
 comments[44] = "Id Pregunta: 4934. Examen TIC B 2007";


//  Id pregunta: 5022 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  &iquest;Cu&aacute;l de los siguientes no es un proceso de interfaz de M&eacute;trica v3?:";
 choices[45]= new Array();
 choices[45][0] = "Aseguramiento de la calidad";
 choices[45][1] = "Gesti&oacute;n de proyectos";
 choices[45][2] = "Gesti&oacute;n de la configuraci&oacute;n";
 choices[45][3] = "Dise&ntilde;o de Sistemas de Informaci&oacute;n";
 answers[45] = choices[45][3];
 units[45] = "86";
 comments[45] = "Id Pregunta: 5022. Examen TIC A 2007";


//  Id pregunta: 5023 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre ITIL (Information Technology Infrastructure Library) es cierta?";
 choices[46]= new Array();
 choices[46][0] = "ITIL es una Biblioteca de Infraestructura de Tecnolog&iacute;as de la Informaci&oacute;n que se ha convertido en elest&aacute;ndar mundial de facto en la Gesti&oacute;n de Servicios Inform&aacute;ticos.";
 choices[46][1] = "ITIL es una iniciativa de la Comisi&oacute;n Europea cuyo objetivo es la elaboraci&oacute;n de una definici&oacute;n de laestructura organizacional de una organizaci&oacute;n de tecnolog&iacute;as de la informaci&oacute;n";
 choices[46][2] = "La fundaci&oacute;n holandesa &quot;Exameninstituut voor Informatica&quot; (EXIN) y la inglesa &quot;Information SystemsExamination Board&quot; (ISEB) han desarrollado juntas la &uacute;ltima versi&oacute;n de ITIL";
 choices[46][3] = "ITIL es una metodolog&iacute;a para la Gesti&oacute;n de Servicios Inform&aacute;ticos que no tiene aplicaci&oacute;n en laAdministraci&oacute;n P&uacute;blica";
 answers[46] = choices[46][0];
 units[46] = "98";
 comments[46] = "Id Pregunta: 5023. Examen TIC A 2007";


//  Id pregunta: 5033 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  En la planificaci&oacute;n de un proyecto representada por un diagrama de Pert, una actividad critica es una actividad:";
 choices[47]= new Array();
 choices[47][0] = "con un alto riesgo de incrementar su duraci&oacute;n";
 choices[47][1] = "con dependencia de otra actividad y de la que depende al menos una actividad";
 choices[47][2] = "en el camino cr&iacute;tico";
 choices[47][3] = "cuya duraci&oacute;n no puede modificarse";
 answers[47] = choices[47][2];
 units[47] = "77";
 comments[47] = "Id Pregunta: 5033. Examen TIC A 2007";


//  Id pregunta: 5062 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  Se&ntilde;ale cual de los siguientes NO es un modelo de ciclo de vida del software:";
 choices[48]= new Array();
 choices[48][0] = "Cascada";
 choices[48][1] = "Espiral";
 choices[48][2] = "Prototipado";
 choices[48][3] = "Escalera";
 answers[48] = choices[48][3];
 units[48] = "76";
 comments[48] = "Id Pregunta: 5062. Examen TIC A 2007";


//  Id pregunta: 5082 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  Seg&uacute;n el m&eacute;todo del c&aacute;mino cr&iacute;tico, &iquest;cu&aacute;l de las siguientes afirmaciones NO es cierta?:";
 choices[49]= new Array();
 choices[49][0] = "El camino cr&iacute;tico determina el tiempo m&aacute;s corto que podemos tardar en hacer el proyecto si se dispone detodos los recursos necesarios";
 choices[49][1] = "Las actividades cr&iacute;ticas no tienen holgura.";
 choices[49][2] = "Una actividad es cr&iacute;tica cuando no se puede cambiar sus instantes de comienzo y finalizaci&oacute;n sin modificarla duraci&oacute;n total del proyecto.";
 choices[49][3] = "La concatenaci&oacute;n de las todas las actividades de un proyecto es el camino cr&iacute;tico.";
 answers[49] = choices[49][3];
 units[49] = "77";
 comments[49] = "Id Pregunta: 5082. Examen TIC A 2007";


//  Id pregunta: 5136 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  &iquest;En qu&eacute; modelo de ciclo de vida cada ciclo comienza identificando los objetivos, las alternativas y las restricciones del ciclo?";
 choices[50]= new Array();
 choices[50][0] = "Modelo incremental.";
 choices[50][1] = "Modelo en espiral.";
 choices[50][2] = "Modelo en cascada.";
 choices[50][3] = "Modelo fuente.";
 answers[50] = choices[50][1];
 units[50] = "76";
 comments[50] = "Id Pregunta: 5136. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5141 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l es el objetivo de la Gesti&oacute;n de Configuraci&oacute;n del Software?";
 choices[51]= new Array();
 choices[51][0] = "Gestionar de forma autom&aacute;tica la creaci&oacute;n, modificaci&oacute;n y borrado de usuarios en un sistema de informaci&oacute;n.";
 choices[51][1] = "Mantener la integridad de los productos que se obtienen a lo largo del desarrollo de los sistemas de informaci&oacute;n, garantizando que no se realizan cambios incontrolados.";
 choices[51][2] = "Permitir que los programadores de un sistema de informaci&oacute;n conozcan en todo momento los cambios de la configuraci&oacute;n f&iacute;sica que se vaya produciendo a nivel de sistema operativo.";
 choices[51][3] = "Permitir gestionar los recursos que se deidcan a cada tarea de desarrollo de los distintos m&oacute;dulos del sistema.";
 answers[51] = choices[51][1];
 units[51] = "79";
 comments[51] = "Id Pregunta: 5141. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5174 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  Los diagramas de estructura resultantes de la aplicaci&oacute;n de la metodolog&iacute;a de Jackson (JSP) se fundamentan en tres estructuras b&aacute;sicas. Indique de las siguientes cu&aacute;l NO es una de las tres estructuras b&aacute;sicas:";
 choices[52]= new Array();
 choices[52][0] = "Exclusi&oacute;n.";
 choices[52][1] = "Secuencia.";
 choices[52][2] = "Repetici&oacute;n.";
 choices[52][3] = "Selecci&oacute;n.";
 answers[52] = choices[52][0];
 units[52] = "83,84";
 comments[52] = "Id Pregunta: 5174. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5191 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  &iquest;Cu&aacute;les son las caracter&iacute;sticas b&aacute;sicas que definen una transacci&oacute;n?";
 choices[53]= new Array();
 choices[53][0] = "Atomicidad, Consistencia, Aislamiento y Durabilidad.";
 choices[53][1] = "Atomicidad, Durabilidad, Racionalidad y Consistencia.";
 choices[53][2] = "Autenticaci&oacute;n, Confidencialidad, Integridad y Disponibilidad.";
 choices[53][3] = "Temporalidad, Consistencia, Aislamiento y Atomicidad.";
 answers[53] = choices[53][0];
 units[53] = "83";
 comments[53] = "Id Pregunta: 5191. ";


//  Id pregunta: 5200 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  En el an&aacute;lisis DAFO, la definici&oacute;n &ldquo;Son eventos o circunstancias que se espera que ocurran o pueden inducirse a que ocurran en el mundo exterior y que podr&iacute;an tener un impacto positivo en el futuro de la Organizaci&oacute;n&rdquo; se corresponde con:";
 choices[54]= new Array();
 choices[54][0] = "Debilidades";
 choices[54][1] = "Amenazas";
 choices[54][2] = "Fortalezas";
 choices[54][3] = "Oportunidades";
 answers[54] = choices[54][3];
 units[54] = "77";
 comments[54] = "Id Pregunta: 5200. ";


//  Id pregunta: 5210 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  En el modelo EFQM:";
 choices[55]= new Array();
 choices[55][0] = "El subcriterio 6A tiene un peso del 25% del total de los puntos del criterio 6.";
 choices[55][1] = "El subcriterio 6B tiene un peso del 25% del total de los puntos del criterio 6.";
 choices[55][2] = "El subcriterio 7A tiene un peso del 25% del total de los puntos del criterio 6.";
 choices[55][3] = "El subcriterio 7B tiene un peso del 75% del total de los puntos del criterio 6";
 answers[55] = choices[55][1];
 units[55] = "92";
 comments[55] = "Id Pregunta: 5210. NULL";


//  Id pregunta: 5211 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  En el proceso de reconocimiento de la voz, la fase en la que la informaci&oacute;n es grabada en formato digital es:";
 choices[56]= new Array();
 choices[56][0] = "Captura de la informaci&oacute;n";
 choices[56][1] = "Segmentaci&oacute;n y an&aacute;lisis de la se&ntilde;al";
 choices[56][2] = "Adaptaci&oacute;n al entorno";
 choices[56][3] = "Generar patrones";
 answers[56] = choices[56][0];
 units[56] = "94";
 comments[56] = "Id Pregunta: 5211. ";


//  Id pregunta: 5224 AÃ±o de creación de pregunta: 2007-01-01
 questions[57]= "58)  Cu&aacute;l de las siguientes actividades no pertenece al proceso Mantenimiento de Sistema de Informaci&oacute;n";
 choices[57]= new Array();
 choices[57][0] = "Seguimiento y Evaluaci&oacute;n de los cambios hasta la aceptaci&oacute;n";
 choices[57][1] = "An&aacute;lisis de la petici&oacute;n";
 choices[57][2] = "Registro de la petici&oacute;n";
 choices[57][3] = "Planificaci&oacute;n de la petici&oacute;n";
 answers[57] = choices[57][3];
 units[57] = "86";
 comments[57] = "Id Pregunta: 5224. NULL";


//  Id pregunta: 5248 AÃ±o de creación de pregunta: 2003-01-01
 questions[58]= "59)  Se&ntilde;ale la respuesta incorrecta en relaci&oacute;n a la Ingenier&iacute;a del Software";
 choices[58]= new Array();
 choices[58][0] = "El tipo de actividades que se desarrollan en Ingenier&iacute;a de Software son de desarrollo, control, gesti&oacute;n y aplicaci&oacute;n";
 choices[58][1] = "Surge como respuesta a la crisis del software con los objetivos de conseguir un producto fiable, de alta calidad y bajo coste y conducir un proceso de desarrollo de manera eficiente";
 choices[58][2] = "La ingenier&iacute;a del software es la aplicaci&oacute;n de un enfoque sistem&aacute;tico, disciplinado y cuantificable hacia el desarrollo, operaci&oacute;n y mantenimiento del software";
 choices[58][3] = "La ingenier&iacute;a del software es una tecnolog&iacute;a multicapa constituida por el proceso, los m&eacute;todos y las herramientas";
 answers[58] = choices[58][0];
 units[58] = "87";
 comments[58] = "Id Pregunta: 5248. NULL";


//  Id pregunta: 5535 AÃ±o de creación de pregunta: 2003-01-01
 questions[59]= "60)  Indique la respuesta falsa";
 choices[59]= new Array();
 choices[59][0] = "El portal Your Europe tiene que como objetivo informar a los pa&iacute;ses que no son de la UE sobre las posibilidades de adhesi&oacute;n a la UE";
 choices[59][1] = "PLOTEUS es el portal europeo de oportunidades de formaci&oacute;n";
 choices[59][2] = "TESTA es una red que interconecta las distintas redes administrativas de los estados miembros";
 choices[59][3] = "EURES es un servicio paneuropeo que pretende facilitar el libre movimiento de trabajadores en el Espacio Econ&oacute;mico Europeo";
 answers[59] = choices[59][0];
 units[59] = "30";
 comments[59] = "Id Pregunta: 5535. ";


//  Id pregunta: 5826 AÃ±o de creación de pregunta: 2009-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes opciones NO es una vista de UML?";
 choices[60]= new Array();
 choices[60][0] = "Vista de Componentes.";
 choices[60][1] = "Vista de Despliegue.";
 choices[60][2] = "Vista de Casos de Uso.";
 choices[60][3] = "Vista de Flujo de Datos.";
 answers[60] = choices[60][3];
 units[60] = "84";
 comments[60] = "Id Pregunta: 5826. MAP 2008 A1";


//  Id pregunta: 6063 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  Indicar cu&aacute;l de los siguientes NO es un m&eacute;todo ni un marco metodol&oacute;gico para estimar el esfuerzo de desarrollo en los proyectos:";
 choices[61]= new Array();
 choices[61][0] = "COCOMO II.";
 choices[61][1] = "FPA.";
 choices[61][2] = "ESTIM.";
 choices[61][3] = "ITEOR.";
 answers[61] = choices[61][2];
 units[61] = "89";
 comments[61] = "Id Pregunta: 6063. TIC A 2009";


//  Id pregunta: 6200 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  Seg&uacute;n M&eacute;trica 3, el diagrama de estructura define posibles estructuras que permiten mostrar la secuencia de las llamadas entre m&oacute;dulos; &iquest;cu&aacute;l de las siguientes es una de ellas?";
 choices[62]= new Array();
 choices[62][0] = "Continua";
 choices[62][1] = "Dispersa";
 choices[62][2] = "en &Aacute;rbol";
 choices[62][3] = "Alternativa";
 answers[62] = choices[62][3];
 units[62] = "86";
 comments[62] = "Id Pregunta: 6200. TIC-B 2009 bloque desarrollo";


//  Id pregunta: 6239 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  A qu&eacute; proceso principal de M&eacute;trica pertenece la tarea &quot;Determinaci&oacute;n del Acuerdo de Nivel de Servicio&quot;";
 choices[63]= new Array();
 choices[63][0] = "Dise&ntilde;o del Sistema de Informaci&oacute;n";
 choices[63][1] = "Construcci&oacute;n del Sistema de Informaci&oacute;n";
 choices[63][2] = "Mantenimiento del Sistema de Informaci&oacute;n";
 choices[63][3] = "Implantaci&oacute;n y Aceptaci&oacute;n del Sistema de Informaci&oacute;n";
 answers[63] = choices[63][3];
 units[63] = "86";
 comments[63] = "Id Pregunta: 6239. TICB-2009, bloque desarrollo";


//  Id pregunta: 6284 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  &iquest;Qu&eacute; es un Plan de Sistemas?";
 choices[64]= new Array();
 choices[64][0] = "Un an&aacute;lisis de la situaci&oacute;n actual del &aacute;rea de sistemas de una organizaci&oacute;n";
 choices[64][1] = "Un manual de usuario para los clientes de aplicaciones inform&aacute;ticas de una organizaci&oacute;n";
 choices[64][2] = "Un plan de riesgos de sistemas de informaci&oacute;n";
 choices[64][3] = "Un documento que recoge el conjunto de medidas dirigidas a satisfacer las necesidades en materia de tratamiento automatizado de informaci&oacute;n de una organizaci&oacute;n";
 answers[64] = choices[64][3];
 units[64] = "77";
 comments[64] = "Id Pregunta: 6284. ";


//  Id pregunta: 6300 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  &iquest;C&oacute;mo se denomina la clase que no tiene instancias?";
 choices[65]= new Array();
 choices[65][0] = "No existen clases sin instancias";
 choices[65][1] = "Invisible";
 choices[65][2] = "Hu&eacute;rfana";
 choices[65][3] = "Abstracta";
 answers[65] = choices[65][3];
 units[65] = "82";
 comments[65] = "Id Pregunta: 6300. ";


//  Id pregunta: 6311 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  &iquest;Cu&aacute;l de los siguientes no es un objetivo del dise&ntilde;o estructurado de un proyecto de ingenier&iacute;a software?";
 choices[66]= new Array();
 choices[66][0] = "Minimizar el coste asociado al mantenimiento.";
 choices[66][1] = "M&aacute;ximo acoplamiento.";
 choices[66][2] = "M&aacute;xima inteligibilidad del sistema.";
 choices[66][3] = "Integraci&oacute;n del sistema.";
 answers[66] = choices[66][1];
 units[66] = "84";
 comments[66] = "Id Pregunta: 6311. ";


//  Id pregunta: 6314 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  &iquest;Qu&eacute; es el Fan-Out en el contexto de dise&ntilde;o de un proyecto de ingenier&iacute;a software?";
 choices[67]= new Array();
 choices[67][0] = "Es una medida de reusabilidad. Es el n&uacute;mero de superiores inmediatos de un m&oacute;dulo.";
 choices[67][1] = "Es una medida de complejidad. Es el n&uacute;mero de subordinados inmediatos de un m&oacute;dulo.";
 choices[67][2] = "Es una medida de mantenibilidad. Es el n&uacute;mero de m&oacute;dulos iguales.";
 choices[67][3] = "Ninguna de las anteriores.";
 answers[67] = choices[67][1];
 units[67] = "84";
 comments[67] = "Id Pregunta: 6314. ";


//  Id pregunta: 6530 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  &iquest;Qu&eacute; actividad es propia del BCM?";
 choices[68]= new Array();
 choices[68][0] = "An&aacute;lisis de impacto de negocio ";
 choices[68][1] = "An&aacute;lisis de riesgos";
 choices[68][2] = "Producci&oacute;n del plan de continuidad";
 choices[68][3] = "Todas";
 answers[68] = choices[68][3];
 units[68] = "98";
 comments[68] = "Id Pregunta: 6530. NULL";


//  Id pregunta: 6645 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  &iquest;Qu&eacute; modelo de estimaci&oacute;n de esfuerzo no requiere datos hist&oacute;ricos de otros proyectos?";
 choices[69]= new Array();
 choices[69][0] = "Modelo de Waltson y F&eacute;lix";
 choices[69][1] = "Modelo de Bailey y Basili";
 choices[69][2] = "Modelo de Putnam";
 choices[69][3] = "Todos estos modelos requieren datos hist&oacute;ricos";
 answers[69] = choices[69][2];
 units[69] = "89";
 comments[69] = "Id Pregunta: 6645. NULL";


//  Id pregunta: 7295 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)  Indique cu&aacute;l de los siguientes es un algoritmo empleado en adaptaci&oacute;n al locutor para reconocimiento autom&aacute;tico del habla (ASR):";
 choices[70]= new Array();
 choices[70][0] = "MLLR";
 choices[70][1] = "MAP";
 choices[70][2] = "a y b son correctas";
 choices[70][3] = "a y b son incorrectas";
 answers[70] = choices[70][2];
 units[70] = "94";
 comments[70] = "Id Pregunta: 7295. NULL";


//  Id pregunta: 7310 AÃ±o de creación de pregunta: 2010-01-01
 questions[71]= "72)  En relaci&oacute;n a la utilizaci&oacute;n de gram&aacute;ticas y modelos de lenguaje para el reconocimiento de lenguaje natural, indique cu&aacute;l de las siguientes afirmaciones NO es correcta:";
 choices[71]= new Array();
 choices[71][0] = "Las gram&aacute;ticas permiten reconocer cualquier tipo de frase pronunciada por el locutor";
 choices[71][1] = "Las gram&aacute;ticas permiten obtener tasas de acierto m&aacute;s elevadas que los modelos de lenguaje";
 choices[71][2] = "Los modelos de lenguaje precisan de grandes corpus de entrenamiento";
 choices[71][3] = "Los modelos de lenguaje permiten reconocer cualquier tipo de frase pronunciada por el locutor";
 answers[71] = choices[71][0];
 units[71] = "94";
 comments[71] = "Id Pregunta: 7310. NULL";


//  Id pregunta: 7358 AÃ±o de creación de pregunta: 2010-01-01
 questions[72]= "73)  Cu&aacute;l de los siguientes est&aacute;ndares corresponde a PDF/A";
 choices[72]= new Array();
 choices[72][0] = "ISO 23018";
 choices[72][1] = "ISO 19005";
 choices[72][2] = "ISO 13100";
 choices[72][3] = "ISO 16546";
 answers[72] = choices[72][1];
 units[72] = "95";
 comments[72] = "Id Pregunta: 7358. NULL";


//  Id pregunta: 7359 AÃ±o de creación de pregunta: 2010-01-01
 questions[73]= "74)  Un formato de archivo de documentos electr&oacute;nicos a largo plazo debe cumplir:";
 choices[73]= new Array();
 choices[73][0] = "Debe ser un formato independiente del dispositivo";
 choices[73][1] = "Debe ser un formato autocontenido, de manera que toda la informaci&oacute;n necesaria para representar el contenido del documento se encuentre en el propio documento, y no sea preciso acceder a contenidos externos que quiz&aacute; en el futuro no est&eacute;n disponibles";
 choices[73][2] = "El formato debe estar publicado.";
 choices[73][3] = "Todas son CORRECTAS";
 answers[73] = choices[73][3];
 units[73] = "95";
 comments[73] = "Id Pregunta: 7359. NULL";


//  Id pregunta: 8330 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  Si hablamos del control automatizado de documentos electr&oacute;nicos a trav&eacute;s de su ciclo de vida completo en una organizaci&oacute;n, desde su creaci&oacute;n inidal hasta su archivado final, estamos hablando de:";
 choices[74]= new Array();
 choices[74][0] = "Desarrollo de software";
 choices[74][1] = "Gesti&oacute;n documental";
 choices[74][2] = "Sistemas gestores de base de datos";
 choices[74][3] = "Sistemas de soporte a la decisi&oacute;n";
 answers[74] = choices[74][1];
 units[74] = "95";
 comments[74] = "Id Pregunta: 8330. Examen TIC A2 2010";


//  Id pregunta: 8649 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  Seg&uacute;n M&eacute;trica v3. &iquest;cu&aacute;l de las siguientes listas esta correctamente ordenada de mayor a menor acoplamiento?";
 choices[75]= new Array();
 choices[75][0] = "De contenido, com&uacute;n, de control, externo, de datos.";
 choices[75][1] = "De datos, de marca, externo, de control, com&uacute;n, de contenido";
 choices[75][2] = "De datos, de marca, de control, externo, com&uacute;n, de contenido";
 choices[75][3] = "De contenido, com&uacute;n, externo, de marca, de datos";
 answers[75] = choices[75][3];
 units[75] = "86";
 comments[75] = "Id Pregunta: 8649. Examen TIC A2 2010 interna";


//  Id pregunta: 8800 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  Respecto al modelo en espiral es falso que:";
 choices[76]= new Array();
 choices[76][0] = "Incluye el an&aacute;lisis de riesgos.";
 choices[76][1] = "Se compone de ciclos.";
 choices[76][2] = "El n&uacute;mero de ciclos a realizar se encuentra predefinido en el modelo.";
 choices[76][3] = "La dimensi&oacute;n angular indica el avance dentro del ciclo actual.";
 answers[76] = choices[76][2];
 units[76] = "76";
 comments[76] = "Id Pregunta: 8800. Examen UPM A2 2011";


//  Id pregunta: 8845 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  En el modelo EFQM (European Foundation Quality Management) se identifican una serie de elementos que son la base para la Gesti&oacute;n de Calidad Total dentro de las organizaciones y que se agrupan en dos grandes bloques:";
 choices[77]= new Array();
 choices[77][0] = " Agentes y Acciones";
 choices[77][1] = " Agentes y Niveles de Satisfacci&oacute;n";
 choices[77][2] = " Agentes y Resultados";
 choices[77][3] = " Resultados y Acciones";
 answers[77] = choices[77][2];
 units[77] = "87.88";
 comments[77] = "Id Pregunta: 8845. Examen UC3M 2010";


//  Id pregunta: 9436 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  &iquest;Cu&aacute;l NO es una caracter&iacute;stica de las transacciones?";
 choices[78]= new Array();
 choices[78][0] = "Concurrencia";
 choices[78][1] = "Durabilidad";
 choices[78][2] = "Aislamiento";
 choices[78][3] = "Atomicidad";
 answers[78] = choices[78][0];
 units[78] = "83";
 comments[78] = "Id Pregunta: 9436. Examen AGE TIC A1 2011";


//  Id pregunta: 9445 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  En programaci&oacute;n orientada a objetos, la propiedad por la cual un mismo mensaje puede originar conductas diferentes al ser recibido por distintos objetos se denomina:";
 choices[79]= new Array();
 choices[79][0] = "Sobrecarga.";
 choices[79][1] = "Herencia.";
 choices[79][2] = "Extensibilidad.";
 choices[79][3] = "Polimorfismo.";
 answers[79] = choices[79][3];
 units[79] = "82";
 comments[79] = "Id Pregunta: 9445. Examen AGE TIC A1 2011";


//  Id pregunta: 9487 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas de obtenci&oacute;n de requisitos no es una t&eacute;cnica de bajo nivel?";
 choices[80]= new Array();
 choices[80][0] = "Entrevistas";
 choices[80][1] = "PIECES";
 choices[80][2] = "An&aacute;lisis de mercado";
 choices[80][3] = "Prototipos";
 answers[80] = choices[80][3];
 units[80] = "78";
 comments[80] = "Id Pregunta: 9487. ";


//  Id pregunta: 9732 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  Se&ntilde;ale la opci&oacute;n INCORRECTA:";
 choices[81]= new Array();
 choices[81][0] = "En dise&ntilde;o de programas, GRASP significa &quot;patrones generales de software para asignar responsabilidades&quot;, y describen los principios fundamentales de la asignaci&oacute;n de responsabilidades a objetos.";
 choices[81][1] = "La cohesi&oacute;n se define como el grado de interdependencia existente entre los m&oacute;dulos de un sistema.";
 choices[81][2] = "En la programaci&oacute;n modular lo m&aacute;s conveniente es que un m&oacute;dulo sea altamente cohesivo y con bajo acoplamiento.";
 choices[81][3] = "AOSD (Desarrollo Software Orientado a Aspectos) es una aproximaci&oacute;n al dise&ntilde;o de la arquitectura del sistema. Se caracteriza porque ofrece mecanismos para resolver problemas de c&oacute;digo disperso o enmara&ntilde;ado gracias a los aspectos.";
 answers[81] = choices[81][1];
 units[81] = "84";
 comments[81] = "Id Pregunta: 9732. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9746 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  COCOMO II est&aacute; formado por tres modelos o submodelos. &iquest;Cu&aacute;l de los siguientes NO es un modelo de COCOMO II?";
 choices[82]= new Array();
 choices[82][0] = "Modelo de Composici&oacute;n de Aplicaci&oacute;n.";
 choices[82][1] = "Modelo de Reutilizaci&oacute;n de Objetos.";
 choices[82][2] = "Modelo de Dise&ntilde;o Preliminar.";
 choices[82][3] = "Modelo Post-Arquitectura.";
 answers[82] = choices[82][1];
 units[82] = "88";
 comments[82] = "Id Pregunta: 9746. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9873 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  De acuerdo con Metrica v3, en el Diagrama de Transici&oacute;n de Estados,";
 choices[83]= new Array();
 choices[83][0] = "no puede haber ninguna transici&oacute;n dirigida al estado inicial.";
 choices[83][1] = "solo puede haber un estado final.";
 choices[83][2] = "una acci&oacute;n no se puede ejecutar dentro de un estado.";
 choices[83][3] = "un diagrama puede tener varios estados in&iacute;ciales.";
 answers[83] = choices[83][0];
 units[83] = "86";
 comments[83] = "Id Pregunta: 9873. TIC A1, Examen 2013";


//  Id pregunta: 9952 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares regula los procesos de ciclo de vida del software?";
 choices[84]= new Array();
 choices[84][0] = "ISO/IEC 12207:2008";
 choices[84][1] = "ISO 9001:2008";
 choices[84][2] = "ISO 29393:2009";
 choices[84][3] = "ISO 31000:2009";
 answers[84] = choices[84][0];
 units[84] = "76";
 comments[84] = "Id Pregunta: 9952. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10095 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  En relaci&oacute;n con el producto ERS en METRICA v.3:";
 choices[85]= new Array();
 choices[85][0] = "La ERS la obtienen los analistas en ASI 9.";
 choices[85][1] = "La ERS la obtienen los analistas en ASI 2.";
 choices[85][2] = "La ERS la obtienen los analistas y usuarios expertos en ASI 9.";
 choices[85][3] = "La ERS la obtienen los analistas y usuarios expertos en ASI 2.";
 answers[85] = choices[85][0];
 units[85] = "78";
 comments[85] = "Id Pregunta: 10095. NULL";


//  Id pregunta: 10096 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  En el an&aacute;lisis de requisitos, el dominio de la informaci&oacute;n debe analizarse desde 3 puntos de vista. &iquest;Cu&aacute;l NO es uno de ellos?";
 choices[86]= new Array();
 choices[86][0] = "Flujo de la informaci&oacute;n";
 choices[86][1] = "Contenido de la informaci&oacute;n";
 choices[86][2] = "Modelo de la informaci&oacute;n";
 choices[86][3] = "Estructura de la informaci&oacute;n";
 answers[86] = choices[86][2];
 units[86] = "78";
 comments[86] = "Id Pregunta: 10096. NULL";


//  Id pregunta: 10184 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  El Modelo E-R Extendido es el resultado de la ampliaci&oacute;n de elementos y modificaciones introducidas en el modelo E-R de Chen a lo largo del tiempo. De entre &eacute;stas, es cierto que:";
 choices[87]= new Array();
 choices[87][0] = "Sea una entidad involucrada en varias relaciones o interrelaciones distintas. Si cada ocurrencia de dicha entidad s&oacute;lo puede participar en una interrelaci&oacute;n, se habla de interrelaciones disjuntas.";
 choices[87][1] = "El Modelo E-R extendido permite la representaci&oacute;n de relaciones jer&aacute;rquicas denominadas Categor&iacute;as.";
 choices[87][2] = "Una jerarqu&iacute;a total se representa mediante la indicaci&oacute;n de la letra &quot;t&quot; en el tri&aacute;ngulo invertido que representa las relaciones de jerarqu&iacute;a";
 choices[87][3] = "Las relaciones reflexivas, al ser relaciones unarias, suelen presentar un tipo de correspondencia 1:1";
 answers[87] = choices[87][1];
 units[87] = "80";
 comments[87] = "Id Pregunta: 10184. ";


//  Id pregunta: 10484 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  &iquest;En qu&eacute; se basa el &eacute;todo de Karner?";
 choices[88]= new Array();
 choices[88][0] = "En la estimaci&oacute;n del esfuerzo por puntos de casos de uso en vez de puntos de funci&oacute;n";
 choices[88][1] = "En determinar las constantes a, b, c y de del m&eacute;todo de Putnam";
 choices[88][2] = "Se aplica en Cocomo semipesado";
 choices[88][3] = "Variante del m&eacute;todo Mark II";
 answers[88] = choices[88][0];
 units[88] = "89";
 comments[88] = "Id Pregunta: 10484. NULL";


//  Id pregunta: 10638 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Indique la respuesta correcta:";
 choices[89]= new Array();
 choices[89][0] = "UML est&aacute; dise&ntilde;ado para utilizarse exclusivamente con la metodolog&iacute;a RUP.";
 choices[89][1] = "UML es un m&oacute;dulo de OMT (Object-Modeling Technique)";
 choices[89][2] = "UML es un lenguaje de programaci&oacute;n estructurada.";
 choices[89][3] = "UML puede describir m&eacute;todos o procesos.";
 answers[89] = choices[89][3];
 units[89] = "84";
 comments[89] = "Id Pregunta: 10638. ";


//  Id pregunta: 10843 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Para poder realizar pruebas de caja blanca que realicen cobertura de c&oacute;digo, la herramienta que NO se deber&iacute;a usar es:";
 choices[90]= new Array();
 choices[90][0] = "EclEMMA.";
 choices[90][1] = "eCobertura.";
 choices[90][2] = "Jmeter.";
 choices[90][3] = "Java Code Coverage.";
 answers[90] = choices[90][2];
 units[90] = "0";
 comments[90] = "Id Pregunta: 10843. Examen GSI 2014";


//  Id pregunta: 11007 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Se&ntilde;ale la respuesta correcta respecto al modelo de Desarrollo R&aacute;pido de Aplicaciones (DRA) para el desarrollo de nuevas aplicaciones:";
 choices[91]= new Array();
 choices[91][0] = "El DRA no es un modelo adecuado si la nueva aplicaci&oacute;n hace uso de tecnolog&iacute;as nuevas.";
 choices[91][1] = "Aunque un sistema no se pueda modularizar adecuadamente, la construcci&oacute;n de los componentes necesarios para DRA no ser&aacute; problem&aacute;tico.";
 choices[91][2] = "El DRA no es adecuado cuando el software nuevo no requiere un alto grado de interoperatividad con aplicaciones ya existentes.";
 choices[91][3] = "Es un modelo de proceso del desarrollo del software en espiral que enfatiza un ciclo de desarrollo extremadamente corto.";
 answers[91] = choices[91][0];
 units[91] = "76";
 comments[91] = "Id Pregunta: 11007. TIC A1 AGE 2014";


//  Id pregunta: 11065 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cual de las afirmaciones es CORRECTA acerca de las diferentes modalidades de demanda, generadas por los negocios de los clientes?";
 choices[92]= new Array();
 choices[92][0] = "Son impulsadas por las pautas de las actividades de los negocios";
 choices[92][1] = "Es imposible predecir como se comportan";
 choices[92][2] = "Es imposible influenciar en las pautas de la demanda";
 choices[92][3] = "Son impulsadas por el calendario de entregas generado por el proceso de Gesti&oacute;n de la Capacidad";
 answers[92] = choices[92][0];
 units[92] = "98";
 comments[92] = "Id Pregunta: 11065. ";


//  Id pregunta: 11073 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l es la secuencia de eventos CORRECTA para elegir una herramienta tecnol&oacute;gica?";
 choices[93]= new Array();
 choices[93][0] = "Seleccionar; Requerimientos; Criterios de Selecci&oacute;n, Evaluaci&oacute;n";
 choices[93][1] = "Criterios de Selecci&oacute;n; Requerimientos; Evaluaci&oacute;n; Seleccionar";
 choices[93][2] = "Requerimientos; Selecci&oacute;n de Criterios, Seleccionar, Evaluar";
 choices[93][3] = "Requerimientos; Selecci&oacute;n de Criterios; Evaluar; Seleccionar";
 answers[93] = choices[93][3];
 units[93] = "98";
 comments[93] = "Id Pregunta: 11073. ";


//  Id pregunta: 11165 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  De acuerdo con la Norma ISO 9004 sobre la madurez del sistema de gesti&oacute;n de la calidad, &iquest;cu&aacute;l de las siguientes descripciones se refiere al nivel de madurez 1?";
 choices[94]= new Array();
 choices[94][0] = "Proceso de mejora existente y en uso";
 choices[94][1] = "No hay una aproximaci&oacute;n sistem&aacute;tica evidente; sin resultados, resultados pobres o resultados impredecibles.";
 choices[94][2] = "Aproximaci&oacute;n sistem&aacute;tica basada en el problema o en la prevenci&oacute;n; m&iacute;nimos datos disponibles sobre los resultados de mejora.";
 choices[94][3] = "Proceso de mejora ampliamente integrado.";
 answers[94] = choices[94][1];
 units[94] = "92";
 comments[94] = "Id Pregunta: 11165. ";


//  Id pregunta: 11168 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Qui&eacute;n es el creador de la l&oacute;gica borrosa?";
 choices[95]= new Array();
 choices[95][0] = "Lofti Zadeh";
 choices[95][1] = "Lempel-Ziv-Welch";
 choices[95][2] = "Donald Hebb&nbsp;";
 choices[95][3] = "Augustin Louis Cauchy";
 answers[95] = choices[95][0];
 units[95] = "94";
 comments[95] = "Id Pregunta: 11168. ";


//  Id pregunta: 11171 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l de los siguientes no es un modelo cl&aacute;sico de recuperaci&oacute;n de informaci&oacute;n?";
 choices[96]= new Array();
 choices[96][0] = "Probabil&iacute;stico";
 choices[96][1] = "Estructurado";
 choices[96][2] = "Vectorial";
 choices[96][3] = "Booleano";
 answers[96] = choices[96][1];
 units[96] = "96";
 comments[96] = "Id Pregunta: 11171. ";


//  Id pregunta: 11269 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l de los siguientes NO es un principio de Cobit v5?";
 choices[97]= new Array();
 choices[97][0] = "Satisfacer las Necesidades de las Partes Interesadas.";
 choices[97][1] = "Cubrir el &aacute;rea TI de extremo a extremo.";
 choices[97][2] = "Aplicar un Marco de Referencia &Uacute;nico Integrado.";
 choices[97][3] = "Separar el Gobierno de la Gesti&oacute;n.";
 answers[97] = choices[97][1];
 units[97] = "98";
 comments[97] = "Id Pregunta: 11269. ";


//  Id pregunta: 11374 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;les de los siguientes conceptos son caracter&iacute;sticas de todo proceso?: 1. Es medible; 2. Entrega un resultado especifico; 3. Entrega sus resultados principales a un cliente o a otros interesados";
 choices[98]= new Array();
 choices[98][0] = "Solo 1 y 3";
 choices[98][1] = "Solo 1 y 2";
 choices[98][2] = "Solo 2 y 3";
 choices[98][3] = "Todos los anteriores";
 answers[98] = choices[98][3];
 units[98] = "98";
 comments[98] = "Id Pregunta: 11374. ";


//  Id pregunta: 11648 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  La Gesti&oacute;n de la disponibilidad se encuentra en ITILv2 e ITIL v3, respectivamente en:";
 choices[99]= new Array();
 choices[99][0] = "Entrega del servicio y Dise&ntilde;o del servicio";
 choices[99][1] = "Soporte del servicio y Estrategia del servicio";
 choices[99][2] = "Soporte del servicio y Transici&oacute;n del servicio";
 choices[99][3] = "Entrega del servicio y Estrategia del servicio";
 answers[99] = choices[99][0];
 units[99] = "98";
 comments[99] = "Id Pregunta: 11648. ";


