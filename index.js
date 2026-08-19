function aboutButton() {
    const box = document.getElementById("aboutUs");

    if (box.style.display === "none" || box.style.display === "") {
        box.style.display = "block";
    } else {
        box.style.display = "none";
    }

    return false;
}

document.addEventListener('click', function(e) {
    const box = document.getElementById('aboutUs');
    const btn = document.getElementById('aboutButton');

    if (box.style.display === "block" && 
        !box.contains(e.target) && 
        !btn.contains(e.target)) {
        box.style.display = "none";
    }
});

window.addEventListener('scroll', function() {
    const box = document.getElementById('aboutUs');
    box.style.display = "none";
});
