$(document).ready(function(){
  $('.btn').off('click').click(function(){
    $(".input").addClass("active").focus;
    $(this).addClass("animate");
    $(".input").val("");
    
    //if enter is pressed instead of clicking search  
    $("#searchTerm").keyup(function(event) {
      if (event.keyCode == 13) {
      $(".btn").click();
        }
      });
    
    $('.btn').off('click').click(function(){
      var searchTerm = $('.input').val();
      var apiURL = "http://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?";

      $.ajax({
    url: "https://en.wikipedia.org/w/api.php",
    jsonp: "callback",
    dataType: "jsonp",
    data: {
        action: "opensearch",
        search: searchTerm,
        format: "json"
    },
    success: function(data) {
        
        for(var i = 0; i<data[1].length; i++){
          $('#display-result').prepend("<li><a href="+data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
        }
    },
    error: function(errorMessage) {
        alert(errorMessage);
    }
});
     
    });
  });
});

  