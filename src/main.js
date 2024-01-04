const btn = document.querySelector(".submit-btn");

function showQuote(response) {
   btn.addEventListener("click", () => {
      new Typewriter("#quoteGenerated", {
         strings: response.data.answer,
         autoStart: true,
         delay: 30,
      });
   });
}

function generateQuote(event){
   event.preventDefault();
   
   let category = document.querySelector("#userPrompt");
   const key = "568346b6b43fda3549abo850e089d8at";
   const context = "Please be kind and creative. Make sure to follow the user instructions.";
   let prompt = `Write a motivational quote about ${category}`;
   const url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;
   
   console.log(prompt)
   axios.get(url).then(showQuote);
}

const quoteFormElement = document.querySelector(
   "#quoteGeneratorForm"
   );
   quoteFormElement.addEventListener("submit", generateQuote);
