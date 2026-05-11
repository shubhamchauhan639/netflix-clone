import { GoogleGenAI } from "@google/genai";
import { api_key } from "./constant";

const ai = new GoogleGenAI({
  apiKey: api_key
});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Recommend 5 sci-fi movies like Interstellar",
  });

  console.log(response.text);
}

main();