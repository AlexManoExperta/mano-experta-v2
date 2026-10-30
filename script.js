/* ==========================================================================
   Mano Experta 2.0: script.js (vanilla JS, no dependencies)
   ========================================================================== */

/* ===================== CONFIG: EDIT THESE ===================== */
// 1) Formspree endpoint, e.g. 'https://formspree.io/f/abcdwxyz'.
//    Create a free form at https://formspree.io and paste its endpoint here.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mgaazjzl';

// 2) Fallback email (used only if FORMSPREE_ENDPOINT is empty).
//    The form opens the visitor's email app addressed to this address.
const QUOTE_EMAIL = 'Finnawork100@gmail.com';

// 3) Phone used for click-to-call / text fallback (if both of the above are empty).
const PHONE_E164 = '+15059001392';
const PHONE_DISPLAY = '505-900-1392';
/* ============================================================== */

(function () {
  'use strict';

  /* ---------------- Translations ---------------- */
  const I18N = {
    en: {
      _title: 'Mano Experta | Alex Rascón, Handyman in Albuquerque, NM',
      _desc: 'Mano Experta: Alex Rascón, handyman in Albuquerque, Los Lunas and Santa Fe, NM. Drywall, stucco, tar and gravel roofing, painting, electrical, framing, concrete, plumbing and landscaping. Call 505-900-1392 for a free estimate.',
      skip: 'Skip to content', langBtn: 'ES', langAria: 'Cambiar a español', menu: 'Menu', navAria: 'Main',
      navServices: 'Services', navGallery: 'Our Work', navAbout: 'About', navQuote: 'Free Quote',
      heroEyebrow: 'Handyman · Albuquerque, NM',
      tagline: 'Jack of all trades.',
      heroLead: 'Alex Rascón brings a union carpentry background and 7 years in business to every job, from drywall and stucco to roofing, painting and electrical. One call handles it all.',
      ctaCall: 'Call 505-900-1392', ctaQuote: 'Get a Free Quote', ctaText: 'Text Alex', areaAria: 'Service area',
      pt1: 'Union carpentry background', pt2: '7 years in business', pt3: 'Free estimates · English y español',
      svcEyebrow: 'What we do', svcTitle: 'Services',
      svcLead: "Small fixes to full projects. Starting rates are listed where they're set; everything else gets a free, no-pressure estimate.",
      s1t: 'Drywall & Sheetrock', s1d: 'Hanging, taping, mudding and texturing. Patches, water-damage repairs and full rooms.', s1r: 'Sheetrock crew from $200/worker',
      s2t: 'Stucco Repair', s2d: 'Cracks, patches, parapet walls and color matching for that classic New Mexico finish.',
      s3t: 'Tar & Gravel Roofing', s3d: 'Flat-roof repairs, leak fixes and patching on tar and gravel roofs.',
      s4t: 'Painting', s4d: 'Interior and exterior painting, cabinet painting and clear-coating.',
      s5t: 'Electrical', s5d: 'Light fixtures, ceiling fans, switches and outlets.',
      s6t: 'Doors', s6d: 'Interior and exterior door installs, adjustments, hardware and trim.',
      s7t: 'Framing', s7d: 'Walls, openings and structural carpentry, built right from a union carpentry background.',
      s8t: 'Concrete', s8d: 'Slabs, pads, walkways and concrete repairs.',
      s9t: 'Plumbing', s9d: 'Faucets, fixtures, leaks and everyday plumbing repairs.',
      s10t: 'Landscaping', s10d: 'Yard cleanup, xeriscaping, rock and gravel, and outdoor projects.',
      s11t: 'General Home Repairs', s11d: 'The to-do list: fixtures, mounting, appliance installs and odd jobs around the house.', s11r: 'Microwave hood installs ~$80/hr labor',
      free: 'Free estimate',
      svcNote: "Don't see your project? Ask. If it's around the house, Alex can probably handle it.",
      galEyebrow: 'Real work', galTitle: 'Our Work', galLead: 'A look at recent jobs around Albuquerque, Los Lunas and Santa Fe.',
      g1: 'Interior Stucco Patch', g2: 'Tar & Gravel Roofing', g3: 'Ceiling Texture', g4: 'Cabinet Painting',
      g5: 'Electrical', g6: 'Fireplace Surround Rebuild', g7: 'Landscaping', g8: 'Stucco Parapet Repair', g9: 'Sink & Faucet Install', g10: 'Parapet Cap, Fresh Stucco', g11: 'Kitchen Cabinets & Countertop', g12: 'Sheetrock Ceiling Patch', g13: 'Textured Bedroom Ceiling',
      galNote: 'Project photos coming soon. Ask Alex for pictures of similar jobs.',
      statYears: 'years in business', statCities: 'cities served',
      aboutEyebrow: 'Meet Alex', aboutTitle: 'One skilled hand for the whole house',
      about1: "Mano Experta is Alex Rascón's handyman business. Alex came up through union carpentry, and for the past 7 years he's put that training to work for homeowners and property owners across central and northern New Mexico.",
      about2: 'Stucco cracking on a parapet, a leak on a tar and gravel roof, a room that needs sheetrock, or cabinets that need a fresh coat: instead of calling five different trades, call one. Alex shows up, explains the job straight, and does it right.',
      ab1: 'Serving Albuquerque, Los Lunas and Santa Fe', ab2: 'Se habla español', ab3: 'Free estimates. Call or text anytime.',
      qEyebrow: 'Free estimate', qTitle: 'Request a Quote',
      qLead: "Tell Alex about your project and he'll get back to you. Prefer to talk? Call or text directly.",
      fName: 'Name', fPhone: 'Phone', fEmail: 'Email', optional: '(optional)', fService: 'Service needed', fDate: 'Preferred date',
      fMsg: 'Project description', phMsg: 'What needs doing, and where? (city or neighborhood)',
      optChoose: 'Choose a service…', optOther: 'Other', fSubmit: 'Send Quote Request', sending: 'Sending…',
      errName: 'Please enter your name.', errPhone: 'Please enter a valid phone number.', errEmail: 'Please enter a valid email address.',
      errService: 'Please choose a service.', errMsg: 'Please describe the project.', errFix: 'Please fix the highlighted fields.',
      okSent: "Thanks! Your request was sent. Alex will get back to you soon. Need it faster? Call 505-900-1392.",
      errSend: "Sorry, the form couldn't be sent. Please call or text Alex at 505-900-1392.",
      okMail: 'Your email app should open with the request filled in. Just hit send. If nothing opened, call or text 505-900-1392.',
      smsIntro: 'Send this request to Alex by text message (or call 505-900-1392):',
      smsBtn: 'Text this to Alex', callBtn: 'Call 505-900-1392', copyBtn: 'Copy message', copied: 'Copied!',
      msgHeader: 'Quote request (Mano Experta website)', mName: 'Name', mPhone: 'Phone', mEmail: 'Email', mService: 'Service', mDate: 'Preferred date', mDesc: 'Project',
      footerTag: 'Alex Rascón · Jack of all trades', footerText: 'Text', footerArea: 'Albuquerque · Los Lunas · Santa Fe, New Mexico', rights: 'All rights reserved.',
      barCall: 'Call', barText: 'Text', barQuote: 'Free Quote',
      lbClose: 'Close', lbPrev: 'Previous photo', lbNext: 'Next photo', lbAria: 'Photo viewer', viewPhoto: 'View photo: ',
      nfTitle: 'Page not found', nfText: "That page doesn't exist, but Alex can still fix just about anything else.", nfHome: 'Back to home'
    },
    es: {
      _title: 'Mano Experta | Alex Rascón, Handyman en Albuquerque, NM',
      _desc: 'Mano Experta: Alex Rascón, handyman en Albuquerque, Los Lunas y Santa Fe, NM. Sheetrock, estuco, techos de brea y grava, pintura, electricidad, marcos, concreto, plomería y jardinería. Llame al 505-900-1392 para un presupuesto gratis.',
      skip: 'Saltar al contenido', langBtn: 'EN', langAria: 'Switch to English', menu: 'Menú', navAria: 'Principal',
      navServices: 'Servicios', navGallery: 'Trabajos', navAbout: 'Nosotros', navQuote: 'Presupuesto',
      heroEyebrow: 'Handyman · Albuquerque, NM',
      tagline: 'Le sabe a todo.',
      heroLead: 'Alex Rascón trae su experiencia como carpintero de la unión y 7 años en el negocio a cada trabajo: sheetrock, estuco, techos, pintura, electricidad y más. Con una sola llamada, queda todo hecho.',
      ctaCall: 'Llame al 505-900-1392', ctaQuote: 'Presupuesto gratis', ctaText: 'Mándele texto', areaAria: 'Área de servicio',
      pt1: 'Experiencia como carpintero de la unión', pt2: '7 años en el negocio', pt3: 'Presupuestos gratis · English y español',
      svcEyebrow: 'Lo que hacemos', svcTitle: 'Servicios',
      svcLead: 'Desde arreglos chicos hasta proyectos completos. Donde hay precio fijo, aquí lo ve; para todo lo demás, el presupuesto es gratis y sin compromiso.',
      s1t: 'Sheetrock (Drywall)', s1d: 'Instalación, encintado, enjarre y textura. Parches, daños por agua y cuartos completos.', s1r: 'Cuadrilla de sheetrock desde $200 por trabajador',
      s2t: 'Reparación de estuco', s2d: 'Grietas, parches, parapetos e igualación de color para ese acabado clásico de Nuevo México.',
      s3t: 'Techos de brea y grava', s3d: 'Reparación de techos planos, goteras y parches en techos de brea y grava.',
      s4t: 'Pintura', s4d: 'Pintura de interiores y exteriores, pintura de gabinetes y barniz transparente.',
      s5t: 'Electricidad', s5d: 'Lámparas, abanicos de techo, apagadores y enchufes.',
      s6t: 'Puertas', s6d: 'Instalación y ajuste de puertas interiores y exteriores, herrajes y molduras.',
      s7t: 'Marcos y estructura', s7d: 'Paredes, aberturas y carpintería estructural, bien hecha con experiencia de carpintero de la unión.',
      s8t: 'Concreto', s8d: 'Losas, bases, banquetas y reparaciones de concreto.',
      s9t: 'Plomería', s9d: 'Llaves, muebles de baño, fugas y reparaciones de plomería del día a día.',
      s10t: 'Jardinería', s10d: 'Limpieza de yarda, xeriscape, piedra y grava, y proyectos al aire libre.',
      s11t: 'Reparaciones generales', s11d: 'La lista de pendientes: accesorios, montajes, instalación de aparatos y arreglos de la casa.', s11r: 'Instalación de microondas con campana ~$80/hora de mano de obra',
      free: 'Presupuesto gratis',
      svcNote: '¿No ve su proyecto? Pregunte. Si es algo de la casa, lo más seguro es que Alex lo pueda hacer.',
      galEyebrow: 'Trabajo real', galTitle: 'Nuestros trabajos', galLead: 'Algunos trabajos recientes en Albuquerque, Los Lunas y Santa Fe.',
      g1: 'Parche de estuco interior', g2: 'Techos de brea y grava', g3: 'Textura de techo', g4: 'Pintura de gabinetes',
      g5: 'Electricidad', g6: 'Reconstrucción de chimenea', g7: 'Jardinería', g8: 'Reparación de parapeto con estuco', g9: 'Lavabo y llave nueva', g10: 'Remate de parapeto con estuco nuevo', g11: 'Gabinetes y cubierta de cocina', g12: 'Parche de sheetrock en el techo', g13: 'Techo de recámara con textura',
      galNote: 'Pronto subiremos fotos. Pídale a Alex fotos de trabajos parecidos.',
      statYears: 'años en el negocio', statCities: 'ciudades',
      aboutEyebrow: 'Conozca a Alex', aboutTitle: 'Una mano experta para toda la casa',
      about1: 'Mano Experta es el negocio de Alex Rascón. Alex se formó como carpintero de la unión, y desde hace 7 años pone esa experiencia al servicio de dueños de casa y propiedades en el centro y norte de Nuevo México.',
      about2: 'Estuco cuarteado en el parapeto, una gotera en el techo de brea y grava, un cuarto que necesita sheetrock o gabinetes que piden pintura nueva: en vez de llamar a cinco oficios distintos, llame a uno. Alex llega, le explica el trabajo claro y lo hace bien.',
      ab1: 'Servimos Albuquerque, Los Lunas y Santa Fe', ab2: 'Se habla español', ab3: 'Presupuestos gratis. Llame o mande texto cuando quiera.',
      qEyebrow: 'Presupuesto gratis', qTitle: 'Pida un presupuesto',
      qLead: 'Cuéntele a Alex de su proyecto y él se comunica con usted. ¿Prefiere hablar? Llame o mande texto directo.',
      fName: 'Nombre', fPhone: 'Teléfono', fEmail: 'Correo electrónico', optional: '(opcional)', fService: 'Servicio', fDate: 'Fecha preferida',
      fMsg: 'Descripción del proyecto', phMsg: '¿Qué hay que hacer y dónde? (ciudad o barrio)',
      optChoose: 'Elija un servicio…', optOther: 'Otro', fSubmit: 'Enviar solicitud', sending: 'Enviando…',
      errName: 'Escriba su nombre, por favor.', errPhone: 'Escriba un número de teléfono válido.', errEmail: 'Escriba un correo electrónico válido.',
      errService: 'Elija un servicio, por favor.', errMsg: 'Describa el proyecto, por favor.', errFix: 'Revise los campos marcados.',
      okSent: '¡Gracias! Su solicitud fue enviada. Alex se comunicará con usted pronto. ¿Lo necesita ya? Llame al 505-900-1392.',
      errSend: 'Lo sentimos, no se pudo enviar el formulario. Llame o mande texto a Alex al 505-900-1392.',
      okMail: 'Se debe abrir su aplicación de correo con la solicitud lista. Solo dele enviar. Si no se abrió, llame o mande texto al 505-900-1392.',
      smsIntro: 'Mándele esta solicitud a Alex por texto (o llame al 505-900-1392):',
      smsBtn: 'Mandar por texto', callBtn: 'Llamar al 505-900-1392', copyBtn: 'Copiar mensaje', copied: '¡Copiado!',
      msgHeader: 'Solicitud de presupuesto (sitio web de Mano Experta)', mName: 'Nombre', mPhone: 'Teléfono', mEmail: 'Correo', mService: 'Servicio', mDate: 'Fecha preferida', mDesc: 'Proyecto',
      footerTag: 'Alex Rascón · Le sabe a todo', footerText: 'Texto', footerArea: 'Albuquerque · Los Lunas · Santa Fe, Nuevo México', rights: 'Todos los derechos reservados.',
      barCall: 'Llamar', barText: 'Texto', barQuote: 'Presupuesto',
      lbClose: 'Cerrar', lbPrev: 'Foto anterior', lbNext: 'Foto siguiente', lbAria: 'Visor de fotos', viewPhoto: 'Ver foto: ',
      nfTitle: 'Página no encontrada', nfText: 'Esa página no existe, pero Alex puede arreglar casi todo lo demás.', nfHome: 'Volver al inicio'
    }
  };

  const LANG_KEY = 'manoExpertaLang';
  let lang = 'en';
  try { lang = localStorage.getItem(LANG_KEY) === 'es' ? 'es' : 'en'; } catch (e) { /* storage blocked */ }
  // ?lang=es or ?lang=en in the URL overrides (handy for sharing a Spanish link).
  const urlLang = new URLSearchParams(location.search).get('lang');
  if (urlLang === 'es' || urlLang === 'en') lang = urlLang;
  const t = (key) => (I18N[lang] && I18N[lang][key]) || I18N.en[key] || '';

  function applyLang(next) {
    lang = next;
    const dict = I18N[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const v = dict[el.dataset.i18n]; if (v != null) el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const v = dict[el.dataset.i18nPlaceholder]; if (v != null) el.setAttribute('placeholder', v);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const v = dict[el.dataset.i18nAria]; if (v != null) el.setAttribute('aria-label', v);
    });
    if (dict._title && !document.body.classList.contains('is-404')) document.title = dict._title;
    const md = document.querySelector('meta[name="description"]');
    if (md && dict._desc && !document.body.classList.contains('is-404')) md.setAttribute('content', dict._desc);
    const ql = document.getElementById('qLang'); if (ql) ql.value = lang;
    const lb = document.getElementById('lightbox'); if (lb) lb.setAttribute('aria-label', dict.lbAria);
    updateGalleryLabels();
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* ignore */ }
  }

  /* ---------------- Header / mobile menu ---------------- */
  const menuBtn = document.getElementById('menuToggle');
  const nav = document.getElementById('siteNav');
  function closeMenu() { if (!nav) return; nav.classList.remove('is-open'); menuBtn.setAttribute('aria-expanded', 'false'); }
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      menuBtn.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', (e) => { if (e.target.closest('a')) closeMenu(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && nav.classList.contains('is-open')) { closeMenu(); menuBtn.focus(); } });
    document.addEventListener('click', (e) => { if (nav.classList.contains('is-open') && !e.target.closest('.site-header')) closeMenu(); });
  }
  const langBtn = document.getElementById('langToggle');
  if (langBtn) langBtn.addEventListener('click', () => applyLang(lang === 'en' ? 'es' : 'en'));

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------- Gallery + lightbox ---------------- */
  // Each .g-item has data-photo="images/gallery/xxx.jpg". If that file exists, it replaces the placeholder.
  const items = Array.from(document.querySelectorAll('.g-item[data-photo]'));
  let photos = []; // items that have a real photo, in page order

  function labelOf(item) { const l = item.querySelector('.g-label'); return l ? l.textContent : ''; }
  function updateGalleryLabels() {
    items.forEach((item) => {
      const btn = item.querySelector('.g-btn'); const img = item.querySelector('img');
      if (img) img.alt = labelOf(item) + ' (Mano Experta)';
      if (btn && !btn.disabled) btn.setAttribute('aria-label', t('viewPhoto') + labelOf(item));
    });
  }
  function refreshPhotos() {
    photos = items.filter((i) => i.classList.contains('has-photo'));
    const note = document.getElementById('galNote');
    if (note) note.hidden = photos.length > 0;
  }
  items.forEach((item) => {
    const src = item.dataset.photo;
    const probe = new Image();
    probe.onload = () => {
      const btn = item.querySelector('.g-btn');
      const img = document.createElement('img');
      img.src = src; img.loading = 'lazy'; img.decoding = 'async';
      img.alt = labelOf(item) + ' (Mano Experta)';
      btn.prepend(img);
      btn.disabled = false;
      btn.setAttribute('aria-label', t('viewPhoto') + labelOf(item));
      item.classList.add('has-photo');
      refreshPhotos();
    };
    probe.src = src;
  });

  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lbImg');
  const lbCap = document.getElementById('lbCap');
  let lbIndex = 0; let lastFocus = null;
  function showPhoto(i) {
    if (!photos.length) return;
    lbIndex = (i + photos.length) % photos.length;
    const item = photos[lbIndex];
    lbImg.src = item.dataset.photo;
    lbImg.alt = labelOf(item);
    lbCap.textContent = labelOf(item);
    const multi = photos.length > 1;
    document.getElementById('lbPrev').hidden = !multi;
    document.getElementById('lbNext').hidden = !multi;
  }
  function openLb(item) {
    if (!lb || typeof lb.showModal !== 'function') { window.open(item.dataset.photo, '_blank', 'noopener'); return; }
    lastFocus = document.activeElement;
    showPhoto(photos.indexOf(item));
    lb.showModal();
    document.getElementById('lbClose').focus();
  }
  if (lb) {
    document.getElementById('galleryGrid').addEventListener('click', (e) => {
      const btn = e.target.closest('.g-btn');
      if (btn && !btn.disabled) openLb(btn.closest('.g-item'));
    });
    document.getElementById('lbClose').addEventListener('click', () => lb.close());
    document.getElementById('lbPrev').addEventListener('click', () => showPhoto(lbIndex - 1));
    document.getElementById('lbNext').addEventListener('click', () => showPhoto(lbIndex + 1));
    lb.addEventListener('click', (e) => { if (e.target === lb) lb.close(); });
    lb.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') showPhoto(lbIndex - 1);
      if (e.key === 'ArrowRight') showPhoto(lbIndex + 1);
    });
    let x0 = null;
    lb.addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX; }, { passive: true });
    lb.addEventListener('touchend', (e) => {
      if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0; x0 = null;
      if (Math.abs(dx) > 50) showPhoto(lbIndex + (dx < 0 ? 1 : -1));
    });
    lb.addEventListener('close', () => { if (lastFocus) lastFocus.focus(); });
  }

  /* ---------------- Quote form ---------------- */
  const form = document.getElementById('quoteForm');
  if (form) {
    const status = document.getElementById('formStatus');
    const submitBtn = document.getElementById('qSubmit');
    const dateInput = document.getElementById('qDate');
    if (dateInput) {
      const d = new Date(); d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
      dateInput.min = d.toISOString().slice(0, 10);
    }
    if (FORMSPREE_ENDPOINT) form.action = FORMSPREE_ENDPOINT;

    const setStatus = (type, html) => {
      status.className = 'form-status' + (type ? ' is-' + type : '');
      status.innerHTML = html;
      if (html) status.focus({ preventScroll: false });
    };
    const telLink = (html) => html.replace(PHONE_DISPLAY, '<a href="tel:' + PHONE_E164 + '">' + PHONE_DISPLAY + '</a>');
    const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

    function validateField(el) {
      const field = el.closest('.field'); if (!field) return true;
      const ok = el.checkValidity();
      field.classList.toggle('is-invalid', !ok);
      el.setAttribute('aria-invalid', String(!ok));
      return ok;
    }
    form.querySelectorAll('input, select, textarea').forEach((el) => {
      if (el.closest('.hp') || el.type === 'hidden') return;
      const err = el.closest('.field') && el.closest('.field').querySelector('.field-error');
      if (err) { err.id = el.id + '-err'; el.setAttribute('aria-describedby', err.id); }
      el.addEventListener('blur', () => { if (el.value) validateField(el); });
      el.addEventListener('input', () => { if (el.closest('.field').classList.contains('is-invalid')) validateField(el); });
    });

    function buildMessage(data) {
      const svcSel = form.querySelector('#qService');
      const svcLabel = svcSel.options[svcSel.selectedIndex] ? svcSel.options[svcSel.selectedIndex].text : data.get('service');
      const lines = [
        t('msgHeader'),
        t('mName') + ': ' + data.get('name'),
        t('mPhone') + ': ' + data.get('phone')
      ];
      if (data.get('email')) lines.push(t('mEmail') + ': ' + data.get('email'));
      lines.push(t('mService') + ': ' + svcLabel);
      if (data.get('preferred_date')) lines.push(t('mDate') + ': ' + data.get('preferred_date'));
      lines.push('', t('mDesc') + ':', data.get('message'));
      return lines.join('\n');
    }

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      setStatus('', '');
      // Honeypot: bots fill hidden fields. Pretend success and stop.
      if (form.querySelector('#company').value) { setStatus('success', esc(t('okSent'))); form.reset(); return; }

      const fields = Array.from(form.querySelectorAll('input:not([type=hidden]), select, textarea')).filter((el) => !el.closest('.hp'));
      const invalid = fields.filter((el) => !validateField(el));
      if (invalid.length) { setStatus('error', esc(t('errFix'))); invalid[0].focus(); return; }

      const data = new FormData(form);

      // 1) Formspree
      if (FORMSPREE_ENDPOINT) {
        submitBtn.disabled = true;
        const label = submitBtn.querySelector('span'); const orig = label.textContent; label.textContent = t('sending');
        try {
          const res = await fetch(FORMSPREE_ENDPOINT, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
          if (res.ok) { form.reset(); setStatus('success', telLink(esc(t('okSent')))); }
          else { setStatus('error', telLink(esc(t('errSend')))); }
        } catch (err) {
          setStatus('error', telLink(esc(t('errSend'))));
        } finally { submitBtn.disabled = false; label.textContent = orig; }
        return;
      }

      const msg = buildMessage(data);

      // 2) mailto fallback
      if (QUOTE_EMAIL) {
        const subject = t('msgHeader') + ': ' + data.get('name');
        window.location.href = 'mailto:' + QUOTE_EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(msg);
        setStatus('info', esc(t('okMail')));
        return;
      }

      // 3) SMS / call fallback
      const smsHref = 'sms:' + PHONE_E164 + '?&body=' + encodeURIComponent(msg);
      setStatus('info',
        '<p>' + esc(t('smsIntro')) + '</p><pre id="smsMsg">' + esc(msg) + '</pre>' +
        '<div class="status-actions">' +
        '<a class="btn btn-primary" href="' + smsHref + '">' + esc(t('smsBtn')) + '</a>' +
        '<a class="btn btn-ghost" href="tel:' + PHONE_E164 + '">' + esc(t('callBtn')) + '</a>' +
        '<button type="button" class="btn btn-ghost" id="copyMsg">' + esc(t('copyBtn')) + '</button>' +
        '</div>');
      const copyBtn = document.getElementById('copyMsg');
      copyBtn.addEventListener('click', () => {
        if (navigator.clipboard) navigator.clipboard.writeText(msg).then(() => { copyBtn.textContent = t('copied'); }).catch(() => {});
      });
      // On phones, open the texting app straight away.
      if (window.matchMedia('(pointer: coarse)').matches) window.location.href = smsHref;
    });
  }

  applyLang(lang);
})();
