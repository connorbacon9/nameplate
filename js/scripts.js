
// Activate JQUERY
console.log('OK');

$('h1').lettering();

// Make backstretch work

$.backstretch('/nameplate/img/sunrise.png');

$('.tiles').masonry({
  // options
  itemSelector: 'section',
  columnWidth: 0,
  gutter: 5
});