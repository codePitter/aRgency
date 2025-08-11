// === Configuración rápida ===
    const WHATSAPP_TEL = '5493410000000'; // Reemplazá por tu número (sin +)

    // Año dinámico
    document.getElementById('y').textContent = new Date().getFullYear();

    // Reveal on scroll
    const onScroll = () => { document.querySelectorAll('.reveal').forEach(el => { const r = el.getBoundingClientRect(); if (r.top < innerHeight - 100) el.classList.add('show'); }); };
    document.addEventListener('scroll', onScroll); onScroll();

    // Prefill demo y plan en el formulario
    function prefillDemo(name){
      document.getElementById('c_tipo').value = name;
      document.getElementById('c_msg').value = `Me gustó el demo ${name}. Quiero avanzar.`;
      location.hash = '#contacto';
    }

    // Abrir WhatsApp con presupuesto
    document.getElementById('formContacto').addEventListener('submit', (e)=>{
      e.preventDefault();
      const nombre = document.getElementById('c_nombre').value.trim();
      const tel = document.getElementById('c_tel').value.trim();
      const tipo = document.getElementById('c_tipo').value;
      const plan = document.getElementById('c_plan').value;
      const msg = document.getElementById('c_msg').value.trim();
      const text = encodeURIComponent(`Hola! Soy ${nombre}. WhatsApp: ${tel}. Me interesa una landing (${tipo}) en plan ${plan}. ${msg ? 'Detalles: '+msg : ''}`);
      window.open(`https://wa.me/${WHATSAPP_TEL}?text=${text}`, '_blank');
    });

    // Agendar llamada (crea link de Google Calendar en cliente)
    document.getElementById('btnCall').addEventListener('click', ()=>{
      // Genera una reunión de 15 min para mañana 11:00 (el usuario puede cambiarla al abrir)
      const now = new Date();
      const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, 11, 0, 0);
      const end = new Date(tomorrow.getTime() + 15*60000);
      const fmt = (d)=> d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
      const s = fmt(tomorrow); const e = fmt(end);
      const url = new URL('https://calendar.google.com/calendar/render');
      url.searchParams.set('action','TEMPLATE');
      url.searchParams.set('text','Llamada sobre tu landing page');
      url.searchParams.set('dates', `${s}/${e}`);
      url.searchParams.set('details','Llamada de 15 minutos para definir tu landing page. Escribime por WhatsApp si preferís otro horario.');
      window.open(url.toString(), '_blank');
    });

function matchHeight() {
    const prevDiv = document.querySelector('.prev-div');
    const targetImg = document.querySelector('.target-img');
    if (prevDiv && targetImg) {
        targetImg.style.height = prevDiv.offsetHeight + 'px';
    }
}
window.addEventListener('load', matchHeight);
window.addEventListener('resize', matchHeight);