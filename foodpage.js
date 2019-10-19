var slider,prev_btn,next_btn,x=0,x2=0;
function website_initialize(){
	slider = document.getElementById('slider');
	slider2 = document.getElementById('slider2');
	prev_btn = document.getElementById('prev');
	next_btn = document.getElementById('next');
	prev2_btn = document.getElementById('prev2');
	next2_btn = document.getElementById('next2');

	prev_btn.addEventListener("click",function(){
		prevslide();
	});
	next_btn.addEventListener("click",function(){
		nextslide();
	});

	prev2_btn.addEventListener("click",function(){
		prevslide2();
	});
	next2_btn.addEventListener("click",function(){
		nextslide2();
	});
}
function nextslide(){
	if(x == 0){
		slider.style.marginLeft = "calc(250px * (-5))";
		next_btn.style.display = 'none';
		prev_btn.style.display = 'flex';
		x=1;
	}
}
function prevslide(){
	if(x == 1){
		slider.style.marginLeft = "3%";
		prev_btn.style.display = 'none';
		next_btn.style.display = 'flex';
		x=0;
	}
}

function nextslide2(){
	if(x2 == 0){
		slider2.style.marginLeft = "calc(250px * (-5))";
		next2_btn.style.display = 'none';
		prev2_btn.style.display = 'flex';
		x2=1;
	}
}
function prevslide2(){
	if(x2 == 1){
		slider2.style.marginLeft = "3%";
		prev2_btn.style.display = 'none';
		next2_btn.style.display = 'flex';
		x2=0;
	}
}





window.onload = website_initialize;