import { GoogleGenerativeAI } from "@google/generative-ai";
import { SceneConfig, AdvancedSettings } from "../types";

export class GeminiService {
  private genAI: GoogleGenerativeAI;
  private model: any;

  constructor(apiKey: string, modelVersion = "gemini-2.0-flash") {
    this.genAI = new GoogleGenerativeAI(apiKey);
    this.model = this.genAI.getGenerativeModel({
      model: modelVersion,
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.9,
        maxOutputTokens: 2048,
      },
    });
  }

  async generateScene(
    storyContext: string,
    sceneNumber: number,
    totalScenes: number,
    sceneConfig: SceneConfig,
    advancedSettings: AdvancedSettings,
    customValues: Record<string, string>
  ) {
    const prompt = this.buildPrompt(
      storyContext,
      sceneNumber,
      totalScenes,
      sceneConfig,
      advancedSettings,
      customValues
    );

    try {
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      const content = response.text();

      return this.parseSceneContent(content);
    } catch (error) {
      console.error("Gemini API Error:", error);
      throw error;
    }
  }

  private buildPrompt(
    storyContext: string,
    sceneNumber: number,
    totalScenes: number,
    sceneConfig: SceneConfig,
    advancedSettings: AdvancedSettings,
    customValues: Record<string, string>
  ): string {
    const resolveValue = (key: string, value: string) => {
      return value === "custom" ? customValues[key] || value : value;
    };

    return `
  Create a detailed video scene prompt for Scene ${sceneNumber} of ${totalScenes} based on the following context and parameters:

  STORY CONTEXT:
  ${storyContext}

  SCENE PARAMETERS:
  - Location: ${resolveValue("location", sceneConfig.location)}
  - Character: ${resolveValue("character", sceneConfig.character)}
  - Mood: ${resolveValue("mood", sceneConfig.mood)}
  - Lighting: ${resolveValue("lighting", sceneConfig.lighting)}
  - Visual Style: ${resolveValue("visualStyle", sceneConfig.visualStyle)}
  - Camera Angle: ${resolveValue("cameraAngle", sceneConfig.cameraAngle)}
  - Voice Language: ${resolveValue("voiceLanguage", sceneConfig.voiceLanguage)}

  ADVANCED SETTINGS:
  - Narrative Type: ${advancedSettings.narrativeType}
  - Character Consistency: ${advancedSettings.characterConsistency}

  Please generate a response in the following JSON format:
  {
    "description": "A detailed scene description optimized for AI video generation (like VEO 3 or Sora). Include visual elements, character actions, and environmental details. Be specific about camera movements, lighting, and visual composition.",
    "dialogue": "Natural dialogue appropriate for the scene and language. If narrative type is 'silent' or 'natural_sounds', return an empty string. always return a bangla dialogue if the voice language is set to 'bengali', don't send any language translation. you can use the following format: আমার নাম আকাশ (amar nam akash) for bangla dialogue.",
    "soundDirection": "Detailed sound design directions including ambient sounds, music suggestions, and audio effects that enhance the scene's mood and atmosphere."
  }

  Ensure the content is:
  1. Cinematic and professional
  2. Consistent with the story context
  3. Optimized for AI video generation
  4. Culturally appropriate for the selected language
  5. Fitting the specified mood and visual style
  6. Appropriate for Scene ${sceneNumber} in the overall narrative arc
  7. make sure to use the correct language for the dialogue based on the voice language setting, for example, if the voice language is set to 'bengali', always return bangla dialogue and don't send any language translation.
  8. Always cover each scene dialogue with in 8 seconds
  `;
  }

  private parseSceneContent(content: string) {
    try {
      // Try to extract JSON from the response
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
      }

      // If no JSON found, create a structured response from the text
      const lines = content.split("\n").filter((line) => line.trim());
      return {
        description: lines[0] || "Scene description not available",
        dialogue: lines[1] || "",
        soundDirection: lines[2] || "Ambient sound appropriate for the scene",
      };
    } catch (error) {
      console.error("Error parsing scene content:", error);
      return {
        description: "Error generating scene description",
        dialogue: "",
        soundDirection: "Ambient sound",
      };
    }
  }
}
