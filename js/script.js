
$(document).ready(function(){


	jQuery("#flip").click(function(){
 	jQuery("#panel").slideToggle("slow");
	});

	//back to top button
		$(window).scroll(function () {
			var scrollp = $(window).scrollTop();

			if (scrollp > 200) {
				$(".top").fadeIn(1000);
			} else {
				$(".top").fadeOut(1000);
			}

		});

		$(".top").click(function () {
			$("html, body").animate({
				scrollTop: 0
			}, 1000)
		});

		//lightbox js

		$('.venobox').venobox({
			spinner: 'three-bounce',
			spinColor: '#02918c',
			closeBackground: '#02918c'
		});

});

//tablink
function openCity(evt, cityName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();
