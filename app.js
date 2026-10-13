const API_URL =
  "https://script.google.com/macros/s/AKfycbySoChjVgiZ4cAQb0wx_Bsff9TIA1EOQIihyxqRS71TtSE5jYet7kPLco2lr7MB9e-VEg/exec";
//Paginas del modelo TT4.90
const paginasModeloA = [];
for(let i = 1; i <= 51; i++){
  paginasModeloA.push({src: `TT4.90/pag-${i}.jpeg`,
    caption: `Página ${i} — Manual de mantenimiento TT4.90`})
}
//Paginas del modelo Kubota MX5100
const paginasModeloB = [];
for(let i = 1; i <= 27; i++){
  paginasModeloB.push({src: `Kubota MX5100/pag-${i}.jpeg`,
  caption: `Página ${i} — Manual de mantenimiento Kubota MX5100`})
}

const models = {
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
};

// El Sheet identifica cada fila con un texto como "TT 4.90 - Unidad 1".
// Este mapa traduce ese nombre real de modelo a la clave interna ("A"/"B")
const MODEL_NAME_TO_KEY = {
  "NEW HOLLAND": "A",
  "KUBOTA": "B",
};

// units se llena en tiempo de ejecución con loadFleetData()
let units = [];

/** "TT 4.90 - Unidad 1" -> "tt-4-90-unidad-1" (id interno estable, usado en data-unit) */
function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // quita tildes
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** Convierte una fila cruda del Sheet a la forma interna que usa la UI. */
function mapApiRowToUnit(row) {
  // 1. Limpiamos el texto que viene del sheet (ej: "NEW HOLLAND S62")
  const idStr = String(row.id).trim(); 
  
  // 2. Buscamos el último espacio para separar la marca del número
  const lastSpaceIndex = idStr.lastIndexOf(" ");
  
  // Si por alguna razón no hay espacios, evitamos que el código colapse
  if (lastSpaceIndex === -1) {
    console.warn(`Formato inválido en el Sheet: "${idStr}" (fila ignorada)`);
    return null;
  }

  // 3. Cortamos el texto
  const modelName = idStr.substring(0, lastSpaceIndex).trim(); // Ej: "NEW HOLLAND"
  const unitNumber = idStr.substring(lastSpaceIndex + 1).trim(); // Ej: "S62" o "360"

  const modelKey = MODEL_NAME_TO_KEY[modelName];

  if (!modelKey) {
    console.warn(`Modelo no reconocido en el Sheet: "${modelName}" (fila ignorada)`, row);
    return null;
  }

  return {
    id: slugify(row.id),
    model: modelKey,
    unitLabel: `ID: ${unitNumber}`, 
    hoursUsed: Number(row.horasAcumuladas) || 0,
    lastServiceHours: Number(row.ultimoMantenimiento) || 0,
    currentHours: Number(row.horometroActual) || 0,
  };
}

/** Carga la flota desde el Apps Script y dibuja las tarjetas. */
async function loadFleetData() {
  fleetEl.innerHTML = `<p class="fleet-note">Cargando datos de los tractores…</p>`;
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const rows = await res.json();
    units = rows.map(mapApiRowToUnit).filter(Boolean);

    if (units.length === 0) {
      fleetEl.innerHTML = `<p class="fleet-note fleet-note--error">El Sheet respondió, pero no trajo tractores reconocibles.</p>`;
      return;
    }
    renderFleet();
  } catch (err) {
    console.error("Error cargando datos del Sheet:", err);
    fleetEl.innerHTML = `
      <p class="fleet-note fleet-note--error">
        No se pudo cargar la información de los tractores.
        Revisa tu conexión y vuelve a intentar.
      </p>`;
  }
}

const statusText = {
  ok: "Al día",
  proximo: "Servicio próximo",
  urgente: "Servicio urgente",
};

/* ============================================================
   LÓGICA DE PRIORIDAD DE MANTENIMIENTO
   ------------------------------------------------------------
   Compara las horas transcurridas de un tractor (unit.hoursUsed)
   contra cada tarea programada de su modelo, y clasifica cada
   tarea vencida en uno de tres niveles según cuánto tiempo pasó
   desde que tocaba hacerla:

     diff = hoursUsed - task.hours

     diff < 0        → la tarea aún no toca, se ignora
     diff === 0      → "warning"  🔧  justo a tiempo
     1 <= diff <= 5   → "urgent"   ⚠️  dentro del margen de tolerancia
     diff > 5         → "overdue"  ‼️  ya pasó el margen de tolerancia

   Si ninguna tarea está vencida, el tractor está en buen estado
   (Estado 1) y se devuelve un arreglo vacío.
   ============================================================ */
const PRIORITY_META = {
  warning: { icon: "🔧", label: "Pendiente", order: 2 },
  urgent:  { icon: "⚠️", label: "En riesgo", order: 1 },
  overdue: { icon: "‼️", label: "Crítico", order: 0 },
};

function getMaintenanceStatus(unit) {
  const model = models[unit.model];

  const dueItems = model.maintenanceTasks
    .map((task) => {
      const diff = unit.hoursUsed - task.hours;
      let state = null;
      if (diff === 0) state = "warning";
      else if (diff >= 1 && diff <= 5) state = "urgent";
      else if (diff > 5) state = "overdue";
      return state ? { ...task, diff, state } : null;
    })
    .filter(Boolean);

  // Las tareas vencidas (⚠️/‼️) van primero que las que apenas se cumplen
  // hoy (🔧); dentro de un mismo nivel, la de mayor exigencia (más horas)
  // primero.
  dueItems.sort((a, b) => {
    const orderDiff = PRIORITY_META[a.state].order - PRIORITY_META[b.state].order;
    return orderDiff !== 0 ? orderDiff : b.hours - a.hours;
  });

  return dueItems;
}

// RENDER DE TARJETAS

const fleetEl = document.getElementById("fleet");

/**
 * Formatea horas transcurridas desde el último mantenimiento en un
 * texto legible:
 *  - < 24 h  → "Han pasado 18 horas de su último mantenimiento"
 *  - >= 24 h → "Ha pasado 1 día con 2 h del último mantenimiento"
 */
function formatElapsedTime(hours) {
  const h = Math.round(hours * 10) / 10; // redondeo a 1 decimal por si el horómetro trae ej. 104.5
  if (h < 24) {
    return `${h} h de trabajo acumuladas`;
  }
  const days = Math.floor(h / 24);
  const remainingHours = Math.round((h - days * 24) * 10) / 10;
  const dayWord = days === 1 ? "día" : "días";
  return `Ha acumulado ${days} ${dayWord} con ${remainingHours} h de trabajo`;
}

/*/**
 * Nivel de "salud" del tractor (ya NO depende del tiempo restante
 * para el próximo umbral, sino de las tareas realmente vencidas).
 * Arranca en 100% y se le resta una penalización por cada tarea
 * pendiente/vencida, según su gravedad
 *   - warning (a tiempo, diff === 0)       -10%
 *   - urgent  (en riesgo, diff 1–5)        -25%
 *   - overdue (crítico, diff > 5)          -40%
 * Las penalizaciones son acumulativas (varias tareas se suman) y
 * el resultado se limita siempre al rango [0, 100].
 */
function batteryLevel(unit) {
  const PENALTIES = { warning: 10, urgent: 25, overdue: 40 };

  const dueItems = getMaintenanceStatus(unit);
  const totalPenalty = dueItems.reduce(
    (sum, item) => sum + (PENALTIES[item.state] || 0),
    0
  );

  return Math.max(0, Math.min(100, 100 - totalPenalty));
}

/**
 * Estado (color) de la tarjeta, derivado del nuevo nivel de salud.
 * Con los nuevos cortes:
 *   - ok      (>= 90): como mucho una tarea "a tiempo" pendiente.
 *   - proximo (70–89): cubre 1 tarea "en riesgo" (75%) o varias
 *              "a tiempo" acumuladas.
 *   - urgente (< 70):  cubre 1 sola tarea "crítica" (60%) o
 *              cualquier combinación más grave.
 */
function deriveStatus(level) {
  if (level >= 90) return "ok";
  if (level >= 70) return "proximo";
  return "urgente";
}

function renderFleet() {
  fleetEl.innerHTML = units.map(unitCardHTML).join("");

  // Tarjetas clicables: clic o Enter/Espacio (accesibilidad de teclado).
  // Ahora abren primero el panel de prioridad, no el manual directamente.
  fleetEl.querySelectorAll(".unit-card").forEach((card) => {
    card.addEventListener("click", () => openPriorityModal(card.dataset.unit));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openPriorityModal(card.dataset.unit);
      }
    });
  });
}

function unitCardHTML(unit) {
  const model = models[unit.model];
  const level = batteryLevel(unit);
  const status = deriveStatus(level);

  // Imagen de referencia del modelo. Si `models[x].image` existe, se usa
  // un <img> a pantalla completa dentro del contenedor; si no, se muestra
  // un placeholder grande con icono + nombre del modelo (para que la
  // imagen siga siendo protagonista aunque aún no haya foto real).
  const mediaHTML = model.image
    ? `<img src="${model.image}" alt="Tractor ${model.label} — ${model.fullName}">`
    : `<svg class="unit-card__media-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">
         <path d="M4 16a3 3 0 1 0 6 0 3 3 0 0 0-6 0z"/>
         <path d="M14 17a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0z"/>
         <path d="M7 16V8h4l3 4h2.5a1.5 1.5 0 0 1 1.5 1.5V17"/>
         <path d="M11 8V5H8"/>
       </svg>
       <span class="unit-card__media-caption">Foto pendiente &mdash; ${model.label}</span>`;

  return `
    <article class="unit-card" data-status="${status}" data-unit="${unit.id}"
              tabindex="0" role="button"
              aria-label="Abrir manual de ${model.label}, ${unit.unitLabel}, ${statusText[status]}">

      <div class="unit-card__media" aria-hidden="true">${mediaHTML}</div>

      <div class="unit-card__body">
        <div class="unit-card__headline">
          <div>
            <p class="unit-card__label">${unit.unitLabel} &middot; Horómetro ${unit.currentHours} h</p>
            <h2 class="unit-card__name">Tractor ${model.label}</h2>
          </div>
          <span class="unit-card__model-tag">${model.label}</span>
        </div>

        <p class="unit-card__meta">${model.fullName}</p>

        <div class="progress" data-hours-used="${unit.hoursUsed}">
          <div class="progress__bar">
            <span class="progress__icon" aria-hidden="true">&#128668;&#9201;&#65039;</span>
            <div class="progress__track">
              <div class="progress__fill" style="width:${level}%"></div>
            </div>
            <span class="progress__pct">${level}%</span>
          </div>
          <p class="progress__caption">${formatElapsedTime(unit.hoursUsed)}</p>
        </div>

        <div class="unit-card__flag unit-card__flag--${status}">
          <span class="status-dot status-dot--${status}" aria-hidden="true"></span>
          ${statusText[status]}
        </div>

        <button class="unit-card__cta" type="button" tabindex="-1">
          Ver Estado
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M9 6l6 6-6 6"/>
          </svg>
        </button>
      </div>
    </article>
  `;
}

// MODAL 1 — PRIORIDAD DE MANTENIMIENTO
// Paso intermedio que se abre al hacer clic en una tarjeta.
let currentUnit = null;

const priorityOverlay = document.getElementById("priorityModal");
const priorityCloseBtn = document.getElementById("priorityCloseBtn");
const priorityBodyEl = document.getElementById("priorityBody");
const priorityUnitLabelEl = document.getElementById("priorityUnitLabel");
const continueToManualBtn = document.getElementById("continueToManualBtn");

function openPriorityModal(unitId) {
  const unit = units.find((u) => u.id === unitId);
  if (!unit) return;

  currentUnit = unit;
  priorityUnitLabelEl.textContent = `${models[unit.model].label} · ${unit.unitLabel}`;
  priorityBodyEl.innerHTML = renderPriorityBody(unit);

  priorityOverlay.dataset.open = "true";
  priorityOverlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  priorityCloseBtn.focus();
}

function closePriorityModal() {
  priorityOverlay.dataset.open = "false";
  priorityOverlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function renderPriorityBody(unit) {
  const dueItems = getMaintenanceStatus(unit);

  // Estado 1: nada vencido todavía
  if (dueItems.length === 0) {
    return `
      <div class="priority-empty">
        <svg class="priority-empty__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
          <path d="M9 12l2 2 4-4"/>
          <circle cx="12" cy="12" r="9"/>
        </svg>
        <p class="priority-empty__text">Tractor en buen mantenimiento</p>
        <p class="priority-empty__hint">${formatElapsedTime(unit.hoursUsed)} &middot; sin tareas vencidas</p>
      </div>
    `;
  }

  // Estados 2, 3 y 4: lista de tareas vencidas/por cumplir
  const itemsHTML = dueItems
    .map((item) => {
      const meta = PRIORITY_META[item.state];
      return `
        <li class="priority-item priority-item--${item.state}">
          <span class="priority-item__icon" aria-hidden="true">${meta.icon}</span>
          <div class="priority-item__body">
            <p class="priority-item__name">${item.name}</p>
            <p class="priority-item__meta">Pág ${item.page} &middot; ${formatElapsedTime(unit.hoursUsed)}</p>
          </div>
          <span class="priority-item__badge">${meta.label}</span>
        </li>
      `;
    })
    .join("");

  return `
    <ul class="priority-list">${itemsHTML}</ul>
    <p class="priority-list__note">${formatElapsedTime(unit.hoursUsed)}</p>
  `;
}

// MODAL 2 — VISOR DE MANUAL
// (compartido por modelo: 2 unidades del mismo modelo abren
//  el mismo conjunto de páginas, pero el encabezado sigue
//  identificando la unidad física exacta). Se abre al presionar
//  "Continuar a manual" en el modal de prioridad.

let currentPage = 0;

const overlay = document.getElementById("manualModal");
const closeBtn = document.getElementById("modalCloseBtn");
const prevBtn = document.getElementById("prevPageBtn");
const nextBtn = document.getElementById("nextPageBtn");
const pageEl = document.getElementById("manualPage");
const titleEl = document.getElementById("modalTitle");
const unitLabelEl = document.getElementById("modalUnitLabel");
const pageCurrentEl = document.getElementById("pageCurrent");
const pageTotalEl = document.getElementById("pageTotal");

function openManual() {
  if (!currentUnit) return;
  const model = models[currentUnit.model];

  currentPage = 0;

  titleEl.textContent = `Manual — Tractor ${model.label}`;
  unitLabelEl.textContent = `${currentUnit.unitLabel} · Horómetro ${currentUnit.currentHours} h`;
  pageTotalEl.textContent = model.pages.length;

  renderPage();

  overlay.dataset.open = "true";
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  closeBtn.focus();
}

function closeManual() {
  overlay.dataset.open = "false";
  overlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  currentUnit = null;
}

function renderPage() {
  const model = models[currentUnit.model];
  const page = model.pages[currentPage];

  pageEl.innerHTML = `<img src="${page.src}" alt="${page.caption}"> <p class="manual-page__caption">${page.caption}</p>`;

  pageCurrentEl.textContent = currentPage + 1;
  prevBtn.disabled = currentPage === 0;
  nextBtn.disabled = currentPage === model.pages.length - 1;

  //Precargar la siguiente página en segundo plano
  if (currentPage < model.pages.length - 1) {
    const imgPrecarga = new Image();
    imgPrecarga.src = model.pages[currentPage + 1].src;
  }
}

function goToPrevPage() {
  if (currentPage > 0) {
    currentPage -= 1;
    renderPage();
  }
}

function goToNextPage() {
  const model = models[currentUnit.model];
  if (currentPage < model.pages.length - 1) {
    currentPage += 1;
    renderPage();
  }
}

// EVENTOS

// Modal de prioridad
priorityCloseBtn.addEventListener("click", closePriorityModal);
priorityOverlay.addEventListener("click", (e) => {
  if (e.target === priorityOverlay) closePriorityModal();
});
continueToManualBtn.addEventListener("click", () => {
  closePriorityModal();
  openManual();
});

// Modal de manual
closeBtn.addEventListener("click", closeManual);
prevBtn.addEventListener("click", goToPrevPage);
nextBtn.addEventListener("click", goToNextPage);

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeManual();
});

// Teclado: Escape cierra el modal que esté abierto; las flechas solo
// pasan página cuando el visor de manual está activo.
document.addEventListener("keydown", (e) => {
  if (priorityOverlay.dataset.open === "true") {
    if (e.key === "Escape") closePriorityModal();
    return;
  }
  if (overlay.dataset.open !== "true") return;
  if (e.key === "Escape") closeManual();
  if (e.key === "ArrowLeft") goToPrevPage();
  if (e.key === "ArrowRight") goToNextPage();
});

loadFleetData();
