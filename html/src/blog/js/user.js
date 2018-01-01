function publish() {
	$.post(path+"/user/publish",null,function(res){
		document.getElementById("publish").innerHTML=res;
	});
}
function updateuser() {
	$.post(path+"/user/updateuser",null,function(res){
		document.getElementById("publish").innerHTML=res;
	});
}
		