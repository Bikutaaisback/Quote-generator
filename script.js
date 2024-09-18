const apiUrl = "https://api.adviceslip.com/advice";

// Function to fetch and display a quote
async function getQuote() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Access the advice from the API response
        quote.innerHTML = data.slip.advice;  // Corrected to access 'slip.advice'
    } catch (error) {
        console.error("Error fetching the quote:", error);
    }
}
function tweetQuote(){
    window.open('https://twitter.com/intent/tweet?text=' + quote.innerHTML);
}

// Select elements after the DOM is ready
const quote = document.getElementById('quote');
const tweet = document.getElementById('tweet');
const newQuote = document.getElementById('new-quote');


// Add event listener to button
newQuote.addEventListener('click', getQuote);
tweet.addEventListener('click', tweetQuote);

// Fetch an initial quote on page load
getQuote();
