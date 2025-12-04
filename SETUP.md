# 🚀 Quick Setup Guide

## Step-by-Step Installation

### 1. Environment Setup
```bash
# Navigate to backend directory
cd D:\lovable\ans_lovable\insight-weaver\Backend

# Create virtual environment
python -m venv venv

# Activate it (Windows)
venv\Scripts\activate
```

### 2. Install Dependencies
```bash
pip install -r requirements.txt
```

### 3. Configure API Key
Create a `.env` file:
```env
GOOGLE_API_KEY=your_google_gemini_api_key_here
```

Get your API key: https://makersuite.google.com/app/apikey

### 4. Run the Server
```bash
python main.py
```

### 5. Test It
```bash
# In another terminal
python test_api.py
```

## 🎯 Features

✅ **Fast Responses** - Gemini Flash model  
✅ **10-Message Memory** - Per session  
✅ **LangGraph Powered** - Agentic workflows  
✅ **Pydantic Validated** - Type-safe data  
✅ **Context-Aware** - Smart profile lookup  

## 📡 API Usage

### Chat
```bash
curl -X POST http://localhost:8000/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Tell me about Anshul"}'
```

### Quick Info
```bash
curl -X POST http://localhost:8000/quick-info \
  -H "Content-Type: application/json" \
  -d '{"info_type": "projects"}'
```

## 📚 Documentation
Visit: http://localhost:8000/docs

## 🎓 About Anshul Parate
**Full-Stack Generative AI Developer**
- 🔗 Portfolio: https://anshul-dev-profolio.vercel.app/
- 💼 LinkedIn: https://linkedin.com/in/anshulparate
- 🐙 GitHub: https://github.com/AnshulParate2004
- 📧 Email: anshulnparate@gmail.com

---
Made with ❤️ by Anshul Parate
