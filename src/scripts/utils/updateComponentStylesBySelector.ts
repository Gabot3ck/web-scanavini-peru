/**
 * Restablece los estilos de un selector específico dentro de un elemento principal
 * @param parentElement - El elemento principal a seleccionar
 * @param selector - Selector CSS para seleccionar
 * @param classesToRemove - Conjunto de clases CSS a eliminar
 * @param classesToAdd - Conjunto de clases CSS para agregar
 */

export function updateComponentStylesBySelector(
  parentElement: HTMLElement,
  selector: string,
  classesToRemove: string[],
  classesToAdd: string[]
): void {
  const targetElement = parentElement.querySelector(selector) as HTMLElement;
  
  if (targetElement) {
    // Eliminar clases específicas de forma segura
    if (classesToRemove.length > 0) targetElement.classList.remove(...classesToRemove);
    
    // Agregar clases específicas
    if (classesToAdd.length > 0) targetElement.classList.add(...classesToAdd);
  }
}