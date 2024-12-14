# Documentación tecnica

## Estructura del proyecto
```
┣ 📂public
┃ ┗ 📜vite.svg
┣ 📂src
┃ ┣ 📂assets
┃ ┃ ┗ 📜react.svg
┃ ┣ 📂components
┃ ┃ ┣ 📂employees
┃ ┃ ┃ ┣ 📜EmployeeModal.jsx
┃ ┃ ┃ ┗ 📜EmployeeTable.jsx
┃ ┃ ┣ 📂generic
┃ ┃ ┃ ┗ 📜Sidebar.jsx
┃ ┃ ┗ 📂requests
┃ ┃   ┣ 📜RequestModal.jsx
┃ ┃   ┗ 📜RequestTable.jsx
┃ ┣ 📂contexts
┃ ┃ ┗ 📜AuthContext.jsx
┃ ┣ 📂pages
┃ ┃ ┣ 📜EmployeesPage.jsx
┃ ┃ ┣ 📜LoginPage.jsx
┃ ┃ ┣ 📜NotFoundPage.jsx
┃ ┃ ┣ 📜RequestsPage.jsx
┃ ┃ ┗ 📜UnauthorizedPage.jsx
┃ ┣ 📂routes
┃ ┃ ┣ 📜AppRouter.jsx
┃ ┃ ┗ 📜ProtectedRoute.jsx
┃ ┣ 📂services
┃ ┃ ┣ 📜authService.js
┃ ┃ ┣ 📜employeeService.js
┃ ┃ ┗ 📜requestService.js
┃ ┣ 📂styles
┃ ┃ ┗ 📜index.css
┃ ┣ 📂tests
┃ ┣ 📂utils
┃ ┃ ┣ 📜alertService.js
┃ ┃ ┣ 📜authHelpers.js
┃ ┃ ┗ 📜constants.js
┃ ┣ 📜App.jsx
┃ ┗ 📜main.jsx
┣ 📜.env-example
┣ 📜.env.local
┣ 📜.gitignore
┣ 📜eslint.config.js
┣ 📜index.html
┣ 📜package.json
┣ 📜pnpm-lock.yaml
┣ 📜postcss.config.js
┣ 📜README.md
┣ 📜tailwind.config.js
┗ 📜vite.config.js


```

## Requisitos previos

Antes de iniciar, asegúrate de contar con los siguientes requisitos:

  1. Node.js: Asegúrate de tener instalado Node.js v20 o superior. Puedes verificar tu versión ejecutando:
  ```
  node -v
  ```
  - Copiar el archivo .env-example que se encuentra en la raíz del proyecto y renómbralo a .env
  - Ajusta los valores del archivo ```.env``` según el entorno, como la URL del backend o claves de API.

## Instalación frontend

Sigue estos pasos para configurar e iniciar el proyecto:

1. Clona el repositorio en tu máquina local:
```
git clone https://github.com/DevissonV/core-staff-frontend.git
cd core-staff-frontend
```
2. Ejecuta el siguiente comando para instalar las dependencias usando pnpm:
```
pnpm install
```
3. Asegúrate de que el archivo .env esté configurado correctamente según tu entorno.
4. Ejecuta el siguiente comando para iniciar el servidor local:
```
pnpm dev
```
5.  Por defecto, la aplicación estará disponible en:
```
http://localhost:5173
```

## Creación del compilado

1. Asegúrate de que las variables de entorno en tu archivo .env estén correctamente configuradas para el entorno de producción. Por ejemplo:
### Archivo .env
```
VITE_API_URL=https://api.tu-servidor.com
VITE_ENV=production

```
2. Para crear el compilado de la aplicación, usa el siguiente comando:
```
pnpm build
```
3. Para verificar cómo se verá la aplicación en producción antes de desplegarla, puedes usar el siguiente comando:
```
pnpm preview
```
Este comando inicia un servidor local que sirve el contenido de la carpeta dist. Por defecto, estará disponible en:
```
http://localhost:4173
```


