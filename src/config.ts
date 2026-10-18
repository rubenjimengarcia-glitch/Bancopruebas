// Ajustes generales de la web. Cambia aquí y se actualiza en todas las páginas.

export const SITE = {
  name: 'Banco de Prueba',
  url: 'https://bancodeprueba.com',
  description:
    'Guías y comparativas de herramientas eléctricas a batería para casa, ordenadas por plataforma de batería.',
  author: 'Rubén',
  locale: 'es_ES',
};

// ID de afiliado de Amazon.es. Vacío hasta darse de alta en afiliados.amazon.es.
// Ejemplo cuando lo tengas: 'bancodeprueba-21'
export const AMAZON_TAG = '';

// Datos del titular para el aviso legal (LSSI). Pendientes de rellenar.
export const OWNER = {
  name: 'Rubén Jiménez García',
  nif: '05674683P',
  address: 'Autillo 2, 45005 Toledo, España',
  email: 'hola@bancodeprueba.com',
};

export function amazonUrl(asin: string): string {
  const base = `https://www.amazon.es/dp/${asin}/`;
  return AMAZON_TAG ? `${base}?tag=${AMAZON_TAG}` : base;
}

// Texto de divulgación obligatorio del programa de Afiliados de Amazon.es.
export const AMAZON_DISCLOSURE =
  'Como Afiliado de Amazon, obtengo ingresos por las compras adscritas que cumplen los requisitos aplicables.';
