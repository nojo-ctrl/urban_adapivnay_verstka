function showLogo() {
  const logo = document.querySelector('.ne_nine'); // Находим элемент с классом 'logo'
  const bod  = document.querySelector('body:not(.niv) '); // Находим элемент body
  const btn  = document.querySelector('.burger');
  const  menu = document.querySelector('.niv');

  if (logo.style.display === 'none') {
    logo.style.display = 'block'; // Показываем логотип, если он скрыт
    logo.style.transition = "1s";
    bod.style.opacity =  "0.7";
    logo.style.opacity  =  "200%";
    logo.style.border = "1px solid black"
    logo.style.border_radius == "17px";
    btn.style.top = "-100px"
    btn.style.left = "1220px"
    menu.style.opacity  =  "1";

  } else {
    logo.style.display = 'none'; // Скрываем логотип, если он виден
    bod.style.background = "white";
    bod.style.opacity =  "1";
    btn.style.top = "0px"
    btn.style.left = "0px"
  }
}