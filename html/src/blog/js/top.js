(function () {
	$.post(path+"/user/login_info",null,function(res){
		document.getElementById("login").innerHTML=res;
	});
	if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
		window.location.href="/mwebgxblog";
	}
})();
		