//js
$(document).ready(()=>{
  $(".full-view").css("height",window.innerHeight+"px");
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
