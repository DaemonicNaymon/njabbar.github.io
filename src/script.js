
$(document).ready(function(){
	$.title_msg = "Done with me? ;)";
	$.original;

	$('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width:$(this).attr('data-percent')
		},6000);
	});

  $('[data-toggle="tooltip"]').tooltip();

	$(window).focus(function() {
			if (original) {
				document.title = original;
			}
	}).blur(function() {
			$.title = $('title').text();
			if (title != title_msg) {
					original = title;
			}
			document.title = title_msg;
	});
});
