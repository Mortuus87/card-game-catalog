// refer to question 1 before development starts for scope document
// connect to this api https://api.magicthegathering.io/v1/cards

/* Variables and constants */
const apiUrl = "https://api.magicthegathering.io/v1/cards";
const cardContainerElement = document.getElementById("cards");
const searchField = document.getElementById("search");

/* Action handlers and on-load functions */
getFromApi(apiUrl)

/**
 * Gets the response from a given API
 * @param {string} url The endpoint url
 */
function getFromApi(url) {
    console.log("Please wait...")
    fetch(url, {method: 'GET'})
        .then(response => response.text())
        .then(result => processSuccess(result))
        .catch(error => processError(error));
    
    function processSuccess(response) {
        console.log("Done loading")
        let json = JSON.parse(response)
        let library = new Library(json);
        library.printCards();
    
        document.getElementById("searchButton").onclick = () => {
            library.printCard(searchField.value);
        };
    };

    function processError(error) {
        console.log('error', error);
    };
};

/**
 * Library class in which a collection of cards can be stored
 * It has methods in it for constructing HTML from every card,
 * or with a given substring. 
 */
class Library {
    constructor(json) {
        this.cards = json.cards;

        this.printCards = () => {
            let html = "";
            console.log(this.cards)
            for (let i = 0; i < this.cards.length; i++) {
                html += constructCard(this.cards[i]);
            };
            cardContainerElement.innerHTML = html;
        };

        this.printCard = (searchTerm) => {
            console.log(`looking for ${searchTerm}`);
            let html = "";
            for (let i = 0; i < this.cards.length; i++) {
                if (this.cards[i].name.toUpperCase().includes(searchTerm.toUpperCase())) {
                    console.log(`found ${this.cards[i].name}`);
                    html += constructCard(this.cards[i]);
                }
            };
            cardContainerElement.innerHTML = html;
        };

        function constructCard(card) {
            return `
            <div class="col-sm-4">
                <div class="card-container">
                    <h4>${card.name}</h4>
                    <img src="${card.imageUrl ? card.imageUrl : "images/cardback.jpg"}" width="100%">
                    <a href="card-specific.html?id=${card.id}" class="btn btn-success">View More</a>
                </div>
            </div>
            `;
        }
    }
}