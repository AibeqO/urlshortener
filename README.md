# URL Shortener API
 
Этот проект реализует простой сервис для сокращения URL-адресов с использованием Node.js и Express.
 
## Возможности
 
- Сокращение длинных URL-адресов
- Перенаправление с использованием сокращенных URL-адресов
 
## Предварительные требования
 
- Установленный [Node.js](https://nodejs.org/en/) (v12.x или выше)
- Установленный [Visual Studio Code](https://code.visualstudio.com/)
 
## Установка
 
### Шаг 1: Клонирование репозитория
 
1. Откройте Visual Studio Code.
2. Откройте терминал в Visual Studio Code, нажав `Ctrl + \`` или выбрав `View > Terminal` в меню.
3. В терминале выполните команду для клонирования репозитория (или скачайте файлы проекта и распакуйте их в нужную директорию):
git clone https://github.com/AibeqO/urlshortener.git

# Использование

1. В терминале node server.js
2. Откройте Postman.
2. Нажмите на кнопку New и выберите HTTP Request.
3. Убедитесь, что метод запроса установлен на POST.
4. Введите URL для запроса: http://localhost:3000/shorten.
5. Перейдите на вкладку Body.
6. Выберите raw и измените тип на JSON.
7. Введите JSON объект:
    json
    {
      "url": "http://google.com"
    }
8. Нажмите Send.
9. Получите ответ в виде JSON объекта с сокращенным URL как значения свойства url.


