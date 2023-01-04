$(document).ready(function() {
    $("#hidden").hover(function() {
        $(this).css("color", "black");
        
    },
    function() {
        $(this).css("color", "white");

    })
})


$(document).ready(function(){
    $("#button1").click(function(){
        $("button3").hide();
      });

    });



$(document).ready(function(){

$("button2").click(function(){
    $("button3").show();
  });

});