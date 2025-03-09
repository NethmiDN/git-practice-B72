console.log("attributes modifications loaded");

const link = document.querySelector('a');
console.log(link.getAttribute('href'));

link.setAttribute('href', 'https://www.facebook.com/');
link.setAttribute('target', '_blank');
link.removeAttribute('target');
console.log(link);