// src/scripts/interactions/init-swiper.ts
import Swiper from 'swiper';
import { EffectCoverflow, Pagination } from 'swiper/modules';

// Inicia Swiper en el elemento si existe
function start() {
  const el = document.querySelector('#swiperMarketsMobile');
  if (!el) return;

  new Swiper('#swiperMarketsMobile', {
    modules: [EffectCoverflow, Pagination],
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    initialSlide: 3,
    pagination: { el: '.swiper-pagination' },
  });
}

// Lazy init: cuando el carrusel sea visible
const target = document.querySelector('#swiperMarketsMobile');
if (target && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      io.disconnect();
      start();
    }
  });
  io.observe(target);
} else {
  // Fallback si no hay IO
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }
}
