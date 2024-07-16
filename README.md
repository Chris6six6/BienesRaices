# BienesRaices: Create Your Own Real Estate Portal

## Introduction

This project involves building a real estate portal where visitors can create an account, confirm it, and start posting their properties. The portal includes features such as property descriptions, information, maps, property photographs, and a contact form. Interested clients can send messages through the portal. The project covers a wide range of tools and technologies, including Express, MySQL, Sequelize, MVC, Pug, Webpack, TailwindCSS, Dropzone, Leaflet, JWT, and more.

## Project Structure

- **Backend**: Implemented with Express, MySQL, Sequelize, and JWT for authentication.
- **Frontend**: Built with Pug for templating, TailwindCSS for styling, and Webpack for bundling assets.
- **Features**:
  - User Registration and Authentication
  - Property Listings with Descriptions, Maps, and Photographs
  - Contact Form for Interested Clients
  - Messaging System between Clients and Property Owners

## Technologies Used

### Backend
- **Express**: A web application framework for Node.js.
- **MySQL**: A relational database management system.
- **Sequelize**: A promise-based Node.js ORM for MySQL.
- **JWT (JSON Web Token)**: Used for secure user authentication.

### Frontend
- **Pug**: A high-performance template engine.
- **TailwindCSS**: A utility-first CSS framework.
- **Webpack**: A module bundler.
- **Dropzone**: A library for file uploads.
- **Leaflet**: An open-source JavaScript library for interactive maps.

## Features

### User Registration and Authentication
- Users can create an account and confirm it via email.
- Secure login using JWT for authentication.

### Property Listings
- Users can post properties with detailed descriptions and information.
- Properties are displayed with interactive maps using Leaflet.
- Users can upload photographs of their properties using Dropzone.

### Contact Form
- Interested clients can contact property owners through a contact form.
- Messages are sent to the property owners, facilitating communication.

## Setting Up the Project

1. **Clone the Repository**:
    ```bash
    git clone <repository-url>
    cd bienesraices
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Set Up Database**:
    - Create a MySQL database and update the database configuration in the project.
    - Run migrations to set up the database schema:
        ```bash
        npx sequelize-cli db:migrate
        ```

4. **Run the Application**:
    ```bash
    npm run dev
    ```

5. **Run the Server**:
    ```bash
    npm run server
    ```

6. **Access the Application**:
    - Open your browser and navigate to `http://localhost:3000`.

## Folder Structure

- **/models**: Contains the Sequelize models for the database.
- **/controllers**: Contains the Express controllers for handling requests.
- **/views**: Contains the Pug templates for rendering HTML.
- **/public**: Contains static assets like CSS, JavaScript, and images.
- **/routes**: Contains the route definitions for the application.
- **/config**: Contains configuration files, including the database configuration.

## Deployment

https://bienesraices-1oxe.onrender.com/

