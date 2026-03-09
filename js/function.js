
$(function () {
  const $btn = $('.floating-btn');
  const troubleTop = $('.float-start').offset().top;

  $(window).on('scroll', function () {
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();

    if (scroll + windowHeight > troubleTop + 100) {
      $btn.addClass('visible');
    } else {
      $btn.removeClass('visible');
    }
  });
});

// スクロール時のアニメーション
$(function () {
  $(window).on('scroll', function () {
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();

    $('.fade-up, .fade-down, .fadein-blur').each(function () {
      const position = $(this).offset().top;
      if (scroll > position - windowHeight + 180) {
        if ($(this).hasClass('fade-up')) {
          $(this).addClass('fadein-up-active');
        }
      }
    });
  });
});


const swiper3 = new Swiper('.voices-slider .swiper', {
  loop: true,
  autoplay: {
    delay: 3000,        // 3秒ごとにスライド
    disableOnInteraction: false, // 手動操作後も自動再生を継続
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach((accordion) => {
    const btn = accordion.querySelector('.accordion-btn');
    const content = accordion.querySelector('.accordion-content');

    btn.addEventListener('click', () => {
      const isOpen = btn.classList.contains('open');

      // 全部閉じる
      accordions.forEach((el) => {
        el.querySelector('.accordion-btn').classList.remove('open');
        el.querySelector('.accordion-content').classList.remove('open');
      });

      // クリックしたものが閉じていた場合だけ開く
      if (!isOpen) {
        btn.classList.add('open');
        content.classList.add('open');
      }
    });
  });

  // 最初の1つ目を開いた状態にする
  // if (accordions.length > 0) {
  //   accordions[0].querySelector('.accordion-btn').classList.add('open');
  //   accordions[0].querySelector('.accordion-content').classList.add('open');
  // }
});


document.addEventListener('DOMContentLoaded', () => {
  const accordions2 = document.querySelectorAll('.accordion2');

  accordions2.forEach((accordion) => {
    const btn = accordion.querySelector('.accordion-btn2');
    const content = accordion.querySelector('.accordion-content2');
    const icon = btn.querySelector('.accordion-icon2');

    btn.addEventListener('click', () => {
      const isOpen = btn.classList.contains('open');

      // 全部閉じる
      accordions2.forEach((el) => {
        el.querySelector('.accordion-btn2').classList.remove('open');
        el.querySelector('.accordion-content2').classList.remove('open');
        el.querySelector('.accordion-icon2').textContent = '+';
      });

      // クリックしたものが閉じていた場合だけ開く
      if (!isOpen) {
        btn.classList.add('open');
        content.classList.add('open');
        icon.textContent = '-';
      }
    });
  });

  // 1つ目を開いた状態にする
  if (accordions2.length > 0) {
    accordions2[0].querySelector('.accordion-btn2').classList.add('open');
    accordions2[0].querySelector('.accordion-content2').classList.add('open');
    accordions2[0].querySelector('.accordion-icon2').textContent = '-';
  }
});