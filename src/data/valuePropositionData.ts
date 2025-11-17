import type { ImageMetadata } from 'astro';

import equipoDesktop from '../assets/pillars/team-peru.webp';
import equipoMobile from '../assets/pillars/team-peru-mobile.webp';
import fabricacionDesktop from '../assets/pillars/fabricacion.avif';
import fabricacionMobile from '../assets/pillars/fabricacion.webp';
import productosDesktop from '../assets/pillars/productos.avif';
import productosMobile from '../assets/pillars/productos.webp';



export interface ValuePropositionSlide {
  id: string;
  image: ImageMetadata;       
  mobileImage: ImageMetadata; 
  title: string;
  description: string;
}



export interface Props {
  slides: ValuePropositionSlide[],
  className: string,
}



export const defaultSlides: ValuePropositionSlide[] = [
  {
    id: "national-product",
    image: productosDesktop,
    mobileImage: productosMobile,
    title: "Fabricación Nacional y Garantía de Por vida",
    description: "Somos una empresa chilena con más de 75 años de experiencia, fabricando cerraduras con calidad garantizada de por vida, como compromiso con tu seguridad y la de tu familia."
  },
  {
    id: "quality",
    image: fabricacionDesktop,
    mobileImage: fabricacionMobile,
    title: "NUESTROS PRODUCTOS",
    description: "Ofrecemos cerraduras residenciales, comerciales e industriales, con garantía de por vida y los más altos estándares de calidad, incorporando innovación y nuevas tecnologías para entregar mayor seguridad."
  },
  {
    id: "our-people",
    image: equipoDesktop,
    mobileImage: equipoMobile,
    title: "Nuestra Gente",
    description: "Nuestro equipo, con más de 300 colaboradores, es el motor de nuestro crecimiento, trabajando con pasión y excelencia para crear productos de calidad que protegen la tranquilidad y lo que más valoran nuestros clientes."
  }
]