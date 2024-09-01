# 🚀 Dylan's AI-Enhanced Website

## 🌟 Project Vision
This project aims to create a modern, accessible, and AI-enhanced website for Dylan Isaac to showcase his work, share blog posts, and demonstrate innovative AI integrations. Built with SvelteKit and powered by cutting-edge technologies, this website combines responsive design, dynamic theming, and AI-driven features to create a unique user experience.

## 🎨 Key Features

1. **Responsive Design**: Fully responsive layout that looks great on all devices.
2. **Dynamic Theming**: AI-driven theme customization with light/dark mode toggle.
3. **Blog/Content Management**: Easy-to-update blog using Markdown with embedded components.
4. **Speaking Engagements**: Display and manage upcoming speaking events.
5. **Project Showcase**: Highlight personal and professional projects.
6. **AI Chat Integration**: GPT-4 powered chatbot for interactive site exploration.
7. **Accessibility Focus**: Ensure WCAG 2.1 AA compliance throughout the site.
8. **Performance Optimization**: Achieve and maintain high Lighthouse scores.
9. **SEO Optimization**: Implement best practices for search engine visibility.
10. **Contact Form**: Secure, spam-protected contact form for inquiries.

## 🛠️ Tech Stack

- **Framework**: SvelteKit
- **Language**: TypeScript
- **Styling**: Tailwind CSS with CSS Custom Properties
- **Build Tool**: Vite
- **Package Manager**: pnpm
- **Content**: MDsveX (Markdown + Svelte)
- **AI Integration**: OpenAI API (GPT-4)
- **Deployment**: Netlify
- **Forms**: Netlify Forms
- **Analytics**: Plausible Analytics
- **Testing**: Vitest (Unit), Playwright (E2E)
- **Linting/Formatting**: ESLint, Prettier
- **Documentation**: Storybook
- **Design System**: Figma Tokens + Style Dictionary
- **Performance Monitoring**: Web Vitals
- **Version Control**: Git + GitHub

## 🚦 Getting Started

1. **Clone the repository**:
   ```bash
   git clone [your-repo-url]
   cd my-website
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Set up environment variables**:
   Create a `.env` file:
   ```
   OPENAI_API_KEY=your_api_key_here
   ```

4. **Run the development server**:
   ```bash
   pnpm run dev
   ```

5. **Open your browser**:
   Navigate to `http://localhost:5173`

## 🚀 Building for Production

To create a production version of your app:

1. **Build the project**:
   ```bash
   pnpm run build
   ```

2. **Preview the production build** (optional):
   ```bash
   pnpm run preview
   ```

3. **Deploy to Netlify**:
   The project is set up for automatic deployment to Netlify. Simply push your changes to the main branch of your GitHub repository, and Netlify will automatically build and deploy your site.

## 📦 Working with this Project

### Package Management

This project uses pnpm as the package manager. Here are some common commands:

- **Install dependencies**:
  ```bash
  pnpm install
  ```

- **Add a new dependency**:
  ```bash
  pnpm add <package-name>
  ```

- **Add a dev dependency**:
  ```bash
  pnpm add -D <package-name>
  ```

- **Update dependencies**:
  ```bash
  pnpm update
  ```

### Available Scripts

The following scripts are available in the `package.json`:

- `pnpm run dev`: Start the development server
- `pnpm run build`: Build the project for production
- `pnpm run preview`: Preview the production build locally
- `pnpm run test`: Run all tests (integration and unit)
- `pnpm run check`: Check for TypeScript errors
- `pnpm run lint`: Run linting checks
- `pnpm run format`: Format code using Prettier
- `pnpm run test:integration`: Run integration tests with Playwright
- `pnpm run test:unit`: Run unit tests with Vitest

### Development Workflow

1. Make changes to your code
2. Run `pnpm run check` to check for TypeScript errors
3. Run `pnpm run lint` to check for linting issues
4. Run `pnpm run format` to format your code
5. Run `pnpm run test` to ensure all tests pass
6. Commit your changes and push to GitHub
7. Netlify will automatically deploy your changes

Remember to keep your dependencies up to date and regularly check for security vulnerabilities using `pnpm audit`.

