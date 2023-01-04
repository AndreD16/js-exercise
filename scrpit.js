$(document).ready(function() {
    $("#hidden").hover(function() {
        $(this).css("color", "black");
        
    },
    function() {
        $(this).css("color", "white");

    })
})


$(document).ready(function(){
    $("but").click(function(){
        $(".but-2").hide();
      });

    });



$(document).ready(function(){

$("but-1").click(function(){
    $(".but-2").show();
  });

});