import { withVersion } from "../scripts/utils/withVersion";

export interface ProductCard {
  title: string;
  image: string;
  href: string;
  alt: string;
}

export interface Props {
  featuredProducts: ProductCard[];
  catalog: ProductCard[];
}

export const featuredProducts: ProductCard[] = [
  {
    title: "CERRADURA ELÉCTRICA 2050",
    image: withVersion("/images/products/cerradura-sobreponer-scanavini.webp"),
    href: "https://www.tiendascanavini.pe/producto/cerradura-electrica-2050/",
    alt: "cerradura de sobreponer scanavini"
  },
  {
    title: "CERRADURA DIGITAL A210",
    image: withVersion("/images/products/cerradura-digital-scanavini.webp"),
    href: "https://www.tiendascanavini.pe/producto/cerradura-digital-a210-ai",
    alt: "cerradura digital scanavini"
  },
  {
    title: "CERRADURA DE POMO 4180",
    image: withVersion("/images/products/cerradura-de-pomo-4180.webp"),
    href: "https://www.tiendascanavini.pe/producto/cerradura-de-pomo-oficina-cocina-a-patio-o-loggia",
    alt: "cerradura con manilla scanavini"
  },
];

export const categoryProducts: ProductCard[] = [
  {
    title: "CERRADURAS DE SOBREPONER",
    image: withVersion("/images/products/cerradura-sobreponer-2002-scanavini.webp"),
    href: "https://www.tiendascanavini.pe/cerraduras/cerraduras-de-sobreponer",
    alt: "cerraduras de sobreponer scanavini, para puertas de madera, metalicas y rejas"
  },
  {
    title: "CERRADURAS CON MANIJA",
    image: withVersion("/images/products/cerradura-manillas-scanavini-categorias.webp"),
    href: "https://www.tiendascanavini.pe/cerraduras/cerraduras-con-manija",
    alt: "cerradura con manijas scanavini, para puertas de madera"
  },
  {
    title: "CERRADURAS DIGITALES",
    image: withVersion("/images/products/cerradura-digital-acceso-principal-scanavini.webp"),
    href: "https://www.tiendascanavini.pe/cerraduras-digitales",
    alt: "cerradura digital scanavini, uso en puertas de acceso principal y oficinas"
  },
  {
    title: "POMOS",
    image: withVersion("/images/products/cerradura-de-pomo-scanavini.webp"),
    href: "https://www.tiendascanavini.pe/cerraduras/cerraduras-de-pomo",
    alt: "cerradura de pomo scanavini, para puertas de madera"
  },
  // {
  //   title: "CERROJOS",
  //   image: withVersion("/images/products/cerrojos-para-puertas-scanavini.webp"),
  //   href: "https://tiendascanavini.cl/lineas/7/cerrojo-de-seguridad",
  //   alt: "cerrojo de seguridad scanavini"
  // },
  {
    title: "CANDADOS",
    image: withVersion("/images/products/candados-scanavini.webp"),
    href: "https://www.tiendascanavini.pe/candados",
    alt: "candados scanavini, para puertas, rejas y lockers"
  },
  {
    title: "BARRAS ANTIPÁNICO",
    image: withVersion("/images/products/barras-antipanico-scanavini.webp"),
    href: "https://www.tiendascanavini.pe/accesorios-uso-comercial/barras-antipanico",
    alt: "barras antipanico scanavini, para puertas de salida de emergencia"
  },
  // {
  //   title: "CIERRAPUERTAS",
  //   image: withVersion("/images/products/cierrapuertas-scanavini.webp"),
  //   href: "https://tiendascanavini.cl/lineas/2/barra-antipanico-y-brazos-hidraulicos",
  //   alt: "cierrapuertas scanavini, para puertas de madera"
  // },
  {
    title: "BISAGRAS",
    image: withVersion("/images/products/bisagras-scanavini.webp"),
    href: "https://www.tiendascanavini.pe/bisagras",
    alt: "bisagras scanavini, para puertas de madera"
  },
  {
    title: "FRENOS HIDRAÚLICOS",
    image: withVersion("/images/products/quicios-scanavini.webp"),
    href: "https://www.tiendascanavini.pe/accesorios-uso-comercial/frenos-hidraulicos",
    alt: "quicios scanavini, para puertas de vidrio"
  },
  // {
  //   title: "HERRAJES PARA PUERTAS VIDRIADAS",
  //   image: withVersion("/images/products/herrajes-scanavini.webp"),
  //   href: "https://tiendascanavini.cl/lineas/11/herrajes-para-puertas-vidriadas",
  //   alt: "herrajes scanavini, para puertas de vidrio"
  // },
  {
    title: "TIRADORES DE PUERTA",
    image: withVersion("/images/products/tiradores-puerta-scanavini.webp"),
    href: "https://www.tiendascanavini.pe/tiradores/tiradores-de-puertas",
    alt: "tiradores de puerta scanavini, para puertas de vidrio y madera"
  },
  // {
  //   title: "TIRADORES DE MUEBLES",
  //   image: withVersion("/images/products/tiradores-muebles-scanavini.webp"),
  //   href: "https://tiendascanavini.cl/lineas/16/tiradores-de-muebles",
  //   alt: "tiradores de muebles scanavini, para cocinas y closets"
  // },
  {
    title: "ESPAÑOLETAS",
    image: withVersion("/images/products/españoleta-scanavini.webp"),
    href: "https://www.tiendascanavini.pe/complementos/espanoletas",
    alt: "españoletas scanavini, para ventanas"
  },
  {
    title: "TOPES",
    image: withVersion("/images/products/tope-para-puerta-scanavini.webp"),
    href: "https://www.tiendascanavini.pe/complementos/topes",
    alt: "tope para puerta scanavini"
  }
];
