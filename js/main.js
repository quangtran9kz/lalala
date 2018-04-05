/*Thông báo */
$(document).ready(function() {
	var bien = 0;
	const buoc = 5;
	var span = $("div.thongbao > span");
	var play = function() {
		if (bien + span.outerWidth() <= 0)
			bien = $("div.thongbao").outerWidth();
		
		bien -= buoc;
		span.css("left", bien);
	};
	var timer = setInterval(play, 50);
	$("div.thongbao").on({
		mouseenter: function() {
			clearInterval(timer);
		},
		mouseleave: function() {
			timer = setInterval(play, 50);
		}
    });
});
/* */
function check()
{
	var text=document.getElementById("input");
	console.log(text.value);
	if (text.value == "") {
		//aHTML.style.border = "2px solid red";
		var count = 0;
		var timer = setInterval(function() {
			if (text.style.border == "")
				text.style.border = "2px solid blue";
			else
				text.style.border = "";
				
			count++;
			if (count == 6) {
				clearInterval(timer);
				count = 0;
				text.style.border = "";
			}
		}, 500);
	}
}