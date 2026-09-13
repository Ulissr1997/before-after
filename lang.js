/* Shared language layer. English is the source text; Albanian is looked up by it,
   so markup needs no keys — only [data-dyn] to mark text that JS rewrites itself. */
(function(){
  const KEY = 'beforeAfter.lang';

  const SQ = {
    /* tabs and shell */
    "Photos":"Fotot", "Frame":"Korniza", "Text":"Teksti", "Logo":"Logoja", "Looks":"Stilet",
    "Before / After":"Para / Pas", "Logo on video":"Logo mbi video",
    "Language":"Gjuha", "English":"English", "Albanian":"Shqip",

    /* photos */
    "What are you posting?":"Çfarë po publikon?",
    "Before/after":"Para/pas", "One photo":"Një foto", "Video":"Video",
    "Before":"Para", "After":"Pas",
    "Tap to choose a photo":"Prek për të zgjedhur një foto",
    "Tap to choose a clip":"Prek për të zgjedhur një klip",
    "Optional — PNG with transparency":"Opsionale — PNG me sfond transparent",
    "PNG with transparency":"PNG me sfond transparent",
    "Swap before and after":"Këmbe para-pas",
    "Photos stay on this device. Nothing is uploaded.":"Fotot mbeten në këtë pajisje. Asgjë nuk ngarkohet.",

    /* frame */
    "Canvas":"Përmasa", "Square":"Katror", "Portrait":"Portret", "Story":"Story",
    "Split":"Ndarja", "Side by side":"Krah për krah", "Stacked":"Njëra mbi tjetrën",
    "Divider":"Ndarësi", "Gap":"Hapësirë", "Line":"Vijë", "Diagonal":"Diagonale",
    "Gap between photos":"Hapësira mes fotove", "Line thickness":"Trashësia e vijës",
    "Background colour":"Ngjyra e sfondit",
    "Show what Instagram covers":"Shfaq çfarë mbulon Instagrami",
    "Preview only — never part of the saved image.":"Vetëm në parapamje — kurrë në foton e ruajtur.",
    "Square posts are not cropped or covered, so there is nothing to show.":"Postimet katrore nuk priten dhe nuk mbulohen, s'ka çfarë të shfaqet.",
    "Photo shape":"Forma e fotos", "Fill the frame":"Mbush kornizën", "Fit it all in":"Fut të gjithë foton",
    "Fit keeps the whole photo and blurs a copy behind it to fill the gaps.":"\"Fut\" ruan të gjithë foton dhe turbullon një kopje pas saj për të mbushur boshllëqet.",
    "Before — zoom":"Para — zmadhimi", "After — zoom":"Pas — zmadhimi", "Zoom":"Zmadhimi",
    "Centre the photos":"Qendëro fotot", "Centre the photo":"Qendëro foton",
    "Drag a photo on the preview to move it. Pinch with two fingers to zoom.":"Zvarrit një foto në parapamje për ta lëvizur. Përdor dy gishta për zmadhim.",
    "Drag the photo on the preview to move it. Pinch with two fingers to zoom.":"Zvarrit foton në parapamje për ta lëvizur. Përdor dy gishta për zmadhim.",

    /* text */
    "Show text on photos":"Shfaq tekstin mbi fotot",
    "Label text":"Teksti i etiketave", "Caption on photo":"Mbishkrimi mbi foto",
    "Leave empty for none":"Lëre bosh për asnjë",
    "Typeface":"Shkronjat", "Text size":"Madhësia e tekstit", "Size":"Madhësia",
    "Move which text?":"Cilin tekst të lëvizësh?", "Position":"Pozicioni",
    "Top left":"Lart majtas", "Top":"Lart", "Top right":"Lart djathtas",
    "Left":"Majtas", "Middle":"Në mes", "Right":"Djathtas",
    "Bottom left":"Poshtë majtas", "Bottom":"Poshtë", "Bottom right":"Poshtë djathtas",
    "Or drag the text straight on the preview. Press return in a text box for a second line.":"Ose zvarrit tekstin drejt në parapamje. Shtyp Enter në kuti për një rresht të dytë.",
    "Or drag the text on the preview.":"Ose zvarrit tekstin në parapamje.",
    "Text colour":"Ngjyra e tekstit", "Text background":"Sfondi i tekstit", "Colours":"Ngjyrat",
    "Slide to 0 for no background — the text keeps a soft shadow so it stays readable.":"Vendose në 0 për asnjë sfond — teksti ruan një hije të lehtë që të mbetet i lexueshëm.",

    /* logo */
    "Logo position":"Pozicioni i logos", "Logo corner":"Qoshja e logos",
    "Logo size":"Madhësia e logos", "Logo opacity":"Tejdukshmëria e logos",
    "The logo can be dragged on the preview too.":"Logoja mund të zvarritet edhe në parapamje.",
    "Add a logo in the Photos tab to place and size it here.":"Shto një logo te skeda \"Fotot\" për ta vendosur dhe përmasuar këtu.",

    /* looks */
    "Saved looks":"Stilet e ruajtura", "Save this look":"Ruaj këtë stil",
    "Keeps your fonts, colours, positions and logo size. Photos aren't included.":"Ruan shkronjat, ngjyrat, pozicionet dhe madhësinë e logos. Fotot nuk përfshihen.",
    "Nothing saved yet.":"Asgjë e ruajtur ende.",
    "Backup":"Kopje rezervë", "Save a backup file":"Ruaj një skedar rezervë", "Restore":"Rikthe",
    "Writes your looks, settings and logo to a file you keep. Add this app to your Home Screen too — iPhones clear storage for sites left unopened for a week.":"Shkruan stilet, cilësimet dhe logon në një skedar që e ruan vetë. Shtoje aplikacionin edhe në ekranin kryesor — iPhone-i i fshin të dhënat e faqeve të pahapura për një javë.",
    "Reset everything and forget logo":"Rivendos gjithçka dhe harro logon",

    /* export */
    "Export as…":"Eksporto si…", "Save image":"Ruaj foton",
    "Add photos":"Shto fotot", "Add a photo":"Shto një foto", "Add a video first":"Shto një video",
    "Reveal video":"Video me zbulim", "Animated reveal":"Zbulim i animuar",
    "Wipe":"Fshirje", "Push":"Shtytje", "Fade":"Zbehje", "Back & forth":"Vajtje-ardhje",
    "Show a slider grip on the edge":"Shfaq dorezën rrëshqitëse në buzë",
    "Slow zoom while it plays":"Zmadhim i ngadaltë gjatë luajtjes",
    "Length":"Kohëzgjatja", "Preview":"Parapamje", "Export video":"Eksporto videon",
    "Plays your before turning into the after. Records in real time.":"Luan kalimin nga \"para\" në \"pas\". Regjistrohet në kohë reale.",
    "Cancel":"Anulo", "Stop":"Ndalo", "Delete?":"Fshi?",

    /* video page */
    "Shape":"Forma", "As filmed":"Siç u filmua",
    "Drag the picture on the preview to choose what stays in frame.":"Zvarrit pamjen në parapamje për të zgjedhur çfarë mbetet në kornizë.",
    "Speed":"Shpejtësia", "Normal":"Normale",
    "Faster playback also means a faster export.":"Luajtja më e shpejtë do të thotë edhe eksport më i shpejtë.",
    "Colour":"Ngjyra", "Warm":"E ngrohtë", "Cool":"E ftohtë", "Mono":"Bardhezi",
    "Drop the sound":"Hiq zërin", "Fade the logo in":"Shfaqe logon gradualisht",
    "Text on the video":"Teksti mbi video",
    "Trim":"Prerja", "whole clip":"i gjithë klipi",
    "Recording runs in real time, so a shorter cut exports faster.":"Regjistrimi bëhet në kohë reale, prandaj një prerje më e shkurtër eksportohet më shpejt.",
    "The clip plays through once while it records, so a 30-second video takes 30 seconds. Keep this screen open while it runs.":"Klipi luhet një herë ndërsa regjistrohet, kështu një video 30-sekondëshe zgjat 30 sekonda. Mbaje këtë ekran hapur.",
    "Preview only — never part of the exported video.":"Vetëm në parapamje — kurrë në videon e eksportuar.",
    "This browser can't record video. Try Chrome, or Safari on iOS 17 or newer.":"Ky shfletues nuk mund të regjistrojë video. Provo Chrome, ose Safari në iOS 17 e lart.",
    "Add logo and export":"Shto logon dhe eksporto", "Export without a logo":"Eksporto pa logo",
    "Stop and keep this much":"Ndalo dhe ruaj kaq", "Recording…":"Duke regjistruar…",

    /* messages */
    "That file could not be read. Try a JPG or PNG.":"Skedari nuk u lexua dot. Provo një JPG ose PNG.",
    "The export failed. Try a smaller photo.":"Eksportimi dështoi. Provo një foto më të vogël.",
    "Add both photos first.":"Shto të dyja fotot më parë.",
    "This browser cannot record video.":"Ky shfletues nuk mund të regjistrojë video.",
    "This browser refused to start recording.":"Shfletuesi nuk e nisi regjistrimin.",
    "Nothing was recorded. Try again.":"Asgjë nuk u regjistrua. Provo sërish.",
    "Recording the reveal…":"Duke regjistruar zbulimin…",
    "Playing the preview…":"Duke luajtur parapamjen…",
    "Settings reset. Saved looks were kept.":"Cilësimet u rivendosën. Stilet e ruajtura mbetën.",
    "Backup saved — keep it somewhere safe.":"Kopja rezervë u ruajt — mbaje në një vend të sigurt.",
    "That file could not be read as a backup.":"Skedari nuk u lexua dot si kopje rezervë.",
    "That does not look like a backup from this app.":"Ky nuk duket si një kopje rezervë e këtij aplikacioni.",
    "Could not save the look — storage is full.":"Stili nuk u ruajt — hapësira është plot.",
    "Logo is too large to remember — it still works for this session.":"Logoja është shumë e madhe për t'u mbajtur mend — punon vetëm për këtë herë.",
    "The video would not start playing.":"Videoja nuk filloi të luajë.",
    "That video could not be read.":"Videoja nuk u lexua dot.",
    "Audio could not be captured — exporting the picture only.":"Zëri nuk u kap — po eksportohet vetëm pamja.",
    "Reading the video…":"Duke lexuar videon…",
    "This browser can\u2019t decode that format. Try an MP4.":"Ky shfletues nuk e lexon dot këtë format. Provo një MP4.",
    "The video could not be read here. On some pages the browser blocks local video — try it on the published site.":"Videoja nuk u lexua dot këtu. Në disa faqe shfletuesi e bllokon videon lokale — provoje në faqen e publikuar."
  };

  let lang = 'en';
  try { lang = localStorage.getItem(KEY) === 'sq' ? 'sq' : 'en'; } catch(e){}

  const textOrigin = new WeakMap();
  const attrOrigin = new WeakMap();

  function tr(s){
    if (lang !== 'sq' || s == null) return s;
    return SQ[s] || s;
  }

  function translateDOM(){
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach(n => {
      const parent = n.parentElement;
      if (!parent) return;
      const tag = parent.tagName;
      if (tag === 'SCRIPT' || tag === 'STYLE') return;
      if (parent.closest('[data-dyn]')) return;          // JS owns this text
      let src = textOrigin.get(n);
      if (src === undefined){ src = n.nodeValue; textOrigin.set(n, src); }
      const key = src.trim();
      if (!key) return;
      n.nodeValue = src.replace(key, tr(key));
    });

    document.querySelectorAll('[placeholder],[aria-label],[title]').forEach(el => {
      let saved = attrOrigin.get(el);
      if (!saved){
        saved = { placeholder:el.getAttribute('placeholder'),
                  'aria-label':el.getAttribute('aria-label'),
                  title:el.getAttribute('title') };
        attrOrigin.set(el, saved);
      }
      for (const attr in saved){
        if (saved[attr] == null) continue;
        el.setAttribute(attr, tr(saved[attr]));
      }
    });
  }

  window.I18N = {
    t: tr,
    apply: translateDOM,
    get current(){ return lang; },
    set(next, after){
      lang = next === 'sq' ? 'sq' : 'en';
      try { localStorage.setItem(KEY, lang); } catch(e){}
      document.documentElement.lang = lang;
      translateDOM();
      if (after) after();
    }
  };
})();
