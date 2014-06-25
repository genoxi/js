(function($){
	var responsive_menu = false;
	$(window).scroll(function(){
		if(!responsive_menu){
			var wind_scr = $(window).scrollTop();
			if(wind_scr < 450){
				$('.top').stop(true).animate({opacity : 0}, 10);
			}
			else {
				$('.top').stop(true).animate({opacity : 1}, 300);
			}
		}
	});
})(jQuery);
function addScript(src, resolusi) {
	var clientWidth = $(window).width();
    if(clientWidth >= resolusi)
    {
		if (!document.getElementsByTagName || !document.createElement || !document.appendChild) {
		return false;
		} else {
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.src = src;
		document.getElementsByTagName("head")[0].appendChild(script);
		return true;
		}	
    };
}$(document).ready(function() {
	var secondary = $(".secondary").html();
	var primary = $(".primary").html();
	$("#menu").html('<h3>Menu</h3><ul>'+secondary+primary+'</ul>');
	var deskripsi = $(".deskrip").html();
	$(".deskripsi").html(deskripsi);
	var harga = $(".harga").html();
	$(".price").html(harga);
	$('a[href=#top]').click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
        return false;
    });
});
function swipe()
{
	if($("#wrapper").css("left") == '0px')
	{
		$("#wrapper").fadeIn(300).animate({'left':'220px'},{queue:false,duration:150});
		$("#wrapper").attr('onclick','swipe()');
	}
	else
	{
		$("#wrapper").fadeIn(300).animate({'left':'0px'},{queue:false,duration:150});
		$("#wrapper").removeAttr('onclick');
	}
};
function review(tipe)
{
	if(tipe == 'deskripsi')
	{
		$("#deskripsi").addClass('active');
		$(".deskripsi").show();
		$("#review").removeClass('active');
		$(".review").hide();
	}
	else if(tipe == 'review')
	{
		$("#deskripsi").removeClass('active');
		$(".deskripsi").hide();
		$("#review").addClass('active');
		$(".review").show();
	}
}
