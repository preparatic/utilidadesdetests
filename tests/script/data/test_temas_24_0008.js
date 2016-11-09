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

//  Id pregunta: 44 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes datos no es necesario comunicar a la Agencia de Protecci&oacute;n de Datos para regular un fichero de titularidad privada?:";
 choices[0]= new Array();
 choices[0][0] = "Cesiones de datos de car&aacute;cter personal que se prev&eacute; realizar";
 choices[0][1] = "Sistema operativo y gestor de bases de datos de soporte";
 choices[0][2] = "Tipo de datos de car&aacute;cter personal que contiene";
 choices[0][3] = "Medidas de seguridad";
 answers[0] = choices[0][1];
 units[0] = "29";
 comments[0] = "Id Pregunta: 44. ";


//  Id pregunta: 109 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  Si la transmisi&oacute;n de datos de car. personal por una red tiene que cifrar los datos o utilizar  mecanismos para garantizar que dicha informaci&oacute;n no sea inteligible ni manipulable por terceros, estamos aplicando medidas de tipo:";
 choices[1]= new Array();
 choices[1][0] = "B&aacute;sico";
 choices[1][1] = "Medio";
 choices[1][2] = "Alto";
 choices[1][3] = "Ninguna de las anteriores";
 answers[1] = choices[1][2];
 units[1] = "29";
 comments[1] = "Id Pregunta: 109. ";


//  Id pregunta: 113 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  De acuerdo con la Ley de Protecci&oacute;n de Datos, el Registro General de Protecci&oacute;n de Datos es un &oacute;rgano integrado en la Agencia de Protecci&oacute;n de Datos y ser&aacute;n objeto de inscripci&oacute;n en &eacute;l:";
 choices[2]= new Array();
 choices[2][0] = "Los ficheros de los que sean titulares las Administraciones P&uacute;blicas";
 choices[2][1] = "Los ficheros de titularidad privada";
 choices[2][2] = "Los datos relativos a los ficheros que sean necesarios para el ejercicio de los derechos de informaci&oacute;n, acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n";
 choices[2][3] = "Todas las afirmaciones son correctas";
 answers[2] = choices[2][3];
 units[2] = "29";
 comments[2] = "Id Pregunta: 113. ";


//  Id pregunta: 369 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  Los ficheros automatizados cuyo objeto sea el almacenamiento de los datos contenidos en los informes personales de calificaci&oacute;n del personal militar profesional , seg&uacute;n la LOPD:";
 choices[3]= new Array();
 choices[3][0] = "No caen dentro del &aacute;mbito de aplicaci&oacute;n de la misma";
 choices[3][1] = "Caen dentro del &aacute;mbito de aplicaci&oacute;n de la misma";
 choices[3][2] = "Caen dentro del &aacute;mbito de aplicaci&oacute;n de la misma, pero no les ser&aacute; de aplicaci&oacute;n el r&eacute;gimen de protecci&oacute;n de datos";
 choices[3][3] = "Se regir&aacute;n por sus disposiciones espec&iacute;ficas";
 answers[3] = choices[3][3];
 units[3] = "29";
 comments[3] = "Id Pregunta: 369. ";


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


//  Id pregunta: 435 AÃ±o de creación de pregunta: 2009-01-01
 questions[5]= "6)  Seg&uacute;n la Ley org&aacute;nica 15/1999:";
 choices[5]= new Array();
 choices[5][0] = "existen derechos de cancelaci&oacute;n, rectificaci&oacute;n, acceso y oposici&oacute;n, sobre los que se podr&aacute; exigir contraprestaci&oacute;n en los casos que proceda";
 choices[5][1] = "los ficheros creados por las Fuerzas y Cuerpos de Seguridad que contengan datos de car&aacute;cter personal que, por haber sido recogidos para fines administrativos, deban ser objeto de registro permanente, estar&aacute;n sujetos al regimen general de la ley";
 choices[5][2] = "la Agencia de Protecci&oacute;n de Datos es un ente de derecho p&uacute;blico con personalidad jur&iacute;dica propia y que depende de las Administraciones P&uacute;blicas en el ejercicio de sus funciones";
 choices[5][3] = "Todas las respuestas anteriores son correctas";
 answers[5] = choices[5][1];
 units[5] = "29";
 comments[5] = "Id Pregunta: 435. ";


//  Id pregunta: 459 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Si un grupo de personas constituyen una asociaci&oacute;n (por ejemplo de antiguos alumnos, o de padres de alumnos) y recaban informaci&oacute;n de car&aacute;cter personal de sus miembros, almacen&aacute;ndola en un fichero:";
 choices[6]= new Array();
 choices[6][0] = "S&oacute;lo deber&aacute;n registrar el fichero en la Agencia de Protecci&oacute;n de Datos si el contenido de &eacute;stos es lo suficientemente sensible";
 choices[6][1] = "Seg&uacute;n la finalidad para la que se use y seg&uacute;n el tama&ntilde;o de dicho fichero podr&aacute;n estar exentos de de registrar el fichero";
 choices[6][2] = "Tienen que registrar el fichero en la Agencia de Protecci&oacute;n de Datos";
 choices[6][3] = "Deber&iacute;an registrar el fichero, pero dado que la Agencia de Protecci&oacute;n de Datos s&oacute;lo se ocupa en la pr&aacute;ctica de grandes casos de fraude  pueden pasar sin ser sancionados sin ning&uacute;n tipo de problema";
 answers[6] = choices[6][2];
 units[6] = "29";
 comments[6] = "Id Pregunta: 459. ";


//  Id pregunta: 480 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;De qu&eacute; depende el canon de compensacion equitativa por copia privada establecido con la orden PRE/1743/2008 de 18 de junio?";
 choices[7]= new Array();
 choices[7][0] = "Del tipo de equipo (anal&oacute;gico o digital)";
 choices[7][1] = "Del destino del soporte";
 choices[7][2] = "De la categoria del equipo";
 choices[7][3] = "Todas son ciertas";
 answers[7] = choices[7][3];
 units[7] = "36,37";
 comments[7] = "Id Pregunta: 480. ";


//  Id pregunta: 605 AÃ±o de creación de pregunta: 2006-01-01
 questions[8]= "9)  El art. 11 del Estatuto establece la estructura org&aacute;nica de la Agencia enumerando los siguientes &oacute;rganos:";
 choices[8]= new Array();
 choices[8][0] = "El Director de la Agencia de Protecci&oacute;n de Datos,el Consejo Consultivo, el Registro General de Protecci&oacute;n de Datos, la Inspecci&oacute;n de Datos y la Secretar&iacute;a General.";
 choices[8][1] = "El Director de la Agencia de Protecci&oacute;n de Datos,el Comite Consultivo, el Registro General de Protecci&oacute;n de Datos, la Inspecci&oacute;n de Datos y la Subsecretar&iacute;a General.";
 choices[8][2] = "El Director de la Agencia de Protecci&oacute;n de Datos,el Comite Consultivo, el Registro General de Protecci&oacute;n de Datos, la Inspecci&oacute;n de Datos y la Secretar&iacute;a General.";
 choices[8][3] = "El Director de la Agencia de Protecci&oacute;n de Datos,el Consejo Consultivo, el Registro General de Protecci&oacute;n de Datos, la Inspecci&oacute;n de Datos y la Subsecretar&iacute;a General.";
 answers[8] = choices[8][0];
 units[8] = "29";
 comments[8] = "Id Pregunta: 605. ";


//  Id pregunta: 669 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  El &quot;Real Decreto por el que se regulan los registros y las notificaciones telem&aacute;ticas, as&iacute; como la utilizaci&oacute;n de medios telem&aacute;ticos para la sustituci&oacute;n de la aportaci&oacute;n de certificados por los ciudadanos&quot; es el:";
 choices[9]= new Array();
 choices[9][0] = "RD 263/1996";
 choices[9][1] = "RD 263/2003";
 choices[9][2] = "RD 209/2003";
 choices[9][3] = "RD 209/1996";
 answers[9] = choices[9][2];
 units[9] = "30";
 comments[9] = "Id Pregunta: 669. NULL";


//  Id pregunta: 674 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  La firma electr&oacute;nica se regula seg&uacute;n la base normativa descrita en:";
 choices[10]= new Array();
 choices[10][0] = "Real Decreto Ley Firma Electr&oacute;nica 213/2001";
 choices[10][1] = "Ley Firma Electr&oacute;nica 59/2003";
 choices[10][2] = "Real Decreto Ley Firma Electr&oacute;nica 15/1999";
 choices[10][3] = "Real Decreto Ley Firma Electr&oacute;nica 30/1998";
 answers[10] = choices[10][1];
 units[10] = "30";
 comments[10] = "Id Pregunta: 674. Ley 59/2003";


//  Id pregunta: 686 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  El R.D 209/2003:";
 choices[11]= new Array();
 choices[11][0] = "Sustituye completamente al R.D. 263/1996";
 choices[11][1] = "Ampl&iacute;a al R.D. 263/1996";
 choices[11][2] = "Complementa, pero no se superpone, al R.D. 263/1996";
 choices[11][3] = "Es completamente independiente del R.D. 263/1996, no tienen nada que ver";
 answers[11] = choices[11][1];
 units[11] = "30";
 comments[11] = "Id Pregunta: 686. ";


//  Id pregunta: 735 AÃ±o de creación de pregunta: 2004-01-01
 questions[12]= "13)  De acuerdo con lo establecido en la Ley 34/2002, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio Electr&oacute;nico, m&aacute;s conocida como LSSI, los contratos celebrados por v&iacute;a electr&oacute;nica:";
 choices[12]= new Array();
 choices[12][0] = "Producir&aacute;n todos los efectos previstos por el ordenamiento jur&iacute;dico siempre que act&uacute;e un tercero como testigo";
 choices[12][1] = "Producir&aacute;n todos los efectos previstos por el ordenamiento jur&iacute;dico siempre que a posteriori se ratifiquen ante notario o registrador";
 choices[12][2] = "Producir&aacute;n todos los efectos previstos por el ordenamiento jur&iacute;dico siempre que en los mismos intervenga un abogado o procurador";
 choices[12][3] = "Producir&aacute;n todos los efectos previstos por el ordenamiento jur&iacute;dico siempre que haya consentimiento y el resto de requisitos necesarios para su validez como cualquier otro contrato";
 answers[12] = choices[12][3];
 units[12] = "30";
 comments[12] = "Id Pregunta: 735. Examen TIC MAP B 2004. Ley 34/2002, art&iacute;culo 23";


//  Id pregunta: 738 AÃ±o de creación de pregunta: 2004-01-01
 questions[13]= "14)  El Servicio de Notificaciones Telem&aacute;ticas Seguras, que se basa en la Direcci&oacute;n Electr&oacute;nica &Uacute;nica (actualmente llamada Direcci&oacute;n Electr&oacute;nica Habilitada (DEH)), es un servicio ofrecido por la Administraci&oacute;n del Estado prestado en colaboraci&oacute;n con:";
 choices[13]= new Array();
 choices[13][0] = "Telef&oacute;nica de Espa&ntilde;a, S.A.";
 choices[13][1] = "La entidad p&uacute;blica empresarial Red.es";
 choices[13][2] = "Sociedad Estatal de Correos y Tel&eacute;grafos";
 choices[13][3] = "Microsoft";
 answers[13] = choices[13][2];
 units[13] = "30";
 comments[13] = "Id Pregunta: 738. Examen TIC MAP B 2004";


//  Id pregunta: 782 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  La Ley 34/2002 de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico establece:";
 choices[14]= new Array();
 choices[14][0] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico que previamente no hubieran sido solicitadas o expresamente autorizadas por los destinatarios de las mismas";
 choices[14][1] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico";
 choices[14][2] = "Las comunicaciones comerciales realizadas por correo electr&oacute;nico incluir&aacute;n al comienzo del mensaje la palabra &quot;publicidad&quot;";
 choices[14][3] = "Las respuestas 'a' y 'c' son correctas";
 answers[14] = choices[14][3];
 units[14] = "30";
 comments[14] = "Id Pregunta: 782. Ley 34/2002, art&iacute;culo 20 y 21";


//  Id pregunta: 1870 AÃ±o de creación de pregunta: 2006-01-01
 questions[15]= "16)  La firma electr&oacute;nica avanzada es aquella que cumple que:";
 choices[15]= new Array();
 choices[15][0] = "Est&aacute; vinculada al firmante de manera &uacute;nica, permite su identificaci&oacute;n y est&aacute; creada por un dispositivo de control de firma seguro.";
 choices[15][1] = "Est&aacute; vinculada al firmante de manera &uacute;nica, permite su identificaci&oacute;n, est&aacute; creada por un dispositivo de control de firma seguro, tiene control exclusivo del firmante al crearla y no est&aacute; vinculada a los datos.";
 choices[15][2] = "Est&aacute; vinculada al firmante de manera &uacute;nica, permite su identificaci&oacute;n, tiene control exclusivo del firmante al crearla y est&aacute; vinculada a los datos.";
 choices[15][3] = "Est&aacute; vinculada al firmante de manera &uacute;nica, permite su identificaci&oacute;n, tiene control exclusivo de firmante al crearla y est&aacute; basada en un certificado reconocido.";
 answers[15] = choices[15][2];
 units[15] = "30";
 comments[15] = "Id Pregunta: 1870. Ley 59/2003, art&iacute;culo 3";


//  Id pregunta: 1906 AÃ±o de creación de pregunta: 2006-01-01
 questions[16]= "17)  La European Computer Driving Licence (ECDL)";
 choices[16]= new Array();
 choices[16][0] = "Es el sistema com&uacute;n europeo para el control de licencias de conducir, dentro del programa eEurope2005";
 choices[16][1] = "Es la acreditaci&oacute;n europea de uso de ordenadores recomendada por la Comisi&oacute;n Europea";
 choices[16][2] = "Es una acreditaci&oacute;n europea de uso de ordenadores gestionada por la Asociaci&oacute;n Europea de Fabricantes de Ordenadores (ECMA)";
 choices[16][3] = "Ninguna de las anteriores";
 answers[16] = choices[16][1];
 units[16] = "30";
 comments[16] = "Id Pregunta: 1906. ";


//  Id pregunta: 1932 AÃ±o de creación de pregunta: 2006-01-01
 questions[17]= "18)  Seg&uacute;n la Ley 59/2003 de firma electr&oacute;nica, los certificados electr&oacute;nicos reconocidos";
 choices[17]= new Array();
 choices[17][0] = "Tienen una validez de tres a&ntilde;os como m&aacute;ximo";
 choices[17][1] = "Pueden identificar a las personas f&iacute;sicas para las que se expidan certificados a trav&eacute;s de un seud&oacute;nimo";
 choices[17][2] = "Dejan de tener validez cuando expiran, y/o son revocados, por resoluci&oacute;n judicial o por fallecimiento del firmante";
 choices[17][3] = "Confieren, por si mismos, a la firma electr&oacute;nica avanzada la misma eficacia jur&iacute;dica que a la manuscrita";
 answers[17] = choices[17][1];
 units[17] = "30";
 comments[17] = "Id Pregunta: 1932. Ley 59/2003, art&iacute;culo 11";


//  Id pregunta: 1964 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  &iquest;Cu&aacute;l de estos objetivos no es un objetivo de la iniciativa eEurope?:";
 choices[18]= new Array();
 choices[18][0] = "Conseguir que todos los europeos entren en la era digital y est&eacute;n conectados a la red";
 choices[18][1] = "Crear en Europa una cultura y un esp&iacute;ritu empresarial abiertos a la cultura digital";
 choices[18][2] = "Conseguir que todas las redes administrativas de los distintos estados miembros est&eacute;n interconectadas a trav&eacute;s de TESTA II";
 choices[18][3] = "Garantizar que el proceso no se traduzca en exclusi&oacute;n social";
 answers[18] = choices[18][2];
 units[18] = "30";
 comments[18] = "Id Pregunta: 1964. ";


//  Id pregunta: 2862 AÃ±o de creación de pregunta: 2006-01-01
 questions[19]= "20)  &iquest;Qu&eacute; pretende la CE con los principios ONP?";
 choices[19]= new Array();
 choices[19][0] = " la definici&oacute;n de un conjunto de medidas reguladoras para asegurar la mayor competencia y trasparencia posible en el mercado de los servicios de telecomunicaciones.";
 choices[19][1] = " la definici&oacute;n de un conjunto de medidas  t&eacute;cnicas para asegurar la mayor competencia y trasparencia posible en el mercado de los servicios de telecomunicaciones.";
 choices[19][2] = " la definici&oacute;n de un conjunto de medidas econ&oacute;micas para asegurar la mayor competencia y trasparencia posible en el mercado de los servicios de telecomunicaciones.";
 choices[19][3] = "Todas ellas";
 answers[19] = choices[19][3];
 units[19] = "30";
 comments[19] = "Id Pregunta: 2862. ";


//  Id pregunta: 4250 AÃ±o de creación de pregunta: 2007-01-01
 questions[20]= "21)  Respecto a la iniciativa i2010 de la Comisi&oacute;n Europea:";
 choices[20]= new Array();
 choices[20][0] = "Con el lanzamiento de i2010 la Comisi&oacute;n Europea abandona totalmente los objetivos fijados en la estrategia de Lisboa.";
 choices[20][1] = "Aunque hubiera sido deseable, i2010 no establece como objetivo prioritario el refuerzo de la inversi&oacute;n en I+D";
 choices[20][2] = "La iniciativa i2010 se lanza a finales del a&ntilde;o 2006, tras comprobar el fracaso de los planes de acci&oacute;n eEurope";
 choices[20][3] = "Su primer objetivo es la creaci&oacute;n de &ldquo;la construcci&oacute;n de un Espacio &uacute;nico Europeo de la Informaci&oacute;n que promueva un mercado interior abierto y competitivo para la sociedad de la informaci&oacute;n y los medios de comunicaci&oacute;n&rdquo;.";
 answers[20] = choices[20][3];
 units[20] = "30";
 comments[20] = "Id Pregunta: 4250. ";


//  Id pregunta: 4264 AÃ±o de creación de pregunta: 2007-01-01
 questions[21]= "22)  Respecto del Marco Europeo de Interoperabilidad (MEI) v2, es falsa la afirmacion:";
 choices[21]= new Array();
 choices[21][0] = "Las dimensiones de interoperabilidad son tres: t&eacute;cnica, sem&aacute;ntica y organizativa";
 choices[21][1] = "Define como principios  entre otros la subsidiariedad, la transparencia y el uso de est&aacute;ndares abiertos.";
 choices[21][2] = "Se elabora dentro del programa IDABC";
 choices[21][3] = "Define un total de doce principios";
 answers[21] = choices[21][0];
 units[21] = "30";
 comments[21] = "Id Pregunta: 4264. NULL";


//  Id pregunta: 4342 AÃ±o de creación de pregunta: 2007-01-01
 questions[22]= "23)  Seg&uacute;n la Ley 59/2003 de Firma Electr&oacute;nica, un dispositivo seguro de creaci&oacute;n de firma electr&oacute;nica es aquel que al menos ofrece una serie de garant&iacute;as. &iquest;Cu&aacute;l de las siguientes no es una garant&iacute;a exigida para dichos dispositivos?";
 choices[22]= new Array();
 choices[22][0] = "Que los datos utilizados para la generaci&oacute;n de firma pueden producirse s&oacute;lo una vez y asegura razonablemente su secreto.";
 choices[22][1] = "Que existe una seguridad razonable de que los datos utilizados para la generaci&oacute;n de firma no pueden ser derivados de los de verificaci&oacute;n de firma o de la propia firma.";
 choices[22][2] = "Que los datos de creaci&oacute;n de firma pueden ser protegidos de forma fiable por el firmante contra su utilizaci&oacute;n por terceros";
 choices[22][3] = "Que el dispositivo de creaci&oacute;n de firma est&eacute; certificado al menos con el nivel de seguridad EAL4+.";
 answers[22] = choices[22][3];
 units[22] = "30";
 comments[22] = "Id Pregunta: 4342. Ley 59/2003, art&iacute;culo 24";


//  Id pregunta: 4460 AÃ±o de creación de pregunta: 2007-01-01
 questions[23]= "24)  Si modificamos un programa protegido por licencia GPL el resultado debemos protegerlo con una licencia";
 choices[23]= new Array();
 choices[23][0] = "EULA";
 choices[23][1] = "BSD";
 choices[23][2] = "GPL";
 choices[23][3] = "No podemos ponerlo licencia alguna";
 answers[23] = choices[23][2];
 units[23] = "36";
 comments[23] = "Id Pregunta: 4460. ";


//  Id pregunta: 4575 AÃ±o de creación de pregunta: 2007-01-01
 questions[24]= "25)  Indica cual de las siguientes definiciones de firma electr&oacute;nica es Ia que aparece en Ia Ley 59/2003, de 19 de diciembre:";
 choices[24]= new Array();
 choices[24][0] = "es el resultado de obtener por medio de mecanismos o dispositivos un patr&oacute;n que se asocie biun&iacute;voca mente a un individuo y a su voluntad de firmar.";
 choices[24][1] = "es el conjunto de datos en forma electr&oacute;nica, consignados junto a otros o asociados con ellos, que pueden ser utilizados como medio de identificaci&oacute;n del firmante.";
 choices[24][2] = "es el documento electr&oacute;nico que acredita electr&oacute;nicamente Ia identidad personal de su titular y permite la firma de documentos.";
 choices[24][3] = "es el conjunto de datos &uacute;nicos, como c&oacute;digos o claves criptogr&aacute;ficas privadas, que el firmante utiliza para firmar documentos.";
 answers[24] = choices[24][1];
 units[24] = "30";
 comments[24] = "Id Pregunta: 4575. Ley 59/2003, art&iacute;culo 3";


//  Id pregunta: 4621 AÃ±o de creación de pregunta: 2007-01-01
 questions[25]= "26)  &iquest;Como se denomina la licencia bajo la que se distribuye la mayor&iacute;a de los programas del proyecto GNU?:";
 choices[25]= new Array();
 choices[25][0] = "FDL";
 choices[25][1] = "GSL";
 choices[25][2] = "GPL";
 choices[25][3] = "GLL";
 answers[25] = choices[25][2];
 units[25] = "36";
 comments[25] = "Id Pregunta: 4621. ";


//  Id pregunta: 4812 AÃ±o de creación de pregunta: 2007-01-01
 questions[26]= "27)  &iquest;En cu&aacute;l de los siguientes aspectos NO resulta de aplicaci&oacute;n la Directiva 2000/31/CE, de 8 de junio de 2000,relativa a determinados aspectos jur&iacute;dicos de los servicios de la sociedad de la informaci&oacute;n, en particular elcomercio electr&oacute;nico en el mercado interior?";
 choices[26]= new Array();
 choices[26][0] = "Las actividades de juegos de azar que impliquen apuestas de valor monetario, incluidas loter&iacute;as y apuestas";
 choices[26][1] = "Las comunicaciones comerciales";
 choices[26][2] = "Los acuerdos extrajudiciales para la prestaci&oacute;n de servicios";
 choices[26][3] = "Los contratos por v&iacute;a electr&oacute;nica";
 answers[26] = choices[26][0];
 units[26] = "30";
 comments[26] = "Id Pregunta: 4812. Directiva 2000/31/CE, art&iacute;culo 1.5.d)";


//  Id pregunta: 4867 AÃ±o de creación de pregunta: 2007-01-01
 questions[27]= "28)  El marco legislativo espa&ntilde;ol de la Propiedad Intelectual e Industrial configurado mediante el Real DecretoLegislativo 1/1996, de 12 de abril, por el que se aprueba el Texto Refundido de la Ley de Propiedad Intelectual, enlo referente al software, establece sobre la creaci&oacute;n de programas de ordenador por trabajadores asalariados en elejercicio de sus funciones en la empresa que";
 choices[27]= new Array();
 choices[27][0] = "No son titulares de los derechos de explotaci&oacute;n del programa, ni del c&oacute;digo fuente, ni del objeto, salvo pactoen contrario con la empresa";
 choices[27][1] = "Son titulares siempre de los derechos de explotaci&oacute;n del c&oacute;digo fuente del programa, no as&iacute; del c&oacute;digoobjeto, que necesariamente se habr&aacute; probado y validado en los sistemas inform&aacute;ticos de la empresa";
 choices[27][2] = "Siempre son titulares tanto del c&oacute;digo fuente como del objeto, as&iacute; como de toda la documentaci&oacute;npreparatoria que hayan generado durante su trabajo de creaci&oacute;n; el empresario tendr&aacute; derecho en todo casoa disponer de una copia de todo el software para su explotaci&oacute;n comercial";
 choices[27][3] = "El &uacute;nico y exclusivo titular de los derechos de explotaci&oacute;n del programa de ordenador creado es elempresario, en toda circunstancia legal";
 answers[27] = choices[27][0];
 units[27] = "36";
 comments[27] = "Id Pregunta: 4867. ";


//  Id pregunta: 5029 AÃ±o de creación de pregunta: 2003-01-01
 questions[28]= "29)  Elija la opci&oacute;n correcta con respecto al funcionamiento de los registros telem&aacute;ticos en d&iacute;as inh&aacute;biles, seg&uacute;n el RD209/2003, de 21 de febrero:";
 choices[28]= new Array();
 choices[28][0] = "Los registros telem&aacute;ticos no estar&aacute;n en funcionamiento los d&iacute;as inh&aacute;biles";
 choices[28][1] = "La entrada de las solicitudes, escritos y comunicaciones recibidas en un d&iacute;a inh&aacute;bil para el registrotelem&aacute;tico se entender&aacute; efectuada en la primera hora del primer d&iacute;a h&aacute;bil siguiente";
 choices[28][2] = "La entrada de las solicitudes, escritos y comunicaciones recibidas en un d&iacute;a inh&aacute;bil para el registrotelem&aacute;tico se entender&aacute; efectuada en la &uacute;ltima hora del &uacute;ltimo d&iacute;a h&aacute;bil anterior";
 choices[28][3] = "No se permitir&aacute; la entrada de solicitudes, escritos y comunicaciones en un d&iacute;a inh&aacute;bil, y por consiguiente laentrada de las solicitudes, escritos y comunicaciones recibidas en un d&iacute;a inh&aacute;bil para el registro telem&aacute;ticono se entender&aacute; efectuada";
 answers[28] = choices[28][1];
 units[28] = "30";
 comments[28] = "Id Pregunta: 5029. Examen TIC A 2007";


//  Id pregunta: 5095 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  Seg&uacute;n la Directiva comunitaria 1999/93/CE de firma electr&oacute;nica, NO es un requisito de los proveedores de servicios de certificaci&oacute;n que expiden certificados reconocidos:";
 choices[29]= new Array();
 choices[29][0] = "Comprobar debidamente, de conformidad con el Derecho nacional, la identidad y, si procede, cualesquiera atributos espec&iacute;ficos de la persona a la que se expide un certificado reconocido";
 choices[29][1] = "Utilizar sistemas y productos fiables que est&eacute;n protegidos contra toda alteraci&oacute;n y que garanticen la seguridad t&eacute;cnica y criptogr&aacute;fica de los procedimientos con que trabajan";
 choices[29][2] = "Almacenar o copiar los datos de creaci&oacute;n de firma de la persona a la que el proveedor de servicios de certificaci&oacute;n ha prestado servicios de gesti&oacute;n de claves";
 choices[29][3] = "Disponer de recursos econ&oacute;micos suficientes para operar de conformidad con lo dispuesto en la presente Directiva, en particular para afrontar el riesgo de responsabilidad por da&ntilde;os y perjuicios, por ejemplo contratando un seguro apropiado";
 answers[29] = choices[29][2];
 units[29] = "30";
 comments[29] = "Id Pregunta: 5095. Directiva 1999/93/CE, Anexo II";


//  Id pregunta: 5131 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  &iquest;Cu&aacute;l de las siguiente afirmaciones es cierta respecto a la firma electr&oacute;nica?";
 choices[30]= new Array();
 choices[30][0] = "La firma de documento se encuentra siempre dentro del documento original.";
 choices[30][1] = "En los certificados de persona jur&iacute;dica la identificaci&oacute;n de la persona solicitante se incluye en el certificado electr&oacute;nico.";
 choices[30][2] = "La extinci&oacute;n de un certificado s&oacute;lo puede ser por resoluci&oacute;n judicial que lo ordene.";
 choices[30][3] = "La extinci&oacute;n o suspensi&oacute;n de la vigencia de un certificado electr&oacute;nico tendr&aacute; efectos retroactivos.";
 answers[30] = choices[30][1];
 units[30] = "30";
 comments[30] = "Id Pregunta: 5131. Examen TIC A Castilla La Mancha 2007 (Ley 59/2003, art&iacute;culo 7.2)";


//  Id pregunta: 5270 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  El RD 1720/2007 desarrolla ..";
 choices[31]= new Array();
 choices[31][0] = "la ley 11/2007";
 choices[31][1] = "la ley 56/2007";
 choices[31][2] = "ley org&aacute;nica 15/1999";
 choices[31][3] = "ley org&aacute;nica 5/1992";
 answers[31] = choices[31][2];
 units[31] = "29";
 comments[31] = "Id Pregunta: 5270. ";


//  Id pregunta: 5412 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  Los ficheros automatizados con datos de car&aacute;cter personal de nivel alto deber&aacute;n contener:";
 choices[32]= new Array();
 choices[32][0] = "Medidas de seguridad de nivel alto y medio";
 choices[32][1] = "Medidas de seguridad de nivel alto";
 choices[32][2] = "Medidas de seguridad de nivel b&aacute;sico, medio y alto";
 choices[32][3] = "Ninguna de las anteriores es correcta";
 answers[32] = choices[32][2];
 units[32] = "29";
 comments[32] = "Id Pregunta: 5412. Castilla y Le&oacute;n";


//  Id pregunta: 5658 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  Seg&uacute;n el RD 1720/2007, cual de los siguientes NO es un requisito del documento de seguridad, para el nivel b&aacute;sico:";
 choices[33]= new Array();
 choices[33][0] = "Ambito de aplicaci&oacute;n del documento con especificacion detallada de los recursos protegidos.";
 choices[33][1] = "Los procedimientos de realizacion de copias de repaldo y de recuperacion de los datos en los ficheros o tratamientos automatizados.";
 choices[33][2] = "La identificacion del responsable o responsables de seguridad.";
 choices[33][3] = "Todos los son.";
 answers[33] = choices[33][2];
 units[33] = "29";
 comments[33] = "Id Pregunta: 5658. ";


//  Id pregunta: 5775 AÃ±o de creación de pregunta: 2009-01-01
 questions[34]= "35)  Seg&uacute;n el RD 1720/2007 cuando la obligaci&oacute;n de notificar afecte a ficheros sujetos a la competencia de la autoridad de control de una Comunidad Aut&oacute;noma que haya creado su propio registro de ficheros, la notificaci&oacute;n se realizar&aacute; a:";
 choices[34]= new Array();
 choices[34][0] = "la autoridad auton&oacute;mica competente, que dar&aacute; traslado de la inscripci&oacute;n  al Registro General de Protecci&oacute;n de  Datos";
 choices[34][1] = "la autoridad auton&oacute;mica competente y al Registro General de Protecci&oacute;n de  Datos";
 choices[34][2] = "al Registro General de Protecci&oacute;n de  Datos, que dar&aacute; traslado de la inscripci&oacute;n a la la autoridad auton&oacute;mica competente";
 choices[34][3] = "la autoridad auton&oacute;mica competente o al Registro General de Protecci&oacute;n de  Datos. El receptor de la notificaci&oacute;n dar&aacute; traslado de la inscripci&oacute;n al otro ente";
 answers[34] = choices[34][0];
 units[34] = "29";
 comments[34] = "Id Pregunta: 5775. MAP 2008 A2";


//  Id pregunta: 5794 AÃ±o de creación de pregunta: 2009-01-01
 questions[35]= "36)  Las Administraciones P&uacute;blicas pueden utilizar varios medios para su identificaci&oacute;n electr&oacute;nica. Indique cual NO es uno de ellos.";
 choices[35]= new Array();
 choices[35][0] = "Sistemas de firma electr&oacute;nica, como el sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica.";
 choices[35][1] = "Firma electr&oacute;nica del personal al servicio de las Administraciones P&uacute;blicas.";
 choices[35][2] = "Intercambio electr&oacute;nico de datos en entornos cerrados de comunicaci&oacute;n, conforme a lo espec&iacute;ficamente acordado en las partes.";
 choices[35][3] = "La identidad electr&oacute;nica reconocida del &oacute;rgano administrativo.";
 answers[35] = choices[35][3];
 units[35] = "30";
 comments[35] = "Id Pregunta: 5794. MAP 2008 A2";


//  Id pregunta: 5957 AÃ±o de creación de pregunta: 2009-01-01
 questions[36]= "37)  &iquest;Cu&aacute;l no es una caracter&iacute;stica de la Red SARA?";
 choices[36]= new Array();
 choices[36][0] = "Fiabilidad, porque dispone de un Centro de Soporte 24 x 7";
 choices[36][1] = "Seguridad, fundamentalmente por el establecimiento de VPNs";
 choices[36][2] = "Calidad de Servicio (QoS) (porque se basa en tecnolog&iacute;a VPLS)";
 choices[36][3] = "Flexibilidad, proporcionada por una pol&iacute;tica de gesti&oacute;n descentralizada";
 answers[36] = choices[36][3];
 units[36] = "44";
 comments[36] = "Id Pregunta: 5957. NULL";


//  Id pregunta: 5971 AÃ±o de creación de pregunta: 2010-01-01
 questions[37]= "38)  Cu&aacute;l de las siguientes opciones NO es un principio de la protecci&oacute;n de datos seg&uacute;n la Ley Org&aacute;nica 15/1999:";
 choices[37]= new Array();
 choices[37][0] = "Datos relativos a las personas";
 choices[37][1] = "Calidad de los datos";
 choices[37][2] = "Consentimiento del afectado";
 choices[37][3] = "Seguridad de los datos";
 answers[37] = choices[37][0];
 units[37] = "29";
 comments[37] = "Id Pregunta: 5971. Castilla La Mancha 2009";


//  Id pregunta: 6001 AÃ±o de creación de pregunta: 2010-01-01
 questions[38]= "39)  Los Estados Miembros est&aacute;n obligados a garantizar, a trav&eacute;s de ventanillas &uacute;nicas, a los prestadores de servicios la posibilidad de llevar a cabo las declaraciones, notificaciones o solicitudes necesarias para la autorizaci&oacute;n por parte de las autoridades competentes. &iquest;En que Directiva se regula esta obligaci&oacute;n?";
 choices[38]= new Array();
 choices[38][0] = "En la Directiva 2000/31/CE, relativa a determinados aspectos jur&iacute;dicos del comercio electr&oacute;nico en el mercado interior.";
 choices[38][1] = "No existe esta obligaci&oacute;n por parte de los Estados Miembros, y por tanto ninguna Directiva la regula.";
 choices[38][2] = "En la Directiva 2006/31/CE, relativa a la armonizaci&oacute;n de las actividades de servicios con contenido econ&oacute;mico en el mercado interior.";
 choices[38][3] = "En la Directiva 2006/123/CE, relativa a los servicios en el mercado interior.";
 answers[38] = choices[38][3];
 units[38] = "30";
 comments[38] = "Id Pregunta: 6001. TIC A 2009";


//  Id pregunta: 6351 AÃ±o de creación de pregunta: 2010-01-01
 questions[39]= "40)  La ley sobre reutilizaci&oacute;n de la informaci&oacute;n  del sector p&uacute;blico es la ley";
 choices[39]= new Array();
 choices[39][0] = "Ley 37/2007";
 choices[39][1] = "Ley 32/2005";
 choices[39][2] = "Ley 25/2007";
 choices[39][3] = "Ninguna de las anteriores";
 answers[39] = choices[39][0];
 units[39] = "30";
 comments[39] = "Id Pregunta: 6351. Ley 37/2007";


//  Id pregunta: 6368 AÃ±o de creación de pregunta: 2010-01-01
 questions[40]= "41)  &iquest;Cu&aacute;l de los siguientes sistemas NO tiene la consideraci&oacute;n de entorno inseguro, de acuerdo con el Esquema Nacional de Seguridad?";
 choices[40]= new Array();
 choices[40][0] = "Equipos port&aacute;tiles";
 choices[40][1] = "Comunicaciones sobre redes inal&aacute;mbricas, incluso cuando la comunicaci&oacute;n se realice con cifrado fuerte";
 choices[40][2] = "Asistentes personales (PDA)";
 choices[40][3] = "Dispositivos perif&eacute;ricos";
 answers[40] = choices[40][1];
 units[40] = "43";
 comments[40] = "Id Pregunta: 6368. Art&iacute;culo 21 ENS";


//  Id pregunta: 6389 AÃ±o de creación de pregunta: 2010-01-01
 questions[41]= "42)  &iquest;C&uacute;al de los siguientes no es un contenido m&iacute;nimo de una sede electr&oacute;nica?";
 choices[41]= new Array();
 choices[41][0] = "Informaci&oacute;n relacionada con la protecci&oacute;n de datos de car&aacute;cter personal, incluyendo un enlace con la sede electr&oacute;nica de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 choices[41][1] = "Identificaci&oacute;n de la sede, as&iacute; como del &oacute;rgano u &oacute;rganos titulares y de los responsables de la gesti&oacute;n y de los servicios puestos a disposici&oacute;n en la misma y, en su caso, de las subsedes de ella derivadas.";
 choices[41][2] = "Informaci&oacute;n necesaria para la correcta utilizaci&oacute;n de la sede incluyendo el mapa de la sede electr&oacute;nica o informaci&oacute;n equivalente, con especificaci&oacute;n de la estructura de navegaci&oacute;n y las distintas secciones disponibles, as&iacute; como la relacionada con propiedad intelectual.";
 choices[41][3] = "Todos son contenidos m&iacute;nimos de una sede electr&oacute;nica.";
 answers[41] = choices[41][3];
 units[41] = "43";
 comments[41] = "Id Pregunta: 6389. Art&iacute;culo 6 RD 1671/2009";


//  Id pregunta: 6404 AÃ±o de creación de pregunta: 2010-01-01
 questions[42]= "43)  Cuando un trabajador asalariado cree un programa de ordenador, en el ejercicio de las funciones que le han sido confiadas o siguiendo las instrucciones de su empresario, &iquest;a qui&eacute;n corresponde la titularidad de los derechos de explotaci&oacute;n?";
 choices[42]= new Array();
 choices[42][0] = "Al empresario, salvo pacto en contrario";
 choices[42][1] = "Al trabajador, en todo caso";
 choices[42][2] = "Al empresario, en todo caso";
 choices[42][3] = "Al trabajador, salvo pacto en contrario";
 answers[42] = choices[42][0];
 units[42] = "36";
 comments[42] = "Id Pregunta: 6404. Art&iacute;culo 97 RDL 1/1996";


//  Id pregunta: 6459 AÃ±o de creación de pregunta: 2010-01-01
 questions[43]= "44)  El per&iacute;odo de validez de los certificados reconocidos no podr&aacute; ser superior a:";
 choices[43]= new Array();
 choices[43][0] = "Tres a&ntilde;os";
 choices[43][1] = "Diez a&ntilde;os";
 choices[43][2] = "Dos a&ntilde;os";
 choices[43][3] = "Cinco a&ntilde;os";
 answers[43] = choices[43][3];
 units[43] = "30";
 comments[43] = "Id Pregunta: 6459. Castilla La Mancha 2009 (Ley 9/2014, Disposici&oacute;n final sexta)";


//  Id pregunta: 6585 AÃ±o de creación de pregunta: 2010-01-01
 questions[44]= "45)  Un fichero de car&aacute;cter personal de entidades financieras para las finalidades relacionadas con la prestaci&oacute;n de servicios financieros de acuerdo a la regulaci&oacute;n de protecci&oacute;n de datos vigente, de las siguientes medidas de seguridad cu&aacute;l no es obligatorio que cumpla?";
 choices[44]= new Array();
 choices[44][0] = "Debe existir un responsable de seguridad encargado de coordinar y controlar las medidas del documento";
 choices[44][1] = "Debe llevarse a cabo al menos una copia de respaldo semanal";
 choices[44][2] = "Debe existir un registro de accesos: usuario, hora, fichero, tipo de acceso, autorizado o denegado";
 choices[44][3] = "Todas las respuestas anteriores son correctas";
 answers[44] = choices[44][2];
 units[44] = "29";
 comments[44] = "Id Pregunta: 6585. NULL";


//  Id pregunta: 6588 AÃ±o de creación de pregunta: 2010-01-01
 questions[45]= "46)  En el caso de ficheros no automatizados a los que aplican medidas de seguridad de nivel alto, entre otras debe implementarse:";
 choices[45]= new Array();
 choices[45][0] = "Control de accesos autorizados";
 choices[45][1] = "Identificaci&oacute;n de accesos para documentos accesibles por m&uacute;ltiples usuarios";
 choices[45][2] = "No es necesaria identificaci&oacute;n de acceso para ficheros accesibles por una &uacute;nica persona";
 choices[45][3] = "Todas las respuestas anteriores son correctas";
 answers[45] = choices[45][3];
 units[45] = "29";
 comments[45] = "Id Pregunta: 6588. NULL";


//  Id pregunta: 6589 AÃ±o de creación de pregunta: 2010-01-01
 questions[46]= "47)  Para ficheros a los que aplican las medidas de seguridad de nivel medio debe llevarse a cabo una auditor&iacute;a, al menos";
 choices[46]= new Array();
 choices[46][0] = "Debe ser externa";
 choices[46][1] = "Bianual";
 choices[46][2] = "Bienal";
 choices[46][3] = "Todas las respuestas anteriores son incorrectas";
 answers[46] = choices[46][2];
 units[46] = "29";
 comments[46] = "Id Pregunta: 6589. NULL";


//  Id pregunta: 7147 AÃ±o de creación de pregunta: 2010-01-01
 questions[47]= "48)  El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica, &oacute;rgano t&eacute;cnico de cooperaci&oacute;n de la Administraci&oacute;n General del Estado, de las Administraciones de las Comunidades Aut&oacute;nomas y de las entidades que integran la Administraci&oacute;n Local en materia de Administraci&oacute;n Electr&oacute;nica, depende de:";
 choices[47]= new Array();
 choices[47][0] = "La Conferencia Sectorial de Administraci&oacute;n P&uacute;blica";
 choices[47][1] = "El Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[47][2] = "La Direcci&oacute;n General para el Impulso de la Administraci&oacute;n Electr&oacute;nica";
 choices[47][3] = "Del Vicepresidente Tercero del Gobierno y Ministro de Cooperaci&oacute;n Territorial";
 answers[47] = choices[47][0];
 units[47] = "44";
 comments[47] = "Id Pregunta: 7147. Examen TIC B 2009";


//  Id pregunta: 8403 AÃ±o de creación de pregunta: 2011-01-01
 questions[48]= "49)  Indique cu&aacute;l NO es una de las condiciones que debe cumplir un documento electr&oacute;nico para ser considerado copia electr&oacute;nica aut&eacute;ntica:";
 choices[48]= new Array();
 choices[48][0] = "Que sea autorizada mediante firma electr&oacute;nica.";
 choices[48][1] = "Que incorpore un sello automatizado que refleje el car&aacute;cter de copia en la impresi&oacute;n del documento. ";
 choices[48][2] = "Que la copia sea obtenida conforme a las normas de competencia y procedimiento. ";
 choices[48][3] = "Que el documento electr&oacute;nico original se encuentre en poder de la Administraci&oacute;n.";
 answers[48] = choices[48][1];
 units[48] = "43";
 comments[48] = "Id Pregunta: 8403. Examen TIC A2 2010";


//  Id pregunta: 8429 AÃ±o de creación de pregunta: 2011-01-01
 questions[49]= "50)  &iquest;Cu&aacute;l de los siguientes ejes de actuaci&oacute;n no forma parte de los 5 ejes de actuaci&oacute;n definidos en el Plan Avanza 2?";
 choices[49]= new Array();
 choices[49][0] = "Eje Administraci&oacute;n Electr&oacute;nica";
 choices[49][1] = "Eje Capacitaci&oacute;n";
 choices[49][2] = "Eje Infraestructuras";
 choices[49][3] = "Eje Desarrollo del sector TIC";
 answers[49] = choices[49][0];
 units[49] = "30";
 comments[49] = "Id Pregunta: 8429. ";


//  Id pregunta: 8430 AÃ±o de creación de pregunta: 2011-01-01
 questions[50]= "51)  Seg&uacute;n la nueva estrategia para el crecimiento y el empleo Europa 2020, &iquest;Cu&aacute;les de las siguientes prioridades no se encuentra entre las 3 fundamentales definidas en la misma?";
 choices[50]= new Array();
 choices[50][0] = "Crecimiento tecnol&oacute;gico";
 choices[50][1] = "Crecimiento inteligente";
 choices[50][2] = "Crecimiento sostenible";
 choices[50][3] = "Crecimiento integrador";
 answers[50] = choices[50][0];
 units[50] = "30";
 comments[50] = "Id Pregunta: 8430. ";


//  Id pregunta: 8437 AÃ±o de creación de pregunta: 2011-01-01
 questions[51]= "52)  Seg&uacute;n el RD 1671/2009, &iquest;Cu&aacute;l de las siguientes afirmaciones referentes a la identificaci&oacute;n y autenticaci&oacute;n en el acceso de los ciudadanos a la AGE y sus OOAA dependientes, no es verdadera?";
 choices[51]= new Array();
 choices[51][0] = "Las personas f&iacute;sicas podr&aacute;n utilizar para relacionarse electr&oacute;nicamente con la Administraci&oacute;n General del Estado y los organismos p&uacute;blicos vinculados o dependientes, los sistemas de firma electr&oacute;nica incorporados al Documento Nacional de Identidad.";
 choices[51][1] = "Las personas jur&iacute;dicas y entidades sin personalidad jur&iacute;dica podr&aacute;n utilizar sistemas de firma electr&oacute;nica de persona jur&iacute;dica o de entidades sin personalidad jur&iacute;dica para todos aquellos procedimientos y actuaciones de la Administraci&oacute;n General del Estado para los que se admitan.";
 choices[51][2] = "En caso de no admisi&oacute;n, la sede electr&oacute;nica correspondiente no deber&aacute; facilitar sistemas alternativos que permitan a las personas jur&iacute;dicas y a las entidades sin personalidad jur&iacute;dica el ejercicio de su derecho a relacionarse electr&oacute;nicamente con la Administraci&oacute;n General del Estado.";
 choices[51][3] = "La admisi&oacute;n de otros sistemas de firma deber&aacute;n aprobarse mediante orden ministerial, o resoluci&oacute;n del titular en el caso de los organismos p&uacute;blicos, previo informe del Consejo Superior de Administraci&oacute;n Electr&oacute;nica.";
 answers[51] = choices[51][2];
 units[51] = "43";
 comments[51] = "Id Pregunta: 8437. ";


//  Id pregunta: 8439 AÃ±o de creación de pregunta: 2011-01-01
 questions[52]= "53)  &iquest;Bajo cu&aacute;les de las siguientes circunstancias no pueden ser rechazados los documentos electr&oacute;nicos presentados en un registro electr&oacute;nico seg&uacute;n el RD 1671/2009?";
 choices[52]= new Array();
 choices[52][0] = "Que se trate de documentos dirigidos a &oacute;rganos u organismos fuera del &aacute;mbito de la Administraci&oacute;n General del Estado.";
 choices[52][1] = "Que se trate de documentos que de acuerdo con lo establecido en los art&iacute;culos 14 y 32 deban presentarse en registros electr&oacute;nicos espec&iacute;ficos.";
 choices[52][2] = "Que contengan c&oacute;digo malicioso o dispositivo susceptible de afectar a la integridad o seguridad del sistema.";
 choices[52][3] = "En el caso de utilizaci&oacute;n de documentos normalizados.";
 answers[52] = choices[52][3];
 units[52] = "43";
 comments[52] = "Id Pregunta: 8439. ";


//  Id pregunta: 8735 AÃ±o de creación de pregunta: 2011-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l de los siguientes ep&iacute;grafes corresponde a una de las tres prioridades de la Comisi&oacute;n Europea a la hora de establecer la estrategia i2010?";
 choices[53]= new Array();
 choices[53][0] = "La consecuci&oacute;n de una sociedad de la informaci&oacute;n y los medios de comunicaci&oacute;n basada en la inclusi&oacute;n.";
 choices[53][1] = "La consecuci&oacute;n de un espacio mundial &uacute;nico de la informaci&oacute;n.";
 choices[53][2] = "El impulso de la innovaci&oacute;n y de la inversi&oacute;n en el campo de la investigaci&oacute;n y tecnolog&iacute;a sanitarias.";
 choices[53][3] = "La consecuci&oacute;n de unos medios de comunicaci&oacute;n europeos a la vanguardia tecnol&oacute;gica";
 answers[53] = choices[53][0];
 units[53] = "30";
 comments[53] = "Id Pregunta: 8735. Examen TIC A2 2010 interna. M&aacute;s info: http://europa.eu/legislation_summaries/information_society/strategies/c11328_es.htm";


//  Id pregunta: 8743 AÃ±o de creación de pregunta: 2011-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes es una funci&oacute;n de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos, seg&uacute;n lo establecido en la LOPD?";
 choices[54]= new Array();
 choices[54][0] = "Redactar una memoria anual y remitirla al Ministerio del Interior";
 choices[54][1] = "Proporcionar aplicaciones inform&aacute;ticas para la gesti&oacute;n de datos de car&aacute;cter personal.";
 choices[54][2] = "Investigar posibles incumplimientos de la LOPD e informar a la autoridad con potestad sancionadora, seg&uacute;n el caso";
 choices[54][3] = "Redactar una memoria anual y remitirla al Ministerio de Justicia";
 answers[54] = choices[54][3];
 units[54] = "29";
 comments[54] = "Id Pregunta: 8743. Examen TIC A2 2010 interna";


//  Id pregunta: 8780 AÃ±o de creación de pregunta: 2011-01-01
 questions[55]= "56)  Seg&uacute;n la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal, se considera cesi&oacute;n o comunicaci&oacute;n de datos:";
 choices[55]= new Array();
 choices[55][0] = "Toda manifestaci&oacute;n de voluntad, libre inequ&iacute;voca, espec&iacute;fica e informada, mediante la cual el interesado comunique datos.";
 choices[55][1] = "Toda revelaci&oacute;n de datos realizada a una persona distinta del interesado.";
 choices[55][2] = "Toda revelaci&oacute;n electr&oacute;nica de datos realizada a otra persona distinta de la que los posee.";
 choices[55][3] = "Toda transferencia electr&oacute;nica de datos realizada a una persona distinta del interesado.";
 answers[55] = choices[55][1];
 units[55] = "29";
 comments[55] = "Id Pregunta: 8780. Examen UPM A2 2011";


//  Id pregunta: 8932 AÃ±o de creación de pregunta: 2011-01-01
 questions[56]= "57)  &iquest;Cu&aacute;l de las siguientes leyes aplica en las relaciones de los ciudadanos con el Ministerio de Justicia?";
 choices[56]= new Array();
 choices[56][0] = "Ley 18/2011";
 choices[56][1] = "Ley 11/2007";
 choices[56][2] = "Las dos anteriores";
 choices[56][3] = "Ninguna de las anteriores";
 answers[56] = choices[56][1];
 units[56] = "43";
 comments[56] = "Id Pregunta: 8932. ";


//  Id pregunta: 8935 AÃ±o de creación de pregunta: 2011-01-01
 questions[57]= "58)  De acuerdo con la ley 18/2011, &iquest;cu&aacute;l no es un derecho de los profesionales de la justicia en relaci&oacute;n con la utilizaci&oacute;n de los medios electr&oacute;nicos en la actividad judicial?";
 choices[57]= new Array();
 choices[57][0] = "A obtener copias electr&oacute;nicas de los documentos que formen parte de procedimientos en los que sean representantes procesales de la parte personada";
 choices[57][1] = "A utilizar los sistemas de firma electr&oacute;nica del Documento Nacional de Identidad o cualquier otro reconocido, siempre que dicho sistema le identifique de forma un&iacute;voca como profesional";
 choices[57][2] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que acrediten inter&eacute;s leg&iacute;timo";
 choices[57][3] = "Todos los anteriores lo son";
 answers[57] = choices[57][0];
 units[57] = "43";
 comments[57] = "Id Pregunta: 8935. ";


//  Id pregunta: 8943 AÃ±o de creación de pregunta: 2011-01-01
 questions[58]= "59)  El Comit&eacute; t&eacute;cnico estatal de la Administraci&oacute;n judicial electr&oacute;nica no estar&aacute; integrado por:";
 choices[58]= new Array();
 choices[58][0] = "Una representaci&oacute;n del Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[58][1] = "Los representantes que al efecto podr&aacute; designar la Fiscal&iacute;a General del Estado";
 choices[58][2] = "Una representaci&oacute;n del Ministerio de Justicia";
 choices[58][3] = "Estar&aacute; integrado por todos los anteriores";
 answers[58] = choices[58][0];
 units[58] = "43";
 comments[58] = "Id Pregunta: 8943. ";


//  Id pregunta: 9036 AÃ±o de creación de pregunta: 2011-01-01
 questions[59]= "60)  Seg&uacute;n el  RD 1671/2009, &iquest;cu&aacute;ndo se pueden destruir documentos en soporte papel?";
 choices[59]= new Array();
 choices[59][0] = "Siempre";
 choices[59][1] = "Nunca";
 choices[59][2] = "Cuando no se trate de documentos  con valor hist&oacute;rico, art&iacute;sticos o con car&aacute;cter relevante";
 choices[59][3] = "Cuando ya exista una copia en formato papel ";
 answers[59] = choices[59][2];
 units[59] = "43";
 comments[59] = "Id Pregunta: 9036. NULL";


//  Id pregunta: 9191 AÃ±o de creación de pregunta: 2013-01-01
 questions[60]= "61)  Indicar el requisito imprescindible para que un programa de ordenador sea protegible.";
 choices[60]= new Array();
 choices[60][0] = "Estar documentado correctamente";
 choices[60][1] = "Estar desarrollado por una persona f&iacute;sica";
 choices[60][2] = "Ser la primera versi&oacute;n de un programa, ya que las sucesivas no est&aacute;n protegidas";
 choices[60][3] = "Ser original";
 answers[60] = choices[60][3];
 units[60] = "36";
 comments[60] = "Id Pregunta: 9191. ";


//  Id pregunta: 9192 AÃ±o de creación de pregunta: 2013-01-01
 questions[61]= "62)  &iquest;C&oacute;mo se realiza la protecci&oacute;n de un programa de ordenador?";
 choices[61]= new Array();
 choices[61][0] = "A la hora de crear el programa, el autor debe decidir qu&eacute; tipo de protecci&oacute;n quiere otorgarle, si a trav&eacute;s de la ley de patentes o a trav&eacute;s de la ley de propiedad intelectual";
 choices[61][1] = "A traves de la ley de patentes";
 choices[61][2] = "Nunca puede realizarse a trav&eacute;s de la ley de patentes";
 choices[61][3] = "Si el programa forma parte de una patente, tambi&eacute;n estar&aacute; protegido por la ley de propiedad intelectual";
 answers[61] = choices[61][3];
 units[61] = "36";
 comments[61] = "Id Pregunta: 9192. ";


//  Id pregunta: 9540 AÃ±o de creación de pregunta: 2013-01-01
 questions[62]= "63)  La publicaci&oacute;n del BOE en su sede electr&oacute;nica:";
 choices[62]= new Array();
 choices[62][0] = "No tiene car&aacute;cter de oficial y aut&eacute;ntica, constituyendo lo publicado una mera manifestaci&oacute;n de servicio p&uacute;blico, ya que lo que tiene valor de oficial y aut&eacute;ntica es su edici&oacute;n impresa.";
 choices[62][1] = "Tendr&aacute; car&aacute;cter de oficial y aut&eacute;ntica, al igual que la publicaci&oacute;n del resto de diarios oficiales de las CC.AA, a partir del 1 de enero de 2013.";
 choices[62][2] = "Tiene car&aacute;cter de oficial y aut&eacute;ntica, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil y en las restantes normas aplicables.";
 choices[62][3] = "Tiene car&aacute;cter de oficial y aut&eacute;ntica desde el d&iacute;a 1 de enero de 2011, excepto el contenido de la Secci&oacute;n de Anuncios, que se rige por su normativa espec&iacute;fica.";
 answers[62] = choices[62][2];
 units[62] = "30";
 comments[62] = "Id Pregunta: 9540. Examen TIC A1 2011 (Ley 11/2007, art&iacute;culo 11.2)";


//  Id pregunta: 9574 AÃ±o de creación de pregunta: 2013-01-01
 questions[63]= "64)  Al hablar de software libre y de su uso en la Administraci&oacute;n se&ntilde;ale la frase correcta:";
 choices[63]= new Array();
 choices[63][0] = "La Ley 11/2007 obliga a las administraciones p&uacute;blicas a poner las aplicaciones de cuyos derechos de propiedad son titulares a disposici&oacute;n de cualquier otra Administraci&oacute;n Auton&oacute;mica.";
 choices[63][1] = "Una licencia de c&oacute;digo de fuente abierta seg&uacute;n la FSF obliga a hacer p&uacute;blicas todas las mejoras, poni&eacute;ndolas a disposici&oacute;n de la comunidad.";
 choices[63][2] = "Una licencia LGPL no restringe la posibilidad de incluir el software protegido por la licencia en productos protegidos por licencias no GPL.";
 choices[63][3] = "El Real Decreto 4/2010 del Esquema Nacional de Interoperabilidad prev&eacute; un cat&aacute;logo &uacute;nicamente de est&aacute;ndares abiertos de uso obligatorio por las administraciones p&uacute;blicas.";
 answers[63] = choices[63][2];
 units[63] = "43, 61, 62";
 comments[63] = "Id Pregunta: 9574. Examen TIC A1 2011";


//  Id pregunta: 9578 AÃ±o de creación de pregunta: 2013-01-01
 questions[64]= "65)  El Comit&eacute; de Estrategia TIC:";
 choices[64]= new Array();
 choices[64][0] = "Es el &oacute;rgano existente en los departamentos ministeriales, en el &aacute;mbito de la Administraci&oacute;n General del Estado, competente en materia de administraci&oacute;n electr&oacute;nica.";
 choices[64][1] = "Es el &oacute;rgano t&eacute;cnico adscrito a la Comisi&oacute;n Europea que canaliza la colaboraci&oacute;n entre la Administraci&oacute;n General del Estado y el resto de pa&iacute;ses de la Uni&oacute;n Europea en materia de administraci&oacute;n electr&oacute;nica.";
 choices[64][2] = "Es el &oacute;rgano colegiado encargado de la definici&oacute;n y supervisi&oacute;n de la aplicaci&oacute;n de la Estrategia TIC de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos.";
 choices[64][3] = "Es el &oacute;rgano t&eacute;cnico adscrito a la Comisi&oacute;n Europea encargado de unificar los criterios en materia de tratamiento y protecci&oacute;n de datos de car&aacute;cter personal en el &aacute;mbito de la Uni&oacute;n Europea";
 answers[64] = choices[64][2];
 units[64] = "43";
 comments[64] = "Id Pregunta: 9578. Examen TIC A1 2011, adaptado a RD 806/2014.";


//  Id pregunta: 9592 AÃ±o de creación de pregunta: 2013-01-01
 questions[65]= "66)  El c&oacute;mputo de plazos, imputables tanto a los interesados como a las Administraciones P&uacute;blicas, seg&uacute;n se establece en el art&iacute;culo 26 de la Ley 11/2007 se fija por:";
 choices[65]= new Array();
 choices[65][0] = "La fecha y hora oficial de la sede electr&oacute;nica de los servicios centrales, que deber&aacute; contar con las medidas de seguridad necesarias para garantizar su integridad y figurar visible";
 choices[65][1] = "La fecha y hora oficial de la sede electr&oacute;nica de acceso, que deber&aacute; contar con las medidas de seguridad necesarias para garantizar su integridad y figurar visible";
 choices[65][2] = "La fecha y hora oficial del Real Instituto y Observatorio de la Armada, que deber&aacute; contar con las medidas de seguridad necesarias para garantizar su integridad y figurar visible.";
 choices[65][3] = "La fecha y hora oficial de la sede electr&oacute;nica del Ministerio de Pol&iacute;tica Territorial y Administraci&oacute;n P&uacute;blica, que deber&aacute; contar con las medidas de seguridad necesarias para garantizar su integridad y figurar visible";
 answers[65] = choices[65][1];
 units[65] = "43";
 comments[65] = "Id Pregunta: 9592. Examen TIC A2 2011 interna";


//  Id pregunta: 9804 AÃ±o de creación de pregunta: 2014-01-01
 questions[66]= "67)  Indique la opci&oacute;n INCORRECTA en relaci&oacute;n con el Esquema Nacional de Seguridad (ENS):";
 choices[66]= new Array();
 choices[66][0] = "Los sistemas de informaci&oacute;n a los que se refiere el ENS ser&aacute;n objeto de una auditor&iacute;a regular ordinaria, al menos cada dos a&ntilde;os, que verifique el cumplimiento de los requerimientos expuestos en el ENS. ";
 choices[66][1] = "Gesti&oacute;n de riesgos, funci&oacute;n diferenciada y reevaluaci&oacute;n peri&oacute;dica son 3 de los principios b&aacute;sicos que deber&aacute;n tenerse en cuenta en las decisiones en materia de seguridad";
 choices[66][2] = "El Instituto Nacional de las Tecnolog&iacute;as de la Informaci&oacute;n (INTECO), en el ejercicio de sus competencias, elaborar&aacute; y difundir&aacute; las correspondientes gu&iacute;as de la seguridad de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones. ";
 choices[66][3] = "Si a los 12 meses de la entrada en vigor del ENS hubiera circunstancias que impidan la plena aplicaci&oacute;n de lo exigido en el mismo, se dispondr&aacute; de un plan de adecuaci&oacute;n que marque los plazos de ejecuci&oacute;n, los cuales, en ning&uacute;n caso, ser&aacute;nsuperiores a 48 meses desde la entrada en vigor. ";
 answers[66] = choices[66][2];
 units[66] = "44";
 comments[66] = "Id Pregunta: 9804. NULL";


//  Id pregunta: 9882 AÃ±o de creación de pregunta: 2014-01-01
 questions[67]= "68)  De acuerdo con el RDL 1/1996 de 12 de abril, por el que se aprueba el Texto Refundido de la Ley de Propiedad Intelectual, el plazo de duraci&oacute;n de los derechos de explotaci&oacute;n de un programa de ordenador por una persona jur&iacute;dica ser&aacute; de";
 choices[67]= new Array();
 choices[67][0] = "30 a&ntilde;os a partir de la divulgaci&oacute;n y 70 desde la fecha de su creaci&oacute;n.";
 choices[67][1] = "70 a&ntilde;os computados a partir del 1 de enero del a&ntilde;o siguiente al de la divulgaci&oacute;n.";
 choices[67][2] = "50 a&ntilde;os computados a partir de su creaci&oacute;n.";
 choices[67][3] = "70 a&ntilde;os computados a partir de la fecha de divulgaci&oacute;n.";
 answers[67] = choices[67][1];
 units[67] = "36";
 comments[67] = "Id Pregunta: 9882. TIC A1, Examen 2013";


//  Id pregunta: 9900 AÃ±o de creación de pregunta: 2014-01-01
 questions[68]= "69)  De acuerdo con la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de losciudadanos a los Servicios P&uacute;blicos, el principio de neutralidad tecnol&oacute;gica y de adaptabilidad al progreso significa que las Administraciones P&uacute;blicas";
 choices[68]= new Array();
 choices[68][0] = "utilizar&aacute;n est&aacute;ndares abiertos o de uso generalizado por los ciudadanos.";
 choices[68][1] = "utilizar&aacute;n procedimientos electr&oacute;nicos para sus tr&aacute;mites.";
 choices[68][2] = "no admitir&aacute;n el uso de esos medios m&aacute;s que de forma gratuita.";
 choices[68][3] = "utilizar&aacute;n medios que permitan la m&aacute;xima difusi&oacute;n sin coste.";
 answers[68] = choices[68][0];
 units[68] = "43";
 comments[68] = "Id Pregunta: 9900. TIC A1, Examen 2013";


//  Id pregunta: 10263 AÃ±o de creación de pregunta: 2014-01-01
 questions[69]= "70)  La inscripci&oacute;n de ficheros de titularidad p&uacute;blica en el Registro General de Protecci&oacute;n de Datos";
 choices[69]= new Array();
 choices[69][0] = "Puede hacerse de oficio por el propio registro, sin perjuicio de la obligaci&oacute;n de notificaci&oacute;n, si previamente se ha publicado en el diario oficial  correspondiente la norma o acuerdo que lo regule";
 choices[69][1] = "Puede hacerse de oficio por el propio registro, no siendo ya necesaria la notificaci&oacute;n, si previamente se ha publicado en el diario oficial  correspondiente la norma o acuerdo que lo regule";
 choices[69][2] = "Puede hacerse de oficio por el propio registro, sin perjuicio de la obligaci&oacute;n de notificaci&oacute;n, desde el momento en que se determina la necesidad de crear el fichero";
 choices[69][3] = "Puede hacerse de oficio por el propio registro, no siendo ya necesaria la notificaci&oacute;n, desde el momento en que se determina la necesidad de crear el fichero";
 answers[69] = choices[69][0];
 units[69] = "29";
 comments[69] = "Id Pregunta: 10263. Art&iacute;culo 63.1 y 63.2 del RD 1720/2007";


//  Id pregunta: 10267 AÃ±o de creación de pregunta: 2014-01-01
 questions[70]= "71)  &iquest;Es posible denegar temporalmente una transfferencia internacional de datos personales previamente autorizada?";
 choices[70]= new Array();
 choices[70][0] = "Puede hacerlo el Director de la AEPD bajo determinadas circunstancias especificadas en la Ley";
 choices[70][1] = "Puede hacerlo el Consejo Consultivo de la AEPD bajo determinadas circunstancias especificadas en la Ley";
 choices[70][2] = "Puede hacerlo la Secretar&iacute;a de la AEPD bajo determinadas circunstancias especificadas en la Ley";
 choices[70][3] = "Una vez autorizada la transferencia s&oacute;lo es posible denegarla por indicaci&oacute;n espec&iacute;fica de la Comisi&oacute;n Europea";
 answers[70] = choices[70][0];
 units[70] = "29";
 comments[70] = "Id Pregunta: 10267. Art&iacute;culo 70.3 del RD 1720/2007";


//  Id pregunta: 10437 AÃ±o de creación de pregunta: 2014-01-01
 questions[71]= "72)  La Ley 23/2006 de 7 de julio modifica el RDL 1/1996 de 12 de abril por el que se aprueba el Texto Refundido de la Ley de Propiedad Intelectual con motivo de ";
 choices[71]= new Array();
 choices[71][0] = "a trasposici&oacute;n de la Directiva 2001/29/CE.";
 choices[71][1] = "la entrada en vigor de la Ley 34/2002, de Servicios de la Sociedad de la Informaci&oacute;n. ";
 choices[71][2] = "la regulaci&oacute;n de un canon digital en los programas de ordenador.";
 choices[71][3] = "el establecimiento de la prohibici&oacute;n de hacer copias privadas.";
 answers[71] = choices[71][0];
 units[71] = "36";
 comments[71] = "Id Pregunta: 10437. Examen TIC A1 2013";


//  Id pregunta: 10572 AÃ±o de creación de pregunta: 2015-01-01
 questions[72]= "73)  El servicio de verificaci&oacute;n y consulta de datos no tiene por objetivo:";
 choices[72]= new Array();
 choices[72][0] = "Dar respuesta al art&iacute;culo 6 de la Ley 11/2007, por el que se reconoce el derecho a no aportar los datos y documentos que ya obren en poder de la Administraci&oacute;n.";
 choices[72][1] = "Simplificar la tramitaci&oacute;n de los procedimientos administrativos.";
 choices[72][2] = "Facilitar al ciudadano la aportaci&oacute;n de los documentos en papel que acrediten su identidad en los procedimientos administrativos.";
 choices[72][3] = "Dar cumplimiento a los derechos recogidos en la Ley 30/1992, de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y Procedimiento Administrativo Com&uacute;n.";
 answers[72] = choices[72][2];
 units[72] = "44";
 comments[72] = "Id Pregunta: 10572. ";


//  Id pregunta: 10673 AÃ±o de creación de pregunta: 2015-01-01
 questions[73]= "74)  La Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas deroga expresamente:";
 choices[73]= new Array();
 choices[73][0] = "La Ley 30/1992, de 26 de noviembre, de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y del Procedimiento Administrativo Com&uacute;n.";
 choices[73][1] = "La Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los Servicios P&uacute;blicos.";
 choices[73][2] = "Ambas";
 choices[73][3] = "Ninguna de las dos Leyes se&ntilde;aladas.";
 answers[73] = choices[73][1];
 units[73] = "30";
 comments[73] = "Id Pregunta: 10673. ";


//  Id pregunta: 10678 AÃ±o de creación de pregunta: 2015-01-01
 questions[74]= "75)  La Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas establece la obligatoriedad de relaci&oacute;n con las AAPP a trav&eacute;s de medios electr&oacute;nicos para:";
 choices[74]= new Array();
 choices[74][0] = "Personas jur&iacute;dicas.";
 choices[74][1] = "Entidades sin personalidad jur&iacute;dica.";
 choices[74][2] = "Notarios y registradores.";
 choices[74][3] = "Todas las anteriores.";
 answers[74] = choices[74][3];
 units[74] = "30";
 comments[74] = "Id Pregunta: 10678. ";


//  Id pregunta: 10679 AÃ±o de creación de pregunta: 2015-01-01
 questions[75]= "76)  Seg&uacute;n la Ley 39/2015 se puede establecer la obligatoriedad a las personas f&iacute;sicas de relacionarse con la Administraci&oacute;n por medios electr&oacute;nicos";
 choices[75]= new Array();
 choices[75][0] = "La Ley establece de forma obligatoria la relaci&oacute;n electr&oacute;nica con personas f&iacute;sicas en todos los casos.";
 choices[75][1] = "La Ley establece de forma obligatoria la relaci&oacute;n electr&oacute;nica con un colectivo de personas f&iacute;sicas, si previamente se establece de forma reglamentaria para dicho colectivo.";
 choices[75][2] = "La Ley establece de forma obligatoria la relaci&oacute;n electr&oacute;nica con un colectivo personas f&iacute;sicas si la administraci&oacute;n justifica la conveniencia y medios t&eacute;cnicos para dicho colectivo.";
 choices[75][3] = "La Ley no establece la obligatoriedad de relaci&oacute;n para las personas f&iacute;sicas en ning&uacute;n caso.";
 answers[75] = choices[75][1];
 units[75] = "30";
 comments[75] = "Id Pregunta: 10679. ";


//  Id pregunta: 10687 AÃ±o de creación de pregunta: 2015-01-01
 questions[76]= "77)  La Ley 39/2015, cita expresamente en su pre&aacute;mbulo:";
 choices[76]= new Array();
 choices[76][0] = "La Comisi&oacute;n para la Reforma de las Administraciones P&uacute;blicas.";
 choices[76][1] = "El programa nacional de reformas de Espa&ntilde;a.";
 choices[76][2] = "Ambas.";
 choices[76][3] = "Ninguna de las anteriores.";
 answers[76] = choices[76][2];
 units[76] = "30";
 comments[76] = "Id Pregunta: 10687. ";


//  Id pregunta: 10690 AÃ±o de creación de pregunta: 2015-01-01
 questions[77]= "78)  &iquest;Qu&eacute; reglamento ha considerado la Ley 39/2015 para el establecimiento los sistemas de identificaci&oacute;n como los de firma previstos en dicha Ley?";
 choices[77]= new Array();
 choices[77][0] = "Reglamento (UE) n.&ordm; 910/2014.";
 choices[77][1] = "Reglamento (UE) n.&ordm; 810/2013.";
 choices[77][2] = "Reglamento (UE) n.&ordm; 527/2013.";
 choices[77][3] = "Reglamento (UE) n.&ordm; 810/2014.";
 answers[77] = choices[77][0];
 units[77] = "30";
 comments[77] = "Id Pregunta: 10690. ";


//  Id pregunta: 10694 AÃ±o de creación de pregunta: 2015-01-01
 questions[78]= "79)  Seg&uacute;n la Ley 39/2015 son interesados:";
 choices[78]= new Array();
 choices[78][0] = "Quienes lo promuevan como titulares de derechos o intereses leg&iacute;timos individuales o colectivos.";
 choices[78][1] = "Los que, sin haber iniciado el procedimiento, tengan derechos que puedan resultar afectados por la decisi&oacute;n que en el mismo se adopte.";
 choices[78][2] = "Aquellos cuyos intereses leg&iacute;timos, individuales o colectivos, puedan resultar afectados por la resoluci&oacute;n y se personen en el procedimiento en tanto no haya reca&iacute;do resoluci&oacute;n definitiva.";
 choices[78][3] = "Todas las anteriores.";
 answers[78] = choices[78][3];
 units[78] = "30";
 comments[78] = "Id Pregunta: 10694. ";


//  Id pregunta: 10695 AÃ±o de creación de pregunta: 2015-01-01
 questions[79]= "80)  La Ley 39/2015 prevee Registros Electr&oacute;nicos de Apoderamientos:";
 choices[79]= new Array();
 choices[79][0] = "Este Registro Electr&oacute;nico ser&aacute; &uacute;nico para todas las Administraciones P&uacute;blicas.";
 choices[79][1] = "Este Registro Electr&oacute;nico ser&aacute; &uacute;nico para toda la Administraci&oacute;n General del Estado.";
 choices[79][2] = "La Ley &uacute;nicamente establece la creaci&oacute;n de dichos Registros.";
 choices[79][3] = "Esta Ley no se&ntilde;ala nada sobre dichos Registros.";
 answers[79] = choices[79][1];
 units[79] = "30";
 comments[79] = "Id Pregunta: 10695. ";


//  Id pregunta: 10696 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  Seg&uacute;n la Ley 39/2015, cual de las siguientes no se establece como informaci&oacute;n necesaria en los asientos que se realicen en los registros electr&oacute;nicos generales y particulares de apoderamientos:";
 choices[80]= new Array();
 choices[80][0] = "Fecha de inscripci&oacute;n.";
 choices[80][1] = "Per&iacute;odo de tiempo por el cual se otorga el poder.";
 choices[80][2] = "Lugar de inscripci&oacute;n.";
 choices[80][3] = "Tipo de poder seg&uacute;n las facultades que otorgue.";
 answers[80] = choices[80][2];
 units[80] = "30";
 comments[80] = "Id Pregunta: 10696. ";


//  Id pregunta: 10700 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  &iquest;Cu&aacute;l de los siguientes no es considerado un componente de un documento electr&oacute;nico seg&uacute;n la NTI de Documento Electr&oacute;nico?";
 choices[81]= new Array();
 choices[81][0] = "Encabezado.";
 choices[81][1] = "Contenido.";
 choices[81][2] = "Firma electr&oacute;nica.";
 choices[81][3] = "Metadatos.";
 answers[81] = choices[81][0];
 units[81] = "43";
 comments[81] = "Id Pregunta: 10700. ";


//  Id pregunta: 10702 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  En referencia a los metadatos del expediente electr&oacute;nico.";
 choices[82]= new Array();
 choices[82][0] = "&Uacute;nicamente podr&aacute;n ser modificados durante la tramitaci&oacute;n de dicho expediente y en ning&uacute;n caso con posterioridad a su finalizaci&oacute;n.";
 choices[82][1] = "No ser&aacute;n modificados en ninguna fase posterior del procedimiento administrativo.";
 choices[82][2] = "No ser&aacute;n modificados en ninguna fase posterior del procedimiento administrativo, a excepci&oacute;n de modificaciones necesarias para la correcci&oacute;n de errores u omisiones en el valor inicialmente asignado.";
 choices[82][3] = "La normativa no establece ning&uacute;n condicionante sobre su posible modificaci&oacute;n.";
 answers[82] = choices[82][2];
 units[82] = "43";
 comments[82] = "Id Pregunta: 10702. ";


//  Id pregunta: 10705 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  &iquest;Cu&aacute;l de los siguientes no es considerado un metadato m&iacute;nimo del expediente electr&oacute;nico?";
 choices[83]= new Array();
 choices[83][0] = "Versi&oacute;n NTI.";
 choices[83][1] = "Identificador.";
 choices[83][2] = "N&uacute;mero de documentos incluidos.";
 choices[83][3] = "Tipo de firma.";
 answers[83] = choices[83][2];
 units[83] = "43";
 comments[83] = "Id Pregunta: 10705. ";


//  Id pregunta: 10711 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  &iquest;Qu&eacute; especificaci&oacute;n de SICRES se incluye en la Norma T&eacute;cnica de Interoperabilidad de Modelo de Datos para el Intercambio de asientos entre las entidades registrales?";
 choices[84]= new Array();
 choices[84][0] = "1";
 choices[84][1] = "2";
 choices[84][2] = "3";
 choices[84][3] = "4";
 answers[84] = choices[84][1];
 units[84] = "43";
 comments[84] = "Id Pregunta: 10711. ";


//  Id pregunta: 10713 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  &iquest;Cu&aacute;l no es seg&uacute;n la NTI de Modelo de Datos para el Intercambio de asientos entre las entidades registrales un componente de la plataforma de intercambio?";
 choices[85]= new Array();
 choices[85][0] = "Origen";
 choices[85][1] = "Destino";
 choices[85][2] = "Gestor de intercambio";
 choices[85][3] = "Sistema de intercambio";
 answers[85] = choices[85][3];
 units[85] = "43";
 comments[85] = "Id Pregunta: 10713. ";


//  Id pregunta: 10717 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  &iquest;Qu&eacute; aspecto no es necesario incluir en una pol&iacute;tica de firma basada en certificados seg&uacute;n la NTI de firma electr&oacute;nica?";
 choices[86]= new Array();
 choices[86][0] = "Definici&oacute;n del alcance y &aacute;mbito de aplicaci&oacute;n.";
 choices[86][1] = "Datos para la identificaci&oacute;n del documento y del responsable de su gesti&oacute;n.";
 choices[86][2] = "Reglas de confianza, que incluir&aacute;n los requisitos establecidos para certificados, sellos de tiempo y firmas longevas.";
 choices[86][3] = "Todas las anteriores se deben incluir.";
 answers[86] = choices[86][3];
 units[86] = "43";
 comments[86] = "Id Pregunta: 10717. ";


//  Id pregunta: 10720 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l es el perfil m&iacute;nimo de formato permitido por la NTI de firma electr&oacute;nica?";
 choices[87]= new Array();
 choices[87][0] = "#NAME?";
 choices[87][1] = "#NAME?";
 choices[87][2] = "#NAME?";
 choices[87][3] = "B&aacute;sico de primer nivel";
 answers[87] = choices[87][0];
 units[87] = "43";
 comments[87] = "Id Pregunta: 10720. ";


//  Id pregunta: 10732 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  &iquest;En qu&eacute; a&ntilde;o se public&oacute; la Norma T&eacute;cnica de Interoperabilidad de Reutilizaci&oacute;n de recursos de la informaci&oacute;n?";
 choices[88]= new Array();
 choices[88][0] = "2010";
 choices[88][1] = "2011";
 choices[88][2] = "2013";
 choices[88][3] = "2015";
 answers[88] = choices[88][2];
 units[88] = "43";
 comments[88] = "Id Pregunta: 10732. ";


//  Id pregunta: 10752 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l es el objetivo global de la Estrategia de Ciberseguridad Nacional?";
 choices[89]= new Array();
 choices[89][0] = "Lograr que Espa&ntilde;a haga un uso seguro de los Sistemas de Informaci&oacute;n y Telecomunicaciones, fortaleciendo las capacidades de prevenci&oacute;n, defensa, detecci&oacute;n, y respuesta a los ciberataques.";
 choices[89][1] = "Garantizar que los Sistemas de Informaci&oacute;n y Telecomunicaciones que utilizan las Administraciones P&uacute;blicas poseen el adecuado nivel de ciberseguridad y resiliencia.";
 choices[89][2] = "Potenciar las capacidades de prevenci&oacute;n, detecci&oacute;n, reacci&oacute;n, an&aacute;lisis, recuperaci&oacute;n, respuesta, investigaci&oacute;n y coordinaci&oacute;n frente a las actividades del terrorismo y la delincuencia en el ciberespacio.";
 choices[89][3] = "Alcanzar y mantener los conocimientos, habilidades, experiencia y capacidades tecnol&oacute;gicas que necesita Espa&ntilde;a para sustentar todos los objetivos de ciberseguridad.";
 answers[89] = choices[89][0];
 units[89] = "43";
 comments[89] = "Id Pregunta: 10752. ";


//  Id pregunta: 10779 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  La direcci&oacute;n electr&oacute;nica habilitada para la pr&aacute;ctica de notificaciones regulada en el Real Decreto 1671/2009, por el que se desarrolla parcialmente la Ley 11/2007, tendr&aacute; vigencia indefinida excepto cuando no se utilice para la pr&aacute;ctica de notificaciones por el transcurso de:";
 choices[90]= new Array();
 choices[90][0] = "36 meses.";
 choices[90][1] = "60 meses.";
 choices[90][2] = "30 meses.";
 choices[90][3] = "24 meses.";
 answers[90] = choices[90][0];
 units[90] = "43";
 comments[90] = "Id Pregunta: 10779. Examen GSI 2014";


//  Id pregunta: 10981 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  De la Red SARA (Sistemas de Aplicaciones y Redes para las Administraciones) podemos afirmar que:";
 choices[91]= new Array();
 choices[91][0] = "Permite acceder a la plataforma de validaci&oacute;n de firma electr&oacute;nica @firma.";
 choices[91][1] = "No admite IPv6. Tampoco admite tr&aacute;fico cifrado.";
 choices[91][2] = "Su implantaci&oacute;n se establece como una recomendaci&oacute;n en el art&iacute;culo 43 de la Ley 11/2007 LAECSP.";
 choices[91][3] = "A&uacute;n se encuentra en fase beta y no se encuentra afectada por el ENS (Esquema Nacional de Seguridad).";
 answers[91] = choices[91][0];
 units[91] = "44";
 comments[91] = "Id Pregunta: 10981. TIC A1 AGE 2014";


//  Id pregunta: 11113 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Indique qu&eacute; tipos de entidades pueden conectarse a la Red Sara:";
 choices[92]= new Array();
 choices[92][0] = "Organismo p&uacute;blicos";
 choices[92][1] = "Ministerios";
 choices[92][2] = "Comunidades Aut&oacute;nomas";
 choices[92][3] = "Todas las anteriores";
 answers[92] = choices[92][3];
 units[92] = "30";
 comments[92] = "Id Pregunta: 11113. ";


//  Id pregunta: 11204 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;ntos objetivos tiene la Agenda Digital Espa&ntilde;ola?";
 choices[93]= new Array();
 choices[93][0] = "6";
 choices[93][1] = "7";
 choices[93][2] = "8";
 choices[93][3] = "9";
 answers[93] = choices[93][0];
 units[93] = "30";
 comments[93] = "Id Pregunta: 11204. ";


//  Id pregunta: 11205 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Agenda Digital Espa&ntilde;ola?";
 choices[94]= new Array();
 choices[94][0] = "Confianza Digital";
 choices[94][1] = "Econom&iacute;a Digital e Internacionalizaci&oacute;n";
 choices[94][2] = "Impulsar i+d TIC";
 choices[94][3] = "Impulso de los servicios p&uacute;blicos digitales";
 answers[94] = choices[94][3];
 units[94] = "30";
 comments[94] = "Id Pregunta: 11205. ";


//  Id pregunta: 11210 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de los siguientes planes se refiere al objetivo de Econom&iacute;a Digital e Internacionalizaci&oacute;n de la Agenda Digital Espa&ntilde;ola?";
 choices[95]= new Array();
 choices[95][0] = "Plan TIC en PYMEs y Comercio Electr&oacute;nico";
 choices[95][1] = "Plan de Impulso de Econom&iacute;a Digital y Contenidos Digitales";
 choices[95][2] = "Plan de Internacionalizaci&oacute;n de Empresas Tecnol&oacute;gicas";
 choices[95][3] = "Todos los anteriores";
 answers[95] = choices[95][3];
 units[95] = "30";
 comments[95] = "Id Pregunta: 11210. ";


//  Id pregunta: 11328 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  En cuanto a la normativa sobre reutilizaci&oacute;n de la informaci&oacute;n, indique cu&aacute;l de las siguientes opciones no es constitutiva de una infracci&oacute;n grave";
 choices[96]= new Array();
 choices[96][0] = "La reutilizaci&oacute;n de documentaci&oacute;n sin haber obtenido la correspondiente licencia en los casos en que &eacute;sta sea requerida;";
 choices[96][1] = "La reutilizaci&oacute;n de la informaci&oacute;n para una finalidad distinta a la que se concedi&oacute;;";
 choices[96][2] = "La alteraci&oacute;n grave del contenido de la informaci&oacute;n para cuya reutilizaci&oacute;n se haya concedido una licencia;";
 choices[96][3] = "La desnaturalizaci&oacute;n del sentido de la informaci&oacute;n para cuya reutilizaci&oacute;n se haya concedido una licencia;";
 answers[96] = choices[96][3];
 units[96] = "44";
 comments[96] = "Id Pregunta: 11328. ";


//  Id pregunta: 11487 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  La titularidad de los derechos de los programas de ordenador desarrollados por trabajadores asalariados";
 choices[97]= new Array();
 choices[97][0] = "Pertenecen a los trabajadores que han creado el programa";
 choices[97][1] = "Pertenecen a los trabajadores que han creado el programa, salvo pacto en contrario";
 choices[97][2] = "Pertenecen al empresario que los ha contratado";
 choices[97][3] = "Pertenecen al empresario que los ha contratado, salvo pacto en contrario";
 answers[97] = choices[97][3];
 units[97] = "36";
 comments[97] = "Id Pregunta: 11487. NULL";


//  Id pregunta: 11582 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  De acuerdo a la LOPD, el incumplimiento del deber de informaci&oacute;n al afectado acerca del tratamiento de sus datos de car&aacute;cter personal constituye una infracci&oacute;n de car&aacute;cter:";
 choices[98]= new Array();
 choices[98][0] = "Leve, cuando los datos se han recabado del propio interesado";
 choices[98][1] = "Grave, cuando los datos se han recabado del propio interesado";
 choices[98][2] = "Leve, cuando los datos no se han recabado del propio interesado";
 choices[98][3] = "Todas las anteriores son falsas";
 answers[98] = choices[98][0];
 units[98] = "29";
 comments[98] = "Id Pregunta: 11582. ";


//  Id pregunta: 11763 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Por qui&eacute;n est&aacute; presidida la Comisi&oacute;n Estrat&eacute;gica TIC?";
 choices[99]= new Array();
 choices[99][0] = "Ministro de Industria, Energ&iacute;a y Turismo";
 choices[99][1] = "Ministro de Fomento";
 choices[99][2] = "Ministro de Econom&iacute;a";
 choices[99][3] = "Ministro de Hacienda";
 answers[99] = choices[99][3];
 units[99] = "43";
 comments[99] = "Id Pregunta: 11763. ";


