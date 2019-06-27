$(document).ready(function()
                  {
    var area=0.5,seats=5000,center=20,cities=9,clients=200,counterSeat=0,counterCenter=0,counterClient=0;
    var seatCounterInterval=null,centerCounterInterval=null,clientCounterInterval=null;
    var updateSeatByOne=function()
    {
        if(counterSeat < seats)
            {
        counterSeat=counterSeat+100;
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
            }
        else{
              $(".top-nav").removeClass("sticky");
            
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
