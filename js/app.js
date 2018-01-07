document.addEventListener("DOMContentLoaded", function() {

 var leftBtn = document.querySelector('div.arrowLeft');
    var rightBtn = document.querySelector('div.arrowRight');
    var imgLi = document.querySelectorAll('div.sliderImg ul li');

    var index = 0;

    imgLi[index].style.display = "initial";

    leftBtn.addEventListener("click", function() {
        imgLi[index].style.display = "none";
        index--;
        if (index < 0) {
            index = imgLi.length - 1;
        }
        imgLi[index].style.display = "initial";
    });
    
    rightBtn.addEventListener("click", function() {
        imgLi[index].style.display = "none";
        index++;
        if (index >= imgLi.length) {
            index = 0;
        }
        imgLi[index].style.display = "initial";
    });

});