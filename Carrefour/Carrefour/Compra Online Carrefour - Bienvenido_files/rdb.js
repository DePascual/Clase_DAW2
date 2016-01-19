var RDBLT_SAT_traductions = {
	'es': 'Danos tu opinión',
	'es-formal': 'Denos su opinión',
	'en': 'Give us your opinion'
};

var userLang = navigator.language || navigator.userLanguage;
var window_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var window_height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

window.onload = function() {
	var defaults = {
		'server'    : 'https://www.redbility.com/satisfaccion_rwd/',
		'lang'      : userLang.substring(0, 2),
		'sid'       : '',
		'append'    : true,
		'position'  : 'br',
		'elem'      : '#rdblt-satisfaction a',
		'id'        : 'rdblt-satisfaction',
		'target'    : 'body',
		'iniwidth'  : 563,
		'iniheight' : 254,
		'endwidth'  : 770,
		'endheight' : 430,
		'autoload'	: false,
		'img'       : null,
		'lime2'     : false
	};

	var settings = {};
	var jQ;

	function getScript(url, success) {
		var script = document.createElement('script');
		script.src = url;
		var head = document.getElementsByTagName('head')[0],
		done = false;

		// Attach handlers for all browsers
		script.onload = script.onreadystatechange = function() {
			if(!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
				done = true;
				success();

				script.onload = script.onreadystatechange = null;
				head.removeChild(script);
			}
		}

		head.appendChild(script);
	}

	getScript('https://ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js', function() {
		if(typeof jQuery == 'undefined') {
			// Error loading jQuery
		} else {
			var jQueryRDB = $.noConflict();
			settings = jQueryRDB.extend(defaults, RDBLT_SAT);
			jQ = jQueryRDB;

			var href = settings.server+'satisfaction.'+settings.lang+'.php';
			jQueryRDB.ajax({
				type: 'POST',
				url: href,
				dataType: 'jsonp',
				data: 'sid='+settings.sid,
				success:function(content, textStatus, jqXHR) {
					init(settings, jQueryRDB, content.html);

					//Si es lime2 cambiamos la construcción de la url del iframe
					if(settings.lime2 === true){
						$('.rdblt-satisfaction-wrapper .calltoaction02 a').attr('href', 'https://redquest2.redbilityservers.com/limesurvey/index.php/'+settings.sid+'/lang-'+settings.lang);
					}
				},
				error: function(jqXHR, textStatus, errorThrown) {
					console.log(errorThrown)
				}
			});
		}
	});

}

//Función que lanza el Lightbox

function initLightbox (settings, elem, $, content){

	var newWindow = $('<iframe class="rdblt-satisfaction-iframe" frameborder="0" hspace="0" scrolling="auto"></iframe>');
	var windowPos;

	function openLightbox(){
		$('.rdblt-satisfaction-inner').css({
			'transform' : 'scale(0.8)',
			'-webkit-transform' : 'scale(0.8)',
			'-moz-transform' : 'scale(0.8)'
		});
		$('.rdblt-satisfaction-wrapper').css({
			'display': 'block',
		});
		setTimeout(function(){
			$('.rdblt-satisfaction-wrapper').css({
				'opacity': 1,
			});
			$('.rdblt-satisfaction-inner').css({
				'transform' : 'scale(1)',
				'-webkit-transform' : 'scale(1)',
				'-moz-transform' : 'scale(1)'
			});
		}, 50);

		windowPos = $(window).scrollTop();

		$('html').addClass('locked');

		$('#general').scrollTop(windowPos);
	}

	function closeLightbox(){
		$('.rdblt-satisfaction-wrapper').css({
			'opacity': 0,
		});
		$('.rdblt-satisfaction-inner').css({
			'transform' : 'scale(0.8)',
			'-webkit-transform' : 'scale(0.8)',
			'-moz-transform' : 'scale(0.8)'
		});
		setTimeout(function(){
			$('.rdblt-satisfaction-inner').empty();
			$('.rdblt-satisfaction-inner').append(content);
			if(settings.lime2 === true){
				$('.rdblt-satisfaction-wrapper .calltoaction02 a').attr('href', 'https://redquest2.redbilityservers.com/limesurvey/index.php/'+settings.sid+'/lang-'+settings.lang);
			}
			$('.rdblt-satisfaction-wrapper').css({
				'display': 'none',
			});
		}, 300);

		$('html').removeClass('locked');

		$(window).scrollTop(windowPos);
	}

	//Abrir el lightbox
	$(document).on('click', elem, function(e){
		e.preventDefault();

		openLightbox();
	});

	//Cerrar el lightbox
	$(document).on('click', function(e){

		if($(e.target)[0] === $('.rdblt-satisfaction-inner')[0] || $(e.target)[0] === $('.closeLightbox')[0] || $(e.target)[0] === $('.calltoaction01')[0]){
			e.preventDefault();

			closeLightbox();
		}
	});

	//Lanzar segundo lightbox
	$(document).on('click', '.calltoaction02 a', function(e){
		e.preventDefault();

		var el = $(this);

		$('.rdblt-satisfaction-inner').css({
			'transform' : 'scale(0.8)',
			'-webkit-transform' : 'scale(0.8)',
			'-moz-transform' : 'scale(0.8)',
			'opacity' : 0
		});

		newWindow.attr('src', el.attr('href'));

		$('.rdblt-satisfaction-inner').empty();
		$('.rdblt-satisfaction-inner').append(newWindow);
		setTimeout(function(){
			$('.rdblt-satisfaction-inner').css({
				'transform' : 'scale(1)',
				'-webkit-transform' : 'scale(1)',
				'-moz-transform' : 'scale(1)',
				'opacity' : 1
			});
		}, 200);
	});
}

function init(settings, $, content) {
	$("<link/>", {
		rel: "stylesheet",
		type: "text/css",
		href: settings.server+"_style/_css/satisfaction.css"
	}).appendTo("head");

	initElem(settings, $, content);
	initLightbox(settings, settings.elem, $, content);
}

function initElem(settings, $, content) {
	if(settings.append) {
		var target = (settings.blank) ? 'target="_blank"' : '';

		if(settings.autoload) {
			if(settings.lime2 !== true) {
				var elem ='<div id="'+settings.id+'" class="lang-'+settings.lang+'"><a href="https://redquest.redbilityservers.com/limesurvey/index.php?sid='+settings.sid+'&lang='+settings.lang+'" data-fancybox-type="iframe" '+target+'>'+RDBLT_SAT_traductions[settings.lang]+'</a></div>';
			} else {
				var elem ='<div id="'+settings.id+'" class="lang-'+settings.lang+'"><a href="https://redquest2.redbilityservers.com/limesurvey/index.php/'+settings.sid+'/lang-'+settings.lang+'" data-fancybox-type="iframe" '+target+'>'+RDBLT_SAT_traductions[settings.lang]+'</a></div>';
			}
		} else {
			var fancytmp = $('<div class="rdblt-satisfaction-wrapper"><div class="rdblt-satisfaction-inner"></div></div>').find('.rdblt-satisfaction-inner').append($(content)).end().prepend($('<a href="#" class="closeLightbox">x</a>'));
			$(settings.target).append(fancytmp);
			var elem ='<div id="'+settings.id+'" class="lang-'+settings.lang+'"><a href="#rdblt-satisfaction-content" '+target+'>'+RDBLT_SAT_traductions[settings.lang]+'</a></div>';
		}

		$(settings.target).append(elem);

		//Imagen personalizada
		if( settings.img != null ){
			$('#'+settings.id).css({ 'background' : 'none', 'width' : 'auto', 'height' : 'auto' });
			$('#'+settings.id+' a').text('').css({'text-indent': '0', 'position' : 'relative' }).append($('<img src="'+settings.server+'_style/_css/_gfx/'+settings.img+'" />'));
		}

		// La posición no funciona correctamente (pendiente de revisar)
		switch(settings.position) {
			case 'br':
				$('#'+settings.id).css({ bottom: 0, right: 0, left: 'inherit', top: 'inherit' });
			break;
			case 'tr':
				$('#'+settings.id).css({ top: 0, right: 0, left: 'inherit', bottom: 'inherit' });
			break;
			case 'mr':
				$('#'+settings.id).css({ top: '50%', right: 0, left: 'inherit', bottom: 'inherit', marginTop: '-72px' });
			break;
			case 'bl':
				$('#'+settings.id).css({ bottom: 0, left: 0, right: 'inherit', top: 'inherit' });
			break;
			case 'tl':
				$('#'+settings.id).css({ top: 0, left: 0, right: 'inherit', bottom: 'inherit' });
			break;
			case 'ml':
				$('#'+settings.id).css({ top: '50%', right: 0, left: 'inherit', bottom: 'inherit', marginTop: '-72px' });
			break;
		}
	} else {
		var fancytmp = $('<div class="rdblt-satisfaction-wrapper"><div class="rdblt-satisfaction-inner"></div></div>').find('.rdblt-satisfaction-inner').append($(content)).end().prepend($('<a href="#" class="closeLightbox">x</a>'));
		$(settings.target).append(fancytmp);
		var elem ='<div id="'+settings.id+'" class="lang-'+settings.lang+'"><a href="#rdblt-satisfaction-content" '+target+'>'+RDBLT_SAT_traductions[settings.lang]+'</a></div>';
	}

}