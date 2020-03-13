$(document).ready(function() {
	$('.content').load('views/hem.html');
});

$('.nav-item').on('click', '*', function() {
    var pageid = $(this).attr('id');
    $('.content').load('views/'+pageid+'.html');
});

$('.nav-item').click(function() {
	$(this).addClass('active');
	$('.nav-item').not(this).removeClass('active');
});