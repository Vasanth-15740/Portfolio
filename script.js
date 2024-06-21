function showName() {
    const name = "I'm  Vasanth Kumar S";
    const nameElement = document.getElementById("name");
    let index = 0;
    function displayNextLetter()
    {
        if (index < name.length) 
        {
            nameElement.textContent += name.charAt(index);
            index++;
            setTimeout(displayNextLetter, 100); 
        }
    }
    displayNextLetter();
}
function smoothScroll(target) {
    document.querySelector('#' + target).scrollIntoView({ behavior: 'smooth'});
}
function smoothScroll(target) {
    document.querySelector('#' + target).scrollIntoView({behavior: 'smooth'});
}
