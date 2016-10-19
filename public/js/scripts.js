$(function() {
  smoothScroll(300);
  workBelt();
});

function smoothScroll (duration) {
  $('a.thumb-unit').on('click', function(event) {
    console.log("Hello");
    var target = $($(this).attr('href'));

    if(target.length) {
      event.preventDefault();
      $('html,body').animate( {
        scrollTop: target.offset().top
      }, duration);
    }
  });
}

function workBelt() {
  $('.thumb-unit').click(function(e) {
      $('.work-belt').css('left', '-100%');
      $('.work-container').show();
      e.preventDefault();
  });

  $('svg.back-icon').click(function(e) {
    $('.work-belt').css('left', '0%');
    $('.work-container').hide(800);
    e.preventDefault();

  });
}
