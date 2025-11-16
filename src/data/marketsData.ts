import { withVersion } from '../scripts/utils/withVersion';

export interface MarketSlide {
  id: string;
  image: string;
  mobileImage: string,
  title: string;
  subtitle: string;
  description: string;
  marginBottomOfTitle?: string;
}

export interface Props {
  slides?: MarketSlide[];
  className?: string;
}

export const defaultSlides: MarketSlide[] = [
  {
    id: "hogar",
    image: withVersion("/images/markets/residencial.webp"),
    mobileImage: withVersion("/images/markets/residencial.avif"),
    title: "EDIFICIO RESIDENCIAL",
    subtitle: "Edificios de Departamentos",
    description: "Soluciones para Viviendas y espacios comunes"
  },
  {
    id: "universidades",
    image: withVersion("/images/markets/educacional.webp"),
    mobileImage: withVersion("/images/markets/educacional.avif"),
    title: "Educacional",
    subtitle: "Colegios, Institutos y Universidades",
    description: "SOLUCIONES ROBUSTAS PARA INSTITUCIONES EDUCACIONALES"
  },
  {
    id: "oficinas",
    image: withVersion("/images/markets/oficinas.webp"),
    mobileImage: withVersion("/images/markets/oficinas.avif"),
    title: "Oficinas",
    subtitle: "Instalaciones Corporativas",
    description: "Soluciones en control de acceso, alto tráfico y seguridad"
  },
  {
    id: "residencial",
    image: withVersion("/images/markets/vivienda.webp"),
    mobileImage: withVersion("/images/markets/vivienda.avif"),
    title: "Vivienda",
    subtitle: "Casas y condominios",
    description: "SOLUCIONES FUNCIONALES Y DE SEGURIDAD PARA DAR ESTILO A TU HOGAR"
  },
  {
    id: "hospitales",
    image: withVersion("/images/markets/hospitalario.webp"),
    mobileImage: withVersion("/images/markets/hospitalario.avif"),
    title: "Hospitalario",
    subtitle: "Hospitales, clínicas y servicios de salud",
    description: "SOLUCIONES TÉCNICAS Y DE SEGURIDAD PARA PACIENTES Y VISITAS",
    marginBottomOfTitle: "mb-6"
  },
  {
    id: "hoteles",
    image: withVersion("/images/markets/hoteleria.webp"),
    mobileImage: withVersion("/images/markets/hoteleria.avif"),
    title: "Hotelería",
    subtitle: "Hoteles",
    description: "Soluciones integrales para tus huéspedes"
  },
  {
    id: "industrias",
    image: withVersion("/images/markets/gubernamental.webp"),
    mobileImage: withVersion("/images/markets/gubernamental.avif"),
    title: "Gubernamental",
    subtitle: "Servicio público",
    description: "SOLUCIONES PARA CONTROL DE ACCESO Y OPERACIÓN EN EDIFICIOS PÚBLICOS"
  }
];