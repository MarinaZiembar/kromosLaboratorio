

 $(document).ready(function(){

  //funcion para menu hamburguesa
    $(".hamburger_btn").click(function(){
    $(this).toggleClass("active");
    $(".menu").toggleClass("active");
  });

  //funcion para iframe del mapa de CONTACTO
  if ($(window).width() < 767){
    $('iframe').attr('width','310px')
    .attr('height','250px');
  }
  else if($(window).width() > 1500){
    $('iframe').attr('width','600px')
    .attr('height','400px');
  }else{
    $('iframe').attr('width','400px')
    .attr('height','300px');
  }

  //funcion para mailto en FOOTER
  if ($(window).width() > 767){
    $(function () {
      $('.mailto').on("click", function (e) {
          e.preventDefault();
      });
  });
  }

});

