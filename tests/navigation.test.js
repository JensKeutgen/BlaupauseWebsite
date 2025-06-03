const fs = require('fs');
const path = require('path');
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const headerHtml = fs.readFileSync(path.join(__dirname, '..', 'header.html'), 'utf8');
const footerHtml = fs.readFileSync(path.join(__dirname, '..', 'footer.html'), 'utf8');
const { highlightActiveNavLink } = require('../js/main');

describe('highlightActiveNavLink', () => {
  test('marks the correct navigation link as active', () => {
    document.body.innerHTML = '<header></header><footer></footer>';
    document.querySelector('header').innerHTML = headerHtml;
    document.querySelector('footer').innerHTML = footerHtml;

    // Pfad der aktuellen Seite simulieren
    window.history.pushState({}, '', '/skript/index.html');

    highlightActiveNavLink('../');

    const activeLink = document.querySelector('header nav ul li a.active');
    expect(activeLink).not.toBeNull();
    expect(activeLink.id).toBe('nav-skript');
  });
});
