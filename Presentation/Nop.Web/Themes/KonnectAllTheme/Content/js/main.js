


function search_display_mobile() {
    var searchIcon = document.getElementById('search-icon');
    var topMenu = document.getElementById('topbar-menu');
    var searchMobile = document.getElementById('search-mobile');
    searchIcon.onclick = function () {
        searchMobile.classList.toggle('visible');
        topMenu.style.display = "none";
    }
    var close = document.getElementById("btn-close");
    console.log(close);
    document.getElementById("btn-close").onclick = function () {
        if ((searchMobile.classList.contains('visible'))) {
            searchMobile.classList.remove('visible');
            topMenu.style.display = "flex";
        }
    }
}

function mobile_menu_toggle() {
    var toggle = document.getElementById('toggle-menu');
    // console.log(toggle);
    toggle.onclick = function () {
        var mobMenuWrap = document.getElementById("mobile-menu");
        mobMenuWrap.classList.toggle('open');
    }
}

function mobile_menu_toggle() {
    var toggle = document.getElementById('toggle-menu');
    console.log(toggle);
    toggle.onclick = function () {
        var mobMenuWrap = document.getElementById("mobile-menu");
        mobMenuWrap.classList.toggle('open');
    }
}

window.onload = function () {
    try {
        search_display_mobile();
    } catch (e) {

    }
    try {
        mobile_menu_toggle();
    } catch (e) {

    }
    try {
        setupListenerFunction();
    } catch (e) {

    }
    try {
        intiSlid();
    } catch (e) {

    }
   
};





