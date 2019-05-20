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
//   A1: {area: "A.Temas generales.", titulo: "I. Marco constitucional espa&ntilde;ol y Uni&oacute;n Europea.", min: 1,	max: 6},    
var infoBloques = {
    $listabloques:{
$it.nombreBloque$: { area: "$it.areaBloque$", titulo: "$it.titulo$", min: $it.minPregunta$, max: $it.maxPregunta$ },}$
};

function initBloquesMap()
{ 
    var theMap = {
		$listabloques:{
		$it.nombreBloque$: 0,}$
    };
    return theMap;
};

//  T1: {area: "A1", tituloCorto: "La Constituci�n espa�ola de 1978 (I).",  tituloLargo: "La Constituci�n espa�ola de 1978 (I). Los principios constitucionales. Los derechos fundamentales y sus garant�as. La Corona. Cortes Generales. Congreso de los Diputados y Senado. El Gobierno. Los �rganos constitucionales de control del Gobierno: Tribunal"},
var infoTemas = { 
    $listatemas:{
T$it.numTemaStr$: { area: "$it.bloqueID$", titulo: "$it.tituloCorto$", tituloLargo: "$it.tituloLargo$", peso: $it.pesoFinal$, tema: $it.numTema$ },}$
};

function initTemasArray()
{ 
    var theArr = Array.apply(null, Array(Object.keys(infoTemas).length)).map(Number.prototype.valueOf, 0);
    return theArr;
};