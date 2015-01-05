function xObject(obj){
	// if(this === window){
	// 	return new xObject(obj);
	// }

	if(typeof obj === 'string'){
		this.el = document.getElementById(obj);
	}else if(typeof obj === "object" && obj.innerHTML !== "undefined"){
		this.el = obj;
	} else{
		throw new Error("Wrong Type");
	}

	this._css = this.el.style;
}

document.onmouseover = function(){
	
};