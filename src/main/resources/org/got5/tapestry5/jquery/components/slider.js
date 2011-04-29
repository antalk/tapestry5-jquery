(function( $ ) {
$.extend(Tapestry.Initializer, {
    slider: function(specs) {
		var options={
			slide:function(e,u){
				$("#" + specs.id+"-field").val(u.value);
			}, 
			change:function(e,u){
				if(specs.url) 
					$("#" + specs.zoneId).tapestryZone("update", {
						url: specs.url+"?slider="+u.value
					});
			}
		};
        $("#" + specs.id+"-slider").slider(specs.params).slider("option", options);	
    }
});
}) ( jQuery );