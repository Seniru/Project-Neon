//js
$(document).ready(()=>{
  $(".full-view").css("height",window.innerHeight+"px");
  /*if($(".full-view").hasChild("half-view")) {
    $(".full-view").css({"display":"grid"});
  }*/
  $("body").prepend(`<nav class='main-nav'><ul><li> HOME </li><li> USAGE </li><li> ABOUT </li></ul><button class='burger fas fa-bars' value='false'></button></nav><div class='ddlsup full-view'></div><ul class='ddl full-view' ><i class='fas fa-times-circle' onclick="$('.burger').trigger('click')" style="
    position: relative;
    left: 70%;
    font-size: 20px;
"></i></ul>`);
  $('body').append(`<footer class='main-footer' style="height:`+window.innerHeight+`px">
      <div class='footer-cell logobar'>
        <img src="images/ioticon.png" alt="">
        <img src="images/ioticon.png" alt="">
      </div>
      <section class="contact">
      <div class="footer-cell">
        <a class="fab fa-facebook-square"> Find us on Facebook!</a><br>
        <a class="fas fa-globe-americas">Visit our website</a>
      </div>
      <div class="footer-cell">
        <input type="text" id="feed" placeholder="feedback"><button id="submit">Send</button>

      </div>
      <!--/section-->
    </footer>`);


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
