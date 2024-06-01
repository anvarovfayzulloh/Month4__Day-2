document.addEventListener("DOMContentLoaded", function() {
    let circle = document.createElement('div');
    let r = prompt ("Aylanani radiusini kiriting")

    circle.style.width = r * 2 + "px";
    circle.style.height = r * 2 + "px";
    circle.style.backgroundColor = 'blue';
    circle.style.borderRadius = '50%';
    
    document.getElementById('body').appendChild(circle);
});