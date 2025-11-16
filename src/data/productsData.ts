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
    href: "https://tiendascanavini.cl/ficha/103/cerradura-electrica-para-puertas-que-abren-hacia-el-interior-para-mampara-bodega-acceso-principal-reja-u-oficina",
    alt: "cerradura de sobreponer scanavini"
  },
  {
    title: "CERRADURA DIGITAL A210",
    image: withVersion("/images/products/cerradura-digital-scanavini.webp"),
    href: "https://tiendascanavini.cl/ficha/165/cerradura-digital-a210-aid-acceso-principal",
    alt: "cerradura digital scanavini"
  },
  {
    title: "CERRADURA CON MANILLA 960L",
    image: withVersion("/images/products/cerradura-con-manilla-scanavini.webp"),
    href: "https://tiendascanavini.cl/ficha/139/cerradura-con-manillas-960l-oficina-cocina-patio",
    alt: "cerradura con manilla scanavini"
  },
];

export const categoryProducts: ProductCard[] = [
  {
    title: "CERRADURAS DE SOBREPONER",
    image: withVersion("/images/products/cerradura-sobreponer-2002-scanavini.webp"),
    href: "https://tiendascanavini.cl/categorias/13/cerraduras-de-sobreponer",
    alt: "cerraduras de sobreponer scanavini, para puertas de madera, metalicas y rejas"
  },
  {
    title: "CERRADURAS CON MANILLA",
    image: withVersion("/images/products/cerradura-manillas-scanavini-categorias.webp"),
    href: "https://tiendascanavini.cl/categorias/16/cerraduras-con-manillas",
    alt: "cerradura manillas scanavini, para puertas de madera"
  },
  {
    title: "CERRADURAS DIGITALES",
    image: withVersion("/images/products/cerradura-digital-acceso-principal-scanavini.webp"),
    href: "https://tiendascanavini.cl/lineas/6/cerraduras-digitales",
    alt: "cerradura digital scanavini, uso en puertas de acceso principal y oficinas"
  },
  {
    title: "POMOS",
    image: withVersion("/images/products/cerradura-de-pomo-scanavini.webp"),
    href: "https://tiendascanavini.cl/categorias/14/cerraduras-de-pomo",
    alt: "cerradura de pomo scanavini, para puertas de madera"
  },
  {
    title: "CERROJOS",
    image: withVersion("/images/products/cerrojos-para-puertas-scanavini.webp"),
    href: "https://tiendascanavini.cl/lineas/7/cerrojo-de-seguridad",
    alt: "cerrojo de seguridad scanavini"
  },
  {
    title: "CANDADOS",
    image: withVersion("/images/products/candados-scanavini.webp"),
    href: "https://tiendascanavini.cl/lineas/4/candados",
    alt: "candados scanavini, para puertas, rejas y lockers"
  },
  {
    title: "BARRAS ANTIPÁNICO",
    image: withVersion("/images/products/barras-antipanico-scanavini.webp"),
    href: "https://tiendascanavini.cl/lineas/2/barra-antipanico-y-brazos-hidraulicos",
    alt: "barras antipanico scanavini, para puertas de salida de emergencia"
  },
  {
    title: "CIERRAPUERTAS",
    image: withVersion("/images/products/cierrapuertas-scanavini.webp"),
    href: "https://tiendascanavini.cl/lineas/2/barra-antipanico-y-brazos-hidraulicos",
    alt: "cierrapuertas scanavini, para puertas de madera"
  },
  {
    title: "BISAGRAS",
    image: withVersion("/images/products/bisagras-scanavini.webp"),
    href: "https://tiendascanavini.cl/lineas/3/bisagras",
    alt: "bisagras scanavini, para puertas de madera"
  },
  {
    title: "QUICIOS HIDRAÚLICOS",
    image: withVersion("/images/products/quicios-scanavini.webp"),
    href: "https://tiendascanavini.cl/lineas/15/quicios",
    alt: "quicios scanavini, para puertas de vidrio"
  },
  {
    title: "HERRAJES PARA PUERTAS VIDRIADAS",
    image: withVersion("/images/products/herrajes-scanavini.webp"),
    href: "https://tiendascanavini.cl/lineas/11/herrajes-para-puertas-vidriadas",
    alt: "herrajes scanavini, para puertas de vidrio"
  },
  {
    title: "TIRADORES DE PUERTA",
    image: withVersion("/images/products/tiradores-puerta-scanavini.webp"),
    href: "https://tiendascanavini.cl/lineas/13/perillones-y-tiradores-de-puerta",
    alt: "tiradores de puerta scanavini, para puertas de vidrio y madera"
  },
  {
    title: "TIRADORES DE MUEBLES",
    image: withVersion("/images/products/tiradores-muebles-scanavini.webp"),
    href: "https://tiendascanavini.cl/lineas/16/tiradores-de-muebles",
    alt: "tiradores de muebles scanavini, para cocinas y closets"
  },
  {
    title: "ESPAÑOLETAS",
    image: withVersion("/images/products/españoleta-scanavini.webp"),
    href: "https://tiendascanavini.cl/lineas/10/espanoletas",
    alt: "españoletas scanavini, para ventanas"
  },
  {
    title: "TOPES",
    image: withVersion("/images/products/tope-para-puerta-scanavini.webp"),
    href: "https://tiendascanavini.cl/lineas/17/topes-de-puerta",
    alt: "tope para puerta scanavini"
  }
];
