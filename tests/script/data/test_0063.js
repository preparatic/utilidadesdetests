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

//  Id pregunta: 10222 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[0]= new Array();
 choices[0][0] = "Dos Cap&iacute;tulos.";
 choices[0][1] = "Tres Cap&iacute;tulos.";
 choices[0][2] = "Un Cap&iacute;tulo.";
 choices[0][3] = "Cuatro Cap&iacute;tulos.";
 answers[0] = choices[0][1];
 units[0] = "1";
 comments[0] = "Id Pregunta: 10222. CONSTITUCION1978";


//  Id pregunta: 10164 Año de creación de pregunta: 2016
 questions[1]= "2)  En el contexto del Mercado &Uacute;nico Digital, &iquest;qu&eacute; significa la eliminaci&oacute;n del geobloqueo?";
 choices[1]= new Array();
 choices[1][0] = "Introducir medidas destinadas a mejorar la transparencia en materia de precios y la vigilancia regulatoria del mercado transfronterizo de paqueter&iacute;a";
 choices[1][1] = "Eliminar la denegaci&oacute;n de acceso a sitios internet basados en otro pa&iacute;s de la UE o que se cobren precios distintos en funci&oacute;n de la localizaci&oacute;n de un cliente";
 choices[1][2] = "Promover medidas para permitir a los vendedores de bienes f&iacute;sicos beneficiarse del registro y pago electr&oacute;nicos &uacute;nicos y de la introducci&oacute;n de un umbral com&uacute;n del IVA que ayude a las nuevas empresas innovadoras a trabajar en l&iacute;nea";
 choices[1][3] = "Presentar una iniciativa europea sobre computaci&oacute;n en nube, incluidos los servicios de certificaci&oacute;n de la nube";
 answers[1] = choices[1][1];
 units[1] = "19";
 comments[1] = "Id Pregunta: 10164. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/ A: &quot;mejora de la paqueter&iacute;a transfronteriza&quot;; C: &quot;Reducci&oacute;n de la burocracia relacionada con el IVA&quot;; D: &quot;Construir una econom&iacute;a de los datos&quot;";


//  Id pregunta: 10494 Año de creación de pregunta: 2016
 questions[2]= "3)  Seg&uacute;n la Ley General Presupuestaria, con car&aacute;cter excepcional podr&aacute;n generar cr&eacute;dito en el Presupuesto del ejercicio los ingresos realizados:";
 choices[2]= new Array();
 choices[2][0] = "Por reembolso de pr&eacute;stamos.";
 choices[2][1] = "Por la venta de bienes.";
 choices[2][2] = "En el &uacute;ltimo trimestre del ejercicio anterior.";
 choices[2][3] = "Por prestaci&oacute;n de servicios.";
 answers[2] = choices[2][2];
 units[2] = "10";
 comments[2] = "Id Pregunta: 10494. PRESUPUESTOS GENERALES";


//  Id pregunta: 10657 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Qu&eacute; es el machine learning?";
 choices[3]= new Array();
 choices[3][0] = "El uso de los datos para el desarrollo de mecanismos de predicci&oacute;n y aprendizaje";
 choices[3][1] = "l uso de datos para la automatizaci&oacute;n de tareas repetitivas";
 choices[3][2] = "El aprendizaje de mecanismos de monitorizaci&oacute;n y alertas";
 choices[3][3] = "Un paradigma en el desarrollo de mecanismos de control ";
 answers[3] = choices[3][0];
 units[3] = "73";
 comments[3] = "Id Pregunta: 10657. ";


//  Id pregunta: 10611 Año de creación de pregunta: 2016
 questions[4]= "5)  Una de las caracter&iacute;sticas de seguridad en SQL Server 2008 es el cifrado transparente de datos. Se&ntilde;ala la afirmaci&oacute;n correcta:";
 choices[4]= new Array();
 choices[4][0] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de registro.";
 choices[4][1] = "SQL Server ofrece la capacidad de buscar dentro de los datos cifrados.";
 choices[4][2] = "Para trabajar con datos cifrados utilizando esta caracter&iacute;stica hay que introducir cambios en las aplicaciones.";
 choices[4][3] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de datos.";
 answers[4] = choices[4][1];
 units[4] = "63";
 comments[4] = "Id Pregunta: 10611. Junta de Extremadura A1 2015";


//  Id pregunta: 10556 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Qu&eacute; es el geo-bloqueo, contra el que pretende ser soluci&oacute;n la estrategia para el Mercado &Uacute;nico Digital en Europa?";
 choices[5]= new Array();
 choices[5][0] = "Es la discriminaci&oacute;n en la b&uacute;squeda de un empleo seg&uacute;n el pa&iacute;s de origen del trabajador";
 choices[5][1] = "Es la imposibilidad de pasar la aduana para paquetes comprados en tiendas online de ciertos pa&iacute;ses";
 choices[5][2] = "Es la pr&aacute;ctica por la cual los vendedores online deniegan a los consumidores el acceso a su p&aacute;gina web en funci&oacute;n de su localizaci&oacute;n o le ofrecen precios distintos";
 choices[5][3] = "Es la pr&aacute;ctica comercial por la que varias tiendas online ofrecen el mismo producto a precios pre-acordados entre ellas, limitando la competencia";
 answers[5] = choices[5][2];
 units[5] = "17";
 comments[5] = "Id Pregunta: 10556. Mercado &Uacute;nico Digital";


//  Id pregunta: 10113 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes instituciones NO proporciona estad&iacute;sticas oficiales propias sobre el mercado de trabajo en Espa&ntilde;a?";
 choices[6]= new Array();
 choices[6][0] = "La Seguridad Social";
 choices[6][1] = "El Instituto Nacional de Estad&iacute;stica";
 choices[6][2] = "El Servicio de Empleo P&uacute;blico Estatal";
 choices[6][3] = "El Banco de Espa&ntilde;a";
 answers[6] = choices[6][3];
 units[6] = "15";
 comments[6] = "Id Pregunta: 10113. ";


//  Id pregunta: 10568 Año de creación de pregunta: 2016
 questions[7]= "8)  El sector Turismo en Espa&ntilde;a, representa:";
 choices[7]= new Array();
 choices[7][0] = "Alrededor de un 26% del PIB";
 choices[7][1] = "Alrededor de un 11% del PIB";
 choices[7][2] = "Alrededor de un 34% del PIB";
 choices[7][3] = "Alrededor de un 7% del PIB";
 answers[7] = choices[7][1];
 units[7] = "12";
 comments[7] = "Id Pregunta: 10568. Modelo econ&oacute;mico";


//  Id pregunta: 10343 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Cu&aacute;l es el n&uacute;mero m&iacute;nimo de parlamentarios de cinco Estados miembros para constituir un grupo pol&iacute;tico?:";
 choices[8]= new Array();
 choices[8][0] = "23";
 choices[8][1] = "20";
 choices[8][2] = "14";
 choices[8][3] = "18";
 answers[8] = choices[8][1];
 units[8] = "5";
 comments[8] = "Id Pregunta: 10343. UNION EUROPEA";


//  Id pregunta: 10574 Año de creación de pregunta: 2016
 questions[9]= "10)  Son herramientas espec&iacute;ficas de control de versiones de software:";
 choices[9]= new Array();
 choices[9][0] = "Mercurial, Git y Apache Subversion.";
 choices[9][1] = "Gimp, Mercurial y Git.";
 choices[9][2] = "RedMine, Planner y OpenProj.";
 choices[9][3] = "Cassandra, Git y REDIS.";
 answers[9] = choices[9][0];
 units[9] = "92";
 comments[9] = "Id Pregunta: 10574. Tema 92. TAI 2016.";


//  Id pregunta: 10134 Año de creación de pregunta: 2016
 questions[10]= "11)  La Ley 2/2015, de desindexaci&oacute;n de la econom&iacute;a espa&ntilde;ola, parte de un compromiso del Gobierno en el marco:";
 choices[10]= new Array();
 choices[10][0] = "Del Programa Nacional de Reformas 2015 y 2016.";
 choices[10][1] = "Del Plan de Transformaci&oacute;n Digital 2015-2020.";
 choices[10][2] = "Del Programa Nacional de Reformas 2013 y 2014.";
 choices[10][3] = "Del Pacto Fiscal Europeo de 2012.";
 answers[10] = choices[10][2];
 units[10] = "12";
 comments[10] = "Id Pregunta: 10134. Leyes modelo econ&oacute;mico";


//  Id pregunta: 10634 Año de creación de pregunta: 2016
 questions[11]= "12)  En un modelo entidad/relaci&oacute;n, un tipo de interrelaci&oacute;n se caracteriza por:";
 choices[11]= new Array();
 choices[11][0] = "El nombre y el tipo de correspondencia.";
 choices[11][1] = "El nombre, el grado y el tipo de correspondencia.";
 choices[11][2] = "El nombre, el nivel y el tipo de correspondencia.";
 choices[11][3] = "El nombre y el grado.";
 answers[11] = choices[11][1];
 units[11] = "85";
 comments[11] = "Id Pregunta: 10634. Junta de Extremadura A1 2015";


//  Id pregunta: 10048 Año de creación de pregunta: 2016
 questions[12]= "13)  El Reglamento (UE) 910/2014 del Parlamento Europeo y del Consejo relativo a la identificaci&oacute;n electr&oacute;nica y los servicios de confianza para las transacciones electr&oacute;nicas en el mercado interior establece:";
 choices[12]= new Array();
 choices[12][0] = "La norma reguladora de los certificados de sede electr&oacute;nica en la Uni&oacute;n Europea.";
 choices[12][1] = "Cinco a&ntilde;os como el periodo m&aacute;ximo de vigencia de los certificados electr&oacute;nicos.";
 choices[12][2] = "La plena prohibici&oacute;n del uso de seud&oacute;nimos en el uso de las transacciones electr&oacute;nicas.";
 choices[12][3] = "La regulaci&oacute;n del certificado de sello electr&oacute;nico y su uso en los servicios p&uacute;blicos.";
 answers[12] = choices[12][3];
 units[12] = "77";
 comments[12] = "Id Pregunta: 10048. AGE A1 2015";


//  Id pregunta: 10623 Año de creación de pregunta: 2016
 questions[13]= "14)  En PHP 5.0, &iquest;cu&aacute;l es la regla para formar los nombres de las variables?";
 choices[13]= new Array();
 choices[13][0] = "Una variable debe comenzar con el signo $ seguido del nombre de la variable.";
 choices[13][1] = "Una variable debe comenzar con el signo &amp; seguido del nombre de la variable.";
 choices[13][2] = "Una variable debe comenzar por un car&aacute;cter num&eacute;rico.";
 choices[13][3] = "No hay regla para la formaci&oacute;n de los nombres de las variables.";
 answers[13] = choices[13][0];
 units[13] = "65";
 comments[13] = "Id Pregunta: 10623. Junta de Extremadura A1 2015";


//  Id pregunta: 10619 Año de creación de pregunta: 2016
 questions[14]= "15)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[14]= new Array();
 choices[14][0] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: la identificaci&oacute;n de clases sem&aacute;nticas, atributos y servicios; identificaci&oacute;n de las relaciones entre clases; el emplazamiento de las clases, atributos y servicios; la especificaci&oacute;n del comportamiento din&aacute;mico mediante paso de mensajes.";
 choices[14][1] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: a&ntilde;adir las clases interfaz, base y utilidad; refinar las clases sem&aacute;nticas.";
 choices[14][2] = "En el An&aacute;lisis Orientado a Objetos, deben llevarse a cabo las siguientes actividades: toma inicial de requisitos; an&aacute;lisis; dise&ntilde;o; implementaci&oacute;n.";
 choices[14][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[14] = choices[14][1];
 units[14] = "89";
 comments[14] = "Id Pregunta: 10619. Junta de Extremadura A1 2015";


//  Id pregunta: 10096 Año de creación de pregunta: 2016
 questions[15]= "16)  Indique cu&aacute;l de las siguientes soluciones tecnol&oacute;gicas NO se utiliza para virtualizaci&oacute;n:";
 choices[15]= new Array();
 choices[15][0] = "VMware ESX";
 choices[15][1] = "XenServer";
 choices[15][2] = "Alfresco";
 choices[15][3] = "Microsoft Hyper-V";
 answers[15] = choices[15][2];
 units[15] = "54";
 comments[15] = "Id Pregunta: 10096. AGE A1 2015";


//  Id pregunta: 10435 Año de creación de pregunta: 2016
 questions[16]= "17)  Sobre el servicio com&uacute;n Autentica, se&ntilde;ale la respuesta correcta:";
 choices[16]= new Array();
 choices[16][0] = "Autentica ofrece &uacute;nicamente servicios de autenticaci&oacute;n de empleados p&uacute;blicos de las AA.PP. y usuarios relacionados,";
 choices[16][1] = "Su objetivo es constituirse como el servicio com&uacute;n compartido de referencia para los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado, para sus aplicaciones internas.";
 choices[16][2] = "El servicio provee atributos de los usuarios autenticados relacionados con la unidad y el puesto de destino, incluyendo correo electr&oacute;nico y tel&eacute;fono.";
 choices[16][3] = "Ofrece funcionalidad de autorizaci&oacute;n de usuarios, &uacute;nicamente pertenecientes a la Administraci&oacute;n General del Estado.";
 answers[16] = choices[16][2];
 units[16] = "43";
 comments[16] = "Id Pregunta: 10435. SERVICIOS COMUNES";


//  Id pregunta: 10137 Año de creación de pregunta: 2016
 questions[17]= "18)  La creaci&oacute;n de la Autoridad Independiente de Responsabilidad Fiscal, dentro de la Ley Org&aacute;nica 6/2013, tiene por objeto:";
 choices[17]= new Array();
 choices[17][0] = "Garantizar el cumplimiento efectivo por las Administraciones P&uacute;blicas del principio de estabilidad presupuestaria previsto en el art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola.";
 choices[17][1] = "La evaluaci&oacute;n continua del ciclo presupuestario, del endeudamiento p&uacute;blico, y el an&aacute;lisis de las previsiones econ&oacute;micas.";
 choices[17][2] = "Ejercer sus funciones con autonom&iacute;a e independencia funcional respecto de las Administraciones P&uacute;blicas.";
 choices[17][3] = "Todos las anteriores son ciertas.";
 answers[17] = choices[17][3];
 units[17] = "12";
 comments[17] = "Id Pregunta: 10137. Leyes modelo econ&oacute;mico";


//  Id pregunta: 10399 Año de creación de pregunta: 2016
 questions[18]= "19)  Las medidas espec&iacute;ficas que adoptar&aacute;n los Poderes P&uacute;blicos a favor de las mujeres para corregir situaciones patentes de desigualdad de hecho con respecto a los hombres, se denominan:";
 choices[18]= new Array();
 choices[18][0] = "Acciones de discriminaci&oacute;n.";
 choices[18][1] = "Acciones positivas.";
 choices[18][2] = "Acciones negativas.";
 choices[18][3] = "Acciones neutras.";
 answers[18] = choices[18][1];
 units[18] = "14";
 comments[18] = "Id Pregunta: 10399. POLITICAS DE IGUALDAD";


//  Id pregunta: 10172 Año de creación de pregunta: 2016
 questions[19]= "20)  La Constituci&oacute;n Espa&ntilde;ola reconoce el derecho de reuni&oacute;n:";
 choices[19]= new Array();
 choices[19][0] = "Pac&iacute;fica y sin armas pero con necesidad de autorizaci&oacute;n previa.";
 choices[19][1] = "En lugares de tr&aacute;nsito p&uacute;blico previa autorizaci&oacute;n de la autoridad.";
 choices[19][2] = "En los casos de reuniones en lugares de tr&aacute;nsito p&uacute;blico y manifestaciones se dar&aacute; comunicaci&oacute;n previa a la autoridad.";
 choices[19][3] = "No es preciso realizar ninguna actuaci&oacute;n.";
 answers[19] = choices[19][2];
 units[19] = "1";
 comments[19] = "Id Pregunta: 10172. CONSTITUCION1978";


//  Id pregunta: 10210 Año de creación de pregunta: 2016
 questions[20]= "21)  De acuerdo con la Constituci&oacute;n espa&ntilde;ola, la declaraci&oacute;n del estado de excepci&oacute;n corresponde a:";
 choices[20]= new Array();
 choices[20][0] = "El rey, a propuesta del Gobierno.";
 choices[20][1] = "El Gobierno, mediante Decreto acordado en Consejo de Ministros, previa autorizaci&oacute;n del Congreso de los Diputados.";
 choices[20][2] = "El Congreso de los Diputados, a propuesta del Consejo de Ministros.";
 choices[20][3] = "Las Cortes Generales, por mayor&iacute;a de los miembros de cada C&aacute;mara.";
 answers[20] = choices[20][1];
 units[20] = "1";
 comments[20] = "Id Pregunta: 10210. CONSTITUCION1978";


//  Id pregunta: 10525 Año de creación de pregunta: 2016
 questions[21]= "22)  Cuando la condici&oacute;n de interesado derivase de alguna relaci&oacute;n jur&iacute;dica transmisible el derecho-habiente suceder&aacute; en tal condici&oacute;n:";
 choices[21]= new Array();
 choices[21][0] = "si el procedimiento no ha alcanzado la fase de instrucci&oacute;n";
 choices[21][1] = "si el procedimiento no ha alcanzado el tr&aacute;mite de audiencia";
 choices[21][2] = "si el procedimiento no ha alcanzado el tr&aacute;mite de informaci&oacute;n p&uacute;blica";
 choices[21][3] = "cualquiera que sea el estado del procedimiento";
 answers[21] = choices[21][3];
 units[21] = "7";
 comments[21] = "Id Pregunta: 10525. LEY 39/2015";


//  Id pregunta: 10068 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Cu&aacute;l de las siguientes opciones se refiere al conjunto de metodolog&iacute;as, procesos, arquitecturas y tecnolog&iacute;as que permiten reunir, depurar y transformar datos de los sistemas transaccionales e informaci&oacute;n desestructurada en informaci&oacute;n estructurada, para su explotaci&oacute;n directa o para su an&aacute;lisis y conversi&oacute;n en conocimiento, dando as&iacute; soporte a la toma de decisiones sobre el negocio?";
 choices[22]= new Array();
 choices[22][0] = "Data Mining (miner&iacute;a de datos)";
 choices[22][1] = "Business Intelligence (inteligencia de negocio)";
 choices[22][2] = "Data Warehouse (almac&eacute;n de datos)";
 choices[22][3] = "An&aacute;lisis OLTP (procesamiento en l&iacute;nea transaccional)";
 answers[22] = choices[22][1];
 units[22] = "72";
 comments[22] = "Id Pregunta: 10068. AGE A1 2015";


//  Id pregunta: 10097 Año de creación de pregunta: 2016
 questions[23]= "24)  Indique la opci&oacute;n correcta respecto al Portal de Transparencia del Gobierno de Espa&ntilde;a:";
 choices[23]= new Array();
 choices[23][0] = "Incluye informaci&oacute;n acerca de las Entidades Locales.";
 choices[23][1] = "La solicitud de informaci&oacute;n disponible, amparada por el derecho de acceso presente en la Ley 19/2013, no precisa identificaci&oacute;n.";
 choices[23][2] = "No incluye informaci&oacute;n acerca de &oacute;rganos Constitucionales.";
 choices[23][3] = "El Portal es gestionado por el Consejo de Transparencia y Buen Gobierno.";
 answers[23] = choices[23][2];
 units[23] = "22";
 comments[23] = "Id Pregunta: 10097. AGE A1 2015";


//  Id pregunta: 10393 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[24]= new Array();
 choices[24][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[24][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[24][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[24][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[24] = choices[24][0];
 units[24] = "14";
 comments[24] = "Id Pregunta: 10393. POLITICAS DE IGUALDAD";


//  Id pregunta: 10042 Año de creación de pregunta: 2016
 questions[25]= "26)  En relaci&oacute;n con BPEL, &iquest;cu&aacute;l de las siguientes afirmaciones es incorrecta?";
 choices[25]= new Array();
 choices[25][0] = "Es un lenguaje basado en XML para la definici&oacute;n y ejecuci&oacute;n de procesos de negocio utilizando Servicios Web.";
 choices[25][1] = "Es un lenguaje de orquestaci&oacute;n estandarizado por OASIS.";
 choices[25][2] = "BPEL proporciona manejadores (handlers) que permiten tratar situaciones excepcionales o inesperadas.";
 choices[25][3] = "En BPEL se utiliza WS-CDL en lugar de WSDL.";
 answers[25] = choices[25][3];
 units[25] = "86";
 comments[25] = "Id Pregunta: 10042. AGE A1 2015";


//  Id pregunta: 10309 Año de creación de pregunta: 2016
 questions[26]= "27)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a los Cuestores:";
 choices[26]= new Array();
 choices[26][0] = "Son miembros de la Mesa del Parlamento Europeo con voz pero sin voto.";
 choices[26][1] = "No son miembros de la Mesa del Parlamento Europeo.";
 choices[26][2] = "Son miembros de la Mesa del Parlamento Europeo con voz y voto.";
 choices[26][3] = "Los Cuestores forman parte de la Mesa del Parlamento Europeo en un n&uacute;mero igual a tres.";
 answers[26] = choices[26][0];
 units[26] = "5";
 comments[26] = "Id Pregunta: 10309. UNION EUROPEA";


//  Id pregunta: 10060 Año de creación de pregunta: 2016
 questions[27]= "28)  El modelo de capacidad de procesos establecido por COBIT v5:";
 choices[27]= new Array();
 choices[27][0] = "No modifica esencialmente el modelo planteado por COBIT v4.1.";
 choices[27][1] = "Define 5 niveles de procesos (proceso incompleto, ejecutado, gestionado, predecible, optimizado).";
 choices[27][2] = "El nivel 1 (proceso ejecutado) s&oacute;lo se alcanza si el proceso alcanza su prop&oacute;sito.";
 choices[27][3] = "Un proceso es optimizado si se ejecuta dentro de los l&iacute;mites definidos para alcanzar sus resultados de proceso.";
 answers[27] = choices[27][2];
 units[27] = "101";
 comments[27] = "Id Pregunta: 10060. AGE A1 2015";


//  Id pregunta: 10493 Año de creación de pregunta: 2016
 questions[28]= "29)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, inspeccionar la actividad de las oficinas de contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una competencia de:";
 choices[28]= new Array();
 choices[28][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[28][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[28][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[28][3] = "La Intervenci&oacute;n General de la Seguridad Social.";
 answers[28] = choices[28][2];
 units[28] = "10";
 comments[28] = "Id Pregunta: 10493. PRESUPUESTOS GENERALES";


//  Id pregunta: 10664 Año de creación de pregunta: 2016
 questions[29]= "30)  De acuerdo a la Ley 39/2015, el formato del expediente administrativo ser&aacute;:";
 choices[29]= new Array();
 choices[29][0] = "Siempre en formato electr&oacute;nico.";
 choices[29][1] = "Siempre en formato papel.";
 choices[29][2] = "Las personas f&iacute;sicas podr&aacute;n elegir en todo momento el formato del expediente administrativo.";
 choices[29][3] = "La ley no regula el formato del expediente.";
 answers[29] = choices[29][0];
 units[29] = "7";
 comments[29] = "Id Pregunta: 10664. Art&iacute;culo 70 de la Ley 39/2015";


//  Id pregunta: 10235 Año de creación de pregunta: 2016
 questions[30]= "31)  El Art&iacute;culo 108 de la Constituci&oacute;n Espa&ntilde;ola establece que el Gobierno responde solidariamente de su gesti&oacute;n pol&iacute;tica ante:";
 choices[30]= new Array();
 choices[30][0] = "El Jefe del Estado.";
 choices[30][1] = "El Tribunal Constitucional.";
 choices[30][2] = "El Congreso de los Diputados.";
 choices[30][3] = "Las Cortes Generales.";
 answers[30] = choices[30][0];
 units[30] = "1";
 comments[30] = "Id Pregunta: 10235. CONSTITUCION1978";


//  Id pregunta: 10298 Año de creación de pregunta: 2016
 questions[31]= "32)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al Consejo de la Uni&oacute;n Europea:";
 choices[31]= new Array();
 choices[31][0] = "Estar&aacute; asistido por dos Secretar&iacute;as Generales.";
 choices[31][1] = "Estar&aacute; asistido por una Secretar&iacute;a General, dirigida por un Secretario General.";
 choices[31][2] = "Estar&aacute; asistido por un alto representante de Pol&iacute;tica Interior y Exterior.";
 choices[31][3] = "Estar&aacute; asistido por el Consejo de Europa.";
 answers[31] = choices[31][1];
 units[31] = "5";
 comments[31] = "Id Pregunta: 10298. UNION EUROPEA";


//  Id pregunta: 10464 Año de creación de pregunta: 2016
 questions[32]= "33)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, &iquest;existe la posibilidad de comprometer gastos para ejercicios futuros?";
 choices[32]= new Array();
 choices[32][0] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio futuro y 50% para los dem&aacute;s.";
 choices[32][1] = "No, los cr&eacute;ditos presupuestarios se agotan con el fin del ejercicio presupuestario.";
 choices[32][2] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio posterior; 60% para el segundo y 50% para tercero y cuarto.";
 choices[32][3] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 60% para el primer ejercicio futuro; 50% para el segundo y tercero y 40% para el cuarto.";
 answers[32] = choices[32][2];
 units[32] = "10";
 comments[32] = "Id Pregunta: 10464. PRESUPUESTOS GENERALES";


//  Id pregunta: 10567 Año de creación de pregunta: 2016
 questions[33]= "34)  El sector que tiene un mayor peso en el PIB espa&ntilde;ol es el:";
 choices[33]= new Array();
 choices[33][0] = "Primario, que incluye la agricultura y la pesca";
 choices[33][1] = "Secundario, compuesto por los sectores industrial, de la energ&iacute;a y de la construcci&oacute;n";
 choices[33][2] = "Minero, junto con las exportaciones de comercio";
 choices[33][3] = "Servicios";
 answers[33] = choices[33][3];
 units[33] = "12";
 comments[33] = "Id Pregunta: 10567. Modelo econ&oacute;mico";


//  Id pregunta: 10363 Año de creación de pregunta: 2016
 questions[34]= "35)  Los Reglamentos no se caracterizan por:";
 choices[34]= new Array();
 choices[34][0] = "No poseer alcance general.";
 choices[34][1] = "Ser obligatorios.";
 choices[34][2] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[34][3] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 answers[34] = choices[34][0];
 units[34] = "5";
 comments[34] = "Id Pregunta: 10363. UNION EUROPEA";


//  Id pregunta: 10598 Año de creación de pregunta: 2016
 questions[35]= "36)  Entre la documentaci&oacute;n de la Seguridad de la Organizaci&oacute;n nos podremos encontrar:";
 choices[35]= new Array();
 choices[35][0] = "La Pol&iacute;tica de Seguridad Corporativa ser&aacute; elaborada por el Responsable de Seguridad Corporativa y aprobada por el Comit&eacute; de Seguridad Corporativa y por la Alta Direcci&oacute;n.";
 choices[35][1] = "La Pol&iacute;tica de Seguridad de las TIC que debe estar alineada en todo momento con el Mantenimiento de los Sistemas de Informaci&oacute;n.";
 choices[35][2] = "El Documento de Seguridad que ha de estar presente en toda documentaci&oacute;n de la seguridad de la informaci&oacute;n.";
 choices[35][3] = "Todas las respuestas anteriores son correctas.";
 answers[35] = choices[35][0];
 units[35] = "45";
 comments[35] = "Id Pregunta: 10598. Junta de Extremadura A1 2015";


//  Id pregunta: 10626 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Cu&aacute;l es el &oacute;rgano encargado de las funciones de instrucci&oacute;n de expedientes dentro de la Comisi&oacute;n Nacional de los Mercados y la Competencia en materia de comunicaciones electr&oacute;nicas?";
 choices[36]= new Array();
 choices[36][0] = "La Direcci&oacute;n de Telecomunicaciones y del Sector Audiovisual.";
 choices[36][1] = "La Direcci&oacute;n de la Competencia.";
 choices[36][2] = "La Direcci&oacute;n de la Energ&iacute;a.";
 choices[36][3] = "La Direcci&oacute;n de Transportes y del Sector Postal.";
 answers[36] = choices[36][0];
 units[36] = "121";
 comments[36] = "Id Pregunta: 10626. Junta de Extremadura A1 2015";


//  Id pregunta: 10549 Año de creación de pregunta: 2016
 questions[37]= "38)  El presidente del pleno de la Comisi&oacute;n de Estrategia TIC es :";
 choices[37]= new Array();
 choices[37][0] = "El Ministro de Energ&iacute;a, Turismo y Agenda Digital";
 choices[37][1] = "El Ministro de Hacienda y Administraciones P&uacute;blicas";
 choices[37][2] = "El Presidente del Gobierno";
 choices[37][3] = "El Secretario General de Administraci&oacute;n Digital";
 answers[37] = choices[37][1];
 units[37] = "26";
 comments[37] = "Id Pregunta: 10549. Gobernanza TIC";


//  Id pregunta: 10276 Año de creación de pregunta: 2016
 questions[38]= "39)  Se&ntilde;ale la respuesta falsa";
 choices[38]= new Array();
 choices[38][0] = "El Portal de la Transparencia del Gobierno de Espa&ntilde;a es una subsede de la sede electr&oacute;nica central del Ministerio de la Presidencia.";
 choices[38][1] = "La titularidad de esta subsede corresponde a la Oficina de la Transparencia y Acceso a la Informaci&oacute;n (OTAI), dependiente de la Oficina para la Ejecuci&oacute;n de la Reforma de la Administraci&oacute;n P&uacute;blica (OPERA).";
 choices[38][2] = "La gesti&oacute;n de la plataforma tecnol&oacute;gica es competencia de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones (DTIC), en virtud del Acuerdo de Colaboraci&oacute;n firmado por el Ministerio de la Presidencia y el Ministerio de Hacienda y Administraciones P&uacute;blicas, para el desarrollo del Portal de la Transparencia.";
 choices[38][3] = "La DTIC ser&aacute; responsable de la integridad y disponibilidad de la informaci&oacute;n, que se provea al Portal de la Transparencia a trav&eacute;s de enlaces o v&iacute;nculos a otras p&aacute;ginas o sedes electr&oacute;nicas cuya responsabilidad corresponda a distinto &oacute;rgano o Administraci&oacute;n P&uacute;blica.";
 answers[38] = choices[38][3];
 units[38] = "22";
 comments[38] = "Id Pregunta: 10276. LEY DE TRANSPARENCIA";


//  Id pregunta: 10146 Año de creación de pregunta: 2016
 questions[39]= "40)  La declaraci&oacute;n de lesividad de los actos anulables:";
 choices[39]= new Array();
 choices[39][0] = "No podr&aacute; adoptarse una vez transcurridos cuatro a&ntilde;os desde que se dict&oacute; el acto administrativo";
 choices[39][1] = "No es necesaria para impugnar ante el orden jurisdiccional contencioso-administrativo los actos favorables para los interesados";
 choices[39][2] = "Se adoptar&aacute; en todo caso por el Consejo de Estado";
 choices[39][3] = "Si el acto proviniera de las entidades que integran la Administraci&oacute;n Local, la declaraci&oacute;n de lesividad se adoptar&aacute; por la Comunidad Aut&oacute;noma a la que pertenece dicha entidad";
 answers[39] = choices[39][0];
 units[39] = "8";
 comments[39] = "Id Pregunta: 10146. Ley 39/2015, Art&iacute;culo 107";


//  Id pregunta: 10300 Año de creación de pregunta: 2016
 questions[40]= "41)  La designaci&oacute;n para formar parte del Tribunal de Cuentas la efect&uacute;a:";
 choices[40]= new Array();
 choices[40][0] = "La Comisi&oacute;n.";
 choices[40][1] = "El Consejo de Europa.";
 choices[40][2] = "El Consejo Europeo.";
 choices[40][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[40] = choices[40][3];
 units[40] = "5";
 comments[40] = "Id Pregunta: 10300. UNION EUROPEA";


//  Id pregunta: 10319 Año de creación de pregunta: 2016
 questions[41]= "42)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[41]= new Array();
 choices[41][0] = "El Presidente de la Comisi&oacute;n, con la aprobaci&oacute;n de la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[41][1] = "La Comisi&oacute;n por mayor&iacute;a de dos tercios de sus miembros puede exigir la dimisi&oacute;n de un Comisario.";
 choices[41][2] = "El Presidente, sin necesidad de contar con la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[41][3] = "&Uacute;nicamente el Presidente del Consejo puede exigir la dimisi&oacute;n de un Comisario.";
 answers[41] = choices[41][0];
 units[41] = "5";
 comments[41] = "Id Pregunta: 10319. UNION EUROPEA";


//  Id pregunta: 10373 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Cu&aacute;ntos Abogados Generales asisten al Tribunal Superior de Justicia?:";
 choices[42]= new Array();
 choices[42][0] = "Nueve.";
 choices[42][1] = "Diez.";
 choices[42][2] = "Siete.";
 choices[42][3] = "Ocho.";
 answers[42] = choices[42][3];
 units[42] = "5";
 comments[42] = "Id Pregunta: 10373. UNION EUROPEA";


//  Id pregunta: 10184 Año de creación de pregunta: 2016
 questions[43]= "44)  El T&iacute;tulo IV de la Constituci&oacute;n Espa&ntilde;ola de 1978 dispone que el Gobierno:";
 choices[43]= new Array();
 choices[43][0] = "Se compone del Presidente, los Vicepresidentes y los Secretarios de Estado.";
 choices[43][1] = "Ejerce la funci&oacute;n ejecutiva y la legislativa de acuerdo con la Constituci&oacute;n y las leyes.";
 choices[43][2] = "Cesa tras la celebraci&oacute;n de elecciones generales, en los casos de p&eacute;rdida de confianza parlamentaria, o por dimisi&oacute;n o fallecimiento de su Presidente.";
 choices[43][3] = "El presidente y los dem&aacute;s miembros del Gobierno son nombrados por el Rey a propuesta del Presidente del Congreso.";
 answers[43] = choices[43][2];
 units[43] = "1";
 comments[43] = "Id Pregunta: 10184. CONSTITUCION1978";


//  Id pregunta: 10212 Año de creación de pregunta: 2016
 questions[44]= "45)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con la regulaci&oacute;n constitucional de la composici&oacute;n del Senado:";
 choices[44]= new Array();
 choices[44][0] = "La poblaci&oacute;n de Melilla elegir&aacute; dos Senadores.";
 choices[44][1] = "En cada provincia se elegir&aacute;n tres senadores.";
 choices[44][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas elegir&aacute;n un senador cuando su poblaci&oacute;n supere el mill&oacute;n de habitantes.";
 choices[44][3] = "El Senado se compone de 350 senadores.";
 answers[44] = choices[44][0];
 units[44] = "1";
 comments[44] = "Id Pregunta: 10212. CONSTITUCION1978";


//  Id pregunta: 10289 Año de creación de pregunta: 2016
 questions[45]= "46)  La duraci&oacute;n del mandato del Defensor del Pueblo Europeo es de:";
 choices[45]= new Array();
 choices[45][0] = "Tres a&ntilde;os.";
 choices[45][1] = "Dos a&ntilde;os y medio.";
 choices[45][2] = "Cinco a&ntilde;os.";
 choices[45][3] = "Seis a&ntilde;os.";
 answers[45] = choices[45][2];
 units[45] = "5";
 comments[45] = "Id Pregunta: 10289. UNION EUROPEA";


//  Id pregunta: 10565 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Qu&eacute; limites marca el &quot;pacto fiscal europeo&quot; de 2012 para sus Estados Miembros?";
 choices[46]= new Array();
 choices[46][0] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 40% del PIB";
 choices[46][1] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 choices[46][2] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 50% del PIB";
 choices[46][3] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 answers[46] = choices[46][3];
 units[46] = "12";
 comments[46] = "Id Pregunta: 10565. Modelo econ&oacute;mico";


//  Id pregunta: 10175 Año de creación de pregunta: 2016
 questions[47]= "48)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola en su Art&iacute;culo 159, los miembros del Tribunal Constitucional ser&aacute;n designados por un per&iacute;odo de:";
 choices[47]= new Array();
 choices[47][0] = "seis a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[47][1] = "nueve a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[47][2] = "ocho a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 choices[47][3] = "cuatro a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 answers[47] = choices[47][1];
 units[47] = "1";
 comments[47] = "Id Pregunta: 10175. CONSTITUCION1978";


//  Id pregunta: 10317 Año de creación de pregunta: 2016
 questions[48]= "49)  Habr&aacute; qu&oacute;rum en el Parlamento Europeo, cuando se encuentre reunida en el sal&oacute;n de sesiones:";
 choices[48]= new Array();
 choices[48][0] = "La cuarta parte de los Diputados que integran el Parlamento.";
 choices[48][1] = "La quinta parte de los Diputados que integran el Parlamento.";
 choices[48][2] = "La mitad de los Diputados que integran el Parlamento.";
 choices[48][3] = "La tercera parte de los Diputados que integran el Parlamento.";
 answers[48] = choices[48][3];
 units[48] = "5";
 comments[48] = "Id Pregunta: 10317. UNION EUROPEA";


//  Id pregunta: 10273 Año de creación de pregunta: 2016
 questions[49]= "50)  Se&ntilde;ale la opci&oacute;n correcta";
 choices[49]= new Array();
 choices[49][0] = "Jenkins un servidor de integraci&oacute;n continua comercial.";
 choices[49][1] = "Extiende su funcionalidad a trav&eacute;s de plugins.";
 choices[49][2] = "Solamente soporta herramientas de control de versiones como CVS, Gity Clearcase.";
 choices[49][3] = "No posee un historial de cambios realizados por build o versi&oacute;n.";
 answers[49] = choices[49][1];
 units[49] = "92";
 comments[49] = "Id Pregunta: 10273. INTEGRACION CONTINUA";


//  Id pregunta: 10384 Año de creación de pregunta: 2016
 questions[50]= "51)  De conformidad con lo establecido en la Org&aacute;nica 3/2007 para la igualdad efectiva entre mujeres y hombres, los &oacute;rganos de contrataci&oacute;n podr&aacute;n establecer en los pliegos de cl&aacute;usulas administrativas particulares la preferencia, en igualdad de condiciones jur&iacute;dicas y econ&oacute;micas, en la adjudicaci&oacute;n de los contratos de las proposiciones presentadas por aquellas empresas que:";
 choices[50]= new Array();
 choices[50][0] = "Sean dirigidas por mujeres";
 choices[50][1] = "Cuenten con un colectivo paritario de trabajadores y trabajadoras";
 choices[50][2] = "Incluyan en su proposici&oacute;n para ejecutar el contrato medidas para promover la igualdad efectiva entre mujeres y hombres";
 choices[50][3] = "Fomenten el acceso de las mujeres a puestos directivos.";
 answers[50] = choices[50][2];
 units[50] = "14";
 comments[50] = "Id Pregunta: 10384. POLITICAS DE IGUALDAD";


//  Id pregunta: 10352 Año de creación de pregunta: 2016
 questions[51]= "52)  La Comisi&oacute;n est&aacute; compuesta por:";
 choices[51]= new Array();
 choices[51][0] = "27 miembros, nacionales de los Estados comunitarios.";
 choices[51][1] = "20 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 choices[51][2] = "25 miembros, nacionales de los Estados comunitarios.";
 choices[51][3] = "d)22 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 answers[51] = choices[51][0];
 units[51] = "5";
 comments[51] = "Id Pregunta: 10352. UNION EUROPEA";


//  Id pregunta: 10025 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Mediante qu&eacute; tipo de objetos se implementa el acceso a los recursos gestionados con la tecnolog&iacute;a JMX?";
 choices[52]= new Array();
 choices[52][0] = "SessionBean";
 choices[52][1] = "JavaBean";
 choices[52][2] = "MBeans";
 choices[52][3] = "MessageDrivenBean";
 answers[52] = choices[52][2];
 units[52] = "64";
 comments[52] = "Id Pregunta: 10025. AGE A1 2015";


//  Id pregunta: 10370 Año de creación de pregunta: 2016
 questions[53]= "54)  Establecer la interpretaci&oacute;n adecuada de los Tratados de la Uni&oacute;n Europea y las normas de derecho derivado es el objeto de:";
 choices[53]= new Array();
 choices[53][0] = "Un recurso de incumplimiento.";
 choices[53][1] = "Recurso de carencia.";
 choices[53][2] = "Cuesti&oacute;n o incidente prejudicial.";
 choices[53][3] = "Ninguna es correcta.";
 answers[53] = choices[53][2];
 units[53] = "5";
 comments[53] = "Id Pregunta: 10370. UNION EUROPEA";


//  Id pregunta: 10045 Año de creación de pregunta: 2016
 questions[54]= "55)  46. &iquest;Cu&aacute;l de las siguientes NO es una de las APIs incorporadas a HTML5?";
 choices[54]= new Array();
 choices[54][0] = "HTML Drag and Drop, para arrastrar un objeto a otra localizaci&oacute;n.";
 choices[54][1] = "HTML Advanced Search, para parametrizar y modificar el comportamiento de los buscadores.";
 choices[54][2] = "HTML Local Storage, para almacenar datos en el navegador.";
 choices[54][3] = "HTML SSE, para actualizar una p&aacute;gina web autom&aacute;ticamente sin preguntar al servidor.";
 answers[54] = choices[54][1];
 units[54] = "74";
 comments[54] = "Id Pregunta: 10045. AGE A1 2015";


//  Id pregunta: 10545 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Cu&aacute;l es la nueva denominaci&oacute;n para la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n tras la aprobaci&oacute;n del Real Decreto 424/2016, de 11 de noviembre, por el que se establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales?";
 choices[55]= new Array();
 choices[55][0] = "Subsecretar&iacute;a de Energ&iacute;a, Turismo y Agenda Digital";
 choices[55][1] = "Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[55][2] = "Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[55][3] = "Secretar&iacute;a de Estado de Administraci&oacute;n Digital";
 answers[55] = choices[55][1];
 units[55] = "26";
 comments[55] = "Id Pregunta: 10545. Gobernanza TIC";


//  Id pregunta: 10503 Año de creación de pregunta: 2016
 questions[56]= "57)  Respecto a la Ley Org&aacute;nica 2/2012 se&ntilde;ale la respuesta falsa:";
 choices[56]= new Array();
 choices[56][0] = "La elaboraci&oacute;n, aprobaci&oacute;n y ejecuci&oacute;n de los Presupuestos y dem&aacute;s actuaciones que afecten a los gastos o ingresos de las Administraciones P&uacute;blicas y dem&aacute;s entidades que forman parte del sector p&uacute;blico se someter&aacute; al principio de estabilidad presupuestaria.";
 choices[56][1] = "Ninguna Administraci&oacute;n P&uacute;blica podr&aacute; incurrir en d&eacute;ficit estructural, definido como d&eacute;ficit ajustado del ciclo, neto de medidas excepcionales y temporales.";
 choices[56][2] = "Excepcionalmente, el Estado y las Comunidades Aut&oacute;nomas podr&aacute;n incurrir en d&eacute;ficit estructural en caso de cat&aacute;strofes naturales, recesi&oacute;n econ&oacute;mica grave o situaciones de emergencia extraordinaria que escapen al control de las Administraciones P&uacute;blicas y perjudiquen considerablemente su situaci&oacute;n financiera o su sostenibilidad econ&oacute;mica o social.";
 choices[56][3] = "Las Corporaciones Locales deber&aacute;n mantener una posici&oacute;n de equilibrio presupuestario.";
 answers[56] = choices[56][3];
 units[56] = "10";
 comments[56] = "Id Pregunta: 10503. PRESUPUESTOS GENERALES";


//  Id pregunta: 10031 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Qu&eacute; es MongoDB?";
 choices[57]= new Array();
 choices[57][0] = "Una herramienta Object Relational Mapping (ORM) para facilitar el desarrollo.";
 choices[57][1] = "Una base de datos de c&oacute;digo abierto de documentos tipo JSON.";
 choices[57][2] = "Un sistema gestor de base de datos relacional.";
 choices[57][3] = "Una base de datos jer&aacute;rquica de relaciones encadenadas.";
 answers[57] = choices[57][1];
 units[57] = "73";
 comments[57] = "Id Pregunta: 10031. AGE A1 2015";


//  Id pregunta: 10165 Año de creación de pregunta: 2016
 questions[58]= "59)  Como parte del Plan de acci&oacute;n sobre administraci&oacute;n electr&oacute;nica para 2010-2020, la Comisi&oacute;n:";
 choices[58]= new Array();
 choices[58][0] = "Tratar&aacute; de interconectar los registros mercantiles en toda la UE.";
 choices[58][1] = "Se adoptar&aacute;n nuevas normas en materia de telecomunicaciones";
 choices[58][2] = "Se revisar&aacute; la Directiva de servicios de comunicaci&oacute;n audiovisual existente para adaptarse a la evoluci&oacute;n tecnol&oacute;gica";
 choices[58][3] = "Se actualizar&aacute;n las normas de comercio electr&oacute;nico";
 answers[58] = choices[58][0];
 units[58] = "19";
 comments[58] = "Id Pregunta: 10165. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/";


//  Id pregunta: 10051 Año de creación de pregunta: 2016
 questions[59]= "60)  De acuerdo con el Real Decreto 1720/2007 indique qu&eacute; medida ha de ser aplicada obligatoriamente a los ficheros de los que sean responsables las Administraciones tributarias en el ejercicio de sus potestades tributarias:";
 choices[59]= new Array();
 choices[59][0] = "Cifrado de las comunicaciones";
 choices[59][1] = "Al menos, una auditor&iacute;a bienal (cada 2 a&ntilde;os)";
 choices[59][2] = "Registro de los accesos";
 choices[59][3] = "No queda regulado en dicho Real Decreto al depender de la criticidad del fichero.";
 answers[59] = choices[59][1];
 units[59] = "35";
 comments[59] = "Id Pregunta: 10051. AGE A1 2015. Pregunta anulada en el examen real, ya que la opci&oacute;n B dec&iacute;a &quot;bianual&quot; en lugar de &quot;bienal&quot;";


//  Id pregunta: 10416 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Qu&eacute; art&iacute;culo de la LO 3/2007, regula la igualdad en el &aacute;mbito de la educaci&oacute;n superior:";
 choices[60]= new Array();
 choices[60][0] = "Art. 25 LO, 3/2007.";
 choices[60][1] = "Art. 23 LO, 3/2007.";
 choices[60][2] = "Art. 14 LO, 3/2007.";
 choices[60][3] = "Ninguna es correcta, es el art. 13.";
 answers[60] = choices[60][0];
 units[60] = "14";
 comments[60] = "Id Pregunta: 10416. POLITICAS DE IGUALDAD";


//  Id pregunta: 10047 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es propia de OCSP?";
 choices[61]= new Array();
 choices[61][0] = "Es un m&eacute;todo de validaci&oacute;n del estado de un certificado electr&oacute;nico que emplea suplementariamente la descarga y consulta de CRLs.";
 choices[61][1] = "Permite la consulta off-line del estado de revocaci&oacute;n de un certificado proporcionado por una autoridad de certificaci&oacute;n.";
 choices[61][2] = "No permite implementar mecanismos de tarificaci&oacute;n.";
 choices[61][3] = "Permite verificar el estado de los certificados mediante la consulta a una autoridad de validaci&oacute;n.";
 answers[61] = choices[61][3];
 units[61] = "78";
 comments[61] = "Id Pregunta: 10047. AGE A1 2015";


//  Id pregunta: 10369 Año de creación de pregunta: 2016
 questions[62]= "63)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[62]= new Array();
 choices[62][0] = "Son actos individuales no normativos.";
 choices[62][1] = "Poseen alcance general.";
 choices[62][2] = "Son actos normativos.";
 choices[62][3] = "No son obligatorias.";
 answers[62] = choices[62][0];
 units[62] = "5";
 comments[62] = "Id Pregunta: 10369. UNION EUROPEA";


//  Id pregunta: 10054 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;A qu&eacute; tipo de ataque nos referimos cuando se suplanta la identidad de una direcci&oacute;n IP origen?";
 choices[63]= new Array();
 choices[63][0] = "DoS";
 choices[63][1] = "Phishing";
 choices[63][2] = "Sniffing";
 choices[63][3] = "Spoofing";
 answers[63] = choices[63][3];
 units[63] = "119";
 comments[63] = "Id Pregunta: 10054. AGE A1 2015";


//  Id pregunta: 10641 Año de creación de pregunta: 2016
 questions[64]= "65)  La estructura de un Directorio Activo se basa en los siguientes conceptos:";
 choices[64]= new Array();
 choices[64][0] = "Directorios, Unidades f&iacute;sicas y Usuarios.";
 choices[64][1] = "Dominio, Unidad Organizativa, Grupos y Objetos.";
 choices[64][2] = "Unidades f&iacute;sicas, Unidades l&oacute;gicas y Directorios.";
 choices[64][3] = "Ficheros, Directorios, Particiones y Unidades.";
 answers[64] = choices[64][1];
 units[64] = "58";
 comments[64] = "Id Pregunta: 10641. Junta de Extremadura A1 2015";


//  Id pregunta: 10083 Año de creación de pregunta: 2016
 questions[65]= "66)  Seg&uacute;n WCAG 2.0, &iquest;con qu&eacute; principio est&aacute; relacionada la pauta &ldquo;Hacer que las p&aacute;ginas web aparezcan y operen de forma predecible&rdquo;?";
 choices[65]= new Array();
 choices[65][0] = "Perceptible";
 choices[65][1] = "Operable";
 choices[65][2] = "Comprensible";
 choices[65][3] = "Robusto";
 answers[65] = choices[65][2];
 units[65] = "42";
 comments[65] = "Id Pregunta: 10083. AGE A1 2015";


//  Id pregunta: 10303 Año de creación de pregunta: 2016
 questions[66]= "67)  Indique el n&uacute;mero de miembros con que cuenta la Comisi&oacute;n Europea en la actualidad:";
 choices[66]= new Array();
 choices[66][0] = "Veinticinco.";
 choices[66][1] = "Veintisiete.";
 choices[66][2] = "Veintinueve.";
 choices[66][3] = "Cuarenta y uno.";
 answers[66] = choices[66][1];
 units[66] = "5";
 comments[66] = "Id Pregunta: 10303. UNION EUROPEA";


//  Id pregunta: 10198 Año de creación de pregunta: 2016
 questions[67]= "68)  La Constituci&oacute;n Espa&ntilde;ola de 1978, estructura las Cortes Generales en:";
 choices[67]= new Array();
 choices[67][0] = "Dos c&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[67][1] = "Consejo de Ministros y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[67][2] = "Gobierno de la Naci&oacute;n y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[67][3] = "Dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Baja) y Senado (C&aacute;mara Alta).";
 answers[67] = choices[67][3];
 units[67] = "1";
 comments[67] = "Id Pregunta: 10198. CONSTITUCION1978";


//  Id pregunta: 10627 Año de creación de pregunta: 2016
 questions[68]= "69)  Seg&uacute;n el Real Decreto 3/2010 sobre el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; organismo es el encargado de actuar ante cualquier agresi&oacute;n recibida en los sistemas de informaci&oacute;n de las Administraciones P&uacute;blicas?";
 choices[68]= new Array();
 choices[68][0] = "El CCN-CERT (Centro Criptol&oacute;gico Nacional&ndash;Computer Emergency Reaction Team).";
 choices[68][1] = "El GDT (Grupo de Delitos Telem&aacute;ticos).";
 choices[68][2] = "La BIT (Brigada de Investigaci&oacute;n Tecnol&oacute;gica).";
 choices[68][3] = "El CCN-STIC (Centro Criptol&oacute;gico Nacional-Seguridad de las Tecnolog&iacute;as de Informaci&oacute;n y Comunicaciones).";
 answers[68] = choices[68][0];
 units[68] = "46";
 comments[68] = "Id Pregunta: 10627. Junta de Extremadura A1 2015";


//  Id pregunta: 10331 Año de creación de pregunta: 2016
 questions[69]= "70)  Tras el tratado de Niza, &iquest;cu&aacute;ntos eurodiputados son elegidos en el Estado espa&ntilde;ol?:";
 choices[69]= new Array();
 choices[69][0] = "90";
 choices[69][1] = "50";
 choices[69][2] = "64";
 choices[69][3] = "60";
 answers[69] = choices[69][1];
 units[69] = "5";
 comments[69] = "Id Pregunta: 10331. UNION EUROPEA";


//  Id pregunta: 10632 Año de creación de pregunta: 2016
 questions[70]= "71)  El sistema operativo que se dise&ntilde;a pensando en los tipos de datos y recursos que va a manejar: ficheros, procesos, memoria, hardware, etc., y en las propiedades y servicios que &eacute;stos pueden prestar, se construye siguiendo un modelo:";
 choices[70]= new Array();
 choices[70][0] = "Monol&iacute;tico.";
 choices[70][1] = "Estratificado.";
 choices[70][2] = "Cliente/servidor.";
 choices[70][3] = "Orientado a objetos.";
 answers[70] = choices[70][3];
 units[70] = "56";
 comments[70] = "Id Pregunta: 10632. Junta de Extremadura A1 2015";


//  Id pregunta: 10133 Año de creación de pregunta: 2016
 questions[71]= "72)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, cu&aacute;l no corresponde a una de las medidas implantadas:";
 choices[71]= new Array();
 choices[71][0] = "Apoyos fiscales y en materia de Seguridad Social a los emprendedores.";
 choices[71][1] = "Medidas de conciliaci&oacute;n familiar especiales para los emprendedores.";
 choices[71][2] = "Modificaci&oacute;n de la ley concursal para facilitar los acuerdos de refinanciaci&oacute;n.";
 choices[71][3] = "Creaci&oacute;n de la figura del Emprendedor de Responsabilidad Limitada.";
 answers[71] = choices[71][1];
 units[71] = "12";
 comments[71] = "Id Pregunta: 10133. Leyes modelo econ&oacute;mico";


//  Id pregunta: 10186 Año de creación de pregunta: 2016
 questions[72]= "73)  En cuanto a las fuentes del derecho, las normas jur&iacute;dicas contenidas en los tratados internacionales:";
 choices[72]= new Array();
 choices[72][0] = "ser&aacute;n de aplicaci&oacute;n directa en Espa&ntilde;a-";
 choices[72][1] = "ser&aacute;n de aplicaci&oacute;n directa y pasar&aacute;n a formar parte del ordenamiento interno una vez ratificadas por Espa&ntilde;a.";
 choices[72][2] = "no ser&aacute;n de aplicaci&oacute;n directa en Espapa en tanto no hayan pasado a formar parte ddel ordenamiento interno mediante su publicaci&oacute;n oficial en Espa&ntilde;a.";
 choices[72][3] = "ratificados por Espala y publicadas en el BOE, no son fuente de derecho.";
 answers[72] = choices[72][2];
 units[72] = "1";
 comments[72] = "Id Pregunta: 10186. CONSTITUCION1978";


//  Id pregunta: 10286 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Cu&aacute;l no es un pilar de la Estrategia del Mercado &Uacute;nico Digital?";
 choices[73]= new Array();
 choices[73][0] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa.";
 choices[73][1] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar.";
 choices[73][2] = "Iniciativa europea de libre flujo de datos.";
 choices[73][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital.";
 answers[73] = choices[73][2];
 units[73] = "5";
 comments[73] = "Id Pregunta: 10286. UNION EUROPEA";


//  Id pregunta: 10467 Año de creación de pregunta: 2016
 questions[74]= "75)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Econom&iacute;a y Competitividad podr&aacute; autorizar a la Secretar&iacute;a General del Tesoro y Pol&iacute;tica Financiera a realizar operaciones pasivas de pr&eacute;stamo a un plazo no superior a:";
 choices[74]= new Array();
 choices[74][0] = "Tres meses.";
 choices[74][1] = "Nueve meses.";
 choices[74][2] = "Cuatro meses.";
 choices[74][3] = "Seis meses.";
 answers[74] = choices[74][0];
 units[74] = "10";
 comments[74] = "Id Pregunta: 10467. PRESUPUESTOS GENERALES";


