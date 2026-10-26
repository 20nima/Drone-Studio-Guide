// The guide's own words (Danish + English). Screenshots, sections and controls come from data.js (tools/guide/build_guide.py).
window.GUIDE_TEXT = {
da: {
  ui: {
    title: "Drone Studio – Guide", start: "Kom i gang", onsite: "På lokation", keys: "Genveje", before: "Før flyvningen", after: "Efter flyvningen",
    help: "Hjælp", how: "Sådan gør du", tips: "Godt at vide", onpage: "På siden", showAll: "Vis alle knapper", sections: "sektioner",
    controls: "knapper og felter", other: "Øvrige knapper", hint: "Hold musen over et punkt i listen for at se, hvor det sitter. Klik på et nummer på billedet for at springe til forklaringen.",
    next: "Næste", prev: "Forrige", lang: "English", empty: "Siden har ingen sektioner, før der er data – se teksten ovenfor.",
    footer: "Skærmbillederne er taget automatisk fra programmet med eksempeldata."
  },
  pages: {
    project: {
      lead: "Alt om jobbet: kunden, adressen, din virksomhed og de tekster, der står i rapporten.",
      steps: ["Find kunden: vælg søgemåde (Auto, CVR, telefon eller navn), skriv i feltet og tryk <b>Hent</b>. Private personer findes ikke i CVR – skriv dem ind selv.",
              "Skriv <b>sagsadressen</b>. Dato og drone udfyldes fra fotoene, når du har importeret dem, og <b>Hent vejr</b> udfylder vejret på flyvetidspunktet (Open-Meteo, kræver internet).",
              "Vælg din <b>firmaprofil</b>: logo, inspektør og operatør-ID kommer med. Ændrer du noget, kan du gemme det som profil til næste gang (… -menuen).",
              "Skriv en kort <b>indledning</b>. Standardforbeholdet kommer altid med i rapporten; dit eget forbehold står under det.",
              "<b>Ejendom</b> (bygningstype, tagform, tagdækning …) og <b>flyveloggen</b> står bagerst i rapporten. Flyveloggen kan beregnes fra fotoene."],
      tips: ["Der er 50 gratis CVR-opslag om dagen. Er de brugt, åbner … -menuen virk.dk med din søgetekst.",
             "En <b>jobskabelon</b> udfylder rapporttekst, flyveplan og layout til en bestemt type job. Det, du har skrevet, bliver ikke overskrevet.",
             "<b>Rediger projekt…</b> øverst til højre ændrer navn, adresse, dato og kunde – også projektmappens navn."]
    },
    plan: {
      lead: "Planlæg flyvningen, før du tager ud: tegn området, vælg rutetype og send ruten til DJI Fly.",
      steps: ["Vælg <b>rutetype</b>: opmålingsgitter (ortofoto), 3D dobbeltgitter, orbit eller facade.",
              "Definér <b>området</b>: tegn det på kortet med værktøjet <i>Tegn område</i>, importér KML/GeoJSON, eller brug fotoernes område.",
              "Indstil <b>højde, gimbalvinkel og overlap</b>. Boksen <i>Tal</i> viser straks, hvor meget hvert foto dækker, opløsningen og den fart, der passer til intervallet.",
              "Tryk <b>Generér rute</b>. Waypoints kan flyttes, slettes (Delete) og have egne handlinger.",
              "<b>Eksport til DJI Fly (KMZ)</b>: lav først en mission i DJI Fly på controlleren, vælg den som den, der skal erstattes, og åbn den bagefter på controlleren."],
      tips: ["Højder er i forhold til startpunktet.",
             "DJI Fly viser stadig den gamle miniature og det gamle antal punkter i listen – åbn missionen, så indlæses den nye rute.",
             "Handlinger pr. waypoint (drej, svæv, video) er endnu ikke prøvet i en rigtig flyvning. Flyv forsigtigt og hold øje første gang.",
             "Bog-ikonet øverst til højre åbner en trin-for-trin-guide til ortofoto-flyvninger."]
    },
    photos: {
      lead: "Importér fotos og video fra flyvningen, og sortér hvad der skal med i rapporten.",
      steps: ["Tryk <b>Importér fotos / video…</b>. Du vælger, om filerne kopieres ind i projektet eller bare linkes.",
              "Gå fotoene igennem: <b>→</b> = brug, <b>←</b> = brug ikke. Mellemrum afspiller en video.",
              "Giv ét godt foto af hele taget en <b>stjerne</b>: det bliver oversigtsbilledet med nummererede nåle forrest i rapporten. Der er kun ét – det står med ★ i listen, og stjerneknappen lyser, når du står på det.",
              "Panelet til højre: en <b>note</b> til fotoet, hvilken <b>bygningsdel</b> det viser, og om det er skarpt og godt belyst.",
              "Klar? Tryk <b>Næste: Værksted</b>."],
      tips: ["Skarphed måles i forhold til de andre fotos i projektet – ikke som en absolut værdi.",
             "Filteret over listen kan vise kun de ubesluttede, så du ved, hvad der mangler.",
             "… -menuen kan lave stillbilleder fra en video (det skarpeste billede pr. interval, med GPS fra DJI's .SRT-fil)."]
    },
    mark: {
      lead: "Værkstedet: her markerer du fund på fotoene og skriver det, der står i rapporten.",
      steps: ["Vælg et foto i listen til venstre (som standard kun de udvalgte).",
              "Tryk <b>+</b> eller vælg et værktøj (cirkel, rektangel, pil, nål) og træk på fotoet.",
              "Udfyld <b>Fund</b>: vælg <b>Bygningsdel</b> (fx Skorsten eller Facade), så viser <b>Skade</b> de almindelige skader for den del. Vælg en skade og et <b>Omfang</b> (Begyndende, Moderat eller Omfattende): så udfyldes titel, observation, betydning, anbefaling og alvor. Omfanget ændrer ordlyden, anbefalingen og alvoren, og ændrer du det senere, omskrives kun de tekster, du ikke selv har rettet. <b>Titel</b> er overskriften i rapporten.",
              "Under <b>Beskrivelse og anbefaling</b> kan du rette teksterne. <i>Ingen markering</i> bruges, når fundet gælder hele fladen.",
              "Under <b>Rapport</b> knytter du fotoet til en bygningsdel og giver delen sin tilstand og én fælles tekst – også når alt er i orden.",
              "Video: sæt på pause og markér for at få et stillbillede. Tidslinjen trimmer (S deler, Delete fjerner et stykke), og stykker kan samles i et storyboard."],
      tips: ["En <b>firkant kan drejes</b> med den runde knap over den (Shift: trin på 15°), så den ligger langs en rygning eller revne.",
             "<b>Lup-værktøjet</b> viser en detalje forstørret på selve fotoet: klik på detaljen, og træk den store cirkel hen, hvor den ikke dækker noget. Luppen er ikke et fund, men vises i rapporten, hvor hele fotoet vises (oversigt, bygningsdele, galleri). Delete fjerner den.",
             "<b>AI-forslag</b> foreslår fund; du godkender hvert enkelt, og de mærkes i rapporten.",
             "Musehjulet zoomer, midter- eller højreklik og træk panorerer.",
             "Beskær og slør ændrer kun billedet i rapporten – aldrig selve filen. Sløringen vises på skærmen, som den bliver i rapporten, også mens du trækker i rektanglet.",
             "… -menuen: <i>Flyt nåle</i> på oversigtskortet, <i>Placér på oversigt</i> og en anden oversigt (fx bagsiden af taget)."]
    },
    thermal: {
      lead: "Termografi fra en termisk drone: billedpar, fund med temperaturer, måleforhold, plan og skimmelrisiko.",
      steps: ["Tryk <b>Termo-mappe…</b> eller <b>Tilføj billeder…</b>. Når der er billeder, får siden fanerne Fund, Forhold, Plan og Skimmel.",
              "<b>Fund</b>: markér varme eller kolde områder. Temperaturer aflæses, hvor billedet har temperaturdata.",
              "<b>Forhold</b>: standard, udetemperatur, vind, emissivitet og udstyr. Tjeklisten før eksport siger til, hvis noget mangler.",
              "<b>Plan</b> og <b>Skimmel</b> hjælper med at planlægge optagelsen og vurdere kondens- og skimmelrisiko."],
      tips: ["Siden virker med flere kameraer; kameraet findes automatisk eller vælges i rullemenuen.",
             "Ærligt: rigtige DJI R-JPEG-filer er endnu ikke afprøvet i programmet – kun testdata."]
    },
    map: {
      lead: "Mapping og 3D: fra flyveplan til ortofoto, højdemodel og 3D-model. Fotogrammetri betyder at måle ud fra overlappende fotos – flyvningen afgør, om du leverer et kort (2D) eller en 3D-model.",
      tabs: ["<b>Guide</b>: vælg, hvad du laver (kortlægning, 3D af bygning, 3D af objekt, facade) og få flyveindstillinger og en tjekliste. <i>Brug i flyveplan</i> sætter rutetype og overlap og åbner Flyveplan.",
             "<b>Optagesæt</b>: analysér fotoene (dækning, slørede billeder, fart, huller og højde – programmet viser, hvad der bør rettes før processering) og eksportér et rent sæt til WebODM, RealityScan eller COLMAP. Programmet laver ikke selv 3D-modellen.",
             "<b>Ortofoto</b>: importér et GeoTIFF fra fx WebODM, eller tryk <i>Importér processeringsresultat</i> og peg på resultatmappen (eller WebODM's all.zip) – så finder programmet selv ortofoto, højdemodel og 3D-filer. Fund kan placeres automatisk på kortet ud fra fotoenes position.",
             "<b>Måle</b>: afstand, areal, højde, volumen og profil – højde og volumen kræver en højdemodel (DSM). Kontrolpunkter viser, hvor nøjagtigt kortet er."],
      steps: ["<b>Vælg opgaven</b> i fanen Guide og tryk <i>Brug i flyveplan</i>. Kortlægning (2D) giver ortofoto, højdemodel og volumen; 3D-model giver mesh og punktsky.",
              "<b>Planlæg i Flyveplan</b>: tegn området (eller væglinjen / orbit-centret), tjek nøgletallene (fart, lukker, antal fotos) og eksportér til dronen.",
              "<b>Pasmærker (GCP)</b>, hvis resultatet skal måles nøjagtigt: 5–8 punkter fordelt over området, målt med GNSS. Uden dem er den absolutte position kun god til få meter.",
              "<b>Flyv</b> langsomt og i jævnt lys. Air 3S har elektronisk lukker, så hurtig flyvning giver rolling shutter-sløring.",
              "<b>Optagesæt</b>: analysér fotoene, tjek dækning og slørede billeder, og eksportér et rent sæt.",
              "<b>Processér</b> sættet i WebODM/OpenDroneMap (eller RealityScan, Metashape) – programmet laver ikke selv beregningen. Gem ortofoto (GeoTIFF) og dsm.tif; til 3D også modellen.",
              "<b>Ortofoto</b>: importér resultatet (knappen <i>Importér processeringsresultat</i>), placér fund. <b>Måle</b>: mål afstand, areal, højde og volumen, og tilføj kontrolpunkter for nøjagtigheden.",
              "<b>Rapport</b>: skriv forbeholdene med (ingen RTK, antal pasmærker) og eksportér."],
      tips: ["Uden RTK eller kontrolpunkter er målinger ikke metrisk nøjagtige – brug dem som overslag.",
             "Kortet viser OpenStreetMap; slå <i>Offline</i> til for kun at bruge gemte fliser."]
    },
    report: {
      lead: "Tjek at alt er med, vælg layout og eksportér rapporten som HTML og PDF.",
      steps: ["Læs <b>tjeklisten</b>: hvert punkt fortæller, hvad der mangler. Klik på et punkt med <b>→</b>, så kommer du direkte hen til det første fund eller den side, hvor det rettes.",
              "Vælg <b>layout</b>: Standard (2 fund pr. side), Stort (1 pr. side) eller Resumé (oversigt og tabel).",
              "Vælg <b>eksportindstillinger</b>: fotostørrelse, rapportsprog, PDF, videoer og hvad der ellers skal med.",
              "Tryk <b>Forhåndsvis i browser</b> for at se rapporten med det samme.",
              "Tryk <b>Eksportér rapport</b> (øverst til højre eller Ctrl+E). Rapporten lander i projektets <i>export/report/latest</i>."],
      tips: ["PDF'en laves to gange, så tabellen på forsiden får det sidetal, hvert fund står på.",
             "Med <i>Auto-versionering</i> får hver eksport sin egen daterede mappe i stedet for at overskrive den forrige.",
             "Rapporten går bygningsdel for bygningsdel, når fotos er knyttet til bygningsdele i Værkstedet."]
    }
  },
  startPage: {
    lead: "Drone Studio laver inspektionsrapporter fra dronefotos og video. Programmet er bygget op som menuen til venstre: du arbejder oppefra og ned.",
    flow: [["project", "Opret projektet og vælg kunde."], ["plan", "Planlæg flyvningen (valgfrit)."], ["onsite", "Flyv og fotografér – sådan gør du på lokation."],
           ["photos", "Importér og sortér fotos og video."], ["mark", "Markér fund, og beskriv bygningsdelene."],
           ["thermal", "Termografi, hvis du har termiske billeder."], ["map", "Mapping & 3D: guide, optagesæt, ortofoto og målinger (valgfrit)."], ["report", "Tjek, vælg layout og eksportér."]],
    frame: [["Sidemenuen", "Siderne i rækkefølge. Knappen nederst folder menuen sammen til ikoner. Ny, Åbn og Gem sidder også nederst."],
            ["Topbjælken", "Fortryd og gentag, <b>?</b> (denne guide, F1), tandhjulet (tema, sprog og skærmstørrelse 100–150 % til en bærbar i felten) og <b>Eksportér rapport</b>."],
            ["Nederst", "<b>Næste →</b> går til næste trin; statuslinjen fortæller, hvad programmet laver."],
            ["Gemning", "Projektet gemmes automatisk hvert minut og ligger i sin egen mappe med alle fotos (Dokumenter\\Drone Inspection Studio\\Projects)."]],
    frameTitle: "Programmets ramme", flowTitle: "Arbejdsgangen"
  },
  onsitePage: {
    lead: "En god rapport starter på stedet. Rapporten gennemgår bygningen del for del, så tænk i bygningsdele, når du fotograferer.",
    steps: [["Før du letter", "Planlæg ruten, tjek vejret og hvilke bygningsdele kunden vil have set (tag, skorsten, tagrender, inddækninger, facade …)."],
            ["Ét overblik", "Tag et foto af hele taget lige ovenfra eller skråt oppefra. Det bliver oversigtskortet med numre forrest i rapporten."],
            ["Én bygningsdel ad gangen", "Mindst ét foto pr. bygningsdel – også det, der er i orden. Så kan rapporten sige \"set og i orden\" i stedet for ingenting."],
            ["Nærbilleder af skader", "Gå tæt på det, der er galt: skarpt, flere vinkler, gerne med noget, der viser størrelsen."],
            ["Video", "En rolig video rundt om bygningen er god dokumentation. Stykker kan klippes ud og samles i rapporten."],
            ["Hjemme", "Sortér fotos → knyt dem til bygningsdele og giv hver del en tilstand → markér fund → eksportér."]],
    tips: ["Tidsrammerne står ved hver alvorsgrad i rapporten: straks, inden for et år, ved næste eftersyn.",
           "Rapporten er en visuel droneinspektion – ikke en tilstandsrapport. Forbeholdet står altid bagerst."]
  },
  keysPage: {
    lead: "Tastaturgenveje, der virker i hele programmet.",
    rows: [["Ctrl+Z / Ctrl+Y", "Fortryd / gentag"], ["Ctrl+S", "Gem"], ["Ctrl+O", "Åbn projekt"], ["Ctrl+N", "Nyt projekt"], ["Ctrl+E", "Eksportér rapport"], ["F1", "Åbn guiden på den side, du står på"],
           ["→ / ←", "Foto & Video: brug / brug ikke"], ["Mellemrum", "Afspil eller pause video"], ["S", "Værksted: del videoen ved afspilningspositionen"],
           ["Delete", "Værksted: slet markering eller videostykke · Flyveplan: slet valgte waypoints"], ["Ctrl+D", "Værksted: dupliker markeringen"],
           ["Musehjul", "Zoom på foto og kort"], ["Midter-/højreklik + træk", "Panorér fotoet"]]
  }
},
en: {
  ui: {
    title: "Drone Studio – Guide", start: "Getting started", onsite: "On site", keys: "Shortcuts", before: "Before the flight", after: "After the flight",
    help: "Help", how: "How to", tips: "Good to know", onpage: "On this page", showAll: "Show all controls", sections: "sections",
    controls: "controls", other: "Other controls", hint: "Hover over an item in the list to see where it is. Click a number on the picture to jump to its explanation.",
    next: "Next", prev: "Previous", lang: "Dansk", empty: "This page has no sections until there is data – see the text above.",
    footer: "The screenshots are taken automatically from the app with example data."
  },
  pages: {
    project: {
      lead: "Everything about the job: the customer, the address, your company and the texts in the report.",
      steps: ["Find the customer: choose how to search (Auto, CVR, phone or name), type in the field and press <b>Fetch</b>. Private persons are not in CVR – type them in yourself.",
              "Type the <b>job address</b>. Date and drone are filled in from the photos once they are imported, and <b>Fetch weather</b> fills in the weather at the time of the flight (Open-Meteo, needs internet).",
              "Choose your <b>company profile</b>: logo, inspector and operator ID come with it. If you change something, save it as a profile for next time (the … menu).",
              "Write a short <b>introduction</b>. The standard disclaimer is always in the report; your own reservations come under it.",
              "<b>Property</b> (building type, roof shape, roofing …) and the <b>flight log</b> are printed at the back. The flight log can be calculated from the photos."],
      tips: ["There are 50 free CVR lookups per day. When they are used up, the … menu opens virk.dk with your search text.",
             "A <b>job template</b> fills report text, flight plan and layout for one type of job. What you already wrote is kept.",
             "<b>Edit project…</b> at the top right changes name, address, date and customer – the project folder's name too."]
    },
    plan: {
      lead: "Plan the flight before you go: draw the area, choose the route type and send the route to DJI Fly.",
      steps: ["Choose the <b>route type</b>: survey grid (orthophoto), 3D double grid, orbit or facade.",
              "Define the <b>area</b>: draw it on the map with <i>Draw area</i>, import KML/GeoJSON, or use the photos' area.",
              "Set <b>height, gimbal angle and overlap</b>. The <i>Numbers</i> box shows at once how much each photo covers, the resolution and the speed that fits the interval.",
              "Press <b>Generate route</b>. Waypoints can be moved, deleted (Delete) and have their own actions.",
              "<b>Export to DJI Fly (KMZ)</b>: first make a mission in DJI Fly on the controller, pick it as the one to replace, then open it on the controller."],
      tips: ["Heights are relative to the take-off point.",
             "DJI Fly still shows the old thumbnail and point count in its list – open the mission and the new route loads.",
             "Per-waypoint actions (turn, hover, video) have not been tried in a real flight yet. Fly carefully and watch the first time.",
             "The book icon at the top right opens a step-by-step guide to orthophoto flights."]
    },
    photos: {
      lead: "Import the photos and videos from the flight and sort out what goes into the report.",
      steps: ["Press <b>Import photos / video…</b>. You choose whether the files are copied into the project or just linked.",
              "Go through the photos: <b>→</b> = use, <b>←</b> = don't use. Space plays a video.",
              "Give one good photo of the whole roof a <b>star</b>: it becomes the overview with numbered pins at the front of the report. There is one – it has a ★ in the list, and the star button is lit when you are on it.",
              "The panel on the right: a <b>note</b> for the photo, which <b>building part</b> it shows, and whether it is sharp and well exposed.",
              "Done? Press <b>Next: Workshop</b>."],
      tips: ["Sharpness is measured against the other photos of the project – not as an absolute value.",
             "The filter above the list can show only the undecided ones, so you know what is left.",
             "The … menu can make stills from a video (the sharpest frame per interval, with GPS from DJI's .SRT file)."]
    },
    mark: {
      lead: "The Workshop: mark findings on the photos and write what the report says.",
      steps: ["Pick a photo in the list on the left (only the selected ones by default).",
              "Press <b>+</b> or choose a tool (circle, rectangle, arrow, pin) and drag on the photo.",
              "Fill in <b>Finding</b>: choose the <b>Building part</b> (e.g. Chimney or Facade) and <b>Damage</b> lists the common damages for that part. Pick a damage and an <b>Extent</b> (Beginning, Moderate or Extensive): the title, observation, significance, recommendation and severity are filled in. The extent changes the wording, the recommendation and the severity, and changing it later rewrites only the texts you have not edited yourself. <b>Title</b> is the heading in the report.",
              "Under <b>Description and recommendation</b> you can edit the texts. <i>No marker</i> is for a finding that covers the whole surface.",
              "Under <b>Report</b> you link the photo to a building part and give the part its condition and one shared text – also when all is fine.",
              "Video: pause and mark to get a still. The timeline trims (S splits, Delete removes a piece), and pieces can be joined in a storyboard."],
      tips: ["A <b>rectangle can be turned</b> with the round knob above it (Shift: steps of 15°) so it lies along a ridge or a crack.",
             "The <b>Loupe tool</b> shows a detail enlarged on the photo itself: click the detail and drag the big circle to where it covers nothing. A loupe is not a finding, but it shows in the report wherever the whole photo is shown (overview, building parts, gallery). Delete removes it.",
             "<b>AI suggestions</b> propose findings; you approve each one, and they are labelled in the report.",
             "The mouse wheel zooms; middle or right drag pans.",
             "Crop and blur change only the picture in the report – never the file itself. The blur is shown on screen as it will be in the report, also while you drag the rectangle.",
             "The … menu: <i>Move pins</i> on the overview, <i>Place on overview</i> and a second overview (e.g. the back of the roof)."]
    },
    thermal: {
      lead: "Thermography from a thermal drone: image pairs, findings with temperatures, conditions, plan and mould risk.",
      steps: ["Press <b>Thermal folder…</b> or <b>Add images…</b>. With images, the page gets the tabs Findings, Conditions, Plan and Mould.",
              "<b>Findings</b>: mark warm or cold areas. Temperatures are read where the image has temperature data.",
              "<b>Conditions</b>: standard, outdoor temperature, wind, emissivity and equipment. The export checklist tells you if something is missing.",
              "<b>Plan</b> and <b>Mould</b> help plan the capture and judge condensation and mould risk."],
      tips: ["The page works with several cameras; the camera is detected or chosen in the drop-down.",
             "Honestly: real DJI R-JPEG files have not been tried in the app yet – only test data."]
    },
    map: {
      lead: "Mapping & 3D: from flight plan to orthophoto, elevation model and 3D model. Photogrammetry means measuring from overlapping photos – the flight decides whether you deliver a map (2D) or a 3D model.",
      tabs: ["<b>Guide</b>: choose what you are making (mapping, 3D of a building, 3D of an object, facade) and get flight settings and a checklist. <i>Use in flight plan</i> sets the route type and overlap and opens Flight plan.",
             "<b>Capture set</b>: analyse the photos (coverage, blurry ones, speed, gaps and height – the app lists what to fix before processing) and export a clean set for WebODM, RealityScan or COLMAP. The app does not build the 3D model itself.",
             "<b>Orthophoto</b>: import a GeoTIFF from e.g. WebODM, or press <i>Import processing result</i> and point to the result folder (or WebODM's all.zip) – the app finds the orthophoto, elevation model and 3D files itself. Findings can be placed on it automatically from the photos' positions.",
             "<b>Measure</b>: distance, area, height, volume and profile – height and volume need an elevation model (DSM). Control points show how accurate the map is."],
      steps: ["<b>Choose the job</b> in the Guide tab and press <i>Use in flight plan</i>. Mapping (2D) gives an orthophoto, elevation model and volume; a 3D model gives a mesh and point cloud.",
              "<b>Plan in Flight plan</b>: draw the area (or the wall line / orbit centre), check the numbers (speed, shutter, photo count) and export to the drone.",
              "<b>Ground control points (GCP)</b> if the result must be measured accurately: 5–8 points spread over the area, measured with GNSS. Without them the absolute position is only good to a few metres.",
              "<b>Fly</b> slowly in even light. The Air 3S has an electronic shutter, so fast flights give rolling-shutter blur.",
              "<b>Capture set</b>: analyse the photos, check coverage and blurry ones, and export a clean set.",
              "<b>Process</b> the set in WebODM/OpenDroneMap (or RealityScan, Metashape) – the app does not do the calculation itself. Keep the orthophoto (GeoTIFF) and dsm.tif; for 3D also the model.",
              "<b>Orthophoto</b>: import the result (button <i>Import processing result</i>), place findings. <b>Measure</b>: measure distance, area, height and volume, and add check points for the accuracy.",
              "<b>Report</b>: include the limits (no RTK, number of control points) and export."],
      tips: ["Without RTK or control points, measurements are not metrically accurate – use them as estimates.",
             "The map shows OpenStreetMap; tick <i>Offline</i> to use saved tiles only."]
    },
    report: {
      lead: "Check that everything is there, choose a layout and export the report as HTML and PDF.",
      steps: ["Read the <b>checklist</b>: each line says what is missing. Click a line with <b>→</b> to go straight to the first finding or the page where it is fixed.",
              "Choose a <b>layout</b>: Standard (2 findings per page), Large (1 per page) or Summary (overview and table).",
              "Choose the <b>export settings</b>: photo size, report language, PDF, videos and what else to include.",
              "Press <b>Preview in browser</b> to see the report straight away.",
              "Press <b>Export report</b> (top right or Ctrl+E). The report lands in the project's <i>export/report/latest</i>."],
      tips: ["The PDF is made twice, so the table on the front page gets the page number of each finding.",
             "With <i>Auto-versioning</i> every export gets its own dated folder instead of replacing the previous one.",
             "The report goes building part by building part when photos are linked to building parts in the Workshop."]
    }
  },
  startPage: {
    lead: "Drone Studio makes inspection reports from drone photos and video. The app is laid out like the menu on the left: you work from top to bottom.",
    flow: [["project", "Create the project and choose the customer."], ["plan", "Plan the flight (optional)."], ["onsite", "Fly and take photos – how to work on site."],
           ["photos", "Import and sort photos and videos."], ["mark", "Mark findings and describe the building parts."],
           ["thermal", "Thermography, if you have thermal images."], ["map", "Mapping & 3D: guide, capture set, orthophoto and measurements (optional)."], ["report", "Check, choose a layout and export."]],
    frame: [["The side menu", "The pages in order. The button at the bottom folds the menu to icons. New, Open and Save are at the bottom too."],
            ["The top bar", "Undo and redo, <b>?</b> (this guide, F1), the gear (theme, language and screen size 100–150 % for a laptop in the field) and <b>Export report</b>."],
            ["At the bottom", "<b>Next →</b> goes to the next step; the status line says what the app is doing."],
            ["Saving", "The project saves itself every minute and lives in its own folder with all photos (Documents\\Drone Inspection Studio\\Projects)."]],
    frameTitle: "The app's frame", flowTitle: "The workflow"
  },
  onsitePage: {
    lead: "A good report starts on site. The report goes through the building part by part, so think in building parts when you take photos.",
    steps: [["Before take-off", "Plan the route, check the weather and which building parts the customer wants seen (roof, chimney, gutters, flashings, facade …)."],
            ["One overview", "Take a photo of the whole roof straight from above or at an angle from above. It becomes the overview map with numbers at the front of the report."],
            ["One building part at a time", "At least one photo per building part – also what is fine. Then the report can say \"seen and fine\" instead of nothing."],
            ["Close-ups of damage", "Get close to what is wrong: sharp, several angles, ideally with something that shows the size."],
            ["Video", "A calm video around the building is good documentation. Pieces can be cut out and joined in the report."],
            ["Back home", "Sort photos → link them to building parts and give each part a condition → mark findings → export."]],
    tips: ["Each severity has a time frame in the report: immediately, within a year, at the next inspection.",
           "The report is a visual drone inspection – not a building survey. The disclaimer is always at the back."]
  },
  keysPage: {
    lead: "Keyboard shortcuts that work throughout the app.",
    rows: [["Ctrl+Z / Ctrl+Y", "Undo / redo"], ["Ctrl+S", "Save"], ["Ctrl+O", "Open project"], ["Ctrl+N", "New project"], ["Ctrl+E", "Export report"], ["F1", "Open this guide on the page you are on"],
           ["→ / ←", "Photos & Video: use / don't use"], ["Space", "Play or pause a video"], ["S", "Workshop: split the video at the playhead"],
           ["Delete", "Workshop: delete marker or video piece · Flight plan: delete selected waypoints"], ["Ctrl+D", "Workshop: duplicate the marker"],
           ["Mouse wheel", "Zoom photos and maps"], ["Middle/right drag", "Pan the photo"]]
  }
}
};
