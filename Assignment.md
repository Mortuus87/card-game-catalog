# Course Assignment

## Brief
Use the attached resources (at the bottom) to complete the following assignment on the various pages.

# Index Page
* On the index page the API is provided please connect to the URL provided. https://api.magicthegathering.io/v1/cards
* Convert the results to JSON format
* Create a function, that takes the JSON Object as an argument.
* Call the function from the method that returns the JSON data and pass in the JSON data.
* Inside the function that you just created, append all the data to the div with the “cards” ID attached to it
* Styles will be provided for you; the result will mimic the following design.<br />
![image 1](4-5-1.png)
* The HTML for the card above is in the index.html file, use this as a base to display all the cards. They should all follow the same design pattern. When done delete the hard coded card.
* You will need the following keys to achieve this: name, imageUrl and id.
* If you look at the “View More” button the id is used and passed in as a query string in the URL.
* Don’t worry about the query string for the next page as there will be a function that will strip the URL and return the ID to you.
* Above all the cards is a search box.
* The search box should work in the following way, the search button will trigger a click event. This event will delete all the HTML inside the div that has the ID “cards” attached to it.
* It should then get the value from the search text box, make a call to the api get all the results back. Thereafter it should filter through all the results by the value that was in the textbox.
* If it finds any results it should be added to a new array and the new array should be display as HTML like you did with all the cards but it should only return what the user searched for. If the application doesn’t find any results a suitable message should be displayed.
* Some images returned from the API will be broken.
* Please test to see if the value is undefined, if the value is undefined, please use the image below as a placeholder
* https://via.placeholder.com/223x310
* Please write all js in the script.js file.

# Card Specific Page
* There is a page called card-specific.html if you click on the view more button on the index page you will notice “?id=xxxxxxxxxxxxxxxx” at the end of the URL, it will link to this page.
* Inside the JavaScript file specific.js from lines 1 – 4 there is prewritten JavaScript that returns the value of the id in the Query String.
* Take that value and make an API call, but append the ID to end of the API Call. The URL should look as follows:https://api.magicthegathering.io/v1/cards/3b072bac-4508-5bfa-adc3-13a9163284d3
* If you open up the URL above it will only return details to you for that specific ID.
* Append the image to the div called “cardImage”, set the width of the image to 100%.
* Please get the following keys: imageUrl, name, text, rarity and colors. Display their values.
* The specific card should look as follows:<br />
![image 2](4-5-2.png)
* The HTML for the card template will be inside the card-specific.html file please delete it once you are pulling data from the API.
* Test to see if there is no query string if there isnt display a suitable message.
* Please write all js in the specific .js file.

# About Page

* On the about page. Replace the word “Magic” with the “Something” in all the text inside the div with “aboutText” ID attached to it.
* Also on the about us page there is a div with and ID “moreInfoTrigger” it should look like the image below.<br />
![image 3](4-5-3.png)
* If you click on this heading it should toggle display: block and display none on the div with the “moreInfoContent” ID attached to it.
* If style is display block it should look like the image below:<br />
![image 4](4-5-4.png)
* Please write all JavaScript in the about.js file.

# Contact Form
* Validate the contact form on the contact.html page.
* The name and last name textboxes shouldn’t be empty.
* The email textbox should have a valid email address inside it.
* The number format should be as follows:<br />
    xxx xxx xxxx, <br />
    xxx-xxx-xxxx<br />
    xxx.xxx.xxxx
* There are error messages inside the HTML. Display these messages if there is an issue with the values for each textbox respectively.
* If the value of the textbox is valid, hide the error message.
* All this should happen after a user clicks the submit button.
* Please write all JavaScript in the contact.js file

# Marking Criteria

* Can apply knowledge of JavaScript to develop simple dynamic and interactive solutions
* Can apply knowledge of Document Object Model (DOM) to influence structure, content and design in HTML documents
* Masters industry-relevant software for programming and web development with JavaScript
* Masters industry-relevant tools and techniques for testing and troubleshooting source code / Can study the development process of simple, interactive and dynamic solutions with JavaScript
* Can find information and material that is relevant to the development of dynamic and interactive web solutions and services built with JavaScript
* Can develop simple, relevant interactive solutions with JavaScript Events

# Submission

* Please submit your assignment as a zip file.
* Please include a PDF report on the process you went through to complete this CA and the final product. Your report should include reflection on your submission, and must have at least the following main sections: introduction, body, conclusion, and references (if applicable). Your report must be 800-2000 words.