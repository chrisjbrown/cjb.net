(function($){

  function loadIndex() {
    $('body').load('views/index.html', function() {
      $.scrollIt();
      $('a[rel=tipsy]').tipsy({fade: true});

      $('#resume').on('click', function() {
        $('body').load('views/resume.html', function() {

          $('a[rel=tipsy]').tipsy({fade: true});
          
          $('#dropboxSave').click(function(){
            Dropbox.save('images/ChristopherBrown-resume.pdf', 'ChristopherBrown-resume');
          });

          $('#index').on('click', function() {
            loadIndex();
          });
        });
      });
    });
  }

  loadIndex();

  $('#index').on('click', function() {
    loadIndex();
  });
})(jQuery);
