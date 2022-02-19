const burger = document.querySelector(".burger"),
  menu = document.querySelector(".nav"),
  link = document.querySelectorAll(".nav__link");
burger.addEventListener("click", () => {
  burger.classList.toggle("open"), menu.classList.toggle("open");
}),
  link.forEach((e) => {
    e.addEventListener("click", () => {
      burger.classList.remove("open"), menu.classList.remove("open");
    });
  });
const swiperBloquote = new Swiper(".bloquote__swiper", { speed: 400, spaceBetween: 100, navigation: { nextEl: ".bloquote__next", prevEl: ".bloquote__prev" } }),
  swiperPlace = new Swiper(".place__swiper", { loop: !0, speed: 400, spaceBetween: 30, navigation: { nextEl: ".place__next", prevEl: ".place__prev" }, slidesPerView: "auto", centeredSlides: !0 });
function init() {
  var e = new ymaps.Map(
    "map",
    { center: [50.99410759278144, 3.820905843631552], zoom: 11 },
    {
      suppressMapOpenBlock: !0,
      geolocationControlSize: "large",
      geolocationControlPosition: { top: "200px", right: "20px" },
      geolocationControlFloat: "none",
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "120px", right: "20px" },
    }
  ),
    o = new ymaps.Placemark([50.99410759278144, 3.720905843631552], {}, {});
  e.geoObjects.add(o);
}
ymaps.ready(init);
let popupBg = document.querySelector(".popup-bg"),
  popup = document.querySelector(".popup"),
  openPopupButtons = document.querySelectorAll(".hero__btn"),
  closePopupButton = document.querySelector(".popup__close");
openPopupButtons.forEach((e) => {
  e.addEventListener("click", (e) => {
    popupBg.classList.add("active"), popup.classList.add("active"), (document.body.style.overflow = "hidden");
  });
}),
  closePopupButton.addEventListener("click", () => {
    popupBg.classList.remove("active"), popup.classList.remove("active"), (document.body.style.overflow = "visible");
  }),
  document.addEventListener("click", (e) => {
    e.target === popupBg && (popupBg.classList.remove("active"), popup.classList.remove("active"));
  });
let selector = document.querySelector("input[type='tel']"),
  im = new Inputmask("+7(999) 999-99-99");
im.mask(selector);
/* Article FructCode.com */
$( document ).ready(function() {
  $(".popup__btn").click(
  function(){
    sendAjaxForm('result_form', 'ajax_form', 'main.php');
    return false; 
  }
);
});

function sendAjaxForm(result_form, ajax_form, url) {
  $.ajax({
      url:     'resources/main.php', //url страницы (action_ajax_form.php)
      type:     "POST", //метод отправки
      dataType: "html", //формат данных
      data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
      success: function(response) { //Данные отправлены успешно
        result = $.parseJSON(response);
        $('#result_form').html('Имя: '+result.name+'<br>Телефон: '+result.phonenumber);
    },
    error: function(response) { // Данные не отправлены
          $('#result_form').html('Ошибка. Данные не отправлены.');
    }
 });
}
//# sourceMappingURL=app.js.map
