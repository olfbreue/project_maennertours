# Männertours Blog

A blog website built with Vue 3, Bootstrap, Pinia and Supabase.

## Overview

This project is a blog website that showcases the adventures of Männertours. It features a responsive design, easy-to-use interface, and a robust backend powered by Supabase.

## Features

* Responsive design for optimal viewing on desktop and mobile devices
* Easy-to-use interface for navigating through blog posts and videos
* Robust backend powered by Supabase for storing and retrieving data
* Support for multiple languages using Vue I18n

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Technologies Used
Frontend: The application uses HTML, CSS, and JavaScript for the frontend, with a responsive design for mobile and desktop devices.
Backend: The application uses a Python-based backend, with the Flask web framework for building the API and handling requests.
Database: The application uses a relational database management system (RDBMS) to store data, with SQLAlchemy as the ORM (Object-Relational Mapping) tool.
Payment Gateway: The application integrates with a payment gateway (e.g., Stripe) for online payments.


## Project Structure
The project is organized in  the following way:

app: The main application directory, containing the Flask app, models, views, and templates.
routes: The directory containing route definitions for the application.
components: These are containers used in views
views: Different views containing the above mentioned components, called by RouterView
assets: The directory containing static assets, such as CSS, JavaScript, and image files.


## Installation and Setup
To set up the project, follow these steps:

Clone the repository: Clone the project repository using Git.
Install dependencies: Install the required dependencies using pip, including Flask, SQLAlchemy, and other libraries.
Create a database: Create a database using the RDBMS of your choice (e.g., PostgreSQL, MySQL).
Configure the application: Configure the application by creating a config.py file in the config directory, with environment-specific settings.
Run the application: Run the application using the flask run command.

## Running the Application
To run the application, follow these steps:

Activate the virtual environment: Activate the virtual environment using the source command (e.g., source venv/bin/activate).
Run the application: Run the application using the flask run command.
Access the application: Access the application by navigating to http://localhost:5000 in your web browser.
Testing the Application
To test the application, follow these steps:

## Run unit tests: Run unit tests using the pytest command.
Run integration tests: Run integration tests using the pytest command, with the --integration flag.

## Contributing
Contributions to Project Maennertours are welcome. If you'd like to contribute to the project, please follow these steps:

Fork the repository: Fork the project repository using Git.
Create a branch: Create a new branch for your feature or bug fix.
Make changes: Make changes to the code, following the project's coding standards and best practices.
Commit changes: Commit changes to your branch, with a descriptive commit message.
Create a pull request: Create a pull request to merge your branch into the main repository.
License
Project Maennertours is licensed under the MIT License.
