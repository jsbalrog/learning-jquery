$(document).ready(function() {
  // apply class to top-level list items only
  $('#selected-plays > li').addClass('horizontal');

  // apply to all descendent list items that do not have a class of .horizontal
  $('#selected-plays li:not(.horizontal)').addClass('sub-level');

  // apply to all a links with href attrs that start with mailto
  $('a[href^="mailto:"]').addClass('mailto');

  // apply to all a links with href attrs that end with .pdf
  $('a[href$=".pdf"]').addClass('pdflink');

  // apply to all a links with hrefs that both start with http and contain henry anywhere
  $('a[href^="http"][href*="henry"]').addClass('henrylink');
});
