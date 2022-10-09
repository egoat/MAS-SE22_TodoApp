function done(checkbox) {
    if (checkbox.checked) {
        checkbox.parentNode.childNodes[5].style.textDecoration = "line-through";
        checkbox.parentNode.childNodes[5].style.opacity = 0.5;
    }
    else {
        checkbox.parentNode.childNodes[5].style.textDecoration = "none";
        checkbox.parentNode.childNodes[5].style.opacity = 1;
    }
}