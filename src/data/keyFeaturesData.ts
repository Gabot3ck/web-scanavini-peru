import { withVersion } from "../scripts/utils/withVersion";

export interface KeyFeature {
  subtitle: string;
  title: string;
  icon: string;
  alt: string;
}

export const keyFeatures: KeyFeature[] = [
  {
    subtitle: "DISEÑO &",
    title: "INNOVACIÓN",
    icon: withVersion("/images/icons/innova.svg"),
    alt: "Icono de innovación"
  },
  {
    subtitle: "GARANTÍA",
    title: "DE POR VIDA",
    icon: withVersion("/images/icons/madeinchile.svg"),
    alt: "Icono de innovación"
  },
  {
    subtitle: "INSTALACIÓN &",
    title: "SERVICIO TÉCNICO",
    icon: withVersion("/images/icons/servicio.svg"),
    alt: "Icono de innovación"
  },
  {
    subtitle: "ASESORÍA",
    title: "EXPERTA",
    icon: withVersion("/images/icons/asesoria.svg"),
    alt: "Icono de innovación"
  },
  {
    subtitle: "COMPROMISO",
    title: "SUSTENTABLE",
    icon: withVersion("/images/icons/sustentable.svg"),
    alt: "Icono de innovación"
  }
]