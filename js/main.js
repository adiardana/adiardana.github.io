$(function() {
	var activityIndicatorOn = function(){
		$( '<div id="imagelightbox-loading"><div></div></div>' ).appendTo( 'body' );
	},
	activityIndicatorOff = function(){
		$( '#imagelightbox-loading' ).remove();
	},
	overlayOn = function(){
		$( '<div id="imagelightbox-overlay"></div>' ).appendTo( 'body' );
	},
	overlayOff = function(){
		$( '#imagelightbox-overlay' ).remove();
	},
	closeButtonOn = function( instance ){
		$( '<a href="#" id="imagelightbox-close">Close</a>' ).appendTo( 'body' ).on( 'click touchend', function(){ $( this ).remove(); instance.quitImageLightbox(); return false; });
	},
	closeButtonOff = function(){
		$( '#imagelightbox-close' ).remove();
	},
	captionOn = function(){
		var description = $( 'a[href="' + $( '#imagelightbox' ).attr( 'src' ) + '"] img' ).attr( 'alt' );
		if( description.length > 0 )
			$( '<div id="imagelightbox-caption">' + description + '</div>' ).appendTo( 'body' );
	},
	captionOff = function(){
		$( '#imagelightbox-caption' ).remove();
	};

	$('.popup').imageLightbox({
		onStart: function() { overlayOn(); },
		onEnd: function() { overlayOff(); activityIndicatorOff(); },
		onLoadStart: function() { activityIndicatorOn(); },
		onLoadEnd: function() { activityIndicatorOff(); }
	});
	$('.ttip').hover(function() {
		$(this).tooltip('toggle');
	});

	$('.scroll-top .go-top').click(function(event) {
		$("html, body").animate({ scrollTop: "0px" });
	});

	$(window).scroll(function(event) {
		var top = $(window).scrollTop();
		console.log(top);

		if(top >= 200){
			$('.scroll-top .go-top').css('opacity', '1');
		}else{
			$('.scroll-top .go-top').css('opacity', '0');
		}
	});
});