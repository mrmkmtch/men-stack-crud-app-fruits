# MEN Stack CRUD App - Fruits

A full-stack CRUD (Create, Read, Update, Delete) application for managing fruits, built with the MEN stack (MongoDB, Express.js, Node.js) and EJS templating.

## Features

- **Create**: Add new fruits to the database
- **Read**: View all fruits or individual fruit details
- **Update**: Edit existing fruit information
- **Delete**: Remove fruits from the database
- **Responsive UI**: Clean styling with custom CSS
- **Ready to Eat Status**: Track whether fruits are ready to eat

## Tech Stack

- **MongoDB**: NoSQL database for storing fruit data
- **Express.js**: Web application framework
- **Node.js**: JavaScript runtime environment
- **EJS**: Embedded JavaScript templating
- **Mongoose**: MongoDB object modeling
- **Method Override**: Support for PUT and DELETE HTTP methods
- **Morgan**: HTTP request logger middleware
- **Dotenv**: Environment variable management

## Project Structure

```
men-stack-crud-app-fruits/
├── models/
│   └── fruits.js          # Mongoose schema and model
├── public/
│   └── stylesheets/
│       └── style.css      # Custom styles
├── views/
│   ├── index.ejs          # Landing page
│   └── fruits/
│       ├── index.ejs      # List all fruits
│       ├── new.ejs        # Form to create new fruit
│       ├── show.ejs       # Display single fruit
│       ├── edit.ejs       # Form to edit fruit
│       └── update.ejs     # Update confirmation
├── server.js              # Main application file
├── package.json           # Project dependencies
└── .env                   # Environment variables (not tracked)
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mrmkmtch/men-stack-crud-app-fruits.git
   cd men-stack-crud-app-fruits
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/fruitsdb
   ```
   
   Or use MongoDB Atlas:
   ```env
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/fruitsdb
   ```

4. **Start the application**
   ```bash
   npm start
   ```

5. **Access the application**
   
   Open your browser and navigate to: `http://localhost:3000`

## Usage

### Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/` | Landing page |
| GET | `/fruits` | View all fruits |
| GET | `/fruits/new` | Form to create new fruit |
| POST | `/fruits` | Create a new fruit |
| GET | `/fruits/:fruitId` | View single fruit details |
| GET | `/fruits/:fruitId/edit` | Form to edit fruit |
| PUT | `/fruits/:fruitId` | Update fruit |
| DELETE | `/fruits/:fruitId` | Delete fruit |

### Data Model

Fruits have the following schema:
- `name`: String - Name of the fruit
- `isReadyToEat`: Boolean - Whether the fruit is ready to eat

## Development

### Running in Development Mode

For auto-restart on file changes, install nodemon:
```bash
npm install --save-dev nodemon
```

Add to `package.json` scripts:
```json
"dev": "nodemon server.js"
```

Run with:
```bash
npm run dev
```

## Environment Variables

- `MONGODB_URI`: MongoDB connection string (required)


## Author

M'Khel Mitchell

---

Built with ❤️ using the MEN stack
