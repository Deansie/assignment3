
// Funktion för att swappa h1-elementen

function headerSwap() {

    let altHeader = document.createElement("h1");

    altHeader.textContent = "Goodbye World!";
    
    let originalHeader = document.getElementById("originalHeader");

    originalHeader.parentNode.replaceChild(altHeader, originalHeader);
    
}