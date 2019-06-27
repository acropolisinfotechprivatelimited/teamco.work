$(document).ready(function()
                  {
    $(window).on("scroll",function()
                {
        let top=$(this).scrollTop();
        if(top > 10)
            {
                $(".top-nav").addClass("sticky");
            }
        else{
              $(".top-nav").removeClass("sticky");
            
        }
    })
    $(".about-section").on("click",function(e)
{
  
    let top=parseFloat(($("#about").offset().top)-50);
    console.log(top);
     $('html, body').animate({
    scrollTop:top
  }, 1000, function(){

})
}); 

$(".pricing-section").on("click",function(e)
{
  
    let top=parseFloat(($("#pricing").offset().top)-50);
    console.log(top);
     $('html, body').animate({
    scrollTop:top
  }, 1000, function(){

})
}); 

$(".home-section").on("click",function(e)
{
  
    let top=parseFloat(($("#home").offset().top)-50);
    console.log(top);
     $('html, body').animate({
    scrollTop:top
  }, 1000, function(){

})
}); 
$(".talkUs").on("click",function(e)
{
    let top=parseFloat(($("#home").offset().top)-50);
    console.log(top);
     $('html, body').animate({
    scrollTop:top
  }, 1000, function(){

})
}); 
})
