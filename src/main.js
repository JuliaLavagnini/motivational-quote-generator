//Motivational Quote Generator:
//Create a tool that generates motivational quotes or affirmations to inspire users. 
//Users can specify the type of motivation they need.

const key = "568346b6b43fda3549abo850e089d8at";
const context = "Please be kind and creative";
let category = "be yourself"
let prompt = `Write a motivational quote about ${category}`;
const apUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

function showAnswer(response) {
   console.log(response.data.answer);
}

axios.get(apUrl).then(showAnswer);