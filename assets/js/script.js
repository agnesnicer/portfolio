$(".element").each(function(){var e=$(this);
	e.typed({strings:e.attr("data-elements").split(","),typeSpeed:100,backDelay:3e3})});