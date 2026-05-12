// import OpenAI from "openai";
// import { OPENAI_KEY } from "./constant";

// const openai = new OpenAI({
//   apiKey: OPENAI_KEY,
//   dangerouslyAllowBrowser: true,
// });

// export default openai;


import { GoogleGenAI } from "@google/genai";
import { OPENAI_KEY } from "./constant";

const ai = new GoogleGenAI({
  apiKey:OPENAI_KEY,
  dangerouslyAllowBrowser : true,
});

export default ai