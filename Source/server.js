// Импорт необходимых модулей
const express = require('express');
const isUrl = require('is-url');
const { v4: uuidv4 } = require('uuid');
 
// Создаем экземпляр приложения Express
const app = express();
const port = 3000; // Устанавливаем порт для сервера
 
// Middleware для парсинга JSON
app.use(express.json());
 
// Хранилище для URL и сокращенных кодов (в памяти)
const urlDatabase = {};
 
// Обработчик для корневого маршрута
app.get('/', (req, res) => {
    res.send('Welcome to the URL Shortener API. Use POST /shorten to shorten URLs.');
});
 
// Маршрут для сокращения URL
app.post('/shorten', (req, res) => {
    const { url } = req.body; // Извлекаем URL из тела запроса
 
    // Проверка валидности URL
    if (!isUrl(url)) {
        return res.status(400).json({ error: 'Invalid URL' }); // Возвращаем ошибку, если URL не валидный
    }
 
    // Генерация уникального кода
    const shortcode = uuidv4().slice(0, 8);
    urlDatabase[shortcode] = url; // Сохраняем URL в базе данных
 
    // Возвращаем ответ с сокращенным кодом и URL для перенаправления
    res.json({
        shortcode: shortcode,
        redirect: `http://localhost:${port}/${shortcode}`
    });
});
 
// Маршрут для перенаправления по сокращенному коду
app.get('/:shortcode', (req, res) => {
    const { shortcode } = req.params; // Извлекаем сокращенный код из параметров маршрута
    const url = urlDatabase[shortcode]; // Получаем оригинальный URL из базы данных
 
    // Проверка наличия URL в базе данных
    if (url) {
        res.redirect(url); // Перенаправляем на оригинальный URL
    } else {
        res.status(404).json({ error: 'Not found' }); // Возвращаем ошибку, если код не найден
    }
});
 
// Запуск сервера на указанном порту
app.listen(port, () => {
console.log(`Server is running on http://localhost:${port}`); // Сообщение о запуске сервера
});