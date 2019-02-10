//js
var conts;
window.onbeforeunload = () =>  {
  window.scrollTo(0, 0);
}
$(document).ready(()=>{
  $(document).scrollTop(0);
  $(".full-view").css("height",window.innerHeight+"px");
  $(".p").css("max-height",window.innerHeight-150+"px");
  /*if($(".full-view").hasChild("half-view")) {
    $(".full-view").css({"display":"grid"});
  }*/
  $("body").prepend(`<nav class='main-nav'><ul><li> HOME </li><li> USAGE </li><li> ABOUT </li></ul><button class='burger fas fa-bars' value='false'></button></nav><div class='ddlsup full-view'></div><ul class='ddl full-view' ><i class='fas fa-times-circle' onclick="$('.burger').trigger('click')" style="
    position: relative;
    left: 90%;
    font-size: 20px;
"></i></ul>`);
  $('body').append(`<footer class='main-footer' style="height:`+window.innerHeight+`px">
      <div class='footer-cell logobar'>
        <img src="images/ioticon.png" alt="">
        <img src="images/ioticon.png" alt="">
      </div>
      <section class="contact">
      <div class="footer-cell">
        <a class="fab fa-facebook-square s-media" href="" > Find us on Facebook!</a><br>
        <a class="fab fa-twitter-square s-media" href=""> Follow us on Twitter</a><br>
        <a class="fab fa-google-plus-square s-media" href=""> Follow us on G+</a><br>
        <a class="fas fa-globe-americas s-media" href=""> Visit our website</a><br>

      </div>
      <div class="footer-cell">
        <input type="text" id="feed" placeholder="feedback"><button id="submit" onclick="sendMail()"><i class="fas fa-envelope"></i></button>
        <br><br><br><hr>
        &copy; Copyright MCICTS `+new Date().getFullYear()+`
      </div>
      <!--/section-->
    </footer>`);
    conts = Array.prototype.slice.call($(".cont"));
    $(".cont:nth-child(even)").animate({left:"-100%"},1);
    $(".cont:nth-child(odd)").animate({left:"100%"},1);
    $(".cont").css("transition-duration","4s");

    $(".burger").click(()=>{
    $(".ddlsup").animate({"left":$(".burger").attr("value")=="false"?"0%":"100%"},400);
    $(".ddl").animate({"left":$(".burger").attr("value")=="false"?"60%":"100%"},400);
    $(".burger").css("color",$(".burger").attr("value")=="false"?"black":"white");
    $(".burger").attr("value",$(".burger").attr("value")=="false"?"true":"false");
  });

  $(".ddlsup").click(()=>$(".burger").trigger("click"));
  $("#feed").on("change",()=>sendMail());

  $(window).scroll(()=>{
    $("#"+$(conts[Math.floor(((document.documentElement.scrollTop||document.body.scrollTop)+50)/scroll)]).attr("id")).css({"left":"2.5%"});
    conts[Math.floor(((document.body.scrollTop||document.documentElement.scrollTop)+50)/scroll)] = "";
  });
});

const sendMail = () => {
  window.location = ("mailto:senirupasan@gmail.com?subject=mcicts iot feedback&body="+$("#feed").val());
}
