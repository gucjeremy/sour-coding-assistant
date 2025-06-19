document.addEventListener('DOMContentLoaded', () => {
  const chatForm = document.getElementById('chat-form');
  const userInput = document.getElementById('user-input');
  const chatBox = document.getElementById('chat-box');

  function appendMessage(text, className) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message ' + className;
    messageDiv.textContent = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  function showTyping() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message typing';
    typingDiv.textContent = 'Typing...';
    chatBox.appendChild(typingDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
    return typingDiv;
  }

  chatForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const prompt = userInput.value.trim();
    if (!prompt) return;

    appendMessage(prompt, 'user-message');
    userInput.value = '';
    userInput.disabled = true;

    const typingIndicator = showTyping();

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt })
      });

      const data = await response.json();
      chatBox.removeChild(typingIndicator);

      if (response.ok) {
        appendMessage(data.response, 'bot-message');
      } else {
        appendMessage('Error: ' + (data.error || 'Unknown error'), 'error-message');
      }
    } catch (error) {
      chatBox.removeChild(typingIndicator);
      appendMessage('Error: ' + error.message, 'error-message');
    } finally {
      userInput.disabled = false;
      userInput.focus();
    }
  });
});
