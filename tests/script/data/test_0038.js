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
var preguntaids = new Array();

//  Id pregunta: 492 Año de creación de pregunta: 2016
 questions[0]= "1)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la obligaci&oacute;n de pagar los intereses de la Deuda del Estado y la de devolver los capitales llamados a reembolso, contados respectivamente a partir del vencimiento de los intereses y del d&iacute;a del llamamiento a reembolso prescribir&aacute;:";
 choices[0]= new Array();
 choices[0][0] = "A los cinco a&ntilde;os.";
 choices[0][1] = "A los dos a&ntilde;os.";
 choices[0][2] = "A los tres a&ntilde;os.";
 choices[0][3] = "A los cuatro a&ntilde;os.";
 answers[0] = choices[0][0];
 units[0] = "10";
 comments[0] = "Id Pregunta: 492. PRESUPUESTOS GENERALES";
 preguntaids[0] = 492


//  Id pregunta: 202 Año de creación de pregunta: 2016
 questions[1]= "2)  Se&ntilde;ale c&oacute;mo se re&uacute;nen los miembros del Gobierno:";
 choices[1]= new Array();
 choices[1][0] = "En Consejo de Ministros y en Comisiones Delegadas del Gobierno.";
 choices[1][1] = "En Consejo de Ministros y en Consejo de Vicepresidentes.";
 choices[1][2] = "En Consejo de Ministros y en Comisiones Delegadas de las Cortes Generales.";
 choices[1][3] = "En Comisiones Delegadas del Gobierno y Consejo de Estado.";
 answers[1] = choices[1][0];
 units[1] = "1";
 comments[1] = "Id Pregunta: 202. CONSTITUCION1978";
 preguntaids[1] = 202


//  Id pregunta: 210 Año de creación de pregunta: 2016
 questions[2]= "3)  De acuerdo con la Constituci&oacute;n espa&ntilde;ola, la declaraci&oacute;n del estado de excepci&oacute;n corresponde a:";
 choices[2]= new Array();
 choices[2][0] = "El rey, a propuesta del Gobierno.";
 choices[2][1] = "El Gobierno, mediante Decreto acordado en Consejo de Ministros, previa autorizaci&oacute;n del Congreso de los Diputados.";
 choices[2][2] = "El Congreso de los Diputados, a propuesta del Consejo de Ministros.";
 choices[2][3] = "Las Cortes Generales, por mayor&iacute;a de los miembros de cada C&aacute;mara.";
 answers[2] = choices[2][1];
 units[2] = "1";
 comments[2] = "Id Pregunta: 210. CONSTITUCION1978";
 preguntaids[2] = 210


//  Id pregunta: 68 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguientes opciones se refiere al conjunto de metodolog&iacute;as, procesos, arquitecturas y tecnolog&iacute;as que permiten reunir, depurar y transformar datos de los sistemas transaccionales e informaci&oacute;n desestructurada en informaci&oacute;n estructurada, para su explotaci&oacute;n directa o para su an&aacute;lisis y conversi&oacute;n en conocimiento, dando as&iacute; soporte a la toma de decisiones sobre el negocio?";
 choices[3]= new Array();
 choices[3][0] = "Data Mining (miner&iacute;a de datos)";
 choices[3][1] = "Business Intelligence (inteligencia de negocio)";
 choices[3][2] = "Data Warehouse (almac&eacute;n de datos)";
 choices[3][3] = "An&aacute;lisis OLTP (procesamiento en l&iacute;nea transaccional)";
 answers[3] = choices[3][1];
 units[3] = "72";
 comments[3] = "Id Pregunta: 68. AGE A1 2015";
 preguntaids[3] = 68


//  Id pregunta: 591 Año de creación de pregunta: 2016
 questions[4]= "5)  Son servicios declarados compartidos:";
 choices[4]= new Array();
 choices[4][0] = "Servicio unificado de telecomunicaciones y servicio de seguridad gestionada";
 choices[4][1] = "Servicio multicanal de atenci&oacute;n al ciudadano";
 choices[4][2] = "Servicio com&uacute;n de generaci&oacute;n y validaci&oacute;n de firmas electr&oacute;nicas";
 choices[4][3] = "Todos los anteriores";
 answers[4] = choices[4][3];
 units[4] = "19";
 comments[4] = "Id Pregunta: 591. Estrategia TIC";
 preguntaids[4] = 591


//  Id pregunta: 188 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Puede el Estado transferir o delegar a las Comunidades Aut&oacute;nomas facultadas que son de su titularidad?";
 choices[5]= new Array();
 choices[5][0] = "No, en ning&uacute;n caso.";
 choices[5][1] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con cualquier tipo de facultades.";
 choices[5][2] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, sin que el Estado se pueda reservar ninguna forma de control.";
 choices[5][3] = ", mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, previendo en cada caso la correspondiente transferencia de medios financieros, as&iacute; como las formas de control que se reserve el Estado.";
 answers[5] = choices[5][3];
 units[5] = "1";
 comments[5] = "Id Pregunta: 188. CONSTITUCION1978";
 preguntaids[5] = 188


//  Id pregunta: 251 Año de creación de pregunta: 2016
 questions[6]= "7)  La Justicia, en Espa&ntilde;a, emana del/de la:";
 choices[6]= new Array();
 choices[6][0] = "Rey.";
 choices[6][1] = "&Oacute;rgano jurisdiccional que act&uacute;a en cada caso.";
 choices[6][2] = "Constituci&oacute;n.";
 choices[6][3] = "Pueblo.";
 answers[6] = choices[6][2];
 units[6] = "1";
 comments[6] = "Id Pregunta: 251. CONSTITUCION1978";
 preguntaids[6] = 251


//  Id pregunta: 448 Año de creación de pregunta: 2016
 questions[7]= "8)  Dentro de la l&oacute;gica presupuestaria, los ingresos tienen car&aacute;cter...";
 choices[7]= new Array();
 choices[7][0] = "Ejecutivo";
 choices[7][1] = "Limitativo";
 choices[7][2] = "Estimativo";
 choices[7][3] = "Progresivo";
 answers[7] = choices[7][2];
 units[7] = "10";
 comments[7] = "Id Pregunta: 448. PRESUPUESTOS GENERALES";
 preguntaids[7] = 448


//  Id pregunta: 617 Año de creación de pregunta: 2016
 questions[8]= "9)  El establecimiento de una conexi&oacute;n mediante el protocolo TCP, b&aacute;sicamente se realiza de la siguiente manera:";
 choices[8]= new Array();
 choices[8][0] = "Emisor: env&iacute;a SYN. Receptor: env&iacute;a SYN+ACK. Emisor: env&iacute;a ACK.";
 choices[8][1] = "Emisor: env&iacute;a ACK. Receptor: env&iacute;a ACK+SYN. Emisor: env&iacute;a SYN.";
 choices[8][2] = "Emisor: env&iacute;a SYN. Receptor: env&iacute;a ACK.";
 choices[8][3] = "Emisor: env&iacute;a ACK. Receptor: env&iacute;a SYN.";
 answers[8] = choices[8][0];
 units[8] = "109";
 comments[8] = "Id Pregunta: 617. Junta de Extremadura A1 2015";
 preguntaids[8] = 617


//  Id pregunta: 403 Año de creación de pregunta: 2016
 questions[9]= "10)  El plan estrat&eacute;gico de Igualdad de Oportunidades incluir&aacute;:";
 choices[9]= new Array();
 choices[9][0] = "Medidas de igualdad.";
 choices[9][1] = "Objetivos de igualdad.";
 choices[9][2] = "Ambas son correctas.";
 choices[9][3] = "A y B son incorrectas.";
 answers[9] = choices[9][2];
 units[9] = "14";
 comments[9] = "Id Pregunta: 403. POLITICAS DE IGUALDAD";
 preguntaids[9] = 403


//  Id pregunta: 124 Año de creación de pregunta: 2016
 questions[10]= "11)  Se&ntilde;ale la VERDADERA con respecto a las las reclamaciones ante el Consejo de Transparencia y Buen Gobierno:";
 choices[10]= new Array();
 choices[10][0] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de tres meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[10][1] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de seis meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[10][2] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[10][3] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; estimada";
 answers[10] = choices[10][0];
 units[10] = "22";
 comments[10] = "Id Pregunta: 124. ";
 preguntaids[10] = 124


//  Id pregunta: 586 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Con qu&eacute; frecuencia se revisa la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE, para su alineamiento con las pol&iacute;ticas p&uacute;blicas del gobierno?";
 choices[11]= new Array();
 choices[11][0] = "Bienalmente";
 choices[11][1] = "Anualmente";
 choices[11][2] = "Semestralmente";
 choices[11][3] = "Cada cuatro a&ntilde;os";
 answers[11] = choices[11][1];
 units[11] = "19";
 comments[11] = "Id Pregunta: 586. Estrategia TIC";
 preguntaids[11] = 586


//  Id pregunta: 105 Año de creación de pregunta: 2016
 questions[12]= "13)  Entre las caracter&iacute;sticas de Big Data se encuentra:";
 choices[12]= new Array();
 choices[12][0] = "Gran volumen de informaci&oacute;n";
 choices[12][1] = "Gran variedad de datos";
 choices[12][2] = "Se analizan datos a gran velocidad";
 choices[12][3] = "Todas las anteriores son verdaderas";
 answers[12] = choices[12][3];
 units[12] = "73";
 comments[12] = "Id Pregunta: 105. ";
 preguntaids[12] = 105


//  Id pregunta: 860 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Cu&aacute;l NO es un objetivo de la utilizaci&oacute;n por parte de la Administraci&oacute;n de la web 2.0?";
 choices[13]= new Array();
 choices[13][0] = "Permitir la generaci&oacute;n de comentarios acerca de la informaci&oacute;n ofrecida y recibir actualizaciones en vivo por parte de los usuarios.";
 choices[13][1] = "Promover una mayor interacci&oacute;n con las principales redes sociales.";
 choices[13][2] = "Conseguir un conocimiento abierto, en particular mediante blogs y wikis.";
 choices[13][3] = "Conseguir que el usuario se sienta escuchado.";
 answers[13] = choices[13][1];
 units[13] = "125";
 comments[13] = "Id Pregunta: 860. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[13] = 860


//  Id pregunta: 114 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Qu&eacute; es la Garant&iacute;a Juvenil?";
 choices[14]= new Array();
 choices[14][0] = "Una iniciativa europea que pretende facilitar el acceso de los j&oacute;venes al mercado de trabajo ofreci&eacute;ndoles una oferta de empleo, de educaci&oacute;n o formaci&oacute;n tras haber finalizado sus estudios o quedar desempleados";
 choices[14][1] = "Un Plan que permite la concesi&oacute;n de subvenciones a j&oacute;venes para facilitar el alquiler de su vivienda habitual.";
 choices[14][2] = "Un Plan que concede cr&eacute;ditos en condiciones ventajosas a j&oacute;venes emprendedores";
 choices[14][3] = "Una inciativa europea que facilita a los j&oacute;venes el acceso a las nuevas tecnolog&iacute;as";
 answers[14] = choices[14][0];
 units[14] = "15";
 comments[14] = "Id Pregunta: 114. ";
 preguntaids[14] = 114


//  Id pregunta: 814 Año de creación de pregunta: 2016
 questions[15]= "16)  Las Delegaciones del Gobierno est&aacute;n adscritas org&aacute;nicamente a:";
 choices[15]= new Array();
 choices[15][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[15][1] = "el Consejo de Gobierno de la Comunidad Aut&oacute;noma";
 choices[15][2] = "el Ministerio del Interior";
 choices[15][3] = "la Administraci&oacute;n General del Estado";
 answers[15] = choices[15][0];
 units[15] = "4, 7, 8, 9";
 comments[15] = "Id Pregunta: 814. Ley 40/2015";
 preguntaids[15] = 814


//  Id pregunta: 17 Año de creación de pregunta: 2016
 questions[16]= "17)  De acuerdo con el Reglamento por el que se desarrolla parcialmente la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, aprobado por Real Decreto 1671/2009, de 6 de noviembre, se&ntilde;ale la respuesta correcta:";
 choices[16]= new Array();
 choices[16][0] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de emisi&oacute;n.";
 choices[16][1] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 12 meses desde la fecha de emisi&oacute;n.";
 choices[16][2] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de notificaci&oacute;n.";
 choices[16][3] = "Los documentos electr&oacute;nicos deben conservarse por el per&iacute;odo m&iacute;nimo que determine cada &oacute;rgano administrativo de acuerdo con el procedimiento administrativo de que se trate.";
 answers[16] = choices[16][3];
 units[16] = "44";
 comments[16] = "Id Pregunta: 17. AGE A1 2015";
 preguntaids[16] = 17


//  Id pregunta: 682 Año de creación de pregunta: 2016
 questions[17]= "18)  Seg&uacute;n el Real Decreto Ley 5/2013, de 15 de marzo, de medidas para favorecer la continuidad de la vida laboral de los trabajadores de mayor edad y promover el envejecimiento activo:";
 choices[17]= new Array();
 choices[17][0] = "La cuant&iacute;a de la pensi&oacute;n de jubilaci&oacute;n compatible con el trabajo ser&aacute; equivalente al 50 por 100 del importe resultante en el reconocimiento inicial, una vez aplicado, si procede, el l&iacute;mite m&aacute;ximo de pensi&oacute;n p&uacute;blica, o del que se est&eacute; percibiendo, en el momento de inicio de la compatibilidad con el trabajo, excluido, en todo caso, el complemento por m&iacute;nimos, cualquiera que sea la jornada laboral o la actividad que realice el pensionista.";
 choices[17][1] = "El trabajo compatible debe realizarse a tiempo parcial.";
 choices[17][2] = "Finalizada la relaci&oacute;n laboral por cuenta ajena o producido el cese en la actividad por cuenta propia, se restablecer&aacute; el percibo &iacute;ntegro de la pensi&oacute;n de jubilaci&oacute;n transcurridos 12 meses de la finalizaci&oacute;n de la relaci&oacute;n laboral.";
 choices[17][3] = "El acceso a la pensi&oacute;n podr&aacute; tener lugar hasta 5 a&ntilde;os antes de la edad que en cada caso resulte de aplicaci&oacute;n.";
 answers[17] = choices[17][0];
 units[17] = "14";
 comments[17] = "Id Pregunta: 682. Pensiones";
 preguntaids[17] = 682


//  Id pregunta: 643 Año de creación de pregunta: 2016
 questions[18]= "19)  La estructura de un Directorio Activo se basa en los siguientes conceptos:";
 choices[18]= new Array();
 choices[18][0] = "Directorios, Unidades f&iacute;sicas y Usuarios.";
 choices[18][1] = "Dominio, Unidad Organizativa, Grupos y Objetos.";
 choices[18][2] = "Unidades f&iacute;sicas, Unidades l&oacute;gicas y Directorios.";
 choices[18][3] = "Ficheros, Directorios, Particiones y Unidades.";
 answers[18] = choices[18][1];
 units[18] = "58";
 comments[18] = "Id Pregunta: 643. Junta de Extremadura A1 2015";
 preguntaids[18] = 643


//  Id pregunta: 471 Año de creación de pregunta: 2016
 questions[19]= "20)  Conforme a la Ley General Presupuestaria, la clasificaci&oacute;n econ&oacute;mica agrupar&aacute; los cr&eacute;ditos por cap&iacute;tulos separando las operaciones corrientes, las de capital, las financieras y el Fondo de Contingencia de ejecuci&oacute;n presupuestaria. En los cr&eacute;ditos para operaciones de capital se incluir&aacute;n:";
 choices[19]= new Array();
 choices[19][0] = "Las inversiones financieras y las transferencias de capital.";
 choices[19][1] = "Las inversiones reales y financieras.";
 choices[19][2] = "Las transferencias de capital y las transferencias corrientes.";
 choices[19][3] = "Las transferencias de capital y las inversiones reales.";
 answers[19] = choices[19][3];
 units[19] = "10";
 comments[19] = "Id Pregunta: 471. PRESUPUESTOS GENERALES";
 preguntaids[19] = 471


//  Id pregunta: 250 Año de creación de pregunta: 2016
 questions[20]= "21)  La Constituci&oacute;n Espa&ntilde;ola propugna como valores superiores de su ordenamiento jur&iacute;dico:";
 choices[20]= new Array();
 choices[20][0] = "La Libertad, la Democracia, la Igualdad y la Justicia.";
 choices[20][1] = "La Libertad, la Justicia, la Seguridad y promover el bien de cuantos la integran.";
 choices[20][2] = "La Soberan&iacute;a, el Sufragio Universal, la Unidad de la Naci&oacute;n espa&ntilde;ola y el derecho a la autonom&iacute;a de las nacionalidades y regiones que la integran.";
 choices[20][3] = "La Justicia, el Pluralismo Pol&iacute;tico, la Igualdad, y la Libertad.";
 answers[20] = choices[20][2];
 units[20] = "1";
 comments[20] = "Id Pregunta: 250. CONSTITUCION1978";
 preguntaids[20] = 250


//  Id pregunta: 53 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Cu&aacute;l de los siguientes objetivos est&aacute; fuera del alcance de una reuni&oacute;n diaria de SCRUM (daily scrum)?";
 choices[21]= new Array();
 choices[21][0] = "Exponer las tareas no planificadas que tambi&eacute;n est&aacute;n haciendo los miembros del equipo.";
 choices[21][1] = "Resolver detalladamente los problemas que puedan tener los miembros del equipo.";
 choices[21][2] = "Poner de manifiesto el ritmo de trabajo de cada miembro del equipo.";
 choices[21][3] = "Identificar las tareas que puedan afectar a otros miembros del equipo.";
 answers[21] = choices[21][1];
 units[21] = "84";
 comments[21] = "Id Pregunta: 53. AGE A1 2015";
 preguntaids[21] = 53


//  Id pregunta: 443 Año de creación de pregunta: 2016
 questions[22]= "23)  Respecto a las comunicaciones y notificaciones electr&oacute;nicas:";
 choices[22]= new Array();
 choices[22][0] = "El servicio SIM se utiliza para el env&iacute;o de notificaciones electr&oacute;nicas.";
 choices[22][1] = "El Servicio compartido la gesti&oacute;n de notificaciones Notific@, ser&aacute; de uso obligatorio para la AGE y sus OOPP en 2017.";
 choices[22][2] = "La plataforma Notific@, recibe desde los organismos emisores, las comunicaciones y adem&aacute;s de aportar otros valores a&ntilde;adidos, las pone a disposici&oacute;n de los destinatarios en la Carpeta Ciudadana.";
 choices[22][3] = "El servicio SIM, que se ha integrado en el Servicio compartido de gesti&oacute;n de notificaciones, proporciona a los ciudadanos y empresas un buz&oacute;n seguro.";
 answers[22] = choices[22][1];
 units[22] = "43";
 comments[22] = "Id Pregunta: 443. SERVICIOS COMUNES";
 preguntaids[22] = 443


//  Id pregunta: 86 Año de creación de pregunta: 2016
 questions[23]= "24)  Un contrato menor tiene una duraci&oacute;n m&aacute;xima de:";
 choices[23]= new Array();
 choices[23][0] = "Un a&ntilde;o prorrogable";
 choices[23][1] = "Dos a&ntilde;os no prorrogables";
 choices[23][2] = "Un a&ntilde;o no prorrogable";
 choices[23][3] = "Dos a&ntilde;os prorrogables";
 answers[23] = choices[23][2];
 units[23] = "37";
 comments[23] = "Id Pregunta: 86. AGE A1 2015";
 preguntaids[23] = 86


//  Id pregunta: 398 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Qu&eacute; art&iacute;culo de la Ley Org&aacute;nica 3/2007 para la igualdad efectiva de mujeres y hombres, regula las acciones positivas?";
 choices[24]= new Array();
 choices[24][0] = "Art. 13, L.O.3/2007.";
 choices[24][1] = "Art. 14, L.O.3/2007.";
 choices[24][2] = "Art. 11, L.O.3/2007.";
 choices[24][3] = "Ninguna es correcta.";
 answers[24] = choices[24][2];
 units[24] = "14";
 comments[24] = "Id Pregunta: 398. POLITICAS DE IGUALDAD";
 preguntaids[24] = 398


//  Id pregunta: 450 Año de creación de pregunta: 2016
 questions[25]= "26)  La partida presupuestaria es equivalente a...";
 choices[25]= new Array();
 choices[25][0] = "El sujeto que realiza el gasto";
 choices[25][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[25][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[25][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[25] = choices[25][3];
 units[25] = "10";
 comments[25] = "Id Pregunta: 450. PRESUPUESTOS GENERALES";
 preguntaids[25] = 450


//  Id pregunta: 796 Año de creación de pregunta: 2016
 questions[26]= "27)  Los estatutos de los Organismos p&uacute;blicos determinar&aacute;n sus respectivos:";
 choices[26]= new Array();
 choices[26][0] = "&oacute;rganos superiores";
 choices[26][1] = "&oacute;rganos directivos";
 choices[26][2] = "&oacute;rganos superiores y directivos";
 choices[26][3] = "ninguna es correcta";
 answers[26] = choices[26][1];
 units[26] = "4, 7, 8, 9";
 comments[26] = "Id Pregunta: 796. Ley 40/2015";
 preguntaids[26] = 796


//  Id pregunta: 561 Año de creación de pregunta: 2016
 questions[27]= "28)  Uno de los objetivos de la Agenda Digital para Espa&ntilde;a es desarrollar la econom&iacute;a digital, &iquest;qu&eacute; actuaciones se deben desarrollar para lograr esto?";
 choices[27]= new Array();
 choices[27][0] = "Impulsar la producci&oacute;n y distribuci&oacute;n a trav&eacute;s de Internet de contenidos digitales";
 choices[27][1] = "Favorecer la internacionalizaci&oacute;n de las empresas tecnol&oacute;gicas";
 choices[27][2] = "Incentivar el uso transformador de las TIC en nuestras empresas";
 choices[27][3] = "Todos los anteriores";
 answers[27] = choices[27][3];
 units[27] = "19";
 comments[27] = "Id Pregunta: 561. Agenda Digital";
 preguntaids[27] = 561


//  Id pregunta: 100 Año de creación de pregunta: 2016
 questions[28]= "29)  Entre los tipos de Bases de Datos NoSQL no se encuentran:";
 choices[28]= new Array();
 choices[28][0] = "Bases de datos orientadas a filas";
 choices[28][1] = "Bases de datos orientadas a documentos";
 choices[28][2] = "Bases de datos de clave/valor";
 choices[28][3] = "Bases de datos orientadas a objetos";
 answers[28] = choices[28][0];
 units[28] = "73";
 comments[28] = "Id Pregunta: 100. ";
 preguntaids[28] = 100


//  Id pregunta: 353 Año de creación de pregunta: 2016
 questions[29]= "30)  El buen funcionamiento de la Uni&oacute;n Europea recae, entre otras instituciones, en:";
 choices[29]= new Array();
 choices[29][0] = "El Parlamento Europeo.";
 choices[29][1] = "Todas las respuestas son correctas.";
 choices[29][2] = "La Comisi&oacute;n Europea.";
 choices[29][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[29] = choices[29][1];
 units[29] = "5";
 comments[29] = "Id Pregunta: 353. UNION EUROPEA";
 preguntaids[29] = 353


//  Id pregunta: 523 Año de creación de pregunta: 2016
 questions[30]= "31)  El sector p&uacute;blico institucional se integra por:";
 choices[30]= new Array();
 choices[30][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho privado vinculados o independientes de las Administraciones P&uacute;blicas";
 choices[30][1] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[30][2] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o independientes de las Administraciones P&uacute;blicas";
 choices[30][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[30] = choices[30][1];
 units[30] = "7";
 comments[30] = "Id Pregunta: 523. LEY 39/2015";
 preguntaids[30] = 523


//  Id pregunta: 553 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Cu&aacute;l es el &oacute;rgano t&eacute;cnico de cooperaci&oacute;n de la Administraci&oacute;n General del Estado, de las Administraciones de las Comunidades Aut&oacute;nomas y de las Entidades Locales en materia de administraci&oacute;n electr&oacute;nica definido en la ley 40/2015 de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[31]= new Array();
 choices[31][0] = "La Conferencia Sectorial de Telecomunicaciones y Sociedad de la Informaci&oacute;n";
 choices[31][1] = "El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica";
 choices[31][2] = "La Comisi&oacute;n Sectorial de administraci&oacute;n electr&oacute;nica";
 choices[31][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[31] = choices[31][2];
 units[31] = "26";
 comments[31] = "Id Pregunta: 553. Gobernanza TIC";
 preguntaids[31] = 553


//  Id pregunta: 57 Año de creación de pregunta: 2016
 questions[32]= "33)  Con respecto a ITIL se&ntilde;ale qu&eacute; afirmaci&oacute;n es cierta:";
 choices[32]= new Array();
 choices[32][0] = "Constituye una metodolog&iacute;a exhaustiva de pasos a seguir en el dise&ntilde;o de servicios TI.";
 choices[32][1] = "Da instrucciones de trabajo concretas, asignado tareas a personas.";
 choices[32][2] = "Los organismos tecnol&oacute;gicamente m&aacute;s punteros de la Administraci&oacute;n General del Estado se encuentran certificados en ITIL.";
 choices[32][3] = "Constituye un conjunto de mejores pr&aacute;cticas para la gesti&oacute;n de servicios TI.";
 answers[32] = choices[32][3];
 units[32] = "101";
 comments[32] = "Id Pregunta: 57. AGE A1 2015";
 preguntaids[32] = 57


//  Id pregunta: 34 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Cu&aacute;les de los siguientes mecanismos no existe espec&iacute;ficamente como cach&eacute; de c&oacute;digo PHP?";
 choices[33]= new Array();
 choices[33][0] = "Memcached";
 choices[33][1] = "OpCache";
 choices[33][2] = "WinCache Extension for PHP";
 choices[33][3] = "Alternative PHP Cache";
 answers[33] = choices[33][0];
 units[33] = "65";
 comments[33] = "Id Pregunta: 34. AGE A1 2015";
 preguntaids[33] = 34


//  Id pregunta: 595 Año de creación de pregunta: 2016
 questions[34]= "35)  A nivel departamental, &iquest;qui&eacute;n es el responsable de la coordinaci&oacute;n interna para llevar a cabo la transformaci&oacute;n digital?";
 choices[34]= new Array();
 choices[34][0] = "Las CMADs (Comisi&oacute;n Ministerial de Administraci&oacute;n Digital)";
 choices[34][1] = "La CETIC";
 choices[34][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[34][3] = "El MHFP";
 answers[34] = choices[34][0];
 units[34] = "19";
 comments[34] = "Id Pregunta: 595. Estrategia TIC";
 preguntaids[34] = 595


//  Id pregunta: 705 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Cu&aacute;l de los siguientes NO es un principio t&eacute;cnico de los mencionados en la Ley 19/2013 al que debe atenerse la informaci&oacute;n publicada en el Portal de Transparencia de la Administraci&oacute;n General del Estado?";
 choices[35]= new Array();
 choices[35][0] = "Compatibilidad";
 choices[35][1] = "Interoperabilidad";
 choices[35][2] = "Reutilizaci&oacute;n";
 choices[35][3] = "Accesibilidad";
 answers[35] = choices[35][0];
 units[35] = "22";
 comments[35] = "Id Pregunta: 705. Ley de transparencia";
 preguntaids[35] = 705


//  Id pregunta: 747 Año de creación de pregunta: 2016
 questions[36]= "37)  Cu&aacute;l de los siguientes NO es uno de los programas del marco general para la mejora de la calidad en la Administraci&oacute;n General del Estado:";
 choices[36]= new Array();
 choices[36][0] = "Programa de an&aacute;lisis de la demanda y de evaluaci&oacute;n de la satisfacci&oacute;n de los usuarios de los servicios.";
 choices[36][1] = "Programa de cartas de servicios";
 choices[36][2] = "Programa para la mejora continua de las organizaciones.";
 choices[36][3] = "Programa de evaluaci&oacute;n de la calidad de las organizaciones.";
 answers[36] = choices[36][2];
 units[36] = "19";
 comments[36] = "Id Pregunta: 747. Direcci&oacute;n p&uacute;blica";
 preguntaids[36] = 747


//  Id pregunta: 112 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;Qu&eacute; dos magnitudes relaciona la Ley de Okun?";
 choices[37]= new Array();
 choices[37][0] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de inflaci&oacute;n";
 choices[37][1] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la variaci&oacute;n del desempleo";
 choices[37][2] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de actividad";
 choices[37][3] = "El valor absoluto del PIB (Producto Interior Bruto) con la tasa de actividad";
 answers[37] = choices[37][1];
 units[37] = "15";
 comments[37] = "Id Pregunta: 112. ";
 preguntaids[37] = 112


//  Id pregunta: 826 Año de creación de pregunta: 2016
 questions[38]= "39)  Podr&aacute;n ordenarle que se abstengan de toda intervenci&oacute;n en el expediente al funcionario que se encuentre en causa de abstenci&oacute;n...";
 choices[38]= new Array();
 choices[38][0] = "Los &oacute;rganos jer&aacute;rquicamente superiores";
 choices[38][1] = "S&oacute;lo los &oacute;rganos inmediatamente superiores jer&aacute;rquicos";
 choices[38][2] = "Los interesados en el procedimiento";
 choices[38][3] = "Las alternativas b) y c) son correctas";
 answers[38] = choices[38][1];
 units[38] = "4, 7, 8, 9";
 comments[38] = "Id Pregunta: 826. Ley 40/2015";
 preguntaids[38] = 826


//  Id pregunta: 346 Año de creación de pregunta: 2016
 questions[39]= "40)  La duraci&oacute;n del mandato de un diputado del Parlamento Europeo es de:";
 choices[39]= new Array();
 choices[39][0] = "25 diputados lo son con car&aacute;cter vitalicio y el resto se renueva cada cinco a&ntilde;os.";
 choices[39][1] = "Cuatro a&ntilde;os, como un diputado espa&ntilde;ol.";
 choices[39][2] = "Cinco a&ntilde;os.";
 choices[39][3] = "Ninguna es correcta.";
 answers[39] = choices[39][2];
 units[39] = "5";
 comments[39] = "Id Pregunta: 346. UNION EUROPEA";
 preguntaids[39] = 346


//  Id pregunta: 735 Año de creación de pregunta: 2016
 questions[40]= "41)  Son l&iacute;neas de acci&oacute;n del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP.";
 choices[40]= new Array();
 choices[40][0] = "Disponer de sistemas de an&aacute;lisis de datos para la toma de decisiones y de funcionarios formados adecuadamente.";
 choices[40][1] = "Que en el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser electr&oacute;nica.";
 choices[40][2] = "Un mejor formaci&oacute;n del funcionariado y una atenci&oacute;n al ciudadano acorde a las nuevas tecnolog&iacute;as.";
 choices[40][3] = "Desarrollar el puesto de trabajo digital y mejorar la satisfacci&oacute;n del usuario en el uso de los servicios p&uacute;blicos digitales.";
 answers[40] = choices[40][3];
 units[40] = "28";
 comments[40] = "Id Pregunta: 735. Estrategia TIC";
 preguntaids[40] = 735


//  Id pregunta: 778 Año de creación de pregunta: 2016
 questions[41]= "42)  Respecto a los &oacute;rganos administrativos (se&ntilde;ala la incorrecta):";
 choices[41]= new Array();
 choices[41][0] = "corresponde a cada Administraci&oacute;n P&uacute;blica delimitar, en su respectivo &aacute;mbito competencial, las unidades administrativas que configuran los &oacute;rganos administrativos propios de las especialidades derivadas de su organizaci&oacute;n";
 choices[41][1] = "en ning&uacute;n caso podr&aacute;n crearse nuevos &oacute;rganos que supongan duplicaci&oacute;n de otros ya existentes";
 choices[41][2] = "la creaci&oacute;n de un nuevo &oacute;rgano s&oacute;lo tendr&aacute; lugar previa comprobaci&oacute;n de que no existe otro en la misma Administraci&oacute;n P&uacute;blica que desarrolle igual funci&oacute;n sobre el mismo territorio y poblaci&oacute;n";
 choices[41][3] = "todas son correctas";
 answers[41] = choices[41][1];
 units[41] = "4, 7, 8, 9";
 comments[41] = "Id Pregunta: 778. Ley 40/2015";
 preguntaids[41] = 778


//  Id pregunta: 733 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Cu&aacute;l de las siguientes reglas se corresponde a las reglas de la metodolog&iacute;a Kanban?:";
 choices[42]= new Array();
 choices[42][0] = "Visualizar el trabajo o el flujo de trabajo";
 choices[42][1] = "Determinar el l&iacute;mite de trabajo en curso (Work in progress)";
 choices[42][2] = "Medir el tiempo en completar una tarea (Lead time)";
 choices[42][3] = "Todas las anteriores son reglas correspondientes a la metodolog&iacute;a Kanban.";
 answers[42] = choices[42][3];
 units[42] = "34, 84";
 comments[42] = "Id Pregunta: 733. Metodologias &aacute;giles";
 preguntaids[42] = 733


//  Id pregunta: 526 Año de creación de pregunta: 2016
 questions[43]= "44)  Las asociaciones y organizaciones representativas de intereses econ&oacute;micos y sociales:";
 choices[43]= new Array();
 choices[43][0] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos en los t&eacute;rminos que reglamentariamente se establezca";
 choices[43][1] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos";
 choices[43][2] = "no ser&aacute;n titulares de intereses leg&iacute;timos colectivos";
 choices[43][3] = "ser&aacute;n titulares de intereses leg&iacute;timos colectivos en los t&eacute;rminos que la Ley reconozca";
 answers[43] = choices[43][3];
 units[43] = "7";
 comments[43] = "Id Pregunta: 526. LEY 39/2015";
 preguntaids[43] = 526


//  Id pregunta: 558 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Qu&eacute; es el geo-bloqueo, contra el que pretende ser soluci&oacute;n la estrategia para el Mercado &Uacute;nico Digital en Europa?";
 choices[44]= new Array();
 choices[44][0] = "Es la discriminaci&oacute;n en la b&uacute;squeda de un empleo seg&uacute;n el pa&iacute;s de origen del trabajador";
 choices[44][1] = "Es la imposibilidad de pasar la aduana para paquetes comprados en tiendas online de ciertos pa&iacute;ses";
 choices[44][2] = "Es la pr&aacute;ctica por la cual los vendedores online deniegan a los consumidores el acceso a su p&aacute;gina web en funci&oacute;n de su localizaci&oacute;n o le ofrecen precios distintos";
 choices[44][3] = "Es la pr&aacute;ctica comercial por la que varias tiendas online ofrecen el mismo producto a precios pre-acordados entre ellas, limitando la competencia";
 answers[44] = choices[44][2];
 units[44] = "17";
 comments[44] = "Id Pregunta: 558. Mercado &Uacute;nico Digital";
 preguntaids[44] = 558


//  Id pregunta: 524 Año de creación de pregunta: 2016
 questions[45]= "46)  A los efectos previstos en esta Ley, tendr&aacute;n capacidad de obrar ante las Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[45]= new Array();
 choices[45][0] = "las personas f&iacute;sicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 choices[45][1] = "los menores de edad para el ejercicio y defensa de aquellos de sus derechos e intereses cuya actuaci&oacute;n no est&eacute; permitida por el ordenamiento jur&iacute;dico sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[45][2] = "cuando la Ley as&iacute; lo declare expresamente, los grupos de afectados, las uniones y entidades sin personalidad jur&iacute;dica y los patrimonios independientes o aut&oacute;nomos";
 choices[45][3] = "las personas jur&iacute;dicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 answers[45] = choices[45][1];
 units[45] = "7";
 comments[45] = "Id Pregunta: 524. LEY 39/2015";
 preguntaids[45] = 524


//  Id pregunta: 818 Año de creación de pregunta: 2016
 questions[46]= "47)  Los Directores Insulares de la Administraci&oacute;n General del Estado (se&ntilde;ala la incorrecta):";
 choices[46]= new Array();
 choices[46][0] = "ser&aacute;n nombrados por el Delegado del Gobierno mediante el procedimiento de concurso-oposici&oacute;n";
 choices[46][1] = "ser&aacute;n nombrados entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades Locales, pertenecientes a Cuerpos o Escalas clasificados como Subgrupo A1";
 choices[46][2] = "dependen jer&aacute;rquicamente del Delegado del Gobierno en la Comunidad Aut&oacute;noma o del Subdelegado del Gobierno en la provincia, cuando este cargo exista";
 choices[46][3] = "ejercen, en su &aacute;mbito territorial, las competencias atribuidas por esta Ley a los Subdelegados del Gobierno en las provincias";
 answers[46] = choices[46][0];
 units[46] = "4, 7, 8, 9";
 comments[46] = "Id Pregunta: 818. Ley 40/2015";
 preguntaids[46] = 818


//  Id pregunta: 525 Año de creación de pregunta: 2016
 questions[47]= "48)  Se consideran interesados en el procedimiento administrativo:";
 choices[47]= new Array();
 choices[47][0] = "quienes lo promuevan como titulares de derechos o intereses leg&iacute;timos individuales o colectivos";
 choices[47][1] = "los que, habiendo iniciado el procedimiento, tengan derechos que puedan resultar afectados por la decisi&oacute;n que en el mismo se adopte";
 choices[47][2] = "aquellos cuyos intereses leg&iacute;timos, individuales o colectivos, puedan resultar afectados por la resoluci&oacute;n y se personen en el procedimiento durante el tr&aacute;mite de audiencia";
 choices[47][3] = "todas son correctas";
 answers[47] = choices[47][0];
 units[47] = "7";
 comments[47] = "Id Pregunta: 525. LEY 39/2015";
 preguntaids[47] = 525


//  Id pregunta: 2 Año de creación de pregunta: 2016
 questions[48]= "49)  La estrategia de comunicaci&oacute;n de un nuevo proyecto estrat&eacute;gico TIC NO debe:";
 choices[48]= new Array();
 choices[48][0] = "Posponerse a la puesta en producci&oacute;n del proyecto sin incidencias significativas.";
 choices[48][1] = "Presentar prototipos que muestren la evoluci&oacute;n del desarrollo ya realizado.";
 choices[48][2] = "Dise&ntilde;ar una campa&ntilde;a de difusi&oacute;n y promoci&oacute;n del proyecto.";
 choices[48][3] = "Asegurar la implicaci&oacute;n de representantes de todas las unidades afectadas.";
 answers[48] = choices[48][0];
 units[48] = "31";
 comments[48] = "Id Pregunta: 2. AGE A1 2015";
 preguntaids[48] = 2


//  Id pregunta: 89 Año de creación de pregunta: 2016
 questions[49]= "50)  En un contrato cuyo presupuesto es de 100.000 euros sin IVA y se adjudica por 80.000, IVA excluido, la garant&iacute;a definitiva ser&aacute; de:";
 choices[49]= new Array();
 choices[49][0] = "2.400 euros";
 choices[49][1] = "4.000 euros";
 choices[49][2] = "3.200 euros";
 choices[49][3] = "1.600 euros";
 answers[49] = choices[49][1];
 units[49] = "37";
 comments[49] = "Id Pregunta: 89. AGE A1 2015";
 preguntaids[49] = 89


//  Id pregunta: 3 Año de creación de pregunta: 2016
 questions[50]= "51)  En el lenguaje de modelado UML :";
 choices[50]= new Array();
 choices[50][0] = "Los diagramas de secuencia y colaboraci&oacute;n son usados para modelar el comportamiento del sistema, pudiendo usarse para modelar un caso de uso, una clase, o un m&eacute;todo complicado.";
 choices[50][1] = "Los diagramas de actividad son usados para modelar la configuraci&oacute;n de los elementos de procesado en tiempo de ejecuci&oacute;n.";
 choices[50][2] = "Los diagramas de componentes son usados para modelar la estructura del software, incluyendo las dependencias entre los componentes de software.";
 choices[50][3] = "Los diagramas de implementaci&oacute;n son usados para modelar interacciones entre objetos de dise&ntilde;o en el sistema.";
 answers[50] = choices[50][2];
 units[50] = "89";
 comments[50] = "Id Pregunta: 3. AGE A1 2015";
 preguntaids[50] = 3


//  Id pregunta: 825 Año de creación de pregunta: 2016
 questions[51]= "52)  Debe abstenerse el funcionario que tiene relaci&oacute;n de servicio con interesado en el asunto o le ha prestado servicios profesionales en los ...";
 choices[51]= new Array();
 choices[51][0] = "Tres &uacute;ltimos a&ntilde;os";
 choices[51][1] = "Cinco &uacute;ltimos a&ntilde;os";
 choices[51][2] = "Cuatro &uacute;ltimos a&ntilde;os";
 choices[51][3] = "Dos &uacute;ltimos a&ntilde;os";
 answers[51] = choices[51][1];
 units[51] = "4, 7, 8, 9";
 comments[51] = "Id Pregunta: 825. Ley 40/2015";
 preguntaids[51] = 825


//  Id pregunta: 434 Año de creación de pregunta: 2016
 questions[52]= "53)  En cuanto al sistema EGEO, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[52]= new Array();
 choices[52][0] = "Permite la representaci&oacute;n de mapas tem&aacute;ticos, georreferenciados, buscador de recursos georreferenciados con filtros definidos por el usuario, y de magnitud.";
 choices[52][1] = "Utiliza &uacute;nicamente sobre mapas oficiales del Instituto Geogr&aacute;fico Nacional (IGN).";
 choices[52][2] = "Es un servicio com&uacute;n dirigido a &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[52][3] = "Para su manejo, es necesario contar con conocimientos de georreferenciaci&oacute;n.";
 answers[52] = choices[52][0];
 units[52] = "43";
 comments[52] = "Id Pregunta: 434. SERVICIOS COMUNES";
 preguntaids[52] = 434


//  Id pregunta: 24 Año de creación de pregunta: 2016
 questions[53]= "54)  De acuerdo con la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, una de las funciones de la Comisi&oacute;n Nacional de los Mercados y la Competencia es:";
 choices[53]= new Array();
 choices[53][0] = "Gestionar en per&iacute;odo voluntario las tasas en materia de telecomunicaciones a que se refiere la presente Ley.";
 choices[53][1] = "Proponer al Gobierno la pol&iacute;tica a seguir para facilitar el desarrollo y la evoluci&oacute;n de las obligaciones de servicio p&uacute;blico.";
 choices[53][2] = "Gestionar el Registro de Operadores.";
 choices[53][3] = "Establecer el procedimiento para cuantificar los beneficios no monetarios obtenidos por los operadores encargados de la prestaci&oacute;n del servicio universal.";
 answers[53] = choices[53][3];
 units[53] = "121";
 comments[53] = "Id Pregunta: 24. AGE A1 2015";
 preguntaids[53] = 24


//  Id pregunta: 473 Año de creación de pregunta: 2016
 questions[54]= "55)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la agrupaci&oacute;n de los cr&eacute;ditos en cap&iacute;tulos, art&iacute;culos, conceptos y subconceptos corresponde a la clasificaci&oacute;n:";
 choices[54]= new Array();
 choices[54][0] = "Org&aacute;nica.";
 choices[54][1] = "Contable.";
 choices[54][2] = "Econ&oacute;mica.";
 choices[54][3] = "Por programas.";
 answers[54] = choices[54][2];
 units[54] = "10";
 comments[54] = "Id Pregunta: 473. PRESUPUESTOS GENERALES";
 preguntaids[54] = 473


//  Id pregunta: 724 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Cu&aacute;l es la principal desventaja de sprints m&aacute;s largos?";
 choices[55]= new Array();
 choices[55][0] = "Permite reaccionar al equipo mejor ante imprevistos";
 choices[55][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[55][2] = "Se reduce el n&uacute;mero de reuniones de sprint";
 choices[55][3] = "Se puede desarrollar algo diferente a lo requerido y obtener el feedback del cliente m&aacute;s tarde.";
 answers[55] = choices[55][3];
 units[55] = "34, 84";
 comments[55] = "Id Pregunta: 724. Metodologias &aacute;giles";
 preguntaids[55] = 724


//  Id pregunta: 363 Año de creación de pregunta: 2016
 questions[56]= "57)  Los Reglamentos no se caracterizan por:";
 choices[56]= new Array();
 choices[56][0] = "No poseer alcance general.";
 choices[56][1] = "Ser obligatorios.";
 choices[56][2] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[56][3] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 answers[56] = choices[56][0];
 units[56] = "5";
 comments[56] = "Id Pregunta: 363. UNION EUROPEA";
 preguntaids[56] = 363


//  Id pregunta: 603 Año de creación de pregunta: 2016
 questions[57]= "58)  Los criptosistemas pueden clasificarse en:";
 choices[57]= new Array();
 choices[57][0] = "Concretos, Estables e Inestables.";
 choices[57][1] = "Sim&eacute;tricos, Paralelos y Referenciales.";
 choices[57][2] = "Asim&eacute;tricos, Referenciales y Concretos.";
 choices[57][3] = "Sim&eacute;tricos, Asim&eacute;tricos e H&iacute;bridos.";
 answers[57] = choices[57][3];
 units[57] = "76";
 comments[57] = "Id Pregunta: 603. Junta de Extremadura A1 2015";
 preguntaids[57] = 603


//  Id pregunta: 843 Año de creación de pregunta: 2016
 questions[58]= "59)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[58]= new Array();
 choices[58][0] = "De cada sesi&oacute;n que celebre el &oacute;rgano colegiado se levantar&aacute; acta por el Secretario, que especificar&aacute; necesariamente los asistentes, el orden del d&iacute;a de la reuni&oacute;n, las circunstancias del lugar y tiempo en que se ha celebrado, los puntos principales de las deliberaciones, as&iacute; como el contenido de los acuerdos adoptados.";
 choices[58][1] = "Podr&aacute;n grabarse las sesiones que celebre el &oacute;rgano colegiado. El fichero resultante de la grabaci&oacute;n, junto con la certificaci&oacute;n expedida por el Secretario de la autenticidad e integridad del mismo, y cuantos documentos en soporte electr&oacute;nico se utilizasen como documentos de la sesi&oacute;n, podr&aacute;n acompa&ntilde;ar al acta de las sesiones, sin necesidad de hacer constar en ella los puntos principales de las deliberaciones.";
 choices[58][2] = "El acta de cada sesi&oacute;n podr&aacute; aprobarse en la misma reuni&oacute;n o en una reuni&oacute;n posterior. El Secretario elaborar&aacute; el acta con el visto bueno del Presidente y lo remitir&aacute; a trav&eacute;s de medios electr&oacute;nicos, a los miembros del &oacute;rgano colegiado, quienes podr&aacute;n manifestar por los mismos medios su conformidad o reparos al texto, a efectos de su aprobaci&oacute;n, consider&aacute;ndose, en caso afirmativo, aprobada en la misma reuni&oacute;n.";
 choices[58][3] = "Cuando se hubiese optado por la grabaci&oacute;n de las sesiones celebradas o por la utilizaci&oacute;n de documentos en soporte electr&oacute;nico, deber&aacute;n conservarse de forma que se garantice la integridad y autenticidad de los ficheros electr&oacute;nicos correspondientes y el acceso a los mismos por parte de los miembros del &oacute;rgano colegiado.";
 answers[58] = choices[58][2];
 units[58] = "4, 7, 8, 9";
 comments[58] = "Id Pregunta: 843. Ley 40/2015";
 preguntaids[58] = 843


//  Id pregunta: 683 Año de creación de pregunta: 2016
 questions[59]= "60)  El Factor de Sostenibilidad, de acuerdo a la Ley 23/2013, de 23 de diciembre, reguladora del Factor de Sostenibilidad y del &Iacute;ndice de Revalorizaci&oacute;n del Sistema de Pensiones de la Seguridad Social:";
 choices[59]= new Array();
 choices[59][0] = "Es un valor que se calcula para cada periodo de 3 a&ntilde;os, comenzando en el a&ntilde;o 2016.";
 choices[59][1] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la evoluci&oacute;n del PIB y otros datos macroecon&oacute;micos.";
 choices[59][2] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la esperanza de vida de los pensionistas.";
 choices[59][3] = "Se aplicar&aacute; para determinar la cuant&iacute;a de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a partir del 1 de Enero del a&ntilde;o 2018.";
 answers[59] = choices[59][2];
 units[59] = "14";
 comments[59] = "Id Pregunta: 683. Pensiones";
 preguntaids[59] = 683


//  Id pregunta: 228 Año de creación de pregunta: 2016
 questions[60]= "61)  Indique la respuesta falsa. Seg&uacute;n el Art&iacute;culo 147 de la Constituci&oacute;n espa&ntilde;ola, los Estatutos de Autonom&iacute;a deber&aacute;n contener:";
 choices[60]= new Array();
 choices[60][0] = "La denominaci&oacute;n de la Comunidad que mejor corresponda a su identidad hist&oacute;rica.";
 choices[60][1] = "La delimitaci&oacute;n de su territorio.";
 choices[60][2] = "Las competencias asumidas y aqu&eacute;llas del Estado sobre las que la Comunidad Aut&oacute;noma se reserva el derecho de opci&oacute;n.";
 choices[60][3] = "La denominaci&oacute;n, organizaci&oacute;n y sede de las instituciones aut&oacute;nomas propias.";
 answers[60] = choices[60][2];
 units[60] = "1";
 comments[60] = "Id Pregunta: 228. CONSTITUCION1978";
 preguntaids[60] = 228


//  Id pregunta: 439 Año de creación de pregunta: 2016
 questions[61]= "62)  Sobre el Sistema de Interconexi&oacute;n de Registros (SIR):";
 choices[61]= new Array();
 choices[61][0] = "Es la infraestructura b&aacute;sica que permite el intercambio de asientos electr&oacute;nicos de registro entre los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[61][1] = "Permite eliminar el tr&aacute;nsito de papel entre administraciones, aumentando la eficiencia y eliminando los costes de manipulaci&oacute;n y remisi&oacute;n del papel, gracias a la generaci&oacute;n de copias aut&eacute;nticas electr&oacute;nicas de la documentaci&oacute;n presentada en los asientos de registro.";
 choices[61][2] = "No es necesario que la aplicaci&oacute;n de registro est&eacute; certificada con la norma SICRES 3.0.";
 choices[61][3] = "La integraci&oacute;n en SIR se realiza mediante aplicaciones de registro comunes como GEISER y ORVE o bien, siempre que se justifique, mediante aplicaciones previamente certificadas por la Comisi&oacute;n de Estrategia TIC.";
 answers[61] = choices[61][1];
 units[61] = "43";
 comments[61] = "Id Pregunta: 439. SERVICIOS COMUNES";
 preguntaids[61] = 439


//  Id pregunta: 332 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;Cu&aacute;ndo son de aplicaci&oacute;n los tratados internacionales?:";
 choices[62]= new Array();
 choices[62][0] = "Al d&iacute;a siguiente de su ratificaci&oacute;n por el Congreso de los Diputados.";
 choices[62][1] = "Al d&iacute;a siguiente de su firma por los Ministros plenipotenciarios.";
 choices[62][2] = "El mismo d&iacute;a de la firma por los Ministros plenipotenciarios.";
 choices[62][3] = "No ser&aacute;n de aplicaci&oacute;n directa hasta que formen parte del ordenamiento mediante su publicaci&oacute;n en el BOE.";
 answers[62] = choices[62][3];
 units[62] = "5";
 comments[62] = "Id Pregunta: 332. UNION EUROPEA";
 preguntaids[62] = 332


//  Id pregunta: 72 Año de creación de pregunta: 2016
 questions[63]= "64)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[63]= new Array();
 choices[63][0] = "OASIS ha definido una notaci&oacute;n gr&aacute;fica est&aacute;ndar para WS-BPEL.";
 choices[63][1] = "BPEL4People es una extensi&oacute;n sobre WS-BPEL realizada para dar cobertura a escenarios que involucran interacci&oacute;n de personas con procesos de negocio.";
 choices[63][2] = "WS-BPEL es un lenguaje dise&ntilde;ado para el control distribuido de la invocaci&oacute;n de diferentes servicios Web que modelan un proceso de negocio.";
 choices[63][3] = "XPDL es una especificaci&oacute;n de lenguaje de definici&oacute;n de procesos creada por OASIS.";
 answers[63] = choices[63][1];
 units[63] = "86";
 comments[63] = "Id Pregunta: 72. AGE A1 2015";
 preguntaids[63] = 72


//  Id pregunta: 102 Año de creación de pregunta: 2016
 questions[64]= "65)  Entre las caracter&iacute;sticas de las Bases de Datos NoSQL se encuentran:";
 choices[64]= new Array();
 choices[64][0] = "Pueden manejar enormes cantidades de datos estructurados";
 choices[64][1] = "Existe un control estricto de las transacciones (propiedades ACID - Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[64][2] = "Se basan en sistemas distribuidos";
 choices[64][3] = "Se basan en el modelo de datos relacional";
 answers[64] = choices[64][2];
 units[64] = "73";
 comments[64] = "Id Pregunta: 102. ";
 preguntaids[64] = 102


//  Id pregunta: 249 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[65]= new Array();
 choices[65][0] = "Art&iacute;culo 16.2.";
 choices[65][1] = "Art&iacute;culo 17.1.";
 choices[65][2] = "Art&iacute;culo 18.1.";
 choices[65][3] = "Art&iacute;culo 18.2.";
 answers[65] = choices[65][0];
 units[65] = "1";
 comments[65] = "Id Pregunta: 249. CONSTITUCION1978";
 preguntaids[65] = 249


//  Id pregunta: 317 Año de creación de pregunta: 2016
 questions[66]= "67)  Habr&aacute; qu&oacute;rum en el Parlamento Europeo, cuando se encuentre reunida en el sal&oacute;n de sesiones:";
 choices[66]= new Array();
 choices[66][0] = "La cuarta parte de los Diputados que integran el Parlamento.";
 choices[66][1] = "La quinta parte de los Diputados que integran el Parlamento.";
 choices[66][2] = "La mitad de los Diputados que integran el Parlamento.";
 choices[66][3] = "La tercera parte de los Diputados que integran el Parlamento.";
 answers[66] = choices[66][3];
 units[66] = "5";
 comments[66] = "Id Pregunta: 317. UNION EUROPEA";
 preguntaids[66] = 317


//  Id pregunta: 772 Año de creación de pregunta: 2016
 questions[67]= "68)  Las Administraciones P&uacute;blicas:";
 choices[67]= new Array();
 choices[67][0] = "se relacionar&aacute;n entre s&iacute; y con sus &oacute;rganos, organismos p&uacute;blicos y entidades vinculados o dependientes a trav&eacute;s de medios no electr&oacute;nicos, que aseguren la interoperabilidad y seguridad de los sistemas y soluciones adoptadas por cada una de ellas";
 choices[67][1] = "garantizar&aacute;n la protecci&oacute;n de los datos de car&aacute;cter personal";
 choices[67][2] = "facilitar&aacute;n preferentemente la prestaci&oacute;n disociada de servicios a los interesados";
 choices[67][3] = "todas son correctas";
 answers[67] = choices[67][1];
 units[67] = "4, 7, 8, 9";
 comments[67] = "Id Pregunta: 772. Ley 40/2015";
 preguntaids[67] = 772


//  Id pregunta: 829 Año de creación de pregunta: 2016
 questions[68]= "69)  La recusaci&oacute;n se plantea...";
 choices[68]= new Array();
 choices[68][0] = "Antes de iniciado el procedimiento";
 choices[68][1] = "Una vez iniciado el procedimiento";
 choices[68][2] = "Cuando el instructor dicta propuesta de resoluci&oacute;n";
 choices[68][3] = "En cualquier momento del procedimiento";
 answers[68] = choices[68][0];
 units[68] = "4, 7, 8, 9";
 comments[68] = "Id Pregunta: 829. Ley 40/2015";
 preguntaids[68] = 829


//  Id pregunta: 816 Año de creación de pregunta: 2016
 questions[69]= "70)  Podr&aacute;n crearse por Real Decreto Subdelegaciones del Gobierno en las Comunidades Aut&oacute;nomas uniprovinciales, cuando lo justifiquen circunstancias como:";
 choices[69]= new Array();
 choices[69][0] = "la poblaci&oacute;n del territorio";
 choices[69][1] = "el volumen de gesti&oacute;n";
 choices[69][2] = "sus singularidades geogr&aacute;ficas, sociales o econ&oacute;micas";
 choices[69][3] = "todas son correctas";
 answers[69] = choices[69][3];
 units[69] = "4, 7, 8, 9";
 comments[69] = "Id Pregunta: 816. Ley 40/2015";
 preguntaids[69] = 816


//  Id pregunta: 708 Año de creación de pregunta: 2016
 questions[70]= "71)  El Portal de Transparencia de la Administraci&oacute;n General del Estado depende del:";
 choices[70]= new Array();
 choices[70][0] = "Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[70][1] = "Ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[70][2] = "Ministerio de la Presidencia";
 choices[70][3] = "Ministerio de Fomento";
 answers[70] = choices[70][2];
 units[70] = "22";
 comments[70] = "Id Pregunta: 708. Portal de Transparencia";
 preguntaids[70] = 708


//  Id pregunta: 190 Año de creación de pregunta: 2016
 questions[71]= "72)  La iniciativa legislativa para la reforma de la Constituci&oacute;n Espa&ntilde;ola de 1978:";
 choices[71]= new Array();
 choices[71][0] = "Le corresponde exclusivamente al congreso y al Senado.";
 choices[71][1] = "Puede ser ejercida por el Tribunal Constitucional.";
 choices[71][2] = "Puede ser instada por las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[71][3] = "Le corresponde exclusivamente al Gobierno.";
 answers[71] = choices[71][2];
 units[71] = "1";
 comments[71] = "Id Pregunta: 190. CONSTITUCION1978";
 preguntaids[71] = 190


//  Id pregunta: 680 Año de creación de pregunta: 2016
 questions[72]= "73)  De acuerdo a la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia, se define dependencia como:";
 choices[72]= new Array();
 choices[72][0] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[72][1] = "El estado de car&aacute;cter permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[72][2] = "El estado de car&aacute;cter temporal en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[72][3] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad, la discapacidad o la baja laboral, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 answers[72] = choices[72][1];
 units[72] = "14";
 comments[72] = "Id Pregunta: 680. Dependencia";
 preguntaids[72] = 680


//  Id pregunta: 779 Año de creación de pregunta: 2016
 questions[73]= "74)  La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de (se&ntilde;ala la incorrecta):";
 choices[73]= new Array();
 choices[73][0] = "denominaci&oacute;n y establecimiento de sus recursos humanos necesarios";
 choices[73][1] = "determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia jer&aacute;rquica";
 choices[73][2] = "delimitaci&oacute;n de sus funciones y competencias";
 choices[73][3] = "dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento";
 answers[73] = choices[73][0];
 units[73] = "4, 7, 8, 9";
 comments[73] = "Id Pregunta: 779. Ley 40/2015";
 preguntaids[73] = 779


//  Id pregunta: 174 Año de creación de pregunta: 2016
 questions[74]= "75)  De conformidad con la Constituci&oacute;n Espa&ntilde;ola, &iquest; cu&aacute;l de los siguientes derechos y libertades es susceptible de tutela a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional?";
 choices[74]= new Array();
 choices[74][0] = "El derecho a la propiedad privada.";
 choices[74][1] = "El derecho de asociaci&oacute;n.";
 choices[74][2] = "El derecho de fundaci&oacute;n.";
 choices[74][3] = "El derecho de negociaci&oacute;n colectiva.";
 answers[74] = choices[74][1];
 units[74] = "1";
 comments[74] = "Id Pregunta: 174. CONSTITUCION1978";
 preguntaids[74] = 174


