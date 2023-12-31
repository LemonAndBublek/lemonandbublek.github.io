window.onload = function () {
  let start = false;
  function slicker() {
      let vw = window.innerWidth;
      let vh = window.innerHeight;
      console.log(vh, vw);
      if (start) {
          $('.autoplay').slick('unslick');
          $('.autoplay2').slick('unslick');
      }

      if (vw >= 1000) {
          $('.autoplay').slick({
              arrows: false,
              dots: true,
              infinite: true,
              slidesToShow: 5,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,
          });
          setTimeout(function(){
            $('.autoplay2').slick({
              arrows: false,
              dots: true,
              infinite: true,
              slidesToShow: 5,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,
            });
          },800);
      } else if (vw >= 600) {
        $('.autoplay').slick({
              arrows: false,
              dots: true,
              infinite: true,
              slidesToShow: 3,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,
      });
      setTimeout(function(){
        $('.autoplay2').slick({
          arrows: false,
          dots: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        });
      },800);
    } else if (vw <=480) {
          $('.autoplay').slick({
              arrows: false,
              dots: true,
              infinite: true,
              slidesToShow: 2,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,

          });
          setTimeout(function(){
            $('.autoplay2').slick({
              arrows: false,
              dots: true,
              infinite: true,
              slidesToShow: 2,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,
            });
          },800);
      }
  }
  slicker();
  start = true;

  window.addEventListener("resize", function () {
      slicker();
  });
};

$('.mob_menu').on('click', function(){
  $('body').toggleClass('menu_active');
});

$(".formcarryForm").submit(function (e) {
  var form = $(this);
  var href = form.attr("action");
  e.preventDefault();

  $.ajax({
  type: "POST",
  url: href,
  data: new FormData(this),
  dataType: "json",
  processData: false,
  contentType: false,
  success: function (response) {
      if (response.code === 200) {
      alert("Sended successfully");

      form[0].reset();
      } else {
      alert("Error: " + response.message);
      }
  },
  error: function (err, textStatus) {
      const error = err.responseJSON;

      $.each(error.errors, function (key) {
      var field = $('[name="' + key + '"]');
      field.addClass("fc-field-error");
      });

      alert(
      "Request fail, " +
          errorObject.title +
          ": " +
          errorObject.message
      );
  },
  complete: function () {},
  });
});
