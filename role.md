# 🧠 PrepBot AI – Your Personal AI-Powered Mock Interviewer

PrepBot AI is an interactive mock interview platform built with MERN stack and AI/ML integrations, offering technical, HR, and custom interviews with real-time feedback, scoring, voice input, and history tracking.


## 🔁 Working Flow

1. **User Registration / Guest Mode**
2. **Select Interview Round** (Technical / HR / Custom)
3. **Question Delivery** → User types/speaks answer
4. **Answer Sent to Backend** → AI/NLP evaluates
5. **AI Feedback + Score Returned** → Real-time display
6. **Summary Page** → View overall feedback
7. **Save in History** → Show on Dashboard
8. **Optional** → Peer Review, Progress Graph

---

## 👥 Developer Role Assignment

### 🧑‍🎨 Frontend Team

#### 🔹 Subhadeep – UI/UX & Design Flow Specialist
**Responsibilities:**
- Page structure, layout design
- TailwindCSS styling and mobile responsiveness
- Reusable components (Buttons, Cards, Modals)
- Implement Framer Motion for animation
- Maintain consistent visual theme

**Tools Required:**
- React.js (Vite)
- TailwindCSS
- HeroIcons / Lucide
- React Router DOM
- Framer Motion

#### 🔹 Srinjoy – Logic & Data Flow Specialist
**Responsibilities:**
- Handle Axios API calls
- Page logic (Interview flow, forms, chat UI)
- Voice input integration (Web Speech API)
- Progress charts using Recharts
- State management (Context API or Zustand)

**Tools Required:**
- React.js
- Axios
- Recharts / Chart.js
- Zustand or React Context
- Web Speech API

---

### 👨‍💻 Backend Team

#### 🔹 Souvik – Auth & User Management Lead
**Responsibilities:**
- JWT-based authentication
- User model & routes (`register`, `login`, `profile`)
- Middleware for authentication
- DB connection setup (MongoDB)
- Manage session tokens and error handlers

**Tools Required:**
- Node.js
- Express.js
- Mongoose
- JWT / Bcrypt
- Postman
- dotenv

#### 🔹 Subham – Interview & AI Integration Lead
**Responsibilities:**
- AI answer evaluation (OpenAI, grammar/sentiment tools)
- Interview session creation, saving & feedback scoring
- Question delivery API (by category/difficulty)
- Progress tracking, history APIs
- Peer review and custom question upload APIs

**Tools Required:**
- Node.js
- Express.js
- OpenAI API
- LanguageTool, TextBlob/Vader
- Mongoose
- Whisper / TensorFlow.js (optional)

---

## 🛣️ Frontend Roadmap

### Week 1:
- ✅ Project setup with Vite + Tailwind
- ✅ Design wireframes (Landing, Login, Dashboard)
- ⏳ Auth pages + Routing
- ⏳ Dashboard layout (cards, CTA buttons)

### Week 2:
- 🔄 Setup Interview Round page UI
- 🔄 Build Chat UI for Interview Room
- 🔄 Implement progress bar, timer

### Week 3:
- 🔄 Integrate Axios with backend
- 🔄 Add voice input (Web Speech API)
- 🔄 Show AI feedback inline

### Week 4:
- 🔄 Build Summary Page + Recharts
- 🔄 History Page (table view)
- 🔄 Profile Page

### Week 5 (Optional):
- 🔄 Peer review system
- 🔄 Emotion detection setup (TensorFlow.js)
- 🔄 Polish UI, animations

---

## 🛣️ Backend Roadmap

### Week 1:
- ✅ Express + MongoDB setup
- ✅ Auth routes (register, login, user)
- ✅ JWT middleware

### Week 2:
- 🔄 Create Mongoose models (User, Question, InterviewSession, Feedback)
- 🔄 Add question delivery APIs
- 🔄 Start working on answer submission route

### Week 3:
- 🔄 Integrate OpenAI/GPT for answer feedback
- 🔄 Implement grammar + sentiment scoring
- 🔄 Return structured feedback JSON

### Week 4:
- 🔄 Build interview history endpoints
- 🔄 Create feedback summary generator
- 🔄 Profile update & stats API

### Week 5 (Optional):
- 🔄 Peer review APIs
- 🔄 Whisper integration for speech-to-text
- 🔄 Emotion model APIs with TensorFlow.js

---

## 📂 Models Required

1. **User** – Auth, history
2. **Question** – Stored questions by topic
3. **InterviewSession** – One session with Q&A
4. **Feedback** – AI analysis per answer
5. **PeerReview** – (Optional) Peer ratings
6. **CustomQuestion** – (Optional) User-created questions

---

## 🔑 API Endpoints Overview

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/register` | Register new user |
| `POST` | `/api/auth/login` | Login |
| `GET` | `/api/user/me` | Get current user |
| `GET` | `/api/questions` | Get interview questions |
| `POST` | `/api/interview/submit` | Submit answer & get feedback |
| `GET` | `/api/interview/history` | Get past interviews |
| `POST` | `/api/peer/review` | Submit peer review |
| `GET` | `/api/progress` | View progress graph |

---

## 🧪 Testing Tools

- Postman (API testing)
- Thunder Client (VS Code extension)
- MongoDB Atlas (Data visualization)
- Swagger (API docs – optional)

---

## 📦 Deployment Suggestions

| Platform | Usage |
|----------|-------|
| **Render / Railway** | Deploy Express backend |
| **Vercel / Netlify** | Deploy React frontend |
| **MongoDB Atlas** | Cloud DB |
| **OpenAI / HuggingFace APIs** | NLP scoring |

---

## 🙌 Final Note

Team:
- 🔵 Subhadeep: Frontend – UI/UX & layout
- 🔵 Srinjoy: Frontend – Logic, voice input, charts
- 🔴 Souvik: Backend – Auth, DB, session tracking
- 🔴 Subham: Backend – AI logic, feedback, interview logic

Work together with a GitHub project board, branches for features, and frequent sync to avoid conflicts. Let’s build PrepBot AI to the next level! 💥

