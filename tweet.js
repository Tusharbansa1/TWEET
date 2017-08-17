$(document).ready(function() {

 var take1 = ["#973C3C", "#97793C" , "#84973C" ,"#3C9744" , "#3C9791" , "#3C6797" , "#613C97" , "#963C97" , "#C84861" ]; 
  
 console.log("this");
  $(".xyz").on('click', function() {
  $.ajaxSetup({cache: false});
    var any = Math.floor(Math.random()*take1.length); 
  var taken = take1[any];
  $(".container").css("color", taken);
  $("body").css("background-color", taken);  
  
 
  
  $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&callback=", function(data) {
    
    $(".quote").html(data[0].content + "~" + data[0].title)
    
   $(".xyz1").on('click', function() {
  var myUrl = 'https://twitter.com/intent/tweet?text=' + data[0].content + "~" + data[0].title;
    window.open(myUrl, 'twitter');
    return false;
    
    
    
  });// end of getJSON
   
});
  
  
}); // end of getQuote function
  

 
  
}); //end


  

