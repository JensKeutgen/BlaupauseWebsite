// js/interactive-element1.js
// Beispiel: Ein einfacher aufklappbarer Textbereich (Accordion)

document.addEventListener('DOMContentLoaded', function() {
    const accordions = document.querySelectorAll('.accordion-toggle');

    accordions.forEach(accordion => {
        accordion.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                content.style.padding = "0 15px"; // Beim Schließen Padding entfernen
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.padding = "15px"; // Beim Öffnen Padding hinzufügen
            }
        });
    });
});

// HTML-Struktur für dieses Element (z.B. in einer Skript-Seite):
/*
<div class="accordion-item">
    <button class="accordion-toggle">Abschnitt 1 anzeigen/verbergen</button>
    <div class="accordion-content">
        <p>Dies ist der Inhalt von Abschnitt 1...</p>
    </div>
</div>
<div class="accordion-item">
    <button class="accordion-toggle">Abschnitt 2 anzeigen/verbergen</button>
    <div class="accordion-content">
        <p>Dies ist der Inhalt von Abschnitt 2...</p>
    </div>
</div>
*/

// CSS für dieses Element (kann in style.css oder einem spezifischen Komponenten-CSS sein):
/*
.accordion-item {
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

.accordion-toggle {
    background-color: #eee;
    color: #444;
    cursor: pointer;
    padding: 15px;
    width: 100%;
    text-align: left;
    border: none;
    outline: none;
    transition: background-color 0.2s ease;
    font-size: 1rem;
}

.accordion-toggle:hover, .accordion-toggle.active {
    background-color: #ccc;
}

.accordion-toggle.active::before { // Optional: Pfeil-Indikator
    content: '\25BC'; // Pfeil nach unten
    margin-right: 10px;
}

.accordion-toggle::before { // Optional: Pfeil-Indikator
    content: '\25B6'; // Pfeil nach rechts
    margin-right: 10px;
}

.accordion-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out, padding 0.3s ease-out;
    background-color: white;
    padding: 0 15px; // Wichtig für die Transition
    border-top: 1px solid #ddd;
}
*/