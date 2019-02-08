//js
$(document).ready(()=>{
  $(".full-view").css("height",window.innerHeight+"px");
  $("body").prepend(`<nav class='main-nav'><ul><li> HOME </li><li> USAGE </li><li> ABOUT </li></ul><button class='burger fas fa-bars' value='false'></button></nav><div class='ddlsup full-view'></div><ul class='ddl full-view' ><i class='fas fa-times-circle' onclick="$('.burger').trigger('click')" style="
    position: relative;
    left: 70%;
    font-size: 20px;
"></i></ul>`);
  $('body').append("<footer class='main-footer full-view'><div class='footer-cell'><img src='images/ioticon.png' style='position:relative;border-radius:50%;width:100px;height:100px;top:40%;left:40%'/><img src='images/ioticon.png' style='position:relative;border-radius:50%;width:100px;height:100px;'></div><div class='footer-cell' style='padding: 15px 0px 0px 5px;'><a class='fab fa-facebook-square'><b> Find us on Facebook!</b></a> <br /><a class='fas fa-globe-americas'> Visit our website</a> <br /></div><div class='footer-cell'><input type='text' placeholder='Feedback' class='feed' /><button class='sendmail'>Send</button><hr /> Copyright (c) 2019 MCICTS All Rights Reserved.<div></footer>");
  $(".burger").click(()=>{
    $(".ddlsup").animate({"left":$(".burger").attr("value")=="false"?"0%":"100%"},400);
    $(".ddl").animate({"left":$(".burger").attr("value")=="false"?"60%":"100%"},400);
    $(".burger").css("color",$(".burger").attr("value")=="false"?"black":"white");
    $(".burger").attr("value",$(".burger").attr("value")=="false"?"true":"false");
  });
  $(".ddl > li").click(()=>{
    $(".ddlsup").animate({"left":"100%"},400);
    $(".ddl").animate({"left":"100%"},400);
    $(".burger").attr("value","false");
  });
  $(".ddlsup").click(()=>$(".burger").trigger("click"));
});
