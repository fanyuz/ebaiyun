$(document).ready(function(){
	/*banner*/
	jQuery(".fullSlide").slide({ 
		titCell:".banner_icon_list ul", 
		mainCell:".banner_list ul", 
		effect:"fold",  
		autoPlay:true, 
		autoPage:true, 
		trigger:"click",
		startFun:function(i){var curLi = jQuery(".fullSlide .banner_list li").eq(i); if( !!curLi.attr("_src") ){					
			curLi.css("background-image",curLi.attr("_src")).removeAttr("_src") 				
			}			
		}		
	});
})

