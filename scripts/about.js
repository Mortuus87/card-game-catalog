// refer to question 3 before development starts for scope document

(() => {
    // find and replace "magic" with "something".
    const e = document.getElementById("aboutText");
    e.innerHTML = e.innerHTML.replace(/Magic/g, "Something");
})();


// Container toggle
document.getElementById("moreInfoTrigger").onclick = () => {
    toggleDisplay(document.getElementById("moreInfoContent"))
}

/**
 * @param {HTMLElement} toggleElement 
 * element to be toggled between "none" and "block"
 */
function toggleDisplay(toggleElement) {
    let status = getComputedStyle(toggleElement).display;
    if (status == "none") {
        toggleElement.style.display = "block"
    } else {
        toggleElement.style.display = "none";
    }
}