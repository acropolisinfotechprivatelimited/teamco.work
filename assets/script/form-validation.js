jQuery(document).ready(function()
{
    var show_error=function(element)
   {
       jQuery(element).css("border","1px solid red");
       console.log("error at"+element);
   }
   var hide_error=function(element)
   {
       jQuery(element).css("border","1px solid #ccc");
       console.log("error removed  at"+element);
   }
   
   $(".desktop_mobile").on("change",function()
   {
       number_validation();
   })
    $(".mobile_mobile").on("change",function()
   {
       number_validation_mobile();
   })
    $(".inquire_mobile").on("change",function()
   {
       number_validation_inquire();
   })
   $(".desktop_email").on("change",function()
   {
       email_validation();
   })
     $(".inquire_email").on("change",function()
   {
       email_validation_inquire();
   })
     $(".mobile_email").on("change",function()
   {
       email_validation_mobile();
   })
   //validation in contac form
   
   var number_validation=function()
   {
       let mobile_number=jQuery(".desktop_mobile").val();
       console.log(mobile_number);
       if(mobile_number.length <= 0 || mobile_number.length > 12)
       {
           show_error(jQuery(".desktop_mobile"));
           return false;
           
           
       }
       else if(mobile_number.length > 0 && mobile_number.length < 10)
       {
            show_error(jQuery(".desktop_mobile"));
           return false;
       }
       else
       {
           hide_error(jQuery(".desktop_mobile"));
           return true;
             
       }
   }
     var number_validation_inquire=function()
   {
       let mobile_number=jQuery(".inquire_mobile").val();
       console.log(mobile_number);
       if(mobile_number.length <= 0 || mobile_number.length > 12)
       {
           show_error(jQuery(".inquire_mobile"));
           return false;
           
           
       }
       else if(mobile_number.length > 0 && mobile_number.length < 10)
       {
            show_error(jQuery(".inquire_mobile"));
           return false;
       }
       else
       {
           hide_error(jQuery(".inquire_mobile"));
           return true;
             
       }
   }
       var number_validation_mobile=function()
   {
       let mobile_number=jQuery(".mobile_mobile").val();
       console.log(mobile_number);
       if(mobile_number.length <= 0 || mobile_number.length > 12)
       {
           show_error(jQuery(".mobile_mobile"));
           return false;
           
           
       }
       else if(mobile_number.length > 0 && mobile_number.length < 10)
       {
            show_error(jQuery(".mobile_mobile"));
           return false;
       }
       else
       {
           hide_error(jQuery(".mobile_mobile"));
           return true;
             
       }
   }
   var name_validation=function()
   {
       let first_name=jQuery(".desktop_firstname").val();
       //let last_name=jQuery(".acropolis_lastname").val();
       console.log(first_name);
       if(first_name.length <=0)
       {
             show_error(jQuery(".desktop_firstname"));
               //show_error(jQuery(".acropolis_lastname"));
           return false;
           
       }
       else
       {
            hide_error(jQuery(".desktop_firstname"));
           //hide_error(jQuery(".acropolis_lastname"));
           return true;
            
       }
   }
     var name_validation_inquire=function()
   {
       let first_name=jQuery(".inquire_firstname").val();
       //let last_name=jQuery(".acropolis_lastname").val();
       console.log(first_name);
       if(first_name.length <=0)
       {
             show_error(jQuery(".inquire_firstname"));
               //show_error(jQuery(".acropolis_lastname"));
           return false;
           
       }
       else
       {
            hide_error(jQuery(".inquire_firstname"));
           //hide_error(jQuery(".acropolis_lastname"));
           return true;
            
       }
   }
       var name_validation_mobile=function()
   {
       let first_name=jQuery(".mobile_firstname").val();
       //let last_name=jQuery(".acropolis_lastname").val();
       console.log(first_name);
       if(first_name.length <=0)
       {
             show_error(jQuery(".mobile_firstname"));
               //show_error(jQuery(".acropolis_lastname"));
           return false;
           
       }
       else
       {
            hide_error(jQuery(".mobile_firstname"));
           //hide_error(jQuery(".acropolis_lastname"));
           return true;
            
       }
   }
   var email_validation=function()
   {
       let email=jQuery(".desktop_email").val();
       console.log(email);
       let dot=email.includes(".");
       let at_the_rate=email.includes("@");
       console.log(dot);
       if(email.length > 0 && dot && at_the_rate )
       {
           hide_error(jQuery(".desktop_email"));
           return true;
          
         
       }
       else
       {
             show_error(jQuery(".desktop_email"));
           return false;

             
       }
   }
      var email_validation_inquire=function()
   {
       let email=jQuery(".inquire_email").val();
       console.log(email);
       let dot=email.includes(".");
       let at_the_rate=email.includes("@");
       console.log(dot);
       if(email.length > 0 && dot && at_the_rate )
       {
           hide_error(jQuery(".inquire_email"));
           return true;
          
         
       }
       else
       {
             show_error(jQuery(".inquire_email"));
           return false;

             
       }
   }
         var email_validation_mobile=function()
   {
       let email=jQuery(".mobile_email").val();
       console.log(email);
       let dot=email.includes(".");
       let at_the_rate=email.includes("@");
       console.log(dot);
       if(email.length > 0 && dot && at_the_rate )
       {
           hide_error(jQuery(".mobile_email"));
           return true;
          
         
       }
       else
       {
             show_error(jQuery(".mobile_email"));
           return false;

             
       }
   }
   var form_validation=function()
   {   
       let number_validation_status=number_validation();
       //let password_validation_status=password_validation();
       let name_validation_status=name_validation();
       let email_validation_status=email_validation();
       if(number_validation_status && name_validation_status && email_validation_status)
       {
           return true;
       }
       else
       {
           return false;
       }
   }
    var form_validation_inquire=function()
   {   
       let number_validation_status=number_validation_inquire();
       //let password_validation_status=password_validation();
       let name_validation_status=name_validation_inquire();
       let email_validation_status=email_validation_inquire();
       if(number_validation_status && name_validation_status && email_validation_status)
       {
           return true;
       }
       else
       {
           return false;
       }
   }
     var form_validation_mobile=function()
   {   
       let number_validation_status=number_validation_mobile();
       //let password_validation_status=password_validation();
       let name_validation_status=name_validation_mobile();
       let email_validation_status=email_validation_mobile();
       if(number_validation_status && name_validation_status && email_validation_status)
       {
           return true;
       }
       else
       {
           return false;
       }
   }
   
   
   
     //disable character keys 

   jQuery('[name="mobile"]').keypress(function(key) {
       if(key.charCode == 32)
       {
           return true;
       }
       else if(key.charCode == 8 || key.keyCode == 8)
       {
           return true;
           console.log("Backspace");
       }
        else if(key.charCode < 48 || key.charCode > 57)
           { 
               return false
               
           };
       });
       
                  //disable number keys 
       
   jQuery('[name="name"]').keypress(function(key) {
       if(key.charCode == 32)
           {
               return true;
               console.log("spacebar")
           }
    else if(key.charCode == 8 || key.keyCode == 8)
           {
               return true;
               console.log("Backspace");
           }
   else if((key.charCode < 97 || key.charCode > 122) && (key.charCode < 65 || key.charCode > 90) && (key.charCode != 45))
           {
               return false;
           }

       
       });
   
   jQuery(".contact-form").on("submit",function(e)
      {
                    e.preventDefault();
          if(form_validation())
          {

           console.log("Welcome");
           $(".loading-container.page-loader").show();

            var fd=new FormData(this);
           $.ajax({
               type:"post",
               url:"http://teamcowork.acropolisglobal.com/sendMail.php",
               data:fd,
               contentType: false,
               cache: false,
               processData:false,
               success:function(data)
               {
                   console.log(data);
                    $(".loading-container.page-loader").hide();
                    $("#myModal").modal('show');
                   $(".name").val(" "),
                   $(".mobile").val(" "),
                   $(".email").val(" ")
               }
              
           })
          }
          else
          {
            console.log("Fix Error");
          }
          
      });
     jQuery(".contact-form-mobile").on("submit",function(e)
      {
                    e.preventDefault();
          if(form_validation_mobile())
          {

           console.log("Welcome");
           $(".loading-container.page-loader").show();

            var fd=new FormData(this);
           $.ajax({
               type:"post",
               url:"http://teamcowork.acropolisglobal.com/sendMail.php",
               data:fd,
               contentType: false,
               cache: false,
               processData:false,
               success:function(data)
               {
                   console.log(data);
                    $(".loading-container.page-loader").hide();
                    $("#myModal").modal('show');
                   $(".name").val(" "),
                   $(".mobile").val(" "),
                   $(".email").val(" ")
               }
              
           })
          }
          else
          {
            console.log("Fix Error");
          }
          
      });
    
     jQuery(".inquire-form").on("submit",function(e)
      {
                    e.preventDefault();
          if(form_validation_inquire())
          {

           console.log("Welcome");
           $(".loading-container.page-loader").show();

            var fd=new FormData(this);
           $.ajax({
               type:"post",
               url:"http://teamcowork.acropolisglobal.com/sendinquire.php",
               data:fd,
               contentType: false,
               cache: false,
               processData:false,
               success:function(data)
               {
                   console.log(data);
                    $(".loading-container.page-loader").hide();
                    $("#myModal").modal('show');
                   $(".name").val(" "),
                   $(".mobile").val(" "),
                   $(".email").val(" ")
               }
              
           })
          }
          else
          {
            console.log("Fix Error");
          }
          
      });
})
