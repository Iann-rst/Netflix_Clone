/**
 * loop - propriedade para as img ficar em loop, ao passar para o lado.
 * margin - margem entre as imagens do carrossel.
 * nav - barra de navegação em baixo das imagens do carrossel.
 * responsive - quantidade de imagens de acordo com o tamanho da tela.
 */

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})