// refer to question 2 before development starts for scope document
// get URL query string
function getQueryStringValue (key) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}
// variable for the id
const cardContainer = document.getElementsByClassName("container")[0];
const apiBaseUrl = "https://api.magicthegathering.io/v1/cards";
const cardId = getQueryStringValue("id");
const apiSpesificCard = `${apiBaseUrl}/${cardId}`

/* Action handlers and on-load functions */

cardId ? getFromApi(apiSpesificCard) : printError();

/**
 * Accepts an inner "card" key from the response from the API
 * @param {JSON} card 
 */
function constructDetails(card) {
    cardContainer.innerHTML = `
    <div class="row">
        <div class="col-sm-3" id="cardImage">
            <img src="${card.imageUrl}" width="100%">
        </div>
        <div class="col-sm-9" id="cardDetails">
            <h2>${card.name}</h2>
            <div><b>About: </b>${card.originalText}</div>
            <div><b>Rarity: </b>${card.rarity}</div>
            <div><b>Color: </b>${getColors(card.colors)}</div>
        </div>
    </div>
    `;
    
    function getColors (colorsArray) {
        let colors = "";
        for (let i = 0; i < colorsArray.length; i++) {
            colors += `${colorsArray[i]} `;
        }
        return colors ? colors : "Colorless";
    };
}

function constructError() {
    cardContainer.innerHTML = `
    <div class="row">
        <div class="col-sm-3" id="cardImage">
            <img src="images/cardback.jpg" width="100%">
        </div>
        <div class="col-sm-9" id="cardDetails">
            <h2>Error: Bad ID</h2>
            <div>
            <p>Sorry, but this page can not show you any spesific card, because no search criterias were given, or because the ID given did not return a valid card.</p>
            <p>Please try again</p>
            <a href="index.html" class="btn btn-success" style="width:unset;">Go back</a>
            </div>
        </div>
    </div>
    `;   
}

function constructLoading() {
    cardContainer.innerHTML = `
    <div class="row">
        <div class="col-sm-3" id="cardImage">
        </div>
        <div class="col-sm-9" id="cardDetails">
            <h2>Loading...</h2>
            <div>
            <p>Please wait while the card is being loaded.</p>
            </div>
        </div>
    </div>
    `;   
}

/**
 * Gets the response from a given API
 * @param {string} url The url
 */
function getFromApi(url) {
    constructLoading();
    console.log(`Please wait. Getting card id: ${cardId}`)
    
    fetch(url, {method: 'GET'})
        .then(response => response.text())
        .then(result => processSuccess(result))
        .catch(error => processError(error));

    function processSuccess(result) {
        console.log("Done loading");
        let json = JSON.parse(result)
        constructDetails(json.card);
    };

    function processError(error) {
        console.log('error', error);
        constructError();
    };
};

