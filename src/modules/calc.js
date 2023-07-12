

export const mult = (a, b) => a * b;
export const sum = async(a, b) => a + b;

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

let a = 3;
let down = document.getElementById('down');
down.addEventListener('click', showAll);

function showAll (){
  let width = document.body.clientWidth;
  if ((a % 2 == 1) && (width < 1120))  {
    console.log('1');
    document.querySelector('.swiper-slide:nth-child(7)').style.display = 'block';
    document.querySelector('.swiper-slide:nth-child(8)').style.display = 'block';
    document.querySelector('.swiper-slide:nth-child(9)').style.display = 'block';
    document.querySelector('.swiper-slide:nth-child(10)').style.display = 'block';
    document.querySelector('.swiper-slide:nth-child(11)').style.display = 'block';
    down.innerHTML = 'Скрыть все';
  }
  else if ((a % 2 == 0) && (width < 1120)) {
    document.querySelector('.swiper-slide:nth-child(7)').style.display = 'none';
    document.querySelector('.swiper-slide:nth-child(8)').style.display = 'none';
    document.querySelector('.swiper-slide:nth-child(9)').style.display = 'none';
    document.querySelector('.swiper-slide:nth-child(10)').style.display = 'none';
    document.querySelector('.swiper-slide:nth-child(11)').style.display = 'none';
    down.innerHTML = 'Показать все';
  }
  else if ((a % 2 == 1) && (width >= 1120)) {
    document.querySelector('.swiper-slide:nth-child(9)').style.display = 'block';
    document.querySelector('.swiper-slide:nth-child(10)').style.display = 'block';
    document.querySelector('.swiper-slide:nth-child(11)').style.display = 'block';
    down.innerHTML = 'Скрыть все';
  }
  else if ((a % 2 == 0) && (width >= 1120)) {
    document.querySelector('.swiper-slide:nth-child(9)').style.display = 'none';
    document.querySelector('.swiper-slide:nth-child(10)').style.display = 'none';
    document.querySelector('.swiper-slide:nth-child(11)').style.display = 'none';
    down.innerHTML = 'Показать все';
  }
  a++;
}

window.addEventListener('resize', (e) => {
  console.log(e);
  let width= document.body.clientWidth;
  console.log(width);
  if ((width >= 1120) && (document.querySelector('.swiper-slide:nth-child(7)').style.display = 'none') && (document.querySelector('.swiper-slide:nth-child(8)').style.display = 'none')) {
    document.querySelector('.swiper-slide:nth-child(7)').style.display = 'block';
    document.querySelector('.swiper-slide:nth-child(8)').style.display = 'block';
  }
  if ((a % 2 == 1) && (width < 1120) && (document.querySelector('.swiper-slide:nth-child(7)').style.display = 'block') && (document.querySelector('.swiper-slide:nth-child(8)').style.display = 'block')) {
    document.querySelector('.swiper-slide:nth-child(7)').style.display = 'none';
    document.querySelector('.swiper-slide:nth-child(8)').style.display = 'none';
  }
  if (width <= 320) {
    document.querySelector('.swiper-pagination').style.display = 'block';
  }
  if (width > 767) {
    document.querySelector('.swiper-pagination').style.display = 'none';
  }
});

let b = 3;
let repairdown = document.getElementById('repair__down');
repairdown.addEventListener('click', showrepairAll);

function showrepairAll (){
    let width = document.body.clientWidth;
    if ((b % 2 == 1) && (width < 1120))  {
      console.log('2');
      document.querySelector('.slide-tech:nth-child(7)').style.display = 'block';
      document.querySelector('.slide-tech:nth-child(8)').style.display = 'block';
      document.querySelector('.slide-tech:nth-child(9)').style.display = 'block';
      document.querySelector('.slide-tech:nth-child(10)').style.display = 'block';
      document.querySelector('.slide-tech:nth-child(11)').style.display = 'block';
      down.innerHTML = 'Скрыть все';
    }
    else if ((b % 2 == 0) && (width < 1120)) {
      document.querySelector('.slide-tech:nth-child(7)').style.display = 'none';
      document.querySelector('.slide-tech:nth-child(8)').style.display = 'none';
      document.querySelector('.slide-tech:nth-child(9)').style.display = 'none';
      document.querySelector('.slide-tech:nth-child(10)').style.display = 'none';
      document.querySelector('.slide-tech:nth-child(11)').style.display = 'none';
      down.innerHTML = 'Показать все';
    }
    else if ((b % 2 == 1) && (width >= 1120)) {
      document.querySelector('.slide-tech:nth-child(9)').style.display = 'block';
      document.querySelector('.slide-tech:nth-child(10)').style.display = 'block';
      document.querySelector('.slide-tech:nth-child(11)').style.display = 'block';
      down.innerHTML = 'Скрыть все';
    }
    else if ((b % 2 == 0) && (width >= 1120)) {
      document.querySelector('.slide-tech:nth-child(9)').style.display = 'none';
      document.querySelector('.slide-tech:nth-child(10)').style.display = 'none';
      document.querySelector('.slide-tech:nth-child(11)').style.display = 'none';
      down.innerHTML = 'Показать все';
    }
    b++;
}
  
window.addEventListener('resize', (e) => {
    console.log(e);
    let width= document.body.clientWidth;
    console.log(width);
    if ((width >= 1120) && (document.querySelector('.slide-tech:nth-child(7)').style.display = 'none') && (document.querySelector('.slide-tech:nth-child(8)').style.display = 'none')) {
      document.querySelector('.slide-tech:nth-child(7)').style.display = 'block';
      document.querySelector('.slide-tech:nth-child(8)').style.display = 'block';
    }
    if ((a % 2 == 1) && (width < 1120) && (document.querySelector('.swiper-slide:nth-child(7)').style.display = 'block') && (document.querySelector('.slide-tech:nth-child(8)').style.display = 'block')) {
      document.querySelector('.slide-tech:nth-child(7)').style.display = 'none';
      document.querySelector('.slide-tech:nth-child(8)').style.display = 'none';
    }
    if (width <= 320) {
      document.querySelector('.swiper-pagination').style.display = 'block';
    }
    if (width > 767) {
      document.querySelector('.swiper-pagination').style.display = 'none';
    }
});

let open = document.getElementById('open');
let sideMenu = document.querySelector('.side-menu');
open.addEventListener('click', Menu);

let close = document.getElementById('close');
close.addEventListener('click', closeMenu);

function Menu() {
    let width = document.body.clientWidth;
    console.log('5');
    sideMenu.classList.add('active');
    if (width < 1440) {
        close.style.display = 'block';
        document.querySelector('.header').style.opacity ='0.1';
        document.querySelector('.main').style.opacity ='0.1';
        document.querySelector('.companies').style.opacity ='0.1';
        document.querySelector('.tech').style.opacity ='0.1';
        document.querySelector('.costs').style.opacity ='0.1';
        document.querySelector('.description').style.opacity ='0.1';
        document.querySelector('.footer').style.opacity ='0.1';
        sideMenu.classList.add('shadow');
    }
}

function closeMenu() {
    sideMenu.classList.remove('active');
    sideMenu.classList.remove('shadow');
    close.style.display = 'none';
    document.querySelector('.header').style.opacity ='1';
    document.querySelector('.main').style.opacity ='1';
    document.querySelector('.companies').style.opacity ='1';
    document.querySelector('.tech').style.opacity ='1';
    document.querySelector('.costs').style.opacity ='1';
    document.querySelector('.description').style.opacity ='1';
    document.querySelector('.footer').style.opacity ='1';
}

let feedb = document.querySelector('.feedb');
let feedback = document.querySelector('.feedback');
feedb.addEventListener('click', openfeedb);

function openfeedb() {
  console.log('7');
  feedback.style.display = 'block';
  document.querySelector('.header').style.opacity ='0.1';
  document.querySelector('.main').style.opacity ='0.1';
  document.querySelector('.companies').style.opacity ='0.1';
  document.querySelector('.tech').style.opacity ='0.1';
  document.querySelector('.costs').style.opacity ='0.1';
  document.querySelector('.description').style.opacity ='0.1';
  document.querySelector('.footer').style.opacity ='0.1';
}

let feedbclose = document.querySelector('.feedback__close');
feedbclose.addEventListener('click', closefeedb);

function closefeedb() {
  feedback.style.display = 'none';
  document.querySelector('.header').style.opacity ='1';
  document.querySelector('.main').style.opacity ='1';
  document.querySelector('.companies').style.opacity ='1';
  document.querySelector('.tech').style.opacity ='1';
  document.querySelector('.costs').style.opacity ='1';
  document.querySelector('.description').style.opacity ='1';
  document.querySelector('.footer').style.opacity ='1';
}

let call = document.getElementById('call');
call.addEventListener('click', opencall);

function opencall() {
  document.querySelector('.call').style.display = 'block';
  document.querySelector('.header').style.opacity ='0.1';
  document.querySelector('.main').style.opacity ='0.1';
  document.querySelector('.companies').style.opacity ='0.1';
  document.querySelector('.tech').style.opacity ='0.1';
  document.querySelector('.costs').style.opacity ='0.1';
  document.querySelector('.description').style.opacity ='0.1';
  document.querySelector('.footer').style.opacity ='0.1';
}

let callclose = document.querySelector('.call__close');
callclose.addEventListener('click', closecall);

function closecall() {
  document.querySelector('.call').style.display = 'none';
  document.querySelector('.header').style.opacity ='1';
  document.querySelector('.main').style.opacity ='1';
  document.querySelector('.companies').style.opacity ='1';
  document.querySelector('.tech').style.opacity ='1';
  document.querySelector('.costs').style.opacity ='1';
  document.querySelector('.description').style.opacity ='1';
  document.querySelector('.footer').style.opacity ='1';
}