$( document ).ready(function() {
		$('#headingOne').bind("click",collapse);
		$('#headingTwo').bind("click",collapse);
		$('#headingThree').bind("click",collapse);

		function collapse(){
			var Collapseid=this.id+'Collapse';
			var a= $("div[id$='Collapse']");
			$('#'+Collapseid).slideToggle(300);

		$.each( a, function( id ) {
		 
		if(a[id]["id"] != Collapseid){
			$('#'+a[id]["id"]).hide();
		}

		});


		}

	});