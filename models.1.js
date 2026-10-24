import { paginasModeloA, paginasModeloB } from "./models";


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
    image: null,
    pages: [],
    maintenanceTasks: { hours: 50, name: "Engrase general: dirección, eje 4WD, enganche de tres puntos", page: "10-11" },
  }
};
