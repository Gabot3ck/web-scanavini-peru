import { withVersion } from '../scripts/utils/withVersion';

interface BrandLogo {
  id: string;
  flag: string;
  image: string;
  imageHeight: string;
  imageHeightMobile: string;
  description: string;
}


export const brandsLogos: BrandLogo[] = [
  {
    id: "manital",
    flag: withVersion("/images/logos/partners/italia.svg"),
    image: withVersion("/images/logos/partners/manital.svg"),
    imageHeight: "20",
    imageHeightMobile:"20",
    description: "Diseñadores de manillas italianas que unen artesanía, diseño y calidad"
  },
  {
    id: "roto",
    flag: withVersion("/images/logos/partners/alemania.svg"),
    image: withVersion("/images/logos/partners/roto.svg"),
    imageHeight: "20",
    imageHeightMobile:"16",
    description: "Herrajes y soluciones innovadoras para perfiles de PVC"
  },
  {
    id: "estamp",
    flag: withVersion("/images/logos/partners/españa.svg"),
    image: withVersion("/images/logos/partners/estamp.svg"),
    imageHeight: "20",
    imageHeightMobile:"10",
    description: "Herrajes de calidad con innovación y estilo desde 1928"
  },
  {
    id: "simonswerk",
    flag: withVersion("/images/logos/partners/alemania.svg"),
    image: withVersion("/images/logos/partners/simonswerk.svg"),
    imageHeight: "20",
    imageHeightMobile:"6",
    description: "Especialista en bisagras ocultas para proyectos de alto nivel"
  },
  {
    id: "dorcas",
    flag: withVersion("/images/logos/partners/españa.svg"),
    image: withVersion("/images/logos/partners/dorcas.svg"),
    imageHeight: "20",
    imageHeightMobile:"12",
    description: "50 años fabricando cerraduras y sistemas, presente en 70 países"
  },
];
