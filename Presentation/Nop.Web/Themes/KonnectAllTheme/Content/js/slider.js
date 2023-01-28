var Slideindex = 0;
var sliders = document.getElementsByClassName("sec-desc-categ");
var hideSlide = () => {
    var sliders = document.getElementsByClassName("sec-desc-categ");
    for (let index = 0; index < sliders.length; index++) {
       var slid = sliders[index];
        slid.style.display ="none";
    }
}

var dotdisplay = () => {
    var sliders = document.getElementsByClassName("sec-desc-categ");
    for (let index = 0; index < sliders.length; index++) {
        var slid = sliders[index];  
        var li = document.createElement('li');
        li.setAttribute('class', 'dot');
        document.getElementById('dots-item').appendChild(li);
        if(index === 0) {
            li.classList.add("active");
        }
        li.onclick = () => {
            shownSlide(index);
        }
    }
}

var shownSlide = (index) => {
    var sliders = document.getElementsByClassName("sec-desc-categ");  
    if (typeof(index) !== "number"){
        return
    }
    index = index%sliders.length;
    var lastIndex = Slideindex;
    Slideindex = index;
    sliders[lastIndex].style.display = "none";
    sliders[Slideindex].style.display = "flex";
    setActiveSlide(lastIndex, Slideindex);

    
}

var changeSlide = () => {
    var index = Slideindex
    shownSlide(index)

    //return null;
}

var intiSlid = () => {
    hideSlide();
    dotdisplay();
    shownSlide();
  //  changeSlide();
    
}

var setActiveSlide = (lastIndex, currentIndex) => {
    var dots = document.querySelectorAll("#dots-item li.dot");
    dots[lastIndex].classList.remove("active");
    dots[currentIndex].classList.add("active");

    //return null;
}

