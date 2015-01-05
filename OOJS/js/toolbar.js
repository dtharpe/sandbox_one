var oojs = (function(oojs){

	var createToolbarItems = function(itemElements){
		
		var items = [];

		[].forEach.call(itemElements, function(el, index, arrray){

			// var item = {

			// 	el : el,
			// 	disable : function(){
			// 		this.el.classList.add("disabled");
			// 	},
			// 	enable: function(){
			// 		this.el.classList.remove("disabled");
			// 	},
			// 	isDisabled: function(){
			// 		return this.el.classList.contains("disabled");
			// 	},
			// 	activate: function(){
			// 		if(this.isDisabled()) {
			// 			return;
			// 		}

			// 		this.el.classList.add("active");
			// 	},
			// 	deactivate: function(){
			// 		if(this.isDisabled()) {
			// 			return;
			// 		}

			// 		this.el.classList.remove("active");
			// 	},
			// 	isActive: function(){
			// 		return this.el.classList.contains("active");
			// 	},
			// 	toggleActiveState: function(){
			// 		if(this.isActive()){
			// 			this.deactivate();
			// 		}else{
			// 			this.activate();
			// 		}
			// 	}

			// };//item

			var item = {
				toggleActiveState: function(){
					this.activated = !this.activated;
				}
			};

				Object.defineProperties(item,{
					el: {
						value: el
					},
					enabled: {
						get: function(){
							return !this.el.classList.contains('diabled');
						},
						set: function(value){
							if(value){
								this.el.classList.remove("disabled");
							}else{
								this.el.classList.add("disabled");
							}
						}
					},
					activated: {
						get: function(){
							return this.el.classList.contains('active');
						},
						set: function(value){
							if(value){
								this.el.classList.remove("active");
							}else{
								this.el.classList.add("active");
							}
						}
					}
			});

			items.push(item);

		});


		return items;
	};

	oojs.createToolbar = function(elementID){
		var element = document.getElementById(elementID);
		var items = element.querySelectorAll(".toolbar-item");

		return {
			items : createToolbarItems(items)
		};
	};

	
	return oojs;

}(oojs || {}));

