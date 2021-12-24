
		//new menu script


		/* Main Header Script - Prevent closeing the dropdown starts */

		$('.Gn_head ul.dropdown-menu.mega-dropdown-menu').on('click mouseover', function (event) {
			event.stopPropagation();
		});
		/* Main Header Script - Prevent closeing the dropdown starts */	

	

		$('.panel-group').on('show.bs.collapse shown.bs.collapse hide.bs.collapse hidden.bs.collapse', function (e) {
			e.stopPropagation();
			var id = $(this).attr("id");
		});

		$('#accordion>.panel>.panel-heading>.panel-title>a[data-toggle="collapse"]').on("click", function (e) {
			const hashq = $(this).attr("href");
			//$("#accordion .panel-collapse").removeClass("in");
			$(hashq).toggleClass("in").css("height", "auto");
			/*$("#accordion>.panel>.panel-heading").removeClass("active");*/

			var has = "";
			if ($(hashq).hasClass('in')) {
				has = "1"
			}
			else {
				has = "0"
			}
			$("#accordion .panel-collapse").removeClass("in");

			if (has == "1") {
				$(hashq).addClass("in");
				$("#accordion>.panel>.panel-heading").removeClass("active");
				$(this).parents(".panel-heading").addClass("active");
			}
			else {
				$("#accordion>.panel>.panel-heading").removeClass("active");
			}




			e.stopPropagation();
			e.preventDefault();
			console.log(hashq);
		});


		$('#accordion1>.panel>.panel-heading>.panel-title>a[data-toggle="collapse"]').on("click", function (e) {
			const hashq1 = $(this).attr("href");
			/*$("#accordion1").find(".in").removeClass("in");*/
			$(hashq1).toggleClass("in");
			$("#accordion1>.panel>.panel-heading").removeClass("active");
			//console.log(hashq1);

			$(this).parents(".panel-heading").addClass("active");
			e.stopPropagation();
			e.preventDefault();
		});


		$("#accordion1 .collapse").on('show.bs.collapse', function (e) {
			$("#accordion1 .panel-collapse").removeClass("in");
			$("#accordion1 .panel-collapse").css("height", "auto");
			$(this).addClass("in");
			e.stopPropagation();
			e.preventDefault();
		})


		

		$('.panel-collapse').on('show.bs.collapse', function () {
			$(this).siblings('.panel-heading').addClass('active');
		});

		$('.panel-collapse').on('hide.bs.collapse', function () {
			$(this).siblings('.panel-heading').removeClass('active');
		});


      /* Mobile menu Activaton starts */

		function myFunction(x) {
			x.classList.toggle("change");
			$(".gmobile_menu").toggle();
			/* $("body").toggleClass("ovrflw_hide"); */
		}
		
// Windows Screen Resizes Function
window.onresize = function () {
   if (this.innerWidth > 991) {
	$(".gmobile_menu").css("display","none");
	$(".navbar-toggler-icon").removeClass("change");
	}
};
/* Mobile menu Activaton starts */
		//new menu script

