type Maybe<T> = T | null;

class HeroVideoCarousel {
  private root: HTMLElement;
  private slides: HTMLElement[];
  private dots: HTMLButtonElement[];
  private videos: HTMLVideoElement[];
  private prevBtn: Maybe<HTMLButtonElement>;
  private nextBtn: Maybe<HTMLButtonElement>;
  private progressBar: Maybe<HTMLElement>;

  private current = 0;
  private total = 0;
  private autoplay = true;
  private interval = 5000; 
  private timer: Maybe<number> = null;

  constructor(root: HTMLElement) {
    this.root = root;
    this.slides = Array.from(root.querySelectorAll<HTMLElement>(".carousel-slide"));
    this.dots = Array.from(root.querySelectorAll<HTMLButtonElement>(".carousel-dot"));
    this.videos = Array.from(root.querySelectorAll<HTMLVideoElement>(".carousel-video"));
    this.prevBtn = root.querySelector<HTMLButtonElement>(".carousel-prev");
    this.nextBtn = root.querySelector<HTMLButtonElement>(".carousel-next");
    this.progressBar = root.querySelector<HTMLElement>(".carousel-progress-bar");

    this.total = this.slides.length;
    this.autoplay = this.readBool(root.dataset.autoplay, true);
    this.interval = this.readInt(root.dataset.interval, 5000);

    if (this.total === 0) return;

    // Estado inicial visible en el slide 0
    this.show(0, /*resetProgress*/ false);

    // Eventos de UI
    this.bindEvents();

    // Autoplay inmediato si corresponde
    if (this.autoplay && this.total > 1) {
      this.startTimer();
    }

    // Congelar/reanudar cuando la pestaña cambia de visibilidad
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        this.clearTimer();
        this.pauseAll();
      } else {
        if (this.autoplay && this.total > 1) {
          this.startTimer();
        }
        this.playCurrent();
      }
    });
  }

  // ---------- Helpers ----------
  private readBool(v: unknown, fallback: boolean): boolean {
    if (v == null) return fallback;
    const s = String(v).trim().toLowerCase();
    return s === "true" || s === "1" || s === "yes";
  }

  private readInt(v: unknown, fallback: number): number {
    const n = Number(v);
    return Number.isFinite(n) && n > 0 ? n : fallback;
  }

  private bindEvents() {
    this.nextBtn?.addEventListener("click", () => {
      this.next();
      if (this.autoplay) this.startTimer();
    });

    this.prevBtn?.addEventListener("click", () => {
      this.prev();
      if (this.autoplay) this.startTimer();
    });

    this.dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        this.show(i);
        if (this.autoplay) this.startTimer();
      });
    });
  }

  private clearTimer() {
    if (this.timer != null) {
      window.clearTimeout(this.timer);
      this.timer = null;
    }
    // Reset inmediato de la barra de progreso
    if (this.progressBar) {
      this.progressBar.style.transition = "none";
      this.progressBar.style.transform = "scaleX(0)";
      // Forzar reflow para que el siguiente transition se aplique
      void this.progressBar.offsetWidth;
    }
  }

  private startTimer() {
    this.clearTimer();

    // Animar barra de progreso por intervalo completo
    if (this.progressBar) {
      this.progressBar.style.transition = `transform ${this.interval}ms linear`;
      this.progressBar.style.transform = "scaleX(1)";
    }

    this.timer = window.setTimeout(() => {
      this.next();
      // rehacer ciclo
      if (this.autoplay && this.total > 1) {
        this.startTimer();
      }
    }, this.interval);
  }

  // ---------- Navegación ----------
  private next() {
    const next = (this.current + 1) % this.total;
    this.show(next);
  }

  private prev() {
    const prev = (this.current - 1 + this.total) % this.total;
    this.show(prev);
  }

  // ---------- Render ----------
  private show(index: number, resetProgress: boolean = true) {
    if (index < 0 || index >= this.total) return;

    this.slides.forEach((slide, i) => {
      // Mantener compatibilidad con tu markup (active/opacity/z-index)
      slide.classList.toggle("active", i === index);
      slide.classList.toggle("opacity-100", i === index);
      slide.classList.toggle("z-[2]", i === index);
      slide.classList.toggle("z-[1]", i !== index);
      if (i !== index) {
        // Aseguramos que el resto no quede visible
        slide.classList.remove("opacity-100");
      }
    });

    this.dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });

    // Control de videos
    this.videos.forEach((video, i) => {
      if (i === index) {
        try {
          video.currentTime = 0;
          const p =  video.play();
          if (p && typeof p.then === "function") p.catch(() => {});
        } catch {}
      } else {
        try {
           video.pause();
        } catch {}
      }
    });

    this.current = index;

    if (resetProgress && this.autoplay && this.total > 1) {
      this.startTimer();
    }
  }

  private playCurrent() {
    const v = this.videos[this.current];
    if (!v) return;
    try {
      const p = v.play();
      if (p && typeof p.then === "function") p.catch(() => {});
    } catch {}
  }

  private pauseAll() {
    this.videos.forEach(v => {
      try {
        v.pause();
      } catch {}
    });
  }
}

// Auto-init
document.addEventListener("DOMContentLoaded", () => {
  const roots = document.querySelectorAll<HTMLElement>(".hero-carousel");
  roots.forEach(root => new HeroVideoCarousel(root));
});
