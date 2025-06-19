
Built by https://www.blackbox.ai

---

# SOUR - Your Coding Assistant

SOUR is a web-based coding assistant powered by CodeLlama. It allows developers to ask coding questions and receive responses in a chat interface. The application connects to a backend API to generate code-related answers through a user-friendly chat experience.

## Project Overview

SOUR is designed to streamline coding queries, making it easier for developers to get the assistance they need quickly. The application consists of a frontend that communicates with a backend server, which interacts with the CodeLlama model for generating code-related responses.

## Installation

To run SOUR locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/sour.git
   cd sour
   ```

2. **Set up the backend**:
   - Create a virtual environment:
     ```bash
     python -m venv venv
     source venv/bin/activate  # On Windows use `venv\Scripts\activate`
     ```
   - Install required packages:
     ```bash
     pip install -r requirements.txt
     ```

3. **Set environment variables**:
   Create a `.env` file in the root of the project and add the following:
   ```bash
   OLLAMA_API_URL=http://localhost:11434/api/generate
   PORT=5000
   ```

4. **Run the application**:
   Start the Flask application:
   ```bash
   python app.py
   ```
   The application will be running at `http://localhost:5000`.

5. **Open the frontend**:
   Open `index.html` in your browser to access the chat interface.

## Usage

1. Once the web application is open, type your coding question in the input field.
2. Press **Send** to submit your question.
3. Wait for the assistant to respond with generated code or information.

## Features

- Interactive chat interface.
- Easy-to-use input field for coding queries.
- Real-time response generation using CodeLlama.
- User-friendly design with responsive layouts.

## Dependencies

The project has the following dependencies for the backend (included in `requirements.txt`):

- Flask
- requests
- python-dotenv

For the frontend, the following libraries are linked directly in the HTML (none at the moment), but it can be easily extended to include other libraries as needed.

## Project Structure

```
sour/
│
├── index.html          # Frontend HTML file
├── styles.css          # CSS for styling the web app
├── script.js           # JavaScript for frontend logic
├── app.py              # Flask backend application
├── requirements.txt    # Python dependencies
└── render.yaml         # Configuration for deployment services
```

## Contributing

If you would like to contribute to SOUR, feel free to submit a pull request or open an issue with suggestions.

## License

This project is licensed under the MIT License. See the LICENSE file for details.