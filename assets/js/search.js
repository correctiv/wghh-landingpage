var input = document.getElementById("street");

if (input != null) {
  var awesomplete = new Awesomplete(input, {
    minChars: 1,
    autoFirst: true
  });

  jQuery(input).on("keyup", function(){
    jQuery.ajax({
      url: 'https://wghh-census-api.apps.correctiv.org/suggest?q=' + this.value,
      type: 'GET',
      dataType: 'json'
    })
    .done(function(data) {
      awesomplete.list = data['data'];
      jQuery("li[aria-selected='true']").attr("aria-selected", "false");
    });
  });

  jQuery(input).on('awesomplete-selectcomplete',function(){
    jQuery(".step-input").animate({opacity:1},500);
  });

  jQuery("#hausnummer").on("keyup", function(){
    jQuery("#submit").animate({opacity:1},500);
  });
}
