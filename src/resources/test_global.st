<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Tests Preparatic XXIV | $titulo$ </title>
    <!-- Bootstrap -->
    <link href="../vendors/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="../vendors/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <!-- NProgress -->
    <!--<link href="../vendors/nprogress/nprogress.css" rel="stylesheet">-->
    <!-- Pomodoro Timer -->
    <link href="../vendors/pomodoro/css/pomodoro-timer.css" rel="stylesheet">
    <!-- Switchery -->
    <link href="../vendors/switchery/dist/switchery.css" rel="stylesheet">

	<!-- Custom Theme Style -->
    <link href="../css/custom.min.css" rel="stylesheet">

    <!-- Preparatic Style -->
    <link href="../css/preparatic.css" rel="stylesheet">
    <script src="../js/IndexedDB.js"></script>
    <script src="../data/info_tests.js "></script>
    <script src="../data/list_tests.js "></script>
    <script src="../js/quiz_functions.js"></script>
    <script src="../js/testNavigation.js"></script>

    <script src="$javascriptdata$"></script>
</head>
<body class="nav-md">
    <div class="container body">
        <div class="main_container">
            <div class="col-md-3 left_col">
                <div class="left_col scroll-view">
                    <div class="navbar nav_title" style="border: 0;">
                        <a href="index.html" class="site_title"><i class="fa fa-check-square-o"></i> <span>Preparatic</span></a>
                    </div>
                    <div class="clearfix"></div>
                    <!-- sidebar menu -->
                    <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
                        <div class="menu_section">
                            <h3>Menu</h3>
                            <ul class="nav side-menu">
                                <li>
                                    <a><i class="fa fa-home"></i> Bienvenida <span class="fa fa-chevron-down"></span></a>
                                    <ul class="nav child_menu">
                                        <li><a href="../index.html">Sobre los Tests</a></li>
                                        <li><a href="../about_us.html">Sobre Nosotros</a></li>
										<li><a href="../faq.html">F.A.Q.</a></li>
                                        <li><a href="../licencia.html">Licencia de Uso</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a><i class="fa fa-edit"></i> Tests <span class="fa fa-chevron-down"></span></a>
                                    <ul class="nav child_menu">
                                        <li><a href="../tests_todos.html">Ver todos</a></li>
                                        <li><a href="../tests_globales.html">Globales</a></li>
                                        <li><a href="../tests_relevancia.html">Por Relevancia</a></li>
                                        <li><a href="../tests_bloques.html">Por Bloques</a></li>
                                        <li><a href="../tests_temas.html">Por Temas</a></li>
                                        <li><a href="../tests_annos.html">Por A&ntilde;o</a></li>
                                        <li><a href="../tests_examen.html">Por Examen</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a><i class="fa fa-bar-chart-o"></i> Mi Progreso <span class="label label-success pull-right">En Beta!</span></a>
                                    <ul class="nav child_menu">
                                        <li><a href="../listado_tests.html">Test Realizados</a></li>
                                        <li><a href="../misestadisticas.html">Estad&iacute;sticas</a></li>
                                    </ul>
                                </li>
                                <!--<li> <a href="javascript:void(0)"><i class="fa fa-windows"></i> Extras <span class="label label-success pull-right">Coming Soon</span></a></li>-->
                            </ul>
                        </div>
                    </div>
                    <!-- /sidebar menu -->
                </div>
            </div>
            <!-- top navigation -->
            <div class="top_nav">
                <div class="nav_menu">
                    <nav>
                        <div class="nav toggle">
                            <a id="menu_toggle"><i class="fa fa-bars"></i></a>
                        </div>
                        <ul class="nav navbar-nav navbar-right">

                            <li class="">
                                <!--<div class="container-fluid">-->
                                <a class="navbar-brand" href="#">
                                    <img alt="Preparatic XXIV" src="../images/logo-alpha.png">
                                </a>

                                <h2>
                                    Cuerpo Superior de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n de la Administraci&oacute;n del Estado
                                </h2>
                                <!--</div>-->
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <!-- /top navigation -->
            <!-- page content -->
            <div class="right_col" role="main">
                <div class="">
                    <div class="page-title">
                        <div class="title_left">
                            <h3>$titulocompleto$</h3>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                    
					<div class="panel panel-default">					                        
                        <div class="panel-body text-center">
                        	<div>                    
                            <p><b>$app_version$</b></p>
                        	</div>                        	
						</div>                    
					</div>                        	

					<div class="panel panel-default">					                        
                        <div class="panel-body text-left">
                        	<div>
                        	
                        	<p>
                        	Si detecta algún error las preguntas de test, por favor
                        	haga click <a href="$test_foro_link$" target="_blank"><u>aquí</u></a>
                        	y publique un mensaje en este foro indicando:<br> 
                        	(i) el texto completo de la pregunta y de las respuestas,<br>
                        	(ii) el motivo por el que cree que puede existir un error.<br>
                        	</p> 
                        	
                        	</div>                        	
						</div>                    
					</div>
					                                        
					<div class="panel panel-default">					                        
                        <div class="panel-body text-center">
                            <div class="timer-time timer-container">
                                <div class="timer-time-set timer-box" id="currentTime">
                                    <span id="hoursValue">00</span><span>:</span><span id="minutesValue">00</span><span>:</span><span id="secondsValue">00</span>
                                </div>
                                <div class="timer-time-set timer-box" id="nextTime">
                                    <span id="hoursNext">00</span><span>:</span><span id="minutesNext">00</span><span>:</span><span id="secondsNext">00</span>
                                </div>
                            </div>                            
                            <div>
                                <button id="restartButton" class="btn btn-warning btn-sm" type="submit" onclick="onResetTimer()">
                                    <span class="glyphicon glyphicon-step-backward" aria-hidden="true"></span> Reset
                                </button>
                                <button id="startButton" class="btn btn-primary btn-sm" type="submit" onclick="onStartTimer()">
                                    <span class="glyphicon glyphicon-play" aria-hidden="true"></span> Start
                                </button>
                                <button id="stopButton" class="btn btn-danger btn-sm" type="submit" onclick="onStopTimer()">
                                    <span class="glyphicon glyphicon-stop" aria-hidden="true"></span> Stop
                                </button>
                            </div>                                                        
                        </div>                        
                    </div> <!-- END div class="panel panel-default" -->                    
                   
                </div>
                    <div class="row">
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="x_panel">
                                <div class="x_content">
                                    <div id="main">
                                        <div id="main_inner" class="fluid">
                                            <div id="result">
                                                <div style="text-align: center;">
                                                    <div class="btn-group">
                                                        <button type="button" class="btn btn-default">Ir al test:</button>
                                                        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <span class="caret"></span>
                                                            <span class="sr-only">Toggle Dropdown</span>
                                                        </button>
                                                        <script>
                                                            renderTestSelector3($testsSet$);
                                                        </script>
                                                        <noscript>
                                                            <p>
                                                                Es necesario javascript para utilizar el sistema de Tests de
                                                                Preparatic.
                                                            </p>
                                                        </noscript>
                                                    </div>
                                                </div>
                                                <!-- Navegaci&oacute;n entre tests. -->
                                                <!--<div style="text-align: center;">
                                                <select id="test_navigation" onchange="go()"> </select>
                                                <script type="text/javascript">
                                                    renderTestSelector();
                                                    //renderMenuTest('aleatorio', '');
                                                </script>
                                            </div>-->

											<div class="row">
											<table class="tabla-puntuacion">
												<thead>
													<td></td>
													<td>Bloque A</td>
													<td>Bloque B</td>
													<td>Total</td>
												</thead>
												
												<tr>
													<td><div class="rstmelajuego" style="display: none;">Me la juego</div></td>
													<td><div id="preguntas_mlj_A" class="rstmelajuego" style="display: none;">-</div></td>
													<td><div id="preguntas_mlj_B" class="rstmelajuego" style="display: none;">-</div></td>
													<td><div id="preguntas_mlj" class="rstmelajuego" style="display: none;">-</div></td>
												</tr>
												<tr>
													<td><div>Bien</div></td>
													<td><div id="preguntas_bien_A">-</div></td>
													<td><div id="preguntas_bien_B">-</div></td>
													<td><div id="preguntas_bien">-</div></td>
													<td></td>
												</tr>
												<tr>
													<td><div>Mal</div></td>
													<td><div id="preguntas_mal_A">-</div></td>
													<td><div id="preguntas_mal_B">-</div></td>
													<td><div id="preguntas_mal">-</div></td>
												</tr>
												<tr>
													<td><div>N/C</div></td>
													<td><div id="preguntas_nc_A">-</div></td>
													<td><div id="preguntas_nc_B">-</div></td>
													<td><div id="preguntas_NC">-</div></td>
												</tr>
												<tr>
													<td><div class="desc">Total</div></td>
													<td><div id="preguntas_total_A">-</div></td>
													<td><div id="preguntas_total_B">-</div></td>
													<td><div id="preguntas_total">-</div></td>
												</tr>
                                            </table>
                                            </div>

											   <p style="text-align: center;">
													<input type="submit" class="btn btn-info" value="Ver" name="showhide" onclick="showHideSolutions()" />
													<input type="submit" class="btn btn-primary" value="Corregir" onclick="onStopTimer(); correctQuiz('$idtest$')" />
													<input type="submit" class="btn btn-danger" value="Reset" onclick="resetQuiz(true)" />
												</p>
												<!-- Esta funcionalidad esta en beta. -->
												<div class="checkbox">
													<label for="check-switch"> Me la juego:</label>
													<input type="checkbox" id="check-switch" class="js-switch" />
												</div>   
											 </div>
                                             <script>
                                                renderQuiz();
                                            </script>
                                            <noscript>
                                                <p>
                                                    Es necesario javascript para utilizar el sistema de Tests de
                                                    Preparatic.
                                                </p>
                                            </noscript>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /page content -->
            <!-- footer content -->
            <footer>
                <p>Si tienes dudas o crees que alguna pregunta requiere corrección, accede al <a href="http://www.preparatic.org/foro/viewforum.php?f=216">foro de preparatic </a></p>
                <div class="pull-right">
                    Copyright &copy; 2017-2018 by Preparatic. All rights reserved. Plantilla de Bootstrap Gentelella - <a href="https://colorlib.com">Colorlib</a>
                </div>
                <div class="clearfix"></div>
            </footer>
            <!-- /footer content -->
    </div>
    <!-- jQuery -->
    <script src="../vendors/jquery/dist/jquery.min.js"></script>
    <!-- Bootstrap -->
    <script src="../vendors/bootstrap/dist/js/bootstrap.min.js"></script>
    <!-- FastClick -->
    <script src="../vendors/fastclick/lib/fastclick.js"></script>
    <!-- NProgress -->
    <!--<script src="../vendors/nprogress/nprogress.js"></script>-->
	<!-- Pomodoro -->
    <script src="../vendors/pomodoro/js/pomodoro-timer.js"></script>
	<!-- Switchery -->
    <script src="../vendors/switchery/dist/switchery.js"></script>

    <!-- Custom Theme Scripts -->
    <script src="../js/custom.min.js"></script>

	<script>
	    \$(document).ready(function () {
            onTimer(questions.length);
        });
		
		var melajuego = document.querySelector('.js-switch');
        if (typeof melajuego != "undefined") {
            melajuego.onchange = function () {
                //console.log(melajuego.checked);
                var preguntas = \$("[name^='answer_']");
                var divmlj = \$(".rstmelajuego");
                if (melajuego.checked) {
                    var myType = "checkbox";
                    divmlj.attr('style', 'display: inline-block;')
                } else {
                    var myType = "radio";
                    divmlj.attr('style', 'display: none;')
                }
                preguntas.replaceWith(function () {
                    return \$("<input>", {
                        type: myType,
                        name: \$(this).attr('name'),
                        value: \$(this).attr('value'),
                        id: \$(this).attr('id'),
                        class: \$(this).attr('class'),
                        onclick: \$(this).attr('onclick'),
                        checked: \$(this).prop('checked')
                    });
                });
            };
        };

        window.onload = function () {
            if (typeof db == 'undefined')
                openDb(function () { }, function () { });
        }
    </script>
</body>
</html>
