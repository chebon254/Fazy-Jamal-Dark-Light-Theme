// == Theme Change Script == //
function setThemePreference() {
  var d = new Date();
  /*
  * The getHours() method returns the hour (from 0 to 23) of the specified date and time.
  * Early mornig = 0 - 6
  * Morning = 6 - 12
  * Evening = 12 - 18
  * Night = 18 - 23
  */
  var currentHour = d.getHours();  
  console.log("Hour: " + currentHour);
  
  if(currentHour >= 19 || currentHour <= 6) {
    document.getElementsByClassName('menu-bar').setAttribute("data-theme", "dark_theme") 
  }else {
    document.getElementsByClassName('menu-bar').setAttribute("data-theme", "light_theme") 
  }
}

window.onload = setThemePreference;
// == End of Theme Change Script == //

// ########################## Modal Manipulation ##########################

/*$(window).scroll(function(){
  var scrolled = $(window).scrollTop();
  $('#videobcg').css('filter', 'blur(' + scrolled / 10 + 'px)')
});
*/
$(".card").tilt({
  glare: true,
  maxGlare: 0.5,
});

$(".search-li").on({
  mouseenter: function () {
    $(".menu-bar li").hide();
    $(".searchbox").show();
  },
});

$(".searchbox").on({
  mouseleave: function () {
    $(".menu-bar li").show();
    $(".searchbox").hide();
  },
});

$(".slides .glider .card").on({
  mouseenter: function () {
    var gif = $(this).data("gifurl");
    $(this).find("img").attr("src", gif);
  },
});

$(".slides .glider .card").on({
  mouseleave: function () {
    var img = $(this).data("imgurl");
    $(this).find("img").attr("src", img);
  },
});

$(".searchtext").on("input", function () {
  $("#nick .glider").html("");
  clearTimeout(this.delay);
  this.delay = setTimeout(
    function () {
      console.log(this.value);
      var regex = new RegExp(this.value, "i");
      nick.map(function (element) {
        if (
          element.title.search(regex) != -1 ||
          element.title.search(regex) != -1
        ) {
          var anchor = document.createElement("a");
          anchor.setAttribute("class", "card");
          anchor.setAttribute("href", element.link);
          anchor.setAttribute("data-title", element.title);
          anchor.setAttribute("data-category", "");
          anchor.setAttribute("data-imgurl", element.image);
          anchor.setAttribute("data-gifurl", element.gif);
          var img = document.createElement("img");
          img.setAttribute("class", "card-img");
          img.setAttribute("src", element.image);
          anchor.append(img);
          document.querySelector("#nick .glider").append(anchor);
        }
      });
    }.bind(this),
    800
  );
});

