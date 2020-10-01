
$(document).ready(function() {
  $('body').css('display', 'none');
  $('body').fadeIn(1000);

  $('.link').click(function() {
    event.preventDefault();

    newLocation = $(this).find('a').attr('href');
    console.log(newLocation)
    $('body').fadeOut(500, newPage);
  });

  function newPage() {
    window.location = newLocation;
  }
});