# Kurs-Website Blaupause

Dies ist eine Blaupause für die Erstellung einer statischen Website für einen Bildungskurs, die auf GitHub Pages gehostet werden soll. Jeder Kurs sollte idealerweise in einem eigenen Repository liegen und diese Blaupause als Grundlage verwenden.

## Struktur der Website

Die Website ist in mehrere Hauptbereiche unterteilt:

-   **Startseite (`index.html`):** Die Haupt-Landingpage des Kurses.
-   **Skript (`/skript`):** Enthält interaktive Lernmaterialien und theoretische Inhalte.
-   **Stunden (`/stunden`):** Detaillierte Aufbereitung einzelner Unterrichtsstunden mit Einstieg, Aufgaben und Zusammenfassungen.
-   **Aufgaben (`/aufgaben`):** Interaktive Übungsaufgaben, Quizze und Lernspiele.
-   **Impressum (`impressum.html`):** Rechtliche Hinweise.
-   **Datenschutz (`datenschutz.html`):** Informationen zum Datenschutz.

## Technische Details

-   **Statische Seiten:** Die Website besteht aus reinen HTML-, CSS- und JavaScript-Dateien. Es wird keine serverseitige Logik oder Datenbank benötigt.
-   **Lokale Abhängigkeiten:** Alle notwendigen Bibliotheken (wie `normalize.css`) sind lokal im Repository gespeichert, um externe Serveranfragen und unnötige Cookies zu vermeiden.
-   **Styling:**
    -   `css/normalize.css`: Setzt Browser-Standardstile zurück.
    -   `css/style.css`: Enthält das Grundlayout, Stile für Header, Footer und allgemeine Elemente.
    -   `css/themes/`: Enthält spezifische Farbschemata für die Hauptbereiche (Skript, Stunden, Aufgaben).
        -   `skript-theme.css` (Blautöne)
        -   `stunden-theme.css` (Grüntöne)
        -   `aufgaben-theme.css` (Orangetöne)
-   **JavaScript:**
    -   `js/main.js`: Für allgemeine, seitenübergreifende Skripte.
    -   Spezifische JS-Dateien im `js/`-Ordner (z.B. `quiz-script.js`, `interactive-element1.js`) sind für einzelne interaktive Elemente oder Funktionen gedacht. Diese sollten bei Bedarf in den entsprechenden HTML-Seiten eingebunden werden.

## Eine neue HTML-Seite erstellen (Anleitung für ein LLM oder menschliche Bearbeiter)

Um eine neue HTML-Seite, zum Beispiel ein neues Thema im Skript-Bereich, hinzuzufügen, gehen Sie wie folgt vor:

1.  **Datei erstellen:**
    * Navigieren Sie in den entsprechenden Ordner (z.B. `skript/`).
    * Erstellen Sie eine neue HTML-Datei (z.B. `neues-thema.html`).

2.  **Grundstruktur kopieren:**
    * Öffnen Sie eine bestehende Seite aus demselben Ordner (z.B. `skript/thema1.html`) oder die `index.html` des jeweiligen Bereichs (z.B. `skript/index.html`).
    * Kopieren Sie den gesamten Inhalt dieser Datei in Ihre neue Datei (`neues-thema.html`).

3.  **Titel anpassen:**
    * Ändern Sie den Inhalt des `<title>`-Tags in der neuen Datei, z.B.:
        ```html
        <title>Kurstitel - Skript: Neues Thema</title>
        ```

4.  **Navigationspfade und CSS-Pfade überprüfen:**
    * Stellen Sie sicher, dass alle Pfade zu CSS-Dateien, JavaScript-Dateien und Links im Header/Footer korrekt sind, basierend auf der Position der neuen Datei in der Ordnerstruktur.
        * Wenn sich die neue Datei in einem Unterordner wie `skript/` befindet, beginnen Pfade zu `css/`, `js/` und zur Haupt-`index.html` mit `../`.
        * Links zu anderen Seiten im *selben* Ordner benötigen kein `../`.
        * Beispiel: In `skript/neues-thema.html` verlinkt man auf die Startseite mit `../index.html` und auf die Haupt-CSS-Datei mit `../css/style.css`.

5.  **Theme-CSS einbinden (falls zutreffend):**
    * Stellen Sie sicher, dass das korrekte Theme-CSS für den Bereich eingebunden ist. Für eine Seite im `skript/`-Ordner sollte dies sein:
        ```html
        <link rel="stylesheet" href="../css/themes/skript-theme.css">
        ```

6.  **Aktiven Navigationslink markieren:**
    * Identifizieren Sie den Navigationslink im `<header>`, der zum aktuellen Bereich gehört. Fügen Sie diesem `<a>`-Tag die Klasse `active` hinzu. Entfernen Sie die Klasse `active` von anderen Links, falls sie kopiert wurde.
        ```html
        <nav>
            <ul>
                <li><a href="index.html" id="nav-skript" class="active">Skript</a></li>
                <li><a href="../stunden/index.html" id="nav-stunden">Stunden</a></li>
                <li><a href="../aufgaben/index.html" id="nav-aufgaben">Aufgaben</a></li>
            </ul>
        </nav>
        ```
        *Hinweis: Wenn die neue Seite eine Unterseite von z.B. `skript/index.html` ist, dann ist der Link zu `skript/index.html` `index.html` und nicht `../skript/index.html`.*

7.  **Inhalt einfügen:**
    * Ersetzen Sie den Platzhalter-Inhalt im `<main>`-Bereich durch Ihren spezifischen Inhalt für die neue Seite.
        ```html
        <main>
            <div class="container">
                <h1>Titel des neuen Themas</h1>
                <p>Hier kommt der Inhalt des neuen Themas...</p>
                </div>
        </main>
        ```

8.  **Interaktive Elemente einbinden (falls benötigt):**
    * Wenn die Seite spezifische JavaScript-Funktionalität benötigt:
        1.  Erstellen Sie eine neue `.js`-Datei im `js/`-Ordner (z.B. `js/neues-feature.js`).
        2.  Schreiben Sie Ihren JavaScript-Code in diese Datei.
        3.  Binden Sie diese Datei am Ende des `<body>`-Tags Ihrer neuen HTML-Seite ein:
            ```html
            <script src="../js/neues-feature.js"></script>
            </body>
            </html>
            ```
            (Passen Sie den Pfad `../js/` bei Bedarf an).

9.  **Verlinkung:**
    * Fügen Sie auf der Übersichtsseite des Bereichs (z.B. `skript/index.html`) einen Link zu Ihrer neu erstellten Seite hinzu.

10. **Testen:**
    * Öffnen Sie die neue HTML-Seite in einem Browser, um sicherzustellen, dass alles korrekt angezeigt wird und alle Links funktionieren.

## Deployment auf GitHub Pages

1.  Stellen Sie sicher, dass Ihr Repository den oben beschriebenen Aufbau hat.
2.  Pushen Sie Ihre Änderungen in das `main` (oder `master`) Branch Ihres GitHub-Repositorys.
3.  Gehen Sie in Ihrem GitHub-Repository zu "Settings" -> "Pages".
4.  Unter "Build and deployment" wählen Sie als Quelle "Deploy from a branch".
5.  Wählen Sie den Branch (üblicherweise `main`) und den Ordner (`/ (root)`) aus und klicken Sie auf "Save".
6.  Nach kurzer Zeit sollte Ihre Website unter `https://<IhrGitHubName>.github.io/<IhrRepositoryName>/` erreichbar sein.

Dieser strukturierte Ansatz sollte es Ihnen ermöglichen, Ihre Kursinhalte klar zu organisieren und leicht zu erweitern.