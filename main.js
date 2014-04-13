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
	module.post=function(url,data,callback){
		var ajax=module._init();
		ajax.open('POST', url);
		module._onready(ajax,callback);
		ajax.setRequestHeader("Content-Type", "application/json");
		ajax.send(data);
	},
	module.put=function(url,data,callback){
		var ajax=module._init();
		ajax.open('PUT', url);
		module._onready(ajax,callback);
		ajax.setRequestHeader("Content-Type", "application/json");
		ajax.send(data);
	},
	module.delete=function(url,callback){
		var ajax=module._init();
		ajax.open('DELETE',url);
		module._onready(ajax,callback);
		ajax.send();
	};
	return {
		get: module.get,
		post: module.post,
		put: module.put,
		delete: module.delete
	};
}());