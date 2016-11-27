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

//  Id pregunta: 90 Año de creación de pregunta: 2016
 questions[0]= "1)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad (ENS) en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, el an&aacute;lisis y gesti&oacute;n de riesgos es una parte esencial del proceso de seguridad, debiendo mantenerse permanentemente actualizado. Para ello, el propio ENS establece que se debe realizar un an&aacute;lisis de riesgos formal para los sistemas de:";
 choices[0]= new Array();
 choices[0][0] = "Categor&iacute;a b&aacute;sica";
 choices[0][1] = "Categor&iacute;a media";
 choices[0][2] = "Categor&iacute;a alta";
 choices[0][3] = "Categor&iacute;a media y alta";
 answers[0] = choices[0][2];
 units[0] = "46";
 comments[0] = "Id Pregunta: 90. AGE A1 2015";


//  Id pregunta: 30 Año de creación de pregunta: 2016
 questions[1]= "2)  El sistema operativo OS X El Capit&aacute;n incluye un conjunto de servicios de red para compartir archivos entre Mac y PC, &iquest;cu&aacute;l es el protocolo por defecto que emplea OS X El Capit&aacute;n?";
 choices[1]= new Array();
 choices[1][0] = "SMB3";
 choices[1][1] = "AFP";
 choices[1][2] = "NFS";
 choices[1][3] = "FTP";
 answers[1] = choices[1][0];
 units[1] = "59";
 comments[1] = "Id Pregunta: 30. AGE A1 2015";


//  Id pregunta: 505 Año de creación de pregunta: 2016
 questions[2]= "3)  Respecto a la regla de gasto. Se&ntilde;ale la respuesta falsa:";
 choices[2]= new Array();
 choices[2][0] = "La variaci&oacute;n del gasto computable de la Administraci&oacute;n Central, de las Comunidades Aut&oacute;nomas y de las Corporaciones Locales, no podr&aacute; superar la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola.";
 choices[2][1] = "No obstante, cuando exista un desequilibrio estructural en las cuentas p&uacute;blicas o una deuda p&uacute;blica superior al objetivo establecido, el crecimiento del gasto p&uacute;blico computable se ajustar&aacute; a la senda establecida en los respectivos planes econ&oacute;mico-financieros y de reequilibrio previstos.";
 choices[2][2] = "Corresponde al Ministerio de Econom&iacute;a y Competitividad calcular la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola, de acuerdo con la metodolog&iacute;a utilizada por la Comisi&oacute;n Europea en aplicaci&oacute;n de su normativa.";
 choices[2][3] = "Esta tasa se publicar&aacute; en el informe de situaci&oacute;n de la econom&iacute;a. Ser&aacute; la referencia a tener en cuenta por la Administraci&oacute;n Central en la elaboraci&oacute;n de sus Presupuestos.";
 answers[2] = choices[2][3];
 units[2] = "10";
 comments[2] = "Id Pregunta: 505. PRESUPUESTOS GENERALES";


//  Id pregunta: 62 Año de creación de pregunta: 2016
 questions[3]= "4)  El art&iacute;culo 102 del Real Decreto 1720/2007, por el que se determina la conservaci&oacute;n de una copia de respaldo de los datos y de los procedimientos de recuperaci&oacute;n de los mismos en un lugar diferente de aquel en que se encuentren los equipos inform&aacute;ticos que los tratan, &iquest;a qu&eacute; nivel o niveles de medidas de seguridad es aplicable?";
 choices[3]= new Array();
 choices[3][0] = "B&aacute;sico";
 choices[3][1] = "Medio";
 choices[3][2] = "Alto";
 choices[3][3] = "A los niveles medio y alto";
 answers[3] = choices[3][2];
 units[3] = "35";
 comments[3] = "Id Pregunta: 62. AGE A1 2015";


//  Id pregunta: 316 Año de creación de pregunta: 2016
 questions[4]= "5)  El Consejo de la Uni&oacute;n Europea de reunir&aacute; por:";
 choices[4]= new Array();
 choices[4][0] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de dos de sus miembros o de la Comisi&oacute;n.";
 choices[4][1] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n.";
 choices[4][2] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de tres de sus miembros o de la Comisi&oacute;n.";
 choices[4][3] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n o el Parlamento.";
 answers[4] = choices[4][1];
 units[4] = "5";
 comments[4] = "Id Pregunta: 316. UNION EUROPEA";


//  Id pregunta: 604 Año de creación de pregunta: 2016
 questions[5]= "6)  ITIL v3, define:";
 choices[5]= new Array();
 choices[5][0] = "Un proceso es un conjunto estructurado de actividades dise&ntilde;ado para cumplir un objetivo concreto.";
 choices[5][1] = "Un proceso es un conjunto de actividades no estructuradas para cumplir un objetivo concreto.";
 choices[5][2] = "Un proceso es toda actividad encaminada a cumplir con un est&aacute;ndar definido por las normas ISO.";
 choices[5][3] = "Un proceso es un conjunto de actividades de documentaci&oacute;n y seguridad dise&ntilde;ados mediante diagramas de flujo de informaci&oacute;n.";
 answers[5] = choices[5][0];
 units[5] = "101";
 comments[5] = "Id Pregunta: 604. Junta de Extremadura A1 2015";


//  Id pregunta: 358 Año de creación de pregunta: 2016
 questions[6]= "7)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones no es correcta:";
 choices[6]= new Array();
 choices[6][0] = "a)La Uni&oacute;n Europea no es a&uacute;n una estructura acabada, sino m&aacute;s bien un sistema de gestaci&oacute;n cuya apariencia definitiva a&uacute;n no puede preverse.";
 choices[6][1] = "b) La Uni&oacute;n Europea no es un proceso de integraci&oacute;n sino una Organizaci&oacute;n Internacional sui generis.";
 choices[6][2] = "c) Todas las respuestas son correctas.";
 choices[6][3] = "d)La Uni&oacute;n Europea s&oacute;lo tiene en com&uacute;n con las organizaciones tradicionales de derecho internacional que tambi&eacute;n han sido creadas mediante un tratado internacional.";
 answers[6] = choices[6][1];
 units[6] = "5";
 comments[6] = "Id Pregunta: 358. UNION EUROPEA";


//  Id pregunta: 168 Año de creación de pregunta: 2016
 questions[7]= "8)  En relaci&oacute;n la conectividad desde dispositivos m&oacute;viles en Europa";
 choices[7]= new Array();
 choices[7][0] = "A partir de 15 de Julio de 2017 los operadores solo podr&aacute;n cobrar un extra adicional m&aacute;ximo 1 &euro; /min en llamadas de voz, en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[7][1] = "No existe regulaci&oacute;n sobre el roaming en la UE, sino sobre la portabilidad, que ser&aacute; prohibida a partir del 15 de Julio de 2017.";
 choices[7][2] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[7][3] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de portabilidad al viajar a otro pa&iacute;s de la UE.";
 answers[7] = choices[7][2];
 units[7] = "19";
 comments[7] = "Id Pregunta: 168. https://ec.europa.eu/digital-single-market/en/roaming";


//  Id pregunta: 339 Año de creación de pregunta: 2016
 questions[8]= "9)  La presidencia del Consejo se ejerce de forma rotatoria cada:";
 choices[8]= new Array();
 choices[8][0] = "4 meses seg&uacute;n un orden fijado por unanimidad del Consejo.";
 choices[8][1] = "6 meses seg&uacute;n un orden fijado por unanimidad del Consejo.";
 choices[8][2] = "4 meses seg&uacute;n un orden fijado por mayor&iacute;a cualificada del Consejo.";
 choices[8][3] = "6 meses seg&uacute;n un orden fijado por mayor&iacute;a cualificada del Consejo.";
 answers[8] = choices[8][1];
 units[8] = "5";
 comments[8] = "Id Pregunta: 339. UNION EUROPEA";


//  Id pregunta: 589 Año de creación de pregunta: 2016
 questions[9]= "10)  Son servicios declarados compartidos:";
 choices[9]= new Array();
 choices[9][0] = "Servicio unificado de telecomunicaciones y servicio de seguridad gestionada";
 choices[9][1] = "Servicio multicanal de atenci&oacute;n al ciudadano";
 choices[9][2] = "Servicio com&uacute;n de generaci&oacute;n y validaci&oacute;n de firmas electr&oacute;nicas";
 choices[9][3] = "Todos los anteriores";
 answers[9] = choices[9][3];
 units[9] = "19";
 comments[9] = "Id Pregunta: 589. Estrategia TIC";


//  Id pregunta: 141 Año de creación de pregunta: 2016
 questions[10]= "11)  El recurso de alzada puede interponerse:";
 choices[10]= new Array();
 choices[10][0] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna en todo caso";
 choices[10][1] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna o ante el competente para resolverlo";
 choices[10][2] = "Ante el &oacute;rgano competente para resolverlo en todo caso";
 choices[10][3] = "Ante el Defensor del Pueblo";
 answers[10] = choices[10][1];
 units[10] = "8";
 comments[10] = "Id Pregunta: 141. Ley 39/2015, Art&iacute;culo 121";


//  Id pregunta: 745 Año de creación de pregunta: 2016
 questions[11]= "12)  Cu&aacute;l de los siguientes NO es uno de los programas del marco general para la mejora de la calidad en la Administraci&oacute;n General del Estado:";
 choices[11]= new Array();
 choices[11][0] = "Programa de an&aacute;lisis de la demanda y de evaluaci&oacute;n de la satisfacci&oacute;n de los usuarios de los servicios.";
 choices[11][1] = "Programa de cartas de servicios";
 choices[11][2] = "Programa para la mejora continua de las organizaciones.";
 choices[11][3] = "Programa de evaluaci&oacute;n de la calidad de las organizaciones.";
 answers[11] = choices[11][2];
 units[11] = "18, 20";
 comments[11] = "Id Pregunta: 745. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 558 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Cu&aacute;ndo ha sido aprobada la Agenda Digital para Espa&ntilde;a?";
 choices[12]= new Array();
 choices[12][0] = "En 2015";
 choices[12][1] = "En 2013";
 choices[12][2] = "En 2016";
 choices[12][3] = "En 2007";
 answers[12] = choices[12][1];
 units[12] = "19";
 comments[12] = "Id Pregunta: 558. Agenda Digital";


//  Id pregunta: 109 Año de creación de pregunta: 2016
 questions[13]= "14)  Big Data:";
 choices[13]= new Array();
 choices[13][0] = "Solo aplica a datos generados m&aacute;quina a m&aacute;quina (M2M)";
 choices[13][1] = "No puede emplearse para tratar datos no estructurados";
 choices[13][2] = "Suele utilizar tecnolog&iacute;as relacionales a la hora de analizar los datos";
 choices[13][3] = "Ninguna de las anteriores";
 answers[13] = choices[13][3];
 units[13] = "73";
 comments[13] = "Id Pregunta: 109. ";


//  Id pregunta: 614 Año de creación de pregunta: 2016
 questions[14]= "15)  Dada la m&aacute;scara de red 255.255.240.0, &iquest;a qu&eacute; red pertenece la direcci&oacute;n IP 192.228.17.15?";
 choices[14]= new Array();
 choices[14][0] = "192.228.0.0";
 choices[14][1] = "192.228.8.0";
 choices[14][2] = "192.228.16.0";
 choices[14][3] = "192.228.17.0";
 answers[14] = choices[14][2];
 units[14] = "109";
 comments[14] = "Id Pregunta: 614. Junta de Extremadura A1 2015";


//  Id pregunta: 734 Año de creación de pregunta: 2016
 questions[15]= "16)  En el Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP el principio de transparencia:";
 choices[15]= new Array();
 choices[15][0] = "El seguimiento de la actividad de los funcionarios aumenta la eficacia de los servicios p&uacute;blicos.";
 choices[15][1] = "La transparencia facilita al ciudadano el acceso a los servicios p&uacute;blicos.";
 choices[15][2] = "Una continua monitorizaci&oacute;n de la actividad, junto a la evaluaci&oacute;n y difusi&oacute;n de resultados incrementa la satisfacci&oacute;n de los ciudadanos.";
 choices[15][3] = "El seguimiento y control de la actividad pol&iacute;tica disminuye las actividades ligadas a la corrupci&oacute;n.";
 answers[15] = choices[15][2];
 units[15] = "28";
 comments[15] = "Id Pregunta: 734. Estrategia TIC";


//  Id pregunta: 588 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Cu&aacute;ntos servicios se declararon compartidos en la primera declaraci&oacute;n?";
 choices[16]= new Array();
 choices[16][0] = "14";
 choices[16][1] = "11";
 choices[16][2] = "12";
 choices[16][3] = "15";
 answers[16] = choices[16][0];
 units[16] = "19";
 comments[16] = "Id Pregunta: 588. Estrategia TIC";


//  Id pregunta: 416 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Qu&eacute; art&iacute;culo de la LO 3/2007, regula la igualdad en el &aacute;mbito de la educaci&oacute;n superior:";
 choices[17]= new Array();
 choices[17][0] = "Art. 25 LO, 3/2007.";
 choices[17][1] = "Art. 23 LO, 3/2007.";
 choices[17][2] = "Art. 14 LO, 3/2007.";
 choices[17][3] = "Ninguna es correcta, es el art. 13.";
 answers[17] = choices[17][0];
 units[17] = "14";
 comments[17] = "Id Pregunta: 416. POLITICAS DE IGUALDAD";


//  Id pregunta: 375 Año de creación de pregunta: 2016
 questions[18]= "19)  Las relaciones entre el Derecho Comunitario y el Derecho nacional se caracterizan por:";
 choices[18]= new Array();
 choices[18][0] = "Complementariedad, por tratarse de un ordenamiento para los Estados miembros.";
 choices[18][1] = "Primac&iacute;a del Derecho Comunitario, puesto que se impone a los Estados miembros.";
 choices[18][2] = "Autonom&iacute;a del Derecho Comunitario frente al nacional.";
 choices[18][3] = "Todas las respuestas son correctas.";
 answers[18] = choices[18][3];
 units[18] = "5";
 comments[18] = "Id Pregunta: 375. UNION EUROPEA";


//  Id pregunta: 696 Año de creación de pregunta: 2016
 questions[19]= "20)  Se&ntilde;ale el que corresponde a un principio de integraci&oacute;n continua:";
 choices[19]= new Array();
 choices[19][0] = "Migraci&oacute;n manual y controlada a cada entorno de desarrollo";
 choices[19][1] = "Mantener un repositorio de c&oacute;digo.";
 choices[19][2] = "Reutilizaci&oacute;n de interfaces de usuario.";
 choices[19][3] = "Todos corresponden a principios de integraci&oacute;n continua.";
 answers[19] = choices[19][1];
 units[19] = "92";
 comments[19] = "Id Pregunta: 696. INTEGRACION CONTINUA";


//  Id pregunta: 851 Año de creación de pregunta: 2016
 questions[20]= "21)  Si disponemos de 8 discos SAS de 1TB netos configurados en RAID1, &iquest;de qu&eacute; capacidad neta se dispone en RAID1 en el sistema de almacenamiento?";
 choices[20]= new Array();
 choices[20][0] = "6 TB.";
 choices[20][1] = "8 TB.";
 choices[20][2] = "7 TB.";
 choices[20][3] = "4 TB.";
 answers[20] = choices[20][3];
 units[20] = "53";
 comments[20] = "Id Pregunta: 851. Xunta de Galicia 2015";


//  Id pregunta: 536 Año de creación de pregunta: 2016
 questions[21]= "22)  En el registro electr&oacute;nico general de apoderamientos, deber&aacute;n inscribirse, al menos, los de car&aacute;cter general otorgados por quien ostente la condici&oacute;n de interesado en un procedimiento administrativo a favor de representante:";
 choices[21]= new Array();
 choices[21][0] = "apud acta";
 choices[21][1] = "presencialmente";
 choices[21][2] = "electr&oacute;nicamente";
 choices[21][3] = "todas son correctas";
 answers[21] = choices[21][3];
 units[21] = "7";
 comments[21] = "Id Pregunta: 536. LEY 39/2015";


//  Id pregunta: 432 Año de creación de pregunta: 2016
 questions[22]= "23)  Las sociedades obligadas a presentar cuenta de p&eacute;rdidas y ganancias no abreviada, procurar&aacute;n incluir en su Consejo de Administraci&oacute;n un n&uacute;mero de mujeres que permita alcanzar la presencia equilibrada de mujeres y hombres en un plazo:";
 choices[22]= new Array();
 choices[22][0] = "De ocho a&ntilde;os.";
 choices[22][1] = "El d&iacute;a despu&eacute;s de la publicaci&oacute;n en el BOE de la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombre.";
 choices[22][2] = "Ambas son correctas.";
 choices[22][3] = "No existe un l&iacute;mite.";
 answers[22] = choices[22][0];
 units[22] = "14";
 comments[22] = "Id Pregunta: 432. POLITICAS DE IGUALDAD";


//  Id pregunta: 439 Año de creación de pregunta: 2016
 questions[23]= "24)  Sobre el Sistema de Interconexi&oacute;n de Registros (SIR):";
 choices[23]= new Array();
 choices[23][0] = "Es la infraestructura b&aacute;sica que permite el intercambio de asientos electr&oacute;nicos de registro entre los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[23][1] = "Permite eliminar el tr&aacute;nsito de papel entre administraciones, aumentando la eficiencia y eliminando los costes de manipulaci&oacute;n y remisi&oacute;n del papel, gracias a la generaci&oacute;n de copias aut&eacute;nticas electr&oacute;nicas de la documentaci&oacute;n presentada en los asientos de registro.";
 choices[23][2] = "No es necesario que la aplicaci&oacute;n de registro est&eacute; certificada con la norma SICRES 3.0.";
 choices[23][3] = "La integraci&oacute;n en SIR se realiza mediante aplicaciones de registro comunes como GEISER y ORVE o bien, siempre que se justifique, mediante aplicaciones previamente certificadas por la Comisi&oacute;n de Estrategia TIC.";
 answers[23] = choices[23][1];
 units[23] = "43";
 comments[23] = "Id Pregunta: 439. SERVICIOS COMUNES";


//  Id pregunta: 692 Año de creación de pregunta: 2016
 questions[24]= "25)  Se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[24]= new Array();
 choices[24][0] = "El Reglamento (UE) 910/2014 no prev&eacute; la emisi&oacute;n de certificados de firma electr&oacute;nica a favor de personas jur&iacute;dicas o entidades sin personalidad jur&iacute;dica";
 choices[24][1] = "Con la aprobaci&oacute;n del Reglamento (UE) 910/2014 queda derogada la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica";
 choices[24][2] = "El Reglamento (UE) 910/2014 desplaza desde el 1 de julio de 2016 los preceptos de la Ley 59/2003 que se opongan a su contenido";
 choices[24][3] = "A partir del 1 de julio de 2016 dejar&aacute;n de emitirse certificados de firma electr&oacute;nica de personas jur&iacute;dicas y entidades sin personalidad jur&iacute;dica, pudiendo en su lugar expedirse certificados de sello electr&oacute;nico o certificados de firma de persona f&iacute;sica representante";
 answers[24] = choices[24][1];
 units[24] = "77";
 comments[24] = "Id Pregunta: 692. http://www.minetad.gob.es/telecomunicaciones/es-ES/Servicios/FirmaElectronica/Documents/nota-web-certifs-pers-juridica.pdf";


//  Id pregunta: 784 Año de creación de pregunta: 2016
 questions[25]= "26)  Salvo las excepciones previstas por esta Ley, la organizaci&oacute;n de la Administraci&oacute;n General del Estado responde a los principios de:";
 choices[25]= new Array();
 choices[25][0] = "divisi&oacute;n funcional en Departamentos ministeriales y de gesti&oacute;n territorial integrada en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[25][1] = "gesti&oacute;n territorial integrada en Departamentos ministeriales y de divisi&oacute;n funcional en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[25][2] = "divisi&oacute;n funcional en Delegaciones del Gobierno y de gesti&oacute;n territorial integrada en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 choices[25][3] = "gesti&oacute;n territorial integrada en Delegaciones del Gobierno y de divisi&oacute;n funcional en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 answers[25] = choices[25][0];
 units[25] = "4, 7, 8, 9";
 comments[25] = "Id Pregunta: 784. Ley 40/2015";


//  Id pregunta: 138 Año de creación de pregunta: 2016
 questions[26]= "27)  La ley que obliga a todas las Administraciones a presentar equilibrio estructural en sus cuentas p&uacute;blicas y establece un l&iacute;mite de deuda como garant&iacute;a de sostenibilidad presupuestaria, es:";
 choices[26]= new Array();
 choices[26][0] = "La Ley Org&aacute;nica 2/2011";
 choices[26][1] = "La Ley Org&aacute;nica 2/2012";
 choices[26][2] = "La Ley Org&aacute;nica 3/2012";
 choices[26][3] = "La Ley Org&aacute;nica 2/2002";
 answers[26] = choices[26][1];
 units[26] = "12";
 comments[26] = "Id Pregunta: 138. Leyes modelo econ&oacute;mico";


//  Id pregunta: 139 Año de creación de pregunta: 2016
 questions[27]= "28)  Las siglas de SAREB, entidad privada creada por Real Decreto para ayudar al saneamiento del sector financiero espa&ntilde;ol, hacen referencia a:";
 choices[27]= new Array();
 choices[27][0] = "Sociedad de Gesti&oacute;n de Activos Procedentes de la Reestructuraci&oacute;n Bancaria.";
 choices[27][1] = "Static &amp; Active process for REsolution Bank.";
 choices[27][2] = "Sociedad de Ayudas Principales para la Resoluci&oacute;n Bancaria.";
 choices[27][3] = "Super Active REsponse for Banks";
 answers[27] = choices[27][0];
 units[27] = "12";
 comments[27] = "Id Pregunta: 139. Leyes modelo econ&oacute;mico";


//  Id pregunta: 411 Año de creación de pregunta: 2016
 questions[28]= "29)  Es objeto de la Ley de Igualdad efectiva de mujeres y hombres:";
 choices[28]= new Array();
 choices[28][0] = "Elaborar medidas de acci&oacute;n positiva.";
 choices[28][1] = "Hacer efectivo el derecho de igualdad de trato y de oportunidades entre mujeres y hombre.";
 choices[28][2] = "Ninguna es correcta.";
 choices[28][3] = "A y B son correctas.";
 answers[28] = choices[28][1];
 units[28] = "14";
 comments[28] = "Id Pregunta: 411. POLITICAS DE IGUALDAD";


//  Id pregunta: 492 Año de creación de pregunta: 2016
 questions[29]= "30)  El R&eacute;gimen Jur&iacute;dico de la Deuda del Estado se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[29]= new Array();
 choices[29][0] = "T&iacute;tulo V, Cap&iacute;tulo II, Secci&oacute;n 4.";
 choices[29][1] = "T&iacute;tulo V, Cap&iacute;tulo I, Secci&oacute;n 2.";
 choices[29][2] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[29][3] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[29] = choices[29][2];
 units[29] = "10";
 comments[29] = "Id Pregunta: 492. PRESUPUESTOS GENERALES";


//  Id pregunta: 530 Año de creación de pregunta: 2016
 questions[30]= "31)  La representaci&oacute;n podr&aacute; acreditarse:";
 choices[30]= new Array();
 choices[30][0] = "mediante cualquier t&iacute;tulo jur&iacute;dico";
 choices[30][1] = "mediante resoluci&oacute;n judicial especial";
 choices[30][2] = "&uacute;nicamente mediante poder notarial";
 choices[30][3] = "mediante cualquier medio v&aacute;lido en Derecho que deje constancia fidedigna de su existencia";
 answers[30] = choices[30][3];
 units[30] = "7";
 comments[30] = "Id Pregunta: 530. LEY 39/2015";


//  Id pregunta: 542 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Cu&aacute;l es el &oacute;rgano de la Comisi&oacute;n Europea encargado de la gobernanza TIC cuya misi&oacute;n es garantizar que la Comisi&oacute;n haga un uso eficaz de las tecnolog&iacute;as de la informaci&oacute;n y la comunicaci&oacute;n para el logro de sus objetivos organizativos y pol&iacute;ticos?";
 choices[31]= new Array();
 choices[31][0] = "La Direcci&oacute;n General de Inform&aacute;tica (DIGIT)";
 choices[31][1] = "Oficina del Organismo de Reguladores Europeos de las Comunicaciones Electr&oacute;nicas (ORECE)";
 choices[31][2] = "Agencia de Seguridad de las Redes y de la Informaci&oacute;n de la Uni&oacute;n Europea (ENISA)";
 choices[31][3] = "Instituto Europeo de Innovaci&oacute;n y Tecnolog&iacute;a (EIT)";
 answers[31] = choices[31][0];
 units[31] = "26";
 comments[31] = "Id Pregunta: 542. Gobernanza TIC";


//  Id pregunta: 698 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Qu&eacute; es SonarQube?";
 choices[32]= new Array();
 choices[32][0] = "Una m&eacute;trica de calidad orientada a estandarizar la evaluaci&oacute;n cualitativa del c&oacute;digo fuente.";
 choices[32][1] = "Una plataforma Open Source de inspecci&oacute;n continua de la calidad del c&oacute;digo.";
 choices[32][2] = "Una herramienta propietaria para la integraci&oacute;n continua, integrada en Apache Jenkins.";
 choices[32][3] = "Una herramienta multiplataforma para la evaluaci&oacute;n de la calidad en el c&oacute;digo desarrollada en VisualBasic 6.";
 answers[32] = choices[32][2];
 units[32] = "92";
 comments[32] = "Id Pregunta: 698. INTEGRACION CONTINUA";


//  Id pregunta: 735 Año de creación de pregunta: 2016
 questions[33]= "34)  Son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[33]= new Array();
 choices[33][0] = "Tranparencia, innovaci&oacute;n, Unidad y visi&oacute;n integral y Orientaci&oacute;n al usuario del servicio";
 choices[33][1] = "Tranparencia, Colaboraci&oacute;n y alianzas, Orientaci&oacute;n al usuario del servicio y Reutilizaci&oacute;n";
 choices[33][2] = "Reutilizaci&oacute;n, Seguridad, Orientaci&oacute;n al usuario del servicio y Transparencia";
 choices[33][3] = "Ninguna de las anteriores";
 answers[33] = choices[33][0];
 units[33] = "28";
 comments[33] = "Id Pregunta: 735. Estrategia TIC";


//  Id pregunta: 68 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Cu&aacute;l de las siguientes opciones se refiere al conjunto de metodolog&iacute;as, procesos, arquitecturas y tecnolog&iacute;as que permiten reunir, depurar y transformar datos de los sistemas transaccionales e informaci&oacute;n desestructurada en informaci&oacute;n estructurada, para su explotaci&oacute;n directa o para su an&aacute;lisis y conversi&oacute;n en conocimiento, dando as&iacute; soporte a la toma de decisiones sobre el negocio?";
 choices[34]= new Array();
 choices[34][0] = "Data Mining (miner&iacute;a de datos)";
 choices[34][1] = "Business Intelligence (inteligencia de negocio)";
 choices[34][2] = "Data Warehouse (almac&eacute;n de datos)";
 choices[34][3] = "An&aacute;lisis OLTP (procesamiento en l&iacute;nea transaccional)";
 answers[34] = choices[34][1];
 units[34] = "72";
 comments[34] = "Id Pregunta: 68. AGE A1 2015";


//  Id pregunta: 121 Año de creación de pregunta: 2016
 questions[35]= "36)  Se&ntilde;ale la respuesta incorrecta respecto al Consejo de Transparencia y Buen Gobierno";
 choices[35]= new Array();
 choices[35][0] = "Las resoluciones del Consejo se publican en el Portal de la Transparencia";
 choices[35][1] = "Las resoluciones del Consejo se publican en la p&aacute;gina web institucional del organismo";
 choices[35][2] = "La memoria anual del Consejo ser&aacute; publicada integramente en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 choices[35][3] = "Un resumen de la memoria anual del Consejo ser&aacute; publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 answers[35] = choices[35][2];
 units[35] = "22";
 comments[35] = "Id Pregunta: 121. ";


//  Id pregunta: 757 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Cu&aacute;l de las siguientes no es una prioridad propuesta por la Estrategia Europa 2020?";
 choices[36]= new Array();
 choices[36][0] = "Crecimiento sostenible";
 choices[36][1] = "Crecimiento inteligente";
 choices[36][2] = "Crecimiento digital";
 choices[36][3] = "Crecimiento integrador";
 answers[36] = choices[36][2];
 units[36] = "19";
 comments[36] = "Id Pregunta: 757. Europa 2020";


//  Id pregunta: 772 Año de creación de pregunta: 2016
 questions[37]= "38)  Las Administraciones P&uacute;blicas act&uacute;an para el cumplimiento de sus fines con:";
 choices[37]= new Array();
 choices[37][0] = "personalidad jur&iacute;dica propia";
 choices[37][1] = "personalidad jur&iacute;dica &uacute;nica";
 choices[37][2] = "personalidad jur&iacute;dica plena";
 choices[37][3] = "personalidad jur&iacute;dica f&iacute;sica";
 answers[37] = choices[37][1];
 units[37] = "4, 7, 8, 9";
 comments[37] = "Id Pregunta: 772. Ley 40/2015";


//  Id pregunta: 399 Año de creación de pregunta: 2016
 questions[38]= "39)  Las medidas espec&iacute;ficas que adoptar&aacute;n los Poderes P&uacute;blicos a favor de las mujeres para corregir situaciones patentes de desigualdad de hecho con respecto a los hombres, se denominan:";
 choices[38]= new Array();
 choices[38][0] = "Acciones de discriminaci&oacute;n.";
 choices[38][1] = "Acciones positivas.";
 choices[38][2] = "Acciones negativas.";
 choices[38][3] = "Acciones neutras.";
 answers[38] = choices[38][1];
 units[38] = "14";
 comments[38] = "Id Pregunta: 399. POLITICAS DE IGUALDAD";


//  Id pregunta: 402 Año de creación de pregunta: 2016
 questions[39]= "40)  El principio de igualdad de trato y oportunidades entre mujeres y hombres tiene car&aacute;cter:";
 choices[39]= new Array();
 choices[39][0] = "Parcial.";
 choices[39][1] = "Sectorial.";
 choices[39][2] = "Tranversal.";
 choices[39][3] = "Vertical.";
 answers[39] = choices[39][2];
 units[39] = "14";
 comments[39] = "Id Pregunta: 402. POLITICAS DE IGUALDAD";


//  Id pregunta: 654 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;Qu&eacute; significa la tolerancia a partici&oacute;n dentro del teorema CAP?";
 choices[40]= new Array();
 choices[40][0] = "El sistema podr&aacute; seguir procesando una petici&oacute;n aunque se pierda la conectividad con algun nodo";
 choices[40][1] = "Las modificaciones se aplican a todos los nodos en su conjunto en el mismo momento";
 choices[40][2] = "Cualquier peticion recibida en un nodo debe tener respuesta";
 choices[40][3] = "El teorema CAP no habla de tolerancia a particiones";
 answers[40] = choices[40][0];
 units[40] = "73";
 comments[40] = "Id Pregunta: 654. ";


//  Id pregunta: 421 Año de creación de pregunta: 2016
 questions[41]= "42)  Las empresas deber&aacute;n promover condiciones de trabajo, arbitrar procedimientos espec&iacute;ficos y dar cauces a las denuncias o reclamaciones, para evitar:";
 choices[41]= new Array();
 choices[41][0] = "El acoso sexual.";
 choices[41][1] = "El acoso por raz&oacute;n del sexo.";
 choices[41][2] = "Ambas son correctas.";
 choices[41][3] = "A y B son incorrectas.";
 answers[41] = choices[41][2];
 units[41] = "14";
 comments[41] = "Id Pregunta: 421. POLITICAS DE IGUALDAD";


//  Id pregunta: 638 Año de creación de pregunta: 2016
 questions[42]= "43)  Indique cu&aacute;l de las siguientes afirmaciones es la correcta:";
 choices[42]= new Array();
 choices[42][0] = "Linux dispone de los tres principales protocolos de red para sistemas UNIX: Novel, TCP/IP y UUCP.";
 choices[42][1] = "Linux dispone &uacute;nicamente del protocolo TCP/IP.";
 choices[42][2] = "Linux dispone de todos los protocolos de red existentes.";
 choices[42][3] = "Linux dispone de los dos principales protocolos de red para sistemas UNIX: TCP/IP y UUCP.";
 answers[42] = choices[42][3];
 units[42] = "57";
 comments[42] = "Id Pregunta: 638. Junta de Extremadura A1 2015";


//  Id pregunta: 234 Año de creación de pregunta: 2016
 questions[43]= "44)  De conformidad con el Art&iacute;culo 97 de la Constituci&oacute;n Espa&ntilde;ola, corresponde dirigir la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado:";
 choices[43]= new Array();
 choices[43][0] = "Al Jefe del Estado, por corresponderle el mando supremo de las Fuerzas Armadas.";
 choices[43][1] = "A las Cortes Generales, como representaci&oacute;n del pueblo espa&ntilde;ol.";
 choices[43][2] = "Al Congreso de los Diputados.";
 choices[43][3] = "Al Gobierno.";
 answers[43] = choices[43][0];
 units[43] = "1";
 comments[43] = "Id Pregunta: 234. CONSTITUCION1978";


//  Id pregunta: 785 Año de creación de pregunta: 2016
 questions[44]= "45)  La Administraci&oacute;n General del Estado comprende (se&ntilde;ala la incorrecta):";
 choices[44]= new Array();
 choices[44][0] = "la Organizaci&oacute;n Central, que integra los Ministerios y los servicios comunes";
 choices[44][1] = "la Organizaci&oacute;n Territorial";
 choices[44][2] = "la Organizaci&oacute;n sectorial";
 choices[44][3] = "la Administraci&oacute;n General del Estado en el exterior";
 answers[44] = choices[44][2];
 units[44] = "4, 7, 8, 9";
 comments[44] = "Id Pregunta: 785. Ley 40/2015";


//  Id pregunta: 120 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Cu&aacute;l es el Real Decreto por el que se aprueba el Estatuto del Consejo de Transparencia y Buen Gobierno?";
 choices[45]= new Array();
 choices[45][0] = "Real Decreto 806/2014, de 19 de septiembre";
 choices[45][1] = "Real Decreto 951/2015, de 23 de octubre";
 choices[45][2] = "Real Decreto 1065/2015, de 27 de noviembre";
 choices[45][3] = "Real Decreto 919/2014, de 31 de octubre";
 answers[45] = choices[45][3];
 units[45] = "22";
 comments[45] = "Id Pregunta: 120. ";


//  Id pregunta: 797 Año de creación de pregunta: 2016
 questions[46]= "47)  Los elementos organizativos b&aacute;sicos de las estructuras org&aacute;nicas son:";
 choices[46]= new Array();
 choices[46][0] = "los &oacute;rganos administrativos";
 choices[46][1] = "las entidades dependientes";
 choices[46][2] = "las unidades administrativas";
 choices[46][3] = "los servicios comunes";
 answers[46] = choices[46][2];
 units[46] = "4, 7, 8, 9";
 comments[46] = "Id Pregunta: 797. Ley 40/2015";


//  Id pregunta: 809 Año de creación de pregunta: 2016
 questions[47]= "48)  Los Subdirectores generales:";
 choices[47]= new Array();
 choices[47][0] = "son los responsables inmediatos, bajo la supervisi&oacute;n del Secretario general o del titular del &oacute;rgano del que dependan, de la ejecuci&oacute;n de aquellos proyectos, objetivos o actividades que les sean asignados, as&iacute; como de la gesti&oacute;n ordinaria de los asuntos de la competencia de la Subdirecci&oacute;n General";
 choices[47][1] = "ser&aacute;n nombrados, respetando los principios de igualdad, m&eacute;rito y capacidad, y cesados por el Ministro, Secretario de Estado o Subsecretario del que dependan";
 choices[47][2] = "sus nombramientos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, o de otras Administraciones, cuando as&iacute; lo prevean las normas de aplicaci&oacute;n, pertenecientes al Subgrupo A2";
 choices[47][3] = "todas son correctas";
 answers[47] = choices[47][1];
 units[47] = "4, 7, 8, 9";
 comments[47] = "Id Pregunta: 809. Ley 40/2015";


//  Id pregunta: 806 Año de creación de pregunta: 2016
 questions[48]= "49)  A los Directores generales les corresponde (se&ntilde;ala la incorrecta):";
 choices[48]= new Array();
 choices[48][0] = "proponer los proyectos de su Direcci&oacute;n general para alcanzar los objetivos establecidos por el Ministro, dirigir su ejecuci&oacute;n y controlar su adecuado cumplimiento";
 choices[48][1] = "solicitar del Ministerio de Hacienda y Administraciones P&uacute;blicas la afectaci&oacute;n o el arrendamiento de los inmuebles necesarios para el cumplimiento de los fines de los servicios a cargo del Departamento";
 choices[48][2] = "ejercer las competencias atribuidas a la Direcci&oacute;n general y las que le sean desconcentradas o delegadas";
 choices[48][3] = "impulsar y supervisar las actividades que forman parte de la gesti&oacute;n ordinaria del &oacute;rgano directivo y velar por el buen funcionamiento de los &oacute;rganos y unidades dependientes y del personal integrado en los mismos";
 answers[48] = choices[48][1];
 units[48] = "4, 7, 8, 9";
 comments[48] = "Id Pregunta: 806. Ley 40/2015";


//  Id pregunta: 25 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;Mediante qu&eacute; tipo de objetos se implementa el acceso a los recursos gestionados con la tecnolog&iacute;a JMX?";
 choices[49]= new Array();
 choices[49][0] = "SessionBean";
 choices[49][1] = "JavaBean";
 choices[49][2] = "MBeans";
 choices[49][3] = "MessageDrivenBean";
 answers[49] = choices[49][2];
 units[49] = "64";
 comments[49] = "Id Pregunta: 25. AGE A1 2015";


//  Id pregunta: 459 Año de creación de pregunta: 2016
 questions[50]= "51)  Seg&uacute;n el art&iacute;culo 41 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, las operaciones financieras que se distinguen son:";
 choices[50]= new Array();
 choices[50][0] = "Enajenaci&oacute;n de inversiones reales y transferencias de capital.";
 choices[50][1] = "Pasivos financieros y transferencias de capital.";
 choices[50][2] = "Activos financieros y pasivos financieros.";
 choices[50][3] = "Activos financieros y enajenaci&oacute;n de inversiones reales.";
 answers[50] = choices[50][2];
 units[50] = "10";
 comments[50] = "Id Pregunta: 459. PRESUPUESTOS GENERALES";


//  Id pregunta: 197 Año de creación de pregunta: 2016
 questions[51]= "52)  Los reglamentos aprobados en el ejercicio de la potestad reglamentaria no pueden:";
 choices[51]= new Array();
 choices[51][0] = "Establecer tributos.";
 choices[51][1] = "Desarrollar lo establecido en una Ley.";
 choices[51][2] = "Modificar los plazos para presentar recursos administrativos.";
 choices[51][3] = "Crear un &oacute;rgano colegiado interministerial.";
 answers[51] = choices[51][0];
 units[51] = "1";
 comments[51] = "Id Pregunta: 197. CONSTITUCION1978";


//  Id pregunta: 364 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;En qu&eacute; fecha entr&oacute; en vigor el Tratado de Amsterdam?:";
 choices[52]= new Array();
 choices[52][0] = "El 1 de junio de 1999.";
 choices[52][1] = "El 1 de mayo de 1999.";
 choices[52][2] = "El 1 de abril de 1999.";
 choices[52][3] = "El 1 de marzo de 1999.";
 answers[52] = choices[52][1];
 units[52] = "5";
 comments[52] = "Id Pregunta: 364. UNION EUROPEA";


//  Id pregunta: 650 Año de creación de pregunta: 2016
 questions[53]= "54)  Indica cu&aacute;l de las siguientes caracter&iacute;sticas del protocolo IP versi&oacute;n 6 es incorrecta.";
 choices[53]= new Array();
 choices[53][0] = "El tama&ntilde;o de la direcci&oacute;n IP es de 128 bits.";
 choices[53][1] = "Aumento de la flexibilidad en el direccionamiento.";
 choices[53][2] = "Define una cabecera de extensi&oacute;n que proporciona autenticaci&oacute;n.";
 choices[53][3] = "La cabecera IP versi&oacute;n 6 obligatoria es de tama&ntilde;o variable.";
 answers[53] = choices[53][3];
 units[53] = "109";
 comments[53] = "Id Pregunta: 650. Junta de Extremadura A1 2015";


//  Id pregunta: 560 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;Cu&aacute;l de los siguientes no es un obst&aacute;culo identificado por la Comisi&oacute;n para el desarrollo de la Agenda Digital europea?";
 choices[54]= new Array();
 choices[54][0] = "El incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes";
 choices[54][1] = "La falta de inversi&oacute;n en campa&ntilde;as de comunicaci&oacute;n en los pa&iacute;ses miembros";
 choices[54][2] = "Las carencias en la alfabetizaci&oacute;n y la capacitaci&oacute;n digitales";
 choices[54][3] = "La ausencia de inversi&oacute;n en las redes";
 answers[54] = choices[54][1];
 units[54] = "19";
 comments[54] = "Id Pregunta: 560. Agenda Digital";


//  Id pregunta: 369 Año de creación de pregunta: 2016
 questions[55]= "56)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[55]= new Array();
 choices[55][0] = "Son actos individuales no normativos.";
 choices[55][1] = "Poseen alcance general.";
 choices[55][2] = "Son actos normativos.";
 choices[55][3] = "No son obligatorias.";
 answers[55] = choices[55][0];
 units[55] = "5";
 comments[55] = "Id Pregunta: 369. UNION EUROPEA";


//  Id pregunta: 280 Año de creación de pregunta: 2016
 questions[56]= "57)  El pacto fiscal europeo de 2012 incluye:";
 choices[56]= new Array();
 choices[56][0] = "Un conjunto de reglas, llamadas &quot;reglas de oro&quot;, que son vinculantes en la UE para el principio de equilibrio presupuestario.";
 choices[56][1] = "Un compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,6% de la PIB.";
 choices[56][2] = "Un compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional, lo cual no necesita ser verificado por el Tribunal de Justicia de la Uni&oacute;n Europea.";
 choices[56][3] = "La obligaci&oacute;n de mantener siempre el d&eacute;ficit p&uacute;blico por debajo del 2.8 % del PIB.";
 answers[56] = choices[56][0];
 units[56] = "5";
 comments[56] = "Id Pregunta: 280. UNION EUROPEA";


//  Id pregunta: 585 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Qu&eacute; &oacute;rgano es el responsable de la implantaci&oacute;n de los medios y servicios compartidos?";
 choices[57]= new Array();
 choices[57][0] = "La CETIC";
 choices[57][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[57][2] = "La DTIC";
 choices[57][3] = "Ninguno de los anteriores";
 answers[57] = choices[57][1];
 units[57] = "19";
 comments[57] = "Id Pregunta: 585. Estrategia TIC";


//  Id pregunta: 527 Año de creación de pregunta: 2016
 questions[58]= "59)  Los interesados con capacidad de obrar podr&aacute;n actuar por medio de representante:";
 choices[58]= new Array();
 choices[58][0] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 choices[58][1] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[58][2] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[58][3] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 answers[58] = choices[58][2];
 units[58] = "7";
 comments[58] = "Id Pregunta: 527. LEY 39/2015";


//  Id pregunta: 145 Año de creación de pregunta: 2016
 questions[59]= "60)  Puede interponerse un recurso extraordinario de revisi&oacute;n:";
 choices[59]= new Array();
 choices[59][0] = "Ante actos firmes en la v&iacute;a administrativa cuando al dictarlos se hubiera incurrido en error de hecho, que resulte de los propios documentos incorporados al expediente";
 choices[59][1] = "Ante actos firmes en la v&iacute;a administrativa cuando en la resoluci&oacute;n hayan influido esencialmente documentos o testimonios declarados falsos por sentencia judicial firme, anterior o posterior a aquella resoluci&oacute;n";
 choices[59][2] = "Ante actos firmes en la v&iacute;a administrativa cuando la resoluci&oacute;n se hubiese dictado como consecuencia de prevaricaci&oacute;n, cohecho, violencia, maquinaci&oacute;n fraudulenta u otra conducta punible y se haya declarado as&iacute; en virtud de sentencia judicial firme";
 choices[59][3] = "Todas las anteriores son ciertas";
 answers[59] = choices[59][3];
 units[59] = "8";
 comments[59] = "Id Pregunta: 145. Ley 39/2015, Art&iacute;culo 125";


//  Id pregunta: 218 Año de creación de pregunta: 2016
 questions[60]= "61)  Seg&uacute;n el T&iacute;tulo III &quot;De las Cortes Generales&quot; de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras podr&aacute;n:";
 choices[60]= new Array();
 choices[60][0] = "Recibir peticiones individuales y colectivas, siempre por escrito, quedando prohibida la presentaci&oacute;n directa por manifestaciones ciudadanas.";
 choices[60][1] = "Delegar en las Comisiones Legislativas Permanentes la aprobaci&oacute;n de proyectos o proposiciones de ley relativas a cuestiones internacionales.";
 choices[60][2] = "Reunirse en sesi&oacute;n extraordinaria a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 choices[60][3] = "Nombrar conjuntamente Comisiones de Investigaci&oacute;n sobre asuntos de inter&eacute;s p&uacute;blico. Sus conclusiones ser&aacute;n vinculantes para los Tribunales.";
 answers[60] = choices[60][0];
 units[60] = "1";
 comments[60] = "Id Pregunta: 218. CONSTITUCION1978";


//  Id pregunta: 717 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;A trav&eacute;s de qu&eacute; empresa surgen las metodolog&iacute;as lean?";
 choices[61]= new Array();
 choices[61][0] = "Ford";
 choices[61][1] = "Google";
 choices[61][2] = "Toyota";
 choices[61][3] = "Facebook";
 answers[61] = choices[61][2];
 units[61] = "34";
 comments[61] = "Id Pregunta: 717. Metodologias Lean";


//  Id pregunta: 587 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;Qui&eacute;n y cu&aacute;ndo presenta el informe de seguimiento sobre el grado de avance de la implementaci&oacute;n de la Estrategia TIC?";
 choices[62]= new Array();
 choices[62][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, anualmente";
 choices[62][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, bienalmente";
 choices[62][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, bienalmente";
 choices[62][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, sin periodicidad definida";
 answers[62] = choices[62][0];
 units[62] = "19";
 comments[62] = "Id Pregunta: 587. Estrategia TIC";


//  Id pregunta: 559 Año de creación de pregunta: 2016
 questions[63]= "64)  Uno de los objetivos de la Agenda Digital para Espa&ntilde;a es desarrollar la econom&iacute;a digital, &iquest;qu&eacute; actuaciones se deben desarrollar para lograr esto?";
 choices[63]= new Array();
 choices[63][0] = "Impulsar la producci&oacute;n y distribuci&oacute;n a trav&eacute;s de Internet de contenidos digitales";
 choices[63][1] = "Favorecer la internacionalizaci&oacute;n de las empresas tecnol&oacute;gicas";
 choices[63][2] = "Incentivar el uso transformador de las TIC en nuestras empresas";
 choices[63][3] = "Todos los anteriores";
 answers[63] = choices[63][3];
 units[63] = "19";
 comments[63] = "Id Pregunta: 559. Agenda Digital";


//  Id pregunta: 750 Año de creación de pregunta: 2016
 questions[64]= "65)  Es falso que:";
 choices[64]= new Array();
 choices[64][0] = "Son rasgos del modelo burocr&aacute;tico el pleno sometimiento al ordenamiento jur&iacute;dico y la impersonalidad en las relaciones.";
 choices[64][1] = "La Nueva Gesti&oacute;n P&uacute;blica ha sido el paradigma de reforma administrativa prevaleciente hasta principios de los 90, que tuvo gran influencia en los pa&iacute;ses angloamericanos y n&oacute;rdicos.";
 choices[64][2] = "Es un rasgo de la Nueva Gesti&oacute;n P&uacute;blica la terciarizaci&oacute;n de las actividades auxiliares o de apoyo, que pasan a ser licitadas competitivamente en el mercado.";
 choices[64][3] = "Una de las desventajas del modelo de la gobernanza es las redes pueden obstaculizar los cambios e innovaciones pol&iacute;ticos al dar un peso excesivo a los diversos intereses implicados.";
 answers[64] = choices[64][1];
 units[64] = "18, 20";
 comments[64] = "Id Pregunta: 750. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 836 Año de creación de pregunta: 2016
 questions[65]= "66)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta incorrecta.";
 choices[65]= new Array();
 choices[65][0] = "La realizaci&oacute;n de actividades de car&aacute;cter material o t&eacute;cnico de la competencia de los &oacute;rganos administrativos o de las Entidades de Derecho P&uacute;blico podr&aacute; ser encomendada a otros &oacute;rganos o Entidades de Derecho P&uacute;blico de la misma o de distinta Administraci&oacute;n, siempre que entre sus competencias est&eacute;n esas actividades, por razones de eficacia o cuando no se posean los medios t&eacute;cnicos id&oacute;neos para su desempe&ntilde;o.";
 choices[65][1] = "Las encomiendas de gesti&oacute;n podr&aacute;n tener por objeto prestaciones propias de los contratos regulados en la legislaci&oacute;n de contratos del sector p&uacute;blico. En tal caso, su naturaleza y r&eacute;gimen jur&iacute;dico se ajustar&aacute; a lo previsto en &eacute;sta.";
 choices[65][2] = "La encomienda de gesti&oacute;n no supone cesi&oacute;n de la titularidad de la competencia ni de los elementos sustantivos de su ejercicio, siendo responsabilidad del &oacute;rgano o Entidad encomendante dictar cuantos actos o resoluciones de car&aacute;cter jur&iacute;dico den soporte o en los que se integre la concreta actividad material objeto de encomienda.";
 choices[65][3] = "En todo caso, la Entidad u &oacute;rgano encomendado tendr&aacute; la condici&oacute;n de encargado del tratamiento de los datos de car&aacute;cter personal a los que pudiera tener acceso en ejecuci&oacute;n de la encomienda de gesti&oacute;n, si&eacute;ndole de aplicaci&oacute;n lo dispuesto en la normativa de protecci&oacute;n de datos de car&aacute;cter personal.";
 answers[65] = choices[65][1];
 units[65] = "4, 7, 8, 9";
 comments[65] = "Id Pregunta: 836. Ley 40/2015";


//  Id pregunta: 802 Año de creación de pregunta: 2016
 questions[66]= "67)  Los Secretarios generales t&eacute;cnicos:";
 choices[66]= new Array();
 choices[66][0] = "se encuentran bajo la inmediata dependencia del Subsecretario";
 choices[66][1] = "tendr&aacute;n las competencias sobre servicios comunes que les atribuya el Real Decreto de estructura del Departamento";
 choices[66][2] = "tendr&aacute;n las competencias relativas a producci&oacute;n normativa, asistencia jur&iacute;dica y publicaciones";
 choices[66][3] = "todas son correctas";
 answers[66] = choices[66][3];
 units[66] = "4, 7, 8, 9";
 comments[66] = "Id Pregunta: 802. Ley 40/2015";


//  Id pregunta: 186 Año de creación de pregunta: 2016
 questions[67]= "68)  En cuanto a las fuentes del derecho, las normas jur&iacute;dicas contenidas en los tratados internacionales:";
 choices[67]= new Array();
 choices[67][0] = "ser&aacute;n de aplicaci&oacute;n directa en Espa&ntilde;a-";
 choices[67][1] = "ser&aacute;n de aplicaci&oacute;n directa y pasar&aacute;n a formar parte del ordenamiento interno una vez ratificadas por Espa&ntilde;a.";
 choices[67][2] = "no ser&aacute;n de aplicaci&oacute;n directa en Espapa en tanto no hayan pasado a formar parte ddel ordenamiento interno mediante su publicaci&oacute;n oficial en Espa&ntilde;a.";
 choices[67][3] = "ratificados por Espala y publicadas en el BOE, no son fuente de derecho.";
 answers[67] = choices[67][2];
 units[67] = "1";
 comments[67] = "Id Pregunta: 186. CONSTITUCION1978";


//  Id pregunta: 322 Año de creación de pregunta: 2016
 questions[68]= "69)  El Tribunal de Justicia est&aacute; formado por:";
 choices[68]= new Array();
 choices[68][0] = "Un Juez de cada Estado miembro.";
 choices[68][1] = "Por dos Jueces de cada Estado miembro.";
 choices[68][2] = "Por veinte Jueces.";
 choices[68][3] = "Por ocho Jueces.";
 answers[68] = choices[68][0];
 units[68] = "5";
 comments[68] = "Id Pregunta: 322. UNION EUROPEA";


//  Id pregunta: 601 Año de creación de pregunta: 2016
 questions[69]= "70)  Los criptosistemas pueden clasificarse en:";
 choices[69]= new Array();
 choices[69][0] = "Concretos, Estables e Inestables.";
 choices[69][1] = "Sim&eacute;tricos, Paralelos y Referenciales.";
 choices[69][2] = "Asim&eacute;tricos, Referenciales y Concretos.";
 choices[69][3] = "Sim&eacute;tricos, Asim&eacute;tricos e H&iacute;bridos.";
 answers[69] = choices[69][3];
 units[69] = "76";
 comments[69] = "Id Pregunta: 601. Junta de Extremadura A1 2015";


//  Id pregunta: 326 Año de creación de pregunta: 2016
 questions[70]= "71)  La Mesa del Parlamento estar&aacute; compuesta por:";
 choices[70]= new Array();
 choices[70][0] = "El Presidente, doce Vicepresidentes y los Cuestores.";
 choices[70][1] = "El Presidente, diez Vicepresidentes y los Cuestores.";
 choices[70][2] = "El Presidente, dos Vicepresidentes y los Cuestores.";
 choices[70][3] = "El Presidente, catorce Vicepresidentes y los Cuestores.";
 answers[70] = choices[70][3];
 units[70] = "5";
 comments[70] = "Id Pregunta: 326. UNION EUROPEA";


//  Id pregunta: 592 Año de creación de pregunta: 2016
 questions[71]= "72)  Seg&uacute;n el Plan de Transformaci&oacute;n Digital de la AGE, &iquest;con qu&eacute; frecuencia de realizar&aacute;n nuevas declaraciones de servicios compartidos?";
 choices[71]= new Array();
 choices[71][0] = "Anualmente";
 choices[71][1] = "Bienalmente";
 choices[71][2] = "Cada cuatro a&ntilde;os";
 choices[71][3] = "No se define ninguna periodicidad";
 answers[71] = choices[71][1];
 units[71] = "19";
 comments[71] = "Id Pregunta: 592. Estrategia TIC. Se indica en la l&iacute;nea de acci&oacute;n 6";


//  Id pregunta: 641 Año de creación de pregunta: 2016
 questions[72]= "73)  La estructura de un Directorio Activo se basa en los siguientes conceptos:";
 choices[72]= new Array();
 choices[72][0] = "Directorios, Unidades f&iacute;sicas y Usuarios.";
 choices[72][1] = "Dominio, Unidad Organizativa, Grupos y Objetos.";
 choices[72][2] = "Unidades f&iacute;sicas, Unidades l&oacute;gicas y Directorios.";
 choices[72][3] = "Ficheros, Directorios, Particiones y Unidades.";
 answers[72] = choices[72][1];
 units[72] = "58";
 comments[72] = "Id Pregunta: 641. Junta de Extremadura A1 2015";


//  Id pregunta: 480 Año de creación de pregunta: 2016
 questions[73]= "74)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el &aacute;mbito del Ministerio de Defensa y de la Seguridad Social, el control se ejercer&aacute; a trav&eacute;s de:";
 choices[73]= new Array();
 choices[73][0] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[73][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[73][2] = "Las respuestas a) b) no son correctas.";
 choices[73][3] = "Las respuestas a) y b) son correctas.";
 answers[73] = choices[73][3];
 units[73] = "10";
 comments[73] = "Id Pregunta: 480. PRESUPUESTOS GENERALES";


//  Id pregunta: 826 Año de creación de pregunta: 2016
 questions[74]= "75)  La recusaci&oacute;n pueden promoverla...";
 choices[74]= new Array();
 choices[74][0] = "Cualquier &oacute;rgano";
 choices[74][1] = "El interesado";
 choices[74][2] = "El interesado y el superior jer&aacute;rquico del &oacute;rgano de que se trate";
 choices[74][3] = "El interesado, el superior jer&aacute;rquico del &oacute;rgano de que se trate y el propio &oacute;rgano";
 answers[74] = choices[74][0];
 units[74] = "4, 7, 8, 9";
 comments[74] = "Id Pregunta: 826. Ley 40/2015";


