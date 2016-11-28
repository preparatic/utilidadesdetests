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

//  Id pregunta: 439 Año de creación de pregunta: 2016
 questions[0]= "1)  Sobre el Sistema de Interconexi&oacute;n de Registros (SIR):";
 choices[0]= new Array();
 choices[0][0] = "Es la infraestructura b&aacute;sica que permite el intercambio de asientos electr&oacute;nicos de registro entre los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[0][1] = "Permite eliminar el tr&aacute;nsito de papel entre administraciones, aumentando la eficiencia y eliminando los costes de manipulaci&oacute;n y remisi&oacute;n del papel, gracias a la generaci&oacute;n de copias aut&eacute;nticas electr&oacute;nicas de la documentaci&oacute;n presentada en los asientos de registro.";
 choices[0][2] = "No es necesario que la aplicaci&oacute;n de registro est&eacute; certificada con la norma SICRES 3.0.";
 choices[0][3] = "La integraci&oacute;n en SIR se realiza mediante aplicaciones de registro comunes como GEISER y ORVE o bien, siempre que se justifique, mediante aplicaciones previamente certificadas por la Comisi&oacute;n de Estrategia TIC.";
 answers[0] = choices[0][1];
 units[0] = "43";
 comments[0] = "Id Pregunta: 439. SERVICIOS COMUNES";


//  Id pregunta: 70 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;Qui&eacute;n determina las condiciones t&eacute;cnicas normalizadas del Punto General de Entrada de Factura Electr&oacute;nica?";
 choices[1]= new Array();
 choices[1][0] = "La Secretar&iacute;a de Estado de Administraciones P&uacute;blicas conjuntamente con la Secretar&iacute;a de Estado de Presupuestos y Gastos";
 choices[1][1] = "La Secretar&iacute;a de Estado de Hacienda conjuntamente con la Comisi&oacute;n Ministerial de Administraci&oacute; Digital";
 choices[1][2] = "La Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 choices[1][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[1] = choices[1][0];
 units[1] = "75";
 comments[1] = "Id Pregunta: 70. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 187 Año de creación de pregunta: 2016
 questions[2]= "3)  El Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola establece un plazo de 30 d&iacute;as, para que los Decretos-Leyes sean sometidos a debate y votaci&oacute;n de la totalidad del Congreso de los Diputados, durante el cual:";
 choices[2]= new Array();
 choices[2][0] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento de urgencia.";
 choices[2][1] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento com&uacute;n.";
 choices[2][2] = "Durante dicho plazo, no pueden ser tramitados ni como proyectos de ley ni como propociones de ley.";
 choices[2][3] = "Durante dicho plazo, s&oacute;lo el Senado puede tramitar los Decretos-Leyes como proyectos de ley por el procedimiento de urgencia.";
 answers[2] = choices[2][0];
 units[2] = "1";
 comments[2] = "Id Pregunta: 187. CONSTITUCION1978";


//  Id pregunta: 615 Año de creación de pregunta: 2016
 questions[3]= "4)  El Modelo de Referencia de Interconexi&oacute;n de Sistemas Abiertos (OSI) consta de siete niveles. Se&ntilde;ala cu&aacute;l de los principios que se aplicaron para llevar a cabo esta divisi&oacute;n es falso:";
 choices[3]= new Array();
 choices[3][0] = "No se deben crear demasiados niveles de manera que la tarea de describir e integrar &eacute;stos fuera m&aacute;s dif&iacute;cil de lo necesario.";
 choices[3][1] = "Aunque se requiera un nivel de abstracci&oacute;n diferente en el manejo de los datos, debe usarse un nivel ya existente.";
 choices[3][2] = "Cada nivel debe realizar unas funciones bien definidas.";
 choices[3][3] = "Crear para cada nivel interfases con el nivel superior e inferior &uacute;nicamente.";
 answers[3] = choices[3][1];
 units[3] = "48";
 comments[3] = "Id Pregunta: 615. Junta de Extremadura A1 2015";


//  Id pregunta: 114 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Qu&eacute; es la Garant&iacute;a Juvenil?";
 choices[4]= new Array();
 choices[4][0] = "Una iniciativa europea que pretende facilitar el acceso de los j&oacute;venes al mercado de trabajo ofreci&eacute;ndoles una oferta de empleo, de educaci&oacute;n o formaci&oacute;n tras haber finalizado sus estudios o quedar desempleados";
 choices[4][1] = "Un Plan que permite la concesi&oacute;n de subvenciones a j&oacute;venes para facilitar el alquiler de su vivienda habitual.";
 choices[4][2] = "Un Plan que concede cr&eacute;ditos en condiciones ventajosas a j&oacute;venes emprendedores";
 choices[4][3] = "Una inciativa europea que facilita a los j&oacute;venes el acceso a las nuevas tecnolog&iacute;as";
 answers[4] = choices[4][0];
 units[4] = "15";
 comments[4] = "Id Pregunta: 114. ";


//  Id pregunta: 474 Año de creación de pregunta: 2016
 questions[5]= "6)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la modalidad de auditor&iacute;a cuyo objeto consiste en la verificaci&oacute;n selectiva de la adecuaci&oacute;n a la legalidad de la gesti&oacute;n presupuestaria, de contrataci&oacute;n, personal, ingresos y gesti&oacute;n de subvenciones, as&iacute; como de cualquier otro aspecto de la actividad econ&oacute;mico financiero de las entidades auditadas se denomina:";
 choices[5]= new Array();
 choices[5][0] = "Auditor&iacute;a de sistemas y procedimientos de gesti&oacute;n econ&oacute;mica y financiera.";
 choices[5][1] = "Auditor&iacute;a operativa.";
 choices[5][2] = "Auditor&iacute;a de cumplimiento.";
 choices[5][3] = "Auditor&iacute;a de econom&iacute;a, eficacia y eficiencia.";
 answers[5] = choices[5][2];
 units[5] = "10";
 comments[5] = "Id Pregunta: 474. PRESUPUESTOS GENERALES";


//  Id pregunta: 624 Año de creación de pregunta: 2016
 questions[6]= "7)  Qu&eacute; nombre reciben las unidades de almacenamieto de las que est&aacute; compuesta un documento XML?";
 choices[6]= new Array();
 choices[6][0] = "Entradas (entities).";
 choices[6][1] = "Atributos (attribs).";
 choices[6][2] = "M&oacute;dulos (modules).";
 choices[6][3] = "Objetos (objects).";
 answers[6] = choices[6][0];
 units[6] = "74";
 comments[6] = "Id Pregunta: 624. Junta de Extremadura A1 2015";


//  Id pregunta: 237 Año de creación de pregunta: 2016
 questions[7]= "8)  Seg&uacute;n la regulaci&oacute;n constitucional del derecho de asociaci&oacute;n:";
 choices[7]= new Array();
 choices[7][0] = "Las asociaciones que se constituyan deben inscribirse en un registro a los efectos de publicidad.";
 choices[7][1] = "Las asociaciones pueden ser suspendidas en virtud de resoluci&oacute;n administrativa motivada.";
 choices[7][2] = "Este derecho aparece regulado en el T&iacute;tulo Preliminar de la Constituci&oacute;n.";
 choices[7][3] = "Este derecho aparece regulado en la Secci&oacute;n 2&ordf; del Cap&iacute;tulo 2&ordm; del T&iacute;tulo I de la Constituci&oacute;n.";
 answers[7] = choices[7][2];
 units[7] = "1";
 comments[7] = "Id Pregunta: 237. CONSTITUCION1978";


//  Id pregunta: 219 Año de creación de pregunta: 2016
 questions[8]= "9)  Seg&uacute;n establece el Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola, los Decretos-Leyes son normas con rango de Ley que aprueba el Gobierno:";
 choices[8]= new Array();
 choices[8][0] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad y una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[8][1] = "Sin mediar delegaci&oacute;n de las Cortes, aunque deben ser inmediatamente sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[8][2] = "En casos de extraordinaria y urgente necesidad sin mediar delegaci&oacute;n de las Cortes, aunque una vez aprobados deben ser tramitados como proyectos de ley por el procedimiento de urgencia.";
 choices[8][3] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad, y que una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 answers[8] = choices[8][1];
 units[8] = "1";
 comments[8] = "Id Pregunta: 219. CONSTITUCION1978";


//  Id pregunta: 238 Año de creación de pregunta: 2016
 questions[9]= "10)  En caso de dimisi&oacute;n del Presidente del Gobierno:";
 choices[9]= new Array();
 choices[9][0] = "El Gobierno cesa a continuaci&oacute;n.";
 choices[9][1] = "El Rey podr&aacute; proponer, a trav&eacute;s del Presidente del Congreso, un nuevo candidato a la Presidencia del Gobierno.";
 choices[9][2] = "El Pleno del Congreso, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 choices[9][3] = "El Pleno del Congreso y del Senado, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 answers[9] = choices[9][1];
 units[9] = "1";
 comments[9] = "Id Pregunta: 238. CONSTITUCION1978";


//  Id pregunta: 300 Año de creación de pregunta: 2016
 questions[10]= "11)  La designaci&oacute;n para formar parte del Tribunal de Cuentas la efect&uacute;a:";
 choices[10]= new Array();
 choices[10][0] = "La Comisi&oacute;n.";
 choices[10][1] = "El Consejo de Europa.";
 choices[10][2] = "El Consejo Europeo.";
 choices[10][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[10] = choices[10][3];
 units[10] = "5";
 comments[10] = "Id Pregunta: 300. UNION EUROPEA";


//  Id pregunta: 797 Año de creación de pregunta: 2016
 questions[11]= "12)  Se&ntilde;ale la respuesta correcta:";
 choices[11]= new Array();
 choices[11][0] = "corresponde a los &oacute;rganos superiores establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos directivos su desarrollo y ejecuci&oacute;n";
 choices[11][1] = "corresponde establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos superiores";
 choices[11][2] = "corresponde establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos directivos";
 choices[11][3] = "corresponde a los &oacute;rganos directivos establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos superiores su desarrollo y ejecuci&oacute;n";
 answers[11] = choices[11][0];
 units[11] = "4, 7, 8, 9";
 comments[11] = "Id Pregunta: 797. Ley 40/2015";


//  Id pregunta: 308 Año de creación de pregunta: 2016
 questions[12]= "13)  El Tribunal de Justicia se cre&oacute; en:";
 choices[12]= new Array();
 choices[12][0] = "El Tratado de la CECA.";
 choices[12][1] = "El Tratado de Niza.";
 choices[12][2] = "El Tratado de &Aacute;msterdam.";
 choices[12][3] = "El Tratado de Lisboa.";
 answers[12] = choices[12][0];
 units[12] = "5";
 comments[12] = "Id Pregunta: 308. UNION EUROPEA";


//  Id pregunta: 280 Año de creación de pregunta: 2016
 questions[13]= "14)  El pacto fiscal europeo de 2012 incluye:";
 choices[13]= new Array();
 choices[13][0] = "Un conjunto de reglas, llamadas &quot;reglas de oro&quot;, que son vinculantes en la UE para el principio de equilibrio presupuestario.";
 choices[13][1] = "Un compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,6% de la PIB.";
 choices[13][2] = "Un compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional, lo cual no necesita ser verificado por el Tribunal de Justicia de la Uni&oacute;n Europea.";
 choices[13][3] = "La obligaci&oacute;n de mantener siempre el d&eacute;ficit p&uacute;blico por debajo del 2.8 % del PIB.";
 answers[13] = choices[13][0];
 units[13] = "5";
 comments[13] = "Id Pregunta: 280. UNION EUROPEA";


//  Id pregunta: 549 Año de creación de pregunta: 2016
 questions[14]= "15)  La gobernanza TIC incluye, entre otros, los siguientes aspectos:";
 choices[14]= new Array();
 choices[14][0] = "Integrar la estrategia TIC con la de negocio";
 choices[14][1] = "Adoptar e implantar un marco de control de las TIC";
 choices[14][2] = "Proporcionar las estructuras organizativas encargadas de implantar la estrategia TIC";
 choices[14][3] = "Todas las anteriores";
 answers[14] = choices[14][3];
 units[14] = "26";
 comments[14] = "Id Pregunta: 549. Gobernanza TIC";


//  Id pregunta: 420 Año de creación de pregunta: 2016
 questions[15]= "16)  La Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, recoge que deber&aacute;n elaborar y aplicar un plan de igualdad, aquellas empresas con m&aacute;s de:";
 choices[15]= new Array();
 choices[15][0] = "150 trabajadores/as.";
 choices[15][1] = "200 trabajadores/as.";
 choices[15][2] = "250 trabajadores/as.";
 choices[15][3] = "300 trabajadores/as.";
 answers[15] = choices[15][2];
 units[15] = "14";
 comments[15] = "Id Pregunta: 420. POLITICAS DE IGUALDAD";


//  Id pregunta: 696 Año de creación de pregunta: 2016
 questions[16]= "17)  De las siguientes cu&aacute;l NO es una ventaja de la integraci&oacute;n continua:";
 choices[16]= new Array();
 choices[16][0] = "Ejecuci&oacute;n inmediata de las pruebas de aceptaci&oacute;n.";
 choices[16][1] = "Monitorizaci&oacute;n continua de las m&eacute;tricas de calidad del proyecto.";
 choices[16][2] = "Los desarrolladores pueden detectar y solucionar problemas de integraci&oacute;n de forma continua, evitando el caos de &uacute;ltima hora cuando se acercan las fechas de entrega.";
 choices[16][3] = "Disponibilidad constante de una versi&oacute;n para pruebas, demos o lanzamientos anticipados.";
 answers[16] = choices[16][0];
 units[16] = "92";
 comments[16] = "Id Pregunta: 696. INTEGRACION CONTINUA";


//  Id pregunta: 836 Año de creación de pregunta: 2016
 questions[17]= "18)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[17]= new Array();
 choices[17][0] = "Los &oacute;rganos de las diferentes Administraciones P&uacute;blicas podr&aacute;n delegar el ejercicio de las competencias que tengan atribuidas en otros &oacute;rganos de la misma Administraci&oacute;n, aun cuando no sean jer&aacute;rquicamente dependientes, o en los Organismos p&uacute;blicos o Entidades de Derecho P&uacute;blico vinculados o dependientes de aqu&eacute;llas.";
 choices[17][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado, la delegaci&oacute;n de competencias deber&aacute; ser aprobada previamente por el &oacute;rgano ministerial de quien dependa el &oacute;rgano delegante y en el caso de los Organismos p&uacute;blicos o Entidades vinculados o dependientes, por el &oacute;rgano m&aacute;ximo de direcci&oacute;n, de acuerdo con sus normas de creaci&oacute;n. Cuando se trate de &oacute;rganos no relacionados jer&aacute;rquicamente ser&aacute; necesaria la aprobaci&oacute;n previa del superior com&uacute;n si ambos pertenecen al mismo Ministerio, o del &oacute;rgano superior de quien dependa el &oacute;rgano delegado, si el delegante y el delegado pertenecen a diferentes Ministerios.";
 choices[17][2] = "Asimismo, los &oacute;rganos de la Administraci&oacute;n General del Estado podr&aacute;n delegar el ejercicio de sus competencias propias en sus Organismos p&uacute;blicos y Entidades vinculados o dependientes, cuando resulte conveniente para alcanzar los fines que tengan asignados y mejorar la eficacia de su gesti&oacute;n. La delegaci&oacute;n deber&aacute; ser previamente aprobada por los &oacute;rganos de los que dependan el &oacute;rgano delegante y el &oacute;rgano delegado, o aceptada por este &uacute;ltimo cuando sea el &oacute;rgano m&aacute;ximo de direcci&oacute;n del Organismo p&uacute;blico o Entidad vinculado o dependiente.";
 choices[17][3] = "Todas son correctas.";
 answers[17] = choices[17][3];
 units[17] = "4, 7, 8, 9";
 comments[17] = "Id Pregunta: 836. Ley 40/2015";


//  Id pregunta: 31 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Qu&eacute; es MongoDB?";
 choices[18]= new Array();
 choices[18][0] = "Una herramienta Object Relational Mapping (ORM) para facilitar el desarrollo.";
 choices[18][1] = "Una base de datos de c&oacute;digo abierto de documentos tipo JSON.";
 choices[18][2] = "Un sistema gestor de base de datos relacional.";
 choices[18][3] = "Una base de datos jer&aacute;rquica de relaciones encadenadas.";
 answers[18] = choices[18][1];
 units[18] = "73";
 comments[18] = "Id Pregunta: 31. AGE A1 2015";


//  Id pregunta: 476 Año de creación de pregunta: 2016
 questions[19]= "20)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los interventores delegados ser&aacute;n designados entre funcionarios de los Cuerpos:";
 choices[19]= new Array();
 choices[19][0] = "Cuerpo Superior de Interventores y Auditores del Estado.";
 choices[19][1] = "Todas las respuestas son correctas.";
 choices[19][2] = "Cuerpo Militar de Intervenci&oacute;n de la Defensa.";
 choices[19][3] = "Cuerpo Superior de Intervenci&oacute;n y Contabilidad de Administraci&oacute;n de la Seguridad Social.";
 answers[19] = choices[19][1];
 units[19] = "10";
 comments[19] = "Id Pregunta: 476. PRESUPUESTOS GENERALES";


//  Id pregunta: 97 Año de creación de pregunta: 2016
 questions[20]= "21)  Indique la opci&oacute;n correcta respecto al Portal de Transparencia del Gobierno de Espa&ntilde;a:";
 choices[20]= new Array();
 choices[20][0] = "Incluye informaci&oacute;n acerca de las Entidades Locales.";
 choices[20][1] = "La solicitud de informaci&oacute;n disponible, amparada por el derecho de acceso presente en la Ley 19/2013, no precisa identificaci&oacute;n.";
 choices[20][2] = "No incluye informaci&oacute;n acerca de &oacute;rganos Constitucionales.";
 choices[20][3] = "El Portal es gestionado por el Consejo de Transparencia y Buen Gobierno.";
 answers[20] = choices[20][2];
 units[20] = "22";
 comments[20] = "Id Pregunta: 97. AGE A1 2015";


//  Id pregunta: 672 Año de creación de pregunta: 2016
 questions[21]= "22)  Respecto a la ejecuci&oacute;n de la resoluci&oacute;n de un procedimiento administrativo, se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[21]= new Array();
 choices[21][0] = "Las Administraciones P&uacute;blicas no iniciar&aacute;n la ejecuci&oacute;n hasta que se haya dictado resoluci&oacute;n.";
 choices[21][1] = "De una resoluci&oacute;n administrativa nunca puede derivarse una multa.";
 choices[21][2] = "La ejecuci&oacute;n forzosa de una resoluci&oacute;n puede afectar al patrimonio.";
 choices[21][3] = "Contra algunas resoluciones es posible interponer recursos por v&iacute;a administrativa.";
 answers[21] = choices[21][1];
 units[21] = "7";
 comments[21] = "Id Pregunta: 672. Cap&iacute;tulo VII, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 21 Año de creación de pregunta: 2016
 questions[22]= "23)  En ITIL v3, &iquest;cu&aacute;l de los siguientes procesos forma parte del Dise&ntilde;o del Servicio?";
 choices[22]= new Array();
 choices[22][0] = "Gesti&oacute;n de la disponibilidad";
 choices[22][1] = "Gesti&oacute;n de la demanda";
 choices[22][2] = "Gesti&oacute;n de entregas";
 choices[22][3] = "Gesti&oacute;n de la configuraci&oacute;n";
 answers[22] = choices[22][0];
 units[22] = "101";
 comments[22] = "Id Pregunta: 21. AGE A1 2015";


//  Id pregunta: 558 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Qu&eacute; es el geo-bloqueo, contra el que pretende ser soluci&oacute;n la estrategia para el Mercado &Uacute;nico Digital en Europa?";
 choices[23]= new Array();
 choices[23][0] = "Es la discriminaci&oacute;n en la b&uacute;squeda de un empleo seg&uacute;n el pa&iacute;s de origen del trabajador";
 choices[23][1] = "Es la imposibilidad de pasar la aduana para paquetes comprados en tiendas online de ciertos pa&iacute;ses";
 choices[23][2] = "Es la pr&aacute;ctica por la cual los vendedores online deniegan a los consumidores el acceso a su p&aacute;gina web en funci&oacute;n de su localizaci&oacute;n o le ofrecen precios distintos";
 choices[23][3] = "Es la pr&aacute;ctica comercial por la que varias tiendas online ofrecen el mismo producto a precios pre-acordados entre ellas, limitando la competencia";
 answers[23] = choices[23][2];
 units[23] = "17";
 comments[23] = "Id Pregunta: 558. Mercado &Uacute;nico Digital";


//  Id pregunta: 444 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Cu&aacute;l de las siguientes definiciones NO es uno de los roles de la Plataforma de Intermediaci&oacute;n, seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Protocolos de intermediaci&oacute;n de datos?:";
 choices[24]= new Array();
 choices[24][0] = "Mantendr&aacute; un portal web informativo con toda la documentaci&oacute;n relativa a la Plataforma.";
 choices[24][1] = "Almacenar&aacute; informaci&oacute;n personal de ciudadano derivada de la transacci&oacute;n de intercambio de datos, asegurando para ello la confidencialidad e integridad de la misma a trav&eacute;s de los mecanismos correspondientes.";
 choices[24][2] = "Mantendr&aacute; un centro de atenci&oacute;n a usuarios e integradores que canalice todas las incidencias relativas al sistema.";
 choices[24][3] = "Las consultas a los servicios de verificaci&oacute;n de datos, se pueden realizar de forma automatizada desde una aplicaci&oacute;n de gesti&oacute;n de un tr&aacute;mite, adaptadas para invocar los Webservice proporcionados por el servicio.";
 answers[24] = choices[24][1];
 units[24] = "43";
 comments[24] = "Id Pregunta: 444. SERVICIOS COMUNES";


//  Id pregunta: 81 Año de creación de pregunta: 2016
 questions[25]= "26)  El lenguaje SPARK es un subconjunto de:";
 choices[25]= new Array();
 choices[25][0] = "Java";
 choices[25][1] = "Fortran";
 choices[25][2] = "Ruby";
 choices[25][3] = "Ada";
 answers[25] = choices[25][3];
 units[25] = "73";
 comments[25] = "Id Pregunta: 81. AGE A1 2015";


//  Id pregunta: 286 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Cu&aacute;l no es un pilar de la Estrategia del Mercado &Uacute;nico Digital?";
 choices[26]= new Array();
 choices[26][0] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa.";
 choices[26][1] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar.";
 choices[26][2] = "Iniciativa europea de libre flujo de datos.";
 choices[26][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital.";
 answers[26] = choices[26][2];
 units[26] = "5";
 comments[26] = "Id Pregunta: 286. UNION EUROPEA";


//  Id pregunta: 17 Año de creación de pregunta: 2016
 questions[27]= "28)  De acuerdo con el Reglamento por el que se desarrolla parcialmente la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, aprobado por Real Decreto 1671/2009, de 6 de noviembre, se&ntilde;ale la respuesta correcta:";
 choices[27]= new Array();
 choices[27][0] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de emisi&oacute;n.";
 choices[27][1] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 12 meses desde la fecha de emisi&oacute;n.";
 choices[27][2] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de notificaci&oacute;n.";
 choices[27][3] = "Los documentos electr&oacute;nicos deben conservarse por el per&iacute;odo m&iacute;nimo que determine cada &oacute;rgano administrativo de acuerdo con el procedimiento administrativo de que se trate.";
 answers[27] = choices[27][3];
 units[27] = "44";
 comments[27] = "Id Pregunta: 17. AGE A1 2015";


//  Id pregunta: 625 Año de creación de pregunta: 2016
 questions[28]= "29)  En PHP 5.0, &iquest;cu&aacute;l es la regla para formar los nombres de las variables?";
 choices[28]= new Array();
 choices[28][0] = "Una variable debe comenzar con el signo $ seguido del nombre de la variable.";
 choices[28][1] = "Una variable debe comenzar con el signo &amp; seguido del nombre de la variable.";
 choices[28][2] = "Una variable debe comenzar por un car&aacute;cter num&eacute;rico.";
 choices[28][3] = "No hay regla para la formaci&oacute;n de los nombres de las variables.";
 answers[28] = choices[28][0];
 units[28] = "65";
 comments[28] = "Id Pregunta: 625. Junta de Extremadura A1 2015";


//  Id pregunta: 301 Año de creación de pregunta: 2016
 questions[29]= "30)  El Presidente del Tribunal de Cuentas es elegido por:";
 choices[29]= new Array();
 choices[29][0] = "Los propios miembros del Tribunal.";
 choices[29][1] = "El Consejo de Europa.";
 choices[29][2] = "El Consejo Europeo.";
 choices[29][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[29] = choices[29][0];
 units[29] = "5";
 comments[29] = "Id Pregunta: 301. UNION EUROPEA";


//  Id pregunta: 636 Año de creación de pregunta: 2016
 questions[30]= "31)  En un modelo entidad/relaci&oacute;n, un tipo de interrelaci&oacute;n se caracteriza por:";
 choices[30]= new Array();
 choices[30][0] = "El nombre y el tipo de correspondencia.";
 choices[30][1] = "El nombre, el grado y el tipo de correspondencia.";
 choices[30][2] = "El nombre, el nivel y el tipo de correspondencia.";
 choices[30][3] = "El nombre y el grado.";
 answers[30] = choices[30][1];
 units[30] = "85";
 comments[30] = "Id Pregunta: 636. Junta de Extremadura A1 2015";


//  Id pregunta: 152 Año de creación de pregunta: 2016
 questions[31]= "32)  Los documentos electr&oacute;nicos deber&aacute;n conservarse en un formato que permita: (se&ntilde;ala la respuesta incorrecta)";
 choices[31]= new Array();
 choices[31][0] = "garantizar su consulta hasta transcurridos cinco a&ntilde;os desde su emisi&oacute;n";
 choices[31][1] = "garantizar la conservaci&oacute;n del documento";
 choices[31][2] = "garantizar la autenticidad del documento";
 choices[31][3] = "garantizar la integridad del documento";
 answers[31] = choices[31][0];
 units[31] = "7";
 comments[31] = "Id Pregunta: 152. Ley 39/2015, Art&iacute;culo 17";


//  Id pregunta: 353 Año de creación de pregunta: 2016
 questions[32]= "33)  El buen funcionamiento de la Uni&oacute;n Europea recae, entre otras instituciones, en:";
 choices[32]= new Array();
 choices[32][0] = "El Parlamento Europeo.";
 choices[32][1] = "Todas las respuestas son correctas.";
 choices[32][2] = "La Comisi&oacute;n Europea.";
 choices[32][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[32] = choices[32][1];
 units[32] = "5";
 comments[32] = "Id Pregunta: 353. UNION EUROPEA";


//  Id pregunta: 675 Año de creación de pregunta: 2016
 questions[33]= "34)  Se&ntilde;ale cual de los siguientes factores no contribuye a la sostenibilidad del sistema de pensiones:";
 choices[33]= new Array();
 choices[33][0] = "El aumento de la esperanza de vida.";
 choices[33][1] = "La mejora del &iacute;ndice de natalidad.";
 choices[33][2] = "La reducci&oacute;n del desempleo.";
 choices[33][3] = "El incremento de la edad de jubilaci&oacute;n.";
 answers[33] = choices[33][0];
 units[33] = "14";
 comments[33] = "Id Pregunta: 675. Estructura social";


//  Id pregunta: 175 Año de creación de pregunta: 2016
 questions[34]= "35)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola en su Art&iacute;culo 159, los miembros del Tribunal Constitucional ser&aacute;n designados por un per&iacute;odo de:";
 choices[34]= new Array();
 choices[34][0] = "seis a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[34][1] = "nueve a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[34][2] = "ocho a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 choices[34][3] = "cuatro a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 answers[34] = choices[34][1];
 units[34] = "1";
 comments[34] = "Id Pregunta: 175. CONSTITUCION1978";


//  Id pregunta: 539 Año de creación de pregunta: 2016
 questions[35]= "36)  Respecto a los registros electr&oacute;nicos de apoderamientos no es correcto:";
 choices[35]= new Array();
 choices[35][0] = "en el &aacute;mbito estatal, este registro ser&aacute; el Registro Electr&oacute;nico de Apoderamientos de la Administraci&oacute;n General del Estado";
 choices[35][1] = "en ellos no constar&aacute; el bastanteo realizado del poder";
 choices[35][2] = "los registros generales de apoderamientos no impedir&aacute;n la existencia de registros particulares en cada Organismo";
 choices[35][3] = "cada Organismo podr&aacute; disponer de su propio registro electr&oacute;nico de apoderamientos";
 answers[35] = choices[35][1];
 units[35] = "7";
 comments[35] = "Id Pregunta: 539. LEY 39/2015";


//  Id pregunta: 637 Año de creación de pregunta: 2016
 questions[36]= "37)  En el modelo relacional existen diversas clasificaciones de las relaciones. Indica qu&eacute; tipos de relaciones se consideran relaciones persistentes:";
 choices[36]= new Array();
 choices[36][0] = "Relaciones base y vistas.";
 choices[36][1] = "Relaciones base, vistas y el resultado de una consulta.";
 choices[36][2] = "Relaciones base, vistas y relaciones temporales.";
 choices[36][3] = "Relaciones base, vistas e instant&aacute;neas.";
 answers[36] = choices[36][3];
 units[36] = "60";
 comments[36] = "Id Pregunta: 637. Junta de Extremadura A1 2015";


//  Id pregunta: 401 Año de creación de pregunta: 2016
 questions[37]= "38)  Entre los criterios generales de actuaci&oacute;n los Poderes P&uacute;blicos, tienen:";
 choices[37]= new Array();
 choices[37][0] = "La implantaci&oacute;n de un lenguaje no sexista en el &aacute;mbito administrativo, y en la totalidad de las relaciones sociales, culturales y art&iacute;sticas.";
 choices[37][1] = "La participaci&oacute;n equilibrada de mujeres y hombres en las candidaturas electorales y toma de decisiones.";
 choices[37][2] = "Ambas son correctas.";
 choices[37][3] = "A y B son incorrectas.";
 answers[37] = choices[37][2];
 units[37] = "14";
 comments[37] = "Id Pregunta: 401. POLITICAS DE IGUALDAD";


//  Id pregunta: 564 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Cu&aacute;l de los siguientes per&iacute;odos puede considerarse de crecimiento econ&oacute;mico en Espa&ntilde;a?";
 choices[38]= new Array();
 choices[38][0] = "Entre 1973 y 1978";
 choices[38][1] = "Entre 1992 y 1996";
 choices[38][2] = "Entre 1978 y 1985";
 choices[38][3] = "Entre 2008 y 2013";
 answers[38] = choices[38][2];
 units[38] = "12";
 comments[38] = "Id Pregunta: 564. Modelo econ&oacute;mico";


//  Id pregunta: 641 Año de creación de pregunta: 2016
 questions[39]= "40)  En cuanto al proceso de autenticaci&oacute;n en Linux, indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[39]= new Array();
 choices[39][0] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema DEC.";
 choices[39][1] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema MD6.";
 choices[39][2] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DES y MD5.";
 choices[39][3] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DEC y MD6.";
 answers[39] = choices[39][2];
 units[39] = "57";
 comments[39] = "Id Pregunta: 641. Junta de Extremadura A1 2015";


//  Id pregunta: 716 Año de creación de pregunta: 2016
 questions[40]= "41)  Se&ntilde;ale la opci&oacute;n correcta";
 choices[40]= new Array();
 choices[40][0] = "Jenkins un servidor de integraci&oacute;n continua comercial.";
 choices[40][1] = "Extiende su funcionalidad a trav&eacute;s de plugins.";
 choices[40][2] = "Solamente soporta herramientas de control de versiones como CVS, Git y Clearcase.";
 choices[40][3] = "No posee un historial de cambios realizados por build o versi&oacute;n.";
 answers[40] = choices[40][1];
 units[40] = "92";
 comments[40] = "Id Pregunta: 716. INTEGRACION CONTINUA";


//  Id pregunta: 169 Año de creación de pregunta: 2016
 questions[41]= "42)  En lo que se refiere a comunicaciones m&oacute;viles en Europa,";
 choices[41]= new Array();
 choices[41][0] = "en 2020 se liberar&aacute;n las bandas de frecuencia superior a 10 Ghz para el despliegue de 5G";
 choices[41][1] = "en 2020 se espera desplegar la red 5G a gran escala.";
 choices[41][2] = "en 2020 se espera desplegar la red 4G-plus.";
 choices[41][3] = "en 2020 se liberar&aacute; la banda de frecuencia de 800 Mhz para finalizar el despliegue de 4G";
 answers[41] = choices[41][1];
 units[41] = "19";
 comments[41] = "Id Pregunta: 169. https://ec.europa.eu/digital-single-market/en/5g-europe-action-plan";


//  Id pregunta: 41 Año de creación de pregunta: 2016
 questions[42]= "43)  En cuanto al an&aacute;lisis DAFO:";
 choices[42]= new Array();
 choices[42][0] = "Considera detallada y exclusivamente factores internos.";
 choices[42][1] = "Es una t&eacute;cnica aplicable dentro de la Planificaci&oacute;n de Sistemas de Informaci&oacute;n.";
 choices[42][2] = "Considera detallada y exclusivamente factores externos.";
 choices[42][3] = "Se obtiene como resultado final del proceso de Planificaci&oacute;n Estrat&eacute;gica.";
 answers[42] = choices[42][1];
 units[42] = "83";
 comments[42] = "Id Pregunta: 41. AGE A1 2015";


//  Id pregunta: 475 Año de creación de pregunta: 2016
 questions[43]= "44)  Seg&uacute;n el art&iacute;culo de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , el r&eacute;gimen econ&oacute;mico y financiero del sector p&uacute;blico estatal se regula en:";
 choices[43]= new Array();
 choices[43][0] = "Ley 50/1997, del Gobierno.";
 choices[43][1] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[43][2] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General del Estado.";
 choices[43][3] = "La Ley General de la Hacienda P&uacute;blica.";
 answers[43] = choices[43][1];
 units[43] = "10";
 comments[43] = "Id Pregunta: 475. PRESUPUESTOS GENERALES";


//  Id pregunta: 832 Año de creación de pregunta: 2016
 questions[44]= "45)  Contra las resoluciones en materia de abstenci&oacute;n y recusaci&oacute;n...";
 choices[44]= new Array();
 choices[44][0] = "Cabr&aacute; recurso de alzada";
 choices[44][1] = "Cabr&aacute; el nuevo protesto";
 choices[44][2] = "Cabr&aacute; recurso de reposici&oacute;n";
 choices[44][3] = "No cabr&aacute; recurso alguno";
 answers[44] = choices[44][3];
 units[44] = "4, 7, 8, 9";
 comments[44] = "Id Pregunta: 832. Ley 40/2015";


//  Id pregunta: 786 Año de creación de pregunta: 2016
 questions[45]= "46)  Salvo las excepciones previstas por esta Ley, la organizaci&oacute;n de la Administraci&oacute;n General del Estado responde a los principios de:";
 choices[45]= new Array();
 choices[45][0] = "divisi&oacute;n funcional en Departamentos ministeriales y de gesti&oacute;n territorial integrada en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[45][1] = "gesti&oacute;n territorial integrada en Departamentos ministeriales y de divisi&oacute;n funcional en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[45][2] = "divisi&oacute;n funcional en Delegaciones del Gobierno y de gesti&oacute;n territorial integrada en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 choices[45][3] = "gesti&oacute;n territorial integrada en Delegaciones del Gobierno y de divisi&oacute;n funcional en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 answers[45] = choices[45][0];
 units[45] = "4, 7, 8, 9";
 comments[45] = "Id Pregunta: 786. Ley 40/2015";


//  Id pregunta: 455 Año de creación de pregunta: 2016
 questions[46]= "47)  En las Administraciones P&uacute;blicas...";
 choices[46]= new Array();
 choices[46][0] = "Existe un Presupuesto ordinario &uacute;nicamente";
 choices[46][1] = "Existen s&oacute;lo un presupuesto ordinario y un presupuesto extraordinario";
 choices[46][2] = "Existe un &uacute;nico presupuesto ordinario y uno o varios presupuestos extraordinarios";
 choices[46][3] = "Existen varios presupuestos que indistintamente pueden ser considerados ordinarios o extraordinarios";
 answers[46] = choices[46][0];
 units[46] = "10";
 comments[46] = "Id Pregunta: 455. PRESUPUESTOS GENERALES";


//  Id pregunta: 355 Año de creación de pregunta: 2016
 questions[47]= "48)  En el marco de la Uni&oacute;n Europea, los dict&aacute;menes:";
 choices[47]= new Array();
 choices[47][0] = "Son vinculantes solamente.";
 choices[47][1] = "No son vinculantes, ya que su contenido no obliga a aqu&eacute;llos a los que van dirigidos.";
 choices[47][2] = "Son preceptivos y vinculantes.";
 choices[47][3] = "Son preceptivos y no vinculantes.";
 answers[47] = choices[47][1];
 units[47] = "5";
 comments[47] = "Id Pregunta: 355. UNION EUROPEA";


//  Id pregunta: 592 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Cu&aacute;les son objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[48]= new Array();
 choices[48][0] = "Incrementar la productividad y la eficacia del funcionamiento interno de la Administraci&oacute;n";
 choices[48][1] = "Convertir el canal digital en el preferente para la relaci&oacute;n de los ciudadanos y empresas con la Administraci&oacute;n";
 choices[48][2] = "Adoptar una estrategia corporativa de seguridad y usabilidad de los servicios p&uacute;blicos digitales";
 choices[48][3] = "Todos los anteriores";
 answers[48] = choices[48][3];
 units[48] = "19";
 comments[48] = "Id Pregunta: 592. Estrategia TIC";


//  Id pregunta: 266 Año de creación de pregunta: 2016
 questions[49]= "50)  El T&iacute;tulo en el que la Constituci&oacute;n indica cu&aacute;les son las lenguas oficiales del Estado es:";
 choices[49]= new Array();
 choices[49][0] = "El Segundo.";
 choices[49][1] = "El Primero.";
 choices[49][2] = "El Preliminar.";
 choices[49][3] = "El Tercero.";
 answers[49] = choices[49][0];
 units[49] = "1";
 comments[49] = "Id Pregunta: 266. CONSTITUCION1978";


//  Id pregunta: 795 Año de creación de pregunta: 2016
 questions[50]= "51)  Todos los &oacute;rganos de la Administraci&oacute;n General del Estado que no sean &oacute;rgano superior o directivo se encuentran bajo la dependencia o direcci&oacute;n de:";
 choices[50]= new Array();
 choices[50][0] = "un &oacute;rgano superior";
 choices[50][1] = "un &oacute;rgano directivo";
 choices[50][2] = "un &oacute;rgano superior o directivo";
 choices[50][3] = "ninguna es correcta";
 answers[50] = choices[50][2];
 units[50] = "4, 7, 8, 9";
 comments[50] = "Id Pregunta: 795. Ley 40/2015";


//  Id pregunta: 378 Año de creación de pregunta: 2016
 questions[51]= "52)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[51]= new Array();
 choices[51][0] = "Quince miembros.";
 choices[51][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[51][2] = "Los miembros que determine el Consejo.";
 choices[51][3] = "Un Presidente y quince miembros.";
 answers[51] = choices[51][1];
 units[51] = "14";
 comments[51] = "Id Pregunta: 378. UNION EUROPEA";


//  Id pregunta: 833 Año de creación de pregunta: 2016
 questions[52]= "53)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Marque la respuesta correcta.";
 choices[52]= new Array();
 choices[52][0] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo.";
 choices[52][1] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo.";
 choices[52][2] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter potestativo.";
 choices[52][3] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter oneroso.";
 answers[52] = choices[52][0];
 units[52] = "4, 7, 8, 9";
 comments[52] = "Id Pregunta: 833. Ley 40/2015";


//  Id pregunta: 8 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes NO es una funci&oacute;n de la Secretar&iacute;a General de Administraci&oacute;n Digital?";
 choices[53]= new Array();
 choices[53][0] = "Establecer los mecanismos que aseguren un adecuado mantenimiento del censo de activos TIC.";
 choices[53][1] = "El estudio y la implementaci&oacute;n de modelos para incentivar la compartici&oacute;n y reutilizaci&oacute;n de las infraestructuras y aplicaciones sectoriales, y promover el desarrollo de aplicaciones bajo dicho modelo.";
 choices[53][2] = "La supervisi&oacute;n y coordinaci&oacute;n del registro de convenios del sector p&uacute;blico estatal, de acuerdo con la informaci&oacute;n que deber&aacute;n suministrar los diferentes departamentos ministeriales y dem&aacute;s organismos p&uacute;blicos suscriptores de los mismos.";
 choices[53][3] = "El desarrollo, impulso e implantaci&oacute;n de sistemas tecnol&oacute;gicos de apoyo para la gesti&oacute;n de recursos humanos, incluidos los sistemas del Registro Central de Personal.";
 answers[53] = choices[53][2];
 units[53] = "26";
 comments[53] = "Id Pregunta: 8. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 95 Año de creación de pregunta: 2016
 questions[54]= "55)  Bajo el paradigma de la Programaci&oacute;n Orientada a Objetos, indique cu&aacute;l de las siguientes proposiciones es falsa:";
 choices[54]= new Array();
 choices[54][0] = "Los objetos se generan a partir de la instanciaci&oacute;n de una clase.";
 choices[54][1] = "El polimorfismo es la propiedad por la que es posible enviar mensajes sint&aacute;cticamente iguales a objetos de tipos distintos.";
 choices[54][2] = "Una clase abstracta puede ser extendida mediante el mecanismo de herencia.";
 choices[54][3] = "La implementaci&oacute;n de una interfaz no se considera polimorfismo.";
 answers[54] = choices[54][3];
 units[54] = "89";
 comments[54] = "Id Pregunta: 95. AGE A1 2015";


//  Id pregunta: 839 Año de creación de pregunta: 2016
 questions[55]= "56)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La formalizaci&oacute;n de las encomiendas de gesti&oacute;n se ajustar&aacute; a las siguientes reglas:";
 choices[55]= new Array();
 choices[55][0] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos administrativos o Entidades de Derecho P&uacute;blico pertenecientes a la misma Administraci&oacute;n deber&aacute; formalizarse en los t&eacute;rminos que establezca su normativa propia y, en su defecto, por acuerdo expreso de los &oacute;rganos o Entidades de Derecho P&uacute;blico intervinientes. En todo caso, el instrumento de formalizaci&oacute;n de la encomienda de gesti&oacute;n y su resoluci&oacute;n deber&aacute; ser publicada, para su eficacia, en el Bolet&iacute;n Oficial del Estado, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante.";
 choices[55][1] = "Cada Administraci&oacute;n podr&aacute; regular los requisitos necesarios para la validez de tales acuerdos que incluir&aacute;n, al menos, expresa menci&oacute;n de la actividad o actividades a las que afecten, el plazo de vigencia y la naturaleza y alcance de la gesti&oacute;n encomendada.";
 choices[55][2] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos y Entidades de Derecho P&uacute;blico de distintas Administraciones se formalizar&aacute; mediante firma del correspondiente convenio entre ellas, que deber&aacute; ser publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante, salvo en el supuesto de la gesti&oacute;n ordinaria de los servicios de las Comunidades Aut&oacute;nomas por las Diputaciones Provinciales o en su caso Cabildos o Consejos insulares, que se regir&aacute; por la legislaci&oacute;n de R&eacute;gimen Local.";
 choices[55][3] = "Todas son correctas.";
 answers[55] = choices[55][3];
 units[55] = "4, 7, 8, 9";
 comments[55] = "Id Pregunta: 839. Ley 40/2015";


//  Id pregunta: 685 Año de creación de pregunta: 2016
 questions[56]= "57)  Se&ntilde;ale el &aacute;mbito de aplicaci&oacute;n del Reglamento (UE) 910/2014";
 choices[56]= new Array();
 choices[56][0] = "A los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros y a los prestadores de servicios de confianza establecidos en la Uni&oacute;n";
 choices[56][1] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros";
 choices[56][2] = "A los prestadores de servicios de certificaci&oacute;n de la Uni&oacute;n cuyos Gobiernos acepten formalmente el Reglamento";
 choices[56][3] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica de los Estados miembros, independientemente de que hayan sido notificados";
 answers[56] = choices[56][0];
 units[56] = "77";
 comments[56] = "Id Pregunta: 685. Art&iacute;culo 2 del Reglamento 910/2014";


//  Id pregunta: 302 Año de creación de pregunta: 2016
 questions[57]= "58)  El Presidente del Tribunal de Cuentas es elegido para un per&iacute;odo de:";
 choices[57]= new Array();
 choices[57][0] = "Cinco a&ntilde;os.";
 choices[57][1] = "Cuatro a&ntilde;os.";
 choices[57][2] = "Tres a&ntilde;os.";
 choices[57][3] = "Seis meses.";
 answers[57] = choices[57][2];
 units[57] = "5";
 comments[57] = "Id Pregunta: 302. UNION EUROPEA";


//  Id pregunta: 384 Año de creación de pregunta: 2016
 questions[58]= "59)  De conformidad con lo establecido en la Org&aacute;nica 3/2007 para la igualdad efectiva entre mujeres y hombres, los &oacute;rganos de contrataci&oacute;n podr&aacute;n establecer en los pliegos de cl&aacute;usulas administrativas particulares la preferencia, en igualdad de condiciones jur&iacute;dicas y econ&oacute;micas, en la adjudicaci&oacute;n de los contratos de las proposiciones presentadas por aquellas empresas que:";
 choices[58]= new Array();
 choices[58][0] = "Sean dirigidas por mujeres";
 choices[58][1] = "Cuenten con un colectivo paritario de trabajadores y trabajadoras";
 choices[58][2] = "Incluyan en su proposici&oacute;n para ejecutar el contrato medidas para promover la igualdad efectiva entre mujeres y hombres";
 choices[58][3] = "Fomenten el acceso de las mujeres a puestos directivos.";
 answers[58] = choices[58][2];
 units[58] = "14";
 comments[58] = "Id Pregunta: 384. POLITICAS DE IGUALDAD";


//  Id pregunta: 102 Año de creación de pregunta: 2016
 questions[59]= "60)  Entre las caracter&iacute;sticas de las Bases de Datos NoSQL se encuentran:";
 choices[59]= new Array();
 choices[59][0] = "Pueden manejar enormes cantidades de datos estructurados";
 choices[59][1] = "Existe un control estricto de las transacciones (propiedades ACID - Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[59][2] = "Se basan en sistemas distribuidos";
 choices[59][3] = "Se basan en el modelo de datos relacional";
 answers[59] = choices[59][2];
 units[59] = "73";
 comments[59] = "Id Pregunta: 102. ";


//  Id pregunta: 129 Año de creación de pregunta: 2016
 questions[60]= "61)  Seg&uacute;n la ley 19/2013 de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno:";
 choices[60]= new Array();
 choices[60][0] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, pero no sus medios y tiempo previsto para su consecuci&oacute;n";
 choices[60][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Consejo de Transparencia la evaluaci&oacute;n del cumplimiento de los planes y programas publicados";
 choices[60][2] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, medios y tiempo previsto para su consecuci&oacute;n";
 choices[60][3] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Parlamento la evaluaci&oacute;n del cumplimiento de los planes y programas anuales y plurianuales y la elaboraci&oacute;n de un informe anual";
 answers[60] = choices[60][2];
 units[60] = "22";
 comments[60] = "Id Pregunta: 129. ";


//  Id pregunta: 426 Año de creación de pregunta: 2016
 questions[61]= "62)  La aprobaci&oacute;n de convocatorias de pruebas selectivas para el acceso al empleo p&uacute;blico deber&aacute; acompa&ntilde;arse de:";
 choices[61]= new Array();
 choices[61][0] = "Un plan de igualdad.";
 choices[61][1] = "Un informe de impacto de g&eacute;nero.";
 choices[61][2] = "Un programa de igualdad.";
 choices[61][3] = "Todas son correctas.";
 answers[61] = choices[61][1];
 units[61] = "14";
 comments[61] = "Id Pregunta: 426. POLITICAS DE IGUALDAD";


//  Id pregunta: 246 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[62]= new Array();
 choices[62][0] = "Dos Cap&iacute;tulos.";
 choices[62][1] = "Tres Cap&iacute;tulos.";
 choices[62][2] = "Un Cap&iacute;tulo.";
 choices[62][3] = "Cuatro Cap&iacute;tulos.";
 answers[62] = choices[62][1];
 units[62] = "1";
 comments[62] = "Id Pregunta: 246. CONSTITUCION1978";


//  Id pregunta: 118 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;C&oacute;mo se concretan anualmente los objetivos de la Estrategia Espa&ntilde;ola de Activaci&oacute;n para el Empleo?";
 choices[63]= new Array();
 choices[63][0] = "Mediante &Oacute;rdenes Ministeriales del Ministerio de Empleo y Seguridad Social";
 choices[63][1] = "Mediante Reales Decretos del Consejo de Ministros";
 choices[63][2] = "Mediante los Planes Anuales de Pol&iacute;tica de Empleo";
 choices[63][3] = "Mediante dictamen del Consejo General del Sistema Nacional de Empleo";
 answers[63] = choices[63][2];
 units[63] = "15";
 comments[63] = "Id Pregunta: 118. ";


//  Id pregunta: 126 Año de creación de pregunta: 2016
 questions[64]= "65)  Se&ntilde;ale la respuesta FALSA respecto a la solicitud de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/2013";
 choices[64]= new Array();
 choices[64][0] = "Transcurrido el plazo m&aacute;ximo para resolver sin que se haya dictado y notificado resoluci&oacute;n expresa se entender&aacute; que la solicitud ha sido desestimada.";
 choices[64][1] = "Las resoluciones dictadas en materia de acceso a la informaci&oacute;n p&uacute;blica son recurribles directamente ante la Jurisdicci&oacute;n Contencioso-administrativa, sin perjuicio de la posibilidad de interposici&oacute;n de la reclamaci&oacute;n potestativa prevista en el art&iacute;culo 24.";
 choices[64][2] = "El incumplimiento reiterado de la obligaci&oacute;n de resolver en plazo tendr&aacute; la consideraci&oacute;n de infracci&oacute;n grave a los efectos de la aplicaci&oacute;n a sus responsables del r&eacute;gimen disciplinario previsto en la correspondiente normativa reguladora.";
 choices[64][3] = "La resoluci&oacute;n en la que se conceda o deniegue el acceso a deber&aacute; notificarse al solicitante y a los terceros afectados que as&iacute; lo hayan solicitado en el plazo m&aacute;ximo de 15 d&iacute;as desde la recepci&oacute;n de la solicitud por el &oacute;rgano competente para resolver.";
 answers[64] = choices[64][3];
 units[64] = "22";
 comments[64] = "Id Pregunta: 126. ";


//  Id pregunta: 325 Año de creación de pregunta: 2016
 questions[65]= "66)  Indique el n&uacute;mero m&iacute;nimo de Diputados necesario para constituir un Grupo Pol&iacute;tico en el Parlamento Europeo:";
 choices[65]= new Array();
 choices[65][0] = "Veinticinco.";
 choices[65][1] = "Veintiuno.";
 choices[65][2] = "Dieciocho.";
 choices[65][3] = "Diecinueve.";
 answers[65] = choices[65][0];
 units[65] = "5";
 comments[65] = "Id Pregunta: 325. UNION EUROPEA";


//  Id pregunta: 759 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Cu&aacute;l de las siguientes no es una prioridad propuesta por la Estrategia Europa 2020?";
 choices[66]= new Array();
 choices[66][0] = "Crecimiento sostenible";
 choices[66][1] = "Crecimiento inteligente";
 choices[66][2] = "Crecimiento digital";
 choices[66][3] = "Crecimiento integrador";
 answers[66] = choices[66][2];
 units[66] = "19";
 comments[66] = "Id Pregunta: 759. Europa 2020";


//  Id pregunta: 400 Año de creación de pregunta: 2016
 questions[67]= "68)  Corresponde probar la ausencia de discriminaci&oacute;n en las medidas adoptadas y su proporcionalidad, a:";
 choices[67]= new Array();
 choices[67][0] = "A la persona demandante.";
 choices[67][1] = "A la persona demandada.";
 choices[67][2] = "Al &oacute;rgano judicial.";
 choices[67][3] = "Al &oacute;rgano administrativo.";
 answers[67] = choices[67][1];
 units[67] = "14";
 comments[67] = "Id Pregunta: 400. POLITICAS DE IGUALDAD";


//  Id pregunta: 644 Año de creación de pregunta: 2016
 questions[68]= "69)  En Itil V3 la Gesti&oacute;n de la Cartera de Servicios pertenece a la fase de ciclo de vida:";
 choices[68]= new Array();
 choices[68][0] = "Dise&ntilde;o del servicio.";
 choices[68][1] = "Transici&oacute;n del servicio.";
 choices[68][2] = "Estrategia del servicio.";
 choices[68][3] = "Operaci&oacute;n del servicio.";
 answers[68] = choices[68][2];
 units[68] = "101";
 comments[68] = "Id Pregunta: 644. Junta de Extremadura A1 2015";


//  Id pregunta: 536 Año de creación de pregunta: 2016
 questions[69]= "70)  Las Administraciones P&uacute;blicas podr&aacute;n habilitar:";
 choices[69]= new Array();
 choices[69][0] = "con car&aacute;cter general a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[69][1] = "con car&aacute;cter general o espec&iacute;fico a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[69][2] = "con car&aacute;cter general o espec&iacute;fico a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[69][3] = "con car&aacute;cter general a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 answers[69] = choices[69][2];
 units[69] = "7";
 comments[69] = "Id Pregunta: 536. LEY 39/2015";


//  Id pregunta: 684 Año de creación de pregunta: 2016
 questions[70]= "71)  Indique cu&aacute;l es la Directiva europea que queda derogada por el Reglamento (UE) 910/2014";
 choices[70]= new Array();
 choices[70][0] = "Directiva 95/46/CE";
 choices[70][1] = "Directiva 1999/93/CE";
 choices[70][2] = "Directiva 2000/31/CE";
 choices[70][3] = "Directiva 2003/98/CE";
 answers[70] = choices[70][1];
 units[70] = "77";
 comments[70] = "Id Pregunta: 684. Art&iacute;culo 50 del Reglamento 910/2014";


//  Id pregunta: 804 Año de creación de pregunta: 2016
 questions[71]= "72)  Los Secretarios generales t&eacute;cnicos:";
 choices[71]= new Array();
 choices[71][0] = "se encuentran bajo la inmediata dependencia del Subsecretario";
 choices[71][1] = "tendr&aacute;n las competencias sobre servicios comunes que les atribuya el Real Decreto de estructura del Departamento";
 choices[71][2] = "tendr&aacute;n las competencias relativas a producci&oacute;n normativa, asistencia jur&iacute;dica y publicaciones";
 choices[71][3] = "todas son correctas";
 answers[71] = choices[71][3];
 units[71] = "4, 7, 8, 9";
 comments[71] = "Id Pregunta: 804. Ley 40/2015";


//  Id pregunta: 272 Año de creación de pregunta: 2016
 questions[72]= "73)  Respecto a SonarQube, se&ntilde;ale la FALSA";
 choices[72]= new Array();
 choices[72][0] = "Sirve para evaluar aspectos como la complejidad ciclom&aacute;tica del c&oacute;digo.";
 choices[72][1] = "Anteriormente se denominaba Sonar.";
 choices[72][2] = "Permite disponer de una matriz de dependencia entre objetos.";
 choices[72][3] = "Integra herramientas de medici&oacute;n de la calidad de c&oacute;digo como CPD, findbugs, PMD, checkstyle.";
 answers[72] = choices[72][2];
 units[72] = "92";
 comments[72] = "Id Pregunta: 272. INTEGRACION CONTINUA";


//  Id pregunta: 570 Año de creación de pregunta: 2016
 questions[73]= "74)  El sector Turismo en Espa&ntilde;a, representa:";
 choices[73]= new Array();
 choices[73][0] = "Alrededor de un 26% del PIB";
 choices[73][1] = "Alrededor de un 11% del PIB";
 choices[73][2] = "Alrededor de un 34% del PIB";
 choices[73][3] = "Alrededor de un 7% del PIB";
 answers[73] = choices[73][1];
 units[73] = "12";
 comments[73] = "Id Pregunta: 570. Modelo econ&oacute;mico";


//  Id pregunta: 761 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;En cu&aacute;ntos pilares se fundamenta la Estrategia del Mercado &Uacute;nico Digital?";
 choices[74]= new Array();
 choices[74][0] = "3 pilares";
 choices[74][1] = "4 pilares";
 choices[74][2] = "5 pilares";
 choices[74][3] = "7 pilares";
 answers[74] = choices[74][0];
 units[74] = "17";
 comments[74] = "Id Pregunta: 761. Mercado &Uacute;nico Digital";


