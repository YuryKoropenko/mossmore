$(document).ready(function() {
	/*выпадающее меню*/
	$('.l1').on('click', function() {
		$('.m2').addClass('hidden');
		$('.m3').addClass('hidden');
		$('.m4').addClass('hidden');
		$('.m5').addClass('hidden');
		$('.m6').addClass('hidden');
		$('.m1').toggleClass('hidden');
		return false;
	});
	$('.l2').on('click', function() {
		$('.m1').addClass('hidden');
		$('.m3').addClass('hidden');
		$('.m4').addClass('hidden');
		$('.m5').addClass('hidden');
		$('.m6').addClass('hidden');
		$('.m2').toggleClass('hidden');
		return false;
	});
	$('.l3').on('click', function() {
		$('.m1').addClass('hidden');
		$('.m2').addClass('hidden');
		$('.m4').addClass('hidden');
		$('.m5').addClass('hidden');
		$('.m6').addClass('hidden');
		$('.m3').toggleClass('hidden');
		return false;
	});
	$('.l4').on('click', function() {
		$('.m1').addClass('hidden');
		$('.m2').addClass('hidden');
		$('.m3').addClass('hidden');
		$('.m5').addClass('hidden');
		$('.m6').addClass('hidden');
		$('.m4').toggleClass('hidden');
		return false;
	});
	$('.l5').on('click', function() {
		$('.m1').addClass('hidden');
		$('.m2').addClass('hidden');
		$('.m3').addClass('hidden');
		$('.m4').addClass('hidden');
		$('.m6').addClass('hidden');
		$('.m5').toggleClass('hidden');
		return false;
	});
	$('.l6').on('click', function() {
		$('.m1').addClass('hidden');
		$('.m2').addClass('hidden');
		$('.m3').addClass('hidden');
		$('.m4').addClass('hidden');
		$('.m5').addClass('hidden');
		$('.m6').toggleClass('hidden');
		return false;
	});
});