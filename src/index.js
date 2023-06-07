import React from 'react';
import ReactDOM from 'react-dom/client';

import App from 'App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Візьми своє рішення завдання з попередньої домашньої роботи і додай зберігання контактів телефонної книги в localStorage.
// Використовуй методи життєвого циклу.

// Під час додавання та видалення контакту контакти зберігаються у локальне сховище.
// Під час завантаження застосунку контакти, якщо такі є, зчитуються з локального сховища і записуються у стан.
