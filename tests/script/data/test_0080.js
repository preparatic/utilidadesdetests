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

//  Id pregunta: 76 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Qu&eacute; organizaci&oacute;n se encarga de fijar los est&aacute;ndares federales de trantamiento de informaci&oacute;n que las agencias gubernamentales USA deben seguir en la contrataci&oacute;n de software y hardware?:";
 choices[0]= new Array();
 choices[0][0] = "ANSI";
 choices[0][1] = "IEEE";
 choices[0][2] = "NIST";
 choices[0][3] = "GOSIP";
 answers[0] = choices[0][2];
 units[0] = "42";
 comments[0] = "Id Pregunta: 76. ";


//  Id pregunta: 171 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  En auditor&iacute;a inform&aacute;tica, los controles de salida contienen, entre otros, a:";
 choices[1]= new Array();
 choices[1][0] = "Registro y almacenamiento de formularios negociables";
 choices[1][1] = "Autorizaci&oacute;n de la distribuci&oacute;n";
 choices[1][2] = "Balanceo y conciliaci&oacute;n";
 choices[1][3] = "Todas las anteriores";
 answers[1] = choices[1][3];
 units[1] = "31,32,33";
 comments[1] = "Id Pregunta: 171. ";


//  Id pregunta: 193 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguientes tareas no es posible realizar utilizando las herramientas PERT o CPM?";
 choices[2]= new Array();
 choices[2][0] = "Establecer las dimensiones de tiempo m&aacute;s probables para las tareas individuales aplicando modelos estad&iacute;sticos.";
 choices[2][1] = "Determinar el camino cr&iacute;tico, la cadena de tareas que determina la duraci&oacute;n del proyecto.";
 choices[2][2] = "Dimensionar las necesidades de personal en cada fase del proyecto.";
 choices[2][3] = "Calcular las limitaciones de tiempo que definen una ventana de tiempo de una tarea determinada (y las holguras).";
 answers[2] = choices[2][2];
 units[2] = "27";
 comments[2] = "Id Pregunta: 193. Examen TIC MAP B 2004";


//  Id pregunta: 296 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  La determinaci&oacute;n del nivel aceptable de seguridad corresponde a una pol&iacute;tica de:";
 choices[3]= new Array();
 choices[3][0] = "Aceptar el riesgo";
 choices[3][1] = "Evitar el riesgo";
 choices[3][2] = "Traspasar el riesgo";
 choices[3][3] = "Ninguna de las anteriores";
 answers[3] = choices[3][1];
 units[3] = "33";
 comments[3] = "Id Pregunta: 296. ";


//  Id pregunta: 393 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Para garantizar al usuario el acceso al c&oacute;digo fuente del programa cedido en el caso de desaparici&oacute;n de la empresa titular de los derechos de propiedad intelectual se recurre a:";
 choices[4]= new Array();
 choices[4][0] = "El Convenio de Berna";
 choices[4][1] = "La Ley 16/993";
 choices[4][2] = "La Ley 22/1987";
 choices[4][3] = "El contrato de Escrow";
 answers[4] = choices[4][3];
 units[4] = "36";
 comments[4] = "Id Pregunta: 393. ";


//  Id pregunta: 452 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Se&ntilde;ale c&uacute;al no es una funci&oacute;n atribuida al Director de la Agencia de Protecci&oacute;n de Datos:";
 choices[5]= new Array();
 choices[5][0] = "Resuelve los expedientes disciplinarios cuando la infracci&oacute;n es cometida por los responsables de los ficheros p&uacute;blicos";
 choices[5][1] = "Requerir a los responsables de ficheros de titularidad privada a que subsanen deficiencias de los c&oacute;digos tipo";
 choices[5][2] = "Resolver sobre la validez de las notificaciones de inscripci&oacute;n en el Registro General de Protecci&oacute;n de Datos";
 choices[5][3] = "Adoptar medidas cautelares respecto de los tratamientos de datos personales cuando lo estima necesario";
 answers[5] = choices[5][0];
 units[5] = "29";
 comments[5] = "Id Pregunta: 452. ";


//  Id pregunta: 714 AÃ±o de creación de pregunta: 2004-01-01
 questions[6]= "7)  En UNIX, &iquest;qu&eacute; elemento traduce los comandos de usuario en instrucciones para el Kernel?";
 choices[6]= new Array();
 choices[6][0] = "Shell";
 choices[6][1] = "Kernel";
 choices[6][2] = "Shell o Kernel, dependiendo de la secuencia de comandos";
 choices[6][3] = "Ninguno de los anteriores";
 answers[6] = choices[6][0];
 units[6] = "52, 53";
 comments[6] = "Id Pregunta: 714. Similar a examen TIC SS A 2003";


//  Id pregunta: 734 AÃ±o de creación de pregunta: 2004-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de los siguientes servicios NO est&aacute; regulado por la Ley 34/2002, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio Electr&oacute;nico, m&aacute;s conocida como LSSI?";
 choices[7]= new Array();
 choices[7][0] = "La contrataci&oacute;n de bienes y servicios por v&iacute;a electr&oacute;nica";
 choices[7][1] = "El v&iacute;deo bajo demanda";
 choices[7][2] = "El teletexto televisivo";
 choices[7][3] = "La organizaci&oacute;n y gesti&oacute;n de subastas por medios electr&oacute;nicos";
 answers[7] = choices[7][2];
 units[7] = "30";
 comments[7] = "Id Pregunta: 734. Examen TIC MAP B 2004. Ley 34/2002, Anexo Definiciones. Posteriormente, tanto el teletexto televisivo como el v&iacute;deo bajo demanda se eliminaron de la ley.";


//  Id pregunta: 756 AÃ±o de creación de pregunta: 2004-01-01
 questions[8]= "9)  Respecto a los &quot;web services&quot;, &iquest;cu&aacute;l de las siguientes afirmaciones es falsa?";
 choices[8]= new Array();
 choices[8][0] = "Se describen mediante el lenguaje WSDL";
 choices[8][1] = "Para usarlos han de publicarse siempre en un registro UDDI";
 choices[8][2] = "Pueden interaccionar clientes  y servicios de distintas tecnolog&iacute;as";
 choices[8][3] = "Utilizan el protocolo SOAP";
 answers[8] = choices[8][1];
 units[8] = "51";
 comments[8] = "Id Pregunta: 756. NULL";


//  Id pregunta: 811 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de los siguientes sistemas operativos no es un sistema multiusuario que permite a sus usuarios iniciar sesiones en ellos mediante terminales?";
 choices[9]= new Array();
 choices[9][0] = "Unix";
 choices[9][1] = "Z/OS";
 choices[9][2] = "Microsoft Windows";
 choices[9][3] = "Todas los sistemas anteriores lo permiten.";
 answers[9] = choices[9][3];
 units[9] = "52";
 comments[9] = "Id Pregunta: 811. ";


//  Id pregunta: 1011 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  El data warehousing consiste b&aacute;sicamente en:";
 choices[10]= new Array();
 choices[10][0] = "En realizar un BPR (Business Processing Re-engineering) mediante el an&aacute;lisis automatizado de los datos corporativos.";
 choices[10][1] = "En automatizar los procesos de almacenamiento de datos de toda la corporaci&oacute;n. El sistema se encarga de situar los datos, de manera transparente, en los medios f&iacute;sicos m&aacute;s adecuados (discos, cintas, etc&eacute;tera) y de gestionar las copias de salvaguarda.";
 choices[10][2] = "En generar din&aacute;mica y autom&aacute;ticamente, a partir de datos extra&iacute;dos de todas las B.D. operacionales del sistema, otra base de datos donde se va almacenando informaci&oacute;n integrada, resumida, consolidada, multidimensional y significativa.";
 choices[10][3] = "En independizar los datos de la corporaci&oacute;n de su localizaci&oacute;n f&iacute;sica, creando un sistema de informaci&oacute;n virtual que integra todos los datos de la corporaci&oacute;n, incluso si est&aacute;n repartidos en diferentes sedes.";
 answers[10] = choices[10][2];
 units[10] = "68";
 comments[10] = "Id Pregunta: 1011. ";


//  Id pregunta: 1031 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  El mecanismo &quot;priority aging&quot; que utilizan algunos programas de planificaci&oacute;n de trabajos funciona de la siguiente manera:";
 choices[11]= new Array();
 choices[11][0] = "Aumenta la prioridad de los trabajos en funci&oacute;n del tiempo que ha transcurrido desde que el usuario lo envi&oacute;";
 choices[11][1] = "Aumenta la prioridad de los trabajos en funci&oacute;n del tiempo transcurrido desde una hora prefijada por el programador";
 choices[11][2] = "Aumenta la prioridad de los trabajos en funci&oacute;n del tiempo que llevan en la cola de entrada";
 choices[11][3] = "Aumenta la prioridad de los trabajos en funci&oacute;n de la edad y categor&iacute;a profesional del programador";
 answers[11] = choices[11][2];
 units[11] = "52";
 comments[11] = "Id Pregunta: 1031. ";


//  Id pregunta: 1050 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  El Registro de Instrucciones es un &oacute;rgano de control del procesador que sirve para:";
 choices[12]= new Array();
 choices[12][0] = "Llevar el control de las instrucciones m&aacute;quina que se van ejecutando";
 choices[12][1] = "Almacenar la instrucci&oacute;n que se ha de decodificar y ejecutar";
 choices[12][2] = "Es un contador que se va incrementado con los pulsos del reloj maestro";
 choices[12][3] = "Almacenar la direcci&oacute;n de la instrucci&oacute;n que se va a ejecutar";
 answers[12] = choices[12][1];
 units[12] = "47";
 comments[12] = "Id Pregunta: 1050. ";


//  Id pregunta: 1099 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  En inteligencia artificial:";
 choices[13]= new Array();
 choices[13][0] = "Los primeros trabajos se centraron en m&eacute;todos de b&uacute;squeda heur&iacute;stica y m&eacute;todos de deducci&oacute;n autom&aacute;tica";
 choices[13][1] = "La rob&oacute;tica no secuencializa las tareas (planificaci&oacute;n) para conseguir pasar de un estado actual a un estado objetivo";
 choices[13][2] = "La representaci&oacute;n del conocimiento pertenece al campo de los Sistemas de Gesti&oacute;n de Bases de Datos, pero no al de la inteligencia artificial";
 choices[13][3] = "Los m&eacute;todos heur&iacute;sticos buscan una formulaci&oacute;n te&oacute;rica para la representaci&oacute;n del conocimiento";
 answers[13] = choices[13][0];
 units[13] = "63";
 comments[13] = "Id Pregunta: 1099. ";


//  Id pregunta: 1159 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  En Unix la gesti&oacute;n de procesos se realiza:";
 choices[14]= new Array();
 choices[14][0] = "Cuanta m&aacute;s CPU ha consumido un proceso mayor se hace su prioridad, ya que se considera que debe ser uno de los procesos principales del sistema";
 choices[14][1] = "Existe una &uacute;nica cola de procesos. La prioridad se asigna seg&uacute;n el orden de llegada de los mismos";
 choices[14][2] = "El mecanismo de planificaci&oacute;n funciona mediante un timeout que ordena a un driver llamar a una subrutina del kernel cuando ha transcurrido un determinado tiempo";
 choices[14][3] = "El scheduler asigna rodajas de tiempo (time slicers) a los distintos procesos. La duraci&oacute;n de cada rodaja es variable seg&uacute;n la prioridad que tenga asignada el proceso";
 answers[14] = choices[14][3];
 units[14] = "54";
 comments[14] = "Id Pregunta: 1159. ";


//  Id pregunta: 1905 AÃ±o de creación de pregunta: 2006-01-01
 questions[15]= "16)  Espacio intermedio de almacenamiento utilizado hasta obtener una unidad de datos que permita su procesado";
 choices[15]= new Array();
 choices[15][0] = "registro";
 choices[15][1] = "cache";
 choices[15][2] = "buffer";
 choices[15][3] = "pipelining";
 answers[15] = choices[15][2];
 units[15] = "47";
 comments[15] = "Id Pregunta: 1905. ";


//  Id pregunta: 2003 AÃ±o de creación de pregunta: 2004-01-01
 questions[16]= "17)  Cuando en el dise&ntilde;o orientado a objetos se habla de &quot;requerimientos funcionales&quot; se debe entender:";
 choices[16]= new Array();
 choices[16][0] = "La descripci&oacute;n formal del comportamiento de cada uno de los objetos del sistema.";
 choices[16][1] = "La descripci&oacute;n, habitualmente mediante diagramas UML, de las relaciones entre las componentes del sistema.";
 choices[16][2] = "La descripci&oacute;n semi-formal de los requisitos del tiempo de ejecuci&oacute;n impuestos por el usuario.";
 choices[16][3] = "La descripci&oacute;n de las interacciones entre el sistema y su ambiente, de forma independiente a su implementaci&oacute;n.";
 answers[16] = choices[16][3];
 units[16] = "84";
 comments[16] = "Id Pregunta: 2003. ";


//  Id pregunta: 2074 AÃ±o de creación de pregunta: 2004-01-01
 questions[17]= "18)  Son comunes a todas las metodolog&iacute;as de desarrollo de SW";
 choices[17]= new Array();
 choices[17][0] = "Uso de t&eacute;cnicas Gr&aacute;ficas";
 choices[17][1] = "Documentaci&oacute;n";
 choices[17][2] = "Diccionario de datos";
 choices[17][3] = "todas las anteriores";
 answers[17] = choices[17][3];
 units[17] = "79";
 comments[17] = "Id Pregunta: 2074. ";


//  Id pregunta: 2138 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  &iquest;Cu&aacute;l de las siguientes expresiones est&aacute; de acuerdo con los actuales criterios de calidad del software de gesti&oacute;n?:";
 choices[18]= new Array();
 choices[18][0] = "La funci&oacute;n 'calidad' debe ser desempe&ntilde;ada por un equipo independiente de especialistas";
 choices[18][1] = "El coste de la calidad debe ser equilibrado con el coste de la 'no-calidad'";
 choices[18][2] = "La funci&oacute;n 'calidad' debe garantizar la producci&oacute;n de 'software cero-defectos'";
 choices[18][3] = "Todas las anteriores respuestas son correctas";
 answers[18] = choices[18][1];
 units[18] = "88";
 comments[18] = "Id Pregunta: 2138. NULL";


//  Id pregunta: 2261 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  El acoplamiento es un concepto fundamental del dise&ntilde;o estructurado. &iquest;Cu&aacute;l de los siguientes tipos define el nivel de acoplamiento ordenados de mayor a menor?";
 choices[19]= new Array();
 choices[19][0] = "Por contenido, com&uacute;n, externo, de control, por estampado, de datos, normal.";
 choices[19][1] = "Externo, com&uacute;n, por contenido, por estampado, de control, directo y normal.";
 choices[19][2] = "Externo, por contenido, com&uacute;n, de control, por estampado, de datos y normal.";
 choices[19][3] = "Por contenido, externo, com&uacute;n, de control, de datos, por estampado y normal.";
 answers[19] = choices[19][0];
 units[19] = "84";
 comments[19] = "Id Pregunta: 2261. ";


//  Id pregunta: 2263 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  El ciclo de vida es una herramienta &uacute;til para:";
 choices[20]= new Array();
 choices[20][0] = "Establecer los puntos de control para la gesti&oacute;n del proyecto";
 choices[20][1] = "Para definir las actividades a realizar y en qu&eacute; orden, &uacute;nicamente";
 choices[20][2] = "Para poder generar la documentaci&oacute;n asociada al sistema de una forma eficaz";
 choices[20][3] = "El ciclo de vida no es la herramienta, lo es la metodolog&iacute;a asociada";
 answers[20] = choices[20][0];
 units[20] = "76";
 comments[20] = "Id Pregunta: 2263. ";


//  Id pregunta: 2365 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Entre los objetivos de los DFDs se encuentra:";
 choices[21]= new Array();
 choices[21][0] = "Hacer referencia al entorno f&iacute;sico";
 choices[21][1] = "Crear un modelo funcional del sistema";
 choices[21][2] = "Representar el &quot;c&oacute;mo se va a hacer el sistema&quot; en lugar del &quot;qu&eacute; se va a hacer en el sistema&quot; ";
 choices[21][3] = "Ninguna de las anteriores";
 answers[21] = choices[21][1];
 units[21] = "81";
 comments[21] = "Id Pregunta: 2365. ";


//  Id pregunta: 2443 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Las herramientas CASE se emplean con objeto de:";
 choices[22]= new Array();
 choices[22][0] = "Aumentar la productividad";
 choices[22][1] = "Controlar riesgos";
 choices[22][2] = "Asegurar la calidad";
 choices[22][3] = "Reutilizar c&oacute;digo";
 answers[22] = choices[22][0];
 units[22] = "86";
 comments[22] = "Id Pregunta: 2443. NULL";


//  Id pregunta: 2485 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Respecto de la 'calidad del software' vs 'costes de implantaci&oacute;n' existen teor&iacute;as como:";
 choices[23]= new Array();
 choices[23][0] = "Teor&iacute;a libre : el coste es constante e independiente de la calidad del producto";
 choices[23][1] = "Teor&iacute;a de la productividad: un producto de calidad es m&aacute;s barato de producir, consecuentemente el coste disminuye exponencialmente con el aumento de calidad";
 choices[23][2] = "Teor&iacute;a de calidad/coste: el coste de producci&oacute;n aumenta exponencialmente con el aumento de calidad";
 choices[23][3] = "Las 3 teor&iacute;as anteriores existen";
 answers[23] = choices[23][3];
 units[23] = "87.88";
 comments[23] = "Id Pregunta: 2485. NULL";


//  Id pregunta: 2499 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Si se usa COCOMO, no se tendr&aacute;n en cuenta:";
 choices[24]= new Array();
 choices[24][0] = "Las l&iacute;neas de c&oacute;digo de los programas de pruebas";
 choices[24][1] = "Las declaraciones iniciales";
 choices[24][2] = "Los trabajos desarrollados en &quot;scripts&quot;";
 choices[24][3] = "Las instrucciones de formateo por pantalla de los datos";
 answers[24] = choices[24][0];
 units[24] = "89";
 comments[24] = "Id Pregunta: 2499. NULL";


//  Id pregunta: 2512 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Una relaci&oacute;n que est&eacute; en 3FN:";
 choices[25]= new Array();
 choices[25][0] = "No tiene por qu&eacute; estar en 1FN";
 choices[25][1] = "Tiene dependencias funcionales transitivas";
 choices[25][2] = "Tiene atributos multivaluados";
 choices[25][3] = "Ninguna de las anteriores";
 answers[25] = choices[25][3];
 units[25] = "58";
 comments[25] = "Id Pregunta: 2512. NULL";


//  Id pregunta: 2994 AÃ±o de creación de pregunta: 2004-01-01
 questions[26]= "27)  Indique la afirmaci&oacute;n falsa. De acuerdo con lo previsto en la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, el servicio universal debe garantizar:";
 choices[26]= new Array();
 choices[26][0] = "La puesta a disposici&oacute;n de los abonados de una gu&iacute;a general de n&uacute;meros de abonados, ya sea impresa o electr&oacute;nica, o ambas, y que se actualice, como m&iacute;nimo, una vez al a&ntilde;o";
 choices[26][1] = "La obtenci&oacute;n por todos los usuarios finales de una conexi&oacute;n a la red telef&oacute;nica p&uacute;blica desde una ubicaci&oacute;n fija as&iacute; como el acceso a la prestaci&oacute;n del servicio telef&oacute;nico disponible al p&uacute;blico debiendo incluir entre otros el acceso funcional a internet.";
 choices[26][2] = "La existencia de una oferta suficiente de tel&eacute;fonos p&uacute;blicos de pago";
 choices[26][3] = "La obtenci&oacute;n por todos los usuarios finales de telefon&iacute;a m&oacute;vil en condiciones de igualdad y no discriminaci&oacute;n, con una calidad determinada que ser&aacute; fijada reglamentariamente y a un precio asequible.";
 answers[26] = choices[26][3];
 units[26] = "110";
 comments[26] = "Id Pregunta: 2994. Examen TIC MAP B 2004";


//  Id pregunta: 3105 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Respecto a los buscadores de internet:";
 choices[27]= new Array();
 choices[27][0] = "los basados en el modelo enciclopedia clasifican las p&aacute;ginas seg&uacute;n su contenido sint&aacute;ctico";
 choices[27][1] = "los basados en palabras clave construyen tablas o &iacute;ndices inversos a partir de las palabras clave de un texto";
 choices[27][2] = "los metabuscadores, al usar varios buscadores simult&aacute;neamente, son mejores que todos los buscadores que usan juntos";
 choices[27][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[27] = choices[27][1];
 units[27] = "112";
 comments[27] = "Id Pregunta: 3105. ";


//  Id pregunta: 3173 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  &iquest;Cu&aacute;l de las siguientes funciones no es propia de los protocolos de nivel de enlace?:";
 choices[28]= new Array();
 choices[28][0] = "Control de flujo";
 choices[28][1] = "Sincronizacion y entramado";
 choices[28][2] = "Control de los canales l&oacute;gicos";
 choices[28][3] = "Recuperaci&oacute;n de errores";
 answers[28] = choices[28][2];
 units[28] = "100";
 comments[28] = "Id Pregunta: 3173. NULL";


//  Id pregunta: 3439 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  El protocolo ANSI X 3.28:";
 choices[29]= new Array();
 choices[29][0] = "Es un protocolo orientado al bit";
 choices[29][1] = "Tiene tres modos de operaci&oacute;n: modo de respuesta normal, modo de respuesta s&iacute;ncrono y modo balanceado as&iacute;ncrono";
 choices[29][2] = "Existen tres tipos de tramas : informaci&oacute;n, supervisi&oacute;n y no numeradas";
 choices[29][3] = "Es un protocolo de control de enlace";
 answers[29] = choices[29][3];
 units[29] = "99";
 comments[29] = "Id Pregunta: 3439. NULL";


//  Id pregunta: 3519 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  En Espa&ntilde;a la televisi&oacute;n por cable:";
 choices[30]= new Array();
 choices[30][0] = "Est&aacute; teniendo una implantaci&oacute;n similar a la existente en Alemania";
 choices[30][1] = "Carece de tecnolog&iacute;a suficiente para poder implantarse";
 choices[30][2] = "Se presta generalmente con redes h&iacute;bridasjunto a telefon&iacute;a y datos";
 choices[30][3] = "Todo lo anterior es correcto";
 answers[30] = choices[30][2];
 units[30] = "105";
 comments[30] = "Id Pregunta: 3519. ";


//  Id pregunta: 3656 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  Un applet de Java es:";
 choices[31]= new Array();
 choices[31][0] = "Un int&eacute;rprete del lenguaje Java";
 choices[31][1] = "Una rutina Java que se ejecuta en el servidor recibiendo datos del browser o navegador";
 choices[31][2] = "Un programa Java, generalmente referenciado en una p&aacute;gina HTML, que se ejecuta en el cliente";
 choices[31][3] = "Un programa Java que accede a una base de datos relacional";
 answers[31] = choices[31][2];
 units[31] = "60";
 comments[31] = "Id Pregunta: 3656. NULL";


//  Id pregunta: 3938 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  &iquest;Qu&eacute; funci&oacute;n tiene el protocolo ICMP?";
 choices[32]= new Array();
 choices[32][0] = "Control";
 choices[32][1] = "Transporte de paquetes";
 choices[32][2] = "Redirecci&oacute;n de tramas";
 choices[32][3] = "Control de congesti&oacute;n";
 answers[32] = choices[32][0];
 units[32] = "112";
 comments[32] = "Id Pregunta: 3938. ";


//  Id pregunta: 4223 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  Indique cual de las siguientes afirmaciones con relaci&oacute;n a la RDSI (Red Digital de Servicios Integrados) no es correcta:";
 choices[33]= new Array();
 choices[33][0] = "Utiliza el sistema de se&ntilde;alizaci&oacute;n por canal comun CCITT n&ordm; 7 (CCS7)";
 choices[33][1] = "Emplea el canal D para el transporte de se&ntilde;alizaci&oacute;n mediante conmutaci&oacute;n de paquetes";
 choices[33][2] = "La velocidad de los canales B tanto en los accesos b&aacute;sicos como en los primarios es de 64 Kbps";
 choices[33][3] = "La velocidad de los canales D tanto en los accesos b&aacute;sicos como en los primarios es de 16 Kbps";
 answers[33] = choices[33][3];
 units[33] = "103";
 comments[33] = "Id Pregunta: 4223. ";


//  Id pregunta: 4249 AÃ±o de creación de pregunta: 2007-01-01
 questions[34]= "35)  Una de las novedades m&aacute;s importantes de la Ley para el acceso electr&oacute;nico de los ciudadanos a las Administraciones P&uacute;blicas consiste en:";
 choices[34]= new Array();
 choices[34][0] = "Se garantiza al ciudadano el acceso a los servicios p&uacute;blicos a trav&eacute;s de Internet y por v&iacute;a telef&oacute;nica, pero no se contemplan en ning&uacute;n caso canales como tel&eacute;fono m&oacute;vil o televisi&oacute;n digital dada su baja madure";
 choices[34][1] = "Aunque existen multitud de antecedentes legislativos de impulso a la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a, por primera vez se reconoce el acceso a las AAPP por medios electr&oacute;nicos como un derecho del ciudadano.";
 choices[34][2] = "No aspira a conceder la misma validez jur&iacute;dica a las comunicaciones electr&oacute;nicas que a las que se realizan en papel.";
 choices[34][3] = "Los servicios electr&oacute;nicos que pongan en marcha las AAPP funcionar&aacute;n en horario de 8 de la ma&ntilde;ana a 8 de la tarde";
 answers[34] = choices[34][1];
 units[34] = "30";
 comments[34] = "Id Pregunta: 4249. Sobre Proyecto LAECAP";


//  Id pregunta: 4310 AÃ±o de creación de pregunta: 2007-01-01
 questions[35]= "36)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre la arquitectura .Net no es correcta?:";
 choices[35]= new Array();
 choices[35][0] = "Las aplicaciones .Net s&oacute;lo pueden ejecutarse en los sistemas operativos Windows.";
 choices[35][1] = ".NET soporta la creaci&oacute;n de Servicios Web XML independientes de la plataforma, a trav&eacute;s de SOAP.";
 choices[35][2] = "El proceso de compilaci&oacute;n en .Net produce un fichero ejecutable al que se denomina portable executable (PE).";
 choices[35][3] = "Al c&oacute;digo escrito para ejecutarse en la plataforma .NET se le llama c&oacute;digo gestionado.";
 answers[35] = choices[35][0];
 units[35] = "59";
 comments[35] = "Id Pregunta: 4310. JCED - Preparatic XVII";


//  Id pregunta: 4342 AÃ±o de creación de pregunta: 2007-01-01
 questions[36]= "37)  Seg&uacute;n la Ley 59/2003 de Firma Electr&oacute;nica, un dispositivo seguro de creaci&oacute;n de firma electr&oacute;nica es aquel que al menos ofrece una serie de garant&iacute;as. &iquest;Cu&aacute;l de las siguientes no es una garant&iacute;a exigida para dichos dispositivos?";
 choices[36]= new Array();
 choices[36][0] = "Que los datos utilizados para la generaci&oacute;n de firma pueden producirse s&oacute;lo una vez y asegura razonablemente su secreto.";
 choices[36][1] = "Que existe una seguridad razonable de que los datos utilizados para la generaci&oacute;n de firma no pueden ser derivados de los de verificaci&oacute;n de firma o de la propia firma.";
 choices[36][2] = "Que los datos de creaci&oacute;n de firma pueden ser protegidos de forma fiable por el firmante contra su utilizaci&oacute;n por terceros";
 choices[36][3] = "Que el dispositivo de creaci&oacute;n de firma est&eacute; certificado al menos con el nivel de seguridad EAL4+.";
 answers[36] = choices[36][3];
 units[36] = "30";
 comments[36] = "Id Pregunta: 4342. Ley 59/2003, art&iacute;culo 24";


//  Id pregunta: 4343 AÃ±o de creación de pregunta: 2007-01-01
 questions[37]= "38)  Indique cu&aacute;l de las siguientes acciones no es funci&oacute;n de la Firma Electr&oacute;nica, de acuerdo con lo establecido en la Ley 59/2003:";
 choices[37]= new Array();
 choices[37][0] = "Identificar al remitente de un mensaje de manera fidedigna, asegurando su imputabilidad.";
 choices[37][1] = "Evitar accesos indeseados a su propio ordenador, por parte de terceros.";
 choices[37][2] = "Verificar que el mensaje no ha sido manipulado";
 choices[37][3] = "Almacenar la clave privada en el propio ordenador o una tarjeta criptogr&aacute;fica.";
 answers[37] = choices[37][1];
 units[37] = "30";
 comments[37] = "Id Pregunta: 4343. NULL";


//  Id pregunta: 4777 AÃ±o de creación de pregunta: 2007-01-01
 questions[38]= "39)  De acuerdo con la Ley 9/2014 General de Telecomunicaciones, la gesti&oacute;n y control de los planes nacionales de numeraci&oacute;n corresponde a ";
 choices[38]= new Array();
 choices[38][0] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[38][1] = "El Ministerio de Industria, Turismo y Comercio";
 choices[38][2] = "El Gobierno";
 choices[38][3] = "La Agencia Estatal de Radiocomunicaciones";
 answers[38] = choices[38][1];
 units[38] = "110";
 comments[38] = "Id Pregunta: 4777. ";


//  Id pregunta: 4939 AÃ±o de creación de pregunta: 2003-01-01
 questions[39]= "40)  El est&aacute;ndar que refiere la usabilidad como la capacidad de un software de ser comprendido, aprendido, usadoy ser atractivo para el usuario, en condiciones espec&iacute;ficas de uso es:";
 choices[39]= new Array();
 choices[39][0] = "RFC 2865";
 choices[39][1] = "ISO/IEC 9126";
 choices[39][2] = "ISO/IEC 9241";
 choices[39][3] = "RFC 2866";
 answers[39] = choices[39][1];
 units[39] = "39";
 comments[39] = "Id Pregunta: 4939. Examen TIC B 2007";


//  Id pregunta: 5287 AÃ±o de creación de pregunta: 2003-01-01
 questions[40]= "41)  Indique cu&aacute;l de las siguientes tecnolog&iacute;as JAVA puede utilizarse para invocar dentro de una aplicaci&oacute;n a un parser DOM:";
 choices[40]= new Array();
 choices[40][0] = "JAX-RPC";
 choices[40][1] = "SAAJ";
 choices[40][2] = "JAXR";
 choices[40][3] = "JAXP";
 answers[40] = choices[40][3];
 units[40] = "116";
 comments[40] = "Id Pregunta: 5287. ";


//  Id pregunta: 5301 AÃ±o de creación de pregunta: 2003-01-01
 questions[41]= "42)  Cu&aacute;l de las siguientes no es una clase de servicio ATM";
 choices[41]= new Array();
 choices[41][0] = "CBR";
 choices[41][1] = "HBR";
 choices[41][2] = "UBR";
 choices[41][3] = "NRT-VBR";
 answers[41] = choices[41][1];
 units[41] = "109";
 comments[41] = "Id Pregunta: 5301. ";


//  Id pregunta: 5469 AÃ±o de creación de pregunta: 2003-01-01
 questions[42]= "43)  Los resultados del modelo EFQM se eval&uacute;an";
 choices[42]= new Array();
 choices[42][0] = "Respecto a los clientes";
 choices[42][1] = "Respecto a la sociedad";
 choices[42][2] = "Respecto al personal de la empresa";
 choices[42][3] = "Todas las respuestas son correctas";
 answers[42] = choices[42][3];
 units[42] = "88";
 comments[42] = "Id Pregunta: 5469. Castilla y Le&oacute;n";


//  Id pregunta: 5623 AÃ±o de creación de pregunta: 2003-01-01
 questions[43]= "44)  En el protocolo SSL, el paso &quot;Server Key Exchange&quot; o Intercambio de clave del servidor es:";
 choices[43]= new Array();
 choices[43][0] = "Obligatorio";
 choices[43][1] = "Opcional, &uacute;nicamente cuando no existe certificado";
 choices[43][2] = "Nunca es necesario";
 choices[43][3] = "Ninguna de las anteriores";
 answers[43] = choices[43][1];
 units[43] = "111";
 comments[43] = "Id Pregunta: 5623. NULL";


//  Id pregunta: 5635 AÃ±o de creación de pregunta: 2003-01-01
 questions[44]= "45)  La velocidad de transmisi&oacute;n seg&uacute;n la Recomendaci&oacute;n V.34 de la UIT-T es:";
 choices[44]= new Array();
 choices[44][0] = "33,2 Kbps";
 choices[44][1] = "33,4 Kbps";
 choices[44][2] = "33,6 Kbps";
 choices[44][3] = "33,8 Kbps";
 answers[44] = choices[44][2];
 units[44] = "47";
 comments[44] = "Id Pregunta: 5635. ";


//  Id pregunta: 5720 AÃ±o de creación de pregunta: 2009-01-01
 questions[45]= "46)  En an&aacute;lisis de XML, indique cu&aacute;l de las siguientes expresiones NO es correcta:";
 choices[45]= new Array();
 choices[45][0] = "El modelo DOM procesa el documento XML completo y lo almacena en memoria";
 choices[45][1] = "En el modelo SAX puede procesar el documento XML a trav&eacute;s de eventos";
 choices[45][2] = "El modelo SAX procesa el documento XML y genera un &aacute;rbol";
 choices[45][3] = "El modelo DOM procesa el documento XML y lo modeliza en forma de &aacute;rbol";
 answers[45] = choices[45][2];
 units[45] = "69";
 comments[45] = "Id Pregunta: 5720. MAP 2008 A1";


//  Id pregunta: 5780 AÃ±o de creación de pregunta: 2009-01-01
 questions[46]= "47)  Se&ntilde;ale c&oacute;mo se denomina el conjunto de reglas que deben de seguir los lenguajes de programaci&oacute;n para que sean compatibles con .NET se denomina:";
 choices[46]= new Array();
 choices[46][0] = "CLS";
 choices[46][1] = "MSIL";
 choices[46][2] = "Bytecode";
 choices[46][3] = "JIT";
 answers[46] = choices[46][0];
 units[46] = "59";
 comments[46] = "Id Pregunta: 5780. MAP 2008 A2";


//  Id pregunta: 5830 AÃ±o de creación de pregunta: 2009-01-01
 questions[47]= "48)  Se&ntilde;ale la afirmaci&oacute;n incorrecta respecto a la licencia EUPL.";
 choices[47]= new Array();
 choices[47][0] = "Con estte tipo de licencia las administraciones pueden ser proveedoras de software open source ente ellas, reutilizando lo que otros han hecho y mejor&aacute;ndolo.";
 choices[47][1] = "Es equivalente a las licencias GNU GPL y se pueden usar indistintamente, s&oacute;lo que EUPL aplica &uacute;nicamente en europa.";
 choices[47][2] = "Una de las novedades que introduce es la variedad de idiomas en los que est&aacute; disponible.";
 choices[47][3] = "Es una licencia compatible con otras licencias copyleft";
 answers[47] = choices[47][1];
 units[47] = "36,37";
 comments[47] = "Id Pregunta: 5830. ";


//  Id pregunta: 5976 AÃ±o de creación de pregunta: 2010-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de los siguientes es un servidor web basado en software de c&oacute;digo abierto?";
 choices[48]= new Array();
 choices[48][0] = "Internet Information Server.";
 choices[48][1] = "Weblogic.";
 choices[48][2] = "Websphere.";
 choices[48][3] = "Apache.";
 answers[48] = choices[48][3];
 units[48] = "113";
 comments[48] = "Id Pregunta: 5976. TIC A 2009";


//  Id pregunta: 6062 AÃ±o de creación de pregunta: 2010-01-01
 questions[49]= "50)  Se ha establecido una conexi&oacute;n TCP sobre una red m&oacute;vil celular. La red m&oacute;vil sufre p&eacute;rdidas frecuentes por errores de transmisi&oacute;n debidos a las caracter&iacute;sticas del acceso radio. El emisor TCP:";
 choices[49]= new Array();
 choices[49][0] = "Distingue entre p&eacute;rdidas por errores de transmisi&oacute;n y p&eacute;rdidas por congesti&oacute;n, aplicando procedimientos de recuperaci&oacute;n diferentes.";
 choices[49][1] = "S&oacute;lo retransmite paquetes que se pierdan debido a congesti&oacute;n en la red.";
 choices[49][2] = "Indica al nivel de enlace que disminuya su tasa de env&iacute;o.";
 choices[49][3] = "Interpreta las p&eacute;rdidas debidas a errores de transmisi&oacute;n como congesti&oacute;n en la red, disminuyendo su tasa de env&iacute;o.";
 answers[49] = choices[49][3];
 units[49] = "100";
 comments[49] = "Id Pregunta: 6062. TIC A 2009";


//  Id pregunta: 6069 AÃ±o de creación de pregunta: 2010-01-01
 questions[50]= "51)  Sobre la representaci&oacute;n del conocimiento:";
 choices[50]= new Array();
 choices[50][0] = "Los algoritmos gen&eacute;ticos usan representaci&oacute;n param&eacute;trica";
 choices[50][1] = "Las redes neuronales usan representaci&oacute;n simb&oacute;lica";
 choices[50][2] = "Las dos respuestas anteriores son correctas";
 choices[50][3] = "Todas las respuestas anteriores no son correctas";
 answers[50] = choices[50][0];
 units[50] = "63,64";
 comments[50] = "Id Pregunta: 6069. ";


//  Id pregunta: 6116 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)  En un sistema de base de datos relacional, la regla de integridad de las entidades consiste en que:";
 choices[51]= new Array();
 choices[51][0] = "Una relaci&oacute;n debe tener al menos una clave primaria.";
 choices[51][1] = "Ning&uacute;n componente de la clave primaria de una relaci&oacute;n puede aceptar nulos.";
 choices[51][2] = "La clave primaria de una relaci&oacute;n es la &uacute;nica forma de identificar un&iacute;vocamente a una tupla.";
 choices[51][3] = "Si existen varias claves candidatas, la clave primaria es la que tiene menos campos.";
 answers[51] = choices[51][1];
 units[51] = "58";
 comments[51] = "Id Pregunta: 6116. TIC A 2009";


//  Id pregunta: 6144 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  Con respecto al ancho de banda de la conexi&oacute;n ADSL de un abonado";
 choices[52]= new Array();
 choices[52][0] = "La tasa de transferencia no es sensible a la distancia del abonado a la central, de forma que es similar a todos los abonados de una misma central";
 choices[52][1] = "La tasa de transferencia es sensible a la distancia del abonado a la central, de forma que los abonados que est&aacute;n m&aacute;s cerca de la central tendr&aacute;n posibilidad de velocidades m&aacute;s altas";
 choices[52][2] = "La tasa de transferencia del abonado depende principalmente del n&uacute;mero de abonados que est&aacute;n conectados simult&aacute;neamente, en ning&uacute;n caso de la distancia a la central";
 choices[52][3] = "Todas las respuestas anteriores son falsas";
 answers[52] = choices[52][1];
 units[52] = "107";
 comments[52] = "Id Pregunta: 6144. NULL";


//  Id pregunta: 6225 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l se las siguientes afirmaciones es incorrecta?";
 choices[53]= new Array();
 choices[53][0] = "Polimorfismo: distintas instancias del mismo tipo interpretan un mismo mensaje de distinta forma";
 choices[53][1] = "Enlace din&aacute;mico, la llamada al m&eacute;todo se resuelve en tiempo de ejecuci&oacute;n";
 choices[53][2] = "Se pueden crear instancias de una clase abstracta";
 choices[53][3] = "Enlace est&aacute;tico se resuelve en tiempo de compilaci&oacute;n";
 answers[53] = choices[53][2];
 units[53] = "116";
 comments[53] = "Id Pregunta: 6225. TICB-2009, bloque desarrollo";


//  Id pregunta: 6265 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  Las conclusiones que se reflejen en un informe de auditor&iacute;a deberan estar basadas en una evidencia:";
 choices[54]= new Array();
 choices[54][0] = "Suficiente.";
 choices[54][1] = "Contundente.";
 choices[54][2] = "Prudente.";
 choices[54][3] = "Demostrable.";
 answers[54] = choices[54][0];
 units[54] = "31";
 comments[54] = "Id Pregunta: 6265. ";


//  Id pregunta: 6292 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  El problema de volatilidad a la hora de la obtenci&oacute;n de requisitos en el an&aacute;lisis de un Sistema de Informaci&oacute;n y Comunicaciones se refiere a:";
 choices[55]= new Array();
 choices[55][0] = "Los requisitos son el resultado de integrar informaci&oacute;n de m&uacute;ltiples fuentes, algunas con intereses contrapuestos";
 choices[55][1] = "La complejidad de la organizaci&oacute;n puede hacer que a lo largo del proyecto se cambien objetivos, pol&iacute;ticas, legislaci&oacute;n, etc";
 choices[55][2] = "Las necesidades del usuario cambian";
 choices[55][3] = "Todas las anteriores";
 answers[55] = choices[55][3];
 units[55] = "78";
 comments[55] = "Id Pregunta: 6292. ";


//  Id pregunta: 6316 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  &iquest;Cu&aacute;l de las siguientes no es un tipo de vista en UML?";
 choices[56]= new Array();
 choices[56][0] = "Vista de Casos de Uso.";
 choices[56][1] = "Vista de Componentes.";
 choices[56][2] = "Vista est&aacute;tica.";
 choices[56][3] = "Vista de concurrencia.";
 answers[56] = choices[56][2];
 units[56] = "84";
 comments[56] = "Id Pregunta: 6316. ";


//  Id pregunta: 6336 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  Indique la respuesta correcta:";
 choices[57]= new Array();
 choices[57][0] = "Las consultas de OLAP sin ser consultas de data mining permiten la realizaci&oacute;n de informes para soporte a la toma de decisiones.";
 choices[57][1] = "Todas las consultas de OLAP son tambi&eacute;n consultas de data mining.";
 choices[57][2] = "Las consultas de OLAP s&oacute;lo pueden realizarse si se ha implementado un hipercubo.";
 choices[57][3] = "Todas las respuestas son ciertas.";
 answers[57] = choices[57][0];
 units[57] = "68";
 comments[57] = "Id Pregunta: 6336. ";


//  Id pregunta: 6353 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de los siguientes no es un objetivo o principio de la ley 9/2014?";
 choices[58]= new Array();
 choices[58][0] = "Fomentar la competencia efectiva en los mercados de telecomunicaciones";
 choices[58][1] = "Fomentar, en la medida de lo posible, la neutralidad tecnol&oacute;gica en la regulaci&oacute;n.";
 choices[58][2] = "Promover el desarrollo de la Sociedad de la Informaci&oacute;n";
 choices[58][3] = "Hacer posible el uso eficaz de los recursos limitados de telecomunicaciones";
 answers[58] = choices[58][2];
 units[58] = "110";
 comments[58] = "Id Pregunta: 6353. NULL";


//  Id pregunta: 6626 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  El modelo CMM de Ingenier&iacute;a de Software consta de:";
 choices[59]= new Array();
 choices[59][0] = "5 niveles, de los cuales todos se descomponen en &aacute;reas de procesos clave";
 choices[59][1] = "5 niveles, de los cuales todos excepto el nivel 1 se descomponen en &aacute;reas de procesos clave";
 choices[59][2] = "5 niveles, de los cuales todos excepto el nivel 5 se descomponen en &aacute;reas de procesos clave";
 choices[59][3] = "6 niveles que se descomponen en &aacute;reas de procesos clave y estas a su vez se organizan seg&uacute;n caracter&iacute;sticas comunes";
 answers[59] = choices[59][1];
 units[59] = "87";
 comments[59] = "Id Pregunta: 6626. NULL";


//  Id pregunta: 7305 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  El est&aacute;ndar AURORA de la ETSI para reconocimiento del habla distribuido utiliza un vector de caracter&iacute;sticas de:";
 choices[60]= new Array();
 choices[60][0] = "12 componentes";
 choices[60][1] = "26 componentes";
 choices[60][2] = "38 componentes";
 choices[60][3] = "39 componentes";
 answers[60] = choices[60][3];
 units[60] = "94";
 comments[60] = "Id Pregunta: 7305. NULL";


//  Id pregunta: 7778 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)   El t&eacute;rmino JigSaw se refiere a:";
 choices[61]= new Array();
 choices[61][0] = " Una plataforma de servidor Web basada en Java, cuyo principal objetivo es hacer demostraciones de nuevos protocolos y, al mismo tiempo, ofrecer una base de experimentaci&oacute;n en el &aacute;rea de software para servidor.";
 choices[61][1] = " Una interfaz de programaci&oacute;n de aplicaciones (API) Web de cliente, de uso com&uacute;n y alta modularidad, cuyo principal prop&oacute;sito es el de servir como herramienta de pruebas para experimentos con protocolos.";
 choices[61][2] = " Un lenguaje est&aacute;ndar utilizado por los componentes que intervienen en un sistema multimodal para comunicarse.";
 choices[61][3] = " Un lenguaje de etiquetado utilizado para crear presentaciones multimedia din&aacute;micas a trav&eacute;s de la sincronizaci&oacute;n en tiempo y espacio de diversos elementos como audio, v&iacute;deo, texto y gr&aacute;ficos.";
 answers[61] = choices[61][0];
 units[61] = "NULL";
 comments[61] = "Id Pregunta: 7778. Map 2005";


//  Id pregunta: 7781 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)   Los derechos de explotaci&oacute;n de un programa de ordenador cuando el autor es una persona f&iacute;sica se mantienen como m&aacute;ximo:";
 choices[62]= new Array();
 choices[62][0] = " Durante toda la vida del autor y del heredero leg&iacute;timo de estos derechos.";
 choices[62][1] = " Durante toda la vida del autor y cincuenta a&ntilde;os despu&eacute;s de su muerte.";
 choices[62][2] = " Durante toda la vida del autor y setenta a&ntilde;os despu&eacute;s de su muerte.";
 choices[62][3] = " De forma indefinida mientras no se produzca la cesi&oacute;n de estos derechos por parte del titular de los mismos.";
 answers[62] = choices[62][2];
 units[62] = "NULL";
 comments[62] = "Id Pregunta: 7781. Map 2005";


//  Id pregunta: 7928 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)   El modelo ITIL (Information Technology Infrastructure Library) se utiliza para identificar y administrar los servicios de tecnolog&iacute;as de la informaci&oacute;n que presta una organizaci&oacute;n. &iquest;Cu&aacute;l de los siguientes NO forma parte del conjunto de procesos identificados por ITIL?";
 choices[63]= new Array();
 choices[63][0] = " Soporte de servicios.";
 choices[63][1] = " Gesti&oacute;n de la seguridad.";
 choices[63][2] = " Administraci&oacute;n de aplicaciones.";
 choices[63][3] = " Desarrollo de aplicaciones.";
 answers[63] = choices[63][3];
 units[63] = "NULL";
 comments[63] = "Id Pregunta: 7928. Map 2006";


//  Id pregunta: 8067 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)   &iquest;Cu&aacute;ntos p&iacute;xeles tiene una ilustraci&oacute;n de 6x6 pulgadas con una resoluci&oacute;n de 300 ppi?";
 choices[64]= new Array();
 choices[64][0] = " 540.000 p&iacute;xeles.";
 choices[64][1] = " 3.240.000 p&iacute;xeles.";
 choices[64][2] = " 10.800 p&iacute;xeles.";
 choices[64][3] = " 1.800 p&iacute;xeles.";
 answers[64] = choices[64][1];
 units[64] = "NULL";
 comments[64] = "Id Pregunta: 8067. Map 2008";


//  Id pregunta: 8070 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)   &iquest;Cu&aacute;l de los dispositivos de red -citados seguidamente- brinda internetworking y control de broadcast?";
 choices[65]= new Array();
 choices[65][0] = " Hub.";
 choices[65][1] = " Puente.";
 choices[65][2] = " NIC (Network Interface Card).";
 choices[65][3] = " Router.";
 answers[65] = choices[65][3];
 units[65] = "NULL";
 comments[65] = "Id Pregunta: 8070. Map 2008";


//  Id pregunta: 8091 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)   Indique cu&aacute;l de los siguientes criterios NO es correcto de acuerdo con el Modelo EFQM de Excelencia:";
 choices[66]= new Array();
 choices[66][0] = " Colaboradores y recursos.";
 choices[66][1] = " Liderazgo.";
 choices[66][2] = " Resultados en la sociedad.";
 choices[66][3] = " Viabilidad econ&oacute;mica.";
 answers[66] = choices[66][3];
 units[66] = "NULL";
 comments[66] = "Id Pregunta: 8091. Map 2008";


//  Id pregunta: 8193 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  Seg&uacute;n el RD 589/2005, los Planes estrat&eacute;gicos departamentales en materia de tecnolog&iacute;as de la informaci&oacute;n y Administraci&oacute;n Electr&oacute;nica:";
 choices[67]= new Array();
 choices[67][0] = "Deben tener una duraci&oacute;n de al menos 2 a&ntilde;os. ";
 choices[67][1] = "Deben tener una duraci&oacute;n de al menos 3 a&ntilde;os.";
 choices[67][2] = "Deben tener una duraci&oacute;n de al menos 4 a&ntilde;os. ";
 choices[67][3] = "Pueden tener cualquier duraci&oacute;n siempre y cuando tengan car&aacute;cter verdaderamente estrat&eacute;gico.";
 answers[67] = choices[67][0];
 units[67] = "77";
 comments[67] = "Id Pregunta: 8193. Examen TIC A1 2010";


//  Id pregunta: 8261 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  El empleo de redes neuronales para el reconocimiento de caracteres:";
 choices[68]= new Array();
 choices[68][0] = "Usa mecanismos basados en l&oacute;gica borrosa.";
 choices[68][1] = "No permite explicar f&aacute;cilmente las razones por las que se obtiene un determinado resultado.";
 choices[68][2] = "Se basa en la obtenci&oacute;n de un vector de caracter&iacute;sticas";
 choices[68][3] = "Hace que el reconocimiento se vea m&aacute;s afectado por defectos de la imagen que otros m&eacute;todos como el de comparaci&oacute;n de matrices.";
 answers[68] = choices[68][1];
 units[68] = "63,64";
 comments[68] = "Id Pregunta: 8261. Examen TIC A1 2010";


//  Id pregunta: 8458 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  Con el fin de garantizar que las aplicaciones comerciales y las herramientas desarrolladas a medida, se encuentren alineadas con las necesidades del negocio, el est&aacute;ndar COBIT, define 7 procesos a seguir &iquest;en cu&aacute;l de los cuatro dominios que utiliza COBIT para clasificar los procesos de negocio, se encuentran incluidos?:";
 choices[69]= new Array();
 choices[69][0] = "Planificaci&oacute;n y Organizaci&oacute;n";
 choices[69][1] = "Supervisi&oacute;n y Evaluaci&oacute;n";
 choices[69][2] = "Adquisici&oacute;n e Implementaci&oacute;n";
 choices[69][3] = "Ninguna de las anteriores";
 answers[69] = choices[69][2];
 units[69] = "98";
 comments[69] = "Id Pregunta: 8458. Analista Ayto. Madrid 2010";


//  Id pregunta: 8761 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  Sean dos procesos: P1, con tiempo de ejecuci&oacute;n de 20ms, y P2, con 15ms. El planificador a corto plazo act&uacute;a seg&uacute;n un Round Robin con cuanto de 10ms y tiempo de conmutaci&oacute;n de tarea de 5ms Marcar el tiempo de retorno (regreso) de P2, teniendo en cuenta que se empieza ejecutando P1.";
 choices[70]= new Array();
 choices[70][0] = "35";
 choices[70][1] = "40";
 choices[70][2] = "50";
 choices[70][3] = "55";
 answers[70] = choices[70][2];
 units[70] = "52";
 comments[70] = "Id Pregunta: 8761. Examen TIC A2 2010 interna";


//  Id pregunta: 9000 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  ATM ofrece las siguientes clases de servicio de tiempo real:";
 choices[71]= new Array();
 choices[71][0] = "CBR y GFR";
 choices[71][1] = "ABR y CBR";
 choices[71][2] = "ABR y GFR";
 choices[71][3] = "CBR y rt-VBR";
 answers[71] = choices[71][3];
 units[71] = "109";
 comments[71] = "Id Pregunta: 9000. Examen UPM A2 2011";


//  Id pregunta: 9047 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  Cu&aacute;l no es un derecho de las personas seg&uacute;n la LOPD";
 choices[72]= new Array();
 choices[72][0] = "Impugnaci&oacute;n de valoraciones";
 choices[72][1] = "Derecho de acceso";
 choices[72][2] = "Derecho a cobrar dinero por el tratamiento de sus datos";
 choices[72][3] = "Derecho de rectificaci&oacute;n";
 answers[72] = choices[72][2];
 units[72] = "29";
 comments[72] = "Id Pregunta: 9047. ";


//  Id pregunta: 9096 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l no es un derecho de explotaci&oacute;n de un programa de ordenador?";
 choices[73]= new Array();
 choices[73][0] = "La reproducci&oacute;n del programa de ordenador.";
 choices[73][1] = "La transformaci&oacute;n del programa de ordenador.";
 choices[73][2] = "La distribuci&oacute;n p&uacute;blica del programa de ordenador.";
 choices[73][3] = "Todas las anteriores son verdaderas.";
 answers[73] = choices[73][3];
 units[73] = "36";
 comments[73] = "Id Pregunta: 9096. ";


//  Id pregunta: 9165 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  El est&aacute;ndar m&aacute;s extendido en el campo de los Sistemas de Informaci&oacute;n Geogr&aacute;fica para los servicios de cat&aacute;logo es:";
 choices[74]= new Array();
 choices[74][0] = "ISO 23950";
 choices[74][1] = "ISO 19125";
 choices[74][2] = "ISO 19115";
 choices[74][3] = "Ninguno de los anteriores se refiere a un est&aacute;ndar de servicio de cat&aacute;logo";
 answers[74] = choices[74][0];
 units[74] = "67";
 comments[74] = "Id Pregunta: 9165. NULL";


//  Id pregunta: 9189 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l de las siguiente no es una T&eacute;cnica?";
 choices[75]= new Array();
 choices[75][0] = "Prototipado";
 choices[75][1] = "Normalizaci&oacute;n";
 choices[75][2] = "Diagrama de paquetes";
 choices[75][3] = "Casos de uso";
 answers[75] = choices[75][0];
 units[75] = "86";
 comments[75] = "Id Pregunta: 9189. NULL";


//  Id pregunta: 9220 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  &iquest;Qu&eacute; es Zoning?";
 choices[76]= new Array();
 choices[76][0] = "Es un concepto perteneciente a las redes SAN de FC";
 choices[76][1] = "Cada zona se comporta como si en la red SAN solo existienen los dispositivos que forman parte de ella.";
 choices[76][2] = "El servidor y la cabina debe estar en la misma zona y adicionalmente la cabina debe permitir el acceso del servicio a dicha LUN.";
 choices[76][3] = "Todas son v&aacute;lidas";
 answers[76] = choices[76][3];
 units[76] = "48";
 comments[76] = "Id Pregunta: 9220. ";


//  Id pregunta: 9267 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  &iquest;Con qu&eacute; dispositivo se relaciona la tecnolog&iacute;a de reconocimiento de pulso ac&uacute;stico?";
 choices[77]= new Array();
 choices[77][0] = "Memoria RAM";
 choices[77][1] = "Pantalla t?ctil.";
 choices[77][2] = "Tarjeta de sonido.";
 choices[77][3] = "Disco duro. ";
 answers[77] = choices[77][1];
 units[77] = "47";
 comments[77] = "Id Pregunta: 9267. Examen TICA2-2011";


//  Id pregunta: 9283 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  &iquest;Cu&aacute;l de las siguientes NO es una prerrogativa de la Administraci&oacute;n seg&uacute;n el Texto Refundido de la Ley de Contratos del Sector P&uacute;blico?";
 choices[78]= new Array();
 choices[78][0] = "Disminuir la cuant&iacute;a econ&oacute;mica del contrato por razones de d&eacute;ficit excesivo.";
 choices[78][1] = "Acordar la resoluci&oacute;n del contrato y determinar los efectos de &eacute;sta. ";
 choices[78][2] = "Modificar los contratos por razones de inter&eacute;s p&uacute;blico. ";
 choices[78][3] = "Interpretar los contratos.";
 answers[78] = choices[78][0];
 units[78] = "41";
 comments[78] = "Id Pregunta: 9283. Art. 210 RD Legislativo 3/2011";


//  Id pregunta: 9346 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  Acerca de RDSI y sus diferentes servicios:";
 choices[79]= new Array();
 choices[79][0] = "Los servicios portadores soportan la comunicaci&oacute;n terminal a terminal";
 choices[79][1] = "Los teleservicios proporcionan capacidades adicionales para los servicios suplementearios y los servicios portadores.";
 choices[79][2] = "Los servicios suplementarios soportan la comunicaci&oacute;n terminal a terminal y controlan los procesos de comunicaci&oacute;n entre usuarios.";
 choices[79][3] = "Los teleservicios soportan la comunicaci&oacute;n terminal a terminal";
 answers[79] = choices[79][3];
 units[79] = "103";
 comments[79] = "Id Pregunta: 9346. Pag 9 temario ASTIC 2011";


//  Id pregunta: 9409 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  Qui&eacute;n deber&iacute;a cerrar siempre las incidencias?";
 choices[80]= new Array();
 choices[80][0] = "El nivel 1 (CAU)";
 choices[80][1] = "El nivel 2 (resto de &aacute;reas del centro TIC)";
 choices[80][2] = "El nivel 3 (proveedores)";
 choices[80][3] = "Aquel nivel que resuelva la incidencia";
 answers[80] = choices[80][0];
 units[80] = "26";
 comments[80] = "Id Pregunta: 9409. ";


//  Id pregunta: 9645 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  Entre los &oacute;rganos consultivos, referidos en el RD Legislativo 3/2011, no se encuentra:";
 choices[81]= new Array();
 choices[81][0] = "Mesas de contrataci&oacute;n";
 choices[81][1] = "Junta Consultiva de Contrataci&oacute;n Administrativa del Estado";
 choices[81][2] = "&Oacute;rganos consultivos en las CCAA";
 choices[81][3] = "Todos los anteriores";
 answers[81] = choices[81][0];
 units[81] = "41";
 comments[81] = "Id Pregunta: 9645. Art. 324, Art. 325 RD Legislativo 3/2011";


//  Id pregunta: 10007 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  En la direcci&oacute;n de proyectos de Tecnolog&iacute;as de la Informaci&oacute;n, es fundamental la gesti&oacute;n del alcance del proyecto. Ello supone";
 choices[82]= new Array();
 choices[82][0] = "estimar la duraci&oacute;n de las actividades.";
 choices[82][1] = "definir la secuencia entre las actividades.";
 choices[82][2] = "asegurar que el proyecto incluya todo el trabajo requerido, y s&oacute;lo el trabajo requerido.";
 choices[82][3] = "preparar el presupuesto de costes.";
 answers[82] = choices[82][2];
 units[82] = "27";
 comments[82] = "Id Pregunta: 10007. ";


//  Id pregunta: 10077 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  &iquest;Qu&eacute; banda de frecuencia se utiliza para la prestaci&oacute;n de los servicios de televisi&oacute;n terrestre con tecnolog&iacute;a digital, seg&uacute;n el Cuadro Nacional de Atribuciones de Frecuencia?";
 choices[83]= new Array();
 choices[83][0] = "100 a 224 MHz ";
 choices[83][1] = "225 a 356 MHz";
 choices[83][2] = "357 a 469 MHz ";
 choices[83][3] = "470 a 862 MHz";
 answers[83] = choices[83][3];
 units[83] = "105";
 comments[83] = "Id Pregunta: 10077. TIC A2, libre, Examen 2013";


//  Id pregunta: 10451 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  En el &aacute;mbito de la continuidad de negocio, el &quot;objetivo de prestaci&oacute;n de servicios&quot; se define como:";
 choices[84]= new Array();
 choices[84][0] = "El tiempo que una organizaci&oacute;n puede esperar desde el punto de fallo hasta la restauraci&oacute;n de los servicios o aplicaciones cr&iacute;ticas.";
 choices[84][1] = "El nivel de servicios a proveer durante el modo de proceso alterno.";
 choices[84][2] = "Ninguna de las anteriores.";
 choices[84][3] = "A y B.";
 answers[84] = choices[84][1];
 units[84] = "97";
 comments[84] = "Id Pregunta: 10451. NULL";


//  Id pregunta: 10673 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  La Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas deroga expresamente:";
 choices[85]= new Array();
 choices[85][0] = "La Ley 30/1992, de 26 de noviembre, de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y del Procedimiento Administrativo Com&uacute;n.";
 choices[85][1] = "La Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los Servicios P&uacute;blicos.";
 choices[85][2] = "Ambas";
 choices[85][3] = "Ninguna de las dos Leyes se&ntilde;aladas.";
 answers[85] = choices[85][1];
 units[85] = "30";
 comments[85] = "Id Pregunta: 10673. ";


//  Id pregunta: 10730 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  Seg&uacute;n la NTI de requisitos de conexi&oacute;n a la red de comunicaciones de las Administraciones P&uacute;blicas espa&ntilde;olas &iquest;cual de los siguientes no es un tipo de Punto de Presencia (PdP) de la Red SARA?";
 choices[86]= new Array();
 choices[86][0] = "Proveedores de Acceso a la Red SARA (PAS).";
 choices[86][1] = "Centros de Proceso de Datos (CPD) de SARA.";
 choices[86][2] = "Red sTESTA (secure Trans-European Services for Telematics between Administrations).";
 choices[86][3] = "Todos los anteriores son tipos de PdP.";
 answers[86] = choices[86][3];
 units[86] = "43";
 comments[86] = "Id Pregunta: 10730. ";


//  Id pregunta: 10889 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  Se&ntilde;ale cu&aacute;l de las siguientes direcciones IP puede ser asignada a un host en la siguiente subred 132.26.41.90/26:";
 choices[87]= new Array();
 choices[87][0] = "132.26.41.128";
 choices[87][1] = "132.26.41.127";
 choices[87][2] = "132.26.41.124";
 choices[87][3] = "132.26.41.55";
 answers[87] = choices[87][2];
 units[87] = "100";
 comments[87] = "Id Pregunta: 10889. Examen GSI 2014";


//  Id pregunta: 10917 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  La tasa de transferencia m&aacute;xima que soporta el Serial Advanced Technology Attachment Express (SATA Express) es de hasta:";
 choices[88]= new Array();
 choices[88][0] = "6 Gbps.";
 choices[88][1] = "16 Gbps.";
 choices[88][2] = "8 Gbps.";
 choices[88][3] = "3 Gbps.";
 answers[88] = choices[88][1];
 units[88] = "46, 48";
 comments[88] = "Id Pregunta: 10917. Examen GSI 2014";


//  Id pregunta: 10959 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  El Centro de Informaci&oacute;n y Red de Creaci&oacute;n de Empresas (CIRCE), gestionado por el Ministerio de Industria, Energ&iacute;a y Turismo:";
 choices[89]= new Array();
 choices[89][0] = "Permite realizar, de forma telem&aacute;tica, los tr&aacute;mites de constituci&oacute;n y puesta en marcha de todas las empresas que vayan a ejercer su actividad en el territorio nacional.";
 choices[89][1] = "Permite realizar, de forma telem&aacute;tica, los tr&aacute;mites de apoderamiento y gestiones notariales necesarias para la puesta en marcha de las empresas.";
 choices[89][2] = "Permite realizar de forma telem&aacute;tica, los tr&aacute;mites de constituci&oacute;n y puesta en marcha de Sociedades Limitada Nueva Empresa (SLNE), Sociedades de Responsabilidad Limitada (SRL o SL), o Empresarios Individuales (Aut&oacute;nomos).";
 choices[89][3] = "Es una plataforma para la informaci&oacute;n del emprendedor que se utiliza en los Puntos de Atenci&oacute;n al Emprendedor (PAEs), no permitiendo la realizaci&oacute;n de tr&aacute;mites online.";
 answers[89] = choices[89][2];
 units[89] = "30";
 comments[89] = "Id Pregunta: 10959. TIC A1 AGE 2014";


//  Id pregunta: 11166 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;Cu&aacute;les de las siguientes t&eacute;cnicas no suele utilizarse en los sistemas de reconocimiento de habla?";
 choices[90]= new Array();
 choices[90][0] = "Dynamic Time Warping";
 choices[90][1] = "Hidden Markov Model";
 choices[90][2] = "Neural Networks";
 choices[90][3] = "Todas las anteriores se suelen utilizar en los sistemas de reconocimiento de habla";
 answers[90] = choices[90][3];
 units[90] = "93";
 comments[90] = "Id Pregunta: 11166. ";


//  Id pregunta: 11243 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Un contrato de colaboraci&oacute;n p&uacute;blico-privada de 134.000 euros estar&aacute; sujeto a regulaci&oacute;n armonizada.";
 choices[91]= new Array();
 choices[91][0] = "En todo caso.";
 choices[91][1] = "Depender&aacute; del umbral establecido.";
 choices[91][2] = "S&oacute;lo si es del sector p&uacute;blico estatal.";
 choices[91][3] = "Depende de que los lotes no superen los 80.00 euros.";
 answers[91] = choices[91][0];
 units[91] = "41";
 comments[91] = "Id Pregunta: 11243. ";


//  Id pregunta: 11275 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Entre las opciones que posee una organizaci&oacute;n para obtener servicios en la nube:";
 choices[92]= new Array();
 choices[92][0] = "La nube comunitaria implica menor complejidad en la integraci&oacute;n de la soluci&oacute;n cloud.";
 choices[92][1] = "El retorno de la inversi&oacute;n es m&aacute;s lento en la nube p&uacute;blica que en la nube privada.";
 choices[92][2] = "La nube h&iacute;brida permite compaginar la auto-provisi&oacute;n de procesos cr&iacute;ticos y ganar flexibilidad en aquellos que tienen menor criticidad.";
 choices[92][3] = "La nube p&uacute;blica nos da la posibilidad de aprovechar las infraestructuras ya existentes en la organizaci&oacute;n.";
 answers[92] = choices[92][2];
 units[92] = "47";
 comments[92] = "Id Pregunta: 11275. ";


//  Id pregunta: 11379 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; significa &ldquo;Garant&iacute;a de un servicio&rdquo;?";
 choices[93]= new Array();
 choices[93][0] = "El servicio se ajusta al prop&oacute;sito";
 choices[93][1] = "No habr&aacute; fallas en las aplicaciones ni en la infraestructura asociada al servicio";
 choices[93][2] = "Todos los problemas relacionados con el servicio se solucionan gratuitamente durante un per&iacute;odo determinado de tiempo";
 choices[93][3] = "A los clientes se les aseguran ciertos niveles de disponibilidad, capacidad, continuidad y seguridad";
 answers[93] = choices[93][3];
 units[93] = "98";
 comments[93] = "Id Pregunta: 11379. ";


//  Id pregunta: 11390 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta para todos los procesos?";
 choices[94]= new Array();
 choices[94][0] = "Definen funciones como parte de su dise&ntilde;o";
 choices[94][1] = "Entregan resultados al cliente o a interesados";
 choices[94][2] = "Son llevados a cabo por un proveedor de servicios externo, en apoyo a un cliente";
 choices[94][3] = "Son unidades de organizaciones responsables de resultados espec&iacute;ficos";
 answers[94] = choices[94][1];
 units[94] = "98";
 comments[94] = "Id Pregunta: 11390. ";


//  Id pregunta: 11534 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Seg&uacute;n la Ley 34/2002 de Servicios de la Sociedad de la Informaci&oacute;n y Comercio electr&oacute;nico, el procedimiento de cooperaci&oacute;n intracomunitario en el que se propone la realizaci&oacute;n de acciones urgentes contra un prestador de servicios de la sociedad de la informaci&oacute;n establecido en la U.E que haya incumplido alguno de los preceptos de la Ley, requiere notificaci&oacute;n al Consejo Europeo y al Estado Miembro en el que opera dicho Prestador en un Plazo M&Aacute;XIMO de:";
 choices[95]= new Array();
 choices[95][0] = "1 mes desde la adopci&oacute;n de las acciones urgentes.";
 choices[95][1] = "30 d&iacute;as desde la adopci&oacute;n de las acciones urgentes.";
 choices[95][2] = "15 d&iacute;as desde la adopci&oacute;n de acciones urgentes.";
 choices[95][3] = "Ninguna de las anteriores.";
 answers[95] = choices[95][2];
 units[95] = "70";
 comments[95] = "Id Pregunta: 11534. NULL";


//  Id pregunta: 11559 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas de reconocimiento del habla se basan en el an&aacute;lisis de patrones o plantillas?";
 choices[96]= new Array();
 choices[96][0] = "DTW, Dinamic Time Warping";
 choices[96][1] = "Modelos Ocultos de Markov (HMM)";
 choices[96][2] = "SIFT, Simplified Inversed Filter Tracking";
 choices[96][3] = "Ninguna de las anteriores es cierta.";
 answers[96] = choices[96][0];
 units[96] = "94";
 comments[96] = "Id Pregunta: 11559. NULL";


//  Id pregunta: 11646 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  El stemming es:";
 choices[97]= new Array();
 choices[97][0] = "Una t&eacute;cnica de indexaci&oacute;n sint&aacute;ctica";
 choices[97][1] = "Una t&eacute;cnica de indexaci&oacute;n morfol&oacute;gica";
 choices[97][2] = "Una t&eacute;cnica de indexaci&oacute;n sem&aacute;ntica";
 choices[97][3] = "Una t&eacute;cnica de eliminaci&oacute;n de palabras vac&iacute;as";
 answers[97] = choices[97][1];
 units[97] = "96";
 comments[97] = "Id Pregunta: 11646. ";


//  Id pregunta: 11729 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Qu&eacute; dos algoritmos de cifrado se utilizan en IPsec VPN?";
 choices[98]= new Array();
 choices[98][0] = "3DES y AES";
 choices[98][1] = "AES y DH";
 choices[98][2] = "3DES y PSK";
 choices[98][3] = "IKE y PSK";
 answers[98] = choices[98][0];
 units[98] = "111";
 comments[98] = "Id Pregunta: 11729. NULL";


//  Id pregunta: 11773 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  En el expediente de contrataci&oacute;n";
 choices[99]= new Array();
 choices[99][0] = "la memoria debe referirse a la necesidad e idoneidad del contrato";
 choices[99][1] = "la memoria debe referirse a los requisitos que deben contener los pliegos de cl&aacute;usulas administrativas y t&eacute;cnicas generales";
 choices[99][2] = "la memoria debe referirse solo a la necesidad del contrato";
 choices[99][3] = "Todas son correctas&nbsp;";
 answers[99] = choices[99][0];
 units[99] = "41";
 comments[99] = "Id Pregunta: 11773. ";


