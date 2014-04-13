var xhr = (function(){
	var module={};
	module._init=function(){
		return new XMLHttpRequest();
	};
	module._onready=function(ajax,callback){
		ajax.onreadystatechange=function(){
			if(ajax.readyState===4 && ajax.status===200){
				callback(ajax.responseText);
			};
		};
	};
	module.get=function(url,callback){
		var ajax=module._init();
		ajax.open('GET',url);
		module._onready(ajax,callback);
		ajax.send();
	};
	return {
		get: module.get
	};
}());
