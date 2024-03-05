# **Project Name: QUIZICAL**

---

## Project Status: In Development

---

## Description:

A Quiz application where the user can go back to change their answer to a previous question or to skip a question and return later.

The user can select how many questions can be asked, the difficulty level of the questions and what category the questions can be retrieved from.

> [!NOTE]
> Live Link: https://welcometoquizical.netlify.app

---

## Project Screen Shot(s)

    Screenshot of the initial page of the Quizical Web Application, the page asks the user to select how many questions to be asked.

<img src="./Screenshots/Quizical%20Quantity%20Image.png" width="250" height="250">

<details>
    Screenshot of the 2nd page of the Quizical Web Application, the page asks the user to select the difficulty of the questions to be asked.

 <img src="./Screenshots/Quizical Difficulty Image.png" width="250" height="250">

    Screenshot of the 3rd page of the Quizical Web Application, the page asks the user to select the category of the questions to be asked.

 <img src="./Screenshots/Quizical Category Image.png" width="250" height="250">

    Screenshot of the 4th page of the Quizical Web Application, the page asks the user if they are ready to start the quiz. If the user is not ready, they can click the prev button to change their response to the previous questions asked.

 <img src="./Screenshots/Quizical Start Quiz Image.png" width="250" height="250">

    Screenshot of the 5th page and onwards - depending on thequestion quantity that was requested. These pages asks the user a question and they have 4 buttons presented each having a potential answer to the question. Once the user has selected an answer, they can click the Next button to move onto the next question, the user also has an option to click the finish button to retrieve the results of the quiz.

 <img src="./Screenshots/Quizical Question Image.png" width="250" height="250">

     Once the Finish button is selected, the page will rerender and show the a table of the results from the quiz. This table will show how many questions you got right and which were wrong. There is a Refresh button at the bottom where the user can click and start the quiz again from the start.

 <img src="./Screenshots/Quizical Results Image.png" width="250" height="250">

</details>

## Languages, tools and deployment

- HTML
- CSS
- JavaScript
- React.JS : version ^18.2.0
- Vite
- UUID : version ^9.0.1
- Netlify

---

## API'S Used

- https://opentdb.com

---

## Installation and Setup Instructions

Example:

Clone down this repository. You will need node and npm installed globally on your machine.

Installation:

npm install

To Run Test Suite:

npm test

To Start Server:

npm start

To Visit App:

localhost:[portnumber presented]

---

## ToDo's

- [ ] Change the Fetch API with a TanStack Query API.
- [ ] Delete unused classes and ID's in the HTML/JSX.
- [ ] Refactor the CSS file.
- [ ] Refactor each Component file.
- [ ] Add background image with an opacity to sit on top of the gradient background.

---

## Reflection

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
