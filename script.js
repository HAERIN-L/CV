// script.js
document.addEventListener("DOMContentLoaded", function () {
    var menuLinks = document.querySelectorAll(".header_menu a");
    menuLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        var targetId = this.getAttribute("data-target");
        if (!targetId) return;
        var current = document.querySelector(".content_section.active");
        var target = document.getElementById(targetId);
        if (current.id === targetId) return;
  
        // 페이드 아웃 current
        current.style.opacity = 0;
        setTimeout(function () {
          current.classList.remove("active");
          current.style.display = "none";
          // target 보이기 & 페이드 인
          target.style.display = "block";
          setTimeout(function () {
            target.style.opacity = 1;
            target.classList.add("active");
          }, 50);
        }, 500);
      });
    });
  });
  