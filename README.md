# Help Center API Assignment

# [Hosted Link] (https://future-skills.vercel.app/);


## question

# How can you implement shared functionality across a component tree?
 * There are different way to handle shared functionality we can use redux to manage the state , 
 we just have to create store and reducers , inside reducers we can make function to do some action like adding updating the 
 and more

 * we can also use context api to manage the state context api is built in react, so we can easily import context api from react

 # Why is the useState hook appropriate for handling state in a complex component?

 * Yes we can say useState can manage and handle  the state but it is not good choice to use useState hook when you have complex app where you have to show same info with different components , it will cause some prop drilling problem where you have pass the props to each component to react the target component






## Description
This project is a full-stack application that includes a backend API and a frontend user interface. The backend is built with Node.js and Express, while the frontend is developed using React. The application allows users to search and view cards related to various topics.
and allow user a new card and search for exiting card

## Table of Contents
- [Usage](#usage) [search ,  create]

# Api Endpoints
- Create a newcard :Method : (POST) [http://localhost/api/cards]
- Get All card :Method : (GET) [http://localhost/api/cards]
- Get single card : (GET) [http://localhost/api/singleCard] (send a query parament as title  in params to get a specific card )
- Technologies Used :  React Node , express , mongodb
- Backend Packeges : express , cors , dotenv , mongoose , 
- Front-end packages : react-router-dom , react-hot-toast , tailwind css

## Installation

### Backend
1. Navigate to the backend folder:
   ```bash
   cd backend 
   run npm i to install the packages
---

### Front-end
1. Navigate to the backend folder:
   ```bash
   cd frontEnd
   run npm i to install the packages
---


# images
![](./images/Screenshot%202024-08-29%20123634.png)
![](./images/Screenshot%202024-08-29%20123644.png)
![](./images/Screenshot%202024-08-29%20123652.png)