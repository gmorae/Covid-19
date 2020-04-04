window.onload = responsiveImage;

function responsiveImage(){
    screen.width <= 425 ? 
    document.getElementById('banner').style.display = 'none' :
    document.getElementById('bannerResponsivo').style.display = 'none'
}