function collapseButton(buttonNumber) {
    var button = document.querySelector('.collapsibleButton:nth-child(' + buttonNumber + ')');
    button.classList.toggle("collapsed");
}
