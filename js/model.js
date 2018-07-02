
 $( document ).ready(function() {
 
  
$("#myBtn").click(function(){
    $("#myModal").css('display','block');
});




$(".close").click(function(){

   $("#myModal").css('display','none');
});


$(window).click(function(e) {

if(e.target.id == "myModal"){
      $("#myModal").css('display','none');
}

});

});