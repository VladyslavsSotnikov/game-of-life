
		//Mobile menu
	  	var link = document.getElementsByClassName('m-menu-link');
	  	var close = document.getElementsByClassName('close-menu');
	  	var menu = document.getElementsByClassName('m-menu');
	  	link[0].onclick = function(){
	  		menu[0].classList.add('m-menu-active');
	  	}
	  	close[0].onclick =function(){
	  		 menu[0].classList.remove('m-menu-active')
	  	};


	  	//Latest blogs
	  	$('.blogs_content').slick({
			 infinite: true,
			 slidesToShow: 3,
			 slidesToScroll: 1,
			 autoplay: true,
			 autoplaySpeed: 2000,
	 		 responsive: [
    		    {
			      breakpoint: 768,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2,
			      }
			    },
			    {
			      breakpoint: 576,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			        dots: false
			      }
			    },
  			]
		});

		//Slider Review
	  	$('.review-customer').slick({
			 infinite: true,
			  arrows: false,
			 slidesToShow: 3,
			 slidesToScroll: 1,
			 autoplay: true,
			 dots: true,
			  responsive: [
			    {
			      breakpoint: 1199,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1,
			        dots: true,
			      }
			    },
    		    {
			      breakpoint: 991,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1,
			        dots: true,
			      }
			    },
			    {
			      breakpoint: 576,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			        dots: false,
			      }
			    },
  			]
		});
		

	  	//slider logo
	  	$('.multiple-items').slick({
		  	infinite: true,
		 	slidesToShow: 5,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			responsive: [
			    {
			      breakpoint: 991,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 2
			      }
			    },
    		    {
			      breakpoint: 768,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2,
			      }
			    },
			    {
			      breakpoint: 576,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			      }
			    }
  			]
		});

	  	//Project extist:
		var count = new Date('3/12/2019').getTime();
		var second = 1000;
		var minute = second * 60;//Number of milliseconds per minute
		var hour = minute * 60;//Number of milliseconds per hour
		var day = hour * 24;//Number of milliseconds per day
		 var x = setInterval(function() {
	 		var now = new Date().getTime();
			var d = now - count;//Number of milliseconds between 1/1/2018 and today's date
			var days = Math.floor(d/day);//Number of days between 1/1/2018 and today's date
			var hours = Math.floor((d/hour)%24);//number of hours in today
			var minutes = Math.floor((d/minute)%60);//The number of minutes in this hour
			var seconds = Math.floor((d/second)%60);//The number of seconds in this minute
			document.getElementById('timer_days').innerHTML = days ;
			document.getElementById('timer_hours').innerHTML = hours ;
			document.getElementById('timer_minutes').innerHTML = minutes ;
			document.getElementById('timer_seconds').innerHTML = seconds ;
		}, 1000);






