/* Устанавливаем индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд*/
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Уменьшает индекс на 1 — показываем предыдущий слайд*/
function previousSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливаем текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания */
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("main__slider-item");
    
    if (n > slides.length) {
    slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

/* Проходим по каждому слайду в цикле for */
    for (let slide of slides) {
        slide.style.display = "none";
    }   
    slides[slideIndex - 1].style.display = "flex"; 
}

/* Устанавливаем индекс слайда по умолчанию */
let slideIndexPlus = 1;
showSlidesPlus(slideIndexPlus);

/* Увеличиваем индекс на 1 — показываем следующий слайд*/
function nextSlidePlus() {
    showSlidesPlus(slideIndexPlus += 1);
}

/* Уменьшает индекс на 1 — показываем предыдущий слайд*/
function previousSlidePlus() {
    showSlidesPlus(slideIndexPlus -= 1);  
}

/* Устанавливаем текущий слайд */
function currentSlidePlus(n) {
    showSlidesPlus(slideIndexPlus = n);
}

/* Функция перелистывания */
function showSlidesPlus(n) {
    let i;
    let slidesPlus = document.getElementsByClassName("main__location-slider-item");
    
    if (n > slidesPlus.length) {
    slideIndexPlus = 1
    }
    if (n < 1) {
        slideIndexPlus = slidesPlus.length
    }

/* Проходим по каждому слайду в цикле for */
    for (let slidePlus of slidesPlus) {
        slidePlus.style.display = "none";
    }   
    slidesPlus[slideIndexPlus - 1].style.display = "flex"; 
}

/* Устанавливаем индекс слайда по умолчанию */
let slideIndexGallery = 1;
showSlidesGallery(slideIndexGallery);

/* Увеличиваем индекс на 1 — показываем следующий слайд*/
function nextSlideGallery() {
    showSlidesGallery(slideIndexGallery += 1);
}

/* Уменьшает индекс на 1 — показываем предыдущий слайд*/
function previousSlideGallery() {
    showSlidesGallery(slideIndexGallery -= 1);  
}

/* Устанавливаем текущий слайд */
function currentSlideGallery(n) {
    showSlidesGallery(slideIndexGallery = n);
}

/* Функция перелистывания */
function showSlidesGallery(n) {
    let i;
    let slidesGallery = document.getElementsByClassName("main__gallery-item");
    
    if (n > slidesGallery.length) {
    slideIndexGallery = 1
    }
    if (n < 1) {
        slideIndexGallery = slidesGallery.length
    }

/* Проходим по каждому слайду в цикле for */
    for (let slideGallery of slidesGallery) {
        slideGallery.style.display = "none";
    }   
    slidesGallery[slideIndexGallery - 1].style.display = "flex"; 
}

$('.part, .description').hover (
	function() {
		$('.description').html($(this).attr('description-data'));
		$('.description').stop().fadeIn();
	},
    function() {
		$('.description').stop().fadeOut();
	}
)

$('.main__booking-pos-1').hover (
    function(){
        $('.description').addClass('active-pos-1');
    }
)
$('.main__booking-pos-2').hover (
    function(){
        $('.description').addClass('active-pos-2');
    }
)
$('.main__booking-pos-3').hover (
    function(){
        $('.description').addClass('active-pos-3');
    }
)


$(document).ready(function() {

	// Функция открытия модального окна

	$(".modal-link").on("click", function() {

		$('.modal-overlay[data-modal-id="'+$(this).data('modal-id')+'"]').addClass("modal-overlay_visible");

	});

	// Функция закрытия модального окна нажатием на кнопку

	$(".modal__close").on("click", function() {

		$(".modal-overlay").removeClass("modal-overlay_visible");

	});

	// Функция закрытия модального окна нажатием вне окна

	$(document).on("click", function(e) {

		if(!$(e.target).closest(".modal").length && !$(e.target).closest(".modal-link").length && $(e.target).closest(".modal-overlay").length) {

			$(".modal-overlay").removeClass("modal-overlay_visible");

		}

	});

});
$('.main__materials-i').hover (
	function() {
		$('.main__materials-item').stop().fadeIn();
	},
    function() {
		$('.main__materials-item').stop().fadeOut();
	}
)

/* Индекс слайда по умолчанию */
var slideIndexCottages = 1;
showSlidesCottages(slideIndexCottages);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlideCottages() {
    showSlidesCottages(slideIndexCottages += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlideCottages() {
    showSlidesCottages(slideIndexCottages -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlideCottages(n) {
    showSlidesCottages(slideIndexCottages = n);
}

/* Основная функция сладера */
function showSlidesCottages(n) {
    var i;
    var slidesCottages = document.getElementsByClassName("main__cottages_slider-item");
    var dotsCottages = document.getElementsByClassName("slider-dots_item");
    if (n > slidesCottages.length) {
      slideIndexCottages = 1
    }
    if (n < 1) {
        slideIndexCottages = slidesCottages.length
    }
    for (i = 0; i < slidesCottages.length; i++) {
        slidesCottages[i].style.display = "none";
    }
    for (i = 0; i < dotsCottages.length; i++) {
        dotsCottages[i].className = dotsCottages[i].className.replace(" active", "");
    }
    slidesCottages[slideIndexCottages - 1].style.display = "block";
    dotsCottages[slideIndexCottages - 1].className += " active";
}


/* Индекс слайда по умолчанию */
var slideIndexDuplex = 1;
showSlidesDuplex(slideIndexDuplex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlideDuplex() {
    showSlidesDuplex(slideIndexDuplex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlideDuplex() {
    showSlidesDuplex(slideIndexDuplex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlideDuplex(n) {
    showSlidesDuplex(slideIndexDuplex = n);
}

/* Основная функция слайдера */
function showSlidesDuplex(n) {
    var i;
    var slidesDuplex = document.getElementsByClassName("main__duplex_slider-item");
    var dotsDuplex = document.getElementsByClassName("slider-dots_item");
    if (n > slidesDuplex.length) {
      slideIndexDuplex = 1
    }
    if (n < 1) {
        slideIndexDuplex = slidesDuplex.length
    }
    for (i = 0; i < slidesDuplex.length; i++) {
        slidesDuplex[i].style.display = "none";
    }
    for (i = 0; i < dotsDuplex.length; i++) {
        dotsDuplex[i].className = dotsDuplex[i].className.replace(" active", "");
    }
    slidesDuplex[slideIndexDuplex - 1].style.display = "block";
    dotsDuplex[slideIndexDuplex - 1].className += " active";
}

$(function() {
    $('.main__questions_answers li').click(function() {
        if ($(this).children('.main__questions_answers-hide-block').hasClass('open')) {
          $(this).children('.main__questions_answers-hide-block').slideUp('fast').removeClass('open');
          return;
        }
       $('.main__questions_answers-hide-block').slideUp('fast').removeClass('open');
       $(this).children('.main__questions_answers-hide-block').slideDown("fast").addClass('open');
    });
  });