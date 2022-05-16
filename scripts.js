
// when the page loads, add an open class to nav if the screen is wide enough. //
window.onload = function() {
    var screenWidth = window.innerWidth;
    var mobileBreakpoint = 690;
    var globalNavbar = document.getElementById("global-nav");
    var toggle = document.getElementById("menu-toggle");

    // add 'open' class to the ul in the navbar if wider than // the breakpoint
    if (screenWidth > mobileBreakpoint) {
        globalNavbar.classList.add("open");
        toggle = document.classList.add("open");
    }
}
window.onresize = function() {
    var screenWidth = window.innerWidth;
    var mobileBreakpoint = 690;
    var globalNavbar = document.getElementById("global-nav")

    if (screenWidth > mobileBreakpoint) {
        globalNavbar.classList.add("open");
        toggle = document.classList.add("open");
    }
    else {
        globalNavbar.classList.remove("open");
        toggle = document.classList.remove("open");
    }
}