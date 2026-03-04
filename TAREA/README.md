# Frontend Angular listo para presentar (GET, POST, DELETE)

## Requisitos
- Node.js + npm
- Angular CLI

## Instalación
```bash
npm install
npm start
```

## Backend
Por defecto el frontend consume:
- GET    http://localhost:8080/productos
- POST   http://localhost:8080/productos
- DELETE http://localhost:8080/productos/{id}

Si tu backend usa otra ruta, cambia `apiUrl` en:
`src/app/services/producto.service.ts`
