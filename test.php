<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Alquimia Hip-hop</title>

	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <link href="assets/css/bootstrap.min.css" rel="stylesheet">
    <link href="assets/css/animate.css" rel="stylesheet">
    <link href="assets/css/alquimia.css?ver=1.1" rel="stylesheet">
    
    <link rel="icon" type="image/png" href="assets/img/favicon.png" />

	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:site" content="@seo2">
	<meta name="twitter:title" content="Seo2 - Alquimia Hip hop">
	<meta name="twitter:description" content="Combina diferentes elementos y descubre los iconos de la cultura hip hop.">
	<meta name="twitter:image" content="http://www.seo2.cl/juego/fb2.png">      

	<meta property="og:title" content="Seo2 - Alquimia Hip hop">
	<meta property="og:site_name" content="Seo2 - Alquimia Hip hop">
	<meta property="og:url" content="http://www.seo2.cl/juego/">
	<meta property="og:description" content="Combina diferentes elementos y descubre los iconos de la cultura hip hop.">
	<meta property="og:image" content="http://www.seo2.cl/juego/fb2.png" />
	<meta property="og:type" content="website">    
    

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <script src="//fast.eager.io/GrhxNZe1tj.js"></script>
  </head>
  <body id="jugar">
  <div id="contienejuego">
   		<div class="col-sm-11 col-xs-9" id="juego">
   			<a href="javascript:void(0);"  data-toggle="modal" data-target="#myModal" id="info" class="animated slideInLeft">
	   			<i class="fa fa-info-circle" aria-hidden="true"></i>
	   		</a>
   			<a href="javascript:void(0);"  data-toggle="modal" data-target="#myModal3" id="contact" class="animated slideInLeft">
	   			<i class="fa fa-pencil" aria-hidden="true"></i>
	   		</a>
   			<a href="javascript:void(0);"  data-toggle="modal" data-target="#myModal2" id="help" class="animated slideInLeft">
	   			<i class="fa fa-question-circle" aria-hidden="true"></i>
	   		</a>
	   		
	   		<a href="javascript:fbShare('https://www.seo2.cl/juego/', 'Fb Share', 'Facebook share popup', 'https://www.seo2.cl/juego/fb.png', 520, 350)" class="btn-fb"><i class="fa fa-facebook" aria-hidden="true"></i></a>

			<a href="javascript:twShare('https://www.seo2.cl/juego/', 'TW Share', 'Twitter share popup', 'https://www.seo2.cl/juego/fb.png', 520, 350)" class="btn-tw"><i class="fa fa-twitter" aria-hidden="true"></i></a>	   		
	   		
	   		
	   		
	   		
			<div class="text-center animated fadeIn" id="puntaje">
				<h1><span>5</span>/28</h1>
			</div>
			<div class="text-center animated tada" id="instrujuego">
				<h1>Arrastra los<br>
				elementos acá<br>
				para empezar<br>
				a mezclarlos.</h1>
			</div>



   		</div>
   		<div class="col-sm-1 col-xs-3 animated slideInRight" id="elementos">
<!--
	   		<img src="assets/img/cabecera-elementos.png" id="cabecera-elementos" class="nodrag">
	   		<img src="assets/img/footer-elementos.png" id="footer-elementos" class="nodrag">
-->
	   		<a href="javascript:void(0);" id="sube" style="display:none;"><i class="fa fa-chevron-circle-up"></i></a>
	   		<a href="javascript:void(0);" id="baja"><i class="fa fa-chevron-circle-down"></i></a>
	   		<ul id="lista">
		   		<li id="micro"> 		<div id="dragmicro" class="drag-me temp micro"><img src="assets/img/elementos/micro.png"></div></li>
		   		<li id="rimas">			<div id="dragrimas" class="drag-me temp rimas"><img src="assets/img/elementos/rimas.png"></div></li>
		   		<li id="parlantes">		<div id="dragparlantes" class="drag-me temp hide parlantes"><img src="assets/img/elementos/parlantes.png"></div></li>
		   		<li id="soundsystem">	<div id="dragpsoundsystem" class="drag-me temp hide soundsystem"><img src="assets/img/elementos/soundsystem.png"></div></li>
		   		<li id="mpc">			<div id="dragmpc" class="drag-me temp hide mpc"><img src="assets/img/elementos/mpc.png"></div></li>
		   		<li id="lata">			<div id="draglata" class="drag-me temp lata"><img src="assets/img/elementos/lata.png"></div></li>
		   		<li id="beat">			<div id="dragbeat" class="drag-me temp hide beat"><img src="assets/img/elementos/beat.png"></div></li>
		   		<li id="boombox" >		<div id="dragboombox" class="drag-me temp hide boombox"><img src="assets/img/elementos/boombox.png"></div></li>
		   		<li id="bboy" >			<div id="dragbboy" class="drag-me temp bboy"><img src="assets/img/elementos/bboy.png"></div></li>
		   		<li id="zapatillas" >	<div id="dragzapatillas" class="drag-me temp  hide zapatillas"><img src="assets/img/elementos/zapatillas.png"></div></li>
		   		<li id="cadena" >		<div id="dragcadena" class="drag-me temp hide cadena"><img src="assets/img/elementos/cadena.png"></div></li>
		   		<li id="cassette">		<div id="dragcassette" class="drag-me temp hide cassette"><img src="assets/img/elementos/cassette.png"></div></li>
		   		<li id="ciudad">		<div id="dragciudad" class="drag-me temp hide ciudad"><img src="assets/img/elementos/ciudad.png"></div></li>
		   		<li id="actitud" >		<div id="dragactitud" class="drag-me temp hide actitud"><img src="assets/img/elementos/actitud.png"></div></li>
		   		<li id="mixtape"> 		<div id="dragmixtape" class="drag-me temp hide mixtape"><img src="assets/img/elementos/mixtape.png"></div></li>
		   		<li id="torna" >		<div id="dragtorna" class="drag-me temp  torna"><img src="assets/img/elementos/torna.png"></div></li>
		   		<li id="dj" >			<div id="dragdj" class="drag-me temp hide dj"><img src="assets/img/elementos/dj.png"></div></li>
		   		<li id="mc" >			<div id="dragmc" class="drag-me temp hide mc"><img src="assets/img/elementos/mc.png"></div></li>
		   		<li id="crew" >			<div id="dragcrew" class="drag-me temp hide crew"><img src="assets/img/elementos/crew.png"></div></li>
		   		<li id="graf" >			<div id="draggraf" class="drag-me temp hide graf"><img src="assets/img/elementos/graf.png"></div></li>
		   		<li id="tags" >			<div id="dragtags" class="drag-me temp hide tags"><img src="assets/img/elementos/tags.png"></div></li>
		   		<li id="parental" >		<div id="dragparental" class="drag-me temp hide parental"><img src="assets/img/elementos/parental.png"></div></li>
		   		<li id="pacos" >		<div id="dragpacos" class="drag-me temp hide pacos"><img src="assets/img/elementos/pacos.png"></div></li>
		   		<li id="tren" >			<div id="dragtren" class="drag-me temp hide tren"><img src="assets/img/elementos/tren.png"></div></li>
		   		<li id="drum" >			<div id="dragdrum" class="drag-me temp hide drum"><img src="assets/img/elementos/drum.png"></div></li>
		   		<li id="kangol" >		<div id="dragkangol" class="drag-me temp hide kangol"><img src="assets/img/elementos/kangol.png"></div></li>
		   		<li id="fuckthepolice">	<div id="dragfuckthepolice" class="drag-me temp hide fuckthepolice"><img src="assets/img/elementos/fuckthepolice.png"></div></li>
		   		<li id="batalla" >		<div id="dragbatalla" class="drag-me temp hide batalla"><img src="assets/img/elementos/batalla.png"></div></li>
	   		</ul>

   		</div>
</div>

<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel"><i class="fa fa-info-circle" aria-hidden="true"></i> Sobre este juego - Alquimia Hip-hop <span>[alpha]</span></h4>
      </div>
      <div class="modal-body">
		  	<div class='embed-container'><iframe src='https://www.youtube.com/embed/yr59CkfEG1A' frameborder='0' allowfullscreen></iframe></div>     	
	  		Lo primero que quiero aclarar es que esto es un juego hecho como jugando.<br>
	  		Es una adaptación libre inspirada del juego <a href="http://littlealchemy.com/" target="_blank">Little Alchemy</a>.<br>
	  		No está terminado y mi deseo es trabajar con algún ilustrador para hacer una versión más linda y entretenida.<br>
	  		Por ahora, ésta es demostrativa y espero que me ayuden a completarla.<br>
	  		Si se te ocurren elementos y combinaciones no dudes en escrbirme un e-mail.<br>
	  		<a href="mailto:mc@seo2.cl">mc@seo2.cl</a>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>


<!-- Modal -->
<div class="modal fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel"><i class="fa fa-question-circle" aria-hidden="true"></i> Ayuda</h4>
      </div>
      <div class="modal-body">
	      	<h2>Alquimia Hip-hop <span>[alpha]</span></h2>
	  		<p>	
		  		<i class="fa fa-cogs" aria-hidden="true"></i> La mecánica del juego es muy sencilla.<br/>
		  		<i class="fa fa-caret-square-o-left" aria-hidden="true"></i> Debes arrastrar los elementos de la barra de la derecha a la zona de la izquierda.<br/>
		  		<i class="fa fa-plus-square-o" aria-hidden="true"></i> Si arrastras un elemento sobre otro puede crearse uno nuevo.<br/>
		  		<i class="fa fa-caret-square-o-right" aria-hidden="true"></i> Los nuevos elementos aparecerán en la barra de la derecha.<br/>
		  		<i class="fa fa-arrows-h" aria-hidden="true"></i> Puedes mezclar los elementos entre si, pero no todos crean nuevas combinaciones.<br/>
		  		<i class="fa fa-trash-o" aria-hidden="true"></i> Arrastra los items sobrantes a la barra de la derrecha para borrarlos.<br/>
	  		</p>
	  </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
<!-- Modal -->
<div class="modal fade" id="myModal3" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel"><i class="fa fa-pencil" aria-hidden="true"></i> Contacto</h4>
      </div>
      <div class="modal-body">
      	<div id="contacto">
      		
      	</div>
	  </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="assets/js/jquery-ui.min.js"></script>
    <script src="assets/js/jquery.ui.touch-punch.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    <script src="assets/js/juego_test.js?v=1.1"></script>
    
 <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-7928771-11', 'auto');
  ga('send', 'pageview');

</script>   
    
  </body>
</html>