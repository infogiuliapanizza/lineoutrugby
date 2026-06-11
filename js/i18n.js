/* LINEOUT — i18n IT/ES + comportamenti UI (nav mobile, reveal).
   Ogni elemento traducibile ha data-i18n="chiave"; i valori con markup
   usano innerHTML, gli altri textContent. */

const translations = {
  it: {
    // Meta
    'home.title': 'LINEOUT — Non parti da solo. Rugby, Italia → Spagna',
    'founders.title': 'I Fondatori — LINEOUT',
    'how.title': 'Come funziona — LINEOUT',
    'contact.title': 'Contatti — LINEOUT',

    // Nav
    'nav.about': 'Chi siamo',
    'nav.how': 'Come funziona',
    'nav.founders': 'I Fondatori',
    'nav.contact': 'Contatti',
    'nav.menu': 'Apri il menu',

    // Footer
    'footer.line': 'Rugby · Italia → Spagna',
    'footer.copy': '© 2026 LINEOUT · lineoutrugby.it',

    // Home — hero
    'home.kicker': 'Rugby · Italia → Spagna',
    'home.h1': 'Non parti da <span class="amber">solo.</span>',
    'home.sub': 'LINEOUT accompagna i giovani rugbisti italiani in Spagna: club, studio o lavoro, alloggio e documenti. Un percorso completo, costruito da chi il campo lo vive ogni settimana.',
    'home.cta1': 'Vai. Adesso.',
    'home.cta2': 'Come funziona →',
    'home.crest.alt': 'Stemma LINEOUT: scudo granata con campo da rugby, tre stelle e nastro',

    // Home — cosa facciamo
    'home.what.kicker': 'Il pacchetto completo',
    'home.what.h2': 'Ti troviamo squadra, casa e università o lavoro. Tu pensa a giocare.',
    'home.what.c1.title': 'Club',
    'home.what.c1.text': 'Ti presentiamo ai club spagnoli giusti per il tuo ruolo e il tuo livello. Contatti veri, provini veri.',
    'home.what.c2.title': 'Alloggio',
    'home.what.c2.text': 'Un alloggio pronto quando atterri. Vicino al campo, vicino ai compagni.',
    'home.what.c3.title': 'Università o lavoro',
    'home.what.c3.text': 'Studi o lavori mentre giochi. Ti aiutiamo con l’iscrizione universitaria o a trovare il primo impiego.',
    'home.what.c4.title': 'Documenti',
    'home.what.c4.text': 'Tesseramento, transfer internazionale, NIE, conto in banca. La burocrazia la sblocchiamo noi.',

    // Home — perché noi
    'home.why.kicker': 'Perché noi',
    'home.why.h2': 'Ci siamo passati. Sappiamo come si fa.',
    'home.why.text': 'LINEOUT non è un’agenzia. Siamo tre giocatori attivi di Serie A Elite con esperienze internazionali alle spalle. Gli unici sull’asse Italia–Spagna a seguirti su tutto: rugby, studio o lavoro, alloggio e documenti.',
    'home.why.n1.label': 'Fondatori giocatori attivi di Serie A Elite',
    'home.why.n2.label': 'Pacchetto completo: rugby + vita + burocrazia',
    'home.why.n3.label': 'Gli unici su questo asse',
    'home.why.link': '→ Scopri i fondatori',

    // Home — come funziona
    'home.how.kicker': 'Come funziona',
    'home.how.h2': 'Tre passi e sei in campo.',
    'home.how.s1.title': 'Parliamo',
    'home.how.s1.text': 'Una chiamata. Ci racconti ruolo, livello e cosa vuoi fare oltre al rugby.',
    'home.how.s2.title': 'Costruiamo il tuo pacchetto',
    'home.how.s2.text': 'Club, casa, università o lavoro, documenti. Tutto su misura per te e per l’offerta del club.',
    'home.how.s3.title': 'Parti e giochi',
    'home.how.s3.text': 'Atterri e trovi già tutto. E noi restiamo al tuo fianco.',
    'home.how.note': 'Le condizioni economiche (contributo alloggio, borsa studio, rimborso spese) dipendono dalle tue capacità rugbistiche e dall’interesse del club. Il nostro lavoro è aiutarti a ottenere il meglio.',

    // Home — l'idea
    'home.idea.kicker': 'Come è nata',
    'home.idea.h2': 'Un pranzo. Un’idea. Un progetto.',
    'home.idea.text': 'Tutto è nato durante un pranzo tra compagni. Parlavamo delle nostre esperienze all’estero, del percorso che avevamo fatto, delle porte che il rugby ci aveva aperto. E abbiamo pensato: perché non aiutare altri ragazzi a fare lo stesso? Non come agenzia — come chi ci è passato. Così è nato LINEOUT.',

    // Home — CTA finale
    'home.cta.h2': 'Vai. <span class="amber">Adesso.</span>',
    'home.cta.sub': 'Il rugby non aspetta. Scrivici: ti rispondiamo entro 48 ore.',
    'home.cta.btn': 'Contattaci →',

    // Fondatori
    'founders.kicker': 'I Fondatori',
    'founders.h1': 'Tre giocatori. Una visione.',
    'founders.sub': 'LINEOUT è stato fondato da chi il rugby lo vive ogni settimana ad alto livello. Non consulenti, non manager: atleti attivi di Serie A Elite con esperienze nelle nazionali italiane.',
    'founders.label.position': 'Posizione',
    'founders.label.club': 'Club attuale',
    'founders.label.born': 'Nato',
    'founders.sb.photo.alt': 'Simone Brisighella in azione con la maglia del Valorugby Emilia',
    'founders.nc.photo.alt': 'Nicolò Casilio entra in campo allo stadio per la finale Scudetto',
    'founders.fr.photo.alt': 'Fabio Ruaro palla in mano con la maglia del Valorugby Emilia',

    'founders.sb.position': 'Estremo / Mediano d’apertura',
    'founders.sb.club': 'Valorugby Emilia (Serie A Elite)',
    'founders.sb.born': 'Parma, 19 luglio 2004 (21 anni)',
    'founders.sb.career': 'Cresciuto nelle giovanili di Viadana, ha esordito in Serie A Elite con la maglia giallonera. Entrato nell’Accademia federale delle Zebre, ha debuttato in United Rugby Championship contro l’Ulster. Nella stagione 2025/2026, con il Valorugby Emilia, ha vinto il doppio premio MVP della Serie A Elite e Miglior Under 23 del campionato (unico a vincere entrambi nella prima edizione degli Awards). Con l’Italia ha indossato la maglia dell’Under 18, Under 19, Under 20 (Sei Nazioni e Mondiali 2024), Seven e Italy XV nel 2026.',
    'founders.sb.quote': '“Indosso questi colori da quando ero bambino. Giocare la finale con la squadra della tua città è un sogno che si avvera.”',

    'founders.nc.position': 'Mediano di mischia',
    'founders.nc.club': 'Valorugby Emilia (Serie A Elite)',
    'founders.nc.born': 'L’Aquila, 12 ottobre 1998 (27 anni)',
    'founders.nc.career': 'Cresciuto nella storica piazza rugbistica de L’Aquila, è entrato nell’Accademia Nazionale Ivan Francescato. Ha vinto lo Scudetto con Calvisano nel 2019. Ha poi disputato cinque stagioni di United Rugby Championship prima con le Zebre Parma (32 presenze) poi con il Benetton Treviso, con cui ha giocato anche in EPCR Challenge Cup. Con l’Italia ha percorso tutta la trafila Under 17, Under 18, Under 20 (Sei Nazioni e Mondiali di categoria 2018) e nel 2026 è stato convocato con l’Italy XV per i test contro il Cile.',

    'founders.fr.position': 'Terza linea (n.8)',
    'founders.fr.club': 'Valorugby Emilia (Serie A Elite)',
    'founders.fr.born': '2003 (22 anni)',
    'founders.fr.career': 'Tre anni all’accademia zonale federale a Milano. Ha giocato in Serie A con il Rugby Parma, rappresentando le nazionali giovanili Under 19 e Under 20 (Sei Nazioni e Mondiale in Sudafrica). Arrivato al Valorugby Emilia nel 2023, si è conquistato la maglia da titolare come numero 8 già nella prima stagione. Nella stagione 2025/2026 ha raggiunto la finale Scudetto ed è stato tra i nominati al premio Miglior Under 23 della Serie A Elite.',

    'founders.together.alt': 'I tre fondatori in maglia Valorugby Emilia con la coppa',
    'founders.together.text': 'Tutti e tre al Valorugby Emilia. Stessa squadra, stessa visione. LINEOUT nasce dal campo, non da un ufficio.',
    'founders.together.cta': 'Contattaci →',

    // Come funziona (pagina)
    'how.h1': 'Il percorso completo',
    'how.sub': 'Dal primo contatto al primo allenamento in Spagna.',
    'how.s1.title': 'Ci conosci',
    'how.s1.text': 'Ci scrivi, ci chiami, ci mandi un DM su Instagram. Ti rispondiamo entro 48 ore. Vogliamo capire chi sei: ruolo, livello, cosa vuoi fare oltre al rugby, dove vorresti andare.',
    'how.s2.title': 'Valutiamo insieme',
    'how.s2.text': 'Analizziamo il tuo profilo tecnico. Siamo giocatori attivi di Serie A Elite: sappiamo cosa cercano i club spagnoli. Ti diciamo subito se e dove puoi collocarti.',
    'how.s3.title': 'Troviamo il club giusto',
    'how.s3.text': 'Usiamo i nostri contatti diretti con i club spagnoli. Ti presentiamo, organizziamo video o provino, negoziamo le condizioni. Le condizioni economiche dipendono dal tuo livello e dall’interesse del club: alloggio (parziale o totale), borsa studio, contributo lavoro. Il nostro obiettivo è farti ottenere il massimo.',
    'how.s4.title': 'Organizziamo tutto',
    'how.s4.text': 'Casa, università o lavoro, documenti. Non ti lasciamo solo con la burocrazia.',
    'how.s5.title': 'Parti',
    'how.s5.text': 'Atterri e trovi già tutto. E noi restiamo al tuo fianco anche dopo.',
    'how.faq.title': 'Domande frequenti',
    'how.faq.q1': 'Devo pagare qualcosa?',
    'how.faq.a1': 'Il nostro servizio ha un costo. I dettagli dipendono dal tipo di pacchetto. Scrivici e ne parliamo senza impegno.',
    'how.faq.q2': 'Che livello devo avere?',
    'how.faq.a2': 'Serie A, B o una storia nelle giovanili federali. Se hai dubbi, scrivici: valutiamo insieme.',
    'how.faq.q3': 'Posso scegliere la città?',
    'how.faq.a3': 'Sì, lo discutiamo durante la valutazione. Dipende dai club con cui abbiamo contatti attivi in quel momento.',
    'how.faq.q4': 'Posso studiare e giocare allo stesso tempo?',
    'how.faq.a4': 'È esattamente quello che proponiamo. Università spagnola o lavoro part-time: ti aiutiamo in entrambi i casi.',
    'how.faq.q5': 'Quanto dura l’esperienza?',
    'how.faq.a5': 'Minimo una stagione (circa 9–10 mesi). Ma chi parte spesso resta più a lungo.',
    'how.cta.h2': 'Vai. <span class="amber">Adesso.</span>',
    'how.cta.btn': 'Scrivici ora →',

    // Contatti
    'contact.kicker': 'Scrivici',
    'contact.h1': 'Parliamoci.',
    'contact.text': 'Mandaci un messaggio. Ti rispondiamo entro 48 ore. Capiremo insieme se la Spagna fa per te — e come arrivarci nel modo giusto.',
    'contact.info1': 'Italia → Spagna',
    'contact.info2': 'Risposta entro 48 ore',
    'contact.info3': 'Solo rugby, nessuna burocrazia in più',
    'contact.form.name': 'Nome *',
    'contact.form.surname': 'Cognome *',
    'contact.form.email': 'Email *',
    'contact.form.phone': 'Telefono *',
    'contact.form.message': 'Messaggio *',
    'contact.form.submit': 'Invia'
  },

  es: {
    // Meta
    'home.title': 'LINEOUT — No te vas solo. Rugby, Italia → España',
    'founders.title': 'Los Fundadores — LINEOUT',
    'how.title': 'Cómo funciona — LINEOUT',
    'contact.title': 'Contacto — LINEOUT',

    // Nav
    'nav.about': 'Quiénes somos',
    'nav.how': 'Cómo funciona',
    'nav.founders': 'Los Fundadores',
    'nav.contact': 'Contacto',
    'nav.menu': 'Abrir el menú',

    // Footer
    'footer.line': 'Rugby · Italia → España',
    'footer.copy': '© 2026 LINEOUT · lineoutrugby.it',

    // Home — hero
    'home.kicker': 'Rugby · Italia → España',
    'home.h1': 'No te vas <span class="amber">solo.</span>',
    'home.sub': 'LINEOUT acompaña a los jóvenes jugadores de rugby italianos en España: club, estudios o trabajo, alojamiento y documentos. Un camino completo, construido por quienes viven el campo cada semana.',
    'home.cta1': 'Ve. Ahora.',
    'home.cta2': 'Cómo funciona →',
    'home.crest.alt': 'Escudo LINEOUT: blasón granate con campo de rugby, tres estrellas y cinta',

    // Home — cosa facciamo
    'home.what.kicker': 'El paquete completo',
    'home.what.h2': 'Te encontramos equipo, casa y universidad o trabajo. Tú piensa en jugar.',
    'home.what.c1.title': 'Club',
    'home.what.c1.text': 'Te presentamos a los clubes españoles adecuados para tu puesto y tu nivel. Contactos reales, pruebas reales.',
    'home.what.c2.title': 'Alojamiento',
    'home.what.c2.text': 'Un alojamiento listo cuando aterrizas. Cerca del campo, cerca de los compañeros.',
    'home.what.c3.title': 'Universidad o trabajo',
    'home.what.c3.text': 'Estudias o trabajas mientras juegas. Te ayudamos con la matrícula universitaria o a encontrar tu primer empleo.',
    'home.what.c4.title': 'Documentos',
    'home.what.c4.text': 'Ficha federativa, transfer internacional, NIE, cuenta bancaria. La burocracia la desbloqueamos nosotros.',

    // Home — perché noi
    'home.why.kicker': 'Por qué nosotros',
    'home.why.h2': 'Lo hemos vivido. Sabemos cómo se hace.',
    'home.why.text': 'LINEOUT no es una agencia. Somos tres jugadores en activo de la Serie A Elite con experiencia internacional a nuestras espaldas. Los únicos en el eje Italia–España que te acompañan en todo: rugby, estudios o trabajo, alojamiento y documentos.',
    'home.why.n1.label': 'Fundadores jugadores en activo de la Serie A Elite',
    'home.why.n2.label': 'Paquete completo: rugby + vida + burocracia',
    'home.why.n3.label': 'Los únicos en este eje',
    'home.why.link': '→ Conoce a los fundadores',

    // Home — come funziona
    'home.how.kicker': 'Cómo funciona',
    'home.how.h2': 'Tres pasos y estás en el campo.',
    'home.how.s1.title': 'Hablamos',
    'home.how.s1.text': 'Una llamada. Nos cuentas tu puesto, tu nivel y qué quieres hacer además del rugby.',
    'home.how.s2.title': 'Construimos tu paquete',
    'home.how.s2.text': 'Club, casa, universidad o trabajo, documentos. Todo a tu medida y según la oferta del club.',
    'home.how.s3.title': 'Te vas y juegas',
    'home.how.s3.text': 'Aterrizas y ya está todo listo. Y nosotros seguimos a tu lado.',
    'home.how.note': 'Las condiciones económicas (ayuda al alojamiento, beca de estudios, compensación de gastos) dependen de tu nivel de juego y del interés del club. Nuestro trabajo es ayudarte a conseguir lo mejor.',

    // Home — l'idea
    'home.idea.kicker': 'Cómo nació',
    'home.idea.h2': 'Una comida. Una idea. Un proyecto.',
    'home.idea.text': 'Todo nació durante una comida entre compañeros. Hablábamos de nuestras experiencias en el extranjero, del camino que habíamos recorrido, de las puertas que el rugby nos había abierto. Y pensamos: ¿por qué no ayudar a otros chicos a hacer lo mismo? No como agencia — como quienes ya lo han vivido. Así nació LINEOUT.',

    // Home — CTA finale
    'home.cta.h2': 'Ve. <span class="amber">Ahora.</span>',
    'home.cta.sub': 'El rugby no espera. Escríbenos: te respondemos en 48 horas.',
    'home.cta.btn': 'Contáctanos →',

    // Fondatori
    'founders.kicker': 'Los Fundadores',
    'founders.h1': 'Tres jugadores. Una visión.',
    'founders.sub': 'LINEOUT fue fundado por quienes viven el rugby cada semana al más alto nivel. No consultores, no managers: atletas en activo de la Serie A Elite con experiencia en las selecciones italianas.',
    'founders.label.position': 'Posición',
    'founders.label.club': 'Club actual',
    'founders.label.born': 'Nacido',
    'founders.sb.photo.alt': 'Simone Brisighella en acción con la camiseta del Valorugby Emilia',
    'founders.nc.photo.alt': 'Nicolò Casilio entra al campo del estadio para la final del Scudetto',
    'founders.fr.photo.alt': 'Fabio Ruaro con el balón y la camiseta del Valorugby Emilia',

    'founders.sb.position': 'Zaguero / Apertura',
    'founders.sb.club': 'Valorugby Emilia (Serie A Elite)',
    'founders.sb.born': 'Parma, 19 de julio de 2004 (21 años)',
    'founders.sb.career': 'Formado en la cantera de Viadana, debutó en la Serie A Elite con la camiseta gialloniera. Tras entrar en la Academia federal de las Zebre, debutó en el United Rugby Championship contra el Ulster. En la temporada 2025/2026, con el Valorugby Emilia, ganó el doble premio MVP de la Serie A Elite y Mejor Sub-23 del campeonato (el único en ganar ambos en la primera edición de los Awards). Con Italia ha vestido la camiseta de la Sub-18, Sub-19, Sub-20 (Seis Naciones y Mundial 2024), Seven e Italy XV en 2026.',
    'founders.sb.quote': '“Llevo estos colores desde niño. Jugar la final con el equipo de tu ciudad es un sueño hecho realidad.”',

    'founders.nc.position': 'Medio melé',
    'founders.nc.club': 'Valorugby Emilia (Serie A Elite)',
    'founders.nc.born': 'L’Aquila, 12 de octubre de 1998 (27 años)',
    'founders.nc.career': 'Formado en la histórica plaza rugbística de L’Aquila, entró en la Academia Nacional Ivan Francescato. Ganó el Scudetto con Calvisano en 2019. Después disputó cinco temporadas de United Rugby Championship, primero con las Zebre Parma (32 partidos) y luego con el Benetton Treviso, con el que también jugó la EPCR Challenge Cup. Con Italia recorrió todas las categorías Sub-17, Sub-18, Sub-20 (Seis Naciones y Mundial de la categoría 2018) y en 2026 fue convocado con el Italy XV para los tests contra Chile.',

    'founders.fr.position': 'Tercera línea (n.º 8)',
    'founders.fr.club': 'Valorugby Emilia (Serie A Elite)',
    'founders.fr.born': '2003 (22 años)',
    'founders.fr.career': 'Tres años en la academia zonal federal de Milán. Jugó en Serie A con el Rugby Parma, representando a las selecciones juveniles Sub-19 y Sub-20 (Seis Naciones y Mundial en Sudáfrica). Llegó al Valorugby Emilia en 2023 y se ganó la titularidad como número 8 ya en su primera temporada. En la temporada 2025/2026 alcanzó la final del Scudetto y fue uno de los nominados al premio Mejor Sub-23 de la Serie A Elite.',

    'founders.together.alt': 'Los tres fundadores con la camiseta del Valorugby Emilia y la copa',
    'founders.together.text': 'Los tres en el Valorugby Emilia. Mismo equipo, misma visión. LINEOUT nace del campo, no de una oficina.',
    'founders.together.cta': 'Contáctanos →',

    // Come funziona (pagina)
    'how.h1': 'El camino completo',
    'how.sub': 'Del primer contacto al primer entrenamiento en España.',
    'how.s1.title': 'Nos conoces',
    'how.s1.text': 'Nos escribes, nos llamas, nos mandas un DM en Instagram. Te respondemos en 48 horas. Queremos saber quién eres: puesto, nivel, qué quieres hacer además del rugby, dónde te gustaría ir.',
    'how.s2.title': 'Valoramos juntos',
    'how.s2.text': 'Analizamos tu perfil técnico. Somos jugadores en activo de la Serie A Elite: sabemos qué buscan los clubes españoles. Te decimos enseguida si puedes encajar y dónde.',
    'how.s3.title': 'Encontramos el club adecuado',
    'how.s3.text': 'Usamos nuestros contactos directos con los clubes españoles. Te presentamos, organizamos vídeo o prueba, negociamos las condiciones. Las condiciones económicas dependen de tu nivel y del interés del club: alojamiento (parcial o total), beca de estudios, ayuda laboral. Nuestro objetivo es que consigas lo máximo.',
    'how.s4.title': 'Lo organizamos todo',
    'how.s4.text': 'Casa, universidad o trabajo, documentos. No te dejamos solo con la burocracia.',
    'how.s5.title': 'Te vas',
    'how.s5.text': 'Aterrizas y ya está todo listo. Y nosotros seguimos a tu lado también después.',
    'how.faq.title': 'Preguntas frecuentes',
    'how.faq.q1': '¿Tengo que pagar algo?',
    'how.faq.a1': 'Nuestro servicio tiene un coste. Los detalles dependen del tipo de paquete. Escríbenos y lo hablamos sin compromiso.',
    'how.faq.q2': '¿Qué nivel necesito?',
    'how.faq.a2': 'Serie A, B o un recorrido en las categorías juveniles federales. Si tienes dudas, escríbenos: lo valoramos juntos.',
    'how.faq.q3': '¿Puedo elegir la ciudad?',
    'how.faq.a3': 'Sí, lo hablamos durante la valoración. Depende de los clubes con los que tengamos contactos activos en ese momento.',
    'how.faq.q4': '¿Puedo estudiar y jugar a la vez?',
    'how.faq.a4': 'Es exactamente lo que proponemos. Universidad española o trabajo a tiempo parcial: te ayudamos en ambos casos.',
    'how.faq.q5': '¿Cuánto dura la experiencia?',
    'how.faq.a5': 'Mínimo una temporada (unos 9–10 meses). Pero quien se va, a menudo se queda más tiempo.',
    'how.cta.h2': 'Ve. <span class="amber">Ahora.</span>',
    'how.cta.btn': 'Escríbenos ahora →',

    // Contatti
    'contact.kicker': 'Escríbenos',
    'contact.h1': 'Hablemos.',
    'contact.text': 'Mándanos un mensaje. Te respondemos en 48 horas. Veremos juntos si España es para ti — y cómo llegar de la manera correcta.',
    'contact.info1': 'Italia → España',
    'contact.info2': 'Respuesta en 48 horas',
    'contact.info3': 'Solo rugby, sin burocracia de más',
    'contact.form.name': 'Nombre *',
    'contact.form.surname': 'Apellidos *',
    'contact.form.email': 'Email *',
    'contact.form.phone': 'Teléfono *',
    'contact.form.message': 'Mensaje *',
    'contact.form.submit': 'Enviar'
  }
};

(function () {
  const STORAGE_KEY = 'lineout-lang';

  function applyLang(lang) {
    if (!translations[lang]) lang = 'it';
    const t = translations[lang];

    document.documentElement.lang = lang;
    document.documentElement.dataset.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const value = t[el.dataset.i18n];
      if (value == null) return;
      if (value.includes('<')) el.innerHTML = value;
      else el.textContent = value;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const value = t[el.dataset.i18nPlaceholder];
      if (value != null) el.placeholder = value;
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
      const value = t[el.dataset.i18nAlt];
      if (value != null) el.alt = value;
    });

    document.querySelectorAll('[data-i18n-label]').forEach(el => {
      const value = t[el.dataset.i18nLabel];
      if (value != null) el.setAttribute('aria-label', value);
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', String(active));
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* navigazione privata */ }
  }

  let saved = 'it';
  try { saved = localStorage.getItem(STORAGE_KEY) || 'it'; } catch (e) { /* navigazione privata */ }
  applyLang(saved);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });

  // Nav mobile
  const toggle = document.getElementById('nav-toggle');
  const navWrap = document.getElementById('nav-wrap');
  if (toggle && navWrap) {
    toggle.addEventListener('click', () => {
      const open = navWrap.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    navWrap.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      navWrap.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  // Reveal on scroll
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
})();
