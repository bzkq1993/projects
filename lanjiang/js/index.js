var mainTop = $('#main').offset().top - 70;
var teamTop = $('#team').offset().top - 70;
var caseTop = $('#case').offset().top - 70;
var newsTop = $('#news').offset().top - 70;
var contactTop = $('#contact').offset().top - 70;
$(document).scroll(function() {
	var curtop = $(document).scrollTop() + 2;
//	console.log(curtop);
//	console.log(contactTop)
	if(curtop < mainTop) {
		$('.nav-bcg').removeClass();
		$('.upper').css('display','none');
	}
	if(curtop < teamTop && curtop > mainTop) {
		$('.nav-bcg').removeClass();
		$('.nav-ul li').eq(0).addClass('nav-bcg');
	}
	if(curtop < caseTop && curtop > teamTop) {
		$('.nav-bcg').removeClass();
		$('.nav-ul li').eq(1).addClass('nav-bcg');
	}
	if(curtop < newsTop && curtop > caseTop) {
		$('.nav-bcg').removeClass();
		$('.nav-ul li').eq(2).addClass('nav-bcg');
	}
	if(curtop < contactTop && curtop > newsTop) {
		$('.nav-bcg').removeClass();
		$('.nav-ul li').eq(3).addClass('nav-bcg');
	}
	if(curtop > contactTop - 302) {
		$('.nav-bcg').removeClass();
		$('.nav-ul li').eq(4).addClass('nav-bcg');
	}
	if(curtop > mainTop) {
		$('.upper').css('display','block');
	}
})
var str = [mainTop, teamTop, caseTop, newsTop, contactTop]
$('.nav-ul').on('click', 'li', function() {

	var index = $(this).index();
	$('.nav-bcg').removeClass();
	$('.nav-ul li').eq(index).addClass('nav-bcg');
	$(document).scrollTop(str[index]);
})

window.onload = function() {
				var ul = document.getElementsByClassName('ul')[0];
				var lis = document.getElementsByClassName('li');
				var liWidth = lis[0].offsetWidth;
				var isSliding = false;
				var timer;

				//inis
				var tailLi = lis[0].cloneNode(true);
				ul.appendChild(tailLi);
				var headLi = lis[4].cloneNode(true);
				ul.insertBefore(headLi, lis[0]);
				ul.style.width = lis.length * liWidth + 'px';
				ul.style.left = -liWidth + 'px';

				//bind
				document.getElementById('news').style.width = liWidth + 'px';
				document.getElementsByClassName('prev')[0].onclick = function() {
					if(!isSliding) {
						slidePrev();
					}

				}
				document.getElementsByClassName('next')[0].onclick = function() {
					if(!isSliding) {
						slideNext();
					}
				}

				var bullets = document.getElementsByClassName('bullet');
				for(var i = 0; i < bullets.length; i++) {
					bullets[i].index = i;
					bullets[i].onclick = function() {
						if(!isSliding) {
							currentIndex = this.index + 1;
							slideTo(currentIndex);
						}
					}
				}

				//functions

				var currentIndex = 0;

				function slideTo(index) {
					isSliding = true;
					clearTimeout(timer);
					animation.animate(ul, {
						left: -(index * liWidth)
					}, function() {
						if(currentIndex === lis.length - 1) {
							currentIndex = 1;
							ul.style.left = -liWidth + 'px';
						}
						if(currentIndex === 0) {
							currentIndex = lis.length - 2;
							ul.style.left = -(currentIndex * liWidth) + 'px';
						}
						document.getElementsByClassName('focus')[0].className = 'bullet';
						document.getElementsByClassName('bullet')[currentIndex - 1].className = 'bullet focus';

						ul.onmouseover = function() {
							clearTimeout(timer);
						}

						isSliding = false;
					})

				}
				//slideTo(2);
				function slideNext() {
					currentIndex++;
					slideTo(currentIndex);
				}
				slideNext();

				function slidePrev() {
					currentIndex--;
					slideTo(currentIndex);
				}
			}
