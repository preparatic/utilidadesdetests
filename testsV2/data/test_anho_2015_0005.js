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

//  Id pregunta: 10575 AÃ±o de creación de pregunta: 2015-01-01
 questions[0]= "1)  Son mecanismos que facilitan la interoperabilidad:";
 choices[0]= new Array();
 choices[0][0] = "SCSP, SIR, SOAP y REST.";
 choices[0][1] = "SCSP, SIR y SAML.";
 choices[0][2] = "A y B son correctas.";
 choices[0][3] = "A y B son incorrectas.";
 answers[0] = choices[0][2];
 units[0] = "44";
 comments[0] = "Id Pregunta: 10575. ";


//  Id pregunta: 10603 AÃ±o de creación de pregunta: 2015-01-01
 questions[1]= "2)  Amazon EC2 y Rackpace son ejemplos de:";
 choices[1]= new Array();
 choices[1][0] = "SaaS";
 choices[1][1] = "IaaS";
 choices[1][2] = "PaaS";
 choices[1][3] = "Nube h&iacute;bridas";
 answers[1] = choices[1][1];
 units[1] = "47";
 comments[1] = "Id Pregunta: 10603. ";


//  Id pregunta: 10604 AÃ±o de creación de pregunta: 2015-01-01
 questions[2]= "3)  SET es:";
 choices[2]= new Array();
 choices[2][0] = "Una tecnolog&iacute;a definida por MasterCard con el fin de verificar la identidad de los titulares que efect&uacute;an compras por Internet.";
 choices[2][1] = "Un sistema de micropagos.";
 choices[2][2] = "Un protocolo est&aacute;ndar para el pago remoto con tarjetas de cr&eacute;dito.";
 choices[2][3] = "Un negocio de comercio electr&oacute;nico que permite realizar pagos o transferencias monetarias a trav&eacute;s de Internet.";
 answers[2] = choices[2][2];
 units[2] = "70";
 comments[2] = "Id Pregunta: 10604. ";


//  Id pregunta: 10608 AÃ±o de creación de pregunta: 2015-01-01
 questions[3]= "4)  El formato de redifusi&oacute;n web Atom est&aacute; estandarizado en:";
 choices[3]= new Array();
 choices[3][0] = "IETF RFC 1738";
 choices[3][1] = "IETF RFC 1392";
 choices[3][2] = "IETF RFC 2616";
 choices[3][3] = "IETF RFC 4287";
 answers[3] = choices[3][3];
 units[3] = "69";
 comments[3] = "Id Pregunta: 10608. ";


//  Id pregunta: 10611 AÃ±o de creación de pregunta: 2015-01-01
 questions[4]= "5)  En una arquitectura PKI, la Autoridad de Validaci&oacute;n:";
 choices[4]= new Array();
 choices[4][0] = "Verifica la identidad del titular antes de la expedici&oacute;n del certificado.";
 choices[4][1] = "Comprueba si un certificado ha sido revocado mediante servicios de directorio, CRL y OCSP.";
 choices[4][2] = "Expide, gestiona y revoca certificados digitales.";
 choices[4][3] = "Procesa solicitudes de revocaci&oacute;n de certificados.";
 answers[4] = choices[4][1];
 units[4] = "74";
 comments[4] = "Id Pregunta: 10611. ";


//  Id pregunta: 10614 AÃ±o de creación de pregunta: 2015-01-01
 questions[5]= "6)  Elija la opci&oacute;n correcta:";
 choices[5]= new Array();
 choices[5][0] = "La copia de seguridad incremental hace una copia de seguridad de todos los archivos.";
 choices[5][1] = "La copia de seguridad diferencial hace una copia de seguridad de todos los archivos.";
 choices[5][2] = "La copia de seguridad diferencial requiere m&aacute;s espacio en cinta y tiempo que la copia de seguridad incremental.";
 choices[5][3] = "La copia de seguridad incremental hace una copia de seguridad solo de los archivos que han cambiado desde la &uacute;ltima copia de seguridad diferencial.";
 answers[5] = choices[5][2];
 units[5] = "48";
 comments[5] = "Id Pregunta: 10614. ";


//  Id pregunta: 10615 AÃ±o de creación de pregunta: 2015-01-01
 questions[6]= "7)  Marque la herramienta que no es una soluci&oacute;n ORM (Object-Relational Mapping):";
 choices[6]= new Array();
 choices[6][0] = "IBATIS";
 choices[6][1] = "Hibernate";
 choices[6][2] = "CODD";
 choices[6][3] = "Todas lo son.";
 answers[6] = choices[6][2];
 units[6] = "58";
 comments[6] = "Id Pregunta: 10615. ";


//  Id pregunta: 10624 AÃ±o de creación de pregunta: 2015-01-01
 questions[7]= "8)  Una sistema de gesti&oacute;n de base de datos NoSQL...";
 choices[7]= new Array();
 choices[7][0] = "&hellip; es un sistema de base de datos relacional que no utiliza SQL.";
 choices[7][1] = "&hellip; almacena sus datos en estructuras fijas (tablas).";
 choices[7][2] = "&hellip; garantiza completamente las propiedades ACID.";
 choices[7][3] = "&hellip; tienen como ventaja principal la gran escalabilidad y rendimiento.";
 answers[7] = choices[7][3];
 units[7] = "68";
 comments[7] = "Id Pregunta: 10624. ";


//  Id pregunta: 10637 AÃ±o de creación de pregunta: 2015-01-01
 questions[8]= "9)  &iquest;Qu&eacute; es el fan-out en dise&ntilde;o estructurado?";
 choices[8]= new Array();
 choices[8][0] = "El grado de acoplamiento externo.";
 choices[8][1] = "El n&uacute;mero de subordinados inmediatos de un m&oacute;dulo.";
 choices[8][2] = "El grado de absorci&oacute;n.";
 choices[8][3] = "El n&uacute;mero de superiores inmediatos de un m&oacute;dulo.";
 answers[8] = choices[8][1];
 units[8] = "84";
 comments[8] = "Id Pregunta: 10637. ";


//  Id pregunta: 10662 AÃ±o de creación de pregunta: 2015-01-01
 questions[9]= "10)  El teorema de Nyquist establece que:";
 choices[9]= new Array();
 choices[9][0] = "El n&uacute;mero m&aacute;ximo de baudios que puede transmitirse por un canal no puede ser superior al doble de su ancho de banda.";
 choices[9][1] = "La relaci&oacute;n se&ntilde;al a ruido presente en el medio de transmisi&oacute;n no puede ser superior al doble de su ancho de banda.";
 choices[9][2] = "La eficiencia espectral es la relaci&oacute;n entre la velocidad de transmisi&oacute;n y el n&uacute;mero m&aacute;ximo de baudios que pueden transmitirse.";
 choices[9][3] = "Ninguna de las anteriores.";
 answers[9] = choices[9][0];
 units[9] = "99";
 comments[9] = "Id Pregunta: 10662. ";


//  Id pregunta: 10675 AÃ±o de creación de pregunta: 2015-01-01
 questions[10]= "11)  La Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas establece su entrada en vigor para &quot;las previsiones relativas al registro electr&oacute;nico de apoderamientos, registro electr&oacute;nico, registro de empleados p&uacute;blicos habilitados, punto de acceso general electr&oacute;nico de la Administraci&oacute;n y archivo &uacute;nico electr&oacute;nico&quot; en un plazo de:";
 choices[10]= new Array();
 choices[10][0] = "2 a&ntilde;os despu&eacute;s de su entrada en vigor.";
 choices[10][1] = "1 a&ntilde;o despu&eacute;s de su publicaci&oacute;n.";
 choices[10][2] = "1 a&ntilde;o despu&eacute;s de su aprobaci&oacute;n.";
 choices[10][3] = "6 meses despu&eacute;s de su publicaci&oacute;n.";
 answers[10] = choices[10][0];
 units[10] = "30";
 comments[10] = "Id Pregunta: 10675. ";


//  Id pregunta: 10679 AÃ±o de creación de pregunta: 2015-01-01
 questions[11]= "12)  Seg&uacute;n la Ley 39/2015 se puede establecer la obligatoriedad a las personas f&iacute;sicas de relacionarse con la Administraci&oacute;n por medios electr&oacute;nicos";
 choices[11]= new Array();
 choices[11][0] = "La Ley establece de forma obligatoria la relaci&oacute;n electr&oacute;nica con personas f&iacute;sicas en todos los casos.";
 choices[11][1] = "La Ley establece de forma obligatoria la relaci&oacute;n electr&oacute;nica con un colectivo de personas f&iacute;sicas, si previamente se establece de forma reglamentaria para dicho colectivo.";
 choices[11][2] = "La Ley establece de forma obligatoria la relaci&oacute;n electr&oacute;nica con un colectivo personas f&iacute;sicas si la administraci&oacute;n justifica la conveniencia y medios t&eacute;cnicos para dicho colectivo.";
 choices[11][3] = "La Ley no establece la obligatoriedad de relaci&oacute;n para las personas f&iacute;sicas en ning&uacute;n caso.";
 answers[11] = choices[11][1];
 units[11] = "30";
 comments[11] = "Id Pregunta: 10679. ";


//  Id pregunta: 10681 AÃ±o de creación de pregunta: 2015-01-01
 questions[12]= "13)  Seg&uacute;n la Ley 39/2015 se establece como &quot;Derecho de las Personas en sus relaciones con la Administraci&oacute;n&quot; en su Art&iacute;culo 13.";
 choices[12]= new Array();
 choices[12][0] = "Comunicarse con las Administraciones P&uacute;blicas a trav&eacute;s de un Punto de Acceso General electr&oacute;nico de la Administraci&oacute;n.";
 choices[12][1] = "Relacionarse con las Administraciones P&uacute;blicas a trav&eacute;s de medios electr&oacute;nicos utilizando cualquier formato recogido en el ENI.";
 choices[12][2] = "Ambas";
 choices[12][3] = "Ninguna de las anteriores.";
 answers[12] = choices[12][0];
 units[12] = "30";
 comments[12] = "Id Pregunta: 10681. ";


//  Id pregunta: 10689 AÃ±o de creación de pregunta: 2015-01-01
 questions[13]= "14)  &iquest;Qu&eacute; Ley establece el &quot;Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas.&quot;?";
 choices[13]= new Array();
 choices[13][0] = "Ley 40/2015.";
 choices[13][1] = "Ley 40/2014.";
 choices[13][2] = "Ley 39/2015.";
 choices[13][3] = "Ley 41/2015.";
 answers[13] = choices[13][2];
 units[13] = "30";
 comments[13] = "Id Pregunta: 10689. ";


//  Id pregunta: 10690 AÃ±o de creación de pregunta: 2015-01-01
 questions[14]= "15)  &iquest;Qu&eacute; reglamento ha considerado la Ley 39/2015 para el establecimiento los sistemas de identificaci&oacute;n como los de firma previstos en dicha Ley?";
 choices[14]= new Array();
 choices[14][0] = "Reglamento (UE) n.&ordm; 910/2014.";
 choices[14][1] = "Reglamento (UE) n.&ordm; 810/2013.";
 choices[14][2] = "Reglamento (UE) n.&ordm; 527/2013.";
 choices[14][3] = "Reglamento (UE) n.&ordm; 810/2014.";
 answers[14] = choices[14][0];
 units[14] = "30";
 comments[14] = "Id Pregunta: 10690. ";


//  Id pregunta: 10698 AÃ±o de creación de pregunta: 2015-01-01
 questions[15]= "16)  La Norma T&eacute;cnica de Interoperabilidad de documento electr&oacute;nico es aplicable a:";
 choices[15]= new Array();
 choices[15][0] = "Documentos administrativos electr&oacute;nicos.";
 choices[15][1] = "Cualquier otro documento electr&oacute;nico susceptible de formar parte de un expediente electr&oacute;nico.";
 choices[15][2] = "Ambos (los dos anteriores).";
 choices[15][3] = "Todo documento en poder de la administraci&oacute;n.";
 answers[15] = choices[15][2];
 units[15] = "43";
 comments[15] = "Id Pregunta: 10698. ";


//  Id pregunta: 10707 AÃ±o de creación de pregunta: 2015-01-01
 questions[16]= "17)  &iquest;Cu&aacute;l no es un componente del &iacute;ndice del expediente electr&oacute;nico?";
 choices[16]= new Array();
 choices[16][0] = "Fecha de generaci&oacute;n del &iacute;ndice.";
 choices[16][1] = "Descripci&oacute;n de los documentos electr&oacute;nicos.";
 choices[16][2] = "Disposici&oacute;n de los documentos en carpetas.";
 choices[16][3] = "Identificadores de los documentos electr&oacute;nicos.";
 answers[16] = choices[16][1];
 units[16] = "43";
 comments[16] = "Id Pregunta: 10707. ";


//  Id pregunta: 10708 AÃ±o de creación de pregunta: 2015-01-01
 questions[17]= "18)  &iquest;Qu&eacute; dato/s sobre los documentos electr&oacute;nicos no se incluyen en el &iacute;ndice electr&oacute;nico?";
 choices[17]= new Array();
 choices[17][0] = "Identificador del documento.";
 choices[17][1] = "El propio documento electr&oacute;nico.";
 choices[17][2] = "La huella digital del documento.";
 choices[17][3] = "La funci&oacute;n resumen utlizada para la obtenci&oacute;n de la huella digital.";
 answers[17] = choices[17][1];
 units[17] = "43";
 comments[17] = "Id Pregunta: 10708. ";


//  Id pregunta: 10722 AÃ±o de creación de pregunta: 2015-01-01
 questions[18]= "19)  Seg&uacute;n la NTI de Gesti&oacute;n de Pol&iacute;tica de gesti&oacute;n de documentos electr&oacute;nicos. &iquest;Qui&eacute;n impulsar&aacute; la pol&iacute;tica de gesti&oacute;n de documentos electr&oacute;nicos?";
 choices[18]= new Array();
 choices[18][0] = "La alta direcci&oacute;n.";
 choices[18][1] = "Los responsables de procesos de gesti&oacute;n.";
 choices[18][2] = "El Presidente del Gobierno.";
 choices[18][3] = "El Consejo de Ministros.";
 answers[18] = choices[18][0];
 units[18] = "43";
 comments[18] = "Id Pregunta: 10722. ";


//  Id pregunta: 10745 AÃ±o de creación de pregunta: 2015-01-01
 questions[19]= "20)  &iquest;Con qu&eacute; frecuencia m&iacute;nima se reunir&aacute; el Comit&eacute; Ejecutivo de la comisi&oacute;n de estrategia TIC?";
 choices[19]= new Array();
 choices[19][0] = "Mensual";
 choices[19][1] = "Semestral";
 choices[19][2] = "Trimestral";
 choices[19][3] = "Anual";
 answers[19] = choices[19][0];
 units[19] = "24";
 comments[19] = "Id Pregunta: 10745. ";


//  Id pregunta: 10748 AÃ±o de creación de pregunta: 2015-01-01
 questions[20]= "21)  &iquest;Qui&eacute;n propone la estrategia en materia de tecnolog&iacute;a y comunicaciones?";
 choices[20]= new Array();
 choices[20][0] = "Los ministros de la Presidencia y de Hacienda y Administraciones P&uacute;blicas y de Industria.";
 choices[20][1] = "El ministro de Hacienda y Administraciones P&uacute;blicas.";
 choices[20][2] = "Los ministros de la Presidencia, de Hacienda y Administraciones P&uacute;blicas y de Industria, Energ&iacute;a y Turismo.";
 choices[20][3] = "El CIO de la AGE.";
 answers[20] = choices[20][2];
 units[20] = "24";
 comments[20] = "Id Pregunta: 10748. ";


//  Id pregunta: 10753 AÃ±o de creación de pregunta: 2015-01-01
 questions[21]= "22)  &iquest;Cu&aacute;l no se una l&iacute;nea de acci&oacute;n de la Estrategia de Ciberseguridad Nacional?";
 choices[21]= new Array();
 choices[21][0] = "Capacidad de prevenci&oacute;n, detecci&oacute;n, respuesta y recuperaci&oacute;n ante las ciberamenazas.";
 choices[21][1] = "Seguridad de los Sistemas de Informaci&oacute;n y Telecomunicaciones que soportan las Administraciones P&uacute;blicas.";
 choices[21][2] = "Seguridad de los Sistemas de Informaci&oacute;n y Telecomunicaciones que soportan las Infraestructuras Cr&iacute;ticas.";
 choices[21][3] = "Colaboraci&oacute;n con las entidades privadas para establecer un marco de seguridad nacional.";
 answers[21] = choices[21][3];
 units[21] = "43";
 comments[21] = "Id Pregunta: 10753. ";


//  Id pregunta: 10789 AÃ±o de creación de pregunta: 2015-01-01
 questions[22]= "23)  &iquest;Cu&aacute;l de las siguientes opciones NO corresponde a un sistema de ficheros empleado en Sistemas Operativos GNU/Linux?";
 choices[22]= new Array();
 choices[22][0] = "ext3";
 choices[22][1] = "mini fs";
 choices[22][2] = "ReiserFS";
 choices[22][3] = "Reiser4";
 answers[22] = choices[22][1];
 units[22] = "53, 54";
 comments[22] = "Id Pregunta: 10789. Examen GSI 2014";


//  Id pregunta: 10799 AÃ±o de creación de pregunta: 2015-01-01
 questions[23]= "24)  Se&ntilde;ale la respuesta INCORRECTA relativa a una arquitectura basada en servicios web:";
 choices[23]= new Array();
 choices[23][0] = "WS-Security permite crear servicios web seguros.";
 choices[23][1] = "SOAP es un protocolo usado para el intercambio de informaci&oacute;n en un entorno descentralizado y distribuido basado en XML a trav&eacute;s de servicios web.";
 choices[23][2] = "AXIS2 es un motor de servicios web desarrollado por Apache. Una de las implementaciones disponible est&aacute; realizada en lenguaje C.";
 choices[23][3] = "Los lenguajes de desarrollo distintos a Java poseen dificultad para integrarse con los Servicios Web.";
 answers[23] = choices[23][3];
 units[23] = "51";
 comments[23] = "Id Pregunta: 10799. Examen GSI 2014";


//  Id pregunta: 10829 AÃ±o de creación de pregunta: 2015-01-01
 questions[24]= "25)  Seg&uacute;n M&eacute;trica v3, los flujos de datos de tipo di&aacute;logo, que comunican procesos con almacenes en un DFD (diagrama de flujo de datos) son aquellos que:";
 choices[24]= new Array();
 choices[24][0] = "Representan la utilizaci&oacute;n de los valores de uno o m&aacute;s campos de un almac&eacute;n o la comprobaci&oacute;n de que los valores de los campos seleccionados cumplen unos criterios determinados.";
 choices[24][1] = "Representan una consulta y una actualizaci&oacute;n entre el proceso y el almac&eacute;n.";
 choices[24][2] = "Representan la alteraci&oacute;n de los datos de un almac&eacute;n como consecuencia de la creaci&oacute;n de un nuevo elemento, por eliminaci&oacute;n o modificaci&oacute;n de otros ya existentes.";
 choices[24][3] = "Representan un trigger programado entre el proceso y el almac&eacute;n.";
 answers[24] = choices[24][1];
 units[24] = "86, 81";
 comments[24] = "Id Pregunta: 10829. Examen GSI 2014";


//  Id pregunta: 10837 AÃ±o de creación de pregunta: 2015-01-01
 questions[25]= "26)  En teor&iacute;a de colas, el modelo de disciplina de cola denominado RSS se refiere a que:";
 choices[25]= new Array();
 choices[25][0] = "Se atiende primero al cliente que antes haya llegado.";
 choices[25][1] = "Selecciona a los clientes de manera aleatoria, de acuerdo a alg&uacute;n procedimiento de prioridad o a alg&uacute;n otro orden.";
 choices[25][2] = "Sirve a los clientes igualmente, se reparte un espacio de tiempo a cada cliente.";
 choices[25][3] = "Se atiende primero al cliente que ha llegado el &uacute;ltimo.";
 answers[25] = choices[25][1];
 units[25] = "0";
 comments[25] = "Id Pregunta: 10837. Examen GSI 2014";


//  Id pregunta: 10855 AÃ±o de creación de pregunta: 2015-01-01
 questions[26]= "27)  En cuanto a las especificaciones MTOM y XOP, &iquest;cu&aacute;l de las siguientes sentencias NO es correcta?";
 choices[26]= new Array();
 choices[26][0] = "XOP es un acr&oacute;nimo de XML-binary Optimized Packaging.";
 choices[26][1] = "MTOM/XOP son recomendaciones desarrolladas por la IETF.";
 choices[26][2] = "MTOM optimiza la transferencia de datos binarios sobre SOAP.";
 choices[26][3] = "MTOM normalmente usa XOP para serializar el mensaje que contiene datos binarios.";
 answers[26] = choices[26][1];
 units[26] = "69";
 comments[26] = "Id Pregunta: 10855. Examen GSI 2014";


//  Id pregunta: 10864 AÃ±o de creación de pregunta: 2015-01-01
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes respuestas incluye un est&aacute;ndar correcto del proceso de software?";
 choices[27]= new Array();
 choices[27][0] = "IEEE 930:1998. Pr&aacute;cticas recomendadas para la Especificaci&oacute;n de Requisitos del Software (ERS).";
 choices[27][1] = "IEEE 29148:2011. Ingenier&iacute;a de Sistemas y Software - Procesos de ciclo de vida - Ingenier&iacute;a de requisitos.";
 choices[27][2] = "IEEE 1216:1987. Pr&aacute;cticas recomendadas para la Especificaci&oacute;n del Dise&ntilde;o del Software.";
 choices[27][3] = "IEEE 830: 2004. Pr&aacute;cticas recomendadas para la Especificaci&oacute;n de Requisitos del Software (ERS).";
 answers[27] = choices[27][1];
 units[27] = "76, 78, 79";
 comments[27] = "Id Pregunta: 10864. Examen GSI 2014";


//  Id pregunta: 10923 AÃ±o de creación de pregunta: 2015-01-01
 questions[28]= "29)  Respecto al Registro Electr&oacute;nico Com&uacute;n (REC), se&ntilde;ale la respuesta correcta:";
 choices[28]= new Array();
 choices[28][0] = "El REC debe admitir cualquier solicitud, escrito o comunicaci&oacute;n dirigida a cualquiera de las Administraciones P&uacute;blicas espa&ntilde;olas.";
 choices[28][1] = "La presentaci&oacute;n de solicitudes dirigidas a entidades que no hayan sido activadas en el REC se tendr&aacute; por no realizada.";
 choices[28][2] = "El REC podr&aacute; ser habilitado para la remisi&oacute;n, recepci&oacute;n e intercambio de solicitudes de la competencia de las Administraciones Auton&oacute;micas y Locales, en la forma que se determine en los correspondientes Convenios.";
 choices[28][3] = "En coordinaci&oacute;n con las Administraciones destinatarias, el Ministerio de Hacienda y Administraciones P&uacute;blicas ser&aacute; responsable de la custodia y manejo de todos los ficheros generados por el REC.";
 answers[28] = choices[28][2];
 units[28] = "44";
 comments[28] = "Id Pregunta: 10923. TIC A1 AGE 2014";


//  Id pregunta: 10932 AÃ±o de creación de pregunta: 2015-01-01
 questions[29]= "30)  En el modelo CMMI, el &aacute;rea de proceso &quot;An&aacute;lisis causal y resoluci&oacute;n&quot; se encuentra en el nivel de madurez:";
 choices[29]= new Array();
 choices[29][0] = "Nivel 2 - Gestionado.";
 choices[29][1] = "Nivel 5 - Optimizaci&oacute;n.";
 choices[29][2] = "Nivel 4 - Gestionado cuantitativamente.";
 choices[29][3] = "Nivel 3 - Definido.";
 answers[29] = choices[29][1];
 units[29] = "87";
 comments[29] = "Id Pregunta: 10932. TIC A1 AGE 2014";


//  Id pregunta: 10947 AÃ±o de creación de pregunta: 2015-01-01
 questions[30]= "31)  Dentro de las soluciones en el &aacute;mbito de BigData, la arquitectura Hadoop consta del m&oacute;dulo MapReduce que consiste en:";
 choices[30]= new Array();
 choices[30][0] = "Un framework para escribir aplicaciones que procesan grandes cantidades de datos en paralelo.";
 choices[30][1] = "Una base de datos no relacional y distribuida, con varios maestros, escalable y sin puntos &uacute;nicos de fallo.";
 choices[30][2] = "Un sistema de archivos distribuido que proporciona acceso de alto rendimiento a los datos de la aplicaci&oacute;n.";
 choices[30][3] = "Una infraestructura de data warehouse que proporciona los datos resumidos y consultas ad hoc.";
 answers[30] = choices[30][0];
 units[30] = "68";
 comments[30] = "Id Pregunta: 10947. TIC A1 AGE 2014";


//  Id pregunta: 10949 AÃ±o de creación de pregunta: 2015-01-01
 questions[31]= "32)  La cuarta generaci&oacute;n de telefon&iacute;a m&oacute;vil (4G) incluye:";
 choices[31]= new Array();
 choices[31][0] = "El requisito establecido por la UIT de velocidades m&aacute;ximas de transmisi&oacute;n de datos mejoradas: 100 Mbit/s para una movilidad alta y de 1 Gbit/s para una movilidad baja.";
 choices[31][1] = "El requisito establecido por la UIT de velocidades m&aacute;ximas de transmisi&oacute;n de datos mejoradas: 10 Mbit/s para una movilidad alta y de 100 Mbit/s para una movilidad baja.";
 choices[31][2] = "El requisito establecido por el IEEE de velocidades m&aacute;ximas de transmisi&oacute;n de datos mejoradas: 100 Mbit/s para una movilidad alta y de 1 Gbit/s para una movilidad baja.";
 choices[31][3] = "El requisito establecido por el IEEE de velocidades m&aacute;ximas de transmisi&oacute;n de datos mejoradas: 10 Mbit/s para una movilidad alta y de 100 Mbit/s para una movilidad baja.";
 answers[31] = choices[31][0];
 units[31] = "108";
 comments[31] = "Id Pregunta: 10949. TIC A1 AGE 2014";


//  Id pregunta: 10953 AÃ±o de creación de pregunta: 2015-01-01
 questions[32]= "33)  Respecto a la Comisi&oacute;n de Estrategia TIC de la Administraci&oacute;n General del Estado, se&ntilde;ale la respuesta correcta:";
 choices[32]= new Array();
 choices[32][0] = "Est&aacute; adscrita al Ministerio de la Presidencia y es el &oacute;rgano encargado de la definici&oacute;n de la aplicaci&oacute;n de la Estrategia TIC de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos.";
 choices[32][1] = "Impulsa la colaboraci&oacute;n y cooperaci&oacute;n con las comunidades aut&oacute;nomas y las entidades locales para la puesta en marcha de servicios interadministrativos integrados.";
 choices[32][2] = "Define las prioridades de inversi&oacute;n en materias TIC bajo un convenio marco de colaboraci&oacute;n con la Direcci&oacute;n General de Patrimonio del Estado.";
 choices[32][3] = "Elevar&aacute; semestralmente, a trav&eacute;s de su Presidente, un informe al Consejo de Ministros, en el que se recoger&aacute; el estado de la transformaci&oacute;n digital de las Administraciones P&uacute;blicas.";
 answers[32] = choices[32][1];
 units[32] = "30";
 comments[32] = "Id Pregunta: 10953. TIC A1 AGE 2014";


//  Id pregunta: 10967 AÃ±o de creación de pregunta: 2015-01-01
 questions[33]= "34)  En dise&ntilde;o orientado a objetos se utiliza el patr&oacute;n Observador (en ingl&eacute;s, Observer), que define una dependencia uno a muchos entre un sujeto y varios observadores. Se&ntilde;ale la respuesta correcta:";
 choices[33]= new Array();
 choices[33][0] = "Cuando el sujeto se modifica, se notifica dicha modificaci&oacute;n. Los observadores se actualizar&aacute;n s&oacute;lo si se va a utilizar la informaci&oacute;n del sujeto.";
 choices[33][1] = "Establece cu&aacute;ntos observadores de un sujeto van a existir para poder notificarles cualquier cambio.";
 choices[33][2] = "La responsabilidad de actualizaci&oacute;n puede residir en los observadores tras la notificaci&oacute;n de cambio del sujeto.";
 choices[33][3] = "El sujeto nunca puede ser borrado.";
 answers[33] = choices[33][2];
 units[33] = "84";
 comments[33] = "Id Pregunta: 10967. TIC A1 AGE 2014";


//  Id pregunta: 10974 AÃ±o de creación de pregunta: 2015-01-01
 questions[34]= "35)  Al configurar una red Ethernet, es correcto que:";
 choices[34]= new Array();
 choices[34][0] = "El administrador de red debe hacer un listado de todas las direcciones MAC que se conectar&aacute;n.";
 choices[34][1] = "El administrador de red debe configurar en cada equipo la direcci&oacute;n MAC de la pasarela por defecto.";
 choices[34][2] = "El administrador de red debe instalar en todos los equipos la compatibilidad con 802.3 (Ethernet) y 802.4 (Gigabit Ethernet).";
 choices[34][3] = "El administrador de red debe establecer los segmentos de la red.";
 answers[34] = choices[34][3];
 units[34] = "101";
 comments[34] = "Id Pregunta: 10974. TIC A1 AGE 2014";


//  Id pregunta: 10992 AÃ±o de creación de pregunta: 2015-01-01
 questions[35]= "36)  Respecto a los formatos de ficheros de im&aacute;genes, se&ntilde;ale la respuesta correcta:";
 choices[35]= new Array();
 choices[35][0] = "El formato de ficheros GIF utiliza un algoritmo de compresi&oacute;n sin p&eacute;rdidas hasta los 256 colores.";
 choices[35][1] = "El formato BMP es el formato t&iacute;pico usado por el sistema operativo Linux.";
 choices[35][2] = "Los archivos RAW son compatibles con los formatos TIFF y JPEG.";
 choices[35][3] = "El formato WMK es el m&aacute;s utilizado para los sistemas de grabaci&oacute;n de video.";
 answers[35] = choices[35][0];
 units[35] = "114";
 comments[35] = "Id Pregunta: 10992. TIC A1 AGE 2014";


//  Id pregunta: 11009 AÃ±o de creación de pregunta: 2015-01-01
 questions[36]= "37)  El 3 de Noviembre de 2014 se ha liberado una nueva versi&oacute;n del sistema operativo Android. Se denomina:";
 choices[36]= new Array();
 choices[36][0] = "Android 4.3 Jelly Bean";
 choices[36][1] = "Android 5.0 Lollipop.";
 choices[36][2] = "Android 6.0 Marshmallow.";
 choices[36][3] = "Android 4.4 KitKat.";
 answers[36] = choices[36][1];
 units[36] = "52";
 comments[36] = "Id Pregunta: 11009. TIC A1 AGE 2014";


//  Id pregunta: 11028 AÃ±o de creación de pregunta: 2015-01-01
 questions[37]= "38)  &iquest;Cu&aacute;l es una soluci&oacute;n de servicio en la nube para el registro en las administraciones?";
 choices[37]= new Array();
 choices[37][0] = "ORVE";
 choices[37][1] = "GEISER";
 choices[37][2] = "Las 2 anteriores";
 choices[37][3] = "Ambas son soluciones, pero no en la nube";
 answers[37] = choices[37][2];
 units[37] = "44";
 comments[37] = "Id Pregunta: 11028. ";


//  Id pregunta: 11057 AÃ±o de creación de pregunta: 2015-01-01
 questions[38]= "39)  &iquest;Qu&eacute; rol de Scrum NO est&aacute; incluido dentro de los roles 'Cerdo'?";
 choices[38]= new Array();
 choices[38][0] = "ScrumMaster";
 choices[38][1] = "Product Owner";
 choices[38][2] = "ScrumTeam";
 choices[38][3] = "Stakeholders";
 answers[38] = choices[38][3];
 units[38] = "79";
 comments[38] = "Id Pregunta: 11057. Los Stakeholders se encuentran dentro del tipo de rol 'Gallina'";


//  Id pregunta: 11074 AÃ±o de creación de pregunta: 2015-01-01
 questions[39]= "40)  &iquest;A cual de las siguientes &aacute;reas debe la tecnolog&iacute;a ayudar a dar soporte durante la fase de Dise&ntilde;o del Servicio en el ciclo de Vida del Servicio?";
 choices[39]= new Array();
 choices[39][0] = "Dise&ntilde;o de hardware y software";
 choices[39][1] = "Dise&ntilde;o del entorno y dise&ntilde;o de los procesos";
 choices[39][2] = "Dise&ntilde;o de datos";
 choices[39][3] = "Todas ellas";
 answers[39] = choices[39][3];
 units[39] = "98";
 comments[39] = "Id Pregunta: 11074. ";


//  Id pregunta: 11097 AÃ±o de creación de pregunta: 2015-01-01
 questions[40]= "41)  De acuerdo con el RD 1720/2007 del 11 de Junio, el l&iacute;mite de n&uacute;meros de accesos es una medida de seguridad que debe aplicarse cuando la informaci&oacute;n es de:";
 choices[40]= new Array();
 choices[40][0] = "Nivel b&aacute;sico";
 choices[40][1] = "Nivel medio";
 choices[40][2] = "Nivel alto";
 choices[40][3] = "Nivel muy alto";
 answers[40] = choices[40][1];
 units[40] = "29";
 comments[40] = "Id Pregunta: 11097. ";


//  Id pregunta: 11099 AÃ±o de creación de pregunta: 2015-01-01
 questions[41]= "42)  Seleccione la respuesta verdadera sobre la Agencia de Protecci&oacute;n de Datos";
 choices[41]= new Array();
 choices[41][0] = "Se relaciona con el Gobierno a trav&eacute;s del Ministerio de Interior";
 choices[41][1] = "Est&aacute; adscrita a la Ley General Presupuestaria pero no tiene dotaci&oacute;n presupuestaria propia.";
 choices[41][2] = "El Director de la AEPD es nombrado por un periodo de cuatro a&ntilde;os";
 choices[41][3] = "Est&aacute; sometida &uacute;nicamente al control interno por el Tribunal de Cuentas.";
 answers[41] = choices[41][2];
 units[41] = "29";
 comments[41] = "Id Pregunta: 11099. ";


//  Id pregunta: 11111 AÃ±o de creación de pregunta: 2015-01-01
 questions[42]= "43)  &iquest;Cu&aacute;l no es un principio general del dise&ntilde;o centrado en el usuario de Nielsen?";
 choices[42]= new Array();
 choices[42][0] = "Medida de la satisfacci&oacute;n del usuario";
 choices[42][1] = "Visibilidad del estado del sistema";
 choices[42][2] = "Dise&ntilde;o minimalista";
 choices[42][3] = "Prevenci&oacute;n y ayuda en la recuperaci&oacute;n de errores";
 answers[42] = choices[42][0];
 units[42] = "39";
 comments[42] = "Id Pregunta: 11111. ";


//  Id pregunta: 11120 AÃ±o de creación de pregunta: 2015-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l de los siguientes no es un contenido m&iacute;nimo que deben tener las sedes electr&oacute;nicas de acuerdo con el art&iacute;culo 6 del RD 1671/2009?";
 choices[43]= new Array();
 choices[43][0] = "Sistema de verificaci&oacute;n de los certificados de la sede, accesible de forma directa y gratuita";
 choices[43][1] = "Informaci&oacute;n relacionada con la protecci&oacute;n de datos de car&aacute;cter personal, incluyendo un enlace con la sede electr&oacute;nica de la AEPD.";
 choices[43][2] = "Servicios de asesoramiento electr&oacute;nico al usuario para la correcta utilizaci&oacute;n de la sede";
 choices[43][3] = "Todos los anteriores son contenidos m&iacute;nimos de las sedes electr&oacute;nicas.";
 answers[43] = choices[43][3];
 units[43] = "43";
 comments[43] = "Id Pregunta: 11120. ";


//  Id pregunta: 11136 AÃ±o de creación de pregunta: 2015-01-01
 questions[44]= "45)  &iquest;Cu&aacute;l de los siguientes no es un lenguaje para interactuar con la SGBD?";
 choices[44]= new Array();
 choices[44][0] = "DDL - Data Definition Language";
 choices[44][1] = "DML - Data Manipulation Language";
 choices[44][2] = "DCL - Data Control Language";
 choices[44][3] = "Todos los anteriores son lenguajes para interactuar con la SGBD";
 answers[44] = choices[44][3];
 units[44] = "57";
 comments[44] = "Id Pregunta: 11136. ";


//  Id pregunta: 11141 AÃ±o de creación de pregunta: 2015-01-01
 questions[45]= "46)  &iquest;Cu&aacute;l de los siguientes no es un lenguaje de construcci&oacute;n de la Web Sem&aacute;ntica?";
 choices[45]= new Array();
 choices[45][0] = "OWL";
 choices[45][1] = "MADL";
 choices[45][2] = "XML";
 choices[45][3] = "RDF";
 answers[45] = choices[45][1];
 units[45] = "63";
 comments[45] = "Id Pregunta: 11141. ";


//  Id pregunta: 11145 AÃ±o de creación de pregunta: 2015-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l de los siguientes es el formato oficial de facturaci&oacute;n electr&oacute;nica de la Administraci&oacute;n General del Estado?";
 choices[46]= new Array();
 choices[46][0] = "GS2-XML";
 choices[46][1] = "UBL";
 choices[46][2] = "Facturae";
 choices[46][3] = "Eb-XML";
 answers[46] = choices[46][2];
 units[46] = "70";
 comments[46] = "Id Pregunta: 11145. ";


//  Id pregunta: 11152 AÃ±o de creación de pregunta: 2015-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l de los siguientes es un requisito de seguridad aplicable a los prestadores de servicios de confianza TSP?";
 choices[47]= new Array();
 choices[47][0] = "Adoptar&aacute;n las medidas t&eacute;cnicas y organizativas adecuadas para gestionar los riesgos para la seguridad de los servicios de confianza que prestan.";
 choices[47][1] = "En un plazo m&aacute;ximo de 48 horas tras tener conocimiento de ellas, notificar&aacute;n al Ministerio de Industria como organismo supervisor y al organismo nacional competente en materia de seguridad de la informaci&oacute;n, o la autoridad de protecci&oacute;n de datos, cualquier violaci&oacute;n de la seguridad o p&eacute;rdida de la integridad que tenga un impacto significativo en el servicio de confianza prestado o en los datos personales correspondientes.";
 choices[47][2] = "Cuando la violaci&oacute;n de seguridad o la p&eacute;rdida de integridad puedan atentar contra una persona f&iacute;sica o jur&iacute;dica a la que se ha prestado el servicio de confianza, el TSP notificar&aacute; tambi&eacute;n a la persona, en un plazo de 72 horas, la violaci&oacute;n de seguridad o la p&eacute;rdida de integridad.";
 choices[47][3] = "Si una violaci&oacute;n de la seguridad o p&eacute;rdida de la integridad afecta a dos o m&aacute;s Estados miembros, el organismo de supervisi&oacute;n notificado informar&aacute; al respecto &uacute;nicamente a los organismos de supervisi&oacute;n de los dem&aacute;s Estados miembros de que se trate.";
 answers[47] = choices[47][0];
 units[47] = "74";
 comments[47] = "Id Pregunta: 11152. ";


//  Id pregunta: 11166 AÃ±o de creación de pregunta: 2015-01-01
 questions[48]= "49)  &iquest;Cu&aacute;les de las siguientes t&eacute;cnicas no suele utilizarse en los sistemas de reconocimiento de habla?";
 choices[48]= new Array();
 choices[48][0] = "Dynamic Time Warping";
 choices[48][1] = "Hidden Markov Model";
 choices[48][2] = "Neural Networks";
 choices[48][3] = "Todas las anteriores se suelen utilizar en los sistemas de reconocimiento de habla";
 answers[48] = choices[48][3];
 units[48] = "93";
 comments[48] = "Id Pregunta: 11166. ";


//  Id pregunta: 11172 AÃ±o de creación de pregunta: 2015-01-01
 questions[49]= "50)  &iquest;Cu&aacute;l de los siguientes procesos no forma parte del Soporte de Servicio seg&uacute;n la biblioteca ITIL v3?";
 choices[49]= new Array();
 choices[49][0] = "Gesti&oacute;n de Incidencias";
 choices[49][1] = "Gesti&oacute;n de Problemas";
 choices[49][2] = "Gesti&oacute;n de Eventos";
 choices[49][3] = "Gesti&oacute;n del Cambio";
 answers[49] = choices[49][2];
 units[49] = "98";
 comments[49] = "Id Pregunta: 11172. ";


//  Id pregunta: 11195 AÃ±o de creación de pregunta: 2015-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes iniciativas de la Estrategia Europa 2020 hace referencia al objetivo de crecimiento inteligente?";
 choices[50]= new Array();
 choices[50][0] = "Juventud en movimiento";
 choices[50][1] = "Uni&oacute;n por la innovaci&oacute;n";
 choices[50][2] = "Agenda Digital para Europa";
 choices[50][3] = "Todas las anteriores";
 answers[50] = choices[50][3];
 units[50] = "30";
 comments[50] = "Id Pregunta: 11195. ";


//  Id pregunta: 11214 AÃ±o de creación de pregunta: 2015-01-01
 questions[51]= "52)  Respecto a los componentes de Java Platform SE cual de las siguientes afirmaciones es falsa:";
 choices[51]= new Array();
 choices[51][0] = "El JDK contiene todos los niveles, incluyendo JRE y adem&aacute;s herramientas como compiladores y depuradores de errores (debuggers).";
 choices[51][1] = "JRE no incluye la JVM.";
 choices[51][2] = "Las Java SE APIs est&aacute;n basadas en especificaciones JSR (Java Specification Request) las cuales son aprobadas dentro del Java CommunityProcess (JCP).";
 choices[51][3] = "La JVM es propiedad de Oracle.";
 answers[51] = choices[51][1];
 units[51] = "60";
 comments[51] = "Id Pregunta: 11214. ";


//  Id pregunta: 11233 AÃ±o de creación de pregunta: 2015-01-01
 questions[52]= "53)  El fichero Enterprise Archive (.ear) de empaquetado de aplicaciones web.";
 choices[52]= new Array();
 choices[52][0] = "Uno o m&aacute;s ficheros WAR.";
 choices[52][1] = "Uno o m&aacute;s ficheros JAR con las clases de la aplicaci&oacute;n.";
 choices[52][2] = "Un descriptor de despliegue de la aplicaci&oacute;n.";
 choices[52][3] = "Todas las respuestas son correctas.";
 answers[52] = choices[52][3];
 units[52] = "116";
 comments[52] = "Id Pregunta: 11233. ";


//  Id pregunta: 11242 AÃ±o de creación de pregunta: 2015-01-01
 questions[53]= "54)  El valor estimado del contrato:";
 choices[53]= new Array();
 choices[53][0] = "Nos permite determinar si el contrato est&aacute; sujeto a regulaci&oacute;n armonizada.";
 choices[53][1] = "No incluye el IVA";
 choices[53][2] = "Incluye pr&oacute;rrogas y cualquier modificaci&oacute;n prevista sobre el presupuesto base de licitaci&oacute;n.";
 choices[53][3] = "Todas las respuestas son ciertas.";
 answers[53] = choices[53][3];
 units[53] = "41";
 comments[53] = "Id Pregunta: 11242. ";


//  Id pregunta: 11251 AÃ±o de creación de pregunta: 2015-01-01
 questions[54]= "55)  Los Sistemas din&aacute;micos de adquisici&oacute;n:";
 choices[54]= new Array();
 choices[54][0] = "Tienen vigencia indefinida mientras existan licitadores.";
 choices[54][1] = "La adjudicaci&oacute;n del sistema din&aacute;mico se realizar&aacute; siempre mediante procedimiento abierto.";
 choices[54][2] = "Al igual que en el acuerdo marco, ser&aacute; posible la incorporaci&oacute;n de nuevos adjudicatarios.";
 choices[54][3] = "Se valorar&aacute; positivamente el uso de medios TIC.";
 answers[54] = choices[54][1];
 units[54] = "41";
 comments[54] = "Id Pregunta: 11251. ";


//  Id pregunta: 11295 AÃ±o de creación de pregunta: 2015-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de los siguientes gestores de contenidos NO est&aacute; desarrollado en Java?";
 choices[55]= new Array();
 choices[55][0] = "Liferay";
 choices[55][1] = "Alfresco";
 choices[55][2] = "Drupal";
 choices[55][3] = "OpenCMS";
 answers[55] = choices[55][2];
 units[55] = "95";
 comments[55] = "Id Pregunta: 11295. ";


//  Id pregunta: 11309 AÃ±o de creación de pregunta: 2015-01-01
 questions[56]= "57)  Se&ntilde;ale el conjunto de conceptos que son introducidos por el Modelo Entidad/Relaci&oacute;n extendido";
 choices[56]= new Array();
 choices[56][0] = "Generalizaci&oacute;n, Especializaci&oacute;n, Cardinalidad M&iacute;nima y Dependencia en existencia e identificaci&oacute;n.";
 choices[56][1] = "Generalizaci&oacute;n, Especializaci&oacute;n, Cardinalidad M&aacute;xima y Dependencia en existencia e identificaci&oacute;n.";
 choices[56][2] = "Generalizaci&oacute;n, Especializaci&oacute;n, Cardinalidad M&iacute;nima y Dependencia en existencia e autenticaci&oacute;n.";
 choices[56][3] = "Generalizaci&oacute;n, Especializaci&oacute;n, Cardinalidad M&aacute;xima e independencia en existencia e identificaci&oacute;n.";
 answers[56] = choices[56][0];
 units[56] = "80";
 comments[56] = "Id Pregunta: 11309. ";


//  Id pregunta: 11314 AÃ±o de creación de pregunta: 2015-01-01
 questions[57]= "58)  En relaci&oacute;n con el servicio de directorio X.500, se&ntilde;alar la falsa.";
 choices[57]= new Array();
 choices[57][0] = "Cada entrada del Directorio, tiene un identificador &uacute;nico que el RDN.";
 choices[57][1] = "La parte com&uacute;n de todas las entradas u objetos, se llama Suffix.";
 choices[57][2] = "El conjunto de objetos, constituyen un DMD o dominio de gesti&oacute;n.";
 choices[57][3] = "X.500 no define nada sobre la interfaz de usuario.";
 answers[57] = choices[57][0];
 units[57] = "73";
 comments[57] = "Id Pregunta: 11314. El identificador &uacute;nico de cada entrada del directorio es el DN, que es como la direcci&oacute;n absoluta de un fichero.";


//  Id pregunta: 11335 AÃ±o de creación de pregunta: 2015-01-01
 questions[58]= "59)  Respecto del modelo EFQM, se&ntilde;ale la afirmaci&oacute;n correcta";
 choices[58]= new Array();
 choices[58][0] = "Contempla entre los agentes facilitadores los siguientes: Liderazgo; Personas; Pol&iacute;ticas y Estrategias;";
 choices[58][1] = "La autoevaluaci&oacute;n del modelo no permite extraer puntos fuertes y &aacute;reas de mejora";
 choices[58][2] = "Contempla cuatro tipos de resultados:  en las Personas; Clientes; en la Sociedad y resultados Clave. Los resultados no son consecuencia de los agentes facilitadores";
 choices[58][3] = "El premio europeo a la calidad es quinquenal";
 answers[58] = choices[58][0];
 units[58] = "92";
 comments[58] = "Id Pregunta: 11335. ";


//  Id pregunta: 11352 AÃ±o de creación de pregunta: 2015-01-01
 questions[59]= "60)  De las siguientes afirmaciones, seleccione la correcta en relaci&oacute;n con lo regulado en la Ley 25/2013, de 27 de diciembre, de impulso de la factura electr&oacute;nica y creaci&oacute;n del registro contable de facturas en el Sector P&uacute;blico";
 choices[59]= new Array();
 choices[59][0] = "La Ley 25/2013 tiene como &aacute;mbito de actuaci&oacute;n, las facturas emitidas en el marco de las relaciones jur&iacute;dicas entre proveedores de bienes y servicios y las Administraciones P&uacute;blicas";
 choices[59][1] = "Impulso del uso de la factura electr&oacute;nica en el sector p&uacute;blico, con car&aacute;cter obligatorio para determinados sujetos a partir del uno de enero de 2015.";
 choices[59][2] = "Obligaci&oacute;n de las empresas de presentaci&oacute;n en un registro administrativo de las facturas expedidas por los servicios que presten o bienes que entreguen a una Administraci&oacute;n P&uacute;blica, en un plazo de 20 d&iacute;as desde la prestaci&oacute;n o entrega";
 choices[59][3] = "Se establece la creaci&oacute;n obligatoria para la Administraci&oacute;n P&uacute;blica estatal, de puntos generales de entrada de facturas electr&oacute;nicas";
 answers[59] = choices[59][0];
 units[59] = "70";
 comments[59] = "Id Pregunta: 11352. Es obligatorio a partir del 15 de enero de 2015. El plazo para la entrega de la factura, son 30 d&iacute;as. La creaci&oacute;n es obligatoria para todas las administraciones p&uacute;blicas.";


//  Id pregunta: 11355 AÃ±o de creación de pregunta: 2015-01-01
 questions[60]= "61)  En cuanto al uso de los Cost Driven Attributes (CDA) en COCOMO, seleccione la opci&oacute;n verdadera";
 choices[60]= new Array();
 choices[60][0] = "Para estimar el esfuerzo, se tiene en cuenta las l&iacute;neas de c&oacute;digo en miles de l&iacute;neas de c&oacute;digo (KLOC)";
 choices[60][1] = "Los Cost Driven Attributes (a, b, c y d) son los mismos para cada fase de construcci&oacute;n del software en el modelo avanzado.";
 choices[60][2] = "En el m&oacute;delo b&aacute;sico, se tiene en cuenta, adem&aacute;s del n&uacute;mero de l&iacute;neas, los Cost Driven Attributes (CDA) b&aacute;sicos";
 choices[60][3] = "Para estimar el esfuerzo, se utiliza a y b. Para estimar el tiempo se utliza c y d.";
 answers[60] = choices[60][3];
 units[60] = "89";
 comments[60] = "Id Pregunta: 11355. ";


//  Id pregunta: 11363 AÃ±o de creación de pregunta: 2015-01-01
 questions[61]= "62)  Seg&uacute;n ITIL v3, las m&eacute;tricas que se usan normalmente en Gesti&oacute;n de Servicios TI son:";
 choices[61]= new Array();
 choices[61][0] = "De tecnolog&iacute;a (recursos), de gesti&oacute;n (procesos) y de servicios";
 choices[61][1] = "De tecnolog&iacute;a y de servicios";
 choices[61][2] = "De servicios y de personas";
 choices[61][3] = "De servicios y de procesos";
 answers[61] = choices[61][0];
 units[61] = "98";
 comments[61] = "Id Pregunta: 11363. ";


//  Id pregunta: 11367 AÃ±o de creación de pregunta: 2015-01-01
 questions[62]= "63)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes afirmaciones es la MEJOR descripci&oacute;n de un acuerdo de nivel operativo (OLA)?";
 choices[62]= new Array();
 choices[62][0] = "Un acuerdo entre un proveedor de servicios de TI y otra parte de la misma organizaci&oacute;n que colabora en la prestaci&oacute;n de servicios";
 choices[62][1] = "Un acuerdo escrito entre el proveedor de servicios de TI y sus clientes, el cual define las metas clave y responsabilidades de ambas partes";
 choices[62][2] = "Un acuerdo entre dos proveedores de servicios sobre los niveles de servicio requeridos por el cliente";
 choices[62][3] = "Un acuerdo entre un Centro de Servicios externo y el cliente de TI acerca de los tiempos de respuesta y de reparaci&oacute;n";
 answers[62] = choices[62][0];
 units[62] = "98";
 comments[62] = "Id Pregunta: 11367. ";


//  Id pregunta: 11369 AÃ±o de creación de pregunta: 2015-01-01
 questions[63]= "64)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;les de las siguientes actividades est&aacute;n incluidas como parte de la Transici&oacute;n del Servicio?: 1. Introducir nuevos servicios; 2. Retirar servicios; 3. Transferir servicios entre proveedores de servicios";
 choices[63]= new Array();
 choices[63][0] = "Solo 1 y 2";
 choices[63][1] = "Solo 2";
 choices[63][2] = "Todas las anteriores";
 choices[63][3] = "1 y 3";
 answers[63] = choices[63][2];
 units[63] = "98";
 comments[63] = "Id Pregunta: 11369. ";


//  Id pregunta: 11372 AÃ±o de creación de pregunta: 2015-01-01
 questions[64]= "65)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;les de los siguientes elementos estar&iacute;an almacenados en la biblioteca definitiva de medios (DML)?: 1. Copias de software comprado; 2. Copias de software desarrollado internamente; 3. Documentaci&oacute;n relevante de las licencias; 4. Calendario de cambios";
 choices[64]= new Array();
 choices[64][0] = "Todas las anteriores";
 choices[64][1] = "Solo 1 y 2";
 choices[64][2] = "Solo 3 y 4";
 choices[64][3] = "Solo 1, 2 y 3";
 answers[64] = choices[64][3];
 units[64] = "98";
 comments[64] = "Id Pregunta: 11372. ";


//  Id pregunta: 11383 AÃ±o de creación de pregunta: 2015-01-01
 questions[65]= "66)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes alternativas es la lista correcta de las cuatro P's del dise&ntilde;o del servicio?";
 choices[65]= new Array();
 choices[65][0] = "Planificaci&oacute;n, productos, posici&oacute;n, procesos";
 choices[65][1] = "Planificaci&oacute;n, perspectiva, posici&oacute;n, personas";
 choices[65][2] = "Perspectiva, asociados (partners), problemas, personas";
 choices[65][3] = "Personas, asociados (partners), productos, procesos";
 answers[65] = choices[65][3];
 units[65] = "98";
 comments[65] = "Id Pregunta: 11383. ";


//  Id pregunta: 11392 AÃ±o de creación de pregunta: 2015-01-01
 questions[66]= "67)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes definiciones es el mejor ejemplo de una soluci&oacute;n temporal (workaround)?";
 choices[66]= new Array();
 choices[66][0] = "Un t&eacute;cnico instala un script para redirigir la impresi&oacute;n a una impresora alternativa hasta que se pueda aplicar una soluci&oacute;n permanente";
 choices[66][1] = "Un t&eacute;cnico intenta resolver una incidencia de diferentes maneras. Una de ellas funciona aunque no sabe cu&aacute;l.";
 choices[66][2] = "Despu&eacute;s de notificar la incidencia al centro de servicio, el usuario se dedica a otras tareas mientras se identifica y resuelve el problema";
 choices[66][3] = "Un dispositivo funciona de forma intermitente, permitiendo al usuario trabajar con un rendimiento degradado mientras el t&eacute;cnico diagnostica la incidencia";
 answers[66] = choices[66][0];
 units[66] = "98";
 comments[66] = "Id Pregunta: 11392. ";


//  Id pregunta: 11424 AÃ±o de creación de pregunta: 2015-01-01
 questions[67]= "68)  Se&ntilde;ale la falsa, en relaci&oacute;n a derechos de los usuarios, seg&uacute;n se indica en la Ley 9/2014:";
 choices[67]= new Array();
 choices[67][0] = "Derecho a resolver el contrato en cualquier momento.";
 choices[67][1] = "Derecho al cambio de operador con conservaci&oacute;n del n&uacute;mero.";
 choices[67][2] = "Derecho a la continuidad del servicio, sin indemnizaci&oacute;n por parte del operador si la interrupci&oacute;n es inferior a 60 minutos.";
 choices[67][3] = "Derecho a acceder gratuitamente a llamadas de emergencia.";
 answers[67] = choices[67][2];
 units[67] = "110";
 comments[67] = "Id Pregunta: 11424. ";


//  Id pregunta: 11436 AÃ±o de creación de pregunta: 2015-01-01
 questions[68]= "69)  Seg&uacute;n la Ley 9/2014, un usuario final podr&aacute; resolver un contrato de redes y servicios de telecomunicaciones:";
 choices[68]= new Array();
 choices[68][0] = "Solo al finalizar el contrato";
 choices[68][1] = "Anticipadamente con penalizaci&oacute;n";
 choices[68][2] = "Anticipadamente sin penalizaci&oacute;n.";
 choices[68][3] = "Ninguna de las anteriores.";
 answers[68] = choices[68][2];
 units[68] = "110";
 comments[68] = "Id Pregunta: 11436. ";


//  Id pregunta: 11441 AÃ±o de creación de pregunta: 2015-01-01
 questions[69]= "70)  Seg&uacute;n la Ley 9/2014, los usuarios finales de redes y servicios de comunicaciones electr&oacute;nicas tendr&aacute;n derecho a:";
 choices[69]= new Array();
 choices[69][0] = "Impedir la presentaci&oacute;n de la identificaci&oacute;n de su l&iacute;nea en las llamadas que genere, mediante procedimiento sencillo y gratuito.";
 choices[69][1] = "Impedir la presentaci&oacute;n de la identificaci&oacute;n de la l&iacute;nea origen en las llamadas entrantes, mediante un procedimiento sencillo y gratuito.";
 choices[69][2] = "Rechazar las llamadas entrantes en que la l&iacute;nea origen no aparezca identificada, mediante un procedimiento sencillo y gratuito.";
 choices[69][3] = "Todas las anteriores.";
 answers[69] = choices[69][3];
 units[69] = "110";
 comments[69] = "Id Pregunta: 11441. ";


//  Id pregunta: 11446 AÃ±o de creación de pregunta: 2015-01-01
 questions[70]= "71)  Seg&uacute;n la Ley 9/2014, a qui&eacute;n corresponde establecer los procedimientos y plazos para la habilitaci&oacute;n del ejercicio de los derechos de uso del Dominio P&uacute;blico Radioel&eacute;ctrico";
 choices[70]= new Array();
 choices[70][0] = "MINETUR.";
 choices[70][1] = "Gobierno de Espa&ntilde;a.";
 choices[70][2] = "CNMC.";
 choices[70][3] = "SETSI.";
 answers[70] = choices[70][1];
 units[70] = "110";
 comments[70] = "Id Pregunta: 11446. ";


//  Id pregunta: 11472 AÃ±o de creación de pregunta: 2015-01-01
 questions[71]= "72)  Seg&uacute;n la Ley 9/2014, se&ntilde;ale la respuesta CORRECTA (facultades del Gobierno):";
 choices[71]= new Array();
 choices[71][0] = "Elaborar y aprobar planes de utilizaci&oacute;n del espectro.";
 choices[71][1] = "Determinaci&oacute;n, control e inspecci&oacute;n de los niveles de emisi&oacute;n.";
 choices[71][2] = "Determinar el operador del servicio universal.";
 choices[71][3] = "Todas son atribuciones del Gobierno.";
 answers[71] = choices[71][2];
 units[71] = "110";
 comments[71] = "Id Pregunta: 11472. ";


//  Id pregunta: 11503 AÃ±o de creación de pregunta: 2015-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l de los siguientes NO es un Comit&eacute; creado en el seno de la International Standards Organization (ISO)?";
 choices[72]= new Array();
 choices[72][0] = "DEVCO, Comit&eacute; de Desarrollo";
 choices[72][1] = "COPOLCO, Comit&eacute; de pol&iacute;ticas en materia de consumo";
 choices[72][2] = "QUALCO, Comit&eacute; de calidad";
 choices[72][3] = "CASCO, Comit&eacute; de evaluaci&oacute;n de la conformidad";
 answers[72] = choices[72][2];
 units[72] = "42";
 comments[72] = "Id Pregunta: 11503. NULL";


//  Id pregunta: 11505 AÃ±o de creación de pregunta: 2015-01-01
 questions[73]= "74)  Seg&uacute;n Popek y Goldberg, &iquest;Qu&eacute; caracteristicas debe de tener un sistema para que sea virtualizable?";
 choices[73]= new Array();
 choices[73][0] = "Equivalencia.";
 choices[73][1] = "Control de Recursos.";
 choices[73][2] = "Eficiencia.";
 choices[73][3] = "Todos los anteriores.";
 answers[73] = choices[73][3];
 units[73] = "47";
 comments[73] = "Id Pregunta: 11505. NULL";


//  Id pregunta: 11523 AÃ±o de creación de pregunta: 2015-01-01
 questions[74]= "75)  En el entorno gr&aacute;fico KDE, &iquest;Qu&eacute; aplicaci&oacute;n permite generar informes?";
 choices[74]= new Array();
 choices[74][0] = "Kchart";
 choices[74][1] = "Kugar";
 choices[74][2] = "Kplato";
 choices[74][3] = "Kspread";
 answers[74] = choices[74][1];
 units[74] = "54";
 comments[74] = "Id Pregunta: 11523. NULL";


//  Id pregunta: 11527 AÃ±o de creación de pregunta: 2015-01-01
 questions[75]= "76)  Las distribuciones Debian o Ubuntu, entre otras, permiten instalar habitualmente nuevas utilidades a partir de ficheros .deb. Indique cu&aacute;l de las siguientes sentencias Linux es incorrecta:";
 choices[75]= new Array();
 choices[75][0] = "apt-update";
 choices[75][1] = "dpkg-reconfigure";
 choices[75][2] = "apt-cache search xorg";
 choices[75][3] = "dpkg";
 answers[75] = choices[75][0];
 units[75] = "53";
 comments[75] = "Id Pregunta: 11527. Examen TIC Servicio Extreme&ntilde;o de Salud 2014";


//  Id pregunta: 11528 AÃ±o de creación de pregunta: 2015-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l de entre las siguientes es una de las caracter&iacute;sticas del Cloud?";
 choices[76]= new Array();
 choices[76][0] = "El consumo a la carta: un consumidor puede proporcionarse las necesidades TIC que precise sin que medie el proveedor.";
 choices[76][1] = "El acceso a las capacidades disponibles en la red se puede hacer usando plataformas heterog&eacute;neas.";
 choices[76][2] = "Los recursos TIC del proveedor se reservan para ser usados por varios consumidores.";
 choices[76][3] = "Todas las respuestas anteriores son ciertas.";
 answers[76] = choices[76][3];
 units[76] = "47";
 comments[76] = "Id Pregunta: 11528. Examen TIC Servicio Extreme&ntilde;o de Salud 2014";


//  Id pregunta: 11530 AÃ±o de creación de pregunta: 2015-01-01
 questions[77]= "78)  Indicar cu&aacute;l de las siguientes afirmaciones es m&aacute;s id&oacute;nea para definir un sistema de Workflow.";
 choices[77]= new Array();
 choices[77][0] = "Se trata de un sistema de invocaci&oacute;n en la ejecuci&oacute;n de operaciones de entrada salida";
 choices[77][1] = "Se trata de una herramienta para mejorar la ejecuci&oacute;n y el control de los procesos de negocio";
 choices[77][2] = "Se trata de una herramienta para el dibujo de diagramas de flujo";
 choices[77][3] = "Se trata de una herramienta que nos permite establecer prioridades en una cola de trabajo";
 answers[77] = choices[77][1];
 units[77] = "71";
 comments[77] = "Id Pregunta: 11530. NULL";


//  Id pregunta: 11534 AÃ±o de creación de pregunta: 2015-01-01
 questions[78]= "79)  Seg&uacute;n la Ley 34/2002 de Servicios de la Sociedad de la Informaci&oacute;n y Comercio electr&oacute;nico, el procedimiento de cooperaci&oacute;n intracomunitario en el que se propone la realizaci&oacute;n de acciones urgentes contra un prestador de servicios de la sociedad de la informaci&oacute;n establecido en la U.E que haya incumplido alguno de los preceptos de la Ley, requiere notificaci&oacute;n al Consejo Europeo y al Estado Miembro en el que opera dicho Prestador en un Plazo M&Aacute;XIMO de:";
 choices[78]= new Array();
 choices[78][0] = "1 mes desde la adopci&oacute;n de las acciones urgentes.";
 choices[78][1] = "30 d&iacute;as desde la adopci&oacute;n de las acciones urgentes.";
 choices[78][2] = "15 d&iacute;as desde la adopci&oacute;n de acciones urgentes.";
 choices[78][3] = "Ninguna de las anteriores.";
 answers[78] = choices[78][2];
 units[78] = "70";
 comments[78] = "Id Pregunta: 11534. NULL";


//  Id pregunta: 11564 AÃ±o de creación de pregunta: 2015-01-01
 questions[79]= "80)  En las redes m&oacute;viles 4G, LTE, el interfaz existente entre los eNodeB y la MME (entidad de gesti&oacute;n de la movilidad), se denomina:";
 choices[79]= new Array();
 choices[79][0] = "x2";
 choices[79][1] = "S1";
 choices[79][2] = "Um";
 choices[79][3] = "Abis";
 answers[79] = choices[79][0];
 units[79] = "108";
 comments[79] = "Id Pregunta: 11564. NULL";


//  Id pregunta: 11568 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  Protocolo que permite el aprendizaje de redes y evita que se produzcan bucles a nivel de enlace.";
 choices[80]= new Array();
 choices[80][0] = "802.1D";
 choices[80][1] = "802.Q";
 choices[80][2] = "Spanning Tree Algorithm";
 choices[80][3] = "Algotirmo de Dijkstra";
 answers[80] = choices[80][0];
 units[80] = "102";
 comments[80] = "Id Pregunta: 11568. Como pregunta por protocolo es la a), y no el algoritmo c) que utiliza dicho protocolo.";


//  Id pregunta: 11576 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  Indique la respuesta FALSA sobre la tecnolog&iacute;a HSDPA.";
 choices[81]= new Array();
 choices[81][0] = "Utiliza t&eacute;cnicas de redundancia incremental durante la transmisi&oacute;n de tramas.";
 choices[81][1] = "Incorpora una mejora del enlace ascendente de UMTS de manera que permite disponer de una nueva portadora a 384 Kbps.";
 choices[81][2] = "Utiliza FAST PACKET SCHEDULING, con el cual las estaci&oacute;n base decide a qu&eacute; usuarios se les enviar&aacute; datso en el siguiente marco de 4 ms.";
 choices[81][3] = "Mantiene la compatibilidad en sentido inverso con W-CDMA.";
 answers[81] = choices[81][2];
 units[81] = "108";
 comments[81] = "Id Pregunta: 11576. NULL";


//  Id pregunta: 11582 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  De acuerdo a la LOPD, el incumplimiento del deber de informaci&oacute;n al afectado acerca del tratamiento de sus datos de car&aacute;cter personal constituye una infracci&oacute;n de car&aacute;cter:";
 choices[82]= new Array();
 choices[82][0] = "Leve, cuando los datos se han recabado del propio interesado";
 choices[82][1] = "Grave, cuando los datos se han recabado del propio interesado";
 choices[82][2] = "Leve, cuando los datos no se han recabado del propio interesado";
 choices[82][3] = "Todas las anteriores son falsas";
 answers[82] = choices[82][0];
 units[82] = "29";
 comments[82] = "Id Pregunta: 11582. ";


//  Id pregunta: 11586 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  La pauta WCAG 2.0 de ayuda a la entrada de datos se relaciona con el principio de: ";
 choices[83]= new Array();
 choices[83][0] = "Operabilidad";
 choices[83][1] = "Robustez";
 choices[83][2] = "Perceptibilidad";
 choices[83][3] = "Comprensibilidad";
 answers[83] = choices[83][3];
 units[83] = "39";
 comments[83] = "Id Pregunta: 11586. ";


//  Id pregunta: 11596 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  Con respecto a las Comisiones Ministeriales de Administraci&oacute;n Digital, se&ntilde;ale la respuesta correcta:";
 choices[84]= new Array();
 choices[84][0] = "Definen las prioridades de inversi&oacute;n en materias TIC de acuerdo con los objetivos establecidos por el Gobierno.";
 choices[84][1] = "Impulsan la colaboraci&oacute;n y cooperaci&oacute;n con las comunidades aut&oacute;nomas y las entidades locales para la puesta en marcha de servicios interadministrativos integrados y la compartici&oacute;n de infraestructuras t&eacute;cnicas y los servicios comunes que permitan la racionalizaci&oacute;n de los recursos TIC a todos los niveles del Estado.";
 choices[84][2] = "Act&uacute;an como Observatorio de la Administraci&oacute;n Electr&oacute;nica y Transformaci&oacute;n Digital.";
 choices[84][3] = "Impulsan la digitalizaci&oacute;n de los servicios y procedimientos del departamento con el fin de homogeneizarlos, simplificarlos, mejorar su calidad y facilidad de uso, as&iacute; como las prestaciones ofrecidas a los ciudadanos y empresas, optimizando la utilizaci&oacute;n de los recursos TIC disponibles.";
 answers[84] = choices[84][3];
 units[84] = "43";
 comments[84] = "Id Pregunta: 11596. ";


//  Id pregunta: 11607 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  La modalidad de Cloud Computing en la que se ofrece todo lo necesario para soportar la puesta en producci&oacute;n de aplicaciones y servicios web as&iacute; como el ciclo de vida completo de su desarrollo, construcci&oacute;n, ensayo y preproducci&oacute;n es:";
 choices[85]= new Array();
 choices[85][0] = "IaaS";
 choices[85][1] = "PaaS";
 choices[85][2] = "SaaS";
 choices[85][3] = "CaaS";
 answers[85] = choices[85][2];
 units[85] = "47";
 comments[85] = "Id Pregunta: 11607. ";


//  Id pregunta: 11627 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  Camellia es un algoritmo:";
 choices[86]= new Array();
 choices[86][0] = "Sim&eacute;trico de bloque";
 choices[86][1] = "Sim&eacute;trico de flujo";
 choices[86][2] = "Asim&eacute;trico";
 choices[86][3] = "De funci&oacute;n hash";
 answers[86] = choices[86][0];
 units[86] = "72";
 comments[86] = "Id Pregunta: 11627. ";


//  Id pregunta: 11653 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  Una trama STM-4 tiene una capacidad de:";
 choices[87]= new Array();
 choices[87][0] = "155 Mbps";
 choices[87][1] = "622 Mbps";
 choices[87][2] = "2,5 Gbps";
 choices[87][3] = "10 Gbps";
 answers[87] = choices[87][1];
 units[87] = "101";
 comments[87] = "Id Pregunta: 11653. ";


//  Id pregunta: 11659 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  En UMTS, la banda ascendente FDD usa el rango de frecuencias:";
 choices[88]= new Array();
 choices[88][0] = "1920 MHz a 1980 MHz";
 choices[88][1] = "1980 MHz a 2010 MHz";
 choices[88][2] = "2110 MHz a 2170 MHz";
 choices[88][3] = "2170 MHz a 2200 MHz";
 answers[88] = choices[88][0];
 units[88] = "108";
 comments[88] = "Id Pregunta: 11659. ";


//  Id pregunta: 11687 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Al conectar un PC y un HUB se debe usar:";
 choices[89]= new Array();
 choices[89][0] = "Straight-through cable";
 choices[89][1] = "Consola";
 choices[89][2] = "Crossover cable";
 choices[89][3] = "RJ 11";
 answers[89] = choices[89][0];
 units[89] = "99";
 comments[89] = "Id Pregunta: 11687. NULL";


//  Id pregunta: 11695 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Los mensajes intercambiados entre Bridges en STP se denominan:";
 choices[90]= new Array();
 choices[90][0] = "PDUs";
 choices[90][1] = "PDIs";
 choices[90][2] = "BPDU";
 choices[90][3] = "SPDU";
 answers[90] = choices[90][2];
 units[90] = "102";
 comments[90] = "Id Pregunta: 11695. NULL";


//  Id pregunta: 11710 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Qu&eacute; m&eacute;todo de conmutaci&oacute;n LAN ejecuta un CRC en cada trama?";
 choices[91]= new Array();
 choices[91][0] = "Metodo de corte";
 choices[91][1] = "Verificaci&oacute;n de fragmentos";
 choices[91][2] = "Libre de fragmentos";
 choices[91][3] = "Almacenamiento y env&iacute;o";
 answers[91] = choices[91][3];
 units[91] = "102";
 comments[91] = "Id Pregunta: 11710. NULL";


//  Id pregunta: 11713 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de los siguientes elementos es utilizado en las listas de acceso IP est&aacute;ndar como base para permitir o denegar paquetes?";
 choices[92]= new Array();
 choices[92][0] = "Direccion destino IP";
 choices[92][1] = "Direccion origen IP";
 choices[92][2] = "Protocolo";
 choices[92][3] = "Puerto";
 answers[92] = choices[92][1];
 units[92] = "102";
 comments[92] = "Id Pregunta: 11713. NULL";


//  Id pregunta: 11718 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Qu&eacute; sucede si se pierde el primer paquete de una transferencia TFTP? ";
 choices[93]= new Array();
 choices[93][0] = "La aplicaci&oacute;n TFTP volver&aacute; a intentar la solicitud si no se recibe una respuesta. ";
 choices[93][1] = "El router del siguiente salto o la puerta de enlace predeterminada proporcionar&aacute;n una respuesta con un c&oacute;digo de error. ";
 choices[93][2] = "El cliente esperar&aacute; indefinidamente la respuesta. ";
 choices[93][3] = " La capa de transporte volver&aacute; a intentar la consulta si no se recibe una respuesta.";
 answers[93] = choices[93][0];
 units[93] = "111";
 comments[93] = "Id Pregunta: 11718. NULL";


//  Id pregunta: 11720 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)   El n&uacute;mero binario 11110011 puede expresarse en hexadecimal como:";
 choices[94]= new Array();
 choices[94][0] = "A9";
 choices[94][1] = "F3";
 choices[94][2] = "0C";
 choices[94][3] = "FC";
 answers[94] = choices[94][1];
 units[94] = "99";
 comments[94] = "Id Pregunta: 11720. NULL";


//  Id pregunta: 11730 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Qu&eacute;  protocolo, en el &aacute;mbito de Ipsec, proporciona confidencialidad de los datos y la autenticaci&oacute;n de paquetes IP?";
 choices[95]= new Array();
 choices[95][0] = "AH";
 choices[95][1] = "RSA";
 choices[95][2] = "IKE";
 choices[95][3] = "ESP";
 answers[95] = choices[95][3];
 units[95] = "111";
 comments[95] = "Id Pregunta: 11730. NULL";


//  Id pregunta: 11752 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l de los siguientes no es un principio de accesibilidad?";
 choices[96]= new Array();
 choices[96][0] = "robusto";
 choices[96][1] = "operable";
 choices[96][2] = "universal";
 choices[96][3] = "perceptible";
 answers[96] = choices[96][2];
 units[96] = "39";
 comments[96] = "Id Pregunta: 11752. ";


//  Id pregunta: 11762 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Qu&eacute; es la DTIC?";
 choices[97]= new Array();
 choices[97][0] = "Direcci&oacute;n General de las TI.";
 choices[97][1] = "Direcci&oacute;n con rango de Subsecretar&iacute;a.";
 choices[97][2] = "Subdirecci&oacute;n General de las TI";
 choices[97][3] = "Comit&eacute; t&eacute;cnico de las TI.";
 answers[97] = choices[97][1];
 units[97] = "43";
 comments[97] = "Id Pregunta: 11762. ";


//  Id pregunta: 11765 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Qu&eacute; normativa supondr&aacute; la aprobaci&oacute;n de una nueva ley de contratos?";
 choices[98]= new Array();
 choices[98][0] = "El Reglamento de la Intervenci&oacute;n General del Estado";
 choices[98][1] = "El Acuerdo sobre Libre Comercio de la OCDE";
 choices[98][2] = "Las nuevas Directivas europeas en materia de contrataci&oacute;n&nbsp;";
 choices[98][3] = "El Reglamento funcional del Tribunal Administrativo Central de Recursos Contractuales";
 answers[98] = choices[98][2];
 units[98] = "41";
 comments[98] = "Id Pregunta: 11765. ";


//  Id pregunta: 11785 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Seg&uacute;n la ley 19/2013 de transparencia, y en lo referente a la composici&oacute;n de la Comisi&oacute;n de Transparencia y Buen Gobierno, se&ntilde;ale la FALSA:";
 choices[99]= new Array();
 choices[99][0] = "Un Senador";
 choices[99][1] = "Un representante de la Federaci&oacute;n Espa&ntilde;ola de Municipios y Provincias.";
 choices[99][2] = "Un representante de la Autoridad Independiente de Responsabilidad Fiscal";
 choices[99][3] = "Un representante de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[99] = choices[99][1];
 units[99] = "19";
 comments[99] = "Id Pregunta: 11785. ";


