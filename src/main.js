function showQuote(response) {
  console.log("quote generated");
  new Typewriter("#quoteGenerated", {
    strings: response.data.answer,
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

function generateQuote(category) {
  let key = "568346b6b43fda3549abo850e089d8at";
  let context =
    "Your friend needs a motivation to feel better. Your mission is to create a 2 lines motivational quote in basic HTML. Make sure to follow the user instructions. Sign the quote with 'Stay Motivated ❤️' inside a <strong> element at the end of the quote and NOT at the beginning. The quote should use lighter font-weight and the sign. Everything should align to the left. Keep font size of the quote text in 18 pixels on every new quote generated.";
  let prompt = `User instruction: Write a motivational quote about ${category}`;
  let url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

  console.log("generating quote");
  console.log(`${prompt}`);
  console.log(`${context}`);

  axios.get(url).then(showQuote);
}

const quoteFormElement = document.querySelector(
  "#quoteGeneratorForm"
);
quoteFormElement.addEventListener(
  "submit",
  function (event) {
    event.preventDefault();
    const category =
      document.querySelector("#userPrompt").value;
    generateQuote(category);
  }
);

// Get all buttons with the class "category-btn"
const categoryButtons =
  document.querySelectorAll(".category-btn");

// Add click event listeners to each button
categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Get the value from the button's data-value
    const category = button.dataset.value;
    console.log(`The choose category: ${button.dataset.value}`);
    // Set the input value to the button's data-value
    document.querySelector("#userPrompt").value = category;
    // Generate the quote for the selected category
    generateQuote(category);
  });
});

