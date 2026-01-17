// WCAG 2.2 Success Criteria
// Based on https://www.w3.org/TR/WCAG22/

const WCAG_CRITERIA = {
    principles: [
        {
            id: "perceivable",
            num: "1",
            name: "Waarneembaar",
            nameEn: "Perceivable",
            description: "Informatie en componenten van de gebruikersinterface moeten toonbaar zijn aan gebruikers op voor hen waarneembare wijze."
        },
        {
            id: "operable",
            num: "2",
            name: "Bedienbaar",
            nameEn: "Operable",
            description: "Componenten van de gebruikersinterface en navigatie moeten bedienbaar zijn."
        },
        {
            id: "understandable",
            num: "3",
            name: "Begrijpelijk",
            nameEn: "Understandable",
            description: "Informatie en de bediening van de gebruikersinterface moeten begrijpelijk zijn."
        },
        {
            id: "robust",
            num: "4",
            name: "Robuust",
            nameEn: "Robust",
            description: "Content moet voldoende robuust zijn om betrouwbaar geïnterpreteerd te kunnen worden door een breed scala van user agents, met inbegrip van hulptechnologieën."
        }
    ],

    guidelines: [
        // Principle 1: Perceivable
        { id: "text-alternatives", num: "1.1", principle: "perceivable", name: "Tekstalternatieven", nameEn: "Text Alternatives" },
        { id: "time-based-media", num: "1.2", principle: "perceivable", name: "Op tijd gebaseerde media", nameEn: "Time-based Media" },
        { id: "adaptable", num: "1.3", principle: "perceivable", name: "Aanpasbaar", nameEn: "Adaptable" },
        { id: "distinguishable", num: "1.4", principle: "perceivable", name: "Onderscheidbaar", nameEn: "Distinguishable" },

        // Principle 2: Operable
        { id: "keyboard-accessible", num: "2.1", principle: "operable", name: "Toetsenbordtoegankelijk", nameEn: "Keyboard Accessible" },
        { id: "enough-time", num: "2.2", principle: "operable", name: "Genoeg tijd", nameEn: "Enough Time" },
        { id: "seizures", num: "2.3", principle: "operable", name: "Toevallen en fysieke reacties", nameEn: "Seizures and Physical Reactions" },
        { id: "navigable", num: "2.4", principle: "operable", name: "Navigeerbaar", nameEn: "Navigable" },
        { id: "input-modalities", num: "2.5", principle: "operable", name: "Invoermodaliteiten", nameEn: "Input Modalities" },

        // Principle 3: Understandable
        { id: "readable", num: "3.1", principle: "understandable", name: "Leesbaar", nameEn: "Readable" },
        { id: "predictable", num: "3.2", principle: "understandable", name: "Voorspelbaar", nameEn: "Predictable" },
        { id: "input-assistance", num: "3.3", principle: "understandable", name: "Assistentie bij invoer", nameEn: "Input Assistance" },

        // Principle 4: Robust
        { id: "compatible", num: "4.1", principle: "robust", name: "Compatibel", nameEn: "Compatible" }
    ],

    successCriteria: [
        // 1.1 Text Alternatives
        {
            id: "1.1.1",
            num: "1.1.1",
            guideline: "1.1",
            principle: "perceivable",
            level: "A",
            name: "Niet-tekstuele content",
            nameEn: "Non-text Content",
            description: "Alle niet-tekstuele content die aan de gebruiker wordt gepresenteerd, heeft een tekstalternatief dat een gelijkwaardig doel dient.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },

        // 1.2 Time-based Media
        {
            id: "1.2.1",
            num: "1.2.1",
            guideline: "1.2",
            principle: "perceivable",
            level: "A",
            name: "Louter-audio en louter-video (vooraf opgenomen)",
            nameEn: "Audio-only and Video-only (Prerecorded)",
            description: "Voor vooraf opgenomen louter-audio en vooraf opgenomen louter-video media is een alternatief beschikbaar.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "1.2.2",
            num: "1.2.2",
            guideline: "1.2",
            principle: "perceivable",
            level: "A",
            name: "Ondertitels voor doven en slechthorenden (vooraf opgenomen)",
            nameEn: "Captions (Prerecorded)",
            description: "Er worden ondertitels voor doven en slechthorenden geleverd voor alle vooraf opgenomen audiocontent in gesynchroniseerde media.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "1.2.3",
            num: "1.2.3",
            guideline: "1.2",
            principle: "perceivable",
            level: "A",
            name: "Audiodescriptie of media-alternatief (vooraf opgenomen)",
            nameEn: "Audio Description or Media Alternative (Prerecorded)",
            description: "Een alternatief voor op tijd gebaseerde media of audiodescriptie van de vooraf opgenomen videocontent wordt geleverd voor gesynchroniseerde media.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "1.2.4",
            num: "1.2.4",
            guideline: "1.2",
            principle: "perceivable",
            level: "AA",
            name: "Ondertitels voor doven en slechthorenden (live)",
            nameEn: "Captions (Live)",
            description: "Er worden ondertitels voor doven en slechthorenden geleverd voor alle live audiocontent in gesynchroniseerde media.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "1.2.5",
            num: "1.2.5",
            guideline: "1.2",
            principle: "perceivable",
            level: "AA",
            name: "Audiodescriptie (vooraf opgenomen)",
            nameEn: "Audio Description (Prerecorded)",
            description: "Er wordt audiodescriptie geleverd voor alle vooraf opgenomen videocontent in gesynchroniseerde media.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "1.2.6",
            num: "1.2.6",
            guideline: "1.2",
            principle: "perceivable",
            level: "AAA",
            name: "Gebarentaal (vooraf opgenomen)",
            nameEn: "Sign Language (Prerecorded)",
            description: "Er wordt gebarentaalvertolking geleverd voor alle vooraf opgenomen audiocontent in gesynchroniseerde media.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "1.2.7",
            num: "1.2.7",
            guideline: "1.2",
            principle: "perceivable",
            level: "AAA",
            name: "Verlengde audiodescriptie (vooraf opgenomen)",
            nameEn: "Extended Audio Description (Prerecorded)",
            description: "Waar pauzes in voorgrondaudio onvoldoende zijn om audiodescripties toe te staan om de betekenis van video over te brengen, wordt er verlengde audiodescriptie geleverd.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "1.2.8",
            num: "1.2.8",
            guideline: "1.2",
            principle: "perceivable",
            level: "AAA",
            name: "Media-alternatief (vooraf opgenomen)",
            nameEn: "Media Alternative (Prerecorded)",
            description: "Er wordt een alternatief voor op tijd gebaseerde media geleverd voor alle vooraf opgenomen gesynchroniseerde media en voor alle vooraf opgenomen louter-video media.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "1.2.9",
            num: "1.2.9",
            guideline: "1.2",
            principle: "perceivable",
            level: "AAA",
            name: "Louter-audio (live)",
            nameEn: "Audio-only (Live)",
            description: "Er wordt een alternatief voor op tijd gebaseerde media geleverd dat equivalente informatie geeft voor live louter-audio content.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },

        // 1.3 Adaptable
        {
            id: "1.3.1",
            num: "1.3.1",
            guideline: "1.3",
            principle: "perceivable",
            level: "A",
            name: "Info en relaties",
            nameEn: "Info and Relationships",
            description: "Informatie, structuur, en relaties overgebracht door presentatie kunnen door software bepaald worden of zijn beschikbaar in tekst.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "1.3.2",
            num: "1.3.2",
            guideline: "1.3",
            principle: "perceivable",
            level: "A",
            name: "Betekenisvolle volgorde",
            nameEn: "Meaningful Sequence",
            description: "Als de volgorde waarin content wordt gepresenteerd van invloed is op zijn betekenis, kan een correcte leesvolgorde door software bepaald worden.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "1.3.3",
            num: "1.3.3",
            guideline: "1.3",
            principle: "perceivable",
            level: "A",
            name: "Zintuiglijke eigenschappen",
            nameEn: "Sensory Characteristics",
            description: "Instructies die geleverd worden voor het begrijpen en bedienen van content zijn niet alleen afhankelijk van zintuiglijke eigenschappen van componenten zoals vorm, kleur, afmeting, visuele locatie, oriëntatie of geluid.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "1.3.4",
            num: "1.3.4",
            guideline: "1.3",
            principle: "perceivable",
            level: "AA",
            name: "Weergavestand",
            nameEn: "Orientation",
            description: "Content beperkt de weergave en bediening niet tot een enkele weergavestand, zoals staand of liggend, tenzij een specifieke weergavestand essentieel is.",
            versions: ["WCAG21", "WCAG22"]
        },
        {
            id: "1.3.5",
            num: "1.3.5",
            guideline: "1.3",
            principle: "perceivable",
            level: "AA",
            name: "Identificeer het doel van de invoer",
            nameEn: "Identify Input Purpose",
            description: "Het doel van elk invoerveld waarmee informatie van de gebruiker wordt verzameld, kan door software bepaald worden wanneer het invoerveld een doel dient dat is geïdentificeerd in de sectie Doeleinden van invoer voor componenten van de gebruikersinterface.",
            versions: ["WCAG21", "WCAG22"]
        },
        {
            id: "1.3.6",
            num: "1.3.6",
            guideline: "1.3",
            principle: "perceivable",
            level: "AAA",
            name: "Identificeer het doel",
            nameEn: "Identify Purpose",
            description: "In content die is geïmplementeerd met opmaaktalen kunnen het doel van componenten van de gebruikersinterface, iconen en regio's door software bepaald worden.",
            versions: ["WCAG21", "WCAG22"]
        },

        // 1.4 Distinguishable
        {
            id: "1.4.1",
            num: "1.4.1",
            guideline: "1.4",
            principle: "perceivable",
            level: "A",
            name: "Gebruik van kleur",
            nameEn: "Use of Color",
            description: "Kleur wordt niet als het enige visuele middel gebruikt om informatie over te brengen, een actie aan te geven, tot een reactie op te roepen of een visueel element te onderscheiden.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "1.4.2",
            num: "1.4.2",
            guideline: "1.4",
            principle: "perceivable",
            level: "A",
            name: "Geluidsbediening",
            nameEn: "Audio Control",
            description: "Als audio op een webpagina automatisch meer dan 3 seconden afspeelt, is er een mechanisme beschikbaar om de audio te pauzeren of te stoppen, of een mechanisme is beschikbaar om het audiovolume onafhankelijk van het algemene systeemvolumeniveau te regelen.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "1.4.3",
            num: "1.4.3",
            guideline: "1.4",
            principle: "perceivable",
            level: "AA",
            name: "Contrast (minimum)",
            nameEn: "Contrast (Minimum)",
            description: "De visuele weergave van tekst en afbeeldingen van tekst heeft een contrastverhouding van ten minste 4,5:1.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "1.4.4",
            num: "1.4.4",
            guideline: "1.4",
            principle: "perceivable",
            level: "AA",
            name: "Herschalen van tekst",
            nameEn: "Resize Text",
            description: "Behalve voor ondertitels voor doven en slechthorenden en afbeeldingen van tekst, kan tekst zonder hulptechnologie tot 200% geschaald worden zonder verlies van content of functionaliteit.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "1.4.5",
            num: "1.4.5",
            guideline: "1.4",
            principle: "perceivable",
            level: "AA",
            name: "Afbeeldingen van tekst",
            nameEn: "Images of Text",
            description: "Als de gebruikte technologieën de visuele weergave tot stand kunnen brengen, wordt tekst gebruikt om informatie over te brengen in plaats van afbeeldingen van tekst.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "1.4.6",
            num: "1.4.6",
            guideline: "1.4",
            principle: "perceivable",
            level: "AAA",
            name: "Contrast (versterkt)",
            nameEn: "Contrast (Enhanced)",
            description: "De visuele weergave van tekst en afbeeldingen van tekst heeft een contrastverhouding van ten minste 7:1.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "1.4.7",
            num: "1.4.7",
            guideline: "1.4",
            principle: "perceivable",
            level: "AAA",
            name: "Weinig of geen achtergrondgeluid",
            nameEn: "Low or No Background Audio",
            description: "Voor vooraf opgenomen louter-audio content die voornamelijk spraak bevat, is de achtergrondgeluidsniveau laag of afwezig.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "1.4.8",
            num: "1.4.8",
            guideline: "1.4",
            principle: "perceivable",
            level: "AAA",
            name: "Visuele weergave",
            nameEn: "Visual Presentation",
            description: "Voor de visuele weergave van tekstblokken is een mechanisme beschikbaar om voorgrond- en achtergrondkleuren te selecteren, de breedte te beperken, tekst niet uit te lijnen, regelafstand en alinea-afstand aan te passen.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "1.4.9",
            num: "1.4.9",
            guideline: "1.4",
            principle: "perceivable",
            level: "AAA",
            name: "Afbeeldingen van tekst (geen uitzondering)",
            nameEn: "Images of Text (No Exception)",
            description: "Afbeeldingen van tekst worden alleen gebruikt voor puur decoratieve doeleinden of waar een specifieke weergave van tekst essentieel is voor de informatie die wordt overgebracht.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "1.4.10",
            num: "1.4.10",
            guideline: "1.4",
            principle: "perceivable",
            level: "AA",
            name: "Reflow",
            nameEn: "Reflow",
            description: "Content kan zonder verlies van informatie of functionaliteit en zonder scrollen in twee dimensies worden weergegeven voor verticaal scrollende content bij een breedte van 320 CSS-pixels en voor horizontaal scrollende content bij een hoogte van 256 CSS-pixels.",
            versions: ["WCAG21", "WCAG22"]
        },
        {
            id: "1.4.11",
            num: "1.4.11",
            guideline: "1.4",
            principle: "perceivable",
            level: "AA",
            name: "Contrast van niet-tekstuele content",
            nameEn: "Non-text Contrast",
            description: "De visuele weergave van componenten van de gebruikersinterface en grafische objecten heeft een contrastverhouding van ten minste 3:1 tegen aangrenzende kleuren.",
            versions: ["WCAG21", "WCAG22"]
        },
        {
            id: "1.4.12",
            num: "1.4.12",
            guideline: "1.4",
            principle: "perceivable",
            level: "AA",
            name: "Tekstafstand",
            nameEn: "Text Spacing",
            description: "Er treedt geen verlies van content of functionaliteit op door het instellen van regelafstand, alinea-afstand, letterafstand en woordafstand.",
            versions: ["WCAG21", "WCAG22"]
        },
        {
            id: "1.4.13",
            num: "1.4.13",
            guideline: "1.4",
            principle: "perceivable",
            level: "AA",
            name: "Content bij hover of focus",
            nameEn: "Content on Hover or Focus",
            description: "Waar het ontvangen en dan verwijderen van aanwijzer-hover of toetsenbordfocus ervoor zorgt dat aanvullende content zichtbaar en vervolgens verborgen wordt, gelden bepaalde voorwaarden.",
            versions: ["WCAG21", "WCAG22"]
        },

        // 2.1 Keyboard Accessible
        {
            id: "2.1.1",
            num: "2.1.1",
            guideline: "2.1",
            principle: "operable",
            level: "A",
            name: "Toetsenbord",
            nameEn: "Keyboard",
            description: "Alle functionaliteit van de content is bedienbaar via een toetsenbordinterface zonder dat specifieke timing voor individuele toetsaanslagen vereist is.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "2.1.2",
            num: "2.1.2",
            guideline: "2.1",
            principle: "operable",
            level: "A",
            name: "Geen toetsenbordval",
            nameEn: "No Keyboard Trap",
            description: "Als de toetsenbordfocus met een toetsenbordinterface verplaatst kan worden naar een component van de pagina, dan kan de focus ook met alleen een toetsenbordinterface weer van dat component worden verplaatst.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "2.1.3",
            num: "2.1.3",
            guideline: "2.1",
            principle: "operable",
            level: "AAA",
            name: "Toetsenbord (geen uitzondering)",
            nameEn: "Keyboard (No Exception)",
            description: "Alle functionaliteit van de content is bedienbaar via een toetsenbordinterface zonder dat specifieke timing voor individuele toetsaanslagen vereist is.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "2.1.4",
            num: "2.1.4",
            guideline: "2.1",
            principle: "operable",
            level: "A",
            name: "Enkel teken sneltoetsen",
            nameEn: "Character Key Shortcuts",
            description: "Als een sneltoets is geïmplementeerd in content met alleen letter-, punctuatie-, cijfer- of symbooltoetsen, dan is er een mechanisme om de sneltoets uit te schakelen of om te configureren.",
            versions: ["WCAG21", "WCAG22"]
        },

        // 2.2 Enough Time
        {
            id: "2.2.1",
            num: "2.2.1",
            guideline: "2.2",
            principle: "operable",
            level: "A",
            name: "Timing aanpasbaar",
            nameEn: "Timing Adjustable",
            description: "Voor elke tijdslimiet die door de content wordt ingesteld, is er de mogelijkheid om de tijdslimiet uit te zetten, aan te passen of te verlengen.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "2.2.2",
            num: "2.2.2",
            guideline: "2.2",
            principle: "operable",
            level: "A",
            name: "Pauzeren, stoppen, verbergen",
            nameEn: "Pause, Stop, Hide",
            description: "Voor bewegende, knipperende, scrollende of automatisch actualiserende informatie gelden bepaalde voorwaarden.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "2.2.3",
            num: "2.2.3",
            guideline: "2.2",
            principle: "operable",
            level: "AAA",
            name: "Geen timing",
            nameEn: "No Timing",
            description: "Timing is geen essentieel onderdeel van de gebeurtenis of activiteit gepresenteerd door de content, behalve voor niet-interactieve gesynchroniseerde media en real-time gebeurtenissen.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "2.2.4",
            num: "2.2.4",
            guideline: "2.2",
            principle: "operable",
            level: "AAA",
            name: "Onderbrekingen",
            nameEn: "Interruptions",
            description: "Onderbrekingen kunnen worden uitgesteld of onderdrukt door de gebruiker, behalve onderbrekingen met betrekking tot een noodgeval.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "2.2.5",
            num: "2.2.5",
            guideline: "2.2",
            principle: "operable",
            level: "AAA",
            name: "Herauthenticatie",
            nameEn: "Re-authenticating",
            description: "Wanneer een geauthenticeerde sessie verloopt, kan de gebruiker de activiteit zonder verlies van gegevens voortzetten na herauthenticatie.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "2.2.6",
            num: "2.2.6",
            guideline: "2.2",
            principle: "operable",
            level: "AAA",
            name: "Time-outs",
            nameEn: "Timeouts",
            description: "Gebruikers worden gewaarschuwd voor de duur van inactiviteit die tot gegevensverlies kan leiden, tenzij de gegevens meer dan 20 uur bewaard blijven.",
            versions: ["WCAG21", "WCAG22"]
        },

        // 2.3 Seizures and Physical Reactions
        {
            id: "2.3.1",
            num: "2.3.1",
            guideline: "2.3",
            principle: "operable",
            level: "A",
            name: "Drie flitsen of beneden drempelwaarde",
            nameEn: "Three Flashes or Below Threshold",
            description: "Webpagina's bevatten niets dat meer dan drie keer flitst in enige periode van één seconde, of de flits is beneden de algemene flits- en rodeflitsdrempels.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "2.3.2",
            num: "2.3.2",
            guideline: "2.3",
            principle: "operable",
            level: "AAA",
            name: "Drie flitsen",
            nameEn: "Three Flashes",
            description: "Webpagina's bevatten niets dat meer dan drie keer flitst in enige periode van één seconde.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "2.3.3",
            num: "2.3.3",
            guideline: "2.3",
            principle: "operable",
            level: "AAA",
            name: "Animatie uit interactie",
            nameEn: "Animation from Interactions",
            description: "Animatie veroorzaakt door interactie kan worden uitgeschakeld, tenzij de animatie essentieel is voor de functionaliteit of de informatie die wordt overgebracht.",
            versions: ["WCAG21", "WCAG22"]
        },

        // 2.4 Navigable
        {
            id: "2.4.1",
            num: "2.4.1",
            guideline: "2.4",
            principle: "operable",
            level: "A",
            name: "Blokken omzeilen",
            nameEn: "Bypass Blocks",
            description: "Er is een mechanisme beschikbaar om blokken content die op meerdere webpagina's worden herhaald te omzeilen.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "2.4.2",
            num: "2.4.2",
            guideline: "2.4",
            principle: "operable",
            level: "A",
            name: "Paginatitel",
            nameEn: "Page Titled",
            description: "Webpagina's hebben titels die het onderwerp of doel beschrijven.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "2.4.3",
            num: "2.4.3",
            guideline: "2.4",
            principle: "operable",
            level: "A",
            name: "Focusvolgorde",
            nameEn: "Focus Order",
            description: "Als een webpagina sequentieel genavigeerd kan worden en de navigatiesequenties hebben invloed op betekenis of bediening, dan krijgen focusbare componenten in een volgorde die betekenis en bedienbaarheid behoudt de focus.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "2.4.4",
            num: "2.4.4",
            guideline: "2.4",
            principle: "operable",
            level: "A",
            name: "Linkdoel (in context)",
            nameEn: "Link Purpose (In Context)",
            description: "Het doel van elke link kan bepaald worden uit enkel de linktekst of uit de linktekst samen met zijn door software bepaalde linkcontext.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "2.4.5",
            num: "2.4.5",
            guideline: "2.4",
            principle: "operable",
            level: "AA",
            name: "Meerdere manieren",
            nameEn: "Multiple Ways",
            description: "Er is meer dan één manier beschikbaar om een webpagina binnen een verzameling webpagina's te vinden, behalve waar de webpagina het resultaat is van, of een stap in, een proces.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "2.4.6",
            num: "2.4.6",
            guideline: "2.4",
            principle: "operable",
            level: "AA",
            name: "Koppen en labels",
            nameEn: "Headings and Labels",
            description: "Koppen en labels beschrijven het onderwerp of doel.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "2.4.7",
            num: "2.4.7",
            guideline: "2.4",
            principle: "operable",
            level: "AA",
            name: "Focus zichtbaar",
            nameEn: "Focus Visible",
            description: "Elke gebruikersinterface die door het toetsenbord te bedienen is, heeft een bedieningswijze waarbij de indicator van de toetsenbordfocus zichtbaar is.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "2.4.8",
            num: "2.4.8",
            guideline: "2.4",
            principle: "operable",
            level: "AAA",
            name: "Locatie",
            nameEn: "Location",
            description: "Er is informatie beschikbaar over de locatie van de gebruiker binnen een verzameling webpagina's.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "2.4.9",
            num: "2.4.9",
            guideline: "2.4",
            principle: "operable",
            level: "AAA",
            name: "Linkdoel (alleen link)",
            nameEn: "Link Purpose (Link Only)",
            description: "Er is een mechanisme beschikbaar waarmee het doel van elke link kan worden bepaald uit alleen de linktekst.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "2.4.10",
            num: "2.4.10",
            guideline: "2.4",
            principle: "operable",
            level: "AAA",
            name: "Paragraafkoppen",
            nameEn: "Section Headings",
            description: "Paragraafkoppen worden gebruikt om de content te organiseren.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "2.4.11",
            num: "2.4.11",
            guideline: "2.4",
            principle: "operable",
            level: "AA",
            name: "Focus niet verborgen (minimum)",
            nameEn: "Focus Not Obscured (Minimum)",
            description: "Wanneer een component van de gebruikersinterface toetsenbordfocus ontvangt, is de component niet volledig verborgen door door de auteur gecreëerde content.",
            versions: ["WCAG22"]
        },
        {
            id: "2.4.12",
            num: "2.4.12",
            guideline: "2.4",
            principle: "operable",
            level: "AAA",
            name: "Focus niet verborgen (uitgebreid)",
            nameEn: "Focus Not Obscured (Enhanced)",
            description: "Wanneer een component van de gebruikersinterface toetsenbordfocus ontvangt, is geen deel van de component verborgen door door de auteur gecreëerde content.",
            versions: ["WCAG22"]
        },
        {
            id: "2.4.13",
            num: "2.4.13",
            guideline: "2.4",
            principle: "operable",
            level: "AAA",
            name: "Focusweergave",
            nameEn: "Focus Appearance",
            description: "Wanneer de toetsenbordfocusindicator zichtbaar is, voldoet het gebied van de focusindicator aan bepaalde minimumvereisten.",
            versions: ["WCAG22"]
        },

        // 2.5 Input Modalities
        {
            id: "2.5.1",
            num: "2.5.1",
            guideline: "2.5",
            principle: "operable",
            level: "A",
            name: "Aanwijzergebaren",
            nameEn: "Pointer Gestures",
            description: "Alle functionaliteit die gebruikmaakt van meerpunts- of padgebaseerde gebaren voor bediening, kan worden bediend met een enkele aanwijzer zonder padgebaseerd gebaar.",
            versions: ["WCAG21", "WCAG22"]
        },
        {
            id: "2.5.2",
            num: "2.5.2",
            guideline: "2.5",
            principle: "operable",
            level: "A",
            name: "Aanwijzerannulering",
            nameEn: "Pointer Cancellation",
            description: "Voor functionaliteit die kan worden bediend met een enkele aanwijzer, geldt ten minste één van de volgende: geen down-event, afbreken of ongedaan maken, omhoog omkering, essentieel.",
            versions: ["WCAG21", "WCAG22"]
        },
        {
            id: "2.5.3",
            num: "2.5.3",
            guideline: "2.5",
            principle: "operable",
            level: "A",
            name: "Label in naam",
            nameEn: "Label in Name",
            description: "Voor componenten van de gebruikersinterface met labels die tekst of afbeeldingen van tekst bevatten, bevat de naam de tekst die visueel wordt weergegeven.",
            versions: ["WCAG21", "WCAG22"]
        },
        {
            id: "2.5.4",
            num: "2.5.4",
            guideline: "2.5",
            principle: "operable",
            level: "A",
            name: "Bewegingsactivering",
            nameEn: "Motion Actuation",
            description: "Functionaliteit die kan worden bediend door beweging van het apparaat of beweging van de gebruiker kan ook worden bediend door componenten van de gebruikersinterface en het reageren op de beweging kan worden uitgeschakeld.",
            versions: ["WCAG21", "WCAG22"]
        },
        {
            id: "2.5.5",
            num: "2.5.5",
            guideline: "2.5",
            principle: "operable",
            level: "AAA",
            name: "Grootte van het aanwijsgebied (uitgebreid)",
            nameEn: "Target Size (Enhanced)",
            description: "De grootte van het doel voor aanwijzerinvoer is ten minste 44 bij 44 CSS-pixels.",
            versions: ["WCAG21", "WCAG22"]
        },
        {
            id: "2.5.6",
            num: "2.5.6",
            guideline: "2.5",
            principle: "operable",
            level: "AAA",
            name: "Gelijktijdige invoermechanismen",
            nameEn: "Concurrent Input Mechanisms",
            description: "Webcontent beperkt het gebruik van invoermodaliteiten die beschikbaar zijn op een platform niet, behalve waar de beperking essentieel is.",
            versions: ["WCAG21", "WCAG22"]
        },
        {
            id: "2.5.7",
            num: "2.5.7",
            guideline: "2.5",
            principle: "operable",
            level: "AA",
            name: "Sleepbewegingen",
            nameEn: "Dragging Movements",
            description: "Alle functionaliteit die een sleepbeweging gebruikt voor bediening kan worden bereikt door een enkel aanwijspunt zonder slepen.",
            versions: ["WCAG22"]
        },
        {
            id: "2.5.8",
            num: "2.5.8",
            guideline: "2.5",
            principle: "operable",
            level: "AA",
            name: "Grootte van het aanwijsgebied (minimum)",
            nameEn: "Target Size (Minimum)",
            description: "De grootte van het doel voor aanwijzerinvoer is ten minste 24 bij 24 CSS-pixels.",
            versions: ["WCAG22"]
        },

        // 3.1 Readable
        {
            id: "3.1.1",
            num: "3.1.1",
            guideline: "3.1",
            principle: "understandable",
            level: "A",
            name: "Taal van de pagina",
            nameEn: "Language of Page",
            description: "De standaard menselijke taal van elke webpagina kan door software bepaald worden.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "3.1.2",
            num: "3.1.2",
            guideline: "3.1",
            principle: "understandable",
            level: "AA",
            name: "Taal van onderdelen",
            nameEn: "Language of Parts",
            description: "De menselijke taal van elke passage of zin in de content kan door software bepaald worden.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "3.1.3",
            num: "3.1.3",
            guideline: "3.1",
            principle: "understandable",
            level: "AAA",
            name: "Ongebruikelijke woorden",
            nameEn: "Unusual Words",
            description: "Er is een mechanisme beschikbaar voor het identificeren van specifieke definities van woorden of zinnen die op een ongebruikelijke of beperkte manier gebruikt worden.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "3.1.4",
            num: "3.1.4",
            guideline: "3.1",
            principle: "understandable",
            level: "AAA",
            name: "Afkortingen",
            nameEn: "Abbreviations",
            description: "Er is een mechanisme beschikbaar voor het identificeren van de volledige vorm of betekenis van afkortingen.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "3.1.5",
            num: "3.1.5",
            guideline: "3.1",
            principle: "understandable",
            level: "AAA",
            name: "Leesniveau",
            nameEn: "Reading Level",
            description: "Wanneer tekst een leesniveau vereist dat hoger is dan het lager secundair onderwijsniveau, is aanvullende content of een versie beschikbaar die geen leesniveau vereist dat hoger is dan lager secundair onderwijs.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "3.1.6",
            num: "3.1.6",
            guideline: "3.1",
            principle: "understandable",
            level: "AAA",
            name: "Uitspraak",
            nameEn: "Pronunciation",
            description: "Er is een mechanisme beschikbaar voor het identificeren van een specifieke uitspraak voor woorden waar de betekenis van de woorden zonder de uitspraak dubbelzinnig is.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },

        // 3.2 Predictable
        {
            id: "3.2.1",
            num: "3.2.1",
            guideline: "3.2",
            principle: "understandable",
            level: "A",
            name: "Bij focus",
            nameEn: "On Focus",
            description: "Wanneer een component van de gebruikersinterface focus ontvangt, veroorzaakt dit geen contextwijziging.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "3.2.2",
            num: "3.2.2",
            guideline: "3.2",
            principle: "understandable",
            level: "A",
            name: "Bij invoer",
            nameEn: "On Input",
            description: "Het wijzigen van de instelling van een component van de gebruikersinterface veroorzaakt niet automatisch een contextwijziging, tenzij de gebruiker van tevoren op de hoogte is gesteld.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "3.2.3",
            num: "3.2.3",
            guideline: "3.2",
            principle: "understandable",
            level: "AA",
            name: "Consistente navigatie",
            nameEn: "Consistent Navigation",
            description: "Navigatiemechanismen die op meerdere webpagina's binnen een verzameling webpagina's worden herhaald, komen in dezelfde relatieve volgorde voor elke keer dat ze worden herhaald.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "3.2.4",
            num: "3.2.4",
            guideline: "3.2",
            principle: "understandable",
            level: "AA",
            name: "Consistente identificatie",
            nameEn: "Consistent Identification",
            description: "Componenten die dezelfde functionaliteit hebben binnen een verzameling webpagina's worden consistent geïdentificeerd.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "3.2.5",
            num: "3.2.5",
            guideline: "3.2",
            principle: "understandable",
            level: "AAA",
            name: "Wijziging op verzoek",
            nameEn: "Change on Request",
            description: "Contextwijzigingen worden alleen geïnitieerd op verzoek van de gebruiker of er is een mechanisme beschikbaar om zulke wijzigingen uit te zetten.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "3.2.6",
            num: "3.2.6",
            guideline: "3.2",
            principle: "understandable",
            level: "A",
            name: "Consistente hulp",
            nameEn: "Consistent Help",
            description: "Als een webpagina hulpmechanismen bevat, komen deze in dezelfde volgorde voor ten opzichte van andere pagina-inhoud.",
            versions: ["WCAG22"]
        },

        // 3.3 Input Assistance
        {
            id: "3.3.1",
            num: "3.3.1",
            guideline: "3.3",
            principle: "understandable",
            level: "A",
            name: "Foutidentificatie",
            nameEn: "Error Identification",
            description: "Als een invoerfout automatisch ontdekt wordt, dan wordt het item waar de fout zit geïdentificeerd en de fout wordt tekstueel aan de gebruiker beschreven.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "3.3.2",
            num: "3.3.2",
            guideline: "3.3",
            principle: "understandable",
            level: "A",
            name: "Labels of instructies",
            nameEn: "Labels or Instructions",
            description: "Labels of instructies worden geleverd wanneer content invoer van de gebruiker vereist.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "3.3.3",
            num: "3.3.3",
            guideline: "3.3",
            principle: "understandable",
            level: "AA",
            name: "Foutsuggestie",
            nameEn: "Error Suggestion",
            description: "Als een invoerfout automatisch ontdekt wordt en suggesties voor verbetering bekend zijn, dan worden de suggesties aan de gebruiker geleverd.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "3.3.4",
            num: "3.3.4",
            guideline: "3.3",
            principle: "understandable",
            level: "AA",
            name: "Foutpreventie (wettelijk, financieel, gegevens)",
            nameEn: "Error Prevention (Legal, Financial, Data)",
            description: "Voor webpagina's die wettelijke verbintenissen of financiële transacties veroorzaken, of door gebruikers te beheren gegevens wijzigen of verwijderen, gelden bepaalde voorwaarden.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "3.3.5",
            num: "3.3.5",
            guideline: "3.3",
            principle: "understandable",
            level: "AAA",
            name: "Hulp",
            nameEn: "Help",
            description: "Er is contextgevoelige hulp beschikbaar.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "3.3.6",
            num: "3.3.6",
            guideline: "3.3",
            principle: "understandable",
            level: "AAA",
            name: "Foutpreventie (alle)",
            nameEn: "Error Prevention (All)",
            description: "Voor webpagina's die vereisen dat de gebruiker informatie indient, gelden bepaalde voorwaarden.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "3.3.7",
            num: "3.3.7",
            guideline: "3.3",
            principle: "understandable",
            level: "A",
            name: "Redundante invoer",
            nameEn: "Redundant Entry",
            description: "Informatie die eerder door de gebruiker is ingevoerd of geleverd, wordt automatisch ingevuld of beschikbaar gesteld voor selectie.",
            versions: ["WCAG22"]
        },
        {
            id: "3.3.8",
            num: "3.3.8",
            guideline: "3.3",
            principle: "understandable",
            level: "AA",
            name: "Toegankelijke authenticatie (minimum)",
            nameEn: "Accessible Authentication (Minimum)",
            description: "Een cognitieve functietest is niet vereist voor enige stap in een authenticatieproces, tenzij er een alternatief of hulpmechanisme beschikbaar is.",
            versions: ["WCAG22"]
        },
        {
            id: "3.3.9",
            num: "3.3.9",
            guideline: "3.3",
            principle: "understandable",
            level: "AAA",
            name: "Toegankelijke authenticatie (uitgebreid)",
            nameEn: "Accessible Authentication (Enhanced)",
            description: "Een cognitieve functietest is niet vereist voor enige stap in een authenticatieproces.",
            versions: ["WCAG22"]
        },

        // 4.1 Compatible
        {
            id: "4.1.2",
            num: "4.1.2",
            guideline: "4.1",
            principle: "robust",
            level: "A",
            name: "Naam, rol, waarde",
            nameEn: "Name, Role, Value",
            description: "Voor alle componenten van de gebruikersinterface kunnen de naam en rol door software bepaald worden; statussen, eigenschappen en waarden die door de gebruiker ingesteld kunnen worden, kunnen door software ingesteld worden.",
            versions: ["WCAG20", "WCAG21", "WCAG22"]
        },
        {
            id: "4.1.3",
            num: "4.1.3",
            guideline: "4.1",
            principle: "robust",
            level: "AA",
            name: "Statusberichten",
            nameEn: "Status Messages",
            description: "In content geïmplementeerd met opmaaktalen kunnen statusberichten door software bepaald worden door middel van rol of eigenschappen, zodanig dat ze aan de gebruiker gepresenteerd kunnen worden door hulptechnologieën zonder focus te ontvangen.",
            versions: ["WCAG21", "WCAG22"]
        }
    ]
};

// Helper functions for filtering criteria
function getCriteriaByLevel(level) {
    return WCAG_CRITERIA.successCriteria.filter(sc => sc.level === level);
}

function getCriteriaByPrinciple(principleId) {
    return WCAG_CRITERIA.successCriteria.filter(sc => sc.principle === principleId);
}

function getCriteriaByVersion(version) {
    return WCAG_CRITERIA.successCriteria.filter(sc => sc.versions.includes(version));
}

function getCriteriaForConformanceLevel(level, version) {
    const levels = level === 'A' ? ['A'] : level === 'AA' ? ['A', 'AA'] : ['A', 'AA', 'AAA'];
    return WCAG_CRITERIA.successCriteria.filter(sc =>
        levels.includes(sc.level) && sc.versions.includes(version)
    );
}
