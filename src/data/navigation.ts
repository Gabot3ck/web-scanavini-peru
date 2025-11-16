export interface NavItem {
  text: string;
  href?: string;
  children?: NavItem[];
  isBtn?: boolean;
}

export interface NavigationData {
  logo: {
    light: string;
    dark: string;
  };
  mainNav: NavItem[];
}

export const navigationData: NavigationData = {
  logo: {
    light: "/images/logos/logo-light.svg",
    dark: "/images/logos/logo-dark.svg"
  },
  mainNav: [
    {
      text: "Inicio",
      href: "/"
    },
    {
      text: "Nosotros",
      href: "/nosotros"
    },
    {
      text: "Soluciones para tu hogar",
      children: [
        {
          text: "Productos",
          href: "/productos",
          children: [
            { text: "Cerrojos", href: "https://tiendascanavini.cl/lineas/7/cerrojo-de-seguridad" },
            { text: "Cerraduras", href: "https://tiendascanavini.cl/lineas/5/cerraduras" },
            { text: "Cerraduras Digitales", href: "https://tiendascanavini.cl/lineas/6/cerraduras-digitales" },
            { text: "Candados", href: "https://tiendascanavini.cl/lineas/4/candados" },
            { text: "Barras Antipánico, Brazos Hidráulicos y Quicios", href: "https://tiendascanavini.cl/lineas/2/barra-antipanico-y-brazos-hidraulicos" },
            { text: "Bisagras", href: "https://tiendascanavini.cl/lineas/3/bisagras" },
            { text: "Manillas", href: "https://tiendascanavini.cl/categorias/16/cerraduras-con-manillas" },
            { text: "Tiradores, Topes y Españoletas", href: "https://tiendascanavini.cl/lineas/13/perillones-y-tiradores-de-puerta" },
            { text: "Descargar Catálogo", href: "https://storage.scanavini.cl/catalogos/CatalogoScanavini_2024.pdf", isBtn: true }
          ]
        },
        {
          text: "Mercados",
          href: "/mantenimiento",
          children: [
            { text: "Vivienda", href: "/mantenimiento" },
            { text: "Condominios", href: "/mantenimiento" },
            { text: "Edificio Residencial", href: "/mantenimiento" }
          ]
        },
        {
          text: "Servicios",
          href: "/servicios",
          children: [
            { text: "Copia de Llaves", href: "/servicios" },
            { text: "Instalaciones y Mantenimientos", href: "/servicios" },
            { text: "Igualamiento y Amaestramiento", href: "/servicios" },
            { text: "Trabajos Especiales", href: "/servicios" }
          ]
        },
        {
          text: "Destacados",
          children: [
            { text: "Servicios de instalación", href: "https://tiendascanavini.cl/lineas/22/instalacion" },
            { text: "Tutoriales", href: "https://www.youtube.com/@ScanaviniCerraduras/videos" },
            { text: "Blog", href: "https://tiendascanavini.cl/blog" }
          ]
        }
      ],
      href: "/mantenimiento"
    },
    {
      text: "Soluciones profesionales",
      children:[
                {
          text: "Productos",
          href: "/productos",
          children: [
            { text: "Cerrojos", href: "https://tiendascanavini.cl/lineas/7/cerrojo-de-seguridad" },
            { text: "Cerraduras", href: "https://tiendascanavini.cl/lineas/5/cerraduras" },
            { text: "Cerraduras Digitales", href: "https://tiendascanavini.cl/lineas/6/cerraduras-digitales" },
            { text: "Candados", href: "https://tiendascanavini.cl/lineas/4/candados" },
            { text: "Barras Antipánico, Brazos Hidráulicos y Quicios", href: "https://tiendascanavini.cl/lineas/2/barra-antipanico-y-brazos-hidraulicos" },
            { text: "Bisagras", href: "https://tiendascanavini.cl/lineas/3/bisagras" },
            { text: "Manillas", href: "https://tiendascanavini.cl/categorias/16/cerraduras-con-manillas" },
            { text: "Tiradores, Topes y Españoletas", href: "https://tiendascanavini.cl/lineas/13/perillones-y-tiradores-de-puerta" },
            { text: "Descargar Catálogo", href: "https://storage.scanavini.cl/catalogos/CatalogoScanavini_2024.pdf", isBtn: true }
          ]
        },
        {
          text: "Mercados",
          href: "/mantenimiento",
          children: [
            { text: "Hospitalario", href: "/mantenimiento" },
            { text: "Edificio de oficinas", href: "/mantenimiento" },
            { text: "Hoteles", href: "/mantenimiento" },
            { text: "Educacional", href: "/mantenimiento" },
            { text: "Proyectos Gubernamentales", href: "/mantenimiento" }
          ]
        },
        {
          text: "Servicios",
          href: "/servicios",
          children: [
            { text: "Capacitaciones en obra", href: "/servicios" },
            { text: "Instalaciones y Mantenimientos", href: "/servicios" },
            { text: "Igualamiento y Amaestramiento", href: "/servicios" },
            { text: "Trabajos Especiales", href: "/servicios" }
          ]
        },
        {
          text: "Destacados",
          children: [
            { text: "Servicios de instalación", href: "https://tiendascanavini.cl/lineas/22/instalacion" },
            { text: "Tutoriales", href: "https://www.youtube.com/@ScanaviniCerraduras/videos" },
            { text: "Blog", href: "https://tiendascanavini.cl/blog" }
          ]
        }
      ],
      href: "/mantenimiento"
    },
    {
      text: "Tienda online",
      href: "https://tiendascanavini.cl/",
    },
    {
      text: "Contacto",
      href: "/contacto",
    },
    {
      text: "Andeslock",
      href: "https://andeslock.com/",
      isBtn: true
    }
  ]
}