import c1 from '../assets/projects/conectaobra-hero.webp'
import c2 from '../assets/projects/conectaobra-objetivos.webp'
import c3 from '../assets/projects/conectaobra-directorio.webp'
import c4 from '../assets/projects/conectaobra-registro.webp'
import c5 from '../assets/projects/conectaobra-contacto.webp'
import m1 from '../assets/projects/motorsev-hero.webp'
import m2 from '../assets/projects/motorsev-stock.webp'
import m3 from '../assets/projects/motorsev-tasacion.webp'
import m4 from '../assets/projects/motorsev-clientes.webp'
import m5 from '../assets/projects/motorsev-footer.webp'
import t1 from '../assets/projects/teleclub-hero.webp'
import t2 from '../assets/projects/teleclub-nosotros.webp'
import t3 from '../assets/projects/teleclub-espacio.webp'
import t4 from '../assets/projects/teleclub-carta.webp'
import t5 from '../assets/projects/teleclub-carta2.webp'
import t6 from '../assets/projects/teleclub-voces.webp'
import l1 from '../assets/projects/luna-hero.webp'
import l2 from '../assets/projects/luna-servicios.webp'
import l3 from '../assets/projects/luna-precios.webp'
import l4 from '../assets/projects/luna-hacemos.webp'
import l5 from '../assets/projects/luna-confiar.webp'
import l6 from '../assets/projects/luna-sem.webp'
import l7 from '../assets/projects/luna-sem2.webp'
import l8 from '../assets/projects/luna-resultados.webp'
import b1 from '../assets/projects/biblio-hero.webp'
import b2 from '../assets/projects/biblio-contacto.webp'
import r1 from '../assets/projects/rural-hero.webp'
import r2 from '../assets/projects/rural-ofrece.webp'
import r3 from '../assets/projects/rural-apartamentos.webp'
import r4 from '../assets/projects/rural-experiencia.webp'
import r5 from '../assets/projects/rural-opiniones.webp'

export const projects = [
  {
    slug: 'conectaobra', name: 'ConectaObra', type: 'Plataforma web B2B · Construcción', cover: c1, pos: '18% top',
    summary: 'Una red online que conecta constructoras, subcontratas, instaladores, ingenierías y proveedores del sector construcción.',
    info: [['Tipo', 'Plataforma web B2B'], ['Sector', 'Construcción'], ['Idioma', 'Español']],
    text: [
      'ConectaObra reúne a constructoras, subcontratas, instaladores, ingenierías y proveedores para que puedan encontrar colaboradores y oportunidades de negocio sin depender solo de su agenda.',
      'La web explica la propuesta desde la portada y separa dos caminos claros: quien necesita colaboradores para una obra y quien quiere encontrar nuevos proyectos. Incluye un directorio público con buscador por especialidad y provincia, registro gratuito de empresas y un programa de Empresas Fundadoras para el lanzamiento.',
    ],
    feats: ['Portada con propuesta de valor y accesos directos', 'Selector de objetivo para constructoras y subcontratas', 'Directorio de empresas por especialidad y provincia', 'Perfiles de empresa y registro gratuito', 'Programa de Empresas Fundadoras', 'Página de contacto con formulario'],
    images: [
      { src: c1, alt: 'Portada de ConectaObra', cap: 'Portada: propuesta de valor, accesos al registro y al directorio.' },
      { src: c2, alt: 'Selector de objetivo de ConectaObra', cap: 'Selector de objetivo: constructora que busca colaboradores o empresa que busca proyectos.' },
      { src: c3, alt: 'Directorio de empresas de ConectaObra', cap: 'Directorio B2B con buscador por especialidad y provincia.' },
      { src: c4, alt: 'Registro de empresa en ConectaObra', cap: 'Registro gratuito del perfil de empresa.' },
      { src: c5, alt: 'Página de contacto de ConectaObra', cap: 'Página de contacto con formulario de mensaje.' },
    ],
  },
  {
    slug: 'motor-sev', name: 'Motor Sev', type: 'Web para concesionario de coches', cover: m1, pos: '10% top',
    summary: 'La web de un concesionario de vehículos de segunda mano en Sevilla, pensada para buscar coche, tasar el tuyo y contactar rápido.',
    info: [['Tipo', 'Web para concesionario'], ['Sector', 'Automoción · Sevilla'], ['Idioma', 'Español']],
    text: [
      'Motor Sev es la web de un concesionario de coches de segunda mano en Sevilla. Su mensaje es claro: vehículos revisados, garantizados y al mejor precio, con financiación flexible.',
      'El diseño oscuro con rojo intenso da carácter de marca de motor. Desde la portada se puede buscar por marca, modelo, precio, año, combustible y kilómetros, y la web recorre el stock destacado, la tasación gratuita, las opiniones de clientes y los datos de contacto.',
    ],
    feats: ['Buscador de vehículos con filtros', 'Vehículos destacados con etiquetas y precio', 'Tasación gratuita explicada en tres pasos', 'Opiniones de clientes y cifras de confianza', 'Financiación y venta de tu coche', 'Pie con navegación, marcas y contacto'],
    images: [
      { src: m1, alt: 'Portada de Motor Sev', cap: 'Portada con buscador de vehículos y ventajas destacadas.' },
      { src: m2, alt: 'Vehículos destacados de Motor Sev', cap: 'Vehículos destacados con etiquetas, datos clave y precio.' },
      { src: m3, alt: 'Sección de tasación de Motor Sev', cap: 'Tasación gratuita explicada en tres pasos.' },
      { src: m4, alt: 'Opiniones y cifras de Motor Sev', cap: 'Opiniones de clientes y cifras de confianza.' },
      { src: m5, alt: 'Cierre y pie de Motor Sev', cap: 'Llamada a la acción final y pie con navegación, marcas y contacto.' },
    ],
  },
  {
    slug: 'teleclub-valverde', name: 'Nuevo Teleclub Valverde', type: 'Web para bar de pueblo', cover: t1, pos: '12% top',
    summary: 'La web de un bar de pueblo en Valverde de Burguillos (Badajoz): cálida, con carta digital y fotos reales del local.',
    info: [['Tipo', 'Web para bar de pueblo'], ['Sector', 'Hostelería · Badajoz'], ['Idioma', 'Español']],
    text: [
      'El Nuevo Teleclub Valverde es un bar en el centro de Valverde de Burguillos (Badajoz) que recupera el espíritu del teleclub de toda la vida con una vuelta moderna.',
      'La web transmite esa cercanía: portada con la fachada del local, historia del teleclub, fotografías reales del espacio, opiniones de los vecinos y una carta digital con precios, con botón para llamar y reservar.',
    ],
    feats: ['Portada con la fachada real del local', 'Sección Sobre nosotros con historia y valores', 'Galería de fotografías reales', 'Carta digital: pescados, carnes y bocadillos', 'Voces del pueblo: opiniones de vecinos', 'Botón para llamar y reservar'],
    images: [
      { src: t1, alt: 'Portada del Nuevo Teleclub Valverde', cap: 'Portada con la fachada del local y accesos a la carta.' },
      { src: t2, alt: 'Sobre nosotros del Nuevo Teleclub Valverde', cap: 'Sobre nosotros: historia del teleclub y valores (tradición, cercanía, buena mesa).' },
      { src: t3, alt: 'Galería del Nuevo Teleclub Valverde', cap: 'Galería «Nuestro espacio» con fotografías reales del local.' },
      { src: t4, alt: 'Carta del Nuevo Teleclub Valverde', cap: 'Carta digital: pescados y carnes con precios.' },
      { src: t5, alt: 'Bocadillos y montados del Nuevo Teleclub Valverde', cap: 'Bocadillos y montados, con botón para llamar y reservar.' },
      { src: t6, alt: 'Opiniones del Nuevo Teleclub Valverde', cap: 'Voces del pueblo y pie de página con contacto.' },
    ],
  },
  {
    slug: 'luna-studio', name: 'Luna Studio', type: 'Web para agencia de marketing digital', cover: l1, pos: '50% top',
    summary: 'La web de Luna Studio, agencia de marketing digital en Sevilla: formulario de contacto en portada, servicios, precios y campañas SEM explicadas.',
    info: [['Tipo', 'Web para agencia de marketing'], ['Sector', 'Marketing digital · Sevilla'], ['Idioma', 'Español']],
    text: [
      'Luna Studio es una agencia de marketing digital en Sevilla. Su web recibe al visitante con un formulario de contacto directo en la propia portada, junto al mensaje "Somos la mejor agencia de marketing digital en Sevilla".',
      'A partir de ahí explica sus tres servicios principales (desarrollo y diseño web, optimización SEO y anuncios en internet), muestra planes con precios cerrados, y dedica una sección completa a las campañas SEM: qué son, en qué plataformas se hacen (Google Ads, Meta Ads, TikTok Ads y LinkedIn Ads) y qué resultados persigue para sus clientes.',
    ],
    feats: ['Formulario de contacto en la propia portada', 'Bloque de servicios: web, SEO y anuncios', 'Planes con precios: Diseño web + SEO, SEO + SEM, Redes + SEO', '"Cómo lo hacemos" y "Por qué confiar en nosotros"', 'Sección explicativa de campañas SEM', 'Resultados que persigue para cada cliente'],
    images: [
      { src: l1, alt: 'Portada de Luna Studio', cap: 'Portada con formulario de contacto y CTA de auditoría gratuita.' },
      { src: l2, alt: 'Servicios de Luna Studio', cap: 'Servicios: desarrollo y diseño web, optimización SEO y anuncios en internet.' },
      { src: l3, alt: 'Planes y precios de Luna Studio', cap: 'Planes y precios: Diseño web + SEO, SEO + SEM y Redes Sociales + SEO.' },
      { src: l4, alt: 'Cómo lo hacen en Luna Studio', cap: 'Cómo lo hacen: herramientas de diseño, estrategia y optimización desde el primer día.' },
      { src: l5, alt: 'Por qué confiar en Luna Studio', cap: 'Por qué confiar en ellos: proceso cercano y compromiso con los resultados.' },
      { src: l6, alt: 'Qué son las campañas SEM', cap: 'Qué son las campañas SEM y en qué plataformas se hacen.' },
      { src: l7, alt: 'Cómo trabajan el SEM en Luna Studio', cap: 'Cómo trabajan el SEM: segmentación, creatividades y optimización continua.' },
      { src: l8, alt: 'Resultados que busca Luna Studio', cap: 'Resultados que persiguen para el cliente: tráfico, leads, conversión y ROAS.' },
    ],
  },
  {
    slug: 'biblioteca-virtual', name: 'Biblioteca Virtual', type: 'Web para catálogo de libros', cover: b1, pos: '50% top',
    summary: 'Un catálogo digital de libros recomendados, con ficción, ensayo, misterio y biografías, y un formulario para pedir un título en especial.',
    info: [['Tipo', 'Web de catálogo digital'], ['Sector', 'Cultura y lectura'], ['Idioma', 'Español']],
    text: [
      'Biblioteca Virtual es un catálogo digital de recomendaciones literarias: ficción, ensayo, misterio y biografías, presentado con las portadas de los libros.',
      'La portada invita a "descubrir tu próxima gran lectura" y lleva directamente al catálogo. Más abajo, un formulario permite pedir un título en especial o dejar sugerencias para ampliar el catálogo.',
    ],
    feats: ['Portada con acceso directo al catálogo', 'Libros recomendados con su portada', 'Formulario para pedir un título en especial', 'Sugerencias de nuevos libros para el catálogo'],
    images: [
      { src: b1, alt: 'Portada de Biblioteca Virtual', cap: 'Portada con catálogo de libros recomendados destacados.' },
      { src: b2, alt: 'Formulario de contacto de Biblioteca Virtual', cap: 'Formulario para solicitar un título o sugerir uno nuevo al catálogo.' },
    ],
  },
  {
    slug: 'ruraliasur', name: 'Ruraliasur', type: 'Web para alojamiento vacacional', cover: r1, pos: '50% top',
    summary: 'Apartamentos vacacionales en Conil de la Frontera (Cádiz): reserva directa, sin intermediarios, con listado de alojamientos y opiniones reales.',
    info: [['Tipo', 'Web para alojamiento vacacional'], ['Sector', 'Turismo · Costa de la Luz, Cádiz'], ['Idioma', 'Español']],
    text: [
      'Ruraliasur ofrece apartamentos vacacionales en Conil de la Frontera, en la Costa de la Luz gaditana, con reserva directa y sin intermediarios.',
      'La web recibe con la temperatura media y el precio desde el que se puede reservar, explica lo que ofrece cada alojamiento (cercanía al mar, privacidad, entorno natural), muestra el listado de apartamentos con precio por noche y cierra con opiniones reales de huéspedes y las cifras de la marca.',
    ],
    feats: ['Portada con clima, ubicación y precio desde', 'Bloque "Todo lo que necesitas para descansar"', 'Listado de apartamentos con disponibilidad y precio', 'Sección de destino: playas, gastronomía y rutas', 'Cifras de confianza: huéspedes, alojamientos y satisfacción', 'Opiniones reales de huéspedes'],
    images: [
      { src: r1, alt: 'Portada de Ruraliasur', cap: 'Portada con la propuesta de apartamentos en Conil de la Frontera, Cádiz.' },
      { src: r2, alt: 'Qué ofrece Ruraliasur', cap: 'Todo lo que ofrecen: cercanía al mar, privacidad, entorno natural y reserva directa.' },
      { src: r3, alt: 'Apartamentos de Ruraliasur', cap: 'Listado de apartamentos disponibles con precio por noche.' },
      { src: r4, alt: 'Experiencia Ruraliasur', cap: 'La experiencia Ruraliasur: playas, gastronomía, rutas y cifras de confianza.' },
      { src: r5, alt: 'Opiniones de Ruraliasur', cap: 'Opiniones reales de huéspedes.' },
    ],
  },
]
