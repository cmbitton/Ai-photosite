function getPics() {} //just for this demo
const imgs = document.querySelectorAll('.image-card .photo');
const fullPage = document.querySelector('#fullpage');
let imageCards = document.querySelectorAll('.image-card');
const button2x2Grid = document.querySelector('.gridbutton2x2');

imgs.forEach(img => {
  img.addEventListener('click', function() {
    fullPage.style.backgroundImage = 'url(' + img.src + ')';
    fullPage.style.display = 'block';
  });
});
getPics();


button2x2Grid.addEventListener('click', function () {
  for (let i = 0; i < imageCards.length; i++) {
    if (imageCards[i].id !== 'image-card-2x2grid') {
      imageCards[i].setAttribute('id', 'image-card-2x2grid');
    }
    else{
      imageCards[i].removeAttribute('id', 'image-card-2x2grid');
    }
  }
});
