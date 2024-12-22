// Método 1: Quitar acentos
const removeAccents = (stringToClean: string): string => {
  return stringToClean.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

// Método 2: Eliminar caracteres especiales
const removeSpecialChars = (stringToClean: string): string => {
  return stringToClean.replace(/[^a-zA-Z0-9 ]/g, ''); // Solo letras, números y espacios.
};

// Método 3: Normalizar espacios
const cleanSpaces = (stringToClean: string): string => {
  return stringToClean.trim().replace(/\s+/g, ' '); // Quita espacios innecesarios.
};

// Método 4: Convertir a minúsculas
const toLowerCase = (stringToClean: string): string => {
  return stringToClean.toLowerCase();
};

// Función principal: Combina todas las limpiezas
export const cleanString = (stringToClean: string): string => {
  const noAccents = removeAccents(stringToClean);
  const noSpecialChars = removeSpecialChars(noAccents);
  const noExtraSpaces = cleanSpaces(noSpecialChars);
  return toLowerCase(noExtraSpaces);
};
