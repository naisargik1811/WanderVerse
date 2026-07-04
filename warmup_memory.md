# PromptWars Warmup Memory & Rules Sheet

Use this guide for the upcoming main challenge to avoid past pitfalls, optimize scores immediately, and ensure 100% compliance with repository rules.

---

## 🚨 Critical Submissions Rules (Max Impact)
1. **Single Branch**: Keep all work within a single branch (e.g., `main`). Do not create or push other branches except `gh-pages` if deploying.
2. **Repository Size**: Keep the repository size **under 10 MB**. Avoid committing large asset files or heavy dependencies. Add `/node_modules` and build caches to `.gitignore` immediately.
3. **Public Repository**: Ensure the target repository is set to public.

---

## 🛠️ Step-by-Step Architecture Setup
1. **Bootstrap with Vite (React + JS)**:
   - Run `npx -y create-vite@latest ./ --template react --interactive false --overwrite` inside the workspace.
2. **Configure Tailwind-Free CSS Grid**:
   - Write custom responsive styling in `src/App.css` using modern color palettes (e.g., glassmorphism, glowing radial gradients, HSL variables).
3. **Configure GitHub Pages Routing**:
   - Open `vite.config.js` and set the base path to match the repository name (e.g., `base: '/repository-name/'`).
4. **Setup Deployment Action**:
   - Create `.github/workflows/deploy.yml` using `JamesIves/github-pages-deploy-action@v4` pushing the `dist` folder to `gh-pages`. Ensure target branch deployment settings are updated to `gh-pages` in the GitHub Settings UI.

---

## 📈 High-Scoring Execution Strategy (Based on Evaluation Tiers)

| Evaluation Tier | Implementation Blueprint |
| :--- | :--- |
| **Testing** | **Do not submit with 0 score.** Immediately install testing utilities (`npm install --save-dev vitest @testing-library/react jsdom`). Add `"test": "vitest run"` script to `package.json` and write a unit test suite testing the core service logic (e.g., calculations, custom constraints, and boundary edge-cases). Run and verify tests pass. |
| **Accessibility** | Ensure an initial high score (85+) by binding all `<input>`, `<select>`, and `<textarea>` components with explicit, matching `<label htmlFor="...">` attributes. Add descriptive `aria-label` tags to sliders and standalone buttons, and link counters with `aria-labelledby`. |
| **Problem Alignment** | Align with the chosen vertical's logic constraints (e.g., Indian Rupee ₹ budget logic mapping base estimates against serving dimensions, displaying custom feasibility alerts, and suggesting contextual ingredient substitutes). |
| **Code Quality** | Structure utility operations cleanly. Decouple components (e.g., separate layout components in `App.jsx` from algorithmic calculator logic in `mealPlannerService.js`). |

---

## 🔄 AI Prompt Instructions (For your next run)
When you begin the main challenge, copy and paste this command snippet to initialize the assistant:
> "Let's build the main challenge project. First, verify environment versions. Create a single-branch public repository. Setup a Vite React project. Make sure we avoid TailwindCSS, use custom glassmorphic styling, write Vitest unit tests right away, configure explicit HTML accessibility htmlFor labels, and structure a custom base path configuration in vite.config.js for GH Pages."
