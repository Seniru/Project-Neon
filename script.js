//js
$(document).ready(()=>{
  $(".full-view").css("height",window.innerHeight+"px");
  $("body").prepend("<nav class='main-nav'><ul><li>HOME</li><li>USAGE</li><li>ABOUT</li></ul><button class='burger fas fa-bars' value='false'></button></nav><div class='ddlsup full-view'></div><ul class='ddl full-view' ><li><a href='#desc'>WHAT IS IOT?</a></li> <li><a href='#hist'>HISTORY</a></li><li>EXAMPLES</li><li>DAY-TO-DAY EXAMPLES</li><li>PROS AND CONS</li></ul>");
  $('body').append("<footer class='main-footer full-view'><div class='footer-cell'><img src='images/ioticon.png' /></div><div class='footer-cell' style='padding: 15px 0px 0px 5px;'><a class='fab fa-facebook-square'><b> Find us on Facebook!</b></a> <br /><a class='fas fa-globe-americas'> Visit our website</a> <br /></div><div class='footer-cell'><input type='text' placeholder='Feedback' class='feed' /><button class='sendmail'>Send</button><hr /> Copyright (c) 2019 MCICTS All Rights Reserved.<div></footer>");
  $(".burger").click(()=>{
    $(".ddlsup").animate({"left":$(".burger").attr("value")=="false"?"0%":"100%"},400);
    $(".ddl").animate({"left":$(".burger").attr("value")=="false"?"60%":"100%"},400);
    $(".burger").attr("value",$(".burger").attr("value")=="false"?"true":"false");
  });
  $(".ddl > li").click(()=>{
    $(".ddlsup").animate({"left":"100%"},400);
    $(".ddl").animate({"left":"100%"},400);
    $(".burger").attr("value","false");
  });
});
//what do i need to do
