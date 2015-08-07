/*
    To use, create a div with the class name 'burger-wrapper' within a positioned parent element.
*/

window.onload = init;

function init() {
    var burgers = document.getElementsByClassName('burger-wrapper');
    var burgerNumber = burgers.length;
    while(burgerNumber--) {
        makeBurger(burgers[burgerNumber]);
    }
}

function makeBurger(el) {
    var hamburger = document.createElement('div');
    var top = document.createElement('div');
    var middle = document.createElement('div');
    var bottom = document.createElement('div');
    
    hamburger.setAttribute('class', 'burger');
    top.setAttribute('class', 'top');
    middle.setAttribute('class', 'middle');
    bottom.setAttribute('class', 'bottom');
    
    hamburger.appendChild(top);
    hamburger.appendChild(middle);
    hamburger.appendChild(bottom);
    
    hamburger.addEventListener('click', function() {
        var movers = this.getElementsByTagName('div');
        var i = movers.length;
        while(i--) {
            toggleClass(movers[i], 'active');
        }
        toggleClass(this, 'active');
    }, false);
    
    el.appendChild(hamburger);
}

function toggleClass(el, toggle) {
    var elClass = typeof(el.className) === 'undefined' ? "" : el.className;
    var toggleIndex = elClass.indexOf(toggle);
    
    if (toggleIndex === -1) {
        elClass += " " + toggle;
    } else {
        toggle = " " + toggle;
        elClass = elClass.replace(toggle, '');
    }
    el.className = elClass;
}