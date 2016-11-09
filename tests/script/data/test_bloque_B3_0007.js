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

//  Id pregunta: 2023 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  De acuerdo con el modelo Staffing Size, en un desarrollo orientado a objetos:";
 choices[0]= new Array();
 choices[0][0] = "El porcentaje de clases clave oscila entre el 20% y el 40%; el resto suelen ser clases secundarias.";
 choices[0][1] = "El porcentaje de clases clave nunca debe superar el 5% del total de clases.";
 choices[0][2] = "El porcentaje de clases clave debe ser superior al 75% para garantizar la robustez del proyecto.";
 choices[0][3] = "No deben existir clases secundarias.";
 answers[0] = choices[0][0];
 units[0] = "82,84";
 comments[0] = "Id Pregunta: 2023. Examen TIC MAP B 2004";


//  Id pregunta: 2040 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  El conjunto de actividades que es necesario realizar para asegurar que el producto software responde a las necesidades expresadas por el usuario se denomina:";
 choices[1]= new Array();
 choices[1][0] = "Control de calidad";
 choices[1][1] = "Modelo de calidad";
 choices[1][2] = "Garant&iacute;a de calidad";
 choices[1][3] = "Plan General de Calidad";
 answers[1] = choices[1][2];
 units[1] = "92";
 comments[1] = "Id Pregunta: 2040. NULL";


//  Id pregunta: 2060 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas empleadas en METRICA V3, tiene por objeto la obtenci&oacute;n de un modelo l&oacute;gico de procesos que represente el sistema, con independencia de las condiciones f&iacute;sicas de entorno?";
 choices[2]= new Array();
 choices[2][0] = "Modelo Entidad/Relaci&oacute;n";
 choices[2][1] = "Diagrama de Despliegue";
 choices[2][2] = "Diagrama de Flujo de Datos (DFD)";
 choices[2][3] = "Diagrama de Interacci&oacute;n";
 answers[2] = choices[2][2];
 units[2] = "86";
 comments[2] = "Id Pregunta: 2060. Pregunta Junta Andalucia - A";


//  Id pregunta: 2070 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  Indique la afirmaci&oacute;n falsa en relaci&oacute;n a las tecnolog&iacute;as CASE (Computer Aided Software Engineering):";
 choices[3]= new Array();
 choices[3][0] = "Las herramientas &quot;lower-CASE&quot; est&aacute;n orientadas a las etapas finales del ciclo de vida, especialmente a la codificaci&oacute;n";
 choices[3][1] = "Las herramientas &quot;upper-CASE&quot; se orientan a las primeras etapas del ciclo de vida";
 choices[3][2] = "Las herramientas I-CASE (CASE Integrado) abarcan el ciclo de vida completo de un sistema de informaci&oacute;n";
 choices[3][3] = "Todas las anteriores son correctas";
 answers[3] = choices[3][3];
 units[3] = "76";
 comments[3] = "Id Pregunta: 2070. ";


//  Id pregunta: 2073 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l de los siguientes no es un factor de calidad de SW, seg&uacute;n McCall?";
 choices[4]= new Array();
 choices[4][0] = "Integridad";
 choices[4][1] = "Sencillez";
 choices[4][2] = "Mantenibilidad";
 choices[4][3] = "Portabilidad";
 answers[4] = choices[4][1];
 units[4] = "88";
 comments[4] = "Id Pregunta: 2073. ";


//  Id pregunta: 2104 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Se desea establecer un sistema de salvaguarda de informaci&oacute;n (back-up) que asegure una p&eacute;rdida potencial m&aacute;xima del trabajo realizado en 24 horas. Con el fin de facilitar el proceso se han propuesto diversas medidas. Indicar aqu&eacute;lla que sea v&aacute;lida:";
 choices[5]= new Array();
 choices[5][0] = "Copiar inmediatamente en cinta todas las modificaciones efectuadas por cualquiera de los usuarios seg&uacute;n &eacute;stas se vayan produciendo";
 choices[5][1] = "Realizar salvaguardas al final de cada d&iacute;a de toda la informaci&oacute;n contenida en los discos mediante alg&uacute;n procedimiento autom&aacute;tico lanzado por el administrador del sistema";
 choices[5][2] = "Obligar a cada usuario a realizar su copia de seguridad una vez terminado el trabajo efectuado  durante el d&iacute;a";
 choices[5][3] = "No se puede efectuar un sistema de salvaguarda basado en cinta para un sistema distribu&iacute;do en el que las estaciones de trabajo no posean cinta magn&eacute;tica";
 answers[5] = choices[5][1];
 units[5] = "96,97";
 comments[5] = "Id Pregunta: 2104. ";


//  Id pregunta: 2161 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Indicar la afirmaci&oacute;n falsa acerca del coste de la calidad:";
 choices[6]= new Array();
 choices[6][0] = "El coste total se descompone en: coste de la calidad, coste de la no calidad y costes fijos";
 choices[6][1] = "El coste de la calidad viene dado por el sumatorio de lo que se invierte en prevenci&oacute;n, verificaci&oacute;n y validaci&oacute;n";
 choices[6][2] = "El coste de la no calidad viene dado por el sumatorio de lo que se invierte en fallos internos y fallos externos";
 choices[6][3] = " Como f&oacute;rmula general que determine el inter&eacute;s de la inversi&oacute;n se debe controlar el cumplimiento constante de: gastos en calidad &lt; gastos de la no calidad";
 answers[6] = choices[6][0];
 units[6] = "88";
 comments[6] = "Id Pregunta: 2161. ";


//  Id pregunta: 2189 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;les son las suposiciones b&aacute;sicas del modelo COCOMO cl&aacute;sico para estimar el esfuerzo necesario para el desarrollo de sistemas?:";
 choices[7]= new Array();
 choices[7][0] = "Considera que la principal variable explicativa del coste es el n&uacute;mero de instrucciones, con lo que centra sus esfuerzos en estimar este n&uacute;mero";
 choices[7][1] = "Supone que el esfuerzo necesario para el desarrollo de un sistema es el producto de dos factores: complejidad t&eacute;cnica y tama&ntilde;o del tratamiento de la informaci&oacute;n";
 choices[7][2] = "Usa como variable explicativa secundaria la complejidad t&eacute;cnica, originando tres modos de aplicaci&oacute;n del m&eacute;todo: org&aacute;nico, semiacoplado y empotrado";
 choices[7][3] = "Todas las anteriores son asunciones del modelo COCOMO";
 answers[7] = choices[7][3];
 units[7] = "89";
 comments[7] = "Id Pregunta: 2189. Preparatic XVII";


//  Id pregunta: 2212 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Qu&eacute; expresa la dimensi&oacute;n angular del modelo en Espiral?:";
 choices[8]= new Array();
 choices[8][0] = "Es un indicador del gasto acumulativo del proyecto";
 choices[8][1] = "Representa el progreso hecho en completar cada ciclo de la espiral.";
 choices[8][2] = "En algunos casos no es posible delimitarla";
 choices[8][3] = "Se debe calcular, no s&oacute;lo en el modelo en espiral";
 answers[8] = choices[8][1];
 units[8] = "76";
 comments[8] = "Id Pregunta: 2212. ";


//  Id pregunta: 2221 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Qu&eacute; variable utiliza COCOMO?:";
 choices[9]= new Array();
 choices[9][0] = "El n&uacute;mero de personas que intervienen en un proyectos";
 choices[9][1] = "N&uacute;mero de instrucciones en pseudoc&oacute;digo";
 choices[9][2] = "N&uacute;mero de instrucciones de c&oacute;digo fuente";
 choices[9][3] = "No se usan  las instrucciones de c&oacute;digo fuente porque var&iacute;an de un lenguaje a otro";
 answers[9] = choices[9][2];
 units[9] = "89";
 comments[9] = "Id Pregunta: 2221. NULL";


//  Id pregunta: 2247 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Del modelo de ciclo de vida en espiral se puede decir:";
 choices[10]= new Array();
 choices[10][0] = "Es un modelo orientado a la gesti&oacute;n de riesgos y permite el prototipado r&aacute;pido";
 choices[10][1] = "No es un modelo orientado a la gesti&oacute;n de riesgos, pero permite el prototipado r&aacute;pido";
 choices[10][2] = "Es un modelo orientado a la gesti&oacute;n de riesgos, pero no permite el prototipado";
 choices[10][3] = "No es un modelo orientado a la gesti&oacute;n de riesgos y no permite el prototipado r&aacute;pido";
 answers[10] = choices[10][0];
 units[10] = "76";
 comments[10] = "Id Pregunta: 2247. ";


//  Id pregunta: 2279 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  El m&eacute;todo de los puntos de funci&oacute;n:";
 choices[11]= new Array();
 choices[11][0] = "Es dependiente del lenguaje de programaci&oacute;n que se use";
 choices[11][1] = "S&oacute;lo se aplica a proyectos en los que no se pueda usar COCOMO";
 choices[11][2] = "Se basa en el uso de una relaci&oacute;n emp&iacute;rica";
 choices[11][3] = "No es subjetivo, es muy objetivo";
 answers[11] = choices[11][2];
 units[11] = "89";
 comments[11] = "Id Pregunta: 2279. NULL";


//  Id pregunta: 2283 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  El modelo de ciclo de vida en espiral:";
 choices[12]= new Array();
 choices[12][0] = "No permite detectar errores en las primeras fases";
 choices[12][1] = "Se adapta bien a las metodolog&iacute;as orientadas a objetos";
 choices[12][2] = "Implica procedimientos separados para el desarrollo de los programas y su mantenimiento";
 choices[12][3] = "Tiende a pasar por alto los factores de riesgo";
 answers[12] = choices[12][1];
 units[12] = "76";
 comments[12] = "Id Pregunta: 2283. ";


//  Id pregunta: 2293 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  El modo org&aacute;nico de aplicar los modelos de COCOMO considera:";
 choices[13]= new Array();
 choices[13][0] = "Proyectos peque&ntilde;os";
 choices[13][1] = "Proyectos de complejidad media";
 choices[13][2] = "Proyectos de complejidad alta";
 choices[13][3] = "Proyectos que deben desarrollarse dentro de un hardware y software estricto y con restricciones operativas";
 answers[13] = choices[13][0];
 units[13] = "89";
 comments[13] = "Id Pregunta: 2293. NULL";


//  Id pregunta: 2332 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  En la t&eacute;cnica de medida de la complejidad de Halstead se mide la complejidad por:";
 choices[14]= new Array();
 choices[14][0] = "El n&uacute;mero de operadores diferentes";
 choices[14][1] = "El n&uacute;mero de operandos diferentes";
 choices[14][2] = "Por su volumen que es el logaritmo en base 2 del producto del numero de  los operadores diferentes por el n&uacute;mero de operandos diferentes";
 choices[14][3] = "Por su longitud que es una funci&oacute;n de los operandos diferentes y de los operadores diferentes y que es una buena aproximaci&oacute;n a la suma del n&uacute;mero total de operadores y del numero total de operandos";
 answers[14] = choices[14][3];
 units[14] = "88";
 comments[14] = "Id Pregunta: 2332. NULL";


//  Id pregunta: 2340 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  En los modelos orientados a objeto, un m&eacute;todo:";
 choices[15]= new Array();
 choices[15][0] = "Es una implementaci&oacute;n espec&iacute;fica de una operaci&oacute;n en una determinada clase";
 choices[15][1] = "Es la implementaci&oacute;n de un operador, independientemente de la clase a la que se aplica";
 choices[15][2] = "Es la implementaci&oacute;n sistem&aacute;tica del mecanismo de herencia";
 choices[15][3] = "Es un procedimiento sistem&aacute;tico para el dise&ntilde;o del sistema";
 answers[15] = choices[15][0];
 units[15] = "82";
 comments[15] = "Id Pregunta: 2340. ";


//  Id pregunta: 2345 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  En programaci&oacute;n orientada a objetos:";
 choices[16]= new Array();
 choices[16][0] = "Los objetos son m&oacute;dulos que contienen s&oacute;lo datos, de cualquier tipo";
 choices[16][1] = "Los objetos son m&oacute;dulos que contienen los datos y las instrucciones u operaciones que manipulan esos datos";
 choices[16][2] = "Los objetos pueden ser tratados como cualquier otro dato mediante un lenguaje procedural";
 choices[16][3] = "No existe una concepci&oacute;n din&aacute;mica del objeto como una entidad que exista en tiempo de ejecuci&oacute;n";
 answers[16] = choices[16][1];
 units[16] = "82";
 comments[16] = "Id Pregunta: 2345. ";


//  Id pregunta: 2354 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Entre las causas m&aacute;s habituales que provocan el descontento de los usuarios respecto de los productos de software obtenidos tenemos:";
 choices[17]= new Array();
 choices[17][0] = "Mantenimiento permanente.";
 choices[17][1] = "Coste cerrado del producto.";
 choices[17][2] = "Necesidades no satisfechas por la dificultad del producto para adaptarse a otros requerimientos.";
 choices[17][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;c&rsquo; son correctas.";
 answers[17] = choices[17][2];
 units[17] = "91";
 comments[17] = "Id Pregunta: 2354. ";


//  Id pregunta: 2362 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Entre las ventajas que presenta el modelo en espiral o iterativo del ciclo de vida respecto a otros modelos, est&aacute;:";
 choices[18]= new Array();
 choices[18][0] = "Su rango de opciones acomoda las buenas caracter&iacute;sticas de los dem&aacute;s modelos de desarrollo de software";
 choices[18][1] = "Permite preparar la evoluci&oacute;n del ciclo de vida, crecimiento y cambios del producto software";
 choices[18][2] = "Es especialmente indicado para la temprana eliminaci&oacute;n de errores y alternativas poco atractivas";
 choices[18][3] = "Todas las anteriores son ventajas del modelo de ciclo de vida en espiral";
 answers[18] = choices[18][3];
 units[18] = "76";
 comments[18] = "Id Pregunta: 2362. ";


//  Id pregunta: 2411 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Como valor promedio, se considera habitualmente que un ser humano no puede distinguir m&aacute;s de:";
 choices[19]= new Array();
 choices[19][0] = "2.000.000 colores y 700 grises";
 choices[19][1] = "200 grises y 7.000.000 de colores";
 choices[19][2] = "7.000 colores y 2.000.000 grises";
 choices[19][3] = "2.000.000 de grises y 700.000 colores";
 answers[19] = choices[19][1];
 units[19] = "93";
 comments[19] = "Id Pregunta: 2411. NULL";


//  Id pregunta: 2428 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  La orientaci&oacute;n a objetos usa com&uacute;nmente dos tipos de mecanismos de herencia: herencia simple y herencia m&uacute;ltiple. La herencia repetida:";
 choices[20]= new Array();
 choices[20][0] = "Supone que una clase, llamada subclase, hereda caracter&iacute;sticas y m&eacute;todos de una sola clase superior llamada superclase, a la que puede a&ntilde;adir o borrar alg&uacute;n comportamiento.";
 choices[20][1] = "Es un tipo de herencia m&uacute;ltiple en la que en la jerarqu&iacute;a de la herencia hay ciclos, es decir, una clase hereda directa o indirectamente de otra clase m&aacute;s de una vez.";
 choices[20][2] = "Consiste en que un objeto dado tenga m&aacute;s de un padre.";
 choices[20][3] = "No existe.";
 answers[20] = choices[20][1];
 units[20] = "82,84";
 comments[20] = "Id Pregunta: 2428. ";


//  Id pregunta: 2433 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Indicar a qu&eacute; corresponde la siguiente definici&oacute;n propuesta por el IEEE dentro del &aacute;mbito de la reingenier&iacute;a e ingenier&iacute;a inversa: &quot;la transformaci&oacute;n de una forma de representaci&oacute;n de un sistema en otra distinta pero del mismo nivel de abstracci&oacute;n, sin modificar el comportamiento&quot;";
 choices[21]= new Array();
 choices[21][0] = "Ingenier&iacute;a inversa";
 choices[21][1] = "Reestructuraci&oacute;n";
 choices[21][2] = "Reingenier&iacute;a";
 choices[21][3] = "Ingenier&iacute;a hacia delante";
 answers[21] = choices[21][1];
 units[21] = "91";
 comments[21] = "Id Pregunta: 2433. NULL";


//  Id pregunta: 2519 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas corresponde de forma exclusiva a la tecnolog&iacute;a OCR del tipo &quot;reconocimiento de patrones&quot;?:";
 choices[22]= new Array();
 choices[22][0] = "Almacena la informaci&oacute;n en soporte &oacute;ptico WORM";
 choices[22][1] = "Compara los datos escaneados con una plantilla de caracteres est&aacute;ndar";
 choices[22][2] = "Compara la forma de los caracteres con tablas de formas, examinando la organizaci&oacute;n de los bits";
 choices[22][3] = "Utiliza t&eacute;cnicas de compresi&oacute;n de datos";
 answers[22] = choices[22][2];
 units[22] = "93";
 comments[22] = "Id Pregunta: 2519. NULL";


//  Id pregunta: 2520 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es la menos relevante a la hora de especificar un sistema de reconocimiento de voz?:";
 choices[23]= new Array();
 choices[23][0] = "La amplitud del vocabulario soportado";
 choices[23][1] = "La fluidez de la locuci&oacute;n admitida por el sistema";
 choices[23][2] = "La dependencia o independencia del orador";
 choices[23][3] = "La capacidad de interpretar el habla cuando el orador se expresa en tono bajo";
 answers[23] = choices[23][3];
 units[23] = "94";
 comments[23] = "Id Pregunta: 2520. ";


//  Id pregunta: 2581 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  &iquest; Cu&aacute;l no es un formato de audio ?";
 choices[24]= new Array();
 choices[24][0] = "WMA";
 choices[24][1] = "WAV";
 choices[24][2] = "OGG";
 choices[24][3] = "PNG";
 answers[24] = choices[24][3];
 units[24] = "94";
 comments[24] = "Id Pregunta: 2581. ";


//  Id pregunta: 2673 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  En los Sistemas de Recuperaci&oacute;n de Informaci&oacute;n la l&oacute;gica borrosa permite:";
 choices[25]= new Array();
 choices[25][0] = "Indexar parcialmente un documento mediante dos o m&aacute;s t&eacute;rminos.";
 choices[25][1] = "Clasificar los textos con arreglo a su relevancia estimada.";
 choices[25][2] = "T&eacute;cnicas de muestreo de la cuantificaci&oacute;n del grado de relevancia de las claves.";
 choices[25][3] = "Generar varias claves sin tener en cuenta el Tesauro.";
 answers[25] = choices[25][1];
 units[25] = "96";
 comments[25] = "Id Pregunta: 2673. NULL";


//  Id pregunta: 2694 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  Los sistemas de reconocimiento &oacute;ptico de caracteres:";
 choices[26]= new Array();
 choices[26][0] = "Son caros y dif&iacute;ciles de configurar.";
 choices[26][1] = "Pueden necesitar un entrenamiento para su mejor funcionamiento.";
 choices[26][2] = "Extienden las capacidades del c&aacute;lculo diferencial hacia la resoluci&oacute;n de problemas de parametrizaci&oacute;n polim&eacute;trica.";
 choices[26][3] = "Suponen un gasto necesario para aumentar el n&uacute;mero de documentos almacenados en papel en el paradigma de la oficina sin papeles.";
 answers[26] = choices[26][1];
 units[26] = "96";
 comments[26] = "Id Pregunta: 2694. NULL";


//  Id pregunta: 2712 AÃ±o de creación de pregunta: 2003-01-01
 questions[27]= "28)  &iquest;Cu&aacute;l de estos es un tipo de fichero de sonido?";
 choices[27]= new Array();
 choices[27][0] = " TIFF";
 choices[27][1] = "PNG";
 choices[27][2] = " VRML ";
 choices[27][3] = "MIDI";
 answers[27] = choices[27][3];
 units[27] = "94";
 comments[27] = "Id Pregunta: 2712. ";


//  Id pregunta: 2715 AÃ±o de creación de pregunta: 2004-01-01
 questions[28]= "29)  Indique la afirmaci&oacute;n FALSA sobre webDAV";
 choices[28]= new Array();
 choices[28][0] = "Sus siglas son: Web Data Authoring and Versioning";
 choices[28][1] = "Se le conoce tambi&eacute;n como Web folders";
 choices[28][2] = "Es un protocolo que permite a los usuarios gestionar y editar ficheros de forma colaborativa en servidores remotos";
 choices[28][3] = "Es una extensi&oacute;n del protocolo http";
 answers[28] = choices[28][0];
 units[28] = "95";
 comments[28] = "Id Pregunta: 2715. NULL";


//  Id pregunta: 2719 AÃ±o de creación de pregunta: 2006-01-01
 questions[29]= "30)  Indicar la afirmaci&oacute;n incorrecta relacionada con los modelos de ciclo de vida:";
 choices[29]= new Array();
 choices[29][0] = "El modelo en cascada supone que los requisitos son inamovibles a lo largo del desarrollo";
 choices[29][1] = "El modelo de prototipado permite definir los requisitos de desarrollo a medida que se va desarrollando";
 choices[29][2] = "El modelo en espiral se centra en la identificaci&oacute;n de los riesgos y en la manera de resolverlos";
 choices[29][3] = "Los modelos de transformaci&oacute;n se aplican en la actualidad con lenguaje 4G (generaci&oacute;n autom&aacute;tica de c&oacute;digo) especialmente indicado para proyectos grandes";
 answers[29] = choices[29][3];
 units[29] = "76";
 comments[29] = "Id Pregunta: 2719. ";


//  Id pregunta: 2720 AÃ±o de creación de pregunta: 2006-01-01
 questions[30]= "31)  Seg&uacute;n Martins, el modelo de construcci&oacute;n de prototipos no est&aacute; recomendado:";
 choices[30]= new Array();
 choices[30][0] = "En proyectos muy grandes y a largo plazo (de duraci&oacute;n mayor a un a&ntilde;o) porque los requisitos ser&aacute; dif&iacute;cil mantenerlos congelados tanto tiempo";
 choices[30][1] = "En proyectos peque&ntilde;os (de duraci&oacute;n inferior a un mes) porque es dif&iacute;cil que los requisitos sean tan complejos como para no conocerlos";
 choices[30][2] = "S&iacute; est&aacute; recomendado para proyectos de tama&ntilde;o medio cuyo desarrollo va entre 3 y 5 meses";
 choices[30][3] = "Todas las anteriores respuestas son correctas";
 answers[30] = choices[30][3];
 units[30] = "76";
 comments[30] = "Id Pregunta: 2720. ";


//  Id pregunta: 2743 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  En el modelo entidad-relaci&oacute;n extendido el grado es:";
 choices[31]= new Array();
 choices[31][0] = "El n&uacute;mero de entidades que participan en una relaci&oacute;n";
 choices[31][1] = "Es el n&uacute;mero m&aacute;ximo de ocurrencias de cada tipo de entidad que pueden intervenir en una ocurrencia de la relaci&oacute;n que se est&aacute; tratando";
 choices[31][2] = "El n&uacute;mero de columnas de una tabla";
 choices[31][3] = "Es una propiedad o caracter&iacute;stica de un tipo de entidad";
 answers[31] = choices[31][0];
 units[31] = "58,80";
 comments[31] = "Id Pregunta: 2743. ";


//  Id pregunta: 2779 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  El modelo de ciclo de vida R.A.D se basa en:";
 choices[32]= new Array();
 choices[32][0] = "El modelo de desarrollo incremental";
 choices[32][1] = "El modelo en espiral";
 choices[32][2] = "El prototipado evolutivo";
 choices[32][3] = "Ninguno de los anteriores";
 answers[32] = choices[32][2];
 units[32] = "85";
 comments[32] = "Id Pregunta: 2779. ";


//  Id pregunta: 2796 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  Qu&eacute; tipo de actividades contempla M&eacute;trica v3 en la interfaz de seguridad";
 choices[33]= new Array();
 choices[33][0] = "Seguridad intr&iacute;nseca del sistema";
 choices[33][1] = "seguridad del proceso de desarrollo";
 choices[33][2] = "Formaci&oacute;n en materia de seguridad";
 choices[33][3] = "Todas son correctas";
 answers[33] = choices[33][3];
 units[33] = "86";
 comments[33] = "Id Pregunta: 2796. NULL";


//  Id pregunta: 2797 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  La t&eacute;cnica de Coste/beneficio contemplada en M&eacute;trica v3 no tiene como objetivo";
 choices[34]= new Array();
 choices[34][0] = "Estimar el plazo de realizaci&oacute;n del proyecto";
 choices[34][1] = "Estimar recursos";
 choices[34][2] = "selecci&oacute;n de alternativa m&aacute;s beneficiosa";
 choices[34][3] = "Oportunidad de acometer el proyecto";
 answers[34] = choices[34][0];
 units[34] = "86";
 comments[34] = "Id Pregunta: 2797. NULL";


//  Id pregunta: 2817 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  En el M&eacute;todo de los Puntos de Funci&oacute;n &quot;MARK II&quot;:";
 choices[35]= new Array();
 choices[35][0] = "Un sistema se configura como un conjunto de &quot;aplicaciones tipo&quot; l&oacute;gicas.";
 choices[35][1] = "Las consultas se tratan como una entrada m&aacute;s.";
 choices[35][2] = "Se emplea el concepto de &quot;fichero l&oacute;gico&quot;.";
 choices[35][3] = "Se consideran 19 caracter&iacute;sticas del sistema para calcular los valores de ajuste de la complejidad.";
 answers[35] = choices[35][3];
 units[35] = "89";
 comments[35] = "Id Pregunta: 2817. NULL";


//  Id pregunta: 2828 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  &iquest;Cu&aacute;l de los siguientes no es un criterio para abordar un proceso de ajuste dimensional?";
 choices[36]= new Array();
 choices[36][0] = "Interconectividad.";
 choices[36][1] = "Seguridad.";
 choices[36][2] = "Grado de conocimiento de los usuarios finales.";
 choices[36][3] = "Reducci&oacute;n del presupuesto.";
 answers[36] = choices[36][3];
 units[36] = "90";
 comments[36] = "Id Pregunta: 2828. ";


//  Id pregunta: 2852 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  Indicar la falsa";
 choices[37]= new Array();
 choices[37][0] = "En la comparaci&oacute;n matricial se pueden utilizar filtros digitales que aclaran la informaci&oacute;n a almacenar, para optimizar el casamiento";
 choices[37][1] = "En la comparaci&oacute;n matricial escanea la forma de los caracteres y los compara con tablas de formas";
 choices[37][2] = "En el reconocimiento por patrones escanea la forma de los caracteres y los compara con tablas de formas";
 choices[37][3] = "El reconocimiento por patrones ofrece m&aacute;s flexibilidad que la comparaci&oacute;n matricial";
 answers[37] = choices[37][1];
 units[37] = "94";
 comments[37] = "Id Pregunta: 2852. ";


//  Id pregunta: 4289 AÃ±o de creación de pregunta: 2007-01-01
 questions[38]= "39)  Si tiene que desarrollar un procesador de textos siguiendo un modelo de ciclo de vida incremental, &iquest;qu&eacute; funcionalidad abordar&iacute;a primero?";
 choices[38]= new Array();
 choices[38][0] = "Las funciones de edici&oacute;n m&aacute;s sofisticadas.";
 choices[38][1] = "La gesti&oacute;n b&aacute;sica de archivos y producci&oacute;n de documentos.";
 choices[38][2] = "La m&aacute;s sencilla, para ir de menor a mayor complejidad.";
 choices[38][3] = "La funcionalidad m&aacute;s independiente del usuario, como por ejemplo, la correcci&oacute;n ortogr&aacute;fica y gramatical";
 answers[38] = choices[38][1];
 units[38] = "76";
 comments[38] = "Id Pregunta: 4289. ";


//  Id pregunta: 4478 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  &iquest;Que son el &quot;modelo cebolla&quot; y el &quot;modelo tostadora&quot;?";
 choices[39]= new Array();
 choices[39][0] = "Modelos de ciclo de vida de sistemas de informaci&oacute;n.";
 choices[39][1] = "Modelos de integraci&oacute;n de herramientas CASE.";
 choices[39][2] = "Modelos de diagrama de flujo de datos.";
 choices[39][3] = "Modelos de objetos para sistemas orientados al objeto.";
 answers[39] = choices[39][1];
 units[39] = "";
 comments[39] = "Id Pregunta: 4478. ";


//  Id pregunta: 4639 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  Quien NO es un participante en la actividad An&aacute;lisis de Consistencia y Especificaci&oacute;n de Requisitos del proceso de An&aacute;lisis de Sistemas de Informaci&oacute;n";
 choices[40]= new Array();
 choices[40][0] = "usuarios expertos";
 choices[40][1] = "Analistas";
 choices[40][2] = "jefe de proyecto";
 choices[40][3] = "equipo de arquitectura";
 answers[40] = choices[40][2];
 units[40] = "86";
 comments[40] = "Id Pregunta: 4639. NULL";


//  Id pregunta: 4679 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  Defina Throughput:";
 choices[41]= new Array();
 choices[41][0] = "Cantidad de trabajo &uacute;til ejecutado por unidad de tiempo en un entorno de carga determinado (medido entrabajos por hora o transacciones por segundo)";
 choices[41][1] = "M&aacute;xima cantidad de trabajo &uacute;til que se puede realizar por unidad de tiempo en un entorno de cargadeterminado (medido en trabajos por hora o transacciones por segundo)";
 choices[41][2] = "&quot;swing job&quot; o trabajo excedentario que se puede realizar antes de llegar a la saturaci&oacute;n (medido en trabajospor hora o transacciones por segundo)";
 choices[41][3] = "M&iacute;nima cantidad de trabajo &uacute;til que se puede realizar por unidad de tiempo en un entorno de cargadeterminado (medido en trabajos por hora o transacciones por segundo)";
 answers[41] = choices[41][0];
 units[41] = "89";
 comments[41] = "Id Pregunta: 4679. Examen 2006 JCYL";


//  Id pregunta: 4695 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  Indicar lo que no contribuye a que la estimaci&oacute;n del esfuerzo de desarrollo sea tan dif&iacute;cil de realizar.";
 choices[42]= new Array();
 choices[42][0] = "El hecho de que cada organizaci&oacute;n tiene sus propios recursos, procedimientos e historia, y es necesarioajustar los procesos de estimaci&oacute;n a esos par&aacute;metros &uacute;nicos.";
 choices[42][1] = "La rapidez con la que cambian las tecnolog&iacute;as de la informaci&oacute;n y las metodolog&iacute;as del desarrollo.";
 choices[42][2] = "La tendencia de los desarrolladores hacia la sobreestimaci&oacute;n";
 choices[42][3] = "El ignorar los aspectos no lineales del desarrollo del software (como son la coordinaci&oacute;n y la gesti&oacute;n).";
 answers[42] = choices[42][2];
 units[42] = "89";
 comments[42] = "Id Pregunta: 4695. Examen 2006 JCYL";


//  Id pregunta: 4720 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  Los principales factores de calidad seg&uacute;n Bertrand Meyer son:";
 choices[43]= new Array();
 choices[43][0] = "Eficiencia y fiabilidad";
 choices[43][1] = "Fiabilidad y modularidad";
 choices[43][2] = "Fiabilidad y extensibilidad";
 choices[43][3] = "Correcci&oacute;n y verificabilidad";
 answers[43] = choices[43][1];
 units[43] = "88";
 comments[43] = "Id Pregunta: 4720. Examen 2006 JCYL";


//  Id pregunta: 4827 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  El marco COBIT (Control Objectives for Information and related Technology) es una herramienta de gobierno de lasTIC. En su marco de control, que identifica los requisitos de negocio, el proceso de &quot;Gesti&oacute;n de la Calidad&quot; seencuentra definido en el dominio de:";
 choices[44]= new Array();
 choices[44][0] = "Planificaci&oacute;n y organizaci&oacute;n";
 choices[44][1] = "Adquisici&oacute;n e Implementaci&oacute;n";
 choices[44][2] = "Servicio y Soporte";
 choices[44][3] = "Monitorizaci&oacute;n";
 answers[44] = choices[44][0];
 units[44] = "98";
 comments[44] = "Id Pregunta: 4827. NULL";


//  Id pregunta: 4872 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  Seg&uacute;n el Modelo de Calidad de McCall, el factor &quot;Correcci&oacute;n&quot; debe ser tenido en cuenta cuando el productosoftware se encuentra en la fase de:";
 choices[45]= new Array();
 choices[45][0] = "Construcci&oacute;n";
 choices[45][1] = "Explotaci&oacute;n";
 choices[45][2] = "Revisi&oacute;n";
 choices[45][3] = "Transici&oacute;n";
 answers[45] = choices[45][1];
 units[45] = "88";
 comments[45] = "Id Pregunta: 4872. NULL";


//  Id pregunta: 4881 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  Los casos de uso son una t&eacute;cnica eficaz para la determinaci&oacute;n de necesidades. &Eacute;stos fueron creados por:";
 choices[46]= new Array();
 choices[46][0] = "Warnier-Orr";
 choices[46][1] = "Rumbaugh";
 choices[46][2] = "Jacobson";
 choices[46][3] = "Booch";
 answers[46] = choices[46][2];
 units[46] = "82";
 comments[46] = "Id Pregunta: 4881. ";


//  Id pregunta: 4936 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  Dentro de la t&eacute;cnica de desarrollo de sistemas de informaci&oacute;n denominada Diagrama de Interacci&oacute;n, el periodo de tiempo en el cual el objeto se encuentra ejecutando alguna operaci&oacute;n en un diagrama de secuencia se denomina:";
 choices[47]= new Array();
 choices[47][0] = "L&iacute;nea de vida.";
 choices[47][1] = "Foco de control.";
 choices[47][2] = "Tiempo de latencia.";
 choices[47][3] = "Per&iacute;odo de acci&oacute;n.";
 answers[47] = choices[47][1];
 units[47] = "84";
 comments[47] = "Id Pregunta: 4936. Examen TIC B 2007";


//  Id pregunta: 4945 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  En el desarrollo de software, las pruebas &ldquo;alfa&rdquo; se pueden considerar:";
 choices[48]= new Array();
 choices[48][0] = "Pruebas de caja negra.";
 choices[48][1] = "Pruebas de caja transparente.";
 choices[48][2] = "Pruebas de recuperaci&oacute;n.";
 choices[48][3] = "Pruebas de seguridad.";
 answers[48] = choices[48][0];
 units[48] = "87";
 comments[48] = "Id Pregunta: 4945. Examen TIC B 2007";


//  Id pregunta: 5150 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  En un DFD, &iquest;Cu&aacute;l es la diferencia entre un digrama de contexto y un diagrama de nivel 0?";
 choices[49]= new Array();
 choices[49][0] = "El diagrama de contexto no pertenece al DFD sino que es previo al mismo, el cual comienza con el diagrama de nivel 1.";
 choices[49][1] = "El diagrama de nivel 0 no existe, ya que los niveles empiezan en el 1, con lo cual no tiene sentido la comparaci&oacute;n.";
 choices[49][2] = "La &uacute;nica diferencia entre un diagrama de contexto y un diagrama de nivel 0 es que &eacute;ste &uacute;ltimo carece de entidades externas.";
 choices[49][3] = "No hay ninguna diferencia entre ambos pues se llama diagrama de contexto al diagrama de nivel 0 de un DFD.";
 answers[49] = choices[49][3];
 units[49] = "81";
 comments[49] = "Id Pregunta: 5150. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5198 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes no es una ventaja de la t&eacute;cnica del prototipado?";
 choices[50]= new Array();
 choices[50][0] = "Hace part&iacute;cipes a los usuarios del desarrollo";
 choices[50][1] = "Facilita la continua revisi&oacute;n del sistema por parte de los usuarios";
 choices[50][2] = "Desemboca en sistemas muy flexibles a cambios posteriores";
 choices[50][3] = "En general, reduce el tiempo de los desarrollos posteriores";
 answers[50] = choices[50][2];
 units[50] = "85";
 comments[50] = "Id Pregunta: 5198. ";


//  Id pregunta: 5225 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  Todo ciclo de vida debe cubrir unos objetivos b&aacute;sicos. Indicar la FALSA:";
 choices[51]= new Array();
 choices[51][0] = "Definir las actividades a realizar y el orden";
 choices[51][1] = "Definir las t&eacute;cnicas a utilizar para la realizaci&oacute;n de las actividades";
 choices[51][2] = "Asegurar la consistencia con el resto de sistemas de informaci&oacute;n de la organizaci&oacute;n.";
 choices[51][3] = "Proporcionar puntos de control para la gesti&oacute;n del proyecto.";
 answers[51] = choices[51][1];
 units[51] = "76";
 comments[51] = "Id Pregunta: 5225. ";


//  Id pregunta: 5241 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  Respecto al an&aacute;lisis D.A.F.O indique la opci&oacute;n incorrecta ";
 choices[52]= new Array();
 choices[52][0] = "Herramienta estrat&eacute;gica por excelencia cuyo objetivo es conocer la situaci&oacute;n real de una organizaci&oacute;n, as&iacute; como los riesgos y oportunidades que le brinda el mercado";
 choices[52][1] = "Tambi&eacute;n llamado Matriz TOWS en terminolog&iacute;a anglosajona";
 choices[52][2] = "Las amenazas y oportunidades corresponden al entorno interno de la organizaci&oacute;n, debiendo &eacute;sta a aprovecharlas o superarlas, anticip&aacute;ndose a las mismas";
 choices[52][3] = "Las fortalezas suponen ventaja competitiva que pueden servir para explotar oportunidades";
 answers[52] = choices[52][2];
 units[52] = "77";
 comments[52] = "Id Pregunta: 5241. ";


//  Id pregunta: 5253 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  Indique la afirmaci&oacute;n FALSA en relaci&oacute;n al modelo CMM:";
 choices[53]= new Array();
 choices[53][0] = "Consta de 5 niveles de madurez";
 choices[53][1] = "Todos los niveles se descomponen en &aacute;reas de procesos clave";
 choices[53][2] = "Las &aacute;reas de procesos clave  indican las &aacute;reas que una organizaci&oacute;n debe desarrollar para mejorar su proceso software y alcanzar un nivel de madurez";
 choices[53][3] = "Las &aacute;reas claves del proceso se organizan en caracter&iacute;sticas comunes que indican si la implementaci&oacute;n de un proceso clave es efectiva, repetible y duradera.";
 answers[53] = choices[53][1];
 units[53] = "87";
 comments[53] = "Id Pregunta: 5253. NULL";


//  Id pregunta: 5526 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  Indicar la respuesta verdadera";
 choices[54]= new Array();
 choices[54][0] = "El formato PDF417 permite almacenar hasta 2710 caracteres y soporta detecci&oacute;n y correcci&oacute;n de errores";
 choices[54][1] = "PCR (Printed Character Recognition) son los sistemas que pueden reconocer informaci&oacute;n gr&aacute;fica codificada en braille";
 choices[54][2] = "Las siglas ICR responden a Intelligent Computer Redefinition";
 choices[54][3] = "Ninguna es verdadera";
 answers[54] = choices[54][0];
 units[54] = "94";
 comments[54] = "Id Pregunta: 5526. ";


//  Id pregunta: 5530 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  Indicar la respuesta verdadera";
 choices[55]= new Array();
 choices[55][0] = "En la gesti&oacute;n de contenidos lo m&aacute;s importante es el almacenamiento de los documentos";
 choices[55][1] = "La gesti&oacute;n de contenidos suele estar orientada a la creaci&oacute;n y edici&oacute;n de p&aacute;ginas web";
 choices[55][2] = "Todos los gestores de documentos son tambi&eacute;n gestores de contenidos";
 choices[55][3] = "Los gestores de documentos no est&aacute;n preparados para el manejo de muchos ficheros de gran tama&ntilde;o";
 answers[55] = choices[55][0];
 units[55] = "95";
 comments[55] = "Id Pregunta: 5530. NULL";


//  Id pregunta: 5824 AÃ±o de creación de pregunta: 2009-01-01
 questions[56]= "57)  Indique cu&aacute;l de los siguientes criterios NO es correcto de acuerdo con el Modelo EFQM de Excelencia";
 choices[56]= new Array();
 choices[56][0] = "Colaboradores y recursos";
 choices[56][1] = "Resultados clave";
 choices[56][2] = "Resultados en la sociedad";
 choices[56][3] = "Viabilidad econ&oacute;mica";
 answers[56] = choices[56][3];
 units[56] = "92";
 comments[56] = "Id Pregunta: 5824. MAP 2008 A1";


//  Id pregunta: 5903 AÃ±o de creación de pregunta: 2009-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n con M&Eacute;TRICA v.3 es FALSA?:";
 choices[57]= new Array();
 choices[57][0] = "Cubre distintos tipos de desarrollo: &quot;estructurado&quot; y &quot;orientado a objetos&quot;";
 choices[57][1] = "En su estructura se distinguen tres procesos principales";
 choices[57][2] = "Se incluyen Interfaces para aspectos de gesti&oacute;n";
 choices[57][3] = "El proceso de desarrollo de Sistemas de Informaci&oacute;n se divide en cuatro procesos: &quot;an&aacute;lisis&quot;, &quot;dise&ntilde;o&quot;, &quot;construcci&oacute;n&quot;, e &quot;implantaci&oacute;n y aceptaci&oacute;n&quot; del sistema";
 answers[57] = choices[57][3];
 units[57] = "86";
 comments[57] = "Id Pregunta: 5903. MAP 2008 A1";


//  Id pregunta: 5963 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  Seg&uacute;n la Norma ISO 9000:2000, la expresi&oacute;n formal por la Direcci&oacute;n de las intenciones globales y orientaci&oacute;n de una organizaci&oacute;n relativas a la calidad, se denomina:";
 choices[58]= new Array();
 choices[58][0] = "Gesti&oacute;n de la calidad";
 choices[58][1] = "Norma de la calidad";
 choices[58][2] = "Pol&iacute;tica de la calidad";
 choices[58][3] = "Direcci&oacute;n de la calidad";
 answers[58] = choices[58][2];
 units[58] = "87";
 comments[58] = "Id Pregunta: 5963. Castilla La Mancha 2009";


//  Id pregunta: 6131 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  En un diagrama de flujo de datos:";
 choices[59]= new Array();
 choices[59][0] = "Un almac&eacute;n puede realizar un flujo de datos tanto con otro almac&eacute;n como con un proceso.";
 choices[59][1] = "Un almac&eacute;n puede realizar un flujo de datos tanto con una entidad externa como con un proceso.";
 choices[59][2] = "Un almac&eacute;n s&oacute;lo puede realizar un flujo de datos con un proceso.";
 choices[59][3] = "Un proceso s&oacute;lo puede realizar un flujo de datos con un almac&eacute;n.";
 answers[59] = choices[59][2];
 units[59] = "81";
 comments[59] = "Id Pregunta: 6131. TIC A 2009";


//  Id pregunta: 6230 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  De acuerdo con las recomendaciones de ITIL, la Aceptaci&oacute;n e Instalaci&oacute;n de los Ordenadores por primera vez, se cubre en:";
 choices[60]= new Array();
 choices[60][0] = "Gesti&oacute;n de la Infraestructura";
 choices[60][1] = "Gesti&oacute;n de Soporte";
 choices[60][2] = "Gesti&oacute;n de Entrega";
 choices[60][3] = "Gesti&oacute;n de Aplicaciones";
 answers[60] = choices[60][0];
 units[60] = "98";
 comments[60] = "Id Pregunta: 6230. TICB-2009, bloque desarrollo";


//  Id pregunta: 6238 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  Indique c&oacute;mo se denomina el patr&oacute;n de dise&ntilde;o que representa y externaliza el estado interno de un objeto sin violar la encapsulaci&oacute;n, de forma que &eacute;ste puede volver a dicho estado m&aacute;s tarde:";
 choices[61]= new Array();
 choices[61][0] = "Spider.";
 choices[61][1] = "State.";
 choices[61][2] = "Observer.";
 choices[61][3] = "Memento.";
 answers[61] = choices[61][3];
 units[61] = "84";
 comments[61] = "Id Pregunta: 6238. TICB-2009, bloque desarrollo";


//  Id pregunta: 6255 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  &iquest;Cu&aacute; de las siguientes afirmaciones referentes a tipos de mantenimiento es falsa?";
 choices[62]= new Array();
 choices[62][0] = "Mantenimiento Correctivo comprende aquellos cambios necesarios para corregir errores del producto software";
 choices[62][1] = "Mantenimiento Evolutivo se refiere a las modificaciones necesarias para adaptar el sistema y el entorno a una nueva versi&oacute;n del producto";
 choices[62][2] = "Mantenimiento Adaptativo engloba las modificaciones que afectan a los entornos en los que el sistema opera: cambios de configuraci&oacute;n del hardware, software de base, gestores de base de datos, comunicaciones, etc.";
 choices[62][3] = "Mantenimiento Perfectivo son acciones llevadas a cabo para mejorar la calidad interna de los sistemas en cualquiera de sus aspectos: reestructuraci&oacute;n del c&oacute;digo, definici&oacute;n m&aacute;s clara del sistema y optimizaci&oacute;n del rendimiento y eficiencia";
 answers[62] = choices[62][1];
 units[62] = "87";
 comments[62] = "Id Pregunta: 6255. TICB-2009, bloque desarrollo";


//  Id pregunta: 6294 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l de las siguientes no es una t&eacute;cnica de alto nivel de obtenci&oacute;n de requisitos en el an&aacute;lisis de los sistemas de Informaci&oacute;n?";
 choices[63]= new Array();
 choices[63][0] = "Prototipos";
 choices[63][1] = "Sesiones JAD y JRP";
 choices[63][2] = "Entorno de Bucles Adaptativo";
 choices[63][3] = "Todas lo son";
 answers[63] = choices[63][3];
 units[63] = "78";
 comments[63] = "Id Pregunta: 6294. ";


//  Id pregunta: 6299 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  &iquest;C&oacute;mo se denomina cada uno de los objetos individuales pertenecientes a una clase?";
 choices[64]= new Array();
 choices[64][0] = "Ente";
 choices[64][1] = "Participaci&oacute;n";
 choices[64][2] = "Instancia";
 choices[64][3] = "Abstracci&oacute;n";
 answers[64] = choices[64][2];
 units[64] = "82";
 comments[64] = "Id Pregunta: 6299. ";


//  Id pregunta: 6610 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  En un DFD, entre 2 procesos existir&aacute; un almac&eacute;n de datos cuando:";
 choices[65]= new Array();
 choices[65][0] = "La comunicaci&oacute;n entre ellos sea s&iacute;ncrona";
 choices[65][1] = "La comunicaci&oacute;n entre ellos sea as&iacute;ncrona";
 choices[65][2] = "Existir&aacute; siempre que haya comunicaci&oacute;n entre los procesos";
 choices[65][3] = "Es el analista el que decide si tiene que existir o no el almac&eacute;n de datos";
 answers[65] = choices[65][1];
 units[65] = "81";
 comments[65] = "Id Pregunta: 6610. NULL";


//  Id pregunta: 6623 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  ISO 8402 define la calidad del software como:";
 choices[66]= new Array();
 choices[66][0] = "La capacidad de un conjunto de caracter&iacute;sticas intr&iacute;nsecas para satisfacer requisitos";
 choices[66][1] = "Conjunto de propiedades y caracter&iacute;sticas de un producto o servicio, que le confieren aptitud para satisfacer una serie de necesidades expl&iacute;citas o impl&iacute;citas";
 choices[66][2] = "Conformidad a los requisitos funcionales y prestaciones establecidas, a las normas de desarrollo expl&iacute;citamente documentadas y a las caracter&iacute;sticas impl&iacute;citas que seesperan de todo software desarrollado profesionalmente";
 choices[66][3] = "La norma ISO 8402 no es una norma de calidad";
 answers[66] = choices[66][1];
 units[66] = "87";
 comments[66] = "Id Pregunta: 6623. NULL";


//  Id pregunta: 6630 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  El modelo CMM de Ingenier&iacute;a de Software tiene:";
 choices[67]= new Array();
 choices[67][0] = "5 niveles de Capacidad y 6 niveles de Madurez";
 choices[67][1] = "5 niveles de Capacidad y 5 niveles de Madurez";
 choices[67][2] = "6 niveles de Capacidad y 5 niveles de Madurez";
 choices[67][3] = "6 niveles de Capacidad y 6 niveles de Madurez";
 answers[67] = choices[67][2];
 units[67] = "87";
 comments[67] = "Id Pregunta: 6630. NULL";


//  Id pregunta: 6638 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  El modelo COCOMO II propone los modelos:";
 choices[68]= new Array();
 choices[68][0] = "Modelo de Composici&oacute;n de la Aplicci&oacute;n, Dise&ntilde;o Preliminar y Modelo Post-Arquitectura";
 choices[68][1] = "Modelo de Composici&oacute;n de la Aplicci&oacute;n y Dise&ntilde;o Preliminar";
 choices[68][2] = "Modelo Org&aacute;nico y Semiacoplado";
 choices[68][3] = "Modelo Org&aacute;nico, Semiacoplado y Empotrado";
 answers[68] = choices[68][0];
 units[68] = "88";
 comments[68] = "Id Pregunta: 6638. NULL";


//  Id pregunta: 6640 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  La principal diferencia entre la t&eacute;cnica de los Puntos de Funci&oacute;n (PF's) y los PF's Mark II es:";
 choices[69]= new Array();
 choices[69][0] = "Los PF's Mark II utilizan el concepto de transacci&oacute;n l&oacute;gica";
 choices[69][1] = "Los PF's Mark II utilizan 4 elementos (Entradas, Salidas, Consultas y Ficheros)";
 choices[69][2] = "Los PF's Mark II utilizan 4 elementos (Entradas, Salidas, Consultas y Ficheros), m&aacute;s el concepto de transacci&oacute;n l&oacute;gica";
 choices[69][3] = "Los PF's Mark II utilizan 5 elementos (Entradas, Salidas, Consultas, Ficheros e Interfaces)";
 answers[69] = choices[69][0];
 units[69] = "88";
 comments[69] = "Id Pregunta: 6640. NULL";


//  Id pregunta: 6641 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)  Dentro de las t&eacute;cnicas para medir la complejidad del software NO se encuentra:";
 choices[70]= new Array();
 choices[70][0] = "La t&eacute;cnica de McCabe";
 choices[70][1] = "La t&eacute;cnica de McCall";
 choices[70][2] = "La t&eacute;cnica de Halstead";
 choices[70][3] = "La t&eacute;cnica de Bang";
 answers[70] = choices[70][1];
 units[70] = "88";
 comments[70] = "Id Pregunta: 6641. NULL";


//  Id pregunta: 6648 AÃ±o de creación de pregunta: 2010-01-01
 questions[71]= "72)  &iquest;Cu&aacute;l de las siguientes m&eacute;tricas NO se usa en el modelo COCOMO?";
 choices[71]= new Array();
 choices[71][0] = "KLOC (K Lines Of Code)";
 choices[71][1] = "NSLOC (New Source Lines Of Code)";
 choices[71][2] = "DSI (Delivery Source Instructions)";
 choices[71][3] = "NSDSI (New Source Delivery Source Instructions)";
 answers[71] = choices[71][3];
 units[71] = "89";
 comments[71] = "Id Pregunta: 6648. NULL";


//  Id pregunta: 6649 AÃ±o de creación de pregunta: 2010-01-01
 questions[72]= "73)  En el modelo COCOMO 2000 surgido como evoluci&oacute;n de COCOMO II, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[72]= new Array();
 choices[72][0] = "Modelo de composici&oacute;n de la Aplicaci&oacute;n: es una primera aproximaci&oacute;n en las fases iniciales del ciclo de vida";
 choices[72][1] = "Modelo de composici&oacute;n de la Aplicaci&oacute;n: incluye el uso de prototipos";
 choices[72][2] = "Modelo de Dise&ntilde;o Preliminar: es una primera aproximaci&oacute;n en las fases iniciales del ciclo de vida";
 choices[72][3] = "Modelo de Dise&ntilde;o Preliminar: incluye el uso de prototipos";
 answers[72] = choices[72][1];
 units[72] = "89";
 comments[72] = "Id Pregunta: 6649. NULL";


//  Id pregunta: 8206 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  En relaci&oacute;n con los perfiles de participantes, seg&uacute;n M&Eacute;TRICA versi&oacute;n 3, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[73]= new Array();
 choices[73][0] = "Son 5: Directivo, Jefe de Proyecto, Consultor, Analista y Programador.";
 choices[73][1] = "Son 7: Director, Jefe de Proyecto, Equipo de Proyecto y Responsables de Arquitectura, Seguridad, Sistemas yOperaciones.";
 choices[73][2] = "Son 8: Directivo, Jefe de Proyecto, Equipo de Proyecto, Usuarios expertos y Responsables de Arquitectura, Seguridad,Sistemas y Operaciones.";
 choices[73][3] = "Son 5: Directivo, Jefe de Proyecto, Equipo de Proyecto, Usuarios expertos y Responsable de Calidad.";
 answers[73] = choices[73][0];
 units[73] = "86";
 comments[73] = "Id Pregunta: 8206. Examen TIC A1 2010";


//  Id pregunta: 8242 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  De acuerdo al Est&aacute;ndar ISO 12207 de procesos del ciclo de vida del software:";
 choices[74]= new Array();
 choices[74][0] = "Existe un proceso espec&iacute;fico para la adaptaci&oacute;n del resto de procesos.";
 choices[74][1] = "Para cumplir con el estandar es necesario adaptar los procesos a las circunstancias particulares de cada organizaci&oacute;n o proyecto.";
 choices[74][2] = "Se puede utilizar cualquier proceso de adaptaci&oacute;n, siempre y cuando est&eacute; justificado y documentado.";
 choices[74][3] = "No hay una categor&iacute;a espec&iacute;fica de &quot;cumplimiento adaptado&quot;.";
 answers[74] = choices[74][0];
 units[74] = "76";
 comments[74] = "Id Pregunta: 8242. Examen TIC A1 2010";


//  Id pregunta: 8348 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l de los siguientes mecanismos NO se utiliza para definir un perfil (profile) en UML 2.0?";
 choices[75]= new Array();
 choices[75][0] = "Estereotipos.";
 choices[75][1] = "Valores etiquetados.";
 choices[75][2] = "Artefactos.";
 choices[75][3] = "Restricciones.";
 answers[75] = choices[75][2];
 units[75] = "80,81,82";
 comments[75] = "Id Pregunta: 8348. Examen TIC A2 2010";


//  Id pregunta: 8391 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  Para las pruebas de caja transparente, se&ntilde;ale la opci&oacute;n correcta:";
 choices[76]= new Array();
 choices[76][0] = "Aseguran la ausencia absoluta de defectos.";
 choices[76][1] = "Comprueban la funcionalidad de un programa.";
 choices[76][2] = "Se realizan ignorando completamente la estructura interna de un programa.";
 choices[76][3] = "Exigen el conocimiento de la estructura interna del programa.";
 answers[76] = choices[76][3];
 units[76] = "91";
 comments[76] = "Id Pregunta: 8391. Examen TIC A2 2010";


//  Id pregunta: 8458 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  Con el fin de garantizar que las aplicaciones comerciales y las herramientas desarrolladas a medida, se encuentren alineadas con las necesidades del negocio, el est&aacute;ndar COBIT, define 7 procesos a seguir &iquest;en cu&aacute;l de los cuatro dominios que utiliza COBIT para clasificar los procesos de negocio, se encuentran incluidos?:";
 choices[77]= new Array();
 choices[77][0] = "Planificaci&oacute;n y Organizaci&oacute;n";
 choices[77][1] = "Supervisi&oacute;n y Evaluaci&oacute;n";
 choices[77][2] = "Adquisici&oacute;n e Implementaci&oacute;n";
 choices[77][3] = "Ninguna de las anteriores";
 answers[77] = choices[77][2];
 units[77] = "98";
 comments[77] = "Id Pregunta: 8458. Analista Ayto. Madrid 2010";


//  Id pregunta: 8894 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  &iquest;A qui&eacute;n no est&aacute; dirigido ITIL?";
 choices[78]= new Array();
 choices[78][0] = "Proveedores de servicios de TI";
 choices[78][1] = "Usuarios de servicios de TI";
 choices[78][2] = "Directores y gestores de TI";
 choices[78][3] = "Chief Information Officers";
 answers[78] = choices[78][1];
 units[78] = "98";
 comments[78] = "Id Pregunta: 8894. NULL";


//  Id pregunta: 8989 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  Se&ntilde;ale la respuesta falsa respecto del Plan General de Garant&iacute;a de Calidad promovido por CSAE";
 choices[79]= new Array();
 choices[79][0] = "Es un documento impreso";
 choices[79][1] = "Consta de cuatro fasc&iacute;culos";
 choices[79][2] = "Orientada a cualquier ambito de las AAPP";
 choices[79][3] = "Requiere autorizaci&oacute;n para su empleo";
 answers[79] = choices[79][3];
 units[79] = "87";
 comments[79] = "Id Pregunta: 8989. NULL";


//  Id pregunta: 9086 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  Con respecto a los Factores Cr&iacute;ticos de &Eacute;xito y los objetivos de la organizaci&oacute;n, se&ntilde;ale la opci&oacute;n INCORRECTA";
 choices[80]= new Array();
 choices[80][0] = "Los objetivos  son los &quot;fines&quot; hacia los cuales se dirige el esfuerzo y el trabajo de la organizaci&oacute;n";
 choices[80][1] = "Los factores de &eacute;xito son los &quot;medios&quot; o condiciones que se deben cumplir para alcanzar los objetivos";
 choices[80][2] = "Para cada objetivo se debe definir, al menos, un factor de &eacute;xito";
 choices[80][3] = "Los factores de &eacute;xito deben determinarse antes que los objetivos, ya que constituyen la base para definir los mismos de manera precisa";
 answers[80] = choices[80][3];
 units[80] = "77";
 comments[80] = "Id Pregunta: 9086. ";


//  Id pregunta: 9189 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  &iquest;Cu&aacute;l de las siguiente no es una T&eacute;cnica?";
 choices[81]= new Array();
 choices[81][0] = "Prototipado";
 choices[81][1] = "Normalizaci&oacute;n";
 choices[81][2] = "Diagrama de paquetes";
 choices[81][3] = "Casos de uso";
 answers[81] = choices[81][0];
 units[81] = "86";
 comments[81] = "Id Pregunta: 9189. NULL";


//  Id pregunta: 9439 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  El diagrama de estructura de datos (DED):";
 choices[82]= new Array();
 choices[82][0] = "Representa el modelo l&oacute;gico de datos.";
 choices[82][1] = "Es &uacute;nico para cada sistema de informaci&oacute;n.";
 choices[82][2] = "Se conoce tambi&eacute;n como Diccionario de Datos.";
 choices[82][3] = "Define un conjunto de objetos que comparten una misma estructura y comportamiento com&uacute;n.";
 answers[82] = choices[82][0];
 units[82] = "81";
 comments[82] = "Id Pregunta: 9439. Examen AGE TIC A1 2011";


//  Id pregunta: 9451 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  En UML, NO es un diagrama din&aacute;mico:";
 choices[83]= new Array();
 choices[83][0] = "Diagrama de secuencia.";
 choices[83][1] = "Diagrama de estado.";
 choices[83][2] = "Diagrama de despliegue.";
 choices[83][3] = "Diagrama de colaboraci&oacute;n.";
 answers[83] = choices[83][2];
 units[83] = "82";
 comments[83] = "Id Pregunta: 9451. Examen AGE TIC A1 2011";


//  Id pregunta: 9658 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  &iquest;Qu&eacute; modelo  de calidad tiene como &aacute;mbito de aplicaci&oacute;n Software y Sistemas?";
 choices[84]= new Array();
 choices[84][0] = "CMMI";
 choices[84][1] = "ISO 9001";
 choices[84][2] = "ISO/IEC 15504 (SPICE) y CMMI";
 choices[84][3] = "Todos los anteriores";
 answers[84] = choices[84][2];
 units[84] = "87";
 comments[84] = "Id Pregunta: 9658. La ISO 9001 tiene un &aacute;mbito gen&eacute;rico, no s&oacute;lo Sotftware y Sistemas";


//  Id pregunta: 9786 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Seg&uacute;n Magerit v2 cu&aacute;l de las siguientes tareas NO forma parte de la actividad de caracterizaci&oacute;n de los activos en el An&aacute;lisis de Riesgos:";
 choices[85]= new Array();
 choices[85][0] = "Identificaci&oacute;n de los activos.";
 choices[85][1] = "Dependencias entre activos.";
 choices[85][2] = "Auditor&iacute;a de los activos.";
 choices[85][3] = "Valoraci&oacute;n de los activos. ";
 answers[85] = choices[85][2];
 units[85] = "98";
 comments[85] = "Id Pregunta: 9786. Examen TIC A2 2013";


//  Id pregunta: 9788 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  PLS es un est&aacute;ndar relacionado con VoiceXML, &iquest;para qu&eacute; se utiliza en concreto?";
 choices[86]= new Array();
 choices[86][0] = "&quot;Decora&quot; las locuciones de forma que se generen de la mejor forma posible; por ejemplo, indicando el tono de una determinada locuci&oacute;n (m&aacute;s alto o m&aacute;s bajo). ";
 choices[86][1] = "Realiza el control de la llamada con VoiceXML. ";
 choices[86][2] = "Define la forma en la que las palabras son pronunciadas. ";
 choices[86][3] = "Define la estructura de las gram&aacute;ticas usadas en el reconocimiento del habla. ";
 answers[86] = choices[86][2];
 units[86] = "94";
 comments[86] = "Id Pregunta: 9788. Examen TIC A2 2013";


//  Id pregunta: 9796 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Indique la respuesta FALSA en relaci&oacute;n a MoReq:";
 choices[87]= new Array();
 choices[87][0] = "Es una especificaci&oacute;n de requisitos para la gesti&oacute;n de registros.  ";
 choices[87][1] = "Tiene una versi&oacute;n posterior denominada MoReq2.";
 choices[87][2] = "Fue desarrollado para el programa IDA.";
 choices[87][3] = "No es gratuito.";
 answers[87] = choices[87][3];
 units[87] = "95";
 comments[87] = "Id Pregunta: 9796. Examen TIC A2 2013";


//  Id pregunta: 9950 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  &iquest;Cu&aacute;l de las siguientes actividades forma parte de la Planificaci&oacute;n de los Sistemas de Informaci&oacute;n seg&uacute;n M&eacute;trica 3?";
 choices[88]= new Array();
 choices[88][0] = "Estudio de los Sistemas de Informaci&oacute;n Actuales. ";
 choices[88][1] = "Definici&oacute;n de los Requisitos del Sistema.";
 choices[88][2] = "Valoraci&oacute;n de Alternativas.";
 choices[88][3] = "Definici&oacute;n del sistema. ";
 answers[88] = choices[88][0];
 units[88] = "86";
 comments[88] = "Id Pregunta: 9950. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 9955 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  En un proyecto de desarrollo que utiliza la metodolog&iacute;a SCRUM, aquel rol que tiene la responsabilidad de eliminar los obst&aacute;culos que impidan el progreso del equipo se denomina:";
 choices[89]= new Array();
 choices[89][0] = "Product owner.";
 choices[89][1] = "Retail Cashier.";
 choices[89][2] = "ScrumMaster";
 choices[89][3] = "Development team member. ";
 answers[89] = choices[89][2];
 units[89] = "79";
 comments[89] = "Id Pregunta: 9955. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10049 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  Un archivo .PFX, de uso en certificados electr&oacute;nicos:";
 choices[90]= new Array();
 choices[90][0] = "Contiene la clave privada.";
 choices[90][1] = "Cumple la sintaxis PKCS #21.";
 choices[90][2] = "Est&aacute; codificado en un formato no binario.";
 choices[90][3] = "No se puede convertir a formato .PEM.";
 answers[90] = choices[90][0];
 units[90] = "72";
 comments[90] = "Id Pregunta: 10049. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10178 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  Determine la afirmaci&oacute;n cierta en relaci&oacute;n con los diagramas UML&hellip;";
 choices[91]= new Array();
 choices[91][0] = "El diagrama de Comunicaci&oacute;n que introdujo UML2.0, constituye una versi&oacute;n modificada del anterior diagrama de Colaboraci&oacute;n";
 choices[91][1] = "UML tipifica como diagramas de comportamiento los siguientes: diagramas de Actividad, diagramas de Estado, diagramas de Caso de Uso y los diagramas de Interacci&oacute;n.";
 choices[91][2] = "Los denominados diagramas globales de interacci&oacute;n ofrecen una visi&oacute;n de conjunto de las rutas de acceso de ejecuci&oacute;n de toda la aplicaci&oacute;n, utilizando elementos de diagramas de actividades y diagramas de secuencia.";
 choices[91][3] = "Todas las anteriores";
 answers[91] = choices[91][3];
 units[91] = "82";
 comments[91] = "Id Pregunta: 10178. ";


//  Id pregunta: 10441 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  En el &aacute;mbito de COBIT 5, el proceso de Gestionar la Calidad se encuentra encuadrado en el dominio de ";
 choices[92]= new Array();
 choices[92][0] = "Alinear, Planificar y Organizar";
 choices[92][1] = "Monitorizar y Evaluar.";
 choices[92][2] = "Construir, Adquirir e Implementar";
 choices[92][3] = "Monitorizar y Evaluar.";
 answers[92] = choices[92][0];
 units[92] = "98";
 comments[92] = "Id Pregunta: 10441. Examen TIC A1 2013";


//  Id pregunta: 10443 AÃ±o de creación de pregunta: 2014-01-01
 questions[93]= "94)  Seg&uacute;n la metodolog&iacute;a M&eacute;trica V3 indicar en cu&aacute;l de las siguientes tareas de la Planificaci&oacute;n de Sistemas de Informaci&oacute;n NO participa el Comit&eacute; de Direcci&oacute;n. ";
 choices[93]= new Array();
 choices[93][0] = "Identificaci&oacute;n del Alcance del Plan de Sistemas de Informaci&oacute;n.";
 choices[93][1] = "Comunicaci&oacute;n del Plan de Trabajo.";
 choices[93][2] = "Selecci&oacute;n de la Arquitectura Tecnol&oacute;gica. ";
 choices[93][3] = "Evaluaci&oacute;n y Mejora de la Propuesta.";
 answers[93] = choices[93][2];
 units[93] = "86";
 comments[93] = "Id Pregunta: 10443. Examen TIC A1 2013";


//  Id pregunta: 10636 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de las siguientes es un framework de mejores pr&aacute;cticas dirigida al control y supervisi&oacute;n de tecnolog&iacute;a de la informaci&oacute;n?";
 choices[94]= new Array();
 choices[94][0] = "ISACA";
 choices[94][1] = "CMMI";
 choices[94][2] = "COVIT";
 choices[94][3] = "Ninguna de las anteriores.";
 answers[94] = choices[94][3];
 units[94] = "98";
 comments[94] = "Id Pregunta: 10636. ";


//  Id pregunta: 10646 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Qu&eacute; es un sistema legacy?";
 choices[95]= new Array();
 choices[95][0] = "Un sistema de informaci&oacute;n que, estando anticuado, contin&uacute;a siendo utilizado.";
 choices[95][1] = "Un sistema de informaci&oacute;n que est&aacute; anticuado y no se utiliza, pero contin&uacute;a instalado en los servidores de la organizaci&oacute;n.";
 choices[95][2] = "Un sistema de informaci&oacute;n de reemplazo para los sistemas anticuados.";
 choices[95][3] = "Un sistema de informaci&oacute;n que, aunque actualizado y sin incidencias, quiere ser evolucionado a otro con m&aacute;s funcionalidades.";
 answers[95] = choices[95][0];
 units[95] = "91";
 comments[95] = "Id Pregunta: 10646. ";


//  Id pregunta: 10857 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Se&ntilde;ale c&oacute;mo se clasifican los niveles en las organizaciones seg&uacute;n se establece en el Modelo de Madurez de la Ingenier&iacute;a del Software ISO/IEC 15504-SPICE para la evaluaci&oacute;n y mejora de las organizaciones, en la representaci&oacute;n continua del modelo que mide la capacidad:";
 choices[96]= new Array();
 choices[96][0] = "En 6 niveles, desde el cero al cinco.";
 choices[96][1] = "En 5 niveles, desde el uno al cinco.";
 choices[96][2] = "En 6 niveles, desde el uno al seis.";
 choices[96][3] = "En 5 niveles, desde el cero al cuatro.";
 answers[96] = choices[96][0];
 units[96] = "88";
 comments[96] = "Id Pregunta: 10857. Examen GSI 2014";


//  Id pregunta: 11294 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;En qu&eacute; consisten los Sistemas de Gesti&oacute;n de Contenidos Empresariales (ECM)? ";
 choices[97]= new Array();
 choices[97][0] = "En la creaci&oacute;n y gesti&oacute;n de contenidos de un sitio Web";
 choices[97][1] = "En la edici&oacute;n colaborativa de contenidos";
 choices[97][2] = "En la gesti&oacute;n generalista de contenidos desestructurados";
 choices[97][3] = "Todas las anteriores";
 answers[97] = choices[97][3];
 units[97] = "95";
 comments[97] = "Id Pregunta: 11294. ";


//  Id pregunta: 11364 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de los siguientes enunciados no es un prop&oacute;sito de Operaci&oacute;n del Servicio?";
 choices[98]= new Array();
 choices[98][0] = "Llevar a cabo pruebas para asegurar que los servicios est&aacute;n dise&ntilde;ados para satisfacer las necesidades del negocio";
 choices[98][1] = "Entregar y gestionar servicios de TI";
 choices[98][2] = "Gestionar la tecnolog&iacute;a utilizada para entregar servicios";
 choices[98][3] = "Monitorizar el desempe&ntilde;o de la tecnolog&iacute;a y los procesos";
 answers[98] = choices[98][0];
 units[98] = "98";
 comments[98] = "Id Pregunta: 11364. ";


//  Id pregunta: 11637 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Seg&uacute;n M&eacute;trica v3, se&ntilde;ale qui&eacute;n no se encuentra entre los participantes de la actividad de Ejecuci&oacute;n de las pruebas de integraci&oacute;n:";
 choices[99]= new Array();
 choices[99][0] = "Equipo de seguridad";
 choices[99][1] = "Equipo de arquitectura";
 choices[99][2] = "Equipo de proyecto";
 choices[99][3] = "T&eacute;cnicos de comunicaciones";
 answers[99] = choices[99][0];
 units[99] = "86";
 comments[99] = "Id Pregunta: 11637. ";


