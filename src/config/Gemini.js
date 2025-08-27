import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

// 1. UPDATED THE MODEL NAME
const MODEL_NAME = "gemini-2.5-flash";

// IMPORTANT: Replace with your actual API Key
const API_KEY = "AIzaSyDbm1ylts93tqw_5tipQko5prEiUDwuJWM"; 

async function runChat(userInput) { // Renamed 'prompt' to 'userInput' for clarity
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  // 2. CREATED YOUR CUSTOM PROMPT
  // This wraps your detailed instructions around the input from the website's text box.
  const fullPrompt = `Generate a short, creative, and believable excuse for the following situation: "${userInput}". Adjust the tone considering the relation to the person. Keep it reasonable but short and apologize at the end. I only want 1 excuse and nothing else in the answer.`;


  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [],
  });

  // The model now receives your custom, detailed prompt
  const result = await chat.sendMessage(fullPrompt); 
  const response = result.response;
  return response.text();
}

export default runChat;
