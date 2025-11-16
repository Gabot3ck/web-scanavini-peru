interface Slide {
  id: string;
  videoDesktop: string;
  videoMobile: string;
  title: string;
  subtitle: string;
  placement: 'left' | 'right' | 'center';
}

export const slidesHeroHome: Slide[] = [
  {
    id: 'slide-1',
    videoDesktop: 'https://storage.scanavini.cl/videos/website/cerradura-sobreponer-scanavini.webm',
    videoMobile: 'https://storage.scanavini.cl/videos/website/cerradura-sobreponer-scanavini-mobile.mp4',
    title: 'CERRADURA DE SOBREPONER',
    subtitle: 'Calidad y seguridad desde siempre',
    placement: 'right'
  },
  {
    id: 'slide-2', 
    videoDesktop:'https://storage.scanavini.cl/videos/website/cerradura-colonial-scanavini.webm',
    videoMobile: 'https://storage.scanavini.cl/videos/website/cerradura-colonial-scanavini-mobile.mp4',
    title: 'CERRADURA ACCESO COLONIAL',
    subtitle: 'Diseño clásico con calidad y seguridad',
    placement: 'left'
  },
  {
    id: 'slide-3',
    videoDesktop:'https://storage.scanavini.cl/videos/website/cerradura-digital-scanavini.webm', 
    videoMobile: 'https://storage.scanavini.cl/videos/website/cerradura-digital-scanavini-mobile.mp4',
    title: 'CERRADURA DIGITAL',
    subtitle: 'Seguridad y acceso contralado en cada apertura',
    placement: 'left'
  },
  {
    id: 'slide-4',
    videoDesktop: 'https://storage.scanavini.cl/videos/website/barra-antipanico-scanavini.webm', 
    videoMobile: 'https://storage.scanavini.cl/videos/website/barra-antipanico-scanavini-mobile.mp4',
    title: 'BARRAS ANTIPÁNICO',
    subtitle: 'Para puertas de salida de emergencia',
    placement: 'left'
  }
]