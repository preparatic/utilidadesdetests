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

//  Id pregunta: 79 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Qu&eacute; red implementa la jerarqu&iacute;a absoluta?:";
 choices[0]= new Array();
 choices[0][0] = "En Y";
 choices[0][1] = "En cadena";
 choices[0][2] = "En c&iacute;rculo";
 choices[0][3] = "En rueda";
 answers[0] = choices[0][1];
 units[0] = "23";
 comments[0] = "Id Pregunta: 79. NULL";


//  Id pregunta: 139 AÃ±o de creación de pregunta: 2009-01-01
 questions[1]= "2)  El derecho de informaci&oacute;n en la recogida de datos define la informaci&oacute;n que, obligatoriamente y con car&aacute;cter previo, se debe comunicar al afectado al que se le requiera para suministrar cualquier dato personal. Entre dicha informaci&oacute;n consta:";
 choices[1]= new Array();
 choices[1][0] = "El car&aacute;cter voluntario u obligatorio de las respuestas y de las consecuencias de la negativa a proporcionarlas";
 choices[1][1] = "El plazo de almacenamiento de la informaci&oacute;n";
 choices[1][2] = "El n&uacute;mero de cesiones que se van a realizar";
 choices[1][3] = "S&oacute;lo es necesario comunicar al afectado que se va a crear el fichero";
 answers[1] = choices[1][0];
 units[1] = "29";
 comments[1] = "Id Pregunta: 139. ";


//  Id pregunta: 409 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  Respecto al derecho de rectificaci&oacute;n y cancelaci&oacute;n es falso que:";
 choices[2]= new Array();
 choices[2][0] = "Si los datos rectificados o cancelados hubiesen sido previamente cedidos, el responsable del fichero deber&aacute; notificar la rectificaci&oacute;n o cancelaci&oacute;n efectiva al cesionario";
 choices[2][1] = "Que se podr&aacute;, en las circunstancias que se establezcan reglamentariamente, exigir una m&iacute;nima contraprestaci&oacute;n por los gastos de gesti&oacute;n que dicha rectificaci&oacute;n ocasione justificadamente";
 choices[2][2] = "Es un derecho, recogido en la LOPD, de todos los ciudadanos";
 choices[2][3] = "Que se pueda reclamar ante la Agencia de Protecci&oacute;n de Datos en el caso de que no se facilite el libre ejercicio de este derecho";
 answers[2] = choices[2][1];
 units[2] = "29";
 comments[2] = "Id Pregunta: 409. ";


//  Id pregunta: 441 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  Seg&uacute;n la Ley Org&aacute;nica 15/99 de Protecci&oacute;n de Datos de car&aacute;cter personal, no ser&aacute; preciso el consentimiento del interesado en la comunicaci&oacute;n de datos a un tercero cuando:";
 choices[3]= new Array();
 choices[3][0] = "Cuando la cesi&oacute;n est&aacute; autorizada por una Ley";
 choices[3][1] = "Cuando la cesi&oacute;n est&aacute; autorizada por un Real Decreto";
 choices[3][2] = "Cuando la comunicaci&oacute;n tenga por destinatario al Presidente del Gobierno";
 choices[3][3] = "Cuando se realice para garantizar el inter&eacute;s general";
 answers[3] = choices[3][0];
 units[3] = "29";
 comments[3] = "Id Pregunta: 441. ";


//  Id pregunta: 462 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Son fuentes accesibles al p&uacute;blico, seg&uacute;n la Ley Org&aacute;nica 15/99 de Protecci&oacute;n de Datos de Car&aacute;cter Personal:";
 choices[4]= new Array();
 choices[4][0] = "Aquellos ficheros cuya consulta puede ser realizada sin m&aacute;s exigencia que, en su caso, el abono de una contraprestaci&oacute;n";
 choices[4][1] = "El censo electoral";
 choices[4][2] = "Los diarios y boletines oficiales y los medios de comunicaci&oacute;n";
 choices[4][3] = "S&oacute;lo los boletines oficiales";
 answers[4] = choices[4][2];
 units[4] = "29";
 comments[4] = "Id Pregunta: 462. ";


//  Id pregunta: 480 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;De qu&eacute; depende el canon de compensacion equitativa por copia privada establecido con la orden PRE/1743/2008 de 18 de junio?";
 choices[5]= new Array();
 choices[5][0] = "Del tipo de equipo (anal&oacute;gico o digital)";
 choices[5][1] = "Del destino del soporte";
 choices[5][2] = "De la categoria del equipo";
 choices[5][3] = "Todas son ciertas";
 answers[5] = choices[5][3];
 units[5] = "36,37";
 comments[5] = "Id Pregunta: 480. ";


//  Id pregunta: 490 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Las normas de V.61 a V.92 de la serie V de la ITU-T tratan de:";
 choices[6]= new Array();
 choices[6][0] = "control de errores de transmisi&oacute;n";
 choices[6][1] = "interfaces y m&oacute;dems para la banda vocal";
 choices[6][2] = "transmisi&oacute;n simult&aacute;nea de datos y otras se&ntilde;ales";
 choices[6][3] = "calidad de transmisi&oacute;n y mantenimiento";
 answers[6] = choices[6][2];
 units[6] = "42";
 comments[6] = "Id Pregunta: 490. ";


//  Id pregunta: 693 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  El R.D. 209/2003 regula:";
 choices[7]= new Array();
 choices[7][0] = "Los registros telem&aacute;ticos";
 choices[7][1] = "Las notificaciones telem&aacute;ticas";
 choices[7][2] = "La utilizaci&oacute;n de medios telem&aacute;ticos para la sustituci&oacute;n de la aportaci&oacute;n de certificados por los ciudadanos";
 choices[7][3] = "Todas las anteriores son correctas";
 answers[7] = choices[7][3];
 units[7] = "30";
 comments[7] = "Id Pregunta: 693. ";


//  Id pregunta: 935 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Qu&eacute; indica la directiva #pragma en lenguaje C?:";
 choices[8]= new Array();
 choices[8][0] = "Le indica al compilador que genere un mensaje de error si llega a ese punto del c&oacute;digo";
 choices[8][1] = "Es un #include condicional";
 choices[8][2] = "Permite al implementador del compilador definir otras instrucciones de preprocesamiento para el compilador";
 choices[8][3] = "Nada de lo anterior es correcto";
 answers[8] = choices[8][2];
 units[8] = "59";
 comments[8] = "Id Pregunta: 935. ";


//  Id pregunta: 1184 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Indicar la respuesta falsa sobre las redes sem&aacute;nticas en inteligencia artificial:";
 choices[9]= new Array();
 choices[9][0] = "Las redes sem&aacute;nticas conciben el pensamiento mediante un conjunto de ideas b&aacute;sicas y relaciones que interconectan unas con otras formando una red, de forma que el razonamiento se basa en una navegaci&oacute;n por dicha red";
 choices[9][1] = "El emparejamiento proporciona respuestas mediante la b&uacute;squeda de parejas de idea-relaci&oacute;n en la red";
 choices[9][2] = "Los mecanismos de inferencia en una red sem&aacute;ntica son la herencia y el emparejamiento";
 choices[9][3] = "El procedimiento de herencia extiende a las caracter&iacute;sticas asociadas a un concepto con las caracter&iacute;sticas de los nodos con los que le une la relaci&oacute;n es-un, de forma que el concepto hereda cualidades propias de otros conceptos m&aacute;s generales";
 answers[9] = choices[9][1];
 units[9] = "64";
 comments[9] = "Id Pregunta: 1184. ";


//  Id pregunta: 1224 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  La informaci&oacute;n manejada por un Sistema de Informaci&oacute;n Geogr&aacute;fica que define las relaciones de tipo espacial existente entre los objetos modelizados, pertenece a la categor&iacute;a de:";
 choices[10]= new Array();
 choices[10][0] = "Informaci&oacute;n posicional.";
 choices[10][1] = "Informaci&oacute;n tem&aacute;tica.";
 choices[10][2] = "Informaci&oacute;n topol&oacute;gica.";
 choices[10][3] = "No existe tal tipo de informaci&oacute;n.";
 answers[10] = choices[10][2];
 units[10] = "67";
 comments[10] = "Id Pregunta: 1224. NULL";


//  Id pregunta: 1326 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Se define Autoridad de certificaci&oacute;n como aquella en la conf&iacute;an uno o m&aacute;s usuarios y cuya actividad principal es la certificaci&oacute;n de la autenticidad de:";
 choices[11]= new Array();
 choices[11][0] = "Los usuarios";
 choices[11][1] = "Los datos";
 choices[11][2] = "Los documentos";
 choices[11][3] = "Los mensajes";
 answers[11] = choices[11][0];
 units[11] = "74";
 comments[11] = "Id Pregunta: 1326. NULL";


//  Id pregunta: 1511 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Respecto al funcionamiento de USB, es falso que:";
 choices[12]= new Array();
 choices[12][0] = "no necesita drivers espec&iacute;ficos para configurar los dispositivos a &eacute;l conectados";
 choices[12][1] = "el ordenador identifica autom&aacute;ticamente el dispositivo que se conecta mientras opera &quot;en caliente&quot;";
 choices[12][2] = "La informaci&oacute;n se transmite de forma no balanceada, con la informaci&oacute;n y el control de sincronizaci&oacute;n en se&ntilde;ales separadas";
 choices[12][3] = "USB 1.1 puede funcionar a 1.5 Mbps y 12 Mbps, y USB 2.0, a 480 Mbps";
 answers[12] = choices[12][2];
 units[12] = "47";
 comments[12] = "Id Pregunta: 1511. ";


//  Id pregunta: 1519 AÃ±o de creación de pregunta: 2003-01-01
 questions[13]= "14)  Caracter&iacute;stica falsa de los archivos .jar";
 choices[13]= new Array();
 choices[13][0] = "Es un acr&oacute;nimo de Java ARchives";
 choices[13][1] = " Puede incluir un subdirectorio META-INF";
 choices[13][2] = " Puede incluir un fichero MANIFEST.MF";
 choices[13][3] = "Puede incluir clases e im&aacute;genes pero no sonidos ";
 answers[13] = choices[13][3];
 units[13] = "60";
 comments[13] = "Id Pregunta: 1519. NULL";


//  Id pregunta: 1683 AÃ±o de creación de pregunta: 2004-01-01
 questions[14]= "15)  En cuanto a los procedimientos de inferencia de las estructuras de representaci&oacute;n del conocimiento, se&ntilde;ale la afirmaci&oacute;n correcta";
 choices[14]= new Array();
 choices[14][0] = "En las redes semanticas los procedimientos de inferencia son la herencia y el equiparaci&oacute;n";
 choices[14][1] = "En los marcos los procedimientos de inferencia son la deducci&oacute;n de valores de slots, la actualizaci&oacute;n de valores de slots, y la emparejamiento";
 choices[14][2] = "En las reglas los procedimientos de inferencia son el encadenamiento hacia adelante, y el encadenamiento hacia atr&aacute;s";
 choices[14][3] = "Todas son correctas";
 answers[14] = choices[14][3];
 units[14] = "64";
 comments[14] = "Id Pregunta: 1683. NULL";


//  Id pregunta: 1767 AÃ±o de creación de pregunta: 2006-01-01
 questions[15]= "16)  En Java a una colecci&oacute;n de clases relacionadas se denomina:";
 choices[15]= new Array();
 choices[15][0] = "Superset o superconjunto.";
 choices[15][1] = "Package o paquete.";
 choices[15][2] = "Superclass o Superclase.";
 choices[15][3] = "Colection o Colecci&oacute;n.";
 answers[15] = choices[15][1];
 units[15] = "60";
 comments[15] = "Id Pregunta: 1767. NULL";


//  Id pregunta: 1771 AÃ±o de creación de pregunta: 2006-01-01
 questions[16]= "17)  Respecto a JNI";
 choices[16]= new Array();
 choices[16][0] = "Se sigue conservando la portabilidad universal";
 choices[16][1] = "Es la interfaz est&aacute;ndar de programaci&oacute;n para llamar a m&eacute;todos nativos escritos en otros lenguajes como C o C++.";
 choices[16][2] = " permite utilizar clases java desde aplicaciones nativas.";
 choices[16][3] = "B y C son correctas";
 answers[16] = choices[16][3];
 units[16] = "60";
 comments[16] = "Id Pregunta: 1771. NULL";


//  Id pregunta: 1794 AÃ±o de creación de pregunta: 2006-01-01
 questions[17]= "18)  Para representaci&oacute;n del conocimiento, las redes sem&aacute;nticas";
 choices[17]= new Array();
 choices[17][0] = "Utilizan redes donde los nodos son ideas y los arcos relaciones entre ellas";
 choices[17][1] = "Utilizan slots donde cada slot se corresponde con una idea ";
 choices[17][2] = "Generan nuevas soluciones mediante mutaciones aleatorias de la poblaci&oacute;n";
 choices[17][3] = "Utilizan redes donde cada nodo tiene un valor y cada arco un sentido y un valor.";
 answers[17] = choices[17][0];
 units[17] = "64";
 comments[17] = "Id Pregunta: 1794. ";


//  Id pregunta: 2061 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  La medida del cumplimiento de los objetivos del organismo y de los requisitos de los usuarios de un sistema de informaci&oacute;n se conoce como:";
 choices[18]= new Array();
 choices[18][0] = "Eficiencia";
 choices[18][1] = "Correspondencia";
 choices[18][2] = "Eficacia";
 choices[18][3] = "Capacidad";
 answers[18] = choices[18][2];
 units[18] = "77";
 comments[18] = "Id Pregunta: 2061. ";


//  Id pregunta: 2143 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas tiene una visi&oacute;n evolutiva?:";
 choices[19]= new Array();
 choices[19][0] = "Diagrama de flujo de datos";
 choices[19][1] = "Diagrama de estructura de datos";
 choices[19][2] = "Historia de la vida de las entidades";
 choices[19][3] = "Ninguna de las anteriores, ya que son t&eacute;cnicas orientadas a datos o flujos";
 answers[19] = choices[19][2];
 units[19] = "81";
 comments[19] = "Id Pregunta: 2143. ";


//  Id pregunta: 2271 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  El diagrama que representa el despliegue de los componentes sobre los dispositivos materiales o nodos es el de:";
 choices[20]= new Array();
 choices[20][0] = "componentes";
 choices[20][1] = "despliegue";
 choices[20][2] = "actividades";
 choices[20][3] = "ninguno de los anteriores";
 answers[20] = choices[20][1];
 units[20] = "86";
 comments[20] = "Id Pregunta: 2271. NULL";


//  Id pregunta: 2357 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Entre las novedades de la versi&oacute;n 3 de la metodolog&iacute;a de planificaci&oacute;n y desarrollo de sistemas de informaci&oacute;n METRICA del Consejo Superior de Administraci&oacute;n Electr&oacute;nica, respecto de su versi&oacute;n anterior, tenemos:";
 choices[21]= new Array();
 choices[21][0] = "Se incluyen las t&eacute;cnicas propias de un desarrollo orientado a objetos y las t&eacute;cnicas de desarrollo del tipo estructurado";
 choices[21][1] = "La incorporaci&oacute;n del proceso de Mantenimiento y de los &uacute;ltimos est&aacute;ndares de ingenier&iacute;a de software y de calidad ISO 12207 e ISO 9000-3";
 choices[21][2] = "La incorporaci&oacute;n con puntos definidos de interfaz para las metodolog&iacute;as de seguridad (MAGERIT), de aseguramiento de la calidad (PGGC - Plan General de Garant&iacute;a de Calidad), Gesti&oacute;n de Configuraci&oacute;n y Gesti&oacute;n de Proyectos";
 choices[21][3] = "Todas las anteriores";
 answers[21] = choices[21][3];
 units[21] = "86";
 comments[21] = "Id Pregunta: 2357. NULL";


//  Id pregunta: 2396 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  La integraci&oacute;n de un conjunto de bases de datos aisladas en un entorno cliente / servidor, con un potente servidor de bases de datos, es un ejemplo t&iacute;pico de:";
 choices[22]= new Array();
 choices[22][0] = "Downsizing.";
 choices[22][1] = "Outsourcing.";
 choices[22][2] = "Arquitectura centralizada.";
 choices[22][3] = "Upsizing.";
 answers[22] = choices[22][3];
 units[22] = "90";
 comments[22] = "Id Pregunta: 2396. ";


//  Id pregunta: 2540 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Los denominados paquetes integrados poseen como caracter&iacute;stica fundamental:";
 choices[23]= new Array();
 choices[23][0] = "Un potente sistema de comunicaciones.";
 choices[23][1] = "La conectividad en sus funciones y gran comodidad en el manejo de datos.";
 choices[23][2] = "Facilidad para el manejo de grandes vol&uacute;menes de datos.";
 choices[23][3] = "El incrementar la potencia real del ordenador al incorporar tarjetas de expansi&oacute;n de memoria.";
 answers[23] = choices[23][1];
 units[23] = "84";
 comments[23] = "Id Pregunta: 2540. ";


//  Id pregunta: 2676 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  En un Sistema de Gesti&oacute;n Documental la recuperaci&oacute;n de la informaci&oacute;n se produce mediante:";
 choices[24]= new Array();
 choices[24][0] = "Palabras clave.";
 choices[24][1] = "Texto completo.";
 choices[24][2] = "&Iacute;ndices.";
 choices[24][3] = "Todas las anteriores.";
 answers[24] = choices[24][3];
 units[24] = "96";
 comments[24] = "Id Pregunta: 2676. NULL";


//  Id pregunta: 2724 AÃ±o de creación de pregunta: 2006-01-01
 questions[25]= "26)  En cuanto al modelo en espiral:";
 choices[25]= new Array();
 choices[25][0] = "La dimensi&oacute;n radial da cuenta del coste acumulativo";
 choices[25][1] = "La dimensi&oacute;n angular da idea del avance realizado en cada ciclo";
 choices[25][2] = "Las dos anteriores son correctas";
 choices[25][3] = "las dos primeras son falsas";
 answers[25] = choices[25][2];
 units[25] = "76";
 comments[25] = "Id Pregunta: 2724. ";


//  Id pregunta: 2775 AÃ±o de creación de pregunta: 2006-01-01
 questions[26]= "27)  Se&ntilde;ale la afirmaci&oacute;n cierta sobre los prototipos...";
 choices[26]= new Array();
 choices[26][0] = "Son un modelo a escala o facs&iacute;mil de lo real que lleva a cabo la totalidad de las funciones necesarias del sistema final.";
 choices[26][1] = "En la fase de dise&ntilde;o se utiliza para definir los requerimientos del usuario.";
 choices[26][2] = "Se debe definir su objetivo a medida que se desarrolla.";
 choices[26][3] = "Los prototipos de pantalla permiten evaluar la posici&oacute;n de informaci&oacute;n sobre la pantalla.";
 answers[26] = choices[26][3];
 units[26] = "85";
 comments[26] = "Id Pregunta: 2775. ";


//  Id pregunta: 2977 AÃ±o de creación de pregunta: 2004-01-01
 questions[27]= "28)  El subnivel de control de acceso al medio, MAC se encuentra encuadrado dentro del nivel?";
 choices[27]= new Array();
 choices[27][0] = "Enlace";
 choices[27][1] = "F&iacute;sico";
 choices[27][2] = " Red";
 choices[27][3] = " ninguna de las anteriores";
 answers[27] = choices[27][0];
 units[27] = "100";
 comments[27] = "Id Pregunta: 2977. Examen Julio 2003";


//  Id pregunta: 3023 AÃ±o de creación de pregunta: 2004-01-01
 questions[28]= "29)  Frame Relay no es el tipo de red de &aacute;rea extensa adecuada para transportar:";
 choices[28]= new Array();
 choices[28][0] = "Ficheros de datos.";
 choices[28][1] = "V&iacute;deo de tiempo real.";
 choices[28][2] = "Descarga de p&aacute;ginas web.";
 choices[28][3] = "Es adecuada para transportar cualquier tipo de tr&aacute;fico.";
 answers[28] = choices[28][1];
 units[28] = "109";
 comments[28] = "Id Pregunta: 3023. ";


//  Id pregunta: 3059 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  El l&aacute;ser, como fuente de luz, es:";
 choices[29]= new Array();
 choices[29][0] = "Un oscilador &oacute;ptico basado en la formaci&oacute;n de una onda electromagn&eacute;tica confinada dentro de una cavidad";
 choices[29][1] = "Un rayo luminoso compuesto de ondas de diversas frecuencias";
 choices[29][2] = "Un dispositivo &oacute;ptico con ganancia interna y voltaje de ruptura ";
 choices[29][3] = "Un dispositivo utilizado para seleccionar los componentes de una se&ntilde;al de acuerdo con sus frecuencias";
 answers[29] = choices[29][0];
 units[29] = "99";
 comments[29] = "Id Pregunta: 3059. ";


//  Id pregunta: 3125 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  &iquest;C&oacute;mo se identifica generalmente una estaci&oacute;n Ethernet?:";
 choices[30]= new Array();
 choices[30][0] = "Mediante la direcci&oacute;n Ethernet que el gestor de la red le asigna";
 choices[30][1] = "Mediante la configuraci&oacute;n de su sistema operativo para configurar su identificaci&oacute;n en la red";
 choices[30][2] = "Mediante la asignaci&oacute;n por el fabricante de la tarjeta de red de una direcci&oacute;n Ethernet &uacute;nica y exclusiva";
 choices[30][3] = "Mediante la asignaci&oacute;n aleatoria que cada usuario de la estaci&oacute;n puede realizar";
 answers[30] = choices[30][2];
 units[30] = "100";
 comments[30] = "Id Pregunta: 3125. La direcci&oacute;n MAC ,compuesta de 48 bits, identifica un&iacute;vocamente a la tarjeta de red. . Los 24 primeros bits son asignados por el IEE y los 24 &uacute;ltimos por el fabricante";


//  Id pregunta: 3242 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  &iquest;Cu&aacute;l es la funci&oacute;n principal del protocolo ICMP?:";
 choices[31]= new Array();
 choices[31][0] = "Convertir direcciones hardware en direcciones IP";
 choices[31][1] = "Convertir direcciones IP en direcciones hardware";
 choices[31][2] = "Estar orientado a la conexi&oacute;n y proporcionar una conexi&oacute;n full-duplex fiable";
 choices[31][3] = "Manejar el control de la informaci&oacute;n y de errores entre el router y el host";
 answers[31] = choices[31][3];
 units[31] = "100";
 comments[31] = "Id Pregunta: 3242. NULL";


//  Id pregunta: 3303 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  &iquest;Qu&eacute; organismo se encarga directamente de asignar los puertos en Internet, que son precisos a la hora de especificar los est&aacute;ndares?:";
 choices[32]= new Array();
 choices[32][0] = "IETF";
 choices[32][1] = "IESG";
 choices[32][2] = "ITU-T";
 choices[32][3] = "ICANN";
 answers[32] = choices[32][3];
 units[32] = "100,112";
 comments[32] = "Id Pregunta: 3303. ";


//  Id pregunta: 3326 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  A la funcionalidad que se cre&oacute; para permitir ofrecer servicios espec&iacute;ficos del operador de telefon&iacute;a m&oacute;vil, utilizando un mecanismo de transporte similar al de los servicios suplementarios del est&aacute;ndar GSM, se le denomina:";
 choices[33]= new Array();
 choices[33][0] = "VHE";
 choices[33][1] = "iMode";
 choices[33][2] = "USSD";
 choices[33][3] = "HSCSD";
 answers[33] = choices[33][2];
 units[33] = "107";
 comments[33] = "Id Pregunta: 3326. NULL";


//  Id pregunta: 3569 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  En una arquitectura de tres capas la manipulaci&oacute;n de los datos corresponde a la capa de:";
 choices[34]= new Array();
 choices[34][0] = "Presentaci&oacute;n";
 choices[34][1] = "Aplicaci&oacute;n";
 choices[34][2] = "Datos";
 choices[34][3] = "En realidad las tres capas manipulan los datos";
 answers[34] = choices[34][2];
 units[34] = "114";
 comments[34] = "Id Pregunta: 3569. ";


//  Id pregunta: 3591 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  La codificaci&oacute;n Manchester tambi&eacute;n es conocida como:";
 choices[35]= new Array();
 choices[35][0] = "C&oacute;digo NRZ polar";
 choices[35][1] = "C&oacute;digo NRZ bipolar";
 choices[35][2] = "C&oacute;digo NRZ normal";
 choices[35][3] = "C&oacute;digo bifase";
 answers[35] = choices[35][3];
 units[35] = "100";
 comments[35] = "Id Pregunta: 3591. NULL";


//  Id pregunta: 3615 AÃ±o de creación de pregunta: 2002-01-01
 questions[36]= "37)  La liberalizaci&oacute;n del sector de telecomunicaciones vino marcada por una serie de directivas comunitarias tendentes hacia un mercado en plena competencia. Marcar la directiva relativa a la competencia en los mercados de servicios de telecomunicaciones:";
 choices[36]= new Array();
 choices[36][0] = "Directiva  CE 2002/58";
 choices[36][1] = "Directiva  CE 2002/22";
 choices[36][2] = "Directiva  CE 2002/77";
 choices[36][3] = "Ninguna de las anteriores";
 answers[36] = choices[36][2];
 units[36] = "110";
 comments[36] = "Id Pregunta: 3615. ";


//  Id pregunta: 3617 AÃ±o de creación de pregunta: 2002-01-01
 questions[37]= "38)  La linea &quot;GET / HTTP/1.1&quot;, dentro de un mensaje HTTP significa:";
 choices[37]= new Array();
 choices[37][0] = "Pide un documento localizado en / ";
 choices[37][1] = "La versi&oacute;n HTTP es 1.1";
 choices[37][2] = "No tiene indicaci&oacute;n del servidor";
 choices[37][3] = "Todas las anteriores respuestas son correctas";
 answers[37] = choices[37][3];
 units[37] = "112";
 comments[37] = "Id Pregunta: 3617. ";


//  Id pregunta: 3699 AÃ±o de creación de pregunta: 2002-01-01
 questions[38]= "39)  Las fibras &oacute;pticas:";
 choices[38]= new Array();
 choices[38][0] = "Presentan mayor atenuaci&oacute;n que los pares coaxiales";
 choices[38][1] = "Se necesitan efectuar conversiones O/E y O/E en los terminales emisor y receptor, respectivamente";
 choices[38][2] = "La distorsi&oacute;n multimodo se produce, sobre todo en las de &iacute;ndice gradual";
 choices[38][3] = "Son inmunes a las interferencias electromagn&eacute;ticas";
 answers[38] = choices[38][3];
 units[38] = "99";
 comments[38] = "Id Pregunta: 3699. ";


//  Id pregunta: 3879 AÃ±o de creación de pregunta: 2004-01-01
 questions[39]= "40)  El protocolo SMTP";
 choices[39]= new Array();
 choices[39][0] = "Define el formato de los mensajes";
 choices[39][1] = "Define la transferencia de mensajes";
 choices[39][2] = "Pone limitaciones al formato del mensaje";
 choices[39][3] = "b y c son ciertas";
 answers[39] = choices[39][3];
 units[39] = "106";
 comments[39] = "Id Pregunta: 3879. Tanenbaum";


//  Id pregunta: 3940 AÃ±o de creación de pregunta: 2003-01-01
 questions[40]= "41)  &iquest;Qu&eacute; mensajes son necesarios para establecer una conexi&oacute;n TCP?:";
 choices[40]= new Array();
 choices[40][0] = "SYN y ACK";
 choices[40][1] = "SYN, SYN-ACK y ACK";
 choices[40][2] = "SYN, SYN-ACK, ACK y NSI";
 choices[40][3] = "Ninguna de las anteriores";
 answers[40] = choices[40][1];
 units[40] = "100";
 comments[40] = "Id Pregunta: 3940. ";


//  Id pregunta: 4072 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  &iquest;Qu&eacute; gestiona un CRM?";
 choices[41]= new Array();
 choices[41][0] = "Las relaciones con los clientes";
 choices[41][1] = "Las relaciones con los Empleados";
 choices[41][2] = "Las relaciones con clientes y empleados";
 choices[41][3] = "Ninguna de las anteriores";
 answers[41] = choices[41][0];
 units[41] = "65";
 comments[41] = "Id Pregunta: 4072. ";


//  Id pregunta: 4155 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  Documento que indica por escrito como una organizaci&oacute;n planea proteger los recursos f&iacute;sicos e inform&aacute;ticos";
 choices[42]= new Array();
 choices[42][0] = "Acuerdo de Licencia de Usuario Final (EULA)";
 choices[42][1] = "Pol&iacute;tica de Seguridad";
 choices[42][2] = "Acuerdo de nivel de servicio (SLA)";
 choices[42][3] = "Gesti&oacute;n de relaciones entre socios (PRM)";
 answers[42] = choices[42][1];
 units[42] = "97";
 comments[42] = "Id Pregunta: 4155. NULL";


//  Id pregunta: 4182 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  Los puntos de conexi&oacute;n de telefon&iacute;a a implantar en una nueva instalaci&oacute;n ser&aacute;n normalmente de tipo";
 choices[43]= new Array();
 choices[43][0] = "RJ11 de 6 contactos";
 choices[43][1] = "RJ45 de 6 contactos";
 choices[43][2] = "RJ45 de 8 contactos";
 choices[43][3] = "RJ49 para cables STP";
 answers[43] = choices[43][2];
 units[43] = "99";
 comments[43] = "Id Pregunta: 4182. ";


//  Id pregunta: 4292 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  &iquest;Cu&aacute;l de los siguientes no ser&iacute;a un motivo que fomentara la generaci&oacute;n de arquitecturas de referencia en la ingenier&iacute;a del software?";
 choices[44]= new Array();
 choices[44][0] = "Los desarrolladores futuros tienen que entender c&oacute;mo programar las aplicaciones futuras en ese dominio.";
 choices[44][1] = "La comunidad de usuarios desea intercambiar componentes e interoperar entre sistemas.";
 choices[44][2] = "Hay potenciales clientes que necesitan una base cierta para comparar entre sistemas.";
 choices[44][3] = "Los aspectos clave de un dominio de aplicaci&oacute;n permanecen invariantes en el tiempo.";
 answers[44] = choices[44][3];
 units[44] = "";
 comments[44] = "Id Pregunta: 4292. ";


//  Id pregunta: 4370 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  El algoritmo de b&uacute;squeda binaria o dicot&oacute;mica";
 choices[45]= new Array();
 choices[45][0] = "Es siempre el m&aacute;s r&aacute;pido de los algoritmos de b&uacute;squeda.";
 choices[45][1] = "No se puede implementar mediante funciones recursivas.";
 choices[45][2] = "Exige que el array est&eacute; totalmente ordenado.";
 choices[45][3] = "Tambi&eacute;n es conocido con el nombre de &ldquo;Quicksort&rdquo;.";
 answers[45] = choices[45][2];
 units[45] = "";
 comments[45] = "Id Pregunta: 4370. ";


//  Id pregunta: 4392 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  Las pruebas alfa:";
 choices[46]= new Array();
 choices[46][0] = "Son pruebas de integraci&oacute;n.";
 choices[46][1] = "Son pruebas de caja transparente";
 choices[46][2] = "Comprueban todo el espacio de ejecuci&oacute;n de un programa.";
 choices[46][3] = "Estiman el porcentaje de errores no detectados.";
 answers[46] = choices[46][2];
 units[46] = "87";
 comments[46] = "Id Pregunta: 4392. NULL";


//  Id pregunta: 4393 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l de las siguientes afirmaciones es incorrecta, cuando estamos hablando del mantenimiento del software?";
 choices[47]= new Array();
 choices[47][0] = "Un sistema de informaci&oacute;n debe concebirse como algo est&aacute;tico, que permanece invariable desde que se crea hasta su extinci&oacute;n, pues de otro modo, nunca se pueden estabilizar los requisitos funcionales de dicho sistema.";
 choices[47][1] = "Los productos software requieren una evoluci&oacute;n continua durante todo su ciclo de vida para irse adaptando a las nuevas necesidades.";
 choices[47][2] = "La evoluci&oacute;n del sistema de informaci&oacute;n tiene como finalidad &uacute;ltima su adecuaci&oacute;n al entorno, de forma que se adapte para realizar nuevas funciones, trabajar m&aacute;s efectivamente o m&aacute;s correctamente.";
 choices[47][3] = "La necesidad de evoluci&oacute;n de los sistemas de informaci&oacute;n hace muy recomendable utilizar una metodolog&iacute;a fiable que permita gestionar los cambios y evaluar el correcto funcionamiento del sistema una vez realizados los cambios necesarios.";
 answers[47] = choices[47][0];
 units[47] = "76";
 comments[47] = "Id Pregunta: 4393. ";


//  Id pregunta: 4451 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  En qu&eacute; capa del modelo de referencia OSI se localiza la subcapa de control de acceso al medio?";
 choices[48]= new Array();
 choices[48][0] = "Capa f&iacute;sica.";
 choices[48][1] = "Capa de sesi&oacute;n.";
 choices[48][2] = "Capa de transporte.";
 choices[48][3] = "Capa de enlace de datos.";
 answers[48] = choices[48][3];
 units[48] = "100";
 comments[48] = "Id Pregunta: 4451. NULL";


//  Id pregunta: 4458 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  La cl&aacute;usula select en SQL se corresponde a:";
 choices[49]= new Array();
 choices[49][0] = "La operaci&oacute;n de proyecci&oacute;n en el &aacute;lgebra relacional.";
 choices[49][1] = "La operaci&oacute;n de uni&oacute;n en el &aacute;lgebra relacional.";
 choices[49][2] = "La operaci&oacute;n de evaluaci&oacute;n en el &aacute;lgebra relacional.";
 choices[49][3] = "La operaci&oacute;n de agregaci&oacute;n en el &aacute;lgebra relacional.";
 answers[49] = choices[49][0];
 units[49] = "58";
 comments[49] = "Id Pregunta: 4458. ";


//  Id pregunta: 4570 AÃ±o de creación de pregunta: 2007-01-01
 questions[50]= "51)  &iquest;Cuantos tipos de drivers existen en JDBC?:";
 choices[50]= new Array();
 choices[50][0] = "2";
 choices[50][1] = "3";
 choices[50][2] = "4";
 choices[50][3] = "tantos como SGBD's";
 answers[50] = choices[50][2];
 units[50] = "60";
 comments[50] = "Id Pregunta: 4570. NULL";


//  Id pregunta: 4581 AÃ±o de creación de pregunta: 2007-01-01
 questions[51]= "52)  &iquest;En que fase de la metodolog&iacute;a M&eacute;trica V3 se inicia la definici&oacute;n de la arquitectura tecnol&oacute;gica?";
 choices[51]= new Array();
 choices[51][0] = "en la planificaci&oacute;n de sistemas de informaci&oacute;n";
 choices[51][1] = "en el an&aacute;lisis del sistema de informaci&oacute;n";
 choices[51][2] = "en el dise&ntilde;o del sistema de informaci&oacute;n";
 choices[51][3] = "en la construcci&oacute;n del sistema de informaci&oacute;n";
 answers[51] = choices[51][0];
 units[51] = "86";
 comments[51] = "Id Pregunta: 4581. NULL";


//  Id pregunta: 4790 AÃ±o de creación de pregunta: 2007-01-01
 questions[52]= "53)  &iquest;Qu&eacute; privilegio deber&iacute;a tener un usuario para poder dar permisos de acceso y modificaci&oacute;n sobre su esquema aotro usuario?";
 choices[52]= new Array();
 choices[52][0] = "CONNECT y RESOURCE";
 choices[52][1] = "DBA";
 choices[52][2] = "GRANT ANY ROLE";
 choices[52][3] = "SELECT ANY TABLE";
 answers[52] = choices[52][2];
 units[52] = "57";
 comments[52] = "Id Pregunta: 4790. ";


//  Id pregunta: 5000 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  El est&aacute;ndar WMS (Web Map Service), que permite publicar cartograf&iacute;a en Internet, &iquest;a cu&aacute;l de las siguientes organizaciones pertenece?:";
 choices[53]= new Array();
 choices[53][0] = "ISO (International Standards Organization).";
 choices[53][1] = "OGC (Open Geospatial Consortium).";
 choices[53][2] = "FGDC (Federal Geographic Data Committee).";
 choices[53][3] = "Consejo Superior Geogr&aacute;fico.";
 answers[53] = choices[53][1];
 units[53] = "67";
 comments[53] = "Id Pregunta: 5000. Examen TIC A1 2007";


//  Id pregunta: 5005 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  Seg&uacute;n la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, un dispositivo seguro de creaci&oacute;n de firma es undispositivo que debe ofrecer al menos ciertas garant&iacute;as. &iquest;Cu&aacute;l de las siguientes NO es una de ellas?";
 choices[54]= new Array();
 choices[54][0] = "Que los datos utilizados para la generaci&oacute;n de firma puedan producirse s&oacute;lo una vez y asegurarrazonablemente su secreto.";
 choices[54][1] = "Que los datos utilizados para la generaci&oacute;n de firma puedan ser derivados de los de verificaci&oacute;n de firma ode la propia firma";
 choices[54][2] = "Que los datos de creaci&oacute;n de firma puedan ser protegidos de forma fiable por el firmante contra su utilizaci&oacute;npor terceros.";
 choices[54][3] = "Que el dispositivo utilizado no alteren los datos o el documento que deba firmarse ni impidan que &eacute;ste semuestre al firmante antes del proceso de firma.";
 answers[54] = choices[54][1];
 units[54] = "30";
 comments[54] = "Id Pregunta: 5005. Examen TIC A 2007 (Ley 59/2003, art&iacute;culo 24)";


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


//  Id pregunta: 5505 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  C&uacute;al es la respuesta correcta respecto a XBRL (eXtensible Business Reporting Language)?:";
 choices[56]= new Array();
 choices[56][0] = "Es un lenguaje basado en XML";
 choices[56][1] = "Permite el intercambio de informaci&oacute;n financiera de las empresas";
 choices[56][2] = "Es posible establecer taxonom&iacute;as que clasifiquen los datos seg&uacute;n etiquetas definidas";
 choices[56][3] = "Todas son correctas";
 answers[56] = choices[56][3];
 units[56] = "69";
 comments[56] = "Id Pregunta: 5505. NULL";


//  Id pregunta: 5573 AÃ±o de creación de pregunta: 2003-01-01
 questions[57]= "58)  &iquest;Qu&eacute; modelo escoger&iacute;a si tiene como objetivo mejorar el control y la calidad del gobierno de las TI a trav&eacute;s del ciclo completo de la puesta en marcha de aplicaciones?";
 choices[57]= new Array();
 choices[57][0] = "ITIL";
 choices[57][1] = "CMMI";
 choices[57][2] = "COBIT";
 choices[57][3] = "M&Eacute;TRICA";
 answers[57] = choices[57][2];
 units[57] = "98";
 comments[57] = "Id Pregunta: 5573. NULL";


//  Id pregunta: 5609 AÃ±o de creación de pregunta: 2003-01-01
 questions[58]= "59)  Los mensajes MPDU en X.400 puedes ser:";
 choices[58]= new Array();
 choices[58][0] = "Sondas, Informes y los propios mensajes";
 choices[58][1] = "Sondas, Notificaciones, mensajes de control y el propio mensaje";
 choices[58][2] = "Notificaciones, Informes de entrega y los propios mensajes";
 choices[58][3] = "Solo los propios mensajes denominados IPM";
 answers[58] = choices[58][0];
 units[58] = "106";
 comments[58] = "Id Pregunta: 5609. ";


//  Id pregunta: 5678 AÃ±o de creación de pregunta: 2003-01-01
 questions[59]= "60)  En cuanto a Agentes Software y la Comunicaci&oacute;n y Coordinaci&oacute;n entre agentes, indique la respuesta no correcta:";
 choices[59]= new Array();
 choices[59][0] = "En el sistema de pizarra existe una estructura de datos global, la pizarra que es gestionada y arbitrada por todos los agentes";
 choices[59][1] = "En la red de contratos en cada tarea existen dos roles diferentes: el del contratista, que es responsable de la gesti&oacute;n de una tarea y el del oferente, que se encarga de la ejecuci&oacute;n real de la tarea.";
 choices[59][2] = "KQML  es un  lenguaje de comunicaci&oacute;n entre agentes software.";
 choices[59][3] = "Ninguna de las anteriores es correcta";
 answers[59] = choices[59][0];
 units[59] = "63";
 comments[59] = "Id Pregunta: 5678. ";


//  Id pregunta: 5767 AÃ±o de creación de pregunta: 2009-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de los siguientes es un m&eacute;todo de ordenaci&oacute;n de alternativas basado en permutaciones?";
 choices[60]= new Array();
 choices[60][0] = "TOPSIS";
 choices[60][1] = "PROMETHEE";
 choices[60][2] = "ELECTRE";
 choices[60][3] = "QUALIFLEX";
 answers[60] = choices[60][3];
 units[60] = "34";
 comments[60] = "Id Pregunta: 5767. ";


//  Id pregunta: 5864 AÃ±o de creación de pregunta: 2009-01-01
 questions[61]= "62)  Indique la respuesta INCORRECTA:";
 choices[61]= new Array();
 choices[61][0] = "Las herramientas PILAR soportan el an&aacute;lisis y la gesti&oacute;n de riesgos de un sistema de informaci&oacute;n siguiendo la metodolog&iacute;a Magerit.";
 choices[61][1] = "El acr&oacute;nimo PILAR significa: Procedimiento Integral L&oacute;gico para el An&aacute;lisis de Riesgos";
 choices[61][2] = "Las herramientas PILAR disponen de una biblioteca est&aacute;ndar de prop&oacute;sito general";
 choices[61][3] = "Las herramientas PILAR son capaces de realizar calificaciones de seguridad respecto a ISO/IEC 27002:2005 - C&oacute;digo de buenas pr&aacute;cticas para la Gesti&oacute;n de la Seguridad de la Informaci&oacute;n -";
 answers[61] = choices[61][1];
 units[61] = "33";
 comments[61] = "Id Pregunta: 5864. MAP 2008 A1";


//  Id pregunta: 5869 AÃ±o de creación de pregunta: 2009-01-01
 questions[62]= "63)  Las p&aacute;ginas de internet de las administraciones p&uacute;blicas o con financiaci&oacute;n p&uacute;blica existentes a la entrada en vigor del RD 1494/2007 por el que se aprueba el Reglamento sobre las condiciones b&aacute;sicas para el acceso de las personas con discapacidad a las tecnolog&iacute;as de la informaci&oacute;n, deben adaptarse a la norma:";
 choices[62]= new Array();
 choices[62][0] = "Tres meses desde la entrada en vigor del RD.";
 choices[62][1] = "Seis meses desde la entrada en vigor del RD.";
 choices[62][2] = "El d&iacute;a de entrada en vigor del RD.";
 choices[62][3] = "Antes del 31 de diciembre de 2008";
 answers[62] = choices[62][1];
 units[62] = "39";
 comments[62] = "Id Pregunta: 5869. MAP 2008 A1";


//  Id pregunta: 5924 AÃ±o de creación de pregunta: 2009-01-01
 questions[63]= "64)  De acuerdo con la Metodolog&iacute;a M&eacute;trica Versi&oacute;n 3, indique el concepto que NO es necesario tener en cuenta en el c&aacute;lculo del &quot;Retorno de la Inversi&oacute;n&quot;:";
 choices[63]= new Array();
 choices[63][0] = "Beneficio Neto Anual";
 choices[63][1] = "Inversi&oacute;n Promedio";
 choices[63][2] = "Coste desarrollo anualizado";
 choices[63][3] = "Periodo de Amortizaci&oacute;n";
 answers[63] = choices[63][3];
 units[63] = "86";
 comments[63] = "Id Pregunta: 5924. MAP 2008 A1";


//  Id pregunta: 5950 AÃ±o de creación de pregunta: 2009-01-01
 questions[64]= "65)  &iquest;Qu&eacute; es un sistema IDM (Identity Manager)?";
 choices[64]= new Array();
 choices[64][0] = "Es una plataforma que permite gestionar desde un s&oacute;lo punto el ciclo de vida de una identidad";
 choices[64][1] = "Es cualquier sistema de gesti&oacute;n de usuarios.";
 choices[64][2] = "Es una plataforma de gesti&oacute;n de PKI para proporcionar tarjetas de identificaci&oacute;n a los empleados de la organizaci&oacute;n.";
 choices[64][3] = "Es una plataforma que impide la descentralizaci&oacute;n de la administraci&oacute;n de los sistemas de control de acceso basados en roles.";
 answers[64] = choices[64][0];
 units[64] = "118";
 comments[64] = "Id Pregunta: 5950. ";


//  Id pregunta: 6285 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de un Plan de Sistemas?";
 choices[65]= new Array();
 choices[65][0] = "Planificar y controlar con eficacia el proceso de mecanizaci&oacute;n";
 choices[65][1] = "Conocer con cierta aproximaci&oacute;n y de forma anticipada las inversiones, los costes de funcionamiento, los resultados esperados, etc";
 choices[65][2] = "Definir los requerimientos t&eacute;cnicos necesarios y suficientes";
 choices[65][3] = "Todos lo son";
 answers[65] = choices[65][3];
 units[65] = "77";
 comments[65] = "Id Pregunta: 6285. ";


//  Id pregunta: 6537 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  La gesti&oacute;n de recursos, de acuerdo a ISO 9004, se apoya en:";
 choices[66]= new Array();
 choices[66][0] = "El ciclo de vida";
 choices[66][1] = "Gesti&oacute;n de la seguridad";
 choices[66][2] = "An&aacute;lisis de la viabilidad";
 choices[66][3] = "Infraestructura";
 answers[66] = choices[66][3];
 units[66] = "92";
 comments[66] = "Id Pregunta: 6537. NULL";


//  Id pregunta: 7263 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes no es una tecnolog&iacute;a xSDL?";
 choices[67]= new Array();
 choices[67][0] = "HDSL";
 choices[67][1] = "VDSL";
 choices[67][2] = "ADSL";
 choices[67][3] = "EDSL";
 answers[67] = choices[67][3];
 units[67] = "107";
 comments[67] = "Id Pregunta: 7263. Examen TIC B 2009";


//  Id pregunta: 7886 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)   &iquest;Cu&aacute;l es la Forma Normal (FN) m&aacute;s avanzada en la que se encuentra la relaci&oacute;n R({A,B,C,D}, {A--&gt;B, B--&gt;C, C--&gt;D})?";
 choices[68]= new Array();
 choices[68][0] = " Primera FN.";
 choices[68][1] = " Segunda FN.";
 choices[68][2] = " Tercera FN.";
 choices[68][3] = " FNBC (Forma Normal de Boyce-Codd).";
 answers[68] = choices[68][1];
 units[68] = "NULL";
 comments[68] = "Id Pregunta: 7886. Map 2006";


//  Id pregunta: 7897 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)   &iquest;Cu&aacute;l de las siguientes afirmaciones relativas al lenguaje XHTML (eXtensible Hypertext Markup Language) NO es cierta?";
 choices[69]= new Array();
 choices[69][0] = " Todos los elementos deben tener etiquetas de cierre y &eacute;stas deben estar correctamente anidadas.";
 choices[69][1] = " Todos los documentos XHTML deben usar min&uacute;sculas para los elementos y nombres de atributo HTML.";
 choices[69][2] = " Todos los valores de los atributos deben expresarse utilizando comillas excepto los valores num&eacute;ricos, en cuyo caso pueden omitirse.";
 choices[69][3] = " Los documentos XHTML pueden usar aplicaciones de tipo Script o Applet basadas en HTML-DOM (Document Object Model) o en XML-DOM.";
 answers[69] = choices[69][2];
 units[69] = "NULL";
 comments[69] = "Id Pregunta: 7897. Map 2006";


//  Id pregunta: 7948 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)   &iquest;Cu&aacute;l de los siguientes NO es un diagrama UML (Unified Modeling Language)?";
 choices[70]= new Array();
 choices[70][0] = " Diagrama de actividades.";
 choices[70][1] = " Diagrama de clases.";
 choices[70][2] = " Diagrama de secuencia.";
 choices[70][3] = " Diagrama de frecuencia.";
 answers[70] = choices[70][3];
 units[70] = "NULL";
 comments[70] = "Id Pregunta: 7948. Map 2006";


//  Id pregunta: 8076 AÃ±o de creación de pregunta: 2010-01-01
 questions[71]= "72)   &iquest;Cu&aacute;l de las siguientes afirmaciones es FALSA , en relaci&oacute;n con la implantaci&oacute;n del modelo EFQM en una organizaci&oacute;n de las Administraciones P&uacute;blicas?";
 choices[71]= new Array();
 choices[71][0] = " Se utiliza, en general, para la autoevaluaci&oacute;n de la organizaci&oacute;n y la puesta en marcha de planes de mejora.";
 choices[71][1] = " Es una norma est&aacute;ndar desarrollada por la Comisi&oacute;n Europea.";
 choices[71][2] = " Se compone de nueve criterios reunidos en dos grandes grupos: los criterios Agentes Facilitadores y los criterios Resultados.";
 choices[71][3] = " La l&oacute;gica REDER se encuentra en el centro del modelo.";
 answers[71] = choices[71][1];
 units[71] = "NULL";
 comments[71] = "Id Pregunta: 8076. Map 2008";


//  Id pregunta: 8095 AÃ±o de creación de pregunta: 2010-01-01
 questions[72]= "73)   Se&ntilde;ale la respuesta correcta sobre la firma digital:";
 choices[72]= new Array();
 choices[72][0] = " Ofrece plenas garant&iacute;as de la integridad, confidencialidad y no repudio del documento firmado.";
 choices[72][1] = " Se puede conseguir mediante protocolos de cifrado de clave secreta.";
 choices[72][2] = " El DSS (Digital Signature Standard) est&aacute; adoptado como una norma por ISO/IEC.";
 choices[72][3] = " La firma ciega (Blind Signature) se obtiene firmando directamente el correspondiente mensaje, en vez del resumen de &eacute;ste.";
 answers[72] = choices[72][1];
 units[72] = "NULL";
 comments[72] = "Id Pregunta: 8095. Map 2008";


//  Id pregunta: 8248 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  Indique la afirmaci&oacute;n FALSA. De acuerdo a la ley 30/2007, el sistema de determinaci&oacute;n del precio de los contratos para el desarrollo de programas inform&aacute;ticos:";
 choices[73]= new Array();
 choices[73][0] = "Puede ser a tanto alzado.";
 choices[73][1] = "Puede resultar de la aplicaci&oacute;n de honorarios por tarifas.";
 choices[73][2] = "Se debe establecer en el Pliego de Prescripciones T&eacute;cnicas.";
 choices[73][3] = "Puede resultar de la combinaci&oacute;n de varias modalidades de c&aacute;lculo.";
 answers[73] = choices[73][2];
 units[73] = "36,37";
 comments[73] = "Id Pregunta: 8248. Examen TIC A1 2010";


//  Id pregunta: 8293 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  Entre las diferencias en los protocolos IPv4 e IPv6 NO se encuentra que:";
 choices[74]= new Array();
 choices[74][0] = "La implementaci&oacute;n del multicast es obligatoria en IPv6 y opcional en IPv4.";
 choices[74][1] = "MTU m&iacute;nimo de IPv6 es de 1280 bytes frente a los 576 bytes de IPv4.";
 choices[74][2] = "El encabezado de IPv6 sin opciones es menor que el encabezado de IPv4 sin opciones.";
 choices[74][3] = "El soporte para IPsec es obligatorio en IPv6 y opcional en IPv4.";
 answers[74] = choices[74][2];
 units[74] = "100";
 comments[74] = "Id Pregunta: 8293. Examen TIC A2 2010";


//  Id pregunta: 8294 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  Un socket necesita, para estar correctamente definido, especificar el protocolo de nivel de: ";
 choices[75]= new Array();
 choices[75][0] = "Enlace.";
 choices[75][1] = "Red.";
 choices[75][2] = "Transporte.";
 choices[75][3] = "Aplicaci&oacute;n.";
 answers[75] = choices[75][2];
 units[75] = "111";
 comments[75] = "Id Pregunta: 8294. Examen TIC A2 2010";


//  Id pregunta: 8889 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l de los siguientes no es un ASE?";
 choices[76]= new Array();
 choices[76][0] = "ACSE";
 choices[76][1] = "MCSE";
 choices[76][2] = "RTSE";
 choices[76][3] = "ROSE";
 answers[76] = choices[76][1];
 units[76] = "100";
 comments[76] = "Id Pregunta: 8889. ";


//  Id pregunta: 9289 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l es la norma de creaci&oacute;n de AENOR?";
 choices[77]= new Array();
 choices[77][0] = "El RD 2200/1995.";
 choices[77][1] = "El RD 757/1986.";
 choices[77][2] = "La Ley 5/1985.";
 choices[77][3] = "Ninguna, pues no es un organismo p&uacute;blico. ";
 answers[77] = choices[77][3];
 units[77] = "42";
 comments[77] = "Id Pregunta: 9289. ";


//  Id pregunta: 9336 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  &iquest;Qu&eacute; conjunto de normas estandarizan los sistemas de cableado en clases?";
 choices[78]= new Array();
 choices[78][0] = "EIA/TIA 586";
 choices[78][1] = "SO/EIS DIS 11108";
 choices[78][2] = "EIA/TIA 568";
 choices[78][3] = "ISO/EIS DIS 11801";
 answers[78] = choices[78][3];
 units[78] = "99";
 comments[78] = "Id Pregunta: 9336. TIC a2 AGE 2011";


//  Id pregunta: 9405 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  QSIG es";
 choices[79]= new Array();
 choices[79][0] = "Un protocolo de se&ntilde;alizaci&oacute;n normalizado a nivel internacional para su uso entre Private Automatic Branch eXchanges (PABX).";
 choices[79][1] = "Un sistema de calidad aplicado a la telefon&iacute;a SIP.";
 choices[79][2] = "Una extensi&oacute;n a SS7 que puede enviarse sobre IP.";
 choices[79][3] = "Ninguna de las anteriores";
 answers[79] = choices[79][0];
 units[79] = "109";
 comments[79] = "Id Pregunta: 9405. T&eacute;cnico Teleco Ayto Madrid 2010";


//  Id pregunta: 9540 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  La publicaci&oacute;n del BOE en su sede electr&oacute;nica:";
 choices[80]= new Array();
 choices[80][0] = "No tiene car&aacute;cter de oficial y aut&eacute;ntica, constituyendo lo publicado una mera manifestaci&oacute;n de servicio p&uacute;blico, ya que lo que tiene valor de oficial y aut&eacute;ntica es su edici&oacute;n impresa.";
 choices[80][1] = "Tendr&aacute; car&aacute;cter de oficial y aut&eacute;ntica, al igual que la publicaci&oacute;n del resto de diarios oficiales de las CC.AA, a partir del 1 de enero de 2013.";
 choices[80][2] = "Tiene car&aacute;cter de oficial y aut&eacute;ntica, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil y en las restantes normas aplicables.";
 choices[80][3] = "Tiene car&aacute;cter de oficial y aut&eacute;ntica desde el d&iacute;a 1 de enero de 2011, excepto el contenido de la Secci&oacute;n de Anuncios, que se rige por su normativa espec&iacute;fica.";
 answers[80] = choices[80][2];
 units[80] = "30";
 comments[80] = "Id Pregunta: 9540. Examen TIC A1 2011 (Ley 11/2007, art&iacute;culo 11.2)";


//  Id pregunta: 9756 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  &iquest;En qu&eacute; actividad de M&eacute;trica v3 se formaliza el Plan de Mantenimiento?";
 choices[81]= new Array();
 choices[81][0] = "IAS.3 Incorporaci&oacute;n del sistema al entorno de operaci&oacute;n";
 choices[81][1] = "IAS.7 Preparaci&oacute;n del Mantenimiento del sistema";
 choices[81][2] = "IAS.8 Establecimiento del acuerdo de nivel de servicio";
 choices[81][3] = "DSI.11 Establecimiento de requisitos de implantaci&oacute;n";
 answers[81] = choices[81][1];
 units[81] = "86";
 comments[81] = "Id Pregunta: 9756. IAS.7.2 Formalizaci&oacute;n del Plan de Mantenimiento";


//  Id pregunta: 9936 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  Se&ntilde;ale la respuesta INCORRECTA sobre patrones de dise&ntilde;o orientado a objetos.";
 choices[82]= new Array();
 choices[82][0] = "Facilitan el aprendizaje de las nuevas generaciones de dise&ntilde;adores condensando conocimiento ya existente.";
 choices[82][1] = "Imponen ciertas alternativas de dise&ntilde;o frente a otras.";
 choices[82][2] = "Permiten la creatividad inherente al proceso de dise&ntilde;o.";
 choices[82][3] = "Estandarizan el modo en que se realiza el dise&ntilde;o.";
 answers[82] = choices[82][1];
 units[82] = "84";
 comments[82] = "Id Pregunta: 9936. TIC A1, Examen 2013";


//  Id pregunta: 10047 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Con respecto al campo Data Link Connection Identifier (DLCI) de Frame Relay se&ntilde;ale la respuesta correcta:";
 choices[83]= new Array();
 choices[83][0] = "Debe ser &uacute;nico en toda la red.";
 choices[83][1] = "Tiene una longitud total de 10 bits por defecto.";
 choices[83][2] = "Controla los mecanismos de notificaci&oacute;n de congesti&oacute;n.";
 choices[83][3] = "Los valores 0 a 128 del mismo est&aacute;n reservados para funciones especiales.";
 answers[83] = choices[83][1];
 units[83] = "109";
 comments[83] = "Id Pregunta: 10047. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10108 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Las siglas CSMA/CD significan:";
 choices[84]= new Array();
 choices[84][0] = "Carrier Sense Multiple Access with Collision Detection";
 choices[84][1] = "Carrier Sense Multiple Access with Common Data";
 choices[84][2] = "Carrier Sense Multiple Access without Collision Data";
 choices[84][3] = "Clear Sense Multiple Access with Collision Detection";
 answers[84] = choices[84][0];
 units[84] = "101";
 comments[84] = "Id Pregunta: 10108. ";


//  Id pregunta: 10155 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Seg&uacute;n el ENS cu&aacute;l de las siguientes afirmaciones es incorrecta";
 choices[85]= new Array();
 choices[85][0] = "Si la dimensi&oacute;n de confidencialidad de un sistema se considera de categor&iacute;a alta la informaci&oacute;n se cifrar&aacute; tanto durante su almacenamiento como durante su transmisi&oacute;n. S&oacute;lo estar&aacute; en claro mientras se est&aacute; haciendo uso de ella. ";
 choices[85][1] = "Si un sistema es de categor&iacute;a b&aacute;sica es necesario realizar un an&aacute;lisis de riesgos informal.";
 choices[85][2] = "Si la dimensi&oacute;n de confidencialidad de un sistema se considera de categor&iacute;a alta se emplear&aacute;n, preferentemente, dispositivos hw en el establecimiento y utilizaci&oacute;n de la VPN.";
 choices[85][3] = "Para aquellos sistemas cuya dimensi&oacute;n de trazabilidad sea media es necesario llevar un registro de la actividad de los usuarios y protecci&oacute;n de los registros de actividad. ";
 answers[85] = choices[85][3];
 units[85] = "43";
 comments[85] = "Id Pregunta: 10155. ";


//  Id pregunta: 10197 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Indique la afirmaci&oacute;n correcta con respecto a la tecnolog&iacute;a bluetooth 4.0";
 choices[86]= new Array();
 choices[86][0] = "Comercialmente se le ha dado el nombre de Zigbee";
 choices[86][1] = "Supera en velocidad a la versi&oacute;n 2.0 de bluetooth";
 choices[86][2] = "Est&aacute; pensado para transmitir pocos paquetes usando poca energ&iacute;a";
 choices[86][3] = "El alcance supera los 100 metros";
 answers[86] = choices[86][2];
 units[86] = "107";
 comments[86] = "Id Pregunta: 10197. NULL";


//  Id pregunta: 10557 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Cual es la &uacute;ltima versi&oacute;n de COBIT";
 choices[87]= new Array();
 choices[87][0] = "v4";
 choices[87][1] = "V4.1";
 choices[87][2] = "v5";
 choices[87][3] = "v6";
 answers[87] = choices[87][2];
 units[87] = "31, 32, 33";
 comments[87] = "Id Pregunta: 10557. Isaca lanz&oacute; el 10 de abril del 2012 COBIT 5";


//  Id pregunta: 10721 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Seg&uacute;n la NTI de Gesti&oacute;n de Pol&iacute;tica de gesti&oacute;n de documentos electr&oacute;nicos. &iquest;Qu&eacute; no es necesario que incluya la pol&iacute;tica de gesti&oacute;n de documentos electr&oacute;nicos?";
 choices[88]= new Array();
 choices[88][0] = "Definici&oacute;n del alcance y &aacute;mbito de aplicaci&oacute;n.";
 choices[88][1] = "Actuaciones de supervisi&oacute;n y auditor&iacute;a de los procesos de gesti&oacute;n de documentos.";
 choices[88][2] = "Los medios tecnol&oacute;gicos necesarios para la gesti&oacute;n de los documentos electr&oacute;nicos.";
 choices[88][3] = "Roles de los actores involucrados.";
 answers[88] = choices[88][2];
 units[88] = "43";
 comments[88] = "Id Pregunta: 10721. ";


//  Id pregunta: 11123 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l de las siguientes no es una norma t&eacute;cnica de interoperabilidad?";
 choices[89]= new Array();
 choices[89][0] = "Cat&aacute;logo de est&aacute;ndares";
 choices[89][1] = "Modelo de datos para el intercambio de expedientes y documentos electr&oacute;nicos";
 choices[89][2] = "Procedimiento de copiado aut&eacute;ntico y conversi&oacute;n entre documentos electr&oacute;nicos";
 choices[89][3] = "Reutilizaci&oacute;n de recursos de informaci&oacute;n";
 answers[89] = choices[89][1];
 units[89] = "43";
 comments[89] = "Id Pregunta: 11123. ";


//  Id pregunta: 11157 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l de los siguientes niveles de los Diagramas de Flujo de Datos no es correcto?";
 choices[90]= new Array();
 choices[90][0] = "Nivel 0: Diagrama de Contexto";
 choices[90][1] = "Nivel 1: Diagrama de Subsistemas";
 choices[90][2] = "Nivel 3: Diagrama de Funciones de los Sistemas";
 choices[90][3] = "Nivel 4: Diagrama de Procesos";
 answers[90] = choices[90][2];
 units[90] = "81";
 comments[90] = "Id Pregunta: 11157. ";


//  Id pregunta: 11321 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Cu&aacute;l de los siguientes conceptos no est&aacute; relacionada con la web sem&aacute;ntica";
 choices[91]= new Array();
 choices[91][0] = "SPARQL";
 choices[91][1] = "OWL";
 choices[91][2] = "DCAT";
 choices[91][3] = "XSN";
 answers[91] = choices[91][3];
 units[91] = "120";
 comments[91] = "Id Pregunta: 11321. ";


//  Id pregunta: 11323 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Qu&eacute; tipo de registro se corresponde DNS, se corresponde con esta definici&oacute;n: &quot;Este registro se usa en IPv6 para traducirnombres de hosts a direcciones IPv6.&quot;";
 choices[92]= new Array();
 choices[92][0] = "Tipo A";
 choices[92][1] = "Tipo AAAA";
 choices[92][2] = "Tipo CNAME";
 choices[92][3] = "Tipo NS";
 answers[92] = choices[92][1];
 units[92] = "113";
 comments[92] = "Id Pregunta: 11323. ";


//  Id pregunta: 11425 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Seg&uacute;n la Ley 9/2014, la determinaci&oacute;n, el control y la inspecci&oacute;n de los niveles &uacute;nicos de emisi&oacute;n radioel&eacute;ctrica corresponden:";
 choices[93]= new Array();
 choices[93][0] = "Al MINETUR.";
 choices[93][1] = "A la CNMC.";
 choices[93][2] = "Al Gobierno.";
 choices[93][3] = "Ninguno de los anteriores.";
 answers[93] = choices[93][2];
 units[93] = "110";
 comments[93] = "Id Pregunta: 11425. ";


//  Id pregunta: 11547 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de las siguientes acciones NO es necesaria para implantar en una organizaci&oacute;n la Calidad Total?";
 choices[94]= new Array();
 choices[94][0] = "Lograr el compromiso de todos los niveles de direcci&oacute;n.";
 choices[94][1] = "Adoptar el Modelo CMMI.";
 choices[94][2] = "Formar en las t&eacute;cnicas y herramientas de la Calidad";
 choices[94][3] = "Son necesarias todas las acciones anteriores.";
 answers[94] = choices[94][1];
 units[94] = "87";
 comments[94] = "Id Pregunta: 11547. NULL";


//  Id pregunta: 11625 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  RSS son las siglas de:";
 choices[95]= new Array();
 choices[95][0] = "Really Simple Sindication";
 choices[95][1] = "Rich Simple Summary";
 choices[95][2] = "RDF Simple Summary";
 choices[95][3] = "Todas las anteriores son correctas";
 answers[95] = choices[95][0];
 units[95] = "69";
 comments[95] = "Id Pregunta: 11625. ";


//  Id pregunta: 11659 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  En UMTS, la banda ascendente FDD usa el rango de frecuencias:";
 choices[96]= new Array();
 choices[96][0] = "1920 MHz a 1980 MHz";
 choices[96][1] = "1980 MHz a 2010 MHz";
 choices[96][2] = "2110 MHz a 2170 MHz";
 choices[96][3] = "2170 MHz a 2200 MHz";
 answers[96] = choices[96][0];
 units[96] = "108";
 comments[96] = "Id Pregunta: 11659. ";


//  Id pregunta: 11665 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Las dimensiones can&oacute;nicas de la seguridad son:";
 choices[97]= new Array();
 choices[97][0] = "Disponibilidad, confidencialidad y trazabilidad";
 choices[97][1] = "Confidencialidad, autenticidad y disponibilidad";
 choices[97][2] = "Integridad, trazabilidad y autenticidad";
 choices[97][3] = "Confidencialidad, integridad y disponibilidad";
 answers[97] = choices[97][3];
 units[97] = "111";
 comments[97] = "Id Pregunta: 11665. ";


//  Id pregunta: 11686 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Al conectar un PC a un switch se debe usar;";
 choices[98]= new Array();
 choices[98][0] = "Straight-through cable";
 choices[98][1] = "Consola";
 choices[98][2] = "Crossover cable";
 choices[98][3] = "RJ 11";
 answers[98] = choices[98][0];
 units[98] = "99";
 comments[98] = "Id Pregunta: 11686. NULL";


//  Id pregunta: 11779 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Seg&uacute;n la Orden PRE/2971/2007 sobre la expedici&oacute;n de facturas por medios electr&oacute;nicos cuando el destinatario de las mismas sea la AGE y sus OO.PP dependientes, se&ntilde;ale la verdadera:";
 choices[99]= new Array();
 choices[99][0] = "La factura electr&oacute;nica solo podr&aacute; estar en formato XAdES, ETSI TS 101 903. ";
 choices[99][1] = "La factura deber&aacute; estar en formato XAdES (ETSI TS 101 903) o PAdES (ETSI TS 102 778).";
 choices[99][2] = "Se atribuye al Subsecretario del Ministerio de Hacienda y Administraciones P&uacute;blicas, la facultad de modificar el formato de factura y de firma electr&oacute;nica.";
 choices[99][3] = "Ninguna de las anteriores es correcta";
 answers[99] = choices[99][0];
 units[99] = "44";
 comments[99] = "Id Pregunta: 11779. ";


