# Anshul Parate - AI Portfolio Assistant 🚀

> Fast, intelligent chatbot powered by LangGraph & Gemini Flash to showcase Anshul Parate's portfolio

[![FastAPI](https://img.shields.io/badge/FastAPI-0.115.5-009688?style=flat&logo=fastapi)](https://fastapi.tiangolo.com/)
[![LangGraph](https://img.shields.io/badge/LangGraph-0.2.45-FF6F00?style=flat)](https://github.com/langchain-ai/langgraph)
[![Python](https://img.shields.io/badge/Python-3.10+-blue?style=flat&logo=python)](https://www.python.org/)

## ✨ Features

- ⚡ **Ultra-Fast Responses** - Optimized with Gemini Flash model
- 🧠 **Smart Memory** - Maintains last 10 conversations per session
- 🎯 **Context-Aware** - Intelligent profile lookup for quick answers
- 🔗 **Rich Information** - Complete portfolio data with live project links
- 📊 **Pydantic Validated** - Type-safe profile data structure
- 🤖 **LangGraph Powered** - Agentic workflow for conversational intelligence
- 🌐 **RESTful API** - Easy integration with any frontend

## 🎯 What This Bot Does

This AI assistant provides instant information about **Anshul Parate**:

- 👨‍💻 Professional background & skills
- 🚀 Projects (RAG System, Rockfall Detection, AI Chatbots)
- 📧 Contact information with direct links
- 🎓 Education & achievements
- 💼 Work experience
- 🔗 GitHub, LinkedIn, Portfolio links

## 🚀 Quick Start

### Prerequisites

- Python 3.10+
- Google Gemini API Key ([Get one here](https://makersuite.google.com/app/apikey))

### Installation

1. **Clone & Navigate**
```bash
cd D:\lovable\ans_lovable\insight-weaver\Backend
```

2. **Create Virtual Environment**
```bash
python -m venv venv
venv\Scripts\activate  # Windows
# source venv/bin/activate  # Linux/Mac
```

3. **Install Dependencies**
```bash
pip install -r requirements.txt
```

4. **Set Up Environment**
```bash
# Create .env file
echo GOOGLE_API_KEY=your_api_key_here > .env
```

5. **Run Server**
```bash
python main.py
```

🎉 Server runs at: http://localhost:8000

## 📡 API Endpoints

### 1. Chat Endpoint (Main)
```bash
POST /chat
{
  "message": "Tell me about Anshul's RAG project",
  "session_id": "user123"  # optional
}
```

**Response:**
```json
{
  "response": "Anshul's Multi-Modular RAG System...",
  "success": true,
  "timestamp": "2024-12-04T10:30:00",
  "message_count": 5
}
```

### 2. Quick Info (Instant, No LLM)
```bash
POST /quick-info
{
  "info_type": "projects"  # contact, skills, education, etc.
}
```

### 3. Full Profile
```bash
GET /profile
```

### 4. Session Management
```bash
GET /sessions           # List active sessions
POST /reset?session_id=xyz  # Reset conversation
DELETE /sessions/cleanup     # Clean expired sessions
```

### 5. Health Check
```bash
GET /health
```

## 🧪 Testing

Run comprehensive tests:
```bash
python test_api.py
```

Tests include:
- Health check
- Profile retrieval
- Quick info endpoints
- Chat functionality
- Memory limit verification (10 messages)
- Session management

## 📁 Project Structure

```
Backend/
├── main.py              # FastAPI application with optimized endpoints
├── agent.py             # LangGraph agent with 10-message memory
├── profile_data.py      # Pydantic models & Anshul's data
├── config.py            # Settings & configuration
├── test_api.py          # Comprehensive test suite
├── requirements.txt     # Python dependencies
└── .env                 # API keys (create this)
```

## 🎨 Example Queries

Try these with the chatbot:

```
✅ "Who is Anshul Parate?"
✅ "Tell me about the Multi-Modular RAG project"
✅ "What are his Generative AI skills?"
✅ "Show me his GitHub repositories"
✅ "How can I contact him?"
✅ "What's his educational background?"
✅ "Tell me about the Rockfall Detection System"
✅ "Give me links to his projects"
```

## 🔧 Configuration

Edit `config.py` to customize:

```python
GEMINI_MODEL = "gemini-2.0-flash-exp"  # Fast model
MAX_CONVERSATION_HISTORY = 10          # Memory limit
GEMINI_MAX_OUTPUT_TOKENS = 1024        # Response length
SESSION_TIMEOUT_MINUTES = 30           # Auto-cleanup
```

## 🎯 Key Technical Details

### Memory Management
- ✅ Keeps last **10 conversations** per session
- ✅ Auto-trims older messages for efficiency
- ✅ System prompt preserved across conversation

### Performance Optimizations
- ⚡ **Gemini Flash** model for 2x faster responses
- ⚡ **Cached agent** initialization
- ⚡ **Context pre-fetching** for common queries
- ⚡ **Direct data lookup** via quick-info endpoint

### LangGraph Architecture
```
User Input → State Management → Agent Node → LLM → Response
     ↓
Context Lookup (if relevant)
     ↓
Message Trimming (10 max)
     ↓
Session Update
```

## 🔗 Important Links

| Resource | URL |
|----------|-----|
| Portfolio | https://anshul-dev-profolio.vercel.app/ |
| GitHub | https://github.com/AnshulParate2004 |
| LinkedIn | https://linkedin.com/in/anshulparate |
| RAG Project | https://multi-modul-rag.vercel.app/ |
| Rockfall System | https://sih-nu-liart.vercel.app/ |

## 📧 Contact

**Anshul Parate**
- 📧 Email: anshulnparate@gmail.com
- 📱 Phone: +91 8208170566
- 🌐 Portfolio: [anshul-dev-profolio.vercel.app](https://anshul-dev-profolio.vercel.app/)

## 🛠️ Tech Stack

- **Backend**: FastAPI
- **AI**: LangGraph + LangChain
- **LLM**: Google Gemini 2.0 Flash
- **Validation**: Pydantic
- **Memory**: In-memory session store with 10-message limit

## 📝 License

Built by Anshul Parate for portfolio demonstration purposes.

---

**Made with ❤️ by Anshul Parate** | Generative AI Developer
