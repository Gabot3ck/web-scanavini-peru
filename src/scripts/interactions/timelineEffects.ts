import { timelineData } from "../../data/timelineData";
import type { CardPosition, TimelineItem } from "../../@types";

// CONFIGURACIÓN PRINCIPAL (mantenida)
const CARDS_PER_VIEW: number = 3;
const CARD_WIDTH: number = 240;
const CARD_SPACING: number = 150;
export const INITIAL_OFFSET: number = 600;

// DATOS / DIMENSIONES
export const totalCards: number = timelineData.length;
export const trackWidth: number =
  totalCards * (CARD_WIDTH + CARD_SPACING) + INITIAL_OFFSET + 400;

// ===== LÍNEA RECTA =====
// Baseline “un poco más abajo del centro” (viewBox alto = 600)
const BASELINE_Y = 420;

/**
 * Posiciones lineales para dots/cards (manteniendo INITIAL_OFFSET).
 */
const generateLinearPositions = (data: TimelineItem[]): CardPosition[] => {
  return data.map((_, index): CardPosition => {
    const x = INITIAL_OFFSET + index * (CARD_WIDTH + CARD_SPACING);
    const y = BASELINE_Y;
    return { x, y };
  });
};

export const cardPositions: CardPosition[] = generateLinearPositions(timelineData);

/**
 * Path recto: ahora inicia en x = 0 para que el trazo sea visible desde el inicio,
 * y termina en el último x de las posiciones.
 */
const generateStraightPath = (positions: CardPosition[]): string => {
  if (positions.length < 2) return "";
  const last = positions[positions.length - 1];
  return `M 0,${BASELINE_Y} L ${last.x},${BASELINE_Y}`;
};

export const smoothPath: string = generateStraightPath(cardPositions);
