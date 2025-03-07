# Greeting App

A simple full-stack web application that allows users to enter their name and receive a personalized greeting. The backend is built with Node.js and Express, while the frontend is developed using React and Vite.

## Features

✅ Simple Express API to generate a greeting message  
✅ Frontend with an input field and button to fetch the greeting  
✅ Responsive and modern UI

## Tech Stack

- **Backend:** Node.js, Express
- **Frontend:** React, Vite, CSS

## Installation & Setup

### Prerequisites

Ensure you have **Node.js** and **npm/yarn** installed on your system.

### Clone the Repository

```sh
git clone https://github.com/YashInTech/greeting-app.git
cd greeting-app
```

### Backend Setup

```sh
cd backend
npm install
node server.js  # Runs the Express server on port 5000
```

### Frontend Setup

```sh
cd frontend
npm install
npm run dev  # Runs the React app (Vite) on port 5173
```

## Usage

1. Open the frontend in your browser (`http://localhost:5173`).
2. Enter your name in the input field.
3. Click the **Get Greeting** button or press **Enter**.
4. The greeting message will appear dynamically.

## API Endpoint

### `GET /api/greet?name=YourName`

#### Response:

```json
{
  "message": "Hello, YourName! Welcome to Younglabs."
}
```

#### Error Handling:

```json
{
  "error": "Name is required."
}
```

## License

This project is open-source under the [MIT License](LICENSE).

---
