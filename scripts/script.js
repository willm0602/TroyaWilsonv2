var firstTime = localStorage.getItem("first_time");

test = document.getElementsByClassName('big-name-1');

if(!firstTime) {
$('.big-name-1').fadeTo(1000 ,1);
$('.big-name-2').delay(2000).fadeTo(6000 ,1);
$('.big-name-3').delay(2000).fadeTo(7000 ,1);
$('.big-name-4').delay(2000).fadeTo(8000 ,1);
$('.big-name-g').delay(2000).fadeTo(8000 ,1);
$('.big-name-5').delay(2000).fadeTo(9000 ,1);
$('.big-name-k').delay(2000).fadeTo(10000 ,1);
$('.big-name-6').delay(4500).fadeTo(10000 ,1);
$('.big-name-7').delay(4500).fadeTo(11000 ,1);
$('.big-name-8').delay(4500).fadeTo(12000 ,1);
$('.big-name-9').delay(4500).fadeTo(13000 ,1);
$('.big-name-10').delay(4500).fadeTo(14000 ,1);
$('.big-name-11').delay(4500).fadeTo(15000 ,1);

$('.menu-1').delay(6000).fadeTo(3600,1);
$('.about-text').delay(6000).fadeTo(3600,1);
$('.work-box').delay(6000).fadeTo(3600,1);
$('.skills').delay(6000).fadeTo(3600,1);

localStorage.setItem("first_time","1");
console.log(localStorage.getItem("first_time"));
}
else {
  $('.big-name-1').fadeTo(1000 ,1);
  $('.big-name-1').addClass('load-name');
  $('.big-name-1').removeClass('big-name-1');

  $('.big-name-2').fadeTo(1000 ,1);
  $('.big-name-2').addClass('load-name');
  $('.big-name-2').removeClass('big-name-2');

  $('.big-name-3').fadeTo(1000 ,1);
  $('.big-name-3').addClass('load-name');
  $('.big-name-3').removeClass('big-name-3');

  $('.big-name-4').fadeTo(1000 ,1);
  $('.big-name-4').addClass('load-name');
  $('.big-name-4').removeClass('big-name-4');

  $('.big-name-g').fadeTo(1000 ,1);
  $('.big-name-g').addClass('load-name');
  $('.big-name-g').removeClass('big-name-g');

  $('.big-name-5').fadeTo(1000 ,1);
  $('.big-name-5').addClass('load-name');
  $('.big-name-5').addClass('pink');
  $('.big-name-5').removeClass('big-name-5');

  $('.big-name-k').fadeTo(1000 ,1);
  $('.big-name-k').addClass('load-name');
  $('.big-name-k').removeClass('big-name-k');

  $('.big-name-6').fadeTo(1000 ,1);
  $('.big-name-6').addClass('load-name');
  $('.big-name-6').removeClass('big-name-6');

  $('.big-name-7').fadeTo(1000 ,1);
  $('.big-name-7').addClass('load-name');
  $('.big-name-7').removeClass('big-name-7');

  $('.big-name-8').fadeTo(1000 ,1);
  $('.big-name-8').addClass('load-name');
  $('.big-name-8').removeClass('big-name-8');

  $('.big-name-9').fadeTo(1000 ,1);
  $('.big-name-9').addClass('load-name');
  $('.big-name-9').removeClass('big-name-9');

  $('.big-name-10').fadeTo(1000 ,1);
  $('.big-name-10').addClass('load-name');
  $('.big-name-10').removeClass('big-name-10');

  $('.big-name-11').fadeTo(1000 ,1);
  $('.big-name-11').addClass('load-name');
  $('.big-name-11').removeClass('big-name-11');

  $('.menu-1').fadeTo(1000 ,1);
  $('.about-text').fadeTo(1000 ,1);
  $('.work-box').fadeTo(1000 ,1);
  $('.skills').fadeTo(1000 ,1);
  
  console.log(localStorage.getItem("first_time"));

}
