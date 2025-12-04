# 🚀 Complete Setup Guide

## Backend Setup (FastAPI + LangGraph)

### Step 1: Navigate to Backend
```bash
cd "D:\lovable\ans_lovable\insight-weaver\Backend"
```

### Step 2: Create Virtual Environment
```bash
python -m venv venv
```

### Step 3: Activate Virtual Environment
**Windows:**
```bash
venv\Scripts\activate
```

**Mac/Linux:**
```bash
source venv/bin/activate
```

### Step 4: Install Dependencies
```bash
pip install -r requirements.txt
```

### Step 5: Setup Environment Variables
```bash
# Copy example env file
cp .env.example .env

# Edit .env and add your keys
notepad .env  # Windows
nano .env     # Mac/Linux
```

**Required Keys:**
```env
OPENAI_API_KEY=sk-your-key-here
```

**Optional (for full features):**
```env
LANGFUSE_PUBLIC_KEY=pk-...
LANGSMITH_API_KEY=ls-...
QDRANT_URL=http://localhost:6333
```

### Step 6: Run Backend Server
```bash
python main.py
```

Server will start at: `http://localhost:8000`

---

## Frontend Setup

### Step 1: Add API URL to Frontend
Create/edit `.env` in the root project folder:

```bash
cd "D:\lovable\ans_lovable\insight-weaver"
```

Create `.env` file:
```env
VITE_API_URL=http://localhost:8000/api/v1
```

### Step 2: Install Frontend Dependencies (if needed)
```bash
npm install
```

### Step 3: Run Frontend
```bash
npm run dev
```

Frontend will start at: `http://localhost:5173`

---

## Testing the Integration

### 1. Test Backend Health
Open browser: `http://localhost:8000/health`

Or use curl:
```bash
curl http://localhost:8000/health
```

### 2. Test Chat API
```bash
curl -X POST http://localhost:8000/api/v1/chat \
  -H "Content-Type: application/json" \
  -d '{
    "message": "What is AGNETICT AI?",
    "conversation_id": "test_123"
  }'
```

### 3. Test Full Integration
1. Make sure backend is running on port 8000
2. Make sure frontend is running on port 5173
3. Navigate to: `http://localhost:5173/ai`
4. Send a message in the chat interface
5. You should get a response from the LangGraph agent!

---

## 📁 Project Structure

```
insight-weaver/
├── Backend/                    # FastAPI Backend
│   ├── app/
│   │   ├── agents/            # LangGraph agents
│   │   │   └── agentic_ai.py  # Main AI agent
│   │   ├── api/               # API routes
│   │   │   └── routes.py      # Chat endpoints
│   │   ├── core/              # Config & logging
│   │   ├── graphs/            # LangGraph workflows
│   │   ├── schemas/           # Pydantic models
│   │   ├── services/          # Vector store, etc.
│   │   └── utils/             # Helpers
│   ├── main.py                # FastAPI app
│   ├── requirements.txt       # Python deps
│   └── .env                   # Environment vars
│
└── src/                       # React Frontend
    └── pages/
        └── GenerativeAI.tsx   # Chat interface (updated)
```

---

## 🎯 Quick Start Commands

**Terminal 1 (Backend):**
```bash
cd Backend
venv\Scripts\activate  # Windows
python main.py
```

**Terminal 2 (Frontend):**
```bash
npm run dev
```

**Visit:** `http://localhost:5173/ai`

---

## 🔧 Troubleshooting

### Backend won't start
- Check if port 8000 is available
- Verify OPENAI_API_KEY is set in .env
- Run: `pip install -r requirements.txt` again

### Frontend can't connect
- Ensure backend is running on port 8000
- Check VITE_API_URL in frontend .env
- Open browser console for error messages

### Chat not working
- Check backend logs in terminal
- Verify OpenAI API key is valid
- Test backend directly: `curl http://localhost:8000/health`

---

## 📚 API Documentation

Once backend is running, visit:
- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

---

## 🎨 Customization

### Adding More Agent Capabilities
Edit: `Backend/app/agents/agentic_ai.py`

### Adding Vector Search
Edit: `Backend/app/services/vector_store.py`

### Custom Prompts
Modify system prompt in: `Backend/app/agents/agentic_ai.py`

---

## 🚀 Deployment

### Backend (Railway/Render)
1. Push Backend folder to Git
2. Set environment variables
3. Deploy with: `python main.py`

### Frontend (Vercel/Netlify)
1. Update VITE_API_URL to production backend URL
2. Deploy frontend

---

Built with ❤️ by Anshul Parate
