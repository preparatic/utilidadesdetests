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
var useranswers = new Array();
var answered = 0;

function renderQuiz()
{
	for(var i=0;i<questions.length;i++)
	{
		document.writeln('<p class="question" id="question_'+i+'">' + questions[i] + ' <span id="result_' + i + '"></span><span  class="info"  id="info_' + i + '"></span><span id="corregir_'+i+'"><a href="javascript:correctQuestion('+questionId+')"> Corregir </a></span><span id="limpiar_'+i+'"></span></p>');
		var letra = 97; // Letra a en ASCII
		for(j=0;j<choices[i].length;j++)
		{
			document.writeln('<input type="radio" name="answer_' + i + '" value="' + choices[i][j] + '" id="answer_' + i + '_' + j + '" class="question_' + i + '" onclick="submitAnswer(' + i + ', this,'+ j + ', \'question_' + i + '\', \'label_' + i + '_' + j + '\')" /><label id="label_' + i + '_' + j + '" for="answer_' + i + '_' + j + '"> ' + String.fromCharCode(letra) + ') ' + choices[i][j] + '</label><br />');
			letra = letra +1;
		}
		useranswers[i]=-1;
	}
}



function correctQuiz(){
	for(var i=0;i<questions.length;i++){
		correctQuestion(i);
	}
	showResult();
}

function correctQuestion(questionNumber){
	var isRight = 0;
	var optionsCount = choices[questionNumber].length;
	
	hideAllClearOptions();


	var info = '';
	if (units[questionNumber]!='')
		info = '<br/>Tema: '+units[questionNumber];
	if (comments[questionNumber]!='')	
		info = info + '. '+comments[questionNumber];
	document.getElementById('info_' + questionNumber).innerHTML = info;

	
	// Comprobamos que el identificador de pregunta sea correcto.
	if (useranswers[questionNumber] ==-1) {
		document.getElementById('question_'+questionNumber).className = "question nc";
		document.getElementById('result_' + questionNumber).innerHTML = '[N/C]';
		return;
	}
	
	// Comparamos la respuesta de usuario con cada una de las opciones
	alert ('user answers ' + useranswers[questionNumber]);
	for(var i=0;i<optionsCount;i++){

			if (useranswers[questionNumber] == i){
				document.getElementById('label_'+questionNumber+'_'+i).className = "bien";
				document.getElementById('question_'+questionNumber).className = "question bien";
				isRight = 1;
			  }
			else{
        		 document.getElementById('label_'+questionNumber+'_'+i).className = "opcion_mal";
			 document.getElementById('question_'+questionNumber).className = "question mal";
			}	
	}

	if (isRight == 1){
		document.getElementById('result_' + questionNumber).innerHTML = '[BIEN]';
	else
		document.getElementById('result_' + questionNumber).innerHTML = '[MAL]';
	
}

function resetQuiz()
{
//	if(!confirm('¿Seguro que desea reiniciar?'))
//		return false;
			
	document.location = document.location;
}


/*
 * Función que guarda el identificador de lo que hemos guardado.
*/
function submitAnswer(questionId, obj, idRadioButton, classId, labelId)
{
	useranswers[questionId] = idRadioButton;


	showClearOption(questionId);
}

function showClearOption(questionId){
	document.getElementById('limpiar_' + questionId).innerHTML = '<a href="javascript:clearQuestion('+questionId+')">No contestar</a>';
}

function clearQuestion(questionId){
	hideClearOption(questionId);
	
	for(var respuesta=0;respuesta<choices[questionId].length;respuesta++){
		document.getElementById('answer_'+questionId+'_'+respuesta).checked = false;
	}
	
	useranswers[questionId] =-1;	
}

function hideClearOption(questionId){
	document.getElementById('limpiar_' + questionId).innerHTML = '';
}

function hideAllClearOptions(questionId){
	for (var i=0; i<questions.length; i++){
		if (useranswers[i] != -1)
			hideClearOption(i);
	}
}

function showResult(){
	var correctCount = 0;
	var incorrectCount = 0;
	var ncCount = 0;
	var totalCount = questions.length;
	
	for(var i=0;i<totalCount;i++)
	{
		if(useranswers[i] == i)
			correctCount++;
		else
			if (useranswers[i] != -1)
				incorrectCount++;
	}
	
	ncCount = totalCount - (correctCount + incorrectCount);
	
	var result = (correctCount-(incorrectCount*0.5));
	
	document.getElementById('preguntas_bien').innerHTML = ''+correctCount;
	document.getElementById('preguntas_mal').innerHTML = ''+incorrectCount;
	document.getElementById('preguntas_NC').innerHTML = ''+ncCount;
	document.getElementById('preguntas_total').innerHTML = ''+result;
}

function go()
{
	var box = document.getElementById('exam_navigation');
	var destination = box.options[box.selectedIndex].value;
	if (destination) location.href = destination;
}

