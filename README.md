# WanderVerse 🌍✨

WanderVerse is a GenAI-powered platform designed to help travelers discover destinations and engage with local culture in meaningful, personalized ways. It moves beyond traditional itineraries to offer immersive stories, uncover hidden gems, and recommend authentic local experiences.

## 🎯 Chosen Vertical
**Destination Discovery & Cultural Experiences**

## 💡 Approach and Logic
The goal of this platform is to evoke a sense of wanderlust through a modern, premium, glassmorphism-inspired UI while leveraging generative AI to curate deeply personal travel recommendations.

1. **User Input:** Travelers provide their desired destination and specific interests (e.g., Food, History, Nature).
2. **AI Generation (Simulated for Prototype):** The system passes this context to our GenAI service.
3. **Structured Outputs:** The AI returns structured markdown that is dynamically streamed to the user, categorizing the output into:
   - **Immersive Stories:** A short, evocative narrative about arriving in the location.
   - **Hidden Gems:** Niche, off-the-beaten-path locations away from tourist traps.
   - **Local Culture & Events:** Authentic cultural engagements, festivals, and culinary recommendations.
4. **Dynamic UI:** A responsive, animated, and visually striking frontend built with React and Vanilla CSS ensures a "WOW" factor.

## 🛠️ How the Solution Works
1. **Frontend:** Built with Vite + React. 
2. **Styling:** Custom Vanilla CSS featuring CSS variables for a dark mode aesthetic, glassmorphism effects (`backdrop-filter`), and CSS animations for smooth interactions. Lucide React is used for clean, modern iconography.
3. **Routing:** React Router DOM manages navigation between the Home landing page and the Discovery engine.
4. **AI Service Integration:** Located in `src/services/aiService.js`, the service acts as a streaming layer for generative content. In a full production environment, this connects directly to an LLM provider (e.g., Google Gemini API). For this submission, it uses a mock streaming response to simulate the AI interaction instantly without requiring the evaluator to provide an API key.

## 📌 Assumptions Made
*   **API Key Availability:** To ensure the project runs smoothly for evaluators out-of-the-box without requiring API key configuration, the GenAI integration is simulated with a realistic streaming delay and markdown formatting logic. The architecture is built such that replacing the simulated function with an actual fetch request to a GenAI API is trivial.
*   **Design Preferences:** Assumed users would prefer a premium dark theme with vibrant accent colors (blue, purple, orange) that align with modern "AI product" aesthetics.
*   **Environment:** Assumed the app will be tested on modern web browsers that support CSS `backdrop-filter` and CSS clamp functions.

## 🚀 Running the Project
```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```
