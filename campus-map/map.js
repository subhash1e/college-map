$(document).ready(function(){
	$('#location-menu').change(function(){
		var itemSelected = $('#location-menu').val();
		if(itemSelected == 'department'){
			$('.department').removeClass('invisible');
			$('.unlisted').addClass('invisible');
			$('.hostel').addClass('invisible');
			$('.recreation').addClass('invisible');
			$('.acad').addClass('invisible');
			$('.department').addClass('visible');
		}
		if(itemSelected == 'unlisted'){
			$('.department').addClass('invisible');
			$('.hostel').addClass('invisible');
			$('.unlisted').removeClass('invisible');
			$('.recreation').addClass('invisible');
			$('.acad').addClass('invisible');
			$('.unlisted').addClass('visible');
		}
		if(itemSelected == 'recreation'){
			$('.department').addClass('invisible');
			$('.unlisted').addClass('invisible');
			$('.hostel').addClass('invisible');
			$('.recreation').removeClass('invisible');
			$('.acad').addClass('invisible');
			$('.recreation').addClass('visible');
		}
		if(itemSelected == 'acad'){
			$('.department').addClass('invisible');
			$('.hostel').addClass('invisible');
			$('.unlisted').addClass('invisible');
			$('.recreation').addClass('invisible');
			$('.acad').removeClass('invisible');
			$('.acad').addClass('visible');
		}
		if(itemSelected == 'hostel'){
			$('.department').addClass('invisible');
			$('.unlisted').addClass('invisible');
			$('.recreation').addClass('invisible');
			$('.hostel').removeClass('invisible');
			$('.hostel').addClass('visible');
			$('.acad').addClass('invisible');
		}
		if(itemSelected == 'all'){
			$('.department').removeClass('invisible');
			$('.unlisted').removeClass('invisible');
			$('.recreation').removeClass('invisible');
			$('.acad').removeClass('invisible');
			$('.hostel').removeClass('invisible');

			$('.department').addClass('visible');
			$('.unlisted').addClass('visible');
			$('.recreation').addClass('visible');
			$('.acad').addClass('visible');
			$('.hostel').addClass('visible');
		}

	})
});