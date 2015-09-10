$(document).ready(function(){
	$(".js-nf-post").eq(0).show();
	
	var newsFeed = $(".js-nf-post").length;
	var newsFeedCont = 1;
	
	$(".js-nf-row-l").on("click",function(){
		$(".js-nf-post").hide();
		if(newsFeedCont < newsFeed){
			$(".js-nf-post").eq(newsFeedCont).show();
			newsFeedCont++;
		}
		else{
			$(".js-nf-post").eq(0).show();
			newsFeedCont = 1;
		}
	});	
	
	$(".js-nf-row-r").on("click",function(){
		$(".js-nf-post").hide();
		if(newsFeedCont > 0){
			$(".js-nf-post").eq(newsFeedCont).show();
			newsFeedCont--;
		}
		else{
			$(".js-nf-post").eq(0).show();
			newsFeedCont = newsFeed-1;
		}
	});	
	
	$(".js-multimedia-item").eq(0).show();
	$(".js-punto").on("click",function(){
		$(".js-multimedia-item").hide();
		$(".js-multimedia-item").eq( $(this).index() ).show();
		$(".js-punto").attr("src","imgs/content/punto-gs.jpg");
		$(this).attr("src","imgs/content/punto-ng.jpg");
	});
});