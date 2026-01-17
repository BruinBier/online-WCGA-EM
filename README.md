# WCAG-EM Rapport Tool

Een client-side webapplicatie voor het uitvoeren van toegankelijkheidsevaluaties volgens de WCAG-EM methodologie (Website Accessibility Conformance Evaluation Methodology).

## Functionaliteiten

Deze tool helpt bij het systematisch evalueren van websites op toegankelijkheid en het genereren van gestructureerde rapporten.

### 5 Stappen Evaluatieproces

1. **Scope definiëren** - Definieer de website, het WCAG conformiteitsniveau (A, AA, AAA) en de WCAG versie (2.0, 2.1, 2.2)
2. **Doelwebsite verkennen** - Identificeer essentiële functionaliteiten, gebruikte technologieën en hulpmiddelen
3. **Steekproef selecteren** - Selecteer representatieve pagina's voor evaluatie (gestructureerd en willekeurig)
4. **Steekproef auditen** - Evalueer elke pagina tegen alle relevante WCAG succescriteria
5. **Rapport genereren** - Bekijk samenvatting en exporteer als HTML of JSON

### Kenmerken

- **Volledig client-side** - Draait geheel in de browser, geen server vereist
- **Alle WCAG 2.2 criteria** - Bevat alle 86 succescriteria met Nederlandse vertalingen
- **Opslaan/Laden** - Sla evaluaties op als JSON en laad ze later opnieuw
- **Auto-save** - Automatische opslag in localStorage tijdens het werken
- **HTML export** - Genereer een professioneel HTML rapport
- **Responsive design** - Werkt op desktop, tablet en mobiel
- **Filteropties** - Filter criteria op principe, niveau of resultaat
- **Voortgangsindicatoren** - Bekijk de voortgang van de evaluatie

## Gebruik

1. Open `index.html` in een moderne webbrowser
2. Doorloop de 5 stappen van het evaluatieproces
3. Sla je werk regelmatig op met de "Evaluatie opslaan" knop
4. Exporteer het eindrapport als HTML of JSON

## Technische details

- Pure HTML, CSS en JavaScript (geen frameworks of afhankelijkheden)
- Ondersteunt WCAG 2.0, 2.1 en 2.2
- Alle conformiteitsniveaus (A, AA, AAA)
- JSON data formaat compatibel met EARL (Evaluation and Report Language)

## Gebaseerd op

Deze tool is gebaseerd op de [W3C WAI WCAG-EM Report Tool](https://www.w3.org/WAI/eval/report-tool/) en volgt de [WCAG-EM methodologie](https://www.w3.org/WAI/test-evaluate/conformance/wcag-em/).

## Licentie

Open source - vrij te gebruiken en aan te passen.
