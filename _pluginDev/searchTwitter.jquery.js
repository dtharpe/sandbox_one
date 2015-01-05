if(typeof Object.create !== 'function'){
	Object.create = function(obj){
		function F() {};
		F.prototype = obj;
		return new F();
	};
}

//Self Executing Function - Plugin Inside
(function($, window, document, undefined){

	  //Object Built
	  var Twitter = {

			init: function(options, elem){
				
				var self = this;
				self.elem = elem;
				self.$elem = $(elem);

				self.url = 'http://search.twitter.com/search.json';

				if(typeof options === 'string'){
					self.search = options;
				} else {
					self.search = options.search;
				}
				
				self.options = $.extend( {}, $.fn.queryTwitter.options, options );

				self.refresh(length);
			},

			refresh: function(){
				var self = this;

					setTimeout(function(){
						
						self.fetch().done(function(results){
						
							results = self.limit(results.results, self.options.limit);
							
							self.buildFrag(results);
							
							self.display();

							if(typeof self.options.onComplete === 'function'){
								self.options.onComplete.apply(self.elem, arguments);
							}

							if(self.option.refresh){
								self.refresh();							
							}

					    });
					}, length || self.options.refresh);
			},
			
			fetch: function() {
				return $.ajax({
					url: this.url,
					data: {
						q: this.search
					},
					dataType: 'jsonp'
				});
				
			},

			buildFrag: function(results){
				var self = this;

				self.tweets = $.map(results, function(obj, i){
					return $(self.options.wrapEachWith).append(obj.text)[0];
				});
			},

			display: function(){
				var self = this;

				if(self.options.transition === 'none' || !self.options.transition){
					self.$elem.html(self.tweets);
				}
				else{
					self.elem.[self.options.transition](500, function(){
						$(self).html(self.tweets).[self.options.transition](500);
					});
				}
			},

			limit: function(obj, count){
				return obj.slice(0, count);
			}
		};

		//Plugin Call to Function
		$.fn.queryTwitter = function(options){
			return this.each(function(){

				var twitter = Object.create(Twitter);
				twitter.init(options, this);

				$.data(this, 'queryTwitter', twitter);
			});
		};

		//Plugin options
		$.fn.queryTwitter.options = {
			search: '@tutspremium',
			wrapEachWith: '<li></li>',
			limit: 10,
			refresh: null,
			onComplete: null
			//transition:
		};


})(jQuery, window, document);


