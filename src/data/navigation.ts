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
      text: "Productos",
      href: "/productos"
    },
    {
      text: "Fichas técnicas",
      href: "/fichas-tecnicas"
    },
    {
      text: "Descargar catálogo",
      href: "https://storage.scanavini.cl/catalogos/CatalogoScanavini_2024.pdf"
    },
    {
      text: "Contacto",
      href: "/contacto",
    },
    {
      text: "Tienda online",
      href: "https://www.tiendascanavini.pe/",
    },
    {
      text: "Andeslock",
      href: "https://www.andeslock.pe/",
      isBtn: true
    }
  ]
}