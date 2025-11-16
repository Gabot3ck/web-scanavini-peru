interface Testimonial {
  name: string;
  position?: string;
  company: string;
  testimonial: string;
  rating: number;
}


export const testimonials: Testimonial[] = [
  {
    name: "Manuel Hevia",
    company: "Quincallería San Luis",
    testimonial: "Scanavini hasta el momento es la mejor cerradura del mercado nacional. Tiene el mejor respaldo en calidad ,servicio técnico y postventa.",
    rating: 5,
  },
  {
    name: "Catalina Ramírez",
    company: "Icafal Construcciones",
    testimonial: "El equipo de venta y de apoyo realmente ha mejorado la respuesta a la adquisición de producto. Da confianza y resuelve dudas e inconvenientes en el instante para dar el mejor servicio de venta.",
    rating: 5,
  },
  {
    name: "Cristhopher Contreras",
    company: "DPC Constructora",
    testimonial: "El área de constructora es un equipo muy comprometido y profesional, siempre dispuestos a apoyar y a buscar soluciones rápidas. Da confianza trabajar con ellos porque se nota la experiencia y el buen trato que entregan.",
    rating: 5,
  },
  {
    name: "Isidora Lobos",
    company: "Ofic. de Arq. Víctor Lobos Arquitectis",
    testimonial: "Elegimos Scanavini por su excelente atención, la rapidez en la atención es sin duda un fuerte.",
    rating: 5,
  },
  {
    name: "Alfonso Huilcaman",
    company: "Ferretería Alfonso Huilcaman",
    testimonial: "No hay mejor que los productos Scanavini, es lo mejor en calidad.",
    rating: 5,
  },
  {
    name: "Ernesto Durán",
    company: "Ferretería Abasolo y Cía. Ltda.",
    testimonial: "Los productos Scanavini es lo que más recomendamos por la durabilidad y su calidad.",
    rating: 5,
  },
  {
    name: "David Navarro",
    company: "Ferretería Pamela Dittborn Spa",
    testimonial: "Elegimos Scanavini por experiencia de vida por ser una empresa de trayectoria, calidad y producto nacional.",
    rating: 5,
  },
  {
    name: "Félix Painenao",
    company: "Ing. y Const. Ricardo Rodriguez",
    testimonial: "Muy buena el área de Constructoras,  me dan todo el apoyo antes de comprar, muy buena atención y rápida",
    rating: 5,
  },
];