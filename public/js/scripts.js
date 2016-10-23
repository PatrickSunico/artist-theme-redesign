$(function() {
  smoothScroll(300);
  workBelt();
  workLoad();
  client();
  clientAnimation();

});

function smoothScroll (duration) {
  $('a.thumb-unit').on('click', function(event) {
    var target = $($(this).attr('href'));

    if(target.length) {
      console.log(target.length);
      event.preventDefault();
      $('html,body').animate( {
        scrollTop: target.offset().top
      }, duration);
    }
  });
}

function workBelt() {
  $('a.thumb-unit').click(function(e) {
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

// Loader
function workLoad() {
  $.ajaxSetup({cache: true});

  $('.thumb-unit').click(function() {

    var self = $(this),
    newTitle = self.find('div.text-overlay h4').text(),
    author = self.find('div.text-overlay h5').text(),
    spinner = '<div class="loader">Loading...</div>',

    newFolder = self.data('folder'), // refers to data-folder="work-1" inside of the portfolio section
    newHTML = '../loaders/'+ newFolder +'.html'; // loads a specific project on click
    $('.project-load').html(spinner).load(newHTML);

    // New Title and Author Credenditals
    $('.project-name').text(newTitle);
    $('.author').text(author);

  });
}

function client() {
  $('.client-unit').first().addClass('active-client');
  $('.client-logo').first().addClass('active-client');
}

// $(window).load(function(){
//     setTimeout(function() {
//       $('.text-container').fadeIn('2000');
//     }, 100);
//   });

// function clientAnimation() {
//   setInterval(function() {
//     $('.clients-belt .client-unit').fadeIn('2000');
//   }, 100);
// }
