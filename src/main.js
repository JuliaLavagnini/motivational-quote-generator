// Function to display the generated quote using Typewriter
function showQuote(response) {
  console.log("quote generated");
  new Typewriter("#quoteGenerated", {
    strings: response.data.answer,
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

// Function to generate a quote based on the user's category
function generateQuote(category) {
  // API key for making requests to the quote generation API
  let key = "568346b6b43fda3549abo850e089d8at";

  // Context for the quote generation, providing additional information
  let context =
    "Your friend needs a motivation to feel better. Your mission is to create a 2 lines motivational quote in basic HTML. Make sure to follow the user instructions. Sign the quote with 'Stay Motivated ❤️' inside a <strong> element at the end of the quote and NOT at the beginning. The quote should use lighter font-weight and the sign. Everything should align to the left. Keep font size of the quote text in 18 pixels on every new quote generated.";

  // Prompt for the quote generation, including the user's category
  let prompt = `User instruction: Write a motivational quote about ${category}`;

  // URL for making the API request
  let url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

  console.log("generating quote");
  console.log(`${prompt}`);
  console.log(`${context}`);

   const quoteElement = document.querySelector(
   "#quoteGenerated"
   );
   quoteElement.classList.remove('hidden');
   // Set the initial text content and add blink affect to it
   quoteElement.innerHTML =
     '<div class="blinking-text">Generating the quote to make your day better ❤️ </div>';

   // Making the API request and displaying the quote
   axios.get(url).then(showQuote);
}

// Selecting the quote form element
const quoteFormElement = document.querySelector(
  "#quoteGeneratorForm"
);

// Adding an event listener for the form submit
quoteFormElement.addEventListener(
  "submit",
  function (event) {
    // Preventing the default form submission
    event.preventDefault();
    // Getting the category from the input and generating the quote
    const category =
      document.querySelector("#userPrompt").value;
    generateQuote(category);
  }
);

// Selecting all buttons with the class "category-btn"
const categoryButtons =
  document.querySelectorAll(".category-btn");

// Adding click event listeners to each button
categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Getting the value from the button's data-value
    const category = button.dataset.value;
    console.log(
      `The chosen category: ${button.dataset.value}`
    );
    // Setting the input value to the button's data-value
    document.querySelector("#userPrompt").value = category;
    // Generating the quote for the selected category
    generateQuote(category);
  });
});