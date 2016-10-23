/* ***mySlider,mySwiper*** */
var mySlider, mySwiper;

function sliderSwiper() {
	$.ajax({
		type: "get",
		url: "http://datainfo.duapp.com/shopdata/getBanner.php",
		dataType: "JSONP",
		success: function(data) {
			//						console.log(typeof data);
			//						console.log(data);
			if(data) {
				$('.sliderWra').html('');
				var tmpStr = "";
				for(var i = 0; i < data.length; i++) {
					var imgArray = JSON.parse(data[i].goodsBenUrl);
					//								console.log(imgArray);
					tmpStr += "<div class='swiper-slide'>";
					tmpStr += "<img src='" + imgArray[0] + "' />";
					tmpStr += "</div>";
				}
				$('.sliderWra').html(tmpStr);
				mySlider = new Swiper('.sliderCont', {
					autoplay: 3000, //自动切换
					direction: 'horizontal',
					pagination: '.pagc',
					paginationClickable: true, //点击分叶器是切换
				});
			}
		}
	});
};

function listSwiper() {
	$.ajax({
		type: 'POST',
		url: 'http://datainfo.duapp.com/shopdata/getGoods.php',
		dataType: 'JSONP',
		success: function(data) {
			console.log(data);
			if(data) {
				var tmpStr = '';
				for(var k = 0; k < data.length; k++) {
					tmpStr += '<div class="swiper-slide listSd" goodsid="' + data[k].goodsID + '">';
					tmpStr += '<div class="box-pic">';
					tmpStr += '<img src=' + data[k].goodsListImg + ' />';
					tmpStr += '</div>';
					tmpStr += '<div class="box-r">';
					tmpStr += '<div class="r-box">';
					tmpStr += '<div class="r-box-t">';
					tmpStr += '<span>' + data[k].goodsName + '</span>';
					tmpStr += "</div>";
					tmpStr += '<div class="r-box-b">';
					tmpStr += '<div class="box-b-l">';
					tmpStr += '<span>¥' + data[k].price + '</span>';
					if(data[k].discount != 0) {
						tmpStr += '<span>¥' + parseInt((data[k].price / data[k].discount) * 100) + '</span>';

					} else {
						tmpStr += '<span>¥' + data[k].price + '</span>';
					}
					tmpStr += '<span >' + data[k].discount + '折</span>';
					tmpStr += '</div>';
					tmpStr += '<div class = "box-b-r" >';
					tmpStr += '<button class="icon iconfont cart">&#xe607;</button>';
					tmpStr += '</div>';
					tmpStr += '</div>';
					tmpStr += '</div>';
					tmpStr += '</div>';
					tmpStr += '</div>';
				}

				$('.listCont .listWra').append(tmpStr);
				mySwiper = new Swiper('.listCont', {
					direction: 'vertical', //垂直/水平horizontal滑动
					slidesPerView: 'auto', //显示slide数量
					spaceBetween: 1, //slide之间的间距
					freeMode: true, //设置滑动1次/自动
				});

				sliderSwiper();
			}
		}
	})
};
listSwiper();

/* ***点击商品列表跳转详情页*** */

$(document).on('click tap', '.listWra .swiper-slide .box-pic', function() {
		var gid = $(this).parent().attr("goodsid");
		var tmpGoodID = gid;
		console.log(tmpGoodID);
		sessionStorage.setItem('tmpGoodID', tmpGoodID);
		window.location.href = "detail.html";

	})
	/* ***点击购物车添加商品*** */
$(document).on('click tap', '.cart', function() {
	var tmpUser = sessionStorage.getItem('tmpuserID');
	console.log(tmpUser);
	var tmpGoodID = $(this).parent().parent().parent().parent().parent('.listSd').attr("goodsid");
	console.log(tmpGoodID);
	if(tmpUser) {
		$.ajax({
			type: "get",
			url: "http://datainfo.duapp.com/shopdata/updatecar.php",
			data: {
				userID: tmpUser,
				goodsID: tmpGoodID,
				number: 1
			},
			success: function(data) {
				console.log(data);
				if(data == 1) {
					$('#show-cart').show();
					var timer = setTimeout(function() {
						$("#show-cart").hide();
					},500)
				}
			}
		});
	} else {
		$('#show-cart').html('请登录!').show();
		var timer2 = setTimeout(function() {
			$("#show-cart").hide();
			$('.change').load('login.html');
		},1000)
		
	}
});

/* ***获取用户名** */
var tmpUserID = sessionStorage.getItem('tmpuserID');
console.log(tmpUserID);
if(!(tmpUserID == null)) {
	$('.user-h').html('用户:' + tmpUserID);
}