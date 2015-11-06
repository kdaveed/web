var cars  = {
		
		audi : {
			a4 : "AudiA4" ,
			a5 : "AudiA5"
		},

		bmw : {
			three : "bmw3" ,
			five : "bmw4"
		}
}

var div = [];
var buffer;
for(var i = 1 ; i < 7 ; i++){
	div[i] = $("#" + i);
	div[i].click(function(){
		buffer = $(this);
	})
}


$("#red").click(function(){
	buffer.addClass("red");
})





var offerInstance = {

	onLoad: function(){

		this.initObjects();
		this.initEventListeners();
	},
	
	initObjects: function(){
	
		this.resultDiv = $('#resultContainer');
		this.selectedDiv = $("#selectedDiv");
		this.inputField = $('.acUriReceiver');
		this.typeSelector = $('#typeSelector');
		this.textFilter = $('#textFilter');
		this.button = $('#submit');
	},

	initEventListeners: function(){

		this.typeSelector.change(function(){
			console.log($(this).val());
		}),
		
		this.textFilter.keyup(function(){
			
			console.log("muty");

			if($(this).val().length != 1){
				offerInstance.getInstances();
			}
		}),
		
		this.textFilter.focus(function(){
			if($(this).val() == "Filter For label"){
				$(this).val("");
			}
		})
	} 
	
	
	/*
	waitGifDiv : $("<div></div>").
		css("text-align","center").
		append("<span class='alignHelper'></span><img src='" + customFormData.gifPath +"'class='valignMid' width='30px' height='30px' />")
	,
	 
	showWaitGif : function(){
		
		var aux = offerInstance.resultDiv.height();
		offerInstance.resultDiv.empty().
		append(offerInstance.waitGifDiv.height(aux));
	},
	
	addNoResults: function(){
		
		var textFilter;
		var classFilter;
		
		var filterText = offerInstance.textFilter.val();
		var filterStr = filterText == "Filter For label" ? "" : filterText;
		
		if(filterStr.length > 1 ){
			textFilter = " which starts with <i>" + filterStr + "</i>";
		} else {
			textFilter = "";
		}
		
		if($('#typeSelector option:selected').index() != 0){
			
			classFilter = " <i>" + $('#typeSelector option:selected').text() + "</i>";
			
		} else {
			classFilter = "";
		}
		
		var rowDiv = $("<div></div>").
			//addClass("containerClass").
			css("text-align", "center").
			append("There is no" + classFilter + " item to add" + textFilter);
		offerInstance.resultDiv.append(rowDiv);
	},
	
	
	setResultField: function(data){
		
		var labelDiv = $("<div></div>").
		text(data.label).
		addClass("labelDiv");

		var str = data.mst;
		var classDiv = $("<div></div>").
			text(data.mst).
			addClass("classDiv");
		
		var rowDiv = $("<div></div>").
			addClass("containerClass").
			addClass("results").
			mouseover(function(){
				$(this).addClass("hover");
			}).
			mouseout(function(){
				$(this).removeClass("hover");
			}).
			append(labelDiv).
			append(classDiv).
			click(function(num){
				return function(){
					offerInstance.selectDiv($(this),num);
				}
			}(data));
		offerInstance.resultDiv.append(rowDiv);
		
	},
	
	selectDiv: function(div,data){
		
		if(selectedDivId == div.index()){
			
			this.setObjectValueFromExistingUri(null);
			offerInstance.disableSubmit();
			selectedDivId = -1;
			this.selectedDiv.empty();
			this.addAgainMouseEvent(div);
		}else {
		  
		   if(selectedDivId>=0){

			   var old = offerInstance.resultDiv.children().eq(selectedDivId);
			   old.removeClass("hover");
			   this.addAgainMouseEvent(old);
			   this.selectedDiv.empty();
		   }
		   this.createSelectedDiv(data);
		   this.setObjectValueFromExistingUri(data.uri);
		   offerInstance.enableSubmit();
		   selectedDivId = div.index();
		   this.clearmouseEvents(div);	
		}	
	},

	addAgainMouseEvent: function(div){

		div.mouseover(function(){
			$(this).addClass("hover");
		}).mouseout(function(){
			$(this).removeClass("hover");
		});
	},
	
	clearmouseEvents: function(div){	
		$(div).unbind('mouseover mouseout');
	},
		
	setObjectValueFromExistingUri: function(uri){
		
		offerInstance.inputField.val(uri);
	},

	createSelectedDiv: function(data){
		
		var labelDiv = $("<div></div>").
		text(data.label).
		addClass("labelDiv");

		var str = data.mst;
		var classDiv = $("<div></div>").
			text(data.mst).
			addClass("classDiv");
		
		var rowDiv = $("<div></div>").
			addClass("containerClass").
			addClass("selected").
			append(labelDiv).
			append(classDiv);
		
		this.selectedDiv.append(rowDiv);
			
	},
	
    disableSubmit: function() {
		 //Disable submit button until selection made
     this.button.attr('disabled', 'disabled');
     this.button.addClass('disabledSubmit');  
	},
	enableSubmit:function() {
		this.button.removeAttr('disabled');
		this.button.removeClass('disabledSubmit');
	},
	*/
}
 	
offerInstance.onLoad();