import { withVersion } from '../scripts/utils/withVersion';


export interface TimelineItem {
  year: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
}


export const timelineData: TimelineItem[] = [
  {
    year: "1950",
    title: '“SCANAVINI Y SCANABISSI”',
    subtitle: "PRIMERA SOCIEDAD",
    description: "Nace la sociedad “Scanavini y Scanabissi”, comenzando con la fabricación de bisagras de bronce por encargo de Ferretería Santiago.",
    image: withVersion("/images/timeline/1950.webp"),
  },
  {
    year: "1951",
    title: "MELIPILLA 7525",
    subtitle: "CAMINO A",
    description: "Se traslada la fábrica a Camino a Melipilla 7525, lugar donde se encuentra ubicada hasta el día de hoy",
    image: withVersion("/images/timeline/1951.webp"),
  },
  {
    year: "1954",
    title: "CERRADURAS",
    subtitle: "PRIMERAS",
    description: "Se empiezan a fabricar las primeras cerraduras Scanavini.",
    image: withVersion("/images/timeline/1954.webp"),
  },
  {
    year: "1958",
    title: "CANDADOS",
    subtitle: "PRIMEROS",
    description: "Empezó la fabricación de los primeros candados.",
    image: withVersion("/images/timeline/1958.webp"),
  },
  {
    year: "1960",
    title: "SOBREPONER 2010",
    subtitle: "1º CERRADURA",
    description: "Se fabricó la primera cerradura de sobreponer 2010 (luego evolucionaría a la cerradura 2002)",
    image: withVersion("/images/timeline/1960.webp"),
  },
  {
    year: "1974",
    title: "ELÉCTRICA",
    subtitle: "1º CERRADURA",
    description: "Se fabricó la primera cerradura de sobreponer eléctrica.",
    image: withVersion("/images/timeline/1974.webp"),
  },
  {
    year: "1997",
    title: "CASA MATRIZ",
    subtitle: "INAUGURACIÓN",
    description: "Se inauguró la nueva Casa Matriz, ubicada en Av. Almte. Blanco Encalada 2545, Santiago",
    image: withVersion("/images/timeline/1997.webp"),
  },
  {
    year: "2000",
    title: "REPRESENTACIONES",
    subtitle: "NUEVAS",
    description: "Se incorporaron nuevas representaciones de marcas europeas; Dorcas, Estamp y Manital.",
    image: withVersion("/images/timeline/2000.webp"),
  },
  {
    year: "2012",
    title: "PERÚ",
    subtitle: "PRESENCIA EN",
    description: "Se inauguró el Showroom en Lima, Perú.",
    image: withVersion("/images/timeline/2012.webp"),
  },
  {
    year: "2023",
    title: "PADRE HURTADO",
    subtitle: "REAPERTURA SHOWROOM",
    description: "Se reinauguró el Showroom ubicado en Av. Padre Hurtado Norte 1251, Vitacura.",
    image: withVersion("/images/timeline/2023.webp"),
  },
  {
    year: "2025",
    title: "SHOWROOM CERRILLOS",
    subtitle: "NUEVO",
    description: "Se inauguró el nuevo Showroom ubicado en la comuna de Cerrillos.",
    image: withVersion("/images/timeline/2025.webp"),
  }
];