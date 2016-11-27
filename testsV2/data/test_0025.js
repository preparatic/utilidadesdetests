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

//  Id pregunta: 521 Año de creación de pregunta: 2016
 questions[0]= "1)  El sector p&uacute;blico institucional se integra por:";
 choices[0]= new Array();
 choices[0][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho privado vinculados o independientes de las Administraciones P&uacute;blicas";
 choices[0][1] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[0][2] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o independientes de las Administraciones P&uacute;blicas";
 choices[0][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[0] = choices[0][1];
 units[0] = "7";
 comments[0] = "Id Pregunta: 521. LEY 39/2015";


//  Id pregunta: 286 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;Cu&aacute;l no es un pilar de la Estrategia del Mercado &Uacute;nico Digital?";
 choices[1]= new Array();
 choices[1][0] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa.";
 choices[1][1] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar.";
 choices[1][2] = "Iniciativa europea de libre flujo de datos.";
 choices[1][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital.";
 answers[1] = choices[1][2];
 units[1] = "5";
 comments[1] = "Id Pregunta: 286. UNION EUROPEA";


//  Id pregunta: 533 Año de creación de pregunta: 2016
 questions[2]= "3)  La falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n no impedir&aacute; que se tenga por realizado el acto de que se trate, siempre que se aporte aqu&eacute;lla o se subsane el defecto dentro del plazo de:";
 choices[2]= new Array();
 choices[2][0] = "5 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[2][1] = "10 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[2][2] = "15 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[2][3] = "20 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 answers[2] = choices[2][1];
 units[2] = "7";
 comments[2] = "Id Pregunta: 533. LEY 39/2015";


//  Id pregunta: 74 Año de creación de pregunta: 2016
 questions[3]= "4)  Se&ntilde;ale la opci&oacute;n incorrecta respecto a SMTP:";
 choices[3]= new Array();
 choices[3][0] = "SMTP es capaz de transportar correo a trav&eacute;s de m&uacute;ltiples redes: entre nodos conectados por TCP en Internet, entre nodos conectados en una Intranet TCP/IP aislados por un cortafuegos, o entre nodos en un entorno LAN o WAN que est&eacute;n usando un protocolo de nivel de transporte distinto a TCP.";
 choices[3][1] = "Usando SMTP, un proceso puede transferir correo a otro proceso en la misma red o a otra red mediante un proceso gateway accesible en las dos redes.";
 choices[3][2] = "En SMTP un mensaje de correo puede pasar por una serie de nodos gateway intermedios en su camino desde el emisor al receptor &uacute;ltimo, sirvi&eacute;ndose de mecanismos para decidir el siguiente salto como el sistema de resoluci&oacute;n de nombres de dominio de Internet.";
 choices[3][3] = "En SMTP la transferencia de mensaje ocurre siempre en una conexi&oacute;n &uacute;nica entre el emisor SMTP y el receptor final SMTP.";
 answers[3] = choices[3][3];
 units[3] = "106";
 comments[3] = "Id Pregunta: 74. AGE A1 2015";


//  Id pregunta: 11 Año de creación de pregunta: 2016
 questions[4]= "5)  Nada m&aacute;s arrancar el servidor de aplicaciones, usted intenta acceder a su aplicaci&oacute;n y se produce un error de memoria. En ese momento, sospecha que el error se produce porque est&aacute; utilizando unas librer&iacute;as de terceros de gran tama&ntilde;o. &iquest;Qu&eacute; tipo de error deber&iacute;a estar d&aacute;ndose para corroborar su hip&oacute;tesis?";
 choices[4]= new Array();
 choices[4][0] = "java.lang.OutOfMemoryError: Java heap space";
 choices[4][1] = "java.lang.OutOfMemoryError: PermGen space";
 choices[4][2] = "java.lang.OutOfMemoryError: Requested array size exceeds VM limit";
 choices[4][3] = "java.lang.OutOfMemoryError: request &lt;size&gt; bytes for &lt;reason&gt;. Out of swap space";
 answers[4] = choices[4][1];
 units[4] = "64";
 comments[4] = "Id Pregunta: 11. AGE A1 2015";


//  Id pregunta: 797 Año de creación de pregunta: 2016
 questions[5]= "6)  Los elementos organizativos b&aacute;sicos de las estructuras org&aacute;nicas son:";
 choices[5]= new Array();
 choices[5][0] = "los &oacute;rganos administrativos";
 choices[5][1] = "las entidades dependientes";
 choices[5][2] = "las unidades administrativas";
 choices[5][3] = "los servicios comunes";
 answers[5] = choices[5][2];
 units[5] = "4, 7, 8, 9";
 comments[5] = "Id Pregunta: 797. Ley 40/2015";


//  Id pregunta: 222 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[6]= new Array();
 choices[6][0] = "Dos Cap&iacute;tulos.";
 choices[6][1] = "Tres Cap&iacute;tulos.";
 choices[6][2] = "Un Cap&iacute;tulo.";
 choices[6][3] = "Cuatro Cap&iacute;tulos.";
 answers[6] = choices[6][1];
 units[6] = "1";
 comments[6] = "Id Pregunta: 222. CONSTITUCION1978";


//  Id pregunta: 647 Año de creación de pregunta: 2016
 questions[7]= "8)  En Itil V3, entre los factores que hay que tener en cuenta en la evaluaci&oacute;n de herramientas de Gesti&oacute;n del Servicio se encuentran:";
 choices[7]= new Array();
 choices[7][0] = "Estructura, tratamiento, integraci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[7][1] = "structura, salvaguarda, integraci&oacute;n de datos, flexibilidad de implementaci&oacute;n, uso y comunicaci&oacute;n de datos.";
 choices[7][2] = "Estructura, tratamiento, inspecci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[7][3] = "Responsabilidad, tratamiento, inspecci&oacute;n de datos y soporte a la monitorizaci&oacute;n de los niveles de servicio.";
 answers[7] = choices[7][0];
 units[7] = "101";
 comments[7] = "Id Pregunta: 647. Junta de Extremadura A1 2015";


//  Id pregunta: 374 Año de creación de pregunta: 2016
 questions[8]= "9)  Las instituciones de la Uni&oacute;n Europea son:";
 choices[8]= new Array();
 choices[8][0] = "El Consejo, la Comisi&oacute;n, el Parlamento y el Tribunal de Justicia.";
 choices[8][1] = "El Consejo, el Parlamento y el Tribunal de Justicia.";
 choices[8][2] = "El Consejo, el Parlamento y la Comisi&oacute;n.";
 choices[8][3] = "El Consejo, la Comisi&oacute;n, el Parlamento Europeo, el Tribunal de Justicia y el Tribunal de Cuentas.";
 answers[8] = choices[8][3];
 units[8] = "5";
 comments[8] = "Id Pregunta: 374. UNION EUROPEA";


//  Id pregunta: 49 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Qu&eacute; facilita un ORM?";
 choices[9]= new Array();
 choices[9][0] = "Conversi&oacute;n de objetos a tablas relacionales";
 choices[9][1] = "Conversi&oacute;n de objetos a documentos";
 choices[9][2] = "Conversi&oacute;n de tipos de driver JDBC";
 choices[9][3] = "Conversi&oacute;n de ADO.NET a OLE DB";
 answers[9] = choices[9][0];
 units[9] = "62";
 comments[9] = "Id Pregunta: 49. AGE A1 2015";


//  Id pregunta: 274 Año de creación de pregunta: 2016
 questions[10]= "11)  La Ley 19/2013 de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno ha establecido el derecho:";
 choices[10]= new Array();
 choices[10][0] = "Al acceso a la informaci&oacute;n p&uacute;blica, en desarrollo de los t&eacute;rminos ya previstos por la Ley 11/2007, de acceso electr&oacute;nico de los ciudadano a los servicios p&uacute;blicos.";
 choices[10][1] = "Al acceso a la informaci&oacute;n p&uacute;blica, por primera vez en nuestra legislaci&oacute;n positiva.";
 choices[10][2] = "Al acceso a la informaci&oacute;n p&uacute;blica a trav&eacute;s del portal de transparencia.";
 choices[10][3] = "Al acceso a la informaci&oacute;n p&uacute;blica, con las limitaciones derivadas del posible perjuicio para la defensa, seguridad nacional o funciones administrativas de inspecci&oacute;n, entre otras.";
 answers[10] = choices[10][3];
 units[10] = "22";
 comments[10] = "Id Pregunta: 274. LEY DE TRANSPARENCIA";


//  Id pregunta: 680 Año de creación de pregunta: 2016
 questions[11]= "12)  Seg&uacute;n el Real Decreto Ley 5/2013, de 15 de marzo, de medidas para favorecer la continuidad de la vida laboral de los trabajadores de mayor edad y promover el envejecimiento activo:";
 choices[11]= new Array();
 choices[11][0] = "La cuant&iacute;a de la pensi&oacute;n de jubilaci&oacute;n compatible con el trabajo ser&aacute; equivalente al 50 por 100 del importe resultante en el reconocimiento inicial, una vez aplicado, si procede, el l&iacute;mite m&aacute;ximo de pensi&oacute;n p&uacute;blica, o del que se est&eacute; percibiendo, en el momento de inicio de la compatibilidad con el trabajo, excluido, en todo caso, el complemento por m&iacute;nimos, cualquiera que sea la jornada laboral o la actividad que realice el pensionista.";
 choices[11][1] = "El trabajo compatible debe realizarse a tiempo parcial.";
 choices[11][2] = "Finalizada la relaci&oacute;n laboral por cuenta ajena o producido el cese en la actividad por cuenta propia, se restablecer&aacute; el percibo &iacute;ntegro de la pensi&oacute;n de jubilaci&oacute;n transcurridos 12 meses de la finalizaci&oacute;n de la relaci&oacute;n laboral.";
 choices[11][3] = "El acceso a la pensi&oacute;n podr&aacute; tener lugar hasta 5 a&ntilde;os antes de la edad que en cada caso resulte de aplicaci&oacute;n.";
 answers[11] = choices[11][0];
 units[11] = "14";
 comments[11] = "Id Pregunta: 680. Pensiones";


//  Id pregunta: 399 Año de creación de pregunta: 2016
 questions[12]= "13)  Las medidas espec&iacute;ficas que adoptar&aacute;n los Poderes P&uacute;blicos a favor de las mujeres para corregir situaciones patentes de desigualdad de hecho con respecto a los hombres, se denominan:";
 choices[12]= new Array();
 choices[12][0] = "Acciones de discriminaci&oacute;n.";
 choices[12][1] = "Acciones positivas.";
 choices[12][2] = "Acciones negativas.";
 choices[12][3] = "Acciones neutras.";
 answers[12] = choices[12][1];
 units[12] = "14";
 comments[12] = "Id Pregunta: 399. POLITICAS DE IGUALDAD";


//  Id pregunta: 45 Año de creación de pregunta: 2016
 questions[13]= "14)  46. &iquest;Cu&aacute;l de las siguientes NO es una de las APIs incorporadas a HTML5?";
 choices[13]= new Array();
 choices[13][0] = "HTML Drag and Drop, para arrastrar un objeto a otra localizaci&oacute;n.";
 choices[13][1] = "HTML Advanced Search, para parametrizar y modificar el comportamiento de los buscadores.";
 choices[13][2] = "HTML Local Storage, para almacenar datos en el navegador.";
 choices[13][3] = "HTML SSE, para actualizar una p&aacute;gina web autom&aacute;ticamente sin preguntar al servidor.";
 answers[13] = choices[13][1];
 units[13] = "74";
 comments[13] = "Id Pregunta: 45. AGE A1 2015";


//  Id pregunta: 423 Año de creación de pregunta: 2016
 questions[14]= "15)  Para contribuir a un reparto m&aacute;s equilibrado de las responsabilidades familiares se reconoce a los padres:";
 choices[14]= new Array();
 choices[14][0] = "El derecho a un permiso.";
 choices[14][1] = "Una prestaci&oacute;n por paternidad.";
 choices[14][2] = "Ambas son correctas.";
 choices[14][3] = "18 d&iacute;as de permiso.";
 answers[14] = choices[14][2];
 units[14] = "14";
 comments[14] = "Id Pregunta: 423. POLITICAS DE IGUALDAD";


//  Id pregunta: 816 Año de creación de pregunta: 2016
 questions[15]= "16)  Los Directores Insulares de la Administraci&oacute;n General del Estado (se&ntilde;ala la incorrecta):";
 choices[15]= new Array();
 choices[15][0] = "ser&aacute;n nombrados por el Delegado del Gobierno mediante el procedimiento de concurso-oposici&oacute;n";
 choices[15][1] = "ser&aacute;n nombrados entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades Locales, pertenecientes a Cuerpos o Escalas clasificados como Subgrupo A1";
 choices[15][2] = "dependen jer&aacute;rquicamente del Delegado del Gobierno en la Comunidad Aut&oacute;noma o del Subdelegado del Gobierno en la provincia, cuando este cargo exista";
 choices[15][3] = "ejercen, en su &aacute;mbito territorial, las competencias atribuidas por esta Ley a los Subdelegados del Gobierno en las provincias";
 answers[15] = choices[15][0];
 units[15] = "4, 7, 8, 9";
 comments[15] = "Id Pregunta: 816. Ley 40/2015";


//  Id pregunta: 665 Año de creación de pregunta: 2016
 questions[16]= "17)  Seg&uacute;n la Ley 39/2015, un expediente administrativo contendr&aacute;:";
 choices[16]= new Array();
 choices[16][0] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios,la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento, y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[16][1] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios y un &iacute;ndice numerado de todos los documentos.";
 choices[16][2] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[16][3] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos, la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento  y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 answers[16] = choices[16][2];
 units[16] = "7";
 comments[16] = "Id Pregunta: 665. Art&iacute;culo 70 de la Ley 39/2015";


//  Id pregunta: 650 Año de creación de pregunta: 2016
 questions[17]= "18)  Indica cu&aacute;l de las siguientes caracter&iacute;sticas del protocolo IP versi&oacute;n 6 es incorrecta.";
 choices[17]= new Array();
 choices[17][0] = "El tama&ntilde;o de la direcci&oacute;n IP es de 128 bits.";
 choices[17][1] = "Aumento de la flexibilidad en el direccionamiento.";
 choices[17][2] = "Define una cabecera de extensi&oacute;n que proporciona autenticaci&oacute;n.";
 choices[17][3] = "La cabecera IP versi&oacute;n 6 obligatoria es de tama&ntilde;o variable.";
 answers[17] = choices[17][3];
 units[17] = "109";
 comments[17] = "Id Pregunta: 650. Junta de Extremadura A1 2015";


//  Id pregunta: 8 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Cu&aacute;l de las siguientes NO es una funci&oacute;n de la Secretar&iacute;a General de Administraci&oacute;n Digital?";
 choices[18]= new Array();
 choices[18][0] = "Establecer los mecanismos que aseguren un adecuado mantenimiento del censo de activos TIC.";
 choices[18][1] = "El estudio y la implementaci&oacute;n de modelos para incentivar la compartici&oacute;n y reutilizaci&oacute;n de las infraestructuras y aplicaciones sectoriales, y promover el desarrollo de aplicaciones bajo dicho modelo.";
 choices[18][2] = "La supervisi&oacute;n y coordinaci&oacute;n del registro de convenios del sector p&uacute;blico estatal, de acuerdo con la informaci&oacute;n que deber&aacute;n suministrar los diferentes departamentos ministeriales y dem&aacute;s organismos p&uacute;blicos suscriptores de los mismos.";
 choices[18][3] = "El desarrollo, impulso e implantaci&oacute;n de sistemas tecnol&oacute;gicos de apoyo para la gesti&oacute;n de recursos humanos, incluidos los sistemas del Registro Central de Personal.";
 answers[18] = choices[18][2];
 units[18] = "26";
 comments[18] = "Id Pregunta: 8. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 466 Año de creación de pregunta: 2016
 questions[19]= "20)  A tenor del art&iacute;culo 34 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el ejercicio presupuestario coincidir&aacute;:";
 choices[19]= new Array();
 choices[19][0] = "Con el a&ntilde;o anterior.";
 choices[19][1] = "Con los tres a&ntilde;os anteriores.";
 choices[19][2] = "Con el a&ntilde;o natural.";
 choices[19][3] = "Con los dos a&ntilde;os anteriores.";
 answers[19] = choices[19][2];
 units[19] = "10";
 comments[19] = "Id Pregunta: 466. PRESUPUESTOS GENERALES";


//  Id pregunta: 371 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;En qu&eacute; a&ntilde;o se adhiri&oacute; Espa&ntilde;a a la Comunidad Europea?:";
 choices[20]= new Array();
 choices[20][0] = "En 1988.";
 choices[20][1] = "En 1981.";
 choices[20][2] = "En 1982.";
 choices[20][3] = "En 1986.";
 answers[20] = choices[20][3];
 units[20] = "5";
 comments[20] = "Id Pregunta: 371. UNION EUROPEA";


//  Id pregunta: 512 Año de creación de pregunta: 2016
 questions[21]= "22)  Podr&aacute;n establecerse especialidades del procedimiento referidas a los &oacute;rganos competentes, plazos propios del concreto procedimiento por raz&oacute;n de la materia, formas de iniciaci&oacute;n y terminaci&oacute;n, publicaci&oacute;n e informes a recabar:";
 choices[21]= new Array();
 choices[21][0] = "solo mediante ley";
 choices[21][1] = "reglamentariamente";
 choices[21][2] = "mediante ley o reglamentariamente";
 choices[21][3] = "ninguna es correcta";
 answers[21] = choices[21][1];
 units[21] = "7";
 comments[21] = "Id Pregunta: 512. LEY 39/2015";


//  Id pregunta: 167 Año de creación de pregunta: 2016
 questions[22]= "23)  Una de las preocupaciones de la Agenda Digital Europea es la &ldquo;exclusi&oacute;n digital&rdquo;. Para combatirla, se incluyen medidas como...";
 choices[22]= new Array();
 choices[22][0] = "incrementar la eficiencia energ&eacute;tica y reducir la energ&iacute;a que se usa en los hogares";
 choices[22][1] = "incrementar el ratio de participaci&oacute;n de personas con discapacidad en actividades p&uacute;blicas, sociales y econ&oacute;micas a trav&eacute;s de proyectos de inclusi&oacute;n.";
 choices[22][2] = "implementar un sistema de firma electr&oacute;nica seguro que funcione en cualquiera de los Estados Miembros";
 choices[22][3] = "apoyar las pol&iacute;ticas del sector audiovisual en pos de las personas con discapacidad";
 answers[22] = choices[22][1];
 units[22] = "19";
 comments[22] = "Id Pregunta: 167. https://ec.europa.eu/digital-single-market/en/digital-inclusion-better-eu-society";


//  Id pregunta: 137 Año de creación de pregunta: 2016
 questions[23]= "24)  La creaci&oacute;n de la Autoridad Independiente de Responsabilidad Fiscal, dentro de la Ley Org&aacute;nica 6/2013, tiene por objeto:";
 choices[23]= new Array();
 choices[23][0] = "Garantizar el cumplimiento efectivo por las Administraciones P&uacute;blicas del principio de estabilidad presupuestaria previsto en el art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola.";
 choices[23][1] = "La evaluaci&oacute;n continua del ciclo presupuestario, del endeudamiento p&uacute;blico, y el an&aacute;lisis de las previsiones econ&oacute;micas.";
 choices[23][2] = "Ejercer sus funciones con autonom&iacute;a e independencia funcional respecto de las Administraciones P&uacute;blicas.";
 choices[23][3] = "Todos las anteriores son ciertas.";
 answers[23] = choices[23][3];
 units[23] = "12";
 comments[23] = "Id Pregunta: 137. Leyes modelo econ&oacute;mico";


//  Id pregunta: 545 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Cu&aacute;l es la nueva denominaci&oacute;n para la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n tras la aprobaci&oacute;n del Real Decreto 424/2016, de 11 de noviembre, por el que se establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales?";
 choices[24]= new Array();
 choices[24][0] = "Subsecretar&iacute;a de Energ&iacute;a, Turismo y Agenda Digital";
 choices[24][1] = "Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[24][2] = "Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[24][3] = "Secretar&iacute;a de Estado de Administraci&oacute;n Digital";
 answers[24] = choices[24][1];
 units[24] = "26";
 comments[24] = "Id Pregunta: 545. Gobernanza TIC";


//  Id pregunta: 822 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;Cu&aacute;l de los siguientes no ser&iacute;a un motivo de abstenci&oacute;n conforme el art. 23 de la Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[25]= new Array();
 choices[25][0] = "Ser el personal respecto del que la abstenci&oacute;n se plantea sobrino del interesado en el procedimiento";
 choices[25][1] = "Ser el personal respecto del que la abstenci&oacute;n se plantea vecino del interesado en el procedimiento";
 choices[25][2] = "Ser el personal respecto del que la abstenci&oacute;n se plantea cu&ntilde;ado del interesado en el procedimiento";
 choices[25][3] = "Ser el personal respecto del que la abstenci&oacute;n se plantea nieto del interesado en el procedimiento";
 answers[25] = choices[25][2];
 units[25] = "4, 7, 8, 9";
 comments[25] = "Id Pregunta: 822. Ley 40/2015";


//  Id pregunta: 434 Año de creación de pregunta: 2016
 questions[26]= "27)  En cuanto al sistema EGEO, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[26]= new Array();
 choices[26][0] = "Permite la representaci&oacute;n de mapas tem&aacute;ticos, georreferenciados, buscador de recursos georreferenciados con filtros definidos por el usuario, y de magnitud.";
 choices[26][1] = "Utiliza &uacute;nicamente sobre mapas oficiales del Instituto Geogr&aacute;fico Nacional (IGN).";
 choices[26][2] = "Es un servicio com&uacute;n dirigido a &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[26][3] = "Para su manejo, es necesario contar con conocimientos de georreferenciaci&oacute;n.";
 answers[26] = choices[26][0];
 units[26] = "43";
 comments[26] = "Id Pregunta: 434. SERVICIOS COMUNES";


//  Id pregunta: 542 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;Cu&aacute;l es el &oacute;rgano de la Comisi&oacute;n Europea encargado de la gobernanza TIC cuya misi&oacute;n es garantizar que la Comisi&oacute;n haga un uso eficaz de las tecnolog&iacute;as de la informaci&oacute;n y la comunicaci&oacute;n para el logro de sus objetivos organizativos y pol&iacute;ticos?";
 choices[27]= new Array();
 choices[27][0] = "La Direcci&oacute;n General de Inform&aacute;tica (DIGIT)";
 choices[27][1] = "Oficina del Organismo de Reguladores Europeos de las Comunicaciones Electr&oacute;nicas (ORECE)";
 choices[27][2] = "Agencia de Seguridad de las Redes y de la Informaci&oacute;n de la Uni&oacute;n Europea (ENISA)";
 choices[27][3] = "Instituto Europeo de Innovaci&oacute;n y Tecnolog&iacute;a (EIT)";
 answers[27] = choices[27][0];
 units[27] = "26";
 comments[27] = "Id Pregunta: 542. Gobernanza TIC";


//  Id pregunta: 809 Año de creación de pregunta: 2016
 questions[28]= "29)  Los Subdirectores generales:";
 choices[28]= new Array();
 choices[28][0] = "son los responsables inmediatos, bajo la supervisi&oacute;n del Secretario general o del titular del &oacute;rgano del que dependan, de la ejecuci&oacute;n de aquellos proyectos, objetivos o actividades que les sean asignados, as&iacute; como de la gesti&oacute;n ordinaria de los asuntos de la competencia de la Subdirecci&oacute;n General";
 choices[28][1] = "ser&aacute;n nombrados, respetando los principios de igualdad, m&eacute;rito y capacidad, y cesados por el Ministro, Secretario de Estado o Subsecretario del que dependan";
 choices[28][2] = "sus nombramientos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, o de otras Administraciones, cuando as&iacute; lo prevean las normas de aplicaci&oacute;n, pertenecientes al Subgrupo A2";
 choices[28][3] = "todas son correctas";
 answers[28] = choices[28][1];
 units[28] = "4, 7, 8, 9";
 comments[28] = "Id Pregunta: 809. Ley 40/2015";


//  Id pregunta: 10 Año de creación de pregunta: 2016
 questions[29]= "30)  El servicio mediante el cual se localiza un terminal m&oacute;vil dentro de alguna de las N c&eacute;lulas gestionadas coordinadamente en una zona de cobertura se denomina:";
 choices[29]= new Array();
 choices[29][0] = "Paging";
 choices[29][1] = "Roaming";
 choices[29][2] = "Handover";
 choices[29][3] = "Trunking";
 answers[29] = choices[29][0];
 units[29] = "117";
 comments[29] = "Id Pregunta: 10. AGE A1 2015";


//  Id pregunta: 549 Año de creación de pregunta: 2016
 questions[30]= "31)  El presidente del pleno de la Comisi&oacute;n de Estrategia TIC es :";
 choices[30]= new Array();
 choices[30][0] = "El Ministro de Energ&iacute;a, Turismo y Agenda Digital";
 choices[30][1] = "El Ministro de Hacienda y Administraciones P&uacute;blicas";
 choices[30][2] = "El Presidente del Gobierno";
 choices[30][3] = "El Secretario General de Administraci&oacute;n Digital";
 answers[30] = choices[30][1];
 units[30] = "26";
 comments[30] = "Id Pregunta: 549. Gobernanza TIC";


//  Id pregunta: 26 Año de creación de pregunta: 2016
 questions[31]= "32)  Usted, como directivo TIC de la AGE, decide crear un portal web, con una direcci&oacute;n electr&oacute;nica nueva, con el objetivo de informar al ciudadano sobre determinados aspectos relacionados con su unidad. &iquest;Cu&aacute;l de los siguientes tipos de certificado utilizar&iacute;a para identificar a los servidores de su portal informativo?";
 choices[31]= new Array();
 choices[31][0] = "Sello electr&oacute;nico";
 choices[31][1] = "Sede electr&oacute;nica";
 choices[31][2] = "Servidor seguro (SSL/TLS)";
 choices[31][3] = "Empleado p&uacute;blico";
 answers[31] = choices[31][2];
 units[31] = "7";
 comments[31] = "Id Pregunta: 26. AGE A1 2015";


//  Id pregunta: 694 Año de creación de pregunta: 2016
 questions[32]= "33)  De las siguientes cu&aacute;l NO es una ventaja de la integraci&oacute;n continua:";
 choices[32]= new Array();
 choices[32][0] = "Ejecuci&oacute;n inmediata de las pruebas de aceptaci&oacute;n.";
 choices[32][1] = "Monitorizaci&oacute;n continua de las m&eacute;tricas de calidad del proyecto.";
 choices[32][2] = "Los desarrolladores pueden detectar y solucionar problemas de integraci&oacute;n de forma continua, evitando el caos de &uacute;ltima hora cuando se acercan las fechas de entrega.";
 choices[32][3] = "Disponibilidad constante de una versi&oacute;n para pruebas, demos o lanzamientos anticipados.";
 answers[32] = choices[32][0];
 units[32] = "92";
 comments[32] = "Id Pregunta: 694. INTEGRACION CONTINUA";


//  Id pregunta: 703 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Cu&aacute;l de los siguientes NO es un principio t&eacute;cnico de los mencionados en la Ley 19/2013 al que debe atenerse la informaci&oacute;n publicada en el Portal de Transparencia de la Administraci&oacute;n General del Estado?";
 choices[33]= new Array();
 choices[33][0] = "Compatibilidad";
 choices[33][1] = "Interoperabilidad";
 choices[33][2] = "Reutilizaci&oacute;n";
 choices[33][3] = "Accesibilidad";
 answers[33] = choices[33][0];
 units[33] = "22";
 comments[33] = "Id Pregunta: 703. Ley de transparencia";


//  Id pregunta: 133 Año de creación de pregunta: 2016
 questions[34]= "35)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, cu&aacute;l no corresponde a una de las medidas implantadas:";
 choices[34]= new Array();
 choices[34][0] = "Apoyos fiscales y en materia de Seguridad Social a los emprendedores.";
 choices[34][1] = "Medidas de conciliaci&oacute;n familiar especiales para los emprendedores.";
 choices[34][2] = "Modificaci&oacute;n de la ley concursal para facilitar los acuerdos de refinanciaci&oacute;n.";
 choices[34][3] = "Creaci&oacute;n de la figura del Emprendedor de Responsabilidad Limitada.";
 answers[34] = choices[34][1];
 units[34] = "12";
 comments[34] = "Id Pregunta: 133. Leyes modelo econ&oacute;mico";


//  Id pregunta: 363 Año de creación de pregunta: 2016
 questions[35]= "36)  Los Reglamentos no se caracterizan por:";
 choices[35]= new Array();
 choices[35][0] = "No poseer alcance general.";
 choices[35][1] = "Ser obligatorios.";
 choices[35][2] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[35][3] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 answers[35] = choices[35][0];
 units[35] = "5";
 comments[35] = "Id Pregunta: 363. UNION EUROPEA";


//  Id pregunta: 692 Año de creación de pregunta: 2016
 questions[36]= "37)  Se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[36]= new Array();
 choices[36][0] = "El Reglamento (UE) 910/2014 no prev&eacute; la emisi&oacute;n de certificados de firma electr&oacute;nica a favor de personas jur&iacute;dicas o entidades sin personalidad jur&iacute;dica";
 choices[36][1] = "Con la aprobaci&oacute;n del Reglamento (UE) 910/2014 queda derogada la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica";
 choices[36][2] = "El Reglamento (UE) 910/2014 desplaza desde el 1 de julio de 2016 los preceptos de la Ley 59/2003 que se opongan a su contenido";
 choices[36][3] = "A partir del 1 de julio de 2016 dejar&aacute;n de emitirse certificados de firma electr&oacute;nica de personas jur&iacute;dicas y entidades sin personalidad jur&iacute;dica, pudiendo en su lugar expedirse certificados de sello electr&oacute;nico o certificados de firma de persona f&iacute;sica representante";
 answers[36] = choices[36][1];
 units[36] = "77";
 comments[36] = "Id Pregunta: 692. http://www.minetad.gob.es/telecomunicaciones/es-ES/Servicios/FirmaElectronica/Documents/nota-web-certifs-pers-juridica.pdf";


//  Id pregunta: 89 Año de creación de pregunta: 2016
 questions[37]= "38)  En un contrato cuyo presupuesto es de 100.000 euros sin IVA y se adjudica por 80.000, IVA excluido, la garant&iacute;a definitiva ser&aacute; de:";
 choices[37]= new Array();
 choices[37][0] = "2.400 euros";
 choices[37][1] = "4.000 euros";
 choices[37][2] = "3.200 euros";
 choices[37][3] = "1.600 euros";
 answers[37] = choices[37][1];
 units[37] = "37";
 comments[37] = "Id Pregunta: 89. AGE A1 2015";


//  Id pregunta: 86 Año de creación de pregunta: 2016
 questions[38]= "39)  Un contrato menor tiene una duraci&oacute;n m&aacute;xima de:";
 choices[38]= new Array();
 choices[38][0] = "Un a&ntilde;o prorrogable";
 choices[38][1] = "Dos a&ntilde;os no prorrogables";
 choices[38][2] = "Un a&ntilde;o no prorrogable";
 choices[38][3] = "Dos a&ntilde;os prorrogables";
 answers[38] = choices[38][2];
 units[38] = "37";
 comments[38] = "Id Pregunta: 86. AGE A1 2015";


//  Id pregunta: 721 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;C&uacute;al es la principal ventaja de sprints m&aacute;s cortos en Scrum?";
 choices[39]= new Array();
 choices[39][0] = "Permite reaccionar al equipo mejor ante imprevistos";
 choices[39][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[39][2] = "Es m&aacute;s f&aacute;cil cumplir los objetivos marcados al final de cada sprint";
 choices[39][3] = "Ninguna de las anteriores";
 answers[39] = choices[39][1];
 units[39] = "34, 84";
 comments[39] = "Id Pregunta: 721. Metodologias &aacute;giles";


//  Id pregunta: 448 Año de creación de pregunta: 2016
 questions[40]= "41)  La partida presupuestaria es equivalente a...";
 choices[40]= new Array();
 choices[40][0] = "El sujeto que realiza el gasto";
 choices[40][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[40][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[40][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[40] = choices[40][3];
 units[40] = "10";
 comments[40] = "Id Pregunta: 448. PRESUPUESTOS GENERALES";


//  Id pregunta: 649 Año de creación de pregunta: 2016
 questions[41]= "42)  Los objetivos que persegu&iacute;a Codd con el modelo relacional, se pueden resumir en:";
 choices[41]= new Array();
 choices[41][0] = "Independencia f&iacute;sica, independencia l&oacute;gica, flexibilidad, uniformidad y sencillez.";
 choices[41][1] = "Independencia f&iacute;sica, independencia l&oacute;gica y uniformidad.";
 choices[41][2] = "Independencia f&iacute;sica, flexibilidad, uniformidad y sencillez.";
 choices[41][3] = "Independencia f&iacute;sica, independencia l&oacute;gica, independencia conceptual, flexibilidad, uniformidad y sencillez.";
 answers[41] = choices[41][0];
 units[41] = "60";
 comments[41] = "Id Pregunta: 649. Junta de Extremadura A1 2015";


//  Id pregunta: 485 Año de creación de pregunta: 2016
 questions[42]= "43)  Se&ntilde;ale la respuesta incorrecta respecto de la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[42]= new Array();
 choices[42][0] = "El principio de dotaci&oacute;n presupuestaria implica que los Presupuestos Generales del Estado de cada ejercicio contendr&aacute;n los cr&eacute;ditos necesarios para atender a las transferencias de medios econ&oacute;micos que deban realizarse a las comunidades aut&oacute;nomas por aplicaci&oacute;n del sistema de financiaci&oacute;n vigente en cada momento.";
 choices[42][1] = "Los cr&eacute;ditos para hacer efectivas las liquidaciones definitivas de ejercicios anteriores tendr&aacute;n el car&aacute;cter de ampliables.";
 choices[42][2] = "El reintegro de ayudas y la responsabilidad financiera derivados de la gesti&oacute;n de los fondos procedentes de la Uni&oacute;n Europea se someter&aacute; a lo previsto en la Ley General de Subvenciones y en la normativa comunitaria.";
 choices[42][3] = "Los anticipos para ejecuci&oacute;n de acciones y programas financiados o cofinanciados por fondos europeos que estuvieran pendientes de cancelar al finalizar el ejercicio, no podr&aacute;n cancelarse en el ejercicio siguiente.";
 answers[42] = choices[42][3];
 units[42] = "10";
 comments[42] = "Id Pregunta: 485. PRESUPUESTOS GENERALES";


//  Id pregunta: 535 Año de creación de pregunta: 2016
 questions[43]= "44)  Dispondr&aacute;/n de un registro electr&oacute;nico general de apoderamientos:";
 choices[43]= new Array();
 choices[43][0] = "la Administraci&oacute;n General del Estado";
 choices[43][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[43][2] = "las Entidades Locales";
 choices[43][3] = "todas son correctas";
 answers[43] = choices[43][3];
 units[43] = "7";
 comments[43] = "Id Pregunta: 535. LEY 39/2015";


//  Id pregunta: 819 Año de creación de pregunta: 2016
 questions[44]= "45)  Los Delegados del Gobierno (se&ntilde;ala la incorrecta):";
 choices[44]= new Array();
 choices[44][0] = "representan al Gobierno de la Naci&oacute;n en el territorio de la respectiva Comunidad Aut&oacute;noma";
 choices[44][1] = "dirigir&aacute;n y supervisar&aacute;n la Administraci&oacute;n General del Estado en el territorio de las respectivas Comunidades Aut&oacute;nomas";
 choices[44][2] = "son &oacute;rganos directivos con rango de Director general";
 choices[44][3] = "ser&aacute;n nombrados y separados por Real Decreto del Consejo de Ministros, a propuesta del Presidente del Gobierno";
 answers[44] = choices[44][2];
 units[44] = "4, 7, 8, 9";
 comments[44] = "Id Pregunta: 819. Ley 40/2015";


//  Id pregunta: 618 Año de creación de pregunta: 2016
 questions[45]= "46)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[45]= new Array();
 choices[45][0] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de tareas que se comportan de acuerdo a los requisitos del sistema.";
 choices[45][1] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de procesos externos que se comportan de acuerdo a los requisitos del sistema.";
 choices[45][2] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de objetos sem&aacute;nticos que interaccionan y se comportan de acuerdo a los requisitos del sistema.";
 choices[45][3] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela la soluci&oacute;n del problema identificando y especificando un conjunto de usuarios que son los que necesitan los requisitos del sistema.";
 answers[45] = choices[45][2];
 units[45] = "85";
 comments[45] = "Id Pregunta: 618. Junta de Extremadura A1 2015";


//  Id pregunta: 806 Año de creación de pregunta: 2016
 questions[46]= "47)  A los Directores generales les corresponde (se&ntilde;ala la incorrecta):";
 choices[46]= new Array();
 choices[46][0] = "proponer los proyectos de su Direcci&oacute;n general para alcanzar los objetivos establecidos por el Ministro, dirigir su ejecuci&oacute;n y controlar su adecuado cumplimiento";
 choices[46][1] = "solicitar del Ministerio de Hacienda y Administraciones P&uacute;blicas la afectaci&oacute;n o el arrendamiento de los inmuebles necesarios para el cumplimiento de los fines de los servicios a cargo del Departamento";
 choices[46][2] = "ejercer las competencias atribuidas a la Direcci&oacute;n general y las que le sean desconcentradas o delegadas";
 choices[46][3] = "impulsar y supervisar las actividades que forman parte de la gesti&oacute;n ordinaria del &oacute;rgano directivo y velar por el buen funcionamiento de los &oacute;rganos y unidades dependientes y del personal integrado en los mismos";
 answers[46] = choices[46][1];
 units[46] = "4, 7, 8, 9";
 comments[46] = "Id Pregunta: 806. Ley 40/2015";


//  Id pregunta: 176 Año de creación de pregunta: 2016
 questions[47]= "48)  Seg&uacute;n el Art&iacute;culo 115 de la Constituci&oacute;n Espa&ntilde;ola, el Presidente del Gobierno, previa deliberaci&oacute;n del Consejo de Ministros, y bajo su responsabilidad, podr&aacute; proponer la disoluci&oacute;n de:";
 choices[47]= new Array();
 choices[47][0] = "El Congreso, el senado o las Cortes Generales.";
 choices[47][1] = "Solamente el Congreso.";
 choices[47][2] = "El Congreso, pero s&oacute;lo mediante la tramitaci&oacute;n de una moci&oacute;n de censura.";
 choices[47][3] = "El Congreso y el Senado, mediante Refer&eacute;ndum.";
 answers[47] = choices[47][0];
 units[47] = "1";
 comments[47] = "Id Pregunta: 176. CONSTITUCION1978";


//  Id pregunta: 679 Año de creación de pregunta: 2016
 questions[48]= "49)  De acuerdo a la Ley 27/2011, de 1 de agosto, sobre actualizaci&oacute;n, adecuaci&oacute;n y modernizaci&oacute;n del sistema de Seguridad Social, la edad exigida de jubilaci&oacute;n:";
 choices[48]= new Array();
 choices[48][0] = "A partir del a&ntilde;o 2020, ser&aacute; de 67 a&ntilde;os para quellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un perido cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[48][1] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para quellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un perido cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[48][2] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para todas las personas con independencia del periodo cotizado.";
 choices[48][3] = "Aumenta progresivamente desde los 65 a los 67 a&ntilde;os desde el a&ntilde;o 2013 al 2027, si bien se mantiene en los 65 a&ntilde;os para personas con un periodo cotizado igual o mayor a 35 a&ntilde;os.";
 answers[48] = choices[48][1];
 units[48] = "14";
 comments[48] = "Id Pregunta: 679. Pensiones";


//  Id pregunta: 32 Año de creación de pregunta: 2016
 questions[49]= "50)  El art&iacute;culo 16 del Esquema Nacional de Interoperabilidad establece las condiciones de licenciamiento aplicables en el &aacute;mbito de la reutilizaci&oacute;n y transferencia de tecnolog&iacute;a, &iquest;cu&aacute;l de las siguientes licencias recomienda expresamente aplicar, sin perjuicio de otras licencias que garanticen los derechos expuestos en el mencionado art&iacute;culo?";
 choices[49]= new Array();
 choices[49][0] = "ASF-AL (Apache License 2.0)";
 choices[49][1] = "EUPL (European Union Public License)";
 choices[49][2] = "LGPL (Lesser General Public License)";
 choices[49][3] = "MIT(MIT License)";
 answers[49] = choices[49][1];
 units[49] = "43";
 comments[49] = "Id Pregunta: 32. AGE A1 2015";


//  Id pregunta: 577 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Cu&aacute;ndo fue aprobada la Estrategia TIC?";
 choices[50]= new Array();
 choices[50][0] = "El 2 de Octubre de 2015";
 choices[50][1] = "El 15 de Septiembre de 2015";
 choices[50][2] = "El 1 de Octubre de 2015";
 choices[50][3] = "El 5 de Octubre de 2015";
 answers[50] = choices[50][0];
 units[50] = "19";
 comments[50] = "Id Pregunta: 577. Estrategia TIC";


//  Id pregunta: 619 Año de creación de pregunta: 2016
 questions[51]= "52)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[51]= new Array();
 choices[51][0] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: la identificaci&oacute;n de clases sem&aacute;nticas, atributos y servicios; identificaci&oacute;n de las relaciones entre clases; el emplazamiento de las clases, atributos y servicios; la especificaci&oacute;n del comportamiento din&aacute;mico mediante paso de mensajes.";
 choices[51][1] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: a&ntilde;adir las clases interfaz, base y utilidad; refinar las clases sem&aacute;nticas.";
 choices[51][2] = "En el An&aacute;lisis Orientado a Objetos, deben llevarse a cabo las siguientes actividades: toma inicial de requisitos; an&aacute;lisis; dise&ntilde;o; implementaci&oacute;n.";
 choices[51][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[51] = choices[51][1];
 units[51] = "89";
 comments[51] = "Id Pregunta: 619. Junta de Extremadura A1 2015";


//  Id pregunta: 437 Año de creación de pregunta: 2016
 questions[52]= "53)  Los Portales de EE.LL. y CC.AA. ofrecen una herramienta de gesti&oacute;n de identidades de los empleados p&uacute;blicos de las entidades locales o auton&oacute;micas. Se&ntilde;ale la respuesta incorrecta.";
 choices[52]= new Array();
 choices[52][0] = "Los empleados p&uacute;blicos de las EE.LL. o CC.AA. tienen que solicitar el alta en alguna unidad local o auton&oacute;mica.";
 choices[52][1] = "Proporcionan tambi&eacute;n informaci&oacute;n del cargo y rol asociados.";
 choices[52][2] = "Cualquier organismo p&uacute;blico puede solicitar la inclusi&oacute;n en la plataforma de nuevas aplicaciones dirigidas a las EE.LL. o CC.AA.: &eacute;stas podr&aacute;n acceder desde un punto centralizado al nuevo servicio.";
 choices[52][3] = "Los portales est&aacute;n integrados y sincronizados con el Directorio Com&uacute;n de Unidades Org&aacute;nicas y Oficinas &#8208; DIR3, permitiendo que la gesti&oacute;n de usuarios y roles no se vea afectada por cambios en el directorio.";
 answers[52] = choices[52][0];
 units[52] = "43";
 comments[52] = "Id Pregunta: 437. SERVICIOS COMUNES";


//  Id pregunta: 276 Año de creación de pregunta: 2016
 questions[53]= "54)  Se&ntilde;ale la respuesta falsa";
 choices[53]= new Array();
 choices[53][0] = "El Portal de la Transparencia del Gobierno de Espa&ntilde;a es una subsede de la sede electr&oacute;nica central del Ministerio de la Presidencia.";
 choices[53][1] = "La titularidad de esta subsede corresponde a la Oficina de la Transparencia y Acceso a la Informaci&oacute;n (OTAI), dependiente de la Oficina para la Ejecuci&oacute;n de la Reforma de la Administraci&oacute;n P&uacute;blica (OPERA).";
 choices[53][2] = "La gesti&oacute;n de la plataforma tecnol&oacute;gica es competencia de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones (DTIC), en virtud del Acuerdo de Colaboraci&oacute;n firmado por el Ministerio de la Presidencia y el Ministerio de Hacienda y Administraciones P&uacute;blicas, para el desarrollo del Portal de la Transparencia.";
 choices[53][3] = "La DTIC ser&aacute; responsable de la integridad y disponibilidad de la informaci&oacute;n, que se provea al Portal de la Transparencia a trav&eacute;s de enlaces o v&iacute;nculos a otras p&aacute;ginas o sedes electr&oacute;nicas cuya responsabilidad corresponda a distinto &oacute;rgano o Administraci&oacute;n P&uacute;blica.";
 answers[53] = choices[53][3];
 units[53] = "22";
 comments[53] = "Id Pregunta: 276. LEY DE TRANSPARENCIA";


//  Id pregunta: 630 Año de creación de pregunta: 2016
 questions[54]= "55)  Seg&uacute;n el Reglamento de Medidas de Seguridad de Ficheros Automatizados con Datos de Car&aacute;cter Personal, los ficheros que contengan datos de ideolog&iacute;a, religi&oacute;n, creencias, origen racial, salud o vida sexual, &iquest;qu&eacute; medidas de seguridad deber&aacute;n adoptar?";
 choices[54]= new Array();
 choices[54][0] = "De nivel b&aacute;sico y nivel medio.";
 choices[54][1] = "De nivel alto.";
 choices[54][2] = "De nivel medio y nivel alto.";
 choices[54][3] = "De nivel b&aacute;sico, nivel medio y nivel alto.";
 answers[54] = choices[54][3];
 units[54] = "35";
 comments[54] = "Id Pregunta: 630. Junta de Extremadura A1 2015";


//  Id pregunta: 21 Año de creación de pregunta: 2016
 questions[55]= "56)  En ITIL v3, &iquest;cu&aacute;l de los siguientes procesos forma parte del Dise&ntilde;o del Servicio?";
 choices[55]= new Array();
 choices[55][0] = "Gesti&oacute;n de la disponibilidad";
 choices[55][1] = "Gesti&oacute;n de la demanda";
 choices[55][2] = "Gesti&oacute;n de entregas";
 choices[55][3] = "Gesti&oacute;n de la configuraci&oacute;n";
 answers[55] = choices[55][0];
 units[55] = "101";
 comments[55] = "Id Pregunta: 21. AGE A1 2015";


//  Id pregunta: 499 Año de creación de pregunta: 2016
 questions[56]= "57)  A tenor de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la cuant&iacute;a global de los anticipos de caja fija no podr&aacute; superar para cada ministerio y organismo aut&oacute;nomo:";
 choices[56]= new Array();
 choices[56][0] = "El 7% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[56][1] = "El 5% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[56][2] = "El 6% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[56][3] = "El 8% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 answers[56] = choices[56][0];
 units[56] = "10";
 comments[56] = "Id Pregunta: 499. PRESUPUESTOS GENERALES";


//  Id pregunta: 641 Año de creación de pregunta: 2016
 questions[57]= "58)  La estructura de un Directorio Activo se basa en los siguientes conceptos:";
 choices[57]= new Array();
 choices[57][0] = "Directorios, Unidades f&iacute;sicas y Usuarios.";
 choices[57][1] = "Dominio, Unidad Organizativa, Grupos y Objetos.";
 choices[57][2] = "Unidades f&iacute;sicas, Unidades l&oacute;gicas y Directorios.";
 choices[57][3] = "Ficheros, Directorios, Particiones y Unidades.";
 answers[57] = choices[57][1];
 units[57] = "58";
 comments[57] = "Id Pregunta: 641. Junta de Extremadura A1 2015";


//  Id pregunta: 452 Año de creación de pregunta: 2016
 questions[58]= "59)  En t&eacute;rminos familiares, podemos decir que desembocan en gastos...";
 choices[58]= new Array();
 choices[58][0] = "Los cr&eacute;ditos";
 choices[58][1] = "Las partidas presupuestarias";
 choices[58][2] = "Los derechos";
 choices[58][3] = "Las obligaciones";
 answers[58] = choices[58][3];
 units[58] = "10";
 comments[58] = "Id Pregunta: 452. PRESUPUESTOS GENERALES";


//  Id pregunta: 637 Año de creación de pregunta: 2016
 questions[59]= "60)  En el sistema operativo Unix/Linux, el comando id:";
 choices[59]= new Array();
 choices[59][0] = "Muestra el n&uacute;mero de identificaci&oacute;n y el grupo al que pertenece el usuario.";
 choices[59][1] = "El comando id no existe.";
 choices[59][2] = "Muestra el n&uacute;mero de procesos lanzados por el usuario.";
 choices[59][3] = "Muestra las hebras y las identificaciones de los archivos abiertos por el usuario.";
 answers[59] = choices[59][0];
 units[59] = "57";
 comments[59] = "Id Pregunta: 637. Junta de Extremadura A1 2015";


//  Id pregunta: 736 Año de creación de pregunta: 2016
 questions[60]= "61)  Las iniciativas que se lancen al amparo del Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE se ce&ntilde;ir&aacute;n a:";
 choices[60]= new Array();
 choices[60][0] = "6 principios.";
 choices[60][1] = "7 principios.";
 choices[60][2] = "5 principios.";
 choices[60][3] = "6 directrices.";
 answers[60] = choices[60][1];
 units[60] = "28";
 comments[60] = "Id Pregunta: 736. Estrategia TIC";


//  Id pregunta: 378 Año de creación de pregunta: 2016
 questions[61]= "62)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[61]= new Array();
 choices[61][0] = "Quince miembros.";
 choices[61][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[61][2] = "Los miembros que determine el Consejo.";
 choices[61][3] = "Un Presidente y quince miembros.";
 answers[61] = choices[61][1];
 units[61] = "14";
 comments[61] = "Id Pregunta: 378. UNION EUROPEA";


//  Id pregunta: 315 Año de creación de pregunta: 2016
 questions[62]= "63)  El Colegio de Comisarios se re&uacute;ne:";
 choices[62]= new Array();
 choices[62][0] = "Una vez por semana.";
 choices[62][1] = "Una vez al mes.";
 choices[62][2] = "Dos veces en semana.";
 choices[62][3] = "Cuando lo acuerde el Presidente de la Comisi&oacute;n, y adem&aacute;s una vez al mes.";
 answers[62] = choices[62][0];
 units[62] = "5";
 comments[62] = "Id Pregunta: 315. UNION EUROPEA";


//  Id pregunta: 654 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Qu&eacute; significa la tolerancia a partici&oacute;n dentro del teorema CAP?";
 choices[63]= new Array();
 choices[63][0] = "El sistema podr&aacute; seguir procesando una petici&oacute;n aunque se pierda la conectividad con algun nodo";
 choices[63][1] = "Las modificaciones se aplican a todos los nodos en su conjunto en el mismo momento";
 choices[63][2] = "Cualquier peticion recibida en un nodo debe tener respuesta";
 choices[63][3] = "El teorema CAP no habla de tolerancia a particiones";
 answers[63] = choices[63][0];
 units[63] = "73";
 comments[63] = "Id Pregunta: 654. ";


//  Id pregunta: 362 Año de creación de pregunta: 2016
 questions[64]= "65)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[64]= new Array();
 choices[64][0] = "Son actos normativos.";
 choices[64][1] = "Poseen alcance general.";
 choices[64][2] = "No son obligatorias.";
 choices[64][3] = "Son actos individuales no normativos.";
 answers[64] = choices[64][3];
 units[64] = "5";
 comments[64] = "Id Pregunta: 362. UNION EUROPEA";


//  Id pregunta: 562 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Cu&aacute;l de los siguientes per&iacute;odos puede considerarse de crecimiento econ&oacute;mico en Espa&ntilde;a?";
 choices[65]= new Array();
 choices[65][0] = "Entre 1973 y 1978";
 choices[65][1] = "Entre 1992 y 1996";
 choices[65][2] = "Entre 1978 y 1985";
 choices[65][3] = "Entre 2008 y 2013";
 answers[65] = choices[65][2];
 units[65] = "12";
 comments[65] = "Id Pregunta: 562. Modelo econ&oacute;mico";


//  Id pregunta: 160 Año de creación de pregunta: 2016
 questions[66]= "67)  El mercado &uacute;nico digital se basa en tres pilares. Se&ntilde;ale cu&aacute;l NO es uno de los tres pilares.";
 choices[66]= new Array();
 choices[66][0] = "Mejorar el acceso de consumidores y empresas a los bienes y servicios digitales en toda Europa.";
 choices[66][1] = "Promover la actualizaci&oacute;n de las normas de accesibilidad hacia WCAG 3.0 por una sociedad m&aacute;s incluyente.";
 choices[66][2] = "Creaci&oacute;n de las condiciones adecuadas y la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan florecer";
 choices[66][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[66] = choices[66][1];
 units[66] = "19";
 comments[66] = "Id Pregunta: 160. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Mayo/Noticia-2015-05-07-estrategia-mercado-unico-digital-europeo.html#.WCjr0mrhDIU";


//  Id pregunta: 805 Año de creación de pregunta: 2016
 questions[67]= "68)  Son los titulares de los &oacute;rganos directivos encargados de la gesti&oacute;n de una o varias &aacute;reas funcionalmente homog&eacute;neas del Ministerio:";
 choices[67]= new Array();
 choices[67][0] = "los Secretarios generales t&eacute;cnicos";
 choices[67][1] = "los Directores generales";
 choices[67][2] = "los Secretarios generales";
 choices[67][3] = "los Subsecretarios";
 answers[67] = choices[67][1];
 units[67] = "4, 7, 8, 9";
 comments[67] = "Id Pregunta: 805. Ley 40/2015";


//  Id pregunta: 708 Año de creación de pregunta: 2016
 questions[68]= "69)  Indique la afirmaci&oacute;n falsa:";
 choices[68]= new Array();
 choices[68][0] = "En la publicidad activa la Administraci&oacute;n pone los datos a disposici&oacute;n de la ciudadan&iacute;a, en portales y p&aacute;ginas web, sin esperar a que los ciudadanos los demanden, proactivamente.";
 choices[68][1] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica los ciudadanos acceden a la informaci&oacute;n p&uacute;blica puesta a disposici&oacute;n por la Administraci&oacute;n en portales y p&aacute;ginas web.";
 choices[68][2] = "La publicidad activa y el derecho de acceso fomentan la transparencia en la actividad p&uacute;blica.";
 choices[68][3] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica la Administraci&oacute;n responde a las demandas de informaci&oacute;n por parte de los ciudadanos.";
 answers[68] = choices[68][1];
 units[68] = "22";
 comments[68] = "Id Pregunta: 708. Ley de transparencia";


//  Id pregunta: 370 Año de creación de pregunta: 2016
 questions[69]= "70)  Establecer la interpretaci&oacute;n adecuada de los Tratados de la Uni&oacute;n Europea y las normas de derecho derivado es el objeto de:";
 choices[69]= new Array();
 choices[69][0] = "Un recurso de incumplimiento.";
 choices[69][1] = "Recurso de carencia.";
 choices[69][2] = "Cuesti&oacute;n o incidente prejudicial.";
 choices[69][3] = "Ninguna es correcta.";
 answers[69] = choices[69][2];
 units[69] = "5";
 comments[69] = "Id Pregunta: 370. UNION EUROPEA";


//  Id pregunta: 6 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Cu&aacute;l de los siguientes procesos de M&Eacute;TRICA Versi&oacute;n 3 no est&aacute; dentro del &aacute;mbito de la norma ISO 12207 de procesos de ciclo de vida del software?";
 choices[70]= new Array();
 choices[70][0] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[70][1] = "Desarrollo de Sistemas de Informaci&oacute;n";
 choices[70][2] = "Construcci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[70][3] = "Ninguno de los anteriores, ya que los tres est&aacute;n cubiertos por la norma ISO 12207";
 answers[70] = choices[70][0];
 units[70] = "91";
 comments[70] = "Id Pregunta: 6. AGE A1 2015";


//  Id pregunta: 606 Año de creación de pregunta: 2016
 questions[71]= "72)  En ITIL v3, entre las metas del Proceso de la Planificaci&oacute;n y Soporte de la Transici&oacute;n del Servicio, se incluye:";
 choices[71]= new Array();
 choices[71][0] = "Planificar y coordinar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[71][1] = "Identificar, gestionar y limitar riesgos que puedan interrumpir el servicio a partir de la fase de transici&oacute;n del servicio.";
 choices[71][2] = "Planificar, identificar y gestionar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[71][3] = "Todas las respuestas son correctas.";
 answers[71] = choices[71][1];
 units[71] = "101";
 comments[71] = "Id Pregunta: 606. Junta de Extremadura A1 2015";


//  Id pregunta: 528 Año de creación de pregunta: 2016
 questions[72]= "73)  Podr&aacute;n actuar en representaci&oacute;n de otras ante las Administraciones P&uacute;blicas:";
 choices[72]= new Array();
 choices[72][0] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[72][1] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[72][2] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 choices[72][3] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 answers[72] = choices[72][3];
 units[72] = "7";
 comments[72] = "Id Pregunta: 528. LEY 39/2015";


//  Id pregunta: 667 Año de creación de pregunta: 2016
 questions[73]= "74)  Se&ntilde;ale la opci&oacute;n falsa respecto a la instrucci&oacute;n del procedimiento definida en la Ley 39/2015:";
 choices[73]= new Array();
 choices[73][0] = "Los interesados podr&aacute;n, en cualquier momento del procedimiento anterior al tr&aacute;mite de audiencia, aducir alegaciones y aportar documentos u otros elementos de juicio.";
 choices[73][1] = "El instructor del procedimiento s&oacute;lo podr&aacute; rechazar las pruebas propuestas por los interesados cuando sean manifiestamente improcedentes o innecesarias, mediante resoluci&oacute;n motivada.";
 choices[73][2] = "Salvo disposici&oacute;n expresa en contrario, los informes ser&aacute;n preceptivos y vinculantes.";
 choices[73][3] = "Se podr&aacute; prescindir del tr&aacute;mite de audiencia cuando no figuren en el procedimiento ni sean tenidos en cuenta en la resoluci&oacute;n otros hechos ni otras alegaciones y pruebas que las aducidas por el interesado.";
 answers[73] = choices[73][2];
 units[73] = "7";
 comments[73] = "Id Pregunta: 667. Cap&iacute;tulo IV, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 337 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;De cu&aacute;ntos diputados se compone el Parlamento Europeo?:";
 choices[74]= new Array();
 choices[74][0] = "732";
 choices[74][1] = "626";
 choices[74][2] = "786";
 choices[74][3] = "360";
 answers[74] = choices[74][2];
 units[74] = "5";
 comments[74] = "Id Pregunta: 337. UNION EUROPEA";


