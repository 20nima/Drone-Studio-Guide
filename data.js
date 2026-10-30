// Made by tools/guide/build_guide.py - do not edit by hand.
window.GUIDE_DATA = {
 "da": {
  "nav": {
   "project": "Projekt",
   "plan": "Flyveplan",
   "photos": "Foto & Video",
   "mark": "Værksted",
   "thermal": "Termografi",
   "map": "Mapping & 3D",
   "report": "Layout & Rapport"
  },
  "pages": {
   "project": [
    {
     "img": "shots/da/project.png",
     "w": 1275,
     "h": 1747,
     "sections": [
      {
       "id": "s1",
       "title": "Kunde",
       "tip": "Klik for at folde gruppen ud eller ind.",
       "rect": [
        9,
        49,
        415,
        547
       ]
      },
      {
       "id": "s2",
       "title": "Sagsoplysninger",
       "tip": "Klik for at folde gruppen ud eller ind.",
       "rect": [
        430,
        49,
        415,
        547
       ]
      },
      {
       "id": "s3",
       "title": "Din virksomhed",
       "tip": "Klik for at folde gruppen ud eller ind.",
       "rect": [
        851,
        49,
        415,
        547
       ]
      },
      {
       "id": "s4",
       "title": "Rapporttekst & branding",
       "tip": "Klik for at folde gruppen ud eller ind.",
       "rect": [
        9,
        992,
        1257,
        388
       ]
      },
      {
       "id": "s5",
       "title": "Ejendom",
       "tip": "Klik for at folde gruppen ud eller ind.",
       "rect": [
        9,
        602,
        1257,
        384
       ]
      },
      {
       "id": "s6",
       "title": "Flyvelog",
       "tip": "Klik for at folde gruppen ud eller ind.",
       "rect": [
        9,
        1386,
        1257,
        312
       ]
      }
     ],
     "controls": [
      {
       "id": "c1",
       "label": "",
       "tip": "Auto: bogstaver søges som firmanavn; et 8-cifret nummer prøves først som CVR-nummer, derefter som telefonnummer.\n\nPrivate kunder findes ikke i CVR: indtast deres oplysninger manuelt. Alt gemmes kun på denne computer.",
       "rect": [
        111,
        91,
        177,
        34
       ],
       "section": "s1"
      },
      {
       "id": "c2",
       "label": "🔍 Hent",
       "tip": "Slå kunden op i CVR (cvrapi.dk) ud fra det, rullemenuen står på: CVR-nummer, telefonnummer eller firmanavn. 50 gratis opslag om dagen.",
       "rect": [
        294,
        91,
        76,
        34
       ],
       "section": "s1"
      },
      {
       "id": "c3",
       "label": "",
       "tip": "Mere: slå op på virk.dk, gem kunde, brug som sagsadresse, fjern fra listen",
       "rect": [
        376,
        91,
        34,
        34
       ],
       "section": "s1"
      },
      {
       "id": "c4",
       "label": "Seneste kunder",
       "tip": "Kunder du har brugt før.",
       "rect": [
        23,
        178,
        387,
        32
       ],
       "section": "s1"
      },
      {
       "id": "c5",
       "label": "Kunde / firma",
       "tip": "Kundens navn.",
       "rect": [
        23,
        240,
        387,
        32
       ],
       "section": "s1"
      },
      {
       "id": "c6",
       "label": "CVR",
       "tip": "Kundens CVR-nummer.",
       "rect": [
        23,
        302,
        387,
        32
       ],
       "section": "s1"
      },
      {
       "id": "c7",
       "label": "Kundens adresse",
       "tip": "Kundens egen adresse.",
       "rect": [
        23,
        364,
        387,
        32
       ],
       "section": "s1"
      },
      {
       "id": "c8",
       "label": "Telefon",
       "tip": "Kundens telefonnummer.",
       "rect": [
        23,
        426,
        387,
        32
       ],
       "section": "s1"
      },
      {
       "id": "c9",
       "label": "E-mail",
       "tip": "Kundens e-mail.",
       "rect": [
        23,
        488,
        387,
        32
       ],
       "section": "s1"
      },
      {
       "id": "c10",
       "label": "Kontaktperson",
       "tip": "Kontaktperson hos kunden.",
       "rect": [
        23,
        550,
        387,
        32
       ],
       "section": "s1"
      },
      {
       "id": "c11",
       "label": "Sagsadresse",
       "tip": "Adressen på den inspicerede bygning eller det inspicerede område. Bruges i rapportens titel og filnavne.",
       "rect": [
        444,
        115,
        387,
        32
       ],
       "section": "s2"
      },
      {
       "id": "c12",
       "label": "Dato (EXIF)",
       "tip": "Dato for flyvningen.",
       "rect": [
        444,
        177,
        387,
        32
       ],
       "section": "s2"
      },
      {
       "id": "c13",
       "label": "Drone",
       "tip": "Dronemodel; udfyldes automatisk ud fra fotoene.",
       "rect": [
        444,
        239,
        387,
        32
       ],
       "section": "s2"
      },
      {
       "id": "c14",
       "label": "Vejr / forhold",
       "tip": "Vejret under flyvningen (vind, regn, lys). Vises i rapporten.",
       "rect": [
        444,
        301,
        303,
        34
       ],
       "section": "s2"
      },
      {
       "id": "c15",
       "label": "Hent vejr",
       "tip": "Udfyld vejret på flyvningens tidspunkt og sted (ud fra fotoenes tid og GPS) fra Open-Meteo. Gratis, kræver internet.",
       "rect": [
        753,
        301,
        78,
        34
       ],
       "section": "s2"
      },
      {
       "id": "c16",
       "label": "Jobskabelon",
       "tip": "Udfylder rapporttekst, flyveplan-standarder og layout. Felter du allerede har skrevet beholdes.",
       "rect": [
        444,
        365,
        311,
        34
       ],
       "section": "s2"
      },
      {
       "id": "c17",
       "label": "Anvend",
       "tip": "Udfylder rapporttekst, flyveplan-standarder og layout. Det du allerede har skrevet beholdes.",
       "rect": [
        761,
        365,
        70,
        34
       ],
       "section": "s2"
      },
      {
       "id": "c18",
       "label": "Profil",
       "tip": "Gem dine firmaoplysninger og logo som profil – så udfyldes de automatisk i alle nye projekter.",
       "rect": [
        865,
        115,
        347,
        34
       ],
       "section": "s3"
      },
      {
       "id": "c19",
       "label": "",
       "tip": "Mere: gem som profil, redigér profiler, vælg eller fjern logo",
       "rect": [
        1218,
        115,
        34,
        34
       ],
       "section": "s3"
      },
      {
       "id": "c20",
       "label": "Din virksomhed",
       "tip": "Dine egne firmaoplysninger og logo, vist i rapporten.",
       "rect": [
        865,
        299,
        387,
        32
       ],
       "section": "s3"
      },
      {
       "id": "c21",
       "label": "Inspektørens navn",
       "tip": "Navn på piloten/inspektøren, der underskriver rapporten.",
       "rect": [
        865,
        361,
        387,
        32
       ],
       "section": "s3"
      },
      {
       "id": "c22",
       "label": "Operatør-ID",
       "tip": "Dit droneoperatør-registreringsnummer.",
       "rect": [
        865,
        423,
        387,
        32
       ],
       "section": "s3"
      },
      {
       "id": "c23",
       "label": "Indledning / omfang (vises i rapporten)",
       "tip": "Kort samlet vurdering øverst i rapporten.",
       "rect": [
        23,
        1058,
        612,
        140
       ],
       "section": "s4"
      },
      {
       "id": "c24",
       "label": "Ekstra forbehold (vises under standardforbeholdet)",
       "tip": "Dine egne ekstra forbehold. Rapporten har altid standardforbeholdet (visuel droneinspektion, ikke en tilstandsrapport); denne tekst kommer under det.",
       "rect": [
        641,
        1058,
        611,
        140
       ],
       "section": "s4"
      },
      {
       "id": "c25",
       "label": "Foreslå tekst",
       "tip": "Skriv et udkast ud fra dine fund (antal, bygningsdele, alvorsgrader). Objektivt og kort; ret det bagefter.",
       "rect": [
        537,
        1204,
        98,
        36
       ],
       "section": "s4"
      },
      {
       "id": "c26",
       "label": "Beregn fra fotos",
       "tip": "Gruppér fotoene i flyvninger efter optagetid og aflæs start, varighed, højde og distance.",
       "rect": [
        23,
        1428,
        118,
        34
       ],
       "section": "s6"
      },
      {
       "id": "c27",
       "label": "",
       "tip": "Ryd flyveloggen",
       "rect": [
        147,
        1428,
        34,
        34
       ],
       "section": "s6"
      },
      {
       "id": "c28",
       "label": "Rediger projekt…",
       "tip": "Ret projektets navn, adresse, dato og kunde. Et nyt navn omdøber mappen.",
       "rect": [
        1151,
        0,
        124,
        34
       ],
       "section": ""
      }
     ]
    }
   ],
   "plan": [
    {
     "img": "shots/da/plan.png",
     "w": 1275,
     "h": 1227,
     "sections": [
      {
       "id": "s1",
       "title": "TAL",
       "tip": "Klik for at folde gruppen ud eller ind.",
       "rect": [
        485,
        1008,
        781,
        210
       ]
      },
      {
       "id": "s2",
       "title": "Rutetype",
       "tip": "Klik for at folde gruppen ud eller ind.",
       "rect": [
        18,
        18,
        442,
        117
       ]
      },
      {
       "id": "s3",
       "title": "Område der skal dækkes",
       "tip": "Klik for at folde gruppen ud eller ind.",
       "rect": [
        18,
        141,
        442,
        303
       ]
      },
      {
       "id": "s4",
       "title": "Flyvning: højde, kameravinkel, overlap, fart",
       "tip": "Klik for at folde gruppen ud eller ind.",
       "rect": [
        18,
        450,
        442,
        321
       ]
      },
      {
       "id": "s5",
       "title": "Kamera-indstillinger",
       "tip": "Klik for at folde gruppen ud eller ind.",
       "rect": [
        18,
        777,
        442,
        281
       ]
      },
      {
       "id": "s6",
       "title": "Avanceret",
       "tip": "Klik for at folde gruppen ud eller ind.",
       "rect": [
        18,
        1064,
        442,
        154
       ]
      }
     ],
     "controls": [
      {
       "id": "c1",
       "label": "",
       "tip": "Vælg\nVælg og redigér: træk i håndtagene for at flytte hjørner, flytte eller skalere hele området, flytte orbit-centrum eller trække i den orange prik for at ændre radius, og flytte væglinjen. Træk i tomt kort for at flytte det, musehjulet zoomer.",
       "rect": [
        488,
        12,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c2",
       "label": "",
       "tip": "Tegn område\nMarkér det område, rutegeneratoren skal dække (kortlægning og 3D-gitter). Det laver ingen waypoints i sig selv: tryk bagefter på Generér rute.",
       "rect": [
        522,
        12,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c3",
       "label": "",
       "tip": "Vægglinje\nKlik to gange for at tegne vægglinjen til en facadescanning.",
       "rect": [
        556,
        12,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c4",
       "label": "",
       "tip": "Orbit-centrum\nKlik for at sætte centrum for en orbit.",
       "rect": [
        590,
        12,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c5",
       "label": "",
       "tip": "POI\nKlik for at sætte et interessepunkt, kameraet skal kigge på.",
       "rect": [
        624,
        12,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c6",
       "label": "",
       "tip": "Waypoints\nTilføj, vælg og flyt enkelte waypoints i hånden.",
       "rect": [
        658,
        12,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c7",
       "label": "",
       "tip": "Lag\nVælg hvad der vises på kortet: område, rute, pile, numre, ortofoto med mere. Dit valg huskes.",
       "rect": [
        704,
        12,
        34,
        31
       ],
       "section": ""
      },
      {
       "id": "c8",
       "label": "",
       "tip": "Tilpas til plan\nZoom kortet ind på hele din plan.",
       "rect": [
        740,
        12,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c9",
       "label": "",
       "tip": "Guide\nTrin-for-trin guide til at planlægge en ortofoto-flyvning.",
       "rect": [
        1197,
        12,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c10",
       "label": "",
       "tip": "Waypoint-værktøjet: klik på kortet for at tilføje et punkt efter det valgte. Klik på et punkt for at vælge det, træk for at flytte det. Træk i spidsen af den blå pil for at dreje kameraet. Delete fjerner punktet.\n\nGrøn = start, blå = valgt, lilla = udenfor området. Pilene viser, hvor kameraet peger: hel streg = sat af dig, svag = følger ruten.\n\nOmråde-værktøjet: klik hjørner, dobbeltklik eller Enter afslutter, højreklik fjerner et hjørne. Træk hjørner med Flyt-værktøjet.",
       "rect": [
        1231,
        12,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c11",
       "label": "Kort",
       "tip": "Hvilken kortbaggrund der vises.",
       "rect": [
        747,
        49,
        257,
        32
       ],
       "section": ""
      },
      {
       "id": "c12",
       "label": "Offline (kun gemte fliser)",
       "tip": "Brug kun kortfliser, der allerede er gemt på denne computer.",
       "rect": [
        1010,
        56,
        256,
        18
       ],
       "section": ""
      },
      {
       "id": "c13",
       "label": "Søg",
       "tip": "Søg efter adressen og centrér kortet på den.",
       "rect": [
        1217,
        87,
        49,
        34
       ],
       "section": ""
      },
      {
       "id": "c14",
       "label": "▶ Generér rute",
       "tip": "Byg ruten ud fra dine indstillinger. Det erstatter en håndredigeret rute.",
       "rect": [
        1011,
        1050,
        241,
        34
       ],
       "section": "s1"
      },
      {
       "id": "c15",
       "label": "🚁 Eksport til DJI Fly (KMZ)…",
       "tip": "Eksport til DJI Fly: vælg fototilstand, fart og højdekorrektion, og gem eller installér så KMZ-filen.",
       "rect": [
        1011,
        1090,
        241,
        34
       ],
       "section": "s1"
      },
      {
       "id": "c16",
       "label": "💾 Andre formater (KML, GPX, CSV)…",
       "tip": "Gem ruten som KML, GPX, CSV eller GeoJSON til andre apps. Til DJI Fly brug den blå DJI Fly-knap.",
       "rect": [
        1011,
        1130,
        241,
        34
       ],
       "section": "s1"
      },
      {
       "id": "c17",
       "label": "🧪 Kontrollér en planlagt rute…",
       "tip": "Indlæs en rute planlagt et andet sted og kontrollér dens overlap og fotoafstand.",
       "rect": [
        1011,
        1170,
        241,
        34
       ],
       "section": "s1"
      },
      {
       "id": "c18",
       "label": "",
       "tip": "Type af flyvning: kortlægningsgitter, 3D dobbelt-gitter, orbit rundt om et objekt eller facadescanning.",
       "rect": [
        24,
        67,
        436,
        32
       ],
       "section": "s2"
      },
      {
       "id": "c19",
       "label": "Flyv på den anden side af vægglinjen",
       "tip": "Flyv på den anden side af den tegnede vægglinje.",
       "rect": [
        24,
        105,
        436,
        18
       ],
       "section": "s2"
      },
      {
       "id": "c20",
       "label": "Importér område (KML / KMZ / GeoJSON)…",
       "tip": "Indlæs et område fra en KML-, KMZ- eller GeoJSON-fil.",
       "rect": [
        24,
        214,
        436,
        34
       ],
       "section": "s3"
      },
      {
       "id": "c21",
       "label": "Brug fotoernes område + margin (m):",
       "tip": "Lav området ud fra hvor dine fotos er taget, plus en margen.",
       "rect": [
        24,
        254,
        360,
        34
       ],
       "section": "s3"
      },
      {
       "id": "c22",
       "label": "Brug rektangel",
       "tip": "Lav et rektangel ud fra centrum, bredde, længde og drejning.",
       "rect": [
        24,
        374,
        436,
        34
       ],
       "section": "s3"
      },
      {
       "id": "c23",
       "label": "Højde over jorden (m)",
       "tip": "Flyvehøjde over take-off-punktet. Lavere = skarpere detaljer, men flere fotos.",
       "rect": [
        24,
        523,
        215,
        32
       ],
       "section": "s4"
      },
      {
       "id": "c24",
       "label": "Gimbal-vinkel (°)",
       "tip": "Kameravinkel: -90 = lodret ned, 0 = vandret.",
       "rect": [
        245,
        523,
        215,
        32
       ],
       "section": "s4"
      },
      {
       "id": "c25",
       "label": "Overlap fremad (%)",
       "tip": "Overlap mellem efterfølgende fotos langs en linje (%). 80 er normalt til kortlægning.",
       "rect": [
        24,
        585,
        215,
        32
       ],
       "section": "s4"
      },
      {
       "id": "c26",
       "label": "Sideoverlap (%)",
       "tip": "Overlap mellem nabolinjer (%). 70 er normalt til kortlægning.",
       "rect": [
        245,
        585,
        215,
        32
       ],
       "section": "s4"
      },
      {
       "id": "c27",
       "label": "Tidsinterval mellem fotos (s)",
       "tip": "Sekunder mellem fotos (tidsinterval). Sammen med farten giver det fotoafstanden.",
       "rect": [
        24,
        647,
        215,
        32
       ],
       "section": "s4"
      },
      {
       "id": "c28",
       "label": "Flyveretning (° eller auto)",
       "tip": "Linjernes retning i grader, eller 'auto' for den korteste rute.",
       "rect": [
        245,
        647,
        215,
        32
       ],
       "section": "s4"
      },
      {
       "id": "c29",
       "label": "Planlagt hastighed (m/s) – bruges af rutekontrollen",
       "tip": "Flyvehastighed i m/s; lad stå tomt for at bruge den fart, der passer til intervallet.",
       "rect": [
        24,
        727,
        215,
        32
       ],
       "section": "s4"
      },
      {
       "id": "c30",
       "label": "Kamera",
       "tip": "Hvilket kamera og hvilken opløsning du fotograferer med. Det afgør, hvor meget jord hvert foto dækker.",
       "rect": [
        24,
        850,
        436,
        32
       ],
       "section": "s5"
      },
      {
       "id": "c31",
       "label": "Brændvidde (35 mm-ækvivalent)",
       "tip": "Kameraets brændvidde omregnet til 35 mm.",
       "rect": [
        24,
        912,
        215,
        32
       ],
       "section": "s5"
      },
      {
       "id": "c32",
       "label": "Billedbredde (px)",
       "tip": "Fotoets bredde i pixel.",
       "rect": [
        245,
        912,
        215,
        32
       ],
       "section": "s5"
      },
      {
       "id": "c33",
       "label": "Billedhøjde (px)",
       "tip": "Fotoets højde i pixel.",
       "rect": [
        24,
        974,
        215,
        32
       ],
       "section": "s5"
      },
      {
       "id": "c34",
       "label": "Korteste interval (s)",
       "tip": "Korteste tid mellem to fotos, kameraet kan klare.",
       "rect": [
        245,
        974,
        215,
        32
       ],
       "section": "s5"
      },
      {
       "id": "c35",
       "label": "Aflæs fra det aktuelle foto",
       "tip": "Aflæs brændvidde og størrelse fra det aktuelle foto.",
       "rect": [
        24,
        1012,
        436,
        34
       ],
       "section": "s5"
      },
      {
       "id": "c36",
       "label": "Linjeforlængelse i enderne (m; auto = et halvt foto)",
       "tip": "Hvor langt hver linje løber forbi områdets kant. 0 holder dronen inden for det område, du tegnede (auto = et halvt foto).",
       "rect": [
        24,
        1155,
        230,
        32
       ],
       "section": "s6"
      },
      {
       "id": "c37",
       "label": "Maks. waypoints pr. flyvning",
       "tip": "Maks. waypoints pr. mission. Længere ruter deles i flere missioner.",
       "rect": [
        260,
        1155,
        200,
        32
       ],
       "section": "s6"
      },
      {
       "id": "c38",
       "label": "Ét waypoint pr. foto (ellers kun linjeender – brug tidsinterval)",
       "tip": "Sæt et waypoint ved hver fotoposition i stedet for kun ved linjeenderne. Nødvendigt til stop-og-tag-foto.",
       "rect": [
        24,
        1193,
        436,
        18
       ],
       "section": "s6"
      }
     ]
    }
   ],
   "photos": [
    {
     "img": "shots/da/photos.png",
     "w": 1275,
     "h": 812,
     "sections": [
      {
       "id": "s1",
       "title": "Rapport",
       "tip": "Klik for at folde gruppen ud eller ind.",
       "rect": [
        935,
        46,
        340,
        211
       ]
      },
      {
       "id": "s2",
       "title": "Fil",
       "tip": "Klik for at folde gruppen ud eller ind.",
       "rect": [
        935,
        261,
        340,
        361
       ]
      },
      {
       "id": "s3",
       "title": "Kvalitet",
       "tip": "Klik for at folde gruppen ud eller ind.",
       "rect": [
        935,
        626,
        340,
        141
       ]
      }
     ],
     "controls": [
      {
       "id": "c1",
       "label": "✔ Brug",
       "tip": "✔ Brug  (→)",
       "rect": [
        938,
        6,
        110,
        28
       ],
       "section": ""
      },
      {
       "id": "c2",
       "label": "✖ Brug ikke",
       "tip": "✖ Brug ikke  (←)",
       "rect": [
        1050,
        6,
        110,
        28
       ],
       "section": ""
      },
      {
       "id": "c3",
       "label": "Ubesluttet",
       "tip": "Fjern valg",
       "rect": [
        1162,
        6,
        110,
        28
       ],
       "section": ""
      },
      {
       "id": "c4",
       "label": "Note til rapporten",
       "tip": "En kort note, der trykkes under fotoet i rapporten.",
       "rect": [
        941,
        119,
        334,
        64
       ],
       "section": "s1"
      },
      {
       "id": "c5",
       "label": "Bygningsdel, som fotoet viser",
       "tip": "Vælg en bygningsdel eller skriv dit eget navn (fx 'Tagflade nord'). Et navn, du skriver, bliver tilbudt i alle projekter fremover.\nRapporten gennemgår bygningen del for del: hver del får sin tilstand, sin tekst og sine fotos og derefter sine fund.",
       "rect": [
        941,
        213,
        334,
        32
       ],
       "section": "s1"
      },
      {
       "id": "c6",
       "label": "",
       "tip": "Brug ikke  (←)\nUdelad denne fra rapporten (venstre piletast). Den bliver rød i listen og bliver i projektet som arkiv.",
       "rect": [
        289,
        6,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c7",
       "label": "",
       "tip": "Brug  (→)\nTag dette foto eller denne video med i kunderapporten (højre piletast). Den bliver grøn i listen.",
       "rect": [
        323,
        6,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c8",
       "label": "",
       "tip": "Brug dette foto som oversigt\nBrug dette foto som oversigtsbillede øverst i rapporten.",
       "rect": [
        369,
        6,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c9",
       "label": "",
       "tip": "Før / efter…\nPar et foto fra et tidligere besøg med et nyt; rapporten viser dem med en skyder.",
       "rect": [
        403,
        6,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c10",
       "label": "",
       "tip": "Sæt fotos sammen: markér 2-8 fotos i listen (Ctrl / Skift + klik) og saml dem til ét overblikbillede",
       "rect": [
        437,
        6,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c11",
       "label": "",
       "tip": "Lys & farve: eksponering, kontrast, farvemætning, varme, skarphed",
       "rect": [
        471,
        6,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c12",
       "label": "Importér fotos / video…",
       "tip": "Hent fotos og video ind i projektet: kopiér dem ind, eller peg på originalerne.",
       "rect": [
        0,
        0,
        240,
        40
       ],
       "section": ""
      },
      {
       "id": "c13",
       "label": "",
       "tip": "Mere: kopiér filer ind i projektet, billeder fra video, foreslå slørede fotos, brug alle viste",
       "rect": [
        246,
        3,
        34,
        34
       ],
       "section": ""
      },
      {
       "id": "c14",
       "label": "",
       "tip": "7 udvalgt · 27 fravalgt · 1 ubesluttet af 35",
       "rect": [
        143,
        46,
        137,
        40
       ],
       "section": ""
      }
     ]
    }
   ],
   "mark": [
    {
     "img": "shots/da/mark.png",
     "w": 1275,
     "h": 812,
     "sections": [
      {
       "id": "s1",
       "title": "Fund",
       "tip": "Klik for at folde gruppen ud eller ind.",
       "rect": [
        875,
        293,
        386,
        323
       ]
      },
      {
       "id": "s2",
       "title": "Beskrivelse og bemærkning",
       "tip": "Klik for at folde gruppen ud eller ind.",
       "rect": [
        875,
        622,
        386,
        190
       ]
      }
     ],
     "controls": [
      {
       "id": "c1",
       "label": "Bygningsdel",
       "tip": "Hvilken del af bygningen fundet sidder på (Skorsten, Tagflade, Rygning …). Rapporten kan gruppere fund efter den. Du kan skrive din egen, fx ‘Skorsten 2’.",
       "rect": [
        957,
        342,
        304,
        32
       ],
       "section": "s1"
      },
      {
       "id": "c2",
       "label": "Skade",
       "tip": "De almindelige skader for bygningsdelen ovenfor. Vælg en, så udfyldes titel, observation, betydning, anbefaling og alvor; Omfang nedenfor ændrer ordlyd, anbefaling og alvor. Uden en kendt bygningsdel følger listen kategorien. Alt kan rettes bagefter (Ctrl+Z fortryder).",
       "rect": [
        957,
        380,
        304,
        32
       ],
       "section": "s1"
      },
      {
       "id": "c3",
       "label": "Enkelte steder",
       "tip": "Enkelte steder, tidlige tegn. Typisk alvor 'Mindre'.",
       "rect": [
        960,
        421,
        110,
        28
       ],
       "section": "s1"
      },
      {
       "id": "c4",
       "label": "Flere steder",
       "tip": "Flere steder. Typisk 'Væsentlig'.",
       "rect": [
        1072,
        421,
        97,
        28
       ],
       "section": "s1"
      },
      {
       "id": "c5",
       "label": "Store dele",
       "tip": "I større omfang. Ofte 'Væsentlig' eller 'Kritisk'.",
       "rect": [
        1171,
        421,
        87,
        28
       ],
       "section": "s1"
      },
      {
       "id": "c6",
       "label": "Titel",
       "tip": "Fundets navn: overskriften på dets side i rapporten og i tabellen på forsiden, fx 'Revnet rygningssten'. Selve beskrivelsen af skaden skriver du under Observation.",
       "rect": [
        957,
        458,
        304,
        32
       ],
       "section": "s1"
      },
      {
       "id": "c7",
       "label": "Kategori",
       "tip": "Hvilken slags fund det er (mos, revnet tagsten, inddækning ...). Bygningsdelen vælges nedenfor.",
       "rect": [
        957,
        496,
        304,
        32
       ],
       "section": "s1"
      },
      {
       "id": "c8",
       "label": "Alvor",
       "tip": "Kritisk: Synlig skade, som ud fra det sete kan have væsentlig betydning for bygningen, hvis forholdet består.\nVæsentlig: Synlig skade eller slid, som kan udvikle sig over tid.\nMindre: Et mindre forhold uden umiddelbar påvirkning set.\nOK / Notat: I orden, eller en neutral note til dokumentationen.",
       "rect": [
        957,
        534,
        304,
        32
       ],
       "section": "s1"
      },
      {
       "id": "c9",
       "label": "Observation",
       "tip": "Beskrivelse til kunden.",
       "rect": [
        960,
        671,
        301,
        70
       ],
       "section": "s2"
      },
      {
       "id": "c10",
       "label": "",
       "tip": "Ny markering\nTilføj en markering midt i fotoet med det valgte værktøj.",
       "rect": [
        878,
        6,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c11",
       "label": "",
       "tip": "AI-forslag…\nLad en AI kigge på fotos og foreslå mulige skader. Du godkender hvert forslag; intet tilføjes automatisk.",
       "rect": [
        912,
        6,
        44,
        28
       ],
       "section": ""
      },
      {
       "id": "c12",
       "label": "",
       "tip": "Ret listen: duplikér, slet, flyt, sortér, slå sammen … (også ved højreklik i listen)",
       "rect": [
        965,
        3,
        34,
        34
       ],
       "section": ""
      },
      {
       "id": "c13",
       "label": "",
       "tip": "Vælg / flyt\nVælg og flyt markeringer.",
       "rect": [
        289,
        6,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c14",
       "label": "",
       "tip": "Ring\nTegn en cirkel om et sted: klik i midten og træk ud.",
       "rect": [
        323,
        6,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c15",
       "label": "",
       "tip": "Boks\nTegn et rektangel: træk fra hjørne til hjørne. Drej det med den runde knap over det (Shift: trin på 15°), så det ligger langs en rygning eller revne.",
       "rect": [
        357,
        6,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c16",
       "label": "",
       "tip": "Pil\nTegn en pil, der peger på en detalje.",
       "rect": [
        391,
        6,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c17",
       "label": "",
       "tip": "Pin\nSæt en nål på ét enkelt sted.",
       "rect": [
        425,
        6,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c18",
       "label": "",
       "tip": "Lup\nLup: klik på en detalje for at vise den forstørret på fotoet (en lille cirkel, en streg og en stor cirkel). Et hjælpemiddel, ikke et fund – den vises i rapporten, hvor hele fotoet vises (oversigt, bygningsdele, galleri).",
       "rect": [
        459,
        6,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c19",
       "label": "",
       "tip": "Beskær\nBeskær: der kommer et rektangel på billedet. Træk i kanterne, og tryk OK. Kun den del bruges i rapporten; filen ændres ikke.",
       "rect": [
        505,
        6,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c20",
       "label": "",
       "tip": "Slør\nSlør et område (fx en nabos vindue): der kommer et rektangel; placer det, og tryk OK. Hold Alt nede og træk i et hjørne for kun at flytte det hjørne (en fri firkant). Klik på en sløring, der allerede er der, for at rette eller slette den. På en video får knappen Følg bevægelse sløringen til at følge billedet, mens kameraet flytter sig. Tryk igen for flere områder.",
       "rect": [
        539,
        6,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c21",
       "label": "",
       "tip": "Lys & farve: eksponering, kontrast, farvemætning, varme, skarphed",
       "rect": [
        573,
        6,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c22",
       "label": "",
       "tip": "Fjern beskær / slør\nFjern beskæringen eller den seneste sløring fra dette foto / denne video igen.",
       "rect": [
        607,
        6,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c23",
       "label": "",
       "tip": "Brug dette foto som oversigt\nBrug dette foto som oversigtsbillede øverst i rapporten.",
       "rect": [
        653,
        6,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c24",
       "label": "Kun udvalgte fotos",
       "tip": "Vis kun de fotos, du har valgt til rapporten.",
       "rect": [
        0,
        11,
        280,
        18
       ],
       "section": ""
      }
     ]
    }
   ],
   "thermal": [
    {
     "img": "shots/da/thermal.png",
     "w": 1275,
     "h": 812,
     "sections": [],
     "controls": [
      {
       "id": "c1",
       "label": "📂 Termo-mappe…",
       "tip": "Tilføj alle termobilleder fra en mappe.",
       "rect": [
        502,
        347,
        138,
        34
       ],
       "section": ""
      },
      {
       "id": "c2",
       "label": "＋ Tilføj billeder…",
       "tip": "Tilføj enkelte termobilleder.",
       "rect": [
        646,
        347,
        127,
        34
       ],
       "section": ""
      }
     ]
    }
   ],
   "map": [
    {
     "img": "shots/da/map_1.png",
     "w": 1275,
     "h": 812,
     "sections": [
      {
       "id": "s1",
       "title": "Guide",
       "tip": "",
       "rect": [
        9,
        40,
        495,
        650
       ]
      }
     ],
     "controls": [
      {
       "id": "c1",
       "label": "Brug i flyveplan",
       "tip": "Sætter rutetype og overlap til dette job og åbner flyveplanen. Højde, fart og kamera forbliver, som du har sat dem.",
       "rect": [
        23,
        582,
        115,
        34
       ],
       "section": "s1"
      }
     ],
     "tab": "Guide"
    },
    {
     "img": "shots/da/map_2.png",
     "w": 1275,
     "h": 812,
     "sections": [
      {
       "id": "s1",
       "title": "Optagesæt",
       "tip": "Klik for at folde gruppen ud eller ind.",
       "rect": [
        9,
        40,
        560,
        763
       ]
      }
     ],
     "controls": [
      {
       "id": "c1",
       "label": "🔍 Analysér fotos",
       "tip": "Tjek skarphed og dækning af alle fotos.",
       "rect": [
        23,
        82,
        129,
        34
       ],
       "section": "s1"
      },
      {
       "id": "c2",
       "label": "Slørgrænse %",
       "tip": "Fotos, der er mindre skarpe end denne procent af seriens median-skarphed, markeres som slørede (standard 50).",
       "rect": [
        246,
        82,
        60,
        32
       ],
       "section": "s1"
      },
      {
       "id": "c3",
       "label": "Udelad slørede fotos",
       "tip": "Udelad slørede fotos fra det eksporterede fotosæt.",
       "rect": [
        23,
        385,
        532,
        18
       ],
       "section": "s1"
      },
      {
       "id": "c4",
       "label": "Kopiér fotofilerne",
       "tip": "Kopiér fotofilerne ind i eksportmappen (ellers kun positionslisten).",
       "rect": [
        23,
        409,
        532,
        18
       ],
       "section": "s1"
      },
      {
       "id": "c5",
       "label": "📦 Eksportér optagesæt…",
       "tip": "Gem de gode fotos plus en positionsliste til fotogrammetriprogrammet.",
       "rect": [
        23,
        433,
        532,
        34
       ],
       "section": "s1"
      }
     ],
     "tab": "Optagesæt"
    },
    {
     "img": "shots/da/map_3.png",
     "w": 1275,
     "h": 812,
     "sections": [],
     "controls": [
      {
       "id": "c1",
       "label": "📂 Importér ortofoto (GeoTIFF)…",
       "tip": "Indlæs et georefereret ortofoto (GeoTIFF), fx odm_orthophoto.tif fra WebODM.",
       "rect": [
        332,
        366,
        216,
        34
       ],
       "section": ""
      },
      {
       "id": "c2",
       "label": "📥 Importér resultatmappe…",
       "tip": "Vælg mappen med et processeringsresultat (OpenDroneMap / WebODM, RealityScan ...): ortofoto, højdemodel og 3D-filer findes automatisk.",
       "rect": [
        554,
        366,
        194,
        34
       ],
       "section": ""
      },
      {
       "id": "c3",
       "label": "📥 Importér WebODM-zip…",
       "tip": "Vælg all.zip fra WebODM (Download Assets, All Assets). Den pakkes ud ved siden af zip-filen, og filerne findes automatisk.",
       "rect": [
        754,
        366,
        190,
        34
       ],
       "section": ""
      }
     ],
     "tab": "Ortofoto"
    },
    {
     "img": "shots/da/map_4.png",
     "w": 1275,
     "h": 812,
     "sections": [],
     "controls": [
      {
       "id": "c1",
       "label": "📂 Importér ortofoto (GeoTIFF)…",
       "tip": "Indlæs et georefereret ortofoto (GeoTIFF), fx odm_orthophoto.tif fra WebODM.",
       "rect": [
        530,
        368,
        216,
        34
       ],
       "section": ""
      }
     ],
     "tab": "Måle"
    }
   ],
   "report": [
    {
     "img": "shots/da/report.png",
     "w": 1265,
     "h": 887,
     "sections": [
      {
       "id": "s1",
       "title": "Eksportindstillinger",
       "tip": "Klik for at folde gruppen ud eller ind.",
       "rect": [
        838,
        9,
        418,
        869
       ]
      },
      {
       "id": "s2",
       "title": "Layout",
       "tip": "RAPPORTLAYOUT – hvordan observationerne opstilles i HTML- og PDF-rapporten",
       "rect": [
        287,
        9,
        545,
        869
       ]
      },
      {
       "id": "s3",
       "title": "Tjekliste før eksport",
       "tip": "Klik for at folde gruppen ud eller ind.",
       "rect": [
        9,
        9,
        272,
        869
       ]
      }
     ],
     "controls": [
      {
       "id": "c1",
       "label": "Rapportsprog",
       "tip": "Rapportens sprog.",
       "rect": [
        854,
        178,
        378,
        32
       ],
       "section": "s1"
      },
      {
       "id": "c2",
       "label": "Lav også en PDF",
       "tip": "Opret også en PDF. Bruger den installerede Edge eller Chrome.",
       "rect": [
        854,
        218,
        378,
        18
       ],
       "section": "s1"
      },
      {
       "id": "c3",
       "label": "Kopiér udvalgte originalfotos",
       "tip": "Kopiér de udvalgte originaler med i eksportmappen",
       "rect": [
        854,
        244,
        378,
        18
       ],
       "section": "s1"
      },
      {
       "id": "c4",
       "label": "Gem hver eksport i sin egen mappe",
       "tip": "Auto-versionering (gem hver eksport i sin egen daterede mappe)",
       "rect": [
        854,
        270,
        378,
        18
       ],
       "section": "s1"
      },
      {
       "id": "c5",
       "label": "Flyvelog",
       "tip": "Medtag flyvelog",
       "rect": [
        854,
        329,
        378,
        18
       ],
       "section": "s1"
      },
      {
       "id": "c6",
       "label": "Liste over fotopositioner",
       "tip": "Medtag listen over fotopositioner",
       "rect": [
        854,
        355,
        378,
        18
       ],
       "section": "s1"
      },
      {
       "id": "c7",
       "label": "Bemærkning i oversigtstabellen",
       "tip": "Vis bemærkningen i oversigtstabellen",
       "rect": [
        854,
        381,
        378,
        18
       ],
       "section": "s1"
      },
      {
       "id": "c8",
       "label": "‘AI-assisteret’-mærke på fund",
       "tip": "Vis ‘AI-assisteret’ på hvert fund",
       "rect": [
        854,
        407,
        378,
        18
       ],
       "section": "s1"
      },
      {
       "id": "c9",
       "label": "1080p · 30 fps (anbefalet)",
       "tip": "Rapport-video 1080p 30 fps (lille – anbefalet)",
       "rect": [
        854,
        466,
        378,
        18
       ],
       "section": "s1"
      },
      {
       "id": "c10",
       "label": "1080p · 60 fps",
       "tip": "Rapport-video 1080p 60 fps (jævn bevægelse)",
       "rect": [
        854,
        492,
        378,
        18
       ],
       "section": "s1"
      },
      {
       "id": "c11",
       "label": "4K · 60 fps (stor, langsom)",
       "tip": "Rapport-video 4K 60 fps (stor, tager længere tid)",
       "rect": [
        854,
        518,
        378,
        18
       ],
       "section": "s1"
      },
      {
       "id": "c12",
       "label": "Medtag originalvideoer",
       "tip": "Medtag også de originale videoer (kan fylde meget)",
       "rect": [
        854,
        544,
        378,
        18
       ],
       "section": "s1"
      },
      {
       "id": "c13",
       "label": "Også enkeltvideoer (ved storyboard)",
       "tip": "Vis også de enkelte videoer (når der er et storyboard)",
       "rect": [
        854,
        570,
        378,
        18
       ],
       "section": "s1"
      },
      {
       "id": "c14",
       "label": "Eksportér rapport",
       "tip": "Laver HTML-rapporten (og en PDF, hvis ‘Lav også en PDF’ er sat).",
       "rect": [
        854,
        629,
        378,
        34
       ],
       "section": "s1"
      },
      {
       "id": "c15",
       "label": "Forhåndsvis",
       "tip": "🔍 Forhåndsvis i browser",
       "rect": [
        854,
        671,
        185,
        34
       ],
       "section": "s1"
      },
      {
       "id": "c16",
       "label": "Rapport + PDF",
       "tip": "Laver HTML-rapporten og en PDF, uanset ‘Lav også en PDF’.",
       "rect": [
        1047,
        671,
        185,
        34
       ],
       "section": "s1"
      },
      {
       "id": "c17",
       "label": "Eksportér anonymiseret rapport (HTML + PDF)",
       "tip": "En ekstra eksport af hele rapporten (HTML og PDF) i export/report/anonymous: kundens navn, adresse, telefon og e-mail erstattet, ansigter og nummerplader sløret, ingen positioner, flyvelog, projektfil eller originale fotos.",
       "rect": [
        854,
        713,
        378,
        34
       ],
       "section": "s1"
      },
      {
       "id": "c18",
       "label": "Til Blender…",
       "tip": "Kameraer fra fotoene, fund som markører og ortofotoet som plan, med et færdigt importscript.",
       "rect": [
        854,
        814,
        185,
        34
       ],
       "section": "s1"
      },
      {
       "id": "c19",
       "label": "Publicér eksempel…",
       "tip": "Lav denne rapport til en lille hjemmeside (forside + rapport + PDF), du kan sende som link og hoste gratis på GitHub Pages. Til at vise dit arbejde til nye kunder: et link i stedet for en vedhæftet fil.",
       "rect": [
        1047,
        814,
        185,
        34
       ],
       "section": "s1"
      },
      {
       "id": "c20",
       "label": "Standardrækkefølge i rapporten",
       "tip": "Rækkefølgen af fund i rapporten.",
       "rect": [
        423,
        593,
        290,
        32
       ],
       "section": "s2"
      },
      {
       "id": "c21",
       "label": "🔍 Forhåndsvis i browser",
       "tip": "Åbn et hurtigt udkast af rapporten i din browser.",
       "rect": [
        301,
        635,
        172,
        34
       ],
       "section": "s2"
      }
     ]
    }
   ]
  }
 },
 "en": {
  "nav": {
   "project": "Project",
   "plan": "Flight plan",
   "photos": "Photos & Video",
   "mark": "Workshop",
   "thermal": "Thermography",
   "map": "Mapping & 3D",
   "report": "Layout & Report"
  },
  "pages": {
   "project": [
    {
     "img": "shots/en/project.png",
     "w": 1275,
     "h": 1747,
     "sections": [
      {
       "id": "s1",
       "title": "Customer",
       "tip": "Click to fold this group open or closed.",
       "rect": [
        9,
        49,
        415,
        547
       ]
      },
      {
       "id": "s2",
       "title": "Case details",
       "tip": "Click to fold this group open or closed.",
       "rect": [
        430,
        49,
        415,
        547
       ]
      },
      {
       "id": "s3",
       "title": "Your company",
       "tip": "Click to fold this group open or closed.",
       "rect": [
        851,
        49,
        415,
        547
       ]
      },
      {
       "id": "s4",
       "title": "Report text & branding",
       "tip": "Click to fold this group open or closed.",
       "rect": [
        9,
        992,
        1257,
        388
       ]
      },
      {
       "id": "s5",
       "title": "Property",
       "tip": "Click to fold this group open or closed.",
       "rect": [
        9,
        602,
        1257,
        384
       ]
      },
      {
       "id": "s6",
       "title": "Flight log",
       "tip": "Click to fold this group open or closed.",
       "rect": [
        9,
        1386,
        1257,
        312
       ]
      }
     ],
     "controls": [
      {
       "id": "c1",
       "label": "",
       "tip": "Auto: letters are searched as a company name; an 8-digit number is tried as a CVR number first, then as a phone number.\n\nPrivate customers are not in the CVR register: type their details in manually. Everything is saved only on this computer.",
       "rect": [
        106,
        91,
        179,
        34
       ],
       "section": "s1"
      },
      {
       "id": "c2",
       "label": "🔍 Fetch",
       "tip": "Look the customer up in CVR (cvrapi.dk) by what the drop-down is set to: CVR number, phone number or company name. 50 free lookups per day.",
       "rect": [
        291,
        91,
        79,
        34
       ],
       "section": "s1"
      },
      {
       "id": "c3",
       "label": "",
       "tip": "More: look up on virk.dk, save customer, use as case address, remove from list",
       "rect": [
        376,
        91,
        34,
        34
       ],
       "section": "s1"
      },
      {
       "id": "c4",
       "label": "Recent customers",
       "tip": "Customers you used before.",
       "rect": [
        23,
        178,
        387,
        32
       ],
       "section": "s1"
      },
      {
       "id": "c5",
       "label": "Client / company",
       "tip": "Name of the customer.",
       "rect": [
        23,
        240,
        387,
        32
       ],
       "section": "s1"
      },
      {
       "id": "c6",
       "label": "CVR",
       "tip": "The customer's CVR number.",
       "rect": [
        23,
        302,
        387,
        32
       ],
       "section": "s1"
      },
      {
       "id": "c7",
       "label": "Customer address",
       "tip": "The customer's own address.",
       "rect": [
        23,
        364,
        387,
        32
       ],
       "section": "s1"
      },
      {
       "id": "c8",
       "label": "Phone",
       "tip": "Customer phone number.",
       "rect": [
        23,
        426,
        387,
        32
       ],
       "section": "s1"
      },
      {
       "id": "c9",
       "label": "E-mail",
       "tip": "Customer e-mail.",
       "rect": [
        23,
        488,
        387,
        32
       ],
       "section": "s1"
      },
      {
       "id": "c10",
       "label": "Contact person",
       "tip": "Contact person at the customer.",
       "rect": [
        23,
        550,
        387,
        32
       ],
       "section": "s1"
      },
      {
       "id": "c11",
       "label": "Case address",
       "tip": "Address of the inspected building or area. It is used in the report title and file names.",
       "rect": [
        444,
        115,
        387,
        32
       ],
       "section": "s2"
      },
      {
       "id": "c12",
       "label": "Date (EXIF)",
       "tip": "Date of the flight.",
       "rect": [
        444,
        177,
        387,
        32
       ],
       "section": "s2"
      },
      {
       "id": "c13",
       "label": "Drone",
       "tip": "Drone model; filled in automatically from the photos.",
       "rect": [
        444,
        239,
        387,
        32
       ],
       "section": "s2"
      },
      {
       "id": "c14",
       "label": "Weather / conditions",
       "tip": "Weather during the flight (wind, rain, light). Shown in the report.",
       "rect": [
        444,
        301,
        274,
        34
       ],
       "section": "s2"
      },
      {
       "id": "c15",
       "label": "Fetch weather",
       "tip": "Fill in the weather at the time and place of the flight (from the photos' time and GPS), from Open-Meteo. Free, needs internet.",
       "rect": [
        724,
        301,
        107,
        34
       ],
       "section": "s2"
      },
      {
       "id": "c16",
       "label": "Job template",
       "tip": "Fills the report text, flight-plan defaults and layout. Fields you already wrote are kept.",
       "rect": [
        444,
        365,
        321,
        34
       ],
       "section": "s2"
      },
      {
       "id": "c17",
       "label": "Apply",
       "tip": "Fills report text, flight-plan defaults and layout. What you already wrote is kept.",
       "rect": [
        771,
        365,
        60,
        34
       ],
       "section": "s2"
      },
      {
       "id": "c18",
       "label": "Profile",
       "tip": "Save your company details and logo as a profile – they are then filled in automatically in every new project.",
       "rect": [
        865,
        115,
        347,
        34
       ],
       "section": "s3"
      },
      {
       "id": "c19",
       "label": "",
       "tip": "More: save as profile, edit profiles, choose or remove the logo",
       "rect": [
        1218,
        115,
        34,
        34
       ],
       "section": "s3"
      },
      {
       "id": "c20",
       "label": "Your company",
       "tip": "Your own company details and logo, shown in the report.",
       "rect": [
        865,
        299,
        387,
        32
       ],
       "section": "s3"
      },
      {
       "id": "c21",
       "label": "Inspector name",
       "tip": "Name of the pilot / inspector who signs the report.",
       "rect": [
        865,
        361,
        387,
        32
       ],
       "section": "s3"
      },
      {
       "id": "c22",
       "label": "Operator ID",
       "tip": "Your drone operator registration number (Droneregistrering).",
       "rect": [
        865,
        423,
        387,
        32
       ],
       "section": "s3"
      },
      {
       "id": "c23",
       "label": "Introduction / scope (shown in report)",
       "tip": "Short overall assessment at the top of the report.",
       "rect": [
        23,
        1058,
        612,
        140
       ],
       "section": "s4"
      },
      {
       "id": "c24",
       "label": "Extra disclaimer (shown under the standard disclaimer)",
       "tip": "Your own extra reservations. The report always prints the standard disclaimer (visual drone inspection, not a building survey); this text comes under it.",
       "rect": [
        641,
        1058,
        611,
        140
       ],
       "section": "s4"
      },
      {
       "id": "c25",
       "label": "Suggest text",
       "tip": "Write a draft from your findings (counts, building parts, severities). Objective and short; edit it afterwards.",
       "rect": [
        537,
        1204,
        98,
        36
       ],
       "section": "s4"
      },
      {
       "id": "c26",
       "label": "Calculate from photos",
       "tip": "Group the photos into flights by capture time and read start, duration, height and distance.",
       "rect": [
        23,
        1428,
        153,
        34
       ],
       "section": "s6"
      },
      {
       "id": "c27",
       "label": "",
       "tip": "Clear the flight log",
       "rect": [
        182,
        1428,
        34,
        34
       ],
       "section": "s6"
      },
      {
       "id": "c28",
       "label": "Edit project…",
       "tip": "Change the project's name, address, date and customer. A new name renames the folder.",
       "rect": [
        1174,
        0,
        101,
        34
       ],
       "section": ""
      }
     ]
    }
   ],
   "plan": [
    {
     "img": "shots/en/plan.png",
     "w": 1275,
     "h": 1227,
     "sections": [
      {
       "id": "s1",
       "title": "Numbers",
       "tip": "Click to fold this group open or closed.",
       "rect": [
        485,
        1008,
        781,
        210
       ]
      },
      {
       "id": "s2",
       "title": "Route type",
       "tip": "Click to fold this group open or closed.",
       "rect": [
        18,
        18,
        452,
        117
       ]
      },
      {
       "id": "s3",
       "title": "Area to cover",
       "tip": "Click to fold this group open or closed.",
       "rect": [
        18,
        141,
        452,
        285
       ]
      },
      {
       "id": "s4",
       "title": "Flight: height, camera angle, overlap, speed",
       "tip": "Click to fold this group open or closed.",
       "rect": [
        18,
        432,
        452,
        321
       ]
      },
      {
       "id": "s5",
       "title": "Camera settings",
       "tip": "Click to fold this group open or closed.",
       "rect": [
        18,
        759,
        452,
        281
       ]
      },
      {
       "id": "s6",
       "title": "Advanced",
       "tip": "Click to fold this group open or closed.",
       "rect": [
        18,
        1046,
        452,
        159
       ]
      }
     ],
     "controls": [
      {
       "id": "c1",
       "label": "",
       "tip": "Select\nSelect and edit: drag the handles to move corners, move or scale the whole area, move the orbit centre or drag the orange dot to change its radius, and move the wall line. Drag empty map to pan, mouse wheel zooms.",
       "rect": [
        488,
        12,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c2",
       "label": "",
       "tip": "Draw area\nMark the area the route generator should cover (survey grid and 3D grid). It creates no waypoints by itself: press Generate route afterwards.",
       "rect": [
        522,
        12,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c3",
       "label": "",
       "tip": "Wall line\nClick twice to draw the wall line for a facade scan.",
       "rect": [
        556,
        12,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c4",
       "label": "",
       "tip": "Orbit centre\nClick to set the centre of an orbit.",
       "rect": [
        590,
        12,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c5",
       "label": "",
       "tip": "POI\nClick to set a point of interest the camera should look at.",
       "rect": [
        624,
        12,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c6",
       "label": "",
       "tip": "Waypoints\nAdd, select and move single waypoints by hand.",
       "rect": [
        658,
        12,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c7",
       "label": "",
       "tip": "Layers\nChoose what is shown on the map: area, route, arrows, numbers, orthophoto and more. Your choice is remembered.",
       "rect": [
        704,
        12,
        34,
        31
       ],
       "section": ""
      },
      {
       "id": "c8",
       "label": "",
       "tip": "Fit to plan\nZoom the map to your whole plan.",
       "rect": [
        740,
        12,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c9",
       "label": "",
       "tip": "Guide\nStep-by-step guide to planning an orthophoto flight.",
       "rect": [
        1197,
        12,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c10",
       "label": "",
       "tip": "Waypoint tool: click the map to add a point after the selected one. Click a point to select it, drag it to move it. Drag the tip of the blue arrow to turn the camera. Delete removes the point.\n\nGreen = start, blue = selected, purple = outside the area. Arrows show where the camera points: solid = set by you, faint = follows the route.\n\nArea tool: click corners, double-click or Enter finishes, right-click removes a corner. Drag corners in the Move tool.",
       "rect": [
        1231,
        12,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c11",
       "label": "Map",
       "tip": "Which map background to show.",
       "rect": [
        747,
        49,
        257,
        32
       ],
       "section": ""
      },
      {
       "id": "c12",
       "label": "Offline (saved tiles only)",
       "tip": "Use only map tiles that are already saved on this computer.",
       "rect": [
        1010,
        56,
        256,
        18
       ],
       "section": ""
      },
      {
       "id": "c13",
       "label": "Search",
       "tip": "Search for the address and centre the map on it.",
       "rect": [
        1201,
        87,
        65,
        34
       ],
       "section": ""
      },
      {
       "id": "c14",
       "label": "▶ Generate route",
       "tip": "Build the route from your settings. This replaces a hand-edited route.",
       "rect": [
        1018,
        1050,
        234,
        34
       ],
       "section": "s1"
      },
      {
       "id": "c15",
       "label": "🚁 Export for DJI Fly (KMZ)…",
       "tip": "Export for DJI Fly: choose photo mode, speed and height offset, then save or install the KMZ.",
       "rect": [
        1018,
        1090,
        234,
        34
       ],
       "section": "s1"
      },
      {
       "id": "c16",
       "label": "💾 Other formats (KML, GPX, CSV)…",
       "tip": "Save the route as KML, GPX, CSV or GeoJSON for other apps. For DJI Fly use the blue DJI Fly button.",
       "rect": [
        1018,
        1130,
        234,
        34
       ],
       "section": "s1"
      },
      {
       "id": "c17",
       "label": "🧪 Check a planned route…",
       "tip": "Load a route planned elsewhere and check its overlap and photo spacing.",
       "rect": [
        1018,
        1170,
        234,
        34
       ],
       "section": "s1"
      },
      {
       "id": "c18",
       "label": "",
       "tip": "Type of flight: survey grid, 3D double grid, orbit around an object or facade scan.",
       "rect": [
        24,
        67,
        446,
        32
       ],
       "section": "s2"
      },
      {
       "id": "c19",
       "label": "Fly on the other side of the wall line",
       "tip": "Fly on the other side of the drawn wall line.",
       "rect": [
        24,
        105,
        446,
        18
       ],
       "section": "s2"
      },
      {
       "id": "c20",
       "label": "Import area (KML / KMZ / GeoJSON)…",
       "tip": "Load an area from a KML, KMZ or GeoJSON file.",
       "rect": [
        24,
        214,
        446,
        34
       ],
       "section": "s3"
      },
      {
       "id": "c21",
       "label": "Use the photo area + margin (m):",
       "tip": "Make the area from where your photos were taken, plus a margin.",
       "rect": [
        24,
        254,
        370,
        34
       ],
       "section": "s3"
      },
      {
       "id": "c22",
       "label": "Use rectangle",
       "tip": "Make a rectangle from centre, width, length and rotation.",
       "rect": [
        24,
        356,
        446,
        34
       ],
       "section": "s3"
      },
      {
       "id": "c23",
       "label": "Height above ground (m)",
       "tip": "Flight height above the take-off point. Lower = sharper detail but more photos.",
       "rect": [
        24,
        505,
        232,
        32
       ],
       "section": "s4"
      },
      {
       "id": "c24",
       "label": "Gimbal pitch (°)",
       "tip": "Camera tilt: -90 = straight down, 0 = horizontal.",
       "rect": [
        262,
        505,
        208,
        32
       ],
       "section": "s4"
      },
      {
       "id": "c25",
       "label": "Forward overlap (%)",
       "tip": "Overlap between consecutive photos along a line (%). 80 is the normal for mapping.",
       "rect": [
        24,
        567,
        232,
        32
       ],
       "section": "s4"
      },
      {
       "id": "c26",
       "label": "Side overlap (%)",
       "tip": "Overlap between neighbouring lines (%). 70 is the normal for mapping.",
       "rect": [
        262,
        567,
        208,
        32
       ],
       "section": "s4"
      },
      {
       "id": "c27",
       "label": "Timed-shot interval (s)",
       "tip": "Seconds between photos (timed shooting). With the speed it sets the photo spacing.",
       "rect": [
        24,
        629,
        232,
        32
       ],
       "section": "s4"
      },
      {
       "id": "c28",
       "label": "Flight direction (° or auto)",
       "tip": "Direction of the lines in degrees, or 'auto' for the shortest route.",
       "rect": [
        262,
        629,
        208,
        32
       ],
       "section": "s4"
      },
      {
       "id": "c29",
       "label": "Planned speed (m/s) – used by the route check",
       "tip": "Flight speed in m/s; leave empty to use the speed that fits the interval.",
       "rect": [
        24,
        709,
        232,
        32
       ],
       "section": "s4"
      },
      {
       "id": "c30",
       "label": "Camera",
       "tip": "Which camera and resolution you will shoot with. It decides how much ground each photo covers.",
       "rect": [
        24,
        832,
        446,
        32
       ],
       "section": "s5"
      },
      {
       "id": "c31",
       "label": "35 mm-equivalent focal length",
       "tip": "35 mm equivalent focal length of the camera.",
       "rect": [
        24,
        894,
        220,
        32
       ],
       "section": "s5"
      },
      {
       "id": "c32",
       "label": "Image width (px)",
       "tip": "Photo width in pixels.",
       "rect": [
        250,
        894,
        220,
        32
       ],
       "section": "s5"
      },
      {
       "id": "c33",
       "label": "Image height (px)",
       "tip": "Photo height in pixels.",
       "rect": [
        24,
        956,
        220,
        32
       ],
       "section": "s5"
      },
      {
       "id": "c34",
       "label": "Shortest interval (s)",
       "tip": "Shortest time between two photos the camera can manage.",
       "rect": [
        250,
        956,
        220,
        32
       ],
       "section": "s5"
      },
      {
       "id": "c35",
       "label": "Read from the current photo",
       "tip": "Read focal length and size from the current photo.",
       "rect": [
        24,
        994,
        446,
        34
       ],
       "section": "s5"
      },
      {
       "id": "c36",
       "label": "Line extension at the ends (m; auto = half a photo)",
       "tip": "How far each line runs past the area edge. 0 keeps the drone inside the area you drew (auto = half a photo).",
       "rect": [
        24,
        1137,
        238,
        32
       ],
       "section": "s6"
      },
      {
       "id": "c37",
       "label": "Max waypoints per flight",
       "tip": "Maximum waypoints per mission. Longer routes are split into several missions.",
       "rect": [
        268,
        1137,
        202,
        32
       ],
       "section": "s6"
      },
      {
       "id": "c38",
       "label": "One waypoint per photo (otherwise only line ends – use timed shots)",
       "tip": "Put a waypoint at every photo position instead of only at the line ends. Needed for stop-and-shoot.",
       "rect": [
        24,
        1175,
        446,
        18
       ],
       "section": "s6"
      }
     ]
    }
   ],
   "photos": [
    {
     "img": "shots/en/photos.png",
     "w": 1275,
     "h": 812,
     "sections": [
      {
       "id": "s1",
       "title": "Report",
       "tip": "Click to fold this group open or closed.",
       "rect": [
        935,
        46,
        340,
        211
       ]
      },
      {
       "id": "s2",
       "title": "File",
       "tip": "Click to fold this group open or closed.",
       "rect": [
        935,
        261,
        340,
        361
       ]
      },
      {
       "id": "s3",
       "title": "Quality",
       "tip": "Click to fold this group open or closed.",
       "rect": [
        935,
        626,
        340,
        141
       ]
      }
     ],
     "controls": [
      {
       "id": "c1",
       "label": "✔ Use",
       "tip": "✔ Use  (→)",
       "rect": [
        938,
        6,
        110,
        28
       ],
       "section": ""
      },
      {
       "id": "c2",
       "label": "✖ Don't use",
       "tip": "✖ Don't use  (←)",
       "rect": [
        1050,
        6,
        110,
        28
       ],
       "section": ""
      },
      {
       "id": "c3",
       "label": "Undecided",
       "tip": "Clear choice",
       "rect": [
        1162,
        6,
        110,
        28
       ],
       "section": ""
      },
      {
       "id": "c4",
       "label": "Note for the report",
       "tip": "A short note that is printed under the photo in the report.",
       "rect": [
        941,
        119,
        334,
        64
       ],
       "section": "s1"
      },
      {
       "id": "c5",
       "label": "Building part this photo shows",
       "tip": "Pick a building part or type your own name (e.g. 'Roof surface north'). A name you type is offered in every project from then on.\nThe report goes through the building part by part: each part gets its condition, its text and its photos, then its findings.",
       "rect": [
        941,
        213,
        334,
        32
       ],
       "section": "s1"
      },
      {
       "id": "c6",
       "label": "",
       "tip": "Don't use  (←)\nLeave this one out of the report (Left arrow). It turns red in the list and stays in the project as archive.",
       "rect": [
        289,
        6,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c7",
       "label": "",
       "tip": "Use  (→)\nPut this photo or video in the customer report (Right arrow). It turns green in the list.",
       "rect": [
        323,
        6,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c8",
       "label": "",
       "tip": "Use this photo as the overview\nUse this photo as the overview picture at the top of the report.",
       "rect": [
        369,
        6,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c9",
       "label": "",
       "tip": "Before / after…\nPair a photo from an earlier visit with a new one; the report shows them with a slider.",
       "rect": [
        403,
        6,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c10",
       "label": "",
       "tip": "Stitch photos: mark 2-8 photos in the list (Ctrl / Shift + click) and join them into one overview picture",
       "rect": [
        437,
        6,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c11",
       "label": "",
       "tip": "Light & colour: exposure, contrast, saturation, warmth, sharpness",
       "rect": [
        471,
        6,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c12",
       "label": "Import photos / video…",
       "tip": "Bring photos and video into the project: copy them in, or point to the originals.",
       "rect": [
        0,
        0,
        240,
        40
       ],
       "section": ""
      },
      {
       "id": "c13",
       "label": "",
       "tip": "More: copy files into the project, frames from a video, suggest blurry photos, use all shown",
       "rect": [
        246,
        3,
        34,
        34
       ],
       "section": ""
      },
      {
       "id": "c14",
       "label": "",
       "tip": "7 selected · 27 not used · 1 undecided of 35",
       "rect": [
        143,
        46,
        137,
        40
       ],
       "section": ""
      }
     ]
    }
   ],
   "mark": [
    {
     "img": "shots/en/mark.png",
     "w": 1275,
     "h": 812,
     "sections": [
      {
       "id": "s1",
       "title": "Finding",
       "tip": "Click to fold this group open or closed.",
       "rect": [
        875,
        293,
        386,
        331
       ]
      },
      {
       "id": "s2",
       "title": "Description and remark",
       "tip": "Click to fold this group open or closed.",
       "rect": [
        875,
        630,
        386,
        182
       ]
      }
     ],
     "controls": [
      {
       "id": "c1",
       "label": "Building part",
       "tip": "Which part of the building the finding is on (Chimney, Roof surface, Ridge …). The report can group findings by it. You can type your own, e.g. ‘Chimney 2’.",
       "rect": [
        939,
        342,
        322,
        36
       ],
       "section": "s1"
      },
      {
       "id": "c2",
       "label": "Damage",
       "tip": "The common damages for the building part above. Pick one and the title, observation, significance, recommendation and severity are filled in; the Extent below changes the wording, the recommendation and the severity. Without a known building part the list follows the category. Everything can be edited afterwards (Ctrl+Z undoes it).",
       "rect": [
        939,
        384,
        322,
        32
       ],
       "section": "s1"
      },
      {
       "id": "c3",
       "label": "Few places",
       "tip": "A few places, early signs. Usually severity 'Minor'.",
       "rect": [
        942,
        425,
        100,
        28
       ],
       "section": "s1"
      },
      {
       "id": "c4",
       "label": "Several places",
       "tip": "Several places. Usually 'Significant'.",
       "rect": [
        1044,
        425,
        112,
        28
       ],
       "section": "s1"
      },
      {
       "id": "c5",
       "label": "Large parts",
       "tip": "To a large extent. Often 'Significant' or 'Critical'.",
       "rect": [
        1158,
        425,
        100,
        28
       ],
       "section": "s1"
      },
      {
       "id": "c6",
       "label": "Title",
       "tip": "The finding's name: the heading on its page in the report and in the table on the front page, e.g. 'Cracked ridge tile'. Describe the damage itself under Observation.",
       "rect": [
        939,
        462,
        322,
        32
       ],
       "section": "s1"
      },
      {
       "id": "c7",
       "label": "Category",
       "tip": "What kind of finding it is (moss, cracked tile, flashing ...). The building part is chosen below.",
       "rect": [
        939,
        500,
        322,
        32
       ],
       "section": "s1"
      },
      {
       "id": "c8",
       "label": "Severity",
       "tip": "Critical: Visible damage that, from what could be seen, may be of significant importance to the building if it persists.\nSignificant: Visible damage or wear that may develop over time.\nMinor: A minor condition with no immediate effect seen.\nOK / Note: In order, or a neutral note for the record.",
       "rect": [
        939,
        538,
        322,
        32
       ],
       "section": "s1"
      },
      {
       "id": "c9",
       "label": "Observation",
       "tip": "Description for the customer.",
       "rect": [
        957,
        679,
        304,
        70
       ],
       "section": "s2"
      },
      {
       "id": "c10",
       "label": "",
       "tip": "New marker\nAdd a marker in the middle of the photo with the chosen tool.",
       "rect": [
        878,
        6,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c11",
       "label": "",
       "tip": "AI suggestions…\nLet an AI look at the photos and suggest possible defects. You approve each suggestion; nothing is added automatically.",
       "rect": [
        912,
        6,
        44,
        28
       ],
       "section": ""
      },
      {
       "id": "c12",
       "label": "",
       "tip": "Edit the list: duplicate, delete, move, sort, merge … (also on right-click in the list)",
       "rect": [
        965,
        3,
        34,
        34
       ],
       "section": ""
      },
      {
       "id": "c13",
       "label": "",
       "tip": "Select / move\nSelect and move markers.",
       "rect": [
        289,
        6,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c14",
       "label": "",
       "tip": "Ring\nDraw a circle around a spot: click the centre and drag out.",
       "rect": [
        323,
        6,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c15",
       "label": "",
       "tip": "Box\nDraw a rectangle: drag from corner to corner. Turn it with the round knob above it (Shift: steps of 15°) so it lies along a ridge or a crack.",
       "rect": [
        357,
        6,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c16",
       "label": "",
       "tip": "Arrow\nDraw an arrow that points at a detail.",
       "rect": [
        391,
        6,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c17",
       "label": "",
       "tip": "Pin\nPlace a pin on a single spot.",
       "rect": [
        425,
        6,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c18",
       "label": "",
       "tip": "Loupe\nLoupe: click a detail to show it enlarged on the photo (a small circle, a line and a big circle). A visual aid, not a finding – it shows in the report wherever the whole photo is shown (overview, building parts, gallery).",
       "rect": [
        459,
        6,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c19",
       "label": "",
       "tip": "Crop\nCrop: a rectangle appears on the picture. Drag its edges, then OK. Only that part is used in the report; the file is not changed.",
       "rect": [
        505,
        6,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c20",
       "label": "",
       "tip": "Blur\nBlur an area (for example a neighbour’s window): a rectangle appears; place it, then OK. Hold Alt and drag a corner to pull that corner alone (a free four-sided shape). Click a blur that is already there to change or delete it. On a video, the button Follow movement makes the blur follow the picture while the camera moves. Press again for more areas.",
       "rect": [
        539,
        6,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c21",
       "label": "",
       "tip": "Light & colour: exposure, contrast, saturation, warmth, sharpness",
       "rect": [
        573,
        6,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c22",
       "label": "",
       "tip": "Undo crop / blur\nTake the crop or the last blur box off this photo / video again.",
       "rect": [
        607,
        6,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c23",
       "label": "",
       "tip": "Use this photo as the overview\nUse this photo as the overview picture at the top of the report.",
       "rect": [
        653,
        6,
        32,
        28
       ],
       "section": ""
      },
      {
       "id": "c24",
       "label": "Only selected photos",
       "tip": "Show only the photos you selected for the report.",
       "rect": [
        0,
        11,
        280,
        18
       ],
       "section": ""
      }
     ]
    }
   ],
   "thermal": [
    {
     "img": "shots/en/thermal.png",
     "w": 1275,
     "h": 812,
     "sections": [],
     "controls": [
      {
       "id": "c1",
       "label": "📂 Thermal folder…",
       "tip": "Add all thermal images from a folder.",
       "rect": [
        504,
        347,
        141,
        34
       ],
       "section": ""
      },
      {
       "id": "c2",
       "label": "＋ Add images…",
       "tip": "Add single thermal images.",
       "rect": [
        651,
        347,
        121,
        34
       ],
       "section": ""
      }
     ]
    }
   ],
   "map": [
    {
     "img": "shots/en/map_1.png",
     "w": 1275,
     "h": 812,
     "sections": [
      {
       "id": "s1",
       "title": "Guide",
       "tip": "",
       "rect": [
        9,
        40,
        505,
        650
       ]
      }
     ],
     "controls": [
      {
       "id": "c1",
       "label": "Use in flight plan",
       "tip": "Sets the route type and overlaps for this job and opens the flight plan. Height, speed and camera stay as you set them.",
       "rect": [
        23,
        582,
        123,
        34
       ],
       "section": "s1"
      }
     ],
     "tab": "Guide"
    },
    {
     "img": "shots/en/map_2.png",
     "w": 1275,
     "h": 812,
     "sections": [
      {
       "id": "s1",
       "title": "Capture set",
       "tip": "Click to fold this group open or closed.",
       "rect": [
        9,
        40,
        560,
        763
       ]
      }
     ],
     "controls": [
      {
       "id": "c1",
       "label": "🔍 Analyse photos",
       "tip": "Check sharpness and coverage of all photos.",
       "rect": [
        23,
        82,
        136,
        34
       ],
       "section": "s1"
      },
      {
       "id": "c2",
       "label": "Blur limit %",
       "tip": "Photos less sharp than this percentage of the series' median sharpness are marked blurry (default 50).",
       "rect": [
        239,
        82,
        60,
        32
       ],
       "section": "s1"
      },
      {
       "id": "c3",
       "label": "Leave out blurry photos",
       "tip": "Leave blurry photos out of the exported capture set.",
       "rect": [
        23,
        385,
        532,
        18
       ],
       "section": "s1"
      },
      {
       "id": "c4",
       "label": "Copy the photo files",
       "tip": "Copy the photo files into the export folder (otherwise only the position list).",
       "rect": [
        23,
        409,
        532,
        18
       ],
       "section": "s1"
      },
      {
       "id": "c5",
       "label": "📦 Export capture set…",
       "tip": "Save the good photos plus a position list for the photogrammetry program.",
       "rect": [
        23,
        433,
        532,
        34
       ],
       "section": "s1"
      }
     ],
     "tab": "Capture set"
    },
    {
     "img": "shots/en/map_3.png",
     "w": 1275,
     "h": 812,
     "sections": [],
     "controls": [
      {
       "id": "c1",
       "label": "📂 Import orthophoto (GeoTIFF)…",
       "tip": "Load a georeferenced orthophoto (GeoTIFF), e.g. odm_orthophoto.tif from WebODM.",
       "rect": [
        347,
        366,
        223,
        34
       ],
       "section": ""
      },
      {
       "id": "c2",
       "label": "📥 Import result folder…",
       "tip": "Choose the folder with a processing result (OpenDroneMap / WebODM, RealityScan ...): the orthophoto, elevation model and 3D files are found for you.",
       "rect": [
        576,
        366,
        169,
        34
       ],
       "section": ""
      },
      {
       "id": "c3",
       "label": "📥 Import WebODM zip…",
       "tip": "Choose the all.zip from WebODM (Download Assets, All Assets). It is unpacked next to the zip and the files are found for you.",
       "rect": [
        751,
        366,
        177,
        34
       ],
       "section": ""
      }
     ],
     "tab": "Orthophoto"
    },
    {
     "img": "shots/en/map_4.png",
     "w": 1275,
     "h": 812,
     "sections": [],
     "controls": [
      {
       "id": "c1",
       "label": "📂 Import orthophoto (GeoTIFF)…",
       "tip": "Load a georeferenced orthophoto (GeoTIFF), e.g. odm_orthophoto.tif from WebODM.",
       "rect": [
        526,
        368,
        223,
        34
       ],
       "section": ""
      }
     ],
     "tab": "Measure"
    }
   ],
   "report": [
    {
     "img": "shots/en/report.png",
     "w": 1265,
     "h": 887,
     "sections": [
      {
       "id": "s1",
       "title": "Export options",
       "tip": "Click to fold this group open or closed.",
       "rect": [
        838,
        9,
        418,
        869
       ]
      },
      {
       "id": "s2",
       "title": "Layout",
       "tip": "REPORT LAYOUT – how the findings are arranged in the HTML and PDF report",
       "rect": [
        287,
        9,
        545,
        869
       ]
      },
      {
       "id": "s3",
       "title": "Checklist before export",
       "tip": "Click to fold this group open or closed.",
       "rect": [
        9,
        9,
        272,
        869
       ]
      }
     ],
     "controls": [
      {
       "id": "c1",
       "label": "Report language",
       "tip": "Language of the report.",
       "rect": [
        854,
        178,
        378,
        32
       ],
       "section": "s1"
      },
      {
       "id": "c2",
       "label": "Also make a PDF",
       "tip": "Also create a PDF. Uses the Edge or Chrome that is installed.",
       "rect": [
        854,
        218,
        378,
        18
       ],
       "section": "s1"
      },
      {
       "id": "c3",
       "label": "Copy the selected original photos",
       "tip": "Copy the selected originals into the export folder",
       "rect": [
        854,
        244,
        378,
        18
       ],
       "section": "s1"
      },
      {
       "id": "c4",
       "label": "Keep every export in its own folder",
       "tip": "Auto-versioning (keep every export in its own dated folder)",
       "rect": [
        854,
        270,
        378,
        18
       ],
       "section": "s1"
      },
      {
       "id": "c5",
       "label": "Flight log",
       "tip": "Include the flight log",
       "rect": [
        854,
        329,
        378,
        18
       ],
       "section": "s1"
      },
      {
       "id": "c6",
       "label": "List of photo positions",
       "tip": "Include the list of photo positions",
       "rect": [
        854,
        355,
        378,
        18
       ],
       "section": "s1"
      },
      {
       "id": "c7",
       "label": "Remark in the summary table",
       "tip": "Show the remark in the summary table",
       "rect": [
        854,
        381,
        378,
        18
       ],
       "section": "s1"
      },
      {
       "id": "c8",
       "label": "‘AI-assisted’ mark on findings",
       "tip": "Show ‘AI-assisted’ on every finding",
       "rect": [
        854,
        407,
        378,
        18
       ],
       "section": "s1"
      },
      {
       "id": "c9",
       "label": "1080p · 30 fps (recommended)",
       "tip": "Report video 1080p 30 fps (small – recommended)",
       "rect": [
        854,
        466,
        378,
        18
       ],
       "section": "s1"
      },
      {
       "id": "c10",
       "label": "1080p · 60 fps",
       "tip": "Report video 1080p 60 fps (smooth motion)",
       "rect": [
        854,
        492,
        378,
        18
       ],
       "section": "s1"
      },
      {
       "id": "c11",
       "label": "4K · 60 fps (large, slow)",
       "tip": "Report video 4K 60 fps (large, takes longer)",
       "rect": [
        854,
        518,
        378,
        18
       ],
       "section": "s1"
      },
      {
       "id": "c12",
       "label": "Include the original videos",
       "tip": "Also include the original videos (can be very large)",
       "rect": [
        854,
        544,
        378,
        18
       ],
       "section": "s1"
      },
      {
       "id": "c13",
       "label": "Single videos too (with a storyboard)",
       "tip": "Also show the single videos (with a storyboard)",
       "rect": [
        854,
        570,
        378,
        18
       ],
       "section": "s1"
      },
      {
       "id": "c14",
       "label": "Export report",
       "tip": "Makes the HTML report (and a PDF when ‘Also make a PDF’ is ticked).",
       "rect": [
        854,
        629,
        378,
        34
       ],
       "section": "s1"
      },
      {
       "id": "c15",
       "label": "Preview",
       "tip": "🔍 Preview in browser",
       "rect": [
        854,
        671,
        185,
        34
       ],
       "section": "s1"
      },
      {
       "id": "c16",
       "label": "Report + PDF",
       "tip": "Makes the HTML report and a PDF, whatever ‘Also make a PDF’ says.",
       "rect": [
        1047,
        671,
        185,
        34
       ],
       "section": "s1"
      },
      {
       "id": "c17",
       "label": "Export anonymised report (HTML + PDF)",
       "tip": "An extra export of the whole report (HTML and PDF) in export/report/anonymous: the customer's name, address, phone and e-mail replaced, faces and number plates blurred, no positions, flight log, project file or original photos.",
       "rect": [
        854,
        713,
        378,
        34
       ],
       "section": "s1"
      },
      {
       "id": "c18",
       "label": "To Blender…",
       "tip": "Cameras from the photos, findings as markers and the orthophoto as a plane, with a ready-to-run import script.",
       "rect": [
        854,
        814,
        185,
        34
       ],
       "section": "s1"
      },
      {
       "id": "c19",
       "label": "Publish example…",
       "tip": "Make this report into a small website (front page + report + PDF) that you can send as a link and host free on GitHub Pages. For showing your work to new customers: a link instead of an attachment.",
       "rect": [
        1047,
        814,
        185,
        34
       ],
       "section": "s1"
      },
      {
       "id": "c20",
       "label": "Default order in the report",
       "tip": "Order of the findings in the report.",
       "rect": [
        420,
        593,
        283,
        32
       ],
       "section": "s2"
      },
      {
       "id": "c21",
       "label": "🔍 Preview in browser",
       "tip": "Open a quick preview of the report in your browser.",
       "rect": [
        301,
        635,
        156,
        34
       ],
       "section": "s2"
      }
     ]
    }
   ]
  }
 }
};
