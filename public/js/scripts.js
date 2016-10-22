<<<<<<< HEAD
function smoothScroll(t){$("a.thumb-unit").on("click",function(o){var e=$($(this).attr("href"));e.length&&(console.log(e.length),o.preventDefault(),$("html,body").animate({scrollTop:e.offset().top},t))})}function workBelt(){$(".thumb-unit").click(function(t){$(".work-belt").css("left","-100%"),$(".work-container").show(),t.preventDefault()}),$("svg.back-icon").click(function(t){$(".work-belt").css("left","0%"),$(".work-container").hide(800),t.preventDefault()})}function workLoad(){$.ajaxSetup({cache:!0}),$(".thumb-unit").click(function(){var t=$(this),o=t.find(".overlay-text h4").text(),e=t.find(".overlay-text h5").text(),l='<div class="loader">Loading...</div>',n=t.data("folder"),c="loaders/"+n+".html";$(".project-load").html(l).load(c),$(".project-title").text(o),$(".author").text(e)})}$(function(){smoothScroll(300),workBelt(),workLoad()});
=======
$(function() {
  smoothScroll(300);
  workBelt();
  workLoad();

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
>>>>>>> test-branch
