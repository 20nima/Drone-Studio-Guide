// The guide's own words (Danish + English). Screenshots, sections and controls come from data.js (tools/guide/build_guide.py).
window.GUIDE_TEXT = {
da: {
  ui: {
    title: "Drone Studio – Guide", start: "Kom i gang", onsite: "På lokation", fieldtest: "Mapping-test", keys: "Genveje", before: "Før flyvningen", after: "Efter flyvningen",
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
             "<b>Rediger projekt…</b> øverst til højre ændrer navn, adresse, dato og kunde – også projektmappens navn.",
             "<b>Størrelse på programmet:</b> tandhjulet (⚙) har en skala fra 85 % til 200 %, der skalerer hele programmet. Ændringen træder i kraft efter en genstart, og programmet spørger, om det skal genstarte nu."]
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
      steps: ["Tryk <b>Importér fotos / video…</b> og peg på SD-kortet eller en mappe. Programmet læser, hvornår hvert foto er taget, og samler dem i <b>sessioner</b> (en ny session starter efter en pause på 3 timer – kan ændres). Hver session vises som et kort med miniaturer og et <b>forslag</b> til type (kortlægning, 3D, inspektion eller uafklaret). Forslaget ændrer aldrig dine fotos, og du kan rette det med <i>Ret</i>.",
              "Sæt kryds ved de sessioner, der hører til projektet, og vælg, om filerne kopieres ind i projektet eller linkes. Når kun nogle sessioner er valgt, kopieres de. Har projektet flere sessioner, vælger du i feltet over listen, hvilken du vil se; menuen ved siden af lader dig navngive den, rette typen og ændre pausen.",
              "Vil du justere ét foto: knappen <b>Lys &amp; farve</b> (tre skydere-ikonet) i værktøjslinjen – på Foto &amp; Video ved siden af stjernen, i Værksted ved siden af beskær og sløring – åbner skydere for <b>eksponering, kontrast, højlys, skygger, farvemætning, varme og skarphed</b> og en <b>tonekurve</b> (træk de fem punkter op eller ned). Billedet følger med med det samme. Dobbeltklik på en skyder eller kurven nulstiller den, <i>Nulstil</i> nulstiller alt. <i>Kopiér</i> tager fotoets udseende, <i>Indsæt</i> giver det til et andet foto, <i>Indsæt på session</i> til hele sessionen, og <i>Match session</i> giver sessionens fotos samme lys og farve. Miniaturerne i listen viser udseendet. Billedet følger med, mens du trækker; filen røres aldrig; rapport og eksport bruger det samme. Ét træk er ét fortryd. Det virker ikke på termiske billeder og video.",
              "Er fotos fra samme session taget med forskellig lysmåling, så brug menuen ved siden af sessionsfeltet: <b>Match udseende</b> giver dem samme lys og farve (efter sessionens midterste foto, eller efter det foto, du ser). Kun to små tal gemmes pr. foto, originalerne røres aldrig, og ◐ i listen viser, hvilke fotos der er matchet. Det virker på almindelige JPEG-fotos; termiske billeder, video, DNG og kortlægnings-/3D-sessioner springes over. Rapport og eksport bruger det matchede udseende. Ét fortryd tager hele matchningen tilbage. Kommer de udvalgte fotos i rapportens fotoafsnit fra mere end én session, deles de op pr. session med sessionens navn og tidspunkt (ældste først).",
              "Gå fotoene igennem: <b>→</b> = brug, <b>←</b> = brug ikke. Mellemrum afspiller en video.",
              "<b>Et langt tag eller en række huse?</b> Tag 2-4 fotos ovenfra, der overlapper med ca. en tredjedel. Marker dem i listen (Ctrl- eller Skift-klik) og tryk på <b>Sæt sammen</b> (to overlappende billeder i værktøjslinjen). <i>Sæt sammen automatisk</i> finder selv de samme steder og blender samlingerne. Er taget for ensartet (tagpap, samme tegl), og det fejler, så brug <i>Markér punkter selv</i>: klik det samme sted (et hjørne, en skorsten, en skrue) på to nabofotos – to steder pr. par er nok, tre er bedre. Rækkefølgen i dialogen er fra venstre mod højre. Resultatet gemmes som nyt foto i projektet, og som standard bliver det overblikbilledet med nummererede pins. Se samlingerne efter: ved skæve fotos kan en samling vise et lille spring. Fotos bør tages nogenlunde lodret og i samme højde.",
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
             "<b>En sløring kan rettes.</b> Klik på en sløring, der allerede er der, så kan du flytte den, trække i kanter og hjørner eller slette den (<i>Slet sløring</i> eller Delete – Delete sletter kun sløringen, aldrig fundet). Hold <b>Alt</b> nede og træk i et hjørne for kun at flytte det ene hjørne: så bliver sløringen en fri firkant, fx langs en skrå kant. På fotos sløres præcis firkanten; i en video sløres rektanglet omkring den (lidt mere, aldrig mindre).",
             "<b>Sløring, der følger videoen:</b> sæt videoen på pause, hvor det, der skal sløres, ses tydeligt, tryk <i>Slør</i>, placér rektanglet og tryk <b>Følg bevægelse</b> (i stedet for OK). Programmet følger scenen omkring sløringen frem og tilbage i videoen, og sløringen flytter sig med, så den ikke pludselig dækker noget, du skal se. Det virker til ting, der står stille, mens kameraet flytter sig (et vindue, en nabohave), ikke til mennesker eller biler. Kan billedet ikke følges længere, står sløringen stille dér, og du får besked om hvor: tegn så en ny sløring derfra. Sløringen vises i den færdige video og i afspilleren; klik på den for at rette (så følger den ikke længere, før du trykker Følg igen) eller slette den.",
             "<b>Fundlisten advarer</b>, hvis noget bør rettes før eksport: <i>uden titel</i>, <i>ingen pin på forsiden</i>, <i>få pixels: blødt i rapporten</i> (udsnittet har under 1200 pixel fra originalen – løsn beskæringen eller brug et nærmere foto) og <i>alvor og anbefaling passer ikke</i> (fx «Bør udbedres» med anbefalingen «følges ved næste eftersyn»). Advarslerne følger med, så snart du retter.",
             "<b>Nyt fund uden markering</b> (… -menuen) laver et fund for hele fladen. Placér det på oversigten, så får det en pin. <b>Slå sammen</b> samler flere fund til ét: alle markeringer beholdes. De ekstra billeder står sidst i rapporten, og i PDF'en vises højst fire pr. fund (resten er i HTML-rapporten).",
             "Et enkelt billede fra en video: tegn en markering på videoen, så gemmes billedet på det tidspunkt som et foto (med GPS, hvis der ligger en .SRT-fil ved siden af).",
             "… -menuen: <i>Flyt nåle</i> på oversigtskortet, <i>Placér på oversigt</i> og en anden oversigt (fx bagsiden af taget).",
             "<b>Nærbillede + nål på oversigten:</b> lav fundet på nærbilledet (firkant om skaden), vælg <i>… → Placér på oversigt</i> og klik på stedet på oversigtsbilledet. Du bliver på oversigten, og fundets nummererede nål står nu dér (fundet får 📍 i listen). Et klik på nålen åbner fundet og dets nærbillede igen. Slet et eventuelt dobbelt fund, du før lavede direkte på oversigten – ellers har stedet to numre."]
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
              "Tryk <b>Eksportér rapport</b> (øverst til højre eller Ctrl+E). Rapporten lander i projektets <i>export/report/latest</i>.",
              "<b>Vis dit arbejde til nye kunder:</b> <i>Publicér eksempel-hjemmeside…</i> laver rapporten til en lille hjemmeside med en kort forside (overblik med pins, tre linjer, dine kontaktoplysninger), selve rapporten og en PDF. "
              + "Du skriver, hvilken adresse og kunde offentligheden skal se (skriv fx «Rækkehus, Gentofte»), og bekræfter, at du må vise ejendommen. Kundens navn, telefon og e-mail kommer aldrig med, og siden er markeret <i>noindex</i>, så Google ikke viser den. "
              + "<i>Lav den her og se den</i> laver siden i en mappe og åbner den, uden at noget lægges på nettet. <i>Lav den og udgiv</i> uploader den til dit GitHub-repository. "
              + "Første gang: lav et tomt, offentligt repository på github.com, slå Pages til (Settings → Pages → main, / root), og indsæt adressen. Send derefter linket til tømrere og taglæggere. Med en GoatCounter-kode kan du se, hvor mange der åbnede det."],
      tips: ["PDF'en laves to gange, så tabellen på forsiden får det sidetal, hvert fund står på.",
             "Med <i>Auto-versionering</i> får hver eksport sin egen daterede mappe i stedet for at overskrive den forrige.",
             "Rapporten går bygningsdel for bygningsdel, når fotos er knyttet til bygningsdele i Værkstedet.",
             "<b>Forsiden</b> har tællere, <i>Bør ses først</i>, tilstand pr. bygningsdel (alle dele med fund; har du ikke sat en tilstand, vises det værste fund) og oversigtsbilledet. Flyvelog, metode, sagsoplysninger og forbehold står bagerst.",
             "<b>Foreslå</b> på Projekt-siden skriver samlet vurdering og metode ud fra fundene. Et uændret forslag følger fundene i rapporten (metoden skrives igen fra projektet), og den automatiske samlede vurdering vises ikke. Retter du selv i teksten, står den, som du skrev den.",
             "Tjeklisten siger også til, når et fund har få pixels, mangler pin på forsiden, eller alvor og anbefaling ikke passer sammen."]
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
  fieldPage: {"title": "Mapping-test", "reset": "Nulstil afkrydsninger", "done": "udført", "lead": "Sådan tester du kortlægning og 3D på lokation, trin for trin. Kryds af, mens du går – dine afkrydsninger huskes på denne enhed, så siden kan bruges på telefonen.", "compareTitle": "WebODM eller RealityScan?", "compare": [["Kortlægning (ortofoto, højdemodel)", "WebODM er branchestandard og lavet til det. Start her.", "God, men ikke dens stærkeste side."], ["3D-model af bygning", "God, men meshet er ofte mere ujævnt.", "Typisk bedre detaljer og tekstur, og hurtigere med et kraftigt NVIDIA-kort."], ["Pris og opsætning", "Gratis, open source.", "Gratis under en omsætningsgrænse (tjek vilkårene), skal installeres."]], "compareHead": ["", "WebODM", "RealityScan"], "compareNote": "Programmet importerer begge på samme måde, så du kan køre de samme fotos i begge og sammenligne.", "phases": [{"h": "1. Aftenen før", "items": ["Tjek at WebODM kører og kan åbnes i browseren (prøv evt. med få fotos).", "Tjek diskplads: et job kan fylde 10-30 GB.", "Opret et testprojekt, jobtype <i>Kortlægning / ortofoto</i>.", "<b>Mapping & 3D → Guide → Kortlægning (2D) → Brug i flyveplan.</b> Tegn et område på 50×50 til 80×80 m, højde 60-80 m.", "Læs nøgletallene i flyveplanen (fart, antal fotos, flyvetid). Med 50 MP er der mindst 5 sekunder mellem fotos, så farten bliver lav.", "Eksportér ruten til dronen. Lav også en 3D-plan (<i>3D-model af bygning</i>) til bygningen.", "Batterier ladet, SD-kort tomme."]}, {"h": "2. På lokationen, før du letter", "items": ["Åbent område med lidt struktur (bygning, sti, kant) – ikke kun ensformigt græs.", "Tjek regler og luftrum i de officielle dronekort. Hold synsvidde, højst 120 m, og ikke over uvedkommende.", "Vind under cirka 8 m/s og jævnt lys (ikke skiftevis sol og skyer).", "Læg 5-6 markører ud (kridt, tape, kegler), fordelt over området.", "Mål nogle afstande mellem markørerne med målebånd og skriv dem ned. Det er din facitliste."]}, {"h": "3. Test 1: kortlægning (2D)", "items": ["Flyv ruten fra programmet, kamera lodret ned.", "Ændr ikke farten undervejs.", "Skriv ned: højde, faktisk fart, antal fotos, flyvetid, batteri brugt, vind."]}, {"h": "4. Test 2: 3D af en bygning", "items": ["Brug planen <i>3D-model af bygning</i> (dobbelt-gitter: lodret plus skråt).", "Tilføj evt. en orbit rundt om bygningen til hjørner og udhæng. Hold afstand til ledninger og træer.", "Forvent cirka dobbelt så mange fotos og flere batterier."]}, {"h": "5. Hjemme: tjek, processér, importér", "items": ["<b>Optagesæt:</b> importér fotos, tryk <i>Analysér fotos</i>, og skriv advarslerne ned. Passede de med, hvad du ved om flyvningen?", "Eksportér det rene sæt (slørede fotos udeladt).", "<b>WebODM:</b> opret projekt og upload fotos.", "Slå <b>dsm</b> til (<code>dsm = true</code>). Uden den får du ingen højder eller volumen.", "Til første test: slå <code>fast-orthophoto</code> til, så du ikke venter i timevis. Prøv evt. også rolling-shutter-indstillingerne for Air 3S.", "Når den er færdig: <b>Download Assets → All Assets</b> (giver <code>all.zip</code>).", "<b>Drone Studio → Ortofoto → Importér WebODM-zip</b> (eller <i>Importér resultatmappe</i>, hvis zip'en er pakket ud).", "Tjek at ortofoto og højdemodel er indlæst, og at 3D-filerne er fundet."]}, {"h": "6. Mål og lav rapport", "items": ["<b>Måle-fanen:</b> mål dine tape-afstande, og sammenlign med målebåndet. Forskellen er din reelle relative nøjagtighed.", "Mål et areal eller en højde, du kender.", "Eksportér en rapport. Tjek ortofoto, højdemodel og <i>Grundlag &amp; begrænsninger</i>.", "Valgfrit: kør de samme fotos i RealityScan og sammenlign 3D-modellen."]}], "notesTitle": "Skriv det her ned", "notes": [["Flyvning", "Højde, fart, antal fotos, flyvetid, batteri, vind"], ["Advarsler", "Hvad programmet sagde, og om det passede"], ["Fart", "Hvad du fløj, og hvad advarslen anslog (grænsen på 8 m/s er et skøn)"], ["WebODM", "Indstillinger, tid, om DSM kom med, huller i modellen"], ["Nøjagtighed", "Tape-mål mod programmets mål, i cm"], ["Import", "Om alle filer blev fundet (ellers: mappe- og filnavne)"]], "wordsTitle": "Ord du møder", "words": [["Overlap", "Hvor meget fotos dækker hinanden. Uden nok kan programmet ikke matche billederne."], ["GSD", "Hvor stor en pixel er på jorden. Lavere flyvning giver finere detaljer, men flere fotos."], ["Ortofoto", "Et stort billede set lige ovenfra, samlet af mange fotos og rettet for terrænets højde, så det er målfast: du kan måle afstande og arealer direkte på det, og det ligger rigtigt på et kort. Et almindeligt panorama er ikke rettet på den måde."], ["DSM", "Højdemodel af overfladen, inklusive bygninger og træer."], ["RTK / GCP", "Præcis positionering. Air 3S har ingen RTK, så uden pasmærker (GCP) er den absolutte placering god til få meter; afstande inde i modellen er mere nøjagtige."], ["Rolling shutter", "Skævvridning ved hurtig flyvning, fordi Air 3S har elektronisk lukker."]]},
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
    title: "Drone Studio – Guide", start: "Getting started", onsite: "On site", fieldtest: "Mapping test", keys: "Shortcuts", before: "Before the flight", after: "After the flight",
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
             "<b>Edit project…</b> at the top right changes name, address, date and customer – the project folder's name too.",
             "<b>Size of the program:</b> the gear (⚙) has a scale from 85 % to 200 % that scales the whole program. The change takes effect after a restart, and the program asks whether to restart now."]
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
      steps: ["Press <b>Import photos / video…</b> and point to the SD card or a folder. The app reads when each photo was taken and groups them into <b>sessions</b> (a new session starts after a pause of 3 hours – you can change that). Each session is a card with thumbnails and a <b>suggestion</b> of its kind (mapping, 3D, inspection or unclear). The suggestion never changes your photos, and you can correct it with <i>Change</i>.",
              "Tick the sessions that belong to the project, and choose whether the files are copied into the project or linked. When only some sessions are ticked they are copied. If the project holds several sessions, pick the one to show in the field above the list; the menu next to it lets you name it, change its kind and change the pause.",
              "To adjust a single photo: the <b>Light &amp; colour</b> button (the three-sliders icon) in the tool bar – on Photos &amp; Video next to the star, in the Workshop next to crop and blur – opens sliders for <b>exposure, contrast, highlights, shadows, saturation, warmth and sharpness</b> and a <b>tone curve</b> (drag the five points up or down). The picture follows at once. Double-click a slider or the curve to reset it, <i>Reset</i> resets everything. <i>Copy</i> takes the photo's look, <i>Paste</i> gives it to another photo, <i>Paste on session</i> to the whole session, and <i>Match session</i> gives the session's photos the same exposure and colour. The thumbnails in the list show the look. The picture follows while you drag; the file is never touched; the report and the export use the same. One drag is one undo. It does not work on thermal pictures or video.",
              "If photos of one session were exposed differently, use the menu next to the session field: <b>Match look</b> gives them the same exposure and colour (to the session's median photo, or to the photo you are looking at). Only two small numbers are stored per photo, the originals are never touched, and ◐ in the list shows which photos are matched. It works on ordinary JPEG photos; thermal pictures, video, DNG and mapping / 3D sessions are left out. The report and the export use the matched look. One undo takes the whole match back. When the picked photos in the report's photo section come from more than one session, they are split per session with the session's name and time (oldest first).",
              "Go through the photos: <b>→</b> = use, <b>←</b> = don't use. Space plays a video.",
              "<b>A long roof or a row of houses?</b> Take 2-4 photos from above that overlap by about a third. Mark them in the list (Ctrl or Shift + click) and press <b>Stitch</b> (two overlapping pictures in the tool bar). <i>Stitch automatically</i> finds the same places and blends the joins. If the roof is too even (roofing felt, identical tiles) and it fails, use <i>Mark points myself</i>: click the same place (a corner, a chimney, a screw) on two neighbouring photos – two places per pair are enough, three are better. The order in the dialog is left to right. The result is saved as a new photo in the project, and by default it becomes the overview picture with numbered pins. Look at the joins: with tilted photos a join can show a small jump. Take the photos roughly straight down and at the same height.",
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
             "<b>A blur can be changed.</b> Click a blur that is already there to move it, drag its edges and corners, or delete it (<i>Delete blur</i> or the Delete key – Delete removes only the blur, never the finding). Hold <b>Alt</b> and drag a corner to move just that corner: the blur then becomes a free four-sided shape, e.g. along a slanted edge. On photos exactly that shape is blurred; in a video the rectangle around it is blurred (a little more, never less).",
             "<b>A blur that follows the video:</b> pause the video where what is to be blurred can be seen clearly, press <i>Blur</i>, place the rectangle and press <b>Follow movement</b> (instead of OK). The program follows the scene around the blur forward and back through the video, and the blur moves with it, so it does not suddenly cover something you need to see. It works for things that stand still while the camera moves (a window, a neighbour's garden), not for people or cars. If the picture cannot be followed any further the blur stands still there and you are told where: draw a new blur from that spot. The blur is shown in the finished video and in the player; click it to change it (it then stops following until you press Follow again) or delete it.",
             "<b>The finding list warns</b> about what should be fixed before export: <i>no title</i>, <i>no pin on the front page</i>, <i>few pixels: soft in the report</i> (the cut-out has fewer than 1200 pixels from the original – loosen the crop or use a closer photo) and <i>severity and recommendation do not fit</i> (e.g. «Should be repaired» with the recommendation «followed at the next inspection»). The warnings follow as soon as you fix something.",
             "<b>New finding without a marker</b> (… menu) makes a finding for the whole surface. Place it on the overview and it gets a pin. <b>Merge</b> joins several findings into one: all markers are kept. The extra photos are at the end of the report, and the PDF shows at most four per finding (the rest are in the HTML report).",
             "A single picture from a video: draw a marker on the video and the picture at that moment is saved as a photo (with GPS when a .SRT file sits next to it).",
             "The … menu: <i>Move pins</i> on the overview, <i>Place on overview</i> and a second overview (e.g. the back of the roof).",
             "<b>Close-up + pin on the overview:</b> make the finding on the close-up (a box around the damage), choose <i>… → Place on overview</i> and click the spot on the overview photo. You stay on the overview and the finding's numbered pin is there now (the finding gets 📍 in the list). A click on the pin opens the finding and its close-up again. Delete any duplicate finding you made directly on the overview earlier – otherwise the spot has two numbers."]
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
              "Press <b>Export report</b> (top right or Ctrl+E). The report lands in the project's <i>export/report/latest</i>.",
              "<b>Show your work to new customers:</b> <i>Publish example website…</i> turns the report into a small website with a short front page (overview with pins, three lines, your contact details), the report itself and a PDF. "
              + "You write which address and customer the public sees (e.g. «Terraced house, Gentofte») and confirm that you may show the property. The customer's name, phone and e-mail never come along, and the site is marked <i>noindex</i> so Google does not list it. "
              + "<i>Make it here and look</i> makes the site in a folder and opens it without putting anything on the internet. <i>Make it and publish</i> uploads it to your GitHub repository. "
              + "The first time: make an empty public repository on github.com, turn on Pages (Settings → Pages → main, / root) and paste the address. Then send the link to carpenters and roofers. With a GoatCounter code you can see how many opened it."],
      tips: ["The PDF is made twice, so the table on the front page gets the page number of each finding.",
             "With <i>Auto-versioning</i> every export gets its own dated folder instead of replacing the previous one.",
             "The report goes building part by building part when photos are linked to building parts in the Workshop.",
             "The <b>front page</b> has the counts, <i>Look at first</i>, the condition per building part (all parts with findings; without a condition of your own it shows the worst finding) and the overview picture. Flight log, method, case details and the disclaimer are at the back.",
             "<b>Suggest</b> on the Project page writes the overall assessment and the method from the findings. An unchanged suggestion follows the findings in the report (the method is written again from the project) and the automatic overall assessment is not shown. If you edit the text it stays as you wrote it.",
             "The checklist also says when a finding has few pixels, has no pin on the front page, or severity and recommendation do not fit together."]
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
  fieldPage: {"title": "Mapping test", "reset": "Clear ticks", "done": "done", "lead": "How to test mapping and 3D on location, step by step. Tick as you go – your ticks are remembered on this device, so the page works on a phone.", "compareTitle": "WebODM or RealityScan?", "compare": [["Mapping (orthophoto, elevation model)", "WebODM is the industry standard and made for it. Start here.", "Good, but not its strongest side."], ["3D model of a building", "Good, but the mesh is often rougher.", "Typically better detail and texture, and faster with a strong NVIDIA card."], ["Price and setup", "Free, open source.", "Free below a revenue limit (check the terms), needs installing."]], "compareHead": ["", "WebODM", "RealityScan"], "compareNote": "The app imports both the same way, so you can run the same photos in both and compare.", "phases": [{"h": "1. The evening before", "items": ["Check that WebODM runs and opens in the browser (try a few photos).", "Check disk space: one job can take 10-30 GB.", "Create a test project, job type <i>Mapping / orthophoto</i>.", "<b>Mapping &amp; 3D → Guide → Mapping (2D) → Use in flight plan.</b> Draw an area of 50×50 to 80×80 m, height 60-80 m.", "Read the numbers in the flight plan (speed, photo count, flight time). At 50 MP there are at least 5 seconds between photos, so the speed is low.", "Export the route to the drone. Also make a 3D plan (<i>3D model of a building</i>) for the building.", "Batteries charged, SD cards empty."]}, {"h": "2. On location, before take-off", "items": ["Open area with some structure (building, path, edge) – not just uniform grass.", "Check the rules and airspace in the official drone maps. Keep line of sight, 120 m at most, and not over uninvolved people.", "Wind below about 8 m/s and even light (not alternating sun and clouds).", "Lay out 5-6 markers (chalk, tape, cones) spread over the area.", "Measure some distances between the markers with a tape and write them down. That is your answer key."]}, {"h": "3. Test 1: mapping (2D)", "items": ["Fly the route from the app, camera straight down.", "Do not change the speed during the flight.", "Write down: height, actual speed, photo count, flight time, battery used, wind."]}, {"h": "4. Test 2: 3D of a building", "items": ["Use the <i>3D model of a building</i> plan (double grid: nadir plus tilted).", "Optionally add an orbit around the building for corners and eaves. Keep away from wires and trees.", "Expect about twice the photos and more batteries."]}, {"h": "5. At home: check, process, import", "items": ["<b>Capture set:</b> import the photos, press <i>Analyse photos</i> and write the warnings down. Did they match what you know about the flight?", "Export the clean set (blurry photos left out).", "<b>WebODM:</b> create a project and upload the photos.", "Turn <b>dsm</b> on (<code>dsm = true</code>). Without it you get no heights or volume.", "For the first test: turn <code>fast-orthophoto</code> on so you do not wait for hours. Maybe also try the rolling-shutter settings for the Air 3S.", "When it is done: <b>Download Assets → All Assets</b> (gives <code>all.zip</code>).", "<b>Drone Studio → Orthophoto → Import WebODM zip</b> (or <i>Import result folder</i> if the zip is unpacked).", "Check that the orthophoto and elevation model are loaded and that the 3D files were found."]}, {"h": "6. Measure and make a report", "items": ["<b>Measure tab:</b> measure your tape distances and compare with the tape. The difference is your real relative accuracy.", "Measure an area or height you know.", "Export a report. Check the orthophoto, the elevation model and <i>Basis &amp; limitations</i>.", "Optional: run the same photos in RealityScan and compare the 3D model."]}], "notesTitle": "Write this down", "notes": [["Flight", "Height, speed, photo count, flight time, battery, wind"], ["Warnings", "What the app said, and whether it was right"], ["Speed", "What you flew, and what the warning estimated (the 8 m/s limit is a guess)"], ["WebODM", "Settings, time, whether the DSM came out, holes in the model"], ["Accuracy", "Tape measures against the app's measures, in cm"], ["Import", "Whether all files were found (otherwise: folder and file names)"]], "wordsTitle": "Words you will meet", "words": [["Overlap", "How much photos cover each other. Without enough, the software cannot match the pictures."], ["GSD", "How big a pixel is on the ground. Flying lower gives finer detail but more photos."], ["Orthophoto", "One large picture seen straight from above, stitched from many photos and corrected for the height of the terrain, so it is to scale: you can measure distances and areas on it, and it sits correctly on a map. An ordinary panorama is not corrected that way."], ["DSM", "Elevation model of the surface, including buildings and trees."], ["RTK / GCP", "Precise positioning. The Air 3S has no RTK, so without ground control points (GCP) the absolute position is good to a few metres; distances inside the model are more accurate."], ["Rolling shutter", "Skew in fast flight because the Air 3S has an electronic shutter."]]},
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
