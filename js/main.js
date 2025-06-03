// js/main.js

function getBasePath() {
    const pathSegments = window.location.pathname.split('/');
    // Grundpfad ist im Hauptverzeichnis
    let basePath = '';

    // Wenn wir uns in einem Unterverzeichnis befinden
    if (pathSegments.length > 2) {
        basePath = '../'.repeat(pathSegments.length - 2);
    }
    return basePath;
 }

 function loadHeaderAndFooter() {
    const basePath = getBasePath();

    fetch(basePath + 'header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data;
            // Nach dem Laden des Headers: Navigation anpassen
            adjustHeaderNavLinks(basePath);
            highlightActiveNavLink(basePath);
        });

    fetch(basePath + 'footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('footer').innerHTML = data;
        });
 }

 function adjustHeaderNavLinks(basePath) {
    const headerNavLinks = document.querySelectorAll('header nav ul li a');
    headerNavLinks.forEach(link => {
        let href = link.getAttribute('href');
        // Passe den Linkpfad an, außer wenn es ein absoluter Pfad oder ein Anker ist
        if (!href.startsWith('http') && !href.startsWith('#') && !href.startsWith('javascript:')) {
            link.setAttribute('href', basePath + href);
        }
    });
 }

 function highlightActiveNavLink(basePath) {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('header nav ul li a');

    navLinks.forEach(link => {
        let linkPath = link.getAttribute('href');

        // Normalisiere Pfade: Entferne "/index.html" am Ende, falls vorhanden
        const normalizedCurrentPath = currentPath.endsWith('index.html') ? currentPath.slice(0, -10) : currentPath;
        const normalizedLinkPath = linkPath.endsWith('index.html') ? linkPath.slice(0, -10) : linkPath;

        // Vergleiche normalisierte Pfade
        if (normalizedLinkPath === normalizedCurrentPath ||
            (normalizedCurrentPath.endsWith('/') && normalizedLinkPath === normalizedCurrentPath.slice(0, -1)) ||
            (normalizedLinkPath === basePath + 'index.html' && (normalizedCurrentPath === basePath || normalizedCurrentPath === basePath.slice(0, -1))) ||
            (normalizedLinkPath === 'index.html' && normalizedCurrentPath === basePath.slice(0, -1))) {
            link.classList.add('active');
        }
    });
 }

 // Laden von Header und Footer beim Laden der Seite
document.addEventListener('DOMContentLoaded', loadHeaderAndFooter);

// Export für Tests
if (typeof module !== 'undefined') {
    module.exports = { highlightActiveNavLink };
}
