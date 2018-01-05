
		var puntos = localStorage.getItem('puntaje');
		
		console.log('Puntaje: '+ puntos);


		if(localStorage.getItem('micro')){
			$('.micro').removeClass('hide');
    	}
		if(localStorage.getItem('rimas')){
			$('.rimas').removeClass('hide');
    	}
		if(localStorage.getItem('parlantes')){
			$('.parlantes').removeClass('hide');
    	}
		if(localStorage.getItem('mpc')){
			$('.mpc').removeClass('hide');
    	}
		if(localStorage.getItem('lata')){
			$('.lata').removeClass('hide');
    	}
		if(localStorage.getItem('boombox')){
			$('.boombox').removeClass('hide');
    	}
		if(localStorage.getItem('bboy')){
			$('.bboy').removeClass('hide');
    	}
		if(localStorage.getItem('zapatillas')){
			$('.zapatillas').removeClass('hide');
    	}
		if(localStorage.getItem('crew')){
			$('.crew').removeClass('hide');
    	}
		if(localStorage.getItem('parental')){
			$('.parental').removeClass('hide');
    	}
		if(localStorage.getItem('cassette')){
			$('.cassette').removeClass('hide');
    	}
		if(localStorage.getItem('ciudad')){
			$('.ciudad').removeClass('hide');
    	}
		if(localStorage.getItem('actitud')){
			$('.actitud').removeClass('hide');
    	}
		if(localStorage.getItem('soundsystem')){
			$('.soundsystem').removeClass('hide');
    	}
		if(localStorage.getItem('mixtape')){
			$('.mixtape').removeClass('hide');
    	}
		if(localStorage.getItem('torna')){
			$('.torna').removeClass('hide');
    	}
		if(localStorage.getItem('mc')){
			$('.mc').removeClass('hide');
    	}
		if(localStorage.getItem('dj')){
			$('.dj').removeClass('hide');
    	}
		if(localStorage.getItem('tags')){
			$('.tags').removeClass('hide');
    	}
		if(localStorage.getItem('graf')){
			$('.graf').removeClass('hide');
    	}
		if(localStorage.getItem('cadena')){
			$('.cadena').removeClass('hide');
    	}
		if(localStorage.getItem('pacos')){
			$('.pacos').removeClass('hide');
    	}
		if(localStorage.getItem('tren')){
			$('.tren').removeClass('hide');
    	}
		if(localStorage.getItem('drum')){
			$('.drum').removeClass('hide');
    	}
		if(localStorage.getItem('beat')){
			$('.beat').removeClass('hide');
    	}
		if(localStorage.getItem('kangol')){
			$('.kangol').removeClass('hide');
    	}
		if(localStorage.getItem('fuckthepolice')){
			$('.fuckthepolice').removeClass('hide');
    	}
		if(localStorage.getItem('batalla')){
			$('.batalla').removeClass('hide');
    	}
	
    	
    	var puntaje = 0;
    	if(puntos){
			puntaje = puntos;
    	}else{
			puntaje = 5;
    	}
    	$('#puntaje span').html(puntaje);
		var arriba = 0; 
		
		$('#sube').on('click',function(){
			
			
			if(arriba<0){
				$('#lista').animate({
					'top': '+=95'
				},500);

				$('.box-clone').animate({
					'top': '-=95'
				},500);
				arriba = arriba + 95;
			}else{
				$('#baja').show();
			}
			
			offset = $('#lista').offset();
			alto   = $('#lista').height();
			console.log('Top: '+offset.top);
			console.log('Alto: '+alto);
			console.log('Arriba: '+arriba);

			if(offset.top>=0){
				$('#sube').hide();
				$('#baja').show();
			}else{
				$('#sube').show();
			}
			if(arriba==0){
				$('#baja').show();
				$('#sube').hide();
			}else{
				//$('#baja').hide();
			}

		});
		
		$('#baja').on('click',function(){
			$('#lista').animate({
				'top': '-=95'
			},500);
			
			arriba = arriba - 95;
			
			$('.box-clone').animate({
				'top': '+=95'
			},500);
			
			$('#sube').show();
			
			offset = $('#lista').offset();
			alto   = $('#lista').height();
			console.log('Top: '+offset.top);
			console.log('Alto: '+alto);
			console.log('Arriba: '+arriba);


			
		});
			counter = 0;
			
			
			$(".drag-me").draggable();
			$("body").on('mouseover', function(){
				$(".drag-me").draggable({
					stop: function(event, ui) {
						counter++;
			        	$(ui.helper).addClass('box-clone');
			        	$('#instrujuego').fadeOut();
			        	$('.drag-me').css({'z-index':'10'});
			        				     	
			        	if($(ui.helper).hasClass('micro')){
			        		if($(ui.helper).hasClass('temp')){	
								$(ui.helper).removeClass('temp');
					        	$('#micro').prepend('<div class="drag-me ui-draggable ui-draggable-handle ui-droppable new temp micro" id="drag'+counter+'"><img src="assets/img/elementos/micro.png">');
							}
			        	}
			        	
			        	if($(ui.helper).hasClass('rimas')){
			        		if($(ui.helper).hasClass('temp')){	
								$(ui.helper).removeClass('temp');
								$('#rimas').prepend('<div class="drag-me ui-draggable ui-draggable-handle ui-droppable new temp rimas" id="drag'+counter+'"><img src="assets/img/elementos/rimas.png">');
				        	}
			        	}
			        	
			        	if($(ui.helper).hasClass('parlantes')){
			        		if($(ui.helper).hasClass('temp')){	
								$(ui.helper).removeClass('temp');
								$('#parlantes').prepend('<div class="drag-me ui-draggable ui-draggable-handle ui-droppable new temp parlantes" id="drag'+counter+'"><img src="assets/img/elementos/parlantes.png">');
				        	}
			        	}
			        	
			        	if($(ui.helper).hasClass('mpc')){
			        		if($(ui.helper).hasClass('temp')){	
								$(ui.helper).removeClass('temp');
								$('#mpc').prepend('<div class="drag-me ui-draggable ui-draggable-handle ui-droppable new temp mpc" id="drag'+counter+'"><img src="assets/img/elementos/mpc.png">');
				        	}
			        	}
			        	
			        	if($(ui.helper).hasClass('lata')){
			        		if($(ui.helper).hasClass('temp')){	
								$(ui.helper).removeClass('temp');
								$('#lata').prepend('<div class="drag-me ui-draggable ui-draggable-handle ui-droppable new temp lata" id="drag'+counter+'"><img src="assets/img/elementos/lata.png">');
				        	}
			        	}
			        	
			        	if($(ui.helper).hasClass('boombox')){
			        		if($(ui.helper).hasClass('temp')){	
								$(ui.helper).removeClass('temp');
								$('#boombox').prepend('<div class="drag-me ui-draggable ui-draggable-handle ui-droppable new temp boombox"  id="drag'+counter+'"><img src="assets/img/elementos/boombox.png">');
				        	}
			        	}
			        	
			        	if($(ui.helper).hasClass('bboy')){
			        		if($(ui.helper).hasClass('temp')){	
								$(ui.helper).removeClass('temp');
								$('#bboy').prepend('<div class="drag-me ui-draggable ui-draggable-handle ui-droppable new temp bboy"  id="drag'+counter+'"><img src="assets/img/elementos/bboy.png">');
				        	}
			        	}
			        	
			        	if($(ui.helper).hasClass('zapatillas')){
			        		if($(ui.helper).hasClass('temp')){	
								$(ui.helper).removeClass('temp');
								$('#zapatillas').prepend('<div class="drag-me ui-draggable ui-draggable-handle ui-droppable new temp zapatillas"  id="drag'+counter+'"><img src="assets/img/elementos/zapatillas.png">');
				        	}
			        	}
			        	
			        	if($(ui.helper).hasClass('crew')){
			        		if($(ui.helper).hasClass('temp')){	
								$(ui.helper).removeClass('temp');
								$('#crew').prepend('<div class="drag-me ui-draggable ui-draggable-handle ui-droppable new temp crew"   id="drag'+counter+'"><img src="assets/img/elementos/crew.png">');
				        	}
			        	}
			        	
			        	if($(ui.helper).hasClass('parental')){
			        		if($(ui.helper).hasClass('temp')){	
								$(ui.helper).removeClass('temp');
								$('#parental').prepend('<div class="drag-me ui-draggable ui-draggable-handle ui-droppable new temp parental"   id="drag'+counter+'"><img src="assets/img/elementos/parental.png">');
				        	}
			        	}
			        	
			        	if($(ui.helper).hasClass('cassette')){
			        		if($(ui.helper).hasClass('temp')){	
								$(ui.helper).removeClass('temp');
								$('#cassette').prepend('<div class="drag-me ui-draggable ui-draggable-handle ui-droppable new temp cassette"  id="drag'+counter+'"><img src="assets/img/elementos/cassette.png">');
				        	}
			        	}
			        	
			        	if($(ui.helper).hasClass('ciudad')){
			        		if($(ui.helper).hasClass('temp')){	
								$(ui.helper).removeClass('temp');
								$('#ciudad').prepend('<div class="drag-me ui-draggable ui-draggable-handle ui-droppable new temp ciudad" id="drag'+counter+'"><img src="assets/img/elementos/ciudad.png">');
				        	}
			        	}
			        	
			        	if($(ui.helper).hasClass('actitud')){
			        		if($(ui.helper).hasClass('temp')){	
								$(ui.helper).removeClass('temp');
								$('#actitud').prepend('<div class="drag-me ui-draggable ui-draggable-handle ui-droppable new temp actitud"  id="drag'+counter+'"><img src="assets/img/elementos/actitud.png">');
				        	}
			        	}
			        	
			        	if($(ui.helper).hasClass('soundsystem')){
			        		if($(ui.helper).hasClass('temp')){	
								$(ui.helper).removeClass('temp');
								$('#soundsystem').prepend('<div class="drag-me ui-draggable ui-draggable-handle ui-droppable new temp soundsystem" id="drag'+counter+'"><img src="assets/img/elementos/soundsystem.png">');
				        	}
			        	}
			        	
			        	if($(ui.helper).hasClass('mixtape')){
			        		if($(ui.helper).hasClass('temp')){	
								$(ui.helper).removeClass('temp');
								$('#mixtape').prepend('<div class="drag-me ui-draggable ui-draggable-handle ui-droppable new temp mixtape" id="drag'+counter+'"><img src="assets/img/elementos/mixtape.png">');
				        	}
			        	}
			        	
			        	if($(ui.helper).hasClass('torna')){
			        		if($(ui.helper).hasClass('temp')){	
								$(ui.helper).removeClass('temp');
								$('#torna').prepend('<div class="drag-me ui-draggable ui-draggable-handle ui-droppable new temp torna"  id="drag'+counter+'"><img src="assets/img/elementos/torna.png">');
				        	}
			        	}
			        	
			        	if($(ui.helper).hasClass('mc')){
			        		if($(ui.helper).hasClass('temp')){	
								$(ui.helper).removeClass('temp');
								$('#mc').prepend('<div class="drag-me ui-draggable ui-draggable-handle ui-droppable new temp mc" id="drag'+counter+'"><img src="assets/img/elementos/mc.png">');
				        	}
			        	}
			        	
			        	if($(ui.helper).hasClass('dj')){
			        		if($(ui.helper).hasClass('temp')){	
								$(ui.helper).removeClass('temp');
								$('#dj').prepend('<div class="drag-me ui-draggable ui-draggable-handle ui-droppable new temp dj" id="drag'+counter+'"><img src="assets/img/elementos/dj.png">');
				        	}
			        	}
			        	
			        	if($(ui.helper).hasClass('tags')){
			        		if($(ui.helper).hasClass('temp')){	
								$(ui.helper).removeClass('temp');
								$('#tags').prepend('<div class="drag-me ui-draggable ui-draggable-handle ui-droppable new temp tags" id="drag'+counter+'"><img src="assets/img/elementos/tags.png">');
				        	}
			        	}
			        	
			        	if($(ui.helper).hasClass('graf')){
			        		if($(ui.helper).hasClass('temp')){	
								$(ui.helper).removeClass('temp');
								$('#graf').prepend('<div class="drag-me ui-draggable ui-draggable-handle ui-droppable new temp graf" id="drag'+counter+'"><img src="assets/img/elementos/graf.png">');
				        	}
			        	}
			        	
			        	
			        	if($(ui.helper).hasClass('cadena')){
			        		if($(ui.helper).hasClass('temp')){	
								$(ui.helper).removeClass('temp');
								$('#cadena').prepend('<div class="drag-me ui-draggable ui-draggable-handle ui-droppable new temp cadena" id="drag'+counter+'"><img src="assets/img/elementos/cadena.png">');
				        	}
			        	}
			        	if($(ui.helper).hasClass('pacos')){
			        		if($(ui.helper).hasClass('temp')){	
								$(ui.helper).removeClass('temp');
								$('#pacos').prepend('<div class="drag-me ui-draggable ui-draggable-handle ui-droppable new temp pacos" id="drag'+counter+'"><img src="assets/img/elementos/pacos.png">');
				        	}
			        	}
			        	if($(ui.helper).hasClass('tren')){
			        		if($(ui.helper).hasClass('temp')){	
								$(ui.helper).removeClass('temp');
								$('#tren').prepend('<div class="drag-me ui-draggable ui-draggable-handle ui-droppable new temp tren" id="drag'+counter+'"><img src="assets/img/elementos/tren.png">');
				        	}
			        	}
			        	if($(ui.helper).hasClass('drum')){
			        		if($(ui.helper).hasClass('temp')){	
								$(ui.helper).removeClass('temp');
								$('#drum').prepend('<div class="drag-me ui-draggable ui-draggable-handle ui-droppable new temp drum" id="drag'+counter+'"><img src="assets/img/elementos/drum.png">');
				        	}
			        	}
			        	if($(ui.helper).hasClass('beat')){
			        		if($(ui.helper).hasClass('temp')){	
								$(ui.helper).removeClass('temp');
								$('#beat').prepend('<div class="drag-me ui-draggable ui-draggable-handle ui-droppable new temp beat" id="drag'+counter+'"><img src="assets/img/elementos/beat.png">');
				        	}
			        	}
			        	if($(ui.helper).hasClass('kangol')){
			        		if($(ui.helper).hasClass('temp')){	
								$(ui.helper).removeClass('temp');
								$('#kangol').prepend('<div class="drag-me ui-draggable ui-draggable-handle ui-droppable new temp kangol" id="drag'+counter+'"><img src="assets/img/elementos/kangol.png">');
				        	}
			        	}
			        	if($(ui.helper).hasClass('fuckthepolice')){
			        		if($(ui.helper).hasClass('temp')){	
								$(ui.helper).removeClass('temp');
								$('#fuckthepolice').prepend('<div class="drag-me ui-draggable ui-draggable-handle ui-droppable new temp fuckthepolice" id="drag'+counter+'"><img src="assets/img/elementos/fuckthepolice.png">');
				        	}
			        	}
			        	if($(ui.helper).hasClass('batalla')){
			        		if($(ui.helper).hasClass('temp')){	
								$(ui.helper).removeClass('temp');
								$('#batalla').prepend('<div class="drag-me ui-draggable ui-draggable-handle ui-droppable new temp batalla" id="drag'+counter+'"><img src="assets/img/elementos/batalla.png">');
				        	}
			        	}
			        	
			        	
			        	$(this).css({'z-index':'10000'});
			    	}
				});
			    
			    

			 	$( "#lista" ).droppable({
				    drop: function( event, ui ) {
				        if($(ui.draggable).hasClass('box-clone')){
					        id = $( ui.draggable ).attr('id');
							$('#'+id).addClass('chao');
				        }    
				    }
			    });

function mezclador(origen,ingrediente, resultado){
	console.log(origen);
	console.log(ingrediente);
	console.log(resultado);
	$( '.'+origen ).droppable({
	    drop: function( event, ui ) {
			if(!$( this ).hasClass('temp')){ 
		        if($(ui.draggable).hasClass('.'+ingrediente)){
			        $( this ).removeClass('.'+origen);
			        $( this ).addClass('.'+resultado);
			        $( this ).html('<img src="assets/img/elementos/'+resultado+'.png">');
			        if( $( '#elementos ul li .'+resultado ).hasClass('hide')){
			        	$( '#elementos ul li .'+resultado ).removeClass('hide');
			        	puntaje++;
			        	$('#puntaje span').html(puntaje);
			        	localStorage.setItem(resultado,1);
			        	localStorage.setItem('puntaje',puntaje);
			        }
			        id = $( ui.draggable ).attr('id');
					$('#'+id).addClass('chao');
			        
		        }  
		    }
	    }
    }); 
}


mezclador('rimas','bboy','boombox');
mezclador('rimas','micro','cassette');
mezclador('rimas','mc','actitud');
mezclador('bboy','rimas','boombox');
mezclador('bboy','lata','tags');
mezclador('bboy','torna','dj');
mezclador('bboy','micro','mc');
mezclador('bboy','parlantes','zapatillas');
mezclador('bboy','mc','crew');
mezclador('bboy','bboy','batalla');
mezclador('micro','bboy','mc');
mezclador('micro','rimas','cassette');
mezclador('micro','mc','parental');
mezclador('micro','torna','parlantes');
mezclador('micro','boombox','mc');
mezclador('torna','micro','parlantes');
mezclador('torna','cassette','mixtape');
mezclador('torna','bboy','dj');
mezclador('torna','mc','dj');
mezclador('parlantes','bboy','zapatillas');
mezclador('parlantes','parlantes','soundsystem');
mezclador('boombox','micro','mc');
mezclador('boombox','cassette','pacos');
mezclador('lata','bboy','tags');
mezclador('lata','mc','tags');
mezclador('lata','tags','graf');
mezclador('ciudad','dj','mpc');
mezclador('zapatillas','zapatillas','ciudad');
mezclador('zapatillas','mc','bboy');
mezclador('tags','tags','graf');
mezclador('tags','lata','graf');
mezclador('mc','rimas','actitud');
mezclador('mc','lata','tags');
mezclador('mc','micro','parental');
mezclador('mc','mc','batalla');
mezclador('mc','dj','cadena');
mezclador('mc','bboy','crew');
mezclador('mc','pacos','fuckthepolice');
mezclador('mc','cadena','kangol');
mezclador('mc','zapatillas','bboy');
mezclador('cassette','torna','mixtape');
mezclador('cassette','boombox','pacos');
mezclador('dj','mc','cadena');
mezclador('dj','torna','drum');
mezclador('dj','drum','beat');
mezclador('drum','dj','beat');
mezclador('pacos','mc','fuckthepolice');
mezclador('crew','graf','tren');
mezclador('cadena','mc','kangol');
mezclador('graf','crew','tren');

			     	
				
			    
			});		


function twShare(url, title, descr, image, winWidth, winHeight) {
	    var twtTitle = document.title;
	    var twtUrl = location.href;
	    var maxLength = 140 - (twtUrl.length + 1);
	    if (twtTitle.length > maxLength) {
	        twtTitle = twtTitle.substr(0, (maxLength - 3)) + '...';
	    }
	    var twtLink = 'http://twitter.com/home?status=' + encodeURIComponent('Combina diferentes elementos y descubre los iconos de la cultura hip hop en  www.seo2.cl/juego');
	    var winTop = (screen.height / 2) - (winHeight / 2);
	    var winLeft = (screen.width / 2) - (winWidth / 2);
        window.open(twtLink + '&p[summary]=' + descr + '&p[url]=' + url + '&p[images][0]=' + image, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
  
	}

function fbShare(url, title, descr, image, winWidth, winHeight) {
        var winTop = (screen.height / 2) - (winHeight / 2);
        var winLeft = (screen.width / 2) - (winWidth / 2);
        window.open('https://www.facebook.com/sharer/sharer.php?m2w&s=100&p%5Btitle%5D=Fb%20Share&p%5Bsummary%5D=Facebook+share+popup&p%5Burl%5D=http%3A%2F%2Fseo2.cl%2Fjuego%2F&p%5Bimages%5D%5B0%5D=http%3A%2F%2Fseo2.cl%2Fjuego%2Ffb2.png', 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
        

        
    }
