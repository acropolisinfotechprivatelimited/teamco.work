$(document).ready(function()
                  {
    $(".loading-container-speed").hide();
    var mobile_menu=1;
    
    
    /* script for mobile menu toggle button */
    
    $(".menu-button").on("click",function()
                        {
        mobile_menu++;
        console.log(mobile_menu%2);
        $(".mobile-menu-list").slideToggle(500);
        if((mobile_menu%2) == 0)
            {
                $(".menu-button i").attr("class","fa fa-times");
            }
        else{
            $(".menu-button i").attr("class","fa fa-align-justify");
        }
        
    })
    var area=0.5,seats=1000,center=11,cities=8,clients=100,counterSeat=0,counterCenter=0,counterClient=0;
    var seatCounterInterval=null,centerCounterInterval=null,clientCounterInterval=null;
    var updateSeatByOne=function()
    {
        if(counterSeat < seats)
            {
        counterSeat=counterSeat+10;
        $(".counter.seats").text(counterSeat);
        if(counterSeat >= seats)
            {
                clearInterval(seatCounterInterval);
            }
            }
    }
      var updateCenterByOne=function()
    {
        if(counterCenter < center)
            {
        counterCenter=counterCenter+1;
        $(".counter.business-center").text(counterCenter);
        if(counterCenter >= center)
            {
                clearInterval(centerCounterInterval);
            }
            }
    }
       var updateClientByOne=function()
    {
        if(counterClient < clients)
            {
        counterClient=counterClient+1;
        $(".counter.clients").text(counterClient);
        if(counterClient >= clients)
            {
                clearInterval(clientCounterInterval);
            }
            }
    }
    
    $(window).on("scroll",function()
                {
        let top=$(this).scrollTop();
        let counterContainer=$(".counter-container").position().top;
        if(top > 10)
            {
                $(".top-nav").addClass("sticky");
                $(".scroll-top-button").show();
            }
        else{
              $(".top-nav").removeClass("sticky");
             $(".scroll-top-button").hide();
            
        }
        if(top >counterContainer-300)
            {
                seatCounterInterval=setInterval(updateSeatByOne,100);
                centerCounterInterval=setInterval(updateCenterByOne,100);
                clientCounterInterval=setInterval(updateClientByOne,50);
            }
        else{
            console.log("Counter Not Reached");
        }
    })
    $(".about-section").on("click",function(e)
{
        $(".pagelink-container li").removeClass("active");
        $(this).addClass("active");
  
    let top=parseFloat(($("#about").offset().top)-50);
    console.log(top);
     $('html, body').animate({
    scrollTop:top
  }, 1000, function(){

})
}); 

$(".pricing-section").on("click",function(e)
{
     $(".pagelink-container li").removeClass("active");
        $(this).addClass("active");
    let top=parseFloat(($("#pricing").offset().top)-50);
    console.log(top);
     $('html, body').animate({
    scrollTop:top
  }, 1000, function(){

})
}); 
$(".pricing-section").on("click",function(e)
{
  
       $(".pagelink-container li").removeClass("active");
        $(this).addClass("active");
    let top=parseFloat(($("#pricing").offset().top)-50);
    console.log(top);
     $('html, body').animate({
    scrollTop:top
  }, 1000, function(){

})
}); 
$(".event-section").on("click",function(e)
{
   $(".pagelink-container li").removeClass("active");
        $(this).addClass("active");
  
    let top=parseFloat(($("#event").offset().top)-50);
    console.log(top);
     $('html, body').animate({
    scrollTop:top
  }, 1000, function(){

})
}); 
$(".contact-section").on("click",function(e)
{
       $(".pagelink-container li").removeClass("active");
        $(this).addClass("active");
  
    let top=parseFloat(($("#contact").offset().top)-50);
    console.log(top);
     $('html, body').animate({
    scrollTop:top
  }, 1000, function(){

})
}); 

$(".home-section,.scroll-top-button").on("click",function(e)
{
       $(".pagelink-container li").removeClass("active");
        $(".home-section").addClass("active");
  
    let top=parseFloat(($("#home").offset().top)-50);
    console.log(top);
     $('html, body').animate({
    scrollTop:top
  }, 1000, function(){

})
}); 
$(".join-now").on("click",function(e)
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
