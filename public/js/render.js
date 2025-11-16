// Refs UI
const qEl = document.getElementById('q');
const sortEl = document.getElementById('sort');
const rows = document.getElementById('rows');
const meta = document.getElementById('meta');
const facetFams = document.getElementById('facet-fams');
const facetCats = document.getElementById('facet-cats');
const activeFilters = document.getElementById('active-filters');
const pageSizeEl = document.getElementById('pageSize');
const pagerEl = document.getElementById('pager');

let RAW = [];       // productos originales del JSON (todas las columnas)
let products = [];  // adaptados para búsqueda (name/category/subcategory/sku/...)
let q = '';
const fams = new Set(); // NUEVO: Familias seleccionadas
const cats = new Set();
const subs = new Set();
let sortMode = 'score'; // 'name' | 'sku' | 'score' (relevancia)


// Paginación (cliente)
let currentPage = 1;
let pageSize = Number(pageSizeEl?.value || 10);



// Utils
const norm = (s) => (s ?? '').toString().toLowerCase()
  .normalize('NFKD').replaceAll(/\p{Diacritic}/gu,'');
const byName = (a, b) => norm(a.name).localeCompare(norm(b.name));
const bySku  = (a, b) => norm(a.sku).localeCompare(norm(b.sku));

function adapt(raw) {
  // Mantiene claves originales y añade las usadas para búsqueda
  return raw.map(p => ({
    ...p,
    name: p.descripcion,
    category: p.categoria,
    subcategory: p.subcategoria,
    downloadUrl: p.ficha || '#'
  }));
}

// ------- FACETS -------
function buildFamFacet() {
  const families = Array.from(new Set(products.map(p => p.familia))).sort((a, b) => a - b);
  facetFams.innerHTML = families.map(f => `
    <label class="inline-flex items-center gap-2 text-sm">
      <input 
        type="checkbox" 
        value="${f}" 
        class="accent-brand " 
      />
      <span>${f}</span>
    </label>
  `).join('');
  facetFams.querySelectorAll('input[type=checkbox]').forEach(cb => cb.addEventListener('change', onFamToggle));
}

function buildCatFacet() {
  // Categorías dependen de Familias seleccionadas
  const source = fams.size ? products.filter(p => fams.has(p.familia)) : products;

  // 1) Obtener categorías válidas (string + trim) y descartar vacías (soporta `category` o `categoria`)
  const categories = Array.from(
    new Set(
      source
        .map(p => (p.category ?? p.categoria ?? '').toString().trim())
        .filter(Boolean)
    )
  ).sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }));

  // 2) Preservar seleccionadas válidas; limpiar el resto
  const snapshot = new Set(cats);
  const allowed = new Set(categories);
  cats.clear();
  for (const v of snapshot) {
    if (allowed.has(v)) cats.add(v);
  }

  // 3) Si no hay categorías disponibles, no renderizar checkboxes vacíos
  if (categories.length === 0) {
    facetCats.innerHTML = `<span class="text-neutral-grey text-sm">Sin categorías disponibles</span>`;
    return;
  }

  // 4) Render de categorías
  facetCats.innerHTML = categories
    .map(cat => `
      <label class="inline-flex items-center gap-2 text-sm">
        <input type="checkbox" value="${cat}" class="accent-brand" ${snapshot.has(cat) ? 'checked' : ''}/>
        <span>${cat}</span>
      </label>
    `)
    .join('');

  // 5) Reasignar listeners y rehidratar selección
  facetCats.querySelectorAll('input[type=checkbox]').forEach(cb => {
    if (snapshot.has(cb.value)) cats.add(cb.value);
    cb.addEventListener('change', onCatToggle);
  });
}


// ------- HANDLERS -------
function onFamToggle(e) {
  const cb = e.target;
  if (cb.checked) fams.add(cb.value); else fams.delete(cb.value);

  // Al cambiar Familias: recalcular categorías y subcategorías
  buildCatFacet();
  currentPage = 1; // reset paginación al cambiar filtros
  render();
}

function onCatToggle(e) {
  const cb = e.target;
  if (cb.checked) cats.add(cb.value); else cats.delete(cb.value);

  // Al cambiar Categorías: recalcular subcategorías
  currentPage = 1; // reset paginación
  render();
}

function onSubToggle(e) {
  const cb = e.target;
  if (cb.checked) subs.add(cb.value); else subs.delete(cb.value);
  currentPage = 1;
  render();
}

// ------- SEARCH / SORT / FILTER -------
function score(p, qn){
  if (!qn) return 1;
  const name = norm(p.name), sku = norm(p.sku);
  const famn = norm(p.familia);
  const catn = norm(p.category), subn = norm(p.subcategory);
  if (sku === qn) return 1000;
  let s = 0;
  if (sku.startsWith(qn)) s += 800;
  if (sku.includes(qn))   s += 500;
  if (name.startsWith(qn)) s += 600;
  if (name.includes(qn))   s += 400;
  if (famn.includes(qn))   s += 220;
  if (catn.includes(qn))   s += 200;
  if (subn.includes(qn))   s += 180;
  return s;
}

function applyFacetAND(items){
  let out = items;
  if (fams.size) out = out.filter(p => fams.has(p.familia));
  if (cats.size) out = out.filter(p => cats.has(p.category));
  if (subs.size) out = out.filter(p => subs.has(p.subcategory));
  return out;
}

function searchAndSort(){
  const qn = norm(q);
  let list = applyFacetAND(products);
  let scored = list.map(p => ({ p, s: score(p, qn) }));
  if (qn) scored = scored.filter(x => x.s > 0);

  if (sortMode === 'name') scored.sort((a,b) => byName(a.p, b.p));
  else if (sortMode === 'sku') scored.sort((a,b) => bySku(a.p, b.p));
  else scored.sort((a,b) => (b.s - a.s) || bySku(a.p, b.p)); // relevancia por defecto

  return scored.map(x => x.p);
}


// Saca el slice de la página actual
function getPagedItems(items){
  const total = items.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  // Ajusta currentPage si se salió de rango (ej: cambió pageSize)
  if (currentPage > totalPages) currentPage = totalPages;
  if (currentPage < 1) currentPage = 1;

  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  return {
    page: items.slice(start, end),
    total,
    totalPages
  };
}

// ------- CHIPS -------
function renderChips(){
  const chips = [
    ...Array.from(fams).map(v => ({ type: 'fam', v })),
    ...Array.from(cats).map(v => ({ type: 'cat', v })),
    ...Array.from(subs).map(v => ({ type: 'sub', v })),
  ];

  activeFilters.innerHTML = chips.length
    ? chips.map(c => `
        <button type="button" data-type="${c.type}" data-v="${c.v}"
          class="inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm border bg-brand-extralight border-background-muted h-8 hover:bg-brand-light">
          <span>${c.v}</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      `).join('')
    : `<span class="text-neutral-grey">Sin filtros activos</span>`;

  activeFilters.querySelectorAll('button[data-type]').forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.getAttribute('data-type');
      const v = btn.getAttribute('data-v');

      if (type === 'fam') {
        fams.delete(v);
        const cb = facetFams.querySelector(`input[type=checkbox][value="${CSS.escape(v)}"]`);
        if (cb) cb.checked = false;
        // Al quitar Familia: regenerar Cat/Sub
        buildCatFacet();

      } else if (type === 'cat') {
        cats.delete(v);
        const cb = facetCats.querySelector(`input[type=checkbox][value="${CSS.escape(v)}"]`);
        if (cb) cb.checked = false;

      } else {
        subs.delete(v);
      }

      render();
    });
  });
}

// ------- RENDER TABLA -------
function renderTable(items){
  const toCell = (text, extra = '') => `<td class="px-4 py-3 align-middle ${extra}">${text ?? ''}</td>`;
  const toLink = (href, label) => href ? `<a href="${href}" target="_blank" rel="noopener" class="text-accent hover:underline">${label}</a>` : '';

  const view = items.map(p => {
    const img = p.imagen
      ? `<img src="${p.imagen}" alt="${p.descripcion || p.sku}" class="h-10 w-10 object-cover rounded-md shadow-soft" />`
      : '';
    return `<tr class="border-t align-middle text-sm">
      ${toCell(img)}
      ${toCell(toLink(p.ficha,
        '<span class="inline-flex items-center gap-1 text-brand-light hover:text-brand-dark font-medium transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-down-icon lucide-file-down"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M12 18v-6"/><path d="m9 15 3 3 3-3"/></svg> Descargar</span>'
      ), 'whitespace-nowrap')}
      ${toCell(p.familia, 'whitespace-nowrap')}
      ${toCell(p.categoria, 'whitespace-nowrap')}
      ${toCell(p.sku, 'font-medium whitespace-nowrap')}
      ${toCell(p.descripcion, 'max-w-[420px]')}
      ${toCell(p.ean13, 'whitespace-nowrap text-center')}
      ${toCell(p.longitud_cm, 'text-center')}
      ${toCell(p.ancho_cm, 'text-center')}
      ${toCell(p.altura_cm, 'text-center')}
      ${toCell(p.volumen_cc, 'text-center')}
      ${toCell(p.peso_g, 'text-center')}
      ${toCell(p.min_empaque, 'text-center')}
    </tr>`;
  }).join('');

  rows.innerHTML = view || `
    <tr>
      <td colspan="18" class="px-4 py-8 text-center text-neutral-grey">
        Sin resultados. Prueba con otro término o limpia filtros.
      </td>
    </tr>
  `;
}

// Render paginador
function renderPager(totalPages){
  // helper botón
  const btn = (label, action, disabled=false, ariaLabel=label, isCurrent=false) => `
    <button type="button"
      ${disabled ? 'disabled' : ''}
      data-action="${disabled ? '' : action}"
      class="min-w-9 h-9 px-3 inline-flex items-center justify-center rounded-md border text-sm
             ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-background-light'}
             ${isCurrent
              ? 'bg-brand-extralight text-neutral-dark border-brand-light'   // <- resaltado actual
              : 'bg-white text-neutral-grey border-background-muted hover:bg-background-light hover:border-brand-light'}"
      aria-label="${ariaLabel}"
      ${isCurrent ? 'aria-current="page"' : ''}>
      ${label}
    </button>
  `;

  const maxButtons = 5; // cantidad de números visibles
  let start = Math.max(1, currentPage - Math.floor(maxButtons/2));
  let end = start + maxButtons - 1;
  if (end > totalPages) {
    end = totalPages;
    start = Math.max(1, end - maxButtons + 1);
  }

  let html = '';
  html += btn('«', 'first', currentPage === 1, 'Primera página');
  html += btn('‹', 'prev', currentPage === 1, 'Página anterior');

  for (let i = start; i <= end; i++) {
    html += btn(String(i), `page:${i}`, false, `Página ${i}`, i === currentPage);
  }

  html += btn('›', 'next', currentPage === totalPages, 'Página siguiente');
  html += btn('»', 'last', currentPage === totalPages, 'Última página');

  pagerEl.innerHTML = html;

  // listeners
  pagerEl.querySelectorAll('button[data-action]').forEach(b => {
    b.addEventListener('click', () => {
      const action = b.getAttribute('data-action');
      if (!action) return;
      if (action === 'first') currentPage = 1;
      else if (action === 'prev') currentPage = Math.max(1, currentPage - 1);
      else if (action === 'next') currentPage = currentPage + 1;
      else if (action === 'last') currentPage = Infinity; // luego se clamp en getPagedItems
      else if (action.startsWith('page:')) currentPage = Number(action.split(':')[1]) || 1;

      render(); // re-dibuja tabla + pager
    });
  });
}



// ------- RENDER GENERAL -------
function render() {
  const items = searchAndSort();
  const { page, total, totalPages } = getPagedItems(items);

  // Render solo si existe el contenedor del paginador
  if (typeof pagerEl !== 'undefined' && pagerEl) {
    renderPager(totalPages);
  }
  // ¡Renderiza solo la página actual!
  renderTable(page);
  renderChips();

  meta.textContent = `${total} resultado(s) — pág. ${currentPage} / ${totalPages}`;
}


// ------- BOOT -------
async function init() {
  let res = await fetch('/data/product-datasheets.json').catch(() => null);
  if (!res || !res.ok) res = await fetch('/data/product-datasheets.json');
  RAW = await res.json();
  products = adapt(RAW);

  // Eventos
  let t;
  const debounce = (fn, ms=250) => (...a) => { clearTimeout(t); t=setTimeout(() => fn(...a), ms); };

  qEl?.addEventListener('input', debounce((e) => { 
    q = e.target.value;
    currentPage = 1; 
    render(); 
  }, 250));

  document.getElementById('clearFilters')?.addEventListener('click', () => {
    q = ''; if (qEl) qEl.value = '';

    fams.clear(); 
    cats.clear(); 
    subs.clear();

    // Deschequear todos
    facetFams.querySelectorAll('input[type=checkbox]').forEach(cb => (cb.checked = false));
    facetCats.querySelectorAll('input[type=checkbox]').forEach(cb => (cb.checked = false));

    // Regenerar dependencias
    buildCatFacet();
    currentPage = 1;
    render();
  });

  sortEl?.addEventListener('change', (e) => { 
    sortMode = e.target.value; 
    currentPage = 1;
    render(); 
  });


  pageSizeEl?.addEventListener('change', (e) => {
    pageSize = Number(e.target.value) || 10;
    currentPage = 1; // reset al cambiar tamaño de página
    render();
  });


  // Construcción inicial de facetas en orden: Familia -> Categoría -> Subcategoría
  buildFamFacet();
  buildCatFacet();
  render();
}

init().catch(console.error);
