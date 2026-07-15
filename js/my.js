// JavaScript Document
$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>1){
			$(".navbg").css("background-color","rgba(230,0,18,0.7)");
		}
		else{
			$(".navbg").css("background-color","rgba(230,0,18,1.00)");
		}
	});
});


$(function(){
	$(".cbs1").click(function(){
		$(".bs1").css("width","95%");
		$(".bs2").css("width","90%");
		$(".bs3").css("width","95%");
	});
	$(".cbs2").click(function(){
		$(".bs1").css("width","85%");
		$(".bs2").css("width","85%");
		$(".bs3").css("width","80%");
	});
	$(".cbs3").click(function(){
		$(".bs1").css("width","90%");
		$(".bs2").css("width","95%");
		$(".bs3").css("width","80%");
	});
	
});

$(function(){
	$(".call").click(function(){
		$(".all").fadeIn();
	});
	
	$(".call1").click(function(){
		$(".all").hide();
		$(".all1").fadeIn();
		$(".call").removeClass("active");
	});
	$(".call2").click(function(){
		$(".all").hide();
		$(".all2").fadeIn();
		$(".call").removeClass("active");
	});
	$(".call3").click(function(){
		$(".all").hide();
		$(".all3").fadeIn();
		$(".call").removeClass("active");
	});
});
$(function(){
	$(".buy").click(function(){
		alert("感謝您的購買，希望您能繼續喜歡著總鋪師的手路菜\n手路菜將在幾個工作日送達府上");
	});
});


$(function(){
	$(".dbox").click(function(){
		alert("感謝您的領取，希望您能繼續喜歡著總鋪師的手路菜");
	});
});

$(function(){
	$(".ctop").click(function(){
		$("html,body").animate({scrollTop:0},1000);
	});
	$(".ctop1").click(function(){
		$("html,body").animate({scrollTop:$("#top1").offset().top},1000);
	});
	$(".ctop2").click(function(){
		$("html,body").animate({scrollTop:$("#top2").offset().top},1000);
	});
	$(".ctop3").click(function(){
		$("html,body").animate({scrollTop:$("#top3").offset().top},1000);
	});
	$(".ctop4").click(function(){
		$("html,body").animate({scrollTop:$("#top4").offset().top},1000);
	});
});