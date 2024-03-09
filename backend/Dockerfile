# Usa la imagen base de Node.js versión 18.17.0
FROM node:20

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el archivo package.json y package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia todos los archivos al directorio de trabajo actual (/app)
COPY . .

# Expone el puerto 3000 (o el puerto que uses en tu aplicación)
EXPOSE 8082

# Comando para ejecutar la aplicación cuando se inicie el contenedor
CMD ["npm", "run", "start"]