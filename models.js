export const paginasModeloA = Array.from({ length: 51 }, (_, index) => {
  const page = index + 1;
  return {
    src: `TT4.90/pag-${page}.jpeg`,
    caption: `Página ${page} — Manual de mantenimiento TT4.90`,
  };
});

export const paginasModeloB = Array.from({ length: 27 }, (_, index) => {
  const page = index + 1;
  return {
    src: `Kubota MX5100/pag-${page}.jpeg`,
    caption: `Página ${page} — Manual de mantenimiento Kubota MX5100`,
  };
});

const paginasMasseyFerguson4290 = Array.from({ length: 212 }, (_, index) => {
  const page = index + 1;
  return {
    src: `Massey Ferguson 4290/pag-${page}.jpeg`,
    caption: `Página ${page} — Manual de mantenimiento Massey Ferguson 4290`,
  };
});

const paginasJohnDeere6415 = Array.from({ length: 296 }, (_, index) => {
  const page = index + 1;
  return {
    src: `John Deere 6415/pag-${page}.jpeg`,
    caption: `Página ${page} — Manual de mantenimiento John Deere 6415`,
  };
});

const paginasMasseyFerguson290 = Array.from({ length: 92 }, (_, index) => {
  const page = index + 1;
  return {
    src: `Massey Ferguson 290/pag-${page}.png`,
    caption: `Página ${page} — Manual de mantenimiento Massey Ferguson 290`,
  };
});

const paginasYtoEx754Ex954 = Array.from({ length: 74 }, (_, index) => {
  const page = index + 1;
  return {
    src: `YTO LX804/pag-${page}.png`,
    caption: `Página ${page} — Manual YTO EX754/EX804/EX854/EX904/EX954/EX1024/ELX1054; verificar compatibilidad con LX804`,
  };
});

const paginasCaseJX95 = Array.from({ length: 79 }, (_, index) => {
  const page = index + 1;
  return {
    src: `Case JX95/pag-${page}.png`,
    caption: `Página ${page} — Manual Case agrícola; verificar compatibilidad con JX95`,
  };
});

export const models = {
  A: {
    label: "New Holland",
    fullName: "TT 4.90",
    image: "TT4.90/Tractor.jpg",
    pages: paginasModeloA,
    maintenanceTasks: [
      { hours: 50, name: "Engrase general de puntos de pivote, tracción 4WD y brazo de levante", page: "26-31" },
      { hours: 50, name: "Verificar holgura del pedal de freno y embrague", page: "26-31" },
      { hours: 50, name: "Limpiar/purgar predepurador del filtro de aire", page: "26-31" },
      { hours: 50, name: "Comprobar torque de tuercas de ruedas", page: "26-31" },
      { hours: 300, name: "Cambio de aceite del motor y filtro", page: "33-38" },
      { hours: 300, name: "Reemplazo de filtros de combustible", page: 7 },
      { hours: 300, name: "Limpieza del elemento primario del filtro de aire", page: "33-38" },
      { hours: 300, name: "Inspección de la correa del alternador/ventilador", page: "33-38" },
      { hours: 600, name: "Reemplazo del filtro hidráulico y de transmisión", page: "39-41" },
      { hours: 600, name: "Ajuste de holgura de taqués (válvulas)", page: "39-41" },
      { hours: 600, name: "Limpieza del respiradero de la transmisión", page: "39-41" },
      { hours: 600, name: "Revisión y engrase de rodamientos del eje delantero", page: "39-41" },
      { hours: 1200, name: "Cambio total de aceite hidráulico y transmisión", page: "41-43" },
      { hours: 1200, name: "Cambio de aceite del diferencial y mandos finales (4WD)", page: "41-43" },
      { hours: 1200, name: "Reemplazo del filtro de seguridad interno del aire", page: "41-43" },
      { hours: 1200, name: "Reemplazo del líquido refrigerante del radiador", page: "41-43" },
      { hours: 1200, name: "Inspección del sistema eléctrico y batería", page: "41-43" },
    ],
  },
  B: {
    label: "Kubota",
    fullName: "Kubota MX5100",
    image: "Kubota MX5100/Tractor.jpg",
    pages: paginasModeloB,
    maintenanceTasks: [
      { hours: 50, name: "Engrase general: dirección, eje 4WD, enganche de tres puntos", page: "10-11" },
      { hours: 50, name: "Comprobar presión y estado de neumáticos", page: "10-11" },
      { hours: 50, name: "Ajustar tensión de correa del alternador y A/C", page: "10-11" },
      { hours: 100, name: "Cambio de aceite de motor y filtro", page: "12-16" },
      { hours: 100, name: "Limpieza del filtro de aire (elemento exterior)", page: "12-16" },
      { hours: 100, name: "Comprobar nivel de electrolito de la batería", page: "12-16" },
      { hours: 200, name: "Reemplazo del filtro de combustible/separador de agua", page: "16-18" },
      { hours: 200, name: "Reemplazo del filtro hidráulico y transmisión", page: "16-18" },
      { hours: 200, name: "Ajuste de tensión de pedales de freno y embrague", page: "16-18" },
      { hours: 200, name: "Revisión de alineamiento de ruedas delanteras", page: "16-18" },
      { hours: 400, name: "Cambio de aceite del eje delantero y mandos finales (4WD)", page: 19 },
      { hours: 400, name: "Reemplazo del filtro de aire primario", page: 19 },
      { hours: 500, name: "Inspección de mangueras del sistema de enfriamiento", page: 20 },
      { hours: 500, name: "Limpieza/reemplazo de filtros de A/C de cabina", page: 20 },
      { hours: 800, name: "Cambio total del fluido hidráulico/transmisión", page: 20 },
      { hours: 800, name: "Reemplazo del elemento secundario del filtro de aire", page: 20 },
      { hours: 800, name: "Cambio completo del líquido refrigerante", page: 17 },
      { hours: 800, name: "Reemplazo de mangueras de radiador/dirección asistida", page: 20 },
      { hours: 1000, name: "Ajuste de holgura de válvulas del motor", page: "21-27" },
      { hours: 1000, name: "Verificación de presión de inyectores de combustible", page: "21-27" },
    ],
  },
  C: {
    label: "Case JX95",
    fullName: "Case JX95",
    image: "Case JX95/Tractor.png",
    manualTitle: "Case agrícola — verificar compatibilidad con JX95",
    pages: paginasCaseJX95,
    maintenanceTasks: [
      { hours: 50, name: "Engrasar puntos de pivote, dirección, eje delantero y enganche", page: null },
      { hours: 50, name: "Revisar frenos, embrague, neumáticos y torque de ruedas", page: null },
      { hours: 250, name: "Cambiar aceite y filtro del motor", page: null },
      { hours: 250, name: "Limpiar el sedimentador y revisar filtros de combustible y aire", page: null },
      { hours: 250, name: "Inspeccionar correas, mangueras, niveles y posibles fugas", page: null },
      { hours: 500, name: "Revisar filtros y nivel de aceite de transmisión e hidráulico", page: null },
      { hours: 500, name: "Inspeccionar eje delantero y mandos finales si tiene doble tracción", page: null },
      { hours: 1000, name: "Revisar holgura de válvulas y estado del sistema de enfriamiento", page: null },
      { hours: 1000, name: "Evaluar cambio de aceites y filtros de transmisión e hidráulico según la variante", page: null },
    ],
    maintenanceNote: "CRONOGRAMA ESTIMADO, NO OFICIAL. El manual disponible es de servicio para varias variantes JX; confirma motor, transmisión e intervalos con el manual del operador o un concesionario Case IH antes de efectuar cambios de fluidos o filtros.",
  },
  D: {
    label: "John Deere 6415",
    fullName: "John Deere 6415",
    engine: "PowerTech 4045TL050",
    image: "John Deere 6415/Tractor.png",
    pages: paginasJohnDeere6415,
    maintenanceTasks: [
      { hours: 50, name: "Engrasar eje delantero, dirección, cardanes y enganche", page: null },
      { hours: 50, name: "Revisar frenos, embrague, correas, neumáticos y torque de ruedas", page: null },
      { hours: 250, name: "Cambiar aceite y filtro del motor PowerTech", page: null },
      { hours: 250, name: "Revisar filtros de combustible y aire, niveles y posibles fugas", page: null },
      { hours: 500, name: "Revisar filtros y nivel de aceite de transmisión e hidráulico", page: null },
      { hours: 500, name: "Inspeccionar sistema de enfriamiento, mangueras y conexiones", page: null },
      { hours: 1000, name: "Revisar holgura de válvulas e inyección conforme al motor instalado", page: null },
      { hours: 1000, name: "Evaluar cambio de aceites y filtros de transmisión e hidráulico según la transmisión", page: null },
    ],
    maintenanceNote: "CRONOGRAMA ESTIMADO, NO OFICIAL. La ficha confirma el motor PowerTech 4045TL050, pero no sus intervalos de servicio. Confirma las tareas y frecuencias en el manual del operador según número de serie, transmisión y condiciones de trabajo.",
  },
  E: {
    label: "Massey Ferguson 4290",
    fullName: "Massey Ferguson 4290",
    image: "Massey Ferguson 4290/Tractor.png",
    pages: paginasMasseyFerguson4290,
    maintenanceTasks: [
      { hours: 10, name: "Inspeccionar el nivel de aceite del motor", page: "6-6" },
      { hours: 10, name: "Vaciar agua y suciedad del filtro/sedimentador de combustible", page: "6-6" },
      { hours: 10, name: "Inspeccionar el nivel del líquido de enfriamiento", page: "6-6" },
      { hours: 50, name: "Inspeccionar el nivel de aceite hidráulico y de transmisión", page: "6-7" },
      { hours: 50, name: "Revisar el recorrido libre de los pedales de freno", page: "6-7" },
      { hours: 50, name: "Revisar el ajuste del freno de estacionamiento", page: "6-7" },
      { hours: 100, name: "Sustituir el filtro de retorno del sistema hidráulico (primera sustitución)", page: "6-7" },
      { hours: 250, name: "Inspeccionar el nivel de aceite de los reductores finales traseros", page: "6-7" },
      { hours: 250, name: "Revisar el nivel del líquido de freno", page: "6-7" },
      { hours: 250, name: "Inspeccionar y ajustar la convergencia de las ruedas", page: "6-7" },
      { hours: 500, name: "Limpiar el filtro de succión del sistema hidráulico", page: "6-7" },
      { hours: 500, name: "Cambiar el aceite de transmisión y del sistema hidráulico", page: "6-7" },
      { hours: 500, name: "Cambiar el aceite de los reductores finales traseros", page: "6-7" },
      { hours: 1000, name: "Reapretar los tornillos de la culata del motor", page: "6-7" },
      { hours: 1000, name: "Inspeccionar la precarga de los rodamientos de los reductores finales traseros", page: "6-7" },
      { hours: 1000, name: "Cambiar el fluido del sistema de frenos", page: "6-7" },
    ],
  },
  F: {
    label: "Massey Ferguson 290",
    fullName: "Massey Ferguson 290",
    image: "Massey Ferguson 290/Tractor.png",
    pages: paginasMasseyFerguson290,
    maintenanceTasks: [
      { hours: 10, name: "Revisar el nivel de aceite del motor", page: 53 },
      { hours: 10, name: "Revisar el nivel del agua del radiador", page: 53 },
      { hours: 10, name: "Vaciar agua e impurezas del filtro y sedimentador", page: 53 },
      { hours: 10, name: "Accionar la válvula de descarga de polvo del filtro de aire", page: 53 },
      { hours: 50, name: "Revisar la tensión y el estado de la correa del ventilador", page: 53 },
      { hours: 50, name: "Revisar posibles pérdidas en el motor", page: 53 },
      { hours: 50, name: "Revisar el nivel de aceite de transmisión, eje trasero e hidráulico", page: 54 },
      { hours: 50, name: "Revisar los pedales y el freno de estacionamiento", page: 54 },
      { hours: 250, name: "Cambiar el aceite y el filtro del motor", page: 54 },
      { hours: 250, name: "Limpiar el sedimentador y cambiar el filtro de combustible", page: 54 },
      { hours: 250, name: "Revisar el indicador de restricción del filtro de aire", page: 54 },
      { hours: 250, name: "Revisar niveles de aceite de reductores y diferencial delantero", page: 54 },
      { hours: 500, name: "Limpiar el filtro de tela de la bomba de combustible", page: 54 },
      { hours: 500, name: "Limpiar el respiradero del cárter", page: 54 },
      { hours: 500, name: "Cambiar el aceite de transmisión y reductores finales traseros", page: 54 },
      { hours: 500, name: "Cambiar el aceite de los reductores finales y diferencial delantero (doble tracción)", page: 54 },
      { hours: 1000, name: "Cambiar el líquido del sistema de enfriamiento", page: 54 },
      { hours: 1000, name: "Revisar y ajustar la holgura de válvulas", page: 54 },
      { hours: 1000, name: "Revisar el funcionamiento general del motor y la presión de inyección", page: 54 },
      { hours: 1000, name: "Limpiar el tanque de combustible", page: 54 },
    ],
  },
  G: {
    label: "YTO LX804",
    fullName: "YTO LX804",
    image: "YTO LX804/Tractor.png",
    manualTitle: "YTO EX754/EX804/EX854/EX904/EX954/EX1024/ELX1054 — verificar compatibilidad con LX804",
    pages: paginasYtoEx754Ex954,
    maintenanceTasks: [
      { hours: 10, name: "Revisar el nivel de aceite del motor y de los depósitos indicados en el manual", page: 42 },
      { hours: 10, name: "Revisar los niveles de la batería, dirección hidráulica, radiador y frenos", page: 42 },
      { hours: 10, name: "Engrasar el eje de la bomba de refrigerante y el cubo trasero", page: 42 },
      { hours: 50, name: "Revisar la tensión de la correa del ventilador", page: 42 },
      { hours: 50, name: "Engrasar los pivotes, cilindros de dirección, eje delantero y varillaje", page: 42 },
      { hours: 60, name: "Limpiar o sustituir el elemento del filtro de aceite del elevador hidráulico", page: 42 },
      { hours: 200, name: "Cambiar el aceite del motor y el filtro de aceite", page: 42 },
      { hours: 200, name: "Cambiar el filtro de combustible y el aceite de la bomba de inyección", page: 42 },
      { hours: 200, name: "Limpiar el filtro de aire en baño de aceite", page: 42 },
      { hours: 500, name: "Revisar el nivel de aceite del sistema de transmisión y del elevador hidráulico", page: 43 },
      { hours: 500, name: "Revisar el freno de estacionamiento y engrasar las ruedas delanteras", page: 43 },
      { hours: 500, name: "Revisar el nivel de aceite de la transmisión principal y eje delantero", page: 43 },
      { hours: 1000, name: "Ajustar la holgura de válvulas y la presión de inyección", page: 43 },
      { hours: 1000, name: "Limpiar y mantener el tanque de combustible", page: 43 },
      { hours: 1500, name: "Cambiar el lubricante de la transmisión, elevador hidráulico y eje delantero", page: 43 },
      { hours: 1500, name: "Limpiar el sistema de enfriamiento y sustituir el anticongelante si se utiliza", page: 43 },
    ],
    maintenanceNote: "Cronograma provisional basado en el manual de las variantes YTO EX754/EX804/EX854/EX904/EX954/EX1024/ELX1054. Confirma que corresponde a tu unidad LX804 antes de realizar el servicio.",
  },
};
