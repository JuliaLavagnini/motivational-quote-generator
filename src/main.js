function showQuote(response) {
   console.log('quote generated');
   new Typewriter("#quoteGenerated", {
      strings: response.data.answer,
      autoStart: true,
      delay: 30,
      cursor: "",
   });
}

function generateQuote(event){
   event.preventDefault();
   
   let category = document.querySelector("#userPrompt");
   let key = "568346b6b43fda3549abo850e089d8at";
   let context =
     "Your friend needs a motivation to feel better. Your mission is to create a 2 lines motivational quote in basic HTML. Make sure to follow the user instructions. Sign the quote with 'Stay Motivated ❤️' inside a <strong> element at the end of the quote and NOT at the beginning. The quote should use lighter font-weight and the sign. Everything should align to the left. ";
   let prompt = `User instruction: Write a motivational quote about ${category.value}`;
   let url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

   console.log("generating quote");
   console.log(`${prompt}`);
   console.log(`${context}`);
   
   axios.get(url).then(showQuote);
}

const quoteFormElement = document.querySelector("#quoteGeneratorForm");
quoteFormElement.addEventListener("submit", generateQuote);
