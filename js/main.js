// js/main.js

// Beispiel: Aktiven Navigationslink hervorheben (Alternative zur reinen CSS-Lösung, falls komplexer)
// Diese Version ist nicht zwingend notwendig, wenn die 'active' Klasse serverseitig/manuell im HTML gesetzt wird.
// document.addEventListener('DOMContentLoaded', function() {
//     const currentPath = window.location.pathname.split('/').pop();
//     const navLinks = document.querySelectorAll('header nav ul li a');

//     navLinks.forEach(link => {
//         const linkPath = link.getAttribute('href').split('/').pop();
//         if (linkPath === currentPath || (currentPath === '' && link.getAttribute('href') === 'index.html')) {
//             link.classList.add('active');
//         }
//     });
// });

// Hier könnten weitere globale Skripte stehen, z.B. für ein mobiles Menü, Cookie-Banner (obwohl Sie keine Cookies wollen) etc.
// Da Sie keine externen Server und unnötige Cookies anstreben, halten Sie dies minimal.
console.log("Haupt-JavaScript geladen.");