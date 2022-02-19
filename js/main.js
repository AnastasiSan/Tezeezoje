const burger = document.querySelector('.burger'),
      menu = document.querySelector('.nav'),
      link = document.querySelectorAll('.nav__link');

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  menu.classList.toggle('open');
})

link.forEach((el) => {
  el.addEventListener('click', () => {
    burger.classList.remove('open');
    menu.classList.remove('open');
  })
});

const swiperBloquote = new Swiper('.bloquote__swiper', {
  speed: 400,
  spaceBetween: 100,
  navigation: {
    nextEl: '.bloquote__next',
    prevEl: '.bloquote__prev',
  },
});

const swiperPlace = new Swiper('.place__swiper', {
  loop: true,
  speed: 400,
  spaceBetween: 30,
  navigation: {
    nextEl: '.place__next',
    prevEl: '.place__prev',
  },
  slidesPerView: "auto",
  centeredSlides: true,
  // freeMode: true,
});

// map

ymaps.ready(init) 
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [50.99410759278144,3.820905843631552],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 11
        },
        {
            suppressMapOpenBlock: true,
            geolocationControlSize: "large",
            geolocationControlPosition: { top: "200px", right: "20px" },
            geolocationControlFloat: 'none',
            zoomControlSize: "small",
            zoomControlFloat: "none",
            zoomControlPosition: { top: "120px", right: "20px" }
        });
        var myPlacemark = new ymaps.Placemark([50.99410759278144,3.720905843631552], {}, {
          // iconLayout: 'default#image',
          // iconImageHref: 'Subtract.svg',
          // iconImageSize: [28, 30],
        });

        myMap.geoObjects.add(myPlacemark);
      }

// modal
let popupBg = document.querySelector('.popup-bg'); // Фон попап окна
  let popup = document.querySelector('.popup'); // Само окно
  let openPopupButtons = document.querySelectorAll('.hero__btn'); // Кнопки для показа окна
  let closePopupButton = document.querySelector('.popup__close'); // Кнопка для скрытия окна
  openPopupButtons.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
      popupBg.classList.add('active'); // Добавляем класс 'active' для фона
      popup.classList.add('active'); // И для самого окна
      document.body.style.overflow = 'hidden'
    })
  });

  closePopupButton.addEventListener('click', () => { // Вешаем обработчик на крестик
    popupBg.classList.remove('active'); // Убираем активный класс с фона
    popup.classList.remove('active'); // И с окна
    document.body.style.overflow = 'visible'
  });

  document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if (e.target === popupBg) { // Если цель клика - фот, то:
      popupBg.classList.remove('active'); // Убираем активный класс с фона
      popup.classList.remove('active'); // И с окна
    }
  });

// form
let selector = document.querySelector("input[type='tel']");

let im = new Inputmask("+7(999) 999-99-99");

im.mask(selector);

// const validation = new JustValidate('.popup__form');

// validation
//   .addField('#phone', [
//     {
//       rule: 'required',
//       errorMessage: 'Phone is required',
//     },
//     // {
//     //   rule: 'required',
//     //   function: (name, value) => {
//     //     const phone = selector.inputmask.unmaskedvalue()
//     //     return Number(phone) && phone.length === 10
//     //   },
//     //   errorMessage: 'Minimum of 10 characters',
//     // },
//   ])
//   .addField('#date', [
//     {
//       rule: 'required',
//       errorMessage: 'Date is required',
//     },
//   ])
//   .onSuccess((event) => {
//     event.preventDefault();

//   $.ajax({
//     type:'POST',
//     url:'../main.php',
//     data: $('.popup__form').serialize(),
//     contentType: false,
//     cache: false,
//     processData: false,
//     success: function() {
//       alert('Скоро с вами свяжутся для подтверждения')
//     },
//   })
//   });

$('.popup__form').submit(function(event) {
  event.preventDefault();

  // alert($(this).attr('action'));
  // return
  $.ajax({
    type:'POST',
    url:'../main.php',
    data: new FormData(this),
    contentType: false,
    cache: false,
    processData: false,
    success: function() {
      alert('Скоро с вами свяжутся для подтверждения')
    },
  })
})
