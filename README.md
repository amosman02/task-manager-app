**Task Management App**
The Task Management App is a minimalist web application built with React.js for managing tasks. It provides functionality to create, read, and delete tasks. The app communicates with a backend server using Axios and MongoDB for data storage.

**Features**
Create tasks: Users can add new tasks to the task list.
Read tasks: The app displays a list of tasks with their titles.
Delete tasks: Users can delete tasks from the list.
Edit tasks: Users can edit existing tasks on the list.

**Prerequisites**
Before running the app, ensure you have the following installed:

Node.js
MongoDB (or MongoDB Atlas account)

**Installation**

Clone the repository:
git clone https://github.com/your-username/your-repository.git

Install dependencies:
cd your-repository
npm install

**Configuration**
Create a MongoDB Atlas account or set up a local MongoDB database.

In the project directory, create a .env file and set the following environment variables:

MONGODB_URI=your-mongodb-uri

Replace your-mongodb-uri with the connection URI for your MongoDB database.

**Usage**

Start the server:

npm start

Open your browser and navigate to http://localhost:3000 to access the app.

Folder Structure
The project structure is organized as follows:

src/
  |- components/
  |    |- TaskList.js
  |    |- TaskForm.js
  |- App.js
  |- index.js

src/components/: Contains the individual components used in the app.
src/App.js: The main component that renders the app.
src/index.js: Entry point for rendering the app.

**Dependencies**

The app relies on the following dependencies:

React: JavaScript library for building user interfaces.
Axios: Promise-based HTTP client for making API requests.
MongoDB: Database used for data storage.
