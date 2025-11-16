/**
 * Restablece los estilos de un selector específico dentro de un elemento principal
 * @param parentElement - El elemento principal a seleccionar
 * @param selector - Selector CSS para seleccionar
 * @param classesToRemove - Conjunto de clases CSS a eliminar
 * @param classesToAdd - Conjunto de clases CSS para agregar
 */

export function updateComponentStylesBySelectorAll(
  parentElement: HTMLElement,
  selector: string,
  classesToRemove: string[],
  classesToAdd: string[]
): void {
  const targetElement = parentElement.querySelectorAll(selector) as NodeListOf<HTMLElement>;

  targetElement.forEach((element) => {
    // Eliminar clases específicas de forma segura
    if (classesToRemove.length > 0) element.classList.remove(...classesToRemove);
    
    // Agregar clases específicas
    if (classesToAdd.length > 0) element.classList.add(...classesToAdd);
  });
}