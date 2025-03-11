# S2.03-Ex1-Estructura-de-dades-MongoDB-N1
# Cul d'Ampolla - Sistema de Gestión de Óptica / Optical Shop Management System

## 📄 Descripción
Sistema de gestión para una tienda de óptica que permite administrar clientes, gafas y ventas. El sistema facilita el seguimiento de las ventas de gafas, información de clientes y gestión de inventario de productos ópticos.

## 💻 Tecnologías Utilizadas
- Node.js
- MongoDB
- Mongoose (ODM)
- Faker.js (para datos de prueba)
- dotenv (gestión de variables de entorno)

## 📋 Requisitos
- Node.js (versión 12 o superior)
- MongoDB (versión 4.0 o superior)
- npm o yarn como gestor de paquetes

## 🛠️ Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/MaraMarchello/S2.03-Ex1-Estructura-de-dades-MongoDB-N1
cd opticians-shop
```

2. Instalar dependencias:
```bash
npm install
```

3. Crear archivo .env en la raíz del proyecto:
```bash
MONGODB_URI=mongodb://localhost:27017/opticians_shop
```

## ▶️ Implementación

1. Asegúrate de que MongoDB esté en ejecución en tu sistema.

2. Para iniciar la aplicación:
```bash
npm start
```

3. Para poblar la base de datos con datos de prueba:
```bash
node src/seed.js
```

## 🌐 Despliegue

1. Configura las variables de entorno necesarias en tu servidor:
   - MONGODB_URI: URL de conexión a tu base de datos MongoDB

2. Construye la aplicación:
```bash
npm run build
```

3. Inicia el servidor:
```bash
npm run start:prod
```

## 🤝 Contribución

1. Haz un Fork del proyecto
2. Crea una rama para tu funcionalidad (`git checkout -b feature/NuevaFuncionalidad`)
3. Haz commit de tus cambios (`git commit -m 'Añadir nueva funcionalidad'`)
4. Haz Push a la rama (`git push origin feature/NuevaFuncionalidad`)
5. Abre un Pull Request

## 📚 Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

```
opticians-shop/
├── src/
│   ├── models.js     # Esquemas y modelos de MongoDB
│   └── seed.js       # Script para poblar la base de datos
├── .env              # Variables de entorno
└── README.md         # Este archivo
```

## 📝 Modelos de Datos

### Cliente (Customer)
- Nombre
- Dirección postal
- Número de teléfono
- Correo electrónico
- Fecha de registro
- Cliente que lo recomendó (opcional)

### Gafas (Glasses)
- Marca
- Tipo de montaje
- Precio
- Proveedor

### Venta (Sale)
- Cliente
- Gafas
- Fecha de venta
- Recomendado por (opcional) 
