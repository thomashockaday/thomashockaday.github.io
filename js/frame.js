var verticalCarousels = document.querySelectorAll(".vertical-carousel");

verticalCarousels.forEach(function(item){
	var itemHeight = item.offsetHeight;
	var topVal = 0;
	item.style.lineHeight = itemHeight + "px";
	var items = item.querySelectorAll("li");
	var interval = window.setInterval(function(){
		topVal -= itemHeight;
		if(topVal <= -(items.length * itemHeight)){
			topVal = 0;
		}
		items.forEach(function(li){
			li.style.top = topVal + "px";
		});
	}, 1600);
});