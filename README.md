
https://github.com/user-attachments/assets/1bf876ec-0ed0-42ed-8f66-fbe2d32c5a03

# ☢️ Silicon Maze — The Last Portfolio

> **A digital survival archive from the final days of the network.**

**Silicon Maze — The Last Portfolio** is a futuristic, cyber-dystopian personal portfolio built around the **Doomsday / Last Survivor / Digital Archive** concept.

Instead of presenting a portfolio as a collection of conventional sections, the website treats the visitor as someone who has discovered a **surviving digital archive**. The entire experience — from the boot sequence to the final transmission — contributes to a single narrative.

Built with **React + Vite**, the interface combines terminal interactions, HUD-inspired components, CRT scanlines, system diagnostics, project archives, and responsive layouts to create an immersive portfolio experience.

---

## 🛰️ The Concept

The world has gone offline.

Networks are disappearing. Systems are failing. Digital records are being lost.

One final archive remains.

**The Last Portfolio** is that archive.

The visitor progresses through:

```text
BOOT SEQUENCE
      ↓
SURVIVOR IDENTIFICATION
      ↓
PERSONAL ARCHIVE
      ↓
TECHNICAL ARSENAL
      ↓
PROJECT ARCHIVES
      ↓
SURVIVAL LOG
      ↓
FINAL TRANSMISSION
```

Every section is designed to feel like part of the same surviving system rather than an unrelated portfolio page.

---

## ✨ Features

### ⚡ Boot Sequence Protocol

The website begins with an animated system initialization sequence containing:

- Power diagnostics
- Memory verification
- Identity recovery
- Archive decryption
- Network status warnings
- Loading animation

The boot sequence establishes the Doomsday narrative before the main portfolio becomes accessible.

---

### 🖥️ Survivor HUD

The main interface contains futuristic system elements such as:

- Live system status
- Memory integrity indicator
- Coordinates
- Survivor ID
- Archive status
- System warnings
- Terminal prompts
- HUD-style information panels

---

### 🧑‍🚀 Survivor Archive

The personal introduction is presented as a recovered identity record containing:

- Name
- Role
- Education
- Location
- Areas of interest
- Personal introduction
- Technical focus
- Goals
- Personal statistics

The section is designed to communicate the identity of the survivor without relying on a conventional resume layout.

---

### 🛠️ Technical Arsenal

Skills are organized into technical categories instead of being displayed as a simple list.

Current categories include:

- Languages
- Frontend
- Backend
- Databases
- Engineering
- Developer Tools

Each category uses an interactive card-based interface with technology tags and system-status indicators.

---

### 📁 Project Archives

Projects are represented as recovered mission files.

Each project contains:

- Mission number
- Project name
- Classification
- Description
- Technologies used
- Project status
- Visual archive representation
- External project link

Clicking a project opens a dedicated archive modal containing additional information.

---

### 💻 Interactive Survivor Terminal

The portfolio contains a built-in terminal interface.

Available commands include:

```text
about
skills
projects
missions
contact
home
```

For example:

```text
root@archive:~$ projects
```

automatically navigates the survivor to the project archives.

The terminal reinforces the idea that the portfolio itself is a surviving computer system.

---

### 📡 Final Transmission

The final section acts as a communication terminal where visitors can access:

- GitHub
- LinkedIn
- Email

The section is presented as the survivor's final transmission before the network disappears.

---

### 📱 Responsive Experience

The interface adapts to:

- Desktop
- Laptop
- Tablet
- Mobile

Responsive behavior includes:

- Mobile navigation
- Adaptive project layouts
- Responsive typography
- Flexible skill grids
- Mobile-friendly terminal
- Responsive contact links
- No intentional horizontal overflow

---

### 🎞️ Visual Effects

The interface uses several effects to reinforce the futuristic archive aesthetic:

- CRT scanlines
- Digital noise
- Glowing elements
- Grid backgrounds
- HUD panels
- Glitch-inspired typography
- Animated orbital elements
- Terminal UI
- Hover transitions
- Boot animations
- Custom cursor tracking

The effects are intentionally subtle enough to preserve readability.

---

# 📁 Project Structure

```text
silicon-maze/
│
├── public/
│   └── README.txt
│
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── BootScreen.jsx
│   │   │   └── SectionHeading.jsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   └── modals/
│   │       ├── ProjectModal.jsx
│   │       └── TerminalModal.jsx
│   │
│   ├── data/
│   │   └── portfolioData.js
│   │
│   ├── pages/
│   │   ├── Hero.jsx
│   │   ├── Identity.jsx
│   │   ├── Arsenal.jsx
│   │   ├── Archives.jsx
│   │   ├── Journey.jsx
│   │   └── Transmission.jsx
│   │
│   ├── utils/
│   │   ├── navigation.js
│   │   └── formatTime.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

> **Note:** The architecture above represents the intended modular structure. If the current implementation keeps some components directly inside `App.jsx`, they can be extracted into these folders as the project evolves.

---

# 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React** | UI development |
| **Vite** | Development server and production build |
| **JavaScript** | Application logic and interactions |
| **CSS3** | Visual system, responsive design and animations |
| **Lucide React** | Interface icons |
| **Google Fonts** | Typography |

### Typography

The interface uses:

- **Space Grotesk** — primary display/interface typography
- **IBM Plex Mono** — terminal, system and diagnostic typography

---

# 🚀 Getting Started

## Prerequisites

Make sure you have the following installed:

- **Node.js 18+**
- **npm**

Check your Node.js version:

```bash
node --version
```

Check npm:

```bash
npm --version
```

---

## Installation

Clone the repository:

```bash
git clone <YOUR_REPOSITORY_URL>
```

Move into the project directory:

```bash
cd silicon-maze
```

Install dependencies:

```bash
npm install
```

---

## 💻 Run Locally

Start the Vite development server:

```bash
npm run dev
```

Vite will provide a local development URL, typically:

```text
http://localhost:5173
```

Open the URL in your browser.

---

# 📦 Production Build

Create an optimized production build:

```bash
npm run build
```

The production files will be generated inside:

```text
dist/
```

To test the production build locally:

```bash
npm run preview
```

---

# ⚙️ Personalization

The portfolio is designed to be easily customized for another survivor.

## 1. Profile

Update the profile information:

```javascript
const profile = {
  name: "Your Name",
  callsign: "SURVIVOR_001",
  role: "Your Role",
  intro: "Your introduction...",
  location: "Your Location",
  email: "your@email.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername"
};
```

---

## 2. Skills

Add or remove technologies from the skill groups:

```javascript
const skillGroups = [
  {
    title: "LANGUAGES",
    skills: [
      "JavaScript",
      "Python",
      "C++"
    ]
  }
];
```

Only include technologies you are genuinely familiar with.

---

## 3. Projects

Add your projects to the project archive:

```javascript
const projects = [
  {
    id: "01",
    title: "PROJECT NAME",
    classification: "WEB SYSTEM",
    description: "Project description...",
    stack: [
      "React",
      "Node.js",
      "MongoDB"
    ],
    tag: "DEPLOYED SYSTEM",
    link: "https://your-project.com"
  }
];
```

Each project should ideally have:

- A meaningful name
- A clear description
- Technologies used
- A live link
- A GitHub repository
- A screenshot or visual representation

---

## 4. Survival Timeline

Update the timeline to represent your actual journey:

```javascript
const timeline = [
  [
    "2024",
    "FIRST SYSTEM",
    "Started building my first serious project."
  ],
  [
    "2025",
    "EXPANSION",
    "Started exploring full-stack development."
  ],
  [
    "2026",
    "CURRENT MISSION",
    "Building larger engineering and software systems."
  ]
];
```

---

# 🎨 Design System

The visual language is built around a small set of design principles.

### Color Palette

```text
Background
#070A08

Primary Green
#B8FF68

Secondary Green
#6C9B3B

Primary Text
#E8EEE5

Muted Text
#879184

Warning Red
#FF5252
```

### Design Principles

The interface follows:

```text
DARK
  +
FUTURISTIC
  +
TECHNICAL
  +
MINIMAL
  +
IMMERSIVE
```

The Doomsday theme is expressed through the interface itself rather than relying on decorative apocalypse imagery.

---

# 🧩 Interaction Design

The website contains several interactive elements.

### Navigation

Navigation buttons smoothly scroll to:

```text
IDENTITY
ARSENAL
ARCHIVES
TRANSMISSION
```

### Project Archive

Clicking a project opens a modal containing its complete mission record.

### Terminal

The terminal accepts navigation commands:

```text
about
skills
projects
missions
contact
home
```

### Hover Interactions

Interactive cards respond with:

- Border transitions
- Translation effects
- Glow effects
- Icon animations

---

# 🌐 Deployment

The portfolio can be deployed using any modern static hosting platform.

Recommended options:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

---

## ▲ Deploying to Vercel

### 1. Push to GitHub

```bash
git add .
git commit -m "feat: create Silicon Maze portfolio"
git push origin main
```

### 2. Import into Vercel

Create a new project in Vercel and select the GitHub repository.

### 3. Configure the build

```text
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
```

### 4. Deploy

Click **Deploy**.

Vercel will build and host the portfolio automatically.

---

# 🔗 Recommended Submission Checklist

Before submitting the hackathon project, verify:

### Survivor Profile

- [ ] Name is correct
- [ ] Role is correct
- [ ] Introduction is personalized
- [ ] Interests are included
- [ ] Education is included
- [ ] Achievements are included

### Arsenal

- [ ] Skills are categorized
- [ ] Only genuine skills are listed
- [ ] Skills are readable
- [ ] Interface is interactive

### Archives

- [ ] At least 2 projects are included
- [ ] Every project has a description
- [ ] Technologies are listed
- [ ] Project screenshots/visuals are added
- [ ] Live links work
- [ ] GitHub links work

### Doomsday Interface

- [ ] Boot sequence works
- [ ] Navigation works
- [ ] Terminal works
- [ ] Animations work
- [ ] Theme is consistent
- [ ] No broken UI elements

### Responsive Design

Test the portfolio at:

```text
1920 × 1080
1440 × 900
1024 × 768
768 × 1024
390 × 844
```

Check for:

- [ ] No horizontal scrolling
- [ ] Readable text
- [ ] Working navigation
- [ ] Accessible buttons
- [ ] Proper project layout
- [ ] Mobile terminal experience

### Final Transmission

- [ ] GitHub link works
- [ ] LinkedIn link works
- [ ] Email link works
- [ ] Public deployment works
- [ ] No placeholder links remain

---

# 🏆 Hackathon Evaluation Alignment

The project is designed around the task's evaluation criteria:

| Evaluation Area | Implementation |
|---|---|
| **Survivor Profile — 25 pts** | Identity archive, personal story, education, interests and achievements |
| **Arsenal — 20 pts** | Categorized technical skill cards and interactive terminal |
| **Archives — 30 pts** | Mission-based project records and project modals |
| **Design & UX — 15 pts** | Doomsday HUD, CRT effects, responsive layout and navigation |
| **Contact & Deployment — 10 pts** | Final transmission with GitHub, LinkedIn, email and deployment support |

**Total: 100 points**

---

# 🧠 Design Philosophy

The goal was not to create a normal portfolio and simply add a dark background.

The portfolio treats the **website itself as the artifact**.

Instead of:

```text
About
Skills
Projects
Contact
```

the experience becomes:

```text
SYSTEM BOOT
     ↓
WHO AM I?
     ↓
WHAT CAN I BUILD?
     ↓
WHAT HAVE I BUILT?
     ↓
HOW DID I GET HERE?
     ↓
CAN YOU RECEIVE THIS TRANSMISSION?
```

This creates a single narrative connecting every section of the portfolio.

---

# 📜 License

This is a personal portfolio project created for educational and hackathon purposes.

You are free to adapt the design and architecture for your own personal portfolio.

---

## ☢️ FINAL TRANSMISSION

```text
┌────────────────────────────────────────────┐
│                                            │
│  ARCHIVE STATUS: STABLE                    │
│  NETWORK STATUS: OFFLINE                   │
│  SURVIVOR STATUS: ACTIVE                   │
│                                            │
│  THE WORLD MAY GO OFFLINE.                 │
│  THE STORY DOESN'T HAVE TO.                │
│                                            │
│  END OF TRANSMISSION.                      │
│                                            │
└────────────────────────────────────────────┘
```

**Built with React. Survived with code.**
