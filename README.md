# Windows 95 Portfolio

Welcome to the Windows 95-inspired responsive web portfolio GitHub repository! This project combines the nostalgic look of the Windows 95 operating system with modern web technologies, including React, Tailwind CSS, and Vite. It emulates the classic Windows 95 interface with draggable and interactive windows with the help of Framer Motion. Additionally, it manages the global state using React's Context API and the useReducer hook.

![project3b](https://github.com/renish47/windows95_portfolio/assets/107568859/1c7076e9-eb26-4da4-b182-4f8bfee85b0b)


## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Future Enhancements](#future-enhancements)

## Demo

You can check out a live demo of the Windows 95 Portfolio <a href="https://renishkar-portfolio.netlify.app/" target="_blank">here</a>

## Features

1. **Interactive Windows Icons:**
   - Each section of the portfolio, such as About, Contact, and Projects, is represented by an icon.
   - Single-clicking on an icon selects it.
   - Double-clicking on an icon opens the respective section in a separate draggable window, just like in Windows OS.

2. **Window Management:**
   - Windows can be minimized to the taskbar.
   - Windows can be maximized to occupy the full screen.
   - Windows can be closed.
   - Windows are draggable and can be placed anywhere on the screen.

3. **Window Focus:**
   - When multiple windows are open simultaneously, clicking on a window brings it to the front and makes it the active window.
   - The application keeps track of the order in which windows are opened. When a window is closed, focus shifts to the previously opened window.

4. **Global State Management:**
   - The application's global state is managed using React's Context API along with the useReducer hook.

5. **Contact Page:**
   - The Contact page is designed to resemble a mail app.
   - Users can send messages through the app, and this functionality is powered by the `email.js` package.

6. **Responsiveness:**
   - The application is designed to be responsive, catering to both small and large screens.

## Tech Stack

The project is built using the following technologies:

- React: A JavaScript library for building user interfaces.
- Tailwind CSS: A utility-first CSS framework.
- Vite: A fast development build tool.
- Framer Motion: A production-ready motion library for React.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/renish47/windows95_portfolio.git
   ```

2. Navigate to the project directory:

   ```bash
   cd windows95_portfolio
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your web browser and visit `http://localhost:5173` to see the Windows 95 Portfolio in action.

## Usage

1. **Selecting Sections:**
   - Click once on an icon (About, Contact, Projects) to select it.
   - Double-click on an icon to open the respective section in a new window.

2. **Window Management:**
   - Minimize: Click the minimize button (underscore icon) on the window to send it to the taskbar.
   - Maximize: Click the maximize button (square icon) on the window to make it fullscreen.
   - Close: Click the close button (X icon) on the window to close it.
   - Drag: Click and drag the title bar of a window to move it around the screen.

3. **Window Focus:**
   - Click on a window to bring it to the front and make it the active window.
   - Closing a window shifts focus to the previously opened window.

4. **Contact Page:**
   - Navigate to the Contact section by double-clicking the Contact icon.
   - Use the Contact page to send messages.


## Future Enhancements

We have plans to make this project even more realistic and nostalgic by adding the following features in the future:

1. **Additional Apps:** We intend to add more apps like Paint, Notepad, and games to make the portfolio feel like an operating system.

2. **Bootup and Shutdown Animation:** To enhance the user experience, we plan to add bootup and shutdown animations that mimic the Windows 95 startup and shutdown processes.


Thank you for checking out the Windows 95 Portfolio! We hope you enjoy using it and exploring its nostalgic design and functionalities. If you have any questions or feedback, please feel free to reach out.
