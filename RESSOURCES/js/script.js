


var swiper = new Swiper('.sc1', {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.sp1',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
 



var swiper = new Swiper('.sc2', {
    slidesPerView: 6.5,
    spaceBetween: 10,
    freeMode: true,
    pagination: {
      el: '.sp2',
      clickable: true,
    },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

var swiper = new Swiper('.sc3', {
    slidesPerView: 2.5,
    spaceBetween: 10,
    freeMode: true,
    pagination: {
      el: '.sp2',
      clickable: true,
    },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}