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

//  Id pregunta: 163 Año de creación de pregunta: 2016
 questions[0]= "1)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, constituye una infracci&oacute;n grave:";
 choices[0]= new Array();
 choices[0][0] = "No conservaci&oacute;n reiterada o sistem&aacute;tica de los datos a los que se refiere el art&iacute;culo 3";
 choices[0][1] = "No conservaci&oacute;n en ning&uacute;n momento de los datos a los que se refiere el art&iacute;culo 3.";
 choices[0][2] = "El incumplimiento de la llevanza del libro-registro";
 choices[0][3] = "La conservaci&oacute;n de los datos por un per&iacute;odo superior al establecido en el art&iacute;culo 5.";
 answers[0] = choices[0][0];
 units[0] = "19";
 comments[0] = "Id Pregunta: 163. B y C: son &quot;Muy grave&quot;; D: para que fuera verdadera deber&iacute;a ser &quot;inferior&quot;";


//  Id pregunta: 172 Año de creación de pregunta: 2016
 questions[1]= "2)  La Constituci&oacute;n Espa&ntilde;ola reconoce el derecho de reuni&oacute;n:";
 choices[1]= new Array();
 choices[1][0] = "Pac&iacute;fica y sin armas pero con necesidad de autorizaci&oacute;n previa.";
 choices[1][1] = "En lugares de tr&aacute;nsito p&uacute;blico previa autorizaci&oacute;n de la autoridad.";
 choices[1][2] = "En los casos de reuniones en lugares de tr&aacute;nsito p&uacute;blico y manifestaciones se dar&aacute; comunicaci&oacute;n previa a la autoridad.";
 choices[1][3] = "No es preciso realizar ninguna actuaci&oacute;n.";
 answers[1] = choices[1][2];
 units[1] = "1";
 comments[1] = "Id Pregunta: 172. CONSTITUCION1978";


//  Id pregunta: 44 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Cu&aacute;les son las propiedades que debe cumplir una unidad l&oacute;gica de trabajo para ser calificada como transacci&oacute;n?";
 choices[2]= new Array();
 choices[2][0] = "Atomicidad, concurrencia, aislamiento y temporalidad";
 choices[2][1] = "Atomicidad, consistencia, aislamiento y durabilidad";
 choices[2][2] = "Atomicidad, concurrencia, escalabilidad y durabilidad";
 choices[2][3] = "Atomicidad, consistencia, aislamiento y temporalidad";
 answers[2] = choices[2][1];
 units[2] = "60";
 comments[2] = "Id Pregunta: 44. AGE A1 2015";


//  Id pregunta: 818 Año de creación de pregunta: 2016
 questions[3]= "4)  Respecto a los servicios territoriales es correcto:";
 choices[3]= new Array();
 choices[3][0] = "la organizaci&oacute;n de los servicios territoriales no integrados en las Delegaciones del Gobierno se establecer&aacute; mediante Real Decreto";
 choices[3][1] = "los servicios territoriales no integrados depender&aacute;n del Delegado del Gobierno, o en su caso Subdelegado del Gobierno, a trav&eacute;s de la Secretar&iacute;a General";
 choices[3][2] = "los servicios territoriales integrados depender&aacute;n del &oacute;rgano central competente sobre el sector de actividad en el que aqu&eacute;llos operen";
 choices[3][3] = "ninguna es correcta";
 answers[3] = choices[3][0];
 units[3] = "4, 7, 8, 9";
 comments[3] = "Id Pregunta: 818. Ley 40/2015";


//  Id pregunta: 686 Año de creación de pregunta: 2016
 questions[4]= "5)  Indique cu&aacute;l de las siguientes afirmaciones no es correcta seg&uacute;n lo establecido en el Reglamento (UE) 910/2014";
 choices[4]= new Array();
 choices[4][0] = "Las firmas electro&#769;nicas cualificadas tendr&aacute;n un efecto juri&#769;dico equivalente al de una firma manuscrita";
 choices[4][1] = "Una firma electro&#769;nica cualificada basada en un certificado cualificado emitido en un Estado miembro sera&#769; reconocida como firma electro&#769;nica cualificada en los dema&#769;s Estados miembros";
 choices[4][2] = "No se denegara&#769;n efectos juri&#769;dicos ni admisibilidad como prueba en procedimientos judiciales a una firma electro&#769;nica por el mero hecho de ser una firma electro&#769;nica";
 choices[4][3] = "Las firmas electr&oacute;nicas cualificadas tendr&aacute;n una validez de 48 meses";
 answers[4] = choices[4][3];
 units[4] = "77";
 comments[4] = "Id Pregunta: 686. Art&iacute;culo 25 del Reglamento 910/2014";


//  Id pregunta: 555 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Qui&eacute;nes son los beneficiarios de la estrategia para el Mercado &Uacute;nico Digital en la UE?";
 choices[5]= new Array();
 choices[5][0] = "Consumidores";
 choices[5][1] = "PYMES y Start-ups";
 choices[5][2] = "La Industria";
 choices[5][3] = "Todos los anteriores";
 answers[5] = choices[5][3];
 units[5] = "17";
 comments[5] = "Id Pregunta: 555. Mercado &Uacute;nico Digital";


//  Id pregunta: 761 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;En qu&eacute; a&ntilde;o se adopt&oacute; la Estrategia para el Mercado &Uacute;nico Digital?";
 choices[6]= new Array();
 choices[6][0] = "En 2011";
 choices[6][1] = "En 2013";
 choices[6][2] = "En 2015";
 choices[6][3] = "En 2016";
 answers[6] = choices[6][2];
 units[6] = "17";
 comments[6] = "Id Pregunta: 761. Mercado &Uacute;nico Digital";


//  Id pregunta: 635 Año de creación de pregunta: 2016
 questions[7]= "8)  En el modelo relacional existen diversas clasificaciones de las relaciones. Indica qu&eacute; tipos de relaciones se consideran relaciones persistentes:";
 choices[7]= new Array();
 choices[7][0] = "Relaciones base y vistas.";
 choices[7][1] = "Relaciones base, vistas y el resultado de una consulta.";
 choices[7][2] = "Relaciones base, vistas y relaciones temporales.";
 choices[7][3] = "Relaciones base, vistas e instant&aacute;neas.";
 answers[7] = choices[7][3];
 units[7] = "60";
 comments[7] = "Id Pregunta: 635. Junta de Extremadura A1 2015";


//  Id pregunta: 673 Año de creación de pregunta: 2016
 questions[8]= "9)  Se&ntilde;ale cual de los siguientes factores no contribuye a la sostenibilidad del sistema de pensiones:";
 choices[8]= new Array();
 choices[8][0] = "El aumento de la esperanza de vida.";
 choices[8][1] = "La mejora del &iacute;ndice de natalidad.";
 choices[8][2] = "La reducci&oacute;n del desempleo.";
 choices[8][3] = "El incremento de la edad de jubilaci&oacute;n.";
 answers[8] = choices[8][0];
 units[8] = "14";
 comments[8] = "Id Pregunta: 673. Estructura social";


//  Id pregunta: 18 Año de creación de pregunta: 2016
 questions[9]= "10)  Indique en qu&eacute; capa del modelo OSI se establece la encriptaci&oacute;n:";
 choices[9]= new Array();
 choices[9][0] = "Aplicaci&oacute;n";
 choices[9][1] = "Sesi&oacute;n";
 choices[9][2] = "Presentaci&oacute;n";
 choices[9][3] = "Transporte";
 answers[9] = choices[9][2];
 units[9] = "105";
 comments[9] = "Id Pregunta: 18. AGE A1 2015";


//  Id pregunta: 125 Año de creación de pregunta: 2016
 questions[10]= "11)  El derecho de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/20013  podr&aacute; ser limitado cuando acceder a la informaci&oacute;n suponga un perjuicio, se&ntilde;ale cual NO est&aacute; contemplado en dicha ley:";
 choices[10]= new Array();
 choices[10][0] = "Los intereses de las administraciones que cuenten con su propio Consejo de Transparencia u &oacute;rgano equivalente.";
 choices[10][1] = "La garant&iacute;a de la confidencialidad o el secreto requerido en procesos de toma de decisi&oacute;n.";
 choices[10][2] = "La protecci&oacute;n del medio ambiente.";
 choices[10][3] = "Los intereses econ&oacute;micos y comerciales.";
 answers[10] = choices[10][0];
 units[10] = "22";
 comments[10] = "Id Pregunta: 125. ";


//  Id pregunta: 25 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Mediante qu&eacute; tipo de objetos se implementa el acceso a los recursos gestionados con la tecnolog&iacute;a JMX?";
 choices[11]= new Array();
 choices[11][0] = "SessionBean";
 choices[11][1] = "JavaBean";
 choices[11][2] = "MBeans";
 choices[11][3] = "MessageDrivenBean";
 answers[11] = choices[11][2];
 units[11] = "64";
 comments[11] = "Id Pregunta: 25. AGE A1 2015";


//  Id pregunta: 422 Año de creación de pregunta: 2016
 questions[12]= "13)  Los distintivos para reconocer a aquellas empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato, lo crear&aacute;:";
 choices[12]= new Array();
 choices[12][0] = "El Ministerio de Igualdad.";
 choices[12][1] = "El Ministerio de Empleo y Seguridad Social.";
 choices[12][2] = "Ambas son correctas.";
 choices[12][3] = "La Consejer&iacute;a de Igualdad de cada CCAA.";
 answers[12] = choices[12][1];
 units[12] = "14";
 comments[12] = "Id Pregunta: 422. POLITICAS DE IGUALDAD";


//  Id pregunta: 209 Año de creación de pregunta: 2016
 questions[13]= "14)  Corresponde aprobar el proyecto de Ley de Presupuestos Generales del Estado a:";
 choices[13]= new Array();
 choices[13][0] = "El Ministerio de Econom&iacute;a y Hacienda.";
 choices[13][1] = "El Congreso de los Diputados.";
 choices[13][2] = "Las Cortes Generales.";
 choices[13][3] = "El Consejo de Ministros";
 answers[13] = choices[13][3];
 units[13] = "1";
 comments[13] = "Id Pregunta: 209. CONSTITUCION1978";


//  Id pregunta: 654 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Qu&eacute; significa la tolerancia a partici&oacute;n dentro del teorema CAP?";
 choices[14]= new Array();
 choices[14][0] = "El sistema podr&aacute; seguir procesando una petici&oacute;n aunque se pierda la conectividad con algun nodo";
 choices[14][1] = "Las modificaciones se aplican a todos los nodos en su conjunto en el mismo momento";
 choices[14][2] = "Cualquier peticion recibida en un nodo debe tener respuesta";
 choices[14][3] = "El teorema CAP no habla de tolerancia a particiones";
 answers[14] = choices[14][0];
 units[14] = "73";
 comments[14] = "Id Pregunta: 654. ";


//  Id pregunta: 238 Año de creación de pregunta: 2016
 questions[15]= "16)  En caso de dimisi&oacute;n del Presidente del Gobierno:";
 choices[15]= new Array();
 choices[15][0] = "El Gobierno cesa a continuaci&oacute;n.";
 choices[15][1] = "El Rey podr&aacute; proponer, a trav&eacute;s del Presidente del Congreso, un nuevo candidato a la Presidencia del Gobierno.";
 choices[15][2] = "El Pleno del Congreso, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 choices[15][3] = "El Pleno del Congreso y del Senado, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 answers[15] = choices[15][1];
 units[15] = "1";
 comments[15] = "Id Pregunta: 238. CONSTITUCION1978";


//  Id pregunta: 269 Año de creación de pregunta: 2016
 questions[16]= "17)  El T&iacute;tulo Segundo de la Constituci&oacute;n Espa&ntilde;ola tiene:";
 choices[16]= new Array();
 choices[16][0] = "Diez art&iacute;culos.";
 choices[16][1] = "Nueve art&iacute;culos.";
 choices[16][2] = "Once art&iacute;culos.";
 choices[16][3] = "Ocho art&iacute;culos.";
 answers[16] = choices[16][0];
 units[16] = "1";
 comments[16] = "Id Pregunta: 269. CONSTITUCION1978";


//  Id pregunta: 516 Año de creación de pregunta: 2016
 questions[17]= "18)  Las Universidades p&uacute;blicas:";
 choices[17]= new Array();
 choices[17][0] = "se regir&aacute;n &uacute;nicamente por su normativa espec&iacute;fica";
 choices[17][1] = "se regir&aacute;n por su normativa espec&iacute;fica y supletoriamente por las previsiones de esta Ley";
 choices[17][2] = "se regir&aacute;n por las previsiones de esta Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[17][3] = "se regir&aacute;n &uacute;nicamente por las previsiones de esta Ley";
 answers[17] = choices[17][1];
 units[17] = "7";
 comments[17] = "Id Pregunta: 516. LEY 39/2015";


//  Id pregunta: 615 Año de creación de pregunta: 2016
 questions[18]= "19)  El establecimiento de una conexi&oacute;n mediante el protocolo TCP, b&aacute;sicamente se realiza de la siguiente manera:";
 choices[18]= new Array();
 choices[18][0] = "Emisor: env&iacute;a SYN. Receptor: env&iacute;a SYN+ACK. Emisor: env&iacute;a ACK.";
 choices[18][1] = "Emisor: env&iacute;a ACK. Receptor: env&iacute;a ACK+SYN. Emisor: env&iacute;a SYN.";
 choices[18][2] = "Emisor: env&iacute;a SYN. Receptor: env&iacute;a ACK.";
 choices[18][3] = "Emisor: env&iacute;a ACK. Receptor: env&iacute;a SYN.";
 answers[18] = choices[18][0];
 units[18] = "109";
 comments[18] = "Id Pregunta: 615. Junta de Extremadura A1 2015";


//  Id pregunta: 419 Año de creación de pregunta: 2016
 questions[19]= "20)  Promover&aacute;n el conocimiento y la difusi&oacute;n del principio de igualdad entre mujeres y hombres, los medios de comunicaci&oacute;n de titularidad:";
 choices[19]= new Array();
 choices[19][0] = "P&uacute;blica.";
 choices[19][1] = "Privada.";
 choices[19][2] = "Ambas son correctas.";
 choices[19][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[19] = choices[19][0];
 units[19] = "14";
 comments[19] = "Id Pregunta: 419. POLITICAS DE IGUALDAD";


//  Id pregunta: 107 Año de creación de pregunta: 2016
 questions[20]= "21)  Son bases de datos NoSQL orientadas a objetos:";
 choices[20]= new Array();
 choices[20][0] = "GemStone";
 choices[20][1] = "Zope Object DB";
 choices[20][2] = "Las dos anteriores";
 choices[20][3] = "Solo B)";
 answers[20] = choices[20][2];
 units[20] = "73";
 comments[20] = "Id Pregunta: 107. ";


//  Id pregunta: 677 Año de creación de pregunta: 2016
 questions[21]= "22)  Las situaciones de dependencia se clasifican en los siguientes grados:";
 choices[21]= new Array();
 choices[21][0] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave";
 choices[21][1] = "Grado I dependencia moderada, grado II dependencia severa, grado III dependencia muy severa";
 choices[21][2] = "Grado I dependencia moderada, grado II dependencia severa, grado III gran dependencia";
 choices[21][3] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave, grado IV gran dependencia";
 answers[21] = choices[21][2];
 units[21] = "14";
 comments[21] = "Id Pregunta: 677. Dependencia";


//  Id pregunta: 764 Año de creación de pregunta: 2016
 questions[22]= "23)  El sector p&uacute;blico institucional se integra por:";
 choices[22]= new Array();
 choices[22][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[22][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[22][2] = "las Universidades p&uacute;blicas";
 choices[22][3] = "todas son correctas";
 answers[22] = choices[22][3];
 units[22] = "4, 7, 8, 9";
 comments[22] = "Id Pregunta: 764. Ley 40/2015";


//  Id pregunta: 289 Año de creación de pregunta: 2016
 questions[23]= "24)  La duraci&oacute;n del mandato del Defensor del Pueblo Europeo es de:";
 choices[23]= new Array();
 choices[23][0] = "Tres a&ntilde;os.";
 choices[23][1] = "Dos a&ntilde;os y medio.";
 choices[23][2] = "Cinco a&ntilde;os.";
 choices[23][3] = "Seis a&ntilde;os.";
 answers[23] = choices[23][2];
 units[23] = "5";
 comments[23] = "Id Pregunta: 289. UNION EUROPEA";


//  Id pregunta: 747 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Cu&aacute;les de los siguientes principios de inspiraci&oacute;n en la funci&oacute;n gerencial NO incorpora la Ley 40/2015?";
 choices[24]= new Array();
 choices[24][0] = "Buena fe, confianza leg&iacute;tima y lealtad institucional.";
 choices[24][1] = "Calidad de los servicios p&uacute;blicos";
 choices[24][2] = "Responsabilidad por la gesti&oacute;n p&uacute;blica.";
 choices[24][3] = "Servicio efectivo a los ciudadanos";
 answers[24] = choices[24][1];
 units[24] = "18, 20";
 comments[24] = "Id Pregunta: 747. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 737 Año de creación de pregunta: 2016
 questions[25]= "26)  En el Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE, las administraciones p&uacute;blicas y las instituciones p&uacute;blicas de la Uni&oacute;n Europea deben ser abiertas, eficaces e integradoras en el a&ntilde;o:";
 choices[25]= new Array();
 choices[25][0] = "2025";
 choices[25][1] = "2023";
 choices[25][2] = "2030";
 choices[25][3] = "2020";
 answers[25] = choices[25][3];
 units[25] = "28";
 comments[25] = "Id Pregunta: 737. Estrategia TIC";


//  Id pregunta: 101 Año de creación de pregunta: 2016
 questions[26]= "27)  El Teorema de Brewer o Principio CAP recoge las siguientes garant&iacute;as:";
 choices[26]= new Array();
 choices[26][0] = "Consistencia (Consistency), Disponibilidad (Availability) y Persistencia (Persistence)";
 choices[26][1] = "Consistencia (Consistency), Disponibilidad (Availability) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[26][2] = "Consistencia (Consistency), Atomicidad (Atomicity) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[26][3] = "Confidencialidad (Confidentiality), Autenticidad (Authentication) y Protecci&oacute;n (Protection)";
 answers[26] = choices[26][1];
 units[26] = "73";
 comments[26] = "Id Pregunta: 101. ";


//  Id pregunta: 407 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;Qu&eacute; art&iacute;culo de la CE, consagra la obligaci&oacute;n de los poderes p&uacute;blicos para promover las condiciones para la igualdad del individuo:";
 choices[27]= new Array();
 choices[27][0] = "Art&iacute;culo 14 CE.";
 choices[27][1] = "Art&iacute;culo 9.2 CE.";
 choices[27][2] = "Art&iacute;culo 9.1 CE.";
 choices[27][3] = "Art&iacute;culo 13 CE.";
 answers[27] = choices[27][2];
 units[27] = "14";
 comments[27] = "Id Pregunta: 407. POLITICAS DE IGUALDAD";


//  Id pregunta: 355 Año de creación de pregunta: 2016
 questions[28]= "29)  En el marco de la Uni&oacute;n Europea, los dict&aacute;menes:";
 choices[28]= new Array();
 choices[28][0] = "Son vinculantes solamente.";
 choices[28][1] = "No son vinculantes, ya que su contenido no obliga a aqu&eacute;llos a los que van dirigidos.";
 choices[28][2] = "Son preceptivos y vinculantes.";
 choices[28][3] = "Son preceptivos y no vinculantes.";
 answers[28] = choices[28][1];
 units[28] = "5";
 comments[28] = "Id Pregunta: 355. UNION EUROPEA";


//  Id pregunta: 598 Año de creación de pregunta: 2016
 questions[29]= "30)  Entre la documentaci&oacute;n de la Seguridad de la Organizaci&oacute;n nos podremos encontrar:";
 choices[29]= new Array();
 choices[29][0] = "La Pol&iacute;tica de Seguridad Corporativa ser&aacute; elaborada por el Responsable de Seguridad Corporativa y aprobada por el Comit&eacute; de Seguridad Corporativa y por la Alta Direcci&oacute;n.";
 choices[29][1] = "La Pol&iacute;tica de Seguridad de las TIC que debe estar alineada en todo momento con el Mantenimiento de los Sistemas de Informaci&oacute;n.";
 choices[29][2] = "El Documento de Seguridad que ha de estar presente en toda documentaci&oacute;n de la seguridad de la informaci&oacute;n.";
 choices[29][3] = "Todas las respuestas anteriores son correctas.";
 answers[29] = choices[29][0];
 units[29] = "45";
 comments[29] = "Id Pregunta: 598. Junta de Extremadura A1 2015";


//  Id pregunta: 260 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se recoge el principio de unidad jurisdiccional?:";
 choices[30]= new Array();
 choices[30][0] = "117.5";
 choices[30][1] = "117.1";
 choices[30][2] = "116";
 choices[30][3] = "15";
 answers[30] = choices[30][0];
 units[30] = "1";
 comments[30] = "Id Pregunta: 260. CONSTITUCION1978";


//  Id pregunta: 263 Año de creación de pregunta: 2016
 questions[31]= "32)  Los Vocales integrantes del &oacute;rgano de gobierno del Poder Judicial:";
 choices[31]= new Array();
 choices[31][0] = "Ser&aacute;n nombrados por el Presidente del Tribunal Supremo y del Consejo del Poder Judicial, por un periodo de cinco a&ntilde;os.";
 choices[31][1] = "Ser&aacute;n nombrados por el Congreso de los Diputados y por el Senado por un periodo de cinco a&ntilde;os.";
 choices[31][2] = "Ser&aacute;n nombrados por el Rey por un periodo de cinco a&ntilde;os.";
 choices[31][3] = "er&aacute;n nombrados por el Rey por un periodo de tres a&ntilde;os.";
 answers[31] = choices[31][1];
 units[31] = "1";
 comments[31] = "Id Pregunta: 263. CONSTITUCION1978";


//  Id pregunta: 499 Año de creación de pregunta: 2016
 questions[32]= "33)  A tenor de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la cuant&iacute;a global de los anticipos de caja fija no podr&aacute; superar para cada ministerio y organismo aut&oacute;nomo:";
 choices[32]= new Array();
 choices[32][0] = "El 7% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[32][1] = "El 5% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[32][2] = "El 6% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[32][3] = "El 8% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 answers[32] = choices[32][0];
 units[32] = "10";
 comments[32] = "Id Pregunta: 499. PRESUPUESTOS GENERALES";


//  Id pregunta: 223 Año de creación de pregunta: 2016
 questions[33]= "34)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, durante el periodo de su mandato los Diputados y Senadores gozar&aacute;n asimismo de inmunidad y s&oacute;lo podr&aacute;n ser detenidos en caso de flagrante delito. No podr&aacute;n ser inculpados ni procesados sin la previa autorizaci&oacute;n:";
 choices[33]= new Array();
 choices[33][0] = "De la C&aacute;mara respectiva.";
 choices[33][1] = "Del Rey.";
 choices[33][2] = "Del Tribunal Constitucional.";
 choices[33][3] = "Del Tribunal Supremo.";
 answers[33] = choices[33][0];
 units[33] = "1";
 comments[33] = "Id Pregunta: 223. CONSTITUCION1978";


//  Id pregunta: 663 Año de creación de pregunta: 2016
 questions[34]= "35)  Seg&uacute;n la Ley 39/2015, la iniciaci&oacute;n de un procedimiento administrativo puede realizarse:";
 choices[34]= new Array();
 choices[34][0] = "De oficio.";
 choices[34][1] = "A solicitud del interesado.";
 choices[34][2] = "De oficio o a solicitud del interesado.";
 choices[34][3] = "Por la Administraci&oacute;n P&uacute;blica responsable.";
 answers[34] = choices[34][2];
 units[34] = "7";
 comments[34] = "Id Pregunta: 663. Art&iacute;culo 54 de la Ley 39/2015";


//  Id pregunta: 323 Año de creación de pregunta: 2016
 questions[35]= "36)  Los Jueces y Abogados Generales del Tribunal de Justicia de la Uni&oacute;n Europea son nombrados para un per&iacute;odo de:";
 choices[35]= new Array();
 choices[35][0] = "Tres a&ntilde;os.";
 choices[35][1] = "Cuatro a&ntilde;os.";
 choices[35][2] = "Cinco a&ntilde;os.";
 choices[35][3] = "Seis a&ntilde;os.";
 answers[35] = choices[35][3];
 units[35] = "5";
 comments[35] = "Id Pregunta: 323. UNION EUROPEA";


//  Id pregunta: 381 Año de creación de pregunta: 2016
 questions[36]= "37)  La ley Org&aacute;nica 3/2007 para la igualdad efectiva entre hombres y mujeres en el &aacute;mbito de la Sociedad de la Informaci&oacute;n, obliga al Gobierno:";
 choices[36]= new Array();
 choices[36][0] = "A promover los contenidos creados por mujeres en el &aacute;mbito de la Sociedad de la Informaci&oacute;n";
 choices[36][1] = "A proteger los contenidos creados por mujeres n el &aacute;mbito de la Sociedad de la Informaci&oacute;n con medidas especiales de propiedad intelectual.";
 choices[36][2] = "A dise&ntilde;ar webs con contenido espec&iacute;fico femenino.";
 choices[36][3] = "A incorporar, en las convocatorias de empleo p&uacute;blico, igual n&uacute;mero de funcionarios que de funcionarias.";
 answers[36] = choices[36][0];
 units[36] = "14";
 comments[36] = "Id Pregunta: 381. POLITICAS DE IGUALDAD";


//  Id pregunta: 271 Año de creación de pregunta: 2016
 questions[37]= "38)  La delegaci&oacute;n legislativa de las Cortes Generales en el Gobierno, cuando se trata de refundir varios textos legales en uno solo, deber&aacute; otorgarse mediante:";
 choices[37]= new Array();
 choices[37][0] = "Ley org&aacute;nica.";
 choices[37][1] = "Ley ordinaria.";
 choices[37][2] = "Ley de bases.";
 choices[37][3] = "Ley marco.";
 answers[37] = choices[37][0];
 units[37] = "1";
 comments[37] = "Id Pregunta: 271. CONSTITUCION1978";


//  Id pregunta: 386 Año de creación de pregunta: 2016
 questions[38]= "39)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con las pol&iacute;ticas de igualdad de g&eacute;nero, de conformidad con la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad de mujeres y hombres:";
 choices[38]= new Array();
 choices[38][0] = "El Ministerio de Trabajo y Asuntos Sociales crear&aacute; un distintivo para reconocer a las empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato y de oportunidades con sus trabajadores y trabajadoras.";
 choices[38][1] = "Todas las empresas con sede en Espa&ntilde;a est&aacute;n obligadas a elaborar un plan de igualdad entre sus trabajadores y trabajadoras.";
 choices[38][2] = "En los procesos de car&aacute;cter penal en los que las alegaciones de la parte actora se fundamenten en actuaciones discriminatorias por raz&oacute;n de sexo, corresponde a la persona demandada probar la ausencia de discriminaci&oacute;n.";
 choices[38][3] = "La mitad, al menos, de los nuevos nombramientos de titulares de los &oacute;rganos directivos de la Administraci&oacute;n General del Estado, durante un plazo de dos a&ntilde;os a partir de la entrada en vigor de la ley, deber&aacute;n ser mujeres.";
 answers[38] = choices[38][0];
 units[38] = "14";
 comments[38] = "Id Pregunta: 386. POLITICAS DE IGUALDAD";


//  Id pregunta: 291 Año de creación de pregunta: 2016
 questions[39]= "40)  La duraci&oacute;n del mandato de los miembros del Tribunal de Cuentas de la Uni&oacute;n Europea es de:";
 choices[39]= new Array();
 choices[39][0] = "Tres a&ntilde;os.";
 choices[39][1] = "Dos a&ntilde;os y medio.";
 choices[39][2] = "Cinco a&ntilde;os.";
 choices[39][3] = "Seis a&ntilde;os.";
 answers[39] = choices[39][3];
 units[39] = "5";
 comments[39] = "Id Pregunta: 291. UNION EUROPEA";


//  Id pregunta: 465 Año de creación de pregunta: 2016
 questions[40]= "41)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales deber&aacute; de contener:";
 choices[40]= new Array();
 choices[40][0] = "Las respuestas a) y b) son correctas.";
 choices[40][1] = "Las respuestas a) y b) no son correctas.";
 choices[40][2] = "Contenido coherente con los planes sectoriales.";
 choices[40][3] = "Programas de actuaci&oacute;n de existentes en el &aacute;mbito de cada departamento.";
 answers[40] = choices[40][0];
 units[40] = "10";
 comments[40] = "Id Pregunta: 465. PRESUPUESTOS GENERALES";


//  Id pregunta: 502 Año de creación de pregunta: 2016
 questions[41]= "42)  La Ley Org&aacute;nica 2/2012 destaca una serie de principios generales entre los que no se encuentra:";
 choices[41]= new Array();
 choices[41][0] = "Principio de transparencia.";
 choices[41][1] = "Principio de cooperaci&oacute;n.";
 choices[41][2] = "Principio de eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos.";
 choices[41][3] = "Principio de lealtad institucional.";
 answers[41] = choices[41][1];
 units[41] = "10";
 comments[41] = "Id Pregunta: 502. PRESUPUESTOS GENERALES";


//  Id pregunta: 249 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[42]= new Array();
 choices[42][0] = "Art&iacute;culo 16.2.";
 choices[42][1] = "Art&iacute;culo 17.1.";
 choices[42][2] = "Art&iacute;culo 18.1.";
 choices[42][3] = "Art&iacute;culo 18.2.";
 answers[42] = choices[42][0];
 units[42] = "1";
 comments[42] = "Id Pregunta: 249. CONSTITUCION1978";


//  Id pregunta: 201 Año de creación de pregunta: 2016
 questions[43]= "44)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[43]= new Array();
 choices[43][0] = "La aprobaci&oacute;n, modificaci&oacute;n o derogaci&oacute;n de las leyes org&aacute;nicas exigir&aacute; mayor&iacute;a absoluta de las Cortes Generales, en una votaci&oacute;n final sobre el conjunto del proyecto.";
 choices[43][1] = "Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada recibir&aacute;n el t&iacute;tulo de Decretos-leyes.";
 choices[43][2] = "Son leyes org&aacute;nicas las relativas al desarrollo de los derechos fundamentales y de las libertades p&uacute;blicas, las que aprueben los Estatutos de Autonom&iacute;a y el r&eacute;gimen electoral general y las dem&aacute;s previstas en la Constituci&oacute;n.";
 choices[43][3] = "La delegaci&oacute;n legislativa deber&aacute; otorgarse mediante una ley org&aacute;nica cuando su objeto sea la formaci&oacute;n de textos articulados o por una ley ordinaria cuando se trate de refundir varios textos legales en uno.";
 answers[43] = choices[43][2];
 units[43] = "1";
 comments[43] = "Id Pregunta: 201. CONSTITUCION1978";


//  Id pregunta: 370 Año de creación de pregunta: 2016
 questions[44]= "45)  Establecer la interpretaci&oacute;n adecuada de los Tratados de la Uni&oacute;n Europea y las normas de derecho derivado es el objeto de:";
 choices[44]= new Array();
 choices[44][0] = "Un recurso de incumplimiento.";
 choices[44][1] = "Recurso de carencia.";
 choices[44][2] = "Cuesti&oacute;n o incidente prejudicial.";
 choices[44][3] = "Ninguna es correcta.";
 answers[44] = choices[44][2];
 units[44] = "5";
 comments[44] = "Id Pregunta: 370. UNION EUROPEA";


//  Id pregunta: 9 Año de creación de pregunta: 2016
 questions[45]= "46)  Con respecto a los entornos de integraci&oacute;n continua, indique cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[45]= new Array();
 choices[45][0] = "Jenkins no dispone de la funcionalidad de extenderse mediante plugins.";
 choices[45][1] = "SonarQube utiliza herramientas de an&aacute;lisis est&aacute;tico de c&oacute;digo que permiten obtener m&eacute;tricas para mejorar la calidad del c&oacute;digo.";
 choices[45][2] = "El fichero POM empleado en Maven no siempre es un fichero XML.";
 choices[45][3] = "Jenkins es un software de integraci&oacute;n continua bajo licencia Oracle.";
 answers[45] = choices[45][1];
 units[45] = "95";
 comments[45] = "Id Pregunta: 9. AGE A1 2015";


//  Id pregunta: 344 Año de creación de pregunta: 2016
 questions[46]= "47)  Al ingreso de Espa&ntilde;a en la Uni&oacute;n Europea &iquest;cu&aacute;ntos eurodiputados componen el Parlamento?:";
 choices[46]= new Array();
 choices[46][0] = "Pas&oacute; de 518 a 626.";
 choices[46][1] = "Pas&oacute; de 434 a 518.";
 choices[46][2] = "Pas&oacute; de 345 a 512.";
 choices[46][3] = "Pas&oacute; de 435 a 610.";
 answers[46] = choices[46][1];
 units[46] = "5";
 comments[46] = "Id Pregunta: 344. UNION EUROPEA";


//  Id pregunta: 313 Año de creación de pregunta: 2016
 questions[47]= "48)  Indique qui&eacute;n propone al candidato para el cargo de Presidente de la Comisi&oacute;n Europea:";
 choices[47]= new Array();
 choices[47][0] = "El Consejo Europeo.";
 choices[47][1] = "El Consejo de la Uni&oacute;n Europea.";
 choices[47][2] = "Los miembros de la Comisi&oacute;n Europea.";
 choices[47][3] = "El Parlamento Europeo.";
 answers[47] = choices[47][0];
 units[47] = "5";
 comments[47] = "Id Pregunta: 313. UNION EUROPEA";


//  Id pregunta: 665 Año de creación de pregunta: 2016
 questions[48]= "49)  Seg&uacute;n la Ley 39/2015, un expediente administrativo contendr&aacute;:";
 choices[48]= new Array();
 choices[48][0] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios,la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento, y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[48][1] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios y un &iacute;ndice numerado de todos los documentos.";
 choices[48][2] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[48][3] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos, la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento  y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 answers[48] = choices[48][2];
 units[48] = "7";
 comments[48] = "Id Pregunta: 665. Art&iacute;culo 70 de la Ley 39/2015";


//  Id pregunta: 851 Año de creación de pregunta: 2016
 questions[49]= "50)  Si disponemos de 8 discos SAS de 1TB netos configurados en RAID1, &iquest;de qu&eacute; capacidad neta se dispone en RAID1 en el sistema de almacenamiento?";
 choices[49]= new Array();
 choices[49][0] = "6 TB.";
 choices[49][1] = "8 TB.";
 choices[49][2] = "7 TB.";
 choices[49][3] = "4 TB.";
 answers[49] = choices[49][3];
 units[49] = "53";
 comments[49] = "Id Pregunta: 851. Xunta de Galicia 2015";


//  Id pregunta: 647 Año de creación de pregunta: 2016
 questions[50]= "51)  En Itil V3, entre los factores que hay que tener en cuenta en la evaluaci&oacute;n de herramientas de Gesti&oacute;n del Servicio se encuentran:";
 choices[50]= new Array();
 choices[50][0] = "Estructura, tratamiento, integraci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[50][1] = "structura, salvaguarda, integraci&oacute;n de datos, flexibilidad de implementaci&oacute;n, uso y comunicaci&oacute;n de datos.";
 choices[50][2] = "Estructura, tratamiento, inspecci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[50][3] = "Responsabilidad, tratamiento, inspecci&oacute;n de datos y soporte a la monitorizaci&oacute;n de los niveles de servicio.";
 answers[50] = choices[50][0];
 units[50] = "101";
 comments[50] = "Id Pregunta: 647. Junta de Extremadura A1 2015";


//  Id pregunta: 19 Año de creación de pregunta: 2016
 questions[51]= "52)  En el sistema de Identificaci&oacute;n, Autenticaci&oacute;n y Firma Electr&oacute;nica com&uacute;n para todo el Sector P&uacute;blico Administrativo Estatal (cl@ve):";
 choices[51]= new Array();
 choices[51][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital es el proveedor &uacute;nico de servicios de verificaci&oacute;n de la identidad.";
 choices[51][1] = "Sus destinatarios son exclusivamente ciudadanos espa&ntilde;oles.";
 choices[51][2] = "Su &aacute;mbito de aplicaci&oacute;n podr&aacute; extenderse a otras Administraciones P&uacute;blicas mediante la formalizaci&oacute;n del oportuno convenio.";
 choices[51][3] = "No se requiere registro previo de usuarios, ni consentimiento del usuario ya registrado en otros sistemas previos de identificaci&oacute;n, autenticaci&oacute;n y firma.";
 answers[51] = choices[51][2];
 units[51] = "47";
 comments[51] = "Id Pregunta: 19. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 480 Año de creación de pregunta: 2016
 questions[52]= "53)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el &aacute;mbito del Ministerio de Defensa y de la Seguridad Social, el control se ejercer&aacute; a trav&eacute;s de:";
 choices[52]= new Array();
 choices[52][0] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[52][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[52][2] = "Las respuestas a) b) no son correctas.";
 choices[52][3] = "Las respuestas a) y b) son correctas.";
 answers[52] = choices[52][3];
 units[52] = "10";
 comments[52] = "Id Pregunta: 480. PRESUPUESTOS GENERALES";


//  Id pregunta: 116 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes es una pol&iacute;tica pasiva de empleo?";
 choices[53]= new Array();
 choices[53][0] = "La organizaci&oacute;n de cursos de formaci&oacute;n gratuitos para desempleados";
 choices[53][1] = "La intermediaci&oacute;n en el mercado laboral, es decir, recoger las ofertas de trabajo y cruzarlas con las demandas.";
 choices[53][2] = "Adecuar los planes de estudio a la realidad laboral";
 choices[53][3] = "El pago de subsidios a parados";
 answers[53] = choices[53][3];
 units[53] = "15";
 comments[53] = "Id Pregunta: 116. ";


//  Id pregunta: 745 Año de creación de pregunta: 2016
 questions[54]= "55)  Cu&aacute;l de los siguientes NO es uno de los programas del marco general para la mejora de la calidad en la Administraci&oacute;n General del Estado:";
 choices[54]= new Array();
 choices[54][0] = "Programa de an&aacute;lisis de la demanda y de evaluaci&oacute;n de la satisfacci&oacute;n de los usuarios de los servicios.";
 choices[54][1] = "Programa de cartas de servicios";
 choices[54][2] = "Programa para la mejora continua de las organizaciones.";
 choices[54][3] = "Programa de evaluaci&oacute;n de la calidad de las organizaciones.";
 answers[54] = choices[54][2];
 units[54] = "18, 20";
 comments[54] = "Id Pregunta: 745. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 850 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas de backup es la m&aacute;s eficiente a nivel de ocupaci&oacute;n de espacio?";
 choices[55]= new Array();
 choices[55][0] = "Backup full.";
 choices[55][1] = "Backup diferencial.";
 choices[55][2] = "Backup incremental.";
 choices[55][3] = "Backup deduplicado.";
 answers[55] = choices[55][3];
 units[55] = "53";
 comments[55] = "Id Pregunta: 850. Xunta de Galicia 2015";


//  Id pregunta: 259 Año de creación de pregunta: 2016
 questions[56]= "57)  La iniciativa legislativa corresponde:";
 choices[56]= new Array();
 choices[56][0] = "Al Congreso y al Senado, &uacute;nicamente.";
 choices[56][1] = "Al rey y al Gobierno.";
 choices[56][2] = "Al Congreso, al Senado y al Rey.";
 choices[56][3] = "Al Gobierno, al Congreso y al Senado.";
 answers[56] = choices[56][3];
 units[56] = "1";
 comments[56] = "Id Pregunta: 259. CONSTITUCION1978";


//  Id pregunta: 453 Año de creación de pregunta: 2016
 questions[57]= "58)  En las Administraciones P&uacute;blicas...";
 choices[57]= new Array();
 choices[57][0] = "Existe un Presupuesto ordinario &uacute;nicamente";
 choices[57][1] = "Existen s&oacute;lo un presupuesto ordinario y un presupuesto extraordinario";
 choices[57][2] = "Existe un &uacute;nico presupuesto ordinario y uno o varios presupuestos extraordinarios";
 choices[57][3] = "Existen varios presupuestos que indistintamente pueden ser considerados ordinarios o extraordinarios";
 answers[57] = choices[57][0];
 units[57] = "10";
 comments[57] = "Id Pregunta: 453. PRESUPUESTOS GENERALES";


//  Id pregunta: 91 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Cu&aacute;l de las siguientes opciones muestra exclusivamente herramientas directamente relacionadas con la realizaci&oacute;n de pruebas para asegurar la calidad del software?";
 choices[58]= new Array();
 choices[58][0] = "JUnit, Artifactory y SonarQube";
 choices[58][1] = "JUnit, Artifactory y Selenium";
 choices[58][2] = "JUnit, SonarQube y Selenium";
 choices[58][3] = "ArtiFactory, SonarQube y Selenium";
 answers[58] = choices[58][2];
 units[58] = "92";
 comments[58] = "Id Pregunta: 91. AGE A1 2015";


//  Id pregunta: 27 Año de creación de pregunta: 2016
 questions[59]= "60)  La Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, NO estableci&oacute; como derecho de los ciudadanos, el derecho:";
 choices[59]= new Array();
 choices[59][0] = "A la igualdad en el acceso electr&oacute;nico a los servicios de las Administraciones P&uacute;blicas.";
 choices[59][1] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que tengan la condici&oacute;n de interesado.";
 choices[59][2] = "A la calidad de los servicios p&uacute;blicos prestados por medios electr&oacute;nicos.";
 choices[59][3] = "A la preferencia en la tramitaci&oacute;n de los procedimientos presentados electr&oacute;nicamente.";
 answers[59] = choices[59][3];
 units[59] = "7";
 comments[59] = "Id Pregunta: 27. AGE A1 2015";


//  Id pregunta: 797 Año de creación de pregunta: 2016
 questions[60]= "61)  Los elementos organizativos b&aacute;sicos de las estructuras org&aacute;nicas son:";
 choices[60]= new Array();
 choices[60][0] = "los &oacute;rganos administrativos";
 choices[60][1] = "las entidades dependientes";
 choices[60][2] = "las unidades administrativas";
 choices[60][3] = "los servicios comunes";
 answers[60] = choices[60][2];
 units[60] = "4, 7, 8, 9";
 comments[60] = "Id Pregunta: 797. Ley 40/2015";


//  Id pregunta: 828 Año de creación de pregunta: 2016
 questions[61]= "62)  La recusaci&oacute;n se plantear&aacute;...";
 choices[61]= new Array();
 choices[61][0] = "S&oacute;lo verbalmente";
 choices[61][1] = "S&oacute;lo por escrito";
 choices[61][2] = "Verbalmente o por escrito";
 choices[61][3] = "Verbalmente o por escrito siempre que es exprese la causa o causas en que se funda";
 answers[61] = choices[61][0];
 units[61] = "4, 7, 8, 9";
 comments[61] = "Id Pregunta: 828. Ley 40/2015";


//  Id pregunta: 501 Año de creación de pregunta: 2016
 questions[62]= "63)  De acuerdo con el art&iacute;culo 64 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, qui&eacute;n elaborar&aacute; un presupuesto de explotaci&oacute;n que detallara los recursos y dotaciones anuales correspondientes:";
 choices[62]= new Array();
 choices[62][0] = "Las sociedades mercantiles estatales.";
 choices[62][1] = "Las entidades p&uacute;blicas empresariales.";
 choices[62][2] = "Las respuestas a) y b) son correctas.";
 choices[62][3] = "Las respuestas a) y b) no son correctas.";
 answers[62] = choices[62][2];
 units[62] = "10";
 comments[62] = "Id Pregunta: 501. PRESUPUESTOS GENERALES";


//  Id pregunta: 728 Año de creación de pregunta: 2016
 questions[63]= "64)  Indica la respuesta correcta";
 choices[63]= new Array();
 choices[63][0] = "Scrum no implica baja documentaci&oacute;n, de hecho hay estudios que estiman que es totalmente compatible con CMMI-3";
 choices[63][1] = "Scrum es una metodolog&iacute;a poco organizada";
 choices[63][2] = "Scrum no suele incluir a testers en el SCRUM TEAM";
 choices[63][3] = "En Scrum, sufre la calidad del producto o servicio al no pasar procesos de calidad reglados";
 answers[63] = choices[63][0];
 units[63] = "34, 84";
 comments[63] = "Id Pregunta: 728. Metodologias &aacute;giles";


//  Id pregunta: 258 Año de creación de pregunta: 2016
 questions[64]= "65)  El Art&iacute;culo 137 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Estado se organiza territorialmente en:";
 choices[64]= new Array();
 choices[64][0] = "Municipios, provincias y CCAA.";
 choices[64][1] = "En 17 CCAA m&aacute;s Ceuta y Melilla.";
 choices[64][2] = "En CCAA, 50 provincias y municipios.";
 choices[64][3] = "En municipios, en provincias, entidades locales menores y CCAA.";
 answers[64] = choices[64][2];
 units[64] = "1";
 comments[64] = "Id Pregunta: 258. CONSTITUCION1978";


//  Id pregunta: 373 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Cu&aacute;ntos Abogados Generales asisten al Tribunal Superior de Justicia?:";
 choices[65]= new Array();
 choices[65][0] = "Nueve.";
 choices[65][1] = "Diez.";
 choices[65][2] = "Siete.";
 choices[65][3] = "Ocho.";
 answers[65] = choices[65][3];
 units[65] = "5";
 comments[65] = "Id Pregunta: 373. UNION EUROPEA";


//  Id pregunta: 87 Año de creación de pregunta: 2016
 questions[66]= "67)  Respecto a la pol&iacute;tica de normalizaci&oacute;n TIC en la Uni&oacute;n Europea, como se&ntilde;ala el Reglamento 1025/2012 del Parlamento y del Consejo, la identificaci&oacute;n de especificaciones t&eacute;cnicas de las TIC admisibles a efectos de referenciaci&oacute;n:";
 choices[66]= new Array();
 choices[66][0] = "Ha de estar siempre basada en normas de estandarizaci&oacute;n nacionales, europeas o internacionales.";
 choices[66][1] = "No deben ser usadas para permitir la interoperabilidad en la contrataci&oacute;n p&uacute;blica, dado que se podr&iacute;an dar situaciones monopol&iacute;sticas.";
 choices[66][2] = "Ser&aacute; realizada por la Comisi&oacute;n, bien a propuesta de un Estado miembro o por iniciativa propia, sin necesidad de ser una norma nacional, europea o internacional, cumpli&eacute;ndose los dem&aacute;s requisitos establecidos en el reglamento.";
 choices[66][3] = "Requieren para su adopci&oacute;n la unanimidad de todos los Estados miembro.";
 answers[66] = choices[66][2];
 units[66] = "48";
 comments[66] = "Id Pregunta: 87. AGE A1 2015";


//  Id pregunta: 546 Año de creación de pregunta: 2016
 questions[67]= "68)  El principio definido en el est&aacute;ndar ISO/IEC 38500 para la Gobernanza TIC que establece la necesidad de cumplir los requerimientos regulatorios y legales es el principio de:";
 choices[67]= new Array();
 choices[67][0] = "Conformidad";
 choices[67][1] = "Responsabilidad";
 choices[67][2] = "Adquisici&oacute;n";
 choices[67][3] = "Desempe&ntilde;o";
 answers[67] = choices[67][0];
 units[67] = "26";
 comments[67] = "Id Pregunta: 546. Gobernanza TIC";


//  Id pregunta: 660 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Qu&eacute; herramienta dentro del ecosistema Hadoop sirve para trasladar datos masivos entre Hadoop y sistemas de tratamiento estructurados?";
 choices[68]= new Array();
 choices[68][0] = "Avro";
 choices[68][1] = "Sqoop";
 choices[68][2] = "UIMA";
 choices[68][3] = "Jaql";
 answers[68] = choices[68][1];
 units[68] = "73";
 comments[68] = "Id Pregunta: 660. ";


//  Id pregunta: 810 Año de creación de pregunta: 2016
 questions[69]= "70)  Existir&aacute; una Delegaci&oacute;n del Gobierno en:";
 choices[69]= new Array();
 choices[69][0] = "la capital del pa&iacute;s";
 choices[69][1] = "cada una de las Comunidades Aut&oacute;nomas";
 choices[69][2] = "cada una de las provincias";
 choices[69][3] = "cada una de las embajadas espa&ntilde;olas";
 answers[69] = choices[69][1];
 units[69] = "4, 7, 8, 9";
 comments[69] = "Id Pregunta: 810. Ley 40/2015";


//  Id pregunta: 356 Año de creación de pregunta: 2016
 questions[70]= "71)  Se&ntilde;ale la respuesta correcta respecto a las directivas comunitarias:";
 choices[70]= new Array();
 choices[70][0] = "No se aplican directamente en los Estados.";
 choices[70][1] = "No son vinculantes.";
 choices[70][2] = "Habitualmente se dictan sobre materias que son competencias exclusivas de la Uni&oacute;n Europea.";
 choices[70][3] = "Tienen alcance general.";
 answers[70] = choices[70][0];
 units[70] = "5";
 comments[70] = "Id Pregunta: 356. UNION EUROPEA";


//  Id pregunta: 97 Año de creación de pregunta: 2016
 questions[71]= "72)  Indique la opci&oacute;n correcta respecto al Portal de Transparencia del Gobierno de Espa&ntilde;a:";
 choices[71]= new Array();
 choices[71][0] = "Incluye informaci&oacute;n acerca de las Entidades Locales.";
 choices[71][1] = "La solicitud de informaci&oacute;n disponible, amparada por el derecho de acceso presente en la Ley 19/2013, no precisa identificaci&oacute;n.";
 choices[71][2] = "No incluye informaci&oacute;n acerca de &oacute;rganos Constitucionales.";
 choices[71][3] = "El Portal es gestionado por el Consejo de Transparencia y Buen Gobierno.";
 answers[71] = choices[71][2];
 units[71] = "22";
 comments[71] = "Id Pregunta: 97. AGE A1 2015";


//  Id pregunta: 228 Año de creación de pregunta: 2016
 questions[72]= "73)  Indique la respuesta falsa. Seg&uacute;n el Art&iacute;culo 147 de la Constituci&oacute;n espa&ntilde;ola, los Estatutos de Autonom&iacute;a deber&aacute;n contener:";
 choices[72]= new Array();
 choices[72][0] = "La denominaci&oacute;n de la Comunidad que mejor corresponda a su identidad hist&oacute;rica.";
 choices[72][1] = "La delimitaci&oacute;n de su territorio.";
 choices[72][2] = "Las competencias asumidas y aqu&eacute;llas del Estado sobre las que la Comunidad Aut&oacute;noma se reserva el derecho de opci&oacute;n.";
 choices[72][3] = "La denominaci&oacute;n, organizaci&oacute;n y sede de las instituciones aut&oacute;nomas propias.";
 answers[72] = choices[72][2];
 units[72] = "1";
 comments[72] = "Id Pregunta: 228. CONSTITUCION1978";


//  Id pregunta: 117 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Qui&eacute;n integra el Sistema Nacional de Empleo?";
 choices[73]= new Array();
 choices[73][0] = "El Servicio P&uacute;blico de Empleo Estatal y los servicios p&uacute;blicos de empleo de las comunidades aut&oacute;nomas";
 choices[73][1] = "&Uacute;nicamente los servicios p&uacute;blicos de empleo de las comunidades aut&oacute;nomas ";
 choices[73][2] = "&Uacute;nicamente el Servicio P&uacute;blico de Empleo Estatal";
 choices[73][3] = "El Servicio P&uacute;blico de Empleo Estatal m&aacute;s las ETT (Empresas de Trabajo Temporal) que quieran adherirse";
 answers[73] = choices[73][0];
 units[73] = "15";
 comments[73] = "Id Pregunta: 117. ";


//  Id pregunta: 54 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;A qu&eacute; tipo de ataque nos referimos cuando se suplanta la identidad de una direcci&oacute;n IP origen?";
 choices[74]= new Array();
 choices[74][0] = "DoS";
 choices[74][1] = "Phishing";
 choices[74][2] = "Sniffing";
 choices[74][3] = "Spoofing";
 answers[74] = choices[74][3];
 units[74] = "119";
 comments[74] = "Id Pregunta: 54. AGE A1 2015";


