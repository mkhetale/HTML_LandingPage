var lastScrollTop = 0;
	$(window).scroll(function(event){
	  
	   var st = $(this).scrollTop();
	   if (st > lastScrollTop){

	    if(st>99){
	      $("header").addClass("active");
	    }
	            
	   } else {        
	      $("header").removeClass("active");
	   }

	    lastScrollTop = st;
	});
