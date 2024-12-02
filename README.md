
# Blog Website  

## Description  

A full-stack blog platform built with React.js and Laravel. This project allows users to create, manage, and explore blog posts. It features a modern user interface powered by React.js and a robust backend managed with Laravel.  

### Features:  

- **Dynamic Blog Content**: Create, read, update, and delete blog posts.
- **Frontend Framework**: Built with React.js for a responsive and dynamic user experience.  
- **Backend Framework**: Laravel ensures efficient API handling and database management.  
- **Secure Data**: Implements best practices to protect user data and ensure application security.  

## Demo  

Coming soon: Live demo link will be available here! 🚀  

## Setup Guide  

### Backend Setup (Laravel)  

1. Navigate to the backend directory:  
   ```bash  
   cd blog-app-backend  
   ```  

2. Install dependencies:  
   ```bash  
   composer install  
   ```  

3. Configure environment variables:  
   - Delete the existing `.env` file if it contains sensitive data.  
   - Create a new `.env` file:  
     ```bash  
     cp .env.example .env  
     ```  

4. Set up the database:  
   - Create a database in your DBMS (e.g., MySQL).  
   - Update `.env` with your database credentials:  
     ```
     DB_CONNECTION=mysql  
     DB_HOST=127.0.0.1  
     DB_PORT=3306  
     DB_DATABASE=your_database_name  
     DB_USERNAME=your_username  
     DB_PASSWORD=your_password  
     ```  

5. Run migrations to create database tables:  
   ```bash  
   php artisan migrate  
   ```  

### Frontend Setup (React.js)  

1. Navigate to the frontend directory:  
   ```bash  
   cd react-blog-frontend  
   ```  

2. Install dependencies:  
   ```bash  
   npm install  
   ```  

3. Start the development server:  
   ```bash  
   npm start  
   ```  

## Install  

Install all required dependencies by running the following commands in the respective directories:  

Backend:  
```bash  
composer install  
```  

Frontend:  
```bash  
npm install  
```  

## ENV  

Set up the `.env` files for both frontend and backend. Example `.env` configurations are provided in `frontend/.env.example` and `backend/.env.example`.  

## Start Development  

To run the project locally, start both servers:  

Backend:  
```bash  
php artisan serve  
```  

Frontend:  
```bash  
npm start  
```  

## Deployment  

You can deploy the frontend on Netlify and the backend on services like AWS, Heroku, or any PHP-compatible server.  

## Languages & Tools  

- **Laravel**: Backend development.  
- **React**: Frontend framework.  
- **Composer**: Dependency management for PHP.  
- **NPM**: Package management for JavaScript.  
- **MySQL**: Database system for data management.  
