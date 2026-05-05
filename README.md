React Portfolio Platform
A personal project showcase app built with React and Tailwind CSS. Add, search, and display your projects in a clean, modern UI.

Features

Add Projects — Submit a project with a title and description via a styled form
Live Search — Filter projects in real time as you type, matching against both title and description
Project Display — All added projects are listed instantly with no page refresh
Responsive Design — Styled with Tailwind CSS utility classes for a sleek dark UI


Tech Stack
ToolPurposeReact 19UI frameworkVite 8Build tool and dev serverTailwind CSS 3Utility-first stylingPostCSS + AutoprefixerCSS processing

Project Structure
src/
├── components/
│   ├── AddProject.jsx      # Form to add a new project
│   ├── SearchProject.jsx   # Search input + filtered project list
│   └── LandingPage.jsx     # Parent component — owns shared state
├── App.jsx                 # Root component
├── main.jsx                # Entry point
└── index.css               # Tailwind directives

How It Works
State is managed in LandingPage and shared downward via props — following React's "lift state up" pattern:
LandingPage  ← owns projects[] state
    ├── AddProject    ← receives addProject() function as prop, calls it on submit
    └── SearchProject ← receives projects[] as prop, filters and displays them

Getting Started
Prerequisites

Node.js 18+
npm

Install and Run
bash# Clone the repo
git clone https://github.com/your-username/react-portfolio-platform.git
cd react-portfolio-platform

# Install dependencies
npm install

# Start the dev server
npm run dev
Open http://localhost:5173 in your browser.
Build for Production
bashnpm run build

Key React Concepts Used

Lifting state up — shared projects state lives in the parent LandingPage
Props down, events up — data flows down via props; child components communicate up by calling prop functions
Controlled inputs — all form inputs are controlled via useState
Derived state — filtered search results are computed directly from props, no extra state needed