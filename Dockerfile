FROM node:20.12.2

WORKDIR /app

# Копируем файлы зависимостей отдельно (для кэширования)
COPY app/package*.json ./

RUN npm install

# Копируем остальной код
COPY app/ .

# Команда по умолчанию
CMD ["make", "test"]
