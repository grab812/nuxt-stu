var btnList = document.getElementsByClassName("like_icon");
for (var i = 0, l = btnList.length; i < l; i++) {
  (function (n) {
    var animation2 = bodymovin.loadAnimation({
      container: btnList[n],
      render: "svg",
      loop: false,
      autoplay: false,
      path: "../images/like_44.json",
    });

    $(btnList[n]).click(function (e) {
      e.stopPropagation(); // 2024.02 shorts player
      var goodchk = "False";
      if ($(this).hasClass("selected")) {
        animation2.stop();
        $(this).removeClass("selected");
      } else {
        animation2.play();
        $(this).addClass("selected");
      }
    });

    if ($(btnList[n]).hasClass("selected")) {
      animation2.goToAndStop(20, true);
    }
  })(i);
}
