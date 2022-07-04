import todo from "../../Images/todo.png";
import rediTalentPool from "../../Images/rediTalentPool.png";
import mealSharing from "../../Images/mealSharing.png";
import portfolio from "../../Images/portfolio.png";

export const myProjects = [
  {
    id: 1,
    name: "ToDo list",
    website: "https://github.com/dinythomas89/todo-list",
    live: "https://dinythomas89.github.io/todo-list/",
    language: "React, CSS",
    image: todo,
    description:
      "A simple react app to add, update and delete todos. Part of the HYF course to understand more about React hooks.",
  },
  {
    id: 2,
    name: "Hangman",
    website: "https://github.com/dinythomas89/hangman",
    live: "https://diny-s-hangman-game.herokuapp.com/",
    language: "React, CSS",
    image:
      "https://t4.ftcdn.net/jpg/03/63/09/07/360_F_363090764_GPQ2Id3whpuLdSJBqwKSKFd0rr9iWbgc.jpg",
    description:
      "A simple hangman game made with react and css. Deployed using Github-pages",
  },
  {
    id: 3,
    name: "Meal-Sharing",
    website: "https://github.com/dinythomas89/meal-sharing",
    live: "https://diny-meal-sharing.herokuapp.com/",
    language: "React, CSS, Nodejs, MySQL, Herokku",
    image: mealSharing,
    description:
      "A project that helps to share meals. The project is developed mainly to understand how to connect the frontend and backend together and to deploy them.",
  },
  {
    id: 4,
    name: "Portfolio",
    website: "https://github.com/dinythomas89/portfolio",
    live: "https://dinythomas89.github.io/my-portfolio/",
    language: "React, CSS, Github-pages",
    image: portfolio,
    description:
      "My portfolio made in react in which I included some of the projects I have made as part of studies or to improve myself",
  },
  {
    id: 5,
    name: "ReDI Talent Pool",
    website:
      "https://www.figma.com/file/OBKlmq25UQljuYyzuWNcVR/Talent-Pool?node-id=38%3A97",
    live: "https://www.figma.com/proto/OBKlmq25UQljuYyzuWNcVR/Talent-Pool?node-id=59%3A372&scaling=scale-down&page-id=38%3A97&starting-point-node-id=59%3A372",
    language: "Figma",
    image: rediTalentPool,
    description:
      "I created this design for the ReDI school Talent Pool which helps their students to find job openings and to apply. I have made surveys, interviews and testing to make this design work. ",
  },
  {
    id: 6,
    name: "Viva - Dress Up",
    website: "https://github.com/dinythomas89/Viva-Dress-up",
    live: "",
    language: "React, Firebase, Typescript, Apollo GraphQL, Stripe, Redux",
    image: "https://cdn-icons-png.flaticon.com/512/5578/5578703.png",
    description: "Its an E-Commerce website. ",
  },
];
