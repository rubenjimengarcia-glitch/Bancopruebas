// Plataformas de batería de 18 V que cubre la web.
// Solo datos generales y comprobables; las tablas de compatibilidad detalladas van en cada guía.

export interface Platform {
  slug: string;
  brand: string;
  system: string;
  profile: string;
  shares: string;
  summary: string;
}

export const platforms: Platform[] = [
  {
    slug: 'bosch-verde',
    brand: 'Bosch verde',
    system: '18V POWER FOR ALL',
    profile: 'Casa y jardín',
    shares: 'Marcas de la alianza Power for All, como Gardena',
    summary:
      'La gama de Bosch para bricolaje doméstico y jardín. Su batería la usan también otras marcas de la alianza Power for All, así que sirve para cortacésped o sopladores de otros fabricantes.',
  },
  {
    slug: 'bosch-azul',
    brand: 'Bosch azul',
    system: 'Professional 18V',
    profile: 'Uso intensivo y profesional',
    shares: 'Marcas de la alianza AMPShare',
    summary:
      'La línea profesional de Bosch. Más cara que la verde, pensada para uso diario y obra. Forma parte de la alianza AMPShare, que comparte batería con otras marcas profesionales.',
  },
  {
    slug: 'makita-lxt',
    brand: 'Makita',
    system: 'LXT 18V',
    profile: 'Profesional y bricolaje exigente',
    shares: 'Solo herramientas Makita LXT',
    summary:
      'Una de las gamas de 18 V más amplias del mercado, con herramienta de taller, jardín y limpieza. Muy presente en Amazon como herramienta sin batería.',
  },
  {
    slug: 'einhell-pxc',
    brand: 'Einhell',
    system: 'Power X-Change',
    profile: 'Casa y jardín con presupuesto contenido',
    shares: 'Toda la gama Power X-Change de Einhell',
    summary:
      'La opción de precio más contenido entre las grandes. Una misma batería mueve taladros, sierras y mucha herramienta de jardín.',
  },
  {
    slug: 'ryobi-one',
    brand: 'Ryobi',
    system: 'ONE+ 18V',
    profile: 'Bricolaje doméstico',
    shares: 'Toda la gama ONE+ de Ryobi',
    summary:
      'Ryobi mantiene la misma batería ONE+ en toda su gama de 18 V, de herramientas de taller a jardín y pequeños aparatos.',
  },
  {
    slug: 'dewalt-xr',
    brand: 'DeWalt',
    system: 'XR 18V',
    profile: 'Profesional',
    shares: 'Herramientas DeWalt XR; las baterías FlexVolt también funcionan en ellas',
    summary:
      'Gama profesional de DeWalt. Sus baterías FlexVolt sirven tanto en herramientas de 54 V como en las de 18 V XR.',
  },
];
