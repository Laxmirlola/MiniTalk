# MiniTalk Web Application 📩

MiniTalk is a simple web application that allows users to create, edit, and delete messages. It is built using **EJS**, **Express.js**, **CSS**, and **HTML**. This application is ideal for understanding the basics of CRUD (Create, Read, Update, Delete) operations in a web application.


## Features

### Core Functionalities:
1. **Create Messages**: Users can write and post new messages easily.
2. **Edit Messages**: Modify existing messages to correct or update content.
3. **Delete Messages**: Remove unwanted or outdated messages from the list.
4. **Dynamic Views**: All pages are dynamically rendered using **EJS** templates.

### Design:
- A clean and simple UI, styled with CSS for an intuitive user experience.
- Responsive layout to ensure usability across devices.

## Technologies Used

- **Frontend**: 
  - HTML5 and CSS3 for structure and styling.
  - EJS for dynamic HTML templating.
  
- **Backend**:
  - Node.js with Express.js for server-side logic and routing.

## Installation and Setup

### Prerequisites:
1. **Node.js**: Make sure you have Node.js installed on your system.
2. **NPM**: Comes with Node.js, used to install dependencies.

### Steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/Laxmirlola/MiniTalk.git
   ```
2. Navigate to the project directory:
   ```bash
   cd MiniTalk
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   nodemon index.js
   ```
5. Open your browser and navigate to `http://localhost:3000/chats`.

## Usage

1. **Create a Message**:
   - Go to the homepage.
   - Click "New Message".
   - Fill in the form and click "Submit".

2. **Edit a Message**:
   - Locate the message you wish to edit.
   - Click the "Edit" button next to it.
   - Modify the message and click "Update".

3. **Delete a Message**:
   - Locate the message you wish to delete.
   - Click the "Delete" button next to it.


## Future Enhancements

1. **Add User Authentication**: Allow users to sign up, log in, and manage personal messages.
2. **Message Search Feature**: Add a search bar for quick access to messages.
3. **Improved Styling**: Enhance UI with advanced CSS frameworks like Bootstrap or Tailwind CSS.


## Contribution

Contributions are welcome! Feel free to fork the repository and submit a pull request with your changes or improvements.

## Acknowledgments

- Built using the power of **Node.js** and **Express.js**.
- Inspired by simple messaging applications for educational purposes.
